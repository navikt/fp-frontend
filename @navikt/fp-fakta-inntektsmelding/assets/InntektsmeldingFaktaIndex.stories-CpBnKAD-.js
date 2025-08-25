import{g as Gm,r as w,u as ft,_ as Nd,s as Rd,c as Hm,a as Pe,R as U,b as Cy,d as gr,T as Gy,S as zr,e as Um,f as $m,h as Hy,o as Ym,A as Uy,i as Ln,j as D,k as cr,l as $r,m as Wa,E as Sd,n as Wm,P as Pd,w as $y}from"./iframe-DOM_svqA.js";import{r as Yy}from"./index-BwAoCoPq.js";import"./preload-helper-D9Z9MdNV.js";var zm=Yy();const Id=Gm(zm);function Wy(e,i){var r=e.values,a=Nd(e,["values"]),l=i.values,o=Nd(i,["values"]);return Rd(l,r)&&Rd(a,o)}function Jm(e){var i=ft(),r=i.formatMessage,a=i.textComponent,l=a===void 0?w.Fragment:a,o=e.id,d=e.description,m=e.defaultMessage,c=e.values,v=e.children,h=e.tagName,y=h===void 0?l:h,E=e.ignoreTag,_={id:o,description:d,defaultMessage:m},O=r(_,c,{ignoreTag:E});return typeof v=="function"?v(Array.isArray(O)?O:[O]):y?w.createElement(y,null,O):w.createElement(w.Fragment,null,O)}Jm.displayName="FormattedMessage";var Se=w.memo(Jm,Wy);Se.displayName="MemoizedFormattedMessage";var ds=(e=>(e.ELEKTRISK_KOMMUNIKASJON="ELEKTRISK_KOMMUNIKASJON",e.LOSJI="LOSJI",e))(ds||{});const zy=(e,i,r)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${i}&dokumentId=${r}`,Jy=(e,i,r,a)=>{const l=zy(e,i,r),o=`${i}-${r}`;a&&Xy(l,o,a)},Xy=(e,i,r)=>{const a=window.open(e,i);a&&setTimeout(()=>{a.document.title=r},1e3)},fr=e=>Hm({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Zy=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const ri=w.forwardRef((e,i)=>{var{className:r,size:a="medium",as:l="p",spacing:o,truncate:d,weight:m="regular",align:c,visuallyHidden:v,textColor:h}=e,y=Zy(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:E}=Pe();return U.createElement(l,Object.assign({},y,{ref:i,className:E(r,"navds-body-long",`navds-body-long--${a}`,fr({spacing:o,truncate:d,weight:m,align:c,visuallyHidden:v,textColor:h}))}))});var Qy=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const di=w.forwardRef((e,i)=>{var{className:r,size:a="medium",as:l="p",spacing:o,truncate:d,weight:m="regular",align:c,visuallyHidden:v,textColor:h}=e,y=Qy(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:E}=Pe();return U.createElement(l,Object.assign({},y,{ref:i,className:E(r,"navds-body-short",`navds-body-short--${a}`,fr({spacing:o,truncate:d,weight:m,align:c,visuallyHidden:v,textColor:h}))}))});var eb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const nb=w.forwardRef((e,i)=>{var{className:r,size:a="medium",spacing:l,uppercase:o,as:d="p",truncate:m,weight:c="regular",align:v,visuallyHidden:h,textColor:y}=e,E=eb(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=Pe();return U.createElement(d,Object.assign({},E,{ref:i,className:_(r,"navds-detail",fr({spacing:l,truncate:m,weight:c,align:v,visuallyHidden:h,textColor:y,uppercase:o}),{"navds-detail--small":a==="small"})}))});var tb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const rb=w.forwardRef((e,i)=>{var{children:r,className:a,size:l,spacing:o,as:d="p",showIcon:m=!1}=e,c=tb(e,["children","className","size","spacing","as","showIcon"]);const{cn:v}=Pe();return U.createElement(d,Object.assign({},c,{ref:i,className:v("navds-error-message","navds-label",a,fr({spacing:o}),{"navds-label--small":l==="small","navds-error-message--show-icon":m})}),m&&U.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},U.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var ab=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Xm=w.forwardRef((e,i)=>{var{level:r="1",size:a,className:l,as:o,spacing:d,align:m,visuallyHidden:c,textColor:v}=e,h=ab(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:y}=Pe(),E=o??`h${r}`;return U.createElement(E,Object.assign({},h,{ref:i,className:y(l,"navds-heading",`navds-heading--${a}`,fr({spacing:d,align:m,visuallyHidden:c,textColor:v}))}))});var ib=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};w.forwardRef((e,i)=>{var{className:r,spacing:a,as:l="p"}=e,o=ib(e,["className","spacing","as"]);const{cn:d}=Pe();return U.createElement(l,Object.assign({},o,{ref:i,className:d(r,"navds-ingress",{"navds-typo--spacing":!!a})}))});var lb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const qs=w.forwardRef((e,i)=>{var{className:r,size:a="medium",as:l="label",spacing:o,visuallyHidden:d,textColor:m}=e,c=lb(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:v}=Pe();return U.createElement(l,Object.assign({},c,{ref:i,className:v(r,"navds-label",fr({spacing:o,visuallyHidden:d,textColor:m}),{"navds-label--small":a==="small"})}))});function Jr(e,i){const r=Object.entries(e).filter(([a])=>!i.includes(a));return Object.fromEntries(r)}let Od=0;function sb(e){const[i,r]=w.useState(e),a=e||i;return w.useEffect(()=>{i==null&&(Od+=1,r(`aksel-id-${Od}`))},[i]),a}const jd=U.useId;function mi(e){var i;if(jd!==void 0){const r=jd();return e??r.replace(/(:)/g,"")}return(i=sb(e))!==null&&i!==void 0?i:""}function Bd(e,i=[]){const r=w.useRef(e);return w.useEffect(()=>{r.current=e}),w.useCallback((...a)=>{var l;return(l=r.current)===null||l===void 0?void 0:l.call(r,...a)},i)}function Ks({value:e,defaultValue:i,onChange:r}){const a=Bd(r),[l,o]=w.useState(i),d=e!==void 0,m=d?e:l,c=Bd(v=>{const y=typeof v=="function"?v(m):v;d||o(y),a(y)},[d,a,m]);return[m,c]}let Fd=0;function ob(e){const[i,r]=w.useState(e),a=e||i;return w.useEffect(()=>{i==null&&(Fd+=1,r(`aksel-icon-${Fd}`))},[i]),a}const xd=U.useId;function vt(e){var i;return xd!==void 0?xd().replace(/(:)/g,""):(i=ob(e))!==null&&i!==void 0?i:""}var ub=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const db=w.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=ub(e,["title","titleId"]);let o=vt();return o=r?a||"title-"+o:void 0,w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?w.createElement("title",{id:o},r):null,w.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var mb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const gb=w.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=mb(e,["title","titleId"]);let o=vt();return o=r?a||"title-"+o:void 0,w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?w.createElement("title",{id:o},r):null,w.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var cb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Zm=w.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=cb(e,["title","titleId"]);let o=vt();return o=r?a||"title-"+o:void 0,w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?w.createElement("title",{id:o},r):null,w.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var fb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Gl=w.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=fb(e,["title","titleId"]);let o=vt();return o=r?a||"title-"+o:void 0,w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?w.createElement("title",{id:o},r):null,w.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12",clipRule:"evenodd"}))});var vb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const pb=w.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=vb(e,["title","titleId"]);let o=vt();return o=r?a||"title-"+o:void 0,w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?w.createElement("title",{id:o},r):null,w.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var hb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Qm=w.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=hb(e,["title","titleId"]);let o=vt();return o=r?a||"title-"+o:void 0,w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?w.createElement("title",{id:o},r):null,w.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var kb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const yb=w.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=kb(e,["title","titleId"]);let o=vt();return o=r?a||"title-"+o:void 0,w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?w.createElement("title",{id:o},r):null,w.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var bb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Eb=w.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=bb(e,["title","titleId"]);let o=vt();return o=r?a||"title-"+o:void 0,w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?w.createElement("title",{id:o},r):null,w.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var _b=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const qd=w.forwardRef((e,i)=>{var{title:r,titleId:a}=e,l=_b(e,["title","titleId"]);let o=vt();return o=r?a||"title-"+o:void 0,w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},l),r?w.createElement("title",{id:o},r):null,w.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});function gi(e,i,{checkForDefaultPrevented:r=!0}={}){return function(l){if(e?.(l),r===!1||!l.defaultPrevented)return i?.(l)}}const[yA,Tb]=Cy({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function Hl(e){return(i={})=>{const r=i.width?String(i.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function qr(e){return(i,r)=>{const a=r?.context?String(r.context):"standalone";let l;if(a==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,m=r?.width?String(r.width):d;l=e.formattingValues[m]||e.formattingValues[d]}else{const d=e.defaultWidth,m=r?.width?String(r.width):e.defaultWidth;l=e.values[m]||e.values[d]}const o=e.argumentCallback?e.argumentCallback(i):i;return l[o]}}function Kr(e){return(i,r={})=>{const a=r.width,l=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=i.match(l);if(!o)return null;const d=o[0],m=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(m)?wb(m,y=>y.test(d)):Ab(m,y=>y.test(d));let v;v=e.valueCallback?e.valueCallback(c):c,v=r.valueCallback?r.valueCallback(v):v;const h=i.slice(d.length);return{value:v,rest:h}}}function Ab(e,i){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&i(e[r]))return r}function wb(e,i){for(let r=0;r<e.length;r++)if(i(e[r]))return r}function Nb(e){return(i,r={})=>{const a=i.match(e.matchPattern);if(!a)return null;const l=a[0],o=i.match(e.parsePattern);if(!o)return null;let d=e.valueCallback?e.valueCallback(o[0]):o[0];d=r.valueCallback?r.valueCallback(d):d;const m=i.slice(l.length);return{value:d,rest:m}}}const Rb={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Sb=(e,i,r)=>{let a;const l=Rb[e];return typeof l=="string"?a=l:i===1?a=l.one:a=l.other.replace("{{count}}",String(i)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+a:a+" siden":a},Pb={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Ib={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Ob={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},jb={date:Hl({formats:Pb,defaultWidth:"full"}),time:Hl({formats:Ib,defaultWidth:"full"}),dateTime:Hl({formats:Ob,defaultWidth:"full"})},Bb={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Fb=(e,i,r,a)=>Bb[e],xb={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},qb={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Kb={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Db={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Vb={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Lb=(e,i)=>Number(e)+".",Mb={ordinalNumber:Lb,era:qr({values:xb,defaultWidth:"wide"}),quarter:qr({values:qb,defaultWidth:"wide",argumentCallback:e=>e-1}),month:qr({values:Kb,defaultWidth:"wide"}),day:qr({values:Db,defaultWidth:"wide"}),dayPeriod:qr({values:Vb,defaultWidth:"wide"})},Cb=/^(\d+)\.?/i,Gb=/\d+/i,Hb={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Ub={any:[/^f/i,/^e/i]},$b={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Yb={any:[/1/i,/2/i,/3/i,/4/i]},Wb={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},zb={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Jb={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Xb={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Zb={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Qb={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},e1={ordinalNumber:Nb({matchPattern:Cb,parsePattern:Gb,valueCallback:e=>parseInt(e,10)}),era:Kr({matchPatterns:Hb,defaultMatchWidth:"wide",parsePatterns:Ub,defaultParseWidth:"any"}),quarter:Kr({matchPatterns:$b,defaultMatchWidth:"wide",parsePatterns:Yb,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Kr({matchPatterns:Wb,defaultMatchWidth:"wide",parsePatterns:zb,defaultParseWidth:"any"}),day:Kr({matchPatterns:Jb,defaultMatchWidth:"wide",parsePatterns:Xb,defaultParseWidth:"any"}),dayPeriod:Kr({matchPatterns:Zb,defaultMatchWidth:"any",parsePatterns:Qb,defaultParseWidth:"any"})},n1={code:"nb",formatDistance:Sb,formatLong:jb,formatRelative:Fb,localize:Mb,match:e1,options:{weekStartsOn:1,firstWeekContainsDate:4}},t1={global:{dateLocale:n1,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},r1=w.createContext({locale:t1}),eg=()=>w.useContext(r1);var a1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const i1=w.forwardRef((e,i)=>{var r,a,l,{rootElement:o,asChild:d}=e,m=a1(e,["rootElement","asChild"]);const c=gr(!1),v=(r=eg())===null||r===void 0?void 0:r.rootElement,h=(a=o??v)!==null&&a!==void 0?a:(l=globalThis?.document)===null||l===void 0?void 0:l.body,y=d?zr:"div";return c?h?Id.createPortal(U.createElement(Gy,{theme:c.theme,asChild:!0,hasBackground:!1,"data-color":c.color},U.createElement(y,Object.assign({ref:i,"data-aksel-portal":""},m))),h):null:h?Id.createPortal(U.createElement(y,Object.assign({ref:i,"data-aksel-portal":""},m)),h):null}),or=Math.min,Vt=Math.max,ai=Math.round,za=Math.floor,zn=e=>({x:e,y:e}),l1={left:"right",right:"left",bottom:"top",top:"bottom"},s1={start:"end",end:"start"};function ms(e,i,r){return Vt(e,or(i,r))}function Xr(e,i){return typeof e=="function"?e(i):e}function Lt(e){return e.split("-")[0]}function Zr(e){return e.split("-")[1]}function ng(e){return e==="x"?"y":"x"}function Ds(e){return e==="y"?"height":"width"}function ur(e){return["top","bottom"].includes(Lt(e))?"y":"x"}function Vs(e){return ng(ur(e))}function o1(e,i,r){r===void 0&&(r=!1);const a=Zr(e),l=Vs(e),o=Ds(l);let d=l==="x"?a===(r?"end":"start")?"right":"left":a==="start"?"bottom":"top";return i.reference[o]>i.floating[o]&&(d=ii(d)),[d,ii(d)]}function u1(e){const i=ii(e);return[gs(e),i,gs(i)]}function gs(e){return e.replace(/start|end/g,i=>s1[i])}function d1(e,i,r){const a=["left","right"],l=["right","left"],o=["top","bottom"],d=["bottom","top"];switch(e){case"top":case"bottom":return r?i?l:a:i?a:l;case"left":case"right":return i?o:d;default:return[]}}function m1(e,i,r,a){const l=Zr(e);let o=d1(Lt(e),r==="start",a);return l&&(o=o.map(d=>d+"-"+l),i&&(o=o.concat(o.map(gs)))),o}function ii(e){return e.replace(/left|right|bottom|top/g,i=>l1[i])}function g1(e){return{top:0,right:0,bottom:0,left:0,...e}}function tg(e){return typeof e!="number"?g1(e):{top:e,right:e,bottom:e,left:e}}function li(e){const{x:i,y:r,width:a,height:l}=e;return{width:a,height:l,top:r,left:i,right:i+a,bottom:r+l,x:i,y:r}}function Kd(e,i,r){let{reference:a,floating:l}=e;const o=ur(i),d=Vs(i),m=Ds(d),c=Lt(i),v=o==="y",h=a.x+a.width/2-l.width/2,y=a.y+a.height/2-l.height/2,E=a[m]/2-l[m]/2;let _;switch(c){case"top":_={x:h,y:a.y-l.height};break;case"bottom":_={x:h,y:a.y+a.height};break;case"right":_={x:a.x+a.width,y};break;case"left":_={x:a.x-l.width,y};break;default:_={x:a.x,y:a.y}}switch(Zr(i)){case"start":_[d]-=E*(r&&v?-1:1);break;case"end":_[d]+=E*(r&&v?-1:1);break}return _}const c1=async(e,i,r)=>{const{placement:a="bottom",strategy:l="absolute",middleware:o=[],platform:d}=r,m=o.filter(Boolean),c=await(d.isRTL==null?void 0:d.isRTL(i));let v=await d.getElementRects({reference:e,floating:i,strategy:l}),{x:h,y}=Kd(v,a,c),E=a,_={},O=0;for(let T=0;T<m.length;T++){const{name:b,fn:N}=m[T],{x:j,y:S,data:G,reset:I}=await N({x:h,y,initialPlacement:a,placement:E,strategy:l,middlewareData:_,rects:v,platform:d,elements:{reference:e,floating:i}});h=j??h,y=S??y,_={..._,[b]:{..._[b],...G}},I&&O<=50&&(O++,typeof I=="object"&&(I.placement&&(E=I.placement),I.rects&&(v=I.rects===!0?await d.getElementRects({reference:e,floating:i,strategy:l}):I.rects),{x:h,y}=Kd(v,E,c)),T=-1)}return{x:h,y,placement:E,strategy:l,middlewareData:_}};async function rg(e,i){var r;i===void 0&&(i={});const{x:a,y:l,platform:o,rects:d,elements:m,strategy:c}=e,{boundary:v="clippingAncestors",rootBoundary:h="viewport",elementContext:y="floating",altBoundary:E=!1,padding:_=0}=Xr(i,e),O=tg(_),b=m[E?y==="floating"?"reference":"floating":y],N=li(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(b)))==null||r?b:b.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(m.floating)),boundary:v,rootBoundary:h,strategy:c})),j=y==="floating"?{x:a,y:l,width:d.floating.width,height:d.floating.height}:d.reference,S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(m.floating)),G=await(o.isElement==null?void 0:o.isElement(S))?await(o.getScale==null?void 0:o.getScale(S))||{x:1,y:1}:{x:1,y:1},I=li(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:m,rect:j,offsetParent:S,strategy:c}):j);return{top:(N.top-I.top+O.top)/G.y,bottom:(I.bottom-N.bottom+O.bottom)/G.y,left:(N.left-I.left+O.left)/G.x,right:(I.right-N.right+O.right)/G.x}}const f1=e=>({name:"arrow",options:e,async fn(i){const{x:r,y:a,placement:l,rects:o,platform:d,elements:m,middlewareData:c}=i,{element:v,padding:h=0}=Xr(e,i)||{};if(v==null)return{};const y=tg(h),E={x:r,y:a},_=Vs(l),O=Ds(_),T=await d.getDimensions(v),b=_==="y",N=b?"top":"left",j=b?"bottom":"right",S=b?"clientHeight":"clientWidth",G=o.reference[O]+o.reference[_]-E[_]-o.floating[O],I=E[_]-o.reference[_],C=await(d.getOffsetParent==null?void 0:d.getOffsetParent(v));let F=C?C[S]:0;(!F||!await(d.isElement==null?void 0:d.isElement(C)))&&(F=m.floating[S]||o.floating[O]);const x=G/2-I/2,z=F/2-T[O]/2-1,Q=or(y[N],z),X=or(y[j],z),Z=Q,V=F-T[O]-X,q=F/2-T[O]/2+x,J=ms(Z,q,V),te=!c.arrow&&Zr(l)!=null&&q!==J&&o.reference[O]/2-(q<Z?Q:X)-T[O]/2<0,W=te?q<Z?q-Z:q-V:0;return{[_]:E[_]+W,data:{[_]:J,centerOffset:q-J-W,...te&&{alignmentOffset:W}},reset:te}}}),v1=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(i){var r,a;const{placement:l,middlewareData:o,rects:d,initialPlacement:m,platform:c,elements:v}=i,{mainAxis:h=!0,crossAxis:y=!0,fallbackPlacements:E,fallbackStrategy:_="bestFit",fallbackAxisSideDirection:O="none",flipAlignment:T=!0,...b}=Xr(e,i);if((r=o.arrow)!=null&&r.alignmentOffset)return{};const N=Lt(l),j=ur(m),S=Lt(m)===m,G=await(c.isRTL==null?void 0:c.isRTL(v.floating)),I=E||(S||!T?[ii(m)]:u1(m)),C=O!=="none";!E&&C&&I.push(...m1(m,T,O,G));const F=[m,...I],x=await rg(i,b),z=[];let Q=((a=o.flip)==null?void 0:a.overflows)||[];if(h&&z.push(x[N]),y){const q=o1(l,d,G);z.push(x[q[0]],x[q[1]])}if(Q=[...Q,{placement:l,overflows:z}],!z.every(q=>q<=0)){var X,Z;const q=(((X=o.flip)==null?void 0:X.index)||0)+1,J=F[q];if(J)return{data:{index:q,overflows:Q},reset:{placement:J}};let te=(Z=Q.filter(W=>W.overflows[0]<=0).sort((W,H)=>W.overflows[1]-H.overflows[1])[0])==null?void 0:Z.placement;if(!te)switch(_){case"bestFit":{var V;const W=(V=Q.filter(H=>{if(C){const Y=ur(H.placement);return Y===j||Y==="y"}return!0}).map(H=>[H.placement,H.overflows.filter(Y=>Y>0).reduce((Y,ae)=>Y+ae,0)]).sort((H,Y)=>H[1]-Y[1])[0])==null?void 0:V[0];W&&(te=W);break}case"initialPlacement":te=m;break}if(l!==te)return{reset:{placement:te}}}return{}}}};async function p1(e,i){const{placement:r,platform:a,elements:l}=e,o=await(a.isRTL==null?void 0:a.isRTL(l.floating)),d=Lt(r),m=Zr(r),c=ur(r)==="y",v=["left","top"].includes(d)?-1:1,h=o&&c?-1:1,y=Xr(i,e);let{mainAxis:E,crossAxis:_,alignmentAxis:O}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:{mainAxis:y.mainAxis||0,crossAxis:y.crossAxis||0,alignmentAxis:y.alignmentAxis};return m&&typeof O=="number"&&(_=m==="end"?O*-1:O),c?{x:_*h,y:E*v}:{x:E*v,y:_*h}}const h1=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(i){var r,a;const{x:l,y:o,placement:d,middlewareData:m}=i,c=await p1(i,e);return d===((r=m.offset)==null?void 0:r.placement)&&(a=m.arrow)!=null&&a.alignmentOffset?{}:{x:l+c.x,y:o+c.y,data:{...c,placement:d}}}}},k1=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(i){const{x:r,y:a,placement:l}=i,{mainAxis:o=!0,crossAxis:d=!1,limiter:m={fn:b=>{let{x:N,y:j}=b;return{x:N,y:j}}},...c}=Xr(e,i),v={x:r,y:a},h=await rg(i,c),y=ur(Lt(l)),E=ng(y);let _=v[E],O=v[y];if(o){const b=E==="y"?"top":"left",N=E==="y"?"bottom":"right",j=_+h[b],S=_-h[N];_=ms(j,_,S)}if(d){const b=y==="y"?"top":"left",N=y==="y"?"bottom":"right",j=O+h[b],S=O-h[N];O=ms(j,O,S)}const T=m.fn({...i,[E]:_,[y]:O});return{...T,data:{x:T.x-r,y:T.y-a,enabled:{[E]:o,[y]:d}}}}}};function ci(){return typeof window<"u"}function vr(e){return ag(e)?(e.nodeName||"").toLowerCase():"#document"}function cn(e){var i;return(e==null||(i=e.ownerDocument)==null?void 0:i.defaultView)||window}function Zn(e){var i;return(i=(ag(e)?e.ownerDocument:e.document)||window.document)==null?void 0:i.documentElement}function ag(e){return ci()?e instanceof Node||e instanceof cn(e).Node:!1}function je(e){return ci()?e instanceof Element||e instanceof cn(e).Element:!1}function _n(e){return ci()?e instanceof HTMLElement||e instanceof cn(e).HTMLElement:!1}function si(e){return!ci()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof cn(e).ShadowRoot}function Qr(e){const{overflow:i,overflowX:r,overflowY:a,display:l}=Bn(e);return/auto|scroll|overlay|hidden|clip/.test(i+a+r)&&!["inline","contents"].includes(l)}function y1(e){return["table","td","th"].includes(vr(e))}function fi(e){return[":popover-open",":modal"].some(i=>{try{return e.matches(i)}catch{return!1}})}function Ls(e){const i=vi(),r=je(e)?Bn(e):e;return["transform","translate","scale","rotate","perspective"].some(a=>r[a]?r[a]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!i&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!i&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(a=>(r.willChange||"").includes(a))||["paint","layout","strict","content"].some(a=>(r.contain||"").includes(a))}function b1(e){let i=ct(e);for(;_n(i)&&!gt(i);){if(Ls(i))return i;if(fi(i))return null;i=ct(i)}return null}function vi(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function gt(e){return["html","body","#document"].includes(vr(e))}function Bn(e){return cn(e).getComputedStyle(e)}function pi(e){return je(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ct(e){if(vr(e)==="html")return e;const i=e.assignedSlot||e.parentNode||si(e)&&e.host||Zn(e);return si(i)?i.host:i}function ig(e){const i=ct(e);return gt(i)?e.ownerDocument?e.ownerDocument.body:e.body:_n(i)&&Qr(i)?i:ig(i)}function wt(e,i,r){var a;i===void 0&&(i=[]),r===void 0&&(r=!0);const l=ig(e),o=l===((a=e.ownerDocument)==null?void 0:a.body),d=cn(l);if(o){const m=cs(d);return i.concat(d,d.visualViewport||[],Qr(l)?l:[],m&&r?wt(m):[])}return i.concat(l,wt(l,[],r))}function cs(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function lg(e){const i=Bn(e);let r=parseFloat(i.width)||0,a=parseFloat(i.height)||0;const l=_n(e),o=l?e.offsetWidth:r,d=l?e.offsetHeight:a,m=ai(r)!==o||ai(a)!==d;return m&&(r=o,a=d),{width:r,height:a,$:m}}function Ms(e){return je(e)?e:e.contextElement}function ir(e){const i=Ms(e);if(!_n(i))return zn(1);const r=i.getBoundingClientRect(),{width:a,height:l,$:o}=lg(i);let d=(o?ai(r.width):r.width)/a,m=(o?ai(r.height):r.height)/l;return(!d||!Number.isFinite(d))&&(d=1),(!m||!Number.isFinite(m))&&(m=1),{x:d,y:m}}const E1=zn(0);function sg(e){const i=cn(e);return!vi()||!i.visualViewport?E1:{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function _1(e,i,r){return i===void 0&&(i=!1),!r||i&&r!==cn(e)?!1:i}function Mt(e,i,r,a){i===void 0&&(i=!1),r===void 0&&(r=!1);const l=e.getBoundingClientRect(),o=Ms(e);let d=zn(1);i&&(a?je(a)&&(d=ir(a)):d=ir(e));const m=_1(o,r,a)?sg(o):zn(0);let c=(l.left+m.x)/d.x,v=(l.top+m.y)/d.y,h=l.width/d.x,y=l.height/d.y;if(o){const E=cn(o),_=a&&je(a)?cn(a):a;let O=E,T=cs(O);for(;T&&a&&_!==O;){const b=ir(T),N=T.getBoundingClientRect(),j=Bn(T),S=N.left+(T.clientLeft+parseFloat(j.paddingLeft))*b.x,G=N.top+(T.clientTop+parseFloat(j.paddingTop))*b.y;c*=b.x,v*=b.y,h*=b.x,y*=b.y,c+=S,v+=G,O=cn(T),T=cs(O)}}return li({width:h,height:y,x:c,y:v})}function Cs(e,i){const r=pi(e).scrollLeft;return i?i.left+r:Mt(Zn(e)).left+r}function og(e,i,r){r===void 0&&(r=!1);const a=e.getBoundingClientRect(),l=a.left+i.scrollLeft-(r?0:Cs(e,a)),o=a.top+i.scrollTop;return{x:l,y:o}}function T1(e){let{elements:i,rect:r,offsetParent:a,strategy:l}=e;const o=l==="fixed",d=Zn(a),m=i?fi(i.floating):!1;if(a===d||m&&o)return r;let c={scrollLeft:0,scrollTop:0},v=zn(1);const h=zn(0),y=_n(a);if((y||!y&&!o)&&((vr(a)!=="body"||Qr(d))&&(c=pi(a)),_n(a))){const _=Mt(a);v=ir(a),h.x=_.x+a.clientLeft,h.y=_.y+a.clientTop}const E=d&&!y&&!o?og(d,c,!0):zn(0);return{width:r.width*v.x,height:r.height*v.y,x:r.x*v.x-c.scrollLeft*v.x+h.x+E.x,y:r.y*v.y-c.scrollTop*v.y+h.y+E.y}}function A1(e){return Array.from(e.getClientRects())}function w1(e){const i=Zn(e),r=pi(e),a=e.ownerDocument.body,l=Vt(i.scrollWidth,i.clientWidth,a.scrollWidth,a.clientWidth),o=Vt(i.scrollHeight,i.clientHeight,a.scrollHeight,a.clientHeight);let d=-r.scrollLeft+Cs(e);const m=-r.scrollTop;return Bn(a).direction==="rtl"&&(d+=Vt(i.clientWidth,a.clientWidth)-l),{width:l,height:o,x:d,y:m}}function N1(e,i){const r=cn(e),a=Zn(e),l=r.visualViewport;let o=a.clientWidth,d=a.clientHeight,m=0,c=0;if(l){o=l.width,d=l.height;const v=vi();(!v||v&&i==="fixed")&&(m=l.offsetLeft,c=l.offsetTop)}return{width:o,height:d,x:m,y:c}}function R1(e,i){const r=Mt(e,!0,i==="fixed"),a=r.top+e.clientTop,l=r.left+e.clientLeft,o=_n(e)?ir(e):zn(1),d=e.clientWidth*o.x,m=e.clientHeight*o.y,c=l*o.x,v=a*o.y;return{width:d,height:m,x:c,y:v}}function Dd(e,i,r){let a;if(i==="viewport")a=N1(e,r);else if(i==="document")a=w1(Zn(e));else if(je(i))a=R1(i,r);else{const l=sg(e);a={x:i.x-l.x,y:i.y-l.y,width:i.width,height:i.height}}return li(a)}function ug(e,i){const r=ct(e);return r===i||!je(r)||gt(r)?!1:Bn(r).position==="fixed"||ug(r,i)}function S1(e,i){const r=i.get(e);if(r)return r;let a=wt(e,[],!1).filter(m=>je(m)&&vr(m)!=="body"),l=null;const o=Bn(e).position==="fixed";let d=o?ct(e):e;for(;je(d)&&!gt(d);){const m=Bn(d),c=Ls(d);!c&&m.position==="fixed"&&(l=null),(o?!c&&!l:!c&&m.position==="static"&&!!l&&["absolute","fixed"].includes(l.position)||Qr(d)&&!c&&ug(e,d))?a=a.filter(h=>h!==d):l=m,d=ct(d)}return i.set(e,a),a}function P1(e){let{element:i,boundary:r,rootBoundary:a,strategy:l}=e;const d=[...r==="clippingAncestors"?fi(i)?[]:S1(i,this._c):[].concat(r),a],m=d[0],c=d.reduce((v,h)=>{const y=Dd(i,h,l);return v.top=Vt(y.top,v.top),v.right=or(y.right,v.right),v.bottom=or(y.bottom,v.bottom),v.left=Vt(y.left,v.left),v},Dd(i,m,l));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function I1(e){const{width:i,height:r}=lg(e);return{width:i,height:r}}function O1(e,i,r){const a=_n(i),l=Zn(i),o=r==="fixed",d=Mt(e,!0,o,i);let m={scrollLeft:0,scrollTop:0};const c=zn(0);if(a||!a&&!o)if((vr(i)!=="body"||Qr(l))&&(m=pi(i)),a){const E=Mt(i,!0,o,i);c.x=E.x+i.clientLeft,c.y=E.y+i.clientTop}else l&&(c.x=Cs(l));const v=l&&!a&&!o?og(l,m):zn(0),h=d.left+m.scrollLeft-c.x-v.x,y=d.top+m.scrollTop-c.y-v.y;return{x:h,y,width:d.width,height:d.height}}function Ul(e){return Bn(e).position==="static"}function Vd(e,i){if(!_n(e)||Bn(e).position==="fixed")return null;if(i)return i(e);let r=e.offsetParent;return Zn(e)===r&&(r=r.ownerDocument.body),r}function dg(e,i){const r=cn(e);if(fi(e))return r;if(!_n(e)){let l=ct(e);for(;l&&!gt(l);){if(je(l)&&!Ul(l))return l;l=ct(l)}return r}let a=Vd(e,i);for(;a&&y1(a)&&Ul(a);)a=Vd(a,i);return a&&gt(a)&&Ul(a)&&!Ls(a)?r:a||b1(e)||r}const j1=async function(e){const i=this.getOffsetParent||dg,r=this.getDimensions,a=await r(e.floating);return{reference:O1(e.reference,await i(e.floating),e.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function B1(e){return Bn(e).direction==="rtl"}const F1={convertOffsetParentRelativeRectToViewportRelativeRect:T1,getDocumentElement:Zn,getClippingRect:P1,getOffsetParent:dg,getElementRects:j1,getClientRects:A1,getDimensions:I1,getScale:ir,isElement:je,isRTL:B1};function mg(e,i){return e.x===i.x&&e.y===i.y&&e.width===i.width&&e.height===i.height}function x1(e,i){let r=null,a;const l=Zn(e);function o(){var m;clearTimeout(a),(m=r)==null||m.disconnect(),r=null}function d(m,c){m===void 0&&(m=!1),c===void 0&&(c=1),o();const v=e.getBoundingClientRect(),{left:h,top:y,width:E,height:_}=v;if(m||i(),!E||!_)return;const O=za(y),T=za(l.clientWidth-(h+E)),b=za(l.clientHeight-(y+_)),N=za(h),S={rootMargin:-O+"px "+-T+"px "+-b+"px "+-N+"px",threshold:Vt(0,or(1,c))||1};let G=!0;function I(C){const F=C[0].intersectionRatio;if(F!==c){if(!G)return d();F?d(!1,F):a=setTimeout(()=>{d(!1,1e-7)},1e3)}F===1&&!mg(v,e.getBoundingClientRect())&&d(),G=!1}try{r=new IntersectionObserver(I,{...S,root:l.ownerDocument})}catch{r=new IntersectionObserver(I,S)}r.observe(e)}return d(!0),o}function Ld(e,i,r,a){a===void 0&&(a={});const{ancestorScroll:l=!0,ancestorResize:o=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:m=typeof IntersectionObserver=="function",animationFrame:c=!1}=a,v=Ms(e),h=l||o?[...v?wt(v):[],...wt(i)]:[];h.forEach(N=>{l&&N.addEventListener("scroll",r,{passive:!0}),o&&N.addEventListener("resize",r)});const y=v&&m?x1(v,r):null;let E=-1,_=null;d&&(_=new ResizeObserver(N=>{let[j]=N;j&&j.target===v&&_&&(_.unobserve(i),cancelAnimationFrame(E),E=requestAnimationFrame(()=>{var S;(S=_)==null||S.observe(i)})),r()}),v&&!c&&_.observe(v),_.observe(i));let O,T=c?Mt(e):null;c&&b();function b(){const N=Mt(e);T&&!mg(T,N)&&r(),T=N,O=requestAnimationFrame(b)}return r(),()=>{var N;h.forEach(j=>{l&&j.removeEventListener("scroll",r),o&&j.removeEventListener("resize",r)}),y?.(),(N=_)==null||N.disconnect(),_=null,c&&cancelAnimationFrame(O)}}const q1=h1,K1=k1,D1=v1,Md=f1,V1=(e,i,r)=>{const a=new Map,l={platform:F1,...r},o={...l.platform,_c:a};return c1(e,i,{...l,platform:o})};var ei=typeof document<"u"?w.useLayoutEffect:w.useEffect;function oi(e,i){if(e===i)return!0;if(typeof e!=typeof i)return!1;if(typeof e=="function"&&e.toString()===i.toString())return!0;let r,a,l;if(e&&i&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==i.length)return!1;for(a=r;a--!==0;)if(!oi(e[a],i[a]))return!1;return!0}if(l=Object.keys(e),r=l.length,r!==Object.keys(i).length)return!1;for(a=r;a--!==0;)if(!{}.hasOwnProperty.call(i,l[a]))return!1;for(a=r;a--!==0;){const o=l[a];if(!(o==="_owner"&&e.$$typeof)&&!oi(e[o],i[o]))return!1}return!0}return e!==e&&i!==i}function gg(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Cd(e,i){const r=gg(e);return Math.round(i*r)/r}function $l(e){const i=w.useRef(e);return ei(()=>{i.current=e}),i}function L1(e){e===void 0&&(e={});const{placement:i="bottom",strategy:r="absolute",middleware:a=[],platform:l,elements:{reference:o,floating:d}={},transform:m=!0,whileElementsMounted:c,open:v}=e,[h,y]=w.useState({x:0,y:0,strategy:r,placement:i,middlewareData:{},isPositioned:!1}),[E,_]=w.useState(a);oi(E,a)||_(a);const[O,T]=w.useState(null),[b,N]=w.useState(null),j=w.useCallback(H=>{H!==C.current&&(C.current=H,T(H))},[]),S=w.useCallback(H=>{H!==F.current&&(F.current=H,N(H))},[]),G=o||O,I=d||b,C=w.useRef(null),F=w.useRef(null),x=w.useRef(h),z=c!=null,Q=$l(c),X=$l(l),Z=$l(v),V=w.useCallback(()=>{if(!C.current||!F.current)return;const H={placement:i,strategy:r,middleware:E};X.current&&(H.platform=X.current),V1(C.current,F.current,H).then(Y=>{const ae={...Y,isPositioned:Z.current!==!1};q.current&&!oi(x.current,ae)&&(x.current=ae,zm.flushSync(()=>{y(ae)}))})},[E,i,r,X,Z]);ei(()=>{v===!1&&x.current.isPositioned&&(x.current.isPositioned=!1,y(H=>({...H,isPositioned:!1})))},[v]);const q=w.useRef(!1);ei(()=>(q.current=!0,()=>{q.current=!1}),[]),ei(()=>{if(G&&(C.current=G),I&&(F.current=I),G&&I){if(Q.current)return Q.current(G,I,V);V()}},[G,I,V,Q,z]);const J=w.useMemo(()=>({reference:C,floating:F,setReference:j,setFloating:S}),[j,S]),te=w.useMemo(()=>({reference:G,floating:I}),[G,I]),W=w.useMemo(()=>{const H={position:r,left:0,top:0};if(!te.floating)return H;const Y=Cd(te.floating,h.x),ae=Cd(te.floating,h.y);return m?{...H,transform:"translate("+Y+"px, "+ae+"px)",...gg(te.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:Y,top:ae}},[r,m,te.floating,h.x,h.y]);return w.useMemo(()=>({...h,update:V,refs:J,elements:te,floatingStyles:W}),[h,V,J,te,W])}const M1=e=>{function i(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:a,padding:l}=typeof e=="function"?e(r):e;return a&&i(a)?a.current!=null?Md({element:a.current,padding:l}).fn(r):{}:a?Md({element:a,padding:l}).fn(r):{}}}},C1=(e,i)=>({...q1(e),options:[e,i]}),G1=(e,i)=>({...K1(e),options:[e,i]}),H1=(e,i)=>({...D1(e),options:[e,i]}),U1=(e,i)=>({...M1(e),options:[e,i]}),Gd=/(\w+)/g;function $1(e,i){const r=Array.isArray(e)?e:Y1(e);for(const a of i){if(!a)continue;let l=a;for(let o=0;o<r.length;o++){const d=l[r[o]];d!==void 0&&(l=d)}if(typeof l=="string")return l}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function Y1(e){const i=[];let r=Gd.exec(e);for(;r;){const[,a,l]=r;i.push(a||l),r=Gd.exec(e)}return i}const W1=/{[^}]*}/g;function hi(e,...i){const r=eg(),a=r.translations||[],l=[...i,...Array.isArray(a)?a.map(d=>d[e]):[a[e]],r.locale[e]];return(d,m)=>{const c=$1(d,l);return m?c.replace(W1,v=>{const h=v.substring(1,v.length-1);if(m[h]===void 0){const y=JSON.stringify(m);throw new Error(`Error translating key '${d}'. No replacement syntax ({}) found for key '${h}'. The following replacements were passed: '${y}'`)}return m[h]}):c}}var z1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const J1=w.forwardRef((e,i)=>{var{className:r,size:a="medium",title:l,transparent:o=!1,variant:d="neutral",id:m,"data-color":c}=e,v=z1(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:h}=Pe(),y=mi(),E=hi("Loader");return U.createElement("svg",Object.assign({"aria-labelledby":m??`loader-${y}`,ref:i,className:h("navds-loader",r,`navds-loader--${a}`,`navds-loader--${d}`,{"navds-loader--transparent":o}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":c??X1(d)},Jr(v,["children"]),{"data-variant":d}),U.createElement("title",{id:m??`loader-${y}`},l||E("title")),U.createElement("circle",{className:h("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),U.createElement("circle",{className:h("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function X1(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var Z1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Gs=w.forwardRef((e,i)=>{var{as:r="button",variant:a="primary",className:l,children:o,size:d="medium",loading:m=!1,disabled:c,icon:v,iconPosition:h="left",onKeyUp:y,"data-color":E}=e,_=Z1(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:O}=Pe(),T=c||m?Jr(_,["href"]):_,b=N=>{N.key===" "&&!c&&!m&&N.currentTarget.click()};return U.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":E??Q1(a),"data-variant":e5(a)},T,{ref:i,onKeyUp:gi(y,b),className:O(l,"navds-button",`navds-button--${a}`,`navds-button--${d}`,{"navds-button--loading":m,"navds-button--icon-only":!!v&&!o,"navds-button--disabled":c??m}),disabled:c??m?!0:void 0}),v&&h==="left"&&U.createElement("span",{className:O("navds-button__icon")},v),m&&U.createElement(J1,{size:d}),o&&U.createElement(qs,{as:"span",size:d==="medium"?"medium":"small"},o),v&&h==="right"&&U.createElement("span",{className:O("navds-button__icon")},v))});function Q1(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function e5(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}function n5(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function t5(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(i=>{let{brand:r,version:a}=i;return r+"/"+a}).join(" "):navigator.userAgent}function r5(){return/apple/i.test(navigator.vendor)}function a5(){return n5().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function i5(){return t5().includes("jsdom/")}const l5="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Hd(e){let i=e.activeElement;for(;((r=i)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;i=i.shadowRoot.activeElement}return i}function Yr(e,i){if(!e||!i)return!1;const r=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(r&&si(r)){let a=i;for(;a;){if(e===a)return!0;a=a.parentNode||a.host}}return!1}function ar(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Yl(e,i){if(i==null)return!1;if("composedPath"in e)return e.composedPath().includes(i);const r=e;return r.target!=null&&i.contains(r.target)}function s5(e){return e.matches("html,body")}function Dt(e){return e?.ownerDocument||document}function o5(e){return _n(e)&&e.matches(l5)}function u5(e){if(!e||i5())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function Wl(e,i,r){r===void 0&&(r=!0);let a=e.filter(o=>{var d;return o.parentId===i&&((d=o.context)==null?void 0:d.open)}),l=a;for(;l.length;)l=r?e.filter(o=>{var d;return(d=l)==null?void 0:d.some(m=>{var c;return o.parentId===m.id&&((c=o.context)==null?void 0:c.open)})}):e,a=a.concat(l);return a}function d5(e){return"nativeEvent"in e}function fs(e,i){const r=["mouse","pen"];return r.push("",void 0),r.includes(e)}var dr=typeof document<"u"?w.useLayoutEffect:w.useEffect;const m5={...Um};function Ja(e){const i=w.useRef(e);return dr(()=>{i.current=e}),i}const g5=m5.useInsertionEffect,c5=g5||(e=>e());function dt(e){const i=w.useRef(()=>{});return c5(()=>{i.current=e}),w.useCallback(function(){for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return i.current==null?void 0:i.current(...a)},[])}const f5="data-floating-ui-focusable",Ud="active",$d="selected",v5={...Um};let Yd=!1,p5=0;const Wd=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+p5++;function h5(){const[e,i]=w.useState(()=>Yd?Wd():void 0);return dr(()=>{e==null&&i(Wd())},[]),w.useEffect(()=>{Yd=!0},[]),e}const k5=v5.useId,y5=k5||h5;function b5(){const e=new Map;return{emit(i,r){var a;(a=e.get(i))==null||a.forEach(l=>l(r))},on(i,r){e.has(i)||e.set(i,new Set),e.get(i).add(r)},off(i,r){var a;(a=e.get(i))==null||a.delete(r)}}}const E5=w.createContext(null),_5=w.createContext(null),cg=()=>{var e;return((e=w.useContext(E5))==null?void 0:e.id)||null},Hs=()=>w.useContext(_5);function Us(e){return"data-floating-ui-"+e}function jn(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const zd=Us("safe-polygon");function zl(e,i,r){if(r&&!fs(r))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const a=e();return typeof a=="number"?a:a?.[i]}return e?.[i]}function Jl(e){return typeof e=="function"?e():e}function T5(e,i){i===void 0&&(i={});const{open:r,onOpenChange:a,dataRef:l,events:o,elements:d}=e,{enabled:m=!0,delay:c=0,handleClose:v=null,mouseOnly:h=!1,restMs:y=0,move:E=!0}=i,_=Hs(),O=cg(),T=Ja(v),b=Ja(c),N=Ja(r),j=Ja(y),S=w.useRef(),G=w.useRef(-1),I=w.useRef(),C=w.useRef(-1),F=w.useRef(!0),x=w.useRef(!1),z=w.useRef(()=>{}),Q=w.useRef(!1),X=w.useCallback(()=>{var W;const H=(W=l.current.openEvent)==null?void 0:W.type;return H?.includes("mouse")&&H!=="mousedown"},[l]);w.useEffect(()=>{if(!m)return;function W(H){let{open:Y}=H;Y||(jn(G),jn(C),F.current=!0,Q.current=!1)}return o.on("openchange",W),()=>{o.off("openchange",W)}},[m,o]),w.useEffect(()=>{if(!m||!T.current||!r)return;function W(Y){X()&&a(!1,Y,"hover")}const H=Dt(d.floating).documentElement;return H.addEventListener("mouseleave",W),()=>{H.removeEventListener("mouseleave",W)}},[d.floating,r,a,m,T,X]);const Z=w.useCallback(function(W,H,Y){H===void 0&&(H=!0),Y===void 0&&(Y="hover");const ae=zl(b.current,"close",S.current);ae&&!I.current?(jn(G),G.current=window.setTimeout(()=>a(!1,W,Y),ae)):H&&(jn(G),a(!1,W,Y))},[b,a]),V=dt(()=>{z.current(),I.current=void 0}),q=dt(()=>{if(x.current){const W=Dt(d.floating).body;W.style.pointerEvents="",W.removeAttribute(zd),x.current=!1}}),J=dt(()=>l.current.openEvent?["click","mousedown"].includes(l.current.openEvent.type):!1);w.useEffect(()=>{if(!m)return;function W(se){if(jn(G),F.current=!1,h&&!fs(S.current)||Jl(j.current)>0&&!zl(b.current,"open"))return;const pe=zl(b.current,"open",S.current);pe?G.current=window.setTimeout(()=>{N.current||a(!0,se,"hover")},pe):r||a(!0,se,"hover")}function H(se){if(J()){q();return}z.current();const pe=Dt(d.floating);if(jn(C),Q.current=!1,T.current&&l.current.floatingContext){r||jn(G),I.current=T.current({...l.current.floatingContext,tree:_,x:se.clientX,y:se.clientY,onClose(){q(),V(),J()||Z(se,!0,"safe-polygon")}});const Le=I.current;pe.addEventListener("mousemove",Le),z.current=()=>{pe.removeEventListener("mousemove",Le)};return}(S.current==="touch"?!Yr(d.floating,se.relatedTarget):!0)&&Z(se)}function Y(se){J()||l.current.floatingContext&&(T.current==null||T.current({...l.current.floatingContext,tree:_,x:se.clientX,y:se.clientY,onClose(){q(),V(),J()||Z(se)}})(se))}function ae(){jn(G)}function ne(se){J()||Z(se,!1)}if(je(d.domReference)){const se=d.domReference,pe=d.floating;return r&&se.addEventListener("mouseleave",Y),E&&se.addEventListener("mousemove",W,{once:!0}),se.addEventListener("mouseenter",W),se.addEventListener("mouseleave",H),pe&&(pe.addEventListener("mouseleave",Y),pe.addEventListener("mouseenter",ae),pe.addEventListener("mouseleave",ne)),()=>{r&&se.removeEventListener("mouseleave",Y),E&&se.removeEventListener("mousemove",W),se.removeEventListener("mouseenter",W),se.removeEventListener("mouseleave",H),pe&&(pe.removeEventListener("mouseleave",Y),pe.removeEventListener("mouseenter",ae),pe.removeEventListener("mouseleave",ne))}}},[d,m,e,h,E,Z,V,q,a,r,N,_,b,T,l,J,j]),dr(()=>{var W;if(m&&r&&(W=T.current)!=null&&W.__options.blockPointerEvents&&X()){x.current=!0;const Y=d.floating;if(je(d.domReference)&&Y){var H;const ae=Dt(d.floating).body;ae.setAttribute(zd,"");const ne=d.domReference,se=_==null||(H=_.nodesRef.current.find(pe=>pe.id===O))==null||(H=H.context)==null?void 0:H.elements.floating;return se&&(se.style.pointerEvents=""),ae.style.pointerEvents="none",ne.style.pointerEvents="auto",Y.style.pointerEvents="auto",()=>{ae.style.pointerEvents="",ne.style.pointerEvents="",Y.style.pointerEvents=""}}}},[m,r,O,d,_,T,X]),dr(()=>{r||(S.current=void 0,Q.current=!1,V(),q())},[r,V,q]),w.useEffect(()=>()=>{V(),jn(G),jn(C),q()},[m,d.domReference,V,q]);const te=w.useMemo(()=>{function W(H){S.current=H.pointerType}return{onPointerDown:W,onPointerEnter:W,onMouseMove(H){const{nativeEvent:Y}=H;function ae(){!F.current&&!N.current&&a(!0,Y,"hover")}h&&!fs(S.current)||r||Jl(j.current)===0||Q.current&&H.movementX**2+H.movementY**2<2||(jn(C),S.current==="touch"?ae():(Q.current=!0,C.current=window.setTimeout(ae,Jl(j.current))))}}},[h,a,r,N,j]);return w.useMemo(()=>m?{reference:te}:{},[m,te])}function Xl(e,i){if(!e||!i)return!1;const r=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(r&&si(r)){let a=i;for(;a;){if(e===a)return!0;a=a.parentNode||a.host}}return!1}function A5(e){return"composedPath"in e?e.composedPath()[0]:e.target}const w5={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},N5={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Jd=e=>{var i,r;return{escapeKey:typeof e=="boolean"?e:(i=e?.escapeKey)!=null?i:!1,outsidePress:typeof e=="boolean"?e:(r=e?.outsidePress)!=null?r:!0}};function R5(e,i){i===void 0&&(i={});const{open:r,onOpenChange:a,elements:l,dataRef:o}=e,{enabled:d=!0,escapeKey:m=!0,outsidePress:c=!0,outsidePressEvent:v="pointerdown",referencePress:h=!1,referencePressEvent:y="pointerdown",ancestorScroll:E=!1,bubbles:_,capture:O}=i,T=Hs(),b=dt(typeof c=="function"?c:()=>!1),N=typeof c=="function"?b:c,j=w.useRef(!1),S=w.useRef(!1),{escapeKey:G,outsidePress:I}=Jd(_),{escapeKey:C,outsidePress:F}=Jd(O),x=w.useRef(!1),z=dt(J=>{var te;if(!r||!d||!m||J.key!=="Escape"||x.current)return;const W=(te=o.current.floatingContext)==null?void 0:te.nodeId,H=T?Wl(T.nodesRef.current,W):[];if(!G&&(J.stopPropagation(),H.length>0)){let Y=!0;if(H.forEach(ae=>{var ne;if((ne=ae.context)!=null&&ne.open&&!ae.context.dataRef.current.__escapeKeyBubbles){Y=!1;return}}),!Y)return}a(!1,d5(J)?J.nativeEvent:J,"escape-key")}),Q=dt(J=>{var te;const W=()=>{var H;z(J),(H=ar(J))==null||H.removeEventListener("keydown",W)};(te=ar(J))==null||te.addEventListener("keydown",W)}),X=dt(J=>{var te;const W=j.current;j.current=!1;const H=S.current;if(S.current=!1,v==="click"&&H||W||typeof N=="function"&&!N(J))return;const Y=ar(J),ae="["+Us("inert")+"]",ne=Dt(l.floating).querySelectorAll(ae);let se=je(Y)?Y:null;for(;se&&!gt(se);){const xe=ct(se);if(gt(xe)||!je(xe))break;se=xe}if(ne.length&&je(Y)&&!s5(Y)&&!Yr(Y,l.floating)&&Array.from(ne).every(xe=>!Yr(se,xe)))return;if(_n(Y)&&q){const xe=gt(Y),Me=Bn(Y),ke=/auto|scroll/,Ae=xe||ke.test(Me.overflowX),Xe=xe||ke.test(Me.overflowY),Ce=Ae&&Y.clientWidth>0&&Y.scrollWidth>Y.clientWidth,He=Xe&&Y.clientHeight>0&&Y.scrollHeight>Y.clientHeight,Tn=Me.direction==="rtl",Ke=He&&(Tn?J.offsetX<=Y.offsetWidth-Y.clientWidth:J.offsetX>Y.clientWidth),Ze=Ce&&J.offsetY>Y.clientHeight;if(Ke||Ze)return}const pe=(te=o.current.floatingContext)==null?void 0:te.nodeId,fn=T&&Wl(T.nodesRef.current,pe).some(xe=>{var Me;return Yl(J,(Me=xe.context)==null?void 0:Me.elements.floating)});if(Yl(J,l.floating)||Yl(J,l.domReference)||fn)return;const Le=T?Wl(T.nodesRef.current,pe):[];if(Le.length>0){let xe=!0;if(Le.forEach(Me=>{var ke;if((ke=Me.context)!=null&&ke.open&&!Me.context.dataRef.current.__outsidePressBubbles){xe=!1;return}}),!xe)return}a(!1,J,"outside-press")}),Z=dt(J=>{var te;const W=()=>{var H;X(J),(H=ar(J))==null||H.removeEventListener(v,W)};(te=ar(J))==null||te.addEventListener(v,W)});w.useEffect(()=>{if(!r||!d)return;o.current.__escapeKeyBubbles=G,o.current.__outsidePressBubbles=I;let J=-1;function te(ne){a(!1,ne,"ancestor-scroll")}function W(){window.clearTimeout(J),x.current=!0}function H(){J=window.setTimeout(()=>{x.current=!1},vi()?5:0)}const Y=Dt(l.floating);m&&(Y.addEventListener("keydown",C?Q:z,C),Y.addEventListener("compositionstart",W),Y.addEventListener("compositionend",H)),N&&Y.addEventListener(v,F?Z:X,F);let ae=[];return E&&(je(l.domReference)&&(ae=wt(l.domReference)),je(l.floating)&&(ae=ae.concat(wt(l.floating))),!je(l.reference)&&l.reference&&l.reference.contextElement&&(ae=ae.concat(wt(l.reference.contextElement)))),ae=ae.filter(ne=>{var se;return ne!==((se=Y.defaultView)==null?void 0:se.visualViewport)}),ae.forEach(ne=>{ne.addEventListener("scroll",te,{passive:!0})}),()=>{m&&(Y.removeEventListener("keydown",C?Q:z,C),Y.removeEventListener("compositionstart",W),Y.removeEventListener("compositionend",H)),N&&Y.removeEventListener(v,F?Z:X,F),ae.forEach(ne=>{ne.removeEventListener("scroll",te)}),window.clearTimeout(J)}},[o,l,m,N,v,r,a,E,d,G,I,z,C,Q,X,F,Z]),w.useEffect(()=>{j.current=!1},[N,v]);const V=w.useMemo(()=>({onKeyDown:z,...h&&{[w5[y]]:J=>{a(!1,J.nativeEvent,"reference-press")},...y!=="click"&&{onClick(J){a(!1,J.nativeEvent,"reference-press")}}}}),[z,a,h,y]),q=w.useMemo(()=>({onKeyDown:z,onMouseDown(){S.current=!0},onMouseUp(){S.current=!0},[N5[v]]:()=>{j.current=!0}}),[z,v]);return w.useMemo(()=>d?{reference:V,floating:q}:{},[d,V,q])}function S5(e){const{open:i=!1,onOpenChange:r,elements:a}=e,l=y5(),o=w.useRef({}),[d]=w.useState(()=>b5()),m=cg()!=null,[c,v]=w.useState(a.reference),h=dt((_,O,T)=>{o.current.openEvent=_?O:void 0,d.emit("openchange",{open:_,event:O,reason:T,nested:m}),r?.(_,O,T)}),y=w.useMemo(()=>({setPositionReference:v}),[]),E=w.useMemo(()=>({reference:c||a.reference||null,floating:a.floating||null,domReference:a.reference}),[c,a.reference,a.floating]);return w.useMemo(()=>({dataRef:o,open:i,onOpenChange:h,elements:E,events:d,floatingId:l,refs:y}),[i,h,E,d,l,y])}function P5(e){e===void 0&&(e={});const{nodeId:i}=e,r=S5({...e,elements:{reference:null,floating:null,...e.elements}}),a=e.rootContext||r,l=a.elements,[o,d]=w.useState(null),[m,c]=w.useState(null),h=l?.domReference||o,y=w.useRef(null),E=Hs();dr(()=>{h&&(y.current=h)},[h]);const _=L1({...e,elements:{...l,...m&&{reference:m}}}),O=w.useCallback(S=>{const G=je(S)?{getBoundingClientRect:()=>S.getBoundingClientRect(),getClientRects:()=>S.getClientRects(),contextElement:S}:S;c(G),_.refs.setReference(G)},[_.refs]),T=w.useCallback(S=>{(je(S)||S===null)&&(y.current=S,d(S)),(je(_.refs.reference.current)||_.refs.reference.current===null||S!==null&&!je(S))&&_.refs.setReference(S)},[_.refs]),b=w.useMemo(()=>({..._.refs,setReference:T,setPositionReference:O,domReference:y}),[_.refs,T,O]),N=w.useMemo(()=>({..._.elements,domReference:h}),[_.elements,h]),j=w.useMemo(()=>({..._,...a,refs:b,elements:N,nodeId:i}),[_,b,N,i,a]);return dr(()=>{a.dataRef.current.floatingContext=j;const S=E?.nodesRef.current.find(G=>G.id===i);S&&(S.context=j)}),w.useMemo(()=>({..._,context:j,refs:b,elements:N}),[_,b,N,j])}function Zl(){return a5()&&r5()}function I5(e,i){i===void 0&&(i={});const{open:r,onOpenChange:a,events:l,dataRef:o,elements:d}=e,{enabled:m=!0,visibleOnly:c=!0}=i,v=w.useRef(!1),h=w.useRef(-1),y=w.useRef(!0);w.useEffect(()=>{if(!m)return;const _=cn(d.domReference);function O(){!r&&_n(d.domReference)&&d.domReference===Hd(Dt(d.domReference))&&(v.current=!0)}function T(){y.current=!0}function b(){y.current=!1}return _.addEventListener("blur",O),Zl()&&(_.addEventListener("keydown",T,!0),_.addEventListener("pointerdown",b,!0)),()=>{_.removeEventListener("blur",O),Zl()&&(_.removeEventListener("keydown",T,!0),_.removeEventListener("pointerdown",b,!0))}},[d.domReference,r,m]),w.useEffect(()=>{if(!m)return;function _(O){let{reason:T}=O;(T==="reference-press"||T==="escape-key")&&(v.current=!0)}return l.on("openchange",_),()=>{l.off("openchange",_)}},[l,m]),w.useEffect(()=>()=>{jn(h)},[]);const E=w.useMemo(()=>({onMouseLeave(){v.current=!1},onFocus(_){if(v.current)return;const O=ar(_.nativeEvent);if(c&&je(O)){if(Zl()&&!_.relatedTarget){if(!y.current&&!o5(O))return}else if(!u5(O))return}a(!0,_.nativeEvent,"focus")},onBlur(_){v.current=!1;const O=_.relatedTarget,T=_.nativeEvent,b=je(O)&&O.hasAttribute(Us("focus-guard"))&&O.getAttribute("data-type")==="outside";h.current=window.setTimeout(()=>{var N;const j=Hd(d.domReference?d.domReference.ownerDocument:document);!O&&j===d.domReference||Yr((N=o.current.floatingContext)==null?void 0:N.refs.floating.current,j)||Yr(d.domReference,j)||b||a(!1,T,"focus")})}}),[o,d.domReference,a,c]);return w.useMemo(()=>m?{reference:E}:{},[m,E])}function Ql(e,i,r){const a=new Map,l=r==="item";let o=e;if(l&&e){const{[Ud]:d,[$d]:m,...c}=e;o=c}return{...r==="floating"&&{tabIndex:-1,[f5]:""},...o,...i.map(d=>{const m=d?d[r]:null;return typeof m=="function"?e?m(e):null:m}).concat(e).reduce((d,m)=>(m&&Object.entries(m).forEach(c=>{let[v,h]=c;if(!(l&&[Ud,$d].includes(v)))if(v.indexOf("on")===0){if(a.has(v)||a.set(v,[]),typeof h=="function"){var y;(y=a.get(v))==null||y.push(h),d[v]=function(){for(var E,_=arguments.length,O=new Array(_),T=0;T<_;T++)O[T]=arguments[T];return(E=a.get(v))==null?void 0:E.map(b=>b(...O)).find(b=>b!==void 0)}}}else d[v]=h}),d),{})}}function O5(e){e===void 0&&(e=[]);const i=e.map(m=>m?.reference),r=e.map(m=>m?.floating),a=e.map(m=>m?.item),l=w.useCallback(m=>Ql(m,e,"reference"),i),o=w.useCallback(m=>Ql(m,e,"floating"),r),d=w.useCallback(m=>Ql(m,e,"item"),a);return w.useMemo(()=>({getReferenceProps:l,getFloatingProps:o,getItemProps:d}),[l,o,d])}function j5(e,i,r){r===void 0&&(r=!0);let a=e.filter(o=>{var d;return o.parentId===i&&((d=o.context)==null?void 0:d.open)}),l=a;for(;l.length;)l=r?e.filter(o=>{var d;return(d=l)==null?void 0:d.some(m=>{var c;return o.parentId===m.id&&((c=o.context)==null?void 0:c.open)})}):e,a=a.concat(l);return a}function Xd(e,i){const[r,a]=e;let l=!1;const o=i.length;for(let d=0,m=o-1;d<o;m=d++){const[c,v]=i[d]||[0,0],[h,y]=i[m]||[0,0];v>=a!=y>=a&&r<=(h-c)*(a-v)/(y-v)+c&&(l=!l)}return l}function B5(e,i){return e[0]>=i.x&&e[0]<=i.x+i.width&&e[1]>=i.y&&e[1]<=i.y+i.height}function F5(e){e===void 0&&(e={});const{buffer:i=.5,blockPointerEvents:r=!1,requireIntent:a=!0}=e;let l,o=!1,d=null,m=null,c=performance.now();function v(y,E){const _=performance.now(),O=_-c;if(d===null||m===null||O===0)return d=y,m=E,c=_,null;const T=y-d,b=E-m,j=Math.sqrt(T*T+b*b)/O;return d=y,m=E,c=_,j}const h=y=>{let{x:E,y:_,placement:O,elements:T,onClose:b,nodeId:N,tree:j}=y;return function(G){function I(){clearTimeout(l),b()}if(clearTimeout(l),!T.domReference||!T.floating||O==null||E==null||_==null)return;const{clientX:C,clientY:F}=G,x=[C,F],z=A5(G),Q=G.type==="mouseleave",X=Xl(T.floating,z),Z=Xl(T.domReference,z),V=T.domReference.getBoundingClientRect(),q=T.floating.getBoundingClientRect(),J=O.split("-")[0],te=E>q.right-q.width/2,W=_>q.bottom-q.height/2,H=B5(x,V),Y=q.width>V.width,ae=q.height>V.height,ne=(Y?V:q).left,se=(Y?V:q).right,pe=(ae?V:q).top,fn=(ae?V:q).bottom;if(X&&(o=!0,!Q))return;if(Z&&(o=!1),Z&&!Q){o=!0;return}if(Q&&je(G.relatedTarget)&&Xl(T.floating,G.relatedTarget)||j&&j5(j.nodesRef.current,N).some(Me=>{let{context:ke}=Me;return ke?.open}))return;if(J==="top"&&_>=V.bottom-1||J==="bottom"&&_<=V.top+1||J==="left"&&E>=V.right-1||J==="right"&&E<=V.left+1)return I();let Le=[];switch(J){case"top":Le=[[ne,V.top+1],[ne,q.bottom-1],[se,q.bottom-1],[se,V.top+1]];break;case"bottom":Le=[[ne,q.top+1],[ne,V.bottom-1],[se,V.bottom-1],[se,q.top+1]];break;case"left":Le=[[q.right-1,fn],[q.right-1,pe],[V.left+1,pe],[V.left+1,fn]];break;case"right":Le=[[V.right-1,fn],[V.right-1,pe],[q.left+1,pe],[q.left+1,fn]];break}function xe(Me){let[ke,Ae]=Me;switch(J){case"top":{const Xe=[Y?ke+i/2:te?ke+i*4:ke-i*4,Ae+i+1],Ce=[Y?ke-i/2:te?ke+i*4:ke-i*4,Ae+i+1],He=[[q.left,te||Y?q.bottom-i:q.top],[q.right,te?Y?q.bottom-i:q.top:q.bottom-i]];return[Xe,Ce,...He]}case"bottom":{const Xe=[Y?ke+i/2:te?ke+i*4:ke-i*4,Ae-i],Ce=[Y?ke-i/2:te?ke+i*4:ke-i*4,Ae-i],He=[[q.left,te||Y?q.top+i:q.bottom],[q.right,te?Y?q.top+i:q.bottom:q.top+i]];return[Xe,Ce,...He]}case"left":{const Xe=[ke+i+1,ae?Ae+i/2:W?Ae+i*4:Ae-i*4],Ce=[ke+i+1,ae?Ae-i/2:W?Ae+i*4:Ae-i*4];return[...[[W||ae?q.right-i:q.left,q.top],[W?ae?q.right-i:q.left:q.right-i,q.bottom]],Xe,Ce]}case"right":{const Xe=[ke-i,ae?Ae+i/2:W?Ae+i*4:Ae-i*4],Ce=[ke-i,ae?Ae-i/2:W?Ae+i*4:Ae-i*4],He=[[W||ae?q.left+i:q.right,q.top],[W?ae?q.left+i:q.right:q.left+i,q.bottom]];return[Xe,Ce,...He]}}}if(!Xd([C,F],Le)){if(o&&!H)return I();if(!Q&&a){const Me=v(G.clientX,G.clientY);if(Me!==null&&Me<.1)return I()}Xd([C,F],xe([E,_]))?!o&&a&&(l=window.setTimeout(I,40)):I()}}};return h.__options={blockPointerEvents:r},h}var x5=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const q5=w.forwardRef((e,i)=>{var{className:r,header:a,children:l,open:o,defaultOpen:d=!1,onClick:m,size:c="medium",onOpenChange:v}=e,h=x5(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:y}=Pe(),[E,_]=Ks({defaultValue:d,value:o,onChange:v}),O=c==="small"?"small":"medium";return U.createElement("div",{className:y("navds-read-more",`navds-read-more--${c}`,r,{"navds-read-more--open":E}),"data-volume":"low"},U.createElement("button",Object.assign({},h,{ref:i,type:"button",className:y("navds-read-more__button","navds-body-short",{"navds-body-short--small":c==="small"}),onClick:gi(m,()=>_(T=>!T)),"aria-expanded":E,"data-state":E?"open":"closed"}),U.createElement(Zm,{className:y("navds-read-more__expand-icon"),"aria-hidden":!0}),U.createElement("span",null,a)),U.createElement(ri,{as:"div","aria-hidden":!E,className:y("navds-read-more__content",{"navds-read-more__content--closed":!E}),size:O,"data-state":E?"open":"closed"},l))}),K5=w.createContext(null),D5=(e,i)=>{var r,a,l;const{size:o,error:d,errorId:m}=e,c=w.useContext(K5),v=mi(),h=(r=e.id)!==null&&r!==void 0?r:`${i}-${v}`,y=m??`${i}-error-${v}`,E=`${i}-description-${v}`,_=c?.disabled||e.disabled,O=(c?.readOnly||e.readOnly)&&!_||void 0,T=!_&&!O&&!!(d||c?.error),b=!_&&!O&&!!d&&typeof d!="boolean",N=Object.assign({},T?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:b,hasError:T,errorId:y,inputDescriptionId:E,size:(a=o??c?.size)!==null&&a!==void 0?a:"medium",readOnly:O,inputProps:Object.assign(Object.assign({id:h},N),{"aria-describedby":Hm(e["aria-describedby"],{[E]:e.description&&!vs(e.description),[y]:b,[(l=c?.errorId)!==null&&l!==void 0?l:""]:T&&c?.error})||void 0,disabled:_})}};function vs(e,i=!0){if(U.isValidElement(e)){if(e.type===q5)return!0;if(e.props.children&&i)return vs(e.props.children,!1)}else if(Array.isArray(e))return e.some(r=>vs(r,i));return!1}function Je(e,i,r,a){return a?typeof a=="string"?{[`--__${e}c-${i}-${r}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([l,o])=>[`--__${e}c-${i}-${r}-${l}`,o])):{}}const V5={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Zd=(e,i,r,a,l,o)=>i.split(" ").map((d,m,c)=>{var v;if(e==="margin-inline"&&d==="full")return`calc((100vw - ${100/c.length}%)/-2)`;if(e==="padding-inline"&&d==="full")return`calc((100vw - ${100/c.length}%)/2)`;if(["mi","mb"].includes(e)&&d==="auto")return"auto";let h=`var(--${o}-${r}-${d})`;if(a.includes(d))h=d==="px"?"1px":d;else if(d.startsWith("space"))h=`var(--${o}-${d})`;else{const y=`--${o}-spacing-${d}`;h=`var(${(v=V5[y])!==null&&v!==void 0?v:y})`}return l?d==="0"?"0":`calc(-1 * ${h})`:h}).join(" ");function En(e,i,r,a,l,o=!1,d=[]){if(!l)return{};if(typeof l=="string")return{[`--__${e}c-${i}-${r}-xs`]:Zd(r,l,a,d,o,e)};const m={};return Object.entries(l).forEach(([c,v])=>{m[`--__${e}c-${i}-${r}-${c}`]=Zd(r,v,a,d,o,e)}),m}const fg=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],vg=({children:e,className:i,padding:r,paddingInline:a,paddingBlock:l,margin:o,marginInline:d,marginBlock:m,width:c,minWidth:v,maxWidth:h,height:y,minHeight:E,maxHeight:_,position:O,inset:T,top:b,right:N,left:j,bottom:S,overflow:G,overflowX:I,overflowY:C,flexBasis:F,flexGrow:x,flexShrink:z,gridColumn:Q})=>{const X=gr(!1),{cn:Z}=Pe(),V=X?"ax":"a",q=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},En(V,"r","p","spacing",r)),En(V,"r","pi","spacing",a)),En(V,"r","pb","spacing",l)),En(V,"r","m","spacing",o)),En(V,"r","mi","spacing",d)),En(V,"r","mb","spacing",m)),Je(V,"r","w",c)),Je(V,"r","minw",v)),Je(V,"r","maxw",h)),Je(V,"r","h",y)),Je(V,"r","minh",E)),Je(V,"r","maxh",_)),Je(V,"r","position",O)),En(V,"r","inset","spacing",T)),En(V,"r","top","spacing",b)),En(V,"r","right","spacing",N)),En(V,"r","bottom","spacing",S)),En(V,"r","left","spacing",j)),Je(V,"r","overflow",G)),Je(V,"r","overflowx",I)),Je(V,"r","overflowy",C)),Je(V,"r","flex-basis",F)),Je(V,"r","flex-grow",x)),Je(V,"r","flex-shrink",z)),Je(V,"r","grid-column",Q));return U.createElement(zr,{className:Z({className:i,"navds-r-p":r,"navds-r-pi":a,"navds-r-pb":l,"navds-r-m":o,"navds-r-mi":d,"navds-r-mb":m,"navds-r-w":c,"navds-r-minw":v,"navds-r-maxw":h,"navds-r-h":y,"navds-r-minh":E,"navds-r-maxh":_,"navds-r-position":O,"navds-r-inset":T,"navds-r-top":b,"navds-r-right":N,"navds-r-bottom":S,"navds-r-left":j,"navds-r-overflow":G,"navds-r-overflowx":I,"navds-r-overflowy":C,"navds-r-flex-basis":F,"navds-r-flex-grow":x,"navds-r-flex-shrink":z,"navds-r-grid-column":Q}),style:q},e)};var L5=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const M5=w.forwardRef((e,i)=>{var{children:r,className:a,as:l="div",columns:o,gap:d,style:m,align:c,asChild:v}=e,h=L5(e,["children","className","as","columns","gap","style","align","asChild"]);const E=gr(!1)?"ax":"a",{cn:_}=Pe(),O=Object.assign(Object.assign(Object.assign(Object.assign({},m),{[`--__${E}c-hgrid-align`]:c}),En(E,"hgrid","gap","spacing",d)),Je(E,"hgrid","columns",C5(o))),T=v?zr:l;return U.createElement(vg,Object.assign({},h),U.createElement(T,Object.assign({},Jr(h,fg),{ref:i,className:_("navds-hgrid",a,{"navds-hgrid-gap":d,"navds-hgrid-align":c}),style:O}),r))});function C5(e){return e?typeof e=="string"||typeof e=="number"?Qd(e):Object.fromEntries(Object.entries(e).map(([i,r])=>[i,Qd(r)])):{}}const Qd=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var G5=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const pg=w.forwardRef((e,i)=>{var{children:r,className:a,as:l="div",align:o,justify:d,wrap:m=!0,gap:c,style:v,direction:h="row",asChild:y}=e,E=G5(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const O=gr(!1)?"ax":"a",{cn:T}=Pe(),b=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},v),En(O,"stack","gap","spacing",c)),Je(O,"stack","direction",h)),Je(O,"stack","align",o)),Je(O,"stack","justify",d)),N=y?zr:l;return U.createElement(vg,Object.assign({},E),U.createElement(N,Object.assign({},Jr(E,fg),{ref:i,style:b,className:T("navds-stack",a,{"navds-vstack":h==="column","navds-hstack":h==="row","navds-stack-gap":c,"navds-stack-align":o,"navds-stack-justify":d,"navds-stack-direction":h,"navds-stack-wrap":m})}),r))});var H5=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const lr=w.forwardRef((e,i)=>{var{as:r="div"}=e,a=H5(e,["as"]);return U.createElement(pg,Object.assign({as:r},a,{ref:i,direction:"row"}))});var U5=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const ki=w.forwardRef((e,i)=>{var{as:r="div"}=e,a=U5(e,["as"]);return U.createElement(pg,Object.assign({as:r},a,{ref:i,direction:"column",wrap:!1}))}),ni=w.createContext({listType:"ul",size:"medium"});var $5=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const hg=w.forwardRef((e,i)=>{var{className:r,children:a,title:l,icon:o}=e,d=$5(e,["className","children","title","icon"]);const{listType:m,size:c}=w.useContext(ni),{cn:v}=Pe();return m==="ol"&&o&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),U.createElement("li",Object.assign({},d,{ref:i,className:v("navds-list__item",r)}),m==="ul"&&U.createElement("div",{className:v("navds-list__item-marker",{"navds-list__item-marker--icon":o,"navds-list__item-marker--bullet":!o})},o||U.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},U.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),U.createElement("div",null,l&&U.createElement(ri,{as:"p",size:c,weight:"semibold"},l),a))});hg.displayName="List.Item";var Y5=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const W5={small:"xsmall",medium:"small",large:"medium"},ps=w.forwardRef((e,i)=>{var{children:r,className:a,as:l="ul",title:o,description:d,headingTag:m,size:c,"aria-label":v,"aria-labelledby":h}=e,y=Y5(e,["children","className","as","title","description","headingTag","size","aria-label","aria-labelledby"]);const{size:E}=w.useContext(ni),{cn:_}=Pe(),O=gr(!1),T=c??E;return O?U.createElement(ni.Provider,{value:{listType:l,size:T}},U.createElement(ri,Object.assign({as:"div"},y,{size:T,ref:i,className:_("navds-list",`navds-list--${T}`,a)}),U.createElement(l,{role:"list","aria-label":v,"aria-labelledby":h},r))):U.createElement(ni.Provider,{value:{listType:l,size:T}},U.createElement(ri,Object.assign({as:"div"},y,{size:T,ref:i,className:_("navds-list",`navds-list--${T}`,a)}),o&&U.createElement(Xm,{size:W5[T],as:m??"h3"},o),d&&U.createElement(di,{size:T},d),U.createElement(l,{role:"list","aria-label":v,"aria-labelledby":h},r)))});ps.Item=hg;var z5=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const J5=w.forwardRef((e,i)=>{var{className:r}=e,a=z5(e,["className"]);const{cn:l}=Pe();return U.createElement("tbody",Object.assign({},a,{ref:i,className:l("navds-table__body",r)}))});var X5=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const kg=w.forwardRef((e,i)=>{var{className:r,children:a,align:l,textSize:o}=e,d=X5(e,["className","children","align","textSize"]);const{cn:m}=Pe();return U.createElement("th",Object.assign({ref:i,className:m("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${l}`]:l,"navds-label--small":o==="small"})},d),a)}),yg=w.createContext(null);var Z5=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Q5=w.forwardRef((e,i)=>{var r,a,l,o,{className:d,children:m,sortable:c=!1,sortKey:v}=e,h=Z5(e,["className","children","sortable","sortKey"]);const y=w.useContext(yg),{cn:E}=Pe();return c&&!v&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),U.createElement(kg,Object.assign({scope:"col",ref:i,className:E(d),"aria-sort":c?((r=y?.sort)===null||r===void 0?void 0:r.orderBy)===v?(a=y?.sort)===null||a===void 0?void 0:a.direction:"none":void 0},h),c?U.createElement("button",{type:"button",className:E("navds-table__sort-button"),onClick:c&&v?()=>{var _;return(_=y?.onSortChange)===null||_===void 0?void 0:_.call(y,v)}:void 0},m,((l=y?.sort)===null||l===void 0?void 0:l.orderBy)===v?((o=y?.sort)===null||o===void 0?void 0:o.direction)==="descending"?U.createElement(yb,{"aria-hidden":!0}):U.createElement(Eb,{"aria-hidden":!0}):U.createElement(gb,{"aria-hidden":!0})):m)});var eE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const bg=w.forwardRef((e,i)=>{var{className:r,children:a="",align:l,textSize:o}=e,d=eE(e,["className","children","align","textSize"]);const{cn:m}=Pe();return U.createElement(di,Object.assign({as:"td",ref:i,className:m("navds-table__data-cell",r,{[`navds-table__data-cell--align-${l}`]:l}),size:o},d),a)});var nE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const tE=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function rE(e){const i=parseFloat(e);return!Number.isNaN(i)&&Number.isFinite(i)}function em(e){return typeof e=="string"&&e[e.length-1]==="%"&&rE(e.substring(0,e.length-1))}function es(e,i){i===0&&e?.style&&(e.style.display="none")}function aE(e,i){i===0&&e?.style&&(e.style.display="")}const iE=e=>{var{children:i,className:r,innerClassName:a,duration:l=250,easing:o="ease",height:d}=e,m=nE(e,["children","className","innerClassName","duration","easing","height"]);const{cn:c}=Pe(),v=w.useRef(d),h=w.useRef(null),y=w.useRef(),E=w.useRef(),_=w.useRef(d),O=w.useRef("visible"),T=tE?0:l;typeof _.current=="number"?(typeof d!="string"&&(_.current=d<0?0:d),O.current="hidden"):em(_.current)&&(_.current=d==="0%"?0:d,O.current="hidden");const[b,N]=w.useState(_.current),[j,S]=w.useState(O.current),[G,I]=w.useState(!1);w.useEffect(()=>{es(h.current,_.current)},[]),w.useEffect(()=>{if(d!==v.current&&h.current){aE(h.current,v.current),h.current.style.overflow="hidden";const z=h.current.offsetHeight;h.current.style.overflow="";const Q=T;let X,Z,V="hidden",q;const J=v.current==="auto";typeof d=="number"?(X=d<0?0:d,Z=X):em(d)?(X=d==="0%"?0:d,Z=X):(X=z,Z="auto",V=void 0),J&&(Z=X,X=z),N(X),S("hidden"),I(!J),clearTimeout(E.current),clearTimeout(y.current),J?(q=!0,E.current=setTimeout(()=>{N(Z),S(V),I(q)},50),y.current=setTimeout(()=>{I(!1),es(h.current,Z)},Q)):E.current=setTimeout(()=>{N(Z),S(V),I(!1),d!=="auto"&&es(h.current,X)},Q)}return v.current=d,()=>{clearTimeout(E.current),clearTimeout(y.current)}},[d]);const C={height:b,overflow:j};G&&(C.transition=`height ${T}ms ${o} 0ms`,C.WebkitTransition=C.transition);const x=typeof m["aria-hidden"]<"u"?m["aria-hidden"]:d===0;return U.createElement("div",Object.assign({},m,{className:c(r),style:C}),U.createElement("div",{"aria-hidden":x,className:c(a),ref:h},i))};var lE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Eg=w.forwardRef((e,i)=>{var{className:r,selected:a=!1,shadeOnHover:l=!0}=e,o=lE(e,["className","selected","shadeOnHover"]);const{cn:d}=Pe();return U.createElement("tr",Object.assign({},o,{ref:i,className:d("navds-table__row",r,{"navds-table__row--selected":a,"navds-table__row--shade-on-hover":l})}))});var sE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const oE=w.forwardRef((e,i)=>{var{className:r,children:a,content:l,togglePlacement:o="left",defaultOpen:d=!1,open:m,onOpenChange:c,expansionDisabled:v=!1,expandOnRowClick:h=!1,colSpan:y=999,contentGutter:E,onClick:_}=e,O=sE(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:T}=Pe(),[b,N]=Ks({defaultValue:d,value:m,onChange:c}),j=hi("global"),S=mi(),G=C=>{N(F=>!F),C.stopPropagation()},I=C=>{h&&!v&&!_g(C.target)&&G(C)};return U.createElement(U.Fragment,null,U.createElement(Eg,Object.assign({},O,{ref:i,className:T("navds-table__expandable-row",r,{"navds-table__expandable-row--open":b,"navds-table__expandable-row--expansion-disabled":v,"navds-table__expandable-row--clickable":h}),onClick:gi(_,I)}),o==="right"&&a,U.createElement(bg,{className:T("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":b}),onClick:v?()=>null:G},!v&&U.createElement("button",{className:T("navds-table__toggle-expand-button"),type:"button","aria-controls":S,"aria-expanded":b,onClick:G},U.createElement(Zm,{className:T("navds-table__expandable-icon"),title:j(b?"showLess":"showMore")}))),o==="left"&&a),U.createElement("tr",{"data-state":b?"open":"closed",className:T("navds-table__expanded-row"),"aria-hidden":!b,id:S},U.createElement("td",{colSpan:y,className:T("navds-table__expanded-row-cell")},U.createElement(iE,{className:T("navds-table__expanded-row-collapse"),innerClassName:T(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${E??o}`),height:b?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},l))))});function _g(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:_g(e.parentElement)}var uE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const dE=w.forwardRef((e,i)=>{var{className:r}=e,a=uE(e,["className"]);const{cn:l}=Pe();return U.createElement("thead",Object.assign({},a,{ref:i,className:l("navds-table__header",r)}))});var mE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Ve=w.forwardRef((e,i)=>{var{className:r,zebraStripes:a=!1,size:l="medium",onSortChange:o,sort:d,stickyHeader:m=!1}=e,c=mE(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:v}=Pe();return U.createElement(yg.Provider,{value:{onSortChange:o,sort:d}},U.createElement("table",Object.assign({},c,{ref:i,className:v("navds-table",`navds-table--${l}`,r,{"navds-table--zebra-stripes":a,"navds-table--sticky-header":m})})))});Ve.Header=dE;Ve.Body=J5;Ve.Row=Eg;Ve.ColumnHeader=Q5;Ve.HeaderCell=kg;Ve.DataCell=bg;Ve.ExpandableRow=oE;var gE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const cE=w.forwardRef((e,i)=>{var{children:r,className:a,arrow:l=!0,placement:o="top",open:d,defaultOpen:m=!1,onOpenChange:c,offset:v,content:h,delay:y=150,id:E,keys:_,maxChar:O=80,describesChild:T=!1}=e,b=gE(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:N}=Pe(),[j,S]=Ks({defaultValue:m,value:d,onChange:c}),G=w.useRef(null),I=Tb(!1),C=I?I.ref.current:void 0,{x:F,y:x,strategy:z,context:Q,placement:X,middlewareData:{arrow:{x:Z,y:V}={},hide:{referenceHidden:q}={}},refs:J}=P5({placement:o,open:j,onOpenChange:ne=>S(ne),middleware:[C1(v??(l?8:4)),G1(),H1({padding:5,fallbackPlacements:["bottom","top"]}),U1({element:G,padding:5})],whileElementsMounted:I?(ne,se,pe)=>Ld(ne,se,pe,{animationFrame:!0}):Ld,strategy:I?"fixed":void 0}),{getReferenceProps:te,getFloatingProps:W}=O5([T5(Q,{handleClose:F5(),restMs:y}),I5(Q),R5(Q)]),H=mi(E),Y=$m(i,J.setFloating);if(!r||r?.type===U.Fragment||r===U.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;h?.length>O&&j&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${h.length}
Tooltip-content: ${h}`);const ae=T?j?{"aria-describedby":H}:{title:h}:{"aria-label":h};return U.createElement(U.Fragment,null,U.createElement(zr,Object.assign({ref:J.setReference},te(),ae,{"aria-keyshortcuts":_?_.join("+"):void 0}),r),U.createElement(i1,{rootElement:C,asChild:!0},j&&U.createElement("div",Object.assign({},W(Object.assign(Object.assign({},b),{ref:Y,style:{position:z,top:x??0,left:F??0,visibility:q?"hidden":"visible"},role:"tooltip",id:H,className:N("navds-tooltip","navds-detail navds-detail--small",a)})),{"data-side":X,"data-state":"open"}),h,_&&U.createElement("span",{className:N("navds-tooltip__keys"),"aria-hidden":!0},_.map(ne=>U.createElement(nb,{as:"kbd",key:ne,className:N("navds-tooltip__key")},ne))),l&&U.createElement("div",{ref:ne=>{G.current=ne},className:N("navds-tooltip__arrow"),style:{left:Z!=null?`${Z}px`:"",top:V!=null?`${V}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[X]]:"-3.5px"}}))))}),Tg=w.createContext(null);var fE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const Ag=w.forwardRef((e,i)=>{var r,{className:a,children:l,disabled:o,onClick:d}=e,m=fE(e,["className","children","disabled","onClick"]);const{cn:c}=Pe(),v=hi("Search"),h=w.useContext(Tg);if(h===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:y,variant:E,handleClick:_}=h;return U.createElement(Gs,Object.assign({type:"submit"},m,{ref:i,size:y,variant:E==="secondary"?"secondary":"primary",className:c("navds-search__button-search",a),disabled:(r=h?.disabled)!==null&&r!==void 0?r:o,onClick:gi(d,_),icon:U.createElement(Qm,Object.assign({},l?{"aria-hidden":!0}:{title:v("search")}))}),l)});var vE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};const hs=w.forwardRef((e,i)=>{const{inputProps:r,size:a="medium",inputDescriptionId:l,errorId:o,showErrorMsg:d,hasError:m}=D5(e,"searchfield"),{className:c,hideLabel:v=!0,label:h,description:y,value:E,clearButtonLabel:_,onClear:O,clearButton:T=!0,children:b,variant:N="primary",defaultValue:j,onChange:S,onSearchClick:G,htmlSize:I,"data-color":C}=e,F=vE(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize","data-color"]),{cn:x}=Pe(),z=w.useRef(null),Q=$m(z,i),[X,Z]=w.useState(j??""),V=W=>{E===void 0&&Z(W),S?.(W)},q=W=>{var H,Y;O?.(W),V(""),(Y=(H=z.current)===null||H===void 0?void 0:H.focus)===null||Y===void 0||Y.call(H)},J=()=>{G?.(`${E??X}`)},te=T&&!r.disabled&&(E??X);return U.createElement("div",{onKeyDown:W=>{var H;W.key==="Escape"&&(!((H=z.current)===null||H===void 0)&&H.value&&W.preventDefault(),q({trigger:"Escape",event:W}))},className:x(c,"navds-form-field",`navds-form-field--${a}`,"navds-search",{"navds-search--error":m,"navds-search--disabled":r.disabled,"navds-search--with-size":I}),"data-color":C},U.createElement(qs,{htmlFor:r.id,size:a,className:x("navds-form-field__label",{"navds-sr-only":v})},h),!!y&&U.createElement(di,{className:x("navds-form-field__description",{"navds-sr-only":v}),id:l,size:a,as:"div"},y),U.createElement("div",{className:x("navds-search__wrapper")},U.createElement("div",{className:x("navds-search__wrapper-inner")},N==="simple"&&U.createElement(Qm,{"aria-hidden":!0,className:x("navds-search__search-icon")}),U.createElement("input",Object.assign({ref:Q},Jr(F,["error","errorId","size","readOnly"]),r,{value:E??X,onChange:W=>V(W.target.value),type:"search",className:x(c,"navds-search__input",`navds-search__input--${N}`,"navds-text-field__input","navds-body-short",`navds-body-short--${a}`)},I?{size:Number(I)}:{})),te&&U.createElement(pE,{handleClear:q,size:a,clearButtonLabel:_})),U.createElement(Tg.Provider,{value:{size:a,disabled:r.disabled,variant:N,handleClick:J}},b||N!=="simple"&&U.createElement(Ag,{"data-color":C}))),U.createElement("div",{className:x("navds-form-field__error"),id:o,"aria-relevant":"additions removals","aria-live":"polite"},d&&U.createElement(rb,{size:a,showIcon:!0},e.error)))});function pE({size:e,clearButtonLabel:i,handleClear:r}){const{cn:a}=Pe(),l=gr(!1),o=hi("Search");return l?U.createElement(Gs,{className:a("navds-search__button-clear"),variant:"tertiary","data-color":"neutral",size:e==="medium"?"small":"xsmall",icon:U.createElement(qd,{"aria-hidden":!0}),title:i||o("clear"),onClick:d=>r({trigger:"Click",event:d}),type:"button"}):U.createElement("button",{type:"button",onClick:d=>r({trigger:"Click",event:d}),className:a("navds-search__button-clear")},U.createElement("span",{className:a("navds-sr-only")},i||o("clear")),U.createElement(qd,{"aria-hidden":!0}))}hs.Button=Ag;function hE(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nm={exports:{}},Dr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function kE(){if(tm)return Dr;tm=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,l,o){var d=null;if(o!==void 0&&(d=""+o),l.key!==void 0&&(d=""+l.key),"key"in l){o={};for(var m in l)m!=="key"&&(o[m]=l[m])}else o=l;return l=o.ref,{$$typeof:e,type:a,key:d,ref:l!==void 0?l:null,props:o}}return Dr.Fragment=i,Dr.jsx=r,Dr.jsxs=r,Dr}var rm;function yE(){return rm||(rm=1,nm.exports=kE()),nm.exports}var Nt=yE();const ea={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};Ln(ea);var am={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var im;function bE(){return im||(im=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",d=0;d<arguments.length;d++){var m=arguments[d];m&&(o=l(o,a.call(this,m)))}return o}function a(o){if(typeof o=="string"||typeof o=="number")return this&&this[o]||o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(this,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var m in o)i.call(o,m)&&o[m]&&(d=l(d,this&&this[m]||m));return d}function l(o,d){return d?o?o+" "+d:o+d:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(am)),am.exports}var EE=bE();const $s=hE(EE),_E="_borderbox_1a0x6_1",TE="_error_1a0x6_5",AE="_warning_1a0x6_8",wE={borderbox:_E,error:TE,warning:AE};$s.bind(wE);const NE="_aksjonspunkt_11wjs_1",RE="_erAksjonspunktApent_11wjs_4",SE="_erIkkeGodkjentAvBeslutter_11wjs_8",PE={aksjonspunkt:NE,erAksjonspunktApent:RE,erIkkeGodkjentAvBeslutter:SE};$s.bind(PE);const Wr=({dateString:e,year:i,month:r,day:a})=>Nt.jsx(Nt.Fragment,{children:Ym(e,{year:i,month:r,day:a})}),ui=({dateTimeString:e,...i})=>Nt.jsx(Nt.Fragment,{children:Hy(e,i)});Ln(ea);Ln(ea);const IE="_divider_1jpov_1",OE="_dividerParagraf_1jpov_8",jE="_leftPanel_1jpov_11",BE="_rightPanel_1jpov_14",FE={divider:IE,dividerParagraf:OE,leftPanel:jE,rightPanel:BE};$s.bind(FE);Ln(ea);const xE=Ln(ea),qE=({tekst:e,children:i})=>{const[r,a]=w.useState(!1);if(!e)return i;const l=async()=>{await navigator.clipboard.writeText(e),a(!0),setTimeout(()=>{a(!1)},1e3)};return Nt.jsx(cE,{content:xE.formatMessage({id:r?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:Nt.jsx("span",{"aria-hidden":"true",onClick:l,children:i??e})})},lm={default:"_default_af3od_1",rød:"_rød_af3od_5"},sr=({beløp:e,kr:i=!1,rød:r=!1})=>{const a=e?.toString().replace(/\s/g,"");return Nt.jsx(qE,{tekst:a,children:Nt.jsxs("span",{className:r?lm.rød:lm.default,children:[a?Uy(a):"-",a&&i&&" kr"]})})},Jn=({tittel:e,children:i})=>D.jsxs(ki,{gap:"space-4",children:[D.jsx(qs,{size:"medium",children:e}),i]});Jn.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const wg=({arbeidsgiverOpplysninger:e,arbeidsgiverIdent:i})=>{const r=ft();return D.jsxs(Jn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[D.jsxs("span",{children:[D.jsx(Se,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),": ",e.navn]}),D.jsxs("span",{children:[D.jsx(Se,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",i]})]})};wg.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysninger:{required:!0,tsType:{name:"union",raw:`| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const Ng=({inntektsmelding:e,behandling:i,alleBehandlinger:r,alleKodeverk:a})=>{const l=ft(),o=e.tilknyttedeBehandlingIder.includes(i.uuid),d=r.filter(v=>e.tilknyttedeBehandlingIder.includes(v.uuid)),m=(()=>{const v=d.length;return o&&v>1?D.jsx(Se,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):o?D.jsx(Se,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):v===0?D.jsx(Se,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):D.jsx(Se,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),c=[...d].sort((v,h)=>new Date(v.opprettet).getTime()-new Date(h.opprettet).getTime());return D.jsxs(Jn,{tittel:l.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[m,D.jsx(ps,{children:c.map(v=>D.jsx(ps.Item,{children:D.jsxs(ki,{gap:"space-4",children:[D.jsx("span",{children:a.BehandlingType.find(({kode:h})=>h===v.type)?.navn}),D.jsxs("span",{children:[D.jsx(Se,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",D.jsx(ui,{dateTimeString:v.opprettet,separator:"kl"})]}),v.avsluttet?D.jsxs("span",{children:[D.jsx(Se,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",D.jsx(ui,{dateTimeString:v.avsluttet,separator:"kl"})]}):null]})},v.uuid))})]})};Ng.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  type: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';
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
  definisjon:
    | '5001'
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
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
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
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
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
  type: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';
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
  definisjon:
    | '5001'
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
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
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
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};function KE(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sm={exports:{}},Vr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function DE(){if(om)return Vr;om=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,l,o){var d=null;if(o!==void 0&&(d=""+o),l.key!==void 0&&(d=""+l.key),"key"in l){o={};for(var m in l)m!=="key"&&(o[m]=l[m])}else o=l;return l=o.ref,{$$typeof:e,type:a,key:d,ref:l!==void 0?l:null,props:o}}return Vr.Fragment=i,Vr.jsx=r,Vr.jsxs=r,Vr}var um;function VE(){return um||(um=1,sm.exports=DE()),sm.exports}VE();var ks={exports:{}},LE=ks.exports,dm;function ME(){return dm||(dm=1,function(e,i){(function(r,a){e.exports=a()})(LE,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,l=/\d/,o=/\d\d/,d=/\d\d?/,m=/\d*[^-_:/,()\s\d]+/,c={},v=function(b){return(b=+b)+(b>68?1900:2e3)},h=function(b){return function(N){this[b]=+N}},y=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(N){if(!N||N==="Z")return 0;var j=N.match(/([+-]|\d\d)/g),S=60*j[1]+(+j[2]||0);return S===0?0:j[0]==="+"?-S:S}(b)}],E=function(b){var N=c[b];return N&&(N.indexOf?N:N.s.concat(N.f))},_=function(b,N){var j,S=c.meridiem;if(S){for(var G=1;G<=24;G+=1)if(b.indexOf(S(G,0,N))>-1){j=G>12;break}}else j=b===(N?"pm":"PM");return j},O={A:[m,function(b){this.afternoon=_(b,!1)}],a:[m,function(b){this.afternoon=_(b,!0)}],Q:[l,function(b){this.month=3*(b-1)+1}],S:[l,function(b){this.milliseconds=100*+b}],SS:[o,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[d,h("seconds")],ss:[d,h("seconds")],m:[d,h("minutes")],mm:[d,h("minutes")],H:[d,h("hours")],h:[d,h("hours")],HH:[d,h("hours")],hh:[d,h("hours")],D:[d,h("day")],DD:[o,h("day")],Do:[m,function(b){var N=c.ordinal,j=b.match(/\d+/);if(this.day=j[0],N)for(var S=1;S<=31;S+=1)N(S).replace(/\[|\]/g,"")===b&&(this.day=S)}],w:[d,h("week")],ww:[o,h("week")],M:[d,h("month")],MM:[o,h("month")],MMM:[m,function(b){var N=E("months"),j=(E("monthsShort")||N.map(function(S){return S.slice(0,3)})).indexOf(b)+1;if(j<1)throw new Error;this.month=j%12||j}],MMMM:[m,function(b){var N=E("months").indexOf(b)+1;if(N<1)throw new Error;this.month=N%12||N}],Y:[/[+-]?\d+/,h("year")],YY:[o,function(b){this.year=v(b)}],YYYY:[/\d{4}/,h("year")],Z:y,ZZ:y};function T(b){var N,j;N=b,j=c&&c.formats;for(var S=(b=N.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Q,X,Z){var V=Z&&Z.toUpperCase();return X||j[Z]||r[Z]||j[V].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(q,J,te){return J||te.slice(1)})})).match(a),G=S.length,I=0;I<G;I+=1){var C=S[I],F=O[C],x=F&&F[0],z=F&&F[1];S[I]=z?{regex:x,parser:z}:C.replace(/^\[|\]$/g,"")}return function(Q){for(var X={},Z=0,V=0;Z<G;Z+=1){var q=S[Z];if(typeof q=="string")V+=q.length;else{var J=q.regex,te=q.parser,W=Q.slice(V),H=J.exec(W)[0];te.call(X,H),Q=Q.replace(H,"")}}return function(Y){var ae=Y.afternoon;if(ae!==void 0){var ne=Y.hours;ae?ne<12&&(Y.hours+=12):ne===12&&(Y.hours=0),delete Y.afternoon}}(X),X}}return function(b,N,j){j.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(v=b.parseTwoDigitYear);var S=N.prototype,G=S.parse;S.parse=function(I){var C=I.date,F=I.utc,x=I.args;this.$u=F;var z=x[1];if(typeof z=="string"){var Q=x[2]===!0,X=x[3]===!0,Z=Q||X,V=x[2];X&&(V=x[2]),c=this.$locale(),!Q&&V&&(c=j.Ls[V]),this.$d=function(W,H,Y,ae){try{if(["x","X"].indexOf(H)>-1)return new Date((H==="X"?1e3:1)*W);var ne=T(H)(W),se=ne.year,pe=ne.month,fn=ne.day,Le=ne.hours,xe=ne.minutes,Me=ne.seconds,ke=ne.milliseconds,Ae=ne.zone,Xe=ne.week,Ce=new Date,He=fn||(se||pe?1:Ce.getDate()),Tn=se||Ce.getFullYear(),Ke=0;se&&!pe||(Ke=pe>0?pe-1:Ce.getMonth());var Ze,Qn=Le||0,Qe=xe||0,Cn=Me||0,et=ke||0;return Ae?new Date(Date.UTC(Tn,Ke,He,Qn,Qe,Cn,et+60*Ae.offset*1e3)):Y?new Date(Date.UTC(Tn,Ke,He,Qn,Qe,Cn,et)):(Ze=new Date(Tn,Ke,He,Qn,Qe,Cn,et),Xe&&(Ze=ae(Ze).week(Xe).toDate()),Ze)}catch{return new Date("")}}(C,z,F,j),this.init(),V&&V!==!0&&(this.$L=this.locale(V).$L),Z&&C!=this.format(z)&&(this.$d=new Date("")),c={}}else if(z instanceof Array)for(var q=z.length,J=1;J<=q;J+=1){x[1]=z[J-1];var te=j.apply(this,x);if(te.isValid()){this.$d=te.$d,this.$L=te.$L,this.init();break}J===q&&(this.$d=new Date(""))}else G.call(this,I)}}})}(ks)),ks.exports}var CE=ME();const GE=KE(CE);cr.extend(GE);const na={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET","FaktaKilde.Ukjent":"FRA UKJENT KILDE","FaktaKilde.SBH":"FRA SAKSBEHANDLER"};Ln(na);Ln(na);Ln(na);const HE=(e,i)=>{const r=new Date(e.tom??$r),a=new Date(i.tom??$r);if(r>a)return-1;if(r<a)return 1;if(e.fom&&!i.fom)return-1;if(!e.fom&&i.fom)return 1;if(e.fom&&i.fom){const l=new Date(e.fom),o=new Date(i.fom);if(l>o)return-1;if(l<o)return 1}return 0};var Gr={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var UE=Gr.exports,mm;function $E(){return mm||(mm=1,function(e,i){(function(){var r,a="4.17.21",l=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",d="Expected a function",m="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",v=500,h="__lodash_placeholder__",y=1,E=2,_=4,O=1,T=2,b=1,N=2,j=4,S=8,G=16,I=32,C=64,F=128,x=256,z=512,Q=30,X="...",Z=800,V=16,q=1,J=2,te=3,W=1/0,H=9007199254740991,Y=17976931348623157e292,ae=NaN,ne=4294967295,se=ne-1,pe=ne>>>1,fn=[["ary",F],["bind",b],["bindKey",N],["curry",S],["curryRight",G],["flip",z],["partial",I],["partialRight",C],["rearg",x]],Le="[object Arguments]",xe="[object Array]",Me="[object AsyncFunction]",ke="[object Boolean]",Ae="[object Date]",Xe="[object DOMException]",Ce="[object Error]",He="[object Function]",Tn="[object GeneratorFunction]",Ke="[object Map]",Ze="[object Number]",Qn="[object Null]",Qe="[object Object]",Cn="[object Promise]",et="[object Proxy]",hr="[object RegExp]",xn="[object Set]",kr="[object String]",ia="[object Symbol]",lc="[object Undefined]",yr="[object WeakMap]",sc="[object WeakSet]",br="[object ArrayBuffer]",Gt="[object DataView]",_i="[object Float32Array]",Ti="[object Float64Array]",Ai="[object Int8Array]",wi="[object Int16Array]",Ni="[object Int32Array]",Ri="[object Uint8Array]",Si="[object Uint8ClampedArray]",Pi="[object Uint16Array]",Ii="[object Uint32Array]",oc=/\b__p \+= '';/g,uc=/\b(__p \+=) '' \+/g,dc=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Js=/&(?:amp|lt|gt|quot|#39);/g,Xs=/[&<>"']/g,mc=RegExp(Js.source),gc=RegExp(Xs.source),cc=/<%-([\s\S]+?)%>/g,fc=/<%([\s\S]+?)%>/g,Zs=/<%=([\s\S]+?)%>/g,vc=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pc=/^\w*$/,hc=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Oi=/[\\^$.*+?()[\]{}|]/g,kc=RegExp(Oi.source),ji=/^\s+/,yc=/\s/,bc=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ec=/\{\n\/\* \[wrapped with (.+)\] \*/,_c=/,? & /,Tc=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ac=/[()=,{}\[\]\/\s]/,wc=/\\(\\)?/g,Nc=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Qs=/\w*$/,Rc=/^[-+]0x[0-9a-f]+$/i,Sc=/^0b[01]+$/i,Pc=/^\[object .+?Constructor\]$/,Ic=/^0o[0-7]+$/i,Oc=/^(?:0|[1-9]\d*)$/,jc=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,la=/($^)/,Bc=/['\n\r\u2028\u2029\\]/g,sa="\\ud800-\\udfff",Fc="\\u0300-\\u036f",xc="\\ufe20-\\ufe2f",qc="\\u20d0-\\u20ff",eo=Fc+xc+qc,no="\\u2700-\\u27bf",to="a-z\\xdf-\\xf6\\xf8-\\xff",Kc="\\xac\\xb1\\xd7\\xf7",Dc="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Vc="\\u2000-\\u206f",Lc=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ro="A-Z\\xc0-\\xd6\\xd8-\\xde",ao="\\ufe0e\\ufe0f",io=Kc+Dc+Vc+Lc,Bi="['’]",Mc="["+sa+"]",lo="["+io+"]",oa="["+eo+"]",so="\\d+",Cc="["+no+"]",oo="["+to+"]",uo="[^"+sa+io+so+no+to+ro+"]",Fi="\\ud83c[\\udffb-\\udfff]",Gc="(?:"+oa+"|"+Fi+")",mo="[^"+sa+"]",xi="(?:\\ud83c[\\udde6-\\uddff]){2}",qi="[\\ud800-\\udbff][\\udc00-\\udfff]",Ht="["+ro+"]",go="\\u200d",co="(?:"+oo+"|"+uo+")",Hc="(?:"+Ht+"|"+uo+")",fo="(?:"+Bi+"(?:d|ll|m|re|s|t|ve))?",vo="(?:"+Bi+"(?:D|LL|M|RE|S|T|VE))?",po=Gc+"?",ho="["+ao+"]?",Uc="(?:"+go+"(?:"+[mo,xi,qi].join("|")+")"+ho+po+")*",$c="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Yc="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ko=ho+po+Uc,Wc="(?:"+[Cc,xi,qi].join("|")+")"+ko,zc="(?:"+[mo+oa+"?",oa,xi,qi,Mc].join("|")+")",Jc=RegExp(Bi,"g"),Xc=RegExp(oa,"g"),Ki=RegExp(Fi+"(?="+Fi+")|"+zc+ko,"g"),Zc=RegExp([Ht+"?"+oo+"+"+fo+"(?="+[lo,Ht,"$"].join("|")+")",Hc+"+"+vo+"(?="+[lo,Ht+co,"$"].join("|")+")",Ht+"?"+co+"+"+fo,Ht+"+"+vo,Yc,$c,so,Wc].join("|"),"g"),Qc=RegExp("["+go+sa+eo+ao+"]"),ef=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nf=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],tf=-1,Be={};Be[_i]=Be[Ti]=Be[Ai]=Be[wi]=Be[Ni]=Be[Ri]=Be[Si]=Be[Pi]=Be[Ii]=!0,Be[Le]=Be[xe]=Be[br]=Be[ke]=Be[Gt]=Be[Ae]=Be[Ce]=Be[He]=Be[Ke]=Be[Ze]=Be[Qe]=Be[hr]=Be[xn]=Be[kr]=Be[yr]=!1;var Oe={};Oe[Le]=Oe[xe]=Oe[br]=Oe[Gt]=Oe[ke]=Oe[Ae]=Oe[_i]=Oe[Ti]=Oe[Ai]=Oe[wi]=Oe[Ni]=Oe[Ke]=Oe[Ze]=Oe[Qe]=Oe[hr]=Oe[xn]=Oe[kr]=Oe[ia]=Oe[Ri]=Oe[Si]=Oe[Pi]=Oe[Ii]=!0,Oe[Ce]=Oe[He]=Oe[yr]=!1;var rf={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},af={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},lf={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},sf={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},of=parseFloat,uf=parseInt,yo=typeof Wa=="object"&&Wa&&Wa.Object===Object&&Wa,df=typeof self=="object"&&self&&self.Object===Object&&self,en=yo||df||Function("return this")(),Di=i&&!i.nodeType&&i,St=Di&&!0&&e&&!e.nodeType&&e,bo=St&&St.exports===Di,Vi=bo&&yo.process,An=function(){try{var R=St&&St.require&&St.require("util").types;return R||Vi&&Vi.binding&&Vi.binding("util")}catch{}}(),Eo=An&&An.isArrayBuffer,_o=An&&An.isDate,To=An&&An.isMap,Ao=An&&An.isRegExp,wo=An&&An.isSet,No=An&&An.isTypedArray;function vn(R,K,B){switch(B.length){case 0:return R.call(K);case 1:return R.call(K,B[0]);case 2:return R.call(K,B[0],B[1]);case 3:return R.call(K,B[0],B[1],B[2])}return R.apply(K,B)}function mf(R,K,B,re){for(var me=-1,Te=R==null?0:R.length;++me<Te;){var Ye=R[me];K(re,Ye,B(Ye),R)}return re}function wn(R,K){for(var B=-1,re=R==null?0:R.length;++B<re&&K(R[B],B,R)!==!1;);return R}function gf(R,K){for(var B=R==null?0:R.length;B--&&K(R[B],B,R)!==!1;);return R}function Ro(R,K){for(var B=-1,re=R==null?0:R.length;++B<re;)if(!K(R[B],B,R))return!1;return!0}function pt(R,K){for(var B=-1,re=R==null?0:R.length,me=0,Te=[];++B<re;){var Ye=R[B];K(Ye,B,R)&&(Te[me++]=Ye)}return Te}function ua(R,K){var B=R==null?0:R.length;return!!B&&Ut(R,K,0)>-1}function Li(R,K,B){for(var re=-1,me=R==null?0:R.length;++re<me;)if(B(K,R[re]))return!0;return!1}function qe(R,K){for(var B=-1,re=R==null?0:R.length,me=Array(re);++B<re;)me[B]=K(R[B],B,R);return me}function ht(R,K){for(var B=-1,re=K.length,me=R.length;++B<re;)R[me+B]=K[B];return R}function Mi(R,K,B,re){var me=-1,Te=R==null?0:R.length;for(re&&Te&&(B=R[++me]);++me<Te;)B=K(B,R[me],me,R);return B}function cf(R,K,B,re){var me=R==null?0:R.length;for(re&&me&&(B=R[--me]);me--;)B=K(B,R[me],me,R);return B}function Ci(R,K){for(var B=-1,re=R==null?0:R.length;++B<re;)if(K(R[B],B,R))return!0;return!1}var ff=Gi("length");function vf(R){return R.split("")}function pf(R){return R.match(Tc)||[]}function So(R,K,B){var re;return B(R,function(me,Te,Ye){if(K(me,Te,Ye))return re=Te,!1}),re}function da(R,K,B,re){for(var me=R.length,Te=B+(re?1:-1);re?Te--:++Te<me;)if(K(R[Te],Te,R))return Te;return-1}function Ut(R,K,B){return K===K?Sf(R,K,B):da(R,Po,B)}function hf(R,K,B,re){for(var me=B-1,Te=R.length;++me<Te;)if(re(R[me],K))return me;return-1}function Po(R){return R!==R}function Io(R,K){var B=R==null?0:R.length;return B?Ui(R,K)/B:ae}function Gi(R){return function(K){return K==null?r:K[R]}}function Hi(R){return function(K){return R==null?r:R[K]}}function Oo(R,K,B,re,me){return me(R,function(Te,Ye,Ie){B=re?(re=!1,Te):K(B,Te,Ye,Ie)}),B}function kf(R,K){var B=R.length;for(R.sort(K);B--;)R[B]=R[B].value;return R}function Ui(R,K){for(var B,re=-1,me=R.length;++re<me;){var Te=K(R[re]);Te!==r&&(B=B===r?Te:B+Te)}return B}function $i(R,K){for(var B=-1,re=Array(R);++B<R;)re[B]=K(B);return re}function yf(R,K){return qe(K,function(B){return[B,R[B]]})}function jo(R){return R&&R.slice(0,qo(R)+1).replace(ji,"")}function pn(R){return function(K){return R(K)}}function Yi(R,K){return qe(K,function(B){return R[B]})}function Er(R,K){return R.has(K)}function Bo(R,K){for(var B=-1,re=R.length;++B<re&&Ut(K,R[B],0)>-1;);return B}function Fo(R,K){for(var B=R.length;B--&&Ut(K,R[B],0)>-1;);return B}function bf(R,K){for(var B=R.length,re=0;B--;)R[B]===K&&++re;return re}var Ef=Hi(rf),_f=Hi(af);function Tf(R){return"\\"+sf[R]}function Af(R,K){return R==null?r:R[K]}function $t(R){return Qc.test(R)}function wf(R){return ef.test(R)}function Nf(R){for(var K,B=[];!(K=R.next()).done;)B.push(K.value);return B}function Wi(R){var K=-1,B=Array(R.size);return R.forEach(function(re,me){B[++K]=[me,re]}),B}function xo(R,K){return function(B){return R(K(B))}}function kt(R,K){for(var B=-1,re=R.length,me=0,Te=[];++B<re;){var Ye=R[B];(Ye===K||Ye===h)&&(R[B]=h,Te[me++]=B)}return Te}function ma(R){var K=-1,B=Array(R.size);return R.forEach(function(re){B[++K]=re}),B}function Rf(R){var K=-1,B=Array(R.size);return R.forEach(function(re){B[++K]=[re,re]}),B}function Sf(R,K,B){for(var re=B-1,me=R.length;++re<me;)if(R[re]===K)return re;return-1}function Pf(R,K,B){for(var re=B+1;re--;)if(R[re]===K)return re;return re}function Yt(R){return $t(R)?Of(R):ff(R)}function qn(R){return $t(R)?jf(R):vf(R)}function qo(R){for(var K=R.length;K--&&yc.test(R.charAt(K)););return K}var If=Hi(lf);function Of(R){for(var K=Ki.lastIndex=0;Ki.test(R);)++K;return K}function jf(R){return R.match(Ki)||[]}function Bf(R){return R.match(Zc)||[]}var Ff=function R(K){K=K==null?en:Wt.defaults(en.Object(),K,Wt.pick(en,nf));var B=K.Array,re=K.Date,me=K.Error,Te=K.Function,Ye=K.Math,Ie=K.Object,zi=K.RegExp,xf=K.String,Nn=K.TypeError,ga=B.prototype,qf=Te.prototype,zt=Ie.prototype,ca=K["__core-js_shared__"],fa=qf.toString,Re=zt.hasOwnProperty,Kf=0,Ko=function(){var n=/[^.]+$/.exec(ca&&ca.keys&&ca.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),va=zt.toString,Df=fa.call(Ie),Vf=en._,Lf=zi("^"+fa.call(Re).replace(Oi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),pa=bo?K.Buffer:r,yt=K.Symbol,ha=K.Uint8Array,Do=pa?pa.allocUnsafe:r,ka=xo(Ie.getPrototypeOf,Ie),Vo=Ie.create,Lo=zt.propertyIsEnumerable,ya=ga.splice,Mo=yt?yt.isConcatSpreadable:r,_r=yt?yt.iterator:r,Pt=yt?yt.toStringTag:r,ba=function(){try{var n=Ft(Ie,"defineProperty");return n({},"",{}),n}catch{}}(),Mf=K.clearTimeout!==en.clearTimeout&&K.clearTimeout,Cf=re&&re.now!==en.Date.now&&re.now,Gf=K.setTimeout!==en.setTimeout&&K.setTimeout,Ea=Ye.ceil,_a=Ye.floor,Ji=Ie.getOwnPropertySymbols,Hf=pa?pa.isBuffer:r,Co=K.isFinite,Uf=ga.join,$f=xo(Ie.keys,Ie),We=Ye.max,tn=Ye.min,Yf=re.now,Wf=K.parseInt,Go=Ye.random,zf=ga.reverse,Xi=Ft(K,"DataView"),Tr=Ft(K,"Map"),Zi=Ft(K,"Promise"),Jt=Ft(K,"Set"),Ar=Ft(K,"WeakMap"),wr=Ft(Ie,"create"),Ta=Ar&&new Ar,Xt={},Jf=xt(Xi),Xf=xt(Tr),Zf=xt(Zi),Qf=xt(Jt),ev=xt(Ar),Aa=yt?yt.prototype:r,Nr=Aa?Aa.valueOf:r,Ho=Aa?Aa.toString:r;function f(n){if(Ge(n)&&!ge(n)&&!(n instanceof ye)){if(n instanceof Rn)return n;if(Re.call(n,"__wrapped__"))return Uu(n)}return new Rn(n)}var Zt=function(){function n(){}return function(t){if(!De(t))return{};if(Vo)return Vo(t);n.prototype=t;var s=new n;return n.prototype=r,s}}();function wa(){}function Rn(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}f.templateSettings={escape:cc,evaluate:fc,interpolate:Zs,variable:"",imports:{_:f}},f.prototype=wa.prototype,f.prototype.constructor=f,Rn.prototype=Zt(wa.prototype),Rn.prototype.constructor=Rn;function ye(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ne,this.__views__=[]}function nv(){var n=new ye(this.__wrapped__);return n.__actions__=un(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=un(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=un(this.__views__),n}function tv(){if(this.__filtered__){var n=new ye(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function rv(){var n=this.__wrapped__.value(),t=this.__dir__,s=ge(n),u=t<0,g=s?n.length:0,p=v0(0,g,this.__views__),k=p.start,A=p.end,P=A-k,L=u?A:k-1,M=this.__iteratees__,$=M.length,ee=0,le=tn(P,this.__takeCount__);if(!s||!u&&g==P&&le==P)return fu(n,this.__actions__);var ue=[];e:for(;P--&&ee<le;){L+=t;for(var fe=-1,de=n[L];++fe<$;){var he=M[fe],be=he.iteratee,yn=he.type,sn=be(de);if(yn==J)de=sn;else if(!sn){if(yn==q)continue e;break e}}ue[ee++]=de}return ue}ye.prototype=Zt(wa.prototype),ye.prototype.constructor=ye;function It(n){var t=-1,s=n==null?0:n.length;for(this.clear();++t<s;){var u=n[t];this.set(u[0],u[1])}}function av(){this.__data__=wr?wr(null):{},this.size=0}function iv(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function lv(n){var t=this.__data__;if(wr){var s=t[n];return s===c?r:s}return Re.call(t,n)?t[n]:r}function sv(n){var t=this.__data__;return wr?t[n]!==r:Re.call(t,n)}function ov(n,t){var s=this.__data__;return this.size+=this.has(n)?0:1,s[n]=wr&&t===r?c:t,this}It.prototype.clear=av,It.prototype.delete=iv,It.prototype.get=lv,It.prototype.has=sv,It.prototype.set=ov;function nt(n){var t=-1,s=n==null?0:n.length;for(this.clear();++t<s;){var u=n[t];this.set(u[0],u[1])}}function uv(){this.__data__=[],this.size=0}function dv(n){var t=this.__data__,s=Na(t,n);if(s<0)return!1;var u=t.length-1;return s==u?t.pop():ya.call(t,s,1),--this.size,!0}function mv(n){var t=this.__data__,s=Na(t,n);return s<0?r:t[s][1]}function gv(n){return Na(this.__data__,n)>-1}function cv(n,t){var s=this.__data__,u=Na(s,n);return u<0?(++this.size,s.push([n,t])):s[u][1]=t,this}nt.prototype.clear=uv,nt.prototype.delete=dv,nt.prototype.get=mv,nt.prototype.has=gv,nt.prototype.set=cv;function tt(n){var t=-1,s=n==null?0:n.length;for(this.clear();++t<s;){var u=n[t];this.set(u[0],u[1])}}function fv(){this.size=0,this.__data__={hash:new It,map:new(Tr||nt),string:new It}}function vv(n){var t=Da(this,n).delete(n);return this.size-=t?1:0,t}function pv(n){return Da(this,n).get(n)}function hv(n){return Da(this,n).has(n)}function kv(n,t){var s=Da(this,n),u=s.size;return s.set(n,t),this.size+=s.size==u?0:1,this}tt.prototype.clear=fv,tt.prototype.delete=vv,tt.prototype.get=pv,tt.prototype.has=hv,tt.prototype.set=kv;function Ot(n){var t=-1,s=n==null?0:n.length;for(this.__data__=new tt;++t<s;)this.add(n[t])}function yv(n){return this.__data__.set(n,c),this}function bv(n){return this.__data__.has(n)}Ot.prototype.add=Ot.prototype.push=yv,Ot.prototype.has=bv;function Kn(n){var t=this.__data__=new nt(n);this.size=t.size}function Ev(){this.__data__=new nt,this.size=0}function _v(n){var t=this.__data__,s=t.delete(n);return this.size=t.size,s}function Tv(n){return this.__data__.get(n)}function Av(n){return this.__data__.has(n)}function wv(n,t){var s=this.__data__;if(s instanceof nt){var u=s.__data__;if(!Tr||u.length<l-1)return u.push([n,t]),this.size=++s.size,this;s=this.__data__=new tt(u)}return s.set(n,t),this.size=s.size,this}Kn.prototype.clear=Ev,Kn.prototype.delete=_v,Kn.prototype.get=Tv,Kn.prototype.has=Av,Kn.prototype.set=wv;function Uo(n,t){var s=ge(n),u=!s&&qt(n),g=!s&&!u&&At(n),p=!s&&!u&&!g&&tr(n),k=s||u||g||p,A=k?$i(n.length,xf):[],P=A.length;for(var L in n)(t||Re.call(n,L))&&!(k&&(L=="length"||g&&(L=="offset"||L=="parent")||p&&(L=="buffer"||L=="byteLength"||L=="byteOffset")||lt(L,P)))&&A.push(L);return A}function $o(n){var t=n.length;return t?n[ul(0,t-1)]:r}function Nv(n,t){return Va(un(n),jt(t,0,n.length))}function Rv(n){return Va(un(n))}function Qi(n,t,s){(s!==r&&!Dn(n[t],s)||s===r&&!(t in n))&&rt(n,t,s)}function Rr(n,t,s){var u=n[t];(!(Re.call(n,t)&&Dn(u,s))||s===r&&!(t in n))&&rt(n,t,s)}function Na(n,t){for(var s=n.length;s--;)if(Dn(n[s][0],t))return s;return-1}function Sv(n,t,s,u){return bt(n,function(g,p,k){t(u,g,s(g),k)}),u}function Yo(n,t){return n&&Hn(t,ze(t),n)}function Pv(n,t){return n&&Hn(t,mn(t),n)}function rt(n,t,s){t=="__proto__"&&ba?ba(n,t,{configurable:!0,enumerable:!0,value:s,writable:!0}):n[t]=s}function el(n,t){for(var s=-1,u=t.length,g=B(u),p=n==null;++s<u;)g[s]=p?r:Fl(n,t[s]);return g}function jt(n,t,s){return n===n&&(s!==r&&(n=n<=s?n:s),t!==r&&(n=n>=t?n:t)),n}function Sn(n,t,s,u,g,p){var k,A=t&y,P=t&E,L=t&_;if(s&&(k=g?s(n,u,g,p):s(n)),k!==r)return k;if(!De(n))return n;var M=ge(n);if(M){if(k=h0(n),!A)return un(n,k)}else{var $=rn(n),ee=$==He||$==Tn;if(At(n))return hu(n,A);if($==Qe||$==Le||ee&&!g){if(k=P||ee?{}:qu(n),!A)return P?l0(n,Pv(k,n)):i0(n,Yo(k,n))}else{if(!Oe[$])return g?n:{};k=k0(n,$,A)}}p||(p=new Kn);var le=p.get(n);if(le)return le;p.set(n,k),md(n)?n.forEach(function(de){k.add(Sn(de,t,s,de,n,p))}):ud(n)&&n.forEach(function(de,he){k.set(he,Sn(de,t,s,he,n,p))});var ue=L?P?bl:yl:P?mn:ze,fe=M?r:ue(n);return wn(fe||n,function(de,he){fe&&(he=de,de=n[he]),Rr(k,he,Sn(de,t,s,he,n,p))}),k}function Iv(n){var t=ze(n);return function(s){return Wo(s,n,t)}}function Wo(n,t,s){var u=s.length;if(n==null)return!u;for(n=Ie(n);u--;){var g=s[u],p=t[g],k=n[g];if(k===r&&!(g in n)||!p(k))return!1}return!0}function zo(n,t,s){if(typeof n!="function")throw new Nn(d);return Fr(function(){n.apply(r,s)},t)}function Sr(n,t,s,u){var g=-1,p=ua,k=!0,A=n.length,P=[],L=t.length;if(!A)return P;s&&(t=qe(t,pn(s))),u?(p=Li,k=!1):t.length>=l&&(p=Er,k=!1,t=new Ot(t));e:for(;++g<A;){var M=n[g],$=s==null?M:s(M);if(M=u||M!==0?M:0,k&&$===$){for(var ee=L;ee--;)if(t[ee]===$)continue e;P.push(M)}else p(t,$,u)||P.push(M)}return P}var bt=_u(Gn),Jo=_u(tl,!0);function Ov(n,t){var s=!0;return bt(n,function(u,g,p){return s=!!t(u,g,p),s}),s}function Ra(n,t,s){for(var u=-1,g=n.length;++u<g;){var p=n[u],k=t(p);if(k!=null&&(A===r?k===k&&!kn(k):s(k,A)))var A=k,P=p}return P}function jv(n,t,s,u){var g=n.length;for(s=ce(s),s<0&&(s=-s>g?0:g+s),u=u===r||u>g?g:ce(u),u<0&&(u+=g),u=s>u?0:cd(u);s<u;)n[s++]=t;return n}function Xo(n,t){var s=[];return bt(n,function(u,g,p){t(u,g,p)&&s.push(u)}),s}function nn(n,t,s,u,g){var p=-1,k=n.length;for(s||(s=b0),g||(g=[]);++p<k;){var A=n[p];t>0&&s(A)?t>1?nn(A,t-1,s,u,g):ht(g,A):u||(g[g.length]=A)}return g}var nl=Tu(),Zo=Tu(!0);function Gn(n,t){return n&&nl(n,t,ze)}function tl(n,t){return n&&Zo(n,t,ze)}function Sa(n,t){return pt(t,function(s){return st(n[s])})}function Bt(n,t){t=_t(t,n);for(var s=0,u=t.length;n!=null&&s<u;)n=n[Un(t[s++])];return s&&s==u?n:r}function Qo(n,t,s){var u=t(n);return ge(n)?u:ht(u,s(n))}function an(n){return n==null?n===r?lc:Qn:Pt&&Pt in Ie(n)?f0(n):R0(n)}function rl(n,t){return n>t}function Bv(n,t){return n!=null&&Re.call(n,t)}function Fv(n,t){return n!=null&&t in Ie(n)}function xv(n,t,s){return n>=tn(t,s)&&n<We(t,s)}function al(n,t,s){for(var u=s?Li:ua,g=n[0].length,p=n.length,k=p,A=B(p),P=1/0,L=[];k--;){var M=n[k];k&&t&&(M=qe(M,pn(t))),P=tn(M.length,P),A[k]=!s&&(t||g>=120&&M.length>=120)?new Ot(k&&M):r}M=n[0];var $=-1,ee=A[0];e:for(;++$<g&&L.length<P;){var le=M[$],ue=t?t(le):le;if(le=s||le!==0?le:0,!(ee?Er(ee,ue):u(L,ue,s))){for(k=p;--k;){var fe=A[k];if(!(fe?Er(fe,ue):u(n[k],ue,s)))continue e}ee&&ee.push(ue),L.push(le)}}return L}function qv(n,t,s,u){return Gn(n,function(g,p,k){t(u,s(g),p,k)}),u}function Pr(n,t,s){t=_t(t,n),n=Lu(n,t);var u=n==null?n:n[Un(In(t))];return u==null?r:vn(u,n,s)}function eu(n){return Ge(n)&&an(n)==Le}function Kv(n){return Ge(n)&&an(n)==br}function Dv(n){return Ge(n)&&an(n)==Ae}function Ir(n,t,s,u,g){return n===t?!0:n==null||t==null||!Ge(n)&&!Ge(t)?n!==n&&t!==t:Vv(n,t,s,u,Ir,g)}function Vv(n,t,s,u,g,p){var k=ge(n),A=ge(t),P=k?xe:rn(n),L=A?xe:rn(t);P=P==Le?Qe:P,L=L==Le?Qe:L;var M=P==Qe,$=L==Qe,ee=P==L;if(ee&&At(n)){if(!At(t))return!1;k=!0,M=!1}if(ee&&!M)return p||(p=new Kn),k||tr(n)?Bu(n,t,s,u,g,p):g0(n,t,P,s,u,g,p);if(!(s&O)){var le=M&&Re.call(n,"__wrapped__"),ue=$&&Re.call(t,"__wrapped__");if(le||ue){var fe=le?n.value():n,de=ue?t.value():t;return p||(p=new Kn),g(fe,de,s,u,p)}}return ee?(p||(p=new Kn),c0(n,t,s,u,g,p)):!1}function Lv(n){return Ge(n)&&rn(n)==Ke}function il(n,t,s,u){var g=s.length,p=g,k=!u;if(n==null)return!p;for(n=Ie(n);g--;){var A=s[g];if(k&&A[2]?A[1]!==n[A[0]]:!(A[0]in n))return!1}for(;++g<p;){A=s[g];var P=A[0],L=n[P],M=A[1];if(k&&A[2]){if(L===r&&!(P in n))return!1}else{var $=new Kn;if(u)var ee=u(L,M,P,n,t,$);if(!(ee===r?Ir(M,L,O|T,u,$):ee))return!1}}return!0}function nu(n){if(!De(n)||_0(n))return!1;var t=st(n)?Lf:Pc;return t.test(xt(n))}function Mv(n){return Ge(n)&&an(n)==hr}function Cv(n){return Ge(n)&&rn(n)==xn}function Gv(n){return Ge(n)&&Ua(n.length)&&!!Be[an(n)]}function tu(n){return typeof n=="function"?n:n==null?gn:typeof n=="object"?ge(n)?iu(n[0],n[1]):au(n):Ad(n)}function ll(n){if(!Br(n))return $f(n);var t=[];for(var s in Ie(n))Re.call(n,s)&&s!="constructor"&&t.push(s);return t}function Hv(n){if(!De(n))return N0(n);var t=Br(n),s=[];for(var u in n)u=="constructor"&&(t||!Re.call(n,u))||s.push(u);return s}function sl(n,t){return n<t}function ru(n,t){var s=-1,u=dn(n)?B(n.length):[];return bt(n,function(g,p,k){u[++s]=t(g,p,k)}),u}function au(n){var t=_l(n);return t.length==1&&t[0][2]?Du(t[0][0],t[0][1]):function(s){return s===n||il(s,n,t)}}function iu(n,t){return Al(n)&&Ku(t)?Du(Un(n),t):function(s){var u=Fl(s,n);return u===r&&u===t?xl(s,n):Ir(t,u,O|T)}}function Pa(n,t,s,u,g){n!==t&&nl(t,function(p,k){if(g||(g=new Kn),De(p))Uv(n,t,k,s,Pa,u,g);else{var A=u?u(Nl(n,k),p,k+"",n,t,g):r;A===r&&(A=p),Qi(n,k,A)}},mn)}function Uv(n,t,s,u,g,p,k){var A=Nl(n,s),P=Nl(t,s),L=k.get(P);if(L){Qi(n,s,L);return}var M=p?p(A,P,s+"",n,t,k):r,$=M===r;if($){var ee=ge(P),le=!ee&&At(P),ue=!ee&&!le&&tr(P);M=P,ee||le||ue?ge(A)?M=A:Ue(A)?M=un(A):le?($=!1,M=hu(P,!0)):ue?($=!1,M=ku(P,!0)):M=[]:xr(P)||qt(P)?(M=A,qt(A)?M=fd(A):(!De(A)||st(A))&&(M=qu(P))):$=!1}$&&(k.set(P,M),g(M,P,u,p,k),k.delete(P)),Qi(n,s,M)}function lu(n,t){var s=n.length;if(s)return t+=t<0?s:0,lt(t,s)?n[t]:r}function su(n,t,s){t.length?t=qe(t,function(p){return ge(p)?function(k){return Bt(k,p.length===1?p[0]:p)}:p}):t=[gn];var u=-1;t=qe(t,pn(oe()));var g=ru(n,function(p,k,A){var P=qe(t,function(L){return L(p)});return{criteria:P,index:++u,value:p}});return kf(g,function(p,k){return a0(p,k,s)})}function $v(n,t){return ou(n,t,function(s,u){return xl(n,u)})}function ou(n,t,s){for(var u=-1,g=t.length,p={};++u<g;){var k=t[u],A=Bt(n,k);s(A,k)&&Or(p,_t(k,n),A)}return p}function Yv(n){return function(t){return Bt(t,n)}}function ol(n,t,s,u){var g=u?hf:Ut,p=-1,k=t.length,A=n;for(n===t&&(t=un(t)),s&&(A=qe(n,pn(s)));++p<k;)for(var P=0,L=t[p],M=s?s(L):L;(P=g(A,M,P,u))>-1;)A!==n&&ya.call(A,P,1),ya.call(n,P,1);return n}function uu(n,t){for(var s=n?t.length:0,u=s-1;s--;){var g=t[s];if(s==u||g!==p){var p=g;lt(g)?ya.call(n,g,1):gl(n,g)}}return n}function ul(n,t){return n+_a(Go()*(t-n+1))}function Wv(n,t,s,u){for(var g=-1,p=We(Ea((t-n)/(s||1)),0),k=B(p);p--;)k[u?p:++g]=n,n+=s;return k}function dl(n,t){var s="";if(!n||t<1||t>H)return s;do t%2&&(s+=n),t=_a(t/2),t&&(n+=n);while(t);return s}function ve(n,t){return Rl(Vu(n,t,gn),n+"")}function zv(n){return $o(rr(n))}function Jv(n,t){var s=rr(n);return Va(s,jt(t,0,s.length))}function Or(n,t,s,u){if(!De(n))return n;t=_t(t,n);for(var g=-1,p=t.length,k=p-1,A=n;A!=null&&++g<p;){var P=Un(t[g]),L=s;if(P==="__proto__"||P==="constructor"||P==="prototype")return n;if(g!=k){var M=A[P];L=u?u(M,P,A):r,L===r&&(L=De(M)?M:lt(t[g+1])?[]:{})}Rr(A,P,L),A=A[P]}return n}var du=Ta?function(n,t){return Ta.set(n,t),n}:gn,Xv=ba?function(n,t){return ba(n,"toString",{configurable:!0,enumerable:!1,value:Kl(t),writable:!0})}:gn;function Zv(n){return Va(rr(n))}function Pn(n,t,s){var u=-1,g=n.length;t<0&&(t=-t>g?0:g+t),s=s>g?g:s,s<0&&(s+=g),g=t>s?0:s-t>>>0,t>>>=0;for(var p=B(g);++u<g;)p[u]=n[u+t];return p}function Qv(n,t){var s;return bt(n,function(u,g,p){return s=t(u,g,p),!s}),!!s}function Ia(n,t,s){var u=0,g=n==null?u:n.length;if(typeof t=="number"&&t===t&&g<=pe){for(;u<g;){var p=u+g>>>1,k=n[p];k!==null&&!kn(k)&&(s?k<=t:k<t)?u=p+1:g=p}return g}return ml(n,t,gn,s)}function ml(n,t,s,u){var g=0,p=n==null?0:n.length;if(p===0)return 0;t=s(t);for(var k=t!==t,A=t===null,P=kn(t),L=t===r;g<p;){var M=_a((g+p)/2),$=s(n[M]),ee=$!==r,le=$===null,ue=$===$,fe=kn($);if(k)var de=u||ue;else L?de=ue&&(u||ee):A?de=ue&&ee&&(u||!le):P?de=ue&&ee&&!le&&(u||!fe):le||fe?de=!1:de=u?$<=t:$<t;de?g=M+1:p=M}return tn(p,se)}function mu(n,t){for(var s=-1,u=n.length,g=0,p=[];++s<u;){var k=n[s],A=t?t(k):k;if(!s||!Dn(A,P)){var P=A;p[g++]=k===0?0:k}}return p}function gu(n){return typeof n=="number"?n:kn(n)?ae:+n}function hn(n){if(typeof n=="string")return n;if(ge(n))return qe(n,hn)+"";if(kn(n))return Ho?Ho.call(n):"";var t=n+"";return t=="0"&&1/n==-W?"-0":t}function Et(n,t,s){var u=-1,g=ua,p=n.length,k=!0,A=[],P=A;if(s)k=!1,g=Li;else if(p>=l){var L=t?null:d0(n);if(L)return ma(L);k=!1,g=Er,P=new Ot}else P=t?[]:A;e:for(;++u<p;){var M=n[u],$=t?t(M):M;if(M=s||M!==0?M:0,k&&$===$){for(var ee=P.length;ee--;)if(P[ee]===$)continue e;t&&P.push($),A.push(M)}else g(P,$,s)||(P!==A&&P.push($),A.push(M))}return A}function gl(n,t){return t=_t(t,n),n=Lu(n,t),n==null||delete n[Un(In(t))]}function cu(n,t,s,u){return Or(n,t,s(Bt(n,t)),u)}function Oa(n,t,s,u){for(var g=n.length,p=u?g:-1;(u?p--:++p<g)&&t(n[p],p,n););return s?Pn(n,u?0:p,u?p+1:g):Pn(n,u?p+1:0,u?g:p)}function fu(n,t){var s=n;return s instanceof ye&&(s=s.value()),Mi(t,function(u,g){return g.func.apply(g.thisArg,ht([u],g.args))},s)}function cl(n,t,s){var u=n.length;if(u<2)return u?Et(n[0]):[];for(var g=-1,p=B(u);++g<u;)for(var k=n[g],A=-1;++A<u;)A!=g&&(p[g]=Sr(p[g]||k,n[A],t,s));return Et(nn(p,1),t,s)}function vu(n,t,s){for(var u=-1,g=n.length,p=t.length,k={};++u<g;){var A=u<p?t[u]:r;s(k,n[u],A)}return k}function fl(n){return Ue(n)?n:[]}function vl(n){return typeof n=="function"?n:gn}function _t(n,t){return ge(n)?n:Al(n,t)?[n]:Hu(we(n))}var e0=ve;function Tt(n,t,s){var u=n.length;return s=s===r?u:s,!t&&s>=u?n:Pn(n,t,s)}var pu=Mf||function(n){return en.clearTimeout(n)};function hu(n,t){if(t)return n.slice();var s=n.length,u=Do?Do(s):new n.constructor(s);return n.copy(u),u}function pl(n){var t=new n.constructor(n.byteLength);return new ha(t).set(new ha(n)),t}function n0(n,t){var s=t?pl(n.buffer):n.buffer;return new n.constructor(s,n.byteOffset,n.byteLength)}function t0(n){var t=new n.constructor(n.source,Qs.exec(n));return t.lastIndex=n.lastIndex,t}function r0(n){return Nr?Ie(Nr.call(n)):{}}function ku(n,t){var s=t?pl(n.buffer):n.buffer;return new n.constructor(s,n.byteOffset,n.length)}function yu(n,t){if(n!==t){var s=n!==r,u=n===null,g=n===n,p=kn(n),k=t!==r,A=t===null,P=t===t,L=kn(t);if(!A&&!L&&!p&&n>t||p&&k&&P&&!A&&!L||u&&k&&P||!s&&P||!g)return 1;if(!u&&!p&&!L&&n<t||L&&s&&g&&!u&&!p||A&&s&&g||!k&&g||!P)return-1}return 0}function a0(n,t,s){for(var u=-1,g=n.criteria,p=t.criteria,k=g.length,A=s.length;++u<k;){var P=yu(g[u],p[u]);if(P){if(u>=A)return P;var L=s[u];return P*(L=="desc"?-1:1)}}return n.index-t.index}function bu(n,t,s,u){for(var g=-1,p=n.length,k=s.length,A=-1,P=t.length,L=We(p-k,0),M=B(P+L),$=!u;++A<P;)M[A]=t[A];for(;++g<k;)($||g<p)&&(M[s[g]]=n[g]);for(;L--;)M[A++]=n[g++];return M}function Eu(n,t,s,u){for(var g=-1,p=n.length,k=-1,A=s.length,P=-1,L=t.length,M=We(p-A,0),$=B(M+L),ee=!u;++g<M;)$[g]=n[g];for(var le=g;++P<L;)$[le+P]=t[P];for(;++k<A;)(ee||g<p)&&($[le+s[k]]=n[g++]);return $}function un(n,t){var s=-1,u=n.length;for(t||(t=B(u));++s<u;)t[s]=n[s];return t}function Hn(n,t,s,u){var g=!s;s||(s={});for(var p=-1,k=t.length;++p<k;){var A=t[p],P=u?u(s[A],n[A],A,s,n):r;P===r&&(P=n[A]),g?rt(s,A,P):Rr(s,A,P)}return s}function i0(n,t){return Hn(n,Tl(n),t)}function l0(n,t){return Hn(n,Fu(n),t)}function ja(n,t){return function(s,u){var g=ge(s)?mf:Sv,p=t?t():{};return g(s,n,oe(u,2),p)}}function Qt(n){return ve(function(t,s){var u=-1,g=s.length,p=g>1?s[g-1]:r,k=g>2?s[2]:r;for(p=n.length>3&&typeof p=="function"?(g--,p):r,k&&ln(s[0],s[1],k)&&(p=g<3?r:p,g=1),t=Ie(t);++u<g;){var A=s[u];A&&n(t,A,u,p)}return t})}function _u(n,t){return function(s,u){if(s==null)return s;if(!dn(s))return n(s,u);for(var g=s.length,p=t?g:-1,k=Ie(s);(t?p--:++p<g)&&u(k[p],p,k)!==!1;);return s}}function Tu(n){return function(t,s,u){for(var g=-1,p=Ie(t),k=u(t),A=k.length;A--;){var P=k[n?A:++g];if(s(p[P],P,p)===!1)break}return t}}function s0(n,t,s){var u=t&b,g=jr(n);function p(){var k=this&&this!==en&&this instanceof p?g:n;return k.apply(u?s:this,arguments)}return p}function Au(n){return function(t){t=we(t);var s=$t(t)?qn(t):r,u=s?s[0]:t.charAt(0),g=s?Tt(s,1).join(""):t.slice(1);return u[n]()+g}}function er(n){return function(t){return Mi(_d(Ed(t).replace(Jc,"")),n,"")}}function jr(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var s=Zt(n.prototype),u=n.apply(s,t);return De(u)?u:s}}function o0(n,t,s){var u=jr(n);function g(){for(var p=arguments.length,k=B(p),A=p,P=nr(g);A--;)k[A]=arguments[A];var L=p<3&&k[0]!==P&&k[p-1]!==P?[]:kt(k,P);if(p-=L.length,p<s)return Pu(n,t,Ba,g.placeholder,r,k,L,r,r,s-p);var M=this&&this!==en&&this instanceof g?u:n;return vn(M,this,k)}return g}function wu(n){return function(t,s,u){var g=Ie(t);if(!dn(t)){var p=oe(s,3);t=ze(t),s=function(A){return p(g[A],A,g)}}var k=n(t,s,u);return k>-1?g[p?t[k]:k]:r}}function Nu(n){return it(function(t){var s=t.length,u=s,g=Rn.prototype.thru;for(n&&t.reverse();u--;){var p=t[u];if(typeof p!="function")throw new Nn(d);if(g&&!k&&Ka(p)=="wrapper")var k=new Rn([],!0)}for(u=k?u:s;++u<s;){p=t[u];var A=Ka(p),P=A=="wrapper"?El(p):r;P&&wl(P[0])&&P[1]==(F|S|I|x)&&!P[4].length&&P[9]==1?k=k[Ka(P[0])].apply(k,P[3]):k=p.length==1&&wl(p)?k[A]():k.thru(p)}return function(){var L=arguments,M=L[0];if(k&&L.length==1&&ge(M))return k.plant(M).value();for(var $=0,ee=s?t[$].apply(this,L):M;++$<s;)ee=t[$].call(this,ee);return ee}})}function Ba(n,t,s,u,g,p,k,A,P,L){var M=t&F,$=t&b,ee=t&N,le=t&(S|G),ue=t&z,fe=ee?r:jr(n);function de(){for(var he=arguments.length,be=B(he),yn=he;yn--;)be[yn]=arguments[yn];if(le)var sn=nr(de),bn=bf(be,sn);if(u&&(be=bu(be,u,g,le)),p&&(be=Eu(be,p,k,le)),he-=bn,le&&he<L){var $e=kt(be,sn);return Pu(n,t,Ba,de.placeholder,s,be,$e,A,P,L-he)}var Vn=$?s:this,ut=ee?Vn[n]:n;return he=be.length,A?be=S0(be,A):ue&&he>1&&be.reverse(),M&&P<he&&(be.length=P),this&&this!==en&&this instanceof de&&(ut=fe||jr(ut)),ut.apply(Vn,be)}return de}function Ru(n,t){return function(s,u){return qv(s,n,t(u),{})}}function Fa(n,t){return function(s,u){var g;if(s===r&&u===r)return t;if(s!==r&&(g=s),u!==r){if(g===r)return u;typeof s=="string"||typeof u=="string"?(s=hn(s),u=hn(u)):(s=gu(s),u=gu(u)),g=n(s,u)}return g}}function hl(n){return it(function(t){return t=qe(t,pn(oe())),ve(function(s){var u=this;return n(t,function(g){return vn(g,u,s)})})})}function xa(n,t){t=t===r?" ":hn(t);var s=t.length;if(s<2)return s?dl(t,n):t;var u=dl(t,Ea(n/Yt(t)));return $t(t)?Tt(qn(u),0,n).join(""):u.slice(0,n)}function u0(n,t,s,u){var g=t&b,p=jr(n);function k(){for(var A=-1,P=arguments.length,L=-1,M=u.length,$=B(M+P),ee=this&&this!==en&&this instanceof k?p:n;++L<M;)$[L]=u[L];for(;P--;)$[L++]=arguments[++A];return vn(ee,g?s:this,$)}return k}function Su(n){return function(t,s,u){return u&&typeof u!="number"&&ln(t,s,u)&&(s=u=r),t=ot(t),s===r?(s=t,t=0):s=ot(s),u=u===r?t<s?1:-1:ot(u),Wv(t,s,u,n)}}function qa(n){return function(t,s){return typeof t=="string"&&typeof s=="string"||(t=On(t),s=On(s)),n(t,s)}}function Pu(n,t,s,u,g,p,k,A,P,L){var M=t&S,$=M?k:r,ee=M?r:k,le=M?p:r,ue=M?r:p;t|=M?I:C,t&=~(M?C:I),t&j||(t&=-4);var fe=[n,t,g,le,$,ue,ee,A,P,L],de=s.apply(r,fe);return wl(n)&&Mu(de,fe),de.placeholder=u,Cu(de,n,t)}function kl(n){var t=Ye[n];return function(s,u){if(s=On(s),u=u==null?0:tn(ce(u),292),u&&Co(s)){var g=(we(s)+"e").split("e"),p=t(g[0]+"e"+(+g[1]+u));return g=(we(p)+"e").split("e"),+(g[0]+"e"+(+g[1]-u))}return t(s)}}var d0=Jt&&1/ma(new Jt([,-0]))[1]==W?function(n){return new Jt(n)}:Ll;function Iu(n){return function(t){var s=rn(t);return s==Ke?Wi(t):s==xn?Rf(t):yf(t,n(t))}}function at(n,t,s,u,g,p,k,A){var P=t&N;if(!P&&typeof n!="function")throw new Nn(d);var L=u?u.length:0;if(L||(t&=-97,u=g=r),k=k===r?k:We(ce(k),0),A=A===r?A:ce(A),L-=g?g.length:0,t&C){var M=u,$=g;u=g=r}var ee=P?r:El(n),le=[n,t,s,u,g,M,$,p,k,A];if(ee&&w0(le,ee),n=le[0],t=le[1],s=le[2],u=le[3],g=le[4],A=le[9]=le[9]===r?P?0:n.length:We(le[9]-L,0),!A&&t&(S|G)&&(t&=-25),!t||t==b)var ue=s0(n,t,s);else t==S||t==G?ue=o0(n,t,A):(t==I||t==(b|I))&&!g.length?ue=u0(n,t,s,u):ue=Ba.apply(r,le);var fe=ee?du:Mu;return Cu(fe(ue,le),n,t)}function Ou(n,t,s,u){return n===r||Dn(n,zt[s])&&!Re.call(u,s)?t:n}function ju(n,t,s,u,g,p){return De(n)&&De(t)&&(p.set(t,n),Pa(n,t,r,ju,p),p.delete(t)),n}function m0(n){return xr(n)?r:n}function Bu(n,t,s,u,g,p){var k=s&O,A=n.length,P=t.length;if(A!=P&&!(k&&P>A))return!1;var L=p.get(n),M=p.get(t);if(L&&M)return L==t&&M==n;var $=-1,ee=!0,le=s&T?new Ot:r;for(p.set(n,t),p.set(t,n);++$<A;){var ue=n[$],fe=t[$];if(u)var de=k?u(fe,ue,$,t,n,p):u(ue,fe,$,n,t,p);if(de!==r){if(de)continue;ee=!1;break}if(le){if(!Ci(t,function(he,be){if(!Er(le,be)&&(ue===he||g(ue,he,s,u,p)))return le.push(be)})){ee=!1;break}}else if(!(ue===fe||g(ue,fe,s,u,p))){ee=!1;break}}return p.delete(n),p.delete(t),ee}function g0(n,t,s,u,g,p,k){switch(s){case Gt:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case br:return!(n.byteLength!=t.byteLength||!p(new ha(n),new ha(t)));case ke:case Ae:case Ze:return Dn(+n,+t);case Ce:return n.name==t.name&&n.message==t.message;case hr:case kr:return n==t+"";case Ke:var A=Wi;case xn:var P=u&O;if(A||(A=ma),n.size!=t.size&&!P)return!1;var L=k.get(n);if(L)return L==t;u|=T,k.set(n,t);var M=Bu(A(n),A(t),u,g,p,k);return k.delete(n),M;case ia:if(Nr)return Nr.call(n)==Nr.call(t)}return!1}function c0(n,t,s,u,g,p){var k=s&O,A=yl(n),P=A.length,L=yl(t),M=L.length;if(P!=M&&!k)return!1;for(var $=P;$--;){var ee=A[$];if(!(k?ee in t:Re.call(t,ee)))return!1}var le=p.get(n),ue=p.get(t);if(le&&ue)return le==t&&ue==n;var fe=!0;p.set(n,t),p.set(t,n);for(var de=k;++$<P;){ee=A[$];var he=n[ee],be=t[ee];if(u)var yn=k?u(be,he,ee,t,n,p):u(he,be,ee,n,t,p);if(!(yn===r?he===be||g(he,be,s,u,p):yn)){fe=!1;break}de||(de=ee=="constructor")}if(fe&&!de){var sn=n.constructor,bn=t.constructor;sn!=bn&&"constructor"in n&&"constructor"in t&&!(typeof sn=="function"&&sn instanceof sn&&typeof bn=="function"&&bn instanceof bn)&&(fe=!1)}return p.delete(n),p.delete(t),fe}function it(n){return Rl(Vu(n,r,Wu),n+"")}function yl(n){return Qo(n,ze,Tl)}function bl(n){return Qo(n,mn,Fu)}var El=Ta?function(n){return Ta.get(n)}:Ll;function Ka(n){for(var t=n.name+"",s=Xt[t],u=Re.call(Xt,t)?s.length:0;u--;){var g=s[u],p=g.func;if(p==null||p==n)return g.name}return t}function nr(n){var t=Re.call(f,"placeholder")?f:n;return t.placeholder}function oe(){var n=f.iteratee||Dl;return n=n===Dl?tu:n,arguments.length?n(arguments[0],arguments[1]):n}function Da(n,t){var s=n.__data__;return E0(t)?s[typeof t=="string"?"string":"hash"]:s.map}function _l(n){for(var t=ze(n),s=t.length;s--;){var u=t[s],g=n[u];t[s]=[u,g,Ku(g)]}return t}function Ft(n,t){var s=Af(n,t);return nu(s)?s:r}function f0(n){var t=Re.call(n,Pt),s=n[Pt];try{n[Pt]=r;var u=!0}catch{}var g=va.call(n);return u&&(t?n[Pt]=s:delete n[Pt]),g}var Tl=Ji?function(n){return n==null?[]:(n=Ie(n),pt(Ji(n),function(t){return Lo.call(n,t)}))}:Ml,Fu=Ji?function(n){for(var t=[];n;)ht(t,Tl(n)),n=ka(n);return t}:Ml,rn=an;(Xi&&rn(new Xi(new ArrayBuffer(1)))!=Gt||Tr&&rn(new Tr)!=Ke||Zi&&rn(Zi.resolve())!=Cn||Jt&&rn(new Jt)!=xn||Ar&&rn(new Ar)!=yr)&&(rn=function(n){var t=an(n),s=t==Qe?n.constructor:r,u=s?xt(s):"";if(u)switch(u){case Jf:return Gt;case Xf:return Ke;case Zf:return Cn;case Qf:return xn;case ev:return yr}return t});function v0(n,t,s){for(var u=-1,g=s.length;++u<g;){var p=s[u],k=p.size;switch(p.type){case"drop":n+=k;break;case"dropRight":t-=k;break;case"take":t=tn(t,n+k);break;case"takeRight":n=We(n,t-k);break}}return{start:n,end:t}}function p0(n){var t=n.match(Ec);return t?t[1].split(_c):[]}function xu(n,t,s){t=_t(t,n);for(var u=-1,g=t.length,p=!1;++u<g;){var k=Un(t[u]);if(!(p=n!=null&&s(n,k)))break;n=n[k]}return p||++u!=g?p:(g=n==null?0:n.length,!!g&&Ua(g)&&lt(k,g)&&(ge(n)||qt(n)))}function h0(n){var t=n.length,s=new n.constructor(t);return t&&typeof n[0]=="string"&&Re.call(n,"index")&&(s.index=n.index,s.input=n.input),s}function qu(n){return typeof n.constructor=="function"&&!Br(n)?Zt(ka(n)):{}}function k0(n,t,s){var u=n.constructor;switch(t){case br:return pl(n);case ke:case Ae:return new u(+n);case Gt:return n0(n,s);case _i:case Ti:case Ai:case wi:case Ni:case Ri:case Si:case Pi:case Ii:return ku(n,s);case Ke:return new u;case Ze:case kr:return new u(n);case hr:return t0(n);case xn:return new u;case ia:return r0(n)}}function y0(n,t){var s=t.length;if(!s)return n;var u=s-1;return t[u]=(s>1?"& ":"")+t[u],t=t.join(s>2?", ":" "),n.replace(bc,`{
/* [wrapped with `+t+`] */
`)}function b0(n){return ge(n)||qt(n)||!!(Mo&&n&&n[Mo])}function lt(n,t){var s=typeof n;return t=t??H,!!t&&(s=="number"||s!="symbol"&&Oc.test(n))&&n>-1&&n%1==0&&n<t}function ln(n,t,s){if(!De(s))return!1;var u=typeof t;return(u=="number"?dn(s)&&lt(t,s.length):u=="string"&&t in s)?Dn(s[t],n):!1}function Al(n,t){if(ge(n))return!1;var s=typeof n;return s=="number"||s=="symbol"||s=="boolean"||n==null||kn(n)?!0:pc.test(n)||!vc.test(n)||t!=null&&n in Ie(t)}function E0(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}function wl(n){var t=Ka(n),s=f[t];if(typeof s!="function"||!(t in ye.prototype))return!1;if(n===s)return!0;var u=El(s);return!!u&&n===u[0]}function _0(n){return!!Ko&&Ko in n}var T0=ca?st:Cl;function Br(n){var t=n&&n.constructor,s=typeof t=="function"&&t.prototype||zt;return n===s}function Ku(n){return n===n&&!De(n)}function Du(n,t){return function(s){return s==null?!1:s[n]===t&&(t!==r||n in Ie(s))}}function A0(n){var t=Ga(n,function(u){return s.size===v&&s.clear(),u}),s=t.cache;return t}function w0(n,t){var s=n[1],u=t[1],g=s|u,p=g<(b|N|F),k=u==F&&s==S||u==F&&s==x&&n[7].length<=t[8]||u==(F|x)&&t[7].length<=t[8]&&s==S;if(!(p||k))return n;u&b&&(n[2]=t[2],g|=s&b?0:j);var A=t[3];if(A){var P=n[3];n[3]=P?bu(P,A,t[4]):A,n[4]=P?kt(n[3],h):t[4]}return A=t[5],A&&(P=n[5],n[5]=P?Eu(P,A,t[6]):A,n[6]=P?kt(n[5],h):t[6]),A=t[7],A&&(n[7]=A),u&F&&(n[8]=n[8]==null?t[8]:tn(n[8],t[8])),n[9]==null&&(n[9]=t[9]),n[0]=t[0],n[1]=g,n}function N0(n){var t=[];if(n!=null)for(var s in Ie(n))t.push(s);return t}function R0(n){return va.call(n)}function Vu(n,t,s){return t=We(t===r?n.length-1:t,0),function(){for(var u=arguments,g=-1,p=We(u.length-t,0),k=B(p);++g<p;)k[g]=u[t+g];g=-1;for(var A=B(t+1);++g<t;)A[g]=u[g];return A[t]=s(k),vn(n,this,A)}}function Lu(n,t){return t.length<2?n:Bt(n,Pn(t,0,-1))}function S0(n,t){for(var s=n.length,u=tn(t.length,s),g=un(n);u--;){var p=t[u];n[u]=lt(p,s)?g[p]:r}return n}function Nl(n,t){if(!(t==="constructor"&&typeof n[t]=="function")&&t!="__proto__")return n[t]}var Mu=Gu(du),Fr=Gf||function(n,t){return en.setTimeout(n,t)},Rl=Gu(Xv);function Cu(n,t,s){var u=t+"";return Rl(n,y0(u,P0(p0(u),s)))}function Gu(n){var t=0,s=0;return function(){var u=Yf(),g=V-(u-s);if(s=u,g>0){if(++t>=Z)return arguments[0]}else t=0;return n.apply(r,arguments)}}function Va(n,t){var s=-1,u=n.length,g=u-1;for(t=t===r?u:t;++s<t;){var p=ul(s,g),k=n[p];n[p]=n[s],n[s]=k}return n.length=t,n}var Hu=A0(function(n){var t=[];return n.charCodeAt(0)===46&&t.push(""),n.replace(hc,function(s,u,g,p){t.push(g?p.replace(wc,"$1"):u||s)}),t});function Un(n){if(typeof n=="string"||kn(n))return n;var t=n+"";return t=="0"&&1/n==-W?"-0":t}function xt(n){if(n!=null){try{return fa.call(n)}catch{}try{return n+""}catch{}}return""}function P0(n,t){return wn(fn,function(s){var u="_."+s[0];t&s[1]&&!ua(n,u)&&n.push(u)}),n.sort()}function Uu(n){if(n instanceof ye)return n.clone();var t=new Rn(n.__wrapped__,n.__chain__);return t.__actions__=un(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function I0(n,t,s){(s?ln(n,t,s):t===r)?t=1:t=We(ce(t),0);var u=n==null?0:n.length;if(!u||t<1)return[];for(var g=0,p=0,k=B(Ea(u/t));g<u;)k[p++]=Pn(n,g,g+=t);return k}function O0(n){for(var t=-1,s=n==null?0:n.length,u=0,g=[];++t<s;){var p=n[t];p&&(g[u++]=p)}return g}function j0(){var n=arguments.length;if(!n)return[];for(var t=B(n-1),s=arguments[0],u=n;u--;)t[u-1]=arguments[u];return ht(ge(s)?un(s):[s],nn(t,1))}var B0=ve(function(n,t){return Ue(n)?Sr(n,nn(t,1,Ue,!0)):[]}),F0=ve(function(n,t){var s=In(t);return Ue(s)&&(s=r),Ue(n)?Sr(n,nn(t,1,Ue,!0),oe(s,2)):[]}),x0=ve(function(n,t){var s=In(t);return Ue(s)&&(s=r),Ue(n)?Sr(n,nn(t,1,Ue,!0),r,s):[]});function q0(n,t,s){var u=n==null?0:n.length;return u?(t=s||t===r?1:ce(t),Pn(n,t<0?0:t,u)):[]}function K0(n,t,s){var u=n==null?0:n.length;return u?(t=s||t===r?1:ce(t),t=u-t,Pn(n,0,t<0?0:t)):[]}function D0(n,t){return n&&n.length?Oa(n,oe(t,3),!0,!0):[]}function V0(n,t){return n&&n.length?Oa(n,oe(t,3),!0):[]}function L0(n,t,s,u){var g=n==null?0:n.length;return g?(s&&typeof s!="number"&&ln(n,t,s)&&(s=0,u=g),jv(n,t,s,u)):[]}function $u(n,t,s){var u=n==null?0:n.length;if(!u)return-1;var g=s==null?0:ce(s);return g<0&&(g=We(u+g,0)),da(n,oe(t,3),g)}function Yu(n,t,s){var u=n==null?0:n.length;if(!u)return-1;var g=u-1;return s!==r&&(g=ce(s),g=s<0?We(u+g,0):tn(g,u-1)),da(n,oe(t,3),g,!0)}function Wu(n){var t=n==null?0:n.length;return t?nn(n,1):[]}function M0(n){var t=n==null?0:n.length;return t?nn(n,W):[]}function C0(n,t){var s=n==null?0:n.length;return s?(t=t===r?1:ce(t),nn(n,t)):[]}function G0(n){for(var t=-1,s=n==null?0:n.length,u={};++t<s;){var g=n[t];u[g[0]]=g[1]}return u}function zu(n){return n&&n.length?n[0]:r}function H0(n,t,s){var u=n==null?0:n.length;if(!u)return-1;var g=s==null?0:ce(s);return g<0&&(g=We(u+g,0)),Ut(n,t,g)}function U0(n){var t=n==null?0:n.length;return t?Pn(n,0,-1):[]}var $0=ve(function(n){var t=qe(n,fl);return t.length&&t[0]===n[0]?al(t):[]}),Y0=ve(function(n){var t=In(n),s=qe(n,fl);return t===In(s)?t=r:s.pop(),s.length&&s[0]===n[0]?al(s,oe(t,2)):[]}),W0=ve(function(n){var t=In(n),s=qe(n,fl);return t=typeof t=="function"?t:r,t&&s.pop(),s.length&&s[0]===n[0]?al(s,r,t):[]});function z0(n,t){return n==null?"":Uf.call(n,t)}function In(n){var t=n==null?0:n.length;return t?n[t-1]:r}function J0(n,t,s){var u=n==null?0:n.length;if(!u)return-1;var g=u;return s!==r&&(g=ce(s),g=g<0?We(u+g,0):tn(g,u-1)),t===t?Pf(n,t,g):da(n,Po,g,!0)}function X0(n,t){return n&&n.length?lu(n,ce(t)):r}var Z0=ve(Ju);function Ju(n,t){return n&&n.length&&t&&t.length?ol(n,t):n}function Q0(n,t,s){return n&&n.length&&t&&t.length?ol(n,t,oe(s,2)):n}function ep(n,t,s){return n&&n.length&&t&&t.length?ol(n,t,r,s):n}var np=it(function(n,t){var s=n==null?0:n.length,u=el(n,t);return uu(n,qe(t,function(g){return lt(g,s)?+g:g}).sort(yu)),u});function tp(n,t){var s=[];if(!(n&&n.length))return s;var u=-1,g=[],p=n.length;for(t=oe(t,3);++u<p;){var k=n[u];t(k,u,n)&&(s.push(k),g.push(u))}return uu(n,g),s}function Sl(n){return n==null?n:zf.call(n)}function rp(n,t,s){var u=n==null?0:n.length;return u?(s&&typeof s!="number"&&ln(n,t,s)?(t=0,s=u):(t=t==null?0:ce(t),s=s===r?u:ce(s)),Pn(n,t,s)):[]}function ap(n,t){return Ia(n,t)}function ip(n,t,s){return ml(n,t,oe(s,2))}function lp(n,t){var s=n==null?0:n.length;if(s){var u=Ia(n,t);if(u<s&&Dn(n[u],t))return u}return-1}function sp(n,t){return Ia(n,t,!0)}function op(n,t,s){return ml(n,t,oe(s,2),!0)}function up(n,t){var s=n==null?0:n.length;if(s){var u=Ia(n,t,!0)-1;if(Dn(n[u],t))return u}return-1}function dp(n){return n&&n.length?mu(n):[]}function mp(n,t){return n&&n.length?mu(n,oe(t,2)):[]}function gp(n){var t=n==null?0:n.length;return t?Pn(n,1,t):[]}function cp(n,t,s){return n&&n.length?(t=s||t===r?1:ce(t),Pn(n,0,t<0?0:t)):[]}function fp(n,t,s){var u=n==null?0:n.length;return u?(t=s||t===r?1:ce(t),t=u-t,Pn(n,t<0?0:t,u)):[]}function vp(n,t){return n&&n.length?Oa(n,oe(t,3),!1,!0):[]}function pp(n,t){return n&&n.length?Oa(n,oe(t,3)):[]}var hp=ve(function(n){return Et(nn(n,1,Ue,!0))}),kp=ve(function(n){var t=In(n);return Ue(t)&&(t=r),Et(nn(n,1,Ue,!0),oe(t,2))}),yp=ve(function(n){var t=In(n);return t=typeof t=="function"?t:r,Et(nn(n,1,Ue,!0),r,t)});function bp(n){return n&&n.length?Et(n):[]}function Ep(n,t){return n&&n.length?Et(n,oe(t,2)):[]}function _p(n,t){return t=typeof t=="function"?t:r,n&&n.length?Et(n,r,t):[]}function Pl(n){if(!(n&&n.length))return[];var t=0;return n=pt(n,function(s){if(Ue(s))return t=We(s.length,t),!0}),$i(t,function(s){return qe(n,Gi(s))})}function Xu(n,t){if(!(n&&n.length))return[];var s=Pl(n);return t==null?s:qe(s,function(u){return vn(t,r,u)})}var Tp=ve(function(n,t){return Ue(n)?Sr(n,t):[]}),Ap=ve(function(n){return cl(pt(n,Ue))}),wp=ve(function(n){var t=In(n);return Ue(t)&&(t=r),cl(pt(n,Ue),oe(t,2))}),Np=ve(function(n){var t=In(n);return t=typeof t=="function"?t:r,cl(pt(n,Ue),r,t)}),Rp=ve(Pl);function Sp(n,t){return vu(n||[],t||[],Rr)}function Pp(n,t){return vu(n||[],t||[],Or)}var Ip=ve(function(n){var t=n.length,s=t>1?n[t-1]:r;return s=typeof s=="function"?(n.pop(),s):r,Xu(n,s)});function Zu(n){var t=f(n);return t.__chain__=!0,t}function Op(n,t){return t(n),n}function La(n,t){return t(n)}var jp=it(function(n){var t=n.length,s=t?n[0]:0,u=this.__wrapped__,g=function(p){return el(p,n)};return t>1||this.__actions__.length||!(u instanceof ye)||!lt(s)?this.thru(g):(u=u.slice(s,+s+(t?1:0)),u.__actions__.push({func:La,args:[g],thisArg:r}),new Rn(u,this.__chain__).thru(function(p){return t&&!p.length&&p.push(r),p}))});function Bp(){return Zu(this)}function Fp(){return new Rn(this.value(),this.__chain__)}function xp(){this.__values__===r&&(this.__values__=gd(this.value()));var n=this.__index__>=this.__values__.length,t=n?r:this.__values__[this.__index__++];return{done:n,value:t}}function qp(){return this}function Kp(n){for(var t,s=this;s instanceof wa;){var u=Uu(s);u.__index__=0,u.__values__=r,t?g.__wrapped__=u:t=u;var g=u;s=s.__wrapped__}return g.__wrapped__=n,t}function Dp(){var n=this.__wrapped__;if(n instanceof ye){var t=n;return this.__actions__.length&&(t=new ye(this)),t=t.reverse(),t.__actions__.push({func:La,args:[Sl],thisArg:r}),new Rn(t,this.__chain__)}return this.thru(Sl)}function Vp(){return fu(this.__wrapped__,this.__actions__)}var Lp=ja(function(n,t,s){Re.call(n,s)?++n[s]:rt(n,s,1)});function Mp(n,t,s){var u=ge(n)?Ro:Ov;return s&&ln(n,t,s)&&(t=r),u(n,oe(t,3))}function Cp(n,t){var s=ge(n)?pt:Xo;return s(n,oe(t,3))}var Gp=wu($u),Hp=wu(Yu);function Up(n,t){return nn(Ma(n,t),1)}function $p(n,t){return nn(Ma(n,t),W)}function Yp(n,t,s){return s=s===r?1:ce(s),nn(Ma(n,t),s)}function Qu(n,t){var s=ge(n)?wn:bt;return s(n,oe(t,3))}function ed(n,t){var s=ge(n)?gf:Jo;return s(n,oe(t,3))}var Wp=ja(function(n,t,s){Re.call(n,s)?n[s].push(t):rt(n,s,[t])});function zp(n,t,s,u){n=dn(n)?n:rr(n),s=s&&!u?ce(s):0;var g=n.length;return s<0&&(s=We(g+s,0)),$a(n)?s<=g&&n.indexOf(t,s)>-1:!!g&&Ut(n,t,s)>-1}var Jp=ve(function(n,t,s){var u=-1,g=typeof t=="function",p=dn(n)?B(n.length):[];return bt(n,function(k){p[++u]=g?vn(t,k,s):Pr(k,t,s)}),p}),Xp=ja(function(n,t,s){rt(n,s,t)});function Ma(n,t){var s=ge(n)?qe:ru;return s(n,oe(t,3))}function Zp(n,t,s,u){return n==null?[]:(ge(t)||(t=t==null?[]:[t]),s=u?r:s,ge(s)||(s=s==null?[]:[s]),su(n,t,s))}var Qp=ja(function(n,t,s){n[s?0:1].push(t)},function(){return[[],[]]});function eh(n,t,s){var u=ge(n)?Mi:Oo,g=arguments.length<3;return u(n,oe(t,4),s,g,bt)}function nh(n,t,s){var u=ge(n)?cf:Oo,g=arguments.length<3;return u(n,oe(t,4),s,g,Jo)}function th(n,t){var s=ge(n)?pt:Xo;return s(n,Ha(oe(t,3)))}function rh(n){var t=ge(n)?$o:zv;return t(n)}function ah(n,t,s){(s?ln(n,t,s):t===r)?t=1:t=ce(t);var u=ge(n)?Nv:Jv;return u(n,t)}function ih(n){var t=ge(n)?Rv:Zv;return t(n)}function lh(n){if(n==null)return 0;if(dn(n))return $a(n)?Yt(n):n.length;var t=rn(n);return t==Ke||t==xn?n.size:ll(n).length}function sh(n,t,s){var u=ge(n)?Ci:Qv;return s&&ln(n,t,s)&&(t=r),u(n,oe(t,3))}var oh=ve(function(n,t){if(n==null)return[];var s=t.length;return s>1&&ln(n,t[0],t[1])?t=[]:s>2&&ln(t[0],t[1],t[2])&&(t=[t[0]]),su(n,nn(t,1),[])}),Ca=Cf||function(){return en.Date.now()};function uh(n,t){if(typeof t!="function")throw new Nn(d);return n=ce(n),function(){if(--n<1)return t.apply(this,arguments)}}function nd(n,t,s){return t=s?r:t,t=n&&t==null?n.length:t,at(n,F,r,r,r,r,t)}function td(n,t){var s;if(typeof t!="function")throw new Nn(d);return n=ce(n),function(){return--n>0&&(s=t.apply(this,arguments)),n<=1&&(t=r),s}}var Il=ve(function(n,t,s){var u=b;if(s.length){var g=kt(s,nr(Il));u|=I}return at(n,u,t,s,g)}),rd=ve(function(n,t,s){var u=b|N;if(s.length){var g=kt(s,nr(rd));u|=I}return at(t,u,n,s,g)});function ad(n,t,s){t=s?r:t;var u=at(n,S,r,r,r,r,r,t);return u.placeholder=ad.placeholder,u}function id(n,t,s){t=s?r:t;var u=at(n,G,r,r,r,r,r,t);return u.placeholder=id.placeholder,u}function ld(n,t,s){var u,g,p,k,A,P,L=0,M=!1,$=!1,ee=!0;if(typeof n!="function")throw new Nn(d);t=On(t)||0,De(s)&&(M=!!s.leading,$="maxWait"in s,p=$?We(On(s.maxWait)||0,t):p,ee="trailing"in s?!!s.trailing:ee);function le($e){var Vn=u,ut=g;return u=g=r,L=$e,k=n.apply(ut,Vn),k}function ue($e){return L=$e,A=Fr(he,t),M?le($e):k}function fe($e){var Vn=$e-P,ut=$e-L,wd=t-Vn;return $?tn(wd,p-ut):wd}function de($e){var Vn=$e-P,ut=$e-L;return P===r||Vn>=t||Vn<0||$&&ut>=p}function he(){var $e=Ca();if(de($e))return be($e);A=Fr(he,fe($e))}function be($e){return A=r,ee&&u?le($e):(u=g=r,k)}function yn(){A!==r&&pu(A),L=0,u=P=g=A=r}function sn(){return A===r?k:be(Ca())}function bn(){var $e=Ca(),Vn=de($e);if(u=arguments,g=this,P=$e,Vn){if(A===r)return ue(P);if($)return pu(A),A=Fr(he,t),le(P)}return A===r&&(A=Fr(he,t)),k}return bn.cancel=yn,bn.flush=sn,bn}var dh=ve(function(n,t){return zo(n,1,t)}),mh=ve(function(n,t,s){return zo(n,On(t)||0,s)});function gh(n){return at(n,z)}function Ga(n,t){if(typeof n!="function"||t!=null&&typeof t!="function")throw new Nn(d);var s=function(){var u=arguments,g=t?t.apply(this,u):u[0],p=s.cache;if(p.has(g))return p.get(g);var k=n.apply(this,u);return s.cache=p.set(g,k)||p,k};return s.cache=new(Ga.Cache||tt),s}Ga.Cache=tt;function Ha(n){if(typeof n!="function")throw new Nn(d);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function ch(n){return td(2,n)}var fh=e0(function(n,t){t=t.length==1&&ge(t[0])?qe(t[0],pn(oe())):qe(nn(t,1),pn(oe()));var s=t.length;return ve(function(u){for(var g=-1,p=tn(u.length,s);++g<p;)u[g]=t[g].call(this,u[g]);return vn(n,this,u)})}),Ol=ve(function(n,t){var s=kt(t,nr(Ol));return at(n,I,r,t,s)}),sd=ve(function(n,t){var s=kt(t,nr(sd));return at(n,C,r,t,s)}),vh=it(function(n,t){return at(n,x,r,r,r,t)});function ph(n,t){if(typeof n!="function")throw new Nn(d);return t=t===r?t:ce(t),ve(n,t)}function hh(n,t){if(typeof n!="function")throw new Nn(d);return t=t==null?0:We(ce(t),0),ve(function(s){var u=s[t],g=Tt(s,0,t);return u&&ht(g,u),vn(n,this,g)})}function kh(n,t,s){var u=!0,g=!0;if(typeof n!="function")throw new Nn(d);return De(s)&&(u="leading"in s?!!s.leading:u,g="trailing"in s?!!s.trailing:g),ld(n,t,{leading:u,maxWait:t,trailing:g})}function yh(n){return nd(n,1)}function bh(n,t){return Ol(vl(t),n)}function Eh(){if(!arguments.length)return[];var n=arguments[0];return ge(n)?n:[n]}function _h(n){return Sn(n,_)}function Th(n,t){return t=typeof t=="function"?t:r,Sn(n,_,t)}function Ah(n){return Sn(n,y|_)}function wh(n,t){return t=typeof t=="function"?t:r,Sn(n,y|_,t)}function Nh(n,t){return t==null||Wo(n,t,ze(t))}function Dn(n,t){return n===t||n!==n&&t!==t}var Rh=qa(rl),Sh=qa(function(n,t){return n>=t}),qt=eu(function(){return arguments}())?eu:function(n){return Ge(n)&&Re.call(n,"callee")&&!Lo.call(n,"callee")},ge=B.isArray,Ph=Eo?pn(Eo):Kv;function dn(n){return n!=null&&Ua(n.length)&&!st(n)}function Ue(n){return Ge(n)&&dn(n)}function Ih(n){return n===!0||n===!1||Ge(n)&&an(n)==ke}var At=Hf||Cl,Oh=_o?pn(_o):Dv;function jh(n){return Ge(n)&&n.nodeType===1&&!xr(n)}function Bh(n){if(n==null)return!0;if(dn(n)&&(ge(n)||typeof n=="string"||typeof n.splice=="function"||At(n)||tr(n)||qt(n)))return!n.length;var t=rn(n);if(t==Ke||t==xn)return!n.size;if(Br(n))return!ll(n).length;for(var s in n)if(Re.call(n,s))return!1;return!0}function Fh(n,t){return Ir(n,t)}function xh(n,t,s){s=typeof s=="function"?s:r;var u=s?s(n,t):r;return u===r?Ir(n,t,r,s):!!u}function jl(n){if(!Ge(n))return!1;var t=an(n);return t==Ce||t==Xe||typeof n.message=="string"&&typeof n.name=="string"&&!xr(n)}function qh(n){return typeof n=="number"&&Co(n)}function st(n){if(!De(n))return!1;var t=an(n);return t==He||t==Tn||t==Me||t==et}function od(n){return typeof n=="number"&&n==ce(n)}function Ua(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=H}function De(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}function Ge(n){return n!=null&&typeof n=="object"}var ud=To?pn(To):Lv;function Kh(n,t){return n===t||il(n,t,_l(t))}function Dh(n,t,s){return s=typeof s=="function"?s:r,il(n,t,_l(t),s)}function Vh(n){return dd(n)&&n!=+n}function Lh(n){if(T0(n))throw new me(o);return nu(n)}function Mh(n){return n===null}function Ch(n){return n==null}function dd(n){return typeof n=="number"||Ge(n)&&an(n)==Ze}function xr(n){if(!Ge(n)||an(n)!=Qe)return!1;var t=ka(n);if(t===null)return!0;var s=Re.call(t,"constructor")&&t.constructor;return typeof s=="function"&&s instanceof s&&fa.call(s)==Df}var Bl=Ao?pn(Ao):Mv;function Gh(n){return od(n)&&n>=-H&&n<=H}var md=wo?pn(wo):Cv;function $a(n){return typeof n=="string"||!ge(n)&&Ge(n)&&an(n)==kr}function kn(n){return typeof n=="symbol"||Ge(n)&&an(n)==ia}var tr=No?pn(No):Gv;function Hh(n){return n===r}function Uh(n){return Ge(n)&&rn(n)==yr}function $h(n){return Ge(n)&&an(n)==sc}var Yh=qa(sl),Wh=qa(function(n,t){return n<=t});function gd(n){if(!n)return[];if(dn(n))return $a(n)?qn(n):un(n);if(_r&&n[_r])return Nf(n[_r]());var t=rn(n),s=t==Ke?Wi:t==xn?ma:rr;return s(n)}function ot(n){if(!n)return n===0?n:0;if(n=On(n),n===W||n===-W){var t=n<0?-1:1;return t*Y}return n===n?n:0}function ce(n){var t=ot(n),s=t%1;return t===t?s?t-s:t:0}function cd(n){return n?jt(ce(n),0,ne):0}function On(n){if(typeof n=="number")return n;if(kn(n))return ae;if(De(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=De(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=jo(n);var s=Sc.test(n);return s||Ic.test(n)?uf(n.slice(2),s?2:8):Rc.test(n)?ae:+n}function fd(n){return Hn(n,mn(n))}function zh(n){return n?jt(ce(n),-H,H):n===0?n:0}function we(n){return n==null?"":hn(n)}var Jh=Qt(function(n,t){if(Br(t)||dn(t)){Hn(t,ze(t),n);return}for(var s in t)Re.call(t,s)&&Rr(n,s,t[s])}),vd=Qt(function(n,t){Hn(t,mn(t),n)}),Ya=Qt(function(n,t,s,u){Hn(t,mn(t),n,u)}),Xh=Qt(function(n,t,s,u){Hn(t,ze(t),n,u)}),Zh=it(el);function Qh(n,t){var s=Zt(n);return t==null?s:Yo(s,t)}var ek=ve(function(n,t){n=Ie(n);var s=-1,u=t.length,g=u>2?t[2]:r;for(g&&ln(t[0],t[1],g)&&(u=1);++s<u;)for(var p=t[s],k=mn(p),A=-1,P=k.length;++A<P;){var L=k[A],M=n[L];(M===r||Dn(M,zt[L])&&!Re.call(n,L))&&(n[L]=p[L])}return n}),nk=ve(function(n){return n.push(r,ju),vn(pd,r,n)});function tk(n,t){return So(n,oe(t,3),Gn)}function rk(n,t){return So(n,oe(t,3),tl)}function ak(n,t){return n==null?n:nl(n,oe(t,3),mn)}function ik(n,t){return n==null?n:Zo(n,oe(t,3),mn)}function lk(n,t){return n&&Gn(n,oe(t,3))}function sk(n,t){return n&&tl(n,oe(t,3))}function ok(n){return n==null?[]:Sa(n,ze(n))}function uk(n){return n==null?[]:Sa(n,mn(n))}function Fl(n,t,s){var u=n==null?r:Bt(n,t);return u===r?s:u}function dk(n,t){return n!=null&&xu(n,t,Bv)}function xl(n,t){return n!=null&&xu(n,t,Fv)}var mk=Ru(function(n,t,s){t!=null&&typeof t.toString!="function"&&(t=va.call(t)),n[t]=s},Kl(gn)),gk=Ru(function(n,t,s){t!=null&&typeof t.toString!="function"&&(t=va.call(t)),Re.call(n,t)?n[t].push(s):n[t]=[s]},oe),ck=ve(Pr);function ze(n){return dn(n)?Uo(n):ll(n)}function mn(n){return dn(n)?Uo(n,!0):Hv(n)}function fk(n,t){var s={};return t=oe(t,3),Gn(n,function(u,g,p){rt(s,t(u,g,p),u)}),s}function vk(n,t){var s={};return t=oe(t,3),Gn(n,function(u,g,p){rt(s,g,t(u,g,p))}),s}var pk=Qt(function(n,t,s){Pa(n,t,s)}),pd=Qt(function(n,t,s,u){Pa(n,t,s,u)}),hk=it(function(n,t){var s={};if(n==null)return s;var u=!1;t=qe(t,function(p){return p=_t(p,n),u||(u=p.length>1),p}),Hn(n,bl(n),s),u&&(s=Sn(s,y|E|_,m0));for(var g=t.length;g--;)gl(s,t[g]);return s});function kk(n,t){return hd(n,Ha(oe(t)))}var yk=it(function(n,t){return n==null?{}:$v(n,t)});function hd(n,t){if(n==null)return{};var s=qe(bl(n),function(u){return[u]});return t=oe(t),ou(n,s,function(u,g){return t(u,g[0])})}function bk(n,t,s){t=_t(t,n);var u=-1,g=t.length;for(g||(g=1,n=r);++u<g;){var p=n==null?r:n[Un(t[u])];p===r&&(u=g,p=s),n=st(p)?p.call(n):p}return n}function Ek(n,t,s){return n==null?n:Or(n,t,s)}function _k(n,t,s,u){return u=typeof u=="function"?u:r,n==null?n:Or(n,t,s,u)}var kd=Iu(ze),yd=Iu(mn);function Tk(n,t,s){var u=ge(n),g=u||At(n)||tr(n);if(t=oe(t,4),s==null){var p=n&&n.constructor;g?s=u?new p:[]:De(n)?s=st(p)?Zt(ka(n)):{}:s={}}return(g?wn:Gn)(n,function(k,A,P){return t(s,k,A,P)}),s}function Ak(n,t){return n==null?!0:gl(n,t)}function wk(n,t,s){return n==null?n:cu(n,t,vl(s))}function Nk(n,t,s,u){return u=typeof u=="function"?u:r,n==null?n:cu(n,t,vl(s),u)}function rr(n){return n==null?[]:Yi(n,ze(n))}function Rk(n){return n==null?[]:Yi(n,mn(n))}function Sk(n,t,s){return s===r&&(s=t,t=r),s!==r&&(s=On(s),s=s===s?s:0),t!==r&&(t=On(t),t=t===t?t:0),jt(On(n),t,s)}function Pk(n,t,s){return t=ot(t),s===r?(s=t,t=0):s=ot(s),n=On(n),xv(n,t,s)}function Ik(n,t,s){if(s&&typeof s!="boolean"&&ln(n,t,s)&&(t=s=r),s===r&&(typeof t=="boolean"?(s=t,t=r):typeof n=="boolean"&&(s=n,n=r)),n===r&&t===r?(n=0,t=1):(n=ot(n),t===r?(t=n,n=0):t=ot(t)),n>t){var u=n;n=t,t=u}if(s||n%1||t%1){var g=Go();return tn(n+g*(t-n+of("1e-"+((g+"").length-1))),t)}return ul(n,t)}var Ok=er(function(n,t,s){return t=t.toLowerCase(),n+(s?bd(t):t)});function bd(n){return ql(we(n).toLowerCase())}function Ed(n){return n=we(n),n&&n.replace(jc,Ef).replace(Xc,"")}function jk(n,t,s){n=we(n),t=hn(t);var u=n.length;s=s===r?u:jt(ce(s),0,u);var g=s;return s-=t.length,s>=0&&n.slice(s,g)==t}function Bk(n){return n=we(n),n&&gc.test(n)?n.replace(Xs,_f):n}function Fk(n){return n=we(n),n&&kc.test(n)?n.replace(Oi,"\\$&"):n}var xk=er(function(n,t,s){return n+(s?"-":"")+t.toLowerCase()}),qk=er(function(n,t,s){return n+(s?" ":"")+t.toLowerCase()}),Kk=Au("toLowerCase");function Dk(n,t,s){n=we(n),t=ce(t);var u=t?Yt(n):0;if(!t||u>=t)return n;var g=(t-u)/2;return xa(_a(g),s)+n+xa(Ea(g),s)}function Vk(n,t,s){n=we(n),t=ce(t);var u=t?Yt(n):0;return t&&u<t?n+xa(t-u,s):n}function Lk(n,t,s){n=we(n),t=ce(t);var u=t?Yt(n):0;return t&&u<t?xa(t-u,s)+n:n}function Mk(n,t,s){return s||t==null?t=0:t&&(t=+t),Wf(we(n).replace(ji,""),t||0)}function Ck(n,t,s){return(s?ln(n,t,s):t===r)?t=1:t=ce(t),dl(we(n),t)}function Gk(){var n=arguments,t=we(n[0]);return n.length<3?t:t.replace(n[1],n[2])}var Hk=er(function(n,t,s){return n+(s?"_":"")+t.toLowerCase()});function Uk(n,t,s){return s&&typeof s!="number"&&ln(n,t,s)&&(t=s=r),s=s===r?ne:s>>>0,s?(n=we(n),n&&(typeof t=="string"||t!=null&&!Bl(t))&&(t=hn(t),!t&&$t(n))?Tt(qn(n),0,s):n.split(t,s)):[]}var $k=er(function(n,t,s){return n+(s?" ":"")+ql(t)});function Yk(n,t,s){return n=we(n),s=s==null?0:jt(ce(s),0,n.length),t=hn(t),n.slice(s,s+t.length)==t}function Wk(n,t,s){var u=f.templateSettings;s&&ln(n,t,s)&&(t=r),n=we(n),t=Ya({},t,u,Ou);var g=Ya({},t.imports,u.imports,Ou),p=ze(g),k=Yi(g,p),A,P,L=0,M=t.interpolate||la,$="__p += '",ee=zi((t.escape||la).source+"|"+M.source+"|"+(M===Zs?Nc:la).source+"|"+(t.evaluate||la).source+"|$","g"),le="//# sourceURL="+(Re.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++tf+"]")+`
`;n.replace(ee,function(de,he,be,yn,sn,bn){return be||(be=yn),$+=n.slice(L,bn).replace(Bc,Tf),he&&(A=!0,$+=`' +
__e(`+he+`) +
'`),sn&&(P=!0,$+=`';
`+sn+`;
__p += '`),be&&($+=`' +
((__t = (`+be+`)) == null ? '' : __t) +
'`),L=bn+de.length,de}),$+=`';
`;var ue=Re.call(t,"variable")&&t.variable;if(!ue)$=`with (obj) {
`+$+`
}
`;else if(Ac.test(ue))throw new me(m);$=(P?$.replace(oc,""):$).replace(uc,"$1").replace(dc,"$1;"),$="function("+(ue||"obj")+`) {
`+(ue?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(A?", __e = _.escape":"")+(P?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+$+`return __p
}`;var fe=Td(function(){return Te(p,le+"return "+$).apply(r,k)});if(fe.source=$,jl(fe))throw fe;return fe}function zk(n){return we(n).toLowerCase()}function Jk(n){return we(n).toUpperCase()}function Xk(n,t,s){if(n=we(n),n&&(s||t===r))return jo(n);if(!n||!(t=hn(t)))return n;var u=qn(n),g=qn(t),p=Bo(u,g),k=Fo(u,g)+1;return Tt(u,p,k).join("")}function Zk(n,t,s){if(n=we(n),n&&(s||t===r))return n.slice(0,qo(n)+1);if(!n||!(t=hn(t)))return n;var u=qn(n),g=Fo(u,qn(t))+1;return Tt(u,0,g).join("")}function Qk(n,t,s){if(n=we(n),n&&(s||t===r))return n.replace(ji,"");if(!n||!(t=hn(t)))return n;var u=qn(n),g=Bo(u,qn(t));return Tt(u,g).join("")}function ey(n,t){var s=Q,u=X;if(De(t)){var g="separator"in t?t.separator:g;s="length"in t?ce(t.length):s,u="omission"in t?hn(t.omission):u}n=we(n);var p=n.length;if($t(n)){var k=qn(n);p=k.length}if(s>=p)return n;var A=s-Yt(u);if(A<1)return u;var P=k?Tt(k,0,A).join(""):n.slice(0,A);if(g===r)return P+u;if(k&&(A+=P.length-A),Bl(g)){if(n.slice(A).search(g)){var L,M=P;for(g.global||(g=zi(g.source,we(Qs.exec(g))+"g")),g.lastIndex=0;L=g.exec(M);)var $=L.index;P=P.slice(0,$===r?A:$)}}else if(n.indexOf(hn(g),A)!=A){var ee=P.lastIndexOf(g);ee>-1&&(P=P.slice(0,ee))}return P+u}function ny(n){return n=we(n),n&&mc.test(n)?n.replace(Js,If):n}var ty=er(function(n,t,s){return n+(s?" ":"")+t.toUpperCase()}),ql=Au("toUpperCase");function _d(n,t,s){return n=we(n),t=s?r:t,t===r?wf(n)?Bf(n):pf(n):n.match(t)||[]}var Td=ve(function(n,t){try{return vn(n,r,t)}catch(s){return jl(s)?s:new me(s)}}),ry=it(function(n,t){return wn(t,function(s){s=Un(s),rt(n,s,Il(n[s],n))}),n});function ay(n){var t=n==null?0:n.length,s=oe();return n=t?qe(n,function(u){if(typeof u[1]!="function")throw new Nn(d);return[s(u[0]),u[1]]}):[],ve(function(u){for(var g=-1;++g<t;){var p=n[g];if(vn(p[0],this,u))return vn(p[1],this,u)}})}function iy(n){return Iv(Sn(n,y))}function Kl(n){return function(){return n}}function ly(n,t){return n==null||n!==n?t:n}var sy=Nu(),oy=Nu(!0);function gn(n){return n}function Dl(n){return tu(typeof n=="function"?n:Sn(n,y))}function uy(n){return au(Sn(n,y))}function dy(n,t){return iu(n,Sn(t,y))}var my=ve(function(n,t){return function(s){return Pr(s,n,t)}}),gy=ve(function(n,t){return function(s){return Pr(n,s,t)}});function Vl(n,t,s){var u=ze(t),g=Sa(t,u);s==null&&!(De(t)&&(g.length||!u.length))&&(s=t,t=n,n=this,g=Sa(t,ze(t)));var p=!(De(s)&&"chain"in s)||!!s.chain,k=st(n);return wn(g,function(A){var P=t[A];n[A]=P,k&&(n.prototype[A]=function(){var L=this.__chain__;if(p||L){var M=n(this.__wrapped__),$=M.__actions__=un(this.__actions__);return $.push({func:P,args:arguments,thisArg:n}),M.__chain__=L,M}return P.apply(n,ht([this.value()],arguments))})}),n}function cy(){return en._===this&&(en._=Vf),this}function Ll(){}function fy(n){return n=ce(n),ve(function(t){return lu(t,n)})}var vy=hl(qe),py=hl(Ro),hy=hl(Ci);function Ad(n){return Al(n)?Gi(Un(n)):Yv(n)}function ky(n){return function(t){return n==null?r:Bt(n,t)}}var yy=Su(),by=Su(!0);function Ml(){return[]}function Cl(){return!1}function Ey(){return{}}function _y(){return""}function Ty(){return!0}function Ay(n,t){if(n=ce(n),n<1||n>H)return[];var s=ne,u=tn(n,ne);t=oe(t),n-=ne;for(var g=$i(u,t);++s<n;)t(s);return g}function wy(n){return ge(n)?qe(n,Un):kn(n)?[n]:un(Hu(we(n)))}function Ny(n){var t=++Kf;return we(n)+t}var Ry=Fa(function(n,t){return n+t},0),Sy=kl("ceil"),Py=Fa(function(n,t){return n/t},1),Iy=kl("floor");function Oy(n){return n&&n.length?Ra(n,gn,rl):r}function jy(n,t){return n&&n.length?Ra(n,oe(t,2),rl):r}function By(n){return Io(n,gn)}function Fy(n,t){return Io(n,oe(t,2))}function xy(n){return n&&n.length?Ra(n,gn,sl):r}function qy(n,t){return n&&n.length?Ra(n,oe(t,2),sl):r}var Ky=Fa(function(n,t){return n*t},1),Dy=kl("round"),Vy=Fa(function(n,t){return n-t},0);function Ly(n){return n&&n.length?Ui(n,gn):0}function My(n,t){return n&&n.length?Ui(n,oe(t,2)):0}return f.after=uh,f.ary=nd,f.assign=Jh,f.assignIn=vd,f.assignInWith=Ya,f.assignWith=Xh,f.at=Zh,f.before=td,f.bind=Il,f.bindAll=ry,f.bindKey=rd,f.castArray=Eh,f.chain=Zu,f.chunk=I0,f.compact=O0,f.concat=j0,f.cond=ay,f.conforms=iy,f.constant=Kl,f.countBy=Lp,f.create=Qh,f.curry=ad,f.curryRight=id,f.debounce=ld,f.defaults=ek,f.defaultsDeep=nk,f.defer=dh,f.delay=mh,f.difference=B0,f.differenceBy=F0,f.differenceWith=x0,f.drop=q0,f.dropRight=K0,f.dropRightWhile=D0,f.dropWhile=V0,f.fill=L0,f.filter=Cp,f.flatMap=Up,f.flatMapDeep=$p,f.flatMapDepth=Yp,f.flatten=Wu,f.flattenDeep=M0,f.flattenDepth=C0,f.flip=gh,f.flow=sy,f.flowRight=oy,f.fromPairs=G0,f.functions=ok,f.functionsIn=uk,f.groupBy=Wp,f.initial=U0,f.intersection=$0,f.intersectionBy=Y0,f.intersectionWith=W0,f.invert=mk,f.invertBy=gk,f.invokeMap=Jp,f.iteratee=Dl,f.keyBy=Xp,f.keys=ze,f.keysIn=mn,f.map=Ma,f.mapKeys=fk,f.mapValues=vk,f.matches=uy,f.matchesProperty=dy,f.memoize=Ga,f.merge=pk,f.mergeWith=pd,f.method=my,f.methodOf=gy,f.mixin=Vl,f.negate=Ha,f.nthArg=fy,f.omit=hk,f.omitBy=kk,f.once=ch,f.orderBy=Zp,f.over=vy,f.overArgs=fh,f.overEvery=py,f.overSome=hy,f.partial=Ol,f.partialRight=sd,f.partition=Qp,f.pick=yk,f.pickBy=hd,f.property=Ad,f.propertyOf=ky,f.pull=Z0,f.pullAll=Ju,f.pullAllBy=Q0,f.pullAllWith=ep,f.pullAt=np,f.range=yy,f.rangeRight=by,f.rearg=vh,f.reject=th,f.remove=tp,f.rest=ph,f.reverse=Sl,f.sampleSize=ah,f.set=Ek,f.setWith=_k,f.shuffle=ih,f.slice=rp,f.sortBy=oh,f.sortedUniq=dp,f.sortedUniqBy=mp,f.split=Uk,f.spread=hh,f.tail=gp,f.take=cp,f.takeRight=fp,f.takeRightWhile=vp,f.takeWhile=pp,f.tap=Op,f.throttle=kh,f.thru=La,f.toArray=gd,f.toPairs=kd,f.toPairsIn=yd,f.toPath=wy,f.toPlainObject=fd,f.transform=Tk,f.unary=yh,f.union=hp,f.unionBy=kp,f.unionWith=yp,f.uniq=bp,f.uniqBy=Ep,f.uniqWith=_p,f.unset=Ak,f.unzip=Pl,f.unzipWith=Xu,f.update=wk,f.updateWith=Nk,f.values=rr,f.valuesIn=Rk,f.without=Tp,f.words=_d,f.wrap=bh,f.xor=Ap,f.xorBy=wp,f.xorWith=Np,f.zip=Rp,f.zipObject=Sp,f.zipObjectDeep=Pp,f.zipWith=Ip,f.entries=kd,f.entriesIn=yd,f.extend=vd,f.extendWith=Ya,Vl(f,f),f.add=Ry,f.attempt=Td,f.camelCase=Ok,f.capitalize=bd,f.ceil=Sy,f.clamp=Sk,f.clone=_h,f.cloneDeep=Ah,f.cloneDeepWith=wh,f.cloneWith=Th,f.conformsTo=Nh,f.deburr=Ed,f.defaultTo=ly,f.divide=Py,f.endsWith=jk,f.eq=Dn,f.escape=Bk,f.escapeRegExp=Fk,f.every=Mp,f.find=Gp,f.findIndex=$u,f.findKey=tk,f.findLast=Hp,f.findLastIndex=Yu,f.findLastKey=rk,f.floor=Iy,f.forEach=Qu,f.forEachRight=ed,f.forIn=ak,f.forInRight=ik,f.forOwn=lk,f.forOwnRight=sk,f.get=Fl,f.gt=Rh,f.gte=Sh,f.has=dk,f.hasIn=xl,f.head=zu,f.identity=gn,f.includes=zp,f.indexOf=H0,f.inRange=Pk,f.invoke=ck,f.isArguments=qt,f.isArray=ge,f.isArrayBuffer=Ph,f.isArrayLike=dn,f.isArrayLikeObject=Ue,f.isBoolean=Ih,f.isBuffer=At,f.isDate=Oh,f.isElement=jh,f.isEmpty=Bh,f.isEqual=Fh,f.isEqualWith=xh,f.isError=jl,f.isFinite=qh,f.isFunction=st,f.isInteger=od,f.isLength=Ua,f.isMap=ud,f.isMatch=Kh,f.isMatchWith=Dh,f.isNaN=Vh,f.isNative=Lh,f.isNil=Ch,f.isNull=Mh,f.isNumber=dd,f.isObject=De,f.isObjectLike=Ge,f.isPlainObject=xr,f.isRegExp=Bl,f.isSafeInteger=Gh,f.isSet=md,f.isString=$a,f.isSymbol=kn,f.isTypedArray=tr,f.isUndefined=Hh,f.isWeakMap=Uh,f.isWeakSet=$h,f.join=z0,f.kebabCase=xk,f.last=In,f.lastIndexOf=J0,f.lowerCase=qk,f.lowerFirst=Kk,f.lt=Yh,f.lte=Wh,f.max=Oy,f.maxBy=jy,f.mean=By,f.meanBy=Fy,f.min=xy,f.minBy=qy,f.stubArray=Ml,f.stubFalse=Cl,f.stubObject=Ey,f.stubString=_y,f.stubTrue=Ty,f.multiply=Ky,f.nth=X0,f.noConflict=cy,f.noop=Ll,f.now=Ca,f.pad=Dk,f.padEnd=Vk,f.padStart=Lk,f.parseInt=Mk,f.random=Ik,f.reduce=eh,f.reduceRight=nh,f.repeat=Ck,f.replace=Gk,f.result=bk,f.round=Dy,f.runInContext=R,f.sample=rh,f.size=lh,f.snakeCase=Hk,f.some=sh,f.sortedIndex=ap,f.sortedIndexBy=ip,f.sortedIndexOf=lp,f.sortedLastIndex=sp,f.sortedLastIndexBy=op,f.sortedLastIndexOf=up,f.startCase=$k,f.startsWith=Yk,f.subtract=Vy,f.sum=Ly,f.sumBy=My,f.template=Wk,f.times=Ay,f.toFinite=ot,f.toInteger=ce,f.toLength=cd,f.toLower=zk,f.toNumber=On,f.toSafeInteger=zh,f.toString=we,f.toUpper=Jk,f.trim=Xk,f.trimEnd=Zk,f.trimStart=Qk,f.truncate=ey,f.unescape=ny,f.uniqueId=Ny,f.upperCase=ty,f.upperFirst=ql,f.each=Qu,f.eachRight=ed,f.first=zu,Vl(f,function(){var n={};return Gn(f,function(t,s){Re.call(f.prototype,s)||(n[s]=t)}),n}(),{chain:!1}),f.VERSION=a,wn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){f[n].placeholder=f}),wn(["drop","take"],function(n,t){ye.prototype[n]=function(s){s=s===r?1:We(ce(s),0);var u=this.__filtered__&&!t?new ye(this):this.clone();return u.__filtered__?u.__takeCount__=tn(s,u.__takeCount__):u.__views__.push({size:tn(s,ne),type:n+(u.__dir__<0?"Right":"")}),u},ye.prototype[n+"Right"]=function(s){return this.reverse()[n](s).reverse()}}),wn(["filter","map","takeWhile"],function(n,t){var s=t+1,u=s==q||s==te;ye.prototype[n]=function(g){var p=this.clone();return p.__iteratees__.push({iteratee:oe(g,3),type:s}),p.__filtered__=p.__filtered__||u,p}}),wn(["head","last"],function(n,t){var s="take"+(t?"Right":"");ye.prototype[n]=function(){return this[s](1).value()[0]}}),wn(["initial","tail"],function(n,t){var s="drop"+(t?"":"Right");ye.prototype[n]=function(){return this.__filtered__?new ye(this):this[s](1)}}),ye.prototype.compact=function(){return this.filter(gn)},ye.prototype.find=function(n){return this.filter(n).head()},ye.prototype.findLast=function(n){return this.reverse().find(n)},ye.prototype.invokeMap=ve(function(n,t){return typeof n=="function"?new ye(this):this.map(function(s){return Pr(s,n,t)})}),ye.prototype.reject=function(n){return this.filter(Ha(oe(n)))},ye.prototype.slice=function(n,t){n=ce(n);var s=this;return s.__filtered__&&(n>0||t<0)?new ye(s):(n<0?s=s.takeRight(-n):n&&(s=s.drop(n)),t!==r&&(t=ce(t),s=t<0?s.dropRight(-t):s.take(t-n)),s)},ye.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},ye.prototype.toArray=function(){return this.take(ne)},Gn(ye.prototype,function(n,t){var s=/^(?:filter|find|map|reject)|While$/.test(t),u=/^(?:head|last)$/.test(t),g=f[u?"take"+(t=="last"?"Right":""):t],p=u||/^find/.test(t);g&&(f.prototype[t]=function(){var k=this.__wrapped__,A=u?[1]:arguments,P=k instanceof ye,L=A[0],M=P||ge(k),$=function(he){var be=g.apply(f,ht([he],A));return u&&ee?be[0]:be};M&&s&&typeof L=="function"&&L.length!=1&&(P=M=!1);var ee=this.__chain__,le=!!this.__actions__.length,ue=p&&!ee,fe=P&&!le;if(!p&&M){k=fe?k:new ye(this);var de=n.apply(k,A);return de.__actions__.push({func:La,args:[$],thisArg:r}),new Rn(de,ee)}return ue&&fe?n.apply(this,A):(de=this.thru($),ue?u?de.value()[0]:de.value():de)})}),wn(["pop","push","shift","sort","splice","unshift"],function(n){var t=ga[n],s=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",u=/^(?:pop|shift)$/.test(n);f.prototype[n]=function(){var g=arguments;if(u&&!this.__chain__){var p=this.value();return t.apply(ge(p)?p:[],g)}return this[s](function(k){return t.apply(ge(k)?k:[],g)})}}),Gn(ye.prototype,function(n,t){var s=f[t];if(s){var u=s.name+"";Re.call(Xt,u)||(Xt[u]=[]),Xt[u].push({name:t,func:s})}}),Xt[Ba(r,N).name]=[{name:"wrapper",func:r}],ye.prototype.clone=nv,ye.prototype.reverse=tv,ye.prototype.value=rv,f.prototype.at=jp,f.prototype.chain=Bp,f.prototype.commit=Fp,f.prototype.next=xp,f.prototype.plant=Kp,f.prototype.reverse=Dp,f.prototype.toJSON=f.prototype.valueOf=f.prototype.value=Vp,f.prototype.first=f.prototype.head,_r&&(f.prototype[_r]=qp),f},Wt=Ff();St?((St.exports=Wt)._=Wt,Di._=Wt):en._=Wt}).call(UE)}(Gr,Gr.exports)),Gr.exports}$E();Ln(na);const Rg=w.forwardRef((e,i)=>D.jsx(lr,{gap:"space-8",style:{display:"flex"},...e,ref:i}));Rg.displayName="FaktaGruppe";Rg.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var ns={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var gm;function YE(){return gm||(gm=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",d=0;d<arguments.length;d++){var m=arguments[d];m&&(o=l(o,a.call(this,m)))}return o}function a(o){if(typeof o=="string"||typeof o=="number")return this&&this[o]||o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(this,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var m in o)i.call(o,m)&&o[m]&&(d=l(d,this&&this[m]||m));return d}function l(o,d){return d?o?o+" "+d:o+d:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(ns)),ns.exports}var WE=YE();const zE=Gm(WE),JE="_boks_nm7fe_1",XE="_harBorderLeft_nm7fe_8",ZE="_harBorderTop_nm7fe_12",QE={boks:JE,harBorderLeft:XE,harBorderTop:ZE};zE.bind(QE);var ts={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var cm;function e_(){return cm||(cm=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",d=0;d<arguments.length;d++){var m=arguments[d];m&&(o=l(o,a(m)))}return o}function a(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var m in o)i.call(o,m)&&o[m]&&(d=l(d,m));return d}function l(o,d){return d?o?o+" "+d:o+d:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(ts)),ts.exports}e_();function n_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fm={exports:{}},Lr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function t_(){if(vm)return Lr;vm=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,l,o){var d=null;if(o!==void 0&&(d=""+o),l.key!==void 0&&(d=""+l.key),"key"in l){o={};for(var m in l)m!=="key"&&(o[m]=l[m])}else o=l;return l=o.ref,{$$typeof:e,type:a,key:d,ref:l!==void 0?l:null,props:o}}return Lr.Fragment=i,Lr.jsx=r,Lr.jsxs=r,Lr}var pm;function r_(){return pm||(pm=1,fm.exports=t_()),fm.exports}var mt=r_();const a_="_autocompleteSuggestion__substring_1s9ip_1",i_="_autocompleteSuggestion__inner_1s9ip_4",Mr={autocompleteSuggestion__substring:a_,autocompleteSuggestion__inner:i_,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_1s9ip_12"};class l_ extends U.Component{constructor(i){super(i),this.state={value:i.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:i}=this.props,{value:r}=this.state;i(r)}onMouseMove(){const{setSuggestionIndex:i,index:r}=this.props;i(r)}render(){const{match:i,active:r,avoidBlur:a,id:l}=this.props,{value:o}=this.state.value,d=o.toLowerCase().startsWith(i.toLowerCase());return mt.jsx("li",{id:l,role:"option","aria-selected":r,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:a,onMouseDown:a,onKeyDown:a,className:"autocompleteSuggestion typo-normal",children:d?mt.jsxs("span",{className:`${Mr.autocompleteSuggestion__inner} ${r?Mr["autocompleteSuggestion--active"]:""}`,children:[o.substring(0,i.length),mt.jsx("span",{className:Mr.autocompleteSuggestion__substring,children:o.substring(i.length)})]}):mt.jsx("span",{className:`${Mr.autocompleteSuggestion__inner} ${r?Mr["autocompleteSuggestion--active"]:""}`,children:o})})}}const s_="_autocomplete_cj8jr_1",o_="_autocomplete__suggestions_cj8jr_27",rs={autocomplete:s_,autocomplete__suggestions:o_,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_cj8jr_31"};class bA extends U.Component{input;inputRef;constructor(i){super(i),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=r=>{this.input=r},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null}))}onChange(i){const{onChange:r}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),r(i)}onSearchButtonClick(i){const{onSearchButtonClick:r}=this.props;i.preventDefault(),r&&r()}onKeyDown(i){const{shouldShowSuggestions:r}=this.state;let{activeSuggestionIndex:a}=this.state;const{suggestions:l}=this.props,o=a>-1;switch(this.setState({setAriaActiveDescendant:i.keyCode===38||i.keyCode===40}),i.keyCode){case 9:o&&r&&this.setValue(l[a]);break;case 13:o&&r?(i.preventDefault(),this.setValue(l[a])):r&&l.length===1?this.setValue(l[0]):this.setState({shouldShowSuggestions:!1});break;case 27:r&&l.length>0&&(i.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:r&&(i.preventDefault(),a=a-1===-2?-1:a-1,this.setState({activeSuggestionIndex:a}));break;case 40:r&&(i.preventDefault(),a=a+1===l.length?l.length-1:a+1,this.setState({activeSuggestionIndex:a}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const i=setTimeout(()=>{const{shouldBlur:a}=this.state;a&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:i});const{onBlur:r}=this.props;r&&r()}setSuggestionIndex(i){this.setState({activeSuggestionIndex:i}),this.clearBlurDelay()}setValue(i){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:r}=this.props;r(i)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:i,id:r,ariaLabel:a,placeholder:l,value:o,name:d,shouldFocusOnMount:m,isLoading:c}=this.props,{activeSuggestionIndex:v,setAriaActiveDescendant:h,hasFocus:y,shouldShowSuggestions:E}=this.state,_=y&&E&&i.length>0,O=h&&v>-1?`${r}-item-${v}`:void 0;return mt.jsxs("div",{className:`${rs.autocomplete} autocomplete`,"aria-expanded":_,"aria-owns":`${r}-suggestions`,"aria-haspopup":"listbox",children:[mt.jsx(hs,{variant:"primary",id:r,name:d,"aria-label":a,"aria-autocomplete":"list","aria-controls":`${r}-suggestions`,"aria-activedescendant":O,placeholder:l,value:o,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:T=>{this.inputRef=T},className:"typo-normal",autoFocus:m,label:a,hideLabel:!0,children:mt.jsx(hs.Button,{loading:c,onClick:this.onSearchButtonClick})}),mt.jsx("ul",{id:`${r}-suggestions`,role:"listbox",className:_?rs.autocomplete__suggestions:rs["autocomplete__suggestions--hidden"],children:_&&i.map((T,b)=>mt.jsx(l_,{id:`${r}-item-${b}`,index:b,value:T,match:o,active:b===v,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},T.key))})]})}}var ys=function(e,i){return ys=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(r[l]=a[l])},ys(e,i)};function Mn(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");ys(e,i);function r(){this.constructor=e}e.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}var ie=function(){return ie=Object.assign||function(e){for(var i,r=1,a=arguments.length;r<a;r++){i=arguments[r];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},ie.apply(this,arguments)};function yi(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)i.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r}function Wn(e,i,r){if(arguments.length===2)for(var a=0,l=i.length,o;a<l;a++)(o||!(a in i))&&(o||(o=Array.prototype.slice.call(i,0,a)),o[a]=i[a]);return e.concat(o||Array.prototype.slice.call(i))}function $n(e,i){var r=i&&i.cache?i.cache:v_,a=i&&i.serializer?i.serializer:c_,l=i&&i.strategy?i.strategy:m_;return l(e,{cache:r,serializer:a})}function u_(e){return e==null||typeof e=="number"||typeof e=="boolean"}function d_(e,i,r,a){var l=u_(a)?a:r(a),o=i.get(l);return typeof o>"u"&&(o=e.call(this,a),i.set(l,o)),o}function Sg(e,i,r){var a=Array.prototype.slice.call(arguments,3),l=r(a),o=i.get(l);return typeof o>"u"&&(o=e.apply(this,a),i.set(l,o)),o}function Pg(e,i,r,a,l){return r.bind(i,e,a,l)}function m_(e,i){var r=e.length===1?d_:Sg;return Pg(e,this,r,i.cache.create(),i.serializer)}function g_(e,i){return Pg(e,this,Sg,i.cache.create(),i.serializer)}var c_=function(){return JSON.stringify(arguments)},f_=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(i){return this.cache[i]},e.prototype.set=function(i,r){this.cache[i]=r},e}(),v_={create:function(){return new f_}},Yn={variadic:g_},Ee;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Ee||(Ee={}));var Fe;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Fe||(Fe={}));var mr;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(mr||(mr={}));function hm(e){return e.type===Fe.literal}function p_(e){return e.type===Fe.argument}function Ig(e){return e.type===Fe.number}function Og(e){return e.type===Fe.date}function jg(e){return e.type===Fe.time}function Bg(e){return e.type===Fe.select}function Fg(e){return e.type===Fe.plural}function h_(e){return e.type===Fe.pound}function xg(e){return e.type===Fe.tag}function qg(e){return!!(e&&typeof e=="object"&&e.type===mr.number)}function bs(e){return!!(e&&typeof e=="object"&&e.type===mr.dateTime)}var Kg=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,k_=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function y_(e){var i={};return e.replace(k_,function(r){var a=r.length;switch(r[0]){case"G":i.era=a===4?"long":a===5?"narrow":"short";break;case"y":i.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=a===4?"long":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][a-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][a-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][a-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][a-1];break;case"s":i.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var b_=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function E_(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(b_).filter(function(E){return E.length>0}),r=[],a=0,l=i;a<l.length;a++){var o=l[a],d=o.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var m=d[0],c=d.slice(1),v=0,h=c;v<h.length;v++){var y=h[v];if(y.length===0)throw new Error("Invalid number skeleton")}r.push({stem:m,options:c})}return r}function __(e){return e.replace(/^(.*?)-/,"")}var km=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Dg=/^(@+)?(\+|#+)?[rs]?$/g,T_=/(\*)(0+)|(#+)(0+)|(0+)/g,Vg=/^(0+)$/;function ym(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(Dg,function(r,a,l){return typeof l!="string"?(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length):l==="+"?i.minimumSignificantDigits=a.length:a[0]==="#"?i.maximumSignificantDigits=a.length:(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length+(typeof l=="string"?l.length:0)),""}),i}function Lg(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function A_(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var r=e.slice(0,2);if(r==="+!"?(i.signDisplay="always",e=e.slice(2)):r==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!Vg.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function bm(e){var i={},r=Lg(e);return r||i}function w_(e){for(var i={},r=0,a=e;r<a.length;r++){var l=a[r];switch(l.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=l.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=__(l.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=ie(ie(ie({},i),{notation:"scientific"}),l.options.reduce(function(c,v){return ie(ie({},c),bm(v))},{}));continue;case"engineering":i=ie(ie(ie({},i),{notation:"engineering"}),l.options.reduce(function(c,v){return ie(ie({},c),bm(v))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(l.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(l.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");l.options[0].replace(T_,function(c,v,h,y,E,_){if(v)i.minimumIntegerDigits=h.length;else{if(y&&E)throw new Error("We currently do not support maximum integer digits");if(_)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Vg.test(l.stem)){i.minimumIntegerDigits=l.stem.length;continue}if(km.test(l.stem)){if(l.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");l.stem.replace(km,function(c,v,h,y,E,_){return h==="*"?i.minimumFractionDigits=v.length:y&&y[0]==="#"?i.maximumFractionDigits=y.length:E&&_?(i.minimumFractionDigits=E.length,i.maximumFractionDigits=E.length+_.length):(i.minimumFractionDigits=v.length,i.maximumFractionDigits=v.length),""});var o=l.options[0];o==="w"?i=ie(ie({},i),{trailingZeroDisplay:"stripIfInteger"}):o&&(i=ie(ie({},i),ym(o)));continue}if(Dg.test(l.stem)){i=ie(ie({},i),ym(l.stem));continue}var d=Lg(l.stem);d&&(i=ie(ie({},i),d));var m=A_(l.stem);m&&(i=ie(ie({},i),m))}return i}var Xa={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function N_(e,i){for(var r="",a=0;a<e.length;a++){var l=e.charAt(a);if(l==="j"){for(var o=0;a+1<e.length&&e.charAt(a+1)===l;)o++,a++;var d=1+(o&1),m=o<2?1:3+(o>>1),c="a",v=R_(i);for((v=="H"||v=="k")&&(m=0);m-- >0;)r+=c;for(;d-- >0;)r=v+r}else l==="J"?r+="H":r+=l}return r}function R_(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,a;r!=="root"&&(a=e.maximize().region);var l=Xa[a||""]||Xa[r||""]||Xa["".concat(r,"-001")]||Xa["001"];return l[0]}var as,S_=new RegExp("^".concat(Kg.source,"*")),P_=new RegExp("".concat(Kg.source,"*$"));function _e(e,i){return{start:e,end:i}}var I_=!!String.prototype.startsWith&&"_a".startsWith("a",1),O_=!!String.fromCodePoint,j_=!!Object.fromEntries,B_=!!String.prototype.codePointAt,F_=!!String.prototype.trimStart,x_=!!String.prototype.trimEnd,q_=!!Number.isSafeInteger,K_=q_?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Es=!0;try{var D_=Cg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Es=((as=D_.exec("a"))===null||as===void 0?void 0:as[0])==="a"}catch{Es=!1}var Em=I_?function(e,i,r){return e.startsWith(i,r)}:function(e,i,r){return e.slice(r,r+i.length)===i},_s=O_?String.fromCodePoint:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var r="",a=e.length,l=0,o;a>l;){if(o=e[l++],o>1114111)throw RangeError(o+" is not a valid code point");r+=o<65536?String.fromCharCode(o):String.fromCharCode(((o-=65536)>>10)+55296,o%1024+56320)}return r},_m=j_?Object.fromEntries:function(e){for(var i={},r=0,a=e;r<a.length;r++){var l=a[r],o=l[0],d=l[1];i[o]=d}return i},Mg=B_?function(e,i){return e.codePointAt(i)}:function(e,i){var r=e.length;if(!(i<0||i>=r)){var a=e.charCodeAt(i),l;return a<55296||a>56319||i+1===r||(l=e.charCodeAt(i+1))<56320||l>57343?a:(a-55296<<10)+(l-56320)+65536}},V_=F_?function(e){return e.trimStart()}:function(e){return e.replace(S_,"")},L_=x_?function(e){return e.trimEnd()}:function(e){return e.replace(P_,"")};function Cg(e,i){return new RegExp(e,i)}var Ts;if(Es){var Tm=Cg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Ts=function(e,i){var r;Tm.lastIndex=i;var a=Tm.exec(e);return(r=a[1])!==null&&r!==void 0?r:""}}else Ts=function(e,i){for(var r=[];;){var a=Mg(e,i);if(a===void 0||Gg(a)||H_(a))break;r.push(a),i+=a>=65536?2:1}return _s.apply(void 0,r)};var M_=function(){function e(i,r){r===void 0&&(r={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,r,a){for(var l=[];!this.isEOF();){var o=this.char();if(o===123){var d=this.parseArgument(i,a);if(d.err)return d;l.push(d.val)}else{if(o===125&&i>0)break;if(o===35&&(r==="plural"||r==="selectordinal")){var m=this.clonePosition();this.bump(),l.push({type:Fe.pound,location:_e(m,this.clonePosition())})}else if(o===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(Ee.UNMATCHED_CLOSING_TAG,_e(this.clonePosition(),this.clonePosition()))}else if(o===60&&!this.ignoreTag&&As(this.peek()||0)){var d=this.parseTag(i,r);if(d.err)return d;l.push(d.val)}else{var d=this.parseLiteral(i,r);if(d.err)return d;l.push(d.val)}}}return{val:l,err:null}},e.prototype.parseTag=function(i,r){var a=this.clonePosition();this.bump();var l=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Fe.literal,value:"<".concat(l,"/>"),location:_e(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var o=this.parseMessage(i+1,r,!0);if(o.err)return o;var d=o.val,m=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!As(this.char()))return this.error(Ee.INVALID_TAG,_e(m,this.clonePosition()));var c=this.clonePosition(),v=this.parseTagName();return l!==v?this.error(Ee.UNMATCHED_CLOSING_TAG,_e(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Fe.tag,value:l,children:d,location:_e(a,this.clonePosition())},err:null}:this.error(Ee.INVALID_TAG,_e(m,this.clonePosition())))}else return this.error(Ee.UNCLOSED_TAG,_e(a,this.clonePosition()))}else return this.error(Ee.INVALID_TAG,_e(a,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&G_(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,r){for(var a=this.clonePosition(),l="";;){var o=this.tryParseQuote(r);if(o){l+=o;continue}var d=this.tryParseUnquoted(i,r);if(d){l+=d;continue}var m=this.tryParseLeftAngleBracket();if(m){l+=m;continue}break}var c=_e(a,this.clonePosition());return{val:{type:Fe.literal,value:l,location:c},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!C_(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(a);this.bump()}return _s.apply(void 0,r)},e.prototype.tryParseUnquoted=function(i,r){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(r==="plural"||r==="selectordinal")||a===125&&i>0?null:(this.bump(),_s(a))},e.prototype.parseArgument=function(i,r){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,_e(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Ee.EMPTY_ARGUMENT,_e(a,this.clonePosition()));var l=this.parseIdentifierIfPossible().value;if(!l)return this.error(Ee.MALFORMED_ARGUMENT,_e(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,_e(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Fe.argument,value:l,location:_e(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,_e(a,this.clonePosition())):this.parseArgumentOptions(i,r,l,a);default:return this.error(Ee.MALFORMED_ARGUMENT,_e(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),r=this.offset(),a=Ts(this.message,r),l=r+a.length;this.bumpTo(l);var o=this.clonePosition(),d=_e(i,o);return{value:a,location:d}},e.prototype.parseArgumentOptions=function(i,r,a,l){var o,d=this.clonePosition(),m=this.parseIdentifierIfPossible().value,c=this.clonePosition();switch(m){case"":return this.error(Ee.EXPECT_ARGUMENT_TYPE,_e(d,c));case"number":case"date":case"time":{this.bumpSpace();var v=null;if(this.bumpIf(",")){this.bumpSpace();var h=this.clonePosition(),y=this.parseSimpleArgStyleIfPossible();if(y.err)return y;var E=L_(y.val);if(E.length===0)return this.error(Ee.EXPECT_ARGUMENT_STYLE,_e(this.clonePosition(),this.clonePosition()));var _=_e(h,this.clonePosition());v={style:E,styleLocation:_}}var O=this.tryParseArgumentClose(l);if(O.err)return O;var T=_e(l,this.clonePosition());if(v&&Em(v?.style,"::",0)){var b=V_(v.style.slice(2));if(m==="number"){var y=this.parseNumberSkeletonFromString(b,v.styleLocation);return y.err?y:{val:{type:Fe.number,value:a,location:T,style:y.val},err:null}}else{if(b.length===0)return this.error(Ee.EXPECT_DATE_TIME_SKELETON,T);var N=b;this.locale&&(N=N_(b,this.locale));var E={type:mr.dateTime,pattern:N,location:v.styleLocation,parsedOptions:this.shouldParseSkeletons?y_(N):{}},j=m==="date"?Fe.date:Fe.time;return{val:{type:j,value:a,location:T,style:E},err:null}}}return{val:{type:m==="number"?Fe.number:m==="date"?Fe.date:Fe.time,value:a,location:T,style:(o=v?.style)!==null&&o!==void 0?o:null},err:null}}case"plural":case"selectordinal":case"select":{var S=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Ee.EXPECT_SELECT_ARGUMENT_OPTIONS,_e(S,ie({},S)));this.bumpSpace();var G=this.parseIdentifierIfPossible(),I=0;if(m!=="select"&&G.value==="offset"){if(!this.bumpIf(":"))return this.error(Ee.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,_e(this.clonePosition(),this.clonePosition()));this.bumpSpace();var y=this.tryParseDecimalInteger(Ee.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ee.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(y.err)return y;this.bumpSpace(),G=this.parseIdentifierIfPossible(),I=y.val}var C=this.tryParsePluralOrSelectOptions(i,m,r,G);if(C.err)return C;var O=this.tryParseArgumentClose(l);if(O.err)return O;var F=_e(l,this.clonePosition());return m==="select"?{val:{type:Fe.select,value:a,options:_m(C.val),location:F},err:null}:{val:{type:Fe.plural,value:a,options:_m(C.val),offset:I,pluralType:m==="plural"?"cardinal":"ordinal",location:F},err:null}}default:return this.error(Ee.INVALID_ARGUMENT_TYPE,_e(d,c))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,_e(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,r=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var l=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Ee.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,_e(l,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,r){var a=[];try{a=E_(i)}catch{return this.error(Ee.INVALID_NUMBER_SKELETON,r)}return{val:{type:mr.number,tokens:a,location:r,parsedOptions:this.shouldParseSkeletons?w_(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,r,a,l){for(var o,d=!1,m=[],c=new Set,v=l.value,h=l.location;;){if(v.length===0){var y=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var E=this.tryParseDecimalInteger(Ee.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ee.INVALID_PLURAL_ARGUMENT_SELECTOR);if(E.err)return E;h=_e(y,this.clonePosition()),v=this.message.slice(y.offset,this.offset())}else break}if(c.has(v))return this.error(r==="select"?Ee.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Ee.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,h);v==="other"&&(d=!0),this.bumpSpace();var _=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?Ee.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Ee.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,_e(this.clonePosition(),this.clonePosition()));var O=this.parseMessage(i+1,r,a);if(O.err)return O;var T=this.tryParseArgumentClose(_);if(T.err)return T;m.push([v,{value:O.val,location:_e(_,this.clonePosition())}]),c.add(v),this.bumpSpace(),o=this.parseIdentifierIfPossible(),v=o.value,h=o.location}return m.length===0?this.error(r==="select"?Ee.EXPECT_SELECT_ARGUMENT_SELECTOR:Ee.EXPECT_PLURAL_ARGUMENT_SELECTOR,_e(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(Ee.MISSING_OTHER_CLAUSE,_e(this.clonePosition(),this.clonePosition())):{val:m,err:null}},e.prototype.tryParseDecimalInteger=function(i,r){var a=1,l=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var o=!1,d=0;!this.isEOF();){var m=this.char();if(m>=48&&m<=57)o=!0,d=d*10+(m-48),this.bump();else break}var c=_e(l,this.clonePosition());return o?(d*=a,K_(d)?{val:d,err:null}:this.error(r,c)):this.error(i,c)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var r=Mg(this.message,i);if(r===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(i,r){return{val:null,err:{kind:i,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Em(this.message,i,this.offset())){for(var r=0;r<i.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var r=this.offset(),a=this.message.indexOf(i,r);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var r=this.offset();if(r===i)break;if(r>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Gg(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),r=this.offset(),a=this.message.charCodeAt(r+(i>=65536?2:1));return a??null},e}();function As(e){return e>=97&&e<=122||e>=65&&e<=90}function C_(e){return As(e)||e===47}function G_(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Gg(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function H_(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function ws(e){e.forEach(function(i){if(delete i.location,Bg(i)||Fg(i))for(var r in i.options)delete i.options[r].location,ws(i.options[r].value);else Ig(i)&&qg(i.style)||(Og(i)||jg(i))&&bs(i.style)?delete i.style.location:xg(i)&&ws(i.children)})}function U_(e,i){i===void 0&&(i={}),i=ie({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var r=new M_(e,i).parse();if(r.err){var a=SyntaxError(Ee[r.err.kind]);throw a.location=r.err.location,a.originalMessage=r.err.message,a}return i?.captureLocation||ws(r.val),r.val}var Xn;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Xn||(Xn={}));var Rt=function(e){Mn(i,e);function i(r,a,l){var o=e.call(this,r)||this;return o.code=a,o.originalMessage=l,o}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),Am=function(e){Mn(i,e);function i(r,a,l,o){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(a,'". Options are "').concat(Object.keys(l).join('", "'),'"'),Xn.INVALID_VALUE,o)||this}return i}(Rt),$_=function(e){Mn(i,e);function i(r,a,l){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(a),Xn.INVALID_VALUE,l)||this}return i}(Rt),Y_=function(e){Mn(i,e);function i(r,a){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(a,'"'),Xn.MISSING_VALUE,a)||this}return i}(Rt),on;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(on||(on={}));function W_(e){return e.length<2?e:e.reduce(function(i,r){var a=i[i.length-1];return!a||a.type!==on.literal||r.type!==on.literal?i.push(r):a.value+=r.value,i},[])}function Hg(e){return typeof e=="function"}function ti(e,i,r,a,l,o,d){if(e.length===1&&hm(e[0]))return[{type:on.literal,value:e[0].value}];for(var m=[],c=0,v=e;c<v.length;c++){var h=v[c];if(hm(h)){m.push({type:on.literal,value:h.value});continue}if(h_(h)){typeof o=="number"&&m.push({type:on.literal,value:r.getNumberFormat(i).format(o)});continue}var y=h.value;if(!(l&&y in l))throw new Y_(y,d);var E=l[y];if(p_(h)){(!E||typeof E=="string"||typeof E=="number")&&(E=typeof E=="string"||typeof E=="number"?String(E):""),m.push({type:typeof E=="string"?on.literal:on.object,value:E});continue}if(Og(h)){var _=typeof h.style=="string"?a.date[h.style]:bs(h.style)?h.style.parsedOptions:void 0;m.push({type:on.literal,value:r.getDateTimeFormat(i,_).format(E)});continue}if(jg(h)){var _=typeof h.style=="string"?a.time[h.style]:bs(h.style)?h.style.parsedOptions:a.time.medium;m.push({type:on.literal,value:r.getDateTimeFormat(i,_).format(E)});continue}if(Ig(h)){var _=typeof h.style=="string"?a.number[h.style]:qg(h.style)?h.style.parsedOptions:void 0;_&&_.scale&&(E=E*(_.scale||1)),m.push({type:on.literal,value:r.getNumberFormat(i,_).format(E)});continue}if(xg(h)){var O=h.children,T=h.value,b=l[T];if(!Hg(b))throw new $_(T,"function",d);var N=ti(O,i,r,a,l,o),j=b(N.map(function(I){return I.value}));Array.isArray(j)||(j=[j]),m.push.apply(m,j.map(function(I){return{type:typeof I=="string"?on.literal:on.object,value:I}}))}if(Bg(h)){var S=h.options[E]||h.options.other;if(!S)throw new Am(h.value,E,Object.keys(h.options),d);m.push.apply(m,ti(S.value,i,r,a,l));continue}if(Fg(h)){var S=h.options["=".concat(E)];if(!S){if(!Intl.PluralRules)throw new Rt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Xn.MISSING_INTL_API,d);var G=r.getPluralRules(i,{type:h.pluralType}).select(E-(h.offset||0));S=h.options[G]||h.options.other}if(!S)throw new Am(h.value,E,Object.keys(h.options),d);m.push.apply(m,ti(S.value,i,r,a,l,E-(h.offset||0)));continue}}return W_(m)}function z_(e,i){return i?ie(ie(ie({},e||{}),i||{}),Object.keys(e).reduce(function(r,a){return r[a]=ie(ie({},e[a]),i[a]||{}),r},{})):e}function J_(e,i){return i?Object.keys(e).reduce(function(r,a){return r[a]=z_(e[a],i[a]),r},ie({},e)):e}function is(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,r){e[i]=r}}}}}function X_(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:$n(function(){for(var i,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((i=Intl.NumberFormat).bind.apply(i,Wn([void 0],r,!1)))},{cache:is(e.number),strategy:Yn.variadic}),getDateTimeFormat:$n(function(){for(var i,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((i=Intl.DateTimeFormat).bind.apply(i,Wn([void 0],r,!1)))},{cache:is(e.dateTime),strategy:Yn.variadic}),getPluralRules:$n(function(){for(var i,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((i=Intl.PluralRules).bind.apply(i,Wn([void 0],r,!1)))},{cache:is(e.pluralRules),strategy:Yn.variadic})}}var Ug=function(){function e(i,r,a,l){r===void 0&&(r=e.defaultLocale);var o=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(c){var v=o.formatToParts(c);if(v.length===1)return v[0].value;var h=v.reduce(function(y,E){return!y.length||E.type!==on.literal||typeof y[y.length-1]!="string"?y.push(E.value):y[y.length-1]+=E.value,y},[]);return h.length<=1?h[0]||"":h},this.formatToParts=function(c){return ti(o.ast,o.locales,o.formatters,o.formats,c,void 0,o.message)},this.resolvedOptions=function(){var c;return{locale:((c=o.resolvedLocale)===null||c===void 0?void 0:c.toString())||Intl.NumberFormat.supportedLocalesOf(o.locales)[0]}},this.getAst=function(){return o.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=l||{};d.formatters;var m=yi(d,["formatters"]);this.ast=e.__parse(i,ie(ie({},m),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=J_(e.formats,a),this.formatters=l&&l.formatters||X_(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(i);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=U_,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Ct;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Ct||(Ct={}));var ta=function(e){Mn(i,e);function i(r,a,l){var o=this,d=l?l instanceof Error?l:new Error(String(l)):void 0;return o=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(a,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,o.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(o,i),o}return i}(Error),Z_=function(e){Mn(i,e);function i(r,a){return e.call(this,Ct.UNSUPPORTED_FORMATTER,r,a)||this}return i}(ta),Q_=function(e){Mn(i,e);function i(r,a){return e.call(this,Ct.INVALID_CONFIG,r,a)||this}return i}(ta),wm=function(e){Mn(i,e);function i(r,a){return e.call(this,Ct.MISSING_DATA,r,a)||this}return i}(ta),Fn=function(e){Mn(i,e);function i(r,a,l){var o=e.call(this,Ct.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(a,`
`),l)||this;return o.locale=a,o}return i}(ta),ls=function(e){Mn(i,e);function i(r,a,l,o){var d=e.call(this,"".concat(r,`
MessageID: `).concat(l?.id,`
Default Message: `).concat(l?.defaultMessage,`
Description: `).concat(l?.description,`
`),a,o)||this;return d.descriptor=l,d.locale=a,d}return i}(Fn),eT=function(e){Mn(i,e);function i(r,a){var l=e.call(this,Ct.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(a,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(o){var d;return(d=o.value)!==null&&d!==void 0?d:JSON.stringify(o)}).join(),")"):"id"," as fallback."))||this;return l.descriptor=r,l}return i}(ta);function nT(e,i,r){if(r===void 0&&(r=Error),!e)throw new r(i)}function pr(e,i,r){return r===void 0&&(r={}),i.reduce(function(a,l){return l in e?a[l]=e[l]:l in r&&(a[l]=r[l]),a},{})}var tT=function(e){},rT=function(e){},$g={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:tT,onWarn:rT};function Yg(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Kt(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,r){e[i]=r}}}}}function aT(e){e===void 0&&(e=Yg());var i=Intl.RelativeTimeFormat,r=Intl.ListFormat,a=Intl.DisplayNames,l=$n(function(){for(var m,c=[],v=0;v<arguments.length;v++)c[v]=arguments[v];return new((m=Intl.DateTimeFormat).bind.apply(m,Wn([void 0],c,!1)))},{cache:Kt(e.dateTime),strategy:Yn.variadic}),o=$n(function(){for(var m,c=[],v=0;v<arguments.length;v++)c[v]=arguments[v];return new((m=Intl.NumberFormat).bind.apply(m,Wn([void 0],c,!1)))},{cache:Kt(e.number),strategy:Yn.variadic}),d=$n(function(){for(var m,c=[],v=0;v<arguments.length;v++)c[v]=arguments[v];return new((m=Intl.PluralRules).bind.apply(m,Wn([void 0],c,!1)))},{cache:Kt(e.pluralRules),strategy:Yn.variadic});return{getDateTimeFormat:l,getNumberFormat:o,getMessageFormat:$n(function(m,c,v,h){return new Ug(m,c,v,ie({formatters:{getNumberFormat:o,getDateTimeFormat:l,getPluralRules:d}},h||{}))},{cache:Kt(e.message),strategy:Yn.variadic}),getRelativeTimeFormat:$n(function(){for(var m=[],c=0;c<arguments.length;c++)m[c]=arguments[c];return new(i.bind.apply(i,Wn([void 0],m,!1)))},{cache:Kt(e.relativeTime),strategy:Yn.variadic}),getPluralRules:d,getListFormat:$n(function(){for(var m=[],c=0;c<arguments.length;c++)m[c]=arguments[c];return new(r.bind.apply(r,Wn([void 0],m,!1)))},{cache:Kt(e.list),strategy:Yn.variadic}),getDisplayNames:$n(function(){for(var m=[],c=0;c<arguments.length;c++)m[c]=arguments[c];return new(a.bind.apply(a,Wn([void 0],m,!1)))},{cache:Kt(e.displayNames),strategy:Yn.variadic})}}function Ys(e,i,r,a){var l=e&&e[i],o;if(l&&(o=l[r]),o)return o;a(new Z_("No ".concat(i," format named: ").concat(r)))}function Za(e,i){return Object.keys(e).reduce(function(r,a){return r[a]=ie({timeZone:i},e[a]),r},{})}function Nm(e,i){var r=Object.keys(ie(ie({},e),i));return r.reduce(function(a,l){return a[l]=ie(ie({},e[l]||{}),i[l]||{}),a},{})}function Rm(e,i){if(!i)return e;var r=Ug.formats;return ie(ie(ie({},r),e),{date:Nm(Za(r.date,i),Za(e.date||{},i)),time:Nm(Za(r.time,i),Za(e.time||{},i))})}var Ns=function(e,i,r,a,l){var o=e.locale,d=e.formats,m=e.messages,c=e.defaultLocale,v=e.defaultFormats,h=e.fallbackOnEmptyString,y=e.onError,E=e.timeZone,_=e.defaultRichTextElements;r===void 0&&(r={id:""});var O=r.id,T=r.defaultMessage;nT(!!O,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var b=String(O),N=m&&Object.prototype.hasOwnProperty.call(m,b)&&m[b];if(Array.isArray(N)&&N.length===1&&N[0].type===Fe.literal)return N[0].value;if(!a&&N&&typeof N=="string"&&!_)return N.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=ie(ie({},_),a||{}),d=Rm(d,E),v=Rm(v,E),!N){if(h===!1&&N==="")return N;if((!T||o&&o.toLowerCase()!==c.toLowerCase())&&y(new eT(r,o)),T)try{var j=i.getMessageFormat(T,c,v,l);return j.format(a)}catch(S){return y(new ls('Error formatting default message for: "'.concat(b,'", rendering default message verbatim'),o,r,S)),typeof T=="string"?T:b}return b}try{var j=i.getMessageFormat(N,o,d,ie({formatters:i},l||{}));return j.format(a)}catch(S){y(new ls('Error formatting message: "'.concat(b,'", using ').concat(T?"default message":"id"," as fallback."),o,r,S))}if(T)try{var j=i.getMessageFormat(T,c,v,l);return j.format(a)}catch(S){y(new ls('Error formatting the default message for: "'.concat(b,'", rendering message verbatim'),o,r,S))}return typeof N=="string"?N:typeof T=="string"?T:b},iT=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function ra(e,i,r,a){var l=e.locale,o=e.formats,d=e.onError,m=e.timeZone;a===void 0&&(a={});var c=a.format,v=ie(ie({},m&&{timeZone:m}),c&&Ys(o,i,c,d)),h=pr(a,iT,v);return i==="time"&&!h.hour&&!h.minute&&!h.second&&!h.timeStyle&&!h.dateStyle&&(h=ie(ie({},h),{hour:"numeric",minute:"numeric"})),r(l,h)}function lT(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var l=r[0],o=r[1],d=o===void 0?{}:o,m=typeof l=="string"?new Date(l||0):l;try{return ra(e,"date",i,d).format(m)}catch(c){e.onError(new Fn("Error formatting date.",e.locale,c))}return String(m)}function sT(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var l=r[0],o=r[1],d=o===void 0?{}:o,m=typeof l=="string"?new Date(l||0):l;try{return ra(e,"time",i,d).format(m)}catch(c){e.onError(new Fn("Error formatting time.",e.locale,c))}return String(m)}function oT(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var l=r[0],o=r[1],d=r[2],m=d===void 0?{}:d,c=typeof l=="string"?new Date(l||0):l,v=typeof o=="string"?new Date(o||0):o;try{return ra(e,"dateTimeRange",i,m).formatRange(c,v)}catch(h){e.onError(new Fn("Error formatting date time range.",e.locale,h))}return String(c)}function uT(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var l=r[0],o=r[1],d=o===void 0?{}:o,m=typeof l=="string"?new Date(l||0):l;try{return ra(e,"date",i,d).formatToParts(m)}catch(c){e.onError(new Fn("Error formatting date.",e.locale,c))}return[]}function dT(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var l=r[0],o=r[1],d=o===void 0?{}:o,m=typeof l=="string"?new Date(l||0):l;try{return ra(e,"time",i,d).formatToParts(m)}catch(c){e.onError(new Fn("Error formatting time.",e.locale,c))}return[]}var mT=["style","type","fallback","languageDisplay"];function gT(e,i,r,a){var l=e.locale,o=e.onError,d=Intl.DisplayNames;d||o(new Rt(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Xn.MISSING_INTL_API));var m=pr(a,mT);try{return i(l,m).of(r)}catch(c){o(new Fn("Error formatting display name.",l,c))}}var cT=["type","style"],Sm=Date.now();function fT(e){return"".concat(Sm,"_").concat(e,"_").concat(Sm)}function vT(e,i,r,a){a===void 0&&(a={});var l=Wg(e,i,r,a).reduce(function(o,d){var m=d.value;return typeof m!="string"?o.push(m):typeof o[o.length-1]=="string"?o[o.length-1]+=m:o.push(m),o},[]);return l.length===1?l[0]:l.length===0?"":l}function Wg(e,i,r,a){var l=e.locale,o=e.onError;a===void 0&&(a={});var d=Intl.ListFormat;d||o(new Rt(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Xn.MISSING_INTL_API));var m=pr(a,cT);try{var c={},v=r.map(function(h,y){if(typeof h=="object"){var E=fT(y);return c[E]=h,E}return String(h)});return i(l,m).formatToParts(v).map(function(h){return h.type==="literal"?h:ie(ie({},h),{value:c[h.value]||h.value})})}catch(h){o(new Fn("Error formatting list.",l,h))}return r}var pT=["type"];function hT(e,i,r,a){var l=e.locale,o=e.onError;a===void 0&&(a={}),Intl.PluralRules||o(new Rt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Xn.MISSING_INTL_API));var d=pr(a,pT);try{return i(l,d).select(r)}catch(m){o(new Fn("Error formatting plural.",l,m))}return"other"}var kT=["numeric","style"];function yT(e,i,r){var a=e.locale,l=e.formats,o=e.onError;r===void 0&&(r={});var d=r.format,m=!!d&&Ys(l,"relative",d,o)||{},c=pr(r,kT,m);return i(a,c)}function bT(e,i,r,a,l){l===void 0&&(l={}),a||(a="second");var o=Intl.RelativeTimeFormat;o||e.onError(new Rt(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Xn.MISSING_INTL_API));try{return yT(e,i,l).format(r,a)}catch(d){e.onError(new Fn("Error formatting relative time.",e.locale,d))}return String(r)}var ET=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function zg(e,i,r){var a=e.locale,l=e.formats,o=e.onError;r===void 0&&(r={});var d=r.format,m=d&&Ys(l,"number",d,o)||{},c=pr(r,ET,m);return i(a,c)}function _T(e,i,r,a){a===void 0&&(a={});try{return zg(e,i,a).format(r)}catch(l){e.onError(new Fn("Error formatting number.",e.locale,l))}return String(r)}function TT(e,i,r,a){a===void 0&&(a={});try{return zg(e,i,a).formatToParts(r)}catch(l){e.onError(new Fn("Error formatting number.",e.locale,l))}return[]}function AT(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function wT(e){e.onWarn&&e.defaultRichTextElements&&AT(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function NT(e,i){var r=aT(i),a=ie(ie({},$g),e),l=a.locale,o=a.defaultLocale,d=a.onError;return l?!Intl.NumberFormat.supportedLocalesOf(l).length&&d?d(new wm('Missing locale data for locale: "'.concat(l,'" in Intl.NumberFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(l).length&&d&&d(new wm('Missing locale data for locale: "'.concat(l,'" in Intl.DateTimeFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new Q_('"locale" was not configured, using "'.concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),wT(a),ie(ie({},a),{formatters:r,formatNumber:_T.bind(null,a,r.getNumberFormat),formatNumberToParts:TT.bind(null,a,r.getNumberFormat),formatRelativeTime:bT.bind(null,a,r.getRelativeTimeFormat),formatDate:lT.bind(null,a,r.getDateTimeFormat),formatDateToParts:uT.bind(null,a,r.getDateTimeFormat),formatTime:sT.bind(null,a,r.getDateTimeFormat),formatDateTimeRange:oT.bind(null,a,r.getDateTimeFormat),formatTimeToParts:dT.bind(null,a,r.getDateTimeFormat),formatPlural:hT.bind(null,a,r.getPluralRules),formatMessage:Ns.bind(null,a,r),$t:Ns.bind(null,a,r),formatList:vT.bind(null,a,r.getListFormat),formatListToParts:Wg.bind(null,a,r.getListFormat),formatDisplayName:gT.bind(null,a,r.getDisplayNames)})}function RT(e,i,r){if(r===void 0&&(r=Error),!e)throw new r(i)}function ST(e){RT(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var PT=ie(ie({},$g),{textComponent:w.Fragment}),IT={key:42},OT=function(e){return w.isValidElement(e)?w.createElement(w.Fragment,IT,e):e},jT=function(e){var i;return(i=w.Children.map(e,OT))!==null&&i!==void 0?i:[]};function BT(e){return function(i){return e(w.Children.toArray(i))}}var Pm={exports:{}},Ne={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function FT(){if(Im)return Ne;Im=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,l=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,m=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,v=e?Symbol.for("react.concurrent_mode"):60111,h=e?Symbol.for("react.forward_ref"):60112,y=e?Symbol.for("react.suspense"):60113,E=e?Symbol.for("react.suspense_list"):60120,_=e?Symbol.for("react.memo"):60115,O=e?Symbol.for("react.lazy"):60116,T=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,N=e?Symbol.for("react.responder"):60118,j=e?Symbol.for("react.scope"):60119;function S(I){if(typeof I=="object"&&I!==null){var C=I.$$typeof;switch(C){case i:switch(I=I.type,I){case c:case v:case a:case o:case l:case y:return I;default:switch(I=I&&I.$$typeof,I){case m:case h:case O:case _:case d:return I;default:return C}}case r:return C}}}function G(I){return S(I)===v}return Ne.AsyncMode=c,Ne.ConcurrentMode=v,Ne.ContextConsumer=m,Ne.ContextProvider=d,Ne.Element=i,Ne.ForwardRef=h,Ne.Fragment=a,Ne.Lazy=O,Ne.Memo=_,Ne.Portal=r,Ne.Profiler=o,Ne.StrictMode=l,Ne.Suspense=y,Ne.isAsyncMode=function(I){return G(I)||S(I)===c},Ne.isConcurrentMode=G,Ne.isContextConsumer=function(I){return S(I)===m},Ne.isContextProvider=function(I){return S(I)===d},Ne.isElement=function(I){return typeof I=="object"&&I!==null&&I.$$typeof===i},Ne.isForwardRef=function(I){return S(I)===h},Ne.isFragment=function(I){return S(I)===a},Ne.isLazy=function(I){return S(I)===O},Ne.isMemo=function(I){return S(I)===_},Ne.isPortal=function(I){return S(I)===r},Ne.isProfiler=function(I){return S(I)===o},Ne.isStrictMode=function(I){return S(I)===l},Ne.isSuspense=function(I){return S(I)===y},Ne.isValidElementType=function(I){return typeof I=="string"||typeof I=="function"||I===a||I===v||I===o||I===l||I===y||I===E||typeof I=="object"&&I!==null&&(I.$$typeof===O||I.$$typeof===_||I.$$typeof===d||I.$$typeof===m||I.$$typeof===h||I.$$typeof===b||I.$$typeof===N||I.$$typeof===j||I.$$typeof===T)},Ne.typeOf=S,Ne}var Om;function xT(){return Om||(Om=1,Pm.exports=FT()),Pm.exports}var ss,jm;function qT(){if(jm)return ss;jm=1;var e=xT(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[e.ForwardRef]=a,o[e.Memo]=l;function d(O){return e.isMemo(O)?l:o[O.$$typeof]||i}var m=Object.defineProperty,c=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,E=Object.prototype;function _(O,T,b){if(typeof T!="string"){if(E){var N=y(T);N&&N!==E&&_(O,N,b)}var j=c(T);v&&(j=j.concat(v(T)));for(var S=d(O),G=d(T),I=0;I<j.length;++I){var C=j[I];if(!r[C]&&!(b&&b[C])&&!(G&&G[C])&&!(S&&S[C])){var F=h(T,C);try{m(O,C,F)}catch{}}}}return O}return ss=_,ss}qT();var Ws=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=w.createContext(null)):w.createContext(null);Ws.Consumer;Ws.Provider;var KT=Ws;function Jg(){var e=w.useContext(KT);return ST(e),e}var Rs;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Rs||(Rs={}));var Ss;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Ss||(Ss={}));function Xg(e){var i=function(r){var a=Jg(),l=r.value,o=r.children,d=yi(r,["value","children"]),m=typeof l=="string"?new Date(l||0):l,c=e==="formatDate"?a.formatDateToParts(m,d):a.formatTimeToParts(m,d);return o(c)};return i.displayName=Ss[e],i}function aa(e){var i=function(r){var a=Jg(),l=r.value,o=r.children,d=yi(r,["value","children"]),m=a[e](l,d);if(typeof o=="function")return o(m);var c=a.textComponent||w.Fragment;return w.createElement(c,null,m)};return i.displayName=Rs[e],i}function Zg(e){return e&&Object.keys(e).reduce(function(i,r){var a=e[r];return i[r]=Hg(a)?BT(a):a,i},{})}var Bm=function(e,i,r,a){for(var l=[],o=4;o<arguments.length;o++)l[o-4]=arguments[o];var d=Zg(a),m=Ns.apply(void 0,Wn([e,i,r,d],l,!1));return Array.isArray(m)?jT(m):m},DT=function(e,i){var r=e.defaultRichTextElements,a=yi(e,["defaultRichTextElements"]),l=Zg(r),o=NT(ie(ie(ie({},PT),a),{defaultRichTextElements:l}),i),d={locale:o.locale,timeZone:o.timeZone,fallbackOnEmptyString:o.fallbackOnEmptyString,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:l};return ie(ie({},o),{formatMessage:Bm.bind(null,d,o.formatters),$t:Bm.bind(null,d,o.formatters)})};aa("formatDate");aa("formatTime");aa("formatNumber");aa("formatList");aa("formatDisplayName");Xg("formatDate");Xg("formatTime");function zs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ps={exports:{}},VT=Ps.exports,Fm;function LT(){return Fm||(Fm=1,function(e,i){(function(r,a){e.exports=a()})(VT,function(){var r,a,l=1e3,o=6e4,d=36e5,m=864e5,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v=31536e6,h=2628e6,y=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,E={years:v,months:h,days:m,hours:d,minutes:o,seconds:l,milliseconds:1,weeks:6048e5},_=function(C){return C instanceof G},O=function(C,F,x){return new G(C,x,F.$l)},T=function(C){return a.p(C)+"s"},b=function(C){return C<0},N=function(C){return b(C)?Math.ceil(C):Math.floor(C)},j=function(C){return Math.abs(C)},S=function(C,F){return C?b(C)?{negative:!0,format:""+j(C)+F}:{negative:!1,format:""+C+F}:{negative:!1,format:""}},G=function(){function C(x,z,Q){var X=this;if(this.$d={},this.$l=Q,x===void 0&&(this.$ms=0,this.parseFromMilliseconds()),z)return O(x*E[T(z)],this);if(typeof x=="number")return this.$ms=x,this.parseFromMilliseconds(),this;if(typeof x=="object")return Object.keys(x).forEach(function(q){X.$d[T(q)]=x[q]}),this.calMilliseconds(),this;if(typeof x=="string"){var Z=x.match(y);if(Z){var V=Z.slice(2).map(function(q){return q!=null?Number(q):0});return this.$d.years=V[0],this.$d.months=V[1],this.$d.weeks=V[2],this.$d.days=V[3],this.$d.hours=V[4],this.$d.minutes=V[5],this.$d.seconds=V[6],this.calMilliseconds(),this}}return this}var F=C.prototype;return F.calMilliseconds=function(){var x=this;this.$ms=Object.keys(this.$d).reduce(function(z,Q){return z+(x.$d[Q]||0)*E[Q]},0)},F.parseFromMilliseconds=function(){var x=this.$ms;this.$d.years=N(x/v),x%=v,this.$d.months=N(x/h),x%=h,this.$d.days=N(x/m),x%=m,this.$d.hours=N(x/d),x%=d,this.$d.minutes=N(x/o),x%=o,this.$d.seconds=N(x/l),x%=l,this.$d.milliseconds=x},F.toISOString=function(){var x=S(this.$d.years,"Y"),z=S(this.$d.months,"M"),Q=+this.$d.days||0;this.$d.weeks&&(Q+=7*this.$d.weeks);var X=S(Q,"D"),Z=S(this.$d.hours,"H"),V=S(this.$d.minutes,"M"),q=this.$d.seconds||0;this.$d.milliseconds&&(q+=this.$d.milliseconds/1e3,q=Math.round(1e3*q)/1e3);var J=S(q,"S"),te=x.negative||z.negative||X.negative||Z.negative||V.negative||J.negative,W=Z.format||V.format||J.format?"T":"",H=(te?"-":"")+"P"+x.format+z.format+X.format+W+Z.format+V.format+J.format;return H==="P"||H==="-P"?"P0D":H},F.toJSON=function(){return this.toISOString()},F.format=function(x){var z=x||"YYYY-MM-DDTHH:mm:ss",Q={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return z.replace(c,function(X,Z){return Z||String(Q[X])})},F.as=function(x){return this.$ms/E[T(x)]},F.get=function(x){var z=this.$ms,Q=T(x);return Q==="milliseconds"?z%=1e3:z=Q==="weeks"?N(z/E[Q]):this.$d[Q],z||0},F.add=function(x,z,Q){var X;return X=z?x*E[T(z)]:_(x)?x.$ms:O(x,this).$ms,O(this.$ms+X*(Q?-1:1),this)},F.subtract=function(x,z){return this.add(x,z,!0)},F.locale=function(x){var z=this.clone();return z.$l=x,z},F.clone=function(){return O(this.$ms,this)},F.humanize=function(x){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!x)},F.valueOf=function(){return this.asMilliseconds()},F.milliseconds=function(){return this.get("milliseconds")},F.asMilliseconds=function(){return this.as("milliseconds")},F.seconds=function(){return this.get("seconds")},F.asSeconds=function(){return this.as("seconds")},F.minutes=function(){return this.get("minutes")},F.asMinutes=function(){return this.as("minutes")},F.hours=function(){return this.get("hours")},F.asHours=function(){return this.as("hours")},F.days=function(){return this.get("days")},F.asDays=function(){return this.as("days")},F.weeks=function(){return this.get("weeks")},F.asWeeks=function(){return this.as("weeks")},F.months=function(){return this.get("months")},F.asMonths=function(){return this.as("months")},F.years=function(){return this.get("years")},F.asYears=function(){return this.as("years")},C}(),I=function(C,F,x){return C.add(F.years()*x,"y").add(F.months()*x,"M").add(F.days()*x,"d").add(F.hours()*x,"h").add(F.minutes()*x,"m").add(F.seconds()*x,"s").add(F.milliseconds()*x,"ms")};return function(C,F,x){r=x,a=x().$utils(),x.duration=function(X,Z){var V=x.locale();return O(X,{$l:V},Z)},x.isDuration=_;var z=F.prototype.add,Q=F.prototype.subtract;F.prototype.add=function(X,Z){return _(X)?I(this,X,1):z.bind(this)(X,Z)},F.prototype.subtract=function(X,Z){return _(X)?I(this,X,-1):Q.bind(this)(X,Z)}}})}(Ps)),Ps.exports}var MT=LT();const CT=zs(MT);var Is={exports:{}},GT=Is.exports,xm;function HT(){return xm||(xm=1,function(e,i){(function(r,a){e.exports=a()})(GT,function(){var r="day";return function(a,l,o){var d=function(v){return v.add(4-v.isoWeekday(),r)},m=l.prototype;m.isoWeekYear=function(){return d(this).year()},m.isoWeek=function(v){if(!this.$utils().u(v))return this.add(7*(v-this.isoWeek()),r);var h,y,E,_,O=d(this),T=(h=this.isoWeekYear(),y=this.$u,E=(y?o.utc:o)().year(h).startOf("year"),_=4-E.isoWeekday(),E.isoWeekday()>4&&(_+=7),E.add(_,r));return O.diff(T,"week")+1},m.isoWeekday=function(v){return this.$utils().u(v)?this.day()||7:this.day(this.day()%7?v:v-7)};var c=m.startOf;m.startOf=function(v,h){var y=this.$utils(),E=!!y.u(h)||h;return y.p(v)==="isoweek"?E?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):c.bind(this)(v,h)}}})}(Is)),Is.exports}var UT=HT();const $T=zs(UT);var Os={exports:{}},YT=Os.exports,qm;function WT(){return qm||(qm=1,function(e,i){(function(r,a){e.exports=a()})(YT,function(){var r="minute",a=/[+-]\d\d(?::?\d\d)?/g,l=/([+-]|\d\d)/g;return function(o,d,m){var c=d.prototype;m.utc=function(T){var b={date:T,utc:!0,args:arguments};return new d(b)},c.utc=function(T){var b=m(this.toDate(),{locale:this.$L,utc:!0});return T?b.add(this.utcOffset(),r):b},c.local=function(){return m(this.toDate(),{locale:this.$L,utc:!1})};var v=c.parse;c.parse=function(T){T.utc&&(this.$u=!0),this.$utils().u(T.$offset)||(this.$offset=T.$offset),v.call(this,T)};var h=c.init;c.init=function(){if(this.$u){var T=this.$d;this.$y=T.getUTCFullYear(),this.$M=T.getUTCMonth(),this.$D=T.getUTCDate(),this.$W=T.getUTCDay(),this.$H=T.getUTCHours(),this.$m=T.getUTCMinutes(),this.$s=T.getUTCSeconds(),this.$ms=T.getUTCMilliseconds()}else h.call(this)};var y=c.utcOffset;c.utcOffset=function(T,b){var N=this.$utils().u;if(N(T))return this.$u?0:N(this.$offset)?y.call(this):this.$offset;if(typeof T=="string"&&(T=function(I){I===void 0&&(I="");var C=I.match(a);if(!C)return null;var F=(""+C[0]).match(l)||["-",0,0],x=F[0],z=60*+F[1]+ +F[2];return z===0?0:x==="+"?z:-z}(T),T===null))return this;var j=Math.abs(T)<=16?60*T:T,S=this;if(b)return S.$offset=j,S.$u=T===0,S;if(T!==0){var G=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(S=this.local().add(j+G,r)).$offset=j,S.$x.$localOffset=G}else S=this.utc();return S};var E=c.format;c.format=function(T){var b=T||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return E.call(this,b)},c.valueOf=function(){var T=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*T},c.isUTC=function(){return!!this.$u},c.toISOString=function(){return this.toDate().toISOString()},c.toString=function(){return this.toDate().toUTCString()};var _=c.toDate;c.toDate=function(T){return T==="s"&&this.$offset?m(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():_.call(this)};var O=c.diff;c.diff=function(T,b,N){if(T&&this.$u===T.$u)return O.call(this,T,b,N);var j=this.local(),S=m(T).local();return O.call(j,S,b,N)}}})}(Os)),Os.exports}var zT=WT();const JT=zs(zT),XT=Yg(),bi=e=>DT({locale:"nb-NO",messages:e},XT),Ei={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};bi(Ei);var js={exports:{}},ZT=js.exports,Km;function QT(){return Km||(Km=1,function(e,i){(function(r,a){e.exports=a(cr)})(ZT,function(r){function a(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var l=a(r),o={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return l.default.locale(o,null,!0),o})}(js)),js.exports}QT();cr.extend(JT);cr.extend($T);cr.extend(CT);bi(Ei);bi(Ei);var Dm={exports:{}},Cr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function eA(){if(Vm)return Cr;Vm=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,l,o){var d=null;if(o!==void 0&&(d=""+o),l.key!==void 0&&(d=""+l.key),"key"in l){o={};for(var m in l)m!=="key"&&(o[m]=l[m])}else o=l;return l=o.ref,{$$typeof:e,type:a,key:d,ref:l!==void 0?l:null,props:o}}return Cr.Fragment=i,Cr.jsx=r,Cr.jsxs=r,Cr}var Lm;function nA(){return Lm||(Lm=1,Dm.exports=eA()),Dm.exports}nA();bi(Ei);w.createContext({});var Bs={exports:{}},tA=Bs.exports,Mm;function rA(){return Mm||(Mm=1,function(e,i){(function(r,a){e.exports=a()})(tA,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,l=/\d/,o=/\d\d/,d=/\d\d?/,m=/\d*[^-_:/,()\s\d]+/,c={},v=function(b){return(b=+b)+(b>68?1900:2e3)},h=function(b){return function(N){this[b]=+N}},y=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(N){if(!N||N==="Z")return 0;var j=N.match(/([+-]|\d\d)/g),S=60*j[1]+(+j[2]||0);return S===0?0:j[0]==="+"?-S:S}(b)}],E=function(b){var N=c[b];return N&&(N.indexOf?N:N.s.concat(N.f))},_=function(b,N){var j,S=c.meridiem;if(S){for(var G=1;G<=24;G+=1)if(b.indexOf(S(G,0,N))>-1){j=G>12;break}}else j=b===(N?"pm":"PM");return j},O={A:[m,function(b){this.afternoon=_(b,!1)}],a:[m,function(b){this.afternoon=_(b,!0)}],Q:[l,function(b){this.month=3*(b-1)+1}],S:[l,function(b){this.milliseconds=100*+b}],SS:[o,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[d,h("seconds")],ss:[d,h("seconds")],m:[d,h("minutes")],mm:[d,h("minutes")],H:[d,h("hours")],h:[d,h("hours")],HH:[d,h("hours")],hh:[d,h("hours")],D:[d,h("day")],DD:[o,h("day")],Do:[m,function(b){var N=c.ordinal,j=b.match(/\d+/);if(this.day=j[0],N)for(var S=1;S<=31;S+=1)N(S).replace(/\[|\]/g,"")===b&&(this.day=S)}],w:[d,h("week")],ww:[o,h("week")],M:[d,h("month")],MM:[o,h("month")],MMM:[m,function(b){var N=E("months"),j=(E("monthsShort")||N.map(function(S){return S.slice(0,3)})).indexOf(b)+1;if(j<1)throw new Error;this.month=j%12||j}],MMMM:[m,function(b){var N=E("months").indexOf(b)+1;if(N<1)throw new Error;this.month=N%12||N}],Y:[/[+-]?\d+/,h("year")],YY:[o,function(b){this.year=v(b)}],YYYY:[/\d{4}/,h("year")],Z:y,ZZ:y};function T(b){var N,j;N=b,j=c&&c.formats;for(var S=(b=N.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Q,X,Z){var V=Z&&Z.toUpperCase();return X||j[Z]||r[Z]||j[V].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(q,J,te){return J||te.slice(1)})})).match(a),G=S.length,I=0;I<G;I+=1){var C=S[I],F=O[C],x=F&&F[0],z=F&&F[1];S[I]=z?{regex:x,parser:z}:C.replace(/^\[|\]$/g,"")}return function(Q){for(var X={},Z=0,V=0;Z<G;Z+=1){var q=S[Z];if(typeof q=="string")V+=q.length;else{var J=q.regex,te=q.parser,W=Q.slice(V),H=J.exec(W)[0];te.call(X,H),Q=Q.replace(H,"")}}return function(Y){var ae=Y.afternoon;if(ae!==void 0){var ne=Y.hours;ae?ne<12&&(Y.hours+=12):ne===12&&(Y.hours=0),delete Y.afternoon}}(X),X}}return function(b,N,j){j.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(v=b.parseTwoDigitYear);var S=N.prototype,G=S.parse;S.parse=function(I){var C=I.date,F=I.utc,x=I.args;this.$u=F;var z=x[1];if(typeof z=="string"){var Q=x[2]===!0,X=x[3]===!0,Z=Q||X,V=x[2];X&&(V=x[2]),c=this.$locale(),!Q&&V&&(c=j.Ls[V]),this.$d=function(W,H,Y,ae){try{if(["x","X"].indexOf(H)>-1)return new Date((H==="X"?1e3:1)*W);var ne=T(H)(W),se=ne.year,pe=ne.month,fn=ne.day,Le=ne.hours,xe=ne.minutes,Me=ne.seconds,ke=ne.milliseconds,Ae=ne.zone,Xe=ne.week,Ce=new Date,He=fn||(se||pe?1:Ce.getDate()),Tn=se||Ce.getFullYear(),Ke=0;se&&!pe||(Ke=pe>0?pe-1:Ce.getMonth());var Ze,Qn=Le||0,Qe=xe||0,Cn=Me||0,et=ke||0;return Ae?new Date(Date.UTC(Tn,Ke,He,Qn,Qe,Cn,et+60*Ae.offset*1e3)):Y?new Date(Date.UTC(Tn,Ke,He,Qn,Qe,Cn,et)):(Ze=new Date(Tn,Ke,He,Qn,Qe,Cn,et),Xe&&(Ze=ae(Ze).week(Xe).toDate()),Ze)}catch{return new Date("")}}(C,z,F,j),this.init(),V&&V!==!0&&(this.$L=this.locale(V).$L),Z&&C!=this.format(z)&&(this.$d=new Date("")),c={}}else if(z instanceof Array)for(var q=z.length,J=1;J<=q;J+=1){x[1]=z[J-1];var te=j.apply(this,x);if(te.isValid()){this.$d=te.$d,this.$L=te.$L,this.init();break}J===q&&(this.$d=new Date(""))}else G.call(this,I)}}})}(Bs)),Bs.exports}var aA=rA();const iA=n_(aA);cr.extend(iA);Ln(na);const lA=e=>{const i=e.aktiveNaturalytelser.reduce((a,l)=>{const o=l.type;return o in a?{...a,[o]:[...a[o],l]}:{...a,[o]:[l]}},{}),r={};return Object.entries(i).forEach(([a,l])=>{const o=l.sort((d,m)=>HE({fom:d.periode.fomDato,tom:d.periode.tomDato},{fom:m.periode.fomDato,tom:m.periode.tomDato})).reverse();r[a]=o.flatMap((d,m,c)=>{const v=c[m+1],h=d.periode.tomDato,y=v?.periode.fomDato;return h===$r?[]:[{...d,periode:{fomDato:Sd(h,1),tomDato:y?Sd(y,-1):$r}}]})}),r},Qg=({inntektsmelding:e,alleKodeverk:i})=>{const r=ft(),a=lA(e);return D.jsx(Jn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?D.jsx("span",{children:D.jsx(Se,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):D.jsx(ki,{gap:"space-4",children:Object.entries(a).map(([l,o])=>D.jsxs("div",{children:[D.jsx("span",{children:i.NaturalYtelseType.find(d=>d.kode===l)?.navn}),D.jsx("ul",{children:o.map(d=>D.jsxs(U.Fragment,{children:[D.jsxs("li",{children:[D.jsx(Se,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",D.jsx(Wr,{dateString:d.periode.fomDato})]}),d.periode.tomDato!==$r&&D.jsxs("li",{children:[D.jsx(Se,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",D.jsx(Wr,{dateString:d.periode.tomDato})]}),D.jsxs("li",{children:[D.jsx(Se,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",D.jsx(sr,{beløp:d.beloepPerMnd.verdi})]})]},d.indexKey))})]},l))})})};Qg.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const ec=({kildeSystem:e})=>{const i=ft();return D.jsx(Jn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:sA(e,i)})},sA=(e,i)=>{switch(e.toUpperCase()){case"NAV_NO":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}};ec.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const nc=({inntektsmelding:e})=>{const i=ft();return D.jsxs(Jn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[D.jsxs("span",{children:[D.jsx(Se,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),D.jsxs("span",{children:[D.jsx(Se,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};nc.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const tc=({inntektsmelding:e,fagsak:i,arbeidsgiverOpplysninger:r})=>{const a=`IM ${r.navn} - ${Ym(e.motattDato)}`;return D.jsx(Gs,{type:"button",onClick:()=>{Jy(i.saksnummer,e.journalpostId,e.dokumentId,a)},variant:"secondary",size:"small",icon:D.jsx(db,{}),children:D.jsx(Se,{id:"InntektsmeldingFaktaPanel.modal.trigger"})})};tc.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  kjønn: 'K' | 'M' | '-';
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: 'NB' | 'NN' | 'EN' | '-';
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"annenPart",value:{name:"union",raw:"Person | null",elements:[{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: 'K' | 'M' | '-';
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: 'NB' | 'NN' | 'EN' | '-';
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
  type: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';
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
  definisjon:
    | '5001'
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
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
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
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
| (ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]},description:""}}};const rc=({inntektsmelding:e})=>{const i=ft();if(e.refusjonsperioder.length===0)return D.jsx(Jn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:e.refusjonPrMnd?D.jsx(sr,{beløp:e.refusjonPrMnd}):D.jsx(Se,{tagName:"span",id:"InntektsmeldingFaktaPanel.refusjon.ingen"})});const r=[...e.refusjonsperioder].sort((a,l)=>new Date(a.fom).getTime()-new Date(l.fom).getTime());return D.jsxs(Jn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:[D.jsx("span",{children:"Krever refusjon"}),D.jsx(sr,{beløp:e.refusjonPrMnd??0}),D.jsx("span",{children:"Endringer i perioden:"}),D.jsx("ul",{children:r.map(a=>D.jsx("li",{children:D.jsx(Se,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:D.jsx(sr,{beløp:a.refusjonsbeløp.verdi}),fom:D.jsx(Wr,{dateString:a.fom})}})},a.indexKey))})]})};rc.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const ac=({startDatoPermisjon:e,ytelse:i})=>{const r=ft();return e?D.jsxs(Jn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:i.toLowerCase()}),children:[D.jsx("span",{children:e?D.jsx(Wr,{dateString:e}):"-"}),D.jsx("span",{children:D.jsx(Se,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};ac.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const oA="_behandlingCircleIngen_x70wg_1",uA="_behandlingCircleDenne_x70wg_5",dA="_behandlingCircleAndre_x70wg_9",mA="_container_x70wg_13",gA="_ingenInntektsmeldinger_x70wg_20",Ur={behandlingCircleIngen:oA,behandlingCircleDenne:uA,behandlingCircleAndre:dA,container:mA,ingenInntektsmeldinger:gA},ic=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:i,alleBehandlinger:r})=>{const{alleKodeverk:a,fagsak:l,behandling:o}=Wm(),d=ft();return D.jsxs(ki,{gap:"space-16",className:Ur.container,children:[D.jsxs(lr,{gap:"space-16",justify:"space-between",align:"start",children:[D.jsxs(Xm,{level:"3",size:"small",children:[D.jsx(Se,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",D.jsx(ui,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),D.jsx(tc,{fagsak:l,inntektsmelding:e,arbeidsgiverOpplysninger:i[e.arbeidsgiverIdent]})]}),D.jsxs(M5,{columns:3,gap:"space-32",children:[D.jsx(wg,{arbeidsgiverOpplysninger:i[e.arbeidsgiverIdent],arbeidsgiverIdent:e.arbeidsgiverIdent}),D.jsx(Jn,{tittel:d.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:D.jsx(sr,{beløp:e.inntektPrMnd})}),D.jsx(Ng,{alleKodeverk:a,inntektsmelding:e,alleBehandlinger:r,behandling:o}),D.jsx(nc,{inntektsmelding:e}),D.jsx(ac,{ytelse:a.FagsakYtelseType.find(m=>m.kode===l.fagsakYtelseType)?.navn??"",startDatoPermisjon:e.startDatoPermisjon}),D.jsx(ec,{kildeSystem:e.kildeSystem}),D.jsx(Qg,{inntektsmelding:e,alleKodeverk:a}),D.jsx(rc,{inntektsmelding:e})]})]})};ic.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  type: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';
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
  definisjon:
    | '5001'
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
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
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
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const cA={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},Cm=Ln(cA),Fs=({arbeidsgiverOpplysningerPerId:e,alleBehandlinger:i,inntektsmeldinger:r})=>{const{behandling:a}=Wm(),[l,o]=w.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),d=v=>{o(l&&v===l.orderBy&&l.direction==="descending"?void 0:{orderBy:v,direction:l&&v===l.orderBy&&l.direction==="ascending"?"descending":"ascending"})},m=l?fA({inntektsmeldinger:r,arbeidsgiverOpplysningerPerId:e,sortKey:l.orderBy,behandling:a}):r,c=l?.direction==="ascending"?m:m.toReversed();return c.length===0?D.jsx(Pd,{value:Cm,children:D.jsxs(lr,{gap:"space-8",justify:"center",align:"center",className:Ur.ingenInntektsmeldinger,children:[D.jsx(di,{children:D.jsx(Se,{id:"InntektsmeldingFaktaPanel.ingen"})}),D.jsx(pb,{})]})}):D.jsx(Pd,{value:Cm,children:D.jsxs(Ve,{sort:l,onSortChange:v=>d(v),children:[D.jsx(Ve.Header,{children:D.jsxs(Ve.Row,{children:[D.jsx(Ve.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:D.jsx(Se,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),D.jsx(Ve.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:D.jsx(Se,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),D.jsx(Ve.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:D.jsx(Se,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),D.jsx(Ve.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:D.jsx(Se,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),D.jsx(Ve.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:D.jsx(Se,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),D.jsx(Ve.HeaderCell,{})]})}),D.jsx(Ve.Body,{children:c.map(v=>D.jsxs(Ve.ExpandableRow,{expandOnRowClick:!0,contentGutter:"none",togglePlacement:"right",content:D.jsx(ic,{alleBehandlinger:i,arbeidsgiverOpplysningerPerId:e,inntektsmelding:v}),children:[D.jsx(Ve.DataCell,{children:D.jsx(ui,{dateTimeString:v.innsendingstidspunkt,separator:"kl"})}),D.jsx(Ve.DataCell,{children:e[v.arbeidsgiverIdent]?.navn??"-"}),D.jsx(Ve.DataCell,{children:v.startDatoPermisjon?D.jsx(Wr,{dateString:v.startDatoPermisjon}):"-"}),D.jsx(Ve.DataCell,{children:D.jsx(sr,{beløp:v.inntektPrMnd})}),D.jsx(Ve.DataCell,{children:D.jsx(vA,{behandling:a,inntektsmelding:v})})]},`${v.journalpostId}-${v.internArbeidsforholdId}`))})]})})},fA=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:i,sortKey:r,behandling:a})=>r==="arbeidsgiverIdent"?e.slice().sort((l,o)=>{const d=i[l.arbeidsgiverIdent]?.navn,m=i[o.arbeidsgiverIdent]?.navn;return os(d,m)}):r==="tilknyttedeBehandlingIder"?e.slice().sort((l,o)=>{const d=xs({behandling:a,inntektsmelding:l}),m=xs({behandling:a,inntektsmelding:o});return os(d,m)}):e.slice().sort((l,o)=>{const d=l[r],m=o[r];return os(d,m)}),os=(e,i)=>e===void 0?-1:i===void 0?1:e<i?-1:e>i?1:0,vA=({behandling:e,inntektsmelding:i})=>{const r=xs({behandling:e,inntektsmelding:i});return r==="DENNE"?D.jsxs(lr,{gap:"space-4",align:"center",children:[D.jsx(Gl,{className:Ur.behandlingCircleDenne}),D.jsx(Se,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):r==="ANDRE"?D.jsxs(lr,{gap:"space-4",align:"center",children:[D.jsx(Gl,{className:Ur.behandlingCircleAndre}),D.jsx(Se,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):D.jsxs(lr,{gap:"space-4",align:"center",children:[D.jsx(Gl,{className:Ur.behandlingCircleIngen}),D.jsx(Se,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},xs=({behandling:e,inntektsmelding:i})=>i.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":i.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";Fs.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  type: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';
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
  definisjon:
    | '5001'
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
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
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
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const us={innsendingstidspunkt:"2024-08-08T00:00:00",kildeSystem:"Altinn",aktiveNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",arbeidsgiverIdent:"1",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},EA={title:"fakta/fakta-inntektsmelding",component:Fs,decorators:[$y],render:e=>D.jsx(Fs,{...e})},Hr={args:{alleBehandlinger:[{uuid:"UUID1",type:"BT-002",opprettet:"2024-07-13",avsluttet:"2024-08-13"},{uuid:"UUID2",type:"BT-003",opprettet:"2024-07-14",avsluttet:"2024-08-14"},{uuid:"UUID3",type:"BT-004",opprettet:"2024-07-15",avsluttet:"2024-08-15"}],arbeidsgiverOpplysningerPerId:{1:{navn:"Rema 1000"},2:{navn:"Kiwi"},3:{navn:"Meny"}},behandling:{uuid:"UUID2"},inntektsmeldinger:[{...us,tilknyttedeBehandlingIder:["UUID1"],inntektPrMnd:10000.5,innsendingstidspunkt:"2024-07-20T00:00:00",startDatoPermisjon:"2024-10-10",refusjonPrMnd:void 0,journalpostId:"1",refusjonsperioder:[{refusjonsbeløp:{verdi:5e3},indexKey:"1",fom:"2024-01-10"},{refusjonsbeløp:{verdi:3e3},indexKey:"2",fom:"2024-01-09"}]},{...us,tilknyttedeBehandlingIder:["UUID1","UUID2"],inntektPrMnd:2e4,innsendingstidspunkt:"2024-08-01T00:00:00",kildeSystem:"FS22",refusjonPrMnd:void 0,arbeidsgiverIdent:"2",journalpostId:"2"},{...us,tilknyttedeBehandlingIder:[],inntektPrMnd:3e4,innsendingstidspunkt:"2024-09-10T00:00:00",innsendingsårsak:"ENDRING",kildeSystem:"NAV_NO",startDatoPermisjon:"2024-11-11",arbeidsgiverIdent:"3",journalpostId:"3",aktiveNaturalytelser:[{periode:{fomDato:"2024-01-09",tomDato:"2024-10-09"},type:ds.ELEKTRISK_KOMMUNIKASJON,beloepPerMnd:{verdi:999},indexKey:"1"},{periode:{fomDato:"2024-01-11",tomDato:"2024-10-11"},type:ds.LOSJI,beloepPerMnd:{verdi:10},indexKey:"2"}]}]}},Qa={args:{...Hr.args,inntektsmeldinger:[]}};Hr.parameters={...Hr.parameters,docs:{...Hr.parameters?.docs,source:{originalSource:`{
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
}`,...Qa.parameters?.docs?.source}}};const _A=["InntektsmeldingDefault","IngenInntektsmeldinger"];export{Qa as IngenInntektsmeldinger,Hr as InntektsmeldingDefault,_A as __namedExportsOrder,EA as default};
