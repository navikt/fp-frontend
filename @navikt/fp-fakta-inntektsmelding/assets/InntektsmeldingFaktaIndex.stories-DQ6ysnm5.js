import{g as Hm,r as A,u as ft,_ as Rd,s as Sd,c as Gm,a as Pe,R as U,b as Cy,d as gr,T as Hy,S as zr,e as Um,f as $m,h as Gy,o as Ym,A as Uy,i as Mn,j as V,k as cr,l as $r,m as Wa,E as Nd,n as Wm,P as Pd,w as $y}from"./iframe-pcXXdbmc.js";import{r as Yy}from"./index-NjeInLfJ.js";import"./preload-helper-D9Z9MdNV.js";var zm=Yy();const Id=Hm(zm);function Wy(e,i){var r=e.values,a=Rd(e,["values"]),l=i.values,o=Rd(i,["values"]);return Sd(l,r)&&Sd(a,o)}function Xm(e){var i=ft(),r=i.formatMessage,a=i.textComponent,l=a===void 0?A.Fragment:a,o=e.id,d=e.description,m=e.defaultMessage,c=e.values,v=e.children,h=e.tagName,y=h===void 0?l:h,E=e.ignoreTag,_={id:o,description:d,defaultMessage:m},O=r(_,c,{ignoreTag:E});return typeof v=="function"?v(Array.isArray(O)?O:[O]):y?A.createElement(y,null,O):A.createElement(A.Fragment,null,O)}Xm.displayName="FormattedMessage";var Ne=A.memo(Xm,Wy);Ne.displayName="MemoizedFormattedMessage";var ds=(e=>(e.ELEKTRISK_KOMMUNIKASJON="ELEKTRISK_KOMMUNIKASJON",e.LOSJI="LOSJI",e))(ds||{});const zy=(e,i,r)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${i}&dokumentId=${r}`,Xy=(e,i,r,a)=>{const l=zy(e,i,r),o=`${i}-${r}`;a&&Jy(l,o,a)},Jy=(e,i,r)=>{const a=window.open(e,i);a&&setTimeout(()=>{a.document.title=r},1e3)},fr=e=>Gm({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Zy=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const ri=A.forwardRef((e,i)=>{var{className:r,size:a="medium",as:l="p",spacing:o,truncate:d,weight:m="regular",align:c,visuallyHidden:v,textColor:h}=e,y=Zy(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:E}=Pe();return U.createElement(l,Object.assign({},y,{ref:i,className:E(r,"navds-body-long",`navds-body-long--${a}`,fr({spacing:o,truncate:d,weight:m,align:c,visuallyHidden:v,textColor:h}))}))});var Qy=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const di=A.forwardRef((e,i)=>{var{className:r,size:a="medium",as:l="p",spacing:o,truncate:d,weight:m="regular",align:c,visuallyHidden:v,textColor:h}=e,y=Qy(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:E}=Pe();return U.createElement(l,Object.assign({},y,{ref:i,className:E(r,"navds-body-short",`navds-body-short--${a}`,fr({spacing:o,truncate:d,weight:m,align:c,visuallyHidden:v,textColor:h}))}))});var eb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const nb=A.forwardRef((e,i)=>{var{className:r,size:a="medium",spacing:l,uppercase:o,as:d="p",truncate:m,weight:c="regular",align:v,visuallyHidden:h,textColor:y}=e,E=eb(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=Pe();return U.createElement(d,Object.assign({},E,{ref:i,className:_(r,"navds-detail",fr({spacing:l,truncate:m,weight:c,align:v,visuallyHidden:h,textColor:y,uppercase:o}),{"navds-detail--small":a==="small"})}))});var tb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const rb=A.forwardRef((e,i)=>{var{children:r,className:a,size:l,spacing:o,as:d="p",showIcon:m=!1}=e,c=tb(e,["children","className","size","spacing","as","showIcon"]);const{cn:v}=Pe();return U.createElement(d,Object.assign({},c,{ref:i,className:v("navds-error-message","navds-label",a,fr({spacing:o}),{"navds-label--small":l==="small","navds-error-message--show-icon":m})}),m&&U.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},U.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var ab=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Jm=A.forwardRef((e,i)=>{var{level:r="1",size:a,className:l,as:o,spacing:d,align:m,visuallyHidden:c,textColor:v}=e,h=ab(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:y}=Pe(),E=o??`h${r}`;return U.createElement(E,Object.assign({},h,{ref:i,className:y(l,"navds-heading",`navds-heading--${a}`,fr({spacing:d,align:m,visuallyHidden:c,textColor:v}))}))});var ib=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};A.forwardRef((e,i)=>{var{className:r,spacing:a,as:l="p"}=e,o=ib(e,["className","spacing","as"]);const{cn:d}=Pe();return U.createElement(l,Object.assign({},o,{ref:i,className:d(r,"navds-ingress",{"navds-typo--spacing":!!a})}))});var lb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Ds=A.forwardRef((e,i)=>{var{className:r,size:a="medium",as:l="label",spacing:o,visuallyHidden:d,textColor:m}=e,c=lb(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:v}=Pe();return U.createElement(l,Object.assign({},c,{ref:i,className:v(r,"navds-label",fr({spacing:o,visuallyHidden:d,textColor:m}),{"navds-label--small":a==="small"})}))});function Xr(e,i){const r=Object.entries(e).filter(([a])=>!i.includes(a));return Object.fromEntries(r)}let Od=0;function sb(e){const[i,r]=A.useState(e),a=e||i;return A.useEffect(()=>{i==null&&(Od+=1,r(`aksel-id-${Od}`))},[i]),a}const jd=U.useId;function mi(e){var i;if(jd!==void 0){const r=jd();return e??r.replace(/(:)/g,"")}return(i=sb(e))!==null&&i!==void 0?i:""}function Bd(e,i=[]){const r=A.useRef(e);return A.useEffect(()=>{r.current=e}),A.useCallback((...a)=>{var l;return(l=r.current)===null||l===void 0?void 0:l.call(r,...a)},i)}function Fs({value:e,defaultValue:i,onChange:r}){const a=Bd(r),[l,o]=A.useState(i),d=e!==void 0,m=d?e:l,c=Bd(v=>{const y=typeof v=="function"?v(m):v;d||o(y),a(y)},[d,a,m]);return[m,c]}let xd=0;function ob(e){const[i,r]=A.useState(e),a=e||i;return A.useEffect(()=>{i==null&&(xd+=1,r(`aksel-icon-${xd}`))},[i]),a}const qd=U.useId;function vt(e){var i;return qd!==void 0?qd().replace(/(:)/g,""):(i=ob(e))!==null&&i!==void 0?i:""}var ub=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const db=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=ub(e,["title","titleId"]);let o=vt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var mb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const gb=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=mb(e,["title","titleId"]);let o=vt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var cb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Zm=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=cb(e,["title","titleId"]);let o=vt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var fb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Hl=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=fb(e,["title","titleId"]);let o=vt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12",clipRule:"evenodd"}))});var vb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const pb=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=vb(e,["title","titleId"]);let o=vt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var hb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Qm=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=hb(e,["title","titleId"]);let o=vt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var kb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const yb=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=kb(e,["title","titleId"]);let o=vt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var bb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Eb=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=bb(e,["title","titleId"]);let o=vt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var _b=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Dd=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=_b(e,["title","titleId"]);let o=vt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});function gi(e,i,{checkForDefaultPrevented:r=!0}={}){return function(l){if(e?.(l),r===!1||!l.defaultPrevented)return i?.(l)}}const[yw,Tb]=Cy({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function Gl(e){return(i={})=>{const r=i.width?String(i.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function Dr(e){return(i,r)=>{const a=r?.context?String(r.context):"standalone";let l;if(a==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,m=r?.width?String(r.width):d;l=e.formattingValues[m]||e.formattingValues[d]}else{const d=e.defaultWidth,m=r?.width?String(r.width):e.defaultWidth;l=e.values[m]||e.values[d]}const o=e.argumentCallback?e.argumentCallback(i):i;return l[o]}}function Fr(e){return(i,r={})=>{const a=r.width,l=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=i.match(l);if(!o)return null;const d=o[0],m=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(m)?Ab(m,y=>y.test(d)):wb(m,y=>y.test(d));let v;v=e.valueCallback?e.valueCallback(c):c,v=r.valueCallback?r.valueCallback(v):v;const h=i.slice(d.length);return{value:v,rest:h}}}function wb(e,i){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&i(e[r]))return r}function Ab(e,i){for(let r=0;r<e.length;r++)if(i(e[r]))return r}function Rb(e){return(i,r={})=>{const a=i.match(e.matchPattern);if(!a)return null;const l=a[0],o=i.match(e.parsePattern);if(!o)return null;let d=e.valueCallback?e.valueCallback(o[0]):o[0];d=r.valueCallback?r.valueCallback(d):d;const m=i.slice(l.length);return{value:d,rest:m}}}const Sb={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Nb=(e,i,r)=>{let a;const l=Sb[e];return typeof l=="string"?a=l:i===1?a=l.one:a=l.other.replace("{{count}}",String(i)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+a:a+" siden":a},Pb={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Ib={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Ob={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},jb={date:Gl({formats:Pb,defaultWidth:"full"}),time:Gl({formats:Ib,defaultWidth:"full"}),dateTime:Gl({formats:Ob,defaultWidth:"full"})},Bb={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},xb=(e,i,r,a)=>Bb[e],qb={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Db={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Fb={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Vb={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Kb={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Mb=(e,i)=>Number(e)+".",Lb={ordinalNumber:Mb,era:Dr({values:qb,defaultWidth:"wide"}),quarter:Dr({values:Db,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Dr({values:Fb,defaultWidth:"wide"}),day:Dr({values:Vb,defaultWidth:"wide"}),dayPeriod:Dr({values:Kb,defaultWidth:"wide"})},Cb=/^(\d+)\.?/i,Hb=/\d+/i,Gb={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Ub={any:[/^f/i,/^e/i]},$b={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Yb={any:[/1/i,/2/i,/3/i,/4/i]},Wb={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},zb={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Xb={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Jb={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Zb={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Qb={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},e1={ordinalNumber:Rb({matchPattern:Cb,parsePattern:Hb,valueCallback:e=>parseInt(e,10)}),era:Fr({matchPatterns:Gb,defaultMatchWidth:"wide",parsePatterns:Ub,defaultParseWidth:"any"}),quarter:Fr({matchPatterns:$b,defaultMatchWidth:"wide",parsePatterns:Yb,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Fr({matchPatterns:Wb,defaultMatchWidth:"wide",parsePatterns:zb,defaultParseWidth:"any"}),day:Fr({matchPatterns:Xb,defaultMatchWidth:"wide",parsePatterns:Jb,defaultParseWidth:"any"}),dayPeriod:Fr({matchPatterns:Zb,defaultMatchWidth:"any",parsePatterns:Qb,defaultParseWidth:"any"})},n1={code:"nb",formatDistance:Nb,formatLong:jb,formatRelative:xb,localize:Lb,match:e1,options:{weekStartsOn:1,firstWeekContainsDate:4}},t1={global:{dateLocale:n1,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},r1=A.createContext({locale:t1}),eg=()=>A.useContext(r1);var a1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const i1=A.forwardRef((e,i)=>{var r,a,l,{rootElement:o,asChild:d}=e,m=a1(e,["rootElement","asChild"]);const c=gr(!1),v=(r=eg())===null||r===void 0?void 0:r.rootElement,h=(a=o??v)!==null&&a!==void 0?a:(l=globalThis?.document)===null||l===void 0?void 0:l.body,y=d?zr:"div";return c?h?Id.createPortal(U.createElement(Hy,{theme:c.theme,asChild:!0,hasBackground:!1,"data-color":c.color},U.createElement(y,Object.assign({ref:i,"data-aksel-portal":""},m))),h):null:h?Id.createPortal(U.createElement(y,Object.assign({ref:i,"data-aksel-portal":""},m)),h):null}),or=Math.min,Kt=Math.max,ai=Math.round,za=Math.floor,zn=e=>({x:e,y:e}),l1={left:"right",right:"left",bottom:"top",top:"bottom"},s1={start:"end",end:"start"};function ms(e,i,r){return Kt(e,or(i,r))}function Jr(e,i){return typeof e=="function"?e(i):e}function Mt(e){return e.split("-")[0]}function Zr(e){return e.split("-")[1]}function ng(e){return e==="x"?"y":"x"}function Vs(e){return e==="y"?"height":"width"}function ur(e){return["top","bottom"].includes(Mt(e))?"y":"x"}function Ks(e){return ng(ur(e))}function o1(e,i,r){r===void 0&&(r=!1);const a=Zr(e),l=Ks(e),o=Vs(l);let d=l==="x"?a===(r?"end":"start")?"right":"left":a==="start"?"bottom":"top";return i.reference[o]>i.floating[o]&&(d=ii(d)),[d,ii(d)]}function u1(e){const i=ii(e);return[gs(e),i,gs(i)]}function gs(e){return e.replace(/start|end/g,i=>s1[i])}function d1(e,i,r){const a=["left","right"],l=["right","left"],o=["top","bottom"],d=["bottom","top"];switch(e){case"top":case"bottom":return r?i?l:a:i?a:l;case"left":case"right":return i?o:d;default:return[]}}function m1(e,i,r,a){const l=Zr(e);let o=d1(Mt(e),r==="start",a);return l&&(o=o.map(d=>d+"-"+l),i&&(o=o.concat(o.map(gs)))),o}function ii(e){return e.replace(/left|right|bottom|top/g,i=>l1[i])}function g1(e){return{top:0,right:0,bottom:0,left:0,...e}}function tg(e){return typeof e!="number"?g1(e):{top:e,right:e,bottom:e,left:e}}function li(e){const{x:i,y:r,width:a,height:l}=e;return{width:a,height:l,top:r,left:i,right:i+a,bottom:r+l,x:i,y:r}}function Fd(e,i,r){let{reference:a,floating:l}=e;const o=ur(i),d=Ks(i),m=Vs(d),c=Mt(i),v=o==="y",h=a.x+a.width/2-l.width/2,y=a.y+a.height/2-l.height/2,E=a[m]/2-l[m]/2;let _;switch(c){case"top":_={x:h,y:a.y-l.height};break;case"bottom":_={x:h,y:a.y+a.height};break;case"right":_={x:a.x+a.width,y};break;case"left":_={x:a.x-l.width,y};break;default:_={x:a.x,y:a.y}}switch(Zr(i)){case"start":_[d]-=E*(r&&v?-1:1);break;case"end":_[d]+=E*(r&&v?-1:1);break}return _}const c1=async(e,i,r)=>{const{placement:a="bottom",strategy:l="absolute",middleware:o=[],platform:d}=r,m=o.filter(Boolean),c=await(d.isRTL==null?void 0:d.isRTL(i));let v=await d.getElementRects({reference:e,floating:i,strategy:l}),{x:h,y}=Fd(v,a,c),E=a,_={},O=0;for(let T=0;T<m.length;T++){const{name:b,fn:R}=m[T],{x:j,y:N,data:H,reset:I}=await R({x:h,y,initialPlacement:a,placement:E,strategy:l,middlewareData:_,rects:v,platform:d,elements:{reference:e,floating:i}});h=j??h,y=N??y,_={..._,[b]:{..._[b],...H}},I&&O<=50&&(O++,typeof I=="object"&&(I.placement&&(E=I.placement),I.rects&&(v=I.rects===!0?await d.getElementRects({reference:e,floating:i,strategy:l}):I.rects),{x:h,y}=Fd(v,E,c)),T=-1)}return{x:h,y,placement:E,strategy:l,middlewareData:_}};async function rg(e,i){var r;i===void 0&&(i={});const{x:a,y:l,platform:o,rects:d,elements:m,strategy:c}=e,{boundary:v="clippingAncestors",rootBoundary:h="viewport",elementContext:y="floating",altBoundary:E=!1,padding:_=0}=Jr(i,e),O=tg(_),b=m[E?y==="floating"?"reference":"floating":y],R=li(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(b)))==null||r?b:b.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(m.floating)),boundary:v,rootBoundary:h,strategy:c})),j=y==="floating"?{x:a,y:l,width:d.floating.width,height:d.floating.height}:d.reference,N=await(o.getOffsetParent==null?void 0:o.getOffsetParent(m.floating)),H=await(o.isElement==null?void 0:o.isElement(N))?await(o.getScale==null?void 0:o.getScale(N))||{x:1,y:1}:{x:1,y:1},I=li(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:m,rect:j,offsetParent:N,strategy:c}):j);return{top:(R.top-I.top+O.top)/H.y,bottom:(I.bottom-R.bottom+O.bottom)/H.y,left:(R.left-I.left+O.left)/H.x,right:(I.right-R.right+O.right)/H.x}}const f1=e=>({name:"arrow",options:e,async fn(i){const{x:r,y:a,placement:l,rects:o,platform:d,elements:m,middlewareData:c}=i,{element:v,padding:h=0}=Jr(e,i)||{};if(v==null)return{};const y=tg(h),E={x:r,y:a},_=Ks(l),O=Vs(_),T=await d.getDimensions(v),b=_==="y",R=b?"top":"left",j=b?"bottom":"right",N=b?"clientHeight":"clientWidth",H=o.reference[O]+o.reference[_]-E[_]-o.floating[O],I=E[_]-o.reference[_],C=await(d.getOffsetParent==null?void 0:d.getOffsetParent(v));let x=C?C[N]:0;(!x||!await(d.isElement==null?void 0:d.isElement(C)))&&(x=m.floating[N]||o.floating[O]);const q=H/2-I/2,z=x/2-T[O]/2-1,Q=or(y[R],z),J=or(y[j],z),Z=Q,K=x-T[O]-J,D=x/2-T[O]/2+q,X=ms(Z,D,K),te=!c.arrow&&Zr(l)!=null&&D!==X&&o.reference[O]/2-(D<Z?Q:J)-T[O]/2<0,W=te?D<Z?D-Z:D-K:0;return{[_]:E[_]+W,data:{[_]:X,centerOffset:D-X-W,...te&&{alignmentOffset:W}},reset:te}}}),v1=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(i){var r,a;const{placement:l,middlewareData:o,rects:d,initialPlacement:m,platform:c,elements:v}=i,{mainAxis:h=!0,crossAxis:y=!0,fallbackPlacements:E,fallbackStrategy:_="bestFit",fallbackAxisSideDirection:O="none",flipAlignment:T=!0,...b}=Jr(e,i);if((r=o.arrow)!=null&&r.alignmentOffset)return{};const R=Mt(l),j=ur(m),N=Mt(m)===m,H=await(c.isRTL==null?void 0:c.isRTL(v.floating)),I=E||(N||!T?[ii(m)]:u1(m)),C=O!=="none";!E&&C&&I.push(...m1(m,T,O,H));const x=[m,...I],q=await rg(i,b),z=[];let Q=((a=o.flip)==null?void 0:a.overflows)||[];if(h&&z.push(q[R]),y){const D=o1(l,d,H);z.push(q[D[0]],q[D[1]])}if(Q=[...Q,{placement:l,overflows:z}],!z.every(D=>D<=0)){var J,Z;const D=(((J=o.flip)==null?void 0:J.index)||0)+1,X=x[D];if(X)return{data:{index:D,overflows:Q},reset:{placement:X}};let te=(Z=Q.filter(W=>W.overflows[0]<=0).sort((W,G)=>W.overflows[1]-G.overflows[1])[0])==null?void 0:Z.placement;if(!te)switch(_){case"bestFit":{var K;const W=(K=Q.filter(G=>{if(C){const Y=ur(G.placement);return Y===j||Y==="y"}return!0}).map(G=>[G.placement,G.overflows.filter(Y=>Y>0).reduce((Y,ae)=>Y+ae,0)]).sort((G,Y)=>G[1]-Y[1])[0])==null?void 0:K[0];W&&(te=W);break}case"initialPlacement":te=m;break}if(l!==te)return{reset:{placement:te}}}return{}}}};async function p1(e,i){const{placement:r,platform:a,elements:l}=e,o=await(a.isRTL==null?void 0:a.isRTL(l.floating)),d=Mt(r),m=Zr(r),c=ur(r)==="y",v=["left","top"].includes(d)?-1:1,h=o&&c?-1:1,y=Jr(i,e);let{mainAxis:E,crossAxis:_,alignmentAxis:O}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:{mainAxis:y.mainAxis||0,crossAxis:y.crossAxis||0,alignmentAxis:y.alignmentAxis};return m&&typeof O=="number"&&(_=m==="end"?O*-1:O),c?{x:_*h,y:E*v}:{x:E*v,y:_*h}}const h1=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(i){var r,a;const{x:l,y:o,placement:d,middlewareData:m}=i,c=await p1(i,e);return d===((r=m.offset)==null?void 0:r.placement)&&(a=m.arrow)!=null&&a.alignmentOffset?{}:{x:l+c.x,y:o+c.y,data:{...c,placement:d}}}}},k1=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(i){const{x:r,y:a,placement:l}=i,{mainAxis:o=!0,crossAxis:d=!1,limiter:m={fn:b=>{let{x:R,y:j}=b;return{x:R,y:j}}},...c}=Jr(e,i),v={x:r,y:a},h=await rg(i,c),y=ur(Mt(l)),E=ng(y);let _=v[E],O=v[y];if(o){const b=E==="y"?"top":"left",R=E==="y"?"bottom":"right",j=_+h[b],N=_-h[R];_=ms(j,_,N)}if(d){const b=y==="y"?"top":"left",R=y==="y"?"bottom":"right",j=O+h[b],N=O-h[R];O=ms(j,O,N)}const T=m.fn({...i,[E]:_,[y]:O});return{...T,data:{x:T.x-r,y:T.y-a,enabled:{[E]:o,[y]:d}}}}}};function ci(){return typeof window<"u"}function vr(e){return ag(e)?(e.nodeName||"").toLowerCase():"#document"}function cn(e){var i;return(e==null||(i=e.ownerDocument)==null?void 0:i.defaultView)||window}function Zn(e){var i;return(i=(ag(e)?e.ownerDocument:e.document)||window.document)==null?void 0:i.documentElement}function ag(e){return ci()?e instanceof Node||e instanceof cn(e).Node:!1}function je(e){return ci()?e instanceof Element||e instanceof cn(e).Element:!1}function _n(e){return ci()?e instanceof HTMLElement||e instanceof cn(e).HTMLElement:!1}function si(e){return!ci()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof cn(e).ShadowRoot}function Qr(e){const{overflow:i,overflowX:r,overflowY:a,display:l}=Bn(e);return/auto|scroll|overlay|hidden|clip/.test(i+a+r)&&!["inline","contents"].includes(l)}function y1(e){return["table","td","th"].includes(vr(e))}function fi(e){return[":popover-open",":modal"].some(i=>{try{return e.matches(i)}catch{return!1}})}function Ms(e){const i=vi(),r=je(e)?Bn(e):e;return["transform","translate","scale","rotate","perspective"].some(a=>r[a]?r[a]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!i&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!i&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(a=>(r.willChange||"").includes(a))||["paint","layout","strict","content"].some(a=>(r.contain||"").includes(a))}function b1(e){let i=ct(e);for(;_n(i)&&!gt(i);){if(Ms(i))return i;if(fi(i))return null;i=ct(i)}return null}function vi(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function gt(e){return["html","body","#document"].includes(vr(e))}function Bn(e){return cn(e).getComputedStyle(e)}function pi(e){return je(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ct(e){if(vr(e)==="html")return e;const i=e.assignedSlot||e.parentNode||si(e)&&e.host||Zn(e);return si(i)?i.host:i}function ig(e){const i=ct(e);return gt(i)?e.ownerDocument?e.ownerDocument.body:e.body:_n(i)&&Qr(i)?i:ig(i)}function At(e,i,r){var a;i===void 0&&(i=[]),r===void 0&&(r=!0);const l=ig(e),o=l===((a=e.ownerDocument)==null?void 0:a.body),d=cn(l);if(o){const m=cs(d);return i.concat(d,d.visualViewport||[],Qr(l)?l:[],m&&r?At(m):[])}return i.concat(l,At(l,[],r))}function cs(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function lg(e){const i=Bn(e);let r=parseFloat(i.width)||0,a=parseFloat(i.height)||0;const l=_n(e),o=l?e.offsetWidth:r,d=l?e.offsetHeight:a,m=ai(r)!==o||ai(a)!==d;return m&&(r=o,a=d),{width:r,height:a,$:m}}function Ls(e){return je(e)?e:e.contextElement}function ir(e){const i=Ls(e);if(!_n(i))return zn(1);const r=i.getBoundingClientRect(),{width:a,height:l,$:o}=lg(i);let d=(o?ai(r.width):r.width)/a,m=(o?ai(r.height):r.height)/l;return(!d||!Number.isFinite(d))&&(d=1),(!m||!Number.isFinite(m))&&(m=1),{x:d,y:m}}const E1=zn(0);function sg(e){const i=cn(e);return!vi()||!i.visualViewport?E1:{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function _1(e,i,r){return i===void 0&&(i=!1),!r||i&&r!==cn(e)?!1:i}function Lt(e,i,r,a){i===void 0&&(i=!1),r===void 0&&(r=!1);const l=e.getBoundingClientRect(),o=Ls(e);let d=zn(1);i&&(a?je(a)&&(d=ir(a)):d=ir(e));const m=_1(o,r,a)?sg(o):zn(0);let c=(l.left+m.x)/d.x,v=(l.top+m.y)/d.y,h=l.width/d.x,y=l.height/d.y;if(o){const E=cn(o),_=a&&je(a)?cn(a):a;let O=E,T=cs(O);for(;T&&a&&_!==O;){const b=ir(T),R=T.getBoundingClientRect(),j=Bn(T),N=R.left+(T.clientLeft+parseFloat(j.paddingLeft))*b.x,H=R.top+(T.clientTop+parseFloat(j.paddingTop))*b.y;c*=b.x,v*=b.y,h*=b.x,y*=b.y,c+=N,v+=H,O=cn(T),T=cs(O)}}return li({width:h,height:y,x:c,y:v})}function Cs(e,i){const r=pi(e).scrollLeft;return i?i.left+r:Lt(Zn(e)).left+r}function og(e,i,r){r===void 0&&(r=!1);const a=e.getBoundingClientRect(),l=a.left+i.scrollLeft-(r?0:Cs(e,a)),o=a.top+i.scrollTop;return{x:l,y:o}}function T1(e){let{elements:i,rect:r,offsetParent:a,strategy:l}=e;const o=l==="fixed",d=Zn(a),m=i?fi(i.floating):!1;if(a===d||m&&o)return r;let c={scrollLeft:0,scrollTop:0},v=zn(1);const h=zn(0),y=_n(a);if((y||!y&&!o)&&((vr(a)!=="body"||Qr(d))&&(c=pi(a)),_n(a))){const _=Lt(a);v=ir(a),h.x=_.x+a.clientLeft,h.y=_.y+a.clientTop}const E=d&&!y&&!o?og(d,c,!0):zn(0);return{width:r.width*v.x,height:r.height*v.y,x:r.x*v.x-c.scrollLeft*v.x+h.x+E.x,y:r.y*v.y-c.scrollTop*v.y+h.y+E.y}}function w1(e){return Array.from(e.getClientRects())}function A1(e){const i=Zn(e),r=pi(e),a=e.ownerDocument.body,l=Kt(i.scrollWidth,i.clientWidth,a.scrollWidth,a.clientWidth),o=Kt(i.scrollHeight,i.clientHeight,a.scrollHeight,a.clientHeight);let d=-r.scrollLeft+Cs(e);const m=-r.scrollTop;return Bn(a).direction==="rtl"&&(d+=Kt(i.clientWidth,a.clientWidth)-l),{width:l,height:o,x:d,y:m}}function R1(e,i){const r=cn(e),a=Zn(e),l=r.visualViewport;let o=a.clientWidth,d=a.clientHeight,m=0,c=0;if(l){o=l.width,d=l.height;const v=vi();(!v||v&&i==="fixed")&&(m=l.offsetLeft,c=l.offsetTop)}return{width:o,height:d,x:m,y:c}}function S1(e,i){const r=Lt(e,!0,i==="fixed"),a=r.top+e.clientTop,l=r.left+e.clientLeft,o=_n(e)?ir(e):zn(1),d=e.clientWidth*o.x,m=e.clientHeight*o.y,c=l*o.x,v=a*o.y;return{width:d,height:m,x:c,y:v}}function Vd(e,i,r){let a;if(i==="viewport")a=R1(e,r);else if(i==="document")a=A1(Zn(e));else if(je(i))a=S1(i,r);else{const l=sg(e);a={x:i.x-l.x,y:i.y-l.y,width:i.width,height:i.height}}return li(a)}function ug(e,i){const r=ct(e);return r===i||!je(r)||gt(r)?!1:Bn(r).position==="fixed"||ug(r,i)}function N1(e,i){const r=i.get(e);if(r)return r;let a=At(e,[],!1).filter(m=>je(m)&&vr(m)!=="body"),l=null;const o=Bn(e).position==="fixed";let d=o?ct(e):e;for(;je(d)&&!gt(d);){const m=Bn(d),c=Ms(d);!c&&m.position==="fixed"&&(l=null),(o?!c&&!l:!c&&m.position==="static"&&!!l&&["absolute","fixed"].includes(l.position)||Qr(d)&&!c&&ug(e,d))?a=a.filter(h=>h!==d):l=m,d=ct(d)}return i.set(e,a),a}function P1(e){let{element:i,boundary:r,rootBoundary:a,strategy:l}=e;const d=[...r==="clippingAncestors"?fi(i)?[]:N1(i,this._c):[].concat(r),a],m=d[0],c=d.reduce((v,h)=>{const y=Vd(i,h,l);return v.top=Kt(y.top,v.top),v.right=or(y.right,v.right),v.bottom=or(y.bottom,v.bottom),v.left=Kt(y.left,v.left),v},Vd(i,m,l));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function I1(e){const{width:i,height:r}=lg(e);return{width:i,height:r}}function O1(e,i,r){const a=_n(i),l=Zn(i),o=r==="fixed",d=Lt(e,!0,o,i);let m={scrollLeft:0,scrollTop:0};const c=zn(0);if(a||!a&&!o)if((vr(i)!=="body"||Qr(l))&&(m=pi(i)),a){const E=Lt(i,!0,o,i);c.x=E.x+i.clientLeft,c.y=E.y+i.clientTop}else l&&(c.x=Cs(l));const v=l&&!a&&!o?og(l,m):zn(0),h=d.left+m.scrollLeft-c.x-v.x,y=d.top+m.scrollTop-c.y-v.y;return{x:h,y,width:d.width,height:d.height}}function Ul(e){return Bn(e).position==="static"}function Kd(e,i){if(!_n(e)||Bn(e).position==="fixed")return null;if(i)return i(e);let r=e.offsetParent;return Zn(e)===r&&(r=r.ownerDocument.body),r}function dg(e,i){const r=cn(e);if(fi(e))return r;if(!_n(e)){let l=ct(e);for(;l&&!gt(l);){if(je(l)&&!Ul(l))return l;l=ct(l)}return r}let a=Kd(e,i);for(;a&&y1(a)&&Ul(a);)a=Kd(a,i);return a&&gt(a)&&Ul(a)&&!Ms(a)?r:a||b1(e)||r}const j1=async function(e){const i=this.getOffsetParent||dg,r=this.getDimensions,a=await r(e.floating);return{reference:O1(e.reference,await i(e.floating),e.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function B1(e){return Bn(e).direction==="rtl"}const x1={convertOffsetParentRelativeRectToViewportRelativeRect:T1,getDocumentElement:Zn,getClippingRect:P1,getOffsetParent:dg,getElementRects:j1,getClientRects:w1,getDimensions:I1,getScale:ir,isElement:je,isRTL:B1};function mg(e,i){return e.x===i.x&&e.y===i.y&&e.width===i.width&&e.height===i.height}function q1(e,i){let r=null,a;const l=Zn(e);function o(){var m;clearTimeout(a),(m=r)==null||m.disconnect(),r=null}function d(m,c){m===void 0&&(m=!1),c===void 0&&(c=1),o();const v=e.getBoundingClientRect(),{left:h,top:y,width:E,height:_}=v;if(m||i(),!E||!_)return;const O=za(y),T=za(l.clientWidth-(h+E)),b=za(l.clientHeight-(y+_)),R=za(h),N={rootMargin:-O+"px "+-T+"px "+-b+"px "+-R+"px",threshold:Kt(0,or(1,c))||1};let H=!0;function I(C){const x=C[0].intersectionRatio;if(x!==c){if(!H)return d();x?d(!1,x):a=setTimeout(()=>{d(!1,1e-7)},1e3)}x===1&&!mg(v,e.getBoundingClientRect())&&d(),H=!1}try{r=new IntersectionObserver(I,{...N,root:l.ownerDocument})}catch{r=new IntersectionObserver(I,N)}r.observe(e)}return d(!0),o}function Md(e,i,r,a){a===void 0&&(a={});const{ancestorScroll:l=!0,ancestorResize:o=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:m=typeof IntersectionObserver=="function",animationFrame:c=!1}=a,v=Ls(e),h=l||o?[...v?At(v):[],...At(i)]:[];h.forEach(R=>{l&&R.addEventListener("scroll",r,{passive:!0}),o&&R.addEventListener("resize",r)});const y=v&&m?q1(v,r):null;let E=-1,_=null;d&&(_=new ResizeObserver(R=>{let[j]=R;j&&j.target===v&&_&&(_.unobserve(i),cancelAnimationFrame(E),E=requestAnimationFrame(()=>{var N;(N=_)==null||N.observe(i)})),r()}),v&&!c&&_.observe(v),_.observe(i));let O,T=c?Lt(e):null;c&&b();function b(){const R=Lt(e);T&&!mg(T,R)&&r(),T=R,O=requestAnimationFrame(b)}return r(),()=>{var R;h.forEach(j=>{l&&j.removeEventListener("scroll",r),o&&j.removeEventListener("resize",r)}),y?.(),(R=_)==null||R.disconnect(),_=null,c&&cancelAnimationFrame(O)}}const D1=h1,F1=k1,V1=v1,Ld=f1,K1=(e,i,r)=>{const a=new Map,l={platform:x1,...r},o={...l.platform,_c:a};return c1(e,i,{...l,platform:o})};var ei=typeof document<"u"?A.useLayoutEffect:A.useEffect;function oi(e,i){if(e===i)return!0;if(typeof e!=typeof i)return!1;if(typeof e=="function"&&e.toString()===i.toString())return!0;let r,a,l;if(e&&i&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==i.length)return!1;for(a=r;a--!==0;)if(!oi(e[a],i[a]))return!1;return!0}if(l=Object.keys(e),r=l.length,r!==Object.keys(i).length)return!1;for(a=r;a--!==0;)if(!{}.hasOwnProperty.call(i,l[a]))return!1;for(a=r;a--!==0;){const o=l[a];if(!(o==="_owner"&&e.$$typeof)&&!oi(e[o],i[o]))return!1}return!0}return e!==e&&i!==i}function gg(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Cd(e,i){const r=gg(e);return Math.round(i*r)/r}function $l(e){const i=A.useRef(e);return ei(()=>{i.current=e}),i}function M1(e){e===void 0&&(e={});const{placement:i="bottom",strategy:r="absolute",middleware:a=[],platform:l,elements:{reference:o,floating:d}={},transform:m=!0,whileElementsMounted:c,open:v}=e,[h,y]=A.useState({x:0,y:0,strategy:r,placement:i,middlewareData:{},isPositioned:!1}),[E,_]=A.useState(a);oi(E,a)||_(a);const[O,T]=A.useState(null),[b,R]=A.useState(null),j=A.useCallback(G=>{G!==C.current&&(C.current=G,T(G))},[]),N=A.useCallback(G=>{G!==x.current&&(x.current=G,R(G))},[]),H=o||O,I=d||b,C=A.useRef(null),x=A.useRef(null),q=A.useRef(h),z=c!=null,Q=$l(c),J=$l(l),Z=$l(v),K=A.useCallback(()=>{if(!C.current||!x.current)return;const G={placement:i,strategy:r,middleware:E};J.current&&(G.platform=J.current),K1(C.current,x.current,G).then(Y=>{const ae={...Y,isPositioned:Z.current!==!1};D.current&&!oi(q.current,ae)&&(q.current=ae,zm.flushSync(()=>{y(ae)}))})},[E,i,r,J,Z]);ei(()=>{v===!1&&q.current.isPositioned&&(q.current.isPositioned=!1,y(G=>({...G,isPositioned:!1})))},[v]);const D=A.useRef(!1);ei(()=>(D.current=!0,()=>{D.current=!1}),[]),ei(()=>{if(H&&(C.current=H),I&&(x.current=I),H&&I){if(Q.current)return Q.current(H,I,K);K()}},[H,I,K,Q,z]);const X=A.useMemo(()=>({reference:C,floating:x,setReference:j,setFloating:N}),[j,N]),te=A.useMemo(()=>({reference:H,floating:I}),[H,I]),W=A.useMemo(()=>{const G={position:r,left:0,top:0};if(!te.floating)return G;const Y=Cd(te.floating,h.x),ae=Cd(te.floating,h.y);return m?{...G,transform:"translate("+Y+"px, "+ae+"px)",...gg(te.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:Y,top:ae}},[r,m,te.floating,h.x,h.y]);return A.useMemo(()=>({...h,update:K,refs:X,elements:te,floatingStyles:W}),[h,K,X,te,W])}const L1=e=>{function i(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:a,padding:l}=typeof e=="function"?e(r):e;return a&&i(a)?a.current!=null?Ld({element:a.current,padding:l}).fn(r):{}:a?Ld({element:a,padding:l}).fn(r):{}}}},C1=(e,i)=>({...D1(e),options:[e,i]}),H1=(e,i)=>({...F1(e),options:[e,i]}),G1=(e,i)=>({...V1(e),options:[e,i]}),U1=(e,i)=>({...L1(e),options:[e,i]}),Hd=/(\w+)/g;function $1(e,i){const r=Array.isArray(e)?e:Y1(e);for(const a of i){if(!a)continue;let l=a;for(let o=0;o<r.length;o++){const d=l[r[o]];d!==void 0&&(l=d)}if(typeof l=="string")return l}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function Y1(e){const i=[];let r=Hd.exec(e);for(;r;){const[,a,l]=r;i.push(a||l),r=Hd.exec(e)}return i}const W1=/{[^}]*}/g;function hi(e,...i){const r=eg(),a=r.translations||[],l=[...i,...Array.isArray(a)?a.map(d=>d[e]):[a[e]],r.locale[e]];return(d,m)=>{const c=$1(d,l);return m?c.replace(W1,v=>{const h=v.substring(1,v.length-1);if(m[h]===void 0){const y=JSON.stringify(m);throw new Error(`Error translating key '${d}'. No replacement syntax ({}) found for key '${h}'. The following replacements were passed: '${y}'`)}return m[h]}):c}}var z1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const X1=A.forwardRef((e,i)=>{var{className:r,size:a="medium",title:l,transparent:o=!1,variant:d="neutral",id:m,"data-color":c}=e,v=z1(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:h}=Pe(),y=mi(),E=hi("Loader");return U.createElement("svg",Object.assign({"aria-labelledby":m??`loader-${y}`,ref:i,className:h("navds-loader",r,`navds-loader--${a}`,`navds-loader--${d}`,{"navds-loader--transparent":o}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":c??J1(d)},Xr(v,["children"]),{"data-variant":d}),U.createElement("title",{id:m??`loader-${y}`},l||E("title")),U.createElement("circle",{className:h("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),U.createElement("circle",{className:h("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function J1(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var Z1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Hs=A.forwardRef((e,i)=>{var{as:r="button",variant:a="primary",className:l,children:o,size:d="medium",loading:m=!1,disabled:c,icon:v,iconPosition:h="left",onKeyUp:y,"data-color":E}=e,_=Z1(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:O}=Pe(),T=c||m?Xr(_,["href"]):_,b=R=>{R.key===" "&&!c&&!m&&R.currentTarget.click()};return U.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":E??Q1(a),"data-variant":eE(a)},T,{ref:i,onKeyUp:gi(y,b),className:O(l,"navds-button",`navds-button--${a}`,`navds-button--${d}`,{"navds-button--loading":m,"navds-button--icon-only":!!v&&!o,"navds-button--disabled":c??m}),disabled:c??m?!0:void 0}),v&&h==="left"&&U.createElement("span",{className:O("navds-button__icon")},v),m&&U.createElement(X1,{size:d}),o&&U.createElement(Ds,{as:"span",size:d==="medium"?"medium":"small"},o),v&&h==="right"&&U.createElement("span",{className:O("navds-button__icon")},v))});function Q1(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function eE(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}function nE(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function tE(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(i=>{let{brand:r,version:a}=i;return r+"/"+a}).join(" "):navigator.userAgent}function rE(){return/apple/i.test(navigator.vendor)}function aE(){return nE().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function iE(){return tE().includes("jsdom/")}const lE="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Gd(e){let i=e.activeElement;for(;((r=i)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;i=i.shadowRoot.activeElement}return i}function Yr(e,i){if(!e||!i)return!1;const r=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(r&&si(r)){let a=i;for(;a;){if(e===a)return!0;a=a.parentNode||a.host}}return!1}function ar(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Yl(e,i){if(i==null)return!1;if("composedPath"in e)return e.composedPath().includes(i);const r=e;return r.target!=null&&i.contains(r.target)}function sE(e){return e.matches("html,body")}function Vt(e){return e?.ownerDocument||document}function oE(e){return _n(e)&&e.matches(lE)}function uE(e){if(!e||iE())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function Wl(e,i,r){r===void 0&&(r=!0);let a=e.filter(o=>{var d;return o.parentId===i&&((d=o.context)==null?void 0:d.open)}),l=a;for(;l.length;)l=r?e.filter(o=>{var d;return(d=l)==null?void 0:d.some(m=>{var c;return o.parentId===m.id&&((c=o.context)==null?void 0:c.open)})}):e,a=a.concat(l);return a}function dE(e){return"nativeEvent"in e}function fs(e,i){const r=["mouse","pen"];return r.push("",void 0),r.includes(e)}var dr=typeof document<"u"?A.useLayoutEffect:A.useEffect;const mE={...Um};function Xa(e){const i=A.useRef(e);return dr(()=>{i.current=e}),i}const gE=mE.useInsertionEffect,cE=gE||(e=>e());function dt(e){const i=A.useRef(()=>{});return cE(()=>{i.current=e}),A.useCallback(function(){for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return i.current==null?void 0:i.current(...a)},[])}const fE="data-floating-ui-focusable",Ud="active",$d="selected",vE={...Um};let Yd=!1,pE=0;const Wd=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+pE++;function hE(){const[e,i]=A.useState(()=>Yd?Wd():void 0);return dr(()=>{e==null&&i(Wd())},[]),A.useEffect(()=>{Yd=!0},[]),e}const kE=vE.useId,yE=kE||hE;function bE(){const e=new Map;return{emit(i,r){var a;(a=e.get(i))==null||a.forEach(l=>l(r))},on(i,r){e.has(i)||e.set(i,new Set),e.get(i).add(r)},off(i,r){var a;(a=e.get(i))==null||a.delete(r)}}}const EE=A.createContext(null),_E=A.createContext(null),cg=()=>{var e;return((e=A.useContext(EE))==null?void 0:e.id)||null},Gs=()=>A.useContext(_E);function Us(e){return"data-floating-ui-"+e}function jn(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const zd=Us("safe-polygon");function zl(e,i,r){if(r&&!fs(r))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const a=e();return typeof a=="number"?a:a?.[i]}return e?.[i]}function Xl(e){return typeof e=="function"?e():e}function TE(e,i){i===void 0&&(i={});const{open:r,onOpenChange:a,dataRef:l,events:o,elements:d}=e,{enabled:m=!0,delay:c=0,handleClose:v=null,mouseOnly:h=!1,restMs:y=0,move:E=!0}=i,_=Gs(),O=cg(),T=Xa(v),b=Xa(c),R=Xa(r),j=Xa(y),N=A.useRef(),H=A.useRef(-1),I=A.useRef(),C=A.useRef(-1),x=A.useRef(!0),q=A.useRef(!1),z=A.useRef(()=>{}),Q=A.useRef(!1),J=A.useCallback(()=>{var W;const G=(W=l.current.openEvent)==null?void 0:W.type;return G?.includes("mouse")&&G!=="mousedown"},[l]);A.useEffect(()=>{if(!m)return;function W(G){let{open:Y}=G;Y||(jn(H),jn(C),x.current=!0,Q.current=!1)}return o.on("openchange",W),()=>{o.off("openchange",W)}},[m,o]),A.useEffect(()=>{if(!m||!T.current||!r)return;function W(Y){J()&&a(!1,Y,"hover")}const G=Vt(d.floating).documentElement;return G.addEventListener("mouseleave",W),()=>{G.removeEventListener("mouseleave",W)}},[d.floating,r,a,m,T,J]);const Z=A.useCallback(function(W,G,Y){G===void 0&&(G=!0),Y===void 0&&(Y="hover");const ae=zl(b.current,"close",N.current);ae&&!I.current?(jn(H),H.current=window.setTimeout(()=>a(!1,W,Y),ae)):G&&(jn(H),a(!1,W,Y))},[b,a]),K=dt(()=>{z.current(),I.current=void 0}),D=dt(()=>{if(q.current){const W=Vt(d.floating).body;W.style.pointerEvents="",W.removeAttribute(zd),q.current=!1}}),X=dt(()=>l.current.openEvent?["click","mousedown"].includes(l.current.openEvent.type):!1);A.useEffect(()=>{if(!m)return;function W(se){if(jn(H),x.current=!1,h&&!fs(N.current)||Xl(j.current)>0&&!zl(b.current,"open"))return;const pe=zl(b.current,"open",N.current);pe?H.current=window.setTimeout(()=>{R.current||a(!0,se,"hover")},pe):r||a(!0,se,"hover")}function G(se){if(X()){D();return}z.current();const pe=Vt(d.floating);if(jn(C),Q.current=!1,T.current&&l.current.floatingContext){r||jn(H),I.current=T.current({...l.current.floatingContext,tree:_,x:se.clientX,y:se.clientY,onClose(){D(),K(),X()||Z(se,!0,"safe-polygon")}});const Me=I.current;pe.addEventListener("mousemove",Me),z.current=()=>{pe.removeEventListener("mousemove",Me)};return}(N.current==="touch"?!Yr(d.floating,se.relatedTarget):!0)&&Z(se)}function Y(se){X()||l.current.floatingContext&&(T.current==null||T.current({...l.current.floatingContext,tree:_,x:se.clientX,y:se.clientY,onClose(){D(),K(),X()||Z(se)}})(se))}function ae(){jn(H)}function ne(se){X()||Z(se,!1)}if(je(d.domReference)){const se=d.domReference,pe=d.floating;return r&&se.addEventListener("mouseleave",Y),E&&se.addEventListener("mousemove",W,{once:!0}),se.addEventListener("mouseenter",W),se.addEventListener("mouseleave",G),pe&&(pe.addEventListener("mouseleave",Y),pe.addEventListener("mouseenter",ae),pe.addEventListener("mouseleave",ne)),()=>{r&&se.removeEventListener("mouseleave",Y),E&&se.removeEventListener("mousemove",W),se.removeEventListener("mouseenter",W),se.removeEventListener("mouseleave",G),pe&&(pe.removeEventListener("mouseleave",Y),pe.removeEventListener("mouseenter",ae),pe.removeEventListener("mouseleave",ne))}}},[d,m,e,h,E,Z,K,D,a,r,R,_,b,T,l,X,j]),dr(()=>{var W;if(m&&r&&(W=T.current)!=null&&W.__options.blockPointerEvents&&J()){q.current=!0;const Y=d.floating;if(je(d.domReference)&&Y){var G;const ae=Vt(d.floating).body;ae.setAttribute(zd,"");const ne=d.domReference,se=_==null||(G=_.nodesRef.current.find(pe=>pe.id===O))==null||(G=G.context)==null?void 0:G.elements.floating;return se&&(se.style.pointerEvents=""),ae.style.pointerEvents="none",ne.style.pointerEvents="auto",Y.style.pointerEvents="auto",()=>{ae.style.pointerEvents="",ne.style.pointerEvents="",Y.style.pointerEvents=""}}}},[m,r,O,d,_,T,J]),dr(()=>{r||(N.current=void 0,Q.current=!1,K(),D())},[r,K,D]),A.useEffect(()=>()=>{K(),jn(H),jn(C),D()},[m,d.domReference,K,D]);const te=A.useMemo(()=>{function W(G){N.current=G.pointerType}return{onPointerDown:W,onPointerEnter:W,onMouseMove(G){const{nativeEvent:Y}=G;function ae(){!x.current&&!R.current&&a(!0,Y,"hover")}h&&!fs(N.current)||r||Xl(j.current)===0||Q.current&&G.movementX**2+G.movementY**2<2||(jn(C),N.current==="touch"?ae():(Q.current=!0,C.current=window.setTimeout(ae,Xl(j.current))))}}},[h,a,r,R,j]);return A.useMemo(()=>m?{reference:te}:{},[m,te])}function Jl(e,i){if(!e||!i)return!1;const r=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(r&&si(r)){let a=i;for(;a;){if(e===a)return!0;a=a.parentNode||a.host}}return!1}function wE(e){return"composedPath"in e?e.composedPath()[0]:e.target}const AE={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},RE={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Xd=e=>{var i,r;return{escapeKey:typeof e=="boolean"?e:(i=e?.escapeKey)!=null?i:!1,outsidePress:typeof e=="boolean"?e:(r=e?.outsidePress)!=null?r:!0}};function SE(e,i){i===void 0&&(i={});const{open:r,onOpenChange:a,elements:l,dataRef:o}=e,{enabled:d=!0,escapeKey:m=!0,outsidePress:c=!0,outsidePressEvent:v="pointerdown",referencePress:h=!1,referencePressEvent:y="pointerdown",ancestorScroll:E=!1,bubbles:_,capture:O}=i,T=Gs(),b=dt(typeof c=="function"?c:()=>!1),R=typeof c=="function"?b:c,j=A.useRef(!1),N=A.useRef(!1),{escapeKey:H,outsidePress:I}=Xd(_),{escapeKey:C,outsidePress:x}=Xd(O),q=A.useRef(!1),z=dt(X=>{var te;if(!r||!d||!m||X.key!=="Escape"||q.current)return;const W=(te=o.current.floatingContext)==null?void 0:te.nodeId,G=T?Wl(T.nodesRef.current,W):[];if(!H&&(X.stopPropagation(),G.length>0)){let Y=!0;if(G.forEach(ae=>{var ne;if((ne=ae.context)!=null&&ne.open&&!ae.context.dataRef.current.__escapeKeyBubbles){Y=!1;return}}),!Y)return}a(!1,dE(X)?X.nativeEvent:X,"escape-key")}),Q=dt(X=>{var te;const W=()=>{var G;z(X),(G=ar(X))==null||G.removeEventListener("keydown",W)};(te=ar(X))==null||te.addEventListener("keydown",W)}),J=dt(X=>{var te;const W=j.current;j.current=!1;const G=N.current;if(N.current=!1,v==="click"&&G||W||typeof R=="function"&&!R(X))return;const Y=ar(X),ae="["+Us("inert")+"]",ne=Vt(l.floating).querySelectorAll(ae);let se=je(Y)?Y:null;for(;se&&!gt(se);){const qe=ct(se);if(gt(qe)||!je(qe))break;se=qe}if(ne.length&&je(Y)&&!sE(Y)&&!Yr(Y,l.floating)&&Array.from(ne).every(qe=>!Yr(se,qe)))return;if(_n(Y)&&D){const qe=gt(Y),Le=Bn(Y),ke=/auto|scroll/,we=qe||ke.test(Le.overflowX),Je=qe||ke.test(Le.overflowY),Ce=we&&Y.clientWidth>0&&Y.scrollWidth>Y.clientWidth,Ge=Je&&Y.clientHeight>0&&Y.scrollHeight>Y.clientHeight,Tn=Le.direction==="rtl",Fe=Ge&&(Tn?X.offsetX<=Y.offsetWidth-Y.clientWidth:X.offsetX>Y.clientWidth),Ze=Ce&&X.offsetY>Y.clientHeight;if(Fe||Ze)return}const pe=(te=o.current.floatingContext)==null?void 0:te.nodeId,fn=T&&Wl(T.nodesRef.current,pe).some(qe=>{var Le;return Yl(X,(Le=qe.context)==null?void 0:Le.elements.floating)});if(Yl(X,l.floating)||Yl(X,l.domReference)||fn)return;const Me=T?Wl(T.nodesRef.current,pe):[];if(Me.length>0){let qe=!0;if(Me.forEach(Le=>{var ke;if((ke=Le.context)!=null&&ke.open&&!Le.context.dataRef.current.__outsidePressBubbles){qe=!1;return}}),!qe)return}a(!1,X,"outside-press")}),Z=dt(X=>{var te;const W=()=>{var G;J(X),(G=ar(X))==null||G.removeEventListener(v,W)};(te=ar(X))==null||te.addEventListener(v,W)});A.useEffect(()=>{if(!r||!d)return;o.current.__escapeKeyBubbles=H,o.current.__outsidePressBubbles=I;let X=-1;function te(ne){a(!1,ne,"ancestor-scroll")}function W(){window.clearTimeout(X),q.current=!0}function G(){X=window.setTimeout(()=>{q.current=!1},vi()?5:0)}const Y=Vt(l.floating);m&&(Y.addEventListener("keydown",C?Q:z,C),Y.addEventListener("compositionstart",W),Y.addEventListener("compositionend",G)),R&&Y.addEventListener(v,x?Z:J,x);let ae=[];return E&&(je(l.domReference)&&(ae=At(l.domReference)),je(l.floating)&&(ae=ae.concat(At(l.floating))),!je(l.reference)&&l.reference&&l.reference.contextElement&&(ae=ae.concat(At(l.reference.contextElement)))),ae=ae.filter(ne=>{var se;return ne!==((se=Y.defaultView)==null?void 0:se.visualViewport)}),ae.forEach(ne=>{ne.addEventListener("scroll",te,{passive:!0})}),()=>{m&&(Y.removeEventListener("keydown",C?Q:z,C),Y.removeEventListener("compositionstart",W),Y.removeEventListener("compositionend",G)),R&&Y.removeEventListener(v,x?Z:J,x),ae.forEach(ne=>{ne.removeEventListener("scroll",te)}),window.clearTimeout(X)}},[o,l,m,R,v,r,a,E,d,H,I,z,C,Q,J,x,Z]),A.useEffect(()=>{j.current=!1},[R,v]);const K=A.useMemo(()=>({onKeyDown:z,...h&&{[AE[y]]:X=>{a(!1,X.nativeEvent,"reference-press")},...y!=="click"&&{onClick(X){a(!1,X.nativeEvent,"reference-press")}}}}),[z,a,h,y]),D=A.useMemo(()=>({onKeyDown:z,onMouseDown(){N.current=!0},onMouseUp(){N.current=!0},[RE[v]]:()=>{j.current=!0}}),[z,v]);return A.useMemo(()=>d?{reference:K,floating:D}:{},[d,K,D])}function NE(e){const{open:i=!1,onOpenChange:r,elements:a}=e,l=yE(),o=A.useRef({}),[d]=A.useState(()=>bE()),m=cg()!=null,[c,v]=A.useState(a.reference),h=dt((_,O,T)=>{o.current.openEvent=_?O:void 0,d.emit("openchange",{open:_,event:O,reason:T,nested:m}),r?.(_,O,T)}),y=A.useMemo(()=>({setPositionReference:v}),[]),E=A.useMemo(()=>({reference:c||a.reference||null,floating:a.floating||null,domReference:a.reference}),[c,a.reference,a.floating]);return A.useMemo(()=>({dataRef:o,open:i,onOpenChange:h,elements:E,events:d,floatingId:l,refs:y}),[i,h,E,d,l,y])}function PE(e){e===void 0&&(e={});const{nodeId:i}=e,r=NE({...e,elements:{reference:null,floating:null,...e.elements}}),a=e.rootContext||r,l=a.elements,[o,d]=A.useState(null),[m,c]=A.useState(null),h=l?.domReference||o,y=A.useRef(null),E=Gs();dr(()=>{h&&(y.current=h)},[h]);const _=M1({...e,elements:{...l,...m&&{reference:m}}}),O=A.useCallback(N=>{const H=je(N)?{getBoundingClientRect:()=>N.getBoundingClientRect(),getClientRects:()=>N.getClientRects(),contextElement:N}:N;c(H),_.refs.setReference(H)},[_.refs]),T=A.useCallback(N=>{(je(N)||N===null)&&(y.current=N,d(N)),(je(_.refs.reference.current)||_.refs.reference.current===null||N!==null&&!je(N))&&_.refs.setReference(N)},[_.refs]),b=A.useMemo(()=>({..._.refs,setReference:T,setPositionReference:O,domReference:y}),[_.refs,T,O]),R=A.useMemo(()=>({..._.elements,domReference:h}),[_.elements,h]),j=A.useMemo(()=>({..._,...a,refs:b,elements:R,nodeId:i}),[_,b,R,i,a]);return dr(()=>{a.dataRef.current.floatingContext=j;const N=E?.nodesRef.current.find(H=>H.id===i);N&&(N.context=j)}),A.useMemo(()=>({..._,context:j,refs:b,elements:R}),[_,b,R,j])}function Zl(){return aE()&&rE()}function IE(e,i){i===void 0&&(i={});const{open:r,onOpenChange:a,events:l,dataRef:o,elements:d}=e,{enabled:m=!0,visibleOnly:c=!0}=i,v=A.useRef(!1),h=A.useRef(-1),y=A.useRef(!0);A.useEffect(()=>{if(!m)return;const _=cn(d.domReference);function O(){!r&&_n(d.domReference)&&d.domReference===Gd(Vt(d.domReference))&&(v.current=!0)}function T(){y.current=!0}function b(){y.current=!1}return _.addEventListener("blur",O),Zl()&&(_.addEventListener("keydown",T,!0),_.addEventListener("pointerdown",b,!0)),()=>{_.removeEventListener("blur",O),Zl()&&(_.removeEventListener("keydown",T,!0),_.removeEventListener("pointerdown",b,!0))}},[d.domReference,r,m]),A.useEffect(()=>{if(!m)return;function _(O){let{reason:T}=O;(T==="reference-press"||T==="escape-key")&&(v.current=!0)}return l.on("openchange",_),()=>{l.off("openchange",_)}},[l,m]),A.useEffect(()=>()=>{jn(h)},[]);const E=A.useMemo(()=>({onMouseLeave(){v.current=!1},onFocus(_){if(v.current)return;const O=ar(_.nativeEvent);if(c&&je(O)){if(Zl()&&!_.relatedTarget){if(!y.current&&!oE(O))return}else if(!uE(O))return}a(!0,_.nativeEvent,"focus")},onBlur(_){v.current=!1;const O=_.relatedTarget,T=_.nativeEvent,b=je(O)&&O.hasAttribute(Us("focus-guard"))&&O.getAttribute("data-type")==="outside";h.current=window.setTimeout(()=>{var R;const j=Gd(d.domReference?d.domReference.ownerDocument:document);!O&&j===d.domReference||Yr((R=o.current.floatingContext)==null?void 0:R.refs.floating.current,j)||Yr(d.domReference,j)||b||a(!1,T,"focus")})}}),[o,d.domReference,a,c]);return A.useMemo(()=>m?{reference:E}:{},[m,E])}function Ql(e,i,r){const a=new Map,l=r==="item";let o=e;if(l&&e){const{[Ud]:d,[$d]:m,...c}=e;o=c}return{...r==="floating"&&{tabIndex:-1,[fE]:""},...o,...i.map(d=>{const m=d?d[r]:null;return typeof m=="function"?e?m(e):null:m}).concat(e).reduce((d,m)=>(m&&Object.entries(m).forEach(c=>{let[v,h]=c;if(!(l&&[Ud,$d].includes(v)))if(v.indexOf("on")===0){if(a.has(v)||a.set(v,[]),typeof h=="function"){var y;(y=a.get(v))==null||y.push(h),d[v]=function(){for(var E,_=arguments.length,O=new Array(_),T=0;T<_;T++)O[T]=arguments[T];return(E=a.get(v))==null?void 0:E.map(b=>b(...O)).find(b=>b!==void 0)}}}else d[v]=h}),d),{})}}function OE(e){e===void 0&&(e=[]);const i=e.map(m=>m?.reference),r=e.map(m=>m?.floating),a=e.map(m=>m?.item),l=A.useCallback(m=>Ql(m,e,"reference"),i),o=A.useCallback(m=>Ql(m,e,"floating"),r),d=A.useCallback(m=>Ql(m,e,"item"),a);return A.useMemo(()=>({getReferenceProps:l,getFloatingProps:o,getItemProps:d}),[l,o,d])}function jE(e,i,r){r===void 0&&(r=!0);let a=e.filter(o=>{var d;return o.parentId===i&&((d=o.context)==null?void 0:d.open)}),l=a;for(;l.length;)l=r?e.filter(o=>{var d;return(d=l)==null?void 0:d.some(m=>{var c;return o.parentId===m.id&&((c=o.context)==null?void 0:c.open)})}):e,a=a.concat(l);return a}function Jd(e,i){const[r,a]=e;let l=!1;const o=i.length;for(let d=0,m=o-1;d<o;m=d++){const[c,v]=i[d]||[0,0],[h,y]=i[m]||[0,0];v>=a!=y>=a&&r<=(h-c)*(a-v)/(y-v)+c&&(l=!l)}return l}function BE(e,i){return e[0]>=i.x&&e[0]<=i.x+i.width&&e[1]>=i.y&&e[1]<=i.y+i.height}function xE(e){e===void 0&&(e={});const{buffer:i=.5,blockPointerEvents:r=!1,requireIntent:a=!0}=e;let l,o=!1,d=null,m=null,c=performance.now();function v(y,E){const _=performance.now(),O=_-c;if(d===null||m===null||O===0)return d=y,m=E,c=_,null;const T=y-d,b=E-m,j=Math.sqrt(T*T+b*b)/O;return d=y,m=E,c=_,j}const h=y=>{let{x:E,y:_,placement:O,elements:T,onClose:b,nodeId:R,tree:j}=y;return function(H){function I(){clearTimeout(l),b()}if(clearTimeout(l),!T.domReference||!T.floating||O==null||E==null||_==null)return;const{clientX:C,clientY:x}=H,q=[C,x],z=wE(H),Q=H.type==="mouseleave",J=Jl(T.floating,z),Z=Jl(T.domReference,z),K=T.domReference.getBoundingClientRect(),D=T.floating.getBoundingClientRect(),X=O.split("-")[0],te=E>D.right-D.width/2,W=_>D.bottom-D.height/2,G=BE(q,K),Y=D.width>K.width,ae=D.height>K.height,ne=(Y?K:D).left,se=(Y?K:D).right,pe=(ae?K:D).top,fn=(ae?K:D).bottom;if(J&&(o=!0,!Q))return;if(Z&&(o=!1),Z&&!Q){o=!0;return}if(Q&&je(H.relatedTarget)&&Jl(T.floating,H.relatedTarget)||j&&jE(j.nodesRef.current,R).some(Le=>{let{context:ke}=Le;return ke?.open}))return;if(X==="top"&&_>=K.bottom-1||X==="bottom"&&_<=K.top+1||X==="left"&&E>=K.right-1||X==="right"&&E<=K.left+1)return I();let Me=[];switch(X){case"top":Me=[[ne,K.top+1],[ne,D.bottom-1],[se,D.bottom-1],[se,K.top+1]];break;case"bottom":Me=[[ne,D.top+1],[ne,K.bottom-1],[se,K.bottom-1],[se,D.top+1]];break;case"left":Me=[[D.right-1,fn],[D.right-1,pe],[K.left+1,pe],[K.left+1,fn]];break;case"right":Me=[[K.right-1,fn],[K.right-1,pe],[D.left+1,pe],[D.left+1,fn]];break}function qe(Le){let[ke,we]=Le;switch(X){case"top":{const Je=[Y?ke+i/2:te?ke+i*4:ke-i*4,we+i+1],Ce=[Y?ke-i/2:te?ke+i*4:ke-i*4,we+i+1],Ge=[[D.left,te||Y?D.bottom-i:D.top],[D.right,te?Y?D.bottom-i:D.top:D.bottom-i]];return[Je,Ce,...Ge]}case"bottom":{const Je=[Y?ke+i/2:te?ke+i*4:ke-i*4,we-i],Ce=[Y?ke-i/2:te?ke+i*4:ke-i*4,we-i],Ge=[[D.left,te||Y?D.top+i:D.bottom],[D.right,te?Y?D.top+i:D.bottom:D.top+i]];return[Je,Ce,...Ge]}case"left":{const Je=[ke+i+1,ae?we+i/2:W?we+i*4:we-i*4],Ce=[ke+i+1,ae?we-i/2:W?we+i*4:we-i*4];return[...[[W||ae?D.right-i:D.left,D.top],[W?ae?D.right-i:D.left:D.right-i,D.bottom]],Je,Ce]}case"right":{const Je=[ke-i,ae?we+i/2:W?we+i*4:we-i*4],Ce=[ke-i,ae?we-i/2:W?we+i*4:we-i*4],Ge=[[W||ae?D.left+i:D.right,D.top],[W?ae?D.left+i:D.right:D.left+i,D.bottom]];return[Je,Ce,...Ge]}}}if(!Jd([C,x],Me)){if(o&&!G)return I();if(!Q&&a){const Le=v(H.clientX,H.clientY);if(Le!==null&&Le<.1)return I()}Jd([C,x],qe([E,_]))?!o&&a&&(l=window.setTimeout(I,40)):I()}}};return h.__options={blockPointerEvents:r},h}var qE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const DE=A.forwardRef((e,i)=>{var{className:r,header:a,children:l,open:o,defaultOpen:d=!1,onClick:m,size:c="medium",onOpenChange:v}=e,h=qE(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:y}=Pe(),[E,_]=Fs({defaultValue:d,value:o,onChange:v}),O=c==="small"?"small":"medium";return U.createElement("div",{className:y("navds-read-more",`navds-read-more--${c}`,r,{"navds-read-more--open":E}),"data-volume":"low"},U.createElement("button",Object.assign({},h,{ref:i,type:"button",className:y("navds-read-more__button","navds-body-short",{"navds-body-short--small":c==="small"}),onClick:gi(m,()=>_(T=>!T)),"aria-expanded":E,"data-state":E?"open":"closed"}),U.createElement(Zm,{className:y("navds-read-more__expand-icon"),"aria-hidden":!0}),U.createElement("span",null,a)),U.createElement(ri,{as:"div","aria-hidden":!E,className:y("navds-read-more__content",{"navds-read-more__content--closed":!E}),size:O,"data-state":E?"open":"closed"},l))}),FE=A.createContext(null),VE=(e,i)=>{var r,a,l;const{size:o,error:d,errorId:m}=e,c=A.useContext(FE),v=mi(),h=(r=e.id)!==null&&r!==void 0?r:`${i}-${v}`,y=m??`${i}-error-${v}`,E=`${i}-description-${v}`,_=c?.disabled||e.disabled,O=(c?.readOnly||e.readOnly)&&!_||void 0,T=!_&&!O&&!!(d||c?.error),b=!_&&!O&&!!d&&typeof d!="boolean",R=Object.assign({},T?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:b,hasError:T,errorId:y,inputDescriptionId:E,size:(a=o??c?.size)!==null&&a!==void 0?a:"medium",readOnly:O,inputProps:Object.assign(Object.assign({id:h},R),{"aria-describedby":Gm(e["aria-describedby"],{[E]:e.description&&!vs(e.description),[y]:b,[(l=c?.errorId)!==null&&l!==void 0?l:""]:T&&c?.error})||void 0,disabled:_})}};function vs(e,i=!0){if(U.isValidElement(e)){if(e.type===DE)return!0;if(e.props.children&&i)return vs(e.props.children,!1)}else if(Array.isArray(e))return e.some(r=>vs(r,i));return!1}function Xe(e,i,r,a){return a?typeof a=="string"?{[`--__${e}c-${i}-${r}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([l,o])=>[`--__${e}c-${i}-${r}-${l}`,o])):{}}const KE={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Zd=(e,i,r,a,l,o)=>i.split(" ").map((d,m,c)=>{var v;if(e==="margin-inline"&&d==="full")return`calc((100vw - ${100/c.length}%)/-2)`;if(e==="padding-inline"&&d==="full")return`calc((100vw - ${100/c.length}%)/2)`;if(["mi","mb"].includes(e)&&d==="auto")return"auto";let h=`var(--${o}-${r}-${d})`;if(a.includes(d))h=d==="px"?"1px":d;else if(d.startsWith("space"))h=`var(--${o}-${d})`;else{const y=`--${o}-spacing-${d}`;h=`var(${(v=KE[y])!==null&&v!==void 0?v:y})`}return l?d==="0"?"0":`calc(-1 * ${h})`:h}).join(" ");function En(e,i,r,a,l,o=!1,d=[]){if(!l)return{};if(typeof l=="string")return{[`--__${e}c-${i}-${r}-xs`]:Zd(r,l,a,d,o,e)};const m={};return Object.entries(l).forEach(([c,v])=>{m[`--__${e}c-${i}-${r}-${c}`]=Zd(r,v,a,d,o,e)}),m}const fg=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],vg=({children:e,className:i,padding:r,paddingInline:a,paddingBlock:l,margin:o,marginInline:d,marginBlock:m,width:c,minWidth:v,maxWidth:h,height:y,minHeight:E,maxHeight:_,position:O,inset:T,top:b,right:R,left:j,bottom:N,overflow:H,overflowX:I,overflowY:C,flexBasis:x,flexGrow:q,flexShrink:z,gridColumn:Q})=>{const J=gr(!1),{cn:Z}=Pe(),K=J?"ax":"a",D=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},En(K,"r","p","spacing",r)),En(K,"r","pi","spacing",a)),En(K,"r","pb","spacing",l)),En(K,"r","m","spacing",o)),En(K,"r","mi","spacing",d)),En(K,"r","mb","spacing",m)),Xe(K,"r","w",c)),Xe(K,"r","minw",v)),Xe(K,"r","maxw",h)),Xe(K,"r","h",y)),Xe(K,"r","minh",E)),Xe(K,"r","maxh",_)),Xe(K,"r","position",O)),En(K,"r","inset","spacing",T)),En(K,"r","top","spacing",b)),En(K,"r","right","spacing",R)),En(K,"r","bottom","spacing",N)),En(K,"r","left","spacing",j)),Xe(K,"r","overflow",H)),Xe(K,"r","overflowx",I)),Xe(K,"r","overflowy",C)),Xe(K,"r","flex-basis",x)),Xe(K,"r","flex-grow",q)),Xe(K,"r","flex-shrink",z)),Xe(K,"r","grid-column",Q));return U.createElement(zr,{className:Z({className:i,"navds-r-p":r,"navds-r-pi":a,"navds-r-pb":l,"navds-r-m":o,"navds-r-mi":d,"navds-r-mb":m,"navds-r-w":c,"navds-r-minw":v,"navds-r-maxw":h,"navds-r-h":y,"navds-r-minh":E,"navds-r-maxh":_,"navds-r-position":O,"navds-r-inset":T,"navds-r-top":b,"navds-r-right":R,"navds-r-bottom":N,"navds-r-left":j,"navds-r-overflow":H,"navds-r-overflowx":I,"navds-r-overflowy":C,"navds-r-flex-basis":x,"navds-r-flex-grow":q,"navds-r-flex-shrink":z,"navds-r-grid-column":Q}),style:D},e)};var ME=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const LE=A.forwardRef((e,i)=>{var{children:r,className:a,as:l="div",columns:o,gap:d,style:m,align:c,asChild:v}=e,h=ME(e,["children","className","as","columns","gap","style","align","asChild"]);const E=gr(!1)?"ax":"a",{cn:_}=Pe(),O=Object.assign(Object.assign(Object.assign(Object.assign({},m),{[`--__${E}c-hgrid-align`]:c}),En(E,"hgrid","gap","spacing",d)),Xe(E,"hgrid","columns",CE(o))),T=v?zr:l;return U.createElement(vg,Object.assign({},h),U.createElement(T,Object.assign({},Xr(h,fg),{ref:i,className:_("navds-hgrid",a,{"navds-hgrid-gap":d,"navds-hgrid-align":c}),style:O}),r))});function CE(e){return e?typeof e=="string"||typeof e=="number"?Qd(e):Object.fromEntries(Object.entries(e).map(([i,r])=>[i,Qd(r)])):{}}const Qd=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var HE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const pg=A.forwardRef((e,i)=>{var{children:r,className:a,as:l="div",align:o,justify:d,wrap:m=!0,gap:c,style:v,direction:h="row",asChild:y}=e,E=HE(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const O=gr(!1)?"ax":"a",{cn:T}=Pe(),b=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},v),En(O,"stack","gap","spacing",c)),Xe(O,"stack","direction",h)),Xe(O,"stack","align",o)),Xe(O,"stack","justify",d)),R=y?zr:l;return U.createElement(vg,Object.assign({},E),U.createElement(R,Object.assign({},Xr(E,fg),{ref:i,style:b,className:T("navds-stack",a,{"navds-vstack":h==="column","navds-hstack":h==="row","navds-stack-gap":c,"navds-stack-align":o,"navds-stack-justify":d,"navds-stack-direction":h,"navds-stack-wrap":m})}),r))});var GE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const lr=A.forwardRef((e,i)=>{var{as:r="div"}=e,a=GE(e,["as"]);return U.createElement(pg,Object.assign({as:r},a,{ref:i,direction:"row"}))});var UE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const ki=A.forwardRef((e,i)=>{var{as:r="div"}=e,a=UE(e,["as"]);return U.createElement(pg,Object.assign({as:r},a,{ref:i,direction:"column",wrap:!1}))}),ni=A.createContext({listType:"ul",size:"medium"});var $E=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const hg=A.forwardRef((e,i)=>{var{className:r,children:a,title:l,icon:o}=e,d=$E(e,["className","children","title","icon"]);const{listType:m,size:c}=A.useContext(ni),{cn:v}=Pe();return m==="ol"&&o&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),U.createElement("li",Object.assign({},d,{ref:i,className:v("navds-list__item",r)}),m==="ul"&&U.createElement("div",{className:v("navds-list__item-marker",{"navds-list__item-marker--icon":o,"navds-list__item-marker--bullet":!o})},o||U.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},U.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),U.createElement("div",null,l&&U.createElement(ri,{as:"p",size:c,weight:"semibold"},l),a))});hg.displayName="List.Item";var YE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const WE={small:"xsmall",medium:"small",large:"medium"},ps=A.forwardRef((e,i)=>{var{children:r,className:a,as:l="ul",title:o,description:d,headingTag:m,size:c,"aria-label":v,"aria-labelledby":h}=e,y=YE(e,["children","className","as","title","description","headingTag","size","aria-label","aria-labelledby"]);const{size:E}=A.useContext(ni),{cn:_}=Pe(),O=gr(!1),T=c??E;return O?U.createElement(ni.Provider,{value:{listType:l,size:T}},U.createElement(ri,Object.assign({as:"div"},y,{size:T,ref:i,className:_("navds-list",`navds-list--${T}`,a)}),U.createElement(l,{role:"list","aria-label":v,"aria-labelledby":h},r))):U.createElement(ni.Provider,{value:{listType:l,size:T}},U.createElement(ri,Object.assign({as:"div"},y,{size:T,ref:i,className:_("navds-list",`navds-list--${T}`,a)}),o&&U.createElement(Jm,{size:WE[T],as:m??"h3"},o),d&&U.createElement(di,{size:T},d),U.createElement(l,{role:"list","aria-label":v,"aria-labelledby":h},r)))});ps.Item=hg;var zE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const XE=A.forwardRef((e,i)=>{var{className:r}=e,a=zE(e,["className"]);const{cn:l}=Pe();return U.createElement("tbody",Object.assign({},a,{ref:i,className:l("navds-table__body",r)}))});var JE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const kg=A.forwardRef((e,i)=>{var{className:r,children:a,align:l,textSize:o}=e,d=JE(e,["className","children","align","textSize"]);const{cn:m}=Pe();return U.createElement("th",Object.assign({ref:i,className:m("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${l}`]:l,"navds-label--small":o==="small"})},d),a)}),yg=A.createContext(null);var ZE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const QE=A.forwardRef((e,i)=>{var r,a,l,o,{className:d,children:m,sortable:c=!1,sortKey:v}=e,h=ZE(e,["className","children","sortable","sortKey"]);const y=A.useContext(yg),{cn:E}=Pe();return c&&!v&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),U.createElement(kg,Object.assign({scope:"col",ref:i,className:E(d),"aria-sort":c?((r=y?.sort)===null||r===void 0?void 0:r.orderBy)===v?(a=y?.sort)===null||a===void 0?void 0:a.direction:"none":void 0},h),c?U.createElement("button",{type:"button",className:E("navds-table__sort-button"),onClick:c&&v?()=>{var _;return(_=y?.onSortChange)===null||_===void 0?void 0:_.call(y,v)}:void 0},m,((l=y?.sort)===null||l===void 0?void 0:l.orderBy)===v?((o=y?.sort)===null||o===void 0?void 0:o.direction)==="descending"?U.createElement(yb,{"aria-hidden":!0}):U.createElement(Eb,{"aria-hidden":!0}):U.createElement(gb,{"aria-hidden":!0})):m)});var e_=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const bg=A.forwardRef((e,i)=>{var{className:r,children:a="",align:l,textSize:o}=e,d=e_(e,["className","children","align","textSize"]);const{cn:m}=Pe();return U.createElement(di,Object.assign({as:"td",ref:i,className:m("navds-table__data-cell",r,{[`navds-table__data-cell--align-${l}`]:l}),size:o},d),a)});var n_=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const t_=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function r_(e){const i=parseFloat(e);return!Number.isNaN(i)&&Number.isFinite(i)}function em(e){return typeof e=="string"&&e[e.length-1]==="%"&&r_(e.substring(0,e.length-1))}function es(e,i){i===0&&e?.style&&(e.style.display="none")}function a_(e,i){i===0&&e?.style&&(e.style.display="")}const i_=e=>{var{children:i,className:r,innerClassName:a,duration:l=250,easing:o="ease",height:d}=e,m=n_(e,["children","className","innerClassName","duration","easing","height"]);const{cn:c}=Pe(),v=A.useRef(d),h=A.useRef(null),y=A.useRef(),E=A.useRef(),_=A.useRef(d),O=A.useRef("visible"),T=t_?0:l;typeof _.current=="number"?(typeof d!="string"&&(_.current=d<0?0:d),O.current="hidden"):em(_.current)&&(_.current=d==="0%"?0:d,O.current="hidden");const[b,R]=A.useState(_.current),[j,N]=A.useState(O.current),[H,I]=A.useState(!1);A.useEffect(()=>{es(h.current,_.current)},[]),A.useEffect(()=>{if(d!==v.current&&h.current){a_(h.current,v.current),h.current.style.overflow="hidden";const z=h.current.offsetHeight;h.current.style.overflow="";const Q=T;let J,Z,K="hidden",D;const X=v.current==="auto";typeof d=="number"?(J=d<0?0:d,Z=J):em(d)?(J=d==="0%"?0:d,Z=J):(J=z,Z="auto",K=void 0),X&&(Z=J,J=z),R(J),N("hidden"),I(!X),clearTimeout(E.current),clearTimeout(y.current),X?(D=!0,E.current=setTimeout(()=>{R(Z),N(K),I(D)},50),y.current=setTimeout(()=>{I(!1),es(h.current,Z)},Q)):E.current=setTimeout(()=>{R(Z),N(K),I(!1),d!=="auto"&&es(h.current,J)},Q)}return v.current=d,()=>{clearTimeout(E.current),clearTimeout(y.current)}},[d]);const C={height:b,overflow:j};H&&(C.transition=`height ${T}ms ${o} 0ms`,C.WebkitTransition=C.transition);const q=typeof m["aria-hidden"]<"u"?m["aria-hidden"]:d===0;return U.createElement("div",Object.assign({},m,{className:c(r),style:C}),U.createElement("div",{"aria-hidden":q,className:c(a),ref:h},i))};var l_=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Eg=A.forwardRef((e,i)=>{var{className:r,selected:a=!1,shadeOnHover:l=!0}=e,o=l_(e,["className","selected","shadeOnHover"]);const{cn:d}=Pe();return U.createElement("tr",Object.assign({},o,{ref:i,className:d("navds-table__row",r,{"navds-table__row--selected":a,"navds-table__row--shade-on-hover":l})}))});var s_=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const o_=A.forwardRef((e,i)=>{var{className:r,children:a,content:l,togglePlacement:o="left",defaultOpen:d=!1,open:m,onOpenChange:c,expansionDisabled:v=!1,expandOnRowClick:h=!1,colSpan:y=999,contentGutter:E,onClick:_}=e,O=s_(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:T}=Pe(),[b,R]=Fs({defaultValue:d,value:m,onChange:c}),j=hi("global"),N=mi(),H=C=>{R(x=>!x),C.stopPropagation()},I=C=>{h&&!v&&!_g(C.target)&&H(C)};return U.createElement(U.Fragment,null,U.createElement(Eg,Object.assign({},O,{ref:i,className:T("navds-table__expandable-row",r,{"navds-table__expandable-row--open":b,"navds-table__expandable-row--expansion-disabled":v,"navds-table__expandable-row--clickable":h}),onClick:gi(_,I)}),o==="right"&&a,U.createElement(bg,{className:T("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":b}),onClick:v?()=>null:H},!v&&U.createElement("button",{className:T("navds-table__toggle-expand-button"),type:"button","aria-controls":N,"aria-expanded":b,onClick:H},U.createElement(Zm,{className:T("navds-table__expandable-icon"),title:j(b?"showLess":"showMore")}))),o==="left"&&a),U.createElement("tr",{"data-state":b?"open":"closed",className:T("navds-table__expanded-row"),"aria-hidden":!b,id:N},U.createElement("td",{colSpan:y,className:T("navds-table__expanded-row-cell")},U.createElement(i_,{className:T("navds-table__expanded-row-collapse"),innerClassName:T(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${E??o}`),height:b?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},l))))});function _g(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:_g(e.parentElement)}var u_=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const d_=A.forwardRef((e,i)=>{var{className:r}=e,a=u_(e,["className"]);const{cn:l}=Pe();return U.createElement("thead",Object.assign({},a,{ref:i,className:l("navds-table__header",r)}))});var m_=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Ke=A.forwardRef((e,i)=>{var{className:r,zebraStripes:a=!1,size:l="medium",onSortChange:o,sort:d,stickyHeader:m=!1}=e,c=m_(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:v}=Pe();return U.createElement(yg.Provider,{value:{onSortChange:o,sort:d}},U.createElement("table",Object.assign({},c,{ref:i,className:v("navds-table",`navds-table--${l}`,r,{"navds-table--zebra-stripes":a,"navds-table--sticky-header":m})})))});Ke.Header=d_;Ke.Body=XE;Ke.Row=Eg;Ke.ColumnHeader=QE;Ke.HeaderCell=kg;Ke.DataCell=bg;Ke.ExpandableRow=o_;var g_=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const c_=A.forwardRef((e,i)=>{var{children:r,className:a,arrow:l=!0,placement:o="top",open:d,defaultOpen:m=!1,onOpenChange:c,offset:v,content:h,delay:y=150,id:E,keys:_,maxChar:O=80,describesChild:T=!1}=e,b=g_(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:R}=Pe(),[j,N]=Fs({defaultValue:m,value:d,onChange:c}),H=A.useRef(null),I=Tb(!1),C=I?I.ref.current:void 0,{x,y:q,strategy:z,context:Q,placement:J,middlewareData:{arrow:{x:Z,y:K}={},hide:{referenceHidden:D}={}},refs:X}=PE({placement:o,open:j,onOpenChange:ne=>N(ne),middleware:[C1(v??(l?8:4)),H1(),G1({padding:5,fallbackPlacements:["bottom","top"]}),U1({element:H,padding:5})],whileElementsMounted:I?(ne,se,pe)=>Md(ne,se,pe,{animationFrame:!0}):Md,strategy:I?"fixed":void 0}),{getReferenceProps:te,getFloatingProps:W}=OE([TE(Q,{handleClose:xE(),restMs:y}),IE(Q),SE(Q)]),G=mi(E),Y=$m(i,X.setFloating);if(!r||r?.type===U.Fragment||r===U.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;h?.length>O&&j&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${h.length}
Tooltip-content: ${h}`);const ae=T?j?{"aria-describedby":G}:{title:h}:{"aria-label":h};return U.createElement(U.Fragment,null,U.createElement(zr,Object.assign({ref:X.setReference},te(),ae,{"aria-keyshortcuts":_?_.join("+"):void 0}),r),U.createElement(i1,{rootElement:C,asChild:!0},j&&U.createElement("div",Object.assign({},W(Object.assign(Object.assign({},b),{ref:Y,style:{position:z,top:q??0,left:x??0,visibility:D?"hidden":"visible"},role:"tooltip",id:G,className:R("navds-tooltip","navds-detail navds-detail--small",a)})),{"data-side":J,"data-state":"open"}),h,_&&U.createElement("span",{className:R("navds-tooltip__keys"),"aria-hidden":!0},_.map(ne=>U.createElement(nb,{as:"kbd",key:ne,className:R("navds-tooltip__key")},ne))),l&&U.createElement("div",{ref:ne=>{H.current=ne},className:R("navds-tooltip__arrow"),style:{left:Z!=null?`${Z}px`:"",top:K!=null?`${K}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[J]]:"-3.5px"}}))))}),Tg=A.createContext(null);var f_=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const wg=A.forwardRef((e,i)=>{var r,{className:a,children:l,disabled:o,onClick:d}=e,m=f_(e,["className","children","disabled","onClick"]);const{cn:c}=Pe(),v=hi("Search"),h=A.useContext(Tg);if(h===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:y,variant:E,handleClick:_}=h;return U.createElement(Hs,Object.assign({type:"submit"},m,{ref:i,size:y,variant:E==="secondary"?"secondary":"primary",className:c("navds-search__button-search",a),disabled:(r=h?.disabled)!==null&&r!==void 0?r:o,onClick:gi(d,_),icon:U.createElement(Qm,Object.assign({},l?{"aria-hidden":!0}:{title:v("search")}))}),l)});var v_=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const hs=A.forwardRef((e,i)=>{const{inputProps:r,size:a="medium",inputDescriptionId:l,errorId:o,showErrorMsg:d,hasError:m}=VE(e,"searchfield"),{className:c,hideLabel:v=!0,label:h,description:y,value:E,clearButtonLabel:_,onClear:O,clearButton:T=!0,children:b,variant:R="primary",defaultValue:j,onChange:N,onSearchClick:H,htmlSize:I,"data-color":C}=e,x=v_(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize","data-color"]),{cn:q}=Pe(),z=A.useRef(null),Q=$m(z,i),[J,Z]=A.useState(j??""),K=W=>{E===void 0&&Z(W),N?.(W)},D=W=>{var G,Y;O?.(W),K(""),(Y=(G=z.current)===null||G===void 0?void 0:G.focus)===null||Y===void 0||Y.call(G)},X=()=>{H?.(`${E??J}`)},te=T&&!r.disabled&&(E??J);return U.createElement("div",{onKeyDown:W=>{var G;W.key==="Escape"&&(!((G=z.current)===null||G===void 0)&&G.value&&W.preventDefault(),D({trigger:"Escape",event:W}))},className:q(c,"navds-form-field",`navds-form-field--${a}`,"navds-search",{"navds-search--error":m,"navds-search--disabled":r.disabled,"navds-search--with-size":I}),"data-color":C},U.createElement(Ds,{htmlFor:r.id,size:a,className:q("navds-form-field__label",{"navds-sr-only":v})},h),!!y&&U.createElement(di,{className:q("navds-form-field__description",{"navds-sr-only":v}),id:l,size:a,as:"div"},y),U.createElement("div",{className:q("navds-search__wrapper")},U.createElement("div",{className:q("navds-search__wrapper-inner")},R==="simple"&&U.createElement(Qm,{"aria-hidden":!0,className:q("navds-search__search-icon")}),U.createElement("input",Object.assign({ref:Q},Xr(x,["error","errorId","size","readOnly"]),r,{value:E??J,onChange:W=>K(W.target.value),type:"search",className:q(c,"navds-search__input",`navds-search__input--${R}`,"navds-text-field__input","navds-body-short",`navds-body-short--${a}`)},I?{size:Number(I)}:{})),te&&U.createElement(p_,{handleClear:D,size:a,clearButtonLabel:_})),U.createElement(Tg.Provider,{value:{size:a,disabled:r.disabled,variant:R,handleClick:X}},b||R!=="simple"&&U.createElement(wg,{"data-color":C}))),U.createElement("div",{className:q("navds-form-field__error"),id:o,"aria-relevant":"additions removals","aria-live":"polite"},d&&U.createElement(rb,{size:a,showIcon:!0},e.error)))});function p_({size:e,clearButtonLabel:i,handleClear:r}){const{cn:a}=Pe(),l=gr(!1),o=hi("Search");return l?U.createElement(Hs,{className:a("navds-search__button-clear"),variant:"tertiary","data-color":"neutral",size:e==="medium"?"small":"xsmall",icon:U.createElement(Dd,{"aria-hidden":!0}),title:i||o("clear"),onClick:d=>r({trigger:"Click",event:d}),type:"button"}):U.createElement("button",{type:"button",onClick:d=>r({trigger:"Click",event:d}),className:a("navds-search__button-clear")},U.createElement("span",{className:a("navds-sr-only")},i||o("clear")),U.createElement(Dd,{"aria-hidden":!0}))}hs.Button=wg;function h_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nm={exports:{}},Vr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function k_(){if(tm)return Vr;tm=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,l,o){var d=null;if(o!==void 0&&(d=""+o),l.key!==void 0&&(d=""+l.key),"key"in l){o={};for(var m in l)m!=="key"&&(o[m]=l[m])}else o=l;return l=o.ref,{$$typeof:e,type:a,key:d,ref:l!==void 0?l:null,props:o}}return Vr.Fragment=i,Vr.jsx=r,Vr.jsxs=r,Vr}var rm;function y_(){return rm||(rm=1,nm.exports=k_()),nm.exports}var Rt=y_();const ea={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};Mn(ea);var am={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var im;function b_(){return im||(im=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",d=0;d<arguments.length;d++){var m=arguments[d];m&&(o=l(o,a.call(this,m)))}return o}function a(o){if(typeof o=="string"||typeof o=="number")return this&&this[o]||o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(this,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var m in o)i.call(o,m)&&o[m]&&(d=l(d,this&&this[m]||m));return d}function l(o,d){return d?o?o+" "+d:o+d:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(am)),am.exports}var E_=b_();const $s=h_(E_),__="_borderbox_1a0x6_1",T_="_error_1a0x6_5",w_="_warning_1a0x6_8",A_={borderbox:__,error:T_,warning:w_};$s.bind(A_);const R_="_aksjonspunkt_11wjs_1",S_="_erAksjonspunktApent_11wjs_4",N_="_erIkkeGodkjentAvBeslutter_11wjs_8",P_={aksjonspunkt:R_,erAksjonspunktApent:S_,erIkkeGodkjentAvBeslutter:N_};$s.bind(P_);const Wr=({dateString:e,year:i,month:r,day:a})=>Rt.jsx(Rt.Fragment,{children:Ym(e,{year:i,month:r,day:a})}),ui=({dateTimeString:e,...i})=>Rt.jsx(Rt.Fragment,{children:Gy(e,i)});Mn(ea);Mn(ea);const I_="_divider_1jpov_1",O_="_dividerParagraf_1jpov_8",j_="_leftPanel_1jpov_11",B_="_rightPanel_1jpov_14",x_={divider:I_,dividerParagraf:O_,leftPanel:j_,rightPanel:B_};$s.bind(x_);Mn(ea);const q_=Mn(ea),D_=({tekst:e,children:i})=>{const[r,a]=A.useState(!1);if(!e)return i;const l=async()=>{await navigator.clipboard.writeText(e),a(!0),setTimeout(()=>{a(!1)},1e3)};return Rt.jsx(c_,{content:q_.formatMessage({id:r?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:Rt.jsx("span",{"aria-hidden":"true",onClick:l,children:i??e})})},lm={default:"_default_af3od_1",rød:"_rød_af3od_5"},sr=({beløp:e,kr:i=!1,rød:r=!1})=>{const a=e?.toString().replace(/\s/g,"");return Rt.jsx(D_,{tekst:a,children:Rt.jsxs("span",{className:r?lm.rød:lm.default,children:[a?Uy(a):"-",a&&i&&" kr"]})})},Xn=({tittel:e,children:i})=>V.jsxs(ki,{gap:"space-4",children:[V.jsx(Ds,{size:"medium",children:e}),i]});Xn.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Ag=({arbeidsgiverOpplysninger:e,arbeidsgiverIdent:i})=>{const r=ft();return V.jsxs(Xn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[V.jsxs("span",{children:[V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),": ",e.navn]}),V.jsxs("span",{children:[V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",i]})]})};Ag.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysninger:{required:!0,tsType:{name:"union",raw:`| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const Rg=({inntektsmelding:e,behandling:i,alleBehandlinger:r,alleKodeverk:a})=>{const l=ft(),o=e.tilknyttedeBehandlingIder.includes(i.uuid),d=r.filter(v=>e.tilknyttedeBehandlingIder.includes(v.uuid)),m=(()=>{const v=d.length;return o&&v>1?V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):o?V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):v===0?V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),c=[...d].sort((v,h)=>new Date(v.opprettet).getTime()-new Date(h.opprettet).getTime());return V.jsxs(Xn,{tittel:l.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[m,V.jsx(ps,{children:c.map(v=>V.jsx(ps.Item,{children:V.jsxs(ki,{gap:"space-4",children:[V.jsx("span",{children:a.BehandlingType.find(({kode:h})=>h===v.type)?.navn}),V.jsxs("span",{children:[V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",V.jsx(ui,{dateTimeString:v.opprettet,separator:"kl"})]}),v.avsluttet?V.jsxs("span",{children:[V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",V.jsx(ui,{dateTimeString:v.avsluttet,separator:"kl"})]}):null]})},v.uuid))})]})};Rg.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktDefinisjon;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: AksjonspunktType;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktDefinisjon;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: AksjonspunktType;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};function F_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sm={exports:{}},Kr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function V_(){if(om)return Kr;om=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,l,o){var d=null;if(o!==void 0&&(d=""+o),l.key!==void 0&&(d=""+l.key),"key"in l){o={};for(var m in l)m!=="key"&&(o[m]=l[m])}else o=l;return l=o.ref,{$$typeof:e,type:a,key:d,ref:l!==void 0?l:null,props:o}}return Kr.Fragment=i,Kr.jsx=r,Kr.jsxs=r,Kr}var um;function K_(){return um||(um=1,sm.exports=V_()),sm.exports}K_();var ks={exports:{}},M_=ks.exports,dm;function L_(){return dm||(dm=1,function(e,i){(function(r,a){e.exports=a()})(M_,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,l=/\d/,o=/\d\d/,d=/\d\d?/,m=/\d*[^-_:/,()\s\d]+/,c={},v=function(b){return(b=+b)+(b>68?1900:2e3)},h=function(b){return function(R){this[b]=+R}},y=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(R){if(!R||R==="Z")return 0;var j=R.match(/([+-]|\d\d)/g),N=60*j[1]+(+j[2]||0);return N===0?0:j[0]==="+"?-N:N}(b)}],E=function(b){var R=c[b];return R&&(R.indexOf?R:R.s.concat(R.f))},_=function(b,R){var j,N=c.meridiem;if(N){for(var H=1;H<=24;H+=1)if(b.indexOf(N(H,0,R))>-1){j=H>12;break}}else j=b===(R?"pm":"PM");return j},O={A:[m,function(b){this.afternoon=_(b,!1)}],a:[m,function(b){this.afternoon=_(b,!0)}],Q:[l,function(b){this.month=3*(b-1)+1}],S:[l,function(b){this.milliseconds=100*+b}],SS:[o,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[d,h("seconds")],ss:[d,h("seconds")],m:[d,h("minutes")],mm:[d,h("minutes")],H:[d,h("hours")],h:[d,h("hours")],HH:[d,h("hours")],hh:[d,h("hours")],D:[d,h("day")],DD:[o,h("day")],Do:[m,function(b){var R=c.ordinal,j=b.match(/\d+/);if(this.day=j[0],R)for(var N=1;N<=31;N+=1)R(N).replace(/\[|\]/g,"")===b&&(this.day=N)}],w:[d,h("week")],ww:[o,h("week")],M:[d,h("month")],MM:[o,h("month")],MMM:[m,function(b){var R=E("months"),j=(E("monthsShort")||R.map(function(N){return N.slice(0,3)})).indexOf(b)+1;if(j<1)throw new Error;this.month=j%12||j}],MMMM:[m,function(b){var R=E("months").indexOf(b)+1;if(R<1)throw new Error;this.month=R%12||R}],Y:[/[+-]?\d+/,h("year")],YY:[o,function(b){this.year=v(b)}],YYYY:[/\d{4}/,h("year")],Z:y,ZZ:y};function T(b){var R,j;R=b,j=c&&c.formats;for(var N=(b=R.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Q,J,Z){var K=Z&&Z.toUpperCase();return J||j[Z]||r[Z]||j[K].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(D,X,te){return X||te.slice(1)})})).match(a),H=N.length,I=0;I<H;I+=1){var C=N[I],x=O[C],q=x&&x[0],z=x&&x[1];N[I]=z?{regex:q,parser:z}:C.replace(/^\[|\]$/g,"")}return function(Q){for(var J={},Z=0,K=0;Z<H;Z+=1){var D=N[Z];if(typeof D=="string")K+=D.length;else{var X=D.regex,te=D.parser,W=Q.slice(K),G=X.exec(W)[0];te.call(J,G),Q=Q.replace(G,"")}}return function(Y){var ae=Y.afternoon;if(ae!==void 0){var ne=Y.hours;ae?ne<12&&(Y.hours+=12):ne===12&&(Y.hours=0),delete Y.afternoon}}(J),J}}return function(b,R,j){j.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(v=b.parseTwoDigitYear);var N=R.prototype,H=N.parse;N.parse=function(I){var C=I.date,x=I.utc,q=I.args;this.$u=x;var z=q[1];if(typeof z=="string"){var Q=q[2]===!0,J=q[3]===!0,Z=Q||J,K=q[2];J&&(K=q[2]),c=this.$locale(),!Q&&K&&(c=j.Ls[K]),this.$d=function(W,G,Y,ae){try{if(["x","X"].indexOf(G)>-1)return new Date((G==="X"?1e3:1)*W);var ne=T(G)(W),se=ne.year,pe=ne.month,fn=ne.day,Me=ne.hours,qe=ne.minutes,Le=ne.seconds,ke=ne.milliseconds,we=ne.zone,Je=ne.week,Ce=new Date,Ge=fn||(se||pe?1:Ce.getDate()),Tn=se||Ce.getFullYear(),Fe=0;se&&!pe||(Fe=pe>0?pe-1:Ce.getMonth());var Ze,Qn=Me||0,Qe=qe||0,Cn=Le||0,et=ke||0;return we?new Date(Date.UTC(Tn,Fe,Ge,Qn,Qe,Cn,et+60*we.offset*1e3)):Y?new Date(Date.UTC(Tn,Fe,Ge,Qn,Qe,Cn,et)):(Ze=new Date(Tn,Fe,Ge,Qn,Qe,Cn,et),Je&&(Ze=ae(Ze).week(Je).toDate()),Ze)}catch{return new Date("")}}(C,z,x,j),this.init(),K&&K!==!0&&(this.$L=this.locale(K).$L),Z&&C!=this.format(z)&&(this.$d=new Date("")),c={}}else if(z instanceof Array)for(var D=z.length,X=1;X<=D;X+=1){q[1]=z[X-1];var te=j.apply(this,q);if(te.isValid()){this.$d=te.$d,this.$L=te.$L,this.init();break}X===D&&(this.$d=new Date(""))}else H.call(this,I)}}})}(ks)),ks.exports}var C_=L_();const H_=F_(C_);cr.extend(H_);const na={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET","FaktaKilde.Ukjent":"FRA UKJENT KILDE","FaktaKilde.SBH":"FRA SAKSBEHANDLER"};Mn(na);Mn(na);Mn(na);const G_=(e,i)=>{const r=new Date(e.tom??$r),a=new Date(i.tom??$r);if(r>a)return-1;if(r<a)return 1;if(e.fom&&!i.fom)return-1;if(!e.fom&&i.fom)return 1;if(e.fom&&i.fom){const l=new Date(e.fom),o=new Date(i.fom);if(l>o)return-1;if(l<o)return 1}return 0};var Hr={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var U_=Hr.exports,mm;function $_(){return mm||(mm=1,function(e,i){(function(){var r,a="4.17.21",l=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",d="Expected a function",m="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",v=500,h="__lodash_placeholder__",y=1,E=2,_=4,O=1,T=2,b=1,R=2,j=4,N=8,H=16,I=32,C=64,x=128,q=256,z=512,Q=30,J="...",Z=800,K=16,D=1,X=2,te=3,W=1/0,G=9007199254740991,Y=17976931348623157e292,ae=NaN,ne=4294967295,se=ne-1,pe=ne>>>1,fn=[["ary",x],["bind",b],["bindKey",R],["curry",N],["curryRight",H],["flip",z],["partial",I],["partialRight",C],["rearg",q]],Me="[object Arguments]",qe="[object Array]",Le="[object AsyncFunction]",ke="[object Boolean]",we="[object Date]",Je="[object DOMException]",Ce="[object Error]",Ge="[object Function]",Tn="[object GeneratorFunction]",Fe="[object Map]",Ze="[object Number]",Qn="[object Null]",Qe="[object Object]",Cn="[object Promise]",et="[object Proxy]",hr="[object RegExp]",qn="[object Set]",kr="[object String]",ia="[object Symbol]",lc="[object Undefined]",yr="[object WeakMap]",sc="[object WeakSet]",br="[object ArrayBuffer]",Ht="[object DataView]",_i="[object Float32Array]",Ti="[object Float64Array]",wi="[object Int8Array]",Ai="[object Int16Array]",Ri="[object Int32Array]",Si="[object Uint8Array]",Ni="[object Uint8ClampedArray]",Pi="[object Uint16Array]",Ii="[object Uint32Array]",oc=/\b__p \+= '';/g,uc=/\b(__p \+=) '' \+/g,dc=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Xs=/&(?:amp|lt|gt|quot|#39);/g,Js=/[&<>"']/g,mc=RegExp(Xs.source),gc=RegExp(Js.source),cc=/<%-([\s\S]+?)%>/g,fc=/<%([\s\S]+?)%>/g,Zs=/<%=([\s\S]+?)%>/g,vc=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pc=/^\w*$/,hc=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Oi=/[\\^$.*+?()[\]{}|]/g,kc=RegExp(Oi.source),ji=/^\s+/,yc=/\s/,bc=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ec=/\{\n\/\* \[wrapped with (.+)\] \*/,_c=/,? & /,Tc=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,wc=/[()=,{}\[\]\/\s]/,Ac=/\\(\\)?/g,Rc=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Qs=/\w*$/,Sc=/^[-+]0x[0-9a-f]+$/i,Nc=/^0b[01]+$/i,Pc=/^\[object .+?Constructor\]$/,Ic=/^0o[0-7]+$/i,Oc=/^(?:0|[1-9]\d*)$/,jc=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,la=/($^)/,Bc=/['\n\r\u2028\u2029\\]/g,sa="\\ud800-\\udfff",xc="\\u0300-\\u036f",qc="\\ufe20-\\ufe2f",Dc="\\u20d0-\\u20ff",eo=xc+qc+Dc,no="\\u2700-\\u27bf",to="a-z\\xdf-\\xf6\\xf8-\\xff",Fc="\\xac\\xb1\\xd7\\xf7",Vc="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Kc="\\u2000-\\u206f",Mc=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ro="A-Z\\xc0-\\xd6\\xd8-\\xde",ao="\\ufe0e\\ufe0f",io=Fc+Vc+Kc+Mc,Bi="['’]",Lc="["+sa+"]",lo="["+io+"]",oa="["+eo+"]",so="\\d+",Cc="["+no+"]",oo="["+to+"]",uo="[^"+sa+io+so+no+to+ro+"]",xi="\\ud83c[\\udffb-\\udfff]",Hc="(?:"+oa+"|"+xi+")",mo="[^"+sa+"]",qi="(?:\\ud83c[\\udde6-\\uddff]){2}",Di="[\\ud800-\\udbff][\\udc00-\\udfff]",Gt="["+ro+"]",go="\\u200d",co="(?:"+oo+"|"+uo+")",Gc="(?:"+Gt+"|"+uo+")",fo="(?:"+Bi+"(?:d|ll|m|re|s|t|ve))?",vo="(?:"+Bi+"(?:D|LL|M|RE|S|T|VE))?",po=Hc+"?",ho="["+ao+"]?",Uc="(?:"+go+"(?:"+[mo,qi,Di].join("|")+")"+ho+po+")*",$c="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Yc="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ko=ho+po+Uc,Wc="(?:"+[Cc,qi,Di].join("|")+")"+ko,zc="(?:"+[mo+oa+"?",oa,qi,Di,Lc].join("|")+")",Xc=RegExp(Bi,"g"),Jc=RegExp(oa,"g"),Fi=RegExp(xi+"(?="+xi+")|"+zc+ko,"g"),Zc=RegExp([Gt+"?"+oo+"+"+fo+"(?="+[lo,Gt,"$"].join("|")+")",Gc+"+"+vo+"(?="+[lo,Gt+co,"$"].join("|")+")",Gt+"?"+co+"+"+fo,Gt+"+"+vo,Yc,$c,so,Wc].join("|"),"g"),Qc=RegExp("["+go+sa+eo+ao+"]"),ef=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nf=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],tf=-1,Be={};Be[_i]=Be[Ti]=Be[wi]=Be[Ai]=Be[Ri]=Be[Si]=Be[Ni]=Be[Pi]=Be[Ii]=!0,Be[Me]=Be[qe]=Be[br]=Be[ke]=Be[Ht]=Be[we]=Be[Ce]=Be[Ge]=Be[Fe]=Be[Ze]=Be[Qe]=Be[hr]=Be[qn]=Be[kr]=Be[yr]=!1;var Oe={};Oe[Me]=Oe[qe]=Oe[br]=Oe[Ht]=Oe[ke]=Oe[we]=Oe[_i]=Oe[Ti]=Oe[wi]=Oe[Ai]=Oe[Ri]=Oe[Fe]=Oe[Ze]=Oe[Qe]=Oe[hr]=Oe[qn]=Oe[kr]=Oe[ia]=Oe[Si]=Oe[Ni]=Oe[Pi]=Oe[Ii]=!0,Oe[Ce]=Oe[Ge]=Oe[yr]=!1;var rf={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},af={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},lf={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},sf={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},of=parseFloat,uf=parseInt,yo=typeof Wa=="object"&&Wa&&Wa.Object===Object&&Wa,df=typeof self=="object"&&self&&self.Object===Object&&self,en=yo||df||Function("return this")(),Vi=i&&!i.nodeType&&i,Nt=Vi&&!0&&e&&!e.nodeType&&e,bo=Nt&&Nt.exports===Vi,Ki=bo&&yo.process,wn=function(){try{var S=Nt&&Nt.require&&Nt.require("util").types;return S||Ki&&Ki.binding&&Ki.binding("util")}catch{}}(),Eo=wn&&wn.isArrayBuffer,_o=wn&&wn.isDate,To=wn&&wn.isMap,wo=wn&&wn.isRegExp,Ao=wn&&wn.isSet,Ro=wn&&wn.isTypedArray;function vn(S,F,B){switch(B.length){case 0:return S.call(F);case 1:return S.call(F,B[0]);case 2:return S.call(F,B[0],B[1]);case 3:return S.call(F,B[0],B[1],B[2])}return S.apply(F,B)}function mf(S,F,B,re){for(var me=-1,Te=S==null?0:S.length;++me<Te;){var Ye=S[me];F(re,Ye,B(Ye),S)}return re}function An(S,F){for(var B=-1,re=S==null?0:S.length;++B<re&&F(S[B],B,S)!==!1;);return S}function gf(S,F){for(var B=S==null?0:S.length;B--&&F(S[B],B,S)!==!1;);return S}function So(S,F){for(var B=-1,re=S==null?0:S.length;++B<re;)if(!F(S[B],B,S))return!1;return!0}function pt(S,F){for(var B=-1,re=S==null?0:S.length,me=0,Te=[];++B<re;){var Ye=S[B];F(Ye,B,S)&&(Te[me++]=Ye)}return Te}function ua(S,F){var B=S==null?0:S.length;return!!B&&Ut(S,F,0)>-1}function Mi(S,F,B){for(var re=-1,me=S==null?0:S.length;++re<me;)if(B(F,S[re]))return!0;return!1}function De(S,F){for(var B=-1,re=S==null?0:S.length,me=Array(re);++B<re;)me[B]=F(S[B],B,S);return me}function ht(S,F){for(var B=-1,re=F.length,me=S.length;++B<re;)S[me+B]=F[B];return S}function Li(S,F,B,re){var me=-1,Te=S==null?0:S.length;for(re&&Te&&(B=S[++me]);++me<Te;)B=F(B,S[me],me,S);return B}function cf(S,F,B,re){var me=S==null?0:S.length;for(re&&me&&(B=S[--me]);me--;)B=F(B,S[me],me,S);return B}function Ci(S,F){for(var B=-1,re=S==null?0:S.length;++B<re;)if(F(S[B],B,S))return!0;return!1}var ff=Hi("length");function vf(S){return S.split("")}function pf(S){return S.match(Tc)||[]}function No(S,F,B){var re;return B(S,function(me,Te,Ye){if(F(me,Te,Ye))return re=Te,!1}),re}function da(S,F,B,re){for(var me=S.length,Te=B+(re?1:-1);re?Te--:++Te<me;)if(F(S[Te],Te,S))return Te;return-1}function Ut(S,F,B){return F===F?Nf(S,F,B):da(S,Po,B)}function hf(S,F,B,re){for(var me=B-1,Te=S.length;++me<Te;)if(re(S[me],F))return me;return-1}function Po(S){return S!==S}function Io(S,F){var B=S==null?0:S.length;return B?Ui(S,F)/B:ae}function Hi(S){return function(F){return F==null?r:F[S]}}function Gi(S){return function(F){return S==null?r:S[F]}}function Oo(S,F,B,re,me){return me(S,function(Te,Ye,Ie){B=re?(re=!1,Te):F(B,Te,Ye,Ie)}),B}function kf(S,F){var B=S.length;for(S.sort(F);B--;)S[B]=S[B].value;return S}function Ui(S,F){for(var B,re=-1,me=S.length;++re<me;){var Te=F(S[re]);Te!==r&&(B=B===r?Te:B+Te)}return B}function $i(S,F){for(var B=-1,re=Array(S);++B<S;)re[B]=F(B);return re}function yf(S,F){return De(F,function(B){return[B,S[B]]})}function jo(S){return S&&S.slice(0,Do(S)+1).replace(ji,"")}function pn(S){return function(F){return S(F)}}function Yi(S,F){return De(F,function(B){return S[B]})}function Er(S,F){return S.has(F)}function Bo(S,F){for(var B=-1,re=S.length;++B<re&&Ut(F,S[B],0)>-1;);return B}function xo(S,F){for(var B=S.length;B--&&Ut(F,S[B],0)>-1;);return B}function bf(S,F){for(var B=S.length,re=0;B--;)S[B]===F&&++re;return re}var Ef=Gi(rf),_f=Gi(af);function Tf(S){return"\\"+sf[S]}function wf(S,F){return S==null?r:S[F]}function $t(S){return Qc.test(S)}function Af(S){return ef.test(S)}function Rf(S){for(var F,B=[];!(F=S.next()).done;)B.push(F.value);return B}function Wi(S){var F=-1,B=Array(S.size);return S.forEach(function(re,me){B[++F]=[me,re]}),B}function qo(S,F){return function(B){return S(F(B))}}function kt(S,F){for(var B=-1,re=S.length,me=0,Te=[];++B<re;){var Ye=S[B];(Ye===F||Ye===h)&&(S[B]=h,Te[me++]=B)}return Te}function ma(S){var F=-1,B=Array(S.size);return S.forEach(function(re){B[++F]=re}),B}function Sf(S){var F=-1,B=Array(S.size);return S.forEach(function(re){B[++F]=[re,re]}),B}function Nf(S,F,B){for(var re=B-1,me=S.length;++re<me;)if(S[re]===F)return re;return-1}function Pf(S,F,B){for(var re=B+1;re--;)if(S[re]===F)return re;return re}function Yt(S){return $t(S)?Of(S):ff(S)}function Dn(S){return $t(S)?jf(S):vf(S)}function Do(S){for(var F=S.length;F--&&yc.test(S.charAt(F)););return F}var If=Gi(lf);function Of(S){for(var F=Fi.lastIndex=0;Fi.test(S);)++F;return F}function jf(S){return S.match(Fi)||[]}function Bf(S){return S.match(Zc)||[]}var xf=function S(F){F=F==null?en:Wt.defaults(en.Object(),F,Wt.pick(en,nf));var B=F.Array,re=F.Date,me=F.Error,Te=F.Function,Ye=F.Math,Ie=F.Object,zi=F.RegExp,qf=F.String,Rn=F.TypeError,ga=B.prototype,Df=Te.prototype,zt=Ie.prototype,ca=F["__core-js_shared__"],fa=Df.toString,Se=zt.hasOwnProperty,Ff=0,Fo=function(){var n=/[^.]+$/.exec(ca&&ca.keys&&ca.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),va=zt.toString,Vf=fa.call(Ie),Kf=en._,Mf=zi("^"+fa.call(Se).replace(Oi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),pa=bo?F.Buffer:r,yt=F.Symbol,ha=F.Uint8Array,Vo=pa?pa.allocUnsafe:r,ka=qo(Ie.getPrototypeOf,Ie),Ko=Ie.create,Mo=zt.propertyIsEnumerable,ya=ga.splice,Lo=yt?yt.isConcatSpreadable:r,_r=yt?yt.iterator:r,Pt=yt?yt.toStringTag:r,ba=function(){try{var n=xt(Ie,"defineProperty");return n({},"",{}),n}catch{}}(),Lf=F.clearTimeout!==en.clearTimeout&&F.clearTimeout,Cf=re&&re.now!==en.Date.now&&re.now,Hf=F.setTimeout!==en.setTimeout&&F.setTimeout,Ea=Ye.ceil,_a=Ye.floor,Xi=Ie.getOwnPropertySymbols,Gf=pa?pa.isBuffer:r,Co=F.isFinite,Uf=ga.join,$f=qo(Ie.keys,Ie),We=Ye.max,tn=Ye.min,Yf=re.now,Wf=F.parseInt,Ho=Ye.random,zf=ga.reverse,Ji=xt(F,"DataView"),Tr=xt(F,"Map"),Zi=xt(F,"Promise"),Xt=xt(F,"Set"),wr=xt(F,"WeakMap"),Ar=xt(Ie,"create"),Ta=wr&&new wr,Jt={},Xf=qt(Ji),Jf=qt(Tr),Zf=qt(Zi),Qf=qt(Xt),ev=qt(wr),wa=yt?yt.prototype:r,Rr=wa?wa.valueOf:r,Go=wa?wa.toString:r;function f(n){if(He(n)&&!ge(n)&&!(n instanceof ye)){if(n instanceof Sn)return n;if(Se.call(n,"__wrapped__"))return Uu(n)}return new Sn(n)}var Zt=function(){function n(){}return function(t){if(!Ve(t))return{};if(Ko)return Ko(t);n.prototype=t;var s=new n;return n.prototype=r,s}}();function Aa(){}function Sn(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}f.templateSettings={escape:cc,evaluate:fc,interpolate:Zs,variable:"",imports:{_:f}},f.prototype=Aa.prototype,f.prototype.constructor=f,Sn.prototype=Zt(Aa.prototype),Sn.prototype.constructor=Sn;function ye(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ne,this.__views__=[]}function nv(){var n=new ye(this.__wrapped__);return n.__actions__=un(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=un(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=un(this.__views__),n}function tv(){if(this.__filtered__){var n=new ye(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function rv(){var n=this.__wrapped__.value(),t=this.__dir__,s=ge(n),u=t<0,g=s?n.length:0,p=vp(0,g,this.__views__),k=p.start,w=p.end,P=w-k,M=u?w:k-1,L=this.__iteratees__,$=L.length,ee=0,le=tn(P,this.__takeCount__);if(!s||!u&&g==P&&le==P)return fu(n,this.__actions__);var ue=[];e:for(;P--&&ee<le;){M+=t;for(var fe=-1,de=n[M];++fe<$;){var he=L[fe],be=he.iteratee,yn=he.type,sn=be(de);if(yn==X)de=sn;else if(!sn){if(yn==D)continue e;break e}}ue[ee++]=de}return ue}ye.prototype=Zt(Aa.prototype),ye.prototype.constructor=ye;function It(n){var t=-1,s=n==null?0:n.length;for(this.clear();++t<s;){var u=n[t];this.set(u[0],u[1])}}function av(){this.__data__=Ar?Ar(null):{},this.size=0}function iv(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function lv(n){var t=this.__data__;if(Ar){var s=t[n];return s===c?r:s}return Se.call(t,n)?t[n]:r}function sv(n){var t=this.__data__;return Ar?t[n]!==r:Se.call(t,n)}function ov(n,t){var s=this.__data__;return this.size+=this.has(n)?0:1,s[n]=Ar&&t===r?c:t,this}It.prototype.clear=av,It.prototype.delete=iv,It.prototype.get=lv,It.prototype.has=sv,It.prototype.set=ov;function nt(n){var t=-1,s=n==null?0:n.length;for(this.clear();++t<s;){var u=n[t];this.set(u[0],u[1])}}function uv(){this.__data__=[],this.size=0}function dv(n){var t=this.__data__,s=Ra(t,n);if(s<0)return!1;var u=t.length-1;return s==u?t.pop():ya.call(t,s,1),--this.size,!0}function mv(n){var t=this.__data__,s=Ra(t,n);return s<0?r:t[s][1]}function gv(n){return Ra(this.__data__,n)>-1}function cv(n,t){var s=this.__data__,u=Ra(s,n);return u<0?(++this.size,s.push([n,t])):s[u][1]=t,this}nt.prototype.clear=uv,nt.prototype.delete=dv,nt.prototype.get=mv,nt.prototype.has=gv,nt.prototype.set=cv;function tt(n){var t=-1,s=n==null?0:n.length;for(this.clear();++t<s;){var u=n[t];this.set(u[0],u[1])}}function fv(){this.size=0,this.__data__={hash:new It,map:new(Tr||nt),string:new It}}function vv(n){var t=Va(this,n).delete(n);return this.size-=t?1:0,t}function pv(n){return Va(this,n).get(n)}function hv(n){return Va(this,n).has(n)}function kv(n,t){var s=Va(this,n),u=s.size;return s.set(n,t),this.size+=s.size==u?0:1,this}tt.prototype.clear=fv,tt.prototype.delete=vv,tt.prototype.get=pv,tt.prototype.has=hv,tt.prototype.set=kv;function Ot(n){var t=-1,s=n==null?0:n.length;for(this.__data__=new tt;++t<s;)this.add(n[t])}function yv(n){return this.__data__.set(n,c),this}function bv(n){return this.__data__.has(n)}Ot.prototype.add=Ot.prototype.push=yv,Ot.prototype.has=bv;function Fn(n){var t=this.__data__=new nt(n);this.size=t.size}function Ev(){this.__data__=new nt,this.size=0}function _v(n){var t=this.__data__,s=t.delete(n);return this.size=t.size,s}function Tv(n){return this.__data__.get(n)}function wv(n){return this.__data__.has(n)}function Av(n,t){var s=this.__data__;if(s instanceof nt){var u=s.__data__;if(!Tr||u.length<l-1)return u.push([n,t]),this.size=++s.size,this;s=this.__data__=new tt(u)}return s.set(n,t),this.size=s.size,this}Fn.prototype.clear=Ev,Fn.prototype.delete=_v,Fn.prototype.get=Tv,Fn.prototype.has=wv,Fn.prototype.set=Av;function Uo(n,t){var s=ge(n),u=!s&&Dt(n),g=!s&&!u&&wt(n),p=!s&&!u&&!g&&tr(n),k=s||u||g||p,w=k?$i(n.length,qf):[],P=w.length;for(var M in n)(t||Se.call(n,M))&&!(k&&(M=="length"||g&&(M=="offset"||M=="parent")||p&&(M=="buffer"||M=="byteLength"||M=="byteOffset")||lt(M,P)))&&w.push(M);return w}function $o(n){var t=n.length;return t?n[ul(0,t-1)]:r}function Rv(n,t){return Ka(un(n),jt(t,0,n.length))}function Sv(n){return Ka(un(n))}function Qi(n,t,s){(s!==r&&!Vn(n[t],s)||s===r&&!(t in n))&&rt(n,t,s)}function Sr(n,t,s){var u=n[t];(!(Se.call(n,t)&&Vn(u,s))||s===r&&!(t in n))&&rt(n,t,s)}function Ra(n,t){for(var s=n.length;s--;)if(Vn(n[s][0],t))return s;return-1}function Nv(n,t,s,u){return bt(n,function(g,p,k){t(u,g,s(g),k)}),u}function Yo(n,t){return n&&Gn(t,ze(t),n)}function Pv(n,t){return n&&Gn(t,mn(t),n)}function rt(n,t,s){t=="__proto__"&&ba?ba(n,t,{configurable:!0,enumerable:!0,value:s,writable:!0}):n[t]=s}function el(n,t){for(var s=-1,u=t.length,g=B(u),p=n==null;++s<u;)g[s]=p?r:xl(n,t[s]);return g}function jt(n,t,s){return n===n&&(s!==r&&(n=n<=s?n:s),t!==r&&(n=n>=t?n:t)),n}function Nn(n,t,s,u,g,p){var k,w=t&y,P=t&E,M=t&_;if(s&&(k=g?s(n,u,g,p):s(n)),k!==r)return k;if(!Ve(n))return n;var L=ge(n);if(L){if(k=hp(n),!w)return un(n,k)}else{var $=rn(n),ee=$==Ge||$==Tn;if(wt(n))return hu(n,w);if($==Qe||$==Me||ee&&!g){if(k=P||ee?{}:Du(n),!w)return P?lp(n,Pv(k,n)):ip(n,Yo(k,n))}else{if(!Oe[$])return g?n:{};k=kp(n,$,w)}}p||(p=new Fn);var le=p.get(n);if(le)return le;p.set(n,k),md(n)?n.forEach(function(de){k.add(Nn(de,t,s,de,n,p))}):ud(n)&&n.forEach(function(de,he){k.set(he,Nn(de,t,s,he,n,p))});var ue=M?P?bl:yl:P?mn:ze,fe=L?r:ue(n);return An(fe||n,function(de,he){fe&&(he=de,de=n[he]),Sr(k,he,Nn(de,t,s,he,n,p))}),k}function Iv(n){var t=ze(n);return function(s){return Wo(s,n,t)}}function Wo(n,t,s){var u=s.length;if(n==null)return!u;for(n=Ie(n);u--;){var g=s[u],p=t[g],k=n[g];if(k===r&&!(g in n)||!p(k))return!1}return!0}function zo(n,t,s){if(typeof n!="function")throw new Rn(d);return xr(function(){n.apply(r,s)},t)}function Nr(n,t,s,u){var g=-1,p=ua,k=!0,w=n.length,P=[],M=t.length;if(!w)return P;s&&(t=De(t,pn(s))),u?(p=Mi,k=!1):t.length>=l&&(p=Er,k=!1,t=new Ot(t));e:for(;++g<w;){var L=n[g],$=s==null?L:s(L);if(L=u||L!==0?L:0,k&&$===$){for(var ee=M;ee--;)if(t[ee]===$)continue e;P.push(L)}else p(t,$,u)||P.push(L)}return P}var bt=_u(Hn),Xo=_u(tl,!0);function Ov(n,t){var s=!0;return bt(n,function(u,g,p){return s=!!t(u,g,p),s}),s}function Sa(n,t,s){for(var u=-1,g=n.length;++u<g;){var p=n[u],k=t(p);if(k!=null&&(w===r?k===k&&!kn(k):s(k,w)))var w=k,P=p}return P}function jv(n,t,s,u){var g=n.length;for(s=ce(s),s<0&&(s=-s>g?0:g+s),u=u===r||u>g?g:ce(u),u<0&&(u+=g),u=s>u?0:cd(u);s<u;)n[s++]=t;return n}function Jo(n,t){var s=[];return bt(n,function(u,g,p){t(u,g,p)&&s.push(u)}),s}function nn(n,t,s,u,g){var p=-1,k=n.length;for(s||(s=bp),g||(g=[]);++p<k;){var w=n[p];t>0&&s(w)?t>1?nn(w,t-1,s,u,g):ht(g,w):u||(g[g.length]=w)}return g}var nl=Tu(),Zo=Tu(!0);function Hn(n,t){return n&&nl(n,t,ze)}function tl(n,t){return n&&Zo(n,t,ze)}function Na(n,t){return pt(t,function(s){return st(n[s])})}function Bt(n,t){t=_t(t,n);for(var s=0,u=t.length;n!=null&&s<u;)n=n[Un(t[s++])];return s&&s==u?n:r}function Qo(n,t,s){var u=t(n);return ge(n)?u:ht(u,s(n))}function an(n){return n==null?n===r?lc:Qn:Pt&&Pt in Ie(n)?fp(n):Sp(n)}function rl(n,t){return n>t}function Bv(n,t){return n!=null&&Se.call(n,t)}function xv(n,t){return n!=null&&t in Ie(n)}function qv(n,t,s){return n>=tn(t,s)&&n<We(t,s)}function al(n,t,s){for(var u=s?Mi:ua,g=n[0].length,p=n.length,k=p,w=B(p),P=1/0,M=[];k--;){var L=n[k];k&&t&&(L=De(L,pn(t))),P=tn(L.length,P),w[k]=!s&&(t||g>=120&&L.length>=120)?new Ot(k&&L):r}L=n[0];var $=-1,ee=w[0];e:for(;++$<g&&M.length<P;){var le=L[$],ue=t?t(le):le;if(le=s||le!==0?le:0,!(ee?Er(ee,ue):u(M,ue,s))){for(k=p;--k;){var fe=w[k];if(!(fe?Er(fe,ue):u(n[k],ue,s)))continue e}ee&&ee.push(ue),M.push(le)}}return M}function Dv(n,t,s,u){return Hn(n,function(g,p,k){t(u,s(g),p,k)}),u}function Pr(n,t,s){t=_t(t,n),n=Mu(n,t);var u=n==null?n:n[Un(In(t))];return u==null?r:vn(u,n,s)}function eu(n){return He(n)&&an(n)==Me}function Fv(n){return He(n)&&an(n)==br}function Vv(n){return He(n)&&an(n)==we}function Ir(n,t,s,u,g){return n===t?!0:n==null||t==null||!He(n)&&!He(t)?n!==n&&t!==t:Kv(n,t,s,u,Ir,g)}function Kv(n,t,s,u,g,p){var k=ge(n),w=ge(t),P=k?qe:rn(n),M=w?qe:rn(t);P=P==Me?Qe:P,M=M==Me?Qe:M;var L=P==Qe,$=M==Qe,ee=P==M;if(ee&&wt(n)){if(!wt(t))return!1;k=!0,L=!1}if(ee&&!L)return p||(p=new Fn),k||tr(n)?Bu(n,t,s,u,g,p):gp(n,t,P,s,u,g,p);if(!(s&O)){var le=L&&Se.call(n,"__wrapped__"),ue=$&&Se.call(t,"__wrapped__");if(le||ue){var fe=le?n.value():n,de=ue?t.value():t;return p||(p=new Fn),g(fe,de,s,u,p)}}return ee?(p||(p=new Fn),cp(n,t,s,u,g,p)):!1}function Mv(n){return He(n)&&rn(n)==Fe}function il(n,t,s,u){var g=s.length,p=g,k=!u;if(n==null)return!p;for(n=Ie(n);g--;){var w=s[g];if(k&&w[2]?w[1]!==n[w[0]]:!(w[0]in n))return!1}for(;++g<p;){w=s[g];var P=w[0],M=n[P],L=w[1];if(k&&w[2]){if(M===r&&!(P in n))return!1}else{var $=new Fn;if(u)var ee=u(M,L,P,n,t,$);if(!(ee===r?Ir(L,M,O|T,u,$):ee))return!1}}return!0}function nu(n){if(!Ve(n)||_p(n))return!1;var t=st(n)?Mf:Pc;return t.test(qt(n))}function Lv(n){return He(n)&&an(n)==hr}function Cv(n){return He(n)&&rn(n)==qn}function Hv(n){return He(n)&&Ua(n.length)&&!!Be[an(n)]}function tu(n){return typeof n=="function"?n:n==null?gn:typeof n=="object"?ge(n)?iu(n[0],n[1]):au(n):wd(n)}function ll(n){if(!Br(n))return $f(n);var t=[];for(var s in Ie(n))Se.call(n,s)&&s!="constructor"&&t.push(s);return t}function Gv(n){if(!Ve(n))return Rp(n);var t=Br(n),s=[];for(var u in n)u=="constructor"&&(t||!Se.call(n,u))||s.push(u);return s}function sl(n,t){return n<t}function ru(n,t){var s=-1,u=dn(n)?B(n.length):[];return bt(n,function(g,p,k){u[++s]=t(g,p,k)}),u}function au(n){var t=_l(n);return t.length==1&&t[0][2]?Vu(t[0][0],t[0][1]):function(s){return s===n||il(s,n,t)}}function iu(n,t){return wl(n)&&Fu(t)?Vu(Un(n),t):function(s){var u=xl(s,n);return u===r&&u===t?ql(s,n):Ir(t,u,O|T)}}function Pa(n,t,s,u,g){n!==t&&nl(t,function(p,k){if(g||(g=new Fn),Ve(p))Uv(n,t,k,s,Pa,u,g);else{var w=u?u(Rl(n,k),p,k+"",n,t,g):r;w===r&&(w=p),Qi(n,k,w)}},mn)}function Uv(n,t,s,u,g,p,k){var w=Rl(n,s),P=Rl(t,s),M=k.get(P);if(M){Qi(n,s,M);return}var L=p?p(w,P,s+"",n,t,k):r,$=L===r;if($){var ee=ge(P),le=!ee&&wt(P),ue=!ee&&!le&&tr(P);L=P,ee||le||ue?ge(w)?L=w:Ue(w)?L=un(w):le?($=!1,L=hu(P,!0)):ue?($=!1,L=ku(P,!0)):L=[]:qr(P)||Dt(P)?(L=w,Dt(w)?L=fd(w):(!Ve(w)||st(w))&&(L=Du(P))):$=!1}$&&(k.set(P,L),g(L,P,u,p,k),k.delete(P)),Qi(n,s,L)}function lu(n,t){var s=n.length;if(s)return t+=t<0?s:0,lt(t,s)?n[t]:r}function su(n,t,s){t.length?t=De(t,function(p){return ge(p)?function(k){return Bt(k,p.length===1?p[0]:p)}:p}):t=[gn];var u=-1;t=De(t,pn(oe()));var g=ru(n,function(p,k,w){var P=De(t,function(M){return M(p)});return{criteria:P,index:++u,value:p}});return kf(g,function(p,k){return ap(p,k,s)})}function $v(n,t){return ou(n,t,function(s,u){return ql(n,u)})}function ou(n,t,s){for(var u=-1,g=t.length,p={};++u<g;){var k=t[u],w=Bt(n,k);s(w,k)&&Or(p,_t(k,n),w)}return p}function Yv(n){return function(t){return Bt(t,n)}}function ol(n,t,s,u){var g=u?hf:Ut,p=-1,k=t.length,w=n;for(n===t&&(t=un(t)),s&&(w=De(n,pn(s)));++p<k;)for(var P=0,M=t[p],L=s?s(M):M;(P=g(w,L,P,u))>-1;)w!==n&&ya.call(w,P,1),ya.call(n,P,1);return n}function uu(n,t){for(var s=n?t.length:0,u=s-1;s--;){var g=t[s];if(s==u||g!==p){var p=g;lt(g)?ya.call(n,g,1):gl(n,g)}}return n}function ul(n,t){return n+_a(Ho()*(t-n+1))}function Wv(n,t,s,u){for(var g=-1,p=We(Ea((t-n)/(s||1)),0),k=B(p);p--;)k[u?p:++g]=n,n+=s;return k}function dl(n,t){var s="";if(!n||t<1||t>G)return s;do t%2&&(s+=n),t=_a(t/2),t&&(n+=n);while(t);return s}function ve(n,t){return Sl(Ku(n,t,gn),n+"")}function zv(n){return $o(rr(n))}function Xv(n,t){var s=rr(n);return Ka(s,jt(t,0,s.length))}function Or(n,t,s,u){if(!Ve(n))return n;t=_t(t,n);for(var g=-1,p=t.length,k=p-1,w=n;w!=null&&++g<p;){var P=Un(t[g]),M=s;if(P==="__proto__"||P==="constructor"||P==="prototype")return n;if(g!=k){var L=w[P];M=u?u(L,P,w):r,M===r&&(M=Ve(L)?L:lt(t[g+1])?[]:{})}Sr(w,P,M),w=w[P]}return n}var du=Ta?function(n,t){return Ta.set(n,t),n}:gn,Jv=ba?function(n,t){return ba(n,"toString",{configurable:!0,enumerable:!1,value:Fl(t),writable:!0})}:gn;function Zv(n){return Ka(rr(n))}function Pn(n,t,s){var u=-1,g=n.length;t<0&&(t=-t>g?0:g+t),s=s>g?g:s,s<0&&(s+=g),g=t>s?0:s-t>>>0,t>>>=0;for(var p=B(g);++u<g;)p[u]=n[u+t];return p}function Qv(n,t){var s;return bt(n,function(u,g,p){return s=t(u,g,p),!s}),!!s}function Ia(n,t,s){var u=0,g=n==null?u:n.length;if(typeof t=="number"&&t===t&&g<=pe){for(;u<g;){var p=u+g>>>1,k=n[p];k!==null&&!kn(k)&&(s?k<=t:k<t)?u=p+1:g=p}return g}return ml(n,t,gn,s)}function ml(n,t,s,u){var g=0,p=n==null?0:n.length;if(p===0)return 0;t=s(t);for(var k=t!==t,w=t===null,P=kn(t),M=t===r;g<p;){var L=_a((g+p)/2),$=s(n[L]),ee=$!==r,le=$===null,ue=$===$,fe=kn($);if(k)var de=u||ue;else M?de=ue&&(u||ee):w?de=ue&&ee&&(u||!le):P?de=ue&&ee&&!le&&(u||!fe):le||fe?de=!1:de=u?$<=t:$<t;de?g=L+1:p=L}return tn(p,se)}function mu(n,t){for(var s=-1,u=n.length,g=0,p=[];++s<u;){var k=n[s],w=t?t(k):k;if(!s||!Vn(w,P)){var P=w;p[g++]=k===0?0:k}}return p}function gu(n){return typeof n=="number"?n:kn(n)?ae:+n}function hn(n){if(typeof n=="string")return n;if(ge(n))return De(n,hn)+"";if(kn(n))return Go?Go.call(n):"";var t=n+"";return t=="0"&&1/n==-W?"-0":t}function Et(n,t,s){var u=-1,g=ua,p=n.length,k=!0,w=[],P=w;if(s)k=!1,g=Mi;else if(p>=l){var M=t?null:dp(n);if(M)return ma(M);k=!1,g=Er,P=new Ot}else P=t?[]:w;e:for(;++u<p;){var L=n[u],$=t?t(L):L;if(L=s||L!==0?L:0,k&&$===$){for(var ee=P.length;ee--;)if(P[ee]===$)continue e;t&&P.push($),w.push(L)}else g(P,$,s)||(P!==w&&P.push($),w.push(L))}return w}function gl(n,t){return t=_t(t,n),n=Mu(n,t),n==null||delete n[Un(In(t))]}function cu(n,t,s,u){return Or(n,t,s(Bt(n,t)),u)}function Oa(n,t,s,u){for(var g=n.length,p=u?g:-1;(u?p--:++p<g)&&t(n[p],p,n););return s?Pn(n,u?0:p,u?p+1:g):Pn(n,u?p+1:0,u?g:p)}function fu(n,t){var s=n;return s instanceof ye&&(s=s.value()),Li(t,function(u,g){return g.func.apply(g.thisArg,ht([u],g.args))},s)}function cl(n,t,s){var u=n.length;if(u<2)return u?Et(n[0]):[];for(var g=-1,p=B(u);++g<u;)for(var k=n[g],w=-1;++w<u;)w!=g&&(p[g]=Nr(p[g]||k,n[w],t,s));return Et(nn(p,1),t,s)}function vu(n,t,s){for(var u=-1,g=n.length,p=t.length,k={};++u<g;){var w=u<p?t[u]:r;s(k,n[u],w)}return k}function fl(n){return Ue(n)?n:[]}function vl(n){return typeof n=="function"?n:gn}function _t(n,t){return ge(n)?n:wl(n,t)?[n]:Gu(Ae(n))}var ep=ve;function Tt(n,t,s){var u=n.length;return s=s===r?u:s,!t&&s>=u?n:Pn(n,t,s)}var pu=Lf||function(n){return en.clearTimeout(n)};function hu(n,t){if(t)return n.slice();var s=n.length,u=Vo?Vo(s):new n.constructor(s);return n.copy(u),u}function pl(n){var t=new n.constructor(n.byteLength);return new ha(t).set(new ha(n)),t}function np(n,t){var s=t?pl(n.buffer):n.buffer;return new n.constructor(s,n.byteOffset,n.byteLength)}function tp(n){var t=new n.constructor(n.source,Qs.exec(n));return t.lastIndex=n.lastIndex,t}function rp(n){return Rr?Ie(Rr.call(n)):{}}function ku(n,t){var s=t?pl(n.buffer):n.buffer;return new n.constructor(s,n.byteOffset,n.length)}function yu(n,t){if(n!==t){var s=n!==r,u=n===null,g=n===n,p=kn(n),k=t!==r,w=t===null,P=t===t,M=kn(t);if(!w&&!M&&!p&&n>t||p&&k&&P&&!w&&!M||u&&k&&P||!s&&P||!g)return 1;if(!u&&!p&&!M&&n<t||M&&s&&g&&!u&&!p||w&&s&&g||!k&&g||!P)return-1}return 0}function ap(n,t,s){for(var u=-1,g=n.criteria,p=t.criteria,k=g.length,w=s.length;++u<k;){var P=yu(g[u],p[u]);if(P){if(u>=w)return P;var M=s[u];return P*(M=="desc"?-1:1)}}return n.index-t.index}function bu(n,t,s,u){for(var g=-1,p=n.length,k=s.length,w=-1,P=t.length,M=We(p-k,0),L=B(P+M),$=!u;++w<P;)L[w]=t[w];for(;++g<k;)($||g<p)&&(L[s[g]]=n[g]);for(;M--;)L[w++]=n[g++];return L}function Eu(n,t,s,u){for(var g=-1,p=n.length,k=-1,w=s.length,P=-1,M=t.length,L=We(p-w,0),$=B(L+M),ee=!u;++g<L;)$[g]=n[g];for(var le=g;++P<M;)$[le+P]=t[P];for(;++k<w;)(ee||g<p)&&($[le+s[k]]=n[g++]);return $}function un(n,t){var s=-1,u=n.length;for(t||(t=B(u));++s<u;)t[s]=n[s];return t}function Gn(n,t,s,u){var g=!s;s||(s={});for(var p=-1,k=t.length;++p<k;){var w=t[p],P=u?u(s[w],n[w],w,s,n):r;P===r&&(P=n[w]),g?rt(s,w,P):Sr(s,w,P)}return s}function ip(n,t){return Gn(n,Tl(n),t)}function lp(n,t){return Gn(n,xu(n),t)}function ja(n,t){return function(s,u){var g=ge(s)?mf:Nv,p=t?t():{};return g(s,n,oe(u,2),p)}}function Qt(n){return ve(function(t,s){var u=-1,g=s.length,p=g>1?s[g-1]:r,k=g>2?s[2]:r;for(p=n.length>3&&typeof p=="function"?(g--,p):r,k&&ln(s[0],s[1],k)&&(p=g<3?r:p,g=1),t=Ie(t);++u<g;){var w=s[u];w&&n(t,w,u,p)}return t})}function _u(n,t){return function(s,u){if(s==null)return s;if(!dn(s))return n(s,u);for(var g=s.length,p=t?g:-1,k=Ie(s);(t?p--:++p<g)&&u(k[p],p,k)!==!1;);return s}}function Tu(n){return function(t,s,u){for(var g=-1,p=Ie(t),k=u(t),w=k.length;w--;){var P=k[n?w:++g];if(s(p[P],P,p)===!1)break}return t}}function sp(n,t,s){var u=t&b,g=jr(n);function p(){var k=this&&this!==en&&this instanceof p?g:n;return k.apply(u?s:this,arguments)}return p}function wu(n){return function(t){t=Ae(t);var s=$t(t)?Dn(t):r,u=s?s[0]:t.charAt(0),g=s?Tt(s,1).join(""):t.slice(1);return u[n]()+g}}function er(n){return function(t){return Li(_d(Ed(t).replace(Xc,"")),n,"")}}function jr(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var s=Zt(n.prototype),u=n.apply(s,t);return Ve(u)?u:s}}function op(n,t,s){var u=jr(n);function g(){for(var p=arguments.length,k=B(p),w=p,P=nr(g);w--;)k[w]=arguments[w];var M=p<3&&k[0]!==P&&k[p-1]!==P?[]:kt(k,P);if(p-=M.length,p<s)return Pu(n,t,Ba,g.placeholder,r,k,M,r,r,s-p);var L=this&&this!==en&&this instanceof g?u:n;return vn(L,this,k)}return g}function Au(n){return function(t,s,u){var g=Ie(t);if(!dn(t)){var p=oe(s,3);t=ze(t),s=function(w){return p(g[w],w,g)}}var k=n(t,s,u);return k>-1?g[p?t[k]:k]:r}}function Ru(n){return it(function(t){var s=t.length,u=s,g=Sn.prototype.thru;for(n&&t.reverse();u--;){var p=t[u];if(typeof p!="function")throw new Rn(d);if(g&&!k&&Fa(p)=="wrapper")var k=new Sn([],!0)}for(u=k?u:s;++u<s;){p=t[u];var w=Fa(p),P=w=="wrapper"?El(p):r;P&&Al(P[0])&&P[1]==(x|N|I|q)&&!P[4].length&&P[9]==1?k=k[Fa(P[0])].apply(k,P[3]):k=p.length==1&&Al(p)?k[w]():k.thru(p)}return function(){var M=arguments,L=M[0];if(k&&M.length==1&&ge(L))return k.plant(L).value();for(var $=0,ee=s?t[$].apply(this,M):L;++$<s;)ee=t[$].call(this,ee);return ee}})}function Ba(n,t,s,u,g,p,k,w,P,M){var L=t&x,$=t&b,ee=t&R,le=t&(N|H),ue=t&z,fe=ee?r:jr(n);function de(){for(var he=arguments.length,be=B(he),yn=he;yn--;)be[yn]=arguments[yn];if(le)var sn=nr(de),bn=bf(be,sn);if(u&&(be=bu(be,u,g,le)),p&&(be=Eu(be,p,k,le)),he-=bn,le&&he<M){var $e=kt(be,sn);return Pu(n,t,Ba,de.placeholder,s,be,$e,w,P,M-he)}var Kn=$?s:this,ut=ee?Kn[n]:n;return he=be.length,w?be=Np(be,w):ue&&he>1&&be.reverse(),L&&P<he&&(be.length=P),this&&this!==en&&this instanceof de&&(ut=fe||jr(ut)),ut.apply(Kn,be)}return de}function Su(n,t){return function(s,u){return Dv(s,n,t(u),{})}}function xa(n,t){return function(s,u){var g;if(s===r&&u===r)return t;if(s!==r&&(g=s),u!==r){if(g===r)return u;typeof s=="string"||typeof u=="string"?(s=hn(s),u=hn(u)):(s=gu(s),u=gu(u)),g=n(s,u)}return g}}function hl(n){return it(function(t){return t=De(t,pn(oe())),ve(function(s){var u=this;return n(t,function(g){return vn(g,u,s)})})})}function qa(n,t){t=t===r?" ":hn(t);var s=t.length;if(s<2)return s?dl(t,n):t;var u=dl(t,Ea(n/Yt(t)));return $t(t)?Tt(Dn(u),0,n).join(""):u.slice(0,n)}function up(n,t,s,u){var g=t&b,p=jr(n);function k(){for(var w=-1,P=arguments.length,M=-1,L=u.length,$=B(L+P),ee=this&&this!==en&&this instanceof k?p:n;++M<L;)$[M]=u[M];for(;P--;)$[M++]=arguments[++w];return vn(ee,g?s:this,$)}return k}function Nu(n){return function(t,s,u){return u&&typeof u!="number"&&ln(t,s,u)&&(s=u=r),t=ot(t),s===r?(s=t,t=0):s=ot(s),u=u===r?t<s?1:-1:ot(u),Wv(t,s,u,n)}}function Da(n){return function(t,s){return typeof t=="string"&&typeof s=="string"||(t=On(t),s=On(s)),n(t,s)}}function Pu(n,t,s,u,g,p,k,w,P,M){var L=t&N,$=L?k:r,ee=L?r:k,le=L?p:r,ue=L?r:p;t|=L?I:C,t&=~(L?C:I),t&j||(t&=-4);var fe=[n,t,g,le,$,ue,ee,w,P,M],de=s.apply(r,fe);return Al(n)&&Lu(de,fe),de.placeholder=u,Cu(de,n,t)}function kl(n){var t=Ye[n];return function(s,u){if(s=On(s),u=u==null?0:tn(ce(u),292),u&&Co(s)){var g=(Ae(s)+"e").split("e"),p=t(g[0]+"e"+(+g[1]+u));return g=(Ae(p)+"e").split("e"),+(g[0]+"e"+(+g[1]-u))}return t(s)}}var dp=Xt&&1/ma(new Xt([,-0]))[1]==W?function(n){return new Xt(n)}:Ml;function Iu(n){return function(t){var s=rn(t);return s==Fe?Wi(t):s==qn?Sf(t):yf(t,n(t))}}function at(n,t,s,u,g,p,k,w){var P=t&R;if(!P&&typeof n!="function")throw new Rn(d);var M=u?u.length:0;if(M||(t&=-97,u=g=r),k=k===r?k:We(ce(k),0),w=w===r?w:ce(w),M-=g?g.length:0,t&C){var L=u,$=g;u=g=r}var ee=P?r:El(n),le=[n,t,s,u,g,L,$,p,k,w];if(ee&&Ap(le,ee),n=le[0],t=le[1],s=le[2],u=le[3],g=le[4],w=le[9]=le[9]===r?P?0:n.length:We(le[9]-M,0),!w&&t&(N|H)&&(t&=-25),!t||t==b)var ue=sp(n,t,s);else t==N||t==H?ue=op(n,t,w):(t==I||t==(b|I))&&!g.length?ue=up(n,t,s,u):ue=Ba.apply(r,le);var fe=ee?du:Lu;return Cu(fe(ue,le),n,t)}function Ou(n,t,s,u){return n===r||Vn(n,zt[s])&&!Se.call(u,s)?t:n}function ju(n,t,s,u,g,p){return Ve(n)&&Ve(t)&&(p.set(t,n),Pa(n,t,r,ju,p),p.delete(t)),n}function mp(n){return qr(n)?r:n}function Bu(n,t,s,u,g,p){var k=s&O,w=n.length,P=t.length;if(w!=P&&!(k&&P>w))return!1;var M=p.get(n),L=p.get(t);if(M&&L)return M==t&&L==n;var $=-1,ee=!0,le=s&T?new Ot:r;for(p.set(n,t),p.set(t,n);++$<w;){var ue=n[$],fe=t[$];if(u)var de=k?u(fe,ue,$,t,n,p):u(ue,fe,$,n,t,p);if(de!==r){if(de)continue;ee=!1;break}if(le){if(!Ci(t,function(he,be){if(!Er(le,be)&&(ue===he||g(ue,he,s,u,p)))return le.push(be)})){ee=!1;break}}else if(!(ue===fe||g(ue,fe,s,u,p))){ee=!1;break}}return p.delete(n),p.delete(t),ee}function gp(n,t,s,u,g,p,k){switch(s){case Ht:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case br:return!(n.byteLength!=t.byteLength||!p(new ha(n),new ha(t)));case ke:case we:case Ze:return Vn(+n,+t);case Ce:return n.name==t.name&&n.message==t.message;case hr:case kr:return n==t+"";case Fe:var w=Wi;case qn:var P=u&O;if(w||(w=ma),n.size!=t.size&&!P)return!1;var M=k.get(n);if(M)return M==t;u|=T,k.set(n,t);var L=Bu(w(n),w(t),u,g,p,k);return k.delete(n),L;case ia:if(Rr)return Rr.call(n)==Rr.call(t)}return!1}function cp(n,t,s,u,g,p){var k=s&O,w=yl(n),P=w.length,M=yl(t),L=M.length;if(P!=L&&!k)return!1;for(var $=P;$--;){var ee=w[$];if(!(k?ee in t:Se.call(t,ee)))return!1}var le=p.get(n),ue=p.get(t);if(le&&ue)return le==t&&ue==n;var fe=!0;p.set(n,t),p.set(t,n);for(var de=k;++$<P;){ee=w[$];var he=n[ee],be=t[ee];if(u)var yn=k?u(be,he,ee,t,n,p):u(he,be,ee,n,t,p);if(!(yn===r?he===be||g(he,be,s,u,p):yn)){fe=!1;break}de||(de=ee=="constructor")}if(fe&&!de){var sn=n.constructor,bn=t.constructor;sn!=bn&&"constructor"in n&&"constructor"in t&&!(typeof sn=="function"&&sn instanceof sn&&typeof bn=="function"&&bn instanceof bn)&&(fe=!1)}return p.delete(n),p.delete(t),fe}function it(n){return Sl(Ku(n,r,Wu),n+"")}function yl(n){return Qo(n,ze,Tl)}function bl(n){return Qo(n,mn,xu)}var El=Ta?function(n){return Ta.get(n)}:Ml;function Fa(n){for(var t=n.name+"",s=Jt[t],u=Se.call(Jt,t)?s.length:0;u--;){var g=s[u],p=g.func;if(p==null||p==n)return g.name}return t}function nr(n){var t=Se.call(f,"placeholder")?f:n;return t.placeholder}function oe(){var n=f.iteratee||Vl;return n=n===Vl?tu:n,arguments.length?n(arguments[0],arguments[1]):n}function Va(n,t){var s=n.__data__;return Ep(t)?s[typeof t=="string"?"string":"hash"]:s.map}function _l(n){for(var t=ze(n),s=t.length;s--;){var u=t[s],g=n[u];t[s]=[u,g,Fu(g)]}return t}function xt(n,t){var s=wf(n,t);return nu(s)?s:r}function fp(n){var t=Se.call(n,Pt),s=n[Pt];try{n[Pt]=r;var u=!0}catch{}var g=va.call(n);return u&&(t?n[Pt]=s:delete n[Pt]),g}var Tl=Xi?function(n){return n==null?[]:(n=Ie(n),pt(Xi(n),function(t){return Mo.call(n,t)}))}:Ll,xu=Xi?function(n){for(var t=[];n;)ht(t,Tl(n)),n=ka(n);return t}:Ll,rn=an;(Ji&&rn(new Ji(new ArrayBuffer(1)))!=Ht||Tr&&rn(new Tr)!=Fe||Zi&&rn(Zi.resolve())!=Cn||Xt&&rn(new Xt)!=qn||wr&&rn(new wr)!=yr)&&(rn=function(n){var t=an(n),s=t==Qe?n.constructor:r,u=s?qt(s):"";if(u)switch(u){case Xf:return Ht;case Jf:return Fe;case Zf:return Cn;case Qf:return qn;case ev:return yr}return t});function vp(n,t,s){for(var u=-1,g=s.length;++u<g;){var p=s[u],k=p.size;switch(p.type){case"drop":n+=k;break;case"dropRight":t-=k;break;case"take":t=tn(t,n+k);break;case"takeRight":n=We(n,t-k);break}}return{start:n,end:t}}function pp(n){var t=n.match(Ec);return t?t[1].split(_c):[]}function qu(n,t,s){t=_t(t,n);for(var u=-1,g=t.length,p=!1;++u<g;){var k=Un(t[u]);if(!(p=n!=null&&s(n,k)))break;n=n[k]}return p||++u!=g?p:(g=n==null?0:n.length,!!g&&Ua(g)&&lt(k,g)&&(ge(n)||Dt(n)))}function hp(n){var t=n.length,s=new n.constructor(t);return t&&typeof n[0]=="string"&&Se.call(n,"index")&&(s.index=n.index,s.input=n.input),s}function Du(n){return typeof n.constructor=="function"&&!Br(n)?Zt(ka(n)):{}}function kp(n,t,s){var u=n.constructor;switch(t){case br:return pl(n);case ke:case we:return new u(+n);case Ht:return np(n,s);case _i:case Ti:case wi:case Ai:case Ri:case Si:case Ni:case Pi:case Ii:return ku(n,s);case Fe:return new u;case Ze:case kr:return new u(n);case hr:return tp(n);case qn:return new u;case ia:return rp(n)}}function yp(n,t){var s=t.length;if(!s)return n;var u=s-1;return t[u]=(s>1?"& ":"")+t[u],t=t.join(s>2?", ":" "),n.replace(bc,`{
/* [wrapped with `+t+`] */
`)}function bp(n){return ge(n)||Dt(n)||!!(Lo&&n&&n[Lo])}function lt(n,t){var s=typeof n;return t=t??G,!!t&&(s=="number"||s!="symbol"&&Oc.test(n))&&n>-1&&n%1==0&&n<t}function ln(n,t,s){if(!Ve(s))return!1;var u=typeof t;return(u=="number"?dn(s)&&lt(t,s.length):u=="string"&&t in s)?Vn(s[t],n):!1}function wl(n,t){if(ge(n))return!1;var s=typeof n;return s=="number"||s=="symbol"||s=="boolean"||n==null||kn(n)?!0:pc.test(n)||!vc.test(n)||t!=null&&n in Ie(t)}function Ep(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}function Al(n){var t=Fa(n),s=f[t];if(typeof s!="function"||!(t in ye.prototype))return!1;if(n===s)return!0;var u=El(s);return!!u&&n===u[0]}function _p(n){return!!Fo&&Fo in n}var Tp=ca?st:Cl;function Br(n){var t=n&&n.constructor,s=typeof t=="function"&&t.prototype||zt;return n===s}function Fu(n){return n===n&&!Ve(n)}function Vu(n,t){return function(s){return s==null?!1:s[n]===t&&(t!==r||n in Ie(s))}}function wp(n){var t=Ha(n,function(u){return s.size===v&&s.clear(),u}),s=t.cache;return t}function Ap(n,t){var s=n[1],u=t[1],g=s|u,p=g<(b|R|x),k=u==x&&s==N||u==x&&s==q&&n[7].length<=t[8]||u==(x|q)&&t[7].length<=t[8]&&s==N;if(!(p||k))return n;u&b&&(n[2]=t[2],g|=s&b?0:j);var w=t[3];if(w){var P=n[3];n[3]=P?bu(P,w,t[4]):w,n[4]=P?kt(n[3],h):t[4]}return w=t[5],w&&(P=n[5],n[5]=P?Eu(P,w,t[6]):w,n[6]=P?kt(n[5],h):t[6]),w=t[7],w&&(n[7]=w),u&x&&(n[8]=n[8]==null?t[8]:tn(n[8],t[8])),n[9]==null&&(n[9]=t[9]),n[0]=t[0],n[1]=g,n}function Rp(n){var t=[];if(n!=null)for(var s in Ie(n))t.push(s);return t}function Sp(n){return va.call(n)}function Ku(n,t,s){return t=We(t===r?n.length-1:t,0),function(){for(var u=arguments,g=-1,p=We(u.length-t,0),k=B(p);++g<p;)k[g]=u[t+g];g=-1;for(var w=B(t+1);++g<t;)w[g]=u[g];return w[t]=s(k),vn(n,this,w)}}function Mu(n,t){return t.length<2?n:Bt(n,Pn(t,0,-1))}function Np(n,t){for(var s=n.length,u=tn(t.length,s),g=un(n);u--;){var p=t[u];n[u]=lt(p,s)?g[p]:r}return n}function Rl(n,t){if(!(t==="constructor"&&typeof n[t]=="function")&&t!="__proto__")return n[t]}var Lu=Hu(du),xr=Hf||function(n,t){return en.setTimeout(n,t)},Sl=Hu(Jv);function Cu(n,t,s){var u=t+"";return Sl(n,yp(u,Pp(pp(u),s)))}function Hu(n){var t=0,s=0;return function(){var u=Yf(),g=K-(u-s);if(s=u,g>0){if(++t>=Z)return arguments[0]}else t=0;return n.apply(r,arguments)}}function Ka(n,t){var s=-1,u=n.length,g=u-1;for(t=t===r?u:t;++s<t;){var p=ul(s,g),k=n[p];n[p]=n[s],n[s]=k}return n.length=t,n}var Gu=wp(function(n){var t=[];return n.charCodeAt(0)===46&&t.push(""),n.replace(hc,function(s,u,g,p){t.push(g?p.replace(Ac,"$1"):u||s)}),t});function Un(n){if(typeof n=="string"||kn(n))return n;var t=n+"";return t=="0"&&1/n==-W?"-0":t}function qt(n){if(n!=null){try{return fa.call(n)}catch{}try{return n+""}catch{}}return""}function Pp(n,t){return An(fn,function(s){var u="_."+s[0];t&s[1]&&!ua(n,u)&&n.push(u)}),n.sort()}function Uu(n){if(n instanceof ye)return n.clone();var t=new Sn(n.__wrapped__,n.__chain__);return t.__actions__=un(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Ip(n,t,s){(s?ln(n,t,s):t===r)?t=1:t=We(ce(t),0);var u=n==null?0:n.length;if(!u||t<1)return[];for(var g=0,p=0,k=B(Ea(u/t));g<u;)k[p++]=Pn(n,g,g+=t);return k}function Op(n){for(var t=-1,s=n==null?0:n.length,u=0,g=[];++t<s;){var p=n[t];p&&(g[u++]=p)}return g}function jp(){var n=arguments.length;if(!n)return[];for(var t=B(n-1),s=arguments[0],u=n;u--;)t[u-1]=arguments[u];return ht(ge(s)?un(s):[s],nn(t,1))}var Bp=ve(function(n,t){return Ue(n)?Nr(n,nn(t,1,Ue,!0)):[]}),xp=ve(function(n,t){var s=In(t);return Ue(s)&&(s=r),Ue(n)?Nr(n,nn(t,1,Ue,!0),oe(s,2)):[]}),qp=ve(function(n,t){var s=In(t);return Ue(s)&&(s=r),Ue(n)?Nr(n,nn(t,1,Ue,!0),r,s):[]});function Dp(n,t,s){var u=n==null?0:n.length;return u?(t=s||t===r?1:ce(t),Pn(n,t<0?0:t,u)):[]}function Fp(n,t,s){var u=n==null?0:n.length;return u?(t=s||t===r?1:ce(t),t=u-t,Pn(n,0,t<0?0:t)):[]}function Vp(n,t){return n&&n.length?Oa(n,oe(t,3),!0,!0):[]}function Kp(n,t){return n&&n.length?Oa(n,oe(t,3),!0):[]}function Mp(n,t,s,u){var g=n==null?0:n.length;return g?(s&&typeof s!="number"&&ln(n,t,s)&&(s=0,u=g),jv(n,t,s,u)):[]}function $u(n,t,s){var u=n==null?0:n.length;if(!u)return-1;var g=s==null?0:ce(s);return g<0&&(g=We(u+g,0)),da(n,oe(t,3),g)}function Yu(n,t,s){var u=n==null?0:n.length;if(!u)return-1;var g=u-1;return s!==r&&(g=ce(s),g=s<0?We(u+g,0):tn(g,u-1)),da(n,oe(t,3),g,!0)}function Wu(n){var t=n==null?0:n.length;return t?nn(n,1):[]}function Lp(n){var t=n==null?0:n.length;return t?nn(n,W):[]}function Cp(n,t){var s=n==null?0:n.length;return s?(t=t===r?1:ce(t),nn(n,t)):[]}function Hp(n){for(var t=-1,s=n==null?0:n.length,u={};++t<s;){var g=n[t];u[g[0]]=g[1]}return u}function zu(n){return n&&n.length?n[0]:r}function Gp(n,t,s){var u=n==null?0:n.length;if(!u)return-1;var g=s==null?0:ce(s);return g<0&&(g=We(u+g,0)),Ut(n,t,g)}function Up(n){var t=n==null?0:n.length;return t?Pn(n,0,-1):[]}var $p=ve(function(n){var t=De(n,fl);return t.length&&t[0]===n[0]?al(t):[]}),Yp=ve(function(n){var t=In(n),s=De(n,fl);return t===In(s)?t=r:s.pop(),s.length&&s[0]===n[0]?al(s,oe(t,2)):[]}),Wp=ve(function(n){var t=In(n),s=De(n,fl);return t=typeof t=="function"?t:r,t&&s.pop(),s.length&&s[0]===n[0]?al(s,r,t):[]});function zp(n,t){return n==null?"":Uf.call(n,t)}function In(n){var t=n==null?0:n.length;return t?n[t-1]:r}function Xp(n,t,s){var u=n==null?0:n.length;if(!u)return-1;var g=u;return s!==r&&(g=ce(s),g=g<0?We(u+g,0):tn(g,u-1)),t===t?Pf(n,t,g):da(n,Po,g,!0)}function Jp(n,t){return n&&n.length?lu(n,ce(t)):r}var Zp=ve(Xu);function Xu(n,t){return n&&n.length&&t&&t.length?ol(n,t):n}function Qp(n,t,s){return n&&n.length&&t&&t.length?ol(n,t,oe(s,2)):n}function eh(n,t,s){return n&&n.length&&t&&t.length?ol(n,t,r,s):n}var nh=it(function(n,t){var s=n==null?0:n.length,u=el(n,t);return uu(n,De(t,function(g){return lt(g,s)?+g:g}).sort(yu)),u});function th(n,t){var s=[];if(!(n&&n.length))return s;var u=-1,g=[],p=n.length;for(t=oe(t,3);++u<p;){var k=n[u];t(k,u,n)&&(s.push(k),g.push(u))}return uu(n,g),s}function Nl(n){return n==null?n:zf.call(n)}function rh(n,t,s){var u=n==null?0:n.length;return u?(s&&typeof s!="number"&&ln(n,t,s)?(t=0,s=u):(t=t==null?0:ce(t),s=s===r?u:ce(s)),Pn(n,t,s)):[]}function ah(n,t){return Ia(n,t)}function ih(n,t,s){return ml(n,t,oe(s,2))}function lh(n,t){var s=n==null?0:n.length;if(s){var u=Ia(n,t);if(u<s&&Vn(n[u],t))return u}return-1}function sh(n,t){return Ia(n,t,!0)}function oh(n,t,s){return ml(n,t,oe(s,2),!0)}function uh(n,t){var s=n==null?0:n.length;if(s){var u=Ia(n,t,!0)-1;if(Vn(n[u],t))return u}return-1}function dh(n){return n&&n.length?mu(n):[]}function mh(n,t){return n&&n.length?mu(n,oe(t,2)):[]}function gh(n){var t=n==null?0:n.length;return t?Pn(n,1,t):[]}function ch(n,t,s){return n&&n.length?(t=s||t===r?1:ce(t),Pn(n,0,t<0?0:t)):[]}function fh(n,t,s){var u=n==null?0:n.length;return u?(t=s||t===r?1:ce(t),t=u-t,Pn(n,t<0?0:t,u)):[]}function vh(n,t){return n&&n.length?Oa(n,oe(t,3),!1,!0):[]}function ph(n,t){return n&&n.length?Oa(n,oe(t,3)):[]}var hh=ve(function(n){return Et(nn(n,1,Ue,!0))}),kh=ve(function(n){var t=In(n);return Ue(t)&&(t=r),Et(nn(n,1,Ue,!0),oe(t,2))}),yh=ve(function(n){var t=In(n);return t=typeof t=="function"?t:r,Et(nn(n,1,Ue,!0),r,t)});function bh(n){return n&&n.length?Et(n):[]}function Eh(n,t){return n&&n.length?Et(n,oe(t,2)):[]}function _h(n,t){return t=typeof t=="function"?t:r,n&&n.length?Et(n,r,t):[]}function Pl(n){if(!(n&&n.length))return[];var t=0;return n=pt(n,function(s){if(Ue(s))return t=We(s.length,t),!0}),$i(t,function(s){return De(n,Hi(s))})}function Ju(n,t){if(!(n&&n.length))return[];var s=Pl(n);return t==null?s:De(s,function(u){return vn(t,r,u)})}var Th=ve(function(n,t){return Ue(n)?Nr(n,t):[]}),wh=ve(function(n){return cl(pt(n,Ue))}),Ah=ve(function(n){var t=In(n);return Ue(t)&&(t=r),cl(pt(n,Ue),oe(t,2))}),Rh=ve(function(n){var t=In(n);return t=typeof t=="function"?t:r,cl(pt(n,Ue),r,t)}),Sh=ve(Pl);function Nh(n,t){return vu(n||[],t||[],Sr)}function Ph(n,t){return vu(n||[],t||[],Or)}var Ih=ve(function(n){var t=n.length,s=t>1?n[t-1]:r;return s=typeof s=="function"?(n.pop(),s):r,Ju(n,s)});function Zu(n){var t=f(n);return t.__chain__=!0,t}function Oh(n,t){return t(n),n}function Ma(n,t){return t(n)}var jh=it(function(n){var t=n.length,s=t?n[0]:0,u=this.__wrapped__,g=function(p){return el(p,n)};return t>1||this.__actions__.length||!(u instanceof ye)||!lt(s)?this.thru(g):(u=u.slice(s,+s+(t?1:0)),u.__actions__.push({func:Ma,args:[g],thisArg:r}),new Sn(u,this.__chain__).thru(function(p){return t&&!p.length&&p.push(r),p}))});function Bh(){return Zu(this)}function xh(){return new Sn(this.value(),this.__chain__)}function qh(){this.__values__===r&&(this.__values__=gd(this.value()));var n=this.__index__>=this.__values__.length,t=n?r:this.__values__[this.__index__++];return{done:n,value:t}}function Dh(){return this}function Fh(n){for(var t,s=this;s instanceof Aa;){var u=Uu(s);u.__index__=0,u.__values__=r,t?g.__wrapped__=u:t=u;var g=u;s=s.__wrapped__}return g.__wrapped__=n,t}function Vh(){var n=this.__wrapped__;if(n instanceof ye){var t=n;return this.__actions__.length&&(t=new ye(this)),t=t.reverse(),t.__actions__.push({func:Ma,args:[Nl],thisArg:r}),new Sn(t,this.__chain__)}return this.thru(Nl)}function Kh(){return fu(this.__wrapped__,this.__actions__)}var Mh=ja(function(n,t,s){Se.call(n,s)?++n[s]:rt(n,s,1)});function Lh(n,t,s){var u=ge(n)?So:Ov;return s&&ln(n,t,s)&&(t=r),u(n,oe(t,3))}function Ch(n,t){var s=ge(n)?pt:Jo;return s(n,oe(t,3))}var Hh=Au($u),Gh=Au(Yu);function Uh(n,t){return nn(La(n,t),1)}function $h(n,t){return nn(La(n,t),W)}function Yh(n,t,s){return s=s===r?1:ce(s),nn(La(n,t),s)}function Qu(n,t){var s=ge(n)?An:bt;return s(n,oe(t,3))}function ed(n,t){var s=ge(n)?gf:Xo;return s(n,oe(t,3))}var Wh=ja(function(n,t,s){Se.call(n,s)?n[s].push(t):rt(n,s,[t])});function zh(n,t,s,u){n=dn(n)?n:rr(n),s=s&&!u?ce(s):0;var g=n.length;return s<0&&(s=We(g+s,0)),$a(n)?s<=g&&n.indexOf(t,s)>-1:!!g&&Ut(n,t,s)>-1}var Xh=ve(function(n,t,s){var u=-1,g=typeof t=="function",p=dn(n)?B(n.length):[];return bt(n,function(k){p[++u]=g?vn(t,k,s):Pr(k,t,s)}),p}),Jh=ja(function(n,t,s){rt(n,s,t)});function La(n,t){var s=ge(n)?De:ru;return s(n,oe(t,3))}function Zh(n,t,s,u){return n==null?[]:(ge(t)||(t=t==null?[]:[t]),s=u?r:s,ge(s)||(s=s==null?[]:[s]),su(n,t,s))}var Qh=ja(function(n,t,s){n[s?0:1].push(t)},function(){return[[],[]]});function ek(n,t,s){var u=ge(n)?Li:Oo,g=arguments.length<3;return u(n,oe(t,4),s,g,bt)}function nk(n,t,s){var u=ge(n)?cf:Oo,g=arguments.length<3;return u(n,oe(t,4),s,g,Xo)}function tk(n,t){var s=ge(n)?pt:Jo;return s(n,Ga(oe(t,3)))}function rk(n){var t=ge(n)?$o:zv;return t(n)}function ak(n,t,s){(s?ln(n,t,s):t===r)?t=1:t=ce(t);var u=ge(n)?Rv:Xv;return u(n,t)}function ik(n){var t=ge(n)?Sv:Zv;return t(n)}function lk(n){if(n==null)return 0;if(dn(n))return $a(n)?Yt(n):n.length;var t=rn(n);return t==Fe||t==qn?n.size:ll(n).length}function sk(n,t,s){var u=ge(n)?Ci:Qv;return s&&ln(n,t,s)&&(t=r),u(n,oe(t,3))}var ok=ve(function(n,t){if(n==null)return[];var s=t.length;return s>1&&ln(n,t[0],t[1])?t=[]:s>2&&ln(t[0],t[1],t[2])&&(t=[t[0]]),su(n,nn(t,1),[])}),Ca=Cf||function(){return en.Date.now()};function uk(n,t){if(typeof t!="function")throw new Rn(d);return n=ce(n),function(){if(--n<1)return t.apply(this,arguments)}}function nd(n,t,s){return t=s?r:t,t=n&&t==null?n.length:t,at(n,x,r,r,r,r,t)}function td(n,t){var s;if(typeof t!="function")throw new Rn(d);return n=ce(n),function(){return--n>0&&(s=t.apply(this,arguments)),n<=1&&(t=r),s}}var Il=ve(function(n,t,s){var u=b;if(s.length){var g=kt(s,nr(Il));u|=I}return at(n,u,t,s,g)}),rd=ve(function(n,t,s){var u=b|R;if(s.length){var g=kt(s,nr(rd));u|=I}return at(t,u,n,s,g)});function ad(n,t,s){t=s?r:t;var u=at(n,N,r,r,r,r,r,t);return u.placeholder=ad.placeholder,u}function id(n,t,s){t=s?r:t;var u=at(n,H,r,r,r,r,r,t);return u.placeholder=id.placeholder,u}function ld(n,t,s){var u,g,p,k,w,P,M=0,L=!1,$=!1,ee=!0;if(typeof n!="function")throw new Rn(d);t=On(t)||0,Ve(s)&&(L=!!s.leading,$="maxWait"in s,p=$?We(On(s.maxWait)||0,t):p,ee="trailing"in s?!!s.trailing:ee);function le($e){var Kn=u,ut=g;return u=g=r,M=$e,k=n.apply(ut,Kn),k}function ue($e){return M=$e,w=xr(he,t),L?le($e):k}function fe($e){var Kn=$e-P,ut=$e-M,Ad=t-Kn;return $?tn(Ad,p-ut):Ad}function de($e){var Kn=$e-P,ut=$e-M;return P===r||Kn>=t||Kn<0||$&&ut>=p}function he(){var $e=Ca();if(de($e))return be($e);w=xr(he,fe($e))}function be($e){return w=r,ee&&u?le($e):(u=g=r,k)}function yn(){w!==r&&pu(w),M=0,u=P=g=w=r}function sn(){return w===r?k:be(Ca())}function bn(){var $e=Ca(),Kn=de($e);if(u=arguments,g=this,P=$e,Kn){if(w===r)return ue(P);if($)return pu(w),w=xr(he,t),le(P)}return w===r&&(w=xr(he,t)),k}return bn.cancel=yn,bn.flush=sn,bn}var dk=ve(function(n,t){return zo(n,1,t)}),mk=ve(function(n,t,s){return zo(n,On(t)||0,s)});function gk(n){return at(n,z)}function Ha(n,t){if(typeof n!="function"||t!=null&&typeof t!="function")throw new Rn(d);var s=function(){var u=arguments,g=t?t.apply(this,u):u[0],p=s.cache;if(p.has(g))return p.get(g);var k=n.apply(this,u);return s.cache=p.set(g,k)||p,k};return s.cache=new(Ha.Cache||tt),s}Ha.Cache=tt;function Ga(n){if(typeof n!="function")throw new Rn(d);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function ck(n){return td(2,n)}var fk=ep(function(n,t){t=t.length==1&&ge(t[0])?De(t[0],pn(oe())):De(nn(t,1),pn(oe()));var s=t.length;return ve(function(u){for(var g=-1,p=tn(u.length,s);++g<p;)u[g]=t[g].call(this,u[g]);return vn(n,this,u)})}),Ol=ve(function(n,t){var s=kt(t,nr(Ol));return at(n,I,r,t,s)}),sd=ve(function(n,t){var s=kt(t,nr(sd));return at(n,C,r,t,s)}),vk=it(function(n,t){return at(n,q,r,r,r,t)});function pk(n,t){if(typeof n!="function")throw new Rn(d);return t=t===r?t:ce(t),ve(n,t)}function hk(n,t){if(typeof n!="function")throw new Rn(d);return t=t==null?0:We(ce(t),0),ve(function(s){var u=s[t],g=Tt(s,0,t);return u&&ht(g,u),vn(n,this,g)})}function kk(n,t,s){var u=!0,g=!0;if(typeof n!="function")throw new Rn(d);return Ve(s)&&(u="leading"in s?!!s.leading:u,g="trailing"in s?!!s.trailing:g),ld(n,t,{leading:u,maxWait:t,trailing:g})}function yk(n){return nd(n,1)}function bk(n,t){return Ol(vl(t),n)}function Ek(){if(!arguments.length)return[];var n=arguments[0];return ge(n)?n:[n]}function _k(n){return Nn(n,_)}function Tk(n,t){return t=typeof t=="function"?t:r,Nn(n,_,t)}function wk(n){return Nn(n,y|_)}function Ak(n,t){return t=typeof t=="function"?t:r,Nn(n,y|_,t)}function Rk(n,t){return t==null||Wo(n,t,ze(t))}function Vn(n,t){return n===t||n!==n&&t!==t}var Sk=Da(rl),Nk=Da(function(n,t){return n>=t}),Dt=eu(function(){return arguments}())?eu:function(n){return He(n)&&Se.call(n,"callee")&&!Mo.call(n,"callee")},ge=B.isArray,Pk=Eo?pn(Eo):Fv;function dn(n){return n!=null&&Ua(n.length)&&!st(n)}function Ue(n){return He(n)&&dn(n)}function Ik(n){return n===!0||n===!1||He(n)&&an(n)==ke}var wt=Gf||Cl,Ok=_o?pn(_o):Vv;function jk(n){return He(n)&&n.nodeType===1&&!qr(n)}function Bk(n){if(n==null)return!0;if(dn(n)&&(ge(n)||typeof n=="string"||typeof n.splice=="function"||wt(n)||tr(n)||Dt(n)))return!n.length;var t=rn(n);if(t==Fe||t==qn)return!n.size;if(Br(n))return!ll(n).length;for(var s in n)if(Se.call(n,s))return!1;return!0}function xk(n,t){return Ir(n,t)}function qk(n,t,s){s=typeof s=="function"?s:r;var u=s?s(n,t):r;return u===r?Ir(n,t,r,s):!!u}function jl(n){if(!He(n))return!1;var t=an(n);return t==Ce||t==Je||typeof n.message=="string"&&typeof n.name=="string"&&!qr(n)}function Dk(n){return typeof n=="number"&&Co(n)}function st(n){if(!Ve(n))return!1;var t=an(n);return t==Ge||t==Tn||t==Le||t==et}function od(n){return typeof n=="number"&&n==ce(n)}function Ua(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=G}function Ve(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}function He(n){return n!=null&&typeof n=="object"}var ud=To?pn(To):Mv;function Fk(n,t){return n===t||il(n,t,_l(t))}function Vk(n,t,s){return s=typeof s=="function"?s:r,il(n,t,_l(t),s)}function Kk(n){return dd(n)&&n!=+n}function Mk(n){if(Tp(n))throw new me(o);return nu(n)}function Lk(n){return n===null}function Ck(n){return n==null}function dd(n){return typeof n=="number"||He(n)&&an(n)==Ze}function qr(n){if(!He(n)||an(n)!=Qe)return!1;var t=ka(n);if(t===null)return!0;var s=Se.call(t,"constructor")&&t.constructor;return typeof s=="function"&&s instanceof s&&fa.call(s)==Vf}var Bl=wo?pn(wo):Lv;function Hk(n){return od(n)&&n>=-G&&n<=G}var md=Ao?pn(Ao):Cv;function $a(n){return typeof n=="string"||!ge(n)&&He(n)&&an(n)==kr}function kn(n){return typeof n=="symbol"||He(n)&&an(n)==ia}var tr=Ro?pn(Ro):Hv;function Gk(n){return n===r}function Uk(n){return He(n)&&rn(n)==yr}function $k(n){return He(n)&&an(n)==sc}var Yk=Da(sl),Wk=Da(function(n,t){return n<=t});function gd(n){if(!n)return[];if(dn(n))return $a(n)?Dn(n):un(n);if(_r&&n[_r])return Rf(n[_r]());var t=rn(n),s=t==Fe?Wi:t==qn?ma:rr;return s(n)}function ot(n){if(!n)return n===0?n:0;if(n=On(n),n===W||n===-W){var t=n<0?-1:1;return t*Y}return n===n?n:0}function ce(n){var t=ot(n),s=t%1;return t===t?s?t-s:t:0}function cd(n){return n?jt(ce(n),0,ne):0}function On(n){if(typeof n=="number")return n;if(kn(n))return ae;if(Ve(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=Ve(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=jo(n);var s=Nc.test(n);return s||Ic.test(n)?uf(n.slice(2),s?2:8):Sc.test(n)?ae:+n}function fd(n){return Gn(n,mn(n))}function zk(n){return n?jt(ce(n),-G,G):n===0?n:0}function Ae(n){return n==null?"":hn(n)}var Xk=Qt(function(n,t){if(Br(t)||dn(t)){Gn(t,ze(t),n);return}for(var s in t)Se.call(t,s)&&Sr(n,s,t[s])}),vd=Qt(function(n,t){Gn(t,mn(t),n)}),Ya=Qt(function(n,t,s,u){Gn(t,mn(t),n,u)}),Jk=Qt(function(n,t,s,u){Gn(t,ze(t),n,u)}),Zk=it(el);function Qk(n,t){var s=Zt(n);return t==null?s:Yo(s,t)}var e0=ve(function(n,t){n=Ie(n);var s=-1,u=t.length,g=u>2?t[2]:r;for(g&&ln(t[0],t[1],g)&&(u=1);++s<u;)for(var p=t[s],k=mn(p),w=-1,P=k.length;++w<P;){var M=k[w],L=n[M];(L===r||Vn(L,zt[M])&&!Se.call(n,M))&&(n[M]=p[M])}return n}),n0=ve(function(n){return n.push(r,ju),vn(pd,r,n)});function t0(n,t){return No(n,oe(t,3),Hn)}function r0(n,t){return No(n,oe(t,3),tl)}function a0(n,t){return n==null?n:nl(n,oe(t,3),mn)}function i0(n,t){return n==null?n:Zo(n,oe(t,3),mn)}function l0(n,t){return n&&Hn(n,oe(t,3))}function s0(n,t){return n&&tl(n,oe(t,3))}function o0(n){return n==null?[]:Na(n,ze(n))}function u0(n){return n==null?[]:Na(n,mn(n))}function xl(n,t,s){var u=n==null?r:Bt(n,t);return u===r?s:u}function d0(n,t){return n!=null&&qu(n,t,Bv)}function ql(n,t){return n!=null&&qu(n,t,xv)}var m0=Su(function(n,t,s){t!=null&&typeof t.toString!="function"&&(t=va.call(t)),n[t]=s},Fl(gn)),g0=Su(function(n,t,s){t!=null&&typeof t.toString!="function"&&(t=va.call(t)),Se.call(n,t)?n[t].push(s):n[t]=[s]},oe),c0=ve(Pr);function ze(n){return dn(n)?Uo(n):ll(n)}function mn(n){return dn(n)?Uo(n,!0):Gv(n)}function f0(n,t){var s={};return t=oe(t,3),Hn(n,function(u,g,p){rt(s,t(u,g,p),u)}),s}function v0(n,t){var s={};return t=oe(t,3),Hn(n,function(u,g,p){rt(s,g,t(u,g,p))}),s}var p0=Qt(function(n,t,s){Pa(n,t,s)}),pd=Qt(function(n,t,s,u){Pa(n,t,s,u)}),h0=it(function(n,t){var s={};if(n==null)return s;var u=!1;t=De(t,function(p){return p=_t(p,n),u||(u=p.length>1),p}),Gn(n,bl(n),s),u&&(s=Nn(s,y|E|_,mp));for(var g=t.length;g--;)gl(s,t[g]);return s});function k0(n,t){return hd(n,Ga(oe(t)))}var y0=it(function(n,t){return n==null?{}:$v(n,t)});function hd(n,t){if(n==null)return{};var s=De(bl(n),function(u){return[u]});return t=oe(t),ou(n,s,function(u,g){return t(u,g[0])})}function b0(n,t,s){t=_t(t,n);var u=-1,g=t.length;for(g||(g=1,n=r);++u<g;){var p=n==null?r:n[Un(t[u])];p===r&&(u=g,p=s),n=st(p)?p.call(n):p}return n}function E0(n,t,s){return n==null?n:Or(n,t,s)}function _0(n,t,s,u){return u=typeof u=="function"?u:r,n==null?n:Or(n,t,s,u)}var kd=Iu(ze),yd=Iu(mn);function T0(n,t,s){var u=ge(n),g=u||wt(n)||tr(n);if(t=oe(t,4),s==null){var p=n&&n.constructor;g?s=u?new p:[]:Ve(n)?s=st(p)?Zt(ka(n)):{}:s={}}return(g?An:Hn)(n,function(k,w,P){return t(s,k,w,P)}),s}function w0(n,t){return n==null?!0:gl(n,t)}function A0(n,t,s){return n==null?n:cu(n,t,vl(s))}function R0(n,t,s,u){return u=typeof u=="function"?u:r,n==null?n:cu(n,t,vl(s),u)}function rr(n){return n==null?[]:Yi(n,ze(n))}function S0(n){return n==null?[]:Yi(n,mn(n))}function N0(n,t,s){return s===r&&(s=t,t=r),s!==r&&(s=On(s),s=s===s?s:0),t!==r&&(t=On(t),t=t===t?t:0),jt(On(n),t,s)}function P0(n,t,s){return t=ot(t),s===r?(s=t,t=0):s=ot(s),n=On(n),qv(n,t,s)}function I0(n,t,s){if(s&&typeof s!="boolean"&&ln(n,t,s)&&(t=s=r),s===r&&(typeof t=="boolean"?(s=t,t=r):typeof n=="boolean"&&(s=n,n=r)),n===r&&t===r?(n=0,t=1):(n=ot(n),t===r?(t=n,n=0):t=ot(t)),n>t){var u=n;n=t,t=u}if(s||n%1||t%1){var g=Ho();return tn(n+g*(t-n+of("1e-"+((g+"").length-1))),t)}return ul(n,t)}var O0=er(function(n,t,s){return t=t.toLowerCase(),n+(s?bd(t):t)});function bd(n){return Dl(Ae(n).toLowerCase())}function Ed(n){return n=Ae(n),n&&n.replace(jc,Ef).replace(Jc,"")}function j0(n,t,s){n=Ae(n),t=hn(t);var u=n.length;s=s===r?u:jt(ce(s),0,u);var g=s;return s-=t.length,s>=0&&n.slice(s,g)==t}function B0(n){return n=Ae(n),n&&gc.test(n)?n.replace(Js,_f):n}function x0(n){return n=Ae(n),n&&kc.test(n)?n.replace(Oi,"\\$&"):n}var q0=er(function(n,t,s){return n+(s?"-":"")+t.toLowerCase()}),D0=er(function(n,t,s){return n+(s?" ":"")+t.toLowerCase()}),F0=wu("toLowerCase");function V0(n,t,s){n=Ae(n),t=ce(t);var u=t?Yt(n):0;if(!t||u>=t)return n;var g=(t-u)/2;return qa(_a(g),s)+n+qa(Ea(g),s)}function K0(n,t,s){n=Ae(n),t=ce(t);var u=t?Yt(n):0;return t&&u<t?n+qa(t-u,s):n}function M0(n,t,s){n=Ae(n),t=ce(t);var u=t?Yt(n):0;return t&&u<t?qa(t-u,s)+n:n}function L0(n,t,s){return s||t==null?t=0:t&&(t=+t),Wf(Ae(n).replace(ji,""),t||0)}function C0(n,t,s){return(s?ln(n,t,s):t===r)?t=1:t=ce(t),dl(Ae(n),t)}function H0(){var n=arguments,t=Ae(n[0]);return n.length<3?t:t.replace(n[1],n[2])}var G0=er(function(n,t,s){return n+(s?"_":"")+t.toLowerCase()});function U0(n,t,s){return s&&typeof s!="number"&&ln(n,t,s)&&(t=s=r),s=s===r?ne:s>>>0,s?(n=Ae(n),n&&(typeof t=="string"||t!=null&&!Bl(t))&&(t=hn(t),!t&&$t(n))?Tt(Dn(n),0,s):n.split(t,s)):[]}var $0=er(function(n,t,s){return n+(s?" ":"")+Dl(t)});function Y0(n,t,s){return n=Ae(n),s=s==null?0:jt(ce(s),0,n.length),t=hn(t),n.slice(s,s+t.length)==t}function W0(n,t,s){var u=f.templateSettings;s&&ln(n,t,s)&&(t=r),n=Ae(n),t=Ya({},t,u,Ou);var g=Ya({},t.imports,u.imports,Ou),p=ze(g),k=Yi(g,p),w,P,M=0,L=t.interpolate||la,$="__p += '",ee=zi((t.escape||la).source+"|"+L.source+"|"+(L===Zs?Rc:la).source+"|"+(t.evaluate||la).source+"|$","g"),le="//# sourceURL="+(Se.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++tf+"]")+`
`;n.replace(ee,function(de,he,be,yn,sn,bn){return be||(be=yn),$+=n.slice(M,bn).replace(Bc,Tf),he&&(w=!0,$+=`' +
__e(`+he+`) +
'`),sn&&(P=!0,$+=`';
`+sn+`;
__p += '`),be&&($+=`' +
((__t = (`+be+`)) == null ? '' : __t) +
'`),M=bn+de.length,de}),$+=`';
`;var ue=Se.call(t,"variable")&&t.variable;if(!ue)$=`with (obj) {
`+$+`
}
`;else if(wc.test(ue))throw new me(m);$=(P?$.replace(oc,""):$).replace(uc,"$1").replace(dc,"$1;"),$="function("+(ue||"obj")+`) {
`+(ue?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(w?", __e = _.escape":"")+(P?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+$+`return __p
}`;var fe=Td(function(){return Te(p,le+"return "+$).apply(r,k)});if(fe.source=$,jl(fe))throw fe;return fe}function z0(n){return Ae(n).toLowerCase()}function X0(n){return Ae(n).toUpperCase()}function J0(n,t,s){if(n=Ae(n),n&&(s||t===r))return jo(n);if(!n||!(t=hn(t)))return n;var u=Dn(n),g=Dn(t),p=Bo(u,g),k=xo(u,g)+1;return Tt(u,p,k).join("")}function Z0(n,t,s){if(n=Ae(n),n&&(s||t===r))return n.slice(0,Do(n)+1);if(!n||!(t=hn(t)))return n;var u=Dn(n),g=xo(u,Dn(t))+1;return Tt(u,0,g).join("")}function Q0(n,t,s){if(n=Ae(n),n&&(s||t===r))return n.replace(ji,"");if(!n||!(t=hn(t)))return n;var u=Dn(n),g=Bo(u,Dn(t));return Tt(u,g).join("")}function ey(n,t){var s=Q,u=J;if(Ve(t)){var g="separator"in t?t.separator:g;s="length"in t?ce(t.length):s,u="omission"in t?hn(t.omission):u}n=Ae(n);var p=n.length;if($t(n)){var k=Dn(n);p=k.length}if(s>=p)return n;var w=s-Yt(u);if(w<1)return u;var P=k?Tt(k,0,w).join(""):n.slice(0,w);if(g===r)return P+u;if(k&&(w+=P.length-w),Bl(g)){if(n.slice(w).search(g)){var M,L=P;for(g.global||(g=zi(g.source,Ae(Qs.exec(g))+"g")),g.lastIndex=0;M=g.exec(L);)var $=M.index;P=P.slice(0,$===r?w:$)}}else if(n.indexOf(hn(g),w)!=w){var ee=P.lastIndexOf(g);ee>-1&&(P=P.slice(0,ee))}return P+u}function ny(n){return n=Ae(n),n&&mc.test(n)?n.replace(Xs,If):n}var ty=er(function(n,t,s){return n+(s?" ":"")+t.toUpperCase()}),Dl=wu("toUpperCase");function _d(n,t,s){return n=Ae(n),t=s?r:t,t===r?Af(n)?Bf(n):pf(n):n.match(t)||[]}var Td=ve(function(n,t){try{return vn(n,r,t)}catch(s){return jl(s)?s:new me(s)}}),ry=it(function(n,t){return An(t,function(s){s=Un(s),rt(n,s,Il(n[s],n))}),n});function ay(n){var t=n==null?0:n.length,s=oe();return n=t?De(n,function(u){if(typeof u[1]!="function")throw new Rn(d);return[s(u[0]),u[1]]}):[],ve(function(u){for(var g=-1;++g<t;){var p=n[g];if(vn(p[0],this,u))return vn(p[1],this,u)}})}function iy(n){return Iv(Nn(n,y))}function Fl(n){return function(){return n}}function ly(n,t){return n==null||n!==n?t:n}var sy=Ru(),oy=Ru(!0);function gn(n){return n}function Vl(n){return tu(typeof n=="function"?n:Nn(n,y))}function uy(n){return au(Nn(n,y))}function dy(n,t){return iu(n,Nn(t,y))}var my=ve(function(n,t){return function(s){return Pr(s,n,t)}}),gy=ve(function(n,t){return function(s){return Pr(n,s,t)}});function Kl(n,t,s){var u=ze(t),g=Na(t,u);s==null&&!(Ve(t)&&(g.length||!u.length))&&(s=t,t=n,n=this,g=Na(t,ze(t)));var p=!(Ve(s)&&"chain"in s)||!!s.chain,k=st(n);return An(g,function(w){var P=t[w];n[w]=P,k&&(n.prototype[w]=function(){var M=this.__chain__;if(p||M){var L=n(this.__wrapped__),$=L.__actions__=un(this.__actions__);return $.push({func:P,args:arguments,thisArg:n}),L.__chain__=M,L}return P.apply(n,ht([this.value()],arguments))})}),n}function cy(){return en._===this&&(en._=Kf),this}function Ml(){}function fy(n){return n=ce(n),ve(function(t){return lu(t,n)})}var vy=hl(De),py=hl(So),hy=hl(Ci);function wd(n){return wl(n)?Hi(Un(n)):Yv(n)}function ky(n){return function(t){return n==null?r:Bt(n,t)}}var yy=Nu(),by=Nu(!0);function Ll(){return[]}function Cl(){return!1}function Ey(){return{}}function _y(){return""}function Ty(){return!0}function wy(n,t){if(n=ce(n),n<1||n>G)return[];var s=ne,u=tn(n,ne);t=oe(t),n-=ne;for(var g=$i(u,t);++s<n;)t(s);return g}function Ay(n){return ge(n)?De(n,Un):kn(n)?[n]:un(Gu(Ae(n)))}function Ry(n){var t=++Ff;return Ae(n)+t}var Sy=xa(function(n,t){return n+t},0),Ny=kl("ceil"),Py=xa(function(n,t){return n/t},1),Iy=kl("floor");function Oy(n){return n&&n.length?Sa(n,gn,rl):r}function jy(n,t){return n&&n.length?Sa(n,oe(t,2),rl):r}function By(n){return Io(n,gn)}function xy(n,t){return Io(n,oe(t,2))}function qy(n){return n&&n.length?Sa(n,gn,sl):r}function Dy(n,t){return n&&n.length?Sa(n,oe(t,2),sl):r}var Fy=xa(function(n,t){return n*t},1),Vy=kl("round"),Ky=xa(function(n,t){return n-t},0);function My(n){return n&&n.length?Ui(n,gn):0}function Ly(n,t){return n&&n.length?Ui(n,oe(t,2)):0}return f.after=uk,f.ary=nd,f.assign=Xk,f.assignIn=vd,f.assignInWith=Ya,f.assignWith=Jk,f.at=Zk,f.before=td,f.bind=Il,f.bindAll=ry,f.bindKey=rd,f.castArray=Ek,f.chain=Zu,f.chunk=Ip,f.compact=Op,f.concat=jp,f.cond=ay,f.conforms=iy,f.constant=Fl,f.countBy=Mh,f.create=Qk,f.curry=ad,f.curryRight=id,f.debounce=ld,f.defaults=e0,f.defaultsDeep=n0,f.defer=dk,f.delay=mk,f.difference=Bp,f.differenceBy=xp,f.differenceWith=qp,f.drop=Dp,f.dropRight=Fp,f.dropRightWhile=Vp,f.dropWhile=Kp,f.fill=Mp,f.filter=Ch,f.flatMap=Uh,f.flatMapDeep=$h,f.flatMapDepth=Yh,f.flatten=Wu,f.flattenDeep=Lp,f.flattenDepth=Cp,f.flip=gk,f.flow=sy,f.flowRight=oy,f.fromPairs=Hp,f.functions=o0,f.functionsIn=u0,f.groupBy=Wh,f.initial=Up,f.intersection=$p,f.intersectionBy=Yp,f.intersectionWith=Wp,f.invert=m0,f.invertBy=g0,f.invokeMap=Xh,f.iteratee=Vl,f.keyBy=Jh,f.keys=ze,f.keysIn=mn,f.map=La,f.mapKeys=f0,f.mapValues=v0,f.matches=uy,f.matchesProperty=dy,f.memoize=Ha,f.merge=p0,f.mergeWith=pd,f.method=my,f.methodOf=gy,f.mixin=Kl,f.negate=Ga,f.nthArg=fy,f.omit=h0,f.omitBy=k0,f.once=ck,f.orderBy=Zh,f.over=vy,f.overArgs=fk,f.overEvery=py,f.overSome=hy,f.partial=Ol,f.partialRight=sd,f.partition=Qh,f.pick=y0,f.pickBy=hd,f.property=wd,f.propertyOf=ky,f.pull=Zp,f.pullAll=Xu,f.pullAllBy=Qp,f.pullAllWith=eh,f.pullAt=nh,f.range=yy,f.rangeRight=by,f.rearg=vk,f.reject=tk,f.remove=th,f.rest=pk,f.reverse=Nl,f.sampleSize=ak,f.set=E0,f.setWith=_0,f.shuffle=ik,f.slice=rh,f.sortBy=ok,f.sortedUniq=dh,f.sortedUniqBy=mh,f.split=U0,f.spread=hk,f.tail=gh,f.take=ch,f.takeRight=fh,f.takeRightWhile=vh,f.takeWhile=ph,f.tap=Oh,f.throttle=kk,f.thru=Ma,f.toArray=gd,f.toPairs=kd,f.toPairsIn=yd,f.toPath=Ay,f.toPlainObject=fd,f.transform=T0,f.unary=yk,f.union=hh,f.unionBy=kh,f.unionWith=yh,f.uniq=bh,f.uniqBy=Eh,f.uniqWith=_h,f.unset=w0,f.unzip=Pl,f.unzipWith=Ju,f.update=A0,f.updateWith=R0,f.values=rr,f.valuesIn=S0,f.without=Th,f.words=_d,f.wrap=bk,f.xor=wh,f.xorBy=Ah,f.xorWith=Rh,f.zip=Sh,f.zipObject=Nh,f.zipObjectDeep=Ph,f.zipWith=Ih,f.entries=kd,f.entriesIn=yd,f.extend=vd,f.extendWith=Ya,Kl(f,f),f.add=Sy,f.attempt=Td,f.camelCase=O0,f.capitalize=bd,f.ceil=Ny,f.clamp=N0,f.clone=_k,f.cloneDeep=wk,f.cloneDeepWith=Ak,f.cloneWith=Tk,f.conformsTo=Rk,f.deburr=Ed,f.defaultTo=ly,f.divide=Py,f.endsWith=j0,f.eq=Vn,f.escape=B0,f.escapeRegExp=x0,f.every=Lh,f.find=Hh,f.findIndex=$u,f.findKey=t0,f.findLast=Gh,f.findLastIndex=Yu,f.findLastKey=r0,f.floor=Iy,f.forEach=Qu,f.forEachRight=ed,f.forIn=a0,f.forInRight=i0,f.forOwn=l0,f.forOwnRight=s0,f.get=xl,f.gt=Sk,f.gte=Nk,f.has=d0,f.hasIn=ql,f.head=zu,f.identity=gn,f.includes=zh,f.indexOf=Gp,f.inRange=P0,f.invoke=c0,f.isArguments=Dt,f.isArray=ge,f.isArrayBuffer=Pk,f.isArrayLike=dn,f.isArrayLikeObject=Ue,f.isBoolean=Ik,f.isBuffer=wt,f.isDate=Ok,f.isElement=jk,f.isEmpty=Bk,f.isEqual=xk,f.isEqualWith=qk,f.isError=jl,f.isFinite=Dk,f.isFunction=st,f.isInteger=od,f.isLength=Ua,f.isMap=ud,f.isMatch=Fk,f.isMatchWith=Vk,f.isNaN=Kk,f.isNative=Mk,f.isNil=Ck,f.isNull=Lk,f.isNumber=dd,f.isObject=Ve,f.isObjectLike=He,f.isPlainObject=qr,f.isRegExp=Bl,f.isSafeInteger=Hk,f.isSet=md,f.isString=$a,f.isSymbol=kn,f.isTypedArray=tr,f.isUndefined=Gk,f.isWeakMap=Uk,f.isWeakSet=$k,f.join=zp,f.kebabCase=q0,f.last=In,f.lastIndexOf=Xp,f.lowerCase=D0,f.lowerFirst=F0,f.lt=Yk,f.lte=Wk,f.max=Oy,f.maxBy=jy,f.mean=By,f.meanBy=xy,f.min=qy,f.minBy=Dy,f.stubArray=Ll,f.stubFalse=Cl,f.stubObject=Ey,f.stubString=_y,f.stubTrue=Ty,f.multiply=Fy,f.nth=Jp,f.noConflict=cy,f.noop=Ml,f.now=Ca,f.pad=V0,f.padEnd=K0,f.padStart=M0,f.parseInt=L0,f.random=I0,f.reduce=ek,f.reduceRight=nk,f.repeat=C0,f.replace=H0,f.result=b0,f.round=Vy,f.runInContext=S,f.sample=rk,f.size=lk,f.snakeCase=G0,f.some=sk,f.sortedIndex=ah,f.sortedIndexBy=ih,f.sortedIndexOf=lh,f.sortedLastIndex=sh,f.sortedLastIndexBy=oh,f.sortedLastIndexOf=uh,f.startCase=$0,f.startsWith=Y0,f.subtract=Ky,f.sum=My,f.sumBy=Ly,f.template=W0,f.times=wy,f.toFinite=ot,f.toInteger=ce,f.toLength=cd,f.toLower=z0,f.toNumber=On,f.toSafeInteger=zk,f.toString=Ae,f.toUpper=X0,f.trim=J0,f.trimEnd=Z0,f.trimStart=Q0,f.truncate=ey,f.unescape=ny,f.uniqueId=Ry,f.upperCase=ty,f.upperFirst=Dl,f.each=Qu,f.eachRight=ed,f.first=zu,Kl(f,function(){var n={};return Hn(f,function(t,s){Se.call(f.prototype,s)||(n[s]=t)}),n}(),{chain:!1}),f.VERSION=a,An(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){f[n].placeholder=f}),An(["drop","take"],function(n,t){ye.prototype[n]=function(s){s=s===r?1:We(ce(s),0);var u=this.__filtered__&&!t?new ye(this):this.clone();return u.__filtered__?u.__takeCount__=tn(s,u.__takeCount__):u.__views__.push({size:tn(s,ne),type:n+(u.__dir__<0?"Right":"")}),u},ye.prototype[n+"Right"]=function(s){return this.reverse()[n](s).reverse()}}),An(["filter","map","takeWhile"],function(n,t){var s=t+1,u=s==D||s==te;ye.prototype[n]=function(g){var p=this.clone();return p.__iteratees__.push({iteratee:oe(g,3),type:s}),p.__filtered__=p.__filtered__||u,p}}),An(["head","last"],function(n,t){var s="take"+(t?"Right":"");ye.prototype[n]=function(){return this[s](1).value()[0]}}),An(["initial","tail"],function(n,t){var s="drop"+(t?"":"Right");ye.prototype[n]=function(){return this.__filtered__?new ye(this):this[s](1)}}),ye.prototype.compact=function(){return this.filter(gn)},ye.prototype.find=function(n){return this.filter(n).head()},ye.prototype.findLast=function(n){return this.reverse().find(n)},ye.prototype.invokeMap=ve(function(n,t){return typeof n=="function"?new ye(this):this.map(function(s){return Pr(s,n,t)})}),ye.prototype.reject=function(n){return this.filter(Ga(oe(n)))},ye.prototype.slice=function(n,t){n=ce(n);var s=this;return s.__filtered__&&(n>0||t<0)?new ye(s):(n<0?s=s.takeRight(-n):n&&(s=s.drop(n)),t!==r&&(t=ce(t),s=t<0?s.dropRight(-t):s.take(t-n)),s)},ye.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},ye.prototype.toArray=function(){return this.take(ne)},Hn(ye.prototype,function(n,t){var s=/^(?:filter|find|map|reject)|While$/.test(t),u=/^(?:head|last)$/.test(t),g=f[u?"take"+(t=="last"?"Right":""):t],p=u||/^find/.test(t);g&&(f.prototype[t]=function(){var k=this.__wrapped__,w=u?[1]:arguments,P=k instanceof ye,M=w[0],L=P||ge(k),$=function(he){var be=g.apply(f,ht([he],w));return u&&ee?be[0]:be};L&&s&&typeof M=="function"&&M.length!=1&&(P=L=!1);var ee=this.__chain__,le=!!this.__actions__.length,ue=p&&!ee,fe=P&&!le;if(!p&&L){k=fe?k:new ye(this);var de=n.apply(k,w);return de.__actions__.push({func:Ma,args:[$],thisArg:r}),new Sn(de,ee)}return ue&&fe?n.apply(this,w):(de=this.thru($),ue?u?de.value()[0]:de.value():de)})}),An(["pop","push","shift","sort","splice","unshift"],function(n){var t=ga[n],s=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",u=/^(?:pop|shift)$/.test(n);f.prototype[n]=function(){var g=arguments;if(u&&!this.__chain__){var p=this.value();return t.apply(ge(p)?p:[],g)}return this[s](function(k){return t.apply(ge(k)?k:[],g)})}}),Hn(ye.prototype,function(n,t){var s=f[t];if(s){var u=s.name+"";Se.call(Jt,u)||(Jt[u]=[]),Jt[u].push({name:t,func:s})}}),Jt[Ba(r,R).name]=[{name:"wrapper",func:r}],ye.prototype.clone=nv,ye.prototype.reverse=tv,ye.prototype.value=rv,f.prototype.at=jh,f.prototype.chain=Bh,f.prototype.commit=xh,f.prototype.next=qh,f.prototype.plant=Fh,f.prototype.reverse=Vh,f.prototype.toJSON=f.prototype.valueOf=f.prototype.value=Kh,f.prototype.first=f.prototype.head,_r&&(f.prototype[_r]=Dh),f},Wt=xf();Nt?((Nt.exports=Wt)._=Wt,Vi._=Wt):en._=Wt}).call(U_)}(Hr,Hr.exports)),Hr.exports}$_();Mn(na);const Sg=A.forwardRef((e,i)=>V.jsx(lr,{gap:"space-8",style:{display:"flex"},...e,ref:i}));Sg.displayName="FaktaGruppe";Sg.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var ns={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var gm;function Y_(){return gm||(gm=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",d=0;d<arguments.length;d++){var m=arguments[d];m&&(o=l(o,a.call(this,m)))}return o}function a(o){if(typeof o=="string"||typeof o=="number")return this&&this[o]||o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(this,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var m in o)i.call(o,m)&&o[m]&&(d=l(d,this&&this[m]||m));return d}function l(o,d){return d?o?o+" "+d:o+d:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(ns)),ns.exports}var W_=Y_();const z_=Hm(W_),X_="_boks_nm7fe_1",J_="_harBorderLeft_nm7fe_8",Z_="_harBorderTop_nm7fe_12",Q_={boks:X_,harBorderLeft:J_,harBorderTop:Z_};z_.bind(Q_);var ts={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var cm;function eT(){return cm||(cm=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",d=0;d<arguments.length;d++){var m=arguments[d];m&&(o=l(o,a(m)))}return o}function a(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var m in o)i.call(o,m)&&o[m]&&(d=l(d,m));return d}function l(o,d){return d?o?o+" "+d:o+d:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(ts)),ts.exports}eT();function nT(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fm={exports:{}},Mr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function tT(){if(vm)return Mr;vm=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,l,o){var d=null;if(o!==void 0&&(d=""+o),l.key!==void 0&&(d=""+l.key),"key"in l){o={};for(var m in l)m!=="key"&&(o[m]=l[m])}else o=l;return l=o.ref,{$$typeof:e,type:a,key:d,ref:l!==void 0?l:null,props:o}}return Mr.Fragment=i,Mr.jsx=r,Mr.jsxs=r,Mr}var pm;function rT(){return pm||(pm=1,fm.exports=tT()),fm.exports}var mt=rT();const aT="_autocompleteSuggestion__substring_1s9ip_1",iT="_autocompleteSuggestion__inner_1s9ip_4",Lr={autocompleteSuggestion__substring:aT,autocompleteSuggestion__inner:iT,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_1s9ip_12"};class lT extends U.Component{constructor(i){super(i),this.state={value:i.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:i}=this.props,{value:r}=this.state;i(r)}onMouseMove(){const{setSuggestionIndex:i,index:r}=this.props;i(r)}render(){const{match:i,active:r,avoidBlur:a,id:l}=this.props,{value:o}=this.state.value,d=o.toLowerCase().startsWith(i.toLowerCase());return mt.jsx("li",{id:l,role:"option","aria-selected":r,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:a,onMouseDown:a,onKeyDown:a,className:"autocompleteSuggestion typo-normal",children:d?mt.jsxs("span",{className:`${Lr.autocompleteSuggestion__inner} ${r?Lr["autocompleteSuggestion--active"]:""}`,children:[o.substring(0,i.length),mt.jsx("span",{className:Lr.autocompleteSuggestion__substring,children:o.substring(i.length)})]}):mt.jsx("span",{className:`${Lr.autocompleteSuggestion__inner} ${r?Lr["autocompleteSuggestion--active"]:""}`,children:o})})}}const sT="_autocomplete_cj8jr_1",oT="_autocomplete__suggestions_cj8jr_27",rs={autocomplete:sT,autocomplete__suggestions:oT,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_cj8jr_31"};class bw extends U.Component{input;inputRef;constructor(i){super(i),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=r=>{this.input=r},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null}))}onChange(i){const{onChange:r}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),r(i)}onSearchButtonClick(i){const{onSearchButtonClick:r}=this.props;i.preventDefault(),r&&r()}onKeyDown(i){const{shouldShowSuggestions:r}=this.state;let{activeSuggestionIndex:a}=this.state;const{suggestions:l}=this.props,o=a>-1;switch(this.setState({setAriaActiveDescendant:i.keyCode===38||i.keyCode===40}),i.keyCode){case 9:o&&r&&this.setValue(l[a]);break;case 13:o&&r?(i.preventDefault(),this.setValue(l[a])):r&&l.length===1?this.setValue(l[0]):this.setState({shouldShowSuggestions:!1});break;case 27:r&&l.length>0&&(i.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:r&&(i.preventDefault(),a=a-1===-2?-1:a-1,this.setState({activeSuggestionIndex:a}));break;case 40:r&&(i.preventDefault(),a=a+1===l.length?l.length-1:a+1,this.setState({activeSuggestionIndex:a}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const i=setTimeout(()=>{const{shouldBlur:a}=this.state;a&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:i});const{onBlur:r}=this.props;r&&r()}setSuggestionIndex(i){this.setState({activeSuggestionIndex:i}),this.clearBlurDelay()}setValue(i){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:r}=this.props;r(i)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:i,id:r,ariaLabel:a,placeholder:l,value:o,name:d,shouldFocusOnMount:m,isLoading:c}=this.props,{activeSuggestionIndex:v,setAriaActiveDescendant:h,hasFocus:y,shouldShowSuggestions:E}=this.state,_=y&&E&&i.length>0,O=h&&v>-1?`${r}-item-${v}`:void 0;return mt.jsxs("div",{className:`${rs.autocomplete} autocomplete`,"aria-expanded":_,"aria-owns":`${r}-suggestions`,"aria-haspopup":"listbox",children:[mt.jsx(hs,{variant:"primary",id:r,name:d,"aria-label":a,"aria-autocomplete":"list","aria-controls":`${r}-suggestions`,"aria-activedescendant":O,placeholder:l,value:o,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:T=>{this.inputRef=T},className:"typo-normal",autoFocus:m,label:a,hideLabel:!0,children:mt.jsx(hs.Button,{loading:c,onClick:this.onSearchButtonClick})}),mt.jsx("ul",{id:`${r}-suggestions`,role:"listbox",className:_?rs.autocomplete__suggestions:rs["autocomplete__suggestions--hidden"],children:_&&i.map((T,b)=>mt.jsx(lT,{id:`${r}-item-${b}`,index:b,value:T,match:o,active:b===v,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},T.key))})]})}}var ys=function(e,i){return ys=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(r[l]=a[l])},ys(e,i)};function Ln(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");ys(e,i);function r(){this.constructor=e}e.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}var ie=function(){return ie=Object.assign||function(e){for(var i,r=1,a=arguments.length;r<a;r++){i=arguments[r];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},ie.apply(this,arguments)};function yi(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r}function Wn(e,i,r){if(arguments.length===2)for(var a=0,l=i.length,o;a<l;a++)(o||!(a in i))&&(o||(o=Array.prototype.slice.call(i,0,a)),o[a]=i[a]);return e.concat(o||Array.prototype.slice.call(i))}function $n(e,i){var r=i&&i.cache?i.cache:vT,a=i&&i.serializer?i.serializer:cT,l=i&&i.strategy?i.strategy:mT;return l(e,{cache:r,serializer:a})}function uT(e){return e==null||typeof e=="number"||typeof e=="boolean"}function dT(e,i,r,a){var l=uT(a)?a:r(a),o=i.get(l);return typeof o>"u"&&(o=e.call(this,a),i.set(l,o)),o}function Ng(e,i,r){var a=Array.prototype.slice.call(arguments,3),l=r(a),o=i.get(l);return typeof o>"u"&&(o=e.apply(this,a),i.set(l,o)),o}function Pg(e,i,r,a,l){return r.bind(i,e,a,l)}function mT(e,i){var r=e.length===1?dT:Ng;return Pg(e,this,r,i.cache.create(),i.serializer)}function gT(e,i){return Pg(e,this,Ng,i.cache.create(),i.serializer)}var cT=function(){return JSON.stringify(arguments)},fT=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(i){return this.cache[i]},e.prototype.set=function(i,r){this.cache[i]=r},e}(),vT={create:function(){return new fT}},Yn={variadic:gT},Ee;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Ee||(Ee={}));var xe;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(xe||(xe={}));var mr;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(mr||(mr={}));function hm(e){return e.type===xe.literal}function pT(e){return e.type===xe.argument}function Ig(e){return e.type===xe.number}function Og(e){return e.type===xe.date}function jg(e){return e.type===xe.time}function Bg(e){return e.type===xe.select}function xg(e){return e.type===xe.plural}function hT(e){return e.type===xe.pound}function qg(e){return e.type===xe.tag}function Dg(e){return!!(e&&typeof e=="object"&&e.type===mr.number)}function bs(e){return!!(e&&typeof e=="object"&&e.type===mr.dateTime)}var Fg=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,kT=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function yT(e){var i={};return e.replace(kT,function(r){var a=r.length;switch(r[0]){case"G":i.era=a===4?"long":a===5?"narrow":"short";break;case"y":i.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=a===4?"long":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][a-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][a-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][a-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][a-1];break;case"s":i.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var bT=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function ET(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(bT).filter(function(E){return E.length>0}),r=[],a=0,l=i;a<l.length;a++){var o=l[a],d=o.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var m=d[0],c=d.slice(1),v=0,h=c;v<h.length;v++){var y=h[v];if(y.length===0)throw new Error("Invalid number skeleton")}r.push({stem:m,options:c})}return r}function _T(e){return e.replace(/^(.*?)-/,"")}var km=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Vg=/^(@+)?(\+|#+)?[rs]?$/g,TT=/(\*)(0+)|(#+)(0+)|(0+)/g,Kg=/^(0+)$/;function ym(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(Vg,function(r,a,l){return typeof l!="string"?(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length):l==="+"?i.minimumSignificantDigits=a.length:a[0]==="#"?i.maximumSignificantDigits=a.length:(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length+(typeof l=="string"?l.length:0)),""}),i}function Mg(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function wT(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var r=e.slice(0,2);if(r==="+!"?(i.signDisplay="always",e=e.slice(2)):r==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!Kg.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function bm(e){var i={},r=Mg(e);return r||i}function AT(e){for(var i={},r=0,a=e;r<a.length;r++){var l=a[r];switch(l.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=l.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=_T(l.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=ie(ie(ie({},i),{notation:"scientific"}),l.options.reduce(function(c,v){return ie(ie({},c),bm(v))},{}));continue;case"engineering":i=ie(ie(ie({},i),{notation:"engineering"}),l.options.reduce(function(c,v){return ie(ie({},c),bm(v))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(l.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(l.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");l.options[0].replace(TT,function(c,v,h,y,E,_){if(v)i.minimumIntegerDigits=h.length;else{if(y&&E)throw new Error("We currently do not support maximum integer digits");if(_)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Kg.test(l.stem)){i.minimumIntegerDigits=l.stem.length;continue}if(km.test(l.stem)){if(l.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");l.stem.replace(km,function(c,v,h,y,E,_){return h==="*"?i.minimumFractionDigits=v.length:y&&y[0]==="#"?i.maximumFractionDigits=y.length:E&&_?(i.minimumFractionDigits=E.length,i.maximumFractionDigits=E.length+_.length):(i.minimumFractionDigits=v.length,i.maximumFractionDigits=v.length),""});var o=l.options[0];o==="w"?i=ie(ie({},i),{trailingZeroDisplay:"stripIfInteger"}):o&&(i=ie(ie({},i),ym(o)));continue}if(Vg.test(l.stem)){i=ie(ie({},i),ym(l.stem));continue}var d=Mg(l.stem);d&&(i=ie(ie({},i),d));var m=wT(l.stem);m&&(i=ie(ie({},i),m))}return i}var Ja={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function RT(e,i){for(var r="",a=0;a<e.length;a++){var l=e.charAt(a);if(l==="j"){for(var o=0;a+1<e.length&&e.charAt(a+1)===l;)o++,a++;var d=1+(o&1),m=o<2?1:3+(o>>1),c="a",v=ST(i);for((v=="H"||v=="k")&&(m=0);m-- >0;)r+=c;for(;d-- >0;)r=v+r}else l==="J"?r+="H":r+=l}return r}function ST(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,a;r!=="root"&&(a=e.maximize().region);var l=Ja[a||""]||Ja[r||""]||Ja["".concat(r,"-001")]||Ja["001"];return l[0]}var as,NT=new RegExp("^".concat(Fg.source,"*")),PT=new RegExp("".concat(Fg.source,"*$"));function _e(e,i){return{start:e,end:i}}var IT=!!String.prototype.startsWith&&"_a".startsWith("a",1),OT=!!String.fromCodePoint,jT=!!Object.fromEntries,BT=!!String.prototype.codePointAt,xT=!!String.prototype.trimStart,qT=!!String.prototype.trimEnd,DT=!!Number.isSafeInteger,FT=DT?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Es=!0;try{var VT=Cg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Es=((as=VT.exec("a"))===null||as===void 0?void 0:as[0])==="a"}catch{Es=!1}var Em=IT?function(e,i,r){return e.startsWith(i,r)}:function(e,i,r){return e.slice(r,r+i.length)===i},_s=OT?String.fromCodePoint:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var r="",a=e.length,l=0,o;a>l;){if(o=e[l++],o>1114111)throw RangeError(o+" is not a valid code point");r+=o<65536?String.fromCharCode(o):String.fromCharCode(((o-=65536)>>10)+55296,o%1024+56320)}return r},_m=jT?Object.fromEntries:function(e){for(var i={},r=0,a=e;r<a.length;r++){var l=a[r],o=l[0],d=l[1];i[o]=d}return i},Lg=BT?function(e,i){return e.codePointAt(i)}:function(e,i){var r=e.length;if(!(i<0||i>=r)){var a=e.charCodeAt(i),l;return a<55296||a>56319||i+1===r||(l=e.charCodeAt(i+1))<56320||l>57343?a:(a-55296<<10)+(l-56320)+65536}},KT=xT?function(e){return e.trimStart()}:function(e){return e.replace(NT,"")},MT=qT?function(e){return e.trimEnd()}:function(e){return e.replace(PT,"")};function Cg(e,i){return new RegExp(e,i)}var Ts;if(Es){var Tm=Cg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Ts=function(e,i){var r;Tm.lastIndex=i;var a=Tm.exec(e);return(r=a[1])!==null&&r!==void 0?r:""}}else Ts=function(e,i){for(var r=[];;){var a=Lg(e,i);if(a===void 0||Hg(a)||GT(a))break;r.push(a),i+=a>=65536?2:1}return _s.apply(void 0,r)};var LT=function(){function e(i,r){r===void 0&&(r={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,r,a){for(var l=[];!this.isEOF();){var o=this.char();if(o===123){var d=this.parseArgument(i,a);if(d.err)return d;l.push(d.val)}else{if(o===125&&i>0)break;if(o===35&&(r==="plural"||r==="selectordinal")){var m=this.clonePosition();this.bump(),l.push({type:xe.pound,location:_e(m,this.clonePosition())})}else if(o===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(Ee.UNMATCHED_CLOSING_TAG,_e(this.clonePosition(),this.clonePosition()))}else if(o===60&&!this.ignoreTag&&ws(this.peek()||0)){var d=this.parseTag(i,r);if(d.err)return d;l.push(d.val)}else{var d=this.parseLiteral(i,r);if(d.err)return d;l.push(d.val)}}}return{val:l,err:null}},e.prototype.parseTag=function(i,r){var a=this.clonePosition();this.bump();var l=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:xe.literal,value:"<".concat(l,"/>"),location:_e(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var o=this.parseMessage(i+1,r,!0);if(o.err)return o;var d=o.val,m=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!ws(this.char()))return this.error(Ee.INVALID_TAG,_e(m,this.clonePosition()));var c=this.clonePosition(),v=this.parseTagName();return l!==v?this.error(Ee.UNMATCHED_CLOSING_TAG,_e(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:xe.tag,value:l,children:d,location:_e(a,this.clonePosition())},err:null}:this.error(Ee.INVALID_TAG,_e(m,this.clonePosition())))}else return this.error(Ee.UNCLOSED_TAG,_e(a,this.clonePosition()))}else return this.error(Ee.INVALID_TAG,_e(a,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&HT(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,r){for(var a=this.clonePosition(),l="";;){var o=this.tryParseQuote(r);if(o){l+=o;continue}var d=this.tryParseUnquoted(i,r);if(d){l+=d;continue}var m=this.tryParseLeftAngleBracket();if(m){l+=m;continue}break}var c=_e(a,this.clonePosition());return{val:{type:xe.literal,value:l,location:c},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!CT(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(a);this.bump()}return _s.apply(void 0,r)},e.prototype.tryParseUnquoted=function(i,r){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(r==="plural"||r==="selectordinal")||a===125&&i>0?null:(this.bump(),_s(a))},e.prototype.parseArgument=function(i,r){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,_e(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Ee.EMPTY_ARGUMENT,_e(a,this.clonePosition()));var l=this.parseIdentifierIfPossible().value;if(!l)return this.error(Ee.MALFORMED_ARGUMENT,_e(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,_e(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:xe.argument,value:l,location:_e(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,_e(a,this.clonePosition())):this.parseArgumentOptions(i,r,l,a);default:return this.error(Ee.MALFORMED_ARGUMENT,_e(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),r=this.offset(),a=Ts(this.message,r),l=r+a.length;this.bumpTo(l);var o=this.clonePosition(),d=_e(i,o);return{value:a,location:d}},e.prototype.parseArgumentOptions=function(i,r,a,l){var o,d=this.clonePosition(),m=this.parseIdentifierIfPossible().value,c=this.clonePosition();switch(m){case"":return this.error(Ee.EXPECT_ARGUMENT_TYPE,_e(d,c));case"number":case"date":case"time":{this.bumpSpace();var v=null;if(this.bumpIf(",")){this.bumpSpace();var h=this.clonePosition(),y=this.parseSimpleArgStyleIfPossible();if(y.err)return y;var E=MT(y.val);if(E.length===0)return this.error(Ee.EXPECT_ARGUMENT_STYLE,_e(this.clonePosition(),this.clonePosition()));var _=_e(h,this.clonePosition());v={style:E,styleLocation:_}}var O=this.tryParseArgumentClose(l);if(O.err)return O;var T=_e(l,this.clonePosition());if(v&&Em(v?.style,"::",0)){var b=KT(v.style.slice(2));if(m==="number"){var y=this.parseNumberSkeletonFromString(b,v.styleLocation);return y.err?y:{val:{type:xe.number,value:a,location:T,style:y.val},err:null}}else{if(b.length===0)return this.error(Ee.EXPECT_DATE_TIME_SKELETON,T);var R=b;this.locale&&(R=RT(b,this.locale));var E={type:mr.dateTime,pattern:R,location:v.styleLocation,parsedOptions:this.shouldParseSkeletons?yT(R):{}},j=m==="date"?xe.date:xe.time;return{val:{type:j,value:a,location:T,style:E},err:null}}}return{val:{type:m==="number"?xe.number:m==="date"?xe.date:xe.time,value:a,location:T,style:(o=v?.style)!==null&&o!==void 0?o:null},err:null}}case"plural":case"selectordinal":case"select":{var N=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Ee.EXPECT_SELECT_ARGUMENT_OPTIONS,_e(N,ie({},N)));this.bumpSpace();var H=this.parseIdentifierIfPossible(),I=0;if(m!=="select"&&H.value==="offset"){if(!this.bumpIf(":"))return this.error(Ee.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,_e(this.clonePosition(),this.clonePosition()));this.bumpSpace();var y=this.tryParseDecimalInteger(Ee.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ee.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(y.err)return y;this.bumpSpace(),H=this.parseIdentifierIfPossible(),I=y.val}var C=this.tryParsePluralOrSelectOptions(i,m,r,H);if(C.err)return C;var O=this.tryParseArgumentClose(l);if(O.err)return O;var x=_e(l,this.clonePosition());return m==="select"?{val:{type:xe.select,value:a,options:_m(C.val),location:x},err:null}:{val:{type:xe.plural,value:a,options:_m(C.val),offset:I,pluralType:m==="plural"?"cardinal":"ordinal",location:x},err:null}}default:return this.error(Ee.INVALID_ARGUMENT_TYPE,_e(d,c))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,_e(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,r=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var l=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Ee.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,_e(l,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,r){var a=[];try{a=ET(i)}catch{return this.error(Ee.INVALID_NUMBER_SKELETON,r)}return{val:{type:mr.number,tokens:a,location:r,parsedOptions:this.shouldParseSkeletons?AT(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,r,a,l){for(var o,d=!1,m=[],c=new Set,v=l.value,h=l.location;;){if(v.length===0){var y=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var E=this.tryParseDecimalInteger(Ee.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ee.INVALID_PLURAL_ARGUMENT_SELECTOR);if(E.err)return E;h=_e(y,this.clonePosition()),v=this.message.slice(y.offset,this.offset())}else break}if(c.has(v))return this.error(r==="select"?Ee.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Ee.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,h);v==="other"&&(d=!0),this.bumpSpace();var _=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?Ee.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Ee.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,_e(this.clonePosition(),this.clonePosition()));var O=this.parseMessage(i+1,r,a);if(O.err)return O;var T=this.tryParseArgumentClose(_);if(T.err)return T;m.push([v,{value:O.val,location:_e(_,this.clonePosition())}]),c.add(v),this.bumpSpace(),o=this.parseIdentifierIfPossible(),v=o.value,h=o.location}return m.length===0?this.error(r==="select"?Ee.EXPECT_SELECT_ARGUMENT_SELECTOR:Ee.EXPECT_PLURAL_ARGUMENT_SELECTOR,_e(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(Ee.MISSING_OTHER_CLAUSE,_e(this.clonePosition(),this.clonePosition())):{val:m,err:null}},e.prototype.tryParseDecimalInteger=function(i,r){var a=1,l=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var o=!1,d=0;!this.isEOF();){var m=this.char();if(m>=48&&m<=57)o=!0,d=d*10+(m-48),this.bump();else break}var c=_e(l,this.clonePosition());return o?(d*=a,FT(d)?{val:d,err:null}:this.error(r,c)):this.error(i,c)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var r=Lg(this.message,i);if(r===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(i,r){return{val:null,err:{kind:i,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Em(this.message,i,this.offset())){for(var r=0;r<i.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var r=this.offset(),a=this.message.indexOf(i,r);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var r=this.offset();if(r===i)break;if(r>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Hg(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),r=this.offset(),a=this.message.charCodeAt(r+(i>=65536?2:1));return a??null},e}();function ws(e){return e>=97&&e<=122||e>=65&&e<=90}function CT(e){return ws(e)||e===47}function HT(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Hg(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function GT(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function As(e){e.forEach(function(i){if(delete i.location,Bg(i)||xg(i))for(var r in i.options)delete i.options[r].location,As(i.options[r].value);else Ig(i)&&Dg(i.style)||(Og(i)||jg(i))&&bs(i.style)?delete i.style.location:qg(i)&&As(i.children)})}function UT(e,i){i===void 0&&(i={}),i=ie({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var r=new LT(e,i).parse();if(r.err){var a=SyntaxError(Ee[r.err.kind]);throw a.location=r.err.location,a.originalMessage=r.err.message,a}return i?.captureLocation||As(r.val),r.val}var Jn;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Jn||(Jn={}));var St=function(e){Ln(i,e);function i(r,a,l){var o=e.call(this,r)||this;return o.code=a,o.originalMessage=l,o}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),wm=function(e){Ln(i,e);function i(r,a,l,o){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(a,'". Options are "').concat(Object.keys(l).join('", "'),'"'),Jn.INVALID_VALUE,o)||this}return i}(St),$T=function(e){Ln(i,e);function i(r,a,l){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(a),Jn.INVALID_VALUE,l)||this}return i}(St),YT=function(e){Ln(i,e);function i(r,a){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(a,'"'),Jn.MISSING_VALUE,a)||this}return i}(St),on;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(on||(on={}));function WT(e){return e.length<2?e:e.reduce(function(i,r){var a=i[i.length-1];return!a||a.type!==on.literal||r.type!==on.literal?i.push(r):a.value+=r.value,i},[])}function Gg(e){return typeof e=="function"}function ti(e,i,r,a,l,o,d){if(e.length===1&&hm(e[0]))return[{type:on.literal,value:e[0].value}];for(var m=[],c=0,v=e;c<v.length;c++){var h=v[c];if(hm(h)){m.push({type:on.literal,value:h.value});continue}if(hT(h)){typeof o=="number"&&m.push({type:on.literal,value:r.getNumberFormat(i).format(o)});continue}var y=h.value;if(!(l&&y in l))throw new YT(y,d);var E=l[y];if(pT(h)){(!E||typeof E=="string"||typeof E=="number")&&(E=typeof E=="string"||typeof E=="number"?String(E):""),m.push({type:typeof E=="string"?on.literal:on.object,value:E});continue}if(Og(h)){var _=typeof h.style=="string"?a.date[h.style]:bs(h.style)?h.style.parsedOptions:void 0;m.push({type:on.literal,value:r.getDateTimeFormat(i,_).format(E)});continue}if(jg(h)){var _=typeof h.style=="string"?a.time[h.style]:bs(h.style)?h.style.parsedOptions:a.time.medium;m.push({type:on.literal,value:r.getDateTimeFormat(i,_).format(E)});continue}if(Ig(h)){var _=typeof h.style=="string"?a.number[h.style]:Dg(h.style)?h.style.parsedOptions:void 0;_&&_.scale&&(E=E*(_.scale||1)),m.push({type:on.literal,value:r.getNumberFormat(i,_).format(E)});continue}if(qg(h)){var O=h.children,T=h.value,b=l[T];if(!Gg(b))throw new $T(T,"function",d);var R=ti(O,i,r,a,l,o),j=b(R.map(function(I){return I.value}));Array.isArray(j)||(j=[j]),m.push.apply(m,j.map(function(I){return{type:typeof I=="string"?on.literal:on.object,value:I}}))}if(Bg(h)){var N=h.options[E]||h.options.other;if(!N)throw new wm(h.value,E,Object.keys(h.options),d);m.push.apply(m,ti(N.value,i,r,a,l));continue}if(xg(h)){var N=h.options["=".concat(E)];if(!N){if(!Intl.PluralRules)throw new St(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Jn.MISSING_INTL_API,d);var H=r.getPluralRules(i,{type:h.pluralType}).select(E-(h.offset||0));N=h.options[H]||h.options.other}if(!N)throw new wm(h.value,E,Object.keys(h.options),d);m.push.apply(m,ti(N.value,i,r,a,l,E-(h.offset||0)));continue}}return WT(m)}function zT(e,i){return i?ie(ie(ie({},e||{}),i||{}),Object.keys(e).reduce(function(r,a){return r[a]=ie(ie({},e[a]),i[a]||{}),r},{})):e}function XT(e,i){return i?Object.keys(e).reduce(function(r,a){return r[a]=zT(e[a],i[a]),r},ie({},e)):e}function is(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,r){e[i]=r}}}}}function JT(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:$n(function(){for(var i,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((i=Intl.NumberFormat).bind.apply(i,Wn([void 0],r,!1)))},{cache:is(e.number),strategy:Yn.variadic}),getDateTimeFormat:$n(function(){for(var i,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((i=Intl.DateTimeFormat).bind.apply(i,Wn([void 0],r,!1)))},{cache:is(e.dateTime),strategy:Yn.variadic}),getPluralRules:$n(function(){for(var i,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((i=Intl.PluralRules).bind.apply(i,Wn([void 0],r,!1)))},{cache:is(e.pluralRules),strategy:Yn.variadic})}}var Ug=function(){function e(i,r,a,l){r===void 0&&(r=e.defaultLocale);var o=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(c){var v=o.formatToParts(c);if(v.length===1)return v[0].value;var h=v.reduce(function(y,E){return!y.length||E.type!==on.literal||typeof y[y.length-1]!="string"?y.push(E.value):y[y.length-1]+=E.value,y},[]);return h.length<=1?h[0]||"":h},this.formatToParts=function(c){return ti(o.ast,o.locales,o.formatters,o.formats,c,void 0,o.message)},this.resolvedOptions=function(){var c;return{locale:((c=o.resolvedLocale)===null||c===void 0?void 0:c.toString())||Intl.NumberFormat.supportedLocalesOf(o.locales)[0]}},this.getAst=function(){return o.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=l||{};d.formatters;var m=yi(d,["formatters"]);this.ast=e.__parse(i,ie(ie({},m),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=XT(e.formats,a),this.formatters=l&&l.formatters||JT(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(i);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=UT,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Ct;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Ct||(Ct={}));var ta=function(e){Ln(i,e);function i(r,a,l){var o=this,d=l?l instanceof Error?l:new Error(String(l)):void 0;return o=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(a,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,o.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(o,i),o}return i}(Error),ZT=function(e){Ln(i,e);function i(r,a){return e.call(this,Ct.UNSUPPORTED_FORMATTER,r,a)||this}return i}(ta),QT=function(e){Ln(i,e);function i(r,a){return e.call(this,Ct.INVALID_CONFIG,r,a)||this}return i}(ta),Am=function(e){Ln(i,e);function i(r,a){return e.call(this,Ct.MISSING_DATA,r,a)||this}return i}(ta),xn=function(e){Ln(i,e);function i(r,a,l){var o=e.call(this,Ct.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(a,`
`),l)||this;return o.locale=a,o}return i}(ta),ls=function(e){Ln(i,e);function i(r,a,l,o){var d=e.call(this,"".concat(r,`
MessageID: `).concat(l?.id,`
Default Message: `).concat(l?.defaultMessage,`
Description: `).concat(l?.description,`
`),a,o)||this;return d.descriptor=l,d.locale=a,d}return i}(xn),e5=function(e){Ln(i,e);function i(r,a){var l=e.call(this,Ct.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(a,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(o){var d;return(d=o.value)!==null&&d!==void 0?d:JSON.stringify(o)}).join(),")"):"id"," as fallback."))||this;return l.descriptor=r,l}return i}(ta);function n5(e,i,r){if(r===void 0&&(r=Error),!e)throw new r(i)}function pr(e,i,r){return r===void 0&&(r={}),i.reduce(function(a,l){return l in e?a[l]=e[l]:l in r&&(a[l]=r[l]),a},{})}var t5=function(e){},r5=function(e){},$g={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:t5,onWarn:r5};function Yg(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Ft(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,r){e[i]=r}}}}}function a5(e){e===void 0&&(e=Yg());var i=Intl.RelativeTimeFormat,r=Intl.ListFormat,a=Intl.DisplayNames,l=$n(function(){for(var m,c=[],v=0;v<arguments.length;v++)c[v]=arguments[v];return new((m=Intl.DateTimeFormat).bind.apply(m,Wn([void 0],c,!1)))},{cache:Ft(e.dateTime),strategy:Yn.variadic}),o=$n(function(){for(var m,c=[],v=0;v<arguments.length;v++)c[v]=arguments[v];return new((m=Intl.NumberFormat).bind.apply(m,Wn([void 0],c,!1)))},{cache:Ft(e.number),strategy:Yn.variadic}),d=$n(function(){for(var m,c=[],v=0;v<arguments.length;v++)c[v]=arguments[v];return new((m=Intl.PluralRules).bind.apply(m,Wn([void 0],c,!1)))},{cache:Ft(e.pluralRules),strategy:Yn.variadic});return{getDateTimeFormat:l,getNumberFormat:o,getMessageFormat:$n(function(m,c,v,h){return new Ug(m,c,v,ie({formatters:{getNumberFormat:o,getDateTimeFormat:l,getPluralRules:d}},h||{}))},{cache:Ft(e.message),strategy:Yn.variadic}),getRelativeTimeFormat:$n(function(){for(var m=[],c=0;c<arguments.length;c++)m[c]=arguments[c];return new(i.bind.apply(i,Wn([void 0],m,!1)))},{cache:Ft(e.relativeTime),strategy:Yn.variadic}),getPluralRules:d,getListFormat:$n(function(){for(var m=[],c=0;c<arguments.length;c++)m[c]=arguments[c];return new(r.bind.apply(r,Wn([void 0],m,!1)))},{cache:Ft(e.list),strategy:Yn.variadic}),getDisplayNames:$n(function(){for(var m=[],c=0;c<arguments.length;c++)m[c]=arguments[c];return new(a.bind.apply(a,Wn([void 0],m,!1)))},{cache:Ft(e.displayNames),strategy:Yn.variadic})}}function Ys(e,i,r,a){var l=e&&e[i],o;if(l&&(o=l[r]),o)return o;a(new ZT("No ".concat(i," format named: ").concat(r)))}function Za(e,i){return Object.keys(e).reduce(function(r,a){return r[a]=ie({timeZone:i},e[a]),r},{})}function Rm(e,i){var r=Object.keys(ie(ie({},e),i));return r.reduce(function(a,l){return a[l]=ie(ie({},e[l]||{}),i[l]||{}),a},{})}function Sm(e,i){if(!i)return e;var r=Ug.formats;return ie(ie(ie({},r),e),{date:Rm(Za(r.date,i),Za(e.date||{},i)),time:Rm(Za(r.time,i),Za(e.time||{},i))})}var Rs=function(e,i,r,a,l){var o=e.locale,d=e.formats,m=e.messages,c=e.defaultLocale,v=e.defaultFormats,h=e.fallbackOnEmptyString,y=e.onError,E=e.timeZone,_=e.defaultRichTextElements;r===void 0&&(r={id:""});var O=r.id,T=r.defaultMessage;n5(!!O,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var b=String(O),R=m&&Object.prototype.hasOwnProperty.call(m,b)&&m[b];if(Array.isArray(R)&&R.length===1&&R[0].type===xe.literal)return R[0].value;if(!a&&R&&typeof R=="string"&&!_)return R.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=ie(ie({},_),a||{}),d=Sm(d,E),v=Sm(v,E),!R){if(h===!1&&R==="")return R;if((!T||o&&o.toLowerCase()!==c.toLowerCase())&&y(new e5(r,o)),T)try{var j=i.getMessageFormat(T,c,v,l);return j.format(a)}catch(N){return y(new ls('Error formatting default message for: "'.concat(b,'", rendering default message verbatim'),o,r,N)),typeof T=="string"?T:b}return b}try{var j=i.getMessageFormat(R,o,d,ie({formatters:i},l||{}));return j.format(a)}catch(N){y(new ls('Error formatting message: "'.concat(b,'", using ').concat(T?"default message":"id"," as fallback."),o,r,N))}if(T)try{var j=i.getMessageFormat(T,c,v,l);return j.format(a)}catch(N){y(new ls('Error formatting the default message for: "'.concat(b,'", rendering message verbatim'),o,r,N))}return typeof R=="string"?R:typeof T=="string"?T:b},i5=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function ra(e,i,r,a){var l=e.locale,o=e.formats,d=e.onError,m=e.timeZone;a===void 0&&(a={});var c=a.format,v=ie(ie({},m&&{timeZone:m}),c&&Ys(o,i,c,d)),h=pr(a,i5,v);return i==="time"&&!h.hour&&!h.minute&&!h.second&&!h.timeStyle&&!h.dateStyle&&(h=ie(ie({},h),{hour:"numeric",minute:"numeric"})),r(l,h)}function l5(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var l=r[0],o=r[1],d=o===void 0?{}:o,m=typeof l=="string"?new Date(l||0):l;try{return ra(e,"date",i,d).format(m)}catch(c){e.onError(new xn("Error formatting date.",e.locale,c))}return String(m)}function s5(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var l=r[0],o=r[1],d=o===void 0?{}:o,m=typeof l=="string"?new Date(l||0):l;try{return ra(e,"time",i,d).format(m)}catch(c){e.onError(new xn("Error formatting time.",e.locale,c))}return String(m)}function o5(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var l=r[0],o=r[1],d=r[2],m=d===void 0?{}:d,c=typeof l=="string"?new Date(l||0):l,v=typeof o=="string"?new Date(o||0):o;try{return ra(e,"dateTimeRange",i,m).formatRange(c,v)}catch(h){e.onError(new xn("Error formatting date time range.",e.locale,h))}return String(c)}function u5(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var l=r[0],o=r[1],d=o===void 0?{}:o,m=typeof l=="string"?new Date(l||0):l;try{return ra(e,"date",i,d).formatToParts(m)}catch(c){e.onError(new xn("Error formatting date.",e.locale,c))}return[]}function d5(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var l=r[0],o=r[1],d=o===void 0?{}:o,m=typeof l=="string"?new Date(l||0):l;try{return ra(e,"time",i,d).formatToParts(m)}catch(c){e.onError(new xn("Error formatting time.",e.locale,c))}return[]}var m5=["style","type","fallback","languageDisplay"];function g5(e,i,r,a){var l=e.locale,o=e.onError,d=Intl.DisplayNames;d||o(new St(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Jn.MISSING_INTL_API));var m=pr(a,m5);try{return i(l,m).of(r)}catch(c){o(new xn("Error formatting display name.",l,c))}}var c5=["type","style"],Nm=Date.now();function f5(e){return"".concat(Nm,"_").concat(e,"_").concat(Nm)}function v5(e,i,r,a){a===void 0&&(a={});var l=Wg(e,i,r,a).reduce(function(o,d){var m=d.value;return typeof m!="string"?o.push(m):typeof o[o.length-1]=="string"?o[o.length-1]+=m:o.push(m),o},[]);return l.length===1?l[0]:l.length===0?"":l}function Wg(e,i,r,a){var l=e.locale,o=e.onError;a===void 0&&(a={});var d=Intl.ListFormat;d||o(new St(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Jn.MISSING_INTL_API));var m=pr(a,c5);try{var c={},v=r.map(function(h,y){if(typeof h=="object"){var E=f5(y);return c[E]=h,E}return String(h)});return i(l,m).formatToParts(v).map(function(h){return h.type==="literal"?h:ie(ie({},h),{value:c[h.value]||h.value})})}catch(h){o(new xn("Error formatting list.",l,h))}return r}var p5=["type"];function h5(e,i,r,a){var l=e.locale,o=e.onError;a===void 0&&(a={}),Intl.PluralRules||o(new St(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Jn.MISSING_INTL_API));var d=pr(a,p5);try{return i(l,d).select(r)}catch(m){o(new xn("Error formatting plural.",l,m))}return"other"}var k5=["numeric","style"];function y5(e,i,r){var a=e.locale,l=e.formats,o=e.onError;r===void 0&&(r={});var d=r.format,m=!!d&&Ys(l,"relative",d,o)||{},c=pr(r,k5,m);return i(a,c)}function b5(e,i,r,a,l){l===void 0&&(l={}),a||(a="second");var o=Intl.RelativeTimeFormat;o||e.onError(new St(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Jn.MISSING_INTL_API));try{return y5(e,i,l).format(r,a)}catch(d){e.onError(new xn("Error formatting relative time.",e.locale,d))}return String(r)}var E5=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function zg(e,i,r){var a=e.locale,l=e.formats,o=e.onError;r===void 0&&(r={});var d=r.format,m=d&&Ys(l,"number",d,o)||{},c=pr(r,E5,m);return i(a,c)}function _5(e,i,r,a){a===void 0&&(a={});try{return zg(e,i,a).format(r)}catch(l){e.onError(new xn("Error formatting number.",e.locale,l))}return String(r)}function T5(e,i,r,a){a===void 0&&(a={});try{return zg(e,i,a).formatToParts(r)}catch(l){e.onError(new xn("Error formatting number.",e.locale,l))}return[]}function w5(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function A5(e){e.onWarn&&e.defaultRichTextElements&&w5(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function R5(e,i){var r=a5(i),a=ie(ie({},$g),e),l=a.locale,o=a.defaultLocale,d=a.onError;return l?!Intl.NumberFormat.supportedLocalesOf(l).length&&d?d(new Am('Missing locale data for locale: "'.concat(l,'" in Intl.NumberFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(l).length&&d&&d(new Am('Missing locale data for locale: "'.concat(l,'" in Intl.DateTimeFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new QT('"locale" was not configured, using "'.concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),A5(a),ie(ie({},a),{formatters:r,formatNumber:_5.bind(null,a,r.getNumberFormat),formatNumberToParts:T5.bind(null,a,r.getNumberFormat),formatRelativeTime:b5.bind(null,a,r.getRelativeTimeFormat),formatDate:l5.bind(null,a,r.getDateTimeFormat),formatDateToParts:u5.bind(null,a,r.getDateTimeFormat),formatTime:s5.bind(null,a,r.getDateTimeFormat),formatDateTimeRange:o5.bind(null,a,r.getDateTimeFormat),formatTimeToParts:d5.bind(null,a,r.getDateTimeFormat),formatPlural:h5.bind(null,a,r.getPluralRules),formatMessage:Rs.bind(null,a,r),$t:Rs.bind(null,a,r),formatList:v5.bind(null,a,r.getListFormat),formatListToParts:Wg.bind(null,a,r.getListFormat),formatDisplayName:g5.bind(null,a,r.getDisplayNames)})}function S5(e,i,r){if(r===void 0&&(r=Error),!e)throw new r(i)}function N5(e){S5(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var P5=ie(ie({},$g),{textComponent:A.Fragment}),I5={key:42},O5=function(e){return A.isValidElement(e)?A.createElement(A.Fragment,I5,e):e},j5=function(e){var i;return(i=A.Children.map(e,O5))!==null&&i!==void 0?i:[]};function B5(e){return function(i){return e(A.Children.toArray(i))}}var Pm={exports:{}},Re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function x5(){if(Im)return Re;Im=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,l=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,m=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,v=e?Symbol.for("react.concurrent_mode"):60111,h=e?Symbol.for("react.forward_ref"):60112,y=e?Symbol.for("react.suspense"):60113,E=e?Symbol.for("react.suspense_list"):60120,_=e?Symbol.for("react.memo"):60115,O=e?Symbol.for("react.lazy"):60116,T=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,R=e?Symbol.for("react.responder"):60118,j=e?Symbol.for("react.scope"):60119;function N(I){if(typeof I=="object"&&I!==null){var C=I.$$typeof;switch(C){case i:switch(I=I.type,I){case c:case v:case a:case o:case l:case y:return I;default:switch(I=I&&I.$$typeof,I){case m:case h:case O:case _:case d:return I;default:return C}}case r:return C}}}function H(I){return N(I)===v}return Re.AsyncMode=c,Re.ConcurrentMode=v,Re.ContextConsumer=m,Re.ContextProvider=d,Re.Element=i,Re.ForwardRef=h,Re.Fragment=a,Re.Lazy=O,Re.Memo=_,Re.Portal=r,Re.Profiler=o,Re.StrictMode=l,Re.Suspense=y,Re.isAsyncMode=function(I){return H(I)||N(I)===c},Re.isConcurrentMode=H,Re.isContextConsumer=function(I){return N(I)===m},Re.isContextProvider=function(I){return N(I)===d},Re.isElement=function(I){return typeof I=="object"&&I!==null&&I.$$typeof===i},Re.isForwardRef=function(I){return N(I)===h},Re.isFragment=function(I){return N(I)===a},Re.isLazy=function(I){return N(I)===O},Re.isMemo=function(I){return N(I)===_},Re.isPortal=function(I){return N(I)===r},Re.isProfiler=function(I){return N(I)===o},Re.isStrictMode=function(I){return N(I)===l},Re.isSuspense=function(I){return N(I)===y},Re.isValidElementType=function(I){return typeof I=="string"||typeof I=="function"||I===a||I===v||I===o||I===l||I===y||I===E||typeof I=="object"&&I!==null&&(I.$$typeof===O||I.$$typeof===_||I.$$typeof===d||I.$$typeof===m||I.$$typeof===h||I.$$typeof===b||I.$$typeof===R||I.$$typeof===j||I.$$typeof===T)},Re.typeOf=N,Re}var Om;function q5(){return Om||(Om=1,Pm.exports=x5()),Pm.exports}var ss,jm;function D5(){if(jm)return ss;jm=1;var e=q5(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[e.ForwardRef]=a,o[e.Memo]=l;function d(O){return e.isMemo(O)?l:o[O.$$typeof]||i}var m=Object.defineProperty,c=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,E=Object.prototype;function _(O,T,b){if(typeof T!="string"){if(E){var R=y(T);R&&R!==E&&_(O,R,b)}var j=c(T);v&&(j=j.concat(v(T)));for(var N=d(O),H=d(T),I=0;I<j.length;++I){var C=j[I];if(!r[C]&&!(b&&b[C])&&!(H&&H[C])&&!(N&&N[C])){var x=h(T,C);try{m(O,C,x)}catch{}}}}return O}return ss=_,ss}D5();var Ws=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=A.createContext(null)):A.createContext(null);Ws.Consumer;Ws.Provider;var F5=Ws;function Xg(){var e=A.useContext(F5);return N5(e),e}var Ss;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Ss||(Ss={}));var Ns;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Ns||(Ns={}));function Jg(e){var i=function(r){var a=Xg(),l=r.value,o=r.children,d=yi(r,["value","children"]),m=typeof l=="string"?new Date(l||0):l,c=e==="formatDate"?a.formatDateToParts(m,d):a.formatTimeToParts(m,d);return o(c)};return i.displayName=Ns[e],i}function aa(e){var i=function(r){var a=Xg(),l=r.value,o=r.children,d=yi(r,["value","children"]),m=a[e](l,d);if(typeof o=="function")return o(m);var c=a.textComponent||A.Fragment;return A.createElement(c,null,m)};return i.displayName=Ss[e],i}function Zg(e){return e&&Object.keys(e).reduce(function(i,r){var a=e[r];return i[r]=Gg(a)?B5(a):a,i},{})}var Bm=function(e,i,r,a){for(var l=[],o=4;o<arguments.length;o++)l[o-4]=arguments[o];var d=Zg(a),m=Rs.apply(void 0,Wn([e,i,r,d],l,!1));return Array.isArray(m)?j5(m):m},V5=function(e,i){var r=e.defaultRichTextElements,a=yi(e,["defaultRichTextElements"]),l=Zg(r),o=R5(ie(ie(ie({},P5),a),{defaultRichTextElements:l}),i),d={locale:o.locale,timeZone:o.timeZone,fallbackOnEmptyString:o.fallbackOnEmptyString,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:l};return ie(ie({},o),{formatMessage:Bm.bind(null,d,o.formatters),$t:Bm.bind(null,d,o.formatters)})};aa("formatDate");aa("formatTime");aa("formatNumber");aa("formatList");aa("formatDisplayName");Jg("formatDate");Jg("formatTime");function zs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ps={exports:{}},K5=Ps.exports,xm;function M5(){return xm||(xm=1,function(e,i){(function(r,a){e.exports=a()})(K5,function(){var r,a,l=1e3,o=6e4,d=36e5,m=864e5,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v=31536e6,h=2628e6,y=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,E={years:v,months:h,days:m,hours:d,minutes:o,seconds:l,milliseconds:1,weeks:6048e5},_=function(C){return C instanceof H},O=function(C,x,q){return new H(C,q,x.$l)},T=function(C){return a.p(C)+"s"},b=function(C){return C<0},R=function(C){return b(C)?Math.ceil(C):Math.floor(C)},j=function(C){return Math.abs(C)},N=function(C,x){return C?b(C)?{negative:!0,format:""+j(C)+x}:{negative:!1,format:""+C+x}:{negative:!1,format:""}},H=function(){function C(q,z,Q){var J=this;if(this.$d={},this.$l=Q,q===void 0&&(this.$ms=0,this.parseFromMilliseconds()),z)return O(q*E[T(z)],this);if(typeof q=="number")return this.$ms=q,this.parseFromMilliseconds(),this;if(typeof q=="object")return Object.keys(q).forEach(function(D){J.$d[T(D)]=q[D]}),this.calMilliseconds(),this;if(typeof q=="string"){var Z=q.match(y);if(Z){var K=Z.slice(2).map(function(D){return D!=null?Number(D):0});return this.$d.years=K[0],this.$d.months=K[1],this.$d.weeks=K[2],this.$d.days=K[3],this.$d.hours=K[4],this.$d.minutes=K[5],this.$d.seconds=K[6],this.calMilliseconds(),this}}return this}var x=C.prototype;return x.calMilliseconds=function(){var q=this;this.$ms=Object.keys(this.$d).reduce(function(z,Q){return z+(q.$d[Q]||0)*E[Q]},0)},x.parseFromMilliseconds=function(){var q=this.$ms;this.$d.years=R(q/v),q%=v,this.$d.months=R(q/h),q%=h,this.$d.days=R(q/m),q%=m,this.$d.hours=R(q/d),q%=d,this.$d.minutes=R(q/o),q%=o,this.$d.seconds=R(q/l),q%=l,this.$d.milliseconds=q},x.toISOString=function(){var q=N(this.$d.years,"Y"),z=N(this.$d.months,"M"),Q=+this.$d.days||0;this.$d.weeks&&(Q+=7*this.$d.weeks);var J=N(Q,"D"),Z=N(this.$d.hours,"H"),K=N(this.$d.minutes,"M"),D=this.$d.seconds||0;this.$d.milliseconds&&(D+=this.$d.milliseconds/1e3,D=Math.round(1e3*D)/1e3);var X=N(D,"S"),te=q.negative||z.negative||J.negative||Z.negative||K.negative||X.negative,W=Z.format||K.format||X.format?"T":"",G=(te?"-":"")+"P"+q.format+z.format+J.format+W+Z.format+K.format+X.format;return G==="P"||G==="-P"?"P0D":G},x.toJSON=function(){return this.toISOString()},x.format=function(q){var z=q||"YYYY-MM-DDTHH:mm:ss",Q={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return z.replace(c,function(J,Z){return Z||String(Q[J])})},x.as=function(q){return this.$ms/E[T(q)]},x.get=function(q){var z=this.$ms,Q=T(q);return Q==="milliseconds"?z%=1e3:z=Q==="weeks"?R(z/E[Q]):this.$d[Q],z||0},x.add=function(q,z,Q){var J;return J=z?q*E[T(z)]:_(q)?q.$ms:O(q,this).$ms,O(this.$ms+J*(Q?-1:1),this)},x.subtract=function(q,z){return this.add(q,z,!0)},x.locale=function(q){var z=this.clone();return z.$l=q,z},x.clone=function(){return O(this.$ms,this)},x.humanize=function(q){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!q)},x.valueOf=function(){return this.asMilliseconds()},x.milliseconds=function(){return this.get("milliseconds")},x.asMilliseconds=function(){return this.as("milliseconds")},x.seconds=function(){return this.get("seconds")},x.asSeconds=function(){return this.as("seconds")},x.minutes=function(){return this.get("minutes")},x.asMinutes=function(){return this.as("minutes")},x.hours=function(){return this.get("hours")},x.asHours=function(){return this.as("hours")},x.days=function(){return this.get("days")},x.asDays=function(){return this.as("days")},x.weeks=function(){return this.get("weeks")},x.asWeeks=function(){return this.as("weeks")},x.months=function(){return this.get("months")},x.asMonths=function(){return this.as("months")},x.years=function(){return this.get("years")},x.asYears=function(){return this.as("years")},C}(),I=function(C,x,q){return C.add(x.years()*q,"y").add(x.months()*q,"M").add(x.days()*q,"d").add(x.hours()*q,"h").add(x.minutes()*q,"m").add(x.seconds()*q,"s").add(x.milliseconds()*q,"ms")};return function(C,x,q){r=q,a=q().$utils(),q.duration=function(J,Z){var K=q.locale();return O(J,{$l:K},Z)},q.isDuration=_;var z=x.prototype.add,Q=x.prototype.subtract;x.prototype.add=function(J,Z){return _(J)?I(this,J,1):z.bind(this)(J,Z)},x.prototype.subtract=function(J,Z){return _(J)?I(this,J,-1):Q.bind(this)(J,Z)}}})}(Ps)),Ps.exports}var L5=M5();const C5=zs(L5);var Is={exports:{}},H5=Is.exports,qm;function G5(){return qm||(qm=1,function(e,i){(function(r,a){e.exports=a()})(H5,function(){var r="day";return function(a,l,o){var d=function(v){return v.add(4-v.isoWeekday(),r)},m=l.prototype;m.isoWeekYear=function(){return d(this).year()},m.isoWeek=function(v){if(!this.$utils().u(v))return this.add(7*(v-this.isoWeek()),r);var h,y,E,_,O=d(this),T=(h=this.isoWeekYear(),y=this.$u,E=(y?o.utc:o)().year(h).startOf("year"),_=4-E.isoWeekday(),E.isoWeekday()>4&&(_+=7),E.add(_,r));return O.diff(T,"week")+1},m.isoWeekday=function(v){return this.$utils().u(v)?this.day()||7:this.day(this.day()%7?v:v-7)};var c=m.startOf;m.startOf=function(v,h){var y=this.$utils(),E=!!y.u(h)||h;return y.p(v)==="isoweek"?E?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):c.bind(this)(v,h)}}})}(Is)),Is.exports}var U5=G5();const $5=zs(U5);var Os={exports:{}},Y5=Os.exports,Dm;function W5(){return Dm||(Dm=1,function(e,i){(function(r,a){e.exports=a()})(Y5,function(){var r="minute",a=/[+-]\d\d(?::?\d\d)?/g,l=/([+-]|\d\d)/g;return function(o,d,m){var c=d.prototype;m.utc=function(T){var b={date:T,utc:!0,args:arguments};return new d(b)},c.utc=function(T){var b=m(this.toDate(),{locale:this.$L,utc:!0});return T?b.add(this.utcOffset(),r):b},c.local=function(){return m(this.toDate(),{locale:this.$L,utc:!1})};var v=c.parse;c.parse=function(T){T.utc&&(this.$u=!0),this.$utils().u(T.$offset)||(this.$offset=T.$offset),v.call(this,T)};var h=c.init;c.init=function(){if(this.$u){var T=this.$d;this.$y=T.getUTCFullYear(),this.$M=T.getUTCMonth(),this.$D=T.getUTCDate(),this.$W=T.getUTCDay(),this.$H=T.getUTCHours(),this.$m=T.getUTCMinutes(),this.$s=T.getUTCSeconds(),this.$ms=T.getUTCMilliseconds()}else h.call(this)};var y=c.utcOffset;c.utcOffset=function(T,b){var R=this.$utils().u;if(R(T))return this.$u?0:R(this.$offset)?y.call(this):this.$offset;if(typeof T=="string"&&(T=function(I){I===void 0&&(I="");var C=I.match(a);if(!C)return null;var x=(""+C[0]).match(l)||["-",0,0],q=x[0],z=60*+x[1]+ +x[2];return z===0?0:q==="+"?z:-z}(T),T===null))return this;var j=Math.abs(T)<=16?60*T:T,N=this;if(b)return N.$offset=j,N.$u=T===0,N;if(T!==0){var H=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(N=this.local().add(j+H,r)).$offset=j,N.$x.$localOffset=H}else N=this.utc();return N};var E=c.format;c.format=function(T){var b=T||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return E.call(this,b)},c.valueOf=function(){var T=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*T},c.isUTC=function(){return!!this.$u},c.toISOString=function(){return this.toDate().toISOString()},c.toString=function(){return this.toDate().toUTCString()};var _=c.toDate;c.toDate=function(T){return T==="s"&&this.$offset?m(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():_.call(this)};var O=c.diff;c.diff=function(T,b,R){if(T&&this.$u===T.$u)return O.call(this,T,b,R);var j=this.local(),N=m(T).local();return O.call(j,N,b,R)}}})}(Os)),Os.exports}var z5=W5();const X5=zs(z5),J5=Yg(),bi=e=>V5({locale:"nb-NO",messages:e},J5),Ei={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};bi(Ei);var js={exports:{}},Z5=js.exports,Fm;function Q5(){return Fm||(Fm=1,function(e,i){(function(r,a){e.exports=a(cr)})(Z5,function(r){function a(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var l=a(r),o={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return l.default.locale(o,null,!0),o})}(js)),js.exports}Q5();cr.extend(X5);cr.extend($5);cr.extend(C5);bi(Ei);bi(Ei);var Vm={exports:{}},Cr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function ew(){if(Km)return Cr;Km=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,l,o){var d=null;if(o!==void 0&&(d=""+o),l.key!==void 0&&(d=""+l.key),"key"in l){o={};for(var m in l)m!=="key"&&(o[m]=l[m])}else o=l;return l=o.ref,{$$typeof:e,type:a,key:d,ref:l!==void 0?l:null,props:o}}return Cr.Fragment=i,Cr.jsx=r,Cr.jsxs=r,Cr}var Mm;function nw(){return Mm||(Mm=1,Vm.exports=ew()),Vm.exports}nw();bi(Ei);A.createContext({});var Bs={exports:{}},tw=Bs.exports,Lm;function rw(){return Lm||(Lm=1,function(e,i){(function(r,a){e.exports=a()})(tw,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,l=/\d/,o=/\d\d/,d=/\d\d?/,m=/\d*[^-_:/,()\s\d]+/,c={},v=function(b){return(b=+b)+(b>68?1900:2e3)},h=function(b){return function(R){this[b]=+R}},y=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(R){if(!R||R==="Z")return 0;var j=R.match(/([+-]|\d\d)/g),N=60*j[1]+(+j[2]||0);return N===0?0:j[0]==="+"?-N:N}(b)}],E=function(b){var R=c[b];return R&&(R.indexOf?R:R.s.concat(R.f))},_=function(b,R){var j,N=c.meridiem;if(N){for(var H=1;H<=24;H+=1)if(b.indexOf(N(H,0,R))>-1){j=H>12;break}}else j=b===(R?"pm":"PM");return j},O={A:[m,function(b){this.afternoon=_(b,!1)}],a:[m,function(b){this.afternoon=_(b,!0)}],Q:[l,function(b){this.month=3*(b-1)+1}],S:[l,function(b){this.milliseconds=100*+b}],SS:[o,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[d,h("seconds")],ss:[d,h("seconds")],m:[d,h("minutes")],mm:[d,h("minutes")],H:[d,h("hours")],h:[d,h("hours")],HH:[d,h("hours")],hh:[d,h("hours")],D:[d,h("day")],DD:[o,h("day")],Do:[m,function(b){var R=c.ordinal,j=b.match(/\d+/);if(this.day=j[0],R)for(var N=1;N<=31;N+=1)R(N).replace(/\[|\]/g,"")===b&&(this.day=N)}],w:[d,h("week")],ww:[o,h("week")],M:[d,h("month")],MM:[o,h("month")],MMM:[m,function(b){var R=E("months"),j=(E("monthsShort")||R.map(function(N){return N.slice(0,3)})).indexOf(b)+1;if(j<1)throw new Error;this.month=j%12||j}],MMMM:[m,function(b){var R=E("months").indexOf(b)+1;if(R<1)throw new Error;this.month=R%12||R}],Y:[/[+-]?\d+/,h("year")],YY:[o,function(b){this.year=v(b)}],YYYY:[/\d{4}/,h("year")],Z:y,ZZ:y};function T(b){var R,j;R=b,j=c&&c.formats;for(var N=(b=R.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Q,J,Z){var K=Z&&Z.toUpperCase();return J||j[Z]||r[Z]||j[K].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(D,X,te){return X||te.slice(1)})})).match(a),H=N.length,I=0;I<H;I+=1){var C=N[I],x=O[C],q=x&&x[0],z=x&&x[1];N[I]=z?{regex:q,parser:z}:C.replace(/^\[|\]$/g,"")}return function(Q){for(var J={},Z=0,K=0;Z<H;Z+=1){var D=N[Z];if(typeof D=="string")K+=D.length;else{var X=D.regex,te=D.parser,W=Q.slice(K),G=X.exec(W)[0];te.call(J,G),Q=Q.replace(G,"")}}return function(Y){var ae=Y.afternoon;if(ae!==void 0){var ne=Y.hours;ae?ne<12&&(Y.hours+=12):ne===12&&(Y.hours=0),delete Y.afternoon}}(J),J}}return function(b,R,j){j.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(v=b.parseTwoDigitYear);var N=R.prototype,H=N.parse;N.parse=function(I){var C=I.date,x=I.utc,q=I.args;this.$u=x;var z=q[1];if(typeof z=="string"){var Q=q[2]===!0,J=q[3]===!0,Z=Q||J,K=q[2];J&&(K=q[2]),c=this.$locale(),!Q&&K&&(c=j.Ls[K]),this.$d=function(W,G,Y,ae){try{if(["x","X"].indexOf(G)>-1)return new Date((G==="X"?1e3:1)*W);var ne=T(G)(W),se=ne.year,pe=ne.month,fn=ne.day,Me=ne.hours,qe=ne.minutes,Le=ne.seconds,ke=ne.milliseconds,we=ne.zone,Je=ne.week,Ce=new Date,Ge=fn||(se||pe?1:Ce.getDate()),Tn=se||Ce.getFullYear(),Fe=0;se&&!pe||(Fe=pe>0?pe-1:Ce.getMonth());var Ze,Qn=Me||0,Qe=qe||0,Cn=Le||0,et=ke||0;return we?new Date(Date.UTC(Tn,Fe,Ge,Qn,Qe,Cn,et+60*we.offset*1e3)):Y?new Date(Date.UTC(Tn,Fe,Ge,Qn,Qe,Cn,et)):(Ze=new Date(Tn,Fe,Ge,Qn,Qe,Cn,et),Je&&(Ze=ae(Ze).week(Je).toDate()),Ze)}catch{return new Date("")}}(C,z,x,j),this.init(),K&&K!==!0&&(this.$L=this.locale(K).$L),Z&&C!=this.format(z)&&(this.$d=new Date("")),c={}}else if(z instanceof Array)for(var D=z.length,X=1;X<=D;X+=1){q[1]=z[X-1];var te=j.apply(this,q);if(te.isValid()){this.$d=te.$d,this.$L=te.$L,this.init();break}X===D&&(this.$d=new Date(""))}else H.call(this,I)}}})}(Bs)),Bs.exports}var aw=rw();const iw=nT(aw);cr.extend(iw);Mn(na);const lw=e=>{const i=e.aktiveNaturalytelser.reduce((a,l)=>{const o=l.type;return o in a?{...a,[o]:[...a[o],l]}:{...a,[o]:[l]}},{}),r={};return Object.entries(i).forEach(([a,l])=>{const o=l.sort((d,m)=>G_({fom:d.periode.fomDato,tom:d.periode.tomDato},{fom:m.periode.fomDato,tom:m.periode.tomDato})).reverse();r[a]=o.flatMap((d,m,c)=>{const v=c[m+1],h=d.periode.tomDato,y=v?.periode.fomDato;return h===$r?[]:[{...d,periode:{fomDato:Nd(h,1),tomDato:y?Nd(y,-1):$r}}]})}),r},Qg=({inntektsmelding:e,alleKodeverk:i})=>{const r=ft(),a=lw(e);return V.jsx(Xn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?V.jsx("span",{children:V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):V.jsx(ki,{gap:"space-4",children:Object.entries(a).map(([l,o])=>V.jsxs("div",{children:[V.jsx("span",{children:i.NaturalYtelseType.find(d=>d.kode===l)?.navn}),V.jsx("ul",{children:o.map(d=>V.jsxs(U.Fragment,{children:[V.jsxs("li",{children:[V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",V.jsx(Wr,{dateString:d.periode.fomDato})]}),d.periode.tomDato!==$r&&V.jsxs("li",{children:[V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",V.jsx(Wr,{dateString:d.periode.tomDato})]}),V.jsxs("li",{children:[V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",V.jsx(sr,{beløp:d.beloepPerMnd.verdi})]})]},d.indexKey))})]},l))})})};Qg.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const ec=({kildeSystem:e})=>{const i=ft();return V.jsx(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:sw(e,i)})},sw=(e,i)=>{switch(e.toUpperCase()){case"NAV_NO":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}};ec.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const nc=({inntektsmelding:e})=>{const i=ft();return V.jsxs(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[V.jsxs("span",{children:[V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),V.jsxs("span",{children:[V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};nc.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const tc=({inntektsmelding:e,fagsak:i,arbeidsgiverOpplysninger:r})=>{const a=`IM ${r.navn} - ${Ym(e.motattDato)}`;return V.jsx(Hs,{type:"button",onClick:()=>{Xy(i.saksnummer,e.journalpostId,e.dokumentId,a)},variant:"secondary",size:"small",icon:V.jsx(db,{}),children:V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.modal.trigger"})})};tc.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: NavBrukerKjønn;
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"annenPart",value:{name:"union",raw:"Person | null",elements:[{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: NavBrukerKjønn;
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0},{name:"null"}],required:!0}},{key:"annenpartBehandling",value:{name:"union",raw:"AnnenPartBehandling | null",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktDefinisjon;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: AksjonspunktType;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},arbeidsgiverOpplysninger:{required:!0,tsType:{name:"union",raw:`| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]},description:""}}};const rc=({inntektsmelding:e})=>{const i=ft();if(e.refusjonsperioder.length===0)return V.jsx(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:e.refusjonPrMnd?V.jsx(sr,{beløp:e.refusjonPrMnd}):V.jsx(Ne,{tagName:"span",id:"InntektsmeldingFaktaPanel.refusjon.ingen"})});const r=[...e.refusjonsperioder].sort((a,l)=>new Date(a.fom).getTime()-new Date(l.fom).getTime());return V.jsxs(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:[V.jsx("span",{children:"Krever refusjon"}),V.jsx(sr,{beløp:e.refusjonPrMnd??0}),V.jsx("span",{children:"Endringer i perioden:"}),V.jsx("ul",{children:r.map(a=>V.jsx("li",{children:V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:V.jsx(sr,{beløp:a.refusjonsbeløp.verdi}),fom:V.jsx(Wr,{dateString:a.fom})}})},a.indexKey))})]})};rc.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const ac=({startDatoPermisjon:e,ytelse:i})=>{const r=ft();return e?V.jsxs(Xn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:i.toLowerCase()}),children:[V.jsx("span",{children:e?V.jsx(Wr,{dateString:e}):"-"}),V.jsx("span",{children:V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};ac.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const ow="_behandlingCircleIngen_x70wg_1",uw="_behandlingCircleDenne_x70wg_5",dw="_behandlingCircleAndre_x70wg_9",mw="_container_x70wg_13",gw="_ingenInntektsmeldinger_x70wg_20",Ur={behandlingCircleIngen:ow,behandlingCircleDenne:uw,behandlingCircleAndre:dw,container:mw,ingenInntektsmeldinger:gw},ic=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:i,alleBehandlinger:r})=>{const{alleKodeverk:a,fagsak:l,behandling:o}=Wm(),d=ft();return V.jsxs(ki,{gap:"space-16",className:Ur.container,children:[V.jsxs(lr,{gap:"space-16",justify:"space-between",align:"start",children:[V.jsxs(Jm,{level:"3",size:"small",children:[V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",V.jsx(ui,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),V.jsx(tc,{fagsak:l,inntektsmelding:e,arbeidsgiverOpplysninger:i[e.arbeidsgiverIdent]})]}),V.jsxs(LE,{columns:3,gap:"space-32",children:[V.jsx(Ag,{arbeidsgiverOpplysninger:i[e.arbeidsgiverIdent],arbeidsgiverIdent:e.arbeidsgiverIdent}),V.jsx(Xn,{tittel:d.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:V.jsx(sr,{beløp:e.inntektPrMnd})}),V.jsx(Rg,{alleKodeverk:a,inntektsmelding:e,alleBehandlinger:r,behandling:o}),V.jsx(nc,{inntektsmelding:e}),V.jsx(ac,{ytelse:a.FagsakYtelseType.find(m=>m.kode===l.fagsakYtelseType)?.navn??"",startDatoPermisjon:e.startDatoPermisjon}),V.jsx(ec,{kildeSystem:e.kildeSystem}),V.jsx(Qg,{inntektsmelding:e,alleKodeverk:a}),V.jsx(rc,{inntektsmelding:e})]})]})};ic.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktDefinisjon;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: AksjonspunktType;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const cw={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},Cm=Mn(cw),xs=({arbeidsgiverOpplysningerPerId:e,alleBehandlinger:i,inntektsmeldinger:r})=>{const{behandling:a}=Wm(),[l,o]=A.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),d=v=>{o(l&&v===l.orderBy&&l.direction==="descending"?void 0:{orderBy:v,direction:l&&v===l.orderBy&&l.direction==="ascending"?"descending":"ascending"})},m=l?fw({inntektsmeldinger:r,arbeidsgiverOpplysningerPerId:e,sortKey:l.orderBy,behandling:a}):r,c=l?.direction==="ascending"?m:m.toReversed();return c.length===0?V.jsx(Pd,{value:Cm,children:V.jsxs(lr,{gap:"space-8",justify:"center",align:"center",className:Ur.ingenInntektsmeldinger,children:[V.jsx(di,{children:V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.ingen"})}),V.jsx(pb,{})]})}):V.jsx(Pd,{value:Cm,children:V.jsxs(Ke,{sort:l,onSortChange:v=>d(v),children:[V.jsx(Ke.Header,{children:V.jsxs(Ke.Row,{children:[V.jsx(Ke.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),V.jsx(Ke.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),V.jsx(Ke.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),V.jsx(Ke.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),V.jsx(Ke.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),V.jsx(Ke.HeaderCell,{})]})}),V.jsx(Ke.Body,{children:c.map(v=>V.jsxs(Ke.ExpandableRow,{expandOnRowClick:!0,contentGutter:"none",togglePlacement:"right",content:V.jsx(ic,{alleBehandlinger:i,arbeidsgiverOpplysningerPerId:e,inntektsmelding:v}),children:[V.jsx(Ke.DataCell,{children:V.jsx(ui,{dateTimeString:v.innsendingstidspunkt,separator:"kl"})}),V.jsx(Ke.DataCell,{children:e[v.arbeidsgiverIdent]?.navn??"-"}),V.jsx(Ke.DataCell,{children:v.startDatoPermisjon?V.jsx(Wr,{dateString:v.startDatoPermisjon}):"-"}),V.jsx(Ke.DataCell,{children:V.jsx(sr,{beløp:v.inntektPrMnd})}),V.jsx(Ke.DataCell,{children:V.jsx(vw,{behandling:a,inntektsmelding:v})})]},`${v.journalpostId}-${v.internArbeidsforholdId}`))})]})})},fw=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:i,sortKey:r,behandling:a})=>r==="arbeidsgiverIdent"?e.slice().sort((l,o)=>{const d=i[l.arbeidsgiverIdent]?.navn,m=i[o.arbeidsgiverIdent]?.navn;return os(d,m)}):r==="tilknyttedeBehandlingIder"?e.slice().sort((l,o)=>{const d=qs({behandling:a,inntektsmelding:l}),m=qs({behandling:a,inntektsmelding:o});return os(d,m)}):e.slice().sort((l,o)=>{const d=l[r],m=o[r];return os(d,m)}),os=(e,i)=>e===void 0?-1:i===void 0?1:e<i?-1:e>i?1:0,vw=({behandling:e,inntektsmelding:i})=>{const r=qs({behandling:e,inntektsmelding:i});return r==="DENNE"?V.jsxs(lr,{gap:"space-4",align:"center",children:[V.jsx(Hl,{className:Ur.behandlingCircleDenne}),V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):r==="ANDRE"?V.jsxs(lr,{gap:"space-4",align:"center",children:[V.jsx(Hl,{className:Ur.behandlingCircleAndre}),V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):V.jsxs(lr,{gap:"space-4",align:"center",children:[V.jsx(Hl,{className:Ur.behandlingCircleIngen}),V.jsx(Ne,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},qs=({behandling:e,inntektsmelding:i})=>i.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":i.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";xs.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Inntektsmelding[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktDefinisjon;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: AksjonspunktType;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const us={innsendingstidspunkt:"2024-08-08T00:00:00",kildeSystem:"Altinn",aktiveNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",arbeidsgiverIdent:"1",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},Ew={title:"fakta/fakta-inntektsmelding",component:xs,decorators:[$y],render:e=>V.jsx(xs,{...e})},Gr={args:{alleBehandlinger:[{uuid:"UUID1",type:"BT-002",opprettet:"2024-07-13",avsluttet:"2024-08-13"},{uuid:"UUID2",type:"BT-003",opprettet:"2024-07-14",avsluttet:"2024-08-14"},{uuid:"UUID3",type:"BT-004",opprettet:"2024-07-15",avsluttet:"2024-08-15"}],arbeidsgiverOpplysningerPerId:{1:{navn:"Rema 1000"},2:{navn:"Kiwi"},3:{navn:"Meny"}},behandling:{uuid:"UUID2"},inntektsmeldinger:[{...us,tilknyttedeBehandlingIder:["UUID1"],inntektPrMnd:10000.5,innsendingstidspunkt:"2024-07-20T00:00:00",startDatoPermisjon:"2024-10-10",refusjonPrMnd:void 0,journalpostId:"1",refusjonsperioder:[{refusjonsbeløp:{verdi:5e3},indexKey:"1",fom:"2024-01-10"},{refusjonsbeløp:{verdi:3e3},indexKey:"2",fom:"2024-01-09"}]},{...us,tilknyttedeBehandlingIder:["UUID1","UUID2"],inntektPrMnd:2e4,innsendingstidspunkt:"2024-08-01T00:00:00",kildeSystem:"FS22",refusjonPrMnd:void 0,arbeidsgiverIdent:"2",journalpostId:"2"},{...us,tilknyttedeBehandlingIder:[],inntektPrMnd:3e4,innsendingstidspunkt:"2024-09-10T00:00:00",innsendingsårsak:"ENDRING",kildeSystem:"NAV_NO",startDatoPermisjon:"2024-11-11",arbeidsgiverIdent:"3",journalpostId:"3",aktiveNaturalytelser:[{periode:{fomDato:"2024-01-09",tomDato:"2024-10-09"},type:ds.ELEKTRISK_KOMMUNIKASJON,beloepPerMnd:{verdi:999},indexKey:"1"},{periode:{fomDato:"2024-01-11",tomDato:"2024-10-11"},type:ds.LOSJI,beloepPerMnd:{verdi:10},indexKey:"2"}]}]}},Qa={args:{...Gr.args,inntektsmeldinger:[]}};Gr.parameters={...Gr.parameters,docs:{...Gr.parameters?.docs,source:{originalSource:`{
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
}`,...Qa.parameters?.docs?.source}}};const _w=["InntektsmeldingDefault","IngenInntektsmeldinger"];export{Qa as IngenInntektsmeldinger,Gr as InntektsmeldingDefault,_w as __namedExportsOrder,Ew as default};
