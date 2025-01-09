import{j as f}from"./jsx-runtime-DR9Q75dM.js";import{r as R,R as U}from"./index-DRjF_FHU.js";import{af as $,X as Y,T as p,_ as N,j as Z,L as xn,B as V,V as sn,H as Kr,Q as Hr,k as we,h as Gr,d as Ur,bk as Yr,ae as zr,ad as Wr}from"./withQueryClient-BF6cwJb8.js";import{g as Zr,Q as Jr,M as ve,y as Xr}from"./index.es-Bt-4RxCK.js";import{u as Qr,n as et,c as nt}from"./initFetch-M7eiD0q7.js";import"./aktivitetStatus-02fOJoqz.js";import{K as ye}from"./alleKodeverk-Bv_e3DK6.js";import"./useRestApiRunner-illtjj-y.js";import{u as rt}from"./useRestApiErrorDispatcher-BtGqqtgs.js";import{i as $e,a as On,b as Dn,c as Ln,d as Ie,e as Cn,f as Vn,g as Kn,h as Hn,j as Gn,k as Un,p as Yn,m as F,s as M,l as Fe,T as zn}from"./index-BOPGX_rZ.js";import{d as re}from"./dayjs.min-CnNqAF5I.js";import{h as Ae}from"./moment-C5S46NFB.js";import{B as fn}from"./behandlingArsakType-CTXggz2Y.js";import{B as pe,F as tt}from"./fagsakYtelseType-CyKFp0BE.js";import{B as on}from"./Box-ta8sujyr.js";import{S as at}from"./Spacer-DlNqafaJ.js";import{S as it}from"./StarFill-BgkeIW_J.js";import{T as yn}from"./Tag-VsOO7sut.js";import{U as st}from"./UkjentAdresseMeldingIndex-LKCd0HhQ.js";import{E as Ke}from"./ErrorBoundary-BJbCJamN.js";import{g as Wn,a as Zn,n as ot}from"./paths-C9HiGUXm.js";import{B as lt}from"./BehandlingMenuIndex-DYWq-Idk.js";import{b as ut,c as vn}from"./useKodeverk-BZSN_bHb.js";import"./skjermlenkeCodes-1SvLTuBb.js";import{g as dt,b as gt,A as mt,c as kt}from"./eksterneLenker-DOKwbE_M.js";import{R as ft}from"./RisikoklassifiseringIndex-CjC11MpI.js";var J;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(J||(J={}));var te=function(e){$(t,e);function t(n,r,a){var i=e.call(this,n)||this;return i.code=r,i.originalMessage=a,i}return t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),pn=function(e){$(t,e);function t(n,r,a,i){return e.call(this,'Invalid values for "'.concat(n,'": "').concat(r,'". Options are "').concat(Object.keys(a).join('", "'),'"'),J.INVALID_VALUE,i)||this}return t}(te),yt=function(e){$(t,e);function t(n,r,a){return e.call(this,'Value for "'.concat(n,'" must be of type ').concat(r),J.INVALID_VALUE,a)||this}return t}(te),vt=function(e){$(t,e);function t(n,r){return e.call(this,'The intl string context variable "'.concat(n,'" was not provided to the string "').concat(r,'"'),J.MISSING_VALUE,r)||this}return t}(te),D;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(D||(D={}));function pt(e){return e.length<2?e:e.reduce(function(t,n){var r=t[t.length-1];return!r||r.type!==D.literal||n.type!==D.literal?t.push(n):r.value+=n.value,t},[])}function Jn(e){return typeof e=="function"}function Be(e,t,n,r,a,i,o){if(e.length===1&&$e(e[0]))return[{type:D.literal,value:e[0].value}];for(var s=[],l=0,m=e;l<m.length;l++){var u=m[l];if($e(u)){s.push({type:D.literal,value:u.value});continue}if(On(u)){typeof i=="number"&&s.push({type:D.literal,value:n.getNumberFormat(t).format(i)});continue}var v=u.value;if(!(a&&v in a))throw new vt(v,o);var k=a[v];if(Dn(u)){(!k||typeof k=="string"||typeof k=="number")&&(k=typeof k=="string"||typeof k=="number"?String(k):""),s.push({type:typeof k=="string"?D.literal:D.object,value:k});continue}if(Ln(u)){var h=typeof u.style=="string"?r.date[u.style]:Ie(u.style)?u.style.parsedOptions:void 0;s.push({type:D.literal,value:n.getDateTimeFormat(t,h).format(k)});continue}if(Cn(u)){var h=typeof u.style=="string"?r.time[u.style]:Ie(u.style)?u.style.parsedOptions:r.time.medium;s.push({type:D.literal,value:n.getDateTimeFormat(t,h).format(k)});continue}if(Vn(u)){var h=typeof u.style=="string"?r.number[u.style]:Kn(u.style)?u.style.parsedOptions:void 0;h&&h.scale&&(k=k*(h.scale||1)),s.push({type:D.literal,value:n.getNumberFormat(t,h).format(k)});continue}if(Hn(u)){var q=u.children,g=u.value,T=a[g];if(!Jn(T))throw new yt(g,"function",o);var c=Be(q,t,n,r,a,i),A=T(c.map(function(P){return P.value}));Array.isArray(A)||(A=[A]),s.push.apply(s,A.map(function(P){return{type:typeof P=="string"?D.literal:D.object,value:P}}))}if(Gn(u)){var b=u.options[k]||u.options.other;if(!b)throw new pn(u.value,k,Object.keys(u.options),o);s.push.apply(s,Be(b.value,t,n,r,a));continue}if(Un(u)){var b=u.options["=".concat(k)];if(!b){if(!Intl.PluralRules)throw new te(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,J.MISSING_INTL_API,o);var O=n.getPluralRules(t,{type:u.pluralType}).select(k-(u.offset||0));b=u.options[O]||u.options.other}if(!b)throw new pn(u.value,k,Object.keys(u.options),o);s.push.apply(s,Be(b.value,t,n,r,a,k-(u.offset||0)));continue}}return pt(s)}function ht(e,t){return t?p(p(p({},e||{}),t||{}),Object.keys(e).reduce(function(n,r){return n[r]=p(p({},e[r]),t[r]||{}),n},{})):e}function ct(e,t){return t?Object.keys(e).reduce(function(n,r){return n[r]=ht(e[r],t[r]),n},p({},e)):e}function He(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}function bt(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:F(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.NumberFormat).bind.apply(t,N([void 0],n,!1)))},{cache:He(e.number),strategy:M.variadic}),getDateTimeFormat:F(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.DateTimeFormat).bind.apply(t,N([void 0],n,!1)))},{cache:He(e.dateTime),strategy:M.variadic}),getPluralRules:F(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.PluralRules).bind.apply(t,N([void 0],n,!1)))},{cache:He(e.pluralRules),strategy:M.variadic})}}var Xn=function(){function e(t,n,r,a){n===void 0&&(n=e.defaultLocale);var i=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var m=i.formatToParts(l);if(m.length===1)return m[0].value;var u=m.reduce(function(v,k){return!v.length||k.type!==D.literal||typeof v[v.length-1]!="string"?v.push(k.value):v[v.length-1]+=k.value,v},[]);return u.length<=1?u[0]||"":u},this.formatToParts=function(l){return Be(i.ast,i.locales,i.formatters,i.formats,l,void 0,i.message)},this.resolvedOptions=function(){var l;return{locale:((l=i.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(i.locales)[0]}},this.getAst=function(){return i.ast},this.locales=n,this.resolvedLocale=e.resolveLocale(n),typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var o=a||{};o.formatters;var s=Y(o,["formatters"]);this.ast=e.__parse(t,p(p({},s),{locale:this.resolvedLocale}))}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=ct(e.formats,r),this.formatters=a&&a.formatters||bt(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(t){if(!(typeof Intl.Locale>"u")){var n=Intl.NumberFormat.supportedLocalesOf(t);return n.length>0?new Intl.Locale(n[0]):new Intl.Locale(typeof t=="string"?t:t[0])}},e.__parse=Yn,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),ue;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(ue||(ue={}));var be=function(e){$(t,e);function t(n,r,a){var i=this,o=a?a instanceof Error?a:new Error(String(a)):void 0;return i=e.call(this,"[@formatjs/intl Error ".concat(n,"] ").concat(r,`
`).concat(o?`
`.concat(o.message,`
`).concat(o.stack):""))||this,i.code=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(i,t),i}return t}(Error),Tt=function(e){$(t,e);function t(n,r){return e.call(this,ue.UNSUPPORTED_FORMATTER,n,r)||this}return t}(be),jt=function(e){$(t,e);function t(n,r){return e.call(this,ue.INVALID_CONFIG,n,r)||this}return t}(be),hn=function(e){$(t,e);function t(n,r){return e.call(this,ue.MISSING_DATA,n,r)||this}return t}(be),z=function(e){$(t,e);function t(n,r,a){var i=e.call(this,ue.FORMAT_ERROR,"".concat(n,`
Locale: `).concat(r,`
`),a)||this;return i.locale=r,i}return t}(be),Ge=function(e){$(t,e);function t(n,r,a,i){var o=e.call(this,"".concat(n,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),r,i)||this;return o.descriptor=a,o.locale=r,o}return t}(z),qt=function(e){$(t,e);function t(n,r){var a=e.call(this,ue.MISSING_TRANSLATION,'Missing message: "'.concat(n.id,'" for locale "').concat(r,'", using ').concat(n.defaultMessage?"default message (".concat(typeof n.defaultMessage=="string"?n.defaultMessage:n.defaultMessage.map(function(i){var o;return(o=i.value)!==null&&o!==void 0?o:JSON.stringify(i)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=n,a}return t}(be);function ge(e,t,n){return n===void 0&&(n={}),t.reduce(function(r,a){return a in e?r[a]=e[a]:a in n&&(r[a]=n[a]),r},{})}var wt=function(e){},At=function(e){},Qn={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:wt,onWarn:At};function er(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function oe(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}function _t(e){e===void 0&&(e=er());var t=Intl.RelativeTimeFormat,n=Intl.ListFormat,r=Intl.DisplayNames,a=F(function(){for(var s,l=[],m=0;m<arguments.length;m++)l[m]=arguments[m];return new((s=Intl.DateTimeFormat).bind.apply(s,N([void 0],l,!1)))},{cache:oe(e.dateTime),strategy:M.variadic}),i=F(function(){for(var s,l=[],m=0;m<arguments.length;m++)l[m]=arguments[m];return new((s=Intl.NumberFormat).bind.apply(s,N([void 0],l,!1)))},{cache:oe(e.number),strategy:M.variadic}),o=F(function(){for(var s,l=[],m=0;m<arguments.length;m++)l[m]=arguments[m];return new((s=Intl.PluralRules).bind.apply(s,N([void 0],l,!1)))},{cache:oe(e.pluralRules),strategy:M.variadic});return{getDateTimeFormat:a,getNumberFormat:i,getMessageFormat:F(function(s,l,m,u){return new Xn(s,l,m,p({formatters:{getNumberFormat:i,getDateTimeFormat:a,getPluralRules:o}},u||{}))},{cache:oe(e.message),strategy:M.variadic}),getRelativeTimeFormat:F(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return new(t.bind.apply(t,N([void 0],s,!1)))},{cache:oe(e.relativeTime),strategy:M.variadic}),getPluralRules:o,getListFormat:F(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return new(n.bind.apply(n,N([void 0],s,!1)))},{cache:oe(e.list),strategy:M.variadic}),getDisplayNames:F(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return new(r.bind.apply(r,N([void 0],s,!1)))},{cache:oe(e.displayNames),strategy:M.variadic})}}function ln(e,t,n,r){var a=e&&e[t],i;if(a&&(i=a[n]),i)return i;r(new Tt("No ".concat(t," format named: ").concat(n)))}function _e(e,t){return Object.keys(e).reduce(function(n,r){return n[r]=p({timeZone:t},e[r]),n},{})}function cn(e,t){var n=Object.keys(p(p({},e),t));return n.reduce(function(r,a){return r[a]=p(p({},e[a]||{}),t[a]||{}),r},{})}function bn(e,t){if(!t)return e;var n=Xn.formats;return p(p(p({},n),e),{date:cn(_e(n.date,t),_e(e.date||{},t)),time:cn(_e(n.time,t),_e(e.time||{},t))})}var Ze=function(e,t,n,r,a){var i=e.locale,o=e.formats,s=e.messages,l=e.defaultLocale,m=e.defaultFormats,u=e.fallbackOnEmptyString,v=e.onError,k=e.timeZone,h=e.defaultRichTextElements;n===void 0&&(n={id:""});var q=n.id,g=n.defaultMessage;Fe(!!q,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var T=String(q),c=s&&Object.prototype.hasOwnProperty.call(s,T)&&s[T];if(Array.isArray(c)&&c.length===1&&c[0].type===zn.literal)return c[0].value;if(!r&&c&&typeof c=="string"&&!h)return c.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=p(p({},h),r||{}),o=bn(o,k),m=bn(m,k),!c){if(u===!1&&c==="")return c;if((!g||i&&i.toLowerCase()!==l.toLowerCase())&&v(new qt(n,i)),g)try{var A=t.getMessageFormat(g,l,m,a);return A.format(r)}catch(b){return v(new Ge('Error formatting default message for: "'.concat(T,'", rendering default message verbatim'),i,n,b)),typeof g=="string"?g:T}return T}try{var A=t.getMessageFormat(c,i,o,p({formatters:t},a||{}));return A.format(r)}catch(b){v(new Ge('Error formatting message: "'.concat(T,'", using ').concat(g?"default message":"id"," as fallback."),i,n,b))}if(g)try{var A=t.getMessageFormat(g,l,m,a);return A.format(r)}catch(b){v(new Ge('Error formatting the default message for: "'.concat(T,'", rendering message verbatim'),i,n,b))}return typeof c=="string"?c:typeof g=="string"?g:T},nr=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Me(e,t,n,r){var a=e.locale,i=e.formats,o=e.onError,s=e.timeZone;r===void 0&&(r={});var l=r.format,m=p(p({},s&&{timeZone:s}),l&&ln(i,t,l,o)),u=ge(r,nr,m);return t==="time"&&!u.hour&&!u.minute&&!u.second&&!u.timeStyle&&!u.dateStyle&&(u=p(p({},u),{hour:"numeric",minute:"numeric"})),n(a,u)}function Et(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],i=n[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return Me(e,"date",t,o).format(s)}catch(l){e.onError(new z("Error formatting date.",e.locale,l))}return String(s)}function Rt(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],i=n[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return Me(e,"time",t,o).format(s)}catch(l){e.onError(new z("Error formatting time.",e.locale,l))}return String(s)}function Bt(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],i=n[1],o=n[2],s=o===void 0?{}:o,l=e.timeZone,m=e.locale,u=e.onError,v=ge(s,nr,l?{timeZone:l}:{});try{return t(m,v).formatRange(a,i)}catch(k){u(new z("Error formatting date time range.",e.locale,k))}return String(a)}function St(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],i=n[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return Me(e,"date",t,o).formatToParts(s)}catch(l){e.onError(new z("Error formatting date.",e.locale,l))}return[]}function Pt(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],i=n[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return Me(e,"time",t,o).formatToParts(s)}catch(l){e.onError(new z("Error formatting time.",e.locale,l))}return[]}var $t=["style","type","fallback","languageDisplay"];function It(e,t,n,r){var a=e.locale,i=e.onError,o=Intl.DisplayNames;o||i(new te(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,J.MISSING_INTL_API));var s=ge(r,$t);try{return t(a,s).of(n)}catch(l){i(new z("Error formatting display name.",a,l))}}var Ft=["type","style"],Tn=Date.now();function Mt(e){return"".concat(Tn,"_").concat(e,"_").concat(Tn)}function Nt(e,t,n,r){r===void 0&&(r={});var a=rr(e,t,n,r).reduce(function(i,o){var s=o.value;return typeof s!="string"?i.push(s):typeof i[i.length-1]=="string"?i[i.length-1]+=s:i.push(s),i},[]);return a.length===1?a[0]:a.length===0?"":a}function rr(e,t,n,r){var a=e.locale,i=e.onError;r===void 0&&(r={});var o=Intl.ListFormat;o||i(new te(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,J.MISSING_INTL_API));var s=ge(r,Ft);try{var l={},m=n.map(function(u,v){if(typeof u=="object"){var k=Mt(v);return l[k]=u,k}return String(u)});return t(a,s).formatToParts(m).map(function(u){return u.type==="literal"?u:p(p({},u),{value:l[u.value]||u.value})})}catch(u){i(new z("Error formatting list.",a,u))}return n}var xt=["type"];function Ot(e,t,n,r){var a=e.locale,i=e.onError;r===void 0&&(r={}),Intl.PluralRules||i(new te(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,J.MISSING_INTL_API));var o=ge(r,xt);try{return t(a,o).select(n)}catch(s){i(new z("Error formatting plural.",a,s))}return"other"}var Dt=["numeric","style"];function Lt(e,t,n){var r=e.locale,a=e.formats,i=e.onError;n===void 0&&(n={});var o=n.format,s=!!o&&ln(a,"relative",o,i)||{},l=ge(n,Dt,s);return t(r,l)}function Ct(e,t,n,r,a){a===void 0&&(a={}),r||(r="second");var i=Intl.RelativeTimeFormat;i||e.onError(new te(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,J.MISSING_INTL_API));try{return Lt(e,t,a).format(n,r)}catch(o){e.onError(new z("Error formatting relative time.",e.locale,o))}return String(n)}var Vt=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function tr(e,t,n){var r=e.locale,a=e.formats,i=e.onError;n===void 0&&(n={});var o=n.format,s=o&&ln(a,"number",o,i)||{},l=ge(n,Vt,s);return t(r,l)}function Kt(e,t,n,r){r===void 0&&(r={});try{return tr(e,t,r).format(n)}catch(a){e.onError(new z("Error formatting number.",e.locale,a))}return String(n)}function Ht(e,t,n,r){r===void 0&&(r={});try{return tr(e,t,r).formatToParts(n)}catch(a){e.onError(new z("Error formatting number.",e.locale,a))}return[]}function Gt(e){var t=e?e[Object.keys(e)[0]]:void 0;return typeof t=="string"}function Ut(e){e.onWarn&&e.defaultRichTextElements&&Gt(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function Yt(e,t){var n=_t(t),r=p(p({},Qn),e),a=r.locale,i=r.defaultLocale,o=r.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&o?o(new hn('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&o&&o(new hn('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(o&&o(new jt('"locale" was not configured, using "'.concat(i,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),Ut(r),p(p({},r),{formatters:n,formatNumber:Kt.bind(null,r,n.getNumberFormat),formatNumberToParts:Ht.bind(null,r,n.getNumberFormat),formatRelativeTime:Ct.bind(null,r,n.getRelativeTimeFormat),formatDate:Et.bind(null,r,n.getDateTimeFormat),formatDateToParts:St.bind(null,r,n.getDateTimeFormat),formatTime:Rt.bind(null,r,n.getDateTimeFormat),formatDateTimeRange:Bt.bind(null,r,n.getDateTimeFormat),formatTimeToParts:Pt.bind(null,r,n.getDateTimeFormat),formatPlural:Ot.bind(null,r,n.getPluralRules),formatMessage:Ze.bind(null,r,n),$t:Ze.bind(null,r,n),formatList:Nt.bind(null,r,n.getListFormat),formatListToParts:rr.bind(null,r,n.getListFormat),formatDisplayName:It.bind(null,r,n.getDisplayNames)})}function zt(e){Fe(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Wt=p(p({},Qn),{textComponent:R.Fragment});function Zt(e){return function(t){return e(R.Children.toArray(t))}}function jn(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),a=n.length;if(r.length!==a)return!1;for(var i=0;i<a;i++){var o=n[i];if(e[o]!==t[o]||!Object.prototype.hasOwnProperty.call(t,o))return!1}return!0}var un=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=R.createContext(null)):R.createContext(null);un.Consumer;var Jt=un.Provider,Xt=Jt,Qt=un;function Ne(){var e=R.useContext(Qt);return zt(e),e}var Je;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Je||(Je={}));var Xe;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Xe||(Xe={}));function ar(e){var t=function(n){var r=Ne(),a=n.value,i=n.children,o=Y(n,["value","children"]),s=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?r.formatDateToParts(s,o):r.formatTimeToParts(s,o);return i(l)};return t.displayName=Xe[e],t}function Te(e){var t=function(n){var r=Ne(),a=n.value,i=n.children,o=Y(n,["value","children"]),s=r[e](a,o);if(typeof i=="function")return i(s);var l=r.textComponent||R.Fragment;return R.createElement(l,null,s)};return t.displayName=Je[e],t}function ir(e){return e&&Object.keys(e).reduce(function(t,n){var r=e[n];return t[n]=Jn(r)?Zt(r):r,t},{})}var qn=function(e,t,n,r){for(var a=[],i=4;i<arguments.length;i++)a[i-4]=arguments[i];var o=ir(r),s=Ze.apply(void 0,N([e,t,n,o],a,!1));return Array.isArray(s)?R.Children.toArray(s):s},ea=function(e,t){var n=e.defaultRichTextElements,r=Y(e,["defaultRichTextElements"]),a=ir(n),i=Yt(p(p(p({},Wt),r),{defaultRichTextElements:a}),t),o={locale:i.locale,timeZone:i.timeZone,fallbackOnEmptyString:i.fallbackOnEmptyString,formats:i.formats,defaultLocale:i.defaultLocale,defaultFormats:i.defaultFormats,messages:i.messages,onError:i.onError,defaultRichTextElements:a};return p(p({},i),{formatMessage:qn.bind(null,o,i.formatters),$t:qn.bind(null,o,i.formatters)})};function na(e,t){var n=e.values,r=Y(e,["values"]),a=t.values,i=Y(t,["values"]);return jn(a,n)&&jn(r,i)}function sr(e){var t=Ne(),n=t.formatMessage,r=t.textComponent,a=r===void 0?R.Fragment:r,i=e.id,o=e.description,s=e.defaultMessage,l=e.values,m=e.children,u=e.tagName,v=u===void 0?a:u,k=e.ignoreTag,h={id:i,description:o,defaultMessage:s},q=n(h,l,{ignoreTag:k});return typeof m=="function"?m(Array.isArray(q)?q:[q]):v?R.createElement(v,null,R.Children.toArray(q)):R.createElement(R.Fragment,null,q)}sr.displayName="FormattedMessage";var ne=R.memo(sr,na);ne.displayName="MemoizedFormattedMessage";var ra=Te("formatDate"),ta=Te("formatTime");Te("formatNumber");Te("formatList");Te("formatDisplayName");ar("formatDate");ar("formatTime");var xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var or={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(xe,function(){var n="minute",r=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(i,o,s){var l=o.prototype;s.utc=function(g){var T={date:g,utc:!0,args:arguments};return new o(T)},l.utc=function(g){var T=s(this.toDate(),{locale:this.$L,utc:!0});return g?T.add(this.utcOffset(),n):T},l.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var m=l.parse;l.parse=function(g){g.utc&&(this.$u=!0),this.$utils().u(g.$offset)||(this.$offset=g.$offset),m.call(this,g)};var u=l.init;l.init=function(){if(this.$u){var g=this.$d;this.$y=g.getUTCFullYear(),this.$M=g.getUTCMonth(),this.$D=g.getUTCDate(),this.$W=g.getUTCDay(),this.$H=g.getUTCHours(),this.$m=g.getUTCMinutes(),this.$s=g.getUTCSeconds(),this.$ms=g.getUTCMilliseconds()}else u.call(this)};var v=l.utcOffset;l.utcOffset=function(g,T){var c=this.$utils().u;if(c(g))return this.$u?0:c(this.$offset)?v.call(this):this.$offset;if(typeof g=="string"&&(g=function(P){P===void 0&&(P="");var w=P.match(r);if(!w)return null;var y=(""+w[0]).match(a)||["-",0,0],d=y[0],j=60*+y[1]+ +y[2];return j===0?0:d==="+"?j:-j}(g),g===null))return this;var A=Math.abs(g)<=16?60*g:g,b=this;if(T)return b.$offset=A,b.$u=g===0,b;if(g!==0){var O=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(b=this.local().add(A+O,n)).$offset=A,b.$x.$localOffset=O}else b=this.utc();return b};var k=l.format;l.format=function(g){var T=g||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return k.call(this,T)},l.valueOf=function(){var g=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*g},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var h=l.toDate;l.toDate=function(g){return g==="s"&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():h.call(this)};var q=l.diff;l.diff=function(g,T,c){if(g&&this.$u===g.$u)return q.call(this,g,T,c);var A=this.local(),b=s(g).local();return q.call(A,b,T,c)}}})})(or);var aa=or.exports;const ia=dn(aa);var lr={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(xe,function(){var n,r,a=1e3,i=6e4,o=36e5,s=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=31536e6,u=2628e6,v=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,k={years:m,months:u,days:s,hours:o,minutes:i,seconds:a,milliseconds:1,weeks:6048e5},h=function(w){return w instanceof O},q=function(w,y,d){return new O(w,d,y.$l)},g=function(w){return r.p(w)+"s"},T=function(w){return w<0},c=function(w){return T(w)?Math.ceil(w):Math.floor(w)},A=function(w){return Math.abs(w)},b=function(w,y){return w?T(w)?{negative:!0,format:""+A(w)+y}:{negative:!1,format:""+w+y}:{negative:!1,format:""}},O=function(){function w(d,j,_){var E=this;if(this.$d={},this.$l=_,d===void 0&&(this.$ms=0,this.parseFromMilliseconds()),j)return q(d*k[g(j)],this);if(typeof d=="number")return this.$ms=d,this.parseFromMilliseconds(),this;if(typeof d=="object")return Object.keys(d).forEach(function(I){E.$d[g(I)]=d[I]}),this.calMilliseconds(),this;if(typeof d=="string"){var B=d.match(v);if(B){var S=B.slice(2).map(function(I){return I!=null?Number(I):0});return this.$d.years=S[0],this.$d.months=S[1],this.$d.weeks=S[2],this.$d.days=S[3],this.$d.hours=S[4],this.$d.minutes=S[5],this.$d.seconds=S[6],this.calMilliseconds(),this}}return this}var y=w.prototype;return y.calMilliseconds=function(){var d=this;this.$ms=Object.keys(this.$d).reduce(function(j,_){return j+(d.$d[_]||0)*k[_]},0)},y.parseFromMilliseconds=function(){var d=this.$ms;this.$d.years=c(d/m),d%=m,this.$d.months=c(d/u),d%=u,this.$d.days=c(d/s),d%=s,this.$d.hours=c(d/o),d%=o,this.$d.minutes=c(d/i),d%=i,this.$d.seconds=c(d/a),d%=a,this.$d.milliseconds=d},y.toISOString=function(){var d=b(this.$d.years,"Y"),j=b(this.$d.months,"M"),_=+this.$d.days||0;this.$d.weeks&&(_+=7*this.$d.weeks);var E=b(_,"D"),B=b(this.$d.hours,"H"),S=b(this.$d.minutes,"M"),I=this.$d.seconds||0;this.$d.milliseconds&&(I+=this.$d.milliseconds/1e3,I=Math.round(1e3*I)/1e3);var ie=b(I,"S"),Ce=d.negative||j.negative||E.negative||B.negative||S.negative||ie.negative,Ve=B.format||S.format||ie.format?"T":"",se=(Ce?"-":"")+"P"+d.format+j.format+E.format+Ve+B.format+S.format+ie.format;return se==="P"||se==="-P"?"P0D":se},y.toJSON=function(){return this.toISOString()},y.format=function(d){var j=d||"YYYY-MM-DDTHH:mm:ss",_={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return j.replace(l,function(E,B){return B||String(_[E])})},y.as=function(d){return this.$ms/k[g(d)]},y.get=function(d){var j=this.$ms,_=g(d);return _==="milliseconds"?j%=1e3:j=_==="weeks"?c(j/k[_]):this.$d[_],j||0},y.add=function(d,j,_){var E;return E=j?d*k[g(j)]:h(d)?d.$ms:q(d,this).$ms,q(this.$ms+E*(_?-1:1),this)},y.subtract=function(d,j){return this.add(d,j,!0)},y.locale=function(d){var j=this.clone();return j.$l=d,j},y.clone=function(){return q(this.$ms,this)},y.humanize=function(d){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!d)},y.valueOf=function(){return this.asMilliseconds()},y.milliseconds=function(){return this.get("milliseconds")},y.asMilliseconds=function(){return this.as("milliseconds")},y.seconds=function(){return this.get("seconds")},y.asSeconds=function(){return this.as("seconds")},y.minutes=function(){return this.get("minutes")},y.asMinutes=function(){return this.as("minutes")},y.hours=function(){return this.get("hours")},y.asHours=function(){return this.as("hours")},y.days=function(){return this.get("days")},y.asDays=function(){return this.as("days")},y.weeks=function(){return this.get("weeks")},y.asWeeks=function(){return this.as("weeks")},y.months=function(){return this.get("months")},y.asMonths=function(){return this.as("months")},y.years=function(){return this.get("years")},y.asYears=function(){return this.as("years")},w}(),P=function(w,y,d){return w.add(y.years()*d,"y").add(y.months()*d,"M").add(y.days()*d,"d").add(y.hours()*d,"h").add(y.minutes()*d,"m").add(y.seconds()*d,"s").add(y.milliseconds()*d,"ms")};return function(w,y,d){n=d,r=d().$utils(),d.duration=function(E,B){var S=d.locale();return q(E,{$l:S},B)},d.isDuration=h;var j=y.prototype.add,_=y.prototype.subtract;y.prototype.add=function(E,B){return h(E)?P(this,E,1):j.bind(this)(E,B)},y.prototype.subtract=function(E,B){return h(E)?P(this,E,-1):_.bind(this)(E,B)}}})})(lr);var sa=lr.exports;const oa=dn(sa);var ur={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(xe,function(){var n="day";return function(r,a,i){var o=function(m){return m.add(4-m.isoWeekday(),n)},s=a.prototype;s.isoWeekYear=function(){return o(this).year()},s.isoWeek=function(m){if(!this.$utils().u(m))return this.add(7*(m-this.isoWeek()),n);var u,v,k,h,q=o(this),g=(u=this.isoWeekYear(),v=this.$u,k=(v?i.utc:i)().year(u).startOf("year"),h=4-k.isoWeekday(),k.isoWeekday()>4&&(h+=7),k.add(h,n));return q.diff(g,"week")+1},s.isoWeekday=function(m){return this.$utils().u(m)?this.day()||7:this.day(this.day()%7?m:m-7)};var l=s.startOf;s.startOf=function(m,u){var v=this.$utils(),k=!!v.u(u)||u;return v.p(m)==="isoweek"?k?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(m,u)}}})})(ur);var la=ur.exports;const ua=dn(la);var da={exports:{}};(function(e,t){(function(n,r){e.exports=r(re)})(xe,function(n){function r(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var a=r(n),i={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(o){return o+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(i,null,!0),i})})(da);const ga=er(),Q=e=>ea({locale:"nb-NO",messages:e},ga),dr={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};re.extend(ia);re.extend(ua);re.extend(oa);Q(dr);Q(dr);function ma(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gr={exports:{}},he={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wn;function ka(){if(wn)return he;wn=1;var e=U,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(s,l,m){var u,v={},k=null,h=null;m!==void 0&&(k=""+m),l.key!==void 0&&(k=""+l.key),l.ref!==void 0&&(h=l.ref);for(u in l)r.call(l,u)&&!i.hasOwnProperty(u)&&(v[u]=l[u]);if(s&&s.defaultProps)for(u in l=s.defaultProps,l)v[u]===void 0&&(v[u]=l[u]);return{$$typeof:t,type:s,key:k,ref:h,props:v,_owner:a.current}}return he.Fragment=n,he.jsx=o,he.jsxs=o,he}gr.exports=ka();var x=gr.exports;const me={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};Q(me);Q(me);var mr={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(i=a(i,r.call(this,s)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var s in i)t.call(i,s)&&i[s]&&(o=a(o,this&&this[s]||s));return o}function a(i,o){return o?i?i+" "+o:i+o:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(mr);var fa=mr.exports;const K=ma(fa),ya="_borderbox_hicl4_1",va="_error_hicl4_4",pa="_warning_hicl4_7",ha={borderbox:ya,error:va,warning:pa};K.bind(ha);const ca="_aksjonspunkt_kn1hn_1",ba="_erAksjonspunktApent_kn1hn_4",Ta="_erIkkeGodkjentAvBeslutter_kn1hn_8",ja={aksjonspunkt:ca,erAksjonspunktApent:ba,erIkkeGodkjentAvBeslutter:Ta};K.bind(ja);const qa=Q(me),An=({dateTimeString:e,separator:t="dash",year:n="numeric",month:r="2-digit",day:a="2-digit",hour:i="numeric",minute:o="numeric",second:s=void 0})=>{const l=()=>{switch(t){case"dash":return" - ";case"kl":return qa.formatMessage({id:"DateTimeLabel.Kl"})}};return x.jsxs(x.Fragment,{children:[x.jsx(ra,{value:new Date(e),day:a,month:r,year:n}),l(),x.jsx(ta,{value:new Date(e),hour:i,minute:o,second:s})]})};Q(me);const wa="_tooltip_h8akz_1",Aa="_tooltiptext_h8akz_5",_a="_left_h8akz_22",Ea="_top_h8akz_27",Ra="_right_h8akz_30",Ba="_bottom_h8akz_34",Sa="_showTooltip_h8akz_1",Qe={tooltip:wa,tooltiptext:Aa,left:_a,top:Ea,right:Ra,bottom:Ba,showTooltip:Sa},Pa=K.bind(Qe),kr=({children:e,content:t,alignRight:n=!1,alignLeft:r=!1,alignTop:a=!1,alignBottom:i=!1})=>x.jsxs("div",{className:Qe.tooltip,children:[x.jsx("span",{className:Pa(Qe.tooltiptext,{right:n||!r&&!a&&!i,left:r,top:a,bottom:i}),children:t}),e]}),$a=U.forwardRef(({onClick:e=()=>{},onMouseDown:t,tabIndex:n=-1,className:r="",src:a,srcHover:i,alt:o,onKeyDown:s,tooltip:l,alignTooltipLeft:m=!1},u)=>{const[v,k]=R.useState(!1),h=R.useCallback(()=>{k(!0)},[]),q=R.useCallback(()=>{k(!1)},[]),g=R.useCallback(A=>{(A.key==="Enter"||A.key===" ")&&(s&&s(A),A.preventDefault())},[]),T=i&&v?i:a,c=x.jsx("img",{ref:u,className:r,src:T,alt:o,tabIndex:n,onMouseOver:h,onMouseOut:q,onFocus:h,onBlur:q,onKeyDown:g,onMouseDown:t,onClick:e});return l?x.jsx(kr,{content:l,alignLeft:m,children:c}):c});$a.displayName="Image";const Ia="_flexColumnNew_1vdv1_1",Fa={flexColumnNew:Ia};K.bind(Fa);const Ma="_flexRow_1yf0y_1",Na="_spaceBetween_1yf0y_9",xa="_alignItemsToBaseline_1yf0y_12",Oa="_alignItemsToFlexEnd_1yf0y_15",Da="_justifyItemsToFlexEnd_1yf0y_18",La="_wrap_1yf0y_21",Ca={flexRow:Ma,spaceBetween:Na,alignItemsToBaseline:xa,alignItemsToFlexEnd:Oa,justifyItemsToFlexEnd:Da,wrap:La};K.bind(Ca);const Va="_flexContainer_1dk1o_1",Ka="_fluid_1dk1o_6",Ha="_fullHeight_1dk1o_9",Ga="_flexWrap_1dk1o_17",Ua={flexContainer:Va,fluid:Ka,fullHeight:Ha,flexWrap:Ga};K.bind(Ua);Q(me);const Ya="_row_1lxv9_1",za="_harHover_1lxv9_4",Wa="_rowHeader_1lxv9_7",Za="_grayHeader_1lxv9_12",Ja="_rowContent_1lxv9_15",Xa="_selected_1lxv9_18",Qa="_bold_1lxv9_22",ei="_dashedBottomBorder_1lxv9_25",ni="_solidBottomBorder_1lxv9_28",ri="_apLeftBorder_1lxv9_31",ti="_noBottomBorder_1lxv9_34",fr={row:Ya,harHover:za,rowHeader:Wa,grayHeader:Za,rowContent:Ja,selected:Xa,bold:Qa,dashedBottomBorder:ei,solidBottomBorder:ni,apLeftBorder:ri,noBottomBorder:ti},ai=K.bind(fr),ii=(e,t,n)=>r=>{e&&r.button===0&&e(r,t,n)},yr=e=>e.tagName==="TR"?e:yr(e.parentElement),_n=(e,t)=>{const n=yr(e.target),r=(t?n.nextSibling:n.previousSibling)||n;r&&(r.focus(),e.preventDefault())},si=(e,t,n,r)=>a=>{a.key==="ArrowDown"?_n(a,!0):a.key==="ArrowUp"?_n(a,!1):t&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(t(a,n,r),a.preventDefault()):e&&t&&a.target.tagName!=="TD"&&a.key==="Shift"&&(t(a),a.preventDefault())},oi=e=>t=>{e&&t.target.tagName!=="TD"&&t.key==="Shift"&&(e(t),t.preventDefault())},li=({id:e,model:t,isHeader:n=!1,hasGrayHeader:r=!1,onMouseDown:a,onKeyDown:i,children:o,noHover:s=!1,isSelected:l=!1,isBold:m=!1,isDashedBottomBorder:u=!1,isSolidBottomBorder:v=!1,isApLeftBorder:k=!1,className:h,useMultiselect:q=!1,hasNoBottomBorder:g=!1})=>x.jsx("tr",{className:ai(h,fr.row,{rowHeader:n,grayHeader:r,rowContent:!n&&!s,selected:l,harHover:!s,bold:m,dashedBottomBorder:u,solidBottomBorder:v,noBottomBorder:g,apLeftBorder:k}),onMouseDown:ii(a,e,t),onKeyDown:si(q,i,e,t),onKeyUp:q?oi(i):void 0,tabIndex:0,children:o}),ui="_columnStyle_1f13u_1",vr={columnStyle:ui},di=K.bind(vr),Ue=({children:e="",className:t,hidden:n=!1,colspanAll:r=!1})=>n?null:x.jsx("td",{className:di(vr.columnStyle,t),colSpan:r?100:void 0,children:e}),gi="_table_2cnpl_1",mi="_rowHover_2cnpl_25",ki={table:gi,rowHover:mi},fi=K.bind(ki),yi="EMPTY",vi=U.forwardRef(({headerTextCodes:e=[],headerColumnContent:t=[],classNameTable:n="",noHover:r=!1,hasGrayHeader:a=!1,children:i},o)=>x.jsxs("table",{ref:o,className:fi("table",{[n]:n,rowHover:!r}),children:[x.jsx("thead",{children:x.jsxs(li,{isHeader:!0,noHover:r,hasGrayHeader:a,children:[e.map(s=>typeof s=="string"&&s.startsWith(yi)?x.jsx(Ue,{children:" "},s):x.jsx(Ue,{children:x.jsx(ne,{id:s})},s)),t.map(s=>x.jsx(Ue,{children:s},s.key))]})}),x.jsx("tbody",{children:Array.isArray(i)?U.Children.map(i,s=>U.cloneElement(s,{noHover:r})):U.cloneElement(i,{noHover:r})})]}));vi.displayName="Table";const pi="_hidden_1pb4f_1",hi="_active_1pb4f_8",ci="_activeRow_1pb4f_15 _active_1pb4f_8",bi="_toggleIcon_1pb4f_19",Ti="_colTopPadding_1pb4f_22",ji={hidden:pi,active:hi,activeRow:ci,toggleIcon:bi,colTopPadding:Ti};K.bind(ji);Q(me);const qi="_fourPx_qda5k_1",wi="_eightPx_qda5k_4",Ai="_sixteenPx_qda5k_7",_i="_twentyPx_qda5k_10",Ei="_thirtyTwoPx_qda5k_13",Ri="_fourtyPx_qda5k_16",Bi={fourPx:qi,eightPx:wi,sixteenPx:Ai,twentyPx:_i,thirtyTwoPx:Ei,fourtyPx:Ri},Si=K.bind(Bi),Ee=({fourPx:e=!1,eightPx:t=!1,sixteenPx:n=!1,twentyPx:r=!1,thirtyTwoPx:a=!1,fourtyPx:i=!1})=>x.jsx("div",{className:Si({fourPx:e,eightPx:t,sixteenPx:n,twentyPx:r,thirtyTwoPx:a,fourtyPx:i})});Q(me);const Pi="_divider_1t980_1",$i="_dividerParagraf_1t980_8",Ii="_leftPanel_1t980_11",Fi="_rightPanel_1t980_14",Mi={divider:Pi,dividerParagraf:$i,leftPanel:Ii,rightPanel:Fi};K.bind(Mi);const Ni="_editedIcon_ulrjl_1",xi={editedIcon:Ni};K.bind(xi);const Oi="_starImage_dn2dq_1",Di="_chevronImage_dn2dq_6",Li="_pushRight_dn2dq_12",Ci="_pushRightCorner_dn2dq_15",Vi="_line_dn2dq_19",Ki="_arsakPadding_dn2dq_24",Hi="_timePadding_dn2dq_27",Gi="_inline_dn2dq_30",Ui="_firstColumnWidth_dn2dq_33",G={starImage:Oi,chevronImage:Di,pushRight:Li,pushRightCorner:Ci,line:Vi,arsakPadding:Ki,timePadding:Hi,inline:Gi,firstColumnWidth:Ui},Yi=[fn.RE_KLAGE_KA,fn.RE_KLAGE_NFP],zi=e=>!!e&&Yi.some(t=>t===e),Se=({withChevronDown:e=!1,withChevronUp:t=!1,behandling:n,getKodeverkMedNavn:r})=>{var i,o,s,l,m,u,v;const a=Ne();return f.jsxs(on,{borderWidth:"2",borderColor:"border-divider",borderRadius:"large",padding:"3",children:[f.jsxs(Z,{gap:"4",children:[f.jsx("div",{className:G.arsakPadding,children:f.jsx(xn,{size:"small",children:((i=r(n.type,ye.BEHANDLING_TYPE,n.type))==null?void 0:i.navn)||""})}),(n.type===pe.REVURDERING||n.type===pe.KLAGE)&&((o=n.førsteÅrsak)==null?void 0:o.behandlingArsakType)&&f.jsxs(f.Fragment,{children:["-",f.jsx(V,{size:"small",children:((s=r(n.førsteÅrsak.behandlingArsakType,ye.BEHANDLING_AARSAK,pe.REVURDERING))==null?void 0:s.navn)||""})]}),n.type===pe.TILBAKEKREVING_REVURDERING&&zi((l=n.førsteÅrsak)==null?void 0:l.behandlingArsakType)&&f.jsxs(f.Fragment,{children:["-",f.jsx(V,{size:"small",children:f.jsx(ne,{id:"Behandlingspunkt.Årsak.Klage"})})]}),f.jsx(at,{}),n.gjeldendeVedtak&&f.jsx(it,{className:G.starImage,title:a.formatMessage({id:"BehandlingPickerItemContent.GjeldendeVedtak"})}),e&&f.jsx(Zr,{title:a.formatMessage({id:"BehandlingPickerItemContent.Open"}),className:G.chevronImage}),t&&f.jsx(Jr,{title:a.formatMessage({id:"BehandlingPickerItemContent.Close"}),className:G.chevronImage})]}),f.jsx(Ee,{eightPx:!0}),f.jsx("hr",{className:G.line}),f.jsx(Ee,{sixteenPx:!0}),f.jsxs(sn,{children:[f.jsxs(Z,{children:[f.jsx("div",{className:G.firstColumnWidth,children:f.jsx(V,{size:"small",children:f.jsx(ne,{id:"BehandlingPickerItemContent.Behandlingstatus"})})}),f.jsx("div",{children:f.jsx(V,{size:"small",children:((m=r(n.status,ye.BEHANDLING_STATUS,pe.FORSTEGANGSSOKNAD))==null?void 0:m.navn)||""})})]}),f.jsxs(Z,{children:[f.jsx("div",{className:G.firstColumnWidth,children:f.jsx(V,{size:"small",children:f.jsx(ne,{id:"BehandlingPickerItemContent.Resultat"})})}),f.jsx("div",{children:f.jsx(V,{size:"small",children:(u=n.behandlingsresultat)!=null&&u.type?(v=r(n.behandlingsresultat.type,ye.BEHANDLING_RESULTAT_TYPE,n.type))==null?void 0:v.navn:"-"})})]}),f.jsx(Ee,{sixteenPx:!0}),f.jsxs(Z,{children:[f.jsx("div",{className:G.firstColumnWidth,children:f.jsx(V,{size:"small",children:f.jsx(ne,{id:"BehandlingPickerItemContent.Opprettet"})})}),f.jsx("div",{children:f.jsx(V,{size:"small",children:f.jsx(An,{dateTimeString:n.opprettet,separator:"kl"})})})]}),f.jsxs(Z,{children:[f.jsx("div",{className:G.firstColumnWidth,children:f.jsx(V,{size:"small",children:f.jsx(ne,{id:"BehandlingPickerItemContent.Avsluttet"})})}),f.jsx("div",{children:n.avsluttet&&f.jsx(V,{size:"small",children:f.jsx(An,{dateTimeString:n.avsluttet,separator:"kl"})})}),f.jsxs("div",{className:G.pushRightCorner,children:[f.jsx(V,{size:"small",className:G.inline,children:f.jsx(ne,{id:"BehandlingPickerItemContent.Enhet"})}),f.jsx(kr,{content:n.behandlendeEnhetNavn,alignLeft:!0,children:f.jsx(V,{size:"small",className:G.inline,children:n.behandlendeEnhetId})})]})]})]}),f.jsx(Ee,{fourPx:!0})]})};Se.__docgenInfo={description:`BehandlingInformasjon

Håndterer formatering av innholdet i den enkelte behandling i behandlingsvelgeren.`,methods:[],displayName:"BehandlingInformasjon",props:{withChevronDown:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},withChevronUp:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
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
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
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
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  vurderPaNyttArsaker?: string[];
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
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]},description:""},getKodeverkMedNavn:{required:!0,tsType:{name:"signature",type:"function",raw:"(kode: string, kodeverk: KodeverkType, behandlingType?: string) => KodeverkMedNavn | undefined",signature:{arguments:[{type:{name:"string"},name:"kode"},{type:{name:"KodeverkType"},name:"kodeverk"},{type:{name:"string"},name:"behandlingType"}],return:{name:"union",raw:"KodeverkMedNavn | undefined",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`},{name:"undefined"}]}}},description:""}}};const Wi="_linkToBehandling_1347f_1",Zi="_toggleShowAllButton_1347f_2",En={linkToBehandling:Wi,toggleShowAllButton:Zi},pr=({behandling:e,erKunEnBehandling:t,erAktiv:n,skalViseAlleBehandlinger:r,toggleVisAlleBehandlinger:a,renderRadSomLenke:i,getKodeverkMedNavn:o})=>t&&n?f.jsx(Se,{behandling:e,withChevronDown:!1,withChevronUp:!1,getKodeverkMedNavn:o}):t||r?i(En.linkToBehandling,f.jsx(Se,{behandling:e,withChevronDown:!1,withChevronUp:r&&n,getKodeverkMedNavn:o}),e.uuid):n?f.jsx("button",{type:"button",className:En.toggleShowAllButton,onClick:a,children:f.jsx(Se,{behandling:e,withChevronDown:!r,withChevronUp:r,getKodeverkMedNavn:o})}):null;pr.__docgenInfo={description:"",methods:[],displayName:"BehandlingListeRad",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
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
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
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
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  vurderPaNyttArsaker?: string[];
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
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]},description:""},erKunEnBehandling:{required:!0,tsType:{name:"boolean"},description:""},erAktiv:{required:!0,tsType:{name:"boolean"},description:""},skalViseAlleBehandlinger:{required:!0,tsType:{name:"boolean"},description:""},toggleVisAlleBehandlinger:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderRadSomLenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(className: string, behandlingInfoKomponent: ReactElement, uuid: string) => ReactElement",signature:{arguments:[{type:{name:"string"},name:"className"},{type:{name:"ReactElement"},name:"behandlingInfoKomponent"},{type:{name:"string"},name:"uuid"}],return:{name:"ReactElement"}}},description:""},getKodeverkMedNavn:{required:!0,tsType:{name:"signature",type:"function",raw:"(kode: string, kodeverk: KodeverkType, behandlingType?: string) => KodeverkMedNavn | undefined",signature:{arguments:[{type:{name:"string"},name:"kode"},{type:{name:"KodeverkType"},name:"kodeverk"},{type:{name:"string"},name:"behandlingType"}],return:{name:"union",raw:"KodeverkMedNavn | undefined",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`},{name:"undefined"}]}}},description:""}}};const Ji="_behandlingList_12m8o_1",Xi={behandlingList:Ji},Qi=e=>[...e].sort((t,n)=>t.avsluttet&&!n.avsluttet?1:!t.avsluttet&&n.avsluttet?-1:t.avsluttet&&n.avsluttet?Ae(n.avsluttet).diff(Ae(t.avsluttet)):Ae(n.opprettet).diff(Ae(t.opprettet))),hr=({behandlinger:e,renderRadSomLenke:t,behandlingUuid:n,skalViseAlleBehandlinger:r,toggleVisAlleBehandlinger:a,getKodeverkMedNavn:i})=>{const o=R.useMemo(()=>Qi(e).filter(s=>r||s.uuid===n),[r,n,e]);return f.jsxs("ul",{className:Xi.behandlingList,children:[e.length===0&&f.jsx(on,{borderWidth:"2",borderColor:"border-divider",borderRadius:"large",padding:"3",children:f.jsx(xn,{size:"small",children:f.jsx(ne,{id:"BehandlingList.ZeroBehandlinger"})})}),e.length>0&&o.map(s=>f.jsx("li",{"data-testid":`behandling-${s.uuid}`,children:f.jsx(pr,{erKunEnBehandling:e.length===1,behandling:s,renderRadSomLenke:t,erAktiv:s.uuid===n,skalViseAlleBehandlinger:r,toggleVisAlleBehandlinger:a,getKodeverkMedNavn:i})},s.uuid))]})};hr.__docgenInfo={description:`BehandlingerListe

Viser behandlinger knyttet til fagsak,`,methods:[],displayName:"BehandlingerListe",props:{behandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
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
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
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
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  vurderPaNyttArsaker?: string[];
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
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""},renderRadSomLenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(className: string, behandlingInfoKomponent: ReactElement, uuid: string) => ReactElement",signature:{arguments:[{type:{name:"string"},name:"className"},{type:{name:"ReactElement"},name:"behandlingInfoKomponent"},{type:{name:"string"},name:"uuid"}],return:{name:"ReactElement"}}},description:""},behandlingUuid:{required:!1,tsType:{name:"string"},description:""},skalViseAlleBehandlinger:{required:!0,tsType:{name:"boolean"},description:""},toggleVisAlleBehandlinger:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},getKodeverkMedNavn:{required:!0,tsType:{name:"signature",type:"function",raw:"(kode: string, kodeverk: KodeverkType, behandlingType?: string) => KodeverkMedNavn | undefined",signature:{arguments:[{type:{name:"string"},name:"kode"},{type:{name:"KodeverkType"},name:"kodeverk"},{type:{name:"string"},name:"behandlingType"}],return:{name:"union",raw:"KodeverkMedNavn | undefined",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`},{name:"undefined"}]}}},description:""}}};const es={"BehandlingPickerItemContent.Opprettet":"Opprettet","BehandlingPickerItemContent.Avsluttet":"Avsluttet","BehandlingPickerItemContent.Behandlingsstatus":"Behandlingsstatus","BehandlingPickerItemContent.Open":"Åpne behandlingsliste","BehandlingPickerItemContent.Close":"Lukk behandlingsliste","BehandlingPickerItemContent.GjeldendeVedtak":"Gjeldende vedtak","BehandlingPickerItemContent.Arsak":"Årsak","BehandlingPickerItemContent.Behandlingstatus":"Behandlingsstatus","BehandlingPickerItemContent.Resultat":"Resultat","BehandlingPickerItemContent.Enhet":"Enhet ","BehandlingList.ZeroBehandlinger":"Ingen behandlinger er opprettet","Behandlingspunkt.Årsak.Klage":"Klage","DateTimeLabel.Kl":"Kl."},ns=Q(es),cr=e=>f.jsx(Xt,{value:ns,children:f.jsx(hr,{...e})});cr.__docgenInfo={description:"",methods:[],displayName:"BehandlingVelgerSakIndex",props:{behandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
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
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
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
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  vurderPaNyttArsaker?: string[];
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
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""},behandlingUuid:{required:!1,tsType:{name:"string"},description:""},skalViseAlleBehandlinger:{required:!0,tsType:{name:"boolean"},description:""},toggleVisAlleBehandlinger:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderRadSomLenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(className: string, behandlingInfoKomponent: ReactElement, uuid: string) => ReactElement",signature:{arguments:[{type:{name:"string"},name:"className"},{type:{name:"ReactElement"},name:"behandlingInfoKomponent"},{type:{name:"string"},name:"uuid"}],return:{name:"ReactElement"}}},description:""},getKodeverkMedNavn:{required:!0,tsType:{name:"signature",type:"function",raw:"(kode: string, kodeverk: KodeverkType, behandlingType?: string) => KodeverkMedNavn | undefined",signature:{arguments:[{type:{name:"string"},name:"kode"},{type:{name:"KodeverkType"},name:"kodeverk"},{type:{name:"string"},name:"behandlingType"}],return:{name:"union",raw:"KodeverkMedNavn | undefined",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`},{name:"undefined"}]}}},description:""}}};var X;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(X||(X={}));var ae=function(e){$(t,e);function t(n,r,a){var i=e.call(this,n)||this;return i.code=r,i.originalMessage=a,i}return t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),Rn=function(e){$(t,e);function t(n,r,a,i){return e.call(this,'Invalid values for "'.concat(n,'": "').concat(r,'". Options are "').concat(Object.keys(a).join('", "'),'"'),X.INVALID_VALUE,i)||this}return t}(ae),rs=function(e){$(t,e);function t(n,r,a){return e.call(this,'Value for "'.concat(n,'" must be of type ').concat(r),X.INVALID_VALUE,a)||this}return t}(ae),ts=function(e){$(t,e);function t(n,r){return e.call(this,'The intl string context variable "'.concat(n,'" was not provided to the string "').concat(r,'"'),X.MISSING_VALUE,r)||this}return t}(ae),L;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(L||(L={}));function as(e){return e.length<2?e:e.reduce(function(t,n){var r=t[t.length-1];return!r||r.type!==L.literal||n.type!==L.literal?t.push(n):r.value+=n.value,t},[])}function br(e){return typeof e=="function"}function Pe(e,t,n,r,a,i,o){if(e.length===1&&$e(e[0]))return[{type:L.literal,value:e[0].value}];for(var s=[],l=0,m=e;l<m.length;l++){var u=m[l];if($e(u)){s.push({type:L.literal,value:u.value});continue}if(On(u)){typeof i=="number"&&s.push({type:L.literal,value:n.getNumberFormat(t).format(i)});continue}var v=u.value;if(!(a&&v in a))throw new ts(v,o);var k=a[v];if(Dn(u)){(!k||typeof k=="string"||typeof k=="number")&&(k=typeof k=="string"||typeof k=="number"?String(k):""),s.push({type:typeof k=="string"?L.literal:L.object,value:k});continue}if(Ln(u)){var h=typeof u.style=="string"?r.date[u.style]:Ie(u.style)?u.style.parsedOptions:void 0;s.push({type:L.literal,value:n.getDateTimeFormat(t,h).format(k)});continue}if(Cn(u)){var h=typeof u.style=="string"?r.time[u.style]:Ie(u.style)?u.style.parsedOptions:r.time.medium;s.push({type:L.literal,value:n.getDateTimeFormat(t,h).format(k)});continue}if(Vn(u)){var h=typeof u.style=="string"?r.number[u.style]:Kn(u.style)?u.style.parsedOptions:void 0;h&&h.scale&&(k=k*(h.scale||1)),s.push({type:L.literal,value:n.getNumberFormat(t,h).format(k)});continue}if(Hn(u)){var q=u.children,g=u.value,T=a[g];if(!br(T))throw new rs(g,"function",o);var c=Pe(q,t,n,r,a,i),A=T(c.map(function(P){return P.value}));Array.isArray(A)||(A=[A]),s.push.apply(s,A.map(function(P){return{type:typeof P=="string"?L.literal:L.object,value:P}}))}if(Gn(u)){var b=u.options[k]||u.options.other;if(!b)throw new Rn(u.value,k,Object.keys(u.options),o);s.push.apply(s,Pe(b.value,t,n,r,a));continue}if(Un(u)){var b=u.options["=".concat(k)];if(!b){if(!Intl.PluralRules)throw new ae(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,X.MISSING_INTL_API,o);var O=n.getPluralRules(t,{type:u.pluralType}).select(k-(u.offset||0));b=u.options[O]||u.options.other}if(!b)throw new Rn(u.value,k,Object.keys(u.options),o);s.push.apply(s,Pe(b.value,t,n,r,a,k-(u.offset||0)));continue}}return as(s)}function is(e,t){return t?p(p(p({},e||{}),t||{}),Object.keys(e).reduce(function(n,r){return n[r]=p(p({},e[r]),t[r]||{}),n},{})):e}function ss(e,t){return t?Object.keys(e).reduce(function(n,r){return n[r]=is(e[r],t[r]),n},p({},e)):e}function Ye(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}function os(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:F(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.NumberFormat).bind.apply(t,N([void 0],n,!1)))},{cache:Ye(e.number),strategy:M.variadic}),getDateTimeFormat:F(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.DateTimeFormat).bind.apply(t,N([void 0],n,!1)))},{cache:Ye(e.dateTime),strategy:M.variadic}),getPluralRules:F(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.PluralRules).bind.apply(t,N([void 0],n,!1)))},{cache:Ye(e.pluralRules),strategy:M.variadic})}}var Tr=function(){function e(t,n,r,a){n===void 0&&(n=e.defaultLocale);var i=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var m=i.formatToParts(l);if(m.length===1)return m[0].value;var u=m.reduce(function(v,k){return!v.length||k.type!==L.literal||typeof v[v.length-1]!="string"?v.push(k.value):v[v.length-1]+=k.value,v},[]);return u.length<=1?u[0]||"":u},this.formatToParts=function(l){return Pe(i.ast,i.locales,i.formatters,i.formats,l,void 0,i.message)},this.resolvedOptions=function(){var l;return{locale:((l=i.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(i.locales)[0]}},this.getAst=function(){return i.ast},this.locales=n,this.resolvedLocale=e.resolveLocale(n),typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var o=a||{};o.formatters;var s=Y(o,["formatters"]);this.ast=e.__parse(t,p(p({},s),{locale:this.resolvedLocale}))}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=ss(e.formats,r),this.formatters=a&&a.formatters||os(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(t){if(!(typeof Intl.Locale>"u")){var n=Intl.NumberFormat.supportedLocalesOf(t);return n.length>0?new Intl.Locale(n[0]):new Intl.Locale(typeof t=="string"?t:t[0])}},e.__parse=Yn,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),de;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(de||(de={}));var je=function(e){$(t,e);function t(n,r,a){var i=this,o=a?a instanceof Error?a:new Error(String(a)):void 0;return i=e.call(this,"[@formatjs/intl Error ".concat(n,"] ").concat(r,`
`).concat(o?`
`.concat(o.message,`
`).concat(o.stack):""))||this,i.code=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(i,t),i}return t}(Error),ls=function(e){$(t,e);function t(n,r){return e.call(this,de.UNSUPPORTED_FORMATTER,n,r)||this}return t}(je),us=function(e){$(t,e);function t(n,r){return e.call(this,de.INVALID_CONFIG,n,r)||this}return t}(je),Bn=function(e){$(t,e);function t(n,r){return e.call(this,de.MISSING_DATA,n,r)||this}return t}(je),W=function(e){$(t,e);function t(n,r,a){var i=e.call(this,de.FORMAT_ERROR,"".concat(n,`
Locale: `).concat(r,`
`),a)||this;return i.locale=r,i}return t}(je),ze=function(e){$(t,e);function t(n,r,a,i){var o=e.call(this,"".concat(n,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),r,i)||this;return o.descriptor=a,o.locale=r,o}return t}(W),ds=function(e){$(t,e);function t(n,r){var a=e.call(this,de.MISSING_TRANSLATION,'Missing message: "'.concat(n.id,'" for locale "').concat(r,'", using ').concat(n.defaultMessage?"default message (".concat(typeof n.defaultMessage=="string"?n.defaultMessage:n.defaultMessage.map(function(i){var o;return(o=i.value)!==null&&o!==void 0?o:JSON.stringify(i)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=n,a}return t}(je);function ke(e,t,n){return n===void 0&&(n={}),t.reduce(function(r,a){return a in e?r[a]=e[a]:a in n&&(r[a]=n[a]),r},{})}var gs=function(e){},ms=function(e){},jr={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:gs,onWarn:ms};function qr(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function le(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}function ks(e){e===void 0&&(e=qr());var t=Intl.RelativeTimeFormat,n=Intl.ListFormat,r=Intl.DisplayNames,a=F(function(){for(var s,l=[],m=0;m<arguments.length;m++)l[m]=arguments[m];return new((s=Intl.DateTimeFormat).bind.apply(s,N([void 0],l,!1)))},{cache:le(e.dateTime),strategy:M.variadic}),i=F(function(){for(var s,l=[],m=0;m<arguments.length;m++)l[m]=arguments[m];return new((s=Intl.NumberFormat).bind.apply(s,N([void 0],l,!1)))},{cache:le(e.number),strategy:M.variadic}),o=F(function(){for(var s,l=[],m=0;m<arguments.length;m++)l[m]=arguments[m];return new((s=Intl.PluralRules).bind.apply(s,N([void 0],l,!1)))},{cache:le(e.pluralRules),strategy:M.variadic});return{getDateTimeFormat:a,getNumberFormat:i,getMessageFormat:F(function(s,l,m,u){return new Tr(s,l,m,p({formatters:{getNumberFormat:i,getDateTimeFormat:a,getPluralRules:o}},u||{}))},{cache:le(e.message),strategy:M.variadic}),getRelativeTimeFormat:F(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return new(t.bind.apply(t,N([void 0],s,!1)))},{cache:le(e.relativeTime),strategy:M.variadic}),getPluralRules:o,getListFormat:F(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return new(n.bind.apply(n,N([void 0],s,!1)))},{cache:le(e.list),strategy:M.variadic}),getDisplayNames:F(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return new(r.bind.apply(r,N([void 0],s,!1)))},{cache:le(e.displayNames),strategy:M.variadic})}}function gn(e,t,n,r){var a=e&&e[t],i;if(a&&(i=a[n]),i)return i;r(new ls("No ".concat(t," format named: ").concat(n)))}function Re(e,t){return Object.keys(e).reduce(function(n,r){return n[r]=p({timeZone:t},e[r]),n},{})}function Sn(e,t){var n=Object.keys(p(p({},e),t));return n.reduce(function(r,a){return r[a]=p(p({},e[a]||{}),t[a]||{}),r},{})}function Pn(e,t){if(!t)return e;var n=Tr.formats;return p(p(p({},n),e),{date:Sn(Re(n.date,t),Re(e.date||{},t)),time:Sn(Re(n.time,t),Re(e.time||{},t))})}var en=function(e,t,n,r,a){var i=e.locale,o=e.formats,s=e.messages,l=e.defaultLocale,m=e.defaultFormats,u=e.fallbackOnEmptyString,v=e.onError,k=e.timeZone,h=e.defaultRichTextElements;n===void 0&&(n={id:""});var q=n.id,g=n.defaultMessage;Fe(!!q,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var T=String(q),c=s&&Object.prototype.hasOwnProperty.call(s,T)&&s[T];if(Array.isArray(c)&&c.length===1&&c[0].type===zn.literal)return c[0].value;if(!r&&c&&typeof c=="string"&&!h)return c.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=p(p({},h),r||{}),o=Pn(o,k),m=Pn(m,k),!c){if(u===!1&&c==="")return c;if((!g||i&&i.toLowerCase()!==l.toLowerCase())&&v(new ds(n,i)),g)try{var A=t.getMessageFormat(g,l,m,a);return A.format(r)}catch(b){return v(new ze('Error formatting default message for: "'.concat(T,'", rendering default message verbatim'),i,n,b)),typeof g=="string"?g:T}return T}try{var A=t.getMessageFormat(c,i,o,p({formatters:t},a||{}));return A.format(r)}catch(b){v(new ze('Error formatting message: "'.concat(T,'", using ').concat(g?"default message":"id"," as fallback."),i,n,b))}if(g)try{var A=t.getMessageFormat(g,l,m,a);return A.format(r)}catch(b){v(new ze('Error formatting the default message for: "'.concat(T,'", rendering message verbatim'),i,n,b))}return typeof c=="string"?c:typeof g=="string"?g:T},wr=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Oe(e,t,n,r){var a=e.locale,i=e.formats,o=e.onError,s=e.timeZone;r===void 0&&(r={});var l=r.format,m=p(p({},s&&{timeZone:s}),l&&gn(i,t,l,o)),u=ke(r,wr,m);return t==="time"&&!u.hour&&!u.minute&&!u.second&&!u.timeStyle&&!u.dateStyle&&(u=p(p({},u),{hour:"numeric",minute:"numeric"})),n(a,u)}function fs(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],i=n[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return Oe(e,"date",t,o).format(s)}catch(l){e.onError(new W("Error formatting date.",e.locale,l))}return String(s)}function ys(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],i=n[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return Oe(e,"time",t,o).format(s)}catch(l){e.onError(new W("Error formatting time.",e.locale,l))}return String(s)}function vs(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],i=n[1],o=n[2],s=o===void 0?{}:o,l=e.timeZone,m=e.locale,u=e.onError,v=ke(s,wr,l?{timeZone:l}:{});try{return t(m,v).formatRange(a,i)}catch(k){u(new W("Error formatting date time range.",e.locale,k))}return String(a)}function ps(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],i=n[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return Oe(e,"date",t,o).formatToParts(s)}catch(l){e.onError(new W("Error formatting date.",e.locale,l))}return[]}function hs(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],i=n[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return Oe(e,"time",t,o).formatToParts(s)}catch(l){e.onError(new W("Error formatting time.",e.locale,l))}return[]}var cs=["style","type","fallback","languageDisplay"];function bs(e,t,n,r){var a=e.locale,i=e.onError,o=Intl.DisplayNames;o||i(new ae(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,X.MISSING_INTL_API));var s=ke(r,cs);try{return t(a,s).of(n)}catch(l){i(new W("Error formatting display name.",a,l))}}var Ts=["type","style"],$n=Date.now();function js(e){return"".concat($n,"_").concat(e,"_").concat($n)}function qs(e,t,n,r){r===void 0&&(r={});var a=Ar(e,t,n,r).reduce(function(i,o){var s=o.value;return typeof s!="string"?i.push(s):typeof i[i.length-1]=="string"?i[i.length-1]+=s:i.push(s),i},[]);return a.length===1?a[0]:a.length===0?"":a}function Ar(e,t,n,r){var a=e.locale,i=e.onError;r===void 0&&(r={});var o=Intl.ListFormat;o||i(new ae(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,X.MISSING_INTL_API));var s=ke(r,Ts);try{var l={},m=n.map(function(u,v){if(typeof u=="object"){var k=js(v);return l[k]=u,k}return String(u)});return t(a,s).formatToParts(m).map(function(u){return u.type==="literal"?u:p(p({},u),{value:l[u.value]||u.value})})}catch(u){i(new W("Error formatting list.",a,u))}return n}var ws=["type"];function As(e,t,n,r){var a=e.locale,i=e.onError;r===void 0&&(r={}),Intl.PluralRules||i(new ae(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,X.MISSING_INTL_API));var o=ke(r,ws);try{return t(a,o).select(n)}catch(s){i(new W("Error formatting plural.",a,s))}return"other"}var _s=["numeric","style"];function Es(e,t,n){var r=e.locale,a=e.formats,i=e.onError;n===void 0&&(n={});var o=n.format,s=!!o&&gn(a,"relative",o,i)||{},l=ke(n,_s,s);return t(r,l)}function Rs(e,t,n,r,a){a===void 0&&(a={}),r||(r="second");var i=Intl.RelativeTimeFormat;i||e.onError(new ae(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,X.MISSING_INTL_API));try{return Es(e,t,a).format(n,r)}catch(o){e.onError(new W("Error formatting relative time.",e.locale,o))}return String(n)}var Bs=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function _r(e,t,n){var r=e.locale,a=e.formats,i=e.onError;n===void 0&&(n={});var o=n.format,s=o&&gn(a,"number",o,i)||{},l=ke(n,Bs,s);return t(r,l)}function Ss(e,t,n,r){r===void 0&&(r={});try{return _r(e,t,r).format(n)}catch(a){e.onError(new W("Error formatting number.",e.locale,a))}return String(n)}function Ps(e,t,n,r){r===void 0&&(r={});try{return _r(e,t,r).formatToParts(n)}catch(a){e.onError(new W("Error formatting number.",e.locale,a))}return[]}function $s(e){var t=e?e[Object.keys(e)[0]]:void 0;return typeof t=="string"}function Is(e){e.onWarn&&e.defaultRichTextElements&&$s(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function Fs(e,t){var n=ks(t),r=p(p({},jr),e),a=r.locale,i=r.defaultLocale,o=r.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&o?o(new Bn('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&o&&o(new Bn('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(o&&o(new us('"locale" was not configured, using "'.concat(i,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),Is(r),p(p({},r),{formatters:n,formatNumber:Ss.bind(null,r,n.getNumberFormat),formatNumberToParts:Ps.bind(null,r,n.getNumberFormat),formatRelativeTime:Rs.bind(null,r,n.getRelativeTimeFormat),formatDate:fs.bind(null,r,n.getDateTimeFormat),formatDateToParts:ps.bind(null,r,n.getDateTimeFormat),formatTime:ys.bind(null,r,n.getDateTimeFormat),formatDateTimeRange:vs.bind(null,r,n.getDateTimeFormat),formatTimeToParts:hs.bind(null,r,n.getDateTimeFormat),formatPlural:As.bind(null,r,n.getPluralRules),formatMessage:en.bind(null,r,n),$t:en.bind(null,r,n),formatList:qs.bind(null,r,n.getListFormat),formatListToParts:Ar.bind(null,r,n.getListFormat),formatDisplayName:bs.bind(null,r,n.getDisplayNames)})}function Ms(e){Fe(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Ns=p(p({},jr),{textComponent:R.Fragment});function xs(e){return function(t){return e(R.Children.toArray(t))}}function In(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),a=n.length;if(r.length!==a)return!1;for(var i=0;i<a;i++){var o=n[i];if(e[o]!==t[o]||!Object.prototype.hasOwnProperty.call(t,o))return!1}return!0}var mn=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=R.createContext(null)):R.createContext(null);mn.Consumer;var Os=mn.Provider,Ds=Os,Ls=mn;function De(){var e=R.useContext(Ls);return Ms(e),e}var nn;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(nn||(nn={}));var rn;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(rn||(rn={}));function Er(e){var t=function(n){var r=De(),a=n.value,i=n.children,o=Y(n,["value","children"]),s=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?r.formatDateToParts(s,o):r.formatTimeToParts(s,o);return i(l)};return t.displayName=rn[e],t}function qe(e){var t=function(n){var r=De(),a=n.value,i=n.children,o=Y(n,["value","children"]),s=r[e](a,o);if(typeof i=="function")return i(s);var l=r.textComponent||R.Fragment;return R.createElement(l,null,s)};return t.displayName=nn[e],t}function Rr(e){return e&&Object.keys(e).reduce(function(t,n){var r=e[n];return t[n]=br(r)?xs(r):r,t},{})}var Fn=function(e,t,n,r){for(var a=[],i=4;i<arguments.length;i++)a[i-4]=arguments[i];var o=Rr(r),s=en.apply(void 0,N([e,t,n,o],a,!1));return Array.isArray(s)?R.Children.toArray(s):s},Cs=function(e,t){var n=e.defaultRichTextElements,r=Y(e,["defaultRichTextElements"]),a=Rr(n),i=Fs(p(p(p({},Ns),r),{defaultRichTextElements:a}),t),o={locale:i.locale,timeZone:i.timeZone,fallbackOnEmptyString:i.fallbackOnEmptyString,formats:i.formats,defaultLocale:i.defaultLocale,defaultFormats:i.defaultFormats,messages:i.messages,onError:i.onError,defaultRichTextElements:a};return p(p({},i),{formatMessage:Fn.bind(null,o,i.formatters),$t:Fn.bind(null,o,i.formatters)})};function Vs(e,t){var n=e.values,r=Y(e,["values"]),a=t.values,i=Y(t,["values"]);return In(a,n)&&In(r,i)}function Br(e){var t=De(),n=t.formatMessage,r=t.textComponent,a=r===void 0?R.Fragment:r,i=e.id,o=e.description,s=e.defaultMessage,l=e.values,m=e.children,u=e.tagName,v=u===void 0?a:u,k=e.ignoreTag,h={id:i,description:o,defaultMessage:s},q=n(h,l,{ignoreTag:k});return typeof m=="function"?m(Array.isArray(q)?q:[q]):v?R.createElement(v,null,R.Children.toArray(q)):R.createElement(R.Fragment,null,q)}Br.displayName="FormattedMessage";var Sr=R.memo(Br,Vs);Sr.displayName="MemoizedFormattedMessage";qe("formatDate");qe("formatTime");qe("formatNumber");qe("formatList");qe("formatDisplayName");Er("formatDate");Er("formatTime");var Le=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pr={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Le,function(){var n="minute",r=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(i,o,s){var l=o.prototype;s.utc=function(g){var T={date:g,utc:!0,args:arguments};return new o(T)},l.utc=function(g){var T=s(this.toDate(),{locale:this.$L,utc:!0});return g?T.add(this.utcOffset(),n):T},l.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var m=l.parse;l.parse=function(g){g.utc&&(this.$u=!0),this.$utils().u(g.$offset)||(this.$offset=g.$offset),m.call(this,g)};var u=l.init;l.init=function(){if(this.$u){var g=this.$d;this.$y=g.getUTCFullYear(),this.$M=g.getUTCMonth(),this.$D=g.getUTCDate(),this.$W=g.getUTCDay(),this.$H=g.getUTCHours(),this.$m=g.getUTCMinutes(),this.$s=g.getUTCSeconds(),this.$ms=g.getUTCMilliseconds()}else u.call(this)};var v=l.utcOffset;l.utcOffset=function(g,T){var c=this.$utils().u;if(c(g))return this.$u?0:c(this.$offset)?v.call(this):this.$offset;if(typeof g=="string"&&(g=function(P){P===void 0&&(P="");var w=P.match(r);if(!w)return null;var y=(""+w[0]).match(a)||["-",0,0],d=y[0],j=60*+y[1]+ +y[2];return j===0?0:d==="+"?j:-j}(g),g===null))return this;var A=Math.abs(g)<=16?60*g:g,b=this;if(T)return b.$offset=A,b.$u=g===0,b;if(g!==0){var O=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(b=this.local().add(A+O,n)).$offset=A,b.$x.$localOffset=O}else b=this.utc();return b};var k=l.format;l.format=function(g){var T=g||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return k.call(this,T)},l.valueOf=function(){var g=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*g},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var h=l.toDate;l.toDate=function(g){return g==="s"&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():h.call(this)};var q=l.diff;l.diff=function(g,T,c){if(g&&this.$u===g.$u)return q.call(this,g,T,c);var A=this.local(),b=s(g).local();return q.call(A,b,T,c)}}})})(Pr);var Ks=Pr.exports;const Hs=kn(Ks);var $r={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Le,function(){var n,r,a=1e3,i=6e4,o=36e5,s=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=31536e6,u=2628e6,v=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,k={years:m,months:u,days:s,hours:o,minutes:i,seconds:a,milliseconds:1,weeks:6048e5},h=function(w){return w instanceof O},q=function(w,y,d){return new O(w,d,y.$l)},g=function(w){return r.p(w)+"s"},T=function(w){return w<0},c=function(w){return T(w)?Math.ceil(w):Math.floor(w)},A=function(w){return Math.abs(w)},b=function(w,y){return w?T(w)?{negative:!0,format:""+A(w)+y}:{negative:!1,format:""+w+y}:{negative:!1,format:""}},O=function(){function w(d,j,_){var E=this;if(this.$d={},this.$l=_,d===void 0&&(this.$ms=0,this.parseFromMilliseconds()),j)return q(d*k[g(j)],this);if(typeof d=="number")return this.$ms=d,this.parseFromMilliseconds(),this;if(typeof d=="object")return Object.keys(d).forEach(function(I){E.$d[g(I)]=d[I]}),this.calMilliseconds(),this;if(typeof d=="string"){var B=d.match(v);if(B){var S=B.slice(2).map(function(I){return I!=null?Number(I):0});return this.$d.years=S[0],this.$d.months=S[1],this.$d.weeks=S[2],this.$d.days=S[3],this.$d.hours=S[4],this.$d.minutes=S[5],this.$d.seconds=S[6],this.calMilliseconds(),this}}return this}var y=w.prototype;return y.calMilliseconds=function(){var d=this;this.$ms=Object.keys(this.$d).reduce(function(j,_){return j+(d.$d[_]||0)*k[_]},0)},y.parseFromMilliseconds=function(){var d=this.$ms;this.$d.years=c(d/m),d%=m,this.$d.months=c(d/u),d%=u,this.$d.days=c(d/s),d%=s,this.$d.hours=c(d/o),d%=o,this.$d.minutes=c(d/i),d%=i,this.$d.seconds=c(d/a),d%=a,this.$d.milliseconds=d},y.toISOString=function(){var d=b(this.$d.years,"Y"),j=b(this.$d.months,"M"),_=+this.$d.days||0;this.$d.weeks&&(_+=7*this.$d.weeks);var E=b(_,"D"),B=b(this.$d.hours,"H"),S=b(this.$d.minutes,"M"),I=this.$d.seconds||0;this.$d.milliseconds&&(I+=this.$d.milliseconds/1e3,I=Math.round(1e3*I)/1e3);var ie=b(I,"S"),Ce=d.negative||j.negative||E.negative||B.negative||S.negative||ie.negative,Ve=B.format||S.format||ie.format?"T":"",se=(Ce?"-":"")+"P"+d.format+j.format+E.format+Ve+B.format+S.format+ie.format;return se==="P"||se==="-P"?"P0D":se},y.toJSON=function(){return this.toISOString()},y.format=function(d){var j=d||"YYYY-MM-DDTHH:mm:ss",_={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return j.replace(l,function(E,B){return B||String(_[E])})},y.as=function(d){return this.$ms/k[g(d)]},y.get=function(d){var j=this.$ms,_=g(d);return _==="milliseconds"?j%=1e3:j=_==="weeks"?c(j/k[_]):this.$d[_],j||0},y.add=function(d,j,_){var E;return E=j?d*k[g(j)]:h(d)?d.$ms:q(d,this).$ms,q(this.$ms+E*(_?-1:1),this)},y.subtract=function(d,j){return this.add(d,j,!0)},y.locale=function(d){var j=this.clone();return j.$l=d,j},y.clone=function(){return q(this.$ms,this)},y.humanize=function(d){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!d)},y.valueOf=function(){return this.asMilliseconds()},y.milliseconds=function(){return this.get("milliseconds")},y.asMilliseconds=function(){return this.as("milliseconds")},y.seconds=function(){return this.get("seconds")},y.asSeconds=function(){return this.as("seconds")},y.minutes=function(){return this.get("minutes")},y.asMinutes=function(){return this.as("minutes")},y.hours=function(){return this.get("hours")},y.asHours=function(){return this.as("hours")},y.days=function(){return this.get("days")},y.asDays=function(){return this.as("days")},y.weeks=function(){return this.get("weeks")},y.asWeeks=function(){return this.as("weeks")},y.months=function(){return this.get("months")},y.asMonths=function(){return this.as("months")},y.years=function(){return this.get("years")},y.asYears=function(){return this.as("years")},w}(),P=function(w,y,d){return w.add(y.years()*d,"y").add(y.months()*d,"M").add(y.days()*d,"d").add(y.hours()*d,"h").add(y.minutes()*d,"m").add(y.seconds()*d,"s").add(y.milliseconds()*d,"ms")};return function(w,y,d){n=d,r=d().$utils(),d.duration=function(E,B){var S=d.locale();return q(E,{$l:S},B)},d.isDuration=h;var j=y.prototype.add,_=y.prototype.subtract;y.prototype.add=function(E,B){return h(E)?P(this,E,1):j.bind(this)(E,B)},y.prototype.subtract=function(E,B){return h(E)?P(this,E,-1):_.bind(this)(E,B)}}})})($r);var Gs=$r.exports;const Us=kn(Gs);var Ir={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Le,function(){var n="day";return function(r,a,i){var o=function(m){return m.add(4-m.isoWeekday(),n)},s=a.prototype;s.isoWeekYear=function(){return o(this).year()},s.isoWeek=function(m){if(!this.$utils().u(m))return this.add(7*(m-this.isoWeek()),n);var u,v,k,h,q=o(this),g=(u=this.isoWeekYear(),v=this.$u,k=(v?i.utc:i)().year(u).startOf("year"),h=4-k.isoWeekday(),k.isoWeekday()>4&&(h+=7),k.add(h,n));return q.diff(g,"week")+1},s.isoWeekday=function(m){return this.$utils().u(m)?this.day()||7:this.day(this.day()%7?m:m-7)};var l=s.startOf;s.startOf=function(m,u){var v=this.$utils(),k=!!v.u(u)||u;return v.p(m)==="isoweek"?k?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(m,u)}}})})(Ir);var Ys=Ir.exports;const zs=kn(Ys);var Ws={exports:{}};(function(e,t){(function(n,r){e.exports=r(re)})(Le,function(n){function r(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var a=r(n),i={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(o){return o+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(i,null,!0),i})})(Ws);const Zs=qr(),ee=e=>Cs({locale:"nb-NO",messages:e},Zs),Fr={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};re.extend(Hs);re.extend(zs);re.extend(Us);ee(Fr);ee(Fr);function Js(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mr={exports:{}},ce={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mn;function Xs(){if(Mn)return ce;Mn=1;var e=U,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(s,l,m){var u,v={},k=null,h=null;m!==void 0&&(k=""+m),l.key!==void 0&&(k=""+l.key),l.ref!==void 0&&(h=l.ref);for(u in l)r.call(l,u)&&!i.hasOwnProperty(u)&&(v[u]=l[u]);if(s&&s.defaultProps)for(u in l=s.defaultProps,l)v[u]===void 0&&(v[u]=l[u]);return{$$typeof:t,type:s,key:k,ref:h,props:v,_owner:a.current}}return ce.Fragment=n,ce.jsx=o,ce.jsxs=o,ce}Mr.exports=Xs();var C=Mr.exports;const fe={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};ee(fe);ee(fe);var Nr={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(i=a(i,r.call(this,s)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var s in i)t.call(i,s)&&i[s]&&(o=a(o,this&&this[s]||s));return o}function a(i,o){return o?i?i+" "+o:i+o:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Nr);var Qs=Nr.exports;const H=Js(Qs),eo="_borderbox_hicl4_1",no="_error_hicl4_4",ro="_warning_hicl4_7",to={borderbox:eo,error:no,warning:ro};H.bind(to);const ao="_aksjonspunkt_kn1hn_1",io="_erAksjonspunktApent_kn1hn_4",so="_erIkkeGodkjentAvBeslutter_kn1hn_8",oo={aksjonspunkt:ao,erAksjonspunktApent:io,erIkkeGodkjentAvBeslutter:so};H.bind(oo);ee(fe);ee(fe);const lo="_tooltip_h8akz_1",uo="_tooltiptext_h8akz_5",go="_left_h8akz_22",mo="_top_h8akz_27",ko="_right_h8akz_30",fo="_bottom_h8akz_34",yo="_showTooltip_h8akz_1",tn={tooltip:lo,tooltiptext:uo,left:go,top:mo,right:ko,bottom:fo,showTooltip:yo},vo=H.bind(tn),an=({children:e,content:t,alignRight:n=!1,alignLeft:r=!1,alignTop:a=!1,alignBottom:i=!1})=>C.jsxs("div",{className:tn.tooltip,children:[C.jsx("span",{className:vo(tn.tooltiptext,{right:n||!r&&!a&&!i,left:r,top:a,bottom:i}),children:t}),e]}),po=U.forwardRef(({onClick:e=()=>{},onMouseDown:t,tabIndex:n=-1,className:r="",src:a,srcHover:i,alt:o,onKeyDown:s,tooltip:l,alignTooltipLeft:m=!1},u)=>{const[v,k]=R.useState(!1),h=R.useCallback(()=>{k(!0)},[]),q=R.useCallback(()=>{k(!1)},[]),g=R.useCallback(A=>{(A.key==="Enter"||A.key===" ")&&(s&&s(A),A.preventDefault())},[]),T=i&&v?i:a,c=C.jsx("img",{ref:u,className:r,src:T,alt:o,tabIndex:n,onMouseOver:h,onMouseOut:q,onFocus:h,onBlur:q,onKeyDown:g,onMouseDown:t,onClick:e});return l?C.jsx(an,{content:l,alignLeft:m,children:c}):c});po.displayName="Image";const ho="_flexColumnNew_1vdv1_1",co={flexColumnNew:ho};H.bind(co);const bo="_flexRow_1yf0y_1",To="_spaceBetween_1yf0y_9",jo="_alignItemsToBaseline_1yf0y_12",qo="_alignItemsToFlexEnd_1yf0y_15",wo="_justifyItemsToFlexEnd_1yf0y_18",Ao="_wrap_1yf0y_21",_o={flexRow:bo,spaceBetween:To,alignItemsToBaseline:jo,alignItemsToFlexEnd:qo,justifyItemsToFlexEnd:wo,wrap:Ao};H.bind(_o);const Eo="_flexContainer_1dk1o_1",Ro="_fluid_1dk1o_6",Bo="_fullHeight_1dk1o_9",So="_flexWrap_1dk1o_17",Po={flexContainer:Eo,fluid:Ro,fullHeight:Bo,flexWrap:So};H.bind(Po);ee(fe);const $o="_row_1lxv9_1",Io="_harHover_1lxv9_4",Fo="_rowHeader_1lxv9_7",Mo="_grayHeader_1lxv9_12",No="_rowContent_1lxv9_15",xo="_selected_1lxv9_18",Oo="_bold_1lxv9_22",Do="_dashedBottomBorder_1lxv9_25",Lo="_solidBottomBorder_1lxv9_28",Co="_apLeftBorder_1lxv9_31",Vo="_noBottomBorder_1lxv9_34",xr={row:$o,harHover:Io,rowHeader:Fo,grayHeader:Mo,rowContent:No,selected:xo,bold:Oo,dashedBottomBorder:Do,solidBottomBorder:Lo,apLeftBorder:Co,noBottomBorder:Vo},Ko=H.bind(xr),Ho=(e,t,n)=>r=>{e&&r.button===0&&e(r,t,n)},Or=e=>e.tagName==="TR"?e:Or(e.parentElement),Nn=(e,t)=>{const n=Or(e.target),r=(t?n.nextSibling:n.previousSibling)||n;r&&(r.focus(),e.preventDefault())},Go=(e,t,n,r)=>a=>{a.key==="ArrowDown"?Nn(a,!0):a.key==="ArrowUp"?Nn(a,!1):t&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(t(a,n,r),a.preventDefault()):e&&t&&a.target.tagName!=="TD"&&a.key==="Shift"&&(t(a),a.preventDefault())},Uo=e=>t=>{e&&t.target.tagName!=="TD"&&t.key==="Shift"&&(e(t),t.preventDefault())},Yo=({id:e,model:t,isHeader:n=!1,hasGrayHeader:r=!1,onMouseDown:a,onKeyDown:i,children:o,noHover:s=!1,isSelected:l=!1,isBold:m=!1,isDashedBottomBorder:u=!1,isSolidBottomBorder:v=!1,isApLeftBorder:k=!1,className:h,useMultiselect:q=!1,hasNoBottomBorder:g=!1})=>C.jsx("tr",{className:Ko(h,xr.row,{rowHeader:n,grayHeader:r,rowContent:!n&&!s,selected:l,harHover:!s,bold:m,dashedBottomBorder:u,solidBottomBorder:v,noBottomBorder:g,apLeftBorder:k}),onMouseDown:Ho(a,e,t),onKeyDown:Go(q,i,e,t),onKeyUp:q?Uo(i):void 0,tabIndex:0,children:o}),zo="_columnStyle_1f13u_1",Dr={columnStyle:zo},Wo=H.bind(Dr),We=({children:e="",className:t,hidden:n=!1,colspanAll:r=!1})=>n?null:C.jsx("td",{className:Wo(Dr.columnStyle,t),colSpan:r?100:void 0,children:e}),Zo="_table_2cnpl_1",Jo="_rowHover_2cnpl_25",Xo={table:Zo,rowHover:Jo},Qo=H.bind(Xo),el="EMPTY",nl=U.forwardRef(({headerTextCodes:e=[],headerColumnContent:t=[],classNameTable:n="",noHover:r=!1,hasGrayHeader:a=!1,children:i},o)=>C.jsxs("table",{ref:o,className:Qo("table",{[n]:n,rowHover:!r}),children:[C.jsx("thead",{children:C.jsxs(Yo,{isHeader:!0,noHover:r,hasGrayHeader:a,children:[e.map(s=>typeof s=="string"&&s.startsWith(el)?C.jsx(We,{children:" "},s):C.jsx(We,{children:C.jsx(Sr,{id:s})},s)),t.map(s=>C.jsx(We,{children:s},s.key))]})}),C.jsx("tbody",{children:Array.isArray(i)?U.Children.map(i,s=>U.cloneElement(s,{noHover:r})):U.cloneElement(i,{noHover:r})})]}));nl.displayName="Table";const rl="_hidden_1pb4f_1",tl="_active_1pb4f_8",al="_activeRow_1pb4f_15 _active_1pb4f_8",il="_toggleIcon_1pb4f_19",sl="_colTopPadding_1pb4f_22",ol={hidden:rl,active:tl,activeRow:al,toggleIcon:il,colTopPadding:sl};H.bind(ol);ee(fe);const ll="_fourPx_qda5k_1",ul="_eightPx_qda5k_4",dl="_sixteenPx_qda5k_7",gl="_twentyPx_qda5k_10",ml="_thirtyTwoPx_qda5k_13",kl="_fourtyPx_qda5k_16",fl={fourPx:ll,eightPx:ul,sixteenPx:dl,twentyPx:gl,thirtyTwoPx:ml,fourtyPx:kl};H.bind(fl);ee(fe);const yl="_divider_1t980_1",vl="_dividerParagraf_1t980_8",pl="_leftPanel_1t980_11",hl="_rightPanel_1t980_14",cl={divider:yl,dividerParagraf:vl,leftPanel:pl,rightPanel:hl};H.bind(cl);const bl="_editedIcon_ulrjl_1",Tl={editedIcon:bl};H.bind(Tl);const jl=(e,t)=>e===tt.FORELDREPENGER&&(t===100||t===80),Lr=({saksnummer:e,fagsakYtelseType:t,fagsakStatus:n,dekningsgrad:r,fagsakMarkeringTekster:a})=>{const i=De();return f.jsxs(sn,{gap:"4",children:[f.jsxs(Z,{gap:"4",children:[f.jsx(Kr,{size:"medium",children:t.navn}),jl(t.kode,r)&&f.jsx(an,{content:i.formatMessage({id:"FagsakProfile.Dekningsgrad"},{dekningsgrad:r}),alignBottom:!0,children:f.jsx(yn,{variant:"info",children:`${r}%`})})]}),f.jsx(V,{size:"small",children:`${e} - ${n.navn}`}),a&&a.length>0&&f.jsx(Z,{gap:"4",children:a.map(o=>f.jsx(an,{content:i.formatMessage({id:"FagsakProfile.FagsakMarkering"},{tekst:o}),alignBottom:!0,children:f.jsx(yn,{size:"small",variant:"alt1",children:o})},o))})]})};Lr.__docgenInfo={description:`FagsakProfile

Viser fagsakinformasjon og knapper for å endre status eller lukke sak.`,methods:[],displayName:"FagsakProfile",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},fagsakYtelseType:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`},description:""},fagsakStatus:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`},description:""},dekningsgrad:{required:!1,tsType:{name:"number"},description:""},fagsakMarkeringTekster:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const ql={"FagsakProfile.Dekningsgrad":"Dekningsgraden er {dekningsgrad}%","FagsakProfile.FagsakMarkering":"Saken er markert med {tekst}"},wl=ee(ql),Cr=e=>f.jsx(Ds,{value:wl,children:f.jsx(Lr,{...e})});Cr.__docgenInfo={description:"",methods:[],displayName:"FagsakProfilSakIndex",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},fagsakYtelseType:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`},description:""},fagsakStatus:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`},description:""},dekningsgrad:{required:!1,tsType:{name:"number"},description:""},fagsakMarkeringTekster:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const Vr=({fagsak:e,arbeidstakerHref:t,ainntektHref:n})=>f.jsx(on,{paddingInline:"4",paddingBlock:"2",background:"bg-subtle",borderRadius:"large",children:f.jsxs(Z,{justify:"space-between",align:"center",wrap:!1,children:[f.jsx(Hr,{weight:"semibold",children:f.jsx(ve,{id:"EksterneRessurser.Lenke"})}),f.jsxs(Z,{gap:"4",children:[f.jsx("a",{href:dt(e.bruker.fødselsnummer),target:"_blank",rel:"noreferrer",children:f.jsx(we,{as:"span",size:"xsmall",variant:"primary-neutral",children:f.jsx(ve,{id:"EksterneRessurser.Modia"})})}),f.jsx("a",{href:gt(e.bruker.fødselsnummer),target:"_blank",rel:"noreferrer",children:f.jsx(we,{as:"span",size:"xsmall",variant:"primary-neutral",children:f.jsx(ve,{id:"EksterneRessurser.Gosys"})})}),f.jsx("a",{href:n?`${n}?saksnummer=${e.saksnummer}`:mt,target:"_blank",rel:"noreferrer",children:f.jsx(we,{as:"span",size:"xsmall",variant:"primary-neutral",children:f.jsx(ve,{id:"EksterneRessurser.AInntekt"})})}),f.jsx("a",{href:t?`${t}?saksnummer=${e.saksnummer}`:kt,target:"_blank",rel:"noreferrer",children:f.jsx(we,{as:"span",size:"xsmall",variant:"primary-neutral",children:f.jsx(ve,{id:"EksterneRessurser.AAreg"})})})]})]})});Vr.__docgenInfo={description:"",methods:[],displayName:"EksterneRessurser",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harIkkeRegistrertAdresse",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"annenpartBehandling",value:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}}]},required:!0}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
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
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
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
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  vurderPaNyttArsaker?: string[];
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
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: string | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string | null;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"skjermlenke",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dokumenter",value:{name:"union",raw:"HistorikkInnslagDokumentLink[] | null",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!1}},{key:"tag",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
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
  skjermlenke: string | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},ainntektHref:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},arbeidstakerHref:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""}}};const Al="_panelPadding_1aa5c_1",_l={panelPadding:Al},El=(e,t,n)=>n.length===1?Wn({...t,pathname:Zn(e,n[0].uuid)}):ot(e),Rl=e=>e.fagsakMarkeringer?e.fagsakMarkeringer.map(t=>t.kortNavn).filter(t=>!!t):[],Bl=({fagsakData:e,behandlingUuid:t,behandlingVersjon:n,setBehandling:r,hentOgSettBehandling:a})=>{var w,y;const i=Gr(),[o,s]=R.useState(!t),l=()=>s(!o),m=ut(),u=e.getFagsak(),v=vn(u.status,ye.FAGSAK_STATUS),k=vn(u.fagsakYtelseType,ye.FAGSAK_YTELSE),h=Qr(nt()),q=Ur(),g=et(h.data).sakLinks,T=(w=g.find(d=>d.rel==="arbeidstaker-redirect"))==null?void 0:w.href,c=(y=g.find(d=>d.rel==="ainntekt-redirect"))==null?void 0:y.href,{addErrorMessage:A}=rt();R.useEffect(()=>{s(!t)},[t]);const O=!!Yr("/fagsak/:saksnummer/"),P=d=>Wn({...q,pathname:Zn(u.saksnummer,d)});return f.jsxs("div",{className:_l.panelPadding,children:[u.brukerManglerAdresse&&f.jsx(st,{}),O&&f.jsx(zr,{to:El(u.saksnummer,q,e.getAlleBehandlinger())}),f.jsxs(sn,{gap:"5",children:[!O&&f.jsxs(f.Fragment,{children:[f.jsxs(Z,{justify:"space-between",align:"start",children:[f.jsx("div",{children:f.jsx(Cr,{saksnummer:u.saksnummer,fagsakYtelseType:k,fagsakStatus:v,dekningsgrad:u.dekningsgrad,fagsakMarkeringTekster:Rl(u)})}),f.jsx(Ke,{errorMessageCallback:A,errorMessage:i.formatMessage({id:"ErrorBoundary.Error"},{name:"Meny"}),children:f.jsx(lt,{fagsakData:e,behandlingUuid:t,setBehandling:r,hentOgSettBehandling:a})})]}),f.jsx(Ke,{errorMessageCallback:A,errorMessage:i.formatMessage({id:"ErrorBoundary.Error"},{name:"Behandlingsvelger"}),children:f.jsx(cr,{behandlinger:e.getAlleBehandlinger(),behandlingUuid:t,skalViseAlleBehandlinger:o,toggleVisAlleBehandlinger:l,renderRadSomLenke:(d,j,_)=>f.jsx(Wr,{className:d,to:P(_),onClick:l,children:j}),getKodeverkMedNavn:m})})]}),f.jsx(Ke,{errorMessageCallback:A,errorMessage:i.formatMessage({id:"ErrorBoundary.Error"},{name:"Risikoklassifisering"}),children:f.jsx(ft,{fagsakData:e,behandlingUuid:t,behandlingVersjon:n,setBehandling:r})}),f.jsx(Vr,{fagsak:u,ainntektHref:c,arbeidstakerHref:T})]}),f.jsx(Xr,{sixteenPx:!0})]})};Bl.__docgenInfo={description:"",methods:[],displayName:"FagsakProfileIndex",props:{fagsakData:{required:!0,tsType:{name:"FagsakData"},description:""},behandlingUuid:{required:!1,tsType:{name:"string"},description:""},behandlingVersjon:{required:!1,tsType:{name:"number"},description:""},setBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(behandling: Behandling | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"Behandling | undefined",elements:[{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]},{name:"undefined"}]},name:"behandling"}],return:{name:"void"}}},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{Bl as F};
