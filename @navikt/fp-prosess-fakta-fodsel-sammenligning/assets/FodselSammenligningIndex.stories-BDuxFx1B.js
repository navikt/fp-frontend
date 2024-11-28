import{j as y}from"./jsx-runtime-CkxqCPlQ.js";import{r as C,R as J}from"./index-DJO9vBfz.js";import{a as $t}from"./dayjs.min-Bhlr18jM.js";var Vt=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(Vt||{});Vt.BRUKERS_ANDEL;Vt.FRILANS;Vt.EGEN_NÆRING;var st=(e=>(e.FORSTEGANGSSOKNAD="BT-002",e.KLAGE="BT-003",e.REVURDERING="BT-004",e.DOKUMENTINNSYN="BT-006",e.TILBAKEKREVING="BT-007",e.ANKE="BT-008",e.TILBAKEKREVING_REVURDERING="BT-009",e))(st||{}),Nn=function(e,t){return Nn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])},Nn(e,t)};function ce(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Nn(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var k=function(){return k=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},k.apply(this,arguments)};function it(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function be(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,s;r<a;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var la={exports:{}},I={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z=typeof Symbol=="function"&&Symbol.for,Vn=Z?Symbol.for("react.element"):60103,zn=Z?Symbol.for("react.portal"):60106,zt=Z?Symbol.for("react.fragment"):60107,Zt=Z?Symbol.for("react.strict_mode"):60108,Xt=Z?Symbol.for("react.profiler"):60114,Kt=Z?Symbol.for("react.provider"):60109,Jt=Z?Symbol.for("react.context"):60110,Zn=Z?Symbol.for("react.async_mode"):60111,Qt=Z?Symbol.for("react.concurrent_mode"):60111,en=Z?Symbol.for("react.forward_ref"):60112,tn=Z?Symbol.for("react.suspense"):60113,zs=Z?Symbol.for("react.suspense_list"):60120,nn=Z?Symbol.for("react.memo"):60115,rn=Z?Symbol.for("react.lazy"):60116,Zs=Z?Symbol.for("react.block"):60121,Xs=Z?Symbol.for("react.fundamental"):60117,Ks=Z?Symbol.for("react.responder"):60118,Js=Z?Symbol.for("react.scope"):60119;function ae(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Vn:switch(e=e.type,e){case Zn:case Qt:case zt:case Xt:case Zt:case tn:return e;default:switch(e=e&&e.$$typeof,e){case Jt:case en:case rn:case nn:case Kt:return e;default:return t}}case zn:return t}}}function ua(e){return ae(e)===Qt}I.AsyncMode=Zn;I.ConcurrentMode=Qt;I.ContextConsumer=Jt;I.ContextProvider=Kt;I.Element=Vn;I.ForwardRef=en;I.Fragment=zt;I.Lazy=rn;I.Memo=nn;I.Portal=zn;I.Profiler=Xt;I.StrictMode=Zt;I.Suspense=tn;I.isAsyncMode=function(e){return ua(e)||ae(e)===Zn};I.isConcurrentMode=ua;I.isContextConsumer=function(e){return ae(e)===Jt};I.isContextProvider=function(e){return ae(e)===Kt};I.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vn};I.isForwardRef=function(e){return ae(e)===en};I.isFragment=function(e){return ae(e)===zt};I.isLazy=function(e){return ae(e)===rn};I.isMemo=function(e){return ae(e)===nn};I.isPortal=function(e){return ae(e)===zn};I.isProfiler=function(e){return ae(e)===Xt};I.isStrictMode=function(e){return ae(e)===Zt};I.isSuspense=function(e){return ae(e)===tn};I.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===zt||e===Qt||e===Xt||e===Zt||e===tn||e===zs||typeof e=="object"&&e!==null&&(e.$$typeof===rn||e.$$typeof===nn||e.$$typeof===Kt||e.$$typeof===Jt||e.$$typeof===en||e.$$typeof===Xs||e.$$typeof===Ks||e.$$typeof===Js||e.$$typeof===Zs)};I.typeOf=ae;la.exports=I;var Qs=la.exports,da=Qs,ei={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ti={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fa={};fa[da.ForwardRef]=ei;fa[da.Memo]=ti;function ma(e,t,n){if(n===void 0&&(n=Error),!e)throw new n(t)}var E;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(E||(E={}));var L;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(L||(L={}));var ot;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(ot||(ot={}));function Nr(e){return e.type===L.literal}function ni(e){return e.type===L.argument}function ha(e){return e.type===L.number}function ga(e){return e.type===L.date}function ca(e){return e.type===L.time}function pa(e){return e.type===L.select}function ya(e){return e.type===L.plural}function ri(e){return e.type===L.pound}function va(e){return e.type===L.tag}function ka(e){return!!(e&&typeof e=="object"&&e.type===ot.number)}function Mn(e){return!!(e&&typeof e=="object"&&e.type===ot.dateTime)}var ba=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,ai=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function si(e){var t={};return e.replace(ai,function(n){var r=n.length;switch(n[0]){case"G":t.era=r===4?"long":r===5?"narrow":"short";break;case"y":t.year=r===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=r===4?"long":r===5?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][r-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][r-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][r-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][r-1];break;case"s":t.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),t}var ii=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function oi(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var t=e.split(ii).filter(function(m){return m.length>0}),n=[],r=0,a=t;r<a.length;r++){var s=a[r],i=s.split("/");if(i.length===0)throw new Error("Invalid number skeleton");for(var o=i[0],l=i.slice(1),u=0,d=l;u<d.length;u++){var h=d[u];if(h.length===0)throw new Error("Invalid number skeleton")}n.push({stem:o,options:l})}return n}function li(e){return e.replace(/^(.*?)-/,"")}var Mr=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,_a=/^(@+)?(\+|#+)?[rs]?$/g,ui=/(\*)(0+)|(#+)(0+)|(0+)/g,Sa=/^(0+)$/;function Or(e){var t={};return e[e.length-1]==="r"?t.roundingPriority="morePrecision":e[e.length-1]==="s"&&(t.roundingPriority="lessPrecision"),e.replace(_a,function(n,r,a){return typeof a!="string"?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):a==="+"?t.minimumSignificantDigits=r.length:r[0]==="#"?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+(typeof a=="string"?a.length:0)),""}),t}function Ta(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function di(e){var t;if(e[0]==="E"&&e[1]==="E"?(t={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(t={notation:"scientific"},e=e.slice(1)),t){var n=e.slice(0,2);if(n==="+!"?(t.signDisplay="always",e=e.slice(2)):n==="+?"&&(t.signDisplay="exceptZero",e=e.slice(2)),!Sa.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function Rr(e){var t={},n=Ta(e);return n||t}function fi(e){for(var t={},n=0,r=e;n<r.length;n++){var a=r[n];switch(a.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=a.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=li(a.options[0]);continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=k(k(k({},t),{notation:"scientific"}),a.options.reduce(function(l,u){return k(k({},l),Rr(u))},{}));continue;case"engineering":t=k(k(k({},t),{notation:"engineering"}),a.options.reduce(function(l,u){return k(k({},l),Rr(u))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":t.roundingMode="floor";continue;case"rounding-mode-ceiling":t.roundingMode="ceil";continue;case"rounding-mode-down":t.roundingMode="trunc";continue;case"rounding-mode-up":t.roundingMode="expand";continue;case"rounding-mode-half-even":t.roundingMode="halfEven";continue;case"rounding-mode-half-down":t.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":t.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(ui,function(l,u,d,h,m,S){if(u)t.minimumIntegerDigits=d.length;else{if(h&&m)throw new Error("We currently do not support maximum integer digits");if(S)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Sa.test(a.stem)){t.minimumIntegerDigits=a.stem.length;continue}if(Mr.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(Mr,function(l,u,d,h,m,S){return d==="*"?t.minimumFractionDigits=u.length:h&&h[0]==="#"?t.maximumFractionDigits=h.length:m&&S?(t.minimumFractionDigits=m.length,t.maximumFractionDigits=m.length+S.length):(t.minimumFractionDigits=u.length,t.maximumFractionDigits=u.length),""});var s=a.options[0];s==="w"?t=k(k({},t),{trailingZeroDisplay:"stripIfInteger"}):s&&(t=k(k({},t),Or(s)));continue}if(_a.test(a.stem)){t=k(k({},t),Or(a.stem));continue}var i=Ta(a.stem);i&&(t=k(k({},t),i));var o=di(a.stem);o&&(t=k(k({},t),o))}return t}var Nt={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function mi(e,t){for(var n="",r=0;r<e.length;r++){var a=e.charAt(r);if(a==="j"){for(var s=0;r+1<e.length&&e.charAt(r+1)===a;)s++,r++;var i=1+(s&1),o=s<2?1:3+(s>>1),l="a",u=hi(t);for((u=="H"||u=="k")&&(o=0);o-- >0;)n+=l;for(;i-- >0;)n=u+n}else a==="J"?n+="H":n+=a}return n}function hi(e){var t=e.hourCycle;if(t===void 0&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var n=e.language,r;n!=="root"&&(r=e.maximize().region);var a=Nt[r||""]||Nt[n||""]||Nt["".concat(n,"-001")]||Nt["001"];return a[0]}var bn,gi=new RegExp("^".concat(ba.source,"*")),ci=new RegExp("".concat(ba.source,"*$"));function P(e,t){return{start:e,end:t}}var pi=!!String.prototype.startsWith&&"_a".startsWith("a",1),yi=!!String.fromCodePoint,vi=!!Object.fromEntries,ki=!!String.prototype.codePointAt,bi=!!String.prototype.trimStart,_i=!!String.prototype.trimEnd,Si=!!Number.isSafeInteger,Ti=Si?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},On=!0;try{var wi=xa("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");On=((bn=wi.exec("a"))===null||bn===void 0?void 0:bn[0])==="a"}catch{On=!1}var Fr=pi?function(t,n,r){return t.startsWith(n,r)}:function(t,n,r){return t.slice(r,r+n.length)===n},Rn=yi?String.fromCodePoint:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var r="",a=t.length,s=0,i;a>s;){if(i=t[s++],i>1114111)throw RangeError(i+" is not a valid code point");r+=i<65536?String.fromCharCode(i):String.fromCharCode(((i-=65536)>>10)+55296,i%1024+56320)}return r},Ar=vi?Object.fromEntries:function(t){for(var n={},r=0,a=t;r<a.length;r++){var s=a[r],i=s[0],o=s[1];n[i]=o}return n},wa=ki?function(t,n){return t.codePointAt(n)}:function(t,n){var r=t.length;if(!(n<0||n>=r)){var a=t.charCodeAt(n),s;return a<55296||a>56319||n+1===r||(s=t.charCodeAt(n+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},xi=bi?function(t){return t.trimStart()}:function(t){return t.replace(gi,"")},Di=_i?function(t){return t.trimEnd()}:function(t){return t.replace(ci,"")};function xa(e,t){return new RegExp(e,t)}var Fn;if(On){var Ir=xa("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Fn=function(t,n){var r;Ir.lastIndex=n;var a=Ir.exec(t);return(r=a[1])!==null&&r!==void 0?r:""}}else Fn=function(t,n){for(var r=[];;){var a=wa(t,n);if(a===void 0||Da(a)||Mi(a))break;r.push(a),n+=a>=65536?2:1}return Rn.apply(void 0,r)};var Ei=function(){function e(t,n){n===void 0&&(n={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!n.ignoreTag,this.locale=n.locale,this.requiresOtherClause=!!n.requiresOtherClause,this.shouldParseSkeletons=!!n.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(t,n,r){for(var a=[];!this.isEOF();){var s=this.char();if(s===123){var i=this.parseArgument(t,r);if(i.err)return i;a.push(i.val)}else{if(s===125&&t>0)break;if(s===35&&(n==="plural"||n==="selectordinal")){var o=this.clonePosition();this.bump(),a.push({type:L.pound,location:P(o,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(r)break;return this.error(E.UNMATCHED_CLOSING_TAG,P(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&An(this.peek()||0)){var i=this.parseTag(t,n);if(i.err)return i;a.push(i.val)}else{var i=this.parseLiteral(t,n);if(i.err)return i;a.push(i.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(t,n){var r=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:L.literal,value:"<".concat(a,"/>"),location:P(r,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(t+1,n,!0);if(s.err)return s;var i=s.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!An(this.char()))return this.error(E.INVALID_TAG,P(o,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return a!==u?this.error(E.UNMATCHED_CLOSING_TAG,P(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:L.tag,value:a,children:i,location:P(r,this.clonePosition())},err:null}:this.error(E.INVALID_TAG,P(o,this.clonePosition())))}else return this.error(E.UNCLOSED_TAG,P(r,this.clonePosition()))}else return this.error(E.INVALID_TAG,P(r,this.clonePosition()))},e.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&Ni(this.char());)this.bump();return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(t,n){for(var r=this.clonePosition(),a="";;){var s=this.tryParseQuote(n);if(s){a+=s;continue}var i=this.tryParseUnquoted(t,n);if(i){a+=i;continue}var o=this.tryParseLeftAngleBracket();if(o){a+=o;continue}break}var l=P(r,this.clonePosition());return{val:{type:L.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Pi(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(t){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(t==="plural"||t==="selectordinal")break;return null;default:return null}this.bump();var n=[this.char()];for(this.bump();!this.isEOF();){var r=this.char();if(r===39)if(this.peek()===39)n.push(39),this.bump();else{this.bump();break}else n.push(r);this.bump()}return Rn.apply(void 0,n)},e.prototype.tryParseUnquoted=function(t,n){if(this.isEOF())return null;var r=this.char();return r===60||r===123||r===35&&(n==="plural"||n==="selectordinal")||r===125&&t>0?null:(this.bump(),Rn(r))},e.prototype.parseArgument=function(t,n){var r=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE,P(r,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(E.EMPTY_ARGUMENT,P(r,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(E.MALFORMED_ARGUMENT,P(r,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE,P(r,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:L.argument,value:a,location:P(r,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE,P(r,this.clonePosition())):this.parseArgumentOptions(t,n,a,r);default:return this.error(E.MALFORMED_ARGUMENT,P(r,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),n=this.offset(),r=Fn(this.message,n),a=n+r.length;this.bumpTo(a);var s=this.clonePosition(),i=P(t,s);return{value:r,location:i}},e.prototype.parseArgumentOptions=function(t,n,r,a){var s,i=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(E.EXPECT_ARGUMENT_TYPE,P(i,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var m=Di(h.val);if(m.length===0)return this.error(E.EXPECT_ARGUMENT_STYLE,P(this.clonePosition(),this.clonePosition()));var S=P(d,this.clonePosition());u={style:m,styleLocation:S}}var w=this.tryParseArgumentClose(a);if(w.err)return w;var c=P(a,this.clonePosition());if(u&&Fr(u==null?void 0:u.style,"::",0)){var M=xi(u.style.slice(2));if(o==="number"){var h=this.parseNumberSkeletonFromString(M,u.styleLocation);return h.err?h:{val:{type:L.number,value:r,location:c,style:h.val},err:null}}else{if(M.length===0)return this.error(E.EXPECT_DATE_TIME_SKELETON,c);var x=M;this.locale&&(x=mi(M,this.locale));var m={type:ot.dateTime,pattern:x,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?si(x):{}},j=o==="date"?L.date:L.time;return{val:{type:j,value:r,location:c,style:m},err:null}}}return{val:{type:o==="number"?L.number:o==="date"?L.date:L.time,value:r,location:c,style:(s=u==null?void 0:u.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var O=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(E.EXPECT_SELECT_ARGUMENT_OPTIONS,P(O,k({},O)));this.bumpSpace();var fe=this.parseIdentifierIfPossible(),Q=0;if(o!=="select"&&fe.value==="offset"){if(!this.bumpIf(":"))return this.error(E.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,P(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(E.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,E.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),fe=this.parseIdentifierIfPossible(),Q=h.val}var R=this.tryParsePluralOrSelectOptions(t,o,n,fe);if(R.err)return R;var w=this.tryParseArgumentClose(a);if(w.err)return w;var _=P(a,this.clonePosition());return o==="select"?{val:{type:L.select,value:r,options:Ar(R.val),location:_},err:null}:{val:{type:L.plural,value:r,options:Ar(R.val),offset:Q,pluralType:o==="plural"?"cardinal":"ordinal",location:_},err:null}}default:return this.error(E.INVALID_ARGUMENT_TYPE,P(i,l))}},e.prototype.tryParseArgumentClose=function(t){return this.isEOF()||this.char()!==125?this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE,P(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,n=this.clonePosition();!this.isEOF();){var r=this.char();switch(r){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(E.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,P(a,this.clonePosition()));this.bump();break}case 123:{t+=1,this.bump();break}case 125:{if(t>0)t-=1;else return{val:this.message.slice(n.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(n.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(t,n){var r=[];try{r=oi(t)}catch{return this.error(E.INVALID_NUMBER_SKELETON,n)}return{val:{type:ot.number,tokens:r,location:n,parsedOptions:this.shouldParseSkeletons?fi(r):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(t,n,r,a){for(var s,i=!1,o=[],l=new Set,u=a.value,d=a.location;;){if(u.length===0){var h=this.clonePosition();if(n!=="select"&&this.bumpIf("=")){var m=this.tryParseDecimalInteger(E.EXPECT_PLURAL_ARGUMENT_SELECTOR,E.INVALID_PLURAL_ARGUMENT_SELECTOR);if(m.err)return m;d=P(h,this.clonePosition()),u=this.message.slice(h.offset,this.offset())}else break}if(l.has(u))return this.error(n==="select"?E.DUPLICATE_SELECT_ARGUMENT_SELECTOR:E.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);u==="other"&&(i=!0),this.bumpSpace();var S=this.clonePosition();if(!this.bumpIf("{"))return this.error(n==="select"?E.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:E.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,P(this.clonePosition(),this.clonePosition()));var w=this.parseMessage(t+1,n,r);if(w.err)return w;var c=this.tryParseArgumentClose(S);if(c.err)return c;o.push([u,{value:w.val,location:P(S,this.clonePosition())}]),l.add(u),this.bumpSpace(),s=this.parseIdentifierIfPossible(),u=s.value,d=s.location}return o.length===0?this.error(n==="select"?E.EXPECT_SELECT_ARGUMENT_SELECTOR:E.EXPECT_PLURAL_ARGUMENT_SELECTOR,P(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!i?this.error(E.MISSING_OTHER_CLAUSE,P(this.clonePosition(),this.clonePosition())):{val:o,err:null}},e.prototype.tryParseDecimalInteger=function(t,n){var r=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);for(var s=!1,i=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)s=!0,i=i*10+(o-48),this.bump();else break}var l=P(a,this.clonePosition());return s?(i*=r,Ti(i)?{val:i,err:null}:this.error(n,l)):this.error(t,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var n=wa(this.message,t);if(n===void 0)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return n},e.prototype.error=function(t,n){return{val:null,err:{kind:t,message:this.message,location:n}}},e.prototype.bump=function(){if(!this.isEOF()){var t=this.char();t===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},e.prototype.bumpIf=function(t){if(Fr(this.message,t,this.offset())){for(var n=0;n<t.length;n++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(t){var n=this.offset(),r=this.message.indexOf(t,n);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var n=this.offset();if(n===t)break;if(n>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Da(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),n=this.offset(),r=this.message.charCodeAt(n+(t>=65536?2:1));return r??null},e}();function An(e){return e>=97&&e<=122||e>=65&&e<=90}function Pi(e){return An(e)||e===47}function Ni(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Da(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function Mi(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function In(e){e.forEach(function(t){if(delete t.location,pa(t)||ya(t))for(var n in t.options)delete t.options[n].location,In(t.options[n].value);else ha(t)&&ka(t.style)||(ga(t)||ca(t))&&Mn(t.style)?delete t.style.location:va(t)&&In(t.children)})}function Oi(e,t){t===void 0&&(t={}),t=k({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var n=new Ei(e,t).parse();if(n.err){var r=SyntaxError(E[n.err.kind]);throw r.location=n.err.location,r.originalMessage=n.err.message,r}return t!=null&&t.captureLocation||In(n.val),n.val}function ve(e,t){var n=t&&t.cache?t.cache:Bi,r=t&&t.serializer?t.serializer:Hi,a=t&&t.strategy?t.strategy:Fi;return a(e,{cache:n,serializer:r})}function Ri(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Ea(e,t,n,r){var a=Ri(r)?r:n(r),s=t.get(a);return typeof s>"u"&&(s=e.call(this,r),t.set(a,s)),s}function Pa(e,t,n){var r=Array.prototype.slice.call(arguments,3),a=n(r),s=t.get(a);return typeof s>"u"&&(s=e.apply(this,r),t.set(a,s)),s}function Xn(e,t,n,r,a){return n.bind(t,e,r,a)}function Fi(e,t){var n=e.length===1?Ea:Pa;return Xn(e,this,n,t.cache.create(),t.serializer)}function Ai(e,t){return Xn(e,this,Pa,t.cache.create(),t.serializer)}function Ii(e,t){return Xn(e,this,Ea,t.cache.create(),t.serializer)}var Hi=function(){return JSON.stringify(arguments)};function Kn(){this.cache=Object.create(null)}Kn.prototype.get=function(e){return this.cache[e]};Kn.prototype.set=function(e,t){this.cache[e]=t};var Bi={create:function(){return new Kn}},ke={variadic:Ai,monadic:Ii},we;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(we||(we={}));var Ye=function(e){ce(t,e);function t(n,r,a){var s=e.call(this,n)||this;return s.code=r,s.originalMessage=a,s}return t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),Hr=function(e){ce(t,e);function t(n,r,a,s){return e.call(this,'Invalid values for "'.concat(n,'": "').concat(r,'". Options are "').concat(Object.keys(a).join('", "'),'"'),we.INVALID_VALUE,s)||this}return t}(Ye),Ci=function(e){ce(t,e);function t(n,r,a){return e.call(this,'Value for "'.concat(n,'" must be of type ').concat(r),we.INVALID_VALUE,a)||this}return t}(Ye),ji=function(e){ce(t,e);function t(n,r){return e.call(this,'The intl string context variable "'.concat(n,'" was not provided to the string "').concat(r,'"'),we.MISSING_VALUE,r)||this}return t}(Ye),K;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(K||(K={}));function Li(e){return e.length<2?e:e.reduce(function(t,n){var r=t[t.length-1];return!r||r.type!==K.literal||n.type!==K.literal?t.push(n):r.value+=n.value,t},[])}function Na(e){return typeof e=="function"}function Ft(e,t,n,r,a,s,i){if(e.length===1&&Nr(e[0]))return[{type:K.literal,value:e[0].value}];for(var o=[],l=0,u=e;l<u.length;l++){var d=u[l];if(Nr(d)){o.push({type:K.literal,value:d.value});continue}if(ri(d)){typeof s=="number"&&o.push({type:K.literal,value:n.getNumberFormat(t).format(s)});continue}var h=d.value;if(!(a&&h in a))throw new ji(h,i);var m=a[h];if(ni(d)){(!m||typeof m=="string"||typeof m=="number")&&(m=typeof m=="string"||typeof m=="number"?String(m):""),o.push({type:typeof m=="string"?K.literal:K.object,value:m});continue}if(ga(d)){var S=typeof d.style=="string"?r.date[d.style]:Mn(d.style)?d.style.parsedOptions:void 0;o.push({type:K.literal,value:n.getDateTimeFormat(t,S).format(m)});continue}if(ca(d)){var S=typeof d.style=="string"?r.time[d.style]:Mn(d.style)?d.style.parsedOptions:r.time.medium;o.push({type:K.literal,value:n.getDateTimeFormat(t,S).format(m)});continue}if(ha(d)){var S=typeof d.style=="string"?r.number[d.style]:ka(d.style)?d.style.parsedOptions:void 0;S&&S.scale&&(m=m*(S.scale||1)),o.push({type:K.literal,value:n.getNumberFormat(t,S).format(m)});continue}if(va(d)){var w=d.children,c=d.value,M=a[c];if(!Na(M))throw new Ci(c,"function",i);var x=Ft(w,t,n,r,a,s),j=M(x.map(function(Q){return Q.value}));Array.isArray(j)||(j=[j]),o.push.apply(o,j.map(function(Q){return{type:typeof Q=="string"?K.literal:K.object,value:Q}}))}if(pa(d)){var O=d.options[m]||d.options.other;if(!O)throw new Hr(d.value,m,Object.keys(d.options),i);o.push.apply(o,Ft(O.value,t,n,r,a));continue}if(ya(d)){var O=d.options["=".concat(m)];if(!O){if(!Intl.PluralRules)throw new Ye(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,we.MISSING_INTL_API,i);var fe=n.getPluralRules(t,{type:d.pluralType}).select(m-(d.offset||0));O=d.options[fe]||d.options.other}if(!O)throw new Hr(d.value,m,Object.keys(d.options),i);o.push.apply(o,Ft(O.value,t,n,r,a,m-(d.offset||0)));continue}}return Li(o)}function qi(e,t){return t?k(k(k({},e||{}),t||{}),Object.keys(e).reduce(function(n,r){return n[r]=k(k({},e[r]),t[r]||{}),n},{})):e}function Yi(e,t){return t?Object.keys(e).reduce(function(n,r){return n[r]=qi(e[r],t[r]),n},k({},e)):e}function _n(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}function Ui(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:ve(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.NumberFormat).bind.apply(t,be([void 0],n,!1)))},{cache:_n(e.number),strategy:ke.variadic}),getDateTimeFormat:ve(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.DateTimeFormat).bind.apply(t,be([void 0],n,!1)))},{cache:_n(e.dateTime),strategy:ke.variadic}),getPluralRules:ve(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.PluralRules).bind.apply(t,be([void 0],n,!1)))},{cache:_n(e.pluralRules),strategy:ke.variadic})}}var Ma=function(){function e(t,n,r,a){var s=this;if(n===void 0&&(n=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var u=s.formatToParts(l);if(u.length===1)return u[0].value;var d=u.reduce(function(h,m){return!h.length||m.type!==K.literal||typeof h[h.length-1]!="string"?h.push(m.value):h[h.length-1]+=m.value,h},[]);return d.length<=1?d[0]||"":d},this.formatToParts=function(l){return Ft(s.ast,s.locales,s.formatters,s.formats,l,void 0,s.message)},this.resolvedOptions=function(){var l;return{locale:((l=s.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=n,this.resolvedLocale=e.resolveLocale(n),typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var i=a||{};i.formatters;var o=it(i,["formatters"]);this.ast=e.__parse(t,k(k({},o),{locale:this.resolvedLocale}))}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Yi(e.formats,r),this.formatters=a&&a.formatters||Ui(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(t){if(!(typeof Intl.Locale>"u")){var n=Intl.NumberFormat.supportedLocalesOf(t);return n.length>0?new Intl.Locale(n[0]):new Intl.Locale(typeof t=="string"?t:t[0])}},e.__parse=Oi,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Ve;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Ve||(Ve={}));var Tt=function(e){ce(t,e);function t(n,r,a){var s=this,i=a?a instanceof Error?a:new Error(String(a)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(n,"] ").concat(r,`
`).concat(i?`
`.concat(i.message,`
`).concat(i.stack):""))||this,s.code=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,t),s}return t}(Error),Gi=function(e){ce(t,e);function t(n,r){return e.call(this,Ve.UNSUPPORTED_FORMATTER,n,r)||this}return t}(Tt),Wi=function(e){ce(t,e);function t(n,r){return e.call(this,Ve.INVALID_CONFIG,n,r)||this}return t}(Tt),Br=function(e){ce(t,e);function t(n,r){return e.call(this,Ve.MISSING_DATA,n,r)||this}return t}(Tt),le=function(e){ce(t,e);function t(n,r,a){var s=e.call(this,Ve.FORMAT_ERROR,"".concat(n,`
Locale: `).concat(r,`
`),a)||this;return s.locale=r,s}return t}(Tt),Sn=function(e){ce(t,e);function t(n,r,a,s){var i=e.call(this,"".concat(n,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),r,s)||this;return i.descriptor=a,i.locale=r,i}return t}(le),$i=function(e){ce(t,e);function t(n,r){var a=e.call(this,Ve.MISSING_TRANSLATION,'Missing message: "'.concat(n.id,'" for locale "').concat(r,'", using ').concat(n.defaultMessage?"default message (".concat(typeof n.defaultMessage=="string"?n.defaultMessage:n.defaultMessage.map(function(s){var i;return(i=s.value)!==null&&i!==void 0?i:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=n,a}return t}(Tt);function ze(e,t,n){return n===void 0&&(n={}),t.reduce(function(r,a){return a in e?r[a]=e[a]:a in n&&(r[a]=n[a]),r},{})}var Vi=function(e){},zi=function(e){},Oa={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Vi,onWarn:zi};function Ra(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Ue(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}function Zi(e){e===void 0&&(e=Ra());var t=Intl.RelativeTimeFormat,n=Intl.ListFormat,r=Intl.DisplayNames,a=ve(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.DateTimeFormat).bind.apply(o,be([void 0],l,!1)))},{cache:Ue(e.dateTime),strategy:ke.variadic}),s=ve(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.NumberFormat).bind.apply(o,be([void 0],l,!1)))},{cache:Ue(e.number),strategy:ke.variadic}),i=ve(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.PluralRules).bind.apply(o,be([void 0],l,!1)))},{cache:Ue(e.pluralRules),strategy:ke.variadic});return{getDateTimeFormat:a,getNumberFormat:s,getMessageFormat:ve(function(o,l,u,d){return new Ma(o,l,u,k({formatters:{getNumberFormat:s,getDateTimeFormat:a,getPluralRules:i}},d||{}))},{cache:Ue(e.message),strategy:ke.variadic}),getRelativeTimeFormat:ve(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(t.bind.apply(t,be([void 0],o,!1)))},{cache:Ue(e.relativeTime),strategy:ke.variadic}),getPluralRules:i,getListFormat:ve(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(n.bind.apply(n,be([void 0],o,!1)))},{cache:Ue(e.list),strategy:ke.variadic}),getDisplayNames:ve(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(r.bind.apply(r,be([void 0],o,!1)))},{cache:Ue(e.displayNames),strategy:ke.variadic})}}function Jn(e,t,n,r){var a=e&&e[t],s;if(a&&(s=a[n]),s)return s;r(new Gi("No ".concat(t," format named: ").concat(n)))}function Mt(e,t){return Object.keys(e).reduce(function(n,r){return n[r]=k({timeZone:t},e[r]),n},{})}function Cr(e,t){var n=Object.keys(k(k({},e),t));return n.reduce(function(r,a){return r[a]=k(k({},e[a]||{}),t[a]||{}),r},{})}function jr(e,t){if(!t)return e;var n=Ma.formats;return k(k(k({},n),e),{date:Cr(Mt(n.date,t),Mt(e.date||{},t)),time:Cr(Mt(n.time,t),Mt(e.time||{},t))})}var Hn=function(e,t,n,r,a){var s=e.locale,i=e.formats,o=e.messages,l=e.defaultLocale,u=e.defaultFormats,d=e.fallbackOnEmptyString,h=e.onError,m=e.timeZone,S=e.defaultRichTextElements;n===void 0&&(n={id:""});var w=n.id,c=n.defaultMessage;ma(!!w,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var M=String(w),x=o&&Object.prototype.hasOwnProperty.call(o,M)&&o[M];if(Array.isArray(x)&&x.length===1&&x[0].type===L.literal)return x[0].value;if(!r&&x&&typeof x=="string"&&!S)return x.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=k(k({},S),r||{}),i=jr(i,m),u=jr(u,m),!x){if(d===!1&&x==="")return x;if((!c||s&&s.toLowerCase()!==l.toLowerCase())&&h(new $i(n,s)),c)try{var j=t.getMessageFormat(c,l,u,a);return j.format(r)}catch(O){return h(new Sn('Error formatting default message for: "'.concat(M,'", rendering default message verbatim'),s,n,O)),typeof c=="string"?c:M}return M}try{var j=t.getMessageFormat(x,s,i,k({formatters:t},a||{}));return j.format(r)}catch(O){h(new Sn('Error formatting message: "'.concat(M,'", using ').concat(c?"default message":"id"," as fallback."),s,n,O))}if(c)try{var j=t.getMessageFormat(c,l,u,a);return j.format(r)}catch(O){h(new Sn('Error formatting the default message for: "'.concat(M,'", rendering message verbatim'),s,n,O))}return typeof x=="string"?x:typeof c=="string"?c:M},Fa=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function an(e,t,n,r){var a=e.locale,s=e.formats,i=e.onError,o=e.timeZone;r===void 0&&(r={});var l=r.format,u=k(k({},o&&{timeZone:o}),l&&Jn(s,t,l,i)),d=ze(r,Fa,u);return t==="time"&&!d.hour&&!d.minute&&!d.second&&!d.timeStyle&&!d.dateStyle&&(d=k(k({},d),{hour:"numeric",minute:"numeric"})),n(a,d)}function Xi(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return an(e,"date",t,i).format(o)}catch(l){e.onError(new le("Error formatting date.",e.locale,l))}return String(o)}function Ki(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return an(e,"time",t,i).format(o)}catch(l){e.onError(new le("Error formatting time.",e.locale,l))}return String(o)}function Ji(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=n[2],o=i===void 0?{}:i,l=e.timeZone,u=e.locale,d=e.onError,h=ze(o,Fa,l?{timeZone:l}:{});try{return t(u,h).formatRange(a,s)}catch(m){d(new le("Error formatting date time range.",e.locale,m))}return String(a)}function Qi(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return an(e,"date",t,i).formatToParts(o)}catch(l){e.onError(new le("Error formatting date.",e.locale,l))}return[]}function eo(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return an(e,"time",t,i).formatToParts(o)}catch(l){e.onError(new le("Error formatting time.",e.locale,l))}return[]}var to=["style","type","fallback","languageDisplay"];function no(e,t,n,r){var a=e.locale,s=e.onError,i=Intl.DisplayNames;i||s(new Ye(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,we.MISSING_INTL_API));var o=ze(r,to);try{return t(a,o).of(n)}catch(l){s(new le("Error formatting display name.",a,l))}}var ro=["type","style"],Lr=Date.now();function ao(e){return"".concat(Lr,"_").concat(e,"_").concat(Lr)}function so(e,t,n,r){r===void 0&&(r={});var a=Aa(e,t,n,r).reduce(function(s,i){var o=i.value;return typeof o!="string"?s.push(o):typeof s[s.length-1]=="string"?s[s.length-1]+=o:s.push(o),s},[]);return a.length===1?a[0]:a.length===0?"":a}function Aa(e,t,n,r){var a=e.locale,s=e.onError;r===void 0&&(r={});var i=Intl.ListFormat;i||s(new Ye(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,we.MISSING_INTL_API));var o=ze(r,ro);try{var l={},u=n.map(function(d,h){if(typeof d=="object"){var m=ao(h);return l[m]=d,m}return String(d)});return t(a,o).formatToParts(u).map(function(d){return d.type==="literal"?d:k(k({},d),{value:l[d.value]||d.value})})}catch(d){s(new le("Error formatting list.",a,d))}return n}var io=["type"];function oo(e,t,n,r){var a=e.locale,s=e.onError;r===void 0&&(r={}),Intl.PluralRules||s(new Ye(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,we.MISSING_INTL_API));var i=ze(r,io);try{return t(a,i).select(n)}catch(o){s(new le("Error formatting plural.",a,o))}return"other"}var lo=["numeric","style"];function uo(e,t,n){var r=e.locale,a=e.formats,s=e.onError;n===void 0&&(n={});var i=n.format,o=!!i&&Jn(a,"relative",i,s)||{},l=ze(n,lo,o);return t(r,l)}function fo(e,t,n,r,a){a===void 0&&(a={}),r||(r="second");var s=Intl.RelativeTimeFormat;s||e.onError(new Ye(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,we.MISSING_INTL_API));try{return uo(e,t,a).format(n,r)}catch(i){e.onError(new le("Error formatting relative time.",e.locale,i))}return String(n)}var mo=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Ia(e,t,n){var r=e.locale,a=e.formats,s=e.onError;n===void 0&&(n={});var i=n.format,o=i&&Jn(a,"number",i,s)||{},l=ze(n,mo,o);return t(r,l)}function ho(e,t,n,r){r===void 0&&(r={});try{return Ia(e,t,r).format(n)}catch(a){e.onError(new le("Error formatting number.",e.locale,a))}return String(n)}function go(e,t,n,r){r===void 0&&(r={});try{return Ia(e,t,r).formatToParts(n)}catch(a){e.onError(new le("Error formatting number.",e.locale,a))}return[]}function co(e){var t=e?e[Object.keys(e)[0]]:void 0;return typeof t=="string"}function po(e){e.onWarn&&e.defaultRichTextElements&&co(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function yo(e,t){var n=Zi(t),r=k(k({},Oa),e),a=r.locale,s=r.defaultLocale,i=r.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&i?i(new Br('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&i&&i(new Br('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(i&&i(new Wi('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),po(r),k(k({},r),{formatters:n,formatNumber:ho.bind(null,r,n.getNumberFormat),formatNumberToParts:go.bind(null,r,n.getNumberFormat),formatRelativeTime:fo.bind(null,r,n.getRelativeTimeFormat),formatDate:Xi.bind(null,r,n.getDateTimeFormat),formatDateToParts:Qi.bind(null,r,n.getDateTimeFormat),formatTime:Ki.bind(null,r,n.getDateTimeFormat),formatDateTimeRange:Ji.bind(null,r,n.getDateTimeFormat),formatTimeToParts:eo.bind(null,r,n.getDateTimeFormat),formatPlural:oo.bind(null,r,n.getPluralRules),formatMessage:Hn.bind(null,r,n),$t:Hn.bind(null,r,n),formatList:so.bind(null,r,n.getListFormat),formatListToParts:Aa.bind(null,r,n.getListFormat),formatDisplayName:no.bind(null,r,n.getDisplayNames)})}function vo(e){ma(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var ko=k(k({},Oa),{textComponent:C.Fragment});function bo(e){return function(t){return e(C.Children.toArray(t))}}function qr(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),a=n.length;if(r.length!==a)return!1;for(var s=0;s<a;s++){var i=n[s];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}var Qn=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=C.createContext(null)):C.createContext(null);Qn.Consumer;var _o=Qn.Provider,So=_o,To=Qn;function er(){var e=C.useContext(To);return vo(e),e}var Bn;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Bn||(Bn={}));var Cn;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Cn||(Cn={}));function Ha(e){var t=function(n){var r=er(),a=n.value,s=n.children,i=it(n,["value","children"]),o=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?r.formatDateToParts(o,i):r.formatTimeToParts(o,i);return s(l)};return t.displayName=Cn[e],t}function wt(e){var t=function(n){var r=er(),a=n.value,s=n.children,i=it(n,["value","children"]),o=r[e](a,i);if(typeof s=="function")return s(o);var l=r.textComponent||C.Fragment;return C.createElement(l,null,o)};return t.displayName=Bn[e],t}function Ba(e){return e&&Object.keys(e).reduce(function(t,n){var r=e[n];return t[n]=Na(r)?bo(r):r,t},{})}var Yr=function(e,t,n,r){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];var i=Ba(r),o=Hn.apply(void 0,be([e,t,n,i],a,!1));return Array.isArray(o)?C.Children.toArray(o):o},wo=function(e,t){var n=e.defaultRichTextElements,r=it(e,["defaultRichTextElements"]),a=Ba(n),s=yo(k(k(k({},ko),r),{defaultRichTextElements:a}),t),i={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:a};return k(k({},s),{formatMessage:Yr.bind(null,i,s.formatters),$t:Yr.bind(null,i,s.formatters)})};function xo(e,t){var n=e.values,r=it(e,["values"]),a=t.values,s=it(t,["values"]);return qr(a,n)&&qr(r,s)}function Ca(e){var t=er(),n=t.formatMessage,r=t.textComponent,a=r===void 0?C.Fragment:r,s=e.id,i=e.description,o=e.defaultMessage,l=e.values,u=e.children,d=e.tagName,h=d===void 0?a:d,m=e.ignoreTag,S={id:s,description:i,defaultMessage:o},w=n(S,l,{ignoreTag:m});return typeof u=="function"?u(Array.isArray(w)?w:[w]):h?C.createElement(h,null,C.Children.toArray(w)):C.createElement(C.Fragment,null,w)}Ca.displayName="FormattedMessage";var re=C.memo(Ca,xo);re.displayName="MemoizedFormattedMessage";wt("formatDate");wt("formatTime");wt("formatNumber");wt("formatList");wt("formatDisplayName");Ha("formatDate");Ha("formatTime");var sn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ja={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(sn,function(){var n="minute",r=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(s,i,o){var l=i.prototype;o.utc=function(c){var M={date:c,utc:!0,args:arguments};return new i(M)},l.utc=function(c){var M=o(this.toDate(),{locale:this.$L,utc:!0});return c?M.add(this.utcOffset(),n):M},l.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var u=l.parse;l.parse=function(c){c.utc&&(this.$u=!0),this.$utils().u(c.$offset)||(this.$offset=c.$offset),u.call(this,c)};var d=l.init;l.init=function(){if(this.$u){var c=this.$d;this.$y=c.getUTCFullYear(),this.$M=c.getUTCMonth(),this.$D=c.getUTCDate(),this.$W=c.getUTCDay(),this.$H=c.getUTCHours(),this.$m=c.getUTCMinutes(),this.$s=c.getUTCSeconds(),this.$ms=c.getUTCMilliseconds()}else d.call(this)};var h=l.utcOffset;l.utcOffset=function(c,M){var x=this.$utils().u;if(x(c))return this.$u?0:x(this.$offset)?h.call(this):this.$offset;if(typeof c=="string"&&(c=function(Q){Q===void 0&&(Q="");var R=Q.match(r);if(!R)return null;var _=(""+R[0]).match(a)||["-",0,0],v=_[0],H=60*+_[1]+ +_[2];return H===0?0:v==="+"?H:-H}(c),c===null))return this;var j=Math.abs(c)<=16?60*c:c,O=this;if(M)return O.$offset=j,O.$u=c===0,O;if(c!==0){var fe=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(O=this.local().add(j+fe,n)).$offset=j,O.$x.$localOffset=fe}else O=this.utc();return O};var m=l.format;l.format=function(c){var M=c||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return m.call(this,M)},l.valueOf=function(){var c=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*c},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var S=l.toDate;l.toDate=function(c){return c==="s"&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():S.call(this)};var w=l.diff;l.diff=function(c,M,x){if(c&&this.$u===c.$u)return w.call(this,c,M,x);var j=this.local(),O=o(c).local();return w.call(j,O,M,x)}}})})(ja);var Do=ja.exports;const Eo=tr(Do);var La={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(sn,function(){var n,r,a=1e3,s=6e4,i=36e5,o=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,d=2628e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,m={years:u,months:d,days:o,hours:i,minutes:s,seconds:a,milliseconds:1,weeks:6048e5},S=function(R){return R instanceof fe},w=function(R,_,v){return new fe(R,v,_.$l)},c=function(R){return r.p(R)+"s"},M=function(R){return R<0},x=function(R){return M(R)?Math.ceil(R):Math.floor(R)},j=function(R){return Math.abs(R)},O=function(R,_){return R?M(R)?{negative:!0,format:""+j(R)+_}:{negative:!1,format:""+R+_}:{negative:!1,format:""}},fe=function(){function R(v,H,V){var W=this;if(this.$d={},this.$l=V,v===void 0&&(this.$ms=0,this.parseFromMilliseconds()),H)return w(v*m[c(H)],this);if(typeof v=="number")return this.$ms=v,this.parseFromMilliseconds(),this;if(typeof v=="object")return Object.keys(v).forEach(function(ye){W.$d[c(ye)]=v[ye]}),this.calMilliseconds(),this;if(typeof v=="string"){var ee=v.match(h);if(ee){var ne=ee.slice(2).map(function(ye){return ye!=null?Number(ye):0});return this.$d.years=ne[0],this.$d.months=ne[1],this.$d.weeks=ne[2],this.$d.days=ne[3],this.$d.hours=ne[4],this.$d.minutes=ne[5],this.$d.seconds=ne[6],this.calMilliseconds(),this}}return this}var _=R.prototype;return _.calMilliseconds=function(){var v=this;this.$ms=Object.keys(this.$d).reduce(function(H,V){return H+(v.$d[V]||0)*m[V]},0)},_.parseFromMilliseconds=function(){var v=this.$ms;this.$d.years=x(v/u),v%=u,this.$d.months=x(v/d),v%=d,this.$d.days=x(v/o),v%=o,this.$d.hours=x(v/i),v%=i,this.$d.minutes=x(v/s),v%=s,this.$d.seconds=x(v/a),v%=a,this.$d.milliseconds=v},_.toISOString=function(){var v=O(this.$d.years,"Y"),H=O(this.$d.months,"M"),V=+this.$d.days||0;this.$d.weeks&&(V+=7*this.$d.weeks);var W=O(V,"D"),ee=O(this.$d.hours,"H"),ne=O(this.$d.minutes,"M"),ye=this.$d.seconds||0;this.$d.milliseconds&&(ye+=this.$d.milliseconds/1e3,ye=Math.round(1e3*ye)/1e3);var vn=O(ye,"S"),$s=v.negative||H.negative||W.negative||ee.negative||ne.negative||vn.negative,Vs=ee.format||ne.format||vn.format?"T":"",kn=($s?"-":"")+"P"+v.format+H.format+W.format+Vs+ee.format+ne.format+vn.format;return kn==="P"||kn==="-P"?"P0D":kn},_.toJSON=function(){return this.toISOString()},_.format=function(v){var H=v||"YYYY-MM-DDTHH:mm:ss",V={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return H.replace(l,function(W,ee){return ee||String(V[W])})},_.as=function(v){return this.$ms/m[c(v)]},_.get=function(v){var H=this.$ms,V=c(v);return V==="milliseconds"?H%=1e3:H=V==="weeks"?x(H/m[V]):this.$d[V],H||0},_.add=function(v,H,V){var W;return W=H?v*m[c(H)]:S(v)?v.$ms:w(v,this).$ms,w(this.$ms+W*(V?-1:1),this)},_.subtract=function(v,H){return this.add(v,H,!0)},_.locale=function(v){var H=this.clone();return H.$l=v,H},_.clone=function(){return w(this.$ms,this)},_.humanize=function(v){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!v)},_.valueOf=function(){return this.asMilliseconds()},_.milliseconds=function(){return this.get("milliseconds")},_.asMilliseconds=function(){return this.as("milliseconds")},_.seconds=function(){return this.get("seconds")},_.asSeconds=function(){return this.as("seconds")},_.minutes=function(){return this.get("minutes")},_.asMinutes=function(){return this.as("minutes")},_.hours=function(){return this.get("hours")},_.asHours=function(){return this.as("hours")},_.days=function(){return this.get("days")},_.asDays=function(){return this.as("days")},_.weeks=function(){return this.get("weeks")},_.asWeeks=function(){return this.as("weeks")},_.months=function(){return this.get("months")},_.asMonths=function(){return this.as("months")},_.years=function(){return this.get("years")},_.asYears=function(){return this.as("years")},R}(),Q=function(R,_,v){return R.add(_.years()*v,"y").add(_.months()*v,"M").add(_.days()*v,"d").add(_.hours()*v,"h").add(_.minutes()*v,"m").add(_.seconds()*v,"s").add(_.milliseconds()*v,"ms")};return function(R,_,v){n=v,r=v().$utils(),v.duration=function(W,ee){var ne=v.locale();return w(W,{$l:ne},ee)},v.isDuration=S;var H=_.prototype.add,V=_.prototype.subtract;_.prototype.add=function(W,ee){return S(W)?Q(this,W,1):H.bind(this)(W,ee)},_.prototype.subtract=function(W,ee){return S(W)?Q(this,W,-1):V.bind(this)(W,ee)}}})})(La);var Po=La.exports;const No=tr(Po);var qa={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(sn,function(){var n="day";return function(r,a,s){var i=function(u){return u.add(4-u.isoWeekday(),n)},o=a.prototype;o.isoWeekYear=function(){return i(this).year()},o.isoWeek=function(u){if(!this.$utils().u(u))return this.add(7*(u-this.isoWeek()),n);var d,h,m,S,w=i(this),c=(d=this.isoWeekYear(),h=this.$u,m=(h?s.utc:s)().year(d).startOf("year"),S=4-m.isoWeekday(),m.isoWeekday()>4&&(S+=7),m.add(S,n));return w.diff(c,"week")+1},o.isoWeekday=function(u){return this.$utils().u(u)?this.day()||7:this.day(this.day()%7?u:u-7)};var l=o.startOf;o.startOf=function(u,d){var h=this.$utils(),m=!!h.u(d)||d;return h.p(u)==="isoweek"?m?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(u,d)}}})})(qa);var Mo=qa.exports;const Oo=tr(Mo);var Ro={exports:{}};(function(e,t){(function(n,r){e.exports=r($t)})(sn,function(n){function r(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var a=r(n),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})})(Ro);const Fo=Ra(),De=e=>wo({locale:"nb-NO",messages:e},Fo),Ya={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"},nr="YYYY-MM-DD",rr="DD.MM.YYYY";$t.extend(Eo);$t.extend(Oo);$t.extend(No);De(Ya);De(Ya);function Ua(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=Ua(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function He(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=Ua(e))&&(r&&(r+=" "),r+=t);return r}const lt=e=>He({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Ao=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};C.forwardRef((e,t)=>{var{className:n,size:r="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,h=Ao(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return J.createElement(a,Object.assign({},h,{ref:t,className:He(n,"navds-body-long",`navds-body-long--${r}`,lt({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var Io=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Te=C.forwardRef((e,t)=>{var{className:n,size:r="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,h=Io(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return J.createElement(a,Object.assign({},h,{ref:t,className:He(n,"navds-body-short",`navds-body-short--${r}`,lt({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var Ho=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};C.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:a,uppercase:s,as:i="p",truncate:o,weight:l="regular",align:u,visuallyHidden:d,textColor:h}=e,m=Ho(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return J.createElement(i,Object.assign({},m,{ref:t,className:He(n,"navds-detail",lt({spacing:a,truncate:o,weight:l,align:u,visuallyHidden:d,textColor:h,uppercase:s}),{"navds-detail--small":r==="small"})}))});var Bo=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};C.forwardRef((e,t)=>{var{className:n,size:r,spacing:a,as:s="p"}=e,i=Bo(e,["className","size","spacing","as"]);return J.createElement(s,Object.assign({},i,{ref:t,className:He("navds-error-message","navds-label",n,lt({spacing:a}),{"navds-label--small":r==="small"})}))});var Co=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ar=C.forwardRef((e,t)=>{var{level:n="1",size:r,className:a,as:s,spacing:i,align:o,visuallyHidden:l,textColor:u}=e,d=Co(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const h=s??`h${n}`;return J.createElement(h,Object.assign({},d,{ref:t,className:He(a,"navds-heading",`navds-heading--${r}`,lt({spacing:i,align:o,visuallyHidden:l,textColor:u}))}))});var jo=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};C.forwardRef((e,t)=>{var{className:n,spacing:r,as:a="p"}=e,s=jo(e,["className","spacing","as"]);return J.createElement(a,Object.assign({},s,{ref:t,className:He(n,"navds-ingress",{"navds-typo--spacing":!!r})}))});var Lo=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const et=C.forwardRef((e,t)=>{var{className:n,size:r="medium",as:a="label",spacing:s,visuallyHidden:i,textColor:o}=e,l=Lo(e,["className","size","as","spacing","visuallyHidden","textColor"]);return J.createElement(a,Object.assign({},l,{ref:t,className:He(n,"navds-label",lt({spacing:s,visuallyHidden:i,textColor:o}),{"navds-label--small":r==="small"})}))});var qo=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ur=C.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",icon:i}=e,o=qo(e,["children","className","variant","size","icon"]);return J.createElement(Te,Object.assign({},o,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:He("navds-tag",r,`navds-tag--${a}`,`navds-tag--${s}`)}),i&&J.createElement("span",{className:"navds-tag__icon--left"},i),n)});function Yo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ga={exports:{}},mt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gr;function Uo(){if(Gr)return mt;Gr=1;var e=J,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(o,l,u){var d,h={},m=null,S=null;u!==void 0&&(m=""+u),l.key!==void 0&&(m=""+l.key),l.ref!==void 0&&(S=l.ref);for(d in l)r.call(l,d)&&!s.hasOwnProperty(d)&&(h[d]=l[d]);if(o&&o.defaultProps)for(d in l=o.defaultProps,l)h[d]===void 0&&(h[d]=l[d]);return{$$typeof:t,type:o,key:m,ref:S,props:h,_owner:a.current}}return mt.Fragment=n,mt.jsx=i,mt.jsxs=i,mt}Ga.exports=Uo();var z=Ga.exports;const Ze={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};De(Ze);De(Ze);var Wa={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,r.call(this,o)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)t.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Wa);var Go=Wa.exports;const se=Yo(Go),Wo="_borderbox_hicl4_1",$o="_error_hicl4_4",Vo="_warning_hicl4_7",zo={borderbox:Wo,error:$o,warning:Vo};se.bind(zo);const Zo="_aksjonspunkt_kn1hn_1",Xo="_erAksjonspunktApent_kn1hn_4",Ko="_erIkkeGodkjentAvBeslutter_kn1hn_8",Jo={aksjonspunkt:Zo,erAksjonspunktApent:Xo,erIkkeGodkjentAvBeslutter:Ko};se.bind(Jo);De(Ze);De(Ze);const Qo="_tooltip_h8akz_1",el="_tooltiptext_h8akz_5",tl="_left_h8akz_22",nl="_top_h8akz_27",rl="_right_h8akz_30",al="_bottom_h8akz_34",sl="_showTooltip_h8akz_1",jn={tooltip:Qo,tooltiptext:el,left:tl,top:nl,right:rl,bottom:al,showTooltip:sl},il=se.bind(jn),ol=({children:e,content:t,alignRight:n=!1,alignLeft:r=!1,alignTop:a=!1,alignBottom:s=!1})=>z.jsxs("div",{className:jn.tooltip,children:[z.jsx("span",{className:il(jn.tooltiptext,{right:n||!r&&!a&&!s,left:r,top:a,bottom:s}),children:t}),e]}),ll=J.forwardRef(({onClick:e=()=>{},onMouseDown:t,tabIndex:n=-1,className:r="",src:a,srcHover:s,alt:i,onKeyDown:o,tooltip:l,alignTooltipLeft:u=!1},d)=>{const[h,m]=C.useState(!1),S=C.useCallback(()=>{m(!0)},[]),w=C.useCallback(()=>{m(!1)},[]),c=C.useCallback(j=>{(j.key==="Enter"||j.key===" ")&&(o&&o(j),j.preventDefault())},[]),M=s&&h?s:a,x=z.jsx("img",{ref:d,className:r,src:M,alt:i,tabIndex:n,onMouseOver:S,onMouseOut:w,onFocus:S,onBlur:w,onKeyDown:c,onMouseDown:t,onClick:e});return l?z.jsx(ol,{content:l,alignLeft:u,children:x}):x});ll.displayName="Image";const ul="_flexColumnNew_1vdv1_1",dl={flexColumnNew:ul},fl=se.bind(dl),Se=({children:e,className:t})=>z.jsx("div",{className:fl("flexColumnNew",t),children:e}),ml="_flexRow_1yf0y_1",hl="_spaceBetween_1yf0y_9",gl="_alignItemsToBaseline_1yf0y_12",cl="_alignItemsToFlexEnd_1yf0y_15",pl="_justifyItemsToFlexEnd_1yf0y_18",yl="_wrap_1yf0y_21",vl={flexRow:ml,spaceBetween:hl,alignItemsToBaseline:gl,alignItemsToFlexEnd:cl,justifyItemsToFlexEnd:pl,wrap:yl},kl=se.bind(vl),Ct=({children:e,spaceBetween:t=!1,alignItemsToBaseline:n=!1,alignItemsToFlexEnd:r=!1,wrap:a=!1,className:s})=>z.jsx("div",{className:kl("flexRow",{spaceBetween:t},{alignItemsToBaseline:n},{alignItemsToFlexEnd:r},{wrap:a},s),children:e}),bl="_flexContainer_1dk1o_1",_l="_fluid_1dk1o_6",Sl="_fullHeight_1dk1o_9",Tl="_flexWrap_1dk1o_17",wl={flexContainer:bl,fluid:_l,fullHeight:Sl,flexWrap:Tl},xl=se.bind(wl),jt=({children:e,wrap:t=!1,fullHeight:n=!1})=>z.jsx("div",{className:xl("flexContainer","fluid",{flexWrap:t,fullHeight:n}),children:e});De(Ze);const Dl="_row_1lxv9_1",El="_harHover_1lxv9_4",Pl="_rowHeader_1lxv9_7",Nl="_grayHeader_1lxv9_12",Ml="_rowContent_1lxv9_15",Ol="_selected_1lxv9_18",Rl="_bold_1lxv9_22",Fl="_dashedBottomBorder_1lxv9_25",Al="_solidBottomBorder_1lxv9_28",Il="_apLeftBorder_1lxv9_31",Hl="_noBottomBorder_1lxv9_34",$a={row:Dl,harHover:El,rowHeader:Pl,grayHeader:Nl,rowContent:Ml,selected:Ol,bold:Rl,dashedBottomBorder:Fl,solidBottomBorder:Al,apLeftBorder:Il,noBottomBorder:Hl},Bl=se.bind($a),Cl=(e,t,n)=>r=>{e&&r.button===0&&e(r,t,n)},Va=e=>e.tagName==="TR"?e:Va(e.parentElement),Wr=(e,t)=>{const n=Va(e.target),r=(t?n.nextSibling:n.previousSibling)||n;r&&(r.focus(),e.preventDefault())},jl=(e,t,n,r)=>a=>{a.key==="ArrowDown"?Wr(a,!0):a.key==="ArrowUp"?Wr(a,!1):t&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(t(a,n,r),a.preventDefault()):e&&t&&a.target.tagName!=="TD"&&a.key==="Shift"&&(t(a),a.preventDefault())},Ll=e=>t=>{e&&t.target.tagName!=="TD"&&t.key==="Shift"&&(e(t),t.preventDefault())},za=({id:e,model:t,isHeader:n=!1,hasGrayHeader:r=!1,onMouseDown:a,onKeyDown:s,children:i,noHover:o=!1,isSelected:l=!1,isBold:u=!1,isDashedBottomBorder:d=!1,isSolidBottomBorder:h=!1,isApLeftBorder:m=!1,className:S,useMultiselect:w=!1,hasNoBottomBorder:c=!1})=>z.jsx("tr",{className:Bl(S,$a.row,{rowHeader:n,grayHeader:r,rowContent:!n&&!o,selected:l,harHover:!o,bold:u,dashedBottomBorder:d,solidBottomBorder:h,noBottomBorder:c,apLeftBorder:m}),onMouseDown:Cl(a,e,t),onKeyDown:jl(w,s,e,t),onKeyUp:w?Ll(s):void 0,tabIndex:0,children:i}),ql="_columnStyle_1f13u_1",Za={columnStyle:ql},Yl=se.bind(Za),tt=({children:e="",className:t,hidden:n=!1,colspanAll:r=!1})=>n?null:z.jsx("td",{className:Yl(Za.columnStyle,t),colSpan:r?100:void 0,children:e}),Ul="_table_2cnpl_1",Gl="_rowHover_2cnpl_25",Wl={table:Ul,rowHover:Gl},$l=se.bind(Wl),Vl="EMPTY",Xa=J.forwardRef(({headerTextCodes:e=[],headerColumnContent:t=[],classNameTable:n="",noHover:r=!1,hasGrayHeader:a=!1,children:s},i)=>z.jsxs("table",{ref:i,className:$l("table",{[n]:n,rowHover:!r}),children:[z.jsx("thead",{children:z.jsxs(za,{isHeader:!0,noHover:r,hasGrayHeader:a,children:[e.map(o=>typeof o=="string"&&o.startsWith(Vl)?z.jsx(tt,{children:" "},o):z.jsx(tt,{children:z.jsx(re,{id:o})},o)),t.map(o=>z.jsx(tt,{children:o},o.key))]})}),z.jsx("tbody",{children:Array.isArray(s)?J.Children.map(s,o=>J.cloneElement(o,{noHover:r})):J.cloneElement(s,{noHover:r})})]}));Xa.displayName="Table";const zl="_hidden_1pb4f_1",Zl="_active_1pb4f_8",Xl="_activeRow_1pb4f_15 _active_1pb4f_8",Kl="_toggleIcon_1pb4f_19",Jl="_colTopPadding_1pb4f_22",Ql={hidden:zl,active:Zl,activeRow:Xl,toggleIcon:Kl,colTopPadding:Jl};se.bind(Ql);De(Ze);const eu="_fourPx_qda5k_1",tu="_eightPx_qda5k_4",nu="_sixteenPx_qda5k_7",ru="_twentyPx_qda5k_10",au="_thirtyTwoPx_qda5k_13",su="_fourtyPx_qda5k_16",iu={fourPx:eu,eightPx:tu,sixteenPx:nu,twentyPx:ru,thirtyTwoPx:au,fourtyPx:su},ou=se.bind(iu),Ka=({fourPx:e=!1,eightPx:t=!1,sixteenPx:n=!1,twentyPx:r=!1,thirtyTwoPx:a=!1,fourtyPx:s=!1})=>z.jsx("div",{className:ou({fourPx:e,eightPx:t,sixteenPx:n,twentyPx:r,thirtyTwoPx:a,fourtyPx:s})});De(Ze);const lu="_divider_1t980_1",uu="_dividerParagraf_1t980_8",du="_leftPanel_1t980_11",fu="_rightPanel_1t980_14",mu={divider:lu,dividerParagraf:uu,leftPanel:du,rightPanel:fu};se.bind(mu);const hu="_editedIcon_ulrjl_1",gu={editedIcon:hu};se.bind(gu);//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Ja;function g(){return Ja.apply(null,arguments)}function cu(e){Ja=e}function he(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function $e(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function F(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function sr(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(F(e,t))return!1;return!0}function te(e){return e===void 0}function Ie(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function xt(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Qa(e,t){var n=[],r,a=e.length;for(r=0;r<a;++r)n.push(t(e[r],r));return n}function je(e,t){for(var n in t)F(t,n)&&(e[n]=t[n]);return F(t,"toString")&&(e.toString=t.toString),F(t,"valueOf")&&(e.valueOf=t.valueOf),e}function Ee(e,t,n,r){return Ss(e,t,n,r,!0).utc()}function pu(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function T(e){return e._pf==null&&(e._pf=pu()),e._pf}var Ln;Array.prototype.some?Ln=Array.prototype.some:Ln=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function ir(e){var t=null,n=!1,r=e._d&&!isNaN(e._d.getTime());if(r&&(t=T(e),n=Ln.call(t.parsedDateParts,function(a){return a!=null}),r=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n),e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r;return e._isValid}function on(e){var t=Ee(NaN);return e!=null?je(T(t),e):T(t).userInvalidated=!0,t}var $r=g.momentProperties=[],Tn=!1;function or(e,t){var n,r,a,s=$r.length;if(te(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),te(t._i)||(e._i=t._i),te(t._f)||(e._f=t._f),te(t._l)||(e._l=t._l),te(t._strict)||(e._strict=t._strict),te(t._tzm)||(e._tzm=t._tzm),te(t._isUTC)||(e._isUTC=t._isUTC),te(t._offset)||(e._offset=t._offset),te(t._pf)||(e._pf=T(t)),te(t._locale)||(e._locale=t._locale),s>0)for(n=0;n<s;n++)r=$r[n],a=t[r],te(a)||(e[r]=a);return e}function Dt(e){or(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Tn===!1&&(Tn=!0,g.updateOffset(this),Tn=!1)}function ge(e){return e instanceof Dt||e!=null&&e._isAMomentObject!=null}function es(e){g.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function ue(e,t){var n=!0;return je(function(){if(g.deprecationHandler!=null&&g.deprecationHandler(null,e),n){var r=[],a,s,i,o=arguments.length;for(s=0;s<o;s++){if(a="",typeof arguments[s]=="object"){a+=`
[`+s+"] ";for(i in arguments[0])F(arguments[0],i)&&(a+=i+": "+arguments[0][i]+", ");a=a.slice(0,-2)}else a=arguments[s];r.push(a)}es(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var Vr={};function ts(e,t){g.deprecationHandler!=null&&g.deprecationHandler(e,t),Vr[e]||(es(t),Vr[e]=!0)}g.suppressDeprecationWarnings=!1;g.deprecationHandler=null;function Pe(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function yu(e){var t,n;for(n in e)F(e,n)&&(t=e[n],Pe(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function qn(e,t){var n=je({},e),r;for(r in t)F(t,r)&&($e(e[r])&&$e(t[r])?(n[r]={},je(n[r],e[r]),je(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)F(e,r)&&!F(t,r)&&$e(e[r])&&(n[r]=je({},n[r]));return n}function lr(e){e!=null&&this.set(e)}var Yn;Object.keys?Yn=Object.keys:Yn=function(e){var t,n=[];for(t in e)F(e,t)&&n.push(t);return n};var vu={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function ku(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return Pe(r)?r.call(t,n):r}function xe(e,t,n){var r=""+Math.abs(e),a=t-r.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+r}var ur=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Ot=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,wn={},nt={};function b(e,t,n,r){var a=r;typeof r=="string"&&(a=function(){return this[r]()}),e&&(nt[e]=a),t&&(nt[t[0]]=function(){return xe(a.apply(this,arguments),t[1],t[2])}),n&&(nt[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function bu(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function _u(e){var t=e.match(ur),n,r;for(n=0,r=t.length;n<r;n++)nt[t[n]]?t[n]=nt[t[n]]:t[n]=bu(t[n]);return function(a){var s="",i;for(i=0;i<r;i++)s+=Pe(t[i])?t[i].call(a,e):t[i];return s}}function At(e,t){return e.isValid()?(t=ns(t,e.localeData()),wn[t]=wn[t]||_u(t),wn[t](e)):e.localeData().invalidDate()}function ns(e,t){var n=5;function r(a){return t.longDateFormat(a)||a}for(Ot.lastIndex=0;n>=0&&Ot.test(e);)e=e.replace(Ot,r),Ot.lastIndex=0,n-=1;return e}var Su={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Tu(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(ur).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var wu="Invalid date";function xu(){return this._invalidDate}var Du="%d",Eu=/\d{1,2}/;function Pu(e){return this._ordinal.replace("%d",e)}var Nu={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Mu(e,t,n,r){var a=this._relativeTime[n];return Pe(a)?a(e,t,n,r):a.replace(/%d/i,e)}function Ou(e,t){var n=this._relativeTime[e>0?"future":"past"];return Pe(n)?n(t):n.replace(/%s/i,t)}var zr={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function de(e){return typeof e=="string"?zr[e]||zr[e.toLowerCase()]:void 0}function dr(e){var t={},n,r;for(r in e)F(e,r)&&(n=de(r),n&&(t[n]=e[r]));return t}var Ru={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Fu(e){var t=[],n;for(n in e)F(e,n)&&t.push({unit:n,priority:Ru[n]});return t.sort(function(r,a){return r.priority-a.priority}),t}var rs=/\d/,ie=/\d\d/,as=/\d{3}/,fr=/\d{4}/,ln=/[+-]?\d{6}/,Y=/\d\d?/,ss=/\d\d\d\d?/,is=/\d\d\d\d\d\d?/,un=/\d{1,3}/,mr=/\d{1,4}/,dn=/[+-]?\d{1,6}/,ut=/\d+/,fn=/[+-]?\d+/,Au=/Z|[+-]\d\d:?\d\d/gi,mn=/Z|[+-]\d\d(?::?\d\d)?/gi,Iu=/[+-]?\d+(\.\d{1,3})?/,Et=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,dt=/^[1-9]\d?/,hr=/^([1-9]\d|\d)/,Lt;Lt={};function p(e,t,n){Lt[e]=Pe(t)?t:function(r,a){return r&&n?n:t}}function Hu(e,t){return F(Lt,e)?Lt[e](t._strict,t._locale):new RegExp(Bu(e))}function Bu(e){return Fe(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,a,s){return n||r||a||s}))}function Fe(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function oe(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function D(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=oe(t)),n}var Un={};function B(e,t){var n,r=t,a;for(typeof e=="string"&&(e=[e]),Ie(t)&&(r=function(s,i){i[t]=D(s)}),a=e.length,n=0;n<a;n++)Un[e[n]]=r}function Pt(e,t){B(e,function(n,r,a,s){a._w=a._w||{},t(n,a._w,a,s)})}function Cu(e,t,n){t!=null&&F(Un,e)&&Un[e](t,n._a,n,e)}function hn(e){return e%4===0&&e%100!==0||e%400===0}var X=0,Oe=1,_e=2,$=3,me=4,Re=5,We=6,ju=7,Lu=8;b("Y",0,0,function(){var e=this.year();return e<=9999?xe(e,4):"+"+e});b(0,["YY",2],0,function(){return this.year()%100});b(0,["YYYY",4],0,"year");b(0,["YYYYY",5],0,"year");b(0,["YYYYYY",6,!0],0,"year");p("Y",fn);p("YY",Y,ie);p("YYYY",mr,fr);p("YYYYY",dn,ln);p("YYYYYY",dn,ln);B(["YYYYY","YYYYYY"],X);B("YYYY",function(e,t){t[X]=e.length===2?g.parseTwoDigitYear(e):D(e)});B("YY",function(e,t){t[X]=g.parseTwoDigitYear(e)});B("Y",function(e,t){t[X]=parseInt(e,10)});function vt(e){return hn(e)?366:365}g.parseTwoDigitYear=function(e){return D(e)+(D(e)>68?1900:2e3)};var os=ft("FullYear",!0);function qu(){return hn(this.year())}function ft(e,t){return function(n){return n!=null?(ls(this,e,n),g.updateOffset(this,t),this):kt(this,e)}}function kt(e,t){if(!e.isValid())return NaN;var n=e._d,r=e._isUTC;switch(t){case"Milliseconds":return r?n.getUTCMilliseconds():n.getMilliseconds();case"Seconds":return r?n.getUTCSeconds():n.getSeconds();case"Minutes":return r?n.getUTCMinutes():n.getMinutes();case"Hours":return r?n.getUTCHours():n.getHours();case"Date":return r?n.getUTCDate():n.getDate();case"Day":return r?n.getUTCDay():n.getDay();case"Month":return r?n.getUTCMonth():n.getMonth();case"FullYear":return r?n.getUTCFullYear():n.getFullYear();default:return NaN}}function ls(e,t,n){var r,a,s,i,o;if(!(!e.isValid()||isNaN(n))){switch(r=e._d,a=e._isUTC,t){case"Milliseconds":return void(a?r.setUTCMilliseconds(n):r.setMilliseconds(n));case"Seconds":return void(a?r.setUTCSeconds(n):r.setSeconds(n));case"Minutes":return void(a?r.setUTCMinutes(n):r.setMinutes(n));case"Hours":return void(a?r.setUTCHours(n):r.setHours(n));case"Date":return void(a?r.setUTCDate(n):r.setDate(n));case"FullYear":break;default:return}s=n,i=e.month(),o=e.date(),o=o===29&&i===1&&!hn(s)?28:o,a?r.setUTCFullYear(s,i,o):r.setFullYear(s,i,o)}}function Yu(e){return e=de(e),Pe(this[e])?this[e]():this}function Uu(e,t){if(typeof e=="object"){e=dr(e);var n=Fu(e),r,a=n.length;for(r=0;r<a;r++)this[n[r].unit](e[n[r].unit])}else if(e=de(e),Pe(this[e]))return this[e](t);return this}function Gu(e,t){return(e%t+t)%t}var G;Array.prototype.indexOf?G=Array.prototype.indexOf:G=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function gr(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=Gu(t,12);return e+=(t-n)/12,n===1?hn(e)?29:28:31-n%7%2}b("M",["MM",2],"Mo",function(){return this.month()+1});b("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});b("MMMM",0,0,function(e){return this.localeData().months(this,e)});p("M",Y,dt);p("MM",Y,ie);p("MMM",function(e,t){return t.monthsShortRegex(e)});p("MMMM",function(e,t){return t.monthsRegex(e)});B(["M","MM"],function(e,t){t[Oe]=D(e)-1});B(["MMM","MMMM"],function(e,t,n,r){var a=n._locale.monthsParse(e,r,n._strict);a!=null?t[Oe]=a:T(n).invalidMonth=e});var Wu="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),us="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ds=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,$u=Et,Vu=Et;function zu(e,t){return e?he(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||ds).test(t)?"format":"standalone"][e.month()]:he(this._months)?this._months:this._months.standalone}function Zu(e,t){return e?he(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[ds.test(t)?"format":"standalone"][e.month()]:he(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Xu(e,t,n){var r,a,s,i=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)s=Ee([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(s,"").toLocaleLowerCase();return n?t==="MMM"?(a=G.call(this._shortMonthsParse,i),a!==-1?a:null):(a=G.call(this._longMonthsParse,i),a!==-1?a:null):t==="MMM"?(a=G.call(this._shortMonthsParse,i),a!==-1?a:(a=G.call(this._longMonthsParse,i),a!==-1?a:null)):(a=G.call(this._longMonthsParse,i),a!==-1?a:(a=G.call(this._shortMonthsParse,i),a!==-1?a:null))}function Ku(e,t,n){var r,a,s;if(this._monthsParseExact)return Xu.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(a=Ee([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(s="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function fs(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=D(t);else if(t=e.localeData().monthsParse(t),!Ie(t))return e}var n=t,r=e.date();return r=r<29?r:Math.min(r,gr(e.year(),n)),e._isUTC?e._d.setUTCMonth(n,r):e._d.setMonth(n,r),e}function ms(e){return e!=null?(fs(this,e),g.updateOffset(this,!0),this):kt(this,"Month")}function Ju(){return gr(this.year(),this.month())}function Qu(e){return this._monthsParseExact?(F(this,"_monthsRegex")||hs.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(F(this,"_monthsShortRegex")||(this._monthsShortRegex=$u),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function ed(e){return this._monthsParseExact?(F(this,"_monthsRegex")||hs.call(this),e?this._monthsStrictRegex:this._monthsRegex):(F(this,"_monthsRegex")||(this._monthsRegex=Vu),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function hs(){function e(l,u){return u.length-l.length}var t=[],n=[],r=[],a,s,i,o;for(a=0;a<12;a++)s=Ee([2e3,a]),i=Fe(this.monthsShort(s,"")),o=Fe(this.months(s,"")),t.push(i),n.push(o),r.push(o),r.push(i);t.sort(e),n.sort(e),r.sort(e),this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function td(e,t,n,r,a,s,i){var o;return e<100&&e>=0?(o=new Date(e+400,t,n,r,a,s,i),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,r,a,s,i),o}function bt(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function qt(e,t,n){var r=7+t-n,a=(7+bt(e,0,r).getUTCDay()-t)%7;return-a+r-1}function gs(e,t,n,r,a){var s=(7+n-r)%7,i=qt(e,r,a),o=1+7*(t-1)+s+i,l,u;return o<=0?(l=e-1,u=vt(l)+o):o>vt(e)?(l=e+1,u=o-vt(e)):(l=e,u=o),{year:l,dayOfYear:u}}function _t(e,t,n){var r=qt(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1,s,i;return a<1?(i=e.year()-1,s=a+Ae(i,t,n)):a>Ae(e.year(),t,n)?(s=a-Ae(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ae(e,t,n){var r=qt(e,t,n),a=qt(e+1,t,n);return(vt(e)-r+a)/7}b("w",["ww",2],"wo","week");b("W",["WW",2],"Wo","isoWeek");p("w",Y,dt);p("ww",Y,ie);p("W",Y,dt);p("WW",Y,ie);Pt(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=D(e)});function nd(e){return _t(e,this._week.dow,this._week.doy).week}var rd={dow:0,doy:6};function ad(){return this._week.dow}function sd(){return this._week.doy}function id(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function od(e){var t=_t(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}b("d",0,"do","day");b("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});b("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});b("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});b("e",0,0,"weekday");b("E",0,0,"isoWeekday");p("d",Y);p("e",Y);p("E",Y);p("dd",function(e,t){return t.weekdaysMinRegex(e)});p("ddd",function(e,t){return t.weekdaysShortRegex(e)});p("dddd",function(e,t){return t.weekdaysRegex(e)});Pt(["dd","ddd","dddd"],function(e,t,n,r){var a=n._locale.weekdaysParse(e,r,n._strict);a!=null?t.d=a:T(n).invalidWeekday=e});Pt(["d","e","E"],function(e,t,n,r){t[r]=D(e)});function ld(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function ud(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function cr(e,t){return e.slice(t,7).concat(e.slice(0,t))}var dd="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),cs="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),fd="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),md=Et,hd=Et,gd=Et;function cd(e,t){var n=he(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?cr(n,this._week.dow):e?n[e.day()]:n}function pd(e){return e===!0?cr(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function yd(e){return e===!0?cr(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function vd(e,t,n){var r,a,s,i=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)s=Ee([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(s,"").toLocaleLowerCase();return n?t==="dddd"?(a=G.call(this._weekdaysParse,i),a!==-1?a:null):t==="ddd"?(a=G.call(this._shortWeekdaysParse,i),a!==-1?a:null):(a=G.call(this._minWeekdaysParse,i),a!==-1?a:null):t==="dddd"?(a=G.call(this._weekdaysParse,i),a!==-1||(a=G.call(this._shortWeekdaysParse,i),a!==-1)?a:(a=G.call(this._minWeekdaysParse,i),a!==-1?a:null)):t==="ddd"?(a=G.call(this._shortWeekdaysParse,i),a!==-1||(a=G.call(this._weekdaysParse,i),a!==-1)?a:(a=G.call(this._minWeekdaysParse,i),a!==-1?a:null)):(a=G.call(this._minWeekdaysParse,i),a!==-1||(a=G.call(this._weekdaysParse,i),a!==-1)?a:(a=G.call(this._shortWeekdaysParse,i),a!==-1?a:null))}function kd(e,t,n){var r,a,s;if(this._weekdaysParseExact)return vd.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(a=Ee([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(s="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function bd(e){if(!this.isValid())return e!=null?this:NaN;var t=kt(this,"Day");return e!=null?(e=ld(e,this.localeData()),this.add(e-t,"d")):t}function _d(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function Sd(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=ud(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function Td(e){return this._weekdaysParseExact?(F(this,"_weekdaysRegex")||pr.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(F(this,"_weekdaysRegex")||(this._weekdaysRegex=md),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function wd(e){return this._weekdaysParseExact?(F(this,"_weekdaysRegex")||pr.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(F(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=hd),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function xd(e){return this._weekdaysParseExact?(F(this,"_weekdaysRegex")||pr.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(F(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=gd),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function pr(){function e(d,h){return h.length-d.length}var t=[],n=[],r=[],a=[],s,i,o,l,u;for(s=0;s<7;s++)i=Ee([2e3,1]).day(s),o=Fe(this.weekdaysMin(i,"")),l=Fe(this.weekdaysShort(i,"")),u=Fe(this.weekdays(i,"")),t.push(o),n.push(l),r.push(u),a.push(o),a.push(l),a.push(u);t.sort(e),n.sort(e),r.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function yr(){return this.hours()%12||12}function Dd(){return this.hours()||24}b("H",["HH",2],0,"hour");b("h",["hh",2],0,yr);b("k",["kk",2],0,Dd);b("hmm",0,0,function(){return""+yr.apply(this)+xe(this.minutes(),2)});b("hmmss",0,0,function(){return""+yr.apply(this)+xe(this.minutes(),2)+xe(this.seconds(),2)});b("Hmm",0,0,function(){return""+this.hours()+xe(this.minutes(),2)});b("Hmmss",0,0,function(){return""+this.hours()+xe(this.minutes(),2)+xe(this.seconds(),2)});function ps(e,t){b(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}ps("a",!0);ps("A",!1);function ys(e,t){return t._meridiemParse}p("a",ys);p("A",ys);p("H",Y,hr);p("h",Y,dt);p("k",Y,dt);p("HH",Y,ie);p("hh",Y,ie);p("kk",Y,ie);p("hmm",ss);p("hmmss",is);p("Hmm",ss);p("Hmmss",is);B(["H","HH"],$);B(["k","kk"],function(e,t,n){var r=D(e);t[$]=r===24?0:r});B(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});B(["h","hh"],function(e,t,n){t[$]=D(e),T(n).bigHour=!0});B("hmm",function(e,t,n){var r=e.length-2;t[$]=D(e.substr(0,r)),t[me]=D(e.substr(r)),T(n).bigHour=!0});B("hmmss",function(e,t,n){var r=e.length-4,a=e.length-2;t[$]=D(e.substr(0,r)),t[me]=D(e.substr(r,2)),t[Re]=D(e.substr(a)),T(n).bigHour=!0});B("Hmm",function(e,t,n){var r=e.length-2;t[$]=D(e.substr(0,r)),t[me]=D(e.substr(r))});B("Hmmss",function(e,t,n){var r=e.length-4,a=e.length-2;t[$]=D(e.substr(0,r)),t[me]=D(e.substr(r,2)),t[Re]=D(e.substr(a))});function Ed(e){return(e+"").toLowerCase().charAt(0)==="p"}var Pd=/[ap]\.?m?\.?/i,Nd=ft("Hours",!0);function Md(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var vs={calendar:vu,longDateFormat:Su,invalidDate:wu,ordinal:Du,dayOfMonthOrdinalParse:Eu,relativeTime:Nu,months:Wu,monthsShort:us,week:rd,weekdays:dd,weekdaysMin:fd,weekdaysShort:cs,meridiemParse:Pd},U={},ht={},St;function Od(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function Zr(e){return e&&e.toLowerCase().replace("_","-")}function Rd(e){for(var t=0,n,r,a,s;t<e.length;){for(s=Zr(e[t]).split("-"),n=s.length,r=Zr(e[t+1]),r=r?r.split("-"):null;n>0;){if(a=gn(s.slice(0,n).join("-")),a)return a;if(r&&r.length>=n&&Od(s,r)>=n-1)break;n--}t++}return St}function Fd(e){return!!(e&&e.match("^[^/\\\\]*$"))}function gn(e){var t=null,n;if(U[e]===void 0&&typeof module<"u"&&module&&module.exports&&Fd(e))try{t=St._abbr,n=require,n("./locale/"+e),qe(t)}catch{U[e]=null}return U[e]}function qe(e,t){var n;return e&&(te(t)?n=Be(e):n=vr(e,t),n?St=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),St._abbr}function vr(e,t){if(t!==null){var n,r=vs;if(t.abbr=e,U[e]!=null)ts("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=U[e]._config;else if(t.parentLocale!=null)if(U[t.parentLocale]!=null)r=U[t.parentLocale]._config;else if(n=gn(t.parentLocale),n!=null)r=n._config;else return ht[t.parentLocale]||(ht[t.parentLocale]=[]),ht[t.parentLocale].push({name:e,config:t}),null;return U[e]=new lr(qn(r,t)),ht[e]&&ht[e].forEach(function(a){vr(a.name,a.config)}),qe(e),U[e]}else return delete U[e],null}function Ad(e,t){if(t!=null){var n,r,a=vs;U[e]!=null&&U[e].parentLocale!=null?U[e].set(qn(U[e]._config,t)):(r=gn(e),r!=null&&(a=r._config),t=qn(a,t),r==null&&(t.abbr=e),n=new lr(t),n.parentLocale=U[e],U[e]=n),qe(e)}else U[e]!=null&&(U[e].parentLocale!=null?(U[e]=U[e].parentLocale,e===qe()&&qe(e)):U[e]!=null&&delete U[e]);return U[e]}function Be(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return St;if(!he(e)){if(t=gn(e),t)return t;e=[e]}return Rd(e)}function Id(){return Yn(U)}function kr(e){var t,n=e._a;return n&&T(e).overflow===-2&&(t=n[Oe]<0||n[Oe]>11?Oe:n[_e]<1||n[_e]>gr(n[X],n[Oe])?_e:n[$]<0||n[$]>24||n[$]===24&&(n[me]!==0||n[Re]!==0||n[We]!==0)?$:n[me]<0||n[me]>59?me:n[Re]<0||n[Re]>59?Re:n[We]<0||n[We]>999?We:-1,T(e)._overflowDayOfYear&&(t<X||t>_e)&&(t=_e),T(e)._overflowWeeks&&t===-1&&(t=ju),T(e)._overflowWeekday&&t===-1&&(t=Lu),T(e).overflow=t),e}var Hd=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Bd=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Cd=/Z|[+-]\d\d(?::?\d\d)?/,Rt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],xn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],jd=/^\/?Date\((-?\d+)/i,Ld=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,qd={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function ks(e){var t,n,r=e._i,a=Hd.exec(r)||Bd.exec(r),s,i,o,l,u=Rt.length,d=xn.length;if(a){for(T(e).iso=!0,t=0,n=u;t<n;t++)if(Rt[t][1].exec(a[1])){i=Rt[t][0],s=Rt[t][2]!==!1;break}if(i==null){e._isValid=!1;return}if(a[3]){for(t=0,n=d;t<n;t++)if(xn[t][1].exec(a[3])){o=(a[2]||" ")+xn[t][0];break}if(o==null){e._isValid=!1;return}}if(!s&&o!=null){e._isValid=!1;return}if(a[4])if(Cd.exec(a[4]))l="Z";else{e._isValid=!1;return}e._f=i+(o||"")+(l||""),_r(e)}else e._isValid=!1}function Yd(e,t,n,r,a,s){var i=[Ud(e),us.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(a,10)];return s&&i.push(parseInt(s,10)),i}function Ud(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Gd(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Wd(e,t,n){if(e){var r=cs.indexOf(e),a=new Date(t[0],t[1],t[2]).getDay();if(r!==a)return T(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function $d(e,t,n){if(e)return qd[e];if(t)return 0;var r=parseInt(n,10),a=r%100,s=(r-a)/100;return s*60+a}function bs(e){var t=Ld.exec(Gd(e._i)),n;if(t){if(n=Yd(t[4],t[3],t[2],t[5],t[6],t[7]),!Wd(t[1],n,e))return;e._a=n,e._tzm=$d(t[8],t[9],t[10]),e._d=bt.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),T(e).rfc2822=!0}else e._isValid=!1}function Vd(e){var t=jd.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(ks(e),e._isValid===!1)delete e._isValid;else return;if(bs(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:g.createFromInputFallback(e)}g.createFromInputFallback=ue("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Je(e,t,n){return e??t??n}function zd(e){var t=new Date(g.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function br(e){var t,n,r=[],a,s,i;if(!e._d){for(a=zd(e),e._w&&e._a[_e]==null&&e._a[Oe]==null&&Zd(e),e._dayOfYear!=null&&(i=Je(e._a[X],a[X]),(e._dayOfYear>vt(i)||e._dayOfYear===0)&&(T(e)._overflowDayOfYear=!0),n=bt(i,0,e._dayOfYear),e._a[Oe]=n.getUTCMonth(),e._a[_e]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=a[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[$]===24&&e._a[me]===0&&e._a[Re]===0&&e._a[We]===0&&(e._nextDay=!0,e._a[$]=0),e._d=(e._useUTC?bt:td).apply(null,r),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[$]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(T(e).weekdayMismatch=!0)}}function Zd(e){var t,n,r,a,s,i,o,l,u;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(s=1,i=4,n=Je(t.GG,e._a[X],_t(q(),1,4).year),r=Je(t.W,1),a=Je(t.E,1),(a<1||a>7)&&(l=!0)):(s=e._locale._week.dow,i=e._locale._week.doy,u=_t(q(),s,i),n=Je(t.gg,e._a[X],u.year),r=Je(t.w,u.week),t.d!=null?(a=t.d,(a<0||a>6)&&(l=!0)):t.e!=null?(a=t.e+s,(t.e<0||t.e>6)&&(l=!0)):a=s),r<1||r>Ae(n,s,i)?T(e)._overflowWeeks=!0:l!=null?T(e)._overflowWeekday=!0:(o=gs(n,r,a,s,i),e._a[X]=o.year,e._dayOfYear=o.dayOfYear)}g.ISO_8601=function(){};g.RFC_2822=function(){};function _r(e){if(e._f===g.ISO_8601){ks(e);return}if(e._f===g.RFC_2822){bs(e);return}e._a=[],T(e).empty=!0;var t=""+e._i,n,r,a,s,i,o=t.length,l=0,u,d;for(a=ns(e._f,e._locale).match(ur)||[],d=a.length,n=0;n<d;n++)s=a[n],r=(t.match(Hu(s,e))||[])[0],r&&(i=t.substr(0,t.indexOf(r)),i.length>0&&T(e).unusedInput.push(i),t=t.slice(t.indexOf(r)+r.length),l+=r.length),nt[s]?(r?T(e).empty=!1:T(e).unusedTokens.push(s),Cu(s,r,e)):e._strict&&!r&&T(e).unusedTokens.push(s);T(e).charsLeftOver=o-l,t.length>0&&T(e).unusedInput.push(t),e._a[$]<=12&&T(e).bigHour===!0&&e._a[$]>0&&(T(e).bigHour=void 0),T(e).parsedDateParts=e._a.slice(0),T(e).meridiem=e._meridiem,e._a[$]=Xd(e._locale,e._a[$],e._meridiem),u=T(e).era,u!==null&&(e._a[X]=e._locale.erasConvertYear(u,e._a[X])),br(e),kr(e)}function Xd(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function Kd(e){var t,n,r,a,s,i,o=!1,l=e._f.length;if(l===0){T(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<l;a++)s=0,i=!1,t=or({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[a],_r(t),ir(t)&&(i=!0),s+=T(t).charsLeftOver,s+=T(t).unusedTokens.length*10,T(t).score=s,o?s<r&&(r=s,n=t):(r==null||s<r||i)&&(r=s,n=t,i&&(o=!0));je(e,n||t)}function Jd(e){if(!e._d){var t=dr(e._i),n=t.day===void 0?t.date:t.day;e._a=Qa([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),br(e)}}function Qd(e){var t=new Dt(kr(_s(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function _s(e){var t=e._i,n=e._f;return e._locale=e._locale||Be(e._l),t===null||n===void 0&&t===""?on({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),ge(t)?new Dt(kr(t)):(xt(t)?e._d=t:he(n)?Kd(e):n?_r(e):ef(e),ir(e)||(e._d=null),e))}function ef(e){var t=e._i;te(t)?e._d=new Date(g.now()):xt(t)?e._d=new Date(t.valueOf()):typeof t=="string"?Vd(e):he(t)?(e._a=Qa(t.slice(0),function(n){return parseInt(n,10)}),br(e)):$e(t)?Jd(e):Ie(t)?e._d=new Date(t):g.createFromInputFallback(e)}function Ss(e,t,n,r,a){var s={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),($e(e)&&sr(e)||he(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=n,s._i=e,s._f=t,s._strict=r,Qd(s)}function q(e,t,n,r){return Ss(e,t,n,r,!1)}var tf=ue("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=q.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:on()}),nf=ue("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=q.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:on()});function Ts(e,t){var n,r;if(t.length===1&&he(t[0])&&(t=t[0]),!t.length)return q();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function rf(){var e=[].slice.call(arguments,0);return Ts("isBefore",e)}function af(){var e=[].slice.call(arguments,0);return Ts("isAfter",e)}var sf=function(){return Date.now?Date.now():+new Date},gt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function of(e){var t,n=!1,r,a=gt.length;for(t in e)if(F(e,t)&&!(G.call(gt,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<a;++r)if(e[gt[r]]){if(n)return!1;parseFloat(e[gt[r]])!==D(e[gt[r]])&&(n=!0)}return!0}function lf(){return this._isValid}function uf(){return pe(NaN)}function cn(e){var t=dr(e),n=t.year||0,r=t.quarter||0,a=t.month||0,s=t.week||t.isoWeek||0,i=t.day||0,o=t.hour||0,l=t.minute||0,u=t.second||0,d=t.millisecond||0;this._isValid=of(t),this._milliseconds=+d+u*1e3+l*6e4+o*1e3*60*60,this._days=+i+s*7,this._months=+a+r*3+n*12,this._data={},this._locale=Be(),this._bubble()}function It(e){return e instanceof cn}function Gn(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function df(e,t,n){var r=Math.min(e.length,t.length),a=Math.abs(e.length-t.length),s=0,i;for(i=0;i<r;i++)D(e[i])!==D(t[i])&&s++;return s+a}function ws(e,t){b(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+xe(~~(n/60),2)+t+xe(~~n%60,2)})}ws("Z",":");ws("ZZ","");p("Z",mn);p("ZZ",mn);B(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Sr(mn,e)});var ff=/([\+\-]|\d\d)/gi;function Sr(e,t){var n=(t||"").match(e),r,a,s;return n===null?null:(r=n[n.length-1]||[],a=(r+"").match(ff)||["-",0,0],s=+(a[1]*60)+D(a[2]),s===0?0:a[0]==="+"?s:-s)}function Tr(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(ge(e)||xt(e)?e.valueOf():q(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),g.updateOffset(n,!1),n):q(e).local()}function Wn(e){return-Math.round(e._d.getTimezoneOffset())}g.updateOffset=function(){};function mf(e,t,n){var r=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Sr(mn,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(a=Wn(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),r!==e&&(!t||this._changeInProgress?Es(this,pe(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,g.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:Wn(this)}function hf(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function gf(e){return this.utcOffset(0,e)}function cf(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Wn(this),"m")),this}function pf(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Sr(Au,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function yf(e){return this.isValid()?(e=e?q(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function vf(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function kf(){if(!te(this._isDSTShifted))return this._isDSTShifted;var e={},t;return or(e,this),e=_s(e),e._a?(t=e._isUTC?Ee(e._a):q(e._a),this._isDSTShifted=this.isValid()&&df(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function bf(){return this.isValid()?!this._isUTC:!1}function _f(){return this.isValid()?this._isUTC:!1}function xs(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Sf=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Tf=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function pe(e,t){var n=e,r=null,a,s,i;return It(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:Ie(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=Sf.exec(e))?(a=r[1]==="-"?-1:1,n={y:0,d:D(r[_e])*a,h:D(r[$])*a,m:D(r[me])*a,s:D(r[Re])*a,ms:D(Gn(r[We]*1e3))*a}):(r=Tf.exec(e))?(a=r[1]==="-"?-1:1,n={y:Ge(r[2],a),M:Ge(r[3],a),w:Ge(r[4],a),d:Ge(r[5],a),h:Ge(r[6],a),m:Ge(r[7],a),s:Ge(r[8],a)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(i=wf(q(n.from),q(n.to)),n={},n.ms=i.milliseconds,n.M=i.months),s=new cn(n),It(e)&&F(e,"_locale")&&(s._locale=e._locale),It(e)&&F(e,"_isValid")&&(s._isValid=e._isValid),s}pe.fn=cn.prototype;pe.invalid=uf;function Ge(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Xr(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function wf(e,t){var n;return e.isValid()&&t.isValid()?(t=Tr(t,e),e.isBefore(t)?n=Xr(e,t):(n=Xr(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Ds(e,t){return function(n,r){var a,s;return r!==null&&!isNaN(+r)&&(ts(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=r,r=s),a=pe(n,r),Es(this,a,e),this}}function Es(e,t,n,r){var a=t._milliseconds,s=Gn(t._days),i=Gn(t._months);e.isValid()&&(r=r??!0,i&&fs(e,kt(e,"Month")+i*n),s&&ls(e,"Date",kt(e,"Date")+s*n),a&&e._d.setTime(e._d.valueOf()+a*n),r&&g.updateOffset(e,s||i))}var xf=Ds(1,"add"),Df=Ds(-1,"subtract");function Ps(e){return typeof e=="string"||e instanceof String}function Ef(e){return ge(e)||xt(e)||Ps(e)||Ie(e)||Nf(e)||Pf(e)||e===null||e===void 0}function Pf(e){var t=$e(e)&&!sr(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,s,i=r.length;for(a=0;a<i;a+=1)s=r[a],n=n||F(e,s);return t&&n}function Nf(e){var t=he(e),n=!1;return t&&(n=e.filter(function(r){return!Ie(r)&&Ps(e)}).length===0),t&&n}function Mf(e){var t=$e(e)&&!sr(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,s;for(a=0;a<r.length;a+=1)s=r[a],n=n||F(e,s);return t&&n}function Of(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Rf(e,t){arguments.length===1&&(arguments[0]?Ef(arguments[0])?(e=arguments[0],t=void 0):Mf(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||q(),r=Tr(n,this).startOf("day"),a=g.calendarFormat(this,r)||"sameElse",s=t&&(Pe(t[a])?t[a].call(this,n):t[a]);return this.format(s||this.localeData().calendar(a,this,q(n)))}function Ff(){return new Dt(this)}function Af(e,t){var n=ge(e)?e:q(e);return this.isValid()&&n.isValid()?(t=de(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function If(e,t){var n=ge(e)?e:q(e);return this.isValid()&&n.isValid()?(t=de(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function Hf(e,t,n,r){var a=ge(e)?e:q(e),s=ge(t)?t:q(t);return this.isValid()&&a.isValid()&&s.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(a,n):!this.isBefore(a,n))&&(r[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function Bf(e,t){var n=ge(e)?e:q(e),r;return this.isValid()&&n.isValid()?(t=de(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function Cf(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function jf(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Lf(e,t,n){var r,a,s;if(!this.isValid())return NaN;if(r=Tr(e,this),!r.isValid())return NaN;switch(a=(r.utcOffset()-this.utcOffset())*6e4,t=de(t),t){case"year":s=Ht(this,r)/12;break;case"month":s=Ht(this,r);break;case"quarter":s=Ht(this,r)/3;break;case"second":s=(this-r)/1e3;break;case"minute":s=(this-r)/6e4;break;case"hour":s=(this-r)/36e5;break;case"day":s=(this-r-a)/864e5;break;case"week":s=(this-r-a)/6048e5;break;default:s=this-r}return n?s:oe(s)}function Ht(e,t){if(e.date()<t.date())return-Ht(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),a,s;return t-r<0?(a=e.clone().add(n-1,"months"),s=(t-r)/(r-a)):(a=e.clone().add(n+1,"months"),s=(t-r)/(a-r)),-(n+s)||0}g.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";g.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function qf(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Yf(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?At(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Pe(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",At(n,"Z")):At(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Uf(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,a,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",s=t+'[")]',this.format(n+r+a+s)}function Gf(e){e||(e=this.isUtc()?g.defaultFormatUtc:g.defaultFormat);var t=At(this,e);return this.localeData().postformat(t)}function Wf(e,t){return this.isValid()&&(ge(e)&&e.isValid()||q(e).isValid())?pe({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function $f(e){return this.from(q(),e)}function Vf(e,t){return this.isValid()&&(ge(e)&&e.isValid()||q(e).isValid())?pe({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function zf(e){return this.to(q(),e)}function Ns(e){var t;return e===void 0?this._locale._abbr:(t=Be(e),t!=null&&(this._locale=t),this)}var Ms=ue("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Os(){return this._locale}var Yt=1e3,rt=60*Yt,Ut=60*rt,Rs=(365*400+97)*24*Ut;function at(e,t){return(e%t+t)%t}function Fs(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-Rs:new Date(e,t,n).valueOf()}function As(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-Rs:Date.UTC(e,t,n)}function Zf(e){var t,n;if(e=de(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?As:Fs,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=at(t+(this._isUTC?0:this.utcOffset()*rt),Ut);break;case"minute":t=this._d.valueOf(),t-=at(t,rt);break;case"second":t=this._d.valueOf(),t-=at(t,Yt);break}return this._d.setTime(t),g.updateOffset(this,!0),this}function Xf(e){var t,n;if(e=de(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?As:Fs,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Ut-at(t+(this._isUTC?0:this.utcOffset()*rt),Ut)-1;break;case"minute":t=this._d.valueOf(),t+=rt-at(t,rt)-1;break;case"second":t=this._d.valueOf(),t+=Yt-at(t,Yt)-1;break}return this._d.setTime(t),g.updateOffset(this,!0),this}function Kf(){return this._d.valueOf()-(this._offset||0)*6e4}function Jf(){return Math.floor(this.valueOf()/1e3)}function Qf(){return new Date(this.valueOf())}function em(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function tm(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function nm(){return this.isValid()?this.toISOString():null}function rm(){return ir(this)}function am(){return je({},T(this))}function sm(){return T(this).overflow}function im(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}b("N",0,0,"eraAbbr");b("NN",0,0,"eraAbbr");b("NNN",0,0,"eraAbbr");b("NNNN",0,0,"eraName");b("NNNNN",0,0,"eraNarrow");b("y",["y",1],"yo","eraYear");b("y",["yy",2],0,"eraYear");b("y",["yyy",3],0,"eraYear");b("y",["yyyy",4],0,"eraYear");p("N",wr);p("NN",wr);p("NNN",wr);p("NNNN",ym);p("NNNNN",vm);B(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var a=n._locale.erasParse(e,r,n._strict);a?T(n).era=a:T(n).invalidEra=e});p("y",ut);p("yy",ut);p("yyy",ut);p("yyyy",ut);p("yo",km);B(["y","yy","yyy","yyyy"],X);B(["yo"],function(e,t,n,r){var a;n._locale._eraYearOrdinalRegex&&(a=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[X]=n._locale.eraYearOrdinalParse(e,a):t[X]=parseInt(e,10)});function om(e,t){var n,r,a,s=this._eras||Be("en")._eras;for(n=0,r=s.length;n<r;++n){switch(typeof s[n].since){case"string":a=g(s[n].since).startOf("day"),s[n].since=a.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":a=g(s[n].until).startOf("day").valueOf(),s[n].until=a.valueOf();break}}return s}function lm(e,t,n){var r,a,s=this.eras(),i,o,l;for(e=e.toUpperCase(),r=0,a=s.length;r<a;++r)if(i=s[r].name.toUpperCase(),o=s[r].abbr.toUpperCase(),l=s[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(o===e)return s[r];break;case"NNNN":if(i===e)return s[r];break;case"NNNNN":if(l===e)return s[r];break}else if([i,o,l].indexOf(e)>=0)return s[r]}function um(e,t){var n=e.since<=e.until?1:-1;return t===void 0?g(e.since).year():g(e.since).year()+(t-e.offset)*n}function dm(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function fm(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function mm(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function hm(){var e,t,n,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(n=a[e].since<=a[e].until?1:-1,r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return(this.year()-g(a[e].since).year())*n+a[e].offset;return this.year()}function gm(e){return F(this,"_erasNameRegex")||xr.call(this),e?this._erasNameRegex:this._erasRegex}function cm(e){return F(this,"_erasAbbrRegex")||xr.call(this),e?this._erasAbbrRegex:this._erasRegex}function pm(e){return F(this,"_erasNarrowRegex")||xr.call(this),e?this._erasNarrowRegex:this._erasRegex}function wr(e,t){return t.erasAbbrRegex(e)}function ym(e,t){return t.erasNameRegex(e)}function vm(e,t){return t.erasNarrowRegex(e)}function km(e,t){return t._eraYearOrdinalRegex||ut}function xr(){var e=[],t=[],n=[],r=[],a,s,i,o,l,u=this.eras();for(a=0,s=u.length;a<s;++a)i=Fe(u[a].name),o=Fe(u[a].abbr),l=Fe(u[a].narrow),t.push(i),e.push(o),n.push(l),r.push(i),r.push(o),r.push(l);this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}b(0,["gg",2],0,function(){return this.weekYear()%100});b(0,["GG",2],0,function(){return this.isoWeekYear()%100});function pn(e,t){b(0,[e,e.length],0,t)}pn("gggg","weekYear");pn("ggggg","weekYear");pn("GGGG","isoWeekYear");pn("GGGGG","isoWeekYear");p("G",fn);p("g",fn);p("GG",Y,ie);p("gg",Y,ie);p("GGGG",mr,fr);p("gggg",mr,fr);p("GGGGG",dn,ln);p("ggggg",dn,ln);Pt(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=D(e)});Pt(["gg","GG"],function(e,t,n,r){t[r]=g.parseTwoDigitYear(e)});function bm(e){return Is.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function _m(e){return Is.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Sm(){return Ae(this.year(),1,4)}function Tm(){return Ae(this.isoWeekYear(),1,4)}function wm(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)}function xm(){var e=this.localeData()._week;return Ae(this.weekYear(),e.dow,e.doy)}function Is(e,t,n,r,a){var s;return e==null?_t(this,r,a).year:(s=Ae(e,r,a),t>s&&(t=s),Dm.call(this,e,t,n,r,a))}function Dm(e,t,n,r,a){var s=gs(e,t,n,r,a),i=bt(s.year,0,s.dayOfYear);return this.year(i.getUTCFullYear()),this.month(i.getUTCMonth()),this.date(i.getUTCDate()),this}b("Q",0,"Qo","quarter");p("Q",rs);B("Q",function(e,t){t[Oe]=(D(e)-1)*3});function Em(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}b("D",["DD",2],"Do","date");p("D",Y,dt);p("DD",Y,ie);p("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});B(["D","DD"],_e);B("Do",function(e,t){t[_e]=D(e.match(Y)[0])});var Hs=ft("Date",!0);b("DDD",["DDDD",3],"DDDo","dayOfYear");p("DDD",un);p("DDDD",as);B(["DDD","DDDD"],function(e,t,n){n._dayOfYear=D(e)});function Pm(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}b("m",["mm",2],0,"minute");p("m",Y,hr);p("mm",Y,ie);B(["m","mm"],me);var Nm=ft("Minutes",!1);b("s",["ss",2],0,"second");p("s",Y,hr);p("ss",Y,ie);B(["s","ss"],Re);var Mm=ft("Seconds",!1);b("S",0,0,function(){return~~(this.millisecond()/100)});b(0,["SS",2],0,function(){return~~(this.millisecond()/10)});b(0,["SSS",3],0,"millisecond");b(0,["SSSS",4],0,function(){return this.millisecond()*10});b(0,["SSSSS",5],0,function(){return this.millisecond()*100});b(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});b(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});b(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});b(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});p("S",un,rs);p("SS",un,ie);p("SSS",un,as);var Le,Bs;for(Le="SSSS";Le.length<=9;Le+="S")p(Le,ut);function Om(e,t){t[We]=D(("0."+e)*1e3)}for(Le="S";Le.length<=9;Le+="S")B(Le,Om);Bs=ft("Milliseconds",!1);b("z",0,0,"zoneAbbr");b("zz",0,0,"zoneName");function Rm(){return this._isUTC?"UTC":""}function Fm(){return this._isUTC?"Coordinated Universal Time":""}var f=Dt.prototype;f.add=xf;f.calendar=Rf;f.clone=Ff;f.diff=Lf;f.endOf=Xf;f.format=Gf;f.from=Wf;f.fromNow=$f;f.to=Vf;f.toNow=zf;f.get=Yu;f.invalidAt=sm;f.isAfter=Af;f.isBefore=If;f.isBetween=Hf;f.isSame=Bf;f.isSameOrAfter=Cf;f.isSameOrBefore=jf;f.isValid=rm;f.lang=Ms;f.locale=Ns;f.localeData=Os;f.max=nf;f.min=tf;f.parsingFlags=am;f.set=Uu;f.startOf=Zf;f.subtract=Df;f.toArray=em;f.toObject=tm;f.toDate=Qf;f.toISOString=Yf;f.inspect=Uf;typeof Symbol<"u"&&Symbol.for!=null&&(f[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});f.toJSON=nm;f.toString=qf;f.unix=Jf;f.valueOf=Kf;f.creationData=im;f.eraName=dm;f.eraNarrow=fm;f.eraAbbr=mm;f.eraYear=hm;f.year=os;f.isLeapYear=qu;f.weekYear=bm;f.isoWeekYear=_m;f.quarter=f.quarters=Em;f.month=ms;f.daysInMonth=Ju;f.week=f.weeks=id;f.isoWeek=f.isoWeeks=od;f.weeksInYear=wm;f.weeksInWeekYear=xm;f.isoWeeksInYear=Sm;f.isoWeeksInISOWeekYear=Tm;f.date=Hs;f.day=f.days=bd;f.weekday=_d;f.isoWeekday=Sd;f.dayOfYear=Pm;f.hour=f.hours=Nd;f.minute=f.minutes=Nm;f.second=f.seconds=Mm;f.millisecond=f.milliseconds=Bs;f.utcOffset=mf;f.utc=gf;f.local=cf;f.parseZone=pf;f.hasAlignedHourOffset=yf;f.isDST=vf;f.isLocal=bf;f.isUtcOffset=_f;f.isUtc=xs;f.isUTC=xs;f.zoneAbbr=Rm;f.zoneName=Fm;f.dates=ue("dates accessor is deprecated. Use date instead.",Hs);f.months=ue("months accessor is deprecated. Use month instead",ms);f.years=ue("years accessor is deprecated. Use year instead",os);f.zone=ue("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",hf);f.isDSTShifted=ue("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",kf);function Am(e){return q(e*1e3)}function Im(){return q.apply(null,arguments).parseZone()}function Cs(e){return e}var A=lr.prototype;A.calendar=ku;A.longDateFormat=Tu;A.invalidDate=xu;A.ordinal=Pu;A.preparse=Cs;A.postformat=Cs;A.relativeTime=Mu;A.pastFuture=Ou;A.set=yu;A.eras=om;A.erasParse=lm;A.erasConvertYear=um;A.erasAbbrRegex=cm;A.erasNameRegex=gm;A.erasNarrowRegex=pm;A.months=zu;A.monthsShort=Zu;A.monthsParse=Ku;A.monthsRegex=ed;A.monthsShortRegex=Qu;A.week=nd;A.firstDayOfYear=sd;A.firstDayOfWeek=ad;A.weekdays=cd;A.weekdaysMin=yd;A.weekdaysShort=pd;A.weekdaysParse=kd;A.weekdaysRegex=Td;A.weekdaysShortRegex=wd;A.weekdaysMinRegex=xd;A.isPM=Ed;A.meridiem=Md;function Gt(e,t,n,r){var a=Be(),s=Ee().set(r,t);return a[n](s,e)}function js(e,t,n){if(Ie(e)&&(t=e,e=void 0),e=e||"",t!=null)return Gt(e,t,n,"month");var r,a=[];for(r=0;r<12;r++)a[r]=Gt(e,r,n,"month");return a}function Dr(e,t,n,r){typeof e=="boolean"?(Ie(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,Ie(t)&&(n=t,t=void 0),t=t||"");var a=Be(),s=e?a._week.dow:0,i,o=[];if(n!=null)return Gt(t,(n+s)%7,r,"day");for(i=0;i<7;i++)o[i]=Gt(t,(i+s)%7,r,"day");return o}function Hm(e,t){return js(e,t,"months")}function Bm(e,t){return js(e,t,"monthsShort")}function Cm(e,t,n){return Dr(e,t,n,"weekdays")}function jm(e,t,n){return Dr(e,t,n,"weekdaysShort")}function Lm(e,t,n){return Dr(e,t,n,"weekdaysMin")}qe("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=D(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});g.lang=ue("moment.lang is deprecated. Use moment.locale instead.",qe);g.langData=ue("moment.langData is deprecated. Use moment.localeData instead.",Be);var Ne=Math.abs;function qm(){var e=this._data;return this._milliseconds=Ne(this._milliseconds),this._days=Ne(this._days),this._months=Ne(this._months),e.milliseconds=Ne(e.milliseconds),e.seconds=Ne(e.seconds),e.minutes=Ne(e.minutes),e.hours=Ne(e.hours),e.months=Ne(e.months),e.years=Ne(e.years),this}function Ls(e,t,n,r){var a=pe(t,n);return e._milliseconds+=r*a._milliseconds,e._days+=r*a._days,e._months+=r*a._months,e._bubble()}function Ym(e,t){return Ls(this,e,t,1)}function Um(e,t){return Ls(this,e,t,-1)}function Kr(e){return e<0?Math.floor(e):Math.ceil(e)}function Gm(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,a,s,i,o,l;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=Kr($n(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,a=oe(e/1e3),r.seconds=a%60,s=oe(a/60),r.minutes=s%60,i=oe(s/60),r.hours=i%24,t+=oe(i/24),l=oe(qs(t)),n+=l,t-=Kr($n(l)),o=oe(n/12),n%=12,r.days=t,r.months=n,r.years=o,this}function qs(e){return e*4800/146097}function $n(e){return e*146097/4800}function Wm(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=de(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+qs(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round($n(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function Ce(e){return function(){return this.as(e)}}var Ys=Ce("ms"),$m=Ce("s"),Vm=Ce("m"),zm=Ce("h"),Zm=Ce("d"),Xm=Ce("w"),Km=Ce("M"),Jm=Ce("Q"),Qm=Ce("y"),eh=Ys;function th(){return pe(this)}function nh(e){return e=de(e),this.isValid()?this[e+"s"]():NaN}function Xe(e){return function(){return this.isValid()?this._data[e]:NaN}}var rh=Xe("milliseconds"),ah=Xe("seconds"),sh=Xe("minutes"),ih=Xe("hours"),oh=Xe("days"),lh=Xe("months"),uh=Xe("years");function dh(){return oe(this.days()/7)}var Me=Math.round,Qe={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function fh(e,t,n,r,a){return a.relativeTime(t||1,!!n,e,r)}function mh(e,t,n,r){var a=pe(e).abs(),s=Me(a.as("s")),i=Me(a.as("m")),o=Me(a.as("h")),l=Me(a.as("d")),u=Me(a.as("M")),d=Me(a.as("w")),h=Me(a.as("y")),m=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||i<=1&&["m"]||i<n.m&&["mm",i]||o<=1&&["h"]||o<n.h&&["hh",o]||l<=1&&["d"]||l<n.d&&["dd",l];return n.w!=null&&(m=m||d<=1&&["w"]||d<n.w&&["ww",d]),m=m||u<=1&&["M"]||u<n.M&&["MM",u]||h<=1&&["y"]||["yy",h],m[2]=t,m[3]=+e>0,m[4]=r,fh.apply(null,m)}function hh(e){return e===void 0?Me:typeof e=="function"?(Me=e,!0):!1}function gh(e,t){return Qe[e]===void 0?!1:t===void 0?Qe[e]:(Qe[e]=t,e==="s"&&(Qe.ss=t-1),!0)}function ch(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=Qe,a,s;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},Qe,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),a=this.localeData(),s=mh(this,!n,r,a),n&&(s=a.pastFuture(+this,s)),a.postformat(s)}var Dn=Math.abs;function Ke(e){return(e>0)-(e<0)||+e}function yn(){if(!this.isValid())return this.localeData().invalidDate();var e=Dn(this._milliseconds)/1e3,t=Dn(this._days),n=Dn(this._months),r,a,s,i,o=this.asSeconds(),l,u,d,h;return o?(r=oe(e/60),a=oe(r/60),e%=60,r%=60,s=oe(n/12),n%=12,i=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=o<0?"-":"",u=Ke(this._months)!==Ke(o)?"-":"",d=Ke(this._days)!==Ke(o)?"-":"",h=Ke(this._milliseconds)!==Ke(o)?"-":"",l+"P"+(s?u+s+"Y":"")+(n?u+n+"M":"")+(t?d+t+"D":"")+(a||r||e?"T":"")+(a?h+a+"H":"")+(r?h+r+"M":"")+(e?h+i+"S":"")):"P0D"}var N=cn.prototype;N.isValid=lf;N.abs=qm;N.add=Ym;N.subtract=Um;N.as=Wm;N.asMilliseconds=Ys;N.asSeconds=$m;N.asMinutes=Vm;N.asHours=zm;N.asDays=Zm;N.asWeeks=Xm;N.asMonths=Km;N.asQuarters=Jm;N.asYears=Qm;N.valueOf=eh;N._bubble=Gm;N.clone=th;N.get=nh;N.milliseconds=rh;N.seconds=ah;N.minutes=sh;N.hours=ih;N.days=oh;N.weeks=dh;N.months=lh;N.years=uh;N.humanize=ch;N.toISOString=yn;N.toString=yn;N.toJSON=yn;N.locale=Ns;N.localeData=Os;N.toIsoString=ue("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",yn);N.lang=Ms;b("X",0,0,"unix");b("x",0,0,"valueOf");p("x",fn);p("X",Iu);B("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});B("x",function(e,t,n){n._d=new Date(D(e))});//! moment.js
g.version="2.30.1";cu(q);g.fn=f;g.min=rf;g.max=af;g.now=sf;g.utc=Ee;g.unix=Am;g.months=Hm;g.isDate=xt;g.locale=qe;g.invalid=on;g.duration=pe;g.isMoment=ge;g.weekdays=Cm;g.parseZone=Im;g.localeData=Be;g.isDuration=It;g.monthsShort=Bm;g.weekdaysMin=Lm;g.defineLocale=vr;g.updateLocale=Ad;g.locales=Id;g.weekdaysShort=jm;g.normalizeUnits=de;g.relativeTimeRounding=hh;g.relativeTimeThreshold=gh;g.calendarFormat=Of;g.prototype=f;g.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const ph="_colMargin_1r8hu_1",Wt={colMargin:ph},Bt=e=>e?g(e,nr).format(rr):"-",yh=(e,t,n,r)=>e&&Object.keys(t).length>0?Bt(Object.values(t)[0]):r?Bt(r):e?n?Bt(n):"-":null,Us=({soknad:e,termindato:t})=>{const n=e.fodselsdatoer?e.fodselsdatoer:{},r=Object.keys(n).length>0?"FodselsammenligningPanel.Fodselsdato":"FodselsammenligningPanel.Termindato",a=Object.keys(n).length>0?"FodselSammenligningOtherPanel.OpplysningerISoknad":"FodselSammenligningOtherPanel.TerminISoknad",s=C.useMemo(()=>yh(!!e,n,e.termindato,t),[e,n,t]);return y.jsxs(y.Fragment,{children:[y.jsx(ar,{size:"small",children:y.jsx(re,{id:a})}),y.jsx(Ka,{sixteenPx:!0}),y.jsx(jt,{children:y.jsxs(Ct,{children:[e.utstedtdato&&y.jsxs(Se,{className:Wt.colMargin,children:[y.jsx(et,{size:"small",children:y.jsx(re,{id:"FodselsammenligningPanel.UstedtDato"})}),y.jsx(Te,{size:"small",children:Bt(e.utstedtdato)})]}),y.jsxs(Se,{className:Wt.colMargin,children:[y.jsx(et,{size:"small",children:y.jsx(re,{id:r})}),y.jsx(Te,{size:"small",children:s})]}),y.jsxs(Se,{children:[y.jsx(et,{size:"small",children:y.jsx(re,{id:"FodselsammenligningPanel.AntallBarn"})}),y.jsx(Te,{size:"small",children:e.antallBarn})]})]})})]})};Us.__docgenInfo={description:`FodselSammenligningOtherPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""}}};const En=e=>e?g(e,nr).format(rr):"-",vh=(e,t,n)=>{if(!t&&!n)return"";const r=n||{termindato:void 0,avklartBarn:[]};if(e){const a=r.termindato?r.termindato:t==null?void 0:t.termindato;return a?En(a):void 0}return r.avklartBarn&&r.avklartBarn.length>0?En(r.avklartBarn[0].fodselsdato):t!=null&&t.fodselsdatoer?En(Object.values(t.fodselsdatoer)[0]):"-"},kh=(e,t,n)=>{if(!t&&!n)return 0;const r=n||{termindato:void 0,antallBarnTermin:void 0,avklartBarn:[]};return e?r.termindato?r.antallBarnTermin:t==null?void 0:t.antallBarn:r.avklartBarn&&r.avklartBarn.length>0?r.avklartBarn.length:t==null?void 0:t.antallBarn},Gs=({vedtaksDatoSomSvangerskapsuke:e,soknadOriginalBehandling:t,familiehendelseOriginalBehandling:n})=>{const r=n&&!!n.termindato||!(t!=null&&t.fodselsdatoer)||Object.keys(t.fodselsdatoer).length===0,a=r?"FodselsammenligningPanel.Termindato":"FodselsammenligningPanel.Fodselsdato",s=vh(r,t,n),i=kh(r,t,n),o=n?(!n.avklartBarn||n.avklartBarn.length===0)&&!!e:!1;return y.jsxs(y.Fragment,{children:[y.jsx(ar,{size:"small",children:y.jsx(re,{id:"FodselsammenligningPanel.Ytelsesvedtak"})}),y.jsx(Ka,{sixteenPx:!0}),y.jsx(jt,{children:y.jsxs(Ct,{children:[o&&y.jsxs(Se,{className:Wt.colMargin,children:[y.jsx(et,{size:"small",children:y.jsx(re,{id:"FodselsammenligningPanel.FodtISvangerskapsuke"})}),y.jsx(Te,{size:"small",children:e})]}),y.jsxs(Se,{className:Wt.colMargin,children:[y.jsx(et,{size:"small",children:y.jsx(re,{id:a})}),y.jsx(Te,{size:"small",children:s??"-"})]}),y.jsxs(Se,{children:[y.jsx(et,{size:"small",children:y.jsx(re,{id:"FodselsammenligningPanel.AntallBarn"})}),y.jsx(Te,{size:"small",children:i??"-"})]})]})})]})};Gs.__docgenInfo={description:`FodselSammenligningRevurderingPanel

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
}>`},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const bh="_noChildrenInTps_3z81w_1",_h="_colWidthLeft_3z81w_5",Sh="_colWidthRight_3z81w_9",Pn={noChildrenInTps:bh,colWidthLeft:_h,colWidthRight:Sh},Jr=e=>e?g(e,nr).format(rr):"-",Ws=({behandlingsTypeKode:e,avklartBarn:t,nrOfDodfodteBarn:n,soknad:r,vedtaksDatoSomSvangerskapsuke:a,termindato:s,soknadOriginalBehandling:i,familiehendelseOriginalBehandling:o})=>y.jsx(jt,{children:y.jsxs(Ct,{children:[y.jsxs(Se,{className:Pn.colWidthLeft,children:[e!==st.REVURDERING&&y.jsx(Us,{soknad:r,termindato:s}),e===st.REVURDERING&&y.jsx(Gs,{soknadOriginalBehandling:i,familiehendelseOriginalBehandling:o,vedtaksDatoSomSvangerskapsuke:a})]}),y.jsxs(Se,{className:Pn.colWidthRight,children:[y.jsx(jt,{children:y.jsxs(Ct,{children:[y.jsx(Se,{children:y.jsx(ar,{size:"small",children:y.jsx(re,{id:"FodselsammenligningPanel.OpplysningerTPS"})})}),n>0&&y.jsx(Se,{children:y.jsx(Ur,{variant:"info",children:y.jsx(re,{id:"FodselsammenligningPanel.Dodfodt"})})})]})}),t.length>0&&y.jsx(Xa,{noHover:!0,headerTextCodes:["FodselsammenligningPanel.Fodselsdato","FodselsammenligningPanel.Dodsdato"],children:t.map(l=>{const u=l.fodselsdato+l.dodsdato;return y.jsxs(za,{id:u,children:[y.jsx(tt,{children:y.jsx(Te,{size:"small",children:Jr(l.fodselsdato)})}),y.jsx(tt,{children:y.jsx(Te,{size:"small",children:l.dodsdato?Jr(l.dodsdato):"-"})}),y.jsx(tt,{children:l.dodsdato&&y.jsx(Ur,{variant:"info",children:y.jsx(re,{id:"FodselsammenligningPanel.Dod"})})})]},u)})}),t.length===0&&y.jsx("div",{className:Pn.noChildrenInTps,children:y.jsx(Te,{size:"small",children:"-"})})]})]})});Ws.__docgenInfo={description:`FodselSammenlingningPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const Th={"FodselsammenligningPanel.AntallBarn":"Antall barn","FodselsammenligningPanel.Termindato":"Termindato","FodselsammenligningPanel.FodtISvangerskapsuke":"Født i svangerskapsuke","FodselsammenligningPanel.Svangerskapsuke":"Svangerskapsuke","FodselsammenligningPanel.OpplysningerTPS":"Opplysninger om fødsel fra folkeregisteret","FodselsammenligningPanel.Fodselsdato":"Fødselsdato","FodselsammenligningPanel.Dodsdato":"Dødsdato","FodselsammenligningPanel.UstedtDato":"Utstedt dato","FodselsammenligningPanel.Ytelsesvedtak":"Vedtak","FodselsammenligningPanel.Dodfodt":"Dødfødsel","FodselsammenligningPanel.Dod":"Død","FodselSammenligningOtherPanel.OpplysningerISoknad":"Opplysninger om fødsel fra søknaden","FodselSammenligningOtherPanel.TerminISoknad":"Opplysninger om termin oppgitt i søknaden"},wh=De(Th),Er=({behandlingsTypeKode:e,avklartBarn:t=[],termindato:n,vedtaksDatoSomSvangerskapsuke:r,soknad:a,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:i})=>{const o=t.reduce((l,u)=>l+(u.dodsdato?1:0),0);return y.jsx(So,{value:wh,children:y.jsx(Ws,{avklartBarn:t,termindato:n,vedtaksDatoSomSvangerskapsuke:r,nrOfDodfodteBarn:o,behandlingsTypeKode:e,soknad:a,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:i})})};Er.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningIndex",props:{behandlingsTypeKode:{required:!0,tsType:{name:"string"},description:""},avklartBarn:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const xh=[{fodselsdato:"2019-01-10",dodsdato:"2019-01-10",fnr:"1213200001"}],Dh={fodselsdatoer:{1:"2019-01-10"},termindato:"2019-01-01",utstedtdato:"2019-01-02",antallBarn:1},Eh={avklartBarn:[{fodselsdato:"2019-01-10"}],termindato:"2019-01-01",antallBarnTermin:1},Oh={title:"prosessOgFakta/prosess-fakta-fodsel-sammenligning",component:Er},Pr=({behandlingsTypeKode:e,vedtaksDatoSomSvangerskapsuke:t,familiehendelseOriginalBehandling:n})=>y.jsx(Er,{behandlingsTypeKode:e,avklartBarn:xh,termindato:"2019-01-01",soknad:Dh,familiehendelseOriginalBehandling:n||Eh,vedtaksDatoSomSvangerskapsuke:t}),ct=Pr.bind({});ct.args={behandlingsTypeKode:st.REVURDERING};const pt=Pr.bind({});pt.args={behandlingsTypeKode:st.FORSTEGANGSSOKNAD};const yt=Pr.bind({});yt.args={behandlingsTypeKode:st.REVURDERING,vedtaksDatoSomSvangerskapsuke:43,familiehendelseOriginalBehandling:{avklartBarn:[],termindato:"2019-01-01",antallBarnTermin:1}};var Qr,ea,ta;ct.parameters={...ct.parameters,docs:{...(Qr=ct.parameters)==null?void 0:Qr.docs,source:{originalSource:`({
  behandlingsTypeKode,
  vedtaksDatoSomSvangerskapsuke,
  familiehendelseOriginalBehandling
}) => <FodselSammenligningIndex behandlingsTypeKode={behandlingsTypeKode} avklartBarn={avklartBarn} termindato="2019-01-01" soknad={soknad} familiehendelseOriginalBehandling={familiehendelseOriginalBehandling || familiehendelse} vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke} />`,...(ta=(ea=ct.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var na,ra,aa;pt.parameters={...pt.parameters,docs:{...(na=pt.parameters)==null?void 0:na.docs,source:{originalSource:`({
  behandlingsTypeKode,
  vedtaksDatoSomSvangerskapsuke,
  familiehendelseOriginalBehandling
}) => <FodselSammenligningIndex behandlingsTypeKode={behandlingsTypeKode} avklartBarn={avklartBarn} termindato="2019-01-01" soknad={soknad} familiehendelseOriginalBehandling={familiehendelseOriginalBehandling || familiehendelse} vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke} />`,...(aa=(ra=pt.parameters)==null?void 0:ra.docs)==null?void 0:aa.source}}};var sa,ia,oa;yt.parameters={...yt.parameters,docs:{...(sa=yt.parameters)==null?void 0:sa.docs,source:{originalSource:`({
  behandlingsTypeKode,
  vedtaksDatoSomSvangerskapsuke,
  familiehendelseOriginalBehandling
}) => <FodselSammenligningIndex behandlingsTypeKode={behandlingsTypeKode} avklartBarn={avklartBarn} termindato="2019-01-01" soknad={soknad} familiehendelseOriginalBehandling={familiehendelseOriginalBehandling || familiehendelse} vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke} />`,...(oa=(ia=yt.parameters)==null?void 0:ia.docs)==null?void 0:oa.source}}};const Rh=["PanelForNårBehandlingstypeErRevurdering","PanelForNårBehandlingstypeErFørstegangssoknad","PanelForMedVisningAvSvangerskapsuke"];export{yt as PanelForMedVisningAvSvangerskapsuke,pt as PanelForNårBehandlingstypeErFørstegangssoknad,ct as PanelForNårBehandlingstypeErRevurdering,Rh as __namedExportsOrder,Oh as default};
