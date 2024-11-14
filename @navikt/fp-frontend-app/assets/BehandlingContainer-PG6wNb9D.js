import{j as Y}from"./jsx-runtime-DR9Q75dM.js";import{r as V,R as Ee}from"./index-DRjF_FHU.js";import{S as kt,F as vt,a as yt,W as ft,H as bt,L as on}from"./index.es-LfLiqEGt.js";import{B as _t}from"./BehandlingHenlagtPanel-BW0kf7Za.js";import{S as ln,K as ve,a as qt,b as Tt,c as At,d as St}from"./index-BxQGjPzw.js";import{B as Le,L as Et,a as wt}from"./VStack-C_OKSz29.js";import{x as un}from"./index.es-CSsnrbyw.js";var Bt=Object.defineProperty,jt=(e,n,t)=>n in e?Bt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,dn=(e,n,t)=>jt(e,typeof n!="symbol"?n+"":n,t),Pt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bn={exports:{}},_e={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gn;function Rt(){if(gn)return _e;gn=1;var e=Ee,n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(o,l,u){var d,h={},g=null,f=null;u!==void 0&&(g=""+u),l.key!==void 0&&(g=""+l.key),l.ref!==void 0&&(f=l.ref);for(d in l)r.call(l,d)&&!s.hasOwnProperty(d)&&(h[d]=l[d]);if(o&&o.defaultProps)for(d in l=o.defaultProps,l)h[d]===void 0&&(h[d]=l[d]);return{$$typeof:n,type:o,key:g,ref:f,props:h,_owner:a.current}}return _e.Fragment=t,_e.jsx=i,_e.jsxs=i,_e}Bn.exports=Rt();var A=Bn.exports,jn={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(Pt,function(){var t=1e3,r=6e4,a=36e5,s="millisecond",i="second",o="minute",l="hour",u="day",d="week",h="month",g="quarter",f="year",w="date",m="Invalid Date",j=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,M=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(q){var v=["th","st","nd","rd"],p=q%100;return"["+q+(v[(p-20)%10]||v[p]||v[0])+"]"}},S=function(q,v,p){var T=String(q);return!T||T.length>=v?q:""+Array(v+1-T.length).join(p)+q},K={s:S,z:function(q){var v=-q.utcOffset(),p=Math.abs(v),T=Math.floor(p/60),k=p%60;return(v<=0?"+":"-")+S(T,2,"0")+":"+S(k,2,"0")},m:function q(v,p){if(v.date()<p.date())return-q(p,v);var T=12*(p.year()-v.year())+(p.month()-v.month()),k=v.clone().add(T,h),P=p-k<0,R=v.clone().add(T+(P?-1:1),h);return+(-(T+(p-k)/(P?k-R:R-k))||0)},a:function(q){return q<0?Math.ceil(q)||0:Math.floor(q)},p:function(q){return{M:h,y:f,w:d,d:u,D:w,h:l,m:o,s:i,ms:s,Q:g}[q]||String(q||"").toLowerCase().replace(/s$/,"")},u:function(q){return q===void 0}},c="en",B={};B[c]=$;var _="$isDayjsObject",y=function(q){return q instanceof x||!(!q||!q[_])},I=function q(v,p,T){var k;if(!v)return c;if(typeof v=="string"){var P=v.toLowerCase();B[P]&&(k=P),p&&(B[P]=p,k=P);var R=v.split("-");if(!k&&R.length>1)return q(R[0])}else{var D=v.name;B[D]=v,k=D}return!T&&k&&(c=k),k||!T&&c},H=function(q,v){if(y(q))return q.clone();var p=typeof v=="object"?v:{};return p.date=q,p.args=arguments,new x(p)},E=K;E.l=I,E.i=y,E.w=function(q,v){return H(q,{locale:v.$L,utc:v.$u,x:v.$x,$offset:v.$offset})};var x=function(){function q(p){this.$L=I(p.locale,null,!0),this.parse(p),this.$x=this.$x||p.x||{},this[_]=!0}var v=q.prototype;return v.parse=function(p){this.$d=function(T){var k=T.date,P=T.utc;if(k===null)return new Date(NaN);if(E.u(k))return new Date;if(k instanceof Date)return new Date(k);if(typeof k=="string"&&!/Z$/i.test(k)){var R=k.match(j);if(R){var D=R[2]-1||0,F=(R[7]||"0").substring(0,3);return P?new Date(Date.UTC(R[1],D,R[3]||1,R[4]||0,R[5]||0,R[6]||0,F)):new Date(R[1],D,R[3]||1,R[4]||0,R[5]||0,R[6]||0,F)}}return new Date(k)}(p),this.init()},v.init=function(){var p=this.$d;this.$y=p.getFullYear(),this.$M=p.getMonth(),this.$D=p.getDate(),this.$W=p.getDay(),this.$H=p.getHours(),this.$m=p.getMinutes(),this.$s=p.getSeconds(),this.$ms=p.getMilliseconds()},v.$utils=function(){return E},v.isValid=function(){return this.$d.toString()!==m},v.isSame=function(p,T){var k=H(p);return this.startOf(T)<=k&&k<=this.endOf(T)},v.isAfter=function(p,T){return H(p)<this.startOf(T)},v.isBefore=function(p,T){return this.endOf(T)<H(p)},v.$g=function(p,T,k){return E.u(p)?this[T]:this.set(k,p)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(p,T){var k=this,P=!!E.u(T)||T,R=E.p(p),D=function(de,ee){var oe=E.w(k.$u?Date.UTC(k.$y,ee,de):new Date(k.$y,ee,de),k);return P?oe:oe.endOf(u)},F=function(de,ee){return E.w(k.toDate()[de].apply(k.toDate("s"),(P?[0,0,0,0]:[23,59,59,999]).slice(ee)),k)},G=this.$W,Z=this.$M,ne=this.$D,pe="set"+(this.$u?"UTC":"");switch(R){case f:return P?D(1,0):D(31,11);case h:return P?D(1,Z):D(0,Z+1);case d:var ue=this.$locale().weekStart||0,fe=(G<ue?G+7:G)-ue;return D(P?ne-fe:ne+(6-fe),Z);case u:case w:return F(pe+"Hours",0);case l:return F(pe+"Minutes",1);case o:return F(pe+"Seconds",2);case i:return F(pe+"Milliseconds",3);default:return this.clone()}},v.endOf=function(p){return this.startOf(p,!1)},v.$set=function(p,T){var k,P=E.p(p),R="set"+(this.$u?"UTC":""),D=(k={},k[u]=R+"Date",k[w]=R+"Date",k[h]=R+"Month",k[f]=R+"FullYear",k[l]=R+"Hours",k[o]=R+"Minutes",k[i]=R+"Seconds",k[s]=R+"Milliseconds",k)[P],F=P===u?this.$D+(T-this.$W):T;if(P===h||P===f){var G=this.clone().set(w,1);G.$d[D](F),G.init(),this.$d=G.set(w,Math.min(this.$D,G.daysInMonth())).$d}else D&&this.$d[D](F);return this.init(),this},v.set=function(p,T){return this.clone().$set(p,T)},v.get=function(p){return this[E.p(p)]()},v.add=function(p,T){var k,P=this;p=Number(p);var R=E.p(T),D=function(Z){var ne=H(P);return E.w(ne.date(ne.date()+Math.round(Z*p)),P)};if(R===h)return this.set(h,this.$M+p);if(R===f)return this.set(f,this.$y+p);if(R===u)return D(1);if(R===d)return D(7);var F=(k={},k[o]=r,k[l]=a,k[i]=t,k)[R]||1,G=this.$d.getTime()+p*F;return E.w(G,this)},v.subtract=function(p,T){return this.add(-1*p,T)},v.format=function(p){var T=this,k=this.$locale();if(!this.isValid())return k.invalidDate||m;var P=p||"YYYY-MM-DDTHH:mm:ssZ",R=E.z(this),D=this.$H,F=this.$m,G=this.$M,Z=k.weekdays,ne=k.months,pe=k.meridiem,ue=function(ee,oe,be,Re){return ee&&(ee[oe]||ee(T,P))||be[oe].slice(0,Re)},fe=function(ee){return E.s(D%12||12,ee,"0")},de=pe||function(ee,oe,be){var Re=ee<12?"AM":"PM";return be?Re.toLowerCase():Re};return P.replace(M,function(ee,oe){return oe||function(be){switch(be){case"YY":return String(T.$y).slice(-2);case"YYYY":return E.s(T.$y,4,"0");case"M":return G+1;case"MM":return E.s(G+1,2,"0");case"MMM":return ue(k.monthsShort,G,ne,3);case"MMMM":return ue(ne,G);case"D":return T.$D;case"DD":return E.s(T.$D,2,"0");case"d":return String(T.$W);case"dd":return ue(k.weekdaysMin,T.$W,Z,2);case"ddd":return ue(k.weekdaysShort,T.$W,Z,3);case"dddd":return Z[T.$W];case"H":return String(D);case"HH":return E.s(D,2,"0");case"h":return fe(1);case"hh":return fe(2);case"a":return de(D,F,!0);case"A":return de(D,F,!1);case"m":return String(F);case"mm":return E.s(F,2,"0");case"s":return String(T.$s);case"ss":return E.s(T.$s,2,"0");case"SSS":return E.s(T.$ms,3,"0");case"Z":return R}return null}(ee)||R.replace(":","")})},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(p,T,k){var P,R=this,D=E.p(T),F=H(p),G=(F.utcOffset()-this.utcOffset())*r,Z=this-F,ne=function(){return E.m(R,F)};switch(D){case f:P=ne()/12;break;case h:P=ne();break;case g:P=ne()/3;break;case d:P=(Z-G)/6048e5;break;case u:P=(Z-G)/864e5;break;case l:P=Z/a;break;case o:P=Z/r;break;case i:P=Z/t;break;default:P=Z}return k?P:E.a(P)},v.daysInMonth=function(){return this.endOf(h).$D},v.$locale=function(){return B[this.$L]},v.locale=function(p,T){if(!p)return this.$L;var k=this.clone(),P=I(p,T,!0);return P&&(k.$L=P),k},v.clone=function(){return E.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},q}(),W=x.prototype;return H.prototype=W,[["$ms",s],["$s",i],["$m",o],["$H",l],["$W",u],["$M",h],["$y",f],["$D",w]].forEach(function(q){W[q[1]]=function(v){return this.$g(v,q[0],q[1])}}),H.extend=function(q,v){return q.$i||(q(v,x,H),q.$i=!0),H},H.locale=I,H.isDayjs=y,H.unix=function(q){return H(1e3*q)},H.en=B[c],H.Ls=B,H.p={},H})})(jn);var Mt=jn.exports;const we=wn(Mt);var Ve=function(e,n){return Ve=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])},Ve(e,n)};function re(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");Ve(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var b=function(){return b=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b.apply(this,arguments)};function Ie(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t}function Q(e,n,t){if(arguments.length===2)for(var r=0,a=n.length,s;r<a;r++)(s||!(r in n))&&(s||(s=Array.prototype.slice.call(n,0,r)),s[r]=n[r]);return e.concat(s||Array.prototype.slice.call(n))}function z(e,n){var t=n&&n.cache?n.cache:Dt,r=n&&n.serializer?n.serializer:Ot,a=n&&n.strategy?n.strategy:Nt;return a(e,{cache:t,serializer:r})}function Ht(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Pn(e,n,t,r){var a=Ht(r)?r:t(r),s=n.get(a);return typeof s>"u"&&(s=e.call(this,r),n.set(a,s)),s}function Rn(e,n,t){var r=Array.prototype.slice.call(arguments,3),a=t(r),s=n.get(a);return typeof s>"u"&&(s=e.apply(this,r),n.set(a,s)),s}function nn(e,n,t,r,a){return t.bind(n,e,r,a)}function Nt(e,n){var t=e.length===1?Pn:Rn;return nn(e,this,t,n.cache.create(),n.serializer)}function Lt(e,n){return nn(e,this,Rn,n.cache.create(),n.serializer)}function It(e,n){return nn(e,this,Pn,n.cache.create(),n.serializer)}var Ot=function(){return JSON.stringify(arguments)};function tn(){this.cache=Object.create(null)}tn.prototype.get=function(e){return this.cache[e]};tn.prototype.set=function(e,n){this.cache[e]=n};var Dt={create:function(){return new tn}},J={variadic:Lt,monadic:It};function Mn(e,n,t){if(t===void 0&&(t=Error),!e)throw new t(n)}z(function(){for(var e,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((e=Intl.NumberFormat).bind.apply(e,Q([void 0],n,!1)))},{strategy:J.variadic});z(function(){for(var e,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((e=Intl.DateTimeFormat).bind.apply(e,Q([void 0],n,!1)))},{strategy:J.variadic});z(function(){for(var e,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((e=Intl.PluralRules).bind.apply(e,Q([void 0],n,!1)))},{strategy:J.variadic});z(function(){for(var e,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((e=Intl.Locale).bind.apply(e,Q([void 0],n,!1)))},{strategy:J.variadic});z(function(){for(var e,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new((e=Intl.ListFormat).bind.apply(e,Q([void 0],n,!1)))},{strategy:J.variadic});var N;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(N||(N={}));var C;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(C||(C={}));var ye;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(ye||(ye={}));function hn(e){return e.type===C.literal}function Ct(e){return e.type===C.argument}function Hn(e){return e.type===C.number}function Nn(e){return e.type===C.date}function Ln(e){return e.type===C.time}function In(e){return e.type===C.select}function On(e){return e.type===C.plural}function $t(e){return e.type===C.pound}function Dn(e){return e.type===C.tag}function Cn(e){return!!(e&&typeof e=="object"&&e.type===ye.number)}function Ge(e){return!!(e&&typeof e=="object"&&e.type===ye.dateTime)}var $n=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,Ft=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function Ut(e){var n={};return e.replace(Ft,function(t){var r=t.length;switch(t[0]){case"G":n.era=r===4?"long":r===5?"narrow":"short";break;case"y":n.year=r===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":n.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":n.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":n.weekday=r===4?"long":r===5?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][r-4];break;case"a":n.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":n.hourCycle="h12",n.hour=["numeric","2-digit"][r-1];break;case"H":n.hourCycle="h23",n.hour=["numeric","2-digit"][r-1];break;case"K":n.hourCycle="h11",n.hour=["numeric","2-digit"][r-1];break;case"k":n.hourCycle="h24",n.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":n.minute=["numeric","2-digit"][r-1];break;case"s":n.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":n.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),n}var xt=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function Vt(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var n=e.split(xt).filter(function(g){return g.length>0}),t=[],r=0,a=n;r<a.length;r++){var s=a[r],i=s.split("/");if(i.length===0)throw new Error("Invalid number skeleton");for(var o=i[0],l=i.slice(1),u=0,d=l;u<d.length;u++){var h=d[u];if(h.length===0)throw new Error("Invalid number skeleton")}t.push({stem:o,options:l})}return t}function Gt(e){return e.replace(/^(.*?)-/,"")}var mn=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Fn=/^(@+)?(\+|#+)?[rs]?$/g,Yt=/(\*)(0+)|(#+)(0+)|(0+)/g,Un=/^(0+)$/;function cn(e){var n={};return e[e.length-1]==="r"?n.roundingPriority="morePrecision":e[e.length-1]==="s"&&(n.roundingPriority="lessPrecision"),e.replace(Fn,function(t,r,a){return typeof a!="string"?(n.minimumSignificantDigits=r.length,n.maximumSignificantDigits=r.length):a==="+"?n.minimumSignificantDigits=r.length:r[0]==="#"?n.maximumSignificantDigits=r.length:(n.minimumSignificantDigits=r.length,n.maximumSignificantDigits=r.length+(typeof a=="string"?a.length:0)),""}),n}function xn(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Kt(e){var n;if(e[0]==="E"&&e[1]==="E"?(n={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(n={notation:"scientific"},e=e.slice(1)),n){var t=e.slice(0,2);if(t==="+!"?(n.signDisplay="always",e=e.slice(2)):t==="+?"&&(n.signDisplay="exceptZero",e=e.slice(2)),!Un.test(e))throw new Error("Malformed concise eng/scientific notation");n.minimumIntegerDigits=e.length}return n}function pn(e){var n={},t=xn(e);return t||n}function Wt(e){for(var n={},t=0,r=e;t<r.length;t++){var a=r[t];switch(a.stem){case"percent":case"%":n.style="percent";continue;case"%x100":n.style="percent",n.scale=100;continue;case"currency":n.style="currency",n.currency=a.options[0];continue;case"group-off":case",_":n.useGrouping=!1;continue;case"precision-integer":case".":n.maximumFractionDigits=0;continue;case"measure-unit":case"unit":n.style="unit",n.unit=Gt(a.options[0]);continue;case"compact-short":case"K":n.notation="compact",n.compactDisplay="short";continue;case"compact-long":case"KK":n.notation="compact",n.compactDisplay="long";continue;case"scientific":n=b(b(b({},n),{notation:"scientific"}),a.options.reduce(function(l,u){return b(b({},l),pn(u))},{}));continue;case"engineering":n=b(b(b({},n),{notation:"engineering"}),a.options.reduce(function(l,u){return b(b({},l),pn(u))},{}));continue;case"notation-simple":n.notation="standard";continue;case"unit-width-narrow":n.currencyDisplay="narrowSymbol",n.unitDisplay="narrow";continue;case"unit-width-short":n.currencyDisplay="code",n.unitDisplay="short";continue;case"unit-width-full-name":n.currencyDisplay="name",n.unitDisplay="long";continue;case"unit-width-iso-code":n.currencyDisplay="symbol";continue;case"scale":n.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":n.roundingMode="floor";continue;case"rounding-mode-ceiling":n.roundingMode="ceil";continue;case"rounding-mode-down":n.roundingMode="trunc";continue;case"rounding-mode-up":n.roundingMode="expand";continue;case"rounding-mode-half-even":n.roundingMode="halfEven";continue;case"rounding-mode-half-down":n.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":n.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(Yt,function(l,u,d,h,g,f){if(u)n.minimumIntegerDigits=d.length;else{if(h&&g)throw new Error("We currently do not support maximum integer digits");if(f)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Un.test(a.stem)){n.minimumIntegerDigits=a.stem.length;continue}if(mn.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(mn,function(l,u,d,h,g,f){return d==="*"?n.minimumFractionDigits=u.length:h&&h[0]==="#"?n.maximumFractionDigits=h.length:g&&f?(n.minimumFractionDigits=g.length,n.maximumFractionDigits=g.length+f.length):(n.minimumFractionDigits=u.length,n.maximumFractionDigits=u.length),""});var s=a.options[0];s==="w"?n=b(b({},n),{trailingZeroDisplay:"stripIfInteger"}):s&&(n=b(b({},n),cn(s)));continue}if(Fn.test(a.stem)){n=b(b({},n),cn(a.stem));continue}var i=xn(a.stem);i&&(n=b(b({},n),i));var o=Kt(a.stem);o&&(n=b(b({},n),o))}return n}var Me={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Zt(e,n){for(var t="",r=0;r<e.length;r++){var a=e.charAt(r);if(a==="j"){for(var s=0;r+1<e.length&&e.charAt(r+1)===a;)s++,r++;var i=1+(s&1),o=s<2?1:3+(s>>1),l="a",u=Xt(n);for((u=="H"||u=="k")&&(o=0);o-- >0;)t+=l;for(;i-- >0;)t=u+t}else a==="J"?t+="H":t+=a}return t}function Xt(e){var n=e.hourCycle;if(n===void 0&&e.hourCycles&&e.hourCycles.length&&(n=e.hourCycles[0]),n)switch(n){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=e.language,r;t!=="root"&&(r=e.maximize().region);var a=Me[r||""]||Me[t||""]||Me["".concat(t,"-001")]||Me["001"];return a[0]}var Ce,zt=new RegExp("^".concat($n.source,"*")),Jt=new RegExp("".concat($n.source,"*$"));function L(e,n){return{start:e,end:n}}var Qt=!!String.prototype.startsWith&&"_a".startsWith("a",1),er=!!String.fromCodePoint,nr=!!Object.fromEntries,tr=!!String.prototype.codePointAt,rr=!!String.prototype.trimStart,ar=!!String.prototype.trimEnd,sr=!!Number.isSafeInteger,ir=sr?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Ye=!0;try{var or=Gn("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Ye=((Ce=or.exec("a"))===null||Ce===void 0?void 0:Ce[0])==="a"}catch{Ye=!1}var kn=Qt?function(e,n,t){return e.startsWith(n,t)}:function(e,n,t){return e.slice(t,t+n.length)===n},Ke=er?String.fromCodePoint:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var t="",r=e.length,a=0,s;r>a;){if(s=e[a++],s>1114111)throw RangeError(s+" is not a valid code point");t+=s<65536?String.fromCharCode(s):String.fromCharCode(((s-=65536)>>10)+55296,s%1024+56320)}return t},vn=nr?Object.fromEntries:function(e){for(var n={},t=0,r=e;t<r.length;t++){var a=r[t],s=a[0],i=a[1];n[s]=i}return n},Vn=tr?function(e,n){return e.codePointAt(n)}:function(e,n){var t=e.length;if(!(n<0||n>=t)){var r=e.charCodeAt(n),a;return r<55296||r>56319||n+1===t||(a=e.charCodeAt(n+1))<56320||a>57343?r:(r-55296<<10)+(a-56320)+65536}},lr=rr?function(e){return e.trimStart()}:function(e){return e.replace(zt,"")},ur=ar?function(e){return e.trimEnd()}:function(e){return e.replace(Jt,"")};function Gn(e,n){return new RegExp(e,n)}var We;if(Ye){var yn=Gn("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");We=function(e,n){var t;yn.lastIndex=n;var r=yn.exec(e);return(t=r[1])!==null&&t!==void 0?t:""}}else We=function(e,n){for(var t=[];;){var r=Vn(e,n);if(r===void 0||Yn(r)||mr(r))break;t.push(r),n+=r>=65536?2:1}return Ke.apply(void 0,t)};var dr=function(){function e(n,t){t===void 0&&(t={}),this.message=n,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(n,t,r){for(var a=[];!this.isEOF();){var s=this.char();if(s===123){var i=this.parseArgument(n,r);if(i.err)return i;a.push(i.val)}else{if(s===125&&n>0)break;if(s===35&&(t==="plural"||t==="selectordinal")){var o=this.clonePosition();this.bump(),a.push({type:C.pound,location:L(o,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(r)break;return this.error(N.UNMATCHED_CLOSING_TAG,L(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&Ze(this.peek()||0)){var i=this.parseTag(n,t);if(i.err)return i;a.push(i.val)}else{var i=this.parseLiteral(n,t);if(i.err)return i;a.push(i.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(n,t){var r=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:C.literal,value:"<".concat(a,"/>"),location:L(r,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(n+1,t,!0);if(s.err)return s;var i=s.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Ze(this.char()))return this.error(N.INVALID_TAG,L(o,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return a!==u?this.error(N.UNMATCHED_CLOSING_TAG,L(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:C.tag,value:a,children:i,location:L(r,this.clonePosition())},err:null}:this.error(N.INVALID_TAG,L(o,this.clonePosition())))}else return this.error(N.UNCLOSED_TAG,L(r,this.clonePosition()))}else return this.error(N.INVALID_TAG,L(r,this.clonePosition()))},e.prototype.parseTagName=function(){var n=this.offset();for(this.bump();!this.isEOF()&&hr(this.char());)this.bump();return this.message.slice(n,this.offset())},e.prototype.parseLiteral=function(n,t){for(var r=this.clonePosition(),a="";;){var s=this.tryParseQuote(t);if(s){a+=s;continue}var i=this.tryParseUnquoted(n,t);if(i){a+=i;continue}var o=this.tryParseLeftAngleBracket();if(o){a+=o;continue}break}var l=L(r,this.clonePosition());return{val:{type:C.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!gr(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(n){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(n==="plural"||n==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var r=this.char();if(r===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(r);this.bump()}return Ke.apply(void 0,t)},e.prototype.tryParseUnquoted=function(n,t){if(this.isEOF())return null;var r=this.char();return r===60||r===123||r===35&&(t==="plural"||t==="selectordinal")||r===125&&n>0?null:(this.bump(),Ke(r))},e.prototype.parseArgument=function(n,t){var r=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(N.EXPECT_ARGUMENT_CLOSING_BRACE,L(r,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(N.EMPTY_ARGUMENT,L(r,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(N.MALFORMED_ARGUMENT,L(r,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(N.EXPECT_ARGUMENT_CLOSING_BRACE,L(r,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:C.argument,value:a,location:L(r,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(N.EXPECT_ARGUMENT_CLOSING_BRACE,L(r,this.clonePosition())):this.parseArgumentOptions(n,t,a,r);default:return this.error(N.MALFORMED_ARGUMENT,L(r,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var n=this.clonePosition(),t=this.offset(),r=We(this.message,t),a=t+r.length;this.bumpTo(a);var s=this.clonePosition(),i=L(n,s);return{value:r,location:i}},e.prototype.parseArgumentOptions=function(n,t,r,a){var s,i=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(N.EXPECT_ARGUMENT_TYPE,L(i,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var g=ur(h.val);if(g.length===0)return this.error(N.EXPECT_ARGUMENT_STYLE,L(this.clonePosition(),this.clonePosition()));var f=L(d,this.clonePosition());u={style:g,styleLocation:f}}var w=this.tryParseArgumentClose(a);if(w.err)return w;var m=L(a,this.clonePosition());if(u&&kn(u==null?void 0:u.style,"::",0)){var j=lr(u.style.slice(2));if(o==="number"){var h=this.parseNumberSkeletonFromString(j,u.styleLocation);return h.err?h:{val:{type:C.number,value:r,location:m,style:h.val},err:null}}else{if(j.length===0)return this.error(N.EXPECT_DATE_TIME_SKELETON,m);var M=j;this.locale&&(M=Zt(j,this.locale));var g={type:ye.dateTime,pattern:M,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?Ut(M):{}},$=o==="date"?C.date:C.time;return{val:{type:$,value:r,location:m,style:g},err:null}}}return{val:{type:o==="number"?C.number:o==="date"?C.date:C.time,value:r,location:m,style:(s=u==null?void 0:u.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var S=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(N.EXPECT_SELECT_ARGUMENT_OPTIONS,L(S,b({},S)));this.bumpSpace();var K=this.parseIdentifierIfPossible(),c=0;if(o!=="select"&&K.value==="offset"){if(!this.bumpIf(":"))return this.error(N.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,L(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(N.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,N.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),K=this.parseIdentifierIfPossible(),c=h.val}var B=this.tryParsePluralOrSelectOptions(n,o,t,K);if(B.err)return B;var w=this.tryParseArgumentClose(a);if(w.err)return w;var _=L(a,this.clonePosition());return o==="select"?{val:{type:C.select,value:r,options:vn(B.val),location:_},err:null}:{val:{type:C.plural,value:r,options:vn(B.val),offset:c,pluralType:o==="plural"?"cardinal":"ordinal",location:_},err:null}}default:return this.error(N.INVALID_ARGUMENT_TYPE,L(i,l))}},e.prototype.tryParseArgumentClose=function(n){return this.isEOF()||this.char()!==125?this.error(N.EXPECT_ARGUMENT_CLOSING_BRACE,L(n,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var n=0,t=this.clonePosition();!this.isEOF();){var r=this.char();switch(r){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(N.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,L(a,this.clonePosition()));this.bump();break}case 123:{n+=1,this.bump();break}case 125:{if(n>0)n-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(n,t){var r=[];try{r=Vt(n)}catch{return this.error(N.INVALID_NUMBER_SKELETON,t)}return{val:{type:ye.number,tokens:r,location:t,parsedOptions:this.shouldParseSkeletons?Wt(r):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(n,t,r,a){for(var s,i=!1,o=[],l=new Set,u=a.value,d=a.location;;){if(u.length===0){var h=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var g=this.tryParseDecimalInteger(N.EXPECT_PLURAL_ARGUMENT_SELECTOR,N.INVALID_PLURAL_ARGUMENT_SELECTOR);if(g.err)return g;d=L(h,this.clonePosition()),u=this.message.slice(h.offset,this.offset())}else break}if(l.has(u))return this.error(t==="select"?N.DUPLICATE_SELECT_ARGUMENT_SELECTOR:N.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);u==="other"&&(i=!0),this.bumpSpace();var f=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?N.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:N.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,L(this.clonePosition(),this.clonePosition()));var w=this.parseMessage(n+1,t,r);if(w.err)return w;var m=this.tryParseArgumentClose(f);if(m.err)return m;o.push([u,{value:w.val,location:L(f,this.clonePosition())}]),l.add(u),this.bumpSpace(),s=this.parseIdentifierIfPossible(),u=s.value,d=s.location}return o.length===0?this.error(t==="select"?N.EXPECT_SELECT_ARGUMENT_SELECTOR:N.EXPECT_PLURAL_ARGUMENT_SELECTOR,L(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!i?this.error(N.MISSING_OTHER_CLAUSE,L(this.clonePosition(),this.clonePosition())):{val:o,err:null}},e.prototype.tryParseDecimalInteger=function(n,t){var r=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);for(var s=!1,i=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)s=!0,i=i*10+(o-48),this.bump();else break}var l=L(a,this.clonePosition());return s?(i*=r,ir(i)?{val:i,err:null}:this.error(t,l)):this.error(n,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var n=this.position.offset;if(n>=this.message.length)throw Error("out of bound");var t=Vn(this.message,n);if(t===void 0)throw Error("Offset ".concat(n," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(n,t){return{val:null,err:{kind:n,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var n=this.char();n===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=n<65536?1:2)}},e.prototype.bumpIf=function(n){if(kn(this.message,n,this.offset())){for(var t=0;t<n.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(n){var t=this.offset(),r=this.message.indexOf(n,t);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(n){if(this.offset()>n)throw Error("targetOffset ".concat(n," must be greater than or equal to the current offset ").concat(this.offset()));for(n=Math.min(n,this.message.length);;){var t=this.offset();if(t===n)break;if(t>n)throw Error("targetOffset ".concat(n," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Yn(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var n=this.char(),t=this.offset(),r=this.message.charCodeAt(t+(n>=65536?2:1));return r??null},e}();function Ze(e){return e>=97&&e<=122||e>=65&&e<=90}function gr(e){return Ze(e)||e===47}function hr(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Yn(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function mr(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Xe(e){e.forEach(function(n){if(delete n.location,In(n)||On(n))for(var t in n.options)delete n.options[t].location,Xe(n.options[t].value);else Hn(n)&&Cn(n.style)||(Nn(n)||Ln(n))&&Ge(n.style)?delete n.style.location:Dn(n)&&Xe(n.children)})}function cr(e,n){n===void 0&&(n={}),n=b({shouldParseSkeletons:!0,requiresOtherClause:!0},n);var t=new dr(e,n).parse();if(t.err){var r=SyntaxError(N[t.err.kind]);throw r.location=t.err.location,r.originalMessage=t.err.message,r}return n!=null&&n.captureLocation||Xe(t.val),t.val}var se;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(se||(se={}));var le=function(e){re(n,e);function n(t,r,a){var s=e.call(this,t)||this;return s.code=r,s.originalMessage=a,s}return n.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},n}(Error),fn=function(e){re(n,e);function n(t,r,a,s){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(r,'". Options are "').concat(Object.keys(a).join('", "'),'"'),se.INVALID_VALUE,s)||this}return n}(le),pr=function(e){re(n,e);function n(t,r,a){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(r),se.INVALID_VALUE,a)||this}return n}(le),kr=function(e){re(n,e);function n(t,r){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(r,'"'),se.MISSING_VALUE,r)||this}return n}(le),X;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(X||(X={}));function vr(e){return e.length<2?e:e.reduce(function(n,t){var r=n[n.length-1];return!r||r.type!==X.literal||t.type!==X.literal?n.push(t):r.value+=t.value,n},[])}function Kn(e){return typeof e=="function"}function Ne(e,n,t,r,a,s,i){if(e.length===1&&hn(e[0]))return[{type:X.literal,value:e[0].value}];for(var o=[],l=0,u=e;l<u.length;l++){var d=u[l];if(hn(d)){o.push({type:X.literal,value:d.value});continue}if($t(d)){typeof s=="number"&&o.push({type:X.literal,value:t.getNumberFormat(n).format(s)});continue}var h=d.value;if(!(a&&h in a))throw new kr(h,i);var g=a[h];if(Ct(d)){(!g||typeof g=="string"||typeof g=="number")&&(g=typeof g=="string"||typeof g=="number"?String(g):""),o.push({type:typeof g=="string"?X.literal:X.object,value:g});continue}if(Nn(d)){var f=typeof d.style=="string"?r.date[d.style]:Ge(d.style)?d.style.parsedOptions:void 0;o.push({type:X.literal,value:t.getDateTimeFormat(n,f).format(g)});continue}if(Ln(d)){var f=typeof d.style=="string"?r.time[d.style]:Ge(d.style)?d.style.parsedOptions:r.time.medium;o.push({type:X.literal,value:t.getDateTimeFormat(n,f).format(g)});continue}if(Hn(d)){var f=typeof d.style=="string"?r.number[d.style]:Cn(d.style)?d.style.parsedOptions:void 0;f&&f.scale&&(g=g*(f.scale||1)),o.push({type:X.literal,value:t.getNumberFormat(n,f).format(g)});continue}if(Dn(d)){var w=d.children,m=d.value,j=a[m];if(!Kn(j))throw new pr(m,"function",i);var M=Ne(w,n,t,r,a,s),$=j(M.map(function(c){return c.value}));Array.isArray($)||($=[$]),o.push.apply(o,$.map(function(c){return{type:typeof c=="string"?X.literal:X.object,value:c}}))}if(In(d)){var S=d.options[g]||d.options.other;if(!S)throw new fn(d.value,g,Object.keys(d.options),i);o.push.apply(o,Ne(S.value,n,t,r,a));continue}if(On(d)){var S=d.options["=".concat(g)];if(!S){if(!Intl.PluralRules)throw new le(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,se.MISSING_INTL_API,i);var K=t.getPluralRules(n,{type:d.pluralType}).select(g-(d.offset||0));S=d.options[K]||d.options.other}if(!S)throw new fn(d.value,g,Object.keys(d.options),i);o.push.apply(o,Ne(S.value,n,t,r,a,g-(d.offset||0)));continue}}return vr(o)}function yr(e,n){return n?b(b(b({},e||{}),n||{}),Object.keys(e).reduce(function(t,r){return t[r]=b(b({},e[r]),n[r]||{}),t},{})):e}function fr(e,n){return n?Object.keys(e).reduce(function(t,r){return t[r]=yr(e[r],n[r]),t},b({},e)):e}function $e(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,t){e[n]=t}}}}}function br(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:z(function(){for(var n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new((n=Intl.NumberFormat).bind.apply(n,Q([void 0],t,!1)))},{cache:$e(e.number),strategy:J.variadic}),getDateTimeFormat:z(function(){for(var n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new((n=Intl.DateTimeFormat).bind.apply(n,Q([void 0],t,!1)))},{cache:$e(e.dateTime),strategy:J.variadic}),getPluralRules:z(function(){for(var n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new((n=Intl.PluralRules).bind.apply(n,Q([void 0],t,!1)))},{cache:$e(e.pluralRules),strategy:J.variadic})}}var Wn=function(){function e(n,t,r,a){t===void 0&&(t=e.defaultLocale);var s=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var u=s.formatToParts(l);if(u.length===1)return u[0].value;var d=u.reduce(function(h,g){return!h.length||g.type!==X.literal||typeof h[h.length-1]!="string"?h.push(g.value):h[h.length-1]+=g.value,h},[]);return d.length<=1?d[0]||"":d},this.formatToParts=function(l){return Ne(s.ast,s.locales,s.formatters,s.formats,l,void 0,s.message)},this.resolvedOptions=function(){var l;return{locale:((l=s.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=t,this.resolvedLocale=e.resolveLocale(t),typeof n=="string"){if(this.message=n,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var i=a||{};i.formatters;var o=Ie(i,["formatters"]);this.ast=e.__parse(n,b(b({},o),{locale:this.resolvedLocale}))}else this.ast=n;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=fr(e.formats,r),this.formatters=a&&a.formatters||br(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(n){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(n);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof n=="string"?n:n[0])}},e.__parse=cr,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),me;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(me||(me={}));var Be=function(e){re(n,e);function n(t,r,a){var s=this,i=a?a instanceof Error?a:new Error(String(a)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(t,"] ").concat(r,`
`).concat(i?`
`.concat(i.message,`
`).concat(i.stack):""))||this,s.code=t,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,n),s}return n}(Error),_r=function(e){re(n,e);function n(t,r){return e.call(this,me.UNSUPPORTED_FORMATTER,t,r)||this}return n}(Be),qr=function(e){re(n,e);function n(t,r){return e.call(this,me.INVALID_CONFIG,t,r)||this}return n}(Be),bn=function(e){re(n,e);function n(t,r){return e.call(this,me.MISSING_DATA,t,r)||this}return n}(Be),te=function(e){re(n,e);function n(t,r,a){var s=e.call(this,me.FORMAT_ERROR,"".concat(t,`
Locale: `).concat(r,`
`),a)||this;return s.locale=r,s}return n}(Be),Fe=function(e){re(n,e);function n(t,r,a,s){var i=e.call(this,"".concat(t,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),r,s)||this;return i.descriptor=a,i.locale=r,i}return n}(te),Tr=function(e){re(n,e);function n(t,r){var a=e.call(this,me.MISSING_TRANSLATION,'Missing message: "'.concat(t.id,'" for locale "').concat(r,'", using ').concat(t.defaultMessage?"default message (".concat(typeof t.defaultMessage=="string"?t.defaultMessage:t.defaultMessage.map(function(s){var i;return(i=s.value)!==null&&i!==void 0?i:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=t,a}return n}(Be);function ce(e,n,t){return t===void 0&&(t={}),n.reduce(function(r,a){return a in e?r[a]=e[a]:a in t&&(r[a]=t[a]),r},{})}var Ar=function(e){},Sr=function(e){},Zn={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Ar,onWarn:Sr};function Xn(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function ge(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,t){e[n]=t}}}}}function Er(e){e===void 0&&(e=Xn());var n=Intl.RelativeTimeFormat,t=Intl.ListFormat,r=Intl.DisplayNames,a=z(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.DateTimeFormat).bind.apply(o,Q([void 0],l,!1)))},{cache:ge(e.dateTime),strategy:J.variadic}),s=z(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.NumberFormat).bind.apply(o,Q([void 0],l,!1)))},{cache:ge(e.number),strategy:J.variadic}),i=z(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.PluralRules).bind.apply(o,Q([void 0],l,!1)))},{cache:ge(e.pluralRules),strategy:J.variadic});return{getDateTimeFormat:a,getNumberFormat:s,getMessageFormat:z(function(o,l,u,d){return new Wn(o,l,u,b({formatters:{getNumberFormat:s,getDateTimeFormat:a,getPluralRules:i}},d||{}))},{cache:ge(e.message),strategy:J.variadic}),getRelativeTimeFormat:z(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(n.bind.apply(n,Q([void 0],o,!1)))},{cache:ge(e.relativeTime),strategy:J.variadic}),getPluralRules:i,getListFormat:z(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(t.bind.apply(t,Q([void 0],o,!1)))},{cache:ge(e.list),strategy:J.variadic}),getDisplayNames:z(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(r.bind.apply(r,Q([void 0],o,!1)))},{cache:ge(e.displayNames),strategy:J.variadic})}}function rn(e,n,t,r){var a=e&&e[n],s;if(a&&(s=a[t]),s)return s;r(new _r("No ".concat(n," format named: ").concat(t)))}function He(e,n){return Object.keys(e).reduce(function(t,r){return t[r]=b({timeZone:n},e[r]),t},{})}function _n(e,n){var t=Object.keys(b(b({},e),n));return t.reduce(function(r,a){return r[a]=b(b({},e[a]||{}),n[a]||{}),r},{})}function qn(e,n){if(!n)return e;var t=Wn.formats;return b(b(b({},t),e),{date:_n(He(t.date,n),He(e.date||{},n)),time:_n(He(t.time,n),He(e.time||{},n))})}var ze=function(e,n,t,r,a){var s=e.locale,i=e.formats,o=e.messages,l=e.defaultLocale,u=e.defaultFormats,d=e.fallbackOnEmptyString,h=e.onError,g=e.timeZone,f=e.defaultRichTextElements;t===void 0&&(t={id:""});var w=t.id,m=t.defaultMessage;Mn(!!w,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var j=String(w),M=o&&Object.prototype.hasOwnProperty.call(o,j)&&o[j];if(Array.isArray(M)&&M.length===1&&M[0].type===C.literal)return M[0].value;if(!r&&M&&typeof M=="string"&&!f)return M.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=b(b({},f),r||{}),i=qn(i,g),u=qn(u,g),!M){if(d===!1&&M==="")return M;if((!m||s&&s.toLowerCase()!==l.toLowerCase())&&h(new Tr(t,s)),m)try{var $=n.getMessageFormat(m,l,u,a);return $.format(r)}catch(S){return h(new Fe('Error formatting default message for: "'.concat(j,'", rendering default message verbatim'),s,t,S)),typeof m=="string"?m:j}return j}try{var $=n.getMessageFormat(M,s,i,b({formatters:n},a||{}));return $.format(r)}catch(S){h(new Fe('Error formatting message: "'.concat(j,'", using ').concat(m?"default message":"id"," as fallback."),s,t,S))}if(m)try{var $=n.getMessageFormat(m,l,u,a);return $.format(r)}catch(S){h(new Fe('Error formatting the default message for: "'.concat(j,'", rendering message verbatim'),s,t,S))}return typeof M=="string"?M:typeof m=="string"?m:j},zn=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Oe(e,n,t,r){var a=e.locale,s=e.formats,i=e.onError,o=e.timeZone;r===void 0&&(r={});var l=r.format,u=b(b({},o&&{timeZone:o}),l&&rn(s,n,l,i)),d=ce(r,zn,u);return n==="time"&&!d.hour&&!d.minute&&!d.second&&!d.timeStyle&&!d.dateStyle&&(d=b(b({},d),{hour:"numeric",minute:"numeric"})),t(a,d)}function wr(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],s=t[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Oe(e,"date",n,i).format(o)}catch(l){e.onError(new te("Error formatting date.",e.locale,l))}return String(o)}function Br(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],s=t[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Oe(e,"time",n,i).format(o)}catch(l){e.onError(new te("Error formatting time.",e.locale,l))}return String(o)}function jr(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],s=t[1],i=t[2],o=i===void 0?{}:i,l=e.timeZone,u=e.locale,d=e.onError,h=ce(o,zn,l?{timeZone:l}:{});try{return n(u,h).formatRange(a,s)}catch(g){d(new te("Error formatting date time range.",e.locale,g))}return String(a)}function Pr(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],s=t[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Oe(e,"date",n,i).formatToParts(o)}catch(l){e.onError(new te("Error formatting date.",e.locale,l))}return[]}function Rr(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],s=t[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Oe(e,"time",n,i).formatToParts(o)}catch(l){e.onError(new te("Error formatting time.",e.locale,l))}return[]}var Mr=["style","type","fallback","languageDisplay"];function Hr(e,n,t,r){var a=e.locale,s=e.onError,i=Intl.DisplayNames;i||s(new le(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,se.MISSING_INTL_API));var o=ce(r,Mr);try{return n(a,o).of(t)}catch(l){s(new te("Error formatting display name.",a,l))}}var Nr=["type","style"],Tn=Date.now();function Lr(e){return"".concat(Tn,"_").concat(e,"_").concat(Tn)}function Ir(e,n,t,r){r===void 0&&(r={});var a=Jn(e,n,t,r).reduce(function(s,i){var o=i.value;return typeof o!="string"?s.push(o):typeof s[s.length-1]=="string"?s[s.length-1]+=o:s.push(o),s},[]);return a.length===1?a[0]:a.length===0?"":a}function Jn(e,n,t,r){var a=e.locale,s=e.onError;r===void 0&&(r={});var i=Intl.ListFormat;i||s(new le(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,se.MISSING_INTL_API));var o=ce(r,Nr);try{var l={},u=t.map(function(d,h){if(typeof d=="object"){var g=Lr(h);return l[g]=d,g}return String(d)});return n(a,o).formatToParts(u).map(function(d){return d.type==="literal"?d:b(b({},d),{value:l[d.value]||d.value})})}catch(d){s(new te("Error formatting list.",a,d))}return t}var Or=["type"];function Dr(e,n,t,r){var a=e.locale,s=e.onError;r===void 0&&(r={}),Intl.PluralRules||s(new le(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,se.MISSING_INTL_API));var i=ce(r,Or);try{return n(a,i).select(t)}catch(o){s(new te("Error formatting plural.",a,o))}return"other"}var Cr=["numeric","style"];function $r(e,n,t){var r=e.locale,a=e.formats,s=e.onError;t===void 0&&(t={});var i=t.format,o=!!i&&rn(a,"relative",i,s)||{},l=ce(t,Cr,o);return n(r,l)}function Fr(e,n,t,r,a){a===void 0&&(a={}),r||(r="second");var s=Intl.RelativeTimeFormat;s||e.onError(new le(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,se.MISSING_INTL_API));try{return $r(e,n,a).format(t,r)}catch(i){e.onError(new te("Error formatting relative time.",e.locale,i))}return String(t)}var Ur=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Qn(e,n,t){var r=e.locale,a=e.formats,s=e.onError;t===void 0&&(t={});var i=t.format,o=i&&rn(a,"number",i,s)||{},l=ce(t,Ur,o);return n(r,l)}function xr(e,n,t,r){r===void 0&&(r={});try{return Qn(e,n,r).format(t)}catch(a){e.onError(new te("Error formatting number.",e.locale,a))}return String(t)}function Vr(e,n,t,r){r===void 0&&(r={});try{return Qn(e,n,r).formatToParts(t)}catch(a){e.onError(new te("Error formatting number.",e.locale,a))}return[]}function Gr(e){var n=e?e[Object.keys(e)[0]]:void 0;return typeof n=="string"}function Yr(e){e.onWarn&&e.defaultRichTextElements&&Gr(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function Kr(e,n){var t=Er(n),r=b(b({},Zn),e),a=r.locale,s=r.defaultLocale,i=r.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&i?i(new bn('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&i&&i(new bn('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(i&&i(new qr('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),Yr(r),b(b({},r),{formatters:t,formatNumber:xr.bind(null,r,t.getNumberFormat),formatNumberToParts:Vr.bind(null,r,t.getNumberFormat),formatRelativeTime:Fr.bind(null,r,t.getRelativeTimeFormat),formatDate:wr.bind(null,r,t.getDateTimeFormat),formatDateToParts:Pr.bind(null,r,t.getDateTimeFormat),formatTime:Br.bind(null,r,t.getDateTimeFormat),formatDateTimeRange:jr.bind(null,r,t.getDateTimeFormat),formatTimeToParts:Rr.bind(null,r,t.getDateTimeFormat),formatPlural:Dr.bind(null,r,t.getPluralRules),formatMessage:ze.bind(null,r,t),$t:ze.bind(null,r,t),formatList:Ir.bind(null,r,t.getListFormat),formatListToParts:Jn.bind(null,r,t.getListFormat),formatDisplayName:Hr.bind(null,r,t.getDisplayNames)})}function Wr(e){Mn(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Zr=b(b({},Zn),{textComponent:V.Fragment});function Xr(e){return function(n){return e(V.Children.toArray(n))}}var et={exports:{}},O={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var An;function zr(){if(An)return O;An=1;var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,o=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,w=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,j=e?Symbol.for("react.fundamental"):60117,M=e?Symbol.for("react.responder"):60118,$=e?Symbol.for("react.scope"):60119;function S(c){if(typeof c=="object"&&c!==null){var B=c.$$typeof;switch(B){case n:switch(c=c.type,c){case l:case u:case r:case s:case a:case h:return c;default:switch(c=c&&c.$$typeof,c){case o:case d:case w:case f:case i:return c;default:return B}}case t:return B}}}function K(c){return S(c)===u}return O.AsyncMode=l,O.ConcurrentMode=u,O.ContextConsumer=o,O.ContextProvider=i,O.Element=n,O.ForwardRef=d,O.Fragment=r,O.Lazy=w,O.Memo=f,O.Portal=t,O.Profiler=s,O.StrictMode=a,O.Suspense=h,O.isAsyncMode=function(c){return K(c)||S(c)===l},O.isConcurrentMode=K,O.isContextConsumer=function(c){return S(c)===o},O.isContextProvider=function(c){return S(c)===i},O.isElement=function(c){return typeof c=="object"&&c!==null&&c.$$typeof===n},O.isForwardRef=function(c){return S(c)===d},O.isFragment=function(c){return S(c)===r},O.isLazy=function(c){return S(c)===w},O.isMemo=function(c){return S(c)===f},O.isPortal=function(c){return S(c)===t},O.isProfiler=function(c){return S(c)===s},O.isStrictMode=function(c){return S(c)===a},O.isSuspense=function(c){return S(c)===h},O.isValidElementType=function(c){return typeof c=="string"||typeof c=="function"||c===r||c===u||c===s||c===a||c===h||c===g||typeof c=="object"&&c!==null&&(c.$$typeof===w||c.$$typeof===f||c.$$typeof===i||c.$$typeof===o||c.$$typeof===d||c.$$typeof===j||c.$$typeof===M||c.$$typeof===$||c.$$typeof===m)},O.typeOf=S,O}et.exports=zr();var Jr=et.exports,nt=Jr,Qr={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ea={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tt={};tt[nt.ForwardRef]=Qr;tt[nt.Memo]=ea;var an=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=V.createContext(null)):V.createContext(null);an.Consumer;an.Provider;var na=an;function rt(){var e=V.useContext(na);return Wr(e),e}var Je;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Je||(Je={}));var Qe;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Qe||(Qe={}));function at(e){var n=function(t){var r=rt(),a=t.value,s=t.children,i=Ie(t,["value","children"]),o=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?r.formatDateToParts(o,i):r.formatTimeToParts(o,i);return s(l)};return n.displayName=Qe[e],n}function je(e){var n=function(t){var r=rt(),a=t.value,s=t.children,i=Ie(t,["value","children"]),o=r[e](a,i);if(typeof s=="function")return s(o);var l=r.textComponent||V.Fragment;return V.createElement(l,null,o)};return n.displayName=Je[e],n}function st(e){return e&&Object.keys(e).reduce(function(n,t){var r=e[t];return n[t]=Kn(r)?Xr(r):r,n},{})}var Sn=function(e,n,t,r){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];var i=st(r),o=ze.apply(void 0,Q([e,n,t,i],a,!1));return Array.isArray(o)?V.Children.toArray(o):o},ta=function(e,n){var t=e.defaultRichTextElements,r=Ie(e,["defaultRichTextElements"]),a=st(t),s=Kr(b(b(b({},Zr),r),{defaultRichTextElements:a}),n),i={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:a};return b(b({},s),{formatMessage:Sn.bind(null,i,s.formatters),$t:Sn.bind(null,i,s.formatters)})};je("formatDate");je("formatTime");je("formatNumber");je("formatList");je("formatDisplayName");at("formatDate");at("formatTime");var De=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var it={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(De,function(){var t="minute",r=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(s,i,o){var l=i.prototype;o.utc=function(m){var j={date:m,utc:!0,args:arguments};return new i(j)},l.utc=function(m){var j=o(this.toDate(),{locale:this.$L,utc:!0});return m?j.add(this.utcOffset(),t):j},l.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var u=l.parse;l.parse=function(m){m.utc&&(this.$u=!0),this.$utils().u(m.$offset)||(this.$offset=m.$offset),u.call(this,m)};var d=l.init;l.init=function(){if(this.$u){var m=this.$d;this.$y=m.getUTCFullYear(),this.$M=m.getUTCMonth(),this.$D=m.getUTCDate(),this.$W=m.getUTCDay(),this.$H=m.getUTCHours(),this.$m=m.getUTCMinutes(),this.$s=m.getUTCSeconds(),this.$ms=m.getUTCMilliseconds()}else d.call(this)};var h=l.utcOffset;l.utcOffset=function(m,j){var M=this.$utils().u;if(M(m))return this.$u?0:M(this.$offset)?h.call(this):this.$offset;if(typeof m=="string"&&(m=function(c){c===void 0&&(c="");var B=c.match(r);if(!B)return null;var _=(""+B[0]).match(a)||["-",0,0],y=_[0],I=60*+_[1]+ +_[2];return I===0?0:y==="+"?I:-I}(m),m===null))return this;var $=Math.abs(m)<=16?60*m:m,S=this;if(j)return S.$offset=$,S.$u=m===0,S;if(m!==0){var K=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(S=this.local().add($+K,t)).$offset=$,S.$x.$localOffset=K}else S=this.utc();return S};var g=l.format;l.format=function(m){var j=m||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return g.call(this,j)},l.valueOf=function(){var m=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*m},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var f=l.toDate;l.toDate=function(m){return m==="s"&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():f.call(this)};var w=l.diff;l.diff=function(m,j,M){if(m&&this.$u===m.$u)return w.call(this,m,j,M);var $=this.local(),S=o(m).local();return w.call($,S,j,M)}}})})(it);var ra=it.exports;const aa=sn(ra);var ot={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(De,function(){var t,r,a=1e3,s=6e4,i=36e5,o=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,d=2628e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,g={years:u,months:d,days:o,hours:i,minutes:s,seconds:a,milliseconds:1,weeks:6048e5},f=function(B){return B instanceof K},w=function(B,_,y){return new K(B,y,_.$l)},m=function(B){return r.p(B)+"s"},j=function(B){return B<0},M=function(B){return j(B)?Math.ceil(B):Math.floor(B)},$=function(B){return Math.abs(B)},S=function(B,_){return B?j(B)?{negative:!0,format:""+$(B)+_}:{negative:!1,format:""+B+_}:{negative:!1,format:""}},K=function(){function B(y,I,H){var E=this;if(this.$d={},this.$l=H,y===void 0&&(this.$ms=0,this.parseFromMilliseconds()),I)return w(y*g[m(I)],this);if(typeof y=="number")return this.$ms=y,this.parseFromMilliseconds(),this;if(typeof y=="object")return Object.keys(y).forEach(function(q){E.$d[m(q)]=y[q]}),this.calMilliseconds(),this;if(typeof y=="string"){var x=y.match(h);if(x){var W=x.slice(2).map(function(q){return q!=null?Number(q):0});return this.$d.years=W[0],this.$d.months=W[1],this.$d.weeks=W[2],this.$d.days=W[3],this.$d.hours=W[4],this.$d.minutes=W[5],this.$d.seconds=W[6],this.calMilliseconds(),this}}return this}var _=B.prototype;return _.calMilliseconds=function(){var y=this;this.$ms=Object.keys(this.$d).reduce(function(I,H){return I+(y.$d[H]||0)*g[H]},0)},_.parseFromMilliseconds=function(){var y=this.$ms;this.$d.years=M(y/u),y%=u,this.$d.months=M(y/d),y%=d,this.$d.days=M(y/o),y%=o,this.$d.hours=M(y/i),y%=i,this.$d.minutes=M(y/s),y%=s,this.$d.seconds=M(y/a),y%=a,this.$d.milliseconds=y},_.toISOString=function(){var y=S(this.$d.years,"Y"),I=S(this.$d.months,"M"),H=+this.$d.days||0;this.$d.weeks&&(H+=7*this.$d.weeks);var E=S(H,"D"),x=S(this.$d.hours,"H"),W=S(this.$d.minutes,"M"),q=this.$d.seconds||0;this.$d.milliseconds&&(q+=this.$d.milliseconds/1e3,q=Math.round(1e3*q)/1e3);var v=S(q,"S"),p=y.negative||I.negative||E.negative||x.negative||W.negative||v.negative,T=x.format||W.format||v.format?"T":"",k=(p?"-":"")+"P"+y.format+I.format+E.format+T+x.format+W.format+v.format;return k==="P"||k==="-P"?"P0D":k},_.toJSON=function(){return this.toISOString()},_.format=function(y){var I=y||"YYYY-MM-DDTHH:mm:ss",H={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return I.replace(l,function(E,x){return x||String(H[E])})},_.as=function(y){return this.$ms/g[m(y)]},_.get=function(y){var I=this.$ms,H=m(y);return H==="milliseconds"?I%=1e3:I=H==="weeks"?M(I/g[H]):this.$d[H],I||0},_.add=function(y,I,H){var E;return E=I?y*g[m(I)]:f(y)?y.$ms:w(y,this).$ms,w(this.$ms+E*(H?-1:1),this)},_.subtract=function(y,I){return this.add(y,I,!0)},_.locale=function(y){var I=this.clone();return I.$l=y,I},_.clone=function(){return w(this.$ms,this)},_.humanize=function(y){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!y)},_.valueOf=function(){return this.asMilliseconds()},_.milliseconds=function(){return this.get("milliseconds")},_.asMilliseconds=function(){return this.as("milliseconds")},_.seconds=function(){return this.get("seconds")},_.asSeconds=function(){return this.as("seconds")},_.minutes=function(){return this.get("minutes")},_.asMinutes=function(){return this.as("minutes")},_.hours=function(){return this.get("hours")},_.asHours=function(){return this.as("hours")},_.days=function(){return this.get("days")},_.asDays=function(){return this.as("days")},_.weeks=function(){return this.get("weeks")},_.asWeeks=function(){return this.as("weeks")},_.months=function(){return this.get("months")},_.asMonths=function(){return this.as("months")},_.years=function(){return this.get("years")},_.asYears=function(){return this.as("years")},B}(),c=function(B,_,y){return B.add(_.years()*y,"y").add(_.months()*y,"M").add(_.days()*y,"d").add(_.hours()*y,"h").add(_.minutes()*y,"m").add(_.seconds()*y,"s").add(_.milliseconds()*y,"ms")};return function(B,_,y){t=y,r=y().$utils(),y.duration=function(E,x){var W=y.locale();return w(E,{$l:W},x)},y.isDuration=f;var I=_.prototype.add,H=_.prototype.subtract;_.prototype.add=function(E,x){return f(E)?c(this,E,1):I.bind(this)(E,x)},_.prototype.subtract=function(E,x){return f(E)?c(this,E,-1):H.bind(this)(E,x)}}})})(ot);var sa=ot.exports;const ia=sn(sa);var lt={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(De,function(){var t="day";return function(r,a,s){var i=function(u){return u.add(4-u.isoWeekday(),t)},o=a.prototype;o.isoWeekYear=function(){return i(this).year()},o.isoWeek=function(u){if(!this.$utils().u(u))return this.add(7*(u-this.isoWeek()),t);var d,h,g,f,w=i(this),m=(d=this.isoWeekYear(),h=this.$u,g=(h?s.utc:s)().year(d).startOf("year"),f=4-g.isoWeekday(),g.isoWeekday()>4&&(f+=7),g.add(f,t));return w.diff(m,"week")+1},o.isoWeekday=function(u){return this.$utils().u(u)?this.day()||7:this.day(this.day()%7?u:u-7)};var l=o.startOf;o.startOf=function(u,d){var h=this.$utils(),g=!!h.u(d)||d;return h.p(u)==="isoweek"?g?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(u,d)}}})})(lt);var oa=lt.exports;const la=sn(oa);var ua={exports:{}};(function(e,n){(function(t,r){e.exports=r(we)})(De,function(t){function r(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var a=r(t),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})})(ua);const da=Xn(),ut=e=>ta({locale:"nb-NO",messages:e},da),dt={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};we.extend(aa);we.extend(la);we.extend(ia);ut(dt);const ga=(e,n,t)=>we(e,["YYYY-MM-DD","DD.MM.YYYY"],t).utc(!0).startOf("day"),ha=e=>ga(e).format("DD.MM.YYYY");ut(dt);const Pe=e=>({block:e,element:n=>`${e}__${n}`,modifier:n=>`${e}--${n}`,elementWithModifier:(n,t)=>`${e}__${n} ${e}__${n}--${t}`});var gt={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function t(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,r.call(this,o)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return t.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)n.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(gt);var ma=gt.exports;const ca=wn(ma),pa="_clipboard_1lghs_1",ka="_clipboard__button_1lghs_6",va="_clipboard__button_1lghs_6",ya="_showTooltip_1lghs_1",fa="_clipboard__kopiert_1lghs_48",ba="_clipboard__kopiert_1lghs_48",_a="_clipboard__animationContainer_1lghs_57",qa="_clipboard__animationContainer_1lghs_57",Ta="_clipboard__animate_1lghs_60",Aa="_clipboard__animate_1lghs_60",Sa="_fadeInOut_1lghs_1",Ea={clipboard:pa,clipboard__button:ka,clipboardButton:va,showTooltip:ya,clipboard__kopiert:fa,clipboardKopiert:ba,clipboard__animationContainer:_a,clipboardAnimationContainer:qa,clipboard__animate:Ta,clipboardAnimate:Aa,fadeInOut:Sa};ca.bind(Ea);const wa="_autocompleteSuggestion__substring_mf7v0_1",Ba="_autocompleteSuggestion__substring_mf7v0_1",ja="_autocompleteSuggestion__inner_mf7v0_4",Pa="_autocompleteSuggestion__inner_mf7v0_4",Ra="_autocompleteSuggestion--active_mf7v0_12",qe={autocompleteSuggestion__substring:wa,autocompleteSuggestionSubstring:Ba,autocompleteSuggestion__inner:ja,autocompleteSuggestionInner:Pa,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_mf7v0_12",autocompleteSuggestionActive:Ra};class Ma extends Ee.Component{constructor(n){super(n),this.state={value:n.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:n}=this.props,{value:t}=this.state;n(t)}onMouseMove(){const{setSuggestionIndex:n,index:t}=this.props;n(t)}render(){const{match:n,active:t,avoidBlur:r,id:a}=this.props,{value:s}=this.state.value,i=s.toLowerCase().startsWith(n.toLowerCase());return A.jsx("li",{id:a,role:"option","aria-selected":t,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:r,onMouseDown:r,onKeyDown:r,className:"autocompleteSuggestion typo-normal",children:i?A.jsxs("span",{className:`${qe.autocompleteSuggestion__inner} ${t?qe["autocompleteSuggestion--active"]:""}`,children:[s.substring(0,n.length),A.jsx("span",{className:qe.autocompleteSuggestion__substring,children:s.substring(n.length)})]}):A.jsx("span",{className:`${qe.autocompleteSuggestion__inner} ${t?qe["autocompleteSuggestion--active"]:""}`,children:s})})}}const Ha="_autocomplete_9dlnp_1",Na="_autocomplete__suggestions_9dlnp_27",La="_autocomplete__suggestions_9dlnp_27",Ia="_autocomplete__suggestions--hidden_9dlnp_31",Ue={autocomplete:Ha,autocomplete__suggestions:Na,autocompleteSuggestions:La,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_9dlnp_31",autocompleteSuggestionsHidden:Ia};class ei extends Ee.Component{constructor(n){super(n),dn(this,"input"),dn(this,"inputRef"),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=t=>{this.input=t},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:n}=this.state;n&&(clearTimeout(n),this.setState({blurDelay:null}))}onChange(n){const{onChange:t}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),t(n)}onSearchButtonClick(n){const{onSearchButtonClick:t}=this.props;n.preventDefault(),t&&t()}onKeyDown(n){const{shouldShowSuggestions:t}=this.state;let{activeSuggestionIndex:r}=this.state;const{suggestions:a}=this.props,s=r>-1;switch(this.setState({setAriaActiveDescendant:n.keyCode===38||n.keyCode===40}),n.keyCode){case 9:s&&t&&this.setValue(a[r]);break;case 13:s&&t?(n.preventDefault(),this.setValue(a[r])):t&&a.length===1?this.setValue(a[0]):this.setState({shouldShowSuggestions:!1});break;case 27:t&&a.length>0&&(n.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:t&&(n.preventDefault(),r=r-1===-2?-1:r-1,this.setState({activeSuggestionIndex:r}));break;case 40:t&&(n.preventDefault(),r=r+1===a.length?a.length-1:r+1,this.setState({activeSuggestionIndex:r}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const n=setTimeout(()=>{const{shouldBlur:r}=this.state;r&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:n});const{onBlur:t}=this.props;t&&t()}setSuggestionIndex(n){this.setState({activeSuggestionIndex:n}),this.clearBlurDelay()}setValue(n){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:t}=this.props;t(n)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:n}=this.state;n&&(clearTimeout(n),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:n,id:t,ariaLabel:r,placeholder:a,value:s,name:i,shouldFocusOnMount:o,isLoading:l}=this.props,{activeSuggestionIndex:u,setAriaActiveDescendant:d,hasFocus:h,shouldShowSuggestions:g}=this.state,f=h&&g&&n.length>0,w=d&&u>-1?`${t}-item-${u}`:void 0;return A.jsxs("div",{className:`${Ue.autocomplete} autocomplete`,"aria-expanded":f,"aria-owns":`${t}-suggestions`,"aria-haspopup":"listbox",children:[A.jsx(ln,{variant:"primary",id:t,name:i,"aria-label":r,"aria-autocomplete":"list","aria-controls":`${t}-suggestions`,"aria-activedescendant":w,placeholder:a,value:s,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:m=>{this.inputRef=m},className:"typo-normal",autoFocus:o,label:r,hideLabel:!0,children:A.jsx(ln.Button,{loading:l,onClick:this.onSearchButtonClick})}),A.jsx("ul",{id:`${t}-suggestions`,role:"listbox",className:f?Ue.autocomplete__suggestions:Ue["autocomplete__suggestions--hidden"],children:f&&n.map((m,j)=>A.jsx(Ma,{id:`${t}-item-${j}`,index:j,value:m,match:s,active:j===u,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},m.key))})]})}}var ie=(e=>(e.warning="warning",e.success="success",e.danger="danger",e.default="default",e))(ie||{});const Oa=({className:e})=>A.jsxs("svg",{width:"28px",height:"28px",viewBox:"0 0 28 28",xmlns:"http://www.w3.org/2000/svg",className:e,children:[A.jsx("title",{children:"Oppgave løst/avslått"}),A.jsx("defs",{}),A.jsx("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:A.jsx("g",{fill:"#BA3A26",children:A.jsx("path",{d:"M13.998761,0 C6.29390605,0 0.0146135764,6.26713043 4.90835943e-06,13.972 C-0.00729942565,17.7118261 1.44139349,21.230087 4.08069284,23.8803478 C6.7199922,26.5293913 10.2333769,27.9926957 13.9731959,28 L13.9999784,28 C21.703616,28 27.9841259,21.7316522 27.9999519,14.0255652 C28.0145606,6.30730435 21.7462246,0.0146086957 13.998761,0 Z M19.5853592,18.7453913 C19.8215326,18.9827826 19.8203152,19.3686957 19.5829244,19.606087 C19.4636203,19.7253913 19.3090119,19.7838261 19.1531861,19.7838261 C18.9985777,19.7838261 18.8415345,19.7241739 18.7222304,19.606087 L13.9963263,14.8606957 L9.25337871,19.5866087 C9.13407459,19.705913 8.97824879,19.7643478 8.822423,19.7643478 C8.66659721,19.7643478 8.51198881,19.7046957 8.39268468,19.5866087 C8.15529383,19.348 8.15529383,18.962087 8.39390207,18.725913 L13.138067,14 L8.41216291,9.2546087 C8.17477205,9.016 8.17598944,8.63130435 8.41459769,8.39513043 C8.65198854,8.15530435 9.03790085,8.15652174 9.27529171,8.39634783 L13.9999784,13.1405217 L18.742926,8.41582609 C18.9803168,8.17843478 19.3674465,8.17843478 19.60362,8.41704348 C19.8410109,8.65443478 19.8410109,9.04034783 19.6024026,9.27773913 L14.8594551,14.0036522 L19.5853592,18.7453913 Z"})})})]}),Da=({className:e})=>A.jsxs("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",className:e,children:[A.jsx("title",{children:"Behandlet - Oppgave løst/godkjent"}),A.jsx("defs",{}),A.jsx("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:A.jsx("g",{fillRule:"nonzero",fill:"#06893A",children:A.jsx("g",{children:A.jsx("g",{id:"Filled_Version",children:A.jsx("path",{d:"M15.7173333,0.122 C15.416,-0.0906666667 15.0006667,-0.0186666667 14.7886667,0.282666667 L4.91133333,14.302 L1.138,10.5293333 C0.878,10.2686667 0.455333333,10.2686667 0.195333333,10.5293333 C-0.0653333333,10.7906667 -0.0653333333,11.212 0.195333333,11.472 L4.52866667,15.8053333 C4.654,15.9306667 4.824,16 5,16 C5.212,16 5.418,15.898 5.54466667,15.7173333 L15.878,1.05066667 C16.09,0.75 16.018,0.333333333 15.7173333,0.122 Z"})})})})})]}),Ca=({className:e})=>A.jsx("svg",{width:"1.25rem",height:"1.25em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false",role:"img",style:{color:"var(--ac-alert-icon-warning-color,var(--a-icon-warning))"},className:e,children:A.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25ZM12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",fill:"currentColor"})}),$a="_step_1k8mj_1",Fa="_step__button_1k8mj_9",Ua="_step__button_1k8mj_9",xa="_step__indicator--default_1k8mj_25",Va="_step__indicator--success_1k8mj_29",Ga="_step__indicator--partial_1k8mj_33",Ya="_step__indicator--warning_1k8mj_36",Ka="_step__indicator--danger_1k8mj_44",Wa="_step__button--active_1k8mj_56",Za="_step__text-icon-container_1k8mj_62",Xa="_step__indicator_1k8mj_25",za="_step__indicator_1k8mj_25",Ja="_step__indicator--active_1k8mj_80",Qa="_step__icon_1k8mj_128",es="_step__icon_1k8mj_128",ns="_step__icon--warning_1k8mj_136",ts="_step__icon--partial_1k8mj_148",rs="_step__icon--success_1k8mj_162",as="_step__icon--danger_1k8mj_166",ss="_step__icon-placeholder_1k8mj_172",is="_step__arrow-container_1k8mj_179",os="_showTooltip_1k8mj_1",U={step:$a,step__button:Fa,stepButton:Ua,"step__indicator--default":"_step__indicator--default_1k8mj_25",stepIndicatorDefault:xa,"step__indicator--success":"_step__indicator--success_1k8mj_29",stepIndicatorSuccess:Va,"step__indicator--partial":"_step__indicator--partial_1k8mj_33",stepIndicatorPartial:Ga,"step__indicator--warning":"_step__indicator--warning_1k8mj_36",stepIndicatorWarning:Ya,"step__indicator--danger":"_step__indicator--danger_1k8mj_44",stepIndicatorDanger:Ka,"step__button--active":"_step__button--active_1k8mj_56",stepButtonActive:Wa,"step__text-icon-container":"_step__text-icon-container_1k8mj_62",stepTextIconContainer:Za,step__indicator:Xa,stepIndicator:za,"step__indicator--active":"_step__indicator--active_1k8mj_80",stepIndicatorActive:Ja,step__icon:Qa,stepIcon:es,"step__icon--warning":"_step__icon--warning_1k8mj_136",stepIconWarning:ns,"step__icon--partial":"_step__icon--partial_1k8mj_148",stepIconPartial:ts,"step__icon--success":"_step__icon--success_1k8mj_162",stepIconSuccess:rs,"step__icon--danger":"_step__icon--danger_1k8mj_166",stepIconDanger:as,"step__icon-placeholder":"_step__icon-placeholder_1k8mj_172",stepIconPlaceholder:ss,"step__arrow-container":"_step__arrow-container_1k8mj_179",stepArrowContainer:is,showTooltip:os},Te=Pe("step"),ls=({type:e,isFinished:n,usePartialStatus:t})=>{const r=e===ie.warning,a=e===ie.danger;return t&&!r?A.jsx("div",{className:ve(`${U[Te.element("icon")]} ${U["step__icon--partial"]}`,{[U["step__icon--success"]]:!a,[U["step__icon--danger"]]:a})}):n?A.jsx(Da,{className:`${U[Te.element("icon")]} ${U["step__icon--success"]}`}):r?A.jsx(Ca,{className:`${U[Te.element("icon")]} ${U["step__icon--warning"]} `}):a?A.jsx(Oa,{className:`${U[Te.element("icon")]} ${U["step__icon--danger"]}`}):A.jsx("span",{className:U[Te.element("icon-placeholder")]})},ke=Pe("step"),us=Ee.memo(({label:e,index:n,isActive:t,onClick:r,isFinished:a,type:s=ie.default,usePartialStatus:i,stepArrowContainerStyle:o})=>{const l=d=>{d.preventDefault(),r&&r(n)},u=ve(`${U[ke.element("indicator")]} ${U[`step__indicator--${s}`]}`,{[U["step__indicator--active"]]:t,[U["step__indicator--partial"]]:i});return A.jsxs("li",{className:U[ke.block],"aria-current":t?"step":void 0,children:[A.jsxs("button",{className:t?`${U[ke.element("button")]} ${U["step__button--active"]}`:U[ke.element("button")],type:"button",onClick:l,"data-tooltip":e,children:[A.jsxs("span",{className:U[ke.element("text-icon-container")],children:[A.jsx(ls,{type:s,isFinished:a,usePartialStatus:i}),A.jsx(Le,{size:"small",as:"span",children:e})]}),A.jsx("span",{className:u})]}),t&&A.jsx("div",{className:ve(o,`${U[ke.element("arrow-container")]} step__arrow-container`)})]},e.split(" ").join(""))}),ds="_processMenu_1v3c8_1",gs="_step_1v3c8_6",hs={processMenu:ds,step:gs},ms=Pe("processMenu"),cs=({steps:e,onClick:n,stepArrowContainerStyle:t})=>A.jsx("ol",{className:hs[ms.block],children:e.map((r,a)=>A.jsx(us,{index:a,onClick:n,...r,stepArrowContainerStyle:t},r.label.split(" ").join("")))}),ps="_menuLink__button_18c28_1",ks="_menu-link__button_18c28_65",vs="_menu-link__button--active_18c28_65",ys="_menuLink__label_18c28_43",fs="_menuLink__label_18c28_43",bs="_menuLink__label--active_18c28_53",_s="_menuLink__label--with-icon_18c28_58",qs="_menuLink__icon_18c28_62",Ts="_menuLink__icon_18c28_62",As="_menuLink--withArrows_18c28_65",Ss="_menuLink__arrow-right_18c28_74",ae={menuLink__button:ps,menuLinkButton:ks,"menuLink__button--active":"_menuLink__button--active_18c28_19",menuLinkButtonActive:vs,menuLink__label:ys,menuLinkLabel:fs,"menuLink__label--active":"_menuLink__label--active_18c28_53",menuLinkLabelActive:bs,"menuLink__label--with-icon":"_menuLink__label--with-icon_18c28_58",menuLinkLabelWithIcon:_s,menuLink__icon:qs,menuLinkIcon:Ts,"menuLink--withArrows":"_menuLink--withArrows_18c28_65",menuLinkWithArrows:As,"menu-link__button--active":"_menu-link__button--active_18c28_65","menu-link__button":"_menu-link__button_18c28_65","menu-link__arrow-right":"_menu-link__arrow-right_18c28_68",menuLinkArrowRight:Ss,"menuLink__arrow-right":"_menuLink__arrow-right_18c28_74"},he=Pe("menuLink"),Es=({label:e,active:n,onClick:t,icon:r,theme:a})=>{const s=a==="arrow",i=u=>{u.preventDefault(),t()},o=ve(n?`${ae[he.element("label")]} ${ae["menuLink__label--active"]}`:ae[he.element("label")],{[ae["menuLink__label--with-icon"]]:!!r}),l=ve(ae[he.block],{[ae[he.modifier("withArrows")]]:s});return A.jsx("li",{className:l,"aria-current":n?!0:void 0,children:A.jsxs("button",{className:n?`${ae[he.element("button")]} ${ae["menuLink__button--active"]}`:ae[he.element("button")],onClick:i,type:"button","data-testid":n?"activeMenuItemButton":void 0,children:[s&&n?A.jsxs(Et,{size:"small",as:"span",className:o,children:[e,r]}):A.jsxs(Le,{size:"small",as:"span",className:o,children:[e,r]}),s&&n&&A.jsx("span",{className:ae[he.element("arrow-right")]})]})})},ws="_sideMenu_2s0gl_1",Bs="_sideMenu__container_2s0gl_5",js="_side-menu__container_2s0gl_28",Ps="_sideMenu__link-list_2s0gl_13",Rs="_sideMenu__heading_2s0gl_18",Ms="_side-menu__heading_2s0gl_32",Hs="_sideMenu--arrow_2s0gl_28",Ae={sideMenu:ws,sideMenu__container:Bs,sideMenuContainer:js,"sideMenu__link-list":"_sideMenu__link-list_2s0gl_13",sideMenuLinkList:Ps,sideMenu__heading:Rs,sideMenuHeading:Ms,"sideMenu--arrow":"_sideMenu--arrow_2s0gl_28",sideMenuArrow:Hs,"side-menu__container":"_side-menu__container_2s0gl_28","side-menu__heading":"_side-menu__heading_2s0gl_32"},Se=Pe("sideMenu"),Ns=({links:e,heading:n,onClick:t,theme:r})=>{const a=ve(Ae[Se.block],r?{[Ae[Se.modifier(r)]]:r}:{});return A.jsx("div",{className:a,children:A.jsxs("nav",{className:Ae[Se.element("container")],children:[n&&A.jsx(Le,{size:"small",className:Ae[Se.element("heading")],children:n}),A.jsx("ul",{className:Ae[Se.element("link-list")],children:e.map(({label:s,active:i,icon:o},l)=>A.jsx(Es,{label:s,active:i,onClick:()=>t(l),icon:o,theme:r},s.split(" ").join("")))})]})})},ni=({gender:e,isChild:n=!1,size:t=30})=>{let r=Tt,a="var(--a-gray-400)";return n?r=qt:e===en.male?(r=At,a="var(--a-blue-400)"):e===en.female&&(r=St,a="var(--a-red-300)"),A.jsx(r,{height:t,width:t,color:"white",style:{backgroundColor:a,borderRadius:"50%"}})};var en=(e=>(e.male="male",e.female="female",e.unknown="unknown",e))(en||{});const Ls="_assessed-by_3btl4_1",Is={"assessed-by":"_assessed-by_3btl4_1",assessedBy:Ls},Os=Ee.createContext({}),ti=({ident:e,date:n})=>{const t=V.useContext(Os);if(!e)return null;const r=t[e]||e,a=n?`, ${ha(n)}`:"";return A.jsxs("div",{className:Is["assessed-by"],children:[A.jsx(kt,{height:"1em",width:"1em"}),A.jsx(Le,{size:"small",children:`Vurdering av ${r}${a}`})]})},Ds="_stepArrowContainer_1c5tg_1",Cs={stepArrowContainer:Ds},$s=(e,n)=>n?ie.warning:e===un.OPPFYLT?ie.success:e===un.IKKE_OPPFYLT?ie.danger:ie.default,ht=({menyData:e,oppdaterProsessPanelIUrl:n})=>{const t=V.useMemo(()=>e.map(r=>{const a=$s(r.status,r.harApentAksjonspunkt);return{label:r.tekst||"",isActive:r.erAktiv,isDisabled:!1,isFinished:a===ie.success,type:a}}),[e]);return Y.jsx(cs,{steps:t,onClick:n,stepArrowContainerStyle:Cs.stepArrowContainer})};ht.__docgenInfo={description:"",methods:[],displayName:"ProsessMeny",props:{menyData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}}],raw:"ProsessPanelMenyData[]"},description:""},oppdaterProsessPanelIUrl:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const Fs="_container_blsp8_1",Us="_meny_blsp8_5",En={container:Fs,meny:Us},mt=({behandling:e,hentPaneler:n,valgtProsessSteg:t,valgtFaktaSteg:r,oppdaterProsessStegOgFaktaPanelIUrl:a,apentFaktaPanelInfo:s})=>{const[i,o]=V.useState([]),l=V.useCallback(h=>{o(g=>{const f=[...g],w=f.findIndex(m=>m.id===h.id);return w>=0?f.splice(w,1,h):f.push(h),f})},[]),u=V.useMemo(()=>i.filter(h=>!!h.tekst),[i]),d=V.useCallback(h=>{if(u){const g=u[h],f=g.erAktiv?void 0:g.id;a(f,r)}},[u,r,a]);return n?Y.jsxs("div",{className:u&&u.length>0?En.container:void 0,children:[u&&u.length>0&&Y.jsx("div",{className:En.meny,children:Y.jsx(ht,{menyData:u,oppdaterProsessPanelIUrl:d})}),(!u||u.length===0)&&Y.jsx(vt,{}),n({behandling:e,valgtProsessSteg:t,registrerProsessPanel:l},{apentFaktaPanelInfo:s,allMenyData:u||[]}),e.behandlingHenlagt&&Y.jsx(_t,{valgtProsessSteg:t,registrerProsessPanel:l})]}):null};mt.__docgenInfo={description:"",methods:[],displayName:"ProsessContainer",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},hentPaneler:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: ProsessPanelInitProps, ekstraProps: ProsessPanelExtraInitProps) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandling: Behandling;
  valgtProsessSteg?: string;
  registrerProsessPanel: (data: ProsessPanelMenyData) => void;
}`,signature:{properties:[{key:"behandling",value:{name:"intersection",raw:`BehandlingFellesData &
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}],required:!0}},{key:"valgtProsessSteg",value:{name:"string",required:!1}},{key:"registrerProsessPanel",value:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}},required:!0}}]}},name:"props"},{type:{name:"signature",type:"object",raw:`{
  apentFaktaPanelInfo?: { urlCode: string; text: string };
  allMenyData: ProsessPanelMenyData[];
}`,signature:{properties:[{key:"apentFaktaPanelInfo",value:{name:"signature",type:"object",raw:"{ urlCode: string; text: string }",signature:{properties:[{key:"urlCode",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]},required:!1}},{key:"allMenyData",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}}],raw:"ProsessPanelMenyData[]",required:!0}}]}},name:"ekstraProps"}],return:{name:"ReactElement"}}},description:""},valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},oppdaterProsessStegOgFaktaPanelIUrl:{required:!0,tsType:{name:"signature",type:"function",raw:"(punktnavn?: string, faktanavn?: string) => void",signature:{arguments:[{type:{name:"string"},name:"punktnavn"},{type:{name:"string"},name:"faktanavn"}],return:{name:"void"}}},description:""},apentFaktaPanelInfo:{required:!1,tsType:{name:"signature",type:"object",raw:"{ urlCode: string; text: string }",signature:{properties:[{key:"urlCode",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}},description:""}}};const ct=({menyData:e,oppdaterFaktaPanelIUrl:n})=>{const t=wt();return Y.jsx(Ns,{heading:t.formatMessage({id:"FaktaPanel.FaktaOm"}),links:e.map(r=>({label:r.tekst||"",active:r.erAktiv,icon:r.harApneAksjonspunkter?Y.jsx(yt,{color:"var(--a-orange-600)"}):void 0})),onClick:n})};ct.__docgenInfo={description:"",methods:[],displayName:"FaktaMeny",props:{menyData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}}],raw:"FaktaPanelMenyData[]"},description:""},oppdaterFaktaPanelIUrl:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const xs="_container_610fz_1",Vs="_content_610fz_6",Gs="_sideMenu_610fz_14",xe={container:xs,content:Vs,sideMenu:Gs},pt=({behandling:e,hentPaneler:n,valgtFaktaSteg:t,valgtProsessSteg:r,oppdaterProsessStegOgFaktaPanelIUrl:a,setApentFaktaPanel:s,apentFaktaPanelInfo:i})=>{const[o,l]=V.useState([]),u=V.useCallback(g=>{l(f=>{const w=[...f],m=w.findIndex(j=>j.id===g.id);return m>=0?w.splice(m,1,g):w.push(g),w}),!g.harApneAksjonspunkter&&(i==null?void 0:i.urlCode)===g.id&&s(void 0),g.harApneAksjonspunkter&&(i==null?void 0:i.urlCode)!==g.id&&s({urlCode:g.id,text:g.tekst??""})},[i]),d=V.useMemo(()=>o.filter(g=>!!g.tekst),[o]),h=V.useCallback(g=>{if(d){const f=d[g];a(r,f.id)}},[d,r,a]);return n?Y.jsx("div",{className:xe.container,children:Y.jsx(ft,{fullHeight:!0,children:Y.jsxs(bt,{children:[Y.jsx(on,{className:xe.sideMenu,children:d&&d.length>0&&Y.jsx(ct,{menyData:d,oppdaterFaktaPanelIUrl:h})}),Y.jsx(on,{className:xe.content,children:n({behandling:e,valgtFaktaSteg:t,registrerFaktaPanel:u})})]})})}):null};pt.__docgenInfo={description:"",methods:[],displayName:"FaktaContainer",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},hentPaneler:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: FaktaPanelInitProps) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  valgtFaktaSteg?: string;
  behandling: Behandling;
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void;
}`,signature:{properties:[{key:"valgtFaktaSteg",value:{name:"string",required:!1}},{key:"behandling",value:{name:"intersection",raw:`BehandlingFellesData &
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}],required:!0}},{key:"registrerFaktaPanel",value:{name:"signature",type:"function",raw:"(data: FaktaPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}},required:!0}}]}},name:"props"}],return:{name:"ReactElement"}}},description:""},valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},oppdaterProsessStegOgFaktaPanelIUrl:{required:!0,tsType:{name:"signature",type:"function",raw:"(punktnavn?: string, faktanavn?: string) => void",signature:{arguments:[{type:{name:"string"},name:"punktnavn"},{type:{name:"string"},name:"faktanavn"}],return:{name:"void"}}},description:""},setApentFaktaPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(panelData?: { urlCode: string; text: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ urlCode: string; text: string }",signature:{properties:[{key:"urlCode",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}},name:"panelData"}],return:{name:"void"}}},description:""},apentFaktaPanelInfo:{required:!1,tsType:{name:"signature",type:"object",raw:"{ urlCode: string; text: string }",signature:{properties:[{key:"urlCode",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}},description:""}}};const Ys=({behandling:e,hentFaktaPaneler:n,hentProsessPaneler:t,valgtProsessSteg:r,valgtFaktaSteg:a,oppdaterProsessStegOgFaktaPanelIUrl:s})=>{const[i,o]=V.useState();return Y.jsxs(Y.Fragment,{children:[Y.jsx(mt,{hentPaneler:t,valgtProsessSteg:r,valgtFaktaSteg:a,oppdaterProsessStegOgFaktaPanelIUrl:s,behandling:e,apentFaktaPanelInfo:i}),Y.jsx(pt,{hentPaneler:n,valgtFaktaSteg:a,valgtProsessSteg:r,oppdaterProsessStegOgFaktaPanelIUrl:s,behandling:e,setApentFaktaPanel:o,apentFaktaPanelInfo:i})]})};Ys.__docgenInfo={description:"",methods:[],displayName:"BehandlingContainer",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},hentFaktaPaneler:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: FaktaPanelInitProps) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  valgtFaktaSteg?: string;
  behandling: Behandling;
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void;
}`,signature:{properties:[{key:"valgtFaktaSteg",value:{name:"string",required:!1}},{key:"behandling",value:{name:"intersection",raw:`BehandlingFellesData &
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}],required:!0}},{key:"registrerFaktaPanel",value:{name:"signature",type:"function",raw:"(data: FaktaPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}},required:!0}}]}},name:"props"}],return:{name:"ReactElement"}}},description:""},hentProsessPaneler:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: ProsessPanelInitProps, ekstraProps: ProsessPanelExtraInitProps) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandling: Behandling;
  valgtProsessSteg?: string;
  registrerProsessPanel: (data: ProsessPanelMenyData) => void;
}`,signature:{properties:[{key:"behandling",value:{name:"intersection",raw:`BehandlingFellesData &
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}],required:!0}},{key:"valgtProsessSteg",value:{name:"string",required:!1}},{key:"registrerProsessPanel",value:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}},required:!0}}]}},name:"props"},{type:{name:"signature",type:"object",raw:`{
  apentFaktaPanelInfo?: { urlCode: string; text: string };
  allMenyData: ProsessPanelMenyData[];
}`,signature:{properties:[{key:"apentFaktaPanelInfo",value:{name:"signature",type:"object",raw:"{ urlCode: string; text: string }",signature:{properties:[{key:"urlCode",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]},required:!1}},{key:"allMenyData",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}}],raw:"ProsessPanelMenyData[]",required:!0}}]}},name:"ekstraProps"}],return:{name:"ReactElement"}}},description:""},valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},oppdaterProsessStegOgFaktaPanelIUrl:{required:!0,tsType:{name:"signature",type:"function",raw:"(punktnavn?: string, faktanavn?: string) => void",signature:{arguments:[{type:{name:"string"},name:"punktnavn"},{type:{name:"string"},name:"faktanavn"}],return:{name:"void"}}},description:""}}};export{ni as A,Ys as B,ti as S,Ns as g,en as q};
