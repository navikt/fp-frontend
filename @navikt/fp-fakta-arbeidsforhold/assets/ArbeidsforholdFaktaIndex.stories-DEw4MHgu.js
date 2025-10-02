import{r as _,u as Le,_ as Ie,s as ge,c as en,a as b,R as u,b as Ke,S as je,Q as nn,o as rn,d as G,j as o,X as tn,e as Te,P as fe,f as an,w as ln,g as sn}from"./iframe-CYR4GTdU.js";import"./preload-helper-PPVm8Dsz.js";function on(e,a){var t=e.values,n=Ie(e,["values"]),r=a.values,l=Ie(a,["values"]);return ge(r,t)&&ge(n,l)}function Ge(e){var a=Le(),t=a.formatMessage,n=a.textComponent,r=n===void 0?_.Fragment:n,l=e.id,i=e.description,s=e.defaultMessage,E=e.values,d=e.children,m=e.tagName,N=m===void 0?r:m,g=e.ignoreTag,f={id:l,description:i,defaultMessage:s},c=t(f,E,{ignoreTag:g});return typeof d=="function"?d(Array.isArray(c)?c:[c]):N?_.createElement(N,null,c):_.createElement(_.Fragment,null,c)}Ge.displayName="FormattedMessage";var R=_.memo(Ge,on);R.displayName="MemoizedFormattedMessage";var _e=(e=>(e.PERMISJON="PERMISJON",e.PERMITTERING="PERMITTERING",e.PERMISJON_VED_MILITÆRTJENESTE="PERMISJON_VED_MILITÆRTJENESTE",e.UTDANNINGSPERMISJON_LOVFESTET="UTDANNINGSPERMISJON_LOVFESTET",e.UTDANNINGSPERMISJON="UTDANNINGSPERMISJON",e.UTDANNINGSPERMISJON_IKKE_LOVFESTET="UTDANNINGSPERMISJON_IKKE_LOVFESTET",e.VELFERDSPERMISJON="VELFERDSPERMISJON",e.ANNEN_PERMISJON_LOVFESTET="ANNEN_PERMISJON_LOVFESTET",e.PERMISJON_MED_FORELDREPENGER="PERMISJON_MED_FORELDREPENGER",e.ANNEN_PERMISJON_IKKE_LOVFESTET="ANNEN_PERMISJON_IKKE_LOVFESTET",e))(_e||{});const B=e=>en({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var dn=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};_.forwardRef((e,a)=>{var{className:t,size:n="medium",as:r="p",spacing:l,truncate:i,weight:s="regular",align:E,visuallyHidden:d,textColor:m}=e,N=dn(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:g}=b();return u.createElement(r,Object.assign({},N,{ref:a,className:g(t,"navds-body-long",`navds-body-long--${n}`,B({spacing:l,truncate:i,weight:s,align:E,visuallyHidden:d,textColor:m}))}))});var un=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const k=_.forwardRef((e,a)=>{var{className:t,size:n="medium",as:r="p",spacing:l,truncate:i,weight:s="regular",align:E,visuallyHidden:d,textColor:m}=e,N=un(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:g}=b();return u.createElement(r,Object.assign({},N,{ref:a,className:g(t,"navds-body-short",`navds-body-short--${n}`,B({spacing:l,truncate:i,weight:s,align:E,visuallyHidden:d,textColor:m}))}))});var En=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};_.forwardRef((e,a)=>{var{className:t,size:n="medium",spacing:r,uppercase:l,as:i="p",truncate:s,weight:E="regular",align:d,visuallyHidden:m,textColor:N}=e,g=En(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:f}=b();return u.createElement(i,Object.assign({},g,{ref:a,className:f(t,"navds-detail",B({spacing:r,truncate:s,weight:E,align:d,visuallyHidden:m,textColor:N,uppercase:l}),{"navds-detail--small":n==="small"})}))});var mn=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};_.forwardRef((e,a)=>{var{children:t,className:n,size:r,spacing:l,as:i="p",showIcon:s=!1}=e,E=mn(e,["children","className","size","spacing","as","showIcon"]);const{cn:d}=b();return u.createElement(i,Object.assign({},E,{ref:a,className:d("navds-error-message","navds-label",n,B({spacing:l}),{"navds-label--small":r==="small","navds-error-message--show-icon":s})}),s&&u.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var _n=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Be=_.forwardRef((e,a)=>{var{level:t="1",size:n,className:r,as:l,spacing:i,align:s,visuallyHidden:E,textColor:d}=e,m=_n(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:N}=b(),g=l??`h${t}`;return u.createElement(g,Object.assign({},m,{ref:a,className:N(r,"navds-heading",`navds-heading--${n}`,B({spacing:i,align:s,visuallyHidden:E,textColor:d}))}))});var Nn=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};_.forwardRef((e,a)=>{var{className:t,spacing:n,as:r="p"}=e,l=Nn(e,["className","spacing","as"]);const{cn:i}=b();return u.createElement(r,Object.assign({},l,{ref:a,className:i(t,"navds-ingress",{"navds-typo--spacing":!!n})}))});var In=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const me=_.forwardRef((e,a)=>{var{className:t,size:n="medium",as:r="label",spacing:l,visuallyHidden:i,textColor:s}=e,E=In(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:d}=b();return u.createElement(r,Object.assign({},E,{ref:a,className:d(t,"navds-label",B({spacing:l,visuallyHidden:i,textColor:s}),{"navds-label--small":n==="small"})}))});function gn(e,a){const t=Object.entries(e).filter(([n])=>!a.includes(n));return Object.fromEntries(t)}let ce=0;function Tn(e){const[a,t]=_.useState(e),n=e||a;return _.useEffect(()=>{a==null&&(ce+=1,t(`aksel-id-${ce}`))},[a]),n}const Re=u.useId;function fn(e){var a;return Re!==void 0?Re().replace(/(:)/g,""):(a=Tn(e))!==null&&a!==void 0?a:""}function be(e,a=[]){const t=_.useRef(e);return _.useEffect(()=>{t.current=e}),_.useCallback(((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)}),a)}function cn({value:e,defaultValue:a,onChange:t}){const n=be(t),[r,l]=_.useState(a),i=e!==void 0,s=i?e:r,E=be(d=>{const N=typeof d=="function"?d(s):d;i||l(N),n(N)},[i,n,s]);return[s,E]}let ve=0;function Rn(e){const[a,t]=_.useState(e),n=e||a;return _.useEffect(()=>{a==null&&(ve+=1,t(`aksel-icon-${ve}`))},[a]),n}const Se=u.useId;function C(e){var a;return Se!==void 0?Se().replace(/(:)/g,""):(a=Rn(e))!==null&&a!==void 0?a:""}var bn=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const vn=_.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=bn(e,["title","titleId"]);let l=C();return l=t?n||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":l},r),t?u.createElement("title",{id:l},t):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var Sn=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const pn=_.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=Sn(e,["title","titleId"]);let l=C();return l=t?n||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":l},r),t?u.createElement("title",{id:l},t):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var On=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Dn=_.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=On(e,["title","titleId"]);let l=C();return l=t?n||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":l},r),t?u.createElement("title",{id:l},t):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var An=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const kn=_.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=An(e,["title","titleId"]);let l=C();return l=t?n||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":l},r),t?u.createElement("title",{id:l},t):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var yn=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const hn=_.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=yn(e,["title","titleId"]);let l=C();return l=t?n||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":l},r),t?u.createElement("title",{id:l},t):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .672.418l2.765 5.601 6.181.899a.75.75 0 0 1 .416 1.279l-4.473 4.36 1.056 6.156a.75.75 0 0 1-1.088.791l-5.53-2.907-5.528 2.907a.75.75 0 0 1-1.088-.79l1.056-6.157-4.473-4.36a.75.75 0 0 1 .415-1.28l6.182-.898 2.764-5.6A.75.75 0 0 1 12 2.25",clipRule:"evenodd"}))});function we(e,a,{checkForDefaultPrevented:t=!0}={}){return function(r){if(e?.(r),t===!1||!r.defaultPrevented)return a?.(r)}}function ue(e){return(a={})=>{const t=a.width?String(a.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function V(e){return(a,t)=>{const n=t?.context?String(t.context):"standalone";let r;if(n==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,s=t?.width?String(t.width):i;r=e.formattingValues[s]||e.formattingValues[i]}else{const i=e.defaultWidth,s=t?.width?String(t.width):e.defaultWidth;r=e.values[s]||e.values[i]}const l=e.argumentCallback?e.argumentCallback(a):a;return r[l]}}function U(e){return(a,t={})=>{const n=t.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],l=a.match(r);if(!l)return null;const i=l[0],s=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],E=Array.isArray(s)?Pn(s,N=>N.test(i)):Mn(s,N=>N.test(i));let d;d=e.valueCallback?e.valueCallback(E):E,d=t.valueCallback?t.valueCallback(d):d;const m=a.slice(i.length);return{value:d,rest:m}}}function Mn(e,a){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&a(e[t]))return t}function Pn(e,a){for(let t=0;t<e.length;t++)if(a(e[t]))return t}function Ln(e){return(a,t={})=>{const n=a.match(e.matchPattern);if(!n)return null;const r=n[0],l=a.match(e.parsePattern);if(!l)return null;let i=e.valueCallback?e.valueCallback(l[0]):l[0];i=t.valueCallback?t.valueCallback(i):i;const s=a.slice(r.length);return{value:i,rest:s}}}const Kn={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},jn=(e,a,t)=>{let n;const r=Kn[e];return typeof r=="string"?n=r:a===1?n=r.one:n=r.other.replace("{{count}}",String(a)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+n:n+" siden":n},Gn={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Bn={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},wn={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},xn={date:ue({formats:Gn,defaultWidth:"full"}),time:ue({formats:Bn,defaultWidth:"full"}),dateTime:ue({formats:wn,defaultWidth:"full"})},Fn={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Vn=(e,a,t,n)=>Fn[e],Un={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Jn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Hn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},qn={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Cn={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Yn=(e,a)=>Number(e)+".",$n={ordinalNumber:Yn,era:V({values:Un,defaultWidth:"wide"}),quarter:V({values:Jn,defaultWidth:"wide",argumentCallback:e=>e-1}),month:V({values:Hn,defaultWidth:"wide"}),day:V({values:qn,defaultWidth:"wide"}),dayPeriod:V({values:Cn,defaultWidth:"wide"})},zn=/^(\d+)\.?/i,Wn=/\d+/i,Xn={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Qn={any:[/^f/i,/^e/i]},Zn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},er={any:[/1/i,/2/i,/3/i,/4/i]},nr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},rr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},tr={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},ar={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},lr={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},ir={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},sr={ordinalNumber:Ln({matchPattern:zn,parsePattern:Wn,valueCallback:e=>parseInt(e,10)}),era:U({matchPatterns:Xn,defaultMatchWidth:"wide",parsePatterns:Qn,defaultParseWidth:"any"}),quarter:U({matchPatterns:Zn,defaultMatchWidth:"wide",parsePatterns:er,defaultParseWidth:"any",valueCallback:e=>e+1}),month:U({matchPatterns:nr,defaultMatchWidth:"wide",parsePatterns:rr,defaultParseWidth:"any"}),day:U({matchPatterns:tr,defaultMatchWidth:"wide",parsePatterns:ar,defaultParseWidth:"any"}),dayPeriod:U({matchPatterns:lr,defaultMatchWidth:"any",parsePatterns:ir,defaultParseWidth:"any"})},or={code:"nb",formatDistance:jn,formatLong:xn,formatRelative:Vn,localize:$n,match:sr,options:{weekStartsOn:1,firstWeekContainsDate:4}},dr={global:{dateLocale:or,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},Process:{active:"Aktiv"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},ur=_.createContext({locale:dr}),Er=()=>_.useContext(ur),pe=/(\w+)/g;function mr(e,a){const t=Array.isArray(e)?e:_r(e);for(const n of a){if(!n)continue;let r=n;for(let l=0;l<t.length;l++){const i=r[t[l]];i!==void 0&&(r=i)}if(typeof r=="string")return r}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function _r(e){const a=[];let t=pe.exec(e);for(;t;){const[,n,r]=t;a.push(n||r),t=pe.exec(e)}return a}const Nr=/{[^}]*}/g;function Ir(e,...a){const t=Er(),n=t.translations||[],r=[...a,...Array.isArray(n)?n.map(i=>i[e]):[n[e]],t.locale[e]];return(i,s)=>{const E=mr(i,r);return s?E.replace(Nr,d=>{const m=d.substring(1,d.length-1);if(s[m]===void 0){const N=JSON.stringify(s);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${m}'. The following replacements were passed: '${N}'`)}return s[m]}):E}}function v(e,a,t,n){return n?typeof n=="string"?{[`--__${e}c-${a}-${t}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([r,l])=>[`--__${e}c-${a}-${t}-${r}`,l])):{}}const gr={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Oe=(e,a,t,n,r,l)=>a.split(" ").map((i,s,E)=>{var d;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/E.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/E.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let m=`var(--${l}-${t}-${i})`;if(n.includes(i))m=i==="px"?"1px":i;else if(i.startsWith("space"))m=`var(--${l}-${i})`;else{const N=`--${l}-spacing-${i}`;m=`var(${(d=gr[N])!==null&&d!==void 0?d:N})`}return r?i==="0"?"0":`calc(-1 * ${m})`:m}).join(" ");function A(e,a,t,n,r,l=!1,i=[]){if(!r)return{};if(typeof r=="string")return{[`--__${e}c-${a}-${t}-xs`]:Oe(t,r,n,i,l,e)};const s={};return Object.entries(r).forEach(([E,d])=>{s[`--__${e}c-${a}-${t}-${E}`]=Oe(t,d,n,i,l,e)}),s}const Tr=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],fr=({children:e,className:a,padding:t,paddingInline:n,paddingBlock:r,margin:l,marginInline:i,marginBlock:s,width:E,minWidth:d,maxWidth:m,height:N,minHeight:g,maxHeight:f,position:c,inset:S,top:p,right:h,left:j,bottom:M,overflow:K,overflowX:P,overflowY:D,flexBasis:w,flexGrow:$,flexShrink:x,gridColumn:F})=>{const O=Ke(!1),{cn:L}=b(),I=O?.isDarkside?"ax":"a",z=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},A(I,"r","p","spacing",t)),A(I,"r","pi","spacing",n)),A(I,"r","pb","spacing",r)),A(I,"r","m","spacing",l)),A(I,"r","mi","spacing",i)),A(I,"r","mb","spacing",s)),v(I,"r","w",E)),v(I,"r","minw",d)),v(I,"r","maxw",m)),v(I,"r","h",N)),v(I,"r","minh",g)),v(I,"r","maxh",f)),v(I,"r","position",c)),A(I,"r","inset","spacing",S)),A(I,"r","top","spacing",p)),A(I,"r","right","spacing",h)),A(I,"r","bottom","spacing",M)),A(I,"r","left","spacing",j)),v(I,"r","overflow",K)),v(I,"r","overflowx",P)),v(I,"r","overflowy",D)),v(I,"r","flex-basis",w)),v(I,"r","flex-grow",$)),v(I,"r","flex-shrink",x)),v(I,"r","grid-column",F));return u.createElement(je,{className:L({className:a,"navds-r-p":t,"navds-r-pi":n,"navds-r-pb":r,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":s,"navds-r-w":E,"navds-r-minw":d,"navds-r-maxw":m,"navds-r-h":N,"navds-r-minh":g,"navds-r-maxh":f,"navds-r-position":c,"navds-r-inset":S,"navds-r-top":p,"navds-r-right":h,"navds-r-bottom":M,"navds-r-left":j,"navds-r-overflow":K,"navds-r-overflowx":P,"navds-r-overflowy":D,"navds-r-flex-basis":w,"navds-r-flex-grow":$,"navds-r-flex-shrink":x,"navds-r-grid-column":F}),style:z},e)};var cr=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const xe=_.forwardRef((e,a)=>{var{children:t,className:n,as:r="div",align:l,justify:i,wrap:s=!0,gap:E,style:d,direction:m="row",asChild:N}=e,g=cr(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const f=Ke(!1),c=f?.isDarkside?"ax":"a",{cn:S}=b(),p=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),A(c,"stack","gap","spacing",E)),v(c,"stack","direction",m)),v(c,"stack","align",l)),v(c,"stack","justify",i)),h=N?je:r;return u.createElement(fr,Object.assign({},g),u.createElement(h,Object.assign({},gn(g,Tr),{ref:a,style:p,className:S("navds-stack",n,{"navds-vstack":m==="column","navds-hstack":m==="row","navds-stack-gap":E,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":m,"navds-stack-wrap":s})}),t))});var Rr=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};_.forwardRef((e,a)=>{var{as:t="div"}=e,n=Rr(e,["as"]);return u.createElement(xe,Object.assign({as:t},n,{ref:a,direction:"row"}))});var br=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Fe=_.forwardRef((e,a)=>{var{as:t="div"}=e,n=br(e,["as"]);return u.createElement(xe,Object.assign({as:t},n,{ref:a,direction:"column",wrap:!1}))});var vr=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Sr=_.forwardRef((e,a)=>{var{className:t}=e,n=vr(e,["className"]);const{cn:r}=b();return u.createElement("tbody",Object.assign({},n,{ref:a,className:r("navds-table__body",t)}))});var pr=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Ve=_.forwardRef((e,a)=>{var{className:t,children:n,align:r,textSize:l}=e,i=pr(e,["className","children","align","textSize"]);const{cn:s}=b();return u.createElement("th",Object.assign({ref:a,className:s("navds-table__header-cell","navds-label",t,{[`navds-table__header-cell--align-${r}`]:r,"navds-label--small":l==="small"})},i),n)}),Ue=_.createContext(null);var Or=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Dr=_.forwardRef((e,a)=>{var t,n,r,l,{className:i,children:s,sortable:E=!1,sortKey:d}=e,m=Or(e,["className","children","sortable","sortKey"]);const N=_.useContext(Ue),{cn:g}=b();return E&&!d&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),u.createElement(Ve,Object.assign({scope:"col",ref:a,className:g(i),"aria-sort":E?((t=N?.sort)===null||t===void 0?void 0:t.orderBy)===d?(n=N?.sort)===null||n===void 0?void 0:n.direction:"none":void 0},m),E?u.createElement("button",{type:"button",className:g("navds-table__sort-button"),onClick:E&&d?()=>{var f;return(f=N?.onSortChange)===null||f===void 0?void 0:f.call(N,d)}:void 0},s,((r=N?.sort)===null||r===void 0?void 0:r.orderBy)===d?((l=N?.sort)===null||l===void 0?void 0:l.direction)==="descending"?u.createElement(Dn,{"aria-hidden":!0}):u.createElement(kn,{"aria-hidden":!0}):u.createElement(vn,{"aria-hidden":!0})):s)});var Ar=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Je=_.forwardRef((e,a)=>{var{className:t,children:n="",align:r,textSize:l}=e,i=Ar(e,["className","children","align","textSize"]);const{cn:s}=b();return u.createElement(k,Object.assign({as:"td",ref:a,className:s("navds-table__data-cell",t,{[`navds-table__data-cell--align-${r}`]:r}),size:l},i),n)});var kr=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const yr=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function hr(e){const a=parseFloat(e);return!Number.isNaN(a)&&Number.isFinite(a)}function De(e){return typeof e=="string"&&e[e.length-1]==="%"&&hr(e.substring(0,e.length-1))}function Ee(e,a){a===0&&e?.style&&(e.style.display="none")}function Mr(e,a){a===0&&e?.style&&(e.style.display="")}const Pr=e=>{var{children:a,className:t,innerClassName:n,duration:r=250,easing:l="ease",height:i}=e,s=kr(e,["children","className","innerClassName","duration","easing","height"]);const{cn:E}=b(),d=_.useRef(i),m=_.useRef(null),N=_.useRef(),g=_.useRef(),f=_.useRef(i),c=_.useRef("visible"),S=yr?0:r;typeof f.current=="number"?(typeof i!="string"&&(f.current=i<0?0:i),c.current="hidden"):De(f.current)&&(f.current=i==="0%"?0:i,c.current="hidden");const[p,h]=_.useState(f.current),[j,M]=_.useState(c.current),[K,P]=_.useState(!1);_.useEffect(()=>{Ee(m.current,f.current)},[]),_.useEffect(()=>{if(i!==d.current&&m.current){Mr(m.current,d.current),m.current.style.overflow="hidden";const x=m.current.offsetHeight;m.current.style.overflow="";const F=S;let O,L,I="hidden",z;const de=d.current==="auto";typeof i=="number"?(O=i<0?0:i,L=O):De(i)?(O=i==="0%"?0:i,L=O):(O=x,L="auto",I=void 0),de&&(L=O,O=x),h(O),M("hidden"),P(!de),clearTimeout(g.current),clearTimeout(N.current),de?(z=!0,g.current=setTimeout(()=>{h(L),M(I),P(z)},50),N.current=setTimeout(()=>{P(!1),Ee(m.current,L)},F)):g.current=setTimeout(()=>{h(L),M(I),P(!1),i!=="auto"&&Ee(m.current,O)},F)}return d.current=i,()=>{clearTimeout(g.current),clearTimeout(N.current)}},[i]);const D={height:p,overflow:j};K&&(D.transition=`height ${S}ms ${l} 0ms`,D.WebkitTransition=D.transition);const $=typeof s["aria-hidden"]<"u"?s["aria-hidden"]:i===0;return u.createElement("div",Object.assign({},s,{className:E(t),style:D}),u.createElement("div",{"aria-hidden":$,className:E(n),ref:m},a))},Lr=new Set(["BUTTON","A","INPUT","SELECT","TEXTAREA","DETAILS","SUMMARY","LABEL"]),Kr=new Set(["button","link","checkbox","radio","switch","menuitem","option","tab","textbox","combobox","spinbutton","slider"]);function He(e){for(let a=e;a&&a.nodeName!=="TR"&&a.nodeName!=="TH";a=a.parentElement){const t=a.nodeName;if(Lr.has(t))return!0;const n=a.getAttribute("role");if(n&&Kr.has(n)||a.hasAttribute("tabindex")&&a.getAttribute("tabindex")!=="-1")return!0}return!1}var jr=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const qe=_.forwardRef((e,a)=>{var{className:t,selected:n=!1,shadeOnHover:r=!0,onClick:l,onRowClick:i}=e,s=jr(e,["className","selected","shadeOnHover","onClick","onRowClick"]);const{cn:E}=b(),d=m=>{i&&(He(m.target)||i(m))};return u.createElement("tr",Object.assign({},s,{ref:a,className:E("navds-table__row",t,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":r}),onClick:we(l,d),"data-interactive":!!i}))});var Gr=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Br=_.forwardRef((e,a)=>{var{className:t,children:n,content:r,togglePlacement:l="left",defaultOpen:i=!1,open:s,onOpenChange:E,expansionDisabled:d=!1,expandOnRowClick:m=!1,colSpan:N=999,contentGutter:g,onClick:f}=e,c=Gr(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:S}=b(),[p,h]=cn({defaultValue:i,value:s,onChange:E}),j=Ir("global"),M=fn(),K=D=>{h(w=>!w),D.stopPropagation()},P=D=>{m&&!d&&!He(D.target)&&K(D)};return u.createElement(u.Fragment,null,u.createElement(qe,Object.assign({},c,{ref:a,className:S("navds-table__expandable-row",t,{"navds-table__expandable-row--open":p,"navds-table__expandable-row--expansion-disabled":d,"navds-table__expandable-row--clickable":m}),onClick:we(f,P)}),l==="right"&&n,u.createElement(Je,{className:S("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":p}),onClick:d?()=>null:K},!d&&u.createElement("button",{className:S("navds-table__toggle-expand-button"),type:"button","aria-controls":M,"aria-expanded":p,onClick:K},u.createElement(pn,{className:S("navds-table__expandable-icon"),title:j(p?"showLess":"showMore")}))),l==="left"&&n),u.createElement("tr",{"data-state":p?"open":"closed",className:S("navds-table__expanded-row"),"aria-hidden":!p,id:M},u.createElement("td",{colSpan:N,className:S("navds-table__expanded-row-cell")},u.createElement(Pr,{className:S("navds-table__expanded-row-collapse"),innerClassName:S(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${g??l}`),height:p?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},r))))});var wr=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const xr=_.forwardRef((e,a)=>{var{className:t}=e,n=wr(e,["className"]);const{cn:r}=b();return u.createElement("thead",Object.assign({},n,{ref:a,className:r("navds-table__header",t)}))});var Fr=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const T=_.forwardRef((e,a)=>{var{className:t,zebraStripes:n=!1,size:r="medium",onSortChange:l,sort:i,stickyHeader:s=!1}=e,E=Fr(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:d}=b();return u.createElement(Ue.Provider,{value:{onSortChange:l,sort:i}},u.createElement("table",Object.assign({},E,{ref:a,className:d("navds-table",`navds-table--${r}`,t,{"navds-table--zebra-stripes":n,"navds-table--sticky-header":s})})))});T.Header=xr;T.Body=Sr;T.Row=qe;T.ColumnHeader=Dr;T.HeaderCell=Ve;T.DataCell=Je;T.ExpandableRow=Br;var Ce=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(Ce||{});function Vr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ae={exports:{}},J={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ke;function Ur(){if(ke)return J;ke=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function t(n,r,l){var i=null;if(l!==void 0&&(i=""+l),r.key!==void 0&&(i=""+r.key),"key"in r){l={};for(var s in r)s!=="key"&&(l[s]=r[s])}else l=r;return r=l.ref,{$$typeof:e,type:n,key:i,ref:r!==void 0?r:null,props:l}}return J.Fragment=a,J.jsx=t,J.jsxs=t,J}var ye;function Jr(){return ye||(ye=1,Ae.exports=Ur()),Ae.exports}var ie=Jr();const Y={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};G(Y);var he={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Me;function Hr(){return Me||(Me=1,(function(e){(function(){var a={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=r(l,n.call(this,s)))}return l}function n(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)a.call(l,s)&&l[s]&&(i=r(i,this&&this[s]||s));return i}function r(l,i){return i?l?l+" "+i:l+i:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(he)),he.exports}var qr=Hr();const Ne=Vr(qr),Cr="_borderbox_1a0x6_1",Yr="_error_1a0x6_5",$r="_warning_1a0x6_8",zr={borderbox:Cr,error:Yr,warning:$r};Ne.bind(zr);const Wr="_aksjonspunkt_11wjs_1",Xr="_erAksjonspunktApent_11wjs_4",Qr="_erIkkeGodkjentAvBeslutter_11wjs_8",Zr={aksjonspunkt:Wr,erAksjonspunktApent:Xr,erIkkeGodkjentAvBeslutter:Qr};Ne.bind(Zr);const Ye=({dateString:e,year:a,month:t,day:n})=>ie.jsx(ie.Fragment,{children:rn(e,{year:a,month:t,day:n})});G(Y);const $e=({dateStringFom:e,dateStringTom:a,showTodayString:t=!1})=>ie.jsx(ie.Fragment,{children:nn(e,a,{showTodayString:t})});G(Y);const et="_divider_1jpov_1",nt="_dividerParagraf_1jpov_8",rt="_leftPanel_1jpov_11",tt="_rightPanel_1jpov_14",at={divider:et,dividerParagraf:nt,leftPanel:rt,rightPanel:tt};Ne.bind(at);G(Y);G(Y);var q=(e=>(e.BRUK_PERMISJON="BRUK_PERMISJON",e.IKKE_BRUK_PERMISJON="IKKE_BRUK_PERMISJON",e))(q||{});const ze=({arbeidsforhold:e})=>e.permisjonOgMangel?o.jsxs("div",{children:[o.jsx(me,{size:"small",children:o.jsx(R,{id:"PermisjonPeriode.Permisjon"})}),o.jsx(k,{size:"small",children:o.jsx($e,{dateStringFom:e.permisjonOgMangel.permisjonFom,dateStringTom:e.permisjonOgMangel.permisjonTom})})]}):null;ze.__docgenInfo={description:"",methods:[],displayName:"PermisjonPeriode",props:{arbeidsforhold:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}},description:""}}};const We=({valgtArbeidsforhold:e})=>{const a=e.saksbehandlersVurdering==="BRUK",t=e.saksbehandlersVurdering==="FORTSETT_UTEN_INNTEKTSMELDING",n=e.saksbehandlersVurdering==="BRUK_MED_OVERSTYRT_PERIODE",r=e.saksbehandlersVurdering==="IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",l=e.saksbehandlersVurdering==="OPPRETT_BASERT_PÅ_INNTEKTSMELDING",i=e.saksbehandlersVurdering==="MANUELT_OPPRETTET_AV_SAKSBEHANDLER",s=e.permisjonOgMangel?.permisjonStatus===q.BRUK_PERMISJON,E=e.permisjonOgMangel?.permisjonStatus===q.IKKE_BRUK_PERMISJON,d=lt(e);return o.jsxs(Fe,{gap:"space-16",children:[o.jsx(Be,{size:"small",level:"3",children:o.jsx(R,{id:"ArbeidsforholdDetail.Header"})}),o.jsx(ze,{arbeidsforhold:e}),n&&o.jsxs(o.Fragment,{children:[o.jsx(k,{size:"small",children:o.jsx(R,{id:"ArbeidsforholdDetail.ArbeidsforholdetErIkkeAktivt"})}),o.jsxs("div",{children:[o.jsx(me,{size:"small",children:o.jsx(R,{id:"ArbeidsforholdDetail.ArbeidsforholdetAktivTomDato"})}),o.jsx(k,{size:"small",children:d?o.jsx(Ye,{dateString:d}):"-"})]})]}),a&&s&&o.jsx(k,{size:"small",children:o.jsx(R,{id:"ArbeidsforholdDetail.SokerErIPermisjon"})}),l&&o.jsx(k,{size:"small",children:o.jsx(R,{id:"ArbeidsforholdDetail.OppdatertGittIm"})}),(i||(a||t)&&(!e.permisjonOgMangel||E))&&o.jsxs(o.Fragment,{children:[o.jsx(k,{size:"small",children:o.jsx(R,{id:it(e)})}),t&&o.jsx(k,{size:"small",children:o.jsx(R,{id:"ArbeidsforholdDetail.BenyttAInntektIBeregningsgrunnlag"})}),!t&&!i&&o.jsx(k,{size:"small",children:o.jsx(R,{id:"ArbeidsforholdDetail.AvslaYtelseManglendeOpplysninger"})})]}),r&&o.jsx(k,{size:"small",children:o.jsx(R,{id:"ArbeidsforholdDetail.FjernArbeidsforholdet"})}),o.jsxs("div",{children:[o.jsx(me,{size:"small",children:o.jsx(R,{id:"ArbeidsforholdDetail.Begrunnelse"})}),o.jsx(k,{size:"small",children:e.begrunnelse})]})]})},lt=e=>{if(e.saksbehandlersVurdering==="BRUK_MED_OVERSTYRT_PERIODE")return e.tom},it=e=>e.permisjonOgMangel?"ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon":e.saksbehandlersVurdering==="MANUELT_OPPRETTET_AV_SAKSBEHANDLER"?"ArbeidsforholdDetail.OppdaterArbeidsforhold":"ArbeidsforholdDetail.ArbeidsforholdErAktivt";We.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdDetail",props:{valgtArbeidsforhold:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}},description:""}}};const Xe=({alleArbeidsforhold:e,arbeidsgiverOpplysningerPerId:a,inntektsmeldinger:t})=>{const n=Le();return o.jsxs(T,{children:[o.jsx(T.Header,{children:o.jsxs(T.Row,{children:[o.jsx(T.HeaderCell,{scope:"col"}),o.jsx(T.HeaderCell,{scope:"col",children:o.jsx(R,{id:"PersonArbeidsforholdTable.Arbeidsforhold",values:{br:H}})}),o.jsx(T.HeaderCell,{scope:"col",children:o.jsx(R,{id:"PersonArbeidsforholdTable.Periode",values:{br:H}})}),o.jsx(T.HeaderCell,{scope:"col",children:o.jsx(R,{id:"PersonArbeidsforholdTable.Kilde",values:{br:H}})}),o.jsx(T.HeaderCell,{scope:"col",children:o.jsx(R,{id:"PersonArbeidsforholdTable.Stillingsprosent",values:{br:H}})}),o.jsx(T.HeaderCell,{scope:"col",children:o.jsx(R,{id:"PersonArbeidsforholdTable.MottattDato",values:{br:H}})}),o.jsx(T.HeaderCell,{scope:"col"})]})}),o.jsx(T.Body,{children:e.map(r=>{const l=`${r.stillingsprosent?.toFixed(2)} %`,i=t.find(s=>se(r,s))?.motattDato;return o.jsxs(T.ExpandableRow,{content:r.saksbehandlersVurdering?o.jsx(We,{valgtArbeidsforhold:r}):null,expandOnRowClick:!0,expansionDisabled:!r.saksbehandlersVurdering,children:[o.jsx(T.DataCell,{textSize:"small",children:ot(r,e,a)}),o.jsx(T.DataCell,{textSize:"small",children:o.jsx($e,{dateStringFom:r.fom,dateStringTom:r.tom})}),o.jsx(T.DataCell,{textSize:"small",children:st(r,n)}),o.jsx(T.DataCell,{textSize:"small",children:l}),o.jsx(T.DataCell,{textSize:"small",children:i&&o.jsx(Ye,{dateString:i})}),o.jsx(T.DataCell,{textSize:"small",children:(r.saksbehandlersVurdering==="BRUK"||r.saksbehandlersVurdering==="FORTSETT_UTEN_INNTEKTSMELDING")&&o.jsx(hn,{color:"var(--ax-warning-700)",height:"20px",width:"25px",title:n.formatMessage({id:"PersonArbeidsforholdTable.ErIBruk"})})})]},dt(r,a))})})]})},H=o.jsx("br",{},"break-line"),st=(e,a)=>e.saksbehandlersVurdering==="OPPRETT_BASERT_PÅ_INNTEKTSMELDING"?a.formatMessage({id:"PersonArbeidsforholdTable.Inntektsmelding"}):e.saksbehandlersVurdering==="MANUELT_OPPRETTET_AV_SAKSBEHANDLER"?a.formatMessage({id:"PersonArbeidsforholdTable.Saksbehandler"}):a.formatMessage({id:"PersonArbeidsforholdTable.AaRegisteret"}),se=(e,a)=>a.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!a.internArbeidsforholdId||a.internArbeidsforholdId===e.internArbeidsforholdId),ot=({saksbehandlersVurdering:e,eksternArbeidsforholdId:a,arbeidsgiverIdent:t},n,r)=>{const l=r[t];if(!l)return"Fant ikke arbeidsgivernavn";if(e==="MANUELT_OPPRETTET_AV_SAKSBEHANDLER")return l.navn;const i=n.filter(s=>s.arbeidsgiverIdent===t).length>1?a:void 0;return tn(l,i??void 0)},dt=(e,a)=>{const t=a[e.arbeidsgiverIdent];return`${e.eksternArbeidsforholdId}${e.arbeidsgiverIdent}${t?.identifikator}`};Xe.__docgenInfo={description:"",methods:[],displayName:"PersonArbeidsforholdTable",props:{alleArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"AoIArbeidsforhold[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Inntektsmelding[]"},description:""}}};const Qe=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:a})=>{const{arbeidsforhold:t,inntektsmeldinger:n}=e,r=t.toSorted(ut(a,n));return o.jsxs(Fe,{gap:"space-16",children:[o.jsx(Be,{size:"small",level:"3",children:o.jsx(R,{id:"ArbeidsforholdInfoPanel.ArbeidsforholdHeader"})}),r.length===0&&o.jsx(R,{id:"PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert"}),r.length>0&&o.jsx(Xe,{alleArbeidsforhold:r,arbeidsgiverOpplysningerPerId:a,inntektsmeldinger:n})]})},Pe=(e,a)=>a.some(t=>se(e,t)),ut=(e,a)=>(t,n)=>{const r=e[t.arbeidsgiverIdent],l=e[n.arbeidsgiverIdent];if(r&&l){const E=r.navn.localeCompare(l.navn);if(E!==0)return E}const i=Pe(t,a),s=Pe(n,a);if(i&&s){const E=a.find(m=>se(t,m))?.motattDato,d=a.find(m=>se(n,m))?.motattDato;return Te(d,fe).diff(Te(E,fe))}return i?-1:s?1:t.arbeidsgiverIdent.localeCompare(n.arbeidsgiverIdent)};Qe.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInfoPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  arbeidsforhold: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidsforholdDto>;
  inntekter: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektDto>;
  inntektsmeldinger: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektsmeldingDto>;
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidsforholdDto>",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter?: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektspostDto>;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektspostDto>",required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektDto>",required:!0}},{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektsmeldingDto>",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Et={"ArbeidsforholdInfoPanel.ArbeidsforholdHeader":"Arbeidsforhold som er aktive ved permisjonsstart","PersonArbeidsforholdTable.Arbeidsforhold":"{br}Arbeidsforhold","PersonArbeidsforholdTable.Periode":"{br}Periode","PersonArbeidsforholdTable.Kilde":"{br}Kilde","PersonArbeidsforholdTable.Stillingsprosent":"{br}Stillingsprosent","PersonArbeidsforholdTable.MottattDato":"Inntektsmeld.{br}mottatt dato","PersonArbeidsforholdTable.ErIBruk":"Arbeidsforhold skal brukes","PersonArbeidsforholdTable.IngenArbeidsforhold":"Det finnes ingen arbeidsforhold","PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert":"Ingen arbeidsforhold registrert","PersonArbeidsforholdTable.LeggTilArbeidsforhold":"Legg til arbeidsforhold","ArbeidsforholdDetail.Header":"Detaljer","ArbeidsforholdDetail.ArbeidsforholdErAktivt":"Arbeidsforholdet er aktivt og skal benyttes i behandlingen. Nødvendig inntektsmelding er ikke mottatt.","ArbeidsforholdDetail.OppdaterArbeidsforhold":"Arbeidsforhold er manuelt opprettet av saksbehandler","ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon":"Søker er ikke i permisjon. Arbeidsforholdet er aktivt og skal benyttes i behandlingen.","ArbeidsforholdDetail.FjernArbeidsforholdet":"Fjern arbeidsforholdet for denne behandlingen","ArbeidsforholdDetail.IMIkkeRelevant":"Inntektsmeldingen er ikke relevant, gå videre uten disse opplysningene","ArbeidsforholdDetail.ArbeidsforholdetErIkkeAktivt":"Arbeidsforholdet er ikke aktivt. Inntektsmelding er ikke nødvendig.","ArbeidsforholdDetail.ArbeidsforholdetAktivTomDato":"Arbeidsforhold aktivt tom. dato","ArbeidsforholdDetail.AvslaYtelseManglendeOpplysninger":"Ytelsen kan avslås på grunn av manglende opplysninger.","ArbeidsforholdDetail.BenyttAInntektIBeregningsgrunnlag":"Fortsett behandling uten inntektsmelding, inntekt fra A-inntekt benyttes i beregningsgrunnlaget.","ArbeidsforholdDetail.Begrunnelse":"Begrunn endringene","ArbeidsforholdDetail.SokerErIPermisjon":"Søker er i permisjon. Inntektsmelding er ikke nødvendig.","ArbeidsforholdDetail.OppdatertGittIm":"Arbeidsforholdet er opprettet basert på motatt inntektsmelding","PersonArbeidsforholdTable.Inntektsmelding":"Inntektsmelding","PersonArbeidsforholdTable.Saksbehandler":"Saksbehandler","PersonArbeidsforholdTable.AaRegisteret":"Aa-registeret","PermisjonPeriode.Permisjon":"Permisjon","PermisjonPeriode.Permisjoner":"Permisjoner"},mt=G(Et),Ze=e=>o.jsx(an,{value:mt,children:o.jsx(Qe,{...e})});Ze.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  arbeidsforhold: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidsforholdDto>;
  inntekter: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektDto>;
  inntektsmeldinger: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektsmeldingDto>;
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidsforholdDto>",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter?: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektspostDto>;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektspostDto>",required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektDto>",required:!0}},{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektsmeldingDto>",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const oe={arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",innsendingstidspunkt:"2021-12-06T00:00:00",kildeSystem:"Altinn",bortfalteNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",behandlingsIdeer:[],tilknyttedeBehandlingIder:[],aktiveNaturalytelser:[]},y={arbeidsgiverIdent:"",fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse"},_t={11212:{erPrivatPerson:!1,identifikator:"23232",referanse:"11212",navn:"Vy"},999999999:{erPrivatPerson:!1,identifikator:"999999999",referanse:"999999999",navn:"KIWI"},999999998:{erPrivatPerson:!1,identifikator:"999999998",referanse:"999999998",navn:"REMA 1000"}},gt={title:"fakta/fakta-arbeidsforhold",component:Ze,decorators:[ln,sn],args:{arbeidsgiverOpplysningerPerId:_t,isReadOnly:!0}},W={args:{arbeidOgInntekt:{arbeidsforhold:[{...y,arbeidsgiverIdent:"999999999",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2000-04-19",tom:"9999-12-31",saksbehandlersVurdering:"FORTSETT_UTEN_INNTEKTSMELDING",begrunnelse:"Dette er en begrunnelse 3"}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2022-01-31"}}},X={args:{arbeidOgInntekt:{arbeidsforhold:[{...y,arbeidsgiverIdent:"999999999",fom:"2022-01-31",tom:"9999-12-31",stillingsprosent:100,saksbehandlersVurdering:"MANUELT_OPPRETTET_AV_SAKSBEHANDLER",begrunnelse:"Dette er en begrunnelse 4"}],inntektsmeldinger:[{...oe,inntektPrMnd:4e4,arbeidsgiverIdent:"999999999",kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"510870400",motattDato:"2021-12-13",dokumentId:"1"}],inntekter:[],skjæringstidspunkt:"2021-03-26"}}},Q={args:{arbeidOgInntekt:{arbeidsforhold:[{...y,arbeidsgiverIdent:"999999999",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,saksbehandlersVurdering:"BRUK_MED_OVERSTYRT_PERIODE",begrunnelse:"Dette er en begrunnelse 5"}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},Z={args:{arbeidOgInntekt:{arbeidsforhold:[{...y,arbeidsgiverIdent:"999999999",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,saksbehandlersVurdering:"BRUK",begrunnelse:"Dette er en begrunnelse 6",permisjonOgMangel:{permisjonFom:"2020-01-01",type:_e.PERMISJON,årsak:Ce.PERMISJON_UTEN_SLUTTDATO,permisjonStatus:q.BRUK_PERMISJON}}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},ee={args:{arbeidOgInntekt:{arbeidsforhold:[{...y,arbeidsgiverIdent:"999999999",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,begrunnelse:"Dette er en begrunnelse 7",saksbehandlersVurdering:"FORTSETT_UTEN_INNTEKTSMELDING",permisjonOgMangel:{permisjonFom:"2020-01-01",permisjonTom:"2021-01-01",type:_e.PERMISJON,permisjonStatus:q.IKKE_BRUK_PERMISJON}}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},ne={args:{arbeidOgInntekt:{arbeidsforhold:[{...y,arbeidsgiverIdent:"999999999",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,saksbehandlersVurdering:"BRUK",begrunnelse:"Dette er en begrunnelse 8"}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},re={args:{arbeidOgInntekt:{arbeidsforhold:[{...y,arbeidsgiverIdent:"999999999",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,saksbehandlersVurdering:"IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",begrunnelse:"Dette er en begrunnelse 9"}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},te={args:{arbeidOgInntekt:{inntektsmeldinger:[{...oe,inntektPrMnd:25500,arbeidsgiverIdent:"999999999",kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524273715",dokumentId:"548466069",motattDato:"2022-01-19"}],arbeidsforhold:[{...y,arbeidsgiverIdent:"999999999",fom:"2022-01-19",tom:"9999-12-31",stillingsprosent:100,saksbehandlersVurdering:"OPPRETT_BASERT_PÅ_INNTEKTSMELDING",begrunnelse:"Mottatt IM"}],inntekter:[{arbeidsgiverIdent:"972674818",inntekter:[]}],skjæringstidspunkt:"2022-02-08"}}},ae={args:{arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},le={args:{arbeidOgInntekt:{arbeidsforhold:[{...y,arbeidsgiverIdent:"999999999",internArbeidsforholdId:"c14b0c78-eb1f-4d8e-b73f-7f385a5e67d2",eksternArbeidsforholdId:"V999999999R50049082SS157848L0001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100},{...y,arbeidsgiverIdent:"999999998",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-05-12",tom:"2019-06-12",stillingsprosent:100,saksbehandlersVurdering:"BRUK",begrunnelse:"Dette er en begrunnelse 1"},{...y,arbeidsgiverIdent:"11212",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2020-12-06",tom:"2021-12-31",stillingsprosent:100,saksbehandlersVurdering:"IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",begrunnelse:"Dette er en begrunnelse 2"}],inntektsmeldinger:[{...oe,inntektPrMnd:3e4,arbeidsgiverIdent:"999999999",eksternArbeidsforholdId:"V999999999R50049082SS157848L0001",internArbeidsforholdId:"c14b0c78-eb1f-4d8e-b73f-7f385a5e67d2",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-11-06"},{...oe,inntektPrMnd:4e4,arbeidsgiverIdent:"999999998",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06"}],inntekter:[],skjæringstidspunkt:"2021-11-10"}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [{
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '999999999',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2000-04-19',
        tom: '9999-12-31',
        saksbehandlersVurdering: 'FORTSETT_UTEN_INNTEKTSMELDING',
        begrunnelse: 'Dette er en begrunnelse 3'
      }],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2022-01-31'
    }
  }
}`,...W.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [{
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '999999999',
        fom: '2022-01-31',
        tom: '9999-12-31',
        stillingsprosent: 100,
        saksbehandlersVurdering: 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER',
        begrunnelse: 'Dette er en begrunnelse 4'
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 40000,
        arbeidsgiverIdent: '999999999',
        kontaktpersonNavn: 'Dolly Dollesen',
        kontaktpersonNummer: '99999999',
        journalpostId: '510870400',
        motattDato: '2021-12-13',
        dokumentId: '1'
      }],
      inntekter: [],
      skjæringstidspunkt: '2021-03-26'
    }
  }
}`,...X.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [{
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '999999999',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100,
        saksbehandlersVurdering: 'BRUK_MED_OVERSTYRT_PERIODE',
        begrunnelse: 'Dette er en begrunnelse 5'
      }],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...Q.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [{
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '999999999',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100,
        saksbehandlersVurdering: 'BRUK',
        begrunnelse: 'Dette er en begrunnelse 6',
        permisjonOgMangel: {
          permisjonFom: '2020-01-01',
          type: PermisjonsbeskrivelseType.PERMISJON,
          årsak: AksjonspunktÅrsak.PERMISJON_UTEN_SLUTTDATO,
          permisjonStatus: BekreftetPermisjonStatus.BRUK_PERMISJON
        }
      }],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [{
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '999999999',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100,
        begrunnelse: 'Dette er en begrunnelse 7',
        saksbehandlersVurdering: 'FORTSETT_UTEN_INNTEKTSMELDING',
        permisjonOgMangel: {
          permisjonFom: '2020-01-01',
          permisjonTom: '2021-01-01',
          type: PermisjonsbeskrivelseType.PERMISJON,
          permisjonStatus: BekreftetPermisjonStatus.IKKE_BRUK_PERMISJON
        }
      }],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...ee.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [{
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '999999999',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100,
        saksbehandlersVurdering: 'BRUK',
        begrunnelse: 'Dette er en begrunnelse 8'
      }],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...ne.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [{
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '999999999',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100,
        saksbehandlersVurdering: 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING',
        begrunnelse: 'Dette er en begrunnelse 9'
      }],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...re.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 25500.0,
        arbeidsgiverIdent: '999999999',
        kontaktpersonNavn: 'Dolly Dollesen',
        kontaktpersonNummer: '99999999',
        journalpostId: '524273715',
        dokumentId: '548466069',
        motattDato: '2022-01-19'
      }],
      arbeidsforhold: [{
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '999999999',
        fom: '2022-01-19',
        tom: '9999-12-31',
        stillingsprosent: 100.0,
        saksbehandlersVurdering: 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING',
        begrunnelse: 'Mottatt IM'
      }],
      inntekter: [{
        arbeidsgiverIdent: '972674818',
        inntekter: []
      }],
      skjæringstidspunkt: '2022-02-08'
    }
  }
}`,...te.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...ae.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [{
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '999999999',
        internArbeidsforholdId: 'c14b0c78-eb1f-4d8e-b73f-7f385a5e67d2',
        eksternArbeidsforholdId: 'V999999999R50049082SS157848L0001',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100
      }, {
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '999999998',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-05-12',
        tom: '2019-06-12',
        stillingsprosent: 100,
        saksbehandlersVurdering: 'BRUK',
        begrunnelse: 'Dette er en begrunnelse 1'
      }, {
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '11212',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2020-12-06',
        tom: '2021-12-31',
        stillingsprosent: 100,
        saksbehandlersVurdering: 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING',
        begrunnelse: 'Dette er en begrunnelse 2'
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 30000,
        arbeidsgiverIdent: '999999999',
        eksternArbeidsforholdId: 'V999999999R50049082SS157848L0001',
        internArbeidsforholdId: 'c14b0c78-eb1f-4d8e-b73f-7f385a5e67d2',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        journalpostId: '1',
        dokumentId: '2',
        motattDato: '2021-11-06'
      }, {
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 40000,
        arbeidsgiverIdent: '999999998',
        eksternArbeidsforholdId: 'ARB001-001',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        journalpostId: '1',
        dokumentId: '2',
        motattDato: '2021-12-06'
      }],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...le.parameters?.docs?.source}}};const Tt=["ArbeidsforholdetSkalBenyttesUtenInntektsmelding","ManueltOpprettetArbeidsforhold","ArbeidsforholdetErIkkeAktivt","SokerErIPermisjon","SokerErIkkeIPermisjon","OppdaterArbeidsforholdOgAvslaGrunnetManglendeOpplysninger","FjernArbeidsforholdet","ArbeidsforholdetErOpprettetBasertPåIM","IngenArbeidsforholdRegistrert","FlereArbeidsforholdITabell"];export{Q as ArbeidsforholdetErIkkeAktivt,te as ArbeidsforholdetErOpprettetBasertPåIM,W as ArbeidsforholdetSkalBenyttesUtenInntektsmelding,re as FjernArbeidsforholdet,le as FlereArbeidsforholdITabell,ae as IngenArbeidsforholdRegistrert,X as ManueltOpprettetArbeidsforhold,ne as OppdaterArbeidsforholdOgAvslaGrunnetManglendeOpplysninger,Z as SokerErIPermisjon,ee as SokerErIkkeIPermisjon,Tt as __namedExportsOrder,gt as default};
