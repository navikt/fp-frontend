import{r as i,f as sn,_ as ye,o as ke,b as on,a as q,s as y,d as He,S as Ve,l as ln,e as ne,n as dn,j as p,B as be}from"./iframe-ighjoL7s.js";function un(e,a){var r=e.values,n=ye(e,["values"]),t=a.values,s=ye(a,["values"]);return ke(t,r)&&ke(n,s)}function Le(e){var a=sn(),r=a.formatMessage,n=a.textComponent,t=n===void 0?i.Fragment:n,s=e.id,o=e.description,l=e.defaultMessage,u=e.values,d=e.children,m=e.tagName,g=m===void 0?t:m,k=e.ignoreTag,w={id:s,description:o,defaultMessage:l},O=r(w,u,{ignoreTag:k});return typeof d=="function"?d(Array.isArray(O)?O:[O]):g?i.createElement(g,null,O):i.createElement(i.Fragment,null,O)}Le.displayName="FormattedMessage";var C=i.memo(Le,un);C.displayName="MemoizedFormattedMessage";const Y=e=>on({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var mn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const gn=i.forwardRef((e,a)=>{var{className:r,size:n="medium",as:t="p",spacing:s,truncate:o,weight:l="regular",align:u,visuallyHidden:d,textColor:m}=e,g=mn(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:k}=q();return y.createElement(t,Object.assign({},g,{ref:a,className:k(r,"navds-body-long",`navds-body-long--${n}`,Y({spacing:s,truncate:o,weight:l,align:u,visuallyHidden:d,textColor:m}))}))});var cn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const B=i.forwardRef((e,a)=>{var{className:r,size:n="medium",as:t="p",spacing:s,truncate:o,weight:l="regular",align:u,visuallyHidden:d,textColor:m}=e,g=cn(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:k}=q();return y.createElement(t,Object.assign({},g,{ref:a,className:k(r,"navds-body-short",`navds-body-short--${n}`,Y({spacing:s,truncate:o,weight:l,align:u,visuallyHidden:d,textColor:m}))}))});var fn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Qr=i.forwardRef((e,a)=>{var{className:r,size:n="medium",spacing:t,uppercase:s,as:o="p",truncate:l,weight:u="regular",align:d,visuallyHidden:m,textColor:g}=e,k=fn(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:w}=q();return y.createElement(o,Object.assign({},k,{ref:a,className:w(r,"navds-detail",Y({spacing:t,truncate:l,weight:u,align:d,visuallyHidden:m,textColor:g,uppercase:s}),{"navds-detail--small":n==="small"})}))});var pn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const ea=i.forwardRef((e,a)=>{var{children:r,className:n,size:t,spacing:s,as:o="p",showIcon:l=!1}=e,u=pn(e,["children","className","size","spacing","as","showIcon"]);const{cn:d}=q();return y.createElement(o,Object.assign({},u,{ref:a,className:d("navds-error-message","navds-label",n,Y({spacing:s}),{"navds-label--small":t==="small","navds-error-message--show-icon":l})}),l&&y.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var vn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const ge=i.forwardRef((e,a)=>{var{level:r="1",size:n,className:t,as:s,spacing:o,align:l,visuallyHidden:u,textColor:d}=e,m=vn(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:g}=q(),k=s??`h${r}`;return y.createElement(k,Object.assign({},m,{ref:a,className:g(t,"navds-heading",`navds-heading--${n}`,Y({spacing:o,align:l,visuallyHidden:u,textColor:d}))}))});var yn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};i.forwardRef((e,a)=>{var{className:r,spacing:n,as:t="p"}=e,s=yn(e,["className","spacing","as"]);const{cn:o}=q();return y.createElement(t,Object.assign({},s,{ref:a,className:o(r,"navds-ingress",{"navds-typo--spacing":!!n})}))});var kn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const z=i.forwardRef((e,a)=>{var{className:r,size:n="medium",as:t="label",spacing:s,visuallyHidden:o,textColor:l}=e,u=kn(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:d}=q();return y.createElement(t,Object.assign({},u,{ref:a,className:d(r,"navds-label",Y({spacing:s,visuallyHidden:o,textColor:l}),{"navds-label--small":n==="small"})}))});function ce(e,a){const r=Object.entries(e).filter(([n])=>!a.includes(n));return Object.fromEntries(r)}let he=0;function bn(e){const[a,r]=i.useState(e),n=e||a;return i.useEffect(()=>{a==null&&(he+=1,r(`aksel-id-${he}`))},[a]),n}const we=y.useId;function ze(e){var a;if(we!==void 0){const r=we();return e??r.replace(/(:)/g,"")}return(a=bn(e))!==null&&a!==void 0?a:""}function Oe(e,a=[]){const r=i.useRef(e);return i.useEffect(()=>{r.current=e}),i.useCallback((...n)=>{var t;return(t=r.current)===null||t===void 0?void 0:t.call(r,...n)},a)}function hn({value:e,defaultValue:a,onChange:r}){const n=Oe(r),[t,s]=i.useState(a),o=e!==void 0,l=o?e:t,u=Oe(d=>{const g=typeof d=="function"?d(l):d;o||s(g),n(g)},[o,n,l]);return[l,u]}let je=0;function wn(e){const[a,r]=i.useState(e),n=e||a;return i.useEffect(()=>{a==null&&(je+=1,r(`aksel-icon-${je}`))},[a]),n}const xe=y.useId;function H(e){var a;return xe!==void 0?xe().replace(/(:)/g,""):(a=wn(e))!==null&&a!==void 0?a:""}var On=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const jn=i.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=On(e,["title","titleId"]);let s=H();return s=r?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?i.createElement("title",{id:s},r):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var xn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Sn=i.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=xn(e,["title","titleId"]);let s=H();return s=r?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?i.createElement("title",{id:s},r):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var Pn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const _n=i.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=Pn(e,["title","titleId"]);let s=H();return s=r?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?i.createElement("title",{id:s},r):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Tn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Fn=i.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=Tn(e,["title","titleId"]);let s=H();return s=r?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?i.createElement("title",{id:s},r):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var qn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Rn=i.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=qn(e,["title","titleId"]);let s=H();return s=r?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?i.createElement("title",{id:s},r):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Dn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const $n=i.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=Dn(e,["title","titleId"]);let s=H();return s=r?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?i.createElement("title",{id:s},r):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Nn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Mn=i.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=Nn(e,["title","titleId"]);let s=H();return s=r?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?i.createElement("title",{id:s},r):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var En=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Cn=i.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=En(e,["title","titleId"]);let s=H();return s=r?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?i.createElement("title",{id:s},r):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var In=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const An=i.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=In(e,["title","titleId"]);let s=H();return s=r?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?i.createElement("title",{id:s},r):null,i.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var Bn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Hn=i.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=Bn(e,["title","titleId"]);let s=H();return s=r?n||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?i.createElement("title",{id:s},r):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Ue(e,a,{checkForDefaultPrevented:r=!0}={}){return function(t){if(e?.(t),r===!1||!t.defaultPrevented)return a?.(t)}}function se(e){return(a={})=>{const r=a.width?String(a.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function W(e){return(a,r)=>{const n=r?.context?String(r.context):"standalone";let t;if(n==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,l=r?.width?String(r.width):o;t=e.formattingValues[l]||e.formattingValues[o]}else{const o=e.defaultWidth,l=r?.width?String(r.width):e.defaultWidth;t=e.values[l]||e.values[o]}const s=e.argumentCallback?e.argumentCallback(a):a;return t[s]}}function K(e){return(a,r={})=>{const n=r.width,t=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],s=a.match(t);if(!s)return null;const o=s[0],l=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(l)?Ln(l,g=>g.test(o)):Vn(l,g=>g.test(o));let d;d=e.valueCallback?e.valueCallback(u):u,d=r.valueCallback?r.valueCallback(d):d;const m=a.slice(o.length);return{value:d,rest:m}}}function Vn(e,a){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&a(e[r]))return r}function Ln(e,a){for(let r=0;r<e.length;r++)if(a(e[r]))return r}function zn(e){return(a,r={})=>{const n=a.match(e.matchPattern);if(!n)return null;const t=n[0],s=a.match(e.parsePattern);if(!s)return null;let o=e.valueCallback?e.valueCallback(s[0]):s[0];o=r.valueCallback?r.valueCallback(o):o;const l=a.slice(t.length);return{value:o,rest:l}}}const Un={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Yn=(e,a,r)=>{let n;const t=Un[e];return typeof t=="string"?n=t:a===1?n=t.one:n=t.other.replace("{{count}}",String(a)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" siden":n},Wn={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Kn={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Gn={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Xn={date:se({formats:Wn,defaultWidth:"full"}),time:se({formats:Kn,defaultWidth:"full"}),dateTime:se({formats:Gn,defaultWidth:"full"})},Jn={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Zn=(e,a,r,n)=>Jn[e],Qn={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},et={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},nt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},tt={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},rt={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},at=(e,a)=>Number(e)+".",st={ordinalNumber:at,era:W({values:Qn,defaultWidth:"wide"}),quarter:W({values:et,defaultWidth:"wide",argumentCallback:e=>e-1}),month:W({values:nt,defaultWidth:"wide"}),day:W({values:tt,defaultWidth:"wide"}),dayPeriod:W({values:rt,defaultWidth:"wide"})},ot=/^(\d+)\.?/i,lt=/\d+/i,it={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},dt={any:[/^f/i,/^e/i]},ut={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},mt={any:[/1/i,/2/i,/3/i,/4/i]},gt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},ct={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},ft={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},pt={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},vt={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},yt={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},kt={ordinalNumber:zn({matchPattern:ot,parsePattern:lt,valueCallback:e=>parseInt(e,10)}),era:K({matchPatterns:it,defaultMatchWidth:"wide",parsePatterns:dt,defaultParseWidth:"any"}),quarter:K({matchPatterns:ut,defaultMatchWidth:"wide",parsePatterns:mt,defaultParseWidth:"any",valueCallback:e=>e+1}),month:K({matchPatterns:gt,defaultMatchWidth:"wide",parsePatterns:ct,defaultParseWidth:"any"}),day:K({matchPatterns:ft,defaultMatchWidth:"wide",parsePatterns:pt,defaultParseWidth:"any"}),dayPeriod:K({matchPatterns:vt,defaultMatchWidth:"any",parsePatterns:yt,defaultParseWidth:"any"})},bt={code:"nb",formatDistance:Yn,formatLong:Xn,formatRelative:Zn,localize:st,match:kt,options:{weekStartsOn:1,firstWeekContainsDate:4}},ht={global:{dateLocale:bt,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},wt=i.createContext({locale:ht}),Ye=()=>i.useContext(wt),Se=/(\w+)/g;function Ot(e,a){const r=Array.isArray(e)?e:jt(e);for(const n of a){if(!n)continue;let t=n;for(let s=0;s<r.length;s++){const o=t[r[s]];o!==void 0&&(t=o)}if(typeof t=="string")return t}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function jt(e){const a=[];let r=Se.exec(e);for(;r;){const[,n,t]=r;a.push(n||t),r=Se.exec(e)}return a}const xt=/{[^}]*}/g;function fe(e,...a){const r=Ye(),n=r.translations||[],t=[...a,...Array.isArray(n)?n.map(o=>o[e]):[n[e]],r.locale[e]];return(o,l)=>{const u=Ot(o,t);return l?u.replace(xt,d=>{const m=d.substring(1,d.length-1);if(l[m]===void 0){const g=JSON.stringify(l);throw new Error(`Error translating key '${o}'. No replacement syntax ({}) found for key '${m}'. The following replacements were passed: '${g}'`)}return l[m]}):u}}function na(){const e=Ye(),a=e.translations||[],r=Array.isArray(a)?a.map(n=>n.global):[a.global];r.push(e.locale.global);for(const n of r)if(n?.dateLocale)return n.dateLocale;throw new Error("dateLocale not found.")}var St=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Pt=i.forwardRef((e,a)=>{var{className:r,size:n="medium",title:t,transparent:s=!1,variant:o="neutral",id:l,"data-color":u}=e,d=St(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:m}=q(),g=ze(),k=fe("Loader");return y.createElement("svg",Object.assign({"aria-labelledby":l??`loader-${g}`,ref:a,className:m("navds-loader",r,`navds-loader--${n}`,`navds-loader--${o}`,{"navds-loader--transparent":s}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":u??_t(o)},ce(d,["children"]),{"data-variant":o}),y.createElement("title",{id:l??`loader-${g}`},t||k("title")),y.createElement("circle",{className:m("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),y.createElement("circle",{className:m("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function _t(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var Tt=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Ft=i.forwardRef((e,a)=>{var{as:r="button",variant:n="primary",className:t,children:s,size:o="medium",loading:l=!1,disabled:u,icon:d,iconPosition:m="left",onKeyUp:g,"data-color":k}=e,w=Tt(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:O}=q(),f=u||l?ce(w,["href"]):w,x=P=>{P.key===" "&&!u&&!l&&P.currentTarget.click()};return y.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":k??qt(n),"data-variant":Rt(n)},f,{ref:a,onKeyUp:Ue(g,x),className:O(t,"navds-button",`navds-button--${n}`,`navds-button--${o}`,{"navds-button--loading":l,"navds-button--icon-only":!!d&&!s,"navds-button--disabled":u??l}),disabled:u??l?!0:void 0}),d&&m==="left"&&y.createElement("span",{className:O("navds-button__icon")},d),l&&y.createElement(Pt,{size:o}),s&&y.createElement(z,{as:"span",size:o==="medium"?"medium":"small"},s),d&&m==="right"&&y.createElement("span",{className:O("navds-button__icon")},d))});function qt(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function Rt(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var Dt=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const $t={error:Hn,warning:Fn,info:Rn,success:Sn},Nt=i.forwardRef((e,a)=>{var{children:r,className:n,variant:t,size:s="medium",fullWidth:o=!1,contentMaxWidth:l=!0,inline:u=!1,closeButton:d=!1,onClose:m}=e,g=Dt(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:k}=q(),w=fe("Alert"),O=$t[t];return y.createElement("div",Object.assign({},g,{"data-color":Mt(t),"data-variant":t,ref:a,className:k(n,"navds-alert",`navds-alert--${t}`,`navds-alert--${s}`,{"navds-alert--full-width":o,"navds-alert--inline":u,"navds-alert--close-button":d})}),y.createElement(O,{title:w(t),className:k("navds-alert__icon")}),y.createElement(gn,{as:"div",size:s,className:k("navds-alert__wrapper",l&&"navds-alert__wrapper--maxwidth")},r),d&&!u&&y.createElement("div",{className:k("navds-alert__button-wrapper")},y.createElement(Ft,{className:k("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:m,type:"button",icon:y.createElement(An,{title:["error","warning"].includes(t)?w("closeAlert"):w("closeMessage")})})))});function Mt(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function R(e,a,r,n){return n?typeof n=="string"?{[`--__${e}c-${a}-${r}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([t,s])=>[`--__${e}c-${a}-${r}-${t}`,s])):{}}const Et={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Pe=(e,a,r,n,t,s)=>a.split(" ").map((o,l,u)=>{var d;if(e==="margin-inline"&&o==="full")return`calc((100vw - ${100/u.length}%)/-2)`;if(e==="padding-inline"&&o==="full")return`calc((100vw - ${100/u.length}%)/2)`;if(["mi","mb"].includes(e)&&o==="auto")return"auto";let m=`var(--${s}-${r}-${o})`;if(n.includes(o))m=o==="px"?"1px":o;else if(o.startsWith("space"))m=`var(--${s}-${o})`;else{const g=`--${s}-spacing-${o}`;m=`var(${(d=Et[g])!==null&&d!==void 0?d:g})`}return t?o==="0"?"0":`calc(-1 * ${m})`:m}).join(" ");function I(e,a,r,n,t,s=!1,o=[]){if(!t)return{};if(typeof t=="string")return{[`--__${e}c-${a}-${r}-xs`]:Pe(r,t,n,o,s,e)};const l={};return Object.entries(t).forEach(([u,d])=>{l[`--__${e}c-${a}-${r}-${u}`]=Pe(r,d,n,o,s,e)}),l}const Ct=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],It=({children:e,className:a,padding:r,paddingInline:n,paddingBlock:t,margin:s,marginInline:o,marginBlock:l,width:u,minWidth:d,maxWidth:m,height:g,minHeight:k,maxHeight:w,position:O,inset:f,top:x,right:P,left:N,bottom:_,overflow:E,overflowX:D,overflowY:h,flexBasis:v,flexGrow:c,flexShrink:j,gridColumn:T})=>{const S=He(!1),{cn:F}=q(),b=S?"ax":"a",M=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},I(b,"r","p","spacing",r)),I(b,"r","pi","spacing",n)),I(b,"r","pb","spacing",t)),I(b,"r","m","spacing",s)),I(b,"r","mi","spacing",o)),I(b,"r","mb","spacing",l)),R(b,"r","w",u)),R(b,"r","minw",d)),R(b,"r","maxw",m)),R(b,"r","h",g)),R(b,"r","minh",k)),R(b,"r","maxh",w)),R(b,"r","position",O)),I(b,"r","inset","spacing",f)),I(b,"r","top","spacing",x)),I(b,"r","right","spacing",P)),I(b,"r","bottom","spacing",_)),I(b,"r","left","spacing",N)),R(b,"r","overflow",E)),R(b,"r","overflowx",D)),R(b,"r","overflowy",h)),R(b,"r","flex-basis",v)),R(b,"r","flex-grow",c)),R(b,"r","flex-shrink",j)),R(b,"r","grid-column",T));return y.createElement(Ve,{className:F({className:a,"navds-r-p":r,"navds-r-pi":n,"navds-r-pb":t,"navds-r-m":s,"navds-r-mi":o,"navds-r-mb":l,"navds-r-w":u,"navds-r-minw":d,"navds-r-maxw":m,"navds-r-h":g,"navds-r-minh":k,"navds-r-maxh":w,"navds-r-position":O,"navds-r-inset":f,"navds-r-top":x,"navds-r-right":P,"navds-r-bottom":_,"navds-r-left":N,"navds-r-overflow":E,"navds-r-overflowx":D,"navds-r-overflowy":h,"navds-r-flex-basis":v,"navds-r-flex-grow":c,"navds-r-flex-shrink":j,"navds-r-grid-column":T}),style:M},e)};var At=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const We=i.forwardRef((e,a)=>{var{children:r,className:n,as:t="div",align:s,justify:o,wrap:l=!0,gap:u,style:d,direction:m="row",asChild:g}=e,k=At(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const O=He(!1)?"ax":"a",{cn:f}=q(),x=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),I(O,"stack","gap","spacing",u)),R(O,"stack","direction",m)),R(O,"stack","align",s)),R(O,"stack","justify",o)),P=g?Ve:t;return y.createElement(It,Object.assign({},k),y.createElement(P,Object.assign({},ce(k,Ct),{ref:a,style:x,className:f("navds-stack",n,{"navds-vstack":m==="column","navds-hstack":m==="row","navds-stack-gap":u,"navds-stack-align":s,"navds-stack-justify":o,"navds-stack-direction":m,"navds-stack-wrap":l})}),r))});var Bt=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const J=i.forwardRef((e,a)=>{var{as:r="div"}=e,n=Bt(e,["as"]);return y.createElement(We,Object.assign({as:r},n,{ref:a,direction:"row"}))});var Ht=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const te=i.forwardRef((e,a)=>{var{as:r="div"}=e,n=Ht(e,["as"]);return y.createElement(We,Object.assign({as:r},n,{ref:a,direction:"column",wrap:!1}))});var Vt=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Lt=i.forwardRef((e,a)=>{var{className:r}=e,n=Vt(e,["className"]);const{cn:t}=q();return y.createElement("tbody",Object.assign({},n,{ref:a,className:t("navds-table__body",r)}))});var zt=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Ke=i.forwardRef((e,a)=>{var{className:r,children:n,align:t,textSize:s}=e,o=zt(e,["className","children","align","textSize"]);const{cn:l}=q();return y.createElement("th",Object.assign({ref:a,className:l("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${t}`]:t,"navds-label--small":s==="small"})},o),n)}),Ge=i.createContext(null);var Ut=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Yt=i.forwardRef((e,a)=>{var r,n,t,s,{className:o,children:l,sortable:u=!1,sortKey:d}=e,m=Ut(e,["className","children","sortable","sortKey"]);const g=i.useContext(Ge),{cn:k}=q();return u&&!d&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),y.createElement(Ke,Object.assign({scope:"col",ref:a,className:k(o),"aria-sort":u?((r=g?.sort)===null||r===void 0?void 0:r.orderBy)===d?(n=g?.sort)===null||n===void 0?void 0:n.direction:"none":void 0},m),u?y.createElement("button",{type:"button",className:k("navds-table__sort-button"),onClick:u&&d?()=>{var w;return(w=g?.onSortChange)===null||w===void 0?void 0:w.call(g,d)}:void 0},l,((t=g?.sort)===null||t===void 0?void 0:t.orderBy)===d?((s=g?.sort)===null||s===void 0?void 0:s.direction)==="descending"?y.createElement(Mn,{"aria-hidden":!0}):y.createElement(Cn,{"aria-hidden":!0}):y.createElement(jn,{"aria-hidden":!0})):l)});var Wt=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Xe=i.forwardRef((e,a)=>{var{className:r,children:n="",align:t,textSize:s}=e,o=Wt(e,["className","children","align","textSize"]);const{cn:l}=q();return y.createElement(B,Object.assign({as:"td",ref:a,className:l("navds-table__data-cell",r,{[`navds-table__data-cell--align-${t}`]:t}),size:s},o),n)});var Kt=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Gt=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function Xt(e){const a=parseFloat(e);return!Number.isNaN(a)&&Number.isFinite(a)}function _e(e){return typeof e=="string"&&e[e.length-1]==="%"&&Xt(e.substring(0,e.length-1))}function oe(e,a){a===0&&e?.style&&(e.style.display="none")}function Jt(e,a){a===0&&e?.style&&(e.style.display="")}const Zt=e=>{var{children:a,className:r,innerClassName:n,duration:t=250,easing:s="ease",height:o}=e,l=Kt(e,["children","className","innerClassName","duration","easing","height"]);const{cn:u}=q(),d=i.useRef(o),m=i.useRef(null),g=i.useRef(),k=i.useRef(),w=i.useRef(o),O=i.useRef("visible"),f=Gt?0:t;typeof w.current=="number"?(typeof o!="string"&&(w.current=o<0?0:o),O.current="hidden"):_e(w.current)&&(w.current=o==="0%"?0:o,O.current="hidden");const[x,P]=i.useState(w.current),[N,_]=i.useState(O.current),[E,D]=i.useState(!1);i.useEffect(()=>{oe(m.current,w.current)},[]),i.useEffect(()=>{if(o!==d.current&&m.current){Jt(m.current,d.current),m.current.style.overflow="hidden";const j=m.current.offsetHeight;m.current.style.overflow="";const T=f;let S,F,b="hidden",M;const L=d.current==="auto";typeof o=="number"?(S=o<0?0:o,F=S):_e(o)?(S=o==="0%"?0:o,F=S):(S=j,F="auto",b=void 0),L&&(F=S,S=j),P(S),_("hidden"),D(!L),clearTimeout(k.current),clearTimeout(g.current),L?(M=!0,k.current=setTimeout(()=>{P(F),_(b),D(M)},50),g.current=setTimeout(()=>{D(!1),oe(m.current,F)},T)):k.current=setTimeout(()=>{P(F),_(b),D(!1),o!=="auto"&&oe(m.current,S)},T)}return d.current=o,()=>{clearTimeout(k.current),clearTimeout(g.current)}},[o]);const h={height:x,overflow:N};E&&(h.transition=`height ${f}ms ${s} 0ms`,h.WebkitTransition=h.transition);const c=typeof l["aria-hidden"]<"u"?l["aria-hidden"]:o===0;return y.createElement("div",Object.assign({},l,{className:u(r),style:h}),y.createElement("div",{"aria-hidden":c,className:u(n),ref:m},a))};var Qt=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Je=i.forwardRef((e,a)=>{var{className:r,selected:n=!1,shadeOnHover:t=!0}=e,s=Qt(e,["className","selected","shadeOnHover"]);const{cn:o}=q();return y.createElement("tr",Object.assign({},s,{ref:a,className:o("navds-table__row",r,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":t})}))});var er=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const nr=i.forwardRef((e,a)=>{var{className:r,children:n,content:t,togglePlacement:s="left",defaultOpen:o=!1,open:l,onOpenChange:u,expansionDisabled:d=!1,expandOnRowClick:m=!1,colSpan:g=999,contentGutter:k,onClick:w}=e,O=er(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:f}=q(),[x,P]=hn({defaultValue:o,value:l,onChange:u}),N=fe("global"),_=ze(),E=h=>{P(v=>!v),h.stopPropagation()},D=h=>{m&&!d&&!Ze(h.target)&&E(h)};return y.createElement(y.Fragment,null,y.createElement(Je,Object.assign({},O,{ref:a,className:f("navds-table__expandable-row",r,{"navds-table__expandable-row--open":x,"navds-table__expandable-row--expansion-disabled":d,"navds-table__expandable-row--clickable":m}),onClick:Ue(w,D)}),s==="right"&&n,y.createElement(Xe,{className:f("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":x}),onClick:d?()=>null:E},!d&&y.createElement("button",{className:f("navds-table__toggle-expand-button"),type:"button","aria-controls":_,"aria-expanded":x,onClick:E},y.createElement(_n,{className:f("navds-table__expandable-icon"),title:N(x?"showLess":"showMore")}))),s==="left"&&n),y.createElement("tr",{"data-state":x?"open":"closed",className:f("navds-table__expanded-row"),"aria-hidden":!x,id:_},y.createElement("td",{colSpan:g,className:f("navds-table__expanded-row-cell")},y.createElement(Zt,{className:f("navds-table__expanded-row-collapse"),innerClassName:f(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${k??s}`),height:x?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},t))))});function Ze(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:Ze(e.parentElement)}var tr=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const rr=i.forwardRef((e,a)=>{var{className:r}=e,n=tr(e,["className"]);const{cn:t}=q();return y.createElement("thead",Object.assign({},n,{ref:a,className:t("navds-table__header",r)}))});var ar=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const $=i.forwardRef((e,a)=>{var{className:r,zebraStripes:n=!1,size:t="medium",onSortChange:s,sort:o,stickyHeader:l=!1}=e,u=ar(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:d}=q();return y.createElement(Ge.Provider,{value:{onSortChange:s,sort:o}},y.createElement("table",Object.assign({},u,{ref:a,className:d("navds-table",`navds-table--${t}`,r,{"navds-table--zebra-stripes":n,"navds-table--sticky-header":l})})))});$.Header=rr;$.Body=Lt;$.Row=Je;$.ColumnHeader=Yt;$.HeaderCell=Ke;$.DataCell=Xe;$.ExpandableRow=nr;var sr=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Te=i.forwardRef((e,a)=>{var{children:r,className:n,variant:t,size:s="medium",icon:o,"data-color":l}=e,u=sr(e,["children","className","variant","size","icon","data-color"]);const{cn:d}=q(),m=t?.endsWith("-filled")&&"strong",g=t?.endsWith("-moderate")&&"moderate";return y.createElement(B,Object.assign({"data-color":l??or(t),"data-variant":m||g||"outline"},u,{ref:a,as:"span",size:s==="medium"?"medium":"small",className:d("navds-tag",n,`navds-tag--${t}`,`navds-tag--${s}`)}),o&&y.createElement("span",{className:d("navds-tag__icon--left")},o),r)});function or(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}function pe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var le={exports:{}},lr=le.exports,Fe;function ir(){return Fe||(Fe=1,function(e,a){(function(r,n){e.exports=n()})(lr,function(){var r,n,t=1e3,s=6e4,o=36e5,l=864e5,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=31536e6,m=2628e6,g=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,k={years:d,months:m,days:l,hours:o,minutes:s,seconds:t,milliseconds:1,weeks:6048e5},w=function(h){return h instanceof E},O=function(h,v,c){return new E(h,c,v.$l)},f=function(h){return n.p(h)+"s"},x=function(h){return h<0},P=function(h){return x(h)?Math.ceil(h):Math.floor(h)},N=function(h){return Math.abs(h)},_=function(h,v){return h?x(h)?{negative:!0,format:""+N(h)+v}:{negative:!1,format:""+h+v}:{negative:!1,format:""}},E=function(){function h(c,j,T){var S=this;if(this.$d={},this.$l=T,c===void 0&&(this.$ms=0,this.parseFromMilliseconds()),j)return O(c*k[f(j)],this);if(typeof c=="number")return this.$ms=c,this.parseFromMilliseconds(),this;if(typeof c=="object")return Object.keys(c).forEach(function(M){S.$d[f(M)]=c[M]}),this.calMilliseconds(),this;if(typeof c=="string"){var F=c.match(g);if(F){var b=F.slice(2).map(function(M){return M!=null?Number(M):0});return this.$d.years=b[0],this.$d.months=b[1],this.$d.weeks=b[2],this.$d.days=b[3],this.$d.hours=b[4],this.$d.minutes=b[5],this.$d.seconds=b[6],this.calMilliseconds(),this}}return this}var v=h.prototype;return v.calMilliseconds=function(){var c=this;this.$ms=Object.keys(this.$d).reduce(function(j,T){return j+(c.$d[T]||0)*k[T]},0)},v.parseFromMilliseconds=function(){var c=this.$ms;this.$d.years=P(c/d),c%=d,this.$d.months=P(c/m),c%=m,this.$d.days=P(c/l),c%=l,this.$d.hours=P(c/o),c%=o,this.$d.minutes=P(c/s),c%=s,this.$d.seconds=P(c/t),c%=t,this.$d.milliseconds=c},v.toISOString=function(){var c=_(this.$d.years,"Y"),j=_(this.$d.months,"M"),T=+this.$d.days||0;this.$d.weeks&&(T+=7*this.$d.weeks);var S=_(T,"D"),F=_(this.$d.hours,"H"),b=_(this.$d.minutes,"M"),M=this.$d.seconds||0;this.$d.milliseconds&&(M+=this.$d.milliseconds/1e3,M=Math.round(1e3*M)/1e3);var L=_(M,"S"),rn=c.negative||j.negative||S.negative||F.negative||b.negative||L.negative,an=F.format||b.format||L.format?"T":"",ae=(rn?"-":"")+"P"+c.format+j.format+S.format+an+F.format+b.format+L.format;return ae==="P"||ae==="-P"?"P0D":ae},v.toJSON=function(){return this.toISOString()},v.format=function(c){var j=c||"YYYY-MM-DDTHH:mm:ss",T={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return j.replace(u,function(S,F){return F||String(T[S])})},v.as=function(c){return this.$ms/k[f(c)]},v.get=function(c){var j=this.$ms,T=f(c);return T==="milliseconds"?j%=1e3:j=T==="weeks"?P(j/k[T]):this.$d[T],j||0},v.add=function(c,j,T){var S;return S=j?c*k[f(j)]:w(c)?c.$ms:O(c,this).$ms,O(this.$ms+S*(T?-1:1),this)},v.subtract=function(c,j){return this.add(c,j,!0)},v.locale=function(c){var j=this.clone();return j.$l=c,j},v.clone=function(){return O(this.$ms,this)},v.humanize=function(c){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!c)},v.valueOf=function(){return this.asMilliseconds()},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},h}(),D=function(h,v,c){return h.add(v.years()*c,"y").add(v.months()*c,"M").add(v.days()*c,"d").add(v.hours()*c,"h").add(v.minutes()*c,"m").add(v.seconds()*c,"s").add(v.milliseconds()*c,"ms")};return function(h,v,c){r=c,n=c().$utils(),c.duration=function(S,F){var b=c.locale();return O(S,{$l:b},F)},c.isDuration=w;var j=v.prototype.add,T=v.prototype.subtract;v.prototype.add=function(S,F){return w(S)?D(this,S,1):j.bind(this)(S,F)},v.prototype.subtract=function(S,F){return w(S)?D(this,S,-1):T.bind(this)(S,F)}}})}(le)),le.exports}var dr=ir();const ur=pe(dr);var ie={exports:{}},mr=ie.exports,qe;function gr(){return qe||(qe=1,function(e,a){(function(r,n){e.exports=n()})(mr,function(){var r="day";return function(n,t,s){var o=function(d){return d.add(4-d.isoWeekday(),r)},l=t.prototype;l.isoWeekYear=function(){return o(this).year()},l.isoWeek=function(d){if(!this.$utils().u(d))return this.add(7*(d-this.isoWeek()),r);var m,g,k,w,O=o(this),f=(m=this.isoWeekYear(),g=this.$u,k=(g?s.utc:s)().year(m).startOf("year"),w=4-k.isoWeekday(),k.isoWeekday()>4&&(w+=7),k.add(w,r));return O.diff(f,"week")+1},l.isoWeekday=function(d){return this.$utils().u(d)?this.day()||7:this.day(this.day()%7?d:d-7)};var u=l.startOf;l.startOf=function(d,m){var g=this.$utils(),k=!!g.u(m)||m;return g.p(d)==="isoweek"?k?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):u.bind(this)(d,m)}}})}(ie)),ie.exports}var cr=gr();const fr=pe(cr);var de={exports:{}},pr=de.exports,Re;function vr(){return Re||(Re=1,function(e,a){(function(r,n){e.exports=n()})(pr,function(){var r="minute",n=/[+-]\d\d(?::?\d\d)?/g,t=/([+-]|\d\d)/g;return function(s,o,l){var u=o.prototype;l.utc=function(f){var x={date:f,utc:!0,args:arguments};return new o(x)},u.utc=function(f){var x=l(this.toDate(),{locale:this.$L,utc:!0});return f?x.add(this.utcOffset(),r):x},u.local=function(){return l(this.toDate(),{locale:this.$L,utc:!1})};var d=u.parse;u.parse=function(f){f.utc&&(this.$u=!0),this.$utils().u(f.$offset)||(this.$offset=f.$offset),d.call(this,f)};var m=u.init;u.init=function(){if(this.$u){var f=this.$d;this.$y=f.getUTCFullYear(),this.$M=f.getUTCMonth(),this.$D=f.getUTCDate(),this.$W=f.getUTCDay(),this.$H=f.getUTCHours(),this.$m=f.getUTCMinutes(),this.$s=f.getUTCSeconds(),this.$ms=f.getUTCMilliseconds()}else m.call(this)};var g=u.utcOffset;u.utcOffset=function(f,x){var P=this.$utils().u;if(P(f))return this.$u?0:P(this.$offset)?g.call(this):this.$offset;if(typeof f=="string"&&(f=function(D){D===void 0&&(D="");var h=D.match(n);if(!h)return null;var v=(""+h[0]).match(t)||["-",0,0],c=v[0],j=60*+v[1]+ +v[2];return j===0?0:c==="+"?j:-j}(f),f===null))return this;var N=Math.abs(f)<=16?60*f:f,_=this;if(x)return _.$offset=N,_.$u=f===0,_;if(f!==0){var E=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(_=this.local().add(N+E,r)).$offset=N,_.$x.$localOffset=E}else _=this.utc();return _};var k=u.format;u.format=function(f){var x=f||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return k.call(this,x)},u.valueOf=function(){var f=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*f},u.isUTC=function(){return!!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var w=u.toDate;u.toDate=function(f){return f==="s"&&this.$offset?l(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():w.call(this)};var O=u.diff;u.diff=function(f,x,P){if(f&&this.$u===f.$u)return O.call(this,f,x,P);var N=this.local(),_=l(f).local();return O.call(N,_,x,P)}}})}(de)),de.exports}var yr=vr();const kr=pe(yr),br=dn(),V=e=>ln({locale:"nb-NO",messages:e},br),ta="YYYY-MM-DD",ra="DD.MM.YYYY",re={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"},hr=V(re),U=(e,a)=>{const{year:r="numeric",month:n="2-digit",day:t="2-digit"}=a??{};return hr.formatDate(new Date(e),{year:r,month:n,day:t})};var ue={exports:{}},wr=ue.exports,De;function Or(){return De||(De=1,function(e,a){(function(r,n){e.exports=n(ne)})(wr,function(r){function n(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var t=n(r),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(o){return o+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return t.default.locale(s,null,!0),s})}(ue)),ue.exports}Or();ne.extend(kr);ne.extend(fr);ne.extend(ur);V(re);const aa=e=>e.toString().replace(new RegExp("\\p{Dash_Punctuation}","gu"),"-").replace(/[\p{Space_Separator}\t]/gu," ").replace(/\u00AD/g,"").replace(/[“”]/g,'"').replace(/[‘’`]/g,"'").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Q=V(re),sa=e=>{if(!e)return Q.formatMessage({id:"Malform.Bokmal"});switch(e){case"NN":return Q.formatMessage({id:"Malform.Nynorsk"});case"EN":return Q.formatMessage({id:"Malform.Engelsk"});default:return Q.formatMessage({id:"Malform.Bokmal"})}},jr=e=>e!=null&&e.constructor===Object;var $e={exports:{}},G={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ne;function xr(){if(Ne)return G;Ne=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(n,t,s){var o=null;if(s!==void 0&&(o=""+s),t.key!==void 0&&(o=""+t.key),"key"in t){s={};for(var l in t)l!=="key"&&(s[l]=t[l])}else s=t;return t=s.ref,{$$typeof:e,type:n,key:o,ref:t!==void 0?t:null,props:s}}return G.Fragment=a,G.jsx=r,G.jsxs=r,G}var Me;function Sr(){return Me||(Me=1,$e.exports=xr()),$e.exports}Sr();V(re);function Pr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ee={exports:{}},X={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ce;function _r(){if(Ce)return X;Ce=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(n,t,s){var o=null;if(s!==void 0&&(o=""+s),t.key!==void 0&&(o=""+t.key),"key"in t){s={};for(var l in t)l!=="key"&&(s[l]=t[l])}else s=t;return t=s.ref,{$$typeof:e,type:n,key:o,ref:t!==void 0?t:null,props:s}}return X.Fragment=a,X.jsx=r,X.jsxs=r,X}var Ie;function Tr(){return Ie||(Ie=1,Ee.exports=_r()),Ee.exports}var A=Tr();const oa=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:A.jsx(Nt,{variant:"warning",size:"small",children:A.jsx(te,{gap:"2",children:y.Children.map(e,a=>A.jsx(B,{size:"small",children:a},jr(a)?a.key:a))})}),Z={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};V(Z);const ee="#B7B1A9",Qe=4,Fr=(e,a,r)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${ee};
    border-radius: ${Qe}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${a}px;
    margin-left: ${r}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${ee};
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
`,qr=(e,a,r)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${ee};
    border-radius: ${Qe}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${a}px;
    margin-left: ${r}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${ee};
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
`,Rr=(e,a,r,n)=>a?qr(e,r,n):Fr(e,r,n),Dr=(e,a,r)=>r?"":a?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,la=({children:e,alignOffset:a=0,alignLeft:r=!1,marginTop:n=0,marginLeft:t=0,hideBorder:s=!1})=>A.jsxs(A.Fragment,{children:[A.jsx("style",{dangerouslySetInnerHTML:{__html:Rr(a,r,n,t)}}),A.jsx("div",{className:Dr(a,r,s),children:e})]});var Ae={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Be;function $r(){return Be||(Be=1,function(e){(function(){var a={}.hasOwnProperty;function r(){for(var s="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(s=t(s,n.call(this,l)))}return s}function n(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var l in s)a.call(s,l)&&s[l]&&(o=t(o,this&&this[l]||l));return o}function t(s,o){return o?s?s+" "+o:s+o:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Ae)),Ae.exports}var Nr=$r();const ve=Pr(Nr),Mr="_borderbox_1vkvn_1",Er="_error_1vkvn_5",Cr="_warning_1vkvn_8",Ir={borderbox:Mr,error:Er,warning:Cr};ve.bind(Ir);const Ar="_aksjonspunkt_kn1hn_1",Br="_erAksjonspunktApent_kn1hn_4",Hr="_erIkkeGodkjentAvBeslutter_kn1hn_8",Vr={aksjonspunkt:Ar,erAksjonspunktApent:Br,erIkkeGodkjentAvBeslutter:Hr};ve.bind(Vr);const me=({dateString:e,year:a,month:r,day:n})=>A.jsx(A.Fragment,{children:U(e,{year:a,month:r,day:n})});V(Z);V(Z);const Lr="_divider_1t980_1",zr="_dividerParagraf_1t980_8",Ur="_leftPanel_1t980_11",Yr="_rightPanel_1t980_14",Wr={divider:Lr,dividerParagraf:zr,leftPanel:Ur,rightPanel:Yr};ve.bind(Wr);const ia=()=>A.jsx("span",{"data-testid":"editedIcon",children:A.jsx($n,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});V(Z);V(Z);const en=({soknad:e,termindato:a})=>{const r=e.fodselsdatoer?e.fodselsdatoer:{},n=Object.keys(r).length>0?"FodselsammenligningPanel.Fodselsdato":"FodselsammenligningPanel.Termindato",t=Object.keys(r).length>0?"FodselSammenligningOtherPanel.OpplysningerISoknad":"FodselSammenligningOtherPanel.TerminISoknad",s=Kr(!!e,r,e.termindato,a);return p.jsxs(te,{gap:"4",children:[p.jsx(ge,{size:"small",children:p.jsx(C,{id:t})}),p.jsxs(J,{gap:"4",children:[e.utstedtdato&&p.jsxs("div",{children:[p.jsx(z,{children:p.jsx(C,{id:"FodselsammenligningPanel.UstedtDato"})}),p.jsx(B,{children:p.jsx(me,{dateString:e.utstedtdato})})]}),p.jsxs("div",{children:[p.jsx(z,{children:p.jsx(C,{id:n})}),p.jsx(B,{children:s})]}),p.jsxs("div",{children:[p.jsx(z,{children:p.jsx(C,{id:"FodselsammenligningPanel.AntallBarn"})}),p.jsx(B,{children:e.antallBarn})]})]})]})},Kr=(e,a,r,n)=>e&&Object.keys(a).length>0?U(Object.values(a)[0]):n?U(n):e?r?U(r):"-":null;en.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningOtherPanel",props:{soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""}}};const nn=({vedtaksDatoSomSvangerskapsuke:e,soknadOriginalBehandling:a,familiehendelseOriginalBehandling:r})=>{const n=r&&!!r.termindato||!a?.fodselsdatoer||Object.keys(a.fodselsdatoer).length===0,t=n?"FodselsammenligningPanel.Termindato":"FodselsammenligningPanel.Fodselsdato",s=Gr(n,a,r),o=Xr(n,a,r),l=r?(!r.avklartBarn||r.avklartBarn.length===0)&&!!e:!1;return p.jsxs(te,{gap:"4",children:[p.jsx(ge,{size:"small",children:p.jsx(C,{id:"FodselsammenligningPanel.Ytelsesvedtak"})}),p.jsxs(J,{gap:"4",children:[l&&p.jsxs("div",{children:[p.jsx(z,{children:p.jsx(C,{id:"FodselsammenligningPanel.FodtISvangerskapsuke"})}),p.jsx(B,{children:e})]}),p.jsxs("div",{children:[p.jsx(z,{children:p.jsx(C,{id:t})}),p.jsx(B,{children:s??"-"})]}),p.jsxs("div",{children:[p.jsx(z,{children:p.jsx(C,{id:"FodselsammenligningPanel.AntallBarn"})}),p.jsx(B,{children:o??"-"})]})]})]})},Gr=(e,a,r)=>{if(!a&&!r)return"";const n=r??{termindato:void 0,avklartBarn:[]};if(e){const t=n?.termindato??a?.termindato;return t?U(t):void 0}return n.avklartBarn?.length?U(n.avklartBarn[0].fodselsdato):a?.fodselsdatoer?U(Object.values(a.fodselsdatoer)[0]):"-"},Xr=(e,a,r)=>{if(!a&&!r)return 0;const n=r??{termindato:void 0,antallBarnTermin:void 0,avklartBarn:[]};return e?n.termindato?n.antallBarnTermin:a?.antallBarn:n.avklartBarn&&n.avklartBarn.length>0?n.avklartBarn.length:a?.antallBarn};nn.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningRevurderingPanel",props:{soknadOriginalBehandling:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const tn=({avklartBarn:e,harDødtBarn:a})=>p.jsxs(te,{gap:"4",children:[p.jsxs(J,{gap:"4",children:[p.jsx(ge,{size:"small",children:p.jsx(C,{id:"FodselsammenligningPanel.OpplysningerFReg"})}),a&&p.jsx(Te,{variant:"info",size:"small",children:p.jsx(C,{id:"FodselsammenligningPanel.Dodfodt"})})]}),e?.length?p.jsxs($,{size:"small",children:[p.jsx($.Header,{children:p.jsxs($.Row,{children:[p.jsx($.HeaderCell,{scope:"col",children:p.jsx(C,{id:"FodselsammenligningPanel.Fodselsdato"})}),a&&p.jsx($.HeaderCell,{scope:"col",children:p.jsx(C,{id:"FodselsammenligningPanel.Dodsdato"})})]})}),p.jsx($.Body,{children:e.map((r,n)=>{const t=r.fodselsdato+r.dodsdato+n;return p.jsxs($.Row,{children:[p.jsx($.DataCell,{children:p.jsx(B,{children:p.jsx(me,{dateString:r.fodselsdato})})}),a&&p.jsx($.DataCell,{children:r.dodsdato?p.jsxs(J,{gap:"4",align:"center",children:[p.jsx(me,{dateString:r.dodsdato}),p.jsx(Te,{variant:"info",size:"small",children:p.jsx(C,{id:"FodselsammenligningPanel.Dod"})})]}):"-"})]},t)})})]}):p.jsx(B,{children:"-"})]});tn.__docgenInfo={description:"",methods:[],displayName:"OpplysningerFraFReg",props:{avklartBarn:{required:!0,tsType:{name:"union",raw:"AvklartBarn[] | undefined",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]"},{name:"undefined"}]},description:""},harDødtBarn:{required:!0,tsType:{name:"boolean"},description:""}}};const Jr=({behandlingsType:e,avklartBarn:a=[],soknad:r,vedtaksDatoSomSvangerskapsuke:n,termindato:t,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:o})=>{const l=!!a.find(u=>!!u.dodsdato);return p.jsxs(J,{gap:"10",children:[p.jsxs("div",{children:[e!==be.REVURDERING&&p.jsx(en,{soknad:r,termindato:t}),e===be.REVURDERING&&p.jsx(nn,{soknadOriginalBehandling:s,familiehendelseOriginalBehandling:o,vedtaksDatoSomSvangerskapsuke:n})]}),p.jsx(tn,{avklartBarn:a,harDødtBarn:l})]})};Jr.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningPanel",props:{behandlingsType:{required:!0,tsType:{name:"string"},description:""},avklartBarn:{required:!1,tsType:{name:"union",raw:"AvklartBarn[] | undefined",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},termindato:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},vedtaksDatoSomSvangerskapsuke:{required:!0,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:""}}};const da={"VarselOmRevurderingForm.VarselOmRevurdering":"Varsel om revurdering","VarselOmRevurderingForm.VarselOmRevurderingVurder":"Vurder om varsel om revurdering skal sendes til søker","VarselOmRevurderingForm.Etterkontroll":"Etterkontroll","VarselOmRevurderingForm.Manuell":"Manuell","VarselOmRevurderingForm.Bekreft":"Bekreft og fortsett","VarselOmRevurderingForm.IkkeSendVarsel":"Ikke send varsel til søker","VarselOmRevurderingForm.SendVarsel":"Send varsel til søker","VarselOmRevurderingForm.FritekstIBrev":"Fritekst i brev","VarselOmRevurderingForm.BegrunnelseForSvar":"Begrunnelse","VarselOmRevurderingForm.BrevBlirBestilt":"Brevet blir bestilt","VarselOmRevurderingForm.Begrunnelse":"Begrunnelse","VarselOmRevurderingForm.UtstedDato":"Utstedt dato","VarselOmRevurderingForm.Ytelsesvedtak":"Vedtak","VarselOmRevurderingForm.OpplysningerISoknad":"Opplysninger om fødsel i søknaden","VarselOmRevurderingForm.Preview":"Forhåndsvis","FodselsammenligningPanel.AntallBarn":"Antall barn","FodselsammenligningPanel.Termindato":"Termindato","FodselsammenligningPanel.FodtISvangerskapsuke":"Født i svangerskapsuke","FodselsammenligningPanel.Svangerskapsuke":"Svangerskapsuke","FodselsammenligningPanel.OpplysningerFReg":"Opplysninger om fødsel fra folkeregisteret","FodselsammenligningPanel.Fodselsdato":"Fødselsdato","FodselsammenligningPanel.Dodsdato":"Dødsdato","FodselsammenligningPanel.UstedtDato":"Utstedt dato","FodselsammenligningPanel.Ytelsesvedtak":"Vedtak","FodselsammenligningPanel.Dodfodt":"Dødfødsel","FodselsammenligningPanel.Dod":"Død","FodselSammenligningOtherPanel.OpplysningerISoknad":"Opplysninger om fødsel fra søknaden","FodselSammenligningOtherPanel.TerminISoknad":"Opplysninger om termin oppgitt i søknaden"};export{B,Qr as D,ea as E,Jr as F,ge as H,oa as K,z as L,C as M,ta as P,An as S,Te as T,te as V,la as W,K as a,W as b,zn as c,se as d,Oe as e,fe as f,ze as g,Ft as h,Ye as i,Ue as j,_n as k,na as l,hn as m,bt as n,ce as o,J as p,gn as q,ia as r,ra as s,V as t,H as u,sa as v,aa as w,da as x};
