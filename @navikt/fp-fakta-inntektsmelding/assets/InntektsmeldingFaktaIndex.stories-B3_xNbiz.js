import{j as G}from"./jsx-runtime-CkxqCPlQ.js";import{r as D,R as V,c as Ht,g as Tc}from"./index-DJO9vBfz.js";import{a as Ir}from"./dayjs.min-Bhlr18jM.js";var is=function(e,i){return is=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(a[o]=t[o])},is(e,i)};function Jn(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");is(e,i);function a(){this.constructor=e}e.prototype=i===null?Object.create(i):(a.prototype=i.prototype,new a)}var ne=function(){return ne=Object.assign||function(i){for(var a,t=1,o=arguments.length;t<o;t++){a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(i[l]=a[l])}return i},ne.apply(this,arguments)};function vt(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a}function tr(e,i,a){if(a||arguments.length===2)for(var t=0,o=i.length,l;t<o;t++)(l||!(t in i))&&(l||(l=Array.prototype.slice.call(i,0,t)),l[t]=i[t]);return e.concat(l||Array.prototype.slice.call(i))}var Ok={exports:{}},Le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qe=typeof Symbol=="function"&&Symbol.for,Ks=Qe?Symbol.for("react.element"):60103,Ds=Qe?Symbol.for("react.portal"):60106,ni=Qe?Symbol.for("react.fragment"):60107,ri=Qe?Symbol.for("react.strict_mode"):60108,ti=Qe?Symbol.for("react.profiler"):60114,ai=Qe?Symbol.for("react.provider"):60109,ii=Qe?Symbol.for("react.context"):60110,Ps=Qe?Symbol.for("react.async_mode"):60111,oi=Qe?Symbol.for("react.concurrent_mode"):60111,si=Qe?Symbol.for("react.forward_ref"):60112,li=Qe?Symbol.for("react.suspense"):60113,pc=Qe?Symbol.for("react.suspense_list"):60120,ui=Qe?Symbol.for("react.memo"):60115,di=Qe?Symbol.for("react.lazy"):60116,hc=Qe?Symbol.for("react.block"):60121,Ac=Qe?Symbol.for("react.fundamental"):60117,cc=Qe?Symbol.for("react.responder"):60118,yc=Qe?Symbol.for("react.scope"):60119;function On(e){if(typeof e=="object"&&e!==null){var i=e.$$typeof;switch(i){case Ks:switch(e=e.type,e){case Ps:case oi:case ni:case ti:case ri:case li:return e;default:switch(e=e&&e.$$typeof,e){case ii:case si:case di:case ui:case ai:return e;default:return i}}case Ds:return i}}}function Lk(e){return On(e)===oi}Le.AsyncMode=Ps;Le.ConcurrentMode=oi;Le.ContextConsumer=ii;Le.ContextProvider=ai;Le.Element=Ks;Le.ForwardRef=si;Le.Fragment=ni;Le.Lazy=di;Le.Memo=ui;Le.Portal=Ds;Le.Profiler=ti;Le.StrictMode=ri;Le.Suspense=li;Le.isAsyncMode=function(e){return Lk(e)||On(e)===Ps};Le.isConcurrentMode=Lk;Le.isContextConsumer=function(e){return On(e)===ii};Le.isContextProvider=function(e){return On(e)===ai};Le.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ks};Le.isForwardRef=function(e){return On(e)===si};Le.isFragment=function(e){return On(e)===ni};Le.isLazy=function(e){return On(e)===di};Le.isMemo=function(e){return On(e)===ui};Le.isPortal=function(e){return On(e)===Ds};Le.isProfiler=function(e){return On(e)===ti};Le.isStrictMode=function(e){return On(e)===ri};Le.isSuspense=function(e){return On(e)===li};Le.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ni||e===oi||e===ti||e===ri||e===li||e===pc||typeof e=="object"&&e!==null&&(e.$$typeof===di||e.$$typeof===ui||e.$$typeof===ai||e.$$typeof===ii||e.$$typeof===si||e.$$typeof===Ac||e.$$typeof===cc||e.$$typeof===yc||e.$$typeof===hc)};Le.typeOf=On;Ok.exports=Le;var Rc=Ok.exports,Kk=Rc,_c={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bc={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Dk={};Dk[Kk.ForwardRef]=_c;Dk[Kk.Memo]=bc;function Nc(e,i,a){if(a===void 0&&(a=Error),!e)throw new a(i)}var Ae;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Ae||(Ae={}));var we;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(we||(we={}));var Et;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Et||(Et={}));function Sd(e){return e.type===we.literal}function Sc(e){return e.type===we.argument}function Pk(e){return e.type===we.number}function Fk(e){return e.type===we.date}function Mk(e){return e.type===we.time}function Gk(e){return e.type===we.select}function Bk(e){return e.type===we.plural}function Ic(e){return e.type===we.pound}function jk(e){return e.type===we.tag}function wk(e){return!!(e&&typeof e=="object"&&e.type===Et.number)}function os(e){return!!(e&&typeof e=="object"&&e.type===Et.dateTime)}var Hk=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,Oc=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function Lc(e){var i={};return e.replace(Oc,function(a){var t=a.length;switch(a[0]){case"G":i.era=t===4?"long":t===5?"narrow":"short";break;case"y":i.year=t===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=t===4?"long":t===5?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][t-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][t-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][t-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][t-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][t-1];break;case"s":i.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var Kc=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function Dc(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(Kc).filter(function(A){return A.length>0}),a=[],t=0,o=i;t<o.length;t++){var l=o[t],d=l.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var k=d[0],v=d.slice(1),m=0,f=v;m<f.length;m++){var p=f[m];if(p.length===0)throw new Error("Invalid number skeleton")}a.push({stem:k,options:v})}return a}function Pc(e){return e.replace(/^(.*?)-/,"")}var Id=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Vk=/^(@+)?(\+|#+)?[rs]?$/g,Fc=/(\*)(0+)|(#+)(0+)|(0+)/g,Uk=/^(0+)$/;function Od(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(Vk,function(a,t,o){return typeof o!="string"?(i.minimumSignificantDigits=t.length,i.maximumSignificantDigits=t.length):o==="+"?i.minimumSignificantDigits=t.length:t[0]==="#"?i.maximumSignificantDigits=t.length:(i.minimumSignificantDigits=t.length,i.maximumSignificantDigits=t.length+(typeof o=="string"?o.length:0)),""}),i}function qk(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Mc(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var a=e.slice(0,2);if(a==="+!"?(i.signDisplay="always",e=e.slice(2)):a==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!Uk.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function Ld(e){var i={},a=qk(e);return a||i}function Gc(e){for(var i={},a=0,t=e;a<t.length;a++){var o=t[a];switch(o.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=o.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=Pc(o.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=ne(ne(ne({},i),{notation:"scientific"}),o.options.reduce(function(v,m){return ne(ne({},v),Ld(m))},{}));continue;case"engineering":i=ne(ne(ne({},i),{notation:"engineering"}),o.options.reduce(function(v,m){return ne(ne({},v),Ld(m))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(o.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(o.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");o.options[0].replace(Fc,function(v,m,f,p,A,I){if(m)i.minimumIntegerDigits=f.length;else{if(p&&A)throw new Error("We currently do not support maximum integer digits");if(I)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Uk.test(o.stem)){i.minimumIntegerDigits=o.stem.length;continue}if(Id.test(o.stem)){if(o.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");o.stem.replace(Id,function(v,m,f,p,A,I){return f==="*"?i.minimumFractionDigits=m.length:p&&p[0]==="#"?i.maximumFractionDigits=p.length:A&&I?(i.minimumFractionDigits=A.length,i.maximumFractionDigits=A.length+I.length):(i.minimumFractionDigits=m.length,i.maximumFractionDigits=m.length),""});var l=o.options[0];l==="w"?i=ne(ne({},i),{trailingZeroDisplay:"stripIfInteger"}):l&&(i=ne(ne({},i),Od(l)));continue}if(Vk.test(o.stem)){i=ne(ne({},i),Od(o.stem));continue}var d=qk(o.stem);d&&(i=ne(ne({},i),d));var k=Mc(o.stem);k&&(i=ne(ne({},i),k))}return i}var $a={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Bc(e,i){for(var a="",t=0;t<e.length;t++){var o=e.charAt(t);if(o==="j"){for(var l=0;t+1<e.length&&e.charAt(t+1)===o;)l++,t++;var d=1+(l&1),k=l<2?1:3+(l>>1),v="a",m=jc(i);for((m=="H"||m=="k")&&(k=0);k-- >0;)a+=v;for(;d-- >0;)a=m+a}else o==="J"?a+="H":a+=o}return a}function jc(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var a=e.language,t;a!=="root"&&(t=e.maximize().region);var o=$a[t||""]||$a[a||""]||$a["".concat(a,"-001")]||$a["001"];return o[0]}var qo,wc=new RegExp("^".concat(Hk.source,"*")),Hc=new RegExp("".concat(Hk.source,"*$"));function ye(e,i){return{start:e,end:i}}var Vc=!!String.prototype.startsWith&&"_a".startsWith("a",1),Uc=!!String.fromCodePoint,qc=!!Object.fromEntries,xc=!!String.prototype.codePointAt,Yc=!!String.prototype.trimStart,Cc=!!String.prototype.trimEnd,$c=!!Number.isSafeInteger,Jc=$c?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},ss=!0;try{var Wc=Yk("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ss=((qo=Wc.exec("a"))===null||qo===void 0?void 0:qo[0])==="a"}catch{ss=!1}var Kd=Vc?function(i,a,t){return i.startsWith(a,t)}:function(i,a,t){return i.slice(t,t+a.length)===a},ls=Uc?String.fromCodePoint:function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];for(var t="",o=i.length,l=0,d;o>l;){if(d=i[l++],d>1114111)throw RangeError(d+" is not a valid code point");t+=d<65536?String.fromCharCode(d):String.fromCharCode(((d-=65536)>>10)+55296,d%1024+56320)}return t},Dd=qc?Object.fromEntries:function(i){for(var a={},t=0,o=i;t<o.length;t++){var l=o[t],d=l[0],k=l[1];a[d]=k}return a},xk=xc?function(i,a){return i.codePointAt(a)}:function(i,a){var t=i.length;if(!(a<0||a>=t)){var o=i.charCodeAt(a),l;return o<55296||o>56319||a+1===t||(l=i.charCodeAt(a+1))<56320||l>57343?o:(o-55296<<10)+(l-56320)+65536}},zc=Yc?function(i){return i.trimStart()}:function(i){return i.replace(wc,"")},Xc=Cc?function(i){return i.trimEnd()}:function(i){return i.replace(Hc,"")};function Yk(e,i){return new RegExp(e,i)}var us;if(ss){var Pd=Yk("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");us=function(i,a){var t;Pd.lastIndex=a;var o=Pd.exec(i);return(t=o[1])!==null&&t!==void 0?t:""}}else us=function(i,a){for(var t=[];;){var o=xk(i,a);if(o===void 0||Ck(o)||ny(o))break;t.push(o),a+=o>=65536?2:1}return ls.apply(void 0,t)};var Zc=function(){function e(i,a){a===void 0&&(a={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!a.ignoreTag,this.locale=a.locale,this.requiresOtherClause=!!a.requiresOtherClause,this.shouldParseSkeletons=!!a.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,a,t){for(var o=[];!this.isEOF();){var l=this.char();if(l===123){var d=this.parseArgument(i,t);if(d.err)return d;o.push(d.val)}else{if(l===125&&i>0)break;if(l===35&&(a==="plural"||a==="selectordinal")){var k=this.clonePosition();this.bump(),o.push({type:we.pound,location:ye(k,this.clonePosition())})}else if(l===60&&!this.ignoreTag&&this.peek()===47){if(t)break;return this.error(Ae.UNMATCHED_CLOSING_TAG,ye(this.clonePosition(),this.clonePosition()))}else if(l===60&&!this.ignoreTag&&ds(this.peek()||0)){var d=this.parseTag(i,a);if(d.err)return d;o.push(d.val)}else{var d=this.parseLiteral(i,a);if(d.err)return d;o.push(d.val)}}}return{val:o,err:null}},e.prototype.parseTag=function(i,a){var t=this.clonePosition();this.bump();var o=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:we.literal,value:"<".concat(o,"/>"),location:ye(t,this.clonePosition())},err:null};if(this.bumpIf(">")){var l=this.parseMessage(i+1,a,!0);if(l.err)return l;var d=l.val,k=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!ds(this.char()))return this.error(Ae.INVALID_TAG,ye(k,this.clonePosition()));var v=this.clonePosition(),m=this.parseTagName();return o!==m?this.error(Ae.UNMATCHED_CLOSING_TAG,ye(v,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:we.tag,value:o,children:d,location:ye(t,this.clonePosition())},err:null}:this.error(Ae.INVALID_TAG,ye(k,this.clonePosition())))}else return this.error(Ae.UNCLOSED_TAG,ye(t,this.clonePosition()))}else return this.error(Ae.INVALID_TAG,ye(t,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&ey(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,a){for(var t=this.clonePosition(),o="";;){var l=this.tryParseQuote(a);if(l){o+=l;continue}var d=this.tryParseUnquoted(i,a);if(d){o+=d;continue}var k=this.tryParseLeftAngleBracket();if(k){o+=k;continue}break}var v=ye(t,this.clonePosition());return{val:{type:we.literal,value:o,location:v},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Qc(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var a=[this.char()];for(this.bump();!this.isEOF();){var t=this.char();if(t===39)if(this.peek()===39)a.push(39),this.bump();else{this.bump();break}else a.push(t);this.bump()}return ls.apply(void 0,a)},e.prototype.tryParseUnquoted=function(i,a){if(this.isEOF())return null;var t=this.char();return t===60||t===123||t===35&&(a==="plural"||a==="selectordinal")||t===125&&i>0?null:(this.bump(),ls(t))},e.prototype.parseArgument=function(i,a){var t=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Ae.EXPECT_ARGUMENT_CLOSING_BRACE,ye(t,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Ae.EMPTY_ARGUMENT,ye(t,this.clonePosition()));var o=this.parseIdentifierIfPossible().value;if(!o)return this.error(Ae.MALFORMED_ARGUMENT,ye(t,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Ae.EXPECT_ARGUMENT_CLOSING_BRACE,ye(t,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:we.argument,value:o,location:ye(t,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Ae.EXPECT_ARGUMENT_CLOSING_BRACE,ye(t,this.clonePosition())):this.parseArgumentOptions(i,a,o,t);default:return this.error(Ae.MALFORMED_ARGUMENT,ye(t,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),a=this.offset(),t=us(this.message,a),o=a+t.length;this.bumpTo(o);var l=this.clonePosition(),d=ye(i,l);return{value:t,location:d}},e.prototype.parseArgumentOptions=function(i,a,t,o){var l,d=this.clonePosition(),k=this.parseIdentifierIfPossible().value,v=this.clonePosition();switch(k){case"":return this.error(Ae.EXPECT_ARGUMENT_TYPE,ye(d,v));case"number":case"date":case"time":{this.bumpSpace();var m=null;if(this.bumpIf(",")){this.bumpSpace();var f=this.clonePosition(),p=this.parseSimpleArgStyleIfPossible();if(p.err)return p;var A=Xc(p.val);if(A.length===0)return this.error(Ae.EXPECT_ARGUMENT_STYLE,ye(this.clonePosition(),this.clonePosition()));var I=ye(f,this.clonePosition());m={style:A,styleLocation:I}}var M=this.tryParseArgumentClose(o);if(M.err)return M;var R=ye(o,this.clonePosition());if(m&&Kd(m==null?void 0:m.style,"::",0)){var N=zc(m.style.slice(2));if(k==="number"){var p=this.parseNumberSkeletonFromString(N,m.styleLocation);return p.err?p:{val:{type:we.number,value:t,location:R,style:p.val},err:null}}else{if(N.length===0)return this.error(Ae.EXPECT_DATE_TIME_SKELETON,R);var P=N;this.locale&&(P=Bc(N,this.locale));var A={type:Et.dateTime,pattern:P,location:m.styleLocation,parsedOptions:this.shouldParseSkeletons?Lc(P):{}},q=k==="date"?we.date:we.time;return{val:{type:q,value:t,location:R,style:A},err:null}}}return{val:{type:k==="number"?we.number:k==="date"?we.date:we.time,value:t,location:R,style:(l=m==null?void 0:m.style)!==null&&l!==void 0?l:null},err:null}}case"plural":case"selectordinal":case"select":{var K=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Ae.EXPECT_SELECT_ARGUMENT_OPTIONS,ye(K,ne({},K)));this.bumpSpace();var ee=this.parseIdentifierIfPossible(),L=0;if(k!=="select"&&ee.value==="offset"){if(!this.bumpIf(":"))return this.error(Ae.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ye(this.clonePosition(),this.clonePosition()));this.bumpSpace();var p=this.tryParseDecimalInteger(Ae.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ae.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(p.err)return p;this.bumpSpace(),ee=this.parseIdentifierIfPossible(),L=p.val}var U=this.tryParsePluralOrSelectOptions(i,k,a,ee);if(U.err)return U;var M=this.tryParseArgumentClose(o);if(M.err)return M;var O=ye(o,this.clonePosition());return k==="select"?{val:{type:we.select,value:t,options:Dd(U.val),location:O},err:null}:{val:{type:we.plural,value:t,options:Dd(U.val),offset:L,pluralType:k==="plural"?"cardinal":"ordinal",location:O},err:null}}default:return this.error(Ae.INVALID_ARGUMENT_TYPE,ye(d,v))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(Ae.EXPECT_ARGUMENT_CLOSING_BRACE,ye(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,a=this.clonePosition();!this.isEOF();){var t=this.char();switch(t){case 39:{this.bump();var o=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Ae.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,ye(o,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(a.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(a.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,a){var t=[];try{t=Dc(i)}catch{return this.error(Ae.INVALID_NUMBER_SKELETON,a)}return{val:{type:Et.number,tokens:t,location:a,parsedOptions:this.shouldParseSkeletons?Gc(t):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,a,t,o){for(var l,d=!1,k=[],v=new Set,m=o.value,f=o.location;;){if(m.length===0){var p=this.clonePosition();if(a!=="select"&&this.bumpIf("=")){var A=this.tryParseDecimalInteger(Ae.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ae.INVALID_PLURAL_ARGUMENT_SELECTOR);if(A.err)return A;f=ye(p,this.clonePosition()),m=this.message.slice(p.offset,this.offset())}else break}if(v.has(m))return this.error(a==="select"?Ae.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Ae.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,f);m==="other"&&(d=!0),this.bumpSpace();var I=this.clonePosition();if(!this.bumpIf("{"))return this.error(a==="select"?Ae.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Ae.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,ye(this.clonePosition(),this.clonePosition()));var M=this.parseMessage(i+1,a,t);if(M.err)return M;var R=this.tryParseArgumentClose(I);if(R.err)return R;k.push([m,{value:M.val,location:ye(I,this.clonePosition())}]),v.add(m),this.bumpSpace(),l=this.parseIdentifierIfPossible(),m=l.value,f=l.location}return k.length===0?this.error(a==="select"?Ae.EXPECT_SELECT_ARGUMENT_SELECTOR:Ae.EXPECT_PLURAL_ARGUMENT_SELECTOR,ye(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(Ae.MISSING_OTHER_CLAUSE,ye(this.clonePosition(),this.clonePosition())):{val:k,err:null}},e.prototype.tryParseDecimalInteger=function(i,a){var t=1,o=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(t=-1);for(var l=!1,d=0;!this.isEOF();){var k=this.char();if(k>=48&&k<=57)l=!0,d=d*10+(k-48),this.bump();else break}var v=ye(o,this.clonePosition());return l?(d*=t,Jc(d)?{val:d,err:null}:this.error(a,v)):this.error(i,v)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var a=xk(this.message,i);if(a===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return a},e.prototype.error=function(i,a){return{val:null,err:{kind:i,message:this.message,location:a}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Kd(this.message,i,this.offset())){for(var a=0;a<i.length;a++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var a=this.offset(),t=this.message.indexOf(i,a);return t>=0?(this.bumpTo(t),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var a=this.offset();if(a===i)break;if(a>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Ck(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),a=this.offset(),t=this.message.charCodeAt(a+(i>=65536?2:1));return t??null},e}();function ds(e){return e>=97&&e<=122||e>=65&&e<=90}function Qc(e){return ds(e)||e===47}function ey(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Ck(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function ny(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function ks(e){e.forEach(function(i){if(delete i.location,Gk(i)||Bk(i))for(var a in i.options)delete i.options[a].location,ks(i.options[a].value);else Pk(i)&&wk(i.style)||(Fk(i)||Mk(i))&&os(i.style)?delete i.style.location:jk(i)&&ks(i.children)})}function ry(e,i){i===void 0&&(i={}),i=ne({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var a=new Zc(e,i).parse();if(a.err){var t=SyntaxError(Ae[a.err.kind]);throw t.location=a.err.location,t.originalMessage=a.err.message,t}return i!=null&&i.captureLocation||ks(a.val),a.val}function xo(e,i){var a=i&&i.cache?i.cache:ly,t=i&&i.serializer?i.serializer:sy,o=i&&i.strategy?i.strategy:ay;return o(e,{cache:a,serializer:t})}function ty(e){return e==null||typeof e=="number"||typeof e=="boolean"}function $k(e,i,a,t){var o=ty(t)?t:a(t),l=i.get(o);return typeof l>"u"&&(l=e.call(this,t),i.set(o,l)),l}function Jk(e,i,a){var t=Array.prototype.slice.call(arguments,3),o=a(t),l=i.get(o);return typeof l>"u"&&(l=e.apply(this,t),i.set(o,l)),l}function Fs(e,i,a,t,o){return a.bind(i,e,t,o)}function ay(e,i){var a=e.length===1?$k:Jk;return Fs(e,this,a,i.cache.create(),i.serializer)}function iy(e,i){return Fs(e,this,Jk,i.cache.create(),i.serializer)}function oy(e,i){return Fs(e,this,$k,i.cache.create(),i.serializer)}var sy=function(){return JSON.stringify(arguments)};function Ms(){this.cache=Object.create(null)}Ms.prototype.get=function(e){return this.cache[e]};Ms.prototype.set=function(e,i){this.cache[e]=i};var ly={create:function(){return new Ms}},Yo={variadic:iy,monadic:oy},ir;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(ir||(ir={}));var Or=function(e){Jn(i,e);function i(a,t,o){var l=e.call(this,a)||this;return l.code=t,l.originalMessage=o,l}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),Fd=function(e){Jn(i,e);function i(a,t,o,l){return e.call(this,'Invalid values for "'.concat(a,'": "').concat(t,'". Options are "').concat(Object.keys(o).join('", "'),'"'),ir.INVALID_VALUE,l)||this}return i}(Or),uy=function(e){Jn(i,e);function i(a,t,o){return e.call(this,'Value for "'.concat(a,'" must be of type ').concat(t),ir.INVALID_VALUE,o)||this}return i}(Or),dy=function(e){Jn(i,e);function i(a,t){return e.call(this,'The intl string context variable "'.concat(a,'" was not provided to the string "').concat(t,'"'),ir.MISSING_VALUE,t)||this}return i}(Or),kn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(kn||(kn={}));function ky(e){return e.length<2?e:e.reduce(function(i,a){var t=i[i.length-1];return!t||t.type!==kn.literal||a.type!==kn.literal?i.push(a):t.value+=a.value,i},[])}function Wk(e){return typeof e=="function"}function Xa(e,i,a,t,o,l,d){if(e.length===1&&Sd(e[0]))return[{type:kn.literal,value:e[0].value}];for(var k=[],v=0,m=e;v<m.length;v++){var f=m[v];if(Sd(f)){k.push({type:kn.literal,value:f.value});continue}if(Ic(f)){typeof l=="number"&&k.push({type:kn.literal,value:a.getNumberFormat(i).format(l)});continue}var p=f.value;if(!(o&&p in o))throw new dy(p,d);var A=o[p];if(Sc(f)){(!A||typeof A=="string"||typeof A=="number")&&(A=typeof A=="string"||typeof A=="number"?String(A):""),k.push({type:typeof A=="string"?kn.literal:kn.object,value:A});continue}if(Fk(f)){var I=typeof f.style=="string"?t.date[f.style]:os(f.style)?f.style.parsedOptions:void 0;k.push({type:kn.literal,value:a.getDateTimeFormat(i,I).format(A)});continue}if(Mk(f)){var I=typeof f.style=="string"?t.time[f.style]:os(f.style)?f.style.parsedOptions:t.time.medium;k.push({type:kn.literal,value:a.getDateTimeFormat(i,I).format(A)});continue}if(Pk(f)){var I=typeof f.style=="string"?t.number[f.style]:wk(f.style)?f.style.parsedOptions:void 0;I&&I.scale&&(A=A*(I.scale||1)),k.push({type:kn.literal,value:a.getNumberFormat(i,I).format(A)});continue}if(jk(f)){var M=f.children,R=f.value,N=o[R];if(!Wk(N))throw new uy(R,"function",d);var P=Xa(M,i,a,t,o,l),q=N(P.map(function(L){return L.value}));Array.isArray(q)||(q=[q]),k.push.apply(k,q.map(function(L){return{type:typeof L=="string"?kn.literal:kn.object,value:L}}))}if(Gk(f)){var K=f.options[A]||f.options.other;if(!K)throw new Fd(f.value,A,Object.keys(f.options),d);k.push.apply(k,Xa(K.value,i,a,t,o));continue}if(Bk(f)){var K=f.options["=".concat(A)];if(!K){if(!Intl.PluralRules)throw new Or(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ir.MISSING_INTL_API,d);var ee=a.getPluralRules(i,{type:f.pluralType}).select(A-(f.offset||0));K=f.options[ee]||f.options.other}if(!K)throw new Fd(f.value,A,Object.keys(f.options),d);k.push.apply(k,Xa(K.value,i,a,t,o,A-(f.offset||0)));continue}}return ky(k)}function gy(e,i){return i?ne(ne(ne({},e||{}),i||{}),Object.keys(e).reduce(function(a,t){return a[t]=ne(ne({},e[t]),i[t]||{}),a},{})):e}function vy(e,i){return i?Object.keys(e).reduce(function(a,t){return a[t]=gy(e[t],i[t]),a},ne({},e)):e}function Co(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,a){e[i]=a}}}}}function Ey(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:xo(function(){for(var i,a=[],t=0;t<arguments.length;t++)a[t]=arguments[t];return new((i=Intl.NumberFormat).bind.apply(i,tr([void 0],a,!1)))},{cache:Co(e.number),strategy:Yo.variadic}),getDateTimeFormat:xo(function(){for(var i,a=[],t=0;t<arguments.length;t++)a[t]=arguments[t];return new((i=Intl.DateTimeFormat).bind.apply(i,tr([void 0],a,!1)))},{cache:Co(e.dateTime),strategy:Yo.variadic}),getPluralRules:xo(function(){for(var i,a=[],t=0;t<arguments.length;t++)a[t]=arguments[t];return new((i=Intl.PluralRules).bind.apply(i,tr([void 0],a,!1)))},{cache:Co(e.pluralRules),strategy:Yo.variadic})}}var zk=function(){function e(i,a,t,o){var l=this;if(a===void 0&&(a=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(v){var m=l.formatToParts(v);if(m.length===1)return m[0].value;var f=m.reduce(function(p,A){return!p.length||A.type!==kn.literal||typeof p[p.length-1]!="string"?p.push(A.value):p[p.length-1]+=A.value,p},[]);return f.length<=1?f[0]||"":f},this.formatToParts=function(v){return Xa(l.ast,l.locales,l.formatters,l.formats,v,void 0,l.message)},this.resolvedOptions=function(){var v;return{locale:((v=l.resolvedLocale)===null||v===void 0?void 0:v.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=a,this.resolvedLocale=e.resolveLocale(a),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=o||{};d.formatters;var k=vt(d,["formatters"]);this.ast=e.__parse(i,ne(ne({},k),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=vy(e.formats,t),this.formatters=o&&o.formatters||Ey(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var a=Intl.NumberFormat.supportedLocalesOf(i);return a.length>0?new Intl.Locale(a[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=ry,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}();function Hr(e,i){var a=i&&i.cache?i.cache:Ay,t=i&&i.serializer?i.serializer:hy,o=i&&i.strategy?i.strategy:my;return o(e,{cache:a,serializer:t})}function fy(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Xk(e,i,a,t){var o=fy(t)?t:a(t),l=i.get(o);return typeof l>"u"&&(l=e.call(this,t),i.set(o,l)),l}function Zk(e,i,a){var t=Array.prototype.slice.call(arguments,3),o=a(t),l=i.get(o);return typeof l>"u"&&(l=e.apply(this,t),i.set(o,l)),l}function Gs(e,i,a,t,o){return a.bind(i,e,t,o)}function my(e,i){var a=e.length===1?Xk:Zk;return Gs(e,this,a,i.cache.create(),i.serializer)}function Ty(e,i){return Gs(e,this,Zk,i.cache.create(),i.serializer)}function py(e,i){return Gs(e,this,Xk,i.cache.create(),i.serializer)}var hy=function(){return JSON.stringify(arguments)};function Bs(){this.cache=Object.create(null)}Bs.prototype.get=function(e){return this.cache[e]};Bs.prototype.set=function(e,i){this.cache[e]=i};var Ay={create:function(){return new Bs}},Vr={variadic:Ty,monadic:py},xr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(xr||(xr={}));var Xt=function(e){Jn(i,e);function i(a,t,o){var l=this,d=o?o instanceof Error?o:new Error(String(o)):void 0;return l=e.call(this,"[@formatjs/intl Error ".concat(a,"] ").concat(t,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,l.code=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(l,i),l}return i}(Error),cy=function(e){Jn(i,e);function i(a,t){return e.call(this,xr.UNSUPPORTED_FORMATTER,a,t)||this}return i}(Xt),yy=function(e){Jn(i,e);function i(a,t){return e.call(this,xr.INVALID_CONFIG,a,t)||this}return i}(Xt),Md=function(e){Jn(i,e);function i(a,t){return e.call(this,xr.MISSING_DATA,a,t)||this}return i}(Xt),wn=function(e){Jn(i,e);function i(a,t,o){var l=e.call(this,xr.FORMAT_ERROR,"".concat(a,`
Locale: `).concat(t,`
`),o)||this;return l.locale=t,l}return i}(Xt),$o=function(e){Jn(i,e);function i(a,t,o,l){var d=e.call(this,"".concat(a,`
MessageID: `).concat(o==null?void 0:o.id,`
Default Message: `).concat(o==null?void 0:o.defaultMessage,`
Description: `).concat(o==null?void 0:o.description,`
`),t,l)||this;return d.descriptor=o,d.locale=t,d}return i}(wn),Ry=function(e){Jn(i,e);function i(a,t){var o=e.call(this,xr.MISSING_TRANSLATION,'Missing message: "'.concat(a.id,'" for locale "').concat(t,'", using ').concat(a.defaultMessage?"default message (".concat(typeof a.defaultMessage=="string"?a.defaultMessage:a.defaultMessage.map(function(l){var d;return(d=l.value)!==null&&d!==void 0?d:JSON.stringify(l)}).join(),")"):"id"," as fallback."))||this;return o.descriptor=a,o}return i}(Xt);function Cr(e,i,a){return a===void 0&&(a={}),i.reduce(function(t,o){return o in e?t[o]=e[o]:o in a&&(t[o]=a[o]),t},{})}var _y=function(e){},by=function(e){},Qk={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:_y,onWarn:by};function eg(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Ur(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,a){e[i]=a}}}}}function Ny(e){e===void 0&&(e=eg());var i=Intl.RelativeTimeFormat,a=Intl.ListFormat,t=Intl.DisplayNames,o=Hr(function(){for(var k,v=[],m=0;m<arguments.length;m++)v[m]=arguments[m];return new((k=Intl.DateTimeFormat).bind.apply(k,tr([void 0],v,!1)))},{cache:Ur(e.dateTime),strategy:Vr.variadic}),l=Hr(function(){for(var k,v=[],m=0;m<arguments.length;m++)v[m]=arguments[m];return new((k=Intl.NumberFormat).bind.apply(k,tr([void 0],v,!1)))},{cache:Ur(e.number),strategy:Vr.variadic}),d=Hr(function(){for(var k,v=[],m=0;m<arguments.length;m++)v[m]=arguments[m];return new((k=Intl.PluralRules).bind.apply(k,tr([void 0],v,!1)))},{cache:Ur(e.pluralRules),strategy:Vr.variadic});return{getDateTimeFormat:o,getNumberFormat:l,getMessageFormat:Hr(function(k,v,m,f){return new zk(k,v,m,ne({formatters:{getNumberFormat:l,getDateTimeFormat:o,getPluralRules:d}},f||{}))},{cache:Ur(e.message),strategy:Vr.variadic}),getRelativeTimeFormat:Hr(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(i.bind.apply(i,tr([void 0],k,!1)))},{cache:Ur(e.relativeTime),strategy:Vr.variadic}),getPluralRules:d,getListFormat:Hr(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(a.bind.apply(a,tr([void 0],k,!1)))},{cache:Ur(e.list),strategy:Vr.variadic}),getDisplayNames:Hr(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(t.bind.apply(t,tr([void 0],k,!1)))},{cache:Ur(e.displayNames),strategy:Vr.variadic})}}function js(e,i,a,t){var o=e&&e[i],l;if(o&&(l=o[a]),l)return l;t(new cy("No ".concat(i," format named: ").concat(a)))}function Sy(e,i,a){if(a===void 0&&(a=Error),!e)throw new a(i)}var Gd;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Gd||(Gd={}));var gs;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(gs||(gs={}));var Bd;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Bd||(Bd={}));var Jo,jd=!0;try{var Iy=Oy("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");jd=((Jo=Iy.exec("a"))===null||Jo===void 0?void 0:Jo[0])==="a"}catch{jd=!1}function Oy(e,i){return new RegExp(e,i)}function Ja(e,i){return Object.keys(e).reduce(function(a,t){return a[t]=ne({timeZone:i},e[t]),a},{})}function wd(e,i){var a=Object.keys(ne(ne({},e),i));return a.reduce(function(t,o){return t[o]=ne(ne({},e[o]||{}),i[o]||{}),t},{})}function Hd(e,i){if(!i)return e;var a=zk.formats;return ne(ne(ne({},a),e),{date:wd(Ja(a.date,i),Ja(e.date||{},i)),time:wd(Ja(a.time,i),Ja(e.time||{},i))})}var vs=function(e,i,a,t,o){var l=e.locale,d=e.formats,k=e.messages,v=e.defaultLocale,m=e.defaultFormats,f=e.fallbackOnEmptyString,p=e.onError,A=e.timeZone,I=e.defaultRichTextElements;a===void 0&&(a={id:""});var M=a.id,R=a.defaultMessage;Sy(!!M,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var N=String(M),P=k&&Object.prototype.hasOwnProperty.call(k,N)&&k[N];if(Array.isArray(P)&&P.length===1&&P[0].type===gs.literal)return P[0].value;if(!t&&P&&typeof P=="string"&&!I)return P.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=ne(ne({},I),t||{}),d=Hd(d,A),m=Hd(m,A),!P){if(f===!1&&P==="")return P;if((!R||l&&l.toLowerCase()!==v.toLowerCase())&&p(new Ry(a,l)),R)try{var q=i.getMessageFormat(R,v,m,o);return q.format(t)}catch(K){return p(new $o('Error formatting default message for: "'.concat(N,'", rendering default message verbatim'),l,a,K)),typeof R=="string"?R:N}return N}try{var q=i.getMessageFormat(P,l,d,ne({formatters:i},o||{}));return q.format(t)}catch(K){p(new $o('Error formatting message: "'.concat(N,'", using ').concat(R?"default message":"id"," as fallback."),l,a,K))}if(R)try{var q=i.getMessageFormat(R,v,m,o);return q.format(t)}catch(K){p(new $o('Error formatting the default message for: "'.concat(N,'", rendering message verbatim'),l,a,K))}return typeof P=="string"?P:typeof R=="string"?R:N},ng=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function ki(e,i,a,t){var o=e.locale,l=e.formats,d=e.onError,k=e.timeZone;t===void 0&&(t={});var v=t.format,m=ne(ne({},k&&{timeZone:k}),v&&js(l,i,v,d)),f=Cr(t,ng,m);return i==="time"&&!f.hour&&!f.minute&&!f.second&&!f.timeStyle&&!f.dateStyle&&(f=ne(ne({},f),{hour:"numeric",minute:"numeric"})),a(o,f)}function Ly(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var o=a[0],l=a[1],d=l===void 0?{}:l,k=typeof o=="string"?new Date(o||0):o;try{return ki(e,"date",i,d).format(k)}catch(v){e.onError(new wn("Error formatting date.",e.locale,v))}return String(k)}function Ky(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var o=a[0],l=a[1],d=l===void 0?{}:l,k=typeof o=="string"?new Date(o||0):o;try{return ki(e,"time",i,d).format(k)}catch(v){e.onError(new wn("Error formatting time.",e.locale,v))}return String(k)}function Dy(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var o=a[0],l=a[1],d=a[2],k=d===void 0?{}:d,v=e.timeZone,m=e.locale,f=e.onError,p=Cr(k,ng,v?{timeZone:v}:{});try{return i(m,p).formatRange(o,l)}catch(A){f(new wn("Error formatting date time range.",e.locale,A))}return String(o)}function Py(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var o=a[0],l=a[1],d=l===void 0?{}:l,k=typeof o=="string"?new Date(o||0):o;try{return ki(e,"date",i,d).formatToParts(k)}catch(v){e.onError(new wn("Error formatting date.",e.locale,v))}return[]}function Fy(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var o=a[0],l=a[1],d=l===void 0?{}:l,k=typeof o=="string"?new Date(o||0):o;try{return ki(e,"time",i,d).formatToParts(k)}catch(v){e.onError(new wn("Error formatting time.",e.locale,v))}return[]}var My=["style","type","fallback","languageDisplay"];function Gy(e,i,a,t){var o=e.locale,l=e.onError,d=Intl.DisplayNames;d||l(new Or(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,ir.MISSING_INTL_API));var k=Cr(t,My);try{return i(o,k).of(a)}catch(v){l(new wn("Error formatting display name.",o,v))}}var By=["type","style"],Vd=Date.now();function jy(e){return"".concat(Vd,"_").concat(e,"_").concat(Vd)}function wy(e,i,a,t){t===void 0&&(t={});var o=rg(e,i,a,t).reduce(function(l,d){var k=d.value;return typeof k!="string"?l.push(k):typeof l[l.length-1]=="string"?l[l.length-1]+=k:l.push(k),l},[]);return o.length===1?o[0]:o.length===0?"":o}function rg(e,i,a,t){var o=e.locale,l=e.onError;t===void 0&&(t={});var d=Intl.ListFormat;d||l(new Or(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,ir.MISSING_INTL_API));var k=Cr(t,By);try{var v={},m=a.map(function(f,p){if(typeof f=="object"){var A=jy(p);return v[A]=f,A}return String(f)});return i(o,k).formatToParts(m).map(function(f){return f.type==="literal"?f:ne(ne({},f),{value:v[f.value]||f.value})})}catch(f){l(new wn("Error formatting list.",o,f))}return a}var Hy=["type"];function Vy(e,i,a,t){var o=e.locale,l=e.onError;t===void 0&&(t={}),Intl.PluralRules||l(new Or(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ir.MISSING_INTL_API));var d=Cr(t,Hy);try{return i(o,d).select(a)}catch(k){l(new wn("Error formatting plural.",o,k))}return"other"}var Uy=["numeric","style"];function qy(e,i,a){var t=e.locale,o=e.formats,l=e.onError;a===void 0&&(a={});var d=a.format,k=!!d&&js(o,"relative",d,l)||{},v=Cr(a,Uy,k);return i(t,v)}function xy(e,i,a,t,o){o===void 0&&(o={}),t||(t="second");var l=Intl.RelativeTimeFormat;l||e.onError(new Or(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,ir.MISSING_INTL_API));try{return qy(e,i,o).format(a,t)}catch(d){e.onError(new wn("Error formatting relative time.",e.locale,d))}return String(a)}var Yy=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function tg(e,i,a){var t=e.locale,o=e.formats,l=e.onError;a===void 0&&(a={});var d=a.format,k=d&&js(o,"number",d,l)||{},v=Cr(a,Yy,k);return i(t,v)}function Cy(e,i,a,t){t===void 0&&(t={});try{return tg(e,i,t).format(a)}catch(o){e.onError(new wn("Error formatting number.",e.locale,o))}return String(a)}function $y(e,i,a,t){t===void 0&&(t={});try{return tg(e,i,t).formatToParts(a)}catch(o){e.onError(new wn("Error formatting number.",e.locale,o))}return[]}function Jy(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function Wy(e){e.onWarn&&e.defaultRichTextElements&&Jy(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function zy(e,i){var a=Ny(i),t=ne(ne({},Qk),e),o=t.locale,l=t.defaultLocale,d=t.onError;return o?!Intl.NumberFormat.supportedLocalesOf(o).length&&d?d(new Md('Missing locale data for locale: "'.concat(o,'" in Intl.NumberFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(o).length&&d&&d(new Md('Missing locale data for locale: "'.concat(o,'" in Intl.DateTimeFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new yy('"locale" was not configured, using "'.concat(l,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),Wy(t),ne(ne({},t),{formatters:a,formatNumber:Cy.bind(null,t,a.getNumberFormat),formatNumberToParts:$y.bind(null,t,a.getNumberFormat),formatRelativeTime:xy.bind(null,t,a.getRelativeTimeFormat),formatDate:Ly.bind(null,t,a.getDateTimeFormat),formatDateToParts:Py.bind(null,t,a.getDateTimeFormat),formatTime:Ky.bind(null,t,a.getDateTimeFormat),formatDateTimeRange:Dy.bind(null,t,a.getDateTimeFormat),formatTimeToParts:Fy.bind(null,t,a.getDateTimeFormat),formatPlural:Vy.bind(null,t,a.getPluralRules),formatMessage:vs.bind(null,t,a),$t:vs.bind(null,t,a),formatList:wy.bind(null,t,a.getListFormat),formatListToParts:rg.bind(null,t,a.getListFormat),formatDisplayName:Gy.bind(null,t,a.getDisplayNames)})}function Xy(e){Nc(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Zy=ne(ne({},Qk),{textComponent:D.Fragment});function Qy(e){return function(i){return e(D.Children.toArray(i))}}function Ud(e,i){if(e===i)return!0;if(!e||!i)return!1;var a=Object.keys(e),t=Object.keys(i),o=a.length;if(t.length!==o)return!1;for(var l=0;l<o;l++){var d=a[l];if(e[d]!==i[d]||!Object.prototype.hasOwnProperty.call(i,d))return!1}return!0}var ws=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=D.createContext(null)):D.createContext(null);ws.Consumer;var eR=ws.Provider,qd=eR,nR=ws;function Wn(){var e=D.useContext(nR);return Xy(e),e}var Es;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Es||(Es={}));var fs;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(fs||(fs={}));function ag(e){var i=function(a){var t=Wn(),o=a.value,l=a.children,d=vt(a,["value","children"]),k=typeof o=="string"?new Date(o||0):o,v=e==="formatDate"?t.formatDateToParts(k,d):t.formatTimeToParts(k,d);return l(v)};return i.displayName=fs[e],i}function Zt(e){var i=function(a){var t=Wn(),o=a.value,l=a.children,d=vt(a,["value","children"]),k=t[e](o,d);if(typeof l=="function")return l(k);var v=t.textComponent||D.Fragment;return D.createElement(v,null,k)};return i.displayName=Es[e],i}function ig(e){return e&&Object.keys(e).reduce(function(i,a){var t=e[a];return i[a]=Wk(t)?Qy(t):t,i},{})}var xd=function(e,i,a,t){for(var o=[],l=4;l<arguments.length;l++)o[l-4]=arguments[l];var d=ig(t),k=vs.apply(void 0,tr([e,i,a,d],o,!1));return Array.isArray(k)?D.Children.toArray(k):k},rR=function(e,i){var a=e.defaultRichTextElements,t=vt(e,["defaultRichTextElements"]),o=ig(a),l=zy(ne(ne(ne({},Zy),t),{defaultRichTextElements:o}),i),d={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:o};return ne(ne({},l),{formatMessage:xd.bind(null,d,l.formatters),$t:xd.bind(null,d,l.formatters)})};function tR(e,i){var a=e.values,t=vt(e,["values"]),o=i.values,l=vt(i,["values"]);return Ud(o,a)&&Ud(t,l)}function og(e){var i=Wn(),a=i.formatMessage,t=i.textComponent,o=t===void 0?D.Fragment:t,l=e.id,d=e.description,k=e.defaultMessage,v=e.values,m=e.children,f=e.tagName,p=f===void 0?o:f,A=e.ignoreTag,I={id:l,description:d,defaultMessage:k},M=a(I,v,{ignoreTag:A});return typeof m=="function"?m(Array.isArray(M)?M:[M]):p?D.createElement(p,null,D.Children.toArray(M)):D.createElement(D.Fragment,null,M)}og.displayName="FormattedMessage";var Ie=D.memo(og,tR);Ie.displayName="MemoizedFormattedMessage";var sg=Zt("formatDate"),aR=Zt("formatTime");Zt("formatNumber");Zt("formatList");Zt("formatDisplayName");ag("formatDate");ag("formatTime");let Yd=0;function iR(e){const[i,a]=D.useState(e),t=e||i;return D.useEffect(()=>{i==null&&(Yd+=1,a(`aksel-icon-${Yd}`))},[i]),t}const Cd=V.useId;function Tr(e){var i;return Cd!==void 0?Cd().replace(/(:)/g,""):(i=iR(e))!==null&&i!==void 0?i:""}var oR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const sR=D.forwardRef((e,i)=>{var{title:a,titleId:t}=e,o=oR(e,["title","titleId"]);let l=Tr();return l=a?t||"title-"+l:void 0,D.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},o),a?D.createElement("title",{id:l},a):null,D.createElement("path",{fill:"currentColor",d:"M12.75 5a.75.75 0 0 0-1.5 0v12.19l-3.22-3.22a.75.75 0 0 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l4.5-4.5a.75.75 0 1 0-1.06-1.06l-3.22 3.22z"}))});var lR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const uR=D.forwardRef((e,i)=>{var{title:a,titleId:t}=e,o=lR(e,["title","titleId"]);let l=Tr();return l=a?t||"title-"+l:void 0,D.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},o),a?D.createElement("title",{id:l},a):null,D.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var dR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const kR=D.forwardRef((e,i)=>{var{title:a,titleId:t}=e,o=dR(e,["title","titleId"]);let l=Tr();return l=a?t||"title-"+l:void 0,D.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},o),a?D.createElement("title",{id:l},a):null,D.createElement("path",{fill:"currentColor",d:"M12.53 4.47a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06l3.22-3.22V19a.75.75 0 0 0 1.5 0V6.81l3.22 3.22a.75.75 0 1 0 1.06-1.06z"}))});var gR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const vR=D.forwardRef((e,i)=>{var{title:a,titleId:t}=e,o=gR(e,["title","titleId"]);let l=Tr();return l=a?t||"title-"+l:void 0,D.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},o),a?D.createElement("title",{id:l},a):null,D.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var ER=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const fR=D.forwardRef((e,i)=>{var{title:a,titleId:t}=e,o=ER(e,["title","titleId"]);let l=Tr();return l=a?t||"title-"+l:void 0,D.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},o),a?D.createElement("title",{id:l},a):null,D.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var mR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const Wo=D.forwardRef((e,i)=>{var{title:a,titleId:t}=e,o=mR(e,["title","titleId"]);let l=Tr();return l=a?t||"title-"+l:void 0,D.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},o),a?D.createElement("title",{id:l},a):null,D.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12",clipRule:"evenodd"}))});var TR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const pR=D.forwardRef((e,i)=>{var{title:a,titleId:t}=e,o=TR(e,["title","titleId"]);let l=Tr();return l=a?t||"title-"+l:void 0,D.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},o),a?D.createElement("title",{id:l},a):null,D.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var hR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const lg=D.forwardRef((e,i)=>{var{title:a,titleId:t}=e,o=hR(e,["title","titleId"]);let l=Tr();return l=a?t||"title-"+l:void 0,D.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},o),a?D.createElement("title",{id:l},a):null,D.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var AR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const $d=D.forwardRef((e,i)=>{var{title:a,titleId:t}=e,o=AR(e,["title","titleId"]);let l=Tr();return l=a?t||"title-"+l:void 0,D.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},o),a?D.createElement("title",{id:l},a):null,D.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});function ug(e){var i,a,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(i=0;i<o;i++)e[i]&&(a=ug(e[i]))&&(t&&(t+=" "),t+=a)}else for(a in e)e[a]&&(t&&(t+=" "),t+=a);return t}function be(){for(var e,i,a=0,t="",o=arguments.length;a<o;a++)(e=arguments[a])&&(i=ug(e))&&(t&&(t+=" "),t+=i);return t}function zo(e){return(i={})=>{const a=i.width?String(i.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}function Vt(e){return(i,a)=>{const t=a!=null&&a.context?String(a.context):"standalone";let o;if(t==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,k=a!=null&&a.width?String(a.width):d;o=e.formattingValues[k]||e.formattingValues[d]}else{const d=e.defaultWidth,k=a!=null&&a.width?String(a.width):e.defaultWidth;o=e.values[k]||e.values[d]}const l=e.argumentCallback?e.argumentCallback(i):i;return o[l]}}function Ut(e){return(i,a={})=>{const t=a.width,o=t&&e.matchPatterns[t]||e.matchPatterns[e.defaultMatchWidth],l=i.match(o);if(!l)return null;const d=l[0],k=t&&e.parsePatterns[t]||e.parsePatterns[e.defaultParseWidth],v=Array.isArray(k)?yR(k,p=>p.test(d)):cR(k,p=>p.test(d));let m;m=e.valueCallback?e.valueCallback(v):v,m=a.valueCallback?a.valueCallback(m):m;const f=i.slice(d.length);return{value:m,rest:f}}}function cR(e,i){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&i(e[a]))return a}function yR(e,i){for(let a=0;a<e.length;a++)if(i(e[a]))return a}function RR(e){return(i,a={})=>{const t=i.match(e.matchPattern);if(!t)return null;const o=t[0],l=i.match(e.parsePattern);if(!l)return null;let d=e.valueCallback?e.valueCallback(l[0]):l[0];d=a.valueCallback?a.valueCallback(d):d;const k=i.slice(o.length);return{value:d,rest:k}}}const _R={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},bR=(e,i,a)=>{let t;const o=_R[e];return typeof o=="string"?t=o:i===1?t=o.one:t=o.other.replace("{{count}}",String(i)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"om "+t:t+" siden":t},NR={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},SR={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},IR={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},OR={date:zo({formats:NR,defaultWidth:"full"}),time:zo({formats:SR,defaultWidth:"full"}),dateTime:zo({formats:IR,defaultWidth:"full"})},LR={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},KR=(e,i,a,t)=>LR[e],DR={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},PR={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},FR={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},MR={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},GR={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},BR=(e,i)=>Number(e)+".",jR={ordinalNumber:BR,era:Vt({values:DR,defaultWidth:"wide"}),quarter:Vt({values:PR,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Vt({values:FR,defaultWidth:"wide"}),day:Vt({values:MR,defaultWidth:"wide"}),dayPeriod:Vt({values:GR,defaultWidth:"wide"})},wR=/^(\d+)\.?/i,HR=/\d+/i,VR={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},UR={any:[/^f/i,/^e/i]},qR={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},xR={any:[/1/i,/2/i,/3/i,/4/i]},YR={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},CR={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},$R={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},JR={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},WR={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},zR={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},XR={ordinalNumber:RR({matchPattern:wR,parsePattern:HR,valueCallback:e=>parseInt(e,10)}),era:Ut({matchPatterns:VR,defaultMatchWidth:"wide",parsePatterns:UR,defaultParseWidth:"any"}),quarter:Ut({matchPatterns:qR,defaultMatchWidth:"wide",parsePatterns:xR,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ut({matchPatterns:YR,defaultMatchWidth:"wide",parsePatterns:CR,defaultParseWidth:"any"}),day:Ut({matchPatterns:$R,defaultMatchWidth:"wide",parsePatterns:JR,defaultParseWidth:"any"}),dayPeriod:Ut({matchPatterns:WR,defaultMatchWidth:"any",parsePatterns:zR,defaultParseWidth:"any"})},ZR={code:"nb",formatDistance:bR,formatLong:OR,formatRelative:KR,localize:jR,match:XR,options:{weekStartsOn:1,firstWeekContainsDate:4}},QR={global:{dateLocale:ZR,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},e_=D.createContext({locale:QR}),n_=()=>D.useContext(e_);function dg(e){return i=>{e.forEach(a=>{typeof a=="function"?a(i):a!=null&&(a.current=i)})}}function kg(...e){return V.useCallback(dg(e),e)}function r_(e,i){const a=Object.assign({},i);for(const t in i){const o=e[t],l=i[t];/^on[A-Z]/.test(t)?o&&l?a[t]=(...k)=>{l(...k),o(...k)}:o&&(a[t]=o):t==="style"?a[t]=Object.assign(Object.assign({},o),l):t==="className"&&(a[t]=[o,l].filter(Boolean).join(" "))}return Object.assign(Object.assign({},e),a)}var t_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const Qt=D.forwardRef((e,i)=>{var a;const{children:t}=e,o=t_(e,["children"]);if(D.isValidElement(t)){const l=Object.prototype.propertyIsEnumerable.call(t.props,"ref")?t.props.ref:t.ref;return D.cloneElement(t,Object.assign(Object.assign({},r_(o,t.props)),{ref:i?dg([i,l]):l}))}if(D.Children.count(t)>1){const l=new Error("Aksel: Components using 'asChild' expects to recieve a single React element child.");throw l.name="SlotError",(a=Error.captureStackTrace)===null||a===void 0||a.call(Error,l,Qt),l}return null});var a_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};function i_(e,i){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${i}`}function o_(e={}){const{name:i,hookName:a="useContext",providerName:t="Provider",errorMessage:o,defaultValue:l}=e,d=D.createContext(l),k=D.forwardRef((m,f)=>{var{children:p}=m,A=a_(m,["children"]);const I=V.useMemo(()=>A,Object.values(A));return V.createElement(d.Provider,{value:f?Object.assign(Object.assign({},I),{ref:f}):I},p)});function v(m=!0){var f;const p=D.useContext(d);if(!p&&m){const A=new Error(o??i_(a,t));throw A.name="ContextError",(f=Error.captureStackTrace)===null||f===void 0||f.call(Error,A,v),A}return p}return d.displayName=i,[k,v]}const[s_,ea]=o_({errorMessage:"useAkselTheme must be used within AkselThemeProvider",hookName:"useAkselTheme",name:"AkselThemeProvider",providerName:"AkselThemeProvider"});D.forwardRef((e,i)=>{var a,t;const o=ea(!1),{children:l,className:d,asChild:k=!1,theme:v=(a=o==null?void 0:o.theme)!==null&&a!==void 0?a:"light",volume:m=(t=o==null?void 0:o.volume)!==null&&t!==void 0?t:"low",hasBackground:f=!0}=e,A=f??(o===void 0||e.theme!==void 0),I=k?Qt:"div";return V.createElement(s_,{theme:v,volume:m},V.createElement(I,{ref:i,className:be("navds-theme",d,v),"data-background":A,"data-volume":m},l))});const pt=e=>be({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var l_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const gg=D.forwardRef((e,i)=>{var{className:a,size:t="medium",as:o="p",spacing:l,truncate:d,weight:k="regular",align:v,visuallyHidden:m,textColor:f}=e,p=l_(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return V.createElement(o,Object.assign({},p,{ref:i,className:be(a,"navds-body-long",`navds-body-long--${t}`,pt({spacing:l,truncate:d,weight:k,align:v,visuallyHidden:m,textColor:f}))}))});var u_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const gi=D.forwardRef((e,i)=>{var{className:a,size:t="medium",as:o="p",spacing:l,truncate:d,weight:k="regular",align:v,visuallyHidden:m,textColor:f}=e,p=u_(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return V.createElement(o,Object.assign({},p,{ref:i,className:be(a,"navds-body-short",`navds-body-short--${t}`,pt({spacing:l,truncate:d,weight:k,align:v,visuallyHidden:m,textColor:f}))}))});var d_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};D.forwardRef((e,i)=>{var{className:a,size:t="medium",spacing:o,uppercase:l,as:d="p",truncate:k,weight:v="regular",align:m,visuallyHidden:f,textColor:p}=e,A=d_(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return V.createElement(d,Object.assign({},A,{ref:i,className:be(a,"navds-detail",pt({spacing:o,truncate:k,weight:v,align:m,visuallyHidden:f,textColor:p,uppercase:l}),{"navds-detail--small":t==="small"})}))});var k_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const g_=D.forwardRef((e,i)=>{var{className:a,size:t,spacing:o,as:l="p"}=e,d=k_(e,["className","size","spacing","as"]);return V.createElement(l,Object.assign({},d,{ref:i,className:be("navds-error-message","navds-label",a,pt({spacing:o}),{"navds-label--small":t==="small"})}))});var v_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const vg=D.forwardRef((e,i)=>{var{level:a="1",size:t,className:o,as:l,spacing:d,align:k,visuallyHidden:v,textColor:m}=e,f=v_(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const p=l??`h${a}`;return V.createElement(p,Object.assign({},f,{ref:i,className:be(o,"navds-heading",`navds-heading--${t}`,pt({spacing:d,align:k,visuallyHidden:v,textColor:m}))}))});var E_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};D.forwardRef((e,i)=>{var{className:a,spacing:t,as:o="p"}=e,l=E_(e,["className","spacing","as"]);return V.createElement(o,Object.assign({},l,{ref:i,className:be(a,"navds-ingress",{"navds-typo--spacing":!!t})}))});var f_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const Hs=D.forwardRef((e,i)=>{var{className:a,size:t="medium",as:o="label",spacing:l,visuallyHidden:d,textColor:k}=e,v=f_(e,["className","size","as","spacing","visuallyHidden","textColor"]);return V.createElement(o,Object.assign({},v,{ref:i,className:be(a,"navds-label",pt({spacing:l,visuallyHidden:d,textColor:k}),{"navds-label--small":t==="small"})}))});function na(e,i){const a=Object.entries(e).filter(([t])=>!i.includes(t));return Object.fromEntries(a)}const m_=globalThis!=null&&globalThis.document?D.useLayoutEffect:()=>{};let Jd=0;function T_(e){const[i,a]=D.useState(e),t=e||i;return D.useEffect(()=>{i==null&&(Jd+=1,a(`aksel-id-${Jd}`))},[i]),t}const Wd=V.useId;function Vs(e){var i;return Wd!==void 0?Wd().replace(/(:)/g,""):(i=T_(e))!==null&&i!==void 0?i:""}function zd(e,i=[]){const a=D.useRef(e);return D.useEffect(()=>{a.current=e}),D.useCallback((...t)=>{var o;return(o=a.current)===null||o===void 0?void 0:o.call(a,...t)},i)}function p_({value:e,defaultValue:i,onChange:a}){const t=zd(a),[o,l]=D.useState(i),d=e!==void 0,k=d?e:o,v=zd(m=>{const p=typeof m=="function"?m(k):m;d||l(p),t(p)},[d,t,k]);return[k,v]}function Us(e,i,{checkForDefaultPrevented:a=!0}={}){return function(o){if(e==null||e(o),a===!1||!o.defaultPrevented)return i==null?void 0:i(o)}}const Xd=/(\w+)/g;function h_(e,i){const a=Array.isArray(e)?e:A_(e);for(const t of i){if(!t)continue;let o=t;for(let l=0;l<a.length;l++){const d=o[a[l]];d!==void 0&&(o=d)}if(typeof o=="string")return o}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function A_(e){const i=[];let a=Xd.exec(e);for(;a;){const[,t,o]=a;i.push(t||o),a=Xd.exec(e)}return i}const c_=/{[^}]*}/g;function vi(e,...i){const a=n_(),t=a.translations||[],o=[...i,...Array.isArray(t)?t.map(d=>d[e]):[t[e]],a.locale[e]];return(d,k)=>{const v=h_(d,o);return k?v.replace(c_,m=>{const f=m.substring(1,m.length-1);if(k[f]===void 0){const p=JSON.stringify(k);throw new Error(`Error translating key '${d}'. No replacement syntax ({}) found for key '${f}'. The following replacements were passed: '${p}'`)}return k[f]}):v}}var y_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const R_=D.forwardRef((e,i)=>{var{className:a,size:t="medium",title:o,transparent:l=!1,variant:d="neutral",id:k}=e,v=y_(e,["className","size","title","transparent","variant","id"]);const m=Vs(),f=vi("Loader");return V.createElement("svg",Object.assign({"aria-labelledby":k??`loader-${m}`,ref:i,className:be("navds-loader",a,`navds-loader--${t}`,`navds-loader--${d}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},na(v,["children"])),V.createElement("title",{id:k??`loader-${m}`},o||f("title")),V.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),V.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var __=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const qs=D.forwardRef((e,i)=>{var{as:a="button",variant:t="primary",className:o,children:l,size:d="medium",loading:k=!1,disabled:v,style:m,icon:f,iconPosition:p="left"}=e,A=__(e,["as","variant","className","children","size","loading","disabled","style","icon","iconPosition"]);const I=D.useRef(null),[M,R]=D.useState(),N=kg(I,i);m_(()=>{if(k){const K=window.requestAnimationFrame(()=>{var ee,L;R((L=(ee=I==null?void 0:I.current)===null||ee===void 0?void 0:ee.getBoundingClientRect())===null||L===void 0?void 0:L.width)});return()=>{R(void 0),cancelAnimationFrame(K)}}},[k,l]);const P=v??M?na(A,["href"]):A,q=K=>{K.key===" "&&!v&&!M&&K.currentTarget.click()};return V.createElement(a,Object.assign({},a!=="button"?{role:"button"}:{},P,{ref:N,onKeyUp:Us(P.onKeyUp,q),className:be(o,"navds-button",`navds-button--${t}`,`navds-button--${d}`,{"navds-button--loading":M,"navds-button--icon-only":!!f&&!l,"navds-button--disabled":v??M}),style:Object.assign(Object.assign({},m),{width:M}),disabled:v??M?!0:void 0}),M?V.createElement(R_,{size:d}):V.createElement(V.Fragment,null,f&&p==="left"&&V.createElement("span",{className:"navds-button__icon"},f),l&&V.createElement(Hs,{as:"span",size:d==="medium"?"medium":"small"},l),f&&p==="right"&&V.createElement("span",{className:"navds-button__icon"},f)))}),b_=D.createContext(null),N_=(e,i)=>{var a,t,o;const{size:l,error:d,errorId:k}=e,v=D.useContext(b_),m=Vs(),f=(a=e.id)!==null&&a!==void 0?a:`${i}-${m}`,p=k??`${i}-error-${m}`,A=`${i}-description-${m}`,I=(v==null?void 0:v.disabled)||e.disabled,M=((v==null?void 0:v.readOnly)||e.readOnly)&&!I||void 0,R=!I&&!M&&!!(d||v!=null&&v.error),N=!I&&!M&&!!d&&typeof d!="boolean",P=Object.assign({},R?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:N,hasError:R,errorId:p,inputDescriptionId:A,size:(t=l??(v==null?void 0:v.size))!==null&&t!==void 0?t:"medium",readOnly:M,inputProps:Object.assign(Object.assign({id:f},P),{"aria-describedby":be(e["aria-describedby"],{[A]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[p]:N,[(o=v==null?void 0:v.errorId)!==null&&o!==void 0?o:""]:R&&!!(v!=null&&v.error)})||void 0,disabled:I})}};function Ze(e,i,a,t){return t?typeof t=="string"?{[`--__${e}c-${i}-${a}-xs`]:t}:Object.fromEntries(Object.entries(t).map(([o,l])=>[`--__${e}c-${i}-${a}-${o}`,l])):{}}const S_=e=>{switch(e){case"px":return"1px"}return e},Zd=(e,i,a,t,o,l)=>i.split(" ").map((d,k,v)=>{if(e==="margin-inline"&&d==="full")return`calc((100vw - ${100/v.length}%)/-2)`;if(e==="padding-inline"&&d==="full")return`calc((100vw - ${100/v.length}%)/2)`;if(["mi","mb"].includes(e)&&d==="auto")return"auto";let m=`var(--${l}-${a}-${d})`;return t.includes(d)&&(m=S_(d)),o?d==="0"?"0":`calc(-1 * ${m})`:m}).join(" ");function In(e,i,a,t,o,l=!1,d=[]){if(!o)return{};if(typeof o=="string")return{[`--__${e}c-${i}-${a}-xs`]:Zd(a,o,t,d,l,e)};const k={};return Object.entries(o).forEach(([v,m])=>{k[`--__${e}c-${i}-${a}-${v}`]=Zd(a,m,t,d,l,e)}),k}const Eg=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],fg=({children:e,className:i,padding:a,paddingInline:t,paddingBlock:o,margin:l,marginInline:d,marginBlock:k,width:v,minWidth:m,maxWidth:f,height:p,minHeight:A,maxHeight:I,position:M,inset:R,top:N,right:P,left:q,bottom:K,overflow:ee,overflowX:L,overflowY:U,flexBasis:O,flexGrow:b,flexShrink:J,gridColumn:W})=>{const z=ea(!1)?"ax":"a",oe=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},In(z,"r","p","spacing",a)),In(z,"r","pi","spacing",t)),In(z,"r","pb","spacing",o)),In(z,"r","m","spacing",l)),In(z,"r","mi","spacing",d)),In(z,"r","mb","spacing",k)),Ze(z,"r","w",v)),Ze(z,"r","minw",m)),Ze(z,"r","maxw",f)),Ze(z,"r","h",p)),Ze(z,"r","minh",A)),Ze(z,"r","maxh",I)),Ze(z,"r","position",M)),In(z,"r","inset","spacing",R)),In(z,"r","top","spacing",N)),In(z,"r","right","spacing",P)),In(z,"r","bottom","spacing",K)),In(z,"r","left","spacing",q)),Ze(z,"r","overflow",ee)),Ze(z,"r","overflowx",L)),Ze(z,"r","overflowy",U)),Ze(z,"r","flex-basis",O)),Ze(z,"r","flex-grow",b)),Ze(z,"r","flex-shrink",J)),Ze(z,"r","grid-column",W));return V.createElement(Qt,{className:be({className:i,"navds-r-p":a,"navds-r-pi":t,"navds-r-pb":o,"navds-r-m":l,"navds-r-mi":d,"navds-r-mb":k,"navds-r-w":v,"navds-r-minw":m,"navds-r-maxw":f,"navds-r-h":p,"navds-r-minh":A,"navds-r-maxh":I,"navds-r-position":M,"navds-r-inset":R,"navds-r-top":N,"navds-r-right":P,"navds-r-bottom":K,"navds-r-left":q,"navds-r-overflow":ee,"navds-r-overflowx":L,"navds-r-overflowy":U,"navds-r-flex-basis":O,"navds-r-flex-grow":b,"navds-r-flex-shrink":J,"navds-r-grid-column":W}),style:oe},e)};var I_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const O_=D.forwardRef((e,i)=>{var{children:a,className:t,as:o="div",columns:l,gap:d,style:k,align:v,asChild:m}=e,f=I_(e,["children","className","as","columns","gap","style","align","asChild"]);const A=ea(!1)?"ax":"a",I=Object.assign(Object.assign(Object.assign(Object.assign({},k),{[`--__${A}c-hgrid-align`]:v}),In(A,"hgrid","gap","spacing",d)),Ze(A,"hgrid","columns",L_(l))),M=m?Qt:o;return V.createElement(fg,Object.assign({},f),V.createElement(M,Object.assign({},na(f,Eg),{ref:i,className:be("navds-hgrid",t,{"navds-hgrid-gap":d,"navds-hgrid-align":v}),style:I}),a))});function L_(e){return e?typeof e=="string"||typeof e=="number"?Qd(e):Object.fromEntries(Object.entries(e).map(([i,a])=>[i,Qd(a)])):{}}const Qd=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var K_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const mg=D.forwardRef((e,i)=>{var{children:a,className:t,as:o="div",align:l,justify:d,wrap:k=!0,gap:v,style:m,direction:f="row",asChild:p}=e,A=K_(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const M=ea(!1)?"ax":"a",R=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},m),In(M,"stack","gap","spacing",v)),Ze(M,"stack","direction",f)),Ze(M,"stack","align",l)),Ze(M,"stack","justify",d)),N=p?Qt:o;return V.createElement(fg,Object.assign({},A),V.createElement(N,Object.assign({},na(A,Eg),{ref:i,style:R,className:be("navds-stack",t,{"navds-vstack":f==="column","navds-hstack":f==="row","navds-stack-gap":v,"navds-stack-align":l,"navds-stack-justify":d,"navds-stack-direction":f,"navds-stack-wrap":k})}),a))});var D_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const kt=D.forwardRef((e,i)=>{var{as:a="div"}=e,t=D_(e,["as"]);return V.createElement(mg,Object.assign({as:a},t,{ref:i,direction:"row"}))});var P_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const ft=D.forwardRef((e,i)=>{var{as:a="div"}=e,t=P_(e,["as"]);return V.createElement(mg,Object.assign({as:a},t,{ref:i,direction:"column",wrap:!1}))}),ms=D.createContext({listType:"ul",size:"medium"});var F_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const Tg=D.forwardRef((e,i)=>{var{className:a,children:t,title:o,icon:l}=e,d=F_(e,["className","children","title","icon"]);const{listType:k,size:v}=D.useContext(ms);return k==="ol"&&l&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),V.createElement("li",Object.assign({},d,{ref:i,className:be("navds-list__item",a)}),k==="ul"&&V.createElement("div",{className:be("navds-list__item-marker",{"navds-list__item-marker--icon":l,"navds-list__item-marker--bullet":!l})},l||V.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},V.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),V.createElement("div",null,o&&V.createElement(gg,{as:"p",size:v,weight:"semibold"},o),t))});Tg.displayName="List.Item";var M_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const G_={small:"xsmall",medium:"small",large:"medium"},Ts=D.forwardRef((e,i)=>{var{children:a,className:t,as:o="ul",title:l,description:d,headingTag:k="h3",size:v}=e,m=M_(e,["children","className","as","title","description","headingTag","size"]);const{size:f}=D.useContext(ms),p=v??f;return V.createElement(ms.Provider,{value:{listType:o,size:p}},V.createElement(gg,Object.assign({as:"div"},m,{size:p,ref:i,className:be("navds-list",`navds-list--${p}`,t)}),l&&V.createElement(vg,{size:G_[p],as:k},l),d&&V.createElement(gi,{size:p},d),V.createElement(o,{role:"list"},a)))});Ts.Item=Tg;var B_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const j_=D.forwardRef((e,i)=>{var{className:a}=e,t=B_(e,["className"]);return V.createElement("tbody",Object.assign({},t,{ref:i,className:be("navds-table__body",a)}))});var w_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const pg=D.forwardRef((e,i)=>{var{className:a,children:t,align:o,textSize:l}=e,d=w_(e,["className","children","align","textSize"]);return V.createElement("th",Object.assign({ref:i,className:be("navds-table__header-cell","navds-label",a,{[`navds-table__header-cell--align-${o}`]:o,"navds-label--small":l==="small"})},d),t)}),hg=D.createContext(null);var H_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const V_=D.forwardRef((e,i)=>{var a,t,o,l,{className:d,children:k,sortable:v=!1,sortKey:m}=e,f=H_(e,["className","children","sortable","sortKey"]);const p=D.useContext(hg);return v&&!m&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),V.createElement(pg,Object.assign({scope:"col",ref:i,className:d,"aria-sort":v?((a=p==null?void 0:p.sort)===null||a===void 0?void 0:a.orderBy)===m?(t=p==null?void 0:p.sort)===null||t===void 0?void 0:t.direction:"none":void 0},f),v?V.createElement("button",{type:"button",className:"navds-table__sort-button",onClick:v&&m?()=>{var A;return(A=p==null?void 0:p.onSortChange)===null||A===void 0?void 0:A.call(p,m)}:void 0},k,((o=p==null?void 0:p.sort)===null||o===void 0?void 0:o.orderBy)===m?((l=p==null?void 0:p.sort)===null||l===void 0?void 0:l.direction)==="descending"?V.createElement(sR,{"aria-hidden":!0}):V.createElement(kR,{"aria-hidden":!0}):V.createElement(vR,{"aria-hidden":!0})):k)});var U_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const Ag=D.forwardRef((e,i)=>{var{className:a,children:t="",align:o,textSize:l}=e,d=U_(e,["className","children","align","textSize"]);return V.createElement(gi,Object.assign({as:"td",ref:i,className:be("navds-table__data-cell",a,{[`navds-table__data-cell--align-${o}`]:o}),size:l},d),t)});var q_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const x_=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function Y_(e){const i=parseFloat(e);return!Number.isNaN(i)&&Number.isFinite(i)}function ek(e){return typeof e=="string"&&e[e.length-1]==="%"&&Y_(e.substring(0,e.length-1))}function Xo(e,i){i===0&&(e!=null&&e.style)&&(e.style.display="none")}function C_(e,i){i===0&&(e!=null&&e.style)&&(e.style.display="")}const $_=e=>{var{children:i,className:a,innerClassName:t,duration:o=250,easing:l="ease",height:d}=e,k=q_(e,["children","className","innerClassName","duration","easing","height"]);const v=D.useRef(d),m=D.useRef(null),f=D.useRef(),p=D.useRef(),A=D.useRef(d),I=D.useRef("visible"),M=x_?0:o;typeof A.current=="number"?(typeof d!="string"&&(A.current=d<0?0:d),I.current="hidden"):ek(A.current)&&(A.current=d==="0%"?0:d,I.current="hidden");const[R,N]=D.useState(A.current),[P,q]=D.useState(I.current),[K,ee]=D.useState(!1);D.useEffect(()=>{Xo(m.current,A.current)},[]),D.useEffect(()=>{if(d!==v.current&&m.current){C_(m.current,v.current),m.current.style.overflow="hidden";const b=m.current.offsetHeight;m.current.style.overflow="";const J=M;let W,x,z="hidden",oe;const C=v.current==="auto";typeof d=="number"?(W=d<0?0:d,x=W):ek(d)?(W=d==="0%"?0:d,x=W):(W=b,x="auto",z=void 0),C&&(x=W,W=b),N(W),q("hidden"),ee(!C),clearTimeout(p.current),clearTimeout(f.current),C?(oe=!0,p.current=setTimeout(()=>{N(x),q(z),ee(oe)},50),f.current=setTimeout(()=>{ee(!1),Xo(m.current,x)},J)):p.current=setTimeout(()=>{N(x),q(z),ee(!1),d!=="auto"&&Xo(m.current,W)},J)}return v.current=d,()=>{clearTimeout(p.current),clearTimeout(f.current)}},[d]);const L={height:R,overflow:P};K&&(L.transition=`height ${M}ms ${l} 0ms`,L.WebkitTransition=L.transition);const O=typeof k["aria-hidden"]<"u"?k["aria-hidden"]:d===0;return V.createElement("div",Object.assign({},k,{className:a,style:L}),V.createElement("div",{"aria-hidden":O,className:t,ref:m},i))};var J_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const cg=D.forwardRef((e,i)=>{var{className:a,selected:t=!1,shadeOnHover:o=!0}=e,l=J_(e,["className","selected","shadeOnHover"]);return V.createElement("tr",Object.assign({},l,{ref:i,className:be("navds-table__row",a,{"navds-table__row--selected":t,"navds-table__row--shade-on-hover":o})}))});var W_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const z_=D.forwardRef((e,i)=>{var{className:a,children:t,content:o,togglePlacement:l="left",defaultOpen:d=!1,open:k,onOpenChange:v,expansionDisabled:m=!1,expandOnRowClick:f=!1,colSpan:p=999,onClick:A}=e,I=W_(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","onClick"]);const[M,R]=p_({defaultValue:d,value:k,onChange:v}),N=vi("global"),P=Vs(),q=ee=>{R(L=>!L),ee.stopPropagation()},K=ee=>{f&&!m&&!yg(ee.target)&&q(ee)};return V.createElement(V.Fragment,null,V.createElement(cg,Object.assign({},I,{ref:i,className:be("navds-table__expandable-row",a,{"navds-table__expandable-row--open":M,"navds-table__expandable-row--expansion-disabled":m,"navds-table__expandable-row--clickable":f}),onClick:Us(A,K)}),l==="right"&&t,V.createElement(Ag,{className:be("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":M}),onClick:m?()=>null:q},!m&&V.createElement("button",{className:"navds-table__toggle-expand-button",type:"button","aria-controls":P,"aria-expanded":M,onClick:q},V.createElement(fR,{className:"navds-table__expandable-icon",title:N(M?"showLess":"showMore")}))),l==="left"&&t),V.createElement("tr",{"data-state":M?"open":"closed",className:"navds-table__expanded-row","aria-hidden":!M,id:P},V.createElement("td",{colSpan:p,className:"navds-table__expanded-row-cell"},V.createElement($_,{className:"navds-table__expanded-row-collapse",innerClassName:"navds-table__expanded-row-content",height:M?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},o))))});function yg(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:yg(e.parentElement)}var X_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const Z_=D.forwardRef((e,i)=>{var{className:a}=e,t=X_(e,["className"]);return V.createElement("thead",Object.assign({},t,{ref:i,className:be("navds-table__header",a)}))});var Q_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const Ve=D.forwardRef((e,i)=>{var{className:a,zebraStripes:t=!1,size:o="medium",onSortChange:l,sort:d}=e,k=Q_(e,["className","zebraStripes","size","onSortChange","sort"]);return V.createElement(hg.Provider,{value:{onSortChange:l,sort:d}},V.createElement("table",Object.assign({},k,{ref:i,className:be("navds-table",`navds-table--${o}`,a,{"navds-table--zebra-stripes":t})})))});Ve.Header=Z_;Ve.Body=j_;Ve.Row=cg;Ve.ColumnHeader=V_;Ve.HeaderCell=pg;Ve.DataCell=Ag;Ve.ExpandableRow=z_;const Rg=D.createContext(null);var eb=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const _g=D.forwardRef((e,i)=>{var a,{className:t,children:o,disabled:l,onClick:d}=e,k=eb(e,["className","children","disabled","onClick"]);const v=vi("Search"),m=D.useContext(Rg);if(m===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:f,variant:p,handleClick:A}=m;return V.createElement(qs,Object.assign({type:"submit"},k,{ref:i,size:f,variant:p==="secondary"?"secondary":"primary",className:be("navds-search__button-search",t),disabled:(a=m==null?void 0:m.disabled)!==null&&a!==void 0?a:l,onClick:Us(d,A),icon:V.createElement(lg,Object.assign({},o?{"aria-hidden":!0}:{title:v("search")}))}),o)});var nb=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const ps=D.forwardRef((e,i)=>{const{inputProps:a,size:t="medium",inputDescriptionId:o,errorId:l,showErrorMsg:d,hasError:k}=N_(e,"searchfield"),{className:v,hideLabel:m=!0,label:f,description:p,value:A,clearButtonLabel:I,onClear:M,clearButton:R=!0,children:N,variant:P="primary",defaultValue:q,onChange:K,onSearchClick:ee,htmlSize:L}=e,U=nb(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize"]),O=ea(!1),b=D.useRef(null),J=kg(b,i),W=vi("Search"),[x,z]=D.useState(q??""),oe=w=>{A===void 0&&z(w),K==null||K(w)},C=w=>{var te,ie;M==null||M(w),oe(""),(ie=(te=b.current)===null||te===void 0?void 0:te.focus)===null||ie===void 0||ie.call(te)},$=()=>{ee==null||ee(`${A??x}`)},Y=R&&!a.disabled&&(A??x),Z=()=>O?V.createElement(qs,{className:"navds-search__button-clear",variant:"tertiary-neutral",size:t==="medium"?"small":"xsmall",icon:V.createElement($d,{"aria-hidden":!0}),title:I||W("clear"),hidden:!Y,onClick:w=>C({trigger:"Click",event:w})}):V.createElement("button",{type:"button",onClick:w=>C({trigger:"Click",event:w}),className:"navds-search__button-clear",hidden:!Y},V.createElement("span",{className:"navds-sr-only"},I||W("clear")),V.createElement($d,{"aria-hidden":!0}));return V.createElement("div",{onKeyDown:w=>{var te;w.key==="Escape"&&(!((te=b.current)===null||te===void 0)&&te.value&&w.preventDefault(),C({trigger:"Escape",event:w}))},className:be(v,"navds-form-field",`navds-form-field--${t}`,"navds-search",{"navds-search--error":k,"navds-search--disabled":a.disabled,"navds-search--with-size":L})},V.createElement(Hs,{htmlFor:a.id,size:t,className:be("navds-form-field__label",{"navds-sr-only":m})},f),!!p&&V.createElement(gi,{className:be("navds-form-field__description",{"navds-sr-only":m}),id:o,size:t,as:"div"},p),V.createElement("div",{className:"navds-search__wrapper"},V.createElement("div",{className:"navds-search__wrapper-inner"},P==="simple"&&V.createElement(lg,{"aria-hidden":!0,className:"navds-search__search-icon"}),V.createElement("input",Object.assign({ref:J},na(U,["error","errorId","size","readOnly"]),a,{value:A??x,onChange:w=>oe(w.target.value),type:"search",className:be(v,"navds-search__input",`navds-search__input--${P}`,"navds-text-field__input","navds-body-short",`navds-body-short--${t}`)},L?{size:Number(L)}:{})),V.createElement(Z,null)),V.createElement(Rg.Provider,{value:{size:t,disabled:a.disabled,variant:P,handleClick:$}},N||P!=="simple"&&V.createElement(_g,null))),V.createElement("div",{className:"navds-form-field__error",id:l,"aria-relevant":"additions removals","aria-live":"polite"},d&&V.createElement(g_,{size:t},e.error)))});ps.Button=_g;const gt=e=>{if(e==null)return;const i=e.toString().replace(/\s/g,"");if(!Number.isNaN(i))return Number(Math.round(parseFloat(i))).toLocaleString("nb-NO").replace(/,|\s/g," ")};var Ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bg={exports:{}};(function(e,i){(function(a,t){e.exports=t()})(Ei,function(){var a="minute",t=/[+-]\d\d(?::?\d\d)?/g,o=/([+-]|\d\d)/g;return function(l,d,k){var v=d.prototype;k.utc=function(R){var N={date:R,utc:!0,args:arguments};return new d(N)},v.utc=function(R){var N=k(this.toDate(),{locale:this.$L,utc:!0});return R?N.add(this.utcOffset(),a):N},v.local=function(){return k(this.toDate(),{locale:this.$L,utc:!1})};var m=v.parse;v.parse=function(R){R.utc&&(this.$u=!0),this.$utils().u(R.$offset)||(this.$offset=R.$offset),m.call(this,R)};var f=v.init;v.init=function(){if(this.$u){var R=this.$d;this.$y=R.getUTCFullYear(),this.$M=R.getUTCMonth(),this.$D=R.getUTCDate(),this.$W=R.getUTCDay(),this.$H=R.getUTCHours(),this.$m=R.getUTCMinutes(),this.$s=R.getUTCSeconds(),this.$ms=R.getUTCMilliseconds()}else f.call(this)};var p=v.utcOffset;v.utcOffset=function(R,N){var P=this.$utils().u;if(P(R))return this.$u?0:P(this.$offset)?p.call(this):this.$offset;if(typeof R=="string"&&(R=function(L){L===void 0&&(L="");var U=L.match(t);if(!U)return null;var O=(""+U[0]).match(o)||["-",0,0],b=O[0],J=60*+O[1]+ +O[2];return J===0?0:b==="+"?J:-J}(R),R===null))return this;var q=Math.abs(R)<=16?60*R:R,K=this;if(N)return K.$offset=q,K.$u=R===0,K;if(R!==0){var ee=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(K=this.local().add(q+ee,a)).$offset=q,K.$x.$localOffset=ee}else K=this.utc();return K};var A=v.format;v.format=function(R){var N=R||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return A.call(this,N)},v.valueOf=function(){var R=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*R},v.isUTC=function(){return!!this.$u},v.toISOString=function(){return this.toDate().toISOString()},v.toString=function(){return this.toDate().toUTCString()};var I=v.toDate;v.toDate=function(R){return R==="s"&&this.$offset?k(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():I.call(this)};var M=v.diff;v.diff=function(R,N,P){if(R&&this.$u===R.$u)return M.call(this,R,N,P);var q=this.local(),K=k(R).local();return M.call(q,K,N,P)}}})})(bg);var rb=bg.exports;const tb=xs(rb);var Ng={exports:{}};(function(e,i){(function(a,t){e.exports=t()})(Ei,function(){var a,t,o=1e3,l=6e4,d=36e5,k=864e5,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=31536e6,f=2628e6,p=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,A={years:m,months:f,days:k,hours:d,minutes:l,seconds:o,milliseconds:1,weeks:6048e5},I=function(U){return U instanceof ee},M=function(U,O,b){return new ee(U,b,O.$l)},R=function(U){return t.p(U)+"s"},N=function(U){return U<0},P=function(U){return N(U)?Math.ceil(U):Math.floor(U)},q=function(U){return Math.abs(U)},K=function(U,O){return U?N(U)?{negative:!0,format:""+q(U)+O}:{negative:!1,format:""+U+O}:{negative:!1,format:""}},ee=function(){function U(b,J,W){var x=this;if(this.$d={},this.$l=W,b===void 0&&(this.$ms=0,this.parseFromMilliseconds()),J)return M(b*A[R(J)],this);if(typeof b=="number")return this.$ms=b,this.parseFromMilliseconds(),this;if(typeof b=="object")return Object.keys(b).forEach(function(C){x.$d[R(C)]=b[C]}),this.calMilliseconds(),this;if(typeof b=="string"){var z=b.match(p);if(z){var oe=z.slice(2).map(function(C){return C!=null?Number(C):0});return this.$d.years=oe[0],this.$d.months=oe[1],this.$d.weeks=oe[2],this.$d.days=oe[3],this.$d.hours=oe[4],this.$d.minutes=oe[5],this.$d.seconds=oe[6],this.calMilliseconds(),this}}return this}var O=U.prototype;return O.calMilliseconds=function(){var b=this;this.$ms=Object.keys(this.$d).reduce(function(J,W){return J+(b.$d[W]||0)*A[W]},0)},O.parseFromMilliseconds=function(){var b=this.$ms;this.$d.years=P(b/m),b%=m,this.$d.months=P(b/f),b%=f,this.$d.days=P(b/k),b%=k,this.$d.hours=P(b/d),b%=d,this.$d.minutes=P(b/l),b%=l,this.$d.seconds=P(b/o),b%=o,this.$d.milliseconds=b},O.toISOString=function(){var b=K(this.$d.years,"Y"),J=K(this.$d.months,"M"),W=+this.$d.days||0;this.$d.weeks&&(W+=7*this.$d.weeks);var x=K(W,"D"),z=K(this.$d.hours,"H"),oe=K(this.$d.minutes,"M"),C=this.$d.seconds||0;this.$d.milliseconds&&(C+=this.$d.milliseconds/1e3,C=Math.round(1e3*C)/1e3);var $=K(C,"S"),Y=b.negative||J.negative||x.negative||z.negative||oe.negative||$.negative,Z=z.format||oe.format||$.format?"T":"",w=(Y?"-":"")+"P"+b.format+J.format+x.format+Z+z.format+oe.format+$.format;return w==="P"||w==="-P"?"P0D":w},O.toJSON=function(){return this.toISOString()},O.format=function(b){var J=b||"YYYY-MM-DDTHH:mm:ss",W={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return J.replace(v,function(x,z){return z||String(W[x])})},O.as=function(b){return this.$ms/A[R(b)]},O.get=function(b){var J=this.$ms,W=R(b);return W==="milliseconds"?J%=1e3:J=W==="weeks"?P(J/A[W]):this.$d[W],J||0},O.add=function(b,J,W){var x;return x=J?b*A[R(J)]:I(b)?b.$ms:M(b,this).$ms,M(this.$ms+x*(W?-1:1),this)},O.subtract=function(b,J){return this.add(b,J,!0)},O.locale=function(b){var J=this.clone();return J.$l=b,J},O.clone=function(){return M(this.$ms,this)},O.humanize=function(b){return a().add(this.$ms,"ms").locale(this.$l).fromNow(!b)},O.valueOf=function(){return this.asMilliseconds()},O.milliseconds=function(){return this.get("milliseconds")},O.asMilliseconds=function(){return this.as("milliseconds")},O.seconds=function(){return this.get("seconds")},O.asSeconds=function(){return this.as("seconds")},O.minutes=function(){return this.get("minutes")},O.asMinutes=function(){return this.as("minutes")},O.hours=function(){return this.get("hours")},O.asHours=function(){return this.as("hours")},O.days=function(){return this.get("days")},O.asDays=function(){return this.as("days")},O.weeks=function(){return this.get("weeks")},O.asWeeks=function(){return this.as("weeks")},O.months=function(){return this.get("months")},O.asMonths=function(){return this.as("months")},O.years=function(){return this.get("years")},O.asYears=function(){return this.as("years")},U}(),L=function(U,O,b){return U.add(O.years()*b,"y").add(O.months()*b,"M").add(O.days()*b,"d").add(O.hours()*b,"h").add(O.minutes()*b,"m").add(O.seconds()*b,"s").add(O.milliseconds()*b,"ms")};return function(U,O,b){a=b,t=b().$utils(),b.duration=function(x,z){var oe=b.locale();return M(x,{$l:oe},z)},b.isDuration=I;var J=O.prototype.add,W=O.prototype.subtract;O.prototype.add=function(x,z){return I(x)?L(this,x,1):J.bind(this)(x,z)},O.prototype.subtract=function(x,z){return I(x)?L(this,x,-1):W.bind(this)(x,z)}}})})(Ng);var ab=Ng.exports;const ib=xs(ab);var Sg={exports:{}};(function(e,i){(function(a,t){e.exports=t()})(Ei,function(){var a="day";return function(t,o,l){var d=function(m){return m.add(4-m.isoWeekday(),a)},k=o.prototype;k.isoWeekYear=function(){return d(this).year()},k.isoWeek=function(m){if(!this.$utils().u(m))return this.add(7*(m-this.isoWeek()),a);var f,p,A,I,M=d(this),R=(f=this.isoWeekYear(),p=this.$u,A=(p?l.utc:l)().year(f).startOf("year"),I=4-A.isoWeekday(),A.isoWeekday()>4&&(I+=7),A.add(I,a));return M.diff(R,"week")+1},k.isoWeekday=function(m){return this.$utils().u(m)?this.day()||7:this.day(this.day()%7?m:m-7)};var v=k.startOf;k.startOf=function(m,f){var p=this.$utils(),A=!!p.u(f)||f;return p.p(m)==="isoweek"?A?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):v.bind(this)(m,f)}}})})(Sg);var ob=Sg.exports;const sb=xs(ob);var lb={exports:{}};(function(e,i){(function(a,t){e.exports=t(Ir)})(Ei,function(a){function t(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=t(a),l={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return o.default.locale(l,null,!0),l})})(lb);const ub=eg(),vn=e=>rR({locale:"nb-NO",messages:e},ub),Ig={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"},nk="YYYY-MM-DD";Ir.extend(tb);Ir.extend(sb);Ir.extend(ib);vn(Ig);const mt="9999-12-31",db=(e,i,a)=>Ir(e,i,a).utc(!0).startOf("day"),rk=(e,i)=>e===mt?e:db(e,nk).add(i,"days").format(nk);vn(Ig);function kb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Og={exports:{}},qt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tk;function gb(){if(tk)return qt;tk=1;var e=V,i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(k,v,m){var f,p={},A=null,I=null;m!==void 0&&(A=""+m),v.key!==void 0&&(A=""+v.key),v.ref!==void 0&&(I=v.ref);for(f in v)t.call(v,f)&&!l.hasOwnProperty(f)&&(p[f]=v[f]);if(k&&k.defaultProps)for(f in v=k.defaultProps,v)p[f]===void 0&&(p[f]=v[f]);return{$$typeof:i,type:k,key:A,ref:I,props:p,_owner:o.current}}return qt.Fragment=a,qt.jsx=d,qt.jsxs=d,qt}Og.exports=gb();var ze=Og.exports;const $r={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};vn($r);vn($r);var Lg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function a(){for(var l="",d=0;d<arguments.length;d++){var k=arguments[d];k&&(l=o(l,t.call(this,k)))}return l}function t(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return a.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var k in l)i.call(l,k)&&l[k]&&(d=o(d,this&&this[k]||k));return d}function o(l,d){return d?l?l+" "+d:l+d:l}e.exports?(a.default=a,e.exports=a):window.classNames=a})()})(Lg);var vb=Lg.exports;const Ln=kb(vb),Eb="_borderbox_hicl4_1",fb="_error_hicl4_4",mb="_warning_hicl4_7",Tb={borderbox:Eb,error:fb,warning:mb};Ln.bind(Tb);const pb="_aksjonspunkt_kn1hn_1",hb="_erAksjonspunktApent_kn1hn_4",Ab="_erIkkeGodkjentAvBeslutter_kn1hn_8",cb={aksjonspunkt:pb,erAksjonspunktApent:hb,erIkkeGodkjentAvBeslutter:Ab};Ln.bind(cb);const zt=({dateString:e})=>ze.jsx(sg,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(e)}),yb=vn($r),Qa=({dateTimeString:e,separator:i="dash",year:a="numeric",month:t="2-digit",day:o="2-digit",hour:l="numeric",minute:d="numeric",second:k=void 0})=>{const v=()=>{switch(i){case"dash":return" - ";case"kl":return yb.formatMessage({id:"DateTimeLabel.Kl"})}};return ze.jsxs(ze.Fragment,{children:[ze.jsx(sg,{value:new Date(e),day:o,month:t,year:a}),v(),ze.jsx(aR,{value:new Date(e),hour:l,minute:d,second:k})]})};vn($r);const Rb="_tooltip_h8akz_1",_b="_tooltiptext_h8akz_5",bb="_left_h8akz_22",Nb="_top_h8akz_27",Sb="_right_h8akz_30",Ib="_bottom_h8akz_34",Ob="_showTooltip_h8akz_1",hs={tooltip:Rb,tooltiptext:_b,left:bb,top:Nb,right:Sb,bottom:Ib,showTooltip:Ob},Lb=Ln.bind(hs),Kb=({children:e,content:i,alignRight:a=!1,alignLeft:t=!1,alignTop:o=!1,alignBottom:l=!1})=>ze.jsxs("div",{className:hs.tooltip,children:[ze.jsx("span",{className:Lb(hs.tooltiptext,{right:a||!t&&!o&&!l,left:t,top:o,bottom:l}),children:i}),e]}),Db=V.forwardRef(({onClick:e=()=>{},onMouseDown:i,tabIndex:a=-1,className:t="",src:o,srcHover:l,alt:d,onKeyDown:k,tooltip:v,alignTooltipLeft:m=!1},f)=>{const[p,A]=D.useState(!1),I=D.useCallback(()=>{A(!0)},[]),M=D.useCallback(()=>{A(!1)},[]),R=D.useCallback(q=>{(q.key==="Enter"||q.key===" ")&&(k&&k(q),q.preventDefault())},[]),N=l&&p?l:o,P=ze.jsx("img",{ref:f,className:t,src:N,alt:d,tabIndex:a,onMouseOver:I,onMouseOut:M,onFocus:I,onBlur:M,onKeyDown:R,onMouseDown:i,onClick:e});return v?ze.jsx(Kb,{content:v,alignLeft:m,children:P}):P});Db.displayName="Image";const Pb="_flexColumnNew_1vdv1_1",Fb={flexColumnNew:Pb};Ln.bind(Fb);const Mb="_flexRow_1yf0y_1",Gb="_spaceBetween_1yf0y_9",Bb="_alignItemsToBaseline_1yf0y_12",jb="_alignItemsToFlexEnd_1yf0y_15",wb="_justifyItemsToFlexEnd_1yf0y_18",Hb="_wrap_1yf0y_21",Vb={flexRow:Mb,spaceBetween:Gb,alignItemsToBaseline:Bb,alignItemsToFlexEnd:jb,justifyItemsToFlexEnd:wb,wrap:Hb};Ln.bind(Vb);const Ub="_flexContainer_1dk1o_1",qb="_fluid_1dk1o_6",xb="_fullHeight_1dk1o_9",Yb="_flexWrap_1dk1o_17",Cb={flexContainer:Ub,fluid:qb,fullHeight:xb,flexWrap:Yb};Ln.bind(Cb);vn($r);const $b="_row_1lxv9_1",Jb="_harHover_1lxv9_4",Wb="_rowHeader_1lxv9_7",zb="_grayHeader_1lxv9_12",Xb="_rowContent_1lxv9_15",Zb="_selected_1lxv9_18",Qb="_bold_1lxv9_22",eN="_dashedBottomBorder_1lxv9_25",nN="_solidBottomBorder_1lxv9_28",rN="_apLeftBorder_1lxv9_31",tN="_noBottomBorder_1lxv9_34",Kg={row:$b,harHover:Jb,rowHeader:Wb,grayHeader:zb,rowContent:Xb,selected:Zb,bold:Qb,dashedBottomBorder:eN,solidBottomBorder:nN,apLeftBorder:rN,noBottomBorder:tN},aN=Ln.bind(Kg),iN=(e,i,a)=>t=>{e&&t.button===0&&e(t,i,a)},Dg=e=>e.tagName==="TR"?e:Dg(e.parentElement),ak=(e,i)=>{const a=Dg(e.target),t=(i?a.nextSibling:a.previousSibling)||a;t&&(t.focus(),e.preventDefault())},oN=(e,i,a,t)=>o=>{o.key==="ArrowDown"?ak(o,!0):o.key==="ArrowUp"?ak(o,!1):i&&o.target.tagName!=="TD"&&(o.key==="Enter"||o.key===" ")?(i(o,a,t),o.preventDefault()):e&&i&&o.target.tagName!=="TD"&&o.key==="Shift"&&(i(o),o.preventDefault())},sN=e=>i=>{e&&i.target.tagName!=="TD"&&i.key==="Shift"&&(e(i),i.preventDefault())},lN=({id:e,model:i,isHeader:a=!1,hasGrayHeader:t=!1,onMouseDown:o,onKeyDown:l,children:d,noHover:k=!1,isSelected:v=!1,isBold:m=!1,isDashedBottomBorder:f=!1,isSolidBottomBorder:p=!1,isApLeftBorder:A=!1,className:I,useMultiselect:M=!1,hasNoBottomBorder:R=!1})=>ze.jsx("tr",{className:aN(I,Kg.row,{rowHeader:a,grayHeader:t,rowContent:!a&&!k,selected:v,harHover:!k,bold:m,dashedBottomBorder:f,solidBottomBorder:p,noBottomBorder:R,apLeftBorder:A}),onMouseDown:iN(o,e,i),onKeyDown:oN(M,l,e,i),onKeyUp:M?sN(l):void 0,tabIndex:0,children:d}),uN="_columnStyle_1f13u_1",Pg={columnStyle:uN},dN=Ln.bind(Pg),Zo=({children:e="",className:i,hidden:a=!1,colspanAll:t=!1})=>a?null:ze.jsx("td",{className:dN(Pg.columnStyle,i),colSpan:t?100:void 0,children:e}),kN="_table_2cnpl_1",gN="_rowHover_2cnpl_25",vN={table:kN,rowHover:gN},EN=Ln.bind(vN),fN="EMPTY",mN=V.forwardRef(({headerTextCodes:e=[],headerColumnContent:i=[],classNameTable:a="",noHover:t=!1,hasGrayHeader:o=!1,children:l},d)=>ze.jsxs("table",{ref:d,className:EN("table",{[a]:a,rowHover:!t}),children:[ze.jsx("thead",{children:ze.jsxs(lN,{isHeader:!0,noHover:t,hasGrayHeader:o,children:[e.map(k=>typeof k=="string"&&k.startsWith(fN)?ze.jsx(Zo,{children:" "},k):ze.jsx(Zo,{children:ze.jsx(Ie,{id:k})},k)),i.map(k=>ze.jsx(Zo,{children:k},k.key))]})}),ze.jsx("tbody",{children:Array.isArray(l)?V.Children.map(l,k=>V.cloneElement(k,{noHover:t})):V.cloneElement(l,{noHover:t})})]}));mN.displayName="Table";const TN="_hidden_1pb4f_1",pN="_active_1pb4f_8",hN="_activeRow_1pb4f_15 _active_1pb4f_8",AN="_toggleIcon_1pb4f_19",cN="_colTopPadding_1pb4f_22",yN={hidden:TN,active:pN,activeRow:hN,toggleIcon:AN,colTopPadding:cN};Ln.bind(yN);vn($r);const RN="_fourPx_qda5k_1",_N="_eightPx_qda5k_4",bN="_sixteenPx_qda5k_7",NN="_twentyPx_qda5k_10",SN="_thirtyTwoPx_qda5k_13",IN="_fourtyPx_qda5k_16",ON={fourPx:RN,eightPx:_N,sixteenPx:bN,twentyPx:NN,thirtyTwoPx:SN,fourtyPx:IN};Ln.bind(ON);vn($r);const LN="_divider_1t980_1",KN="_dividerParagraf_1t980_8",DN="_leftPanel_1t980_11",PN="_rightPanel_1t980_14",FN={divider:LN,dividerParagraf:KN,leftPanel:DN,rightPanel:PN};Ln.bind(FN);const MN="_editedIcon_ulrjl_1",GN={editedIcon:MN};Ln.bind(GN);var fi=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(fi||{});fi.BRUKERS_ANDEL;fi.FRILANS;fi.EGEN_NÆRING;var Ys=(e=>(e.ARBEID_TYPE="ArbeidType",e.AVSLAGSARSAK="Avslagsårsak",e.VENT_AARSAK="Venteårsak",e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.KLAGE_AVVIST_AARSAK="KlageAvvistÅrsak",e.KLAGE_MEDHOLD_ARSAK="KlageMedholdÅrsak",e.KLAGE_HJEMMEL="KlageHjemmel",e.OMSORGSOVERTAKELSE_VILKAR_TYPE="OmsorgsovertakelseVilkårType",e.MEDLEMSKAP_MANUELL_VURDERING_TYPE="MedlemskapManuellVurderingType",e.VERGE_TYPE="VergeType",e.LANDKODER="Landkoder",e.MORS_AKTIVITET="MorsAktivitet",e.VIRKSOMHET_TYPE="VirksomhetType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.PERSONSTATUS_TYPE="PersonstatusType",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.FORELDRE_TYPE="ForeldreType",e.FAMILIE_HENDELSE_TYPE="FamilieHendelseType",e.INNSYN_RESULTAT_TYPE="InnsynResultatType",e.BEHANDLING_TYPE="BehandlingType",e.OPPHOLD_ARSAK="OppholdÅrsak",e.UTSETTELSE_AARSAK_TYPE="UtsettelseÅrsak",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.UTTAK_PERIODE_TYPE="UttakPeriodeType",e.REVURDERING_VARSLING_ÅRSAK="RevurderingVarslingÅrsak",e.MANUELL_BEHANDLING_AARSAK="ManuellBehandlingÅrsak",e.PERIODE_RESULTAT_AARSAK="PeriodeResultatÅrsak",e.INNTEKTSKATEGORI="Inntektskategori",e.BEREGNINGSGRUNNLAG_ANDELTYPER="BeregningsgrunnlagAndeltype",e.AKTIVITET_STATUS="AktivitetStatus",e.ARBEIDSKATEGORI="Arbeidskategori",e.FAGSYSTEM="Fagsystem",e.REGION="Region",e.SIVILSTAND_TYPE="SivilstandType",e.FAKTA_OM_BEREGNING_TILFELLE="FaktaOmBeregningTilfelle",e.GRADERING_AVSLAG_AARSAK="GraderingAvslagÅrsak",e.SKJERMLENKE_TYPE="SkjermlenkeType",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.ARBEIDSFORHOLD_HANDLING_TYPE="ArbeidsforholdHandlingType",e.HISTORIKK_OPPLYSNING_TYPE="HistorikkOpplysningType",e.HISTORIKK_ENDRET_FELT_TYPE="HistorikkEndretFeltType",e.HISTORIKKINNSLAG_TYPE="HistorikkinnslagType",e.HISTORIKK_AKTOER="HistorikkAktør",e.BEHANDLING_STATUS="BehandlingStatus",e.FAR_SOEKER_TYPE="FarSøkerType",e.MEDLEMSKAP_DEKNING="MedlemskapDekningType",e.MEDLEMSKAP_TYPE="MedlemskapType",e.STOENADSKONTOTYPE="StønadskontoType",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.UTTAK_ARBEID_TYPE="UttakArbeidType",e.UTTAK_UTSETTELSE_TYPE="UttakUtsettelseType",e.VILKAR_TYPE="VilkårType",e.AKTSOMHET="Aktsomhet",e.VURDERING="AnnenVurdering",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.PERMISJONSBESKRIVELSE_TYPE="PermisjonsbeskrivelseType",e.VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG="VurderArbeidsforholdHistorikkinnslag",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.VURDER_AARSAK="VurderÅrsak",e.ANKE_OMGJOER_AARSAK="AnkeOmgjørÅrsak",e.AKTIVITETSKRAV_AVKLARING="KontrollerAktivitetskravAvklaring",e.OPPHOLDSTILLATELSE_TYPE="OppholdstillatelseType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e.FORDELING_PERIODE_KILDE="FordelingPeriodeKilde",e.RELASJONSROLLE_TYPE="RelasjonsRolleType",e.FAGSAK_MARKERING="FagsakMarkering",e.ADRESSE_TYPE="AdresseType",e.NATURAL_YTELSE_TYPE="NaturalYtelseType",e))(Ys||{});const BN=(e,i,a,t)=>{let o=e[i];if(!o||o.length===0)return"";const l=o.find(d=>d.kode===a);return l?l.navn:""},pr=({tittel:e,children:i})=>G.jsxs(ft,{children:[G.jsx(Hs,{size:"medium",children:e}),i]});pr.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Fg=({arbeidsgiverOpplysningerPerId:e,arbeidsgiverIdent:i})=>{var t;const a=Wn();return G.jsxs(pr,{tittel:a.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[G.jsxs("span",{children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),":"," ",((t=e[i])==null?void 0:t.navn)??"-"]}),G.jsxs("span",{children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",i]})]})};Fg.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const Mg=({inntektsmelding:e,behandling:i,alleBehandlinger:a,alleKodeverk:t})=>{const o=Wn(),l=e.tilknyttedeBehandlingIder.includes(i.uuid),d=a.filter(m=>e.tilknyttedeBehandlingIder.includes(m.uuid)),k=(()=>{const m=d.length;return l&&m>1?G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):l?G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):m===0?G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),v=[...d].sort((m,f)=>new Date(m.opprettet).getTime()-new Date(f.opprettet).getTime());return G.jsxs(pr,{tittel:o.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[k,G.jsx(Ts,{children:v.map(m=>{var f;return G.jsx(Ts.Item,{children:G.jsxs(ft,{children:[G.jsx("span",{children:(f=t.BehandlingType.find(({kode:p})=>p===m.type))==null?void 0:f.navn}),G.jsxs("span",{children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",G.jsx(Qa,{dateTimeString:m.opprettet,separator:"kl"})]}),m.avsluttet?G.jsxs("span",{children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",G.jsx(Qa,{dateTimeString:m.avsluttet,separator:"kl"})]}):null]})},m.uuid)})})]})};Mg.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};var jN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ik;function HN(){if(ik)return xt;ik=1;var e=V,i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(k,v,m){var f,p={},A=null,I=null;m!==void 0&&(A=""+m),v.key!==void 0&&(A=""+v.key),v.ref!==void 0&&(I=v.ref);for(f in v)t.call(v,f)&&!l.hasOwnProperty(f)&&(p[f]=v[f]);if(k&&k.defaultProps)for(f in v=k.defaultProps,v)p[f]===void 0&&(p[f]=v[f]);return{$$typeof:i,type:k,key:A,ref:I,props:p,_owner:o.current}}return xt.Fragment=a,xt.jsx=d,xt.jsxs=d,xt}HN();var Gg={exports:{}};(function(e,i){(function(a,t){e.exports=t()})(jN,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,o=/\d/,l=/\d\d/,d=/\d\d?/,k=/\d*[^-_:/,()\s\d]+/,v={},m=function(N){return(N=+N)+(N>68?1900:2e3)},f=function(N){return function(P){this[N]=+P}},p=[/[+-]\d\d:?(\d\d)?|Z/,function(N){(this.zone||(this.zone={})).offset=function(P){if(!P||P==="Z")return 0;var q=P.match(/([+-]|\d\d)/g),K=60*q[1]+(+q[2]||0);return K===0?0:q[0]==="+"?-K:K}(N)}],A=function(N){var P=v[N];return P&&(P.indexOf?P:P.s.concat(P.f))},I=function(N,P){var q,K=v.meridiem;if(K){for(var ee=1;ee<=24;ee+=1)if(N.indexOf(K(ee,0,P))>-1){q=ee>12;break}}else q=N===(P?"pm":"PM");return q},M={A:[k,function(N){this.afternoon=I(N,!1)}],a:[k,function(N){this.afternoon=I(N,!0)}],Q:[o,function(N){this.month=3*(N-1)+1}],S:[o,function(N){this.milliseconds=100*+N}],SS:[l,function(N){this.milliseconds=10*+N}],SSS:[/\d{3}/,function(N){this.milliseconds=+N}],s:[d,f("seconds")],ss:[d,f("seconds")],m:[d,f("minutes")],mm:[d,f("minutes")],H:[d,f("hours")],h:[d,f("hours")],HH:[d,f("hours")],hh:[d,f("hours")],D:[d,f("day")],DD:[l,f("day")],Do:[k,function(N){var P=v.ordinal,q=N.match(/\d+/);if(this.day=q[0],P)for(var K=1;K<=31;K+=1)P(K).replace(/\[|\]/g,"")===N&&(this.day=K)}],w:[d,f("week")],ww:[l,f("week")],M:[d,f("month")],MM:[l,f("month")],MMM:[k,function(N){var P=A("months"),q=(A("monthsShort")||P.map(function(K){return K.slice(0,3)})).indexOf(N)+1;if(q<1)throw new Error;this.month=q%12||q}],MMMM:[k,function(N){var P=A("months").indexOf(N)+1;if(P<1)throw new Error;this.month=P%12||P}],Y:[/[+-]?\d+/,f("year")],YY:[l,function(N){this.year=m(N)}],YYYY:[/\d{4}/,f("year")],Z:p,ZZ:p};function R(N){var P,q;P=N,q=v&&v.formats;for(var K=(N=P.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(W,x,z){var oe=z&&z.toUpperCase();return x||q[z]||a[z]||q[oe].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(C,$,Y){return $||Y.slice(1)})})).match(t),ee=K.length,L=0;L<ee;L+=1){var U=K[L],O=M[U],b=O&&O[0],J=O&&O[1];K[L]=J?{regex:b,parser:J}:U.replace(/^\[|\]$/g,"")}return function(W){for(var x={},z=0,oe=0;z<ee;z+=1){var C=K[z];if(typeof C=="string")oe+=C.length;else{var $=C.regex,Y=C.parser,Z=W.slice(oe),w=$.exec(Z)[0];Y.call(x,w),W=W.replace(w,"")}}return function(te){var ie=te.afternoon;if(ie!==void 0){var ue=te.hours;ie?ue<12&&(te.hours+=12):ue===12&&(te.hours=0),delete te.afternoon}}(x),x}}return function(N,P,q){q.p.customParseFormat=!0,N&&N.parseTwoDigitYear&&(m=N.parseTwoDigitYear);var K=P.prototype,ee=K.parse;K.parse=function(L){var U=L.date,O=L.utc,b=L.args;this.$u=O;var J=b[1];if(typeof J=="string"){var W=b[2]===!0,x=b[3]===!0,z=W||x,oe=b[2];x&&(oe=b[2]),v=this.$locale(),!W&&oe&&(v=q.Ls[oe]),this.$d=function(Z,w,te,ie){try{if(["x","X"].indexOf(w)>-1)return new Date((w==="X"?1e3:1)*Z);var ue=R(w)(Z),De=ue.year,Me=ue.month,Ce=ue.day,qe=ue.hours,hn=ue.minutes,Vn=ue.seconds,An=ue.milliseconds,tn=ue.zone,$e=ue.week,en=new Date,En=Ce||(De||Me?1:en.getDate()),Un=De||en.getFullYear(),an=0;De&&!Me||(an=Me>0?Me-1:en.getMonth());var Xn,ht=qe||0,cn=hn||0,Wr=Vn||0,At=An||0;return tn?new Date(Date.UTC(Un,an,En,ht,cn,Wr,At+60*tn.offset*1e3)):te?new Date(Date.UTC(Un,an,En,ht,cn,Wr,At)):(Xn=new Date(Un,an,En,ht,cn,Wr,At),$e&&(Xn=ie(Xn).week($e).toDate()),Xn)}catch{return new Date("")}}(U,J,O,q),this.init(),oe&&oe!==!0&&(this.$L=this.locale(oe).$L),z&&U!=this.format(J)&&(this.$d=new Date("")),v={}}else if(J instanceof Array)for(var C=J.length,$=1;$<=C;$+=1){b[1]=J[$-1];var Y=q.apply(this,b);if(Y.isValid()){this.$d=Y.$d,this.$L=Y.$L,this.init();break}$===C&&(this.$d=new Date(""))}else ee.call(this,L)}}})})(Gg);var VN=Gg.exports;const UN=wN(VN);Ir.extend(UN);const qN="Dato må være før eller lik {limit}",xN="Dato må være etter eller lik {limit}",YN="Perioder kan ikke overlappe i tid",CN="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",$N="Dato må være lik {value}",JN="Dato må skrives slik: dd.mm.åååå",WN="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",zN="Tallet kan ikke inneholde mer enn to desimaler",XN="Tallet kan ikke ha desimaler",ZN="Feltet kan kun inneholde tall",QN="Ugyldig fødselsnummer",eS="Feltet må være et fødselsnummer (11 siffer)",nS="Ugyldig organisasjonsnummer.",rS="Ugyldig organisasjonsnummer eller fødselsnummer",tS="Startdato må være før eller lik sluttdato",aS="Periode er utenfor opptjeningsperioden",iS="Ugyldig saksnummer eller fødselsnummer",oS="Feltet inneholder ugyldige tegn: {text}",sS="Feltet inneholder en ugyldig verdi: {value}",lS="Feltet kan ikke inneholde mellomrom",uS="Feltet må fylles ut",dS="Du kan skrive maksimalt {length} tegn",kS="Du må skrive minst {length} tegn",gS="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",vS="Feltet må være mindre eller lik {length}",ES="Feltet må være større eller lik {length}",fS="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",mS={DateNotBeforeOrEqual:qN,DateNotAfterOrEqual:xN,DateRangesOverlapping:YN,DateRangesOverlappingPeriodTypes:CN,DatesNotEqual:$N,InvalidDate:JN,InvalidDatesInPeriod:WN,InvalidDecimal:zN,InvalidInteger:XN,InvalidNumber:ZN,InvalidFodselsnr:QN,InvalidFodselsnrFormat:eS,InvalidOrgnr:nS,InvalidOrgnrOrFodselsnr:rS,InvalidPeriod:tS,InvalidPeriodRange:aS,InvalidSaksnrOrFodselsnrFormat:iS,InvalidText:oS,InvalidValue:sS,IllegalWhiteSpace:lS,IsRequired:uS,MaxLength:dS,MinLength:kS,MaxLengthOrFodselsnr:gS,MaxValue:vS,MinValue:ES,SammeFodselsnrSomSoker:fS};vn(mS);var Bg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wg={exports:{}};(function(e,i){(function(a,t){e.exports=t()})(Bg,function(){return function(a,t){t.prototype.isSameOrAfter=function(o,l){return this.isSame(o,l)||this.isAfter(o,l)}}})})(wg);var TS=wg.exports;const pS=jg(TS);var Hg={exports:{}};(function(e,i){(function(a,t){e.exports=t()})(Bg,function(){return function(a,t){t.prototype.isSameOrBefore=function(o,l){return this.isSame(o,l)||this.isBefore(o,l)}}})})(Hg);var hS=Hg.exports;const AS=jg(hS);Ir.extend(pS);Ir.extend(AS);const mi={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"};vn(mi);vn(mi);const cS=(e,i)=>{const a=new Date(e.tom??mt),t=new Date(i.tom??mt);if(a>t)return-1;if(a<t)return 1;if(e.fom&&!i.fom)return-1;if(!e.fom&&i.fom)return 1;if(e.fom&&i.fom){const o=new Date(e.fom),l=new Date(i.fom);if(o>l)return-1;if(o<l)return 1}return 0};var ei={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ei.exports;(function(e,i){(function(){var a,t="4.17.21",o=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",d="Expected a function",k="Invalid `variable` option passed into `_.template`",v="__lodash_hash_undefined__",m=500,f="__lodash_placeholder__",p=1,A=2,I=4,M=1,R=2,N=1,P=2,q=4,K=8,ee=16,L=32,U=64,O=128,b=256,J=512,W=30,x="...",z=800,oe=16,C=1,$=2,Y=3,Z=1/0,w=9007199254740991,te=17976931348623157e292,ie=NaN,ue=4294967295,De=ue-1,Me=ue>>>1,Ce=[["ary",O],["bind",N],["bindKey",P],["curry",K],["curryRight",ee],["flip",J],["partial",L],["partialRight",U],["rearg",b]],qe="[object Arguments]",hn="[object Array]",Vn="[object AsyncFunction]",An="[object Boolean]",tn="[object Date]",$e="[object DOMException]",en="[object Error]",En="[object Function]",Un="[object GeneratorFunction]",an="[object Map]",Xn="[object Number]",ht="[object Null]",cn="[object Object]",Wr="[object Promise]",At="[object Proxy]",ct="[object RegExp]",qn="[object Set]",yt="[object String]",aa="[object Symbol]",Mv="[object Undefined]",Rt="[object WeakMap]",Gv="[object WeakSet]",_t="[object ArrayBuffer]",zr="[object DataView]",ci="[object Float32Array]",yi="[object Float64Array]",Ri="[object Int8Array]",_i="[object Int16Array]",bi="[object Int32Array]",Ni="[object Uint8Array]",Si="[object Uint8ClampedArray]",Ii="[object Uint16Array]",Oi="[object Uint32Array]",Bv=/\b__p \+= '';/g,jv=/\b(__p \+=) '' \+/g,wv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Zs=/&(?:amp|lt|gt|quot|#39);/g,Qs=/[&<>"']/g,Hv=RegExp(Zs.source),Vv=RegExp(Qs.source),Uv=/<%-([\s\S]+?)%>/g,qv=/<%([\s\S]+?)%>/g,el=/<%=([\s\S]+?)%>/g,xv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Yv=/^\w*$/,Cv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Li=/[\\^$.*+?()[\]{}|]/g,$v=RegExp(Li.source),Ki=/^\s+/,Jv=/\s/,Wv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,zv=/\{\n\/\* \[wrapped with (.+)\] \*/,Xv=/,? & /,Zv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Qv=/[()=,{}\[\]\/\s]/,eE=/\\(\\)?/g,nE=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,nl=/\w*$/,rE=/^[-+]0x[0-9a-f]+$/i,tE=/^0b[01]+$/i,aE=/^\[object .+?Constructor\]$/,iE=/^0o[0-7]+$/i,oE=/^(?:0|[1-9]\d*)$/,sE=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ia=/($^)/,lE=/['\n\r\u2028\u2029\\]/g,oa="\\ud800-\\udfff",uE="\\u0300-\\u036f",dE="\\ufe20-\\ufe2f",kE="\\u20d0-\\u20ff",rl=uE+dE+kE,tl="\\u2700-\\u27bf",al="a-z\\xdf-\\xf6\\xf8-\\xff",gE="\\xac\\xb1\\xd7\\xf7",vE="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",EE="\\u2000-\\u206f",fE=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",il="A-Z\\xc0-\\xd6\\xd8-\\xde",ol="\\ufe0e\\ufe0f",sl=gE+vE+EE+fE,Di="['’]",mE="["+oa+"]",ll="["+sl+"]",sa="["+rl+"]",ul="\\d+",TE="["+tl+"]",dl="["+al+"]",kl="[^"+oa+sl+ul+tl+al+il+"]",Pi="\\ud83c[\\udffb-\\udfff]",pE="(?:"+sa+"|"+Pi+")",gl="[^"+oa+"]",Fi="(?:\\ud83c[\\udde6-\\uddff]){2}",Mi="[\\ud800-\\udbff][\\udc00-\\udfff]",Xr="["+il+"]",vl="\\u200d",El="(?:"+dl+"|"+kl+")",hE="(?:"+Xr+"|"+kl+")",fl="(?:"+Di+"(?:d|ll|m|re|s|t|ve))?",ml="(?:"+Di+"(?:D|LL|M|RE|S|T|VE))?",Tl=pE+"?",pl="["+ol+"]?",AE="(?:"+vl+"(?:"+[gl,Fi,Mi].join("|")+")"+pl+Tl+")*",cE="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",yE="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",hl=pl+Tl+AE,RE="(?:"+[TE,Fi,Mi].join("|")+")"+hl,_E="(?:"+[gl+sa+"?",sa,Fi,Mi,mE].join("|")+")",bE=RegExp(Di,"g"),NE=RegExp(sa,"g"),Gi=RegExp(Pi+"(?="+Pi+")|"+_E+hl,"g"),SE=RegExp([Xr+"?"+dl+"+"+fl+"(?="+[ll,Xr,"$"].join("|")+")",hE+"+"+ml+"(?="+[ll,Xr+El,"$"].join("|")+")",Xr+"?"+El+"+"+fl,Xr+"+"+ml,yE,cE,ul,RE].join("|"),"g"),IE=RegExp("["+vl+oa+rl+ol+"]"),OE=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,LE=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],KE=-1,Ge={};Ge[ci]=Ge[yi]=Ge[Ri]=Ge[_i]=Ge[bi]=Ge[Ni]=Ge[Si]=Ge[Ii]=Ge[Oi]=!0,Ge[qe]=Ge[hn]=Ge[_t]=Ge[An]=Ge[zr]=Ge[tn]=Ge[en]=Ge[En]=Ge[an]=Ge[Xn]=Ge[cn]=Ge[ct]=Ge[qn]=Ge[yt]=Ge[Rt]=!1;var Fe={};Fe[qe]=Fe[hn]=Fe[_t]=Fe[zr]=Fe[An]=Fe[tn]=Fe[ci]=Fe[yi]=Fe[Ri]=Fe[_i]=Fe[bi]=Fe[an]=Fe[Xn]=Fe[cn]=Fe[ct]=Fe[qn]=Fe[yt]=Fe[aa]=Fe[Ni]=Fe[Si]=Fe[Ii]=Fe[Oi]=!0,Fe[en]=Fe[En]=Fe[Rt]=!1;var DE={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},PE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},FE={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},ME={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},GE=parseFloat,BE=parseInt,Al=typeof Ht=="object"&&Ht&&Ht.Object===Object&&Ht,jE=typeof self=="object"&&self&&self.Object===Object&&self,nn=Al||jE||Function("return this")(),Bi=i&&!i.nodeType&&i,Kr=Bi&&!0&&e&&!e.nodeType&&e,cl=Kr&&Kr.exports===Bi,ji=cl&&Al.process,Kn=function(){try{var y=Kr&&Kr.require&&Kr.require("util").types;return y||ji&&ji.binding&&ji.binding("util")}catch{}}(),yl=Kn&&Kn.isArrayBuffer,Rl=Kn&&Kn.isDate,_l=Kn&&Kn.isMap,bl=Kn&&Kn.isRegExp,Nl=Kn&&Kn.isSet,Sl=Kn&&Kn.isTypedArray;function yn(y,F,S){switch(S.length){case 0:return y.call(F);case 1:return y.call(F,S[0]);case 2:return y.call(F,S[0],S[1]);case 3:return y.call(F,S[0],S[1],S[2])}return y.apply(F,S)}function wE(y,F,S,Q){for(var ge=-1,_e=y==null?0:y.length;++ge<_e;){var Je=y[ge];F(Q,Je,S(Je),y)}return Q}function Dn(y,F){for(var S=-1,Q=y==null?0:y.length;++S<Q&&F(y[S],S,y)!==!1;);return y}function HE(y,F){for(var S=y==null?0:y.length;S--&&F(y[S],S,y)!==!1;);return y}function Il(y,F){for(var S=-1,Q=y==null?0:y.length;++S<Q;)if(!F(y[S],S,y))return!1;return!0}function hr(y,F){for(var S=-1,Q=y==null?0:y.length,ge=0,_e=[];++S<Q;){var Je=y[S];F(Je,S,y)&&(_e[ge++]=Je)}return _e}function la(y,F){var S=y==null?0:y.length;return!!S&&Zr(y,F,0)>-1}function wi(y,F,S){for(var Q=-1,ge=y==null?0:y.length;++Q<ge;)if(S(F,y[Q]))return!0;return!1}function je(y,F){for(var S=-1,Q=y==null?0:y.length,ge=Array(Q);++S<Q;)ge[S]=F(y[S],S,y);return ge}function Ar(y,F){for(var S=-1,Q=F.length,ge=y.length;++S<Q;)y[ge+S]=F[S];return y}function Hi(y,F,S,Q){var ge=-1,_e=y==null?0:y.length;for(Q&&_e&&(S=y[++ge]);++ge<_e;)S=F(S,y[ge],ge,y);return S}function VE(y,F,S,Q){var ge=y==null?0:y.length;for(Q&&ge&&(S=y[--ge]);ge--;)S=F(S,y[ge],ge,y);return S}function Vi(y,F){for(var S=-1,Q=y==null?0:y.length;++S<Q;)if(F(y[S],S,y))return!0;return!1}var UE=Ui("length");function qE(y){return y.split("")}function xE(y){return y.match(Zv)||[]}function Ol(y,F,S){var Q;return S(y,function(ge,_e,Je){if(F(ge,_e,Je))return Q=_e,!1}),Q}function ua(y,F,S,Q){for(var ge=y.length,_e=S+(Q?1:-1);Q?_e--:++_e<ge;)if(F(y[_e],_e,y))return _e;return-1}function Zr(y,F,S){return F===F?rf(y,F,S):ua(y,Ll,S)}function YE(y,F,S,Q){for(var ge=S-1,_e=y.length;++ge<_e;)if(Q(y[ge],F))return ge;return-1}function Ll(y){return y!==y}function Kl(y,F){var S=y==null?0:y.length;return S?xi(y,F)/S:ie}function Ui(y){return function(F){return F==null?a:F[y]}}function qi(y){return function(F){return y==null?a:y[F]}}function Dl(y,F,S,Q,ge){return ge(y,function(_e,Je,Pe){S=Q?(Q=!1,_e):F(S,_e,Je,Pe)}),S}function CE(y,F){var S=y.length;for(y.sort(F);S--;)y[S]=y[S].value;return y}function xi(y,F){for(var S,Q=-1,ge=y.length;++Q<ge;){var _e=F(y[Q]);_e!==a&&(S=S===a?_e:S+_e)}return S}function Yi(y,F){for(var S=-1,Q=Array(y);++S<y;)Q[S]=F(S);return Q}function $E(y,F){return je(F,function(S){return[S,y[S]]})}function Pl(y){return y&&y.slice(0,Bl(y)+1).replace(Ki,"")}function Rn(y){return function(F){return y(F)}}function Ci(y,F){return je(F,function(S){return y[S]})}function bt(y,F){return y.has(F)}function Fl(y,F){for(var S=-1,Q=y.length;++S<Q&&Zr(F,y[S],0)>-1;);return S}function Ml(y,F){for(var S=y.length;S--&&Zr(F,y[S],0)>-1;);return S}function JE(y,F){for(var S=y.length,Q=0;S--;)y[S]===F&&++Q;return Q}var WE=qi(DE),zE=qi(PE);function XE(y){return"\\"+ME[y]}function ZE(y,F){return y==null?a:y[F]}function Qr(y){return IE.test(y)}function QE(y){return OE.test(y)}function ef(y){for(var F,S=[];!(F=y.next()).done;)S.push(F.value);return S}function $i(y){var F=-1,S=Array(y.size);return y.forEach(function(Q,ge){S[++F]=[ge,Q]}),S}function Gl(y,F){return function(S){return y(F(S))}}function cr(y,F){for(var S=-1,Q=y.length,ge=0,_e=[];++S<Q;){var Je=y[S];(Je===F||Je===f)&&(y[S]=f,_e[ge++]=S)}return _e}function da(y){var F=-1,S=Array(y.size);return y.forEach(function(Q){S[++F]=Q}),S}function nf(y){var F=-1,S=Array(y.size);return y.forEach(function(Q){S[++F]=[Q,Q]}),S}function rf(y,F,S){for(var Q=S-1,ge=y.length;++Q<ge;)if(y[Q]===F)return Q;return-1}function tf(y,F,S){for(var Q=S+1;Q--;)if(y[Q]===F)return Q;return Q}function et(y){return Qr(y)?of(y):UE(y)}function xn(y){return Qr(y)?sf(y):qE(y)}function Bl(y){for(var F=y.length;F--&&Jv.test(y.charAt(F)););return F}var af=qi(FE);function of(y){for(var F=Gi.lastIndex=0;Gi.test(y);)++F;return F}function sf(y){return y.match(Gi)||[]}function lf(y){return y.match(SE)||[]}var uf=function y(F){F=F==null?nn:nt.defaults(nn.Object(),F,nt.pick(nn,LE));var S=F.Array,Q=F.Date,ge=F.Error,_e=F.Function,Je=F.Math,Pe=F.Object,Ji=F.RegExp,df=F.String,Pn=F.TypeError,ka=S.prototype,kf=_e.prototype,rt=Pe.prototype,ga=F["__core-js_shared__"],va=kf.toString,Oe=rt.hasOwnProperty,gf=0,jl=function(){var n=/[^.]+$/.exec(ga&&ga.keys&&ga.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Ea=rt.toString,vf=va.call(Pe),Ef=nn._,ff=Ji("^"+va.call(Oe).replace(Li,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),fa=cl?F.Buffer:a,yr=F.Symbol,ma=F.Uint8Array,wl=fa?fa.allocUnsafe:a,Ta=Gl(Pe.getPrototypeOf,Pe),Hl=Pe.create,Vl=rt.propertyIsEnumerable,pa=ka.splice,Ul=yr?yr.isConcatSpreadable:a,Nt=yr?yr.iterator:a,Dr=yr?yr.toStringTag:a,ha=function(){try{var n=Br(Pe,"defineProperty");return n({},"",{}),n}catch{}}(),mf=F.clearTimeout!==nn.clearTimeout&&F.clearTimeout,Tf=Q&&Q.now!==nn.Date.now&&Q.now,pf=F.setTimeout!==nn.setTimeout&&F.setTimeout,Aa=Je.ceil,ca=Je.floor,Wi=Pe.getOwnPropertySymbols,hf=fa?fa.isBuffer:a,ql=F.isFinite,Af=ka.join,cf=Gl(Pe.keys,Pe),We=Je.max,on=Je.min,yf=Q.now,Rf=F.parseInt,xl=Je.random,_f=ka.reverse,zi=Br(F,"DataView"),St=Br(F,"Map"),Xi=Br(F,"Promise"),tt=Br(F,"Set"),It=Br(F,"WeakMap"),Ot=Br(Pe,"create"),ya=It&&new It,at={},bf=jr(zi),Nf=jr(St),Sf=jr(Xi),If=jr(tt),Of=jr(It),Ra=yr?yr.prototype:a,Lt=Ra?Ra.valueOf:a,Yl=Ra?Ra.toString:a;function E(n){if(Ue(n)&&!ve(n)&&!(n instanceof pe)){if(n instanceof Fn)return n;if(Oe.call(n,"__wrapped__"))return Cu(n)}return new Fn(n)}var it=function(){function n(){}return function(r){if(!He(r))return{};if(Hl)return Hl(r);n.prototype=r;var s=new n;return n.prototype=a,s}}();function _a(){}function Fn(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=a}E.templateSettings={escape:Uv,evaluate:qv,interpolate:el,variable:"",imports:{_:E}},E.prototype=_a.prototype,E.prototype.constructor=E,Fn.prototype=it(_a.prototype),Fn.prototype.constructor=Fn;function pe(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ue,this.__views__=[]}function Lf(){var n=new pe(this.__wrapped__);return n.__actions__=fn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=fn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=fn(this.__views__),n}function Kf(){if(this.__filtered__){var n=new pe(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Df(){var n=this.__wrapped__.value(),r=this.__dir__,s=ve(n),u=r<0,g=s?n.length:0,T=xm(0,g,this.__views__),h=T.start,c=T.end,_=c-h,B=u?c:h-1,j=this.__iteratees__,H=j.length,X=0,ae=on(_,this.__takeCount__);if(!s||!u&&g==_&&ae==_)return fu(n,this.__actions__);var de=[];e:for(;_--&&X<ae;){B+=r;for(var fe=-1,ke=n[B];++fe<H;){var Te=j[fe],he=Te.iteratee,Nn=Te.type,dn=he(ke);if(Nn==$)ke=dn;else if(!dn){if(Nn==C)continue e;break e}}de[X++]=ke}return de}pe.prototype=it(_a.prototype),pe.prototype.constructor=pe;function Pr(n){var r=-1,s=n==null?0:n.length;for(this.clear();++r<s;){var u=n[r];this.set(u[0],u[1])}}function Pf(){this.__data__=Ot?Ot(null):{},this.size=0}function Ff(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function Mf(n){var r=this.__data__;if(Ot){var s=r[n];return s===v?a:s}return Oe.call(r,n)?r[n]:a}function Gf(n){var r=this.__data__;return Ot?r[n]!==a:Oe.call(r,n)}function Bf(n,r){var s=this.__data__;return this.size+=this.has(n)?0:1,s[n]=Ot&&r===a?v:r,this}Pr.prototype.clear=Pf,Pr.prototype.delete=Ff,Pr.prototype.get=Mf,Pr.prototype.has=Gf,Pr.prototype.set=Bf;function sr(n){var r=-1,s=n==null?0:n.length;for(this.clear();++r<s;){var u=n[r];this.set(u[0],u[1])}}function jf(){this.__data__=[],this.size=0}function wf(n){var r=this.__data__,s=ba(r,n);if(s<0)return!1;var u=r.length-1;return s==u?r.pop():pa.call(r,s,1),--this.size,!0}function Hf(n){var r=this.__data__,s=ba(r,n);return s<0?a:r[s][1]}function Vf(n){return ba(this.__data__,n)>-1}function Uf(n,r){var s=this.__data__,u=ba(s,n);return u<0?(++this.size,s.push([n,r])):s[u][1]=r,this}sr.prototype.clear=jf,sr.prototype.delete=wf,sr.prototype.get=Hf,sr.prototype.has=Vf,sr.prototype.set=Uf;function lr(n){var r=-1,s=n==null?0:n.length;for(this.clear();++r<s;){var u=n[r];this.set(u[0],u[1])}}function qf(){this.size=0,this.__data__={hash:new Pr,map:new(St||sr),string:new Pr}}function xf(n){var r=Ba(this,n).delete(n);return this.size-=r?1:0,r}function Yf(n){return Ba(this,n).get(n)}function Cf(n){return Ba(this,n).has(n)}function $f(n,r){var s=Ba(this,n),u=s.size;return s.set(n,r),this.size+=s.size==u?0:1,this}lr.prototype.clear=qf,lr.prototype.delete=xf,lr.prototype.get=Yf,lr.prototype.has=Cf,lr.prototype.set=$f;function Fr(n){var r=-1,s=n==null?0:n.length;for(this.__data__=new lr;++r<s;)this.add(n[r])}function Jf(n){return this.__data__.set(n,v),this}function Wf(n){return this.__data__.has(n)}Fr.prototype.add=Fr.prototype.push=Jf,Fr.prototype.has=Wf;function Yn(n){var r=this.__data__=new sr(n);this.size=r.size}function zf(){this.__data__=new sr,this.size=0}function Xf(n){var r=this.__data__,s=r.delete(n);return this.size=r.size,s}function Zf(n){return this.__data__.get(n)}function Qf(n){return this.__data__.has(n)}function em(n,r){var s=this.__data__;if(s instanceof sr){var u=s.__data__;if(!St||u.length<o-1)return u.push([n,r]),this.size=++s.size,this;s=this.__data__=new lr(u)}return s.set(n,r),this.size=s.size,this}Yn.prototype.clear=zf,Yn.prototype.delete=Xf,Yn.prototype.get=Zf,Yn.prototype.has=Qf,Yn.prototype.set=em;function Cl(n,r){var s=ve(n),u=!s&&wr(n),g=!s&&!u&&Sr(n),T=!s&&!u&&!g&&ut(n),h=s||u||g||T,c=h?Yi(n.length,df):[],_=c.length;for(var B in n)(r||Oe.call(n,B))&&!(h&&(B=="length"||g&&(B=="offset"||B=="parent")||T&&(B=="buffer"||B=="byteLength"||B=="byteOffset")||gr(B,_)))&&c.push(B);return c}function $l(n){var r=n.length;return r?n[lo(0,r-1)]:a}function nm(n,r){return ja(fn(n),Mr(r,0,n.length))}function rm(n){return ja(fn(n))}function Zi(n,r,s){(s!==a&&!Cn(n[r],s)||s===a&&!(r in n))&&ur(n,r,s)}function Kt(n,r,s){var u=n[r];(!(Oe.call(n,r)&&Cn(u,s))||s===a&&!(r in n))&&ur(n,r,s)}function ba(n,r){for(var s=n.length;s--;)if(Cn(n[s][0],r))return s;return-1}function tm(n,r,s,u){return Rr(n,function(g,T,h){r(u,g,s(g),h)}),u}function Jl(n,r){return n&&Qn(r,Xe(r),n)}function am(n,r){return n&&Qn(r,Tn(r),n)}function ur(n,r,s){r=="__proto__"&&ha?ha(n,r,{configurable:!0,enumerable:!0,value:s,writable:!0}):n[r]=s}function Qi(n,r){for(var s=-1,u=r.length,g=S(u),T=n==null;++s<u;)g[s]=T?a:Fo(n,r[s]);return g}function Mr(n,r,s){return n===n&&(s!==a&&(n=n<=s?n:s),r!==a&&(n=n>=r?n:r)),n}function Mn(n,r,s,u,g,T){var h,c=r&p,_=r&A,B=r&I;if(s&&(h=g?s(n,u,g,T):s(n)),h!==a)return h;if(!He(n))return n;var j=ve(n);if(j){if(h=Cm(n),!c)return fn(n,h)}else{var H=sn(n),X=H==En||H==Un;if(Sr(n))return pu(n,c);if(H==cn||H==qe||X&&!g){if(h=_||X?{}:Bu(n),!c)return _?Mm(n,am(h,n)):Fm(n,Jl(h,n))}else{if(!Fe[H])return g?n:{};h=$m(n,H,c)}}T||(T=new Yn);var ae=T.get(n);if(ae)return ae;T.set(n,h),gd(n)?n.forEach(function(ke){h.add(Mn(ke,r,s,ke,n,T))}):dd(n)&&n.forEach(function(ke,Te){h.set(Te,Mn(ke,r,s,Te,n,T))});var de=B?_?Ao:ho:_?Tn:Xe,fe=j?a:de(n);return Dn(fe||n,function(ke,Te){fe&&(Te=ke,ke=n[Te]),Kt(h,Te,Mn(ke,r,s,Te,n,T))}),h}function im(n){var r=Xe(n);return function(s){return Wl(s,n,r)}}function Wl(n,r,s){var u=s.length;if(n==null)return!u;for(n=Pe(n);u--;){var g=s[u],T=r[g],h=n[g];if(h===a&&!(g in n)||!T(h))return!1}return!0}function zl(n,r,s){if(typeof n!="function")throw new Pn(d);return jt(function(){n.apply(a,s)},r)}function Dt(n,r,s,u){var g=-1,T=la,h=!0,c=n.length,_=[],B=r.length;if(!c)return _;s&&(r=je(r,Rn(s))),u?(T=wi,h=!1):r.length>=o&&(T=bt,h=!1,r=new Fr(r));e:for(;++g<c;){var j=n[g],H=s==null?j:s(j);if(j=u||j!==0?j:0,h&&H===H){for(var X=B;X--;)if(r[X]===H)continue e;_.push(j)}else T(r,H,u)||_.push(j)}return _}var Rr=Ru(Zn),Xl=Ru(no,!0);function om(n,r){var s=!0;return Rr(n,function(u,g,T){return s=!!r(u,g,T),s}),s}function Na(n,r,s){for(var u=-1,g=n.length;++u<g;){var T=n[u],h=r(T);if(h!=null&&(c===a?h===h&&!bn(h):s(h,c)))var c=h,_=T}return _}function sm(n,r,s,u){var g=n.length;for(s=Ee(s),s<0&&(s=-s>g?0:g+s),u=u===a||u>g?g:Ee(u),u<0&&(u+=g),u=s>u?0:Ed(u);s<u;)n[s++]=r;return n}function Zl(n,r){var s=[];return Rr(n,function(u,g,T){r(u,g,T)&&s.push(u)}),s}function rn(n,r,s,u,g){var T=-1,h=n.length;for(s||(s=Wm),g||(g=[]);++T<h;){var c=n[T];r>0&&s(c)?r>1?rn(c,r-1,s,u,g):Ar(g,c):u||(g[g.length]=c)}return g}var eo=_u(),Ql=_u(!0);function Zn(n,r){return n&&eo(n,r,Xe)}function no(n,r){return n&&Ql(n,r,Xe)}function Sa(n,r){return hr(r,function(s){return vr(n[s])})}function Gr(n,r){r=br(r,n);for(var s=0,u=r.length;n!=null&&s<u;)n=n[er(r[s++])];return s&&s==u?n:a}function eu(n,r,s){var u=r(n);return ve(n)?u:Ar(u,s(n))}function ln(n){return n==null?n===a?Mv:ht:Dr&&Dr in Pe(n)?qm(n):rT(n)}function ro(n,r){return n>r}function lm(n,r){return n!=null&&Oe.call(n,r)}function um(n,r){return n!=null&&r in Pe(n)}function dm(n,r,s){return n>=on(r,s)&&n<We(r,s)}function to(n,r,s){for(var u=s?wi:la,g=n[0].length,T=n.length,h=T,c=S(T),_=1/0,B=[];h--;){var j=n[h];h&&r&&(j=je(j,Rn(r))),_=on(j.length,_),c[h]=!s&&(r||g>=120&&j.length>=120)?new Fr(h&&j):a}j=n[0];var H=-1,X=c[0];e:for(;++H<g&&B.length<_;){var ae=j[H],de=r?r(ae):ae;if(ae=s||ae!==0?ae:0,!(X?bt(X,de):u(B,de,s))){for(h=T;--h;){var fe=c[h];if(!(fe?bt(fe,de):u(n[h],de,s)))continue e}X&&X.push(de),B.push(ae)}}return B}function km(n,r,s,u){return Zn(n,function(g,T,h){r(u,s(g),T,h)}),u}function Pt(n,r,s){r=br(r,n),n=Vu(n,r);var u=n==null?n:n[er(Bn(r))];return u==null?a:yn(u,n,s)}function nu(n){return Ue(n)&&ln(n)==qe}function gm(n){return Ue(n)&&ln(n)==_t}function vm(n){return Ue(n)&&ln(n)==tn}function Ft(n,r,s,u,g){return n===r?!0:n==null||r==null||!Ue(n)&&!Ue(r)?n!==n&&r!==r:Em(n,r,s,u,Ft,g)}function Em(n,r,s,u,g,T){var h=ve(n),c=ve(r),_=h?hn:sn(n),B=c?hn:sn(r);_=_==qe?cn:_,B=B==qe?cn:B;var j=_==cn,H=B==cn,X=_==B;if(X&&Sr(n)){if(!Sr(r))return!1;h=!0,j=!1}if(X&&!j)return T||(T=new Yn),h||ut(n)?Fu(n,r,s,u,g,T):Vm(n,r,_,s,u,g,T);if(!(s&M)){var ae=j&&Oe.call(n,"__wrapped__"),de=H&&Oe.call(r,"__wrapped__");if(ae||de){var fe=ae?n.value():n,ke=de?r.value():r;return T||(T=new Yn),g(fe,ke,s,u,T)}}return X?(T||(T=new Yn),Um(n,r,s,u,g,T)):!1}function fm(n){return Ue(n)&&sn(n)==an}function ao(n,r,s,u){var g=s.length,T=g,h=!u;if(n==null)return!T;for(n=Pe(n);g--;){var c=s[g];if(h&&c[2]?c[1]!==n[c[0]]:!(c[0]in n))return!1}for(;++g<T;){c=s[g];var _=c[0],B=n[_],j=c[1];if(h&&c[2]){if(B===a&&!(_ in n))return!1}else{var H=new Yn;if(u)var X=u(B,j,_,n,r,H);if(!(X===a?Ft(j,B,M|R,u,H):X))return!1}}return!0}function ru(n){if(!He(n)||Xm(n))return!1;var r=vr(n)?ff:aE;return r.test(jr(n))}function mm(n){return Ue(n)&&ln(n)==ct}function Tm(n){return Ue(n)&&sn(n)==qn}function pm(n){return Ue(n)&&xa(n.length)&&!!Ge[ln(n)]}function tu(n){return typeof n=="function"?n:n==null?pn:typeof n=="object"?ve(n)?ou(n[0],n[1]):iu(n):bd(n)}function io(n){if(!Bt(n))return cf(n);var r=[];for(var s in Pe(n))Oe.call(n,s)&&s!="constructor"&&r.push(s);return r}function hm(n){if(!He(n))return nT(n);var r=Bt(n),s=[];for(var u in n)u=="constructor"&&(r||!Oe.call(n,u))||s.push(u);return s}function oo(n,r){return n<r}function au(n,r){var s=-1,u=mn(n)?S(n.length):[];return Rr(n,function(g,T,h){u[++s]=r(g,T,h)}),u}function iu(n){var r=yo(n);return r.length==1&&r[0][2]?wu(r[0][0],r[0][1]):function(s){return s===n||ao(s,n,r)}}function ou(n,r){return _o(n)&&ju(r)?wu(er(n),r):function(s){var u=Fo(s,n);return u===a&&u===r?Mo(s,n):Ft(r,u,M|R)}}function Ia(n,r,s,u,g){n!==r&&eo(r,function(T,h){if(g||(g=new Yn),He(T))Am(n,r,h,s,Ia,u,g);else{var c=u?u(No(n,h),T,h+"",n,r,g):a;c===a&&(c=T),Zi(n,h,c)}},Tn)}function Am(n,r,s,u,g,T,h){var c=No(n,s),_=No(r,s),B=h.get(_);if(B){Zi(n,s,B);return}var j=T?T(c,_,s+"",n,r,h):a,H=j===a;if(H){var X=ve(_),ae=!X&&Sr(_),de=!X&&!ae&&ut(_);j=_,X||ae||de?ve(c)?j=c:xe(c)?j=fn(c):ae?(H=!1,j=pu(_,!0)):de?(H=!1,j=hu(_,!0)):j=[]:wt(_)||wr(_)?(j=c,wr(c)?j=fd(c):(!He(c)||vr(c))&&(j=Bu(_))):H=!1}H&&(h.set(_,j),g(j,_,u,T,h),h.delete(_)),Zi(n,s,j)}function su(n,r){var s=n.length;if(s)return r+=r<0?s:0,gr(r,s)?n[r]:a}function lu(n,r,s){r.length?r=je(r,function(T){return ve(T)?function(h){return Gr(h,T.length===1?T[0]:T)}:T}):r=[pn];var u=-1;r=je(r,Rn(le()));var g=au(n,function(T,h,c){var _=je(r,function(B){return B(T)});return{criteria:_,index:++u,value:T}});return CE(g,function(T,h){return Pm(T,h,s)})}function cm(n,r){return uu(n,r,function(s,u){return Mo(n,u)})}function uu(n,r,s){for(var u=-1,g=r.length,T={};++u<g;){var h=r[u],c=Gr(n,h);s(c,h)&&Mt(T,br(h,n),c)}return T}function ym(n){return function(r){return Gr(r,n)}}function so(n,r,s,u){var g=u?YE:Zr,T=-1,h=r.length,c=n;for(n===r&&(r=fn(r)),s&&(c=je(n,Rn(s)));++T<h;)for(var _=0,B=r[T],j=s?s(B):B;(_=g(c,j,_,u))>-1;)c!==n&&pa.call(c,_,1),pa.call(n,_,1);return n}function du(n,r){for(var s=n?r.length:0,u=s-1;s--;){var g=r[s];if(s==u||g!==T){var T=g;gr(g)?pa.call(n,g,1):go(n,g)}}return n}function lo(n,r){return n+ca(xl()*(r-n+1))}function Rm(n,r,s,u){for(var g=-1,T=We(Aa((r-n)/(s||1)),0),h=S(T);T--;)h[u?T:++g]=n,n+=s;return h}function uo(n,r){var s="";if(!n||r<1||r>w)return s;do r%2&&(s+=n),r=ca(r/2),r&&(n+=n);while(r);return s}function me(n,r){return So(Hu(n,r,pn),n+"")}function _m(n){return $l(dt(n))}function bm(n,r){var s=dt(n);return ja(s,Mr(r,0,s.length))}function Mt(n,r,s,u){if(!He(n))return n;r=br(r,n);for(var g=-1,T=r.length,h=T-1,c=n;c!=null&&++g<T;){var _=er(r[g]),B=s;if(_==="__proto__"||_==="constructor"||_==="prototype")return n;if(g!=h){var j=c[_];B=u?u(j,_,c):a,B===a&&(B=He(j)?j:gr(r[g+1])?[]:{})}Kt(c,_,B),c=c[_]}return n}var ku=ya?function(n,r){return ya.set(n,r),n}:pn,Nm=ha?function(n,r){return ha(n,"toString",{configurable:!0,enumerable:!1,value:Bo(r),writable:!0})}:pn;function Sm(n){return ja(dt(n))}function Gn(n,r,s){var u=-1,g=n.length;r<0&&(r=-r>g?0:g+r),s=s>g?g:s,s<0&&(s+=g),g=r>s?0:s-r>>>0,r>>>=0;for(var T=S(g);++u<g;)T[u]=n[u+r];return T}function Im(n,r){var s;return Rr(n,function(u,g,T){return s=r(u,g,T),!s}),!!s}function Oa(n,r,s){var u=0,g=n==null?u:n.length;if(typeof r=="number"&&r===r&&g<=Me){for(;u<g;){var T=u+g>>>1,h=n[T];h!==null&&!bn(h)&&(s?h<=r:h<r)?u=T+1:g=T}return g}return ko(n,r,pn,s)}function ko(n,r,s,u){var g=0,T=n==null?0:n.length;if(T===0)return 0;r=s(r);for(var h=r!==r,c=r===null,_=bn(r),B=r===a;g<T;){var j=ca((g+T)/2),H=s(n[j]),X=H!==a,ae=H===null,de=H===H,fe=bn(H);if(h)var ke=u||de;else B?ke=de&&(u||X):c?ke=de&&X&&(u||!ae):_?ke=de&&X&&!ae&&(u||!fe):ae||fe?ke=!1:ke=u?H<=r:H<r;ke?g=j+1:T=j}return on(T,De)}function gu(n,r){for(var s=-1,u=n.length,g=0,T=[];++s<u;){var h=n[s],c=r?r(h):h;if(!s||!Cn(c,_)){var _=c;T[g++]=h===0?0:h}}return T}function vu(n){return typeof n=="number"?n:bn(n)?ie:+n}function _n(n){if(typeof n=="string")return n;if(ve(n))return je(n,_n)+"";if(bn(n))return Yl?Yl.call(n):"";var r=n+"";return r=="0"&&1/n==-Z?"-0":r}function _r(n,r,s){var u=-1,g=la,T=n.length,h=!0,c=[],_=c;if(s)h=!1,g=wi;else if(T>=o){var B=r?null:wm(n);if(B)return da(B);h=!1,g=bt,_=new Fr}else _=r?[]:c;e:for(;++u<T;){var j=n[u],H=r?r(j):j;if(j=s||j!==0?j:0,h&&H===H){for(var X=_.length;X--;)if(_[X]===H)continue e;r&&_.push(H),c.push(j)}else g(_,H,s)||(_!==c&&_.push(H),c.push(j))}return c}function go(n,r){return r=br(r,n),n=Vu(n,r),n==null||delete n[er(Bn(r))]}function Eu(n,r,s,u){return Mt(n,r,s(Gr(n,r)),u)}function La(n,r,s,u){for(var g=n.length,T=u?g:-1;(u?T--:++T<g)&&r(n[T],T,n););return s?Gn(n,u?0:T,u?T+1:g):Gn(n,u?T+1:0,u?g:T)}function fu(n,r){var s=n;return s instanceof pe&&(s=s.value()),Hi(r,function(u,g){return g.func.apply(g.thisArg,Ar([u],g.args))},s)}function vo(n,r,s){var u=n.length;if(u<2)return u?_r(n[0]):[];for(var g=-1,T=S(u);++g<u;)for(var h=n[g],c=-1;++c<u;)c!=g&&(T[g]=Dt(T[g]||h,n[c],r,s));return _r(rn(T,1),r,s)}function mu(n,r,s){for(var u=-1,g=n.length,T=r.length,h={};++u<g;){var c=u<T?r[u]:a;s(h,n[u],c)}return h}function Eo(n){return xe(n)?n:[]}function fo(n){return typeof n=="function"?n:pn}function br(n,r){return ve(n)?n:_o(n,r)?[n]:Yu(Ne(n))}var Om=me;function Nr(n,r,s){var u=n.length;return s=s===a?u:s,!r&&s>=u?n:Gn(n,r,s)}var Tu=mf||function(n){return nn.clearTimeout(n)};function pu(n,r){if(r)return n.slice();var s=n.length,u=wl?wl(s):new n.constructor(s);return n.copy(u),u}function mo(n){var r=new n.constructor(n.byteLength);return new ma(r).set(new ma(n)),r}function Lm(n,r){var s=r?mo(n.buffer):n.buffer;return new n.constructor(s,n.byteOffset,n.byteLength)}function Km(n){var r=new n.constructor(n.source,nl.exec(n));return r.lastIndex=n.lastIndex,r}function Dm(n){return Lt?Pe(Lt.call(n)):{}}function hu(n,r){var s=r?mo(n.buffer):n.buffer;return new n.constructor(s,n.byteOffset,n.length)}function Au(n,r){if(n!==r){var s=n!==a,u=n===null,g=n===n,T=bn(n),h=r!==a,c=r===null,_=r===r,B=bn(r);if(!c&&!B&&!T&&n>r||T&&h&&_&&!c&&!B||u&&h&&_||!s&&_||!g)return 1;if(!u&&!T&&!B&&n<r||B&&s&&g&&!u&&!T||c&&s&&g||!h&&g||!_)return-1}return 0}function Pm(n,r,s){for(var u=-1,g=n.criteria,T=r.criteria,h=g.length,c=s.length;++u<h;){var _=Au(g[u],T[u]);if(_){if(u>=c)return _;var B=s[u];return _*(B=="desc"?-1:1)}}return n.index-r.index}function cu(n,r,s,u){for(var g=-1,T=n.length,h=s.length,c=-1,_=r.length,B=We(T-h,0),j=S(_+B),H=!u;++c<_;)j[c]=r[c];for(;++g<h;)(H||g<T)&&(j[s[g]]=n[g]);for(;B--;)j[c++]=n[g++];return j}function yu(n,r,s,u){for(var g=-1,T=n.length,h=-1,c=s.length,_=-1,B=r.length,j=We(T-c,0),H=S(j+B),X=!u;++g<j;)H[g]=n[g];for(var ae=g;++_<B;)H[ae+_]=r[_];for(;++h<c;)(X||g<T)&&(H[ae+s[h]]=n[g++]);return H}function fn(n,r){var s=-1,u=n.length;for(r||(r=S(u));++s<u;)r[s]=n[s];return r}function Qn(n,r,s,u){var g=!s;s||(s={});for(var T=-1,h=r.length;++T<h;){var c=r[T],_=u?u(s[c],n[c],c,s,n):a;_===a&&(_=n[c]),g?ur(s,c,_):Kt(s,c,_)}return s}function Fm(n,r){return Qn(n,Ro(n),r)}function Mm(n,r){return Qn(n,Mu(n),r)}function Ka(n,r){return function(s,u){var g=ve(s)?wE:tm,T=r?r():{};return g(s,n,le(u,2),T)}}function ot(n){return me(function(r,s){var u=-1,g=s.length,T=g>1?s[g-1]:a,h=g>2?s[2]:a;for(T=n.length>3&&typeof T=="function"?(g--,T):a,h&&un(s[0],s[1],h)&&(T=g<3?a:T,g=1),r=Pe(r);++u<g;){var c=s[u];c&&n(r,c,u,T)}return r})}function Ru(n,r){return function(s,u){if(s==null)return s;if(!mn(s))return n(s,u);for(var g=s.length,T=r?g:-1,h=Pe(s);(r?T--:++T<g)&&u(h[T],T,h)!==!1;);return s}}function _u(n){return function(r,s,u){for(var g=-1,T=Pe(r),h=u(r),c=h.length;c--;){var _=h[n?c:++g];if(s(T[_],_,T)===!1)break}return r}}function Gm(n,r,s){var u=r&N,g=Gt(n);function T(){var h=this&&this!==nn&&this instanceof T?g:n;return h.apply(u?s:this,arguments)}return T}function bu(n){return function(r){r=Ne(r);var s=Qr(r)?xn(r):a,u=s?s[0]:r.charAt(0),g=s?Nr(s,1).join(""):r.slice(1);return u[n]()+g}}function st(n){return function(r){return Hi(Rd(yd(r).replace(bE,"")),n,"")}}function Gt(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var s=it(n.prototype),u=n.apply(s,r);return He(u)?u:s}}function Bm(n,r,s){var u=Gt(n);function g(){for(var T=arguments.length,h=S(T),c=T,_=lt(g);c--;)h[c]=arguments[c];var B=T<3&&h[0]!==_&&h[T-1]!==_?[]:cr(h,_);if(T-=B.length,T<s)return Lu(n,r,Da,g.placeholder,a,h,B,a,a,s-T);var j=this&&this!==nn&&this instanceof g?u:n;return yn(j,this,h)}return g}function Nu(n){return function(r,s,u){var g=Pe(r);if(!mn(r)){var T=le(s,3);r=Xe(r),s=function(c){return T(g[c],c,g)}}var h=n(r,s,u);return h>-1?g[T?r[h]:h]:a}}function Su(n){return kr(function(r){var s=r.length,u=s,g=Fn.prototype.thru;for(n&&r.reverse();u--;){var T=r[u];if(typeof T!="function")throw new Pn(d);if(g&&!h&&Ga(T)=="wrapper")var h=new Fn([],!0)}for(u=h?u:s;++u<s;){T=r[u];var c=Ga(T),_=c=="wrapper"?co(T):a;_&&bo(_[0])&&_[1]==(O|K|L|b)&&!_[4].length&&_[9]==1?h=h[Ga(_[0])].apply(h,_[3]):h=T.length==1&&bo(T)?h[c]():h.thru(T)}return function(){var B=arguments,j=B[0];if(h&&B.length==1&&ve(j))return h.plant(j).value();for(var H=0,X=s?r[H].apply(this,B):j;++H<s;)X=r[H].call(this,X);return X}})}function Da(n,r,s,u,g,T,h,c,_,B){var j=r&O,H=r&N,X=r&P,ae=r&(K|ee),de=r&J,fe=X?a:Gt(n);function ke(){for(var Te=arguments.length,he=S(Te),Nn=Te;Nn--;)he[Nn]=arguments[Nn];if(ae)var dn=lt(ke),Sn=JE(he,dn);if(u&&(he=cu(he,u,g,ae)),T&&(he=yu(he,T,h,ae)),Te-=Sn,ae&&Te<B){var Ye=cr(he,dn);return Lu(n,r,Da,ke.placeholder,s,he,Ye,c,_,B-Te)}var $n=H?s:this,fr=X?$n[n]:n;return Te=he.length,c?he=tT(he,c):de&&Te>1&&he.reverse(),j&&_<Te&&(he.length=_),this&&this!==nn&&this instanceof ke&&(fr=fe||Gt(fr)),fr.apply($n,he)}return ke}function Iu(n,r){return function(s,u){return km(s,n,r(u),{})}}function Pa(n,r){return function(s,u){var g;if(s===a&&u===a)return r;if(s!==a&&(g=s),u!==a){if(g===a)return u;typeof s=="string"||typeof u=="string"?(s=_n(s),u=_n(u)):(s=vu(s),u=vu(u)),g=n(s,u)}return g}}function To(n){return kr(function(r){return r=je(r,Rn(le())),me(function(s){var u=this;return n(r,function(g){return yn(g,u,s)})})})}function Fa(n,r){r=r===a?" ":_n(r);var s=r.length;if(s<2)return s?uo(r,n):r;var u=uo(r,Aa(n/et(r)));return Qr(r)?Nr(xn(u),0,n).join(""):u.slice(0,n)}function jm(n,r,s,u){var g=r&N,T=Gt(n);function h(){for(var c=-1,_=arguments.length,B=-1,j=u.length,H=S(j+_),X=this&&this!==nn&&this instanceof h?T:n;++B<j;)H[B]=u[B];for(;_--;)H[B++]=arguments[++c];return yn(X,g?s:this,H)}return h}function Ou(n){return function(r,s,u){return u&&typeof u!="number"&&un(r,s,u)&&(s=u=a),r=Er(r),s===a?(s=r,r=0):s=Er(s),u=u===a?r<s?1:-1:Er(u),Rm(r,s,u,n)}}function Ma(n){return function(r,s){return typeof r=="string"&&typeof s=="string"||(r=jn(r),s=jn(s)),n(r,s)}}function Lu(n,r,s,u,g,T,h,c,_,B){var j=r&K,H=j?h:a,X=j?a:h,ae=j?T:a,de=j?a:T;r|=j?L:U,r&=~(j?U:L),r&q||(r&=~(N|P));var fe=[n,r,g,ae,H,de,X,c,_,B],ke=s.apply(a,fe);return bo(n)&&Uu(ke,fe),ke.placeholder=u,qu(ke,n,r)}function po(n){var r=Je[n];return function(s,u){if(s=jn(s),u=u==null?0:on(Ee(u),292),u&&ql(s)){var g=(Ne(s)+"e").split("e"),T=r(g[0]+"e"+(+g[1]+u));return g=(Ne(T)+"e").split("e"),+(g[0]+"e"+(+g[1]-u))}return r(s)}}var wm=tt&&1/da(new tt([,-0]))[1]==Z?function(n){return new tt(n)}:Ho;function Ku(n){return function(r){var s=sn(r);return s==an?$i(r):s==qn?nf(r):$E(r,n(r))}}function dr(n,r,s,u,g,T,h,c){var _=r&P;if(!_&&typeof n!="function")throw new Pn(d);var B=u?u.length:0;if(B||(r&=~(L|U),u=g=a),h=h===a?h:We(Ee(h),0),c=c===a?c:Ee(c),B-=g?g.length:0,r&U){var j=u,H=g;u=g=a}var X=_?a:co(n),ae=[n,r,s,u,g,j,H,T,h,c];if(X&&eT(ae,X),n=ae[0],r=ae[1],s=ae[2],u=ae[3],g=ae[4],c=ae[9]=ae[9]===a?_?0:n.length:We(ae[9]-B,0),!c&&r&(K|ee)&&(r&=~(K|ee)),!r||r==N)var de=Gm(n,r,s);else r==K||r==ee?de=Bm(n,r,c):(r==L||r==(N|L))&&!g.length?de=jm(n,r,s,u):de=Da.apply(a,ae);var fe=X?ku:Uu;return qu(fe(de,ae),n,r)}function Du(n,r,s,u){return n===a||Cn(n,rt[s])&&!Oe.call(u,s)?r:n}function Pu(n,r,s,u,g,T){return He(n)&&He(r)&&(T.set(r,n),Ia(n,r,a,Pu,T),T.delete(r)),n}function Hm(n){return wt(n)?a:n}function Fu(n,r,s,u,g,T){var h=s&M,c=n.length,_=r.length;if(c!=_&&!(h&&_>c))return!1;var B=T.get(n),j=T.get(r);if(B&&j)return B==r&&j==n;var H=-1,X=!0,ae=s&R?new Fr:a;for(T.set(n,r),T.set(r,n);++H<c;){var de=n[H],fe=r[H];if(u)var ke=h?u(fe,de,H,r,n,T):u(de,fe,H,n,r,T);if(ke!==a){if(ke)continue;X=!1;break}if(ae){if(!Vi(r,function(Te,he){if(!bt(ae,he)&&(de===Te||g(de,Te,s,u,T)))return ae.push(he)})){X=!1;break}}else if(!(de===fe||g(de,fe,s,u,T))){X=!1;break}}return T.delete(n),T.delete(r),X}function Vm(n,r,s,u,g,T,h){switch(s){case zr:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case _t:return!(n.byteLength!=r.byteLength||!T(new ma(n),new ma(r)));case An:case tn:case Xn:return Cn(+n,+r);case en:return n.name==r.name&&n.message==r.message;case ct:case yt:return n==r+"";case an:var c=$i;case qn:var _=u&M;if(c||(c=da),n.size!=r.size&&!_)return!1;var B=h.get(n);if(B)return B==r;u|=R,h.set(n,r);var j=Fu(c(n),c(r),u,g,T,h);return h.delete(n),j;case aa:if(Lt)return Lt.call(n)==Lt.call(r)}return!1}function Um(n,r,s,u,g,T){var h=s&M,c=ho(n),_=c.length,B=ho(r),j=B.length;if(_!=j&&!h)return!1;for(var H=_;H--;){var X=c[H];if(!(h?X in r:Oe.call(r,X)))return!1}var ae=T.get(n),de=T.get(r);if(ae&&de)return ae==r&&de==n;var fe=!0;T.set(n,r),T.set(r,n);for(var ke=h;++H<_;){X=c[H];var Te=n[X],he=r[X];if(u)var Nn=h?u(he,Te,X,r,n,T):u(Te,he,X,n,r,T);if(!(Nn===a?Te===he||g(Te,he,s,u,T):Nn)){fe=!1;break}ke||(ke=X=="constructor")}if(fe&&!ke){var dn=n.constructor,Sn=r.constructor;dn!=Sn&&"constructor"in n&&"constructor"in r&&!(typeof dn=="function"&&dn instanceof dn&&typeof Sn=="function"&&Sn instanceof Sn)&&(fe=!1)}return T.delete(n),T.delete(r),fe}function kr(n){return So(Hu(n,a,Wu),n+"")}function ho(n){return eu(n,Xe,Ro)}function Ao(n){return eu(n,Tn,Mu)}var co=ya?function(n){return ya.get(n)}:Ho;function Ga(n){for(var r=n.name+"",s=at[r],u=Oe.call(at,r)?s.length:0;u--;){var g=s[u],T=g.func;if(T==null||T==n)return g.name}return r}function lt(n){var r=Oe.call(E,"placeholder")?E:n;return r.placeholder}function le(){var n=E.iteratee||jo;return n=n===jo?tu:n,arguments.length?n(arguments[0],arguments[1]):n}function Ba(n,r){var s=n.__data__;return zm(r)?s[typeof r=="string"?"string":"hash"]:s.map}function yo(n){for(var r=Xe(n),s=r.length;s--;){var u=r[s],g=n[u];r[s]=[u,g,ju(g)]}return r}function Br(n,r){var s=ZE(n,r);return ru(s)?s:a}function qm(n){var r=Oe.call(n,Dr),s=n[Dr];try{n[Dr]=a;var u=!0}catch{}var g=Ea.call(n);return u&&(r?n[Dr]=s:delete n[Dr]),g}var Ro=Wi?function(n){return n==null?[]:(n=Pe(n),hr(Wi(n),function(r){return Vl.call(n,r)}))}:Vo,Mu=Wi?function(n){for(var r=[];n;)Ar(r,Ro(n)),n=Ta(n);return r}:Vo,sn=ln;(zi&&sn(new zi(new ArrayBuffer(1)))!=zr||St&&sn(new St)!=an||Xi&&sn(Xi.resolve())!=Wr||tt&&sn(new tt)!=qn||It&&sn(new It)!=Rt)&&(sn=function(n){var r=ln(n),s=r==cn?n.constructor:a,u=s?jr(s):"";if(u)switch(u){case bf:return zr;case Nf:return an;case Sf:return Wr;case If:return qn;case Of:return Rt}return r});function xm(n,r,s){for(var u=-1,g=s.length;++u<g;){var T=s[u],h=T.size;switch(T.type){case"drop":n+=h;break;case"dropRight":r-=h;break;case"take":r=on(r,n+h);break;case"takeRight":n=We(n,r-h);break}}return{start:n,end:r}}function Ym(n){var r=n.match(zv);return r?r[1].split(Xv):[]}function Gu(n,r,s){r=br(r,n);for(var u=-1,g=r.length,T=!1;++u<g;){var h=er(r[u]);if(!(T=n!=null&&s(n,h)))break;n=n[h]}return T||++u!=g?T:(g=n==null?0:n.length,!!g&&xa(g)&&gr(h,g)&&(ve(n)||wr(n)))}function Cm(n){var r=n.length,s=new n.constructor(r);return r&&typeof n[0]=="string"&&Oe.call(n,"index")&&(s.index=n.index,s.input=n.input),s}function Bu(n){return typeof n.constructor=="function"&&!Bt(n)?it(Ta(n)):{}}function $m(n,r,s){var u=n.constructor;switch(r){case _t:return mo(n);case An:case tn:return new u(+n);case zr:return Lm(n,s);case ci:case yi:case Ri:case _i:case bi:case Ni:case Si:case Ii:case Oi:return hu(n,s);case an:return new u;case Xn:case yt:return new u(n);case ct:return Km(n);case qn:return new u;case aa:return Dm(n)}}function Jm(n,r){var s=r.length;if(!s)return n;var u=s-1;return r[u]=(s>1?"& ":"")+r[u],r=r.join(s>2?", ":" "),n.replace(Wv,`{
/* [wrapped with `+r+`] */
`)}function Wm(n){return ve(n)||wr(n)||!!(Ul&&n&&n[Ul])}function gr(n,r){var s=typeof n;return r=r??w,!!r&&(s=="number"||s!="symbol"&&oE.test(n))&&n>-1&&n%1==0&&n<r}function un(n,r,s){if(!He(s))return!1;var u=typeof r;return(u=="number"?mn(s)&&gr(r,s.length):u=="string"&&r in s)?Cn(s[r],n):!1}function _o(n,r){if(ve(n))return!1;var s=typeof n;return s=="number"||s=="symbol"||s=="boolean"||n==null||bn(n)?!0:Yv.test(n)||!xv.test(n)||r!=null&&n in Pe(r)}function zm(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function bo(n){var r=Ga(n),s=E[r];if(typeof s!="function"||!(r in pe.prototype))return!1;if(n===s)return!0;var u=co(s);return!!u&&n===u[0]}function Xm(n){return!!jl&&jl in n}var Zm=ga?vr:Uo;function Bt(n){var r=n&&n.constructor,s=typeof r=="function"&&r.prototype||rt;return n===s}function ju(n){return n===n&&!He(n)}function wu(n,r){return function(s){return s==null?!1:s[n]===r&&(r!==a||n in Pe(s))}}function Qm(n){var r=Ua(n,function(u){return s.size===m&&s.clear(),u}),s=r.cache;return r}function eT(n,r){var s=n[1],u=r[1],g=s|u,T=g<(N|P|O),h=u==O&&s==K||u==O&&s==b&&n[7].length<=r[8]||u==(O|b)&&r[7].length<=r[8]&&s==K;if(!(T||h))return n;u&N&&(n[2]=r[2],g|=s&N?0:q);var c=r[3];if(c){var _=n[3];n[3]=_?cu(_,c,r[4]):c,n[4]=_?cr(n[3],f):r[4]}return c=r[5],c&&(_=n[5],n[5]=_?yu(_,c,r[6]):c,n[6]=_?cr(n[5],f):r[6]),c=r[7],c&&(n[7]=c),u&O&&(n[8]=n[8]==null?r[8]:on(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=g,n}function nT(n){var r=[];if(n!=null)for(var s in Pe(n))r.push(s);return r}function rT(n){return Ea.call(n)}function Hu(n,r,s){return r=We(r===a?n.length-1:r,0),function(){for(var u=arguments,g=-1,T=We(u.length-r,0),h=S(T);++g<T;)h[g]=u[r+g];g=-1;for(var c=S(r+1);++g<r;)c[g]=u[g];return c[r]=s(h),yn(n,this,c)}}function Vu(n,r){return r.length<2?n:Gr(n,Gn(r,0,-1))}function tT(n,r){for(var s=n.length,u=on(r.length,s),g=fn(n);u--;){var T=r[u];n[u]=gr(T,s)?g[T]:a}return n}function No(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var Uu=xu(ku),jt=pf||function(n,r){return nn.setTimeout(n,r)},So=xu(Nm);function qu(n,r,s){var u=r+"";return So(n,Jm(u,aT(Ym(u),s)))}function xu(n){var r=0,s=0;return function(){var u=yf(),g=oe-(u-s);if(s=u,g>0){if(++r>=z)return arguments[0]}else r=0;return n.apply(a,arguments)}}function ja(n,r){var s=-1,u=n.length,g=u-1;for(r=r===a?u:r;++s<r;){var T=lo(s,g),h=n[T];n[T]=n[s],n[s]=h}return n.length=r,n}var Yu=Qm(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(Cv,function(s,u,g,T){r.push(g?T.replace(eE,"$1"):u||s)}),r});function er(n){if(typeof n=="string"||bn(n))return n;var r=n+"";return r=="0"&&1/n==-Z?"-0":r}function jr(n){if(n!=null){try{return va.call(n)}catch{}try{return n+""}catch{}}return""}function aT(n,r){return Dn(Ce,function(s){var u="_."+s[0];r&s[1]&&!la(n,u)&&n.push(u)}),n.sort()}function Cu(n){if(n instanceof pe)return n.clone();var r=new Fn(n.__wrapped__,n.__chain__);return r.__actions__=fn(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function iT(n,r,s){(s?un(n,r,s):r===a)?r=1:r=We(Ee(r),0);var u=n==null?0:n.length;if(!u||r<1)return[];for(var g=0,T=0,h=S(Aa(u/r));g<u;)h[T++]=Gn(n,g,g+=r);return h}function oT(n){for(var r=-1,s=n==null?0:n.length,u=0,g=[];++r<s;){var T=n[r];T&&(g[u++]=T)}return g}function sT(){var n=arguments.length;if(!n)return[];for(var r=S(n-1),s=arguments[0],u=n;u--;)r[u-1]=arguments[u];return Ar(ve(s)?fn(s):[s],rn(r,1))}var lT=me(function(n,r){return xe(n)?Dt(n,rn(r,1,xe,!0)):[]}),uT=me(function(n,r){var s=Bn(r);return xe(s)&&(s=a),xe(n)?Dt(n,rn(r,1,xe,!0),le(s,2)):[]}),dT=me(function(n,r){var s=Bn(r);return xe(s)&&(s=a),xe(n)?Dt(n,rn(r,1,xe,!0),a,s):[]});function kT(n,r,s){var u=n==null?0:n.length;return u?(r=s||r===a?1:Ee(r),Gn(n,r<0?0:r,u)):[]}function gT(n,r,s){var u=n==null?0:n.length;return u?(r=s||r===a?1:Ee(r),r=u-r,Gn(n,0,r<0?0:r)):[]}function vT(n,r){return n&&n.length?La(n,le(r,3),!0,!0):[]}function ET(n,r){return n&&n.length?La(n,le(r,3),!0):[]}function fT(n,r,s,u){var g=n==null?0:n.length;return g?(s&&typeof s!="number"&&un(n,r,s)&&(s=0,u=g),sm(n,r,s,u)):[]}function $u(n,r,s){var u=n==null?0:n.length;if(!u)return-1;var g=s==null?0:Ee(s);return g<0&&(g=We(u+g,0)),ua(n,le(r,3),g)}function Ju(n,r,s){var u=n==null?0:n.length;if(!u)return-1;var g=u-1;return s!==a&&(g=Ee(s),g=s<0?We(u+g,0):on(g,u-1)),ua(n,le(r,3),g,!0)}function Wu(n){var r=n==null?0:n.length;return r?rn(n,1):[]}function mT(n){var r=n==null?0:n.length;return r?rn(n,Z):[]}function TT(n,r){var s=n==null?0:n.length;return s?(r=r===a?1:Ee(r),rn(n,r)):[]}function pT(n){for(var r=-1,s=n==null?0:n.length,u={};++r<s;){var g=n[r];u[g[0]]=g[1]}return u}function zu(n){return n&&n.length?n[0]:a}function hT(n,r,s){var u=n==null?0:n.length;if(!u)return-1;var g=s==null?0:Ee(s);return g<0&&(g=We(u+g,0)),Zr(n,r,g)}function AT(n){var r=n==null?0:n.length;return r?Gn(n,0,-1):[]}var cT=me(function(n){var r=je(n,Eo);return r.length&&r[0]===n[0]?to(r):[]}),yT=me(function(n){var r=Bn(n),s=je(n,Eo);return r===Bn(s)?r=a:s.pop(),s.length&&s[0]===n[0]?to(s,le(r,2)):[]}),RT=me(function(n){var r=Bn(n),s=je(n,Eo);return r=typeof r=="function"?r:a,r&&s.pop(),s.length&&s[0]===n[0]?to(s,a,r):[]});function _T(n,r){return n==null?"":Af.call(n,r)}function Bn(n){var r=n==null?0:n.length;return r?n[r-1]:a}function bT(n,r,s){var u=n==null?0:n.length;if(!u)return-1;var g=u;return s!==a&&(g=Ee(s),g=g<0?We(u+g,0):on(g,u-1)),r===r?tf(n,r,g):ua(n,Ll,g,!0)}function NT(n,r){return n&&n.length?su(n,Ee(r)):a}var ST=me(Xu);function Xu(n,r){return n&&n.length&&r&&r.length?so(n,r):n}function IT(n,r,s){return n&&n.length&&r&&r.length?so(n,r,le(s,2)):n}function OT(n,r,s){return n&&n.length&&r&&r.length?so(n,r,a,s):n}var LT=kr(function(n,r){var s=n==null?0:n.length,u=Qi(n,r);return du(n,je(r,function(g){return gr(g,s)?+g:g}).sort(Au)),u});function KT(n,r){var s=[];if(!(n&&n.length))return s;var u=-1,g=[],T=n.length;for(r=le(r,3);++u<T;){var h=n[u];r(h,u,n)&&(s.push(h),g.push(u))}return du(n,g),s}function Io(n){return n==null?n:_f.call(n)}function DT(n,r,s){var u=n==null?0:n.length;return u?(s&&typeof s!="number"&&un(n,r,s)?(r=0,s=u):(r=r==null?0:Ee(r),s=s===a?u:Ee(s)),Gn(n,r,s)):[]}function PT(n,r){return Oa(n,r)}function FT(n,r,s){return ko(n,r,le(s,2))}function MT(n,r){var s=n==null?0:n.length;if(s){var u=Oa(n,r);if(u<s&&Cn(n[u],r))return u}return-1}function GT(n,r){return Oa(n,r,!0)}function BT(n,r,s){return ko(n,r,le(s,2),!0)}function jT(n,r){var s=n==null?0:n.length;if(s){var u=Oa(n,r,!0)-1;if(Cn(n[u],r))return u}return-1}function wT(n){return n&&n.length?gu(n):[]}function HT(n,r){return n&&n.length?gu(n,le(r,2)):[]}function VT(n){var r=n==null?0:n.length;return r?Gn(n,1,r):[]}function UT(n,r,s){return n&&n.length?(r=s||r===a?1:Ee(r),Gn(n,0,r<0?0:r)):[]}function qT(n,r,s){var u=n==null?0:n.length;return u?(r=s||r===a?1:Ee(r),r=u-r,Gn(n,r<0?0:r,u)):[]}function xT(n,r){return n&&n.length?La(n,le(r,3),!1,!0):[]}function YT(n,r){return n&&n.length?La(n,le(r,3)):[]}var CT=me(function(n){return _r(rn(n,1,xe,!0))}),$T=me(function(n){var r=Bn(n);return xe(r)&&(r=a),_r(rn(n,1,xe,!0),le(r,2))}),JT=me(function(n){var r=Bn(n);return r=typeof r=="function"?r:a,_r(rn(n,1,xe,!0),a,r)});function WT(n){return n&&n.length?_r(n):[]}function zT(n,r){return n&&n.length?_r(n,le(r,2)):[]}function XT(n,r){return r=typeof r=="function"?r:a,n&&n.length?_r(n,a,r):[]}function Oo(n){if(!(n&&n.length))return[];var r=0;return n=hr(n,function(s){if(xe(s))return r=We(s.length,r),!0}),Yi(r,function(s){return je(n,Ui(s))})}function Zu(n,r){if(!(n&&n.length))return[];var s=Oo(n);return r==null?s:je(s,function(u){return yn(r,a,u)})}var ZT=me(function(n,r){return xe(n)?Dt(n,r):[]}),QT=me(function(n){return vo(hr(n,xe))}),ep=me(function(n){var r=Bn(n);return xe(r)&&(r=a),vo(hr(n,xe),le(r,2))}),np=me(function(n){var r=Bn(n);return r=typeof r=="function"?r:a,vo(hr(n,xe),a,r)}),rp=me(Oo);function tp(n,r){return mu(n||[],r||[],Kt)}function ap(n,r){return mu(n||[],r||[],Mt)}var ip=me(function(n){var r=n.length,s=r>1?n[r-1]:a;return s=typeof s=="function"?(n.pop(),s):a,Zu(n,s)});function Qu(n){var r=E(n);return r.__chain__=!0,r}function op(n,r){return r(n),n}function wa(n,r){return r(n)}var sp=kr(function(n){var r=n.length,s=r?n[0]:0,u=this.__wrapped__,g=function(T){return Qi(T,n)};return r>1||this.__actions__.length||!(u instanceof pe)||!gr(s)?this.thru(g):(u=u.slice(s,+s+(r?1:0)),u.__actions__.push({func:wa,args:[g],thisArg:a}),new Fn(u,this.__chain__).thru(function(T){return r&&!T.length&&T.push(a),T}))});function lp(){return Qu(this)}function up(){return new Fn(this.value(),this.__chain__)}function dp(){this.__values__===a&&(this.__values__=vd(this.value()));var n=this.__index__>=this.__values__.length,r=n?a:this.__values__[this.__index__++];return{done:n,value:r}}function kp(){return this}function gp(n){for(var r,s=this;s instanceof _a;){var u=Cu(s);u.__index__=0,u.__values__=a,r?g.__wrapped__=u:r=u;var g=u;s=s.__wrapped__}return g.__wrapped__=n,r}function vp(){var n=this.__wrapped__;if(n instanceof pe){var r=n;return this.__actions__.length&&(r=new pe(this)),r=r.reverse(),r.__actions__.push({func:wa,args:[Io],thisArg:a}),new Fn(r,this.__chain__)}return this.thru(Io)}function Ep(){return fu(this.__wrapped__,this.__actions__)}var fp=Ka(function(n,r,s){Oe.call(n,s)?++n[s]:ur(n,s,1)});function mp(n,r,s){var u=ve(n)?Il:om;return s&&un(n,r,s)&&(r=a),u(n,le(r,3))}function Tp(n,r){var s=ve(n)?hr:Zl;return s(n,le(r,3))}var pp=Nu($u),hp=Nu(Ju);function Ap(n,r){return rn(Ha(n,r),1)}function cp(n,r){return rn(Ha(n,r),Z)}function yp(n,r,s){return s=s===a?1:Ee(s),rn(Ha(n,r),s)}function ed(n,r){var s=ve(n)?Dn:Rr;return s(n,le(r,3))}function nd(n,r){var s=ve(n)?HE:Xl;return s(n,le(r,3))}var Rp=Ka(function(n,r,s){Oe.call(n,s)?n[s].push(r):ur(n,s,[r])});function _p(n,r,s,u){n=mn(n)?n:dt(n),s=s&&!u?Ee(s):0;var g=n.length;return s<0&&(s=We(g+s,0)),Ya(n)?s<=g&&n.indexOf(r,s)>-1:!!g&&Zr(n,r,s)>-1}var bp=me(function(n,r,s){var u=-1,g=typeof r=="function",T=mn(n)?S(n.length):[];return Rr(n,function(h){T[++u]=g?yn(r,h,s):Pt(h,r,s)}),T}),Np=Ka(function(n,r,s){ur(n,s,r)});function Ha(n,r){var s=ve(n)?je:au;return s(n,le(r,3))}function Sp(n,r,s,u){return n==null?[]:(ve(r)||(r=r==null?[]:[r]),s=u?a:s,ve(s)||(s=s==null?[]:[s]),lu(n,r,s))}var Ip=Ka(function(n,r,s){n[s?0:1].push(r)},function(){return[[],[]]});function Op(n,r,s){var u=ve(n)?Hi:Dl,g=arguments.length<3;return u(n,le(r,4),s,g,Rr)}function Lp(n,r,s){var u=ve(n)?VE:Dl,g=arguments.length<3;return u(n,le(r,4),s,g,Xl)}function Kp(n,r){var s=ve(n)?hr:Zl;return s(n,qa(le(r,3)))}function Dp(n){var r=ve(n)?$l:_m;return r(n)}function Pp(n,r,s){(s?un(n,r,s):r===a)?r=1:r=Ee(r);var u=ve(n)?nm:bm;return u(n,r)}function Fp(n){var r=ve(n)?rm:Sm;return r(n)}function Mp(n){if(n==null)return 0;if(mn(n))return Ya(n)?et(n):n.length;var r=sn(n);return r==an||r==qn?n.size:io(n).length}function Gp(n,r,s){var u=ve(n)?Vi:Im;return s&&un(n,r,s)&&(r=a),u(n,le(r,3))}var Bp=me(function(n,r){if(n==null)return[];var s=r.length;return s>1&&un(n,r[0],r[1])?r=[]:s>2&&un(r[0],r[1],r[2])&&(r=[r[0]]),lu(n,rn(r,1),[])}),Va=Tf||function(){return nn.Date.now()};function jp(n,r){if(typeof r!="function")throw new Pn(d);return n=Ee(n),function(){if(--n<1)return r.apply(this,arguments)}}function rd(n,r,s){return r=s?a:r,r=n&&r==null?n.length:r,dr(n,O,a,a,a,a,r)}function td(n,r){var s;if(typeof r!="function")throw new Pn(d);return n=Ee(n),function(){return--n>0&&(s=r.apply(this,arguments)),n<=1&&(r=a),s}}var Lo=me(function(n,r,s){var u=N;if(s.length){var g=cr(s,lt(Lo));u|=L}return dr(n,u,r,s,g)}),ad=me(function(n,r,s){var u=N|P;if(s.length){var g=cr(s,lt(ad));u|=L}return dr(r,u,n,s,g)});function id(n,r,s){r=s?a:r;var u=dr(n,K,a,a,a,a,a,r);return u.placeholder=id.placeholder,u}function od(n,r,s){r=s?a:r;var u=dr(n,ee,a,a,a,a,a,r);return u.placeholder=od.placeholder,u}function sd(n,r,s){var u,g,T,h,c,_,B=0,j=!1,H=!1,X=!0;if(typeof n!="function")throw new Pn(d);r=jn(r)||0,He(s)&&(j=!!s.leading,H="maxWait"in s,T=H?We(jn(s.maxWait)||0,r):T,X="trailing"in s?!!s.trailing:X);function ae(Ye){var $n=u,fr=g;return u=g=a,B=Ye,h=n.apply(fr,$n),h}function de(Ye){return B=Ye,c=jt(Te,r),j?ae(Ye):h}function fe(Ye){var $n=Ye-_,fr=Ye-B,Nd=r-$n;return H?on(Nd,T-fr):Nd}function ke(Ye){var $n=Ye-_,fr=Ye-B;return _===a||$n>=r||$n<0||H&&fr>=T}function Te(){var Ye=Va();if(ke(Ye))return he(Ye);c=jt(Te,fe(Ye))}function he(Ye){return c=a,X&&u?ae(Ye):(u=g=a,h)}function Nn(){c!==a&&Tu(c),B=0,u=_=g=c=a}function dn(){return c===a?h:he(Va())}function Sn(){var Ye=Va(),$n=ke(Ye);if(u=arguments,g=this,_=Ye,$n){if(c===a)return de(_);if(H)return Tu(c),c=jt(Te,r),ae(_)}return c===a&&(c=jt(Te,r)),h}return Sn.cancel=Nn,Sn.flush=dn,Sn}var wp=me(function(n,r){return zl(n,1,r)}),Hp=me(function(n,r,s){return zl(n,jn(r)||0,s)});function Vp(n){return dr(n,J)}function Ua(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new Pn(d);var s=function(){var u=arguments,g=r?r.apply(this,u):u[0],T=s.cache;if(T.has(g))return T.get(g);var h=n.apply(this,u);return s.cache=T.set(g,h)||T,h};return s.cache=new(Ua.Cache||lr),s}Ua.Cache=lr;function qa(n){if(typeof n!="function")throw new Pn(d);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function Up(n){return td(2,n)}var qp=Om(function(n,r){r=r.length==1&&ve(r[0])?je(r[0],Rn(le())):je(rn(r,1),Rn(le()));var s=r.length;return me(function(u){for(var g=-1,T=on(u.length,s);++g<T;)u[g]=r[g].call(this,u[g]);return yn(n,this,u)})}),Ko=me(function(n,r){var s=cr(r,lt(Ko));return dr(n,L,a,r,s)}),ld=me(function(n,r){var s=cr(r,lt(ld));return dr(n,U,a,r,s)}),xp=kr(function(n,r){return dr(n,b,a,a,a,r)});function Yp(n,r){if(typeof n!="function")throw new Pn(d);return r=r===a?r:Ee(r),me(n,r)}function Cp(n,r){if(typeof n!="function")throw new Pn(d);return r=r==null?0:We(Ee(r),0),me(function(s){var u=s[r],g=Nr(s,0,r);return u&&Ar(g,u),yn(n,this,g)})}function $p(n,r,s){var u=!0,g=!0;if(typeof n!="function")throw new Pn(d);return He(s)&&(u="leading"in s?!!s.leading:u,g="trailing"in s?!!s.trailing:g),sd(n,r,{leading:u,maxWait:r,trailing:g})}function Jp(n){return rd(n,1)}function Wp(n,r){return Ko(fo(r),n)}function zp(){if(!arguments.length)return[];var n=arguments[0];return ve(n)?n:[n]}function Xp(n){return Mn(n,I)}function Zp(n,r){return r=typeof r=="function"?r:a,Mn(n,I,r)}function Qp(n){return Mn(n,p|I)}function eh(n,r){return r=typeof r=="function"?r:a,Mn(n,p|I,r)}function nh(n,r){return r==null||Wl(n,r,Xe(r))}function Cn(n,r){return n===r||n!==n&&r!==r}var rh=Ma(ro),th=Ma(function(n,r){return n>=r}),wr=nu(function(){return arguments}())?nu:function(n){return Ue(n)&&Oe.call(n,"callee")&&!Vl.call(n,"callee")},ve=S.isArray,ah=yl?Rn(yl):gm;function mn(n){return n!=null&&xa(n.length)&&!vr(n)}function xe(n){return Ue(n)&&mn(n)}function ih(n){return n===!0||n===!1||Ue(n)&&ln(n)==An}var Sr=hf||Uo,oh=Rl?Rn(Rl):vm;function sh(n){return Ue(n)&&n.nodeType===1&&!wt(n)}function lh(n){if(n==null)return!0;if(mn(n)&&(ve(n)||typeof n=="string"||typeof n.splice=="function"||Sr(n)||ut(n)||wr(n)))return!n.length;var r=sn(n);if(r==an||r==qn)return!n.size;if(Bt(n))return!io(n).length;for(var s in n)if(Oe.call(n,s))return!1;return!0}function uh(n,r){return Ft(n,r)}function dh(n,r,s){s=typeof s=="function"?s:a;var u=s?s(n,r):a;return u===a?Ft(n,r,a,s):!!u}function Do(n){if(!Ue(n))return!1;var r=ln(n);return r==en||r==$e||typeof n.message=="string"&&typeof n.name=="string"&&!wt(n)}function kh(n){return typeof n=="number"&&ql(n)}function vr(n){if(!He(n))return!1;var r=ln(n);return r==En||r==Un||r==Vn||r==At}function ud(n){return typeof n=="number"&&n==Ee(n)}function xa(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=w}function He(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function Ue(n){return n!=null&&typeof n=="object"}var dd=_l?Rn(_l):fm;function gh(n,r){return n===r||ao(n,r,yo(r))}function vh(n,r,s){return s=typeof s=="function"?s:a,ao(n,r,yo(r),s)}function Eh(n){return kd(n)&&n!=+n}function fh(n){if(Zm(n))throw new ge(l);return ru(n)}function mh(n){return n===null}function Th(n){return n==null}function kd(n){return typeof n=="number"||Ue(n)&&ln(n)==Xn}function wt(n){if(!Ue(n)||ln(n)!=cn)return!1;var r=Ta(n);if(r===null)return!0;var s=Oe.call(r,"constructor")&&r.constructor;return typeof s=="function"&&s instanceof s&&va.call(s)==vf}var Po=bl?Rn(bl):mm;function ph(n){return ud(n)&&n>=-w&&n<=w}var gd=Nl?Rn(Nl):Tm;function Ya(n){return typeof n=="string"||!ve(n)&&Ue(n)&&ln(n)==yt}function bn(n){return typeof n=="symbol"||Ue(n)&&ln(n)==aa}var ut=Sl?Rn(Sl):pm;function hh(n){return n===a}function Ah(n){return Ue(n)&&sn(n)==Rt}function ch(n){return Ue(n)&&ln(n)==Gv}var yh=Ma(oo),Rh=Ma(function(n,r){return n<=r});function vd(n){if(!n)return[];if(mn(n))return Ya(n)?xn(n):fn(n);if(Nt&&n[Nt])return ef(n[Nt]());var r=sn(n),s=r==an?$i:r==qn?da:dt;return s(n)}function Er(n){if(!n)return n===0?n:0;if(n=jn(n),n===Z||n===-Z){var r=n<0?-1:1;return r*te}return n===n?n:0}function Ee(n){var r=Er(n),s=r%1;return r===r?s?r-s:r:0}function Ed(n){return n?Mr(Ee(n),0,ue):0}function jn(n){if(typeof n=="number")return n;if(bn(n))return ie;if(He(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=He(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=Pl(n);var s=tE.test(n);return s||iE.test(n)?BE(n.slice(2),s?2:8):rE.test(n)?ie:+n}function fd(n){return Qn(n,Tn(n))}function _h(n){return n?Mr(Ee(n),-w,w):n===0?n:0}function Ne(n){return n==null?"":_n(n)}var bh=ot(function(n,r){if(Bt(r)||mn(r)){Qn(r,Xe(r),n);return}for(var s in r)Oe.call(r,s)&&Kt(n,s,r[s])}),md=ot(function(n,r){Qn(r,Tn(r),n)}),Ca=ot(function(n,r,s,u){Qn(r,Tn(r),n,u)}),Nh=ot(function(n,r,s,u){Qn(r,Xe(r),n,u)}),Sh=kr(Qi);function Ih(n,r){var s=it(n);return r==null?s:Jl(s,r)}var Oh=me(function(n,r){n=Pe(n);var s=-1,u=r.length,g=u>2?r[2]:a;for(g&&un(r[0],r[1],g)&&(u=1);++s<u;)for(var T=r[s],h=Tn(T),c=-1,_=h.length;++c<_;){var B=h[c],j=n[B];(j===a||Cn(j,rt[B])&&!Oe.call(n,B))&&(n[B]=T[B])}return n}),Lh=me(function(n){return n.push(a,Pu),yn(Td,a,n)});function Kh(n,r){return Ol(n,le(r,3),Zn)}function Dh(n,r){return Ol(n,le(r,3),no)}function Ph(n,r){return n==null?n:eo(n,le(r,3),Tn)}function Fh(n,r){return n==null?n:Ql(n,le(r,3),Tn)}function Mh(n,r){return n&&Zn(n,le(r,3))}function Gh(n,r){return n&&no(n,le(r,3))}function Bh(n){return n==null?[]:Sa(n,Xe(n))}function jh(n){return n==null?[]:Sa(n,Tn(n))}function Fo(n,r,s){var u=n==null?a:Gr(n,r);return u===a?s:u}function wh(n,r){return n!=null&&Gu(n,r,lm)}function Mo(n,r){return n!=null&&Gu(n,r,um)}var Hh=Iu(function(n,r,s){r!=null&&typeof r.toString!="function"&&(r=Ea.call(r)),n[r]=s},Bo(pn)),Vh=Iu(function(n,r,s){r!=null&&typeof r.toString!="function"&&(r=Ea.call(r)),Oe.call(n,r)?n[r].push(s):n[r]=[s]},le),Uh=me(Pt);function Xe(n){return mn(n)?Cl(n):io(n)}function Tn(n){return mn(n)?Cl(n,!0):hm(n)}function qh(n,r){var s={};return r=le(r,3),Zn(n,function(u,g,T){ur(s,r(u,g,T),u)}),s}function xh(n,r){var s={};return r=le(r,3),Zn(n,function(u,g,T){ur(s,g,r(u,g,T))}),s}var Yh=ot(function(n,r,s){Ia(n,r,s)}),Td=ot(function(n,r,s,u){Ia(n,r,s,u)}),Ch=kr(function(n,r){var s={};if(n==null)return s;var u=!1;r=je(r,function(T){return T=br(T,n),u||(u=T.length>1),T}),Qn(n,Ao(n),s),u&&(s=Mn(s,p|A|I,Hm));for(var g=r.length;g--;)go(s,r[g]);return s});function $h(n,r){return pd(n,qa(le(r)))}var Jh=kr(function(n,r){return n==null?{}:cm(n,r)});function pd(n,r){if(n==null)return{};var s=je(Ao(n),function(u){return[u]});return r=le(r),uu(n,s,function(u,g){return r(u,g[0])})}function Wh(n,r,s){r=br(r,n);var u=-1,g=r.length;for(g||(g=1,n=a);++u<g;){var T=n==null?a:n[er(r[u])];T===a&&(u=g,T=s),n=vr(T)?T.call(n):T}return n}function zh(n,r,s){return n==null?n:Mt(n,r,s)}function Xh(n,r,s,u){return u=typeof u=="function"?u:a,n==null?n:Mt(n,r,s,u)}var hd=Ku(Xe),Ad=Ku(Tn);function Zh(n,r,s){var u=ve(n),g=u||Sr(n)||ut(n);if(r=le(r,4),s==null){var T=n&&n.constructor;g?s=u?new T:[]:He(n)?s=vr(T)?it(Ta(n)):{}:s={}}return(g?Dn:Zn)(n,function(h,c,_){return r(s,h,c,_)}),s}function Qh(n,r){return n==null?!0:go(n,r)}function eA(n,r,s){return n==null?n:Eu(n,r,fo(s))}function nA(n,r,s,u){return u=typeof u=="function"?u:a,n==null?n:Eu(n,r,fo(s),u)}function dt(n){return n==null?[]:Ci(n,Xe(n))}function rA(n){return n==null?[]:Ci(n,Tn(n))}function tA(n,r,s){return s===a&&(s=r,r=a),s!==a&&(s=jn(s),s=s===s?s:0),r!==a&&(r=jn(r),r=r===r?r:0),Mr(jn(n),r,s)}function aA(n,r,s){return r=Er(r),s===a?(s=r,r=0):s=Er(s),n=jn(n),dm(n,r,s)}function iA(n,r,s){if(s&&typeof s!="boolean"&&un(n,r,s)&&(r=s=a),s===a&&(typeof r=="boolean"?(s=r,r=a):typeof n=="boolean"&&(s=n,n=a)),n===a&&r===a?(n=0,r=1):(n=Er(n),r===a?(r=n,n=0):r=Er(r)),n>r){var u=n;n=r,r=u}if(s||n%1||r%1){var g=xl();return on(n+g*(r-n+GE("1e-"+((g+"").length-1))),r)}return lo(n,r)}var oA=st(function(n,r,s){return r=r.toLowerCase(),n+(s?cd(r):r)});function cd(n){return Go(Ne(n).toLowerCase())}function yd(n){return n=Ne(n),n&&n.replace(sE,WE).replace(NE,"")}function sA(n,r,s){n=Ne(n),r=_n(r);var u=n.length;s=s===a?u:Mr(Ee(s),0,u);var g=s;return s-=r.length,s>=0&&n.slice(s,g)==r}function lA(n){return n=Ne(n),n&&Vv.test(n)?n.replace(Qs,zE):n}function uA(n){return n=Ne(n),n&&$v.test(n)?n.replace(Li,"\\$&"):n}var dA=st(function(n,r,s){return n+(s?"-":"")+r.toLowerCase()}),kA=st(function(n,r,s){return n+(s?" ":"")+r.toLowerCase()}),gA=bu("toLowerCase");function vA(n,r,s){n=Ne(n),r=Ee(r);var u=r?et(n):0;if(!r||u>=r)return n;var g=(r-u)/2;return Fa(ca(g),s)+n+Fa(Aa(g),s)}function EA(n,r,s){n=Ne(n),r=Ee(r);var u=r?et(n):0;return r&&u<r?n+Fa(r-u,s):n}function fA(n,r,s){n=Ne(n),r=Ee(r);var u=r?et(n):0;return r&&u<r?Fa(r-u,s)+n:n}function mA(n,r,s){return s||r==null?r=0:r&&(r=+r),Rf(Ne(n).replace(Ki,""),r||0)}function TA(n,r,s){return(s?un(n,r,s):r===a)?r=1:r=Ee(r),uo(Ne(n),r)}function pA(){var n=arguments,r=Ne(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var hA=st(function(n,r,s){return n+(s?"_":"")+r.toLowerCase()});function AA(n,r,s){return s&&typeof s!="number"&&un(n,r,s)&&(r=s=a),s=s===a?ue:s>>>0,s?(n=Ne(n),n&&(typeof r=="string"||r!=null&&!Po(r))&&(r=_n(r),!r&&Qr(n))?Nr(xn(n),0,s):n.split(r,s)):[]}var cA=st(function(n,r,s){return n+(s?" ":"")+Go(r)});function yA(n,r,s){return n=Ne(n),s=s==null?0:Mr(Ee(s),0,n.length),r=_n(r),n.slice(s,s+r.length)==r}function RA(n,r,s){var u=E.templateSettings;s&&un(n,r,s)&&(r=a),n=Ne(n),r=Ca({},r,u,Du);var g=Ca({},r.imports,u.imports,Du),T=Xe(g),h=Ci(g,T),c,_,B=0,j=r.interpolate||ia,H="__p += '",X=Ji((r.escape||ia).source+"|"+j.source+"|"+(j===el?nE:ia).source+"|"+(r.evaluate||ia).source+"|$","g"),ae="//# sourceURL="+(Oe.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++KE+"]")+`
`;n.replace(X,function(ke,Te,he,Nn,dn,Sn){return he||(he=Nn),H+=n.slice(B,Sn).replace(lE,XE),Te&&(c=!0,H+=`' +
__e(`+Te+`) +
'`),dn&&(_=!0,H+=`';
`+dn+`;
__p += '`),he&&(H+=`' +
((__t = (`+he+`)) == null ? '' : __t) +
'`),B=Sn+ke.length,ke}),H+=`';
`;var de=Oe.call(r,"variable")&&r.variable;if(!de)H=`with (obj) {
`+H+`
}
`;else if(Qv.test(de))throw new ge(k);H=(_?H.replace(Bv,""):H).replace(jv,"$1").replace(wv,"$1;"),H="function("+(de||"obj")+`) {
`+(de?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(c?", __e = _.escape":"")+(_?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+H+`return __p
}`;var fe=_d(function(){return _e(T,ae+"return "+H).apply(a,h)});if(fe.source=H,Do(fe))throw fe;return fe}function _A(n){return Ne(n).toLowerCase()}function bA(n){return Ne(n).toUpperCase()}function NA(n,r,s){if(n=Ne(n),n&&(s||r===a))return Pl(n);if(!n||!(r=_n(r)))return n;var u=xn(n),g=xn(r),T=Fl(u,g),h=Ml(u,g)+1;return Nr(u,T,h).join("")}function SA(n,r,s){if(n=Ne(n),n&&(s||r===a))return n.slice(0,Bl(n)+1);if(!n||!(r=_n(r)))return n;var u=xn(n),g=Ml(u,xn(r))+1;return Nr(u,0,g).join("")}function IA(n,r,s){if(n=Ne(n),n&&(s||r===a))return n.replace(Ki,"");if(!n||!(r=_n(r)))return n;var u=xn(n),g=Fl(u,xn(r));return Nr(u,g).join("")}function OA(n,r){var s=W,u=x;if(He(r)){var g="separator"in r?r.separator:g;s="length"in r?Ee(r.length):s,u="omission"in r?_n(r.omission):u}n=Ne(n);var T=n.length;if(Qr(n)){var h=xn(n);T=h.length}if(s>=T)return n;var c=s-et(u);if(c<1)return u;var _=h?Nr(h,0,c).join(""):n.slice(0,c);if(g===a)return _+u;if(h&&(c+=_.length-c),Po(g)){if(n.slice(c).search(g)){var B,j=_;for(g.global||(g=Ji(g.source,Ne(nl.exec(g))+"g")),g.lastIndex=0;B=g.exec(j);)var H=B.index;_=_.slice(0,H===a?c:H)}}else if(n.indexOf(_n(g),c)!=c){var X=_.lastIndexOf(g);X>-1&&(_=_.slice(0,X))}return _+u}function LA(n){return n=Ne(n),n&&Hv.test(n)?n.replace(Zs,af):n}var KA=st(function(n,r,s){return n+(s?" ":"")+r.toUpperCase()}),Go=bu("toUpperCase");function Rd(n,r,s){return n=Ne(n),r=s?a:r,r===a?QE(n)?lf(n):xE(n):n.match(r)||[]}var _d=me(function(n,r){try{return yn(n,a,r)}catch(s){return Do(s)?s:new ge(s)}}),DA=kr(function(n,r){return Dn(r,function(s){s=er(s),ur(n,s,Lo(n[s],n))}),n});function PA(n){var r=n==null?0:n.length,s=le();return n=r?je(n,function(u){if(typeof u[1]!="function")throw new Pn(d);return[s(u[0]),u[1]]}):[],me(function(u){for(var g=-1;++g<r;){var T=n[g];if(yn(T[0],this,u))return yn(T[1],this,u)}})}function FA(n){return im(Mn(n,p))}function Bo(n){return function(){return n}}function MA(n,r){return n==null||n!==n?r:n}var GA=Su(),BA=Su(!0);function pn(n){return n}function jo(n){return tu(typeof n=="function"?n:Mn(n,p))}function jA(n){return iu(Mn(n,p))}function wA(n,r){return ou(n,Mn(r,p))}var HA=me(function(n,r){return function(s){return Pt(s,n,r)}}),VA=me(function(n,r){return function(s){return Pt(n,s,r)}});function wo(n,r,s){var u=Xe(r),g=Sa(r,u);s==null&&!(He(r)&&(g.length||!u.length))&&(s=r,r=n,n=this,g=Sa(r,Xe(r)));var T=!(He(s)&&"chain"in s)||!!s.chain,h=vr(n);return Dn(g,function(c){var _=r[c];n[c]=_,h&&(n.prototype[c]=function(){var B=this.__chain__;if(T||B){var j=n(this.__wrapped__),H=j.__actions__=fn(this.__actions__);return H.push({func:_,args:arguments,thisArg:n}),j.__chain__=B,j}return _.apply(n,Ar([this.value()],arguments))})}),n}function UA(){return nn._===this&&(nn._=Ef),this}function Ho(){}function qA(n){return n=Ee(n),me(function(r){return su(r,n)})}var xA=To(je),YA=To(Il),CA=To(Vi);function bd(n){return _o(n)?Ui(er(n)):ym(n)}function $A(n){return function(r){return n==null?a:Gr(n,r)}}var JA=Ou(),WA=Ou(!0);function Vo(){return[]}function Uo(){return!1}function zA(){return{}}function XA(){return""}function ZA(){return!0}function QA(n,r){if(n=Ee(n),n<1||n>w)return[];var s=ue,u=on(n,ue);r=le(r),n-=ue;for(var g=Yi(u,r);++s<n;)r(s);return g}function ec(n){return ve(n)?je(n,er):bn(n)?[n]:fn(Yu(Ne(n)))}function nc(n){var r=++gf;return Ne(n)+r}var rc=Pa(function(n,r){return n+r},0),tc=po("ceil"),ac=Pa(function(n,r){return n/r},1),ic=po("floor");function oc(n){return n&&n.length?Na(n,pn,ro):a}function sc(n,r){return n&&n.length?Na(n,le(r,2),ro):a}function lc(n){return Kl(n,pn)}function uc(n,r){return Kl(n,le(r,2))}function dc(n){return n&&n.length?Na(n,pn,oo):a}function kc(n,r){return n&&n.length?Na(n,le(r,2),oo):a}var gc=Pa(function(n,r){return n*r},1),vc=po("round"),Ec=Pa(function(n,r){return n-r},0);function fc(n){return n&&n.length?xi(n,pn):0}function mc(n,r){return n&&n.length?xi(n,le(r,2)):0}return E.after=jp,E.ary=rd,E.assign=bh,E.assignIn=md,E.assignInWith=Ca,E.assignWith=Nh,E.at=Sh,E.before=td,E.bind=Lo,E.bindAll=DA,E.bindKey=ad,E.castArray=zp,E.chain=Qu,E.chunk=iT,E.compact=oT,E.concat=sT,E.cond=PA,E.conforms=FA,E.constant=Bo,E.countBy=fp,E.create=Ih,E.curry=id,E.curryRight=od,E.debounce=sd,E.defaults=Oh,E.defaultsDeep=Lh,E.defer=wp,E.delay=Hp,E.difference=lT,E.differenceBy=uT,E.differenceWith=dT,E.drop=kT,E.dropRight=gT,E.dropRightWhile=vT,E.dropWhile=ET,E.fill=fT,E.filter=Tp,E.flatMap=Ap,E.flatMapDeep=cp,E.flatMapDepth=yp,E.flatten=Wu,E.flattenDeep=mT,E.flattenDepth=TT,E.flip=Vp,E.flow=GA,E.flowRight=BA,E.fromPairs=pT,E.functions=Bh,E.functionsIn=jh,E.groupBy=Rp,E.initial=AT,E.intersection=cT,E.intersectionBy=yT,E.intersectionWith=RT,E.invert=Hh,E.invertBy=Vh,E.invokeMap=bp,E.iteratee=jo,E.keyBy=Np,E.keys=Xe,E.keysIn=Tn,E.map=Ha,E.mapKeys=qh,E.mapValues=xh,E.matches=jA,E.matchesProperty=wA,E.memoize=Ua,E.merge=Yh,E.mergeWith=Td,E.method=HA,E.methodOf=VA,E.mixin=wo,E.negate=qa,E.nthArg=qA,E.omit=Ch,E.omitBy=$h,E.once=Up,E.orderBy=Sp,E.over=xA,E.overArgs=qp,E.overEvery=YA,E.overSome=CA,E.partial=Ko,E.partialRight=ld,E.partition=Ip,E.pick=Jh,E.pickBy=pd,E.property=bd,E.propertyOf=$A,E.pull=ST,E.pullAll=Xu,E.pullAllBy=IT,E.pullAllWith=OT,E.pullAt=LT,E.range=JA,E.rangeRight=WA,E.rearg=xp,E.reject=Kp,E.remove=KT,E.rest=Yp,E.reverse=Io,E.sampleSize=Pp,E.set=zh,E.setWith=Xh,E.shuffle=Fp,E.slice=DT,E.sortBy=Bp,E.sortedUniq=wT,E.sortedUniqBy=HT,E.split=AA,E.spread=Cp,E.tail=VT,E.take=UT,E.takeRight=qT,E.takeRightWhile=xT,E.takeWhile=YT,E.tap=op,E.throttle=$p,E.thru=wa,E.toArray=vd,E.toPairs=hd,E.toPairsIn=Ad,E.toPath=ec,E.toPlainObject=fd,E.transform=Zh,E.unary=Jp,E.union=CT,E.unionBy=$T,E.unionWith=JT,E.uniq=WT,E.uniqBy=zT,E.uniqWith=XT,E.unset=Qh,E.unzip=Oo,E.unzipWith=Zu,E.update=eA,E.updateWith=nA,E.values=dt,E.valuesIn=rA,E.without=ZT,E.words=Rd,E.wrap=Wp,E.xor=QT,E.xorBy=ep,E.xorWith=np,E.zip=rp,E.zipObject=tp,E.zipObjectDeep=ap,E.zipWith=ip,E.entries=hd,E.entriesIn=Ad,E.extend=md,E.extendWith=Ca,wo(E,E),E.add=rc,E.attempt=_d,E.camelCase=oA,E.capitalize=cd,E.ceil=tc,E.clamp=tA,E.clone=Xp,E.cloneDeep=Qp,E.cloneDeepWith=eh,E.cloneWith=Zp,E.conformsTo=nh,E.deburr=yd,E.defaultTo=MA,E.divide=ac,E.endsWith=sA,E.eq=Cn,E.escape=lA,E.escapeRegExp=uA,E.every=mp,E.find=pp,E.findIndex=$u,E.findKey=Kh,E.findLast=hp,E.findLastIndex=Ju,E.findLastKey=Dh,E.floor=ic,E.forEach=ed,E.forEachRight=nd,E.forIn=Ph,E.forInRight=Fh,E.forOwn=Mh,E.forOwnRight=Gh,E.get=Fo,E.gt=rh,E.gte=th,E.has=wh,E.hasIn=Mo,E.head=zu,E.identity=pn,E.includes=_p,E.indexOf=hT,E.inRange=aA,E.invoke=Uh,E.isArguments=wr,E.isArray=ve,E.isArrayBuffer=ah,E.isArrayLike=mn,E.isArrayLikeObject=xe,E.isBoolean=ih,E.isBuffer=Sr,E.isDate=oh,E.isElement=sh,E.isEmpty=lh,E.isEqual=uh,E.isEqualWith=dh,E.isError=Do,E.isFinite=kh,E.isFunction=vr,E.isInteger=ud,E.isLength=xa,E.isMap=dd,E.isMatch=gh,E.isMatchWith=vh,E.isNaN=Eh,E.isNative=fh,E.isNil=Th,E.isNull=mh,E.isNumber=kd,E.isObject=He,E.isObjectLike=Ue,E.isPlainObject=wt,E.isRegExp=Po,E.isSafeInteger=ph,E.isSet=gd,E.isString=Ya,E.isSymbol=bn,E.isTypedArray=ut,E.isUndefined=hh,E.isWeakMap=Ah,E.isWeakSet=ch,E.join=_T,E.kebabCase=dA,E.last=Bn,E.lastIndexOf=bT,E.lowerCase=kA,E.lowerFirst=gA,E.lt=yh,E.lte=Rh,E.max=oc,E.maxBy=sc,E.mean=lc,E.meanBy=uc,E.min=dc,E.minBy=kc,E.stubArray=Vo,E.stubFalse=Uo,E.stubObject=zA,E.stubString=XA,E.stubTrue=ZA,E.multiply=gc,E.nth=NT,E.noConflict=UA,E.noop=Ho,E.now=Va,E.pad=vA,E.padEnd=EA,E.padStart=fA,E.parseInt=mA,E.random=iA,E.reduce=Op,E.reduceRight=Lp,E.repeat=TA,E.replace=pA,E.result=Wh,E.round=vc,E.runInContext=y,E.sample=Dp,E.size=Mp,E.snakeCase=hA,E.some=Gp,E.sortedIndex=PT,E.sortedIndexBy=FT,E.sortedIndexOf=MT,E.sortedLastIndex=GT,E.sortedLastIndexBy=BT,E.sortedLastIndexOf=jT,E.startCase=cA,E.startsWith=yA,E.subtract=Ec,E.sum=fc,E.sumBy=mc,E.template=RA,E.times=QA,E.toFinite=Er,E.toInteger=Ee,E.toLength=Ed,E.toLower=_A,E.toNumber=jn,E.toSafeInteger=_h,E.toString=Ne,E.toUpper=bA,E.trim=NA,E.trimEnd=SA,E.trimStart=IA,E.truncate=OA,E.unescape=LA,E.uniqueId=nc,E.upperCase=KA,E.upperFirst=Go,E.each=ed,E.eachRight=nd,E.first=zu,wo(E,function(){var n={};return Zn(E,function(r,s){Oe.call(E.prototype,s)||(n[s]=r)}),n}(),{chain:!1}),E.VERSION=t,Dn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){E[n].placeholder=E}),Dn(["drop","take"],function(n,r){pe.prototype[n]=function(s){s=s===a?1:We(Ee(s),0);var u=this.__filtered__&&!r?new pe(this):this.clone();return u.__filtered__?u.__takeCount__=on(s,u.__takeCount__):u.__views__.push({size:on(s,ue),type:n+(u.__dir__<0?"Right":"")}),u},pe.prototype[n+"Right"]=function(s){return this.reverse()[n](s).reverse()}}),Dn(["filter","map","takeWhile"],function(n,r){var s=r+1,u=s==C||s==Y;pe.prototype[n]=function(g){var T=this.clone();return T.__iteratees__.push({iteratee:le(g,3),type:s}),T.__filtered__=T.__filtered__||u,T}}),Dn(["head","last"],function(n,r){var s="take"+(r?"Right":"");pe.prototype[n]=function(){return this[s](1).value()[0]}}),Dn(["initial","tail"],function(n,r){var s="drop"+(r?"":"Right");pe.prototype[n]=function(){return this.__filtered__?new pe(this):this[s](1)}}),pe.prototype.compact=function(){return this.filter(pn)},pe.prototype.find=function(n){return this.filter(n).head()},pe.prototype.findLast=function(n){return this.reverse().find(n)},pe.prototype.invokeMap=me(function(n,r){return typeof n=="function"?new pe(this):this.map(function(s){return Pt(s,n,r)})}),pe.prototype.reject=function(n){return this.filter(qa(le(n)))},pe.prototype.slice=function(n,r){n=Ee(n);var s=this;return s.__filtered__&&(n>0||r<0)?new pe(s):(n<0?s=s.takeRight(-n):n&&(s=s.drop(n)),r!==a&&(r=Ee(r),s=r<0?s.dropRight(-r):s.take(r-n)),s)},pe.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},pe.prototype.toArray=function(){return this.take(ue)},Zn(pe.prototype,function(n,r){var s=/^(?:filter|find|map|reject)|While$/.test(r),u=/^(?:head|last)$/.test(r),g=E[u?"take"+(r=="last"?"Right":""):r],T=u||/^find/.test(r);g&&(E.prototype[r]=function(){var h=this.__wrapped__,c=u?[1]:arguments,_=h instanceof pe,B=c[0],j=_||ve(h),H=function(Te){var he=g.apply(E,Ar([Te],c));return u&&X?he[0]:he};j&&s&&typeof B=="function"&&B.length!=1&&(_=j=!1);var X=this.__chain__,ae=!!this.__actions__.length,de=T&&!X,fe=_&&!ae;if(!T&&j){h=fe?h:new pe(this);var ke=n.apply(h,c);return ke.__actions__.push({func:wa,args:[H],thisArg:a}),new Fn(ke,X)}return de&&fe?n.apply(this,c):(ke=this.thru(H),de?u?ke.value()[0]:ke.value():ke)})}),Dn(["pop","push","shift","sort","splice","unshift"],function(n){var r=ka[n],s=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",u=/^(?:pop|shift)$/.test(n);E.prototype[n]=function(){var g=arguments;if(u&&!this.__chain__){var T=this.value();return r.apply(ve(T)?T:[],g)}return this[s](function(h){return r.apply(ve(h)?h:[],g)})}}),Zn(pe.prototype,function(n,r){var s=E[r];if(s){var u=s.name+"";Oe.call(at,u)||(at[u]=[]),at[u].push({name:r,func:s})}}),at[Da(a,P).name]=[{name:"wrapper",func:a}],pe.prototype.clone=Lf,pe.prototype.reverse=Kf,pe.prototype.value=Df,E.prototype.at=sp,E.prototype.chain=lp,E.prototype.commit=up,E.prototype.next=dp,E.prototype.plant=gp,E.prototype.reverse=vp,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=Ep,E.prototype.first=E.prototype.head,Nt&&(E.prototype[Nt]=kp),E},nt=uf();Kr?((Kr.exports=nt)._=nt,Bi._=nt):nn._=nt}).call(Ht)})(ei,ei.exports);ei.exports;vn(mi);const Vg=D.forwardRef((e,i)=>G.jsx(kt,{gap:"2",style:{display:"flex"},...e,ref:i}));Vg.displayName="FaktaGruppe";Vg.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var yS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function a(){for(var l="",d=0;d<arguments.length;d++){var k=arguments[d];k&&(l=o(l,t(k)))}return l}function t(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return a.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var k in l)i.call(l,k)&&l[k]&&(d=o(d,k));return d}function o(l,d){return d?l?l+" "+d:l+d:l}e.exports?(a.default=a,e.exports=a):window.classNames=a})()})(yS);var RS=Object.defineProperty,_S=(e,i,a)=>i in e?RS(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,ok=(e,i,a)=>_S(e,typeof i!="symbol"?i+"":i,a),bS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ug(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qg={exports:{}},Yt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sk;function NS(){if(sk)return Yt;sk=1;var e=V,i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(k,v,m){var f,p={},A=null,I=null;m!==void 0&&(A=""+m),v.key!==void 0&&(A=""+v.key),v.ref!==void 0&&(I=v.ref);for(f in v)t.call(v,f)&&!l.hasOwnProperty(f)&&(p[f]=v[f]);if(k&&k.defaultProps)for(f in v=k.defaultProps,v)p[f]===void 0&&(p[f]=v[f]);return{$$typeof:i,type:k,key:A,ref:I,props:p,_owner:o.current}}return Yt.Fragment=a,Yt.jsx=d,Yt.jsxs=d,Yt}qg.exports=NS();var mr=qg.exports,xg={exports:{}};(function(e,i){(function(a,t){e.exports=t()})(bS,function(){var a=1e3,t=6e4,o=36e5,l="millisecond",d="second",k="minute",v="hour",m="day",f="week",p="month",A="quarter",I="year",M="date",R="Invalid Date",N=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,P=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(C){var $=["th","st","nd","rd"],Y=C%100;return"["+C+($[(Y-20)%10]||$[Y]||$[0])+"]"}},K=function(C,$,Y){var Z=String(C);return!Z||Z.length>=$?C:""+Array($+1-Z.length).join(Y)+C},ee={s:K,z:function(C){var $=-C.utcOffset(),Y=Math.abs($),Z=Math.floor(Y/60),w=Y%60;return($<=0?"+":"-")+K(Z,2,"0")+":"+K(w,2,"0")},m:function C($,Y){if($.date()<Y.date())return-C(Y,$);var Z=12*(Y.year()-$.year())+(Y.month()-$.month()),w=$.clone().add(Z,p),te=Y-w<0,ie=$.clone().add(Z+(te?-1:1),p);return+(-(Z+(Y-w)/(te?w-ie:ie-w))||0)},a:function(C){return C<0?Math.ceil(C)||0:Math.floor(C)},p:function(C){return{M:p,y:I,w:f,d:m,D:M,h:v,m:k,s:d,ms:l,Q:A}[C]||String(C||"").toLowerCase().replace(/s$/,"")},u:function(C){return C===void 0}},L="en",U={};U[L]=q;var O="$isDayjsObject",b=function(C){return C instanceof z||!(!C||!C[O])},J=function C($,Y,Z){var w;if(!$)return L;if(typeof $=="string"){var te=$.toLowerCase();U[te]&&(w=te),Y&&(U[te]=Y,w=te);var ie=$.split("-");if(!w&&ie.length>1)return C(ie[0])}else{var ue=$.name;U[ue]=$,w=ue}return!Z&&w&&(L=w),w||!Z&&L},W=function(C,$){if(b(C))return C.clone();var Y=typeof $=="object"?$:{};return Y.date=C,Y.args=arguments,new z(Y)},x=ee;x.l=J,x.i=b,x.w=function(C,$){return W(C,{locale:$.$L,utc:$.$u,x:$.$x,$offset:$.$offset})};var z=function(){function C(Y){this.$L=J(Y.locale,null,!0),this.parse(Y),this.$x=this.$x||Y.x||{},this[O]=!0}var $=C.prototype;return $.parse=function(Y){this.$d=function(Z){var w=Z.date,te=Z.utc;if(w===null)return new Date(NaN);if(x.u(w))return new Date;if(w instanceof Date)return new Date(w);if(typeof w=="string"&&!/Z$/i.test(w)){var ie=w.match(N);if(ie){var ue=ie[2]-1||0,De=(ie[7]||"0").substring(0,3);return te?new Date(Date.UTC(ie[1],ue,ie[3]||1,ie[4]||0,ie[5]||0,ie[6]||0,De)):new Date(ie[1],ue,ie[3]||1,ie[4]||0,ie[5]||0,ie[6]||0,De)}}return new Date(w)}(Y),this.init()},$.init=function(){var Y=this.$d;this.$y=Y.getFullYear(),this.$M=Y.getMonth(),this.$D=Y.getDate(),this.$W=Y.getDay(),this.$H=Y.getHours(),this.$m=Y.getMinutes(),this.$s=Y.getSeconds(),this.$ms=Y.getMilliseconds()},$.$utils=function(){return x},$.isValid=function(){return this.$d.toString()!==R},$.isSame=function(Y,Z){var w=W(Y);return this.startOf(Z)<=w&&w<=this.endOf(Z)},$.isAfter=function(Y,Z){return W(Y)<this.startOf(Z)},$.isBefore=function(Y,Z){return this.endOf(Z)<W(Y)},$.$g=function(Y,Z,w){return x.u(Y)?this[Z]:this.set(w,Y)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(Y,Z){var w=this,te=!!x.u(Z)||Z,ie=x.p(Y),ue=function(tn,$e){var en=x.w(w.$u?Date.UTC(w.$y,$e,tn):new Date(w.$y,$e,tn),w);return te?en:en.endOf(m)},De=function(tn,$e){return x.w(w.toDate()[tn].apply(w.toDate("s"),(te?[0,0,0,0]:[23,59,59,999]).slice($e)),w)},Me=this.$W,Ce=this.$M,qe=this.$D,hn="set"+(this.$u?"UTC":"");switch(ie){case I:return te?ue(1,0):ue(31,11);case p:return te?ue(1,Ce):ue(0,Ce+1);case f:var Vn=this.$locale().weekStart||0,An=(Me<Vn?Me+7:Me)-Vn;return ue(te?qe-An:qe+(6-An),Ce);case m:case M:return De(hn+"Hours",0);case v:return De(hn+"Minutes",1);case k:return De(hn+"Seconds",2);case d:return De(hn+"Milliseconds",3);default:return this.clone()}},$.endOf=function(Y){return this.startOf(Y,!1)},$.$set=function(Y,Z){var w,te=x.p(Y),ie="set"+(this.$u?"UTC":""),ue=(w={},w[m]=ie+"Date",w[M]=ie+"Date",w[p]=ie+"Month",w[I]=ie+"FullYear",w[v]=ie+"Hours",w[k]=ie+"Minutes",w[d]=ie+"Seconds",w[l]=ie+"Milliseconds",w)[te],De=te===m?this.$D+(Z-this.$W):Z;if(te===p||te===I){var Me=this.clone().set(M,1);Me.$d[ue](De),Me.init(),this.$d=Me.set(M,Math.min(this.$D,Me.daysInMonth())).$d}else ue&&this.$d[ue](De);return this.init(),this},$.set=function(Y,Z){return this.clone().$set(Y,Z)},$.get=function(Y){return this[x.p(Y)]()},$.add=function(Y,Z){var w,te=this;Y=Number(Y);var ie=x.p(Z),ue=function(Ce){var qe=W(te);return x.w(qe.date(qe.date()+Math.round(Ce*Y)),te)};if(ie===p)return this.set(p,this.$M+Y);if(ie===I)return this.set(I,this.$y+Y);if(ie===m)return ue(1);if(ie===f)return ue(7);var De=(w={},w[k]=t,w[v]=o,w[d]=a,w)[ie]||1,Me=this.$d.getTime()+Y*De;return x.w(Me,this)},$.subtract=function(Y,Z){return this.add(-1*Y,Z)},$.format=function(Y){var Z=this,w=this.$locale();if(!this.isValid())return w.invalidDate||R;var te=Y||"YYYY-MM-DDTHH:mm:ssZ",ie=x.z(this),ue=this.$H,De=this.$m,Me=this.$M,Ce=w.weekdays,qe=w.months,hn=w.meridiem,Vn=function($e,en,En,Un){return $e&&($e[en]||$e(Z,te))||En[en].slice(0,Un)},An=function($e){return x.s(ue%12||12,$e,"0")},tn=hn||function($e,en,En){var Un=$e<12?"AM":"PM";return En?Un.toLowerCase():Un};return te.replace(P,function($e,en){return en||function(En){switch(En){case"YY":return String(Z.$y).slice(-2);case"YYYY":return x.s(Z.$y,4,"0");case"M":return Me+1;case"MM":return x.s(Me+1,2,"0");case"MMM":return Vn(w.monthsShort,Me,qe,3);case"MMMM":return Vn(qe,Me);case"D":return Z.$D;case"DD":return x.s(Z.$D,2,"0");case"d":return String(Z.$W);case"dd":return Vn(w.weekdaysMin,Z.$W,Ce,2);case"ddd":return Vn(w.weekdaysShort,Z.$W,Ce,3);case"dddd":return Ce[Z.$W];case"H":return String(ue);case"HH":return x.s(ue,2,"0");case"h":return An(1);case"hh":return An(2);case"a":return tn(ue,De,!0);case"A":return tn(ue,De,!1);case"m":return String(De);case"mm":return x.s(De,2,"0");case"s":return String(Z.$s);case"ss":return x.s(Z.$s,2,"0");case"SSS":return x.s(Z.$ms,3,"0");case"Z":return ie}return null}($e)||ie.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(Y,Z,w){var te,ie=this,ue=x.p(Z),De=W(Y),Me=(De.utcOffset()-this.utcOffset())*t,Ce=this-De,qe=function(){return x.m(ie,De)};switch(ue){case I:te=qe()/12;break;case p:te=qe();break;case A:te=qe()/3;break;case f:te=(Ce-Me)/6048e5;break;case m:te=(Ce-Me)/864e5;break;case v:te=Ce/o;break;case k:te=Ce/t;break;case d:te=Ce/a;break;default:te=Ce}return w?te:x.a(te)},$.daysInMonth=function(){return this.endOf(p).$D},$.$locale=function(){return U[this.$L]},$.locale=function(Y,Z){if(!Y)return this.$L;var w=this.clone(),te=J(Y,Z,!0);return te&&(w.$L=te),w},$.clone=function(){return x.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},C}(),oe=z.prototype;return W.prototype=oe,[["$ms",l],["$s",d],["$m",k],["$H",v],["$W",m],["$M",p],["$y",I],["$D",M]].forEach(function(C){oe[C[1]]=function($){return this.$g($,C[0],C[1])}}),W.extend=function(C,$){return C.$i||(C($,z,W),C.$i=!0),W},W.locale=J,W.isDayjs=b,W.unix=function(C){return W(1e3*C)},W.en=U[L],W.Ls=U,W.p={},W})})(xg);var SS=xg.exports;const Ti=Ug(SS);var As=function(e,i){return As=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(a[o]=t[o])},As(e,i)};function zn(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");As(e,i);function a(){this.constructor=e}e.prototype=i===null?Object.create(i):(a.prototype=i.prototype,new a)}var re=function(){return re=Object.assign||function(e){for(var i,a=1,t=arguments.length;a<t;a++){i=arguments[a];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},re.apply(this,arguments)};function pi(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a}function ar(e,i,a){if(arguments.length===2)for(var t=0,o=i.length,l;t<o;t++)(l||!(t in i))&&(l||(l=Array.prototype.slice.call(i,0,t)),l[t]=i[t]);return e.concat(l||Array.prototype.slice.call(i))}function nr(e,i){var a=i&&i.cache?i.cache:PS,t=i&&i.serializer?i.serializer:DS,o=i&&i.strategy?i.strategy:OS;return o(e,{cache:a,serializer:t})}function IS(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Yg(e,i,a,t){var o=IS(t)?t:a(t),l=i.get(o);return typeof l>"u"&&(l=e.call(this,t),i.set(o,l)),l}function Cg(e,i,a){var t=Array.prototype.slice.call(arguments,3),o=a(t),l=i.get(o);return typeof l>"u"&&(l=e.apply(this,t),i.set(o,l)),l}function Cs(e,i,a,t,o){return a.bind(i,e,t,o)}function OS(e,i){var a=e.length===1?Yg:Cg;return Cs(e,this,a,i.cache.create(),i.serializer)}function LS(e,i){return Cs(e,this,Cg,i.cache.create(),i.serializer)}function KS(e,i){return Cs(e,this,Yg,i.cache.create(),i.serializer)}var DS=function(){return JSON.stringify(arguments)};function $s(){this.cache=Object.create(null)}$s.prototype.get=function(e){return this.cache[e]};$s.prototype.set=function(e,i){this.cache[e]=i};var PS={create:function(){return new $s}},rr={variadic:LS,monadic:KS},ce;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(ce||(ce={}));var Be;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Be||(Be={}));var Tt;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Tt||(Tt={}));function lk(e){return e.type===Be.literal}function FS(e){return e.type===Be.argument}function $g(e){return e.type===Be.number}function Jg(e){return e.type===Be.date}function Wg(e){return e.type===Be.time}function zg(e){return e.type===Be.select}function Xg(e){return e.type===Be.plural}function MS(e){return e.type===Be.pound}function Zg(e){return e.type===Be.tag}function Qg(e){return!!(e&&typeof e=="object"&&e.type===Tt.number)}function cs(e){return!!(e&&typeof e=="object"&&e.type===Tt.dateTime)}var ev=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,GS=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function BS(e){var i={};return e.replace(GS,function(a){var t=a.length;switch(a[0]){case"G":i.era=t===4?"long":t===5?"narrow":"short";break;case"y":i.year=t===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=t===4?"long":t===5?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][t-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][t-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][t-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][t-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][t-1];break;case"s":i.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var jS=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function wS(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(jS).filter(function(A){return A.length>0}),a=[],t=0,o=i;t<o.length;t++){var l=o[t],d=l.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var k=d[0],v=d.slice(1),m=0,f=v;m<f.length;m++){var p=f[m];if(p.length===0)throw new Error("Invalid number skeleton")}a.push({stem:k,options:v})}return a}function HS(e){return e.replace(/^(.*?)-/,"")}var uk=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,nv=/^(@+)?(\+|#+)?[rs]?$/g,VS=/(\*)(0+)|(#+)(0+)|(0+)/g,rv=/^(0+)$/;function dk(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(nv,function(a,t,o){return typeof o!="string"?(i.minimumSignificantDigits=t.length,i.maximumSignificantDigits=t.length):o==="+"?i.minimumSignificantDigits=t.length:t[0]==="#"?i.maximumSignificantDigits=t.length:(i.minimumSignificantDigits=t.length,i.maximumSignificantDigits=t.length+(typeof o=="string"?o.length:0)),""}),i}function tv(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function US(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var a=e.slice(0,2);if(a==="+!"?(i.signDisplay="always",e=e.slice(2)):a==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!rv.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function kk(e){var i={},a=tv(e);return a||i}function qS(e){for(var i={},a=0,t=e;a<t.length;a++){var o=t[a];switch(o.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=o.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=HS(o.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=re(re(re({},i),{notation:"scientific"}),o.options.reduce(function(v,m){return re(re({},v),kk(m))},{}));continue;case"engineering":i=re(re(re({},i),{notation:"engineering"}),o.options.reduce(function(v,m){return re(re({},v),kk(m))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(o.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(o.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");o.options[0].replace(VS,function(v,m,f,p,A,I){if(m)i.minimumIntegerDigits=f.length;else{if(p&&A)throw new Error("We currently do not support maximum integer digits");if(I)throw new Error("We currently do not support exact integer digits")}return""});continue}if(rv.test(o.stem)){i.minimumIntegerDigits=o.stem.length;continue}if(uk.test(o.stem)){if(o.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");o.stem.replace(uk,function(v,m,f,p,A,I){return f==="*"?i.minimumFractionDigits=m.length:p&&p[0]==="#"?i.maximumFractionDigits=p.length:A&&I?(i.minimumFractionDigits=A.length,i.maximumFractionDigits=A.length+I.length):(i.minimumFractionDigits=m.length,i.maximumFractionDigits=m.length),""});var l=o.options[0];l==="w"?i=re(re({},i),{trailingZeroDisplay:"stripIfInteger"}):l&&(i=re(re({},i),dk(l)));continue}if(nv.test(o.stem)){i=re(re({},i),dk(o.stem));continue}var d=tv(o.stem);d&&(i=re(re({},i),d));var k=US(o.stem);k&&(i=re(re({},i),k))}return i}var Wa={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function xS(e,i){for(var a="",t=0;t<e.length;t++){var o=e.charAt(t);if(o==="j"){for(var l=0;t+1<e.length&&e.charAt(t+1)===o;)l++,t++;var d=1+(l&1),k=l<2?1:3+(l>>1),v="a",m=YS(i);for((m=="H"||m=="k")&&(k=0);k-- >0;)a+=v;for(;d-- >0;)a=m+a}else o==="J"?a+="H":a+=o}return a}function YS(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var a=e.language,t;a!=="root"&&(t=e.maximize().region);var o=Wa[t||""]||Wa[a||""]||Wa["".concat(a,"-001")]||Wa["001"];return o[0]}var Qo,CS=new RegExp("^".concat(ev.source,"*")),$S=new RegExp("".concat(ev.source,"*$"));function Re(e,i){return{start:e,end:i}}var JS=!!String.prototype.startsWith&&"_a".startsWith("a",1),WS=!!String.fromCodePoint,zS=!!Object.fromEntries,XS=!!String.prototype.codePointAt,ZS=!!String.prototype.trimStart,QS=!!String.prototype.trimEnd,eI=!!Number.isSafeInteger,nI=eI?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},ys=!0;try{var rI=iv("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ys=((Qo=rI.exec("a"))===null||Qo===void 0?void 0:Qo[0])==="a"}catch{ys=!1}var gk=JS?function(e,i,a){return e.startsWith(i,a)}:function(e,i,a){return e.slice(a,a+i.length)===i},Rs=WS?String.fromCodePoint:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var a="",t=e.length,o=0,l;t>o;){if(l=e[o++],l>1114111)throw RangeError(l+" is not a valid code point");a+=l<65536?String.fromCharCode(l):String.fromCharCode(((l-=65536)>>10)+55296,l%1024+56320)}return a},vk=zS?Object.fromEntries:function(e){for(var i={},a=0,t=e;a<t.length;a++){var o=t[a],l=o[0],d=o[1];i[l]=d}return i},av=XS?function(e,i){return e.codePointAt(i)}:function(e,i){var a=e.length;if(!(i<0||i>=a)){var t=e.charCodeAt(i),o;return t<55296||t>56319||i+1===a||(o=e.charCodeAt(i+1))<56320||o>57343?t:(t-55296<<10)+(o-56320)+65536}},tI=ZS?function(e){return e.trimStart()}:function(e){return e.replace(CS,"")},aI=QS?function(e){return e.trimEnd()}:function(e){return e.replace($S,"")};function iv(e,i){return new RegExp(e,i)}var _s;if(ys){var Ek=iv("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");_s=function(e,i){var a;Ek.lastIndex=i;var t=Ek.exec(e);return(a=t[1])!==null&&a!==void 0?a:""}}else _s=function(e,i){for(var a=[];;){var t=av(e,i);if(t===void 0||ov(t)||lI(t))break;a.push(t),i+=t>=65536?2:1}return Rs.apply(void 0,a)};var iI=function(){function e(i,a){a===void 0&&(a={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!a.ignoreTag,this.locale=a.locale,this.requiresOtherClause=!!a.requiresOtherClause,this.shouldParseSkeletons=!!a.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,a,t){for(var o=[];!this.isEOF();){var l=this.char();if(l===123){var d=this.parseArgument(i,t);if(d.err)return d;o.push(d.val)}else{if(l===125&&i>0)break;if(l===35&&(a==="plural"||a==="selectordinal")){var k=this.clonePosition();this.bump(),o.push({type:Be.pound,location:Re(k,this.clonePosition())})}else if(l===60&&!this.ignoreTag&&this.peek()===47){if(t)break;return this.error(ce.UNMATCHED_CLOSING_TAG,Re(this.clonePosition(),this.clonePosition()))}else if(l===60&&!this.ignoreTag&&bs(this.peek()||0)){var d=this.parseTag(i,a);if(d.err)return d;o.push(d.val)}else{var d=this.parseLiteral(i,a);if(d.err)return d;o.push(d.val)}}}return{val:o,err:null}},e.prototype.parseTag=function(i,a){var t=this.clonePosition();this.bump();var o=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Be.literal,value:"<".concat(o,"/>"),location:Re(t,this.clonePosition())},err:null};if(this.bumpIf(">")){var l=this.parseMessage(i+1,a,!0);if(l.err)return l;var d=l.val,k=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!bs(this.char()))return this.error(ce.INVALID_TAG,Re(k,this.clonePosition()));var v=this.clonePosition(),m=this.parseTagName();return o!==m?this.error(ce.UNMATCHED_CLOSING_TAG,Re(v,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Be.tag,value:o,children:d,location:Re(t,this.clonePosition())},err:null}:this.error(ce.INVALID_TAG,Re(k,this.clonePosition())))}else return this.error(ce.UNCLOSED_TAG,Re(t,this.clonePosition()))}else return this.error(ce.INVALID_TAG,Re(t,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&sI(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,a){for(var t=this.clonePosition(),o="";;){var l=this.tryParseQuote(a);if(l){o+=l;continue}var d=this.tryParseUnquoted(i,a);if(d){o+=d;continue}var k=this.tryParseLeftAngleBracket();if(k){o+=k;continue}break}var v=Re(t,this.clonePosition());return{val:{type:Be.literal,value:o,location:v},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!oI(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var a=[this.char()];for(this.bump();!this.isEOF();){var t=this.char();if(t===39)if(this.peek()===39)a.push(39),this.bump();else{this.bump();break}else a.push(t);this.bump()}return Rs.apply(void 0,a)},e.prototype.tryParseUnquoted=function(i,a){if(this.isEOF())return null;var t=this.char();return t===60||t===123||t===35&&(a==="plural"||a==="selectordinal")||t===125&&i>0?null:(this.bump(),Rs(t))},e.prototype.parseArgument=function(i,a){var t=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,Re(t,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(ce.EMPTY_ARGUMENT,Re(t,this.clonePosition()));var o=this.parseIdentifierIfPossible().value;if(!o)return this.error(ce.MALFORMED_ARGUMENT,Re(t,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,Re(t,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Be.argument,value:o,location:Re(t,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,Re(t,this.clonePosition())):this.parseArgumentOptions(i,a,o,t);default:return this.error(ce.MALFORMED_ARGUMENT,Re(t,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),a=this.offset(),t=_s(this.message,a),o=a+t.length;this.bumpTo(o);var l=this.clonePosition(),d=Re(i,l);return{value:t,location:d}},e.prototype.parseArgumentOptions=function(i,a,t,o){var l,d=this.clonePosition(),k=this.parseIdentifierIfPossible().value,v=this.clonePosition();switch(k){case"":return this.error(ce.EXPECT_ARGUMENT_TYPE,Re(d,v));case"number":case"date":case"time":{this.bumpSpace();var m=null;if(this.bumpIf(",")){this.bumpSpace();var f=this.clonePosition(),p=this.parseSimpleArgStyleIfPossible();if(p.err)return p;var A=aI(p.val);if(A.length===0)return this.error(ce.EXPECT_ARGUMENT_STYLE,Re(this.clonePosition(),this.clonePosition()));var I=Re(f,this.clonePosition());m={style:A,styleLocation:I}}var M=this.tryParseArgumentClose(o);if(M.err)return M;var R=Re(o,this.clonePosition());if(m&&gk(m==null?void 0:m.style,"::",0)){var N=tI(m.style.slice(2));if(k==="number"){var p=this.parseNumberSkeletonFromString(N,m.styleLocation);return p.err?p:{val:{type:Be.number,value:t,location:R,style:p.val},err:null}}else{if(N.length===0)return this.error(ce.EXPECT_DATE_TIME_SKELETON,R);var P=N;this.locale&&(P=xS(N,this.locale));var A={type:Tt.dateTime,pattern:P,location:m.styleLocation,parsedOptions:this.shouldParseSkeletons?BS(P):{}},q=k==="date"?Be.date:Be.time;return{val:{type:q,value:t,location:R,style:A},err:null}}}return{val:{type:k==="number"?Be.number:k==="date"?Be.date:Be.time,value:t,location:R,style:(l=m==null?void 0:m.style)!==null&&l!==void 0?l:null},err:null}}case"plural":case"selectordinal":case"select":{var K=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(ce.EXPECT_SELECT_ARGUMENT_OPTIONS,Re(K,re({},K)));this.bumpSpace();var ee=this.parseIdentifierIfPossible(),L=0;if(k!=="select"&&ee.value==="offset"){if(!this.bumpIf(":"))return this.error(ce.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Re(this.clonePosition(),this.clonePosition()));this.bumpSpace();var p=this.tryParseDecimalInteger(ce.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ce.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(p.err)return p;this.bumpSpace(),ee=this.parseIdentifierIfPossible(),L=p.val}var U=this.tryParsePluralOrSelectOptions(i,k,a,ee);if(U.err)return U;var M=this.tryParseArgumentClose(o);if(M.err)return M;var O=Re(o,this.clonePosition());return k==="select"?{val:{type:Be.select,value:t,options:vk(U.val),location:O},err:null}:{val:{type:Be.plural,value:t,options:vk(U.val),offset:L,pluralType:k==="plural"?"cardinal":"ordinal",location:O},err:null}}default:return this.error(ce.INVALID_ARGUMENT_TYPE,Re(d,v))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,Re(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,a=this.clonePosition();!this.isEOF();){var t=this.char();switch(t){case 39:{this.bump();var o=this.clonePosition();if(!this.bumpUntil("'"))return this.error(ce.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Re(o,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(a.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(a.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,a){var t=[];try{t=wS(i)}catch{return this.error(ce.INVALID_NUMBER_SKELETON,a)}return{val:{type:Tt.number,tokens:t,location:a,parsedOptions:this.shouldParseSkeletons?qS(t):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,a,t,o){for(var l,d=!1,k=[],v=new Set,m=o.value,f=o.location;;){if(m.length===0){var p=this.clonePosition();if(a!=="select"&&this.bumpIf("=")){var A=this.tryParseDecimalInteger(ce.EXPECT_PLURAL_ARGUMENT_SELECTOR,ce.INVALID_PLURAL_ARGUMENT_SELECTOR);if(A.err)return A;f=Re(p,this.clonePosition()),m=this.message.slice(p.offset,this.offset())}else break}if(v.has(m))return this.error(a==="select"?ce.DUPLICATE_SELECT_ARGUMENT_SELECTOR:ce.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,f);m==="other"&&(d=!0),this.bumpSpace();var I=this.clonePosition();if(!this.bumpIf("{"))return this.error(a==="select"?ce.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:ce.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Re(this.clonePosition(),this.clonePosition()));var M=this.parseMessage(i+1,a,t);if(M.err)return M;var R=this.tryParseArgumentClose(I);if(R.err)return R;k.push([m,{value:M.val,location:Re(I,this.clonePosition())}]),v.add(m),this.bumpSpace(),l=this.parseIdentifierIfPossible(),m=l.value,f=l.location}return k.length===0?this.error(a==="select"?ce.EXPECT_SELECT_ARGUMENT_SELECTOR:ce.EXPECT_PLURAL_ARGUMENT_SELECTOR,Re(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(ce.MISSING_OTHER_CLAUSE,Re(this.clonePosition(),this.clonePosition())):{val:k,err:null}},e.prototype.tryParseDecimalInteger=function(i,a){var t=1,o=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(t=-1);for(var l=!1,d=0;!this.isEOF();){var k=this.char();if(k>=48&&k<=57)l=!0,d=d*10+(k-48),this.bump();else break}var v=Re(o,this.clonePosition());return l?(d*=t,nI(d)?{val:d,err:null}:this.error(a,v)):this.error(i,v)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var a=av(this.message,i);if(a===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return a},e.prototype.error=function(i,a){return{val:null,err:{kind:i,message:this.message,location:a}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(gk(this.message,i,this.offset())){for(var a=0;a<i.length;a++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var a=this.offset(),t=this.message.indexOf(i,a);return t>=0?(this.bumpTo(t),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var a=this.offset();if(a===i)break;if(a>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&ov(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),a=this.offset(),t=this.message.charCodeAt(a+(i>=65536?2:1));return t??null},e}();function bs(e){return e>=97&&e<=122||e>=65&&e<=90}function oI(e){return bs(e)||e===47}function sI(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function ov(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function lI(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Ns(e){e.forEach(function(i){if(delete i.location,zg(i)||Xg(i))for(var a in i.options)delete i.options[a].location,Ns(i.options[a].value);else $g(i)&&Qg(i.style)||(Jg(i)||Wg(i))&&cs(i.style)?delete i.style.location:Zg(i)&&Ns(i.children)})}function uI(e,i){i===void 0&&(i={}),i=re({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var a=new iI(e,i).parse();if(a.err){var t=SyntaxError(ce[a.err.kind]);throw t.location=a.err.location,t.originalMessage=a.err.message,t}return i!=null&&i.captureLocation||Ns(a.val),a.val}var or;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(or||(or={}));var Lr=function(e){zn(i,e);function i(a,t,o){var l=e.call(this,a)||this;return l.code=t,l.originalMessage=o,l}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),fk=function(e){zn(i,e);function i(a,t,o,l){return e.call(this,'Invalid values for "'.concat(a,'": "').concat(t,'". Options are "').concat(Object.keys(o).join('", "'),'"'),or.INVALID_VALUE,l)||this}return i}(Lr),dI=function(e){zn(i,e);function i(a,t,o){return e.call(this,'Value for "'.concat(a,'" must be of type ').concat(t),or.INVALID_VALUE,o)||this}return i}(Lr),kI=function(e){zn(i,e);function i(a,t){return e.call(this,'The intl string context variable "'.concat(a,'" was not provided to the string "').concat(t,'"'),or.MISSING_VALUE,t)||this}return i}(Lr),gn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(gn||(gn={}));function gI(e){return e.length<2?e:e.reduce(function(i,a){var t=i[i.length-1];return!t||t.type!==gn.literal||a.type!==gn.literal?i.push(a):t.value+=a.value,i},[])}function sv(e){return typeof e=="function"}function Za(e,i,a,t,o,l,d){if(e.length===1&&lk(e[0]))return[{type:gn.literal,value:e[0].value}];for(var k=[],v=0,m=e;v<m.length;v++){var f=m[v];if(lk(f)){k.push({type:gn.literal,value:f.value});continue}if(MS(f)){typeof l=="number"&&k.push({type:gn.literal,value:a.getNumberFormat(i).format(l)});continue}var p=f.value;if(!(o&&p in o))throw new kI(p,d);var A=o[p];if(FS(f)){(!A||typeof A=="string"||typeof A=="number")&&(A=typeof A=="string"||typeof A=="number"?String(A):""),k.push({type:typeof A=="string"?gn.literal:gn.object,value:A});continue}if(Jg(f)){var I=typeof f.style=="string"?t.date[f.style]:cs(f.style)?f.style.parsedOptions:void 0;k.push({type:gn.literal,value:a.getDateTimeFormat(i,I).format(A)});continue}if(Wg(f)){var I=typeof f.style=="string"?t.time[f.style]:cs(f.style)?f.style.parsedOptions:t.time.medium;k.push({type:gn.literal,value:a.getDateTimeFormat(i,I).format(A)});continue}if($g(f)){var I=typeof f.style=="string"?t.number[f.style]:Qg(f.style)?f.style.parsedOptions:void 0;I&&I.scale&&(A=A*(I.scale||1)),k.push({type:gn.literal,value:a.getNumberFormat(i,I).format(A)});continue}if(Zg(f)){var M=f.children,R=f.value,N=o[R];if(!sv(N))throw new dI(R,"function",d);var P=Za(M,i,a,t,o,l),q=N(P.map(function(L){return L.value}));Array.isArray(q)||(q=[q]),k.push.apply(k,q.map(function(L){return{type:typeof L=="string"?gn.literal:gn.object,value:L}}))}if(zg(f)){var K=f.options[A]||f.options.other;if(!K)throw new fk(f.value,A,Object.keys(f.options),d);k.push.apply(k,Za(K.value,i,a,t,o));continue}if(Xg(f)){var K=f.options["=".concat(A)];if(!K){if(!Intl.PluralRules)throw new Lr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,or.MISSING_INTL_API,d);var ee=a.getPluralRules(i,{type:f.pluralType}).select(A-(f.offset||0));K=f.options[ee]||f.options.other}if(!K)throw new fk(f.value,A,Object.keys(f.options),d);k.push.apply(k,Za(K.value,i,a,t,o,A-(f.offset||0)));continue}}return gI(k)}function vI(e,i){return i?re(re(re({},e||{}),i||{}),Object.keys(e).reduce(function(a,t){return a[t]=re(re({},e[t]),i[t]||{}),a},{})):e}function EI(e,i){return i?Object.keys(e).reduce(function(a,t){return a[t]=vI(e[t],i[t]),a},re({},e)):e}function es(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,a){e[i]=a}}}}}function fI(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:nr(function(){for(var i,a=[],t=0;t<arguments.length;t++)a[t]=arguments[t];return new((i=Intl.NumberFormat).bind.apply(i,ar([void 0],a,!1)))},{cache:es(e.number),strategy:rr.variadic}),getDateTimeFormat:nr(function(){for(var i,a=[],t=0;t<arguments.length;t++)a[t]=arguments[t];return new((i=Intl.DateTimeFormat).bind.apply(i,ar([void 0],a,!1)))},{cache:es(e.dateTime),strategy:rr.variadic}),getPluralRules:nr(function(){for(var i,a=[],t=0;t<arguments.length;t++)a[t]=arguments[t];return new((i=Intl.PluralRules).bind.apply(i,ar([void 0],a,!1)))},{cache:es(e.pluralRules),strategy:rr.variadic})}}var lv=function(){function e(i,a,t,o){a===void 0&&(a=e.defaultLocale);var l=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(v){var m=l.formatToParts(v);if(m.length===1)return m[0].value;var f=m.reduce(function(p,A){return!p.length||A.type!==gn.literal||typeof p[p.length-1]!="string"?p.push(A.value):p[p.length-1]+=A.value,p},[]);return f.length<=1?f[0]||"":f},this.formatToParts=function(v){return Za(l.ast,l.locales,l.formatters,l.formats,v,void 0,l.message)},this.resolvedOptions=function(){var v;return{locale:((v=l.resolvedLocale)===null||v===void 0?void 0:v.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=a,this.resolvedLocale=e.resolveLocale(a),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=o||{};d.formatters;var k=pi(d,["formatters"]);this.ast=e.__parse(i,re(re({},k),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=EI(e.formats,t),this.formatters=o&&o.formatters||fI(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var a=Intl.NumberFormat.supportedLocalesOf(i);return a.length>0?new Intl.Locale(a[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=uI,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Yr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Yr||(Yr={}));var ra=function(e){zn(i,e);function i(a,t,o){var l=this,d=o?o instanceof Error?o:new Error(String(o)):void 0;return l=e.call(this,"[@formatjs/intl Error ".concat(a,"] ").concat(t,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,l.code=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(l,i),l}return i}(Error),mI=function(e){zn(i,e);function i(a,t){return e.call(this,Yr.UNSUPPORTED_FORMATTER,a,t)||this}return i}(ra),TI=function(e){zn(i,e);function i(a,t){return e.call(this,Yr.INVALID_CONFIG,a,t)||this}return i}(ra),mk=function(e){zn(i,e);function i(a,t){return e.call(this,Yr.MISSING_DATA,a,t)||this}return i}(ra),Hn=function(e){zn(i,e);function i(a,t,o){var l=e.call(this,Yr.FORMAT_ERROR,"".concat(a,`
Locale: `).concat(t,`
`),o)||this;return l.locale=t,l}return i}(ra),ns=function(e){zn(i,e);function i(a,t,o,l){var d=e.call(this,"".concat(a,`
MessageID: `).concat(o==null?void 0:o.id,`
Default Message: `).concat(o==null?void 0:o.defaultMessage,`
Description: `).concat(o==null?void 0:o.description,`
`),t,l)||this;return d.descriptor=o,d.locale=t,d}return i}(Hn),pI=function(e){zn(i,e);function i(a,t){var o=e.call(this,Yr.MISSING_TRANSLATION,'Missing message: "'.concat(a.id,'" for locale "').concat(t,'", using ').concat(a.defaultMessage?"default message (".concat(typeof a.defaultMessage=="string"?a.defaultMessage:a.defaultMessage.map(function(l){var d;return(d=l.value)!==null&&d!==void 0?d:JSON.stringify(l)}).join(),")"):"id"," as fallback."))||this;return o.descriptor=a,o}return i}(ra);function hI(e,i,a){if(a===void 0&&(a=Error),!e)throw new a(i)}function Jr(e,i,a){return a===void 0&&(a={}),i.reduce(function(t,o){return o in e?t[o]=e[o]:o in a&&(t[o]=a[o]),t},{})}var AI=function(e){},cI=function(e){},uv={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:AI,onWarn:cI};function dv(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function qr(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,a){e[i]=a}}}}}function yI(e){e===void 0&&(e=dv());var i=Intl.RelativeTimeFormat,a=Intl.ListFormat,t=Intl.DisplayNames,o=nr(function(){for(var k,v=[],m=0;m<arguments.length;m++)v[m]=arguments[m];return new((k=Intl.DateTimeFormat).bind.apply(k,ar([void 0],v,!1)))},{cache:qr(e.dateTime),strategy:rr.variadic}),l=nr(function(){for(var k,v=[],m=0;m<arguments.length;m++)v[m]=arguments[m];return new((k=Intl.NumberFormat).bind.apply(k,ar([void 0],v,!1)))},{cache:qr(e.number),strategy:rr.variadic}),d=nr(function(){for(var k,v=[],m=0;m<arguments.length;m++)v[m]=arguments[m];return new((k=Intl.PluralRules).bind.apply(k,ar([void 0],v,!1)))},{cache:qr(e.pluralRules),strategy:rr.variadic});return{getDateTimeFormat:o,getNumberFormat:l,getMessageFormat:nr(function(k,v,m,f){return new lv(k,v,m,re({formatters:{getNumberFormat:l,getDateTimeFormat:o,getPluralRules:d}},f||{}))},{cache:qr(e.message),strategy:rr.variadic}),getRelativeTimeFormat:nr(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(i.bind.apply(i,ar([void 0],k,!1)))},{cache:qr(e.relativeTime),strategy:rr.variadic}),getPluralRules:d,getListFormat:nr(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(a.bind.apply(a,ar([void 0],k,!1)))},{cache:qr(e.list),strategy:rr.variadic}),getDisplayNames:nr(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(t.bind.apply(t,ar([void 0],k,!1)))},{cache:qr(e.displayNames),strategy:rr.variadic})}}function Js(e,i,a,t){var o=e&&e[i],l;if(o&&(l=o[a]),l)return l;t(new mI("No ".concat(i," format named: ").concat(a)))}function za(e,i){return Object.keys(e).reduce(function(a,t){return a[t]=re({timeZone:i},e[t]),a},{})}function Tk(e,i){var a=Object.keys(re(re({},e),i));return a.reduce(function(t,o){return t[o]=re(re({},e[o]||{}),i[o]||{}),t},{})}function pk(e,i){if(!i)return e;var a=lv.formats;return re(re(re({},a),e),{date:Tk(za(a.date,i),za(e.date||{},i)),time:Tk(za(a.time,i),za(e.time||{},i))})}var Ss=function(e,i,a,t,o){var l=e.locale,d=e.formats,k=e.messages,v=e.defaultLocale,m=e.defaultFormats,f=e.fallbackOnEmptyString,p=e.onError,A=e.timeZone,I=e.defaultRichTextElements;a===void 0&&(a={id:""});var M=a.id,R=a.defaultMessage;hI(!!M,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var N=String(M),P=k&&Object.prototype.hasOwnProperty.call(k,N)&&k[N];if(Array.isArray(P)&&P.length===1&&P[0].type===Be.literal)return P[0].value;if(!t&&P&&typeof P=="string"&&!I)return P.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=re(re({},I),t||{}),d=pk(d,A),m=pk(m,A),!P){if(f===!1&&P==="")return P;if((!R||l&&l.toLowerCase()!==v.toLowerCase())&&p(new pI(a,l)),R)try{var q=i.getMessageFormat(R,v,m,o);return q.format(t)}catch(K){return p(new ns('Error formatting default message for: "'.concat(N,'", rendering default message verbatim'),l,a,K)),typeof R=="string"?R:N}return N}try{var q=i.getMessageFormat(P,l,d,re({formatters:i},o||{}));return q.format(t)}catch(K){p(new ns('Error formatting message: "'.concat(N,'", using ').concat(R?"default message":"id"," as fallback."),l,a,K))}if(R)try{var q=i.getMessageFormat(R,v,m,o);return q.format(t)}catch(K){p(new ns('Error formatting the default message for: "'.concat(N,'", rendering message verbatim'),l,a,K))}return typeof P=="string"?P:typeof R=="string"?R:N},kv=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function hi(e,i,a,t){var o=e.locale,l=e.formats,d=e.onError,k=e.timeZone;t===void 0&&(t={});var v=t.format,m=re(re({},k&&{timeZone:k}),v&&Js(l,i,v,d)),f=Jr(t,kv,m);return i==="time"&&!f.hour&&!f.minute&&!f.second&&!f.timeStyle&&!f.dateStyle&&(f=re(re({},f),{hour:"numeric",minute:"numeric"})),a(o,f)}function RI(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var o=a[0],l=a[1],d=l===void 0?{}:l,k=typeof o=="string"?new Date(o||0):o;try{return hi(e,"date",i,d).format(k)}catch(v){e.onError(new Hn("Error formatting date.",e.locale,v))}return String(k)}function _I(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var o=a[0],l=a[1],d=l===void 0?{}:l,k=typeof o=="string"?new Date(o||0):o;try{return hi(e,"time",i,d).format(k)}catch(v){e.onError(new Hn("Error formatting time.",e.locale,v))}return String(k)}function bI(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var o=a[0],l=a[1],d=a[2],k=d===void 0?{}:d,v=e.timeZone,m=e.locale,f=e.onError,p=Jr(k,kv,v?{timeZone:v}:{});try{return i(m,p).formatRange(o,l)}catch(A){f(new Hn("Error formatting date time range.",e.locale,A))}return String(o)}function NI(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var o=a[0],l=a[1],d=l===void 0?{}:l,k=typeof o=="string"?new Date(o||0):o;try{return hi(e,"date",i,d).formatToParts(k)}catch(v){e.onError(new Hn("Error formatting date.",e.locale,v))}return[]}function SI(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var o=a[0],l=a[1],d=l===void 0?{}:l,k=typeof o=="string"?new Date(o||0):o;try{return hi(e,"time",i,d).formatToParts(k)}catch(v){e.onError(new Hn("Error formatting time.",e.locale,v))}return[]}var II=["style","type","fallback","languageDisplay"];function OI(e,i,a,t){var o=e.locale,l=e.onError,d=Intl.DisplayNames;d||l(new Lr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,or.MISSING_INTL_API));var k=Jr(t,II);try{return i(o,k).of(a)}catch(v){l(new Hn("Error formatting display name.",o,v))}}var LI=["type","style"],hk=Date.now();function KI(e){return"".concat(hk,"_").concat(e,"_").concat(hk)}function DI(e,i,a,t){t===void 0&&(t={});var o=gv(e,i,a,t).reduce(function(l,d){var k=d.value;return typeof k!="string"?l.push(k):typeof l[l.length-1]=="string"?l[l.length-1]+=k:l.push(k),l},[]);return o.length===1?o[0]:o.length===0?"":o}function gv(e,i,a,t){var o=e.locale,l=e.onError;t===void 0&&(t={});var d=Intl.ListFormat;d||l(new Lr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,or.MISSING_INTL_API));var k=Jr(t,LI);try{var v={},m=a.map(function(f,p){if(typeof f=="object"){var A=KI(p);return v[A]=f,A}return String(f)});return i(o,k).formatToParts(m).map(function(f){return f.type==="literal"?f:re(re({},f),{value:v[f.value]||f.value})})}catch(f){l(new Hn("Error formatting list.",o,f))}return a}var PI=["type"];function FI(e,i,a,t){var o=e.locale,l=e.onError;t===void 0&&(t={}),Intl.PluralRules||l(new Lr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,or.MISSING_INTL_API));var d=Jr(t,PI);try{return i(o,d).select(a)}catch(k){l(new Hn("Error formatting plural.",o,k))}return"other"}var MI=["numeric","style"];function GI(e,i,a){var t=e.locale,o=e.formats,l=e.onError;a===void 0&&(a={});var d=a.format,k=!!d&&Js(o,"relative",d,l)||{},v=Jr(a,MI,k);return i(t,v)}function BI(e,i,a,t,o){o===void 0&&(o={}),t||(t="second");var l=Intl.RelativeTimeFormat;l||e.onError(new Lr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,or.MISSING_INTL_API));try{return GI(e,i,o).format(a,t)}catch(d){e.onError(new Hn("Error formatting relative time.",e.locale,d))}return String(a)}var jI=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function vv(e,i,a){var t=e.locale,o=e.formats,l=e.onError;a===void 0&&(a={});var d=a.format,k=d&&Js(o,"number",d,l)||{},v=Jr(a,jI,k);return i(t,v)}function wI(e,i,a,t){t===void 0&&(t={});try{return vv(e,i,t).format(a)}catch(o){e.onError(new Hn("Error formatting number.",e.locale,o))}return String(a)}function HI(e,i,a,t){t===void 0&&(t={});try{return vv(e,i,t).formatToParts(a)}catch(o){e.onError(new Hn("Error formatting number.",e.locale,o))}return[]}function VI(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function UI(e){e.onWarn&&e.defaultRichTextElements&&VI(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function qI(e,i){var a=yI(i),t=re(re({},uv),e),o=t.locale,l=t.defaultLocale,d=t.onError;return o?!Intl.NumberFormat.supportedLocalesOf(o).length&&d?d(new mk('Missing locale data for locale: "'.concat(o,'" in Intl.NumberFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(o).length&&d&&d(new mk('Missing locale data for locale: "'.concat(o,'" in Intl.DateTimeFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new TI('"locale" was not configured, using "'.concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),UI(t),re(re({},t),{formatters:a,formatNumber:wI.bind(null,t,a.getNumberFormat),formatNumberToParts:HI.bind(null,t,a.getNumberFormat),formatRelativeTime:BI.bind(null,t,a.getRelativeTimeFormat),formatDate:RI.bind(null,t,a.getDateTimeFormat),formatDateToParts:NI.bind(null,t,a.getDateTimeFormat),formatTime:_I.bind(null,t,a.getDateTimeFormat),formatDateTimeRange:bI.bind(null,t,a.getDateTimeFormat),formatTimeToParts:SI.bind(null,t,a.getDateTimeFormat),formatPlural:FI.bind(null,t,a.getPluralRules),formatMessage:Ss.bind(null,t,a),$t:Ss.bind(null,t,a),formatList:DI.bind(null,t,a.getListFormat),formatListToParts:gv.bind(null,t,a.getListFormat),formatDisplayName:OI.bind(null,t,a.getDisplayNames)})}function xI(e,i,a){if(a===void 0&&(a=Error),!e)throw new a(i)}function YI(e){xI(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var CI=re(re({},uv),{textComponent:D.Fragment});function $I(e){return function(i){return e(D.Children.toArray(i))}}var Ev={exports:{}},Se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ak;function JI(){if(Ak)return Se;Ak=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,a=e?Symbol.for("react.portal"):60106,t=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,k=e?Symbol.for("react.context"):60110,v=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,A=e?Symbol.for("react.suspense_list"):60120,I=e?Symbol.for("react.memo"):60115,M=e?Symbol.for("react.lazy"):60116,R=e?Symbol.for("react.block"):60121,N=e?Symbol.for("react.fundamental"):60117,P=e?Symbol.for("react.responder"):60118,q=e?Symbol.for("react.scope"):60119;function K(L){if(typeof L=="object"&&L!==null){var U=L.$$typeof;switch(U){case i:switch(L=L.type,L){case v:case m:case t:case l:case o:case p:return L;default:switch(L=L&&L.$$typeof,L){case k:case f:case M:case I:case d:return L;default:return U}}case a:return U}}}function ee(L){return K(L)===m}return Se.AsyncMode=v,Se.ConcurrentMode=m,Se.ContextConsumer=k,Se.ContextProvider=d,Se.Element=i,Se.ForwardRef=f,Se.Fragment=t,Se.Lazy=M,Se.Memo=I,Se.Portal=a,Se.Profiler=l,Se.StrictMode=o,Se.Suspense=p,Se.isAsyncMode=function(L){return ee(L)||K(L)===v},Se.isConcurrentMode=ee,Se.isContextConsumer=function(L){return K(L)===k},Se.isContextProvider=function(L){return K(L)===d},Se.isElement=function(L){return typeof L=="object"&&L!==null&&L.$$typeof===i},Se.isForwardRef=function(L){return K(L)===f},Se.isFragment=function(L){return K(L)===t},Se.isLazy=function(L){return K(L)===M},Se.isMemo=function(L){return K(L)===I},Se.isPortal=function(L){return K(L)===a},Se.isProfiler=function(L){return K(L)===l},Se.isStrictMode=function(L){return K(L)===o},Se.isSuspense=function(L){return K(L)===p},Se.isValidElementType=function(L){return typeof L=="string"||typeof L=="function"||L===t||L===m||L===l||L===o||L===p||L===A||typeof L=="object"&&L!==null&&(L.$$typeof===M||L.$$typeof===I||L.$$typeof===d||L.$$typeof===k||L.$$typeof===f||L.$$typeof===N||L.$$typeof===P||L.$$typeof===q||L.$$typeof===R)},Se.typeOf=K,Se}Ev.exports=JI();var WI=Ev.exports,fv=WI,zI={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},XI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mv={};mv[fv.ForwardRef]=zI;mv[fv.Memo]=XI;var Ws=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=D.createContext(null)):D.createContext(null);Ws.Consumer;Ws.Provider;var ZI=Ws;function Tv(){var e=D.useContext(ZI);return YI(e),e}var Is;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Is||(Is={}));var Os;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Os||(Os={}));function pv(e){var i=function(a){var t=Tv(),o=a.value,l=a.children,d=pi(a,["value","children"]),k=typeof o=="string"?new Date(o||0):o,v=e==="formatDate"?t.formatDateToParts(k,d):t.formatTimeToParts(k,d);return l(v)};return i.displayName=Os[e],i}function ta(e){var i=function(a){var t=Tv(),o=a.value,l=a.children,d=pi(a,["value","children"]),k=t[e](o,d);if(typeof l=="function")return l(k);var v=t.textComponent||D.Fragment;return D.createElement(v,null,k)};return i.displayName=Is[e],i}function hv(e){return e&&Object.keys(e).reduce(function(i,a){var t=e[a];return i[a]=sv(t)?$I(t):t,i},{})}var ck=function(e,i,a,t){for(var o=[],l=4;l<arguments.length;l++)o[l-4]=arguments[l];var d=hv(t),k=Ss.apply(void 0,ar([e,i,a,d],o,!1));return Array.isArray(k)?D.Children.toArray(k):k},QI=function(e,i){var a=e.defaultRichTextElements,t=pi(e,["defaultRichTextElements"]),o=hv(a),l=qI(re(re(re({},CI),t),{defaultRichTextElements:o}),i),d={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:o};return re(re({},l),{formatMessage:ck.bind(null,d,l.formatters),$t:ck.bind(null,d,l.formatters)})};ta("formatDate");ta("formatTime");ta("formatNumber");ta("formatList");ta("formatDisplayName");pv("formatDate");pv("formatTime");var Ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Av={exports:{}};(function(e,i){(function(a,t){e.exports=t()})(Ai,function(){var a="minute",t=/[+-]\d\d(?::?\d\d)?/g,o=/([+-]|\d\d)/g;return function(l,d,k){var v=d.prototype;k.utc=function(R){var N={date:R,utc:!0,args:arguments};return new d(N)},v.utc=function(R){var N=k(this.toDate(),{locale:this.$L,utc:!0});return R?N.add(this.utcOffset(),a):N},v.local=function(){return k(this.toDate(),{locale:this.$L,utc:!1})};var m=v.parse;v.parse=function(R){R.utc&&(this.$u=!0),this.$utils().u(R.$offset)||(this.$offset=R.$offset),m.call(this,R)};var f=v.init;v.init=function(){if(this.$u){var R=this.$d;this.$y=R.getUTCFullYear(),this.$M=R.getUTCMonth(),this.$D=R.getUTCDate(),this.$W=R.getUTCDay(),this.$H=R.getUTCHours(),this.$m=R.getUTCMinutes(),this.$s=R.getUTCSeconds(),this.$ms=R.getUTCMilliseconds()}else f.call(this)};var p=v.utcOffset;v.utcOffset=function(R,N){var P=this.$utils().u;if(P(R))return this.$u?0:P(this.$offset)?p.call(this):this.$offset;if(typeof R=="string"&&(R=function(L){L===void 0&&(L="");var U=L.match(t);if(!U)return null;var O=(""+U[0]).match(o)||["-",0,0],b=O[0],J=60*+O[1]+ +O[2];return J===0?0:b==="+"?J:-J}(R),R===null))return this;var q=Math.abs(R)<=16?60*R:R,K=this;if(N)return K.$offset=q,K.$u=R===0,K;if(R!==0){var ee=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(K=this.local().add(q+ee,a)).$offset=q,K.$x.$localOffset=ee}else K=this.utc();return K};var A=v.format;v.format=function(R){var N=R||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return A.call(this,N)},v.valueOf=function(){var R=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*R},v.isUTC=function(){return!!this.$u},v.toISOString=function(){return this.toDate().toISOString()},v.toString=function(){return this.toDate().toUTCString()};var I=v.toDate;v.toDate=function(R){return R==="s"&&this.$offset?k(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():I.call(this)};var M=v.diff;v.diff=function(R,N,P){if(R&&this.$u===R.$u)return M.call(this,R,N,P);var q=this.local(),K=k(R).local();return M.call(q,K,N,P)}}})})(Av);var eO=Av.exports;const nO=zs(eO);var cv={exports:{}};(function(e,i){(function(a,t){e.exports=t()})(Ai,function(){var a,t,o=1e3,l=6e4,d=36e5,k=864e5,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=31536e6,f=2628e6,p=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,A={years:m,months:f,days:k,hours:d,minutes:l,seconds:o,milliseconds:1,weeks:6048e5},I=function(U){return U instanceof ee},M=function(U,O,b){return new ee(U,b,O.$l)},R=function(U){return t.p(U)+"s"},N=function(U){return U<0},P=function(U){return N(U)?Math.ceil(U):Math.floor(U)},q=function(U){return Math.abs(U)},K=function(U,O){return U?N(U)?{negative:!0,format:""+q(U)+O}:{negative:!1,format:""+U+O}:{negative:!1,format:""}},ee=function(){function U(b,J,W){var x=this;if(this.$d={},this.$l=W,b===void 0&&(this.$ms=0,this.parseFromMilliseconds()),J)return M(b*A[R(J)],this);if(typeof b=="number")return this.$ms=b,this.parseFromMilliseconds(),this;if(typeof b=="object")return Object.keys(b).forEach(function(C){x.$d[R(C)]=b[C]}),this.calMilliseconds(),this;if(typeof b=="string"){var z=b.match(p);if(z){var oe=z.slice(2).map(function(C){return C!=null?Number(C):0});return this.$d.years=oe[0],this.$d.months=oe[1],this.$d.weeks=oe[2],this.$d.days=oe[3],this.$d.hours=oe[4],this.$d.minutes=oe[5],this.$d.seconds=oe[6],this.calMilliseconds(),this}}return this}var O=U.prototype;return O.calMilliseconds=function(){var b=this;this.$ms=Object.keys(this.$d).reduce(function(J,W){return J+(b.$d[W]||0)*A[W]},0)},O.parseFromMilliseconds=function(){var b=this.$ms;this.$d.years=P(b/m),b%=m,this.$d.months=P(b/f),b%=f,this.$d.days=P(b/k),b%=k,this.$d.hours=P(b/d),b%=d,this.$d.minutes=P(b/l),b%=l,this.$d.seconds=P(b/o),b%=o,this.$d.milliseconds=b},O.toISOString=function(){var b=K(this.$d.years,"Y"),J=K(this.$d.months,"M"),W=+this.$d.days||0;this.$d.weeks&&(W+=7*this.$d.weeks);var x=K(W,"D"),z=K(this.$d.hours,"H"),oe=K(this.$d.minutes,"M"),C=this.$d.seconds||0;this.$d.milliseconds&&(C+=this.$d.milliseconds/1e3,C=Math.round(1e3*C)/1e3);var $=K(C,"S"),Y=b.negative||J.negative||x.negative||z.negative||oe.negative||$.negative,Z=z.format||oe.format||$.format?"T":"",w=(Y?"-":"")+"P"+b.format+J.format+x.format+Z+z.format+oe.format+$.format;return w==="P"||w==="-P"?"P0D":w},O.toJSON=function(){return this.toISOString()},O.format=function(b){var J=b||"YYYY-MM-DDTHH:mm:ss",W={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return J.replace(v,function(x,z){return z||String(W[x])})},O.as=function(b){return this.$ms/A[R(b)]},O.get=function(b){var J=this.$ms,W=R(b);return W==="milliseconds"?J%=1e3:J=W==="weeks"?P(J/A[W]):this.$d[W],J||0},O.add=function(b,J,W){var x;return x=J?b*A[R(J)]:I(b)?b.$ms:M(b,this).$ms,M(this.$ms+x*(W?-1:1),this)},O.subtract=function(b,J){return this.add(b,J,!0)},O.locale=function(b){var J=this.clone();return J.$l=b,J},O.clone=function(){return M(this.$ms,this)},O.humanize=function(b){return a().add(this.$ms,"ms").locale(this.$l).fromNow(!b)},O.valueOf=function(){return this.asMilliseconds()},O.milliseconds=function(){return this.get("milliseconds")},O.asMilliseconds=function(){return this.as("milliseconds")},O.seconds=function(){return this.get("seconds")},O.asSeconds=function(){return this.as("seconds")},O.minutes=function(){return this.get("minutes")},O.asMinutes=function(){return this.as("minutes")},O.hours=function(){return this.get("hours")},O.asHours=function(){return this.as("hours")},O.days=function(){return this.get("days")},O.asDays=function(){return this.as("days")},O.weeks=function(){return this.get("weeks")},O.asWeeks=function(){return this.as("weeks")},O.months=function(){return this.get("months")},O.asMonths=function(){return this.as("months")},O.years=function(){return this.get("years")},O.asYears=function(){return this.as("years")},U}(),L=function(U,O,b){return U.add(O.years()*b,"y").add(O.months()*b,"M").add(O.days()*b,"d").add(O.hours()*b,"h").add(O.minutes()*b,"m").add(O.seconds()*b,"s").add(O.milliseconds()*b,"ms")};return function(U,O,b){a=b,t=b().$utils(),b.duration=function(x,z){var oe=b.locale();return M(x,{$l:oe},z)},b.isDuration=I;var J=O.prototype.add,W=O.prototype.subtract;O.prototype.add=function(x,z){return I(x)?L(this,x,1):J.bind(this)(x,z)},O.prototype.subtract=function(x,z){return I(x)?L(this,x,-1):W.bind(this)(x,z)}}})})(cv);var rO=cv.exports;const tO=zs(rO);var yv={exports:{}};(function(e,i){(function(a,t){e.exports=t()})(Ai,function(){var a="day";return function(t,o,l){var d=function(m){return m.add(4-m.isoWeekday(),a)},k=o.prototype;k.isoWeekYear=function(){return d(this).year()},k.isoWeek=function(m){if(!this.$utils().u(m))return this.add(7*(m-this.isoWeek()),a);var f,p,A,I,M=d(this),R=(f=this.isoWeekYear(),p=this.$u,A=(p?l.utc:l)().year(f).startOf("year"),I=4-A.isoWeekday(),A.isoWeekday()>4&&(I+=7),A.add(I,a));return M.diff(R,"week")+1},k.isoWeekday=function(m){return this.$utils().u(m)?this.day()||7:this.day(this.day()%7?m:m-7)};var v=k.startOf;k.startOf=function(m,f){var p=this.$utils(),A=!!p.u(f)||f;return p.p(m)==="isoweek"?A?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):v.bind(this)(m,f)}}})})(yv);var aO=yv.exports;const iO=zs(aO);var oO={exports:{}};(function(e,i){(function(a,t){e.exports=t(Ti)})(Ai,function(a){function t(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=t(a),l={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return o.default.locale(l,null,!0),l})})(oO);const sO=dv(),Rv=e=>QI({locale:"nb-NO",messages:e},sO),_v={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};Ti.extend(nO);Ti.extend(iO);Ti.extend(tO);Rv(_v);Rv(_v);var bv={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function a(){for(var l="",d=0;d<arguments.length;d++){var k=arguments[d];k&&(l=o(l,t.call(this,k)))}return l}function t(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return a.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var k in l)i.call(l,k)&&l[k]&&(d=o(d,this&&this[k]||k));return d}function o(l,d){return d?l?l+" "+d:l+d:l}e.exports?(a.default=a,e.exports=a):window.classNames=a})()})(bv);var lO=bv.exports;const uO=Ug(lO),dO="_clipboard_1lghs_1",kO="_clipboard__button_1lghs_6",gO="_clipboard__button_1lghs_6",vO="_showTooltip_1lghs_1",EO="_clipboard__kopiert_1lghs_48",fO="_clipboard__kopiert_1lghs_48",mO="_clipboard__animationContainer_1lghs_57",TO="_clipboard__animationContainer_1lghs_57",pO="_clipboard__animate_1lghs_60",hO="_clipboard__animate_1lghs_60",AO="_fadeInOut_1lghs_1",cO={clipboard:dO,clipboard__button:kO,clipboardButton:gO,showTooltip:vO,clipboard__kopiert:EO,clipboardKopiert:fO,clipboard__animationContainer:mO,clipboardAnimationContainer:TO,clipboard__animate:pO,clipboardAnimate:hO,fadeInOut:AO};uO.bind(cO);const yO="_autocompleteSuggestion__substring_mf7v0_1",RO="_autocompleteSuggestion__substring_mf7v0_1",_O="_autocompleteSuggestion__inner_mf7v0_4",bO="_autocompleteSuggestion__inner_mf7v0_4",NO="_autocompleteSuggestion--active_mf7v0_12",Ct={autocompleteSuggestion__substring:yO,autocompleteSuggestionSubstring:RO,autocompleteSuggestion__inner:_O,autocompleteSuggestionInner:bO,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_mf7v0_12",autocompleteSuggestionActive:NO};class SO extends V.Component{constructor(i){super(i),this.state={value:i.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:i}=this.props,{value:a}=this.state;i(a)}onMouseMove(){const{setSuggestionIndex:i,index:a}=this.props;i(a)}render(){const{match:i,active:a,avoidBlur:t,id:o}=this.props,{value:l}=this.state.value,d=l.toLowerCase().startsWith(i.toLowerCase());return mr.jsx("li",{id:o,role:"option","aria-selected":a,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:t,onMouseDown:t,onKeyDown:t,className:"autocompleteSuggestion typo-normal",children:d?mr.jsxs("span",{className:`${Ct.autocompleteSuggestion__inner} ${a?Ct["autocompleteSuggestion--active"]:""}`,children:[l.substring(0,i.length),mr.jsx("span",{className:Ct.autocompleteSuggestion__substring,children:l.substring(i.length)})]}):mr.jsx("span",{className:`${Ct.autocompleteSuggestion__inner} ${a?Ct["autocompleteSuggestion--active"]:""}`,children:l})})}}const IO="_autocomplete_9dlnp_1",OO="_autocomplete__suggestions_9dlnp_27",LO="_autocomplete__suggestions_9dlnp_27",KO="_autocomplete__suggestions--hidden_9dlnp_31",rs={autocomplete:IO,autocomplete__suggestions:OO,autocompleteSuggestions:LO,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_9dlnp_31",autocompleteSuggestionsHidden:KO};class JL extends V.Component{constructor(i){super(i),ok(this,"input"),ok(this,"inputRef"),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=a=>{this.input=a},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null}))}onChange(i){const{onChange:a}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),a(i)}onSearchButtonClick(i){const{onSearchButtonClick:a}=this.props;i.preventDefault(),a&&a()}onKeyDown(i){const{shouldShowSuggestions:a}=this.state;let{activeSuggestionIndex:t}=this.state;const{suggestions:o}=this.props,l=t>-1;switch(this.setState({setAriaActiveDescendant:i.keyCode===38||i.keyCode===40}),i.keyCode){case 9:l&&a&&this.setValue(o[t]);break;case 13:l&&a?(i.preventDefault(),this.setValue(o[t])):a&&o.length===1?this.setValue(o[0]):this.setState({shouldShowSuggestions:!1});break;case 27:a&&o.length>0&&(i.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:a&&(i.preventDefault(),t=t-1===-2?-1:t-1,this.setState({activeSuggestionIndex:t}));break;case 40:a&&(i.preventDefault(),t=t+1===o.length?o.length-1:t+1,this.setState({activeSuggestionIndex:t}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const i=setTimeout(()=>{const{shouldBlur:t}=this.state;t&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:i});const{onBlur:a}=this.props;a&&a()}setSuggestionIndex(i){this.setState({activeSuggestionIndex:i}),this.clearBlurDelay()}setValue(i){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:a}=this.props;a(i)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:i,id:a,ariaLabel:t,placeholder:o,value:l,name:d,shouldFocusOnMount:k,isLoading:v}=this.props,{activeSuggestionIndex:m,setAriaActiveDescendant:f,hasFocus:p,shouldShowSuggestions:A}=this.state,I=p&&A&&i.length>0,M=f&&m>-1?`${a}-item-${m}`:void 0;return mr.jsxs("div",{className:`${rs.autocomplete} autocomplete`,"aria-expanded":I,"aria-owns":`${a}-suggestions`,"aria-haspopup":"listbox",children:[mr.jsx(ps,{variant:"primary",id:a,name:d,"aria-label":t,"aria-autocomplete":"list","aria-controls":`${a}-suggestions`,"aria-activedescendant":M,placeholder:o,value:l,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:R=>{this.inputRef=R},className:"typo-normal",autoFocus:k,label:t,hideLabel:!0,children:mr.jsx(ps.Button,{loading:v,onClick:this.onSearchButtonClick})}),mr.jsx("ul",{id:`${a}-suggestions`,role:"listbox",className:I?rs.autocomplete__suggestions:rs["autocomplete__suggestions--hidden"],children:I&&i.map((R,N)=>mr.jsx(SO,{id:`${a}-item-${N}`,index:N,value:R,match:l,active:N===m,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},R.key))})]})}}V.createContext({});vn(mi);var Nv={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function a(){for(var l="",d=0;d<arguments.length;d++){var k=arguments[d];k&&(l=o(l,t.call(this,k)))}return l}function t(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return a.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var k in l)i.call(l,k)&&l[k]&&(d=o(d,this&&this[k]||k));return d}function o(l,d){return d?l?l+" "+d:l+d:l}e.exports?(a.default=a,e.exports=a):window.classNames=a})()})(Nv);var DO=Nv.exports;const PO=Tc(DO),FO="_boks_c3bfh_1",MO="_harBorderLeft_c3bfh_8",GO="_harBorderTop_c3bfh_12",BO={boks:FO,harBorderLeft:MO,harBorderTop:GO};PO.bind(BO);const jO=e=>{const i=e.aktiveNaturalytelser.reduce((t,o)=>{const l=o.type;return l in t?{...t,[l]:[...t[l],o]}:{...t,[l]:[o]}},{}),a={};return Object.entries(i).forEach(([t,o])=>{const l=o.sort((d,k)=>cS({fom:d.periode.fomDato,tom:d.periode.tomDato},{fom:k.periode.fomDato,tom:k.periode.tomDato})).reverse();a[t]=l.flatMap((d,k,v)=>{const m=v[k+1],f=d.periode.tomDato,p=m==null?void 0:m.periode.fomDato;return f===mt?[]:[{...d,periode:{fomDato:rk(f,1),tomDato:p?rk(p,-1):mt}}]})}),a},Sv=({inntektsmelding:e,alleKodeverk:i})=>{const a=Wn(),t=jO(e);return G.jsx(pr,{tittel:a.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?G.jsx("span",{children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):G.jsx(ft,{children:Object.entries(t).map(([o,l])=>{var d;return G.jsxs(ft,{children:[G.jsx("span",{children:(d=i[Ys.NATURAL_YTELSE_TYPE].find(k=>k.kode===o))==null?void 0:d.navn}),G.jsx("ul",{children:l.map(k=>G.jsxs(V.Fragment,{children:[G.jsxs("li",{children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",G.jsx(zt,{dateString:k.periode.fomDato})]}),k.periode.tomDato!==mt&&G.jsxs("li",{children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",G.jsx(zt,{dateString:k.periode.tomDato})]}),G.jsxs("li",{children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",gt(k.beloepPerMnd.verdi)]})]},k.indexKey))})]},o)})})})};Sv.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Iv=({kildeSystem:e})=>{const i=Wn(),a=D.useMemo(()=>{switch(e.toUpperCase()){case"NAV_NO":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}},[i,e]);return G.jsx(pr,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:a})};Iv.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const Ov=({inntektsmelding:e})=>{const i=Wn();return G.jsxs(pr,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[G.jsxs("span",{children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),G.jsxs("span",{children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};Ov.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};var Ke=(e=>(e.DEFAULT="default",e.INNGANGSVILKAR="inngangsvilkar",e.BEHANDLE_INNSYN="behandle_innsyn",e.BEREGNING="beregning",e.BEREGNINGSGRUNNLAG="beregningsgrunnlag",e.KLAGE_NAV_FAMILIE_OG_PENSJON="klage_nav_familie_og_pensjon",e.KLAGE_NAV_KLAGEINSTANS="klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_KLAGEINSTANS="formkrav_klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON="formkrav_klage_nav_familie_og_pensjon",e.FORTSATTMEDLEMSKAP="fortsattmedlemskap",e.OPPLYSNINGSPLIKT="opplysningsplikt",e.SOEKNADSFRIST="soeknadsfrist",e.TILBAKEKREVING="tilbakekreving",e.FORELDELSE="foreldelse",e.TILKJENT_YTELSE="tilkjent_ytelse",e.VARSEL="varsel",e.VEDTAK="vedtak",e.UTTAK="uttak",e.SIMULERING="simulering",e.KLAGE_RESULTAT="resultat",e.ANKEBEHANDLING="ankebehandling",e.ANKE_MERKNADER="ankemerknader",e.ANKE_RESULTAT="ankeresultat",e))(Ke||{}),se=(e=>(e.ADOPSJONSVILKARET="adopsjonsvilkaaret",e.ARBEIDSFORHOLD="arbeidsforhold",e.ARBEID_OG_INNTEKT="arbeidoginntekt",e.BEREGNING="beregning",e.BESTEBEREGNING="besteberegning",e.DEFAULT="default",e.FORDELING="fordeling",e.INNTEKTSMELDINGER="inntektsmeldinger",e.FEILUTBETALING="feilutbetaling",e.FODSELSVILKARET="foedselsvilkaaret",e.FODSELTILRETTELEGGING="fodseltilrettelegging",e.MEDLEMSKAPSVILKARET="medlemskapsvilkaaret",e.OMSORG="omsorg",e.OMSORG_OG_RETT="omsorgogrett",e.OMSORGSVILKARET="omsorgsvilkaaret",e.OPPTJENINGSVILKARET="opptjeningsvilkaaret",e.PERMISJON="permisjon",e.SAKEN="saken",e.UTTAK="uttak",e.VERGE="verge",e.YTELSER="ytelser",e.UTTAK_DOKUMENTASJON="uttakdokumentasjon",e))(se||{});se.DEFAULT,Ke.BEREGNING,se.DEFAULT,Ke.BEREGNINGSGRUNNLAG,se.BESTEBEREGNING,Ke.DEFAULT,se.ADOPSJONSVILKARET,se.ARBEIDSFORHOLD,se.BEREGNING,se.FODSELSVILKARET,se.FORDELING,se.MEDLEMSKAPSVILKARET,se.OMSORG,se.OPPTJENINGSVILKARET,se.OPPTJENINGSVILKARET,se.OMSORGSVILKARET,se.ARBEIDSFORHOLD,se.UTTAK_DOKUMENTASJON,se.DEFAULT,Ke.INNGANGSVILKAR,se.DEFAULT,Ke.KLAGE_NAV_FAMILIE_OG_PENSJON,se.DEFAULT,Ke.KLAGE_NAV_KLAGEINSTANS,se.DEFAULT,Ke.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,se.DEFAULT,Ke.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,se.DEFAULT,Ke.ANKEBEHANDLING,se.DEFAULT,Ke.ANKE_MERKNADER,se.DEFAULT,Ke.OPPLYSNINGSPLIKT,se.DEFAULT,Ke.INNGANGSVILKAR,se.DEFAULT,Ke.INNGANGSVILKAR,se.MEDLEMSKAPSVILKARET,Ke.INNGANGSVILKAR,se.DEFAULT,Ke.INNGANGSVILKAR,se.DEFAULT,Ke.INNGANGSVILKAR,se.DEFAULT,Ke.SOEKNADSFRIST,se.DEFAULT,Ke.VEDTAK,se.UTTAK,se.UTTAK,se.UTTAK_DOKUMENTASJON,se.SAKEN,se.DEFAULT,Ke.UTTAK,se.VERGE,se.DEFAULT,Ke.TILKJENT_YTELSE,se.DEFAULT,Ke.SIMULERING,se.SAKEN,se.FODSELTILRETTELEGGING,se.DEFAULT,Ke.INNGANGSVILKAR,se.DEFAULT,se.UTTAK_DOKUMENTASJON,se.DEFAULT,Ke.FORTSATTMEDLEMSKAP,se.ARBEID_OG_INNTEKT,Ke.DEFAULT,se.OMSORG_OG_RETT;se.FEILUTBETALING,se.DEFAULT,Ke.TILBAKEKREVING,se.DEFAULT,Ke.FORELDELSE,se.DEFAULT,Ke.VEDTAK,se.VERGE;const wO=(e,i,a)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${i}&dokumentId=${a}`,Lv=({inntektsmelding:e,fagsak:i})=>G.jsx(qs,{type:"button",onClick:()=>{window.open(wO(i.saksnummer,e.journalpostId,e.dokumentId),"_blank")},variant:"secondary",size:"small",icon:G.jsx(uR,{}),children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.modal.trigger"})});Lv.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Kv=({inntektsmelding:e})=>{const i=Wn();if(e.refusjonsperioder.length===0)return G.jsx(pr,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:G.jsx("span",{children:e.refusjonPrMnd?gt(e.refusjonPrMnd):G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.refusjon.ingen"})})});const a=[...e.refusjonsperioder].sort((t,o)=>new Date(t.fom).getTime()-new Date(o.fom).getTime());return G.jsxs(ft,{gap:"0",children:[G.jsx("span",{children:"Krever refusjon"}),G.jsx("span",{children:gt(e.refusjonPrMnd??0)}),G.jsx("span",{children:"Endringer i perioden:"}),G.jsx("ul",{children:a.map(t=>G.jsx("li",{children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:gt(t.refusjonsbeløp.verdi),fom:G.jsx(zt,{dateString:t.fom})}})},t.indexKey))})]})};Kv.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Dv=({startDatoPermisjon:e,ytelse:i})=>{const a=Wn();return e?G.jsxs(pr,{tittel:a.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:i.toLowerCase()}),children:[G.jsx("span",{children:e?G.jsx(zt,{dateString:e}):"-"}),G.jsx("span",{children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};Dv.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const HO="_behandlingCircleIngen_giqi4_1",VO="_behandlingCircleDenne_giqi4_5",UO="_behandlingCircleAndre_giqi4_9",qO="_container_giqi4_13",xO="_ingenInntektsmeldinger_giqi4_20",Wt={behandlingCircleIngen:HO,behandlingCircleDenne:VO,behandlingCircleAndre:UO,container:qO,ingenInntektsmeldinger:xO},Pv=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:i,fagsak:a,alleBehandlinger:t,behandling:o,alleKodeverk:l})=>{const d=Wn();return G.jsxs(ft,{gap:"4",className:Wt.container,children:[G.jsxs(kt,{gap:"4",justify:"space-between",align:"start",children:[G.jsxs(vg,{level:"3",size:"small",children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",G.jsx(Qa,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),G.jsx(Lv,{fagsak:a,inntektsmelding:e})]}),G.jsxs(O_,{columns:3,gap:"8",children:[G.jsx(Fg,{arbeidsgiverOpplysningerPerId:i,arbeidsgiverIdent:e.arbeidsgiverIdent}),G.jsx(pr,{tittel:d.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:G.jsx("span",{children:gt(e.inntektPrMnd)})}),G.jsx(Mg,{alleKodeverk:l,inntektsmelding:e,alleBehandlinger:t,behandling:o}),G.jsx(Ov,{inntektsmelding:e}),G.jsx(Dv,{ytelse:BN(l,Ys.FAGSAK_YTELSE,a.fagsakYtelseType),startDatoPermisjon:e.startDatoPermisjon}),G.jsx(Iv,{kildeSystem:e.kildeSystem}),G.jsx(Sv,{inntektsmelding:e,alleKodeverk:l}),G.jsx(Kv,{inntektsmelding:e})]})]})};Pv.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const YO={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},yk=vn(YO),Xs=({arbeidsgiverOpplysningerPerId:e,fagsak:i,alleBehandlinger:a,behandling:t,alleKodeverk:o,inntektsmeldinger:l})=>{const[d,k]=D.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),v=p=>{k(d&&p===d.orderBy&&d.direction==="descending"?void 0:{orderBy:p,direction:d&&p===d.orderBy&&d.direction==="ascending"?"descending":"ascending"})},m=d?CO({inntektsmeldinger:l,arbeidsgiverOpplysningerPerId:e,sortKey:d.orderBy,behandling:t}):l,f=(d==null?void 0:d.direction)==="ascending"?m:m.toReversed();return f.length===0?G.jsx(qd,{value:yk,children:G.jsxs(kt,{gap:"2",justify:"center",align:"center",className:Wt.ingenInntektsmeldinger,children:[G.jsx(gi,{children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.ingen"})}),G.jsx(pR,{})]})}):G.jsx(qd,{value:yk,children:G.jsxs(Ve,{sort:d,onSortChange:p=>v(p),children:[G.jsx(Ve.Header,{children:G.jsxs(Ve.Row,{children:[G.jsx(Ve.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),G.jsx(Ve.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),G.jsx(Ve.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),G.jsx(Ve.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),G.jsx(Ve.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),G.jsx(Ve.HeaderCell,{})]})}),G.jsx(Ve.Body,{children:f.map(p=>{var A;return G.jsxs(Ve.ExpandableRow,{expandOnRowClick:!0,togglePlacement:"right",content:G.jsx(Pv,{alleKodeverk:o,fagsak:i,behandling:t,alleBehandlinger:a,arbeidsgiverOpplysningerPerId:e,inntektsmelding:p}),children:[G.jsx(Ve.DataCell,{children:G.jsx(Qa,{dateTimeString:p.innsendingstidspunkt,separator:"kl"})}),G.jsx(Ve.DataCell,{children:((A=e[p.arbeidsgiverIdent])==null?void 0:A.navn)??"-"}),G.jsx(Ve.DataCell,{children:p.startDatoPermisjon?G.jsx(zt,{dateString:p.startDatoPermisjon}):"-"}),G.jsx(Ve.DataCell,{children:gt(p.inntektPrMnd)}),G.jsx(Ve.DataCell,{children:G.jsx($O,{behandling:t,inntektsmelding:p})})]},`${p.journalpostId}-${p.internArbeidsforholdId}`)})})]})})},CO=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:i,sortKey:a,behandling:t})=>a==="arbeidsgiverIdent"?e.slice().sort((o,l)=>{var v,m;const d=(v=i[o.arbeidsgiverIdent])==null?void 0:v.navn,k=(m=i[l.arbeidsgiverIdent])==null?void 0:m.navn;return ts(d,k)}):a==="tilknyttedeBehandlingIder"?e.slice().sort((o,l)=>{const d=Ls({behandling:t,inntektsmelding:o}),k=Ls({behandling:t,inntektsmelding:l});return ts(d,k)}):e.slice().sort((o,l)=>{const d=o[a],k=l[a];return ts(d,k)}),ts=(e,i)=>e===void 0?-1:i===void 0?1:e<i?-1:e>i?1:0,$O=({behandling:e,inntektsmelding:i})=>{const a=Ls({behandling:e,inntektsmelding:i});return a==="DENNE"?G.jsxs(kt,{gap:"1",align:"center",children:[G.jsx(Wo,{className:Wt.behandlingCircleDenne}),G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):a==="ANDRE"?G.jsxs(kt,{gap:"1",align:"center",children:[G.jsx(Wo,{className:Wt.behandlingCircleAndre}),G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):G.jsxs(kt,{gap:"1",align:"center",children:[G.jsx(Wo,{className:Wt.behandlingCircleIngen}),G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},Ls=({behandling:e,inntektsmelding:i})=>i.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":i.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";Xs.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const JO=[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],WO=[{kode:"REGISTRER_OM_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrering av opplysninger om verge/fullmektig"},{kode:"MANGELFULL_SØKNAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Mangelfull søknad"},{kode:"FASTSATT_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak - splitting av periode"},{kode:"BEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet"},{kode:"REGISTRER_PAPIRSØK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrer papirsøknad"},{kode:"BEH_STARTET_PÅ_NYTT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet på nytt"},{kode:"MIGRERT_FRA_INFOTRYGD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder flytting av sak fra Infotrygd"},{kode:"FORSLAG_VEDTAK_UTEN_TOTRINN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått"},{kode:"BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjenopptatt"},{kode:"AVBRUTT_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling er henlagt"},{kode:"ANKE_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ankebehandling"},{kode:"BREV_BESTILT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev bestilt"},{kode:"ENDRET_DEKNINGSGRAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Dekningsgrad er endret"},{kode:"OPPGAVE_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Oppgave før vedtak"},{kode:"IVERKSETTELSE_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen venter på iverksettelse"},{kode:"FASTSATT_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak"},{kode:"OVST_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak"},{kode:"INNSYN_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Innsynsbehandling opprettet"},{kode:"TILBAKEKR_VIDEREBEHANDLING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Metode for å håndtere tilbakekreving av feilutbetailng er valgt."},{kode:"SAK_GODKJENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak godkjent"},{kode:"BEH_KØET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er satt på vent"},{kode:"NYE_REGOPPLYSNINGER",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Nye registeropplysninger"},{kode:"BEH_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling på vent"},{kode:"TERMINBEKREFTELSE_UGYLDIG",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Terminbekreftelsens utstedt dato er før 22. svangerskapsuke. Behandlingen fortsatt uten ny terminbekreftelse"},{kode:"FAKTA_ENDRET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Fakta endret"},{kode:"MIGRERT_FRA_INFOTRYGD_FJERNET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder ikke lenger flytting av sak fra Infotrygd"},{kode:"BYTT_ENHET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Bytt enhet"},{kode:"REVURD_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Revurdering opprettet"},{kode:"KLAGE_BEH_NFP",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling NFP"},{kode:"KØET_BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Køet behandling er gjenopptatt"},{kode:"OVST_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak - splitting av periode"},{kode:"ANKEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Anke mottatt"},{kode:"UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet soknadsperiode"},{kode:"KLAGE_BEH_NK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling KA"},{kode:"AVKLART_AKTIVITETSKRAV",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Avklart aktivitetskrav"},{kode:"NY_INFO_FRA_TPS",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ny info fra TPS"},{kode:"KLAGEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klage mottatt"},{kode:"VEDTAK_FATTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak fattet"},{kode:"BEH_AVBRUTT_VUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vurdering før vedtak"},{kode:"UENDRET_UTFALL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Uendret utfall"},{kode:"VRS_REV_IKKE_SNDT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Varsel om revurdering ikke sendt"},{kode:"SPOLT_TILBAKE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er flyttet"},{kode:"OPPTJENING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet opptjeningsperiode"},{kode:"SAK_RETUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak retur"},{kode:"FJERNET_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Opplysninger om verge/fullmektig fjernet"},{kode:"BEH_MAN_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Gjenoppta behandling"},{kode:"BEH_OPPDATERT_NYE_OPPL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen oppdatert med nye opplysninger"},{kode:"VEDLEGG_MOTTATT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedlegg mottatt"},{kode:"OVERSTYRT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Overstyrt"},{kode:"BREV_SENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev sendt"},{kode:"FORSLAG_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått og sendt til beslutter"}],zO=[{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],XO=[{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"},{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"}],ZO=[{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"}],QO=[{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"}],eL=[{kode:"EGEN_NÆRING",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Egen næring"},{kode:"BRUKERS_ANDEL",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Brukers andel"},{kode:"FRILANS",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Frilans"}],nL=[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],rL=[{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"},{kode:"ENDRING_I_BEREGNING_OG_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning og uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"}],tL=[{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilans"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (fisker)"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (dagmamma)"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"},{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"}],aL=[{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"}],iL=[{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Vedtaksinstans"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aleneomsorg og annenpart rett"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstans"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"}],oL=[{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"},{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"}],sL=[{kode:"HJEMSENDE_UTEN_Å_OPPHEVE",kodeverk:"KLAGEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"OPPHEVE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket oppheves"},{kode:"MEDHOLD_I_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Medhold"},{kode:"STADFESTE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"AVVIS_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Klagen avvises"}],lL=[{kode:"BEH_STARTET_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Behandling startet på nytt"},{kode:"BERORT_BEH_OPPHOR",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens vedtak er opphørt"},{kode:"SAKSBEH_START_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Saksbehandling starter på nytt"},{kode:"BERORT_BEH_ENDRING_DEKNINGSGRAD",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens behandling har endret antall disponible stønadsdager"}],uL=[{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"},{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"ANNET",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Andre typer som f.eks utsettelse"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"}],dL=[{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt søknad mangler"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"}],kL=[{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"}],gL=[{kode:"TILBAKEKR_IGNORER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling, avvent samordning"},{kode:"TILBAKEKR_INNTREKK",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling hvor inntrekk dekker hele beløpet"},{kode:"TILBAKEKR_OPPRETT",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling med tilbakekreving"},{kode:"TILBAKEKR_OPPDATER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Endringer vil oppdatere eksisterende feilutbetalte perioder og beløp."}],vL=[{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],EL=[{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"}],fL=[{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"}],mL=[{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"}],TL=[{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"},{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"}],pL=[{kode:"UTTAK_PERIODE_FOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fradato uttaksperiode"},{kode:"TPS_ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"UTTAK_PERIODE_TOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Tildato uttaksperiode"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"FODSELSDATO",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fødselsdato"}],hL=[{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"}],AL=[{kode:"MANGLENDE_OPPLYSNINGER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen, men har manglende opplysninger"},{kode:"SØKER_ER_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er i permisjon"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekten er ikke med i beregningsgrunnlaget"},{kode:"IKKE_BRUK",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Ikke bruk"},{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK_MED_OVERSTYRTE_PERIODER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"BENYTT_A_INNTEKT_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekt fra A-inntekt benyttes i beregningsgrunnlaget"},{kode:"SØKER_ER_IKKE_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er ikke i permisjon"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er lagt til av saksbehandler beregningsgrunnlaget"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er slått sammen med annet"}],cL=[{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"}],yL=[{kode:"CAF",kodeverk:"LANDKODER",navn:"SENTRALAFRIKA. REP."},{kode:"ARG",kodeverk:"LANDKODER",navn:"ARGENTINA"},{kode:"IOT",kodeverk:"LANDKODER",navn:"BRITISK-INDISKE HAV"},{kode:"CCK",kodeverk:"LANDKODER",navn:"KOKOSØYENE"},{kode:"MEX",kodeverk:"LANDKODER",navn:"MEXICO"},{kode:"CHN",kodeverk:"LANDKODER",navn:"REPUBLIKKEN KINA"},{kode:"RUS",kodeverk:"LANDKODER",navn:"RUSSLAND"},{kode:"BHS",kodeverk:"LANDKODER",navn:"BAHAMAS"},{kode:"SYC",kodeverk:"LANDKODER",navn:"SEYCHELLENE"},{kode:"CYP",kodeverk:"LANDKODER",navn:"KYPROS"},{kode:"AUT",kodeverk:"LANDKODER",navn:"ØSTERRIKE"},{kode:"QAT",kodeverk:"LANDKODER",navn:"QATAR"},{kode:"VNM",kodeverk:"LANDKODER",navn:"VIETNAM"},{kode:"HMD",kodeverk:"LANDKODER",navn:"HEARD OG MCDONALD ØYENE"},{kode:"KEN",kodeverk:"LANDKODER",navn:"KENYA"},{kode:"ASM",kodeverk:"LANDKODER",navn:"AM. SAMOA"},{kode:"PAK",kodeverk:"LANDKODER",navn:"PAKISTAN"},{kode:"ATG",kodeverk:"LANDKODER",navn:"ANTIGUA OG BARBUDA"},{kode:"TZA",kodeverk:"LANDKODER",navn:"TANZANIA"},{kode:"ZAF",kodeverk:"LANDKODER",navn:"SØR-AFRIKA"},{kode:"CMR",kodeverk:"LANDKODER",navn:"KAMERUN"},{kode:"MLI",kodeverk:"LANDKODER",navn:"MALI"},{kode:"SLV",kodeverk:"LANDKODER",navn:"EL SALVADOR"},{kode:"MAF",kodeverk:"LANDKODER",navn:"SAINT MARTIN"},{kode:"KGZ",kodeverk:"LANDKODER",navn:"KIRGISISTAN"},{kode:"FJI",kodeverk:"LANDKODER",navn:"FIJI"},{kode:"RWA",kodeverk:"LANDKODER",navn:"RWANDA"},{kode:"GEO",kodeverk:"LANDKODER",navn:"GEORGIA"},{kode:"REU",kodeverk:"LANDKODER",navn:"REUNION"},{kode:"MTQ",kodeverk:"LANDKODER",navn:"MARTINIQUE"},{kode:"SDN",kodeverk:"LANDKODER",navn:"SUDAN"},{kode:"AND",kodeverk:"LANDKODER",navn:"ANDORRA"},{kode:"COK",kodeverk:"LANDKODER",navn:"COOKØYENE"},{kode:"SHN",kodeverk:"LANDKODER",navn:"ST. HELENA"},{kode:"COL",kodeverk:"LANDKODER",navn:"COLOMBIA"},{kode:"PER",kodeverk:"LANDKODER",navn:"PERU"},{kode:"STP",kodeverk:"LANDKODER",navn:"SAO TOME OG PRINCIPE"},{kode:"COM",kodeverk:"LANDKODER",navn:"KOMORENE"},{kode:"LUX",kodeverk:"LANDKODER",navn:"LUXEMBOURG"},{kode:"PNG",kodeverk:"LANDKODER",navn:"PAPUA NY-GUINEA"},{kode:"MKD",kodeverk:"LANDKODER",navn:"MAKEDONIA"},{kode:"GIN",kodeverk:"LANDKODER",navn:"GUINEA"},{kode:"CYM",kodeverk:"LANDKODER",navn:"CAYMANØYENE"},{kode:"VGB",kodeverk:"LANDKODER",navn:"JOMFRUØYENE BRIT."},{kode:"IRL",kodeverk:"LANDKODER",navn:"IRLAND"},{kode:"XXX",kodeverk:"LANDKODER",navn:"STATSLØS"},{kode:"HTI",kodeverk:"LANDKODER",navn:"HAITI"},{kode:"LBN",kodeverk:"LANDKODER",navn:"LIBANON"},{kode:"BRN",kodeverk:"LANDKODER",navn:"BRUNEI"},{kode:"GMB",kodeverk:"LANDKODER",navn:"GAMBIA"},{kode:"MLT",kodeverk:"LANDKODER",navn:"MALTA"},{kode:"CRI",kodeverk:"LANDKODER",navn:"COSTA RICA"},{kode:"UZB",kodeverk:"LANDKODER",navn:"UZBEKISTAN"},{kode:"CXR",kodeverk:"LANDKODER",navn:"CHRISTMASØYA"},{kode:"TUR",kodeverk:"LANDKODER",navn:"TYRKIA"},{kode:"UKR",kodeverk:"LANDKODER",navn:"UKRAINA"},{kode:"SUN",kodeverk:"LANDKODER",navn:"SOVJETUNIONEN"},{kode:"PYF",kodeverk:"LANDKODER",navn:"FRANSK POLYNESIA"},{kode:"MNE",kodeverk:"LANDKODER",navn:"MONTENEGRO"},{kode:"BIH",kodeverk:"LANDKODER",navn:"BOSNIA-HERCEGOVINA"},{kode:"PAN",kodeverk:"LANDKODER",navn:"PANAMA"},{kode:"SJM",kodeverk:"LANDKODER",navn:"SVALBARD OG JAN MAYEN"},{kode:"NIU",kodeverk:"LANDKODER",navn:"NIUE"},{kode:"SUR",kodeverk:"LANDKODER",navn:"SURINAM"},{kode:"MUS",kodeverk:"LANDKODER",navn:"MAURITIUS"},{kode:"CHE",kodeverk:"LANDKODER",navn:"SVEITS"},{kode:"BEL",kodeverk:"LANDKODER",navn:"BELGIA"},{kode:"TTO",kodeverk:"LANDKODER",navn:"TRINIDAD OG TOBAGO"},{kode:"SWZ",kodeverk:"LANDKODER",navn:"SWAZILAND"},{kode:"TUN",kodeverk:"LANDKODER",navn:"TUNISIA"},{kode:"GLP",kodeverk:"LANDKODER",navn:"GUADELOUPE"},{kode:"KWT",kodeverk:"LANDKODER",navn:"KUWAIT"},{kode:"DMA",kodeverk:"LANDKODER",navn:"DOMINICA"},{kode:"BGR",kodeverk:"LANDKODER",navn:"BULGARIA"},{kode:"ISL",kodeverk:"LANDKODER",navn:"ISLAND"},{kode:"SVN",kodeverk:"LANDKODER",navn:"SLOVENIA"},{kode:"PLW",kodeverk:"LANDKODER",navn:"PALAU"},{kode:"GBR",kodeverk:"LANDKODER",navn:"STORBRITANNIA"},{kode:"NAM",kodeverk:"LANDKODER",navn:"NAMIBIA"},{kode:"FSM",kodeverk:"LANDKODER",navn:"MIKRONESIAFØD."},{kode:"GNB",kodeverk:"LANDKODER",navn:"GUINEA-BISSAU"},{kode:"UMI",kodeverk:"LANDKODER",navn:"MINDRE STILLEHAVSØYER"},{kode:"MDA",kodeverk:"LANDKODER",navn:"MOLDOVA"},{kode:"MMR",kodeverk:"LANDKODER",navn:"MYANMAR (BURMA)"},{kode:"MOZ",kodeverk:"LANDKODER",navn:"MOSAMBIK"},{kode:"SGS",kodeverk:"LANDKODER",navn:"SØR-GEORGIA OG SØR-SANDWICHØYE"},{kode:"NPL",kodeverk:"LANDKODER",navn:"NEPAL"},{kode:"BES",kodeverk:"LANDKODER",navn:"BONAIRE, SINT EUSTATIUS, SABA"},{kode:"LBR",kodeverk:"LANDKODER",navn:"LIBERIA"},{kode:"MDG",kodeverk:"LANDKODER",navn:"MADAGASKAR"},{kode:"VIR",kodeverk:"LANDKODER",navn:"JOMFRUØYENE AM."},{kode:"ARE",kodeverk:"LANDKODER",navn:"DE ARABISKE EMIRATER"},{kode:"USA",kodeverk:"LANDKODER",navn:"USA"},{kode:"NFK",kodeverk:"LANDKODER",navn:"NORFOLKØYA"},{kode:"HKG",kodeverk:"LANDKODER",navn:"HONGKONG"},{kode:"DEU",kodeverk:"LANDKODER",navn:"TYSKLAND"},{kode:"LIE",kodeverk:"LANDKODER",navn:"LIECHTENSTEIN"},{kode:"ECU",kodeverk:"LANDKODER",navn:"ECUADOR"},{kode:"POL",kodeverk:"LANDKODER",navn:"POLEN"},{kode:"PRK",kodeverk:"LANDKODER",navn:"NORD-KOREA"},{kode:"GGY",kodeverk:"LANDKODER",navn:"GUERNSEY"},{kode:"NZL",kodeverk:"LANDKODER",navn:"NEW ZEALAND"},{kode:"MAR",kodeverk:"LANDKODER",navn:"MAROKKO"},{kode:"BWA",kodeverk:"LANDKODER",navn:"BOTSWANA"},{kode:"GUM",kodeverk:"LANDKODER",navn:"GUAM"},{kode:"YUG",kodeverk:"LANDKODER",navn:"JUGOSLAVIA"},{kode:"SEN",kodeverk:"LANDKODER",navn:"SENEGAL"},{kode:"MWI",kodeverk:"LANDKODER",navn:"MALAWI"},{kode:"TKM",kodeverk:"LANDKODER",navn:"TURKMENISTAN"},{kode:"GAB",kodeverk:"LANDKODER",navn:"GABON"},{kode:"FIN",kodeverk:"LANDKODER",navn:"FINLAND"},{kode:"PRY",kodeverk:"LANDKODER",navn:"PARAGUAY"},{kode:"PSE",kodeverk:"LANDKODER",navn:"DET PALESTINSKE OMRÅDET"},{kode:"FRA",kodeverk:"LANDKODER",navn:"FRANKRIKE"},{kode:"ZWE",kodeverk:"LANDKODER",navn:"ZIMBABWE"},{kode:"AZE",kodeverk:"LANDKODER",navn:"AZERBAJDZJAN"},{kode:"SXM",kodeverk:"LANDKODER",navn:"SINT MAARTEN"},{kode:"NIC",kodeverk:"LANDKODER",navn:"NICARAGUA"},{kode:"CAN",kodeverk:"LANDKODER",navn:"CANADA"},{kode:"COG",kodeverk:"LANDKODER",navn:"KONGO, REPUBLIKKEN"},{kode:"JPN",kodeverk:"LANDKODER",navn:"JAPAN"},{kode:"KOR",kodeverk:"LANDKODER",navn:"SØR-KOREA"},{kode:"HUN",kodeverk:"LANDKODER",navn:"UNGARN"},{kode:"YEM",kodeverk:"LANDKODER",navn:"JEMEN"},{kode:"CHL",kodeverk:"LANDKODER",navn:"CHILE"},{kode:"BRB",kodeverk:"LANDKODER",navn:"BARBADOS"},{kode:"DNK",kodeverk:"LANDKODER",navn:"DANMARK"},{kode:"NRU",kodeverk:"LANDKODER",navn:"NAURU"},{kode:"VCT",kodeverk:"LANDKODER",navn:"ST. VINCENT"},{kode:"BEN",kodeverk:"LANDKODER",navn:"BENIN"},{kode:"SMR",kodeverk:"LANDKODER",navn:"SAN MARINO"},{kode:"TCD",kodeverk:"LANDKODER",navn:"TSJAD"},{kode:"CUW",kodeverk:"LANDKODER",navn:"CURACAO"},{kode:"IRN",kodeverk:"LANDKODER",navn:"IRAN"},{kode:"SWE",kodeverk:"LANDKODER",navn:"SVERIGE"},{kode:"ERI",kodeverk:"LANDKODER",navn:"ERITREA"},{kode:"XUK",kodeverk:"LANDKODER",navn:"UKJENT"},{kode:"MDV",kodeverk:"LANDKODER",navn:"MALDIVENE"},{kode:"CSK",kodeverk:"LANDKODER",navn:"TSJEKKOSLOVAKIA"},{kode:"GRD",kodeverk:"LANDKODER",navn:"GRENADA"},{kode:"HND",kodeverk:"LANDKODER",navn:"HONDURAS"},{kode:"FRO",kodeverk:"LANDKODER",navn:"FÆRØYENE"},{kode:"COD",kodeverk:"LANDKODER",navn:"KONGO, DEN DEMOKR. REPUBL"},{kode:"SRB",kodeverk:"LANDKODER",navn:"SERBIA"},{kode:"AGO",kodeverk:"LANDKODER",navn:"ANGOLA"},{kode:"NCL",kodeverk:"LANDKODER",navn:"NY-KALEDONIA"},{kode:"SCG",kodeverk:"LANDKODER",navn:"SERBIA OG MONTENEGRO"},{kode:"GTM",kodeverk:"LANDKODER",navn:"GUATEMALA"},{kode:"AFG",kodeverk:"LANDKODER",navn:"AFGHANISTAN"},{kode:"JAM",kodeverk:"LANDKODER",navn:"JAMAICA"},{kode:"UGA",kodeverk:"LANDKODER",navn:"UGANDA"},{kode:"IMN",kodeverk:"LANDKODER",navn:"ISLE OF MAN"},{kode:"ISR",kodeverk:"LANDKODER",navn:"ISRAEL"},{kode:"SOM",kodeverk:"LANDKODER",navn:"SOMALIA"},{kode:"MNP",kodeverk:"LANDKODER",navn:"NORD-MARIANENE"},{kode:"XXK",kodeverk:"LANDKODER",navn:"KOSOVO"},{kode:"BLR",kodeverk:"LANDKODER",navn:"HVITERUSSLAND"},{kode:"LSO",kodeverk:"LANDKODER",navn:"LESOTHO"},{kode:"NER",kodeverk:"LANDKODER",navn:"NIGER"},{kode:"IDN",kodeverk:"LANDKODER",navn:"INDONESIA"},{kode:"CZE",kodeverk:"LANDKODER",navn:"DEN TSJEKKISKE REP."},{kode:"URY",kodeverk:"LANDKODER",navn:"URUGUAY"},{kode:"BGD",kodeverk:"LANDKODER",navn:"BANGLADESH"},{kode:"WLF",kodeverk:"LANDKODER",navn:"WALLIS/FUTUNAØYENE"},{kode:"CIV",kodeverk:"LANDKODER",navn:"ELFENBEINSKYSTEN"},{kode:"ABW",kodeverk:"LANDKODER",navn:"ARUBA"},{kode:"SLB",kodeverk:"LANDKODER",navn:"SALOMONØYENE"},{kode:"TWN",kodeverk:"LANDKODER",navn:"TAIWAN"},{kode:"SLE",kodeverk:"LANDKODER",navn:"SIERRA LEONE"},{kode:"BRA",kodeverk:"LANDKODER",navn:"BRASIL"},{kode:"DJI",kodeverk:"LANDKODER",navn:"DJIBOUTI"},{kode:"PRI",kodeverk:"LANDKODER",navn:"PUERTO RICO"},{kode:"PRT",kodeverk:"LANDKODER",navn:"PORTUGAL"},{kode:"ANT",kodeverk:"LANDKODER",navn:"DE NEDERLANDSKE ANTILLENE"},{kode:"THA",kodeverk:"LANDKODER",navn:"THAILAND"},{kode:"TLS",kodeverk:"LANDKODER",navn:"ØST-TIMOR"},{kode:"SPM",kodeverk:"LANDKODER",navn:"ST-PIERRE OG MIQUELON"},{kode:"ALB",kodeverk:"LANDKODER",navn:"ALBANIA"},{kode:"EGY",kodeverk:"LANDKODER",navn:"EGYPT"},{kode:"GRC",kodeverk:"LANDKODER",navn:"HELLAS"},{kode:"BFA",kodeverk:"LANDKODER",navn:"BURKINA FASO"},{kode:"ALA",kodeverk:"LANDKODER",navn:"ÅLAND"},{kode:"BOL",kodeverk:"LANDKODER",navn:"BOLIVIA"},{kode:"DDR",kodeverk:"LANDKODER",navn:"TYSKLAND (ØST)"},{kode:"HRV",kodeverk:"LANDKODER",navn:"KROATIA"},{kode:"AUS",kodeverk:"LANDKODER",navn:"AUSTRALIA"},{kode:"NGA",kodeverk:"LANDKODER",navn:"NIGERIA"},{kode:"LBY",kodeverk:"LANDKODER",navn:"LIBYA"},{kode:"MYT",kodeverk:"LANDKODER",navn:"MAYOTTE"},{kode:"LVA",kodeverk:"LANDKODER",navn:"LATVIA"},{kode:"BTN",kodeverk:"LANDKODER",navn:"BHUTAN"},{kode:"MSR",kodeverk:"LANDKODER",navn:"MONSERRAT"},{kode:"???",kodeverk:"LANDKODER",navn:"UOPPGITT/UKJENT"},{kode:"OMN",kodeverk:"LANDKODER",navn:"OMAN"},{kode:"SVK",kodeverk:"LANDKODER",navn:"SLOVAKIA"},{kode:"TUV",kodeverk:"LANDKODER",navn:"TUVALU"},{kode:"VEN",kodeverk:"LANDKODER",navn:"VENEZUELA"},{kode:"ITA",kodeverk:"LANDKODER",navn:"ITALIA"},{kode:"KHM",kodeverk:"LANDKODER",navn:"KAMBODSJA"},{kode:"ARM",kodeverk:"LANDKODER",navn:"ARMENIA"},{kode:"LCA",kodeverk:"LANDKODER",navn:"ST. LUCIA"},{kode:"GIB",kodeverk:"LANDKODER",navn:"GIBRALTAR"},{kode:"JEY",kodeverk:"LANDKODER",navn:"JERSEY"},{kode:"LAO",kodeverk:"LANDKODER",navn:"LAOS"},{kode:"BHR",kodeverk:"LANDKODER",navn:"BAHRAIN"},{kode:"ESH",kodeverk:"LANDKODER",navn:"VEST-SAHARA"},{kode:"TKL",kodeverk:"LANDKODER",navn:"TOKELAU"},{kode:"MNG",kodeverk:"LANDKODER",navn:"MONGOLIA"},{kode:"BLZ",kodeverk:"LANDKODER",navn:"BELIZE"},{kode:"GUF",kodeverk:"LANDKODER",navn:"FRANSK GUYANA"},{kode:"TCA",kodeverk:"LANDKODER",navn:"TURKS/CAICOSØYENE"},{kode:"WSM",kodeverk:"LANDKODER",navn:"SAMOA"},{kode:"JOR",kodeverk:"LANDKODER",navn:"JORDAN"},{kode:"MRT",kodeverk:"LANDKODER",navn:"MAURITANIA"},{kode:"CUB",kodeverk:"LANDKODER",navn:"CUBA"},{kode:"BDI",kodeverk:"LANDKODER",navn:"BURUNDI"},{kode:"GHA",kodeverk:"LANDKODER",navn:"GHANA"},{kode:"KNA",kodeverk:"LANDKODER",navn:"ST.KITTS OG NEVIS"},{kode:"ETH",kodeverk:"LANDKODER",navn:"ETIOPIA"},{kode:"SSD",kodeverk:"LANDKODER",navn:"SØR-SUDAN"},{kode:"VAT",kodeverk:"LANDKODER",navn:"VATIKANSTATEN"},{kode:"CPV",kodeverk:"LANDKODER",navn:"KAPP VERDE"},{kode:"PCN",kodeverk:"LANDKODER",navn:"PITCAIRN"},{kode:"SGP",kodeverk:"LANDKODER",navn:"SINGAPORE"},{kode:"KAZ",kodeverk:"LANDKODER",navn:"KAZAKHSTAN"},{kode:"MYS",kodeverk:"LANDKODER",navn:"MALAYSIA"},{kode:"PHL",kodeverk:"LANDKODER",navn:"FILIPPINENE"},{kode:"EST",kodeverk:"LANDKODER",navn:"ESTLAND"},{kode:"NOR",kodeverk:"LANDKODER",navn:"NORGE"},{kode:"BMU",kodeverk:"LANDKODER",navn:"BERMUDA"},{kode:"LTU",kodeverk:"LANDKODER",navn:"LITAUEN"},{kode:"MAC",kodeverk:"LANDKODER",navn:"MACAO"},{kode:"TON",kodeverk:"LANDKODER",navn:"TONGA"},{kode:"ROU",kodeverk:"LANDKODER",navn:"ROMANIA"},{kode:"BLM",kodeverk:"LANDKODER",navn:"SAINT BARTHELEMY"},{kode:"SAU",kodeverk:"LANDKODER",navn:"SAUDI-ARABIA"},{kode:"GNQ",kodeverk:"LANDKODER",navn:"EKVATORIAL-GUINEA"},{kode:"TGO",kodeverk:"LANDKODER",navn:"TOGO"},{kode:"ZMB",kodeverk:"LANDKODER",navn:"ZAMBIA"},{kode:"VUT",kodeverk:"LANDKODER",navn:"VANUATU"},{kode:"DZA",kodeverk:"LANDKODER",navn:"ALGERIE"},{kode:"TJK",kodeverk:"LANDKODER",navn:"TADZJIKISTAN"},{kode:"NLD",kodeverk:"LANDKODER",navn:"NEDERLAND"},{kode:"KIR",kodeverk:"LANDKODER",navn:"KIRIBATI"},{kode:"GUY",kodeverk:"LANDKODER",navn:"GUYANA"},{kode:"BVT",kodeverk:"LANDKODER",navn:"BOUVETØYA"},{kode:"IND",kodeverk:"LANDKODER",navn:"INDIA"},{kode:"LKA",kodeverk:"LANDKODER",navn:"SRI LANKA"},{kode:"SYR",kodeverk:"LANDKODER",navn:"SYRIA"},{kode:"ESP",kodeverk:"LANDKODER",navn:"SPANIA"},{kode:"GRL",kodeverk:"LANDKODER",navn:"GRØNLAND"},{kode:"AIA",kodeverk:"LANDKODER",navn:"ANGUILLA"},{kode:"IRQ",kodeverk:"LANDKODER",navn:"IRAK"},{kode:"MCO",kodeverk:"LANDKODER",navn:"MONACO"},{kode:"MHL",kodeverk:"LANDKODER",navn:"MARSHALLØYENE"},{kode:"DOM",kodeverk:"LANDKODER",navn:"DEN DOMINIKANSKE REP"},{kode:"FLK",kodeverk:"LANDKODER",navn:"FALKLANDSØYENE"}],RL=[{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-005",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakebetaling endring"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"}],_L=[{kode:"IKKE_I_AKTIVITET_IKKE_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Aktiviteten er ikke dokumentert"},{kode:"I_AKTIVITET",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er i aktivitet"},{kode:"IKKE_I_AKTIVITET_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er ikke i aktivitet"}],bL=[{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"},{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"}],NL=[{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"},{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"}],SL=[{kode:"FODSELSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsdato"},{kode:"TILBAKETREKK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilbaketrekk"},{kode:"ER_ANKEFRIST_IKKE_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er ankefrist ikke overholdt"},{kode:"FNR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsnummer"},{kode:"TERMINBEKREFTELSE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Terminbekreftelse"},{kode:"TERMINDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Termindato"},{kode:"ANKE_RESULTAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Anke resultat"},{kode:"UTTAK_SPLITT_TIDSPERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resulterende periode ved splitting"},{kode:"UTTAK_TREKKDAGER_FLERBARN_KVOTE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager flerbarn kvote"},{kode:"OPPHOLDSRETT_IKKE_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har ikke oppholdsrett i EØS"},{kode:"TILRETTELEGGING_SKAL_BRUKES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avgjør om tilrettelegging skal brukes"},{kode:"ER_ANKE_IKKE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er anke ikke konkret."},{kode:"BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandling"},{kode:"UTTAK_GRADERING_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gradering av arbeidsforhold"},{kode:"ANKE_AVVIST_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til avvist anke"},{kode:"INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt"},{kode:"SOKNADSFRISTVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfristvilkåret"},{kode:"DAGPENGER_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dagpenger"},{kode:"ARBEIDSFORHOLD_BEKREFTET_TOM_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Til og med dato fastsatt av saksbehandler"},{kode:"SOKNADSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfrist"},{kode:"VILKAR_SOM_ANVENDES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vilkår som anvendes"},{kode:"PERIODE_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode f.o.m."},{kode:"UTTAK_PROSENT_UTBETALING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utbetalingsgrad"},{kode:"NYTT_REFUSJONSKRAV",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Nytt refusjonskrav"},{kode:"DODSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dødsdato"},{kode:"DOKUMENTASJON_FORELIGGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dokumentasjon foreligger"},{kode:"LØNNSENDRING_I_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Lønnsendring i beregningsperioden"},{kode:"AVKLART_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklart periode"},{kode:"SVANGERSKAPSPENGERVILKÅRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Svangerskapsvilkåret"},{kode:"KLAGE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aktivitet"},{kode:"UTTAK_STØNADSKONTOTYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stønadskontotype"},{kode:"ALENEOMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aleneomsorg"},{kode:"OMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorg"},{kode:"KONTAKTPERSON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontaktperson"},{kode:"ER_KLAGE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"TILRETTELEGGING_BEHOV_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilrettelegging behov FOM"},{kode:"ANNEN_FORELDER_RETT_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Annen forelder har opptjent rett fra land i EØS"},{kode:"AKTIVITETSKRAV_AVKLARING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklaring om mor er i aktivitet"},{kode:"FASTSETT_RESULTAT_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett resultat for perioden"},{kode:"FRILANSVIRKSOMHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilansvirksomhet"},{kode:"MANN_ADOPTERER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mann adopterer"},{kode:"ANDEL_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Andel i arbeid"},{kode:"DELVIS_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis tilrettelegging FOM"},{kode:"OPPTJENINGSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Opptjeningsvilkåret"},{kode:"ER_KLAGER_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"UTTAK_PERIODE_RESULTAT_TYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultattype for periode"},{kode:"UTLAND",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utland"},{kode:"BRUK_ANTALL_I_TPS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra folkeregisteret"},{kode:"AKTIVITET_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden med aktivitet"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett søkers månedsinntekt fra etterlønn eller sluttpakke"},{kode:"IKKE_OMSORG_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden Søker har ikke omsorg for barnet"},{kode:"DEKNINGSGRAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dekningsgrad"},{kode:"ER_ANKEN_IKKE_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"er anken ikke signert."},{kode:"SYKDOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Sykdom"},{kode:"UTSTEDTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utstedtdato"},{kode:"FODSELSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødsel"},{kode:"NAVN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Navn"},{kode:"UTTAK_TREKKDAGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager"},{kode:"PA_KLAGD_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Påklagd behandlingId"},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Har søker inntekt fra etterlønn eller sluttpakke"},{kode:"OPPHOLDSRETT_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har oppholdsrett i EØS"},{kode:"RETT_TIL_FORELDREPENGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Rett til foreldrepenger"},{kode:"INNTEKTSKATEGORI",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori"},{kode:"ADOPTERER_ALENE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopterer alene"},{kode:"ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Arbeidsforhold"},{kode:"BRUKER_TVUNGEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker er under tvungen forvaltning"},{kode:"DELVIS_REFUSJON_FØR_STARTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis refusjon som utbetales før startdato for full refusjon"},{kode:"ENDRING_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring tidsbegrenset arbeidsforhold"},{kode:"VURDER_GRADERING_PÅ_ANDEL_UTEN_BG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vurder om søker har gradering på en andel uten beregningsgrunnlag"},{kode:"MANDAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mandat"},{kode:"MOR_MOTTAR_UFØRETRYGD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar uføretrygd"},{kode:"HEL_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Hel tilrettelegging FOM"},{kode:"ORGANISASJONSNUMMER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Organisasjonsnummer"},{kode:"UTTAK_GRADERING_AVSLAG_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak avslag gradering"},{kode:"ER_KLAGEN_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"ER_KLAGEFRIST_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"OMSORGSVILKAR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"PA_ANKET_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"på anket behandlingsId."},{kode:"SLUTTE_ARBEID_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Slutte arbeid FOM"},{kode:"BRUK_ANTALL_I_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra søknad"},{kode:"KLAGE_RESULTAT_NFP",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat"},{kode:"FORDELING_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling for arbeidsforhold"},{kode:"UTTAK_SAMTIDIG_UTTAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Samtidig uttak"},{kode:"ER_SOKER_BOSATT_I_NORGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er søker bosatt i Norge?"},{kode:"FRILANS_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilans inntekt"},{kode:"FASTSETT_VIDERE_BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett videre behandling"},{kode:"BRUK_ANTALL_I_VEDTAKET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra vedtaket"},{kode:"OMSORGSOVERTAKELSESDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorgsovertakelsesdato"},{kode:"UTTAK_PERIODE_RESULTAT_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat årsak"},{kode:"ENDRING_NAERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring i næring"},{kode:"FORDELING_FOR_NY_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny andel med fordeling"},{kode:"BEHANDLENDE_ENHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandlende enhet"},{kode:"BRUTTO_NAERINGSINNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Brutto næringsinntekt"},{kode:"FORDELING_ETTER_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling etter besteberegning"},{kode:"STARTDATO_FRA_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Startdato fra søknad"},{kode:"NY_STARTDATO_REFUSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny startdato for refusjon"},{kode:"OVERSTYRT_VURDERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt vurdering"},{kode:"KLAGE_RESULTAT_KA",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ytelsesvedtak"},{kode:"FARESIGNALER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Faresignaler"},{kode:"NY_AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Det er lagt til ny aktivitet for"},{kode:"MOTTAR_YTELSE_FRILANS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for frilansaktiviteten"},{kode:"NY_REFUSJONSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny refusjonsfrist"},{kode:"OVERSTYRT_BEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt beregning"},{kode:"AVKLARSAKSOPPLYSNINGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklar saksopplysninger"},{kode:"INNTEKT_FRA_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt fra arbeidsforhold"},{kode:"SOKERSOPPLYSNINGSPLIKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søkers opplysningsplikt"},{kode:"SELVSTENDIG_NAERINGSDRIVENDE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Selvstendig næringsdrivende"},{kode:"GYLDIG_MEDLEM_FOLKETRYGDEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gyldig medlem i folketrygden"},{kode:"MOTTATT_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottatt dato"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Antall barn"},{kode:"EKTEFELLES_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ektefelles barn"},{kode:"MILITÆR_ELLER_SIVIL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"PERIODE_TOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode t.o.m."},{kode:"FORELDREANSVARSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"STILLINGSPROSENT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stillingsprosent"},{kode:"ADOPSJONSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopsjon"},{kode:"ANKE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"INNTEKTSKATEGORI_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori for andel"},{kode:"KONTROLL_AV_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontroll av besteberegning"},{kode:"MOR_MOTTAR_STØNAD_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar foreldrepenger fra land i EØS"},{kode:"ER_ANKER_IKKE_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Angir om anker ikke er part i saken."},{kode:"ER_VILKÅRENE_TILBAKEKREVING_OPPFYLT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er vilkårene for tilbakekreving oppfylt"},{kode:"NY_FORDELING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny fordeling for"},{kode:"ER_SÆRLIGE_GRUNNER_TIL_REDUKSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er det særlige grunner til reduksjon"},{kode:"MOTTAR_YTELSE_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for arbeid i {value}"},{kode:"TYPE_VERGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Type verge"}],IL=[{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet/savnet"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Uregistrert person"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"UTAN",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person annullert tilgang Fnr"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utvandret"}],OL=[{kode:"ENHETSREGISTERET",kodeverk:"FAGSYSTEM",navn:"Enhetsregisteret"},{kode:"INFOTRYGD",kodeverk:"FAGSYSTEM",navn:"Infotrygd"},{kode:"INNTEKT",kodeverk:"FAGSYSTEM",navn:"INNTEKT"},{kode:"ARENA",kodeverk:"FAGSYSTEM",navn:"Arena"},{kode:"GOSYS",kodeverk:"FAGSYSTEM",navn:"Gosys"},{kode:"JOARK",kodeverk:"FAGSYSTEM",navn:"Joark"},{kode:"K9SAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Folketrygdloven Kapittel 9"},{kode:"FPSAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Foreldrepenger"},{kode:"AAREGISTERET",kodeverk:"FAGSYSTEM",navn:"AAregisteret"},{kode:"MEDL",kodeverk:"FAGSYSTEM",navn:"MEDL"},{kode:"TPS",kodeverk:"FAGSYSTEM",navn:"TPS"},{kode:"VLSP",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Sykepenger"}],LL=[{kode:"ANKE_STADFESTE_YTELSESVEDTAK",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"ANKEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"ANKE_AVVIS",kodeverk:"ANKEVURDERING",navn:"Anken avvises"},{kode:"ANKE_OMGJOER",kodeverk:"ANKEVURDERING",navn:"Anken omgjøres"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket oppheves og hjemsendes"}],KL=[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"}],DL=[{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],PL=[{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"}],FL=[{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er slått sammen med et annet"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforhold lagt til av saksbehandler"},{kode:"BRUK_UTEN_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk, men ikke benytt inntektsmelding"},{kode:"IKKE_BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Ikke bruk"},{kode:"BASERT_PÅ_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet som ikke ligger i AA-reg er basert på inntektsmelding"},{kode:"BRUK_MED_OVERSTYRT_PERIODE",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Inntekten til arbeidsforholdet skal ikke være med i beregningsgrunnlaget"}],ML=[{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"}],GL=[{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"}],BL=[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],jL=[{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],wL=[{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"}],HL=[{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],VL=[{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"}],UL=[{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"},{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"}],qL=[{kode:"SAMMENSATT_KONTROLL",kodeverk:"FAGSAK_MARKERING",navn:"Sammensatt kontroll"},{kode:"EØS_BOSATT_NORGE",kodeverk:"FAGSAK_MARKERING",navn:"EØS bosatt Norge"},{kode:"SELVSTENDIG_NÆRING",kodeverk:"FAGSAK_MARKERING",navn:"Næringsdrivende"},{kode:"BARE_FAR_RETT",kodeverk:"FAGSAK_MARKERING",navn:"Bare far har rett"},{kode:"BOSATT_UTLAND",kodeverk:"FAGSAK_MARKERING",navn:"Bosatt utland"},{kode:"DØD_DØDFØDSEL",kodeverk:"FAGSAK_MARKERING",navn:"Død eller dødfødsel"},{kode:"PRAKSIS_UTSETTELSE",kodeverk:"FAGSAK_MARKERING",navn:"Praksis utsettelse"}],xL={RelasjonsRolleType:JO,HistorikkinnslagType:WO,UttakUtsettelseType:zO,FagsakYtelseType:XO,StønadskontoType:[{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"}],FagsakStatus:ZO,Venteårsak:[{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga for tidlig søknad"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdId som stemmer med Aareg"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på scanning"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev venter søknad."},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."}],AnkeVurderingOmgjør:[{kode:"ANKE_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Gunst omgjør i anke"},{kode:"ANKE_TIL_UGUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Ugunst omgjør i anke"},{kode:"ANKE_DELVIS_OMGJOERING_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Delvis omgjøring, til gunst i anke"}],BehandlingÅrsakType:[{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger inntekt"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Inntektsmelding"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger søknadsfrist"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger opptjening"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Søknad"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger beregning"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. u26-29"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger medlemskap"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev uttak"}],GraderingAvslagÅrsak:[{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"Avslag gradering - arbeid 100% eller mer",lovHjemmel:null}],AktivitetStatus:QO,BeregningsgrunnlagAndeltype:eL,RevurderingVarslingÅrsak:[{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utvandret"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:nL,KonsekvensForYtelsen:rL,Inntektskategori:tL,SivilstandType:aL,SkjermlenkeType:iL,FaktaOmBeregningTilfelle:oL,KlageVurdering:sL,HistorikkBegrunnelseType:lL,OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:uL,KlageAvvistÅrsak:[{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klage er ugyldig",lovHjemmel:null}],BehandlingResultatType:dL,VergeType:kL,TilbakekrevingVidereBehandling:gL,OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"}],FamilieHendelseType:vL,KlageHjemmel:EL,VilkårType:[{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"}],FarSøkerType:[{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"}],FaresignalVurdering:fL,ArbeidType:mL,KlageMedholdÅrsak:[{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"}],Region:TL,OppgaveÅrsak:[{kode:"BEH_SAK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i VL"},{kode:"BEH_SAK_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i Infotrygd"},{kode:"INNHENT_DOK",kodeverk:"OPPGAVE_AARSAK",navn:"Innhent dokumentasjon"},{kode:"VUR_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder dokument i VL"},{kode:"REG_SOK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Registrere søknad i VL"},{kode:"SETTVENT_STO",kodeverk:"OPPGAVE_AARSAK",navn:"Sett Arena utbetaling på vent"},{kode:"RV_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Revurdere i VL"},{kode:"VUR_KONS_YTE_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder konsekvens for ytelse foreldrepenger"},{kode:"GOD_VED_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Godkjenne vedtak i VL"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"},{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"}],HistorikkOpplysningType:pL,FordelingPeriodeKilde:hL,KlageVurderingOmgjør:[{kode:"DELVIS_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Delvis medhold i klage"},{kode:"UGUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Ugunst medhold i klage"},{kode:"GUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Gunst medhold i klage"}],VurderArbeidsforholdHistorikkinnslag:AL,Arbeidskategori:cL,VurderÅrsak:[{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"}],Landkoder:yL,BehandlingType:RL,KontrollerAktivitetskravAvklaring:_L,InnsynResultatType:bL,MedlemskapType:NL,HistorikkEndretFeltType:SL,PersonstatusType:IL,Fagsystem:OL,AnkeVurdering:LL,UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"}],BehandlingStatus:KL,VirksomhetType:DL,MedlemskapDekningType:PL,ArbeidsforholdHandlingType:FL,HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"}],Avslagsårsak:{FP_VK_3:[{kode:"1007",kodeverk:"AVSLAGSARSAK",navn:"Søkt for sent",lovHjemmel:null}],FP_VK_4:[{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1005",kodeverk:"AVSLAGSARSAK",navn:"Ektefelles/samboers barn",lovHjemmel:null},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1006",kodeverk:"AVSLAGSARSAK",navn:"Mann adopterer ikke alene",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_1:[{kode:"1002",kodeverk:"AVSLAGSARSAK",navn:"Søker er medmor",lovHjemmel:null},{kode:"1031",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}'},{kode:"1003",kodeverk:"AVSLAGSARSAK",navn:"Søker er far",lovHjemmel:null},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1001",kodeverk:"AVSLAGSARSAK",navn:"Søkt for tidlig",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1026",kodeverk:"AVSLAGSARSAK",navn:"Fødselsdato ikke oppgitt eller registrert",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_2:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],"-":[],FP_VK_41:[{kode:"1041",kodeverk:"AVSLAGSARSAK",navn:"For lavt brutto beregningsgrunnlag",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_41", "lovreferanse": "14-7"}]}]}'}],FP_VK_21:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_11:[{kode:"1027",kodeverk:"AVSLAGSARSAK",navn:"Ingen barn dokumentert på far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1028",kodeverk:"AVSLAGSARSAK",navn:"Mor fyller ikke vilkåret for sykdom",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1029",kodeverk:"AVSLAGSARSAK",navn:"Bruker er ikke registrert som far/medmor til barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'}],FP_VK_33:[{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1017",kodeverk:"AVSLAGSARSAK",navn:"Omsorgsovertakelse etter 56 uker",lovHjemmel:null},{kode:"1016",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1018",kodeverk:"AVSLAGSARSAK",navn:"Ikke foreldreansvar alene etter barnelova",lovHjemmel:null}],FP_VK_34:[{kode:"1019",kodeverk:"AVSLAGSARSAK",navn:"Manglende dokumentasjon",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_34", "lovreferanse": "21-3"}]}]}'}],FP_VK_23:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_8:[{kode:"1014",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke foreldreansvar",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1013",kodeverk:"AVSLAGSARSAK",navn:"Barn ikke under 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1015",kodeverk:"AVSLAGSARSAK",navn:"Søker har hatt vanlig samvær med barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'}],SVP_VK_1:[{kode:"1065",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1062",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker har mottatt sykepenger",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1066",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1064",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1063",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1061",kodeverk:"AVSLAGSARSAK",navn:"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 3. ledd"}]}]}'},{kode:"1060",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker er ikke gravid kvinne",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'}],FP_VK_16:[{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'},{kode:"1051",kodeverk:"AVSLAGSARSAK",navn:"Stebarnsadopsjon ikke flere dager igjen",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16", "lovreferanse": "14-5"}]}]}'}],FP_VK_5:[{kode:"1009",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1008",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1012",kodeverk:"AVSLAGSARSAK",navn:"Far har ikke omsorg for barnet",lovHjemmel:null},{kode:"1010",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død ved fødsel/omsorg",lovHjemmel:null}],FP_VK_2_L:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],FP_VK_2_F:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1052",kodeverk:"AVSLAGSARSAK",navn:"Innflyttet for mindre enn ett år siden",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK_2_F", "lovreferanse": "14-17 5. ledd"}]}]}'}]},OpptjeningAktivitetType:ML,PermisjonsbeskrivelseType:GL,Språkkode:[{kode:"NB",kodeverk:"SPRAAK_KODE",navn:"Norsk"},{kode:"NN",kodeverk:"SPRAAK_KODE",navn:"Nynorsk"},{kode:"EN",kodeverk:"SPRAAK_KODE",navn:"Engelsk"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"}],OppholdstillatelseType:BL,MedlemskapManuellVurderingType:jL,ManuellBehandlingÅrsak:[{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."}],MorsAktivitet:wL,NaturalYtelseType:HL,PeriodeResultatÅrsak:[{kode:"2010",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4072",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjuende ledd: Barnet er dødt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Ikke heltidsarbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4085",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Det er ikke samtykke mellom partene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-16"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4052",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4084",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4097",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Adopsjonsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4104",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Stønadsperiode for nytt barn",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4086",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-11"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ikke stønadsdager igjen på stønadskonto",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ferie/arbeid innenfor de første 6 ukene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4112",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Barnets innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2017",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2036",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4071",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Bruker er død",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4098",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Foreldreansvarsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4067",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4066",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2026",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12, jf. §14-16: Gradering av kvote/overført kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4081",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4053",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2014",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4056",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2016",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2004",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2018",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2024",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4068",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4087",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-2: Opphør medlemskap",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-2"}}}',sortering:"14-02",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4110",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4115",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4096",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Fødselsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4073",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4069",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4062",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4089",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-9"}}}',sortering:"14-11-0",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4075",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjuende ledd: Ikke sammenhengende perioder",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2028",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4060",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2006",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger før fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4105",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4058",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Innvilget fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4095",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR"]},{kode:"4116",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4092",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Avslag overføring - har ikke aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4008",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4064",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4111",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4054",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-09-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4077",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10 a"}}}',sortering:"14-10-0-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2019",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Avslag utsettelse før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4050",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Innvilget uttak av kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4082",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2027",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4088",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4063",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4099",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-6: Opptjeningsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-6"}}}',sortering:"14-06",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4103",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-13: Innvilget fellesperiode til far",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Mor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4107",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Barnet er over 3 år",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ikke lovbestemt ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4059",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13, 14-9"}}}',sortering:"14-13-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2021",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4070",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4074",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,21-3"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2011",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4065",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4057",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13,14-16"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4076",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4040",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4061",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4041",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§22-13 tredje ledd: Brudd på søknadsfrist",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "22-13"}}}',sortering:"22-13-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4106",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15: Innvilget foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4055",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4093",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16: Avslag gradering - søker er ikke i arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4102",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4051",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2015",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4100",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 andre ledd: Uttak før omsorgsovertakelse",lovHjemmel:"",sortering:"14-10-2",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Far/medmor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4117",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]}],ForeldreType:VL,AdresseType:UL,FagsakMarkering:qL},WL={title:"fakta/fakta-inntektsmelding",component:Xs},Fv=e=>G.jsx(Xs,{...e}),as={innsendingstidspunkt:"2024-08-08T00:00:00",kildeSystem:"Altinn",aktiveNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",arbeidsgiverIdent:"1",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},$t=Fv.bind({});$t.args={alleKodeverk:xL,fagsak:{saksnummer:"123",fagsakYtelseType:"FP"},alleBehandlinger:[{uuid:"UUID1",type:"BT-002",opprettet:"2024-07-13",avsluttet:"2024-08-13"},{uuid:"UUID2",type:"BT-003",opprettet:"2024-07-14",avsluttet:"2024-08-14"},{uuid:"UUID3",type:"BT-004",opprettet:"2024-07-15",avsluttet:"2024-08-15"}],arbeidsgiverOpplysningerPerId:{1:{navn:"Rema 1000"},2:{navn:"Kiwi"},3:{navn:"Meny"}},behandling:{uuid:"UUID2"},inntektsmeldinger:[{...as,tilknyttedeBehandlingIder:["UUID1"],inntektPrMnd:10000.5,innsendingstidspunkt:"2024-07-20T00:00:00",startDatoPermisjon:"2024-10-10",refusjonPrMnd:void 0,journalpostId:"1",refusjonsperioder:[{refusjonsbeløp:{verdi:5e3},indexKey:"1",fom:"2024-01-10"},{refusjonsbeløp:{verdi:3e3},indexKey:"2",fom:"2024-01-09"}]},{...as,tilknyttedeBehandlingIder:["UUID1","UUID2"],inntektPrMnd:2e4,innsendingstidspunkt:"2024-08-01T00:00:00",kildeSystem:"FS22",refusjonPrMnd:void 0,arbeidsgiverIdent:"2",journalpostId:"2"},{...as,tilknyttedeBehandlingIder:[],inntektPrMnd:3e4,innsendingstidspunkt:"2024-09-10T00:00:00",innsendingsårsak:"ENDRING",kildeSystem:"NAV_NO",startDatoPermisjon:"2024-11-11",arbeidsgiverIdent:"3",journalpostId:"3",aktiveNaturalytelser:[{periode:{fomDato:"2024-01-09",tomDato:"2024-10-09"},type:"ELEKTRISK_KOMMUNIKASJON",beloepPerMnd:{verdi:999},indexKey:"1"},{periode:{fomDato:"2024-01-11",tomDato:"2024-10-11"},type:"LOSJI",beloepPerMnd:{verdi:10},indexKey:"2"}]}]};const Jt=Fv.bind({});Jt.args={inntektsmeldinger:[]};var Rk,_k,bk;$t.parameters={...$t.parameters,docs:{...(Rk=$t.parameters)==null?void 0:Rk.docs,source:{originalSource:"props => <InntektsmeldingFaktaIndex {...props} />",...(bk=(_k=$t.parameters)==null?void 0:_k.docs)==null?void 0:bk.source}}};var Nk,Sk,Ik;Jt.parameters={...Jt.parameters,docs:{...(Nk=Jt.parameters)==null?void 0:Nk.docs,source:{originalSource:"props => <InntektsmeldingFaktaIndex {...props} />",...(Ik=(Sk=Jt.parameters)==null?void 0:Sk.docs)==null?void 0:Ik.source}}};const zL=["InntektsmeldingDefault","IngenInntektsmeldinger"];export{Jt as IngenInntektsmeldinger,$t as InntektsmeldingDefault,zL as __namedExportsOrder,WL as default};
