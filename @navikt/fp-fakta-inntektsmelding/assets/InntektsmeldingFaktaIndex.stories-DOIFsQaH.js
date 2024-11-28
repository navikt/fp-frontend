import{j as M}from"./jsx-runtime-CkxqCPlQ.js";import{r as P,R as Y,c as Ut,g as yk}from"./index-DJO9vBfz.js";import{a as Kr}from"./dayjs.min-Bhlr18jM.js";var ao=function(e,i){return ao=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])},ao(e,i)};function Qn(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");ao(e,i);function t(){this.constructor=e}e.prototype=i===null?Object.create(i):(t.prototype=i.prototype,new t)}var ee=function(){return ee=Object.assign||function(i){for(var t,a=1,s=arguments.length;a<s;a++){t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(i[l]=t[l])}return i},ee.apply(this,arguments)};function ft(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t}function lr(e,i,t){if(t||arguments.length===2)for(var a=0,s=i.length,l;a<s;a++)(l||!(a in i))&&(l||(l=Array.prototype.slice.call(i,0,a)),l[a]=i[a]);return e.concat(l||Array.prototype.slice.call(i))}var Rk={exports:{}},Ke={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nn=typeof Symbol=="function"&&Symbol.for,Ko=nn?Symbol.for("react.element"):60103,Do=nn?Symbol.for("react.portal"):60106,ai=nn?Symbol.for("react.fragment"):60107,ii=nn?Symbol.for("react.strict_mode"):60108,si=nn?Symbol.for("react.profiler"):60114,oi=nn?Symbol.for("react.provider"):60109,li=nn?Symbol.for("react.context"):60110,Po=nn?Symbol.for("react.async_mode"):60111,di=nn?Symbol.for("react.concurrent_mode"):60111,ui=nn?Symbol.for("react.forward_ref"):60112,ki=nn?Symbol.for("react.suspense"):60113,Ec=nn?Symbol.for("react.suspense_list"):60120,gi=nn?Symbol.for("react.memo"):60115,vi=nn?Symbol.for("react.lazy"):60116,fc=nn?Symbol.for("react.block"):60121,mc=nn?Symbol.for("react.fundamental"):60117,Tc=nn?Symbol.for("react.responder"):60118,pc=nn?Symbol.for("react.scope"):60119;function Fn(e){if(typeof e=="object"&&e!==null){var i=e.$$typeof;switch(i){case Ko:switch(e=e.type,e){case Po:case di:case ai:case si:case ii:case ki:return e;default:switch(e=e&&e.$$typeof,e){case li:case ui:case vi:case gi:case oi:return e;default:return i}}case Do:return i}}}function _k(e){return Fn(e)===di}Ke.AsyncMode=Po;Ke.ConcurrentMode=di;Ke.ContextConsumer=li;Ke.ContextProvider=oi;Ke.Element=Ko;Ke.ForwardRef=ui;Ke.Fragment=ai;Ke.Lazy=vi;Ke.Memo=gi;Ke.Portal=Do;Ke.Profiler=si;Ke.StrictMode=ii;Ke.Suspense=ki;Ke.isAsyncMode=function(e){return _k(e)||Fn(e)===Po};Ke.isConcurrentMode=_k;Ke.isContextConsumer=function(e){return Fn(e)===li};Ke.isContextProvider=function(e){return Fn(e)===oi};Ke.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ko};Ke.isForwardRef=function(e){return Fn(e)===ui};Ke.isFragment=function(e){return Fn(e)===ai};Ke.isLazy=function(e){return Fn(e)===vi};Ke.isMemo=function(e){return Fn(e)===gi};Ke.isPortal=function(e){return Fn(e)===Do};Ke.isProfiler=function(e){return Fn(e)===si};Ke.isStrictMode=function(e){return Fn(e)===ii};Ke.isSuspense=function(e){return Fn(e)===ki};Ke.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ai||e===di||e===si||e===ii||e===ki||e===Ec||typeof e=="object"&&e!==null&&(e.$$typeof===vi||e.$$typeof===gi||e.$$typeof===oi||e.$$typeof===li||e.$$typeof===ui||e.$$typeof===mc||e.$$typeof===Tc||e.$$typeof===pc||e.$$typeof===fc)};Ke.typeOf=Fn;Rk.exports=Ke;var hc=Rk.exports,bk=hc,Ac={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cc={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Nk={};Nk[bk.ForwardRef]=Ac;Nk[bk.Memo]=cc;function Sk(e,i,t){if(t===void 0&&(t=Error),!e)throw new t(i)}var ce;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(ce||(ce={}));var je;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(je||(je={}));var mt;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(mt||(mt={}));function _u(e){return e.type===je.literal}function yc(e){return e.type===je.argument}function Ik(e){return e.type===je.number}function Ok(e){return e.type===je.date}function Lk(e){return e.type===je.time}function Kk(e){return e.type===je.select}function Dk(e){return e.type===je.plural}function Rc(e){return e.type===je.pound}function Pk(e){return e.type===je.tag}function Fk(e){return!!(e&&typeof e=="object"&&e.type===mt.number)}function io(e){return!!(e&&typeof e=="object"&&e.type===mt.dateTime)}var Mk=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,_c=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function bc(e){var i={};return e.replace(_c,function(t){var a=t.length;switch(t[0]){case"G":i.era=a===4?"long":a===5?"narrow":"short";break;case"y":i.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=a===4?"long":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][a-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][a-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][a-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][a-1];break;case"s":i.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var Nc=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function Sc(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(Nc).filter(function(c){return c.length>0}),t=[],a=0,s=i;a<s.length;a++){var l=s[a],u=l.split("/");if(u.length===0)throw new Error("Invalid number skeleton");for(var k=u[0],v=u.slice(1),m=0,f=v;m<f.length;m++){var p=f[m];if(p.length===0)throw new Error("Invalid number skeleton")}t.push({stem:k,options:v})}return t}function Ic(e){return e.replace(/^(.*?)-/,"")}var bu=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Gk=/^(@+)?(\+|#+)?[rs]?$/g,Oc=/(\*)(0+)|(#+)(0+)|(0+)/g,Bk=/^(0+)$/;function Nu(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(Gk,function(t,a,s){return typeof s!="string"?(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length):s==="+"?i.minimumSignificantDigits=a.length:a[0]==="#"?i.maximumSignificantDigits=a.length:(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length+(typeof s=="string"?s.length:0)),""}),i}function jk(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Lc(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var t=e.slice(0,2);if(t==="+!"?(i.signDisplay="always",e=e.slice(2)):t==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!Bk.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function Su(e){var i={},t=jk(e);return t||i}function Kc(e){for(var i={},t=0,a=e;t<a.length;t++){var s=a[t];switch(s.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=s.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=Ic(s.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=ee(ee(ee({},i),{notation:"scientific"}),s.options.reduce(function(v,m){return ee(ee({},v),Su(m))},{}));continue;case"engineering":i=ee(ee(ee({},i),{notation:"engineering"}),s.options.reduce(function(v,m){return ee(ee({},v),Su(m))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(Oc,function(v,m,f,p,c,K){if(m)i.minimumIntegerDigits=f.length;else{if(p&&c)throw new Error("We currently do not support maximum integer digits");if(K)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Bk.test(s.stem)){i.minimumIntegerDigits=s.stem.length;continue}if(bu.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(bu,function(v,m,f,p,c,K){return f==="*"?i.minimumFractionDigits=m.length:p&&p[0]==="#"?i.maximumFractionDigits=p.length:c&&K?(i.minimumFractionDigits=c.length,i.maximumFractionDigits=c.length+K.length):(i.minimumFractionDigits=m.length,i.maximumFractionDigits=m.length),""});var l=s.options[0];l==="w"?i=ee(ee({},i),{trailingZeroDisplay:"stripIfInteger"}):l&&(i=ee(ee({},i),Nu(l)));continue}if(Gk.test(s.stem)){i=ee(ee({},i),Nu(s.stem));continue}var u=jk(s.stem);u&&(i=ee(ee({},i),u));var k=Lc(s.stem);k&&(i=ee(ee({},i),k))}return i}var Wa={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Dc(e,i){for(var t="",a=0;a<e.length;a++){var s=e.charAt(a);if(s==="j"){for(var l=0;a+1<e.length&&e.charAt(a+1)===s;)l++,a++;var u=1+(l&1),k=l<2?1:3+(l>>1),v="a",m=Pc(i);for((m=="H"||m=="k")&&(k=0);k-- >0;)t+=v;for(;u-- >0;)t=m+t}else s==="J"?t+="H":t+=s}return t}function Pc(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=e.language,a;t!=="root"&&(a=e.maximize().region);var s=Wa[a||""]||Wa[t||""]||Wa["".concat(t,"-001")]||Wa["001"];return s[0]}var Ys,Fc=new RegExp("^".concat(Mk.source,"*")),Mc=new RegExp("".concat(Mk.source,"*$"));function Re(e,i){return{start:e,end:i}}var Gc=!!String.prototype.startsWith&&"_a".startsWith("a",1),Bc=!!String.fromCodePoint,jc=!!Object.fromEntries,wc=!!String.prototype.codePointAt,Hc=!!String.prototype.trimStart,Vc=!!String.prototype.trimEnd,Uc=!!Number.isSafeInteger,qc=Uc?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},so=!0;try{var xc=Hk("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");so=((Ys=xc.exec("a"))===null||Ys===void 0?void 0:Ys[0])==="a"}catch{so=!1}var Iu=Gc?function(i,t,a){return i.startsWith(t,a)}:function(i,t,a){return i.slice(a,a+t.length)===t},oo=Bc?String.fromCodePoint:function(){for(var i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];for(var a="",s=i.length,l=0,u;s>l;){if(u=i[l++],u>1114111)throw RangeError(u+" is not a valid code point");a+=u<65536?String.fromCharCode(u):String.fromCharCode(((u-=65536)>>10)+55296,u%1024+56320)}return a},Ou=jc?Object.fromEntries:function(i){for(var t={},a=0,s=i;a<s.length;a++){var l=s[a],u=l[0],k=l[1];t[u]=k}return t},wk=wc?function(i,t){return i.codePointAt(t)}:function(i,t){var a=i.length;if(!(t<0||t>=a)){var s=i.charCodeAt(t),l;return s<55296||s>56319||t+1===a||(l=i.charCodeAt(t+1))<56320||l>57343?s:(s-55296<<10)+(l-56320)+65536}},Yc=Hc?function(i){return i.trimStart()}:function(i){return i.replace(Fc,"")},Cc=Vc?function(i){return i.trimEnd()}:function(i){return i.replace(Mc,"")};function Hk(e,i){return new RegExp(e,i)}var lo;if(so){var Lu=Hk("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");lo=function(i,t){var a;Lu.lastIndex=t;var s=Lu.exec(i);return(a=s[1])!==null&&a!==void 0?a:""}}else lo=function(i,t){for(var a=[];;){var s=wk(i,t);if(s===void 0||Vk(s)||zc(s))break;a.push(s),t+=s>=65536?2:1}return oo.apply(void 0,a)};var $c=function(){function e(i,t){t===void 0&&(t={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,t,a){for(var s=[];!this.isEOF();){var l=this.char();if(l===123){var u=this.parseArgument(i,a);if(u.err)return u;s.push(u.val)}else{if(l===125&&i>0)break;if(l===35&&(t==="plural"||t==="selectordinal")){var k=this.clonePosition();this.bump(),s.push({type:je.pound,location:Re(k,this.clonePosition())})}else if(l===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(ce.UNMATCHED_CLOSING_TAG,Re(this.clonePosition(),this.clonePosition()))}else if(l===60&&!this.ignoreTag&&uo(this.peek()||0)){var u=this.parseTag(i,t);if(u.err)return u;s.push(u.val)}else{var u=this.parseLiteral(i,t);if(u.err)return u;s.push(u.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(i,t){var a=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:je.literal,value:"<".concat(s,"/>"),location:Re(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var l=this.parseMessage(i+1,t,!0);if(l.err)return l;var u=l.val,k=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!uo(this.char()))return this.error(ce.INVALID_TAG,Re(k,this.clonePosition()));var v=this.clonePosition(),m=this.parseTagName();return s!==m?this.error(ce.UNMATCHED_CLOSING_TAG,Re(v,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:je.tag,value:s,children:u,location:Re(a,this.clonePosition())},err:null}:this.error(ce.INVALID_TAG,Re(k,this.clonePosition())))}else return this.error(ce.UNCLOSED_TAG,Re(a,this.clonePosition()))}else return this.error(ce.INVALID_TAG,Re(a,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&Wc(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,t){for(var a=this.clonePosition(),s="";;){var l=this.tryParseQuote(t);if(l){s+=l;continue}var u=this.tryParseUnquoted(i,t);if(u){s+=u;continue}var k=this.tryParseLeftAngleBracket();if(k){s+=k;continue}break}var v=Re(a,this.clonePosition());return{val:{type:je.literal,value:s,location:v},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Jc(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(a);this.bump()}return oo.apply(void 0,t)},e.prototype.tryParseUnquoted=function(i,t){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(t==="plural"||t==="selectordinal")||a===125&&i>0?null:(this.bump(),oo(a))},e.prototype.parseArgument=function(i,t){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,Re(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(ce.EMPTY_ARGUMENT,Re(a,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(ce.MALFORMED_ARGUMENT,Re(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,Re(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:je.argument,value:s,location:Re(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,Re(a,this.clonePosition())):this.parseArgumentOptions(i,t,s,a);default:return this.error(ce.MALFORMED_ARGUMENT,Re(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),t=this.offset(),a=lo(this.message,t),s=t+a.length;this.bumpTo(s);var l=this.clonePosition(),u=Re(i,l);return{value:a,location:u}},e.prototype.parseArgumentOptions=function(i,t,a,s){var l,u=this.clonePosition(),k=this.parseIdentifierIfPossible().value,v=this.clonePosition();switch(k){case"":return this.error(ce.EXPECT_ARGUMENT_TYPE,Re(u,v));case"number":case"date":case"time":{this.bumpSpace();var m=null;if(this.bumpIf(",")){this.bumpSpace();var f=this.clonePosition(),p=this.parseSimpleArgStyleIfPossible();if(p.err)return p;var c=Cc(p.val);if(c.length===0)return this.error(ce.EXPECT_ARGUMENT_STYLE,Re(this.clonePosition(),this.clonePosition()));var K=Re(f,this.clonePosition());m={style:c,styleLocation:K}}var G=this.tryParseArgumentClose(s);if(G.err)return G;var R=Re(s,this.clonePosition());if(m&&Iu(m==null?void 0:m.style,"::",0)){var N=Yc(m.style.slice(2));if(k==="number"){var p=this.parseNumberSkeletonFromString(N,m.styleLocation);return p.err?p:{val:{type:je.number,value:a,location:R,style:p.val},err:null}}else{if(N.length===0)return this.error(ce.EXPECT_DATE_TIME_SKELETON,R);var D=N;this.locale&&(D=Dc(N,this.locale));var c={type:mt.dateTime,pattern:D,location:m.styleLocation,parsedOptions:this.shouldParseSkeletons?bc(D):{}},q=k==="date"?je.date:je.time;return{val:{type:q,value:a,location:R,style:c},err:null}}}return{val:{type:k==="number"?je.number:k==="date"?je.date:je.time,value:a,location:R,style:(l=m==null?void 0:m.style)!==null&&l!==void 0?l:null},err:null}}case"plural":case"selectordinal":case"select":{var L=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(ce.EXPECT_SELECT_ARGUMENT_OPTIONS,Re(L,ee({},L)));this.bumpSpace();var Q=this.parseIdentifierIfPossible(),O=0;if(k!=="select"&&Q.value==="offset"){if(!this.bumpIf(":"))return this.error(ce.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Re(this.clonePosition(),this.clonePosition()));this.bumpSpace();var p=this.tryParseDecimalInteger(ce.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ce.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(p.err)return p;this.bumpSpace(),Q=this.parseIdentifierIfPossible(),O=p.val}var H=this.tryParsePluralOrSelectOptions(i,k,t,Q);if(H.err)return H;var G=this.tryParseArgumentClose(s);if(G.err)return G;var I=Re(s,this.clonePosition());return k==="select"?{val:{type:je.select,value:a,options:Ou(H.val),location:I},err:null}:{val:{type:je.plural,value:a,options:Ou(H.val),offset:O,pluralType:k==="plural"?"cardinal":"ordinal",location:I},err:null}}default:return this.error(ce.INVALID_ARGUMENT_TYPE,Re(u,v))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,Re(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,t=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(ce.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Re(s,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,t){var a=[];try{a=Sc(i)}catch{return this.error(ce.INVALID_NUMBER_SKELETON,t)}return{val:{type:mt.number,tokens:a,location:t,parsedOptions:this.shouldParseSkeletons?Kc(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,t,a,s){for(var l,u=!1,k=[],v=new Set,m=s.value,f=s.location;;){if(m.length===0){var p=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var c=this.tryParseDecimalInteger(ce.EXPECT_PLURAL_ARGUMENT_SELECTOR,ce.INVALID_PLURAL_ARGUMENT_SELECTOR);if(c.err)return c;f=Re(p,this.clonePosition()),m=this.message.slice(p.offset,this.offset())}else break}if(v.has(m))return this.error(t==="select"?ce.DUPLICATE_SELECT_ARGUMENT_SELECTOR:ce.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,f);m==="other"&&(u=!0),this.bumpSpace();var K=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?ce.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:ce.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Re(this.clonePosition(),this.clonePosition()));var G=this.parseMessage(i+1,t,a);if(G.err)return G;var R=this.tryParseArgumentClose(K);if(R.err)return R;k.push([m,{value:G.val,location:Re(K,this.clonePosition())}]),v.add(m),this.bumpSpace(),l=this.parseIdentifierIfPossible(),m=l.value,f=l.location}return k.length===0?this.error(t==="select"?ce.EXPECT_SELECT_ARGUMENT_SELECTOR:ce.EXPECT_PLURAL_ARGUMENT_SELECTOR,Re(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!u?this.error(ce.MISSING_OTHER_CLAUSE,Re(this.clonePosition(),this.clonePosition())):{val:k,err:null}},e.prototype.tryParseDecimalInteger=function(i,t){var a=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var l=!1,u=0;!this.isEOF();){var k=this.char();if(k>=48&&k<=57)l=!0,u=u*10+(k-48),this.bump();else break}var v=Re(s,this.clonePosition());return l?(u*=a,qc(u)?{val:u,err:null}:this.error(t,v)):this.error(i,v)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var t=wk(this.message,i);if(t===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(i,t){return{val:null,err:{kind:i,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Iu(this.message,i,this.offset())){for(var t=0;t<i.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var t=this.offset(),a=this.message.indexOf(i,t);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var t=this.offset();if(t===i)break;if(t>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Vk(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),t=this.offset(),a=this.message.charCodeAt(t+(i>=65536?2:1));return a??null},e}();function uo(e){return e>=97&&e<=122||e>=65&&e<=90}function Jc(e){return uo(e)||e===47}function Wc(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Vk(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function zc(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function ko(e){e.forEach(function(i){if(delete i.location,Kk(i)||Dk(i))for(var t in i.options)delete i.options[t].location,ko(i.options[t].value);else Ik(i)&&Fk(i.style)||(Ok(i)||Lk(i))&&io(i.style)?delete i.style.location:Pk(i)&&ko(i.children)})}function Zc(e,i){i===void 0&&(i={}),i=ee({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var t=new $c(e,i).parse();if(t.err){var a=SyntaxError(ce[t.err.kind]);throw a.location=t.err.location,a.originalMessage=t.err.message,a}return i!=null&&i.captureLocation||ko(t.val),t.val}function sr(e,i){var t=i&&i.cache?i.cache:ty,a=i&&i.serializer?i.serializer:ry,s=i&&i.strategy?i.strategy:Qc;return s(e,{cache:t,serializer:a})}function Xc(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Uk(e,i,t,a){var s=Xc(a)?a:t(a),l=i.get(s);return typeof l>"u"&&(l=e.call(this,a),i.set(s,l)),l}function qk(e,i,t){var a=Array.prototype.slice.call(arguments,3),s=t(a),l=i.get(s);return typeof l>"u"&&(l=e.apply(this,a),i.set(s,l)),l}function Fo(e,i,t,a,s){return t.bind(i,e,a,s)}function Qc(e,i){var t=e.length===1?Uk:qk;return Fo(e,this,t,i.cache.create(),i.serializer)}function ey(e,i){return Fo(e,this,qk,i.cache.create(),i.serializer)}function ny(e,i){return Fo(e,this,Uk,i.cache.create(),i.serializer)}var ry=function(){return JSON.stringify(arguments)};function Mo(){this.cache=Object.create(null)}Mo.prototype.get=function(e){return this.cache[e]};Mo.prototype.set=function(e,i){this.cache[e]=i};var ty={create:function(){return new Mo}},or={variadic:ey,monadic:ny},dr;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(dr||(dr={}));var Dr=function(e){Qn(i,e);function i(t,a,s){var l=e.call(this,t)||this;return l.code=a,l.originalMessage=s,l}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),Ku=function(e){Qn(i,e);function i(t,a,s,l){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(a,'". Options are "').concat(Object.keys(s).join('", "'),'"'),dr.INVALID_VALUE,l)||this}return i}(Dr),ay=function(e){Qn(i,e);function i(t,a,s){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(a),dr.INVALID_VALUE,s)||this}return i}(Dr),iy=function(e){Qn(i,e);function i(t,a){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(a,'"'),dr.MISSING_VALUE,a)||this}return i}(Dr),vn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(vn||(vn={}));function sy(e){return e.length<2?e:e.reduce(function(i,t){var a=i[i.length-1];return!a||a.type!==vn.literal||t.type!==vn.literal?i.push(t):a.value+=t.value,i},[])}function xk(e){return typeof e=="function"}function Qa(e,i,t,a,s,l,u){if(e.length===1&&_u(e[0]))return[{type:vn.literal,value:e[0].value}];for(var k=[],v=0,m=e;v<m.length;v++){var f=m[v];if(_u(f)){k.push({type:vn.literal,value:f.value});continue}if(Rc(f)){typeof l=="number"&&k.push({type:vn.literal,value:t.getNumberFormat(i).format(l)});continue}var p=f.value;if(!(s&&p in s))throw new iy(p,u);var c=s[p];if(yc(f)){(!c||typeof c=="string"||typeof c=="number")&&(c=typeof c=="string"||typeof c=="number"?String(c):""),k.push({type:typeof c=="string"?vn.literal:vn.object,value:c});continue}if(Ok(f)){var K=typeof f.style=="string"?a.date[f.style]:io(f.style)?f.style.parsedOptions:void 0;k.push({type:vn.literal,value:t.getDateTimeFormat(i,K).format(c)});continue}if(Lk(f)){var K=typeof f.style=="string"?a.time[f.style]:io(f.style)?f.style.parsedOptions:a.time.medium;k.push({type:vn.literal,value:t.getDateTimeFormat(i,K).format(c)});continue}if(Ik(f)){var K=typeof f.style=="string"?a.number[f.style]:Fk(f.style)?f.style.parsedOptions:void 0;K&&K.scale&&(c=c*(K.scale||1)),k.push({type:vn.literal,value:t.getNumberFormat(i,K).format(c)});continue}if(Pk(f)){var G=f.children,R=f.value,N=s[R];if(!xk(N))throw new ay(R,"function",u);var D=Qa(G,i,t,a,s,l),q=N(D.map(function(O){return O.value}));Array.isArray(q)||(q=[q]),k.push.apply(k,q.map(function(O){return{type:typeof O=="string"?vn.literal:vn.object,value:O}}))}if(Kk(f)){var L=f.options[c]||f.options.other;if(!L)throw new Ku(f.value,c,Object.keys(f.options),u);k.push.apply(k,Qa(L.value,i,t,a,s));continue}if(Dk(f)){var L=f.options["=".concat(c)];if(!L){if(!Intl.PluralRules)throw new Dr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,dr.MISSING_INTL_API,u);var Q=t.getPluralRules(i,{type:f.pluralType}).select(c-(f.offset||0));L=f.options[Q]||f.options.other}if(!L)throw new Ku(f.value,c,Object.keys(f.options),u);k.push.apply(k,Qa(L.value,i,t,a,s,c-(f.offset||0)));continue}}return sy(k)}function oy(e,i){return i?ee(ee(ee({},e||{}),i||{}),Object.keys(e).reduce(function(t,a){return t[a]=ee(ee({},e[a]),i[a]||{}),t},{})):e}function ly(e,i){return i?Object.keys(e).reduce(function(t,a){return t[a]=oy(e[a],i[a]),t},ee({},e)):e}function Cs(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function dy(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:sr(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.NumberFormat).bind.apply(i,lr([void 0],t,!1)))},{cache:Cs(e.number),strategy:or.variadic}),getDateTimeFormat:sr(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.DateTimeFormat).bind.apply(i,lr([void 0],t,!1)))},{cache:Cs(e.dateTime),strategy:or.variadic}),getPluralRules:sr(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.PluralRules).bind.apply(i,lr([void 0],t,!1)))},{cache:Cs(e.pluralRules),strategy:or.variadic})}}var Yk=function(){function e(i,t,a,s){var l=this;if(t===void 0&&(t=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(v){var m=l.formatToParts(v);if(m.length===1)return m[0].value;var f=m.reduce(function(p,c){return!p.length||c.type!==vn.literal||typeof p[p.length-1]!="string"?p.push(c.value):p[p.length-1]+=c.value,p},[]);return f.length<=1?f[0]||"":f},this.formatToParts=function(v){return Qa(l.ast,l.locales,l.formatters,l.formats,v,void 0,l.message)},this.resolvedOptions=function(){var v;return{locale:((v=l.resolvedLocale)===null||v===void 0?void 0:v.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=t,this.resolvedLocale=e.resolveLocale(t),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var u=s||{};u.formatters;var k=ft(u,["formatters"]);this.ast=e.__parse(i,ee(ee({},k),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=ly(e.formats,a),this.formatters=s&&s.formatters||dy(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(i);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=Zc,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Yr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Yr||(Yr={}));var ea=function(e){Qn(i,e);function i(t,a,s){var l=this,u=s?s instanceof Error?s:new Error(String(s)):void 0;return l=e.call(this,"[@formatjs/intl Error ".concat(t,"] ").concat(a,`
`).concat(u?`
`.concat(u.message,`
`).concat(u.stack):""))||this,l.code=t,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(l,i),l}return i}(Error),uy=function(e){Qn(i,e);function i(t,a){return e.call(this,Yr.UNSUPPORTED_FORMATTER,t,a)||this}return i}(ea),ky=function(e){Qn(i,e);function i(t,a){return e.call(this,Yr.INVALID_CONFIG,t,a)||this}return i}(ea),Du=function(e){Qn(i,e);function i(t,a){return e.call(this,Yr.MISSING_DATA,t,a)||this}return i}(ea),xn=function(e){Qn(i,e);function i(t,a,s){var l=e.call(this,Yr.FORMAT_ERROR,"".concat(t,`
Locale: `).concat(a,`
`),s)||this;return l.locale=a,l}return i}(ea),$s=function(e){Qn(i,e);function i(t,a,s,l){var u=e.call(this,"".concat(t,`
MessageID: `).concat(s==null?void 0:s.id,`
Default Message: `).concat(s==null?void 0:s.defaultMessage,`
Description: `).concat(s==null?void 0:s.description,`
`),a,l)||this;return u.descriptor=s,u.locale=a,u}return i}(xn),gy=function(e){Qn(i,e);function i(t,a){var s=e.call(this,Yr.MISSING_TRANSLATION,'Missing message: "'.concat(t.id,'" for locale "').concat(a,'", using ').concat(t.defaultMessage?"default message (".concat(typeof t.defaultMessage=="string"?t.defaultMessage:t.defaultMessage.map(function(l){var u;return(u=l.value)!==null&&u!==void 0?u:JSON.stringify(l)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=t,s}return i}(ea);function $r(e,i,t){return t===void 0&&(t={}),i.reduce(function(a,s){return s in e?a[s]=e[s]:s in t&&(a[s]=t[s]),a},{})}var vy=function(e){},Ey=function(e){},Ck={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:vy,onWarn:Ey};function $k(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function qr(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function fy(e){e===void 0&&(e=$k());var i=Intl.RelativeTimeFormat,t=Intl.ListFormat,a=Intl.DisplayNames,s=sr(function(){for(var k,v=[],m=0;m<arguments.length;m++)v[m]=arguments[m];return new((k=Intl.DateTimeFormat).bind.apply(k,lr([void 0],v,!1)))},{cache:qr(e.dateTime),strategy:or.variadic}),l=sr(function(){for(var k,v=[],m=0;m<arguments.length;m++)v[m]=arguments[m];return new((k=Intl.NumberFormat).bind.apply(k,lr([void 0],v,!1)))},{cache:qr(e.number),strategy:or.variadic}),u=sr(function(){for(var k,v=[],m=0;m<arguments.length;m++)v[m]=arguments[m];return new((k=Intl.PluralRules).bind.apply(k,lr([void 0],v,!1)))},{cache:qr(e.pluralRules),strategy:or.variadic});return{getDateTimeFormat:s,getNumberFormat:l,getMessageFormat:sr(function(k,v,m,f){return new Yk(k,v,m,ee({formatters:{getNumberFormat:l,getDateTimeFormat:s,getPluralRules:u}},f||{}))},{cache:qr(e.message),strategy:or.variadic}),getRelativeTimeFormat:sr(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(i.bind.apply(i,lr([void 0],k,!1)))},{cache:qr(e.relativeTime),strategy:or.variadic}),getPluralRules:u,getListFormat:sr(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(t.bind.apply(t,lr([void 0],k,!1)))},{cache:qr(e.list),strategy:or.variadic}),getDisplayNames:sr(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(a.bind.apply(a,lr([void 0],k,!1)))},{cache:qr(e.displayNames),strategy:or.variadic})}}function Go(e,i,t,a){var s=e&&e[i],l;if(s&&(l=s[t]),l)return l;a(new uy("No ".concat(i," format named: ").concat(t)))}function za(e,i){return Object.keys(e).reduce(function(t,a){return t[a]=ee({timeZone:i},e[a]),t},{})}function Pu(e,i){var t=Object.keys(ee(ee({},e),i));return t.reduce(function(a,s){return a[s]=ee(ee({},e[s]||{}),i[s]||{}),a},{})}function Fu(e,i){if(!i)return e;var t=Yk.formats;return ee(ee(ee({},t),e),{date:Pu(za(t.date,i),za(e.date||{},i)),time:Pu(za(t.time,i),za(e.time||{},i))})}var go=function(e,i,t,a,s){var l=e.locale,u=e.formats,k=e.messages,v=e.defaultLocale,m=e.defaultFormats,f=e.fallbackOnEmptyString,p=e.onError,c=e.timeZone,K=e.defaultRichTextElements;t===void 0&&(t={id:""});var G=t.id,R=t.defaultMessage;Sk(!!G,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var N=String(G),D=k&&Object.prototype.hasOwnProperty.call(k,N)&&k[N];if(Array.isArray(D)&&D.length===1&&D[0].type===je.literal)return D[0].value;if(!a&&D&&typeof D=="string"&&!K)return D.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=ee(ee({},K),a||{}),u=Fu(u,c),m=Fu(m,c),!D){if(f===!1&&D==="")return D;if((!R||l&&l.toLowerCase()!==v.toLowerCase())&&p(new gy(t,l)),R)try{var q=i.getMessageFormat(R,v,m,s);return q.format(a)}catch(L){return p(new $s('Error formatting default message for: "'.concat(N,'", rendering default message verbatim'),l,t,L)),typeof R=="string"?R:N}return N}try{var q=i.getMessageFormat(D,l,u,ee({formatters:i},s||{}));return q.format(a)}catch(L){p(new $s('Error formatting message: "'.concat(N,'", using ').concat(R?"default message":"id"," as fallback."),l,t,L))}if(R)try{var q=i.getMessageFormat(R,v,m,s);return q.format(a)}catch(L){p(new $s('Error formatting the default message for: "'.concat(N,'", rendering message verbatim'),l,t,L))}return typeof D=="string"?D:typeof R=="string"?R:N},Jk=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Ei(e,i,t,a){var s=e.locale,l=e.formats,u=e.onError,k=e.timeZone;a===void 0&&(a={});var v=a.format,m=ee(ee({},k&&{timeZone:k}),v&&Go(l,i,v,u)),f=$r(a,Jk,m);return i==="time"&&!f.hour&&!f.minute&&!f.second&&!f.timeStyle&&!f.dateStyle&&(f=ee(ee({},f),{hour:"numeric",minute:"numeric"})),t(s,f)}function my(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],u=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return Ei(e,"date",i,u).format(k)}catch(v){e.onError(new xn("Error formatting date.",e.locale,v))}return String(k)}function Ty(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],u=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return Ei(e,"time",i,u).format(k)}catch(v){e.onError(new xn("Error formatting time.",e.locale,v))}return String(k)}function py(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],u=t[2],k=u===void 0?{}:u,v=e.timeZone,m=e.locale,f=e.onError,p=$r(k,Jk,v?{timeZone:v}:{});try{return i(m,p).formatRange(s,l)}catch(c){f(new xn("Error formatting date time range.",e.locale,c))}return String(s)}function hy(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],u=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return Ei(e,"date",i,u).formatToParts(k)}catch(v){e.onError(new xn("Error formatting date.",e.locale,v))}return[]}function Ay(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],u=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return Ei(e,"time",i,u).formatToParts(k)}catch(v){e.onError(new xn("Error formatting time.",e.locale,v))}return[]}var cy=["style","type","fallback","languageDisplay"];function yy(e,i,t,a){var s=e.locale,l=e.onError,u=Intl.DisplayNames;u||l(new Dr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,dr.MISSING_INTL_API));var k=$r(a,cy);try{return i(s,k).of(t)}catch(v){l(new xn("Error formatting display name.",s,v))}}var Ry=["type","style"],Mu=Date.now();function _y(e){return"".concat(Mu,"_").concat(e,"_").concat(Mu)}function by(e,i,t,a){a===void 0&&(a={});var s=Wk(e,i,t,a).reduce(function(l,u){var k=u.value;return typeof k!="string"?l.push(k):typeof l[l.length-1]=="string"?l[l.length-1]+=k:l.push(k),l},[]);return s.length===1?s[0]:s.length===0?"":s}function Wk(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={});var u=Intl.ListFormat;u||l(new Dr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,dr.MISSING_INTL_API));var k=$r(a,Ry);try{var v={},m=t.map(function(f,p){if(typeof f=="object"){var c=_y(p);return v[c]=f,c}return String(f)});return i(s,k).formatToParts(m).map(function(f){return f.type==="literal"?f:ee(ee({},f),{value:v[f.value]||f.value})})}catch(f){l(new xn("Error formatting list.",s,f))}return t}var Ny=["type"];function Sy(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={}),Intl.PluralRules||l(new Dr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,dr.MISSING_INTL_API));var u=$r(a,Ny);try{return i(s,u).select(t)}catch(k){l(new xn("Error formatting plural.",s,k))}return"other"}var Iy=["numeric","style"];function Oy(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var u=t.format,k=!!u&&Go(s,"relative",u,l)||{},v=$r(t,Iy,k);return i(a,v)}function Ly(e,i,t,a,s){s===void 0&&(s={}),a||(a="second");var l=Intl.RelativeTimeFormat;l||e.onError(new Dr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,dr.MISSING_INTL_API));try{return Oy(e,i,s).format(t,a)}catch(u){e.onError(new xn("Error formatting relative time.",e.locale,u))}return String(t)}var Ky=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function zk(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var u=t.format,k=u&&Go(s,"number",u,l)||{},v=$r(t,Ky,k);return i(a,v)}function Dy(e,i,t,a){a===void 0&&(a={});try{return zk(e,i,a).format(t)}catch(s){e.onError(new xn("Error formatting number.",e.locale,s))}return String(t)}function Py(e,i,t,a){a===void 0&&(a={});try{return zk(e,i,a).formatToParts(t)}catch(s){e.onError(new xn("Error formatting number.",e.locale,s))}return[]}function Fy(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function My(e){e.onWarn&&e.defaultRichTextElements&&Fy(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function Gy(e,i){var t=fy(i),a=ee(ee({},Ck),e),s=a.locale,l=a.defaultLocale,u=a.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&u?u(new Du('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&u&&u(new Du('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(u&&u(new ky('"locale" was not configured, using "'.concat(l,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),My(a),ee(ee({},a),{formatters:t,formatNumber:Dy.bind(null,a,t.getNumberFormat),formatNumberToParts:Py.bind(null,a,t.getNumberFormat),formatRelativeTime:Ly.bind(null,a,t.getRelativeTimeFormat),formatDate:my.bind(null,a,t.getDateTimeFormat),formatDateToParts:hy.bind(null,a,t.getDateTimeFormat),formatTime:Ty.bind(null,a,t.getDateTimeFormat),formatDateTimeRange:py.bind(null,a,t.getDateTimeFormat),formatTimeToParts:Ay.bind(null,a,t.getDateTimeFormat),formatPlural:Sy.bind(null,a,t.getPluralRules),formatMessage:go.bind(null,a,t),$t:go.bind(null,a,t),formatList:by.bind(null,a,t.getListFormat),formatListToParts:Wk.bind(null,a,t.getListFormat),formatDisplayName:yy.bind(null,a,t.getDisplayNames)})}function By(e){Sk(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var jy=ee(ee({},Ck),{textComponent:P.Fragment});function wy(e){return function(i){return e(P.Children.toArray(i))}}function Gu(e,i){if(e===i)return!0;if(!e||!i)return!1;var t=Object.keys(e),a=Object.keys(i),s=t.length;if(a.length!==s)return!1;for(var l=0;l<s;l++){var u=t[l];if(e[u]!==i[u]||!Object.prototype.hasOwnProperty.call(i,u))return!1}return!0}var Bo=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=P.createContext(null)):P.createContext(null);Bo.Consumer;var Hy=Bo.Provider,Bu=Hy,Vy=Bo;function er(){var e=P.useContext(Vy);return By(e),e}var vo;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(vo||(vo={}));var Eo;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Eo||(Eo={}));function Zk(e){var i=function(t){var a=er(),s=t.value,l=t.children,u=ft(t,["value","children"]),k=typeof s=="string"?new Date(s||0):s,v=e==="formatDate"?a.formatDateToParts(k,u):a.formatTimeToParts(k,u);return l(v)};return i.displayName=Eo[e],i}function na(e){var i=function(t){var a=er(),s=t.value,l=t.children,u=ft(t,["value","children"]),k=a[e](s,u);if(typeof l=="function")return l(k);var v=a.textComponent||P.Fragment;return P.createElement(v,null,k)};return i.displayName=vo[e],i}function Xk(e){return e&&Object.keys(e).reduce(function(i,t){var a=e[t];return i[t]=xk(a)?wy(a):a,i},{})}var ju=function(e,i,t,a){for(var s=[],l=4;l<arguments.length;l++)s[l-4]=arguments[l];var u=Xk(a),k=go.apply(void 0,lr([e,i,t,u],s,!1));return Array.isArray(k)?P.Children.toArray(k):k},Uy=function(e,i){var t=e.defaultRichTextElements,a=ft(e,["defaultRichTextElements"]),s=Xk(t),l=Gy(ee(ee(ee({},jy),a),{defaultRichTextElements:s}),i),u={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:s};return ee(ee({},l),{formatMessage:ju.bind(null,u,l.formatters),$t:ju.bind(null,u,l.formatters)})};function qy(e,i){var t=e.values,a=ft(e,["values"]),s=i.values,l=ft(i,["values"]);return Gu(s,t)&&Gu(a,l)}function Qk(e){var i=er(),t=i.formatMessage,a=i.textComponent,s=a===void 0?P.Fragment:a,l=e.id,u=e.description,k=e.defaultMessage,v=e.values,m=e.children,f=e.tagName,p=f===void 0?s:f,c=e.ignoreTag,K={id:l,description:u,defaultMessage:k},G=t(K,v,{ignoreTag:c});return typeof m=="function"?m(Array.isArray(G)?G:[G]):p?P.createElement(p,null,P.Children.toArray(G)):P.createElement(P.Fragment,null,G)}Qk.displayName="FormattedMessage";var Ie=P.memo(Qk,qy);Ie.displayName="MemoizedFormattedMessage";var eg=na("formatDate"),xy=na("formatTime");na("formatNumber");na("formatList");na("formatDisplayName");Zk("formatDate");Zk("formatTime");let wu=0;function Yy(e){const[i,t]=P.useState(e),a=e||i;return P.useEffect(()=>{i==null&&(wu+=1,t(`aksel-icon-${wu}`))},[i]),a}const Hu=Y.useId;function Ar(e){var i;return Hu!==void 0?Hu().replace(/(:)/g,""):(i=Yy(e))!==null&&i!==void 0?i:""}var Cy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const $y=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=Cy(e,["title","titleId"]);let l=Ar();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",d:"M12.75 5a.75.75 0 0 0-1.5 0v12.19l-3.22-3.22a.75.75 0 0 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l4.5-4.5a.75.75 0 1 0-1.06-1.06l-3.22 3.22z"}))});var Jy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Wy=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=Jy(e,["title","titleId"]);let l=Ar();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var zy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Zy=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=zy(e,["title","titleId"]);let l=Ar();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",d:"M12.53 4.47a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06l3.22-3.22V19a.75.75 0 0 0 1.5 0V6.81l3.22 3.22a.75.75 0 1 0 1.06-1.06z"}))});var Xy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Qy=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=Xy(e,["title","titleId"]);let l=Ar();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var eR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const nR=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=eR(e,["title","titleId"]);let l=Ar();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var rR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Js=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=rR(e,["title","titleId"]);let l=Ar();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12",clipRule:"evenodd"}))});var tR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const aR=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=tR(e,["title","titleId"]);let l=Ar();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var iR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const ng=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=iR(e,["title","titleId"]);let l=Ar();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var sR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const oR=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=sR(e,["title","titleId"]);let l=Ar();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});function rg(e){var i,t,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(i=0;i<s;i++)e[i]&&(t=rg(e[i]))&&(a&&(a+=" "),a+=t)}else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function Oe(){for(var e,i,t=0,a="",s=arguments.length;t<s;t++)(e=arguments[t])&&(i=rg(e))&&(a&&(a+=" "),a+=i);return a}const At=e=>Oe({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var lR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const tg=P.forwardRef((e,i)=>{var{className:t,size:a="medium",as:s="p",spacing:l,truncate:u,weight:k="regular",align:v,visuallyHidden:m,textColor:f}=e,p=lR(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return Y.createElement(s,Object.assign({},p,{ref:i,className:Oe(t,"navds-body-long",`navds-body-long--${a}`,At({spacing:l,truncate:u,weight:k,align:v,visuallyHidden:m,textColor:f}))}))});var dR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const ra=P.forwardRef((e,i)=>{var{className:t,size:a="medium",as:s="p",spacing:l,truncate:u,weight:k="regular",align:v,visuallyHidden:m,textColor:f}=e,p=dR(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return Y.createElement(s,Object.assign({},p,{ref:i,className:Oe(t,"navds-body-short",`navds-body-short--${a}`,At({spacing:l,truncate:u,weight:k,align:v,visuallyHidden:m,textColor:f}))}))});var uR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};P.forwardRef((e,i)=>{var{className:t,size:a="medium",spacing:s,uppercase:l,as:u="p",truncate:k,weight:v="regular",align:m,visuallyHidden:f,textColor:p}=e,c=uR(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return Y.createElement(u,Object.assign({},c,{ref:i,className:Oe(t,"navds-detail",At({spacing:s,truncate:k,weight:v,align:m,visuallyHidden:f,textColor:p,uppercase:l}),{"navds-detail--small":a==="small"})}))});var kR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const gR=P.forwardRef((e,i)=>{var{className:t,size:a,spacing:s,as:l="p"}=e,u=kR(e,["className","size","spacing","as"]);return Y.createElement(l,Object.assign({},u,{ref:i,className:Oe("navds-error-message","navds-label",t,At({spacing:s}),{"navds-label--small":a==="small"})}))});var vR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const ag=P.forwardRef((e,i)=>{var{level:t="1",size:a,className:s,as:l,spacing:u,align:k,visuallyHidden:v,textColor:m}=e,f=vR(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const p=l??`h${t}`;return Y.createElement(p,Object.assign({},f,{ref:i,className:Oe(s,"navds-heading",`navds-heading--${a}`,At({spacing:u,align:k,visuallyHidden:v,textColor:m}))}))});var ER=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};P.forwardRef((e,i)=>{var{className:t,spacing:a,as:s="p"}=e,l=ER(e,["className","spacing","as"]);return Y.createElement(s,Object.assign({},l,{ref:i,className:Oe(t,"navds-ingress",{"navds-typo--spacing":!!a})}))});var fR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const jo=P.forwardRef((e,i)=>{var{className:t,size:a="medium",as:s="label",spacing:l,visuallyHidden:u,textColor:k}=e,v=fR(e,["className","size","as","spacing","visuallyHidden","textColor"]);return Y.createElement(s,Object.assign({},v,{ref:i,className:Oe(t,"navds-label",At({spacing:l,visuallyHidden:u,textColor:k}),{"navds-label--small":a==="small"})}))});function ta(e,i){const t=Object.entries(e).filter(([a])=>!i.includes(a));return Object.fromEntries(t)}const mR=globalThis!=null&&globalThis.document?P.useLayoutEffect:()=>{};let Vu=0;function TR(e){const[i,t]=P.useState(e),a=e||i;return P.useEffect(()=>{i==null&&(Vu+=1,t(`aksel-id-${Vu}`))},[i]),a}const Uu=Y.useId;function wo(e){var i;return Uu!==void 0?Uu().replace(/(:)/g,""):(i=TR(e))!==null&&i!==void 0?i:""}function qu(e,i=[]){const t=P.useRef(e);return P.useEffect(()=>{t.current=e}),P.useCallback((...a)=>{var s;return(s=t.current)===null||s===void 0?void 0:s.call(t,...a)},i)}function pR({value:e,defaultValue:i,onChange:t}){const a=qu(t),[s,l]=P.useState(i),u=e!==void 0,k=u?e:s,v=qu(m=>{const p=typeof m=="function"?m(k):m;u||l(p),a(p)},[u,a,k]);return[k,v]}function Ho(e,i,{checkForDefaultPrevented:t=!0}={}){return function(s){if(e==null||e(s),t===!1||!s.defaultPrevented)return i==null?void 0:i(s)}}function ig(e){return i=>{e.forEach(t=>{typeof t=="function"?t(i):t!=null&&(t.current=i)})}}function sg(...e){return Y.useCallback(ig(e),e)}function hR(e,i){const t=Object.assign({},i);for(const a in i){const s=e[a],l=i[a];/^on[A-Z]/.test(a)?s&&l?t[a]=(...k)=>{l(...k),s(...k)}:s&&(t[a]=s):a==="style"?t[a]=Object.assign(Object.assign({},s),l):a==="className"&&(t[a]=[s,l].filter(Boolean).join(" "))}return Object.assign(Object.assign({},e),t)}var AR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const fi=P.forwardRef((e,i)=>{var t;const{children:a}=e,s=AR(e,["children"]);if(P.isValidElement(a)){const l=Object.prototype.propertyIsEnumerable.call(a.props,"ref")?a.props.ref:a.ref;return P.cloneElement(a,Object.assign(Object.assign({},hR(s,a.props)),{ref:i?ig([i,l]):l}))}if(P.Children.count(a)>1){const l=new Error("Aksel: Components using 'asChild' expects to recieve a single React element child.");throw l.name="SlotError",(t=Error.captureStackTrace)===null||t===void 0||t.call(Error,l,fi),l}return null});function Ws(e){return(i={})=>{const t=i.width?String(i.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function qt(e){return(i,t)=>{const a=t!=null&&t.context?String(t.context):"standalone";let s;if(a==="formatting"&&e.formattingValues){const u=e.defaultFormattingWidth||e.defaultWidth,k=t!=null&&t.width?String(t.width):u;s=e.formattingValues[k]||e.formattingValues[u]}else{const u=e.defaultWidth,k=t!=null&&t.width?String(t.width):e.defaultWidth;s=e.values[k]||e.values[u]}const l=e.argumentCallback?e.argumentCallback(i):i;return s[l]}}function xt(e){return(i,t={})=>{const a=t.width,s=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],l=i.match(s);if(!l)return null;const u=l[0],k=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],v=Array.isArray(k)?yR(k,p=>p.test(u)):cR(k,p=>p.test(u));let m;m=e.valueCallback?e.valueCallback(v):v,m=t.valueCallback?t.valueCallback(m):m;const f=i.slice(u.length);return{value:m,rest:f}}}function cR(e,i){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&i(e[t]))return t}function yR(e,i){for(let t=0;t<e.length;t++)if(i(e[t]))return t}function RR(e){return(i,t={})=>{const a=i.match(e.matchPattern);if(!a)return null;const s=a[0],l=i.match(e.parsePattern);if(!l)return null;let u=e.valueCallback?e.valueCallback(l[0]):l[0];u=t.valueCallback?t.valueCallback(u):u;const k=i.slice(s.length);return{value:u,rest:k}}}const _R={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},bR=(e,i,t)=>{let a;const s=_R[e];return typeof s=="string"?a=s:i===1?a=s.one:a=s.other.replace("{{count}}",String(i)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"om "+a:a+" siden":a},NR={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},SR={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},IR={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},OR={date:Ws({formats:NR,defaultWidth:"full"}),time:Ws({formats:SR,defaultWidth:"full"}),dateTime:Ws({formats:IR,defaultWidth:"full"})},LR={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},KR=(e,i,t,a)=>LR[e],DR={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},PR={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},FR={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},MR={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},GR={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},BR=(e,i)=>Number(e)+".",jR={ordinalNumber:BR,era:qt({values:DR,defaultWidth:"wide"}),quarter:qt({values:PR,defaultWidth:"wide",argumentCallback:e=>e-1}),month:qt({values:FR,defaultWidth:"wide"}),day:qt({values:MR,defaultWidth:"wide"}),dayPeriod:qt({values:GR,defaultWidth:"wide"})},wR=/^(\d+)\.?/i,HR=/\d+/i,VR={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},UR={any:[/^f/i,/^e/i]},qR={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},xR={any:[/1/i,/2/i,/3/i,/4/i]},YR={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},CR={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},$R={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},JR={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},WR={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},zR={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},ZR={ordinalNumber:RR({matchPattern:wR,parsePattern:HR,valueCallback:e=>parseInt(e,10)}),era:xt({matchPatterns:VR,defaultMatchWidth:"wide",parsePatterns:UR,defaultParseWidth:"any"}),quarter:xt({matchPatterns:qR,defaultMatchWidth:"wide",parsePatterns:xR,defaultParseWidth:"any",valueCallback:e=>e+1}),month:xt({matchPatterns:YR,defaultMatchWidth:"wide",parsePatterns:CR,defaultParseWidth:"any"}),day:xt({matchPatterns:$R,defaultMatchWidth:"wide",parsePatterns:JR,defaultParseWidth:"any"}),dayPeriod:xt({matchPatterns:WR,defaultMatchWidth:"any",parsePatterns:zR,defaultParseWidth:"any"})},XR={code:"nb",formatDistance:bR,formatLong:OR,formatRelative:KR,localize:jR,match:ZR,options:{weekStartsOn:1,firstWeekContainsDate:4}},QR={global:{dateLocale:XR,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},Loader:{title:"Venter…"},Modal:{close:"Lukk"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},e_=P.createContext({translations:QR}),xu=/(\w+)/g;function n_(e,i){const t=Array.isArray(e)?e:r_(e);for(const a of i){if(!a)continue;let s=a;for(let l=0;l<t.length;l++){const u=s[t[l]];u!==void 0&&(s=u)}if(typeof s=="string")return s}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function r_(e){const i=[];let t=xu.exec(e);for(;t;){const[,a,s]=t;i.push(a||s),t=xu.exec(e)}return i}const t_=/{[^}]*}/g;function mi(e,...i){const a=P.useContext(e_).translations,s=[...i,...Array.isArray(a)?a.map(u=>u[e]):[a[e]]];return(u,k)=>{const v=n_(u,s);return k?v.replace(t_,m=>{const f=m.substring(1,m.length-1);if(k[f]===void 0){const p=JSON.stringify(k);throw new Error(`Error translating key '${u}'. No replacement syntax ({}) found for key '${f}'. The following replacements were passed: '${p}'`)}return k[f]}):v}}var a_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const i_=P.forwardRef((e,i)=>{var{className:t,size:a="medium",title:s,transparent:l=!1,variant:u="neutral",id:k}=e,v=a_(e,["className","size","title","transparent","variant","id"]);const m=wo(),f=mi("Loader");return Y.createElement("svg",Object.assign({"aria-labelledby":k??`loader-${m}`,ref:i,className:Oe("navds-loader",t,`navds-loader--${a}`,`navds-loader--${u}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},ta(v,["children"])),Y.createElement("title",{id:k??`loader-${m}`},s||f("title")),Y.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),Y.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var s_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const og=P.forwardRef((e,i)=>{var{as:t="button",variant:a="primary",className:s,children:l,size:u="medium",loading:k=!1,disabled:v,style:m,icon:f,iconPosition:p="left"}=e,c=s_(e,["as","variant","className","children","size","loading","disabled","style","icon","iconPosition"]);const K=P.useRef(null),[G,R]=P.useState(),N=sg(K,i);mR(()=>{if(k){const L=window.requestAnimationFrame(()=>{var Q,O;R((O=(Q=K==null?void 0:K.current)===null||Q===void 0?void 0:Q.getBoundingClientRect())===null||O===void 0?void 0:O.width)});return()=>{R(void 0),cancelAnimationFrame(L)}}},[k,l]);const D=v??G?ta(c,["href"]):c,q=L=>{L.key===" "&&!v&&!G&&L.currentTarget.click()};return Y.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},D,{ref:N,onKeyUp:Ho(D.onKeyUp,q),className:Oe(s,"navds-button",`navds-button--${a}`,`navds-button--${u}`,{"navds-button--loading":G,"navds-button--icon-only":!!f&&!l,"navds-button--disabled":v??G}),style:Object.assign(Object.assign({},m),{width:G}),disabled:v??G?!0:void 0}),G?Y.createElement(i_,{size:u}):Y.createElement(Y.Fragment,null,f&&p==="left"&&Y.createElement("span",{className:"navds-button__icon"},f),l&&Y.createElement(jo,{as:"span",size:u==="medium"?"medium":"small"},l),f&&p==="right"&&Y.createElement("span",{className:"navds-button__icon"},f)))}),o_=P.createContext(null),l_=(e,i)=>{var t,a,s;const{size:l,error:u,errorId:k}=e,v=P.useContext(o_),m=wo(),f=(t=e.id)!==null&&t!==void 0?t:`${i}-${m}`,p=k??`${i}-error-${m}`,c=`${i}-description-${m}`,K=(v==null?void 0:v.disabled)||e.disabled,G=((v==null?void 0:v.readOnly)||e.readOnly)&&!K||void 0,R=!K&&!G&&!!(u||v!=null&&v.error),N=!K&&!G&&!!u&&typeof u!="boolean",D=Object.assign({},R?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:N,hasError:R,errorId:p,inputDescriptionId:c,size:(a=l??(v==null?void 0:v.size))!==null&&a!==void 0?a:"medium",readOnly:G,inputProps:Object.assign(Object.assign({id:f},D),{"aria-describedby":Oe(e["aria-describedby"],{[c]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[p]:N,[(s=v==null?void 0:v.errorId)!==null&&s!==void 0?s:""]:R&&!!(v!=null&&v.error)})||void 0,disabled:K})}};function en(e,i,t){return t?typeof t=="string"?{[`--__ac-${e}-${i}-xs`]:t}:Object.fromEntries(Object.entries(t).map(([a,s])=>[`--__ac-${e}-${i}-${a}`,s])):{}}const d_=e=>{switch(e){case"px":return"1px"}return e},Yu=(e,i,t,a,s)=>i.split(" ").map((l,u,k)=>{if(e==="margin-inline"&&l==="full")return`calc((100vw - ${100/k.length}%)/-2)`;if(e==="padding-inline"&&l==="full")return`calc((100vw - ${100/k.length}%)/2)`;if(["mi","mb"].includes(e)&&l==="auto")return"auto";let v=`var(--a-${t}-${l})`;return a.includes(l)&&(v=d_(l)),s?l==="0"?"0":`calc(-1 * ${v})`:v}).join(" ");function Pn(e,i,t,a,s=!1,l=[]){if(!a)return{};if(typeof a=="string")return{[`--__ac-${e}-${i}-xs`]:Yu(i,a,t,l,s)};const u={};return Object.entries(a).forEach(([k,v])=>{u[`--__ac-${e}-${i}-${k}`]=Yu(i,v,t,l,s)}),u}const lg=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],dg=({children:e,className:i,padding:t,paddingInline:a,paddingBlock:s,margin:l,marginInline:u,marginBlock:k,width:v,minWidth:m,maxWidth:f,height:p,minHeight:c,maxHeight:K,position:G,inset:R,top:N,right:D,left:q,bottom:L,overflow:Q,overflowX:O,overflowY:H,flexBasis:I,flexGrow:b,flexShrink:$,gridColumn:W})=>{const x=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Pn("r","p","spacing",t)),Pn("r","pi","spacing",a)),Pn("r","pb","spacing",s)),Pn("r","m","spacing",l)),Pn("r","mi","spacing",u)),Pn("r","mb","spacing",k)),en("r","w",v)),en("r","minw",m)),en("r","maxw",f)),en("r","h",p)),en("r","minh",c)),en("r","maxh",K)),en("r","position",G)),Pn("r","inset","spacing",R)),Pn("r","top","spacing",N)),Pn("r","right","spacing",D)),Pn("r","bottom","spacing",L)),Pn("r","left","spacing",q)),en("r","overflow",Q)),en("r","overflowx",O)),en("r","overflowy",H)),en("r","flex-basis",I)),en("r","flex-grow",b)),en("r","flex-shrink",$)),en("r","grid-column",W));return Y.createElement(fi,{className:Oe({className:i,"navds-r-p":t,"navds-r-pi":a,"navds-r-pb":s,"navds-r-m":l,"navds-r-mi":u,"navds-r-mb":k,"navds-r-w":v,"navds-r-minw":m,"navds-r-maxw":f,"navds-r-h":p,"navds-r-minh":c,"navds-r-maxh":K,"navds-r-position":G,"navds-r-inset":R,"navds-r-top":N,"navds-r-right":D,"navds-r-bottom":L,"navds-r-left":q,"navds-r-overflow":Q,"navds-r-overflowx":O,"navds-r-overflowy":H,"navds-r-flex-basis":I,"navds-r-flex-grow":b,"navds-r-flex-shrink":$,"navds-r-grid-column":W}),style:x},e)};var u_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const k_=P.forwardRef((e,i)=>{var{children:t,className:a,as:s="div",columns:l,gap:u,style:k,align:v,asChild:m}=e,f=u_(e,["children","className","as","columns","gap","style","align","asChild"]);const p=Object.assign(Object.assign(Object.assign(Object.assign({},k),{"--__ac-hgrid-align":v}),Pn("hgrid","gap","spacing",u)),en("hgrid","columns",g_(l))),c=m?fi:s;return Y.createElement(dg,Object.assign({},f),Y.createElement(c,Object.assign({},ta(f,lg),{ref:i,className:Oe("navds-hgrid",a,{"navds-hgrid-gap":u,"navds-hgrid-align":v}),style:p}),t))});function g_(e){return e?typeof e=="string"||typeof e=="number"?Cu(e):Object.fromEntries(Object.entries(e).map(([i,t])=>[i,Cu(t)])):{}}const Cu=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var v_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const ug=P.forwardRef((e,i)=>{var{children:t,className:a,as:s="div",align:l,justify:u,wrap:k=!0,gap:v,style:m,direction:f="row",asChild:p}=e,c=v_(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const K=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},m),Pn("stack","gap","spacing",v)),en("stack","direction",f)),en("stack","align",l)),en("stack","justify",u)),G=p?fi:s;return Y.createElement(dg,Object.assign({},c),Y.createElement(G,Object.assign({},ta(c,lg),{ref:i,style:K,className:Oe("navds-stack",a,{"navds-vstack":f==="column","navds-hstack":f==="row","navds-stack-gap":v,"navds-stack-align":l,"navds-stack-justify":u,"navds-stack-direction":f,"navds-stack-wrap":k})}),t))});var E_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const vt=P.forwardRef((e,i)=>{var{as:t="div"}=e,a=E_(e,["as"]);return Y.createElement(ug,Object.assign({as:t},a,{ref:i,direction:"row"}))});var f_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Tt=P.forwardRef((e,i)=>{var{as:t="div"}=e,a=f_(e,["as"]);return Y.createElement(ug,Object.assign({as:t},a,{ref:i,direction:"column",wrap:!1}))}),fo=P.createContext({listType:"ul",size:"medium"});var m_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const kg=P.forwardRef((e,i)=>{var{className:t,children:a,title:s,icon:l}=e,u=m_(e,["className","children","title","icon"]);const{listType:k,size:v}=P.useContext(fo);return k==="ol"&&l&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),Y.createElement("li",Object.assign({},u,{ref:i,className:Oe("navds-list__item",t)}),k==="ul"&&Y.createElement("div",{className:Oe("navds-list__item-marker",{"navds-list__item-marker--icon":l,"navds-list__item-marker--bullet":!l})},l||Y.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},Y.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),Y.createElement("div",null,s&&Y.createElement(tg,{as:"p",size:v,weight:"semibold"},s),a))});kg.displayName="List.Item";var T_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const p_={small:"xsmall",medium:"small",large:"medium"},mo=P.forwardRef((e,i)=>{var{children:t,className:a,as:s="ul",title:l,description:u,headingTag:k="h3",size:v}=e,m=T_(e,["children","className","as","title","description","headingTag","size"]);const{size:f}=P.useContext(fo),p=v??f;return Y.createElement(fo.Provider,{value:{listType:s,size:p}},Y.createElement(tg,Object.assign({as:"div"},m,{size:p,ref:i,className:Oe("navds-list",`navds-list--${p}`,a)}),l&&Y.createElement(ag,{size:p_[p],as:k},l),u&&Y.createElement(ra,{size:p},u),Y.createElement(s,{role:"list"},t)))});mo.Item=kg;var h_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const A_=P.forwardRef((e,i)=>{var{className:t}=e,a=h_(e,["className"]);return Y.createElement("tbody",Object.assign({},a,{ref:i,className:Oe("navds-table__body",t)}))});var c_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const gg=P.forwardRef((e,i)=>{var{className:t,children:a,align:s,textSize:l}=e,u=c_(e,["className","children","align","textSize"]);return Y.createElement("th",Object.assign({ref:i,className:Oe("navds-table__header-cell","navds-label",t,{[`navds-table__header-cell--align-${s}`]:s,"navds-label--small":l==="small"})},u),a)}),vg=P.createContext(null);var y_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const R_=P.forwardRef((e,i)=>{var t,a,s,l,{className:u,children:k,sortable:v=!1,sortKey:m}=e,f=y_(e,["className","children","sortable","sortKey"]);const p=P.useContext(vg);return v&&!m&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),Y.createElement(gg,Object.assign({scope:"col",ref:i,className:u,"aria-sort":v?((t=p==null?void 0:p.sort)===null||t===void 0?void 0:t.orderBy)===m?(a=p==null?void 0:p.sort)===null||a===void 0?void 0:a.direction:"none":void 0},f),v?Y.createElement("button",{type:"button",className:"navds-table__sort-button",onClick:v&&m?()=>{var c;return(c=p==null?void 0:p.onSortChange)===null||c===void 0?void 0:c.call(p,m)}:void 0},k,((s=p==null?void 0:p.sort)===null||s===void 0?void 0:s.orderBy)===m?((l=p==null?void 0:p.sort)===null||l===void 0?void 0:l.direction)==="descending"?Y.createElement($y,{"aria-hidden":!0}):Y.createElement(Zy,{"aria-hidden":!0}):Y.createElement(Qy,{"aria-hidden":!0})):k)});var __=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Eg=P.forwardRef((e,i)=>{var{className:t,children:a="",align:s,textSize:l}=e,u=__(e,["className","children","align","textSize"]);return Y.createElement(ra,Object.assign({as:"td",ref:i,className:Oe("navds-table__data-cell",t,{[`navds-table__data-cell--align-${s}`]:s}),size:l},u),a)});var b_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const N_=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function S_(e){const i=parseFloat(e);return!Number.isNaN(i)&&Number.isFinite(i)}function $u(e){return typeof e=="string"&&e[e.length-1]==="%"&&S_(e.substring(0,e.length-1))}function zs(e,i){i===0&&(e!=null&&e.style)&&(e.style.display="none")}function I_(e,i){i===0&&(e!=null&&e.style)&&(e.style.display="")}const O_=e=>{var{children:i,className:t,innerClassName:a,duration:s=250,easing:l="ease",height:u}=e,k=b_(e,["children","className","innerClassName","duration","easing","height"]);const v=P.useRef(u),m=P.useRef(null),f=P.useRef(),p=P.useRef(),c=P.useRef(u),K=P.useRef("visible"),G=N_?0:s;typeof c.current=="number"?(typeof u!="string"&&(c.current=u<0?0:u),K.current="hidden"):$u(c.current)&&(c.current=u==="0%"?0:u,K.current="hidden");const[R,N]=P.useState(c.current),[D,q]=P.useState(K.current),[L,Q]=P.useState(!1);P.useEffect(()=>{zs(m.current,c.current)},[]),P.useEffect(()=>{if(u!==v.current&&m.current){I_(m.current,v.current),m.current.style.overflow="hidden";const b=m.current.offsetHeight;m.current.style.overflow="";const $=G;let W,x,te="hidden",le;const J=v.current==="auto";typeof u=="number"?(W=u<0?0:u,x=W):$u(u)?(W=u==="0%"?0:u,x=W):(W=b,x="auto",te=void 0),J&&(x=W,W=b),N(W),q("hidden"),Q(!J),clearTimeout(p.current),clearTimeout(f.current),J?(le=!0,p.current=setTimeout(()=>{N(x),q(te),Q(le)},50),f.current=setTimeout(()=>{Q(!1),zs(m.current,x)},$)):p.current=setTimeout(()=>{N(x),q(te),Q(!1),u!=="auto"&&zs(m.current,W)},$)}return v.current=u,()=>{clearTimeout(p.current),clearTimeout(f.current)}},[u]);const O={height:R,overflow:D};L&&(O.transition=`height ${G}ms ${l} 0ms`,O.WebkitTransition=O.transition);const I=typeof k["aria-hidden"]<"u"?k["aria-hidden"]:u===0;return Y.createElement("div",Object.assign({},k,{className:t,style:O}),Y.createElement("div",{"aria-hidden":I,className:a,ref:m},i))};var L_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const fg=P.forwardRef((e,i)=>{var{className:t,selected:a=!1,shadeOnHover:s=!0}=e,l=L_(e,["className","selected","shadeOnHover"]);return Y.createElement("tr",Object.assign({},l,{ref:i,className:Oe("navds-table__row",t,{"navds-table__row--selected":a,"navds-table__row--shade-on-hover":s})}))});var K_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const D_=P.forwardRef((e,i)=>{var{className:t,children:a,content:s,togglePlacement:l="left",defaultOpen:u=!1,open:k,onOpenChange:v,expansionDisabled:m=!1,expandOnRowClick:f=!1,colSpan:p=999,onClick:c}=e,K=K_(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","onClick"]);const[G,R]=pR({defaultValue:u,value:k,onChange:v}),N=mi("global"),D=wo(),q=Q=>{R(O=>!O),Q.stopPropagation()},L=Q=>{f&&!m&&!mg(Q.target)&&q(Q)};return Y.createElement(Y.Fragment,null,Y.createElement(fg,Object.assign({},K,{ref:i,className:Oe("navds-table__expandable-row",t,{"navds-table__expandable-row--open":G,"navds-table__expandable-row--expansion-disabled":m,"navds-table__expandable-row--clickable":f}),onClick:Ho(c,L)}),l==="right"&&a,Y.createElement(Eg,{className:Oe("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":G}),onClick:q},!m&&Y.createElement("button",{className:"navds-table__toggle-expand-button",type:"button","aria-controls":D,"aria-expanded":G,onClick:q},Y.createElement(nR,{className:"navds-table__expandable-icon",title:N(G?"showLess":"showMore")}))),l==="left"&&a),Y.createElement("tr",{className:"navds-table__expanded-row","aria-hidden":!G,id:D},Y.createElement("td",{colSpan:p,className:"navds-table__expanded-row-cell"},Y.createElement(O_,{className:"navds-table__expanded-row-collapse",innerClassName:"navds-table__expanded-row-content",height:G?"auto":0,duration:250},s))))});function mg(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:mg(e.parentElement)}var P_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const F_=P.forwardRef((e,i)=>{var{className:t}=e,a=P_(e,["className"]);return Y.createElement("thead",Object.assign({},a,{ref:i,className:Oe("navds-table__header",t)}))});var M_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Ue=P.forwardRef((e,i)=>{var{className:t,zebraStripes:a=!1,size:s="medium",onSortChange:l,sort:u}=e,k=M_(e,["className","zebraStripes","size","onSortChange","sort"]);return Y.createElement(vg.Provider,{value:{onSortChange:l,sort:u}},Y.createElement("table",Object.assign({},k,{ref:i,className:Oe("navds-table",`navds-table--${s}`,t,{"navds-table--zebra-stripes":a})})))});Ue.Header=F_;Ue.Body=A_;Ue.Row=fg;Ue.ColumnHeader=R_;Ue.HeaderCell=gg;Ue.DataCell=Eg;Ue.ExpandableRow=D_;const Tg=P.createContext(null);var G_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const pg=P.forwardRef((e,i)=>{var t,{className:a,children:s,disabled:l,onClick:u}=e,k=G_(e,["className","children","disabled","onClick"]);const v=mi("Search"),m=P.useContext(Tg);if(m===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:f,variant:p,handleClick:c}=m;return Y.createElement(og,Object.assign({type:"submit"},k,{ref:i,size:f,variant:p==="secondary"?"secondary":"primary",className:Oe("navds-search__button-search",a),disabled:(t=m==null?void 0:m.disabled)!==null&&t!==void 0?t:l,onClick:Ho(u,c),icon:Y.createElement(ng,Object.assign({},s?{"aria-hidden":!0}:{title:v("search")}))}),s)});var B_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const To=P.forwardRef((e,i)=>{const{inputProps:t,size:a="medium",inputDescriptionId:s,errorId:l,showErrorMsg:u,hasError:k}=l_(e,"searchfield"),{className:v,hideLabel:m=!0,label:f,description:p,value:c,clearButtonLabel:K,onClear:G,clearButton:R=!0,children:N,variant:D="primary",defaultValue:q,onChange:L,onSearchClick:Q,htmlSize:O}=e,H=B_(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize"]),I=P.useRef(null),b=sg(I,i),$=mi("Search"),[W,x]=P.useState(q??""),te=V=>{c===void 0&&x(V),L==null||L(V)},le=V=>{var U,Z;G==null||G(V),te(""),(Z=(U=I.current)===null||U===void 0?void 0:U.focus)===null||Z===void 0||Z.call(U)},J=()=>{Q==null||Q(`${c??W}`)};return Y.createElement("div",{onKeyDown:V=>{var U;V.key==="Escape"&&(!((U=I.current)===null||U===void 0)&&U.value&&V.preventDefault(),le({trigger:"Escape",event:V}))},className:Oe(v,"navds-form-field",`navds-form-field--${a}`,"navds-search",{"navds-search--error":k,"navds-search--disabled":t.disabled,"navds-search--with-size":O})},Y.createElement(jo,{htmlFor:t.id,size:a,className:Oe("navds-form-field__label",{"navds-sr-only":m})},f),!!p&&Y.createElement(ra,{className:Oe("navds-form-field__description",{"navds-sr-only":m}),id:s,size:a,as:"div"},p),Y.createElement("div",{className:"navds-search__wrapper"},Y.createElement("div",{className:"navds-search__wrapper-inner"},D==="simple"&&Y.createElement(ng,{"aria-hidden":!0,className:"navds-search__search-icon"}),Y.createElement("input",Object.assign({ref:b},ta(H,["error","errorId","size","readOnly"]),t,{value:c??W,onChange:V=>te(V.target.value),type:"search",className:Oe(v,"navds-search__input",`navds-search__input--${D}`,"navds-text-field__input","navds-body-short",`navds-body-short--${a}`)},O?{size:Number(O)}:{})),(c??W)&&R&&Y.createElement("button",{type:"button",onClick:V=>le({trigger:"Click",event:V}),className:"navds-search__button-clear"},Y.createElement("span",{className:"navds-sr-only"},K||$("clear")),Y.createElement(oR,{"aria-hidden":!0}))),Y.createElement(Tg.Provider,{value:{size:a,disabled:t.disabled,variant:D,handleClick:J}},N||D!=="simple"&&Y.createElement(pg,null))),Y.createElement("div",{className:"navds-form-field__error",id:l,"aria-relevant":"additions removals","aria-live":"polite"},u&&Y.createElement(gR,{size:a},e.error)))});To.Button=pg;const Et=e=>{if(e==null)return;const i=e.toString().replace(/\s/g,"");if(!Number.isNaN(i))return Number(Math.round(parseFloat(i))).toLocaleString("nb-NO").replace(/,|\s/g," ")};var Ti=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hg={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(Ti,function(){var t="minute",a=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(l,u,k){var v=u.prototype;k.utc=function(R){var N={date:R,utc:!0,args:arguments};return new u(N)},v.utc=function(R){var N=k(this.toDate(),{locale:this.$L,utc:!0});return R?N.add(this.utcOffset(),t):N},v.local=function(){return k(this.toDate(),{locale:this.$L,utc:!1})};var m=v.parse;v.parse=function(R){R.utc&&(this.$u=!0),this.$utils().u(R.$offset)||(this.$offset=R.$offset),m.call(this,R)};var f=v.init;v.init=function(){if(this.$u){var R=this.$d;this.$y=R.getUTCFullYear(),this.$M=R.getUTCMonth(),this.$D=R.getUTCDate(),this.$W=R.getUTCDay(),this.$H=R.getUTCHours(),this.$m=R.getUTCMinutes(),this.$s=R.getUTCSeconds(),this.$ms=R.getUTCMilliseconds()}else f.call(this)};var p=v.utcOffset;v.utcOffset=function(R,N){var D=this.$utils().u;if(D(R))return this.$u?0:D(this.$offset)?p.call(this):this.$offset;if(typeof R=="string"&&(R=function(O){O===void 0&&(O="");var H=O.match(a);if(!H)return null;var I=(""+H[0]).match(s)||["-",0,0],b=I[0],$=60*+I[1]+ +I[2];return $===0?0:b==="+"?$:-$}(R),R===null))return this;var q=Math.abs(R)<=16?60*R:R,L=this;if(N)return L.$offset=q,L.$u=R===0,L;if(R!==0){var Q=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(L=this.local().add(q+Q,t)).$offset=q,L.$x.$localOffset=Q}else L=this.utc();return L};var c=v.format;v.format=function(R){var N=R||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,N)},v.valueOf=function(){var R=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*R},v.isUTC=function(){return!!this.$u},v.toISOString=function(){return this.toDate().toISOString()},v.toString=function(){return this.toDate().toUTCString()};var K=v.toDate;v.toDate=function(R){return R==="s"&&this.$offset?k(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():K.call(this)};var G=v.diff;v.diff=function(R,N,D){if(R&&this.$u===R.$u)return G.call(this,R,N,D);var q=this.local(),L=k(R).local();return G.call(q,L,N,D)}}})})(hg);var j_=hg.exports;const w_=Vo(j_);var Ag={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(Ti,function(){var t,a,s=1e3,l=6e4,u=36e5,k=864e5,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=31536e6,f=2628e6,p=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:m,months:f,days:k,hours:u,minutes:l,seconds:s,milliseconds:1,weeks:6048e5},K=function(H){return H instanceof Q},G=function(H,I,b){return new Q(H,b,I.$l)},R=function(H){return a.p(H)+"s"},N=function(H){return H<0},D=function(H){return N(H)?Math.ceil(H):Math.floor(H)},q=function(H){return Math.abs(H)},L=function(H,I){return H?N(H)?{negative:!0,format:""+q(H)+I}:{negative:!1,format:""+H+I}:{negative:!1,format:""}},Q=function(){function H(b,$,W){var x=this;if(this.$d={},this.$l=W,b===void 0&&(this.$ms=0,this.parseFromMilliseconds()),$)return G(b*c[R($)],this);if(typeof b=="number")return this.$ms=b,this.parseFromMilliseconds(),this;if(typeof b=="object")return Object.keys(b).forEach(function(J){x.$d[R(J)]=b[J]}),this.calMilliseconds(),this;if(typeof b=="string"){var te=b.match(p);if(te){var le=te.slice(2).map(function(J){return J!=null?Number(J):0});return this.$d.years=le[0],this.$d.months=le[1],this.$d.weeks=le[2],this.$d.days=le[3],this.$d.hours=le[4],this.$d.minutes=le[5],this.$d.seconds=le[6],this.calMilliseconds(),this}}return this}var I=H.prototype;return I.calMilliseconds=function(){var b=this;this.$ms=Object.keys(this.$d).reduce(function($,W){return $+(b.$d[W]||0)*c[W]},0)},I.parseFromMilliseconds=function(){var b=this.$ms;this.$d.years=D(b/m),b%=m,this.$d.months=D(b/f),b%=f,this.$d.days=D(b/k),b%=k,this.$d.hours=D(b/u),b%=u,this.$d.minutes=D(b/l),b%=l,this.$d.seconds=D(b/s),b%=s,this.$d.milliseconds=b},I.toISOString=function(){var b=L(this.$d.years,"Y"),$=L(this.$d.months,"M"),W=+this.$d.days||0;this.$d.weeks&&(W+=7*this.$d.weeks);var x=L(W,"D"),te=L(this.$d.hours,"H"),le=L(this.$d.minutes,"M"),J=this.$d.seconds||0;this.$d.milliseconds&&(J+=this.$d.milliseconds/1e3,J=Math.round(1e3*J)/1e3);var V=L(J,"S"),U=b.negative||$.negative||x.negative||te.negative||le.negative||V.negative,Z=te.format||le.format||V.format?"T":"",C=(U?"-":"")+"P"+b.format+$.format+x.format+Z+te.format+le.format+V.format;return C==="P"||C==="-P"?"P0D":C},I.toJSON=function(){return this.toISOString()},I.format=function(b){var $=b||"YYYY-MM-DDTHH:mm:ss",W={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return $.replace(v,function(x,te){return te||String(W[x])})},I.as=function(b){return this.$ms/c[R(b)]},I.get=function(b){var $=this.$ms,W=R(b);return W==="milliseconds"?$%=1e3:$=W==="weeks"?D($/c[W]):this.$d[W],$||0},I.add=function(b,$,W){var x;return x=$?b*c[R($)]:K(b)?b.$ms:G(b,this).$ms,G(this.$ms+x*(W?-1:1),this)},I.subtract=function(b,$){return this.add(b,$,!0)},I.locale=function(b){var $=this.clone();return $.$l=b,$},I.clone=function(){return G(this.$ms,this)},I.humanize=function(b){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!b)},I.valueOf=function(){return this.asMilliseconds()},I.milliseconds=function(){return this.get("milliseconds")},I.asMilliseconds=function(){return this.as("milliseconds")},I.seconds=function(){return this.get("seconds")},I.asSeconds=function(){return this.as("seconds")},I.minutes=function(){return this.get("minutes")},I.asMinutes=function(){return this.as("minutes")},I.hours=function(){return this.get("hours")},I.asHours=function(){return this.as("hours")},I.days=function(){return this.get("days")},I.asDays=function(){return this.as("days")},I.weeks=function(){return this.get("weeks")},I.asWeeks=function(){return this.as("weeks")},I.months=function(){return this.get("months")},I.asMonths=function(){return this.as("months")},I.years=function(){return this.get("years")},I.asYears=function(){return this.as("years")},H}(),O=function(H,I,b){return H.add(I.years()*b,"y").add(I.months()*b,"M").add(I.days()*b,"d").add(I.hours()*b,"h").add(I.minutes()*b,"m").add(I.seconds()*b,"s").add(I.milliseconds()*b,"ms")};return function(H,I,b){t=b,a=b().$utils(),b.duration=function(x,te){var le=b.locale();return G(x,{$l:le},te)},b.isDuration=K;var $=I.prototype.add,W=I.prototype.subtract;I.prototype.add=function(x,te){return K(x)?O(this,x,1):$.bind(this)(x,te)},I.prototype.subtract=function(x,te){return K(x)?O(this,x,-1):W.bind(this)(x,te)}}})})(Ag);var H_=Ag.exports;const V_=Vo(H_);var cg={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(Ti,function(){var t="day";return function(a,s,l){var u=function(m){return m.add(4-m.isoWeekday(),t)},k=s.prototype;k.isoWeekYear=function(){return u(this).year()},k.isoWeek=function(m){if(!this.$utils().u(m))return this.add(7*(m-this.isoWeek()),t);var f,p,c,K,G=u(this),R=(f=this.isoWeekYear(),p=this.$u,c=(p?l.utc:l)().year(f).startOf("year"),K=4-c.isoWeekday(),c.isoWeekday()>4&&(K+=7),c.add(K,t));return G.diff(R,"week")+1},k.isoWeekday=function(m){return this.$utils().u(m)?this.day()||7:this.day(this.day()%7?m:m-7)};var v=k.startOf;k.startOf=function(m,f){var p=this.$utils(),c=!!p.u(f)||f;return p.p(m)==="isoweek"?c?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):v.bind(this)(m,f)}}})})(cg);var U_=cg.exports;const q_=Vo(U_);var x_={exports:{}};(function(e,i){(function(t,a){e.exports=a(Kr)})(Ti,function(t){function a(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var s=a(t),l={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(l,null,!0),l})})(x_);const Y_=$k(),pn=e=>Uy({locale:"nb-NO",messages:e},Y_),yg={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"},Ju="YYYY-MM-DD";Kr.extend(w_);Kr.extend(q_);Kr.extend(V_);pn(yg);const pt="9999-12-31",C_=(e,i,t)=>Kr(e,i,t).utc(!0).startOf("day"),Wu=(e,i)=>e===pt?e:C_(e,Ju).add(i,"days").format(Ju);pn(yg);function $_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rg={exports:{}},Yt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu;function J_(){if(zu)return Yt;zu=1;var e=Y,i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(k,v,m){var f,p={},c=null,K=null;m!==void 0&&(c=""+m),v.key!==void 0&&(c=""+v.key),v.ref!==void 0&&(K=v.ref);for(f in v)a.call(v,f)&&!l.hasOwnProperty(f)&&(p[f]=v[f]);if(k&&k.defaultProps)for(f in v=k.defaultProps,v)p[f]===void 0&&(p[f]=v[f]);return{$$typeof:i,type:k,key:c,ref:K,props:p,_owner:s.current}}return Yt.Fragment=t,Yt.jsx=u,Yt.jsxs=u,Yt}Rg.exports=J_();var Xe=Rg.exports;const Jr={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};pn(Jr);pn(Jr);var _g={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function t(){for(var l="",u=0;u<arguments.length;u++){var k=arguments[u];k&&(l=s(l,a.call(this,k)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var k in l)i.call(l,k)&&l[k]&&(u=s(u,this&&this[k]||k));return u}function s(l,u){return u?l?l+" "+u:l+u:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(_g);var W_=_g.exports;const Mn=$_(W_),z_="_borderbox_hicl4_1",Z_="_error_hicl4_4",X_="_warning_hicl4_7",Q_={borderbox:z_,error:Z_,warning:X_};Mn.bind(Q_);const eb="_aksjonspunkt_kn1hn_1",nb="_erAksjonspunktApent_kn1hn_4",rb="_erIkkeGodkjentAvBeslutter_kn1hn_8",tb={aksjonspunkt:eb,erAksjonspunktApent:nb,erIkkeGodkjentAvBeslutter:rb};Mn.bind(tb);const Qt=({dateString:e})=>Xe.jsx(eg,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(e)}),ab=pn(Jr),ni=({dateTimeString:e,separator:i="dash",year:t="numeric",month:a="2-digit",day:s="2-digit",hour:l="numeric",minute:u="numeric",second:k=void 0})=>{const v=()=>{switch(i){case"dash":return" - ";case"kl":return ab.formatMessage({id:"DateTimeLabel.Kl"})}};return Xe.jsxs(Xe.Fragment,{children:[Xe.jsx(eg,{value:new Date(e),day:s,month:a,year:t}),v(),Xe.jsx(xy,{value:new Date(e),hour:l,minute:u,second:k})]})};pn(Jr);const ib="_tooltip_h8akz_1",sb="_tooltiptext_h8akz_5",ob="_left_h8akz_22",lb="_top_h8akz_27",db="_right_h8akz_30",ub="_bottom_h8akz_34",kb="_showTooltip_h8akz_1",po={tooltip:ib,tooltiptext:sb,left:ob,top:lb,right:db,bottom:ub,showTooltip:kb},gb=Mn.bind(po),vb=({children:e,content:i,alignRight:t=!1,alignLeft:a=!1,alignTop:s=!1,alignBottom:l=!1})=>Xe.jsxs("div",{className:po.tooltip,children:[Xe.jsx("span",{className:gb(po.tooltiptext,{right:t||!a&&!s&&!l,left:a,top:s,bottom:l}),children:i}),e]}),Eb=Y.forwardRef(({onClick:e=()=>{},onMouseDown:i,tabIndex:t=-1,className:a="",src:s,srcHover:l,alt:u,onKeyDown:k,tooltip:v,alignTooltipLeft:m=!1},f)=>{const[p,c]=P.useState(!1),K=P.useCallback(()=>{c(!0)},[]),G=P.useCallback(()=>{c(!1)},[]),R=P.useCallback(q=>{(q.key==="Enter"||q.key===" ")&&(k&&k(q),q.preventDefault())},[]),N=l&&p?l:s,D=Xe.jsx("img",{ref:f,className:a,src:N,alt:u,tabIndex:t,onMouseOver:K,onMouseOut:G,onFocus:K,onBlur:G,onKeyDown:R,onMouseDown:i,onClick:e});return v?Xe.jsx(vb,{content:v,alignLeft:m,children:D}):D});Eb.displayName="Image";const fb="_flexColumnNew_1vdv1_1",mb={flexColumnNew:fb};Mn.bind(mb);const Tb="_flexRow_1yf0y_1",pb="_spaceBetween_1yf0y_9",hb="_alignItemsToBaseline_1yf0y_12",Ab="_alignItemsToFlexEnd_1yf0y_15",cb="_justifyItemsToFlexEnd_1yf0y_18",yb="_wrap_1yf0y_21",Rb={flexRow:Tb,spaceBetween:pb,alignItemsToBaseline:hb,alignItemsToFlexEnd:Ab,justifyItemsToFlexEnd:cb,wrap:yb};Mn.bind(Rb);const _b="_flexContainer_1dk1o_1",bb="_fluid_1dk1o_6",Nb="_fullHeight_1dk1o_9",Sb="_flexWrap_1dk1o_17",Ib={flexContainer:_b,fluid:bb,fullHeight:Nb,flexWrap:Sb};Mn.bind(Ib);pn(Jr);const Ob="_row_1lxv9_1",Lb="_harHover_1lxv9_4",Kb="_rowHeader_1lxv9_7",Db="_grayHeader_1lxv9_12",Pb="_rowContent_1lxv9_15",Fb="_selected_1lxv9_18",Mb="_bold_1lxv9_22",Gb="_dashedBottomBorder_1lxv9_25",Bb="_solidBottomBorder_1lxv9_28",jb="_apLeftBorder_1lxv9_31",wb="_noBottomBorder_1lxv9_34",bg={row:Ob,harHover:Lb,rowHeader:Kb,grayHeader:Db,rowContent:Pb,selected:Fb,bold:Mb,dashedBottomBorder:Gb,solidBottomBorder:Bb,apLeftBorder:jb,noBottomBorder:wb},Hb=Mn.bind(bg),Vb=(e,i,t)=>a=>{e&&a.button===0&&e(a,i,t)},Ng=e=>e.tagName==="TR"?e:Ng(e.parentElement),Zu=(e,i)=>{const t=Ng(e.target),a=(i?t.nextSibling:t.previousSibling)||t;a&&(a.focus(),e.preventDefault())},Ub=(e,i,t,a)=>s=>{s.key==="ArrowDown"?Zu(s,!0):s.key==="ArrowUp"?Zu(s,!1):i&&s.target.tagName!=="TD"&&(s.key==="Enter"||s.key===" ")?(i(s,t,a),s.preventDefault()):e&&i&&s.target.tagName!=="TD"&&s.key==="Shift"&&(i(s),s.preventDefault())},qb=e=>i=>{e&&i.target.tagName!=="TD"&&i.key==="Shift"&&(e(i),i.preventDefault())},xb=({id:e,model:i,isHeader:t=!1,hasGrayHeader:a=!1,onMouseDown:s,onKeyDown:l,children:u,noHover:k=!1,isSelected:v=!1,isBold:m=!1,isDashedBottomBorder:f=!1,isSolidBottomBorder:p=!1,isApLeftBorder:c=!1,className:K,useMultiselect:G=!1,hasNoBottomBorder:R=!1})=>Xe.jsx("tr",{className:Hb(K,bg.row,{rowHeader:t,grayHeader:a,rowContent:!t&&!k,selected:v,harHover:!k,bold:m,dashedBottomBorder:f,solidBottomBorder:p,noBottomBorder:R,apLeftBorder:c}),onMouseDown:Vb(s,e,i),onKeyDown:Ub(G,l,e,i),onKeyUp:G?qb(l):void 0,tabIndex:0,children:u}),Yb="_columnStyle_1f13u_1",Sg={columnStyle:Yb},Cb=Mn.bind(Sg),Zs=({children:e="",className:i,hidden:t=!1,colspanAll:a=!1})=>t?null:Xe.jsx("td",{className:Cb(Sg.columnStyle,i),colSpan:a?100:void 0,children:e}),$b="_table_2cnpl_1",Jb="_rowHover_2cnpl_25",Wb={table:$b,rowHover:Jb},zb=Mn.bind(Wb),Zb="EMPTY",Xb=Y.forwardRef(({headerTextCodes:e=[],headerColumnContent:i=[],classNameTable:t="",noHover:a=!1,hasGrayHeader:s=!1,children:l},u)=>Xe.jsxs("table",{ref:u,className:zb("table",{[t]:t,rowHover:!a}),children:[Xe.jsx("thead",{children:Xe.jsxs(xb,{isHeader:!0,noHover:a,hasGrayHeader:s,children:[e.map(k=>typeof k=="string"&&k.startsWith(Zb)?Xe.jsx(Zs,{children:" "},k):Xe.jsx(Zs,{children:Xe.jsx(Ie,{id:k})},k)),i.map(k=>Xe.jsx(Zs,{children:k},k.key))]})}),Xe.jsx("tbody",{children:Array.isArray(l)?Y.Children.map(l,k=>Y.cloneElement(k,{noHover:a})):Y.cloneElement(l,{noHover:a})})]}));Xb.displayName="Table";const Qb="_hidden_1pb4f_1",eN="_active_1pb4f_8",nN="_activeRow_1pb4f_15 _active_1pb4f_8",rN="_toggleIcon_1pb4f_19",tN="_colTopPadding_1pb4f_22",aN={hidden:Qb,active:eN,activeRow:nN,toggleIcon:rN,colTopPadding:tN};Mn.bind(aN);pn(Jr);const iN="_fourPx_qda5k_1",sN="_eightPx_qda5k_4",oN="_sixteenPx_qda5k_7",lN="_twentyPx_qda5k_10",dN="_thirtyTwoPx_qda5k_13",uN="_fourtyPx_qda5k_16",kN={fourPx:iN,eightPx:sN,sixteenPx:oN,twentyPx:lN,thirtyTwoPx:dN,fourtyPx:uN};Mn.bind(kN);pn(Jr);const gN="_divider_1t980_1",vN="_dividerParagraf_1t980_8",EN="_leftPanel_1t980_11",fN="_rightPanel_1t980_14",mN={divider:gN,dividerParagraf:vN,leftPanel:EN,rightPanel:fN};Mn.bind(mN);const TN="_editedIcon_ulrjl_1",pN={editedIcon:TN};Mn.bind(pN);var pi=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(pi||{});pi.BRUKERS_ANDEL;pi.FRILANS;pi.EGEN_NÆRING;var Uo=(e=>(e.ARBEID_TYPE="ArbeidType",e.AVSLAGSARSAK="Avslagsårsak",e.VENT_AARSAK="Venteårsak",e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.KLAGE_AVVIST_AARSAK="KlageAvvistÅrsak",e.KLAGE_MEDHOLD_ARSAK="KlageMedholdÅrsak",e.KLAGE_HJEMMEL="KlageHjemmel",e.OMSORGSOVERTAKELSE_VILKAR_TYPE="OmsorgsovertakelseVilkårType",e.MEDLEMSKAP_MANUELL_VURDERING_TYPE="MedlemskapManuellVurderingType",e.VERGE_TYPE="VergeType",e.LANDKODER="Landkoder",e.MORS_AKTIVITET="MorsAktivitet",e.VIRKSOMHET_TYPE="VirksomhetType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.PERSONSTATUS_TYPE="PersonstatusType",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.FORELDRE_TYPE="ForeldreType",e.FAMILIE_HENDELSE_TYPE="FamilieHendelseType",e.INNSYN_RESULTAT_TYPE="InnsynResultatType",e.BEHANDLING_TYPE="BehandlingType",e.OPPHOLD_ARSAK="OppholdÅrsak",e.UTSETTELSE_AARSAK_TYPE="UtsettelseÅrsak",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.UTTAK_PERIODE_TYPE="UttakPeriodeType",e.REVURDERING_VARSLING_ÅRSAK="RevurderingVarslingÅrsak",e.MANUELL_BEHANDLING_AARSAK="ManuellBehandlingÅrsak",e.PERIODE_RESULTAT_AARSAK="PeriodeResultatÅrsak",e.INNTEKTSKATEGORI="Inntektskategori",e.BEREGNINGSGRUNNLAG_ANDELTYPER="BeregningsgrunnlagAndeltype",e.AKTIVITET_STATUS="AktivitetStatus",e.ARBEIDSKATEGORI="Arbeidskategori",e.FAGSYSTEM="Fagsystem",e.REGION="Region",e.SIVILSTAND_TYPE="SivilstandType",e.FAKTA_OM_BEREGNING_TILFELLE="FaktaOmBeregningTilfelle",e.GRADERING_AVSLAG_AARSAK="GraderingAvslagÅrsak",e.SKJERMLENKE_TYPE="SkjermlenkeType",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.ARBEIDSFORHOLD_HANDLING_TYPE="ArbeidsforholdHandlingType",e.HISTORIKK_OPPLYSNING_TYPE="HistorikkOpplysningType",e.HISTORIKK_ENDRET_FELT_TYPE="HistorikkEndretFeltType",e.HISTORIKKINNSLAG_TYPE="HistorikkinnslagType",e.HISTORIKK_AKTOER="HistorikkAktør",e.BEHANDLING_STATUS="BehandlingStatus",e.FAR_SOEKER_TYPE="FarSøkerType",e.MEDLEMSKAP_DEKNING="MedlemskapDekningType",e.MEDLEMSKAP_TYPE="MedlemskapType",e.STOENADSKONTOTYPE="StønadskontoType",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.UTTAK_ARBEID_TYPE="UttakArbeidType",e.UTTAK_UTSETTELSE_TYPE="UttakUtsettelseType",e.VILKAR_TYPE="VilkårType",e.AKTSOMHET="Aktsomhet",e.VURDERING="AnnenVurdering",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.PERMISJONSBESKRIVELSE_TYPE="PermisjonsbeskrivelseType",e.VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG="VurderArbeidsforholdHistorikkinnslag",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.VURDER_AARSAK="VurderÅrsak",e.ANKE_OMGJOER_AARSAK="AnkeOmgjørÅrsak",e.AKTIVITETSKRAV_AVKLARING="KontrollerAktivitetskravAvklaring",e.OPPHOLDSTILLATELSE_TYPE="OppholdstillatelseType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e.FORDELING_PERIODE_KILDE="FordelingPeriodeKilde",e.RELASJONSROLLE_TYPE="RelasjonsRolleType",e.FAGSAK_MARKERING="FagsakMarkering",e.ADRESSE_TYPE="AdresseType",e.NATURAL_YTELSE_TYPE="NaturalYtelseType",e))(Uo||{});const hN=(e,i,t,a)=>{let s=e[i];if(!s||s.length===0)return"";const l=s.find(u=>u.kode===t);return l?l.navn:""},cr=({tittel:e,children:i})=>M.jsxs(Tt,{children:[M.jsx(jo,{size:"medium",children:e}),i]});cr.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Ig=({arbeidsgiverOpplysningerPerId:e,arbeidsgiverIdent:i})=>{var a;const t=er();return M.jsxs(cr,{tittel:t.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[M.jsxs("span",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),":"," ",((a=e[i])==null?void 0:a.navn)??"-"]}),M.jsxs("span",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",i]})]})};Ig.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const Og=({inntektsmelding:e,behandling:i,alleBehandlinger:t,alleKodeverk:a})=>{const s=er(),l=e.tilknyttedeBehandlingIder.includes(i.uuid),u=t.filter(m=>e.tilknyttedeBehandlingIder.includes(m.uuid)),k=(()=>{const m=u.length;return l&&m>1?M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):l?M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):m===0?M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),v=[...u].sort((m,f)=>new Date(m.opprettet).getTime()-new Date(f.opprettet).getTime());return M.jsxs(cr,{tittel:s.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[k,M.jsx(mo,{children:v.map(m=>{var f;return M.jsx(mo.Item,{children:M.jsxs(Tt,{children:[M.jsx("span",{children:(f=a.BehandlingType.find(({kode:p})=>p===m.type))==null?void 0:f.navn}),M.jsxs("span",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",M.jsx(ni,{dateTimeString:m.opprettet,separator:"kl"})]}),m.avsluttet?M.jsxs("span",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",M.jsx(ni,{dateTimeString:m.avsluttet,separator:"kl"})]}):null]})},m.uuid)})})]})};Og.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
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
}>`}]},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};var AN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ct={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xu;function yN(){if(Xu)return Ct;Xu=1;var e=Y,i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(k,v,m){var f,p={},c=null,K=null;m!==void 0&&(c=""+m),v.key!==void 0&&(c=""+v.key),v.ref!==void 0&&(K=v.ref);for(f in v)a.call(v,f)&&!l.hasOwnProperty(f)&&(p[f]=v[f]);if(k&&k.defaultProps)for(f in v=k.defaultProps,v)p[f]===void 0&&(p[f]=v[f]);return{$$typeof:i,type:k,key:c,ref:K,props:p,_owner:s.current}}return Ct.Fragment=t,Ct.jsx=u,Ct.jsxs=u,Ct}yN();var Lg={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(AN,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,l=/\d\d/,u=/\d\d?/,k=/\d*[^-_:/,()\s\d]+/,v={},m=function(N){return(N=+N)+(N>68?1900:2e3)},f=function(N){return function(D){this[N]=+D}},p=[/[+-]\d\d:?(\d\d)?|Z/,function(N){(this.zone||(this.zone={})).offset=function(D){if(!D||D==="Z")return 0;var q=D.match(/([+-]|\d\d)/g),L=60*q[1]+(+q[2]||0);return L===0?0:q[0]==="+"?-L:L}(N)}],c=function(N){var D=v[N];return D&&(D.indexOf?D:D.s.concat(D.f))},K=function(N,D){var q,L=v.meridiem;if(L){for(var Q=1;Q<=24;Q+=1)if(N.indexOf(L(Q,0,D))>-1){q=Q>12;break}}else q=N===(D?"pm":"PM");return q},G={A:[k,function(N){this.afternoon=K(N,!1)}],a:[k,function(N){this.afternoon=K(N,!0)}],Q:[s,function(N){this.month=3*(N-1)+1}],S:[s,function(N){this.milliseconds=100*+N}],SS:[l,function(N){this.milliseconds=10*+N}],SSS:[/\d{3}/,function(N){this.milliseconds=+N}],s:[u,f("seconds")],ss:[u,f("seconds")],m:[u,f("minutes")],mm:[u,f("minutes")],H:[u,f("hours")],h:[u,f("hours")],HH:[u,f("hours")],hh:[u,f("hours")],D:[u,f("day")],DD:[l,f("day")],Do:[k,function(N){var D=v.ordinal,q=N.match(/\d+/);if(this.day=q[0],D)for(var L=1;L<=31;L+=1)D(L).replace(/\[|\]/g,"")===N&&(this.day=L)}],w:[u,f("week")],ww:[l,f("week")],M:[u,f("month")],MM:[l,f("month")],MMM:[k,function(N){var D=c("months"),q=(c("monthsShort")||D.map(function(L){return L.slice(0,3)})).indexOf(N)+1;if(q<1)throw new Error;this.month=q%12||q}],MMMM:[k,function(N){var D=c("months").indexOf(N)+1;if(D<1)throw new Error;this.month=D%12||D}],Y:[/[+-]?\d+/,f("year")],YY:[l,function(N){this.year=m(N)}],YYYY:[/\d{4}/,f("year")],Z:p,ZZ:p};function R(N){var D,q;D=N,q=v&&v.formats;for(var L=(N=D.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(W,x,te){var le=te&&te.toUpperCase();return x||q[te]||t[te]||q[le].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(J,V,U){return V||U.slice(1)})})).match(a),Q=L.length,O=0;O<Q;O+=1){var H=L[O],I=G[H],b=I&&I[0],$=I&&I[1];L[O]=$?{regex:b,parser:$}:H.replace(/^\[|\]$/g,"")}return function(W){for(var x={},te=0,le=0;te<Q;te+=1){var J=L[te];if(typeof J=="string")le+=J.length;else{var V=J.regex,U=J.parser,Z=W.slice(le),C=V.exec(Z)[0];U.call(x,C),W=W.replace(C,"")}}return function(ie){var se=ie.afternoon;if(se!==void 0){var de=ie.hours;se?de<12&&(ie.hours+=12):de===12&&(ie.hours=0),delete ie.afternoon}}(x),x}}return function(N,D,q){q.p.customParseFormat=!0,N&&N.parseTwoDigitYear&&(m=N.parseTwoDigitYear);var L=D.prototype,Q=L.parse;L.parse=function(O){var H=O.date,I=O.utc,b=O.args;this.$u=I;var $=b[1];if(typeof $=="string"){var W=b[2]===!0,x=b[3]===!0,te=W||x,le=b[2];x&&(le=b[2]),v=this.$locale(),!W&&le&&(v=q.Ls[le]),this.$d=function(Z,C,ie,se){try{if(["x","X"].indexOf(C)>-1)return new Date((C==="X"?1e3:1)*Z);var de=R(C)(Z),Pe=de.year,Ge=de.month,Je=de.day,xe=de.hours,_n=de.minutes,Cn=de.seconds,bn=de.milliseconds,sn=de.zone,We=de.week,rn=new Date,hn=Je||(Pe||Ge?1:rn.getDate()),$n=Pe||rn.getFullYear(),on=0;Pe&&!Ge||(on=Ge>0?Ge-1:rn.getMonth());var rr,ct=xe||0,Nn=_n||0,zr=Cn||0,yt=bn||0;return sn?new Date(Date.UTC($n,on,hn,ct,Nn,zr,yt+60*sn.offset*1e3)):ie?new Date(Date.UTC($n,on,hn,ct,Nn,zr,yt)):(rr=new Date($n,on,hn,ct,Nn,zr,yt),We&&(rr=se(rr).week(We).toDate()),rr)}catch{return new Date("")}}(H,$,I,q),this.init(),le&&le!==!0&&(this.$L=this.locale(le).$L),te&&H!=this.format($)&&(this.$d=new Date("")),v={}}else if($ instanceof Array)for(var J=$.length,V=1;V<=J;V+=1){b[1]=$[V-1];var U=q.apply(this,b);if(U.isValid()){this.$d=U.$d,this.$L=U.$L,this.init();break}V===J&&(this.$d=new Date(""))}else Q.call(this,O)}}})})(Lg);var RN=Lg.exports;const _N=cN(RN);Kr.extend(_N);const bN="Dato må være før eller lik {limit}",NN="Dato må være etter eller lik {limit}",SN="Perioder kan ikke overlappe i tid",IN="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",ON="Dato må være lik {value}",LN="Dato må skrives slik: dd.mm.åååå",KN="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",DN="Tallet kan ikke inneholde mer enn to desimaler",PN="Tallet kan ikke ha desimaler",FN="Feltet kan kun inneholde tall",MN="Ugyldig fødselsnummer",GN="Feltet må være et fødselsnummer (11 siffer)",BN="Ugyldig organisasjonsnummer.",jN="Ugyldig organisasjonsnummer eller fødselsnummer",wN="Startdato må være før eller lik sluttdato",HN="Periode er utenfor opptjeningsperioden",VN="Ugyldig saksnummer eller fødselsnummer",UN="Feltet inneholder ugyldige tegn: {text}",qN="Feltet inneholder en ugyldig verdi: {value}",xN="Feltet kan ikke inneholde mellomrom",YN="Feltet må fylles ut",CN="Du kan skrive maksimalt {length} tegn",$N="Du må skrive minst {length} tegn",JN="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",WN="Feltet må være mindre eller lik {length}",zN="Feltet må være større eller lik {length}",ZN="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",XN={DateNotBeforeOrEqual:bN,DateNotAfterOrEqual:NN,DateRangesOverlapping:SN,DateRangesOverlappingPeriodTypes:IN,DatesNotEqual:ON,InvalidDate:LN,InvalidDatesInPeriod:KN,InvalidDecimal:DN,InvalidInteger:PN,InvalidNumber:FN,InvalidFodselsnr:MN,InvalidFodselsnrFormat:GN,InvalidOrgnr:BN,InvalidOrgnrOrFodselsnr:jN,InvalidPeriod:wN,InvalidPeriodRange:HN,InvalidSaksnrOrFodselsnrFormat:VN,InvalidText:UN,InvalidValue:qN,IllegalWhiteSpace:xN,IsRequired:YN,MaxLength:CN,MinLength:$N,MaxLengthOrFodselsnr:JN,MaxValue:WN,MinValue:zN,SammeFodselsnrSomSoker:ZN};pn(XN);var Kg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pg={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(Kg,function(){return function(t,a){a.prototype.isSameOrAfter=function(s,l){return this.isSame(s,l)||this.isAfter(s,l)}}})})(Pg);var QN=Pg.exports;const eS=Dg(QN);var Fg={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(Kg,function(){return function(t,a){a.prototype.isSameOrBefore=function(s,l){return this.isSame(s,l)||this.isBefore(s,l)}}})})(Fg);var nS=Fg.exports;const rS=Dg(nS);Kr.extend(eS);Kr.extend(rS);const hi={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"};pn(hi);pn(hi);const tS=(e,i)=>{const t=new Date(e.tom??pt),a=new Date(i.tom??pt);if(t>a)return-1;if(t<a)return 1;if(e.fom&&!i.fom)return-1;if(!e.fom&&i.fom)return 1;if(e.fom&&i.fom){const s=new Date(e.fom),l=new Date(i.fom);if(s>l)return-1;if(s<l)return 1}return 0};var ri={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ri.exports;(function(e,i){(function(){var t,a="4.17.21",s=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",k="Invalid `variable` option passed into `_.template`",v="__lodash_hash_undefined__",m=500,f="__lodash_placeholder__",p=1,c=2,K=4,G=1,R=2,N=1,D=2,q=4,L=8,Q=16,O=32,H=64,I=128,b=256,$=512,W=30,x="...",te=800,le=16,J=1,V=2,U=3,Z=1/0,C=9007199254740991,ie=17976931348623157e292,se=NaN,de=4294967295,Pe=de-1,Ge=de>>>1,Je=[["ary",I],["bind",N],["bindKey",D],["curry",L],["curryRight",Q],["flip",$],["partial",O],["partialRight",H],["rearg",b]],xe="[object Arguments]",_n="[object Array]",Cn="[object AsyncFunction]",bn="[object Boolean]",sn="[object Date]",We="[object DOMException]",rn="[object Error]",hn="[object Function]",$n="[object GeneratorFunction]",on="[object Map]",rr="[object Number]",ct="[object Null]",Nn="[object Object]",zr="[object Promise]",yt="[object Proxy]",Rt="[object RegExp]",Jn="[object Set]",_t="[object String]",sa="[object Symbol]",Dv="[object Undefined]",bt="[object WeakMap]",Pv="[object WeakSet]",Nt="[object ArrayBuffer]",Zr="[object DataView]",_i="[object Float32Array]",bi="[object Float64Array]",Ni="[object Int8Array]",Si="[object Int16Array]",Ii="[object Int32Array]",Oi="[object Uint8Array]",Li="[object Uint8ClampedArray]",Ki="[object Uint16Array]",Di="[object Uint32Array]",Fv=/\b__p \+= '';/g,Mv=/\b(__p \+=) '' \+/g,Gv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Wo=/&(?:amp|lt|gt|quot|#39);/g,zo=/[&<>"']/g,Bv=RegExp(Wo.source),jv=RegExp(zo.source),wv=/<%-([\s\S]+?)%>/g,Hv=/<%([\s\S]+?)%>/g,Zo=/<%=([\s\S]+?)%>/g,Vv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Uv=/^\w*$/,qv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pi=/[\\^$.*+?()[\]{}|]/g,xv=RegExp(Pi.source),Fi=/^\s+/,Yv=/\s/,Cv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,$v=/\{\n\/\* \[wrapped with (.+)\] \*/,Jv=/,? & /,Wv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,zv=/[()=,{}\[\]\/\s]/,Zv=/\\(\\)?/g,Xv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Xo=/\w*$/,Qv=/^[-+]0x[0-9a-f]+$/i,eE=/^0b[01]+$/i,nE=/^\[object .+?Constructor\]$/,rE=/^0o[0-7]+$/i,tE=/^(?:0|[1-9]\d*)$/,aE=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,oa=/($^)/,iE=/['\n\r\u2028\u2029\\]/g,la="\\ud800-\\udfff",sE="\\u0300-\\u036f",oE="\\ufe20-\\ufe2f",lE="\\u20d0-\\u20ff",Qo=sE+oE+lE,el="\\u2700-\\u27bf",nl="a-z\\xdf-\\xf6\\xf8-\\xff",dE="\\xac\\xb1\\xd7\\xf7",uE="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",kE="\\u2000-\\u206f",gE=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rl="A-Z\\xc0-\\xd6\\xd8-\\xde",tl="\\ufe0e\\ufe0f",al=dE+uE+kE+gE,Mi="['’]",vE="["+la+"]",il="["+al+"]",da="["+Qo+"]",sl="\\d+",EE="["+el+"]",ol="["+nl+"]",ll="[^"+la+al+sl+el+nl+rl+"]",Gi="\\ud83c[\\udffb-\\udfff]",fE="(?:"+da+"|"+Gi+")",dl="[^"+la+"]",Bi="(?:\\ud83c[\\udde6-\\uddff]){2}",ji="[\\ud800-\\udbff][\\udc00-\\udfff]",Xr="["+rl+"]",ul="\\u200d",kl="(?:"+ol+"|"+ll+")",mE="(?:"+Xr+"|"+ll+")",gl="(?:"+Mi+"(?:d|ll|m|re|s|t|ve))?",vl="(?:"+Mi+"(?:D|LL|M|RE|S|T|VE))?",El=fE+"?",fl="["+tl+"]?",TE="(?:"+ul+"(?:"+[dl,Bi,ji].join("|")+")"+fl+El+")*",pE="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",hE="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ml=fl+El+TE,AE="(?:"+[EE,Bi,ji].join("|")+")"+ml,cE="(?:"+[dl+da+"?",da,Bi,ji,vE].join("|")+")",yE=RegExp(Mi,"g"),RE=RegExp(da,"g"),wi=RegExp(Gi+"(?="+Gi+")|"+cE+ml,"g"),_E=RegExp([Xr+"?"+ol+"+"+gl+"(?="+[il,Xr,"$"].join("|")+")",mE+"+"+vl+"(?="+[il,Xr+kl,"$"].join("|")+")",Xr+"?"+kl+"+"+gl,Xr+"+"+vl,hE,pE,sl,AE].join("|"),"g"),bE=RegExp("["+ul+la+Qo+tl+"]"),NE=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,SE=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],IE=-1,Be={};Be[_i]=Be[bi]=Be[Ni]=Be[Si]=Be[Ii]=Be[Oi]=Be[Li]=Be[Ki]=Be[Di]=!0,Be[xe]=Be[_n]=Be[Nt]=Be[bn]=Be[Zr]=Be[sn]=Be[rn]=Be[hn]=Be[on]=Be[rr]=Be[Nn]=Be[Rt]=Be[Jn]=Be[_t]=Be[bt]=!1;var Me={};Me[xe]=Me[_n]=Me[Nt]=Me[Zr]=Me[bn]=Me[sn]=Me[_i]=Me[bi]=Me[Ni]=Me[Si]=Me[Ii]=Me[on]=Me[rr]=Me[Nn]=Me[Rt]=Me[Jn]=Me[_t]=Me[sa]=Me[Oi]=Me[Li]=Me[Ki]=Me[Di]=!0,Me[rn]=Me[hn]=Me[bt]=!1;var OE={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},LE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},KE={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},DE={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},PE=parseFloat,FE=parseInt,Tl=typeof Ut=="object"&&Ut&&Ut.Object===Object&&Ut,ME=typeof self=="object"&&self&&self.Object===Object&&self,tn=Tl||ME||Function("return this")(),Hi=i&&!i.nodeType&&i,Fr=Hi&&!0&&e&&!e.nodeType&&e,pl=Fr&&Fr.exports===Hi,Vi=pl&&Tl.process,Gn=function(){try{var y=Fr&&Fr.require&&Fr.require("util").types;return y||Vi&&Vi.binding&&Vi.binding("util")}catch{}}(),hl=Gn&&Gn.isArrayBuffer,Al=Gn&&Gn.isDate,cl=Gn&&Gn.isMap,yl=Gn&&Gn.isRegExp,Rl=Gn&&Gn.isSet,_l=Gn&&Gn.isTypedArray;function Sn(y,F,S){switch(S.length){case 0:return y.call(F);case 1:return y.call(F,S[0]);case 2:return y.call(F,S[0],S[1]);case 3:return y.call(F,S[0],S[1],S[2])}return y.apply(F,S)}function GE(y,F,S,X){for(var ge=-1,be=y==null?0:y.length;++ge<be;){var ze=y[ge];F(X,ze,S(ze),y)}return X}function Bn(y,F){for(var S=-1,X=y==null?0:y.length;++S<X&&F(y[S],S,y)!==!1;);return y}function BE(y,F){for(var S=y==null?0:y.length;S--&&F(y[S],S,y)!==!1;);return y}function bl(y,F){for(var S=-1,X=y==null?0:y.length;++S<X;)if(!F(y[S],S,y))return!1;return!0}function yr(y,F){for(var S=-1,X=y==null?0:y.length,ge=0,be=[];++S<X;){var ze=y[S];F(ze,S,y)&&(be[ge++]=ze)}return be}function ua(y,F){var S=y==null?0:y.length;return!!S&&Qr(y,F,0)>-1}function Ui(y,F,S){for(var X=-1,ge=y==null?0:y.length;++X<ge;)if(S(F,y[X]))return!0;return!1}function He(y,F){for(var S=-1,X=y==null?0:y.length,ge=Array(X);++S<X;)ge[S]=F(y[S],S,y);return ge}function Rr(y,F){for(var S=-1,X=F.length,ge=y.length;++S<X;)y[ge+S]=F[S];return y}function qi(y,F,S,X){var ge=-1,be=y==null?0:y.length;for(X&&be&&(S=y[++ge]);++ge<be;)S=F(S,y[ge],ge,y);return S}function jE(y,F,S,X){var ge=y==null?0:y.length;for(X&&ge&&(S=y[--ge]);ge--;)S=F(S,y[ge],ge,y);return S}function xi(y,F){for(var S=-1,X=y==null?0:y.length;++S<X;)if(F(y[S],S,y))return!0;return!1}var wE=Yi("length");function HE(y){return y.split("")}function VE(y){return y.match(Wv)||[]}function Nl(y,F,S){var X;return S(y,function(ge,be,ze){if(F(ge,be,ze))return X=be,!1}),X}function ka(y,F,S,X){for(var ge=y.length,be=S+(X?1:-1);X?be--:++be<ge;)if(F(y[be],be,y))return be;return-1}function Qr(y,F,S){return F===F?QE(y,F,S):ka(y,Sl,S)}function UE(y,F,S,X){for(var ge=S-1,be=y.length;++ge<be;)if(X(y[ge],F))return ge;return-1}function Sl(y){return y!==y}function Il(y,F){var S=y==null?0:y.length;return S?$i(y,F)/S:se}function Yi(y){return function(F){return F==null?t:F[y]}}function Ci(y){return function(F){return y==null?t:y[F]}}function Ol(y,F,S,X,ge){return ge(y,function(be,ze,Fe){S=X?(X=!1,be):F(S,be,ze,Fe)}),S}function qE(y,F){var S=y.length;for(y.sort(F);S--;)y[S]=y[S].value;return y}function $i(y,F){for(var S,X=-1,ge=y.length;++X<ge;){var be=F(y[X]);be!==t&&(S=S===t?be:S+be)}return S}function Ji(y,F){for(var S=-1,X=Array(y);++S<y;)X[S]=F(S);return X}function xE(y,F){return He(F,function(S){return[S,y[S]]})}function Ll(y){return y&&y.slice(0,Fl(y)+1).replace(Fi,"")}function In(y){return function(F){return y(F)}}function Wi(y,F){return He(F,function(S){return y[S]})}function St(y,F){return y.has(F)}function Kl(y,F){for(var S=-1,X=y.length;++S<X&&Qr(F,y[S],0)>-1;);return S}function Dl(y,F){for(var S=y.length;S--&&Qr(F,y[S],0)>-1;);return S}function YE(y,F){for(var S=y.length,X=0;S--;)y[S]===F&&++X;return X}var CE=Ci(OE),$E=Ci(LE);function JE(y){return"\\"+DE[y]}function WE(y,F){return y==null?t:y[F]}function et(y){return bE.test(y)}function zE(y){return NE.test(y)}function ZE(y){for(var F,S=[];!(F=y.next()).done;)S.push(F.value);return S}function zi(y){var F=-1,S=Array(y.size);return y.forEach(function(X,ge){S[++F]=[ge,X]}),S}function Pl(y,F){return function(S){return y(F(S))}}function _r(y,F){for(var S=-1,X=y.length,ge=0,be=[];++S<X;){var ze=y[S];(ze===F||ze===f)&&(y[S]=f,be[ge++]=S)}return be}function ga(y){var F=-1,S=Array(y.size);return y.forEach(function(X){S[++F]=X}),S}function XE(y){var F=-1,S=Array(y.size);return y.forEach(function(X){S[++F]=[X,X]}),S}function QE(y,F,S){for(var X=S-1,ge=y.length;++X<ge;)if(y[X]===F)return X;return-1}function ef(y,F,S){for(var X=S+1;X--;)if(y[X]===F)return X;return X}function nt(y){return et(y)?rf(y):wE(y)}function Wn(y){return et(y)?tf(y):HE(y)}function Fl(y){for(var F=y.length;F--&&Yv.test(y.charAt(F)););return F}var nf=Ci(KE);function rf(y){for(var F=wi.lastIndex=0;wi.test(y);)++F;return F}function tf(y){return y.match(wi)||[]}function af(y){return y.match(_E)||[]}var sf=function y(F){F=F==null?tn:rt.defaults(tn.Object(),F,rt.pick(tn,SE));var S=F.Array,X=F.Date,ge=F.Error,be=F.Function,ze=F.Math,Fe=F.Object,Zi=F.RegExp,of=F.String,jn=F.TypeError,va=S.prototype,lf=be.prototype,tt=Fe.prototype,Ea=F["__core-js_shared__"],fa=lf.toString,Le=tt.hasOwnProperty,df=0,Ml=function(){var n=/[^.]+$/.exec(Ea&&Ea.keys&&Ea.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),ma=tt.toString,uf=fa.call(Fe),kf=tn._,gf=Zi("^"+fa.call(Le).replace(Pi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ta=pl?F.Buffer:t,br=F.Symbol,pa=F.Uint8Array,Gl=Ta?Ta.allocUnsafe:t,ha=Pl(Fe.getPrototypeOf,Fe),Bl=Fe.create,jl=tt.propertyIsEnumerable,Aa=va.splice,wl=br?br.isConcatSpreadable:t,It=br?br.iterator:t,Mr=br?br.toStringTag:t,ca=function(){try{var n=Hr(Fe,"defineProperty");return n({},"",{}),n}catch{}}(),vf=F.clearTimeout!==tn.clearTimeout&&F.clearTimeout,Ef=X&&X.now!==tn.Date.now&&X.now,ff=F.setTimeout!==tn.setTimeout&&F.setTimeout,ya=ze.ceil,Ra=ze.floor,Xi=Fe.getOwnPropertySymbols,mf=Ta?Ta.isBuffer:t,Hl=F.isFinite,Tf=va.join,pf=Pl(Fe.keys,Fe),Ze=ze.max,ln=ze.min,hf=X.now,Af=F.parseInt,Vl=ze.random,cf=va.reverse,Qi=Hr(F,"DataView"),Ot=Hr(F,"Map"),es=Hr(F,"Promise"),at=Hr(F,"Set"),Lt=Hr(F,"WeakMap"),Kt=Hr(Fe,"create"),_a=Lt&&new Lt,it={},yf=Vr(Qi),Rf=Vr(Ot),_f=Vr(es),bf=Vr(at),Nf=Vr(Lt),ba=br?br.prototype:t,Dt=ba?ba.valueOf:t,Ul=ba?ba.toString:t;function E(n){if(qe(n)&&!ve(n)&&!(n instanceof he)){if(n instanceof wn)return n;if(Le.call(n,"__wrapped__"))return qd(n)}return new wn(n)}var st=function(){function n(){}return function(r){if(!Ve(r))return{};if(Bl)return Bl(r);n.prototype=r;var o=new n;return n.prototype=t,o}}();function Na(){}function wn(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}E.templateSettings={escape:wv,evaluate:Hv,interpolate:Zo,variable:"",imports:{_:E}},E.prototype=Na.prototype,E.prototype.constructor=E,wn.prototype=st(Na.prototype),wn.prototype.constructor=wn;function he(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=de,this.__views__=[]}function Sf(){var n=new he(this.__wrapped__);return n.__actions__=An(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=An(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=An(this.__views__),n}function If(){if(this.__filtered__){var n=new he(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Of(){var n=this.__wrapped__.value(),r=this.__dir__,o=ve(n),d=r<0,g=o?n.length:0,T=Vm(0,g,this.__views__),h=T.start,A=T.end,_=A-h,B=d?A:h-1,j=this.__iteratees__,w=j.length,z=0,re=ln(_,this.__takeCount__);if(!o||!d&&g==_&&re==_)return gd(n,this.__actions__);var ue=[];e:for(;_--&&z<re;){B+=r;for(var fe=-1,ke=n[B];++fe<w;){var Te=j[fe],Ae=Te.iteratee,Kn=Te.type,gn=Ae(ke);if(Kn==V)ke=gn;else if(!gn){if(Kn==J)continue e;break e}}ue[z++]=ke}return ue}he.prototype=st(Na.prototype),he.prototype.constructor=he;function Gr(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var d=n[r];this.set(d[0],d[1])}}function Lf(){this.__data__=Kt?Kt(null):{},this.size=0}function Kf(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function Df(n){var r=this.__data__;if(Kt){var o=r[n];return o===v?t:o}return Le.call(r,n)?r[n]:t}function Pf(n){var r=this.__data__;return Kt?r[n]!==t:Le.call(r,n)}function Ff(n,r){var o=this.__data__;return this.size+=this.has(n)?0:1,o[n]=Kt&&r===t?v:r,this}Gr.prototype.clear=Lf,Gr.prototype.delete=Kf,Gr.prototype.get=Df,Gr.prototype.has=Pf,Gr.prototype.set=Ff;function kr(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var d=n[r];this.set(d[0],d[1])}}function Mf(){this.__data__=[],this.size=0}function Gf(n){var r=this.__data__,o=Sa(r,n);if(o<0)return!1;var d=r.length-1;return o==d?r.pop():Aa.call(r,o,1),--this.size,!0}function Bf(n){var r=this.__data__,o=Sa(r,n);return o<0?t:r[o][1]}function jf(n){return Sa(this.__data__,n)>-1}function wf(n,r){var o=this.__data__,d=Sa(o,n);return d<0?(++this.size,o.push([n,r])):o[d][1]=r,this}kr.prototype.clear=Mf,kr.prototype.delete=Gf,kr.prototype.get=Bf,kr.prototype.has=jf,kr.prototype.set=wf;function gr(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var d=n[r];this.set(d[0],d[1])}}function Hf(){this.size=0,this.__data__={hash:new Gr,map:new(Ot||kr),string:new Gr}}function Vf(n){var r=wa(this,n).delete(n);return this.size-=r?1:0,r}function Uf(n){return wa(this,n).get(n)}function qf(n){return wa(this,n).has(n)}function xf(n,r){var o=wa(this,n),d=o.size;return o.set(n,r),this.size+=o.size==d?0:1,this}gr.prototype.clear=Hf,gr.prototype.delete=Vf,gr.prototype.get=Uf,gr.prototype.has=qf,gr.prototype.set=xf;function Br(n){var r=-1,o=n==null?0:n.length;for(this.__data__=new gr;++r<o;)this.add(n[r])}function Yf(n){return this.__data__.set(n,v),this}function Cf(n){return this.__data__.has(n)}Br.prototype.add=Br.prototype.push=Yf,Br.prototype.has=Cf;function zn(n){var r=this.__data__=new kr(n);this.size=r.size}function $f(){this.__data__=new kr,this.size=0}function Jf(n){var r=this.__data__,o=r.delete(n);return this.size=r.size,o}function Wf(n){return this.__data__.get(n)}function zf(n){return this.__data__.has(n)}function Zf(n,r){var o=this.__data__;if(o instanceof kr){var d=o.__data__;if(!Ot||d.length<s-1)return d.push([n,r]),this.size=++o.size,this;o=this.__data__=new gr(d)}return o.set(n,r),this.size=o.size,this}zn.prototype.clear=$f,zn.prototype.delete=Jf,zn.prototype.get=Wf,zn.prototype.has=zf,zn.prototype.set=Zf;function ql(n,r){var o=ve(n),d=!o&&Ur(n),g=!o&&!d&&Lr(n),T=!o&&!d&&!g&&ut(n),h=o||d||g||T,A=h?Ji(n.length,of):[],_=A.length;for(var B in n)(r||Le.call(n,B))&&!(h&&(B=="length"||g&&(B=="offset"||B=="parent")||T&&(B=="buffer"||B=="byteLength"||B=="byteOffset")||mr(B,_)))&&A.push(B);return A}function xl(n){var r=n.length;return r?n[ks(0,r-1)]:t}function Xf(n,r){return Ha(An(n),jr(r,0,n.length))}function Qf(n){return Ha(An(n))}function ns(n,r,o){(o!==t&&!Zn(n[r],o)||o===t&&!(r in n))&&vr(n,r,o)}function Pt(n,r,o){var d=n[r];(!(Le.call(n,r)&&Zn(d,o))||o===t&&!(r in n))&&vr(n,r,o)}function Sa(n,r){for(var o=n.length;o--;)if(Zn(n[o][0],r))return o;return-1}function em(n,r,o,d){return Nr(n,function(g,T,h){r(d,g,o(g),h)}),d}function Yl(n,r){return n&&ar(r,Qe(r),n)}function nm(n,r){return n&&ar(r,yn(r),n)}function vr(n,r,o){r=="__proto__"&&ca?ca(n,r,{configurable:!0,enumerable:!0,value:o,writable:!0}):n[r]=o}function rs(n,r){for(var o=-1,d=r.length,g=S(d),T=n==null;++o<d;)g[o]=T?t:Gs(n,r[o]);return g}function jr(n,r,o){return n===n&&(o!==t&&(n=n<=o?n:o),r!==t&&(n=n>=r?n:r)),n}function Hn(n,r,o,d,g,T){var h,A=r&p,_=r&c,B=r&K;if(o&&(h=g?o(n,d,g,T):o(n)),h!==t)return h;if(!Ve(n))return n;var j=ve(n);if(j){if(h=qm(n),!A)return An(n,h)}else{var w=dn(n),z=w==hn||w==$n;if(Lr(n))return fd(n,A);if(w==Nn||w==xe||z&&!g){if(h=_||z?{}:Fd(n),!A)return _?Dm(n,nm(h,n)):Km(n,Yl(h,n))}else{if(!Me[w])return g?n:{};h=xm(n,w,A)}}T||(T=new zn);var re=T.get(n);if(re)return re;T.set(n,h),du(n)?n.forEach(function(ke){h.add(Hn(ke,r,o,ke,n,T))}):ou(n)&&n.forEach(function(ke,Te){h.set(Te,Hn(ke,r,o,Te,n,T))});var ue=B?_?ys:cs:_?yn:Qe,fe=j?t:ue(n);return Bn(fe||n,function(ke,Te){fe&&(Te=ke,ke=n[Te]),Pt(h,Te,Hn(ke,r,o,Te,n,T))}),h}function rm(n){var r=Qe(n);return function(o){return Cl(o,n,r)}}function Cl(n,r,o){var d=o.length;if(n==null)return!d;for(n=Fe(n);d--;){var g=o[d],T=r[g],h=n[g];if(h===t&&!(g in n)||!T(h))return!1}return!0}function $l(n,r,o){if(typeof n!="function")throw new jn(u);return Ht(function(){n.apply(t,o)},r)}function Ft(n,r,o,d){var g=-1,T=ua,h=!0,A=n.length,_=[],B=r.length;if(!A)return _;o&&(r=He(r,In(o))),d?(T=Ui,h=!1):r.length>=s&&(T=St,h=!1,r=new Br(r));e:for(;++g<A;){var j=n[g],w=o==null?j:o(j);if(j=d||j!==0?j:0,h&&w===w){for(var z=B;z--;)if(r[z]===w)continue e;_.push(j)}else T(r,w,d)||_.push(j)}return _}var Nr=Ad(tr),Jl=Ad(as,!0);function tm(n,r){var o=!0;return Nr(n,function(d,g,T){return o=!!r(d,g,T),o}),o}function Ia(n,r,o){for(var d=-1,g=n.length;++d<g;){var T=n[d],h=r(T);if(h!=null&&(A===t?h===h&&!Ln(h):o(h,A)))var A=h,_=T}return _}function am(n,r,o,d){var g=n.length;for(o=Ee(o),o<0&&(o=-o>g?0:g+o),d=d===t||d>g?g:Ee(d),d<0&&(d+=g),d=o>d?0:ku(d);o<d;)n[o++]=r;return n}function Wl(n,r){var o=[];return Nr(n,function(d,g,T){r(d,g,T)&&o.push(d)}),o}function an(n,r,o,d,g){var T=-1,h=n.length;for(o||(o=Cm),g||(g=[]);++T<h;){var A=n[T];r>0&&o(A)?r>1?an(A,r-1,o,d,g):Rr(g,A):d||(g[g.length]=A)}return g}var ts=cd(),zl=cd(!0);function tr(n,r){return n&&ts(n,r,Qe)}function as(n,r){return n&&zl(n,r,Qe)}function Oa(n,r){return yr(r,function(o){return Tr(n[o])})}function wr(n,r){r=Ir(r,n);for(var o=0,d=r.length;n!=null&&o<d;)n=n[ir(r[o++])];return o&&o==d?n:t}function Zl(n,r,o){var d=r(n);return ve(n)?d:Rr(d,o(n))}function un(n){return n==null?n===t?Dv:ct:Mr&&Mr in Fe(n)?Hm(n):Qm(n)}function is(n,r){return n>r}function im(n,r){return n!=null&&Le.call(n,r)}function sm(n,r){return n!=null&&r in Fe(n)}function om(n,r,o){return n>=ln(r,o)&&n<Ze(r,o)}function ss(n,r,o){for(var d=o?Ui:ua,g=n[0].length,T=n.length,h=T,A=S(T),_=1/0,B=[];h--;){var j=n[h];h&&r&&(j=He(j,In(r))),_=ln(j.length,_),A[h]=!o&&(r||g>=120&&j.length>=120)?new Br(h&&j):t}j=n[0];var w=-1,z=A[0];e:for(;++w<g&&B.length<_;){var re=j[w],ue=r?r(re):re;if(re=o||re!==0?re:0,!(z?St(z,ue):d(B,ue,o))){for(h=T;--h;){var fe=A[h];if(!(fe?St(fe,ue):d(n[h],ue,o)))continue e}z&&z.push(ue),B.push(re)}}return B}function lm(n,r,o,d){return tr(n,function(g,T,h){r(d,o(g),T,h)}),d}function Mt(n,r,o){r=Ir(r,n),n=jd(n,r);var d=n==null?n:n[ir(Un(r))];return d==null?t:Sn(d,n,o)}function Xl(n){return qe(n)&&un(n)==xe}function dm(n){return qe(n)&&un(n)==Nt}function um(n){return qe(n)&&un(n)==sn}function Gt(n,r,o,d,g){return n===r?!0:n==null||r==null||!qe(n)&&!qe(r)?n!==n&&r!==r:km(n,r,o,d,Gt,g)}function km(n,r,o,d,g,T){var h=ve(n),A=ve(r),_=h?_n:dn(n),B=A?_n:dn(r);_=_==xe?Nn:_,B=B==xe?Nn:B;var j=_==Nn,w=B==Nn,z=_==B;if(z&&Lr(n)){if(!Lr(r))return!1;h=!0,j=!1}if(z&&!j)return T||(T=new zn),h||ut(n)?Kd(n,r,o,d,g,T):jm(n,r,_,o,d,g,T);if(!(o&G)){var re=j&&Le.call(n,"__wrapped__"),ue=w&&Le.call(r,"__wrapped__");if(re||ue){var fe=re?n.value():n,ke=ue?r.value():r;return T||(T=new zn),g(fe,ke,o,d,T)}}return z?(T||(T=new zn),wm(n,r,o,d,g,T)):!1}function gm(n){return qe(n)&&dn(n)==on}function os(n,r,o,d){var g=o.length,T=g,h=!d;if(n==null)return!T;for(n=Fe(n);g--;){var A=o[g];if(h&&A[2]?A[1]!==n[A[0]]:!(A[0]in n))return!1}for(;++g<T;){A=o[g];var _=A[0],B=n[_],j=A[1];if(h&&A[2]){if(B===t&&!(_ in n))return!1}else{var w=new zn;if(d)var z=d(B,j,_,n,r,w);if(!(z===t?Gt(j,B,G|R,d,w):z))return!1}}return!0}function Ql(n){if(!Ve(n)||Jm(n))return!1;var r=Tr(n)?gf:nE;return r.test(Vr(n))}function vm(n){return qe(n)&&un(n)==Rt}function Em(n){return qe(n)&&dn(n)==Jn}function fm(n){return qe(n)&&Ca(n.length)&&!!Be[un(n)]}function ed(n){return typeof n=="function"?n:n==null?Rn:typeof n=="object"?ve(n)?td(n[0],n[1]):rd(n):yu(n)}function ls(n){if(!wt(n))return pf(n);var r=[];for(var o in Fe(n))Le.call(n,o)&&o!="constructor"&&r.push(o);return r}function mm(n){if(!Ve(n))return Xm(n);var r=wt(n),o=[];for(var d in n)d=="constructor"&&(r||!Le.call(n,d))||o.push(d);return o}function ds(n,r){return n<r}function nd(n,r){var o=-1,d=cn(n)?S(n.length):[];return Nr(n,function(g,T,h){d[++o]=r(g,T,h)}),d}function rd(n){var r=_s(n);return r.length==1&&r[0][2]?Gd(r[0][0],r[0][1]):function(o){return o===n||os(o,n,r)}}function td(n,r){return Ns(n)&&Md(r)?Gd(ir(n),r):function(o){var d=Gs(o,n);return d===t&&d===r?Bs(o,n):Gt(r,d,G|R)}}function La(n,r,o,d,g){n!==r&&ts(r,function(T,h){if(g||(g=new zn),Ve(T))Tm(n,r,h,o,La,d,g);else{var A=d?d(Is(n,h),T,h+"",n,r,g):t;A===t&&(A=T),ns(n,h,A)}},yn)}function Tm(n,r,o,d,g,T,h){var A=Is(n,o),_=Is(r,o),B=h.get(_);if(B){ns(n,o,B);return}var j=T?T(A,_,o+"",n,r,h):t,w=j===t;if(w){var z=ve(_),re=!z&&Lr(_),ue=!z&&!re&&ut(_);j=_,z||re||ue?ve(A)?j=A:Ye(A)?j=An(A):re?(w=!1,j=fd(_,!0)):ue?(w=!1,j=md(_,!0)):j=[]:Vt(_)||Ur(_)?(j=A,Ur(A)?j=gu(A):(!Ve(A)||Tr(A))&&(j=Fd(_))):w=!1}w&&(h.set(_,j),g(j,_,d,T,h),h.delete(_)),ns(n,o,j)}function ad(n,r){var o=n.length;if(o)return r+=r<0?o:0,mr(r,o)?n[r]:t}function id(n,r,o){r.length?r=He(r,function(T){return ve(T)?function(h){return wr(h,T.length===1?T[0]:T)}:T}):r=[Rn];var d=-1;r=He(r,In(oe()));var g=nd(n,function(T,h,A){var _=He(r,function(B){return B(T)});return{criteria:_,index:++d,value:T}});return qE(g,function(T,h){return Lm(T,h,o)})}function pm(n,r){return sd(n,r,function(o,d){return Bs(n,d)})}function sd(n,r,o){for(var d=-1,g=r.length,T={};++d<g;){var h=r[d],A=wr(n,h);o(A,h)&&Bt(T,Ir(h,n),A)}return T}function hm(n){return function(r){return wr(r,n)}}function us(n,r,o,d){var g=d?UE:Qr,T=-1,h=r.length,A=n;for(n===r&&(r=An(r)),o&&(A=He(n,In(o)));++T<h;)for(var _=0,B=r[T],j=o?o(B):B;(_=g(A,j,_,d))>-1;)A!==n&&Aa.call(A,_,1),Aa.call(n,_,1);return n}function od(n,r){for(var o=n?r.length:0,d=o-1;o--;){var g=r[o];if(o==d||g!==T){var T=g;mr(g)?Aa.call(n,g,1):Es(n,g)}}return n}function ks(n,r){return n+Ra(Vl()*(r-n+1))}function Am(n,r,o,d){for(var g=-1,T=Ze(ya((r-n)/(o||1)),0),h=S(T);T--;)h[d?T:++g]=n,n+=o;return h}function gs(n,r){var o="";if(!n||r<1||r>C)return o;do r%2&&(o+=n),r=Ra(r/2),r&&(n+=n);while(r);return o}function me(n,r){return Os(Bd(n,r,Rn),n+"")}function cm(n){return xl(kt(n))}function ym(n,r){var o=kt(n);return Ha(o,jr(r,0,o.length))}function Bt(n,r,o,d){if(!Ve(n))return n;r=Ir(r,n);for(var g=-1,T=r.length,h=T-1,A=n;A!=null&&++g<T;){var _=ir(r[g]),B=o;if(_==="__proto__"||_==="constructor"||_==="prototype")return n;if(g!=h){var j=A[_];B=d?d(j,_,A):t,B===t&&(B=Ve(j)?j:mr(r[g+1])?[]:{})}Pt(A,_,B),A=A[_]}return n}var ld=_a?function(n,r){return _a.set(n,r),n}:Rn,Rm=ca?function(n,r){return ca(n,"toString",{configurable:!0,enumerable:!1,value:ws(r),writable:!0})}:Rn;function _m(n){return Ha(kt(n))}function Vn(n,r,o){var d=-1,g=n.length;r<0&&(r=-r>g?0:g+r),o=o>g?g:o,o<0&&(o+=g),g=r>o?0:o-r>>>0,r>>>=0;for(var T=S(g);++d<g;)T[d]=n[d+r];return T}function bm(n,r){var o;return Nr(n,function(d,g,T){return o=r(d,g,T),!o}),!!o}function Ka(n,r,o){var d=0,g=n==null?d:n.length;if(typeof r=="number"&&r===r&&g<=Ge){for(;d<g;){var T=d+g>>>1,h=n[T];h!==null&&!Ln(h)&&(o?h<=r:h<r)?d=T+1:g=T}return g}return vs(n,r,Rn,o)}function vs(n,r,o,d){var g=0,T=n==null?0:n.length;if(T===0)return 0;r=o(r);for(var h=r!==r,A=r===null,_=Ln(r),B=r===t;g<T;){var j=Ra((g+T)/2),w=o(n[j]),z=w!==t,re=w===null,ue=w===w,fe=Ln(w);if(h)var ke=d||ue;else B?ke=ue&&(d||z):A?ke=ue&&z&&(d||!re):_?ke=ue&&z&&!re&&(d||!fe):re||fe?ke=!1:ke=d?w<=r:w<r;ke?g=j+1:T=j}return ln(T,Pe)}function dd(n,r){for(var o=-1,d=n.length,g=0,T=[];++o<d;){var h=n[o],A=r?r(h):h;if(!o||!Zn(A,_)){var _=A;T[g++]=h===0?0:h}}return T}function ud(n){return typeof n=="number"?n:Ln(n)?se:+n}function On(n){if(typeof n=="string")return n;if(ve(n))return He(n,On)+"";if(Ln(n))return Ul?Ul.call(n):"";var r=n+"";return r=="0"&&1/n==-Z?"-0":r}function Sr(n,r,o){var d=-1,g=ua,T=n.length,h=!0,A=[],_=A;if(o)h=!1,g=Ui;else if(T>=s){var B=r?null:Gm(n);if(B)return ga(B);h=!1,g=St,_=new Br}else _=r?[]:A;e:for(;++d<T;){var j=n[d],w=r?r(j):j;if(j=o||j!==0?j:0,h&&w===w){for(var z=_.length;z--;)if(_[z]===w)continue e;r&&_.push(w),A.push(j)}else g(_,w,o)||(_!==A&&_.push(w),A.push(j))}return A}function Es(n,r){return r=Ir(r,n),n=jd(n,r),n==null||delete n[ir(Un(r))]}function kd(n,r,o,d){return Bt(n,r,o(wr(n,r)),d)}function Da(n,r,o,d){for(var g=n.length,T=d?g:-1;(d?T--:++T<g)&&r(n[T],T,n););return o?Vn(n,d?0:T,d?T+1:g):Vn(n,d?T+1:0,d?g:T)}function gd(n,r){var o=n;return o instanceof he&&(o=o.value()),qi(r,function(d,g){return g.func.apply(g.thisArg,Rr([d],g.args))},o)}function fs(n,r,o){var d=n.length;if(d<2)return d?Sr(n[0]):[];for(var g=-1,T=S(d);++g<d;)for(var h=n[g],A=-1;++A<d;)A!=g&&(T[g]=Ft(T[g]||h,n[A],r,o));return Sr(an(T,1),r,o)}function vd(n,r,o){for(var d=-1,g=n.length,T=r.length,h={};++d<g;){var A=d<T?r[d]:t;o(h,n[d],A)}return h}function ms(n){return Ye(n)?n:[]}function Ts(n){return typeof n=="function"?n:Rn}function Ir(n,r){return ve(n)?n:Ns(n,r)?[n]:Ud(Ne(n))}var Nm=me;function Or(n,r,o){var d=n.length;return o=o===t?d:o,!r&&o>=d?n:Vn(n,r,o)}var Ed=vf||function(n){return tn.clearTimeout(n)};function fd(n,r){if(r)return n.slice();var o=n.length,d=Gl?Gl(o):new n.constructor(o);return n.copy(d),d}function ps(n){var r=new n.constructor(n.byteLength);return new pa(r).set(new pa(n)),r}function Sm(n,r){var o=r?ps(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.byteLength)}function Im(n){var r=new n.constructor(n.source,Xo.exec(n));return r.lastIndex=n.lastIndex,r}function Om(n){return Dt?Fe(Dt.call(n)):{}}function md(n,r){var o=r?ps(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.length)}function Td(n,r){if(n!==r){var o=n!==t,d=n===null,g=n===n,T=Ln(n),h=r!==t,A=r===null,_=r===r,B=Ln(r);if(!A&&!B&&!T&&n>r||T&&h&&_&&!A&&!B||d&&h&&_||!o&&_||!g)return 1;if(!d&&!T&&!B&&n<r||B&&o&&g&&!d&&!T||A&&o&&g||!h&&g||!_)return-1}return 0}function Lm(n,r,o){for(var d=-1,g=n.criteria,T=r.criteria,h=g.length,A=o.length;++d<h;){var _=Td(g[d],T[d]);if(_){if(d>=A)return _;var B=o[d];return _*(B=="desc"?-1:1)}}return n.index-r.index}function pd(n,r,o,d){for(var g=-1,T=n.length,h=o.length,A=-1,_=r.length,B=Ze(T-h,0),j=S(_+B),w=!d;++A<_;)j[A]=r[A];for(;++g<h;)(w||g<T)&&(j[o[g]]=n[g]);for(;B--;)j[A++]=n[g++];return j}function hd(n,r,o,d){for(var g=-1,T=n.length,h=-1,A=o.length,_=-1,B=r.length,j=Ze(T-A,0),w=S(j+B),z=!d;++g<j;)w[g]=n[g];for(var re=g;++_<B;)w[re+_]=r[_];for(;++h<A;)(z||g<T)&&(w[re+o[h]]=n[g++]);return w}function An(n,r){var o=-1,d=n.length;for(r||(r=S(d));++o<d;)r[o]=n[o];return r}function ar(n,r,o,d){var g=!o;o||(o={});for(var T=-1,h=r.length;++T<h;){var A=r[T],_=d?d(o[A],n[A],A,o,n):t;_===t&&(_=n[A]),g?vr(o,A,_):Pt(o,A,_)}return o}function Km(n,r){return ar(n,bs(n),r)}function Dm(n,r){return ar(n,Dd(n),r)}function Pa(n,r){return function(o,d){var g=ve(o)?GE:em,T=r?r():{};return g(o,n,oe(d,2),T)}}function ot(n){return me(function(r,o){var d=-1,g=o.length,T=g>1?o[g-1]:t,h=g>2?o[2]:t;for(T=n.length>3&&typeof T=="function"?(g--,T):t,h&&kn(o[0],o[1],h)&&(T=g<3?t:T,g=1),r=Fe(r);++d<g;){var A=o[d];A&&n(r,A,d,T)}return r})}function Ad(n,r){return function(o,d){if(o==null)return o;if(!cn(o))return n(o,d);for(var g=o.length,T=r?g:-1,h=Fe(o);(r?T--:++T<g)&&d(h[T],T,h)!==!1;);return o}}function cd(n){return function(r,o,d){for(var g=-1,T=Fe(r),h=d(r),A=h.length;A--;){var _=h[n?A:++g];if(o(T[_],_,T)===!1)break}return r}}function Pm(n,r,o){var d=r&N,g=jt(n);function T(){var h=this&&this!==tn&&this instanceof T?g:n;return h.apply(d?o:this,arguments)}return T}function yd(n){return function(r){r=Ne(r);var o=et(r)?Wn(r):t,d=o?o[0]:r.charAt(0),g=o?Or(o,1).join(""):r.slice(1);return d[n]()+g}}function lt(n){return function(r){return qi(Au(hu(r).replace(yE,"")),n,"")}}function jt(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var o=st(n.prototype),d=n.apply(o,r);return Ve(d)?d:o}}function Fm(n,r,o){var d=jt(n);function g(){for(var T=arguments.length,h=S(T),A=T,_=dt(g);A--;)h[A]=arguments[A];var B=T<3&&h[0]!==_&&h[T-1]!==_?[]:_r(h,_);if(T-=B.length,T<o)return Sd(n,r,Fa,g.placeholder,t,h,B,t,t,o-T);var j=this&&this!==tn&&this instanceof g?d:n;return Sn(j,this,h)}return g}function Rd(n){return function(r,o,d){var g=Fe(r);if(!cn(r)){var T=oe(o,3);r=Qe(r),o=function(A){return T(g[A],A,g)}}var h=n(r,o,d);return h>-1?g[T?r[h]:h]:t}}function _d(n){return fr(function(r){var o=r.length,d=o,g=wn.prototype.thru;for(n&&r.reverse();d--;){var T=r[d];if(typeof T!="function")throw new jn(u);if(g&&!h&&ja(T)=="wrapper")var h=new wn([],!0)}for(d=h?d:o;++d<o;){T=r[d];var A=ja(T),_=A=="wrapper"?Rs(T):t;_&&Ss(_[0])&&_[1]==(I|L|O|b)&&!_[4].length&&_[9]==1?h=h[ja(_[0])].apply(h,_[3]):h=T.length==1&&Ss(T)?h[A]():h.thru(T)}return function(){var B=arguments,j=B[0];if(h&&B.length==1&&ve(j))return h.plant(j).value();for(var w=0,z=o?r[w].apply(this,B):j;++w<o;)z=r[w].call(this,z);return z}})}function Fa(n,r,o,d,g,T,h,A,_,B){var j=r&I,w=r&N,z=r&D,re=r&(L|Q),ue=r&$,fe=z?t:jt(n);function ke(){for(var Te=arguments.length,Ae=S(Te),Kn=Te;Kn--;)Ae[Kn]=arguments[Kn];if(re)var gn=dt(ke),Dn=YE(Ae,gn);if(d&&(Ae=pd(Ae,d,g,re)),T&&(Ae=hd(Ae,T,h,re)),Te-=Dn,re&&Te<B){var Ce=_r(Ae,gn);return Sd(n,r,Fa,ke.placeholder,o,Ae,Ce,A,_,B-Te)}var Xn=w?o:this,hr=z?Xn[n]:n;return Te=Ae.length,A?Ae=eT(Ae,A):ue&&Te>1&&Ae.reverse(),j&&_<Te&&(Ae.length=_),this&&this!==tn&&this instanceof ke&&(hr=fe||jt(hr)),hr.apply(Xn,Ae)}return ke}function bd(n,r){return function(o,d){return lm(o,n,r(d),{})}}function Ma(n,r){return function(o,d){var g;if(o===t&&d===t)return r;if(o!==t&&(g=o),d!==t){if(g===t)return d;typeof o=="string"||typeof d=="string"?(o=On(o),d=On(d)):(o=ud(o),d=ud(d)),g=n(o,d)}return g}}function hs(n){return fr(function(r){return r=He(r,In(oe())),me(function(o){var d=this;return n(r,function(g){return Sn(g,d,o)})})})}function Ga(n,r){r=r===t?" ":On(r);var o=r.length;if(o<2)return o?gs(r,n):r;var d=gs(r,ya(n/nt(r)));return et(r)?Or(Wn(d),0,n).join(""):d.slice(0,n)}function Mm(n,r,o,d){var g=r&N,T=jt(n);function h(){for(var A=-1,_=arguments.length,B=-1,j=d.length,w=S(j+_),z=this&&this!==tn&&this instanceof h?T:n;++B<j;)w[B]=d[B];for(;_--;)w[B++]=arguments[++A];return Sn(z,g?o:this,w)}return h}function Nd(n){return function(r,o,d){return d&&typeof d!="number"&&kn(r,o,d)&&(o=d=t),r=pr(r),o===t?(o=r,r=0):o=pr(o),d=d===t?r<o?1:-1:pr(d),Am(r,o,d,n)}}function Ba(n){return function(r,o){return typeof r=="string"&&typeof o=="string"||(r=qn(r),o=qn(o)),n(r,o)}}function Sd(n,r,o,d,g,T,h,A,_,B){var j=r&L,w=j?h:t,z=j?t:h,re=j?T:t,ue=j?t:T;r|=j?O:H,r&=~(j?H:O),r&q||(r&=~(N|D));var fe=[n,r,g,re,w,ue,z,A,_,B],ke=o.apply(t,fe);return Ss(n)&&wd(ke,fe),ke.placeholder=d,Hd(ke,n,r)}function As(n){var r=ze[n];return function(o,d){if(o=qn(o),d=d==null?0:ln(Ee(d),292),d&&Hl(o)){var g=(Ne(o)+"e").split("e"),T=r(g[0]+"e"+(+g[1]+d));return g=(Ne(T)+"e").split("e"),+(g[0]+"e"+(+g[1]-d))}return r(o)}}var Gm=at&&1/ga(new at([,-0]))[1]==Z?function(n){return new at(n)}:Us;function Id(n){return function(r){var o=dn(r);return o==on?zi(r):o==Jn?XE(r):xE(r,n(r))}}function Er(n,r,o,d,g,T,h,A){var _=r&D;if(!_&&typeof n!="function")throw new jn(u);var B=d?d.length:0;if(B||(r&=~(O|H),d=g=t),h=h===t?h:Ze(Ee(h),0),A=A===t?A:Ee(A),B-=g?g.length:0,r&H){var j=d,w=g;d=g=t}var z=_?t:Rs(n),re=[n,r,o,d,g,j,w,T,h,A];if(z&&Zm(re,z),n=re[0],r=re[1],o=re[2],d=re[3],g=re[4],A=re[9]=re[9]===t?_?0:n.length:Ze(re[9]-B,0),!A&&r&(L|Q)&&(r&=~(L|Q)),!r||r==N)var ue=Pm(n,r,o);else r==L||r==Q?ue=Fm(n,r,A):(r==O||r==(N|O))&&!g.length?ue=Mm(n,r,o,d):ue=Fa.apply(t,re);var fe=z?ld:wd;return Hd(fe(ue,re),n,r)}function Od(n,r,o,d){return n===t||Zn(n,tt[o])&&!Le.call(d,o)?r:n}function Ld(n,r,o,d,g,T){return Ve(n)&&Ve(r)&&(T.set(r,n),La(n,r,t,Ld,T),T.delete(r)),n}function Bm(n){return Vt(n)?t:n}function Kd(n,r,o,d,g,T){var h=o&G,A=n.length,_=r.length;if(A!=_&&!(h&&_>A))return!1;var B=T.get(n),j=T.get(r);if(B&&j)return B==r&&j==n;var w=-1,z=!0,re=o&R?new Br:t;for(T.set(n,r),T.set(r,n);++w<A;){var ue=n[w],fe=r[w];if(d)var ke=h?d(fe,ue,w,r,n,T):d(ue,fe,w,n,r,T);if(ke!==t){if(ke)continue;z=!1;break}if(re){if(!xi(r,function(Te,Ae){if(!St(re,Ae)&&(ue===Te||g(ue,Te,o,d,T)))return re.push(Ae)})){z=!1;break}}else if(!(ue===fe||g(ue,fe,o,d,T))){z=!1;break}}return T.delete(n),T.delete(r),z}function jm(n,r,o,d,g,T,h){switch(o){case Zr:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case Nt:return!(n.byteLength!=r.byteLength||!T(new pa(n),new pa(r)));case bn:case sn:case rr:return Zn(+n,+r);case rn:return n.name==r.name&&n.message==r.message;case Rt:case _t:return n==r+"";case on:var A=zi;case Jn:var _=d&G;if(A||(A=ga),n.size!=r.size&&!_)return!1;var B=h.get(n);if(B)return B==r;d|=R,h.set(n,r);var j=Kd(A(n),A(r),d,g,T,h);return h.delete(n),j;case sa:if(Dt)return Dt.call(n)==Dt.call(r)}return!1}function wm(n,r,o,d,g,T){var h=o&G,A=cs(n),_=A.length,B=cs(r),j=B.length;if(_!=j&&!h)return!1;for(var w=_;w--;){var z=A[w];if(!(h?z in r:Le.call(r,z)))return!1}var re=T.get(n),ue=T.get(r);if(re&&ue)return re==r&&ue==n;var fe=!0;T.set(n,r),T.set(r,n);for(var ke=h;++w<_;){z=A[w];var Te=n[z],Ae=r[z];if(d)var Kn=h?d(Ae,Te,z,r,n,T):d(Te,Ae,z,n,r,T);if(!(Kn===t?Te===Ae||g(Te,Ae,o,d,T):Kn)){fe=!1;break}ke||(ke=z=="constructor")}if(fe&&!ke){var gn=n.constructor,Dn=r.constructor;gn!=Dn&&"constructor"in n&&"constructor"in r&&!(typeof gn=="function"&&gn instanceof gn&&typeof Dn=="function"&&Dn instanceof Dn)&&(fe=!1)}return T.delete(n),T.delete(r),fe}function fr(n){return Os(Bd(n,t,Cd),n+"")}function cs(n){return Zl(n,Qe,bs)}function ys(n){return Zl(n,yn,Dd)}var Rs=_a?function(n){return _a.get(n)}:Us;function ja(n){for(var r=n.name+"",o=it[r],d=Le.call(it,r)?o.length:0;d--;){var g=o[d],T=g.func;if(T==null||T==n)return g.name}return r}function dt(n){var r=Le.call(E,"placeholder")?E:n;return r.placeholder}function oe(){var n=E.iteratee||Hs;return n=n===Hs?ed:n,arguments.length?n(arguments[0],arguments[1]):n}function wa(n,r){var o=n.__data__;return $m(r)?o[typeof r=="string"?"string":"hash"]:o.map}function _s(n){for(var r=Qe(n),o=r.length;o--;){var d=r[o],g=n[d];r[o]=[d,g,Md(g)]}return r}function Hr(n,r){var o=WE(n,r);return Ql(o)?o:t}function Hm(n){var r=Le.call(n,Mr),o=n[Mr];try{n[Mr]=t;var d=!0}catch{}var g=ma.call(n);return d&&(r?n[Mr]=o:delete n[Mr]),g}var bs=Xi?function(n){return n==null?[]:(n=Fe(n),yr(Xi(n),function(r){return jl.call(n,r)}))}:qs,Dd=Xi?function(n){for(var r=[];n;)Rr(r,bs(n)),n=ha(n);return r}:qs,dn=un;(Qi&&dn(new Qi(new ArrayBuffer(1)))!=Zr||Ot&&dn(new Ot)!=on||es&&dn(es.resolve())!=zr||at&&dn(new at)!=Jn||Lt&&dn(new Lt)!=bt)&&(dn=function(n){var r=un(n),o=r==Nn?n.constructor:t,d=o?Vr(o):"";if(d)switch(d){case yf:return Zr;case Rf:return on;case _f:return zr;case bf:return Jn;case Nf:return bt}return r});function Vm(n,r,o){for(var d=-1,g=o.length;++d<g;){var T=o[d],h=T.size;switch(T.type){case"drop":n+=h;break;case"dropRight":r-=h;break;case"take":r=ln(r,n+h);break;case"takeRight":n=Ze(n,r-h);break}}return{start:n,end:r}}function Um(n){var r=n.match($v);return r?r[1].split(Jv):[]}function Pd(n,r,o){r=Ir(r,n);for(var d=-1,g=r.length,T=!1;++d<g;){var h=ir(r[d]);if(!(T=n!=null&&o(n,h)))break;n=n[h]}return T||++d!=g?T:(g=n==null?0:n.length,!!g&&Ca(g)&&mr(h,g)&&(ve(n)||Ur(n)))}function qm(n){var r=n.length,o=new n.constructor(r);return r&&typeof n[0]=="string"&&Le.call(n,"index")&&(o.index=n.index,o.input=n.input),o}function Fd(n){return typeof n.constructor=="function"&&!wt(n)?st(ha(n)):{}}function xm(n,r,o){var d=n.constructor;switch(r){case Nt:return ps(n);case bn:case sn:return new d(+n);case Zr:return Sm(n,o);case _i:case bi:case Ni:case Si:case Ii:case Oi:case Li:case Ki:case Di:return md(n,o);case on:return new d;case rr:case _t:return new d(n);case Rt:return Im(n);case Jn:return new d;case sa:return Om(n)}}function Ym(n,r){var o=r.length;if(!o)return n;var d=o-1;return r[d]=(o>1?"& ":"")+r[d],r=r.join(o>2?", ":" "),n.replace(Cv,`{
/* [wrapped with `+r+`] */
`)}function Cm(n){return ve(n)||Ur(n)||!!(wl&&n&&n[wl])}function mr(n,r){var o=typeof n;return r=r??C,!!r&&(o=="number"||o!="symbol"&&tE.test(n))&&n>-1&&n%1==0&&n<r}function kn(n,r,o){if(!Ve(o))return!1;var d=typeof r;return(d=="number"?cn(o)&&mr(r,o.length):d=="string"&&r in o)?Zn(o[r],n):!1}function Ns(n,r){if(ve(n))return!1;var o=typeof n;return o=="number"||o=="symbol"||o=="boolean"||n==null||Ln(n)?!0:Uv.test(n)||!Vv.test(n)||r!=null&&n in Fe(r)}function $m(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function Ss(n){var r=ja(n),o=E[r];if(typeof o!="function"||!(r in he.prototype))return!1;if(n===o)return!0;var d=Rs(o);return!!d&&n===d[0]}function Jm(n){return!!Ml&&Ml in n}var Wm=Ea?Tr:xs;function wt(n){var r=n&&n.constructor,o=typeof r=="function"&&r.prototype||tt;return n===o}function Md(n){return n===n&&!Ve(n)}function Gd(n,r){return function(o){return o==null?!1:o[n]===r&&(r!==t||n in Fe(o))}}function zm(n){var r=xa(n,function(d){return o.size===m&&o.clear(),d}),o=r.cache;return r}function Zm(n,r){var o=n[1],d=r[1],g=o|d,T=g<(N|D|I),h=d==I&&o==L||d==I&&o==b&&n[7].length<=r[8]||d==(I|b)&&r[7].length<=r[8]&&o==L;if(!(T||h))return n;d&N&&(n[2]=r[2],g|=o&N?0:q);var A=r[3];if(A){var _=n[3];n[3]=_?pd(_,A,r[4]):A,n[4]=_?_r(n[3],f):r[4]}return A=r[5],A&&(_=n[5],n[5]=_?hd(_,A,r[6]):A,n[6]=_?_r(n[5],f):r[6]),A=r[7],A&&(n[7]=A),d&I&&(n[8]=n[8]==null?r[8]:ln(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=g,n}function Xm(n){var r=[];if(n!=null)for(var o in Fe(n))r.push(o);return r}function Qm(n){return ma.call(n)}function Bd(n,r,o){return r=Ze(r===t?n.length-1:r,0),function(){for(var d=arguments,g=-1,T=Ze(d.length-r,0),h=S(T);++g<T;)h[g]=d[r+g];g=-1;for(var A=S(r+1);++g<r;)A[g]=d[g];return A[r]=o(h),Sn(n,this,A)}}function jd(n,r){return r.length<2?n:wr(n,Vn(r,0,-1))}function eT(n,r){for(var o=n.length,d=ln(r.length,o),g=An(n);d--;){var T=r[d];n[d]=mr(T,o)?g[T]:t}return n}function Is(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var wd=Vd(ld),Ht=ff||function(n,r){return tn.setTimeout(n,r)},Os=Vd(Rm);function Hd(n,r,o){var d=r+"";return Os(n,Ym(d,nT(Um(d),o)))}function Vd(n){var r=0,o=0;return function(){var d=hf(),g=le-(d-o);if(o=d,g>0){if(++r>=te)return arguments[0]}else r=0;return n.apply(t,arguments)}}function Ha(n,r){var o=-1,d=n.length,g=d-1;for(r=r===t?d:r;++o<r;){var T=ks(o,g),h=n[T];n[T]=n[o],n[o]=h}return n.length=r,n}var Ud=zm(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(qv,function(o,d,g,T){r.push(g?T.replace(Zv,"$1"):d||o)}),r});function ir(n){if(typeof n=="string"||Ln(n))return n;var r=n+"";return r=="0"&&1/n==-Z?"-0":r}function Vr(n){if(n!=null){try{return fa.call(n)}catch{}try{return n+""}catch{}}return""}function nT(n,r){return Bn(Je,function(o){var d="_."+o[0];r&o[1]&&!ua(n,d)&&n.push(d)}),n.sort()}function qd(n){if(n instanceof he)return n.clone();var r=new wn(n.__wrapped__,n.__chain__);return r.__actions__=An(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function rT(n,r,o){(o?kn(n,r,o):r===t)?r=1:r=Ze(Ee(r),0);var d=n==null?0:n.length;if(!d||r<1)return[];for(var g=0,T=0,h=S(ya(d/r));g<d;)h[T++]=Vn(n,g,g+=r);return h}function tT(n){for(var r=-1,o=n==null?0:n.length,d=0,g=[];++r<o;){var T=n[r];T&&(g[d++]=T)}return g}function aT(){var n=arguments.length;if(!n)return[];for(var r=S(n-1),o=arguments[0],d=n;d--;)r[d-1]=arguments[d];return Rr(ve(o)?An(o):[o],an(r,1))}var iT=me(function(n,r){return Ye(n)?Ft(n,an(r,1,Ye,!0)):[]}),sT=me(function(n,r){var o=Un(r);return Ye(o)&&(o=t),Ye(n)?Ft(n,an(r,1,Ye,!0),oe(o,2)):[]}),oT=me(function(n,r){var o=Un(r);return Ye(o)&&(o=t),Ye(n)?Ft(n,an(r,1,Ye,!0),t,o):[]});function lT(n,r,o){var d=n==null?0:n.length;return d?(r=o||r===t?1:Ee(r),Vn(n,r<0?0:r,d)):[]}function dT(n,r,o){var d=n==null?0:n.length;return d?(r=o||r===t?1:Ee(r),r=d-r,Vn(n,0,r<0?0:r)):[]}function uT(n,r){return n&&n.length?Da(n,oe(r,3),!0,!0):[]}function kT(n,r){return n&&n.length?Da(n,oe(r,3),!0):[]}function gT(n,r,o,d){var g=n==null?0:n.length;return g?(o&&typeof o!="number"&&kn(n,r,o)&&(o=0,d=g),am(n,r,o,d)):[]}function xd(n,r,o){var d=n==null?0:n.length;if(!d)return-1;var g=o==null?0:Ee(o);return g<0&&(g=Ze(d+g,0)),ka(n,oe(r,3),g)}function Yd(n,r,o){var d=n==null?0:n.length;if(!d)return-1;var g=d-1;return o!==t&&(g=Ee(o),g=o<0?Ze(d+g,0):ln(g,d-1)),ka(n,oe(r,3),g,!0)}function Cd(n){var r=n==null?0:n.length;return r?an(n,1):[]}function vT(n){var r=n==null?0:n.length;return r?an(n,Z):[]}function ET(n,r){var o=n==null?0:n.length;return o?(r=r===t?1:Ee(r),an(n,r)):[]}function fT(n){for(var r=-1,o=n==null?0:n.length,d={};++r<o;){var g=n[r];d[g[0]]=g[1]}return d}function $d(n){return n&&n.length?n[0]:t}function mT(n,r,o){var d=n==null?0:n.length;if(!d)return-1;var g=o==null?0:Ee(o);return g<0&&(g=Ze(d+g,0)),Qr(n,r,g)}function TT(n){var r=n==null?0:n.length;return r?Vn(n,0,-1):[]}var pT=me(function(n){var r=He(n,ms);return r.length&&r[0]===n[0]?ss(r):[]}),hT=me(function(n){var r=Un(n),o=He(n,ms);return r===Un(o)?r=t:o.pop(),o.length&&o[0]===n[0]?ss(o,oe(r,2)):[]}),AT=me(function(n){var r=Un(n),o=He(n,ms);return r=typeof r=="function"?r:t,r&&o.pop(),o.length&&o[0]===n[0]?ss(o,t,r):[]});function cT(n,r){return n==null?"":Tf.call(n,r)}function Un(n){var r=n==null?0:n.length;return r?n[r-1]:t}function yT(n,r,o){var d=n==null?0:n.length;if(!d)return-1;var g=d;return o!==t&&(g=Ee(o),g=g<0?Ze(d+g,0):ln(g,d-1)),r===r?ef(n,r,g):ka(n,Sl,g,!0)}function RT(n,r){return n&&n.length?ad(n,Ee(r)):t}var _T=me(Jd);function Jd(n,r){return n&&n.length&&r&&r.length?us(n,r):n}function bT(n,r,o){return n&&n.length&&r&&r.length?us(n,r,oe(o,2)):n}function NT(n,r,o){return n&&n.length&&r&&r.length?us(n,r,t,o):n}var ST=fr(function(n,r){var o=n==null?0:n.length,d=rs(n,r);return od(n,He(r,function(g){return mr(g,o)?+g:g}).sort(Td)),d});function IT(n,r){var o=[];if(!(n&&n.length))return o;var d=-1,g=[],T=n.length;for(r=oe(r,3);++d<T;){var h=n[d];r(h,d,n)&&(o.push(h),g.push(d))}return od(n,g),o}function Ls(n){return n==null?n:cf.call(n)}function OT(n,r,o){var d=n==null?0:n.length;return d?(o&&typeof o!="number"&&kn(n,r,o)?(r=0,o=d):(r=r==null?0:Ee(r),o=o===t?d:Ee(o)),Vn(n,r,o)):[]}function LT(n,r){return Ka(n,r)}function KT(n,r,o){return vs(n,r,oe(o,2))}function DT(n,r){var o=n==null?0:n.length;if(o){var d=Ka(n,r);if(d<o&&Zn(n[d],r))return d}return-1}function PT(n,r){return Ka(n,r,!0)}function FT(n,r,o){return vs(n,r,oe(o,2),!0)}function MT(n,r){var o=n==null?0:n.length;if(o){var d=Ka(n,r,!0)-1;if(Zn(n[d],r))return d}return-1}function GT(n){return n&&n.length?dd(n):[]}function BT(n,r){return n&&n.length?dd(n,oe(r,2)):[]}function jT(n){var r=n==null?0:n.length;return r?Vn(n,1,r):[]}function wT(n,r,o){return n&&n.length?(r=o||r===t?1:Ee(r),Vn(n,0,r<0?0:r)):[]}function HT(n,r,o){var d=n==null?0:n.length;return d?(r=o||r===t?1:Ee(r),r=d-r,Vn(n,r<0?0:r,d)):[]}function VT(n,r){return n&&n.length?Da(n,oe(r,3),!1,!0):[]}function UT(n,r){return n&&n.length?Da(n,oe(r,3)):[]}var qT=me(function(n){return Sr(an(n,1,Ye,!0))}),xT=me(function(n){var r=Un(n);return Ye(r)&&(r=t),Sr(an(n,1,Ye,!0),oe(r,2))}),YT=me(function(n){var r=Un(n);return r=typeof r=="function"?r:t,Sr(an(n,1,Ye,!0),t,r)});function CT(n){return n&&n.length?Sr(n):[]}function $T(n,r){return n&&n.length?Sr(n,oe(r,2)):[]}function JT(n,r){return r=typeof r=="function"?r:t,n&&n.length?Sr(n,t,r):[]}function Ks(n){if(!(n&&n.length))return[];var r=0;return n=yr(n,function(o){if(Ye(o))return r=Ze(o.length,r),!0}),Ji(r,function(o){return He(n,Yi(o))})}function Wd(n,r){if(!(n&&n.length))return[];var o=Ks(n);return r==null?o:He(o,function(d){return Sn(r,t,d)})}var WT=me(function(n,r){return Ye(n)?Ft(n,r):[]}),zT=me(function(n){return fs(yr(n,Ye))}),ZT=me(function(n){var r=Un(n);return Ye(r)&&(r=t),fs(yr(n,Ye),oe(r,2))}),XT=me(function(n){var r=Un(n);return r=typeof r=="function"?r:t,fs(yr(n,Ye),t,r)}),QT=me(Ks);function ep(n,r){return vd(n||[],r||[],Pt)}function np(n,r){return vd(n||[],r||[],Bt)}var rp=me(function(n){var r=n.length,o=r>1?n[r-1]:t;return o=typeof o=="function"?(n.pop(),o):t,Wd(n,o)});function zd(n){var r=E(n);return r.__chain__=!0,r}function tp(n,r){return r(n),n}function Va(n,r){return r(n)}var ap=fr(function(n){var r=n.length,o=r?n[0]:0,d=this.__wrapped__,g=function(T){return rs(T,n)};return r>1||this.__actions__.length||!(d instanceof he)||!mr(o)?this.thru(g):(d=d.slice(o,+o+(r?1:0)),d.__actions__.push({func:Va,args:[g],thisArg:t}),new wn(d,this.__chain__).thru(function(T){return r&&!T.length&&T.push(t),T}))});function ip(){return zd(this)}function sp(){return new wn(this.value(),this.__chain__)}function op(){this.__values__===t&&(this.__values__=uu(this.value()));var n=this.__index__>=this.__values__.length,r=n?t:this.__values__[this.__index__++];return{done:n,value:r}}function lp(){return this}function dp(n){for(var r,o=this;o instanceof Na;){var d=qd(o);d.__index__=0,d.__values__=t,r?g.__wrapped__=d:r=d;var g=d;o=o.__wrapped__}return g.__wrapped__=n,r}function up(){var n=this.__wrapped__;if(n instanceof he){var r=n;return this.__actions__.length&&(r=new he(this)),r=r.reverse(),r.__actions__.push({func:Va,args:[Ls],thisArg:t}),new wn(r,this.__chain__)}return this.thru(Ls)}function kp(){return gd(this.__wrapped__,this.__actions__)}var gp=Pa(function(n,r,o){Le.call(n,o)?++n[o]:vr(n,o,1)});function vp(n,r,o){var d=ve(n)?bl:tm;return o&&kn(n,r,o)&&(r=t),d(n,oe(r,3))}function Ep(n,r){var o=ve(n)?yr:Wl;return o(n,oe(r,3))}var fp=Rd(xd),mp=Rd(Yd);function Tp(n,r){return an(Ua(n,r),1)}function pp(n,r){return an(Ua(n,r),Z)}function hp(n,r,o){return o=o===t?1:Ee(o),an(Ua(n,r),o)}function Zd(n,r){var o=ve(n)?Bn:Nr;return o(n,oe(r,3))}function Xd(n,r){var o=ve(n)?BE:Jl;return o(n,oe(r,3))}var Ap=Pa(function(n,r,o){Le.call(n,o)?n[o].push(r):vr(n,o,[r])});function cp(n,r,o,d){n=cn(n)?n:kt(n),o=o&&!d?Ee(o):0;var g=n.length;return o<0&&(o=Ze(g+o,0)),$a(n)?o<=g&&n.indexOf(r,o)>-1:!!g&&Qr(n,r,o)>-1}var yp=me(function(n,r,o){var d=-1,g=typeof r=="function",T=cn(n)?S(n.length):[];return Nr(n,function(h){T[++d]=g?Sn(r,h,o):Mt(h,r,o)}),T}),Rp=Pa(function(n,r,o){vr(n,o,r)});function Ua(n,r){var o=ve(n)?He:nd;return o(n,oe(r,3))}function _p(n,r,o,d){return n==null?[]:(ve(r)||(r=r==null?[]:[r]),o=d?t:o,ve(o)||(o=o==null?[]:[o]),id(n,r,o))}var bp=Pa(function(n,r,o){n[o?0:1].push(r)},function(){return[[],[]]});function Np(n,r,o){var d=ve(n)?qi:Ol,g=arguments.length<3;return d(n,oe(r,4),o,g,Nr)}function Sp(n,r,o){var d=ve(n)?jE:Ol,g=arguments.length<3;return d(n,oe(r,4),o,g,Jl)}function Ip(n,r){var o=ve(n)?yr:Wl;return o(n,Ya(oe(r,3)))}function Op(n){var r=ve(n)?xl:cm;return r(n)}function Lp(n,r,o){(o?kn(n,r,o):r===t)?r=1:r=Ee(r);var d=ve(n)?Xf:ym;return d(n,r)}function Kp(n){var r=ve(n)?Qf:_m;return r(n)}function Dp(n){if(n==null)return 0;if(cn(n))return $a(n)?nt(n):n.length;var r=dn(n);return r==on||r==Jn?n.size:ls(n).length}function Pp(n,r,o){var d=ve(n)?xi:bm;return o&&kn(n,r,o)&&(r=t),d(n,oe(r,3))}var Fp=me(function(n,r){if(n==null)return[];var o=r.length;return o>1&&kn(n,r[0],r[1])?r=[]:o>2&&kn(r[0],r[1],r[2])&&(r=[r[0]]),id(n,an(r,1),[])}),qa=Ef||function(){return tn.Date.now()};function Mp(n,r){if(typeof r!="function")throw new jn(u);return n=Ee(n),function(){if(--n<1)return r.apply(this,arguments)}}function Qd(n,r,o){return r=o?t:r,r=n&&r==null?n.length:r,Er(n,I,t,t,t,t,r)}function eu(n,r){var o;if(typeof r!="function")throw new jn(u);return n=Ee(n),function(){return--n>0&&(o=r.apply(this,arguments)),n<=1&&(r=t),o}}var Ds=me(function(n,r,o){var d=N;if(o.length){var g=_r(o,dt(Ds));d|=O}return Er(n,d,r,o,g)}),nu=me(function(n,r,o){var d=N|D;if(o.length){var g=_r(o,dt(nu));d|=O}return Er(r,d,n,o,g)});function ru(n,r,o){r=o?t:r;var d=Er(n,L,t,t,t,t,t,r);return d.placeholder=ru.placeholder,d}function tu(n,r,o){r=o?t:r;var d=Er(n,Q,t,t,t,t,t,r);return d.placeholder=tu.placeholder,d}function au(n,r,o){var d,g,T,h,A,_,B=0,j=!1,w=!1,z=!0;if(typeof n!="function")throw new jn(u);r=qn(r)||0,Ve(o)&&(j=!!o.leading,w="maxWait"in o,T=w?Ze(qn(o.maxWait)||0,r):T,z="trailing"in o?!!o.trailing:z);function re(Ce){var Xn=d,hr=g;return d=g=t,B=Ce,h=n.apply(hr,Xn),h}function ue(Ce){return B=Ce,A=Ht(Te,r),j?re(Ce):h}function fe(Ce){var Xn=Ce-_,hr=Ce-B,Ru=r-Xn;return w?ln(Ru,T-hr):Ru}function ke(Ce){var Xn=Ce-_,hr=Ce-B;return _===t||Xn>=r||Xn<0||w&&hr>=T}function Te(){var Ce=qa();if(ke(Ce))return Ae(Ce);A=Ht(Te,fe(Ce))}function Ae(Ce){return A=t,z&&d?re(Ce):(d=g=t,h)}function Kn(){A!==t&&Ed(A),B=0,d=_=g=A=t}function gn(){return A===t?h:Ae(qa())}function Dn(){var Ce=qa(),Xn=ke(Ce);if(d=arguments,g=this,_=Ce,Xn){if(A===t)return ue(_);if(w)return Ed(A),A=Ht(Te,r),re(_)}return A===t&&(A=Ht(Te,r)),h}return Dn.cancel=Kn,Dn.flush=gn,Dn}var Gp=me(function(n,r){return $l(n,1,r)}),Bp=me(function(n,r,o){return $l(n,qn(r)||0,o)});function jp(n){return Er(n,$)}function xa(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new jn(u);var o=function(){var d=arguments,g=r?r.apply(this,d):d[0],T=o.cache;if(T.has(g))return T.get(g);var h=n.apply(this,d);return o.cache=T.set(g,h)||T,h};return o.cache=new(xa.Cache||gr),o}xa.Cache=gr;function Ya(n){if(typeof n!="function")throw new jn(u);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function wp(n){return eu(2,n)}var Hp=Nm(function(n,r){r=r.length==1&&ve(r[0])?He(r[0],In(oe())):He(an(r,1),In(oe()));var o=r.length;return me(function(d){for(var g=-1,T=ln(d.length,o);++g<T;)d[g]=r[g].call(this,d[g]);return Sn(n,this,d)})}),Ps=me(function(n,r){var o=_r(r,dt(Ps));return Er(n,O,t,r,o)}),iu=me(function(n,r){var o=_r(r,dt(iu));return Er(n,H,t,r,o)}),Vp=fr(function(n,r){return Er(n,b,t,t,t,r)});function Up(n,r){if(typeof n!="function")throw new jn(u);return r=r===t?r:Ee(r),me(n,r)}function qp(n,r){if(typeof n!="function")throw new jn(u);return r=r==null?0:Ze(Ee(r),0),me(function(o){var d=o[r],g=Or(o,0,r);return d&&Rr(g,d),Sn(n,this,g)})}function xp(n,r,o){var d=!0,g=!0;if(typeof n!="function")throw new jn(u);return Ve(o)&&(d="leading"in o?!!o.leading:d,g="trailing"in o?!!o.trailing:g),au(n,r,{leading:d,maxWait:r,trailing:g})}function Yp(n){return Qd(n,1)}function Cp(n,r){return Ps(Ts(r),n)}function $p(){if(!arguments.length)return[];var n=arguments[0];return ve(n)?n:[n]}function Jp(n){return Hn(n,K)}function Wp(n,r){return r=typeof r=="function"?r:t,Hn(n,K,r)}function zp(n){return Hn(n,p|K)}function Zp(n,r){return r=typeof r=="function"?r:t,Hn(n,p|K,r)}function Xp(n,r){return r==null||Cl(n,r,Qe(r))}function Zn(n,r){return n===r||n!==n&&r!==r}var Qp=Ba(is),eh=Ba(function(n,r){return n>=r}),Ur=Xl(function(){return arguments}())?Xl:function(n){return qe(n)&&Le.call(n,"callee")&&!jl.call(n,"callee")},ve=S.isArray,nh=hl?In(hl):dm;function cn(n){return n!=null&&Ca(n.length)&&!Tr(n)}function Ye(n){return qe(n)&&cn(n)}function rh(n){return n===!0||n===!1||qe(n)&&un(n)==bn}var Lr=mf||xs,th=Al?In(Al):um;function ah(n){return qe(n)&&n.nodeType===1&&!Vt(n)}function ih(n){if(n==null)return!0;if(cn(n)&&(ve(n)||typeof n=="string"||typeof n.splice=="function"||Lr(n)||ut(n)||Ur(n)))return!n.length;var r=dn(n);if(r==on||r==Jn)return!n.size;if(wt(n))return!ls(n).length;for(var o in n)if(Le.call(n,o))return!1;return!0}function sh(n,r){return Gt(n,r)}function oh(n,r,o){o=typeof o=="function"?o:t;var d=o?o(n,r):t;return d===t?Gt(n,r,t,o):!!d}function Fs(n){if(!qe(n))return!1;var r=un(n);return r==rn||r==We||typeof n.message=="string"&&typeof n.name=="string"&&!Vt(n)}function lh(n){return typeof n=="number"&&Hl(n)}function Tr(n){if(!Ve(n))return!1;var r=un(n);return r==hn||r==$n||r==Cn||r==yt}function su(n){return typeof n=="number"&&n==Ee(n)}function Ca(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=C}function Ve(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function qe(n){return n!=null&&typeof n=="object"}var ou=cl?In(cl):gm;function dh(n,r){return n===r||os(n,r,_s(r))}function uh(n,r,o){return o=typeof o=="function"?o:t,os(n,r,_s(r),o)}function kh(n){return lu(n)&&n!=+n}function gh(n){if(Wm(n))throw new ge(l);return Ql(n)}function vh(n){return n===null}function Eh(n){return n==null}function lu(n){return typeof n=="number"||qe(n)&&un(n)==rr}function Vt(n){if(!qe(n)||un(n)!=Nn)return!1;var r=ha(n);if(r===null)return!0;var o=Le.call(r,"constructor")&&r.constructor;return typeof o=="function"&&o instanceof o&&fa.call(o)==uf}var Ms=yl?In(yl):vm;function fh(n){return su(n)&&n>=-C&&n<=C}var du=Rl?In(Rl):Em;function $a(n){return typeof n=="string"||!ve(n)&&qe(n)&&un(n)==_t}function Ln(n){return typeof n=="symbol"||qe(n)&&un(n)==sa}var ut=_l?In(_l):fm;function mh(n){return n===t}function Th(n){return qe(n)&&dn(n)==bt}function ph(n){return qe(n)&&un(n)==Pv}var hh=Ba(ds),Ah=Ba(function(n,r){return n<=r});function uu(n){if(!n)return[];if(cn(n))return $a(n)?Wn(n):An(n);if(It&&n[It])return ZE(n[It]());var r=dn(n),o=r==on?zi:r==Jn?ga:kt;return o(n)}function pr(n){if(!n)return n===0?n:0;if(n=qn(n),n===Z||n===-Z){var r=n<0?-1:1;return r*ie}return n===n?n:0}function Ee(n){var r=pr(n),o=r%1;return r===r?o?r-o:r:0}function ku(n){return n?jr(Ee(n),0,de):0}function qn(n){if(typeof n=="number")return n;if(Ln(n))return se;if(Ve(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=Ve(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=Ll(n);var o=eE.test(n);return o||rE.test(n)?FE(n.slice(2),o?2:8):Qv.test(n)?se:+n}function gu(n){return ar(n,yn(n))}function ch(n){return n?jr(Ee(n),-C,C):n===0?n:0}function Ne(n){return n==null?"":On(n)}var yh=ot(function(n,r){if(wt(r)||cn(r)){ar(r,Qe(r),n);return}for(var o in r)Le.call(r,o)&&Pt(n,o,r[o])}),vu=ot(function(n,r){ar(r,yn(r),n)}),Ja=ot(function(n,r,o,d){ar(r,yn(r),n,d)}),Rh=ot(function(n,r,o,d){ar(r,Qe(r),n,d)}),_h=fr(rs);function bh(n,r){var o=st(n);return r==null?o:Yl(o,r)}var Nh=me(function(n,r){n=Fe(n);var o=-1,d=r.length,g=d>2?r[2]:t;for(g&&kn(r[0],r[1],g)&&(d=1);++o<d;)for(var T=r[o],h=yn(T),A=-1,_=h.length;++A<_;){var B=h[A],j=n[B];(j===t||Zn(j,tt[B])&&!Le.call(n,B))&&(n[B]=T[B])}return n}),Sh=me(function(n){return n.push(t,Ld),Sn(Eu,t,n)});function Ih(n,r){return Nl(n,oe(r,3),tr)}function Oh(n,r){return Nl(n,oe(r,3),as)}function Lh(n,r){return n==null?n:ts(n,oe(r,3),yn)}function Kh(n,r){return n==null?n:zl(n,oe(r,3),yn)}function Dh(n,r){return n&&tr(n,oe(r,3))}function Ph(n,r){return n&&as(n,oe(r,3))}function Fh(n){return n==null?[]:Oa(n,Qe(n))}function Mh(n){return n==null?[]:Oa(n,yn(n))}function Gs(n,r,o){var d=n==null?t:wr(n,r);return d===t?o:d}function Gh(n,r){return n!=null&&Pd(n,r,im)}function Bs(n,r){return n!=null&&Pd(n,r,sm)}var Bh=bd(function(n,r,o){r!=null&&typeof r.toString!="function"&&(r=ma.call(r)),n[r]=o},ws(Rn)),jh=bd(function(n,r,o){r!=null&&typeof r.toString!="function"&&(r=ma.call(r)),Le.call(n,r)?n[r].push(o):n[r]=[o]},oe),wh=me(Mt);function Qe(n){return cn(n)?ql(n):ls(n)}function yn(n){return cn(n)?ql(n,!0):mm(n)}function Hh(n,r){var o={};return r=oe(r,3),tr(n,function(d,g,T){vr(o,r(d,g,T),d)}),o}function Vh(n,r){var o={};return r=oe(r,3),tr(n,function(d,g,T){vr(o,g,r(d,g,T))}),o}var Uh=ot(function(n,r,o){La(n,r,o)}),Eu=ot(function(n,r,o,d){La(n,r,o,d)}),qh=fr(function(n,r){var o={};if(n==null)return o;var d=!1;r=He(r,function(T){return T=Ir(T,n),d||(d=T.length>1),T}),ar(n,ys(n),o),d&&(o=Hn(o,p|c|K,Bm));for(var g=r.length;g--;)Es(o,r[g]);return o});function xh(n,r){return fu(n,Ya(oe(r)))}var Yh=fr(function(n,r){return n==null?{}:pm(n,r)});function fu(n,r){if(n==null)return{};var o=He(ys(n),function(d){return[d]});return r=oe(r),sd(n,o,function(d,g){return r(d,g[0])})}function Ch(n,r,o){r=Ir(r,n);var d=-1,g=r.length;for(g||(g=1,n=t);++d<g;){var T=n==null?t:n[ir(r[d])];T===t&&(d=g,T=o),n=Tr(T)?T.call(n):T}return n}function $h(n,r,o){return n==null?n:Bt(n,r,o)}function Jh(n,r,o,d){return d=typeof d=="function"?d:t,n==null?n:Bt(n,r,o,d)}var mu=Id(Qe),Tu=Id(yn);function Wh(n,r,o){var d=ve(n),g=d||Lr(n)||ut(n);if(r=oe(r,4),o==null){var T=n&&n.constructor;g?o=d?new T:[]:Ve(n)?o=Tr(T)?st(ha(n)):{}:o={}}return(g?Bn:tr)(n,function(h,A,_){return r(o,h,A,_)}),o}function zh(n,r){return n==null?!0:Es(n,r)}function Zh(n,r,o){return n==null?n:kd(n,r,Ts(o))}function Xh(n,r,o,d){return d=typeof d=="function"?d:t,n==null?n:kd(n,r,Ts(o),d)}function kt(n){return n==null?[]:Wi(n,Qe(n))}function Qh(n){return n==null?[]:Wi(n,yn(n))}function eA(n,r,o){return o===t&&(o=r,r=t),o!==t&&(o=qn(o),o=o===o?o:0),r!==t&&(r=qn(r),r=r===r?r:0),jr(qn(n),r,o)}function nA(n,r,o){return r=pr(r),o===t?(o=r,r=0):o=pr(o),n=qn(n),om(n,r,o)}function rA(n,r,o){if(o&&typeof o!="boolean"&&kn(n,r,o)&&(r=o=t),o===t&&(typeof r=="boolean"?(o=r,r=t):typeof n=="boolean"&&(o=n,n=t)),n===t&&r===t?(n=0,r=1):(n=pr(n),r===t?(r=n,n=0):r=pr(r)),n>r){var d=n;n=r,r=d}if(o||n%1||r%1){var g=Vl();return ln(n+g*(r-n+PE("1e-"+((g+"").length-1))),r)}return ks(n,r)}var tA=lt(function(n,r,o){return r=r.toLowerCase(),n+(o?pu(r):r)});function pu(n){return js(Ne(n).toLowerCase())}function hu(n){return n=Ne(n),n&&n.replace(aE,CE).replace(RE,"")}function aA(n,r,o){n=Ne(n),r=On(r);var d=n.length;o=o===t?d:jr(Ee(o),0,d);var g=o;return o-=r.length,o>=0&&n.slice(o,g)==r}function iA(n){return n=Ne(n),n&&jv.test(n)?n.replace(zo,$E):n}function sA(n){return n=Ne(n),n&&xv.test(n)?n.replace(Pi,"\\$&"):n}var oA=lt(function(n,r,o){return n+(o?"-":"")+r.toLowerCase()}),lA=lt(function(n,r,o){return n+(o?" ":"")+r.toLowerCase()}),dA=yd("toLowerCase");function uA(n,r,o){n=Ne(n),r=Ee(r);var d=r?nt(n):0;if(!r||d>=r)return n;var g=(r-d)/2;return Ga(Ra(g),o)+n+Ga(ya(g),o)}function kA(n,r,o){n=Ne(n),r=Ee(r);var d=r?nt(n):0;return r&&d<r?n+Ga(r-d,o):n}function gA(n,r,o){n=Ne(n),r=Ee(r);var d=r?nt(n):0;return r&&d<r?Ga(r-d,o)+n:n}function vA(n,r,o){return o||r==null?r=0:r&&(r=+r),Af(Ne(n).replace(Fi,""),r||0)}function EA(n,r,o){return(o?kn(n,r,o):r===t)?r=1:r=Ee(r),gs(Ne(n),r)}function fA(){var n=arguments,r=Ne(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var mA=lt(function(n,r,o){return n+(o?"_":"")+r.toLowerCase()});function TA(n,r,o){return o&&typeof o!="number"&&kn(n,r,o)&&(r=o=t),o=o===t?de:o>>>0,o?(n=Ne(n),n&&(typeof r=="string"||r!=null&&!Ms(r))&&(r=On(r),!r&&et(n))?Or(Wn(n),0,o):n.split(r,o)):[]}var pA=lt(function(n,r,o){return n+(o?" ":"")+js(r)});function hA(n,r,o){return n=Ne(n),o=o==null?0:jr(Ee(o),0,n.length),r=On(r),n.slice(o,o+r.length)==r}function AA(n,r,o){var d=E.templateSettings;o&&kn(n,r,o)&&(r=t),n=Ne(n),r=Ja({},r,d,Od);var g=Ja({},r.imports,d.imports,Od),T=Qe(g),h=Wi(g,T),A,_,B=0,j=r.interpolate||oa,w="__p += '",z=Zi((r.escape||oa).source+"|"+j.source+"|"+(j===Zo?Xv:oa).source+"|"+(r.evaluate||oa).source+"|$","g"),re="//# sourceURL="+(Le.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++IE+"]")+`
`;n.replace(z,function(ke,Te,Ae,Kn,gn,Dn){return Ae||(Ae=Kn),w+=n.slice(B,Dn).replace(iE,JE),Te&&(A=!0,w+=`' +
__e(`+Te+`) +
'`),gn&&(_=!0,w+=`';
`+gn+`;
__p += '`),Ae&&(w+=`' +
((__t = (`+Ae+`)) == null ? '' : __t) +
'`),B=Dn+ke.length,ke}),w+=`';
`;var ue=Le.call(r,"variable")&&r.variable;if(!ue)w=`with (obj) {
`+w+`
}
`;else if(zv.test(ue))throw new ge(k);w=(_?w.replace(Fv,""):w).replace(Mv,"$1").replace(Gv,"$1;"),w="function("+(ue||"obj")+`) {
`+(ue?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(A?", __e = _.escape":"")+(_?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+w+`return __p
}`;var fe=cu(function(){return be(T,re+"return "+w).apply(t,h)});if(fe.source=w,Fs(fe))throw fe;return fe}function cA(n){return Ne(n).toLowerCase()}function yA(n){return Ne(n).toUpperCase()}function RA(n,r,o){if(n=Ne(n),n&&(o||r===t))return Ll(n);if(!n||!(r=On(r)))return n;var d=Wn(n),g=Wn(r),T=Kl(d,g),h=Dl(d,g)+1;return Or(d,T,h).join("")}function _A(n,r,o){if(n=Ne(n),n&&(o||r===t))return n.slice(0,Fl(n)+1);if(!n||!(r=On(r)))return n;var d=Wn(n),g=Dl(d,Wn(r))+1;return Or(d,0,g).join("")}function bA(n,r,o){if(n=Ne(n),n&&(o||r===t))return n.replace(Fi,"");if(!n||!(r=On(r)))return n;var d=Wn(n),g=Kl(d,Wn(r));return Or(d,g).join("")}function NA(n,r){var o=W,d=x;if(Ve(r)){var g="separator"in r?r.separator:g;o="length"in r?Ee(r.length):o,d="omission"in r?On(r.omission):d}n=Ne(n);var T=n.length;if(et(n)){var h=Wn(n);T=h.length}if(o>=T)return n;var A=o-nt(d);if(A<1)return d;var _=h?Or(h,0,A).join(""):n.slice(0,A);if(g===t)return _+d;if(h&&(A+=_.length-A),Ms(g)){if(n.slice(A).search(g)){var B,j=_;for(g.global||(g=Zi(g.source,Ne(Xo.exec(g))+"g")),g.lastIndex=0;B=g.exec(j);)var w=B.index;_=_.slice(0,w===t?A:w)}}else if(n.indexOf(On(g),A)!=A){var z=_.lastIndexOf(g);z>-1&&(_=_.slice(0,z))}return _+d}function SA(n){return n=Ne(n),n&&Bv.test(n)?n.replace(Wo,nf):n}var IA=lt(function(n,r,o){return n+(o?" ":"")+r.toUpperCase()}),js=yd("toUpperCase");function Au(n,r,o){return n=Ne(n),r=o?t:r,r===t?zE(n)?af(n):VE(n):n.match(r)||[]}var cu=me(function(n,r){try{return Sn(n,t,r)}catch(o){return Fs(o)?o:new ge(o)}}),OA=fr(function(n,r){return Bn(r,function(o){o=ir(o),vr(n,o,Ds(n[o],n))}),n});function LA(n){var r=n==null?0:n.length,o=oe();return n=r?He(n,function(d){if(typeof d[1]!="function")throw new jn(u);return[o(d[0]),d[1]]}):[],me(function(d){for(var g=-1;++g<r;){var T=n[g];if(Sn(T[0],this,d))return Sn(T[1],this,d)}})}function KA(n){return rm(Hn(n,p))}function ws(n){return function(){return n}}function DA(n,r){return n==null||n!==n?r:n}var PA=_d(),FA=_d(!0);function Rn(n){return n}function Hs(n){return ed(typeof n=="function"?n:Hn(n,p))}function MA(n){return rd(Hn(n,p))}function GA(n,r){return td(n,Hn(r,p))}var BA=me(function(n,r){return function(o){return Mt(o,n,r)}}),jA=me(function(n,r){return function(o){return Mt(n,o,r)}});function Vs(n,r,o){var d=Qe(r),g=Oa(r,d);o==null&&!(Ve(r)&&(g.length||!d.length))&&(o=r,r=n,n=this,g=Oa(r,Qe(r)));var T=!(Ve(o)&&"chain"in o)||!!o.chain,h=Tr(n);return Bn(g,function(A){var _=r[A];n[A]=_,h&&(n.prototype[A]=function(){var B=this.__chain__;if(T||B){var j=n(this.__wrapped__),w=j.__actions__=An(this.__actions__);return w.push({func:_,args:arguments,thisArg:n}),j.__chain__=B,j}return _.apply(n,Rr([this.value()],arguments))})}),n}function wA(){return tn._===this&&(tn._=kf),this}function Us(){}function HA(n){return n=Ee(n),me(function(r){return ad(r,n)})}var VA=hs(He),UA=hs(bl),qA=hs(xi);function yu(n){return Ns(n)?Yi(ir(n)):hm(n)}function xA(n){return function(r){return n==null?t:wr(n,r)}}var YA=Nd(),CA=Nd(!0);function qs(){return[]}function xs(){return!1}function $A(){return{}}function JA(){return""}function WA(){return!0}function zA(n,r){if(n=Ee(n),n<1||n>C)return[];var o=de,d=ln(n,de);r=oe(r),n-=de;for(var g=Ji(d,r);++o<n;)r(o);return g}function ZA(n){return ve(n)?He(n,ir):Ln(n)?[n]:An(Ud(Ne(n)))}function XA(n){var r=++df;return Ne(n)+r}var QA=Ma(function(n,r){return n+r},0),ec=As("ceil"),nc=Ma(function(n,r){return n/r},1),rc=As("floor");function tc(n){return n&&n.length?Ia(n,Rn,is):t}function ac(n,r){return n&&n.length?Ia(n,oe(r,2),is):t}function ic(n){return Il(n,Rn)}function sc(n,r){return Il(n,oe(r,2))}function oc(n){return n&&n.length?Ia(n,Rn,ds):t}function lc(n,r){return n&&n.length?Ia(n,oe(r,2),ds):t}var dc=Ma(function(n,r){return n*r},1),uc=As("round"),kc=Ma(function(n,r){return n-r},0);function gc(n){return n&&n.length?$i(n,Rn):0}function vc(n,r){return n&&n.length?$i(n,oe(r,2)):0}return E.after=Mp,E.ary=Qd,E.assign=yh,E.assignIn=vu,E.assignInWith=Ja,E.assignWith=Rh,E.at=_h,E.before=eu,E.bind=Ds,E.bindAll=OA,E.bindKey=nu,E.castArray=$p,E.chain=zd,E.chunk=rT,E.compact=tT,E.concat=aT,E.cond=LA,E.conforms=KA,E.constant=ws,E.countBy=gp,E.create=bh,E.curry=ru,E.curryRight=tu,E.debounce=au,E.defaults=Nh,E.defaultsDeep=Sh,E.defer=Gp,E.delay=Bp,E.difference=iT,E.differenceBy=sT,E.differenceWith=oT,E.drop=lT,E.dropRight=dT,E.dropRightWhile=uT,E.dropWhile=kT,E.fill=gT,E.filter=Ep,E.flatMap=Tp,E.flatMapDeep=pp,E.flatMapDepth=hp,E.flatten=Cd,E.flattenDeep=vT,E.flattenDepth=ET,E.flip=jp,E.flow=PA,E.flowRight=FA,E.fromPairs=fT,E.functions=Fh,E.functionsIn=Mh,E.groupBy=Ap,E.initial=TT,E.intersection=pT,E.intersectionBy=hT,E.intersectionWith=AT,E.invert=Bh,E.invertBy=jh,E.invokeMap=yp,E.iteratee=Hs,E.keyBy=Rp,E.keys=Qe,E.keysIn=yn,E.map=Ua,E.mapKeys=Hh,E.mapValues=Vh,E.matches=MA,E.matchesProperty=GA,E.memoize=xa,E.merge=Uh,E.mergeWith=Eu,E.method=BA,E.methodOf=jA,E.mixin=Vs,E.negate=Ya,E.nthArg=HA,E.omit=qh,E.omitBy=xh,E.once=wp,E.orderBy=_p,E.over=VA,E.overArgs=Hp,E.overEvery=UA,E.overSome=qA,E.partial=Ps,E.partialRight=iu,E.partition=bp,E.pick=Yh,E.pickBy=fu,E.property=yu,E.propertyOf=xA,E.pull=_T,E.pullAll=Jd,E.pullAllBy=bT,E.pullAllWith=NT,E.pullAt=ST,E.range=YA,E.rangeRight=CA,E.rearg=Vp,E.reject=Ip,E.remove=IT,E.rest=Up,E.reverse=Ls,E.sampleSize=Lp,E.set=$h,E.setWith=Jh,E.shuffle=Kp,E.slice=OT,E.sortBy=Fp,E.sortedUniq=GT,E.sortedUniqBy=BT,E.split=TA,E.spread=qp,E.tail=jT,E.take=wT,E.takeRight=HT,E.takeRightWhile=VT,E.takeWhile=UT,E.tap=tp,E.throttle=xp,E.thru=Va,E.toArray=uu,E.toPairs=mu,E.toPairsIn=Tu,E.toPath=ZA,E.toPlainObject=gu,E.transform=Wh,E.unary=Yp,E.union=qT,E.unionBy=xT,E.unionWith=YT,E.uniq=CT,E.uniqBy=$T,E.uniqWith=JT,E.unset=zh,E.unzip=Ks,E.unzipWith=Wd,E.update=Zh,E.updateWith=Xh,E.values=kt,E.valuesIn=Qh,E.without=WT,E.words=Au,E.wrap=Cp,E.xor=zT,E.xorBy=ZT,E.xorWith=XT,E.zip=QT,E.zipObject=ep,E.zipObjectDeep=np,E.zipWith=rp,E.entries=mu,E.entriesIn=Tu,E.extend=vu,E.extendWith=Ja,Vs(E,E),E.add=QA,E.attempt=cu,E.camelCase=tA,E.capitalize=pu,E.ceil=ec,E.clamp=eA,E.clone=Jp,E.cloneDeep=zp,E.cloneDeepWith=Zp,E.cloneWith=Wp,E.conformsTo=Xp,E.deburr=hu,E.defaultTo=DA,E.divide=nc,E.endsWith=aA,E.eq=Zn,E.escape=iA,E.escapeRegExp=sA,E.every=vp,E.find=fp,E.findIndex=xd,E.findKey=Ih,E.findLast=mp,E.findLastIndex=Yd,E.findLastKey=Oh,E.floor=rc,E.forEach=Zd,E.forEachRight=Xd,E.forIn=Lh,E.forInRight=Kh,E.forOwn=Dh,E.forOwnRight=Ph,E.get=Gs,E.gt=Qp,E.gte=eh,E.has=Gh,E.hasIn=Bs,E.head=$d,E.identity=Rn,E.includes=cp,E.indexOf=mT,E.inRange=nA,E.invoke=wh,E.isArguments=Ur,E.isArray=ve,E.isArrayBuffer=nh,E.isArrayLike=cn,E.isArrayLikeObject=Ye,E.isBoolean=rh,E.isBuffer=Lr,E.isDate=th,E.isElement=ah,E.isEmpty=ih,E.isEqual=sh,E.isEqualWith=oh,E.isError=Fs,E.isFinite=lh,E.isFunction=Tr,E.isInteger=su,E.isLength=Ca,E.isMap=ou,E.isMatch=dh,E.isMatchWith=uh,E.isNaN=kh,E.isNative=gh,E.isNil=Eh,E.isNull=vh,E.isNumber=lu,E.isObject=Ve,E.isObjectLike=qe,E.isPlainObject=Vt,E.isRegExp=Ms,E.isSafeInteger=fh,E.isSet=du,E.isString=$a,E.isSymbol=Ln,E.isTypedArray=ut,E.isUndefined=mh,E.isWeakMap=Th,E.isWeakSet=ph,E.join=cT,E.kebabCase=oA,E.last=Un,E.lastIndexOf=yT,E.lowerCase=lA,E.lowerFirst=dA,E.lt=hh,E.lte=Ah,E.max=tc,E.maxBy=ac,E.mean=ic,E.meanBy=sc,E.min=oc,E.minBy=lc,E.stubArray=qs,E.stubFalse=xs,E.stubObject=$A,E.stubString=JA,E.stubTrue=WA,E.multiply=dc,E.nth=RT,E.noConflict=wA,E.noop=Us,E.now=qa,E.pad=uA,E.padEnd=kA,E.padStart=gA,E.parseInt=vA,E.random=rA,E.reduce=Np,E.reduceRight=Sp,E.repeat=EA,E.replace=fA,E.result=Ch,E.round=uc,E.runInContext=y,E.sample=Op,E.size=Dp,E.snakeCase=mA,E.some=Pp,E.sortedIndex=LT,E.sortedIndexBy=KT,E.sortedIndexOf=DT,E.sortedLastIndex=PT,E.sortedLastIndexBy=FT,E.sortedLastIndexOf=MT,E.startCase=pA,E.startsWith=hA,E.subtract=kc,E.sum=gc,E.sumBy=vc,E.template=AA,E.times=zA,E.toFinite=pr,E.toInteger=Ee,E.toLength=ku,E.toLower=cA,E.toNumber=qn,E.toSafeInteger=ch,E.toString=Ne,E.toUpper=yA,E.trim=RA,E.trimEnd=_A,E.trimStart=bA,E.truncate=NA,E.unescape=SA,E.uniqueId=XA,E.upperCase=IA,E.upperFirst=js,E.each=Zd,E.eachRight=Xd,E.first=$d,Vs(E,function(){var n={};return tr(E,function(r,o){Le.call(E.prototype,o)||(n[o]=r)}),n}(),{chain:!1}),E.VERSION=a,Bn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){E[n].placeholder=E}),Bn(["drop","take"],function(n,r){he.prototype[n]=function(o){o=o===t?1:Ze(Ee(o),0);var d=this.__filtered__&&!r?new he(this):this.clone();return d.__filtered__?d.__takeCount__=ln(o,d.__takeCount__):d.__views__.push({size:ln(o,de),type:n+(d.__dir__<0?"Right":"")}),d},he.prototype[n+"Right"]=function(o){return this.reverse()[n](o).reverse()}}),Bn(["filter","map","takeWhile"],function(n,r){var o=r+1,d=o==J||o==U;he.prototype[n]=function(g){var T=this.clone();return T.__iteratees__.push({iteratee:oe(g,3),type:o}),T.__filtered__=T.__filtered__||d,T}}),Bn(["head","last"],function(n,r){var o="take"+(r?"Right":"");he.prototype[n]=function(){return this[o](1).value()[0]}}),Bn(["initial","tail"],function(n,r){var o="drop"+(r?"":"Right");he.prototype[n]=function(){return this.__filtered__?new he(this):this[o](1)}}),he.prototype.compact=function(){return this.filter(Rn)},he.prototype.find=function(n){return this.filter(n).head()},he.prototype.findLast=function(n){return this.reverse().find(n)},he.prototype.invokeMap=me(function(n,r){return typeof n=="function"?new he(this):this.map(function(o){return Mt(o,n,r)})}),he.prototype.reject=function(n){return this.filter(Ya(oe(n)))},he.prototype.slice=function(n,r){n=Ee(n);var o=this;return o.__filtered__&&(n>0||r<0)?new he(o):(n<0?o=o.takeRight(-n):n&&(o=o.drop(n)),r!==t&&(r=Ee(r),o=r<0?o.dropRight(-r):o.take(r-n)),o)},he.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},he.prototype.toArray=function(){return this.take(de)},tr(he.prototype,function(n,r){var o=/^(?:filter|find|map|reject)|While$/.test(r),d=/^(?:head|last)$/.test(r),g=E[d?"take"+(r=="last"?"Right":""):r],T=d||/^find/.test(r);g&&(E.prototype[r]=function(){var h=this.__wrapped__,A=d?[1]:arguments,_=h instanceof he,B=A[0],j=_||ve(h),w=function(Te){var Ae=g.apply(E,Rr([Te],A));return d&&z?Ae[0]:Ae};j&&o&&typeof B=="function"&&B.length!=1&&(_=j=!1);var z=this.__chain__,re=!!this.__actions__.length,ue=T&&!z,fe=_&&!re;if(!T&&j){h=fe?h:new he(this);var ke=n.apply(h,A);return ke.__actions__.push({func:Va,args:[w],thisArg:t}),new wn(ke,z)}return ue&&fe?n.apply(this,A):(ke=this.thru(w),ue?d?ke.value()[0]:ke.value():ke)})}),Bn(["pop","push","shift","sort","splice","unshift"],function(n){var r=va[n],o=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",d=/^(?:pop|shift)$/.test(n);E.prototype[n]=function(){var g=arguments;if(d&&!this.__chain__){var T=this.value();return r.apply(ve(T)?T:[],g)}return this[o](function(h){return r.apply(ve(h)?h:[],g)})}}),tr(he.prototype,function(n,r){var o=E[r];if(o){var d=o.name+"";Le.call(it,d)||(it[d]=[]),it[d].push({name:r,func:o})}}),it[Fa(t,D).name]=[{name:"wrapper",func:t}],he.prototype.clone=Sf,he.prototype.reverse=If,he.prototype.value=Of,E.prototype.at=ap,E.prototype.chain=ip,E.prototype.commit=sp,E.prototype.next=op,E.prototype.plant=dp,E.prototype.reverse=up,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=kp,E.prototype.first=E.prototype.head,It&&(E.prototype[It]=lp),E},rt=sf();Fr?((Fr.exports=rt)._=rt,Hi._=rt):tn._=rt}).call(Ut)})(ri,ri.exports);ri.exports;pn(hi);const Mg=P.forwardRef((e,i)=>M.jsx(vt,{gap:"2",style:{display:"flex"},...e,ref:i}));Mg.displayName="FaktaGruppe";Mg.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var Gg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function t(){for(var l="",u=0;u<arguments.length;u++){var k=arguments[u];k&&(l=s(l,a(k)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var k in l)i.call(l,k)&&l[k]&&(u=s(u,k));return u}function s(l,u){return u?l?l+" "+u:l+u:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(Gg);var aS=Gg.exports;const ho=yk(aS);var iS=Object.defineProperty,sS=(e,i,t)=>i in e?iS(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,Qu=(e,i,t)=>sS(e,typeof i!="symbol"?i+"":i,t),oS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jg={exports:{}},$t={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ek;function lS(){if(ek)return $t;ek=1;var e=Y,i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(k,v,m){var f,p={},c=null,K=null;m!==void 0&&(c=""+m),v.key!==void 0&&(c=""+v.key),v.ref!==void 0&&(K=v.ref);for(f in v)a.call(v,f)&&!l.hasOwnProperty(f)&&(p[f]=v[f]);if(k&&k.defaultProps)for(f in v=k.defaultProps,v)p[f]===void 0&&(p[f]=v[f]);return{$$typeof:i,type:k,key:c,ref:K,props:p,_owner:s.current}}return $t.Fragment=t,$t.jsx=u,$t.jsxs=u,$t}jg.exports=lS();var pe=jg.exports,wg={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(oS,function(){var t=1e3,a=6e4,s=36e5,l="millisecond",u="second",k="minute",v="hour",m="day",f="week",p="month",c="quarter",K="year",G="date",R="Invalid Date",N=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,D=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(J){var V=["th","st","nd","rd"],U=J%100;return"["+J+(V[(U-20)%10]||V[U]||V[0])+"]"}},L=function(J,V,U){var Z=String(J);return!Z||Z.length>=V?J:""+Array(V+1-Z.length).join(U)+J},Q={s:L,z:function(J){var V=-J.utcOffset(),U=Math.abs(V),Z=Math.floor(U/60),C=U%60;return(V<=0?"+":"-")+L(Z,2,"0")+":"+L(C,2,"0")},m:function J(V,U){if(V.date()<U.date())return-J(U,V);var Z=12*(U.year()-V.year())+(U.month()-V.month()),C=V.clone().add(Z,p),ie=U-C<0,se=V.clone().add(Z+(ie?-1:1),p);return+(-(Z+(U-C)/(ie?C-se:se-C))||0)},a:function(J){return J<0?Math.ceil(J)||0:Math.floor(J)},p:function(J){return{M:p,y:K,w:f,d:m,D:G,h:v,m:k,s:u,ms:l,Q:c}[J]||String(J||"").toLowerCase().replace(/s$/,"")},u:function(J){return J===void 0}},O="en",H={};H[O]=q;var I="$isDayjsObject",b=function(J){return J instanceof te||!(!J||!J[I])},$=function J(V,U,Z){var C;if(!V)return O;if(typeof V=="string"){var ie=V.toLowerCase();H[ie]&&(C=ie),U&&(H[ie]=U,C=ie);var se=V.split("-");if(!C&&se.length>1)return J(se[0])}else{var de=V.name;H[de]=V,C=de}return!Z&&C&&(O=C),C||!Z&&O},W=function(J,V){if(b(J))return J.clone();var U=typeof V=="object"?V:{};return U.date=J,U.args=arguments,new te(U)},x=Q;x.l=$,x.i=b,x.w=function(J,V){return W(J,{locale:V.$L,utc:V.$u,x:V.$x,$offset:V.$offset})};var te=function(){function J(U){this.$L=$(U.locale,null,!0),this.parse(U),this.$x=this.$x||U.x||{},this[I]=!0}var V=J.prototype;return V.parse=function(U){this.$d=function(Z){var C=Z.date,ie=Z.utc;if(C===null)return new Date(NaN);if(x.u(C))return new Date;if(C instanceof Date)return new Date(C);if(typeof C=="string"&&!/Z$/i.test(C)){var se=C.match(N);if(se){var de=se[2]-1||0,Pe=(se[7]||"0").substring(0,3);return ie?new Date(Date.UTC(se[1],de,se[3]||1,se[4]||0,se[5]||0,se[6]||0,Pe)):new Date(se[1],de,se[3]||1,se[4]||0,se[5]||0,se[6]||0,Pe)}}return new Date(C)}(U),this.init()},V.init=function(){var U=this.$d;this.$y=U.getFullYear(),this.$M=U.getMonth(),this.$D=U.getDate(),this.$W=U.getDay(),this.$H=U.getHours(),this.$m=U.getMinutes(),this.$s=U.getSeconds(),this.$ms=U.getMilliseconds()},V.$utils=function(){return x},V.isValid=function(){return this.$d.toString()!==R},V.isSame=function(U,Z){var C=W(U);return this.startOf(Z)<=C&&C<=this.endOf(Z)},V.isAfter=function(U,Z){return W(U)<this.startOf(Z)},V.isBefore=function(U,Z){return this.endOf(Z)<W(U)},V.$g=function(U,Z,C){return x.u(U)?this[Z]:this.set(C,U)},V.unix=function(){return Math.floor(this.valueOf()/1e3)},V.valueOf=function(){return this.$d.getTime()},V.startOf=function(U,Z){var C=this,ie=!!x.u(Z)||Z,se=x.p(U),de=function(sn,We){var rn=x.w(C.$u?Date.UTC(C.$y,We,sn):new Date(C.$y,We,sn),C);return ie?rn:rn.endOf(m)},Pe=function(sn,We){return x.w(C.toDate()[sn].apply(C.toDate("s"),(ie?[0,0,0,0]:[23,59,59,999]).slice(We)),C)},Ge=this.$W,Je=this.$M,xe=this.$D,_n="set"+(this.$u?"UTC":"");switch(se){case K:return ie?de(1,0):de(31,11);case p:return ie?de(1,Je):de(0,Je+1);case f:var Cn=this.$locale().weekStart||0,bn=(Ge<Cn?Ge+7:Ge)-Cn;return de(ie?xe-bn:xe+(6-bn),Je);case m:case G:return Pe(_n+"Hours",0);case v:return Pe(_n+"Minutes",1);case k:return Pe(_n+"Seconds",2);case u:return Pe(_n+"Milliseconds",3);default:return this.clone()}},V.endOf=function(U){return this.startOf(U,!1)},V.$set=function(U,Z){var C,ie=x.p(U),se="set"+(this.$u?"UTC":""),de=(C={},C[m]=se+"Date",C[G]=se+"Date",C[p]=se+"Month",C[K]=se+"FullYear",C[v]=se+"Hours",C[k]=se+"Minutes",C[u]=se+"Seconds",C[l]=se+"Milliseconds",C)[ie],Pe=ie===m?this.$D+(Z-this.$W):Z;if(ie===p||ie===K){var Ge=this.clone().set(G,1);Ge.$d[de](Pe),Ge.init(),this.$d=Ge.set(G,Math.min(this.$D,Ge.daysInMonth())).$d}else de&&this.$d[de](Pe);return this.init(),this},V.set=function(U,Z){return this.clone().$set(U,Z)},V.get=function(U){return this[x.p(U)]()},V.add=function(U,Z){var C,ie=this;U=Number(U);var se=x.p(Z),de=function(Je){var xe=W(ie);return x.w(xe.date(xe.date()+Math.round(Je*U)),ie)};if(se===p)return this.set(p,this.$M+U);if(se===K)return this.set(K,this.$y+U);if(se===m)return de(1);if(se===f)return de(7);var Pe=(C={},C[k]=a,C[v]=s,C[u]=t,C)[se]||1,Ge=this.$d.getTime()+U*Pe;return x.w(Ge,this)},V.subtract=function(U,Z){return this.add(-1*U,Z)},V.format=function(U){var Z=this,C=this.$locale();if(!this.isValid())return C.invalidDate||R;var ie=U||"YYYY-MM-DDTHH:mm:ssZ",se=x.z(this),de=this.$H,Pe=this.$m,Ge=this.$M,Je=C.weekdays,xe=C.months,_n=C.meridiem,Cn=function(We,rn,hn,$n){return We&&(We[rn]||We(Z,ie))||hn[rn].slice(0,$n)},bn=function(We){return x.s(de%12||12,We,"0")},sn=_n||function(We,rn,hn){var $n=We<12?"AM":"PM";return hn?$n.toLowerCase():$n};return ie.replace(D,function(We,rn){return rn||function(hn){switch(hn){case"YY":return String(Z.$y).slice(-2);case"YYYY":return x.s(Z.$y,4,"0");case"M":return Ge+1;case"MM":return x.s(Ge+1,2,"0");case"MMM":return Cn(C.monthsShort,Ge,xe,3);case"MMMM":return Cn(xe,Ge);case"D":return Z.$D;case"DD":return x.s(Z.$D,2,"0");case"d":return String(Z.$W);case"dd":return Cn(C.weekdaysMin,Z.$W,Je,2);case"ddd":return Cn(C.weekdaysShort,Z.$W,Je,3);case"dddd":return Je[Z.$W];case"H":return String(de);case"HH":return x.s(de,2,"0");case"h":return bn(1);case"hh":return bn(2);case"a":return sn(de,Pe,!0);case"A":return sn(de,Pe,!1);case"m":return String(Pe);case"mm":return x.s(Pe,2,"0");case"s":return String(Z.$s);case"ss":return x.s(Z.$s,2,"0");case"SSS":return x.s(Z.$ms,3,"0");case"Z":return se}return null}(We)||se.replace(":","")})},V.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},V.diff=function(U,Z,C){var ie,se=this,de=x.p(Z),Pe=W(U),Ge=(Pe.utcOffset()-this.utcOffset())*a,Je=this-Pe,xe=function(){return x.m(se,Pe)};switch(de){case K:ie=xe()/12;break;case p:ie=xe();break;case c:ie=xe()/3;break;case f:ie=(Je-Ge)/6048e5;break;case m:ie=(Je-Ge)/864e5;break;case v:ie=Je/s;break;case k:ie=Je/a;break;case u:ie=Je/t;break;default:ie=Je}return C?ie:x.a(ie)},V.daysInMonth=function(){return this.endOf(p).$D},V.$locale=function(){return H[this.$L]},V.locale=function(U,Z){if(!U)return this.$L;var C=this.clone(),ie=$(U,Z,!0);return ie&&(C.$L=ie),C},V.clone=function(){return x.w(this.$d,this)},V.toDate=function(){return new Date(this.valueOf())},V.toJSON=function(){return this.isValid()?this.toISOString():null},V.toISOString=function(){return this.$d.toISOString()},V.toString=function(){return this.$d.toUTCString()},J}(),le=te.prototype;return W.prototype=le,[["$ms",l],["$s",u],["$m",k],["$H",v],["$W",m],["$M",p],["$y",K],["$D",G]].forEach(function(J){le[J[1]]=function(V){return this.$g(V,J[0],J[1])}}),W.extend=function(J,V){return J.$i||(J(V,te,W),J.$i=!0),W},W.locale=$,W.isDayjs=b,W.unix=function(J){return W(1e3*J)},W.en=H[O],W.Ls=H,W.p={},W})})(wg);var dS=wg.exports;const Ai=Bg(dS);var Ao=function(e,i){return Ao=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])},Ao(e,i)};function nr(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");Ao(e,i);function t(){this.constructor=e}e.prototype=i===null?Object.create(i):(t.prototype=i.prototype,new t)}var ne=function(){return ne=Object.assign||function(e){for(var i,t=1,a=arguments.length;t<a;t++){i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},ne.apply(this,arguments)};function ci(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t}function Tn(e,i,t){if(arguments.length===2)for(var a=0,s=i.length,l;a<s;a++)(l||!(a in i))&&(l||(l=Array.prototype.slice.call(i,0,a)),l[a]=i[a]);return e.concat(l||Array.prototype.slice.call(i))}function fn(e,i){var t=i&&i.cache?i.cache:fS,a=i&&i.serializer?i.serializer:ES,s=i&&i.strategy?i.strategy:kS;return s(e,{cache:t,serializer:a})}function uS(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Hg(e,i,t,a){var s=uS(a)?a:t(a),l=i.get(s);return typeof l>"u"&&(l=e.call(this,a),i.set(s,l)),l}function Vg(e,i,t){var a=Array.prototype.slice.call(arguments,3),s=t(a),l=i.get(s);return typeof l>"u"&&(l=e.apply(this,a),i.set(s,l)),l}function qo(e,i,t,a,s){return t.bind(i,e,a,s)}function kS(e,i){var t=e.length===1?Hg:Vg;return qo(e,this,t,i.cache.create(),i.serializer)}function gS(e,i){return qo(e,this,Vg,i.cache.create(),i.serializer)}function vS(e,i){return qo(e,this,Hg,i.cache.create(),i.serializer)}var ES=function(){return JSON.stringify(arguments)};function xo(){this.cache=Object.create(null)}xo.prototype.get=function(e){return this.cache[e]};xo.prototype.set=function(e,i){this.cache[e]=i};var fS={create:function(){return new xo}},mn={variadic:gS,monadic:vS};function Ug(e,i,t){if(t===void 0&&(t=Error),!e)throw new t(i)}fn(function(){for(var e,i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];return new((e=Intl.NumberFormat).bind.apply(e,Tn([void 0],i,!1)))},{strategy:mn.variadic});fn(function(){for(var e,i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];return new((e=Intl.DateTimeFormat).bind.apply(e,Tn([void 0],i,!1)))},{strategy:mn.variadic});fn(function(){for(var e,i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];return new((e=Intl.PluralRules).bind.apply(e,Tn([void 0],i,!1)))},{strategy:mn.variadic});fn(function(){for(var e,i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];return new((e=Intl.Locale).bind.apply(e,Tn([void 0],i,!1)))},{strategy:mn.variadic});fn(function(){for(var e,i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];return new((e=Intl.ListFormat).bind.apply(e,Tn([void 0],i,!1)))},{strategy:mn.variadic});var ye;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(ye||(ye={}));var we;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(we||(we={}));var ht;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(ht||(ht={}));function nk(e){return e.type===we.literal}function mS(e){return e.type===we.argument}function qg(e){return e.type===we.number}function xg(e){return e.type===we.date}function Yg(e){return e.type===we.time}function Cg(e){return e.type===we.select}function $g(e){return e.type===we.plural}function TS(e){return e.type===we.pound}function Jg(e){return e.type===we.tag}function Wg(e){return!!(e&&typeof e=="object"&&e.type===ht.number)}function co(e){return!!(e&&typeof e=="object"&&e.type===ht.dateTime)}var zg=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,pS=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function hS(e){var i={};return e.replace(pS,function(t){var a=t.length;switch(t[0]){case"G":i.era=a===4?"long":a===5?"narrow":"short";break;case"y":i.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=a===4?"long":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][a-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][a-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][a-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][a-1];break;case"s":i.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var AS=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function cS(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(AS).filter(function(c){return c.length>0}),t=[],a=0,s=i;a<s.length;a++){var l=s[a],u=l.split("/");if(u.length===0)throw new Error("Invalid number skeleton");for(var k=u[0],v=u.slice(1),m=0,f=v;m<f.length;m++){var p=f[m];if(p.length===0)throw new Error("Invalid number skeleton")}t.push({stem:k,options:v})}return t}function yS(e){return e.replace(/^(.*?)-/,"")}var rk=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Zg=/^(@+)?(\+|#+)?[rs]?$/g,RS=/(\*)(0+)|(#+)(0+)|(0+)/g,Xg=/^(0+)$/;function tk(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(Zg,function(t,a,s){return typeof s!="string"?(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length):s==="+"?i.minimumSignificantDigits=a.length:a[0]==="#"?i.maximumSignificantDigits=a.length:(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length+(typeof s=="string"?s.length:0)),""}),i}function Qg(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function _S(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var t=e.slice(0,2);if(t==="+!"?(i.signDisplay="always",e=e.slice(2)):t==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!Xg.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function ak(e){var i={},t=Qg(e);return t||i}function bS(e){for(var i={},t=0,a=e;t<a.length;t++){var s=a[t];switch(s.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=s.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=yS(s.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=ne(ne(ne({},i),{notation:"scientific"}),s.options.reduce(function(v,m){return ne(ne({},v),ak(m))},{}));continue;case"engineering":i=ne(ne(ne({},i),{notation:"engineering"}),s.options.reduce(function(v,m){return ne(ne({},v),ak(m))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(RS,function(v,m,f,p,c,K){if(m)i.minimumIntegerDigits=f.length;else{if(p&&c)throw new Error("We currently do not support maximum integer digits");if(K)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Xg.test(s.stem)){i.minimumIntegerDigits=s.stem.length;continue}if(rk.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(rk,function(v,m,f,p,c,K){return f==="*"?i.minimumFractionDigits=m.length:p&&p[0]==="#"?i.maximumFractionDigits=p.length:c&&K?(i.minimumFractionDigits=c.length,i.maximumFractionDigits=c.length+K.length):(i.minimumFractionDigits=m.length,i.maximumFractionDigits=m.length),""});var l=s.options[0];l==="w"?i=ne(ne({},i),{trailingZeroDisplay:"stripIfInteger"}):l&&(i=ne(ne({},i),tk(l)));continue}if(Zg.test(s.stem)){i=ne(ne({},i),tk(s.stem));continue}var u=Qg(s.stem);u&&(i=ne(ne({},i),u));var k=_S(s.stem);k&&(i=ne(ne({},i),k))}return i}var Za={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function NS(e,i){for(var t="",a=0;a<e.length;a++){var s=e.charAt(a);if(s==="j"){for(var l=0;a+1<e.length&&e.charAt(a+1)===s;)l++,a++;var u=1+(l&1),k=l<2?1:3+(l>>1),v="a",m=SS(i);for((m=="H"||m=="k")&&(k=0);k-- >0;)t+=v;for(;u-- >0;)t=m+t}else s==="J"?t+="H":t+=s}return t}function SS(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=e.language,a;t!=="root"&&(a=e.maximize().region);var s=Za[a||""]||Za[t||""]||Za["".concat(t,"-001")]||Za["001"];return s[0]}var Xs,IS=new RegExp("^".concat(zg.source,"*")),OS=new RegExp("".concat(zg.source,"*$"));function _e(e,i){return{start:e,end:i}}var LS=!!String.prototype.startsWith&&"_a".startsWith("a",1),KS=!!String.fromCodePoint,DS=!!Object.fromEntries,PS=!!String.prototype.codePointAt,FS=!!String.prototype.trimStart,MS=!!String.prototype.trimEnd,GS=!!Number.isSafeInteger,BS=GS?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},yo=!0;try{var jS=nv("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");yo=((Xs=jS.exec("a"))===null||Xs===void 0?void 0:Xs[0])==="a"}catch{yo=!1}var ik=LS?function(e,i,t){return e.startsWith(i,t)}:function(e,i,t){return e.slice(t,t+i.length)===i},Ro=KS?String.fromCodePoint:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var t="",a=e.length,s=0,l;a>s;){if(l=e[s++],l>1114111)throw RangeError(l+" is not a valid code point");t+=l<65536?String.fromCharCode(l):String.fromCharCode(((l-=65536)>>10)+55296,l%1024+56320)}return t},sk=DS?Object.fromEntries:function(e){for(var i={},t=0,a=e;t<a.length;t++){var s=a[t],l=s[0],u=s[1];i[l]=u}return i},ev=PS?function(e,i){return e.codePointAt(i)}:function(e,i){var t=e.length;if(!(i<0||i>=t)){var a=e.charCodeAt(i),s;return a<55296||a>56319||i+1===t||(s=e.charCodeAt(i+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},wS=FS?function(e){return e.trimStart()}:function(e){return e.replace(IS,"")},HS=MS?function(e){return e.trimEnd()}:function(e){return e.replace(OS,"")};function nv(e,i){return new RegExp(e,i)}var _o;if(yo){var ok=nv("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");_o=function(e,i){var t;ok.lastIndex=i;var a=ok.exec(e);return(t=a[1])!==null&&t!==void 0?t:""}}else _o=function(e,i){for(var t=[];;){var a=ev(e,i);if(a===void 0||rv(a)||xS(a))break;t.push(a),i+=a>=65536?2:1}return Ro.apply(void 0,t)};var VS=function(){function e(i,t){t===void 0&&(t={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,t,a){for(var s=[];!this.isEOF();){var l=this.char();if(l===123){var u=this.parseArgument(i,a);if(u.err)return u;s.push(u.val)}else{if(l===125&&i>0)break;if(l===35&&(t==="plural"||t==="selectordinal")){var k=this.clonePosition();this.bump(),s.push({type:we.pound,location:_e(k,this.clonePosition())})}else if(l===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(ye.UNMATCHED_CLOSING_TAG,_e(this.clonePosition(),this.clonePosition()))}else if(l===60&&!this.ignoreTag&&bo(this.peek()||0)){var u=this.parseTag(i,t);if(u.err)return u;s.push(u.val)}else{var u=this.parseLiteral(i,t);if(u.err)return u;s.push(u.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(i,t){var a=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:we.literal,value:"<".concat(s,"/>"),location:_e(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var l=this.parseMessage(i+1,t,!0);if(l.err)return l;var u=l.val,k=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!bo(this.char()))return this.error(ye.INVALID_TAG,_e(k,this.clonePosition()));var v=this.clonePosition(),m=this.parseTagName();return s!==m?this.error(ye.UNMATCHED_CLOSING_TAG,_e(v,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:we.tag,value:s,children:u,location:_e(a,this.clonePosition())},err:null}:this.error(ye.INVALID_TAG,_e(k,this.clonePosition())))}else return this.error(ye.UNCLOSED_TAG,_e(a,this.clonePosition()))}else return this.error(ye.INVALID_TAG,_e(a,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&qS(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,t){for(var a=this.clonePosition(),s="";;){var l=this.tryParseQuote(t);if(l){s+=l;continue}var u=this.tryParseUnquoted(i,t);if(u){s+=u;continue}var k=this.tryParseLeftAngleBracket();if(k){s+=k;continue}break}var v=_e(a,this.clonePosition());return{val:{type:we.literal,value:s,location:v},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!US(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(a);this.bump()}return Ro.apply(void 0,t)},e.prototype.tryParseUnquoted=function(i,t){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(t==="plural"||t==="selectordinal")||a===125&&i>0?null:(this.bump(),Ro(a))},e.prototype.parseArgument=function(i,t){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(ye.EXPECT_ARGUMENT_CLOSING_BRACE,_e(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(ye.EMPTY_ARGUMENT,_e(a,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(ye.MALFORMED_ARGUMENT,_e(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(ye.EXPECT_ARGUMENT_CLOSING_BRACE,_e(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:we.argument,value:s,location:_e(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(ye.EXPECT_ARGUMENT_CLOSING_BRACE,_e(a,this.clonePosition())):this.parseArgumentOptions(i,t,s,a);default:return this.error(ye.MALFORMED_ARGUMENT,_e(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),t=this.offset(),a=_o(this.message,t),s=t+a.length;this.bumpTo(s);var l=this.clonePosition(),u=_e(i,l);return{value:a,location:u}},e.prototype.parseArgumentOptions=function(i,t,a,s){var l,u=this.clonePosition(),k=this.parseIdentifierIfPossible().value,v=this.clonePosition();switch(k){case"":return this.error(ye.EXPECT_ARGUMENT_TYPE,_e(u,v));case"number":case"date":case"time":{this.bumpSpace();var m=null;if(this.bumpIf(",")){this.bumpSpace();var f=this.clonePosition(),p=this.parseSimpleArgStyleIfPossible();if(p.err)return p;var c=HS(p.val);if(c.length===0)return this.error(ye.EXPECT_ARGUMENT_STYLE,_e(this.clonePosition(),this.clonePosition()));var K=_e(f,this.clonePosition());m={style:c,styleLocation:K}}var G=this.tryParseArgumentClose(s);if(G.err)return G;var R=_e(s,this.clonePosition());if(m&&ik(m==null?void 0:m.style,"::",0)){var N=wS(m.style.slice(2));if(k==="number"){var p=this.parseNumberSkeletonFromString(N,m.styleLocation);return p.err?p:{val:{type:we.number,value:a,location:R,style:p.val},err:null}}else{if(N.length===0)return this.error(ye.EXPECT_DATE_TIME_SKELETON,R);var D=N;this.locale&&(D=NS(N,this.locale));var c={type:ht.dateTime,pattern:D,location:m.styleLocation,parsedOptions:this.shouldParseSkeletons?hS(D):{}},q=k==="date"?we.date:we.time;return{val:{type:q,value:a,location:R,style:c},err:null}}}return{val:{type:k==="number"?we.number:k==="date"?we.date:we.time,value:a,location:R,style:(l=m==null?void 0:m.style)!==null&&l!==void 0?l:null},err:null}}case"plural":case"selectordinal":case"select":{var L=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(ye.EXPECT_SELECT_ARGUMENT_OPTIONS,_e(L,ne({},L)));this.bumpSpace();var Q=this.parseIdentifierIfPossible(),O=0;if(k!=="select"&&Q.value==="offset"){if(!this.bumpIf(":"))return this.error(ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,_e(this.clonePosition(),this.clonePosition()));this.bumpSpace();var p=this.tryParseDecimalInteger(ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ye.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(p.err)return p;this.bumpSpace(),Q=this.parseIdentifierIfPossible(),O=p.val}var H=this.tryParsePluralOrSelectOptions(i,k,t,Q);if(H.err)return H;var G=this.tryParseArgumentClose(s);if(G.err)return G;var I=_e(s,this.clonePosition());return k==="select"?{val:{type:we.select,value:a,options:sk(H.val),location:I},err:null}:{val:{type:we.plural,value:a,options:sk(H.val),offset:O,pluralType:k==="plural"?"cardinal":"ordinal",location:I},err:null}}default:return this.error(ye.INVALID_ARGUMENT_TYPE,_e(u,v))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(ye.EXPECT_ARGUMENT_CLOSING_BRACE,_e(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,t=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(ye.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,_e(s,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,t){var a=[];try{a=cS(i)}catch{return this.error(ye.INVALID_NUMBER_SKELETON,t)}return{val:{type:ht.number,tokens:a,location:t,parsedOptions:this.shouldParseSkeletons?bS(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,t,a,s){for(var l,u=!1,k=[],v=new Set,m=s.value,f=s.location;;){if(m.length===0){var p=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var c=this.tryParseDecimalInteger(ye.EXPECT_PLURAL_ARGUMENT_SELECTOR,ye.INVALID_PLURAL_ARGUMENT_SELECTOR);if(c.err)return c;f=_e(p,this.clonePosition()),m=this.message.slice(p.offset,this.offset())}else break}if(v.has(m))return this.error(t==="select"?ye.DUPLICATE_SELECT_ARGUMENT_SELECTOR:ye.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,f);m==="other"&&(u=!0),this.bumpSpace();var K=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?ye.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:ye.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,_e(this.clonePosition(),this.clonePosition()));var G=this.parseMessage(i+1,t,a);if(G.err)return G;var R=this.tryParseArgumentClose(K);if(R.err)return R;k.push([m,{value:G.val,location:_e(K,this.clonePosition())}]),v.add(m),this.bumpSpace(),l=this.parseIdentifierIfPossible(),m=l.value,f=l.location}return k.length===0?this.error(t==="select"?ye.EXPECT_SELECT_ARGUMENT_SELECTOR:ye.EXPECT_PLURAL_ARGUMENT_SELECTOR,_e(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!u?this.error(ye.MISSING_OTHER_CLAUSE,_e(this.clonePosition(),this.clonePosition())):{val:k,err:null}},e.prototype.tryParseDecimalInteger=function(i,t){var a=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var l=!1,u=0;!this.isEOF();){var k=this.char();if(k>=48&&k<=57)l=!0,u=u*10+(k-48),this.bump();else break}var v=_e(s,this.clonePosition());return l?(u*=a,BS(u)?{val:u,err:null}:this.error(t,v)):this.error(i,v)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var t=ev(this.message,i);if(t===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(i,t){return{val:null,err:{kind:i,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(ik(this.message,i,this.offset())){for(var t=0;t<i.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var t=this.offset(),a=this.message.indexOf(i,t);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var t=this.offset();if(t===i)break;if(t>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&rv(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),t=this.offset(),a=this.message.charCodeAt(t+(i>=65536?2:1));return a??null},e}();function bo(e){return e>=97&&e<=122||e>=65&&e<=90}function US(e){return bo(e)||e===47}function qS(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function rv(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function xS(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function No(e){e.forEach(function(i){if(delete i.location,Cg(i)||$g(i))for(var t in i.options)delete i.options[t].location,No(i.options[t].value);else qg(i)&&Wg(i.style)||(xg(i)||Yg(i))&&co(i.style)?delete i.style.location:Jg(i)&&No(i.children)})}function YS(e,i){i===void 0&&(i={}),i=ne({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var t=new VS(e,i).parse();if(t.err){var a=SyntaxError(ye[t.err.kind]);throw a.location=t.err.location,a.originalMessage=t.err.message,a}return i!=null&&i.captureLocation||No(t.val),t.val}var ur;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(ur||(ur={}));var Pr=function(e){nr(i,e);function i(t,a,s){var l=e.call(this,t)||this;return l.code=a,l.originalMessage=s,l}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),lk=function(e){nr(i,e);function i(t,a,s,l){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(a,'". Options are "').concat(Object.keys(s).join('", "'),'"'),ur.INVALID_VALUE,l)||this}return i}(Pr),CS=function(e){nr(i,e);function i(t,a,s){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(a),ur.INVALID_VALUE,s)||this}return i}(Pr),$S=function(e){nr(i,e);function i(t,a){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(a,'"'),ur.MISSING_VALUE,a)||this}return i}(Pr),En;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(En||(En={}));function JS(e){return e.length<2?e:e.reduce(function(i,t){var a=i[i.length-1];return!a||a.type!==En.literal||t.type!==En.literal?i.push(t):a.value+=t.value,i},[])}function tv(e){return typeof e=="function"}function ei(e,i,t,a,s,l,u){if(e.length===1&&nk(e[0]))return[{type:En.literal,value:e[0].value}];for(var k=[],v=0,m=e;v<m.length;v++){var f=m[v];if(nk(f)){k.push({type:En.literal,value:f.value});continue}if(TS(f)){typeof l=="number"&&k.push({type:En.literal,value:t.getNumberFormat(i).format(l)});continue}var p=f.value;if(!(s&&p in s))throw new $S(p,u);var c=s[p];if(mS(f)){(!c||typeof c=="string"||typeof c=="number")&&(c=typeof c=="string"||typeof c=="number"?String(c):""),k.push({type:typeof c=="string"?En.literal:En.object,value:c});continue}if(xg(f)){var K=typeof f.style=="string"?a.date[f.style]:co(f.style)?f.style.parsedOptions:void 0;k.push({type:En.literal,value:t.getDateTimeFormat(i,K).format(c)});continue}if(Yg(f)){var K=typeof f.style=="string"?a.time[f.style]:co(f.style)?f.style.parsedOptions:a.time.medium;k.push({type:En.literal,value:t.getDateTimeFormat(i,K).format(c)});continue}if(qg(f)){var K=typeof f.style=="string"?a.number[f.style]:Wg(f.style)?f.style.parsedOptions:void 0;K&&K.scale&&(c=c*(K.scale||1)),k.push({type:En.literal,value:t.getNumberFormat(i,K).format(c)});continue}if(Jg(f)){var G=f.children,R=f.value,N=s[R];if(!tv(N))throw new CS(R,"function",u);var D=ei(G,i,t,a,s,l),q=N(D.map(function(O){return O.value}));Array.isArray(q)||(q=[q]),k.push.apply(k,q.map(function(O){return{type:typeof O=="string"?En.literal:En.object,value:O}}))}if(Cg(f)){var L=f.options[c]||f.options.other;if(!L)throw new lk(f.value,c,Object.keys(f.options),u);k.push.apply(k,ei(L.value,i,t,a,s));continue}if($g(f)){var L=f.options["=".concat(c)];if(!L){if(!Intl.PluralRules)throw new Pr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ur.MISSING_INTL_API,u);var Q=t.getPluralRules(i,{type:f.pluralType}).select(c-(f.offset||0));L=f.options[Q]||f.options.other}if(!L)throw new lk(f.value,c,Object.keys(f.options),u);k.push.apply(k,ei(L.value,i,t,a,s,c-(f.offset||0)));continue}}return JS(k)}function WS(e,i){return i?ne(ne(ne({},e||{}),i||{}),Object.keys(e).reduce(function(t,a){return t[a]=ne(ne({},e[a]),i[a]||{}),t},{})):e}function zS(e,i){return i?Object.keys(e).reduce(function(t,a){return t[a]=WS(e[a],i[a]),t},ne({},e)):e}function Qs(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function ZS(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:fn(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.NumberFormat).bind.apply(i,Tn([void 0],t,!1)))},{cache:Qs(e.number),strategy:mn.variadic}),getDateTimeFormat:fn(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.DateTimeFormat).bind.apply(i,Tn([void 0],t,!1)))},{cache:Qs(e.dateTime),strategy:mn.variadic}),getPluralRules:fn(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.PluralRules).bind.apply(i,Tn([void 0],t,!1)))},{cache:Qs(e.pluralRules),strategy:mn.variadic})}}var av=function(){function e(i,t,a,s){t===void 0&&(t=e.defaultLocale);var l=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(v){var m=l.formatToParts(v);if(m.length===1)return m[0].value;var f=m.reduce(function(p,c){return!p.length||c.type!==En.literal||typeof p[p.length-1]!="string"?p.push(c.value):p[p.length-1]+=c.value,p},[]);return f.length<=1?f[0]||"":f},this.formatToParts=function(v){return ei(l.ast,l.locales,l.formatters,l.formats,v,void 0,l.message)},this.resolvedOptions=function(){var v;return{locale:((v=l.resolvedLocale)===null||v===void 0?void 0:v.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=t,this.resolvedLocale=e.resolveLocale(t),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var u=s||{};u.formatters;var k=ci(u,["formatters"]);this.ast=e.__parse(i,ne(ne({},k),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=zS(e.formats,a),this.formatters=s&&s.formatters||ZS(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(i);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=YS,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Cr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Cr||(Cr={}));var aa=function(e){nr(i,e);function i(t,a,s){var l=this,u=s?s instanceof Error?s:new Error(String(s)):void 0;return l=e.call(this,"[@formatjs/intl Error ".concat(t,"] ").concat(a,`
`).concat(u?`
`.concat(u.message,`
`).concat(u.stack):""))||this,l.code=t,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(l,i),l}return i}(Error),XS=function(e){nr(i,e);function i(t,a){return e.call(this,Cr.UNSUPPORTED_FORMATTER,t,a)||this}return i}(aa),QS=function(e){nr(i,e);function i(t,a){return e.call(this,Cr.INVALID_CONFIG,t,a)||this}return i}(aa),dk=function(e){nr(i,e);function i(t,a){return e.call(this,Cr.MISSING_DATA,t,a)||this}return i}(aa),Yn=function(e){nr(i,e);function i(t,a,s){var l=e.call(this,Cr.FORMAT_ERROR,"".concat(t,`
Locale: `).concat(a,`
`),s)||this;return l.locale=a,l}return i}(aa),eo=function(e){nr(i,e);function i(t,a,s,l){var u=e.call(this,"".concat(t,`
MessageID: `).concat(s==null?void 0:s.id,`
Default Message: `).concat(s==null?void 0:s.defaultMessage,`
Description: `).concat(s==null?void 0:s.description,`
`),a,l)||this;return u.descriptor=s,u.locale=a,u}return i}(Yn),eI=function(e){nr(i,e);function i(t,a){var s=e.call(this,Cr.MISSING_TRANSLATION,'Missing message: "'.concat(t.id,'" for locale "').concat(a,'", using ').concat(t.defaultMessage?"default message (".concat(typeof t.defaultMessage=="string"?t.defaultMessage:t.defaultMessage.map(function(l){var u;return(u=l.value)!==null&&u!==void 0?u:JSON.stringify(l)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=t,s}return i}(aa);function Wr(e,i,t){return t===void 0&&(t={}),i.reduce(function(a,s){return s in e?a[s]=e[s]:s in t&&(a[s]=t[s]),a},{})}var nI=function(e){},rI=function(e){},iv={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:nI,onWarn:rI};function sv(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function xr(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function tI(e){e===void 0&&(e=sv());var i=Intl.RelativeTimeFormat,t=Intl.ListFormat,a=Intl.DisplayNames,s=fn(function(){for(var k,v=[],m=0;m<arguments.length;m++)v[m]=arguments[m];return new((k=Intl.DateTimeFormat).bind.apply(k,Tn([void 0],v,!1)))},{cache:xr(e.dateTime),strategy:mn.variadic}),l=fn(function(){for(var k,v=[],m=0;m<arguments.length;m++)v[m]=arguments[m];return new((k=Intl.NumberFormat).bind.apply(k,Tn([void 0],v,!1)))},{cache:xr(e.number),strategy:mn.variadic}),u=fn(function(){for(var k,v=[],m=0;m<arguments.length;m++)v[m]=arguments[m];return new((k=Intl.PluralRules).bind.apply(k,Tn([void 0],v,!1)))},{cache:xr(e.pluralRules),strategy:mn.variadic});return{getDateTimeFormat:s,getNumberFormat:l,getMessageFormat:fn(function(k,v,m,f){return new av(k,v,m,ne({formatters:{getNumberFormat:l,getDateTimeFormat:s,getPluralRules:u}},f||{}))},{cache:xr(e.message),strategy:mn.variadic}),getRelativeTimeFormat:fn(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(i.bind.apply(i,Tn([void 0],k,!1)))},{cache:xr(e.relativeTime),strategy:mn.variadic}),getPluralRules:u,getListFormat:fn(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(t.bind.apply(t,Tn([void 0],k,!1)))},{cache:xr(e.list),strategy:mn.variadic}),getDisplayNames:fn(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(a.bind.apply(a,Tn([void 0],k,!1)))},{cache:xr(e.displayNames),strategy:mn.variadic})}}function Yo(e,i,t,a){var s=e&&e[i],l;if(s&&(l=s[t]),l)return l;a(new XS("No ".concat(i," format named: ").concat(t)))}function Xa(e,i){return Object.keys(e).reduce(function(t,a){return t[a]=ne({timeZone:i},e[a]),t},{})}function uk(e,i){var t=Object.keys(ne(ne({},e),i));return t.reduce(function(a,s){return a[s]=ne(ne({},e[s]||{}),i[s]||{}),a},{})}function kk(e,i){if(!i)return e;var t=av.formats;return ne(ne(ne({},t),e),{date:uk(Xa(t.date,i),Xa(e.date||{},i)),time:uk(Xa(t.time,i),Xa(e.time||{},i))})}var So=function(e,i,t,a,s){var l=e.locale,u=e.formats,k=e.messages,v=e.defaultLocale,m=e.defaultFormats,f=e.fallbackOnEmptyString,p=e.onError,c=e.timeZone,K=e.defaultRichTextElements;t===void 0&&(t={id:""});var G=t.id,R=t.defaultMessage;Ug(!!G,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var N=String(G),D=k&&Object.prototype.hasOwnProperty.call(k,N)&&k[N];if(Array.isArray(D)&&D.length===1&&D[0].type===we.literal)return D[0].value;if(!a&&D&&typeof D=="string"&&!K)return D.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=ne(ne({},K),a||{}),u=kk(u,c),m=kk(m,c),!D){if(f===!1&&D==="")return D;if((!R||l&&l.toLowerCase()!==v.toLowerCase())&&p(new eI(t,l)),R)try{var q=i.getMessageFormat(R,v,m,s);return q.format(a)}catch(L){return p(new eo('Error formatting default message for: "'.concat(N,'", rendering default message verbatim'),l,t,L)),typeof R=="string"?R:N}return N}try{var q=i.getMessageFormat(D,l,u,ne({formatters:i},s||{}));return q.format(a)}catch(L){p(new eo('Error formatting message: "'.concat(N,'", using ').concat(R?"default message":"id"," as fallback."),l,t,L))}if(R)try{var q=i.getMessageFormat(R,v,m,s);return q.format(a)}catch(L){p(new eo('Error formatting the default message for: "'.concat(N,'", rendering message verbatim'),l,t,L))}return typeof D=="string"?D:typeof R=="string"?R:N},ov=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function yi(e,i,t,a){var s=e.locale,l=e.formats,u=e.onError,k=e.timeZone;a===void 0&&(a={});var v=a.format,m=ne(ne({},k&&{timeZone:k}),v&&Yo(l,i,v,u)),f=Wr(a,ov,m);return i==="time"&&!f.hour&&!f.minute&&!f.second&&!f.timeStyle&&!f.dateStyle&&(f=ne(ne({},f),{hour:"numeric",minute:"numeric"})),t(s,f)}function aI(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],u=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return yi(e,"date",i,u).format(k)}catch(v){e.onError(new Yn("Error formatting date.",e.locale,v))}return String(k)}function iI(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],u=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return yi(e,"time",i,u).format(k)}catch(v){e.onError(new Yn("Error formatting time.",e.locale,v))}return String(k)}function sI(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],u=t[2],k=u===void 0?{}:u,v=e.timeZone,m=e.locale,f=e.onError,p=Wr(k,ov,v?{timeZone:v}:{});try{return i(m,p).formatRange(s,l)}catch(c){f(new Yn("Error formatting date time range.",e.locale,c))}return String(s)}function oI(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],u=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return yi(e,"date",i,u).formatToParts(k)}catch(v){e.onError(new Yn("Error formatting date.",e.locale,v))}return[]}function lI(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],u=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return yi(e,"time",i,u).formatToParts(k)}catch(v){e.onError(new Yn("Error formatting time.",e.locale,v))}return[]}var dI=["style","type","fallback","languageDisplay"];function uI(e,i,t,a){var s=e.locale,l=e.onError,u=Intl.DisplayNames;u||l(new Pr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,ur.MISSING_INTL_API));var k=Wr(a,dI);try{return i(s,k).of(t)}catch(v){l(new Yn("Error formatting display name.",s,v))}}var kI=["type","style"],gk=Date.now();function gI(e){return"".concat(gk,"_").concat(e,"_").concat(gk)}function vI(e,i,t,a){a===void 0&&(a={});var s=lv(e,i,t,a).reduce(function(l,u){var k=u.value;return typeof k!="string"?l.push(k):typeof l[l.length-1]=="string"?l[l.length-1]+=k:l.push(k),l},[]);return s.length===1?s[0]:s.length===0?"":s}function lv(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={});var u=Intl.ListFormat;u||l(new Pr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,ur.MISSING_INTL_API));var k=Wr(a,kI);try{var v={},m=t.map(function(f,p){if(typeof f=="object"){var c=gI(p);return v[c]=f,c}return String(f)});return i(s,k).formatToParts(m).map(function(f){return f.type==="literal"?f:ne(ne({},f),{value:v[f.value]||f.value})})}catch(f){l(new Yn("Error formatting list.",s,f))}return t}var EI=["type"];function fI(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={}),Intl.PluralRules||l(new Pr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ur.MISSING_INTL_API));var u=Wr(a,EI);try{return i(s,u).select(t)}catch(k){l(new Yn("Error formatting plural.",s,k))}return"other"}var mI=["numeric","style"];function TI(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var u=t.format,k=!!u&&Yo(s,"relative",u,l)||{},v=Wr(t,mI,k);return i(a,v)}function pI(e,i,t,a,s){s===void 0&&(s={}),a||(a="second");var l=Intl.RelativeTimeFormat;l||e.onError(new Pr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,ur.MISSING_INTL_API));try{return TI(e,i,s).format(t,a)}catch(u){e.onError(new Yn("Error formatting relative time.",e.locale,u))}return String(t)}var hI=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function dv(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var u=t.format,k=u&&Yo(s,"number",u,l)||{},v=Wr(t,hI,k);return i(a,v)}function AI(e,i,t,a){a===void 0&&(a={});try{return dv(e,i,a).format(t)}catch(s){e.onError(new Yn("Error formatting number.",e.locale,s))}return String(t)}function cI(e,i,t,a){a===void 0&&(a={});try{return dv(e,i,a).formatToParts(t)}catch(s){e.onError(new Yn("Error formatting number.",e.locale,s))}return[]}function yI(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function RI(e){e.onWarn&&e.defaultRichTextElements&&yI(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function _I(e,i){var t=tI(i),a=ne(ne({},iv),e),s=a.locale,l=a.defaultLocale,u=a.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&u?u(new dk('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&u&&u(new dk('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(u&&u(new QS('"locale" was not configured, using "'.concat(l,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),RI(a),ne(ne({},a),{formatters:t,formatNumber:AI.bind(null,a,t.getNumberFormat),formatNumberToParts:cI.bind(null,a,t.getNumberFormat),formatRelativeTime:pI.bind(null,a,t.getRelativeTimeFormat),formatDate:aI.bind(null,a,t.getDateTimeFormat),formatDateToParts:oI.bind(null,a,t.getDateTimeFormat),formatTime:iI.bind(null,a,t.getDateTimeFormat),formatDateTimeRange:sI.bind(null,a,t.getDateTimeFormat),formatTimeToParts:lI.bind(null,a,t.getDateTimeFormat),formatPlural:fI.bind(null,a,t.getPluralRules),formatMessage:So.bind(null,a,t),$t:So.bind(null,a,t),formatList:vI.bind(null,a,t.getListFormat),formatListToParts:lv.bind(null,a,t.getListFormat),formatDisplayName:uI.bind(null,a,t.getDisplayNames)})}function bI(e){Ug(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var NI=ne(ne({},iv),{textComponent:P.Fragment});function SI(e){return function(i){return e(P.Children.toArray(i))}}var uv={exports:{}},Se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vk;function II(){if(vk)return Se;vk=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,k=e?Symbol.for("react.context"):60110,v=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,c=e?Symbol.for("react.suspense_list"):60120,K=e?Symbol.for("react.memo"):60115,G=e?Symbol.for("react.lazy"):60116,R=e?Symbol.for("react.block"):60121,N=e?Symbol.for("react.fundamental"):60117,D=e?Symbol.for("react.responder"):60118,q=e?Symbol.for("react.scope"):60119;function L(O){if(typeof O=="object"&&O!==null){var H=O.$$typeof;switch(H){case i:switch(O=O.type,O){case v:case m:case a:case l:case s:case p:return O;default:switch(O=O&&O.$$typeof,O){case k:case f:case G:case K:case u:return O;default:return H}}case t:return H}}}function Q(O){return L(O)===m}return Se.AsyncMode=v,Se.ConcurrentMode=m,Se.ContextConsumer=k,Se.ContextProvider=u,Se.Element=i,Se.ForwardRef=f,Se.Fragment=a,Se.Lazy=G,Se.Memo=K,Se.Portal=t,Se.Profiler=l,Se.StrictMode=s,Se.Suspense=p,Se.isAsyncMode=function(O){return Q(O)||L(O)===v},Se.isConcurrentMode=Q,Se.isContextConsumer=function(O){return L(O)===k},Se.isContextProvider=function(O){return L(O)===u},Se.isElement=function(O){return typeof O=="object"&&O!==null&&O.$$typeof===i},Se.isForwardRef=function(O){return L(O)===f},Se.isFragment=function(O){return L(O)===a},Se.isLazy=function(O){return L(O)===G},Se.isMemo=function(O){return L(O)===K},Se.isPortal=function(O){return L(O)===t},Se.isProfiler=function(O){return L(O)===l},Se.isStrictMode=function(O){return L(O)===s},Se.isSuspense=function(O){return L(O)===p},Se.isValidElementType=function(O){return typeof O=="string"||typeof O=="function"||O===a||O===m||O===l||O===s||O===p||O===c||typeof O=="object"&&O!==null&&(O.$$typeof===G||O.$$typeof===K||O.$$typeof===u||O.$$typeof===k||O.$$typeof===f||O.$$typeof===N||O.$$typeof===D||O.$$typeof===q||O.$$typeof===R)},Se.typeOf=L,Se}uv.exports=II();var OI=uv.exports,kv=OI,LI={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},KI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gv={};gv[kv.ForwardRef]=LI;gv[kv.Memo]=KI;var Co=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=P.createContext(null)):P.createContext(null);Co.Consumer;Co.Provider;var DI=Co;function vv(){var e=P.useContext(DI);return bI(e),e}var Io;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Io||(Io={}));var Oo;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Oo||(Oo={}));function Ev(e){var i=function(t){var a=vv(),s=t.value,l=t.children,u=ci(t,["value","children"]),k=typeof s=="string"?new Date(s||0):s,v=e==="formatDate"?a.formatDateToParts(k,u):a.formatTimeToParts(k,u);return l(v)};return i.displayName=Oo[e],i}function ia(e){var i=function(t){var a=vv(),s=t.value,l=t.children,u=ci(t,["value","children"]),k=a[e](s,u);if(typeof l=="function")return l(k);var v=a.textComponent||P.Fragment;return P.createElement(v,null,k)};return i.displayName=Io[e],i}function fv(e){return e&&Object.keys(e).reduce(function(i,t){var a=e[t];return i[t]=tv(a)?SI(a):a,i},{})}var Ek=function(e,i,t,a){for(var s=[],l=4;l<arguments.length;l++)s[l-4]=arguments[l];var u=fv(a),k=So.apply(void 0,Tn([e,i,t,u],s,!1));return Array.isArray(k)?P.Children.toArray(k):k},PI=function(e,i){var t=e.defaultRichTextElements,a=ci(e,["defaultRichTextElements"]),s=fv(t),l=_I(ne(ne(ne({},NI),a),{defaultRichTextElements:s}),i),u={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:s};return ne(ne({},l),{formatMessage:Ek.bind(null,u,l.formatters),$t:Ek.bind(null,u,l.formatters)})};ia("formatDate");ia("formatTime");ia("formatNumber");ia("formatList");ia("formatDisplayName");Ev("formatDate");Ev("formatTime");var Ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mv={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(Ri,function(){var t="minute",a=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(l,u,k){var v=u.prototype;k.utc=function(R){var N={date:R,utc:!0,args:arguments};return new u(N)},v.utc=function(R){var N=k(this.toDate(),{locale:this.$L,utc:!0});return R?N.add(this.utcOffset(),t):N},v.local=function(){return k(this.toDate(),{locale:this.$L,utc:!1})};var m=v.parse;v.parse=function(R){R.utc&&(this.$u=!0),this.$utils().u(R.$offset)||(this.$offset=R.$offset),m.call(this,R)};var f=v.init;v.init=function(){if(this.$u){var R=this.$d;this.$y=R.getUTCFullYear(),this.$M=R.getUTCMonth(),this.$D=R.getUTCDate(),this.$W=R.getUTCDay(),this.$H=R.getUTCHours(),this.$m=R.getUTCMinutes(),this.$s=R.getUTCSeconds(),this.$ms=R.getUTCMilliseconds()}else f.call(this)};var p=v.utcOffset;v.utcOffset=function(R,N){var D=this.$utils().u;if(D(R))return this.$u?0:D(this.$offset)?p.call(this):this.$offset;if(typeof R=="string"&&(R=function(O){O===void 0&&(O="");var H=O.match(a);if(!H)return null;var I=(""+H[0]).match(s)||["-",0,0],b=I[0],$=60*+I[1]+ +I[2];return $===0?0:b==="+"?$:-$}(R),R===null))return this;var q=Math.abs(R)<=16?60*R:R,L=this;if(N)return L.$offset=q,L.$u=R===0,L;if(R!==0){var Q=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(L=this.local().add(q+Q,t)).$offset=q,L.$x.$localOffset=Q}else L=this.utc();return L};var c=v.format;v.format=function(R){var N=R||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,N)},v.valueOf=function(){var R=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*R},v.isUTC=function(){return!!this.$u},v.toISOString=function(){return this.toDate().toISOString()},v.toString=function(){return this.toDate().toUTCString()};var K=v.toDate;v.toDate=function(R){return R==="s"&&this.$offset?k(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():K.call(this)};var G=v.diff;v.diff=function(R,N,D){if(R&&this.$u===R.$u)return G.call(this,R,N,D);var q=this.local(),L=k(R).local();return G.call(q,L,N,D)}}})})(mv);var FI=mv.exports;const MI=$o(FI);var Tv={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(Ri,function(){var t,a,s=1e3,l=6e4,u=36e5,k=864e5,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=31536e6,f=2628e6,p=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:m,months:f,days:k,hours:u,minutes:l,seconds:s,milliseconds:1,weeks:6048e5},K=function(H){return H instanceof Q},G=function(H,I,b){return new Q(H,b,I.$l)},R=function(H){return a.p(H)+"s"},N=function(H){return H<0},D=function(H){return N(H)?Math.ceil(H):Math.floor(H)},q=function(H){return Math.abs(H)},L=function(H,I){return H?N(H)?{negative:!0,format:""+q(H)+I}:{negative:!1,format:""+H+I}:{negative:!1,format:""}},Q=function(){function H(b,$,W){var x=this;if(this.$d={},this.$l=W,b===void 0&&(this.$ms=0,this.parseFromMilliseconds()),$)return G(b*c[R($)],this);if(typeof b=="number")return this.$ms=b,this.parseFromMilliseconds(),this;if(typeof b=="object")return Object.keys(b).forEach(function(J){x.$d[R(J)]=b[J]}),this.calMilliseconds(),this;if(typeof b=="string"){var te=b.match(p);if(te){var le=te.slice(2).map(function(J){return J!=null?Number(J):0});return this.$d.years=le[0],this.$d.months=le[1],this.$d.weeks=le[2],this.$d.days=le[3],this.$d.hours=le[4],this.$d.minutes=le[5],this.$d.seconds=le[6],this.calMilliseconds(),this}}return this}var I=H.prototype;return I.calMilliseconds=function(){var b=this;this.$ms=Object.keys(this.$d).reduce(function($,W){return $+(b.$d[W]||0)*c[W]},0)},I.parseFromMilliseconds=function(){var b=this.$ms;this.$d.years=D(b/m),b%=m,this.$d.months=D(b/f),b%=f,this.$d.days=D(b/k),b%=k,this.$d.hours=D(b/u),b%=u,this.$d.minutes=D(b/l),b%=l,this.$d.seconds=D(b/s),b%=s,this.$d.milliseconds=b},I.toISOString=function(){var b=L(this.$d.years,"Y"),$=L(this.$d.months,"M"),W=+this.$d.days||0;this.$d.weeks&&(W+=7*this.$d.weeks);var x=L(W,"D"),te=L(this.$d.hours,"H"),le=L(this.$d.minutes,"M"),J=this.$d.seconds||0;this.$d.milliseconds&&(J+=this.$d.milliseconds/1e3,J=Math.round(1e3*J)/1e3);var V=L(J,"S"),U=b.negative||$.negative||x.negative||te.negative||le.negative||V.negative,Z=te.format||le.format||V.format?"T":"",C=(U?"-":"")+"P"+b.format+$.format+x.format+Z+te.format+le.format+V.format;return C==="P"||C==="-P"?"P0D":C},I.toJSON=function(){return this.toISOString()},I.format=function(b){var $=b||"YYYY-MM-DDTHH:mm:ss",W={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return $.replace(v,function(x,te){return te||String(W[x])})},I.as=function(b){return this.$ms/c[R(b)]},I.get=function(b){var $=this.$ms,W=R(b);return W==="milliseconds"?$%=1e3:$=W==="weeks"?D($/c[W]):this.$d[W],$||0},I.add=function(b,$,W){var x;return x=$?b*c[R($)]:K(b)?b.$ms:G(b,this).$ms,G(this.$ms+x*(W?-1:1),this)},I.subtract=function(b,$){return this.add(b,$,!0)},I.locale=function(b){var $=this.clone();return $.$l=b,$},I.clone=function(){return G(this.$ms,this)},I.humanize=function(b){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!b)},I.valueOf=function(){return this.asMilliseconds()},I.milliseconds=function(){return this.get("milliseconds")},I.asMilliseconds=function(){return this.as("milliseconds")},I.seconds=function(){return this.get("seconds")},I.asSeconds=function(){return this.as("seconds")},I.minutes=function(){return this.get("minutes")},I.asMinutes=function(){return this.as("minutes")},I.hours=function(){return this.get("hours")},I.asHours=function(){return this.as("hours")},I.days=function(){return this.get("days")},I.asDays=function(){return this.as("days")},I.weeks=function(){return this.get("weeks")},I.asWeeks=function(){return this.as("weeks")},I.months=function(){return this.get("months")},I.asMonths=function(){return this.as("months")},I.years=function(){return this.get("years")},I.asYears=function(){return this.as("years")},H}(),O=function(H,I,b){return H.add(I.years()*b,"y").add(I.months()*b,"M").add(I.days()*b,"d").add(I.hours()*b,"h").add(I.minutes()*b,"m").add(I.seconds()*b,"s").add(I.milliseconds()*b,"ms")};return function(H,I,b){t=b,a=b().$utils(),b.duration=function(x,te){var le=b.locale();return G(x,{$l:le},te)},b.isDuration=K;var $=I.prototype.add,W=I.prototype.subtract;I.prototype.add=function(x,te){return K(x)?O(this,x,1):$.bind(this)(x,te)},I.prototype.subtract=function(x,te){return K(x)?O(this,x,-1):W.bind(this)(x,te)}}})})(Tv);var GI=Tv.exports;const BI=$o(GI);var pv={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(Ri,function(){var t="day";return function(a,s,l){var u=function(m){return m.add(4-m.isoWeekday(),t)},k=s.prototype;k.isoWeekYear=function(){return u(this).year()},k.isoWeek=function(m){if(!this.$utils().u(m))return this.add(7*(m-this.isoWeek()),t);var f,p,c,K,G=u(this),R=(f=this.isoWeekYear(),p=this.$u,c=(p?l.utc:l)().year(f).startOf("year"),K=4-c.isoWeekday(),c.isoWeekday()>4&&(K+=7),c.add(K,t));return G.diff(R,"week")+1},k.isoWeekday=function(m){return this.$utils().u(m)?this.day()||7:this.day(this.day()%7?m:m-7)};var v=k.startOf;k.startOf=function(m,f){var p=this.$utils(),c=!!p.u(f)||f;return p.p(m)==="isoweek"?c?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):v.bind(this)(m,f)}}})})(pv);var jI=pv.exports;const wI=$o(jI);var HI={exports:{}};(function(e,i){(function(t,a){e.exports=a(Ai)})(Ri,function(t){function a(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var s=a(t),l={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(l,null,!0),l})})(HI);const VI=sv(),hv=e=>PI({locale:"nb-NO",messages:e},VI),Av={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};Ai.extend(MI);Ai.extend(wI);Ai.extend(BI);hv(Av);hv(Av);const cv=e=>({block:e,element:i=>`${e}__${i}`,modifier:i=>`${e}--${i}`,elementWithModifier:(i,t)=>`${e}__${i} ${e}__${i}--${t}`});var yv={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function t(){for(var l="",u=0;u<arguments.length;u++){var k=arguments[u];k&&(l=s(l,a.call(this,k)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var k in l)i.call(l,k)&&l[k]&&(u=s(u,this&&this[k]||k));return u}function s(l,u){return u?l?l+" "+u:l+u:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(yv);var UI=yv.exports;const qI=Bg(UI),xI="_clipboard_1lghs_1",YI="_clipboard__button_1lghs_6",CI="_clipboard__button_1lghs_6",$I="_showTooltip_1lghs_1",JI="_clipboard__kopiert_1lghs_48",WI="_clipboard__kopiert_1lghs_48",zI="_clipboard__animationContainer_1lghs_57",ZI="_clipboard__animationContainer_1lghs_57",XI="_clipboard__animate_1lghs_60",QI="_clipboard__animate_1lghs_60",eO="_fadeInOut_1lghs_1",nO={clipboard:xI,clipboard__button:YI,clipboardButton:CI,showTooltip:$I,clipboard__kopiert:JI,clipboardKopiert:WI,clipboard__animationContainer:zI,clipboardAnimationContainer:ZI,clipboard__animate:XI,clipboardAnimate:QI,fadeInOut:eO};qI.bind(nO);const rO="_autocompleteSuggestion__substring_mf7v0_1",tO="_autocompleteSuggestion__substring_mf7v0_1",aO="_autocompleteSuggestion__inner_mf7v0_4",iO="_autocompleteSuggestion__inner_mf7v0_4",sO="_autocompleteSuggestion--active_mf7v0_12",Jt={autocompleteSuggestion__substring:rO,autocompleteSuggestionSubstring:tO,autocompleteSuggestion__inner:aO,autocompleteSuggestionInner:iO,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_mf7v0_12",autocompleteSuggestionActive:sO};class oO extends Y.Component{constructor(i){super(i),this.state={value:i.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:i}=this.props,{value:t}=this.state;i(t)}onMouseMove(){const{setSuggestionIndex:i,index:t}=this.props;i(t)}render(){const{match:i,active:t,avoidBlur:a,id:s}=this.props,{value:l}=this.state.value,u=l.toLowerCase().startsWith(i.toLowerCase());return pe.jsx("li",{id:s,role:"option","aria-selected":t,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:a,onMouseDown:a,onKeyDown:a,className:"autocompleteSuggestion typo-normal",children:u?pe.jsxs("span",{className:`${Jt.autocompleteSuggestion__inner} ${t?Jt["autocompleteSuggestion--active"]:""}`,children:[l.substring(0,i.length),pe.jsx("span",{className:Jt.autocompleteSuggestion__substring,children:l.substring(i.length)})]}):pe.jsx("span",{className:`${Jt.autocompleteSuggestion__inner} ${t?Jt["autocompleteSuggestion--active"]:""}`,children:l})})}}const lO="_autocomplete_9dlnp_1",dO="_autocomplete__suggestions_9dlnp_27",uO="_autocomplete__suggestions_9dlnp_27",kO="_autocomplete__suggestions--hidden_9dlnp_31",no={autocomplete:lO,autocomplete__suggestions:dO,autocompleteSuggestions:uO,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_9dlnp_31",autocompleteSuggestionsHidden:kO};class Q1 extends Y.Component{constructor(i){super(i),Qu(this,"input"),Qu(this,"inputRef"),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=t=>{this.input=t},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null}))}onChange(i){const{onChange:t}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),t(i)}onSearchButtonClick(i){const{onSearchButtonClick:t}=this.props;i.preventDefault(),t&&t()}onKeyDown(i){const{shouldShowSuggestions:t}=this.state;let{activeSuggestionIndex:a}=this.state;const{suggestions:s}=this.props,l=a>-1;switch(this.setState({setAriaActiveDescendant:i.keyCode===38||i.keyCode===40}),i.keyCode){case 9:l&&t&&this.setValue(s[a]);break;case 13:l&&t?(i.preventDefault(),this.setValue(s[a])):t&&s.length===1?this.setValue(s[0]):this.setState({shouldShowSuggestions:!1});break;case 27:t&&s.length>0&&(i.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:t&&(i.preventDefault(),a=a-1===-2?-1:a-1,this.setState({activeSuggestionIndex:a}));break;case 40:t&&(i.preventDefault(),a=a+1===s.length?s.length-1:a+1,this.setState({activeSuggestionIndex:a}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const i=setTimeout(()=>{const{shouldBlur:a}=this.state;a&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:i});const{onBlur:t}=this.props;t&&t()}setSuggestionIndex(i){this.setState({activeSuggestionIndex:i}),this.clearBlurDelay()}setValue(i){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:t}=this.props;t(i)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:i,id:t,ariaLabel:a,placeholder:s,value:l,name:u,shouldFocusOnMount:k,isLoading:v}=this.props,{activeSuggestionIndex:m,setAriaActiveDescendant:f,hasFocus:p,shouldShowSuggestions:c}=this.state,K=p&&c&&i.length>0,G=f&&m>-1?`${t}-item-${m}`:void 0;return pe.jsxs("div",{className:`${no.autocomplete} autocomplete`,"aria-expanded":K,"aria-owns":`${t}-suggestions`,"aria-haspopup":"listbox",children:[pe.jsx(To,{variant:"primary",id:t,name:u,"aria-label":a,"aria-autocomplete":"list","aria-controls":`${t}-suggestions`,"aria-activedescendant":G,placeholder:s,value:l,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:R=>{this.inputRef=R},className:"typo-normal",autoFocus:k,label:a,hideLabel:!0,children:pe.jsx(To.Button,{loading:v,onClick:this.onSearchButtonClick})}),pe.jsx("ul",{id:`${t}-suggestions`,role:"listbox",className:K?no.autocomplete__suggestions:no["autocomplete__suggestions--hidden"],children:K&&i.map((R,N)=>pe.jsx(oO,{id:`${t}-item-${N}`,index:N,value:R,match:l,active:N===m,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},R.key))})]})}}var ti=(e=>(e.warning="warning",e.success="success",e.danger="danger",e.default="default",e))(ti||{});const gO=({className:e})=>pe.jsxs("svg",{width:"28px",height:"28px",viewBox:"0 0 28 28",xmlns:"http://www.w3.org/2000/svg",className:e,children:[pe.jsx("title",{children:"Oppgave løst/avslått"}),pe.jsx("defs",{}),pe.jsx("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:pe.jsx("g",{fill:"#BA3A26",children:pe.jsx("path",{d:"M13.998761,0 C6.29390605,0 0.0146135764,6.26713043 4.90835943e-06,13.972 C-0.00729942565,17.7118261 1.44139349,21.230087 4.08069284,23.8803478 C6.7199922,26.5293913 10.2333769,27.9926957 13.9731959,28 L13.9999784,28 C21.703616,28 27.9841259,21.7316522 27.9999519,14.0255652 C28.0145606,6.30730435 21.7462246,0.0146086957 13.998761,0 Z M19.5853592,18.7453913 C19.8215326,18.9827826 19.8203152,19.3686957 19.5829244,19.606087 C19.4636203,19.7253913 19.3090119,19.7838261 19.1531861,19.7838261 C18.9985777,19.7838261 18.8415345,19.7241739 18.7222304,19.606087 L13.9963263,14.8606957 L9.25337871,19.5866087 C9.13407459,19.705913 8.97824879,19.7643478 8.822423,19.7643478 C8.66659721,19.7643478 8.51198881,19.7046957 8.39268468,19.5866087 C8.15529383,19.348 8.15529383,18.962087 8.39390207,18.725913 L13.138067,14 L8.41216291,9.2546087 C8.17477205,9.016 8.17598944,8.63130435 8.41459769,8.39513043 C8.65198854,8.15530435 9.03790085,8.15652174 9.27529171,8.39634783 L13.9999784,13.1405217 L18.742926,8.41582609 C18.9803168,8.17843478 19.3674465,8.17843478 19.60362,8.41704348 C19.8410109,8.65443478 19.8410109,9.04034783 19.6024026,9.27773913 L14.8594551,14.0036522 L19.5853592,18.7453913 Z"})})})]}),vO=({className:e})=>pe.jsxs("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",className:e,children:[pe.jsx("title",{children:"Behandlet - Oppgave løst/godkjent"}),pe.jsx("defs",{}),pe.jsx("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:pe.jsx("g",{fillRule:"nonzero",fill:"#06893A",children:pe.jsx("g",{children:pe.jsx("g",{id:"Filled_Version",children:pe.jsx("path",{d:"M15.7173333,0.122 C15.416,-0.0906666667 15.0006667,-0.0186666667 14.7886667,0.282666667 L4.91133333,14.302 L1.138,10.5293333 C0.878,10.2686667 0.455333333,10.2686667 0.195333333,10.5293333 C-0.0653333333,10.7906667 -0.0653333333,11.212 0.195333333,11.472 L4.52866667,15.8053333 C4.654,15.9306667 4.824,16 5,16 C5.212,16 5.418,15.898 5.54466667,15.7173333 L15.878,1.05066667 C16.09,0.75 16.018,0.333333333 15.7173333,0.122 Z"})})})})})]}),EO=({className:e})=>pe.jsx("svg",{width:"1.25rem",height:"1.25em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false",role:"img",style:{color:"var(--ac-alert-icon-warning-color,var(--a-icon-warning))"},className:e,children:pe.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25ZM12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",fill:"currentColor"})}),fO="_step_1k8mj_1",mO="_step__button_1k8mj_9",TO="_step__button_1k8mj_9",pO="_step__indicator--default_1k8mj_25",hO="_step__indicator--success_1k8mj_29",AO="_step__indicator--partial_1k8mj_33",cO="_step__indicator--warning_1k8mj_36",yO="_step__indicator--danger_1k8mj_44",RO="_step__button--active_1k8mj_56",_O="_step__text-icon-container_1k8mj_62",bO="_step__indicator_1k8mj_25",NO="_step__indicator_1k8mj_25",SO="_step__indicator--active_1k8mj_80",IO="_step__icon_1k8mj_128",OO="_step__icon_1k8mj_128",LO="_step__icon--warning_1k8mj_136",KO="_step__icon--partial_1k8mj_148",DO="_step__icon--success_1k8mj_162",PO="_step__icon--danger_1k8mj_166",FO="_step__icon-placeholder_1k8mj_172",MO="_step__arrow-container_1k8mj_179",GO="_showTooltip_1k8mj_1",$e={step:fO,step__button:mO,stepButton:TO,"step__indicator--default":"_step__indicator--default_1k8mj_25",stepIndicatorDefault:pO,"step__indicator--success":"_step__indicator--success_1k8mj_29",stepIndicatorSuccess:hO,"step__indicator--partial":"_step__indicator--partial_1k8mj_33",stepIndicatorPartial:AO,"step__indicator--warning":"_step__indicator--warning_1k8mj_36",stepIndicatorWarning:cO,"step__indicator--danger":"_step__indicator--danger_1k8mj_44",stepIndicatorDanger:yO,"step__button--active":"_step__button--active_1k8mj_56",stepButtonActive:RO,"step__text-icon-container":"_step__text-icon-container_1k8mj_62",stepTextIconContainer:_O,step__indicator:bO,stepIndicator:NO,"step__indicator--active":"_step__indicator--active_1k8mj_80",stepIndicatorActive:SO,step__icon:IO,stepIcon:OO,"step__icon--warning":"_step__icon--warning_1k8mj_136",stepIconWarning:LO,"step__icon--partial":"_step__icon--partial_1k8mj_148",stepIconPartial:KO,"step__icon--success":"_step__icon--success_1k8mj_162",stepIconSuccess:DO,"step__icon--danger":"_step__icon--danger_1k8mj_166",stepIconDanger:PO,"step__icon-placeholder":"_step__icon-placeholder_1k8mj_172",stepIconPlaceholder:FO,"step__arrow-container":"_step__arrow-container_1k8mj_179",stepArrowContainer:MO,showTooltip:GO},Wt=cv("step"),BO=({type:e,isFinished:i,usePartialStatus:t})=>{const a=e===ti.warning,s=e===ti.danger;return t&&!a?pe.jsx("div",{className:ho(`${$e[Wt.element("icon")]} ${$e["step__icon--partial"]}`,{[$e["step__icon--success"]]:!s,[$e["step__icon--danger"]]:s})}):i?pe.jsx(vO,{className:`${$e[Wt.element("icon")]} ${$e["step__icon--success"]}`}):a?pe.jsx(EO,{className:`${$e[Wt.element("icon")]} ${$e["step__icon--warning"]} `}):s?pe.jsx(gO,{className:`${$e[Wt.element("icon")]} ${$e["step__icon--danger"]}`}):pe.jsx("span",{className:$e[Wt.element("icon-placeholder")]})},gt=cv("step");Y.memo(({label:e,index:i,isActive:t,onClick:a,isFinished:s,type:l=ti.default,usePartialStatus:u,stepArrowContainerStyle:k})=>{const v=f=>{f.preventDefault(),a&&a(i)},m=ho(`${$e[gt.element("indicator")]} ${$e[`step__indicator--${l}`]}`,{[$e["step__indicator--active"]]:t,[$e["step__indicator--partial"]]:u});return pe.jsxs("li",{className:$e[gt.block],"aria-current":t?"step":void 0,children:[pe.jsxs("button",{className:t?`${$e[gt.element("button")]} ${$e["step__button--active"]}`:$e[gt.element("button")],type:"button",onClick:v,"data-tooltip":e,children:[pe.jsxs("span",{className:$e[gt.element("text-icon-container")],children:[pe.jsx(BO,{type:l,isFinished:s,usePartialStatus:u}),pe.jsx(ra,{size:"small",as:"span",children:e})]}),pe.jsx("span",{className:m})]}),t&&pe.jsx("div",{className:ho(k,`${$e[gt.element("arrow-container")]} step__arrow-container`)})]},e.split(" ").join(""))});Y.createContext({});pn(hi);var Rv={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function t(){for(var l="",u=0;u<arguments.length;u++){var k=arguments[u];k&&(l=s(l,a.call(this,k)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var k in l)i.call(l,k)&&l[k]&&(u=s(u,this&&this[k]||k));return u}function s(l,u){return u?l?l+" "+u:l+u:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(Rv);var jO=Rv.exports;const wO=yk(jO),HO="_boks_c3bfh_1",VO="_harBorderLeft_c3bfh_8",UO="_harBorderTop_c3bfh_12",qO={boks:HO,harBorderLeft:VO,harBorderTop:UO};wO.bind(qO);const xO=e=>{const i=e.aktiveNaturalytelser.reduce((a,s)=>{const l=s.type;return l in a?{...a,[l]:[...a[l],s]}:{...a,[l]:[s]}},{}),t={};return Object.entries(i).forEach(([a,s])=>{const l=s.sort((u,k)=>tS({fom:u.periode.fomDato,tom:u.periode.tomDato},{fom:k.periode.fomDato,tom:k.periode.tomDato})).reverse();t[a]=l.flatMap((u,k,v)=>{const m=v[k+1],f=u.periode.tomDato,p=m==null?void 0:m.periode.fomDato;return f===pt?[]:[{...u,periode:{fomDato:Wu(f,1),tomDato:p?Wu(p,-1):pt}}]})}),t},_v=({inntektsmelding:e,alleKodeverk:i})=>{const t=er(),a=xO(e);return M.jsx(cr,{tittel:t.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?M.jsx("span",{children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):M.jsx(Tt,{children:Object.entries(a).map(([s,l])=>{var u;return M.jsxs(Tt,{children:[M.jsx("span",{children:(u=i[Uo.NATURAL_YTELSE_TYPE].find(k=>k.kode===s))==null?void 0:u.navn}),M.jsx("ul",{children:l.map(k=>M.jsxs(Y.Fragment,{children:[M.jsxs("li",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",M.jsx(Qt,{dateString:k.periode.fomDato})]}),k.periode.tomDato!==pt&&M.jsxs("li",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",M.jsx(Qt,{dateString:k.periode.tomDato})]}),M.jsxs("li",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",Et(k.beloepPerMnd.verdi)]})]},k.indexKey))})]},s)})})})};_v.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const bv=({kildeSystem:e})=>{const i=er(),t=P.useMemo(()=>{switch(e.toUpperCase()){case"NAV_NO":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}},[i,e]);return M.jsx(cr,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:t})};bv.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const Nv=({inntektsmelding:e})=>{const i=er();return M.jsxs(cr,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[M.jsxs("span",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),M.jsxs("span",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};Nv.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""}}};var De=(e=>(e.DEFAULT="default",e.INNGANGSVILKAR="inngangsvilkar",e.BEHANDLE_INNSYN="behandle_innsyn",e.BEREGNING="beregning",e.BEREGNINGSGRUNNLAG="beregningsgrunnlag",e.KLAGE_NAV_FAMILIE_OG_PENSJON="klage_nav_familie_og_pensjon",e.KLAGE_NAV_KLAGEINSTANS="klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_KLAGEINSTANS="formkrav_klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON="formkrav_klage_nav_familie_og_pensjon",e.FORTSATTMEDLEMSKAP="fortsattmedlemskap",e.OPPLYSNINGSPLIKT="opplysningsplikt",e.SOEKNADSFRIST="soeknadsfrist",e.TILBAKEKREVING="tilbakekreving",e.FORELDELSE="foreldelse",e.TILKJENT_YTELSE="tilkjent_ytelse",e.VARSEL="varsel",e.VEDTAK="vedtak",e.UTTAK="uttak",e.SIMULERING="simulering",e.KLAGE_RESULTAT="resultat",e.ANKEBEHANDLING="ankebehandling",e.ANKE_MERKNADER="ankemerknader",e.ANKE_RESULTAT="ankeresultat",e))(De||{}),ae=(e=>(e.ADOPSJONSVILKARET="adopsjonsvilkaaret",e.ARBEIDSFORHOLD="arbeidsforhold",e.ARBEID_OG_INNTEKT="arbeidoginntekt",e.BEREGNING="beregning",e.BESTEBEREGNING="besteberegning",e.DEFAULT="default",e.FORDELING="fordeling",e.INNTEKTSMELDINGER="inntektsmeldinger",e.FEILUTBETALING="feilutbetaling",e.FODSELSVILKARET="foedselsvilkaaret",e.FODSELTILRETTELEGGING="fodseltilrettelegging",e.MEDLEMSKAPSVILKARET="medlemskapsvilkaaret",e.OMSORG="omsorg",e.OMSORG_OG_RETT="omsorgogrett",e.OMSORGSVILKARET="omsorgsvilkaaret",e.OPPTJENINGSVILKARET="opptjeningsvilkaaret",e.PERMISJON="permisjon",e.SAKEN="saken",e.UTTAK="uttak",e.VERGE="verge",e.YTELSER="ytelser",e.UTTAK_DOKUMENTASJON="uttakdokumentasjon",e))(ae||{});ae.DEFAULT,De.BEREGNING,ae.DEFAULT,De.BEREGNINGSGRUNNLAG,ae.BESTEBEREGNING,De.DEFAULT,ae.ADOPSJONSVILKARET,ae.ARBEIDSFORHOLD,ae.BEREGNING,ae.FODSELSVILKARET,ae.FORDELING,ae.MEDLEMSKAPSVILKARET,ae.OMSORG,ae.OPPTJENINGSVILKARET,ae.OPPTJENINGSVILKARET,ae.OMSORGSVILKARET,ae.ARBEIDSFORHOLD,ae.UTTAK_DOKUMENTASJON,ae.DEFAULT,De.INNGANGSVILKAR,ae.DEFAULT,De.KLAGE_NAV_FAMILIE_OG_PENSJON,ae.DEFAULT,De.KLAGE_NAV_KLAGEINSTANS,ae.DEFAULT,De.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,ae.DEFAULT,De.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,ae.DEFAULT,De.ANKEBEHANDLING,ae.DEFAULT,De.ANKE_MERKNADER,ae.DEFAULT,De.OPPLYSNINGSPLIKT,ae.DEFAULT,De.INNGANGSVILKAR,ae.DEFAULT,De.INNGANGSVILKAR,ae.MEDLEMSKAPSVILKARET,De.INNGANGSVILKAR,ae.DEFAULT,De.INNGANGSVILKAR,ae.DEFAULT,De.INNGANGSVILKAR,ae.DEFAULT,De.SOEKNADSFRIST,ae.DEFAULT,De.VEDTAK,ae.UTTAK,ae.UTTAK,ae.UTTAK_DOKUMENTASJON,ae.SAKEN,ae.DEFAULT,De.UTTAK,ae.VERGE,ae.DEFAULT,De.TILKJENT_YTELSE,ae.DEFAULT,De.SIMULERING,ae.SAKEN,ae.FODSELTILRETTELEGGING,ae.DEFAULT,De.INNGANGSVILKAR,ae.DEFAULT,ae.UTTAK_DOKUMENTASJON,ae.DEFAULT,De.FORTSATTMEDLEMSKAP,ae.ARBEID_OG_INNTEKT,De.DEFAULT,ae.OMSORG_OG_RETT;ae.FEILUTBETALING,ae.DEFAULT,De.TILBAKEKREVING,ae.DEFAULT,De.FORELDELSE,ae.DEFAULT,De.VEDTAK,ae.VERGE;const YO=(e,i,t)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${i}&dokumentId=${t}`,Sv=({inntektsmelding:e,fagsak:i})=>M.jsx(og,{type:"button",onClick:()=>{window.open(YO(i.saksnummer,e.journalpostId,e.dokumentId),"_blank")},variant:"secondary",size:"small",icon:M.jsx(Wy,{}),children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.modal.trigger"})});Sv.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"string",required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"dokumenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"tittel",value:{name:"string",required:!0}},{key:"body",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
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
}>`},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""}}};const Iv=({inntektsmelding:e})=>{const i=er();if(e.refusjonsperioder.length===0)return M.jsx(cr,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:M.jsx("span",{children:e.refusjonPrMnd?Et(e.refusjonPrMnd):M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.refusjon.ingen"})})});const t=[...e.refusjonsperioder].sort((a,s)=>new Date(a.fom).getTime()-new Date(s.fom).getTime());return M.jsxs(Tt,{gap:"0",children:[M.jsx("span",{children:"Krever refusjon"}),M.jsx("span",{children:Et(e.refusjonPrMnd??0)}),M.jsx("span",{children:"Endringer i perioden:"}),M.jsx("ul",{children:t.map(a=>M.jsx("li",{children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:Et(a.refusjonsbeløp.verdi),fom:M.jsx(Qt,{dateString:a.fom})}})},a.indexKey))})]})};Iv.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""}}};const Ov=({startDatoPermisjon:e,ytelse:i})=>{const t=er();return e?M.jsxs(cr,{tittel:t.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:i.toLowerCase()}),children:[M.jsx("span",{children:e?M.jsx(Qt,{dateString:e}):"-"}),M.jsx("span",{children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};Ov.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const CO="_behandlingCircleIngen_giqi4_1",$O="_behandlingCircleDenne_giqi4_5",JO="_behandlingCircleAndre_giqi4_9",WO="_container_giqi4_13",zO="_ingenInntektsmeldinger_giqi4_20",Xt={behandlingCircleIngen:CO,behandlingCircleDenne:$O,behandlingCircleAndre:JO,container:WO,ingenInntektsmeldinger:zO},Lv=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:i,fagsak:t,alleBehandlinger:a,behandling:s,alleKodeverk:l})=>{const u=er();return M.jsxs(Tt,{gap:"4",className:Xt.container,children:[M.jsxs(vt,{gap:"4",justify:"space-between",align:"start",children:[M.jsxs(ag,{level:"3",size:"small",children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",M.jsx(ni,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),M.jsx(Sv,{fagsak:t,inntektsmelding:e})]}),M.jsxs(k_,{columns:3,gap:"8",children:[M.jsx(Ig,{arbeidsgiverOpplysningerPerId:i,arbeidsgiverIdent:e.arbeidsgiverIdent}),M.jsx(cr,{tittel:u.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:M.jsx("span",{children:Et(e.inntektPrMnd)})}),M.jsx(Og,{alleKodeverk:l,inntektsmelding:e,alleBehandlinger:a,behandling:s}),M.jsx(Nv,{inntektsmelding:e}),M.jsx(Ov,{ytelse:hN(l,Uo.FAGSAK_YTELSE,t.fagsakYtelseType),startDatoPermisjon:e.startDatoPermisjon}),M.jsx(bv,{kildeSystem:e.kildeSystem}),M.jsx(_v,{inntektsmelding:e,alleKodeverk:l}),M.jsx(Iv,{inntektsmelding:e})]})]})};Lv.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"string",required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"dokumenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"tittel",value:{name:"string",required:!0}},{key:"body",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
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
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const ZO={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},fk=pn(ZO),Jo=({arbeidsgiverOpplysningerPerId:e,fagsak:i,alleBehandlinger:t,behandling:a,alleKodeverk:s,inntektsmeldinger:l})=>{const[u,k]=P.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),v=p=>{k(u&&p===u.orderBy&&u.direction==="descending"?void 0:{orderBy:p,direction:u&&p===u.orderBy&&u.direction==="ascending"?"descending":"ascending"})},m=u?XO({inntektsmeldinger:l,arbeidsgiverOpplysningerPerId:e,sortKey:u.orderBy,behandling:a}):l,f=(u==null?void 0:u.direction)==="ascending"?m:m.toReversed();return f.length===0?M.jsx(Bu,{value:fk,children:M.jsxs(vt,{gap:"2",justify:"center",align:"center",className:Xt.ingenInntektsmeldinger,children:[M.jsx(ra,{children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.ingen"})}),M.jsx(aR,{})]})}):M.jsx(Bu,{value:fk,children:M.jsxs(Ue,{sort:u,onSortChange:p=>v(p),children:[M.jsx(Ue.Header,{children:M.jsxs(Ue.Row,{children:[M.jsx(Ue.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),M.jsx(Ue.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),M.jsx(Ue.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),M.jsx(Ue.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),M.jsx(Ue.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),M.jsx(Ue.HeaderCell,{})]})}),M.jsx(Ue.Body,{children:f.map(p=>{var c;return M.jsxs(Ue.ExpandableRow,{expandOnRowClick:!0,togglePlacement:"right",content:M.jsx(Lv,{alleKodeverk:s,fagsak:i,behandling:a,alleBehandlinger:t,arbeidsgiverOpplysningerPerId:e,inntektsmelding:p}),children:[M.jsx(Ue.DataCell,{children:M.jsx(ni,{dateTimeString:p.innsendingstidspunkt,separator:"kl"})}),M.jsx(Ue.DataCell,{children:((c=e[p.arbeidsgiverIdent])==null?void 0:c.navn)??"-"}),M.jsx(Ue.DataCell,{children:p.startDatoPermisjon?M.jsx(Qt,{dateString:p.startDatoPermisjon}):"-"}),M.jsx(Ue.DataCell,{children:Et(p.inntektPrMnd)}),M.jsx(Ue.DataCell,{children:M.jsx(QO,{behandling:a,inntektsmelding:p})})]},`${p.journalpostId}-${p.internArbeidsforholdId}`)})})]})})},XO=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:i,sortKey:t,behandling:a})=>t==="arbeidsgiverIdent"?e.slice().sort((s,l)=>{var v,m;const u=(v=i[s.arbeidsgiverIdent])==null?void 0:v.navn,k=(m=i[l.arbeidsgiverIdent])==null?void 0:m.navn;return ro(u,k)}):t==="tilknyttedeBehandlingIder"?e.slice().sort((s,l)=>{const u=Lo({behandling:a,inntektsmelding:s}),k=Lo({behandling:a,inntektsmelding:l});return ro(u,k)}):e.slice().sort((s,l)=>{const u=s[t],k=l[t];return ro(u,k)}),ro=(e,i)=>e===void 0?-1:i===void 0?1:e<i?-1:e>i?1:0,QO=({behandling:e,inntektsmelding:i})=>{const t=Lo({behandling:e,inntektsmelding:i});return t==="DENNE"?M.jsxs(vt,{gap:"1",align:"center",children:[M.jsx(Js,{className:Xt.behandlingCircleDenne}),M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):t==="ANDRE"?M.jsxs(vt,{gap:"1",align:"center",children:[M.jsx(Js,{className:Xt.behandlingCircleAndre}),M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):M.jsxs(vt,{gap:"1",align:"center",children:[M.jsx(Js,{className:Xt.behandlingCircleIngen}),M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},Lo=({behandling:e,inntektsmelding:i})=>i.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":i.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";Jo.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"string",required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"dokumenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"tittel",value:{name:"string",required:!0}},{key:"body",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
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
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const e1=[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],n1=[{kode:"REGISTRER_OM_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrering av opplysninger om verge/fullmektig"},{kode:"MANGELFULL_SØKNAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Mangelfull søknad"},{kode:"FASTSATT_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak - splitting av periode"},{kode:"BEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet"},{kode:"REGISTRER_PAPIRSØK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrer papirsøknad"},{kode:"BEH_STARTET_PÅ_NYTT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet på nytt"},{kode:"MIGRERT_FRA_INFOTRYGD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder flytting av sak fra Infotrygd"},{kode:"FORSLAG_VEDTAK_UTEN_TOTRINN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått"},{kode:"BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjenopptatt"},{kode:"AVBRUTT_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling er henlagt"},{kode:"ANKE_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ankebehandling"},{kode:"BREV_BESTILT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev bestilt"},{kode:"ENDRET_DEKNINGSGRAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Dekningsgrad er endret"},{kode:"OPPGAVE_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Oppgave før vedtak"},{kode:"IVERKSETTELSE_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen venter på iverksettelse"},{kode:"FASTSATT_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak"},{kode:"OVST_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak"},{kode:"INNSYN_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Innsynsbehandling opprettet"},{kode:"TILBAKEKR_VIDEREBEHANDLING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Metode for å håndtere tilbakekreving av feilutbetailng er valgt."},{kode:"SAK_GODKJENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak godkjent"},{kode:"BEH_KØET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er satt på vent"},{kode:"NYE_REGOPPLYSNINGER",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Nye registeropplysninger"},{kode:"BEH_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling på vent"},{kode:"TERMINBEKREFTELSE_UGYLDIG",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Terminbekreftelsens utstedt dato er før 22. svangerskapsuke. Behandlingen fortsatt uten ny terminbekreftelse"},{kode:"FAKTA_ENDRET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Fakta endret"},{kode:"MIGRERT_FRA_INFOTRYGD_FJERNET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder ikke lenger flytting av sak fra Infotrygd"},{kode:"BYTT_ENHET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Bytt enhet"},{kode:"REVURD_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Revurdering opprettet"},{kode:"KLAGE_BEH_NFP",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling NFP"},{kode:"KØET_BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Køet behandling er gjenopptatt"},{kode:"OVST_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak - splitting av periode"},{kode:"ANKEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Anke mottatt"},{kode:"UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet soknadsperiode"},{kode:"KLAGE_BEH_NK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling KA"},{kode:"AVKLART_AKTIVITETSKRAV",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Avklart aktivitetskrav"},{kode:"NY_INFO_FRA_TPS",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ny info fra TPS"},{kode:"KLAGEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klage mottatt"},{kode:"VEDTAK_FATTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak fattet"},{kode:"BEH_AVBRUTT_VUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vurdering før vedtak"},{kode:"UENDRET_UTFALL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Uendret utfall"},{kode:"VRS_REV_IKKE_SNDT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Varsel om revurdering ikke sendt"},{kode:"SPOLT_TILBAKE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er flyttet"},{kode:"OPPTJENING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet opptjeningsperiode"},{kode:"SAK_RETUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak retur"},{kode:"FJERNET_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Opplysninger om verge/fullmektig fjernet"},{kode:"BEH_MAN_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Gjenoppta behandling"},{kode:"BEH_OPPDATERT_NYE_OPPL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen oppdatert med nye opplysninger"},{kode:"VEDLEGG_MOTTATT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedlegg mottatt"},{kode:"OVERSTYRT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Overstyrt"},{kode:"BREV_SENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev sendt"},{kode:"FORSLAG_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått og sendt til beslutter"}],r1=[{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],t1=[{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"},{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"}],a1=[{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"}],i1=[{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"}],s1=[{kode:"EGEN_NÆRING",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Egen næring"},{kode:"BRUKERS_ANDEL",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Brukers andel"},{kode:"FRILANS",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Frilans"}],o1=[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],l1=[{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"},{kode:"ENDRING_I_BEREGNING_OG_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning og uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"}],d1=[{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilans"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (fisker)"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (dagmamma)"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"},{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"}],u1=[{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"}],k1=[{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Vedtaksinstans"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aleneomsorg og annenpart rett"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstans"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"}],g1=[{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"},{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"}],v1=[{kode:"HJEMSENDE_UTEN_Å_OPPHEVE",kodeverk:"KLAGEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"OPPHEVE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket oppheves"},{kode:"MEDHOLD_I_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Medhold"},{kode:"STADFESTE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"AVVIS_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Klagen avvises"}],E1=[{kode:"BEH_STARTET_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Behandling startet på nytt"},{kode:"BERORT_BEH_OPPHOR",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens vedtak er opphørt"},{kode:"SAKSBEH_START_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Saksbehandling starter på nytt"},{kode:"BERORT_BEH_ENDRING_DEKNINGSGRAD",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens behandling har endret antall disponible stønadsdager"}],f1=[{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"},{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"ANNET",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Andre typer som f.eks utsettelse"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"}],m1=[{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt søknad mangler"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"}],T1=[{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"}],p1=[{kode:"TILBAKEKR_IGNORER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling, avvent samordning"},{kode:"TILBAKEKR_INNTREKK",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling hvor inntrekk dekker hele beløpet"},{kode:"TILBAKEKR_OPPRETT",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling med tilbakekreving"},{kode:"TILBAKEKR_OPPDATER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Endringer vil oppdatere eksisterende feilutbetalte perioder og beløp."}],h1=[{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],A1=[{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"}],c1=[{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"}],y1=[{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"}],R1=[{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"},{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"}],_1=[{kode:"UTTAK_PERIODE_FOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fradato uttaksperiode"},{kode:"TPS_ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"UTTAK_PERIODE_TOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Tildato uttaksperiode"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"FODSELSDATO",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fødselsdato"}],b1=[{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"}],N1=[{kode:"MANGLENDE_OPPLYSNINGER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen, men har manglende opplysninger"},{kode:"SØKER_ER_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er i permisjon"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekten er ikke med i beregningsgrunnlaget"},{kode:"IKKE_BRUK",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Ikke bruk"},{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK_MED_OVERSTYRTE_PERIODER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"BENYTT_A_INNTEKT_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekt fra A-inntekt benyttes i beregningsgrunnlaget"},{kode:"SØKER_ER_IKKE_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er ikke i permisjon"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er lagt til av saksbehandler beregningsgrunnlaget"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er slått sammen med annet"}],S1=[{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"}],I1=[{kode:"CAF",kodeverk:"LANDKODER",navn:"SENTRALAFRIKA. REP."},{kode:"ARG",kodeverk:"LANDKODER",navn:"ARGENTINA"},{kode:"IOT",kodeverk:"LANDKODER",navn:"BRITISK-INDISKE HAV"},{kode:"CCK",kodeverk:"LANDKODER",navn:"KOKOSØYENE"},{kode:"MEX",kodeverk:"LANDKODER",navn:"MEXICO"},{kode:"CHN",kodeverk:"LANDKODER",navn:"REPUBLIKKEN KINA"},{kode:"RUS",kodeverk:"LANDKODER",navn:"RUSSLAND"},{kode:"BHS",kodeverk:"LANDKODER",navn:"BAHAMAS"},{kode:"SYC",kodeverk:"LANDKODER",navn:"SEYCHELLENE"},{kode:"CYP",kodeverk:"LANDKODER",navn:"KYPROS"},{kode:"AUT",kodeverk:"LANDKODER",navn:"ØSTERRIKE"},{kode:"QAT",kodeverk:"LANDKODER",navn:"QATAR"},{kode:"VNM",kodeverk:"LANDKODER",navn:"VIETNAM"},{kode:"HMD",kodeverk:"LANDKODER",navn:"HEARD OG MCDONALD ØYENE"},{kode:"KEN",kodeverk:"LANDKODER",navn:"KENYA"},{kode:"ASM",kodeverk:"LANDKODER",navn:"AM. SAMOA"},{kode:"PAK",kodeverk:"LANDKODER",navn:"PAKISTAN"},{kode:"ATG",kodeverk:"LANDKODER",navn:"ANTIGUA OG BARBUDA"},{kode:"TZA",kodeverk:"LANDKODER",navn:"TANZANIA"},{kode:"ZAF",kodeverk:"LANDKODER",navn:"SØR-AFRIKA"},{kode:"CMR",kodeverk:"LANDKODER",navn:"KAMERUN"},{kode:"MLI",kodeverk:"LANDKODER",navn:"MALI"},{kode:"SLV",kodeverk:"LANDKODER",navn:"EL SALVADOR"},{kode:"MAF",kodeverk:"LANDKODER",navn:"SAINT MARTIN"},{kode:"KGZ",kodeverk:"LANDKODER",navn:"KIRGISISTAN"},{kode:"FJI",kodeverk:"LANDKODER",navn:"FIJI"},{kode:"RWA",kodeverk:"LANDKODER",navn:"RWANDA"},{kode:"GEO",kodeverk:"LANDKODER",navn:"GEORGIA"},{kode:"REU",kodeverk:"LANDKODER",navn:"REUNION"},{kode:"MTQ",kodeverk:"LANDKODER",navn:"MARTINIQUE"},{kode:"SDN",kodeverk:"LANDKODER",navn:"SUDAN"},{kode:"AND",kodeverk:"LANDKODER",navn:"ANDORRA"},{kode:"COK",kodeverk:"LANDKODER",navn:"COOKØYENE"},{kode:"SHN",kodeverk:"LANDKODER",navn:"ST. HELENA"},{kode:"COL",kodeverk:"LANDKODER",navn:"COLOMBIA"},{kode:"PER",kodeverk:"LANDKODER",navn:"PERU"},{kode:"STP",kodeverk:"LANDKODER",navn:"SAO TOME OG PRINCIPE"},{kode:"COM",kodeverk:"LANDKODER",navn:"KOMORENE"},{kode:"LUX",kodeverk:"LANDKODER",navn:"LUXEMBOURG"},{kode:"PNG",kodeverk:"LANDKODER",navn:"PAPUA NY-GUINEA"},{kode:"MKD",kodeverk:"LANDKODER",navn:"MAKEDONIA"},{kode:"GIN",kodeverk:"LANDKODER",navn:"GUINEA"},{kode:"CYM",kodeverk:"LANDKODER",navn:"CAYMANØYENE"},{kode:"VGB",kodeverk:"LANDKODER",navn:"JOMFRUØYENE BRIT."},{kode:"IRL",kodeverk:"LANDKODER",navn:"IRLAND"},{kode:"XXX",kodeverk:"LANDKODER",navn:"STATSLØS"},{kode:"HTI",kodeverk:"LANDKODER",navn:"HAITI"},{kode:"LBN",kodeverk:"LANDKODER",navn:"LIBANON"},{kode:"BRN",kodeverk:"LANDKODER",navn:"BRUNEI"},{kode:"GMB",kodeverk:"LANDKODER",navn:"GAMBIA"},{kode:"MLT",kodeverk:"LANDKODER",navn:"MALTA"},{kode:"CRI",kodeverk:"LANDKODER",navn:"COSTA RICA"},{kode:"UZB",kodeverk:"LANDKODER",navn:"UZBEKISTAN"},{kode:"CXR",kodeverk:"LANDKODER",navn:"CHRISTMASØYA"},{kode:"TUR",kodeverk:"LANDKODER",navn:"TYRKIA"},{kode:"UKR",kodeverk:"LANDKODER",navn:"UKRAINA"},{kode:"SUN",kodeverk:"LANDKODER",navn:"SOVJETUNIONEN"},{kode:"PYF",kodeverk:"LANDKODER",navn:"FRANSK POLYNESIA"},{kode:"MNE",kodeverk:"LANDKODER",navn:"MONTENEGRO"},{kode:"BIH",kodeverk:"LANDKODER",navn:"BOSNIA-HERCEGOVINA"},{kode:"PAN",kodeverk:"LANDKODER",navn:"PANAMA"},{kode:"SJM",kodeverk:"LANDKODER",navn:"SVALBARD OG JAN MAYEN"},{kode:"NIU",kodeverk:"LANDKODER",navn:"NIUE"},{kode:"SUR",kodeverk:"LANDKODER",navn:"SURINAM"},{kode:"MUS",kodeverk:"LANDKODER",navn:"MAURITIUS"},{kode:"CHE",kodeverk:"LANDKODER",navn:"SVEITS"},{kode:"BEL",kodeverk:"LANDKODER",navn:"BELGIA"},{kode:"TTO",kodeverk:"LANDKODER",navn:"TRINIDAD OG TOBAGO"},{kode:"SWZ",kodeverk:"LANDKODER",navn:"SWAZILAND"},{kode:"TUN",kodeverk:"LANDKODER",navn:"TUNISIA"},{kode:"GLP",kodeverk:"LANDKODER",navn:"GUADELOUPE"},{kode:"KWT",kodeverk:"LANDKODER",navn:"KUWAIT"},{kode:"DMA",kodeverk:"LANDKODER",navn:"DOMINICA"},{kode:"BGR",kodeverk:"LANDKODER",navn:"BULGARIA"},{kode:"ISL",kodeverk:"LANDKODER",navn:"ISLAND"},{kode:"SVN",kodeverk:"LANDKODER",navn:"SLOVENIA"},{kode:"PLW",kodeverk:"LANDKODER",navn:"PALAU"},{kode:"GBR",kodeverk:"LANDKODER",navn:"STORBRITANNIA"},{kode:"NAM",kodeverk:"LANDKODER",navn:"NAMIBIA"},{kode:"FSM",kodeverk:"LANDKODER",navn:"MIKRONESIAFØD."},{kode:"GNB",kodeverk:"LANDKODER",navn:"GUINEA-BISSAU"},{kode:"UMI",kodeverk:"LANDKODER",navn:"MINDRE STILLEHAVSØYER"},{kode:"MDA",kodeverk:"LANDKODER",navn:"MOLDOVA"},{kode:"MMR",kodeverk:"LANDKODER",navn:"MYANMAR (BURMA)"},{kode:"MOZ",kodeverk:"LANDKODER",navn:"MOSAMBIK"},{kode:"SGS",kodeverk:"LANDKODER",navn:"SØR-GEORGIA OG SØR-SANDWICHØYE"},{kode:"NPL",kodeverk:"LANDKODER",navn:"NEPAL"},{kode:"BES",kodeverk:"LANDKODER",navn:"BONAIRE, SINT EUSTATIUS, SABA"},{kode:"LBR",kodeverk:"LANDKODER",navn:"LIBERIA"},{kode:"MDG",kodeverk:"LANDKODER",navn:"MADAGASKAR"},{kode:"VIR",kodeverk:"LANDKODER",navn:"JOMFRUØYENE AM."},{kode:"ARE",kodeverk:"LANDKODER",navn:"DE ARABISKE EMIRATER"},{kode:"USA",kodeverk:"LANDKODER",navn:"USA"},{kode:"NFK",kodeverk:"LANDKODER",navn:"NORFOLKØYA"},{kode:"HKG",kodeverk:"LANDKODER",navn:"HONGKONG"},{kode:"DEU",kodeverk:"LANDKODER",navn:"TYSKLAND"},{kode:"LIE",kodeverk:"LANDKODER",navn:"LIECHTENSTEIN"},{kode:"ECU",kodeverk:"LANDKODER",navn:"ECUADOR"},{kode:"POL",kodeverk:"LANDKODER",navn:"POLEN"},{kode:"PRK",kodeverk:"LANDKODER",navn:"NORD-KOREA"},{kode:"GGY",kodeverk:"LANDKODER",navn:"GUERNSEY"},{kode:"NZL",kodeverk:"LANDKODER",navn:"NEW ZEALAND"},{kode:"MAR",kodeverk:"LANDKODER",navn:"MAROKKO"},{kode:"BWA",kodeverk:"LANDKODER",navn:"BOTSWANA"},{kode:"GUM",kodeverk:"LANDKODER",navn:"GUAM"},{kode:"YUG",kodeverk:"LANDKODER",navn:"JUGOSLAVIA"},{kode:"SEN",kodeverk:"LANDKODER",navn:"SENEGAL"},{kode:"MWI",kodeverk:"LANDKODER",navn:"MALAWI"},{kode:"TKM",kodeverk:"LANDKODER",navn:"TURKMENISTAN"},{kode:"GAB",kodeverk:"LANDKODER",navn:"GABON"},{kode:"FIN",kodeverk:"LANDKODER",navn:"FINLAND"},{kode:"PRY",kodeverk:"LANDKODER",navn:"PARAGUAY"},{kode:"PSE",kodeverk:"LANDKODER",navn:"DET PALESTINSKE OMRÅDET"},{kode:"FRA",kodeverk:"LANDKODER",navn:"FRANKRIKE"},{kode:"ZWE",kodeverk:"LANDKODER",navn:"ZIMBABWE"},{kode:"AZE",kodeverk:"LANDKODER",navn:"AZERBAJDZJAN"},{kode:"SXM",kodeverk:"LANDKODER",navn:"SINT MAARTEN"},{kode:"NIC",kodeverk:"LANDKODER",navn:"NICARAGUA"},{kode:"CAN",kodeverk:"LANDKODER",navn:"CANADA"},{kode:"COG",kodeverk:"LANDKODER",navn:"KONGO, REPUBLIKKEN"},{kode:"JPN",kodeverk:"LANDKODER",navn:"JAPAN"},{kode:"KOR",kodeverk:"LANDKODER",navn:"SØR-KOREA"},{kode:"HUN",kodeverk:"LANDKODER",navn:"UNGARN"},{kode:"YEM",kodeverk:"LANDKODER",navn:"JEMEN"},{kode:"CHL",kodeverk:"LANDKODER",navn:"CHILE"},{kode:"BRB",kodeverk:"LANDKODER",navn:"BARBADOS"},{kode:"DNK",kodeverk:"LANDKODER",navn:"DANMARK"},{kode:"NRU",kodeverk:"LANDKODER",navn:"NAURU"},{kode:"VCT",kodeverk:"LANDKODER",navn:"ST. VINCENT"},{kode:"BEN",kodeverk:"LANDKODER",navn:"BENIN"},{kode:"SMR",kodeverk:"LANDKODER",navn:"SAN MARINO"},{kode:"TCD",kodeverk:"LANDKODER",navn:"TSJAD"},{kode:"CUW",kodeverk:"LANDKODER",navn:"CURACAO"},{kode:"IRN",kodeverk:"LANDKODER",navn:"IRAN"},{kode:"SWE",kodeverk:"LANDKODER",navn:"SVERIGE"},{kode:"ERI",kodeverk:"LANDKODER",navn:"ERITREA"},{kode:"XUK",kodeverk:"LANDKODER",navn:"UKJENT"},{kode:"MDV",kodeverk:"LANDKODER",navn:"MALDIVENE"},{kode:"CSK",kodeverk:"LANDKODER",navn:"TSJEKKOSLOVAKIA"},{kode:"GRD",kodeverk:"LANDKODER",navn:"GRENADA"},{kode:"HND",kodeverk:"LANDKODER",navn:"HONDURAS"},{kode:"FRO",kodeverk:"LANDKODER",navn:"FÆRØYENE"},{kode:"COD",kodeverk:"LANDKODER",navn:"KONGO, DEN DEMOKR. REPUBL"},{kode:"SRB",kodeverk:"LANDKODER",navn:"SERBIA"},{kode:"AGO",kodeverk:"LANDKODER",navn:"ANGOLA"},{kode:"NCL",kodeverk:"LANDKODER",navn:"NY-KALEDONIA"},{kode:"SCG",kodeverk:"LANDKODER",navn:"SERBIA OG MONTENEGRO"},{kode:"GTM",kodeverk:"LANDKODER",navn:"GUATEMALA"},{kode:"AFG",kodeverk:"LANDKODER",navn:"AFGHANISTAN"},{kode:"JAM",kodeverk:"LANDKODER",navn:"JAMAICA"},{kode:"UGA",kodeverk:"LANDKODER",navn:"UGANDA"},{kode:"IMN",kodeverk:"LANDKODER",navn:"ISLE OF MAN"},{kode:"ISR",kodeverk:"LANDKODER",navn:"ISRAEL"},{kode:"SOM",kodeverk:"LANDKODER",navn:"SOMALIA"},{kode:"MNP",kodeverk:"LANDKODER",navn:"NORD-MARIANENE"},{kode:"XXK",kodeverk:"LANDKODER",navn:"KOSOVO"},{kode:"BLR",kodeverk:"LANDKODER",navn:"HVITERUSSLAND"},{kode:"LSO",kodeverk:"LANDKODER",navn:"LESOTHO"},{kode:"NER",kodeverk:"LANDKODER",navn:"NIGER"},{kode:"IDN",kodeverk:"LANDKODER",navn:"INDONESIA"},{kode:"CZE",kodeverk:"LANDKODER",navn:"DEN TSJEKKISKE REP."},{kode:"URY",kodeverk:"LANDKODER",navn:"URUGUAY"},{kode:"BGD",kodeverk:"LANDKODER",navn:"BANGLADESH"},{kode:"WLF",kodeverk:"LANDKODER",navn:"WALLIS/FUTUNAØYENE"},{kode:"CIV",kodeverk:"LANDKODER",navn:"ELFENBEINSKYSTEN"},{kode:"ABW",kodeverk:"LANDKODER",navn:"ARUBA"},{kode:"SLB",kodeverk:"LANDKODER",navn:"SALOMONØYENE"},{kode:"TWN",kodeverk:"LANDKODER",navn:"TAIWAN"},{kode:"SLE",kodeverk:"LANDKODER",navn:"SIERRA LEONE"},{kode:"BRA",kodeverk:"LANDKODER",navn:"BRASIL"},{kode:"DJI",kodeverk:"LANDKODER",navn:"DJIBOUTI"},{kode:"PRI",kodeverk:"LANDKODER",navn:"PUERTO RICO"},{kode:"PRT",kodeverk:"LANDKODER",navn:"PORTUGAL"},{kode:"ANT",kodeverk:"LANDKODER",navn:"DE NEDERLANDSKE ANTILLENE"},{kode:"THA",kodeverk:"LANDKODER",navn:"THAILAND"},{kode:"TLS",kodeverk:"LANDKODER",navn:"ØST-TIMOR"},{kode:"SPM",kodeverk:"LANDKODER",navn:"ST-PIERRE OG MIQUELON"},{kode:"ALB",kodeverk:"LANDKODER",navn:"ALBANIA"},{kode:"EGY",kodeverk:"LANDKODER",navn:"EGYPT"},{kode:"GRC",kodeverk:"LANDKODER",navn:"HELLAS"},{kode:"BFA",kodeverk:"LANDKODER",navn:"BURKINA FASO"},{kode:"ALA",kodeverk:"LANDKODER",navn:"ÅLAND"},{kode:"BOL",kodeverk:"LANDKODER",navn:"BOLIVIA"},{kode:"DDR",kodeverk:"LANDKODER",navn:"TYSKLAND (ØST)"},{kode:"HRV",kodeverk:"LANDKODER",navn:"KROATIA"},{kode:"AUS",kodeverk:"LANDKODER",navn:"AUSTRALIA"},{kode:"NGA",kodeverk:"LANDKODER",navn:"NIGERIA"},{kode:"LBY",kodeverk:"LANDKODER",navn:"LIBYA"},{kode:"MYT",kodeverk:"LANDKODER",navn:"MAYOTTE"},{kode:"LVA",kodeverk:"LANDKODER",navn:"LATVIA"},{kode:"BTN",kodeverk:"LANDKODER",navn:"BHUTAN"},{kode:"MSR",kodeverk:"LANDKODER",navn:"MONSERRAT"},{kode:"???",kodeverk:"LANDKODER",navn:"UOPPGITT/UKJENT"},{kode:"OMN",kodeverk:"LANDKODER",navn:"OMAN"},{kode:"SVK",kodeverk:"LANDKODER",navn:"SLOVAKIA"},{kode:"TUV",kodeverk:"LANDKODER",navn:"TUVALU"},{kode:"VEN",kodeverk:"LANDKODER",navn:"VENEZUELA"},{kode:"ITA",kodeverk:"LANDKODER",navn:"ITALIA"},{kode:"KHM",kodeverk:"LANDKODER",navn:"KAMBODSJA"},{kode:"ARM",kodeverk:"LANDKODER",navn:"ARMENIA"},{kode:"LCA",kodeverk:"LANDKODER",navn:"ST. LUCIA"},{kode:"GIB",kodeverk:"LANDKODER",navn:"GIBRALTAR"},{kode:"JEY",kodeverk:"LANDKODER",navn:"JERSEY"},{kode:"LAO",kodeverk:"LANDKODER",navn:"LAOS"},{kode:"BHR",kodeverk:"LANDKODER",navn:"BAHRAIN"},{kode:"ESH",kodeverk:"LANDKODER",navn:"VEST-SAHARA"},{kode:"TKL",kodeverk:"LANDKODER",navn:"TOKELAU"},{kode:"MNG",kodeverk:"LANDKODER",navn:"MONGOLIA"},{kode:"BLZ",kodeverk:"LANDKODER",navn:"BELIZE"},{kode:"GUF",kodeverk:"LANDKODER",navn:"FRANSK GUYANA"},{kode:"TCA",kodeverk:"LANDKODER",navn:"TURKS/CAICOSØYENE"},{kode:"WSM",kodeverk:"LANDKODER",navn:"SAMOA"},{kode:"JOR",kodeverk:"LANDKODER",navn:"JORDAN"},{kode:"MRT",kodeverk:"LANDKODER",navn:"MAURITANIA"},{kode:"CUB",kodeverk:"LANDKODER",navn:"CUBA"},{kode:"BDI",kodeverk:"LANDKODER",navn:"BURUNDI"},{kode:"GHA",kodeverk:"LANDKODER",navn:"GHANA"},{kode:"KNA",kodeverk:"LANDKODER",navn:"ST.KITTS OG NEVIS"},{kode:"ETH",kodeverk:"LANDKODER",navn:"ETIOPIA"},{kode:"SSD",kodeverk:"LANDKODER",navn:"SØR-SUDAN"},{kode:"VAT",kodeverk:"LANDKODER",navn:"VATIKANSTATEN"},{kode:"CPV",kodeverk:"LANDKODER",navn:"KAPP VERDE"},{kode:"PCN",kodeverk:"LANDKODER",navn:"PITCAIRN"},{kode:"SGP",kodeverk:"LANDKODER",navn:"SINGAPORE"},{kode:"KAZ",kodeverk:"LANDKODER",navn:"KAZAKHSTAN"},{kode:"MYS",kodeverk:"LANDKODER",navn:"MALAYSIA"},{kode:"PHL",kodeverk:"LANDKODER",navn:"FILIPPINENE"},{kode:"EST",kodeverk:"LANDKODER",navn:"ESTLAND"},{kode:"NOR",kodeverk:"LANDKODER",navn:"NORGE"},{kode:"BMU",kodeverk:"LANDKODER",navn:"BERMUDA"},{kode:"LTU",kodeverk:"LANDKODER",navn:"LITAUEN"},{kode:"MAC",kodeverk:"LANDKODER",navn:"MACAO"},{kode:"TON",kodeverk:"LANDKODER",navn:"TONGA"},{kode:"ROU",kodeverk:"LANDKODER",navn:"ROMANIA"},{kode:"BLM",kodeverk:"LANDKODER",navn:"SAINT BARTHELEMY"},{kode:"SAU",kodeverk:"LANDKODER",navn:"SAUDI-ARABIA"},{kode:"GNQ",kodeverk:"LANDKODER",navn:"EKVATORIAL-GUINEA"},{kode:"TGO",kodeverk:"LANDKODER",navn:"TOGO"},{kode:"ZMB",kodeverk:"LANDKODER",navn:"ZAMBIA"},{kode:"VUT",kodeverk:"LANDKODER",navn:"VANUATU"},{kode:"DZA",kodeverk:"LANDKODER",navn:"ALGERIE"},{kode:"TJK",kodeverk:"LANDKODER",navn:"TADZJIKISTAN"},{kode:"NLD",kodeverk:"LANDKODER",navn:"NEDERLAND"},{kode:"KIR",kodeverk:"LANDKODER",navn:"KIRIBATI"},{kode:"GUY",kodeverk:"LANDKODER",navn:"GUYANA"},{kode:"BVT",kodeverk:"LANDKODER",navn:"BOUVETØYA"},{kode:"IND",kodeverk:"LANDKODER",navn:"INDIA"},{kode:"LKA",kodeverk:"LANDKODER",navn:"SRI LANKA"},{kode:"SYR",kodeverk:"LANDKODER",navn:"SYRIA"},{kode:"ESP",kodeverk:"LANDKODER",navn:"SPANIA"},{kode:"GRL",kodeverk:"LANDKODER",navn:"GRØNLAND"},{kode:"AIA",kodeverk:"LANDKODER",navn:"ANGUILLA"},{kode:"IRQ",kodeverk:"LANDKODER",navn:"IRAK"},{kode:"MCO",kodeverk:"LANDKODER",navn:"MONACO"},{kode:"MHL",kodeverk:"LANDKODER",navn:"MARSHALLØYENE"},{kode:"DOM",kodeverk:"LANDKODER",navn:"DEN DOMINIKANSKE REP"},{kode:"FLK",kodeverk:"LANDKODER",navn:"FALKLANDSØYENE"}],O1=[{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-005",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakebetaling endring"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"}],L1=[{kode:"IKKE_I_AKTIVITET_IKKE_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Aktiviteten er ikke dokumentert"},{kode:"I_AKTIVITET",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er i aktivitet"},{kode:"IKKE_I_AKTIVITET_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er ikke i aktivitet"}],K1=[{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"},{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"}],D1=[{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"},{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"}],P1=[{kode:"FODSELSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsdato"},{kode:"TILBAKETREKK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilbaketrekk"},{kode:"ER_ANKEFRIST_IKKE_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er ankefrist ikke overholdt"},{kode:"FNR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsnummer"},{kode:"TERMINBEKREFTELSE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Terminbekreftelse"},{kode:"TERMINDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Termindato"},{kode:"ANKE_RESULTAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Anke resultat"},{kode:"UTTAK_SPLITT_TIDSPERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resulterende periode ved splitting"},{kode:"UTTAK_TREKKDAGER_FLERBARN_KVOTE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager flerbarn kvote"},{kode:"OPPHOLDSRETT_IKKE_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har ikke oppholdsrett i EØS"},{kode:"TILRETTELEGGING_SKAL_BRUKES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avgjør om tilrettelegging skal brukes"},{kode:"ER_ANKE_IKKE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er anke ikke konkret."},{kode:"BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandling"},{kode:"UTTAK_GRADERING_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gradering av arbeidsforhold"},{kode:"ANKE_AVVIST_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til avvist anke"},{kode:"INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt"},{kode:"SOKNADSFRISTVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfristvilkåret"},{kode:"DAGPENGER_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dagpenger"},{kode:"ARBEIDSFORHOLD_BEKREFTET_TOM_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Til og med dato fastsatt av saksbehandler"},{kode:"SOKNADSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfrist"},{kode:"VILKAR_SOM_ANVENDES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vilkår som anvendes"},{kode:"PERIODE_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode f.o.m."},{kode:"UTTAK_PROSENT_UTBETALING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utbetalingsgrad"},{kode:"NYTT_REFUSJONSKRAV",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Nytt refusjonskrav"},{kode:"DODSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dødsdato"},{kode:"DOKUMENTASJON_FORELIGGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dokumentasjon foreligger"},{kode:"LØNNSENDRING_I_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Lønnsendring i beregningsperioden"},{kode:"AVKLART_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklart periode"},{kode:"SVANGERSKAPSPENGERVILKÅRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Svangerskapsvilkåret"},{kode:"KLAGE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aktivitet"},{kode:"UTTAK_STØNADSKONTOTYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stønadskontotype"},{kode:"ALENEOMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aleneomsorg"},{kode:"OMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorg"},{kode:"KONTAKTPERSON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontaktperson"},{kode:"ER_KLAGE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"TILRETTELEGGING_BEHOV_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilrettelegging behov FOM"},{kode:"ANNEN_FORELDER_RETT_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Annen forelder har opptjent rett fra land i EØS"},{kode:"AKTIVITETSKRAV_AVKLARING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklaring om mor er i aktivitet"},{kode:"FASTSETT_RESULTAT_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett resultat for perioden"},{kode:"FRILANSVIRKSOMHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilansvirksomhet"},{kode:"MANN_ADOPTERER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mann adopterer"},{kode:"ANDEL_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Andel i arbeid"},{kode:"DELVIS_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis tilrettelegging FOM"},{kode:"OPPTJENINGSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Opptjeningsvilkåret"},{kode:"ER_KLAGER_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"UTTAK_PERIODE_RESULTAT_TYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultattype for periode"},{kode:"UTLAND",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utland"},{kode:"BRUK_ANTALL_I_TPS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra folkeregisteret"},{kode:"AKTIVITET_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden med aktivitet"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett søkers månedsinntekt fra etterlønn eller sluttpakke"},{kode:"IKKE_OMSORG_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden Søker har ikke omsorg for barnet"},{kode:"DEKNINGSGRAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dekningsgrad"},{kode:"ER_ANKEN_IKKE_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"er anken ikke signert."},{kode:"SYKDOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Sykdom"},{kode:"UTSTEDTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utstedtdato"},{kode:"FODSELSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødsel"},{kode:"NAVN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Navn"},{kode:"UTTAK_TREKKDAGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager"},{kode:"PA_KLAGD_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Påklagd behandlingId"},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Har søker inntekt fra etterlønn eller sluttpakke"},{kode:"OPPHOLDSRETT_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har oppholdsrett i EØS"},{kode:"RETT_TIL_FORELDREPENGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Rett til foreldrepenger"},{kode:"INNTEKTSKATEGORI",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori"},{kode:"ADOPTERER_ALENE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopterer alene"},{kode:"ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Arbeidsforhold"},{kode:"BRUKER_TVUNGEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker er under tvungen forvaltning"},{kode:"DELVIS_REFUSJON_FØR_STARTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis refusjon som utbetales før startdato for full refusjon"},{kode:"ENDRING_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring tidsbegrenset arbeidsforhold"},{kode:"VURDER_GRADERING_PÅ_ANDEL_UTEN_BG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vurder om søker har gradering på en andel uten beregningsgrunnlag"},{kode:"MANDAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mandat"},{kode:"MOR_MOTTAR_UFØRETRYGD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar uføretrygd"},{kode:"HEL_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Hel tilrettelegging FOM"},{kode:"ORGANISASJONSNUMMER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Organisasjonsnummer"},{kode:"UTTAK_GRADERING_AVSLAG_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak avslag gradering"},{kode:"ER_KLAGEN_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"ER_KLAGEFRIST_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"OMSORGSVILKAR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"PA_ANKET_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"på anket behandlingsId."},{kode:"SLUTTE_ARBEID_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Slutte arbeid FOM"},{kode:"BRUK_ANTALL_I_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra søknad"},{kode:"KLAGE_RESULTAT_NFP",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat"},{kode:"FORDELING_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling for arbeidsforhold"},{kode:"UTTAK_SAMTIDIG_UTTAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Samtidig uttak"},{kode:"ER_SOKER_BOSATT_I_NORGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er søker bosatt i Norge?"},{kode:"FRILANS_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilans inntekt"},{kode:"FASTSETT_VIDERE_BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett videre behandling"},{kode:"BRUK_ANTALL_I_VEDTAKET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra vedtaket"},{kode:"OMSORGSOVERTAKELSESDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorgsovertakelsesdato"},{kode:"UTTAK_PERIODE_RESULTAT_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat årsak"},{kode:"ENDRING_NAERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring i næring"},{kode:"FORDELING_FOR_NY_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny andel med fordeling"},{kode:"BEHANDLENDE_ENHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandlende enhet"},{kode:"BRUTTO_NAERINGSINNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Brutto næringsinntekt"},{kode:"FORDELING_ETTER_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling etter besteberegning"},{kode:"STARTDATO_FRA_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Startdato fra søknad"},{kode:"NY_STARTDATO_REFUSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny startdato for refusjon"},{kode:"OVERSTYRT_VURDERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt vurdering"},{kode:"KLAGE_RESULTAT_KA",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ytelsesvedtak"},{kode:"FARESIGNALER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Faresignaler"},{kode:"NY_AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Det er lagt til ny aktivitet for"},{kode:"MOTTAR_YTELSE_FRILANS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for frilansaktiviteten"},{kode:"NY_REFUSJONSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny refusjonsfrist"},{kode:"OVERSTYRT_BEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt beregning"},{kode:"AVKLARSAKSOPPLYSNINGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklar saksopplysninger"},{kode:"INNTEKT_FRA_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt fra arbeidsforhold"},{kode:"SOKERSOPPLYSNINGSPLIKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søkers opplysningsplikt"},{kode:"SELVSTENDIG_NAERINGSDRIVENDE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Selvstendig næringsdrivende"},{kode:"GYLDIG_MEDLEM_FOLKETRYGDEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gyldig medlem i folketrygden"},{kode:"MOTTATT_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottatt dato"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Antall barn"},{kode:"EKTEFELLES_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ektefelles barn"},{kode:"MILITÆR_ELLER_SIVIL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"PERIODE_TOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode t.o.m."},{kode:"FORELDREANSVARSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"STILLINGSPROSENT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stillingsprosent"},{kode:"ADOPSJONSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopsjon"},{kode:"ANKE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"INNTEKTSKATEGORI_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori for andel"},{kode:"KONTROLL_AV_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontroll av besteberegning"},{kode:"MOR_MOTTAR_STØNAD_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar foreldrepenger fra land i EØS"},{kode:"ER_ANKER_IKKE_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Angir om anker ikke er part i saken."},{kode:"ER_VILKÅRENE_TILBAKEKREVING_OPPFYLT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er vilkårene for tilbakekreving oppfylt"},{kode:"NY_FORDELING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny fordeling for"},{kode:"ER_SÆRLIGE_GRUNNER_TIL_REDUKSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er det særlige grunner til reduksjon"},{kode:"MOTTAR_YTELSE_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for arbeid i {value}"},{kode:"TYPE_VERGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Type verge"}],F1=[{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet/savnet"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Uregistrert person"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"UTAN",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person annullert tilgang Fnr"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utvandret"}],M1=[{kode:"ENHETSREGISTERET",kodeverk:"FAGSYSTEM",navn:"Enhetsregisteret"},{kode:"INFOTRYGD",kodeverk:"FAGSYSTEM",navn:"Infotrygd"},{kode:"INNTEKT",kodeverk:"FAGSYSTEM",navn:"INNTEKT"},{kode:"ARENA",kodeverk:"FAGSYSTEM",navn:"Arena"},{kode:"GOSYS",kodeverk:"FAGSYSTEM",navn:"Gosys"},{kode:"JOARK",kodeverk:"FAGSYSTEM",navn:"Joark"},{kode:"K9SAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Folketrygdloven Kapittel 9"},{kode:"FPSAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Foreldrepenger"},{kode:"AAREGISTERET",kodeverk:"FAGSYSTEM",navn:"AAregisteret"},{kode:"MEDL",kodeverk:"FAGSYSTEM",navn:"MEDL"},{kode:"TPS",kodeverk:"FAGSYSTEM",navn:"TPS"},{kode:"VLSP",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Sykepenger"}],G1=[{kode:"ANKE_STADFESTE_YTELSESVEDTAK",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"ANKEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"ANKE_AVVIS",kodeverk:"ANKEVURDERING",navn:"Anken avvises"},{kode:"ANKE_OMGJOER",kodeverk:"ANKEVURDERING",navn:"Anken omgjøres"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket oppheves og hjemsendes"}],B1=[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"}],j1=[{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],w1=[{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"}],H1=[{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er slått sammen med et annet"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforhold lagt til av saksbehandler"},{kode:"BRUK_UTEN_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk, men ikke benytt inntektsmelding"},{kode:"IKKE_BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Ikke bruk"},{kode:"BASERT_PÅ_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet som ikke ligger i AA-reg er basert på inntektsmelding"},{kode:"BRUK_MED_OVERSTYRT_PERIODE",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Inntekten til arbeidsforholdet skal ikke være med i beregningsgrunnlaget"}],V1=[{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"}],U1=[{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"}],q1=[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],x1=[{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],Y1=[{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"}],C1=[{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],$1=[{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"}],J1=[{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"},{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"}],W1={RelasjonsRolleType:e1,HistorikkinnslagType:n1,UttakUtsettelseType:r1,FagsakYtelseType:t1,StønadskontoType:[{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"}],FagsakStatus:a1,Venteårsak:[{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga for tidlig søknad"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdId som stemmer med Aareg"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på scanning"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev venter søknad."},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."}],AnkeVurderingOmgjør:[{kode:"ANKE_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Gunst omgjør i anke"},{kode:"ANKE_TIL_UGUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Ugunst omgjør i anke"},{kode:"ANKE_DELVIS_OMGJOERING_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Delvis omgjøring, til gunst i anke"}],BehandlingÅrsakType:[{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger inntekt"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Inntektsmelding"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger søknadsfrist"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger opptjening"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Søknad"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger beregning"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. u26-29"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger medlemskap"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev uttak"}],GraderingAvslagÅrsak:[{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"Avslag gradering - arbeid 100% eller mer",lovHjemmel:null}],AktivitetStatus:i1,BeregningsgrunnlagAndeltype:s1,RevurderingVarslingÅrsak:[{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utvandret"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:o1,KonsekvensForYtelsen:l1,Inntektskategori:d1,SivilstandType:u1,SkjermlenkeType:k1,FaktaOmBeregningTilfelle:g1,KlageVurdering:v1,HistorikkBegrunnelseType:E1,OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:f1,KlageAvvistÅrsak:[{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klage er ugyldig",lovHjemmel:null}],BehandlingResultatType:m1,VergeType:T1,TilbakekrevingVidereBehandling:p1,OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"}],FamilieHendelseType:h1,KlageHjemmel:A1,VilkårType:[{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"}],FarSøkerType:[{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"}],FaresignalVurdering:c1,ArbeidType:y1,KlageMedholdÅrsak:[{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"}],Region:R1,OppgaveÅrsak:[{kode:"BEH_SAK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i VL"},{kode:"BEH_SAK_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i Infotrygd"},{kode:"INNHENT_DOK",kodeverk:"OPPGAVE_AARSAK",navn:"Innhent dokumentasjon"},{kode:"VUR_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder dokument i VL"},{kode:"REG_SOK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Registrere søknad i VL"},{kode:"SETTVENT_STO",kodeverk:"OPPGAVE_AARSAK",navn:"Sett Arena utbetaling på vent"},{kode:"RV_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Revurdere i VL"},{kode:"VUR_KONS_YTE_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder konsekvens for ytelse foreldrepenger"},{kode:"GOD_VED_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Godkjenne vedtak i VL"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"},{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"}],HistorikkOpplysningType:_1,FordelingPeriodeKilde:b1,KlageVurderingOmgjør:[{kode:"DELVIS_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Delvis medhold i klage"},{kode:"UGUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Ugunst medhold i klage"},{kode:"GUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Gunst medhold i klage"}],VurderArbeidsforholdHistorikkinnslag:N1,Arbeidskategori:S1,VurderÅrsak:[{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"}],Landkoder:I1,BehandlingType:O1,KontrollerAktivitetskravAvklaring:L1,InnsynResultatType:K1,MedlemskapType:D1,HistorikkEndretFeltType:P1,PersonstatusType:F1,Fagsystem:M1,AnkeVurdering:G1,UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"}],BehandlingStatus:B1,VirksomhetType:j1,MedlemskapDekningType:w1,ArbeidsforholdHandlingType:H1,HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"}],Avslagsårsak:{FP_VK_3:[{kode:"1007",kodeverk:"AVSLAGSARSAK",navn:"Søkt for sent",lovHjemmel:null}],FP_VK_4:[{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1005",kodeverk:"AVSLAGSARSAK",navn:"Ektefelles/samboers barn",lovHjemmel:null},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1006",kodeverk:"AVSLAGSARSAK",navn:"Mann adopterer ikke alene",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_1:[{kode:"1002",kodeverk:"AVSLAGSARSAK",navn:"Søker er medmor",lovHjemmel:null},{kode:"1031",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}'},{kode:"1003",kodeverk:"AVSLAGSARSAK",navn:"Søker er far",lovHjemmel:null},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1001",kodeverk:"AVSLAGSARSAK",navn:"Søkt for tidlig",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1026",kodeverk:"AVSLAGSARSAK",navn:"Fødselsdato ikke oppgitt eller registrert",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_2:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],"-":[],FP_VK_41:[{kode:"1041",kodeverk:"AVSLAGSARSAK",navn:"For lavt brutto beregningsgrunnlag",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_41", "lovreferanse": "14-7"}]}]}'}],FP_VK_21:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_11:[{kode:"1027",kodeverk:"AVSLAGSARSAK",navn:"Ingen barn dokumentert på far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1028",kodeverk:"AVSLAGSARSAK",navn:"Mor fyller ikke vilkåret for sykdom",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1029",kodeverk:"AVSLAGSARSAK",navn:"Bruker er ikke registrert som far/medmor til barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'}],FP_VK_33:[{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1017",kodeverk:"AVSLAGSARSAK",navn:"Omsorgsovertakelse etter 56 uker",lovHjemmel:null},{kode:"1016",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1018",kodeverk:"AVSLAGSARSAK",navn:"Ikke foreldreansvar alene etter barnelova",lovHjemmel:null}],FP_VK_34:[{kode:"1019",kodeverk:"AVSLAGSARSAK",navn:"Manglende dokumentasjon",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_34", "lovreferanse": "21-3"}]}]}'}],FP_VK_23:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_8:[{kode:"1014",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke foreldreansvar",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1013",kodeverk:"AVSLAGSARSAK",navn:"Barn ikke under 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1015",kodeverk:"AVSLAGSARSAK",navn:"Søker har hatt vanlig samvær med barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'}],SVP_VK_1:[{kode:"1065",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1062",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker har mottatt sykepenger",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1066",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1064",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1063",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1061",kodeverk:"AVSLAGSARSAK",navn:"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 3. ledd"}]}]}'},{kode:"1060",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker er ikke gravid kvinne",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'}],FP_VK_16:[{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'},{kode:"1051",kodeverk:"AVSLAGSARSAK",navn:"Stebarnsadopsjon ikke flere dager igjen",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16", "lovreferanse": "14-5"}]}]}'}],FP_VK_5:[{kode:"1009",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1008",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1012",kodeverk:"AVSLAGSARSAK",navn:"Far har ikke omsorg for barnet",lovHjemmel:null},{kode:"1010",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død ved fødsel/omsorg",lovHjemmel:null}],FP_VK_2_L:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],FP_VK_2_F:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1052",kodeverk:"AVSLAGSARSAK",navn:"Innflyttet for mindre enn ett år siden",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK_2_F", "lovreferanse": "14-17 5. ledd"}]}]}'}]},OpptjeningAktivitetType:V1,PermisjonsbeskrivelseType:U1,Språkkode:[{kode:"NB",kodeverk:"SPRAAK_KODE",navn:"Norsk"},{kode:"NN",kodeverk:"SPRAAK_KODE",navn:"Nynorsk"},{kode:"EN",kodeverk:"SPRAAK_KODE",navn:"Engelsk"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"}],OppholdstillatelseType:q1,MedlemskapManuellVurderingType:x1,ManuellBehandlingÅrsak:[{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."}],MorsAktivitet:Y1,NaturalYtelseType:C1,PeriodeResultatÅrsak:[{kode:"2010",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4072",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjuende ledd: Barnet er dødt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Ikke heltidsarbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4085",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Det er ikke samtykke mellom partene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-16"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4052",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4084",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4097",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Adopsjonsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4104",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Stønadsperiode for nytt barn",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4086",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-11"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ikke stønadsdager igjen på stønadskonto",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ferie/arbeid innenfor de første 6 ukene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4112",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Barnets innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2017",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2036",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4071",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Bruker er død",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4098",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Foreldreansvarsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4067",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4066",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2026",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12, jf. §14-16: Gradering av kvote/overført kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4081",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4053",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2014",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4056",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2016",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2004",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2018",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2024",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4068",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4087",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-2: Opphør medlemskap",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-2"}}}',sortering:"14-02",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4110",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4115",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4096",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Fødselsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4073",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4069",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4062",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4089",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-9"}}}',sortering:"14-11-0",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4075",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjuende ledd: Ikke sammenhengende perioder",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2028",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4060",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2006",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger før fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4105",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4058",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Innvilget fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4095",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR"]},{kode:"4116",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4092",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Avslag overføring - har ikke aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4008",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4064",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4111",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4054",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-09-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4077",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10 a"}}}',sortering:"14-10-0-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2019",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Avslag utsettelse før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4050",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Innvilget uttak av kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4082",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2027",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4088",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4063",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4099",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-6: Opptjeningsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-6"}}}',sortering:"14-06",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4103",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-13: Innvilget fellesperiode til far",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Mor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4107",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Barnet er over 3 år",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ikke lovbestemt ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4059",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13, 14-9"}}}',sortering:"14-13-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2021",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4070",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4074",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,21-3"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2011",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4065",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4057",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13,14-16"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4076",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4040",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4061",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4041",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§22-13 tredje ledd: Brudd på søknadsfrist",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "22-13"}}}',sortering:"22-13-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4106",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15: Innvilget foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4055",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4093",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16: Avslag gradering - søker er ikke i arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4102",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4051",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2015",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4100",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 andre ledd: Uttak før omsorgsovertakelse",lovHjemmel:"",sortering:"14-10-2",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Far/medmor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4117",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]}],ForeldreType:$1,AdresseType:J1},eL={title:"fakta/fakta-inntektsmelding",component:Jo},Kv=e=>M.jsx(Jo,{...e}),to={innsendingstidspunkt:"2024-08-08T00:00:00",kildeSystem:"Altinn",aktiveNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",arbeidsgiverIdent:"1",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},zt=Kv.bind({});zt.args={alleKodeverk:W1,fagsak:{saksnummer:"123",fagsakYtelseType:"FP"},alleBehandlinger:[{uuid:"UUID1",type:"BT-002",opprettet:"2024-07-13",avsluttet:"2024-08-13"},{uuid:"UUID2",type:"BT-003",opprettet:"2024-07-14",avsluttet:"2024-08-14"},{uuid:"UUID3",type:"BT-004",opprettet:"2024-07-15",avsluttet:"2024-08-15"}],arbeidsgiverOpplysningerPerId:{1:{navn:"Rema 1000"},2:{navn:"Kiwi"},3:{navn:"Meny"}},behandling:{uuid:"UUID2"},inntektsmeldinger:[{...to,tilknyttedeBehandlingIder:["UUID1"],inntektPrMnd:10000.5,innsendingstidspunkt:"2024-07-20T00:00:00",startDatoPermisjon:"2024-10-10",refusjonPrMnd:void 0,journalpostId:"1",refusjonsperioder:[{refusjonsbeløp:{verdi:5e3},indexKey:"1",fom:"2024-01-10"},{refusjonsbeløp:{verdi:3e3},indexKey:"2",fom:"2024-01-09"}]},{...to,tilknyttedeBehandlingIder:["UUID1","UUID2"],inntektPrMnd:2e4,innsendingstidspunkt:"2024-08-01T00:00:00",kildeSystem:"FS22",refusjonPrMnd:void 0,arbeidsgiverIdent:"2",journalpostId:"2"},{...to,tilknyttedeBehandlingIder:[],inntektPrMnd:3e4,innsendingstidspunkt:"2024-09-10T00:00:00",innsendingsårsak:"ENDRING",kildeSystem:"NAV_NO",startDatoPermisjon:"2024-11-11",arbeidsgiverIdent:"3",journalpostId:"3",aktiveNaturalytelser:[{periode:{fomDato:"2024-01-09",tomDato:"2024-10-09"},type:"ELEKTRISK_KOMMUNIKASJON",beloepPerMnd:{verdi:999},indexKey:"1"},{periode:{fomDato:"2024-01-11",tomDato:"2024-10-11"},type:"LOSJI",beloepPerMnd:{verdi:10},indexKey:"2"}]}]};const Zt=Kv.bind({});Zt.args={inntektsmeldinger:[]};var mk,Tk,pk;zt.parameters={...zt.parameters,docs:{...(mk=zt.parameters)==null?void 0:mk.docs,source:{originalSource:"props => <InntektsmeldingFaktaIndex {...props} />",...(pk=(Tk=zt.parameters)==null?void 0:Tk.docs)==null?void 0:pk.source}}};var hk,Ak,ck;Zt.parameters={...Zt.parameters,docs:{...(hk=Zt.parameters)==null?void 0:hk.docs,source:{originalSource:"props => <InntektsmeldingFaktaIndex {...props} />",...(ck=(Ak=Zt.parameters)==null?void 0:Ak.docs)==null?void 0:ck.source}}};const nL=["InntektsmeldingDefault","IngenInntektsmeldinger"];export{Zt as IngenInntektsmeldinger,zt as InntektsmeldingDefault,nL as __namedExportsOrder,eL as default};
