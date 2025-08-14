import{g as Cg,r as A,u as mt,_ as wd,s as Ad,c as Vg,a as Ie,R as Y,b as Kb,d as fr,T as Cb,S as zr,e as Hg,f as Gg,h as Vb,o as Ug,A as Hb,i as Kn,j as L,k as cr,l as $r,m as Wa,E as Rd,n as $g,P as Sd,w as Gb}from"./iframe-DCgNKLx1.js";import{r as Ub}from"./index-z_1EzKqs.js";import"./preload-helper-D9Z9MdNV.js";var Yg=Ub();const jd=Cg(Yg);function $b(e,i){var r=e.values,a=wd(e,["values"]),l=i.values,o=wd(i,["values"]);return Ad(l,r)&&Ad(a,o)}function Wg(e){var i=mt(),r=i.formatMessage,a=i.textComponent,l=a===void 0?A.Fragment:a,o=e.id,d=e.description,g=e.defaultMessage,c=e.values,p=e.children,k=e.tagName,y=k===void 0?l:k,_=e.ignoreTag,E={id:o,description:d,defaultMessage:g},O=r(E,c,{ignoreTag:_});return typeof p=="function"?p(Array.isArray(O)?O:[O]):y?A.createElement(y,null,O):A.createElement(A.Fragment,null,O)}Wg.displayName="FormattedMessage";var je=A.memo(Wg,$b);je.displayName="MemoizedFormattedMessage";var ol=(e=>(e.ELEKTRISK_KOMMUNIKASJON="ELEKTRISK_KOMMUNIKASJON",e.LOSJI="LOSJI",e))(ol||{});const Yb=(e,i,r)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${i}&dokumentId=${r}`,Wb=(e,i,r,a)=>{const l=Yb(e,i,r),o=`${i}-${r}`;a&&zb(l,o,a)},zb=(e,i,r)=>{const a=window.open(e,i);a&&setTimeout(()=>{a.document.title=r},1e3)},mr=e=>Vg({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Xb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const ul=A.forwardRef((e,i)=>{var{className:r,size:a="medium",as:l="p",spacing:o,truncate:d,weight:g="regular",align:c,visuallyHidden:p,textColor:k}=e,y=Xb(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=Ie();return Y.createElement(l,Object.assign({},y,{ref:i,className:_(r,"navds-body-long",`navds-body-long--${a}`,mr({spacing:o,truncate:d,weight:g,align:c,visuallyHidden:p,textColor:k}))}))});var Zb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const ui=A.forwardRef((e,i)=>{var{className:r,size:a="medium",as:l="p",spacing:o,truncate:d,weight:g="regular",align:c,visuallyHidden:p,textColor:k}=e,y=Zb(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=Ie();return Y.createElement(l,Object.assign({},y,{ref:i,className:_(r,"navds-body-short",`navds-body-short--${a}`,mr({spacing:o,truncate:d,weight:g,align:c,visuallyHidden:p,textColor:k}))}))});var Jb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Qb=A.forwardRef((e,i)=>{var{className:r,size:a="medium",spacing:l,uppercase:o,as:d="p",truncate:g,weight:c="regular",align:p,visuallyHidden:k,textColor:y}=e,_=Jb(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:E}=Ie();return Y.createElement(d,Object.assign({},_,{ref:i,className:E(r,"navds-detail",mr({spacing:l,truncate:g,weight:c,align:p,visuallyHidden:k,textColor:y,uppercase:o}),{"navds-detail--small":a==="small"})}))});var e0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const n0=A.forwardRef((e,i)=>{var{children:r,className:a,size:l,spacing:o,as:d="p",showIcon:g=!1}=e,c=e0(e,["children","className","size","spacing","as","showIcon"]);const{cn:p}=Ie();return Y.createElement(d,Object.assign({},c,{ref:i,className:p("navds-error-message","navds-label",a,mr({spacing:o}),{"navds-label--small":l==="small","navds-error-message--show-icon":g})}),g&&Y.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},Y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var t0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const zg=A.forwardRef((e,i)=>{var{level:r="1",size:a,className:l,as:o,spacing:d,align:g,visuallyHidden:c,textColor:p}=e,k=t0(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:y}=Ie(),_=o??`h${r}`;return Y.createElement(_,Object.assign({},k,{ref:i,className:y(l,"navds-heading",`navds-heading--${a}`,mr({spacing:d,align:g,visuallyHidden:c,textColor:p}))}))});var r0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};A.forwardRef((e,i)=>{var{className:r,spacing:a,as:l="p"}=e,o=r0(e,["className","spacing","as"]);const{cn:d}=Ie();return Y.createElement(l,Object.assign({},o,{ref:i,className:d(r,"navds-ingress",{"navds-typo--spacing":!!a})}))});var a0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const xl=A.forwardRef((e,i)=>{var{className:r,size:a="medium",as:l="label",spacing:o,visuallyHidden:d,textColor:g}=e,c=a0(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:p}=Ie();return Y.createElement(l,Object.assign({},c,{ref:i,className:p(r,"navds-label",mr({spacing:o,visuallyHidden:d,textColor:g}),{"navds-label--small":a==="small"})}))});function Xr(e,i){const r=Object.entries(e).filter(([a])=>!i.includes(a));return Object.fromEntries(r)}let Nd=0;function i0(e){const[i,r]=A.useState(e),a=e||i;return A.useEffect(()=>{i==null&&(Nd+=1,r(`aksel-id-${Nd}`))},[i]),a}const Id=Y.useId;function di(e){var i;if(Id!==void 0){const r=Id();return e??r.replace(/(:)/g,"")}return(i=i0(e))!==null&&i!==void 0?i:""}function Od(e,i=[]){const r=A.useRef(e);return A.useEffect(()=>{r.current=e}),A.useCallback((...a)=>{var l;return(l=r.current)===null||l===void 0?void 0:l.call(r,...a)},i)}function Xg({value:e,defaultValue:i,onChange:r}){const a=Od(r),[l,o]=A.useState(i),d=e!==void 0,g=d?e:l,c=Od(p=>{const y=typeof p=="function"?p(g):p;d||o(y),a(y)},[d,a,g]);return[g,c]}let Pd=0;function s0(e){const[i,r]=A.useState(e),a=e||i;return A.useEffect(()=>{i==null&&(Pd+=1,r(`aksel-icon-${Pd}`))},[i]),a}const Bd=Y.useId;function pt(e){var i;return Bd!==void 0?Bd().replace(/(:)/g,""):(i=s0(e))!==null&&i!==void 0?i:""}var l0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const o0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=l0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var u0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const d0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=u0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var g0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const f0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=g0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var c0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Cs=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=c0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12",clipRule:"evenodd"}))});var m0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const p0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=m0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var h0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Zg=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=h0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var k0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const v0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=k0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var y0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const b0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=y0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var E0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const xd=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=E0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});function ql(e,i,{checkForDefaultPrevented:r=!0}={}){return function(l){if(e?.(l),r===!1||!l.defaultPrevented)return i?.(l)}}const[hA,T0]=Kb({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function Vs(e){return(i={})=>{const r=i.width?String(i.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function Dr(e){return(i,r)=>{const a=r?.context?String(r.context):"standalone";let l;if(a==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,g=r?.width?String(r.width):d;l=e.formattingValues[g]||e.formattingValues[d]}else{const d=e.defaultWidth,g=r?.width?String(r.width):e.defaultWidth;l=e.values[g]||e.values[d]}const o=e.argumentCallback?e.argumentCallback(i):i;return l[o]}}function Mr(e){return(i,r={})=>{const a=r.width,l=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=i.match(l);if(!o)return null;const d=o[0],g=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(g)?w0(g,y=>y.test(d)):_0(g,y=>y.test(d));let p;p=e.valueCallback?e.valueCallback(c):c,p=r.valueCallback?r.valueCallback(p):p;const k=i.slice(d.length);return{value:p,rest:k}}}function _0(e,i){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&i(e[r]))return r}function w0(e,i){for(let r=0;r<e.length;r++)if(i(e[r]))return r}function A0(e){return(i,r={})=>{const a=i.match(e.matchPattern);if(!a)return null;const l=a[0],o=i.match(e.parsePattern);if(!o)return null;let d=e.valueCallback?e.valueCallback(o[0]):o[0];d=r.valueCallback?r.valueCallback(d):d;const g=i.slice(l.length);return{value:d,rest:g}}}const R0={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},S0=(e,i,r)=>{let a;const l=R0[e];return typeof l=="string"?a=l:i===1?a=l.one:a=l.other.replace("{{count}}",String(i)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+a:a+" siden":a},j0={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},N0={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},I0={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},O0={date:Vs({formats:j0,defaultWidth:"full"}),time:Vs({formats:N0,defaultWidth:"full"}),dateTime:Vs({formats:I0,defaultWidth:"full"})},P0={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},B0=(e,i,r,a)=>P0[e],x0={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},q0={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},D0={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},M0={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},L0={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},F0=(e,i)=>Number(e)+".",K0={ordinalNumber:F0,era:Dr({values:x0,defaultWidth:"wide"}),quarter:Dr({values:q0,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Dr({values:D0,defaultWidth:"wide"}),day:Dr({values:M0,defaultWidth:"wide"}),dayPeriod:Dr({values:L0,defaultWidth:"wide"})},C0=/^(\d+)\.?/i,V0=/\d+/i,H0={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},G0={any:[/^f/i,/^e/i]},U0={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},$0={any:[/1/i,/2/i,/3/i,/4/i]},Y0={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},W0={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},z0={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},X0={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Z0={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},J0={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Q0={ordinalNumber:A0({matchPattern:C0,parsePattern:V0,valueCallback:e=>parseInt(e,10)}),era:Mr({matchPatterns:H0,defaultMatchWidth:"wide",parsePatterns:G0,defaultParseWidth:"any"}),quarter:Mr({matchPatterns:U0,defaultMatchWidth:"wide",parsePatterns:$0,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Mr({matchPatterns:Y0,defaultMatchWidth:"wide",parsePatterns:W0,defaultParseWidth:"any"}),day:Mr({matchPatterns:z0,defaultMatchWidth:"wide",parsePatterns:X0,defaultParseWidth:"any"}),dayPeriod:Mr({matchPatterns:Z0,defaultMatchWidth:"any",parsePatterns:J0,defaultParseWidth:"any"})},eE={code:"nb",formatDistance:S0,formatLong:O0,formatRelative:B0,localize:K0,match:Q0,options:{weekStartsOn:1,firstWeekContainsDate:4}},nE={global:{dateLocale:eE,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},tE=A.createContext({locale:nE}),Jg=()=>A.useContext(tE);var rE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const aE=A.forwardRef((e,i)=>{var r,a,l,{rootElement:o,asChild:d}=e,g=rE(e,["rootElement","asChild"]);const c=fr(!1),p=(r=Jg())===null||r===void 0?void 0:r.rootElement,k=(a=o??p)!==null&&a!==void 0?a:(l=globalThis?.document)===null||l===void 0?void 0:l.body,y=d?zr:"div";return c?k?jd.createPortal(Y.createElement(Cb,{theme:c.theme,asChild:!0,hasBackground:!1,"data-color":c.color},Y.createElement(y,Object.assign({ref:i,"data-aksel-portal":""},g))),k):null:k?jd.createPortal(Y.createElement(y,Object.assign({ref:i,"data-aksel-portal":""},g)),k):null}),or=Math.min,Ft=Math.max,ri=Math.round,za=Math.floor,zn=e=>({x:e,y:e}),iE={left:"right",right:"left",bottom:"top",top:"bottom"},sE={start:"end",end:"start"};function dl(e,i,r){return Ft(e,or(i,r))}function Zr(e,i){return typeof e=="function"?e(i):e}function Kt(e){return e.split("-")[0]}function Jr(e){return e.split("-")[1]}function Qg(e){return e==="x"?"y":"x"}function Dl(e){return e==="y"?"height":"width"}function ur(e){return["top","bottom"].includes(Kt(e))?"y":"x"}function Ml(e){return Qg(ur(e))}function lE(e,i,r){r===void 0&&(r=!1);const a=Jr(e),l=Ml(e),o=Dl(l);let d=l==="x"?a===(r?"end":"start")?"right":"left":a==="start"?"bottom":"top";return i.reference[o]>i.floating[o]&&(d=ai(d)),[d,ai(d)]}function oE(e){const i=ai(e);return[gl(e),i,gl(i)]}function gl(e){return e.replace(/start|end/g,i=>sE[i])}function uE(e,i,r){const a=["left","right"],l=["right","left"],o=["top","bottom"],d=["bottom","top"];switch(e){case"top":case"bottom":return r?i?l:a:i?a:l;case"left":case"right":return i?o:d;default:return[]}}function dE(e,i,r,a){const l=Jr(e);let o=uE(Kt(e),r==="start",a);return l&&(o=o.map(d=>d+"-"+l),i&&(o=o.concat(o.map(gl)))),o}function ai(e){return e.replace(/left|right|bottom|top/g,i=>iE[i])}function gE(e){return{top:0,right:0,bottom:0,left:0,...e}}function ef(e){return typeof e!="number"?gE(e):{top:e,right:e,bottom:e,left:e}}function ii(e){const{x:i,y:r,width:a,height:l}=e;return{width:a,height:l,top:r,left:i,right:i+a,bottom:r+l,x:i,y:r}}function qd(e,i,r){let{reference:a,floating:l}=e;const o=ur(i),d=Ml(i),g=Dl(d),c=Kt(i),p=o==="y",k=a.x+a.width/2-l.width/2,y=a.y+a.height/2-l.height/2,_=a[g]/2-l[g]/2;let E;switch(c){case"top":E={x:k,y:a.y-l.height};break;case"bottom":E={x:k,y:a.y+a.height};break;case"right":E={x:a.x+a.width,y};break;case"left":E={x:a.x-l.width,y};break;default:E={x:a.x,y:a.y}}switch(Jr(i)){case"start":E[d]-=_*(r&&p?-1:1);break;case"end":E[d]+=_*(r&&p?-1:1);break}return E}const fE=async(e,i,r)=>{const{placement:a="bottom",strategy:l="absolute",middleware:o=[],platform:d}=r,g=o.filter(Boolean),c=await(d.isRTL==null?void 0:d.isRTL(i));let p=await d.getElementRects({reference:e,floating:i,strategy:l}),{x:k,y}=qd(p,a,c),_=a,E={},O=0;for(let T=0;T<g.length;T++){const{name:b,fn:R}=g[T],{x:P,y:j,data:H,reset:I}=await R({x:k,y,initialPlacement:a,placement:_,strategy:l,middlewareData:E,rects:p,platform:d,elements:{reference:e,floating:i}});k=P??k,y=j??y,E={...E,[b]:{...E[b],...H}},I&&O<=50&&(O++,typeof I=="object"&&(I.placement&&(_=I.placement),I.rects&&(p=I.rects===!0?await d.getElementRects({reference:e,floating:i,strategy:l}):I.rects),{x:k,y}=qd(p,_,c)),T=-1)}return{x:k,y,placement:_,strategy:l,middlewareData:E}};async function nf(e,i){var r;i===void 0&&(i={});const{x:a,y:l,platform:o,rects:d,elements:g,strategy:c}=e,{boundary:p="clippingAncestors",rootBoundary:k="viewport",elementContext:y="floating",altBoundary:_=!1,padding:E=0}=Zr(i,e),O=ef(E),b=g[_?y==="floating"?"reference":"floating":y],R=ii(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(b)))==null||r?b:b.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(g.floating)),boundary:p,rootBoundary:k,strategy:c})),P=y==="floating"?{x:a,y:l,width:d.floating.width,height:d.floating.height}:d.reference,j=await(o.getOffsetParent==null?void 0:o.getOffsetParent(g.floating)),H=await(o.isElement==null?void 0:o.isElement(j))?await(o.getScale==null?void 0:o.getScale(j))||{x:1,y:1}:{x:1,y:1},I=ii(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:g,rect:P,offsetParent:j,strategy:c}):P);return{top:(R.top-I.top+O.top)/H.y,bottom:(I.bottom-R.bottom+O.bottom)/H.y,left:(R.left-I.left+O.left)/H.x,right:(I.right-R.right+O.right)/H.x}}const cE=e=>({name:"arrow",options:e,async fn(i){const{x:r,y:a,placement:l,rects:o,platform:d,elements:g,middlewareData:c}=i,{element:p,padding:k=0}=Zr(e,i)||{};if(p==null)return{};const y=ef(k),_={x:r,y:a},E=Ml(l),O=Dl(E),T=await d.getDimensions(p),b=E==="y",R=b?"top":"left",P=b?"bottom":"right",j=b?"clientHeight":"clientWidth",H=o.reference[O]+o.reference[E]-_[E]-o.floating[O],I=_[E]-o.reference[E],V=await(d.getOffsetParent==null?void 0:d.getOffsetParent(p));let x=V?V[j]:0;(!x||!await(d.isElement==null?void 0:d.isElement(V)))&&(x=g.floating[j]||o.floating[O]);const q=H/2-I/2,z=x/2-T[O]/2-1,Q=or(y[R],z),Z=or(y[P],z),J=Q,F=x-T[O]-Z,D=x/2-T[O]/2+q,X=dl(J,D,F),te=!c.arrow&&Jr(l)!=null&&D!==X&&o.reference[O]/2-(D<J?Q:Z)-T[O]/2<0,W=te?D<J?D-J:D-F:0;return{[E]:_[E]+W,data:{[E]:X,centerOffset:D-X-W,...te&&{alignmentOffset:W}},reset:te}}}),mE=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(i){var r,a;const{placement:l,middlewareData:o,rects:d,initialPlacement:g,platform:c,elements:p}=i,{mainAxis:k=!0,crossAxis:y=!0,fallbackPlacements:_,fallbackStrategy:E="bestFit",fallbackAxisSideDirection:O="none",flipAlignment:T=!0,...b}=Zr(e,i);if((r=o.arrow)!=null&&r.alignmentOffset)return{};const R=Kt(l),P=ur(g),j=Kt(g)===g,H=await(c.isRTL==null?void 0:c.isRTL(p.floating)),I=_||(j||!T?[ai(g)]:oE(g)),V=O!=="none";!_&&V&&I.push(...dE(g,T,O,H));const x=[g,...I],q=await nf(i,b),z=[];let Q=((a=o.flip)==null?void 0:a.overflows)||[];if(k&&z.push(q[R]),y){const D=lE(l,d,H);z.push(q[D[0]],q[D[1]])}if(Q=[...Q,{placement:l,overflows:z}],!z.every(D=>D<=0)){var Z,J;const D=(((Z=o.flip)==null?void 0:Z.index)||0)+1,X=x[D];if(X)return{data:{index:D,overflows:Q},reset:{placement:X}};let te=(J=Q.filter(W=>W.overflows[0]<=0).sort((W,G)=>W.overflows[1]-G.overflows[1])[0])==null?void 0:J.placement;if(!te)switch(E){case"bestFit":{var F;const W=(F=Q.filter(G=>{if(V){const $=ur(G.placement);return $===P||$==="y"}return!0}).map(G=>[G.placement,G.overflows.filter($=>$>0).reduce(($,ae)=>$+ae,0)]).sort((G,$)=>G[1]-$[1])[0])==null?void 0:F[0];W&&(te=W);break}case"initialPlacement":te=g;break}if(l!==te)return{reset:{placement:te}}}return{}}}};async function pE(e,i){const{placement:r,platform:a,elements:l}=e,o=await(a.isRTL==null?void 0:a.isRTL(l.floating)),d=Kt(r),g=Jr(r),c=ur(r)==="y",p=["left","top"].includes(d)?-1:1,k=o&&c?-1:1,y=Zr(i,e);let{mainAxis:_,crossAxis:E,alignmentAxis:O}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:{mainAxis:y.mainAxis||0,crossAxis:y.crossAxis||0,alignmentAxis:y.alignmentAxis};return g&&typeof O=="number"&&(E=g==="end"?O*-1:O),c?{x:E*k,y:_*p}:{x:_*p,y:E*k}}const hE=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(i){var r,a;const{x:l,y:o,placement:d,middlewareData:g}=i,c=await pE(i,e);return d===((r=g.offset)==null?void 0:r.placement)&&(a=g.arrow)!=null&&a.alignmentOffset?{}:{x:l+c.x,y:o+c.y,data:{...c,placement:d}}}}},kE=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(i){const{x:r,y:a,placement:l}=i,{mainAxis:o=!0,crossAxis:d=!1,limiter:g={fn:b=>{let{x:R,y:P}=b;return{x:R,y:P}}},...c}=Zr(e,i),p={x:r,y:a},k=await nf(i,c),y=ur(Kt(l)),_=Qg(y);let E=p[_],O=p[y];if(o){const b=_==="y"?"top":"left",R=_==="y"?"bottom":"right",P=E+k[b],j=E-k[R];E=dl(P,E,j)}if(d){const b=y==="y"?"top":"left",R=y==="y"?"bottom":"right",P=O+k[b],j=O-k[R];O=dl(P,O,j)}const T=g.fn({...i,[_]:E,[y]:O});return{...T,data:{x:T.x-r,y:T.y-a,enabled:{[_]:o,[y]:d}}}}}};function gi(){return typeof window<"u"}function pr(e){return tf(e)?(e.nodeName||"").toLowerCase():"#document"}function cn(e){var i;return(e==null||(i=e.ownerDocument)==null?void 0:i.defaultView)||window}function Jn(e){var i;return(i=(tf(e)?e.ownerDocument:e.document)||window.document)==null?void 0:i.documentElement}function tf(e){return gi()?e instanceof Node||e instanceof cn(e).Node:!1}function Pe(e){return gi()?e instanceof Element||e instanceof cn(e).Element:!1}function Tn(e){return gi()?e instanceof HTMLElement||e instanceof cn(e).HTMLElement:!1}function si(e){return!gi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof cn(e).ShadowRoot}function Qr(e){const{overflow:i,overflowX:r,overflowY:a,display:l}=Bn(e);return/auto|scroll|overlay|hidden|clip/.test(i+a+r)&&!["inline","contents"].includes(l)}function vE(e){return["table","td","th"].includes(pr(e))}function fi(e){return[":popover-open",":modal"].some(i=>{try{return e.matches(i)}catch{return!1}})}function Ll(e){const i=ci(),r=Pe(e)?Bn(e):e;return["transform","translate","scale","rotate","perspective"].some(a=>r[a]?r[a]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!i&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!i&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(a=>(r.willChange||"").includes(a))||["paint","layout","strict","content"].some(a=>(r.contain||"").includes(a))}function yE(e){let i=ct(e);for(;Tn(i)&&!ft(i);){if(Ll(i))return i;if(fi(i))return null;i=ct(i)}return null}function ci(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ft(e){return["html","body","#document"].includes(pr(e))}function Bn(e){return cn(e).getComputedStyle(e)}function mi(e){return Pe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ct(e){if(pr(e)==="html")return e;const i=e.assignedSlot||e.parentNode||si(e)&&e.host||Jn(e);return si(i)?i.host:i}function rf(e){const i=ct(e);return ft(i)?e.ownerDocument?e.ownerDocument.body:e.body:Tn(i)&&Qr(i)?i:rf(i)}function At(e,i,r){var a;i===void 0&&(i=[]),r===void 0&&(r=!0);const l=rf(e),o=l===((a=e.ownerDocument)==null?void 0:a.body),d=cn(l);if(o){const g=fl(d);return i.concat(d,d.visualViewport||[],Qr(l)?l:[],g&&r?At(g):[])}return i.concat(l,At(l,[],r))}function fl(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function af(e){const i=Bn(e);let r=parseFloat(i.width)||0,a=parseFloat(i.height)||0;const l=Tn(e),o=l?e.offsetWidth:r,d=l?e.offsetHeight:a,g=ri(r)!==o||ri(a)!==d;return g&&(r=o,a=d),{width:r,height:a,$:g}}function Fl(e){return Pe(e)?e:e.contextElement}function ir(e){const i=Fl(e);if(!Tn(i))return zn(1);const r=i.getBoundingClientRect(),{width:a,height:l,$:o}=af(i);let d=(o?ri(r.width):r.width)/a,g=(o?ri(r.height):r.height)/l;return(!d||!Number.isFinite(d))&&(d=1),(!g||!Number.isFinite(g))&&(g=1),{x:d,y:g}}const bE=zn(0);function sf(e){const i=cn(e);return!ci()||!i.visualViewport?bE:{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function EE(e,i,r){return i===void 0&&(i=!1),!r||i&&r!==cn(e)?!1:i}function Ct(e,i,r,a){i===void 0&&(i=!1),r===void 0&&(r=!1);const l=e.getBoundingClientRect(),o=Fl(e);let d=zn(1);i&&(a?Pe(a)&&(d=ir(a)):d=ir(e));const g=EE(o,r,a)?sf(o):zn(0);let c=(l.left+g.x)/d.x,p=(l.top+g.y)/d.y,k=l.width/d.x,y=l.height/d.y;if(o){const _=cn(o),E=a&&Pe(a)?cn(a):a;let O=_,T=fl(O);for(;T&&a&&E!==O;){const b=ir(T),R=T.getBoundingClientRect(),P=Bn(T),j=R.left+(T.clientLeft+parseFloat(P.paddingLeft))*b.x,H=R.top+(T.clientTop+parseFloat(P.paddingTop))*b.y;c*=b.x,p*=b.y,k*=b.x,y*=b.y,c+=j,p+=H,O=cn(T),T=fl(O)}}return ii({width:k,height:y,x:c,y:p})}function Kl(e,i){const r=mi(e).scrollLeft;return i?i.left+r:Ct(Jn(e)).left+r}function lf(e,i,r){r===void 0&&(r=!1);const a=e.getBoundingClientRect(),l=a.left+i.scrollLeft-(r?0:Kl(e,a)),o=a.top+i.scrollTop;return{x:l,y:o}}function TE(e){let{elements:i,rect:r,offsetParent:a,strategy:l}=e;const o=l==="fixed",d=Jn(a),g=i?fi(i.floating):!1;if(a===d||g&&o)return r;let c={scrollLeft:0,scrollTop:0},p=zn(1);const k=zn(0),y=Tn(a);if((y||!y&&!o)&&((pr(a)!=="body"||Qr(d))&&(c=mi(a)),Tn(a))){const E=Ct(a);p=ir(a),k.x=E.x+a.clientLeft,k.y=E.y+a.clientTop}const _=d&&!y&&!o?lf(d,c,!0):zn(0);return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-c.scrollLeft*p.x+k.x+_.x,y:r.y*p.y-c.scrollTop*p.y+k.y+_.y}}function _E(e){return Array.from(e.getClientRects())}function wE(e){const i=Jn(e),r=mi(e),a=e.ownerDocument.body,l=Ft(i.scrollWidth,i.clientWidth,a.scrollWidth,a.clientWidth),o=Ft(i.scrollHeight,i.clientHeight,a.scrollHeight,a.clientHeight);let d=-r.scrollLeft+Kl(e);const g=-r.scrollTop;return Bn(a).direction==="rtl"&&(d+=Ft(i.clientWidth,a.clientWidth)-l),{width:l,height:o,x:d,y:g}}function AE(e,i){const r=cn(e),a=Jn(e),l=r.visualViewport;let o=a.clientWidth,d=a.clientHeight,g=0,c=0;if(l){o=l.width,d=l.height;const p=ci();(!p||p&&i==="fixed")&&(g=l.offsetLeft,c=l.offsetTop)}return{width:o,height:d,x:g,y:c}}function RE(e,i){const r=Ct(e,!0,i==="fixed"),a=r.top+e.clientTop,l=r.left+e.clientLeft,o=Tn(e)?ir(e):zn(1),d=e.clientWidth*o.x,g=e.clientHeight*o.y,c=l*o.x,p=a*o.y;return{width:d,height:g,x:c,y:p}}function Dd(e,i,r){let a;if(i==="viewport")a=AE(e,r);else if(i==="document")a=wE(Jn(e));else if(Pe(i))a=RE(i,r);else{const l=sf(e);a={x:i.x-l.x,y:i.y-l.y,width:i.width,height:i.height}}return ii(a)}function of(e,i){const r=ct(e);return r===i||!Pe(r)||ft(r)?!1:Bn(r).position==="fixed"||of(r,i)}function SE(e,i){const r=i.get(e);if(r)return r;let a=At(e,[],!1).filter(g=>Pe(g)&&pr(g)!=="body"),l=null;const o=Bn(e).position==="fixed";let d=o?ct(e):e;for(;Pe(d)&&!ft(d);){const g=Bn(d),c=Ll(d);!c&&g.position==="fixed"&&(l=null),(o?!c&&!l:!c&&g.position==="static"&&!!l&&["absolute","fixed"].includes(l.position)||Qr(d)&&!c&&of(e,d))?a=a.filter(k=>k!==d):l=g,d=ct(d)}return i.set(e,a),a}function jE(e){let{element:i,boundary:r,rootBoundary:a,strategy:l}=e;const d=[...r==="clippingAncestors"?fi(i)?[]:SE(i,this._c):[].concat(r),a],g=d[0],c=d.reduce((p,k)=>{const y=Dd(i,k,l);return p.top=Ft(y.top,p.top),p.right=or(y.right,p.right),p.bottom=or(y.bottom,p.bottom),p.left=Ft(y.left,p.left),p},Dd(i,g,l));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function NE(e){const{width:i,height:r}=af(e);return{width:i,height:r}}function IE(e,i,r){const a=Tn(i),l=Jn(i),o=r==="fixed",d=Ct(e,!0,o,i);let g={scrollLeft:0,scrollTop:0};const c=zn(0);if(a||!a&&!o)if((pr(i)!=="body"||Qr(l))&&(g=mi(i)),a){const _=Ct(i,!0,o,i);c.x=_.x+i.clientLeft,c.y=_.y+i.clientTop}else l&&(c.x=Kl(l));const p=l&&!a&&!o?lf(l,g):zn(0),k=d.left+g.scrollLeft-c.x-p.x,y=d.top+g.scrollTop-c.y-p.y;return{x:k,y,width:d.width,height:d.height}}function Hs(e){return Bn(e).position==="static"}function Md(e,i){if(!Tn(e)||Bn(e).position==="fixed")return null;if(i)return i(e);let r=e.offsetParent;return Jn(e)===r&&(r=r.ownerDocument.body),r}function uf(e,i){const r=cn(e);if(fi(e))return r;if(!Tn(e)){let l=ct(e);for(;l&&!ft(l);){if(Pe(l)&&!Hs(l))return l;l=ct(l)}return r}let a=Md(e,i);for(;a&&vE(a)&&Hs(a);)a=Md(a,i);return a&&ft(a)&&Hs(a)&&!Ll(a)?r:a||yE(e)||r}const OE=async function(e){const i=this.getOffsetParent||uf,r=this.getDimensions,a=await r(e.floating);return{reference:IE(e.reference,await i(e.floating),e.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function PE(e){return Bn(e).direction==="rtl"}const BE={convertOffsetParentRelativeRectToViewportRelativeRect:TE,getDocumentElement:Jn,getClippingRect:jE,getOffsetParent:uf,getElementRects:OE,getClientRects:_E,getDimensions:NE,getScale:ir,isElement:Pe,isRTL:PE};function df(e,i){return e.x===i.x&&e.y===i.y&&e.width===i.width&&e.height===i.height}function xE(e,i){let r=null,a;const l=Jn(e);function o(){var g;clearTimeout(a),(g=r)==null||g.disconnect(),r=null}function d(g,c){g===void 0&&(g=!1),c===void 0&&(c=1),o();const p=e.getBoundingClientRect(),{left:k,top:y,width:_,height:E}=p;if(g||i(),!_||!E)return;const O=za(y),T=za(l.clientWidth-(k+_)),b=za(l.clientHeight-(y+E)),R=za(k),j={rootMargin:-O+"px "+-T+"px "+-b+"px "+-R+"px",threshold:Ft(0,or(1,c))||1};let H=!0;function I(V){const x=V[0].intersectionRatio;if(x!==c){if(!H)return d();x?d(!1,x):a=setTimeout(()=>{d(!1,1e-7)},1e3)}x===1&&!df(p,e.getBoundingClientRect())&&d(),H=!1}try{r=new IntersectionObserver(I,{...j,root:l.ownerDocument})}catch{r=new IntersectionObserver(I,j)}r.observe(e)}return d(!0),o}function Ld(e,i,r,a){a===void 0&&(a={});const{ancestorScroll:l=!0,ancestorResize:o=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:g=typeof IntersectionObserver=="function",animationFrame:c=!1}=a,p=Fl(e),k=l||o?[...p?At(p):[],...At(i)]:[];k.forEach(R=>{l&&R.addEventListener("scroll",r,{passive:!0}),o&&R.addEventListener("resize",r)});const y=p&&g?xE(p,r):null;let _=-1,E=null;d&&(E=new ResizeObserver(R=>{let[P]=R;P&&P.target===p&&E&&(E.unobserve(i),cancelAnimationFrame(_),_=requestAnimationFrame(()=>{var j;(j=E)==null||j.observe(i)})),r()}),p&&!c&&E.observe(p),E.observe(i));let O,T=c?Ct(e):null;c&&b();function b(){const R=Ct(e);T&&!df(T,R)&&r(),T=R,O=requestAnimationFrame(b)}return r(),()=>{var R;k.forEach(P=>{l&&P.removeEventListener("scroll",r),o&&P.removeEventListener("resize",r)}),y?.(),(R=E)==null||R.disconnect(),E=null,c&&cancelAnimationFrame(O)}}const qE=hE,DE=kE,ME=mE,Fd=cE,LE=(e,i,r)=>{const a=new Map,l={platform:BE,...r},o={...l.platform,_c:a};return fE(e,i,{...l,platform:o})};var ei=typeof document<"u"?A.useLayoutEffect:A.useEffect;function li(e,i){if(e===i)return!0;if(typeof e!=typeof i)return!1;if(typeof e=="function"&&e.toString()===i.toString())return!0;let r,a,l;if(e&&i&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==i.length)return!1;for(a=r;a--!==0;)if(!li(e[a],i[a]))return!1;return!0}if(l=Object.keys(e),r=l.length,r!==Object.keys(i).length)return!1;for(a=r;a--!==0;)if(!{}.hasOwnProperty.call(i,l[a]))return!1;for(a=r;a--!==0;){const o=l[a];if(!(o==="_owner"&&e.$$typeof)&&!li(e[o],i[o]))return!1}return!0}return e!==e&&i!==i}function gf(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Kd(e,i){const r=gf(e);return Math.round(i*r)/r}function Gs(e){const i=A.useRef(e);return ei(()=>{i.current=e}),i}function FE(e){e===void 0&&(e={});const{placement:i="bottom",strategy:r="absolute",middleware:a=[],platform:l,elements:{reference:o,floating:d}={},transform:g=!0,whileElementsMounted:c,open:p}=e,[k,y]=A.useState({x:0,y:0,strategy:r,placement:i,middlewareData:{},isPositioned:!1}),[_,E]=A.useState(a);li(_,a)||E(a);const[O,T]=A.useState(null),[b,R]=A.useState(null),P=A.useCallback(G=>{G!==V.current&&(V.current=G,T(G))},[]),j=A.useCallback(G=>{G!==x.current&&(x.current=G,R(G))},[]),H=o||O,I=d||b,V=A.useRef(null),x=A.useRef(null),q=A.useRef(k),z=c!=null,Q=Gs(c),Z=Gs(l),J=Gs(p),F=A.useCallback(()=>{if(!V.current||!x.current)return;const G={placement:i,strategy:r,middleware:_};Z.current&&(G.platform=Z.current),LE(V.current,x.current,G).then($=>{const ae={...$,isPositioned:J.current!==!1};D.current&&!li(q.current,ae)&&(q.current=ae,Yg.flushSync(()=>{y(ae)}))})},[_,i,r,Z,J]);ei(()=>{p===!1&&q.current.isPositioned&&(q.current.isPositioned=!1,y(G=>({...G,isPositioned:!1})))},[p]);const D=A.useRef(!1);ei(()=>(D.current=!0,()=>{D.current=!1}),[]),ei(()=>{if(H&&(V.current=H),I&&(x.current=I),H&&I){if(Q.current)return Q.current(H,I,F);F()}},[H,I,F,Q,z]);const X=A.useMemo(()=>({reference:V,floating:x,setReference:P,setFloating:j}),[P,j]),te=A.useMemo(()=>({reference:H,floating:I}),[H,I]),W=A.useMemo(()=>{const G={position:r,left:0,top:0};if(!te.floating)return G;const $=Kd(te.floating,k.x),ae=Kd(te.floating,k.y);return g?{...G,transform:"translate("+$+"px, "+ae+"px)",...gf(te.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:$,top:ae}},[r,g,te.floating,k.x,k.y]);return A.useMemo(()=>({...k,update:F,refs:X,elements:te,floatingStyles:W}),[k,F,X,te,W])}const KE=e=>{function i(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:a,padding:l}=typeof e=="function"?e(r):e;return a&&i(a)?a.current!=null?Fd({element:a.current,padding:l}).fn(r):{}:a?Fd({element:a,padding:l}).fn(r):{}}}},CE=(e,i)=>({...qE(e),options:[e,i]}),VE=(e,i)=>({...DE(e),options:[e,i]}),HE=(e,i)=>({...ME(e),options:[e,i]}),GE=(e,i)=>({...KE(e),options:[e,i]}),Cd=/(\w+)/g;function UE(e,i){const r=Array.isArray(e)?e:$E(e);for(const a of i){if(!a)continue;let l=a;for(let o=0;o<r.length;o++){const d=l[r[o]];d!==void 0&&(l=d)}if(typeof l=="string")return l}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function $E(e){const i=[];let r=Cd.exec(e);for(;r;){const[,a,l]=r;i.push(a||l),r=Cd.exec(e)}return i}const YE=/{[^}]*}/g;function pi(e,...i){const r=Jg(),a=r.translations||[],l=[...i,...Array.isArray(a)?a.map(d=>d[e]):[a[e]],r.locale[e]];return(d,g)=>{const c=UE(d,l);return g?c.replace(YE,p=>{const k=p.substring(1,p.length-1);if(g[k]===void 0){const y=JSON.stringify(g);throw new Error(`Error translating key '${d}'. No replacement syntax ({}) found for key '${k}'. The following replacements were passed: '${y}'`)}return g[k]}):c}}var WE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const zE=A.forwardRef((e,i)=>{var{className:r,size:a="medium",title:l,transparent:o=!1,variant:d="neutral",id:g,"data-color":c}=e,p=WE(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:k}=Ie(),y=di(),_=pi("Loader");return Y.createElement("svg",Object.assign({"aria-labelledby":g??`loader-${y}`,ref:i,className:k("navds-loader",r,`navds-loader--${a}`,`navds-loader--${d}`,{"navds-loader--transparent":o}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":c??XE(d)},Xr(p,["children"]),{"data-variant":d}),Y.createElement("title",{id:g??`loader-${y}`},l||_("title")),Y.createElement("circle",{className:k("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),Y.createElement("circle",{className:k("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function XE(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var ZE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Cl=A.forwardRef((e,i)=>{var{as:r="button",variant:a="primary",className:l,children:o,size:d="medium",loading:g=!1,disabled:c,icon:p,iconPosition:k="left",onKeyUp:y,"data-color":_}=e,E=ZE(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:O}=Ie(),T=c||g?Xr(E,["href"]):E,b=R=>{R.key===" "&&!c&&!g&&R.currentTarget.click()};return Y.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":_??JE(a),"data-variant":QE(a)},T,{ref:i,onKeyUp:ql(y,b),className:O(l,"navds-button",`navds-button--${a}`,`navds-button--${d}`,{"navds-button--loading":g,"navds-button--icon-only":!!p&&!o,"navds-button--disabled":c??g}),disabled:c??g?!0:void 0}),p&&k==="left"&&Y.createElement("span",{className:O("navds-button__icon")},p),g&&Y.createElement(zE,{size:d}),o&&Y.createElement(xl,{as:"span",size:d==="medium"?"medium":"small"},o),p&&k==="right"&&Y.createElement("span",{className:O("navds-button__icon")},p))});function JE(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function QE(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}function e1(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function n1(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(i=>{let{brand:r,version:a}=i;return r+"/"+a}).join(" "):navigator.userAgent}function t1(){return/apple/i.test(navigator.vendor)}function r1(){return e1().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function a1(){return n1().includes("jsdom/")}const i1="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Vd(e){let i=e.activeElement;for(;((r=i)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;i=i.shadowRoot.activeElement}return i}function Yr(e,i){if(!e||!i)return!1;const r=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(r&&si(r)){let a=i;for(;a;){if(e===a)return!0;a=a.parentNode||a.host}}return!1}function ar(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Us(e,i){if(i==null)return!1;if("composedPath"in e)return e.composedPath().includes(i);const r=e;return r.target!=null&&i.contains(r.target)}function s1(e){return e.matches("html,body")}function Lt(e){return e?.ownerDocument||document}function l1(e){return Tn(e)&&e.matches(i1)}function o1(e){if(!e||a1())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function $s(e,i,r){r===void 0&&(r=!0);let a=e.filter(o=>{var d;return o.parentId===i&&((d=o.context)==null?void 0:d.open)}),l=a;for(;l.length;)l=r?e.filter(o=>{var d;return(d=l)==null?void 0:d.some(g=>{var c;return o.parentId===g.id&&((c=o.context)==null?void 0:c.open)})}):e,a=a.concat(l);return a}function u1(e){return"nativeEvent"in e}function cl(e,i){const r=["mouse","pen"];return r.push("",void 0),r.includes(e)}var dr=typeof document<"u"?A.useLayoutEffect:A.useEffect;const d1={...Hg};function Xa(e){const i=A.useRef(e);return dr(()=>{i.current=e}),i}const g1=d1.useInsertionEffect,f1=g1||(e=>e());function dt(e){const i=A.useRef(()=>{});return f1(()=>{i.current=e}),A.useCallback(function(){for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return i.current==null?void 0:i.current(...a)},[])}const c1="data-floating-ui-focusable",Hd="active",Gd="selected",m1={...Hg};let Ud=!1,p1=0;const $d=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+p1++;function h1(){const[e,i]=A.useState(()=>Ud?$d():void 0);return dr(()=>{e==null&&i($d())},[]),A.useEffect(()=>{Ud=!0},[]),e}const k1=m1.useId,v1=k1||h1;function y1(){const e=new Map;return{emit(i,r){var a;(a=e.get(i))==null||a.forEach(l=>l(r))},on(i,r){e.has(i)||e.set(i,new Set),e.get(i).add(r)},off(i,r){var a;(a=e.get(i))==null||a.delete(r)}}}const b1=A.createContext(null),E1=A.createContext(null),ff=()=>{var e;return((e=A.useContext(b1))==null?void 0:e.id)||null},Vl=()=>A.useContext(E1);function Hl(e){return"data-floating-ui-"+e}function Pn(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Yd=Hl("safe-polygon");function Ys(e,i,r){if(r&&!cl(r))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const a=e();return typeof a=="number"?a:a?.[i]}return e?.[i]}function Ws(e){return typeof e=="function"?e():e}function T1(e,i){i===void 0&&(i={});const{open:r,onOpenChange:a,dataRef:l,events:o,elements:d}=e,{enabled:g=!0,delay:c=0,handleClose:p=null,mouseOnly:k=!1,restMs:y=0,move:_=!0}=i,E=Vl(),O=ff(),T=Xa(p),b=Xa(c),R=Xa(r),P=Xa(y),j=A.useRef(),H=A.useRef(-1),I=A.useRef(),V=A.useRef(-1),x=A.useRef(!0),q=A.useRef(!1),z=A.useRef(()=>{}),Q=A.useRef(!1),Z=A.useCallback(()=>{var W;const G=(W=l.current.openEvent)==null?void 0:W.type;return G?.includes("mouse")&&G!=="mousedown"},[l]);A.useEffect(()=>{if(!g)return;function W(G){let{open:$}=G;$||(Pn(H),Pn(V),x.current=!0,Q.current=!1)}return o.on("openchange",W),()=>{o.off("openchange",W)}},[g,o]),A.useEffect(()=>{if(!g||!T.current||!r)return;function W($){Z()&&a(!1,$,"hover")}const G=Lt(d.floating).documentElement;return G.addEventListener("mouseleave",W),()=>{G.removeEventListener("mouseleave",W)}},[d.floating,r,a,g,T,Z]);const J=A.useCallback(function(W,G,$){G===void 0&&(G=!0),$===void 0&&($="hover");const ae=Ys(b.current,"close",j.current);ae&&!I.current?(Pn(H),H.current=window.setTimeout(()=>a(!1,W,$),ae)):G&&(Pn(H),a(!1,W,$))},[b,a]),F=dt(()=>{z.current(),I.current=void 0}),D=dt(()=>{if(q.current){const W=Lt(d.floating).body;W.style.pointerEvents="",W.removeAttribute(Yd),q.current=!1}}),X=dt(()=>l.current.openEvent?["click","mousedown"].includes(l.current.openEvent.type):!1);A.useEffect(()=>{if(!g)return;function W(le){if(Pn(H),x.current=!1,k&&!cl(j.current)||Ws(P.current)>0&&!Ys(b.current,"open"))return;const he=Ys(b.current,"open",j.current);he?H.current=window.setTimeout(()=>{R.current||a(!0,le,"hover")},he):r||a(!0,le,"hover")}function G(le){if(X()){D();return}z.current();const he=Lt(d.floating);if(Pn(V),Q.current=!1,T.current&&l.current.floatingContext){r||Pn(H),I.current=T.current({...l.current.floatingContext,tree:E,x:le.clientX,y:le.clientY,onClose(){D(),F(),X()||J(le,!0,"safe-polygon")}});const Ke=I.current;he.addEventListener("mousemove",Ke),z.current=()=>{he.removeEventListener("mousemove",Ke)};return}(j.current==="touch"?!Yr(d.floating,le.relatedTarget):!0)&&J(le)}function $(le){X()||l.current.floatingContext&&(T.current==null||T.current({...l.current.floatingContext,tree:E,x:le.clientX,y:le.clientY,onClose(){D(),F(),X()||J(le)}})(le))}function ae(){Pn(H)}function ne(le){X()||J(le,!1)}if(Pe(d.domReference)){const le=d.domReference,he=d.floating;return r&&le.addEventListener("mouseleave",$),_&&le.addEventListener("mousemove",W,{once:!0}),le.addEventListener("mouseenter",W),le.addEventListener("mouseleave",G),he&&(he.addEventListener("mouseleave",$),he.addEventListener("mouseenter",ae),he.addEventListener("mouseleave",ne)),()=>{r&&le.removeEventListener("mouseleave",$),_&&le.removeEventListener("mousemove",W),le.removeEventListener("mouseenter",W),le.removeEventListener("mouseleave",G),he&&(he.removeEventListener("mouseleave",$),he.removeEventListener("mouseenter",ae),he.removeEventListener("mouseleave",ne))}}},[d,g,e,k,_,J,F,D,a,r,R,E,b,T,l,X,P]),dr(()=>{var W;if(g&&r&&(W=T.current)!=null&&W.__options.blockPointerEvents&&Z()){q.current=!0;const $=d.floating;if(Pe(d.domReference)&&$){var G;const ae=Lt(d.floating).body;ae.setAttribute(Yd,"");const ne=d.domReference,le=E==null||(G=E.nodesRef.current.find(he=>he.id===O))==null||(G=G.context)==null?void 0:G.elements.floating;return le&&(le.style.pointerEvents=""),ae.style.pointerEvents="none",ne.style.pointerEvents="auto",$.style.pointerEvents="auto",()=>{ae.style.pointerEvents="",ne.style.pointerEvents="",$.style.pointerEvents=""}}}},[g,r,O,d,E,T,Z]),dr(()=>{r||(j.current=void 0,Q.current=!1,F(),D())},[r,F,D]),A.useEffect(()=>()=>{F(),Pn(H),Pn(V),D()},[g,d.domReference,F,D]);const te=A.useMemo(()=>{function W(G){j.current=G.pointerType}return{onPointerDown:W,onPointerEnter:W,onMouseMove(G){const{nativeEvent:$}=G;function ae(){!x.current&&!R.current&&a(!0,$,"hover")}k&&!cl(j.current)||r||Ws(P.current)===0||Q.current&&G.movementX**2+G.movementY**2<2||(Pn(V),j.current==="touch"?ae():(Q.current=!0,V.current=window.setTimeout(ae,Ws(P.current))))}}},[k,a,r,R,P]);return A.useMemo(()=>g?{reference:te}:{},[g,te])}function zs(e,i){if(!e||!i)return!1;const r=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(r&&si(r)){let a=i;for(;a;){if(e===a)return!0;a=a.parentNode||a.host}}return!1}function _1(e){return"composedPath"in e?e.composedPath()[0]:e.target}const w1={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},A1={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Wd=e=>{var i,r;return{escapeKey:typeof e=="boolean"?e:(i=e?.escapeKey)!=null?i:!1,outsidePress:typeof e=="boolean"?e:(r=e?.outsidePress)!=null?r:!0}};function R1(e,i){i===void 0&&(i={});const{open:r,onOpenChange:a,elements:l,dataRef:o}=e,{enabled:d=!0,escapeKey:g=!0,outsidePress:c=!0,outsidePressEvent:p="pointerdown",referencePress:k=!1,referencePressEvent:y="pointerdown",ancestorScroll:_=!1,bubbles:E,capture:O}=i,T=Vl(),b=dt(typeof c=="function"?c:()=>!1),R=typeof c=="function"?b:c,P=A.useRef(!1),j=A.useRef(!1),{escapeKey:H,outsidePress:I}=Wd(E),{escapeKey:V,outsidePress:x}=Wd(O),q=A.useRef(!1),z=dt(X=>{var te;if(!r||!d||!g||X.key!=="Escape"||q.current)return;const W=(te=o.current.floatingContext)==null?void 0:te.nodeId,G=T?$s(T.nodesRef.current,W):[];if(!H&&(X.stopPropagation(),G.length>0)){let $=!0;if(G.forEach(ae=>{var ne;if((ne=ae.context)!=null&&ne.open&&!ae.context.dataRef.current.__escapeKeyBubbles){$=!1;return}}),!$)return}a(!1,u1(X)?X.nativeEvent:X,"escape-key")}),Q=dt(X=>{var te;const W=()=>{var G;z(X),(G=ar(X))==null||G.removeEventListener("keydown",W)};(te=ar(X))==null||te.addEventListener("keydown",W)}),Z=dt(X=>{var te;const W=P.current;P.current=!1;const G=j.current;if(j.current=!1,p==="click"&&G||W||typeof R=="function"&&!R(X))return;const $=ar(X),ae="["+Hl("inert")+"]",ne=Lt(l.floating).querySelectorAll(ae);let le=Pe($)?$:null;for(;le&&!ft(le);){const qe=ct(le);if(ft(qe)||!Pe(qe))break;le=qe}if(ne.length&&Pe($)&&!s1($)&&!Yr($,l.floating)&&Array.from(ne).every(qe=>!Yr(le,qe)))return;if(Tn($)&&D){const qe=ft($),Ce=Bn($),ve=/auto|scroll/,we=qe||ve.test(Ce.overflowX),Ze=qe||ve.test(Ce.overflowY),Ve=we&&$.clientWidth>0&&$.scrollWidth>$.clientWidth,Ge=Ze&&$.clientHeight>0&&$.scrollHeight>$.clientHeight,_n=Ce.direction==="rtl",Me=Ge&&(_n?X.offsetX<=$.offsetWidth-$.clientWidth:X.offsetX>$.clientWidth),Je=Ve&&X.offsetY>$.clientHeight;if(Me||Je)return}const he=(te=o.current.floatingContext)==null?void 0:te.nodeId,mn=T&&$s(T.nodesRef.current,he).some(qe=>{var Ce;return Us(X,(Ce=qe.context)==null?void 0:Ce.elements.floating)});if(Us(X,l.floating)||Us(X,l.domReference)||mn)return;const Ke=T?$s(T.nodesRef.current,he):[];if(Ke.length>0){let qe=!0;if(Ke.forEach(Ce=>{var ve;if((ve=Ce.context)!=null&&ve.open&&!Ce.context.dataRef.current.__outsidePressBubbles){qe=!1;return}}),!qe)return}a(!1,X,"outside-press")}),J=dt(X=>{var te;const W=()=>{var G;Z(X),(G=ar(X))==null||G.removeEventListener(p,W)};(te=ar(X))==null||te.addEventListener(p,W)});A.useEffect(()=>{if(!r||!d)return;o.current.__escapeKeyBubbles=H,o.current.__outsidePressBubbles=I;let X=-1;function te(ne){a(!1,ne,"ancestor-scroll")}function W(){window.clearTimeout(X),q.current=!0}function G(){X=window.setTimeout(()=>{q.current=!1},ci()?5:0)}const $=Lt(l.floating);g&&($.addEventListener("keydown",V?Q:z,V),$.addEventListener("compositionstart",W),$.addEventListener("compositionend",G)),R&&$.addEventListener(p,x?J:Z,x);let ae=[];return _&&(Pe(l.domReference)&&(ae=At(l.domReference)),Pe(l.floating)&&(ae=ae.concat(At(l.floating))),!Pe(l.reference)&&l.reference&&l.reference.contextElement&&(ae=ae.concat(At(l.reference.contextElement)))),ae=ae.filter(ne=>{var le;return ne!==((le=$.defaultView)==null?void 0:le.visualViewport)}),ae.forEach(ne=>{ne.addEventListener("scroll",te,{passive:!0})}),()=>{g&&($.removeEventListener("keydown",V?Q:z,V),$.removeEventListener("compositionstart",W),$.removeEventListener("compositionend",G)),R&&$.removeEventListener(p,x?J:Z,x),ae.forEach(ne=>{ne.removeEventListener("scroll",te)}),window.clearTimeout(X)}},[o,l,g,R,p,r,a,_,d,H,I,z,V,Q,Z,x,J]),A.useEffect(()=>{P.current=!1},[R,p]);const F=A.useMemo(()=>({onKeyDown:z,...k&&{[w1[y]]:X=>{a(!1,X.nativeEvent,"reference-press")},...y!=="click"&&{onClick(X){a(!1,X.nativeEvent,"reference-press")}}}}),[z,a,k,y]),D=A.useMemo(()=>({onKeyDown:z,onMouseDown(){j.current=!0},onMouseUp(){j.current=!0},[A1[p]]:()=>{P.current=!0}}),[z,p]);return A.useMemo(()=>d?{reference:F,floating:D}:{},[d,F,D])}function S1(e){const{open:i=!1,onOpenChange:r,elements:a}=e,l=v1(),o=A.useRef({}),[d]=A.useState(()=>y1()),g=ff()!=null,[c,p]=A.useState(a.reference),k=dt((E,O,T)=>{o.current.openEvent=E?O:void 0,d.emit("openchange",{open:E,event:O,reason:T,nested:g}),r?.(E,O,T)}),y=A.useMemo(()=>({setPositionReference:p}),[]),_=A.useMemo(()=>({reference:c||a.reference||null,floating:a.floating||null,domReference:a.reference}),[c,a.reference,a.floating]);return A.useMemo(()=>({dataRef:o,open:i,onOpenChange:k,elements:_,events:d,floatingId:l,refs:y}),[i,k,_,d,l,y])}function j1(e){e===void 0&&(e={});const{nodeId:i}=e,r=S1({...e,elements:{reference:null,floating:null,...e.elements}}),a=e.rootContext||r,l=a.elements,[o,d]=A.useState(null),[g,c]=A.useState(null),k=l?.domReference||o,y=A.useRef(null),_=Vl();dr(()=>{k&&(y.current=k)},[k]);const E=FE({...e,elements:{...l,...g&&{reference:g}}}),O=A.useCallback(j=>{const H=Pe(j)?{getBoundingClientRect:()=>j.getBoundingClientRect(),getClientRects:()=>j.getClientRects(),contextElement:j}:j;c(H),E.refs.setReference(H)},[E.refs]),T=A.useCallback(j=>{(Pe(j)||j===null)&&(y.current=j,d(j)),(Pe(E.refs.reference.current)||E.refs.reference.current===null||j!==null&&!Pe(j))&&E.refs.setReference(j)},[E.refs]),b=A.useMemo(()=>({...E.refs,setReference:T,setPositionReference:O,domReference:y}),[E.refs,T,O]),R=A.useMemo(()=>({...E.elements,domReference:k}),[E.elements,k]),P=A.useMemo(()=>({...E,...a,refs:b,elements:R,nodeId:i}),[E,b,R,i,a]);return dr(()=>{a.dataRef.current.floatingContext=P;const j=_?.nodesRef.current.find(H=>H.id===i);j&&(j.context=P)}),A.useMemo(()=>({...E,context:P,refs:b,elements:R}),[E,b,R,P])}function Xs(){return r1()&&t1()}function N1(e,i){i===void 0&&(i={});const{open:r,onOpenChange:a,events:l,dataRef:o,elements:d}=e,{enabled:g=!0,visibleOnly:c=!0}=i,p=A.useRef(!1),k=A.useRef(-1),y=A.useRef(!0);A.useEffect(()=>{if(!g)return;const E=cn(d.domReference);function O(){!r&&Tn(d.domReference)&&d.domReference===Vd(Lt(d.domReference))&&(p.current=!0)}function T(){y.current=!0}function b(){y.current=!1}return E.addEventListener("blur",O),Xs()&&(E.addEventListener("keydown",T,!0),E.addEventListener("pointerdown",b,!0)),()=>{E.removeEventListener("blur",O),Xs()&&(E.removeEventListener("keydown",T,!0),E.removeEventListener("pointerdown",b,!0))}},[d.domReference,r,g]),A.useEffect(()=>{if(!g)return;function E(O){let{reason:T}=O;(T==="reference-press"||T==="escape-key")&&(p.current=!0)}return l.on("openchange",E),()=>{l.off("openchange",E)}},[l,g]),A.useEffect(()=>()=>{Pn(k)},[]);const _=A.useMemo(()=>({onMouseLeave(){p.current=!1},onFocus(E){if(p.current)return;const O=ar(E.nativeEvent);if(c&&Pe(O)){if(Xs()&&!E.relatedTarget){if(!y.current&&!l1(O))return}else if(!o1(O))return}a(!0,E.nativeEvent,"focus")},onBlur(E){p.current=!1;const O=E.relatedTarget,T=E.nativeEvent,b=Pe(O)&&O.hasAttribute(Hl("focus-guard"))&&O.getAttribute("data-type")==="outside";k.current=window.setTimeout(()=>{var R;const P=Vd(d.domReference?d.domReference.ownerDocument:document);!O&&P===d.domReference||Yr((R=o.current.floatingContext)==null?void 0:R.refs.floating.current,P)||Yr(d.domReference,P)||b||a(!1,T,"focus")})}}),[o,d.domReference,a,c]);return A.useMemo(()=>g?{reference:_}:{},[g,_])}function Zs(e,i,r){const a=new Map,l=r==="item";let o=e;if(l&&e){const{[Hd]:d,[Gd]:g,...c}=e;o=c}return{...r==="floating"&&{tabIndex:-1,[c1]:""},...o,...i.map(d=>{const g=d?d[r]:null;return typeof g=="function"?e?g(e):null:g}).concat(e).reduce((d,g)=>(g&&Object.entries(g).forEach(c=>{let[p,k]=c;if(!(l&&[Hd,Gd].includes(p)))if(p.indexOf("on")===0){if(a.has(p)||a.set(p,[]),typeof k=="function"){var y;(y=a.get(p))==null||y.push(k),d[p]=function(){for(var _,E=arguments.length,O=new Array(E),T=0;T<E;T++)O[T]=arguments[T];return(_=a.get(p))==null?void 0:_.map(b=>b(...O)).find(b=>b!==void 0)}}}else d[p]=k}),d),{})}}function I1(e){e===void 0&&(e=[]);const i=e.map(g=>g?.reference),r=e.map(g=>g?.floating),a=e.map(g=>g?.item),l=A.useCallback(g=>Zs(g,e,"reference"),i),o=A.useCallback(g=>Zs(g,e,"floating"),r),d=A.useCallback(g=>Zs(g,e,"item"),a);return A.useMemo(()=>({getReferenceProps:l,getFloatingProps:o,getItemProps:d}),[l,o,d])}function O1(e,i,r){r===void 0&&(r=!0);let a=e.filter(o=>{var d;return o.parentId===i&&((d=o.context)==null?void 0:d.open)}),l=a;for(;l.length;)l=r?e.filter(o=>{var d;return(d=l)==null?void 0:d.some(g=>{var c;return o.parentId===g.id&&((c=o.context)==null?void 0:c.open)})}):e,a=a.concat(l);return a}function zd(e,i){const[r,a]=e;let l=!1;const o=i.length;for(let d=0,g=o-1;d<o;g=d++){const[c,p]=i[d]||[0,0],[k,y]=i[g]||[0,0];p>=a!=y>=a&&r<=(k-c)*(a-p)/(y-p)+c&&(l=!l)}return l}function P1(e,i){return e[0]>=i.x&&e[0]<=i.x+i.width&&e[1]>=i.y&&e[1]<=i.y+i.height}function B1(e){e===void 0&&(e={});const{buffer:i=.5,blockPointerEvents:r=!1,requireIntent:a=!0}=e;let l,o=!1,d=null,g=null,c=performance.now();function p(y,_){const E=performance.now(),O=E-c;if(d===null||g===null||O===0)return d=y,g=_,c=E,null;const T=y-d,b=_-g,P=Math.sqrt(T*T+b*b)/O;return d=y,g=_,c=E,P}const k=y=>{let{x:_,y:E,placement:O,elements:T,onClose:b,nodeId:R,tree:P}=y;return function(H){function I(){clearTimeout(l),b()}if(clearTimeout(l),!T.domReference||!T.floating||O==null||_==null||E==null)return;const{clientX:V,clientY:x}=H,q=[V,x],z=_1(H),Q=H.type==="mouseleave",Z=zs(T.floating,z),J=zs(T.domReference,z),F=T.domReference.getBoundingClientRect(),D=T.floating.getBoundingClientRect(),X=O.split("-")[0],te=_>D.right-D.width/2,W=E>D.bottom-D.height/2,G=P1(q,F),$=D.width>F.width,ae=D.height>F.height,ne=($?F:D).left,le=($?F:D).right,he=(ae?F:D).top,mn=(ae?F:D).bottom;if(Z&&(o=!0,!Q))return;if(J&&(o=!1),J&&!Q){o=!0;return}if(Q&&Pe(H.relatedTarget)&&zs(T.floating,H.relatedTarget)||P&&O1(P.nodesRef.current,R).some(Ce=>{let{context:ve}=Ce;return ve?.open}))return;if(X==="top"&&E>=F.bottom-1||X==="bottom"&&E<=F.top+1||X==="left"&&_>=F.right-1||X==="right"&&_<=F.left+1)return I();let Ke=[];switch(X){case"top":Ke=[[ne,F.top+1],[ne,D.bottom-1],[le,D.bottom-1],[le,F.top+1]];break;case"bottom":Ke=[[ne,D.top+1],[ne,F.bottom-1],[le,F.bottom-1],[le,D.top+1]];break;case"left":Ke=[[D.right-1,mn],[D.right-1,he],[F.left+1,he],[F.left+1,mn]];break;case"right":Ke=[[F.right-1,mn],[F.right-1,he],[D.left+1,he],[D.left+1,mn]];break}function qe(Ce){let[ve,we]=Ce;switch(X){case"top":{const Ze=[$?ve+i/2:te?ve+i*4:ve-i*4,we+i+1],Ve=[$?ve-i/2:te?ve+i*4:ve-i*4,we+i+1],Ge=[[D.left,te||$?D.bottom-i:D.top],[D.right,te?$?D.bottom-i:D.top:D.bottom-i]];return[Ze,Ve,...Ge]}case"bottom":{const Ze=[$?ve+i/2:te?ve+i*4:ve-i*4,we-i],Ve=[$?ve-i/2:te?ve+i*4:ve-i*4,we-i],Ge=[[D.left,te||$?D.top+i:D.bottom],[D.right,te?$?D.top+i:D.bottom:D.top+i]];return[Ze,Ve,...Ge]}case"left":{const Ze=[ve+i+1,ae?we+i/2:W?we+i*4:we-i*4],Ve=[ve+i+1,ae?we-i/2:W?we+i*4:we-i*4];return[...[[W||ae?D.right-i:D.left,D.top],[W?ae?D.right-i:D.left:D.right-i,D.bottom]],Ze,Ve]}case"right":{const Ze=[ve-i,ae?we+i/2:W?we+i*4:we-i*4],Ve=[ve-i,ae?we-i/2:W?we+i*4:we-i*4],Ge=[[W||ae?D.left+i:D.right,D.top],[W?ae?D.left+i:D.right:D.left+i,D.bottom]];return[Ze,Ve,...Ge]}}}if(!zd([V,x],Ke)){if(o&&!G)return I();if(!Q&&a){const Ce=p(H.clientX,H.clientY);if(Ce!==null&&Ce<.1)return I()}zd([V,x],qe([_,E]))?!o&&a&&(l=window.setTimeout(I,40)):I()}}};return k.__options={blockPointerEvents:r},k}const x1=A.createContext(null),q1=(e,i)=>{var r,a,l;const{size:o,error:d,errorId:g}=e,c=A.useContext(x1),p=di(),k=(r=e.id)!==null&&r!==void 0?r:`${i}-${p}`,y=g??`${i}-error-${p}`,_=`${i}-description-${p}`,E=c?.disabled||e.disabled,O=(c?.readOnly||e.readOnly)&&!E||void 0,T=!E&&!O&&!!(d||c?.error),b=!E&&!O&&!!d&&typeof d!="boolean",R=Object.assign({},T?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:b,hasError:T,errorId:y,inputDescriptionId:_,size:(a=o??c?.size)!==null&&a!==void 0?a:"medium",readOnly:O,inputProps:Object.assign(Object.assign({id:k},R),{"aria-describedby":Vg(e["aria-describedby"],{[_]:!!e?.description&&typeof e?.description=="string",[y]:b,[(l=c?.errorId)!==null&&l!==void 0?l:""]:T&&!!c?.error})||void 0,disabled:E})}};function Xe(e,i,r,a){return a?typeof a=="string"?{[`--__${e}c-${i}-${r}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([l,o])=>[`--__${e}c-${i}-${r}-${l}`,o])):{}}const D1={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Xd=(e,i,r,a,l,o)=>i.split(" ").map((d,g,c)=>{var p;if(e==="margin-inline"&&d==="full")return`calc((100vw - ${100/c.length}%)/-2)`;if(e==="padding-inline"&&d==="full")return`calc((100vw - ${100/c.length}%)/2)`;if(["mi","mb"].includes(e)&&d==="auto")return"auto";let k=`var(--${o}-${r}-${d})`;if(a.includes(d))k=d==="px"?"1px":d;else if(d.startsWith("space"))k=`var(--${o}-${d})`;else{const y=`--${o}-spacing-${d}`;k=`var(${(p=D1[y])!==null&&p!==void 0?p:y})`}return l?d==="0"?"0":`calc(-1 * ${k})`:k}).join(" ");function En(e,i,r,a,l,o=!1,d=[]){if(!l)return{};if(typeof l=="string")return{[`--__${e}c-${i}-${r}-xs`]:Xd(r,l,a,d,o,e)};const g={};return Object.entries(l).forEach(([c,p])=>{g[`--__${e}c-${i}-${r}-${c}`]=Xd(r,p,a,d,o,e)}),g}const cf=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],mf=({children:e,className:i,padding:r,paddingInline:a,paddingBlock:l,margin:o,marginInline:d,marginBlock:g,width:c,minWidth:p,maxWidth:k,height:y,minHeight:_,maxHeight:E,position:O,inset:T,top:b,right:R,left:P,bottom:j,overflow:H,overflowX:I,overflowY:V,flexBasis:x,flexGrow:q,flexShrink:z,gridColumn:Q})=>{const Z=fr(!1),{cn:J}=Ie(),F=Z?"ax":"a",D=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},En(F,"r","p","spacing",r)),En(F,"r","pi","spacing",a)),En(F,"r","pb","spacing",l)),En(F,"r","m","spacing",o)),En(F,"r","mi","spacing",d)),En(F,"r","mb","spacing",g)),Xe(F,"r","w",c)),Xe(F,"r","minw",p)),Xe(F,"r","maxw",k)),Xe(F,"r","h",y)),Xe(F,"r","minh",_)),Xe(F,"r","maxh",E)),Xe(F,"r","position",O)),En(F,"r","inset","spacing",T)),En(F,"r","top","spacing",b)),En(F,"r","right","spacing",R)),En(F,"r","bottom","spacing",j)),En(F,"r","left","spacing",P)),Xe(F,"r","overflow",H)),Xe(F,"r","overflowx",I)),Xe(F,"r","overflowy",V)),Xe(F,"r","flex-basis",x)),Xe(F,"r","flex-grow",q)),Xe(F,"r","flex-shrink",z)),Xe(F,"r","grid-column",Q));return Y.createElement(zr,{className:J({className:i,"navds-r-p":r,"navds-r-pi":a,"navds-r-pb":l,"navds-r-m":o,"navds-r-mi":d,"navds-r-mb":g,"navds-r-w":c,"navds-r-minw":p,"navds-r-maxw":k,"navds-r-h":y,"navds-r-minh":_,"navds-r-maxh":E,"navds-r-position":O,"navds-r-inset":T,"navds-r-top":b,"navds-r-right":R,"navds-r-bottom":j,"navds-r-left":P,"navds-r-overflow":H,"navds-r-overflowx":I,"navds-r-overflowy":V,"navds-r-flex-basis":x,"navds-r-flex-grow":q,"navds-r-flex-shrink":z,"navds-r-grid-column":Q}),style:D},e)};var M1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const L1=A.forwardRef((e,i)=>{var{children:r,className:a,as:l="div",columns:o,gap:d,style:g,align:c,asChild:p}=e,k=M1(e,["children","className","as","columns","gap","style","align","asChild"]);const _=fr(!1)?"ax":"a",{cn:E}=Ie(),O=Object.assign(Object.assign(Object.assign(Object.assign({},g),{[`--__${_}c-hgrid-align`]:c}),En(_,"hgrid","gap","spacing",d)),Xe(_,"hgrid","columns",F1(o))),T=p?zr:l;return Y.createElement(mf,Object.assign({},k),Y.createElement(T,Object.assign({},Xr(k,cf),{ref:i,className:E("navds-hgrid",a,{"navds-hgrid-gap":d,"navds-hgrid-align":c}),style:O}),r))});function F1(e){return e?typeof e=="string"||typeof e=="number"?Zd(e):Object.fromEntries(Object.entries(e).map(([i,r])=>[i,Zd(r)])):{}}const Zd=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var K1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const pf=A.forwardRef((e,i)=>{var{children:r,className:a,as:l="div",align:o,justify:d,wrap:g=!0,gap:c,style:p,direction:k="row",asChild:y}=e,_=K1(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const O=fr(!1)?"ax":"a",{cn:T}=Ie(),b=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},p),En(O,"stack","gap","spacing",c)),Xe(O,"stack","direction",k)),Xe(O,"stack","align",o)),Xe(O,"stack","justify",d)),R=y?zr:l;return Y.createElement(mf,Object.assign({},_),Y.createElement(R,Object.assign({},Xr(_,cf),{ref:i,style:b,className:T("navds-stack",a,{"navds-vstack":k==="column","navds-hstack":k==="row","navds-stack-gap":c,"navds-stack-align":o,"navds-stack-justify":d,"navds-stack-direction":k,"navds-stack-wrap":g})}),r))});var C1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const sr=A.forwardRef((e,i)=>{var{as:r="div"}=e,a=C1(e,["as"]);return Y.createElement(pf,Object.assign({as:r},a,{ref:i,direction:"row"}))});var V1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const hi=A.forwardRef((e,i)=>{var{as:r="div"}=e,a=V1(e,["as"]);return Y.createElement(pf,Object.assign({as:r},a,{ref:i,direction:"column",wrap:!1}))}),ni=A.createContext({listType:"ul",size:"medium"});var H1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const hf=A.forwardRef((e,i)=>{var{className:r,children:a,title:l,icon:o}=e,d=H1(e,["className","children","title","icon"]);const{listType:g,size:c}=A.useContext(ni),{cn:p}=Ie();return g==="ol"&&o&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),Y.createElement("li",Object.assign({},d,{ref:i,className:p("navds-list__item",r)}),g==="ul"&&Y.createElement("div",{className:p("navds-list__item-marker",{"navds-list__item-marker--icon":o,"navds-list__item-marker--bullet":!o})},o||Y.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},Y.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),Y.createElement("div",null,l&&Y.createElement(ul,{as:"p",size:c,weight:"semibold"},l),a))});hf.displayName="List.Item";var G1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const U1={small:"xsmall",medium:"small",large:"medium"},ml=A.forwardRef((e,i)=>{var{children:r,className:a,as:l="ul",title:o,description:d,headingTag:g,size:c,"aria-label":p,"aria-labelledby":k}=e,y=G1(e,["children","className","as","title","description","headingTag","size","aria-label","aria-labelledby"]);const{size:_}=A.useContext(ni),{cn:E}=Ie(),O=fr(!1),T=c??_;return O?Y.createElement(ni.Provider,{value:{listType:l,size:T}},Y.createElement(ul,Object.assign({as:"div"},y,{size:T,ref:i,className:E("navds-list",`navds-list--${T}`,a)}),Y.createElement(l,{role:"list","aria-label":p,"aria-labelledby":k},r))):Y.createElement(ni.Provider,{value:{listType:l,size:T}},Y.createElement(ul,Object.assign({as:"div"},y,{size:T,ref:i,className:E("navds-list",`navds-list--${T}`,a)}),o&&Y.createElement(zg,{size:U1[T],as:g??"h3"},o),d&&Y.createElement(ui,{size:T},d),Y.createElement(l,{role:"list","aria-label":p,"aria-labelledby":k},r)))});ml.Item=hf;var $1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Y1=A.forwardRef((e,i)=>{var{className:r}=e,a=$1(e,["className"]);const{cn:l}=Ie();return Y.createElement("tbody",Object.assign({},a,{ref:i,className:l("navds-table__body",r)}))});var W1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const kf=A.forwardRef((e,i)=>{var{className:r,children:a,align:l,textSize:o}=e,d=W1(e,["className","children","align","textSize"]);const{cn:g}=Ie();return Y.createElement("th",Object.assign({ref:i,className:g("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${l}`]:l,"navds-label--small":o==="small"})},d),a)}),vf=A.createContext(null);var z1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const X1=A.forwardRef((e,i)=>{var r,a,l,o,{className:d,children:g,sortable:c=!1,sortKey:p}=e,k=z1(e,["className","children","sortable","sortKey"]);const y=A.useContext(vf),{cn:_}=Ie();return c&&!p&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),Y.createElement(kf,Object.assign({scope:"col",ref:i,className:_(d),"aria-sort":c?((r=y?.sort)===null||r===void 0?void 0:r.orderBy)===p?(a=y?.sort)===null||a===void 0?void 0:a.direction:"none":void 0},k),c?Y.createElement("button",{type:"button",className:_("navds-table__sort-button"),onClick:c&&p?()=>{var E;return(E=y?.onSortChange)===null||E===void 0?void 0:E.call(y,p)}:void 0},g,((l=y?.sort)===null||l===void 0?void 0:l.orderBy)===p?((o=y?.sort)===null||o===void 0?void 0:o.direction)==="descending"?Y.createElement(v0,{"aria-hidden":!0}):Y.createElement(b0,{"aria-hidden":!0}):Y.createElement(d0,{"aria-hidden":!0})):g)});var Z1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const yf=A.forwardRef((e,i)=>{var{className:r,children:a="",align:l,textSize:o}=e,d=Z1(e,["className","children","align","textSize"]);const{cn:g}=Ie();return Y.createElement(ui,Object.assign({as:"td",ref:i,className:g("navds-table__data-cell",r,{[`navds-table__data-cell--align-${l}`]:l}),size:o},d),a)});var J1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Q1=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function eT(e){const i=parseFloat(e);return!Number.isNaN(i)&&Number.isFinite(i)}function Jd(e){return typeof e=="string"&&e[e.length-1]==="%"&&eT(e.substring(0,e.length-1))}function Js(e,i){i===0&&e?.style&&(e.style.display="none")}function nT(e,i){i===0&&e?.style&&(e.style.display="")}const tT=e=>{var{children:i,className:r,innerClassName:a,duration:l=250,easing:o="ease",height:d}=e,g=J1(e,["children","className","innerClassName","duration","easing","height"]);const{cn:c}=Ie(),p=A.useRef(d),k=A.useRef(null),y=A.useRef(),_=A.useRef(),E=A.useRef(d),O=A.useRef("visible"),T=Q1?0:l;typeof E.current=="number"?(typeof d!="string"&&(E.current=d<0?0:d),O.current="hidden"):Jd(E.current)&&(E.current=d==="0%"?0:d,O.current="hidden");const[b,R]=A.useState(E.current),[P,j]=A.useState(O.current),[H,I]=A.useState(!1);A.useEffect(()=>{Js(k.current,E.current)},[]),A.useEffect(()=>{if(d!==p.current&&k.current){nT(k.current,p.current),k.current.style.overflow="hidden";const z=k.current.offsetHeight;k.current.style.overflow="";const Q=T;let Z,J,F="hidden",D;const X=p.current==="auto";typeof d=="number"?(Z=d<0?0:d,J=Z):Jd(d)?(Z=d==="0%"?0:d,J=Z):(Z=z,J="auto",F=void 0),X&&(J=Z,Z=z),R(Z),j("hidden"),I(!X),clearTimeout(_.current),clearTimeout(y.current),X?(D=!0,_.current=setTimeout(()=>{R(J),j(F),I(D)},50),y.current=setTimeout(()=>{I(!1),Js(k.current,J)},Q)):_.current=setTimeout(()=>{R(J),j(F),I(!1),d!=="auto"&&Js(k.current,Z)},Q)}return p.current=d,()=>{clearTimeout(_.current),clearTimeout(y.current)}},[d]);const V={height:b,overflow:P};H&&(V.transition=`height ${T}ms ${o} 0ms`,V.WebkitTransition=V.transition);const q=typeof g["aria-hidden"]<"u"?g["aria-hidden"]:d===0;return Y.createElement("div",Object.assign({},g,{className:c(r),style:V}),Y.createElement("div",{"aria-hidden":q,className:c(a),ref:k},i))};var rT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const bf=A.forwardRef((e,i)=>{var{className:r,selected:a=!1,shadeOnHover:l=!0}=e,o=rT(e,["className","selected","shadeOnHover"]);const{cn:d}=Ie();return Y.createElement("tr",Object.assign({},o,{ref:i,className:d("navds-table__row",r,{"navds-table__row--selected":a,"navds-table__row--shade-on-hover":l})}))});var aT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const iT=A.forwardRef((e,i)=>{var{className:r,children:a,content:l,togglePlacement:o="left",defaultOpen:d=!1,open:g,onOpenChange:c,expansionDisabled:p=!1,expandOnRowClick:k=!1,colSpan:y=999,contentGutter:_,onClick:E}=e,O=aT(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:T}=Ie(),[b,R]=Xg({defaultValue:d,value:g,onChange:c}),P=pi("global"),j=di(),H=V=>{R(x=>!x),V.stopPropagation()},I=V=>{k&&!p&&!Ef(V.target)&&H(V)};return Y.createElement(Y.Fragment,null,Y.createElement(bf,Object.assign({},O,{ref:i,className:T("navds-table__expandable-row",r,{"navds-table__expandable-row--open":b,"navds-table__expandable-row--expansion-disabled":p,"navds-table__expandable-row--clickable":k}),onClick:ql(E,I)}),o==="right"&&a,Y.createElement(yf,{className:T("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":b}),onClick:p?()=>null:H},!p&&Y.createElement("button",{className:T("navds-table__toggle-expand-button"),type:"button","aria-controls":j,"aria-expanded":b,onClick:H},Y.createElement(f0,{className:T("navds-table__expandable-icon"),title:P(b?"showLess":"showMore")}))),o==="left"&&a),Y.createElement("tr",{"data-state":b?"open":"closed",className:T("navds-table__expanded-row"),"aria-hidden":!b,id:j},Y.createElement("td",{colSpan:y,className:T("navds-table__expanded-row-cell")},Y.createElement(tT,{className:T("navds-table__expanded-row-collapse"),innerClassName:T(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${_??o}`),height:b?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},l))))});function Ef(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:Ef(e.parentElement)}var sT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const lT=A.forwardRef((e,i)=>{var{className:r}=e,a=sT(e,["className"]);const{cn:l}=Ie();return Y.createElement("thead",Object.assign({},a,{ref:i,className:l("navds-table__header",r)}))});var oT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Fe=A.forwardRef((e,i)=>{var{className:r,zebraStripes:a=!1,size:l="medium",onSortChange:o,sort:d,stickyHeader:g=!1}=e,c=oT(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:p}=Ie();return Y.createElement(vf.Provider,{value:{onSortChange:o,sort:d}},Y.createElement("table",Object.assign({},c,{ref:i,className:p("navds-table",`navds-table--${l}`,r,{"navds-table--zebra-stripes":a,"navds-table--sticky-header":g})})))});Fe.Header=lT;Fe.Body=Y1;Fe.Row=bf;Fe.ColumnHeader=X1;Fe.HeaderCell=kf;Fe.DataCell=yf;Fe.ExpandableRow=iT;var uT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const dT=A.forwardRef((e,i)=>{var{children:r,className:a,arrow:l=!0,placement:o="top",open:d,defaultOpen:g=!1,onOpenChange:c,offset:p,content:k,delay:y=150,id:_,keys:E,maxChar:O=80,describesChild:T=!1}=e,b=uT(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:R}=Ie(),[P,j]=Xg({defaultValue:g,value:d,onChange:c}),H=A.useRef(null),I=T0(!1),V=I?I.ref.current:void 0,{x,y:q,strategy:z,context:Q,placement:Z,middlewareData:{arrow:{x:J,y:F}={},hide:{referenceHidden:D}={}},refs:X}=j1({placement:o,open:P,onOpenChange:ne=>j(ne),middleware:[CE(p??(l?8:4)),VE(),HE({padding:5,fallbackPlacements:["bottom","top"]}),GE({element:H,padding:5})],whileElementsMounted:I?(ne,le,he)=>Ld(ne,le,he,{animationFrame:!0}):Ld,strategy:I?"fixed":void 0}),{getReferenceProps:te,getFloatingProps:W}=I1([T1(Q,{handleClose:B1(),restMs:y}),N1(Q),R1(Q)]),G=di(_),$=Gg(i,X.setFloating);if(!r||r?.type===Y.Fragment||r===Y.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;k?.length>O&&P&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${k.length}
Tooltip-content: ${k}`);const ae=T?P?{"aria-describedby":G}:{title:k}:{"aria-label":k};return Y.createElement(Y.Fragment,null,Y.createElement(zr,Object.assign({ref:X.setReference},te(),ae,{"aria-keyshortcuts":E?E.join("+"):void 0}),r),Y.createElement(aE,{rootElement:V,asChild:!0},P&&Y.createElement("div",Object.assign({},W(Object.assign(Object.assign({},b),{ref:$,style:{position:z,top:q??0,left:x??0,visibility:D?"hidden":"visible"},role:"tooltip",id:G,className:R("navds-tooltip","navds-detail navds-detail--small",a)})),{"data-side":Z,"data-state":"open"}),k,E&&Y.createElement("span",{className:R("navds-tooltip__keys"),"aria-hidden":!0},E.map(ne=>Y.createElement(Qb,{as:"kbd",key:ne,className:R("navds-tooltip__key")},ne))),l&&Y.createElement("div",{ref:ne=>{H.current=ne},className:R("navds-tooltip__arrow"),style:{left:J!=null?`${J}px`:"",top:F!=null?`${F}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[Z]]:"-3.5px"}}))))}),Tf=A.createContext(null);var gT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const _f=A.forwardRef((e,i)=>{var r,{className:a,children:l,disabled:o,onClick:d}=e,g=gT(e,["className","children","disabled","onClick"]);const{cn:c}=Ie(),p=pi("Search"),k=A.useContext(Tf);if(k===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:y,variant:_,handleClick:E}=k;return Y.createElement(Cl,Object.assign({type:"submit"},g,{ref:i,size:y,variant:_==="secondary"?"secondary":"primary",className:c("navds-search__button-search",a),disabled:(r=k?.disabled)!==null&&r!==void 0?r:o,onClick:ql(d,E),icon:Y.createElement(Zg,Object.assign({},l?{"aria-hidden":!0}:{title:p("search")}))}),l)});var fT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const pl=A.forwardRef((e,i)=>{const{inputProps:r,size:a="medium",inputDescriptionId:l,errorId:o,showErrorMsg:d,hasError:g}=q1(e,"searchfield"),{className:c,hideLabel:p=!0,label:k,description:y,value:_,clearButtonLabel:E,onClear:O,clearButton:T=!0,children:b,variant:R="primary",defaultValue:P,onChange:j,onSearchClick:H,htmlSize:I,"data-color":V}=e,x=fT(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize","data-color"]),{cn:q}=Ie(),z=A.useRef(null),Q=Gg(z,i),[Z,J]=A.useState(P??""),F=W=>{_===void 0&&J(W),j?.(W)},D=W=>{var G,$;O?.(W),F(""),($=(G=z.current)===null||G===void 0?void 0:G.focus)===null||$===void 0||$.call(G)},X=()=>{H?.(`${_??Z}`)},te=T&&!r.disabled&&(_??Z);return Y.createElement("div",{onKeyDown:W=>{var G;W.key==="Escape"&&(!((G=z.current)===null||G===void 0)&&G.value&&W.preventDefault(),D({trigger:"Escape",event:W}))},className:q(c,"navds-form-field",`navds-form-field--${a}`,"navds-search",{"navds-search--error":g,"navds-search--disabled":r.disabled,"navds-search--with-size":I}),"data-color":V},Y.createElement(xl,{htmlFor:r.id,size:a,className:q("navds-form-field__label",{"navds-sr-only":p})},k),!!y&&Y.createElement(ui,{className:q("navds-form-field__description",{"navds-sr-only":p}),id:l,size:a,as:"div"},y),Y.createElement("div",{className:q("navds-search__wrapper")},Y.createElement("div",{className:q("navds-search__wrapper-inner")},R==="simple"&&Y.createElement(Zg,{"aria-hidden":!0,className:q("navds-search__search-icon")}),Y.createElement("input",Object.assign({ref:Q},Xr(x,["error","errorId","size","readOnly"]),r,{value:_??Z,onChange:W=>F(W.target.value),type:"search",className:q(c,"navds-search__input",`navds-search__input--${R}`,"navds-text-field__input","navds-body-short",`navds-body-short--${a}`)},I?{size:Number(I)}:{})),te&&Y.createElement(cT,{handleClear:D,size:a,clearButtonLabel:E})),Y.createElement(Tf.Provider,{value:{size:a,disabled:r.disabled,variant:R,handleClick:X}},b||R!=="simple"&&Y.createElement(_f,{"data-color":V}))),Y.createElement("div",{className:q("navds-form-field__error"),id:o,"aria-relevant":"additions removals","aria-live":"polite"},d&&Y.createElement(n0,{size:a,showIcon:!0},e.error)))});function cT({size:e,clearButtonLabel:i,handleClear:r}){const{cn:a}=Ie(),l=fr(!1),o=pi("Search");return l?Y.createElement(Cl,{className:a("navds-search__button-clear"),variant:"tertiary","data-color":"neutral",size:e==="medium"?"small":"xsmall",icon:Y.createElement(xd,{"aria-hidden":!0}),title:i||o("clear"),onClick:d=>r({trigger:"Click",event:d}),type:"button"}):Y.createElement("button",{type:"button",onClick:d=>r({trigger:"Click",event:d}),className:a("navds-search__button-clear")},Y.createElement("span",{className:a("navds-sr-only")},i||o("clear")),Y.createElement(xd,{"aria-hidden":!0}))}pl.Button=_f;function mT(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qd={exports:{}},Lr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function pT(){if(eg)return Lr;eg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,l,o){var d=null;if(o!==void 0&&(d=""+o),l.key!==void 0&&(d=""+l.key),"key"in l){o={};for(var g in l)g!=="key"&&(o[g]=l[g])}else o=l;return l=o.ref,{$$typeof:e,type:a,key:d,ref:l!==void 0?l:null,props:o}}return Lr.Fragment=i,Lr.jsx=r,Lr.jsxs=r,Lr}var ng;function hT(){return ng||(ng=1,Qd.exports=pT()),Qd.exports}var Rt=hT();const ea={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};Kn(ea);var tg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var rg;function kT(){return rg||(rg=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(o=l(o,a.call(this,g)))}return o}function a(o){if(typeof o=="string"||typeof o=="number")return this&&this[o]||o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(this,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var g in o)i.call(o,g)&&o[g]&&(d=l(d,this&&this[g]||g));return d}function l(o,d){return d?o?o+" "+d:o+d:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(tg)),tg.exports}var vT=kT();const Gl=mT(vT),yT="_borderbox_1a0x6_1",bT="_error_1a0x6_5",ET="_warning_1a0x6_8",TT={borderbox:yT,error:bT,warning:ET};Gl.bind(TT);const _T="_aksjonspunkt_11wjs_1",wT="_erAksjonspunktApent_11wjs_4",AT="_erIkkeGodkjentAvBeslutter_11wjs_8",RT={aksjonspunkt:_T,erAksjonspunktApent:wT,erIkkeGodkjentAvBeslutter:AT};Gl.bind(RT);const Wr=({dateString:e,year:i,month:r,day:a})=>Rt.jsx(Rt.Fragment,{children:Ug(e,{year:i,month:r,day:a})}),oi=({dateTimeString:e,...i})=>Rt.jsx(Rt.Fragment,{children:Vb(e,i)});Kn(ea);Kn(ea);const ST="_divider_1jpov_1",jT="_dividerParagraf_1jpov_8",NT="_leftPanel_1jpov_11",IT="_rightPanel_1jpov_14",OT={divider:ST,dividerParagraf:jT,leftPanel:NT,rightPanel:IT};Gl.bind(OT);Kn(ea);const PT=Kn(ea),BT=({tekst:e,children:i})=>{const[r,a]=A.useState(!1);if(!e)return i;const l=async()=>{await navigator.clipboard.writeText(e),a(!0),setTimeout(()=>{a(!1)},1e3)};return Rt.jsx(dT,{content:PT.formatMessage({id:r?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:Rt.jsx("span",{"aria-hidden":"true",onClick:l,children:i??e})})},ag={default:"_default_af3od_1",rød:"_rød_af3od_5"},lr=({beløp:e,kr:i=!1,rød:r=!1})=>{const a=e?.toString().replace(/\s/g,"");return Rt.jsx(BT,{tekst:a,children:Rt.jsxs("span",{className:r?ag.rød:ag.default,children:[a?Hb(a):"-",a&&i&&" kr"]})})},Xn=({tittel:e,children:i})=>L.jsxs(hi,{gap:"space-4",children:[L.jsx(xl,{size:"medium",children:e}),i]});Xn.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const wf=({arbeidsgiverOpplysninger:e,arbeidsgiverIdent:i})=>{const r=mt();return L.jsxs(Xn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[L.jsxs("span",{children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),": ",e.navn]}),L.jsxs("span",{children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",i]})]})};wf.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const Af=({inntektsmelding:e,behandling:i,alleBehandlinger:r,alleKodeverk:a})=>{const l=mt(),o=e.tilknyttedeBehandlingIder.includes(i.uuid),d=r.filter(p=>e.tilknyttedeBehandlingIder.includes(p.uuid)),g=(()=>{const p=d.length;return o&&p>1?L.jsx(je,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):o?L.jsx(je,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):p===0?L.jsx(je,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):L.jsx(je,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),c=[...d].sort((p,k)=>new Date(p.opprettet).getTime()-new Date(k.opprettet).getTime());return L.jsxs(Xn,{tittel:l.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[g,L.jsx(ml,{children:c.map(p=>L.jsx(ml.Item,{children:L.jsxs(hi,{gap:"space-4",children:[L.jsx("span",{children:a.BehandlingType.find(({kode:k})=>k===p.type)?.navn}),L.jsxs("span",{children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",L.jsx(oi,{dateTimeString:p.opprettet,separator:"kl"})]}),p.avsluttet?L.jsxs("span",{children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",L.jsx(oi,{dateTimeString:p.avsluttet,separator:"kl"})]}):null]})},p.uuid))})]})};Af.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};function xT(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ig={exports:{}},Fr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function qT(){if(sg)return Fr;sg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,l,o){var d=null;if(o!==void 0&&(d=""+o),l.key!==void 0&&(d=""+l.key),"key"in l){o={};for(var g in l)g!=="key"&&(o[g]=l[g])}else o=l;return l=o.ref,{$$typeof:e,type:a,key:d,ref:l!==void 0?l:null,props:o}}return Fr.Fragment=i,Fr.jsx=r,Fr.jsxs=r,Fr}var lg;function DT(){return lg||(lg=1,ig.exports=qT()),ig.exports}DT();var hl={exports:{}},MT=hl.exports,og;function LT(){return og||(og=1,function(e,i){(function(r,a){e.exports=a()})(MT,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,l=/\d/,o=/\d\d/,d=/\d\d?/,g=/\d*[^-_:/,()\s\d]+/,c={},p=function(b){return(b=+b)+(b>68?1900:2e3)},k=function(b){return function(R){this[b]=+R}},y=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(R){if(!R||R==="Z")return 0;var P=R.match(/([+-]|\d\d)/g),j=60*P[1]+(+P[2]||0);return j===0?0:P[0]==="+"?-j:j}(b)}],_=function(b){var R=c[b];return R&&(R.indexOf?R:R.s.concat(R.f))},E=function(b,R){var P,j=c.meridiem;if(j){for(var H=1;H<=24;H+=1)if(b.indexOf(j(H,0,R))>-1){P=H>12;break}}else P=b===(R?"pm":"PM");return P},O={A:[g,function(b){this.afternoon=E(b,!1)}],a:[g,function(b){this.afternoon=E(b,!0)}],Q:[l,function(b){this.month=3*(b-1)+1}],S:[l,function(b){this.milliseconds=100*+b}],SS:[o,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[d,k("seconds")],ss:[d,k("seconds")],m:[d,k("minutes")],mm:[d,k("minutes")],H:[d,k("hours")],h:[d,k("hours")],HH:[d,k("hours")],hh:[d,k("hours")],D:[d,k("day")],DD:[o,k("day")],Do:[g,function(b){var R=c.ordinal,P=b.match(/\d+/);if(this.day=P[0],R)for(var j=1;j<=31;j+=1)R(j).replace(/\[|\]/g,"")===b&&(this.day=j)}],w:[d,k("week")],ww:[o,k("week")],M:[d,k("month")],MM:[o,k("month")],MMM:[g,function(b){var R=_("months"),P=(_("monthsShort")||R.map(function(j){return j.slice(0,3)})).indexOf(b)+1;if(P<1)throw new Error;this.month=P%12||P}],MMMM:[g,function(b){var R=_("months").indexOf(b)+1;if(R<1)throw new Error;this.month=R%12||R}],Y:[/[+-]?\d+/,k("year")],YY:[o,function(b){this.year=p(b)}],YYYY:[/\d{4}/,k("year")],Z:y,ZZ:y};function T(b){var R,P;R=b,P=c&&c.formats;for(var j=(b=R.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Q,Z,J){var F=J&&J.toUpperCase();return Z||P[J]||r[J]||P[F].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(D,X,te){return X||te.slice(1)})})).match(a),H=j.length,I=0;I<H;I+=1){var V=j[I],x=O[V],q=x&&x[0],z=x&&x[1];j[I]=z?{regex:q,parser:z}:V.replace(/^\[|\]$/g,"")}return function(Q){for(var Z={},J=0,F=0;J<H;J+=1){var D=j[J];if(typeof D=="string")F+=D.length;else{var X=D.regex,te=D.parser,W=Q.slice(F),G=X.exec(W)[0];te.call(Z,G),Q=Q.replace(G,"")}}return function($){var ae=$.afternoon;if(ae!==void 0){var ne=$.hours;ae?ne<12&&($.hours+=12):ne===12&&($.hours=0),delete $.afternoon}}(Z),Z}}return function(b,R,P){P.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(p=b.parseTwoDigitYear);var j=R.prototype,H=j.parse;j.parse=function(I){var V=I.date,x=I.utc,q=I.args;this.$u=x;var z=q[1];if(typeof z=="string"){var Q=q[2]===!0,Z=q[3]===!0,J=Q||Z,F=q[2];Z&&(F=q[2]),c=this.$locale(),!Q&&F&&(c=P.Ls[F]),this.$d=function(W,G,$,ae){try{if(["x","X"].indexOf(G)>-1)return new Date((G==="X"?1e3:1)*W);var ne=T(G)(W),le=ne.year,he=ne.month,mn=ne.day,Ke=ne.hours,qe=ne.minutes,Ce=ne.seconds,ve=ne.milliseconds,we=ne.zone,Ze=ne.week,Ve=new Date,Ge=mn||(le||he?1:Ve.getDate()),_n=le||Ve.getFullYear(),Me=0;le&&!he||(Me=he>0?he-1:Ve.getMonth());var Je,Qn=Ke||0,Qe=qe||0,Vn=Ce||0,et=ve||0;return we?new Date(Date.UTC(_n,Me,Ge,Qn,Qe,Vn,et+60*we.offset*1e3)):$?new Date(Date.UTC(_n,Me,Ge,Qn,Qe,Vn,et)):(Je=new Date(_n,Me,Ge,Qn,Qe,Vn,et),Ze&&(Je=ae(Je).week(Ze).toDate()),Je)}catch{return new Date("")}}(V,z,x,P),this.init(),F&&F!==!0&&(this.$L=this.locale(F).$L),J&&V!=this.format(z)&&(this.$d=new Date("")),c={}}else if(z instanceof Array)for(var D=z.length,X=1;X<=D;X+=1){q[1]=z[X-1];var te=P.apply(this,q);if(te.isValid()){this.$d=te.$d,this.$L=te.$L,this.init();break}X===D&&(this.$d=new Date(""))}else H.call(this,I)}}})}(hl)),hl.exports}var FT=LT();const KT=xT(FT);cr.extend(KT);const na={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET","FaktaKilde.Ukjent":"FRA UKJENT KILDE","FaktaKilde.SBH":"FRA SAKSBEHANDLER"};Kn(na);Kn(na);Kn(na);const CT=(e,i)=>{const r=new Date(e.tom??$r),a=new Date(i.tom??$r);if(r>a)return-1;if(r<a)return 1;if(e.fom&&!i.fom)return-1;if(!e.fom&&i.fom)return 1;if(e.fom&&i.fom){const l=new Date(e.fom),o=new Date(i.fom);if(l>o)return-1;if(l<o)return 1}return 0};var Hr={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var VT=Hr.exports,ug;function HT(){return ug||(ug=1,function(e,i){(function(){var r,a="4.17.21",l=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",d="Expected a function",g="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",p=500,k="__lodash_placeholder__",y=1,_=2,E=4,O=1,T=2,b=1,R=2,P=4,j=8,H=16,I=32,V=64,x=128,q=256,z=512,Q=30,Z="...",J=800,F=16,D=1,X=2,te=3,W=1/0,G=9007199254740991,$=17976931348623157e292,ae=NaN,ne=4294967295,le=ne-1,he=ne>>>1,mn=[["ary",x],["bind",b],["bindKey",R],["curry",j],["curryRight",H],["flip",z],["partial",I],["partialRight",V],["rearg",q]],Ke="[object Arguments]",qe="[object Array]",Ce="[object AsyncFunction]",ve="[object Boolean]",we="[object Date]",Ze="[object DOMException]",Ve="[object Error]",Ge="[object Function]",_n="[object GeneratorFunction]",Me="[object Map]",Je="[object Number]",Qn="[object Null]",Qe="[object Object]",Vn="[object Promise]",et="[object Proxy]",kr="[object RegExp]",qn="[object Set]",vr="[object String]",ia="[object Symbol]",ic="[object Undefined]",yr="[object WeakMap]",sc="[object WeakSet]",br="[object ArrayBuffer]",Ht="[object DataView]",bi="[object Float32Array]",Ei="[object Float64Array]",Ti="[object Int8Array]",_i="[object Int16Array]",wi="[object Int32Array]",Ai="[object Uint8Array]",Ri="[object Uint8ClampedArray]",Si="[object Uint16Array]",ji="[object Uint32Array]",lc=/\b__p \+= '';/g,oc=/\b(__p \+=) '' \+/g,uc=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Wl=/&(?:amp|lt|gt|quot|#39);/g,zl=/[&<>"']/g,dc=RegExp(Wl.source),gc=RegExp(zl.source),fc=/<%-([\s\S]+?)%>/g,cc=/<%([\s\S]+?)%>/g,Xl=/<%=([\s\S]+?)%>/g,mc=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pc=/^\w*$/,hc=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ni=/[\\^$.*+?()[\]{}|]/g,kc=RegExp(Ni.source),Ii=/^\s+/,vc=/\s/,yc=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,bc=/\{\n\/\* \[wrapped with (.+)\] \*/,Ec=/,? & /,Tc=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,_c=/[()=,{}\[\]\/\s]/,wc=/\\(\\)?/g,Ac=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Zl=/\w*$/,Rc=/^[-+]0x[0-9a-f]+$/i,Sc=/^0b[01]+$/i,jc=/^\[object .+?Constructor\]$/,Nc=/^0o[0-7]+$/i,Ic=/^(?:0|[1-9]\d*)$/,Oc=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,sa=/($^)/,Pc=/['\n\r\u2028\u2029\\]/g,la="\\ud800-\\udfff",Bc="\\u0300-\\u036f",xc="\\ufe20-\\ufe2f",qc="\\u20d0-\\u20ff",Jl=Bc+xc+qc,Ql="\\u2700-\\u27bf",eo="a-z\\xdf-\\xf6\\xf8-\\xff",Dc="\\xac\\xb1\\xd7\\xf7",Mc="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Lc="\\u2000-\\u206f",Fc=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",no="A-Z\\xc0-\\xd6\\xd8-\\xde",to="\\ufe0e\\ufe0f",ro=Dc+Mc+Lc+Fc,Oi="['’]",Kc="["+la+"]",ao="["+ro+"]",oa="["+Jl+"]",io="\\d+",Cc="["+Ql+"]",so="["+eo+"]",lo="[^"+la+ro+io+Ql+eo+no+"]",Pi="\\ud83c[\\udffb-\\udfff]",Vc="(?:"+oa+"|"+Pi+")",oo="[^"+la+"]",Bi="(?:\\ud83c[\\udde6-\\uddff]){2}",xi="[\\ud800-\\udbff][\\udc00-\\udfff]",Gt="["+no+"]",uo="\\u200d",go="(?:"+so+"|"+lo+")",Hc="(?:"+Gt+"|"+lo+")",fo="(?:"+Oi+"(?:d|ll|m|re|s|t|ve))?",co="(?:"+Oi+"(?:D|LL|M|RE|S|T|VE))?",mo=Vc+"?",po="["+to+"]?",Gc="(?:"+uo+"(?:"+[oo,Bi,xi].join("|")+")"+po+mo+")*",Uc="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",$c="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ho=po+mo+Gc,Yc="(?:"+[Cc,Bi,xi].join("|")+")"+ho,Wc="(?:"+[oo+oa+"?",oa,Bi,xi,Kc].join("|")+")",zc=RegExp(Oi,"g"),Xc=RegExp(oa,"g"),qi=RegExp(Pi+"(?="+Pi+")|"+Wc+ho,"g"),Zc=RegExp([Gt+"?"+so+"+"+fo+"(?="+[ao,Gt,"$"].join("|")+")",Hc+"+"+co+"(?="+[ao,Gt+go,"$"].join("|")+")",Gt+"?"+go+"+"+fo,Gt+"+"+co,$c,Uc,io,Yc].join("|"),"g"),Jc=RegExp("["+uo+la+Jl+to+"]"),Qc=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,em=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],nm=-1,Be={};Be[bi]=Be[Ei]=Be[Ti]=Be[_i]=Be[wi]=Be[Ai]=Be[Ri]=Be[Si]=Be[ji]=!0,Be[Ke]=Be[qe]=Be[br]=Be[ve]=Be[Ht]=Be[we]=Be[Ve]=Be[Ge]=Be[Me]=Be[Je]=Be[Qe]=Be[kr]=Be[qn]=Be[vr]=Be[yr]=!1;var Oe={};Oe[Ke]=Oe[qe]=Oe[br]=Oe[Ht]=Oe[ve]=Oe[we]=Oe[bi]=Oe[Ei]=Oe[Ti]=Oe[_i]=Oe[wi]=Oe[Me]=Oe[Je]=Oe[Qe]=Oe[kr]=Oe[qn]=Oe[vr]=Oe[ia]=Oe[Ai]=Oe[Ri]=Oe[Si]=Oe[ji]=!0,Oe[Ve]=Oe[Ge]=Oe[yr]=!1;var tm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},rm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},am={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},im={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},sm=parseFloat,lm=parseInt,ko=typeof Wa=="object"&&Wa&&Wa.Object===Object&&Wa,om=typeof self=="object"&&self&&self.Object===Object&&self,en=ko||om||Function("return this")(),Di=i&&!i.nodeType&&i,jt=Di&&!0&&e&&!e.nodeType&&e,vo=jt&&jt.exports===Di,Mi=vo&&ko.process,wn=function(){try{var S=jt&&jt.require&&jt.require("util").types;return S||Mi&&Mi.binding&&Mi.binding("util")}catch{}}(),yo=wn&&wn.isArrayBuffer,bo=wn&&wn.isDate,Eo=wn&&wn.isMap,To=wn&&wn.isRegExp,_o=wn&&wn.isSet,wo=wn&&wn.isTypedArray;function pn(S,M,B){switch(B.length){case 0:return S.call(M);case 1:return S.call(M,B[0]);case 2:return S.call(M,B[0],B[1]);case 3:return S.call(M,B[0],B[1],B[2])}return S.apply(M,B)}function um(S,M,B,re){for(var ge=-1,_e=S==null?0:S.length;++ge<_e;){var Ye=S[ge];M(re,Ye,B(Ye),S)}return re}function An(S,M){for(var B=-1,re=S==null?0:S.length;++B<re&&M(S[B],B,S)!==!1;);return S}function dm(S,M){for(var B=S==null?0:S.length;B--&&M(S[B],B,S)!==!1;);return S}function Ao(S,M){for(var B=-1,re=S==null?0:S.length;++B<re;)if(!M(S[B],B,S))return!1;return!0}function ht(S,M){for(var B=-1,re=S==null?0:S.length,ge=0,_e=[];++B<re;){var Ye=S[B];M(Ye,B,S)&&(_e[ge++]=Ye)}return _e}function ua(S,M){var B=S==null?0:S.length;return!!B&&Ut(S,M,0)>-1}function Li(S,M,B){for(var re=-1,ge=S==null?0:S.length;++re<ge;)if(B(M,S[re]))return!0;return!1}function De(S,M){for(var B=-1,re=S==null?0:S.length,ge=Array(re);++B<re;)ge[B]=M(S[B],B,S);return ge}function kt(S,M){for(var B=-1,re=M.length,ge=S.length;++B<re;)S[ge+B]=M[B];return S}function Fi(S,M,B,re){var ge=-1,_e=S==null?0:S.length;for(re&&_e&&(B=S[++ge]);++ge<_e;)B=M(B,S[ge],ge,S);return B}function gm(S,M,B,re){var ge=S==null?0:S.length;for(re&&ge&&(B=S[--ge]);ge--;)B=M(B,S[ge],ge,S);return B}function Ki(S,M){for(var B=-1,re=S==null?0:S.length;++B<re;)if(M(S[B],B,S))return!0;return!1}var fm=Ci("length");function cm(S){return S.split("")}function mm(S){return S.match(Tc)||[]}function Ro(S,M,B){var re;return B(S,function(ge,_e,Ye){if(M(ge,_e,Ye))return re=_e,!1}),re}function da(S,M,B,re){for(var ge=S.length,_e=B+(re?1:-1);re?_e--:++_e<ge;)if(M(S[_e],_e,S))return _e;return-1}function Ut(S,M,B){return M===M?Rm(S,M,B):da(S,So,B)}function pm(S,M,B,re){for(var ge=B-1,_e=S.length;++ge<_e;)if(re(S[ge],M))return ge;return-1}function So(S){return S!==S}function jo(S,M){var B=S==null?0:S.length;return B?Hi(S,M)/B:ae}function Ci(S){return function(M){return M==null?r:M[S]}}function Vi(S){return function(M){return S==null?r:S[M]}}function No(S,M,B,re,ge){return ge(S,function(_e,Ye,Ne){B=re?(re=!1,_e):M(B,_e,Ye,Ne)}),B}function hm(S,M){var B=S.length;for(S.sort(M);B--;)S[B]=S[B].value;return S}function Hi(S,M){for(var B,re=-1,ge=S.length;++re<ge;){var _e=M(S[re]);_e!==r&&(B=B===r?_e:B+_e)}return B}function Gi(S,M){for(var B=-1,re=Array(S);++B<S;)re[B]=M(B);return re}function km(S,M){return De(M,function(B){return[B,S[B]]})}function Io(S){return S&&S.slice(0,xo(S)+1).replace(Ii,"")}function hn(S){return function(M){return S(M)}}function Ui(S,M){return De(M,function(B){return S[B]})}function Er(S,M){return S.has(M)}function Oo(S,M){for(var B=-1,re=S.length;++B<re&&Ut(M,S[B],0)>-1;);return B}function Po(S,M){for(var B=S.length;B--&&Ut(M,S[B],0)>-1;);return B}function vm(S,M){for(var B=S.length,re=0;B--;)S[B]===M&&++re;return re}var ym=Vi(tm),bm=Vi(rm);function Em(S){return"\\"+im[S]}function Tm(S,M){return S==null?r:S[M]}function $t(S){return Jc.test(S)}function _m(S){return Qc.test(S)}function wm(S){for(var M,B=[];!(M=S.next()).done;)B.push(M.value);return B}function $i(S){var M=-1,B=Array(S.size);return S.forEach(function(re,ge){B[++M]=[ge,re]}),B}function Bo(S,M){return function(B){return S(M(B))}}function vt(S,M){for(var B=-1,re=S.length,ge=0,_e=[];++B<re;){var Ye=S[B];(Ye===M||Ye===k)&&(S[B]=k,_e[ge++]=B)}return _e}function ga(S){var M=-1,B=Array(S.size);return S.forEach(function(re){B[++M]=re}),B}function Am(S){var M=-1,B=Array(S.size);return S.forEach(function(re){B[++M]=[re,re]}),B}function Rm(S,M,B){for(var re=B-1,ge=S.length;++re<ge;)if(S[re]===M)return re;return-1}function Sm(S,M,B){for(var re=B+1;re--;)if(S[re]===M)return re;return re}function Yt(S){return $t(S)?Nm(S):fm(S)}function Dn(S){return $t(S)?Im(S):cm(S)}function xo(S){for(var M=S.length;M--&&vc.test(S.charAt(M)););return M}var jm=Vi(am);function Nm(S){for(var M=qi.lastIndex=0;qi.test(S);)++M;return M}function Im(S){return S.match(qi)||[]}function Om(S){return S.match(Zc)||[]}var Pm=function S(M){M=M==null?en:Wt.defaults(en.Object(),M,Wt.pick(en,em));var B=M.Array,re=M.Date,ge=M.Error,_e=M.Function,Ye=M.Math,Ne=M.Object,Yi=M.RegExp,Bm=M.String,Rn=M.TypeError,fa=B.prototype,xm=_e.prototype,zt=Ne.prototype,ca=M["__core-js_shared__"],ma=xm.toString,Se=zt.hasOwnProperty,qm=0,qo=function(){var n=/[^.]+$/.exec(ca&&ca.keys&&ca.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),pa=zt.toString,Dm=ma.call(Ne),Mm=en._,Lm=Yi("^"+ma.call(Se).replace(Ni,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ha=vo?M.Buffer:r,yt=M.Symbol,ka=M.Uint8Array,Do=ha?ha.allocUnsafe:r,va=Bo(Ne.getPrototypeOf,Ne),Mo=Ne.create,Lo=zt.propertyIsEnumerable,ya=fa.splice,Fo=yt?yt.isConcatSpreadable:r,Tr=yt?yt.iterator:r,Nt=yt?yt.toStringTag:r,ba=function(){try{var n=xt(Ne,"defineProperty");return n({},"",{}),n}catch{}}(),Fm=M.clearTimeout!==en.clearTimeout&&M.clearTimeout,Km=re&&re.now!==en.Date.now&&re.now,Cm=M.setTimeout!==en.setTimeout&&M.setTimeout,Ea=Ye.ceil,Ta=Ye.floor,Wi=Ne.getOwnPropertySymbols,Vm=ha?ha.isBuffer:r,Ko=M.isFinite,Hm=fa.join,Gm=Bo(Ne.keys,Ne),We=Ye.max,tn=Ye.min,Um=re.now,$m=M.parseInt,Co=Ye.random,Ym=fa.reverse,zi=xt(M,"DataView"),_r=xt(M,"Map"),Xi=xt(M,"Promise"),Xt=xt(M,"Set"),wr=xt(M,"WeakMap"),Ar=xt(Ne,"create"),_a=wr&&new wr,Zt={},Wm=qt(zi),zm=qt(_r),Xm=qt(Xi),Zm=qt(Xt),Jm=qt(wr),wa=yt?yt.prototype:r,Rr=wa?wa.valueOf:r,Vo=wa?wa.toString:r;function m(n){if(He(n)&&!fe(n)&&!(n instanceof ye)){if(n instanceof Sn)return n;if(Se.call(n,"__wrapped__"))return Hu(n)}return new Sn(n)}var Jt=function(){function n(){}return function(t){if(!Le(t))return{};if(Mo)return Mo(t);n.prototype=t;var s=new n;return n.prototype=r,s}}();function Aa(){}function Sn(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}m.templateSettings={escape:fc,evaluate:cc,interpolate:Xl,variable:"",imports:{_:m}},m.prototype=Aa.prototype,m.prototype.constructor=m,Sn.prototype=Jt(Aa.prototype),Sn.prototype.constructor=Sn;function ye(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ne,this.__views__=[]}function Qm(){var n=new ye(this.__wrapped__);return n.__actions__=un(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=un(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=un(this.__views__),n}function ep(){if(this.__filtered__){var n=new ye(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function np(){var n=this.__wrapped__.value(),t=this.__dir__,s=fe(n),u=t<0,f=s?n.length:0,h=ch(0,f,this.__views__),v=h.start,w=h.end,N=w-v,K=u?w:v-1,C=this.__iteratees__,U=C.length,ee=0,se=tn(N,this.__takeCount__);if(!s||!u&&f==N&&se==N)return fu(n,this.__actions__);var ue=[];e:for(;N--&&ee<se;){K+=t;for(var me=-1,de=n[K];++me<U;){var ke=C[me],be=ke.iteratee,yn=ke.type,ln=be(de);if(yn==X)de=ln;else if(!ln){if(yn==D)continue e;break e}}ue[ee++]=de}return ue}ye.prototype=Jt(Aa.prototype),ye.prototype.constructor=ye;function It(n){var t=-1,s=n==null?0:n.length;for(this.clear();++t<s;){var u=n[t];this.set(u[0],u[1])}}function tp(){this.__data__=Ar?Ar(null):{},this.size=0}function rp(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function ap(n){var t=this.__data__;if(Ar){var s=t[n];return s===c?r:s}return Se.call(t,n)?t[n]:r}function ip(n){var t=this.__data__;return Ar?t[n]!==r:Se.call(t,n)}function sp(n,t){var s=this.__data__;return this.size+=this.has(n)?0:1,s[n]=Ar&&t===r?c:t,this}It.prototype.clear=tp,It.prototype.delete=rp,It.prototype.get=ap,It.prototype.has=ip,It.prototype.set=sp;function nt(n){var t=-1,s=n==null?0:n.length;for(this.clear();++t<s;){var u=n[t];this.set(u[0],u[1])}}function lp(){this.__data__=[],this.size=0}function op(n){var t=this.__data__,s=Ra(t,n);if(s<0)return!1;var u=t.length-1;return s==u?t.pop():ya.call(t,s,1),--this.size,!0}function up(n){var t=this.__data__,s=Ra(t,n);return s<0?r:t[s][1]}function dp(n){return Ra(this.__data__,n)>-1}function gp(n,t){var s=this.__data__,u=Ra(s,n);return u<0?(++this.size,s.push([n,t])):s[u][1]=t,this}nt.prototype.clear=lp,nt.prototype.delete=op,nt.prototype.get=up,nt.prototype.has=dp,nt.prototype.set=gp;function tt(n){var t=-1,s=n==null?0:n.length;for(this.clear();++t<s;){var u=n[t];this.set(u[0],u[1])}}function fp(){this.size=0,this.__data__={hash:new It,map:new(_r||nt),string:new It}}function cp(n){var t=La(this,n).delete(n);return this.size-=t?1:0,t}function mp(n){return La(this,n).get(n)}function pp(n){return La(this,n).has(n)}function hp(n,t){var s=La(this,n),u=s.size;return s.set(n,t),this.size+=s.size==u?0:1,this}tt.prototype.clear=fp,tt.prototype.delete=cp,tt.prototype.get=mp,tt.prototype.has=pp,tt.prototype.set=hp;function Ot(n){var t=-1,s=n==null?0:n.length;for(this.__data__=new tt;++t<s;)this.add(n[t])}function kp(n){return this.__data__.set(n,c),this}function vp(n){return this.__data__.has(n)}Ot.prototype.add=Ot.prototype.push=kp,Ot.prototype.has=vp;function Mn(n){var t=this.__data__=new nt(n);this.size=t.size}function yp(){this.__data__=new nt,this.size=0}function bp(n){var t=this.__data__,s=t.delete(n);return this.size=t.size,s}function Ep(n){return this.__data__.get(n)}function Tp(n){return this.__data__.has(n)}function _p(n,t){var s=this.__data__;if(s instanceof nt){var u=s.__data__;if(!_r||u.length<l-1)return u.push([n,t]),this.size=++s.size,this;s=this.__data__=new tt(u)}return s.set(n,t),this.size=s.size,this}Mn.prototype.clear=yp,Mn.prototype.delete=bp,Mn.prototype.get=Ep,Mn.prototype.has=Tp,Mn.prototype.set=_p;function Ho(n,t){var s=fe(n),u=!s&&Dt(n),f=!s&&!u&&wt(n),h=!s&&!u&&!f&&tr(n),v=s||u||f||h,w=v?Gi(n.length,Bm):[],N=w.length;for(var K in n)(t||Se.call(n,K))&&!(v&&(K=="length"||f&&(K=="offset"||K=="parent")||h&&(K=="buffer"||K=="byteLength"||K=="byteOffset")||st(K,N)))&&w.push(K);return w}function Go(n){var t=n.length;return t?n[ls(0,t-1)]:r}function wp(n,t){return Fa(un(n),Pt(t,0,n.length))}function Ap(n){return Fa(un(n))}function Zi(n,t,s){(s!==r&&!Ln(n[t],s)||s===r&&!(t in n))&&rt(n,t,s)}function Sr(n,t,s){var u=n[t];(!(Se.call(n,t)&&Ln(u,s))||s===r&&!(t in n))&&rt(n,t,s)}function Ra(n,t){for(var s=n.length;s--;)if(Ln(n[s][0],t))return s;return-1}function Rp(n,t,s,u){return bt(n,function(f,h,v){t(u,f,s(f),v)}),u}function Uo(n,t){return n&&Gn(t,ze(t),n)}function Sp(n,t){return n&&Gn(t,gn(t),n)}function rt(n,t,s){t=="__proto__"&&ba?ba(n,t,{configurable:!0,enumerable:!0,value:s,writable:!0}):n[t]=s}function Ji(n,t){for(var s=-1,u=t.length,f=B(u),h=n==null;++s<u;)f[s]=h?r:Ps(n,t[s]);return f}function Pt(n,t,s){return n===n&&(s!==r&&(n=n<=s?n:s),t!==r&&(n=n>=t?n:t)),n}function jn(n,t,s,u,f,h){var v,w=t&y,N=t&_,K=t&E;if(s&&(v=f?s(n,u,f,h):s(n)),v!==r)return v;if(!Le(n))return n;var C=fe(n);if(C){if(v=ph(n),!w)return un(n,v)}else{var U=rn(n),ee=U==Ge||U==_n;if(wt(n))return pu(n,w);if(U==Qe||U==Ke||ee&&!f){if(v=N||ee?{}:xu(n),!w)return N?ah(n,Sp(v,n)):rh(n,Uo(v,n))}else{if(!Oe[U])return f?n:{};v=hh(n,U,w)}}h||(h=new Mn);var se=h.get(n);if(se)return se;h.set(n,v),ud(n)?n.forEach(function(de){v.add(jn(de,t,s,de,n,h))}):ld(n)&&n.forEach(function(de,ke){v.set(ke,jn(de,t,s,ke,n,h))});var ue=K?N?vs:ks:N?gn:ze,me=C?r:ue(n);return An(me||n,function(de,ke){me&&(ke=de,de=n[ke]),Sr(v,ke,jn(de,t,s,ke,n,h))}),v}function jp(n){var t=ze(n);return function(s){return $o(s,n,t)}}function $o(n,t,s){var u=s.length;if(n==null)return!u;for(n=Ne(n);u--;){var f=s[u],h=t[f],v=n[f];if(v===r&&!(f in n)||!h(v))return!1}return!0}function Yo(n,t,s){if(typeof n!="function")throw new Rn(d);return xr(function(){n.apply(r,s)},t)}function jr(n,t,s,u){var f=-1,h=ua,v=!0,w=n.length,N=[],K=t.length;if(!w)return N;s&&(t=De(t,hn(s))),u?(h=Li,v=!1):t.length>=l&&(h=Er,v=!1,t=new Ot(t));e:for(;++f<w;){var C=n[f],U=s==null?C:s(C);if(C=u||C!==0?C:0,v&&U===U){for(var ee=K;ee--;)if(t[ee]===U)continue e;N.push(C)}else h(t,U,u)||N.push(C)}return N}var bt=bu(Hn),Wo=bu(es,!0);function Np(n,t){var s=!0;return bt(n,function(u,f,h){return s=!!t(u,f,h),s}),s}function Sa(n,t,s){for(var u=-1,f=n.length;++u<f;){var h=n[u],v=t(h);if(v!=null&&(w===r?v===v&&!vn(v):s(v,w)))var w=v,N=h}return N}function Ip(n,t,s,u){var f=n.length;for(s=ce(s),s<0&&(s=-s>f?0:f+s),u=u===r||u>f?f:ce(u),u<0&&(u+=f),u=s>u?0:gd(u);s<u;)n[s++]=t;return n}function zo(n,t){var s=[];return bt(n,function(u,f,h){t(u,f,h)&&s.push(u)}),s}function nn(n,t,s,u,f){var h=-1,v=n.length;for(s||(s=vh),f||(f=[]);++h<v;){var w=n[h];t>0&&s(w)?t>1?nn(w,t-1,s,u,f):kt(f,w):u||(f[f.length]=w)}return f}var Qi=Eu(),Xo=Eu(!0);function Hn(n,t){return n&&Qi(n,t,ze)}function es(n,t){return n&&Xo(n,t,ze)}function ja(n,t){return ht(t,function(s){return lt(n[s])})}function Bt(n,t){t=Tt(t,n);for(var s=0,u=t.length;n!=null&&s<u;)n=n[Un(t[s++])];return s&&s==u?n:r}function Zo(n,t,s){var u=t(n);return fe(n)?u:kt(u,s(n))}function an(n){return n==null?n===r?ic:Qn:Nt&&Nt in Ne(n)?fh(n):Ah(n)}function ns(n,t){return n>t}function Op(n,t){return n!=null&&Se.call(n,t)}function Pp(n,t){return n!=null&&t in Ne(n)}function Bp(n,t,s){return n>=tn(t,s)&&n<We(t,s)}function ts(n,t,s){for(var u=s?Li:ua,f=n[0].length,h=n.length,v=h,w=B(h),N=1/0,K=[];v--;){var C=n[v];v&&t&&(C=De(C,hn(t))),N=tn(C.length,N),w[v]=!s&&(t||f>=120&&C.length>=120)?new Ot(v&&C):r}C=n[0];var U=-1,ee=w[0];e:for(;++U<f&&K.length<N;){var se=C[U],ue=t?t(se):se;if(se=s||se!==0?se:0,!(ee?Er(ee,ue):u(K,ue,s))){for(v=h;--v;){var me=w[v];if(!(me?Er(me,ue):u(n[v],ue,s)))continue e}ee&&ee.push(ue),K.push(se)}}return K}function xp(n,t,s,u){return Hn(n,function(f,h,v){t(u,s(f),h,v)}),u}function Nr(n,t,s){t=Tt(t,n),n=Lu(n,t);var u=n==null?n:n[Un(In(t))];return u==null?r:pn(u,n,s)}function Jo(n){return He(n)&&an(n)==Ke}function qp(n){return He(n)&&an(n)==br}function Dp(n){return He(n)&&an(n)==we}function Ir(n,t,s,u,f){return n===t?!0:n==null||t==null||!He(n)&&!He(t)?n!==n&&t!==t:Mp(n,t,s,u,Ir,f)}function Mp(n,t,s,u,f,h){var v=fe(n),w=fe(t),N=v?qe:rn(n),K=w?qe:rn(t);N=N==Ke?Qe:N,K=K==Ke?Qe:K;var C=N==Qe,U=K==Qe,ee=N==K;if(ee&&wt(n)){if(!wt(t))return!1;v=!0,C=!1}if(ee&&!C)return h||(h=new Mn),v||tr(n)?Ou(n,t,s,u,f,h):dh(n,t,N,s,u,f,h);if(!(s&O)){var se=C&&Se.call(n,"__wrapped__"),ue=U&&Se.call(t,"__wrapped__");if(se||ue){var me=se?n.value():n,de=ue?t.value():t;return h||(h=new Mn),f(me,de,s,u,h)}}return ee?(h||(h=new Mn),gh(n,t,s,u,f,h)):!1}function Lp(n){return He(n)&&rn(n)==Me}function rs(n,t,s,u){var f=s.length,h=f,v=!u;if(n==null)return!h;for(n=Ne(n);f--;){var w=s[f];if(v&&w[2]?w[1]!==n[w[0]]:!(w[0]in n))return!1}for(;++f<h;){w=s[f];var N=w[0],K=n[N],C=w[1];if(v&&w[2]){if(K===r&&!(N in n))return!1}else{var U=new Mn;if(u)var ee=u(K,C,N,n,t,U);if(!(ee===r?Ir(C,K,O|T,u,U):ee))return!1}}return!0}function Qo(n){if(!Le(n)||bh(n))return!1;var t=lt(n)?Lm:jc;return t.test(qt(n))}function Fp(n){return He(n)&&an(n)==kr}function Kp(n){return He(n)&&rn(n)==qn}function Cp(n){return He(n)&&Ua(n.length)&&!!Be[an(n)]}function eu(n){return typeof n=="function"?n:n==null?fn:typeof n=="object"?fe(n)?ru(n[0],n[1]):tu(n):Td(n)}function as(n){if(!Br(n))return Gm(n);var t=[];for(var s in Ne(n))Se.call(n,s)&&s!="constructor"&&t.push(s);return t}function Vp(n){if(!Le(n))return wh(n);var t=Br(n),s=[];for(var u in n)u=="constructor"&&(t||!Se.call(n,u))||s.push(u);return s}function is(n,t){return n<t}function nu(n,t){var s=-1,u=dn(n)?B(n.length):[];return bt(n,function(f,h,v){u[++s]=t(f,h,v)}),u}function tu(n){var t=bs(n);return t.length==1&&t[0][2]?Du(t[0][0],t[0][1]):function(s){return s===n||rs(s,n,t)}}function ru(n,t){return Ts(n)&&qu(t)?Du(Un(n),t):function(s){var u=Ps(s,n);return u===r&&u===t?Bs(s,n):Ir(t,u,O|T)}}function Na(n,t,s,u,f){n!==t&&Qi(t,function(h,v){if(f||(f=new Mn),Le(h))Hp(n,t,v,s,Na,u,f);else{var w=u?u(ws(n,v),h,v+"",n,t,f):r;w===r&&(w=h),Zi(n,v,w)}},gn)}function Hp(n,t,s,u,f,h,v){var w=ws(n,s),N=ws(t,s),K=v.get(N);if(K){Zi(n,s,K);return}var C=h?h(w,N,s+"",n,t,v):r,U=C===r;if(U){var ee=fe(N),se=!ee&&wt(N),ue=!ee&&!se&&tr(N);C=N,ee||se||ue?fe(w)?C=w:Ue(w)?C=un(w):se?(U=!1,C=pu(N,!0)):ue?(U=!1,C=hu(N,!0)):C=[]:qr(N)||Dt(N)?(C=w,Dt(w)?C=fd(w):(!Le(w)||lt(w))&&(C=xu(N))):U=!1}U&&(v.set(N,C),f(C,N,u,h,v),v.delete(N)),Zi(n,s,C)}function au(n,t){var s=n.length;if(s)return t+=t<0?s:0,st(t,s)?n[t]:r}function iu(n,t,s){t.length?t=De(t,function(h){return fe(h)?function(v){return Bt(v,h.length===1?h[0]:h)}:h}):t=[fn];var u=-1;t=De(t,hn(oe()));var f=nu(n,function(h,v,w){var N=De(t,function(K){return K(h)});return{criteria:N,index:++u,value:h}});return hm(f,function(h,v){return th(h,v,s)})}function Gp(n,t){return su(n,t,function(s,u){return Bs(n,u)})}function su(n,t,s){for(var u=-1,f=t.length,h={};++u<f;){var v=t[u],w=Bt(n,v);s(w,v)&&Or(h,Tt(v,n),w)}return h}function Up(n){return function(t){return Bt(t,n)}}function ss(n,t,s,u){var f=u?pm:Ut,h=-1,v=t.length,w=n;for(n===t&&(t=un(t)),s&&(w=De(n,hn(s)));++h<v;)for(var N=0,K=t[h],C=s?s(K):K;(N=f(w,C,N,u))>-1;)w!==n&&ya.call(w,N,1),ya.call(n,N,1);return n}function lu(n,t){for(var s=n?t.length:0,u=s-1;s--;){var f=t[s];if(s==u||f!==h){var h=f;st(f)?ya.call(n,f,1):ds(n,f)}}return n}function ls(n,t){return n+Ta(Co()*(t-n+1))}function $p(n,t,s,u){for(var f=-1,h=We(Ea((t-n)/(s||1)),0),v=B(h);h--;)v[u?h:++f]=n,n+=s;return v}function os(n,t){var s="";if(!n||t<1||t>G)return s;do t%2&&(s+=n),t=Ta(t/2),t&&(n+=n);while(t);return s}function pe(n,t){return As(Mu(n,t,fn),n+"")}function Yp(n){return Go(rr(n))}function Wp(n,t){var s=rr(n);return Fa(s,Pt(t,0,s.length))}function Or(n,t,s,u){if(!Le(n))return n;t=Tt(t,n);for(var f=-1,h=t.length,v=h-1,w=n;w!=null&&++f<h;){var N=Un(t[f]),K=s;if(N==="__proto__"||N==="constructor"||N==="prototype")return n;if(f!=v){var C=w[N];K=u?u(C,N,w):r,K===r&&(K=Le(C)?C:st(t[f+1])?[]:{})}Sr(w,N,K),w=w[N]}return n}var ou=_a?function(n,t){return _a.set(n,t),n}:fn,zp=ba?function(n,t){return ba(n,"toString",{configurable:!0,enumerable:!1,value:qs(t),writable:!0})}:fn;function Xp(n){return Fa(rr(n))}function Nn(n,t,s){var u=-1,f=n.length;t<0&&(t=-t>f?0:f+t),s=s>f?f:s,s<0&&(s+=f),f=t>s?0:s-t>>>0,t>>>=0;for(var h=B(f);++u<f;)h[u]=n[u+t];return h}function Zp(n,t){var s;return bt(n,function(u,f,h){return s=t(u,f,h),!s}),!!s}function Ia(n,t,s){var u=0,f=n==null?u:n.length;if(typeof t=="number"&&t===t&&f<=he){for(;u<f;){var h=u+f>>>1,v=n[h];v!==null&&!vn(v)&&(s?v<=t:v<t)?u=h+1:f=h}return f}return us(n,t,fn,s)}function us(n,t,s,u){var f=0,h=n==null?0:n.length;if(h===0)return 0;t=s(t);for(var v=t!==t,w=t===null,N=vn(t),K=t===r;f<h;){var C=Ta((f+h)/2),U=s(n[C]),ee=U!==r,se=U===null,ue=U===U,me=vn(U);if(v)var de=u||ue;else K?de=ue&&(u||ee):w?de=ue&&ee&&(u||!se):N?de=ue&&ee&&!se&&(u||!me):se||me?de=!1:de=u?U<=t:U<t;de?f=C+1:h=C}return tn(h,le)}function uu(n,t){for(var s=-1,u=n.length,f=0,h=[];++s<u;){var v=n[s],w=t?t(v):v;if(!s||!Ln(w,N)){var N=w;h[f++]=v===0?0:v}}return h}function du(n){return typeof n=="number"?n:vn(n)?ae:+n}function kn(n){if(typeof n=="string")return n;if(fe(n))return De(n,kn)+"";if(vn(n))return Vo?Vo.call(n):"";var t=n+"";return t=="0"&&1/n==-W?"-0":t}function Et(n,t,s){var u=-1,f=ua,h=n.length,v=!0,w=[],N=w;if(s)v=!1,f=Li;else if(h>=l){var K=t?null:oh(n);if(K)return ga(K);v=!1,f=Er,N=new Ot}else N=t?[]:w;e:for(;++u<h;){var C=n[u],U=t?t(C):C;if(C=s||C!==0?C:0,v&&U===U){for(var ee=N.length;ee--;)if(N[ee]===U)continue e;t&&N.push(U),w.push(C)}else f(N,U,s)||(N!==w&&N.push(U),w.push(C))}return w}function ds(n,t){return t=Tt(t,n),n=Lu(n,t),n==null||delete n[Un(In(t))]}function gu(n,t,s,u){return Or(n,t,s(Bt(n,t)),u)}function Oa(n,t,s,u){for(var f=n.length,h=u?f:-1;(u?h--:++h<f)&&t(n[h],h,n););return s?Nn(n,u?0:h,u?h+1:f):Nn(n,u?h+1:0,u?f:h)}function fu(n,t){var s=n;return s instanceof ye&&(s=s.value()),Fi(t,function(u,f){return f.func.apply(f.thisArg,kt([u],f.args))},s)}function gs(n,t,s){var u=n.length;if(u<2)return u?Et(n[0]):[];for(var f=-1,h=B(u);++f<u;)for(var v=n[f],w=-1;++w<u;)w!=f&&(h[f]=jr(h[f]||v,n[w],t,s));return Et(nn(h,1),t,s)}function cu(n,t,s){for(var u=-1,f=n.length,h=t.length,v={};++u<f;){var w=u<h?t[u]:r;s(v,n[u],w)}return v}function fs(n){return Ue(n)?n:[]}function cs(n){return typeof n=="function"?n:fn}function Tt(n,t){return fe(n)?n:Ts(n,t)?[n]:Vu(Ae(n))}var Jp=pe;function _t(n,t,s){var u=n.length;return s=s===r?u:s,!t&&s>=u?n:Nn(n,t,s)}var mu=Fm||function(n){return en.clearTimeout(n)};function pu(n,t){if(t)return n.slice();var s=n.length,u=Do?Do(s):new n.constructor(s);return n.copy(u),u}function ms(n){var t=new n.constructor(n.byteLength);return new ka(t).set(new ka(n)),t}function Qp(n,t){var s=t?ms(n.buffer):n.buffer;return new n.constructor(s,n.byteOffset,n.byteLength)}function eh(n){var t=new n.constructor(n.source,Zl.exec(n));return t.lastIndex=n.lastIndex,t}function nh(n){return Rr?Ne(Rr.call(n)):{}}function hu(n,t){var s=t?ms(n.buffer):n.buffer;return new n.constructor(s,n.byteOffset,n.length)}function ku(n,t){if(n!==t){var s=n!==r,u=n===null,f=n===n,h=vn(n),v=t!==r,w=t===null,N=t===t,K=vn(t);if(!w&&!K&&!h&&n>t||h&&v&&N&&!w&&!K||u&&v&&N||!s&&N||!f)return 1;if(!u&&!h&&!K&&n<t||K&&s&&f&&!u&&!h||w&&s&&f||!v&&f||!N)return-1}return 0}function th(n,t,s){for(var u=-1,f=n.criteria,h=t.criteria,v=f.length,w=s.length;++u<v;){var N=ku(f[u],h[u]);if(N){if(u>=w)return N;var K=s[u];return N*(K=="desc"?-1:1)}}return n.index-t.index}function vu(n,t,s,u){for(var f=-1,h=n.length,v=s.length,w=-1,N=t.length,K=We(h-v,0),C=B(N+K),U=!u;++w<N;)C[w]=t[w];for(;++f<v;)(U||f<h)&&(C[s[f]]=n[f]);for(;K--;)C[w++]=n[f++];return C}function yu(n,t,s,u){for(var f=-1,h=n.length,v=-1,w=s.length,N=-1,K=t.length,C=We(h-w,0),U=B(C+K),ee=!u;++f<C;)U[f]=n[f];for(var se=f;++N<K;)U[se+N]=t[N];for(;++v<w;)(ee||f<h)&&(U[se+s[v]]=n[f++]);return U}function un(n,t){var s=-1,u=n.length;for(t||(t=B(u));++s<u;)t[s]=n[s];return t}function Gn(n,t,s,u){var f=!s;s||(s={});for(var h=-1,v=t.length;++h<v;){var w=t[h],N=u?u(s[w],n[w],w,s,n):r;N===r&&(N=n[w]),f?rt(s,w,N):Sr(s,w,N)}return s}function rh(n,t){return Gn(n,Es(n),t)}function ah(n,t){return Gn(n,Pu(n),t)}function Pa(n,t){return function(s,u){var f=fe(s)?um:Rp,h=t?t():{};return f(s,n,oe(u,2),h)}}function Qt(n){return pe(function(t,s){var u=-1,f=s.length,h=f>1?s[f-1]:r,v=f>2?s[2]:r;for(h=n.length>3&&typeof h=="function"?(f--,h):r,v&&sn(s[0],s[1],v)&&(h=f<3?r:h,f=1),t=Ne(t);++u<f;){var w=s[u];w&&n(t,w,u,h)}return t})}function bu(n,t){return function(s,u){if(s==null)return s;if(!dn(s))return n(s,u);for(var f=s.length,h=t?f:-1,v=Ne(s);(t?h--:++h<f)&&u(v[h],h,v)!==!1;);return s}}function Eu(n){return function(t,s,u){for(var f=-1,h=Ne(t),v=u(t),w=v.length;w--;){var N=v[n?w:++f];if(s(h[N],N,h)===!1)break}return t}}function ih(n,t,s){var u=t&b,f=Pr(n);function h(){var v=this&&this!==en&&this instanceof h?f:n;return v.apply(u?s:this,arguments)}return h}function Tu(n){return function(t){t=Ae(t);var s=$t(t)?Dn(t):r,u=s?s[0]:t.charAt(0),f=s?_t(s,1).join(""):t.slice(1);return u[n]()+f}}function er(n){return function(t){return Fi(bd(yd(t).replace(zc,"")),n,"")}}function Pr(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var s=Jt(n.prototype),u=n.apply(s,t);return Le(u)?u:s}}function sh(n,t,s){var u=Pr(n);function f(){for(var h=arguments.length,v=B(h),w=h,N=nr(f);w--;)v[w]=arguments[w];var K=h<3&&v[0]!==N&&v[h-1]!==N?[]:vt(v,N);if(h-=K.length,h<s)return Su(n,t,Ba,f.placeholder,r,v,K,r,r,s-h);var C=this&&this!==en&&this instanceof f?u:n;return pn(C,this,v)}return f}function _u(n){return function(t,s,u){var f=Ne(t);if(!dn(t)){var h=oe(s,3);t=ze(t),s=function(w){return h(f[w],w,f)}}var v=n(t,s,u);return v>-1?f[h?t[v]:v]:r}}function wu(n){return it(function(t){var s=t.length,u=s,f=Sn.prototype.thru;for(n&&t.reverse();u--;){var h=t[u];if(typeof h!="function")throw new Rn(d);if(f&&!v&&Ma(h)=="wrapper")var v=new Sn([],!0)}for(u=v?u:s;++u<s;){h=t[u];var w=Ma(h),N=w=="wrapper"?ys(h):r;N&&_s(N[0])&&N[1]==(x|j|I|q)&&!N[4].length&&N[9]==1?v=v[Ma(N[0])].apply(v,N[3]):v=h.length==1&&_s(h)?v[w]():v.thru(h)}return function(){var K=arguments,C=K[0];if(v&&K.length==1&&fe(C))return v.plant(C).value();for(var U=0,ee=s?t[U].apply(this,K):C;++U<s;)ee=t[U].call(this,ee);return ee}})}function Ba(n,t,s,u,f,h,v,w,N,K){var C=t&x,U=t&b,ee=t&R,se=t&(j|H),ue=t&z,me=ee?r:Pr(n);function de(){for(var ke=arguments.length,be=B(ke),yn=ke;yn--;)be[yn]=arguments[yn];if(se)var ln=nr(de),bn=vm(be,ln);if(u&&(be=vu(be,u,f,se)),h&&(be=yu(be,h,v,se)),ke-=bn,se&&ke<K){var $e=vt(be,ln);return Su(n,t,Ba,de.placeholder,s,be,$e,w,N,K-ke)}var Fn=U?s:this,ut=ee?Fn[n]:n;return ke=be.length,w?be=Rh(be,w):ue&&ke>1&&be.reverse(),C&&N<ke&&(be.length=N),this&&this!==en&&this instanceof de&&(ut=me||Pr(ut)),ut.apply(Fn,be)}return de}function Au(n,t){return function(s,u){return xp(s,n,t(u),{})}}function xa(n,t){return function(s,u){var f;if(s===r&&u===r)return t;if(s!==r&&(f=s),u!==r){if(f===r)return u;typeof s=="string"||typeof u=="string"?(s=kn(s),u=kn(u)):(s=du(s),u=du(u)),f=n(s,u)}return f}}function ps(n){return it(function(t){return t=De(t,hn(oe())),pe(function(s){var u=this;return n(t,function(f){return pn(f,u,s)})})})}function qa(n,t){t=t===r?" ":kn(t);var s=t.length;if(s<2)return s?os(t,n):t;var u=os(t,Ea(n/Yt(t)));return $t(t)?_t(Dn(u),0,n).join(""):u.slice(0,n)}function lh(n,t,s,u){var f=t&b,h=Pr(n);function v(){for(var w=-1,N=arguments.length,K=-1,C=u.length,U=B(C+N),ee=this&&this!==en&&this instanceof v?h:n;++K<C;)U[K]=u[K];for(;N--;)U[K++]=arguments[++w];return pn(ee,f?s:this,U)}return v}function Ru(n){return function(t,s,u){return u&&typeof u!="number"&&sn(t,s,u)&&(s=u=r),t=ot(t),s===r?(s=t,t=0):s=ot(s),u=u===r?t<s?1:-1:ot(u),$p(t,s,u,n)}}function Da(n){return function(t,s){return typeof t=="string"&&typeof s=="string"||(t=On(t),s=On(s)),n(t,s)}}function Su(n,t,s,u,f,h,v,w,N,K){var C=t&j,U=C?v:r,ee=C?r:v,se=C?h:r,ue=C?r:h;t|=C?I:V,t&=~(C?V:I),t&P||(t&=-4);var me=[n,t,f,se,U,ue,ee,w,N,K],de=s.apply(r,me);return _s(n)&&Fu(de,me),de.placeholder=u,Ku(de,n,t)}function hs(n){var t=Ye[n];return function(s,u){if(s=On(s),u=u==null?0:tn(ce(u),292),u&&Ko(s)){var f=(Ae(s)+"e").split("e"),h=t(f[0]+"e"+(+f[1]+u));return f=(Ae(h)+"e").split("e"),+(f[0]+"e"+(+f[1]-u))}return t(s)}}var oh=Xt&&1/ga(new Xt([,-0]))[1]==W?function(n){return new Xt(n)}:Ls;function ju(n){return function(t){var s=rn(t);return s==Me?$i(t):s==qn?Am(t):km(t,n(t))}}function at(n,t,s,u,f,h,v,w){var N=t&R;if(!N&&typeof n!="function")throw new Rn(d);var K=u?u.length:0;if(K||(t&=-97,u=f=r),v=v===r?v:We(ce(v),0),w=w===r?w:ce(w),K-=f?f.length:0,t&V){var C=u,U=f;u=f=r}var ee=N?r:ys(n),se=[n,t,s,u,f,C,U,h,v,w];if(ee&&_h(se,ee),n=se[0],t=se[1],s=se[2],u=se[3],f=se[4],w=se[9]=se[9]===r?N?0:n.length:We(se[9]-K,0),!w&&t&(j|H)&&(t&=-25),!t||t==b)var ue=ih(n,t,s);else t==j||t==H?ue=sh(n,t,w):(t==I||t==(b|I))&&!f.length?ue=lh(n,t,s,u):ue=Ba.apply(r,se);var me=ee?ou:Fu;return Ku(me(ue,se),n,t)}function Nu(n,t,s,u){return n===r||Ln(n,zt[s])&&!Se.call(u,s)?t:n}function Iu(n,t,s,u,f,h){return Le(n)&&Le(t)&&(h.set(t,n),Na(n,t,r,Iu,h),h.delete(t)),n}function uh(n){return qr(n)?r:n}function Ou(n,t,s,u,f,h){var v=s&O,w=n.length,N=t.length;if(w!=N&&!(v&&N>w))return!1;var K=h.get(n),C=h.get(t);if(K&&C)return K==t&&C==n;var U=-1,ee=!0,se=s&T?new Ot:r;for(h.set(n,t),h.set(t,n);++U<w;){var ue=n[U],me=t[U];if(u)var de=v?u(me,ue,U,t,n,h):u(ue,me,U,n,t,h);if(de!==r){if(de)continue;ee=!1;break}if(se){if(!Ki(t,function(ke,be){if(!Er(se,be)&&(ue===ke||f(ue,ke,s,u,h)))return se.push(be)})){ee=!1;break}}else if(!(ue===me||f(ue,me,s,u,h))){ee=!1;break}}return h.delete(n),h.delete(t),ee}function dh(n,t,s,u,f,h,v){switch(s){case Ht:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case br:return!(n.byteLength!=t.byteLength||!h(new ka(n),new ka(t)));case ve:case we:case Je:return Ln(+n,+t);case Ve:return n.name==t.name&&n.message==t.message;case kr:case vr:return n==t+"";case Me:var w=$i;case qn:var N=u&O;if(w||(w=ga),n.size!=t.size&&!N)return!1;var K=v.get(n);if(K)return K==t;u|=T,v.set(n,t);var C=Ou(w(n),w(t),u,f,h,v);return v.delete(n),C;case ia:if(Rr)return Rr.call(n)==Rr.call(t)}return!1}function gh(n,t,s,u,f,h){var v=s&O,w=ks(n),N=w.length,K=ks(t),C=K.length;if(N!=C&&!v)return!1;for(var U=N;U--;){var ee=w[U];if(!(v?ee in t:Se.call(t,ee)))return!1}var se=h.get(n),ue=h.get(t);if(se&&ue)return se==t&&ue==n;var me=!0;h.set(n,t),h.set(t,n);for(var de=v;++U<N;){ee=w[U];var ke=n[ee],be=t[ee];if(u)var yn=v?u(be,ke,ee,t,n,h):u(ke,be,ee,n,t,h);if(!(yn===r?ke===be||f(ke,be,s,u,h):yn)){me=!1;break}de||(de=ee=="constructor")}if(me&&!de){var ln=n.constructor,bn=t.constructor;ln!=bn&&"constructor"in n&&"constructor"in t&&!(typeof ln=="function"&&ln instanceof ln&&typeof bn=="function"&&bn instanceof bn)&&(me=!1)}return h.delete(n),h.delete(t),me}function it(n){return As(Mu(n,r,$u),n+"")}function ks(n){return Zo(n,ze,Es)}function vs(n){return Zo(n,gn,Pu)}var ys=_a?function(n){return _a.get(n)}:Ls;function Ma(n){for(var t=n.name+"",s=Zt[t],u=Se.call(Zt,t)?s.length:0;u--;){var f=s[u],h=f.func;if(h==null||h==n)return f.name}return t}function nr(n){var t=Se.call(m,"placeholder")?m:n;return t.placeholder}function oe(){var n=m.iteratee||Ds;return n=n===Ds?eu:n,arguments.length?n(arguments[0],arguments[1]):n}function La(n,t){var s=n.__data__;return yh(t)?s[typeof t=="string"?"string":"hash"]:s.map}function bs(n){for(var t=ze(n),s=t.length;s--;){var u=t[s],f=n[u];t[s]=[u,f,qu(f)]}return t}function xt(n,t){var s=Tm(n,t);return Qo(s)?s:r}function fh(n){var t=Se.call(n,Nt),s=n[Nt];try{n[Nt]=r;var u=!0}catch{}var f=pa.call(n);return u&&(t?n[Nt]=s:delete n[Nt]),f}var Es=Wi?function(n){return n==null?[]:(n=Ne(n),ht(Wi(n),function(t){return Lo.call(n,t)}))}:Fs,Pu=Wi?function(n){for(var t=[];n;)kt(t,Es(n)),n=va(n);return t}:Fs,rn=an;(zi&&rn(new zi(new ArrayBuffer(1)))!=Ht||_r&&rn(new _r)!=Me||Xi&&rn(Xi.resolve())!=Vn||Xt&&rn(new Xt)!=qn||wr&&rn(new wr)!=yr)&&(rn=function(n){var t=an(n),s=t==Qe?n.constructor:r,u=s?qt(s):"";if(u)switch(u){case Wm:return Ht;case zm:return Me;case Xm:return Vn;case Zm:return qn;case Jm:return yr}return t});function ch(n,t,s){for(var u=-1,f=s.length;++u<f;){var h=s[u],v=h.size;switch(h.type){case"drop":n+=v;break;case"dropRight":t-=v;break;case"take":t=tn(t,n+v);break;case"takeRight":n=We(n,t-v);break}}return{start:n,end:t}}function mh(n){var t=n.match(bc);return t?t[1].split(Ec):[]}function Bu(n,t,s){t=Tt(t,n);for(var u=-1,f=t.length,h=!1;++u<f;){var v=Un(t[u]);if(!(h=n!=null&&s(n,v)))break;n=n[v]}return h||++u!=f?h:(f=n==null?0:n.length,!!f&&Ua(f)&&st(v,f)&&(fe(n)||Dt(n)))}function ph(n){var t=n.length,s=new n.constructor(t);return t&&typeof n[0]=="string"&&Se.call(n,"index")&&(s.index=n.index,s.input=n.input),s}function xu(n){return typeof n.constructor=="function"&&!Br(n)?Jt(va(n)):{}}function hh(n,t,s){var u=n.constructor;switch(t){case br:return ms(n);case ve:case we:return new u(+n);case Ht:return Qp(n,s);case bi:case Ei:case Ti:case _i:case wi:case Ai:case Ri:case Si:case ji:return hu(n,s);case Me:return new u;case Je:case vr:return new u(n);case kr:return eh(n);case qn:return new u;case ia:return nh(n)}}function kh(n,t){var s=t.length;if(!s)return n;var u=s-1;return t[u]=(s>1?"& ":"")+t[u],t=t.join(s>2?", ":" "),n.replace(yc,`{
/* [wrapped with `+t+`] */
`)}function vh(n){return fe(n)||Dt(n)||!!(Fo&&n&&n[Fo])}function st(n,t){var s=typeof n;return t=t??G,!!t&&(s=="number"||s!="symbol"&&Ic.test(n))&&n>-1&&n%1==0&&n<t}function sn(n,t,s){if(!Le(s))return!1;var u=typeof t;return(u=="number"?dn(s)&&st(t,s.length):u=="string"&&t in s)?Ln(s[t],n):!1}function Ts(n,t){if(fe(n))return!1;var s=typeof n;return s=="number"||s=="symbol"||s=="boolean"||n==null||vn(n)?!0:pc.test(n)||!mc.test(n)||t!=null&&n in Ne(t)}function yh(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}function _s(n){var t=Ma(n),s=m[t];if(typeof s!="function"||!(t in ye.prototype))return!1;if(n===s)return!0;var u=ys(s);return!!u&&n===u[0]}function bh(n){return!!qo&&qo in n}var Eh=ca?lt:Ks;function Br(n){var t=n&&n.constructor,s=typeof t=="function"&&t.prototype||zt;return n===s}function qu(n){return n===n&&!Le(n)}function Du(n,t){return function(s){return s==null?!1:s[n]===t&&(t!==r||n in Ne(s))}}function Th(n){var t=Ha(n,function(u){return s.size===p&&s.clear(),u}),s=t.cache;return t}function _h(n,t){var s=n[1],u=t[1],f=s|u,h=f<(b|R|x),v=u==x&&s==j||u==x&&s==q&&n[7].length<=t[8]||u==(x|q)&&t[7].length<=t[8]&&s==j;if(!(h||v))return n;u&b&&(n[2]=t[2],f|=s&b?0:P);var w=t[3];if(w){var N=n[3];n[3]=N?vu(N,w,t[4]):w,n[4]=N?vt(n[3],k):t[4]}return w=t[5],w&&(N=n[5],n[5]=N?yu(N,w,t[6]):w,n[6]=N?vt(n[5],k):t[6]),w=t[7],w&&(n[7]=w),u&x&&(n[8]=n[8]==null?t[8]:tn(n[8],t[8])),n[9]==null&&(n[9]=t[9]),n[0]=t[0],n[1]=f,n}function wh(n){var t=[];if(n!=null)for(var s in Ne(n))t.push(s);return t}function Ah(n){return pa.call(n)}function Mu(n,t,s){return t=We(t===r?n.length-1:t,0),function(){for(var u=arguments,f=-1,h=We(u.length-t,0),v=B(h);++f<h;)v[f]=u[t+f];f=-1;for(var w=B(t+1);++f<t;)w[f]=u[f];return w[t]=s(v),pn(n,this,w)}}function Lu(n,t){return t.length<2?n:Bt(n,Nn(t,0,-1))}function Rh(n,t){for(var s=n.length,u=tn(t.length,s),f=un(n);u--;){var h=t[u];n[u]=st(h,s)?f[h]:r}return n}function ws(n,t){if(!(t==="constructor"&&typeof n[t]=="function")&&t!="__proto__")return n[t]}var Fu=Cu(ou),xr=Cm||function(n,t){return en.setTimeout(n,t)},As=Cu(zp);function Ku(n,t,s){var u=t+"";return As(n,kh(u,Sh(mh(u),s)))}function Cu(n){var t=0,s=0;return function(){var u=Um(),f=F-(u-s);if(s=u,f>0){if(++t>=J)return arguments[0]}else t=0;return n.apply(r,arguments)}}function Fa(n,t){var s=-1,u=n.length,f=u-1;for(t=t===r?u:t;++s<t;){var h=ls(s,f),v=n[h];n[h]=n[s],n[s]=v}return n.length=t,n}var Vu=Th(function(n){var t=[];return n.charCodeAt(0)===46&&t.push(""),n.replace(hc,function(s,u,f,h){t.push(f?h.replace(wc,"$1"):u||s)}),t});function Un(n){if(typeof n=="string"||vn(n))return n;var t=n+"";return t=="0"&&1/n==-W?"-0":t}function qt(n){if(n!=null){try{return ma.call(n)}catch{}try{return n+""}catch{}}return""}function Sh(n,t){return An(mn,function(s){var u="_."+s[0];t&s[1]&&!ua(n,u)&&n.push(u)}),n.sort()}function Hu(n){if(n instanceof ye)return n.clone();var t=new Sn(n.__wrapped__,n.__chain__);return t.__actions__=un(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function jh(n,t,s){(s?sn(n,t,s):t===r)?t=1:t=We(ce(t),0);var u=n==null?0:n.length;if(!u||t<1)return[];for(var f=0,h=0,v=B(Ea(u/t));f<u;)v[h++]=Nn(n,f,f+=t);return v}function Nh(n){for(var t=-1,s=n==null?0:n.length,u=0,f=[];++t<s;){var h=n[t];h&&(f[u++]=h)}return f}function Ih(){var n=arguments.length;if(!n)return[];for(var t=B(n-1),s=arguments[0],u=n;u--;)t[u-1]=arguments[u];return kt(fe(s)?un(s):[s],nn(t,1))}var Oh=pe(function(n,t){return Ue(n)?jr(n,nn(t,1,Ue,!0)):[]}),Ph=pe(function(n,t){var s=In(t);return Ue(s)&&(s=r),Ue(n)?jr(n,nn(t,1,Ue,!0),oe(s,2)):[]}),Bh=pe(function(n,t){var s=In(t);return Ue(s)&&(s=r),Ue(n)?jr(n,nn(t,1,Ue,!0),r,s):[]});function xh(n,t,s){var u=n==null?0:n.length;return u?(t=s||t===r?1:ce(t),Nn(n,t<0?0:t,u)):[]}function qh(n,t,s){var u=n==null?0:n.length;return u?(t=s||t===r?1:ce(t),t=u-t,Nn(n,0,t<0?0:t)):[]}function Dh(n,t){return n&&n.length?Oa(n,oe(t,3),!0,!0):[]}function Mh(n,t){return n&&n.length?Oa(n,oe(t,3),!0):[]}function Lh(n,t,s,u){var f=n==null?0:n.length;return f?(s&&typeof s!="number"&&sn(n,t,s)&&(s=0,u=f),Ip(n,t,s,u)):[]}function Gu(n,t,s){var u=n==null?0:n.length;if(!u)return-1;var f=s==null?0:ce(s);return f<0&&(f=We(u+f,0)),da(n,oe(t,3),f)}function Uu(n,t,s){var u=n==null?0:n.length;if(!u)return-1;var f=u-1;return s!==r&&(f=ce(s),f=s<0?We(u+f,0):tn(f,u-1)),da(n,oe(t,3),f,!0)}function $u(n){var t=n==null?0:n.length;return t?nn(n,1):[]}function Fh(n){var t=n==null?0:n.length;return t?nn(n,W):[]}function Kh(n,t){var s=n==null?0:n.length;return s?(t=t===r?1:ce(t),nn(n,t)):[]}function Ch(n){for(var t=-1,s=n==null?0:n.length,u={};++t<s;){var f=n[t];u[f[0]]=f[1]}return u}function Yu(n){return n&&n.length?n[0]:r}function Vh(n,t,s){var u=n==null?0:n.length;if(!u)return-1;var f=s==null?0:ce(s);return f<0&&(f=We(u+f,0)),Ut(n,t,f)}function Hh(n){var t=n==null?0:n.length;return t?Nn(n,0,-1):[]}var Gh=pe(function(n){var t=De(n,fs);return t.length&&t[0]===n[0]?ts(t):[]}),Uh=pe(function(n){var t=In(n),s=De(n,fs);return t===In(s)?t=r:s.pop(),s.length&&s[0]===n[0]?ts(s,oe(t,2)):[]}),$h=pe(function(n){var t=In(n),s=De(n,fs);return t=typeof t=="function"?t:r,t&&s.pop(),s.length&&s[0]===n[0]?ts(s,r,t):[]});function Yh(n,t){return n==null?"":Hm.call(n,t)}function In(n){var t=n==null?0:n.length;return t?n[t-1]:r}function Wh(n,t,s){var u=n==null?0:n.length;if(!u)return-1;var f=u;return s!==r&&(f=ce(s),f=f<0?We(u+f,0):tn(f,u-1)),t===t?Sm(n,t,f):da(n,So,f,!0)}function zh(n,t){return n&&n.length?au(n,ce(t)):r}var Xh=pe(Wu);function Wu(n,t){return n&&n.length&&t&&t.length?ss(n,t):n}function Zh(n,t,s){return n&&n.length&&t&&t.length?ss(n,t,oe(s,2)):n}function Jh(n,t,s){return n&&n.length&&t&&t.length?ss(n,t,r,s):n}var Qh=it(function(n,t){var s=n==null?0:n.length,u=Ji(n,t);return lu(n,De(t,function(f){return st(f,s)?+f:f}).sort(ku)),u});function ek(n,t){var s=[];if(!(n&&n.length))return s;var u=-1,f=[],h=n.length;for(t=oe(t,3);++u<h;){var v=n[u];t(v,u,n)&&(s.push(v),f.push(u))}return lu(n,f),s}function Rs(n){return n==null?n:Ym.call(n)}function nk(n,t,s){var u=n==null?0:n.length;return u?(s&&typeof s!="number"&&sn(n,t,s)?(t=0,s=u):(t=t==null?0:ce(t),s=s===r?u:ce(s)),Nn(n,t,s)):[]}function tk(n,t){return Ia(n,t)}function rk(n,t,s){return us(n,t,oe(s,2))}function ak(n,t){var s=n==null?0:n.length;if(s){var u=Ia(n,t);if(u<s&&Ln(n[u],t))return u}return-1}function ik(n,t){return Ia(n,t,!0)}function sk(n,t,s){return us(n,t,oe(s,2),!0)}function lk(n,t){var s=n==null?0:n.length;if(s){var u=Ia(n,t,!0)-1;if(Ln(n[u],t))return u}return-1}function ok(n){return n&&n.length?uu(n):[]}function uk(n,t){return n&&n.length?uu(n,oe(t,2)):[]}function dk(n){var t=n==null?0:n.length;return t?Nn(n,1,t):[]}function gk(n,t,s){return n&&n.length?(t=s||t===r?1:ce(t),Nn(n,0,t<0?0:t)):[]}function fk(n,t,s){var u=n==null?0:n.length;return u?(t=s||t===r?1:ce(t),t=u-t,Nn(n,t<0?0:t,u)):[]}function ck(n,t){return n&&n.length?Oa(n,oe(t,3),!1,!0):[]}function mk(n,t){return n&&n.length?Oa(n,oe(t,3)):[]}var pk=pe(function(n){return Et(nn(n,1,Ue,!0))}),hk=pe(function(n){var t=In(n);return Ue(t)&&(t=r),Et(nn(n,1,Ue,!0),oe(t,2))}),kk=pe(function(n){var t=In(n);return t=typeof t=="function"?t:r,Et(nn(n,1,Ue,!0),r,t)});function vk(n){return n&&n.length?Et(n):[]}function yk(n,t){return n&&n.length?Et(n,oe(t,2)):[]}function bk(n,t){return t=typeof t=="function"?t:r,n&&n.length?Et(n,r,t):[]}function Ss(n){if(!(n&&n.length))return[];var t=0;return n=ht(n,function(s){if(Ue(s))return t=We(s.length,t),!0}),Gi(t,function(s){return De(n,Ci(s))})}function zu(n,t){if(!(n&&n.length))return[];var s=Ss(n);return t==null?s:De(s,function(u){return pn(t,r,u)})}var Ek=pe(function(n,t){return Ue(n)?jr(n,t):[]}),Tk=pe(function(n){return gs(ht(n,Ue))}),_k=pe(function(n){var t=In(n);return Ue(t)&&(t=r),gs(ht(n,Ue),oe(t,2))}),wk=pe(function(n){var t=In(n);return t=typeof t=="function"?t:r,gs(ht(n,Ue),r,t)}),Ak=pe(Ss);function Rk(n,t){return cu(n||[],t||[],Sr)}function Sk(n,t){return cu(n||[],t||[],Or)}var jk=pe(function(n){var t=n.length,s=t>1?n[t-1]:r;return s=typeof s=="function"?(n.pop(),s):r,zu(n,s)});function Xu(n){var t=m(n);return t.__chain__=!0,t}function Nk(n,t){return t(n),n}function Ka(n,t){return t(n)}var Ik=it(function(n){var t=n.length,s=t?n[0]:0,u=this.__wrapped__,f=function(h){return Ji(h,n)};return t>1||this.__actions__.length||!(u instanceof ye)||!st(s)?this.thru(f):(u=u.slice(s,+s+(t?1:0)),u.__actions__.push({func:Ka,args:[f],thisArg:r}),new Sn(u,this.__chain__).thru(function(h){return t&&!h.length&&h.push(r),h}))});function Ok(){return Xu(this)}function Pk(){return new Sn(this.value(),this.__chain__)}function Bk(){this.__values__===r&&(this.__values__=dd(this.value()));var n=this.__index__>=this.__values__.length,t=n?r:this.__values__[this.__index__++];return{done:n,value:t}}function xk(){return this}function qk(n){for(var t,s=this;s instanceof Aa;){var u=Hu(s);u.__index__=0,u.__values__=r,t?f.__wrapped__=u:t=u;var f=u;s=s.__wrapped__}return f.__wrapped__=n,t}function Dk(){var n=this.__wrapped__;if(n instanceof ye){var t=n;return this.__actions__.length&&(t=new ye(this)),t=t.reverse(),t.__actions__.push({func:Ka,args:[Rs],thisArg:r}),new Sn(t,this.__chain__)}return this.thru(Rs)}function Mk(){return fu(this.__wrapped__,this.__actions__)}var Lk=Pa(function(n,t,s){Se.call(n,s)?++n[s]:rt(n,s,1)});function Fk(n,t,s){var u=fe(n)?Ao:Np;return s&&sn(n,t,s)&&(t=r),u(n,oe(t,3))}function Kk(n,t){var s=fe(n)?ht:zo;return s(n,oe(t,3))}var Ck=_u(Gu),Vk=_u(Uu);function Hk(n,t){return nn(Ca(n,t),1)}function Gk(n,t){return nn(Ca(n,t),W)}function Uk(n,t,s){return s=s===r?1:ce(s),nn(Ca(n,t),s)}function Zu(n,t){var s=fe(n)?An:bt;return s(n,oe(t,3))}function Ju(n,t){var s=fe(n)?dm:Wo;return s(n,oe(t,3))}var $k=Pa(function(n,t,s){Se.call(n,s)?n[s].push(t):rt(n,s,[t])});function Yk(n,t,s,u){n=dn(n)?n:rr(n),s=s&&!u?ce(s):0;var f=n.length;return s<0&&(s=We(f+s,0)),$a(n)?s<=f&&n.indexOf(t,s)>-1:!!f&&Ut(n,t,s)>-1}var Wk=pe(function(n,t,s){var u=-1,f=typeof t=="function",h=dn(n)?B(n.length):[];return bt(n,function(v){h[++u]=f?pn(t,v,s):Nr(v,t,s)}),h}),zk=Pa(function(n,t,s){rt(n,s,t)});function Ca(n,t){var s=fe(n)?De:nu;return s(n,oe(t,3))}function Xk(n,t,s,u){return n==null?[]:(fe(t)||(t=t==null?[]:[t]),s=u?r:s,fe(s)||(s=s==null?[]:[s]),iu(n,t,s))}var Zk=Pa(function(n,t,s){n[s?0:1].push(t)},function(){return[[],[]]});function Jk(n,t,s){var u=fe(n)?Fi:No,f=arguments.length<3;return u(n,oe(t,4),s,f,bt)}function Qk(n,t,s){var u=fe(n)?gm:No,f=arguments.length<3;return u(n,oe(t,4),s,f,Wo)}function ev(n,t){var s=fe(n)?ht:zo;return s(n,Ga(oe(t,3)))}function nv(n){var t=fe(n)?Go:Yp;return t(n)}function tv(n,t,s){(s?sn(n,t,s):t===r)?t=1:t=ce(t);var u=fe(n)?wp:Wp;return u(n,t)}function rv(n){var t=fe(n)?Ap:Xp;return t(n)}function av(n){if(n==null)return 0;if(dn(n))return $a(n)?Yt(n):n.length;var t=rn(n);return t==Me||t==qn?n.size:as(n).length}function iv(n,t,s){var u=fe(n)?Ki:Zp;return s&&sn(n,t,s)&&(t=r),u(n,oe(t,3))}var sv=pe(function(n,t){if(n==null)return[];var s=t.length;return s>1&&sn(n,t[0],t[1])?t=[]:s>2&&sn(t[0],t[1],t[2])&&(t=[t[0]]),iu(n,nn(t,1),[])}),Va=Km||function(){return en.Date.now()};function lv(n,t){if(typeof t!="function")throw new Rn(d);return n=ce(n),function(){if(--n<1)return t.apply(this,arguments)}}function Qu(n,t,s){return t=s?r:t,t=n&&t==null?n.length:t,at(n,x,r,r,r,r,t)}function ed(n,t){var s;if(typeof t!="function")throw new Rn(d);return n=ce(n),function(){return--n>0&&(s=t.apply(this,arguments)),n<=1&&(t=r),s}}var js=pe(function(n,t,s){var u=b;if(s.length){var f=vt(s,nr(js));u|=I}return at(n,u,t,s,f)}),nd=pe(function(n,t,s){var u=b|R;if(s.length){var f=vt(s,nr(nd));u|=I}return at(t,u,n,s,f)});function td(n,t,s){t=s?r:t;var u=at(n,j,r,r,r,r,r,t);return u.placeholder=td.placeholder,u}function rd(n,t,s){t=s?r:t;var u=at(n,H,r,r,r,r,r,t);return u.placeholder=rd.placeholder,u}function ad(n,t,s){var u,f,h,v,w,N,K=0,C=!1,U=!1,ee=!0;if(typeof n!="function")throw new Rn(d);t=On(t)||0,Le(s)&&(C=!!s.leading,U="maxWait"in s,h=U?We(On(s.maxWait)||0,t):h,ee="trailing"in s?!!s.trailing:ee);function se($e){var Fn=u,ut=f;return u=f=r,K=$e,v=n.apply(ut,Fn),v}function ue($e){return K=$e,w=xr(ke,t),C?se($e):v}function me($e){var Fn=$e-N,ut=$e-K,_d=t-Fn;return U?tn(_d,h-ut):_d}function de($e){var Fn=$e-N,ut=$e-K;return N===r||Fn>=t||Fn<0||U&&ut>=h}function ke(){var $e=Va();if(de($e))return be($e);w=xr(ke,me($e))}function be($e){return w=r,ee&&u?se($e):(u=f=r,v)}function yn(){w!==r&&mu(w),K=0,u=N=f=w=r}function ln(){return w===r?v:be(Va())}function bn(){var $e=Va(),Fn=de($e);if(u=arguments,f=this,N=$e,Fn){if(w===r)return ue(N);if(U)return mu(w),w=xr(ke,t),se(N)}return w===r&&(w=xr(ke,t)),v}return bn.cancel=yn,bn.flush=ln,bn}var ov=pe(function(n,t){return Yo(n,1,t)}),uv=pe(function(n,t,s){return Yo(n,On(t)||0,s)});function dv(n){return at(n,z)}function Ha(n,t){if(typeof n!="function"||t!=null&&typeof t!="function")throw new Rn(d);var s=function(){var u=arguments,f=t?t.apply(this,u):u[0],h=s.cache;if(h.has(f))return h.get(f);var v=n.apply(this,u);return s.cache=h.set(f,v)||h,v};return s.cache=new(Ha.Cache||tt),s}Ha.Cache=tt;function Ga(n){if(typeof n!="function")throw new Rn(d);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function gv(n){return ed(2,n)}var fv=Jp(function(n,t){t=t.length==1&&fe(t[0])?De(t[0],hn(oe())):De(nn(t,1),hn(oe()));var s=t.length;return pe(function(u){for(var f=-1,h=tn(u.length,s);++f<h;)u[f]=t[f].call(this,u[f]);return pn(n,this,u)})}),Ns=pe(function(n,t){var s=vt(t,nr(Ns));return at(n,I,r,t,s)}),id=pe(function(n,t){var s=vt(t,nr(id));return at(n,V,r,t,s)}),cv=it(function(n,t){return at(n,q,r,r,r,t)});function mv(n,t){if(typeof n!="function")throw new Rn(d);return t=t===r?t:ce(t),pe(n,t)}function pv(n,t){if(typeof n!="function")throw new Rn(d);return t=t==null?0:We(ce(t),0),pe(function(s){var u=s[t],f=_t(s,0,t);return u&&kt(f,u),pn(n,this,f)})}function hv(n,t,s){var u=!0,f=!0;if(typeof n!="function")throw new Rn(d);return Le(s)&&(u="leading"in s?!!s.leading:u,f="trailing"in s?!!s.trailing:f),ad(n,t,{leading:u,maxWait:t,trailing:f})}function kv(n){return Qu(n,1)}function vv(n,t){return Ns(cs(t),n)}function yv(){if(!arguments.length)return[];var n=arguments[0];return fe(n)?n:[n]}function bv(n){return jn(n,E)}function Ev(n,t){return t=typeof t=="function"?t:r,jn(n,E,t)}function Tv(n){return jn(n,y|E)}function _v(n,t){return t=typeof t=="function"?t:r,jn(n,y|E,t)}function wv(n,t){return t==null||$o(n,t,ze(t))}function Ln(n,t){return n===t||n!==n&&t!==t}var Av=Da(ns),Rv=Da(function(n,t){return n>=t}),Dt=Jo(function(){return arguments}())?Jo:function(n){return He(n)&&Se.call(n,"callee")&&!Lo.call(n,"callee")},fe=B.isArray,Sv=yo?hn(yo):qp;function dn(n){return n!=null&&Ua(n.length)&&!lt(n)}function Ue(n){return He(n)&&dn(n)}function jv(n){return n===!0||n===!1||He(n)&&an(n)==ve}var wt=Vm||Ks,Nv=bo?hn(bo):Dp;function Iv(n){return He(n)&&n.nodeType===1&&!qr(n)}function Ov(n){if(n==null)return!0;if(dn(n)&&(fe(n)||typeof n=="string"||typeof n.splice=="function"||wt(n)||tr(n)||Dt(n)))return!n.length;var t=rn(n);if(t==Me||t==qn)return!n.size;if(Br(n))return!as(n).length;for(var s in n)if(Se.call(n,s))return!1;return!0}function Pv(n,t){return Ir(n,t)}function Bv(n,t,s){s=typeof s=="function"?s:r;var u=s?s(n,t):r;return u===r?Ir(n,t,r,s):!!u}function Is(n){if(!He(n))return!1;var t=an(n);return t==Ve||t==Ze||typeof n.message=="string"&&typeof n.name=="string"&&!qr(n)}function xv(n){return typeof n=="number"&&Ko(n)}function lt(n){if(!Le(n))return!1;var t=an(n);return t==Ge||t==_n||t==Ce||t==et}function sd(n){return typeof n=="number"&&n==ce(n)}function Ua(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=G}function Le(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}function He(n){return n!=null&&typeof n=="object"}var ld=Eo?hn(Eo):Lp;function qv(n,t){return n===t||rs(n,t,bs(t))}function Dv(n,t,s){return s=typeof s=="function"?s:r,rs(n,t,bs(t),s)}function Mv(n){return od(n)&&n!=+n}function Lv(n){if(Eh(n))throw new ge(o);return Qo(n)}function Fv(n){return n===null}function Kv(n){return n==null}function od(n){return typeof n=="number"||He(n)&&an(n)==Je}function qr(n){if(!He(n)||an(n)!=Qe)return!1;var t=va(n);if(t===null)return!0;var s=Se.call(t,"constructor")&&t.constructor;return typeof s=="function"&&s instanceof s&&ma.call(s)==Dm}var Os=To?hn(To):Fp;function Cv(n){return sd(n)&&n>=-G&&n<=G}var ud=_o?hn(_o):Kp;function $a(n){return typeof n=="string"||!fe(n)&&He(n)&&an(n)==vr}function vn(n){return typeof n=="symbol"||He(n)&&an(n)==ia}var tr=wo?hn(wo):Cp;function Vv(n){return n===r}function Hv(n){return He(n)&&rn(n)==yr}function Gv(n){return He(n)&&an(n)==sc}var Uv=Da(is),$v=Da(function(n,t){return n<=t});function dd(n){if(!n)return[];if(dn(n))return $a(n)?Dn(n):un(n);if(Tr&&n[Tr])return wm(n[Tr]());var t=rn(n),s=t==Me?$i:t==qn?ga:rr;return s(n)}function ot(n){if(!n)return n===0?n:0;if(n=On(n),n===W||n===-W){var t=n<0?-1:1;return t*$}return n===n?n:0}function ce(n){var t=ot(n),s=t%1;return t===t?s?t-s:t:0}function gd(n){return n?Pt(ce(n),0,ne):0}function On(n){if(typeof n=="number")return n;if(vn(n))return ae;if(Le(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=Le(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=Io(n);var s=Sc.test(n);return s||Nc.test(n)?lm(n.slice(2),s?2:8):Rc.test(n)?ae:+n}function fd(n){return Gn(n,gn(n))}function Yv(n){return n?Pt(ce(n),-G,G):n===0?n:0}function Ae(n){return n==null?"":kn(n)}var Wv=Qt(function(n,t){if(Br(t)||dn(t)){Gn(t,ze(t),n);return}for(var s in t)Se.call(t,s)&&Sr(n,s,t[s])}),cd=Qt(function(n,t){Gn(t,gn(t),n)}),Ya=Qt(function(n,t,s,u){Gn(t,gn(t),n,u)}),zv=Qt(function(n,t,s,u){Gn(t,ze(t),n,u)}),Xv=it(Ji);function Zv(n,t){var s=Jt(n);return t==null?s:Uo(s,t)}var Jv=pe(function(n,t){n=Ne(n);var s=-1,u=t.length,f=u>2?t[2]:r;for(f&&sn(t[0],t[1],f)&&(u=1);++s<u;)for(var h=t[s],v=gn(h),w=-1,N=v.length;++w<N;){var K=v[w],C=n[K];(C===r||Ln(C,zt[K])&&!Se.call(n,K))&&(n[K]=h[K])}return n}),Qv=pe(function(n){return n.push(r,Iu),pn(md,r,n)});function ey(n,t){return Ro(n,oe(t,3),Hn)}function ny(n,t){return Ro(n,oe(t,3),es)}function ty(n,t){return n==null?n:Qi(n,oe(t,3),gn)}function ry(n,t){return n==null?n:Xo(n,oe(t,3),gn)}function ay(n,t){return n&&Hn(n,oe(t,3))}function iy(n,t){return n&&es(n,oe(t,3))}function sy(n){return n==null?[]:ja(n,ze(n))}function ly(n){return n==null?[]:ja(n,gn(n))}function Ps(n,t,s){var u=n==null?r:Bt(n,t);return u===r?s:u}function oy(n,t){return n!=null&&Bu(n,t,Op)}function Bs(n,t){return n!=null&&Bu(n,t,Pp)}var uy=Au(function(n,t,s){t!=null&&typeof t.toString!="function"&&(t=pa.call(t)),n[t]=s},qs(fn)),dy=Au(function(n,t,s){t!=null&&typeof t.toString!="function"&&(t=pa.call(t)),Se.call(n,t)?n[t].push(s):n[t]=[s]},oe),gy=pe(Nr);function ze(n){return dn(n)?Ho(n):as(n)}function gn(n){return dn(n)?Ho(n,!0):Vp(n)}function fy(n,t){var s={};return t=oe(t,3),Hn(n,function(u,f,h){rt(s,t(u,f,h),u)}),s}function cy(n,t){var s={};return t=oe(t,3),Hn(n,function(u,f,h){rt(s,f,t(u,f,h))}),s}var my=Qt(function(n,t,s){Na(n,t,s)}),md=Qt(function(n,t,s,u){Na(n,t,s,u)}),py=it(function(n,t){var s={};if(n==null)return s;var u=!1;t=De(t,function(h){return h=Tt(h,n),u||(u=h.length>1),h}),Gn(n,vs(n),s),u&&(s=jn(s,y|_|E,uh));for(var f=t.length;f--;)ds(s,t[f]);return s});function hy(n,t){return pd(n,Ga(oe(t)))}var ky=it(function(n,t){return n==null?{}:Gp(n,t)});function pd(n,t){if(n==null)return{};var s=De(vs(n),function(u){return[u]});return t=oe(t),su(n,s,function(u,f){return t(u,f[0])})}function vy(n,t,s){t=Tt(t,n);var u=-1,f=t.length;for(f||(f=1,n=r);++u<f;){var h=n==null?r:n[Un(t[u])];h===r&&(u=f,h=s),n=lt(h)?h.call(n):h}return n}function yy(n,t,s){return n==null?n:Or(n,t,s)}function by(n,t,s,u){return u=typeof u=="function"?u:r,n==null?n:Or(n,t,s,u)}var hd=ju(ze),kd=ju(gn);function Ey(n,t,s){var u=fe(n),f=u||wt(n)||tr(n);if(t=oe(t,4),s==null){var h=n&&n.constructor;f?s=u?new h:[]:Le(n)?s=lt(h)?Jt(va(n)):{}:s={}}return(f?An:Hn)(n,function(v,w,N){return t(s,v,w,N)}),s}function Ty(n,t){return n==null?!0:ds(n,t)}function _y(n,t,s){return n==null?n:gu(n,t,cs(s))}function wy(n,t,s,u){return u=typeof u=="function"?u:r,n==null?n:gu(n,t,cs(s),u)}function rr(n){return n==null?[]:Ui(n,ze(n))}function Ay(n){return n==null?[]:Ui(n,gn(n))}function Ry(n,t,s){return s===r&&(s=t,t=r),s!==r&&(s=On(s),s=s===s?s:0),t!==r&&(t=On(t),t=t===t?t:0),Pt(On(n),t,s)}function Sy(n,t,s){return t=ot(t),s===r?(s=t,t=0):s=ot(s),n=On(n),Bp(n,t,s)}function jy(n,t,s){if(s&&typeof s!="boolean"&&sn(n,t,s)&&(t=s=r),s===r&&(typeof t=="boolean"?(s=t,t=r):typeof n=="boolean"&&(s=n,n=r)),n===r&&t===r?(n=0,t=1):(n=ot(n),t===r?(t=n,n=0):t=ot(t)),n>t){var u=n;n=t,t=u}if(s||n%1||t%1){var f=Co();return tn(n+f*(t-n+sm("1e-"+((f+"").length-1))),t)}return ls(n,t)}var Ny=er(function(n,t,s){return t=t.toLowerCase(),n+(s?vd(t):t)});function vd(n){return xs(Ae(n).toLowerCase())}function yd(n){return n=Ae(n),n&&n.replace(Oc,ym).replace(Xc,"")}function Iy(n,t,s){n=Ae(n),t=kn(t);var u=n.length;s=s===r?u:Pt(ce(s),0,u);var f=s;return s-=t.length,s>=0&&n.slice(s,f)==t}function Oy(n){return n=Ae(n),n&&gc.test(n)?n.replace(zl,bm):n}function Py(n){return n=Ae(n),n&&kc.test(n)?n.replace(Ni,"\\$&"):n}var By=er(function(n,t,s){return n+(s?"-":"")+t.toLowerCase()}),xy=er(function(n,t,s){return n+(s?" ":"")+t.toLowerCase()}),qy=Tu("toLowerCase");function Dy(n,t,s){n=Ae(n),t=ce(t);var u=t?Yt(n):0;if(!t||u>=t)return n;var f=(t-u)/2;return qa(Ta(f),s)+n+qa(Ea(f),s)}function My(n,t,s){n=Ae(n),t=ce(t);var u=t?Yt(n):0;return t&&u<t?n+qa(t-u,s):n}function Ly(n,t,s){n=Ae(n),t=ce(t);var u=t?Yt(n):0;return t&&u<t?qa(t-u,s)+n:n}function Fy(n,t,s){return s||t==null?t=0:t&&(t=+t),$m(Ae(n).replace(Ii,""),t||0)}function Ky(n,t,s){return(s?sn(n,t,s):t===r)?t=1:t=ce(t),os(Ae(n),t)}function Cy(){var n=arguments,t=Ae(n[0]);return n.length<3?t:t.replace(n[1],n[2])}var Vy=er(function(n,t,s){return n+(s?"_":"")+t.toLowerCase()});function Hy(n,t,s){return s&&typeof s!="number"&&sn(n,t,s)&&(t=s=r),s=s===r?ne:s>>>0,s?(n=Ae(n),n&&(typeof t=="string"||t!=null&&!Os(t))&&(t=kn(t),!t&&$t(n))?_t(Dn(n),0,s):n.split(t,s)):[]}var Gy=er(function(n,t,s){return n+(s?" ":"")+xs(t)});function Uy(n,t,s){return n=Ae(n),s=s==null?0:Pt(ce(s),0,n.length),t=kn(t),n.slice(s,s+t.length)==t}function $y(n,t,s){var u=m.templateSettings;s&&sn(n,t,s)&&(t=r),n=Ae(n),t=Ya({},t,u,Nu);var f=Ya({},t.imports,u.imports,Nu),h=ze(f),v=Ui(f,h),w,N,K=0,C=t.interpolate||sa,U="__p += '",ee=Yi((t.escape||sa).source+"|"+C.source+"|"+(C===Xl?Ac:sa).source+"|"+(t.evaluate||sa).source+"|$","g"),se="//# sourceURL="+(Se.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++nm+"]")+`
`;n.replace(ee,function(de,ke,be,yn,ln,bn){return be||(be=yn),U+=n.slice(K,bn).replace(Pc,Em),ke&&(w=!0,U+=`' +
__e(`+ke+`) +
'`),ln&&(N=!0,U+=`';
`+ln+`;
__p += '`),be&&(U+=`' +
((__t = (`+be+`)) == null ? '' : __t) +
'`),K=bn+de.length,de}),U+=`';
`;var ue=Se.call(t,"variable")&&t.variable;if(!ue)U=`with (obj) {
`+U+`
}
`;else if(_c.test(ue))throw new ge(g);U=(N?U.replace(lc,""):U).replace(oc,"$1").replace(uc,"$1;"),U="function("+(ue||"obj")+`) {
`+(ue?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(w?", __e = _.escape":"")+(N?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+U+`return __p
}`;var me=Ed(function(){return _e(h,se+"return "+U).apply(r,v)});if(me.source=U,Is(me))throw me;return me}function Yy(n){return Ae(n).toLowerCase()}function Wy(n){return Ae(n).toUpperCase()}function zy(n,t,s){if(n=Ae(n),n&&(s||t===r))return Io(n);if(!n||!(t=kn(t)))return n;var u=Dn(n),f=Dn(t),h=Oo(u,f),v=Po(u,f)+1;return _t(u,h,v).join("")}function Xy(n,t,s){if(n=Ae(n),n&&(s||t===r))return n.slice(0,xo(n)+1);if(!n||!(t=kn(t)))return n;var u=Dn(n),f=Po(u,Dn(t))+1;return _t(u,0,f).join("")}function Zy(n,t,s){if(n=Ae(n),n&&(s||t===r))return n.replace(Ii,"");if(!n||!(t=kn(t)))return n;var u=Dn(n),f=Oo(u,Dn(t));return _t(u,f).join("")}function Jy(n,t){var s=Q,u=Z;if(Le(t)){var f="separator"in t?t.separator:f;s="length"in t?ce(t.length):s,u="omission"in t?kn(t.omission):u}n=Ae(n);var h=n.length;if($t(n)){var v=Dn(n);h=v.length}if(s>=h)return n;var w=s-Yt(u);if(w<1)return u;var N=v?_t(v,0,w).join(""):n.slice(0,w);if(f===r)return N+u;if(v&&(w+=N.length-w),Os(f)){if(n.slice(w).search(f)){var K,C=N;for(f.global||(f=Yi(f.source,Ae(Zl.exec(f))+"g")),f.lastIndex=0;K=f.exec(C);)var U=K.index;N=N.slice(0,U===r?w:U)}}else if(n.indexOf(kn(f),w)!=w){var ee=N.lastIndexOf(f);ee>-1&&(N=N.slice(0,ee))}return N+u}function Qy(n){return n=Ae(n),n&&dc.test(n)?n.replace(Wl,jm):n}var eb=er(function(n,t,s){return n+(s?" ":"")+t.toUpperCase()}),xs=Tu("toUpperCase");function bd(n,t,s){return n=Ae(n),t=s?r:t,t===r?_m(n)?Om(n):mm(n):n.match(t)||[]}var Ed=pe(function(n,t){try{return pn(n,r,t)}catch(s){return Is(s)?s:new ge(s)}}),nb=it(function(n,t){return An(t,function(s){s=Un(s),rt(n,s,js(n[s],n))}),n});function tb(n){var t=n==null?0:n.length,s=oe();return n=t?De(n,function(u){if(typeof u[1]!="function")throw new Rn(d);return[s(u[0]),u[1]]}):[],pe(function(u){for(var f=-1;++f<t;){var h=n[f];if(pn(h[0],this,u))return pn(h[1],this,u)}})}function rb(n){return jp(jn(n,y))}function qs(n){return function(){return n}}function ab(n,t){return n==null||n!==n?t:n}var ib=wu(),sb=wu(!0);function fn(n){return n}function Ds(n){return eu(typeof n=="function"?n:jn(n,y))}function lb(n){return tu(jn(n,y))}function ob(n,t){return ru(n,jn(t,y))}var ub=pe(function(n,t){return function(s){return Nr(s,n,t)}}),db=pe(function(n,t){return function(s){return Nr(n,s,t)}});function Ms(n,t,s){var u=ze(t),f=ja(t,u);s==null&&!(Le(t)&&(f.length||!u.length))&&(s=t,t=n,n=this,f=ja(t,ze(t)));var h=!(Le(s)&&"chain"in s)||!!s.chain,v=lt(n);return An(f,function(w){var N=t[w];n[w]=N,v&&(n.prototype[w]=function(){var K=this.__chain__;if(h||K){var C=n(this.__wrapped__),U=C.__actions__=un(this.__actions__);return U.push({func:N,args:arguments,thisArg:n}),C.__chain__=K,C}return N.apply(n,kt([this.value()],arguments))})}),n}function gb(){return en._===this&&(en._=Mm),this}function Ls(){}function fb(n){return n=ce(n),pe(function(t){return au(t,n)})}var cb=ps(De),mb=ps(Ao),pb=ps(Ki);function Td(n){return Ts(n)?Ci(Un(n)):Up(n)}function hb(n){return function(t){return n==null?r:Bt(n,t)}}var kb=Ru(),vb=Ru(!0);function Fs(){return[]}function Ks(){return!1}function yb(){return{}}function bb(){return""}function Eb(){return!0}function Tb(n,t){if(n=ce(n),n<1||n>G)return[];var s=ne,u=tn(n,ne);t=oe(t),n-=ne;for(var f=Gi(u,t);++s<n;)t(s);return f}function _b(n){return fe(n)?De(n,Un):vn(n)?[n]:un(Vu(Ae(n)))}function wb(n){var t=++qm;return Ae(n)+t}var Ab=xa(function(n,t){return n+t},0),Rb=hs("ceil"),Sb=xa(function(n,t){return n/t},1),jb=hs("floor");function Nb(n){return n&&n.length?Sa(n,fn,ns):r}function Ib(n,t){return n&&n.length?Sa(n,oe(t,2),ns):r}function Ob(n){return jo(n,fn)}function Pb(n,t){return jo(n,oe(t,2))}function Bb(n){return n&&n.length?Sa(n,fn,is):r}function xb(n,t){return n&&n.length?Sa(n,oe(t,2),is):r}var qb=xa(function(n,t){return n*t},1),Db=hs("round"),Mb=xa(function(n,t){return n-t},0);function Lb(n){return n&&n.length?Hi(n,fn):0}function Fb(n,t){return n&&n.length?Hi(n,oe(t,2)):0}return m.after=lv,m.ary=Qu,m.assign=Wv,m.assignIn=cd,m.assignInWith=Ya,m.assignWith=zv,m.at=Xv,m.before=ed,m.bind=js,m.bindAll=nb,m.bindKey=nd,m.castArray=yv,m.chain=Xu,m.chunk=jh,m.compact=Nh,m.concat=Ih,m.cond=tb,m.conforms=rb,m.constant=qs,m.countBy=Lk,m.create=Zv,m.curry=td,m.curryRight=rd,m.debounce=ad,m.defaults=Jv,m.defaultsDeep=Qv,m.defer=ov,m.delay=uv,m.difference=Oh,m.differenceBy=Ph,m.differenceWith=Bh,m.drop=xh,m.dropRight=qh,m.dropRightWhile=Dh,m.dropWhile=Mh,m.fill=Lh,m.filter=Kk,m.flatMap=Hk,m.flatMapDeep=Gk,m.flatMapDepth=Uk,m.flatten=$u,m.flattenDeep=Fh,m.flattenDepth=Kh,m.flip=dv,m.flow=ib,m.flowRight=sb,m.fromPairs=Ch,m.functions=sy,m.functionsIn=ly,m.groupBy=$k,m.initial=Hh,m.intersection=Gh,m.intersectionBy=Uh,m.intersectionWith=$h,m.invert=uy,m.invertBy=dy,m.invokeMap=Wk,m.iteratee=Ds,m.keyBy=zk,m.keys=ze,m.keysIn=gn,m.map=Ca,m.mapKeys=fy,m.mapValues=cy,m.matches=lb,m.matchesProperty=ob,m.memoize=Ha,m.merge=my,m.mergeWith=md,m.method=ub,m.methodOf=db,m.mixin=Ms,m.negate=Ga,m.nthArg=fb,m.omit=py,m.omitBy=hy,m.once=gv,m.orderBy=Xk,m.over=cb,m.overArgs=fv,m.overEvery=mb,m.overSome=pb,m.partial=Ns,m.partialRight=id,m.partition=Zk,m.pick=ky,m.pickBy=pd,m.property=Td,m.propertyOf=hb,m.pull=Xh,m.pullAll=Wu,m.pullAllBy=Zh,m.pullAllWith=Jh,m.pullAt=Qh,m.range=kb,m.rangeRight=vb,m.rearg=cv,m.reject=ev,m.remove=ek,m.rest=mv,m.reverse=Rs,m.sampleSize=tv,m.set=yy,m.setWith=by,m.shuffle=rv,m.slice=nk,m.sortBy=sv,m.sortedUniq=ok,m.sortedUniqBy=uk,m.split=Hy,m.spread=pv,m.tail=dk,m.take=gk,m.takeRight=fk,m.takeRightWhile=ck,m.takeWhile=mk,m.tap=Nk,m.throttle=hv,m.thru=Ka,m.toArray=dd,m.toPairs=hd,m.toPairsIn=kd,m.toPath=_b,m.toPlainObject=fd,m.transform=Ey,m.unary=kv,m.union=pk,m.unionBy=hk,m.unionWith=kk,m.uniq=vk,m.uniqBy=yk,m.uniqWith=bk,m.unset=Ty,m.unzip=Ss,m.unzipWith=zu,m.update=_y,m.updateWith=wy,m.values=rr,m.valuesIn=Ay,m.without=Ek,m.words=bd,m.wrap=vv,m.xor=Tk,m.xorBy=_k,m.xorWith=wk,m.zip=Ak,m.zipObject=Rk,m.zipObjectDeep=Sk,m.zipWith=jk,m.entries=hd,m.entriesIn=kd,m.extend=cd,m.extendWith=Ya,Ms(m,m),m.add=Ab,m.attempt=Ed,m.camelCase=Ny,m.capitalize=vd,m.ceil=Rb,m.clamp=Ry,m.clone=bv,m.cloneDeep=Tv,m.cloneDeepWith=_v,m.cloneWith=Ev,m.conformsTo=wv,m.deburr=yd,m.defaultTo=ab,m.divide=Sb,m.endsWith=Iy,m.eq=Ln,m.escape=Oy,m.escapeRegExp=Py,m.every=Fk,m.find=Ck,m.findIndex=Gu,m.findKey=ey,m.findLast=Vk,m.findLastIndex=Uu,m.findLastKey=ny,m.floor=jb,m.forEach=Zu,m.forEachRight=Ju,m.forIn=ty,m.forInRight=ry,m.forOwn=ay,m.forOwnRight=iy,m.get=Ps,m.gt=Av,m.gte=Rv,m.has=oy,m.hasIn=Bs,m.head=Yu,m.identity=fn,m.includes=Yk,m.indexOf=Vh,m.inRange=Sy,m.invoke=gy,m.isArguments=Dt,m.isArray=fe,m.isArrayBuffer=Sv,m.isArrayLike=dn,m.isArrayLikeObject=Ue,m.isBoolean=jv,m.isBuffer=wt,m.isDate=Nv,m.isElement=Iv,m.isEmpty=Ov,m.isEqual=Pv,m.isEqualWith=Bv,m.isError=Is,m.isFinite=xv,m.isFunction=lt,m.isInteger=sd,m.isLength=Ua,m.isMap=ld,m.isMatch=qv,m.isMatchWith=Dv,m.isNaN=Mv,m.isNative=Lv,m.isNil=Kv,m.isNull=Fv,m.isNumber=od,m.isObject=Le,m.isObjectLike=He,m.isPlainObject=qr,m.isRegExp=Os,m.isSafeInteger=Cv,m.isSet=ud,m.isString=$a,m.isSymbol=vn,m.isTypedArray=tr,m.isUndefined=Vv,m.isWeakMap=Hv,m.isWeakSet=Gv,m.join=Yh,m.kebabCase=By,m.last=In,m.lastIndexOf=Wh,m.lowerCase=xy,m.lowerFirst=qy,m.lt=Uv,m.lte=$v,m.max=Nb,m.maxBy=Ib,m.mean=Ob,m.meanBy=Pb,m.min=Bb,m.minBy=xb,m.stubArray=Fs,m.stubFalse=Ks,m.stubObject=yb,m.stubString=bb,m.stubTrue=Eb,m.multiply=qb,m.nth=zh,m.noConflict=gb,m.noop=Ls,m.now=Va,m.pad=Dy,m.padEnd=My,m.padStart=Ly,m.parseInt=Fy,m.random=jy,m.reduce=Jk,m.reduceRight=Qk,m.repeat=Ky,m.replace=Cy,m.result=vy,m.round=Db,m.runInContext=S,m.sample=nv,m.size=av,m.snakeCase=Vy,m.some=iv,m.sortedIndex=tk,m.sortedIndexBy=rk,m.sortedIndexOf=ak,m.sortedLastIndex=ik,m.sortedLastIndexBy=sk,m.sortedLastIndexOf=lk,m.startCase=Gy,m.startsWith=Uy,m.subtract=Mb,m.sum=Lb,m.sumBy=Fb,m.template=$y,m.times=Tb,m.toFinite=ot,m.toInteger=ce,m.toLength=gd,m.toLower=Yy,m.toNumber=On,m.toSafeInteger=Yv,m.toString=Ae,m.toUpper=Wy,m.trim=zy,m.trimEnd=Xy,m.trimStart=Zy,m.truncate=Jy,m.unescape=Qy,m.uniqueId=wb,m.upperCase=eb,m.upperFirst=xs,m.each=Zu,m.eachRight=Ju,m.first=Yu,Ms(m,function(){var n={};return Hn(m,function(t,s){Se.call(m.prototype,s)||(n[s]=t)}),n}(),{chain:!1}),m.VERSION=a,An(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){m[n].placeholder=m}),An(["drop","take"],function(n,t){ye.prototype[n]=function(s){s=s===r?1:We(ce(s),0);var u=this.__filtered__&&!t?new ye(this):this.clone();return u.__filtered__?u.__takeCount__=tn(s,u.__takeCount__):u.__views__.push({size:tn(s,ne),type:n+(u.__dir__<0?"Right":"")}),u},ye.prototype[n+"Right"]=function(s){return this.reverse()[n](s).reverse()}}),An(["filter","map","takeWhile"],function(n,t){var s=t+1,u=s==D||s==te;ye.prototype[n]=function(f){var h=this.clone();return h.__iteratees__.push({iteratee:oe(f,3),type:s}),h.__filtered__=h.__filtered__||u,h}}),An(["head","last"],function(n,t){var s="take"+(t?"Right":"");ye.prototype[n]=function(){return this[s](1).value()[0]}}),An(["initial","tail"],function(n,t){var s="drop"+(t?"":"Right");ye.prototype[n]=function(){return this.__filtered__?new ye(this):this[s](1)}}),ye.prototype.compact=function(){return this.filter(fn)},ye.prototype.find=function(n){return this.filter(n).head()},ye.prototype.findLast=function(n){return this.reverse().find(n)},ye.prototype.invokeMap=pe(function(n,t){return typeof n=="function"?new ye(this):this.map(function(s){return Nr(s,n,t)})}),ye.prototype.reject=function(n){return this.filter(Ga(oe(n)))},ye.prototype.slice=function(n,t){n=ce(n);var s=this;return s.__filtered__&&(n>0||t<0)?new ye(s):(n<0?s=s.takeRight(-n):n&&(s=s.drop(n)),t!==r&&(t=ce(t),s=t<0?s.dropRight(-t):s.take(t-n)),s)},ye.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},ye.prototype.toArray=function(){return this.take(ne)},Hn(ye.prototype,function(n,t){var s=/^(?:filter|find|map|reject)|While$/.test(t),u=/^(?:head|last)$/.test(t),f=m[u?"take"+(t=="last"?"Right":""):t],h=u||/^find/.test(t);f&&(m.prototype[t]=function(){var v=this.__wrapped__,w=u?[1]:arguments,N=v instanceof ye,K=w[0],C=N||fe(v),U=function(ke){var be=f.apply(m,kt([ke],w));return u&&ee?be[0]:be};C&&s&&typeof K=="function"&&K.length!=1&&(N=C=!1);var ee=this.__chain__,se=!!this.__actions__.length,ue=h&&!ee,me=N&&!se;if(!h&&C){v=me?v:new ye(this);var de=n.apply(v,w);return de.__actions__.push({func:Ka,args:[U],thisArg:r}),new Sn(de,ee)}return ue&&me?n.apply(this,w):(de=this.thru(U),ue?u?de.value()[0]:de.value():de)})}),An(["pop","push","shift","sort","splice","unshift"],function(n){var t=fa[n],s=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",u=/^(?:pop|shift)$/.test(n);m.prototype[n]=function(){var f=arguments;if(u&&!this.__chain__){var h=this.value();return t.apply(fe(h)?h:[],f)}return this[s](function(v){return t.apply(fe(v)?v:[],f)})}}),Hn(ye.prototype,function(n,t){var s=m[t];if(s){var u=s.name+"";Se.call(Zt,u)||(Zt[u]=[]),Zt[u].push({name:t,func:s})}}),Zt[Ba(r,R).name]=[{name:"wrapper",func:r}],ye.prototype.clone=Qm,ye.prototype.reverse=ep,ye.prototype.value=np,m.prototype.at=Ik,m.prototype.chain=Ok,m.prototype.commit=Pk,m.prototype.next=Bk,m.prototype.plant=qk,m.prototype.reverse=Dk,m.prototype.toJSON=m.prototype.valueOf=m.prototype.value=Mk,m.prototype.first=m.prototype.head,Tr&&(m.prototype[Tr]=xk),m},Wt=Pm();jt?((jt.exports=Wt)._=Wt,Di._=Wt):en._=Wt}).call(VT)}(Hr,Hr.exports)),Hr.exports}HT();Kn(na);const Rf=A.forwardRef((e,i)=>L.jsx(sr,{gap:"space-8",style:{display:"flex"},...e,ref:i}));Rf.displayName="FaktaGruppe";Rf.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var Qs={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var dg;function GT(){return dg||(dg=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(o=l(o,a.call(this,g)))}return o}function a(o){if(typeof o=="string"||typeof o=="number")return this&&this[o]||o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(this,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var g in o)i.call(o,g)&&o[g]&&(d=l(d,this&&this[g]||g));return d}function l(o,d){return d?o?o+" "+d:o+d:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Qs)),Qs.exports}var UT=GT();const $T=Cg(UT),YT="_boks_nm7fe_1",WT="_harBorderLeft_nm7fe_8",zT="_harBorderTop_nm7fe_12",XT={boks:YT,harBorderLeft:WT,harBorderTop:zT};$T.bind(XT);var el={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var gg;function ZT(){return gg||(gg=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(o=l(o,a(g)))}return o}function a(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var g in o)i.call(o,g)&&o[g]&&(d=l(d,g));return d}function l(o,d){return d?o?o+" "+d:o+d:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(el)),el.exports}ZT();function JT(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fg={exports:{}},Kr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function QT(){if(cg)return Kr;cg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,l,o){var d=null;if(o!==void 0&&(d=""+o),l.key!==void 0&&(d=""+l.key),"key"in l){o={};for(var g in l)g!=="key"&&(o[g]=l[g])}else o=l;return l=o.ref,{$$typeof:e,type:a,key:d,ref:l!==void 0?l:null,props:o}}return Kr.Fragment=i,Kr.jsx=r,Kr.jsxs=r,Kr}var mg;function e_(){return mg||(mg=1,fg.exports=QT()),fg.exports}var gt=e_();const n_="_autocompleteSuggestion__substring_1p6na_1",t_="_autocompleteSuggestion__inner_1p6na_4",Cr={autocompleteSuggestion__substring:n_,autocompleteSuggestion__inner:t_,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_1p6na_12"};class r_ extends Y.Component{constructor(i){super(i),this.state={value:i.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:i}=this.props,{value:r}=this.state;i(r)}onMouseMove(){const{setSuggestionIndex:i,index:r}=this.props;i(r)}render(){const{match:i,active:r,avoidBlur:a,id:l}=this.props,{value:o}=this.state.value,d=o.toLowerCase().startsWith(i.toLowerCase());return gt.jsx("li",{id:l,role:"option","aria-selected":r,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:a,onMouseDown:a,onKeyDown:a,className:"autocompleteSuggestion typo-normal",children:d?gt.jsxs("span",{className:`${Cr.autocompleteSuggestion__inner} ${r?Cr["autocompleteSuggestion--active"]:""}`,children:[o.substring(0,i.length),gt.jsx("span",{className:Cr.autocompleteSuggestion__substring,children:o.substring(i.length)})]}):gt.jsx("span",{className:`${Cr.autocompleteSuggestion__inner} ${r?Cr["autocompleteSuggestion--active"]:""}`,children:o})})}}const a_="_autocomplete_r2r4x_1",i_="_autocomplete__suggestions_r2r4x_27",nl={autocomplete:a_,autocomplete__suggestions:i_,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_r2r4x_31"};class kA extends Y.Component{input;inputRef;constructor(i){super(i),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=r=>{this.input=r},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null}))}onChange(i){const{onChange:r}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),r(i)}onSearchButtonClick(i){const{onSearchButtonClick:r}=this.props;i.preventDefault(),r&&r()}onKeyDown(i){const{shouldShowSuggestions:r}=this.state;let{activeSuggestionIndex:a}=this.state;const{suggestions:l}=this.props,o=a>-1;switch(this.setState({setAriaActiveDescendant:i.keyCode===38||i.keyCode===40}),i.keyCode){case 9:o&&r&&this.setValue(l[a]);break;case 13:o&&r?(i.preventDefault(),this.setValue(l[a])):r&&l.length===1?this.setValue(l[0]):this.setState({shouldShowSuggestions:!1});break;case 27:r&&l.length>0&&(i.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:r&&(i.preventDefault(),a=a-1===-2?-1:a-1,this.setState({activeSuggestionIndex:a}));break;case 40:r&&(i.preventDefault(),a=a+1===l.length?l.length-1:a+1,this.setState({activeSuggestionIndex:a}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const i=setTimeout(()=>{const{shouldBlur:a}=this.state;a&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:i});const{onBlur:r}=this.props;r&&r()}setSuggestionIndex(i){this.setState({activeSuggestionIndex:i}),this.clearBlurDelay()}setValue(i){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:r}=this.props;r(i)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:i,id:r,ariaLabel:a,placeholder:l,value:o,name:d,shouldFocusOnMount:g,isLoading:c}=this.props,{activeSuggestionIndex:p,setAriaActiveDescendant:k,hasFocus:y,shouldShowSuggestions:_}=this.state,E=y&&_&&i.length>0,O=k&&p>-1?`${r}-item-${p}`:void 0;return gt.jsxs("div",{className:`${nl.autocomplete} autocomplete`,"aria-expanded":E,"aria-owns":`${r}-suggestions`,"aria-haspopup":"listbox",children:[gt.jsx(pl,{variant:"primary",id:r,name:d,"aria-label":a,"aria-autocomplete":"list","aria-controls":`${r}-suggestions`,"aria-activedescendant":O,placeholder:l,value:o,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:T=>{this.inputRef=T},className:"typo-normal",autoFocus:g,label:a,hideLabel:!0,children:gt.jsx(pl.Button,{loading:c,onClick:this.onSearchButtonClick})}),gt.jsx("ul",{id:`${r}-suggestions`,role:"listbox",className:E?nl.autocomplete__suggestions:nl["autocomplete__suggestions--hidden"],children:E&&i.map((T,b)=>gt.jsx(r_,{id:`${r}-item-${b}`,index:b,value:T,match:o,active:b===p,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},T.key))})]})}}var kl=function(e,i){return kl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(r[l]=a[l])},kl(e,i)};function Cn(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");kl(e,i);function r(){this.constructor=e}e.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}var ie=function(){return ie=Object.assign||function(e){for(var i,r=1,a=arguments.length;r<a;r++){i=arguments[r];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},ie.apply(this,arguments)};function ki(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r}function Wn(e,i,r){if(arguments.length===2)for(var a=0,l=i.length,o;a<l;a++)(o||!(a in i))&&(o||(o=Array.prototype.slice.call(i,0,a)),o[a]=i[a]);return e.concat(o||Array.prototype.slice.call(i))}function $n(e,i){var r=i&&i.cache?i.cache:f_,a=i&&i.serializer?i.serializer:d_,l=i&&i.strategy?i.strategy:o_;return l(e,{cache:r,serializer:a})}function s_(e){return e==null||typeof e=="number"||typeof e=="boolean"}function l_(e,i,r,a){var l=s_(a)?a:r(a),o=i.get(l);return typeof o>"u"&&(o=e.call(this,a),i.set(l,o)),o}function Sf(e,i,r){var a=Array.prototype.slice.call(arguments,3),l=r(a),o=i.get(l);return typeof o>"u"&&(o=e.apply(this,a),i.set(l,o)),o}function jf(e,i,r,a,l){return r.bind(i,e,a,l)}function o_(e,i){var r=e.length===1?l_:Sf;return jf(e,this,r,i.cache.create(),i.serializer)}function u_(e,i){return jf(e,this,Sf,i.cache.create(),i.serializer)}var d_=function(){return JSON.stringify(arguments)},g_=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(i){return this.cache[i]},e.prototype.set=function(i,r){this.cache[i]=r},e}(),f_={create:function(){return new g_}},Yn={variadic:u_},Ee;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Ee||(Ee={}));var xe;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(xe||(xe={}));var gr;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(gr||(gr={}));function pg(e){return e.type===xe.literal}function c_(e){return e.type===xe.argument}function Nf(e){return e.type===xe.number}function If(e){return e.type===xe.date}function Of(e){return e.type===xe.time}function Pf(e){return e.type===xe.select}function Bf(e){return e.type===xe.plural}function m_(e){return e.type===xe.pound}function xf(e){return e.type===xe.tag}function qf(e){return!!(e&&typeof e=="object"&&e.type===gr.number)}function vl(e){return!!(e&&typeof e=="object"&&e.type===gr.dateTime)}var Df=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,p_=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function h_(e){var i={};return e.replace(p_,function(r){var a=r.length;switch(r[0]){case"G":i.era=a===4?"long":a===5?"narrow":"short";break;case"y":i.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=a===4?"long":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][a-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][a-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][a-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][a-1];break;case"s":i.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var k_=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function v_(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(k_).filter(function(_){return _.length>0}),r=[],a=0,l=i;a<l.length;a++){var o=l[a],d=o.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var g=d[0],c=d.slice(1),p=0,k=c;p<k.length;p++){var y=k[p];if(y.length===0)throw new Error("Invalid number skeleton")}r.push({stem:g,options:c})}return r}function y_(e){return e.replace(/^(.*?)-/,"")}var hg=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Mf=/^(@+)?(\+|#+)?[rs]?$/g,b_=/(\*)(0+)|(#+)(0+)|(0+)/g,Lf=/^(0+)$/;function kg(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(Mf,function(r,a,l){return typeof l!="string"?(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length):l==="+"?i.minimumSignificantDigits=a.length:a[0]==="#"?i.maximumSignificantDigits=a.length:(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length+(typeof l=="string"?l.length:0)),""}),i}function Ff(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function E_(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var r=e.slice(0,2);if(r==="+!"?(i.signDisplay="always",e=e.slice(2)):r==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!Lf.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function vg(e){var i={},r=Ff(e);return r||i}function T_(e){for(var i={},r=0,a=e;r<a.length;r++){var l=a[r];switch(l.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=l.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=y_(l.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=ie(ie(ie({},i),{notation:"scientific"}),l.options.reduce(function(c,p){return ie(ie({},c),vg(p))},{}));continue;case"engineering":i=ie(ie(ie({},i),{notation:"engineering"}),l.options.reduce(function(c,p){return ie(ie({},c),vg(p))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(l.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(l.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");l.options[0].replace(b_,function(c,p,k,y,_,E){if(p)i.minimumIntegerDigits=k.length;else{if(y&&_)throw new Error("We currently do not support maximum integer digits");if(E)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Lf.test(l.stem)){i.minimumIntegerDigits=l.stem.length;continue}if(hg.test(l.stem)){if(l.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");l.stem.replace(hg,function(c,p,k,y,_,E){return k==="*"?i.minimumFractionDigits=p.length:y&&y[0]==="#"?i.maximumFractionDigits=y.length:_&&E?(i.minimumFractionDigits=_.length,i.maximumFractionDigits=_.length+E.length):(i.minimumFractionDigits=p.length,i.maximumFractionDigits=p.length),""});var o=l.options[0];o==="w"?i=ie(ie({},i),{trailingZeroDisplay:"stripIfInteger"}):o&&(i=ie(ie({},i),kg(o)));continue}if(Mf.test(l.stem)){i=ie(ie({},i),kg(l.stem));continue}var d=Ff(l.stem);d&&(i=ie(ie({},i),d));var g=E_(l.stem);g&&(i=ie(ie({},i),g))}return i}var Za={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function __(e,i){for(var r="",a=0;a<e.length;a++){var l=e.charAt(a);if(l==="j"){for(var o=0;a+1<e.length&&e.charAt(a+1)===l;)o++,a++;var d=1+(o&1),g=o<2?1:3+(o>>1),c="a",p=w_(i);for((p=="H"||p=="k")&&(g=0);g-- >0;)r+=c;for(;d-- >0;)r=p+r}else l==="J"?r+="H":r+=l}return r}function w_(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,a;r!=="root"&&(a=e.maximize().region);var l=Za[a||""]||Za[r||""]||Za["".concat(r,"-001")]||Za["001"];return l[0]}var tl,A_=new RegExp("^".concat(Df.source,"*")),R_=new RegExp("".concat(Df.source,"*$"));function Te(e,i){return{start:e,end:i}}var S_=!!String.prototype.startsWith&&"_a".startsWith("a",1),j_=!!String.fromCodePoint,N_=!!Object.fromEntries,I_=!!String.prototype.codePointAt,O_=!!String.prototype.trimStart,P_=!!String.prototype.trimEnd,B_=!!Number.isSafeInteger,x_=B_?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},yl=!0;try{var q_=Cf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");yl=((tl=q_.exec("a"))===null||tl===void 0?void 0:tl[0])==="a"}catch{yl=!1}var yg=S_?function(e,i,r){return e.startsWith(i,r)}:function(e,i,r){return e.slice(r,r+i.length)===i},bl=j_?String.fromCodePoint:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var r="",a=e.length,l=0,o;a>l;){if(o=e[l++],o>1114111)throw RangeError(o+" is not a valid code point");r+=o<65536?String.fromCharCode(o):String.fromCharCode(((o-=65536)>>10)+55296,o%1024+56320)}return r},bg=N_?Object.fromEntries:function(e){for(var i={},r=0,a=e;r<a.length;r++){var l=a[r],o=l[0],d=l[1];i[o]=d}return i},Kf=I_?function(e,i){return e.codePointAt(i)}:function(e,i){var r=e.length;if(!(i<0||i>=r)){var a=e.charCodeAt(i),l;return a<55296||a>56319||i+1===r||(l=e.charCodeAt(i+1))<56320||l>57343?a:(a-55296<<10)+(l-56320)+65536}},D_=O_?function(e){return e.trimStart()}:function(e){return e.replace(A_,"")},M_=P_?function(e){return e.trimEnd()}:function(e){return e.replace(R_,"")};function Cf(e,i){return new RegExp(e,i)}var El;if(yl){var Eg=Cf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");El=function(e,i){var r;Eg.lastIndex=i;var a=Eg.exec(e);return(r=a[1])!==null&&r!==void 0?r:""}}else El=function(e,i){for(var r=[];;){var a=Kf(e,i);if(a===void 0||Vf(a)||C_(a))break;r.push(a),i+=a>=65536?2:1}return bl.apply(void 0,r)};var L_=function(){function e(i,r){r===void 0&&(r={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,r,a){for(var l=[];!this.isEOF();){var o=this.char();if(o===123){var d=this.parseArgument(i,a);if(d.err)return d;l.push(d.val)}else{if(o===125&&i>0)break;if(o===35&&(r==="plural"||r==="selectordinal")){var g=this.clonePosition();this.bump(),l.push({type:xe.pound,location:Te(g,this.clonePosition())})}else if(o===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(Ee.UNMATCHED_CLOSING_TAG,Te(this.clonePosition(),this.clonePosition()))}else if(o===60&&!this.ignoreTag&&Tl(this.peek()||0)){var d=this.parseTag(i,r);if(d.err)return d;l.push(d.val)}else{var d=this.parseLiteral(i,r);if(d.err)return d;l.push(d.val)}}}return{val:l,err:null}},e.prototype.parseTag=function(i,r){var a=this.clonePosition();this.bump();var l=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:xe.literal,value:"<".concat(l,"/>"),location:Te(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var o=this.parseMessage(i+1,r,!0);if(o.err)return o;var d=o.val,g=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Tl(this.char()))return this.error(Ee.INVALID_TAG,Te(g,this.clonePosition()));var c=this.clonePosition(),p=this.parseTagName();return l!==p?this.error(Ee.UNMATCHED_CLOSING_TAG,Te(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:xe.tag,value:l,children:d,location:Te(a,this.clonePosition())},err:null}:this.error(Ee.INVALID_TAG,Te(g,this.clonePosition())))}else return this.error(Ee.UNCLOSED_TAG,Te(a,this.clonePosition()))}else return this.error(Ee.INVALID_TAG,Te(a,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&K_(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,r){for(var a=this.clonePosition(),l="";;){var o=this.tryParseQuote(r);if(o){l+=o;continue}var d=this.tryParseUnquoted(i,r);if(d){l+=d;continue}var g=this.tryParseLeftAngleBracket();if(g){l+=g;continue}break}var c=Te(a,this.clonePosition());return{val:{type:xe.literal,value:l,location:c},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!F_(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(a);this.bump()}return bl.apply(void 0,r)},e.prototype.tryParseUnquoted=function(i,r){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(r==="plural"||r==="selectordinal")||a===125&&i>0?null:(this.bump(),bl(a))},e.prototype.parseArgument=function(i,r){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,Te(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Ee.EMPTY_ARGUMENT,Te(a,this.clonePosition()));var l=this.parseIdentifierIfPossible().value;if(!l)return this.error(Ee.MALFORMED_ARGUMENT,Te(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,Te(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:xe.argument,value:l,location:Te(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,Te(a,this.clonePosition())):this.parseArgumentOptions(i,r,l,a);default:return this.error(Ee.MALFORMED_ARGUMENT,Te(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),r=this.offset(),a=El(this.message,r),l=r+a.length;this.bumpTo(l);var o=this.clonePosition(),d=Te(i,o);return{value:a,location:d}},e.prototype.parseArgumentOptions=function(i,r,a,l){var o,d=this.clonePosition(),g=this.parseIdentifierIfPossible().value,c=this.clonePosition();switch(g){case"":return this.error(Ee.EXPECT_ARGUMENT_TYPE,Te(d,c));case"number":case"date":case"time":{this.bumpSpace();var p=null;if(this.bumpIf(",")){this.bumpSpace();var k=this.clonePosition(),y=this.parseSimpleArgStyleIfPossible();if(y.err)return y;var _=M_(y.val);if(_.length===0)return this.error(Ee.EXPECT_ARGUMENT_STYLE,Te(this.clonePosition(),this.clonePosition()));var E=Te(k,this.clonePosition());p={style:_,styleLocation:E}}var O=this.tryParseArgumentClose(l);if(O.err)return O;var T=Te(l,this.clonePosition());if(p&&yg(p?.style,"::",0)){var b=D_(p.style.slice(2));if(g==="number"){var y=this.parseNumberSkeletonFromString(b,p.styleLocation);return y.err?y:{val:{type:xe.number,value:a,location:T,style:y.val},err:null}}else{if(b.length===0)return this.error(Ee.EXPECT_DATE_TIME_SKELETON,T);var R=b;this.locale&&(R=__(b,this.locale));var _={type:gr.dateTime,pattern:R,location:p.styleLocation,parsedOptions:this.shouldParseSkeletons?h_(R):{}},P=g==="date"?xe.date:xe.time;return{val:{type:P,value:a,location:T,style:_},err:null}}}return{val:{type:g==="number"?xe.number:g==="date"?xe.date:xe.time,value:a,location:T,style:(o=p?.style)!==null&&o!==void 0?o:null},err:null}}case"plural":case"selectordinal":case"select":{var j=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Ee.EXPECT_SELECT_ARGUMENT_OPTIONS,Te(j,ie({},j)));this.bumpSpace();var H=this.parseIdentifierIfPossible(),I=0;if(g!=="select"&&H.value==="offset"){if(!this.bumpIf(":"))return this.error(Ee.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Te(this.clonePosition(),this.clonePosition()));this.bumpSpace();var y=this.tryParseDecimalInteger(Ee.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ee.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(y.err)return y;this.bumpSpace(),H=this.parseIdentifierIfPossible(),I=y.val}var V=this.tryParsePluralOrSelectOptions(i,g,r,H);if(V.err)return V;var O=this.tryParseArgumentClose(l);if(O.err)return O;var x=Te(l,this.clonePosition());return g==="select"?{val:{type:xe.select,value:a,options:bg(V.val),location:x},err:null}:{val:{type:xe.plural,value:a,options:bg(V.val),offset:I,pluralType:g==="plural"?"cardinal":"ordinal",location:x},err:null}}default:return this.error(Ee.INVALID_ARGUMENT_TYPE,Te(d,c))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,Te(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,r=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var l=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Ee.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Te(l,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,r){var a=[];try{a=v_(i)}catch{return this.error(Ee.INVALID_NUMBER_SKELETON,r)}return{val:{type:gr.number,tokens:a,location:r,parsedOptions:this.shouldParseSkeletons?T_(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,r,a,l){for(var o,d=!1,g=[],c=new Set,p=l.value,k=l.location;;){if(p.length===0){var y=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var _=this.tryParseDecimalInteger(Ee.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ee.INVALID_PLURAL_ARGUMENT_SELECTOR);if(_.err)return _;k=Te(y,this.clonePosition()),p=this.message.slice(y.offset,this.offset())}else break}if(c.has(p))return this.error(r==="select"?Ee.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Ee.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,k);p==="other"&&(d=!0),this.bumpSpace();var E=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?Ee.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Ee.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Te(this.clonePosition(),this.clonePosition()));var O=this.parseMessage(i+1,r,a);if(O.err)return O;var T=this.tryParseArgumentClose(E);if(T.err)return T;g.push([p,{value:O.val,location:Te(E,this.clonePosition())}]),c.add(p),this.bumpSpace(),o=this.parseIdentifierIfPossible(),p=o.value,k=o.location}return g.length===0?this.error(r==="select"?Ee.EXPECT_SELECT_ARGUMENT_SELECTOR:Ee.EXPECT_PLURAL_ARGUMENT_SELECTOR,Te(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(Ee.MISSING_OTHER_CLAUSE,Te(this.clonePosition(),this.clonePosition())):{val:g,err:null}},e.prototype.tryParseDecimalInteger=function(i,r){var a=1,l=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var o=!1,d=0;!this.isEOF();){var g=this.char();if(g>=48&&g<=57)o=!0,d=d*10+(g-48),this.bump();else break}var c=Te(l,this.clonePosition());return o?(d*=a,x_(d)?{val:d,err:null}:this.error(r,c)):this.error(i,c)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var r=Kf(this.message,i);if(r===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(i,r){return{val:null,err:{kind:i,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(yg(this.message,i,this.offset())){for(var r=0;r<i.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var r=this.offset(),a=this.message.indexOf(i,r);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var r=this.offset();if(r===i)break;if(r>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Vf(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),r=this.offset(),a=this.message.charCodeAt(r+(i>=65536?2:1));return a??null},e}();function Tl(e){return e>=97&&e<=122||e>=65&&e<=90}function F_(e){return Tl(e)||e===47}function K_(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Vf(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function C_(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function _l(e){e.forEach(function(i){if(delete i.location,Pf(i)||Bf(i))for(var r in i.options)delete i.options[r].location,_l(i.options[r].value);else Nf(i)&&qf(i.style)||(If(i)||Of(i))&&vl(i.style)?delete i.style.location:xf(i)&&_l(i.children)})}function V_(e,i){i===void 0&&(i={}),i=ie({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var r=new L_(e,i).parse();if(r.err){var a=SyntaxError(Ee[r.err.kind]);throw a.location=r.err.location,a.originalMessage=r.err.message,a}return i?.captureLocation||_l(r.val),r.val}var Zn;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Zn||(Zn={}));var St=function(e){Cn(i,e);function i(r,a,l){var o=e.call(this,r)||this;return o.code=a,o.originalMessage=l,o}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),Tg=function(e){Cn(i,e);function i(r,a,l,o){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(a,'". Options are "').concat(Object.keys(l).join('", "'),'"'),Zn.INVALID_VALUE,o)||this}return i}(St),H_=function(e){Cn(i,e);function i(r,a,l){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(a),Zn.INVALID_VALUE,l)||this}return i}(St),G_=function(e){Cn(i,e);function i(r,a){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(a,'"'),Zn.MISSING_VALUE,a)||this}return i}(St),on;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(on||(on={}));function U_(e){return e.length<2?e:e.reduce(function(i,r){var a=i[i.length-1];return!a||a.type!==on.literal||r.type!==on.literal?i.push(r):a.value+=r.value,i},[])}function Hf(e){return typeof e=="function"}function ti(e,i,r,a,l,o,d){if(e.length===1&&pg(e[0]))return[{type:on.literal,value:e[0].value}];for(var g=[],c=0,p=e;c<p.length;c++){var k=p[c];if(pg(k)){g.push({type:on.literal,value:k.value});continue}if(m_(k)){typeof o=="number"&&g.push({type:on.literal,value:r.getNumberFormat(i).format(o)});continue}var y=k.value;if(!(l&&y in l))throw new G_(y,d);var _=l[y];if(c_(k)){(!_||typeof _=="string"||typeof _=="number")&&(_=typeof _=="string"||typeof _=="number"?String(_):""),g.push({type:typeof _=="string"?on.literal:on.object,value:_});continue}if(If(k)){var E=typeof k.style=="string"?a.date[k.style]:vl(k.style)?k.style.parsedOptions:void 0;g.push({type:on.literal,value:r.getDateTimeFormat(i,E).format(_)});continue}if(Of(k)){var E=typeof k.style=="string"?a.time[k.style]:vl(k.style)?k.style.parsedOptions:a.time.medium;g.push({type:on.literal,value:r.getDateTimeFormat(i,E).format(_)});continue}if(Nf(k)){var E=typeof k.style=="string"?a.number[k.style]:qf(k.style)?k.style.parsedOptions:void 0;E&&E.scale&&(_=_*(E.scale||1)),g.push({type:on.literal,value:r.getNumberFormat(i,E).format(_)});continue}if(xf(k)){var O=k.children,T=k.value,b=l[T];if(!Hf(b))throw new H_(T,"function",d);var R=ti(O,i,r,a,l,o),P=b(R.map(function(I){return I.value}));Array.isArray(P)||(P=[P]),g.push.apply(g,P.map(function(I){return{type:typeof I=="string"?on.literal:on.object,value:I}}))}if(Pf(k)){var j=k.options[_]||k.options.other;if(!j)throw new Tg(k.value,_,Object.keys(k.options),d);g.push.apply(g,ti(j.value,i,r,a,l));continue}if(Bf(k)){var j=k.options["=".concat(_)];if(!j){if(!Intl.PluralRules)throw new St(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Zn.MISSING_INTL_API,d);var H=r.getPluralRules(i,{type:k.pluralType}).select(_-(k.offset||0));j=k.options[H]||k.options.other}if(!j)throw new Tg(k.value,_,Object.keys(k.options),d);g.push.apply(g,ti(j.value,i,r,a,l,_-(k.offset||0)));continue}}return U_(g)}function $_(e,i){return i?ie(ie(ie({},e||{}),i||{}),Object.keys(e).reduce(function(r,a){return r[a]=ie(ie({},e[a]),i[a]||{}),r},{})):e}function Y_(e,i){return i?Object.keys(e).reduce(function(r,a){return r[a]=$_(e[a],i[a]),r},ie({},e)):e}function rl(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,r){e[i]=r}}}}}function W_(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:$n(function(){for(var i,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((i=Intl.NumberFormat).bind.apply(i,Wn([void 0],r,!1)))},{cache:rl(e.number),strategy:Yn.variadic}),getDateTimeFormat:$n(function(){for(var i,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((i=Intl.DateTimeFormat).bind.apply(i,Wn([void 0],r,!1)))},{cache:rl(e.dateTime),strategy:Yn.variadic}),getPluralRules:$n(function(){for(var i,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((i=Intl.PluralRules).bind.apply(i,Wn([void 0],r,!1)))},{cache:rl(e.pluralRules),strategy:Yn.variadic})}}var Gf=function(){function e(i,r,a,l){r===void 0&&(r=e.defaultLocale);var o=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(c){var p=o.formatToParts(c);if(p.length===1)return p[0].value;var k=p.reduce(function(y,_){return!y.length||_.type!==on.literal||typeof y[y.length-1]!="string"?y.push(_.value):y[y.length-1]+=_.value,y},[]);return k.length<=1?k[0]||"":k},this.formatToParts=function(c){return ti(o.ast,o.locales,o.formatters,o.formats,c,void 0,o.message)},this.resolvedOptions=function(){var c;return{locale:((c=o.resolvedLocale)===null||c===void 0?void 0:c.toString())||Intl.NumberFormat.supportedLocalesOf(o.locales)[0]}},this.getAst=function(){return o.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=l||{};d.formatters;var g=ki(d,["formatters"]);this.ast=e.__parse(i,ie(ie({},g),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Y_(e.formats,a),this.formatters=l&&l.formatters||W_(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(i);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=V_,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Vt;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Vt||(Vt={}));var ta=function(e){Cn(i,e);function i(r,a,l){var o=this,d=l?l instanceof Error?l:new Error(String(l)):void 0;return o=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(a,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,o.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(o,i),o}return i}(Error),z_=function(e){Cn(i,e);function i(r,a){return e.call(this,Vt.UNSUPPORTED_FORMATTER,r,a)||this}return i}(ta),X_=function(e){Cn(i,e);function i(r,a){return e.call(this,Vt.INVALID_CONFIG,r,a)||this}return i}(ta),_g=function(e){Cn(i,e);function i(r,a){return e.call(this,Vt.MISSING_DATA,r,a)||this}return i}(ta),xn=function(e){Cn(i,e);function i(r,a,l){var o=e.call(this,Vt.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(a,`
`),l)||this;return o.locale=a,o}return i}(ta),al=function(e){Cn(i,e);function i(r,a,l,o){var d=e.call(this,"".concat(r,`
MessageID: `).concat(l?.id,`
Default Message: `).concat(l?.defaultMessage,`
Description: `).concat(l?.description,`
`),a,o)||this;return d.descriptor=l,d.locale=a,d}return i}(xn),Z_=function(e){Cn(i,e);function i(r,a){var l=e.call(this,Vt.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(a,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(o){var d;return(d=o.value)!==null&&d!==void 0?d:JSON.stringify(o)}).join(),")"):"id"," as fallback."))||this;return l.descriptor=r,l}return i}(ta);function J_(e,i,r){if(r===void 0&&(r=Error),!e)throw new r(i)}function hr(e,i,r){return r===void 0&&(r={}),i.reduce(function(a,l){return l in e?a[l]=e[l]:l in r&&(a[l]=r[l]),a},{})}var Q_=function(e){},ew=function(e){},Uf={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Q_,onWarn:ew};function $f(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Mt(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,r){e[i]=r}}}}}function nw(e){e===void 0&&(e=$f());var i=Intl.RelativeTimeFormat,r=Intl.ListFormat,a=Intl.DisplayNames,l=$n(function(){for(var g,c=[],p=0;p<arguments.length;p++)c[p]=arguments[p];return new((g=Intl.DateTimeFormat).bind.apply(g,Wn([void 0],c,!1)))},{cache:Mt(e.dateTime),strategy:Yn.variadic}),o=$n(function(){for(var g,c=[],p=0;p<arguments.length;p++)c[p]=arguments[p];return new((g=Intl.NumberFormat).bind.apply(g,Wn([void 0],c,!1)))},{cache:Mt(e.number),strategy:Yn.variadic}),d=$n(function(){for(var g,c=[],p=0;p<arguments.length;p++)c[p]=arguments[p];return new((g=Intl.PluralRules).bind.apply(g,Wn([void 0],c,!1)))},{cache:Mt(e.pluralRules),strategy:Yn.variadic});return{getDateTimeFormat:l,getNumberFormat:o,getMessageFormat:$n(function(g,c,p,k){return new Gf(g,c,p,ie({formatters:{getNumberFormat:o,getDateTimeFormat:l,getPluralRules:d}},k||{}))},{cache:Mt(e.message),strategy:Yn.variadic}),getRelativeTimeFormat:$n(function(){for(var g=[],c=0;c<arguments.length;c++)g[c]=arguments[c];return new(i.bind.apply(i,Wn([void 0],g,!1)))},{cache:Mt(e.relativeTime),strategy:Yn.variadic}),getPluralRules:d,getListFormat:$n(function(){for(var g=[],c=0;c<arguments.length;c++)g[c]=arguments[c];return new(r.bind.apply(r,Wn([void 0],g,!1)))},{cache:Mt(e.list),strategy:Yn.variadic}),getDisplayNames:$n(function(){for(var g=[],c=0;c<arguments.length;c++)g[c]=arguments[c];return new(a.bind.apply(a,Wn([void 0],g,!1)))},{cache:Mt(e.displayNames),strategy:Yn.variadic})}}function Ul(e,i,r,a){var l=e&&e[i],o;if(l&&(o=l[r]),o)return o;a(new z_("No ".concat(i," format named: ").concat(r)))}function Ja(e,i){return Object.keys(e).reduce(function(r,a){return r[a]=ie({timeZone:i},e[a]),r},{})}function wg(e,i){var r=Object.keys(ie(ie({},e),i));return r.reduce(function(a,l){return a[l]=ie(ie({},e[l]||{}),i[l]||{}),a},{})}function Ag(e,i){if(!i)return e;var r=Gf.formats;return ie(ie(ie({},r),e),{date:wg(Ja(r.date,i),Ja(e.date||{},i)),time:wg(Ja(r.time,i),Ja(e.time||{},i))})}var wl=function(e,i,r,a,l){var o=e.locale,d=e.formats,g=e.messages,c=e.defaultLocale,p=e.defaultFormats,k=e.fallbackOnEmptyString,y=e.onError,_=e.timeZone,E=e.defaultRichTextElements;r===void 0&&(r={id:""});var O=r.id,T=r.defaultMessage;J_(!!O,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var b=String(O),R=g&&Object.prototype.hasOwnProperty.call(g,b)&&g[b];if(Array.isArray(R)&&R.length===1&&R[0].type===xe.literal)return R[0].value;if(!a&&R&&typeof R=="string"&&!E)return R.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=ie(ie({},E),a||{}),d=Ag(d,_),p=Ag(p,_),!R){if(k===!1&&R==="")return R;if((!T||o&&o.toLowerCase()!==c.toLowerCase())&&y(new Z_(r,o)),T)try{var P=i.getMessageFormat(T,c,p,l);return P.format(a)}catch(j){return y(new al('Error formatting default message for: "'.concat(b,'", rendering default message verbatim'),o,r,j)),typeof T=="string"?T:b}return b}try{var P=i.getMessageFormat(R,o,d,ie({formatters:i},l||{}));return P.format(a)}catch(j){y(new al('Error formatting message: "'.concat(b,'", using ').concat(T?"default message":"id"," as fallback."),o,r,j))}if(T)try{var P=i.getMessageFormat(T,c,p,l);return P.format(a)}catch(j){y(new al('Error formatting the default message for: "'.concat(b,'", rendering message verbatim'),o,r,j))}return typeof R=="string"?R:typeof T=="string"?T:b},tw=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function ra(e,i,r,a){var l=e.locale,o=e.formats,d=e.onError,g=e.timeZone;a===void 0&&(a={});var c=a.format,p=ie(ie({},g&&{timeZone:g}),c&&Ul(o,i,c,d)),k=hr(a,tw,p);return i==="time"&&!k.hour&&!k.minute&&!k.second&&!k.timeStyle&&!k.dateStyle&&(k=ie(ie({},k),{hour:"numeric",minute:"numeric"})),r(l,k)}function rw(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var l=r[0],o=r[1],d=o===void 0?{}:o,g=typeof l=="string"?new Date(l||0):l;try{return ra(e,"date",i,d).format(g)}catch(c){e.onError(new xn("Error formatting date.",e.locale,c))}return String(g)}function aw(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var l=r[0],o=r[1],d=o===void 0?{}:o,g=typeof l=="string"?new Date(l||0):l;try{return ra(e,"time",i,d).format(g)}catch(c){e.onError(new xn("Error formatting time.",e.locale,c))}return String(g)}function iw(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var l=r[0],o=r[1],d=r[2],g=d===void 0?{}:d,c=typeof l=="string"?new Date(l||0):l,p=typeof o=="string"?new Date(o||0):o;try{return ra(e,"dateTimeRange",i,g).formatRange(c,p)}catch(k){e.onError(new xn("Error formatting date time range.",e.locale,k))}return String(c)}function sw(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var l=r[0],o=r[1],d=o===void 0?{}:o,g=typeof l=="string"?new Date(l||0):l;try{return ra(e,"date",i,d).formatToParts(g)}catch(c){e.onError(new xn("Error formatting date.",e.locale,c))}return[]}function lw(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var l=r[0],o=r[1],d=o===void 0?{}:o,g=typeof l=="string"?new Date(l||0):l;try{return ra(e,"time",i,d).formatToParts(g)}catch(c){e.onError(new xn("Error formatting time.",e.locale,c))}return[]}var ow=["style","type","fallback","languageDisplay"];function uw(e,i,r,a){var l=e.locale,o=e.onError,d=Intl.DisplayNames;d||o(new St(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Zn.MISSING_INTL_API));var g=hr(a,ow);try{return i(l,g).of(r)}catch(c){o(new xn("Error formatting display name.",l,c))}}var dw=["type","style"],Rg=Date.now();function gw(e){return"".concat(Rg,"_").concat(e,"_").concat(Rg)}function fw(e,i,r,a){a===void 0&&(a={});var l=Yf(e,i,r,a).reduce(function(o,d){var g=d.value;return typeof g!="string"?o.push(g):typeof o[o.length-1]=="string"?o[o.length-1]+=g:o.push(g),o},[]);return l.length===1?l[0]:l.length===0?"":l}function Yf(e,i,r,a){var l=e.locale,o=e.onError;a===void 0&&(a={});var d=Intl.ListFormat;d||o(new St(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Zn.MISSING_INTL_API));var g=hr(a,dw);try{var c={},p=r.map(function(k,y){if(typeof k=="object"){var _=gw(y);return c[_]=k,_}return String(k)});return i(l,g).formatToParts(p).map(function(k){return k.type==="literal"?k:ie(ie({},k),{value:c[k.value]||k.value})})}catch(k){o(new xn("Error formatting list.",l,k))}return r}var cw=["type"];function mw(e,i,r,a){var l=e.locale,o=e.onError;a===void 0&&(a={}),Intl.PluralRules||o(new St(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Zn.MISSING_INTL_API));var d=hr(a,cw);try{return i(l,d).select(r)}catch(g){o(new xn("Error formatting plural.",l,g))}return"other"}var pw=["numeric","style"];function hw(e,i,r){var a=e.locale,l=e.formats,o=e.onError;r===void 0&&(r={});var d=r.format,g=!!d&&Ul(l,"relative",d,o)||{},c=hr(r,pw,g);return i(a,c)}function kw(e,i,r,a,l){l===void 0&&(l={}),a||(a="second");var o=Intl.RelativeTimeFormat;o||e.onError(new St(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Zn.MISSING_INTL_API));try{return hw(e,i,l).format(r,a)}catch(d){e.onError(new xn("Error formatting relative time.",e.locale,d))}return String(r)}var vw=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Wf(e,i,r){var a=e.locale,l=e.formats,o=e.onError;r===void 0&&(r={});var d=r.format,g=d&&Ul(l,"number",d,o)||{},c=hr(r,vw,g);return i(a,c)}function yw(e,i,r,a){a===void 0&&(a={});try{return Wf(e,i,a).format(r)}catch(l){e.onError(new xn("Error formatting number.",e.locale,l))}return String(r)}function bw(e,i,r,a){a===void 0&&(a={});try{return Wf(e,i,a).formatToParts(r)}catch(l){e.onError(new xn("Error formatting number.",e.locale,l))}return[]}function Ew(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function Tw(e){e.onWarn&&e.defaultRichTextElements&&Ew(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function _w(e,i){var r=nw(i),a=ie(ie({},Uf),e),l=a.locale,o=a.defaultLocale,d=a.onError;return l?!Intl.NumberFormat.supportedLocalesOf(l).length&&d?d(new _g('Missing locale data for locale: "'.concat(l,'" in Intl.NumberFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(l).length&&d&&d(new _g('Missing locale data for locale: "'.concat(l,'" in Intl.DateTimeFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new X_('"locale" was not configured, using "'.concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),Tw(a),ie(ie({},a),{formatters:r,formatNumber:yw.bind(null,a,r.getNumberFormat),formatNumberToParts:bw.bind(null,a,r.getNumberFormat),formatRelativeTime:kw.bind(null,a,r.getRelativeTimeFormat),formatDate:rw.bind(null,a,r.getDateTimeFormat),formatDateToParts:sw.bind(null,a,r.getDateTimeFormat),formatTime:aw.bind(null,a,r.getDateTimeFormat),formatDateTimeRange:iw.bind(null,a,r.getDateTimeFormat),formatTimeToParts:lw.bind(null,a,r.getDateTimeFormat),formatPlural:mw.bind(null,a,r.getPluralRules),formatMessage:wl.bind(null,a,r),$t:wl.bind(null,a,r),formatList:fw.bind(null,a,r.getListFormat),formatListToParts:Yf.bind(null,a,r.getListFormat),formatDisplayName:uw.bind(null,a,r.getDisplayNames)})}function ww(e,i,r){if(r===void 0&&(r=Error),!e)throw new r(i)}function Aw(e){ww(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Rw=ie(ie({},Uf),{textComponent:A.Fragment}),Sw={key:42},jw=function(e){return A.isValidElement(e)?A.createElement(A.Fragment,Sw,e):e},Nw=function(e){var i;return(i=A.Children.map(e,jw))!==null&&i!==void 0?i:[]};function Iw(e){return function(i){return e(A.Children.toArray(i))}}var Sg={exports:{}},Re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function Ow(){if(jg)return Re;jg=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,l=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,g=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,p=e?Symbol.for("react.concurrent_mode"):60111,k=e?Symbol.for("react.forward_ref"):60112,y=e?Symbol.for("react.suspense"):60113,_=e?Symbol.for("react.suspense_list"):60120,E=e?Symbol.for("react.memo"):60115,O=e?Symbol.for("react.lazy"):60116,T=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,R=e?Symbol.for("react.responder"):60118,P=e?Symbol.for("react.scope"):60119;function j(I){if(typeof I=="object"&&I!==null){var V=I.$$typeof;switch(V){case i:switch(I=I.type,I){case c:case p:case a:case o:case l:case y:return I;default:switch(I=I&&I.$$typeof,I){case g:case k:case O:case E:case d:return I;default:return V}}case r:return V}}}function H(I){return j(I)===p}return Re.AsyncMode=c,Re.ConcurrentMode=p,Re.ContextConsumer=g,Re.ContextProvider=d,Re.Element=i,Re.ForwardRef=k,Re.Fragment=a,Re.Lazy=O,Re.Memo=E,Re.Portal=r,Re.Profiler=o,Re.StrictMode=l,Re.Suspense=y,Re.isAsyncMode=function(I){return H(I)||j(I)===c},Re.isConcurrentMode=H,Re.isContextConsumer=function(I){return j(I)===g},Re.isContextProvider=function(I){return j(I)===d},Re.isElement=function(I){return typeof I=="object"&&I!==null&&I.$$typeof===i},Re.isForwardRef=function(I){return j(I)===k},Re.isFragment=function(I){return j(I)===a},Re.isLazy=function(I){return j(I)===O},Re.isMemo=function(I){return j(I)===E},Re.isPortal=function(I){return j(I)===r},Re.isProfiler=function(I){return j(I)===o},Re.isStrictMode=function(I){return j(I)===l},Re.isSuspense=function(I){return j(I)===y},Re.isValidElementType=function(I){return typeof I=="string"||typeof I=="function"||I===a||I===p||I===o||I===l||I===y||I===_||typeof I=="object"&&I!==null&&(I.$$typeof===O||I.$$typeof===E||I.$$typeof===d||I.$$typeof===g||I.$$typeof===k||I.$$typeof===b||I.$$typeof===R||I.$$typeof===P||I.$$typeof===T)},Re.typeOf=j,Re}var Ng;function Pw(){return Ng||(Ng=1,Sg.exports=Ow()),Sg.exports}var il,Ig;function Bw(){if(Ig)return il;Ig=1;var e=Pw(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[e.ForwardRef]=a,o[e.Memo]=l;function d(O){return e.isMemo(O)?l:o[O.$$typeof]||i}var g=Object.defineProperty,c=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,k=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,_=Object.prototype;function E(O,T,b){if(typeof T!="string"){if(_){var R=y(T);R&&R!==_&&E(O,R,b)}var P=c(T);p&&(P=P.concat(p(T)));for(var j=d(O),H=d(T),I=0;I<P.length;++I){var V=P[I];if(!r[V]&&!(b&&b[V])&&!(H&&H[V])&&!(j&&j[V])){var x=k(T,V);try{g(O,V,x)}catch{}}}}return O}return il=E,il}Bw();var $l=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=A.createContext(null)):A.createContext(null);$l.Consumer;$l.Provider;var xw=$l;function zf(){var e=A.useContext(xw);return Aw(e),e}var Al;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Al||(Al={}));var Rl;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Rl||(Rl={}));function Xf(e){var i=function(r){var a=zf(),l=r.value,o=r.children,d=ki(r,["value","children"]),g=typeof l=="string"?new Date(l||0):l,c=e==="formatDate"?a.formatDateToParts(g,d):a.formatTimeToParts(g,d);return o(c)};return i.displayName=Rl[e],i}function aa(e){var i=function(r){var a=zf(),l=r.value,o=r.children,d=ki(r,["value","children"]),g=a[e](l,d);if(typeof o=="function")return o(g);var c=a.textComponent||A.Fragment;return A.createElement(c,null,g)};return i.displayName=Al[e],i}function Zf(e){return e&&Object.keys(e).reduce(function(i,r){var a=e[r];return i[r]=Hf(a)?Iw(a):a,i},{})}var Og=function(e,i,r,a){for(var l=[],o=4;o<arguments.length;o++)l[o-4]=arguments[o];var d=Zf(a),g=wl.apply(void 0,Wn([e,i,r,d],l,!1));return Array.isArray(g)?Nw(g):g},qw=function(e,i){var r=e.defaultRichTextElements,a=ki(e,["defaultRichTextElements"]),l=Zf(r),o=_w(ie(ie(ie({},Rw),a),{defaultRichTextElements:l}),i),d={locale:o.locale,timeZone:o.timeZone,fallbackOnEmptyString:o.fallbackOnEmptyString,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:l};return ie(ie({},o),{formatMessage:Og.bind(null,d,o.formatters),$t:Og.bind(null,d,o.formatters)})};aa("formatDate");aa("formatTime");aa("formatNumber");aa("formatList");aa("formatDisplayName");Xf("formatDate");Xf("formatTime");function Yl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sl={exports:{}},Dw=Sl.exports,Pg;function Mw(){return Pg||(Pg=1,function(e,i){(function(r,a){e.exports=a()})(Dw,function(){var r,a,l=1e3,o=6e4,d=36e5,g=864e5,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p=31536e6,k=2628e6,y=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,_={years:p,months:k,days:g,hours:d,minutes:o,seconds:l,milliseconds:1,weeks:6048e5},E=function(V){return V instanceof H},O=function(V,x,q){return new H(V,q,x.$l)},T=function(V){return a.p(V)+"s"},b=function(V){return V<0},R=function(V){return b(V)?Math.ceil(V):Math.floor(V)},P=function(V){return Math.abs(V)},j=function(V,x){return V?b(V)?{negative:!0,format:""+P(V)+x}:{negative:!1,format:""+V+x}:{negative:!1,format:""}},H=function(){function V(q,z,Q){var Z=this;if(this.$d={},this.$l=Q,q===void 0&&(this.$ms=0,this.parseFromMilliseconds()),z)return O(q*_[T(z)],this);if(typeof q=="number")return this.$ms=q,this.parseFromMilliseconds(),this;if(typeof q=="object")return Object.keys(q).forEach(function(D){Z.$d[T(D)]=q[D]}),this.calMilliseconds(),this;if(typeof q=="string"){var J=q.match(y);if(J){var F=J.slice(2).map(function(D){return D!=null?Number(D):0});return this.$d.years=F[0],this.$d.months=F[1],this.$d.weeks=F[2],this.$d.days=F[3],this.$d.hours=F[4],this.$d.minutes=F[5],this.$d.seconds=F[6],this.calMilliseconds(),this}}return this}var x=V.prototype;return x.calMilliseconds=function(){var q=this;this.$ms=Object.keys(this.$d).reduce(function(z,Q){return z+(q.$d[Q]||0)*_[Q]},0)},x.parseFromMilliseconds=function(){var q=this.$ms;this.$d.years=R(q/p),q%=p,this.$d.months=R(q/k),q%=k,this.$d.days=R(q/g),q%=g,this.$d.hours=R(q/d),q%=d,this.$d.minutes=R(q/o),q%=o,this.$d.seconds=R(q/l),q%=l,this.$d.milliseconds=q},x.toISOString=function(){var q=j(this.$d.years,"Y"),z=j(this.$d.months,"M"),Q=+this.$d.days||0;this.$d.weeks&&(Q+=7*this.$d.weeks);var Z=j(Q,"D"),J=j(this.$d.hours,"H"),F=j(this.$d.minutes,"M"),D=this.$d.seconds||0;this.$d.milliseconds&&(D+=this.$d.milliseconds/1e3,D=Math.round(1e3*D)/1e3);var X=j(D,"S"),te=q.negative||z.negative||Z.negative||J.negative||F.negative||X.negative,W=J.format||F.format||X.format?"T":"",G=(te?"-":"")+"P"+q.format+z.format+Z.format+W+J.format+F.format+X.format;return G==="P"||G==="-P"?"P0D":G},x.toJSON=function(){return this.toISOString()},x.format=function(q){var z=q||"YYYY-MM-DDTHH:mm:ss",Q={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return z.replace(c,function(Z,J){return J||String(Q[Z])})},x.as=function(q){return this.$ms/_[T(q)]},x.get=function(q){var z=this.$ms,Q=T(q);return Q==="milliseconds"?z%=1e3:z=Q==="weeks"?R(z/_[Q]):this.$d[Q],z||0},x.add=function(q,z,Q){var Z;return Z=z?q*_[T(z)]:E(q)?q.$ms:O(q,this).$ms,O(this.$ms+Z*(Q?-1:1),this)},x.subtract=function(q,z){return this.add(q,z,!0)},x.locale=function(q){var z=this.clone();return z.$l=q,z},x.clone=function(){return O(this.$ms,this)},x.humanize=function(q){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!q)},x.valueOf=function(){return this.asMilliseconds()},x.milliseconds=function(){return this.get("milliseconds")},x.asMilliseconds=function(){return this.as("milliseconds")},x.seconds=function(){return this.get("seconds")},x.asSeconds=function(){return this.as("seconds")},x.minutes=function(){return this.get("minutes")},x.asMinutes=function(){return this.as("minutes")},x.hours=function(){return this.get("hours")},x.asHours=function(){return this.as("hours")},x.days=function(){return this.get("days")},x.asDays=function(){return this.as("days")},x.weeks=function(){return this.get("weeks")},x.asWeeks=function(){return this.as("weeks")},x.months=function(){return this.get("months")},x.asMonths=function(){return this.as("months")},x.years=function(){return this.get("years")},x.asYears=function(){return this.as("years")},V}(),I=function(V,x,q){return V.add(x.years()*q,"y").add(x.months()*q,"M").add(x.days()*q,"d").add(x.hours()*q,"h").add(x.minutes()*q,"m").add(x.seconds()*q,"s").add(x.milliseconds()*q,"ms")};return function(V,x,q){r=q,a=q().$utils(),q.duration=function(Z,J){var F=q.locale();return O(Z,{$l:F},J)},q.isDuration=E;var z=x.prototype.add,Q=x.prototype.subtract;x.prototype.add=function(Z,J){return E(Z)?I(this,Z,1):z.bind(this)(Z,J)},x.prototype.subtract=function(Z,J){return E(Z)?I(this,Z,-1):Q.bind(this)(Z,J)}}})}(Sl)),Sl.exports}var Lw=Mw();const Fw=Yl(Lw);var jl={exports:{}},Kw=jl.exports,Bg;function Cw(){return Bg||(Bg=1,function(e,i){(function(r,a){e.exports=a()})(Kw,function(){var r="day";return function(a,l,o){var d=function(p){return p.add(4-p.isoWeekday(),r)},g=l.prototype;g.isoWeekYear=function(){return d(this).year()},g.isoWeek=function(p){if(!this.$utils().u(p))return this.add(7*(p-this.isoWeek()),r);var k,y,_,E,O=d(this),T=(k=this.isoWeekYear(),y=this.$u,_=(y?o.utc:o)().year(k).startOf("year"),E=4-_.isoWeekday(),_.isoWeekday()>4&&(E+=7),_.add(E,r));return O.diff(T,"week")+1},g.isoWeekday=function(p){return this.$utils().u(p)?this.day()||7:this.day(this.day()%7?p:p-7)};var c=g.startOf;g.startOf=function(p,k){var y=this.$utils(),_=!!y.u(k)||k;return y.p(p)==="isoweek"?_?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):c.bind(this)(p,k)}}})}(jl)),jl.exports}var Vw=Cw();const Hw=Yl(Vw);var Nl={exports:{}},Gw=Nl.exports,xg;function Uw(){return xg||(xg=1,function(e,i){(function(r,a){e.exports=a()})(Gw,function(){var r="minute",a=/[+-]\d\d(?::?\d\d)?/g,l=/([+-]|\d\d)/g;return function(o,d,g){var c=d.prototype;g.utc=function(T){var b={date:T,utc:!0,args:arguments};return new d(b)},c.utc=function(T){var b=g(this.toDate(),{locale:this.$L,utc:!0});return T?b.add(this.utcOffset(),r):b},c.local=function(){return g(this.toDate(),{locale:this.$L,utc:!1})};var p=c.parse;c.parse=function(T){T.utc&&(this.$u=!0),this.$utils().u(T.$offset)||(this.$offset=T.$offset),p.call(this,T)};var k=c.init;c.init=function(){if(this.$u){var T=this.$d;this.$y=T.getUTCFullYear(),this.$M=T.getUTCMonth(),this.$D=T.getUTCDate(),this.$W=T.getUTCDay(),this.$H=T.getUTCHours(),this.$m=T.getUTCMinutes(),this.$s=T.getUTCSeconds(),this.$ms=T.getUTCMilliseconds()}else k.call(this)};var y=c.utcOffset;c.utcOffset=function(T,b){var R=this.$utils().u;if(R(T))return this.$u?0:R(this.$offset)?y.call(this):this.$offset;if(typeof T=="string"&&(T=function(I){I===void 0&&(I="");var V=I.match(a);if(!V)return null;var x=(""+V[0]).match(l)||["-",0,0],q=x[0],z=60*+x[1]+ +x[2];return z===0?0:q==="+"?z:-z}(T),T===null))return this;var P=Math.abs(T)<=16?60*T:T,j=this;if(b)return j.$offset=P,j.$u=T===0,j;if(T!==0){var H=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(j=this.local().add(P+H,r)).$offset=P,j.$x.$localOffset=H}else j=this.utc();return j};var _=c.format;c.format=function(T){var b=T||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return _.call(this,b)},c.valueOf=function(){var T=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*T},c.isUTC=function(){return!!this.$u},c.toISOString=function(){return this.toDate().toISOString()},c.toString=function(){return this.toDate().toUTCString()};var E=c.toDate;c.toDate=function(T){return T==="s"&&this.$offset?g(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():E.call(this)};var O=c.diff;c.diff=function(T,b,R){if(T&&this.$u===T.$u)return O.call(this,T,b,R);var P=this.local(),j=g(T).local();return O.call(P,j,b,R)}}})}(Nl)),Nl.exports}var $w=Uw();const Yw=Yl($w),Ww=$f(),vi=e=>qw({locale:"nb-NO",messages:e},Ww),yi={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};vi(yi);var Il={exports:{}},zw=Il.exports,qg;function Xw(){return qg||(qg=1,function(e,i){(function(r,a){e.exports=a(cr)})(zw,function(r){function a(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var l=a(r),o={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return l.default.locale(o,null,!0),o})}(Il)),Il.exports}Xw();cr.extend(Yw);cr.extend(Hw);cr.extend(Fw);vi(yi);vi(yi);var Dg={exports:{}},Vr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function Zw(){if(Mg)return Vr;Mg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,l,o){var d=null;if(o!==void 0&&(d=""+o),l.key!==void 0&&(d=""+l.key),"key"in l){o={};for(var g in l)g!=="key"&&(o[g]=l[g])}else o=l;return l=o.ref,{$$typeof:e,type:a,key:d,ref:l!==void 0?l:null,props:o}}return Vr.Fragment=i,Vr.jsx=r,Vr.jsxs=r,Vr}var Lg;function Jw(){return Lg||(Lg=1,Dg.exports=Zw()),Dg.exports}Jw();vi(yi);A.createContext({});var Ol={exports:{}},Qw=Ol.exports,Fg;function eA(){return Fg||(Fg=1,function(e,i){(function(r,a){e.exports=a()})(Qw,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,l=/\d/,o=/\d\d/,d=/\d\d?/,g=/\d*[^-_:/,()\s\d]+/,c={},p=function(b){return(b=+b)+(b>68?1900:2e3)},k=function(b){return function(R){this[b]=+R}},y=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(R){if(!R||R==="Z")return 0;var P=R.match(/([+-]|\d\d)/g),j=60*P[1]+(+P[2]||0);return j===0?0:P[0]==="+"?-j:j}(b)}],_=function(b){var R=c[b];return R&&(R.indexOf?R:R.s.concat(R.f))},E=function(b,R){var P,j=c.meridiem;if(j){for(var H=1;H<=24;H+=1)if(b.indexOf(j(H,0,R))>-1){P=H>12;break}}else P=b===(R?"pm":"PM");return P},O={A:[g,function(b){this.afternoon=E(b,!1)}],a:[g,function(b){this.afternoon=E(b,!0)}],Q:[l,function(b){this.month=3*(b-1)+1}],S:[l,function(b){this.milliseconds=100*+b}],SS:[o,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[d,k("seconds")],ss:[d,k("seconds")],m:[d,k("minutes")],mm:[d,k("minutes")],H:[d,k("hours")],h:[d,k("hours")],HH:[d,k("hours")],hh:[d,k("hours")],D:[d,k("day")],DD:[o,k("day")],Do:[g,function(b){var R=c.ordinal,P=b.match(/\d+/);if(this.day=P[0],R)for(var j=1;j<=31;j+=1)R(j).replace(/\[|\]/g,"")===b&&(this.day=j)}],w:[d,k("week")],ww:[o,k("week")],M:[d,k("month")],MM:[o,k("month")],MMM:[g,function(b){var R=_("months"),P=(_("monthsShort")||R.map(function(j){return j.slice(0,3)})).indexOf(b)+1;if(P<1)throw new Error;this.month=P%12||P}],MMMM:[g,function(b){var R=_("months").indexOf(b)+1;if(R<1)throw new Error;this.month=R%12||R}],Y:[/[+-]?\d+/,k("year")],YY:[o,function(b){this.year=p(b)}],YYYY:[/\d{4}/,k("year")],Z:y,ZZ:y};function T(b){var R,P;R=b,P=c&&c.formats;for(var j=(b=R.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Q,Z,J){var F=J&&J.toUpperCase();return Z||P[J]||r[J]||P[F].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(D,X,te){return X||te.slice(1)})})).match(a),H=j.length,I=0;I<H;I+=1){var V=j[I],x=O[V],q=x&&x[0],z=x&&x[1];j[I]=z?{regex:q,parser:z}:V.replace(/^\[|\]$/g,"")}return function(Q){for(var Z={},J=0,F=0;J<H;J+=1){var D=j[J];if(typeof D=="string")F+=D.length;else{var X=D.regex,te=D.parser,W=Q.slice(F),G=X.exec(W)[0];te.call(Z,G),Q=Q.replace(G,"")}}return function($){var ae=$.afternoon;if(ae!==void 0){var ne=$.hours;ae?ne<12&&($.hours+=12):ne===12&&($.hours=0),delete $.afternoon}}(Z),Z}}return function(b,R,P){P.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(p=b.parseTwoDigitYear);var j=R.prototype,H=j.parse;j.parse=function(I){var V=I.date,x=I.utc,q=I.args;this.$u=x;var z=q[1];if(typeof z=="string"){var Q=q[2]===!0,Z=q[3]===!0,J=Q||Z,F=q[2];Z&&(F=q[2]),c=this.$locale(),!Q&&F&&(c=P.Ls[F]),this.$d=function(W,G,$,ae){try{if(["x","X"].indexOf(G)>-1)return new Date((G==="X"?1e3:1)*W);var ne=T(G)(W),le=ne.year,he=ne.month,mn=ne.day,Ke=ne.hours,qe=ne.minutes,Ce=ne.seconds,ve=ne.milliseconds,we=ne.zone,Ze=ne.week,Ve=new Date,Ge=mn||(le||he?1:Ve.getDate()),_n=le||Ve.getFullYear(),Me=0;le&&!he||(Me=he>0?he-1:Ve.getMonth());var Je,Qn=Ke||0,Qe=qe||0,Vn=Ce||0,et=ve||0;return we?new Date(Date.UTC(_n,Me,Ge,Qn,Qe,Vn,et+60*we.offset*1e3)):$?new Date(Date.UTC(_n,Me,Ge,Qn,Qe,Vn,et)):(Je=new Date(_n,Me,Ge,Qn,Qe,Vn,et),Ze&&(Je=ae(Je).week(Ze).toDate()),Je)}catch{return new Date("")}}(V,z,x,P),this.init(),F&&F!==!0&&(this.$L=this.locale(F).$L),J&&V!=this.format(z)&&(this.$d=new Date("")),c={}}else if(z instanceof Array)for(var D=z.length,X=1;X<=D;X+=1){q[1]=z[X-1];var te=P.apply(this,q);if(te.isValid()){this.$d=te.$d,this.$L=te.$L,this.init();break}X===D&&(this.$d=new Date(""))}else H.call(this,I)}}})}(Ol)),Ol.exports}var nA=eA();const tA=JT(nA);cr.extend(tA);Kn(na);const rA=e=>{const i=e.aktiveNaturalytelser.reduce((a,l)=>{const o=l.type;return o in a?{...a,[o]:[...a[o],l]}:{...a,[o]:[l]}},{}),r={};return Object.entries(i).forEach(([a,l])=>{const o=l.sort((d,g)=>CT({fom:d.periode.fomDato,tom:d.periode.tomDato},{fom:g.periode.fomDato,tom:g.periode.tomDato})).reverse();r[a]=o.flatMap((d,g,c)=>{const p=c[g+1],k=d.periode.tomDato,y=p?.periode.fomDato;return k===$r?[]:[{...d,periode:{fomDato:Rd(k,1),tomDato:y?Rd(y,-1):$r}}]})}),r},Jf=({inntektsmelding:e,alleKodeverk:i})=>{const r=mt(),a=rA(e);return L.jsx(Xn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?L.jsx("span",{children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):L.jsx(hi,{gap:"space-4",children:Object.entries(a).map(([l,o])=>L.jsxs("div",{children:[L.jsx("span",{children:i.NaturalYtelseType.find(d=>d.kode===l)?.navn}),L.jsx("ul",{children:o.map(d=>L.jsxs(Y.Fragment,{children:[L.jsxs("li",{children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",L.jsx(Wr,{dateString:d.periode.fomDato})]}),d.periode.tomDato!==$r&&L.jsxs("li",{children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",L.jsx(Wr,{dateString:d.periode.tomDato})]}),L.jsxs("li",{children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",L.jsx(lr,{beløp:d.beloepPerMnd.verdi})]})]},d.indexKey))})]},l))})})};Jf.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const Qf=({kildeSystem:e})=>{const i=mt();return L.jsx(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:aA(e,i)})},aA=(e,i)=>{switch(e.toUpperCase()){case"NAV_NO":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}};Qf.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const ec=({inntektsmelding:e})=>{const i=mt();return L.jsxs(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[L.jsxs("span",{children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),L.jsxs("span",{children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};ec.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const nc=({inntektsmelding:e,fagsak:i,arbeidsgiverOpplysninger:r})=>{const a=`IM ${r.navn} - ${Ug(e.motattDato)}`;return L.jsx(Cl,{type:"button",onClick:()=>{Wb(i.saksnummer,e.journalpostId,e.dokumentId,a)},variant:"secondary",size:"small",icon:L.jsx(o0,{}),children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.modal.trigger"})})};nc.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""}}};const tc=({inntektsmelding:e})=>{const i=mt();if(e.refusjonsperioder.length===0)return L.jsx(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:e.refusjonPrMnd?L.jsx(lr,{beløp:e.refusjonPrMnd}):L.jsx(je,{tagName:"span",id:"InntektsmeldingFaktaPanel.refusjon.ingen"})});const r=[...e.refusjonsperioder].sort((a,l)=>new Date(a.fom).getTime()-new Date(l.fom).getTime());return L.jsxs(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:[L.jsx("span",{children:"Krever refusjon"}),L.jsx(lr,{beløp:e.refusjonPrMnd??0}),L.jsx("span",{children:"Endringer i perioden:"}),L.jsx("ul",{children:r.map(a=>L.jsx("li",{children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:L.jsx(lr,{beløp:a.refusjonsbeløp.verdi}),fom:L.jsx(Wr,{dateString:a.fom})}})},a.indexKey))})]})};tc.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const rc=({startDatoPermisjon:e,ytelse:i})=>{const r=mt();return e?L.jsxs(Xn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:i.toLowerCase()}),children:[L.jsx("span",{children:e?L.jsx(Wr,{dateString:e}):"-"}),L.jsx("span",{children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};rc.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const iA="_behandlingCircleIngen_x70wg_1",sA="_behandlingCircleDenne_x70wg_5",lA="_behandlingCircleAndre_x70wg_9",oA="_container_x70wg_13",uA="_ingenInntektsmeldinger_x70wg_20",Ur={behandlingCircleIngen:iA,behandlingCircleDenne:sA,behandlingCircleAndre:lA,container:oA,ingenInntektsmeldinger:uA},ac=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:i,alleBehandlinger:r})=>{const{alleKodeverk:a,fagsak:l,behandling:o}=$g(),d=mt();return L.jsxs(hi,{gap:"space-16",className:Ur.container,children:[L.jsxs(sr,{gap:"space-16",justify:"space-between",align:"start",children:[L.jsxs(zg,{level:"3",size:"small",children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",L.jsx(oi,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),L.jsx(nc,{fagsak:l,inntektsmelding:e,arbeidsgiverOpplysninger:i[e.arbeidsgiverIdent]})]}),L.jsxs(L1,{columns:3,gap:"space-32",children:[L.jsx(wf,{arbeidsgiverOpplysninger:i[e.arbeidsgiverIdent],arbeidsgiverIdent:e.arbeidsgiverIdent}),L.jsx(Xn,{tittel:d.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:L.jsx(lr,{beløp:e.inntektPrMnd})}),L.jsx(Af,{alleKodeverk:a,inntektsmelding:e,alleBehandlinger:r,behandling:o}),L.jsx(ec,{inntektsmelding:e}),L.jsx(rc,{ytelse:a.FagsakYtelseType.find(g=>g.kode===l.fagsakYtelseType)?.navn??"",startDatoPermisjon:e.startDatoPermisjon}),L.jsx(Qf,{kildeSystem:e.kildeSystem}),L.jsx(Jf,{inntektsmelding:e,alleKodeverk:a}),L.jsx(tc,{inntektsmelding:e})]})]})};ac.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const dA={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},Kg=Kn(dA),Pl=({arbeidsgiverOpplysningerPerId:e,alleBehandlinger:i,inntektsmeldinger:r})=>{const{behandling:a}=$g(),[l,o]=A.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),d=p=>{o(l&&p===l.orderBy&&l.direction==="descending"?void 0:{orderBy:p,direction:l&&p===l.orderBy&&l.direction==="ascending"?"descending":"ascending"})},g=l?gA({inntektsmeldinger:r,arbeidsgiverOpplysningerPerId:e,sortKey:l.orderBy,behandling:a}):r,c=l?.direction==="ascending"?g:g.toReversed();return c.length===0?L.jsx(Sd,{value:Kg,children:L.jsxs(sr,{gap:"space-8",justify:"center",align:"center",className:Ur.ingenInntektsmeldinger,children:[L.jsx(ui,{children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.ingen"})}),L.jsx(p0,{})]})}):L.jsx(Sd,{value:Kg,children:L.jsxs(Fe,{sort:l,onSortChange:p=>d(p),children:[L.jsx(Fe.Header,{children:L.jsxs(Fe.Row,{children:[L.jsx(Fe.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),L.jsx(Fe.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),L.jsx(Fe.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),L.jsx(Fe.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),L.jsx(Fe.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),L.jsx(Fe.HeaderCell,{})]})}),L.jsx(Fe.Body,{children:c.map(p=>L.jsxs(Fe.ExpandableRow,{expandOnRowClick:!0,contentGutter:"none",togglePlacement:"right",content:L.jsx(ac,{alleBehandlinger:i,arbeidsgiverOpplysningerPerId:e,inntektsmelding:p}),children:[L.jsx(Fe.DataCell,{children:L.jsx(oi,{dateTimeString:p.innsendingstidspunkt,separator:"kl"})}),L.jsx(Fe.DataCell,{children:e[p.arbeidsgiverIdent]?.navn??"-"}),L.jsx(Fe.DataCell,{children:p.startDatoPermisjon?L.jsx(Wr,{dateString:p.startDatoPermisjon}):"-"}),L.jsx(Fe.DataCell,{children:L.jsx(lr,{beløp:p.inntektPrMnd})}),L.jsx(Fe.DataCell,{children:L.jsx(fA,{behandling:a,inntektsmelding:p})})]},`${p.journalpostId}-${p.internArbeidsforholdId}`))})]})})},gA=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:i,sortKey:r,behandling:a})=>r==="arbeidsgiverIdent"?e.slice().sort((l,o)=>{const d=i[l.arbeidsgiverIdent]?.navn,g=i[o.arbeidsgiverIdent]?.navn;return sl(d,g)}):r==="tilknyttedeBehandlingIder"?e.slice().sort((l,o)=>{const d=Bl({behandling:a,inntektsmelding:l}),g=Bl({behandling:a,inntektsmelding:o});return sl(d,g)}):e.slice().sort((l,o)=>{const d=l[r],g=o[r];return sl(d,g)}),sl=(e,i)=>e===void 0?-1:i===void 0?1:e<i?-1:e>i?1:0,fA=({behandling:e,inntektsmelding:i})=>{const r=Bl({behandling:e,inntektsmelding:i});return r==="DENNE"?L.jsxs(sr,{gap:"space-4",align:"center",children:[L.jsx(Cs,{className:Ur.behandlingCircleDenne}),L.jsx(je,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):r==="ANDRE"?L.jsxs(sr,{gap:"space-4",align:"center",children:[L.jsx(Cs,{className:Ur.behandlingCircleAndre}),L.jsx(je,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):L.jsxs(sr,{gap:"space-4",align:"center",children:[L.jsx(Cs,{className:Ur.behandlingCircleIngen}),L.jsx(je,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},Bl=({behandling:e,inntektsmelding:i})=>i.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":i.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";Pl.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const ll={innsendingstidspunkt:"2024-08-08T00:00:00",kildeSystem:"Altinn",aktiveNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",arbeidsgiverIdent:"1",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},vA={title:"fakta/fakta-inntektsmelding",component:Pl,decorators:[Gb],render:e=>L.jsx(Pl,{...e})},Gr={args:{alleBehandlinger:[{uuid:"UUID1",type:"BT-002",opprettet:"2024-07-13",avsluttet:"2024-08-13"},{uuid:"UUID2",type:"BT-003",opprettet:"2024-07-14",avsluttet:"2024-08-14"},{uuid:"UUID3",type:"BT-004",opprettet:"2024-07-15",avsluttet:"2024-08-15"}],arbeidsgiverOpplysningerPerId:{1:{navn:"Rema 1000"},2:{navn:"Kiwi"},3:{navn:"Meny"}},behandling:{uuid:"UUID2"},inntektsmeldinger:[{...ll,tilknyttedeBehandlingIder:["UUID1"],inntektPrMnd:10000.5,innsendingstidspunkt:"2024-07-20T00:00:00",startDatoPermisjon:"2024-10-10",refusjonPrMnd:void 0,journalpostId:"1",refusjonsperioder:[{refusjonsbeløp:{verdi:5e3},indexKey:"1",fom:"2024-01-10"},{refusjonsbeløp:{verdi:3e3},indexKey:"2",fom:"2024-01-09"}]},{...ll,tilknyttedeBehandlingIder:["UUID1","UUID2"],inntektPrMnd:2e4,innsendingstidspunkt:"2024-08-01T00:00:00",kildeSystem:"FS22",refusjonPrMnd:void 0,arbeidsgiverIdent:"2",journalpostId:"2"},{...ll,tilknyttedeBehandlingIder:[],inntektPrMnd:3e4,innsendingstidspunkt:"2024-09-10T00:00:00",innsendingsårsak:"ENDRING",kildeSystem:"NAV_NO",startDatoPermisjon:"2024-11-11",arbeidsgiverIdent:"3",journalpostId:"3",aktiveNaturalytelser:[{periode:{fomDato:"2024-01-09",tomDato:"2024-10-09"},type:ol.ELEKTRISK_KOMMUNIKASJON,beloepPerMnd:{verdi:999},indexKey:"1"},{periode:{fomDato:"2024-01-11",tomDato:"2024-10-11"},type:ol.LOSJI,beloepPerMnd:{verdi:10},indexKey:"2"}]}]}},Qa={args:{...Gr.args,inntektsmeldinger:[]}};Gr.parameters={...Gr.parameters,docs:{...Gr.parameters?.docs,source:{originalSource:`{
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
}`,...Qa.parameters?.docs?.source}}};const yA=["InntektsmeldingDefault","IngenInntektsmeldinger"];export{Qa as IngenInntektsmeldinger,Gr as InntektsmeldingDefault,yA as __namedExportsOrder,vA as default};
