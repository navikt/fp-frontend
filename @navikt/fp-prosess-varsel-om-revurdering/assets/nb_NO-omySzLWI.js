import{r as i,f as $e,_ as le,D as ie,b as Ve,a as b,s as p,d as xe,S as Se,G as A,W as He,k as W,j as g,B as de}from"./iframe-BZLjb3Ac.js";function ze(e,a){var t=e.values,n=le(e,["values"]),r=a.values,s=le(a,["values"]);return ie(r,t)&&ie(n,s)}function Pe(e){var a=$e(),t=a.formatMessage,n=a.textComponent,r=n===void 0?i.Fragment:n,s=e.id,o=e.description,l=e.defaultMessage,u=e.values,d=e.children,c=e.tagName,m=c===void 0?r:c,f=e.ignoreTag,k={id:s,description:o,defaultMessage:l},y=t(k,u,{ignoreTag:f});return typeof d=="function"?d(Array.isArray(y)?y:[y]):m?i.createElement(m,null,y):i.createElement(i.Fragment,null,y)}Pe.displayName="FormattedMessage";var x=i.memo(Pe,ze);x.displayName="MemoizedFormattedMessage";const M=e=>Ve({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Le=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Ue=i.forwardRef((e,a)=>{var{className:t,size:n="medium",as:r="p",spacing:s,truncate:o,weight:l="regular",align:u,visuallyHidden:d,textColor:c}=e,m=Le(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:f}=b();return p.createElement(r,Object.assign({},m,{ref:a,className:f(t,"navds-body-long",`navds-body-long--${n}`,M({spacing:s,truncate:o,weight:l,align:u,visuallyHidden:d,textColor:c}))}))});var Ke=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const T=i.forwardRef((e,a)=>{var{className:t,size:n="medium",as:r="p",spacing:s,truncate:o,weight:l="regular",align:u,visuallyHidden:d,textColor:c}=e,m=Ke(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:f}=b();return p.createElement(r,Object.assign({},m,{ref:a,className:f(t,"navds-body-short",`navds-body-short--${n}`,M({spacing:s,truncate:o,weight:l,align:u,visuallyHidden:d,textColor:c}))}))});var We=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const pt=i.forwardRef((e,a)=>{var{className:t,size:n="medium",spacing:r,uppercase:s,as:o="p",truncate:l,weight:u="regular",align:d,visuallyHidden:c,textColor:m}=e,f=We(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:k}=b();return p.createElement(o,Object.assign({},f,{ref:a,className:k(t,"navds-detail",M({spacing:r,truncate:l,weight:u,align:d,visuallyHidden:c,textColor:m,uppercase:s}),{"navds-detail--small":n==="small"})}))});var Ge=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const ft=i.forwardRef((e,a)=>{var{children:t,className:n,size:r,spacing:s,as:o="p",showIcon:l=!1}=e,u=Ge(e,["children","className","size","spacing","as","showIcon"]);const{cn:d}=b();return p.createElement(o,Object.assign({},u,{ref:a,className:d("navds-error-message","navds-label",n,M({spacing:s}),{"navds-label--small":r==="small","navds-error-message--show-icon":l})}),l&&p.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var Xe=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const te=i.forwardRef((e,a)=>{var{level:t="1",size:n,className:r,as:s,spacing:o,align:l,visuallyHidden:u,textColor:d}=e,c=Xe(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:m}=b(),f=s??`h${t}`;return p.createElement(f,Object.assign({},c,{ref:a,className:m(r,"navds-heading",`navds-heading--${n}`,M({spacing:o,align:l,visuallyHidden:u,textColor:d}))}))});var Ye=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};i.forwardRef((e,a)=>{var{className:t,spacing:n,as:r="p"}=e,s=Ye(e,["className","spacing","as"]);const{cn:o}=b();return p.createElement(r,Object.assign({},s,{ref:a,className:o(t,"navds-ingress",{"navds-typo--spacing":!!n})}))});var Je=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const B=i.forwardRef((e,a)=>{var{className:t,size:n="medium",as:r="label",spacing:s,visuallyHidden:o,textColor:l}=e,u=Je(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:d}=b();return p.createElement(r,Object.assign({},u,{ref:a,className:d(t,"navds-label",M({spacing:s,visuallyHidden:o,textColor:l}),{"navds-label--small":n==="small"})}))});function ae(e,a){const t=Object.entries(e).filter(([n])=>!a.includes(n));return Object.fromEntries(t)}let ue=0;function Ze(e){const[a,t]=i.useState(e),n=e||a;return i.useEffect(()=>{a==null&&(ue+=1,t(`aksel-id-${ue}`))},[a]),n}const ge=p.useId;function _e(e){var a;if(ge!==void 0){const t=ge();return e??t.replace(/(:)/g,"")}return(a=Ze(e))!==null&&a!==void 0?a:""}function me(e,a=[]){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},a)}function Qe({value:e,defaultValue:a,onChange:t}){const n=me(t),[r,s]=i.useState(a),o=e!==void 0,l=o?e:r,u=me(d=>{const m=typeof d=="function"?d(l):d;o||s(m),n(m)},[o,n,l]);return[l,u]}let ce=0;function en(e){const[a,t]=i.useState(e),n=e||a;return i.useEffect(()=>{a==null&&(ce+=1,t(`aksel-icon-${ce}`))},[a]),n}const pe=p.useId;function R(e){var a;return pe!==void 0?pe().replace(/(:)/g,""):(a=en(e))!==null&&a!==void 0?a:""}var nn=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const rn=i.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=nn(e,["title","titleId"]);let s=R();return s=t?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},r),t?i.createElement("title",{id:s},t):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var tn=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const an=i.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=tn(e,["title","titleId"]);let s=R();return s=t?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},r),t?i.createElement("title",{id:s},t):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var sn=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const on=i.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=sn(e,["title","titleId"]);let s=R();return s=t?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},r),t?i.createElement("title",{id:s},t):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var ln=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const dn=i.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=ln(e,["title","titleId"]);let s=R();return s=t?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},r),t?i.createElement("title",{id:s},t):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var un=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const gn=i.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=un(e,["title","titleId"]);let s=R();return s=t?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},r),t?i.createElement("title",{id:s},t):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var mn=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const cn=i.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=mn(e,["title","titleId"]);let s=R();return s=t?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},r),t?i.createElement("title",{id:s},t):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var pn=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const fn=i.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=pn(e,["title","titleId"]);let s=R();return s=t?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},r),t?i.createElement("title",{id:s},t):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var vn=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const kn=i.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=vn(e,["title","titleId"]);let s=R();return s=t?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},r),t?i.createElement("title",{id:s},t):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var yn=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const bn=i.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=yn(e,["title","titleId"]);let s=R();return s=t?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},r),t?i.createElement("title",{id:s},t):null,i.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var hn=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const wn=i.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=hn(e,["title","titleId"]);let s=R();return s=t?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},r),t?i.createElement("title",{id:s},t):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function qe(e,a,{checkForDefaultPrevented:t=!0}={}){return function(r){if(e?.(r),t===!1||!r.defaultPrevented)return a?.(r)}}function ee(e){return(a={})=>{const t=a.width?String(a.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function z(e){return(a,t)=>{const n=t?.context?String(t.context):"standalone";let r;if(n==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,l=t?.width?String(t.width):o;r=e.formattingValues[l]||e.formattingValues[o]}else{const o=e.defaultWidth,l=t?.width?String(t.width):e.defaultWidth;r=e.values[l]||e.values[o]}const s=e.argumentCallback?e.argumentCallback(a):a;return r[s]}}function L(e){return(a,t={})=>{const n=t.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],s=a.match(r);if(!s)return null;const o=s[0],l=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(l)?jn(l,m=>m.test(o)):On(l,m=>m.test(o));let d;d=e.valueCallback?e.valueCallback(u):u,d=t.valueCallback?t.valueCallback(d):d;const c=a.slice(o.length);return{value:d,rest:c}}}function On(e,a){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&a(e[t]))return t}function jn(e,a){for(let t=0;t<e.length;t++)if(a(e[t]))return t}function xn(e){return(a,t={})=>{const n=a.match(e.matchPattern);if(!n)return null;const r=n[0],s=a.match(e.parsePattern);if(!s)return null;let o=e.valueCallback?e.valueCallback(s[0]):s[0];o=t.valueCallback?t.valueCallback(o):o;const l=a.slice(r.length);return{value:o,rest:l}}}const Sn={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Pn=(e,a,t)=>{let n;const r=Sn[e];return typeof r=="string"?n=r:a===1?n=r.one:n=r.other.replace("{{count}}",String(a)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+n:n+" siden":n},_n={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},qn={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Fn={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Tn={date:ee({formats:_n,defaultWidth:"full"}),time:ee({formats:qn,defaultWidth:"full"}),dateTime:ee({formats:Fn,defaultWidth:"full"})},Rn={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Nn=(e,a,t,n)=>Rn[e],En={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Dn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},In={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Cn={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},An={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Bn=(e,a)=>Number(e)+".",Mn={ordinalNumber:Bn,era:z({values:En,defaultWidth:"wide"}),quarter:z({values:Dn,defaultWidth:"wide",argumentCallback:e=>e-1}),month:z({values:In,defaultWidth:"wide"}),day:z({values:Cn,defaultWidth:"wide"}),dayPeriod:z({values:An,defaultWidth:"wide"})},$n=/^(\d+)\.?/i,Vn=/\d+/i,Hn={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},zn={any:[/^f/i,/^e/i]},Ln={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Un={any:[/1/i,/2/i,/3/i,/4/i]},Kn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Wn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Gn={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Xn={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Yn={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Jn={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Zn={ordinalNumber:xn({matchPattern:$n,parsePattern:Vn,valueCallback:e=>parseInt(e,10)}),era:L({matchPatterns:Hn,defaultMatchWidth:"wide",parsePatterns:zn,defaultParseWidth:"any"}),quarter:L({matchPatterns:Ln,defaultMatchWidth:"wide",parsePatterns:Un,defaultParseWidth:"any",valueCallback:e=>e+1}),month:L({matchPatterns:Kn,defaultMatchWidth:"wide",parsePatterns:Wn,defaultParseWidth:"any"}),day:L({matchPatterns:Gn,defaultMatchWidth:"wide",parsePatterns:Xn,defaultParseWidth:"any"}),dayPeriod:L({matchPatterns:Yn,defaultMatchWidth:"any",parsePatterns:Jn,defaultParseWidth:"any"})},Qn={code:"nb",formatDistance:Pn,formatLong:Tn,formatRelative:Nn,localize:Mn,match:Zn,options:{weekStartsOn:1,firstWeekContainsDate:4}},er={global:{dateLocale:Qn,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},nr=i.createContext({locale:er}),Fe=()=>i.useContext(nr),fe=/(\w+)/g;function rr(e,a){const t=Array.isArray(e)?e:tr(e);for(const n of a){if(!n)continue;let r=n;for(let s=0;s<t.length;s++){const o=r[t[s]];o!==void 0&&(r=o)}if(typeof r=="string")return r}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function tr(e){const a=[];let t=fe.exec(e);for(;t;){const[,n,r]=t;a.push(n||r),t=fe.exec(e)}return a}const ar=/{[^}]*}/g;function se(e,...a){const t=Fe(),n=t.translations||[],r=[...a,...Array.isArray(n)?n.map(o=>o[e]):[n[e]],t.locale[e]];return(o,l)=>{const u=rr(o,r);return l?u.replace(ar,d=>{const c=d.substring(1,d.length-1);if(l[c]===void 0){const m=JSON.stringify(l);throw new Error(`Error translating key '${o}'. No replacement syntax ({}) found for key '${c}'. The following replacements were passed: '${m}'`)}return l[c]}):u}}function vt(){const e=Fe(),a=e.translations||[],t=Array.isArray(a)?a.map(n=>n.global):[a.global];t.push(e.locale.global);for(const n of t)if(n?.dateLocale)return n.dateLocale;throw new Error("dateLocale not found.")}var sr=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const or=i.forwardRef((e,a)=>{var{className:t,size:n="medium",title:r,transparent:s=!1,variant:o="neutral",id:l,"data-color":u}=e,d=sr(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:c}=b(),m=_e(),f=se("Loader");return p.createElement("svg",Object.assign({"aria-labelledby":l??`loader-${m}`,ref:a,className:c("navds-loader",t,`navds-loader--${n}`,`navds-loader--${o}`,{"navds-loader--transparent":s}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":u??lr(o)},ae(d,["children"]),{"data-variant":o}),p.createElement("title",{id:l??`loader-${m}`},r||f("title")),p.createElement("circle",{className:c("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),p.createElement("circle",{className:c("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function lr(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var ir=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const dr=i.forwardRef((e,a)=>{var{as:t="button",variant:n="primary",className:r,children:s,size:o="medium",loading:l=!1,disabled:u,icon:d,iconPosition:c="left",onKeyUp:m,"data-color":f}=e,k=ir(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:y}=b(),h=u||l?ae(k,["href"]):k,O=S=>{S.key===" "&&!u&&!l&&S.currentTarget.click()};return p.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},{"data-color":f??ur(n),"data-variant":gr(n)},h,{ref:a,onKeyUp:qe(m,O),className:y(r,"navds-button",`navds-button--${n}`,`navds-button--${o}`,{"navds-button--loading":l,"navds-button--icon-only":!!d&&!s,"navds-button--disabled":u??l}),disabled:u??l?!0:void 0}),d&&c==="left"&&p.createElement("span",{className:y("navds-button__icon")},d),l&&p.createElement(or,{size:o}),s&&p.createElement(B,{as:"span",size:o==="medium"?"medium":"small"},s),d&&c==="right"&&p.createElement("span",{className:y("navds-button__icon")},d))});function ur(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function gr(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var mr=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const cr={error:wn,warning:dn,info:gn,success:an},pr=i.forwardRef((e,a)=>{var{children:t,className:n,variant:r,size:s="medium",fullWidth:o=!1,contentMaxWidth:l=!0,inline:u=!1,closeButton:d=!1,onClose:c}=e,m=mr(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:f}=b(),k=se("Alert"),y=cr[r];return p.createElement("div",Object.assign({},m,{"data-color":fr(r),"data-variant":r,ref:a,className:f(n,"navds-alert",`navds-alert--${r}`,`navds-alert--${s}`,{"navds-alert--full-width":o,"navds-alert--inline":u,"navds-alert--close-button":d})}),p.createElement(y,{title:k(r),className:f("navds-alert__icon")}),p.createElement(Ue,{as:"div",size:s,className:f("navds-alert__wrapper",l&&"navds-alert__wrapper--maxwidth")},t),d&&!u&&p.createElement("div",{className:f("navds-alert__button-wrapper")},p.createElement(dr,{className:f("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:c,type:"button",icon:p.createElement(bn,{title:["error","warning"].includes(r)?k("closeAlert"):k("closeMessage")})})))});function fr(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function w(e,a,t,n){return n?typeof n=="string"?{[`--__${e}c-${a}-${t}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([r,s])=>[`--__${e}c-${a}-${t}-${r}`,s])):{}}const vr={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},ve=(e,a,t,n,r,s)=>a.split(" ").map((o,l,u)=>{var d;if(e==="margin-inline"&&o==="full")return`calc((100vw - ${100/u.length}%)/-2)`;if(e==="padding-inline"&&o==="full")return`calc((100vw - ${100/u.length}%)/2)`;if(["mi","mb"].includes(e)&&o==="auto")return"auto";let c=`var(--${s}-${t}-${o})`;if(n.includes(o))c=o==="px"?"1px":o;else if(o.startsWith("space"))c=`var(--${s}-${o})`;else{const m=`--${s}-spacing-${o}`;c=`var(${(d=vr[m])!==null&&d!==void 0?d:m})`}return r?o==="0"?"0":`calc(-1 * ${c})`:c}).join(" ");function _(e,a,t,n,r,s=!1,o=[]){if(!r)return{};if(typeof r=="string")return{[`--__${e}c-${a}-${t}-xs`]:ve(t,r,n,o,s,e)};const l={};return Object.entries(r).forEach(([u,d])=>{l[`--__${e}c-${a}-${t}-${u}`]=ve(t,d,n,o,s,e)}),l}const kr=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],yr=({children:e,className:a,padding:t,paddingInline:n,paddingBlock:r,margin:s,marginInline:o,marginBlock:l,width:u,minWidth:d,maxWidth:c,height:m,minHeight:f,maxHeight:k,position:y,inset:h,top:O,right:S,left:C,bottom:N,overflow:I,overflowX:E,overflowY:P,flexBasis:$,flexGrow:X,flexShrink:V,gridColumn:H})=>{const q=xe(!1),{cn:D}=b(),v=q?"ax":"a",Y=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},_(v,"r","p","spacing",t)),_(v,"r","pi","spacing",n)),_(v,"r","pb","spacing",r)),_(v,"r","m","spacing",s)),_(v,"r","mi","spacing",o)),_(v,"r","mb","spacing",l)),w(v,"r","w",u)),w(v,"r","minw",d)),w(v,"r","maxw",c)),w(v,"r","h",m)),w(v,"r","minh",f)),w(v,"r","maxh",k)),w(v,"r","position",y)),_(v,"r","inset","spacing",h)),_(v,"r","top","spacing",O)),_(v,"r","right","spacing",S)),_(v,"r","bottom","spacing",N)),_(v,"r","left","spacing",C)),w(v,"r","overflow",I)),w(v,"r","overflowx",E)),w(v,"r","overflowy",P)),w(v,"r","flex-basis",$)),w(v,"r","flex-grow",X)),w(v,"r","flex-shrink",V)),w(v,"r","grid-column",H));return p.createElement(Se,{className:D({className:a,"navds-r-p":t,"navds-r-pi":n,"navds-r-pb":r,"navds-r-m":s,"navds-r-mi":o,"navds-r-mb":l,"navds-r-w":u,"navds-r-minw":d,"navds-r-maxw":c,"navds-r-h":m,"navds-r-minh":f,"navds-r-maxh":k,"navds-r-position":y,"navds-r-inset":h,"navds-r-top":O,"navds-r-right":S,"navds-r-bottom":N,"navds-r-left":C,"navds-r-overflow":I,"navds-r-overflowx":E,"navds-r-overflowy":P,"navds-r-flex-basis":$,"navds-r-flex-grow":X,"navds-r-flex-shrink":V,"navds-r-grid-column":H}),style:Y},e)};var br=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Te=i.forwardRef((e,a)=>{var{children:t,className:n,as:r="div",align:s,justify:o,wrap:l=!0,gap:u,style:d,direction:c="row",asChild:m}=e,f=br(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const y=xe(!1)?"ax":"a",{cn:h}=b(),O=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),_(y,"stack","gap","spacing",u)),w(y,"stack","direction",c)),w(y,"stack","align",s)),w(y,"stack","justify",o)),S=m?Se:r;return p.createElement(yr,Object.assign({},f),p.createElement(S,Object.assign({},ae(f,kr),{ref:a,style:O,className:h("navds-stack",n,{"navds-vstack":c==="column","navds-hstack":c==="row","navds-stack-gap":u,"navds-stack-align":s,"navds-stack-justify":o,"navds-stack-direction":c,"navds-stack-wrap":l})}),t))});var hr=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const K=i.forwardRef((e,a)=>{var{as:t="div"}=e,n=hr(e,["as"]);return p.createElement(Te,Object.assign({as:t},n,{ref:a,direction:"row"}))});var wr=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Z=i.forwardRef((e,a)=>{var{as:t="div"}=e,n=wr(e,["as"]);return p.createElement(Te,Object.assign({as:t},n,{ref:a,direction:"column",wrap:!1}))});var Or=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const jr=i.forwardRef((e,a)=>{var{className:t}=e,n=Or(e,["className"]);const{cn:r}=b();return p.createElement("tbody",Object.assign({},n,{ref:a,className:r("navds-table__body",t)}))});var xr=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Re=i.forwardRef((e,a)=>{var{className:t,children:n,align:r,textSize:s}=e,o=xr(e,["className","children","align","textSize"]);const{cn:l}=b();return p.createElement("th",Object.assign({ref:a,className:l("navds-table__header-cell","navds-label",t,{[`navds-table__header-cell--align-${r}`]:r,"navds-label--small":s==="small"})},o),n)}),Ne=i.createContext(null);var Sr=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Pr=i.forwardRef((e,a)=>{var t,n,r,s,{className:o,children:l,sortable:u=!1,sortKey:d}=e,c=Sr(e,["className","children","sortable","sortKey"]);const m=i.useContext(Ne),{cn:f}=b();return u&&!d&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),p.createElement(Re,Object.assign({scope:"col",ref:a,className:f(o),"aria-sort":u?((t=m?.sort)===null||t===void 0?void 0:t.orderBy)===d?(n=m?.sort)===null||n===void 0?void 0:n.direction:"none":void 0},c),u?p.createElement("button",{type:"button",className:f("navds-table__sort-button"),onClick:u&&d?()=>{var k;return(k=m?.onSortChange)===null||k===void 0?void 0:k.call(m,d)}:void 0},l,((r=m?.sort)===null||r===void 0?void 0:r.orderBy)===d?((s=m?.sort)===null||s===void 0?void 0:s.direction)==="descending"?p.createElement(fn,{"aria-hidden":!0}):p.createElement(kn,{"aria-hidden":!0}):p.createElement(rn,{"aria-hidden":!0})):l)});var _r=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Ee=i.forwardRef((e,a)=>{var{className:t,children:n="",align:r,textSize:s}=e,o=_r(e,["className","children","align","textSize"]);const{cn:l}=b();return p.createElement(T,Object.assign({as:"td",ref:a,className:l("navds-table__data-cell",t,{[`navds-table__data-cell--align-${r}`]:r}),size:s},o),n)});var qr=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Fr=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function Tr(e){const a=parseFloat(e);return!Number.isNaN(a)&&Number.isFinite(a)}function ke(e){return typeof e=="string"&&e[e.length-1]==="%"&&Tr(e.substring(0,e.length-1))}function ne(e,a){a===0&&e?.style&&(e.style.display="none")}function Rr(e,a){a===0&&e?.style&&(e.style.display="")}const Nr=e=>{var{children:a,className:t,innerClassName:n,duration:r=250,easing:s="ease",height:o}=e,l=qr(e,["children","className","innerClassName","duration","easing","height"]);const{cn:u}=b(),d=i.useRef(o),c=i.useRef(null),m=i.useRef(),f=i.useRef(),k=i.useRef(o),y=i.useRef("visible"),h=Fr?0:r;typeof k.current=="number"?(typeof o!="string"&&(k.current=o<0?0:o),y.current="hidden"):ke(k.current)&&(k.current=o==="0%"?0:o,y.current="hidden");const[O,S]=i.useState(k.current),[C,N]=i.useState(y.current),[I,E]=i.useState(!1);i.useEffect(()=>{ne(c.current,k.current)},[]),i.useEffect(()=>{if(o!==d.current&&c.current){Rr(c.current,d.current),c.current.style.overflow="hidden";const V=c.current.offsetHeight;c.current.style.overflow="";const H=h;let q,D,v="hidden",Y;const Q=d.current==="auto";typeof o=="number"?(q=o<0?0:o,D=q):ke(o)?(q=o==="0%"?0:o,D=q):(q=V,D="auto",v=void 0),Q&&(D=q,q=V),S(q),N("hidden"),E(!Q),clearTimeout(f.current),clearTimeout(m.current),Q?(Y=!0,f.current=setTimeout(()=>{S(D),N(v),E(Y)},50),m.current=setTimeout(()=>{E(!1),ne(c.current,D)},H)):f.current=setTimeout(()=>{S(D),N(v),E(!1),o!=="auto"&&ne(c.current,q)},H)}return d.current=o,()=>{clearTimeout(f.current),clearTimeout(m.current)}},[o]);const P={height:O,overflow:C};I&&(P.transition=`height ${h}ms ${s} 0ms`,P.WebkitTransition=P.transition);const X=typeof l["aria-hidden"]<"u"?l["aria-hidden"]:o===0;return p.createElement("div",Object.assign({},l,{className:u(t),style:P}),p.createElement("div",{"aria-hidden":X,className:u(n),ref:c},a))};var Er=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const De=i.forwardRef((e,a)=>{var{className:t,selected:n=!1,shadeOnHover:r=!0}=e,s=Er(e,["className","selected","shadeOnHover"]);const{cn:o}=b();return p.createElement("tr",Object.assign({},s,{ref:a,className:o("navds-table__row",t,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":r})}))});var Dr=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Ir=i.forwardRef((e,a)=>{var{className:t,children:n,content:r,togglePlacement:s="left",defaultOpen:o=!1,open:l,onOpenChange:u,expansionDisabled:d=!1,expandOnRowClick:c=!1,colSpan:m=999,contentGutter:f,onClick:k}=e,y=Dr(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:h}=b(),[O,S]=Qe({defaultValue:o,value:l,onChange:u}),C=se("global"),N=_e(),I=P=>{S($=>!$),P.stopPropagation()},E=P=>{c&&!d&&!Ie(P.target)&&I(P)};return p.createElement(p.Fragment,null,p.createElement(De,Object.assign({},y,{ref:a,className:h("navds-table__expandable-row",t,{"navds-table__expandable-row--open":O,"navds-table__expandable-row--expansion-disabled":d,"navds-table__expandable-row--clickable":c}),onClick:qe(k,E)}),s==="right"&&n,p.createElement(Ee,{className:h("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":O}),onClick:d?()=>null:I},!d&&p.createElement("button",{className:h("navds-table__toggle-expand-button"),type:"button","aria-controls":N,"aria-expanded":O,onClick:I},p.createElement(on,{className:h("navds-table__expandable-icon"),title:C(O?"showLess":"showMore")}))),s==="left"&&n),p.createElement("tr",{"data-state":O?"open":"closed",className:h("navds-table__expanded-row"),"aria-hidden":!O,id:N},p.createElement("td",{colSpan:m,className:h("navds-table__expanded-row-cell")},p.createElement(Nr,{className:h("navds-table__expanded-row-collapse"),innerClassName:h(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${f??s}`),height:O?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},r))))});function Ie(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:Ie(e.parentElement)}var Cr=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Ar=i.forwardRef((e,a)=>{var{className:t}=e,n=Cr(e,["className"]);const{cn:r}=b();return p.createElement("thead",Object.assign({},n,{ref:a,className:r("navds-table__header",t)}))});var Br=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const j=i.forwardRef((e,a)=>{var{className:t,zebraStripes:n=!1,size:r="medium",onSortChange:s,sort:o,stickyHeader:l=!1}=e,u=Br(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:d}=b();return p.createElement(Ne.Provider,{value:{onSortChange:s,sort:o}},p.createElement("table",Object.assign({},u,{ref:a,className:d("navds-table",`navds-table--${r}`,t,{"navds-table--zebra-stripes":n,"navds-table--sticky-header":l})})))});j.Header=Ar;j.Body=jr;j.Row=De;j.ColumnHeader=Pr;j.HeaderCell=Re;j.DataCell=Ee;j.ExpandableRow=Ir;var Mr=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const ye=i.forwardRef((e,a)=>{var{children:t,className:n,variant:r,size:s="medium",icon:o,"data-color":l}=e,u=Mr(e,["children","className","variant","size","icon","data-color"]);const{cn:d}=b(),c=r?.endsWith("-filled")&&"strong",m=r?.endsWith("-moderate")&&"moderate";return p.createElement(T,Object.assign({"data-color":l??$r(r),"data-variant":c||m||"outline"},u,{ref:a,as:"span",size:s==="medium"?"medium":"small",className:d("navds-tag",n,`navds-tag--${r}`,`navds-tag--${s}`)}),o&&p.createElement("span",{className:d("navds-tag__icon--left")},o),t)});function $r(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}function Vr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var be={exports:{}},U={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var he;function Hr(){if(he)return U;he=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function t(n,r,s){var o=null;if(s!==void 0&&(o=""+s),r.key!==void 0&&(o=""+r.key),"key"in r){s={};for(var l in r)l!=="key"&&(s[l]=r[l])}else s=r;return r=s.ref,{$$typeof:e,type:n,key:o,ref:r!==void 0?r:null,props:s}}return U.Fragment=a,U.jsx=t,U.jsxs=t,U}var we;function zr(){return we||(we=1,be.exports=Hr()),be.exports}var F=zr();const kt=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:F.jsx(pr,{variant:"warning",size:"small",children:F.jsx(Z,{gap:"2",children:p.Children.map(e,a=>F.jsx(T,{size:"small",children:a},He(a)?a.key:a))})}),G={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};W(G);const J="#B7B1A9",Ce=4,Lr=(e,a,t)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${J};
    border-radius: ${Ce}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${a}px;
    margin-left: ${t}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${J};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    top: 0;
    margin-top: -1px;
    position: absolute;
    left: ${e}px;
    transform: rotate(45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`,Ur=(e,a,t)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${J};
    border-radius: ${Ce}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${a}px;
    margin-left: ${t}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${J};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    left: 0;
    margin-left: -1px;
    position: absolute;
    top: ${e}px;
    transform: rotate(-45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`,Kr=(e,a,t,n)=>a?Ur(e,t,n):Lr(e,t,n),Wr=(e,a,t)=>t?"":a?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,yt=({children:e,alignOffset:a=0,alignLeft:t=!1,marginTop:n=0,marginLeft:r=0,hideBorder:s=!1})=>F.jsxs(F.Fragment,{children:[F.jsx("style",{dangerouslySetInnerHTML:{__html:Kr(a,t,n,r)}}),F.jsx("div",{className:Wr(a,t,s),children:e})]});var Oe={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var je;function Gr(){return je||(je=1,function(e){(function(){var a={}.hasOwnProperty;function t(){for(var s="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(s=r(s,n.call(this,l)))}return s}function n(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return t.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var l in s)a.call(s,l)&&s[l]&&(o=r(o,this&&this[l]||l));return o}function r(s,o){return o?s?s+" "+o:s+o:s}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(Oe)),Oe.exports}var Xr=Gr();const oe=Vr(Xr),Yr="_borderbox_1vkvn_1",Jr="_error_1vkvn_5",Zr="_warning_1vkvn_8",Qr={borderbox:Yr,error:Jr,warning:Zr};oe.bind(Qr);const et="_aksjonspunkt_kn1hn_1",nt="_erAksjonspunktApent_kn1hn_4",rt="_erIkkeGodkjentAvBeslutter_kn1hn_8",tt={aksjonspunkt:et,erAksjonspunktApent:nt,erIkkeGodkjentAvBeslutter:rt};oe.bind(tt);const re=({dateString:e,year:a,month:t,day:n})=>F.jsx(F.Fragment,{children:A(e,{year:a,month:t,day:n})});W(G);W(G);const at="_divider_1t980_1",st="_dividerParagraf_1t980_8",ot="_leftPanel_1t980_11",lt="_rightPanel_1t980_14",it={divider:at,dividerParagraf:st,leftPanel:ot,rightPanel:lt};oe.bind(it);const bt=()=>F.jsx("span",{"data-testid":"editedIcon",children:F.jsx(cn,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});W(G);W(G);const Ae=({soknad:e,termindato:a})=>{const t=e.fodselsdatoer?e.fodselsdatoer:{},n=Object.keys(t).length>0?"FodselsammenligningPanel.Fodselsdato":"FodselsammenligningPanel.Termindato",r=Object.keys(t).length>0?"FodselSammenligningOtherPanel.OpplysningerISoknad":"FodselSammenligningOtherPanel.TerminISoknad",s=dt(!!e,t,e.termindato,a);return g.jsxs(Z,{gap:"4",children:[g.jsx(te,{size:"small",children:g.jsx(x,{id:r})}),g.jsxs(K,{gap:"4",children:[e.utstedtdato&&g.jsxs("div",{children:[g.jsx(B,{children:g.jsx(x,{id:"FodselsammenligningPanel.UstedtDato"})}),g.jsx(T,{children:g.jsx(re,{dateString:e.utstedtdato})})]}),g.jsxs("div",{children:[g.jsx(B,{children:g.jsx(x,{id:n})}),g.jsx(T,{children:s})]}),g.jsxs("div",{children:[g.jsx(B,{children:g.jsx(x,{id:"FodselsammenligningPanel.AntallBarn"})}),g.jsx(T,{children:e.antallBarn})]})]})]})},dt=(e,a,t,n)=>e&&Object.keys(a).length>0?A(Object.values(a)[0]):n?A(n):e?t?A(t):"-":null;Ae.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningOtherPanel",props:{soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    } | null;
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  } | null;
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"union",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"union",raw:"FarSøkerType | null",elements:[{name:"FarSøkerType"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""}}};const Be=({vedtaksDatoSomSvangerskapsuke:e,soknadOriginalBehandling:a,familiehendelseOriginalBehandling:t})=>{const n=t&&!!t.termindato||!a?.fodselsdatoer||Object.keys(a.fodselsdatoer).length===0,r=n?"FodselsammenligningPanel.Termindato":"FodselsammenligningPanel.Fodselsdato",s=ut(n,a,t),o=gt(n,a,t),l=t?(!t.avklartBarn||t.avklartBarn.length===0)&&!!e:!1;return g.jsxs(Z,{gap:"4",children:[g.jsx(te,{size:"small",children:g.jsx(x,{id:"FodselsammenligningPanel.Ytelsesvedtak"})}),g.jsxs(K,{gap:"4",children:[l&&g.jsxs("div",{children:[g.jsx(B,{children:g.jsx(x,{id:"FodselsammenligningPanel.FodtISvangerskapsuke"})}),g.jsx(T,{children:e})]}),g.jsxs("div",{children:[g.jsx(B,{children:g.jsx(x,{id:r})}),g.jsx(T,{children:s??"-"})]}),g.jsxs("div",{children:[g.jsx(B,{children:g.jsx(x,{id:"FodselsammenligningPanel.AntallBarn"})}),g.jsx(T,{children:o??"-"})]})]})]})},ut=(e,a,t)=>{if(!a&&!t)return"";const n=t??{termindato:void 0,avklartBarn:[]};if(e){const r=n?.termindato??a?.termindato;return r?A(r):void 0}return n.avklartBarn?.length?A(n.avklartBarn[0].fodselsdato):a?.fodselsdatoer?A(Object.values(a.fodselsdatoer)[0]):"-"},gt=(e,a,t)=>{if(!a&&!t)return 0;const n=t??{termindato:void 0,antallBarnTermin:void 0,avklartBarn:[]};return e?n.termindato?n.antallBarnTermin:a?.antallBarn:n.avklartBarn&&n.avklartBarn.length>0?n.avklartBarn.length:a?.antallBarn};Be.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningRevurderingPanel",props:{soknadOriginalBehandling:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    } | null;
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  } | null;
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"union",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"union",raw:"FarSøkerType | null",elements:[{name:"FarSøkerType"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}>`},description:""},familiehendelseOriginalBehandling:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const Me=({avklartBarn:e,harDødtBarn:a})=>g.jsxs(Z,{gap:"4",children:[g.jsxs(K,{gap:"4",children:[g.jsx(te,{size:"small",children:g.jsx(x,{id:"FodselsammenligningPanel.OpplysningerFReg"})}),a&&g.jsx(ye,{variant:"info",size:"small",children:g.jsx(x,{id:"FodselsammenligningPanel.Dodfodt"})})]}),e?.length?g.jsxs(j,{size:"small",children:[g.jsx(j.Header,{children:g.jsxs(j.Row,{children:[g.jsx(j.HeaderCell,{scope:"col",children:g.jsx(x,{id:"FodselsammenligningPanel.Fodselsdato"})}),a&&g.jsx(j.HeaderCell,{scope:"col",children:g.jsx(x,{id:"FodselsammenligningPanel.Dodsdato"})})]})}),g.jsx(j.Body,{children:e.map((t,n)=>{const r=t.fodselsdato+t.dodsdato+n;return g.jsxs(j.Row,{children:[g.jsx(j.DataCell,{children:g.jsx(T,{children:g.jsx(re,{dateString:t.fodselsdato})})}),a&&g.jsx(j.DataCell,{children:t.dodsdato?g.jsxs(K,{gap:"4",align:"center",children:[g.jsx(re,{dateString:t.dodsdato}),g.jsx(ye,{variant:"info",size:"small",children:g.jsx(x,{id:"FodselsammenligningPanel.Dod"})})]}):"-"})]},r)})})]}):g.jsx(T,{children:"-"})]});Me.__docgenInfo={description:"",methods:[],displayName:"OpplysningerFraFReg",props:{avklartBarn:{required:!0,tsType:{name:"union",raw:"AvklartBarn[] | undefined",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]"},{name:"undefined"}]},description:""},harDødtBarn:{required:!0,tsType:{name:"boolean"},description:""}}};const mt=({behandlingsType:e,avklartBarn:a=[],soknad:t,vedtaksDatoSomSvangerskapsuke:n,termindato:r,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:o})=>{const l=!!a.find(u=>!!u.dodsdato);return g.jsxs(K,{gap:"10",children:[g.jsxs("div",{children:[e!==de.REVURDERING&&g.jsx(Ae,{soknad:t,termindato:r}),e===de.REVURDERING&&g.jsx(Be,{soknadOriginalBehandling:s,familiehendelseOriginalBehandling:o,vedtaksDatoSomSvangerskapsuke:n})]}),g.jsx(Me,{avklartBarn:a,harDødtBarn:l})]})};mt.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningPanel",props:{behandlingsType:{required:!0,tsType:{name:"string"},description:""},avklartBarn:{required:!1,tsType:{name:"union",raw:"AvklartBarn[] | undefined",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]"},{name:"undefined"}]},description:"",defaultValue:{value:"[]",computed:!1}},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    } | null;
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  } | null;
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"union",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"union",raw:"FarSøkerType | null",elements:[{name:"FarSøkerType"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}>`},description:""},soknadOriginalBehandling:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    } | null;
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  } | null;
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"union",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"union",raw:"FarSøkerType | null",elements:[{name:"FarSøkerType"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}>`},description:""},familiehendelseOriginalBehandling:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`},description:""},termindato:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},vedtaksDatoSomSvangerskapsuke:{required:!0,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:""}}};const ht={"VarselOmRevurderingForm.VarselOmRevurdering":"Varsel om revurdering","VarselOmRevurderingForm.VarselOmRevurderingVurder":"Vurder om varsel om revurdering skal sendes til søker","VarselOmRevurderingForm.Etterkontroll":"Etterkontroll","VarselOmRevurderingForm.Manuell":"Manuell","VarselOmRevurderingForm.Bekreft":"Bekreft og fortsett","VarselOmRevurderingForm.IkkeSendVarsel":"Ikke send varsel til søker","VarselOmRevurderingForm.SendVarsel":"Send varsel til søker","VarselOmRevurderingForm.FritekstIBrev":"Fritekst i brev","VarselOmRevurderingForm.BegrunnelseForSvar":"Begrunnelse","VarselOmRevurderingForm.BrevBlirBestilt":"Brevet blir bestilt","VarselOmRevurderingForm.Begrunnelse":"Begrunnelse","VarselOmRevurderingForm.UtstedDato":"Utstedt dato","VarselOmRevurderingForm.Ytelsesvedtak":"Vedtak","VarselOmRevurderingForm.OpplysningerISoknad":"Opplysninger om fødsel i søknaden","VarselOmRevurderingForm.Preview":"Forhåndsvis","FodselsammenligningPanel.AntallBarn":"Antall barn","FodselsammenligningPanel.Termindato":"Termindato","FodselsammenligningPanel.FodtISvangerskapsuke":"Født i svangerskapsuke","FodselsammenligningPanel.Svangerskapsuke":"Svangerskapsuke","FodselsammenligningPanel.OpplysningerFReg":"Opplysninger om fødsel fra folkeregisteret","FodselsammenligningPanel.Fodselsdato":"Fødselsdato","FodselsammenligningPanel.Dodsdato":"Dødsdato","FodselsammenligningPanel.UstedtDato":"Utstedt dato","FodselsammenligningPanel.Ytelsesvedtak":"Vedtak","FodselsammenligningPanel.Dodfodt":"Dødfødsel","FodselsammenligningPanel.Dod":"Død","FodselSammenligningOtherPanel.OpplysningerISoknad":"Opplysninger om fødsel fra søknaden","FodselSammenligningOtherPanel.TerminISoknad":"Opplysninger om termin oppgitt i søknaden"};export{T as B,pt as D,ft as E,mt as F,te as H,kt as K,B as L,x as M,bn as S,ye as T,Z as V,yt as W,L as a,z as b,xn as c,ee as d,me as e,se as f,_e as g,dr as h,Fe as i,qe as j,on as k,vt as l,Qe as m,Qn as n,ae as o,K as p,Ue as q,bt as r,ht as s,R as u};
