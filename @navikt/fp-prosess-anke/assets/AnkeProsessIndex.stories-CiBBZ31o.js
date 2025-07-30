import{r as K,u as Re,_ as ke,s as me,c as Se,a as $,R as B,b as Ae,S as je,d as Ke,I as ee,e as Be,f as qe,j as s,P as we,w as Ie}from"./iframe-ByRl5Wc-.js";function xe(e,t){var a=e.values,n=ke(e,["values"]),r=t.values,o=ke(t,["values"]);return me(r,a)&&me(n,o)}function Te(e){var t=Re(),a=t.formatMessage,n=t.textComponent,r=n===void 0?K.Fragment:n,o=e.id,l=e.description,k=e.defaultMessage,g=e.values,m=e.children,v=e.tagName,c=v===void 0?r:v,p=e.ignoreTag,_={id:o,description:l,defaultMessage:k},E=a(_,g,{ignoreTag:p});return typeof m=="function"?m(Array.isArray(E)?E:[E]):c?K.createElement(c,null,E):K.createElement(K.Fragment,null,E)}Te.displayName="FormattedMessage";var f=K.memo(Te,xe);f.displayName="MemoizedFormattedMessage";var U=(e=>(e.NYE_OPPLYSNINGER="NYE_OPPLYSNINGER",e.ULIK_REGELVERKSTOLKNING="ULIK_REGELVERKSTOLKNING",e.ULIK_VURDERING="ULIK_VURDERING",e.PROSESSUELL_FEIL="PROSESSUELL_FEIL",e))(U||{}),S=(e=>(e.ANKE_AVVIS="ANKE_AVVIS",e.ANKE_STADFESTE_YTELSESVEDTAK="ANKE_STADFESTE_YTELSESVEDTAK",e.ANKE_OMGJOER="ANKE_OMGJOER",e.ANKE_OPPHEVE_OG_HJEMSENDE="ANKE_OPPHEVE_OG_HJEMSENDE",e.ANKE_HJEMSENDE_UTEN_OPPHEV="ANKE_HJEMSENDE_UTEN_OPPHEV",e))(S||{}),M=(e=>(e.ANKE_DELVIS_OMGJOERING_TIL_GUNST="ANKE_DELVIS_OMGJOERING_TIL_GUNST",e.ANKE_TIL_GUNST="ANKE_TIL_GUNST",e.ANKE_TIL_UGUNST="ANKE_TIL_UGUNST",e))(M||{});const F=e=>Se({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var De=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};K.forwardRef((e,t)=>{var{className:a,size:n="medium",as:r="p",spacing:o,truncate:l,weight:k="regular",align:g,visuallyHidden:m,textColor:v}=e,c=De(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:p}=$();return B.createElement(r,Object.assign({},c,{ref:t,className:p(a,"navds-body-long",`navds-body-long--${n}`,F({spacing:o,truncate:l,weight:k,align:g,visuallyHidden:m,textColor:v}))}))});var Ge=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const w=K.forwardRef((e,t)=>{var{className:a,size:n="medium",as:r="p",spacing:o,truncate:l,weight:k="regular",align:g,visuallyHidden:m,textColor:v}=e,c=Ge(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:p}=$();return B.createElement(r,Object.assign({},c,{ref:t,className:p(a,"navds-body-short",`navds-body-short--${n}`,F({spacing:o,truncate:l,weight:k,align:g,visuallyHidden:m,textColor:v}))}))});var $e=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};K.forwardRef((e,t)=>{var{className:a,size:n="medium",spacing:r,uppercase:o,as:l="p",truncate:k,weight:g="regular",align:m,visuallyHidden:v,textColor:c}=e,p=$e(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=$();return B.createElement(l,Object.assign({},p,{ref:t,className:_(a,"navds-detail",F({spacing:r,truncate:k,weight:g,align:m,visuallyHidden:v,textColor:c,uppercase:o}),{"navds-detail--small":n==="small"})}))});var Le=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};K.forwardRef((e,t)=>{var{children:a,className:n,size:r,spacing:o,as:l="p",showIcon:k=!1}=e,g=Le(e,["children","className","size","spacing","as","showIcon"]);const{cn:m}=$();return B.createElement(l,Object.assign({},g,{ref:t,className:m("navds-error-message","navds-label",n,F({spacing:o}),{"navds-label--small":r==="small","navds-error-message--show-icon":k})}),k&&B.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},B.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),a)});var Pe=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const te=K.forwardRef((e,t)=>{var{level:a="1",size:n,className:r,as:o,spacing:l,align:k,visuallyHidden:g,textColor:m}=e,v=Pe(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:c}=$(),p=o??`h${a}`;return B.createElement(p,Object.assign({},v,{ref:t,className:c(r,"navds-heading",`navds-heading--${n}`,F({spacing:l,align:k,visuallyHidden:g,textColor:m}))}))});var Me=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};K.forwardRef((e,t)=>{var{className:a,spacing:n,as:r="p"}=e,o=Me(e,["className","spacing","as"]);const{cn:l}=$();return B.createElement(r,Object.assign({},o,{ref:t,className:l(a,"navds-ingress",{"navds-typo--spacing":!!n})}))});var Fe=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const P=K.forwardRef((e,t)=>{var{className:a,size:n="medium",as:r="label",spacing:o,visuallyHidden:l,textColor:k}=e,g=Fe(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:m}=$();return B.createElement(r,Object.assign({},g,{ref:t,className:m(a,"navds-label",F({spacing:o,visuallyHidden:l,textColor:k}),{"navds-label--small":n==="small"})}))});function He(e,t){const a=Object.entries(e).filter(([n])=>!t.includes(n));return Object.fromEntries(a)}B.useId;function V(e,t,a,n){return n?typeof n=="string"?{[`--__${e}c-${t}-${a}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([r,o])=>[`--__${e}c-${t}-${a}-${r}`,o])):{}}const Ue={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},be=(e,t,a,n,r,o)=>t.split(" ").map((l,k,g)=>{var m;if(e==="margin-inline"&&l==="full")return`calc((100vw - ${100/g.length}%)/-2)`;if(e==="padding-inline"&&l==="full")return`calc((100vw - ${100/g.length}%)/2)`;if(["mi","mb"].includes(e)&&l==="auto")return"auto";let v=`var(--${o}-${a}-${l})`;if(n.includes(l))v=l==="px"?"1px":l;else if(l.startsWith("space"))v=`var(--${o}-${l})`;else{const c=`--${o}-spacing-${l}`;v=`var(${(m=Ue[c])!==null&&m!==void 0?m:c})`}return r?l==="0"?"0":`calc(-1 * ${v})`:v}).join(" ");function I(e,t,a,n,r,o=!1,l=[]){if(!r)return{};if(typeof r=="string")return{[`--__${e}c-${t}-${a}-xs`]:be(a,r,n,l,o,e)};const k={};return Object.entries(r).forEach(([g,m])=>{k[`--__${e}c-${t}-${a}-${g}`]=be(a,m,n,l,o,e)}),k}const Ye=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Ce=({children:e,className:t,padding:a,paddingInline:n,paddingBlock:r,margin:o,marginInline:l,marginBlock:k,width:g,minWidth:m,maxWidth:v,height:c,minHeight:p,maxHeight:_,position:E,inset:d,top:T,right:N,left:x,bottom:O,overflow:L,overflowX:G,overflowY:h,flexBasis:u,flexGrow:i,flexShrink:y,gridColumn:A})=>{const j=Ae(!1),{cn:R}=$(),b=j?"ax":"a",q=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},I(b,"r","p","spacing",a)),I(b,"r","pi","spacing",n)),I(b,"r","pb","spacing",r)),I(b,"r","m","spacing",o)),I(b,"r","mi","spacing",l)),I(b,"r","mb","spacing",k)),V(b,"r","w",g)),V(b,"r","minw",m)),V(b,"r","maxw",v)),V(b,"r","h",c)),V(b,"r","minh",p)),V(b,"r","maxh",_)),V(b,"r","position",E)),I(b,"r","inset","spacing",d)),I(b,"r","top","spacing",T)),I(b,"r","right","spacing",N)),I(b,"r","bottom","spacing",O)),I(b,"r","left","spacing",x)),V(b,"r","overflow",L)),V(b,"r","overflowx",G)),V(b,"r","overflowy",h)),V(b,"r","flex-basis",u)),V(b,"r","flex-grow",i)),V(b,"r","flex-shrink",y)),V(b,"r","grid-column",A));return B.createElement(je,{className:R({className:t,"navds-r-p":a,"navds-r-pi":n,"navds-r-pb":r,"navds-r-m":o,"navds-r-mi":l,"navds-r-mb":k,"navds-r-w":g,"navds-r-minw":m,"navds-r-maxw":v,"navds-r-h":c,"navds-r-minh":p,"navds-r-maxh":_,"navds-r-position":E,"navds-r-inset":d,"navds-r-top":T,"navds-r-right":N,"navds-r-bottom":O,"navds-r-left":x,"navds-r-overflow":L,"navds-r-overflowx":G,"navds-r-overflowy":h,"navds-r-flex-basis":u,"navds-r-flex-grow":i,"navds-r-flex-shrink":y,"navds-r-grid-column":A}),style:q},e)};var ze=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Oe=K.forwardRef((e,t)=>{var{children:a,className:n,as:r="div",align:o,justify:l,wrap:k=!0,gap:g,style:m,direction:v="row",asChild:c}=e,p=ze(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const E=Ae(!1)?"ax":"a",{cn:d}=$(),T=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},m),I(E,"stack","gap","spacing",g)),V(E,"stack","direction",v)),V(E,"stack","align",o)),V(E,"stack","justify",l)),N=c?je:r;return B.createElement(Ce,Object.assign({},p),B.createElement(N,Object.assign({},He(p,Ye),{ref:t,style:T,className:d("navds-stack",n,{"navds-vstack":v==="column","navds-hstack":v==="row","navds-stack-gap":g,"navds-stack-align":o,"navds-stack-justify":l,"navds-stack-direction":v,"navds-stack-wrap":k})}),a))});var Je=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};K.forwardRef((e,t)=>{var{as:a="div"}=e,n=Je(e,["as"]);return B.createElement(Oe,Object.assign({as:a},n,{ref:t,direction:"row"}))});var We=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const D=K.forwardRef((e,t)=>{var{as:a="div"}=e,n=We(e,["as"]);return B.createElement(Oe,Object.assign({as:a},n,{ref:t,direction:"column",wrap:!1}))});function ge(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var se={exports:{}},Ze=se.exports,ve;function Qe(){return ve||(ve=1,function(e,t){(function(a,n){e.exports=n()})(Ze,function(){var a,n,r=1e3,o=6e4,l=36e5,k=864e5,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=31536e6,v=2628e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,p={years:m,months:v,days:k,hours:l,minutes:o,seconds:r,milliseconds:1,weeks:6048e5},_=function(h){return h instanceof L},E=function(h,u,i){return new L(h,i,u.$l)},d=function(h){return n.p(h)+"s"},T=function(h){return h<0},N=function(h){return T(h)?Math.ceil(h):Math.floor(h)},x=function(h){return Math.abs(h)},O=function(h,u){return h?T(h)?{negative:!0,format:""+x(h)+u}:{negative:!1,format:""+h+u}:{negative:!1,format:""}},L=function(){function h(i,y,A){var j=this;if(this.$d={},this.$l=A,i===void 0&&(this.$ms=0,this.parseFromMilliseconds()),y)return E(i*p[d(y)],this);if(typeof i=="number")return this.$ms=i,this.parseFromMilliseconds(),this;if(typeof i=="object")return Object.keys(i).forEach(function(q){j.$d[d(q)]=i[q]}),this.calMilliseconds(),this;if(typeof i=="string"){var R=i.match(c);if(R){var b=R.slice(2).map(function(q){return q!=null?Number(q):0});return this.$d.years=b[0],this.$d.months=b[1],this.$d.weeks=b[2],this.$d.days=b[3],this.$d.hours=b[4],this.$d.minutes=b[5],this.$d.seconds=b[6],this.calMilliseconds(),this}}return this}var u=h.prototype;return u.calMilliseconds=function(){var i=this;this.$ms=Object.keys(this.$d).reduce(function(y,A){return y+(i.$d[A]||0)*p[A]},0)},u.parseFromMilliseconds=function(){var i=this.$ms;this.$d.years=N(i/m),i%=m,this.$d.months=N(i/v),i%=v,this.$d.days=N(i/k),i%=k,this.$d.hours=N(i/l),i%=l,this.$d.minutes=N(i/o),i%=o,this.$d.seconds=N(i/r),i%=r,this.$d.milliseconds=i},u.toISOString=function(){var i=O(this.$d.years,"Y"),y=O(this.$d.months,"M"),A=+this.$d.days||0;this.$d.weeks&&(A+=7*this.$d.weeks);var j=O(A,"D"),R=O(this.$d.hours,"H"),b=O(this.$d.minutes,"M"),q=this.$d.seconds||0;this.$d.milliseconds&&(q+=this.$d.milliseconds/1e3,q=Math.round(1e3*q)/1e3);var re=O(q,"S"),Ne=i.negative||y.negative||j.negative||R.negative||b.negative||re.negative,Ve=R.format||b.format||re.format?"T":"",ae=(Ne?"-":"")+"P"+i.format+y.format+j.format+Ve+R.format+b.format+re.format;return ae==="P"||ae==="-P"?"P0D":ae},u.toJSON=function(){return this.toISOString()},u.format=function(i){var y=i||"YYYY-MM-DDTHH:mm:ss",A={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return y.replace(g,function(j,R){return R||String(A[j])})},u.as=function(i){return this.$ms/p[d(i)]},u.get=function(i){var y=this.$ms,A=d(i);return A==="milliseconds"?y%=1e3:y=A==="weeks"?N(y/p[A]):this.$d[A],y||0},u.add=function(i,y,A){var j;return j=y?i*p[d(y)]:_(i)?i.$ms:E(i,this).$ms,E(this.$ms+j*(A?-1:1),this)},u.subtract=function(i,y){return this.add(i,y,!0)},u.locale=function(i){var y=this.clone();return y.$l=i,y},u.clone=function(){return E(this.$ms,this)},u.humanize=function(i){return a().add(this.$ms,"ms").locale(this.$l).fromNow(!i)},u.valueOf=function(){return this.asMilliseconds()},u.milliseconds=function(){return this.get("milliseconds")},u.asMilliseconds=function(){return this.as("milliseconds")},u.seconds=function(){return this.get("seconds")},u.asSeconds=function(){return this.as("seconds")},u.minutes=function(){return this.get("minutes")},u.asMinutes=function(){return this.as("minutes")},u.hours=function(){return this.get("hours")},u.asHours=function(){return this.as("hours")},u.days=function(){return this.get("days")},u.asDays=function(){return this.as("days")},u.weeks=function(){return this.get("weeks")},u.asWeeks=function(){return this.as("weeks")},u.months=function(){return this.get("months")},u.asMonths=function(){return this.as("months")},u.years=function(){return this.get("years")},u.asYears=function(){return this.as("years")},h}(),G=function(h,u,i){return h.add(u.years()*i,"y").add(u.months()*i,"M").add(u.days()*i,"d").add(u.hours()*i,"h").add(u.minutes()*i,"m").add(u.seconds()*i,"s").add(u.milliseconds()*i,"ms")};return function(h,u,i){a=i,n=i().$utils(),i.duration=function(j,R){var b=i.locale();return E(j,{$l:b},R)},i.isDuration=_;var y=u.prototype.add,A=u.prototype.subtract;u.prototype.add=function(j,R){return _(j)?G(this,j,1):y.bind(this)(j,R)},u.prototype.subtract=function(j,R){return _(j)?G(this,j,-1):A.bind(this)(j,R)}}})}(se)),se.exports}var Xe=Qe();const en=ge(Xe);var le={exports:{}},nn=le.exports,ye;function rn(){return ye||(ye=1,function(e,t){(function(a,n){e.exports=n()})(nn,function(){var a="day";return function(n,r,o){var l=function(m){return m.add(4-m.isoWeekday(),a)},k=r.prototype;k.isoWeekYear=function(){return l(this).year()},k.isoWeek=function(m){if(!this.$utils().u(m))return this.add(7*(m-this.isoWeek()),a);var v,c,p,_,E=l(this),d=(v=this.isoWeekYear(),c=this.$u,p=(c?o.utc:o)().year(v).startOf("year"),_=4-p.isoWeekday(),p.isoWeekday()>4&&(_+=7),p.add(_,a));return E.diff(d,"week")+1},k.isoWeekday=function(m){return this.$utils().u(m)?this.day()||7:this.day(this.day()%7?m:m-7)};var g=k.startOf;k.startOf=function(m,v){var c=this.$utils(),p=!!c.u(v)||v;return c.p(m)==="isoweek"?p?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):g.bind(this)(m,v)}}})}(le)),le.exports}var an=rn();const tn=ge(an);var ie={exports:{}},sn=ie.exports,pe;function ln(){return pe||(pe=1,function(e,t){(function(a,n){e.exports=n()})(sn,function(){var a="minute",n=/[+-]\d\d(?::?\d\d)?/g,r=/([+-]|\d\d)/g;return function(o,l,k){var g=l.prototype;k.utc=function(d){var T={date:d,utc:!0,args:arguments};return new l(T)},g.utc=function(d){var T=k(this.toDate(),{locale:this.$L,utc:!0});return d?T.add(this.utcOffset(),a):T},g.local=function(){return k(this.toDate(),{locale:this.$L,utc:!1})};var m=g.parse;g.parse=function(d){d.utc&&(this.$u=!0),this.$utils().u(d.$offset)||(this.$offset=d.$offset),m.call(this,d)};var v=g.init;g.init=function(){if(this.$u){var d=this.$d;this.$y=d.getUTCFullYear(),this.$M=d.getUTCMonth(),this.$D=d.getUTCDate(),this.$W=d.getUTCDay(),this.$H=d.getUTCHours(),this.$m=d.getUTCMinutes(),this.$s=d.getUTCSeconds(),this.$ms=d.getUTCMilliseconds()}else v.call(this)};var c=g.utcOffset;g.utcOffset=function(d,T){var N=this.$utils().u;if(N(d))return this.$u?0:N(this.$offset)?c.call(this):this.$offset;if(typeof d=="string"&&(d=function(G){G===void 0&&(G="");var h=G.match(n);if(!h)return null;var u=(""+h[0]).match(r)||["-",0,0],i=u[0],y=60*+u[1]+ +u[2];return y===0?0:i==="+"?y:-y}(d),d===null))return this;var x=Math.abs(d)<=16?60*d:d,O=this;if(T)return O.$offset=x,O.$u=d===0,O;if(d!==0){var L=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(O=this.local().add(x+L,a)).$offset=x,O.$x.$localOffset=L}else O=this.utc();return O};var p=g.format;g.format=function(d){var T=d||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return p.call(this,T)},g.valueOf=function(){var d=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*d},g.isUTC=function(){return!!this.$u},g.toISOString=function(){return this.toDate().toISOString()},g.toString=function(){return this.toDate().toUTCString()};var _=g.toDate;g.toDate=function(d){return d==="s"&&this.$offset?k(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():_.call(this)};var E=g.diff;g.diff=function(d,T,N){if(d&&this.$u===d.$u)return E.call(this,d,T,N);var x=this.local(),O=k(d).local();return E.call(x,O,T,N)}}})}(ie)),ie.exports}var on=ln();const un=ge(on),dn=Be(),Y=e=>Ke({locale:"nb-NO",messages:e},dn),ne={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"},gn=Y(ne),kn=(e,t)=>{const{year:a="numeric",month:n="2-digit",day:r="2-digit"}={};return gn.formatDate(new Date(e),{year:a,month:n,day:r})};var oe={exports:{}},mn=oe.exports,he;function bn(){return he||(he=1,function(e,t){(function(a,n){e.exports=n(ee)})(mn,function(a){function n(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var r=n(a),o={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(l){return l+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return r.default.locale(o,null,!0),o})}(oe)),oe.exports}bn();ee.extend(un);ee.extend(tn);ee.extend(en);Y(ne);Y(ne);var ce={exports:{}},H={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe;function vn(){if(fe)return H;fe=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function a(n,r,o){var l=null;if(o!==void 0&&(l=""+o),r.key!==void 0&&(l=""+r.key),"key"in r){o={};for(var k in r)k!=="key"&&(o[k]=r[k])}else o=r;return r=o.ref,{$$typeof:e,type:n,key:l,ref:r!==void 0?r:null,props:o}}return H.Fragment=t,H.jsx=a,H.jsxs=a,H}var Ee;function yn(){return Ee||(Ee=1,ce.exports=vn()),ce.exports}yn();Y(ne);const ue="0",pn=e=>e==null||e==="-"?ue:e,hn=(e,t,a)=>{const n=e.find(l=>l.uuid===a),r=t.BehandlingType,o=t.BehandlingStatus;return n?`${kn(n.opprettet)} - ${r.find(l=>l.kode===n.type)?.navn} - ${o.find(l=>l.kode===n.status)?.navn}`:""},_e=({ankeVurdering:e,behandlinger:t})=>{const a=e.ankeVurderingResultat,n=a?pn(a.påAnketKlageBehandlingUuid):void 0,{alleKodeverk:r}=qe(),o=r.AnkeOmgjørÅrsak,l=e?.underBehandlingKabal||!1,k=e?.behandletAvKabal||!1;return s.jsxs(D,{gap:"4",children:[s.jsx(te,{size:"small",children:s.jsx(f,{id:"Ankebehandling.Title"})}),l&&s.jsx(te,{size:"small",children:s.jsx(f,{id:"Ankebehandling.SeKabalText"})}),k&&s.jsx(te,{size:"small",children:s.jsx(f,{id:"Ankebehandling.BehandletKabal"})}),!l&&s.jsxs(s.Fragment,{children:[s.jsxs(D,{gap:"1",children:[s.jsx(P,{size:"small",children:s.jsx(f,{id:"Ankebehandling.Resultat.Vedtak"})}),s.jsxs(w,{size:"small",children:[n===ue&&s.jsx(f,{id:"Ankebehandling.Resultat.IkkePaaAnketVedtak"}),n!==ue&&hn(t,r,n)]})]}),s.jsxs(D,{gap:"1",children:[s.jsx(P,{size:"small",children:s.jsx(f,{id:"Ankebehandling.Resultat"})}),s.jsxs(w,{size:"small",children:[a?.ankeVurdering===S.ANKE_OMGJOER&&s.jsx(f,{id:"Ankebehandling.Resultat.Omgjør"}),a?.ankeVurdering===S.ANKE_OPPHEVE_OG_HJEMSENDE&&s.jsx(f,{id:"Ankebehandling.Resultat.OpphevHjemsend"}),a?.ankeVurdering===S.ANKE_HJEMSENDE_UTEN_OPPHEV&&s.jsx(f,{id:"Ankebehandling.Resultat.Hjemsend"}),a?.ankeVurdering===S.ANKE_AVVIS&&s.jsx(f,{id:"Ankebehandling.Resultat.Avvis"}),a?.ankeVurdering===S.ANKE_STADFESTE_YTELSESVEDTAK&&s.jsx(f,{id:"Ankebehandling.Resultat.Stadfest"})]})]}),S.ANKE_AVVIS===a?.ankeVurdering&&!k&&s.jsxs(s.Fragment,{children:[s.jsxs(D,{gap:"1",children:[s.jsx(P,{size:"small",children:s.jsx(f,{id:"Ankebehandling.Avvisning"})}),a?.erAnkerIkkePart&&s.jsx(w,{size:"small",children:s.jsx(f,{id:"Ankebehandling.Avvisning.IkkePart"})}),a?.erIkkeKonkret&&s.jsx(w,{size:"small",children:s.jsx(f,{id:"Ankebehandling.Avvisning.IkkeKonkret"})}),a?.erFristIkkeOverholdt&&s.jsx(w,{size:"small",children:s.jsx(f,{id:"Ankebehandling.Avvisning.IkkeFrist"})}),a?.erIkkeSignert&&s.jsx(w,{size:"small",children:s.jsx(f,{id:"Ankebehandling.Avvisning.IkkeSignert"})})]}),s.jsxs(D,{gap:"1",children:[s.jsx(P,{size:"small",children:s.jsx(f,{id:"Ankebehandling.Realitetsbehandles"})}),s.jsx(w,{size:"small",children:a?.erSubsidiartRealitetsbehandles?s.jsx(f,{id:"Ankebehandling.Realitetsbehandles.Ja"}):s.jsx(f,{id:"Ankebehandling.Realitetsbehandles.Nei"})})]})]}),S.ANKE_OMGJOER===a?.ankeVurdering&&s.jsxs(s.Fragment,{children:[s.jsxs(D,{gap:"1",children:[s.jsx(P,{size:"small",children:s.jsx(f,{id:"Ankebehandling.Avvisning"})}),s.jsx(w,{size:"small",children:o.find(g=>g.kode===a?.ankeOmgjoerArsak)?.navn})]}),s.jsx(D,{gap:"1",children:s.jsxs(w,{size:"small",children:[a?.ankeVurderingOmgjoer===M.ANKE_TIL_GUNST&&s.jsx(f,{id:"Ankebehandling.VurderingOmgjoer.Gunst"}),a?.ankeVurderingOmgjoer===M.ANKE_TIL_UGUNST&&s.jsx(f,{id:"Ankebehandling.VurderingOmgjoer.Ugunst"}),a?.ankeVurderingOmgjoer===M.ANKE_DELVIS_OMGJOERING_TIL_GUNST&&s.jsx(f,{id:"Ankebehandling.VurderingOmgjoer.Delvis"})]})})]}),(S.ANKE_OPPHEVE_OG_HJEMSENDE===a?.ankeVurdering||S.ANKE_HJEMSENDE_UTEN_OPPHEV===a?.ankeVurdering)&&!k&&s.jsxs(D,{gap:"1",children:[s.jsx(P,{size:"small",children:s.jsx(f,{id:"Ankebehandling.OmgjoeringArsak"})}),s.jsx(w,{size:"small",children:o.find(g=>g.kode===a.ankeOmgjoerArsak)?.navn})]}),s.jsxs(D,{gap:"1",children:[s.jsx(P,{size:"small",children:s.jsx(f,{id:"Ankebehandling.Begrunnelse"})}),s.jsx(w,{size:"small",children:a?.begrunnelse})]}),s.jsxs(D,{gap:"1",children:[s.jsx(P,{size:"small",children:s.jsx(f,{id:"FritekstAnkeBrevTextField.Fritekst"})}),s.jsx(w,{size:"small",children:a?.fritekstTilBrev})]})]})]})};_e.__docgenInfo={description:"Setter opp aksjonspunktet for behandling.",methods:[],displayName:"BehandleAnkeForm",props:{ankeVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},behandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const cn={"Ankebehandling.Title":"Ankebehandling","Ankebehandling.HelpText":"Fastsett resultatet av ankebehandlingen","Ankebehandling.KabalText":"Fortsett ankebehandlingen i KABAL: Kryss av, velg hjemmel og klagebehandling, trykk deretter send","Ankebehandling.SeKabalText":"Anken behandles i KABAL","Ankebehandling.SendTilKabal":"Send til KABAL","Ankebehandling.BehandletKabal":"Anken er behandlet i KABAL","Ankebehandling.Hjemmel":"Hjemmel","Ankebehandling.Resultat":"Resultat","Ankebehandling.Resultat.Stadfest":"Stadfest","Ankebehandling.Resultat.Omgjør":"Omgjør","Ankebehandling.Resultat.Avvis":"Avvis","Ankebehandling.Resultat.OpphevHjemsend":"Opphev","Ankebehandling.Resultat.Hjemsend":"Hjemsend","Ankebehandling.Resultat.Vedtak":"Vedtaket som er anket","Ankebehandling.Avvisning":"Avvisningsårsaker","Ankebehandling.OmgjoeringArsak":"Årsak","Ankebehandling.TempSaveButton":"Lagre","Ankebehandling.VurderingOmgjoer.Delvis":"Delvis omgjøring, til gunst","Ankebehandling.VurderingOmgjoer.Gunst":"Til gunst","Ankebehandling.VurderingOmgjoer.Ugunst":"Til ugunst","Ankebehandling.Avvisning.IkkePart":"Den som anker er ikke part i saken","Ankebehandling.Avvisning.IkkeKonkret":"Det ankes ikke på konkrete elementer i vedtaket","Ankebehandling.Avvisning.IkkeFrist":"Ankefristen er ikke overholdt","Ankebehandling.Avvisning.IkkeSignert":"Anken er ikke signert","Ankebehandling.Realitetsbehandles":"Skal anken subsidiært realitetsbehandles?","Ankebehandling.Realitetsbehandles.Ja":"Ja","Ankebehandling.Realitetsbehandles.Nei":"Nei","Ankebehandling.Resultat.IkkePaaAnketVedtak":"Ikke påanket vedtak","Ankebehandling.Begrunnelse":"Begrunnelse","FritekstAnkeBrevTextField.Fritekst":"Fritekst til brev","PreviewAnkeLink.ForhandvisBrev":"Forhåndsvis brev","Malform.Beskrivelse":"Foretrukket språk"},fn=Y(cn),de=({ankeVurdering:e,behandlinger:t})=>s.jsx(we,{value:fn,children:s.jsx(_e,{ankeVurdering:e,behandlinger:t})});de.__docgenInfo={description:"",methods:[],displayName:"AnkeProsessIndex",props:{ankeVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},behandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const An={title:"prosess/anke/prosess-anke",component:de,decorators:[Ie],args:{behandlinger:[]},render:e=>s.jsx(de,{...e})},C={args:{ankeVurdering:{ankeVurderingResultat:{ankeVurdering:S.ANKE_OMGJOER,begrunnelse:"Dette er en begrunnelse",ankeOmgjoerArsak:U.ULIK_VURDERING,ankeVurderingOmgjoer:M.ANKE_TIL_UGUNST,fritekstTilBrev:"Dette er en fritekst"}}}},z={args:{ankeVurdering:{ankeVurderingResultat:{ankeVurdering:S.ANKE_OPPHEVE_OG_HJEMSENDE,begrunnelse:"Dette er en begrunnelse",ankeOmgjoerArsak:U.ULIK_REGELVERKSTOLKNING,fritekstTilBrev:"Dette er en fritekst"}}}},J={args:{ankeVurdering:{ankeVurderingResultat:{ankeVurdering:S.ANKE_HJEMSENDE_UTEN_OPPHEV,begrunnelse:"Dette er en begrunnelse",ankeOmgjoerArsak:U.ULIK_REGELVERKSTOLKNING,fritekstTilBrev:"Dette er en fritekst"}}}},W={args:{ankeVurdering:{ankeVurderingResultat:{ankeVurdering:S.ANKE_AVVIS,begrunnelse:"Dette er en begrunnelse",ankeOmgjoerArsak:U.ULIK_REGELVERKSTOLKNING,erSubsidiartRealitetsbehandles:!0,erAnkerIkkePart:!0,erIkkeKonkret:!0,fritekstTilBrev:"Dette er en fritekst"}}}},Z={args:{ankeVurdering:{ankeVurderingResultat:{ankeVurdering:S.ANKE_STADFESTE_YTELSESVEDTAK,begrunnelse:"Dette er en begrunnelse",fritekstTilBrev:"Dette er en fritekst"}}}},Q={args:{ankeVurdering:{underBehandlingKabal:!0,behandletAvKabal:!1}}},X={args:{ankeVurdering:{ankeVurderingResultat:{ankeVurdering:S.ANKE_OMGJOER,ankeVurderingOmgjoer:M.ANKE_DELVIS_OMGJOERING_TIL_GUNST},underBehandlingKabal:!1,behandletAvKabal:!0}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        ankeVurdering: AnkeVurderingKodeverk.ANKE_OMGJOER,
        begrunnelse: 'Dette er en begrunnelse',
        ankeOmgjoerArsak: AnkeOmgjorArsak.ULIK_VURDERING,
        ankeVurderingOmgjoer: AnkeVurderingOmgjoer.ANKE_TIL_UGUNST,
        fritekstTilBrev: 'Dette er en fritekst'
      }
    } as AnkeVurdering
  }
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        ankeVurdering: AnkeVurderingKodeverk.ANKE_OPPHEVE_OG_HJEMSENDE,
        begrunnelse: 'Dette er en begrunnelse',
        ankeOmgjoerArsak: AnkeOmgjorArsak.ULIK_REGELVERKSTOLKNING,
        fritekstTilBrev: 'Dette er en fritekst'
      }
    } as AnkeVurdering
  }
}`,...z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        ankeVurdering: AnkeVurderingKodeverk.ANKE_HJEMSENDE_UTEN_OPPHEV,
        begrunnelse: 'Dette er en begrunnelse',
        ankeOmgjoerArsak: AnkeOmgjorArsak.ULIK_REGELVERKSTOLKNING,
        fritekstTilBrev: 'Dette er en fritekst'
      }
    } as AnkeVurdering
  }
}`,...J.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        ankeVurdering: AnkeVurderingKodeverk.ANKE_AVVIS,
        begrunnelse: 'Dette er en begrunnelse',
        ankeOmgjoerArsak: AnkeOmgjorArsak.ULIK_REGELVERKSTOLKNING,
        erSubsidiartRealitetsbehandles: true,
        erAnkerIkkePart: true,
        erIkkeKonkret: true,
        fritekstTilBrev: 'Dette er en fritekst'
      }
    } as AnkeVurdering
  }
}`,...W.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        ankeVurdering: AnkeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK,
        begrunnelse: 'Dette er en begrunnelse',
        fritekstTilBrev: 'Dette er en fritekst'
      }
    } as AnkeVurdering
  }
}`,...Z.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      underBehandlingKabal: true,
      behandletAvKabal: false
    } as AnkeVurdering
  }
}`,...Q.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        ankeVurdering: AnkeVurderingKodeverk.ANKE_OMGJOER,
        ankeVurderingOmgjoer: AnkeVurderingOmgjoer.ANKE_DELVIS_OMGJOERING_TIL_GUNST
      },
      underBehandlingKabal: false,
      behandletAvKabal: true
    } as AnkeVurdering
  }
}`,...X.parameters?.docs?.source}}};const jn=["OmjørResultatTilUgunst","OpphevResultat","HjemsendResultat","AvvisResultat","StadfestResultat","UnderBehandlingIKabal","ErBehandletIKabal"];export{W as AvvisResultat,X as ErBehandletIKabal,J as HjemsendResultat,C as OmjørResultatTilUgunst,z as OpphevResultat,Z as StadfestResultat,Q as UnderBehandlingIKabal,jn as __namedExportsOrder,An as default};
