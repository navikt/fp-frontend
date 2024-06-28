import{r as C,R as g}from"./index-DVXBtNgz.js";import{_ as k,a as ge,b as at,c as ke}from"./tslib.es6-pJfR_DrR.js";import{a as Wt}from"./dayjs.min-q5bIuV4J.js";const yt={FORSTEGANGSSOKNAD:"BT-002",KLAGE:"BT-003",REVURDERING:"BT-004",DOKUMENTINNSYN:"BT-006",TILBAKEKREVING:"BT-007",ANKE:"BT-008",TILBAKEKREVING_REVURDERING:"BT-009"};var aa={exports:{}},I={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z=typeof Symbol=="function"&&Symbol.for,Gn=Z?Symbol.for("react.element"):60103,Wn=Z?Symbol.for("react.portal"):60106,$t=Z?Symbol.for("react.fragment"):60107,Vt=Z?Symbol.for("react.strict_mode"):60108,zt=Z?Symbol.for("react.profiler"):60114,Zt=Z?Symbol.for("react.provider"):60109,Xt=Z?Symbol.for("react.context"):60110,$n=Z?Symbol.for("react.async_mode"):60111,Kt=Z?Symbol.for("react.concurrent_mode"):60111,Jt=Z?Symbol.for("react.forward_ref"):60112,Qt=Z?Symbol.for("react.suspense"):60113,Ws=Z?Symbol.for("react.suspense_list"):60120,en=Z?Symbol.for("react.memo"):60115,tn=Z?Symbol.for("react.lazy"):60116,$s=Z?Symbol.for("react.block"):60121,Vs=Z?Symbol.for("react.fundamental"):60117,zs=Z?Symbol.for("react.responder"):60118,Zs=Z?Symbol.for("react.scope"):60119;function re(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Gn:switch(e=e.type,e){case $n:case Kt:case $t:case zt:case Vt:case Qt:return e;default:switch(e=e&&e.$$typeof,e){case Xt:case Jt:case tn:case en:case Zt:return e;default:return t}}case Wn:return t}}}function sa(e){return re(e)===Kt}I.AsyncMode=$n;I.ConcurrentMode=Kt;I.ContextConsumer=Xt;I.ContextProvider=Zt;I.Element=Gn;I.ForwardRef=Jt;I.Fragment=$t;I.Lazy=tn;I.Memo=en;I.Portal=Wn;I.Profiler=zt;I.StrictMode=Vt;I.Suspense=Qt;I.isAsyncMode=function(e){return sa(e)||re(e)===$n};I.isConcurrentMode=sa;I.isContextConsumer=function(e){return re(e)===Xt};I.isContextProvider=function(e){return re(e)===Zt};I.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gn};I.isForwardRef=function(e){return re(e)===Jt};I.isFragment=function(e){return re(e)===$t};I.isLazy=function(e){return re(e)===tn};I.isMemo=function(e){return re(e)===en};I.isPortal=function(e){return re(e)===Wn};I.isProfiler=function(e){return re(e)===zt};I.isStrictMode=function(e){return re(e)===Vt};I.isSuspense=function(e){return re(e)===Qt};I.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===$t||e===Kt||e===zt||e===Vt||e===Qt||e===Ws||typeof e=="object"&&e!==null&&(e.$$typeof===tn||e.$$typeof===en||e.$$typeof===Zt||e.$$typeof===Xt||e.$$typeof===Jt||e.$$typeof===Vs||e.$$typeof===zs||e.$$typeof===Zs||e.$$typeof===$s)};I.typeOf=re;aa.exports=I;var Xs=aa.exports,ia=Xs,Ks={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Js={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},oa={};oa[ia.ForwardRef]=Ks;oa[ia.Memo]=Js;function la(e,t,n){if(n===void 0&&(n=Error),!e)throw new n(t)}var E;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(E||(E={}));var q;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(q||(q={}));var st;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(st||(st={}));function Dr(e){return e.type===q.literal}function Qs(e){return e.type===q.argument}function ua(e){return e.type===q.number}function da(e){return e.type===q.date}function ma(e){return e.type===q.time}function fa(e){return e.type===q.select}function ha(e){return e.type===q.plural}function ei(e){return e.type===q.pound}function ga(e){return e.type===q.tag}function ca(e){return!!(e&&typeof e=="object"&&e.type===st.number)}function En(e){return!!(e&&typeof e=="object"&&e.type===st.dateTime)}var pa=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,ti=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function ni(e){var t={};return e.replace(ti,function(n){var r=n.length;switch(n[0]){case"G":t.era=r===4?"long":r===5?"narrow":"short";break;case"y":t.year=r===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=r===4?"long":r===5?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][r-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][r-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][r-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][r-1];break;case"s":t.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),t}var ri=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function ai(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var t=e.split(ri).filter(function(f){return f.length>0}),n=[],r=0,a=t;r<a.length;r++){var s=a[r],i=s.split("/");if(i.length===0)throw new Error("Invalid number skeleton");for(var o=i[0],l=i.slice(1),u=0,d=l;u<d.length;u++){var h=d[u];if(h.length===0)throw new Error("Invalid number skeleton")}n.push({stem:o,options:l})}return n}function si(e){return e.replace(/^(.*?)-/,"")}var xr=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,ya=/^(@+)?(\+|#+)?[rs]?$/g,ii=/(\*)(0+)|(#+)(0+)|(0+)/g,va=/^(0+)$/;function Er(e){var t={};return e[e.length-1]==="r"?t.roundingPriority="morePrecision":e[e.length-1]==="s"&&(t.roundingPriority="lessPrecision"),e.replace(ya,function(n,r,a){return typeof a!="string"?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):a==="+"?t.minimumSignificantDigits=r.length:r[0]==="#"?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+(typeof a=="string"?a.length:0)),""}),t}function ka(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function oi(e){var t;if(e[0]==="E"&&e[1]==="E"?(t={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(t={notation:"scientific"},e=e.slice(1)),t){var n=e.slice(0,2);if(n==="+!"?(t.signDisplay="always",e=e.slice(2)):n==="+?"&&(t.signDisplay="exceptZero",e=e.slice(2)),!va.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function Pr(e){var t={},n=ka(e);return n||t}function li(e){for(var t={},n=0,r=e;n<r.length;n++){var a=r[n];switch(a.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=a.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=si(a.options[0]);continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=k(k(k({},t),{notation:"scientific"}),a.options.reduce(function(l,u){return k(k({},l),Pr(u))},{}));continue;case"engineering":t=k(k(k({},t),{notation:"engineering"}),a.options.reduce(function(l,u){return k(k({},l),Pr(u))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":t.roundingMode="floor";continue;case"rounding-mode-ceiling":t.roundingMode="ceil";continue;case"rounding-mode-down":t.roundingMode="trunc";continue;case"rounding-mode-up":t.roundingMode="expand";continue;case"rounding-mode-half-even":t.roundingMode="halfEven";continue;case"rounding-mode-half-down":t.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":t.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(ii,function(l,u,d,h,f,S){if(u)t.minimumIntegerDigits=d.length;else{if(h&&f)throw new Error("We currently do not support maximum integer digits");if(S)throw new Error("We currently do not support exact integer digits")}return""});continue}if(va.test(a.stem)){t.minimumIntegerDigits=a.stem.length;continue}if(xr.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(xr,function(l,u,d,h,f,S){return d==="*"?t.minimumFractionDigits=u.length:h&&h[0]==="#"?t.maximumFractionDigits=h.length:f&&S?(t.minimumFractionDigits=f.length,t.maximumFractionDigits=f.length+S.length):(t.minimumFractionDigits=u.length,t.maximumFractionDigits=u.length),""});var s=a.options[0];s==="w"?t=k(k({},t),{trailingZeroDisplay:"stripIfInteger"}):s&&(t=k(k({},t),Er(s)));continue}if(ya.test(a.stem)){t=k(k({},t),Er(a.stem));continue}var i=ka(a.stem);i&&(t=k(k({},t),i));var o=oi(a.stem);o&&(t=k(k({},t),o))}return t}var Pt={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function ui(e,t){for(var n="",r=0;r<e.length;r++){var a=e.charAt(r);if(a==="j"){for(var s=0;r+1<e.length&&e.charAt(r+1)===a;)s++,r++;var i=1+(s&1),o=s<2?1:3+(s>>1),l="a",u=di(t);for((u=="H"||u=="k")&&(o=0);o-- >0;)n+=l;for(;i-- >0;)n=u+n}else a==="J"?n+="H":n+=a}return n}function di(e){var t=e.hourCycle;if(t===void 0&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var n=e.language,r;n!=="root"&&(r=e.maximize().region);var a=Pt[r||""]||Pt[n||""]||Pt["".concat(n,"-001")]||Pt["001"];return a[0]}var vn,mi=new RegExp("^".concat(pa.source,"*")),fi=new RegExp("".concat(pa.source,"*$"));function P(e,t){return{start:e,end:t}}var hi=!!String.prototype.startsWith&&"_a".startsWith("a",1),gi=!!String.fromCodePoint,ci=!!Object.fromEntries,pi=!!String.prototype.codePointAt,yi=!!String.prototype.trimStart,vi=!!String.prototype.trimEnd,ki=!!Number.isSafeInteger,bi=ki?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Pn=!0;try{var _i=_a("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Pn=((vn=_i.exec("a"))===null||vn===void 0?void 0:vn[0])==="a"}catch{Pn=!1}var Mr=hi?function(t,n,r){return t.startsWith(n,r)}:function(t,n,r){return t.slice(r,r+n.length)===n},Mn=gi?String.fromCodePoint:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var r="",a=t.length,s=0,i;a>s;){if(i=t[s++],i>1114111)throw RangeError(i+" is not a valid code point");r+=i<65536?String.fromCharCode(i):String.fromCharCode(((i-=65536)>>10)+55296,i%1024+56320)}return r},Nr=ci?Object.fromEntries:function(t){for(var n={},r=0,a=t;r<a.length;r++){var s=a[r],i=s[0],o=s[1];n[i]=o}return n},ba=pi?function(t,n){return t.codePointAt(n)}:function(t,n){var r=t.length;if(!(n<0||n>=r)){var a=t.charCodeAt(n),s;return a<55296||a>56319||n+1===r||(s=t.charCodeAt(n+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},Si=yi?function(t){return t.trimStart()}:function(t){return t.replace(mi,"")},Ti=vi?function(t){return t.trimEnd()}:function(t){return t.replace(fi,"")};function _a(e,t){return new RegExp(e,t)}var Nn;if(Pn){var Or=_a("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Nn=function(t,n){var r;Or.lastIndex=n;var a=Or.exec(t);return(r=a[1])!==null&&r!==void 0?r:""}}else Nn=function(t,n){for(var r=[];;){var a=ba(t,n);if(a===void 0||Sa(a)||Ei(a))break;r.push(a),n+=a>=65536?2:1}return Mn.apply(void 0,r)};var wi=function(){function e(t,n){n===void 0&&(n={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!n.ignoreTag,this.locale=n.locale,this.requiresOtherClause=!!n.requiresOtherClause,this.shouldParseSkeletons=!!n.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(t,n,r){for(var a=[];!this.isEOF();){var s=this.char();if(s===123){var i=this.parseArgument(t,r);if(i.err)return i;a.push(i.val)}else{if(s===125&&t>0)break;if(s===35&&(n==="plural"||n==="selectordinal")){var o=this.clonePosition();this.bump(),a.push({type:q.pound,location:P(o,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(r)break;return this.error(E.UNMATCHED_CLOSING_TAG,P(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&On(this.peek()||0)){var i=this.parseTag(t,n);if(i.err)return i;a.push(i.val)}else{var i=this.parseLiteral(t,n);if(i.err)return i;a.push(i.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(t,n){var r=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:q.literal,value:"<".concat(a,"/>"),location:P(r,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(t+1,n,!0);if(s.err)return s;var i=s.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!On(this.char()))return this.error(E.INVALID_TAG,P(o,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return a!==u?this.error(E.UNMATCHED_CLOSING_TAG,P(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:q.tag,value:a,children:i,location:P(r,this.clonePosition())},err:null}:this.error(E.INVALID_TAG,P(o,this.clonePosition())))}else return this.error(E.UNCLOSED_TAG,P(r,this.clonePosition()))}else return this.error(E.INVALID_TAG,P(r,this.clonePosition()))},e.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&xi(this.char());)this.bump();return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(t,n){for(var r=this.clonePosition(),a="";;){var s=this.tryParseQuote(n);if(s){a+=s;continue}var i=this.tryParseUnquoted(t,n);if(i){a+=i;continue}var o=this.tryParseLeftAngleBracket();if(o){a+=o;continue}break}var l=P(r,this.clonePosition());return{val:{type:q.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Di(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(t){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(t==="plural"||t==="selectordinal")break;return null;default:return null}this.bump();var n=[this.char()];for(this.bump();!this.isEOF();){var r=this.char();if(r===39)if(this.peek()===39)n.push(39),this.bump();else{this.bump();break}else n.push(r);this.bump()}return Mn.apply(void 0,n)},e.prototype.tryParseUnquoted=function(t,n){if(this.isEOF())return null;var r=this.char();return r===60||r===123||r===35&&(n==="plural"||n==="selectordinal")||r===125&&t>0?null:(this.bump(),Mn(r))},e.prototype.parseArgument=function(t,n){var r=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE,P(r,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(E.EMPTY_ARGUMENT,P(r,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(E.MALFORMED_ARGUMENT,P(r,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE,P(r,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:q.argument,value:a,location:P(r,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE,P(r,this.clonePosition())):this.parseArgumentOptions(t,n,a,r);default:return this.error(E.MALFORMED_ARGUMENT,P(r,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),n=this.offset(),r=Nn(this.message,n),a=n+r.length;this.bumpTo(a);var s=this.clonePosition(),i=P(t,s);return{value:r,location:i}},e.prototype.parseArgumentOptions=function(t,n,r,a){var s,i=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(E.EXPECT_ARGUMENT_TYPE,P(i,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var f=Ti(h.val);if(f.length===0)return this.error(E.EXPECT_ARGUMENT_STYLE,P(this.clonePosition(),this.clonePosition()));var S=P(d,this.clonePosition());u={style:f,styleLocation:S}}var w=this.tryParseArgumentClose(a);if(w.err)return w;var p=P(a,this.clonePosition());if(u&&Mr(u==null?void 0:u.style,"::",0)){var N=Si(u.style.slice(2));if(o==="number"){var h=this.parseNumberSkeletonFromString(N,u.styleLocation);return h.err?h:{val:{type:q.number,value:r,location:p,style:h.val},err:null}}else{if(N.length===0)return this.error(E.EXPECT_DATE_TIME_SKELETON,p);var D=N;this.locale&&(D=ui(N,this.locale));var f={type:st.dateTime,pattern:D,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?ni(D):{}},L=o==="date"?q.date:q.time;return{val:{type:L,value:r,location:p,style:f},err:null}}}return{val:{type:o==="number"?q.number:o==="date"?q.date:q.time,value:r,location:p,style:(s=u==null?void 0:u.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var O=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(E.EXPECT_SELECT_ARGUMENT_OPTIONS,P(O,k({},O)));this.bumpSpace();var de=this.parseIdentifierIfPossible(),J=0;if(o!=="select"&&de.value==="offset"){if(!this.bumpIf(":"))return this.error(E.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,P(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(E.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,E.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),de=this.parseIdentifierIfPossible(),J=h.val}var R=this.tryParsePluralOrSelectOptions(t,o,n,de);if(R.err)return R;var w=this.tryParseArgumentClose(a);if(w.err)return w;var _=P(a,this.clonePosition());return o==="select"?{val:{type:q.select,value:r,options:Nr(R.val),location:_},err:null}:{val:{type:q.plural,value:r,options:Nr(R.val),offset:J,pluralType:o==="plural"?"cardinal":"ordinal",location:_},err:null}}default:return this.error(E.INVALID_ARGUMENT_TYPE,P(i,l))}},e.prototype.tryParseArgumentClose=function(t){return this.isEOF()||this.char()!==125?this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE,P(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,n=this.clonePosition();!this.isEOF();){var r=this.char();switch(r){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(E.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,P(a,this.clonePosition()));this.bump();break}case 123:{t+=1,this.bump();break}case 125:{if(t>0)t-=1;else return{val:this.message.slice(n.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(n.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(t,n){var r=[];try{r=ai(t)}catch{return this.error(E.INVALID_NUMBER_SKELETON,n)}return{val:{type:st.number,tokens:r,location:n,parsedOptions:this.shouldParseSkeletons?li(r):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(t,n,r,a){for(var s,i=!1,o=[],l=new Set,u=a.value,d=a.location;;){if(u.length===0){var h=this.clonePosition();if(n!=="select"&&this.bumpIf("=")){var f=this.tryParseDecimalInteger(E.EXPECT_PLURAL_ARGUMENT_SELECTOR,E.INVALID_PLURAL_ARGUMENT_SELECTOR);if(f.err)return f;d=P(h,this.clonePosition()),u=this.message.slice(h.offset,this.offset())}else break}if(l.has(u))return this.error(n==="select"?E.DUPLICATE_SELECT_ARGUMENT_SELECTOR:E.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);u==="other"&&(i=!0),this.bumpSpace();var S=this.clonePosition();if(!this.bumpIf("{"))return this.error(n==="select"?E.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:E.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,P(this.clonePosition(),this.clonePosition()));var w=this.parseMessage(t+1,n,r);if(w.err)return w;var p=this.tryParseArgumentClose(S);if(p.err)return p;o.push([u,{value:w.val,location:P(S,this.clonePosition())}]),l.add(u),this.bumpSpace(),s=this.parseIdentifierIfPossible(),u=s.value,d=s.location}return o.length===0?this.error(n==="select"?E.EXPECT_SELECT_ARGUMENT_SELECTOR:E.EXPECT_PLURAL_ARGUMENT_SELECTOR,P(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!i?this.error(E.MISSING_OTHER_CLAUSE,P(this.clonePosition(),this.clonePosition())):{val:o,err:null}},e.prototype.tryParseDecimalInteger=function(t,n){var r=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);for(var s=!1,i=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)s=!0,i=i*10+(o-48),this.bump();else break}var l=P(a,this.clonePosition());return s?(i*=r,bi(i)?{val:i,err:null}:this.error(n,l)):this.error(t,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var n=ba(this.message,t);if(n===void 0)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return n},e.prototype.error=function(t,n){return{val:null,err:{kind:t,message:this.message,location:n}}},e.prototype.bump=function(){if(!this.isEOF()){var t=this.char();t===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},e.prototype.bumpIf=function(t){if(Mr(this.message,t,this.offset())){for(var n=0;n<t.length;n++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(t){var n=this.offset(),r=this.message.indexOf(t,n);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var n=this.offset();if(n===t)break;if(n>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Sa(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),n=this.offset(),r=this.message.charCodeAt(n+(t>=65536?2:1));return r??null},e}();function On(e){return e>=97&&e<=122||e>=65&&e<=90}function Di(e){return On(e)||e===47}function xi(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Sa(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function Ei(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Rn(e){e.forEach(function(t){if(delete t.location,fa(t)||ha(t))for(var n in t.options)delete t.options[n].location,Rn(t.options[n].value);else ua(t)&&ca(t.style)||(da(t)||ma(t))&&En(t.style)?delete t.style.location:ga(t)&&Rn(t.children)})}function Pi(e,t){t===void 0&&(t={}),t=k({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var n=new wi(e,t).parse();if(n.err){var r=SyntaxError(E[n.err.kind]);throw r.location=n.err.location,r.originalMessage=n.err.message,r}return t!=null&&t.captureLocation||Rn(n.val),n.val}function ye(e,t){var n=t&&t.cache?t.cache:Ai,r=t&&t.serializer?t.serializer:Fi,a=t&&t.strategy?t.strategy:Ni;return a(e,{cache:n,serializer:r})}function Mi(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Ta(e,t,n,r){var a=Mi(r)?r:n(r),s=t.get(a);return typeof s>"u"&&(s=e.call(this,r),t.set(a,s)),s}function wa(e,t,n){var r=Array.prototype.slice.call(arguments,3),a=n(r),s=t.get(a);return typeof s>"u"&&(s=e.apply(this,r),t.set(a,s)),s}function Vn(e,t,n,r,a){return n.bind(t,e,r,a)}function Ni(e,t){var n=e.length===1?Ta:wa;return Vn(e,this,n,t.cache.create(),t.serializer)}function Oi(e,t){return Vn(e,this,wa,t.cache.create(),t.serializer)}function Ri(e,t){return Vn(e,this,Ta,t.cache.create(),t.serializer)}var Fi=function(){return JSON.stringify(arguments)};function zn(){this.cache=Object.create(null)}zn.prototype.get=function(e){return this.cache[e]};zn.prototype.set=function(e,t){this.cache[e]=t};var Ai={create:function(){return new zn}},ve={variadic:Oi,monadic:Ri},Te;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Te||(Te={}));var Ye=function(e){ge(t,e);function t(n,r,a){var s=e.call(this,n)||this;return s.code=r,s.originalMessage=a,s}return t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),Rr=function(e){ge(t,e);function t(n,r,a,s){return e.call(this,'Invalid values for "'.concat(n,'": "').concat(r,'". Options are "').concat(Object.keys(a).join('", "'),'"'),Te.INVALID_VALUE,s)||this}return t}(Ye),Ii=function(e){ge(t,e);function t(n,r,a){return e.call(this,'Value for "'.concat(n,'" must be of type ').concat(r),Te.INVALID_VALUE,a)||this}return t}(Ye),Hi=function(e){ge(t,e);function t(n,r){return e.call(this,'The intl string context variable "'.concat(n,'" was not provided to the string "').concat(r,'"'),Te.MISSING_VALUE,r)||this}return t}(Ye),K;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(K||(K={}));function Bi(e){return e.length<2?e:e.reduce(function(t,n){var r=t[t.length-1];return!r||r.type!==K.literal||n.type!==K.literal?t.push(n):r.value+=n.value,t},[])}function Da(e){return typeof e=="function"}function Rt(e,t,n,r,a,s,i){if(e.length===1&&Dr(e[0]))return[{type:K.literal,value:e[0].value}];for(var o=[],l=0,u=e;l<u.length;l++){var d=u[l];if(Dr(d)){o.push({type:K.literal,value:d.value});continue}if(ei(d)){typeof s=="number"&&o.push({type:K.literal,value:n.getNumberFormat(t).format(s)});continue}var h=d.value;if(!(a&&h in a))throw new Hi(h,i);var f=a[h];if(Qs(d)){(!f||typeof f=="string"||typeof f=="number")&&(f=typeof f=="string"||typeof f=="number"?String(f):""),o.push({type:typeof f=="string"?K.literal:K.object,value:f});continue}if(da(d)){var S=typeof d.style=="string"?r.date[d.style]:En(d.style)?d.style.parsedOptions:void 0;o.push({type:K.literal,value:n.getDateTimeFormat(t,S).format(f)});continue}if(ma(d)){var S=typeof d.style=="string"?r.time[d.style]:En(d.style)?d.style.parsedOptions:r.time.medium;o.push({type:K.literal,value:n.getDateTimeFormat(t,S).format(f)});continue}if(ua(d)){var S=typeof d.style=="string"?r.number[d.style]:ca(d.style)?d.style.parsedOptions:void 0;S&&S.scale&&(f=f*(S.scale||1)),o.push({type:K.literal,value:n.getNumberFormat(t,S).format(f)});continue}if(ga(d)){var w=d.children,p=d.value,N=a[p];if(!Da(N))throw new Ii(p,"function",i);var D=Rt(w,t,n,r,a,s),L=N(D.map(function(J){return J.value}));Array.isArray(L)||(L=[L]),o.push.apply(o,L.map(function(J){return{type:typeof J=="string"?K.literal:K.object,value:J}}))}if(fa(d)){var O=d.options[f]||d.options.other;if(!O)throw new Rr(d.value,f,Object.keys(d.options),i);o.push.apply(o,Rt(O.value,t,n,r,a));continue}if(ha(d)){var O=d.options["=".concat(f)];if(!O){if(!Intl.PluralRules)throw new Ye(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Te.MISSING_INTL_API,i);var de=n.getPluralRules(t,{type:d.pluralType}).select(f-(d.offset||0));O=d.options[de]||d.options.other}if(!O)throw new Rr(d.value,f,Object.keys(d.options),i);o.push.apply(o,Rt(O.value,t,n,r,a,f-(d.offset||0)));continue}}return Bi(o)}function Ci(e,t){return t?k(k(k({},e||{}),t||{}),Object.keys(e).reduce(function(n,r){return n[r]=k(k({},e[r]),t[r]||{}),n},{})):e}function Li(e,t){return t?Object.keys(e).reduce(function(n,r){return n[r]=Ci(e[r],t[r]),n},k({},e)):e}function kn(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}function qi(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:ye(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.NumberFormat).bind.apply(t,ke([void 0],n,!1)))},{cache:kn(e.number),strategy:ve.variadic}),getDateTimeFormat:ye(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.DateTimeFormat).bind.apply(t,ke([void 0],n,!1)))},{cache:kn(e.dateTime),strategy:ve.variadic}),getPluralRules:ye(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.PluralRules).bind.apply(t,ke([void 0],n,!1)))},{cache:kn(e.pluralRules),strategy:ve.variadic})}}var xa=function(){function e(t,n,r,a){var s=this;if(n===void 0&&(n=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var u=s.formatToParts(l);if(u.length===1)return u[0].value;var d=u.reduce(function(h,f){return!h.length||f.type!==K.literal||typeof h[h.length-1]!="string"?h.push(f.value):h[h.length-1]+=f.value,h},[]);return d.length<=1?d[0]||"":d},this.formatToParts=function(l){return Rt(s.ast,s.locales,s.formatters,s.formats,l,void 0,s.message)},this.resolvedOptions=function(){var l;return{locale:((l=s.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=n,this.resolvedLocale=e.resolveLocale(n),typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var i=a||{};i.formatters;var o=at(i,["formatters"]);this.ast=e.__parse(t,k(k({},o),{locale:this.resolvedLocale}))}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Li(e.formats,r),this.formatters=a&&a.formatters||qi(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(t){if(!(typeof Intl.Locale>"u")){var n=Intl.NumberFormat.supportedLocalesOf(t);return n.length>0?new Intl.Locale(n[0]):new Intl.Locale(typeof t=="string"?t:t[0])}},e.__parse=Pi,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),$e;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})($e||($e={}));var St=function(e){ge(t,e);function t(n,r,a){var s=this,i=a?a instanceof Error?a:new Error(String(a)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(n,"] ").concat(r,`
`).concat(i?`
`.concat(i.message,`
`).concat(i.stack):""))||this,s.code=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,t),s}return t}(Error),Yi=function(e){ge(t,e);function t(n,r){return e.call(this,$e.UNSUPPORTED_FORMATTER,n,r)||this}return t}(St),Ui=function(e){ge(t,e);function t(n,r){return e.call(this,$e.INVALID_CONFIG,n,r)||this}return t}(St),Fr=function(e){ge(t,e);function t(n,r){return e.call(this,$e.MISSING_DATA,n,r)||this}return t}(St),oe=function(e){ge(t,e);function t(n,r,a){var s=e.call(this,$e.FORMAT_ERROR,"".concat(n,`
Locale: `).concat(r,`
`),a)||this;return s.locale=r,s}return t}(St),bn=function(e){ge(t,e);function t(n,r,a,s){var i=e.call(this,"".concat(n,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),r,s)||this;return i.descriptor=a,i.locale=r,i}return t}(oe),ji=function(e){ge(t,e);function t(n,r){var a=e.call(this,$e.MISSING_TRANSLATION,'Missing message: "'.concat(n.id,'" for locale "').concat(r,'", using ').concat(n.defaultMessage?"default message (".concat(typeof n.defaultMessage=="string"?n.defaultMessage:n.defaultMessage.map(function(s){var i;return(i=s.value)!==null&&i!==void 0?i:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=n,a}return t}(St);function Ve(e,t,n){return n===void 0&&(n={}),t.reduce(function(r,a){return a in e?r[a]=e[a]:a in n&&(r[a]=n[a]),r},{})}var Gi=function(e){},Wi=function(e){},Ea={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Gi,onWarn:Wi};function Pa(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Ue(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}function $i(e){e===void 0&&(e=Pa());var t=Intl.RelativeTimeFormat,n=Intl.ListFormat,r=Intl.DisplayNames,a=ye(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.DateTimeFormat).bind.apply(o,ke([void 0],l,!1)))},{cache:Ue(e.dateTime),strategy:ve.variadic}),s=ye(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.NumberFormat).bind.apply(o,ke([void 0],l,!1)))},{cache:Ue(e.number),strategy:ve.variadic}),i=ye(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.PluralRules).bind.apply(o,ke([void 0],l,!1)))},{cache:Ue(e.pluralRules),strategy:ve.variadic});return{getDateTimeFormat:a,getNumberFormat:s,getMessageFormat:ye(function(o,l,u,d){return new xa(o,l,u,k({formatters:{getNumberFormat:s,getDateTimeFormat:a,getPluralRules:i}},d||{}))},{cache:Ue(e.message),strategy:ve.variadic}),getRelativeTimeFormat:ye(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(t.bind.apply(t,ke([void 0],o,!1)))},{cache:Ue(e.relativeTime),strategy:ve.variadic}),getPluralRules:i,getListFormat:ye(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(n.bind.apply(n,ke([void 0],o,!1)))},{cache:Ue(e.list),strategy:ve.variadic}),getDisplayNames:ye(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(r.bind.apply(r,ke([void 0],o,!1)))},{cache:Ue(e.displayNames),strategy:ve.variadic})}}function Zn(e,t,n,r){var a=e&&e[t],s;if(a&&(s=a[n]),s)return s;r(new Yi("No ".concat(t," format named: ").concat(n)))}function Mt(e,t){return Object.keys(e).reduce(function(n,r){return n[r]=k({timeZone:t},e[r]),n},{})}function Ar(e,t){var n=Object.keys(k(k({},e),t));return n.reduce(function(r,a){return r[a]=k(k({},e[a]||{}),t[a]||{}),r},{})}function Ir(e,t){if(!t)return e;var n=xa.formats;return k(k(k({},n),e),{date:Ar(Mt(n.date,t),Mt(e.date||{},t)),time:Ar(Mt(n.time,t),Mt(e.time||{},t))})}var Fn=function(e,t,n,r,a){var s=e.locale,i=e.formats,o=e.messages,l=e.defaultLocale,u=e.defaultFormats,d=e.fallbackOnEmptyString,h=e.onError,f=e.timeZone,S=e.defaultRichTextElements;n===void 0&&(n={id:""});var w=n.id,p=n.defaultMessage;la(!!w,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var N=String(w),D=o&&Object.prototype.hasOwnProperty.call(o,N)&&o[N];if(Array.isArray(D)&&D.length===1&&D[0].type===q.literal)return D[0].value;if(!r&&D&&typeof D=="string"&&!S)return D.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=k(k({},S),r||{}),i=Ir(i,f),u=Ir(u,f),!D){if(d===!1&&D==="")return D;if((!p||s&&s.toLowerCase()!==l.toLowerCase())&&h(new ji(n,s)),p)try{var L=t.getMessageFormat(p,l,u,a);return L.format(r)}catch(O){return h(new bn('Error formatting default message for: "'.concat(N,'", rendering default message verbatim'),s,n,O)),typeof p=="string"?p:N}return N}try{var L=t.getMessageFormat(D,s,i,k({formatters:t},a||{}));return L.format(r)}catch(O){h(new bn('Error formatting message: "'.concat(N,'", using ').concat(p?"default message":"id"," as fallback."),s,n,O))}if(p)try{var L=t.getMessageFormat(p,l,u,a);return L.format(r)}catch(O){h(new bn('Error formatting the default message for: "'.concat(N,'", rendering message verbatim'),s,n,O))}return typeof D=="string"?D:typeof p=="string"?p:N},Ma=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function nn(e,t,n,r){var a=e.locale,s=e.formats,i=e.onError,o=e.timeZone;r===void 0&&(r={});var l=r.format,u=k(k({},o&&{timeZone:o}),l&&Zn(s,t,l,i)),d=Ve(r,Ma,u);return t==="time"&&!d.hour&&!d.minute&&!d.second&&!d.timeStyle&&!d.dateStyle&&(d=k(k({},d),{hour:"numeric",minute:"numeric"})),n(a,d)}function Vi(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return nn(e,"date",t,i).format(o)}catch(l){e.onError(new oe("Error formatting date.",e.locale,l))}return String(o)}function zi(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return nn(e,"time",t,i).format(o)}catch(l){e.onError(new oe("Error formatting time.",e.locale,l))}return String(o)}function Zi(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=n[2],o=i===void 0?{}:i,l=e.timeZone,u=e.locale,d=e.onError,h=Ve(o,Ma,l?{timeZone:l}:{});try{return t(u,h).formatRange(a,s)}catch(f){d(new oe("Error formatting date time range.",e.locale,f))}return String(a)}function Xi(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return nn(e,"date",t,i).formatToParts(o)}catch(l){e.onError(new oe("Error formatting date.",e.locale,l))}return[]}function Ki(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return nn(e,"time",t,i).formatToParts(o)}catch(l){e.onError(new oe("Error formatting time.",e.locale,l))}return[]}var Ji=["style","type","fallback","languageDisplay"];function Qi(e,t,n,r){var a=e.locale,s=e.onError,i=Intl.DisplayNames;i||s(new Ye(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Te.MISSING_INTL_API));var o=Ve(r,Ji);try{return t(a,o).of(n)}catch(l){s(new oe("Error formatting display name.",a,l))}}var eo=["type","style"],Hr=Date.now();function to(e){return"".concat(Hr,"_").concat(e,"_").concat(Hr)}function no(e,t,n,r){r===void 0&&(r={});var a=Na(e,t,n,r).reduce(function(s,i){var o=i.value;return typeof o!="string"?s.push(o):typeof s[s.length-1]=="string"?s[s.length-1]+=o:s.push(o),s},[]);return a.length===1?a[0]:a.length===0?"":a}function Na(e,t,n,r){var a=e.locale,s=e.onError;r===void 0&&(r={});var i=Intl.ListFormat;i||s(new Ye(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Te.MISSING_INTL_API));var o=Ve(r,eo);try{var l={},u=n.map(function(d,h){if(typeof d=="object"){var f=to(h);return l[f]=d,f}return String(d)});return t(a,o).formatToParts(u).map(function(d){return d.type==="literal"?d:k(k({},d),{value:l[d.value]||d.value})})}catch(d){s(new oe("Error formatting list.",a,d))}return n}var ro=["type"];function ao(e,t,n,r){var a=e.locale,s=e.onError;r===void 0&&(r={}),Intl.PluralRules||s(new Ye(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Te.MISSING_INTL_API));var i=Ve(r,ro);try{return t(a,i).select(n)}catch(o){s(new oe("Error formatting plural.",a,o))}return"other"}var so=["numeric","style"];function io(e,t,n){var r=e.locale,a=e.formats,s=e.onError;n===void 0&&(n={});var i=n.format,o=!!i&&Zn(a,"relative",i,s)||{},l=Ve(n,so,o);return t(r,l)}function oo(e,t,n,r,a){a===void 0&&(a={}),r||(r="second");var s=Intl.RelativeTimeFormat;s||e.onError(new Ye(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Te.MISSING_INTL_API));try{return io(e,t,a).format(n,r)}catch(i){e.onError(new oe("Error formatting relative time.",e.locale,i))}return String(n)}var lo=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Oa(e,t,n){var r=e.locale,a=e.formats,s=e.onError;n===void 0&&(n={});var i=n.format,o=i&&Zn(a,"number",i,s)||{},l=Ve(n,lo,o);return t(r,l)}function uo(e,t,n,r){r===void 0&&(r={});try{return Oa(e,t,r).format(n)}catch(a){e.onError(new oe("Error formatting number.",e.locale,a))}return String(n)}function mo(e,t,n,r){r===void 0&&(r={});try{return Oa(e,t,r).formatToParts(n)}catch(a){e.onError(new oe("Error formatting number.",e.locale,a))}return[]}function fo(e){var t=e?e[Object.keys(e)[0]]:void 0;return typeof t=="string"}function ho(e){e.onWarn&&e.defaultRichTextElements&&fo(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function go(e,t){var n=$i(t),r=k(k({},Ea),e),a=r.locale,s=r.defaultLocale,i=r.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&i?i(new Fr('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&i&&i(new Fr('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(i&&i(new Ui('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),ho(r),k(k({},r),{formatters:n,formatNumber:uo.bind(null,r,n.getNumberFormat),formatNumberToParts:mo.bind(null,r,n.getNumberFormat),formatRelativeTime:oo.bind(null,r,n.getRelativeTimeFormat),formatDate:Vi.bind(null,r,n.getDateTimeFormat),formatDateToParts:Xi.bind(null,r,n.getDateTimeFormat),formatTime:zi.bind(null,r,n.getDateTimeFormat),formatDateTimeRange:Zi.bind(null,r,n.getDateTimeFormat),formatTimeToParts:Ki.bind(null,r,n.getDateTimeFormat),formatPlural:ao.bind(null,r,n.getPluralRules),formatMessage:Fn.bind(null,r,n),$t:Fn.bind(null,r,n),formatList:no.bind(null,r,n.getListFormat),formatListToParts:Na.bind(null,r,n.getListFormat),formatDisplayName:Qi.bind(null,r,n.getDisplayNames)})}function co(e){la(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var po=k(k({},Ea),{textComponent:C.Fragment});function yo(e){return function(t){return e(C.Children.toArray(t))}}function Br(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),a=n.length;if(r.length!==a)return!1;for(var s=0;s<a;s++){var i=n[s];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}var Xn=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=C.createContext(null)):C.createContext(null);Xn.Consumer;var vo=Xn.Provider,ko=vo,bo=Xn;function Kn(){var e=C.useContext(bo);return co(e),e}var An;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(An||(An={}));var In;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(In||(In={}));function Ra(e){var t=function(n){var r=Kn(),a=n.value,s=n.children,i=at(n,["value","children"]),o=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?r.formatDateToParts(o,i):r.formatTimeToParts(o,i);return s(l)};return t.displayName=In[e],t}function Tt(e){var t=function(n){var r=Kn(),a=n.value,s=n.children,i=at(n,["value","children"]),o=r[e](a,i);if(typeof s=="function")return s(o);var l=r.textComponent||C.Fragment;return C.createElement(l,null,o)};return t.displayName=An[e],t}function Fa(e){return e&&Object.keys(e).reduce(function(t,n){var r=e[n];return t[n]=Da(r)?yo(r):r,t},{})}var Cr=function(e,t,n,r){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];var i=Fa(r),o=Fn.apply(void 0,ke([e,t,n,i],a,!1));return Array.isArray(o)?C.Children.toArray(o):o},_o=function(e,t){var n=e.defaultRichTextElements,r=at(e,["defaultRichTextElements"]),a=Fa(n),s=go(k(k(k({},po),r),{defaultRichTextElements:a}),t),i={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:a};return k(k({},s),{formatMessage:Cr.bind(null,i,s.formatters),$t:Cr.bind(null,i,s.formatters)})};function So(e,t){var n=e.values,r=at(e,["values"]),a=t.values,s=at(t,["values"]);return Br(a,n)&&Br(r,s)}function Aa(e){var t=Kn(),n=t.formatMessage,r=t.textComponent,a=r===void 0?C.Fragment:r,s=e.id,i=e.description,o=e.defaultMessage,l=e.values,u=e.children,d=e.tagName,h=d===void 0?a:d,f=e.ignoreTag,S={id:s,description:i,defaultMessage:o},w=n(S,l,{ignoreTag:f});return typeof u=="function"?u(Array.isArray(w)?w:[w]):h?C.createElement(h,null,C.Children.toArray(w)):C.createElement(C.Fragment,null,w)}Aa.displayName="FormattedMessage";var ne=C.memo(Aa,So);ne.displayName="MemoizedFormattedMessage";Tt("formatDate");Tt("formatTime");Tt("formatNumber");Tt("formatList");Tt("formatDisplayName");Ra("formatDate");Ra("formatTime");var rn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ia={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(rn,function(){var n="minute",r=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(s,i,o){var l=i.prototype;o.utc=function(p){var N={date:p,utc:!0,args:arguments};return new i(N)},l.utc=function(p){var N=o(this.toDate(),{locale:this.$L,utc:!0});return p?N.add(this.utcOffset(),n):N},l.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var u=l.parse;l.parse=function(p){p.utc&&(this.$u=!0),this.$utils().u(p.$offset)||(this.$offset=p.$offset),u.call(this,p)};var d=l.init;l.init=function(){if(this.$u){var p=this.$d;this.$y=p.getUTCFullYear(),this.$M=p.getUTCMonth(),this.$D=p.getUTCDate(),this.$W=p.getUTCDay(),this.$H=p.getUTCHours(),this.$m=p.getUTCMinutes(),this.$s=p.getUTCSeconds(),this.$ms=p.getUTCMilliseconds()}else d.call(this)};var h=l.utcOffset;l.utcOffset=function(p,N){var D=this.$utils().u;if(D(p))return this.$u?0:D(this.$offset)?h.call(this):this.$offset;if(typeof p=="string"&&(p=function(J){J===void 0&&(J="");var R=J.match(r);if(!R)return null;var _=(""+R[0]).match(a)||["-",0,0],v=_[0],H=60*+_[1]+ +_[2];return H===0?0:v==="+"?H:-H}(p),p===null))return this;var L=Math.abs(p)<=16?60*p:p,O=this;if(N)return O.$offset=L,O.$u=p===0,O;if(p!==0){var de=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(O=this.local().add(L+de,n)).$offset=L,O.$x.$localOffset=de}else O=this.utc();return O};var f=l.format;l.format=function(p){var N=p||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return f.call(this,N)},l.valueOf=function(){var p=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*p},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var S=l.toDate;l.toDate=function(p){return p==="s"&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():S.call(this)};var w=l.diff;l.diff=function(p,N,D){if(p&&this.$u===p.$u)return w.call(this,p,N,D);var L=this.local(),O=o(p).local();return w.call(L,O,N,D)}}})})(Ia);var To=Ia.exports;const wo=Jn(To);var Ha={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(rn,function(){var n,r,a=1e3,s=6e4,i=36e5,o=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,d=2628e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,f={years:u,months:d,days:o,hours:i,minutes:s,seconds:a,milliseconds:1,weeks:6048e5},S=function(R){return R instanceof de},w=function(R,_,v){return new de(R,v,_.$l)},p=function(R){return r.p(R)+"s"},N=function(R){return R<0},D=function(R){return N(R)?Math.ceil(R):Math.floor(R)},L=function(R){return Math.abs(R)},O=function(R,_){return R?N(R)?{negative:!0,format:""+L(R)+_}:{negative:!1,format:""+R+_}:{negative:!1,format:""}},de=function(){function R(v,H,V){var W=this;if(this.$d={},this.$l=V,v===void 0&&(this.$ms=0,this.parseFromMilliseconds()),H)return w(v*f[p(H)],this);if(typeof v=="number")return this.$ms=v,this.parseFromMilliseconds(),this;if(typeof v=="object")return Object.keys(v).forEach(function(pe){W.$d[p(pe)]=v[pe]}),this.calMilliseconds(),this;if(typeof v=="string"){var Q=v.match(h);if(Q){var te=Q.slice(2).map(function(pe){return pe!=null?Number(pe):0});return this.$d.years=te[0],this.$d.months=te[1],this.$d.weeks=te[2],this.$d.days=te[3],this.$d.hours=te[4],this.$d.minutes=te[5],this.$d.seconds=te[6],this.calMilliseconds(),this}}return this}var _=R.prototype;return _.calMilliseconds=function(){var v=this;this.$ms=Object.keys(this.$d).reduce(function(H,V){return H+(v.$d[V]||0)*f[V]},0)},_.parseFromMilliseconds=function(){var v=this.$ms;this.$d.years=D(v/u),v%=u,this.$d.months=D(v/d),v%=d,this.$d.days=D(v/o),v%=o,this.$d.hours=D(v/i),v%=i,this.$d.minutes=D(v/s),v%=s,this.$d.seconds=D(v/a),v%=a,this.$d.milliseconds=v},_.toISOString=function(){var v=O(this.$d.years,"Y"),H=O(this.$d.months,"M"),V=+this.$d.days||0;this.$d.weeks&&(V+=7*this.$d.weeks);var W=O(V,"D"),Q=O(this.$d.hours,"H"),te=O(this.$d.minutes,"M"),pe=this.$d.seconds||0;this.$d.milliseconds&&(pe+=this.$d.milliseconds/1e3,pe=Math.round(1e3*pe)/1e3);var pn=O(pe,"S"),js=v.negative||H.negative||W.negative||Q.negative||te.negative||pn.negative,Gs=Q.format||te.format||pn.format?"T":"",yn=(js?"-":"")+"P"+v.format+H.format+W.format+Gs+Q.format+te.format+pn.format;return yn==="P"||yn==="-P"?"P0D":yn},_.toJSON=function(){return this.toISOString()},_.format=function(v){var H=v||"YYYY-MM-DDTHH:mm:ss",V={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return H.replace(l,function(W,Q){return Q||String(V[W])})},_.as=function(v){return this.$ms/f[p(v)]},_.get=function(v){var H=this.$ms,V=p(v);return V==="milliseconds"?H%=1e3:H=V==="weeks"?D(H/f[V]):this.$d[V],H||0},_.add=function(v,H,V){var W;return W=H?v*f[p(H)]:S(v)?v.$ms:w(v,this).$ms,w(this.$ms+W*(V?-1:1),this)},_.subtract=function(v,H){return this.add(v,H,!0)},_.locale=function(v){var H=this.clone();return H.$l=v,H},_.clone=function(){return w(this.$ms,this)},_.humanize=function(v){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!v)},_.valueOf=function(){return this.asMilliseconds()},_.milliseconds=function(){return this.get("milliseconds")},_.asMilliseconds=function(){return this.as("milliseconds")},_.seconds=function(){return this.get("seconds")},_.asSeconds=function(){return this.as("seconds")},_.minutes=function(){return this.get("minutes")},_.asMinutes=function(){return this.as("minutes")},_.hours=function(){return this.get("hours")},_.asHours=function(){return this.as("hours")},_.days=function(){return this.get("days")},_.asDays=function(){return this.as("days")},_.weeks=function(){return this.get("weeks")},_.asWeeks=function(){return this.as("weeks")},_.months=function(){return this.get("months")},_.asMonths=function(){return this.as("months")},_.years=function(){return this.get("years")},_.asYears=function(){return this.as("years")},R}(),J=function(R,_,v){return R.add(_.years()*v,"y").add(_.months()*v,"M").add(_.days()*v,"d").add(_.hours()*v,"h").add(_.minutes()*v,"m").add(_.seconds()*v,"s").add(_.milliseconds()*v,"ms")};return function(R,_,v){n=v,r=v().$utils(),v.duration=function(W,Q){var te=v.locale();return w(W,{$l:te},Q)},v.isDuration=S;var H=_.prototype.add,V=_.prototype.subtract;_.prototype.add=function(W,Q){return S(W)?J(this,W,1):H.bind(this)(W,Q)},_.prototype.subtract=function(W,Q){return S(W)?J(this,W,-1):V.bind(this)(W,Q)}}})})(Ha);var Do=Ha.exports;const xo=Jn(Do);var Ba={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(rn,function(){var n="day";return function(r,a,s){var i=function(u){return u.add(4-u.isoWeekday(),n)},o=a.prototype;o.isoWeekYear=function(){return i(this).year()},o.isoWeek=function(u){if(!this.$utils().u(u))return this.add(7*(u-this.isoWeek()),n);var d,h,f,S,w=i(this),p=(d=this.isoWeekYear(),h=this.$u,f=(h?s.utc:s)().year(d).startOf("year"),S=4-f.isoWeekday(),f.isoWeekday()>4&&(S+=7),f.add(S,n));return w.diff(p,"week")+1},o.isoWeekday=function(u){return this.$utils().u(u)?this.day()||7:this.day(this.day()%7?u:u-7)};var l=o.startOf;o.startOf=function(u,d){var h=this.$utils(),f=!!h.u(d)||d;return h.p(u)==="isoweek"?f?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(u,d)}}})})(Ba);var Eo=Ba.exports;const Po=Jn(Eo);var Mo={exports:{}};(function(e,t){(function(n,r){e.exports=r(Wt)})(rn,function(n){function r(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var a=r(n),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})})(Mo);const No=Pa(),De=e=>_o({locale:"nb-NO",messages:e},No),Ca={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.TidenesEnde":"Antall uker og dager -"},Qn="YYYY-MM-DD",er="DD.MM.YYYY";Wt.extend(wo);Wt.extend(Po);Wt.extend(xo);De(Ca);De(Ca);//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var La;function c(){return La.apply(null,arguments)}function Oo(e){La=e}function fe(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function We(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function F(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function tr(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(F(e,t))return!1;return!0}function ee(e){return e===void 0}function Ae(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function wt(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function qa(e,t){var n=[],r,a=e.length;for(r=0;r<a;++r)n.push(t(e[r],r));return n}function Ce(e,t){for(var n in t)F(t,n)&&(e[n]=t[n]);return F(t,"toString")&&(e.toString=t.toString),F(t,"valueOf")&&(e.valueOf=t.valueOf),e}function xe(e,t,n,r){return us(e,t,n,r,!0).utc()}function Ro(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function T(e){return e._pf==null&&(e._pf=Ro()),e._pf}var Hn;Array.prototype.some?Hn=Array.prototype.some:Hn=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function nr(e){var t=null,n=!1,r=e._d&&!isNaN(e._d.getTime());if(r&&(t=T(e),n=Hn.call(t.parsedDateParts,function(a){return a!=null}),r=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n),e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r;return e._isValid}function an(e){var t=xe(NaN);return e!=null?Ce(T(t),e):T(t).userInvalidated=!0,t}var Lr=c.momentProperties=[],_n=!1;function rr(e,t){var n,r,a,s=Lr.length;if(ee(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),ee(t._i)||(e._i=t._i),ee(t._f)||(e._f=t._f),ee(t._l)||(e._l=t._l),ee(t._strict)||(e._strict=t._strict),ee(t._tzm)||(e._tzm=t._tzm),ee(t._isUTC)||(e._isUTC=t._isUTC),ee(t._offset)||(e._offset=t._offset),ee(t._pf)||(e._pf=T(t)),ee(t._locale)||(e._locale=t._locale),s>0)for(n=0;n<s;n++)r=Lr[n],a=t[r],ee(a)||(e[r]=a);return e}function Dt(e){rr(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),_n===!1&&(_n=!0,c.updateOffset(this),_n=!1)}function he(e){return e instanceof Dt||e!=null&&e._isAMomentObject!=null}function Ya(e){c.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function le(e,t){var n=!0;return Ce(function(){if(c.deprecationHandler!=null&&c.deprecationHandler(null,e),n){var r=[],a,s,i,o=arguments.length;for(s=0;s<o;s++){if(a="",typeof arguments[s]=="object"){a+=`
[`+s+"] ";for(i in arguments[0])F(arguments[0],i)&&(a+=i+": "+arguments[0][i]+", ");a=a.slice(0,-2)}else a=arguments[s];r.push(a)}Ya(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var qr={};function Ua(e,t){c.deprecationHandler!=null&&c.deprecationHandler(e,t),qr[e]||(Ya(t),qr[e]=!0)}c.suppressDeprecationWarnings=!1;c.deprecationHandler=null;function Ee(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Fo(e){var t,n;for(n in e)F(e,n)&&(t=e[n],Ee(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Bn(e,t){var n=Ce({},e),r;for(r in t)F(t,r)&&(We(e[r])&&We(t[r])?(n[r]={},Ce(n[r],e[r]),Ce(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)F(e,r)&&!F(t,r)&&We(e[r])&&(n[r]=Ce({},n[r]));return n}function ar(e){e!=null&&this.set(e)}var Cn;Object.keys?Cn=Object.keys:Cn=function(e){var t,n=[];for(t in e)F(e,t)&&n.push(t);return n};var Ao={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Io(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return Ee(r)?r.call(t,n):r}function we(e,t,n){var r=""+Math.abs(e),a=t-r.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+r}var sr=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Nt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Sn={},Qe={};function b(e,t,n,r){var a=r;typeof r=="string"&&(a=function(){return this[r]()}),e&&(Qe[e]=a),t&&(Qe[t[0]]=function(){return we(a.apply(this,arguments),t[1],t[2])}),n&&(Qe[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function Ho(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Bo(e){var t=e.match(sr),n,r;for(n=0,r=t.length;n<r;n++)Qe[t[n]]?t[n]=Qe[t[n]]:t[n]=Ho(t[n]);return function(a){var s="",i;for(i=0;i<r;i++)s+=Ee(t[i])?t[i].call(a,e):t[i];return s}}function Ft(e,t){return e.isValid()?(t=ja(t,e.localeData()),Sn[t]=Sn[t]||Bo(t),Sn[t](e)):e.localeData().invalidDate()}function ja(e,t){var n=5;function r(a){return t.longDateFormat(a)||a}for(Nt.lastIndex=0;n>=0&&Nt.test(e);)e=e.replace(Nt,r),Nt.lastIndex=0,n-=1;return e}var Co={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Lo(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(sr).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var qo="Invalid date";function Yo(){return this._invalidDate}var Uo="%d",jo=/\d{1,2}/;function Go(e){return this._ordinal.replace("%d",e)}var Wo={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function $o(e,t,n,r){var a=this._relativeTime[n];return Ee(a)?a(e,t,n,r):a.replace(/%d/i,e)}function Vo(e,t){var n=this._relativeTime[e>0?"future":"past"];return Ee(n)?n(t):n.replace(/%s/i,t)}var Yr={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function ue(e){return typeof e=="string"?Yr[e]||Yr[e.toLowerCase()]:void 0}function ir(e){var t={},n,r;for(r in e)F(e,r)&&(n=ue(r),n&&(t[n]=e[r]));return t}var zo={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Zo(e){var t=[],n;for(n in e)F(e,n)&&t.push({unit:n,priority:zo[n]});return t.sort(function(r,a){return r.priority-a.priority}),t}var Ga=/\d/,ae=/\d\d/,Wa=/\d{3}/,or=/\d{4}/,sn=/[+-]?\d{6}/,U=/\d\d?/,$a=/\d\d\d\d?/,Va=/\d\d\d\d\d\d?/,on=/\d{1,3}/,lr=/\d{1,4}/,ln=/[+-]?\d{1,6}/,it=/\d+/,un=/[+-]?\d+/,Xo=/Z|[+-]\d\d:?\d\d/gi,dn=/Z|[+-]\d\d(?::?\d\d)?/gi,Ko=/[+-]?\d+(\.\d{1,3})?/,xt=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,ot=/^[1-9]\d?/,ur=/^([1-9]\d|\d)/,Bt;Bt={};function y(e,t,n){Bt[e]=Ee(t)?t:function(r,a){return r&&n?n:t}}function Jo(e,t){return F(Bt,e)?Bt[e](t._strict,t._locale):new RegExp(Qo(e))}function Qo(e){return Re(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,a,s){return n||r||a||s}))}function Re(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ie(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function x(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=ie(t)),n}var Ln={};function B(e,t){var n,r=t,a;for(typeof e=="string"&&(e=[e]),Ae(t)&&(r=function(s,i){i[t]=x(s)}),a=e.length,n=0;n<a;n++)Ln[e[n]]=r}function Et(e,t){B(e,function(n,r,a,s){a._w=a._w||{},t(n,a._w,a,s)})}function el(e,t,n){t!=null&&F(Ln,e)&&Ln[e](t,n._a,n,e)}function mn(e){return e%4===0&&e%100!==0||e%400===0}var X=0,Ne=1,be=2,$=3,me=4,Oe=5,Ge=6,tl=7,nl=8;b("Y",0,0,function(){var e=this.year();return e<=9999?we(e,4):"+"+e});b(0,["YY",2],0,function(){return this.year()%100});b(0,["YYYY",4],0,"year");b(0,["YYYYY",5],0,"year");b(0,["YYYYYY",6,!0],0,"year");y("Y",un);y("YY",U,ae);y("YYYY",lr,or);y("YYYYY",ln,sn);y("YYYYYY",ln,sn);B(["YYYYY","YYYYYY"],X);B("YYYY",function(e,t){t[X]=e.length===2?c.parseTwoDigitYear(e):x(e)});B("YY",function(e,t){t[X]=c.parseTwoDigitYear(e)});B("Y",function(e,t){t[X]=parseInt(e,10)});function pt(e){return mn(e)?366:365}c.parseTwoDigitYear=function(e){return x(e)+(x(e)>68?1900:2e3)};var za=lt("FullYear",!0);function rl(){return mn(this.year())}function lt(e,t){return function(n){return n!=null?(Za(this,e,n),c.updateOffset(this,t),this):vt(this,e)}}function vt(e,t){if(!e.isValid())return NaN;var n=e._d,r=e._isUTC;switch(t){case"Milliseconds":return r?n.getUTCMilliseconds():n.getMilliseconds();case"Seconds":return r?n.getUTCSeconds():n.getSeconds();case"Minutes":return r?n.getUTCMinutes():n.getMinutes();case"Hours":return r?n.getUTCHours():n.getHours();case"Date":return r?n.getUTCDate():n.getDate();case"Day":return r?n.getUTCDay():n.getDay();case"Month":return r?n.getUTCMonth():n.getMonth();case"FullYear":return r?n.getUTCFullYear():n.getFullYear();default:return NaN}}function Za(e,t,n){var r,a,s,i,o;if(!(!e.isValid()||isNaN(n))){switch(r=e._d,a=e._isUTC,t){case"Milliseconds":return void(a?r.setUTCMilliseconds(n):r.setMilliseconds(n));case"Seconds":return void(a?r.setUTCSeconds(n):r.setSeconds(n));case"Minutes":return void(a?r.setUTCMinutes(n):r.setMinutes(n));case"Hours":return void(a?r.setUTCHours(n):r.setHours(n));case"Date":return void(a?r.setUTCDate(n):r.setDate(n));case"FullYear":break;default:return}s=n,i=e.month(),o=e.date(),o=o===29&&i===1&&!mn(s)?28:o,a?r.setUTCFullYear(s,i,o):r.setFullYear(s,i,o)}}function al(e){return e=ue(e),Ee(this[e])?this[e]():this}function sl(e,t){if(typeof e=="object"){e=ir(e);var n=Zo(e),r,a=n.length;for(r=0;r<a;r++)this[n[r].unit](e[n[r].unit])}else if(e=ue(e),Ee(this[e]))return this[e](t);return this}function il(e,t){return(e%t+t)%t}var G;Array.prototype.indexOf?G=Array.prototype.indexOf:G=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function dr(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=il(t,12);return e+=(t-n)/12,n===1?mn(e)?29:28:31-n%7%2}b("M",["MM",2],"Mo",function(){return this.month()+1});b("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});b("MMMM",0,0,function(e){return this.localeData().months(this,e)});y("M",U,ot);y("MM",U,ae);y("MMM",function(e,t){return t.monthsShortRegex(e)});y("MMMM",function(e,t){return t.monthsRegex(e)});B(["M","MM"],function(e,t){t[Ne]=x(e)-1});B(["MMM","MMMM"],function(e,t,n,r){var a=n._locale.monthsParse(e,r,n._strict);a!=null?t[Ne]=a:T(n).invalidMonth=e});var ol="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Xa="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Ka=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,ll=xt,ul=xt;function dl(e,t){return e?fe(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Ka).test(t)?"format":"standalone"][e.month()]:fe(this._months)?this._months:this._months.standalone}function ml(e,t){return e?fe(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Ka.test(t)?"format":"standalone"][e.month()]:fe(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function fl(e,t,n){var r,a,s,i=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)s=xe([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(s,"").toLocaleLowerCase();return n?t==="MMM"?(a=G.call(this._shortMonthsParse,i),a!==-1?a:null):(a=G.call(this._longMonthsParse,i),a!==-1?a:null):t==="MMM"?(a=G.call(this._shortMonthsParse,i),a!==-1?a:(a=G.call(this._longMonthsParse,i),a!==-1?a:null)):(a=G.call(this._longMonthsParse,i),a!==-1?a:(a=G.call(this._shortMonthsParse,i),a!==-1?a:null))}function hl(e,t,n){var r,a,s;if(this._monthsParseExact)return fl.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(a=xe([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(s="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function Ja(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=x(t);else if(t=e.localeData().monthsParse(t),!Ae(t))return e}var n=t,r=e.date();return r=r<29?r:Math.min(r,dr(e.year(),n)),e._isUTC?e._d.setUTCMonth(n,r):e._d.setMonth(n,r),e}function Qa(e){return e!=null?(Ja(this,e),c.updateOffset(this,!0),this):vt(this,"Month")}function gl(){return dr(this.year(),this.month())}function cl(e){return this._monthsParseExact?(F(this,"_monthsRegex")||es.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(F(this,"_monthsShortRegex")||(this._monthsShortRegex=ll),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function pl(e){return this._monthsParseExact?(F(this,"_monthsRegex")||es.call(this),e?this._monthsStrictRegex:this._monthsRegex):(F(this,"_monthsRegex")||(this._monthsRegex=ul),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function es(){function e(l,u){return u.length-l.length}var t=[],n=[],r=[],a,s,i,o;for(a=0;a<12;a++)s=xe([2e3,a]),i=Re(this.monthsShort(s,"")),o=Re(this.months(s,"")),t.push(i),n.push(o),r.push(o),r.push(i);t.sort(e),n.sort(e),r.sort(e),this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function yl(e,t,n,r,a,s,i){var o;return e<100&&e>=0?(o=new Date(e+400,t,n,r,a,s,i),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,r,a,s,i),o}function kt(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Ct(e,t,n){var r=7+t-n,a=(7+kt(e,0,r).getUTCDay()-t)%7;return-a+r-1}function ts(e,t,n,r,a){var s=(7+n-r)%7,i=Ct(e,r,a),o=1+7*(t-1)+s+i,l,u;return o<=0?(l=e-1,u=pt(l)+o):o>pt(e)?(l=e+1,u=o-pt(e)):(l=e,u=o),{year:l,dayOfYear:u}}function bt(e,t,n){var r=Ct(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1,s,i;return a<1?(i=e.year()-1,s=a+Fe(i,t,n)):a>Fe(e.year(),t,n)?(s=a-Fe(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Fe(e,t,n){var r=Ct(e,t,n),a=Ct(e+1,t,n);return(pt(e)-r+a)/7}b("w",["ww",2],"wo","week");b("W",["WW",2],"Wo","isoWeek");y("w",U,ot);y("ww",U,ae);y("W",U,ot);y("WW",U,ae);Et(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=x(e)});function vl(e){return bt(e,this._week.dow,this._week.doy).week}var kl={dow:0,doy:6};function bl(){return this._week.dow}function _l(){return this._week.doy}function Sl(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function Tl(e){var t=bt(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}b("d",0,"do","day");b("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});b("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});b("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});b("e",0,0,"weekday");b("E",0,0,"isoWeekday");y("d",U);y("e",U);y("E",U);y("dd",function(e,t){return t.weekdaysMinRegex(e)});y("ddd",function(e,t){return t.weekdaysShortRegex(e)});y("dddd",function(e,t){return t.weekdaysRegex(e)});Et(["dd","ddd","dddd"],function(e,t,n,r){var a=n._locale.weekdaysParse(e,r,n._strict);a!=null?t.d=a:T(n).invalidWeekday=e});Et(["d","e","E"],function(e,t,n,r){t[r]=x(e)});function wl(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function Dl(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function mr(e,t){return e.slice(t,7).concat(e.slice(0,t))}var xl="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ns="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),El="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Pl=xt,Ml=xt,Nl=xt;function Ol(e,t){var n=fe(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?mr(n,this._week.dow):e?n[e.day()]:n}function Rl(e){return e===!0?mr(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Fl(e){return e===!0?mr(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Al(e,t,n){var r,a,s,i=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)s=xe([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(s,"").toLocaleLowerCase();return n?t==="dddd"?(a=G.call(this._weekdaysParse,i),a!==-1?a:null):t==="ddd"?(a=G.call(this._shortWeekdaysParse,i),a!==-1?a:null):(a=G.call(this._minWeekdaysParse,i),a!==-1?a:null):t==="dddd"?(a=G.call(this._weekdaysParse,i),a!==-1||(a=G.call(this._shortWeekdaysParse,i),a!==-1)?a:(a=G.call(this._minWeekdaysParse,i),a!==-1?a:null)):t==="ddd"?(a=G.call(this._shortWeekdaysParse,i),a!==-1||(a=G.call(this._weekdaysParse,i),a!==-1)?a:(a=G.call(this._minWeekdaysParse,i),a!==-1?a:null)):(a=G.call(this._minWeekdaysParse,i),a!==-1||(a=G.call(this._weekdaysParse,i),a!==-1)?a:(a=G.call(this._shortWeekdaysParse,i),a!==-1?a:null))}function Il(e,t,n){var r,a,s;if(this._weekdaysParseExact)return Al.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(a=xe([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(s="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function Hl(e){if(!this.isValid())return e!=null?this:NaN;var t=vt(this,"Day");return e!=null?(e=wl(e,this.localeData()),this.add(e-t,"d")):t}function Bl(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function Cl(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=Dl(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function Ll(e){return this._weekdaysParseExact?(F(this,"_weekdaysRegex")||fr.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(F(this,"_weekdaysRegex")||(this._weekdaysRegex=Pl),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function ql(e){return this._weekdaysParseExact?(F(this,"_weekdaysRegex")||fr.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(F(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Ml),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Yl(e){return this._weekdaysParseExact?(F(this,"_weekdaysRegex")||fr.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(F(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Nl),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function fr(){function e(d,h){return h.length-d.length}var t=[],n=[],r=[],a=[],s,i,o,l,u;for(s=0;s<7;s++)i=xe([2e3,1]).day(s),o=Re(this.weekdaysMin(i,"")),l=Re(this.weekdaysShort(i,"")),u=Re(this.weekdays(i,"")),t.push(o),n.push(l),r.push(u),a.push(o),a.push(l),a.push(u);t.sort(e),n.sort(e),r.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function hr(){return this.hours()%12||12}function Ul(){return this.hours()||24}b("H",["HH",2],0,"hour");b("h",["hh",2],0,hr);b("k",["kk",2],0,Ul);b("hmm",0,0,function(){return""+hr.apply(this)+we(this.minutes(),2)});b("hmmss",0,0,function(){return""+hr.apply(this)+we(this.minutes(),2)+we(this.seconds(),2)});b("Hmm",0,0,function(){return""+this.hours()+we(this.minutes(),2)});b("Hmmss",0,0,function(){return""+this.hours()+we(this.minutes(),2)+we(this.seconds(),2)});function rs(e,t){b(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}rs("a",!0);rs("A",!1);function as(e,t){return t._meridiemParse}y("a",as);y("A",as);y("H",U,ur);y("h",U,ot);y("k",U,ot);y("HH",U,ae);y("hh",U,ae);y("kk",U,ae);y("hmm",$a);y("hmmss",Va);y("Hmm",$a);y("Hmmss",Va);B(["H","HH"],$);B(["k","kk"],function(e,t,n){var r=x(e);t[$]=r===24?0:r});B(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});B(["h","hh"],function(e,t,n){t[$]=x(e),T(n).bigHour=!0});B("hmm",function(e,t,n){var r=e.length-2;t[$]=x(e.substr(0,r)),t[me]=x(e.substr(r)),T(n).bigHour=!0});B("hmmss",function(e,t,n){var r=e.length-4,a=e.length-2;t[$]=x(e.substr(0,r)),t[me]=x(e.substr(r,2)),t[Oe]=x(e.substr(a)),T(n).bigHour=!0});B("Hmm",function(e,t,n){var r=e.length-2;t[$]=x(e.substr(0,r)),t[me]=x(e.substr(r))});B("Hmmss",function(e,t,n){var r=e.length-4,a=e.length-2;t[$]=x(e.substr(0,r)),t[me]=x(e.substr(r,2)),t[Oe]=x(e.substr(a))});function jl(e){return(e+"").toLowerCase().charAt(0)==="p"}var Gl=/[ap]\.?m?\.?/i,Wl=lt("Hours",!0);function $l(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var ss={calendar:Ao,longDateFormat:Co,invalidDate:qo,ordinal:Uo,dayOfMonthOrdinalParse:jo,relativeTime:Wo,months:ol,monthsShort:Xa,week:kl,weekdays:xl,weekdaysMin:El,weekdaysShort:ns,meridiemParse:Gl},j={},dt={},_t;function Vl(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function Ur(e){return e&&e.toLowerCase().replace("_","-")}function zl(e){for(var t=0,n,r,a,s;t<e.length;){for(s=Ur(e[t]).split("-"),n=s.length,r=Ur(e[t+1]),r=r?r.split("-"):null;n>0;){if(a=fn(s.slice(0,n).join("-")),a)return a;if(r&&r.length>=n&&Vl(s,r)>=n-1)break;n--}t++}return _t}function Zl(e){return!!(e&&e.match("^[^/\\\\]*$"))}function fn(e){var t=null,n;if(j[e]===void 0&&typeof module<"u"&&module&&module.exports&&Zl(e))try{t=_t._abbr,n=require,n("./locale/"+e),qe(t)}catch{j[e]=null}return j[e]}function qe(e,t){var n;return e&&(ee(t)?n=Ie(e):n=gr(e,t),n?_t=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),_t._abbr}function gr(e,t){if(t!==null){var n,r=ss;if(t.abbr=e,j[e]!=null)Ua("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=j[e]._config;else if(t.parentLocale!=null)if(j[t.parentLocale]!=null)r=j[t.parentLocale]._config;else if(n=fn(t.parentLocale),n!=null)r=n._config;else return dt[t.parentLocale]||(dt[t.parentLocale]=[]),dt[t.parentLocale].push({name:e,config:t}),null;return j[e]=new ar(Bn(r,t)),dt[e]&&dt[e].forEach(function(a){gr(a.name,a.config)}),qe(e),j[e]}else return delete j[e],null}function Xl(e,t){if(t!=null){var n,r,a=ss;j[e]!=null&&j[e].parentLocale!=null?j[e].set(Bn(j[e]._config,t)):(r=fn(e),r!=null&&(a=r._config),t=Bn(a,t),r==null&&(t.abbr=e),n=new ar(t),n.parentLocale=j[e],j[e]=n),qe(e)}else j[e]!=null&&(j[e].parentLocale!=null?(j[e]=j[e].parentLocale,e===qe()&&qe(e)):j[e]!=null&&delete j[e]);return j[e]}function Ie(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return _t;if(!fe(e)){if(t=fn(e),t)return t;e=[e]}return zl(e)}function Kl(){return Cn(j)}function cr(e){var t,n=e._a;return n&&T(e).overflow===-2&&(t=n[Ne]<0||n[Ne]>11?Ne:n[be]<1||n[be]>dr(n[X],n[Ne])?be:n[$]<0||n[$]>24||n[$]===24&&(n[me]!==0||n[Oe]!==0||n[Ge]!==0)?$:n[me]<0||n[me]>59?me:n[Oe]<0||n[Oe]>59?Oe:n[Ge]<0||n[Ge]>999?Ge:-1,T(e)._overflowDayOfYear&&(t<X||t>be)&&(t=be),T(e)._overflowWeeks&&t===-1&&(t=tl),T(e)._overflowWeekday&&t===-1&&(t=nl),T(e).overflow=t),e}var Jl=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ql=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,eu=/Z|[+-]\d\d(?::?\d\d)?/,Ot=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Tn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],tu=/^\/?Date\((-?\d+)/i,nu=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,ru={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function is(e){var t,n,r=e._i,a=Jl.exec(r)||Ql.exec(r),s,i,o,l,u=Ot.length,d=Tn.length;if(a){for(T(e).iso=!0,t=0,n=u;t<n;t++)if(Ot[t][1].exec(a[1])){i=Ot[t][0],s=Ot[t][2]!==!1;break}if(i==null){e._isValid=!1;return}if(a[3]){for(t=0,n=d;t<n;t++)if(Tn[t][1].exec(a[3])){o=(a[2]||" ")+Tn[t][0];break}if(o==null){e._isValid=!1;return}}if(!s&&o!=null){e._isValid=!1;return}if(a[4])if(eu.exec(a[4]))l="Z";else{e._isValid=!1;return}e._f=i+(o||"")+(l||""),yr(e)}else e._isValid=!1}function au(e,t,n,r,a,s){var i=[su(e),Xa.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(a,10)];return s&&i.push(parseInt(s,10)),i}function su(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function iu(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function ou(e,t,n){if(e){var r=ns.indexOf(e),a=new Date(t[0],t[1],t[2]).getDay();if(r!==a)return T(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function lu(e,t,n){if(e)return ru[e];if(t)return 0;var r=parseInt(n,10),a=r%100,s=(r-a)/100;return s*60+a}function os(e){var t=nu.exec(iu(e._i)),n;if(t){if(n=au(t[4],t[3],t[2],t[5],t[6],t[7]),!ou(t[1],n,e))return;e._a=n,e._tzm=lu(t[8],t[9],t[10]),e._d=kt.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),T(e).rfc2822=!0}else e._isValid=!1}function uu(e){var t=tu.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(is(e),e._isValid===!1)delete e._isValid;else return;if(os(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:c.createFromInputFallback(e)}c.createFromInputFallback=le("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Ke(e,t,n){return e??t??n}function du(e){var t=new Date(c.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function pr(e){var t,n,r=[],a,s,i;if(!e._d){for(a=du(e),e._w&&e._a[be]==null&&e._a[Ne]==null&&mu(e),e._dayOfYear!=null&&(i=Ke(e._a[X],a[X]),(e._dayOfYear>pt(i)||e._dayOfYear===0)&&(T(e)._overflowDayOfYear=!0),n=kt(i,0,e._dayOfYear),e._a[Ne]=n.getUTCMonth(),e._a[be]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=a[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[$]===24&&e._a[me]===0&&e._a[Oe]===0&&e._a[Ge]===0&&(e._nextDay=!0,e._a[$]=0),e._d=(e._useUTC?kt:yl).apply(null,r),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[$]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(T(e).weekdayMismatch=!0)}}function mu(e){var t,n,r,a,s,i,o,l,u;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(s=1,i=4,n=Ke(t.GG,e._a[X],bt(Y(),1,4).year),r=Ke(t.W,1),a=Ke(t.E,1),(a<1||a>7)&&(l=!0)):(s=e._locale._week.dow,i=e._locale._week.doy,u=bt(Y(),s,i),n=Ke(t.gg,e._a[X],u.year),r=Ke(t.w,u.week),t.d!=null?(a=t.d,(a<0||a>6)&&(l=!0)):t.e!=null?(a=t.e+s,(t.e<0||t.e>6)&&(l=!0)):a=s),r<1||r>Fe(n,s,i)?T(e)._overflowWeeks=!0:l!=null?T(e)._overflowWeekday=!0:(o=ts(n,r,a,s,i),e._a[X]=o.year,e._dayOfYear=o.dayOfYear)}c.ISO_8601=function(){};c.RFC_2822=function(){};function yr(e){if(e._f===c.ISO_8601){is(e);return}if(e._f===c.RFC_2822){os(e);return}e._a=[],T(e).empty=!0;var t=""+e._i,n,r,a,s,i,o=t.length,l=0,u,d;for(a=ja(e._f,e._locale).match(sr)||[],d=a.length,n=0;n<d;n++)s=a[n],r=(t.match(Jo(s,e))||[])[0],r&&(i=t.substr(0,t.indexOf(r)),i.length>0&&T(e).unusedInput.push(i),t=t.slice(t.indexOf(r)+r.length),l+=r.length),Qe[s]?(r?T(e).empty=!1:T(e).unusedTokens.push(s),el(s,r,e)):e._strict&&!r&&T(e).unusedTokens.push(s);T(e).charsLeftOver=o-l,t.length>0&&T(e).unusedInput.push(t),e._a[$]<=12&&T(e).bigHour===!0&&e._a[$]>0&&(T(e).bigHour=void 0),T(e).parsedDateParts=e._a.slice(0),T(e).meridiem=e._meridiem,e._a[$]=fu(e._locale,e._a[$],e._meridiem),u=T(e).era,u!==null&&(e._a[X]=e._locale.erasConvertYear(u,e._a[X])),pr(e),cr(e)}function fu(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function hu(e){var t,n,r,a,s,i,o=!1,l=e._f.length;if(l===0){T(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<l;a++)s=0,i=!1,t=rr({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[a],yr(t),nr(t)&&(i=!0),s+=T(t).charsLeftOver,s+=T(t).unusedTokens.length*10,T(t).score=s,o?s<r&&(r=s,n=t):(r==null||s<r||i)&&(r=s,n=t,i&&(o=!0));Ce(e,n||t)}function gu(e){if(!e._d){var t=ir(e._i),n=t.day===void 0?t.date:t.day;e._a=qa([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),pr(e)}}function cu(e){var t=new Dt(cr(ls(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function ls(e){var t=e._i,n=e._f;return e._locale=e._locale||Ie(e._l),t===null||n===void 0&&t===""?an({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),he(t)?new Dt(cr(t)):(wt(t)?e._d=t:fe(n)?hu(e):n?yr(e):pu(e),nr(e)||(e._d=null),e))}function pu(e){var t=e._i;ee(t)?e._d=new Date(c.now()):wt(t)?e._d=new Date(t.valueOf()):typeof t=="string"?uu(e):fe(t)?(e._a=qa(t.slice(0),function(n){return parseInt(n,10)}),pr(e)):We(t)?gu(e):Ae(t)?e._d=new Date(t):c.createFromInputFallback(e)}function us(e,t,n,r,a){var s={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(We(e)&&tr(e)||fe(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=n,s._i=e,s._f=t,s._strict=r,cu(s)}function Y(e,t,n,r){return us(e,t,n,r,!1)}var yu=le("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Y.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:an()}),vu=le("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Y.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:an()});function ds(e,t){var n,r;if(t.length===1&&fe(t[0])&&(t=t[0]),!t.length)return Y();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function ku(){var e=[].slice.call(arguments,0);return ds("isBefore",e)}function bu(){var e=[].slice.call(arguments,0);return ds("isAfter",e)}var _u=function(){return Date.now?Date.now():+new Date},mt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Su(e){var t,n=!1,r,a=mt.length;for(t in e)if(F(e,t)&&!(G.call(mt,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<a;++r)if(e[mt[r]]){if(n)return!1;parseFloat(e[mt[r]])!==x(e[mt[r]])&&(n=!0)}return!0}function Tu(){return this._isValid}function wu(){return ce(NaN)}function hn(e){var t=ir(e),n=t.year||0,r=t.quarter||0,a=t.month||0,s=t.week||t.isoWeek||0,i=t.day||0,o=t.hour||0,l=t.minute||0,u=t.second||0,d=t.millisecond||0;this._isValid=Su(t),this._milliseconds=+d+u*1e3+l*6e4+o*1e3*60*60,this._days=+i+s*7,this._months=+a+r*3+n*12,this._data={},this._locale=Ie(),this._bubble()}function At(e){return e instanceof hn}function qn(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Du(e,t,n){var r=Math.min(e.length,t.length),a=Math.abs(e.length-t.length),s=0,i;for(i=0;i<r;i++)x(e[i])!==x(t[i])&&s++;return s+a}function ms(e,t){b(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+we(~~(n/60),2)+t+we(~~n%60,2)})}ms("Z",":");ms("ZZ","");y("Z",dn);y("ZZ",dn);B(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=vr(dn,e)});var xu=/([\+\-]|\d\d)/gi;function vr(e,t){var n=(t||"").match(e),r,a,s;return n===null?null:(r=n[n.length-1]||[],a=(r+"").match(xu)||["-",0,0],s=+(a[1]*60)+x(a[2]),s===0?0:a[0]==="+"?s:-s)}function kr(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(he(e)||wt(e)?e.valueOf():Y(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),c.updateOffset(n,!1),n):Y(e).local()}function Yn(e){return-Math.round(e._d.getTimezoneOffset())}c.updateOffset=function(){};function Eu(e,t,n){var r=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=vr(dn,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(a=Yn(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),r!==e&&(!t||this._changeInProgress?gs(this,ce(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,c.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:Yn(this)}function Pu(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Mu(e){return this.utcOffset(0,e)}function Nu(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Yn(this),"m")),this}function Ou(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=vr(Xo,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Ru(e){return this.isValid()?(e=e?Y(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Fu(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Au(){if(!ee(this._isDSTShifted))return this._isDSTShifted;var e={},t;return rr(e,this),e=ls(e),e._a?(t=e._isUTC?xe(e._a):Y(e._a),this._isDSTShifted=this.isValid()&&Du(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Iu(){return this.isValid()?!this._isUTC:!1}function Hu(){return this.isValid()?this._isUTC:!1}function fs(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Bu=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Cu=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function ce(e,t){var n=e,r=null,a,s,i;return At(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:Ae(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=Bu.exec(e))?(a=r[1]==="-"?-1:1,n={y:0,d:x(r[be])*a,h:x(r[$])*a,m:x(r[me])*a,s:x(r[Oe])*a,ms:x(qn(r[Ge]*1e3))*a}):(r=Cu.exec(e))?(a=r[1]==="-"?-1:1,n={y:je(r[2],a),M:je(r[3],a),w:je(r[4],a),d:je(r[5],a),h:je(r[6],a),m:je(r[7],a),s:je(r[8],a)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(i=Lu(Y(n.from),Y(n.to)),n={},n.ms=i.milliseconds,n.M=i.months),s=new hn(n),At(e)&&F(e,"_locale")&&(s._locale=e._locale),At(e)&&F(e,"_isValid")&&(s._isValid=e._isValid),s}ce.fn=hn.prototype;ce.invalid=wu;function je(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function jr(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Lu(e,t){var n;return e.isValid()&&t.isValid()?(t=kr(t,e),e.isBefore(t)?n=jr(e,t):(n=jr(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function hs(e,t){return function(n,r){var a,s;return r!==null&&!isNaN(+r)&&(Ua(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=r,r=s),a=ce(n,r),gs(this,a,e),this}}function gs(e,t,n,r){var a=t._milliseconds,s=qn(t._days),i=qn(t._months);e.isValid()&&(r=r??!0,i&&Ja(e,vt(e,"Month")+i*n),s&&Za(e,"Date",vt(e,"Date")+s*n),a&&e._d.setTime(e._d.valueOf()+a*n),r&&c.updateOffset(e,s||i))}var qu=hs(1,"add"),Yu=hs(-1,"subtract");function cs(e){return typeof e=="string"||e instanceof String}function Uu(e){return he(e)||wt(e)||cs(e)||Ae(e)||Gu(e)||ju(e)||e===null||e===void 0}function ju(e){var t=We(e)&&!tr(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,s,i=r.length;for(a=0;a<i;a+=1)s=r[a],n=n||F(e,s);return t&&n}function Gu(e){var t=fe(e),n=!1;return t&&(n=e.filter(function(r){return!Ae(r)&&cs(e)}).length===0),t&&n}function Wu(e){var t=We(e)&&!tr(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,s;for(a=0;a<r.length;a+=1)s=r[a],n=n||F(e,s);return t&&n}function $u(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Vu(e,t){arguments.length===1&&(arguments[0]?Uu(arguments[0])?(e=arguments[0],t=void 0):Wu(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||Y(),r=kr(n,this).startOf("day"),a=c.calendarFormat(this,r)||"sameElse",s=t&&(Ee(t[a])?t[a].call(this,n):t[a]);return this.format(s||this.localeData().calendar(a,this,Y(n)))}function zu(){return new Dt(this)}function Zu(e,t){var n=he(e)?e:Y(e);return this.isValid()&&n.isValid()?(t=ue(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function Xu(e,t){var n=he(e)?e:Y(e);return this.isValid()&&n.isValid()?(t=ue(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function Ku(e,t,n,r){var a=he(e)?e:Y(e),s=he(t)?t:Y(t);return this.isValid()&&a.isValid()&&s.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(a,n):!this.isBefore(a,n))&&(r[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function Ju(e,t){var n=he(e)?e:Y(e),r;return this.isValid()&&n.isValid()?(t=ue(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function Qu(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function ed(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function td(e,t,n){var r,a,s;if(!this.isValid())return NaN;if(r=kr(e,this),!r.isValid())return NaN;switch(a=(r.utcOffset()-this.utcOffset())*6e4,t=ue(t),t){case"year":s=It(this,r)/12;break;case"month":s=It(this,r);break;case"quarter":s=It(this,r)/3;break;case"second":s=(this-r)/1e3;break;case"minute":s=(this-r)/6e4;break;case"hour":s=(this-r)/36e5;break;case"day":s=(this-r-a)/864e5;break;case"week":s=(this-r-a)/6048e5;break;default:s=this-r}return n?s:ie(s)}function It(e,t){if(e.date()<t.date())return-It(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),a,s;return t-r<0?(a=e.clone().add(n-1,"months"),s=(t-r)/(r-a)):(a=e.clone().add(n+1,"months"),s=(t-r)/(a-r)),-(n+s)||0}c.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";c.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function nd(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function rd(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?Ft(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Ee(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Ft(n,"Z")):Ft(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function ad(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,a,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",s=t+'[")]',this.format(n+r+a+s)}function sd(e){e||(e=this.isUtc()?c.defaultFormatUtc:c.defaultFormat);var t=Ft(this,e);return this.localeData().postformat(t)}function id(e,t){return this.isValid()&&(he(e)&&e.isValid()||Y(e).isValid())?ce({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function od(e){return this.from(Y(),e)}function ld(e,t){return this.isValid()&&(he(e)&&e.isValid()||Y(e).isValid())?ce({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function ud(e){return this.to(Y(),e)}function ps(e){var t;return e===void 0?this._locale._abbr:(t=Ie(e),t!=null&&(this._locale=t),this)}var ys=le("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function vs(){return this._locale}var Lt=1e3,et=60*Lt,qt=60*et,ks=(365*400+97)*24*qt;function tt(e,t){return(e%t+t)%t}function bs(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-ks:new Date(e,t,n).valueOf()}function _s(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-ks:Date.UTC(e,t,n)}function dd(e){var t,n;if(e=ue(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?_s:bs,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=tt(t+(this._isUTC?0:this.utcOffset()*et),qt);break;case"minute":t=this._d.valueOf(),t-=tt(t,et);break;case"second":t=this._d.valueOf(),t-=tt(t,Lt);break}return this._d.setTime(t),c.updateOffset(this,!0),this}function md(e){var t,n;if(e=ue(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?_s:bs,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=qt-tt(t+(this._isUTC?0:this.utcOffset()*et),qt)-1;break;case"minute":t=this._d.valueOf(),t+=et-tt(t,et)-1;break;case"second":t=this._d.valueOf(),t+=Lt-tt(t,Lt)-1;break}return this._d.setTime(t),c.updateOffset(this,!0),this}function fd(){return this._d.valueOf()-(this._offset||0)*6e4}function hd(){return Math.floor(this.valueOf()/1e3)}function gd(){return new Date(this.valueOf())}function cd(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function pd(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function yd(){return this.isValid()?this.toISOString():null}function vd(){return nr(this)}function kd(){return Ce({},T(this))}function bd(){return T(this).overflow}function _d(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}b("N",0,0,"eraAbbr");b("NN",0,0,"eraAbbr");b("NNN",0,0,"eraAbbr");b("NNNN",0,0,"eraName");b("NNNNN",0,0,"eraNarrow");b("y",["y",1],"yo","eraYear");b("y",["yy",2],0,"eraYear");b("y",["yyy",3],0,"eraYear");b("y",["yyyy",4],0,"eraYear");y("N",br);y("NN",br);y("NNN",br);y("NNNN",Rd);y("NNNNN",Fd);B(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var a=n._locale.erasParse(e,r,n._strict);a?T(n).era=a:T(n).invalidEra=e});y("y",it);y("yy",it);y("yyy",it);y("yyyy",it);y("yo",Ad);B(["y","yy","yyy","yyyy"],X);B(["yo"],function(e,t,n,r){var a;n._locale._eraYearOrdinalRegex&&(a=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[X]=n._locale.eraYearOrdinalParse(e,a):t[X]=parseInt(e,10)});function Sd(e,t){var n,r,a,s=this._eras||Ie("en")._eras;for(n=0,r=s.length;n<r;++n){switch(typeof s[n].since){case"string":a=c(s[n].since).startOf("day"),s[n].since=a.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":a=c(s[n].until).startOf("day").valueOf(),s[n].until=a.valueOf();break}}return s}function Td(e,t,n){var r,a,s=this.eras(),i,o,l;for(e=e.toUpperCase(),r=0,a=s.length;r<a;++r)if(i=s[r].name.toUpperCase(),o=s[r].abbr.toUpperCase(),l=s[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(o===e)return s[r];break;case"NNNN":if(i===e)return s[r];break;case"NNNNN":if(l===e)return s[r];break}else if([i,o,l].indexOf(e)>=0)return s[r]}function wd(e,t){var n=e.since<=e.until?1:-1;return t===void 0?c(e.since).year():c(e.since).year()+(t-e.offset)*n}function Dd(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function xd(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function Ed(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function Pd(){var e,t,n,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(n=a[e].since<=a[e].until?1:-1,r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return(this.year()-c(a[e].since).year())*n+a[e].offset;return this.year()}function Md(e){return F(this,"_erasNameRegex")||_r.call(this),e?this._erasNameRegex:this._erasRegex}function Nd(e){return F(this,"_erasAbbrRegex")||_r.call(this),e?this._erasAbbrRegex:this._erasRegex}function Od(e){return F(this,"_erasNarrowRegex")||_r.call(this),e?this._erasNarrowRegex:this._erasRegex}function br(e,t){return t.erasAbbrRegex(e)}function Rd(e,t){return t.erasNameRegex(e)}function Fd(e,t){return t.erasNarrowRegex(e)}function Ad(e,t){return t._eraYearOrdinalRegex||it}function _r(){var e=[],t=[],n=[],r=[],a,s,i,o,l,u=this.eras();for(a=0,s=u.length;a<s;++a)i=Re(u[a].name),o=Re(u[a].abbr),l=Re(u[a].narrow),t.push(i),e.push(o),n.push(l),r.push(i),r.push(o),r.push(l);this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}b(0,["gg",2],0,function(){return this.weekYear()%100});b(0,["GG",2],0,function(){return this.isoWeekYear()%100});function gn(e,t){b(0,[e,e.length],0,t)}gn("gggg","weekYear");gn("ggggg","weekYear");gn("GGGG","isoWeekYear");gn("GGGGG","isoWeekYear");y("G",un);y("g",un);y("GG",U,ae);y("gg",U,ae);y("GGGG",lr,or);y("gggg",lr,or);y("GGGGG",ln,sn);y("ggggg",ln,sn);Et(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=x(e)});Et(["gg","GG"],function(e,t,n,r){t[r]=c.parseTwoDigitYear(e)});function Id(e){return Ss.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Hd(e){return Ss.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Bd(){return Fe(this.year(),1,4)}function Cd(){return Fe(this.isoWeekYear(),1,4)}function Ld(){var e=this.localeData()._week;return Fe(this.year(),e.dow,e.doy)}function qd(){var e=this.localeData()._week;return Fe(this.weekYear(),e.dow,e.doy)}function Ss(e,t,n,r,a){var s;return e==null?bt(this,r,a).year:(s=Fe(e,r,a),t>s&&(t=s),Yd.call(this,e,t,n,r,a))}function Yd(e,t,n,r,a){var s=ts(e,t,n,r,a),i=kt(s.year,0,s.dayOfYear);return this.year(i.getUTCFullYear()),this.month(i.getUTCMonth()),this.date(i.getUTCDate()),this}b("Q",0,"Qo","quarter");y("Q",Ga);B("Q",function(e,t){t[Ne]=(x(e)-1)*3});function Ud(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}b("D",["DD",2],"Do","date");y("D",U,ot);y("DD",U,ae);y("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});B(["D","DD"],be);B("Do",function(e,t){t[be]=x(e.match(U)[0])});var Ts=lt("Date",!0);b("DDD",["DDDD",3],"DDDo","dayOfYear");y("DDD",on);y("DDDD",Wa);B(["DDD","DDDD"],function(e,t,n){n._dayOfYear=x(e)});function jd(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}b("m",["mm",2],0,"minute");y("m",U,ur);y("mm",U,ae);B(["m","mm"],me);var Gd=lt("Minutes",!1);b("s",["ss",2],0,"second");y("s",U,ur);y("ss",U,ae);B(["s","ss"],Oe);var Wd=lt("Seconds",!1);b("S",0,0,function(){return~~(this.millisecond()/100)});b(0,["SS",2],0,function(){return~~(this.millisecond()/10)});b(0,["SSS",3],0,"millisecond");b(0,["SSSS",4],0,function(){return this.millisecond()*10});b(0,["SSSSS",5],0,function(){return this.millisecond()*100});b(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});b(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});b(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});b(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});y("S",on,Ga);y("SS",on,ae);y("SSS",on,Wa);var Le,ws;for(Le="SSSS";Le.length<=9;Le+="S")y(Le,it);function $d(e,t){t[Ge]=x(("0."+e)*1e3)}for(Le="S";Le.length<=9;Le+="S")B(Le,$d);ws=lt("Milliseconds",!1);b("z",0,0,"zoneAbbr");b("zz",0,0,"zoneName");function Vd(){return this._isUTC?"UTC":""}function zd(){return this._isUTC?"Coordinated Universal Time":""}var m=Dt.prototype;m.add=qu;m.calendar=Vu;m.clone=zu;m.diff=td;m.endOf=md;m.format=sd;m.from=id;m.fromNow=od;m.to=ld;m.toNow=ud;m.get=al;m.invalidAt=bd;m.isAfter=Zu;m.isBefore=Xu;m.isBetween=Ku;m.isSame=Ju;m.isSameOrAfter=Qu;m.isSameOrBefore=ed;m.isValid=vd;m.lang=ys;m.locale=ps;m.localeData=vs;m.max=vu;m.min=yu;m.parsingFlags=kd;m.set=sl;m.startOf=dd;m.subtract=Yu;m.toArray=cd;m.toObject=pd;m.toDate=gd;m.toISOString=rd;m.inspect=ad;typeof Symbol<"u"&&Symbol.for!=null&&(m[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});m.toJSON=yd;m.toString=nd;m.unix=hd;m.valueOf=fd;m.creationData=_d;m.eraName=Dd;m.eraNarrow=xd;m.eraAbbr=Ed;m.eraYear=Pd;m.year=za;m.isLeapYear=rl;m.weekYear=Id;m.isoWeekYear=Hd;m.quarter=m.quarters=Ud;m.month=Qa;m.daysInMonth=gl;m.week=m.weeks=Sl;m.isoWeek=m.isoWeeks=Tl;m.weeksInYear=Ld;m.weeksInWeekYear=qd;m.isoWeeksInYear=Bd;m.isoWeeksInISOWeekYear=Cd;m.date=Ts;m.day=m.days=Hl;m.weekday=Bl;m.isoWeekday=Cl;m.dayOfYear=jd;m.hour=m.hours=Wl;m.minute=m.minutes=Gd;m.second=m.seconds=Wd;m.millisecond=m.milliseconds=ws;m.utcOffset=Eu;m.utc=Mu;m.local=Nu;m.parseZone=Ou;m.hasAlignedHourOffset=Ru;m.isDST=Fu;m.isLocal=Iu;m.isUtcOffset=Hu;m.isUtc=fs;m.isUTC=fs;m.zoneAbbr=Vd;m.zoneName=zd;m.dates=le("dates accessor is deprecated. Use date instead.",Ts);m.months=le("months accessor is deprecated. Use month instead",Qa);m.years=le("years accessor is deprecated. Use year instead",za);m.zone=le("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Pu);m.isDSTShifted=le("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Au);function Zd(e){return Y(e*1e3)}function Xd(){return Y.apply(null,arguments).parseZone()}function Ds(e){return e}var A=ar.prototype;A.calendar=Io;A.longDateFormat=Lo;A.invalidDate=Yo;A.ordinal=Go;A.preparse=Ds;A.postformat=Ds;A.relativeTime=$o;A.pastFuture=Vo;A.set=Fo;A.eras=Sd;A.erasParse=Td;A.erasConvertYear=wd;A.erasAbbrRegex=Nd;A.erasNameRegex=Md;A.erasNarrowRegex=Od;A.months=dl;A.monthsShort=ml;A.monthsParse=hl;A.monthsRegex=pl;A.monthsShortRegex=cl;A.week=vl;A.firstDayOfYear=_l;A.firstDayOfWeek=bl;A.weekdays=Ol;A.weekdaysMin=Fl;A.weekdaysShort=Rl;A.weekdaysParse=Il;A.weekdaysRegex=Ll;A.weekdaysShortRegex=ql;A.weekdaysMinRegex=Yl;A.isPM=jl;A.meridiem=$l;function Yt(e,t,n,r){var a=Ie(),s=xe().set(r,t);return a[n](s,e)}function xs(e,t,n){if(Ae(e)&&(t=e,e=void 0),e=e||"",t!=null)return Yt(e,t,n,"month");var r,a=[];for(r=0;r<12;r++)a[r]=Yt(e,r,n,"month");return a}function Sr(e,t,n,r){typeof e=="boolean"?(Ae(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,Ae(t)&&(n=t,t=void 0),t=t||"");var a=Ie(),s=e?a._week.dow:0,i,o=[];if(n!=null)return Yt(t,(n+s)%7,r,"day");for(i=0;i<7;i++)o[i]=Yt(t,(i+s)%7,r,"day");return o}function Kd(e,t){return xs(e,t,"months")}function Jd(e,t){return xs(e,t,"monthsShort")}function Qd(e,t,n){return Sr(e,t,n,"weekdays")}function em(e,t,n){return Sr(e,t,n,"weekdaysShort")}function tm(e,t,n){return Sr(e,t,n,"weekdaysMin")}qe("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=x(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});c.lang=le("moment.lang is deprecated. Use moment.locale instead.",qe);c.langData=le("moment.langData is deprecated. Use moment.localeData instead.",Ie);var Pe=Math.abs;function nm(){var e=this._data;return this._milliseconds=Pe(this._milliseconds),this._days=Pe(this._days),this._months=Pe(this._months),e.milliseconds=Pe(e.milliseconds),e.seconds=Pe(e.seconds),e.minutes=Pe(e.minutes),e.hours=Pe(e.hours),e.months=Pe(e.months),e.years=Pe(e.years),this}function Es(e,t,n,r){var a=ce(t,n);return e._milliseconds+=r*a._milliseconds,e._days+=r*a._days,e._months+=r*a._months,e._bubble()}function rm(e,t){return Es(this,e,t,1)}function am(e,t){return Es(this,e,t,-1)}function Gr(e){return e<0?Math.floor(e):Math.ceil(e)}function sm(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,a,s,i,o,l;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=Gr(Un(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,a=ie(e/1e3),r.seconds=a%60,s=ie(a/60),r.minutes=s%60,i=ie(s/60),r.hours=i%24,t+=ie(i/24),l=ie(Ps(t)),n+=l,t-=Gr(Un(l)),o=ie(n/12),n%=12,r.days=t,r.months=n,r.years=o,this}function Ps(e){return e*4800/146097}function Un(e){return e*146097/4800}function im(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=ue(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+Ps(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Un(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function He(e){return function(){return this.as(e)}}var Ms=He("ms"),om=He("s"),lm=He("m"),um=He("h"),dm=He("d"),mm=He("w"),fm=He("M"),hm=He("Q"),gm=He("y"),cm=Ms;function pm(){return ce(this)}function ym(e){return e=ue(e),this.isValid()?this[e+"s"]():NaN}function ze(e){return function(){return this.isValid()?this._data[e]:NaN}}var vm=ze("milliseconds"),km=ze("seconds"),bm=ze("minutes"),_m=ze("hours"),Sm=ze("days"),Tm=ze("months"),wm=ze("years");function Dm(){return ie(this.days()/7)}var Me=Math.round,Je={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function xm(e,t,n,r,a){return a.relativeTime(t||1,!!n,e,r)}function Em(e,t,n,r){var a=ce(e).abs(),s=Me(a.as("s")),i=Me(a.as("m")),o=Me(a.as("h")),l=Me(a.as("d")),u=Me(a.as("M")),d=Me(a.as("w")),h=Me(a.as("y")),f=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||i<=1&&["m"]||i<n.m&&["mm",i]||o<=1&&["h"]||o<n.h&&["hh",o]||l<=1&&["d"]||l<n.d&&["dd",l];return n.w!=null&&(f=f||d<=1&&["w"]||d<n.w&&["ww",d]),f=f||u<=1&&["M"]||u<n.M&&["MM",u]||h<=1&&["y"]||["yy",h],f[2]=t,f[3]=+e>0,f[4]=r,xm.apply(null,f)}function Pm(e){return e===void 0?Me:typeof e=="function"?(Me=e,!0):!1}function Mm(e,t){return Je[e]===void 0?!1:t===void 0?Je[e]:(Je[e]=t,e==="s"&&(Je.ss=t-1),!0)}function Nm(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=Je,a,s;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},Je,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),a=this.localeData(),s=Em(this,!n,r,a),n&&(s=a.pastFuture(+this,s)),a.postformat(s)}var wn=Math.abs;function Xe(e){return(e>0)-(e<0)||+e}function cn(){if(!this.isValid())return this.localeData().invalidDate();var e=wn(this._milliseconds)/1e3,t=wn(this._days),n=wn(this._months),r,a,s,i,o=this.asSeconds(),l,u,d,h;return o?(r=ie(e/60),a=ie(r/60),e%=60,r%=60,s=ie(n/12),n%=12,i=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=o<0?"-":"",u=Xe(this._months)!==Xe(o)?"-":"",d=Xe(this._days)!==Xe(o)?"-":"",h=Xe(this._milliseconds)!==Xe(o)?"-":"",l+"P"+(s?u+s+"Y":"")+(n?u+n+"M":"")+(t?d+t+"D":"")+(a||r||e?"T":"")+(a?h+a+"H":"")+(r?h+r+"M":"")+(e?h+i+"S":"")):"P0D"}var M=hn.prototype;M.isValid=Tu;M.abs=nm;M.add=rm;M.subtract=am;M.as=im;M.asMilliseconds=Ms;M.asSeconds=om;M.asMinutes=lm;M.asHours=um;M.asDays=dm;M.asWeeks=mm;M.asMonths=fm;M.asQuarters=hm;M.asYears=gm;M.valueOf=cm;M._bubble=sm;M.clone=pm;M.get=ym;M.milliseconds=vm;M.seconds=km;M.minutes=bm;M.hours=_m;M.days=Sm;M.weeks=Dm;M.months=Tm;M.years=wm;M.humanize=Nm;M.toISOString=cn;M.toString=cn;M.toJSON=cn;M.locale=ps;M.localeData=vs;M.toIsoString=le("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",cn);M.lang=ys;b("X",0,0,"unix");b("x",0,0,"valueOf");y("x",un);y("X",Ko);B("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});B("x",function(e,t,n){n._d=new Date(x(e))});//! moment.js
c.version="2.30.1";Oo(Y);c.fn=m;c.min=ku;c.max=bu;c.now=_u;c.utc=xe;c.unix=Zd;c.months=Kd;c.isDate=wt;c.locale=qe;c.invalid=an;c.duration=ce;c.isMoment=he;c.weekdays=Qd;c.parseZone=Xd;c.localeData=Ie;c.isDuration=At;c.monthsShort=Jd;c.weekdaysMin=tm;c.defineLocale=gr;c.updateLocale=Xl;c.locales=Kl;c.weekdaysShort=em;c.normalizeUnits=ue;c.relativeTimeRounding=Pm;c.relativeTimeThreshold=Mm;c.calendarFormat=$u;c.prototype=m;c.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};function Ns(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=Ns(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Be(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=Ns(e))&&(r&&(r+=" "),r+=t);return r}const ut=e=>Be({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Om=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};C.forwardRef((e,t)=>{var{className:n,size:r="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,h=Om(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return g.createElement(a,Object.assign({},h,{ref:t,className:Be(n,"navds-body-long",`navds-body-long--${r}`,ut({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var Rm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Fm=C.forwardRef((e,t)=>{var{className:n,size:r="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,h=Rm(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return g.createElement(a,Object.assign({},h,{ref:t,className:Be(n,"navds-body-short",`navds-body-short--${r}`,ut({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))}),Se=Fm;var Am=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};C.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:a,uppercase:s,as:i="p",truncate:o,weight:l="regular",align:u,visuallyHidden:d,textColor:h}=e,f=Am(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return g.createElement(i,Object.assign({},f,{ref:t,className:Be(n,"navds-detail",ut({spacing:a,truncate:o,weight:l,align:u,visuallyHidden:d,textColor:h,uppercase:s}),{"navds-detail--small":r==="small"})}))});var Im=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};C.forwardRef((e,t)=>{var{className:n,size:r,spacing:a,as:s="p"}=e,i=Im(e,["className","size","spacing","as"]);return g.createElement(s,Object.assign({},i,{ref:t,className:Be("navds-error-message","navds-label",n,ut({spacing:a}),{"navds-label--small":r==="small"})}))});var Hm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Tr=C.forwardRef((e,t)=>{var{level:n="1",size:r,className:a,as:s,spacing:i,align:o,visuallyHidden:l,textColor:u}=e,d=Hm(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const h=s??`h${n}`;return g.createElement(h,Object.assign({},d,{ref:t,className:Be(a,"navds-heading",`navds-heading--${r}`,ut({spacing:i,align:o,visuallyHidden:l,textColor:u}))}))});var Bm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};C.forwardRef((e,t)=>{var{className:n,spacing:r,as:a="p"}=e,s=Bm(e,["className","spacing","as"]);return g.createElement(a,Object.assign({},s,{ref:t,className:Be(n,"navds-ingress",{"navds-typo--spacing":!!r})}))});var Cm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const nt=C.forwardRef((e,t)=>{var{className:n,size:r="medium",as:a="label",spacing:s,visuallyHidden:i,textColor:o}=e,l=Cm(e,["className","size","as","spacing","visuallyHidden","textColor"]);return g.createElement(a,Object.assign({},l,{ref:t,className:Be(n,"navds-label",ut({spacing:s,visuallyHidden:i,textColor:o}),{"navds-label--small":r==="small"})}))});var Lm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Wr=C.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",icon:i}=e,o=Lm(e,["children","className","variant","size","icon"]);return g.createElement(Se,Object.assign({},o,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:Be("navds-tag",r,`navds-tag--${a}`,`navds-tag--${s}`)}),i&&g.createElement("span",{className:"navds-tag__icon--left"},i),n)});function qm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Os={exports:{}},ft={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $r;function Ym(){if($r)return ft;$r=1;var e=g,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(o,l,u){var d,h={},f=null,S=null;u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),l.ref!==void 0&&(S=l.ref);for(d in l)r.call(l,d)&&!s.hasOwnProperty(d)&&(h[d]=l[d]);if(o&&o.defaultProps)for(d in l=o.defaultProps,l)h[d]===void 0&&(h[d]=l[d]);return{$$typeof:t,type:o,key:f,ref:S,props:h,_owner:a.current}}return ft.Fragment=n,ft.jsx=i,ft.jsxs=i,ft}Os.exports=Ym();var z=Os.exports;const Ze={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" Kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};De(Ze);De(Ze);var Rs={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,r.call(this,o)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)t.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Rs);var Um=Rs.exports;const se=qm(Um),jm="_borderbox_hicl4_1",Gm="_error_hicl4_4",Wm="_warning_hicl4_7",$m={borderbox:jm,error:Gm,warning:Wm};se.bind($m);const Vm="_aksjonspunkt_kn1hn_1",zm="_erAksjonspunktApent_kn1hn_4",Zm="_erIkkeGodkjentAvBeslutter_kn1hn_8",Xm={aksjonspunkt:Vm,erAksjonspunktApent:zm,erIkkeGodkjentAvBeslutter:Zm};se.bind(Xm);De(Ze);De(Ze);const Km="_tooltip_h8akz_1",Jm="_tooltiptext_h8akz_5",Qm="_left_h8akz_22",ef="_top_h8akz_27",tf="_right_h8akz_30",nf="_bottom_h8akz_34",rf="_showTooltip_h8akz_1",jn={tooltip:Km,tooltiptext:Jm,left:Qm,top:ef,right:tf,bottom:nf,showTooltip:rf},af=se.bind(jn),sf=({children:e,content:t,alignRight:n=!1,alignLeft:r=!1,alignTop:a=!1,alignBottom:s=!1})=>z.jsxs("div",{className:jn.tooltip,children:[z.jsx("span",{className:af(jn.tooltiptext,{right:n||!r&&!a&&!s,left:r,top:a,bottom:s}),children:t}),e]});g.forwardRef(({onClick:e=()=>{},onMouseDown:t,tabIndex:n=-1,className:r="",src:a,srcHover:s,alt:i,onKeyDown:o,tooltip:l,alignTooltipLeft:u=!1},d)=>{const[h,f]=C.useState(!1),S=C.useCallback(()=>{f(!0)},[]),w=C.useCallback(()=>{f(!1)},[]),p=C.useCallback(L=>{(L.key==="Enter"||L.key===" ")&&(o&&o(L),L.preventDefault())},[]),N=s&&h?s:a,D=z.jsx("img",{ref:d,className:r,src:N,alt:i,tabIndex:n,onMouseOver:S,onMouseOut:w,onFocus:S,onBlur:w,onKeyDown:p,onMouseDown:t,onClick:e});return l?z.jsx(sf,{content:l,alignLeft:u,children:D}):D});const of="_flexColumnNew_1vdv1_1",lf={flexColumnNew:of},uf=se.bind(lf),_e=({children:e,className:t})=>z.jsx("div",{className:uf("flexColumnNew",t),children:e}),df="_flexRow_1yf0y_1",mf="_spaceBetween_1yf0y_9",ff="_alignItemsToBaseline_1yf0y_12",hf="_alignItemsToFlexEnd_1yf0y_15",gf="_justifyItemsToFlexEnd_1yf0y_18",cf="_wrap_1yf0y_21",pf={flexRow:df,spaceBetween:mf,alignItemsToBaseline:ff,alignItemsToFlexEnd:hf,justifyItemsToFlexEnd:gf,wrap:cf},yf=se.bind(pf),Ut=({children:e,spaceBetween:t=!1,alignItemsToBaseline:n=!1,alignItemsToFlexEnd:r=!1,wrap:a=!1,className:s})=>z.jsx("div",{className:yf("flexRow",{spaceBetween:t},{alignItemsToBaseline:n},{alignItemsToFlexEnd:r},{wrap:a},s),children:e}),vf="_flexContainer_1dk1o_1",kf="_fluid_1dk1o_6",bf="_fullHeight_1dk1o_9",_f="_flexWrap_1dk1o_17",Sf={flexContainer:vf,fluid:kf,fullHeight:bf,flexWrap:_f},Tf=se.bind(Sf),jt=({children:e,wrap:t=!1,fullHeight:n=!1})=>z.jsx("div",{className:Tf("flexContainer","fluid",{flexWrap:t,fullHeight:n}),children:e});De(Ze);const wf="_row_1lxv9_1",Df="_harHover_1lxv9_4",xf="_rowHeader_1lxv9_7",Ef="_grayHeader_1lxv9_12",Pf="_rowContent_1lxv9_15",Mf="_selected_1lxv9_18",Nf="_bold_1lxv9_22",Of="_dashedBottomBorder_1lxv9_25",Rf="_solidBottomBorder_1lxv9_28",Ff="_apLeftBorder_1lxv9_31",Af="_noBottomBorder_1lxv9_34",Fs={row:wf,harHover:Df,rowHeader:xf,grayHeader:Ef,rowContent:Pf,selected:Mf,bold:Nf,dashedBottomBorder:Of,solidBottomBorder:Rf,apLeftBorder:Ff,noBottomBorder:Af},If=se.bind(Fs),Hf=(e,t,n)=>r=>{e&&r.button===0&&e(r,t,n)},As=e=>e.tagName==="TR"?e:As(e.parentElement),Vr=(e,t)=>{const n=As(e.target),r=(t?n.nextSibling:n.previousSibling)||n;r&&(r.focus(),e.preventDefault())},Bf=(e,t,n,r)=>a=>{a.key==="ArrowDown"?Vr(a,!0):a.key==="ArrowUp"?Vr(a,!1):t&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(t(a,n,r),a.preventDefault()):e&&t&&a.target.tagName!=="TD"&&a.key==="Shift"&&(t(a),a.preventDefault())},Cf=e=>t=>{e&&t.target.tagName!=="TD"&&t.key==="Shift"&&(e(t),t.preventDefault())},Is=({id:e,model:t,isHeader:n=!1,hasGrayHeader:r=!1,onMouseDown:a,onKeyDown:s,children:i,noHover:o=!1,isSelected:l=!1,isBold:u=!1,isDashedBottomBorder:d=!1,isSolidBottomBorder:h=!1,isApLeftBorder:f=!1,className:S,useMultiselect:w=!1,hasNoBottomBorder:p=!1})=>z.jsx("tr",{className:If(S,Fs.row,{rowHeader:n,grayHeader:r,rowContent:!n&&!o,selected:l,harHover:!o,bold:u,dashedBottomBorder:d,solidBottomBorder:h,noBottomBorder:p,apLeftBorder:f}),onMouseDown:Hf(a,e,t),onKeyDown:Bf(w,s,e,t),onKeyUp:w?Cf(s):void 0,tabIndex:0,children:i}),Lf="_columnStyle_1f13u_1",Hs={columnStyle:Lf},qf=se.bind(Hs),rt=({children:e="",className:t,hidden:n=!1,colspanAll:r=!1})=>n?null:z.jsx("td",{className:qf(Hs.columnStyle,t),colSpan:r?100:void 0,children:e}),Yf="_table_2cnpl_1",Uf="_rowHover_2cnpl_25",jf={table:Yf,rowHover:Uf},Gf=se.bind(jf),Wf="EMPTY",$f=g.forwardRef(({headerTextCodes:e=[],headerColumnContent:t=[],classNameTable:n="",noHover:r=!1,hasGrayHeader:a=!1,children:s},i)=>z.jsxs("table",{ref:i,className:Gf("table",{[n]:n,rowHover:!r}),children:[z.jsx("thead",{children:z.jsxs(Is,{isHeader:!0,noHover:r,hasGrayHeader:a,children:[e.map(o=>typeof o=="string"&&o.startsWith(Wf)?z.jsx(rt,{children:" "},o):z.jsx(rt,{children:z.jsx(ne,{id:o})},o)),t.map(o=>z.jsx(rt,{children:o},o.key))]})}),z.jsx("tbody",{children:Array.isArray(s)?g.Children.map(s,o=>g.cloneElement(o,{noHover:r})):g.cloneElement(s,{noHover:r})})]})),Vf="_hidden_1pb4f_1",zf="_active_1pb4f_8",Zf="_activeRow_1pb4f_15 _active_1pb4f_8",Xf="_toggleIcon_1pb4f_19",Kf="_colTopPadding_1pb4f_22",Jf={hidden:Vf,active:zf,activeRow:Zf,toggleIcon:Xf,colTopPadding:Kf};se.bind(Jf);De(Ze);const Qf="_fourPx_qda5k_1",eh="_eightPx_qda5k_4",th="_sixteenPx_qda5k_7",nh="_twentyPx_qda5k_10",rh="_thirtyTwoPx_qda5k_13",ah="_fourtyPx_qda5k_16",sh={fourPx:Qf,eightPx:eh,sixteenPx:th,twentyPx:nh,thirtyTwoPx:rh,fourtyPx:ah},ih=se.bind(sh),Bs=({fourPx:e=!1,eightPx:t=!1,sixteenPx:n=!1,twentyPx:r=!1,thirtyTwoPx:a=!1,fourtyPx:s=!1})=>z.jsx("div",{className:ih({fourPx:e,eightPx:t,sixteenPx:n,twentyPx:r,thirtyTwoPx:a,fourtyPx:s})});De(Ze);const oh="_divider_1t980_1",lh="_dividerParagraf_1t980_8",uh="_leftPanel_1t980_11",dh="_rightPanel_1t980_14",mh={divider:oh,dividerParagraf:lh,leftPanel:uh,rightPanel:dh};se.bind(mh);const fh="_editedIcon_ulrjl_1",hh={editedIcon:fh};se.bind(hh);const gh="_colMargin_1r8hu_1",Gt={colMargin:gh},Ht=e=>e?c(e,Qn).format(er):"-",ch=(e,t,n,r)=>e&&Object.keys(t).length>0?Ht(Object.values(t)[0]):r?Ht(r):e?n?Ht(n):"-":null,Cs=({soknad:e,termindato:t})=>{const n=e.fodselsdatoer?e.fodselsdatoer:{},r=Object.keys(n).length>0?"FodselsammenligningPanel.Fodselsdato":"FodselsammenligningPanel.Termindato",a=Object.keys(n).length>0?"FodselSammenligningOtherPanel.OpplysningerISoknad":"FodselSammenligningOtherPanel.TerminISoknad",s=C.useMemo(()=>ch(!!e,n,e.termindato,t),[e,n,t]);return g.createElement(g.Fragment,null,g.createElement(Tr,{size:"small"},g.createElement(ne,{id:a})),g.createElement(Bs,{sixteenPx:!0}),g.createElement(jt,null,g.createElement(Ut,null,e.utstedtdato&&g.createElement(_e,{className:Gt.colMargin},g.createElement(nt,{size:"small"},g.createElement(ne,{id:"FodselsammenligningPanel.UstedtDato"})),g.createElement(Se,{size:"small"},Ht(e.utstedtdato))),g.createElement(_e,{className:Gt.colMargin},g.createElement(nt,{size:"small"},g.createElement(ne,{id:r})),g.createElement(Se,{size:"small"},s)),g.createElement(_e,null,g.createElement(nt,{size:"small"},g.createElement(ne,{id:"FodselsammenligningPanel.AntallBarn"})),g.createElement(Se,{size:"small"},e.antallBarn)))))};Cs.__docgenInfo={description:`FodselSammenligningOtherPanel

Viser sammenligning av fødsel ved ytelsesvedtak/søknad og oppdatert informasjon fra TPS.`,methods:[],displayName:"FodselSammenligningOtherPanel",props:{soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
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
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
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
    };
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
  };
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
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
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""}}};const Dn=e=>e?c(e,Qn).format(er):"-",ph=(e,t,n)=>{if(!t&&!n)return"";const r=n||{termindato:void 0,avklartBarn:[]};if(e){const a=r.termindato?r.termindato:t==null?void 0:t.termindato;return a?Dn(a):void 0}return r.avklartBarn&&r.avklartBarn.length>0?Dn(r.avklartBarn[0].fodselsdato):t!=null&&t.fodselsdatoer?Dn(Object.values(t.fodselsdatoer)[0]):"-"},yh=(e,t,n)=>{if(!t&&!n)return 0;const r=n||{termindato:void 0,antallBarnTermin:void 0,avklartBarn:[]};return e?r.termindato?r.antallBarnTermin:t==null?void 0:t.antallBarn:r.avklartBarn&&r.avklartBarn.length>0?r.avklartBarn.length:t==null?void 0:t.antallBarn},Ls=({vedtaksDatoSomSvangerskapsuke:e,soknadOriginalBehandling:t,familiehendelseOriginalBehandling:n})=>{const r=n&&!!n.termindato||!t||!t.fodselsdatoer||Object.keys(t.fodselsdatoer).length===0,a=r?"FodselsammenligningPanel.Termindato":"FodselsammenligningPanel.Fodselsdato",s=ph(r,t,n),i=yh(r,t,n),o=n?(!n.avklartBarn||n.avklartBarn.length===0)&&!!e:!1;return g.createElement(g.Fragment,null,g.createElement(Tr,{size:"small"},g.createElement(ne,{id:"FodselsammenligningPanel.Ytelsesvedtak"})),g.createElement(Bs,{sixteenPx:!0}),g.createElement(jt,null,g.createElement(Ut,null,o&&g.createElement(_e,{className:Gt.colMargin},g.createElement(nt,{size:"small"},g.createElement(ne,{id:"FodselsammenligningPanel.FodtISvangerskapsuke"})),g.createElement(Se,{size:"small"},e)),g.createElement(_e,{className:Gt.colMargin},g.createElement(nt,{size:"small"},g.createElement(ne,{id:a})),g.createElement(Se,{size:"small"},s||"-")),g.createElement(_e,null,g.createElement(nt,{size:"small"},g.createElement(ne,{id:"FodselsammenligningPanel.AntallBarn"})),g.createElement(Se,{size:"small"},i||"-")))))};Ls.__docgenInfo={description:`FodselSammenligningRevurderingPanel

Presentasjonskomponent. Viser sammenligning av fødsel ved ytelsesvedtak/søknad og oppdatert informasjon fra TPS.`,methods:[],displayName:"FodselSammenligningRevurderingPanel",props:{soknadOriginalBehandling:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
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
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
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
    };
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
  };
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
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
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
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
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato?: string;
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
}>`},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const vh="_noChildrenInTps_3z81w_1",kh="_colWidthLeft_3z81w_5",bh="_colWidthRight_3z81w_9",xn={noChildrenInTps:vh,colWidthLeft:kh,colWidthRight:bh},zr=e=>e?c(e,Qn).format(er):"-",qs=({behandlingsTypeKode:e,avklartBarn:t,nrOfDodfodteBarn:n,soknad:r,vedtaksDatoSomSvangerskapsuke:a,termindato:s,soknadOriginalBehandling:i,familiehendelseOriginalBehandling:o})=>g.createElement(jt,null,g.createElement(Ut,null,g.createElement(_e,{className:xn.colWidthLeft},e!==yt.REVURDERING&&g.createElement(Cs,{soknad:r,termindato:s}),e===yt.REVURDERING&&g.createElement(Ls,{soknadOriginalBehandling:i,familiehendelseOriginalBehandling:o,vedtaksDatoSomSvangerskapsuke:a})),g.createElement(_e,{className:xn.colWidthRight},g.createElement(jt,null,g.createElement(Ut,null,g.createElement(_e,null,g.createElement(Tr,{size:"small"},g.createElement(ne,{id:"FodselsammenligningPanel.OpplysningerTPS"}))),n>0&&g.createElement(_e,null,g.createElement(Wr,{variant:"info"},g.createElement(ne,{id:"FodselsammenligningPanel.Dodfodt"}))))),t.length>0&&g.createElement($f,{noHover:!0,headerTextCodes:["FodselsammenligningPanel.Fodselsdato","FodselsammenligningPanel.Dodsdato"]},t.map(l=>{const u=l.fodselsdato+l.dodsdato;return g.createElement(Is,{key:u,id:u},g.createElement(rt,null,g.createElement(Se,{size:"small"},zr(l.fodselsdato))),g.createElement(rt,null,g.createElement(Se,{size:"small"},l.dodsdato?zr(l.dodsdato):"-")),g.createElement(rt,null,l.dodsdato&&g.createElement(Wr,{variant:"info"},g.createElement(ne,{id:"FodselsammenligningPanel.Dod"}))))})),t.length===0&&g.createElement("div",{className:xn.noChildrenInTps},g.createElement(Se,{size:"small"},"-")))));qs.__docgenInfo={description:`FodselSammenlingningPanel

Presentasjonskomponent. Viser sammenligning av fødsel ved ytelsesvedtak/søknad og oppdatert informasjon fra TPS.`,methods:[],displayName:"FodselSammenligningPanel",props:{behandlingsTypeKode:{required:!0,tsType:{name:"string"},description:""},avklartBarn:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato?: string;
}>`}],raw:"AvklartBarn[]"},description:""},nrOfDodfodteBarn:{required:!0,tsType:{name:"number"},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
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
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
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
    };
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
  };
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
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
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}>`},description:""},soknadOriginalBehandling:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
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
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
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
    };
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
  };
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
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
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
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
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato?: string;
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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const _h={"FodselsammenligningPanel.AntallBarn":"Antall barn","FodselsammenligningPanel.Termindato":"Termindato","FodselsammenligningPanel.FodtISvangerskapsuke":"Født i svangerskapsuke","FodselsammenligningPanel.Svangerskapsuke":"Svangerskapsuke","FodselsammenligningPanel.OpplysningerTPS":"Opplysninger om fødsel fra folkeregisteret","FodselsammenligningPanel.Fodselsdato":"Fødselsdato","FodselsammenligningPanel.Dodsdato":"Dødsdato","FodselsammenligningPanel.UstedtDato":"Utstedt dato","FodselsammenligningPanel.Ytelsesvedtak":"Vedtak","FodselsammenligningPanel.Dodfodt":"Dødfødsel","FodselsammenligningPanel.Dod":"Død","FodselSammenligningOtherPanel.OpplysningerISoknad":"Opplysninger om fødsel fra søknaden","FodselSammenligningOtherPanel.TerminISoknad":"Opplysninger om termin oppgitt i søknaden"},Sh=De(_h),Ys=({behandlingsTypeKode:e,avklartBarn:t=[],termindato:n,vedtaksDatoSomSvangerskapsuke:r,soknad:a,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:i})=>{const o=t.reduce((l,u)=>l+(u.dodsdato?1:0),0);return g.createElement(ko,{value:Sh},g.createElement(qs,{avklartBarn:t,termindato:n,vedtaksDatoSomSvangerskapsuke:r,nrOfDodfodteBarn:o,behandlingsTypeKode:e,soknad:a,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:i}))},Us=Ys;Ys.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningIndex",props:{behandlingsTypeKode:{required:!0,tsType:{name:"string"},description:""},avklartBarn:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato?: string;
}>`}],raw:"AvklartBarn[]"},description:"",defaultValue:{value:"[]",computed:!1}},termindato:{required:!1,tsType:{name:"string"},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
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
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
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
    };
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
  };
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
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
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}>`},description:""},soknadOriginalBehandling:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
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
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
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
    };
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
  };
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
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
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
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
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato?: string;
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
}>`},description:""}}};const Th=[{fodselsdato:"2019-01-10",dodsdato:"2019-01-10",fnr:"1213200001"}],wh={fodselsdatoer:{1:"2019-01-10"},termindato:"2019-01-01",utstedtdato:"2019-01-02",antallBarn:1},Dh={avklartBarn:[{fodselsdato:"2019-01-10"}],termindato:"2019-01-01",antallBarnTermin:1},Mh={title:"prosessOgFakta/prosess-fakta-fodsel-sammenligning",component:Us},wr=({behandlingsTypeKode:e,vedtaksDatoSomSvangerskapsuke:t,familiehendelseOriginalBehandling:n})=>g.createElement(Us,{behandlingsTypeKode:e,avklartBarn:Th,termindato:"2019-01-01",soknad:wh,familiehendelseOriginalBehandling:n||Dh,vedtaksDatoSomSvangerskapsuke:t}),ht=wr.bind({});ht.args={behandlingsTypeKode:yt.REVURDERING};const gt=wr.bind({});gt.args={behandlingsTypeKode:yt.FORSTEGANGSSOKNAD};const ct=wr.bind({});ct.args={behandlingsTypeKode:yt.REVURDERING,vedtaksDatoSomSvangerskapsuke:43,familiehendelseOriginalBehandling:{avklartBarn:[],termindato:"2019-01-01",antallBarnTermin:1}};var Zr,Xr,Kr;ht.parameters={...ht.parameters,docs:{...(Zr=ht.parameters)==null?void 0:Zr.docs,source:{originalSource:`({
  behandlingsTypeKode,
  vedtaksDatoSomSvangerskapsuke,
  familiehendelseOriginalBehandling
}) => <FodselSammenligningIndex behandlingsTypeKode={behandlingsTypeKode} avklartBarn={avklartBarn} termindato="2019-01-01" soknad={soknad} familiehendelseOriginalBehandling={familiehendelseOriginalBehandling || familiehendelse} vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke} />`,...(Kr=(Xr=ht.parameters)==null?void 0:Xr.docs)==null?void 0:Kr.source}}};var Jr,Qr,ea;gt.parameters={...gt.parameters,docs:{...(Jr=gt.parameters)==null?void 0:Jr.docs,source:{originalSource:`({
  behandlingsTypeKode,
  vedtaksDatoSomSvangerskapsuke,
  familiehendelseOriginalBehandling
}) => <FodselSammenligningIndex behandlingsTypeKode={behandlingsTypeKode} avklartBarn={avklartBarn} termindato="2019-01-01" soknad={soknad} familiehendelseOriginalBehandling={familiehendelseOriginalBehandling || familiehendelse} vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke} />`,...(ea=(Qr=gt.parameters)==null?void 0:Qr.docs)==null?void 0:ea.source}}};var ta,na,ra;ct.parameters={...ct.parameters,docs:{...(ta=ct.parameters)==null?void 0:ta.docs,source:{originalSource:`({
  behandlingsTypeKode,
  vedtaksDatoSomSvangerskapsuke,
  familiehendelseOriginalBehandling
}) => <FodselSammenligningIndex behandlingsTypeKode={behandlingsTypeKode} avklartBarn={avklartBarn} termindato="2019-01-01" soknad={soknad} familiehendelseOriginalBehandling={familiehendelseOriginalBehandling || familiehendelse} vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke} />`,...(ra=(na=ct.parameters)==null?void 0:na.docs)==null?void 0:ra.source}}};const Nh=["PanelForNårBehandlingstypeErRevurdering","PanelForNårBehandlingstypeErFørstegangssoknad","PanelForMedVisningAvSvangerskapsuke"];export{ct as PanelForMedVisningAvSvangerskapsuke,gt as PanelForNårBehandlingstypeErFørstegangssoknad,ht as PanelForNårBehandlingstypeErRevurdering,Nh as __namedExportsOrder,Mh as default};
