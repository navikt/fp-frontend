import{g as Hg,r as A,u as mt,_ as Ad,s as Rd,c as Gg,a as Me,R as Z,b as Hb,d as fr,T as Gb,S as Wr,e as $g,f as Ug,h as $b,o as Yg,A as Ub,i as Cn,j as H,H as Yb,k as $r,l as Wa,E as Sd,m as Wg,P as jd,w as Wb}from"./iframe-CUnYPqA4.js";import{r as zb}from"./index-C2jxeeP_.js";var zg=zb();const Id=Hg(zg);function Xb(e,i){var r=e.values,a=Ad(e,["values"]),s=i.values,o=Ad(i,["values"]);return Rd(s,r)&&Rd(a,o)}function Xg(e){var i=mt(),r=i.formatMessage,a=i.textComponent,s=a===void 0?A.Fragment:a,o=e.id,d=e.description,g=e.defaultMessage,c=e.values,p=e.children,h=e.tagName,v=h===void 0?s:h,_=e.ignoreTag,b={id:o,description:d,defaultMessage:g},O=r(b,c,{ignoreTag:_});return typeof p=="function"?p(Array.isArray(O)?O:[O]):v?A.createElement(v,null,O):A.createElement(A.Fragment,null,O)}Xg.displayName="FormattedMessage";var xe=A.memo(Xg,Xb);xe.displayName="MemoizedFormattedMessage";var ol=(e=>(e.ELEKTRISK_KOMMUNIKASJON="ELEKTRISK_KOMMUNIKASJON",e.LOSJI="LOSJI",e))(ol||{});const Jb=(e,i,r)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${i}&dokumentId=${r}`,Zb=(e,i,r,a)=>{const s=Jb(e,i,r),o=`${i}-${r}`;a&&Qb(s,o,a)},Qb=(e,i,r)=>{const a=window.open(e,i);a&&setTimeout(()=>{a.document.title=r},1e3)},cr=e=>Gg({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var e0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const ul=A.forwardRef((e,i)=>{var{className:r,size:a="medium",as:s="p",spacing:o,truncate:d,weight:g="regular",align:c,visuallyHidden:p,textColor:h}=e,v=e0(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=Me();return Z.createElement(s,Object.assign({},v,{ref:i,className:_(r,"navds-body-long",`navds-body-long--${a}`,cr({spacing:o,truncate:d,weight:g,align:c,visuallyHidden:p,textColor:h}))}))});var n0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const ui=A.forwardRef((e,i)=>{var{className:r,size:a="medium",as:s="p",spacing:o,truncate:d,weight:g="regular",align:c,visuallyHidden:p,textColor:h}=e,v=n0(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=Me();return Z.createElement(s,Object.assign({},v,{ref:i,className:_(r,"navds-body-short",`navds-body-short--${a}`,cr({spacing:o,truncate:d,weight:g,align:c,visuallyHidden:p,textColor:h}))}))});var t0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const r0=A.forwardRef((e,i)=>{var{className:r,size:a="medium",spacing:s,uppercase:o,as:d="p",truncate:g,weight:c="regular",align:p,visuallyHidden:h,textColor:v}=e,_=t0(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:b}=Me();return Z.createElement(d,Object.assign({},_,{ref:i,className:b(r,"navds-detail",cr({spacing:s,truncate:g,weight:c,align:p,visuallyHidden:h,textColor:v,uppercase:o}),{"navds-detail--small":a==="small"})}))});var a0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const i0=A.forwardRef((e,i)=>{var{children:r,className:a,size:s,spacing:o,as:d="p",showIcon:g=!1}=e,c=a0(e,["children","className","size","spacing","as","showIcon"]);const{cn:p}=Me();return Z.createElement(d,Object.assign({},c,{ref:i,className:p("navds-error-message","navds-label",a,cr({spacing:o}),{"navds-label--small":s==="small","navds-error-message--show-icon":g})}),g&&Z.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},Z.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var s0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Jg=A.forwardRef((e,i)=>{var{level:r="1",size:a,className:s,as:o,spacing:d,align:g,visuallyHidden:c,textColor:p}=e,h=s0(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:v}=Me(),_=o??`h${r}`;return Z.createElement(_,Object.assign({},h,{ref:i,className:v(s,"navds-heading",`navds-heading--${a}`,cr({spacing:d,align:g,visuallyHidden:c,textColor:p}))}))});var l0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};A.forwardRef((e,i)=>{var{className:r,spacing:a,as:s="p"}=e,o=l0(e,["className","spacing","as"]);const{cn:d}=Me();return Z.createElement(s,Object.assign({},o,{ref:i,className:d(r,"navds-ingress",{"navds-typo--spacing":!!a})}))});var o0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const ql=A.forwardRef((e,i)=>{var{className:r,size:a="medium",as:s="label",spacing:o,visuallyHidden:d,textColor:g}=e,c=o0(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:p}=Me();return Z.createElement(s,Object.assign({},c,{ref:i,className:p(r,"navds-label",cr({spacing:o,visuallyHidden:d,textColor:g}),{"navds-label--small":a==="small"})}))});function zr(e,i){const r=Object.entries(e).filter(([a])=>!i.includes(a));return Object.fromEntries(r)}let Nd=0;function u0(e){const[i,r]=A.useState(e),a=e||i;return A.useEffect(()=>{i==null&&(Nd+=1,r(`aksel-id-${Nd}`))},[i]),a}const Od=Z.useId;function di(e){var i;if(Od!==void 0){const r=Od();return e??r.replace(/(:)/g,"")}return(i=u0(e))!==null&&i!==void 0?i:""}function Pd(e,i=[]){const r=A.useRef(e);return A.useEffect(()=>{r.current=e}),A.useCallback((...a)=>{var s;return(s=r.current)===null||s===void 0?void 0:s.call(r,...a)},i)}function Zg({value:e,defaultValue:i,onChange:r}){const a=Pd(r),[s,o]=A.useState(i),d=e!==void 0,g=d?e:s,c=Pd(p=>{const v=typeof p=="function"?p(g):p;d||o(v),a(v)},[d,a,g]);return[g,c]}let Bd=0;function d0(e){const[i,r]=A.useState(e),a=e||i;return A.useEffect(()=>{i==null&&(Bd+=1,r(`aksel-icon-${Bd}`))},[i]),a}const xd=Z.useId;function pt(e){var i;return xd!==void 0?xd().replace(/(:)/g,""):(i=d0(e))!==null&&i!==void 0?i:""}var g0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const f0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=g0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var c0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const m0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=c0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var p0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const h0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=p0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var k0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Ks=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=k0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12",clipRule:"evenodd"}))});var v0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const y0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=v0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var b0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Qg=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=b0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var E0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const T0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=E0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var _0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const w0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=_0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var A0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const qd=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=A0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});function Dl(e,i,{checkForDefaultPrevented:r=!0}={}){return function(s){if(e?.(s),r===!1||!s.defaultPrevented)return i?.(s)}}const[EA,R0]=Hb({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function Vs(e){return(i={})=>{const r=i.width?String(i.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function qr(e){return(i,r)=>{const a=r?.context?String(r.context):"standalone";let s;if(a==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,g=r?.width?String(r.width):d;s=e.formattingValues[g]||e.formattingValues[d]}else{const d=e.defaultWidth,g=r?.width?String(r.width):e.defaultWidth;s=e.values[g]||e.values[d]}const o=e.argumentCallback?e.argumentCallback(i):i;return s[o]}}function Dr(e){return(i,r={})=>{const a=r.width,s=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=i.match(s);if(!o)return null;const d=o[0],g=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(g)?j0(g,v=>v.test(d)):S0(g,v=>v.test(d));let p;p=e.valueCallback?e.valueCallback(c):c,p=r.valueCallback?r.valueCallback(p):p;const h=i.slice(d.length);return{value:p,rest:h}}}function S0(e,i){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&i(e[r]))return r}function j0(e,i){for(let r=0;r<e.length;r++)if(i(e[r]))return r}function I0(e){return(i,r={})=>{const a=i.match(e.matchPattern);if(!a)return null;const s=a[0],o=i.match(e.parsePattern);if(!o)return null;let d=e.valueCallback?e.valueCallback(o[0]):o[0];d=r.valueCallback?r.valueCallback(d):d;const g=i.slice(s.length);return{value:d,rest:g}}}const N0={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},O0=(e,i,r)=>{let a;const s=N0[e];return typeof s=="string"?a=s:i===1?a=s.one:a=s.other.replace("{{count}}",String(i)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+a:a+" siden":a},P0={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},B0={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},x0={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},q0={date:Vs({formats:P0,defaultWidth:"full"}),time:Vs({formats:B0,defaultWidth:"full"}),dateTime:Vs({formats:x0,defaultWidth:"full"})},D0={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},M0=(e,i,r,a)=>D0[e],L0={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},F0={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},C0={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},K0={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},V0={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},H0=(e,i)=>Number(e)+".",G0={ordinalNumber:H0,era:qr({values:L0,defaultWidth:"wide"}),quarter:qr({values:F0,defaultWidth:"wide",argumentCallback:e=>e-1}),month:qr({values:C0,defaultWidth:"wide"}),day:qr({values:K0,defaultWidth:"wide"}),dayPeriod:qr({values:V0,defaultWidth:"wide"})},$0=/^(\d+)\.?/i,U0=/\d+/i,Y0={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},W0={any:[/^f/i,/^e/i]},z0={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},X0={any:[/1/i,/2/i,/3/i,/4/i]},J0={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Z0={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Q0={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},eE={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},nE={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},tE={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},rE={ordinalNumber:I0({matchPattern:$0,parsePattern:U0,valueCallback:e=>parseInt(e,10)}),era:Dr({matchPatterns:Y0,defaultMatchWidth:"wide",parsePatterns:W0,defaultParseWidth:"any"}),quarter:Dr({matchPatterns:z0,defaultMatchWidth:"wide",parsePatterns:X0,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Dr({matchPatterns:J0,defaultMatchWidth:"wide",parsePatterns:Z0,defaultParseWidth:"any"}),day:Dr({matchPatterns:Q0,defaultMatchWidth:"wide",parsePatterns:eE,defaultParseWidth:"any"}),dayPeriod:Dr({matchPatterns:nE,defaultMatchWidth:"any",parsePatterns:tE,defaultParseWidth:"any"})},aE={code:"nb",formatDistance:O0,formatLong:q0,formatRelative:M0,localize:G0,match:rE,options:{weekStartsOn:1,firstWeekContainsDate:4}},iE={global:{dateLocale:aE,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},sE=A.createContext({locale:iE}),ef=()=>A.useContext(sE);var lE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const oE=A.forwardRef((e,i)=>{var r,a,s,{rootElement:o,asChild:d}=e,g=lE(e,["rootElement","asChild"]);const c=fr(!1),p=(r=ef())===null||r===void 0?void 0:r.rootElement,h=(a=o??p)!==null&&a!==void 0?a:(s=globalThis?.document)===null||s===void 0?void 0:s.body,v=d?Wr:"div";return c?h?Id.createPortal(Z.createElement(Gb,{theme:c.theme,asChild:!0,hasBackground:!1,"data-color":c.color},Z.createElement(v,Object.assign({ref:i,"data-aksel-portal":""},g))),h):null:h?Id.createPortal(Z.createElement(v,Object.assign({ref:i,"data-aksel-portal":""},g)),h):null}),or=Math.min,Ft=Math.max,ri=Math.round,za=Math.floor,zn=e=>({x:e,y:e}),uE={left:"right",right:"left",bottom:"top",top:"bottom"},dE={start:"end",end:"start"};function dl(e,i,r){return Ft(e,or(i,r))}function Xr(e,i){return typeof e=="function"?e(i):e}function Ct(e){return e.split("-")[0]}function Jr(e){return e.split("-")[1]}function nf(e){return e==="x"?"y":"x"}function Ml(e){return e==="y"?"height":"width"}function ur(e){return["top","bottom"].includes(Ct(e))?"y":"x"}function Ll(e){return nf(ur(e))}function gE(e,i,r){r===void 0&&(r=!1);const a=Jr(e),s=Ll(e),o=Ml(s);let d=s==="x"?a===(r?"end":"start")?"right":"left":a==="start"?"bottom":"top";return i.reference[o]>i.floating[o]&&(d=ai(d)),[d,ai(d)]}function fE(e){const i=ai(e);return[gl(e),i,gl(i)]}function gl(e){return e.replace(/start|end/g,i=>dE[i])}function cE(e,i,r){const a=["left","right"],s=["right","left"],o=["top","bottom"],d=["bottom","top"];switch(e){case"top":case"bottom":return r?i?s:a:i?a:s;case"left":case"right":return i?o:d;default:return[]}}function mE(e,i,r,a){const s=Jr(e);let o=cE(Ct(e),r==="start",a);return s&&(o=o.map(d=>d+"-"+s),i&&(o=o.concat(o.map(gl)))),o}function ai(e){return e.replace(/left|right|bottom|top/g,i=>uE[i])}function pE(e){return{top:0,right:0,bottom:0,left:0,...e}}function tf(e){return typeof e!="number"?pE(e):{top:e,right:e,bottom:e,left:e}}function ii(e){const{x:i,y:r,width:a,height:s}=e;return{width:a,height:s,top:r,left:i,right:i+a,bottom:r+s,x:i,y:r}}function Dd(e,i,r){let{reference:a,floating:s}=e;const o=ur(i),d=Ll(i),g=Ml(d),c=Ct(i),p=o==="y",h=a.x+a.width/2-s.width/2,v=a.y+a.height/2-s.height/2,_=a[g]/2-s[g]/2;let b;switch(c){case"top":b={x:h,y:a.y-s.height};break;case"bottom":b={x:h,y:a.y+a.height};break;case"right":b={x:a.x+a.width,y:v};break;case"left":b={x:a.x-s.width,y:v};break;default:b={x:a.x,y:a.y}}switch(Jr(i)){case"start":b[d]-=_*(r&&p?-1:1);break;case"end":b[d]+=_*(r&&p?-1:1);break}return b}const hE=async(e,i,r)=>{const{placement:a="bottom",strategy:s="absolute",middleware:o=[],platform:d}=r,g=o.filter(Boolean),c=await(d.isRTL==null?void 0:d.isRTL(i));let p=await d.getElementRects({reference:e,floating:i,strategy:s}),{x:h,y:v}=Dd(p,a,c),_=a,b={},O=0;for(let T=0;T<g.length;T++){const{name:E,fn:R}=g[T],{x:q,y:S,data:W,reset:I}=await R({x:h,y:v,initialPlacement:a,placement:_,strategy:s,middlewareData:b,rects:p,platform:d,elements:{reference:e,floating:i}});h=q??h,v=S??v,b={...b,[E]:{...b[E],...W}},I&&O<=50&&(O++,typeof I=="object"&&(I.placement&&(_=I.placement),I.rects&&(p=I.rects===!0?await d.getElementRects({reference:e,floating:i,strategy:s}):I.rects),{x:h,y:v}=Dd(p,_,c)),T=-1)}return{x:h,y:v,placement:_,strategy:s,middlewareData:b}};async function rf(e,i){var r;i===void 0&&(i={});const{x:a,y:s,platform:o,rects:d,elements:g,strategy:c}=e,{boundary:p="clippingAncestors",rootBoundary:h="viewport",elementContext:v="floating",altBoundary:_=!1,padding:b=0}=Xr(i,e),O=tf(b),E=g[_?v==="floating"?"reference":"floating":v],R=ii(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(E)))==null||r?E:E.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(g.floating)),boundary:p,rootBoundary:h,strategy:c})),q=v==="floating"?{x:a,y:s,width:d.floating.width,height:d.floating.height}:d.reference,S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(g.floating)),W=await(o.isElement==null?void 0:o.isElement(S))?await(o.getScale==null?void 0:o.getScale(S))||{x:1,y:1}:{x:1,y:1},I=ii(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:g,rect:q,offsetParent:S,strategy:c}):q);return{top:(R.top-I.top+O.top)/W.y,bottom:(I.bottom-R.bottom+O.bottom)/W.y,left:(R.left-I.left+O.left)/W.x,right:(I.right-R.right+O.right)/W.x}}const kE=e=>({name:"arrow",options:e,async fn(i){const{x:r,y:a,placement:s,rects:o,platform:d,elements:g,middlewareData:c}=i,{element:p,padding:h=0}=Xr(e,i)||{};if(p==null)return{};const v=tf(h),_={x:r,y:a},b=Ll(s),O=Ml(b),T=await d.getDimensions(p),E=b==="y",R=E?"top":"left",q=E?"bottom":"right",S=E?"clientHeight":"clientWidth",W=o.reference[O]+o.reference[b]-_[b]-o.floating[O],I=_[b]-o.reference[b],$=await(d.getOffsetParent==null?void 0:d.getOffsetParent(p));let F=$?$[S]:0;(!F||!await(d.isElement==null?void 0:d.isElement($)))&&(F=g.floating[S]||o.floating[O]);const K=W/2-I/2,ne=F/2-T[O]/2-1,Q=or(v[R],ne),z=or(v[q],ne),te=Q,G=F-T[O]-z,P=F/2-T[O]/2+K,x=dl(te,P,G),D=!c.arrow&&Jr(s)!=null&&P!==x&&o.reference[O]/2-(P<te?Q:z)-T[O]/2<0,M=D?P<te?P-te:P-G:0;return{[b]:_[b]+M,data:{[b]:x,centerOffset:P-x-M,...D&&{alignmentOffset:M}},reset:D}}}),vE=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(i){var r,a;const{placement:s,middlewareData:o,rects:d,initialPlacement:g,platform:c,elements:p}=i,{mainAxis:h=!0,crossAxis:v=!0,fallbackPlacements:_,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:O="none",flipAlignment:T=!0,...E}=Xr(e,i);if((r=o.arrow)!=null&&r.alignmentOffset)return{};const R=Ct(s),q=ur(g),S=Ct(g)===g,W=await(c.isRTL==null?void 0:c.isRTL(p.floating)),I=_||(S||!T?[ai(g)]:fE(g)),$=O!=="none";!_&&$&&I.push(...mE(g,T,O,W));const F=[g,...I],K=await rf(i,E),ne=[];let Q=((a=o.flip)==null?void 0:a.overflows)||[];if(h&&ne.push(K[R]),v){const P=gE(s,d,W);ne.push(K[P[0]],K[P[1]])}if(Q=[...Q,{placement:s,overflows:ne}],!ne.every(P=>P<=0)){var z,te;const P=(((z=o.flip)==null?void 0:z.index)||0)+1,x=F[P];if(x)return{data:{index:P,overflows:Q},reset:{placement:x}};let D=(te=Q.filter(M=>M.overflows[0]<=0).sort((M,B)=>M.overflows[1]-B.overflows[1])[0])==null?void 0:te.placement;if(!D)switch(b){case"bestFit":{var G;const M=(G=Q.filter(B=>{if($){const C=ur(B.placement);return C===q||C==="y"}return!0}).map(B=>[B.placement,B.overflows.filter(C=>C>0).reduce((C,X)=>C+X,0)]).sort((B,C)=>B[1]-C[1])[0])==null?void 0:G[0];M&&(D=M);break}case"initialPlacement":D=g;break}if(s!==D)return{reset:{placement:D}}}return{}}}};async function yE(e,i){const{placement:r,platform:a,elements:s}=e,o=await(a.isRTL==null?void 0:a.isRTL(s.floating)),d=Ct(r),g=Jr(r),c=ur(r)==="y",p=["left","top"].includes(d)?-1:1,h=o&&c?-1:1,v=Xr(i,e);let{mainAxis:_,crossAxis:b,alignmentAxis:O}=typeof v=="number"?{mainAxis:v,crossAxis:0,alignmentAxis:null}:{mainAxis:v.mainAxis||0,crossAxis:v.crossAxis||0,alignmentAxis:v.alignmentAxis};return g&&typeof O=="number"&&(b=g==="end"?O*-1:O),c?{x:b*h,y:_*p}:{x:_*p,y:b*h}}const bE=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(i){var r,a;const{x:s,y:o,placement:d,middlewareData:g}=i,c=await yE(i,e);return d===((r=g.offset)==null?void 0:r.placement)&&(a=g.arrow)!=null&&a.alignmentOffset?{}:{x:s+c.x,y:o+c.y,data:{...c,placement:d}}}}},EE=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(i){const{x:r,y:a,placement:s}=i,{mainAxis:o=!0,crossAxis:d=!1,limiter:g={fn:E=>{let{x:R,y:q}=E;return{x:R,y:q}}},...c}=Xr(e,i),p={x:r,y:a},h=await rf(i,c),v=ur(Ct(s)),_=nf(v);let b=p[_],O=p[v];if(o){const E=_==="y"?"top":"left",R=_==="y"?"bottom":"right",q=b+h[E],S=b-h[R];b=dl(q,b,S)}if(d){const E=v==="y"?"top":"left",R=v==="y"?"bottom":"right",q=O+h[E],S=O-h[R];O=dl(q,O,S)}const T=g.fn({...i,[_]:b,[v]:O});return{...T,data:{x:T.x-r,y:T.y-a,enabled:{[_]:o,[v]:d}}}}}};function gi(){return typeof window<"u"}function mr(e){return af(e)?(e.nodeName||"").toLowerCase():"#document"}function pn(e){var i;return(e==null||(i=e.ownerDocument)==null?void 0:i.defaultView)||window}function Zn(e){var i;return(i=(af(e)?e.ownerDocument:e.document)||window.document)==null?void 0:i.documentElement}function af(e){return gi()?e instanceof Node||e instanceof pn(e).Node:!1}function Fe(e){return gi()?e instanceof Element||e instanceof pn(e).Element:!1}function _n(e){return gi()?e instanceof HTMLElement||e instanceof pn(e).HTMLElement:!1}function si(e){return!gi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof pn(e).ShadowRoot}function Zr(e){const{overflow:i,overflowX:r,overflowY:a,display:s}=Bn(e);return/auto|scroll|overlay|hidden|clip/.test(i+a+r)&&!["inline","contents"].includes(s)}function TE(e){return["table","td","th"].includes(mr(e))}function fi(e){return[":popover-open",":modal"].some(i=>{try{return e.matches(i)}catch{return!1}})}function Fl(e){const i=ci(),r=Fe(e)?Bn(e):e;return["transform","translate","scale","rotate","perspective"].some(a=>r[a]?r[a]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!i&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!i&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(a=>(r.willChange||"").includes(a))||["paint","layout","strict","content"].some(a=>(r.contain||"").includes(a))}function _E(e){let i=ct(e);for(;_n(i)&&!ft(i);){if(Fl(i))return i;if(fi(i))return null;i=ct(i)}return null}function ci(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ft(e){return["html","body","#document"].includes(mr(e))}function Bn(e){return pn(e).getComputedStyle(e)}function mi(e){return Fe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ct(e){if(mr(e)==="html")return e;const i=e.assignedSlot||e.parentNode||si(e)&&e.host||Zn(e);return si(i)?i.host:i}function sf(e){const i=ct(e);return ft(i)?e.ownerDocument?e.ownerDocument.body:e.body:_n(i)&&Zr(i)?i:sf(i)}function At(e,i,r){var a;i===void 0&&(i=[]),r===void 0&&(r=!0);const s=sf(e),o=s===((a=e.ownerDocument)==null?void 0:a.body),d=pn(s);if(o){const g=fl(d);return i.concat(d,d.visualViewport||[],Zr(s)?s:[],g&&r?At(g):[])}return i.concat(s,At(s,[],r))}function fl(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function lf(e){const i=Bn(e);let r=parseFloat(i.width)||0,a=parseFloat(i.height)||0;const s=_n(e),o=s?e.offsetWidth:r,d=s?e.offsetHeight:a,g=ri(r)!==o||ri(a)!==d;return g&&(r=o,a=d),{width:r,height:a,$:g}}function Cl(e){return Fe(e)?e:e.contextElement}function ir(e){const i=Cl(e);if(!_n(i))return zn(1);const r=i.getBoundingClientRect(),{width:a,height:s,$:o}=lf(i);let d=(o?ri(r.width):r.width)/a,g=(o?ri(r.height):r.height)/s;return(!d||!Number.isFinite(d))&&(d=1),(!g||!Number.isFinite(g))&&(g=1),{x:d,y:g}}const wE=zn(0);function of(e){const i=pn(e);return!ci()||!i.visualViewport?wE:{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function AE(e,i,r){return i===void 0&&(i=!1),!r||i&&r!==pn(e)?!1:i}function Kt(e,i,r,a){i===void 0&&(i=!1),r===void 0&&(r=!1);const s=e.getBoundingClientRect(),o=Cl(e);let d=zn(1);i&&(a?Fe(a)&&(d=ir(a)):d=ir(e));const g=AE(o,r,a)?of(o):zn(0);let c=(s.left+g.x)/d.x,p=(s.top+g.y)/d.y,h=s.width/d.x,v=s.height/d.y;if(o){const _=pn(o),b=a&&Fe(a)?pn(a):a;let O=_,T=fl(O);for(;T&&a&&b!==O;){const E=ir(T),R=T.getBoundingClientRect(),q=Bn(T),S=R.left+(T.clientLeft+parseFloat(q.paddingLeft))*E.x,W=R.top+(T.clientTop+parseFloat(q.paddingTop))*E.y;c*=E.x,p*=E.y,h*=E.x,v*=E.y,c+=S,p+=W,O=pn(T),T=fl(O)}}return ii({width:h,height:v,x:c,y:p})}function Kl(e,i){const r=mi(e).scrollLeft;return i?i.left+r:Kt(Zn(e)).left+r}function uf(e,i,r){r===void 0&&(r=!1);const a=e.getBoundingClientRect(),s=a.left+i.scrollLeft-(r?0:Kl(e,a)),o=a.top+i.scrollTop;return{x:s,y:o}}function RE(e){let{elements:i,rect:r,offsetParent:a,strategy:s}=e;const o=s==="fixed",d=Zn(a),g=i?fi(i.floating):!1;if(a===d||g&&o)return r;let c={scrollLeft:0,scrollTop:0},p=zn(1);const h=zn(0),v=_n(a);if((v||!v&&!o)&&((mr(a)!=="body"||Zr(d))&&(c=mi(a)),_n(a))){const b=Kt(a);p=ir(a),h.x=b.x+a.clientLeft,h.y=b.y+a.clientTop}const _=d&&!v&&!o?uf(d,c,!0):zn(0);return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-c.scrollLeft*p.x+h.x+_.x,y:r.y*p.y-c.scrollTop*p.y+h.y+_.y}}function SE(e){return Array.from(e.getClientRects())}function jE(e){const i=Zn(e),r=mi(e),a=e.ownerDocument.body,s=Ft(i.scrollWidth,i.clientWidth,a.scrollWidth,a.clientWidth),o=Ft(i.scrollHeight,i.clientHeight,a.scrollHeight,a.clientHeight);let d=-r.scrollLeft+Kl(e);const g=-r.scrollTop;return Bn(a).direction==="rtl"&&(d+=Ft(i.clientWidth,a.clientWidth)-s),{width:s,height:o,x:d,y:g}}function IE(e,i){const r=pn(e),a=Zn(e),s=r.visualViewport;let o=a.clientWidth,d=a.clientHeight,g=0,c=0;if(s){o=s.width,d=s.height;const p=ci();(!p||p&&i==="fixed")&&(g=s.offsetLeft,c=s.offsetTop)}return{width:o,height:d,x:g,y:c}}function NE(e,i){const r=Kt(e,!0,i==="fixed"),a=r.top+e.clientTop,s=r.left+e.clientLeft,o=_n(e)?ir(e):zn(1),d=e.clientWidth*o.x,g=e.clientHeight*o.y,c=s*o.x,p=a*o.y;return{width:d,height:g,x:c,y:p}}function Md(e,i,r){let a;if(i==="viewport")a=IE(e,r);else if(i==="document")a=jE(Zn(e));else if(Fe(i))a=NE(i,r);else{const s=of(e);a={x:i.x-s.x,y:i.y-s.y,width:i.width,height:i.height}}return ii(a)}function df(e,i){const r=ct(e);return r===i||!Fe(r)||ft(r)?!1:Bn(r).position==="fixed"||df(r,i)}function OE(e,i){const r=i.get(e);if(r)return r;let a=At(e,[],!1).filter(g=>Fe(g)&&mr(g)!=="body"),s=null;const o=Bn(e).position==="fixed";let d=o?ct(e):e;for(;Fe(d)&&!ft(d);){const g=Bn(d),c=Fl(d);!c&&g.position==="fixed"&&(s=null),(o?!c&&!s:!c&&g.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Zr(d)&&!c&&df(e,d))?a=a.filter(h=>h!==d):s=g,d=ct(d)}return i.set(e,a),a}function PE(e){let{element:i,boundary:r,rootBoundary:a,strategy:s}=e;const d=[...r==="clippingAncestors"?fi(i)?[]:OE(i,this._c):[].concat(r),a],g=d[0],c=d.reduce((p,h)=>{const v=Md(i,h,s);return p.top=Ft(v.top,p.top),p.right=or(v.right,p.right),p.bottom=or(v.bottom,p.bottom),p.left=Ft(v.left,p.left),p},Md(i,g,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function BE(e){const{width:i,height:r}=lf(e);return{width:i,height:r}}function xE(e,i,r){const a=_n(i),s=Zn(i),o=r==="fixed",d=Kt(e,!0,o,i);let g={scrollLeft:0,scrollTop:0};const c=zn(0);if(a||!a&&!o)if((mr(i)!=="body"||Zr(s))&&(g=mi(i)),a){const _=Kt(i,!0,o,i);c.x=_.x+i.clientLeft,c.y=_.y+i.clientTop}else s&&(c.x=Kl(s));const p=s&&!a&&!o?uf(s,g):zn(0),h=d.left+g.scrollLeft-c.x-p.x,v=d.top+g.scrollTop-c.y-p.y;return{x:h,y:v,width:d.width,height:d.height}}function Hs(e){return Bn(e).position==="static"}function Ld(e,i){if(!_n(e)||Bn(e).position==="fixed")return null;if(i)return i(e);let r=e.offsetParent;return Zn(e)===r&&(r=r.ownerDocument.body),r}function gf(e,i){const r=pn(e);if(fi(e))return r;if(!_n(e)){let s=ct(e);for(;s&&!ft(s);){if(Fe(s)&&!Hs(s))return s;s=ct(s)}return r}let a=Ld(e,i);for(;a&&TE(a)&&Hs(a);)a=Ld(a,i);return a&&ft(a)&&Hs(a)&&!Fl(a)?r:a||_E(e)||r}const qE=async function(e){const i=this.getOffsetParent||gf,r=this.getDimensions,a=await r(e.floating);return{reference:xE(e.reference,await i(e.floating),e.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function DE(e){return Bn(e).direction==="rtl"}const ME={convertOffsetParentRelativeRectToViewportRelativeRect:RE,getDocumentElement:Zn,getClippingRect:PE,getOffsetParent:gf,getElementRects:qE,getClientRects:SE,getDimensions:BE,getScale:ir,isElement:Fe,isRTL:DE};function ff(e,i){return e.x===i.x&&e.y===i.y&&e.width===i.width&&e.height===i.height}function LE(e,i){let r=null,a;const s=Zn(e);function o(){var g;clearTimeout(a),(g=r)==null||g.disconnect(),r=null}function d(g,c){g===void 0&&(g=!1),c===void 0&&(c=1),o();const p=e.getBoundingClientRect(),{left:h,top:v,width:_,height:b}=p;if(g||i(),!_||!b)return;const O=za(v),T=za(s.clientWidth-(h+_)),E=za(s.clientHeight-(v+b)),R=za(h),S={rootMargin:-O+"px "+-T+"px "+-E+"px "+-R+"px",threshold:Ft(0,or(1,c))||1};let W=!0;function I($){const F=$[0].intersectionRatio;if(F!==c){if(!W)return d();F?d(!1,F):a=setTimeout(()=>{d(!1,1e-7)},1e3)}F===1&&!ff(p,e.getBoundingClientRect())&&d(),W=!1}try{r=new IntersectionObserver(I,{...S,root:s.ownerDocument})}catch{r=new IntersectionObserver(I,S)}r.observe(e)}return d(!0),o}function Fd(e,i,r,a){a===void 0&&(a={});const{ancestorScroll:s=!0,ancestorResize:o=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:g=typeof IntersectionObserver=="function",animationFrame:c=!1}=a,p=Cl(e),h=s||o?[...p?At(p):[],...At(i)]:[];h.forEach(R=>{s&&R.addEventListener("scroll",r,{passive:!0}),o&&R.addEventListener("resize",r)});const v=p&&g?LE(p,r):null;let _=-1,b=null;d&&(b=new ResizeObserver(R=>{let[q]=R;q&&q.target===p&&b&&(b.unobserve(i),cancelAnimationFrame(_),_=requestAnimationFrame(()=>{var S;(S=b)==null||S.observe(i)})),r()}),p&&!c&&b.observe(p),b.observe(i));let O,T=c?Kt(e):null;c&&E();function E(){const R=Kt(e);T&&!ff(T,R)&&r(),T=R,O=requestAnimationFrame(E)}return r(),()=>{var R;h.forEach(q=>{s&&q.removeEventListener("scroll",r),o&&q.removeEventListener("resize",r)}),v?.(),(R=b)==null||R.disconnect(),b=null,c&&cancelAnimationFrame(O)}}const FE=bE,CE=EE,KE=vE,Cd=kE,VE=(e,i,r)=>{const a=new Map,s={platform:ME,...r},o={...s.platform,_c:a};return hE(e,i,{...s,platform:o})};var ei=typeof document<"u"?A.useLayoutEffect:A.useEffect;function li(e,i){if(e===i)return!0;if(typeof e!=typeof i)return!1;if(typeof e=="function"&&e.toString()===i.toString())return!0;let r,a,s;if(e&&i&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==i.length)return!1;for(a=r;a--!==0;)if(!li(e[a],i[a]))return!1;return!0}if(s=Object.keys(e),r=s.length,r!==Object.keys(i).length)return!1;for(a=r;a--!==0;)if(!{}.hasOwnProperty.call(i,s[a]))return!1;for(a=r;a--!==0;){const o=s[a];if(!(o==="_owner"&&e.$$typeof)&&!li(e[o],i[o]))return!1}return!0}return e!==e&&i!==i}function cf(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Kd(e,i){const r=cf(e);return Math.round(i*r)/r}function Gs(e){const i=A.useRef(e);return ei(()=>{i.current=e}),i}function HE(e){e===void 0&&(e={});const{placement:i="bottom",strategy:r="absolute",middleware:a=[],platform:s,elements:{reference:o,floating:d}={},transform:g=!0,whileElementsMounted:c,open:p}=e,[h,v]=A.useState({x:0,y:0,strategy:r,placement:i,middlewareData:{},isPositioned:!1}),[_,b]=A.useState(a);li(_,a)||b(a);const[O,T]=A.useState(null),[E,R]=A.useState(null),q=A.useCallback(B=>{B!==$.current&&($.current=B,T(B))},[]),S=A.useCallback(B=>{B!==F.current&&(F.current=B,R(B))},[]),W=o||O,I=d||E,$=A.useRef(null),F=A.useRef(null),K=A.useRef(h),ne=c!=null,Q=Gs(c),z=Gs(s),te=Gs(p),G=A.useCallback(()=>{if(!$.current||!F.current)return;const B={placement:i,strategy:r,middleware:_};z.current&&(B.platform=z.current),VE($.current,F.current,B).then(C=>{const X={...C,isPositioned:te.current!==!1};P.current&&!li(K.current,X)&&(K.current=X,zg.flushSync(()=>{v(X)}))})},[_,i,r,z,te]);ei(()=>{p===!1&&K.current.isPositioned&&(K.current.isPositioned=!1,v(B=>({...B,isPositioned:!1})))},[p]);const P=A.useRef(!1);ei(()=>(P.current=!0,()=>{P.current=!1}),[]),ei(()=>{if(W&&($.current=W),I&&(F.current=I),W&&I){if(Q.current)return Q.current(W,I,G);G()}},[W,I,G,Q,ne]);const x=A.useMemo(()=>({reference:$,floating:F,setReference:q,setFloating:S}),[q,S]),D=A.useMemo(()=>({reference:W,floating:I}),[W,I]),M=A.useMemo(()=>{const B={position:r,left:0,top:0};if(!D.floating)return B;const C=Kd(D.floating,h.x),X=Kd(D.floating,h.y);return g?{...B,transform:"translate("+C+"px, "+X+"px)",...cf(D.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:C,top:X}},[r,g,D.floating,h.x,h.y]);return A.useMemo(()=>({...h,update:G,refs:x,elements:D,floatingStyles:M}),[h,G,x,D,M])}const GE=e=>{function i(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:a,padding:s}=typeof e=="function"?e(r):e;return a&&i(a)?a.current!=null?Cd({element:a.current,padding:s}).fn(r):{}:a?Cd({element:a,padding:s}).fn(r):{}}}},$E=(e,i)=>({...FE(e),options:[e,i]}),UE=(e,i)=>({...CE(e),options:[e,i]}),YE=(e,i)=>({...KE(e),options:[e,i]}),WE=(e,i)=>({...GE(e),options:[e,i]}),Vd=/(\w+)/g;function zE(e,i){const r=Array.isArray(e)?e:XE(e);for(const a of i){if(!a)continue;let s=a;for(let o=0;o<r.length;o++){const d=s[r[o]];d!==void 0&&(s=d)}if(typeof s=="string")return s}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function XE(e){const i=[];let r=Vd.exec(e);for(;r;){const[,a,s]=r;i.push(a||s),r=Vd.exec(e)}return i}const JE=/{[^}]*}/g;function pi(e,...i){const r=ef(),a=r.translations||[],s=[...i,...Array.isArray(a)?a.map(d=>d[e]):[a[e]],r.locale[e]];return(d,g)=>{const c=zE(d,s);return g?c.replace(JE,p=>{const h=p.substring(1,p.length-1);if(g[h]===void 0){const v=JSON.stringify(g);throw new Error(`Error translating key '${d}'. No replacement syntax ({}) found for key '${h}'. The following replacements were passed: '${v}'`)}return g[h]}):c}}var ZE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const QE=A.forwardRef((e,i)=>{var{className:r,size:a="medium",title:s,transparent:o=!1,variant:d="neutral",id:g,"data-color":c}=e,p=ZE(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:h}=Me(),v=di(),_=pi("Loader");return Z.createElement("svg",Object.assign({"aria-labelledby":g??`loader-${v}`,ref:i,className:h("navds-loader",r,`navds-loader--${a}`,`navds-loader--${d}`,{"navds-loader--transparent":o}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":c??e1(d)},zr(p,["children"]),{"data-variant":d}),Z.createElement("title",{id:g??`loader-${v}`},s||_("title")),Z.createElement("circle",{className:h("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),Z.createElement("circle",{className:h("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function e1(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var n1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Vl=A.forwardRef((e,i)=>{var{as:r="button",variant:a="primary",className:s,children:o,size:d="medium",loading:g=!1,disabled:c,icon:p,iconPosition:h="left",onKeyUp:v,"data-color":_}=e,b=n1(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:O}=Me(),T=c||g?zr(b,["href"]):b,E=R=>{R.key===" "&&!c&&!g&&R.currentTarget.click()};return Z.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":_??t1(a),"data-variant":r1(a)},T,{ref:i,onKeyUp:Dl(v,E),className:O(s,"navds-button",`navds-button--${a}`,`navds-button--${d}`,{"navds-button--loading":g,"navds-button--icon-only":!!p&&!o,"navds-button--disabled":c??g}),disabled:c??g?!0:void 0}),p&&h==="left"&&Z.createElement("span",{className:O("navds-button__icon")},p),g&&Z.createElement(QE,{size:d}),o&&Z.createElement(ql,{as:"span",size:d==="medium"?"medium":"small"},o),p&&h==="right"&&Z.createElement("span",{className:O("navds-button__icon")},p))});function t1(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function r1(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}function a1(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function i1(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(i=>{let{brand:r,version:a}=i;return r+"/"+a}).join(" "):navigator.userAgent}function s1(){return/apple/i.test(navigator.vendor)}function l1(){return a1().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function o1(){return i1().includes("jsdom/")}const u1="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Hd(e){let i=e.activeElement;for(;((r=i)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;i=i.shadowRoot.activeElement}return i}function Ur(e,i){if(!e||!i)return!1;const r=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(r&&si(r)){let a=i;for(;a;){if(e===a)return!0;a=a.parentNode||a.host}}return!1}function ar(e){return"composedPath"in e?e.composedPath()[0]:e.target}function $s(e,i){if(i==null)return!1;if("composedPath"in e)return e.composedPath().includes(i);const r=e;return r.target!=null&&i.contains(r.target)}function d1(e){return e.matches("html,body")}function Lt(e){return e?.ownerDocument||document}function g1(e){return _n(e)&&e.matches(u1)}function f1(e){if(!e||o1())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function Us(e,i,r){r===void 0&&(r=!0);let a=e.filter(o=>{var d;return o.parentId===i&&((d=o.context)==null?void 0:d.open)}),s=a;for(;s.length;)s=r?e.filter(o=>{var d;return(d=s)==null?void 0:d.some(g=>{var c;return o.parentId===g.id&&((c=o.context)==null?void 0:c.open)})}):e,a=a.concat(s);return a}function c1(e){return"nativeEvent"in e}function cl(e,i){const r=["mouse","pen"];return r.push("",void 0),r.includes(e)}var dr=typeof document<"u"?A.useLayoutEffect:A.useEffect;const m1={...$g};function Xa(e){const i=A.useRef(e);return dr(()=>{i.current=e}),i}const p1=m1.useInsertionEffect,h1=p1||(e=>e());function dt(e){const i=A.useRef(()=>{});return h1(()=>{i.current=e}),A.useCallback(function(){for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return i.current==null?void 0:i.current(...a)},[])}const k1="data-floating-ui-focusable",Gd="active",$d="selected",v1={...$g};let Ud=!1,y1=0;const Yd=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+y1++;function b1(){const[e,i]=A.useState(()=>Ud?Yd():void 0);return dr(()=>{e==null&&i(Yd())},[]),A.useEffect(()=>{Ud=!0},[]),e}const E1=v1.useId,T1=E1||b1;function _1(){const e=new Map;return{emit(i,r){var a;(a=e.get(i))==null||a.forEach(s=>s(r))},on(i,r){e.has(i)||e.set(i,new Set),e.get(i).add(r)},off(i,r){var a;(a=e.get(i))==null||a.delete(r)}}}const w1=A.createContext(null),A1=A.createContext(null),mf=()=>{var e;return((e=A.useContext(w1))==null?void 0:e.id)||null},Hl=()=>A.useContext(A1);function Gl(e){return"data-floating-ui-"+e}function Pn(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Wd=Gl("safe-polygon");function Ys(e,i,r){if(r&&!cl(r))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const a=e();return typeof a=="number"?a:a?.[i]}return e?.[i]}function Ws(e){return typeof e=="function"?e():e}function R1(e,i){i===void 0&&(i={});const{open:r,onOpenChange:a,dataRef:s,events:o,elements:d}=e,{enabled:g=!0,delay:c=0,handleClose:p=null,mouseOnly:h=!1,restMs:v=0,move:_=!0}=i,b=Hl(),O=mf(),T=Xa(p),E=Xa(c),R=Xa(r),q=Xa(v),S=A.useRef(),W=A.useRef(-1),I=A.useRef(),$=A.useRef(-1),F=A.useRef(!0),K=A.useRef(!1),ne=A.useRef(()=>{}),Q=A.useRef(!1),z=A.useCallback(()=>{var M;const B=(M=s.current.openEvent)==null?void 0:M.type;return B?.includes("mouse")&&B!=="mousedown"},[s]);A.useEffect(()=>{if(!g)return;function M(B){let{open:C}=B;C||(Pn(W),Pn($),F.current=!0,Q.current=!1)}return o.on("openchange",M),()=>{o.off("openchange",M)}},[g,o]),A.useEffect(()=>{if(!g||!T.current||!r)return;function M(C){z()&&a(!1,C,"hover")}const B=Lt(d.floating).documentElement;return B.addEventListener("mouseleave",M),()=>{B.removeEventListener("mouseleave",M)}},[d.floating,r,a,g,T,z]);const te=A.useCallback(function(M,B,C){B===void 0&&(B=!0),C===void 0&&(C="hover");const X=Ys(E.current,"close",S.current);X&&!I.current?(Pn(W),W.current=window.setTimeout(()=>a(!1,M,C),X)):B&&(Pn(W),a(!1,M,C))},[E,a]),G=dt(()=>{ne.current(),I.current=void 0}),P=dt(()=>{if(K.current){const M=Lt(d.floating).body;M.style.pointerEvents="",M.removeAttribute(Wd),K.current=!1}}),x=dt(()=>s.current.openEvent?["click","mousedown"].includes(s.current.openEvent.type):!1);A.useEffect(()=>{if(!g)return;function M(re){if(Pn(W),F.current=!1,h&&!cl(S.current)||Ws(q.current)>0&&!Ys(E.current,"open"))return;const oe=Ys(E.current,"open",S.current);oe?W.current=window.setTimeout(()=>{R.current||a(!0,re,"hover")},oe):r||a(!0,re,"hover")}function B(re){if(x()){P();return}ne.current();const oe=Lt(d.floating);if(Pn($),Q.current=!1,T.current&&s.current.floatingContext){r||Pn(W),I.current=T.current({...s.current.floatingContext,tree:b,x:re.clientX,y:re.clientY,onClose(){P(),G(),x()||te(re,!0,"safe-polygon")}});const Ee=I.current;oe.addEventListener("mousemove",Ee),ne.current=()=>{oe.removeEventListener("mousemove",Ee)};return}(S.current==="touch"?!Ur(d.floating,re.relatedTarget):!0)&&te(re)}function C(re){x()||s.current.floatingContext&&(T.current==null||T.current({...s.current.floatingContext,tree:b,x:re.clientX,y:re.clientY,onClose(){P(),G(),x()||te(re)}})(re))}function X(){Pn(W)}function ee(re){x()||te(re,!1)}if(Fe(d.domReference)){const re=d.domReference,oe=d.floating;return r&&re.addEventListener("mouseleave",C),_&&re.addEventListener("mousemove",M,{once:!0}),re.addEventListener("mouseenter",M),re.addEventListener("mouseleave",B),oe&&(oe.addEventListener("mouseleave",C),oe.addEventListener("mouseenter",X),oe.addEventListener("mouseleave",ee)),()=>{r&&re.removeEventListener("mouseleave",C),_&&re.removeEventListener("mousemove",M),re.removeEventListener("mouseenter",M),re.removeEventListener("mouseleave",B),oe&&(oe.removeEventListener("mouseleave",C),oe.removeEventListener("mouseenter",X),oe.removeEventListener("mouseleave",ee))}}},[d,g,e,h,_,te,G,P,a,r,R,b,E,T,s,x,q]),dr(()=>{var M;if(g&&r&&(M=T.current)!=null&&M.__options.blockPointerEvents&&z()){K.current=!0;const C=d.floating;if(Fe(d.domReference)&&C){var B;const X=Lt(d.floating).body;X.setAttribute(Wd,"");const ee=d.domReference,re=b==null||(B=b.nodesRef.current.find(oe=>oe.id===O))==null||(B=B.context)==null?void 0:B.elements.floating;return re&&(re.style.pointerEvents=""),X.style.pointerEvents="none",ee.style.pointerEvents="auto",C.style.pointerEvents="auto",()=>{X.style.pointerEvents="",ee.style.pointerEvents="",C.style.pointerEvents=""}}}},[g,r,O,d,b,T,z]),dr(()=>{r||(S.current=void 0,Q.current=!1,G(),P())},[r,G,P]),A.useEffect(()=>()=>{G(),Pn(W),Pn($),P()},[g,d.domReference,G,P]);const D=A.useMemo(()=>{function M(B){S.current=B.pointerType}return{onPointerDown:M,onPointerEnter:M,onMouseMove(B){const{nativeEvent:C}=B;function X(){!F.current&&!R.current&&a(!0,C,"hover")}h&&!cl(S.current)||r||Ws(q.current)===0||Q.current&&B.movementX**2+B.movementY**2<2||(Pn($),S.current==="touch"?X():(Q.current=!0,$.current=window.setTimeout(X,Ws(q.current))))}}},[h,a,r,R,q]);return A.useMemo(()=>g?{reference:D}:{},[g,D])}function zs(e,i){if(!e||!i)return!1;const r=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(r&&si(r)){let a=i;for(;a;){if(e===a)return!0;a=a.parentNode||a.host}}return!1}function S1(e){return"composedPath"in e?e.composedPath()[0]:e.target}const j1={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},I1={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},zd=e=>{var i,r;return{escapeKey:typeof e=="boolean"?e:(i=e?.escapeKey)!=null?i:!1,outsidePress:typeof e=="boolean"?e:(r=e?.outsidePress)!=null?r:!0}};function N1(e,i){i===void 0&&(i={});const{open:r,onOpenChange:a,elements:s,dataRef:o}=e,{enabled:d=!0,escapeKey:g=!0,outsidePress:c=!0,outsidePressEvent:p="pointerdown",referencePress:h=!1,referencePressEvent:v="pointerdown",ancestorScroll:_=!1,bubbles:b,capture:O}=i,T=Hl(),E=dt(typeof c=="function"?c:()=>!1),R=typeof c=="function"?E:c,q=A.useRef(!1),S=A.useRef(!1),{escapeKey:W,outsidePress:I}=zd(b),{escapeKey:$,outsidePress:F}=zd(O),K=A.useRef(!1),ne=dt(x=>{var D;if(!r||!d||!g||x.key!=="Escape"||K.current)return;const M=(D=o.current.floatingContext)==null?void 0:D.nodeId,B=T?Us(T.nodesRef.current,M):[];if(!W&&(x.stopPropagation(),B.length>0)){let C=!0;if(B.forEach(X=>{var ee;if((ee=X.context)!=null&&ee.open&&!X.context.dataRef.current.__escapeKeyBubbles){C=!1;return}}),!C)return}a(!1,c1(x)?x.nativeEvent:x,"escape-key")}),Q=dt(x=>{var D;const M=()=>{var B;ne(x),(B=ar(x))==null||B.removeEventListener("keydown",M)};(D=ar(x))==null||D.addEventListener("keydown",M)}),z=dt(x=>{var D;const M=q.current;q.current=!1;const B=S.current;if(S.current=!1,p==="click"&&B||M||typeof R=="function"&&!R(x))return;const C=ar(x),X="["+Gl("inert")+"]",ee=Lt(s.floating).querySelectorAll(X);let re=Fe(C)?C:null;for(;re&&!ft(re);){const Re=ct(re);if(ft(Re)||!Fe(Re))break;re=Re}if(ee.length&&Fe(C)&&!d1(C)&&!Ur(C,s.floating)&&Array.from(ee).every(Re=>!Ur(re,Re)))return;if(_n(C)&&P){const Re=ft(C),Ne=Bn(C),me=/auto|scroll/,ve=Re||me.test(Ne.overflowX),Ae=Re||me.test(Ne.overflowY),Se=ve&&C.clientWidth>0&&C.scrollWidth>C.clientWidth,qe=Ae&&C.clientHeight>0&&C.scrollHeight>C.clientHeight,Qe=Ne.direction==="rtl",He=qe&&(Qe?x.offsetX<=C.offsetWidth-C.clientWidth:x.offsetX>C.clientWidth),en=Se&&x.offsetY>C.clientHeight;if(He||en)return}const oe=(D=o.current.floatingContext)==null?void 0:D.nodeId,Ie=T&&Us(T.nodesRef.current,oe).some(Re=>{var Ne;return $s(x,(Ne=Re.context)==null?void 0:Ne.elements.floating)});if($s(x,s.floating)||$s(x,s.domReference)||Ie)return;const Ee=T?Us(T.nodesRef.current,oe):[];if(Ee.length>0){let Re=!0;if(Ee.forEach(Ne=>{var me;if((me=Ne.context)!=null&&me.open&&!Ne.context.dataRef.current.__outsidePressBubbles){Re=!1;return}}),!Re)return}a(!1,x,"outside-press")}),te=dt(x=>{var D;const M=()=>{var B;z(x),(B=ar(x))==null||B.removeEventListener(p,M)};(D=ar(x))==null||D.addEventListener(p,M)});A.useEffect(()=>{if(!r||!d)return;o.current.__escapeKeyBubbles=W,o.current.__outsidePressBubbles=I;let x=-1;function D(ee){a(!1,ee,"ancestor-scroll")}function M(){window.clearTimeout(x),K.current=!0}function B(){x=window.setTimeout(()=>{K.current=!1},ci()?5:0)}const C=Lt(s.floating);g&&(C.addEventListener("keydown",$?Q:ne,$),C.addEventListener("compositionstart",M),C.addEventListener("compositionend",B)),R&&C.addEventListener(p,F?te:z,F);let X=[];return _&&(Fe(s.domReference)&&(X=At(s.domReference)),Fe(s.floating)&&(X=X.concat(At(s.floating))),!Fe(s.reference)&&s.reference&&s.reference.contextElement&&(X=X.concat(At(s.reference.contextElement)))),X=X.filter(ee=>{var re;return ee!==((re=C.defaultView)==null?void 0:re.visualViewport)}),X.forEach(ee=>{ee.addEventListener("scroll",D,{passive:!0})}),()=>{g&&(C.removeEventListener("keydown",$?Q:ne,$),C.removeEventListener("compositionstart",M),C.removeEventListener("compositionend",B)),R&&C.removeEventListener(p,F?te:z,F),X.forEach(ee=>{ee.removeEventListener("scroll",D)}),window.clearTimeout(x)}},[o,s,g,R,p,r,a,_,d,W,I,ne,$,Q,z,F,te]),A.useEffect(()=>{q.current=!1},[R,p]);const G=A.useMemo(()=>({onKeyDown:ne,...h&&{[j1[v]]:x=>{a(!1,x.nativeEvent,"reference-press")},...v!=="click"&&{onClick(x){a(!1,x.nativeEvent,"reference-press")}}}}),[ne,a,h,v]),P=A.useMemo(()=>({onKeyDown:ne,onMouseDown(){S.current=!0},onMouseUp(){S.current=!0},[I1[p]]:()=>{q.current=!0}}),[ne,p]);return A.useMemo(()=>d?{reference:G,floating:P}:{},[d,G,P])}function O1(e){const{open:i=!1,onOpenChange:r,elements:a}=e,s=T1(),o=A.useRef({}),[d]=A.useState(()=>_1()),g=mf()!=null,[c,p]=A.useState(a.reference),h=dt((b,O,T)=>{o.current.openEvent=b?O:void 0,d.emit("openchange",{open:b,event:O,reason:T,nested:g}),r?.(b,O,T)}),v=A.useMemo(()=>({setPositionReference:p}),[]),_=A.useMemo(()=>({reference:c||a.reference||null,floating:a.floating||null,domReference:a.reference}),[c,a.reference,a.floating]);return A.useMemo(()=>({dataRef:o,open:i,onOpenChange:h,elements:_,events:d,floatingId:s,refs:v}),[i,h,_,d,s,v])}function P1(e){e===void 0&&(e={});const{nodeId:i}=e,r=O1({...e,elements:{reference:null,floating:null,...e.elements}}),a=e.rootContext||r,s=a.elements,[o,d]=A.useState(null),[g,c]=A.useState(null),h=s?.domReference||o,v=A.useRef(null),_=Hl();dr(()=>{h&&(v.current=h)},[h]);const b=HE({...e,elements:{...s,...g&&{reference:g}}}),O=A.useCallback(S=>{const W=Fe(S)?{getBoundingClientRect:()=>S.getBoundingClientRect(),getClientRects:()=>S.getClientRects(),contextElement:S}:S;c(W),b.refs.setReference(W)},[b.refs]),T=A.useCallback(S=>{(Fe(S)||S===null)&&(v.current=S,d(S)),(Fe(b.refs.reference.current)||b.refs.reference.current===null||S!==null&&!Fe(S))&&b.refs.setReference(S)},[b.refs]),E=A.useMemo(()=>({...b.refs,setReference:T,setPositionReference:O,domReference:v}),[b.refs,T,O]),R=A.useMemo(()=>({...b.elements,domReference:h}),[b.elements,h]),q=A.useMemo(()=>({...b,...a,refs:E,elements:R,nodeId:i}),[b,E,R,i,a]);return dr(()=>{a.dataRef.current.floatingContext=q;const S=_?.nodesRef.current.find(W=>W.id===i);S&&(S.context=q)}),A.useMemo(()=>({...b,context:q,refs:E,elements:R}),[b,E,R,q])}function Xs(){return l1()&&s1()}function B1(e,i){i===void 0&&(i={});const{open:r,onOpenChange:a,events:s,dataRef:o,elements:d}=e,{enabled:g=!0,visibleOnly:c=!0}=i,p=A.useRef(!1),h=A.useRef(-1),v=A.useRef(!0);A.useEffect(()=>{if(!g)return;const b=pn(d.domReference);function O(){!r&&_n(d.domReference)&&d.domReference===Hd(Lt(d.domReference))&&(p.current=!0)}function T(){v.current=!0}function E(){v.current=!1}return b.addEventListener("blur",O),Xs()&&(b.addEventListener("keydown",T,!0),b.addEventListener("pointerdown",E,!0)),()=>{b.removeEventListener("blur",O),Xs()&&(b.removeEventListener("keydown",T,!0),b.removeEventListener("pointerdown",E,!0))}},[d.domReference,r,g]),A.useEffect(()=>{if(!g)return;function b(O){let{reason:T}=O;(T==="reference-press"||T==="escape-key")&&(p.current=!0)}return s.on("openchange",b),()=>{s.off("openchange",b)}},[s,g]),A.useEffect(()=>()=>{Pn(h)},[]);const _=A.useMemo(()=>({onMouseLeave(){p.current=!1},onFocus(b){if(p.current)return;const O=ar(b.nativeEvent);if(c&&Fe(O)){if(Xs()&&!b.relatedTarget){if(!v.current&&!g1(O))return}else if(!f1(O))return}a(!0,b.nativeEvent,"focus")},onBlur(b){p.current=!1;const O=b.relatedTarget,T=b.nativeEvent,E=Fe(O)&&O.hasAttribute(Gl("focus-guard"))&&O.getAttribute("data-type")==="outside";h.current=window.setTimeout(()=>{var R;const q=Hd(d.domReference?d.domReference.ownerDocument:document);!O&&q===d.domReference||Ur((R=o.current.floatingContext)==null?void 0:R.refs.floating.current,q)||Ur(d.domReference,q)||E||a(!1,T,"focus")})}}),[o,d.domReference,a,c]);return A.useMemo(()=>g?{reference:_}:{},[g,_])}function Js(e,i,r){const a=new Map,s=r==="item";let o=e;if(s&&e){const{[Gd]:d,[$d]:g,...c}=e;o=c}return{...r==="floating"&&{tabIndex:-1,[k1]:""},...o,...i.map(d=>{const g=d?d[r]:null;return typeof g=="function"?e?g(e):null:g}).concat(e).reduce((d,g)=>(g&&Object.entries(g).forEach(c=>{let[p,h]=c;if(!(s&&[Gd,$d].includes(p)))if(p.indexOf("on")===0){if(a.has(p)||a.set(p,[]),typeof h=="function"){var v;(v=a.get(p))==null||v.push(h),d[p]=function(){for(var _,b=arguments.length,O=new Array(b),T=0;T<b;T++)O[T]=arguments[T];return(_=a.get(p))==null?void 0:_.map(E=>E(...O)).find(E=>E!==void 0)}}}else d[p]=h}),d),{})}}function x1(e){e===void 0&&(e=[]);const i=e.map(g=>g?.reference),r=e.map(g=>g?.floating),a=e.map(g=>g?.item),s=A.useCallback(g=>Js(g,e,"reference"),i),o=A.useCallback(g=>Js(g,e,"floating"),r),d=A.useCallback(g=>Js(g,e,"item"),a);return A.useMemo(()=>({getReferenceProps:s,getFloatingProps:o,getItemProps:d}),[s,o,d])}function q1(e,i,r){r===void 0&&(r=!0);let a=e.filter(o=>{var d;return o.parentId===i&&((d=o.context)==null?void 0:d.open)}),s=a;for(;s.length;)s=r?e.filter(o=>{var d;return(d=s)==null?void 0:d.some(g=>{var c;return o.parentId===g.id&&((c=o.context)==null?void 0:c.open)})}):e,a=a.concat(s);return a}function Xd(e,i){const[r,a]=e;let s=!1;const o=i.length;for(let d=0,g=o-1;d<o;g=d++){const[c,p]=i[d]||[0,0],[h,v]=i[g]||[0,0];p>=a!=v>=a&&r<=(h-c)*(a-p)/(v-p)+c&&(s=!s)}return s}function D1(e,i){return e[0]>=i.x&&e[0]<=i.x+i.width&&e[1]>=i.y&&e[1]<=i.y+i.height}function M1(e){e===void 0&&(e={});const{buffer:i=.5,blockPointerEvents:r=!1,requireIntent:a=!0}=e;let s,o=!1,d=null,g=null,c=performance.now();function p(v,_){const b=performance.now(),O=b-c;if(d===null||g===null||O===0)return d=v,g=_,c=b,null;const T=v-d,E=_-g,q=Math.sqrt(T*T+E*E)/O;return d=v,g=_,c=b,q}const h=v=>{let{x:_,y:b,placement:O,elements:T,onClose:E,nodeId:R,tree:q}=v;return function(W){function I(){clearTimeout(s),E()}if(clearTimeout(s),!T.domReference||!T.floating||O==null||_==null||b==null)return;const{clientX:$,clientY:F}=W,K=[$,F],ne=S1(W),Q=W.type==="mouseleave",z=zs(T.floating,ne),te=zs(T.domReference,ne),G=T.domReference.getBoundingClientRect(),P=T.floating.getBoundingClientRect(),x=O.split("-")[0],D=_>P.right-P.width/2,M=b>P.bottom-P.height/2,B=D1(K,G),C=P.width>G.width,X=P.height>G.height,ee=(C?G:P).left,re=(C?G:P).right,oe=(X?G:P).top,Ie=(X?G:P).bottom;if(z&&(o=!0,!Q))return;if(te&&(o=!1),te&&!Q){o=!0;return}if(Q&&Fe(W.relatedTarget)&&zs(T.floating,W.relatedTarget)||q&&q1(q.nodesRef.current,R).some(Ne=>{let{context:me}=Ne;return me?.open}))return;if(x==="top"&&b>=G.bottom-1||x==="bottom"&&b<=G.top+1||x==="left"&&_>=G.right-1||x==="right"&&_<=G.left+1)return I();let Ee=[];switch(x){case"top":Ee=[[ee,G.top+1],[ee,P.bottom-1],[re,P.bottom-1],[re,G.top+1]];break;case"bottom":Ee=[[ee,P.top+1],[ee,G.bottom-1],[re,G.bottom-1],[re,P.top+1]];break;case"left":Ee=[[P.right-1,Ie],[P.right-1,oe],[G.left+1,oe],[G.left+1,Ie]];break;case"right":Ee=[[G.right-1,Ie],[G.right-1,oe],[P.left+1,oe],[P.left+1,Ie]];break}function Re(Ne){let[me,ve]=Ne;switch(x){case"top":{const Ae=[C?me+i/2:D?me+i*4:me-i*4,ve+i+1],Se=[C?me-i/2:D?me+i*4:me-i*4,ve+i+1],qe=[[P.left,D||C?P.bottom-i:P.top],[P.right,D?C?P.bottom-i:P.top:P.bottom-i]];return[Ae,Se,...qe]}case"bottom":{const Ae=[C?me+i/2:D?me+i*4:me-i*4,ve-i],Se=[C?me-i/2:D?me+i*4:me-i*4,ve-i],qe=[[P.left,D||C?P.top+i:P.bottom],[P.right,D?C?P.top+i:P.bottom:P.top+i]];return[Ae,Se,...qe]}case"left":{const Ae=[me+i+1,X?ve+i/2:M?ve+i*4:ve-i*4],Se=[me+i+1,X?ve-i/2:M?ve+i*4:ve-i*4];return[...[[M||X?P.right-i:P.left,P.top],[M?X?P.right-i:P.left:P.right-i,P.bottom]],Ae,Se]}case"right":{const Ae=[me-i,X?ve+i/2:M?ve+i*4:ve-i*4],Se=[me-i,X?ve-i/2:M?ve+i*4:ve-i*4],qe=[[M||X?P.left+i:P.right,P.top],[M?X?P.left+i:P.right:P.left+i,P.bottom]];return[Ae,Se,...qe]}}}if(!Xd([$,F],Ee)){if(o&&!B)return I();if(!Q&&a){const Ne=p(W.clientX,W.clientY);if(Ne!==null&&Ne<.1)return I()}Xd([$,F],Re([_,b]))?!o&&a&&(s=window.setTimeout(I,40)):I()}}};return h.__options={blockPointerEvents:r},h}const L1=A.createContext(null),F1=(e,i)=>{var r,a,s;const{size:o,error:d,errorId:g}=e,c=A.useContext(L1),p=di(),h=(r=e.id)!==null&&r!==void 0?r:`${i}-${p}`,v=g??`${i}-error-${p}`,_=`${i}-description-${p}`,b=c?.disabled||e.disabled,O=(c?.readOnly||e.readOnly)&&!b||void 0,T=!b&&!O&&!!(d||c?.error),E=!b&&!O&&!!d&&typeof d!="boolean",R=Object.assign({},T?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:E,hasError:T,errorId:v,inputDescriptionId:_,size:(a=o??c?.size)!==null&&a!==void 0?a:"medium",readOnly:O,inputProps:Object.assign(Object.assign({id:h},R),{"aria-describedby":Gg(e["aria-describedby"],{[_]:!!e?.description&&typeof e?.description=="string",[v]:E,[(s=c?.errorId)!==null&&s!==void 0?s:""]:T&&!!c?.error})||void 0,disabled:b})}};function Ze(e,i,r,a){return a?typeof a=="string"?{[`--__${e}c-${i}-${r}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([s,o])=>[`--__${e}c-${i}-${r}-${s}`,o])):{}}const C1={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Jd=(e,i,r,a,s,o)=>i.split(" ").map((d,g,c)=>{var p;if(e==="margin-inline"&&d==="full")return`calc((100vw - ${100/c.length}%)/-2)`;if(e==="padding-inline"&&d==="full")return`calc((100vw - ${100/c.length}%)/2)`;if(["mi","mb"].includes(e)&&d==="auto")return"auto";let h=`var(--${o}-${r}-${d})`;if(a.includes(d))h=d==="px"?"1px":d;else if(d.startsWith("space"))h=`var(--${o}-${d})`;else{const v=`--${o}-spacing-${d}`;h=`var(${(p=C1[v])!==null&&p!==void 0?p:v})`}return s?d==="0"?"0":`calc(-1 * ${h})`:h}).join(" ");function Tn(e,i,r,a,s,o=!1,d=[]){if(!s)return{};if(typeof s=="string")return{[`--__${e}c-${i}-${r}-xs`]:Jd(r,s,a,d,o,e)};const g={};return Object.entries(s).forEach(([c,p])=>{g[`--__${e}c-${i}-${r}-${c}`]=Jd(r,p,a,d,o,e)}),g}const pf=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],hf=({children:e,className:i,padding:r,paddingInline:a,paddingBlock:s,margin:o,marginInline:d,marginBlock:g,width:c,minWidth:p,maxWidth:h,height:v,minHeight:_,maxHeight:b,position:O,inset:T,top:E,right:R,left:q,bottom:S,overflow:W,overflowX:I,overflowY:$,flexBasis:F,flexGrow:K,flexShrink:ne,gridColumn:Q})=>{const z=fr(!1),{cn:te}=Me(),G=z?"ax":"a",P=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Tn(G,"r","p","spacing",r)),Tn(G,"r","pi","spacing",a)),Tn(G,"r","pb","spacing",s)),Tn(G,"r","m","spacing",o)),Tn(G,"r","mi","spacing",d)),Tn(G,"r","mb","spacing",g)),Ze(G,"r","w",c)),Ze(G,"r","minw",p)),Ze(G,"r","maxw",h)),Ze(G,"r","h",v)),Ze(G,"r","minh",_)),Ze(G,"r","maxh",b)),Ze(G,"r","position",O)),Tn(G,"r","inset","spacing",T)),Tn(G,"r","top","spacing",E)),Tn(G,"r","right","spacing",R)),Tn(G,"r","bottom","spacing",S)),Tn(G,"r","left","spacing",q)),Ze(G,"r","overflow",W)),Ze(G,"r","overflowx",I)),Ze(G,"r","overflowy",$)),Ze(G,"r","flex-basis",F)),Ze(G,"r","flex-grow",K)),Ze(G,"r","flex-shrink",ne)),Ze(G,"r","grid-column",Q));return Z.createElement(Wr,{className:te({className:i,"navds-r-p":r,"navds-r-pi":a,"navds-r-pb":s,"navds-r-m":o,"navds-r-mi":d,"navds-r-mb":g,"navds-r-w":c,"navds-r-minw":p,"navds-r-maxw":h,"navds-r-h":v,"navds-r-minh":_,"navds-r-maxh":b,"navds-r-position":O,"navds-r-inset":T,"navds-r-top":E,"navds-r-right":R,"navds-r-bottom":S,"navds-r-left":q,"navds-r-overflow":W,"navds-r-overflowx":I,"navds-r-overflowy":$,"navds-r-flex-basis":F,"navds-r-flex-grow":K,"navds-r-flex-shrink":ne,"navds-r-grid-column":Q}),style:P},e)};var K1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const V1=A.forwardRef((e,i)=>{var{children:r,className:a,as:s="div",columns:o,gap:d,style:g,align:c,asChild:p}=e,h=K1(e,["children","className","as","columns","gap","style","align","asChild"]);const _=fr(!1)?"ax":"a",{cn:b}=Me(),O=Object.assign(Object.assign(Object.assign(Object.assign({},g),{[`--__${_}c-hgrid-align`]:c}),Tn(_,"hgrid","gap","spacing",d)),Ze(_,"hgrid","columns",H1(o))),T=p?Wr:s;return Z.createElement(hf,Object.assign({},h),Z.createElement(T,Object.assign({},zr(h,pf),{ref:i,className:b("navds-hgrid",a,{"navds-hgrid-gap":d,"navds-hgrid-align":c}),style:O}),r))});function H1(e){return e?typeof e=="string"||typeof e=="number"?Zd(e):Object.fromEntries(Object.entries(e).map(([i,r])=>[i,Zd(r)])):{}}const Zd=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var G1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const kf=A.forwardRef((e,i)=>{var{children:r,className:a,as:s="div",align:o,justify:d,wrap:g=!0,gap:c,style:p,direction:h="row",asChild:v}=e,_=G1(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const O=fr(!1)?"ax":"a",{cn:T}=Me(),E=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},p),Tn(O,"stack","gap","spacing",c)),Ze(O,"stack","direction",h)),Ze(O,"stack","align",o)),Ze(O,"stack","justify",d)),R=v?Wr:s;return Z.createElement(hf,Object.assign({},_),Z.createElement(R,Object.assign({},zr(_,pf),{ref:i,style:E,className:T("navds-stack",a,{"navds-vstack":h==="column","navds-hstack":h==="row","navds-stack-gap":c,"navds-stack-align":o,"navds-stack-justify":d,"navds-stack-direction":h,"navds-stack-wrap":g})}),r))});var $1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const sr=A.forwardRef((e,i)=>{var{as:r="div"}=e,a=$1(e,["as"]);return Z.createElement(kf,Object.assign({as:r},a,{ref:i,direction:"row"}))});var U1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const hi=A.forwardRef((e,i)=>{var{as:r="div"}=e,a=U1(e,["as"]);return Z.createElement(kf,Object.assign({as:r},a,{ref:i,direction:"column",wrap:!1}))}),ni=A.createContext({listType:"ul",size:"medium"});var Y1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const vf=A.forwardRef((e,i)=>{var{className:r,children:a,title:s,icon:o}=e,d=Y1(e,["className","children","title","icon"]);const{listType:g,size:c}=A.useContext(ni),{cn:p}=Me();return g==="ol"&&o&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),Z.createElement("li",Object.assign({},d,{ref:i,className:p("navds-list__item",r)}),g==="ul"&&Z.createElement("div",{className:p("navds-list__item-marker",{"navds-list__item-marker--icon":o,"navds-list__item-marker--bullet":!o})},o||Z.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},Z.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),Z.createElement("div",null,s&&Z.createElement(ul,{as:"p",size:c,weight:"semibold"},s),a))});vf.displayName="List.Item";var W1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const z1={small:"xsmall",medium:"small",large:"medium"},ml=A.forwardRef((e,i)=>{var{children:r,className:a,as:s="ul",title:o,description:d,headingTag:g,size:c,"aria-label":p,"aria-labelledby":h}=e,v=W1(e,["children","className","as","title","description","headingTag","size","aria-label","aria-labelledby"]);const{size:_}=A.useContext(ni),{cn:b}=Me(),O=fr(!1),T=c??_;return O?Z.createElement(ni.Provider,{value:{listType:s,size:T}},Z.createElement(ul,Object.assign({as:"div"},v,{size:T,ref:i,className:b("navds-list",`navds-list--${T}`,a)}),Z.createElement(s,{role:"list","aria-label":p,"aria-labelledby":h},r))):Z.createElement(ni.Provider,{value:{listType:s,size:T}},Z.createElement(ul,Object.assign({as:"div"},v,{size:T,ref:i,className:b("navds-list",`navds-list--${T}`,a)}),o&&Z.createElement(Jg,{size:z1[T],as:g??"h3"},o),d&&Z.createElement(ui,{size:T},d),Z.createElement(s,{role:"list","aria-label":p,"aria-labelledby":h},r)))});ml.Item=vf;var X1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const J1=A.forwardRef((e,i)=>{var{className:r}=e,a=X1(e,["className"]);const{cn:s}=Me();return Z.createElement("tbody",Object.assign({},a,{ref:i,className:s("navds-table__body",r)}))});var Z1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const yf=A.forwardRef((e,i)=>{var{className:r,children:a,align:s,textSize:o}=e,d=Z1(e,["className","children","align","textSize"]);const{cn:g}=Me();return Z.createElement("th",Object.assign({ref:i,className:g("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${s}`]:s,"navds-label--small":o==="small"})},d),a)}),bf=A.createContext(null);var Q1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const eT=A.forwardRef((e,i)=>{var r,a,s,o,{className:d,children:g,sortable:c=!1,sortKey:p}=e,h=Q1(e,["className","children","sortable","sortKey"]);const v=A.useContext(bf),{cn:_}=Me();return c&&!p&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),Z.createElement(yf,Object.assign({scope:"col",ref:i,className:_(d),"aria-sort":c?((r=v?.sort)===null||r===void 0?void 0:r.orderBy)===p?(a=v?.sort)===null||a===void 0?void 0:a.direction:"none":void 0},h),c?Z.createElement("button",{type:"button",className:_("navds-table__sort-button"),onClick:c&&p?()=>{var b;return(b=v?.onSortChange)===null||b===void 0?void 0:b.call(v,p)}:void 0},g,((s=v?.sort)===null||s===void 0?void 0:s.orderBy)===p?((o=v?.sort)===null||o===void 0?void 0:o.direction)==="descending"?Z.createElement(T0,{"aria-hidden":!0}):Z.createElement(w0,{"aria-hidden":!0}):Z.createElement(m0,{"aria-hidden":!0})):g)});var nT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Ef=A.forwardRef((e,i)=>{var{className:r,children:a="",align:s,textSize:o}=e,d=nT(e,["className","children","align","textSize"]);const{cn:g}=Me();return Z.createElement(ui,Object.assign({as:"td",ref:i,className:g("navds-table__data-cell",r,{[`navds-table__data-cell--align-${s}`]:s}),size:o},d),a)});var tT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const rT=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function aT(e){const i=parseFloat(e);return!Number.isNaN(i)&&Number.isFinite(i)}function Qd(e){return typeof e=="string"&&e[e.length-1]==="%"&&aT(e.substring(0,e.length-1))}function Zs(e,i){i===0&&e?.style&&(e.style.display="none")}function iT(e,i){i===0&&e?.style&&(e.style.display="")}const sT=e=>{var{children:i,className:r,innerClassName:a,duration:s=250,easing:o="ease",height:d}=e,g=tT(e,["children","className","innerClassName","duration","easing","height"]);const{cn:c}=Me(),p=A.useRef(d),h=A.useRef(null),v=A.useRef(),_=A.useRef(),b=A.useRef(d),O=A.useRef("visible"),T=rT?0:s;typeof b.current=="number"?(typeof d!="string"&&(b.current=d<0?0:d),O.current="hidden"):Qd(b.current)&&(b.current=d==="0%"?0:d,O.current="hidden");const[E,R]=A.useState(b.current),[q,S]=A.useState(O.current),[W,I]=A.useState(!1);A.useEffect(()=>{Zs(h.current,b.current)},[]),A.useEffect(()=>{if(d!==p.current&&h.current){iT(h.current,p.current),h.current.style.overflow="hidden";const ne=h.current.offsetHeight;h.current.style.overflow="";const Q=T;let z,te,G="hidden",P;const x=p.current==="auto";typeof d=="number"?(z=d<0?0:d,te=z):Qd(d)?(z=d==="0%"?0:d,te=z):(z=ne,te="auto",G=void 0),x&&(te=z,z=ne),R(z),S("hidden"),I(!x),clearTimeout(_.current),clearTimeout(v.current),x?(P=!0,_.current=setTimeout(()=>{R(te),S(G),I(P)},50),v.current=setTimeout(()=>{I(!1),Zs(h.current,te)},Q)):_.current=setTimeout(()=>{R(te),S(G),I(!1),d!=="auto"&&Zs(h.current,z)},Q)}return p.current=d,()=>{clearTimeout(_.current),clearTimeout(v.current)}},[d]);const $={height:E,overflow:q};W&&($.transition=`height ${T}ms ${o} 0ms`,$.WebkitTransition=$.transition);const K=typeof g["aria-hidden"]<"u"?g["aria-hidden"]:d===0;return Z.createElement("div",Object.assign({},g,{className:c(r),style:$}),Z.createElement("div",{"aria-hidden":K,className:c(a),ref:h},i))};var lT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Tf=A.forwardRef((e,i)=>{var{className:r,selected:a=!1,shadeOnHover:s=!0}=e,o=lT(e,["className","selected","shadeOnHover"]);const{cn:d}=Me();return Z.createElement("tr",Object.assign({},o,{ref:i,className:d("navds-table__row",r,{"navds-table__row--selected":a,"navds-table__row--shade-on-hover":s})}))});var oT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const uT=A.forwardRef((e,i)=>{var{className:r,children:a,content:s,togglePlacement:o="left",defaultOpen:d=!1,open:g,onOpenChange:c,expansionDisabled:p=!1,expandOnRowClick:h=!1,colSpan:v=999,contentGutter:_,onClick:b}=e,O=oT(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:T}=Me(),[E,R]=Zg({defaultValue:d,value:g,onChange:c}),q=pi("global"),S=di(),W=$=>{R(F=>!F),$.stopPropagation()},I=$=>{h&&!p&&!_f($.target)&&W($)};return Z.createElement(Z.Fragment,null,Z.createElement(Tf,Object.assign({},O,{ref:i,className:T("navds-table__expandable-row",r,{"navds-table__expandable-row--open":E,"navds-table__expandable-row--expansion-disabled":p,"navds-table__expandable-row--clickable":h}),onClick:Dl(b,I)}),o==="right"&&a,Z.createElement(Ef,{className:T("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":E}),onClick:p?()=>null:W},!p&&Z.createElement("button",{className:T("navds-table__toggle-expand-button"),type:"button","aria-controls":S,"aria-expanded":E,onClick:W},Z.createElement(h0,{className:T("navds-table__expandable-icon"),title:q(E?"showLess":"showMore")}))),o==="left"&&a),Z.createElement("tr",{"data-state":E?"open":"closed",className:T("navds-table__expanded-row"),"aria-hidden":!E,id:S},Z.createElement("td",{colSpan:v,className:T("navds-table__expanded-row-cell")},Z.createElement(sT,{className:T("navds-table__expanded-row-collapse"),innerClassName:T(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${_??o}`),height:E?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},s))))});function _f(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:_f(e.parentElement)}var dT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const gT=A.forwardRef((e,i)=>{var{className:r}=e,a=dT(e,["className"]);const{cn:s}=Me();return Z.createElement("thead",Object.assign({},a,{ref:i,className:s("navds-table__header",r)}))});var fT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const $e=A.forwardRef((e,i)=>{var{className:r,zebraStripes:a=!1,size:s="medium",onSortChange:o,sort:d,stickyHeader:g=!1}=e,c=fT(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:p}=Me();return Z.createElement(bf.Provider,{value:{onSortChange:o,sort:d}},Z.createElement("table",Object.assign({},c,{ref:i,className:p("navds-table",`navds-table--${s}`,r,{"navds-table--zebra-stripes":a,"navds-table--sticky-header":g})})))});$e.Header=gT;$e.Body=J1;$e.Row=Tf;$e.ColumnHeader=eT;$e.HeaderCell=yf;$e.DataCell=Ef;$e.ExpandableRow=uT;var cT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const mT=A.forwardRef((e,i)=>{var{children:r,className:a,arrow:s=!0,placement:o="top",open:d,defaultOpen:g=!1,onOpenChange:c,offset:p,content:h,delay:v=150,id:_,keys:b,maxChar:O=80,describesChild:T=!1}=e,E=cT(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:R}=Me(),[q,S]=Zg({defaultValue:g,value:d,onChange:c}),W=A.useRef(null),I=R0(!1),$=I?I.ref.current:void 0,{x:F,y:K,strategy:ne,context:Q,placement:z,middlewareData:{arrow:{x:te,y:G}={},hide:{referenceHidden:P}={}},refs:x}=P1({placement:o,open:q,onOpenChange:ee=>S(ee),middleware:[$E(p??(s?8:4)),UE(),YE({padding:5,fallbackPlacements:["bottom","top"]}),WE({element:W,padding:5})],whileElementsMounted:I?(ee,re,oe)=>Fd(ee,re,oe,{animationFrame:!0}):Fd,strategy:I?"fixed":void 0}),{getReferenceProps:D,getFloatingProps:M}=x1([R1(Q,{handleClose:M1(),restMs:v}),B1(Q),N1(Q)]),B=di(_),C=Ug(i,x.setFloating);if(!r||r?.type===Z.Fragment||r===Z.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;h?.length>O&&q&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${h.length}
Tooltip-content: ${h}`);const X=T?q?{"aria-describedby":B}:{title:h}:{"aria-label":h};return Z.createElement(Z.Fragment,null,Z.createElement(Wr,Object.assign({ref:x.setReference},D(),X,{"aria-keyshortcuts":b?b.join("+"):void 0}),r),Z.createElement(oE,{rootElement:$,asChild:!0},q&&Z.createElement("div",Object.assign({},M(Object.assign(Object.assign({},E),{ref:C,style:{position:ne,top:K??0,left:F??0,visibility:P?"hidden":"visible"},role:"tooltip",id:B,className:R("navds-tooltip","navds-detail navds-detail--small",a)})),{"data-side":z,"data-state":"open"}),h,b&&Z.createElement("span",{className:R("navds-tooltip__keys"),"aria-hidden":!0},b.map(ee=>Z.createElement(r0,{as:"kbd",key:ee,className:R("navds-tooltip__key")},ee))),s&&Z.createElement("div",{ref:ee=>{W.current=ee},className:R("navds-tooltip__arrow"),style:{left:te!=null?`${te}px`:"",top:G!=null?`${G}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[z]]:"-3.5px"}}))))}),wf=A.createContext(null);var pT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Af=A.forwardRef((e,i)=>{var r,{className:a,children:s,disabled:o,onClick:d}=e,g=pT(e,["className","children","disabled","onClick"]);const{cn:c}=Me(),p=pi("Search"),h=A.useContext(wf);if(h===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:v,variant:_,handleClick:b}=h;return Z.createElement(Vl,Object.assign({type:"submit"},g,{ref:i,size:v,variant:_==="secondary"?"secondary":"primary",className:c("navds-search__button-search",a),disabled:(r=h?.disabled)!==null&&r!==void 0?r:o,onClick:Dl(d,b),icon:Z.createElement(Qg,Object.assign({},s?{"aria-hidden":!0}:{title:p("search")}))}),s)});var hT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const pl=A.forwardRef((e,i)=>{const{inputProps:r,size:a="medium",inputDescriptionId:s,errorId:o,showErrorMsg:d,hasError:g}=F1(e,"searchfield"),{className:c,hideLabel:p=!0,label:h,description:v,value:_,clearButtonLabel:b,onClear:O,clearButton:T=!0,children:E,variant:R="primary",defaultValue:q,onChange:S,onSearchClick:W,htmlSize:I}=e,$=hT(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize"]),{cn:F}=Me(),K=A.useRef(null),ne=Ug(K,i),[Q,z]=A.useState(q??""),te=D=>{_===void 0&&z(D),S?.(D)},G=D=>{var M,B;O?.(D),te(""),(B=(M=K.current)===null||M===void 0?void 0:M.focus)===null||B===void 0||B.call(M)},P=()=>{W?.(`${_??Q}`)},x=T&&!r.disabled&&(_??Q);return Z.createElement("div",{onKeyDown:D=>{var M;D.key==="Escape"&&(!((M=K.current)===null||M===void 0)&&M.value&&D.preventDefault(),G({trigger:"Escape",event:D}))},className:F(c,"navds-form-field",`navds-form-field--${a}`,"navds-search",{"navds-search--error":g,"navds-search--disabled":r.disabled,"navds-search--with-size":I})},Z.createElement(ql,{htmlFor:r.id,size:a,className:F("navds-form-field__label",{"navds-sr-only":p})},h),!!v&&Z.createElement(ui,{className:F("navds-form-field__description",{"navds-sr-only":p}),id:s,size:a,as:"div"},v),Z.createElement("div",{className:F("navds-search__wrapper")},Z.createElement("div",{className:F("navds-search__wrapper-inner")},R==="simple"&&Z.createElement(Qg,{"aria-hidden":!0,className:F("navds-search__search-icon")}),Z.createElement("input",Object.assign({ref:ne},zr($,["error","errorId","size","readOnly"]),r,{value:_??Q,onChange:D=>te(D.target.value),type:"search",className:F(c,"navds-search__input",`navds-search__input--${R}`,"navds-text-field__input","navds-body-short",`navds-body-short--${a}`)},I?{size:Number(I)}:{})),x&&Z.createElement(kT,{handleClear:G,size:a,clearButtonLabel:b})),Z.createElement(wf.Provider,{value:{size:a,disabled:r.disabled,variant:R,handleClick:P}},E||R!=="simple"&&Z.createElement(Af,null))),Z.createElement("div",{className:F("navds-form-field__error"),id:o,"aria-relevant":"additions removals","aria-live":"polite"},d&&Z.createElement(i0,{size:a,showIcon:!0},e.error)))});function kT({size:e,clearButtonLabel:i,handleClear:r}){const{cn:a}=Me(),s=fr(!1),o=pi("Search");return s?Z.createElement(Vl,{className:a("navds-search__button-clear"),variant:"tertiary","data-color":"neutral",size:e==="medium"?"small":"xsmall",icon:Z.createElement(qd,{"aria-hidden":!0}),title:i||o("clear"),onClick:d=>r({trigger:"Click",event:d}),type:"button"}):Z.createElement("button",{type:"button",onClick:d=>r({trigger:"Click",event:d}),className:a("navds-search__button-clear")},Z.createElement("span",{className:a("navds-sr-only")},i||o("clear")),Z.createElement(qd,{"aria-hidden":!0}))}pl.Button=Af;function vT(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var eg={exports:{}},Mr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function yT(){if(ng)return Mr;ng=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,s,o){var d=null;if(o!==void 0&&(d=""+o),s.key!==void 0&&(d=""+s.key),"key"in s){o={};for(var g in s)g!=="key"&&(o[g]=s[g])}else o=s;return s=o.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:o}}return Mr.Fragment=i,Mr.jsx=r,Mr.jsxs=r,Mr}var tg;function bT(){return tg||(tg=1,eg.exports=yT()),eg.exports}var Rt=bT();const Qr={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};Cn(Qr);var rg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ag;function ET(){return ag||(ag=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(o=s(o,a.call(this,g)))}return o}function a(o){if(typeof o=="string"||typeof o=="number")return this&&this[o]||o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(this,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var g in o)i.call(o,g)&&o[g]&&(d=s(d,this&&this[g]||g));return d}function s(o,d){return d?o?o+" "+d:o+d:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(rg)),rg.exports}var TT=ET();const $l=vT(TT),_T="_borderbox_1vkvn_1",wT="_error_1vkvn_5",AT="_warning_1vkvn_8",RT={borderbox:_T,error:wT,warning:AT};$l.bind(RT);const ST="_aksjonspunkt_kn1hn_1",jT="_erAksjonspunktApent_kn1hn_4",IT="_erIkkeGodkjentAvBeslutter_kn1hn_8",NT={aksjonspunkt:ST,erAksjonspunktApent:jT,erIkkeGodkjentAvBeslutter:IT};$l.bind(NT);const Yr=({dateString:e,year:i,month:r,day:a})=>Rt.jsx(Rt.Fragment,{children:Yg(e,{year:i,month:r,day:a})}),oi=({dateTimeString:e,...i})=>Rt.jsx(Rt.Fragment,{children:$b(e,i)});Cn(Qr);Cn(Qr);const OT="_divider_1t980_1",PT="_dividerParagraf_1t980_8",BT="_leftPanel_1t980_11",xT="_rightPanel_1t980_14",qT={divider:OT,dividerParagraf:PT,leftPanel:BT,rightPanel:xT};$l.bind(qT);Cn(Qr);const DT=Cn(Qr),MT=({tekst:e,children:i})=>{const[r,a]=A.useState(!1);if(!e)return i;const s=async()=>{await navigator.clipboard.writeText(e),a(!0),setTimeout(()=>{a(!1)},1e3)};return Rt.jsx(mT,{content:DT.formatMessage({id:r?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:Rt.jsx("span",{"aria-hidden":"true",onClick:s,children:i??e})})},ig={default:"_default_1sbt3_1",rød:"_rød_1sbt3_5"},lr=({beløp:e,kr:i=!1,rød:r=!1})=>{const a=e?.toString().replace(/\s/g,"");return Rt.jsx(MT,{tekst:a,children:Rt.jsxs("span",{className:r?ig.rød:ig.default,children:[a?Ub(a):"-",a&&i&&" kr"]})})},Xn=({tittel:e,children:i})=>H.jsxs(hi,{gap:"1",children:[H.jsx(ql,{size:"medium",children:e}),i]});Xn.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Rf=({arbeidsgiverOpplysninger:e,arbeidsgiverIdent:i})=>{const r=mt();return H.jsxs(Xn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[H.jsxs("span",{children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),": ",e.navn]}),H.jsxs("span",{children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",i]})]})};Rf.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const Sf=({inntektsmelding:e,behandling:i,alleBehandlinger:r,alleKodeverk:a})=>{const s=mt(),o=e.tilknyttedeBehandlingIder.includes(i.uuid),d=r.filter(p=>e.tilknyttedeBehandlingIder.includes(p.uuid)),g=(()=>{const p=d.length;return o&&p>1?H.jsx(xe,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):o?H.jsx(xe,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):p===0?H.jsx(xe,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):H.jsx(xe,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),c=[...d].sort((p,h)=>new Date(p.opprettet).getTime()-new Date(h.opprettet).getTime());return H.jsxs(Xn,{tittel:s.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[g,H.jsx(ml,{children:c.map(p=>H.jsx(ml.Item,{children:H.jsxs(hi,{gap:"1",children:[H.jsx("span",{children:a.BehandlingType.find(({kode:h})=>h===p.type)?.navn}),H.jsxs("span",{children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",H.jsx(oi,{dateTimeString:p.opprettet,separator:"kl"})]}),p.avsluttet?H.jsxs("span",{children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",H.jsx(oi,{dateTimeString:p.avsluttet,separator:"kl"})]}):null]})},p.uuid))})]})};Sf.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};function LT(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sg={exports:{}},Lr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function FT(){if(lg)return Lr;lg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,s,o){var d=null;if(o!==void 0&&(d=""+o),s.key!==void 0&&(d=""+s.key),"key"in s){o={};for(var g in s)g!=="key"&&(o[g]=s[g])}else o=s;return s=o.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:o}}return Lr.Fragment=i,Lr.jsx=r,Lr.jsxs=r,Lr}var og;function CT(){return og||(og=1,sg.exports=FT()),sg.exports}CT();var hl={exports:{}},KT=hl.exports,ug;function VT(){return ug||(ug=1,function(e,i){(function(r,a){e.exports=a()})(KT,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,o=/\d\d/,d=/\d\d?/,g=/\d*[^-_:/,()\s\d]+/,c={},p=function(E){return(E=+E)+(E>68?1900:2e3)},h=function(E){return function(R){this[E]=+R}},v=[/[+-]\d\d:?(\d\d)?|Z/,function(E){(this.zone||(this.zone={})).offset=function(R){if(!R||R==="Z")return 0;var q=R.match(/([+-]|\d\d)/g),S=60*q[1]+(+q[2]||0);return S===0?0:q[0]==="+"?-S:S}(E)}],_=function(E){var R=c[E];return R&&(R.indexOf?R:R.s.concat(R.f))},b=function(E,R){var q,S=c.meridiem;if(S){for(var W=1;W<=24;W+=1)if(E.indexOf(S(W,0,R))>-1){q=W>12;break}}else q=E===(R?"pm":"PM");return q},O={A:[g,function(E){this.afternoon=b(E,!1)}],a:[g,function(E){this.afternoon=b(E,!0)}],Q:[s,function(E){this.month=3*(E-1)+1}],S:[s,function(E){this.milliseconds=100*+E}],SS:[o,function(E){this.milliseconds=10*+E}],SSS:[/\d{3}/,function(E){this.milliseconds=+E}],s:[d,h("seconds")],ss:[d,h("seconds")],m:[d,h("minutes")],mm:[d,h("minutes")],H:[d,h("hours")],h:[d,h("hours")],HH:[d,h("hours")],hh:[d,h("hours")],D:[d,h("day")],DD:[o,h("day")],Do:[g,function(E){var R=c.ordinal,q=E.match(/\d+/);if(this.day=q[0],R)for(var S=1;S<=31;S+=1)R(S).replace(/\[|\]/g,"")===E&&(this.day=S)}],w:[d,h("week")],ww:[o,h("week")],M:[d,h("month")],MM:[o,h("month")],MMM:[g,function(E){var R=_("months"),q=(_("monthsShort")||R.map(function(S){return S.slice(0,3)})).indexOf(E)+1;if(q<1)throw new Error;this.month=q%12||q}],MMMM:[g,function(E){var R=_("months").indexOf(E)+1;if(R<1)throw new Error;this.month=R%12||R}],Y:[/[+-]?\d+/,h("year")],YY:[o,function(E){this.year=p(E)}],YYYY:[/\d{4}/,h("year")],Z:v,ZZ:v};function T(E){var R,q;R=E,q=c&&c.formats;for(var S=(E=R.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Q,z,te){var G=te&&te.toUpperCase();return z||q[te]||r[te]||q[G].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(P,x,D){return x||D.slice(1)})})).match(a),W=S.length,I=0;I<W;I+=1){var $=S[I],F=O[$],K=F&&F[0],ne=F&&F[1];S[I]=ne?{regex:K,parser:ne}:$.replace(/^\[|\]$/g,"")}return function(Q){for(var z={},te=0,G=0;te<W;te+=1){var P=S[te];if(typeof P=="string")G+=P.length;else{var x=P.regex,D=P.parser,M=Q.slice(G),B=x.exec(M)[0];D.call(z,B),Q=Q.replace(B,"")}}return function(C){var X=C.afternoon;if(X!==void 0){var ee=C.hours;X?ee<12&&(C.hours+=12):ee===12&&(C.hours=0),delete C.afternoon}}(z),z}}return function(E,R,q){q.p.customParseFormat=!0,E&&E.parseTwoDigitYear&&(p=E.parseTwoDigitYear);var S=R.prototype,W=S.parse;S.parse=function(I){var $=I.date,F=I.utc,K=I.args;this.$u=F;var ne=K[1];if(typeof ne=="string"){var Q=K[2]===!0,z=K[3]===!0,te=Q||z,G=K[2];z&&(G=K[2]),c=this.$locale(),!Q&&G&&(c=q.Ls[G]),this.$d=function(M,B,C,X){try{if(["x","X"].indexOf(B)>-1)return new Date((B==="X"?1e3:1)*M);var ee=T(B)(M),re=ee.year,oe=ee.month,Ie=ee.day,Ee=ee.hours,Re=ee.minutes,Ne=ee.seconds,me=ee.milliseconds,ve=ee.zone,Ae=ee.week,Se=new Date,qe=Ie||(re||oe?1:Se.getDate()),Qe=re||Se.getFullYear(),He=0;re&&!oe||(He=oe>0?oe-1:Se.getMonth());var en,Qn=Ee||0,nn=Re||0,Vn=Ne||0,et=me||0;return ve?new Date(Date.UTC(Qe,He,qe,Qn,nn,Vn,et+60*ve.offset*1e3)):C?new Date(Date.UTC(Qe,He,qe,Qn,nn,Vn,et)):(en=new Date(Qe,He,qe,Qn,nn,Vn,et),Ae&&(en=X(en).week(Ae).toDate()),en)}catch{return new Date("")}}($,ne,F,q),this.init(),G&&G!==!0&&(this.$L=this.locale(G).$L),te&&$!=this.format(ne)&&(this.$d=new Date("")),c={}}else if(ne instanceof Array)for(var P=ne.length,x=1;x<=P;x+=1){K[1]=ne[x-1];var D=q.apply(this,K);if(D.isValid()){this.$d=D.$d,this.$L=D.$L,this.init();break}x===P&&(this.$d=new Date(""))}else W.call(this,I)}}})}(hl)),hl.exports}var HT=VT();const GT=LT(HT);Yb.extend(GT);const ea={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET","FaktaKilde.Ukjent":"FRA UKJENT KILDE","FaktaKilde.SBH":"FRA SAKSBEHANDLER"};Cn(ea);Cn(ea);Cn(ea);const $T=(e,i)=>{const r=new Date(e.tom??$r),a=new Date(i.tom??$r);if(r>a)return-1;if(r<a)return 1;if(e.fom&&!i.fom)return-1;if(!e.fom&&i.fom)return 1;if(e.fom&&i.fom){const s=new Date(e.fom),o=new Date(i.fom);if(s>o)return-1;if(s<o)return 1}return 0};var Vr={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var UT=Vr.exports,dg;function YT(){return dg||(dg=1,function(e,i){(function(){var r,a="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",d="Expected a function",g="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",p=500,h="__lodash_placeholder__",v=1,_=2,b=4,O=1,T=2,E=1,R=2,q=4,S=8,W=16,I=32,$=64,F=128,K=256,ne=512,Q=30,z="...",te=800,G=16,P=1,x=2,D=3,M=1/0,B=9007199254740991,C=17976931348623157e292,X=NaN,ee=4294967295,re=ee-1,oe=ee>>>1,Ie=[["ary",F],["bind",E],["bindKey",R],["curry",S],["curryRight",W],["flip",ne],["partial",I],["partialRight",$],["rearg",K]],Ee="[object Arguments]",Re="[object Array]",Ne="[object AsyncFunction]",me="[object Boolean]",ve="[object Date]",Ae="[object DOMException]",Se="[object Error]",qe="[object Function]",Qe="[object GeneratorFunction]",He="[object Map]",en="[object Number]",Qn="[object Null]",nn="[object Object]",Vn="[object Promise]",et="[object Proxy]",hr="[object RegExp]",qn="[object Set]",kr="[object String]",ia="[object Symbol]",oc="[object Undefined]",vr="[object WeakMap]",uc="[object WeakSet]",yr="[object ArrayBuffer]",Ht="[object DataView]",bi="[object Float32Array]",Ei="[object Float64Array]",Ti="[object Int8Array]",_i="[object Int16Array]",wi="[object Int32Array]",Ai="[object Uint8Array]",Ri="[object Uint8ClampedArray]",Si="[object Uint16Array]",ji="[object Uint32Array]",dc=/\b__p \+= '';/g,gc=/\b(__p \+=) '' \+/g,fc=/(__e\(.*?\)|\b__t\)) \+\n'';/g,zl=/&(?:amp|lt|gt|quot|#39);/g,Xl=/[&<>"']/g,cc=RegExp(zl.source),mc=RegExp(Xl.source),pc=/<%-([\s\S]+?)%>/g,hc=/<%([\s\S]+?)%>/g,Jl=/<%=([\s\S]+?)%>/g,kc=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,vc=/^\w*$/,yc=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ii=/[\\^$.*+?()[\]{}|]/g,bc=RegExp(Ii.source),Ni=/^\s+/,Ec=/\s/,Tc=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,_c=/\{\n\/\* \[wrapped with (.+)\] \*/,wc=/,? & /,Ac=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Rc=/[()=,{}\[\]\/\s]/,Sc=/\\(\\)?/g,jc=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Zl=/\w*$/,Ic=/^[-+]0x[0-9a-f]+$/i,Nc=/^0b[01]+$/i,Oc=/^\[object .+?Constructor\]$/,Pc=/^0o[0-7]+$/i,Bc=/^(?:0|[1-9]\d*)$/,xc=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,sa=/($^)/,qc=/['\n\r\u2028\u2029\\]/g,la="\\ud800-\\udfff",Dc="\\u0300-\\u036f",Mc="\\ufe20-\\ufe2f",Lc="\\u20d0-\\u20ff",Ql=Dc+Mc+Lc,eo="\\u2700-\\u27bf",no="a-z\\xdf-\\xf6\\xf8-\\xff",Fc="\\xac\\xb1\\xd7\\xf7",Cc="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Kc="\\u2000-\\u206f",Vc=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",to="A-Z\\xc0-\\xd6\\xd8-\\xde",ro="\\ufe0e\\ufe0f",ao=Fc+Cc+Kc+Vc,Oi="['’]",Hc="["+la+"]",io="["+ao+"]",oa="["+Ql+"]",so="\\d+",Gc="["+eo+"]",lo="["+no+"]",oo="[^"+la+ao+so+eo+no+to+"]",Pi="\\ud83c[\\udffb-\\udfff]",$c="(?:"+oa+"|"+Pi+")",uo="[^"+la+"]",Bi="(?:\\ud83c[\\udde6-\\uddff]){2}",xi="[\\ud800-\\udbff][\\udc00-\\udfff]",Gt="["+to+"]",go="\\u200d",fo="(?:"+lo+"|"+oo+")",Uc="(?:"+Gt+"|"+oo+")",co="(?:"+Oi+"(?:d|ll|m|re|s|t|ve))?",mo="(?:"+Oi+"(?:D|LL|M|RE|S|T|VE))?",po=$c+"?",ho="["+ro+"]?",Yc="(?:"+go+"(?:"+[uo,Bi,xi].join("|")+")"+ho+po+")*",Wc="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",zc="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ko=ho+po+Yc,Xc="(?:"+[Gc,Bi,xi].join("|")+")"+ko,Jc="(?:"+[uo+oa+"?",oa,Bi,xi,Hc].join("|")+")",Zc=RegExp(Oi,"g"),Qc=RegExp(oa,"g"),qi=RegExp(Pi+"(?="+Pi+")|"+Jc+ko,"g"),em=RegExp([Gt+"?"+lo+"+"+co+"(?="+[io,Gt,"$"].join("|")+")",Uc+"+"+mo+"(?="+[io,Gt+fo,"$"].join("|")+")",Gt+"?"+fo+"+"+co,Gt+"+"+mo,zc,Wc,so,Xc].join("|"),"g"),nm=RegExp("["+go+la+Ql+ro+"]"),tm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,rm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],am=-1,Ce={};Ce[bi]=Ce[Ei]=Ce[Ti]=Ce[_i]=Ce[wi]=Ce[Ai]=Ce[Ri]=Ce[Si]=Ce[ji]=!0,Ce[Ee]=Ce[Re]=Ce[yr]=Ce[me]=Ce[Ht]=Ce[ve]=Ce[Se]=Ce[qe]=Ce[He]=Ce[en]=Ce[nn]=Ce[hr]=Ce[qn]=Ce[kr]=Ce[vr]=!1;var Le={};Le[Ee]=Le[Re]=Le[yr]=Le[Ht]=Le[me]=Le[ve]=Le[bi]=Le[Ei]=Le[Ti]=Le[_i]=Le[wi]=Le[He]=Le[en]=Le[nn]=Le[hr]=Le[qn]=Le[kr]=Le[ia]=Le[Ai]=Le[Ri]=Le[Si]=Le[ji]=!0,Le[Se]=Le[qe]=Le[vr]=!1;var im={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},sm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},lm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},om={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},um=parseFloat,dm=parseInt,vo=typeof Wa=="object"&&Wa&&Wa.Object===Object&&Wa,gm=typeof self=="object"&&self&&self.Object===Object&&self,tn=vo||gm||Function("return this")(),Di=i&&!i.nodeType&&i,jt=Di&&!0&&e&&!e.nodeType&&e,yo=jt&&jt.exports===Di,Mi=yo&&vo.process,wn=function(){try{var j=jt&&jt.require&&jt.require("util").types;return j||Mi&&Mi.binding&&Mi.binding("util")}catch{}}(),bo=wn&&wn.isArrayBuffer,Eo=wn&&wn.isDate,To=wn&&wn.isMap,_o=wn&&wn.isRegExp,wo=wn&&wn.isSet,Ao=wn&&wn.isTypedArray;function hn(j,V,L){switch(L.length){case 0:return j.call(V);case 1:return j.call(V,L[0]);case 2:return j.call(V,L[0],L[1]);case 3:return j.call(V,L[0],L[1],L[2])}return j.apply(V,L)}function fm(j,V,L,ie){for(var fe=-1,je=j==null?0:j.length;++fe<je;){var ze=j[fe];V(ie,ze,L(ze),j)}return ie}function An(j,V){for(var L=-1,ie=j==null?0:j.length;++L<ie&&V(j[L],L,j)!==!1;);return j}function cm(j,V){for(var L=j==null?0:j.length;L--&&V(j[L],L,j)!==!1;);return j}function Ro(j,V){for(var L=-1,ie=j==null?0:j.length;++L<ie;)if(!V(j[L],L,j))return!1;return!0}function ht(j,V){for(var L=-1,ie=j==null?0:j.length,fe=0,je=[];++L<ie;){var ze=j[L];V(ze,L,j)&&(je[fe++]=ze)}return je}function ua(j,V){var L=j==null?0:j.length;return!!L&&$t(j,V,0)>-1}function Li(j,V,L){for(var ie=-1,fe=j==null?0:j.length;++ie<fe;)if(L(V,j[ie]))return!0;return!1}function Ve(j,V){for(var L=-1,ie=j==null?0:j.length,fe=Array(ie);++L<ie;)fe[L]=V(j[L],L,j);return fe}function kt(j,V){for(var L=-1,ie=V.length,fe=j.length;++L<ie;)j[fe+L]=V[L];return j}function Fi(j,V,L,ie){var fe=-1,je=j==null?0:j.length;for(ie&&je&&(L=j[++fe]);++fe<je;)L=V(L,j[fe],fe,j);return L}function mm(j,V,L,ie){var fe=j==null?0:j.length;for(ie&&fe&&(L=j[--fe]);fe--;)L=V(L,j[fe],fe,j);return L}function Ci(j,V){for(var L=-1,ie=j==null?0:j.length;++L<ie;)if(V(j[L],L,j))return!0;return!1}var pm=Ki("length");function hm(j){return j.split("")}function km(j){return j.match(Ac)||[]}function So(j,V,L){var ie;return L(j,function(fe,je,ze){if(V(fe,je,ze))return ie=je,!1}),ie}function da(j,V,L,ie){for(var fe=j.length,je=L+(ie?1:-1);ie?je--:++je<fe;)if(V(j[je],je,j))return je;return-1}function $t(j,V,L){return V===V?Im(j,V,L):da(j,jo,L)}function vm(j,V,L,ie){for(var fe=L-1,je=j.length;++fe<je;)if(ie(j[fe],V))return fe;return-1}function jo(j){return j!==j}function Io(j,V){var L=j==null?0:j.length;return L?Hi(j,V)/L:X}function Ki(j){return function(V){return V==null?r:V[j]}}function Vi(j){return function(V){return j==null?r:j[V]}}function No(j,V,L,ie,fe){return fe(j,function(je,ze,De){L=ie?(ie=!1,je):V(L,je,ze,De)}),L}function ym(j,V){var L=j.length;for(j.sort(V);L--;)j[L]=j[L].value;return j}function Hi(j,V){for(var L,ie=-1,fe=j.length;++ie<fe;){var je=V(j[ie]);je!==r&&(L=L===r?je:L+je)}return L}function Gi(j,V){for(var L=-1,ie=Array(j);++L<j;)ie[L]=V(L);return ie}function bm(j,V){return Ve(V,function(L){return[L,j[L]]})}function Oo(j){return j&&j.slice(0,qo(j)+1).replace(Ni,"")}function kn(j){return function(V){return j(V)}}function $i(j,V){return Ve(V,function(L){return j[L]})}function br(j,V){return j.has(V)}function Po(j,V){for(var L=-1,ie=j.length;++L<ie&&$t(V,j[L],0)>-1;);return L}function Bo(j,V){for(var L=j.length;L--&&$t(V,j[L],0)>-1;);return L}function Em(j,V){for(var L=j.length,ie=0;L--;)j[L]===V&&++ie;return ie}var Tm=Vi(im),_m=Vi(sm);function wm(j){return"\\"+om[j]}function Am(j,V){return j==null?r:j[V]}function Ut(j){return nm.test(j)}function Rm(j){return tm.test(j)}function Sm(j){for(var V,L=[];!(V=j.next()).done;)L.push(V.value);return L}function Ui(j){var V=-1,L=Array(j.size);return j.forEach(function(ie,fe){L[++V]=[fe,ie]}),L}function xo(j,V){return function(L){return j(V(L))}}function vt(j,V){for(var L=-1,ie=j.length,fe=0,je=[];++L<ie;){var ze=j[L];(ze===V||ze===h)&&(j[L]=h,je[fe++]=L)}return je}function ga(j){var V=-1,L=Array(j.size);return j.forEach(function(ie){L[++V]=ie}),L}function jm(j){var V=-1,L=Array(j.size);return j.forEach(function(ie){L[++V]=[ie,ie]}),L}function Im(j,V,L){for(var ie=L-1,fe=j.length;++ie<fe;)if(j[ie]===V)return ie;return-1}function Nm(j,V,L){for(var ie=L+1;ie--;)if(j[ie]===V)return ie;return ie}function Yt(j){return Ut(j)?Pm(j):pm(j)}function Dn(j){return Ut(j)?Bm(j):hm(j)}function qo(j){for(var V=j.length;V--&&Ec.test(j.charAt(V)););return V}var Om=Vi(lm);function Pm(j){for(var V=qi.lastIndex=0;qi.test(j);)++V;return V}function Bm(j){return j.match(qi)||[]}function xm(j){return j.match(em)||[]}var qm=function j(V){V=V==null?tn:Wt.defaults(tn.Object(),V,Wt.pick(tn,rm));var L=V.Array,ie=V.Date,fe=V.Error,je=V.Function,ze=V.Math,De=V.Object,Yi=V.RegExp,Dm=V.String,Rn=V.TypeError,fa=L.prototype,Mm=je.prototype,zt=De.prototype,ca=V["__core-js_shared__"],ma=Mm.toString,Be=zt.hasOwnProperty,Lm=0,Do=function(){var n=/[^.]+$/.exec(ca&&ca.keys&&ca.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),pa=zt.toString,Fm=ma.call(De),Cm=tn._,Km=Yi("^"+ma.call(Be).replace(Ii,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ha=yo?V.Buffer:r,yt=V.Symbol,ka=V.Uint8Array,Mo=ha?ha.allocUnsafe:r,va=xo(De.getPrototypeOf,De),Lo=De.create,Fo=zt.propertyIsEnumerable,ya=fa.splice,Co=yt?yt.isConcatSpreadable:r,Er=yt?yt.iterator:r,It=yt?yt.toStringTag:r,ba=function(){try{var n=xt(De,"defineProperty");return n({},"",{}),n}catch{}}(),Vm=V.clearTimeout!==tn.clearTimeout&&V.clearTimeout,Hm=ie&&ie.now!==tn.Date.now&&ie.now,Gm=V.setTimeout!==tn.setTimeout&&V.setTimeout,Ea=ze.ceil,Ta=ze.floor,Wi=De.getOwnPropertySymbols,$m=ha?ha.isBuffer:r,Ko=V.isFinite,Um=fa.join,Ym=xo(De.keys,De),Xe=ze.max,an=ze.min,Wm=ie.now,zm=V.parseInt,Vo=ze.random,Xm=fa.reverse,zi=xt(V,"DataView"),Tr=xt(V,"Map"),Xi=xt(V,"Promise"),Xt=xt(V,"Set"),_r=xt(V,"WeakMap"),wr=xt(De,"create"),_a=_r&&new _r,Jt={},Jm=qt(zi),Zm=qt(Tr),Qm=qt(Xi),ep=qt(Xt),np=qt(_r),wa=yt?yt.prototype:r,Ar=wa?wa.valueOf:r,Ho=wa?wa.toString:r;function m(n){if(Ue(n)&&!ce(n)&&!(n instanceof be)){if(n instanceof Sn)return n;if(Be.call(n,"__wrapped__"))return Gu(n)}return new Sn(n)}var Zt=function(){function n(){}return function(t){if(!Ge(t))return{};if(Lo)return Lo(t);n.prototype=t;var l=new n;return n.prototype=r,l}}();function Aa(){}function Sn(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}m.templateSettings={escape:pc,evaluate:hc,interpolate:Jl,variable:"",imports:{_:m}},m.prototype=Aa.prototype,m.prototype.constructor=m,Sn.prototype=Zt(Aa.prototype),Sn.prototype.constructor=Sn;function be(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ee,this.__views__=[]}function tp(){var n=new be(this.__wrapped__);return n.__actions__=gn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=gn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=gn(this.__views__),n}function rp(){if(this.__filtered__){var n=new be(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function ap(){var n=this.__wrapped__.value(),t=this.__dir__,l=ce(n),u=t<0,f=l?n.length:0,k=hh(0,f,this.__views__),y=k.start,w=k.end,N=w-y,U=u?w:y-1,Y=this.__iteratees__,J=Y.length,ae=0,le=an(N,this.__takeCount__);if(!l||!u&&f==N&&le==N)return cu(n,this.__actions__);var de=[];e:for(;N--&&ae<le;){U+=t;for(var he=-1,ge=n[U];++he<J;){var ye=Y[he],Te=ye.iteratee,bn=ye.type,un=Te(ge);if(bn==x)ge=un;else if(!un){if(bn==P)continue e;break e}}de[ae++]=ge}return de}be.prototype=Zt(Aa.prototype),be.prototype.constructor=be;function Nt(n){var t=-1,l=n==null?0:n.length;for(this.clear();++t<l;){var u=n[t];this.set(u[0],u[1])}}function ip(){this.__data__=wr?wr(null):{},this.size=0}function sp(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function lp(n){var t=this.__data__;if(wr){var l=t[n];return l===c?r:l}return Be.call(t,n)?t[n]:r}function op(n){var t=this.__data__;return wr?t[n]!==r:Be.call(t,n)}function up(n,t){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=wr&&t===r?c:t,this}Nt.prototype.clear=ip,Nt.prototype.delete=sp,Nt.prototype.get=lp,Nt.prototype.has=op,Nt.prototype.set=up;function nt(n){var t=-1,l=n==null?0:n.length;for(this.clear();++t<l;){var u=n[t];this.set(u[0],u[1])}}function dp(){this.__data__=[],this.size=0}function gp(n){var t=this.__data__,l=Ra(t,n);if(l<0)return!1;var u=t.length-1;return l==u?t.pop():ya.call(t,l,1),--this.size,!0}function fp(n){var t=this.__data__,l=Ra(t,n);return l<0?r:t[l][1]}function cp(n){return Ra(this.__data__,n)>-1}function mp(n,t){var l=this.__data__,u=Ra(l,n);return u<0?(++this.size,l.push([n,t])):l[u][1]=t,this}nt.prototype.clear=dp,nt.prototype.delete=gp,nt.prototype.get=fp,nt.prototype.has=cp,nt.prototype.set=mp;function tt(n){var t=-1,l=n==null?0:n.length;for(this.clear();++t<l;){var u=n[t];this.set(u[0],u[1])}}function pp(){this.size=0,this.__data__={hash:new Nt,map:new(Tr||nt),string:new Nt}}function hp(n){var t=La(this,n).delete(n);return this.size-=t?1:0,t}function kp(n){return La(this,n).get(n)}function vp(n){return La(this,n).has(n)}function yp(n,t){var l=La(this,n),u=l.size;return l.set(n,t),this.size+=l.size==u?0:1,this}tt.prototype.clear=pp,tt.prototype.delete=hp,tt.prototype.get=kp,tt.prototype.has=vp,tt.prototype.set=yp;function Ot(n){var t=-1,l=n==null?0:n.length;for(this.__data__=new tt;++t<l;)this.add(n[t])}function bp(n){return this.__data__.set(n,c),this}function Ep(n){return this.__data__.has(n)}Ot.prototype.add=Ot.prototype.push=bp,Ot.prototype.has=Ep;function Mn(n){var t=this.__data__=new nt(n);this.size=t.size}function Tp(){this.__data__=new nt,this.size=0}function _p(n){var t=this.__data__,l=t.delete(n);return this.size=t.size,l}function wp(n){return this.__data__.get(n)}function Ap(n){return this.__data__.has(n)}function Rp(n,t){var l=this.__data__;if(l instanceof nt){var u=l.__data__;if(!Tr||u.length<s-1)return u.push([n,t]),this.size=++l.size,this;l=this.__data__=new tt(u)}return l.set(n,t),this.size=l.size,this}Mn.prototype.clear=Tp,Mn.prototype.delete=_p,Mn.prototype.get=wp,Mn.prototype.has=Ap,Mn.prototype.set=Rp;function Go(n,t){var l=ce(n),u=!l&&Dt(n),f=!l&&!u&&wt(n),k=!l&&!u&&!f&&tr(n),y=l||u||f||k,w=y?Gi(n.length,Dm):[],N=w.length;for(var U in n)(t||Be.call(n,U))&&!(y&&(U=="length"||f&&(U=="offset"||U=="parent")||k&&(U=="buffer"||U=="byteLength"||U=="byteOffset")||st(U,N)))&&w.push(U);return w}function $o(n){var t=n.length;return t?n[ls(0,t-1)]:r}function Sp(n,t){return Fa(gn(n),Pt(t,0,n.length))}function jp(n){return Fa(gn(n))}function Ji(n,t,l){(l!==r&&!Ln(n[t],l)||l===r&&!(t in n))&&rt(n,t,l)}function Rr(n,t,l){var u=n[t];(!(Be.call(n,t)&&Ln(u,l))||l===r&&!(t in n))&&rt(n,t,l)}function Ra(n,t){for(var l=n.length;l--;)if(Ln(n[l][0],t))return l;return-1}function Ip(n,t,l,u){return bt(n,function(f,k,y){t(u,f,l(f),y)}),u}function Uo(n,t){return n&&Gn(t,Je(t),n)}function Np(n,t){return n&&Gn(t,cn(t),n)}function rt(n,t,l){t=="__proto__"&&ba?ba(n,t,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[t]=l}function Zi(n,t){for(var l=-1,u=t.length,f=L(u),k=n==null;++l<u;)f[l]=k?r:Ps(n,t[l]);return f}function Pt(n,t,l){return n===n&&(l!==r&&(n=n<=l?n:l),t!==r&&(n=n>=t?n:t)),n}function jn(n,t,l,u,f,k){var y,w=t&v,N=t&_,U=t&b;if(l&&(y=f?l(n,u,f,k):l(n)),y!==r)return y;if(!Ge(n))return n;var Y=ce(n);if(Y){if(y=vh(n),!w)return gn(n,y)}else{var J=sn(n),ae=J==qe||J==Qe;if(wt(n))return hu(n,w);if(J==nn||J==Ee||ae&&!f){if(y=N||ae?{}:qu(n),!w)return N?lh(n,Np(y,n)):sh(n,Uo(y,n))}else{if(!Le[J])return f?n:{};y=yh(n,J,w)}}k||(k=new Mn);var le=k.get(n);if(le)return le;k.set(n,y),dd(n)?n.forEach(function(ge){y.add(jn(ge,t,l,ge,n,k))}):od(n)&&n.forEach(function(ge,ye){y.set(ye,jn(ge,t,l,ye,n,k))});var de=U?N?vs:ks:N?cn:Je,he=Y?r:de(n);return An(he||n,function(ge,ye){he&&(ye=ge,ge=n[ye]),Rr(y,ye,jn(ge,t,l,ye,n,k))}),y}function Op(n){var t=Je(n);return function(l){return Yo(l,n,t)}}function Yo(n,t,l){var u=l.length;if(n==null)return!u;for(n=De(n);u--;){var f=l[u],k=t[f],y=n[f];if(y===r&&!(f in n)||!k(y))return!1}return!0}function Wo(n,t,l){if(typeof n!="function")throw new Rn(d);return Br(function(){n.apply(r,l)},t)}function Sr(n,t,l,u){var f=-1,k=ua,y=!0,w=n.length,N=[],U=t.length;if(!w)return N;l&&(t=Ve(t,kn(l))),u?(k=Li,y=!1):t.length>=s&&(k=br,y=!1,t=new Ot(t));e:for(;++f<w;){var Y=n[f],J=l==null?Y:l(Y);if(Y=u||Y!==0?Y:0,y&&J===J){for(var ae=U;ae--;)if(t[ae]===J)continue e;N.push(Y)}else k(t,J,u)||N.push(Y)}return N}var bt=Eu(Hn),zo=Eu(es,!0);function Pp(n,t){var l=!0;return bt(n,function(u,f,k){return l=!!t(u,f,k),l}),l}function Sa(n,t,l){for(var u=-1,f=n.length;++u<f;){var k=n[u],y=t(k);if(y!=null&&(w===r?y===y&&!yn(y):l(y,w)))var w=y,N=k}return N}function Bp(n,t,l,u){var f=n.length;for(l=pe(l),l<0&&(l=-l>f?0:f+l),u=u===r||u>f?f:pe(u),u<0&&(u+=f),u=l>u?0:fd(u);l<u;)n[l++]=t;return n}function Xo(n,t){var l=[];return bt(n,function(u,f,k){t(u,f,k)&&l.push(u)}),l}function rn(n,t,l,u,f){var k=-1,y=n.length;for(l||(l=Eh),f||(f=[]);++k<y;){var w=n[k];t>0&&l(w)?t>1?rn(w,t-1,l,u,f):kt(f,w):u||(f[f.length]=w)}return f}var Qi=Tu(),Jo=Tu(!0);function Hn(n,t){return n&&Qi(n,t,Je)}function es(n,t){return n&&Jo(n,t,Je)}function ja(n,t){return ht(t,function(l){return lt(n[l])})}function Bt(n,t){t=Tt(t,n);for(var l=0,u=t.length;n!=null&&l<u;)n=n[$n(t[l++])];return l&&l==u?n:r}function Zo(n,t,l){var u=t(n);return ce(n)?u:kt(u,l(n))}function ln(n){return n==null?n===r?oc:Qn:It&&It in De(n)?ph(n):jh(n)}function ns(n,t){return n>t}function xp(n,t){return n!=null&&Be.call(n,t)}function qp(n,t){return n!=null&&t in De(n)}function Dp(n,t,l){return n>=an(t,l)&&n<Xe(t,l)}function ts(n,t,l){for(var u=l?Li:ua,f=n[0].length,k=n.length,y=k,w=L(k),N=1/0,U=[];y--;){var Y=n[y];y&&t&&(Y=Ve(Y,kn(t))),N=an(Y.length,N),w[y]=!l&&(t||f>=120&&Y.length>=120)?new Ot(y&&Y):r}Y=n[0];var J=-1,ae=w[0];e:for(;++J<f&&U.length<N;){var le=Y[J],de=t?t(le):le;if(le=l||le!==0?le:0,!(ae?br(ae,de):u(U,de,l))){for(y=k;--y;){var he=w[y];if(!(he?br(he,de):u(n[y],de,l)))continue e}ae&&ae.push(de),U.push(le)}}return U}function Mp(n,t,l,u){return Hn(n,function(f,k,y){t(u,l(f),k,y)}),u}function jr(n,t,l){t=Tt(t,n),n=Fu(n,t);var u=n==null?n:n[$n(Nn(t))];return u==null?r:hn(u,n,l)}function Qo(n){return Ue(n)&&ln(n)==Ee}function Lp(n){return Ue(n)&&ln(n)==yr}function Fp(n){return Ue(n)&&ln(n)==ve}function Ir(n,t,l,u,f){return n===t?!0:n==null||t==null||!Ue(n)&&!Ue(t)?n!==n&&t!==t:Cp(n,t,l,u,Ir,f)}function Cp(n,t,l,u,f,k){var y=ce(n),w=ce(t),N=y?Re:sn(n),U=w?Re:sn(t);N=N==Ee?nn:N,U=U==Ee?nn:U;var Y=N==nn,J=U==nn,ae=N==U;if(ae&&wt(n)){if(!wt(t))return!1;y=!0,Y=!1}if(ae&&!Y)return k||(k=new Mn),y||tr(n)?Pu(n,t,l,u,f,k):ch(n,t,N,l,u,f,k);if(!(l&O)){var le=Y&&Be.call(n,"__wrapped__"),de=J&&Be.call(t,"__wrapped__");if(le||de){var he=le?n.value():n,ge=de?t.value():t;return k||(k=new Mn),f(he,ge,l,u,k)}}return ae?(k||(k=new Mn),mh(n,t,l,u,f,k)):!1}function Kp(n){return Ue(n)&&sn(n)==He}function rs(n,t,l,u){var f=l.length,k=f,y=!u;if(n==null)return!k;for(n=De(n);f--;){var w=l[f];if(y&&w[2]?w[1]!==n[w[0]]:!(w[0]in n))return!1}for(;++f<k;){w=l[f];var N=w[0],U=n[N],Y=w[1];if(y&&w[2]){if(U===r&&!(N in n))return!1}else{var J=new Mn;if(u)var ae=u(U,Y,N,n,t,J);if(!(ae===r?Ir(Y,U,O|T,u,J):ae))return!1}}return!0}function eu(n){if(!Ge(n)||_h(n))return!1;var t=lt(n)?Km:Oc;return t.test(qt(n))}function Vp(n){return Ue(n)&&ln(n)==hr}function Hp(n){return Ue(n)&&sn(n)==qn}function Gp(n){return Ue(n)&&$a(n.length)&&!!Ce[ln(n)]}function nu(n){return typeof n=="function"?n:n==null?mn:typeof n=="object"?ce(n)?au(n[0],n[1]):ru(n):_d(n)}function as(n){if(!Pr(n))return Ym(n);var t=[];for(var l in De(n))Be.call(n,l)&&l!="constructor"&&t.push(l);return t}function $p(n){if(!Ge(n))return Sh(n);var t=Pr(n),l=[];for(var u in n)u=="constructor"&&(t||!Be.call(n,u))||l.push(u);return l}function is(n,t){return n<t}function tu(n,t){var l=-1,u=fn(n)?L(n.length):[];return bt(n,function(f,k,y){u[++l]=t(f,k,y)}),u}function ru(n){var t=bs(n);return t.length==1&&t[0][2]?Mu(t[0][0],t[0][1]):function(l){return l===n||rs(l,n,t)}}function au(n,t){return Ts(n)&&Du(t)?Mu($n(n),t):function(l){var u=Ps(l,n);return u===r&&u===t?Bs(l,n):Ir(t,u,O|T)}}function Ia(n,t,l,u,f){n!==t&&Qi(t,function(k,y){if(f||(f=new Mn),Ge(k))Up(n,t,y,l,Ia,u,f);else{var w=u?u(ws(n,y),k,y+"",n,t,f):r;w===r&&(w=k),Ji(n,y,w)}},cn)}function Up(n,t,l,u,f,k,y){var w=ws(n,l),N=ws(t,l),U=y.get(N);if(U){Ji(n,l,U);return}var Y=k?k(w,N,l+"",n,t,y):r,J=Y===r;if(J){var ae=ce(N),le=!ae&&wt(N),de=!ae&&!le&&tr(N);Y=N,ae||le||de?ce(w)?Y=w:Ye(w)?Y=gn(w):le?(J=!1,Y=hu(N,!0)):de?(J=!1,Y=ku(N,!0)):Y=[]:xr(N)||Dt(N)?(Y=w,Dt(w)?Y=cd(w):(!Ge(w)||lt(w))&&(Y=qu(N))):J=!1}J&&(y.set(N,Y),f(Y,N,u,k,y),y.delete(N)),Ji(n,l,Y)}function iu(n,t){var l=n.length;if(l)return t+=t<0?l:0,st(t,l)?n[t]:r}function su(n,t,l){t.length?t=Ve(t,function(k){return ce(k)?function(y){return Bt(y,k.length===1?k[0]:k)}:k}):t=[mn];var u=-1;t=Ve(t,kn(ue()));var f=tu(n,function(k,y,w){var N=Ve(t,function(U){return U(k)});return{criteria:N,index:++u,value:k}});return ym(f,function(k,y){return ih(k,y,l)})}function Yp(n,t){return lu(n,t,function(l,u){return Bs(n,u)})}function lu(n,t,l){for(var u=-1,f=t.length,k={};++u<f;){var y=t[u],w=Bt(n,y);l(w,y)&&Nr(k,Tt(y,n),w)}return k}function Wp(n){return function(t){return Bt(t,n)}}function ss(n,t,l,u){var f=u?vm:$t,k=-1,y=t.length,w=n;for(n===t&&(t=gn(t)),l&&(w=Ve(n,kn(l)));++k<y;)for(var N=0,U=t[k],Y=l?l(U):U;(N=f(w,Y,N,u))>-1;)w!==n&&ya.call(w,N,1),ya.call(n,N,1);return n}function ou(n,t){for(var l=n?t.length:0,u=l-1;l--;){var f=t[l];if(l==u||f!==k){var k=f;st(f)?ya.call(n,f,1):ds(n,f)}}return n}function ls(n,t){return n+Ta(Vo()*(t-n+1))}function zp(n,t,l,u){for(var f=-1,k=Xe(Ea((t-n)/(l||1)),0),y=L(k);k--;)y[u?k:++f]=n,n+=l;return y}function os(n,t){var l="";if(!n||t<1||t>B)return l;do t%2&&(l+=n),t=Ta(t/2),t&&(n+=n);while(t);return l}function ke(n,t){return As(Lu(n,t,mn),n+"")}function Xp(n){return $o(rr(n))}function Jp(n,t){var l=rr(n);return Fa(l,Pt(t,0,l.length))}function Nr(n,t,l,u){if(!Ge(n))return n;t=Tt(t,n);for(var f=-1,k=t.length,y=k-1,w=n;w!=null&&++f<k;){var N=$n(t[f]),U=l;if(N==="__proto__"||N==="constructor"||N==="prototype")return n;if(f!=y){var Y=w[N];U=u?u(Y,N,w):r,U===r&&(U=Ge(Y)?Y:st(t[f+1])?[]:{})}Rr(w,N,U),w=w[N]}return n}var uu=_a?function(n,t){return _a.set(n,t),n}:mn,Zp=ba?function(n,t){return ba(n,"toString",{configurable:!0,enumerable:!1,value:qs(t),writable:!0})}:mn;function Qp(n){return Fa(rr(n))}function In(n,t,l){var u=-1,f=n.length;t<0&&(t=-t>f?0:f+t),l=l>f?f:l,l<0&&(l+=f),f=t>l?0:l-t>>>0,t>>>=0;for(var k=L(f);++u<f;)k[u]=n[u+t];return k}function eh(n,t){var l;return bt(n,function(u,f,k){return l=t(u,f,k),!l}),!!l}function Na(n,t,l){var u=0,f=n==null?u:n.length;if(typeof t=="number"&&t===t&&f<=oe){for(;u<f;){var k=u+f>>>1,y=n[k];y!==null&&!yn(y)&&(l?y<=t:y<t)?u=k+1:f=k}return f}return us(n,t,mn,l)}function us(n,t,l,u){var f=0,k=n==null?0:n.length;if(k===0)return 0;t=l(t);for(var y=t!==t,w=t===null,N=yn(t),U=t===r;f<k;){var Y=Ta((f+k)/2),J=l(n[Y]),ae=J!==r,le=J===null,de=J===J,he=yn(J);if(y)var ge=u||de;else U?ge=de&&(u||ae):w?ge=de&&ae&&(u||!le):N?ge=de&&ae&&!le&&(u||!he):le||he?ge=!1:ge=u?J<=t:J<t;ge?f=Y+1:k=Y}return an(k,re)}function du(n,t){for(var l=-1,u=n.length,f=0,k=[];++l<u;){var y=n[l],w=t?t(y):y;if(!l||!Ln(w,N)){var N=w;k[f++]=y===0?0:y}}return k}function gu(n){return typeof n=="number"?n:yn(n)?X:+n}function vn(n){if(typeof n=="string")return n;if(ce(n))return Ve(n,vn)+"";if(yn(n))return Ho?Ho.call(n):"";var t=n+"";return t=="0"&&1/n==-1/0?"-0":t}function Et(n,t,l){var u=-1,f=ua,k=n.length,y=!0,w=[],N=w;if(l)y=!1,f=Li;else if(k>=s){var U=t?null:gh(n);if(U)return ga(U);y=!1,f=br,N=new Ot}else N=t?[]:w;e:for(;++u<k;){var Y=n[u],J=t?t(Y):Y;if(Y=l||Y!==0?Y:0,y&&J===J){for(var ae=N.length;ae--;)if(N[ae]===J)continue e;t&&N.push(J),w.push(Y)}else f(N,J,l)||(N!==w&&N.push(J),w.push(Y))}return w}function ds(n,t){return t=Tt(t,n),n=Fu(n,t),n==null||delete n[$n(Nn(t))]}function fu(n,t,l,u){return Nr(n,t,l(Bt(n,t)),u)}function Oa(n,t,l,u){for(var f=n.length,k=u?f:-1;(u?k--:++k<f)&&t(n[k],k,n););return l?In(n,u?0:k,u?k+1:f):In(n,u?k+1:0,u?f:k)}function cu(n,t){var l=n;return l instanceof be&&(l=l.value()),Fi(t,function(u,f){return f.func.apply(f.thisArg,kt([u],f.args))},l)}function gs(n,t,l){var u=n.length;if(u<2)return u?Et(n[0]):[];for(var f=-1,k=L(u);++f<u;)for(var y=n[f],w=-1;++w<u;)w!=f&&(k[f]=Sr(k[f]||y,n[w],t,l));return Et(rn(k,1),t,l)}function mu(n,t,l){for(var u=-1,f=n.length,k=t.length,y={};++u<f;){var w=u<k?t[u]:r;l(y,n[u],w)}return y}function fs(n){return Ye(n)?n:[]}function cs(n){return typeof n=="function"?n:mn}function Tt(n,t){return ce(n)?n:Ts(n,t)?[n]:Hu(Oe(n))}var nh=ke;function _t(n,t,l){var u=n.length;return l=l===r?u:l,!t&&l>=u?n:In(n,t,l)}var pu=Vm||function(n){return tn.clearTimeout(n)};function hu(n,t){if(t)return n.slice();var l=n.length,u=Mo?Mo(l):new n.constructor(l);return n.copy(u),u}function ms(n){var t=new n.constructor(n.byteLength);return new ka(t).set(new ka(n)),t}function th(n,t){var l=t?ms(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function rh(n){var t=new n.constructor(n.source,Zl.exec(n));return t.lastIndex=n.lastIndex,t}function ah(n){return Ar?De(Ar.call(n)):{}}function ku(n,t){var l=t?ms(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function vu(n,t){if(n!==t){var l=n!==r,u=n===null,f=n===n,k=yn(n),y=t!==r,w=t===null,N=t===t,U=yn(t);if(!w&&!U&&!k&&n>t||k&&y&&N&&!w&&!U||u&&y&&N||!l&&N||!f)return 1;if(!u&&!k&&!U&&n<t||U&&l&&f&&!u&&!k||w&&l&&f||!y&&f||!N)return-1}return 0}function ih(n,t,l){for(var u=-1,f=n.criteria,k=t.criteria,y=f.length,w=l.length;++u<y;){var N=vu(f[u],k[u]);if(N){if(u>=w)return N;var U=l[u];return N*(U=="desc"?-1:1)}}return n.index-t.index}function yu(n,t,l,u){for(var f=-1,k=n.length,y=l.length,w=-1,N=t.length,U=Xe(k-y,0),Y=L(N+U),J=!u;++w<N;)Y[w]=t[w];for(;++f<y;)(J||f<k)&&(Y[l[f]]=n[f]);for(;U--;)Y[w++]=n[f++];return Y}function bu(n,t,l,u){for(var f=-1,k=n.length,y=-1,w=l.length,N=-1,U=t.length,Y=Xe(k-w,0),J=L(Y+U),ae=!u;++f<Y;)J[f]=n[f];for(var le=f;++N<U;)J[le+N]=t[N];for(;++y<w;)(ae||f<k)&&(J[le+l[y]]=n[f++]);return J}function gn(n,t){var l=-1,u=n.length;for(t||(t=L(u));++l<u;)t[l]=n[l];return t}function Gn(n,t,l,u){var f=!l;l||(l={});for(var k=-1,y=t.length;++k<y;){var w=t[k],N=u?u(l[w],n[w],w,l,n):r;N===r&&(N=n[w]),f?rt(l,w,N):Rr(l,w,N)}return l}function sh(n,t){return Gn(n,Es(n),t)}function lh(n,t){return Gn(n,Bu(n),t)}function Pa(n,t){return function(l,u){var f=ce(l)?fm:Ip,k=t?t():{};return f(l,n,ue(u,2),k)}}function Qt(n){return ke(function(t,l){var u=-1,f=l.length,k=f>1?l[f-1]:r,y=f>2?l[2]:r;for(k=n.length>3&&typeof k=="function"?(f--,k):r,y&&on(l[0],l[1],y)&&(k=f<3?r:k,f=1),t=De(t);++u<f;){var w=l[u];w&&n(t,w,u,k)}return t})}function Eu(n,t){return function(l,u){if(l==null)return l;if(!fn(l))return n(l,u);for(var f=l.length,k=t?f:-1,y=De(l);(t?k--:++k<f)&&u(y[k],k,y)!==!1;);return l}}function Tu(n){return function(t,l,u){for(var f=-1,k=De(t),y=u(t),w=y.length;w--;){var N=y[n?w:++f];if(l(k[N],N,k)===!1)break}return t}}function oh(n,t,l){var u=t&E,f=Or(n);function k(){var y=this&&this!==tn&&this instanceof k?f:n;return y.apply(u?l:this,arguments)}return k}function _u(n){return function(t){t=Oe(t);var l=Ut(t)?Dn(t):r,u=l?l[0]:t.charAt(0),f=l?_t(l,1).join(""):t.slice(1);return u[n]()+f}}function er(n){return function(t){return Fi(Ed(bd(t).replace(Zc,"")),n,"")}}function Or(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var l=Zt(n.prototype),u=n.apply(l,t);return Ge(u)?u:l}}function uh(n,t,l){var u=Or(n);function f(){for(var k=arguments.length,y=L(k),w=k,N=nr(f);w--;)y[w]=arguments[w];var U=k<3&&y[0]!==N&&y[k-1]!==N?[]:vt(y,N);if(k-=U.length,k<l)return ju(n,t,Ba,f.placeholder,r,y,U,r,r,l-k);var Y=this&&this!==tn&&this instanceof f?u:n;return hn(Y,this,y)}return f}function wu(n){return function(t,l,u){var f=De(t);if(!fn(t)){var k=ue(l,3);t=Je(t),l=function(w){return k(f[w],w,f)}}var y=n(t,l,u);return y>-1?f[k?t[y]:y]:r}}function Au(n){return it(function(t){var l=t.length,u=l,f=Sn.prototype.thru;for(n&&t.reverse();u--;){var k=t[u];if(typeof k!="function")throw new Rn(d);if(f&&!y&&Ma(k)=="wrapper")var y=new Sn([],!0)}for(u=y?u:l;++u<l;){k=t[u];var w=Ma(k),N=w=="wrapper"?ys(k):r;N&&_s(N[0])&&N[1]==(F|S|I|K)&&!N[4].length&&N[9]==1?y=y[Ma(N[0])].apply(y,N[3]):y=k.length==1&&_s(k)?y[w]():y.thru(k)}return function(){var U=arguments,Y=U[0];if(y&&U.length==1&&ce(Y))return y.plant(Y).value();for(var J=0,ae=l?t[J].apply(this,U):Y;++J<l;)ae=t[J].call(this,ae);return ae}})}function Ba(n,t,l,u,f,k,y,w,N,U){var Y=t&F,J=t&E,ae=t&R,le=t&(S|W),de=t&ne,he=ae?r:Or(n);function ge(){for(var ye=arguments.length,Te=L(ye),bn=ye;bn--;)Te[bn]=arguments[bn];if(le)var un=nr(ge),En=Em(Te,un);if(u&&(Te=yu(Te,u,f,le)),k&&(Te=bu(Te,k,y,le)),ye-=En,le&&ye<U){var We=vt(Te,un);return ju(n,t,Ba,ge.placeholder,l,Te,We,w,N,U-ye)}var Fn=J?l:this,ut=ae?Fn[n]:n;return ye=Te.length,w?Te=Ih(Te,w):de&&ye>1&&Te.reverse(),Y&&N<ye&&(Te.length=N),this&&this!==tn&&this instanceof ge&&(ut=he||Or(ut)),ut.apply(Fn,Te)}return ge}function Ru(n,t){return function(l,u){return Mp(l,n,t(u),{})}}function xa(n,t){return function(l,u){var f;if(l===r&&u===r)return t;if(l!==r&&(f=l),u!==r){if(f===r)return u;typeof l=="string"||typeof u=="string"?(l=vn(l),u=vn(u)):(l=gu(l),u=gu(u)),f=n(l,u)}return f}}function ps(n){return it(function(t){return t=Ve(t,kn(ue())),ke(function(l){var u=this;return n(t,function(f){return hn(f,u,l)})})})}function qa(n,t){t=t===r?" ":vn(t);var l=t.length;if(l<2)return l?os(t,n):t;var u=os(t,Ea(n/Yt(t)));return Ut(t)?_t(Dn(u),0,n).join(""):u.slice(0,n)}function dh(n,t,l,u){var f=t&E,k=Or(n);function y(){for(var w=-1,N=arguments.length,U=-1,Y=u.length,J=L(Y+N),ae=this&&this!==tn&&this instanceof y?k:n;++U<Y;)J[U]=u[U];for(;N--;)J[U++]=arguments[++w];return hn(ae,f?l:this,J)}return y}function Su(n){return function(t,l,u){return u&&typeof u!="number"&&on(t,l,u)&&(l=u=r),t=ot(t),l===r?(l=t,t=0):l=ot(l),u=u===r?t<l?1:-1:ot(u),zp(t,l,u,n)}}function Da(n){return function(t,l){return typeof t=="string"&&typeof l=="string"||(t=On(t),l=On(l)),n(t,l)}}function ju(n,t,l,u,f,k,y,w,N,U){var Y=t&S,J=Y?y:r,ae=Y?r:y,le=Y?k:r,de=Y?r:k;t|=Y?I:$,t&=~(Y?$:I),t&q||(t&=-4);var he=[n,t,f,le,J,de,ae,w,N,U],ge=l.apply(r,he);return _s(n)&&Cu(ge,he),ge.placeholder=u,Ku(ge,n,t)}function hs(n){var t=ze[n];return function(l,u){if(l=On(l),u=u==null?0:an(pe(u),292),u&&Ko(l)){var f=(Oe(l)+"e").split("e"),k=t(f[0]+"e"+(+f[1]+u));return f=(Oe(k)+"e").split("e"),+(f[0]+"e"+(+f[1]-u))}return t(l)}}var gh=Xt&&1/ga(new Xt([,-0]))[1]==M?function(n){return new Xt(n)}:Ls;function Iu(n){return function(t){var l=sn(t);return l==He?Ui(t):l==qn?jm(t):bm(t,n(t))}}function at(n,t,l,u,f,k,y,w){var N=t&R;if(!N&&typeof n!="function")throw new Rn(d);var U=u?u.length:0;if(U||(t&=-97,u=f=r),y=y===r?y:Xe(pe(y),0),w=w===r?w:pe(w),U-=f?f.length:0,t&$){var Y=u,J=f;u=f=r}var ae=N?r:ys(n),le=[n,t,l,u,f,Y,J,k,y,w];if(ae&&Rh(le,ae),n=le[0],t=le[1],l=le[2],u=le[3],f=le[4],w=le[9]=le[9]===r?N?0:n.length:Xe(le[9]-U,0),!w&&t&(S|W)&&(t&=-25),!t||t==E)var de=oh(n,t,l);else t==S||t==W?de=uh(n,t,w):(t==I||t==(E|I))&&!f.length?de=dh(n,t,l,u):de=Ba.apply(r,le);var he=ae?uu:Cu;return Ku(he(de,le),n,t)}function Nu(n,t,l,u){return n===r||Ln(n,zt[l])&&!Be.call(u,l)?t:n}function Ou(n,t,l,u,f,k){return Ge(n)&&Ge(t)&&(k.set(t,n),Ia(n,t,r,Ou,k),k.delete(t)),n}function fh(n){return xr(n)?r:n}function Pu(n,t,l,u,f,k){var y=l&O,w=n.length,N=t.length;if(w!=N&&!(y&&N>w))return!1;var U=k.get(n),Y=k.get(t);if(U&&Y)return U==t&&Y==n;var J=-1,ae=!0,le=l&T?new Ot:r;for(k.set(n,t),k.set(t,n);++J<w;){var de=n[J],he=t[J];if(u)var ge=y?u(he,de,J,t,n,k):u(de,he,J,n,t,k);if(ge!==r){if(ge)continue;ae=!1;break}if(le){if(!Ci(t,function(ye,Te){if(!br(le,Te)&&(de===ye||f(de,ye,l,u,k)))return le.push(Te)})){ae=!1;break}}else if(!(de===he||f(de,he,l,u,k))){ae=!1;break}}return k.delete(n),k.delete(t),ae}function ch(n,t,l,u,f,k,y){switch(l){case Ht:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case yr:return!(n.byteLength!=t.byteLength||!k(new ka(n),new ka(t)));case me:case ve:case en:return Ln(+n,+t);case Se:return n.name==t.name&&n.message==t.message;case hr:case kr:return n==t+"";case He:var w=Ui;case qn:var N=u&O;if(w||(w=ga),n.size!=t.size&&!N)return!1;var U=y.get(n);if(U)return U==t;u|=T,y.set(n,t);var Y=Pu(w(n),w(t),u,f,k,y);return y.delete(n),Y;case ia:if(Ar)return Ar.call(n)==Ar.call(t)}return!1}function mh(n,t,l,u,f,k){var y=l&O,w=ks(n),N=w.length,U=ks(t),Y=U.length;if(N!=Y&&!y)return!1;for(var J=N;J--;){var ae=w[J];if(!(y?ae in t:Be.call(t,ae)))return!1}var le=k.get(n),de=k.get(t);if(le&&de)return le==t&&de==n;var he=!0;k.set(n,t),k.set(t,n);for(var ge=y;++J<N;){ae=w[J];var ye=n[ae],Te=t[ae];if(u)var bn=y?u(Te,ye,ae,t,n,k):u(ye,Te,ae,n,t,k);if(!(bn===r?ye===Te||f(ye,Te,l,u,k):bn)){he=!1;break}ge||(ge=ae=="constructor")}if(he&&!ge){var un=n.constructor,En=t.constructor;un!=En&&"constructor"in n&&"constructor"in t&&!(typeof un=="function"&&un instanceof un&&typeof En=="function"&&En instanceof En)&&(he=!1)}return k.delete(n),k.delete(t),he}function it(n){return As(Lu(n,r,Yu),n+"")}function ks(n){return Zo(n,Je,Es)}function vs(n){return Zo(n,cn,Bu)}var ys=_a?function(n){return _a.get(n)}:Ls;function Ma(n){for(var t=n.name+"",l=Jt[t],u=Be.call(Jt,t)?l.length:0;u--;){var f=l[u],k=f.func;if(k==null||k==n)return f.name}return t}function nr(n){var t=Be.call(m,"placeholder")?m:n;return t.placeholder}function ue(){var n=m.iteratee||Ds;return n=n===Ds?nu:n,arguments.length?n(arguments[0],arguments[1]):n}function La(n,t){var l=n.__data__;return Th(t)?l[typeof t=="string"?"string":"hash"]:l.map}function bs(n){for(var t=Je(n),l=t.length;l--;){var u=t[l],f=n[u];t[l]=[u,f,Du(f)]}return t}function xt(n,t){var l=Am(n,t);return eu(l)?l:r}function ph(n){var t=Be.call(n,It),l=n[It];try{n[It]=r;var u=!0}catch{}var f=pa.call(n);return u&&(t?n[It]=l:delete n[It]),f}var Es=Wi?function(n){return n==null?[]:(n=De(n),ht(Wi(n),function(t){return Fo.call(n,t)}))}:Fs,Bu=Wi?function(n){for(var t=[];n;)kt(t,Es(n)),n=va(n);return t}:Fs,sn=ln;(zi&&sn(new zi(new ArrayBuffer(1)))!=Ht||Tr&&sn(new Tr)!=He||Xi&&sn(Xi.resolve())!=Vn||Xt&&sn(new Xt)!=qn||_r&&sn(new _r)!=vr)&&(sn=function(n){var t=ln(n),l=t==nn?n.constructor:r,u=l?qt(l):"";if(u)switch(u){case Jm:return Ht;case Zm:return He;case Qm:return Vn;case ep:return qn;case np:return vr}return t});function hh(n,t,l){for(var u=-1,f=l.length;++u<f;){var k=l[u],y=k.size;switch(k.type){case"drop":n+=y;break;case"dropRight":t-=y;break;case"take":t=an(t,n+y);break;case"takeRight":n=Xe(n,t-y);break}}return{start:n,end:t}}function kh(n){var t=n.match(_c);return t?t[1].split(wc):[]}function xu(n,t,l){t=Tt(t,n);for(var u=-1,f=t.length,k=!1;++u<f;){var y=$n(t[u]);if(!(k=n!=null&&l(n,y)))break;n=n[y]}return k||++u!=f?k:(f=n==null?0:n.length,!!f&&$a(f)&&st(y,f)&&(ce(n)||Dt(n)))}function vh(n){var t=n.length,l=new n.constructor(t);return t&&typeof n[0]=="string"&&Be.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function qu(n){return typeof n.constructor=="function"&&!Pr(n)?Zt(va(n)):{}}function yh(n,t,l){var u=n.constructor;switch(t){case yr:return ms(n);case me:case ve:return new u(+n);case Ht:return th(n,l);case bi:case Ei:case Ti:case _i:case wi:case Ai:case Ri:case Si:case ji:return ku(n,l);case He:return new u;case en:case kr:return new u(n);case hr:return rh(n);case qn:return new u;case ia:return ah(n)}}function bh(n,t){var l=t.length;if(!l)return n;var u=l-1;return t[u]=(l>1?"& ":"")+t[u],t=t.join(l>2?", ":" "),n.replace(Tc,`{
/* [wrapped with `+t+`] */
`)}function Eh(n){return ce(n)||Dt(n)||!!(Co&&n&&n[Co])}function st(n,t){var l=typeof n;return t=t??B,!!t&&(l=="number"||l!="symbol"&&Bc.test(n))&&n>-1&&n%1==0&&n<t}function on(n,t,l){if(!Ge(l))return!1;var u=typeof t;return(u=="number"?fn(l)&&st(t,l.length):u=="string"&&t in l)?Ln(l[t],n):!1}function Ts(n,t){if(ce(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||yn(n)?!0:vc.test(n)||!kc.test(n)||t!=null&&n in De(t)}function Th(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}function _s(n){var t=Ma(n),l=m[t];if(typeof l!="function"||!(t in be.prototype))return!1;if(n===l)return!0;var u=ys(l);return!!u&&n===u[0]}function _h(n){return!!Do&&Do in n}var wh=ca?lt:Cs;function Pr(n){var t=n&&n.constructor,l=typeof t=="function"&&t.prototype||zt;return n===l}function Du(n){return n===n&&!Ge(n)}function Mu(n,t){return function(l){return l==null?!1:l[n]===t&&(t!==r||n in De(l))}}function Ah(n){var t=Ha(n,function(u){return l.size===p&&l.clear(),u}),l=t.cache;return t}function Rh(n,t){var l=n[1],u=t[1],f=l|u,k=f<(E|R|F),y=u==F&&l==S||u==F&&l==K&&n[7].length<=t[8]||u==(F|K)&&t[7].length<=t[8]&&l==S;if(!(k||y))return n;u&E&&(n[2]=t[2],f|=l&E?0:q);var w=t[3];if(w){var N=n[3];n[3]=N?yu(N,w,t[4]):w,n[4]=N?vt(n[3],h):t[4]}return w=t[5],w&&(N=n[5],n[5]=N?bu(N,w,t[6]):w,n[6]=N?vt(n[5],h):t[6]),w=t[7],w&&(n[7]=w),u&F&&(n[8]=n[8]==null?t[8]:an(n[8],t[8])),n[9]==null&&(n[9]=t[9]),n[0]=t[0],n[1]=f,n}function Sh(n){var t=[];if(n!=null)for(var l in De(n))t.push(l);return t}function jh(n){return pa.call(n)}function Lu(n,t,l){return t=Xe(t===r?n.length-1:t,0),function(){for(var u=arguments,f=-1,k=Xe(u.length-t,0),y=L(k);++f<k;)y[f]=u[t+f];f=-1;for(var w=L(t+1);++f<t;)w[f]=u[f];return w[t]=l(y),hn(n,this,w)}}function Fu(n,t){return t.length<2?n:Bt(n,In(t,0,-1))}function Ih(n,t){for(var l=n.length,u=an(t.length,l),f=gn(n);u--;){var k=t[u];n[u]=st(k,l)?f[k]:r}return n}function ws(n,t){if(!(t==="constructor"&&typeof n[t]=="function")&&t!="__proto__")return n[t]}var Cu=Vu(uu),Br=Gm||function(n,t){return tn.setTimeout(n,t)},As=Vu(Zp);function Ku(n,t,l){var u=t+"";return As(n,bh(u,Nh(kh(u),l)))}function Vu(n){var t=0,l=0;return function(){var u=Wm(),f=G-(u-l);if(l=u,f>0){if(++t>=te)return arguments[0]}else t=0;return n.apply(r,arguments)}}function Fa(n,t){var l=-1,u=n.length,f=u-1;for(t=t===r?u:t;++l<t;){var k=ls(l,f),y=n[k];n[k]=n[l],n[l]=y}return n.length=t,n}var Hu=Ah(function(n){var t=[];return n.charCodeAt(0)===46&&t.push(""),n.replace(yc,function(l,u,f,k){t.push(f?k.replace(Sc,"$1"):u||l)}),t});function $n(n){if(typeof n=="string"||yn(n))return n;var t=n+"";return t=="0"&&1/n==-1/0?"-0":t}function qt(n){if(n!=null){try{return ma.call(n)}catch{}try{return n+""}catch{}}return""}function Nh(n,t){return An(Ie,function(l){var u="_."+l[0];t&l[1]&&!ua(n,u)&&n.push(u)}),n.sort()}function Gu(n){if(n instanceof be)return n.clone();var t=new Sn(n.__wrapped__,n.__chain__);return t.__actions__=gn(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Oh(n,t,l){(l?on(n,t,l):t===r)?t=1:t=Xe(pe(t),0);var u=n==null?0:n.length;if(!u||t<1)return[];for(var f=0,k=0,y=L(Ea(u/t));f<u;)y[k++]=In(n,f,f+=t);return y}function Ph(n){for(var t=-1,l=n==null?0:n.length,u=0,f=[];++t<l;){var k=n[t];k&&(f[u++]=k)}return f}function Bh(){var n=arguments.length;if(!n)return[];for(var t=L(n-1),l=arguments[0],u=n;u--;)t[u-1]=arguments[u];return kt(ce(l)?gn(l):[l],rn(t,1))}var xh=ke(function(n,t){return Ye(n)?Sr(n,rn(t,1,Ye,!0)):[]}),qh=ke(function(n,t){var l=Nn(t);return Ye(l)&&(l=r),Ye(n)?Sr(n,rn(t,1,Ye,!0),ue(l,2)):[]}),Dh=ke(function(n,t){var l=Nn(t);return Ye(l)&&(l=r),Ye(n)?Sr(n,rn(t,1,Ye,!0),r,l):[]});function Mh(n,t,l){var u=n==null?0:n.length;return u?(t=l||t===r?1:pe(t),In(n,t<0?0:t,u)):[]}function Lh(n,t,l){var u=n==null?0:n.length;return u?(t=l||t===r?1:pe(t),t=u-t,In(n,0,t<0?0:t)):[]}function Fh(n,t){return n&&n.length?Oa(n,ue(t,3),!0,!0):[]}function Ch(n,t){return n&&n.length?Oa(n,ue(t,3),!0):[]}function Kh(n,t,l,u){var f=n==null?0:n.length;return f?(l&&typeof l!="number"&&on(n,t,l)&&(l=0,u=f),Bp(n,t,l,u)):[]}function $u(n,t,l){var u=n==null?0:n.length;if(!u)return-1;var f=l==null?0:pe(l);return f<0&&(f=Xe(u+f,0)),da(n,ue(t,3),f)}function Uu(n,t,l){var u=n==null?0:n.length;if(!u)return-1;var f=u-1;return l!==r&&(f=pe(l),f=l<0?Xe(u+f,0):an(f,u-1)),da(n,ue(t,3),f,!0)}function Yu(n){var t=n==null?0:n.length;return t?rn(n,1):[]}function Vh(n){var t=n==null?0:n.length;return t?rn(n,M):[]}function Hh(n,t){var l=n==null?0:n.length;return l?(t=t===r?1:pe(t),rn(n,t)):[]}function Gh(n){for(var t=-1,l=n==null?0:n.length,u={};++t<l;){var f=n[t];u[f[0]]=f[1]}return u}function Wu(n){return n&&n.length?n[0]:r}function $h(n,t,l){var u=n==null?0:n.length;if(!u)return-1;var f=l==null?0:pe(l);return f<0&&(f=Xe(u+f,0)),$t(n,t,f)}function Uh(n){var t=n==null?0:n.length;return t?In(n,0,-1):[]}var Yh=ke(function(n){var t=Ve(n,fs);return t.length&&t[0]===n[0]?ts(t):[]}),Wh=ke(function(n){var t=Nn(n),l=Ve(n,fs);return t===Nn(l)?t=r:l.pop(),l.length&&l[0]===n[0]?ts(l,ue(t,2)):[]}),zh=ke(function(n){var t=Nn(n),l=Ve(n,fs);return t=typeof t=="function"?t:r,t&&l.pop(),l.length&&l[0]===n[0]?ts(l,r,t):[]});function Xh(n,t){return n==null?"":Um.call(n,t)}function Nn(n){var t=n==null?0:n.length;return t?n[t-1]:r}function Jh(n,t,l){var u=n==null?0:n.length;if(!u)return-1;var f=u;return l!==r&&(f=pe(l),f=f<0?Xe(u+f,0):an(f,u-1)),t===t?Nm(n,t,f):da(n,jo,f,!0)}function Zh(n,t){return n&&n.length?iu(n,pe(t)):r}var Qh=ke(zu);function zu(n,t){return n&&n.length&&t&&t.length?ss(n,t):n}function ek(n,t,l){return n&&n.length&&t&&t.length?ss(n,t,ue(l,2)):n}function nk(n,t,l){return n&&n.length&&t&&t.length?ss(n,t,r,l):n}var tk=it(function(n,t){var l=n==null?0:n.length,u=Zi(n,t);return ou(n,Ve(t,function(f){return st(f,l)?+f:f}).sort(vu)),u});function rk(n,t){var l=[];if(!(n&&n.length))return l;var u=-1,f=[],k=n.length;for(t=ue(t,3);++u<k;){var y=n[u];t(y,u,n)&&(l.push(y),f.push(u))}return ou(n,f),l}function Rs(n){return n==null?n:Xm.call(n)}function ak(n,t,l){var u=n==null?0:n.length;return u?(l&&typeof l!="number"&&on(n,t,l)?(t=0,l=u):(t=t==null?0:pe(t),l=l===r?u:pe(l)),In(n,t,l)):[]}function ik(n,t){return Na(n,t)}function sk(n,t,l){return us(n,t,ue(l,2))}function lk(n,t){var l=n==null?0:n.length;if(l){var u=Na(n,t);if(u<l&&Ln(n[u],t))return u}return-1}function ok(n,t){return Na(n,t,!0)}function uk(n,t,l){return us(n,t,ue(l,2),!0)}function dk(n,t){var l=n==null?0:n.length;if(l){var u=Na(n,t,!0)-1;if(Ln(n[u],t))return u}return-1}function gk(n){return n&&n.length?du(n):[]}function fk(n,t){return n&&n.length?du(n,ue(t,2)):[]}function ck(n){var t=n==null?0:n.length;return t?In(n,1,t):[]}function mk(n,t,l){return n&&n.length?(t=l||t===r?1:pe(t),In(n,0,t<0?0:t)):[]}function pk(n,t,l){var u=n==null?0:n.length;return u?(t=l||t===r?1:pe(t),t=u-t,In(n,t<0?0:t,u)):[]}function hk(n,t){return n&&n.length?Oa(n,ue(t,3),!1,!0):[]}function kk(n,t){return n&&n.length?Oa(n,ue(t,3)):[]}var vk=ke(function(n){return Et(rn(n,1,Ye,!0))}),yk=ke(function(n){var t=Nn(n);return Ye(t)&&(t=r),Et(rn(n,1,Ye,!0),ue(t,2))}),bk=ke(function(n){var t=Nn(n);return t=typeof t=="function"?t:r,Et(rn(n,1,Ye,!0),r,t)});function Ek(n){return n&&n.length?Et(n):[]}function Tk(n,t){return n&&n.length?Et(n,ue(t,2)):[]}function _k(n,t){return t=typeof t=="function"?t:r,n&&n.length?Et(n,r,t):[]}function Ss(n){if(!(n&&n.length))return[];var t=0;return n=ht(n,function(l){if(Ye(l))return t=Xe(l.length,t),!0}),Gi(t,function(l){return Ve(n,Ki(l))})}function Xu(n,t){if(!(n&&n.length))return[];var l=Ss(n);return t==null?l:Ve(l,function(u){return hn(t,r,u)})}var wk=ke(function(n,t){return Ye(n)?Sr(n,t):[]}),Ak=ke(function(n){return gs(ht(n,Ye))}),Rk=ke(function(n){var t=Nn(n);return Ye(t)&&(t=r),gs(ht(n,Ye),ue(t,2))}),Sk=ke(function(n){var t=Nn(n);return t=typeof t=="function"?t:r,gs(ht(n,Ye),r,t)}),jk=ke(Ss);function Ik(n,t){return mu(n||[],t||[],Rr)}function Nk(n,t){return mu(n||[],t||[],Nr)}var Ok=ke(function(n){var t=n.length,l=t>1?n[t-1]:r;return l=typeof l=="function"?(n.pop(),l):r,Xu(n,l)});function Ju(n){var t=m(n);return t.__chain__=!0,t}function Pk(n,t){return t(n),n}function Ca(n,t){return t(n)}var Bk=it(function(n){var t=n.length,l=t?n[0]:0,u=this.__wrapped__,f=function(k){return Zi(k,n)};return t>1||this.__actions__.length||!(u instanceof be)||!st(l)?this.thru(f):(u=u.slice(l,+l+(t?1:0)),u.__actions__.push({func:Ca,args:[f],thisArg:r}),new Sn(u,this.__chain__).thru(function(k){return t&&!k.length&&k.push(r),k}))});function xk(){return Ju(this)}function qk(){return new Sn(this.value(),this.__chain__)}function Dk(){this.__values__===r&&(this.__values__=gd(this.value()));var n=this.__index__>=this.__values__.length,t=n?r:this.__values__[this.__index__++];return{done:n,value:t}}function Mk(){return this}function Lk(n){for(var t,l=this;l instanceof Aa;){var u=Gu(l);u.__index__=0,u.__values__=r,t?f.__wrapped__=u:t=u;var f=u;l=l.__wrapped__}return f.__wrapped__=n,t}function Fk(){var n=this.__wrapped__;if(n instanceof be){var t=n;return this.__actions__.length&&(t=new be(this)),t=t.reverse(),t.__actions__.push({func:Ca,args:[Rs],thisArg:r}),new Sn(t,this.__chain__)}return this.thru(Rs)}function Ck(){return cu(this.__wrapped__,this.__actions__)}var Kk=Pa(function(n,t,l){Be.call(n,l)?++n[l]:rt(n,l,1)});function Vk(n,t,l){var u=ce(n)?Ro:Pp;return l&&on(n,t,l)&&(t=r),u(n,ue(t,3))}function Hk(n,t){var l=ce(n)?ht:Xo;return l(n,ue(t,3))}var Gk=wu($u),$k=wu(Uu);function Uk(n,t){return rn(Ka(n,t),1)}function Yk(n,t){return rn(Ka(n,t),M)}function Wk(n,t,l){return l=l===r?1:pe(l),rn(Ka(n,t),l)}function Zu(n,t){var l=ce(n)?An:bt;return l(n,ue(t,3))}function Qu(n,t){var l=ce(n)?cm:zo;return l(n,ue(t,3))}var zk=Pa(function(n,t,l){Be.call(n,l)?n[l].push(t):rt(n,l,[t])});function Xk(n,t,l,u){n=fn(n)?n:rr(n),l=l&&!u?pe(l):0;var f=n.length;return l<0&&(l=Xe(f+l,0)),Ua(n)?l<=f&&n.indexOf(t,l)>-1:!!f&&$t(n,t,l)>-1}var Jk=ke(function(n,t,l){var u=-1,f=typeof t=="function",k=fn(n)?L(n.length):[];return bt(n,function(y){k[++u]=f?hn(t,y,l):jr(y,t,l)}),k}),Zk=Pa(function(n,t,l){rt(n,l,t)});function Ka(n,t){var l=ce(n)?Ve:tu;return l(n,ue(t,3))}function Qk(n,t,l,u){return n==null?[]:(ce(t)||(t=t==null?[]:[t]),l=u?r:l,ce(l)||(l=l==null?[]:[l]),su(n,t,l))}var ev=Pa(function(n,t,l){n[l?0:1].push(t)},function(){return[[],[]]});function nv(n,t,l){var u=ce(n)?Fi:No,f=arguments.length<3;return u(n,ue(t,4),l,f,bt)}function tv(n,t,l){var u=ce(n)?mm:No,f=arguments.length<3;return u(n,ue(t,4),l,f,zo)}function rv(n,t){var l=ce(n)?ht:Xo;return l(n,Ga(ue(t,3)))}function av(n){var t=ce(n)?$o:Xp;return t(n)}function iv(n,t,l){(l?on(n,t,l):t===r)?t=1:t=pe(t);var u=ce(n)?Sp:Jp;return u(n,t)}function sv(n){var t=ce(n)?jp:Qp;return t(n)}function lv(n){if(n==null)return 0;if(fn(n))return Ua(n)?Yt(n):n.length;var t=sn(n);return t==He||t==qn?n.size:as(n).length}function ov(n,t,l){var u=ce(n)?Ci:eh;return l&&on(n,t,l)&&(t=r),u(n,ue(t,3))}var uv=ke(function(n,t){if(n==null)return[];var l=t.length;return l>1&&on(n,t[0],t[1])?t=[]:l>2&&on(t[0],t[1],t[2])&&(t=[t[0]]),su(n,rn(t,1),[])}),Va=Hm||function(){return tn.Date.now()};function dv(n,t){if(typeof t!="function")throw new Rn(d);return n=pe(n),function(){if(--n<1)return t.apply(this,arguments)}}function ed(n,t,l){return t=l?r:t,t=n&&t==null?n.length:t,at(n,F,r,r,r,r,t)}function nd(n,t){var l;if(typeof t!="function")throw new Rn(d);return n=pe(n),function(){return--n>0&&(l=t.apply(this,arguments)),n<=1&&(t=r),l}}var js=ke(function(n,t,l){var u=E;if(l.length){var f=vt(l,nr(js));u|=I}return at(n,u,t,l,f)}),td=ke(function(n,t,l){var u=E|R;if(l.length){var f=vt(l,nr(td));u|=I}return at(t,u,n,l,f)});function rd(n,t,l){t=l?r:t;var u=at(n,S,r,r,r,r,r,t);return u.placeholder=rd.placeholder,u}function ad(n,t,l){t=l?r:t;var u=at(n,W,r,r,r,r,r,t);return u.placeholder=ad.placeholder,u}function id(n,t,l){var u,f,k,y,w,N,U=0,Y=!1,J=!1,ae=!0;if(typeof n!="function")throw new Rn(d);t=On(t)||0,Ge(l)&&(Y=!!l.leading,J="maxWait"in l,k=J?Xe(On(l.maxWait)||0,t):k,ae="trailing"in l?!!l.trailing:ae);function le(We){var Fn=u,ut=f;return u=f=r,U=We,y=n.apply(ut,Fn),y}function de(We){return U=We,w=Br(ye,t),Y?le(We):y}function he(We){var Fn=We-N,ut=We-U,wd=t-Fn;return J?an(wd,k-ut):wd}function ge(We){var Fn=We-N,ut=We-U;return N===r||Fn>=t||Fn<0||J&&ut>=k}function ye(){var We=Va();if(ge(We))return Te(We);w=Br(ye,he(We))}function Te(We){return w=r,ae&&u?le(We):(u=f=r,y)}function bn(){w!==r&&pu(w),U=0,u=N=f=w=r}function un(){return w===r?y:Te(Va())}function En(){var We=Va(),Fn=ge(We);if(u=arguments,f=this,N=We,Fn){if(w===r)return de(N);if(J)return pu(w),w=Br(ye,t),le(N)}return w===r&&(w=Br(ye,t)),y}return En.cancel=bn,En.flush=un,En}var gv=ke(function(n,t){return Wo(n,1,t)}),fv=ke(function(n,t,l){return Wo(n,On(t)||0,l)});function cv(n){return at(n,ne)}function Ha(n,t){if(typeof n!="function"||t!=null&&typeof t!="function")throw new Rn(d);var l=function(){var u=arguments,f=t?t.apply(this,u):u[0],k=l.cache;if(k.has(f))return k.get(f);var y=n.apply(this,u);return l.cache=k.set(f,y)||k,y};return l.cache=new(Ha.Cache||tt),l}Ha.Cache=tt;function Ga(n){if(typeof n!="function")throw new Rn(d);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function mv(n){return nd(2,n)}var pv=nh(function(n,t){t=t.length==1&&ce(t[0])?Ve(t[0],kn(ue())):Ve(rn(t,1),kn(ue()));var l=t.length;return ke(function(u){for(var f=-1,k=an(u.length,l);++f<k;)u[f]=t[f].call(this,u[f]);return hn(n,this,u)})}),Is=ke(function(n,t){var l=vt(t,nr(Is));return at(n,I,r,t,l)}),sd=ke(function(n,t){var l=vt(t,nr(sd));return at(n,$,r,t,l)}),hv=it(function(n,t){return at(n,K,r,r,r,t)});function kv(n,t){if(typeof n!="function")throw new Rn(d);return t=t===r?t:pe(t),ke(n,t)}function vv(n,t){if(typeof n!="function")throw new Rn(d);return t=t==null?0:Xe(pe(t),0),ke(function(l){var u=l[t],f=_t(l,0,t);return u&&kt(f,u),hn(n,this,f)})}function yv(n,t,l){var u=!0,f=!0;if(typeof n!="function")throw new Rn(d);return Ge(l)&&(u="leading"in l?!!l.leading:u,f="trailing"in l?!!l.trailing:f),id(n,t,{leading:u,maxWait:t,trailing:f})}function bv(n){return ed(n,1)}function Ev(n,t){return Is(cs(t),n)}function Tv(){if(!arguments.length)return[];var n=arguments[0];return ce(n)?n:[n]}function _v(n){return jn(n,b)}function wv(n,t){return t=typeof t=="function"?t:r,jn(n,b,t)}function Av(n){return jn(n,v|b)}function Rv(n,t){return t=typeof t=="function"?t:r,jn(n,v|b,t)}function Sv(n,t){return t==null||Yo(n,t,Je(t))}function Ln(n,t){return n===t||n!==n&&t!==t}var jv=Da(ns),Iv=Da(function(n,t){return n>=t}),Dt=Qo(function(){return arguments}())?Qo:function(n){return Ue(n)&&Be.call(n,"callee")&&!Fo.call(n,"callee")},ce=L.isArray,Nv=bo?kn(bo):Lp;function fn(n){return n!=null&&$a(n.length)&&!lt(n)}function Ye(n){return Ue(n)&&fn(n)}function Ov(n){return n===!0||n===!1||Ue(n)&&ln(n)==me}var wt=$m||Cs,Pv=Eo?kn(Eo):Fp;function Bv(n){return Ue(n)&&n.nodeType===1&&!xr(n)}function xv(n){if(n==null)return!0;if(fn(n)&&(ce(n)||typeof n=="string"||typeof n.splice=="function"||wt(n)||tr(n)||Dt(n)))return!n.length;var t=sn(n);if(t==He||t==qn)return!n.size;if(Pr(n))return!as(n).length;for(var l in n)if(Be.call(n,l))return!1;return!0}function qv(n,t){return Ir(n,t)}function Dv(n,t,l){l=typeof l=="function"?l:r;var u=l?l(n,t):r;return u===r?Ir(n,t,r,l):!!u}function Ns(n){if(!Ue(n))return!1;var t=ln(n);return t==Se||t==Ae||typeof n.message=="string"&&typeof n.name=="string"&&!xr(n)}function Mv(n){return typeof n=="number"&&Ko(n)}function lt(n){if(!Ge(n))return!1;var t=ln(n);return t==qe||t==Qe||t==Ne||t==et}function ld(n){return typeof n=="number"&&n==pe(n)}function $a(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=B}function Ge(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}function Ue(n){return n!=null&&typeof n=="object"}var od=To?kn(To):Kp;function Lv(n,t){return n===t||rs(n,t,bs(t))}function Fv(n,t,l){return l=typeof l=="function"?l:r,rs(n,t,bs(t),l)}function Cv(n){return ud(n)&&n!=+n}function Kv(n){if(wh(n))throw new fe(o);return eu(n)}function Vv(n){return n===null}function Hv(n){return n==null}function ud(n){return typeof n=="number"||Ue(n)&&ln(n)==en}function xr(n){if(!Ue(n)||ln(n)!=nn)return!1;var t=va(n);if(t===null)return!0;var l=Be.call(t,"constructor")&&t.constructor;return typeof l=="function"&&l instanceof l&&ma.call(l)==Fm}var Os=_o?kn(_o):Vp;function Gv(n){return ld(n)&&n>=-9007199254740991&&n<=B}var dd=wo?kn(wo):Hp;function Ua(n){return typeof n=="string"||!ce(n)&&Ue(n)&&ln(n)==kr}function yn(n){return typeof n=="symbol"||Ue(n)&&ln(n)==ia}var tr=Ao?kn(Ao):Gp;function $v(n){return n===r}function Uv(n){return Ue(n)&&sn(n)==vr}function Yv(n){return Ue(n)&&ln(n)==uc}var Wv=Da(is),zv=Da(function(n,t){return n<=t});function gd(n){if(!n)return[];if(fn(n))return Ua(n)?Dn(n):gn(n);if(Er&&n[Er])return Sm(n[Er]());var t=sn(n),l=t==He?Ui:t==qn?ga:rr;return l(n)}function ot(n){if(!n)return n===0?n:0;if(n=On(n),n===M||n===-1/0){var t=n<0?-1:1;return t*C}return n===n?n:0}function pe(n){var t=ot(n),l=t%1;return t===t?l?t-l:t:0}function fd(n){return n?Pt(pe(n),0,ee):0}function On(n){if(typeof n=="number")return n;if(yn(n))return X;if(Ge(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=Ge(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=Oo(n);var l=Nc.test(n);return l||Pc.test(n)?dm(n.slice(2),l?2:8):Ic.test(n)?X:+n}function cd(n){return Gn(n,cn(n))}function Xv(n){return n?Pt(pe(n),-9007199254740991,B):n===0?n:0}function Oe(n){return n==null?"":vn(n)}var Jv=Qt(function(n,t){if(Pr(t)||fn(t)){Gn(t,Je(t),n);return}for(var l in t)Be.call(t,l)&&Rr(n,l,t[l])}),md=Qt(function(n,t){Gn(t,cn(t),n)}),Ya=Qt(function(n,t,l,u){Gn(t,cn(t),n,u)}),Zv=Qt(function(n,t,l,u){Gn(t,Je(t),n,u)}),Qv=it(Zi);function ey(n,t){var l=Zt(n);return t==null?l:Uo(l,t)}var ny=ke(function(n,t){n=De(n);var l=-1,u=t.length,f=u>2?t[2]:r;for(f&&on(t[0],t[1],f)&&(u=1);++l<u;)for(var k=t[l],y=cn(k),w=-1,N=y.length;++w<N;){var U=y[w],Y=n[U];(Y===r||Ln(Y,zt[U])&&!Be.call(n,U))&&(n[U]=k[U])}return n}),ty=ke(function(n){return n.push(r,Ou),hn(pd,r,n)});function ry(n,t){return So(n,ue(t,3),Hn)}function ay(n,t){return So(n,ue(t,3),es)}function iy(n,t){return n==null?n:Qi(n,ue(t,3),cn)}function sy(n,t){return n==null?n:Jo(n,ue(t,3),cn)}function ly(n,t){return n&&Hn(n,ue(t,3))}function oy(n,t){return n&&es(n,ue(t,3))}function uy(n){return n==null?[]:ja(n,Je(n))}function dy(n){return n==null?[]:ja(n,cn(n))}function Ps(n,t,l){var u=n==null?r:Bt(n,t);return u===r?l:u}function gy(n,t){return n!=null&&xu(n,t,xp)}function Bs(n,t){return n!=null&&xu(n,t,qp)}var fy=Ru(function(n,t,l){t!=null&&typeof t.toString!="function"&&(t=pa.call(t)),n[t]=l},qs(mn)),cy=Ru(function(n,t,l){t!=null&&typeof t.toString!="function"&&(t=pa.call(t)),Be.call(n,t)?n[t].push(l):n[t]=[l]},ue),my=ke(jr);function Je(n){return fn(n)?Go(n):as(n)}function cn(n){return fn(n)?Go(n,!0):$p(n)}function py(n,t){var l={};return t=ue(t,3),Hn(n,function(u,f,k){rt(l,t(u,f,k),u)}),l}function hy(n,t){var l={};return t=ue(t,3),Hn(n,function(u,f,k){rt(l,f,t(u,f,k))}),l}var ky=Qt(function(n,t,l){Ia(n,t,l)}),pd=Qt(function(n,t,l,u){Ia(n,t,l,u)}),vy=it(function(n,t){var l={};if(n==null)return l;var u=!1;t=Ve(t,function(k){return k=Tt(k,n),u||(u=k.length>1),k}),Gn(n,vs(n),l),u&&(l=jn(l,v|_|b,fh));for(var f=t.length;f--;)ds(l,t[f]);return l});function yy(n,t){return hd(n,Ga(ue(t)))}var by=it(function(n,t){return n==null?{}:Yp(n,t)});function hd(n,t){if(n==null)return{};var l=Ve(vs(n),function(u){return[u]});return t=ue(t),lu(n,l,function(u,f){return t(u,f[0])})}function Ey(n,t,l){t=Tt(t,n);var u=-1,f=t.length;for(f||(f=1,n=r);++u<f;){var k=n==null?r:n[$n(t[u])];k===r&&(u=f,k=l),n=lt(k)?k.call(n):k}return n}function Ty(n,t,l){return n==null?n:Nr(n,t,l)}function _y(n,t,l,u){return u=typeof u=="function"?u:r,n==null?n:Nr(n,t,l,u)}var kd=Iu(Je),vd=Iu(cn);function wy(n,t,l){var u=ce(n),f=u||wt(n)||tr(n);if(t=ue(t,4),l==null){var k=n&&n.constructor;f?l=u?new k:[]:Ge(n)?l=lt(k)?Zt(va(n)):{}:l={}}return(f?An:Hn)(n,function(y,w,N){return t(l,y,w,N)}),l}function Ay(n,t){return n==null?!0:ds(n,t)}function Ry(n,t,l){return n==null?n:fu(n,t,cs(l))}function Sy(n,t,l,u){return u=typeof u=="function"?u:r,n==null?n:fu(n,t,cs(l),u)}function rr(n){return n==null?[]:$i(n,Je(n))}function jy(n){return n==null?[]:$i(n,cn(n))}function Iy(n,t,l){return l===r&&(l=t,t=r),l!==r&&(l=On(l),l=l===l?l:0),t!==r&&(t=On(t),t=t===t?t:0),Pt(On(n),t,l)}function Ny(n,t,l){return t=ot(t),l===r?(l=t,t=0):l=ot(l),n=On(n),Dp(n,t,l)}function Oy(n,t,l){if(l&&typeof l!="boolean"&&on(n,t,l)&&(t=l=r),l===r&&(typeof t=="boolean"?(l=t,t=r):typeof n=="boolean"&&(l=n,n=r)),n===r&&t===r?(n=0,t=1):(n=ot(n),t===r?(t=n,n=0):t=ot(t)),n>t){var u=n;n=t,t=u}if(l||n%1||t%1){var f=Vo();return an(n+f*(t-n+um("1e-"+((f+"").length-1))),t)}return ls(n,t)}var Py=er(function(n,t,l){return t=t.toLowerCase(),n+(l?yd(t):t)});function yd(n){return xs(Oe(n).toLowerCase())}function bd(n){return n=Oe(n),n&&n.replace(xc,Tm).replace(Qc,"")}function By(n,t,l){n=Oe(n),t=vn(t);var u=n.length;l=l===r?u:Pt(pe(l),0,u);var f=l;return l-=t.length,l>=0&&n.slice(l,f)==t}function xy(n){return n=Oe(n),n&&mc.test(n)?n.replace(Xl,_m):n}function qy(n){return n=Oe(n),n&&bc.test(n)?n.replace(Ii,"\\$&"):n}var Dy=er(function(n,t,l){return n+(l?"-":"")+t.toLowerCase()}),My=er(function(n,t,l){return n+(l?" ":"")+t.toLowerCase()}),Ly=_u("toLowerCase");function Fy(n,t,l){n=Oe(n),t=pe(t);var u=t?Yt(n):0;if(!t||u>=t)return n;var f=(t-u)/2;return qa(Ta(f),l)+n+qa(Ea(f),l)}function Cy(n,t,l){n=Oe(n),t=pe(t);var u=t?Yt(n):0;return t&&u<t?n+qa(t-u,l):n}function Ky(n,t,l){n=Oe(n),t=pe(t);var u=t?Yt(n):0;return t&&u<t?qa(t-u,l)+n:n}function Vy(n,t,l){return l||t==null?t=0:t&&(t=+t),zm(Oe(n).replace(Ni,""),t||0)}function Hy(n,t,l){return(l?on(n,t,l):t===r)?t=1:t=pe(t),os(Oe(n),t)}function Gy(){var n=arguments,t=Oe(n[0]);return n.length<3?t:t.replace(n[1],n[2])}var $y=er(function(n,t,l){return n+(l?"_":"")+t.toLowerCase()});function Uy(n,t,l){return l&&typeof l!="number"&&on(n,t,l)&&(t=l=r),l=l===r?ee:l>>>0,l?(n=Oe(n),n&&(typeof t=="string"||t!=null&&!Os(t))&&(t=vn(t),!t&&Ut(n))?_t(Dn(n),0,l):n.split(t,l)):[]}var Yy=er(function(n,t,l){return n+(l?" ":"")+xs(t)});function Wy(n,t,l){return n=Oe(n),l=l==null?0:Pt(pe(l),0,n.length),t=vn(t),n.slice(l,l+t.length)==t}function zy(n,t,l){var u=m.templateSettings;l&&on(n,t,l)&&(t=r),n=Oe(n),t=Ya({},t,u,Nu);var f=Ya({},t.imports,u.imports,Nu),k=Je(f),y=$i(f,k),w,N,U=0,Y=t.interpolate||sa,J="__p += '",ae=Yi((t.escape||sa).source+"|"+Y.source+"|"+(Y===Jl?jc:sa).source+"|"+(t.evaluate||sa).source+"|$","g"),le="//# sourceURL="+(Be.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++am+"]")+`
`;n.replace(ae,function(ge,ye,Te,bn,un,En){return Te||(Te=bn),J+=n.slice(U,En).replace(qc,wm),ye&&(w=!0,J+=`' +
__e(`+ye+`) +
'`),un&&(N=!0,J+=`';
`+un+`;
__p += '`),Te&&(J+=`' +
((__t = (`+Te+`)) == null ? '' : __t) +
'`),U=En+ge.length,ge}),J+=`';
`;var de=Be.call(t,"variable")&&t.variable;if(!de)J=`with (obj) {
`+J+`
}
`;else if(Rc.test(de))throw new fe(g);J=(N?J.replace(dc,""):J).replace(gc,"$1").replace(fc,"$1;"),J="function("+(de||"obj")+`) {
`+(de?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(w?", __e = _.escape":"")+(N?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+J+`return __p
}`;var he=Td(function(){return je(k,le+"return "+J).apply(r,y)});if(he.source=J,Ns(he))throw he;return he}function Xy(n){return Oe(n).toLowerCase()}function Jy(n){return Oe(n).toUpperCase()}function Zy(n,t,l){if(n=Oe(n),n&&(l||t===r))return Oo(n);if(!n||!(t=vn(t)))return n;var u=Dn(n),f=Dn(t),k=Po(u,f),y=Bo(u,f)+1;return _t(u,k,y).join("")}function Qy(n,t,l){if(n=Oe(n),n&&(l||t===r))return n.slice(0,qo(n)+1);if(!n||!(t=vn(t)))return n;var u=Dn(n),f=Bo(u,Dn(t))+1;return _t(u,0,f).join("")}function eb(n,t,l){if(n=Oe(n),n&&(l||t===r))return n.replace(Ni,"");if(!n||!(t=vn(t)))return n;var u=Dn(n),f=Po(u,Dn(t));return _t(u,f).join("")}function nb(n,t){var l=Q,u=z;if(Ge(t)){var f="separator"in t?t.separator:f;l="length"in t?pe(t.length):l,u="omission"in t?vn(t.omission):u}n=Oe(n);var k=n.length;if(Ut(n)){var y=Dn(n);k=y.length}if(l>=k)return n;var w=l-Yt(u);if(w<1)return u;var N=y?_t(y,0,w).join(""):n.slice(0,w);if(f===r)return N+u;if(y&&(w+=N.length-w),Os(f)){if(n.slice(w).search(f)){var U,Y=N;for(f.global||(f=Yi(f.source,Oe(Zl.exec(f))+"g")),f.lastIndex=0;U=f.exec(Y);)var J=U.index;N=N.slice(0,J===r?w:J)}}else if(n.indexOf(vn(f),w)!=w){var ae=N.lastIndexOf(f);ae>-1&&(N=N.slice(0,ae))}return N+u}function tb(n){return n=Oe(n),n&&cc.test(n)?n.replace(zl,Om):n}var rb=er(function(n,t,l){return n+(l?" ":"")+t.toUpperCase()}),xs=_u("toUpperCase");function Ed(n,t,l){return n=Oe(n),t=l?r:t,t===r?Rm(n)?xm(n):km(n):n.match(t)||[]}var Td=ke(function(n,t){try{return hn(n,r,t)}catch(l){return Ns(l)?l:new fe(l)}}),ab=it(function(n,t){return An(t,function(l){l=$n(l),rt(n,l,js(n[l],n))}),n});function ib(n){var t=n==null?0:n.length,l=ue();return n=t?Ve(n,function(u){if(typeof u[1]!="function")throw new Rn(d);return[l(u[0]),u[1]]}):[],ke(function(u){for(var f=-1;++f<t;){var k=n[f];if(hn(k[0],this,u))return hn(k[1],this,u)}})}function sb(n){return Op(jn(n,v))}function qs(n){return function(){return n}}function lb(n,t){return n==null||n!==n?t:n}var ob=Au(),ub=Au(!0);function mn(n){return n}function Ds(n){return nu(typeof n=="function"?n:jn(n,v))}function db(n){return ru(jn(n,v))}function gb(n,t){return au(n,jn(t,v))}var fb=ke(function(n,t){return function(l){return jr(l,n,t)}}),cb=ke(function(n,t){return function(l){return jr(n,l,t)}});function Ms(n,t,l){var u=Je(t),f=ja(t,u);l==null&&!(Ge(t)&&(f.length||!u.length))&&(l=t,t=n,n=this,f=ja(t,Je(t)));var k=!(Ge(l)&&"chain"in l)||!!l.chain,y=lt(n);return An(f,function(w){var N=t[w];n[w]=N,y&&(n.prototype[w]=function(){var U=this.__chain__;if(k||U){var Y=n(this.__wrapped__),J=Y.__actions__=gn(this.__actions__);return J.push({func:N,args:arguments,thisArg:n}),Y.__chain__=U,Y}return N.apply(n,kt([this.value()],arguments))})}),n}function mb(){return tn._===this&&(tn._=Cm),this}function Ls(){}function pb(n){return n=pe(n),ke(function(t){return iu(t,n)})}var hb=ps(Ve),kb=ps(Ro),vb=ps(Ci);function _d(n){return Ts(n)?Ki($n(n)):Wp(n)}function yb(n){return function(t){return n==null?r:Bt(n,t)}}var bb=Su(),Eb=Su(!0);function Fs(){return[]}function Cs(){return!1}function Tb(){return{}}function _b(){return""}function wb(){return!0}function Ab(n,t){if(n=pe(n),n<1||n>B)return[];var l=ee,u=an(n,ee);t=ue(t),n-=ee;for(var f=Gi(u,t);++l<n;)t(l);return f}function Rb(n){return ce(n)?Ve(n,$n):yn(n)?[n]:gn(Hu(Oe(n)))}function Sb(n){var t=++Lm;return Oe(n)+t}var jb=xa(function(n,t){return n+t},0),Ib=hs("ceil"),Nb=xa(function(n,t){return n/t},1),Ob=hs("floor");function Pb(n){return n&&n.length?Sa(n,mn,ns):r}function Bb(n,t){return n&&n.length?Sa(n,ue(t,2),ns):r}function xb(n){return Io(n,mn)}function qb(n,t){return Io(n,ue(t,2))}function Db(n){return n&&n.length?Sa(n,mn,is):r}function Mb(n,t){return n&&n.length?Sa(n,ue(t,2),is):r}var Lb=xa(function(n,t){return n*t},1),Fb=hs("round"),Cb=xa(function(n,t){return n-t},0);function Kb(n){return n&&n.length?Hi(n,mn):0}function Vb(n,t){return n&&n.length?Hi(n,ue(t,2)):0}return m.after=dv,m.ary=ed,m.assign=Jv,m.assignIn=md,m.assignInWith=Ya,m.assignWith=Zv,m.at=Qv,m.before=nd,m.bind=js,m.bindAll=ab,m.bindKey=td,m.castArray=Tv,m.chain=Ju,m.chunk=Oh,m.compact=Ph,m.concat=Bh,m.cond=ib,m.conforms=sb,m.constant=qs,m.countBy=Kk,m.create=ey,m.curry=rd,m.curryRight=ad,m.debounce=id,m.defaults=ny,m.defaultsDeep=ty,m.defer=gv,m.delay=fv,m.difference=xh,m.differenceBy=qh,m.differenceWith=Dh,m.drop=Mh,m.dropRight=Lh,m.dropRightWhile=Fh,m.dropWhile=Ch,m.fill=Kh,m.filter=Hk,m.flatMap=Uk,m.flatMapDeep=Yk,m.flatMapDepth=Wk,m.flatten=Yu,m.flattenDeep=Vh,m.flattenDepth=Hh,m.flip=cv,m.flow=ob,m.flowRight=ub,m.fromPairs=Gh,m.functions=uy,m.functionsIn=dy,m.groupBy=zk,m.initial=Uh,m.intersection=Yh,m.intersectionBy=Wh,m.intersectionWith=zh,m.invert=fy,m.invertBy=cy,m.invokeMap=Jk,m.iteratee=Ds,m.keyBy=Zk,m.keys=Je,m.keysIn=cn,m.map=Ka,m.mapKeys=py,m.mapValues=hy,m.matches=db,m.matchesProperty=gb,m.memoize=Ha,m.merge=ky,m.mergeWith=pd,m.method=fb,m.methodOf=cb,m.mixin=Ms,m.negate=Ga,m.nthArg=pb,m.omit=vy,m.omitBy=yy,m.once=mv,m.orderBy=Qk,m.over=hb,m.overArgs=pv,m.overEvery=kb,m.overSome=vb,m.partial=Is,m.partialRight=sd,m.partition=ev,m.pick=by,m.pickBy=hd,m.property=_d,m.propertyOf=yb,m.pull=Qh,m.pullAll=zu,m.pullAllBy=ek,m.pullAllWith=nk,m.pullAt=tk,m.range=bb,m.rangeRight=Eb,m.rearg=hv,m.reject=rv,m.remove=rk,m.rest=kv,m.reverse=Rs,m.sampleSize=iv,m.set=Ty,m.setWith=_y,m.shuffle=sv,m.slice=ak,m.sortBy=uv,m.sortedUniq=gk,m.sortedUniqBy=fk,m.split=Uy,m.spread=vv,m.tail=ck,m.take=mk,m.takeRight=pk,m.takeRightWhile=hk,m.takeWhile=kk,m.tap=Pk,m.throttle=yv,m.thru=Ca,m.toArray=gd,m.toPairs=kd,m.toPairsIn=vd,m.toPath=Rb,m.toPlainObject=cd,m.transform=wy,m.unary=bv,m.union=vk,m.unionBy=yk,m.unionWith=bk,m.uniq=Ek,m.uniqBy=Tk,m.uniqWith=_k,m.unset=Ay,m.unzip=Ss,m.unzipWith=Xu,m.update=Ry,m.updateWith=Sy,m.values=rr,m.valuesIn=jy,m.without=wk,m.words=Ed,m.wrap=Ev,m.xor=Ak,m.xorBy=Rk,m.xorWith=Sk,m.zip=jk,m.zipObject=Ik,m.zipObjectDeep=Nk,m.zipWith=Ok,m.entries=kd,m.entriesIn=vd,m.extend=md,m.extendWith=Ya,Ms(m,m),m.add=jb,m.attempt=Td,m.camelCase=Py,m.capitalize=yd,m.ceil=Ib,m.clamp=Iy,m.clone=_v,m.cloneDeep=Av,m.cloneDeepWith=Rv,m.cloneWith=wv,m.conformsTo=Sv,m.deburr=bd,m.defaultTo=lb,m.divide=Nb,m.endsWith=By,m.eq=Ln,m.escape=xy,m.escapeRegExp=qy,m.every=Vk,m.find=Gk,m.findIndex=$u,m.findKey=ry,m.findLast=$k,m.findLastIndex=Uu,m.findLastKey=ay,m.floor=Ob,m.forEach=Zu,m.forEachRight=Qu,m.forIn=iy,m.forInRight=sy,m.forOwn=ly,m.forOwnRight=oy,m.get=Ps,m.gt=jv,m.gte=Iv,m.has=gy,m.hasIn=Bs,m.head=Wu,m.identity=mn,m.includes=Xk,m.indexOf=$h,m.inRange=Ny,m.invoke=my,m.isArguments=Dt,m.isArray=ce,m.isArrayBuffer=Nv,m.isArrayLike=fn,m.isArrayLikeObject=Ye,m.isBoolean=Ov,m.isBuffer=wt,m.isDate=Pv,m.isElement=Bv,m.isEmpty=xv,m.isEqual=qv,m.isEqualWith=Dv,m.isError=Ns,m.isFinite=Mv,m.isFunction=lt,m.isInteger=ld,m.isLength=$a,m.isMap=od,m.isMatch=Lv,m.isMatchWith=Fv,m.isNaN=Cv,m.isNative=Kv,m.isNil=Hv,m.isNull=Vv,m.isNumber=ud,m.isObject=Ge,m.isObjectLike=Ue,m.isPlainObject=xr,m.isRegExp=Os,m.isSafeInteger=Gv,m.isSet=dd,m.isString=Ua,m.isSymbol=yn,m.isTypedArray=tr,m.isUndefined=$v,m.isWeakMap=Uv,m.isWeakSet=Yv,m.join=Xh,m.kebabCase=Dy,m.last=Nn,m.lastIndexOf=Jh,m.lowerCase=My,m.lowerFirst=Ly,m.lt=Wv,m.lte=zv,m.max=Pb,m.maxBy=Bb,m.mean=xb,m.meanBy=qb,m.min=Db,m.minBy=Mb,m.stubArray=Fs,m.stubFalse=Cs,m.stubObject=Tb,m.stubString=_b,m.stubTrue=wb,m.multiply=Lb,m.nth=Zh,m.noConflict=mb,m.noop=Ls,m.now=Va,m.pad=Fy,m.padEnd=Cy,m.padStart=Ky,m.parseInt=Vy,m.random=Oy,m.reduce=nv,m.reduceRight=tv,m.repeat=Hy,m.replace=Gy,m.result=Ey,m.round=Fb,m.runInContext=j,m.sample=av,m.size=lv,m.snakeCase=$y,m.some=ov,m.sortedIndex=ik,m.sortedIndexBy=sk,m.sortedIndexOf=lk,m.sortedLastIndex=ok,m.sortedLastIndexBy=uk,m.sortedLastIndexOf=dk,m.startCase=Yy,m.startsWith=Wy,m.subtract=Cb,m.sum=Kb,m.sumBy=Vb,m.template=zy,m.times=Ab,m.toFinite=ot,m.toInteger=pe,m.toLength=fd,m.toLower=Xy,m.toNumber=On,m.toSafeInteger=Xv,m.toString=Oe,m.toUpper=Jy,m.trim=Zy,m.trimEnd=Qy,m.trimStart=eb,m.truncate=nb,m.unescape=tb,m.uniqueId=Sb,m.upperCase=rb,m.upperFirst=xs,m.each=Zu,m.eachRight=Qu,m.first=Wu,Ms(m,function(){var n={};return Hn(m,function(t,l){Be.call(m.prototype,l)||(n[l]=t)}),n}(),{chain:!1}),m.VERSION=a,An(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){m[n].placeholder=m}),An(["drop","take"],function(n,t){be.prototype[n]=function(l){l=l===r?1:Xe(pe(l),0);var u=this.__filtered__&&!t?new be(this):this.clone();return u.__filtered__?u.__takeCount__=an(l,u.__takeCount__):u.__views__.push({size:an(l,ee),type:n+(u.__dir__<0?"Right":"")}),u},be.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),An(["filter","map","takeWhile"],function(n,t){var l=t+1,u=l==P||l==D;be.prototype[n]=function(f){var k=this.clone();return k.__iteratees__.push({iteratee:ue(f,3),type:l}),k.__filtered__=k.__filtered__||u,k}}),An(["head","last"],function(n,t){var l="take"+(t?"Right":"");be.prototype[n]=function(){return this[l](1).value()[0]}}),An(["initial","tail"],function(n,t){var l="drop"+(t?"":"Right");be.prototype[n]=function(){return this.__filtered__?new be(this):this[l](1)}}),be.prototype.compact=function(){return this.filter(mn)},be.prototype.find=function(n){return this.filter(n).head()},be.prototype.findLast=function(n){return this.reverse().find(n)},be.prototype.invokeMap=ke(function(n,t){return typeof n=="function"?new be(this):this.map(function(l){return jr(l,n,t)})}),be.prototype.reject=function(n){return this.filter(Ga(ue(n)))},be.prototype.slice=function(n,t){n=pe(n);var l=this;return l.__filtered__&&(n>0||t<0)?new be(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),t!==r&&(t=pe(t),l=t<0?l.dropRight(-t):l.take(t-n)),l)},be.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},be.prototype.toArray=function(){return this.take(ee)},Hn(be.prototype,function(n,t){var l=/^(?:filter|find|map|reject)|While$/.test(t),u=/^(?:head|last)$/.test(t),f=m[u?"take"+(t=="last"?"Right":""):t],k=u||/^find/.test(t);f&&(m.prototype[t]=function(){var y=this.__wrapped__,w=u?[1]:arguments,N=y instanceof be,U=w[0],Y=N||ce(y),J=function(ye){var Te=f.apply(m,kt([ye],w));return u&&ae?Te[0]:Te};Y&&l&&typeof U=="function"&&U.length!=1&&(N=Y=!1);var ae=this.__chain__,le=!!this.__actions__.length,de=k&&!ae,he=N&&!le;if(!k&&Y){y=he?y:new be(this);var ge=n.apply(y,w);return ge.__actions__.push({func:Ca,args:[J],thisArg:r}),new Sn(ge,ae)}return de&&he?n.apply(this,w):(ge=this.thru(J),de?u?ge.value()[0]:ge.value():ge)})}),An(["pop","push","shift","sort","splice","unshift"],function(n){var t=fa[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",u=/^(?:pop|shift)$/.test(n);m.prototype[n]=function(){var f=arguments;if(u&&!this.__chain__){var k=this.value();return t.apply(ce(k)?k:[],f)}return this[l](function(y){return t.apply(ce(y)?y:[],f)})}}),Hn(be.prototype,function(n,t){var l=m[t];if(l){var u=l.name+"";Be.call(Jt,u)||(Jt[u]=[]),Jt[u].push({name:t,func:l})}}),Jt[Ba(r,R).name]=[{name:"wrapper",func:r}],be.prototype.clone=tp,be.prototype.reverse=rp,be.prototype.value=ap,m.prototype.at=Bk,m.prototype.chain=xk,m.prototype.commit=qk,m.prototype.next=Dk,m.prototype.plant=Lk,m.prototype.reverse=Fk,m.prototype.toJSON=m.prototype.valueOf=m.prototype.value=Ck,m.prototype.first=m.prototype.head,Er&&(m.prototype[Er]=Mk),m},Wt=qm();jt?((jt.exports=Wt)._=Wt,Di._=Wt):tn._=Wt}).call(UT)}(Vr,Vr.exports)),Vr.exports}YT();Cn(ea);const jf=A.forwardRef((e,i)=>H.jsx(sr,{gap:"2",style:{display:"flex"},...e,ref:i}));jf.displayName="FaktaGruppe";jf.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var Qs={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var gg;function WT(){return gg||(gg=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(o=s(o,a.call(this,g)))}return o}function a(o){if(typeof o=="string"||typeof o=="number")return this&&this[o]||o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(this,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var g in o)i.call(o,g)&&o[g]&&(d=s(d,this&&this[g]||g));return d}function s(o,d){return d?o?o+" "+d:o+d:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Qs)),Qs.exports}var zT=WT();const XT=Hg(zT),JT="_boks_c3bfh_1",ZT="_harBorderLeft_c3bfh_8",QT="_harBorderTop_c3bfh_12",e_={boks:JT,harBorderLeft:ZT,harBorderTop:QT};XT.bind(e_);var el={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var fg;function n_(){return fg||(fg=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(o=s(o,a(g)))}return o}function a(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var g in o)i.call(o,g)&&o[g]&&(d=s(d,g));return d}function s(o,d){return d?o?o+" "+d:o+d:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(el)),el.exports}n_();function If(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cg={exports:{}},Fr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function t_(){if(mg)return Fr;mg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,s,o){var d=null;if(o!==void 0&&(d=""+o),s.key!==void 0&&(d=""+s.key),"key"in s){o={};for(var g in s)g!=="key"&&(o[g]=s[g])}else o=s;return s=o.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:o}}return Fr.Fragment=i,Fr.jsx=r,Fr.jsxs=r,Fr}var pg;function r_(){return pg||(pg=1,cg.exports=t_()),cg.exports}var gt=r_();const a_="_autocompleteSuggestion__substring_mf7v0_1",i_="_autocompleteSuggestion__inner_mf7v0_4",Cr={autocompleteSuggestion__substring:a_,autocompleteSuggestion__inner:i_,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_mf7v0_12"};class s_ extends Z.Component{constructor(i){super(i),this.state={value:i.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:i}=this.props,{value:r}=this.state;i(r)}onMouseMove(){const{setSuggestionIndex:i,index:r}=this.props;i(r)}render(){const{match:i,active:r,avoidBlur:a,id:s}=this.props,{value:o}=this.state.value,d=o.toLowerCase().startsWith(i.toLowerCase());return gt.jsx("li",{id:s,role:"option","aria-selected":r,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:a,onMouseDown:a,onKeyDown:a,className:"autocompleteSuggestion typo-normal",children:d?gt.jsxs("span",{className:`${Cr.autocompleteSuggestion__inner} ${r?Cr["autocompleteSuggestion--active"]:""}`,children:[o.substring(0,i.length),gt.jsx("span",{className:Cr.autocompleteSuggestion__substring,children:o.substring(i.length)})]}):gt.jsx("span",{className:`${Cr.autocompleteSuggestion__inner} ${r?Cr["autocompleteSuggestion--active"]:""}`,children:o})})}}const l_="_autocomplete_9dlnp_1",o_="_autocomplete__suggestions_9dlnp_27",nl={autocomplete:l_,autocomplete__suggestions:o_,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_9dlnp_31"};class TA extends Z.Component{input;inputRef;constructor(i){super(i),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=r=>{this.input=r},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null}))}onChange(i){const{onChange:r}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),r(i)}onSearchButtonClick(i){const{onSearchButtonClick:r}=this.props;i.preventDefault(),r&&r()}onKeyDown(i){const{shouldShowSuggestions:r}=this.state;let{activeSuggestionIndex:a}=this.state;const{suggestions:s}=this.props,o=a>-1;switch(this.setState({setAriaActiveDescendant:i.keyCode===38||i.keyCode===40}),i.keyCode){case 9:o&&r&&this.setValue(s[a]);break;case 13:o&&r?(i.preventDefault(),this.setValue(s[a])):r&&s.length===1?this.setValue(s[0]):this.setState({shouldShowSuggestions:!1});break;case 27:r&&s.length>0&&(i.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:r&&(i.preventDefault(),a=a-1===-2?-1:a-1,this.setState({activeSuggestionIndex:a}));break;case 40:r&&(i.preventDefault(),a=a+1===s.length?s.length-1:a+1,this.setState({activeSuggestionIndex:a}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const i=setTimeout(()=>{const{shouldBlur:a}=this.state;a&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:i});const{onBlur:r}=this.props;r&&r()}setSuggestionIndex(i){this.setState({activeSuggestionIndex:i}),this.clearBlurDelay()}setValue(i){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:r}=this.props;r(i)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:i,id:r,ariaLabel:a,placeholder:s,value:o,name:d,shouldFocusOnMount:g,isLoading:c}=this.props,{activeSuggestionIndex:p,setAriaActiveDescendant:h,hasFocus:v,shouldShowSuggestions:_}=this.state,b=v&&_&&i.length>0,O=h&&p>-1?`${r}-item-${p}`:void 0;return gt.jsxs("div",{className:`${nl.autocomplete} autocomplete`,"aria-expanded":b,"aria-owns":`${r}-suggestions`,"aria-haspopup":"listbox",children:[gt.jsx(pl,{variant:"primary",id:r,name:d,"aria-label":a,"aria-autocomplete":"list","aria-controls":`${r}-suggestions`,"aria-activedescendant":O,placeholder:s,value:o,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:T=>{this.inputRef=T},className:"typo-normal",autoFocus:g,label:a,hideLabel:!0,children:gt.jsx(pl.Button,{loading:c,onClick:this.onSearchButtonClick})}),gt.jsx("ul",{id:`${r}-suggestions`,role:"listbox",className:b?nl.autocomplete__suggestions:nl["autocomplete__suggestions--hidden"],children:b&&i.map((T,E)=>gt.jsx(s_,{id:`${r}-item-${E}`,index:E,value:T,match:o,active:E===p,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},T.key))})]})}}var kl={exports:{}},u_=kl.exports,hg;function d_(){return hg||(hg=1,function(e,i){(function(r,a){e.exports=a()})(u_,function(){var r=1e3,a=6e4,s=36e5,o="millisecond",d="second",g="minute",c="hour",p="day",h="week",v="month",_="quarter",b="year",O="date",T="Invalid Date",E=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,R=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(P){var x=["th","st","nd","rd"],D=P%100;return"["+P+(x[(D-20)%10]||x[D]||x[0])+"]"}},S=function(P,x,D){var M=String(P);return!M||M.length>=x?P:""+Array(x+1-M.length).join(D)+P},W={s:S,z:function(P){var x=-P.utcOffset(),D=Math.abs(x),M=Math.floor(D/60),B=D%60;return(x<=0?"+":"-")+S(M,2,"0")+":"+S(B,2,"0")},m:function P(x,D){if(x.date()<D.date())return-P(D,x);var M=12*(D.year()-x.year())+(D.month()-x.month()),B=x.clone().add(M,v),C=D-B<0,X=x.clone().add(M+(C?-1:1),v);return+(-(M+(D-B)/(C?B-X:X-B))||0)},a:function(P){return P<0?Math.ceil(P)||0:Math.floor(P)},p:function(P){return{M:v,y:b,w:h,d:p,D:O,h:c,m:g,s:d,ms:o,Q:_}[P]||String(P||"").toLowerCase().replace(/s$/,"")},u:function(P){return P===void 0}},I="en",$={};$[I]=q;var F="$isDayjsObject",K=function(P){return P instanceof te||!(!P||!P[F])},ne=function P(x,D,M){var B;if(!x)return I;if(typeof x=="string"){var C=x.toLowerCase();$[C]&&(B=C),D&&($[C]=D,B=C);var X=x.split("-");if(!B&&X.length>1)return P(X[0])}else{var ee=x.name;$[ee]=x,B=ee}return!M&&B&&(I=B),B||!M&&I},Q=function(P,x){if(K(P))return P.clone();var D=typeof x=="object"?x:{};return D.date=P,D.args=arguments,new te(D)},z=W;z.l=ne,z.i=K,z.w=function(P,x){return Q(P,{locale:x.$L,utc:x.$u,x:x.$x,$offset:x.$offset})};var te=function(){function P(D){this.$L=ne(D.locale,null,!0),this.parse(D),this.$x=this.$x||D.x||{},this[F]=!0}var x=P.prototype;return x.parse=function(D){this.$d=function(M){var B=M.date,C=M.utc;if(B===null)return new Date(NaN);if(z.u(B))return new Date;if(B instanceof Date)return new Date(B);if(typeof B=="string"&&!/Z$/i.test(B)){var X=B.match(E);if(X){var ee=X[2]-1||0,re=(X[7]||"0").substring(0,3);return C?new Date(Date.UTC(X[1],ee,X[3]||1,X[4]||0,X[5]||0,X[6]||0,re)):new Date(X[1],ee,X[3]||1,X[4]||0,X[5]||0,X[6]||0,re)}}return new Date(B)}(D),this.init()},x.init=function(){var D=this.$d;this.$y=D.getFullYear(),this.$M=D.getMonth(),this.$D=D.getDate(),this.$W=D.getDay(),this.$H=D.getHours(),this.$m=D.getMinutes(),this.$s=D.getSeconds(),this.$ms=D.getMilliseconds()},x.$utils=function(){return z},x.isValid=function(){return this.$d.toString()!==T},x.isSame=function(D,M){var B=Q(D);return this.startOf(M)<=B&&B<=this.endOf(M)},x.isAfter=function(D,M){return Q(D)<this.startOf(M)},x.isBefore=function(D,M){return this.endOf(M)<Q(D)},x.$g=function(D,M,B){return z.u(D)?this[M]:this.set(B,D)},x.unix=function(){return Math.floor(this.valueOf()/1e3)},x.valueOf=function(){return this.$d.getTime()},x.startOf=function(D,M){var B=this,C=!!z.u(M)||M,X=z.p(D),ee=function(ve,Ae){var Se=z.w(B.$u?Date.UTC(B.$y,Ae,ve):new Date(B.$y,Ae,ve),B);return C?Se:Se.endOf(p)},re=function(ve,Ae){return z.w(B.toDate()[ve].apply(B.toDate("s"),(C?[0,0,0,0]:[23,59,59,999]).slice(Ae)),B)},oe=this.$W,Ie=this.$M,Ee=this.$D,Re="set"+(this.$u?"UTC":"");switch(X){case b:return C?ee(1,0):ee(31,11);case v:return C?ee(1,Ie):ee(0,Ie+1);case h:var Ne=this.$locale().weekStart||0,me=(oe<Ne?oe+7:oe)-Ne;return ee(C?Ee-me:Ee+(6-me),Ie);case p:case O:return re(Re+"Hours",0);case c:return re(Re+"Minutes",1);case g:return re(Re+"Seconds",2);case d:return re(Re+"Milliseconds",3);default:return this.clone()}},x.endOf=function(D){return this.startOf(D,!1)},x.$set=function(D,M){var B,C=z.p(D),X="set"+(this.$u?"UTC":""),ee=(B={},B[p]=X+"Date",B[O]=X+"Date",B[v]=X+"Month",B[b]=X+"FullYear",B[c]=X+"Hours",B[g]=X+"Minutes",B[d]=X+"Seconds",B[o]=X+"Milliseconds",B)[C],re=C===p?this.$D+(M-this.$W):M;if(C===v||C===b){var oe=this.clone().set(O,1);oe.$d[ee](re),oe.init(),this.$d=oe.set(O,Math.min(this.$D,oe.daysInMonth())).$d}else ee&&this.$d[ee](re);return this.init(),this},x.set=function(D,M){return this.clone().$set(D,M)},x.get=function(D){return this[z.p(D)]()},x.add=function(D,M){var B,C=this;D=Number(D);var X=z.p(M),ee=function(Ie){var Ee=Q(C);return z.w(Ee.date(Ee.date()+Math.round(Ie*D)),C)};if(X===v)return this.set(v,this.$M+D);if(X===b)return this.set(b,this.$y+D);if(X===p)return ee(1);if(X===h)return ee(7);var re=(B={},B[g]=a,B[c]=s,B[d]=r,B)[X]||1,oe=this.$d.getTime()+D*re;return z.w(oe,this)},x.subtract=function(D,M){return this.add(-1*D,M)},x.format=function(D){var M=this,B=this.$locale();if(!this.isValid())return B.invalidDate||T;var C=D||"YYYY-MM-DDTHH:mm:ssZ",X=z.z(this),ee=this.$H,re=this.$m,oe=this.$M,Ie=B.weekdays,Ee=B.months,Re=B.meridiem,Ne=function(Ae,Se,qe,Qe){return Ae&&(Ae[Se]||Ae(M,C))||qe[Se].slice(0,Qe)},me=function(Ae){return z.s(ee%12||12,Ae,"0")},ve=Re||function(Ae,Se,qe){var Qe=Ae<12?"AM":"PM";return qe?Qe.toLowerCase():Qe};return C.replace(R,function(Ae,Se){return Se||function(qe){switch(qe){case"YY":return String(M.$y).slice(-2);case"YYYY":return z.s(M.$y,4,"0");case"M":return oe+1;case"MM":return z.s(oe+1,2,"0");case"MMM":return Ne(B.monthsShort,oe,Ee,3);case"MMMM":return Ne(Ee,oe);case"D":return M.$D;case"DD":return z.s(M.$D,2,"0");case"d":return String(M.$W);case"dd":return Ne(B.weekdaysMin,M.$W,Ie,2);case"ddd":return Ne(B.weekdaysShort,M.$W,Ie,3);case"dddd":return Ie[M.$W];case"H":return String(ee);case"HH":return z.s(ee,2,"0");case"h":return me(1);case"hh":return me(2);case"a":return ve(ee,re,!0);case"A":return ve(ee,re,!1);case"m":return String(re);case"mm":return z.s(re,2,"0");case"s":return String(M.$s);case"ss":return z.s(M.$s,2,"0");case"SSS":return z.s(M.$ms,3,"0");case"Z":return X}return null}(Ae)||X.replace(":","")})},x.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},x.diff=function(D,M,B){var C,X=this,ee=z.p(M),re=Q(D),oe=(re.utcOffset()-this.utcOffset())*a,Ie=this-re,Ee=function(){return z.m(X,re)};switch(ee){case b:C=Ee()/12;break;case v:C=Ee();break;case _:C=Ee()/3;break;case h:C=(Ie-oe)/6048e5;break;case p:C=(Ie-oe)/864e5;break;case c:C=Ie/s;break;case g:C=Ie/a;break;case d:C=Ie/r;break;default:C=Ie}return B?C:z.a(C)},x.daysInMonth=function(){return this.endOf(v).$D},x.$locale=function(){return $[this.$L]},x.locale=function(D,M){if(!D)return this.$L;var B=this.clone(),C=ne(D,M,!0);return C&&(B.$L=C),B},x.clone=function(){return z.w(this.$d,this)},x.toDate=function(){return new Date(this.valueOf())},x.toJSON=function(){return this.isValid()?this.toISOString():null},x.toISOString=function(){return this.$d.toISOString()},x.toString=function(){return this.$d.toUTCString()},P}(),G=te.prototype;return Q.prototype=G,[["$ms",o],["$s",d],["$m",g],["$H",c],["$W",p],["$M",v],["$y",b],["$D",O]].forEach(function(P){G[P[1]]=function(x){return this.$g(x,P[0],P[1])}}),Q.extend=function(P,x){return P.$i||(P(x,te,Q),P.$i=!0),Q},Q.locale=ne,Q.isDayjs=K,Q.unix=function(P){return Q(1e3*P)},Q.en=$[I],Q.Ls=$,Q.p={},Q})}(kl)),kl.exports}var g_=d_();const na=If(g_);var vl=function(e,i){return vl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(r[s]=a[s])},vl(e,i)};function Kn(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");vl(e,i);function r(){this.constructor=e}e.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}var se=function(){return se=Object.assign||function(e){for(var i,r=1,a=arguments.length;r<a;r++){i=arguments[r];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},se.apply(this,arguments)};function ki(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r}function Wn(e,i,r){if(arguments.length===2)for(var a=0,s=i.length,o;a<s;a++)(o||!(a in i))&&(o||(o=Array.prototype.slice.call(i,0,a)),o[a]=i[a]);return e.concat(o||Array.prototype.slice.call(i))}function Un(e,i){var r=i&&i.cache?i.cache:v_,a=i&&i.serializer?i.serializer:h_,s=i&&i.strategy?i.strategy:m_;return s(e,{cache:r,serializer:a})}function f_(e){return e==null||typeof e=="number"||typeof e=="boolean"}function c_(e,i,r,a){var s=f_(a)?a:r(a),o=i.get(s);return typeof o>"u"&&(o=e.call(this,a),i.set(s,o)),o}function Nf(e,i,r){var a=Array.prototype.slice.call(arguments,3),s=r(a),o=i.get(s);return typeof o>"u"&&(o=e.apply(this,a),i.set(s,o)),o}function Of(e,i,r,a,s){return r.bind(i,e,a,s)}function m_(e,i){var r=e.length===1?c_:Nf;return Of(e,this,r,i.cache.create(),i.serializer)}function p_(e,i){return Of(e,this,Nf,i.cache.create(),i.serializer)}var h_=function(){return JSON.stringify(arguments)},k_=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(i){return this.cache[i]},e.prototype.set=function(i,r){this.cache[i]=r},e}(),v_={create:function(){return new k_}},Yn={variadic:p_},_e;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(_e||(_e={}));var Ke;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Ke||(Ke={}));var gr;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(gr||(gr={}));function kg(e){return e.type===Ke.literal}function y_(e){return e.type===Ke.argument}function Pf(e){return e.type===Ke.number}function Bf(e){return e.type===Ke.date}function xf(e){return e.type===Ke.time}function qf(e){return e.type===Ke.select}function Df(e){return e.type===Ke.plural}function b_(e){return e.type===Ke.pound}function Mf(e){return e.type===Ke.tag}function Lf(e){return!!(e&&typeof e=="object"&&e.type===gr.number)}function yl(e){return!!(e&&typeof e=="object"&&e.type===gr.dateTime)}var Ff=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,E_=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function T_(e){var i={};return e.replace(E_,function(r){var a=r.length;switch(r[0]){case"G":i.era=a===4?"long":a===5?"narrow":"short";break;case"y":i.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=a===4?"long":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][a-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][a-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][a-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][a-1];break;case"s":i.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var __=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function w_(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(__).filter(function(_){return _.length>0}),r=[],a=0,s=i;a<s.length;a++){var o=s[a],d=o.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var g=d[0],c=d.slice(1),p=0,h=c;p<h.length;p++){var v=h[p];if(v.length===0)throw new Error("Invalid number skeleton")}r.push({stem:g,options:c})}return r}function A_(e){return e.replace(/^(.*?)-/,"")}var vg=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Cf=/^(@+)?(\+|#+)?[rs]?$/g,R_=/(\*)(0+)|(#+)(0+)|(0+)/g,Kf=/^(0+)$/;function yg(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(Cf,function(r,a,s){return typeof s!="string"?(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length):s==="+"?i.minimumSignificantDigits=a.length:a[0]==="#"?i.maximumSignificantDigits=a.length:(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length+(typeof s=="string"?s.length:0)),""}),i}function Vf(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function S_(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var r=e.slice(0,2);if(r==="+!"?(i.signDisplay="always",e=e.slice(2)):r==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!Kf.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function bg(e){var i={},r=Vf(e);return r||i}function j_(e){for(var i={},r=0,a=e;r<a.length;r++){var s=a[r];switch(s.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=s.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=A_(s.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=se(se(se({},i),{notation:"scientific"}),s.options.reduce(function(c,p){return se(se({},c),bg(p))},{}));continue;case"engineering":i=se(se(se({},i),{notation:"engineering"}),s.options.reduce(function(c,p){return se(se({},c),bg(p))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(R_,function(c,p,h,v,_,b){if(p)i.minimumIntegerDigits=h.length;else{if(v&&_)throw new Error("We currently do not support maximum integer digits");if(b)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Kf.test(s.stem)){i.minimumIntegerDigits=s.stem.length;continue}if(vg.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(vg,function(c,p,h,v,_,b){return h==="*"?i.minimumFractionDigits=p.length:v&&v[0]==="#"?i.maximumFractionDigits=v.length:_&&b?(i.minimumFractionDigits=_.length,i.maximumFractionDigits=_.length+b.length):(i.minimumFractionDigits=p.length,i.maximumFractionDigits=p.length),""});var o=s.options[0];o==="w"?i=se(se({},i),{trailingZeroDisplay:"stripIfInteger"}):o&&(i=se(se({},i),yg(o)));continue}if(Cf.test(s.stem)){i=se(se({},i),yg(s.stem));continue}var d=Vf(s.stem);d&&(i=se(se({},i),d));var g=S_(s.stem);g&&(i=se(se({},i),g))}return i}var Ja={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function I_(e,i){for(var r="",a=0;a<e.length;a++){var s=e.charAt(a);if(s==="j"){for(var o=0;a+1<e.length&&e.charAt(a+1)===s;)o++,a++;var d=1+(o&1),g=o<2?1:3+(o>>1),c="a",p=N_(i);for((p=="H"||p=="k")&&(g=0);g-- >0;)r+=c;for(;d-- >0;)r=p+r}else s==="J"?r+="H":r+=s}return r}function N_(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,a;r!=="root"&&(a=e.maximize().region);var s=Ja[a||""]||Ja[r||""]||Ja["".concat(r,"-001")]||Ja["001"];return s[0]}var tl,O_=new RegExp("^".concat(Ff.source,"*")),P_=new RegExp("".concat(Ff.source,"*$"));function we(e,i){return{start:e,end:i}}var B_=!!String.prototype.startsWith&&"_a".startsWith("a",1),x_=!!String.fromCodePoint,q_=!!Object.fromEntries,D_=!!String.prototype.codePointAt,M_=!!String.prototype.trimStart,L_=!!String.prototype.trimEnd,F_=!!Number.isSafeInteger,C_=F_?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},bl=!0;try{var K_=Gf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");bl=((tl=K_.exec("a"))===null||tl===void 0?void 0:tl[0])==="a"}catch{bl=!1}var Eg=B_?function(e,i,r){return e.startsWith(i,r)}:function(e,i,r){return e.slice(r,r+i.length)===i},El=x_?String.fromCodePoint:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var r="",a=e.length,s=0,o;a>s;){if(o=e[s++],o>1114111)throw RangeError(o+" is not a valid code point");r+=o<65536?String.fromCharCode(o):String.fromCharCode(((o-=65536)>>10)+55296,o%1024+56320)}return r},Tg=q_?Object.fromEntries:function(e){for(var i={},r=0,a=e;r<a.length;r++){var s=a[r],o=s[0],d=s[1];i[o]=d}return i},Hf=D_?function(e,i){return e.codePointAt(i)}:function(e,i){var r=e.length;if(!(i<0||i>=r)){var a=e.charCodeAt(i),s;return a<55296||a>56319||i+1===r||(s=e.charCodeAt(i+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},V_=M_?function(e){return e.trimStart()}:function(e){return e.replace(O_,"")},H_=L_?function(e){return e.trimEnd()}:function(e){return e.replace(P_,"")};function Gf(e,i){return new RegExp(e,i)}var Tl;if(bl){var _g=Gf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Tl=function(e,i){var r;_g.lastIndex=i;var a=_g.exec(e);return(r=a[1])!==null&&r!==void 0?r:""}}else Tl=function(e,i){for(var r=[];;){var a=Hf(e,i);if(a===void 0||$f(a)||Y_(a))break;r.push(a),i+=a>=65536?2:1}return El.apply(void 0,r)};var G_=function(){function e(i,r){r===void 0&&(r={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,r,a){for(var s=[];!this.isEOF();){var o=this.char();if(o===123){var d=this.parseArgument(i,a);if(d.err)return d;s.push(d.val)}else{if(o===125&&i>0)break;if(o===35&&(r==="plural"||r==="selectordinal")){var g=this.clonePosition();this.bump(),s.push({type:Ke.pound,location:we(g,this.clonePosition())})}else if(o===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(_e.UNMATCHED_CLOSING_TAG,we(this.clonePosition(),this.clonePosition()))}else if(o===60&&!this.ignoreTag&&_l(this.peek()||0)){var d=this.parseTag(i,r);if(d.err)return d;s.push(d.val)}else{var d=this.parseLiteral(i,r);if(d.err)return d;s.push(d.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(i,r){var a=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Ke.literal,value:"<".concat(s,"/>"),location:we(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var o=this.parseMessage(i+1,r,!0);if(o.err)return o;var d=o.val,g=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!_l(this.char()))return this.error(_e.INVALID_TAG,we(g,this.clonePosition()));var c=this.clonePosition(),p=this.parseTagName();return s!==p?this.error(_e.UNMATCHED_CLOSING_TAG,we(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Ke.tag,value:s,children:d,location:we(a,this.clonePosition())},err:null}:this.error(_e.INVALID_TAG,we(g,this.clonePosition())))}else return this.error(_e.UNCLOSED_TAG,we(a,this.clonePosition()))}else return this.error(_e.INVALID_TAG,we(a,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&U_(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,r){for(var a=this.clonePosition(),s="";;){var o=this.tryParseQuote(r);if(o){s+=o;continue}var d=this.tryParseUnquoted(i,r);if(d){s+=d;continue}var g=this.tryParseLeftAngleBracket();if(g){s+=g;continue}break}var c=we(a,this.clonePosition());return{val:{type:Ke.literal,value:s,location:c},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!$_(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(a);this.bump()}return El.apply(void 0,r)},e.prototype.tryParseUnquoted=function(i,r){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(r==="plural"||r==="selectordinal")||a===125&&i>0?null:(this.bump(),El(a))},e.prototype.parseArgument=function(i,r){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(_e.EXPECT_ARGUMENT_CLOSING_BRACE,we(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(_e.EMPTY_ARGUMENT,we(a,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(_e.MALFORMED_ARGUMENT,we(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(_e.EXPECT_ARGUMENT_CLOSING_BRACE,we(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Ke.argument,value:s,location:we(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(_e.EXPECT_ARGUMENT_CLOSING_BRACE,we(a,this.clonePosition())):this.parseArgumentOptions(i,r,s,a);default:return this.error(_e.MALFORMED_ARGUMENT,we(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),r=this.offset(),a=Tl(this.message,r),s=r+a.length;this.bumpTo(s);var o=this.clonePosition(),d=we(i,o);return{value:a,location:d}},e.prototype.parseArgumentOptions=function(i,r,a,s){var o,d=this.clonePosition(),g=this.parseIdentifierIfPossible().value,c=this.clonePosition();switch(g){case"":return this.error(_e.EXPECT_ARGUMENT_TYPE,we(d,c));case"number":case"date":case"time":{this.bumpSpace();var p=null;if(this.bumpIf(",")){this.bumpSpace();var h=this.clonePosition(),v=this.parseSimpleArgStyleIfPossible();if(v.err)return v;var _=H_(v.val);if(_.length===0)return this.error(_e.EXPECT_ARGUMENT_STYLE,we(this.clonePosition(),this.clonePosition()));var b=we(h,this.clonePosition());p={style:_,styleLocation:b}}var O=this.tryParseArgumentClose(s);if(O.err)return O;var T=we(s,this.clonePosition());if(p&&Eg(p?.style,"::",0)){var E=V_(p.style.slice(2));if(g==="number"){var v=this.parseNumberSkeletonFromString(E,p.styleLocation);return v.err?v:{val:{type:Ke.number,value:a,location:T,style:v.val},err:null}}else{if(E.length===0)return this.error(_e.EXPECT_DATE_TIME_SKELETON,T);var R=E;this.locale&&(R=I_(E,this.locale));var _={type:gr.dateTime,pattern:R,location:p.styleLocation,parsedOptions:this.shouldParseSkeletons?T_(R):{}},q=g==="date"?Ke.date:Ke.time;return{val:{type:q,value:a,location:T,style:_},err:null}}}return{val:{type:g==="number"?Ke.number:g==="date"?Ke.date:Ke.time,value:a,location:T,style:(o=p?.style)!==null&&o!==void 0?o:null},err:null}}case"plural":case"selectordinal":case"select":{var S=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(_e.EXPECT_SELECT_ARGUMENT_OPTIONS,we(S,se({},S)));this.bumpSpace();var W=this.parseIdentifierIfPossible(),I=0;if(g!=="select"&&W.value==="offset"){if(!this.bumpIf(":"))return this.error(_e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,we(this.clonePosition(),this.clonePosition()));this.bumpSpace();var v=this.tryParseDecimalInteger(_e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,_e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(v.err)return v;this.bumpSpace(),W=this.parseIdentifierIfPossible(),I=v.val}var $=this.tryParsePluralOrSelectOptions(i,g,r,W);if($.err)return $;var O=this.tryParseArgumentClose(s);if(O.err)return O;var F=we(s,this.clonePosition());return g==="select"?{val:{type:Ke.select,value:a,options:Tg($.val),location:F},err:null}:{val:{type:Ke.plural,value:a,options:Tg($.val),offset:I,pluralType:g==="plural"?"cardinal":"ordinal",location:F},err:null}}default:return this.error(_e.INVALID_ARGUMENT_TYPE,we(d,c))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(_e.EXPECT_ARGUMENT_CLOSING_BRACE,we(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,r=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(_e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,we(s,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,r){var a=[];try{a=w_(i)}catch{return this.error(_e.INVALID_NUMBER_SKELETON,r)}return{val:{type:gr.number,tokens:a,location:r,parsedOptions:this.shouldParseSkeletons?j_(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,r,a,s){for(var o,d=!1,g=[],c=new Set,p=s.value,h=s.location;;){if(p.length===0){var v=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var _=this.tryParseDecimalInteger(_e.EXPECT_PLURAL_ARGUMENT_SELECTOR,_e.INVALID_PLURAL_ARGUMENT_SELECTOR);if(_.err)return _;h=we(v,this.clonePosition()),p=this.message.slice(v.offset,this.offset())}else break}if(c.has(p))return this.error(r==="select"?_e.DUPLICATE_SELECT_ARGUMENT_SELECTOR:_e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,h);p==="other"&&(d=!0),this.bumpSpace();var b=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?_e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:_e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,we(this.clonePosition(),this.clonePosition()));var O=this.parseMessage(i+1,r,a);if(O.err)return O;var T=this.tryParseArgumentClose(b);if(T.err)return T;g.push([p,{value:O.val,location:we(b,this.clonePosition())}]),c.add(p),this.bumpSpace(),o=this.parseIdentifierIfPossible(),p=o.value,h=o.location}return g.length===0?this.error(r==="select"?_e.EXPECT_SELECT_ARGUMENT_SELECTOR:_e.EXPECT_PLURAL_ARGUMENT_SELECTOR,we(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(_e.MISSING_OTHER_CLAUSE,we(this.clonePosition(),this.clonePosition())):{val:g,err:null}},e.prototype.tryParseDecimalInteger=function(i,r){var a=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var o=!1,d=0;!this.isEOF();){var g=this.char();if(g>=48&&g<=57)o=!0,d=d*10+(g-48),this.bump();else break}var c=we(s,this.clonePosition());return o?(d*=a,C_(d)?{val:d,err:null}:this.error(r,c)):this.error(i,c)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var r=Hf(this.message,i);if(r===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(i,r){return{val:null,err:{kind:i,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Eg(this.message,i,this.offset())){for(var r=0;r<i.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var r=this.offset(),a=this.message.indexOf(i,r);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var r=this.offset();if(r===i)break;if(r>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&$f(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),r=this.offset(),a=this.message.charCodeAt(r+(i>=65536?2:1));return a??null},e}();function _l(e){return e>=97&&e<=122||e>=65&&e<=90}function $_(e){return _l(e)||e===47}function U_(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function $f(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function Y_(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function wl(e){e.forEach(function(i){if(delete i.location,qf(i)||Df(i))for(var r in i.options)delete i.options[r].location,wl(i.options[r].value);else Pf(i)&&Lf(i.style)||(Bf(i)||xf(i))&&yl(i.style)?delete i.style.location:Mf(i)&&wl(i.children)})}function W_(e,i){i===void 0&&(i={}),i=se({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var r=new G_(e,i).parse();if(r.err){var a=SyntaxError(_e[r.err.kind]);throw a.location=r.err.location,a.originalMessage=r.err.message,a}return i?.captureLocation||wl(r.val),r.val}var Jn;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Jn||(Jn={}));var St=function(e){Kn(i,e);function i(r,a,s){var o=e.call(this,r)||this;return o.code=a,o.originalMessage=s,o}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),wg=function(e){Kn(i,e);function i(r,a,s,o){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(a,'". Options are "').concat(Object.keys(s).join('", "'),'"'),Jn.INVALID_VALUE,o)||this}return i}(St),z_=function(e){Kn(i,e);function i(r,a,s){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(a),Jn.INVALID_VALUE,s)||this}return i}(St),X_=function(e){Kn(i,e);function i(r,a){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(a,'"'),Jn.MISSING_VALUE,a)||this}return i}(St),dn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(dn||(dn={}));function J_(e){return e.length<2?e:e.reduce(function(i,r){var a=i[i.length-1];return!a||a.type!==dn.literal||r.type!==dn.literal?i.push(r):a.value+=r.value,i},[])}function Uf(e){return typeof e=="function"}function ti(e,i,r,a,s,o,d){if(e.length===1&&kg(e[0]))return[{type:dn.literal,value:e[0].value}];for(var g=[],c=0,p=e;c<p.length;c++){var h=p[c];if(kg(h)){g.push({type:dn.literal,value:h.value});continue}if(b_(h)){typeof o=="number"&&g.push({type:dn.literal,value:r.getNumberFormat(i).format(o)});continue}var v=h.value;if(!(s&&v in s))throw new X_(v,d);var _=s[v];if(y_(h)){(!_||typeof _=="string"||typeof _=="number")&&(_=typeof _=="string"||typeof _=="number"?String(_):""),g.push({type:typeof _=="string"?dn.literal:dn.object,value:_});continue}if(Bf(h)){var b=typeof h.style=="string"?a.date[h.style]:yl(h.style)?h.style.parsedOptions:void 0;g.push({type:dn.literal,value:r.getDateTimeFormat(i,b).format(_)});continue}if(xf(h)){var b=typeof h.style=="string"?a.time[h.style]:yl(h.style)?h.style.parsedOptions:a.time.medium;g.push({type:dn.literal,value:r.getDateTimeFormat(i,b).format(_)});continue}if(Pf(h)){var b=typeof h.style=="string"?a.number[h.style]:Lf(h.style)?h.style.parsedOptions:void 0;b&&b.scale&&(_=_*(b.scale||1)),g.push({type:dn.literal,value:r.getNumberFormat(i,b).format(_)});continue}if(Mf(h)){var O=h.children,T=h.value,E=s[T];if(!Uf(E))throw new z_(T,"function",d);var R=ti(O,i,r,a,s,o),q=E(R.map(function(I){return I.value}));Array.isArray(q)||(q=[q]),g.push.apply(g,q.map(function(I){return{type:typeof I=="string"?dn.literal:dn.object,value:I}}))}if(qf(h)){var S=h.options[_]||h.options.other;if(!S)throw new wg(h.value,_,Object.keys(h.options),d);g.push.apply(g,ti(S.value,i,r,a,s));continue}if(Df(h)){var S=h.options["=".concat(_)];if(!S){if(!Intl.PluralRules)throw new St(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Jn.MISSING_INTL_API,d);var W=r.getPluralRules(i,{type:h.pluralType}).select(_-(h.offset||0));S=h.options[W]||h.options.other}if(!S)throw new wg(h.value,_,Object.keys(h.options),d);g.push.apply(g,ti(S.value,i,r,a,s,_-(h.offset||0)));continue}}return J_(g)}function Z_(e,i){return i?se(se(se({},e||{}),i||{}),Object.keys(e).reduce(function(r,a){return r[a]=se(se({},e[a]),i[a]||{}),r},{})):e}function Q_(e,i){return i?Object.keys(e).reduce(function(r,a){return r[a]=Z_(e[a],i[a]),r},se({},e)):e}function rl(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,r){e[i]=r}}}}}function ew(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Un(function(){for(var i,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((i=Intl.NumberFormat).bind.apply(i,Wn([void 0],r,!1)))},{cache:rl(e.number),strategy:Yn.variadic}),getDateTimeFormat:Un(function(){for(var i,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((i=Intl.DateTimeFormat).bind.apply(i,Wn([void 0],r,!1)))},{cache:rl(e.dateTime),strategy:Yn.variadic}),getPluralRules:Un(function(){for(var i,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((i=Intl.PluralRules).bind.apply(i,Wn([void 0],r,!1)))},{cache:rl(e.pluralRules),strategy:Yn.variadic})}}var Yf=function(){function e(i,r,a,s){r===void 0&&(r=e.defaultLocale);var o=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(c){var p=o.formatToParts(c);if(p.length===1)return p[0].value;var h=p.reduce(function(v,_){return!v.length||_.type!==dn.literal||typeof v[v.length-1]!="string"?v.push(_.value):v[v.length-1]+=_.value,v},[]);return h.length<=1?h[0]||"":h},this.formatToParts=function(c){return ti(o.ast,o.locales,o.formatters,o.formats,c,void 0,o.message)},this.resolvedOptions=function(){var c;return{locale:((c=o.resolvedLocale)===null||c===void 0?void 0:c.toString())||Intl.NumberFormat.supportedLocalesOf(o.locales)[0]}},this.getAst=function(){return o.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=s||{};d.formatters;var g=ki(d,["formatters"]);this.ast=e.__parse(i,se(se({},g),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Q_(e.formats,a),this.formatters=s&&s.formatters||ew(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(i);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=W_,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Vt;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Vt||(Vt={}));var ta=function(e){Kn(i,e);function i(r,a,s){var o=this,d=s?s instanceof Error?s:new Error(String(s)):void 0;return o=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(a,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,o.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(o,i),o}return i}(Error),nw=function(e){Kn(i,e);function i(r,a){return e.call(this,Vt.UNSUPPORTED_FORMATTER,r,a)||this}return i}(ta),tw=function(e){Kn(i,e);function i(r,a){return e.call(this,Vt.INVALID_CONFIG,r,a)||this}return i}(ta),Ag=function(e){Kn(i,e);function i(r,a){return e.call(this,Vt.MISSING_DATA,r,a)||this}return i}(ta),xn=function(e){Kn(i,e);function i(r,a,s){var o=e.call(this,Vt.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(a,`
`),s)||this;return o.locale=a,o}return i}(ta),al=function(e){Kn(i,e);function i(r,a,s,o){var d=e.call(this,"".concat(r,`
MessageID: `).concat(s?.id,`
Default Message: `).concat(s?.defaultMessage,`
Description: `).concat(s?.description,`
`),a,o)||this;return d.descriptor=s,d.locale=a,d}return i}(xn),rw=function(e){Kn(i,e);function i(r,a){var s=e.call(this,Vt.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(a,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(o){var d;return(d=o.value)!==null&&d!==void 0?d:JSON.stringify(o)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=r,s}return i}(ta);function aw(e,i,r){if(r===void 0&&(r=Error),!e)throw new r(i)}function pr(e,i,r){return r===void 0&&(r={}),i.reduce(function(a,s){return s in e?a[s]=e[s]:s in r&&(a[s]=r[s]),a},{})}var iw=function(e){},sw=function(e){},Wf={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:iw,onWarn:sw};function zf(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Mt(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,r){e[i]=r}}}}}function lw(e){e===void 0&&(e=zf());var i=Intl.RelativeTimeFormat,r=Intl.ListFormat,a=Intl.DisplayNames,s=Un(function(){for(var g,c=[],p=0;p<arguments.length;p++)c[p]=arguments[p];return new((g=Intl.DateTimeFormat).bind.apply(g,Wn([void 0],c,!1)))},{cache:Mt(e.dateTime),strategy:Yn.variadic}),o=Un(function(){for(var g,c=[],p=0;p<arguments.length;p++)c[p]=arguments[p];return new((g=Intl.NumberFormat).bind.apply(g,Wn([void 0],c,!1)))},{cache:Mt(e.number),strategy:Yn.variadic}),d=Un(function(){for(var g,c=[],p=0;p<arguments.length;p++)c[p]=arguments[p];return new((g=Intl.PluralRules).bind.apply(g,Wn([void 0],c,!1)))},{cache:Mt(e.pluralRules),strategy:Yn.variadic});return{getDateTimeFormat:s,getNumberFormat:o,getMessageFormat:Un(function(g,c,p,h){return new Yf(g,c,p,se({formatters:{getNumberFormat:o,getDateTimeFormat:s,getPluralRules:d}},h||{}))},{cache:Mt(e.message),strategy:Yn.variadic}),getRelativeTimeFormat:Un(function(){for(var g=[],c=0;c<arguments.length;c++)g[c]=arguments[c];return new(i.bind.apply(i,Wn([void 0],g,!1)))},{cache:Mt(e.relativeTime),strategy:Yn.variadic}),getPluralRules:d,getListFormat:Un(function(){for(var g=[],c=0;c<arguments.length;c++)g[c]=arguments[c];return new(r.bind.apply(r,Wn([void 0],g,!1)))},{cache:Mt(e.list),strategy:Yn.variadic}),getDisplayNames:Un(function(){for(var g=[],c=0;c<arguments.length;c++)g[c]=arguments[c];return new(a.bind.apply(a,Wn([void 0],g,!1)))},{cache:Mt(e.displayNames),strategy:Yn.variadic})}}function Ul(e,i,r,a){var s=e&&e[i],o;if(s&&(o=s[r]),o)return o;a(new nw("No ".concat(i," format named: ").concat(r)))}function Za(e,i){return Object.keys(e).reduce(function(r,a){return r[a]=se({timeZone:i},e[a]),r},{})}function Rg(e,i){var r=Object.keys(se(se({},e),i));return r.reduce(function(a,s){return a[s]=se(se({},e[s]||{}),i[s]||{}),a},{})}function Sg(e,i){if(!i)return e;var r=Yf.formats;return se(se(se({},r),e),{date:Rg(Za(r.date,i),Za(e.date||{},i)),time:Rg(Za(r.time,i),Za(e.time||{},i))})}var Al=function(e,i,r,a,s){var o=e.locale,d=e.formats,g=e.messages,c=e.defaultLocale,p=e.defaultFormats,h=e.fallbackOnEmptyString,v=e.onError,_=e.timeZone,b=e.defaultRichTextElements;r===void 0&&(r={id:""});var O=r.id,T=r.defaultMessage;aw(!!O,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var E=String(O),R=g&&Object.prototype.hasOwnProperty.call(g,E)&&g[E];if(Array.isArray(R)&&R.length===1&&R[0].type===Ke.literal)return R[0].value;if(!a&&R&&typeof R=="string"&&!b)return R.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=se(se({},b),a||{}),d=Sg(d,_),p=Sg(p,_),!R){if(h===!1&&R==="")return R;if((!T||o&&o.toLowerCase()!==c.toLowerCase())&&v(new rw(r,o)),T)try{var q=i.getMessageFormat(T,c,p,s);return q.format(a)}catch(S){return v(new al('Error formatting default message for: "'.concat(E,'", rendering default message verbatim'),o,r,S)),typeof T=="string"?T:E}return E}try{var q=i.getMessageFormat(R,o,d,se({formatters:i},s||{}));return q.format(a)}catch(S){v(new al('Error formatting message: "'.concat(E,'", using ').concat(T?"default message":"id"," as fallback."),o,r,S))}if(T)try{var q=i.getMessageFormat(T,c,p,s);return q.format(a)}catch(S){v(new al('Error formatting the default message for: "'.concat(E,'", rendering message verbatim'),o,r,S))}return typeof R=="string"?R:typeof T=="string"?T:E},ow=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function ra(e,i,r,a){var s=e.locale,o=e.formats,d=e.onError,g=e.timeZone;a===void 0&&(a={});var c=a.format,p=se(se({},g&&{timeZone:g}),c&&Ul(o,i,c,d)),h=pr(a,ow,p);return i==="time"&&!h.hour&&!h.minute&&!h.second&&!h.timeStyle&&!h.dateStyle&&(h=se(se({},h),{hour:"numeric",minute:"numeric"})),r(s,h)}function uw(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],o=r[1],d=o===void 0?{}:o,g=typeof s=="string"?new Date(s||0):s;try{return ra(e,"date",i,d).format(g)}catch(c){e.onError(new xn("Error formatting date.",e.locale,c))}return String(g)}function dw(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],o=r[1],d=o===void 0?{}:o,g=typeof s=="string"?new Date(s||0):s;try{return ra(e,"time",i,d).format(g)}catch(c){e.onError(new xn("Error formatting time.",e.locale,c))}return String(g)}function gw(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],o=r[1],d=r[2],g=d===void 0?{}:d,c=typeof s=="string"?new Date(s||0):s,p=typeof o=="string"?new Date(o||0):o;try{return ra(e,"dateTimeRange",i,g).formatRange(c,p)}catch(h){e.onError(new xn("Error formatting date time range.",e.locale,h))}return String(c)}function fw(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],o=r[1],d=o===void 0?{}:o,g=typeof s=="string"?new Date(s||0):s;try{return ra(e,"date",i,d).formatToParts(g)}catch(c){e.onError(new xn("Error formatting date.",e.locale,c))}return[]}function cw(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],o=r[1],d=o===void 0?{}:o,g=typeof s=="string"?new Date(s||0):s;try{return ra(e,"time",i,d).formatToParts(g)}catch(c){e.onError(new xn("Error formatting time.",e.locale,c))}return[]}var mw=["style","type","fallback","languageDisplay"];function pw(e,i,r,a){var s=e.locale,o=e.onError,d=Intl.DisplayNames;d||o(new St(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Jn.MISSING_INTL_API));var g=pr(a,mw);try{return i(s,g).of(r)}catch(c){o(new xn("Error formatting display name.",s,c))}}var hw=["type","style"],jg=Date.now();function kw(e){return"".concat(jg,"_").concat(e,"_").concat(jg)}function vw(e,i,r,a){a===void 0&&(a={});var s=Xf(e,i,r,a).reduce(function(o,d){var g=d.value;return typeof g!="string"?o.push(g):typeof o[o.length-1]=="string"?o[o.length-1]+=g:o.push(g),o},[]);return s.length===1?s[0]:s.length===0?"":s}function Xf(e,i,r,a){var s=e.locale,o=e.onError;a===void 0&&(a={});var d=Intl.ListFormat;d||o(new St(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Jn.MISSING_INTL_API));var g=pr(a,hw);try{var c={},p=r.map(function(h,v){if(typeof h=="object"){var _=kw(v);return c[_]=h,_}return String(h)});return i(s,g).formatToParts(p).map(function(h){return h.type==="literal"?h:se(se({},h),{value:c[h.value]||h.value})})}catch(h){o(new xn("Error formatting list.",s,h))}return r}var yw=["type"];function bw(e,i,r,a){var s=e.locale,o=e.onError;a===void 0&&(a={}),Intl.PluralRules||o(new St(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Jn.MISSING_INTL_API));var d=pr(a,yw);try{return i(s,d).select(r)}catch(g){o(new xn("Error formatting plural.",s,g))}return"other"}var Ew=["numeric","style"];function Tw(e,i,r){var a=e.locale,s=e.formats,o=e.onError;r===void 0&&(r={});var d=r.format,g=!!d&&Ul(s,"relative",d,o)||{},c=pr(r,Ew,g);return i(a,c)}function _w(e,i,r,a,s){s===void 0&&(s={}),a||(a="second");var o=Intl.RelativeTimeFormat;o||e.onError(new St(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Jn.MISSING_INTL_API));try{return Tw(e,i,s).format(r,a)}catch(d){e.onError(new xn("Error formatting relative time.",e.locale,d))}return String(r)}var ww=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Jf(e,i,r){var a=e.locale,s=e.formats,o=e.onError;r===void 0&&(r={});var d=r.format,g=d&&Ul(s,"number",d,o)||{},c=pr(r,ww,g);return i(a,c)}function Aw(e,i,r,a){a===void 0&&(a={});try{return Jf(e,i,a).format(r)}catch(s){e.onError(new xn("Error formatting number.",e.locale,s))}return String(r)}function Rw(e,i,r,a){a===void 0&&(a={});try{return Jf(e,i,a).formatToParts(r)}catch(s){e.onError(new xn("Error formatting number.",e.locale,s))}return[]}function Sw(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function jw(e){e.onWarn&&e.defaultRichTextElements&&Sw(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function Iw(e,i){var r=lw(i),a=se(se({},Wf),e),s=a.locale,o=a.defaultLocale,d=a.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&d?d(new Ag('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&d&&d(new Ag('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new tw('"locale" was not configured, using "'.concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),jw(a),se(se({},a),{formatters:r,formatNumber:Aw.bind(null,a,r.getNumberFormat),formatNumberToParts:Rw.bind(null,a,r.getNumberFormat),formatRelativeTime:_w.bind(null,a,r.getRelativeTimeFormat),formatDate:uw.bind(null,a,r.getDateTimeFormat),formatDateToParts:fw.bind(null,a,r.getDateTimeFormat),formatTime:dw.bind(null,a,r.getDateTimeFormat),formatDateTimeRange:gw.bind(null,a,r.getDateTimeFormat),formatTimeToParts:cw.bind(null,a,r.getDateTimeFormat),formatPlural:bw.bind(null,a,r.getPluralRules),formatMessage:Al.bind(null,a,r),$t:Al.bind(null,a,r),formatList:vw.bind(null,a,r.getListFormat),formatListToParts:Xf.bind(null,a,r.getListFormat),formatDisplayName:pw.bind(null,a,r.getDisplayNames)})}function Nw(e,i,r){if(r===void 0&&(r=Error),!e)throw new r(i)}function Ow(e){Nw(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Pw=se(se({},Wf),{textComponent:A.Fragment}),Bw={key:42},xw=function(e){return A.isValidElement(e)?A.createElement(A.Fragment,Bw,e):e},qw=function(e){var i;return(i=A.Children.map(e,xw))!==null&&i!==void 0?i:[]};function Dw(e){return function(i){return e(A.Children.toArray(i))}}var Ig={exports:{}},Pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function Mw(){if(Ng)return Pe;Ng=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,g=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,p=e?Symbol.for("react.concurrent_mode"):60111,h=e?Symbol.for("react.forward_ref"):60112,v=e?Symbol.for("react.suspense"):60113,_=e?Symbol.for("react.suspense_list"):60120,b=e?Symbol.for("react.memo"):60115,O=e?Symbol.for("react.lazy"):60116,T=e?Symbol.for("react.block"):60121,E=e?Symbol.for("react.fundamental"):60117,R=e?Symbol.for("react.responder"):60118,q=e?Symbol.for("react.scope"):60119;function S(I){if(typeof I=="object"&&I!==null){var $=I.$$typeof;switch($){case i:switch(I=I.type,I){case c:case p:case a:case o:case s:case v:return I;default:switch(I=I&&I.$$typeof,I){case g:case h:case O:case b:case d:return I;default:return $}}case r:return $}}}function W(I){return S(I)===p}return Pe.AsyncMode=c,Pe.ConcurrentMode=p,Pe.ContextConsumer=g,Pe.ContextProvider=d,Pe.Element=i,Pe.ForwardRef=h,Pe.Fragment=a,Pe.Lazy=O,Pe.Memo=b,Pe.Portal=r,Pe.Profiler=o,Pe.StrictMode=s,Pe.Suspense=v,Pe.isAsyncMode=function(I){return W(I)||S(I)===c},Pe.isConcurrentMode=W,Pe.isContextConsumer=function(I){return S(I)===g},Pe.isContextProvider=function(I){return S(I)===d},Pe.isElement=function(I){return typeof I=="object"&&I!==null&&I.$$typeof===i},Pe.isForwardRef=function(I){return S(I)===h},Pe.isFragment=function(I){return S(I)===a},Pe.isLazy=function(I){return S(I)===O},Pe.isMemo=function(I){return S(I)===b},Pe.isPortal=function(I){return S(I)===r},Pe.isProfiler=function(I){return S(I)===o},Pe.isStrictMode=function(I){return S(I)===s},Pe.isSuspense=function(I){return S(I)===v},Pe.isValidElementType=function(I){return typeof I=="string"||typeof I=="function"||I===a||I===p||I===o||I===s||I===v||I===_||typeof I=="object"&&I!==null&&(I.$$typeof===O||I.$$typeof===b||I.$$typeof===d||I.$$typeof===g||I.$$typeof===h||I.$$typeof===E||I.$$typeof===R||I.$$typeof===q||I.$$typeof===T)},Pe.typeOf=S,Pe}var Og;function Lw(){return Og||(Og=1,Ig.exports=Mw()),Ig.exports}var il,Pg;function Fw(){if(Pg)return il;Pg=1;var e=Lw(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[e.ForwardRef]=a,o[e.Memo]=s;function d(O){return e.isMemo(O)?s:o[O.$$typeof]||i}var g=Object.defineProperty,c=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,_=Object.prototype;function b(O,T,E){if(typeof T!="string"){if(_){var R=v(T);R&&R!==_&&b(O,R,E)}var q=c(T);p&&(q=q.concat(p(T)));for(var S=d(O),W=d(T),I=0;I<q.length;++I){var $=q[I];if(!r[$]&&!(E&&E[$])&&!(W&&W[$])&&!(S&&S[$])){var F=h(T,$);try{g(O,$,F)}catch{}}}}return O}return il=b,il}Fw();var Yl=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=A.createContext(null)):A.createContext(null);Yl.Consumer;Yl.Provider;var Cw=Yl;function Zf(){var e=A.useContext(Cw);return Ow(e),e}var Rl;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Rl||(Rl={}));var Sl;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Sl||(Sl={}));function Qf(e){var i=function(r){var a=Zf(),s=r.value,o=r.children,d=ki(r,["value","children"]),g=typeof s=="string"?new Date(s||0):s,c=e==="formatDate"?a.formatDateToParts(g,d):a.formatTimeToParts(g,d);return o(c)};return i.displayName=Sl[e],i}function aa(e){var i=function(r){var a=Zf(),s=r.value,o=r.children,d=ki(r,["value","children"]),g=a[e](s,d);if(typeof o=="function")return o(g);var c=a.textComponent||A.Fragment;return A.createElement(c,null,g)};return i.displayName=Rl[e],i}function ec(e){return e&&Object.keys(e).reduce(function(i,r){var a=e[r];return i[r]=Uf(a)?Dw(a):a,i},{})}var Bg=function(e,i,r,a){for(var s=[],o=4;o<arguments.length;o++)s[o-4]=arguments[o];var d=ec(a),g=Al.apply(void 0,Wn([e,i,r,d],s,!1));return Array.isArray(g)?qw(g):g},Kw=function(e,i){var r=e.defaultRichTextElements,a=ki(e,["defaultRichTextElements"]),s=ec(r),o=Iw(se(se(se({},Pw),a),{defaultRichTextElements:s}),i),d={locale:o.locale,timeZone:o.timeZone,fallbackOnEmptyString:o.fallbackOnEmptyString,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:s};return se(se({},o),{formatMessage:Bg.bind(null,d,o.formatters),$t:Bg.bind(null,d,o.formatters)})};aa("formatDate");aa("formatTime");aa("formatNumber");aa("formatList");aa("formatDisplayName");Qf("formatDate");Qf("formatTime");function Wl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jl={exports:{}},Vw=jl.exports,xg;function Hw(){return xg||(xg=1,function(e,i){(function(r,a){e.exports=a()})(Vw,function(){var r,a,s=1e3,o=6e4,d=36e5,g=864e5,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p=31536e6,h=2628e6,v=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,_={years:p,months:h,days:g,hours:d,minutes:o,seconds:s,milliseconds:1,weeks:6048e5},b=function($){return $ instanceof W},O=function($,F,K){return new W($,K,F.$l)},T=function($){return a.p($)+"s"},E=function($){return $<0},R=function($){return E($)?Math.ceil($):Math.floor($)},q=function($){return Math.abs($)},S=function($,F){return $?E($)?{negative:!0,format:""+q($)+F}:{negative:!1,format:""+$+F}:{negative:!1,format:""}},W=function(){function $(K,ne,Q){var z=this;if(this.$d={},this.$l=Q,K===void 0&&(this.$ms=0,this.parseFromMilliseconds()),ne)return O(K*_[T(ne)],this);if(typeof K=="number")return this.$ms=K,this.parseFromMilliseconds(),this;if(typeof K=="object")return Object.keys(K).forEach(function(P){z.$d[T(P)]=K[P]}),this.calMilliseconds(),this;if(typeof K=="string"){var te=K.match(v);if(te){var G=te.slice(2).map(function(P){return P!=null?Number(P):0});return this.$d.years=G[0],this.$d.months=G[1],this.$d.weeks=G[2],this.$d.days=G[3],this.$d.hours=G[4],this.$d.minutes=G[5],this.$d.seconds=G[6],this.calMilliseconds(),this}}return this}var F=$.prototype;return F.calMilliseconds=function(){var K=this;this.$ms=Object.keys(this.$d).reduce(function(ne,Q){return ne+(K.$d[Q]||0)*_[Q]},0)},F.parseFromMilliseconds=function(){var K=this.$ms;this.$d.years=R(K/p),K%=p,this.$d.months=R(K/h),K%=h,this.$d.days=R(K/g),K%=g,this.$d.hours=R(K/d),K%=d,this.$d.minutes=R(K/o),K%=o,this.$d.seconds=R(K/s),K%=s,this.$d.milliseconds=K},F.toISOString=function(){var K=S(this.$d.years,"Y"),ne=S(this.$d.months,"M"),Q=+this.$d.days||0;this.$d.weeks&&(Q+=7*this.$d.weeks);var z=S(Q,"D"),te=S(this.$d.hours,"H"),G=S(this.$d.minutes,"M"),P=this.$d.seconds||0;this.$d.milliseconds&&(P+=this.$d.milliseconds/1e3,P=Math.round(1e3*P)/1e3);var x=S(P,"S"),D=K.negative||ne.negative||z.negative||te.negative||G.negative||x.negative,M=te.format||G.format||x.format?"T":"",B=(D?"-":"")+"P"+K.format+ne.format+z.format+M+te.format+G.format+x.format;return B==="P"||B==="-P"?"P0D":B},F.toJSON=function(){return this.toISOString()},F.format=function(K){var ne=K||"YYYY-MM-DDTHH:mm:ss",Q={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return ne.replace(c,function(z,te){return te||String(Q[z])})},F.as=function(K){return this.$ms/_[T(K)]},F.get=function(K){var ne=this.$ms,Q=T(K);return Q==="milliseconds"?ne%=1e3:ne=Q==="weeks"?R(ne/_[Q]):this.$d[Q],ne||0},F.add=function(K,ne,Q){var z;return z=ne?K*_[T(ne)]:b(K)?K.$ms:O(K,this).$ms,O(this.$ms+z*(Q?-1:1),this)},F.subtract=function(K,ne){return this.add(K,ne,!0)},F.locale=function(K){var ne=this.clone();return ne.$l=K,ne},F.clone=function(){return O(this.$ms,this)},F.humanize=function(K){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!K)},F.valueOf=function(){return this.asMilliseconds()},F.milliseconds=function(){return this.get("milliseconds")},F.asMilliseconds=function(){return this.as("milliseconds")},F.seconds=function(){return this.get("seconds")},F.asSeconds=function(){return this.as("seconds")},F.minutes=function(){return this.get("minutes")},F.asMinutes=function(){return this.as("minutes")},F.hours=function(){return this.get("hours")},F.asHours=function(){return this.as("hours")},F.days=function(){return this.get("days")},F.asDays=function(){return this.as("days")},F.weeks=function(){return this.get("weeks")},F.asWeeks=function(){return this.as("weeks")},F.months=function(){return this.get("months")},F.asMonths=function(){return this.as("months")},F.years=function(){return this.get("years")},F.asYears=function(){return this.as("years")},$}(),I=function($,F,K){return $.add(F.years()*K,"y").add(F.months()*K,"M").add(F.days()*K,"d").add(F.hours()*K,"h").add(F.minutes()*K,"m").add(F.seconds()*K,"s").add(F.milliseconds()*K,"ms")};return function($,F,K){r=K,a=K().$utils(),K.duration=function(z,te){var G=K.locale();return O(z,{$l:G},te)},K.isDuration=b;var ne=F.prototype.add,Q=F.prototype.subtract;F.prototype.add=function(z,te){return b(z)?I(this,z,1):ne.bind(this)(z,te)},F.prototype.subtract=function(z,te){return b(z)?I(this,z,-1):Q.bind(this)(z,te)}}})}(jl)),jl.exports}var Gw=Hw();const $w=Wl(Gw);var Il={exports:{}},Uw=Il.exports,qg;function Yw(){return qg||(qg=1,function(e,i){(function(r,a){e.exports=a()})(Uw,function(){var r="day";return function(a,s,o){var d=function(p){return p.add(4-p.isoWeekday(),r)},g=s.prototype;g.isoWeekYear=function(){return d(this).year()},g.isoWeek=function(p){if(!this.$utils().u(p))return this.add(7*(p-this.isoWeek()),r);var h,v,_,b,O=d(this),T=(h=this.isoWeekYear(),v=this.$u,_=(v?o.utc:o)().year(h).startOf("year"),b=4-_.isoWeekday(),_.isoWeekday()>4&&(b+=7),_.add(b,r));return O.diff(T,"week")+1},g.isoWeekday=function(p){return this.$utils().u(p)?this.day()||7:this.day(this.day()%7?p:p-7)};var c=g.startOf;g.startOf=function(p,h){var v=this.$utils(),_=!!v.u(h)||h;return v.p(p)==="isoweek"?_?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):c.bind(this)(p,h)}}})}(Il)),Il.exports}var Ww=Yw();const zw=Wl(Ww);var Nl={exports:{}},Xw=Nl.exports,Dg;function Jw(){return Dg||(Dg=1,function(e,i){(function(r,a){e.exports=a()})(Xw,function(){var r="minute",a=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(o,d,g){var c=d.prototype;g.utc=function(T){var E={date:T,utc:!0,args:arguments};return new d(E)},c.utc=function(T){var E=g(this.toDate(),{locale:this.$L,utc:!0});return T?E.add(this.utcOffset(),r):E},c.local=function(){return g(this.toDate(),{locale:this.$L,utc:!1})};var p=c.parse;c.parse=function(T){T.utc&&(this.$u=!0),this.$utils().u(T.$offset)||(this.$offset=T.$offset),p.call(this,T)};var h=c.init;c.init=function(){if(this.$u){var T=this.$d;this.$y=T.getUTCFullYear(),this.$M=T.getUTCMonth(),this.$D=T.getUTCDate(),this.$W=T.getUTCDay(),this.$H=T.getUTCHours(),this.$m=T.getUTCMinutes(),this.$s=T.getUTCSeconds(),this.$ms=T.getUTCMilliseconds()}else h.call(this)};var v=c.utcOffset;c.utcOffset=function(T,E){var R=this.$utils().u;if(R(T))return this.$u?0:R(this.$offset)?v.call(this):this.$offset;if(typeof T=="string"&&(T=function(I){I===void 0&&(I="");var $=I.match(a);if(!$)return null;var F=(""+$[0]).match(s)||["-",0,0],K=F[0],ne=60*+F[1]+ +F[2];return ne===0?0:K==="+"?ne:-ne}(T),T===null))return this;var q=Math.abs(T)<=16?60*T:T,S=this;if(E)return S.$offset=q,S.$u=T===0,S;if(T!==0){var W=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(S=this.local().add(q+W,r)).$offset=q,S.$x.$localOffset=W}else S=this.utc();return S};var _=c.format;c.format=function(T){var E=T||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return _.call(this,E)},c.valueOf=function(){var T=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*T},c.isUTC=function(){return!!this.$u},c.toISOString=function(){return this.toDate().toISOString()},c.toString=function(){return this.toDate().toUTCString()};var b=c.toDate;c.toDate=function(T){return T==="s"&&this.$offset?g(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():b.call(this)};var O=c.diff;c.diff=function(T,E,R){if(T&&this.$u===T.$u)return O.call(this,T,E,R);var q=this.local(),S=g(T).local();return O.call(q,S,E,R)}}})}(Nl)),Nl.exports}var Zw=Jw();const Qw=Wl(Zw),eA=zf(),vi=e=>Kw({locale:"nb-NO",messages:e},eA),yi={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};vi(yi);var Ol={exports:{}},nA=Ol.exports,Mg;function tA(){return Mg||(Mg=1,function(e,i){(function(r,a){e.exports=a(na)})(nA,function(r){function a(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var s=a(r),o={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(o,null,!0),o})}(Ol)),Ol.exports}tA();na.extend(Qw);na.extend(zw);na.extend($w);vi(yi);vi(yi);var Lg={exports:{}},Kr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function rA(){if(Fg)return Kr;Fg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,s,o){var d=null;if(o!==void 0&&(d=""+o),s.key!==void 0&&(d=""+s.key),"key"in s){o={};for(var g in s)g!=="key"&&(o[g]=s[g])}else o=s;return s=o.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:o}}return Kr.Fragment=i,Kr.jsx=r,Kr.jsxs=r,Kr}var Cg;function aA(){return Cg||(Cg=1,Lg.exports=rA()),Lg.exports}aA();vi(yi);A.createContext({});var Pl={exports:{}},iA=Pl.exports,Kg;function sA(){return Kg||(Kg=1,function(e,i){(function(r,a){e.exports=a()})(iA,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,o=/\d\d/,d=/\d\d?/,g=/\d*[^-_:/,()\s\d]+/,c={},p=function(E){return(E=+E)+(E>68?1900:2e3)},h=function(E){return function(R){this[E]=+R}},v=[/[+-]\d\d:?(\d\d)?|Z/,function(E){(this.zone||(this.zone={})).offset=function(R){if(!R||R==="Z")return 0;var q=R.match(/([+-]|\d\d)/g),S=60*q[1]+(+q[2]||0);return S===0?0:q[0]==="+"?-S:S}(E)}],_=function(E){var R=c[E];return R&&(R.indexOf?R:R.s.concat(R.f))},b=function(E,R){var q,S=c.meridiem;if(S){for(var W=1;W<=24;W+=1)if(E.indexOf(S(W,0,R))>-1){q=W>12;break}}else q=E===(R?"pm":"PM");return q},O={A:[g,function(E){this.afternoon=b(E,!1)}],a:[g,function(E){this.afternoon=b(E,!0)}],Q:[s,function(E){this.month=3*(E-1)+1}],S:[s,function(E){this.milliseconds=100*+E}],SS:[o,function(E){this.milliseconds=10*+E}],SSS:[/\d{3}/,function(E){this.milliseconds=+E}],s:[d,h("seconds")],ss:[d,h("seconds")],m:[d,h("minutes")],mm:[d,h("minutes")],H:[d,h("hours")],h:[d,h("hours")],HH:[d,h("hours")],hh:[d,h("hours")],D:[d,h("day")],DD:[o,h("day")],Do:[g,function(E){var R=c.ordinal,q=E.match(/\d+/);if(this.day=q[0],R)for(var S=1;S<=31;S+=1)R(S).replace(/\[|\]/g,"")===E&&(this.day=S)}],w:[d,h("week")],ww:[o,h("week")],M:[d,h("month")],MM:[o,h("month")],MMM:[g,function(E){var R=_("months"),q=(_("monthsShort")||R.map(function(S){return S.slice(0,3)})).indexOf(E)+1;if(q<1)throw new Error;this.month=q%12||q}],MMMM:[g,function(E){var R=_("months").indexOf(E)+1;if(R<1)throw new Error;this.month=R%12||R}],Y:[/[+-]?\d+/,h("year")],YY:[o,function(E){this.year=p(E)}],YYYY:[/\d{4}/,h("year")],Z:v,ZZ:v};function T(E){var R,q;R=E,q=c&&c.formats;for(var S=(E=R.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Q,z,te){var G=te&&te.toUpperCase();return z||q[te]||r[te]||q[G].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(P,x,D){return x||D.slice(1)})})).match(a),W=S.length,I=0;I<W;I+=1){var $=S[I],F=O[$],K=F&&F[0],ne=F&&F[1];S[I]=ne?{regex:K,parser:ne}:$.replace(/^\[|\]$/g,"")}return function(Q){for(var z={},te=0,G=0;te<W;te+=1){var P=S[te];if(typeof P=="string")G+=P.length;else{var x=P.regex,D=P.parser,M=Q.slice(G),B=x.exec(M)[0];D.call(z,B),Q=Q.replace(B,"")}}return function(C){var X=C.afternoon;if(X!==void 0){var ee=C.hours;X?ee<12&&(C.hours+=12):ee===12&&(C.hours=0),delete C.afternoon}}(z),z}}return function(E,R,q){q.p.customParseFormat=!0,E&&E.parseTwoDigitYear&&(p=E.parseTwoDigitYear);var S=R.prototype,W=S.parse;S.parse=function(I){var $=I.date,F=I.utc,K=I.args;this.$u=F;var ne=K[1];if(typeof ne=="string"){var Q=K[2]===!0,z=K[3]===!0,te=Q||z,G=K[2];z&&(G=K[2]),c=this.$locale(),!Q&&G&&(c=q.Ls[G]),this.$d=function(M,B,C,X){try{if(["x","X"].indexOf(B)>-1)return new Date((B==="X"?1e3:1)*M);var ee=T(B)(M),re=ee.year,oe=ee.month,Ie=ee.day,Ee=ee.hours,Re=ee.minutes,Ne=ee.seconds,me=ee.milliseconds,ve=ee.zone,Ae=ee.week,Se=new Date,qe=Ie||(re||oe?1:Se.getDate()),Qe=re||Se.getFullYear(),He=0;re&&!oe||(He=oe>0?oe-1:Se.getMonth());var en,Qn=Ee||0,nn=Re||0,Vn=Ne||0,et=me||0;return ve?new Date(Date.UTC(Qe,He,qe,Qn,nn,Vn,et+60*ve.offset*1e3)):C?new Date(Date.UTC(Qe,He,qe,Qn,nn,Vn,et)):(en=new Date(Qe,He,qe,Qn,nn,Vn,et),Ae&&(en=X(en).week(Ae).toDate()),en)}catch{return new Date("")}}($,ne,F,q),this.init(),G&&G!==!0&&(this.$L=this.locale(G).$L),te&&$!=this.format(ne)&&(this.$d=new Date("")),c={}}else if(ne instanceof Array)for(var P=ne.length,x=1;x<=P;x+=1){K[1]=ne[x-1];var D=q.apply(this,K);if(D.isValid()){this.$d=D.$d,this.$L=D.$L,this.init();break}x===P&&(this.$d=new Date(""))}else W.call(this,I)}}})}(Pl)),Pl.exports}var lA=sA();const oA=If(lA);na.extend(oA);Cn(ea);const uA=e=>{const i=e.aktiveNaturalytelser.reduce((a,s)=>{const o=s.type;return o in a?{...a,[o]:[...a[o],s]}:{...a,[o]:[s]}},{}),r={};return Object.entries(i).forEach(([a,s])=>{const o=s.sort((d,g)=>$T({fom:d.periode.fomDato,tom:d.periode.tomDato},{fom:g.periode.fomDato,tom:g.periode.tomDato})).reverse();r[a]=o.flatMap((d,g,c)=>{const p=c[g+1],h=d.periode.tomDato,v=p?.periode.fomDato;return h===$r?[]:[{...d,periode:{fomDato:Sd(h,1),tomDato:v?Sd(v,-1):$r}}]})}),r},nc=({inntektsmelding:e,alleKodeverk:i})=>{const r=mt(),a=uA(e);return H.jsx(Xn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?H.jsx("span",{children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):H.jsx(hi,{gap:"1",children:Object.entries(a).map(([s,o])=>H.jsxs("div",{children:[H.jsx("span",{children:i.NaturalYtelseType.find(d=>d.kode===s)?.navn}),H.jsx("ul",{children:o.map(d=>H.jsxs(Z.Fragment,{children:[H.jsxs("li",{children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",H.jsx(Yr,{dateString:d.periode.fomDato})]}),d.periode.tomDato!==$r&&H.jsxs("li",{children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",H.jsx(Yr,{dateString:d.periode.tomDato})]}),H.jsxs("li",{children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",H.jsx(lr,{beløp:d.beloepPerMnd.verdi})]})]},d.indexKey))})]},s))})})};nc.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const tc=({kildeSystem:e})=>{const i=mt();return H.jsx(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:dA(e,i)})},dA=(e,i)=>{switch(e.toUpperCase()){case"NAV_NO":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}};tc.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const rc=({inntektsmelding:e})=>{const i=mt();return H.jsxs(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[H.jsxs("span",{children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),H.jsxs("span",{children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};rc.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const ac=({inntektsmelding:e,fagsak:i,arbeidsgiverOpplysninger:r})=>{const a=`IM ${r.navn} - ${Yg(e.motattDato)}`;return H.jsx(Vl,{type:"button",onClick:()=>{Zb(i.saksnummer,e.journalpostId,e.dokumentId,a)},variant:"secondary",size:"small",icon:H.jsx(f0,{}),children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.modal.trigger"})})};ac.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""}}};const ic=({inntektsmelding:e})=>{const i=mt();if(e.refusjonsperioder.length===0)return H.jsx(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:e.refusjonPrMnd?H.jsx(lr,{beløp:e.refusjonPrMnd}):H.jsx(xe,{tagName:"span",id:"InntektsmeldingFaktaPanel.refusjon.ingen"})});const r=[...e.refusjonsperioder].sort((a,s)=>new Date(a.fom).getTime()-new Date(s.fom).getTime());return H.jsxs(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:[H.jsx("span",{children:"Krever refusjon"}),H.jsx(lr,{beløp:e.refusjonPrMnd??0}),H.jsx("span",{children:"Endringer i perioden:"}),H.jsx("ul",{children:r.map(a=>H.jsx("li",{children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:H.jsx(lr,{beløp:a.refusjonsbeløp.verdi}),fom:H.jsx(Yr,{dateString:a.fom})}})},a.indexKey))})]})};ic.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const sc=({startDatoPermisjon:e,ytelse:i})=>{const r=mt();return e?H.jsxs(Xn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:i.toLowerCase()}),children:[H.jsx("span",{children:e?H.jsx(Yr,{dateString:e}):"-"}),H.jsx("span",{children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};sc.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const gA="_behandlingCircleIngen_g2j3j_1",fA="_behandlingCircleDenne_g2j3j_5",cA="_behandlingCircleAndre_g2j3j_9",mA="_container_g2j3j_13",pA="_ingenInntektsmeldinger_g2j3j_20",Gr={behandlingCircleIngen:gA,behandlingCircleDenne:fA,behandlingCircleAndre:cA,container:mA,ingenInntektsmeldinger:pA},lc=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:i,alleBehandlinger:r})=>{const{alleKodeverk:a,fagsak:s,behandling:o}=Wg(),d=mt();return H.jsxs(hi,{gap:"4",className:Gr.container,children:[H.jsxs(sr,{gap:"4",justify:"space-between",align:"start",children:[H.jsxs(Jg,{level:"3",size:"small",children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",H.jsx(oi,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),H.jsx(ac,{fagsak:s,inntektsmelding:e,arbeidsgiverOpplysninger:i[e.arbeidsgiverIdent]})]}),H.jsxs(V1,{columns:3,gap:"8",children:[H.jsx(Rf,{arbeidsgiverOpplysninger:i[e.arbeidsgiverIdent],arbeidsgiverIdent:e.arbeidsgiverIdent}),H.jsx(Xn,{tittel:d.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:H.jsx(lr,{beløp:e.inntektPrMnd})}),H.jsx(Sf,{alleKodeverk:a,inntektsmelding:e,alleBehandlinger:r,behandling:o}),H.jsx(rc,{inntektsmelding:e}),H.jsx(sc,{ytelse:a.FagsakYtelseType.find(g=>g.kode===s.fagsakYtelseType)?.navn??"",startDatoPermisjon:e.startDatoPermisjon}),H.jsx(tc,{kildeSystem:e.kildeSystem}),H.jsx(nc,{inntektsmelding:e,alleKodeverk:a}),H.jsx(ic,{inntektsmelding:e})]})]})};lc.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const hA={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},Vg=Cn(hA),Bl=({arbeidsgiverOpplysningerPerId:e,alleBehandlinger:i,inntektsmeldinger:r})=>{const{behandling:a}=Wg(),[s,o]=A.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),d=p=>{o(s&&p===s.orderBy&&s.direction==="descending"?void 0:{orderBy:p,direction:s&&p===s.orderBy&&s.direction==="ascending"?"descending":"ascending"})},g=s?kA({inntektsmeldinger:r,arbeidsgiverOpplysningerPerId:e,sortKey:s.orderBy,behandling:a}):r,c=s?.direction==="ascending"?g:g.toReversed();return c.length===0?H.jsx(jd,{value:Vg,children:H.jsxs(sr,{gap:"2",justify:"center",align:"center",className:Gr.ingenInntektsmeldinger,children:[H.jsx(ui,{children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.ingen"})}),H.jsx(y0,{})]})}):H.jsx(jd,{value:Vg,children:H.jsxs($e,{sort:s,onSortChange:p=>d(p),children:[H.jsx($e.Header,{children:H.jsxs($e.Row,{children:[H.jsx($e.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),H.jsx($e.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),H.jsx($e.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),H.jsx($e.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),H.jsx($e.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),H.jsx($e.HeaderCell,{})]})}),H.jsx($e.Body,{children:c.map(p=>H.jsxs($e.ExpandableRow,{expandOnRowClick:!0,contentGutter:"none",togglePlacement:"right",content:H.jsx(lc,{alleBehandlinger:i,arbeidsgiverOpplysningerPerId:e,inntektsmelding:p}),children:[H.jsx($e.DataCell,{children:H.jsx(oi,{dateTimeString:p.innsendingstidspunkt,separator:"kl"})}),H.jsx($e.DataCell,{children:e[p.arbeidsgiverIdent]?.navn??"-"}),H.jsx($e.DataCell,{children:p.startDatoPermisjon?H.jsx(Yr,{dateString:p.startDatoPermisjon}):"-"}),H.jsx($e.DataCell,{children:H.jsx(lr,{beløp:p.inntektPrMnd})}),H.jsx($e.DataCell,{children:H.jsx(vA,{behandling:a,inntektsmelding:p})})]},`${p.journalpostId}-${p.internArbeidsforholdId}`))})]})})},kA=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:i,sortKey:r,behandling:a})=>r==="arbeidsgiverIdent"?e.slice().sort((s,o)=>{const d=i[s.arbeidsgiverIdent]?.navn,g=i[o.arbeidsgiverIdent]?.navn;return sl(d,g)}):r==="tilknyttedeBehandlingIder"?e.slice().sort((s,o)=>{const d=xl({behandling:a,inntektsmelding:s}),g=xl({behandling:a,inntektsmelding:o});return sl(d,g)}):e.slice().sort((s,o)=>{const d=s[r],g=o[r];return sl(d,g)}),sl=(e,i)=>e===void 0?-1:i===void 0?1:e<i?-1:e>i?1:0,vA=({behandling:e,inntektsmelding:i})=>{const r=xl({behandling:e,inntektsmelding:i});return r==="DENNE"?H.jsxs(sr,{gap:"1",align:"center",children:[H.jsx(Ks,{className:Gr.behandlingCircleDenne}),H.jsx(xe,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):r==="ANDRE"?H.jsxs(sr,{gap:"1",align:"center",children:[H.jsx(Ks,{className:Gr.behandlingCircleAndre}),H.jsx(xe,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):H.jsxs(sr,{gap:"1",align:"center",children:[H.jsx(Ks,{className:Gr.behandlingCircleIngen}),H.jsx(xe,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},xl=({behandling:e,inntektsmelding:i})=>i.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":i.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";Bl.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const ll={innsendingstidspunkt:"2024-08-08T00:00:00",kildeSystem:"Altinn",aktiveNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",arbeidsgiverIdent:"1",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},_A={title:"fakta/fakta-inntektsmelding",component:Bl,decorators:[Wb],render:e=>H.jsx(Bl,{...e})},Hr={args:{alleBehandlinger:[{uuid:"UUID1",type:"BT-002",opprettet:"2024-07-13",avsluttet:"2024-08-13"},{uuid:"UUID2",type:"BT-003",opprettet:"2024-07-14",avsluttet:"2024-08-14"},{uuid:"UUID3",type:"BT-004",opprettet:"2024-07-15",avsluttet:"2024-08-15"}],arbeidsgiverOpplysningerPerId:{1:{navn:"Rema 1000"},2:{navn:"Kiwi"},3:{navn:"Meny"}},behandling:{uuid:"UUID2"},inntektsmeldinger:[{...ll,tilknyttedeBehandlingIder:["UUID1"],inntektPrMnd:10000.5,innsendingstidspunkt:"2024-07-20T00:00:00",startDatoPermisjon:"2024-10-10",refusjonPrMnd:void 0,journalpostId:"1",refusjonsperioder:[{refusjonsbeløp:{verdi:5e3},indexKey:"1",fom:"2024-01-10"},{refusjonsbeløp:{verdi:3e3},indexKey:"2",fom:"2024-01-09"}]},{...ll,tilknyttedeBehandlingIder:["UUID1","UUID2"],inntektPrMnd:2e4,innsendingstidspunkt:"2024-08-01T00:00:00",kildeSystem:"FS22",refusjonPrMnd:void 0,arbeidsgiverIdent:"2",journalpostId:"2"},{...ll,tilknyttedeBehandlingIder:[],inntektPrMnd:3e4,innsendingstidspunkt:"2024-09-10T00:00:00",innsendingsårsak:"ENDRING",kildeSystem:"NAV_NO",startDatoPermisjon:"2024-11-11",arbeidsgiverIdent:"3",journalpostId:"3",aktiveNaturalytelser:[{periode:{fomDato:"2024-01-09",tomDato:"2024-10-09"},type:ol.ELEKTRISK_KOMMUNIKASJON,beloepPerMnd:{verdi:999},indexKey:"1"},{periode:{fomDato:"2024-01-11",tomDato:"2024-10-11"},type:ol.LOSJI,beloepPerMnd:{verdi:10},indexKey:"2"}]}]}},Qa={args:{...Hr.args,inntektsmeldinger:[]}};Hr.parameters={...Hr.parameters,docs:{...Hr.parameters?.docs,source:{originalSource:`{
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
}`,...Hr.parameters?.docs?.source}}};Qa.parameters={...Qa.parameters,docs:{...Qa.parameters?.docs,source:{originalSource:`{
  args: {
    ...InntektsmeldingDefault.args,
    inntektsmeldinger: []
  }
}`,...Qa.parameters?.docs?.source}}};const wA=["InntektsmeldingDefault","IngenInntektsmeldinger"];export{Qa as IngenInntektsmeldinger,Hr as InntektsmeldingDefault,wA as __namedExportsOrder,_A as default};
