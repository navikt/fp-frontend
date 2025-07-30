import{r as K,u as Me,_ as ge,s as ce,c as Ve,a as D,R as $,b as Oe,S as Ee,d as Te,I as X,e as Ke,f as $e,j as c,P as Ne,w as Re}from"./iframe-qgMdH2jm.js";function we(e,a){var t=e.values,n=ge(e,["values"]),r=a.values,o=ge(a,["values"]);return ce(r,t)&&ce(n,o)}function je(e){var a=Me(),t=a.formatMessage,n=a.textComponent,r=n===void 0?K.Fragment:n,o=e.id,i=e.description,u=e.defaultMessage,g=e.values,m=e.children,f=e.tagName,v=f===void 0?r:f,b=e.ignoreTag,x={id:o,description:i,defaultMessage:u},p=t(x,g,{ignoreTag:b});return typeof m=="function"?m(Array.isArray(p)?p:[p]):v?K.createElement(v,null,p):K.createElement(K.Fragment,null,p)}je.displayName="FormattedMessage";var _=K.memo(je,we);_.displayName="MemoizedFormattedMessage";var ee=(e=>(e.NYE_OPPLYSNINGER="NYE_OPPLYSNINGER",e.ULIK_REGELVERKSTOLKNING="ULIK_REGELVERKSTOLKNING",e.ULIK_VURDERING="ULIK_VURDERING",e.PROSESSUELL_FEIL="PROSESSUELL_FEIL",e))(ee||{}),T=(e=>(e.ANKE_AVVIS="ANKE_AVVIS",e.ANKE_STADFESTE_YTELSESVEDTAK="ANKE_STADFESTE_YTELSESVEDTAK",e.ANKE_OMGJOER="ANKE_OMGJOER",e.ANKE_OPPHEVE_OG_HJEMSENDE="ANKE_OPPHEVE_OG_HJEMSENDE",e.ANKE_HJEMSENDE_UTEN_OPPHEV="ANKE_HJEMSENDE_UTEN_OPPHEV",e))(T||{}),B=(e=>(e.ANKE_DELVIS_OMGJOERING_TIL_GUNST="ANKE_DELVIS_OMGJOERING_TIL_GUNST",e.ANKE_TIL_GUNST="ANKE_TIL_GUNST",e.ANKE_TIL_UGUNST="ANKE_TIL_UGUNST",e))(B||{});const Y=e=>Ve({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Ie=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};K.forwardRef((e,a)=>{var{className:t,size:n="medium",as:r="p",spacing:o,truncate:i,weight:u="regular",align:g,visuallyHidden:m,textColor:f}=e,v=Ie(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:b}=D();return $.createElement(r,Object.assign({},v,{ref:a,className:b(t,"navds-body-long",`navds-body-long--${n}`,Y({spacing:o,truncate:i,weight:u,align:g,visuallyHidden:m,textColor:f}))}))});var De=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const L=K.forwardRef((e,a)=>{var{className:t,size:n="medium",as:r="p",spacing:o,truncate:i,weight:u="regular",align:g,visuallyHidden:m,textColor:f}=e,v=De(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:b}=D();return $.createElement(r,Object.assign({},v,{ref:a,className:b(t,"navds-body-short",`navds-body-short--${n}`,Y({spacing:o,truncate:i,weight:u,align:g,visuallyHidden:m,textColor:f}))}))});var Pe=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};K.forwardRef((e,a)=>{var{className:t,size:n="medium",spacing:r,uppercase:o,as:i="p",truncate:u,weight:g="regular",align:m,visuallyHidden:f,textColor:v}=e,b=Pe(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:x}=D();return $.createElement(i,Object.assign({},b,{ref:a,className:x(t,"navds-detail",Y({spacing:r,truncate:u,weight:g,align:m,visuallyHidden:f,textColor:v,uppercase:o}),{"navds-detail--small":n==="small"})}))});var He=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};K.forwardRef((e,a)=>{var{children:t,className:n,size:r,spacing:o,as:i="p",showIcon:u=!1}=e,g=He(e,["children","className","size","spacing","as","showIcon"]);const{cn:m}=D();return $.createElement(i,Object.assign({},g,{ref:a,className:m("navds-error-message","navds-label",n,Y({spacing:o}),{"navds-label--small":r==="small","navds-error-message--show-icon":u})}),u&&$.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},$.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var Le=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const ae=K.forwardRef((e,a)=>{var{level:t="1",size:n,className:r,as:o,spacing:i,align:u,visuallyHidden:g,textColor:m}=e,f=Le(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:v}=D(),b=o??`h${t}`;return $.createElement(b,Object.assign({},f,{ref:a,className:v(r,"navds-heading",`navds-heading--${n}`,Y({spacing:i,align:u,visuallyHidden:g,textColor:m}))}))});var Ye=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};K.forwardRef((e,a)=>{var{className:t,spacing:n,as:r="p"}=e,o=Ye(e,["className","spacing","as"]);const{cn:i}=D();return $.createElement(r,Object.assign({},o,{ref:a,className:i(t,"navds-ingress",{"navds-typo--spacing":!!n})}))});var Ce=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const C=K.forwardRef((e,a)=>{var{className:t,size:n="medium",as:r="label",spacing:o,visuallyHidden:i,textColor:u}=e,g=Ce(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:m}=D();return $.createElement(r,Object.assign({},g,{ref:a,className:m(t,"navds-label",Y({spacing:o,visuallyHidden:i,textColor:u}),{"navds-label--small":n==="small"})}))});function Ue(e,a){const t=Object.entries(e).filter(([n])=>!a.includes(n));return Object.fromEntries(t)}$.useId;function M(e,a,t,n){return n?typeof n=="string"?{[`--__${e}c-${a}-${t}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([r,o])=>[`--__${e}c-${a}-${t}-${r}`,o])):{}}const Be={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},me=(e,a,t,n,r,o)=>a.split(" ").map((i,u,g)=>{var m;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/g.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/g.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let f=`var(--${o}-${t}-${i})`;if(n.includes(i))f=i==="px"?"1px":i;else if(i.startsWith("space"))f=`var(--${o}-${i})`;else{const v=`--${o}-spacing-${i}`;f=`var(${(m=Be[v])!==null&&m!==void 0?m:v})`}return r?i==="0"?"0":`calc(-1 * ${f})`:f}).join(" ");function R(e,a,t,n,r,o=!1,i=[]){if(!r)return{};if(typeof r=="string")return{[`--__${e}c-${a}-${t}-xs`]:me(t,r,n,i,o,e)};const u={};return Object.entries(r).forEach(([g,m])=>{u[`--__${e}c-${a}-${t}-${g}`]=me(t,m,n,i,o,e)}),u}const qe=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Ge=({children:e,className:a,padding:t,paddingInline:n,paddingBlock:r,margin:o,marginInline:i,marginBlock:u,width:g,minWidth:m,maxWidth:f,height:v,minHeight:b,maxHeight:x,position:p,inset:l,top:j,right:S,left:w,bottom:A,overflow:P,overflowX:I,overflowY:y,flexBasis:d,flexGrow:s,flexShrink:h,gridColumn:O})=>{const E=Oe(!1),{cn:V}=D(),k=E?"ax":"a",N=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},R(k,"r","p","spacing",t)),R(k,"r","pi","spacing",n)),R(k,"r","pb","spacing",r)),R(k,"r","m","spacing",o)),R(k,"r","mi","spacing",i)),R(k,"r","mb","spacing",u)),M(k,"r","w",g)),M(k,"r","minw",m)),M(k,"r","maxw",f)),M(k,"r","h",v)),M(k,"r","minh",b)),M(k,"r","maxh",x)),M(k,"r","position",p)),R(k,"r","inset","spacing",l)),R(k,"r","top","spacing",j)),R(k,"r","right","spacing",S)),R(k,"r","bottom","spacing",A)),R(k,"r","left","spacing",w)),M(k,"r","overflow",P)),M(k,"r","overflowx",I)),M(k,"r","overflowy",y)),M(k,"r","flex-basis",d)),M(k,"r","flex-grow",s)),M(k,"r","flex-shrink",h)),M(k,"r","grid-column",O));return $.createElement(Ee,{className:V({className:a,"navds-r-p":t,"navds-r-pi":n,"navds-r-pb":r,"navds-r-m":o,"navds-r-mi":i,"navds-r-mb":u,"navds-r-w":g,"navds-r-minw":m,"navds-r-maxw":f,"navds-r-h":v,"navds-r-minh":b,"navds-r-maxh":x,"navds-r-position":p,"navds-r-inset":l,"navds-r-top":j,"navds-r-right":S,"navds-r-bottom":A,"navds-r-left":w,"navds-r-overflow":P,"navds-r-overflowx":I,"navds-r-overflowy":y,"navds-r-flex-basis":d,"navds-r-flex-grow":s,"navds-r-flex-shrink":h,"navds-r-grid-column":O}),style:N},e)};var Fe=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Ae=K.forwardRef((e,a)=>{var{children:t,className:n,as:r="div",align:o,justify:i,wrap:u=!0,gap:g,style:m,direction:f="row",asChild:v}=e,b=Fe(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const p=Oe(!1)?"ax":"a",{cn:l}=D(),j=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},m),R(p,"stack","gap","spacing",g)),M(p,"stack","direction",f)),M(p,"stack","align",o)),M(p,"stack","justify",i)),S=v?Ee:r;return $.createElement(Ge,Object.assign({},b),$.createElement(S,Object.assign({},Ue(b,qe),{ref:a,style:j,className:l("navds-stack",n,{"navds-vstack":f==="column","navds-hstack":f==="row","navds-stack-gap":g,"navds-stack-align":o,"navds-stack-justify":i,"navds-stack-direction":f,"navds-stack-wrap":u})}),t))});var ze=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};K.forwardRef((e,a)=>{var{as:t="div"}=e,n=ze(e,["as"]);return $.createElement(Ae,Object.assign({as:t},n,{ref:a,direction:"row"}))});var Je=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const H=K.forwardRef((e,a)=>{var{as:t="div"}=e,n=Je(e,["as"]);return $.createElement(Ae,Object.assign({as:t},n,{ref:a,direction:"column",wrap:!1}))});function ue(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var se={exports:{}},We=se.exports,ke;function Ze(){return ke||(ke=1,function(e,a){(function(t,n){e.exports=n()})(We,function(){var t,n,r=1e3,o=6e4,i=36e5,u=864e5,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=31536e6,f=2628e6,v=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,b={years:m,months:f,days:u,hours:i,minutes:o,seconds:r,milliseconds:1,weeks:6048e5},x=function(y){return y instanceof P},p=function(y,d,s){return new P(y,s,d.$l)},l=function(y){return n.p(y)+"s"},j=function(y){return y<0},S=function(y){return j(y)?Math.ceil(y):Math.floor(y)},w=function(y){return Math.abs(y)},A=function(y,d){return y?j(y)?{negative:!0,format:""+w(y)+d}:{negative:!1,format:""+y+d}:{negative:!1,format:""}},P=function(){function y(s,h,O){var E=this;if(this.$d={},this.$l=O,s===void 0&&(this.$ms=0,this.parseFromMilliseconds()),h)return p(s*b[l(h)],this);if(typeof s=="number")return this.$ms=s,this.parseFromMilliseconds(),this;if(typeof s=="object")return Object.keys(s).forEach(function(N){E.$d[l(N)]=s[N]}),this.calMilliseconds(),this;if(typeof s=="string"){var V=s.match(v);if(V){var k=V.slice(2).map(function(N){return N!=null?Number(N):0});return this.$d.years=k[0],this.$d.months=k[1],this.$d.weeks=k[2],this.$d.days=k[3],this.$d.hours=k[4],this.$d.minutes=k[5],this.$d.seconds=k[6],this.calMilliseconds(),this}}return this}var d=y.prototype;return d.calMilliseconds=function(){var s=this;this.$ms=Object.keys(this.$d).reduce(function(h,O){return h+(s.$d[O]||0)*b[O]},0)},d.parseFromMilliseconds=function(){var s=this.$ms;this.$d.years=S(s/m),s%=m,this.$d.months=S(s/f),s%=f,this.$d.days=S(s/u),s%=u,this.$d.hours=S(s/i),s%=i,this.$d.minutes=S(s/o),s%=o,this.$d.seconds=S(s/r),s%=r,this.$d.milliseconds=s},d.toISOString=function(){var s=A(this.$d.years,"Y"),h=A(this.$d.months,"M"),O=+this.$d.days||0;this.$d.weeks&&(O+=7*this.$d.weeks);var E=A(O,"D"),V=A(this.$d.hours,"H"),k=A(this.$d.minutes,"M"),N=this.$d.seconds||0;this.$d.milliseconds&&(N+=this.$d.milliseconds/1e3,N=Math.round(1e3*N)/1e3);var re=A(N,"S"),xe=s.negative||h.negative||E.negative||V.negative||k.negative||re.negative,Se=V.format||k.format||re.format?"T":"",te=(xe?"-":"")+"P"+s.format+h.format+E.format+Se+V.format+k.format+re.format;return te==="P"||te==="-P"?"P0D":te},d.toJSON=function(){return this.toISOString()},d.format=function(s){var h=s||"YYYY-MM-DDTHH:mm:ss",O={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return h.replace(g,function(E,V){return V||String(O[E])})},d.as=function(s){return this.$ms/b[l(s)]},d.get=function(s){var h=this.$ms,O=l(s);return O==="milliseconds"?h%=1e3:h=O==="weeks"?S(h/b[O]):this.$d[O],h||0},d.add=function(s,h,O){var E;return E=h?s*b[l(h)]:x(s)?s.$ms:p(s,this).$ms,p(this.$ms+E*(O?-1:1),this)},d.subtract=function(s,h){return this.add(s,h,!0)},d.locale=function(s){var h=this.clone();return h.$l=s,h},d.clone=function(){return p(this.$ms,this)},d.humanize=function(s){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!s)},d.valueOf=function(){return this.asMilliseconds()},d.milliseconds=function(){return this.get("milliseconds")},d.asMilliseconds=function(){return this.as("milliseconds")},d.seconds=function(){return this.get("seconds")},d.asSeconds=function(){return this.as("seconds")},d.minutes=function(){return this.get("minutes")},d.asMinutes=function(){return this.as("minutes")},d.hours=function(){return this.get("hours")},d.asHours=function(){return this.as("hours")},d.days=function(){return this.get("days")},d.asDays=function(){return this.as("days")},d.weeks=function(){return this.get("weeks")},d.asWeeks=function(){return this.as("weeks")},d.months=function(){return this.get("months")},d.asMonths=function(){return this.as("months")},d.years=function(){return this.get("years")},d.asYears=function(){return this.as("years")},y}(),I=function(y,d,s){return y.add(d.years()*s,"y").add(d.months()*s,"M").add(d.days()*s,"d").add(d.hours()*s,"h").add(d.minutes()*s,"m").add(d.seconds()*s,"s").add(d.milliseconds()*s,"ms")};return function(y,d,s){t=s,n=s().$utils(),s.duration=function(E,V){var k=s.locale();return p(E,{$l:k},V)},s.isDuration=x;var h=d.prototype.add,O=d.prototype.subtract;d.prototype.add=function(E,V){return x(E)?I(this,E,1):h.bind(this)(E,V)},d.prototype.subtract=function(E,V){return x(E)?I(this,E,-1):O.bind(this)(E,V)}}})}(se)),se.exports}var Qe=Ze();const Xe=ue(Qe);var ie={exports:{}},en=ie.exports,fe;function nn(){return fe||(fe=1,function(e,a){(function(t,n){e.exports=n()})(en,function(){var t="day";return function(n,r,o){var i=function(m){return m.add(4-m.isoWeekday(),t)},u=r.prototype;u.isoWeekYear=function(){return i(this).year()},u.isoWeek=function(m){if(!this.$utils().u(m))return this.add(7*(m-this.isoWeek()),t);var f,v,b,x,p=i(this),l=(f=this.isoWeekYear(),v=this.$u,b=(v?o.utc:o)().year(f).startOf("year"),x=4-b.isoWeekday(),b.isoWeekday()>4&&(x+=7),b.add(x,t));return p.diff(l,"week")+1},u.isoWeekday=function(m){return this.$utils().u(m)?this.day()||7:this.day(this.day()%7?m:m-7)};var g=u.startOf;u.startOf=function(m,f){var v=this.$utils(),b=!!v.u(f)||f;return v.p(m)==="isoweek"?b?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):g.bind(this)(m,f)}}})}(ie)),ie.exports}var rn=nn();const tn=ue(rn);var oe={exports:{}},an=oe.exports,he;function sn(){return he||(he=1,function(e,a){(function(t,n){e.exports=n()})(an,function(){var t="minute",n=/[+-]\d\d(?::?\d\d)?/g,r=/([+-]|\d\d)/g;return function(o,i,u){var g=i.prototype;u.utc=function(l){var j={date:l,utc:!0,args:arguments};return new i(j)},g.utc=function(l){var j=u(this.toDate(),{locale:this.$L,utc:!0});return l?j.add(this.utcOffset(),t):j},g.local=function(){return u(this.toDate(),{locale:this.$L,utc:!1})};var m=g.parse;g.parse=function(l){l.utc&&(this.$u=!0),this.$utils().u(l.$offset)||(this.$offset=l.$offset),m.call(this,l)};var f=g.init;g.init=function(){if(this.$u){var l=this.$d;this.$y=l.getUTCFullYear(),this.$M=l.getUTCMonth(),this.$D=l.getUTCDate(),this.$W=l.getUTCDay(),this.$H=l.getUTCHours(),this.$m=l.getUTCMinutes(),this.$s=l.getUTCSeconds(),this.$ms=l.getUTCMilliseconds()}else f.call(this)};var v=g.utcOffset;g.utcOffset=function(l,j){var S=this.$utils().u;if(S(l))return this.$u?0:S(this.$offset)?v.call(this):this.$offset;if(typeof l=="string"&&(l=function(I){I===void 0&&(I="");var y=I.match(n);if(!y)return null;var d=(""+y[0]).match(r)||["-",0,0],s=d[0],h=60*+d[1]+ +d[2];return h===0?0:s==="+"?h:-h}(l),l===null))return this;var w=Math.abs(l)<=16?60*l:l,A=this;if(j)return A.$offset=w,A.$u=l===0,A;if(l!==0){var P=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(A=this.local().add(w+P,t)).$offset=w,A.$x.$localOffset=P}else A=this.utc();return A};var b=g.format;g.format=function(l){var j=l||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return b.call(this,j)},g.valueOf=function(){var l=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*l},g.isUTC=function(){return!!this.$u},g.toISOString=function(){return this.toDate().toISOString()},g.toString=function(){return this.toDate().toUTCString()};var x=g.toDate;g.toDate=function(l){return l==="s"&&this.$offset?u(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():x.call(this)};var p=g.diff;g.diff=function(l,j,S){if(l&&this.$u===l.$u)return p.call(this,l,j,S);var w=this.local(),A=u(l).local();return p.call(w,A,j,S)}}})}(oe)),oe.exports}var on=sn();const dn=ue(on),ln=Ke(),q=e=>Te({locale:"nb-NO",messages:e},ln),ne={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};q(ne);var de={exports:{}},un=de.exports,be;function gn(){return be||(be=1,function(e,a){(function(t,n){e.exports=n(X)})(un,function(t){function n(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var r=n(t),o={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return r.default.locale(o,null,!0),o})}(de)),de.exports}gn();X.extend(dn);X.extend(tn);X.extend(Xe);q(ne);q(ne);var ye={exports:{}},U={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function cn(){if(ve)return U;ve=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function t(n,r,o){var i=null;if(o!==void 0&&(i=""+o),r.key!==void 0&&(i=""+r.key),"key"in r){o={};for(var u in r)u!=="key"&&(o[u]=r[u])}else o=r;return r=o.ref,{$$typeof:e,type:n,key:i,ref:r!==void 0?r:null,props:o}}return U.Fragment=a,U.jsx=t,U.jsxs=t,U}var pe;function mn(){return pe||(pe=1,ye.exports=cn()),ye.exports}mn();q(ne);const _e=({ankeVurdering:e})=>{const a=e?.ankeVurderingResultat,t=e?.underBehandlingKabal||!1,n=e?.underBehandlingKabalTrygderett||!1,r=e?.behandletAvKabal||!1,{alleKodeverk:o}=$e(),i=o.AnkeOmgjørÅrsak;return c.jsxs(H,{gap:"4",children:[c.jsx(ae,{size:"small",children:c.jsx(_,{id:"Ankebehandling.Merknad.Title"})}),t&&c.jsx(ae,{size:"small",children:c.jsx(_,{id:"Ankebehandling.Merknad.SeKabalText"})}),r&&c.jsx(ae,{size:"small",children:c.jsx(_,{id:"Ankebehandling.Merknad.BehandletKabal"})}),!t&&!n&&c.jsxs(c.Fragment,{children:[c.jsxs(H,{gap:"1",children:[c.jsx(C,{size:"small",children:c.jsx(_,{id:"Ankebehandling.Merknad.Merknader"})}),c.jsx(L,{size:"small",children:a?.erMerknaderMottatt?c.jsx(_,{id:"Ankebehandling.Merknad.Merknader.Ja"}):c.jsx(_,{id:"Ankebehandling.Merknad.Merknader.Nei"})})]}),c.jsxs(H,{gap:"1",children:[c.jsx(C,{size:"small",children:c.jsx(_,{id:"Ankebehandling.Fritekst"})}),c.jsx(L,{size:"small",children:a?.merknadKommentar})]}),c.jsxs(H,{gap:"1",children:[c.jsx(C,{size:"small",children:c.jsx(_,{id:"Ankebehandling.Resultat"})}),c.jsxs(L,{size:"small",children:[a?.trygderettVurdering===T.ANKE_OMGJOER&&c.jsx(_,{id:"Ankebehandling.Resultat.Omgjør"}),a?.trygderettVurdering===T.ANKE_OPPHEVE_OG_HJEMSENDE&&c.jsx(_,{id:"Ankebehandling.Resultat.Opphev"}),a?.trygderettVurdering===T.ANKE_HJEMSENDE_UTEN_OPPHEV&&c.jsx(_,{id:"Ankebehandling.Resultat.Hjemsend"}),a?.trygderettVurdering===T.ANKE_AVVIS&&c.jsx(_,{id:"Ankebehandling.Resultat.Avvis"}),a?.trygderettVurdering===T.ANKE_STADFESTE_YTELSESVEDTAK&&c.jsx(_,{id:"Ankebehandling.Resultat.Stadfest"})]})]})]}),T.ANKE_OMGJOER===a?.trygderettVurdering&&c.jsxs(c.Fragment,{children:[c.jsxs(H,{gap:"1",children:[c.jsx(C,{size:"small",children:c.jsx(_,{id:"Ankebehandling.OmgjoeringArsak"})}),c.jsx(L,{size:"small",children:i.find(u=>u.kode===a?.trygderettOmgjoerArsak)?.navn})]}),c.jsx(H,{gap:"1",children:c.jsxs(L,{size:"small",children:[a.trygderettVurderingOmgjoer===B.ANKE_TIL_GUNST&&c.jsx(_,{id:"Ankebehandling.VurderingOmgjoer.Gunst"}),a.trygderettVurderingOmgjoer===B.ANKE_TIL_UGUNST&&c.jsx(_,{id:"Ankebehandling.VurderingOmgjoer.Ugunst"}),a.trygderettVurderingOmgjoer===B.ANKE_DELVIS_OMGJOERING_TIL_GUNST&&c.jsx(_,{id:"Ankebehandling.VurderingOmgjoer.Delvis"})]})})]}),(T.ANKE_OPPHEVE_OG_HJEMSENDE===a?.trygderettVurdering||T.ANKE_HJEMSENDE_UTEN_OPPHEV===a?.trygderettVurdering)&&!r&&c.jsxs(H,{gap:"1",children:[c.jsx(C,{size:"small",children:c.jsx(_,{id:"Ankebehandling.OmgjoeringArsak"})}),c.jsx(L,{size:"small",children:i.find(u=>u.kode===a.trygderettOmgjoerArsak)?.navn})]})]})};_e.__docgenInfo={description:"",methods:[],displayName:"TrygderettsbehandlingForm",props:{ankeVurdering:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ankeVurderingResultat?: {
    ankeVurdering?: string;
    ankeVurderingOmgjoer?: string;
    ankeOmgjoerArsak?: AnkeOmgjorArsak;
    trygderettVurdering?: string;
    trygderettVurderingOmgjoer?: string;
    trygderettOmgjoerArsak?: string;
    begrunnelse: string;
    påAnketKlageBehandlingUuid?: string;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev?: string;
    merknadKommentar?: string;
    erMerknaderMottatt?: boolean;
    sendtTilTrygderettenDato?: string;
  };
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
  behandletAvKabal?: boolean;
}`,signature:{properties:[{key:"ankeVurderingResultat",value:{name:"signature",type:"object",raw:`{
  ankeVurdering?: string;
  ankeVurderingOmgjoer?: string;
  ankeOmgjoerArsak?: AnkeOmgjorArsak;
  trygderettVurdering?: string;
  trygderettVurderingOmgjoer?: string;
  trygderettOmgjoerArsak?: string;
  begrunnelse: string;
  påAnketKlageBehandlingUuid?: string;
  erAnkerIkkePart: boolean;
  erIkkeKonkret: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeSignert: boolean;
  erSubsidiartRealitetsbehandles: boolean;
  fritekstTilBrev?: string;
  merknadKommentar?: string;
  erMerknaderMottatt?: boolean;
  sendtTilTrygderettenDato?: string;
}`,signature:{properties:[{key:"ankeVurdering",value:{name:"string",required:!1}},{key:"ankeVurderingOmgjoer",value:{name:"string",required:!1}},{key:"ankeOmgjoerArsak",value:{name:"AnkeOmgjorArsak",required:!1}},{key:"trygderettVurdering",value:{name:"string",required:!1}},{key:"trygderettVurderingOmgjoer",value:{name:"string",required:!1}},{key:"trygderettOmgjoerArsak",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"påAnketKlageBehandlingUuid",value:{name:"string",required:!1}},{key:"erAnkerIkkePart",value:{name:"boolean",required:!0}},{key:"erIkkeKonkret",value:{name:"boolean",required:!0}},{key:"erFristIkkeOverholdt",value:{name:"boolean",required:!0}},{key:"erIkkeSignert",value:{name:"boolean",required:!0}},{key:"erSubsidiartRealitetsbehandles",value:{name:"boolean",required:!0}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"merknadKommentar",value:{name:"string",required:!1}},{key:"erMerknaderMottatt",value:{name:"boolean",required:!1}},{key:"sendtTilTrygderettenDato",value:{name:"string",required:!1}}]},required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"underBehandlingKabalTrygderett",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  ankeVurderingResultat?: {
    ankeVurdering?: string;
    ankeVurderingOmgjoer?: string;
    ankeOmgjoerArsak?: AnkeOmgjorArsak;
    trygderettVurdering?: string;
    trygderettVurderingOmgjoer?: string;
    trygderettOmgjoerArsak?: string;
    begrunnelse: string;
    påAnketKlageBehandlingUuid?: string;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev?: string;
    merknadKommentar?: string;
    erMerknaderMottatt?: boolean;
    sendtTilTrygderettenDato?: string;
  };
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
  behandletAvKabal?: boolean;
}>`},description:""}}};const kn={"Ankebehandling.Merknad.Title":"Trygderettsbehandling","Ankebehandling.Merknad.HelpText":"Kommentarer til Trygderettsbehandlingen og videre oppfølging","Ankebehandling.Merknad.AvsluttBehandling":"Avslutt behandlingen","Ankebehandling.Merknad.Merknader":"Har det kommet merknader?","Ankebehandling.Merknad.Merknader.Ja":"Ja","Ankebehandling.Merknad.Merknader.Nei":"Nei","Ankebehandling.Merknad.Merknader.Kommentarer":"Kommentarer til Trygderettsbehandlingen","Ankebehandling.Merknad.Merknader.LagreKommentarer":"Lagre kommentarer","Ankebehandling.Merknad.SendTilKabal":"Send til KABAL","Ankebehandling.Merknad.KabalText":"Fortsett ankebehandlingen i KABAL: Kryss av, velg hjemmel og klagebehandling, trykk deretter send","Ankebehandling.Merknad.SeKabalText":"Anken behandles i KABAL","Ankebehandling.Merknad.BehandletKabal":"Anken er behandlet i KABAL","Ankebehandling.Merknad.Hjemmel":"Hjemmel","Ankebehandling.Fritekst":"Fritekst for Trygderettsbehandling","Ankebehandling.Resultat":"Resultat fra Trygdretten","Ankebehandling.Resultat.Stadfest":"Stadfestet","Ankebehandling.Resultat.Omgjør":"Omgjort","Ankebehandling.Resultat.Opphev":"Opphevet","Ankebehandling.Resultat.Hjemsend":"Hjemsendt","Ankebehandling.Resultat.Avvis":"Avvist","Ankebehandling.Resultat.Vedtak":"Vedtaket som er anket","Ankebehandling.Resultat.SendtTrygderett":"Dato sendt Trygderetten","Ankebehandling.Resultat.IkkePaaAnketVedtak":"Ikke påanket vedtak","Ankebehandling.VurderingOmgjoer.Delvis":"Delvis omgjøring, til gunst","Ankebehandling.VurderingOmgjoer.Gunst":"Til gunst","Ankebehandling.VurderingOmgjoer.Ugunst":"Til ugunst","Ankebehandling.OmgjoeringArsak":"Årsak","Malform.Beskrivelse":"Foretrukket språk","PreviewAnkeLink.ForhandvisBrev":"Forhåndsvis brev"},fn=q(kn),le=({ankeVurdering:e})=>c.jsx(Ne,{value:fn,children:c.jsx(_e,{ankeVurdering:e})});le.__docgenInfo={description:"",methods:[],displayName:"AnkeTrygderettsbehandlingProsessIndex",props:{ankeVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ankeVurderingResultat?: {
    ankeVurdering?: string;
    ankeVurderingOmgjoer?: string;
    ankeOmgjoerArsak?: AnkeOmgjorArsak;
    trygderettVurdering?: string;
    trygderettVurderingOmgjoer?: string;
    trygderettOmgjoerArsak?: string;
    begrunnelse: string;
    påAnketKlageBehandlingUuid?: string;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev?: string;
    merknadKommentar?: string;
    erMerknaderMottatt?: boolean;
    sendtTilTrygderettenDato?: string;
  };
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
  behandletAvKabal?: boolean;
}`,signature:{properties:[{key:"ankeVurderingResultat",value:{name:"signature",type:"object",raw:`{
  ankeVurdering?: string;
  ankeVurderingOmgjoer?: string;
  ankeOmgjoerArsak?: AnkeOmgjorArsak;
  trygderettVurdering?: string;
  trygderettVurderingOmgjoer?: string;
  trygderettOmgjoerArsak?: string;
  begrunnelse: string;
  påAnketKlageBehandlingUuid?: string;
  erAnkerIkkePart: boolean;
  erIkkeKonkret: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeSignert: boolean;
  erSubsidiartRealitetsbehandles: boolean;
  fritekstTilBrev?: string;
  merknadKommentar?: string;
  erMerknaderMottatt?: boolean;
  sendtTilTrygderettenDato?: string;
}`,signature:{properties:[{key:"ankeVurdering",value:{name:"string",required:!1}},{key:"ankeVurderingOmgjoer",value:{name:"string",required:!1}},{key:"ankeOmgjoerArsak",value:{name:"AnkeOmgjorArsak",required:!1}},{key:"trygderettVurdering",value:{name:"string",required:!1}},{key:"trygderettVurderingOmgjoer",value:{name:"string",required:!1}},{key:"trygderettOmgjoerArsak",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"påAnketKlageBehandlingUuid",value:{name:"string",required:!1}},{key:"erAnkerIkkePart",value:{name:"boolean",required:!0}},{key:"erIkkeKonkret",value:{name:"boolean",required:!0}},{key:"erFristIkkeOverholdt",value:{name:"boolean",required:!0}},{key:"erIkkeSignert",value:{name:"boolean",required:!0}},{key:"erSubsidiartRealitetsbehandles",value:{name:"boolean",required:!0}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"merknadKommentar",value:{name:"string",required:!1}},{key:"erMerknaderMottatt",value:{name:"boolean",required:!1}},{key:"sendtTilTrygderettenDato",value:{name:"string",required:!1}}]},required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"underBehandlingKabalTrygderett",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  ankeVurderingResultat?: {
    ankeVurdering?: string;
    ankeVurderingOmgjoer?: string;
    ankeOmgjoerArsak?: AnkeOmgjorArsak;
    trygderettVurdering?: string;
    trygderettVurderingOmgjoer?: string;
    trygderettOmgjoerArsak?: string;
    begrunnelse: string;
    påAnketKlageBehandlingUuid?: string;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev?: string;
    merknadKommentar?: string;
    erMerknaderMottatt?: boolean;
    sendtTilTrygderettenDato?: string;
  };
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
  behandletAvKabal?: boolean;
}>`},description:""}}};const bn={title:"prosess/anke/prosess-anke-trygderettsbehandling",component:le,decorators:[Re],render:e=>c.jsx(le,{...e})},G={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:T.ANKE_OMGJOER,trygderettOmgjoerArsak:ee.NYE_OPPLYSNINGER,trygderettVurderingOmgjoer:B.ANKE_TIL_GUNST}}}},F={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:T.ANKE_OPPHEVE_OG_HJEMSENDE,trygderettOmgjoerArsak:ee.NYE_OPPLYSNINGER}}}},z={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:T.ANKE_HJEMSENDE_UTEN_OPPHEV,trygderettOmgjoerArsak:ee.NYE_OPPLYSNINGER}}}},J={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:T.ANKE_AVVIS}}}},W={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:T.ANKE_STADFESTE_YTELSESVEDTAK}}}},Z={args:{ankeVurdering:{ankeVurderingResultat:{trygderettVurdering:T.ANKE_STADFESTE_YTELSESVEDTAK},behandletAvKabal:!0}}},Q={args:{ankeVurdering:{ankeVurderingResultat:{trygderettVurdering:T.ANKE_STADFESTE_YTELSESVEDTAK},underBehandlingKabal:!0}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: ankeVurderingKodeverk.ANKE_OMGJOER,
        trygderettOmgjoerArsak: AnkeOmgjorArsak.NYE_OPPLYSNINGER,
        trygderettVurderingOmgjoer: AnkeVurderingOmgjoer.ANKE_TIL_GUNST
      }
    } as AnkeVurdering
  }
}`,...G.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: ankeVurderingKodeverk.ANKE_OPPHEVE_OG_HJEMSENDE,
        trygderettOmgjoerArsak: AnkeOmgjorArsak.NYE_OPPLYSNINGER
      }
    } as AnkeVurdering
  }
}`,...F.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: ankeVurderingKodeverk.ANKE_HJEMSENDE_UTEN_OPPHEV,
        trygderettOmgjoerArsak: AnkeOmgjorArsak.NYE_OPPLYSNINGER
      }
    } as AnkeVurdering
  }
}`,...z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: ankeVurderingKodeverk.ANKE_AVVIS
      }
    } as AnkeVurdering
  }
}`,...J.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: ankeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK
      }
    } as AnkeVurdering
  }
}`,...W.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        trygderettVurdering: ankeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK
      },
      behandletAvKabal: true
    } as AnkeVurdering
  }
}`,...Z.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        trygderettVurdering: ankeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK
      },
      underBehandlingKabal: true
    } as AnkeVurdering
  }
}`,...Q.parameters?.docs?.source}}};const yn=["ResultatVedOmgjortResultat","ResultatVedOpphevetResultat","ResultatVedHjemsendtResultat","ResultatVedAvvistResultat","ResultatVedStadfestetResultat","ErBehandletIKabel","ErUnderBehandlingIKabel"];export{Z as ErBehandletIKabel,Q as ErUnderBehandlingIKabel,J as ResultatVedAvvistResultat,z as ResultatVedHjemsendtResultat,G as ResultatVedOmgjortResultat,F as ResultatVedOpphevetResultat,W as ResultatVedStadfestetResultat,yn as __namedExportsOrder,bn as default};
