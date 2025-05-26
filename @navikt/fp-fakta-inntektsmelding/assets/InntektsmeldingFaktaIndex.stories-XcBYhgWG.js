import{j as G}from"./jsx-runtime-D_zvdyIk.js";import{r as F,R as J}from"./index-mMUbb89k.js";import{d as Or}from"./dayjs.min-Cke173X9.js";import{c as Ja,g as OA}from"./_commonjsHelpers-Cpj98o6Y.js";import{e as LA}from"./entry-preview-DBI_Pzo6.js";import"./entry-preview-docs-DtNjo1hO.js";import{v as KA}from"./v4-CtRu48qb.js";import"./iframe-DFka4ksf.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./index-CXQShRbs.js";var eo=function(e,i){return eo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])},eo(e,i)};function Yn(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");eo(e,i);function t(){this.constructor=e}e.prototype=i===null?Object.create(i):(t.prototype=i.prototype,new t)}var ie=function(){return ie=Object.assign||function(i){for(var t,a=1,s=arguments.length;a<s;a++){t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(i[l]=t[l])}return i},ie.apply(this,arguments)};function lt(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t}function rr(e,i,t){if(t||arguments.length===2)for(var a=0,s=i.length,l;a<s;a++)(l||!(a in i))&&(l||(l=Array.prototype.slice.call(i,0,a)),l[a]=i[a]);return e.concat(l||Array.prototype.slice.call(i))}function Zn(e,i){var t=i&&i.cache?i.cache:VA,a=i&&i.serializer?i.serializer:GA,s=i&&i.strategy?i.strategy:FA;return s(e,{cache:t,serializer:a})}function DA(e){return e==null||typeof e=="number"||typeof e=="boolean"}function PA(e,i,t,a){var s=DA(a)?a:t(a),l=i.get(s);return typeof l>"u"&&(l=e.call(this,a),i.set(s,l)),l}function kk(e,i,t){var a=Array.prototype.slice.call(arguments,3),s=t(a),l=i.get(s);return typeof l>"u"&&(l=e.apply(this,a),i.set(s,l)),l}function vk(e,i,t,a,s){return t.bind(i,e,a,s)}function FA(e,i){var t=e.length===1?PA:kk;return vk(e,this,t,i.cache.create(),i.serializer)}function MA(e,i){return vk(e,this,kk,i.cache.create(),i.serializer)}var GA=function(){return JSON.stringify(arguments)},BA=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(i){return this.cache[i]},e.prototype.set=function(i,t){this.cache[i]=t},e}(),VA={create:function(){return new BA}},Qn={variadic:MA},ce;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(ce||(ce={}));var Ge;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Ge||(Ge={}));var ut;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(ut||(ut={}));function Sd(e){return e.type===Ge.literal}function wA(e){return e.type===Ge.argument}function Ek(e){return e.type===Ge.number}function mk(e){return e.type===Ge.date}function fk(e){return e.type===Ge.time}function pk(e){return e.type===Ge.select}function Tk(e){return e.type===Ge.plural}function jA(e){return e.type===Ge.pound}function hk(e){return e.type===Ge.tag}function ck(e){return!!(e&&typeof e=="object"&&e.type===ut.number)}function no(e){return!!(e&&typeof e=="object"&&e.type===ut.dateTime)}var Ak=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,UA=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function HA(e){var i={};return e.replace(UA,function(t){var a=t.length;switch(t[0]){case"G":i.era=a===4?"long":a===5?"narrow":"short";break;case"y":i.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=a===4?"long":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][a-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][a-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][a-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][a-1];break;case"s":i.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var xA=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function qA(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(xA).filter(function(A){return A.length>0}),t=[],a=0,s=i;a<s.length;a++){var l=s[a],d=l.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var g=d[0],v=d.slice(1),E=0,m=v;E<m.length;E++){var h=m[E];if(h.length===0)throw new Error("Invalid number skeleton")}t.push({stem:g,options:v})}return t}function YA(e){return e.replace(/^(.*?)-/,"")}var Id=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,yk=/^(@+)?(\+|#+)?[rs]?$/g,CA=/(\*)(0+)|(#+)(0+)|(0+)/g,Rk=/^(0+)$/;function Od(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(yk,function(t,a,s){return typeof s!="string"?(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length):s==="+"?i.minimumSignificantDigits=a.length:a[0]==="#"?i.maximumSignificantDigits=a.length:(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length+(typeof s=="string"?s.length:0)),""}),i}function _k(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function $A(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var t=e.slice(0,2);if(t==="+!"?(i.signDisplay="always",e=e.slice(2)):t==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!Rk.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function Ld(e){var i={},t=_k(e);return t||i}function JA(e){for(var i={},t=0,a=e;t<a.length;t++){var s=a[t];switch(s.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=s.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=YA(s.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=ie(ie(ie({},i),{notation:"scientific"}),s.options.reduce(function(v,E){return ie(ie({},v),Ld(E))},{}));continue;case"engineering":i=ie(ie(ie({},i),{notation:"engineering"}),s.options.reduce(function(v,E){return ie(ie({},v),Ld(E))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(CA,function(v,E,m,h,A,K){if(E)i.minimumIntegerDigits=m.length;else{if(h&&A)throw new Error("We currently do not support maximum integer digits");if(K)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Rk.test(s.stem)){i.minimumIntegerDigits=s.stem.length;continue}if(Id.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(Id,function(v,E,m,h,A,K){return m==="*"?i.minimumFractionDigits=E.length:h&&h[0]==="#"?i.maximumFractionDigits=h.length:A&&K?(i.minimumFractionDigits=A.length,i.maximumFractionDigits=A.length+K.length):(i.minimumFractionDigits=E.length,i.maximumFractionDigits=E.length),""});var l=s.options[0];l==="w"?i=ie(ie({},i),{trailingZeroDisplay:"stripIfInteger"}):l&&(i=ie(ie({},i),Od(l)));continue}if(yk.test(s.stem)){i=ie(ie({},i),Od(s.stem));continue}var d=_k(s.stem);d&&(i=ie(ie({},i),d));var g=$A(s.stem);g&&(i=ie(ie({},i),g))}return i}var Wa={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function WA(e,i){for(var t="",a=0;a<e.length;a++){var s=e.charAt(a);if(s==="j"){for(var l=0;a+1<e.length&&e.charAt(a+1)===s;)l++,a++;var d=1+(l&1),g=l<2?1:3+(l>>1),v="a",E=zA(i);for((E=="H"||E=="k")&&(g=0);g-- >0;)t+=v;for(;d-- >0;)t=E+t}else s==="J"?t+="H":t+=s}return t}function zA(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=e.language,a;t!=="root"&&(a=e.maximize().region);var s=Wa[a||""]||Wa[t||""]||Wa["".concat(t,"-001")]||Wa["001"];return s[0]}var Gs,XA=new RegExp("^".concat(Ak.source,"*")),ZA=new RegExp("".concat(Ak.source,"*$"));function ye(e,i){return{start:e,end:i}}var QA=!!String.prototype.startsWith&&"_a".startsWith("a",1),ey=!!String.fromCodePoint,ny=!!Object.fromEntries,ry=!!String.prototype.codePointAt,ty=!!String.prototype.trimStart,ay=!!String.prototype.trimEnd,iy=!!Number.isSafeInteger,sy=iy?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},ro=!0;try{var oy=bk("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ro=((Gs=oy.exec("a"))===null||Gs===void 0?void 0:Gs[0])==="a"}catch{ro=!1}var Kd=QA?function(i,t,a){return i.startsWith(t,a)}:function(i,t,a){return i.slice(a,a+t.length)===t},to=ey?String.fromCodePoint:function(){for(var i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];for(var a="",s=i.length,l=0,d;s>l;){if(d=i[l++],d>1114111)throw RangeError(d+" is not a valid code point");a+=d<65536?String.fromCharCode(d):String.fromCharCode(((d-=65536)>>10)+55296,d%1024+56320)}return a},Dd=ny?Object.fromEntries:function(i){for(var t={},a=0,s=i;a<s.length;a++){var l=s[a],d=l[0],g=l[1];t[d]=g}return t},Nk=ry?function(i,t){return i.codePointAt(t)}:function(i,t){var a=i.length;if(!(t<0||t>=a)){var s=i.charCodeAt(t),l;return s<55296||s>56319||t+1===a||(l=i.charCodeAt(t+1))<56320||l>57343?s:(s-55296<<10)+(l-56320)+65536}},ly=ty?function(i){return i.trimStart()}:function(i){return i.replace(XA,"")},uy=ay?function(i){return i.trimEnd()}:function(i){return i.replace(ZA,"")};function bk(e,i){return new RegExp(e,i)}var ao;if(ro){var Pd=bk("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ao=function(i,t){var a;Pd.lastIndex=t;var s=Pd.exec(i);return(a=s[1])!==null&&a!==void 0?a:""}}else ao=function(i,t){for(var a=[];;){var s=Nk(i,t);if(s===void 0||Sk(s)||vy(s))break;a.push(s),t+=s>=65536?2:1}return to.apply(void 0,a)};var dy=function(){function e(i,t){t===void 0&&(t={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,t,a){for(var s=[];!this.isEOF();){var l=this.char();if(l===123){var d=this.parseArgument(i,a);if(d.err)return d;s.push(d.val)}else{if(l===125&&i>0)break;if(l===35&&(t==="plural"||t==="selectordinal")){var g=this.clonePosition();this.bump(),s.push({type:Ge.pound,location:ye(g,this.clonePosition())})}else if(l===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(ce.UNMATCHED_CLOSING_TAG,ye(this.clonePosition(),this.clonePosition()))}else if(l===60&&!this.ignoreTag&&io(this.peek()||0)){var d=this.parseTag(i,t);if(d.err)return d;s.push(d.val)}else{var d=this.parseLiteral(i,t);if(d.err)return d;s.push(d.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(i,t){var a=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Ge.literal,value:"<".concat(s,"/>"),location:ye(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var l=this.parseMessage(i+1,t,!0);if(l.err)return l;var d=l.val,g=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!io(this.char()))return this.error(ce.INVALID_TAG,ye(g,this.clonePosition()));var v=this.clonePosition(),E=this.parseTagName();return s!==E?this.error(ce.UNMATCHED_CLOSING_TAG,ye(v,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Ge.tag,value:s,children:d,location:ye(a,this.clonePosition())},err:null}:this.error(ce.INVALID_TAG,ye(g,this.clonePosition())))}else return this.error(ce.UNCLOSED_TAG,ye(a,this.clonePosition()))}else return this.error(ce.INVALID_TAG,ye(a,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&ky(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,t){for(var a=this.clonePosition(),s="";;){var l=this.tryParseQuote(t);if(l){s+=l;continue}var d=this.tryParseUnquoted(i,t);if(d){s+=d;continue}var g=this.tryParseLeftAngleBracket();if(g){s+=g;continue}break}var v=ye(a,this.clonePosition());return{val:{type:Ge.literal,value:s,location:v},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!gy(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(a);this.bump()}return to.apply(void 0,t)},e.prototype.tryParseUnquoted=function(i,t){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(t==="plural"||t==="selectordinal")||a===125&&i>0?null:(this.bump(),to(a))},e.prototype.parseArgument=function(i,t){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,ye(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(ce.EMPTY_ARGUMENT,ye(a,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(ce.MALFORMED_ARGUMENT,ye(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,ye(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Ge.argument,value:s,location:ye(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,ye(a,this.clonePosition())):this.parseArgumentOptions(i,t,s,a);default:return this.error(ce.MALFORMED_ARGUMENT,ye(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),t=this.offset(),a=ao(this.message,t),s=t+a.length;this.bumpTo(s);var l=this.clonePosition(),d=ye(i,l);return{value:a,location:d}},e.prototype.parseArgumentOptions=function(i,t,a,s){var l,d=this.clonePosition(),g=this.parseIdentifierIfPossible().value,v=this.clonePosition();switch(g){case"":return this.error(ce.EXPECT_ARGUMENT_TYPE,ye(d,v));case"number":case"date":case"time":{this.bumpSpace();var E=null;if(this.bumpIf(",")){this.bumpSpace();var m=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var A=uy(h.val);if(A.length===0)return this.error(ce.EXPECT_ARGUMENT_STYLE,ye(this.clonePosition(),this.clonePosition()));var K=ye(m,this.clonePosition());E={style:A,styleLocation:K}}var P=this.tryParseArgumentClose(s);if(P.err)return P;var c=ye(s,this.clonePosition());if(E&&Kd(E==null?void 0:E.style,"::",0)){var _=ly(E.style.slice(2));if(g==="number"){var h=this.parseNumberSkeletonFromString(_,E.styleLocation);return h.err?h:{val:{type:Ge.number,value:a,location:c,style:h.val},err:null}}else{if(_.length===0)return this.error(ce.EXPECT_DATE_TIME_SKELETON,c);var O=_;this.locale&&(O=WA(_,this.locale));var A={type:ut.dateTime,pattern:O,location:E.styleLocation,parsedOptions:this.shouldParseSkeletons?HA(O):{}},V=g==="date"?Ge.date:Ge.time;return{val:{type:V,value:a,location:c,style:A},err:null}}}return{val:{type:g==="number"?Ge.number:g==="date"?Ge.date:Ge.time,value:a,location:c,style:(l=E==null?void 0:E.style)!==null&&l!==void 0?l:null},err:null}}case"plural":case"selectordinal":case"select":{var S=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(ce.EXPECT_SELECT_ARGUMENT_OPTIONS,ye(S,ie({},S)));this.bumpSpace();var X=this.parseIdentifierIfPossible(),y=0;if(g!=="select"&&X.value==="offset"){if(!this.bumpIf(":"))return this.error(ce.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ye(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(ce.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ce.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),X=this.parseIdentifierIfPossible(),y=h.val}var M=this.tryParsePluralOrSelectOptions(i,g,t,X);if(M.err)return M;var P=this.tryParseArgumentClose(s);if(P.err)return P;var L=ye(s,this.clonePosition());return g==="select"?{val:{type:Ge.select,value:a,options:Dd(M.val),location:L},err:null}:{val:{type:Ge.plural,value:a,options:Dd(M.val),offset:y,pluralType:g==="plural"?"cardinal":"ordinal",location:L},err:null}}default:return this.error(ce.INVALID_ARGUMENT_TYPE,ye(d,v))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,ye(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,t=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(ce.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,ye(s,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,t){var a=[];try{a=qA(i)}catch{return this.error(ce.INVALID_NUMBER_SKELETON,t)}return{val:{type:ut.number,tokens:a,location:t,parsedOptions:this.shouldParseSkeletons?JA(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,t,a,s){for(var l,d=!1,g=[],v=new Set,E=s.value,m=s.location;;){if(E.length===0){var h=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var A=this.tryParseDecimalInteger(ce.EXPECT_PLURAL_ARGUMENT_SELECTOR,ce.INVALID_PLURAL_ARGUMENT_SELECTOR);if(A.err)return A;m=ye(h,this.clonePosition()),E=this.message.slice(h.offset,this.offset())}else break}if(v.has(E))return this.error(t==="select"?ce.DUPLICATE_SELECT_ARGUMENT_SELECTOR:ce.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,m);E==="other"&&(d=!0),this.bumpSpace();var K=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?ce.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:ce.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,ye(this.clonePosition(),this.clonePosition()));var P=this.parseMessage(i+1,t,a);if(P.err)return P;var c=this.tryParseArgumentClose(K);if(c.err)return c;g.push([E,{value:P.val,location:ye(K,this.clonePosition())}]),v.add(E),this.bumpSpace(),l=this.parseIdentifierIfPossible(),E=l.value,m=l.location}return g.length===0?this.error(t==="select"?ce.EXPECT_SELECT_ARGUMENT_SELECTOR:ce.EXPECT_PLURAL_ARGUMENT_SELECTOR,ye(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(ce.MISSING_OTHER_CLAUSE,ye(this.clonePosition(),this.clonePosition())):{val:g,err:null}},e.prototype.tryParseDecimalInteger=function(i,t){var a=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var l=!1,d=0;!this.isEOF();){var g=this.char();if(g>=48&&g<=57)l=!0,d=d*10+(g-48),this.bump();else break}var v=ye(s,this.clonePosition());return l?(d*=a,sy(d)?{val:d,err:null}:this.error(t,v)):this.error(i,v)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var t=Nk(this.message,i);if(t===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(i,t){return{val:null,err:{kind:i,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Kd(this.message,i,this.offset())){for(var t=0;t<i.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var t=this.offset(),a=this.message.indexOf(i,t);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var t=this.offset();if(t===i)break;if(t>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Sk(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),t=this.offset(),a=this.message.charCodeAt(t+(i>=65536?2:1));return a??null},e}();function io(e){return e>=97&&e<=122||e>=65&&e<=90}function gy(e){return io(e)||e===47}function ky(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Sk(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function vy(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function so(e){e.forEach(function(i){if(delete i.location,pk(i)||Tk(i))for(var t in i.options)delete i.options[t].location,so(i.options[t].value);else Ek(i)&&ck(i.style)||(mk(i)||fk(i))&&no(i.style)?delete i.style.location:hk(i)&&so(i.children)})}function Ey(e,i){i===void 0&&(i={}),i=ie({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var t=new dy(e,i).parse();if(t.err){var a=SyntaxError(ce[t.err.kind]);throw a.location=t.err.location,a.originalMessage=t.err.message,a}return i!=null&&i.captureLocation||so(t.val),t.val}var ar;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(ar||(ar={}));var Lr=function(e){Yn(i,e);function i(t,a,s){var l=e.call(this,t)||this;return l.code=a,l.originalMessage=s,l}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),Fd=function(e){Yn(i,e);function i(t,a,s,l){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(a,'". Options are "').concat(Object.keys(s).join('", "'),'"'),ar.INVALID_VALUE,l)||this}return i}(Lr),my=function(e){Yn(i,e);function i(t,a,s){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(a),ar.INVALID_VALUE,s)||this}return i}(Lr),fy=function(e){Yn(i,e);function i(t,a){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(a,'"'),ar.MISSING_VALUE,a)||this}return i}(Lr),mn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(mn||(mn={}));function py(e){return e.length<2?e:e.reduce(function(i,t){var a=i[i.length-1];return!a||a.type!==mn.literal||t.type!==mn.literal?i.push(t):a.value+=t.value,i},[])}function Ik(e){return typeof e=="function"}function ei(e,i,t,a,s,l,d){if(e.length===1&&Sd(e[0]))return[{type:mn.literal,value:e[0].value}];for(var g=[],v=0,E=e;v<E.length;v++){var m=E[v];if(Sd(m)){g.push({type:mn.literal,value:m.value});continue}if(jA(m)){typeof l=="number"&&g.push({type:mn.literal,value:t.getNumberFormat(i).format(l)});continue}var h=m.value;if(!(s&&h in s))throw new fy(h,d);var A=s[h];if(wA(m)){(!A||typeof A=="string"||typeof A=="number")&&(A=typeof A=="string"||typeof A=="number"?String(A):""),g.push({type:typeof A=="string"?mn.literal:mn.object,value:A});continue}if(mk(m)){var K=typeof m.style=="string"?a.date[m.style]:no(m.style)?m.style.parsedOptions:void 0;g.push({type:mn.literal,value:t.getDateTimeFormat(i,K).format(A)});continue}if(fk(m)){var K=typeof m.style=="string"?a.time[m.style]:no(m.style)?m.style.parsedOptions:a.time.medium;g.push({type:mn.literal,value:t.getDateTimeFormat(i,K).format(A)});continue}if(Ek(m)){var K=typeof m.style=="string"?a.number[m.style]:ck(m.style)?m.style.parsedOptions:void 0;K&&K.scale&&(A=A*(K.scale||1)),g.push({type:mn.literal,value:t.getNumberFormat(i,K).format(A)});continue}if(hk(m)){var P=m.children,c=m.value,_=s[c];if(!Ik(_))throw new my(c,"function",d);var O=ei(P,i,t,a,s,l),V=_(O.map(function(y){return y.value}));Array.isArray(V)||(V=[V]),g.push.apply(g,V.map(function(y){return{type:typeof y=="string"?mn.literal:mn.object,value:y}}))}if(pk(m)){var S=m.options[A]||m.options.other;if(!S)throw new Fd(m.value,A,Object.keys(m.options),d);g.push.apply(g,ei(S.value,i,t,a,s));continue}if(Tk(m)){var S=m.options["=".concat(A)];if(!S){if(!Intl.PluralRules)throw new Lr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ar.MISSING_INTL_API,d);var X=t.getPluralRules(i,{type:m.pluralType}).select(A-(m.offset||0));S=m.options[X]||m.options.other}if(!S)throw new Fd(m.value,A,Object.keys(m.options),d);g.push.apply(g,ei(S.value,i,t,a,s,A-(m.offset||0)));continue}}return py(g)}function Ty(e,i){return i?ie(ie(ie({},e||{}),i||{}),Object.keys(e).reduce(function(t,a){return t[a]=ie(ie({},e[a]),i[a]||{}),t},{})):e}function hy(e,i){return i?Object.keys(e).reduce(function(t,a){return t[a]=Ty(e[a],i[a]),t},ie({},e)):e}function Bs(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function cy(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Zn(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.NumberFormat).bind.apply(i,rr([void 0],t,!1)))},{cache:Bs(e.number),strategy:Qn.variadic}),getDateTimeFormat:Zn(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.DateTimeFormat).bind.apply(i,rr([void 0],t,!1)))},{cache:Bs(e.dateTime),strategy:Qn.variadic}),getPluralRules:Zn(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.PluralRules).bind.apply(i,rr([void 0],t,!1)))},{cache:Bs(e.pluralRules),strategy:Qn.variadic})}}var Ok=function(){function e(i,t,a,s){t===void 0&&(t=e.defaultLocale);var l=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(v){var E=l.formatToParts(v);if(E.length===1)return E[0].value;var m=E.reduce(function(h,A){return!h.length||A.type!==mn.literal||typeof h[h.length-1]!="string"?h.push(A.value):h[h.length-1]+=A.value,h},[]);return m.length<=1?m[0]||"":m},this.formatToParts=function(v){return ei(l.ast,l.locales,l.formatters,l.formats,v,void 0,l.message)},this.resolvedOptions=function(){var v;return{locale:((v=l.resolvedLocale)===null||v===void 0?void 0:v.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=t,this.resolvedLocale=e.resolveLocale(t),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=s||{};d.formatters;var g=lt(d,["formatters"]);this.ast=e.__parse(i,ie(ie({},g),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=hy(e.formats,a),this.formatters=s&&s.formatters||cy(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(i);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=Ey,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),xr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(xr||(xr={}));var Jt=function(e){Yn(i,e);function i(t,a,s){var l=this,d=s?s instanceof Error?s:new Error(String(s)):void 0;return l=e.call(this,"[@formatjs/intl Error ".concat(t,"] ").concat(a,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,l.code=t,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(l,i),l}return i}(Error),Ay=function(e){Yn(i,e);function i(t,a){return e.call(this,xr.UNSUPPORTED_FORMATTER,t,a)||this}return i}(Jt),yy=function(e){Yn(i,e);function i(t,a){return e.call(this,xr.INVALID_CONFIG,t,a)||this}return i}(Jt),Md=function(e){Yn(i,e);function i(t,a){return e.call(this,xr.MISSING_DATA,t,a)||this}return i}(Jt),Vn=function(e){Yn(i,e);function i(t,a,s){var l=e.call(this,xr.FORMAT_ERROR,"".concat(t,`
Locale: `).concat(a,`
`),s)||this;return l.locale=a,l}return i}(Jt),Vs=function(e){Yn(i,e);function i(t,a,s,l){var d=e.call(this,"".concat(t,`
MessageID: `).concat(s==null?void 0:s.id,`
Default Message: `).concat(s==null?void 0:s.defaultMessage,`
Description: `).concat(s==null?void 0:s.description,`
`),a,l)||this;return d.descriptor=s,d.locale=a,d}return i}(Vn),Ry=function(e){Yn(i,e);function i(t,a){var s=e.call(this,xr.MISSING_TRANSLATION,'Missing message: "'.concat(t.id,'" for locale "').concat(a,'", using ').concat(t.defaultMessage?"default message (".concat(typeof t.defaultMessage=="string"?t.defaultMessage:t.defaultMessage.map(function(l){var d;return(d=l.value)!==null&&d!==void 0?d:JSON.stringify(l)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=t,s}return i}(Jt);function _y(e,i,t){if(t===void 0&&(t=Error),!e)throw new t(i)}function kt(e,i,t){return t===void 0&&(t={}),i.reduce(function(a,s){return s in e?a[s]=e[s]:s in t&&(a[s]=t[s]),a},{})}var Ny=function(e){},by=function(e){},Lk={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Ny,onWarn:by};function Kk(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Ur(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function Sy(e){e===void 0&&(e=Kk());var i=Intl.RelativeTimeFormat,t=Intl.ListFormat,a=Intl.DisplayNames,s=Zn(function(){for(var g,v=[],E=0;E<arguments.length;E++)v[E]=arguments[E];return new((g=Intl.DateTimeFormat).bind.apply(g,rr([void 0],v,!1)))},{cache:Ur(e.dateTime),strategy:Qn.variadic}),l=Zn(function(){for(var g,v=[],E=0;E<arguments.length;E++)v[E]=arguments[E];return new((g=Intl.NumberFormat).bind.apply(g,rr([void 0],v,!1)))},{cache:Ur(e.number),strategy:Qn.variadic}),d=Zn(function(){for(var g,v=[],E=0;E<arguments.length;E++)v[E]=arguments[E];return new((g=Intl.PluralRules).bind.apply(g,rr([void 0],v,!1)))},{cache:Ur(e.pluralRules),strategy:Qn.variadic});return{getDateTimeFormat:s,getNumberFormat:l,getMessageFormat:Zn(function(g,v,E,m){return new Ok(g,v,E,ie({formatters:{getNumberFormat:l,getDateTimeFormat:s,getPluralRules:d}},m||{}))},{cache:Ur(e.message),strategy:Qn.variadic}),getRelativeTimeFormat:Zn(function(){for(var g=[],v=0;v<arguments.length;v++)g[v]=arguments[v];return new(i.bind.apply(i,rr([void 0],g,!1)))},{cache:Ur(e.relativeTime),strategy:Qn.variadic}),getPluralRules:d,getListFormat:Zn(function(){for(var g=[],v=0;v<arguments.length;v++)g[v]=arguments[v];return new(t.bind.apply(t,rr([void 0],g,!1)))},{cache:Ur(e.list),strategy:Qn.variadic}),getDisplayNames:Zn(function(){for(var g=[],v=0;v<arguments.length;v++)g[v]=arguments[v];return new(a.bind.apply(a,rr([void 0],g,!1)))},{cache:Ur(e.displayNames),strategy:Qn.variadic})}}function Uo(e,i,t,a){var s=e&&e[i],l;if(s&&(l=s[t]),l)return l;a(new Ay("No ".concat(i," format named: ").concat(t)))}function za(e,i){return Object.keys(e).reduce(function(t,a){return t[a]=ie({timeZone:i},e[a]),t},{})}function Gd(e,i){var t=Object.keys(ie(ie({},e),i));return t.reduce(function(a,s){return a[s]=ie(ie({},e[s]||{}),i[s]||{}),a},{})}function Bd(e,i){if(!i)return e;var t=Ok.formats;return ie(ie(ie({},t),e),{date:Gd(za(t.date,i),za(e.date||{},i)),time:Gd(za(t.time,i),za(e.time||{},i))})}var oo=function(e,i,t,a,s){var l=e.locale,d=e.formats,g=e.messages,v=e.defaultLocale,E=e.defaultFormats,m=e.fallbackOnEmptyString,h=e.onError,A=e.timeZone,K=e.defaultRichTextElements;t===void 0&&(t={id:""});var P=t.id,c=t.defaultMessage;_y(!!P,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var _=String(P),O=g&&Object.prototype.hasOwnProperty.call(g,_)&&g[_];if(Array.isArray(O)&&O.length===1&&O[0].type===Ge.literal)return O[0].value;if(!a&&O&&typeof O=="string"&&!K)return O.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=ie(ie({},K),a||{}),d=Bd(d,A),E=Bd(E,A),!O){if(m===!1&&O==="")return O;if((!c||l&&l.toLowerCase()!==v.toLowerCase())&&h(new Ry(t,l)),c)try{var V=i.getMessageFormat(c,v,E,s);return V.format(a)}catch(S){return h(new Vs('Error formatting default message for: "'.concat(_,'", rendering default message verbatim'),l,t,S)),typeof c=="string"?c:_}return _}try{var V=i.getMessageFormat(O,l,d,ie({formatters:i},s||{}));return V.format(a)}catch(S){h(new Vs('Error formatting message: "'.concat(_,'", using ').concat(c?"default message":"id"," as fallback."),l,t,S))}if(c)try{var V=i.getMessageFormat(c,v,E,s);return V.format(a)}catch(S){h(new Vs('Error formatting the default message for: "'.concat(_,'", rendering message verbatim'),l,t,S))}return typeof O=="string"?O:typeof c=="string"?c:_},Iy=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Wt(e,i,t,a){var s=e.locale,l=e.formats,d=e.onError,g=e.timeZone;a===void 0&&(a={});var v=a.format,E=ie(ie({},g&&{timeZone:g}),v&&Uo(l,i,v,d)),m=kt(a,Iy,E);return i==="time"&&!m.hour&&!m.minute&&!m.second&&!m.timeStyle&&!m.dateStyle&&(m=ie(ie({},m),{hour:"numeric",minute:"numeric"})),t(s,m)}function Oy(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return Wt(e,"date",i,d).format(g)}catch(v){e.onError(new Vn("Error formatting date.",e.locale,v))}return String(g)}function Ly(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return Wt(e,"time",i,d).format(g)}catch(v){e.onError(new Vn("Error formatting time.",e.locale,v))}return String(g)}function Ky(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=t[2],g=d===void 0?{}:d,v=typeof s=="string"?new Date(s||0):s,E=typeof l=="string"?new Date(l||0):l;try{return Wt(e,"dateTimeRange",i,g).formatRange(v,E)}catch(m){e.onError(new Vn("Error formatting date time range.",e.locale,m))}return String(v)}function Dy(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return Wt(e,"date",i,d).formatToParts(g)}catch(v){e.onError(new Vn("Error formatting date.",e.locale,v))}return[]}function Py(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return Wt(e,"time",i,d).formatToParts(g)}catch(v){e.onError(new Vn("Error formatting time.",e.locale,v))}return[]}var Fy=["style","type","fallback","languageDisplay"];function My(e,i,t,a){var s=e.locale,l=e.onError,d=Intl.DisplayNames;d||l(new Lr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,ar.MISSING_INTL_API));var g=kt(a,Fy);try{return i(s,g).of(t)}catch(v){l(new Vn("Error formatting display name.",s,v))}}var Gy=["type","style"],Vd=Date.now();function By(e){return"".concat(Vd,"_").concat(e,"_").concat(Vd)}function Vy(e,i,t,a){a===void 0&&(a={});var s=Dk(e,i,t,a).reduce(function(l,d){var g=d.value;return typeof g!="string"?l.push(g):typeof l[l.length-1]=="string"?l[l.length-1]+=g:l.push(g),l},[]);return s.length===1?s[0]:s.length===0?"":s}function Dk(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={});var d=Intl.ListFormat;d||l(new Lr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,ar.MISSING_INTL_API));var g=kt(a,Gy);try{var v={},E=t.map(function(m,h){if(typeof m=="object"){var A=By(h);return v[A]=m,A}return String(m)});return i(s,g).formatToParts(E).map(function(m){return m.type==="literal"?m:ie(ie({},m),{value:v[m.value]||m.value})})}catch(m){l(new Vn("Error formatting list.",s,m))}return t}var wy=["type"];function jy(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={}),Intl.PluralRules||l(new Lr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ar.MISSING_INTL_API));var d=kt(a,wy);try{return i(s,d).select(t)}catch(g){l(new Vn("Error formatting plural.",s,g))}return"other"}var Uy=["numeric","style"];function Hy(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var d=t.format,g=!!d&&Uo(s,"relative",d,l)||{},v=kt(t,Uy,g);return i(a,v)}function xy(e,i,t,a,s){s===void 0&&(s={}),a||(a="second");var l=Intl.RelativeTimeFormat;l||e.onError(new Lr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,ar.MISSING_INTL_API));try{return Hy(e,i,s).format(t,a)}catch(d){e.onError(new Vn("Error formatting relative time.",e.locale,d))}return String(t)}var qy=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Pk(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var d=t.format,g=d&&Uo(s,"number",d,l)||{},v=kt(t,qy,g);return i(a,v)}function Yy(e,i,t,a){a===void 0&&(a={});try{return Pk(e,i,a).format(t)}catch(s){e.onError(new Vn("Error formatting number.",e.locale,s))}return String(t)}function Cy(e,i,t,a){a===void 0&&(a={});try{return Pk(e,i,a).formatToParts(t)}catch(s){e.onError(new Vn("Error formatting number.",e.locale,s))}return[]}function $y(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function Jy(e){e.onWarn&&e.defaultRichTextElements&&$y(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function Wy(e,i){var t=Sy(i),a=ie(ie({},Lk),e),s=a.locale,l=a.defaultLocale,d=a.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&d?d(new Md('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&d&&d(new Md('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new yy('"locale" was not configured, using "'.concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),Jy(a),ie(ie({},a),{formatters:t,formatNumber:Yy.bind(null,a,t.getNumberFormat),formatNumberToParts:Cy.bind(null,a,t.getNumberFormat),formatRelativeTime:xy.bind(null,a,t.getRelativeTimeFormat),formatDate:Oy.bind(null,a,t.getDateTimeFormat),formatDateToParts:Dy.bind(null,a,t.getDateTimeFormat),formatTime:Ly.bind(null,a,t.getDateTimeFormat),formatDateTimeRange:Ky.bind(null,a,t.getDateTimeFormat),formatTimeToParts:Py.bind(null,a,t.getDateTimeFormat),formatPlural:jy.bind(null,a,t.getPluralRules),formatMessage:oo.bind(null,a,t),$t:oo.bind(null,a,t),formatList:Vy.bind(null,a,t.getListFormat),formatListToParts:Dk.bind(null,a,t.getListFormat),formatDisplayName:My.bind(null,a,t.getDisplayNames)})}function zy(e,i,t){if(t===void 0&&(t=Error),!e)throw new t(i)}function Xy(e){zy(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Zy=ie(ie({},Lk),{textComponent:F.Fragment}),Qy={key:42},eR=function(e){return F.isValidElement(e)?F.createElement(F.Fragment,Qy,e):e},nR=function(e){var i;return(i=F.Children.map(e,eR))!==null&&i!==void 0?i:[]};function rR(e){return function(i){return e(F.Children.toArray(i))}}function wd(e,i){if(e===i)return!0;if(!e||!i)return!1;var t=Object.keys(e),a=Object.keys(i),s=t.length;if(a.length!==s)return!1;for(var l=0;l<s;l++){var d=t[l];if(e[d]!==i[d]||!Object.prototype.hasOwnProperty.call(i,d))return!1}return!0}var ws={exports:{}},Ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd;function tR(){if(jd)return Ie;jd=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,g=e?Symbol.for("react.context"):60110,v=e?Symbol.for("react.async_mode"):60111,E=e?Symbol.for("react.concurrent_mode"):60111,m=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,A=e?Symbol.for("react.suspense_list"):60120,K=e?Symbol.for("react.memo"):60115,P=e?Symbol.for("react.lazy"):60116,c=e?Symbol.for("react.block"):60121,_=e?Symbol.for("react.fundamental"):60117,O=e?Symbol.for("react.responder"):60118,V=e?Symbol.for("react.scope"):60119;function S(y){if(typeof y=="object"&&y!==null){var M=y.$$typeof;switch(M){case i:switch(y=y.type,y){case v:case E:case a:case l:case s:case h:return y;default:switch(y=y&&y.$$typeof,y){case g:case m:case P:case K:case d:return y;default:return M}}case t:return M}}}function X(y){return S(y)===E}return Ie.AsyncMode=v,Ie.ConcurrentMode=E,Ie.ContextConsumer=g,Ie.ContextProvider=d,Ie.Element=i,Ie.ForwardRef=m,Ie.Fragment=a,Ie.Lazy=P,Ie.Memo=K,Ie.Portal=t,Ie.Profiler=l,Ie.StrictMode=s,Ie.Suspense=h,Ie.isAsyncMode=function(y){return X(y)||S(y)===v},Ie.isConcurrentMode=X,Ie.isContextConsumer=function(y){return S(y)===g},Ie.isContextProvider=function(y){return S(y)===d},Ie.isElement=function(y){return typeof y=="object"&&y!==null&&y.$$typeof===i},Ie.isForwardRef=function(y){return S(y)===m},Ie.isFragment=function(y){return S(y)===a},Ie.isLazy=function(y){return S(y)===P},Ie.isMemo=function(y){return S(y)===K},Ie.isPortal=function(y){return S(y)===t},Ie.isProfiler=function(y){return S(y)===l},Ie.isStrictMode=function(y){return S(y)===s},Ie.isSuspense=function(y){return S(y)===h},Ie.isValidElementType=function(y){return typeof y=="string"||typeof y=="function"||y===a||y===E||y===l||y===s||y===h||y===A||typeof y=="object"&&y!==null&&(y.$$typeof===P||y.$$typeof===K||y.$$typeof===d||y.$$typeof===g||y.$$typeof===m||y.$$typeof===_||y.$$typeof===O||y.$$typeof===V||y.$$typeof===c)},Ie.typeOf=S,Ie}var Ud;function aR(){return Ud||(Ud=1,ws.exports=tR()),ws.exports}var js,Hd;function iR(){if(Hd)return js;Hd=1;var e=aR(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=a,l[e.Memo]=s;function d(P){return e.isMemo(P)?s:l[P.$$typeof]||i}var g=Object.defineProperty,v=Object.getOwnPropertyNames,E=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,A=Object.prototype;function K(P,c,_){if(typeof c!="string"){if(A){var O=h(c);O&&O!==A&&K(P,O,_)}var V=v(c);E&&(V=V.concat(E(c)));for(var S=d(P),X=d(c),y=0;y<V.length;++y){var M=V[y];if(!t[M]&&!(_&&_[M])&&!(X&&X[M])&&!(S&&S[M])){var L=m(c,M);try{g(P,M,L)}catch{}}}}return P}return js=K,js}iR();var Ho=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=F.createContext(null)):F.createContext(null);Ho.Consumer;var sR=Ho.Provider,xd=sR,oR=Ho;function Cn(){var e=F.useContext(oR);return Xy(e),e}var lo;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(lo||(lo={}));var uo;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(uo||(uo={}));function Fk(e){var i=function(t){var a=Cn(),s=t.value,l=t.children,d=lt(t,["value","children"]),g=typeof s=="string"?new Date(s||0):s,v=e==="formatDate"?a.formatDateToParts(g,d):a.formatTimeToParts(g,d);return l(v)};return i.displayName=uo[e],i}function zt(e){var i=function(t){var a=Cn(),s=t.value,l=t.children,d=lt(t,["value","children"]),g=a[e](s,d);if(typeof l=="function")return l(g);var v=a.textComponent||F.Fragment;return F.createElement(v,null,g)};return i.displayName=lo[e],i}function Mk(e){return e&&Object.keys(e).reduce(function(i,t){var a=e[t];return i[t]=Ik(a)?rR(a):a,i},{})}var qd=function(e,i,t,a){for(var s=[],l=4;l<arguments.length;l++)s[l-4]=arguments[l];var d=Mk(a),g=oo.apply(void 0,rr([e,i,t,d],s,!1));return Array.isArray(g)?nR(g):g},lR=function(e,i){var t=e.defaultRichTextElements,a=lt(e,["defaultRichTextElements"]),s=Mk(t),l=Wy(ie(ie(ie({},Zy),a),{defaultRichTextElements:s}),i),d={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:s};return ie(ie({},l),{formatMessage:qd.bind(null,d,l.formatters),$t:qd.bind(null,d,l.formatters)})};function uR(e,i){var t=e.values,a=lt(e,["values"]),s=i.values,l=lt(i,["values"]);return wd(s,t)&&wd(a,l)}function Gk(e){var i=Cn(),t=i.formatMessage,a=i.textComponent,s=a===void 0?F.Fragment:a,l=e.id,d=e.description,g=e.defaultMessage,v=e.values,E=e.children,m=e.tagName,h=m===void 0?s:m,A=e.ignoreTag,K={id:l,description:d,defaultMessage:g},P=t(K,v,{ignoreTag:A});return typeof E=="function"?E(Array.isArray(P)?P:[P]):h?F.createElement(h,null,P):F.createElement(F.Fragment,null,P)}Gk.displayName="FormattedMessage";var Ke=F.memo(Gk,uR);Ke.displayName="MemoizedFormattedMessage";zt("formatDate");zt("formatTime");zt("formatNumber");zt("formatList");zt("formatDisplayName");Fk("formatDate");Fk("formatTime");let Yd=0;function dR(e){const[i,t]=F.useState(e),a=e||i;return F.useEffect(()=>{i==null&&(Yd+=1,t(`aksel-icon-${Yd}`))},[i]),a}const Cd=J.useId;function hr(e){var i;return Cd!==void 0?Cd().replace(/(:)/g,""):(i=dR(e))!==null&&i!==void 0?i:""}var gR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const kR=F.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=gR(e,["title","titleId"]);let l=hr();return l=t?a||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?F.createElement("title",{id:l},t):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var vR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const ER=F.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=vR(e,["title","titleId"]);let l=hr();return l=t?a||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?F.createElement("title",{id:l},t):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var mR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const fR=F.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=mR(e,["title","titleId"]);let l=hr();return l=t?a||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?F.createElement("title",{id:l},t):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var pR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Us=F.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=pR(e,["title","titleId"]);let l=hr();return l=t?a||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?F.createElement("title",{id:l},t):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12",clipRule:"evenodd"}))});var TR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const hR=F.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=TR(e,["title","titleId"]);let l=hr();return l=t?a||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?F.createElement("title",{id:l},t):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var cR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Bk=F.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=cR(e,["title","titleId"]);let l=hr();return l=t?a||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?F.createElement("title",{id:l},t):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var AR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const yR=F.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=AR(e,["title","titleId"]);let l=hr();return l=t?a||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?F.createElement("title",{id:l},t):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var RR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const _R=F.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=RR(e,["title","titleId"]);let l=hr();return l=t?a||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?F.createElement("title",{id:l},t):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var NR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const $d=F.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=NR(e,["title","titleId"]);let l=hr();return l=t?a||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?F.createElement("title",{id:l},t):null,F.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});function Vk(e){var i,t,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(i=0;i<s;i++)e[i]&&(t=Vk(e[i]))&&(a&&(a+=" "),a+=t)}else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function Xt(){for(var e,i,t=0,a="",s=arguments.length;t<s;t++)(e=arguments[t])&&(i=Vk(e))&&(a&&(a+=" "),a+=i);return a}function wk(e){return i=>{e.forEach(t=>{typeof t=="function"?t(i):t!=null&&(t.current=i)})}}function bR(...e){return J.useCallback(wk(e),e)}function SR(e,i){const t=Object.assign({},i);for(const a in i){const s=e[a],l=i[a];/^on[A-Z]/.test(a)?s&&l?t[a]=(...g)=>{l(...g),s(...g)}:s&&(t[a]=s):a==="style"?t[a]=Object.assign(Object.assign({},s),l):a==="className"&&(t[a]=[s,l].filter(Boolean).join(" "))}return Object.assign(Object.assign({},e),t)}var IR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Zt=F.forwardRef((e,i)=>{var t;const{children:a}=e,s=IR(e,["children"]);if(F.isValidElement(a)){const l=Object.prototype.propertyIsEnumerable.call(a.props,"ref")?a.props.ref:a.ref;return F.cloneElement(a,Object.assign(Object.assign({},SR(s,a.props)),{ref:i?wk([i,l]):l}))}if(F.Children.count(a)>1){const l=new Error("Aksel: Components using 'asChild' expects to recieve a single React element child.");throw l.name="SlotError",(t=Error.captureStackTrace)===null||t===void 0||t.call(Error,l,Zt),l}return null});var OR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};function LR(e,i){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${i}`}function jk(e={}){const{name:i,hookName:t="useContext",providerName:a="Provider",errorMessage:s,defaultValue:l}=e,d=F.createContext(l),g=F.forwardRef((E,m)=>{var{children:h}=E,A=OR(E,["children"]);const K=J.useMemo(()=>A,Object.values(A));return J.createElement(d.Provider,{value:m?Object.assign(Object.assign({},K),{ref:m}):K},h)});function v(E=!0){var m;const h=F.useContext(d);if(!h&&E){const A=new Error(s??LR(t,a));throw A.name="ContextError",(m=Error.captureStackTrace)===null||m===void 0||m.call(Error,A,v),A}return h}return d.displayName=i,[g,v]}const[KR,Ve]=jk({hookName:"useRenameCSS",name:"RenameCSS",providerName:"RenameCSSProvider",defaultValue:{cn:Xt}}),DR=(...e)=>Xt(e).replace(/^navds-/g,"aksel-").replace(/\snavds-/g," aksel-").trim(),PR=({children:e})=>J.createElement(KR,{cn:DR},e),[FR,vt]=jk({hookName:"useTheme",name:"ThemeProvider",providerName:"ThemeProvider"});F.forwardRef((e,i)=>{const t=vt(!1),{children:a,className:s,asChild:l=!1,theme:d=t==null?void 0:t.theme,hasBackground:g=!0}=e,E=g??(t===void 0&&e.theme!==void 0),m=l?Zt:"div";return J.createElement(FR,{theme:d},J.createElement(PR,null,J.createElement(m,{ref:i,className:Xt("aksel-theme",s,d),"data-background":E},a)))});const Et=e=>Xt({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var MR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const go=F.forwardRef((e,i)=>{var{className:t,size:a="medium",as:s="p",spacing:l,truncate:d,weight:g="regular",align:v,visuallyHidden:E,textColor:m}=e,h=MR(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:A}=Ve();return J.createElement(s,Object.assign({},h,{ref:i,className:A(t,"navds-body-long",`navds-body-long--${a}`,Et({spacing:l,truncate:d,weight:g,align:v,visuallyHidden:E,textColor:m}))}))});var GR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const ii=F.forwardRef((e,i)=>{var{className:t,size:a="medium",as:s="p",spacing:l,truncate:d,weight:g="regular",align:v,visuallyHidden:E,textColor:m}=e,h=GR(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:A}=Ve();return J.createElement(s,Object.assign({},h,{ref:i,className:A(t,"navds-body-short",`navds-body-short--${a}`,Et({spacing:l,truncate:d,weight:g,align:v,visuallyHidden:E,textColor:m}))}))});var BR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};F.forwardRef((e,i)=>{var{className:t,size:a="medium",spacing:s,uppercase:l,as:d="p",truncate:g,weight:v="regular",align:E,visuallyHidden:m,textColor:h}=e,A=BR(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:K}=Ve();return J.createElement(d,Object.assign({},A,{ref:i,className:K(t,"navds-detail",Et({spacing:s,truncate:g,weight:v,align:E,visuallyHidden:m,textColor:h,uppercase:l}),{"navds-detail--small":a==="small"})}))});var VR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const wR=F.forwardRef((e,i)=>{var{children:t,className:a,size:s,spacing:l,as:d="p",showIcon:g=!1}=e,v=VR(e,["children","className","size","spacing","as","showIcon"]);const{cn:E}=Ve();return J.createElement(d,Object.assign({},v,{ref:i,className:E("navds-error-message","navds-label",a,Et({spacing:l}),{"navds-label--small":s==="small","navds-error-message--show-icon":g})}),g&&J.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},J.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var jR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Uk=F.forwardRef((e,i)=>{var{level:t="1",size:a,className:s,as:l,spacing:d,align:g,visuallyHidden:v,textColor:E}=e,m=jR(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:h}=Ve(),A=l??`h${t}`;return J.createElement(A,Object.assign({},m,{ref:i,className:h(s,"navds-heading",`navds-heading--${a}`,Et({spacing:d,align:g,visuallyHidden:v,textColor:E}))}))});var UR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};F.forwardRef((e,i)=>{var{className:t,spacing:a,as:s="p"}=e,l=UR(e,["className","spacing","as"]);const{cn:d}=Ve();return J.createElement(s,Object.assign({},l,{ref:i,className:d(t,"navds-ingress",{"navds-typo--spacing":!!a})}))});var HR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const xo=F.forwardRef((e,i)=>{var{className:t,size:a="medium",as:s="label",spacing:l,visuallyHidden:d,textColor:g}=e,v=HR(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:E}=Ve();return J.createElement(s,Object.assign({},v,{ref:i,className:E(t,"navds-label",Et({spacing:l,visuallyHidden:d,textColor:g}),{"navds-label--small":a==="small"})}))});function Qt(e,i){const t=Object.entries(e).filter(([a])=>!i.includes(a));return Object.fromEntries(t)}let Jd=0;function xR(e){const[i,t]=F.useState(e),a=e||i;return F.useEffect(()=>{i==null&&(Jd+=1,t(`aksel-id-${Jd}`))},[i]),a}const Wd=J.useId;function qo(e){var i;return Wd!==void 0?Wd().replace(/(:)/g,""):(i=xR(e))!==null&&i!==void 0?i:""}function zd(e,i=[]){const t=F.useRef(e);return F.useEffect(()=>{t.current=e}),F.useCallback((...a)=>{var s;return(s=t.current)===null||s===void 0?void 0:s.call(t,...a)},i)}function qR({value:e,defaultValue:i,onChange:t}){const a=zd(t),[s,l]=F.useState(i),d=e!==void 0,g=d?e:s,v=zd(E=>{const h=typeof E=="function"?E(g):E;d||l(h),a(h)},[d,a,g]);return[g,v]}function Yo(e,i,{checkForDefaultPrevented:t=!0}={}){return function(s){if(e==null||e(s),t===!1||!s.defaultPrevented)return i==null?void 0:i(s)}}function Hs(e){return(i={})=>{const t=i.width?String(i.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function Mt(e){return(i,t)=>{const a=t!=null&&t.context?String(t.context):"standalone";let s;if(a==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,g=t!=null&&t.width?String(t.width):d;s=e.formattingValues[g]||e.formattingValues[d]}else{const d=e.defaultWidth,g=t!=null&&t.width?String(t.width):e.defaultWidth;s=e.values[g]||e.values[d]}const l=e.argumentCallback?e.argumentCallback(i):i;return s[l]}}function Gt(e){return(i,t={})=>{const a=t.width,s=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],l=i.match(s);if(!l)return null;const d=l[0],g=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],v=Array.isArray(g)?CR(g,h=>h.test(d)):YR(g,h=>h.test(d));let E;E=e.valueCallback?e.valueCallback(v):v,E=t.valueCallback?t.valueCallback(E):E;const m=i.slice(d.length);return{value:E,rest:m}}}function YR(e,i){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&i(e[t]))return t}function CR(e,i){for(let t=0;t<e.length;t++)if(i(e[t]))return t}function $R(e){return(i,t={})=>{const a=i.match(e.matchPattern);if(!a)return null;const s=a[0],l=i.match(e.parsePattern);if(!l)return null;let d=e.valueCallback?e.valueCallback(l[0]):l[0];d=t.valueCallback?t.valueCallback(d):d;const g=i.slice(s.length);return{value:d,rest:g}}}const JR={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},WR=(e,i,t)=>{let a;const s=JR[e];return typeof s=="string"?a=s:i===1?a=s.one:a=s.other.replace("{{count}}",String(i)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"om "+a:a+" siden":a},zR={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},XR={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ZR={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},QR={date:Hs({formats:zR,defaultWidth:"full"}),time:Hs({formats:XR,defaultWidth:"full"}),dateTime:Hs({formats:ZR,defaultWidth:"full"})},e_={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},n_=(e,i,t,a)=>e_[e],r_={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},t_={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},a_={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},i_={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},s_={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},o_=(e,i)=>Number(e)+".",l_={ordinalNumber:o_,era:Mt({values:r_,defaultWidth:"wide"}),quarter:Mt({values:t_,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Mt({values:a_,defaultWidth:"wide"}),day:Mt({values:i_,defaultWidth:"wide"}),dayPeriod:Mt({values:s_,defaultWidth:"wide"})},u_=/^(\d+)\.?/i,d_=/\d+/i,g_={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},k_={any:[/^f/i,/^e/i]},v_={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},E_={any:[/1/i,/2/i,/3/i,/4/i]},m_={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},f_={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},p_={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},T_={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},h_={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},c_={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},A_={ordinalNumber:$R({matchPattern:u_,parsePattern:d_,valueCallback:e=>parseInt(e,10)}),era:Gt({matchPatterns:g_,defaultMatchWidth:"wide",parsePatterns:k_,defaultParseWidth:"any"}),quarter:Gt({matchPatterns:v_,defaultMatchWidth:"wide",parsePatterns:E_,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Gt({matchPatterns:m_,defaultMatchWidth:"wide",parsePatterns:f_,defaultParseWidth:"any"}),day:Gt({matchPatterns:p_,defaultMatchWidth:"wide",parsePatterns:T_,defaultParseWidth:"any"}),dayPeriod:Gt({matchPatterns:h_,defaultMatchWidth:"any",parsePatterns:c_,defaultParseWidth:"any"})},y_={code:"nb",formatDistance:WR,formatLong:QR,formatRelative:n_,localize:l_,match:A_,options:{weekStartsOn:1,firstWeekContainsDate:4}},R_={global:{dateLocale:y_,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},__=F.createContext({locale:R_}),N_=()=>F.useContext(__),Xd=/(\w+)/g;function b_(e,i){const t=Array.isArray(e)?e:S_(e);for(const a of i){if(!a)continue;let s=a;for(let l=0;l<t.length;l++){const d=s[t[l]];d!==void 0&&(s=d)}if(typeof s=="string")return s}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function S_(e){const i=[];let t=Xd.exec(e);for(;t;){const[,a,s]=t;i.push(a||s),t=Xd.exec(e)}return i}const I_=/{[^}]*}/g;function si(e,...i){const t=N_(),a=t.translations||[],s=[...i,...Array.isArray(a)?a.map(d=>d[e]):[a[e]],t.locale[e]];return(d,g)=>{const v=b_(d,s);return g?v.replace(I_,E=>{const m=E.substring(1,E.length-1);if(g[m]===void 0){const h=JSON.stringify(g);throw new Error(`Error translating key '${d}'. No replacement syntax ({}) found for key '${m}'. The following replacements were passed: '${h}'`)}return g[m]}):v}}var O_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const L_=F.forwardRef((e,i)=>{var{className:t,size:a="medium",title:s,transparent:l=!1,variant:d="neutral",id:g}=e,v=O_(e,["className","size","title","transparent","variant","id"]);const{cn:E}=Ve(),m=qo(),h=si("Loader");return J.createElement("svg",Object.assign({"aria-labelledby":g??`loader-${m}`,ref:i,className:E("navds-loader",t,`navds-loader--${a}`,`navds-loader--${d}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},Qt(v,["children"])),J.createElement("title",{id:g??`loader-${m}`},s||h("title")),J.createElement("circle",{className:E("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),J.createElement("circle",{className:E("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var K_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Co=F.forwardRef((e,i)=>{var{as:t="button",variant:a="primary",className:s,children:l,size:d="medium",loading:g=!1,disabled:v,icon:E,iconPosition:m="left",onKeyUp:h}=e,A=K_(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp"]);const{cn:K}=Ve(),P=v||g?Qt(A,["href"]):A,c=_=>{_.key===" "&&!v&&!g&&_.currentTarget.click()};return J.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},P,{ref:i,onKeyUp:Yo(h,c),className:K(s,"navds-button",`navds-button--${a}`,`navds-button--${d}`,{"navds-button--loading":g,"navds-button--icon-only":!!E&&!l,"navds-button--disabled":v??g}),disabled:v??g?!0:void 0}),E&&m==="left"&&J.createElement("span",{className:K("navds-button__icon")},E),g&&J.createElement(L_,{size:d}),l&&J.createElement(xo,{as:"span",size:d==="medium"?"medium":"small"},l),E&&m==="right"&&J.createElement("span",{className:K("navds-button__icon")},E))}),D_=F.createContext(null),P_=(e,i)=>{var t,a,s;const{size:l,error:d,errorId:g}=e,v=F.useContext(D_),E=qo(),m=(t=e.id)!==null&&t!==void 0?t:`${i}-${E}`,h=g??`${i}-error-${E}`,A=`${i}-description-${E}`,K=(v==null?void 0:v.disabled)||e.disabled,P=((v==null?void 0:v.readOnly)||e.readOnly)&&!K||void 0,c=!K&&!P&&!!(d||v!=null&&v.error),_=!K&&!P&&!!d&&typeof d!="boolean",O=Object.assign({},c?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:_,hasError:c,errorId:h,inputDescriptionId:A,size:(a=l??(v==null?void 0:v.size))!==null&&a!==void 0?a:"medium",readOnly:P,inputProps:Object.assign(Object.assign({id:m},O),{"aria-describedby":Xt(e["aria-describedby"],{[A]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[h]:_,[(s=v==null?void 0:v.errorId)!==null&&s!==void 0?s:""]:c&&!!(v!=null&&v.error)})||void 0,disabled:K})}};function nn(e,i,t,a){return a?typeof a=="string"?{[`--__${e}c-${i}-${t}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([s,l])=>[`--__${e}c-${i}-${t}-${s}`,l])):{}}const F_={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Zd=(e,i,t,a,s,l)=>i.split(" ").map((d,g,v)=>{var E;if(e==="margin-inline"&&d==="full")return`calc((100vw - ${100/v.length}%)/-2)`;if(e==="padding-inline"&&d==="full")return`calc((100vw - ${100/v.length}%)/2)`;if(["mi","mb"].includes(e)&&d==="auto")return"auto";let m=`var(--${l}-${t}-${d})`;if(a.includes(d))m=d==="px"?"1px":d;else if(d.startsWith("space"))m=`var(--${l}-${d})`;else{const h=`--${l}-spacing-${d}`;m=`var(${(E=F_[h])!==null&&E!==void 0?E:h})`}return s?d==="0"?"0":`calc(-1 * ${m})`:m}).join(" ");function On(e,i,t,a,s,l=!1,d=[]){if(!s)return{};if(typeof s=="string")return{[`--__${e}c-${i}-${t}-xs`]:Zd(t,s,a,d,l,e)};const g={};return Object.entries(s).forEach(([v,E])=>{g[`--__${e}c-${i}-${t}-${v}`]=Zd(t,E,a,d,l,e)}),g}const Hk=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],xk=({children:e,className:i,padding:t,paddingInline:a,paddingBlock:s,margin:l,marginInline:d,marginBlock:g,width:v,minWidth:E,maxWidth:m,height:h,minHeight:A,maxHeight:K,position:P,inset:c,top:_,right:O,left:V,bottom:S,overflow:X,overflowX:y,overflowY:M,flexBasis:L,flexGrow:I,flexShrink:Y,gridColumn:z})=>{const U=vt(!1),{cn:ne}=Ve(),W=U?"ax":"a",C=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},On(W,"r","p","spacing",t)),On(W,"r","pi","spacing",a)),On(W,"r","pb","spacing",s)),On(W,"r","m","spacing",l)),On(W,"r","mi","spacing",d)),On(W,"r","mb","spacing",g)),nn(W,"r","w",v)),nn(W,"r","minw",E)),nn(W,"r","maxw",m)),nn(W,"r","h",h)),nn(W,"r","minh",A)),nn(W,"r","maxh",K)),nn(W,"r","position",P)),On(W,"r","inset","spacing",c)),On(W,"r","top","spacing",_)),On(W,"r","right","spacing",O)),On(W,"r","bottom","spacing",S)),On(W,"r","left","spacing",V)),nn(W,"r","overflow",X)),nn(W,"r","overflowx",y)),nn(W,"r","overflowy",M)),nn(W,"r","flex-basis",L)),nn(W,"r","flex-grow",I)),nn(W,"r","flex-shrink",Y)),nn(W,"r","grid-column",z));return J.createElement(Zt,{className:ne({className:i,"navds-r-p":t,"navds-r-pi":a,"navds-r-pb":s,"navds-r-m":l,"navds-r-mi":d,"navds-r-mb":g,"navds-r-w":v,"navds-r-minw":E,"navds-r-maxw":m,"navds-r-h":h,"navds-r-minh":A,"navds-r-maxh":K,"navds-r-position":P,"navds-r-inset":c,"navds-r-top":_,"navds-r-right":O,"navds-r-bottom":S,"navds-r-left":V,"navds-r-overflow":X,"navds-r-overflowx":y,"navds-r-overflowy":M,"navds-r-flex-basis":L,"navds-r-flex-grow":I,"navds-r-flex-shrink":Y,"navds-r-grid-column":z}),style:C},e)};var M_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const G_=F.forwardRef((e,i)=>{var{children:t,className:a,as:s="div",columns:l,gap:d,style:g,align:v,asChild:E}=e,m=M_(e,["children","className","as","columns","gap","style","align","asChild"]);const A=vt(!1)?"ax":"a",{cn:K}=Ve(),P=Object.assign(Object.assign(Object.assign(Object.assign({},g),{[`--__${A}c-hgrid-align`]:v}),On(A,"hgrid","gap","spacing",d)),nn(A,"hgrid","columns",B_(l))),c=E?Zt:s;return J.createElement(xk,Object.assign({},m),J.createElement(c,Object.assign({},Qt(m,Hk),{ref:i,className:K("navds-hgrid",a,{"navds-hgrid-gap":d,"navds-hgrid-align":v}),style:P}),t))});function B_(e){return e?typeof e=="string"||typeof e=="number"?Qd(e):Object.fromEntries(Object.entries(e).map(([i,t])=>[i,Qd(t)])):{}}const Qd=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var V_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const qk=F.forwardRef((e,i)=>{var{children:t,className:a,as:s="div",align:l,justify:d,wrap:g=!0,gap:v,style:E,direction:m="row",asChild:h}=e,A=V_(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const P=vt(!1)?"ax":"a",{cn:c}=Ve(),_=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},E),On(P,"stack","gap","spacing",v)),nn(P,"stack","direction",m)),nn(P,"stack","align",l)),nn(P,"stack","justify",d)),O=h?Zt:s;return J.createElement(xk,Object.assign({},A),J.createElement(O,Object.assign({},Qt(A,Hk),{ref:i,style:_,className:c("navds-stack",a,{"navds-vstack":m==="column","navds-hstack":m==="row","navds-stack-gap":v,"navds-stack-align":l,"navds-stack-justify":d,"navds-stack-direction":m,"navds-stack-wrap":g})}),t))});var w_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const st=F.forwardRef((e,i)=>{var{as:t="div"}=e,a=w_(e,["as"]);return J.createElement(qk,Object.assign({as:t},a,{ref:i,direction:"row"}))});var j_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const oi=F.forwardRef((e,i)=>{var{as:t="div"}=e,a=j_(e,["as"]);return J.createElement(qk,Object.assign({as:t},a,{ref:i,direction:"column",wrap:!1}))}),ni=F.createContext({listType:"ul",size:"medium"});var U_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Yk=F.forwardRef((e,i)=>{var{className:t,children:a,title:s,icon:l}=e,d=U_(e,["className","children","title","icon"]);const{listType:g,size:v}=F.useContext(ni),{cn:E}=Ve();return g==="ol"&&l&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),J.createElement("li",Object.assign({},d,{ref:i,className:E("navds-list__item",t)}),g==="ul"&&J.createElement("div",{className:E("navds-list__item-marker",{"navds-list__item-marker--icon":l,"navds-list__item-marker--bullet":!l})},l||J.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},J.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),J.createElement("div",null,s&&J.createElement(go,{as:"p",size:v,weight:"semibold"},s),a))});Yk.displayName="List.Item";var H_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const x_={small:"xsmall",medium:"small",large:"medium"},ko=F.forwardRef((e,i)=>{var{children:t,className:a,as:s="ul",title:l,description:d,headingTag:g,size:v,"aria-label":E,"aria-labelledby":m}=e,h=H_(e,["children","className","as","title","description","headingTag","size","aria-label","aria-labelledby"]);const{size:A}=F.useContext(ni),{cn:K}=Ve(),P=vt(!1),c=v??A;return P?J.createElement(ni.Provider,{value:{listType:s,size:c}},J.createElement(go,Object.assign({as:"div"},h,{size:c,ref:i,className:K("navds-list",`navds-list--${c}`,a)}),J.createElement(s,{role:"list","aria-label":E,"aria-labelledby":m},t))):J.createElement(ni.Provider,{value:{listType:s,size:c}},J.createElement(go,Object.assign({as:"div"},h,{size:c,ref:i,className:K("navds-list",`navds-list--${c}`,a)}),l&&J.createElement(Uk,{size:x_[c],as:g??"h3"},l),d&&J.createElement(ii,{size:c},d),J.createElement(s,{role:"list","aria-label":E,"aria-labelledby":m},t)))});ko.Item=Yk;var q_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Y_=F.forwardRef((e,i)=>{var{className:t}=e,a=q_(e,["className"]);const{cn:s}=Ve();return J.createElement("tbody",Object.assign({},a,{ref:i,className:s("navds-table__body",t)}))});var C_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Ck=F.forwardRef((e,i)=>{var{className:t,children:a,align:s,textSize:l}=e,d=C_(e,["className","children","align","textSize"]);const{cn:g}=Ve();return J.createElement("th",Object.assign({ref:i,className:g("navds-table__header-cell","navds-label",t,{[`navds-table__header-cell--align-${s}`]:s,"navds-label--small":l==="small"})},d),a)}),$k=F.createContext(null);var $_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const J_=F.forwardRef((e,i)=>{var t,a,s,l,{className:d,children:g,sortable:v=!1,sortKey:E}=e,m=$_(e,["className","children","sortable","sortKey"]);const h=F.useContext($k),{cn:A}=Ve();return v&&!E&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),J.createElement(Ck,Object.assign({scope:"col",ref:i,className:A(d),"aria-sort":v?((t=h==null?void 0:h.sort)===null||t===void 0?void 0:t.orderBy)===E?(a=h==null?void 0:h.sort)===null||a===void 0?void 0:a.direction:"none":void 0},m),v?J.createElement("button",{type:"button",className:A("navds-table__sort-button"),onClick:v&&E?()=>{var K;return(K=h==null?void 0:h.onSortChange)===null||K===void 0?void 0:K.call(h,E)}:void 0},g,((s=h==null?void 0:h.sort)===null||s===void 0?void 0:s.orderBy)===E?((l=h==null?void 0:h.sort)===null||l===void 0?void 0:l.direction)==="descending"?J.createElement(yR,{"aria-hidden":!0}):J.createElement(_R,{"aria-hidden":!0}):J.createElement(ER,{"aria-hidden":!0})):g)});var W_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Jk=F.forwardRef((e,i)=>{var{className:t,children:a="",align:s,textSize:l}=e,d=W_(e,["className","children","align","textSize"]);const{cn:g}=Ve();return J.createElement(ii,Object.assign({as:"td",ref:i,className:g("navds-table__data-cell",t,{[`navds-table__data-cell--align-${s}`]:s}),size:l},d),a)});var z_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const X_=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function Z_(e){const i=parseFloat(e);return!Number.isNaN(i)&&Number.isFinite(i)}function eg(e){return typeof e=="string"&&e[e.length-1]==="%"&&Z_(e.substring(0,e.length-1))}function xs(e,i){i===0&&(e!=null&&e.style)&&(e.style.display="none")}function Q_(e,i){i===0&&(e!=null&&e.style)&&(e.style.display="")}const eN=e=>{var{children:i,className:t,innerClassName:a,duration:s=250,easing:l="ease",height:d}=e,g=z_(e,["children","className","innerClassName","duration","easing","height"]);const{cn:v}=Ve(),E=F.useRef(d),m=F.useRef(null),h=F.useRef(),A=F.useRef(),K=F.useRef(d),P=F.useRef("visible"),c=X_?0:s;typeof K.current=="number"?(typeof d!="string"&&(K.current=d<0?0:d),P.current="hidden"):eg(K.current)&&(K.current=d==="0%"?0:d,P.current="hidden");const[_,O]=F.useState(K.current),[V,S]=F.useState(P.current),[X,y]=F.useState(!1);F.useEffect(()=>{xs(m.current,K.current)},[]),F.useEffect(()=>{if(d!==E.current&&m.current){Q_(m.current,E.current),m.current.style.overflow="hidden";const Y=m.current.offsetHeight;m.current.style.overflow="";const z=c;let U,ne,W="hidden",C;const x=E.current==="auto";typeof d=="number"?(U=d<0?0:d,ne=U):eg(d)?(U=d==="0%"?0:d,ne=U):(U=Y,ne="auto",W=void 0),x&&(ne=U,U=Y),O(U),S("hidden"),y(!x),clearTimeout(A.current),clearTimeout(h.current),x?(C=!0,A.current=setTimeout(()=>{O(ne),S(W),y(C)},50),h.current=setTimeout(()=>{y(!1),xs(m.current,ne)},z)):A.current=setTimeout(()=>{O(ne),S(W),y(!1),d!=="auto"&&xs(m.current,U)},z)}return E.current=d,()=>{clearTimeout(A.current),clearTimeout(h.current)}},[d]);const M={height:_,overflow:V};X&&(M.transition=`height ${c}ms ${l} 0ms`,M.WebkitTransition=M.transition);const I=typeof g["aria-hidden"]<"u"?g["aria-hidden"]:d===0;return J.createElement("div",Object.assign({},g,{className:v(t),style:M}),J.createElement("div",{"aria-hidden":I,className:v(a),ref:m},i))};var nN=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Wk=F.forwardRef((e,i)=>{var{className:t,selected:a=!1,shadeOnHover:s=!0}=e,l=nN(e,["className","selected","shadeOnHover"]);const{cn:d}=Ve();return J.createElement("tr",Object.assign({},l,{ref:i,className:d("navds-table__row",t,{"navds-table__row--selected":a,"navds-table__row--shade-on-hover":s})}))});var rN=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const tN=F.forwardRef((e,i)=>{var{className:t,children:a,content:s,togglePlacement:l="left",defaultOpen:d=!1,open:g,onOpenChange:v,expansionDisabled:E=!1,expandOnRowClick:m=!1,colSpan:h=999,contentGutter:A,onClick:K}=e,P=rN(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:c}=Ve(),[_,O]=qR({defaultValue:d,value:g,onChange:v}),V=si("global"),S=qo(),X=M=>{O(L=>!L),M.stopPropagation()},y=M=>{m&&!E&&!zk(M.target)&&X(M)};return J.createElement(J.Fragment,null,J.createElement(Wk,Object.assign({},P,{ref:i,className:c("navds-table__expandable-row",t,{"navds-table__expandable-row--open":_,"navds-table__expandable-row--expansion-disabled":E,"navds-table__expandable-row--clickable":m}),onClick:Yo(K,y)}),l==="right"&&a,J.createElement(Jk,{className:c("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":_}),onClick:E?()=>null:X},!E&&J.createElement("button",{className:c("navds-table__toggle-expand-button"),type:"button","aria-controls":S,"aria-expanded":_,onClick:X},J.createElement(fR,{className:c("navds-table__expandable-icon"),title:V(_?"showLess":"showMore")}))),l==="left"&&a),J.createElement("tr",{"data-state":_?"open":"closed",className:c("navds-table__expanded-row"),"aria-hidden":!_,id:S},J.createElement("td",{colSpan:h,className:c("navds-table__expanded-row-cell")},J.createElement(eN,{className:c("navds-table__expanded-row-collapse"),innerClassName:c(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${A??l}`),height:_?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},s))))});function zk(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:zk(e.parentElement)}var aN=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const iN=F.forwardRef((e,i)=>{var{className:t}=e,a=aN(e,["className"]);const{cn:s}=Ve();return J.createElement("thead",Object.assign({},a,{ref:i,className:s("navds-table__header",t)}))});var sN=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const He=F.forwardRef((e,i)=>{var{className:t,zebraStripes:a=!1,size:s="medium",onSortChange:l,sort:d}=e,g=sN(e,["className","zebraStripes","size","onSortChange","sort"]);const{cn:v}=Ve();return J.createElement($k.Provider,{value:{onSortChange:l,sort:d}},J.createElement("table",Object.assign({},g,{ref:i,className:v("navds-table",`navds-table--${s}`,t,{"navds-table--zebra-stripes":a})})))});He.Header=iN;He.Body=Y_;He.Row=Wk;He.ColumnHeader=J_;He.HeaderCell=Ck;He.DataCell=Jk;He.ExpandableRow=tN;const Xk=F.createContext(null);var oN=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Zk=F.forwardRef((e,i)=>{var t,{className:a,children:s,disabled:l,onClick:d}=e,g=oN(e,["className","children","disabled","onClick"]);const{cn:v}=Ve(),E=si("Search"),m=F.useContext(Xk);if(m===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:h,variant:A,handleClick:K}=m;return J.createElement(Co,Object.assign({type:"submit"},g,{ref:i,size:h,variant:A==="secondary"?"secondary":"primary",className:v("navds-search__button-search",a),disabled:(t=m==null?void 0:m.disabled)!==null&&t!==void 0?t:l,onClick:Yo(d,K),icon:J.createElement(Bk,Object.assign({},s?{"aria-hidden":!0}:{title:E("search")}))}),s)});var lN=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const vo=F.forwardRef((e,i)=>{const{inputProps:t,size:a="medium",inputDescriptionId:s,errorId:l,showErrorMsg:d,hasError:g}=P_(e,"searchfield"),{className:v,hideLabel:E=!0,label:m,description:h,value:A,clearButtonLabel:K,onClear:P,clearButton:c=!0,children:_,variant:O="primary",defaultValue:V,onChange:S,onSearchClick:X,htmlSize:y}=e,M=lN(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize"]),{cn:L}=Ve(),I=vt(!1),Y=F.useRef(null),z=bR(Y,i),U=si("Search"),[ne,W]=F.useState(V??""),C=ee=>{A===void 0&&W(ee),S==null||S(ee)},x=ee=>{var ae,re;P==null||P(ee),C(""),(re=(ae=Y.current)===null||ae===void 0?void 0:ae.focus)===null||re===void 0||re.call(ae)},$=()=>{X==null||X(`${A??ne}`)},Z=c&&!t.disabled&&(A??ne),q=()=>I?J.createElement(Co,{className:L("navds-search__button-clear"),variant:"tertiary-neutral",size:a==="medium"?"small":"xsmall",icon:J.createElement($d,{"aria-hidden":!0}),title:K||U("clear"),hidden:!Z,onClick:ee=>x({trigger:"Click",event:ee})}):J.createElement("button",{type:"button",onClick:ee=>x({trigger:"Click",event:ee}),className:L("navds-search__button-clear"),hidden:!Z},J.createElement("span",{className:L("navds-sr-only")},K||U("clear")),J.createElement($d,{"aria-hidden":!0}));return J.createElement("div",{onKeyDown:ee=>{var ae;ee.key==="Escape"&&(!((ae=Y.current)===null||ae===void 0)&&ae.value&&ee.preventDefault(),x({trigger:"Escape",event:ee}))},className:L(v,"navds-form-field",`navds-form-field--${a}`,"navds-search",{"navds-search--error":g,"navds-search--disabled":t.disabled,"navds-search--with-size":y})},J.createElement(xo,{htmlFor:t.id,size:a,className:L("navds-form-field__label",{"navds-sr-only":E})},m),!!h&&J.createElement(ii,{className:L("navds-form-field__description",{"navds-sr-only":E}),id:s,size:a,as:"div"},h),J.createElement("div",{className:L("navds-search__wrapper")},J.createElement("div",{className:L("navds-search__wrapper-inner")},O==="simple"&&J.createElement(Bk,{"aria-hidden":!0,className:L("navds-search__search-icon")}),J.createElement("input",Object.assign({ref:z},Qt(M,["error","errorId","size","readOnly"]),t,{value:A??ne,onChange:ee=>C(ee.target.value),type:"search",className:L(v,"navds-search__input",`navds-search__input--${O}`,"navds-text-field__input","navds-body-short",`navds-body-short--${a}`)},y?{size:Number(y)}:{})),J.createElement(q,null)),J.createElement(Xk.Provider,{value:{size:a,disabled:t.disabled,variant:O,handleClick:$}},_||O!=="simple"&&J.createElement(Zk,null))),J.createElement("div",{className:L("navds-form-field__error"),id:l,"aria-relevant":"additions removals","aria-live":"polite"},d&&J.createElement(wR,{size:a,showIcon:!0},e.error)))});vo.Button=Zk;const uN=e=>{if(e==null)return;const i=e.toString().replace(/\s/g,"");if(!Number.isNaN(i))return Number(Math.round(parseFloat(i))).toLocaleString("nb-NO").replace(/,|\s/g," ")};function $o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Eo={exports:{}},dN=Eo.exports,ng;function gN(){return ng||(ng=1,function(e,i){(function(t,a){e.exports=a()})(dN,function(){var t,a,s=1e3,l=6e4,d=36e5,g=864e5,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,E=31536e6,m=2628e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,A={years:E,months:m,days:g,hours:d,minutes:l,seconds:s,milliseconds:1,weeks:6048e5},K=function(M){return M instanceof X},P=function(M,L,I){return new X(M,I,L.$l)},c=function(M){return a.p(M)+"s"},_=function(M){return M<0},O=function(M){return _(M)?Math.ceil(M):Math.floor(M)},V=function(M){return Math.abs(M)},S=function(M,L){return M?_(M)?{negative:!0,format:""+V(M)+L}:{negative:!1,format:""+M+L}:{negative:!1,format:""}},X=function(){function M(I,Y,z){var U=this;if(this.$d={},this.$l=z,I===void 0&&(this.$ms=0,this.parseFromMilliseconds()),Y)return P(I*A[c(Y)],this);if(typeof I=="number")return this.$ms=I,this.parseFromMilliseconds(),this;if(typeof I=="object")return Object.keys(I).forEach(function(C){U.$d[c(C)]=I[C]}),this.calMilliseconds(),this;if(typeof I=="string"){var ne=I.match(h);if(ne){var W=ne.slice(2).map(function(C){return C!=null?Number(C):0});return this.$d.years=W[0],this.$d.months=W[1],this.$d.weeks=W[2],this.$d.days=W[3],this.$d.hours=W[4],this.$d.minutes=W[5],this.$d.seconds=W[6],this.calMilliseconds(),this}}return this}var L=M.prototype;return L.calMilliseconds=function(){var I=this;this.$ms=Object.keys(this.$d).reduce(function(Y,z){return Y+(I.$d[z]||0)*A[z]},0)},L.parseFromMilliseconds=function(){var I=this.$ms;this.$d.years=O(I/E),I%=E,this.$d.months=O(I/m),I%=m,this.$d.days=O(I/g),I%=g,this.$d.hours=O(I/d),I%=d,this.$d.minutes=O(I/l),I%=l,this.$d.seconds=O(I/s),I%=s,this.$d.milliseconds=I},L.toISOString=function(){var I=S(this.$d.years,"Y"),Y=S(this.$d.months,"M"),z=+this.$d.days||0;this.$d.weeks&&(z+=7*this.$d.weeks);var U=S(z,"D"),ne=S(this.$d.hours,"H"),W=S(this.$d.minutes,"M"),C=this.$d.seconds||0;this.$d.milliseconds&&(C+=this.$d.milliseconds/1e3,C=Math.round(1e3*C)/1e3);var x=S(C,"S"),$=I.negative||Y.negative||U.negative||ne.negative||W.negative||x.negative,Z=ne.format||W.format||x.format?"T":"",q=($?"-":"")+"P"+I.format+Y.format+U.format+Z+ne.format+W.format+x.format;return q==="P"||q==="-P"?"P0D":q},L.toJSON=function(){return this.toISOString()},L.format=function(I){var Y=I||"YYYY-MM-DDTHH:mm:ss",z={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return Y.replace(v,function(U,ne){return ne||String(z[U])})},L.as=function(I){return this.$ms/A[c(I)]},L.get=function(I){var Y=this.$ms,z=c(I);return z==="milliseconds"?Y%=1e3:Y=z==="weeks"?O(Y/A[z]):this.$d[z],Y||0},L.add=function(I,Y,z){var U;return U=Y?I*A[c(Y)]:K(I)?I.$ms:P(I,this).$ms,P(this.$ms+U*(z?-1:1),this)},L.subtract=function(I,Y){return this.add(I,Y,!0)},L.locale=function(I){var Y=this.clone();return Y.$l=I,Y},L.clone=function(){return P(this.$ms,this)},L.humanize=function(I){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!I)},L.valueOf=function(){return this.asMilliseconds()},L.milliseconds=function(){return this.get("milliseconds")},L.asMilliseconds=function(){return this.as("milliseconds")},L.seconds=function(){return this.get("seconds")},L.asSeconds=function(){return this.as("seconds")},L.minutes=function(){return this.get("minutes")},L.asMinutes=function(){return this.as("minutes")},L.hours=function(){return this.get("hours")},L.asHours=function(){return this.as("hours")},L.days=function(){return this.get("days")},L.asDays=function(){return this.as("days")},L.weeks=function(){return this.get("weeks")},L.asWeeks=function(){return this.as("weeks")},L.months=function(){return this.get("months")},L.asMonths=function(){return this.as("months")},L.years=function(){return this.get("years")},L.asYears=function(){return this.as("years")},M}(),y=function(M,L,I){return M.add(L.years()*I,"y").add(L.months()*I,"M").add(L.days()*I,"d").add(L.hours()*I,"h").add(L.minutes()*I,"m").add(L.seconds()*I,"s").add(L.milliseconds()*I,"ms")};return function(M,L,I){t=I,a=I().$utils(),I.duration=function(U,ne){var W=I.locale();return P(U,{$l:W},ne)},I.isDuration=K;var Y=L.prototype.add,z=L.prototype.subtract;L.prototype.add=function(U,ne){return K(U)?y(this,U,1):Y.bind(this)(U,ne)},L.prototype.subtract=function(U,ne){return K(U)?y(this,U,-1):z.bind(this)(U,ne)}}})}(Eo)),Eo.exports}var kN=gN();const vN=$o(kN);var mo={exports:{}},EN=mo.exports,rg;function mN(){return rg||(rg=1,function(e,i){(function(t,a){e.exports=a()})(EN,function(){var t="day";return function(a,s,l){var d=function(E){return E.add(4-E.isoWeekday(),t)},g=s.prototype;g.isoWeekYear=function(){return d(this).year()},g.isoWeek=function(E){if(!this.$utils().u(E))return this.add(7*(E-this.isoWeek()),t);var m,h,A,K,P=d(this),c=(m=this.isoWeekYear(),h=this.$u,A=(h?l.utc:l)().year(m).startOf("year"),K=4-A.isoWeekday(),A.isoWeekday()>4&&(K+=7),A.add(K,t));return P.diff(c,"week")+1},g.isoWeekday=function(E){return this.$utils().u(E)?this.day()||7:this.day(this.day()%7?E:E-7)};var v=g.startOf;g.startOf=function(E,m){var h=this.$utils(),A=!!h.u(m)||m;return h.p(E)==="isoweek"?A?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):v.bind(this)(E,m)}}})}(mo)),mo.exports}var fN=mN();const pN=$o(fN);var fo={exports:{}},TN=fo.exports,tg;function hN(){return tg||(tg=1,function(e,i){(function(t,a){e.exports=a()})(TN,function(){var t="minute",a=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(l,d,g){var v=d.prototype;g.utc=function(c){var _={date:c,utc:!0,args:arguments};return new d(_)},v.utc=function(c){var _=g(this.toDate(),{locale:this.$L,utc:!0});return c?_.add(this.utcOffset(),t):_},v.local=function(){return g(this.toDate(),{locale:this.$L,utc:!1})};var E=v.parse;v.parse=function(c){c.utc&&(this.$u=!0),this.$utils().u(c.$offset)||(this.$offset=c.$offset),E.call(this,c)};var m=v.init;v.init=function(){if(this.$u){var c=this.$d;this.$y=c.getUTCFullYear(),this.$M=c.getUTCMonth(),this.$D=c.getUTCDate(),this.$W=c.getUTCDay(),this.$H=c.getUTCHours(),this.$m=c.getUTCMinutes(),this.$s=c.getUTCSeconds(),this.$ms=c.getUTCMilliseconds()}else m.call(this)};var h=v.utcOffset;v.utcOffset=function(c,_){var O=this.$utils().u;if(O(c))return this.$u?0:O(this.$offset)?h.call(this):this.$offset;if(typeof c=="string"&&(c=function(y){y===void 0&&(y="");var M=y.match(a);if(!M)return null;var L=(""+M[0]).match(s)||["-",0,0],I=L[0],Y=60*+L[1]+ +L[2];return Y===0?0:I==="+"?Y:-Y}(c),c===null))return this;var V=Math.abs(c)<=16?60*c:c,S=this;if(_)return S.$offset=V,S.$u=c===0,S;if(c!==0){var X=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(S=this.local().add(V+X,t)).$offset=V,S.$x.$localOffset=X}else S=this.utc();return S};var A=v.format;v.format=function(c){var _=c||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return A.call(this,_)},v.valueOf=function(){var c=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*c},v.isUTC=function(){return!!this.$u},v.toISOString=function(){return this.toDate().toISOString()},v.toString=function(){return this.toDate().toUTCString()};var K=v.toDate;v.toDate=function(c){return c==="s"&&this.$offset?g(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():K.call(this)};var P=v.diff;v.diff=function(c,_,O){if(c&&this.$u===c.$u)return P.call(this,c,_,O);var V=this.local(),S=g(c).local();return P.call(V,S,_,O)}}})}(fo)),fo.exports}var cN=hN();const AN=$o(cN),yN=Kk(),pn=e=>lR({locale:"nb-NO",messages:e},yN),ag="YYYY-MM-DD",li={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"},ri=pn(li),Qk=(e,i)=>{const{year:t="numeric",month:a="2-digit",day:s="2-digit"}=i??{};return ri.formatDate(new Date(e),{year:t,month:a,day:s})},RN=(e,i)=>{const{separator:t="dash",year:a="numeric",month:s="2-digit",day:l="2-digit",hour:d="numeric",minute:g="numeric",second:v=void 0}=i??{},E=()=>{switch(t){case"kl":return ri.formatMessage({id:"DateTimeLabel.Kl"});case"dash":return" - "}},m=ri.formatDate(new Date(e),{year:a,month:s,day:l}),h=ri.formatDate(new Date(e),{hour:d,minute:g,second:v});return`${m}${E()}${h}`};var po={exports:{}},_N=po.exports,ig;function NN(){return ig||(ig=1,function(e,i){(function(t,a){e.exports=a(Or)})(_N,function(t){function a(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var s=a(t),l={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(l,null,!0),l})}(po)),po.exports}NN();Or.extend(AN);Or.extend(pN);Or.extend(vN);pn(li);const dt="9999-12-31",bN=(e,i,t)=>Or(e,i,t).utc(!0).startOf("day"),sg=(e,i)=>e===dt?e:bN(e,ag).add(i,"days").format(ag);pn(li);var og={exports:{}},Bt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function SN(){if(lg)return Bt;lg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function t(a,s,l){var d=null;if(l!==void 0&&(d=""+l),s.key!==void 0&&(d=""+s.key),"key"in s){l={};for(var g in s)g!=="key"&&(l[g]=s[g])}else l=s;return s=l.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:l}}return Bt.Fragment=i,Bt.jsx=t,Bt.jsxs=t,Bt}var ug;function IN(){return ug||(ug=1,og.exports=SN()),og.exports}IN();pn(li);function ON(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dg={exports:{}},Vt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function LN(){if(gg)return Vt;gg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function t(a,s,l){var d=null;if(l!==void 0&&(d=""+l),s.key!==void 0&&(d=""+s.key),"key"in s){l={};for(var g in s)g!=="key"&&(l[g]=s[g])}else l=s;return s=l.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:l}}return Vt.Fragment=i,Vt.jsx=t,Vt.jsxs=t,Vt}var kg;function KN(){return kg||(kg=1,dg.exports=LN()),dg.exports}var Ct=KN();const ui={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre"};pn(ui);var vg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Eg;function DN(){return Eg||(Eg=1,function(e){(function(){var i={}.hasOwnProperty;function t(){for(var l="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(l=s(l,a.call(this,g)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var g in l)i.call(l,g)&&l[g]&&(d=s(d,this&&this[g]||g));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(vg)),vg.exports}var PN=DN();const Jo=ON(PN),FN="_borderbox_1vkvn_1",MN="_error_1vkvn_5",GN="_warning_1vkvn_8",BN={borderbox:FN,error:MN,warning:GN};Jo.bind(BN);const VN="_aksjonspunkt_kn1hn_1",wN="_erAksjonspunktApent_kn1hn_4",jN="_erIkkeGodkjentAvBeslutter_kn1hn_8",UN={aksjonspunkt:VN,erAksjonspunktApent:wN,erIkkeGodkjentAvBeslutter:jN};Jo.bind(UN);const $t=({dateString:e,year:i,month:t,day:a})=>Ct.jsx(Ct.Fragment,{children:Qk(e,{year:i,month:t,day:a})}),ai=({dateTimeString:e,...i})=>Ct.jsx(Ct.Fragment,{children:RN(e,i)});pn(ui);pn(ui);const HN="_divider_1t980_1",xN="_dividerParagraf_1t980_8",qN="_leftPanel_1t980_11",YN="_rightPanel_1t980_14",CN={divider:HN,dividerParagraf:xN,leftPanel:qN,rightPanel:YN};Jo.bind(CN);pn(ui);const mg={default:"_default_1sbt3_1",rød:"_rød_1sbt3_5"},ot=({beløp:e,kr:i=!1,rød:t=!1})=>{const a=e==null?void 0:e.toString().replace(/\s/g,"");return Ct.jsxs("span",{className:t?mg.rød:mg.default,children:[a?uN(a):"-",a&&i&&" kr"]})};F.createContext(null);const ev=F.createContext(null),nv=e=>{const{children:i,...t}=e,a=F.useMemo(()=>t,[t]);return G.jsx(ev,{value:a,children:i})},rv=()=>{const e=F.useContext(ev);if(!e)throw new Error("PanelContext.Provider er ikke satt opp");return e};nv.__docgenInfo={description:"",methods:[],displayName:"PanelDataProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
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
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
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
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: string;
  avslagKode?: string | null;
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
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  relasjonsRolleType: RelasjonsRolleType;
  status: FagsakStatus;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"relasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"status",value:{name:"FagsakStatus",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: BehandlingType;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"BehandlingType",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: BehandlingType;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>`,required:!0}},{key:"annenPart",value:{name:"union",raw:"Person | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>`,required:!0},{name:"null"}],required:!0}},{key:"annenpartBehandling",value:{name:"union",raw:"AnnenPartBehandling | null",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: RelasjonsRolleType;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}}]}},{name:"null"}],required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: FagsakMarkeringKode;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
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
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
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
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
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
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"tag",value:{name:"string",required:!0}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  journalpostId: string;
  tag: string;
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
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  relasjonsRolleType: RelasjonsRolleType;
  status: FagsakStatus;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},aksjonspunkterForPanel:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]"},description:""},harÅpneAksjonspunkter:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: AP_TYPE) => Promise<void>",signature:{arguments:[{type:{name:"AP_TYPE"},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""}}};var tv=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(tv||{}),di=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(di||{});di.BRUKERS_ANDEL;di.FRILANS;di.EGEN_NÆRING;var av=(e=>(e.OPPRETTET="OPPRE",e.BEHANDLING_UTREDES="UTRED",e.AVSLUTTET="AVSLU",e.IVERKSETTER_VEDTAK="IVED",e.FATTER_VEDTAK="FVED",e))(av||{}),iv=(e=>(e.FORSTEGANGSSOKNAD="BT-002",e.KLAGE="BT-003",e.REVURDERING="BT-004",e.DOKUMENTINNSYN="BT-006",e.TILBAKEKREVING="BT-007",e.ANKE="BT-008",e.TILBAKEKREVING_REVURDERING="BT-009",e))(iv||{}),sv=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(sv||{}),To=(e=>(e.MOR="MORA",e.FAR="FARA",e.MEDMOR="MMOR",e))(To||{}),ho=(e=>(e.ELEKTRISK_KOMMUNIKASJON="ELEKTRISK_KOMMUNIKASJON",e.LOSJI="LOSJI",e))(ho||{});F.createContext(null);var De=(e=>(e.DEFAULT="default",e.INNGANGSVILKAR="inngangsvilkar",e.BEHANDLE_INNSYN="behandle_innsyn",e.BEREGNING="beregning",e.BEREGNINGSGRUNNLAG="beregningsgrunnlag",e.KLAGE_NAV_FAMILIE_OG_PENSJON="klage_nav_familie_og_pensjon",e.KLAGE_NAV_KLAGEINSTANS="klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_KLAGEINSTANS="formkrav_klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON="formkrav_klage_nav_familie_og_pensjon",e.FORTSATTMEDLEMSKAP="fortsattmedlemskap",e.OPPLYSNINGSPLIKT="opplysningsplikt",e.SOEKNADSFRIST="soeknadsfrist",e.TILBAKEKREVING="tilbakekreving",e.FORELDELSE="foreldelse",e.TILKJENT_YTELSE="tilkjent_ytelse",e.VARSEL="varsel",e.VEDTAK="vedtak",e.UTTAK="uttak",e.SIMULERING="simulering",e.KLAGE_RESULTAT="resultat",e.ANKEBEHANDLING="ankebehandling",e.ANKE_MERKNADER="ankemerknader",e.ANKE_RESULTAT="ankeresultat",e))(De||{}),le=(e=>(e.ADOPSJONSVILKARET="adopsjonsvilkaaret",e.ARBEIDSFORHOLD="arbeidsforhold",e.ARBEID_OG_INNTEKT="arbeidoginntekt",e.BEREGNING="beregning",e.BESTEBEREGNING="besteberegning",e.DEFAULT="default",e.FORDELING="fordeling",e.INNTEKTSMELDINGER="inntektsmeldinger",e.FEILUTBETALING="feilutbetaling",e.FODSELSVILKARET="foedselsvilkaaret",e.FODSELTILRETTELEGGING="fodseltilrettelegging",e.MEDLEMSKAPSVILKARET="medlemskapsvilkaaret",e.OMSORG="omsorg",e.OMSORG_OG_RETT="omsorgogrett",e.OMSORGSVILKARET="omsorgsvilkaaret",e.OPPTJENINGSVILKARET="opptjeningsvilkaaret",e.PERMISJON="permisjon",e.SAKEN="saken",e.UTTAK="uttak",e.VERGE="verge",e.YTELSER="ytelser",e.UTTAK_DOKUMENTASJON="uttakdokumentasjon",e))(le||{});le.DEFAULT,De.BEREGNING,le.DEFAULT,De.BEREGNINGSGRUNNLAG,le.BESTEBEREGNING,De.DEFAULT,le.ADOPSJONSVILKARET,le.ARBEIDSFORHOLD,le.BEREGNING,le.FODSELSVILKARET,le.FORDELING,le.MEDLEMSKAPSVILKARET,le.OMSORG,le.OPPTJENINGSVILKARET,le.OPPTJENINGSVILKARET,le.OMSORGSVILKARET,le.ARBEIDSFORHOLD,le.UTTAK_DOKUMENTASJON,le.DEFAULT,De.INNGANGSVILKAR,le.DEFAULT,De.KLAGE_NAV_FAMILIE_OG_PENSJON,le.DEFAULT,De.KLAGE_NAV_KLAGEINSTANS,le.DEFAULT,De.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,le.DEFAULT,De.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,le.DEFAULT,De.ANKEBEHANDLING,le.DEFAULT,De.ANKE_MERKNADER,le.DEFAULT,De.OPPLYSNINGSPLIKT,le.DEFAULT,De.INNGANGSVILKAR,le.DEFAULT,De.INNGANGSVILKAR,le.MEDLEMSKAPSVILKARET,De.INNGANGSVILKAR,le.DEFAULT,De.INNGANGSVILKAR,le.DEFAULT,De.INNGANGSVILKAR,le.DEFAULT,De.SOEKNADSFRIST,le.DEFAULT,De.VEDTAK,le.UTTAK,le.UTTAK,le.UTTAK_DOKUMENTASJON,le.SAKEN,le.DEFAULT,De.UTTAK,le.VERGE,le.DEFAULT,De.TILKJENT_YTELSE,le.DEFAULT,De.SIMULERING,le.SAKEN,le.FODSELTILRETTELEGGING,le.DEFAULT,De.INNGANGSVILKAR,le.DEFAULT,le.UTTAK_DOKUMENTASJON,le.DEFAULT,De.FORTSATTMEDLEMSKAP,le.ARBEID_OG_INNTEKT,De.DEFAULT,le.OMSORG_OG_RETT;le.FEILUTBETALING,le.DEFAULT,De.TILBAKEKREVING,le.DEFAULT,De.FORELDELSE,le.DEFAULT,De.VEDTAK,le.VERGE;const $N=(e,i,t)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${i}&dokumentId=${t}`,JN=(e,i,t,a)=>{const s=$N(e,i,t),l=`${i}-${t}`;a&&WN(s,l,a)},WN=(e,i,t)=>{const a=window.open(e,i);a&&setTimeout(()=>{a.document.title=t},1e3)},ir=({tittel:e,children:i})=>G.jsxs(oi,{gap:"1",children:[G.jsx(xo,{size:"medium",children:e}),i]});ir.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ov=({arbeidsgiverOpplysninger:e,arbeidsgiverIdent:i})=>{const t=Cn();return G.jsxs(ir,{tittel:t.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[G.jsxs("span",{children:[G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),": ",e.navn]}),G.jsxs("span",{children:[G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",i]})]})};ov.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const lv=({inntektsmelding:e,behandling:i,alleBehandlinger:t,alleKodeverk:a})=>{const s=Cn(),l=e.tilknyttedeBehandlingIder.includes(i.uuid),d=t.filter(E=>e.tilknyttedeBehandlingIder.includes(E.uuid)),g=(()=>{const E=d.length;return l&&E>1?G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):l?G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):E===0?G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),v=[...d].sort((E,m)=>new Date(E.opprettet).getTime()-new Date(m.opprettet).getTime());return G.jsxs(ir,{tittel:s.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[g,G.jsx(ko,{children:v.map(E=>{var m;return G.jsx(ko.Item,{children:G.jsxs(oi,{gap:"1",children:[G.jsx("span",{children:(m=a.BehandlingType.find(({kode:h})=>h===E.type))==null?void 0:m.navn}),G.jsxs("span",{children:[G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",G.jsx(ai,{dateTimeString:E.opprettet,separator:"kl"})]}),E.avsluttet?G.jsxs("span",{children:[G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",G.jsx(ai,{dateTimeString:E.avsluttet,separator:"kl"})]}):null]})},E.uuid)})})]})};lv.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
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
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
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
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: string;
  avslagKode?: string | null;
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
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
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
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
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
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};function zN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fg={exports:{}},wt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function XN(){if(pg)return wt;pg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function t(a,s,l){var d=null;if(l!==void 0&&(d=""+l),s.key!==void 0&&(d=""+s.key),"key"in s){l={};for(var g in s)g!=="key"&&(l[g]=s[g])}else l=s;return s=l.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:l}}return wt.Fragment=i,wt.jsx=t,wt.jsxs=t,wt}var Tg;function ZN(){return Tg||(Tg=1,fg.exports=XN()),fg.exports}ZN();var co={exports:{}},QN=co.exports,hg;function eb(){return hg||(hg=1,function(e,i){(function(t,a){e.exports=a()})(QN,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,l=/\d\d/,d=/\d\d?/,g=/\d*[^-_:/,()\s\d]+/,v={},E=function(_){return(_=+_)+(_>68?1900:2e3)},m=function(_){return function(O){this[_]=+O}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(_){(this.zone||(this.zone={})).offset=function(O){if(!O||O==="Z")return 0;var V=O.match(/([+-]|\d\d)/g),S=60*V[1]+(+V[2]||0);return S===0?0:V[0]==="+"?-S:S}(_)}],A=function(_){var O=v[_];return O&&(O.indexOf?O:O.s.concat(O.f))},K=function(_,O){var V,S=v.meridiem;if(S){for(var X=1;X<=24;X+=1)if(_.indexOf(S(X,0,O))>-1){V=X>12;break}}else V=_===(O?"pm":"PM");return V},P={A:[g,function(_){this.afternoon=K(_,!1)}],a:[g,function(_){this.afternoon=K(_,!0)}],Q:[s,function(_){this.month=3*(_-1)+1}],S:[s,function(_){this.milliseconds=100*+_}],SS:[l,function(_){this.milliseconds=10*+_}],SSS:[/\d{3}/,function(_){this.milliseconds=+_}],s:[d,m("seconds")],ss:[d,m("seconds")],m:[d,m("minutes")],mm:[d,m("minutes")],H:[d,m("hours")],h:[d,m("hours")],HH:[d,m("hours")],hh:[d,m("hours")],D:[d,m("day")],DD:[l,m("day")],Do:[g,function(_){var O=v.ordinal,V=_.match(/\d+/);if(this.day=V[0],O)for(var S=1;S<=31;S+=1)O(S).replace(/\[|\]/g,"")===_&&(this.day=S)}],w:[d,m("week")],ww:[l,m("week")],M:[d,m("month")],MM:[l,m("month")],MMM:[g,function(_){var O=A("months"),V=(A("monthsShort")||O.map(function(S){return S.slice(0,3)})).indexOf(_)+1;if(V<1)throw new Error;this.month=V%12||V}],MMMM:[g,function(_){var O=A("months").indexOf(_)+1;if(O<1)throw new Error;this.month=O%12||O}],Y:[/[+-]?\d+/,m("year")],YY:[l,function(_){this.year=E(_)}],YYYY:[/\d{4}/,m("year")],Z:h,ZZ:h};function c(_){var O,V;O=_,V=v&&v.formats;for(var S=(_=O.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(z,U,ne){var W=ne&&ne.toUpperCase();return U||V[ne]||t[ne]||V[W].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(C,x,$){return x||$.slice(1)})})).match(a),X=S.length,y=0;y<X;y+=1){var M=S[y],L=P[M],I=L&&L[0],Y=L&&L[1];S[y]=Y?{regex:I,parser:Y}:M.replace(/^\[|\]$/g,"")}return function(z){for(var U={},ne=0,W=0;ne<X;ne+=1){var C=S[ne];if(typeof C=="string")W+=C.length;else{var x=C.regex,$=C.parser,Z=z.slice(W),q=x.exec(Z)[0];$.call(U,q),z=z.replace(q,"")}}return function(ee){var ae=ee.afternoon;if(ae!==void 0){var re=ee.hours;ae?re<12&&(ee.hours+=12):re===12&&(ee.hours=0),delete ee.afternoon}}(U),U}}return function(_,O,V){V.p.customParseFormat=!0,_&&_.parseTwoDigitYear&&(E=_.parseTwoDigitYear);var S=O.prototype,X=S.parse;S.parse=function(y){var M=y.date,L=y.utc,I=y.args;this.$u=L;var Y=I[1];if(typeof Y=="string"){var z=I[2]===!0,U=I[3]===!0,ne=z||U,W=I[2];U&&(W=I[2]),v=this.$locale(),!z&&W&&(v=V.Ls[W]),this.$d=function(Z,q,ee,ae){try{if(["x","X"].indexOf(q)>-1)return new Date((q==="X"?1e3:1)*Z);var re=c(q)(Z),_e=re.year,be=re.month,xe=re.day,je=re.hours,ln=re.minutes,yn=re.seconds,un=re.milliseconds,ze=re.zone,qe=re.week,Ce=new Date,Qe=xe||(_e||be?1:Ce.getDate()),dn=_e||Ce.getFullYear(),$e=0;_e&&!be||($e=be>0?be-1:Ce.getMonth());var gn,or=je||0,rn=ln||0,Jn=yn||0,lr=un||0;return ze?new Date(Date.UTC(dn,$e,Qe,or,rn,Jn,lr+60*ze.offset*1e3)):ee?new Date(Date.UTC(dn,$e,Qe,or,rn,Jn,lr)):(gn=new Date(dn,$e,Qe,or,rn,Jn,lr),qe&&(gn=ae(gn).week(qe).toDate()),gn)}catch{return new Date("")}}(M,Y,L,V),this.init(),W&&W!==!0&&(this.$L=this.locale(W).$L),ne&&M!=this.format(Y)&&(this.$d=new Date("")),v={}}else if(Y instanceof Array)for(var C=Y.length,x=1;x<=C;x+=1){I[1]=Y[x-1];var $=V.apply(this,I);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}x===C&&(this.$d=new Date(""))}else X.call(this,y)}}})}(co)),co.exports}var nb=eb();const rb=zN(nb);Or.extend(rb);function uv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ao={exports:{}},tb=Ao.exports,cg;function ab(){return cg||(cg=1,function(e,i){(function(t,a){e.exports=a()})(tb,function(){return function(t,a){a.prototype.isSameOrAfter=function(s,l){return this.isSame(s,l)||this.isAfter(s,l)}}})}(Ao)),Ao.exports}var ib=ab();const sb=uv(ib);var yo={exports:{}},ob=yo.exports,Ag;function lb(){return Ag||(Ag=1,function(e,i){(function(t,a){e.exports=a()})(ob,function(){return function(t,a){a.prototype.isSameOrBefore=function(s,l){return this.isSame(s,l)||this.isBefore(s,l)}}})}(yo)),yo.exports}var ub=lb();const db=uv(ub),gb="Dato må være før eller lik {limit}",kb="Dato må være etter eller lik {limit}",vb="Perioder kan ikke overlappe i tid",Eb="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",mb="Dato må være lik {value}",fb="Dato må skrives slik: dd.mm.åååå",pb="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",Tb="Tallet kan ikke inneholde mer enn to desimaler",hb="Tallet kan ikke ha desimaler",cb="Feltet kan kun inneholde tall",Ab="Ugyldig fødselsnummer",yb="Feltet må være et fødselsnummer (11 siffer)",Rb="Ugyldig organisasjonsnummer.",_b="Ugyldig organisasjonsnummer eller fødselsnummer",Nb="Startdato må være før eller lik sluttdato",bb="Periode er utenfor opptjeningsperioden",Sb="Ugyldig saksnummer eller fødselsnummer",Ib="Feltet inneholder ugyldige tegn: {text}",Ob="Feltet inneholder en ugyldig verdi: {value}",Lb="Feltet kan ikke inneholde mellomrom",Kb="Feltet må fylles ut",Db="Du kan skrive maksimalt {length} tegn",Pb="Du må skrive minst {length} tegn",Fb="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",Mb="Feltet må være mindre eller lik {length}",Gb="Feltet må være større eller lik {length}",Bb="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",Vb={DateNotBeforeOrEqual:gb,DateNotAfterOrEqual:kb,DateRangesOverlapping:vb,DateRangesOverlappingPeriodTypes:Eb,DatesNotEqual:mb,InvalidDate:fb,InvalidDatesInPeriod:pb,InvalidDecimal:Tb,InvalidInteger:hb,InvalidNumber:cb,InvalidFodselsnr:Ab,InvalidFodselsnrFormat:yb,InvalidOrgnr:Rb,InvalidOrgnrOrFodselsnr:_b,InvalidPeriod:Nb,InvalidPeriodRange:bb,InvalidSaksnrOrFodselsnrFormat:Sb,InvalidText:Ib,InvalidValue:Ob,IllegalWhiteSpace:Lb,IsRequired:Kb,MaxLength:Db,MinLength:Pb,MaxLengthOrFodselsnr:Fb,MaxValue:Mb,MinValue:Gb,SammeFodselsnrSomSoker:Bb},{formatMessage:YI}=pn(Vb);Or.extend(sb);Or.extend(db);const ea={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"};pn(ea);pn(ea);pn(ea);const wb=(e,i)=>{const t=new Date(e.tom??dt),a=new Date(i.tom??dt);if(t>a)return-1;if(t<a)return 1;if(e.fom&&!i.fom)return-1;if(!e.fom&&i.fom)return 1;if(e.fom&&i.fom){const s=new Date(e.fom),l=new Date(i.fom);if(s>l)return-1;if(s<l)return 1}return 0};var xt={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var jb=xt.exports,yg;function Ub(){return yg||(yg=1,function(e,i){(function(){var t,a="4.17.21",s=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",d="Expected a function",g="Invalid `variable` option passed into `_.template`",v="__lodash_hash_undefined__",E=500,m="__lodash_placeholder__",h=1,A=2,K=4,P=1,c=2,_=1,O=2,V=4,S=8,X=16,y=32,M=64,L=128,I=256,Y=512,z=30,U="...",ne=800,W=16,C=1,x=2,$=3,Z=1/0,q=9007199254740991,ee=17976931348623157e292,ae=NaN,re=4294967295,_e=re-1,be=re>>>1,xe=[["ary",L],["bind",_],["bindKey",O],["curry",S],["curryRight",X],["flip",Y],["partial",y],["partialRight",M],["rearg",I]],je="[object Arguments]",ln="[object Array]",yn="[object AsyncFunction]",un="[object Boolean]",ze="[object Date]",qe="[object DOMException]",Ce="[object Error]",Qe="[object Function]",dn="[object GeneratorFunction]",$e="[object Map]",gn="[object Number]",or="[object Null]",rn="[object Object]",Jn="[object Promise]",lr="[object Proxy]",ft="[object RegExp]",jn="[object Set]",pt="[object String]",ia="[object Symbol]",$v="[object Undefined]",Tt="[object WeakMap]",Jv="[object WeakSet]",ht="[object ArrayBuffer]",Yr="[object DataView]",mi="[object Float32Array]",fi="[object Float64Array]",pi="[object Int8Array]",Ti="[object Int16Array]",hi="[object Int32Array]",ci="[object Uint8Array]",Ai="[object Uint8ClampedArray]",yi="[object Uint16Array]",Ri="[object Uint32Array]",Wv=/\b__p \+= '';/g,zv=/\b(__p \+=) '' \+/g,Xv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Zo=/&(?:amp|lt|gt|quot|#39);/g,Qo=/[&<>"']/g,Zv=RegExp(Zo.source),Qv=RegExp(Qo.source),eE=/<%-([\s\S]+?)%>/g,nE=/<%([\s\S]+?)%>/g,el=/<%=([\s\S]+?)%>/g,rE=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,tE=/^\w*$/,aE=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_i=/[\\^$.*+?()[\]{}|]/g,iE=RegExp(_i.source),Ni=/^\s+/,sE=/\s/,oE=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,lE=/\{\n\/\* \[wrapped with (.+)\] \*/,uE=/,? & /,dE=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,gE=/[()=,{}\[\]\/\s]/,kE=/\\(\\)?/g,vE=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,nl=/\w*$/,EE=/^[-+]0x[0-9a-f]+$/i,mE=/^0b[01]+$/i,fE=/^\[object .+?Constructor\]$/,pE=/^0o[0-7]+$/i,TE=/^(?:0|[1-9]\d*)$/,hE=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,sa=/($^)/,cE=/['\n\r\u2028\u2029\\]/g,oa="\\ud800-\\udfff",AE="\\u0300-\\u036f",yE="\\ufe20-\\ufe2f",RE="\\u20d0-\\u20ff",rl=AE+yE+RE,tl="\\u2700-\\u27bf",al="a-z\\xdf-\\xf6\\xf8-\\xff",_E="\\xac\\xb1\\xd7\\xf7",NE="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",bE="\\u2000-\\u206f",SE=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",il="A-Z\\xc0-\\xd6\\xd8-\\xde",sl="\\ufe0e\\ufe0f",ol=_E+NE+bE+SE,bi="['’]",IE="["+oa+"]",ll="["+ol+"]",la="["+rl+"]",ul="\\d+",OE="["+tl+"]",dl="["+al+"]",gl="[^"+oa+ol+ul+tl+al+il+"]",Si="\\ud83c[\\udffb-\\udfff]",LE="(?:"+la+"|"+Si+")",kl="[^"+oa+"]",Ii="(?:\\ud83c[\\udde6-\\uddff]){2}",Oi="[\\ud800-\\udbff][\\udc00-\\udfff]",Cr="["+il+"]",vl="\\u200d",El="(?:"+dl+"|"+gl+")",KE="(?:"+Cr+"|"+gl+")",ml="(?:"+bi+"(?:d|ll|m|re|s|t|ve))?",fl="(?:"+bi+"(?:D|LL|M|RE|S|T|VE))?",pl=LE+"?",Tl="["+sl+"]?",DE="(?:"+vl+"(?:"+[kl,Ii,Oi].join("|")+")"+Tl+pl+")*",PE="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",FE="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",hl=Tl+pl+DE,ME="(?:"+[OE,Ii,Oi].join("|")+")"+hl,GE="(?:"+[kl+la+"?",la,Ii,Oi,IE].join("|")+")",BE=RegExp(bi,"g"),VE=RegExp(la,"g"),Li=RegExp(Si+"(?="+Si+")|"+GE+hl,"g"),wE=RegExp([Cr+"?"+dl+"+"+ml+"(?="+[ll,Cr,"$"].join("|")+")",KE+"+"+fl+"(?="+[ll,Cr+El,"$"].join("|")+")",Cr+"?"+El+"+"+ml,Cr+"+"+fl,FE,PE,ul,ME].join("|"),"g"),jE=RegExp("["+vl+oa+rl+sl+"]"),UE=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,HE=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],xE=-1,Me={};Me[mi]=Me[fi]=Me[pi]=Me[Ti]=Me[hi]=Me[ci]=Me[Ai]=Me[yi]=Me[Ri]=!0,Me[je]=Me[ln]=Me[ht]=Me[un]=Me[Yr]=Me[ze]=Me[Ce]=Me[Qe]=Me[$e]=Me[gn]=Me[rn]=Me[ft]=Me[jn]=Me[pt]=Me[Tt]=!1;var Fe={};Fe[je]=Fe[ln]=Fe[ht]=Fe[Yr]=Fe[un]=Fe[ze]=Fe[mi]=Fe[fi]=Fe[pi]=Fe[Ti]=Fe[hi]=Fe[$e]=Fe[gn]=Fe[rn]=Fe[ft]=Fe[jn]=Fe[pt]=Fe[ia]=Fe[ci]=Fe[Ai]=Fe[yi]=Fe[Ri]=!0,Fe[Ce]=Fe[Qe]=Fe[Tt]=!1;var qE={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},YE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},CE={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},$E={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},JE=parseFloat,WE=parseInt,cl=typeof Ja=="object"&&Ja&&Ja.Object===Object&&Ja,zE=typeof self=="object"&&self&&self.Object===Object&&self,tn=cl||zE||Function("return this")(),Ki=i&&!i.nodeType&&i,Dr=Ki&&!0&&e&&!e.nodeType&&e,Al=Dr&&Dr.exports===Ki,Di=Al&&cl.process,Ln=function(){try{var N=Dr&&Dr.require&&Dr.require("util").types;return N||Di&&Di.binding&&Di.binding("util")}catch{}}(),yl=Ln&&Ln.isArrayBuffer,Rl=Ln&&Ln.isDate,_l=Ln&&Ln.isMap,Nl=Ln&&Ln.isRegExp,bl=Ln&&Ln.isSet,Sl=Ln&&Ln.isTypedArray;function Rn(N,B,D){switch(D.length){case 0:return N.call(B);case 1:return N.call(B,D[0]);case 2:return N.call(B,D[0],D[1]);case 3:return N.call(B,D[0],D[1],D[2])}return N.apply(B,D)}function XE(N,B,D,te){for(var ke=-1,Ne=N==null?0:N.length;++ke<Ne;){var Xe=N[ke];B(te,Xe,D(Xe),N)}return te}function Kn(N,B){for(var D=-1,te=N==null?0:N.length;++D<te&&B(N[D],D,N)!==!1;);return N}function ZE(N,B){for(var D=N==null?0:N.length;D--&&B(N[D],D,N)!==!1;);return N}function Il(N,B){for(var D=-1,te=N==null?0:N.length;++D<te;)if(!B(N[D],D,N))return!1;return!0}function cr(N,B){for(var D=-1,te=N==null?0:N.length,ke=0,Ne=[];++D<te;){var Xe=N[D];B(Xe,D,N)&&(Ne[ke++]=Xe)}return Ne}function ua(N,B){var D=N==null?0:N.length;return!!D&&$r(N,B,0)>-1}function Pi(N,B,D){for(var te=-1,ke=N==null?0:N.length;++te<ke;)if(D(B,N[te]))return!0;return!1}function we(N,B){for(var D=-1,te=N==null?0:N.length,ke=Array(te);++D<te;)ke[D]=B(N[D],D,N);return ke}function Ar(N,B){for(var D=-1,te=B.length,ke=N.length;++D<te;)N[ke+D]=B[D];return N}function Fi(N,B,D,te){var ke=-1,Ne=N==null?0:N.length;for(te&&Ne&&(D=N[++ke]);++ke<Ne;)D=B(D,N[ke],ke,N);return D}function QE(N,B,D,te){var ke=N==null?0:N.length;for(te&&ke&&(D=N[--ke]);ke--;)D=B(D,N[ke],ke,N);return D}function Mi(N,B){for(var D=-1,te=N==null?0:N.length;++D<te;)if(B(N[D],D,N))return!0;return!1}var em=Gi("length");function nm(N){return N.split("")}function rm(N){return N.match(dE)||[]}function Ol(N,B,D){var te;return D(N,function(ke,Ne,Xe){if(B(ke,Ne,Xe))return te=Ne,!1}),te}function da(N,B,D,te){for(var ke=N.length,Ne=D+(te?1:-1);te?Ne--:++Ne<ke;)if(B(N[Ne],Ne,N))return Ne;return-1}function $r(N,B,D){return B===B?Em(N,B,D):da(N,Ll,D)}function tm(N,B,D,te){for(var ke=D-1,Ne=N.length;++ke<Ne;)if(te(N[ke],B))return ke;return-1}function Ll(N){return N!==N}function Kl(N,B){var D=N==null?0:N.length;return D?Vi(N,B)/D:ae}function Gi(N){return function(B){return B==null?t:B[N]}}function Bi(N){return function(B){return N==null?t:N[B]}}function Dl(N,B,D,te,ke){return ke(N,function(Ne,Xe,Pe){D=te?(te=!1,Ne):B(D,Ne,Xe,Pe)}),D}function am(N,B){var D=N.length;for(N.sort(B);D--;)N[D]=N[D].value;return N}function Vi(N,B){for(var D,te=-1,ke=N.length;++te<ke;){var Ne=B(N[te]);Ne!==t&&(D=D===t?Ne:D+Ne)}return D}function wi(N,B){for(var D=-1,te=Array(N);++D<N;)te[D]=B(D);return te}function im(N,B){return we(B,function(D){return[D,N[D]]})}function Pl(N){return N&&N.slice(0,Bl(N)+1).replace(Ni,"")}function _n(N){return function(B){return N(B)}}function ji(N,B){return we(B,function(D){return N[D]})}function ct(N,B){return N.has(B)}function Fl(N,B){for(var D=-1,te=N.length;++D<te&&$r(B,N[D],0)>-1;);return D}function Ml(N,B){for(var D=N.length;D--&&$r(B,N[D],0)>-1;);return D}function sm(N,B){for(var D=N.length,te=0;D--;)N[D]===B&&++te;return te}var om=Bi(qE),lm=Bi(YE);function um(N){return"\\"+$E[N]}function dm(N,B){return N==null?t:N[B]}function Jr(N){return jE.test(N)}function gm(N){return UE.test(N)}function km(N){for(var B,D=[];!(B=N.next()).done;)D.push(B.value);return D}function Ui(N){var B=-1,D=Array(N.size);return N.forEach(function(te,ke){D[++B]=[ke,te]}),D}function Gl(N,B){return function(D){return N(B(D))}}function yr(N,B){for(var D=-1,te=N.length,ke=0,Ne=[];++D<te;){var Xe=N[D];(Xe===B||Xe===m)&&(N[D]=m,Ne[ke++]=D)}return Ne}function ga(N){var B=-1,D=Array(N.size);return N.forEach(function(te){D[++B]=te}),D}function vm(N){var B=-1,D=Array(N.size);return N.forEach(function(te){D[++B]=[te,te]}),D}function Em(N,B,D){for(var te=D-1,ke=N.length;++te<ke;)if(N[te]===B)return te;return-1}function mm(N,B,D){for(var te=D+1;te--;)if(N[te]===B)return te;return te}function Wr(N){return Jr(N)?pm(N):em(N)}function Un(N){return Jr(N)?Tm(N):nm(N)}function Bl(N){for(var B=N.length;B--&&sE.test(N.charAt(B)););return B}var fm=Bi(CE);function pm(N){for(var B=Li.lastIndex=0;Li.test(N);)++B;return B}function Tm(N){return N.match(Li)||[]}function hm(N){return N.match(wE)||[]}var cm=function N(B){B=B==null?tn:zr.defaults(tn.Object(),B,zr.pick(tn,HE));var D=B.Array,te=B.Date,ke=B.Error,Ne=B.Function,Xe=B.Math,Pe=B.Object,Hi=B.RegExp,Am=B.String,Dn=B.TypeError,ka=D.prototype,ym=Ne.prototype,Xr=Pe.prototype,va=B["__core-js_shared__"],Ea=ym.toString,Le=Xr.hasOwnProperty,Rm=0,Vl=function(){var n=/[^.]+$/.exec(va&&va.keys&&va.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),ma=Xr.toString,_m=Ea.call(Pe),Nm=tn._,bm=Hi("^"+Ea.call(Le).replace(_i,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),fa=Al?B.Buffer:t,Rr=B.Symbol,pa=B.Uint8Array,wl=fa?fa.allocUnsafe:t,Ta=Gl(Pe.getPrototypeOf,Pe),jl=Pe.create,Ul=Xr.propertyIsEnumerable,ha=ka.splice,Hl=Rr?Rr.isConcatSpreadable:t,At=Rr?Rr.iterator:t,Pr=Rr?Rr.toStringTag:t,ca=function(){try{var n=Vr(Pe,"defineProperty");return n({},"",{}),n}catch{}}(),Sm=B.clearTimeout!==tn.clearTimeout&&B.clearTimeout,Im=te&&te.now!==tn.Date.now&&te.now,Om=B.setTimeout!==tn.setTimeout&&B.setTimeout,Aa=Xe.ceil,ya=Xe.floor,xi=Pe.getOwnPropertySymbols,Lm=fa?fa.isBuffer:t,xl=B.isFinite,Km=ka.join,Dm=Gl(Pe.keys,Pe),Ze=Xe.max,sn=Xe.min,Pm=te.now,Fm=B.parseInt,ql=Xe.random,Mm=ka.reverse,qi=Vr(B,"DataView"),yt=Vr(B,"Map"),Yi=Vr(B,"Promise"),Zr=Vr(B,"Set"),Rt=Vr(B,"WeakMap"),_t=Vr(Pe,"create"),Ra=Rt&&new Rt,Qr={},Gm=wr(qi),Bm=wr(yt),Vm=wr(Yi),wm=wr(Zr),jm=wr(Rt),_a=Rr?Rr.prototype:t,Nt=_a?_a.valueOf:t,Yl=_a?_a.toString:t;function f(n){if(Ye(n)&&!ve(n)&&!(n instanceof Te)){if(n instanceof Pn)return n;if(Le.call(n,"__wrapped__"))return Cu(n)}return new Pn(n)}var et=function(){function n(){}return function(r){if(!Ue(r))return{};if(jl)return jl(r);n.prototype=r;var o=new n;return n.prototype=t,o}}();function Na(){}function Pn(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}f.templateSettings={escape:eE,evaluate:nE,interpolate:el,variable:"",imports:{_:f}},f.prototype=Na.prototype,f.prototype.constructor=f,Pn.prototype=et(Na.prototype),Pn.prototype.constructor=Pn;function Te(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=re,this.__views__=[]}function Um(){var n=new Te(this.__wrapped__);return n.__actions__=Tn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Tn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Tn(this.__views__),n}function Hm(){if(this.__filtered__){var n=new Te(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function xm(){var n=this.__wrapped__.value(),r=this.__dir__,o=ve(n),u=r<0,k=o?n.length:0,p=rp(0,k,this.__views__),T=p.start,R=p.end,b=R-T,w=u?R:T-1,j=this.__iteratees__,H=j.length,Q=0,oe=sn(b,this.__takeCount__);if(!o||!u&&k==b&&oe==b)return mu(n,this.__actions__);var de=[];e:for(;b--&&Q<oe;){w+=r;for(var me=-1,ge=n[w];++me<H;){var pe=j[me],he=pe.iteratee,Sn=pe.type,En=he(ge);if(Sn==x)ge=En;else if(!En){if(Sn==C)continue e;break e}}de[Q++]=ge}return de}Te.prototype=et(Na.prototype),Te.prototype.constructor=Te;function Fr(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var u=n[r];this.set(u[0],u[1])}}function qm(){this.__data__=_t?_t(null):{},this.size=0}function Ym(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function Cm(n){var r=this.__data__;if(_t){var o=r[n];return o===v?t:o}return Le.call(r,n)?r[n]:t}function $m(n){var r=this.__data__;return _t?r[n]!==t:Le.call(r,n)}function Jm(n,r){var o=this.__data__;return this.size+=this.has(n)?0:1,o[n]=_t&&r===t?v:r,this}Fr.prototype.clear=qm,Fr.prototype.delete=Ym,Fr.prototype.get=Cm,Fr.prototype.has=$m,Fr.prototype.set=Jm;function ur(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var u=n[r];this.set(u[0],u[1])}}function Wm(){this.__data__=[],this.size=0}function zm(n){var r=this.__data__,o=ba(r,n);if(o<0)return!1;var u=r.length-1;return o==u?r.pop():ha.call(r,o,1),--this.size,!0}function Xm(n){var r=this.__data__,o=ba(r,n);return o<0?t:r[o][1]}function Zm(n){return ba(this.__data__,n)>-1}function Qm(n,r){var o=this.__data__,u=ba(o,n);return u<0?(++this.size,o.push([n,r])):o[u][1]=r,this}ur.prototype.clear=Wm,ur.prototype.delete=zm,ur.prototype.get=Xm,ur.prototype.has=Zm,ur.prototype.set=Qm;function dr(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var u=n[r];this.set(u[0],u[1])}}function ef(){this.size=0,this.__data__={hash:new Fr,map:new(yt||ur),string:new Fr}}function nf(n){var r=Va(this,n).delete(n);return this.size-=r?1:0,r}function rf(n){return Va(this,n).get(n)}function tf(n){return Va(this,n).has(n)}function af(n,r){var o=Va(this,n),u=o.size;return o.set(n,r),this.size+=o.size==u?0:1,this}dr.prototype.clear=ef,dr.prototype.delete=nf,dr.prototype.get=rf,dr.prototype.has=tf,dr.prototype.set=af;function Mr(n){var r=-1,o=n==null?0:n.length;for(this.__data__=new dr;++r<o;)this.add(n[r])}function sf(n){return this.__data__.set(n,v),this}function of(n){return this.__data__.has(n)}Mr.prototype.add=Mr.prototype.push=sf,Mr.prototype.has=of;function Hn(n){var r=this.__data__=new ur(n);this.size=r.size}function lf(){this.__data__=new ur,this.size=0}function uf(n){var r=this.__data__,o=r.delete(n);return this.size=r.size,o}function df(n){return this.__data__.get(n)}function gf(n){return this.__data__.has(n)}function kf(n,r){var o=this.__data__;if(o instanceof ur){var u=o.__data__;if(!yt||u.length<s-1)return u.push([n,r]),this.size=++o.size,this;o=this.__data__=new dr(u)}return o.set(n,r),this.size=o.size,this}Hn.prototype.clear=lf,Hn.prototype.delete=uf,Hn.prototype.get=df,Hn.prototype.has=gf,Hn.prototype.set=kf;function Cl(n,r){var o=ve(n),u=!o&&jr(n),k=!o&&!u&&Ir(n),p=!o&&!u&&!k&&at(n),T=o||u||k||p,R=T?wi(n.length,Am):[],b=R.length;for(var w in n)(r||Le.call(n,w))&&!(T&&(w=="length"||k&&(w=="offset"||w=="parent")||p&&(w=="buffer"||w=="byteLength"||w=="byteOffset")||Er(w,b)))&&R.push(w);return R}function $l(n){var r=n.length;return r?n[rs(0,r-1)]:t}function vf(n,r){return wa(Tn(n),Gr(r,0,n.length))}function Ef(n){return wa(Tn(n))}function Ci(n,r,o){(o!==t&&!xn(n[r],o)||o===t&&!(r in n))&&gr(n,r,o)}function bt(n,r,o){var u=n[r];(!(Le.call(n,r)&&xn(u,o))||o===t&&!(r in n))&&gr(n,r,o)}function ba(n,r){for(var o=n.length;o--;)if(xn(n[o][0],r))return o;return-1}function mf(n,r,o,u){return _r(n,function(k,p,T){r(u,k,o(k),T)}),u}function Jl(n,r){return n&&zn(r,en(r),n)}function ff(n,r){return n&&zn(r,cn(r),n)}function gr(n,r,o){r=="__proto__"&&ca?ca(n,r,{configurable:!0,enumerable:!0,value:o,writable:!0}):n[r]=o}function $i(n,r){for(var o=-1,u=r.length,k=D(u),p=n==null;++o<u;)k[o]=p?t:Ss(n,r[o]);return k}function Gr(n,r,o){return n===n&&(o!==t&&(n=n<=o?n:o),r!==t&&(n=n>=r?n:r)),n}function Fn(n,r,o,u,k,p){var T,R=r&h,b=r&A,w=r&K;if(o&&(T=k?o(n,u,k,p):o(n)),T!==t)return T;if(!Ue(n))return n;var j=ve(n);if(j){if(T=ap(n),!R)return Tn(n,T)}else{var H=on(n),Q=H==Qe||H==dn;if(Ir(n))return Tu(n,R);if(H==rn||H==je||Q&&!k){if(T=b||Q?{}:Bu(n),!R)return b?$f(n,ff(T,n)):Cf(n,Jl(T,n))}else{if(!Fe[H])return k?n:{};T=ip(n,H,R)}}p||(p=new Hn);var oe=p.get(n);if(oe)return oe;p.set(n,T),kd(n)?n.forEach(function(ge){T.add(Fn(ge,r,o,ge,n,p))}):dd(n)&&n.forEach(function(ge,pe){T.set(pe,Fn(ge,r,o,pe,n,p))});var de=w?b?vs:ks:b?cn:en,me=j?t:de(n);return Kn(me||n,function(ge,pe){me&&(pe=ge,ge=n[pe]),bt(T,pe,Fn(ge,r,o,pe,n,p))}),T}function pf(n){var r=en(n);return function(o){return Wl(o,n,r)}}function Wl(n,r,o){var u=o.length;if(n==null)return!u;for(n=Pe(n);u--;){var k=o[u],p=r[k],T=n[k];if(T===t&&!(k in n)||!p(T))return!1}return!0}function zl(n,r,o){if(typeof n!="function")throw new Dn(d);return Pt(function(){n.apply(t,o)},r)}function St(n,r,o,u){var k=-1,p=ua,T=!0,R=n.length,b=[],w=r.length;if(!R)return b;o&&(r=we(r,_n(o))),u?(p=Pi,T=!1):r.length>=s&&(p=ct,T=!1,r=new Mr(r));e:for(;++k<R;){var j=n[k],H=o==null?j:o(j);if(j=u||j!==0?j:0,T&&H===H){for(var Q=w;Q--;)if(r[Q]===H)continue e;b.push(j)}else p(r,H,u)||b.push(j)}return b}var _r=Ru(Wn),Xl=Ru(Wi,!0);function Tf(n,r){var o=!0;return _r(n,function(u,k,p){return o=!!r(u,k,p),o}),o}function Sa(n,r,o){for(var u=-1,k=n.length;++u<k;){var p=n[u],T=r(p);if(T!=null&&(R===t?T===T&&!bn(T):o(T,R)))var R=T,b=p}return b}function hf(n,r,o,u){var k=n.length;for(o=Ee(o),o<0&&(o=-o>k?0:k+o),u=u===t||u>k?k:Ee(u),u<0&&(u+=k),u=o>u?0:Ed(u);o<u;)n[o++]=r;return n}function Zl(n,r){var o=[];return _r(n,function(u,k,p){r(u,k,p)&&o.push(u)}),o}function an(n,r,o,u,k){var p=-1,T=n.length;for(o||(o=op),k||(k=[]);++p<T;){var R=n[p];r>0&&o(R)?r>1?an(R,r-1,o,u,k):Ar(k,R):u||(k[k.length]=R)}return k}var Ji=_u(),Ql=_u(!0);function Wn(n,r){return n&&Ji(n,r,en)}function Wi(n,r){return n&&Ql(n,r,en)}function Ia(n,r){return cr(r,function(o){return mr(n[o])})}function Br(n,r){r=br(r,n);for(var o=0,u=r.length;n!=null&&o<u;)n=n[Xn(r[o++])];return o&&o==u?n:t}function eu(n,r,o){var u=r(n);return ve(n)?u:Ar(u,o(n))}function kn(n){return n==null?n===t?$v:or:Pr&&Pr in Pe(n)?np(n):Ep(n)}function zi(n,r){return n>r}function cf(n,r){return n!=null&&Le.call(n,r)}function Af(n,r){return n!=null&&r in Pe(n)}function yf(n,r,o){return n>=sn(r,o)&&n<Ze(r,o)}function Xi(n,r,o){for(var u=o?Pi:ua,k=n[0].length,p=n.length,T=p,R=D(p),b=1/0,w=[];T--;){var j=n[T];T&&r&&(j=we(j,_n(r))),b=sn(j.length,b),R[T]=!o&&(r||k>=120&&j.length>=120)?new Mr(T&&j):t}j=n[0];var H=-1,Q=R[0];e:for(;++H<k&&w.length<b;){var oe=j[H],de=r?r(oe):oe;if(oe=o||oe!==0?oe:0,!(Q?ct(Q,de):u(w,de,o))){for(T=p;--T;){var me=R[T];if(!(me?ct(me,de):u(n[T],de,o)))continue e}Q&&Q.push(de),w.push(oe)}}return w}function Rf(n,r,o,u){return Wn(n,function(k,p,T){r(u,o(k),p,T)}),u}function It(n,r,o){r=br(r,n),n=Uu(n,r);var u=n==null?n:n[Xn(Gn(r))];return u==null?t:Rn(u,n,o)}function nu(n){return Ye(n)&&kn(n)==je}function _f(n){return Ye(n)&&kn(n)==ht}function Nf(n){return Ye(n)&&kn(n)==ze}function Ot(n,r,o,u,k){return n===r?!0:n==null||r==null||!Ye(n)&&!Ye(r)?n!==n&&r!==r:bf(n,r,o,u,Ot,k)}function bf(n,r,o,u,k,p){var T=ve(n),R=ve(r),b=T?ln:on(n),w=R?ln:on(r);b=b==je?rn:b,w=w==je?rn:w;var j=b==rn,H=w==rn,Q=b==w;if(Q&&Ir(n)){if(!Ir(r))return!1;T=!0,j=!1}if(Q&&!j)return p||(p=new Hn),T||at(n)?Fu(n,r,o,u,k,p):Qf(n,r,b,o,u,k,p);if(!(o&P)){var oe=j&&Le.call(n,"__wrapped__"),de=H&&Le.call(r,"__wrapped__");if(oe||de){var me=oe?n.value():n,ge=de?r.value():r;return p||(p=new Hn),k(me,ge,o,u,p)}}return Q?(p||(p=new Hn),ep(n,r,o,u,k,p)):!1}function Sf(n){return Ye(n)&&on(n)==$e}function Zi(n,r,o,u){var k=o.length,p=k,T=!u;if(n==null)return!p;for(n=Pe(n);k--;){var R=o[k];if(T&&R[2]?R[1]!==n[R[0]]:!(R[0]in n))return!1}for(;++k<p;){R=o[k];var b=R[0],w=n[b],j=R[1];if(T&&R[2]){if(w===t&&!(b in n))return!1}else{var H=new Hn;if(u)var Q=u(w,j,b,n,r,H);if(!(Q===t?Ot(j,w,P|c,u,H):Q))return!1}}return!0}function ru(n){if(!Ue(n)||up(n))return!1;var r=mr(n)?bm:fE;return r.test(wr(n))}function If(n){return Ye(n)&&kn(n)==ft}function Of(n){return Ye(n)&&on(n)==jn}function Lf(n){return Ye(n)&&Ya(n.length)&&!!Me[kn(n)]}function tu(n){return typeof n=="function"?n:n==null?An:typeof n=="object"?ve(n)?su(n[0],n[1]):iu(n):Nd(n)}function Qi(n){if(!Dt(n))return Dm(n);var r=[];for(var o in Pe(n))Le.call(n,o)&&o!="constructor"&&r.push(o);return r}function Kf(n){if(!Ue(n))return vp(n);var r=Dt(n),o=[];for(var u in n)u=="constructor"&&(r||!Le.call(n,u))||o.push(u);return o}function es(n,r){return n<r}function au(n,r){var o=-1,u=hn(n)?D(n.length):[];return _r(n,function(k,p,T){u[++o]=r(k,p,T)}),u}function iu(n){var r=ms(n);return r.length==1&&r[0][2]?wu(r[0][0],r[0][1]):function(o){return o===n||Zi(o,n,r)}}function su(n,r){return ps(n)&&Vu(r)?wu(Xn(n),r):function(o){var u=Ss(o,n);return u===t&&u===r?Is(o,n):Ot(r,u,P|c)}}function Oa(n,r,o,u,k){n!==r&&Ji(r,function(p,T){if(k||(k=new Hn),Ue(p))Df(n,r,T,o,Oa,u,k);else{var R=u?u(hs(n,T),p,T+"",n,r,k):t;R===t&&(R=p),Ci(n,T,R)}},cn)}function Df(n,r,o,u,k,p,T){var R=hs(n,o),b=hs(r,o),w=T.get(b);if(w){Ci(n,o,w);return}var j=p?p(R,b,o+"",n,r,T):t,H=j===t;if(H){var Q=ve(b),oe=!Q&&Ir(b),de=!Q&&!oe&&at(b);j=b,Q||oe||de?ve(R)?j=R:Je(R)?j=Tn(R):oe?(H=!1,j=Tu(b,!0)):de?(H=!1,j=hu(b,!0)):j=[]:Ft(b)||jr(b)?(j=R,jr(R)?j=md(R):(!Ue(R)||mr(R))&&(j=Bu(b))):H=!1}H&&(T.set(b,j),k(j,b,u,p,T),T.delete(b)),Ci(n,o,j)}function ou(n,r){var o=n.length;if(o)return r+=r<0?o:0,Er(r,o)?n[r]:t}function lu(n,r,o){r.length?r=we(r,function(p){return ve(p)?function(T){return Br(T,p.length===1?p[0]:p)}:p}):r=[An];var u=-1;r=we(r,_n(ue()));var k=au(n,function(p,T,R){var b=we(r,function(w){return w(p)});return{criteria:b,index:++u,value:p}});return am(k,function(p,T){return Yf(p,T,o)})}function Pf(n,r){return uu(n,r,function(o,u){return Is(n,u)})}function uu(n,r,o){for(var u=-1,k=r.length,p={};++u<k;){var T=r[u],R=Br(n,T);o(R,T)&&Lt(p,br(T,n),R)}return p}function Ff(n){return function(r){return Br(r,n)}}function ns(n,r,o,u){var k=u?tm:$r,p=-1,T=r.length,R=n;for(n===r&&(r=Tn(r)),o&&(R=we(n,_n(o)));++p<T;)for(var b=0,w=r[p],j=o?o(w):w;(b=k(R,j,b,u))>-1;)R!==n&&ha.call(R,b,1),ha.call(n,b,1);return n}function du(n,r){for(var o=n?r.length:0,u=o-1;o--;){var k=r[o];if(o==u||k!==p){var p=k;Er(k)?ha.call(n,k,1):is(n,k)}}return n}function rs(n,r){return n+ya(ql()*(r-n+1))}function Mf(n,r,o,u){for(var k=-1,p=Ze(Aa((r-n)/(o||1)),0),T=D(p);p--;)T[u?p:++k]=n,n+=o;return T}function ts(n,r){var o="";if(!n||r<1||r>q)return o;do r%2&&(o+=n),r=ya(r/2),r&&(n+=n);while(r);return o}function fe(n,r){return cs(ju(n,r,An),n+"")}function Gf(n){return $l(it(n))}function Bf(n,r){var o=it(n);return wa(o,Gr(r,0,o.length))}function Lt(n,r,o,u){if(!Ue(n))return n;r=br(r,n);for(var k=-1,p=r.length,T=p-1,R=n;R!=null&&++k<p;){var b=Xn(r[k]),w=o;if(b==="__proto__"||b==="constructor"||b==="prototype")return n;if(k!=T){var j=R[b];w=u?u(j,b,R):t,w===t&&(w=Ue(j)?j:Er(r[k+1])?[]:{})}bt(R,b,w),R=R[b]}return n}var gu=Ra?function(n,r){return Ra.set(n,r),n}:An,Vf=ca?function(n,r){return ca(n,"toString",{configurable:!0,enumerable:!1,value:Ls(r),writable:!0})}:An;function wf(n){return wa(it(n))}function Mn(n,r,o){var u=-1,k=n.length;r<0&&(r=-r>k?0:k+r),o=o>k?k:o,o<0&&(o+=k),k=r>o?0:o-r>>>0,r>>>=0;for(var p=D(k);++u<k;)p[u]=n[u+r];return p}function jf(n,r){var o;return _r(n,function(u,k,p){return o=r(u,k,p),!o}),!!o}function La(n,r,o){var u=0,k=n==null?u:n.length;if(typeof r=="number"&&r===r&&k<=be){for(;u<k;){var p=u+k>>>1,T=n[p];T!==null&&!bn(T)&&(o?T<=r:T<r)?u=p+1:k=p}return k}return as(n,r,An,o)}function as(n,r,o,u){var k=0,p=n==null?0:n.length;if(p===0)return 0;r=o(r);for(var T=r!==r,R=r===null,b=bn(r),w=r===t;k<p;){var j=ya((k+p)/2),H=o(n[j]),Q=H!==t,oe=H===null,de=H===H,me=bn(H);if(T)var ge=u||de;else w?ge=de&&(u||Q):R?ge=de&&Q&&(u||!oe):b?ge=de&&Q&&!oe&&(u||!me):oe||me?ge=!1:ge=u?H<=r:H<r;ge?k=j+1:p=j}return sn(p,_e)}function ku(n,r){for(var o=-1,u=n.length,k=0,p=[];++o<u;){var T=n[o],R=r?r(T):T;if(!o||!xn(R,b)){var b=R;p[k++]=T===0?0:T}}return p}function vu(n){return typeof n=="number"?n:bn(n)?ae:+n}function Nn(n){if(typeof n=="string")return n;if(ve(n))return we(n,Nn)+"";if(bn(n))return Yl?Yl.call(n):"";var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}function Nr(n,r,o){var u=-1,k=ua,p=n.length,T=!0,R=[],b=R;if(o)T=!1,k=Pi;else if(p>=s){var w=r?null:Xf(n);if(w)return ga(w);T=!1,k=ct,b=new Mr}else b=r?[]:R;e:for(;++u<p;){var j=n[u],H=r?r(j):j;if(j=o||j!==0?j:0,T&&H===H){for(var Q=b.length;Q--;)if(b[Q]===H)continue e;r&&b.push(H),R.push(j)}else k(b,H,o)||(b!==R&&b.push(H),R.push(j))}return R}function is(n,r){return r=br(r,n),n=Uu(n,r),n==null||delete n[Xn(Gn(r))]}function Eu(n,r,o,u){return Lt(n,r,o(Br(n,r)),u)}function Ka(n,r,o,u){for(var k=n.length,p=u?k:-1;(u?p--:++p<k)&&r(n[p],p,n););return o?Mn(n,u?0:p,u?p+1:k):Mn(n,u?p+1:0,u?k:p)}function mu(n,r){var o=n;return o instanceof Te&&(o=o.value()),Fi(r,function(u,k){return k.func.apply(k.thisArg,Ar([u],k.args))},o)}function ss(n,r,o){var u=n.length;if(u<2)return u?Nr(n[0]):[];for(var k=-1,p=D(u);++k<u;)for(var T=n[k],R=-1;++R<u;)R!=k&&(p[k]=St(p[k]||T,n[R],r,o));return Nr(an(p,1),r,o)}function fu(n,r,o){for(var u=-1,k=n.length,p=r.length,T={};++u<k;){var R=u<p?r[u]:t;o(T,n[u],R)}return T}function os(n){return Je(n)?n:[]}function ls(n){return typeof n=="function"?n:An}function br(n,r){return ve(n)?n:ps(n,r)?[n]:Yu(Se(n))}var Uf=fe;function Sr(n,r,o){var u=n.length;return o=o===t?u:o,!r&&o>=u?n:Mn(n,r,o)}var pu=Sm||function(n){return tn.clearTimeout(n)};function Tu(n,r){if(r)return n.slice();var o=n.length,u=wl?wl(o):new n.constructor(o);return n.copy(u),u}function us(n){var r=new n.constructor(n.byteLength);return new pa(r).set(new pa(n)),r}function Hf(n,r){var o=r?us(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.byteLength)}function xf(n){var r=new n.constructor(n.source,nl.exec(n));return r.lastIndex=n.lastIndex,r}function qf(n){return Nt?Pe(Nt.call(n)):{}}function hu(n,r){var o=r?us(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.length)}function cu(n,r){if(n!==r){var o=n!==t,u=n===null,k=n===n,p=bn(n),T=r!==t,R=r===null,b=r===r,w=bn(r);if(!R&&!w&&!p&&n>r||p&&T&&b&&!R&&!w||u&&T&&b||!o&&b||!k)return 1;if(!u&&!p&&!w&&n<r||w&&o&&k&&!u&&!p||R&&o&&k||!T&&k||!b)return-1}return 0}function Yf(n,r,o){for(var u=-1,k=n.criteria,p=r.criteria,T=k.length,R=o.length;++u<T;){var b=cu(k[u],p[u]);if(b){if(u>=R)return b;var w=o[u];return b*(w=="desc"?-1:1)}}return n.index-r.index}function Au(n,r,o,u){for(var k=-1,p=n.length,T=o.length,R=-1,b=r.length,w=Ze(p-T,0),j=D(b+w),H=!u;++R<b;)j[R]=r[R];for(;++k<T;)(H||k<p)&&(j[o[k]]=n[k]);for(;w--;)j[R++]=n[k++];return j}function yu(n,r,o,u){for(var k=-1,p=n.length,T=-1,R=o.length,b=-1,w=r.length,j=Ze(p-R,0),H=D(j+w),Q=!u;++k<j;)H[k]=n[k];for(var oe=k;++b<w;)H[oe+b]=r[b];for(;++T<R;)(Q||k<p)&&(H[oe+o[T]]=n[k++]);return H}function Tn(n,r){var o=-1,u=n.length;for(r||(r=D(u));++o<u;)r[o]=n[o];return r}function zn(n,r,o,u){var k=!o;o||(o={});for(var p=-1,T=r.length;++p<T;){var R=r[p],b=u?u(o[R],n[R],R,o,n):t;b===t&&(b=n[R]),k?gr(o,R,b):bt(o,R,b)}return o}function Cf(n,r){return zn(n,fs(n),r)}function $f(n,r){return zn(n,Mu(n),r)}function Da(n,r){return function(o,u){var k=ve(o)?XE:mf,p=r?r():{};return k(o,n,ue(u,2),p)}}function nt(n){return fe(function(r,o){var u=-1,k=o.length,p=k>1?o[k-1]:t,T=k>2?o[2]:t;for(p=n.length>3&&typeof p=="function"?(k--,p):t,T&&vn(o[0],o[1],T)&&(p=k<3?t:p,k=1),r=Pe(r);++u<k;){var R=o[u];R&&n(r,R,u,p)}return r})}function Ru(n,r){return function(o,u){if(o==null)return o;if(!hn(o))return n(o,u);for(var k=o.length,p=r?k:-1,T=Pe(o);(r?p--:++p<k)&&u(T[p],p,T)!==!1;);return o}}function _u(n){return function(r,o,u){for(var k=-1,p=Pe(r),T=u(r),R=T.length;R--;){var b=T[n?R:++k];if(o(p[b],b,p)===!1)break}return r}}function Jf(n,r,o){var u=r&_,k=Kt(n);function p(){var T=this&&this!==tn&&this instanceof p?k:n;return T.apply(u?o:this,arguments)}return p}function Nu(n){return function(r){r=Se(r);var o=Jr(r)?Un(r):t,u=o?o[0]:r.charAt(0),k=o?Sr(o,1).join(""):r.slice(1);return u[n]()+k}}function rt(n){return function(r){return Fi(Rd(yd(r).replace(BE,"")),n,"")}}function Kt(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var o=et(n.prototype),u=n.apply(o,r);return Ue(u)?u:o}}function Wf(n,r,o){var u=Kt(n);function k(){for(var p=arguments.length,T=D(p),R=p,b=tt(k);R--;)T[R]=arguments[R];var w=p<3&&T[0]!==b&&T[p-1]!==b?[]:yr(T,b);if(p-=w.length,p<o)return Lu(n,r,Pa,k.placeholder,t,T,w,t,t,o-p);var j=this&&this!==tn&&this instanceof k?u:n;return Rn(j,this,T)}return k}function bu(n){return function(r,o,u){var k=Pe(r);if(!hn(r)){var p=ue(o,3);r=en(r),o=function(R){return p(k[R],R,k)}}var T=n(r,o,u);return T>-1?k[p?r[T]:T]:t}}function Su(n){return vr(function(r){var o=r.length,u=o,k=Pn.prototype.thru;for(n&&r.reverse();u--;){var p=r[u];if(typeof p!="function")throw new Dn(d);if(k&&!T&&Ba(p)=="wrapper")var T=new Pn([],!0)}for(u=T?u:o;++u<o;){p=r[u];var R=Ba(p),b=R=="wrapper"?Es(p):t;b&&Ts(b[0])&&b[1]==(L|S|y|I)&&!b[4].length&&b[9]==1?T=T[Ba(b[0])].apply(T,b[3]):T=p.length==1&&Ts(p)?T[R]():T.thru(p)}return function(){var w=arguments,j=w[0];if(T&&w.length==1&&ve(j))return T.plant(j).value();for(var H=0,Q=o?r[H].apply(this,w):j;++H<o;)Q=r[H].call(this,Q);return Q}})}function Pa(n,r,o,u,k,p,T,R,b,w){var j=r&L,H=r&_,Q=r&O,oe=r&(S|X),de=r&Y,me=Q?t:Kt(n);function ge(){for(var pe=arguments.length,he=D(pe),Sn=pe;Sn--;)he[Sn]=arguments[Sn];if(oe)var En=tt(ge),In=sm(he,En);if(u&&(he=Au(he,u,k,oe)),p&&(he=yu(he,p,T,oe)),pe-=In,oe&&pe<w){var We=yr(he,En);return Lu(n,r,Pa,ge.placeholder,o,he,We,R,b,w-pe)}var qn=H?o:this,pr=Q?qn[n]:n;return pe=he.length,R?he=mp(he,R):de&&pe>1&&he.reverse(),j&&b<pe&&(he.length=b),this&&this!==tn&&this instanceof ge&&(pr=me||Kt(pr)),pr.apply(qn,he)}return ge}function Iu(n,r){return function(o,u){return Rf(o,n,r(u),{})}}function Fa(n,r){return function(o,u){var k;if(o===t&&u===t)return r;if(o!==t&&(k=o),u!==t){if(k===t)return u;typeof o=="string"||typeof u=="string"?(o=Nn(o),u=Nn(u)):(o=vu(o),u=vu(u)),k=n(o,u)}return k}}function ds(n){return vr(function(r){return r=we(r,_n(ue())),fe(function(o){var u=this;return n(r,function(k){return Rn(k,u,o)})})})}function Ma(n,r){r=r===t?" ":Nn(r);var o=r.length;if(o<2)return o?ts(r,n):r;var u=ts(r,Aa(n/Wr(r)));return Jr(r)?Sr(Un(u),0,n).join(""):u.slice(0,n)}function zf(n,r,o,u){var k=r&_,p=Kt(n);function T(){for(var R=-1,b=arguments.length,w=-1,j=u.length,H=D(j+b),Q=this&&this!==tn&&this instanceof T?p:n;++w<j;)H[w]=u[w];for(;b--;)H[w++]=arguments[++R];return Rn(Q,k?o:this,H)}return T}function Ou(n){return function(r,o,u){return u&&typeof u!="number"&&vn(r,o,u)&&(o=u=t),r=fr(r),o===t?(o=r,r=0):o=fr(o),u=u===t?r<o?1:-1:fr(u),Mf(r,o,u,n)}}function Ga(n){return function(r,o){return typeof r=="string"&&typeof o=="string"||(r=Bn(r),o=Bn(o)),n(r,o)}}function Lu(n,r,o,u,k,p,T,R,b,w){var j=r&S,H=j?T:t,Q=j?t:T,oe=j?p:t,de=j?t:p;r|=j?y:M,r&=~(j?M:y),r&V||(r&=-4);var me=[n,r,k,oe,H,de,Q,R,b,w],ge=o.apply(t,me);return Ts(n)&&Hu(ge,me),ge.placeholder=u,xu(ge,n,r)}function gs(n){var r=Xe[n];return function(o,u){if(o=Bn(o),u=u==null?0:sn(Ee(u),292),u&&xl(o)){var k=(Se(o)+"e").split("e"),p=r(k[0]+"e"+(+k[1]+u));return k=(Se(p)+"e").split("e"),+(k[0]+"e"+(+k[1]-u))}return r(o)}}var Xf=Zr&&1/ga(new Zr([,-0]))[1]==Z?function(n){return new Zr(n)}:Ps;function Ku(n){return function(r){var o=on(r);return o==$e?Ui(r):o==jn?vm(r):im(r,n(r))}}function kr(n,r,o,u,k,p,T,R){var b=r&O;if(!b&&typeof n!="function")throw new Dn(d);var w=u?u.length:0;if(w||(r&=-97,u=k=t),T=T===t?T:Ze(Ee(T),0),R=R===t?R:Ee(R),w-=k?k.length:0,r&M){var j=u,H=k;u=k=t}var Q=b?t:Es(n),oe=[n,r,o,u,k,j,H,p,T,R];if(Q&&kp(oe,Q),n=oe[0],r=oe[1],o=oe[2],u=oe[3],k=oe[4],R=oe[9]=oe[9]===t?b?0:n.length:Ze(oe[9]-w,0),!R&&r&(S|X)&&(r&=-25),!r||r==_)var de=Jf(n,r,o);else r==S||r==X?de=Wf(n,r,R):(r==y||r==(_|y))&&!k.length?de=zf(n,r,o,u):de=Pa.apply(t,oe);var me=Q?gu:Hu;return xu(me(de,oe),n,r)}function Du(n,r,o,u){return n===t||xn(n,Xr[o])&&!Le.call(u,o)?r:n}function Pu(n,r,o,u,k,p){return Ue(n)&&Ue(r)&&(p.set(r,n),Oa(n,r,t,Pu,p),p.delete(r)),n}function Zf(n){return Ft(n)?t:n}function Fu(n,r,o,u,k,p){var T=o&P,R=n.length,b=r.length;if(R!=b&&!(T&&b>R))return!1;var w=p.get(n),j=p.get(r);if(w&&j)return w==r&&j==n;var H=-1,Q=!0,oe=o&c?new Mr:t;for(p.set(n,r),p.set(r,n);++H<R;){var de=n[H],me=r[H];if(u)var ge=T?u(me,de,H,r,n,p):u(de,me,H,n,r,p);if(ge!==t){if(ge)continue;Q=!1;break}if(oe){if(!Mi(r,function(pe,he){if(!ct(oe,he)&&(de===pe||k(de,pe,o,u,p)))return oe.push(he)})){Q=!1;break}}else if(!(de===me||k(de,me,o,u,p))){Q=!1;break}}return p.delete(n),p.delete(r),Q}function Qf(n,r,o,u,k,p,T){switch(o){case Yr:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case ht:return!(n.byteLength!=r.byteLength||!p(new pa(n),new pa(r)));case un:case ze:case gn:return xn(+n,+r);case Ce:return n.name==r.name&&n.message==r.message;case ft:case pt:return n==r+"";case $e:var R=Ui;case jn:var b=u&P;if(R||(R=ga),n.size!=r.size&&!b)return!1;var w=T.get(n);if(w)return w==r;u|=c,T.set(n,r);var j=Fu(R(n),R(r),u,k,p,T);return T.delete(n),j;case ia:if(Nt)return Nt.call(n)==Nt.call(r)}return!1}function ep(n,r,o,u,k,p){var T=o&P,R=ks(n),b=R.length,w=ks(r),j=w.length;if(b!=j&&!T)return!1;for(var H=b;H--;){var Q=R[H];if(!(T?Q in r:Le.call(r,Q)))return!1}var oe=p.get(n),de=p.get(r);if(oe&&de)return oe==r&&de==n;var me=!0;p.set(n,r),p.set(r,n);for(var ge=T;++H<b;){Q=R[H];var pe=n[Q],he=r[Q];if(u)var Sn=T?u(he,pe,Q,r,n,p):u(pe,he,Q,n,r,p);if(!(Sn===t?pe===he||k(pe,he,o,u,p):Sn)){me=!1;break}ge||(ge=Q=="constructor")}if(me&&!ge){var En=n.constructor,In=r.constructor;En!=In&&"constructor"in n&&"constructor"in r&&!(typeof En=="function"&&En instanceof En&&typeof In=="function"&&In instanceof In)&&(me=!1)}return p.delete(n),p.delete(r),me}function vr(n){return cs(ju(n,t,Wu),n+"")}function ks(n){return eu(n,en,fs)}function vs(n){return eu(n,cn,Mu)}var Es=Ra?function(n){return Ra.get(n)}:Ps;function Ba(n){for(var r=n.name+"",o=Qr[r],u=Le.call(Qr,r)?o.length:0;u--;){var k=o[u],p=k.func;if(p==null||p==n)return k.name}return r}function tt(n){var r=Le.call(f,"placeholder")?f:n;return r.placeholder}function ue(){var n=f.iteratee||Ks;return n=n===Ks?tu:n,arguments.length?n(arguments[0],arguments[1]):n}function Va(n,r){var o=n.__data__;return lp(r)?o[typeof r=="string"?"string":"hash"]:o.map}function ms(n){for(var r=en(n),o=r.length;o--;){var u=r[o],k=n[u];r[o]=[u,k,Vu(k)]}return r}function Vr(n,r){var o=dm(n,r);return ru(o)?o:t}function np(n){var r=Le.call(n,Pr),o=n[Pr];try{n[Pr]=t;var u=!0}catch{}var k=ma.call(n);return u&&(r?n[Pr]=o:delete n[Pr]),k}var fs=xi?function(n){return n==null?[]:(n=Pe(n),cr(xi(n),function(r){return Ul.call(n,r)}))}:Fs,Mu=xi?function(n){for(var r=[];n;)Ar(r,fs(n)),n=Ta(n);return r}:Fs,on=kn;(qi&&on(new qi(new ArrayBuffer(1)))!=Yr||yt&&on(new yt)!=$e||Yi&&on(Yi.resolve())!=Jn||Zr&&on(new Zr)!=jn||Rt&&on(new Rt)!=Tt)&&(on=function(n){var r=kn(n),o=r==rn?n.constructor:t,u=o?wr(o):"";if(u)switch(u){case Gm:return Yr;case Bm:return $e;case Vm:return Jn;case wm:return jn;case jm:return Tt}return r});function rp(n,r,o){for(var u=-1,k=o.length;++u<k;){var p=o[u],T=p.size;switch(p.type){case"drop":n+=T;break;case"dropRight":r-=T;break;case"take":r=sn(r,n+T);break;case"takeRight":n=Ze(n,r-T);break}}return{start:n,end:r}}function tp(n){var r=n.match(lE);return r?r[1].split(uE):[]}function Gu(n,r,o){r=br(r,n);for(var u=-1,k=r.length,p=!1;++u<k;){var T=Xn(r[u]);if(!(p=n!=null&&o(n,T)))break;n=n[T]}return p||++u!=k?p:(k=n==null?0:n.length,!!k&&Ya(k)&&Er(T,k)&&(ve(n)||jr(n)))}function ap(n){var r=n.length,o=new n.constructor(r);return r&&typeof n[0]=="string"&&Le.call(n,"index")&&(o.index=n.index,o.input=n.input),o}function Bu(n){return typeof n.constructor=="function"&&!Dt(n)?et(Ta(n)):{}}function ip(n,r,o){var u=n.constructor;switch(r){case ht:return us(n);case un:case ze:return new u(+n);case Yr:return Hf(n,o);case mi:case fi:case pi:case Ti:case hi:case ci:case Ai:case yi:case Ri:return hu(n,o);case $e:return new u;case gn:case pt:return new u(n);case ft:return xf(n);case jn:return new u;case ia:return qf(n)}}function sp(n,r){var o=r.length;if(!o)return n;var u=o-1;return r[u]=(o>1?"& ":"")+r[u],r=r.join(o>2?", ":" "),n.replace(oE,`{
/* [wrapped with `+r+`] */
`)}function op(n){return ve(n)||jr(n)||!!(Hl&&n&&n[Hl])}function Er(n,r){var o=typeof n;return r=r??q,!!r&&(o=="number"||o!="symbol"&&TE.test(n))&&n>-1&&n%1==0&&n<r}function vn(n,r,o){if(!Ue(o))return!1;var u=typeof r;return(u=="number"?hn(o)&&Er(r,o.length):u=="string"&&r in o)?xn(o[r],n):!1}function ps(n,r){if(ve(n))return!1;var o=typeof n;return o=="number"||o=="symbol"||o=="boolean"||n==null||bn(n)?!0:tE.test(n)||!rE.test(n)||r!=null&&n in Pe(r)}function lp(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function Ts(n){var r=Ba(n),o=f[r];if(typeof o!="function"||!(r in Te.prototype))return!1;if(n===o)return!0;var u=Es(o);return!!u&&n===u[0]}function up(n){return!!Vl&&Vl in n}var dp=va?mr:Ms;function Dt(n){var r=n&&n.constructor,o=typeof r=="function"&&r.prototype||Xr;return n===o}function Vu(n){return n===n&&!Ue(n)}function wu(n,r){return function(o){return o==null?!1:o[n]===r&&(r!==t||n in Pe(o))}}function gp(n){var r=xa(n,function(u){return o.size===E&&o.clear(),u}),o=r.cache;return r}function kp(n,r){var o=n[1],u=r[1],k=o|u,p=k<(_|O|L),T=u==L&&o==S||u==L&&o==I&&n[7].length<=r[8]||u==(L|I)&&r[7].length<=r[8]&&o==S;if(!(p||T))return n;u&_&&(n[2]=r[2],k|=o&_?0:V);var R=r[3];if(R){var b=n[3];n[3]=b?Au(b,R,r[4]):R,n[4]=b?yr(n[3],m):r[4]}return R=r[5],R&&(b=n[5],n[5]=b?yu(b,R,r[6]):R,n[6]=b?yr(n[5],m):r[6]),R=r[7],R&&(n[7]=R),u&L&&(n[8]=n[8]==null?r[8]:sn(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=k,n}function vp(n){var r=[];if(n!=null)for(var o in Pe(n))r.push(o);return r}function Ep(n){return ma.call(n)}function ju(n,r,o){return r=Ze(r===t?n.length-1:r,0),function(){for(var u=arguments,k=-1,p=Ze(u.length-r,0),T=D(p);++k<p;)T[k]=u[r+k];k=-1;for(var R=D(r+1);++k<r;)R[k]=u[k];return R[r]=o(T),Rn(n,this,R)}}function Uu(n,r){return r.length<2?n:Br(n,Mn(r,0,-1))}function mp(n,r){for(var o=n.length,u=sn(r.length,o),k=Tn(n);u--;){var p=r[u];n[u]=Er(p,o)?k[p]:t}return n}function hs(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var Hu=qu(gu),Pt=Om||function(n,r){return tn.setTimeout(n,r)},cs=qu(Vf);function xu(n,r,o){var u=r+"";return cs(n,sp(u,fp(tp(u),o)))}function qu(n){var r=0,o=0;return function(){var u=Pm(),k=W-(u-o);if(o=u,k>0){if(++r>=ne)return arguments[0]}else r=0;return n.apply(t,arguments)}}function wa(n,r){var o=-1,u=n.length,k=u-1;for(r=r===t?u:r;++o<r;){var p=rs(o,k),T=n[p];n[p]=n[o],n[o]=T}return n.length=r,n}var Yu=gp(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(aE,function(o,u,k,p){r.push(k?p.replace(kE,"$1"):u||o)}),r});function Xn(n){if(typeof n=="string"||bn(n))return n;var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}function wr(n){if(n!=null){try{return Ea.call(n)}catch{}try{return n+""}catch{}}return""}function fp(n,r){return Kn(xe,function(o){var u="_."+o[0];r&o[1]&&!ua(n,u)&&n.push(u)}),n.sort()}function Cu(n){if(n instanceof Te)return n.clone();var r=new Pn(n.__wrapped__,n.__chain__);return r.__actions__=Tn(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function pp(n,r,o){(o?vn(n,r,o):r===t)?r=1:r=Ze(Ee(r),0);var u=n==null?0:n.length;if(!u||r<1)return[];for(var k=0,p=0,T=D(Aa(u/r));k<u;)T[p++]=Mn(n,k,k+=r);return T}function Tp(n){for(var r=-1,o=n==null?0:n.length,u=0,k=[];++r<o;){var p=n[r];p&&(k[u++]=p)}return k}function hp(){var n=arguments.length;if(!n)return[];for(var r=D(n-1),o=arguments[0],u=n;u--;)r[u-1]=arguments[u];return Ar(ve(o)?Tn(o):[o],an(r,1))}var cp=fe(function(n,r){return Je(n)?St(n,an(r,1,Je,!0)):[]}),Ap=fe(function(n,r){var o=Gn(r);return Je(o)&&(o=t),Je(n)?St(n,an(r,1,Je,!0),ue(o,2)):[]}),yp=fe(function(n,r){var o=Gn(r);return Je(o)&&(o=t),Je(n)?St(n,an(r,1,Je,!0),t,o):[]});function Rp(n,r,o){var u=n==null?0:n.length;return u?(r=o||r===t?1:Ee(r),Mn(n,r<0?0:r,u)):[]}function _p(n,r,o){var u=n==null?0:n.length;return u?(r=o||r===t?1:Ee(r),r=u-r,Mn(n,0,r<0?0:r)):[]}function Np(n,r){return n&&n.length?Ka(n,ue(r,3),!0,!0):[]}function bp(n,r){return n&&n.length?Ka(n,ue(r,3),!0):[]}function Sp(n,r,o,u){var k=n==null?0:n.length;return k?(o&&typeof o!="number"&&vn(n,r,o)&&(o=0,u=k),hf(n,r,o,u)):[]}function $u(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var k=o==null?0:Ee(o);return k<0&&(k=Ze(u+k,0)),da(n,ue(r,3),k)}function Ju(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var k=u-1;return o!==t&&(k=Ee(o),k=o<0?Ze(u+k,0):sn(k,u-1)),da(n,ue(r,3),k,!0)}function Wu(n){var r=n==null?0:n.length;return r?an(n,1):[]}function Ip(n){var r=n==null?0:n.length;return r?an(n,Z):[]}function Op(n,r){var o=n==null?0:n.length;return o?(r=r===t?1:Ee(r),an(n,r)):[]}function Lp(n){for(var r=-1,o=n==null?0:n.length,u={};++r<o;){var k=n[r];u[k[0]]=k[1]}return u}function zu(n){return n&&n.length?n[0]:t}function Kp(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var k=o==null?0:Ee(o);return k<0&&(k=Ze(u+k,0)),$r(n,r,k)}function Dp(n){var r=n==null?0:n.length;return r?Mn(n,0,-1):[]}var Pp=fe(function(n){var r=we(n,os);return r.length&&r[0]===n[0]?Xi(r):[]}),Fp=fe(function(n){var r=Gn(n),o=we(n,os);return r===Gn(o)?r=t:o.pop(),o.length&&o[0]===n[0]?Xi(o,ue(r,2)):[]}),Mp=fe(function(n){var r=Gn(n),o=we(n,os);return r=typeof r=="function"?r:t,r&&o.pop(),o.length&&o[0]===n[0]?Xi(o,t,r):[]});function Gp(n,r){return n==null?"":Km.call(n,r)}function Gn(n){var r=n==null?0:n.length;return r?n[r-1]:t}function Bp(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var k=u;return o!==t&&(k=Ee(o),k=k<0?Ze(u+k,0):sn(k,u-1)),r===r?mm(n,r,k):da(n,Ll,k,!0)}function Vp(n,r){return n&&n.length?ou(n,Ee(r)):t}var wp=fe(Xu);function Xu(n,r){return n&&n.length&&r&&r.length?ns(n,r):n}function jp(n,r,o){return n&&n.length&&r&&r.length?ns(n,r,ue(o,2)):n}function Up(n,r,o){return n&&n.length&&r&&r.length?ns(n,r,t,o):n}var Hp=vr(function(n,r){var o=n==null?0:n.length,u=$i(n,r);return du(n,we(r,function(k){return Er(k,o)?+k:k}).sort(cu)),u});function xp(n,r){var o=[];if(!(n&&n.length))return o;var u=-1,k=[],p=n.length;for(r=ue(r,3);++u<p;){var T=n[u];r(T,u,n)&&(o.push(T),k.push(u))}return du(n,k),o}function As(n){return n==null?n:Mm.call(n)}function qp(n,r,o){var u=n==null?0:n.length;return u?(o&&typeof o!="number"&&vn(n,r,o)?(r=0,o=u):(r=r==null?0:Ee(r),o=o===t?u:Ee(o)),Mn(n,r,o)):[]}function Yp(n,r){return La(n,r)}function Cp(n,r,o){return as(n,r,ue(o,2))}function $p(n,r){var o=n==null?0:n.length;if(o){var u=La(n,r);if(u<o&&xn(n[u],r))return u}return-1}function Jp(n,r){return La(n,r,!0)}function Wp(n,r,o){return as(n,r,ue(o,2),!0)}function zp(n,r){var o=n==null?0:n.length;if(o){var u=La(n,r,!0)-1;if(xn(n[u],r))return u}return-1}function Xp(n){return n&&n.length?ku(n):[]}function Zp(n,r){return n&&n.length?ku(n,ue(r,2)):[]}function Qp(n){var r=n==null?0:n.length;return r?Mn(n,1,r):[]}function eT(n,r,o){return n&&n.length?(r=o||r===t?1:Ee(r),Mn(n,0,r<0?0:r)):[]}function nT(n,r,o){var u=n==null?0:n.length;return u?(r=o||r===t?1:Ee(r),r=u-r,Mn(n,r<0?0:r,u)):[]}function rT(n,r){return n&&n.length?Ka(n,ue(r,3),!1,!0):[]}function tT(n,r){return n&&n.length?Ka(n,ue(r,3)):[]}var aT=fe(function(n){return Nr(an(n,1,Je,!0))}),iT=fe(function(n){var r=Gn(n);return Je(r)&&(r=t),Nr(an(n,1,Je,!0),ue(r,2))}),sT=fe(function(n){var r=Gn(n);return r=typeof r=="function"?r:t,Nr(an(n,1,Je,!0),t,r)});function oT(n){return n&&n.length?Nr(n):[]}function lT(n,r){return n&&n.length?Nr(n,ue(r,2)):[]}function uT(n,r){return r=typeof r=="function"?r:t,n&&n.length?Nr(n,t,r):[]}function ys(n){if(!(n&&n.length))return[];var r=0;return n=cr(n,function(o){if(Je(o))return r=Ze(o.length,r),!0}),wi(r,function(o){return we(n,Gi(o))})}function Zu(n,r){if(!(n&&n.length))return[];var o=ys(n);return r==null?o:we(o,function(u){return Rn(r,t,u)})}var dT=fe(function(n,r){return Je(n)?St(n,r):[]}),gT=fe(function(n){return ss(cr(n,Je))}),kT=fe(function(n){var r=Gn(n);return Je(r)&&(r=t),ss(cr(n,Je),ue(r,2))}),vT=fe(function(n){var r=Gn(n);return r=typeof r=="function"?r:t,ss(cr(n,Je),t,r)}),ET=fe(ys);function mT(n,r){return fu(n||[],r||[],bt)}function fT(n,r){return fu(n||[],r||[],Lt)}var pT=fe(function(n){var r=n.length,o=r>1?n[r-1]:t;return o=typeof o=="function"?(n.pop(),o):t,Zu(n,o)});function Qu(n){var r=f(n);return r.__chain__=!0,r}function TT(n,r){return r(n),n}function ja(n,r){return r(n)}var hT=vr(function(n){var r=n.length,o=r?n[0]:0,u=this.__wrapped__,k=function(p){return $i(p,n)};return r>1||this.__actions__.length||!(u instanceof Te)||!Er(o)?this.thru(k):(u=u.slice(o,+o+(r?1:0)),u.__actions__.push({func:ja,args:[k],thisArg:t}),new Pn(u,this.__chain__).thru(function(p){return r&&!p.length&&p.push(t),p}))});function cT(){return Qu(this)}function AT(){return new Pn(this.value(),this.__chain__)}function yT(){this.__values__===t&&(this.__values__=vd(this.value()));var n=this.__index__>=this.__values__.length,r=n?t:this.__values__[this.__index__++];return{done:n,value:r}}function RT(){return this}function _T(n){for(var r,o=this;o instanceof Na;){var u=Cu(o);u.__index__=0,u.__values__=t,r?k.__wrapped__=u:r=u;var k=u;o=o.__wrapped__}return k.__wrapped__=n,r}function NT(){var n=this.__wrapped__;if(n instanceof Te){var r=n;return this.__actions__.length&&(r=new Te(this)),r=r.reverse(),r.__actions__.push({func:ja,args:[As],thisArg:t}),new Pn(r,this.__chain__)}return this.thru(As)}function bT(){return mu(this.__wrapped__,this.__actions__)}var ST=Da(function(n,r,o){Le.call(n,o)?++n[o]:gr(n,o,1)});function IT(n,r,o){var u=ve(n)?Il:Tf;return o&&vn(n,r,o)&&(r=t),u(n,ue(r,3))}function OT(n,r){var o=ve(n)?cr:Zl;return o(n,ue(r,3))}var LT=bu($u),KT=bu(Ju);function DT(n,r){return an(Ua(n,r),1)}function PT(n,r){return an(Ua(n,r),Z)}function FT(n,r,o){return o=o===t?1:Ee(o),an(Ua(n,r),o)}function ed(n,r){var o=ve(n)?Kn:_r;return o(n,ue(r,3))}function nd(n,r){var o=ve(n)?ZE:Xl;return o(n,ue(r,3))}var MT=Da(function(n,r,o){Le.call(n,o)?n[o].push(r):gr(n,o,[r])});function GT(n,r,o,u){n=hn(n)?n:it(n),o=o&&!u?Ee(o):0;var k=n.length;return o<0&&(o=Ze(k+o,0)),Ca(n)?o<=k&&n.indexOf(r,o)>-1:!!k&&$r(n,r,o)>-1}var BT=fe(function(n,r,o){var u=-1,k=typeof r=="function",p=hn(n)?D(n.length):[];return _r(n,function(T){p[++u]=k?Rn(r,T,o):It(T,r,o)}),p}),VT=Da(function(n,r,o){gr(n,o,r)});function Ua(n,r){var o=ve(n)?we:au;return o(n,ue(r,3))}function wT(n,r,o,u){return n==null?[]:(ve(r)||(r=r==null?[]:[r]),o=u?t:o,ve(o)||(o=o==null?[]:[o]),lu(n,r,o))}var jT=Da(function(n,r,o){n[o?0:1].push(r)},function(){return[[],[]]});function UT(n,r,o){var u=ve(n)?Fi:Dl,k=arguments.length<3;return u(n,ue(r,4),o,k,_r)}function HT(n,r,o){var u=ve(n)?QE:Dl,k=arguments.length<3;return u(n,ue(r,4),o,k,Xl)}function xT(n,r){var o=ve(n)?cr:Zl;return o(n,qa(ue(r,3)))}function qT(n){var r=ve(n)?$l:Gf;return r(n)}function YT(n,r,o){(o?vn(n,r,o):r===t)?r=1:r=Ee(r);var u=ve(n)?vf:Bf;return u(n,r)}function CT(n){var r=ve(n)?Ef:wf;return r(n)}function $T(n){if(n==null)return 0;if(hn(n))return Ca(n)?Wr(n):n.length;var r=on(n);return r==$e||r==jn?n.size:Qi(n).length}function JT(n,r,o){var u=ve(n)?Mi:jf;return o&&vn(n,r,o)&&(r=t),u(n,ue(r,3))}var WT=fe(function(n,r){if(n==null)return[];var o=r.length;return o>1&&vn(n,r[0],r[1])?r=[]:o>2&&vn(r[0],r[1],r[2])&&(r=[r[0]]),lu(n,an(r,1),[])}),Ha=Im||function(){return tn.Date.now()};function zT(n,r){if(typeof r!="function")throw new Dn(d);return n=Ee(n),function(){if(--n<1)return r.apply(this,arguments)}}function rd(n,r,o){return r=o?t:r,r=n&&r==null?n.length:r,kr(n,L,t,t,t,t,r)}function td(n,r){var o;if(typeof r!="function")throw new Dn(d);return n=Ee(n),function(){return--n>0&&(o=r.apply(this,arguments)),n<=1&&(r=t),o}}var Rs=fe(function(n,r,o){var u=_;if(o.length){var k=yr(o,tt(Rs));u|=y}return kr(n,u,r,o,k)}),ad=fe(function(n,r,o){var u=_|O;if(o.length){var k=yr(o,tt(ad));u|=y}return kr(r,u,n,o,k)});function id(n,r,o){r=o?t:r;var u=kr(n,S,t,t,t,t,t,r);return u.placeholder=id.placeholder,u}function sd(n,r,o){r=o?t:r;var u=kr(n,X,t,t,t,t,t,r);return u.placeholder=sd.placeholder,u}function od(n,r,o){var u,k,p,T,R,b,w=0,j=!1,H=!1,Q=!0;if(typeof n!="function")throw new Dn(d);r=Bn(r)||0,Ue(o)&&(j=!!o.leading,H="maxWait"in o,p=H?Ze(Bn(o.maxWait)||0,r):p,Q="trailing"in o?!!o.trailing:Q);function oe(We){var qn=u,pr=k;return u=k=t,w=We,T=n.apply(pr,qn),T}function de(We){return w=We,R=Pt(pe,r),j?oe(We):T}function me(We){var qn=We-b,pr=We-w,bd=r-qn;return H?sn(bd,p-pr):bd}function ge(We){var qn=We-b,pr=We-w;return b===t||qn>=r||qn<0||H&&pr>=p}function pe(){var We=Ha();if(ge(We))return he(We);R=Pt(pe,me(We))}function he(We){return R=t,Q&&u?oe(We):(u=k=t,T)}function Sn(){R!==t&&pu(R),w=0,u=b=k=R=t}function En(){return R===t?T:he(Ha())}function In(){var We=Ha(),qn=ge(We);if(u=arguments,k=this,b=We,qn){if(R===t)return de(b);if(H)return pu(R),R=Pt(pe,r),oe(b)}return R===t&&(R=Pt(pe,r)),T}return In.cancel=Sn,In.flush=En,In}var XT=fe(function(n,r){return zl(n,1,r)}),ZT=fe(function(n,r,o){return zl(n,Bn(r)||0,o)});function QT(n){return kr(n,Y)}function xa(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new Dn(d);var o=function(){var u=arguments,k=r?r.apply(this,u):u[0],p=o.cache;if(p.has(k))return p.get(k);var T=n.apply(this,u);return o.cache=p.set(k,T)||p,T};return o.cache=new(xa.Cache||dr),o}xa.Cache=dr;function qa(n){if(typeof n!="function")throw new Dn(d);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function eh(n){return td(2,n)}var nh=Uf(function(n,r){r=r.length==1&&ve(r[0])?we(r[0],_n(ue())):we(an(r,1),_n(ue()));var o=r.length;return fe(function(u){for(var k=-1,p=sn(u.length,o);++k<p;)u[k]=r[k].call(this,u[k]);return Rn(n,this,u)})}),_s=fe(function(n,r){var o=yr(r,tt(_s));return kr(n,y,t,r,o)}),ld=fe(function(n,r){var o=yr(r,tt(ld));return kr(n,M,t,r,o)}),rh=vr(function(n,r){return kr(n,I,t,t,t,r)});function th(n,r){if(typeof n!="function")throw new Dn(d);return r=r===t?r:Ee(r),fe(n,r)}function ah(n,r){if(typeof n!="function")throw new Dn(d);return r=r==null?0:Ze(Ee(r),0),fe(function(o){var u=o[r],k=Sr(o,0,r);return u&&Ar(k,u),Rn(n,this,k)})}function ih(n,r,o){var u=!0,k=!0;if(typeof n!="function")throw new Dn(d);return Ue(o)&&(u="leading"in o?!!o.leading:u,k="trailing"in o?!!o.trailing:k),od(n,r,{leading:u,maxWait:r,trailing:k})}function sh(n){return rd(n,1)}function oh(n,r){return _s(ls(r),n)}function lh(){if(!arguments.length)return[];var n=arguments[0];return ve(n)?n:[n]}function uh(n){return Fn(n,K)}function dh(n,r){return r=typeof r=="function"?r:t,Fn(n,K,r)}function gh(n){return Fn(n,h|K)}function kh(n,r){return r=typeof r=="function"?r:t,Fn(n,h|K,r)}function vh(n,r){return r==null||Wl(n,r,en(r))}function xn(n,r){return n===r||n!==n&&r!==r}var Eh=Ga(zi),mh=Ga(function(n,r){return n>=r}),jr=nu(function(){return arguments}())?nu:function(n){return Ye(n)&&Le.call(n,"callee")&&!Ul.call(n,"callee")},ve=D.isArray,fh=yl?_n(yl):_f;function hn(n){return n!=null&&Ya(n.length)&&!mr(n)}function Je(n){return Ye(n)&&hn(n)}function ph(n){return n===!0||n===!1||Ye(n)&&kn(n)==un}var Ir=Lm||Ms,Th=Rl?_n(Rl):Nf;function hh(n){return Ye(n)&&n.nodeType===1&&!Ft(n)}function ch(n){if(n==null)return!0;if(hn(n)&&(ve(n)||typeof n=="string"||typeof n.splice=="function"||Ir(n)||at(n)||jr(n)))return!n.length;var r=on(n);if(r==$e||r==jn)return!n.size;if(Dt(n))return!Qi(n).length;for(var o in n)if(Le.call(n,o))return!1;return!0}function Ah(n,r){return Ot(n,r)}function yh(n,r,o){o=typeof o=="function"?o:t;var u=o?o(n,r):t;return u===t?Ot(n,r,t,o):!!u}function Ns(n){if(!Ye(n))return!1;var r=kn(n);return r==Ce||r==qe||typeof n.message=="string"&&typeof n.name=="string"&&!Ft(n)}function Rh(n){return typeof n=="number"&&xl(n)}function mr(n){if(!Ue(n))return!1;var r=kn(n);return r==Qe||r==dn||r==yn||r==lr}function ud(n){return typeof n=="number"&&n==Ee(n)}function Ya(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=q}function Ue(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function Ye(n){return n!=null&&typeof n=="object"}var dd=_l?_n(_l):Sf;function _h(n,r){return n===r||Zi(n,r,ms(r))}function Nh(n,r,o){return o=typeof o=="function"?o:t,Zi(n,r,ms(r),o)}function bh(n){return gd(n)&&n!=+n}function Sh(n){if(dp(n))throw new ke(l);return ru(n)}function Ih(n){return n===null}function Oh(n){return n==null}function gd(n){return typeof n=="number"||Ye(n)&&kn(n)==gn}function Ft(n){if(!Ye(n)||kn(n)!=rn)return!1;var r=Ta(n);if(r===null)return!0;var o=Le.call(r,"constructor")&&r.constructor;return typeof o=="function"&&o instanceof o&&Ea.call(o)==_m}var bs=Nl?_n(Nl):If;function Lh(n){return ud(n)&&n>=-9007199254740991&&n<=q}var kd=bl?_n(bl):Of;function Ca(n){return typeof n=="string"||!ve(n)&&Ye(n)&&kn(n)==pt}function bn(n){return typeof n=="symbol"||Ye(n)&&kn(n)==ia}var at=Sl?_n(Sl):Lf;function Kh(n){return n===t}function Dh(n){return Ye(n)&&on(n)==Tt}function Ph(n){return Ye(n)&&kn(n)==Jv}var Fh=Ga(es),Mh=Ga(function(n,r){return n<=r});function vd(n){if(!n)return[];if(hn(n))return Ca(n)?Un(n):Tn(n);if(At&&n[At])return km(n[At]());var r=on(n),o=r==$e?Ui:r==jn?ga:it;return o(n)}function fr(n){if(!n)return n===0?n:0;if(n=Bn(n),n===Z||n===-1/0){var r=n<0?-1:1;return r*ee}return n===n?n:0}function Ee(n){var r=fr(n),o=r%1;return r===r?o?r-o:r:0}function Ed(n){return n?Gr(Ee(n),0,re):0}function Bn(n){if(typeof n=="number")return n;if(bn(n))return ae;if(Ue(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=Ue(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=Pl(n);var o=mE.test(n);return o||pE.test(n)?WE(n.slice(2),o?2:8):EE.test(n)?ae:+n}function md(n){return zn(n,cn(n))}function Gh(n){return n?Gr(Ee(n),-9007199254740991,q):n===0?n:0}function Se(n){return n==null?"":Nn(n)}var Bh=nt(function(n,r){if(Dt(r)||hn(r)){zn(r,en(r),n);return}for(var o in r)Le.call(r,o)&&bt(n,o,r[o])}),fd=nt(function(n,r){zn(r,cn(r),n)}),$a=nt(function(n,r,o,u){zn(r,cn(r),n,u)}),Vh=nt(function(n,r,o,u){zn(r,en(r),n,u)}),wh=vr($i);function jh(n,r){var o=et(n);return r==null?o:Jl(o,r)}var Uh=fe(function(n,r){n=Pe(n);var o=-1,u=r.length,k=u>2?r[2]:t;for(k&&vn(r[0],r[1],k)&&(u=1);++o<u;)for(var p=r[o],T=cn(p),R=-1,b=T.length;++R<b;){var w=T[R],j=n[w];(j===t||xn(j,Xr[w])&&!Le.call(n,w))&&(n[w]=p[w])}return n}),Hh=fe(function(n){return n.push(t,Pu),Rn(pd,t,n)});function xh(n,r){return Ol(n,ue(r,3),Wn)}function qh(n,r){return Ol(n,ue(r,3),Wi)}function Yh(n,r){return n==null?n:Ji(n,ue(r,3),cn)}function Ch(n,r){return n==null?n:Ql(n,ue(r,3),cn)}function $h(n,r){return n&&Wn(n,ue(r,3))}function Jh(n,r){return n&&Wi(n,ue(r,3))}function Wh(n){return n==null?[]:Ia(n,en(n))}function zh(n){return n==null?[]:Ia(n,cn(n))}function Ss(n,r,o){var u=n==null?t:Br(n,r);return u===t?o:u}function Xh(n,r){return n!=null&&Gu(n,r,cf)}function Is(n,r){return n!=null&&Gu(n,r,Af)}var Zh=Iu(function(n,r,o){r!=null&&typeof r.toString!="function"&&(r=ma.call(r)),n[r]=o},Ls(An)),Qh=Iu(function(n,r,o){r!=null&&typeof r.toString!="function"&&(r=ma.call(r)),Le.call(n,r)?n[r].push(o):n[r]=[o]},ue),ec=fe(It);function en(n){return hn(n)?Cl(n):Qi(n)}function cn(n){return hn(n)?Cl(n,!0):Kf(n)}function nc(n,r){var o={};return r=ue(r,3),Wn(n,function(u,k,p){gr(o,r(u,k,p),u)}),o}function rc(n,r){var o={};return r=ue(r,3),Wn(n,function(u,k,p){gr(o,k,r(u,k,p))}),o}var tc=nt(function(n,r,o){Oa(n,r,o)}),pd=nt(function(n,r,o,u){Oa(n,r,o,u)}),ac=vr(function(n,r){var o={};if(n==null)return o;var u=!1;r=we(r,function(p){return p=br(p,n),u||(u=p.length>1),p}),zn(n,vs(n),o),u&&(o=Fn(o,h|A|K,Zf));for(var k=r.length;k--;)is(o,r[k]);return o});function ic(n,r){return Td(n,qa(ue(r)))}var sc=vr(function(n,r){return n==null?{}:Pf(n,r)});function Td(n,r){if(n==null)return{};var o=we(vs(n),function(u){return[u]});return r=ue(r),uu(n,o,function(u,k){return r(u,k[0])})}function oc(n,r,o){r=br(r,n);var u=-1,k=r.length;for(k||(k=1,n=t);++u<k;){var p=n==null?t:n[Xn(r[u])];p===t&&(u=k,p=o),n=mr(p)?p.call(n):p}return n}function lc(n,r,o){return n==null?n:Lt(n,r,o)}function uc(n,r,o,u){return u=typeof u=="function"?u:t,n==null?n:Lt(n,r,o,u)}var hd=Ku(en),cd=Ku(cn);function dc(n,r,o){var u=ve(n),k=u||Ir(n)||at(n);if(r=ue(r,4),o==null){var p=n&&n.constructor;k?o=u?new p:[]:Ue(n)?o=mr(p)?et(Ta(n)):{}:o={}}return(k?Kn:Wn)(n,function(T,R,b){return r(o,T,R,b)}),o}function gc(n,r){return n==null?!0:is(n,r)}function kc(n,r,o){return n==null?n:Eu(n,r,ls(o))}function vc(n,r,o,u){return u=typeof u=="function"?u:t,n==null?n:Eu(n,r,ls(o),u)}function it(n){return n==null?[]:ji(n,en(n))}function Ec(n){return n==null?[]:ji(n,cn(n))}function mc(n,r,o){return o===t&&(o=r,r=t),o!==t&&(o=Bn(o),o=o===o?o:0),r!==t&&(r=Bn(r),r=r===r?r:0),Gr(Bn(n),r,o)}function fc(n,r,o){return r=fr(r),o===t?(o=r,r=0):o=fr(o),n=Bn(n),yf(n,r,o)}function pc(n,r,o){if(o&&typeof o!="boolean"&&vn(n,r,o)&&(r=o=t),o===t&&(typeof r=="boolean"?(o=r,r=t):typeof n=="boolean"&&(o=n,n=t)),n===t&&r===t?(n=0,r=1):(n=fr(n),r===t?(r=n,n=0):r=fr(r)),n>r){var u=n;n=r,r=u}if(o||n%1||r%1){var k=ql();return sn(n+k*(r-n+JE("1e-"+((k+"").length-1))),r)}return rs(n,r)}var Tc=rt(function(n,r,o){return r=r.toLowerCase(),n+(o?Ad(r):r)});function Ad(n){return Os(Se(n).toLowerCase())}function yd(n){return n=Se(n),n&&n.replace(hE,om).replace(VE,"")}function hc(n,r,o){n=Se(n),r=Nn(r);var u=n.length;o=o===t?u:Gr(Ee(o),0,u);var k=o;return o-=r.length,o>=0&&n.slice(o,k)==r}function cc(n){return n=Se(n),n&&Qv.test(n)?n.replace(Qo,lm):n}function Ac(n){return n=Se(n),n&&iE.test(n)?n.replace(_i,"\\$&"):n}var yc=rt(function(n,r,o){return n+(o?"-":"")+r.toLowerCase()}),Rc=rt(function(n,r,o){return n+(o?" ":"")+r.toLowerCase()}),_c=Nu("toLowerCase");function Nc(n,r,o){n=Se(n),r=Ee(r);var u=r?Wr(n):0;if(!r||u>=r)return n;var k=(r-u)/2;return Ma(ya(k),o)+n+Ma(Aa(k),o)}function bc(n,r,o){n=Se(n),r=Ee(r);var u=r?Wr(n):0;return r&&u<r?n+Ma(r-u,o):n}function Sc(n,r,o){n=Se(n),r=Ee(r);var u=r?Wr(n):0;return r&&u<r?Ma(r-u,o)+n:n}function Ic(n,r,o){return o||r==null?r=0:r&&(r=+r),Fm(Se(n).replace(Ni,""),r||0)}function Oc(n,r,o){return(o?vn(n,r,o):r===t)?r=1:r=Ee(r),ts(Se(n),r)}function Lc(){var n=arguments,r=Se(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var Kc=rt(function(n,r,o){return n+(o?"_":"")+r.toLowerCase()});function Dc(n,r,o){return o&&typeof o!="number"&&vn(n,r,o)&&(r=o=t),o=o===t?re:o>>>0,o?(n=Se(n),n&&(typeof r=="string"||r!=null&&!bs(r))&&(r=Nn(r),!r&&Jr(n))?Sr(Un(n),0,o):n.split(r,o)):[]}var Pc=rt(function(n,r,o){return n+(o?" ":"")+Os(r)});function Fc(n,r,o){return n=Se(n),o=o==null?0:Gr(Ee(o),0,n.length),r=Nn(r),n.slice(o,o+r.length)==r}function Mc(n,r,o){var u=f.templateSettings;o&&vn(n,r,o)&&(r=t),n=Se(n),r=$a({},r,u,Du);var k=$a({},r.imports,u.imports,Du),p=en(k),T=ji(k,p),R,b,w=0,j=r.interpolate||sa,H="__p += '",Q=Hi((r.escape||sa).source+"|"+j.source+"|"+(j===el?vE:sa).source+"|"+(r.evaluate||sa).source+"|$","g"),oe="//# sourceURL="+(Le.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++xE+"]")+`
`;n.replace(Q,function(ge,pe,he,Sn,En,In){return he||(he=Sn),H+=n.slice(w,In).replace(cE,um),pe&&(R=!0,H+=`' +
__e(`+pe+`) +
'`),En&&(b=!0,H+=`';
`+En+`;
__p += '`),he&&(H+=`' +
((__t = (`+he+`)) == null ? '' : __t) +
'`),w=In+ge.length,ge}),H+=`';
`;var de=Le.call(r,"variable")&&r.variable;if(!de)H=`with (obj) {
`+H+`
}
`;else if(gE.test(de))throw new ke(g);H=(b?H.replace(Wv,""):H).replace(zv,"$1").replace(Xv,"$1;"),H="function("+(de||"obj")+`) {
`+(de?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(R?", __e = _.escape":"")+(b?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+H+`return __p
}`;var me=_d(function(){return Ne(p,oe+"return "+H).apply(t,T)});if(me.source=H,Ns(me))throw me;return me}function Gc(n){return Se(n).toLowerCase()}function Bc(n){return Se(n).toUpperCase()}function Vc(n,r,o){if(n=Se(n),n&&(o||r===t))return Pl(n);if(!n||!(r=Nn(r)))return n;var u=Un(n),k=Un(r),p=Fl(u,k),T=Ml(u,k)+1;return Sr(u,p,T).join("")}function wc(n,r,o){if(n=Se(n),n&&(o||r===t))return n.slice(0,Bl(n)+1);if(!n||!(r=Nn(r)))return n;var u=Un(n),k=Ml(u,Un(r))+1;return Sr(u,0,k).join("")}function jc(n,r,o){if(n=Se(n),n&&(o||r===t))return n.replace(Ni,"");if(!n||!(r=Nn(r)))return n;var u=Un(n),k=Fl(u,Un(r));return Sr(u,k).join("")}function Uc(n,r){var o=z,u=U;if(Ue(r)){var k="separator"in r?r.separator:k;o="length"in r?Ee(r.length):o,u="omission"in r?Nn(r.omission):u}n=Se(n);var p=n.length;if(Jr(n)){var T=Un(n);p=T.length}if(o>=p)return n;var R=o-Wr(u);if(R<1)return u;var b=T?Sr(T,0,R).join(""):n.slice(0,R);if(k===t)return b+u;if(T&&(R+=b.length-R),bs(k)){if(n.slice(R).search(k)){var w,j=b;for(k.global||(k=Hi(k.source,Se(nl.exec(k))+"g")),k.lastIndex=0;w=k.exec(j);)var H=w.index;b=b.slice(0,H===t?R:H)}}else if(n.indexOf(Nn(k),R)!=R){var Q=b.lastIndexOf(k);Q>-1&&(b=b.slice(0,Q))}return b+u}function Hc(n){return n=Se(n),n&&Zv.test(n)?n.replace(Zo,fm):n}var xc=rt(function(n,r,o){return n+(o?" ":"")+r.toUpperCase()}),Os=Nu("toUpperCase");function Rd(n,r,o){return n=Se(n),r=o?t:r,r===t?gm(n)?hm(n):rm(n):n.match(r)||[]}var _d=fe(function(n,r){try{return Rn(n,t,r)}catch(o){return Ns(o)?o:new ke(o)}}),qc=vr(function(n,r){return Kn(r,function(o){o=Xn(o),gr(n,o,Rs(n[o],n))}),n});function Yc(n){var r=n==null?0:n.length,o=ue();return n=r?we(n,function(u){if(typeof u[1]!="function")throw new Dn(d);return[o(u[0]),u[1]]}):[],fe(function(u){for(var k=-1;++k<r;){var p=n[k];if(Rn(p[0],this,u))return Rn(p[1],this,u)}})}function Cc(n){return pf(Fn(n,h))}function Ls(n){return function(){return n}}function $c(n,r){return n==null||n!==n?r:n}var Jc=Su(),Wc=Su(!0);function An(n){return n}function Ks(n){return tu(typeof n=="function"?n:Fn(n,h))}function zc(n){return iu(Fn(n,h))}function Xc(n,r){return su(n,Fn(r,h))}var Zc=fe(function(n,r){return function(o){return It(o,n,r)}}),Qc=fe(function(n,r){return function(o){return It(n,o,r)}});function Ds(n,r,o){var u=en(r),k=Ia(r,u);o==null&&!(Ue(r)&&(k.length||!u.length))&&(o=r,r=n,n=this,k=Ia(r,en(r)));var p=!(Ue(o)&&"chain"in o)||!!o.chain,T=mr(n);return Kn(k,function(R){var b=r[R];n[R]=b,T&&(n.prototype[R]=function(){var w=this.__chain__;if(p||w){var j=n(this.__wrapped__),H=j.__actions__=Tn(this.__actions__);return H.push({func:b,args:arguments,thisArg:n}),j.__chain__=w,j}return b.apply(n,Ar([this.value()],arguments))})}),n}function eA(){return tn._===this&&(tn._=Nm),this}function Ps(){}function nA(n){return n=Ee(n),fe(function(r){return ou(r,n)})}var rA=ds(we),tA=ds(Il),aA=ds(Mi);function Nd(n){return ps(n)?Gi(Xn(n)):Ff(n)}function iA(n){return function(r){return n==null?t:Br(n,r)}}var sA=Ou(),oA=Ou(!0);function Fs(){return[]}function Ms(){return!1}function lA(){return{}}function uA(){return""}function dA(){return!0}function gA(n,r){if(n=Ee(n),n<1||n>q)return[];var o=re,u=sn(n,re);r=ue(r),n-=re;for(var k=wi(u,r);++o<n;)r(o);return k}function kA(n){return ve(n)?we(n,Xn):bn(n)?[n]:Tn(Yu(Se(n)))}function vA(n){var r=++Rm;return Se(n)+r}var EA=Fa(function(n,r){return n+r},0),mA=gs("ceil"),fA=Fa(function(n,r){return n/r},1),pA=gs("floor");function TA(n){return n&&n.length?Sa(n,An,zi):t}function hA(n,r){return n&&n.length?Sa(n,ue(r,2),zi):t}function cA(n){return Kl(n,An)}function AA(n,r){return Kl(n,ue(r,2))}function yA(n){return n&&n.length?Sa(n,An,es):t}function RA(n,r){return n&&n.length?Sa(n,ue(r,2),es):t}var _A=Fa(function(n,r){return n*r},1),NA=gs("round"),bA=Fa(function(n,r){return n-r},0);function SA(n){return n&&n.length?Vi(n,An):0}function IA(n,r){return n&&n.length?Vi(n,ue(r,2)):0}return f.after=zT,f.ary=rd,f.assign=Bh,f.assignIn=fd,f.assignInWith=$a,f.assignWith=Vh,f.at=wh,f.before=td,f.bind=Rs,f.bindAll=qc,f.bindKey=ad,f.castArray=lh,f.chain=Qu,f.chunk=pp,f.compact=Tp,f.concat=hp,f.cond=Yc,f.conforms=Cc,f.constant=Ls,f.countBy=ST,f.create=jh,f.curry=id,f.curryRight=sd,f.debounce=od,f.defaults=Uh,f.defaultsDeep=Hh,f.defer=XT,f.delay=ZT,f.difference=cp,f.differenceBy=Ap,f.differenceWith=yp,f.drop=Rp,f.dropRight=_p,f.dropRightWhile=Np,f.dropWhile=bp,f.fill=Sp,f.filter=OT,f.flatMap=DT,f.flatMapDeep=PT,f.flatMapDepth=FT,f.flatten=Wu,f.flattenDeep=Ip,f.flattenDepth=Op,f.flip=QT,f.flow=Jc,f.flowRight=Wc,f.fromPairs=Lp,f.functions=Wh,f.functionsIn=zh,f.groupBy=MT,f.initial=Dp,f.intersection=Pp,f.intersectionBy=Fp,f.intersectionWith=Mp,f.invert=Zh,f.invertBy=Qh,f.invokeMap=BT,f.iteratee=Ks,f.keyBy=VT,f.keys=en,f.keysIn=cn,f.map=Ua,f.mapKeys=nc,f.mapValues=rc,f.matches=zc,f.matchesProperty=Xc,f.memoize=xa,f.merge=tc,f.mergeWith=pd,f.method=Zc,f.methodOf=Qc,f.mixin=Ds,f.negate=qa,f.nthArg=nA,f.omit=ac,f.omitBy=ic,f.once=eh,f.orderBy=wT,f.over=rA,f.overArgs=nh,f.overEvery=tA,f.overSome=aA,f.partial=_s,f.partialRight=ld,f.partition=jT,f.pick=sc,f.pickBy=Td,f.property=Nd,f.propertyOf=iA,f.pull=wp,f.pullAll=Xu,f.pullAllBy=jp,f.pullAllWith=Up,f.pullAt=Hp,f.range=sA,f.rangeRight=oA,f.rearg=rh,f.reject=xT,f.remove=xp,f.rest=th,f.reverse=As,f.sampleSize=YT,f.set=lc,f.setWith=uc,f.shuffle=CT,f.slice=qp,f.sortBy=WT,f.sortedUniq=Xp,f.sortedUniqBy=Zp,f.split=Dc,f.spread=ah,f.tail=Qp,f.take=eT,f.takeRight=nT,f.takeRightWhile=rT,f.takeWhile=tT,f.tap=TT,f.throttle=ih,f.thru=ja,f.toArray=vd,f.toPairs=hd,f.toPairsIn=cd,f.toPath=kA,f.toPlainObject=md,f.transform=dc,f.unary=sh,f.union=aT,f.unionBy=iT,f.unionWith=sT,f.uniq=oT,f.uniqBy=lT,f.uniqWith=uT,f.unset=gc,f.unzip=ys,f.unzipWith=Zu,f.update=kc,f.updateWith=vc,f.values=it,f.valuesIn=Ec,f.without=dT,f.words=Rd,f.wrap=oh,f.xor=gT,f.xorBy=kT,f.xorWith=vT,f.zip=ET,f.zipObject=mT,f.zipObjectDeep=fT,f.zipWith=pT,f.entries=hd,f.entriesIn=cd,f.extend=fd,f.extendWith=$a,Ds(f,f),f.add=EA,f.attempt=_d,f.camelCase=Tc,f.capitalize=Ad,f.ceil=mA,f.clamp=mc,f.clone=uh,f.cloneDeep=gh,f.cloneDeepWith=kh,f.cloneWith=dh,f.conformsTo=vh,f.deburr=yd,f.defaultTo=$c,f.divide=fA,f.endsWith=hc,f.eq=xn,f.escape=cc,f.escapeRegExp=Ac,f.every=IT,f.find=LT,f.findIndex=$u,f.findKey=xh,f.findLast=KT,f.findLastIndex=Ju,f.findLastKey=qh,f.floor=pA,f.forEach=ed,f.forEachRight=nd,f.forIn=Yh,f.forInRight=Ch,f.forOwn=$h,f.forOwnRight=Jh,f.get=Ss,f.gt=Eh,f.gte=mh,f.has=Xh,f.hasIn=Is,f.head=zu,f.identity=An,f.includes=GT,f.indexOf=Kp,f.inRange=fc,f.invoke=ec,f.isArguments=jr,f.isArray=ve,f.isArrayBuffer=fh,f.isArrayLike=hn,f.isArrayLikeObject=Je,f.isBoolean=ph,f.isBuffer=Ir,f.isDate=Th,f.isElement=hh,f.isEmpty=ch,f.isEqual=Ah,f.isEqualWith=yh,f.isError=Ns,f.isFinite=Rh,f.isFunction=mr,f.isInteger=ud,f.isLength=Ya,f.isMap=dd,f.isMatch=_h,f.isMatchWith=Nh,f.isNaN=bh,f.isNative=Sh,f.isNil=Oh,f.isNull=Ih,f.isNumber=gd,f.isObject=Ue,f.isObjectLike=Ye,f.isPlainObject=Ft,f.isRegExp=bs,f.isSafeInteger=Lh,f.isSet=kd,f.isString=Ca,f.isSymbol=bn,f.isTypedArray=at,f.isUndefined=Kh,f.isWeakMap=Dh,f.isWeakSet=Ph,f.join=Gp,f.kebabCase=yc,f.last=Gn,f.lastIndexOf=Bp,f.lowerCase=Rc,f.lowerFirst=_c,f.lt=Fh,f.lte=Mh,f.max=TA,f.maxBy=hA,f.mean=cA,f.meanBy=AA,f.min=yA,f.minBy=RA,f.stubArray=Fs,f.stubFalse=Ms,f.stubObject=lA,f.stubString=uA,f.stubTrue=dA,f.multiply=_A,f.nth=Vp,f.noConflict=eA,f.noop=Ps,f.now=Ha,f.pad=Nc,f.padEnd=bc,f.padStart=Sc,f.parseInt=Ic,f.random=pc,f.reduce=UT,f.reduceRight=HT,f.repeat=Oc,f.replace=Lc,f.result=oc,f.round=NA,f.runInContext=N,f.sample=qT,f.size=$T,f.snakeCase=Kc,f.some=JT,f.sortedIndex=Yp,f.sortedIndexBy=Cp,f.sortedIndexOf=$p,f.sortedLastIndex=Jp,f.sortedLastIndexBy=Wp,f.sortedLastIndexOf=zp,f.startCase=Pc,f.startsWith=Fc,f.subtract=bA,f.sum=SA,f.sumBy=IA,f.template=Mc,f.times=gA,f.toFinite=fr,f.toInteger=Ee,f.toLength=Ed,f.toLower=Gc,f.toNumber=Bn,f.toSafeInteger=Gh,f.toString=Se,f.toUpper=Bc,f.trim=Vc,f.trimEnd=wc,f.trimStart=jc,f.truncate=Uc,f.unescape=Hc,f.uniqueId=vA,f.upperCase=xc,f.upperFirst=Os,f.each=ed,f.eachRight=nd,f.first=zu,Ds(f,function(){var n={};return Wn(f,function(r,o){Le.call(f.prototype,o)||(n[o]=r)}),n}(),{chain:!1}),f.VERSION=a,Kn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){f[n].placeholder=f}),Kn(["drop","take"],function(n,r){Te.prototype[n]=function(o){o=o===t?1:Ze(Ee(o),0);var u=this.__filtered__&&!r?new Te(this):this.clone();return u.__filtered__?u.__takeCount__=sn(o,u.__takeCount__):u.__views__.push({size:sn(o,re),type:n+(u.__dir__<0?"Right":"")}),u},Te.prototype[n+"Right"]=function(o){return this.reverse()[n](o).reverse()}}),Kn(["filter","map","takeWhile"],function(n,r){var o=r+1,u=o==C||o==$;Te.prototype[n]=function(k){var p=this.clone();return p.__iteratees__.push({iteratee:ue(k,3),type:o}),p.__filtered__=p.__filtered__||u,p}}),Kn(["head","last"],function(n,r){var o="take"+(r?"Right":"");Te.prototype[n]=function(){return this[o](1).value()[0]}}),Kn(["initial","tail"],function(n,r){var o="drop"+(r?"":"Right");Te.prototype[n]=function(){return this.__filtered__?new Te(this):this[o](1)}}),Te.prototype.compact=function(){return this.filter(An)},Te.prototype.find=function(n){return this.filter(n).head()},Te.prototype.findLast=function(n){return this.reverse().find(n)},Te.prototype.invokeMap=fe(function(n,r){return typeof n=="function"?new Te(this):this.map(function(o){return It(o,n,r)})}),Te.prototype.reject=function(n){return this.filter(qa(ue(n)))},Te.prototype.slice=function(n,r){n=Ee(n);var o=this;return o.__filtered__&&(n>0||r<0)?new Te(o):(n<0?o=o.takeRight(-n):n&&(o=o.drop(n)),r!==t&&(r=Ee(r),o=r<0?o.dropRight(-r):o.take(r-n)),o)},Te.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Te.prototype.toArray=function(){return this.take(re)},Wn(Te.prototype,function(n,r){var o=/^(?:filter|find|map|reject)|While$/.test(r),u=/^(?:head|last)$/.test(r),k=f[u?"take"+(r=="last"?"Right":""):r],p=u||/^find/.test(r);k&&(f.prototype[r]=function(){var T=this.__wrapped__,R=u?[1]:arguments,b=T instanceof Te,w=R[0],j=b||ve(T),H=function(pe){var he=k.apply(f,Ar([pe],R));return u&&Q?he[0]:he};j&&o&&typeof w=="function"&&w.length!=1&&(b=j=!1);var Q=this.__chain__,oe=!!this.__actions__.length,de=p&&!Q,me=b&&!oe;if(!p&&j){T=me?T:new Te(this);var ge=n.apply(T,R);return ge.__actions__.push({func:ja,args:[H],thisArg:t}),new Pn(ge,Q)}return de&&me?n.apply(this,R):(ge=this.thru(H),de?u?ge.value()[0]:ge.value():ge)})}),Kn(["pop","push","shift","sort","splice","unshift"],function(n){var r=ka[n],o=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",u=/^(?:pop|shift)$/.test(n);f.prototype[n]=function(){var k=arguments;if(u&&!this.__chain__){var p=this.value();return r.apply(ve(p)?p:[],k)}return this[o](function(T){return r.apply(ve(T)?T:[],k)})}}),Wn(Te.prototype,function(n,r){var o=f[r];if(o){var u=o.name+"";Le.call(Qr,u)||(Qr[u]=[]),Qr[u].push({name:r,func:o})}}),Qr[Pa(t,O).name]=[{name:"wrapper",func:t}],Te.prototype.clone=Um,Te.prototype.reverse=Hm,Te.prototype.value=xm,f.prototype.at=hT,f.prototype.chain=cT,f.prototype.commit=AT,f.prototype.next=yT,f.prototype.plant=_T,f.prototype.reverse=NT,f.prototype.toJSON=f.prototype.valueOf=f.prototype.value=bT,f.prototype.first=f.prototype.head,At&&(f.prototype[At]=RT),f},zr=cm();Dr?((Dr.exports=zr)._=zr,Ki._=zr):tn._=zr}).call(jb)}(xt,xt.exports)),xt.exports}Ub();pn(ea);const dv=F.forwardRef((e,i)=>G.jsx(st,{gap:"2",style:{display:"flex"},...e,ref:i}));dv.displayName="FaktaGruppe";dv.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var qs={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Rg;function Hb(){return Rg||(Rg=1,function(e){(function(){var i={}.hasOwnProperty;function t(){for(var l="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(l=s(l,a.call(this,g)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var g in l)i.call(l,g)&&l[g]&&(d=s(d,this&&this[g]||g));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(qs)),qs.exports}var xb=Hb();const qb=OA(xb),Yb="_boks_c3bfh_1",Cb="_harBorderLeft_c3bfh_8",$b="_harBorderTop_c3bfh_12",Jb={boks:Yb,harBorderLeft:Cb,harBorderTop:$b};qb.bind(Jb);var Ys={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var _g;function Wb(){return _g||(_g=1,function(e){(function(){var i={}.hasOwnProperty;function t(){for(var l="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(l=s(l,a(g)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var g in l)i.call(l,g)&&l[g]&&(d=s(d,g));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(Ys)),Ys.exports}Wb();var zb=Object.defineProperty,Xb=(e,i,t)=>i in e?zb(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,Ng=(e,i,t)=>Xb(e,typeof i!="symbol"?i+"":i,t);function gv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bg={exports:{}},jt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function Zb(){if(Sg)return jt;Sg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function t(a,s,l){var d=null;if(l!==void 0&&(d=""+l),s.key!==void 0&&(d=""+s.key),"key"in s){l={};for(var g in s)g!=="key"&&(l[g]=s[g])}else l=s;return s=l.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:l}}return jt.Fragment=i,jt.jsx=t,jt.jsxs=t,jt}var Ig;function Qb(){return Ig||(Ig=1,bg.exports=Zb()),bg.exports}var Tr=Qb();const eS="_autocompleteSuggestion__substring_mf7v0_1",nS="_autocompleteSuggestion__inner_mf7v0_4",Ut={autocompleteSuggestion__substring:eS,autocompleteSuggestion__inner:nS,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_mf7v0_12"};class rS extends J.Component{constructor(i){super(i),this.state={value:i.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:i}=this.props,{value:t}=this.state;i(t)}onMouseMove(){const{setSuggestionIndex:i,index:t}=this.props;i(t)}render(){const{match:i,active:t,avoidBlur:a,id:s}=this.props,{value:l}=this.state.value,d=l.toLowerCase().startsWith(i.toLowerCase());return Tr.jsx("li",{id:s,role:"option","aria-selected":t,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:a,onMouseDown:a,onKeyDown:a,className:"autocompleteSuggestion typo-normal",children:d?Tr.jsxs("span",{className:`${Ut.autocompleteSuggestion__inner} ${t?Ut["autocompleteSuggestion--active"]:""}`,children:[l.substring(0,i.length),Tr.jsx("span",{className:Ut.autocompleteSuggestion__substring,children:l.substring(i.length)})]}):Tr.jsx("span",{className:`${Ut.autocompleteSuggestion__inner} ${t?Ut["autocompleteSuggestion--active"]:""}`,children:l})})}}const tS="_autocomplete_9dlnp_1",aS="_autocomplete__suggestions_9dlnp_27",Cs={autocomplete:tS,autocomplete__suggestions:aS,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_9dlnp_31"};class CI extends J.Component{constructor(i){super(i),Ng(this,"input"),Ng(this,"inputRef"),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=t=>{this.input=t},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null}))}onChange(i){const{onChange:t}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),t(i)}onSearchButtonClick(i){const{onSearchButtonClick:t}=this.props;i.preventDefault(),t&&t()}onKeyDown(i){const{shouldShowSuggestions:t}=this.state;let{activeSuggestionIndex:a}=this.state;const{suggestions:s}=this.props,l=a>-1;switch(this.setState({setAriaActiveDescendant:i.keyCode===38||i.keyCode===40}),i.keyCode){case 9:l&&t&&this.setValue(s[a]);break;case 13:l&&t?(i.preventDefault(),this.setValue(s[a])):t&&s.length===1?this.setValue(s[0]):this.setState({shouldShowSuggestions:!1});break;case 27:t&&s.length>0&&(i.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:t&&(i.preventDefault(),a=a-1===-2?-1:a-1,this.setState({activeSuggestionIndex:a}));break;case 40:t&&(i.preventDefault(),a=a+1===s.length?s.length-1:a+1,this.setState({activeSuggestionIndex:a}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const i=setTimeout(()=>{const{shouldBlur:a}=this.state;a&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:i});const{onBlur:t}=this.props;t&&t()}setSuggestionIndex(i){this.setState({activeSuggestionIndex:i}),this.clearBlurDelay()}setValue(i){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:t}=this.props;t(i)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:i,id:t,ariaLabel:a,placeholder:s,value:l,name:d,shouldFocusOnMount:g,isLoading:v}=this.props,{activeSuggestionIndex:E,setAriaActiveDescendant:m,hasFocus:h,shouldShowSuggestions:A}=this.state,K=h&&A&&i.length>0,P=m&&E>-1?`${t}-item-${E}`:void 0;return Tr.jsxs("div",{className:`${Cs.autocomplete} autocomplete`,"aria-expanded":K,"aria-owns":`${t}-suggestions`,"aria-haspopup":"listbox",children:[Tr.jsx(vo,{variant:"primary",id:t,name:d,"aria-label":a,"aria-autocomplete":"list","aria-controls":`${t}-suggestions`,"aria-activedescendant":P,placeholder:s,value:l,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:c=>{this.inputRef=c},className:"typo-normal",autoFocus:g,label:a,hideLabel:!0,children:Tr.jsx(vo.Button,{loading:v,onClick:this.onSearchButtonClick})}),Tr.jsx("ul",{id:`${t}-suggestions`,role:"listbox",className:K?Cs.autocomplete__suggestions:Cs["autocomplete__suggestions--hidden"],children:K&&i.map((c,_)=>Tr.jsx(rS,{id:`${t}-item-${_}`,index:_,value:c,match:l,active:_===E,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},c.key))})]})}}var Ro={exports:{}},iS=Ro.exports,Og;function sS(){return Og||(Og=1,function(e,i){(function(t,a){e.exports=a()})(iS,function(){var t=1e3,a=6e4,s=36e5,l="millisecond",d="second",g="minute",v="hour",E="day",m="week",h="month",A="quarter",K="year",P="date",c="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,O=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,V={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(C){var x=["th","st","nd","rd"],$=C%100;return"["+C+(x[($-20)%10]||x[$]||x[0])+"]"}},S=function(C,x,$){var Z=String(C);return!Z||Z.length>=x?C:""+Array(x+1-Z.length).join($)+C},X={s:S,z:function(C){var x=-C.utcOffset(),$=Math.abs(x),Z=Math.floor($/60),q=$%60;return(x<=0?"+":"-")+S(Z,2,"0")+":"+S(q,2,"0")},m:function C(x,$){if(x.date()<$.date())return-C($,x);var Z=12*($.year()-x.year())+($.month()-x.month()),q=x.clone().add(Z,h),ee=$-q<0,ae=x.clone().add(Z+(ee?-1:1),h);return+(-(Z+($-q)/(ee?q-ae:ae-q))||0)},a:function(C){return C<0?Math.ceil(C)||0:Math.floor(C)},p:function(C){return{M:h,y:K,w:m,d:E,D:P,h:v,m:g,s:d,ms:l,Q:A}[C]||String(C||"").toLowerCase().replace(/s$/,"")},u:function(C){return C===void 0}},y="en",M={};M[y]=V;var L="$isDayjsObject",I=function(C){return C instanceof ne||!(!C||!C[L])},Y=function C(x,$,Z){var q;if(!x)return y;if(typeof x=="string"){var ee=x.toLowerCase();M[ee]&&(q=ee),$&&(M[ee]=$,q=ee);var ae=x.split("-");if(!q&&ae.length>1)return C(ae[0])}else{var re=x.name;M[re]=x,q=re}return!Z&&q&&(y=q),q||!Z&&y},z=function(C,x){if(I(C))return C.clone();var $=typeof x=="object"?x:{};return $.date=C,$.args=arguments,new ne($)},U=X;U.l=Y,U.i=I,U.w=function(C,x){return z(C,{locale:x.$L,utc:x.$u,x:x.$x,$offset:x.$offset})};var ne=function(){function C($){this.$L=Y($.locale,null,!0),this.parse($),this.$x=this.$x||$.x||{},this[L]=!0}var x=C.prototype;return x.parse=function($){this.$d=function(Z){var q=Z.date,ee=Z.utc;if(q===null)return new Date(NaN);if(U.u(q))return new Date;if(q instanceof Date)return new Date(q);if(typeof q=="string"&&!/Z$/i.test(q)){var ae=q.match(_);if(ae){var re=ae[2]-1||0,_e=(ae[7]||"0").substring(0,3);return ee?new Date(Date.UTC(ae[1],re,ae[3]||1,ae[4]||0,ae[5]||0,ae[6]||0,_e)):new Date(ae[1],re,ae[3]||1,ae[4]||0,ae[5]||0,ae[6]||0,_e)}}return new Date(q)}($),this.init()},x.init=function(){var $=this.$d;this.$y=$.getFullYear(),this.$M=$.getMonth(),this.$D=$.getDate(),this.$W=$.getDay(),this.$H=$.getHours(),this.$m=$.getMinutes(),this.$s=$.getSeconds(),this.$ms=$.getMilliseconds()},x.$utils=function(){return U},x.isValid=function(){return this.$d.toString()!==c},x.isSame=function($,Z){var q=z($);return this.startOf(Z)<=q&&q<=this.endOf(Z)},x.isAfter=function($,Z){return z($)<this.startOf(Z)},x.isBefore=function($,Z){return this.endOf(Z)<z($)},x.$g=function($,Z,q){return U.u($)?this[Z]:this.set(q,$)},x.unix=function(){return Math.floor(this.valueOf()/1e3)},x.valueOf=function(){return this.$d.getTime()},x.startOf=function($,Z){var q=this,ee=!!U.u(Z)||Z,ae=U.p($),re=function(ze,qe){var Ce=U.w(q.$u?Date.UTC(q.$y,qe,ze):new Date(q.$y,qe,ze),q);return ee?Ce:Ce.endOf(E)},_e=function(ze,qe){return U.w(q.toDate()[ze].apply(q.toDate("s"),(ee?[0,0,0,0]:[23,59,59,999]).slice(qe)),q)},be=this.$W,xe=this.$M,je=this.$D,ln="set"+(this.$u?"UTC":"");switch(ae){case K:return ee?re(1,0):re(31,11);case h:return ee?re(1,xe):re(0,xe+1);case m:var yn=this.$locale().weekStart||0,un=(be<yn?be+7:be)-yn;return re(ee?je-un:je+(6-un),xe);case E:case P:return _e(ln+"Hours",0);case v:return _e(ln+"Minutes",1);case g:return _e(ln+"Seconds",2);case d:return _e(ln+"Milliseconds",3);default:return this.clone()}},x.endOf=function($){return this.startOf($,!1)},x.$set=function($,Z){var q,ee=U.p($),ae="set"+(this.$u?"UTC":""),re=(q={},q[E]=ae+"Date",q[P]=ae+"Date",q[h]=ae+"Month",q[K]=ae+"FullYear",q[v]=ae+"Hours",q[g]=ae+"Minutes",q[d]=ae+"Seconds",q[l]=ae+"Milliseconds",q)[ee],_e=ee===E?this.$D+(Z-this.$W):Z;if(ee===h||ee===K){var be=this.clone().set(P,1);be.$d[re](_e),be.init(),this.$d=be.set(P,Math.min(this.$D,be.daysInMonth())).$d}else re&&this.$d[re](_e);return this.init(),this},x.set=function($,Z){return this.clone().$set($,Z)},x.get=function($){return this[U.p($)]()},x.add=function($,Z){var q,ee=this;$=Number($);var ae=U.p(Z),re=function(xe){var je=z(ee);return U.w(je.date(je.date()+Math.round(xe*$)),ee)};if(ae===h)return this.set(h,this.$M+$);if(ae===K)return this.set(K,this.$y+$);if(ae===E)return re(1);if(ae===m)return re(7);var _e=(q={},q[g]=a,q[v]=s,q[d]=t,q)[ae]||1,be=this.$d.getTime()+$*_e;return U.w(be,this)},x.subtract=function($,Z){return this.add(-1*$,Z)},x.format=function($){var Z=this,q=this.$locale();if(!this.isValid())return q.invalidDate||c;var ee=$||"YYYY-MM-DDTHH:mm:ssZ",ae=U.z(this),re=this.$H,_e=this.$m,be=this.$M,xe=q.weekdays,je=q.months,ln=q.meridiem,yn=function(qe,Ce,Qe,dn){return qe&&(qe[Ce]||qe(Z,ee))||Qe[Ce].slice(0,dn)},un=function(qe){return U.s(re%12||12,qe,"0")},ze=ln||function(qe,Ce,Qe){var dn=qe<12?"AM":"PM";return Qe?dn.toLowerCase():dn};return ee.replace(O,function(qe,Ce){return Ce||function(Qe){switch(Qe){case"YY":return String(Z.$y).slice(-2);case"YYYY":return U.s(Z.$y,4,"0");case"M":return be+1;case"MM":return U.s(be+1,2,"0");case"MMM":return yn(q.monthsShort,be,je,3);case"MMMM":return yn(je,be);case"D":return Z.$D;case"DD":return U.s(Z.$D,2,"0");case"d":return String(Z.$W);case"dd":return yn(q.weekdaysMin,Z.$W,xe,2);case"ddd":return yn(q.weekdaysShort,Z.$W,xe,3);case"dddd":return xe[Z.$W];case"H":return String(re);case"HH":return U.s(re,2,"0");case"h":return un(1);case"hh":return un(2);case"a":return ze(re,_e,!0);case"A":return ze(re,_e,!1);case"m":return String(_e);case"mm":return U.s(_e,2,"0");case"s":return String(Z.$s);case"ss":return U.s(Z.$s,2,"0");case"SSS":return U.s(Z.$ms,3,"0");case"Z":return ae}return null}(qe)||ae.replace(":","")})},x.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},x.diff=function($,Z,q){var ee,ae=this,re=U.p(Z),_e=z($),be=(_e.utcOffset()-this.utcOffset())*a,xe=this-_e,je=function(){return U.m(ae,_e)};switch(re){case K:ee=je()/12;break;case h:ee=je();break;case A:ee=je()/3;break;case m:ee=(xe-be)/6048e5;break;case E:ee=(xe-be)/864e5;break;case v:ee=xe/s;break;case g:ee=xe/a;break;case d:ee=xe/t;break;default:ee=xe}return q?ee:U.a(ee)},x.daysInMonth=function(){return this.endOf(h).$D},x.$locale=function(){return M[this.$L]},x.locale=function($,Z){if(!$)return this.$L;var q=this.clone(),ee=Y($,Z,!0);return ee&&(q.$L=ee),q},x.clone=function(){return U.w(this.$d,this)},x.toDate=function(){return new Date(this.valueOf())},x.toJSON=function(){return this.isValid()?this.toISOString():null},x.toISOString=function(){return this.$d.toISOString()},x.toString=function(){return this.$d.toUTCString()},C}(),W=ne.prototype;return z.prototype=W,[["$ms",l],["$s",d],["$m",g],["$H",v],["$W",E],["$M",h],["$y",K],["$D",P]].forEach(function(C){W[C[1]]=function(x){return this.$g(x,C[0],C[1])}}),z.extend=function(C,x){return C.$i||(C(x,ne,z),C.$i=!0),z},z.locale=Y,z.isDayjs=I,z.unix=function(C){return z(1e3*C)},z.en=M[y],z.Ls=M,z.p={},z})}(Ro)),Ro.exports}var oS=sS();const na=gv(oS);var _o=function(e,i){return _o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])},_o(e,i)};function $n(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");_o(e,i);function t(){this.constructor=e}e.prototype=i===null?Object.create(i):(t.prototype=i.prototype,new t)}var se=function(){return se=Object.assign||function(e){for(var i,t=1,a=arguments.length;t<a;t++){i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},se.apply(this,arguments)};function gi(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t}function tr(e,i,t){if(arguments.length===2)for(var a=0,s=i.length,l;a<s;a++)(l||!(a in i))&&(l||(l=Array.prototype.slice.call(i,0,a)),l[a]=i[a]);return e.concat(l||Array.prototype.slice.call(i))}function er(e,i){var t=i&&i.cache?i.cache:ES,a=i&&i.serializer?i.serializer:kS,s=i&&i.strategy?i.strategy:dS;return s(e,{cache:t,serializer:a})}function lS(e){return e==null||typeof e=="number"||typeof e=="boolean"}function uS(e,i,t,a){var s=lS(a)?a:t(a),l=i.get(s);return typeof l>"u"&&(l=e.call(this,a),i.set(s,l)),l}function kv(e,i,t){var a=Array.prototype.slice.call(arguments,3),s=t(a),l=i.get(s);return typeof l>"u"&&(l=e.apply(this,a),i.set(s,l)),l}function vv(e,i,t,a,s){return t.bind(i,e,a,s)}function dS(e,i){var t=e.length===1?uS:kv;return vv(e,this,t,i.cache.create(),i.serializer)}function gS(e,i){return vv(e,this,kv,i.cache.create(),i.serializer)}var kS=function(){return JSON.stringify(arguments)},vS=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(i){return this.cache[i]},e.prototype.set=function(i,t){this.cache[i]=t},e}(),ES={create:function(){return new vS}},nr={variadic:gS},Ae;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Ae||(Ae={}));var Be;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Be||(Be={}));var gt;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(gt||(gt={}));function Lg(e){return e.type===Be.literal}function mS(e){return e.type===Be.argument}function Ev(e){return e.type===Be.number}function mv(e){return e.type===Be.date}function fv(e){return e.type===Be.time}function pv(e){return e.type===Be.select}function Tv(e){return e.type===Be.plural}function fS(e){return e.type===Be.pound}function hv(e){return e.type===Be.tag}function cv(e){return!!(e&&typeof e=="object"&&e.type===gt.number)}function No(e){return!!(e&&typeof e=="object"&&e.type===gt.dateTime)}var Av=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,pS=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function TS(e){var i={};return e.replace(pS,function(t){var a=t.length;switch(t[0]){case"G":i.era=a===4?"long":a===5?"narrow":"short";break;case"y":i.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=a===4?"long":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][a-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][a-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][a-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][a-1];break;case"s":i.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var hS=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function cS(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(hS).filter(function(A){return A.length>0}),t=[],a=0,s=i;a<s.length;a++){var l=s[a],d=l.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var g=d[0],v=d.slice(1),E=0,m=v;E<m.length;E++){var h=m[E];if(h.length===0)throw new Error("Invalid number skeleton")}t.push({stem:g,options:v})}return t}function AS(e){return e.replace(/^(.*?)-/,"")}var Kg=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,yv=/^(@+)?(\+|#+)?[rs]?$/g,yS=/(\*)(0+)|(#+)(0+)|(0+)/g,Rv=/^(0+)$/;function Dg(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(yv,function(t,a,s){return typeof s!="string"?(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length):s==="+"?i.minimumSignificantDigits=a.length:a[0]==="#"?i.maximumSignificantDigits=a.length:(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length+(typeof s=="string"?s.length:0)),""}),i}function _v(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function RS(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var t=e.slice(0,2);if(t==="+!"?(i.signDisplay="always",e=e.slice(2)):t==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!Rv.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function Pg(e){var i={},t=_v(e);return t||i}function _S(e){for(var i={},t=0,a=e;t<a.length;t++){var s=a[t];switch(s.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=s.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=AS(s.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=se(se(se({},i),{notation:"scientific"}),s.options.reduce(function(v,E){return se(se({},v),Pg(E))},{}));continue;case"engineering":i=se(se(se({},i),{notation:"engineering"}),s.options.reduce(function(v,E){return se(se({},v),Pg(E))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(yS,function(v,E,m,h,A,K){if(E)i.minimumIntegerDigits=m.length;else{if(h&&A)throw new Error("We currently do not support maximum integer digits");if(K)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Rv.test(s.stem)){i.minimumIntegerDigits=s.stem.length;continue}if(Kg.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(Kg,function(v,E,m,h,A,K){return m==="*"?i.minimumFractionDigits=E.length:h&&h[0]==="#"?i.maximumFractionDigits=h.length:A&&K?(i.minimumFractionDigits=A.length,i.maximumFractionDigits=A.length+K.length):(i.minimumFractionDigits=E.length,i.maximumFractionDigits=E.length),""});var l=s.options[0];l==="w"?i=se(se({},i),{trailingZeroDisplay:"stripIfInteger"}):l&&(i=se(se({},i),Dg(l)));continue}if(yv.test(s.stem)){i=se(se({},i),Dg(s.stem));continue}var d=_v(s.stem);d&&(i=se(se({},i),d));var g=RS(s.stem);g&&(i=se(se({},i),g))}return i}var Xa={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function NS(e,i){for(var t="",a=0;a<e.length;a++){var s=e.charAt(a);if(s==="j"){for(var l=0;a+1<e.length&&e.charAt(a+1)===s;)l++,a++;var d=1+(l&1),g=l<2?1:3+(l>>1),v="a",E=bS(i);for((E=="H"||E=="k")&&(g=0);g-- >0;)t+=v;for(;d-- >0;)t=E+t}else s==="J"?t+="H":t+=s}return t}function bS(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=e.language,a;t!=="root"&&(a=e.maximize().region);var s=Xa[a||""]||Xa[t||""]||Xa["".concat(t,"-001")]||Xa["001"];return s[0]}var $s,SS=new RegExp("^".concat(Av.source,"*")),IS=new RegExp("".concat(Av.source,"*$"));function Re(e,i){return{start:e,end:i}}var OS=!!String.prototype.startsWith&&"_a".startsWith("a",1),LS=!!String.fromCodePoint,KS=!!Object.fromEntries,DS=!!String.prototype.codePointAt,PS=!!String.prototype.trimStart,FS=!!String.prototype.trimEnd,MS=!!Number.isSafeInteger,GS=MS?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},bo=!0;try{var BS=bv("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");bo=(($s=BS.exec("a"))===null||$s===void 0?void 0:$s[0])==="a"}catch{bo=!1}var Fg=OS?function(e,i,t){return e.startsWith(i,t)}:function(e,i,t){return e.slice(t,t+i.length)===i},So=LS?String.fromCodePoint:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var t="",a=e.length,s=0,l;a>s;){if(l=e[s++],l>1114111)throw RangeError(l+" is not a valid code point");t+=l<65536?String.fromCharCode(l):String.fromCharCode(((l-=65536)>>10)+55296,l%1024+56320)}return t},Mg=KS?Object.fromEntries:function(e){for(var i={},t=0,a=e;t<a.length;t++){var s=a[t],l=s[0],d=s[1];i[l]=d}return i},Nv=DS?function(e,i){return e.codePointAt(i)}:function(e,i){var t=e.length;if(!(i<0||i>=t)){var a=e.charCodeAt(i),s;return a<55296||a>56319||i+1===t||(s=e.charCodeAt(i+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},VS=PS?function(e){return e.trimStart()}:function(e){return e.replace(SS,"")},wS=FS?function(e){return e.trimEnd()}:function(e){return e.replace(IS,"")};function bv(e,i){return new RegExp(e,i)}var Io;if(bo){var Gg=bv("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Io=function(e,i){var t;Gg.lastIndex=i;var a=Gg.exec(e);return(t=a[1])!==null&&t!==void 0?t:""}}else Io=function(e,i){for(var t=[];;){var a=Nv(e,i);if(a===void 0||Sv(a)||xS(a))break;t.push(a),i+=a>=65536?2:1}return So.apply(void 0,t)};var jS=function(){function e(i,t){t===void 0&&(t={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,t,a){for(var s=[];!this.isEOF();){var l=this.char();if(l===123){var d=this.parseArgument(i,a);if(d.err)return d;s.push(d.val)}else{if(l===125&&i>0)break;if(l===35&&(t==="plural"||t==="selectordinal")){var g=this.clonePosition();this.bump(),s.push({type:Be.pound,location:Re(g,this.clonePosition())})}else if(l===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(Ae.UNMATCHED_CLOSING_TAG,Re(this.clonePosition(),this.clonePosition()))}else if(l===60&&!this.ignoreTag&&Oo(this.peek()||0)){var d=this.parseTag(i,t);if(d.err)return d;s.push(d.val)}else{var d=this.parseLiteral(i,t);if(d.err)return d;s.push(d.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(i,t){var a=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Be.literal,value:"<".concat(s,"/>"),location:Re(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var l=this.parseMessage(i+1,t,!0);if(l.err)return l;var d=l.val,g=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Oo(this.char()))return this.error(Ae.INVALID_TAG,Re(g,this.clonePosition()));var v=this.clonePosition(),E=this.parseTagName();return s!==E?this.error(Ae.UNMATCHED_CLOSING_TAG,Re(v,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Be.tag,value:s,children:d,location:Re(a,this.clonePosition())},err:null}:this.error(Ae.INVALID_TAG,Re(g,this.clonePosition())))}else return this.error(Ae.UNCLOSED_TAG,Re(a,this.clonePosition()))}else return this.error(Ae.INVALID_TAG,Re(a,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&HS(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,t){for(var a=this.clonePosition(),s="";;){var l=this.tryParseQuote(t);if(l){s+=l;continue}var d=this.tryParseUnquoted(i,t);if(d){s+=d;continue}var g=this.tryParseLeftAngleBracket();if(g){s+=g;continue}break}var v=Re(a,this.clonePosition());return{val:{type:Be.literal,value:s,location:v},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!US(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(a);this.bump()}return So.apply(void 0,t)},e.prototype.tryParseUnquoted=function(i,t){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(t==="plural"||t==="selectordinal")||a===125&&i>0?null:(this.bump(),So(a))},e.prototype.parseArgument=function(i,t){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Ae.EXPECT_ARGUMENT_CLOSING_BRACE,Re(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Ae.EMPTY_ARGUMENT,Re(a,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(Ae.MALFORMED_ARGUMENT,Re(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Ae.EXPECT_ARGUMENT_CLOSING_BRACE,Re(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Be.argument,value:s,location:Re(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Ae.EXPECT_ARGUMENT_CLOSING_BRACE,Re(a,this.clonePosition())):this.parseArgumentOptions(i,t,s,a);default:return this.error(Ae.MALFORMED_ARGUMENT,Re(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),t=this.offset(),a=Io(this.message,t),s=t+a.length;this.bumpTo(s);var l=this.clonePosition(),d=Re(i,l);return{value:a,location:d}},e.prototype.parseArgumentOptions=function(i,t,a,s){var l,d=this.clonePosition(),g=this.parseIdentifierIfPossible().value,v=this.clonePosition();switch(g){case"":return this.error(Ae.EXPECT_ARGUMENT_TYPE,Re(d,v));case"number":case"date":case"time":{this.bumpSpace();var E=null;if(this.bumpIf(",")){this.bumpSpace();var m=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var A=wS(h.val);if(A.length===0)return this.error(Ae.EXPECT_ARGUMENT_STYLE,Re(this.clonePosition(),this.clonePosition()));var K=Re(m,this.clonePosition());E={style:A,styleLocation:K}}var P=this.tryParseArgumentClose(s);if(P.err)return P;var c=Re(s,this.clonePosition());if(E&&Fg(E==null?void 0:E.style,"::",0)){var _=VS(E.style.slice(2));if(g==="number"){var h=this.parseNumberSkeletonFromString(_,E.styleLocation);return h.err?h:{val:{type:Be.number,value:a,location:c,style:h.val},err:null}}else{if(_.length===0)return this.error(Ae.EXPECT_DATE_TIME_SKELETON,c);var O=_;this.locale&&(O=NS(_,this.locale));var A={type:gt.dateTime,pattern:O,location:E.styleLocation,parsedOptions:this.shouldParseSkeletons?TS(O):{}},V=g==="date"?Be.date:Be.time;return{val:{type:V,value:a,location:c,style:A},err:null}}}return{val:{type:g==="number"?Be.number:g==="date"?Be.date:Be.time,value:a,location:c,style:(l=E==null?void 0:E.style)!==null&&l!==void 0?l:null},err:null}}case"plural":case"selectordinal":case"select":{var S=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Ae.EXPECT_SELECT_ARGUMENT_OPTIONS,Re(S,se({},S)));this.bumpSpace();var X=this.parseIdentifierIfPossible(),y=0;if(g!=="select"&&X.value==="offset"){if(!this.bumpIf(":"))return this.error(Ae.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Re(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(Ae.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ae.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),X=this.parseIdentifierIfPossible(),y=h.val}var M=this.tryParsePluralOrSelectOptions(i,g,t,X);if(M.err)return M;var P=this.tryParseArgumentClose(s);if(P.err)return P;var L=Re(s,this.clonePosition());return g==="select"?{val:{type:Be.select,value:a,options:Mg(M.val),location:L},err:null}:{val:{type:Be.plural,value:a,options:Mg(M.val),offset:y,pluralType:g==="plural"?"cardinal":"ordinal",location:L},err:null}}default:return this.error(Ae.INVALID_ARGUMENT_TYPE,Re(d,v))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(Ae.EXPECT_ARGUMENT_CLOSING_BRACE,Re(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,t=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Ae.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Re(s,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,t){var a=[];try{a=cS(i)}catch{return this.error(Ae.INVALID_NUMBER_SKELETON,t)}return{val:{type:gt.number,tokens:a,location:t,parsedOptions:this.shouldParseSkeletons?_S(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,t,a,s){for(var l,d=!1,g=[],v=new Set,E=s.value,m=s.location;;){if(E.length===0){var h=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var A=this.tryParseDecimalInteger(Ae.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ae.INVALID_PLURAL_ARGUMENT_SELECTOR);if(A.err)return A;m=Re(h,this.clonePosition()),E=this.message.slice(h.offset,this.offset())}else break}if(v.has(E))return this.error(t==="select"?Ae.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Ae.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,m);E==="other"&&(d=!0),this.bumpSpace();var K=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?Ae.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Ae.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Re(this.clonePosition(),this.clonePosition()));var P=this.parseMessage(i+1,t,a);if(P.err)return P;var c=this.tryParseArgumentClose(K);if(c.err)return c;g.push([E,{value:P.val,location:Re(K,this.clonePosition())}]),v.add(E),this.bumpSpace(),l=this.parseIdentifierIfPossible(),E=l.value,m=l.location}return g.length===0?this.error(t==="select"?Ae.EXPECT_SELECT_ARGUMENT_SELECTOR:Ae.EXPECT_PLURAL_ARGUMENT_SELECTOR,Re(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(Ae.MISSING_OTHER_CLAUSE,Re(this.clonePosition(),this.clonePosition())):{val:g,err:null}},e.prototype.tryParseDecimalInteger=function(i,t){var a=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var l=!1,d=0;!this.isEOF();){var g=this.char();if(g>=48&&g<=57)l=!0,d=d*10+(g-48),this.bump();else break}var v=Re(s,this.clonePosition());return l?(d*=a,GS(d)?{val:d,err:null}:this.error(t,v)):this.error(i,v)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var t=Nv(this.message,i);if(t===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(i,t){return{val:null,err:{kind:i,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Fg(this.message,i,this.offset())){for(var t=0;t<i.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var t=this.offset(),a=this.message.indexOf(i,t);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var t=this.offset();if(t===i)break;if(t>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Sv(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),t=this.offset(),a=this.message.charCodeAt(t+(i>=65536?2:1));return a??null},e}();function Oo(e){return e>=97&&e<=122||e>=65&&e<=90}function US(e){return Oo(e)||e===47}function HS(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Sv(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function xS(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Lo(e){e.forEach(function(i){if(delete i.location,pv(i)||Tv(i))for(var t in i.options)delete i.options[t].location,Lo(i.options[t].value);else Ev(i)&&cv(i.style)||(mv(i)||fv(i))&&No(i.style)?delete i.style.location:hv(i)&&Lo(i.children)})}function qS(e,i){i===void 0&&(i={}),i=se({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var t=new jS(e,i).parse();if(t.err){var a=SyntaxError(Ae[t.err.kind]);throw a.location=t.err.location,a.originalMessage=t.err.message,a}return i!=null&&i.captureLocation||Lo(t.val),t.val}var sr;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(sr||(sr={}));var Kr=function(e){$n(i,e);function i(t,a,s){var l=e.call(this,t)||this;return l.code=a,l.originalMessage=s,l}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),Bg=function(e){$n(i,e);function i(t,a,s,l){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(a,'". Options are "').concat(Object.keys(s).join('", "'),'"'),sr.INVALID_VALUE,l)||this}return i}(Kr),YS=function(e){$n(i,e);function i(t,a,s){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(a),sr.INVALID_VALUE,s)||this}return i}(Kr),CS=function(e){$n(i,e);function i(t,a){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(a,'"'),sr.MISSING_VALUE,a)||this}return i}(Kr),fn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(fn||(fn={}));function $S(e){return e.length<2?e:e.reduce(function(i,t){var a=i[i.length-1];return!a||a.type!==fn.literal||t.type!==fn.literal?i.push(t):a.value+=t.value,i},[])}function Iv(e){return typeof e=="function"}function ti(e,i,t,a,s,l,d){if(e.length===1&&Lg(e[0]))return[{type:fn.literal,value:e[0].value}];for(var g=[],v=0,E=e;v<E.length;v++){var m=E[v];if(Lg(m)){g.push({type:fn.literal,value:m.value});continue}if(fS(m)){typeof l=="number"&&g.push({type:fn.literal,value:t.getNumberFormat(i).format(l)});continue}var h=m.value;if(!(s&&h in s))throw new CS(h,d);var A=s[h];if(mS(m)){(!A||typeof A=="string"||typeof A=="number")&&(A=typeof A=="string"||typeof A=="number"?String(A):""),g.push({type:typeof A=="string"?fn.literal:fn.object,value:A});continue}if(mv(m)){var K=typeof m.style=="string"?a.date[m.style]:No(m.style)?m.style.parsedOptions:void 0;g.push({type:fn.literal,value:t.getDateTimeFormat(i,K).format(A)});continue}if(fv(m)){var K=typeof m.style=="string"?a.time[m.style]:No(m.style)?m.style.parsedOptions:a.time.medium;g.push({type:fn.literal,value:t.getDateTimeFormat(i,K).format(A)});continue}if(Ev(m)){var K=typeof m.style=="string"?a.number[m.style]:cv(m.style)?m.style.parsedOptions:void 0;K&&K.scale&&(A=A*(K.scale||1)),g.push({type:fn.literal,value:t.getNumberFormat(i,K).format(A)});continue}if(hv(m)){var P=m.children,c=m.value,_=s[c];if(!Iv(_))throw new YS(c,"function",d);var O=ti(P,i,t,a,s,l),V=_(O.map(function(y){return y.value}));Array.isArray(V)||(V=[V]),g.push.apply(g,V.map(function(y){return{type:typeof y=="string"?fn.literal:fn.object,value:y}}))}if(pv(m)){var S=m.options[A]||m.options.other;if(!S)throw new Bg(m.value,A,Object.keys(m.options),d);g.push.apply(g,ti(S.value,i,t,a,s));continue}if(Tv(m)){var S=m.options["=".concat(A)];if(!S){if(!Intl.PluralRules)throw new Kr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,sr.MISSING_INTL_API,d);var X=t.getPluralRules(i,{type:m.pluralType}).select(A-(m.offset||0));S=m.options[X]||m.options.other}if(!S)throw new Bg(m.value,A,Object.keys(m.options),d);g.push.apply(g,ti(S.value,i,t,a,s,A-(m.offset||0)));continue}}return $S(g)}function JS(e,i){return i?se(se(se({},e||{}),i||{}),Object.keys(e).reduce(function(t,a){return t[a]=se(se({},e[a]),i[a]||{}),t},{})):e}function WS(e,i){return i?Object.keys(e).reduce(function(t,a){return t[a]=JS(e[a],i[a]),t},se({},e)):e}function Js(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function zS(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:er(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.NumberFormat).bind.apply(i,tr([void 0],t,!1)))},{cache:Js(e.number),strategy:nr.variadic}),getDateTimeFormat:er(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.DateTimeFormat).bind.apply(i,tr([void 0],t,!1)))},{cache:Js(e.dateTime),strategy:nr.variadic}),getPluralRules:er(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.PluralRules).bind.apply(i,tr([void 0],t,!1)))},{cache:Js(e.pluralRules),strategy:nr.variadic})}}var Ov=function(){function e(i,t,a,s){t===void 0&&(t=e.defaultLocale);var l=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(v){var E=l.formatToParts(v);if(E.length===1)return E[0].value;var m=E.reduce(function(h,A){return!h.length||A.type!==fn.literal||typeof h[h.length-1]!="string"?h.push(A.value):h[h.length-1]+=A.value,h},[]);return m.length<=1?m[0]||"":m},this.formatToParts=function(v){return ti(l.ast,l.locales,l.formatters,l.formats,v,void 0,l.message)},this.resolvedOptions=function(){var v;return{locale:((v=l.resolvedLocale)===null||v===void 0?void 0:v.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=t,this.resolvedLocale=e.resolveLocale(t),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=s||{};d.formatters;var g=gi(d,["formatters"]);this.ast=e.__parse(i,se(se({},g),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=WS(e.formats,a),this.formatters=s&&s.formatters||zS(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(i);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=qS,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),qr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(qr||(qr={}));var ra=function(e){$n(i,e);function i(t,a,s){var l=this,d=s?s instanceof Error?s:new Error(String(s)):void 0;return l=e.call(this,"[@formatjs/intl Error ".concat(t,"] ").concat(a,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,l.code=t,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(l,i),l}return i}(Error),XS=function(e){$n(i,e);function i(t,a){return e.call(this,qr.UNSUPPORTED_FORMATTER,t,a)||this}return i}(ra),ZS=function(e){$n(i,e);function i(t,a){return e.call(this,qr.INVALID_CONFIG,t,a)||this}return i}(ra),Vg=function(e){$n(i,e);function i(t,a){return e.call(this,qr.MISSING_DATA,t,a)||this}return i}(ra),wn=function(e){$n(i,e);function i(t,a,s){var l=e.call(this,qr.FORMAT_ERROR,"".concat(t,`
Locale: `).concat(a,`
`),s)||this;return l.locale=a,l}return i}(ra),Ws=function(e){$n(i,e);function i(t,a,s,l){var d=e.call(this,"".concat(t,`
MessageID: `).concat(s==null?void 0:s.id,`
Default Message: `).concat(s==null?void 0:s.defaultMessage,`
Description: `).concat(s==null?void 0:s.description,`
`),a,l)||this;return d.descriptor=s,d.locale=a,d}return i}(wn),QS=function(e){$n(i,e);function i(t,a){var s=e.call(this,qr.MISSING_TRANSLATION,'Missing message: "'.concat(t.id,'" for locale "').concat(a,'", using ').concat(t.defaultMessage?"default message (".concat(typeof t.defaultMessage=="string"?t.defaultMessage:t.defaultMessage.map(function(l){var d;return(d=l.value)!==null&&d!==void 0?d:JSON.stringify(l)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=t,s}return i}(ra);function e1(e,i,t){if(t===void 0&&(t=Error),!e)throw new t(i)}function mt(e,i,t){return t===void 0&&(t={}),i.reduce(function(a,s){return s in e?a[s]=e[s]:s in t&&(a[s]=t[s]),a},{})}var n1=function(e){},r1=function(e){},Lv={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:n1,onWarn:r1};function Kv(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Hr(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function t1(e){e===void 0&&(e=Kv());var i=Intl.RelativeTimeFormat,t=Intl.ListFormat,a=Intl.DisplayNames,s=er(function(){for(var g,v=[],E=0;E<arguments.length;E++)v[E]=arguments[E];return new((g=Intl.DateTimeFormat).bind.apply(g,tr([void 0],v,!1)))},{cache:Hr(e.dateTime),strategy:nr.variadic}),l=er(function(){for(var g,v=[],E=0;E<arguments.length;E++)v[E]=arguments[E];return new((g=Intl.NumberFormat).bind.apply(g,tr([void 0],v,!1)))},{cache:Hr(e.number),strategy:nr.variadic}),d=er(function(){for(var g,v=[],E=0;E<arguments.length;E++)v[E]=arguments[E];return new((g=Intl.PluralRules).bind.apply(g,tr([void 0],v,!1)))},{cache:Hr(e.pluralRules),strategy:nr.variadic});return{getDateTimeFormat:s,getNumberFormat:l,getMessageFormat:er(function(g,v,E,m){return new Ov(g,v,E,se({formatters:{getNumberFormat:l,getDateTimeFormat:s,getPluralRules:d}},m||{}))},{cache:Hr(e.message),strategy:nr.variadic}),getRelativeTimeFormat:er(function(){for(var g=[],v=0;v<arguments.length;v++)g[v]=arguments[v];return new(i.bind.apply(i,tr([void 0],g,!1)))},{cache:Hr(e.relativeTime),strategy:nr.variadic}),getPluralRules:d,getListFormat:er(function(){for(var g=[],v=0;v<arguments.length;v++)g[v]=arguments[v];return new(t.bind.apply(t,tr([void 0],g,!1)))},{cache:Hr(e.list),strategy:nr.variadic}),getDisplayNames:er(function(){for(var g=[],v=0;v<arguments.length;v++)g[v]=arguments[v];return new(a.bind.apply(a,tr([void 0],g,!1)))},{cache:Hr(e.displayNames),strategy:nr.variadic})}}function Wo(e,i,t,a){var s=e&&e[i],l;if(s&&(l=s[t]),l)return l;a(new XS("No ".concat(i," format named: ").concat(t)))}function Za(e,i){return Object.keys(e).reduce(function(t,a){return t[a]=se({timeZone:i},e[a]),t},{})}function wg(e,i){var t=Object.keys(se(se({},e),i));return t.reduce(function(a,s){return a[s]=se(se({},e[s]||{}),i[s]||{}),a},{})}function jg(e,i){if(!i)return e;var t=Ov.formats;return se(se(se({},t),e),{date:wg(Za(t.date,i),Za(e.date||{},i)),time:wg(Za(t.time,i),Za(e.time||{},i))})}var Ko=function(e,i,t,a,s){var l=e.locale,d=e.formats,g=e.messages,v=e.defaultLocale,E=e.defaultFormats,m=e.fallbackOnEmptyString,h=e.onError,A=e.timeZone,K=e.defaultRichTextElements;t===void 0&&(t={id:""});var P=t.id,c=t.defaultMessage;e1(!!P,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var _=String(P),O=g&&Object.prototype.hasOwnProperty.call(g,_)&&g[_];if(Array.isArray(O)&&O.length===1&&O[0].type===Be.literal)return O[0].value;if(!a&&O&&typeof O=="string"&&!K)return O.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=se(se({},K),a||{}),d=jg(d,A),E=jg(E,A),!O){if(m===!1&&O==="")return O;if((!c||l&&l.toLowerCase()!==v.toLowerCase())&&h(new QS(t,l)),c)try{var V=i.getMessageFormat(c,v,E,s);return V.format(a)}catch(S){return h(new Ws('Error formatting default message for: "'.concat(_,'", rendering default message verbatim'),l,t,S)),typeof c=="string"?c:_}return _}try{var V=i.getMessageFormat(O,l,d,se({formatters:i},s||{}));return V.format(a)}catch(S){h(new Ws('Error formatting message: "'.concat(_,'", using ').concat(c?"default message":"id"," as fallback."),l,t,S))}if(c)try{var V=i.getMessageFormat(c,v,E,s);return V.format(a)}catch(S){h(new Ws('Error formatting the default message for: "'.concat(_,'", rendering message verbatim'),l,t,S))}return typeof O=="string"?O:typeof c=="string"?c:_},a1=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function ta(e,i,t,a){var s=e.locale,l=e.formats,d=e.onError,g=e.timeZone;a===void 0&&(a={});var v=a.format,E=se(se({},g&&{timeZone:g}),v&&Wo(l,i,v,d)),m=mt(a,a1,E);return i==="time"&&!m.hour&&!m.minute&&!m.second&&!m.timeStyle&&!m.dateStyle&&(m=se(se({},m),{hour:"numeric",minute:"numeric"})),t(s,m)}function i1(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return ta(e,"date",i,d).format(g)}catch(v){e.onError(new wn("Error formatting date.",e.locale,v))}return String(g)}function s1(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return ta(e,"time",i,d).format(g)}catch(v){e.onError(new wn("Error formatting time.",e.locale,v))}return String(g)}function o1(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=t[2],g=d===void 0?{}:d,v=typeof s=="string"?new Date(s||0):s,E=typeof l=="string"?new Date(l||0):l;try{return ta(e,"dateTimeRange",i,g).formatRange(v,E)}catch(m){e.onError(new wn("Error formatting date time range.",e.locale,m))}return String(v)}function l1(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return ta(e,"date",i,d).formatToParts(g)}catch(v){e.onError(new wn("Error formatting date.",e.locale,v))}return[]}function u1(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return ta(e,"time",i,d).formatToParts(g)}catch(v){e.onError(new wn("Error formatting time.",e.locale,v))}return[]}var d1=["style","type","fallback","languageDisplay"];function g1(e,i,t,a){var s=e.locale,l=e.onError,d=Intl.DisplayNames;d||l(new Kr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,sr.MISSING_INTL_API));var g=mt(a,d1);try{return i(s,g).of(t)}catch(v){l(new wn("Error formatting display name.",s,v))}}var k1=["type","style"],Ug=Date.now();function v1(e){return"".concat(Ug,"_").concat(e,"_").concat(Ug)}function E1(e,i,t,a){a===void 0&&(a={});var s=Dv(e,i,t,a).reduce(function(l,d){var g=d.value;return typeof g!="string"?l.push(g):typeof l[l.length-1]=="string"?l[l.length-1]+=g:l.push(g),l},[]);return s.length===1?s[0]:s.length===0?"":s}function Dv(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={});var d=Intl.ListFormat;d||l(new Kr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,sr.MISSING_INTL_API));var g=mt(a,k1);try{var v={},E=t.map(function(m,h){if(typeof m=="object"){var A=v1(h);return v[A]=m,A}return String(m)});return i(s,g).formatToParts(E).map(function(m){return m.type==="literal"?m:se(se({},m),{value:v[m.value]||m.value})})}catch(m){l(new wn("Error formatting list.",s,m))}return t}var m1=["type"];function f1(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={}),Intl.PluralRules||l(new Kr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,sr.MISSING_INTL_API));var d=mt(a,m1);try{return i(s,d).select(t)}catch(g){l(new wn("Error formatting plural.",s,g))}return"other"}var p1=["numeric","style"];function T1(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var d=t.format,g=!!d&&Wo(s,"relative",d,l)||{},v=mt(t,p1,g);return i(a,v)}function h1(e,i,t,a,s){s===void 0&&(s={}),a||(a="second");var l=Intl.RelativeTimeFormat;l||e.onError(new Kr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,sr.MISSING_INTL_API));try{return T1(e,i,s).format(t,a)}catch(d){e.onError(new wn("Error formatting relative time.",e.locale,d))}return String(t)}var c1=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Pv(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var d=t.format,g=d&&Wo(s,"number",d,l)||{},v=mt(t,c1,g);return i(a,v)}function A1(e,i,t,a){a===void 0&&(a={});try{return Pv(e,i,a).format(t)}catch(s){e.onError(new wn("Error formatting number.",e.locale,s))}return String(t)}function y1(e,i,t,a){a===void 0&&(a={});try{return Pv(e,i,a).formatToParts(t)}catch(s){e.onError(new wn("Error formatting number.",e.locale,s))}return[]}function R1(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function _1(e){e.onWarn&&e.defaultRichTextElements&&R1(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function N1(e,i){var t=t1(i),a=se(se({},Lv),e),s=a.locale,l=a.defaultLocale,d=a.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&d?d(new Vg('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&d&&d(new Vg('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new ZS('"locale" was not configured, using "'.concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),_1(a),se(se({},a),{formatters:t,formatNumber:A1.bind(null,a,t.getNumberFormat),formatNumberToParts:y1.bind(null,a,t.getNumberFormat),formatRelativeTime:h1.bind(null,a,t.getRelativeTimeFormat),formatDate:i1.bind(null,a,t.getDateTimeFormat),formatDateToParts:l1.bind(null,a,t.getDateTimeFormat),formatTime:s1.bind(null,a,t.getDateTimeFormat),formatDateTimeRange:o1.bind(null,a,t.getDateTimeFormat),formatTimeToParts:u1.bind(null,a,t.getDateTimeFormat),formatPlural:f1.bind(null,a,t.getPluralRules),formatMessage:Ko.bind(null,a,t),$t:Ko.bind(null,a,t),formatList:E1.bind(null,a,t.getListFormat),formatListToParts:Dv.bind(null,a,t.getListFormat),formatDisplayName:g1.bind(null,a,t.getDisplayNames)})}function b1(e,i,t){if(t===void 0&&(t=Error),!e)throw new t(i)}function S1(e){b1(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var I1=se(se({},Lv),{textComponent:F.Fragment}),O1={key:42},L1=function(e){return F.isValidElement(e)?F.createElement(F.Fragment,O1,e):e},K1=function(e){var i;return(i=F.Children.map(e,L1))!==null&&i!==void 0?i:[]};function D1(e){return function(i){return e(F.Children.toArray(i))}}var Hg={exports:{}},Oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function P1(){if(xg)return Oe;xg=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,g=e?Symbol.for("react.context"):60110,v=e?Symbol.for("react.async_mode"):60111,E=e?Symbol.for("react.concurrent_mode"):60111,m=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,A=e?Symbol.for("react.suspense_list"):60120,K=e?Symbol.for("react.memo"):60115,P=e?Symbol.for("react.lazy"):60116,c=e?Symbol.for("react.block"):60121,_=e?Symbol.for("react.fundamental"):60117,O=e?Symbol.for("react.responder"):60118,V=e?Symbol.for("react.scope"):60119;function S(y){if(typeof y=="object"&&y!==null){var M=y.$$typeof;switch(M){case i:switch(y=y.type,y){case v:case E:case a:case l:case s:case h:return y;default:switch(y=y&&y.$$typeof,y){case g:case m:case P:case K:case d:return y;default:return M}}case t:return M}}}function X(y){return S(y)===E}return Oe.AsyncMode=v,Oe.ConcurrentMode=E,Oe.ContextConsumer=g,Oe.ContextProvider=d,Oe.Element=i,Oe.ForwardRef=m,Oe.Fragment=a,Oe.Lazy=P,Oe.Memo=K,Oe.Portal=t,Oe.Profiler=l,Oe.StrictMode=s,Oe.Suspense=h,Oe.isAsyncMode=function(y){return X(y)||S(y)===v},Oe.isConcurrentMode=X,Oe.isContextConsumer=function(y){return S(y)===g},Oe.isContextProvider=function(y){return S(y)===d},Oe.isElement=function(y){return typeof y=="object"&&y!==null&&y.$$typeof===i},Oe.isForwardRef=function(y){return S(y)===m},Oe.isFragment=function(y){return S(y)===a},Oe.isLazy=function(y){return S(y)===P},Oe.isMemo=function(y){return S(y)===K},Oe.isPortal=function(y){return S(y)===t},Oe.isProfiler=function(y){return S(y)===l},Oe.isStrictMode=function(y){return S(y)===s},Oe.isSuspense=function(y){return S(y)===h},Oe.isValidElementType=function(y){return typeof y=="string"||typeof y=="function"||y===a||y===E||y===l||y===s||y===h||y===A||typeof y=="object"&&y!==null&&(y.$$typeof===P||y.$$typeof===K||y.$$typeof===d||y.$$typeof===g||y.$$typeof===m||y.$$typeof===_||y.$$typeof===O||y.$$typeof===V||y.$$typeof===c)},Oe.typeOf=S,Oe}var qg;function F1(){return qg||(qg=1,Hg.exports=P1()),Hg.exports}var zs,Yg;function M1(){if(Yg)return zs;Yg=1;var e=F1(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=a,l[e.Memo]=s;function d(P){return e.isMemo(P)?s:l[P.$$typeof]||i}var g=Object.defineProperty,v=Object.getOwnPropertyNames,E=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,A=Object.prototype;function K(P,c,_){if(typeof c!="string"){if(A){var O=h(c);O&&O!==A&&K(P,O,_)}var V=v(c);E&&(V=V.concat(E(c)));for(var S=d(P),X=d(c),y=0;y<V.length;++y){var M=V[y];if(!t[M]&&!(_&&_[M])&&!(X&&X[M])&&!(S&&S[M])){var L=m(c,M);try{g(P,M,L)}catch{}}}}return P}return zs=K,zs}M1();var zo=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=F.createContext(null)):F.createContext(null);zo.Consumer;zo.Provider;var G1=zo;function Fv(){var e=F.useContext(G1);return S1(e),e}var Do;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Do||(Do={}));var Po;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Po||(Po={}));function Mv(e){var i=function(t){var a=Fv(),s=t.value,l=t.children,d=gi(t,["value","children"]),g=typeof s=="string"?new Date(s||0):s,v=e==="formatDate"?a.formatDateToParts(g,d):a.formatTimeToParts(g,d);return l(v)};return i.displayName=Po[e],i}function aa(e){var i=function(t){var a=Fv(),s=t.value,l=t.children,d=gi(t,["value","children"]),g=a[e](s,d);if(typeof l=="function")return l(g);var v=a.textComponent||F.Fragment;return F.createElement(v,null,g)};return i.displayName=Do[e],i}function Gv(e){return e&&Object.keys(e).reduce(function(i,t){var a=e[t];return i[t]=Iv(a)?D1(a):a,i},{})}var Cg=function(e,i,t,a){for(var s=[],l=4;l<arguments.length;l++)s[l-4]=arguments[l];var d=Gv(a),g=Ko.apply(void 0,tr([e,i,t,d],s,!1));return Array.isArray(g)?K1(g):g},B1=function(e,i){var t=e.defaultRichTextElements,a=gi(e,["defaultRichTextElements"]),s=Gv(t),l=N1(se(se(se({},I1),a),{defaultRichTextElements:s}),i),d={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:s};return se(se({},l),{formatMessage:Cg.bind(null,d,l.formatters),$t:Cg.bind(null,d,l.formatters)})};aa("formatDate");aa("formatTime");aa("formatNumber");aa("formatList");aa("formatDisplayName");Mv("formatDate");Mv("formatTime");function Xo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fo={exports:{}},V1=Fo.exports,$g;function w1(){return $g||($g=1,function(e,i){(function(t,a){e.exports=a()})(V1,function(){var t,a,s=1e3,l=6e4,d=36e5,g=864e5,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,E=31536e6,m=2628e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,A={years:E,months:m,days:g,hours:d,minutes:l,seconds:s,milliseconds:1,weeks:6048e5},K=function(M){return M instanceof X},P=function(M,L,I){return new X(M,I,L.$l)},c=function(M){return a.p(M)+"s"},_=function(M){return M<0},O=function(M){return _(M)?Math.ceil(M):Math.floor(M)},V=function(M){return Math.abs(M)},S=function(M,L){return M?_(M)?{negative:!0,format:""+V(M)+L}:{negative:!1,format:""+M+L}:{negative:!1,format:""}},X=function(){function M(I,Y,z){var U=this;if(this.$d={},this.$l=z,I===void 0&&(this.$ms=0,this.parseFromMilliseconds()),Y)return P(I*A[c(Y)],this);if(typeof I=="number")return this.$ms=I,this.parseFromMilliseconds(),this;if(typeof I=="object")return Object.keys(I).forEach(function(C){U.$d[c(C)]=I[C]}),this.calMilliseconds(),this;if(typeof I=="string"){var ne=I.match(h);if(ne){var W=ne.slice(2).map(function(C){return C!=null?Number(C):0});return this.$d.years=W[0],this.$d.months=W[1],this.$d.weeks=W[2],this.$d.days=W[3],this.$d.hours=W[4],this.$d.minutes=W[5],this.$d.seconds=W[6],this.calMilliseconds(),this}}return this}var L=M.prototype;return L.calMilliseconds=function(){var I=this;this.$ms=Object.keys(this.$d).reduce(function(Y,z){return Y+(I.$d[z]||0)*A[z]},0)},L.parseFromMilliseconds=function(){var I=this.$ms;this.$d.years=O(I/E),I%=E,this.$d.months=O(I/m),I%=m,this.$d.days=O(I/g),I%=g,this.$d.hours=O(I/d),I%=d,this.$d.minutes=O(I/l),I%=l,this.$d.seconds=O(I/s),I%=s,this.$d.milliseconds=I},L.toISOString=function(){var I=S(this.$d.years,"Y"),Y=S(this.$d.months,"M"),z=+this.$d.days||0;this.$d.weeks&&(z+=7*this.$d.weeks);var U=S(z,"D"),ne=S(this.$d.hours,"H"),W=S(this.$d.minutes,"M"),C=this.$d.seconds||0;this.$d.milliseconds&&(C+=this.$d.milliseconds/1e3,C=Math.round(1e3*C)/1e3);var x=S(C,"S"),$=I.negative||Y.negative||U.negative||ne.negative||W.negative||x.negative,Z=ne.format||W.format||x.format?"T":"",q=($?"-":"")+"P"+I.format+Y.format+U.format+Z+ne.format+W.format+x.format;return q==="P"||q==="-P"?"P0D":q},L.toJSON=function(){return this.toISOString()},L.format=function(I){var Y=I||"YYYY-MM-DDTHH:mm:ss",z={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return Y.replace(v,function(U,ne){return ne||String(z[U])})},L.as=function(I){return this.$ms/A[c(I)]},L.get=function(I){var Y=this.$ms,z=c(I);return z==="milliseconds"?Y%=1e3:Y=z==="weeks"?O(Y/A[z]):this.$d[z],Y||0},L.add=function(I,Y,z){var U;return U=Y?I*A[c(Y)]:K(I)?I.$ms:P(I,this).$ms,P(this.$ms+U*(z?-1:1),this)},L.subtract=function(I,Y){return this.add(I,Y,!0)},L.locale=function(I){var Y=this.clone();return Y.$l=I,Y},L.clone=function(){return P(this.$ms,this)},L.humanize=function(I){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!I)},L.valueOf=function(){return this.asMilliseconds()},L.milliseconds=function(){return this.get("milliseconds")},L.asMilliseconds=function(){return this.as("milliseconds")},L.seconds=function(){return this.get("seconds")},L.asSeconds=function(){return this.as("seconds")},L.minutes=function(){return this.get("minutes")},L.asMinutes=function(){return this.as("minutes")},L.hours=function(){return this.get("hours")},L.asHours=function(){return this.as("hours")},L.days=function(){return this.get("days")},L.asDays=function(){return this.as("days")},L.weeks=function(){return this.get("weeks")},L.asWeeks=function(){return this.as("weeks")},L.months=function(){return this.get("months")},L.asMonths=function(){return this.as("months")},L.years=function(){return this.get("years")},L.asYears=function(){return this.as("years")},M}(),y=function(M,L,I){return M.add(L.years()*I,"y").add(L.months()*I,"M").add(L.days()*I,"d").add(L.hours()*I,"h").add(L.minutes()*I,"m").add(L.seconds()*I,"s").add(L.milliseconds()*I,"ms")};return function(M,L,I){t=I,a=I().$utils(),I.duration=function(U,ne){var W=I.locale();return P(U,{$l:W},ne)},I.isDuration=K;var Y=L.prototype.add,z=L.prototype.subtract;L.prototype.add=function(U,ne){return K(U)?y(this,U,1):Y.bind(this)(U,ne)},L.prototype.subtract=function(U,ne){return K(U)?y(this,U,-1):z.bind(this)(U,ne)}}})}(Fo)),Fo.exports}var j1=w1();const U1=Xo(j1);var Mo={exports:{}},H1=Mo.exports,Jg;function x1(){return Jg||(Jg=1,function(e,i){(function(t,a){e.exports=a()})(H1,function(){var t="day";return function(a,s,l){var d=function(E){return E.add(4-E.isoWeekday(),t)},g=s.prototype;g.isoWeekYear=function(){return d(this).year()},g.isoWeek=function(E){if(!this.$utils().u(E))return this.add(7*(E-this.isoWeek()),t);var m,h,A,K,P=d(this),c=(m=this.isoWeekYear(),h=this.$u,A=(h?l.utc:l)().year(m).startOf("year"),K=4-A.isoWeekday(),A.isoWeekday()>4&&(K+=7),A.add(K,t));return P.diff(c,"week")+1},g.isoWeekday=function(E){return this.$utils().u(E)?this.day()||7:this.day(this.day()%7?E:E-7)};var v=g.startOf;g.startOf=function(E,m){var h=this.$utils(),A=!!h.u(m)||m;return h.p(E)==="isoweek"?A?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):v.bind(this)(E,m)}}})}(Mo)),Mo.exports}var q1=x1();const Y1=Xo(q1);var Go={exports:{}},C1=Go.exports,Wg;function $1(){return Wg||(Wg=1,function(e,i){(function(t,a){e.exports=a()})(C1,function(){var t="minute",a=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(l,d,g){var v=d.prototype;g.utc=function(c){var _={date:c,utc:!0,args:arguments};return new d(_)},v.utc=function(c){var _=g(this.toDate(),{locale:this.$L,utc:!0});return c?_.add(this.utcOffset(),t):_},v.local=function(){return g(this.toDate(),{locale:this.$L,utc:!1})};var E=v.parse;v.parse=function(c){c.utc&&(this.$u=!0),this.$utils().u(c.$offset)||(this.$offset=c.$offset),E.call(this,c)};var m=v.init;v.init=function(){if(this.$u){var c=this.$d;this.$y=c.getUTCFullYear(),this.$M=c.getUTCMonth(),this.$D=c.getUTCDate(),this.$W=c.getUTCDay(),this.$H=c.getUTCHours(),this.$m=c.getUTCMinutes(),this.$s=c.getUTCSeconds(),this.$ms=c.getUTCMilliseconds()}else m.call(this)};var h=v.utcOffset;v.utcOffset=function(c,_){var O=this.$utils().u;if(O(c))return this.$u?0:O(this.$offset)?h.call(this):this.$offset;if(typeof c=="string"&&(c=function(y){y===void 0&&(y="");var M=y.match(a);if(!M)return null;var L=(""+M[0]).match(s)||["-",0,0],I=L[0],Y=60*+L[1]+ +L[2];return Y===0?0:I==="+"?Y:-Y}(c),c===null))return this;var V=Math.abs(c)<=16?60*c:c,S=this;if(_)return S.$offset=V,S.$u=c===0,S;if(c!==0){var X=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(S=this.local().add(V+X,t)).$offset=V,S.$x.$localOffset=X}else S=this.utc();return S};var A=v.format;v.format=function(c){var _=c||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return A.call(this,_)},v.valueOf=function(){var c=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*c},v.isUTC=function(){return!!this.$u},v.toISOString=function(){return this.toDate().toISOString()},v.toString=function(){return this.toDate().toUTCString()};var K=v.toDate;v.toDate=function(c){return c==="s"&&this.$offset?g(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():K.call(this)};var P=v.diff;v.diff=function(c,_,O){if(c&&this.$u===c.$u)return P.call(this,c,_,O);var V=this.local(),S=g(c).local();return P.call(V,S,_,O)}}})}(Go)),Go.exports}var J1=$1();const W1=Xo(J1),z1=Kv(),ki=e=>B1({locale:"nb-NO",messages:e},z1),vi={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};ki(vi);var Bo={exports:{}},X1=Bo.exports,zg;function Z1(){return zg||(zg=1,function(e,i){(function(t,a){e.exports=a(na)})(X1,function(t){function a(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var s=a(t),l={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(l,null,!0),l})}(Bo)),Bo.exports}Z1();na.extend(W1);na.extend(Y1);na.extend(U1);ki(vi);ki(vi);var Xg={exports:{}},Ht={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function Q1(){if(Zg)return Ht;Zg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function t(a,s,l){var d=null;if(l!==void 0&&(d=""+l),s.key!==void 0&&(d=""+s.key),"key"in s){l={};for(var g in s)g!=="key"&&(l[g]=s[g])}else l=s;return s=l.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:l}}return Ht.Fragment=i,Ht.jsx=t,Ht.jsxs=t,Ht}var Qg;function eI(){return Qg||(Qg=1,Xg.exports=Q1()),Xg.exports}eI();ki(vi);F.createContext({});var Vo={exports:{}},nI=Vo.exports,ek;function rI(){return ek||(ek=1,function(e,i){(function(t,a){e.exports=a()})(nI,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,l=/\d\d/,d=/\d\d?/,g=/\d*[^-_:/,()\s\d]+/,v={},E=function(_){return(_=+_)+(_>68?1900:2e3)},m=function(_){return function(O){this[_]=+O}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(_){(this.zone||(this.zone={})).offset=function(O){if(!O||O==="Z")return 0;var V=O.match(/([+-]|\d\d)/g),S=60*V[1]+(+V[2]||0);return S===0?0:V[0]==="+"?-S:S}(_)}],A=function(_){var O=v[_];return O&&(O.indexOf?O:O.s.concat(O.f))},K=function(_,O){var V,S=v.meridiem;if(S){for(var X=1;X<=24;X+=1)if(_.indexOf(S(X,0,O))>-1){V=X>12;break}}else V=_===(O?"pm":"PM");return V},P={A:[g,function(_){this.afternoon=K(_,!1)}],a:[g,function(_){this.afternoon=K(_,!0)}],Q:[s,function(_){this.month=3*(_-1)+1}],S:[s,function(_){this.milliseconds=100*+_}],SS:[l,function(_){this.milliseconds=10*+_}],SSS:[/\d{3}/,function(_){this.milliseconds=+_}],s:[d,m("seconds")],ss:[d,m("seconds")],m:[d,m("minutes")],mm:[d,m("minutes")],H:[d,m("hours")],h:[d,m("hours")],HH:[d,m("hours")],hh:[d,m("hours")],D:[d,m("day")],DD:[l,m("day")],Do:[g,function(_){var O=v.ordinal,V=_.match(/\d+/);if(this.day=V[0],O)for(var S=1;S<=31;S+=1)O(S).replace(/\[|\]/g,"")===_&&(this.day=S)}],w:[d,m("week")],ww:[l,m("week")],M:[d,m("month")],MM:[l,m("month")],MMM:[g,function(_){var O=A("months"),V=(A("monthsShort")||O.map(function(S){return S.slice(0,3)})).indexOf(_)+1;if(V<1)throw new Error;this.month=V%12||V}],MMMM:[g,function(_){var O=A("months").indexOf(_)+1;if(O<1)throw new Error;this.month=O%12||O}],Y:[/[+-]?\d+/,m("year")],YY:[l,function(_){this.year=E(_)}],YYYY:[/\d{4}/,m("year")],Z:h,ZZ:h};function c(_){var O,V;O=_,V=v&&v.formats;for(var S=(_=O.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(z,U,ne){var W=ne&&ne.toUpperCase();return U||V[ne]||t[ne]||V[W].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(C,x,$){return x||$.slice(1)})})).match(a),X=S.length,y=0;y<X;y+=1){var M=S[y],L=P[M],I=L&&L[0],Y=L&&L[1];S[y]=Y?{regex:I,parser:Y}:M.replace(/^\[|\]$/g,"")}return function(z){for(var U={},ne=0,W=0;ne<X;ne+=1){var C=S[ne];if(typeof C=="string")W+=C.length;else{var x=C.regex,$=C.parser,Z=z.slice(W),q=x.exec(Z)[0];$.call(U,q),z=z.replace(q,"")}}return function(ee){var ae=ee.afternoon;if(ae!==void 0){var re=ee.hours;ae?re<12&&(ee.hours+=12):re===12&&(ee.hours=0),delete ee.afternoon}}(U),U}}return function(_,O,V){V.p.customParseFormat=!0,_&&_.parseTwoDigitYear&&(E=_.parseTwoDigitYear);var S=O.prototype,X=S.parse;S.parse=function(y){var M=y.date,L=y.utc,I=y.args;this.$u=L;var Y=I[1];if(typeof Y=="string"){var z=I[2]===!0,U=I[3]===!0,ne=z||U,W=I[2];U&&(W=I[2]),v=this.$locale(),!z&&W&&(v=V.Ls[W]),this.$d=function(Z,q,ee,ae){try{if(["x","X"].indexOf(q)>-1)return new Date((q==="X"?1e3:1)*Z);var re=c(q)(Z),_e=re.year,be=re.month,xe=re.day,je=re.hours,ln=re.minutes,yn=re.seconds,un=re.milliseconds,ze=re.zone,qe=re.week,Ce=new Date,Qe=xe||(_e||be?1:Ce.getDate()),dn=_e||Ce.getFullYear(),$e=0;_e&&!be||($e=be>0?be-1:Ce.getMonth());var gn,or=je||0,rn=ln||0,Jn=yn||0,lr=un||0;return ze?new Date(Date.UTC(dn,$e,Qe,or,rn,Jn,lr+60*ze.offset*1e3)):ee?new Date(Date.UTC(dn,$e,Qe,or,rn,Jn,lr)):(gn=new Date(dn,$e,Qe,or,rn,Jn,lr),qe&&(gn=ae(gn).week(qe).toDate()),gn)}catch{return new Date("")}}(M,Y,L,V),this.init(),W&&W!==!0&&(this.$L=this.locale(W).$L),ne&&M!=this.format(Y)&&(this.$d=new Date("")),v={}}else if(Y instanceof Array)for(var C=Y.length,x=1;x<=C;x+=1){I[1]=Y[x-1];var $=V.apply(this,I);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}x===C&&(this.$d=new Date(""))}else X.call(this,y)}}})}(Vo)),Vo.exports}var tI=rI();const aI=gv(tI);na.extend(aI);pn(ea);const iI=e=>{const i=e.aktiveNaturalytelser.reduce((a,s)=>{const l=s.type;return l in a?{...a,[l]:[...a[l],s]}:{...a,[l]:[s]}},{}),t={};return Object.entries(i).forEach(([a,s])=>{const l=s.sort((d,g)=>wb({fom:d.periode.fomDato,tom:d.periode.tomDato},{fom:g.periode.fomDato,tom:g.periode.tomDato})).reverse();t[a]=l.flatMap((d,g,v)=>{const E=v[g+1],m=d.periode.tomDato,h=E==null?void 0:E.periode.fomDato;return m===dt?[]:[{...d,periode:{fomDato:sg(m,1),tomDato:h?sg(h,-1):dt}}]})}),t},Bv=({inntektsmelding:e,alleKodeverk:i})=>{const t=Cn(),a=iI(e);return G.jsx(ir,{tittel:t.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?G.jsx("span",{children:G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):G.jsx(oi,{gap:"1",children:Object.entries(a).map(([s,l])=>{var d;return G.jsxs("div",{children:[G.jsx("span",{children:(d=i.NaturalYtelseType.find(g=>g.kode===s))==null?void 0:d.navn}),G.jsx("ul",{children:l.map(g=>G.jsxs(J.Fragment,{children:[G.jsxs("li",{children:[G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",G.jsx($t,{dateString:g.periode.fomDato})]}),g.periode.tomDato!==dt&&G.jsxs("li",{children:[G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",G.jsx($t,{dateString:g.periode.tomDato})]}),G.jsxs("li",{children:[G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",G.jsx(ot,{beløp:g.beloepPerMnd.verdi})]})]},g.indexKey))})]},s)})})})};Bv.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const Vv=({kildeSystem:e})=>{const i=Cn(),t=F.useMemo(()=>{switch(e.toUpperCase()){case"NAV_NO":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}},[i,e]);return G.jsx(ir,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:t})};Vv.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const wv=({inntektsmelding:e})=>{const i=Cn();return G.jsxs(ir,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[G.jsxs("span",{children:[G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),G.jsxs("span",{children:[G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};wv.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""}}};const jv=({inntektsmelding:e,fagsak:i,arbeidsgiverOpplysninger:t})=>{const a=`IM ${t.navn} - ${Qk(e.motattDato)}`;return G.jsx(Co,{type:"button",onClick:()=>{JN(i.saksnummer,e.journalpostId,e.dokumentId,a)},variant:"secondary",size:"small",icon:G.jsx(kR,{}),children:G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.modal.trigger"})})};jv.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  relasjonsRolleType: RelasjonsRolleType;
  status: FagsakStatus;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"relasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"status",value:{name:"FagsakStatus",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: BehandlingType;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"BehandlingType",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: BehandlingType;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>`,required:!0}},{key:"annenPart",value:{name:"union",raw:"Person | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>`,required:!0},{name:"null"}],required:!0}},{key:"annenpartBehandling",value:{name:"union",raw:"AnnenPartBehandling | null",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: RelasjonsRolleType;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}}]}},{name:"null"}],required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: FagsakMarkeringKode;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
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
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
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
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
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
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"tag",value:{name:"string",required:!0}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  journalpostId: string;
  tag: string;
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
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  relasjonsRolleType: RelasjonsRolleType;
  status: FagsakStatus;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""},arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`},description:""}}};const Uv=({inntektsmelding:e})=>{const i=Cn();if(e.refusjonsperioder.length===0)return G.jsx(ir,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:e.refusjonPrMnd?G.jsx(ot,{beløp:e.refusjonPrMnd}):G.jsx(Ke,{tagName:"span",id:"InntektsmeldingFaktaPanel.refusjon.ingen"})});const t=[...e.refusjonsperioder].sort((a,s)=>new Date(a.fom).getTime()-new Date(s.fom).getTime());return G.jsxs(ir,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:[G.jsx("span",{children:"Krever refusjon"}),G.jsx(ot,{beløp:e.refusjonPrMnd??0}),G.jsx("span",{children:"Endringer i perioden:"}),G.jsx("ul",{children:t.map(a=>G.jsx("li",{children:G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:G.jsx(ot,{beløp:a.refusjonsbeløp.verdi}),fom:G.jsx($t,{dateString:a.fom})}})},a.indexKey))})]})};Uv.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""}}};const Hv=({startDatoPermisjon:e,ytelse:i})=>{const t=Cn();return e?G.jsxs(ir,{tittel:t.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:i.toLowerCase()}),children:[G.jsx("span",{children:e?G.jsx($t,{dateString:e}):"-"}),G.jsx("span",{children:G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};Hv.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const sI="_behandlingCircleIngen_g2j3j_1",oI="_behandlingCircleDenne_g2j3j_5",lI="_behandlingCircleAndre_g2j3j_9",uI="_container_g2j3j_13",dI="_ingenInntektsmeldinger_g2j3j_20",Yt={behandlingCircleIngen:sI,behandlingCircleDenne:oI,behandlingCircleAndre:lI,container:uI,ingenInntektsmeldinger:dI},xv=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:i,alleBehandlinger:t})=>{var g;const{alleKodeverk:a,fagsak:s,behandling:l}=rv(),d=Cn();return G.jsxs(oi,{gap:"4",className:Yt.container,children:[G.jsxs(st,{gap:"4",justify:"space-between",align:"start",children:[G.jsxs(Uk,{level:"3",size:"small",children:[G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",G.jsx(ai,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),G.jsx(jv,{fagsak:s,inntektsmelding:e,arbeidsgiverOpplysninger:i[e.arbeidsgiverIdent]})]}),G.jsxs(G_,{columns:3,gap:"8",children:[G.jsx(ov,{arbeidsgiverOpplysninger:i[e.arbeidsgiverIdent],arbeidsgiverIdent:e.arbeidsgiverIdent}),G.jsx(ir,{tittel:d.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:G.jsx(ot,{beløp:e.inntektPrMnd})}),G.jsx(lv,{alleKodeverk:a,inntektsmelding:e,alleBehandlinger:t,behandling:l}),G.jsx(wv,{inntektsmelding:e}),G.jsx(Hv,{ytelse:((g=a.FagsakYtelseType.find(v=>v.kode===s.fagsakYtelseType))==null?void 0:g.navn)??"",startDatoPermisjon:e.startDatoPermisjon}),G.jsx(Vv,{kildeSystem:e.kildeSystem}),G.jsx(Bv,{inntektsmelding:e,alleKodeverk:a}),G.jsx(Uv,{inntektsmelding:e})]})]})};xv.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
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
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
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
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const gI={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},nk=pn(gI),wo=({arbeidsgiverOpplysningerPerId:e,alleBehandlinger:i,inntektsmeldinger:t})=>{const{behandling:a}=rv(),[s,l]=F.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),d=E=>{l(s&&E===s.orderBy&&s.direction==="descending"?void 0:{orderBy:E,direction:s&&E===s.orderBy&&s.direction==="ascending"?"descending":"ascending"})},g=s?kI({inntektsmeldinger:t,arbeidsgiverOpplysningerPerId:e,sortKey:s.orderBy,behandling:a}):t,v=(s==null?void 0:s.direction)==="ascending"?g:g.toReversed();return v.length===0?G.jsx(xd,{value:nk,children:G.jsxs(st,{gap:"2",justify:"center",align:"center",className:Yt.ingenInntektsmeldinger,children:[G.jsx(ii,{children:G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.ingen"})}),G.jsx(hR,{})]})}):G.jsx(xd,{value:nk,children:G.jsxs(He,{sort:s,onSortChange:E=>d(E),children:[G.jsx(He.Header,{children:G.jsxs(He.Row,{children:[G.jsx(He.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),G.jsx(He.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),G.jsx(He.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),G.jsx(He.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),G.jsx(He.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),G.jsx(He.HeaderCell,{})]})}),G.jsx(He.Body,{children:v.map(E=>{var m;return G.jsxs(He.ExpandableRow,{expandOnRowClick:!0,contentGutter:"none",togglePlacement:"right",content:G.jsx(xv,{alleBehandlinger:i,arbeidsgiverOpplysningerPerId:e,inntektsmelding:E}),children:[G.jsx(He.DataCell,{children:G.jsx(ai,{dateTimeString:E.innsendingstidspunkt,separator:"kl"})}),G.jsx(He.DataCell,{children:((m=e[E.arbeidsgiverIdent])==null?void 0:m.navn)??"-"}),G.jsx(He.DataCell,{children:E.startDatoPermisjon?G.jsx($t,{dateString:E.startDatoPermisjon}):"-"}),G.jsx(He.DataCell,{children:G.jsx(ot,{beløp:E.inntektPrMnd})}),G.jsx(He.DataCell,{children:G.jsx(vI,{behandling:a,inntektsmelding:E})})]},`${E.journalpostId}-${E.internArbeidsforholdId}`)})})]})})},kI=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:i,sortKey:t,behandling:a})=>t==="arbeidsgiverIdent"?e.slice().sort((s,l)=>{var v,E;const d=(v=i[s.arbeidsgiverIdent])==null?void 0:v.navn,g=(E=i[l.arbeidsgiverIdent])==null?void 0:E.navn;return Xs(d,g)}):t==="tilknyttedeBehandlingIder"?e.slice().sort((s,l)=>{const d=jo({behandling:a,inntektsmelding:s}),g=jo({behandling:a,inntektsmelding:l});return Xs(d,g)}):e.slice().sort((s,l)=>{const d=s[t],g=l[t];return Xs(d,g)}),Xs=(e,i)=>e===void 0?-1:i===void 0?1:e<i?-1:e>i?1:0,vI=({behandling:e,inntektsmelding:i})=>{const t=jo({behandling:e,inntektsmelding:i});return t==="DENNE"?G.jsxs(st,{gap:"1",align:"center",children:[G.jsx(Us,{className:Yt.behandlingCircleDenne}),G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):t==="ANDRE"?G.jsxs(st,{gap:"1",align:"center",children:[G.jsx(Us,{className:Yt.behandlingCircleAndre}),G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):G.jsxs(st,{gap:"1",align:"center",children:[G.jsx(Us,{className:Yt.behandlingCircleIngen}),G.jsx(Ke,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},jo=({behandling:e,inntektsmelding:i})=>i.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":i.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";wo.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
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
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
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
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const{global:EI}=__STORYBOOK_MODULE_GLOBAL__,{setDefaultProjectAnnotations:$I,setProjectAnnotations:JI,composeStory:WI,composeStories:zI}=__STORYBOOK_MODULE_PREVIEW_API__;var{window:rk}=EI;rk&&(rk.STORYBOOK_ENV="react");({...LA});var ik;typeof module<"u"&&((ik=module==null?void 0:module.hot)==null||ik.decline());const{addons:mI}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:fI}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:tk}=__STORYBOOK_MODULE_GLOBAL__;var pI=Object.defineProperty,TI=(e,i)=>{for(var t in i)pI(e,t,{get:i[t],enumerable:!0})},hI="storybook/actions",cI=`${hI}/action-event`,AI={depth:10,clearOnStoryChange:!0,limit:50},qv=(e,i)=>{let t=Object.getPrototypeOf(e);return!t||i(t)?t:qv(t,i)},yI=e=>!!(typeof e=="object"&&e&&qv(e,i=>/^Synthetic(?:Base)?Event$/.test(i.constructor.name))&&typeof e.persist=="function"),RI=e=>{if(yI(e)){let i=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));i.persist();let t=Object.getOwnPropertyDescriptor(i,"view"),a=t==null?void 0:t.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(i,"view",{...t,value:Object.create(a.constructor.prototype)}),i}return e},_I=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?KA():Date.now().toString(36)+Math.random().toString(36).substring(2);function Ei(e,i={}){let t={...AI,...i},a=function(...s){var h,A;if(i.implicit){let K=(h="__STORYBOOK_PREVIEW__"in tk?tk.__STORYBOOK_PREVIEW__:void 0)==null?void 0:h.storyRenders.find(P=>P.phase==="playing"||P.phase==="rendering");if(K){let P=!((A=globalThis==null?void 0:globalThis.FEATURES)!=null&&A.disallowImplicitActionsInRenderV8),c=new fI({phase:K.phase,name:e,deprecated:P});if(P)console.warn(c);else throw c}}let l=mI.getChannel(),d=_I(),g=5,v=s.map(RI),E=s.length>1?v:v[0],m={id:d,count:0,data:{name:e,args:E},options:{...t,maxDepth:g+(t.depth||3),allowFunction:t.allowFunction||!1}};l.emit(cI,m)};return a.isAction=!0,a.implicit=i.implicit,a}const{definePreview:XI}=__STORYBOOK_MODULE_PREVIEW_API__,{global:Zs}=__STORYBOOK_MODULE_GLOBAL__;var NI={};TI(NI,{argsEnhancers:()=>II,loaders:()=>LI});var Yv=(e,i)=>typeof i[e]>"u"&&!(e in i),bI=e=>{let{initialArgs:i,argTypes:t,id:a,parameters:{actions:s}}=e;if(!s||s.disable||!s.argTypesRegex||!t)return{};let l=new RegExp(s.argTypesRegex);return Object.entries(t).filter(([d])=>!!l.test(d)).reduce((d,[g,v])=>(Yv(g,i)&&(d[g]=Ei(g,{implicit:!0,id:a})),d),{})},SI=e=>{let{initialArgs:i,argTypes:t,parameters:{actions:a}}=e;return a!=null&&a.disable||!t?{}:Object.entries(t).filter(([s,l])=>!!l.action).reduce((s,[l,d])=>(Yv(l,i)&&(s[l]=Ei(typeof d.action=="string"?d.action:l)),s),{})},II=[SI,bI],ak=!1,OI=e=>{let{parameters:{actions:i}}=e;if(!(i!=null&&i.disable)&&!ak&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in Zs&&typeof Zs.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let t=Zs.__STORYBOOK_TEST_ON_MOCK_CALL__;t((a,s)=>{let l=a.getMockName();l!=="spy"&&(!/^next\/.*::/.test(l)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(d=>l.startsWith(d)))&&Ei(l)(s)}),ak=!0}},LI=[OI];const KI={UttakUtsettelseType:[{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],FagsakYtelseType:[{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"},{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"}],StønadskontoType:[{kode:"TETTE_SAKER_MOR",kodeverk:"STOENADSKONTOTYPE",navn:"Tette fødsler mor"},{kode:"TILLEGG_PREMATUR",kodeverk:"STOENADSKONTOTYPE",navn:"Tilleggsdager ved prematur fødsel"},{kode:"BARE_FAR_RETT",kodeverk:"STOENADSKONTOTYPE",navn:"Bare far har rett"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"UFØREDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Uføredager"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"TILLEGG_FLERBARN",kodeverk:"STOENADSKONTOTYPE",navn:"Tilleggsdager ved flerbarnstilfelle"},{kode:"FAR_RUNDT_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Fars uttak ifm fødsel"},{kode:"TETTE_SAKER_FAR",kodeverk:"STOENADSKONTOTYPE",navn:"Tette fødsler far/medmor"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"}],FagsakStatus:[{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"},{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"}],Venteårsak:[{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_UTLAND_TRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på utenlandsk trygdemyndighet"},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga. for tidlig søknad"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev, og venter på søknad."},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdsID som stemmer med Aa-reg"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_BRUKERTILBAKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på tilbakemelding fra bruker"},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_LOVENDRING_8_41",kodeverk:"VENT_AARSAK",navn:"Venter på vedtak om lovendring vedrørende beregning av næring i kombinasjon med arbeid eller frilans"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på skanning"},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"}],BehandlingÅrsakType:[{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"KLAGE_TILBAKE",kodeverk:"BEHANDLING_AARSAK",navn:"Tilbakebetaling"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om opptjening"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Ny søknad"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om søknadsfrist"},{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Ny inntektsmelding"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om medlemskap"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"FEIL_PRAKSIS_UTSETTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Feil praksis utsettelse"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"FEIL_PRAKSIS_IVERKS_UTSET",kodeverk:"BEHANDLING_AARSAK",navn:"Feil iverksettelse fri utsettelse"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om inntekt"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om beregning"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. for uke 26-29"},{kode:"ENDRE-DEKNINGSGRAD",kodeverk:"BEHANDLING_AARSAK",navn:"Endre dekningsgrad"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"}],GraderingAvslagÅrsak:[{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'}],AktivitetStatus:[{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"}],RevurderingVarslingÅrsak:[{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utflyttet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],KonsekvensForYtelsen:[{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"}],AktivitetskravPermisjonType:[{kode:"FORELDREPENGER",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Foreldrepenger"},{kode:"UTDANNING",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Utdanning"},{kode:"PERMITTERING",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Permittering"},{kode:"ANNEN_PERMISJON",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Annen permisjon"}],AdresseType:[{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"},{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"}],SivilstandType:[{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"}],Inntektskategori:[{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilanser"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - fisker"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - jordbruker"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - dagmamma"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"}],SkjermlenkeType:[{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og rett"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstansen"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat NFP"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"}],FaktaOmBeregningTilfelle:[{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"}],OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:[{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"}],KlageAvvistÅrsak:[{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ugyldig",lovHjemmel:null},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'}],BehandlingResultatType:[{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknad mangler"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"}],VergeType:[{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"},{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"}],OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"}],FamilieHendelseType:[{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],KlageHjemmel:[{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"},{kode:"883-5",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 5"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"}],VilkårType:[{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_2_F",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"}],FarSøkerType:[{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"}],FaresignalVurdering:[{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"}],ArbeidType:[{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"}],KlageMedholdÅrsak:[{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"}],Region:[{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"},{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"},{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"}],FordelingPeriodeKilde:[{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"},{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"}],FagsakMarkering:[{kode:"SELVSTENDIG_NÆRING",kodeverk:"FAGSAK_MARKERING",navn:"Næringsdrivende"},{kode:"SAMMENSATT_KONTROLL",kodeverk:"FAGSAK_MARKERING",navn:"Sammensatt kontroll"},{kode:"EØS_BOSATT_NORGE",kodeverk:"FAGSAK_MARKERING",navn:"EØS bosatt Norge"},{kode:"PRAKSIS_UTSETTELSE",kodeverk:"FAGSAK_MARKERING",navn:"Praksis utsettelse"},{kode:"BARE_FAR_RETT",kodeverk:"FAGSAK_MARKERING",navn:"Bare far har rett"},{kode:"DØD_DØDFØDSEL",kodeverk:"FAGSAK_MARKERING",navn:"Død eller dødfødsel"},{kode:"BOSATT_UTLAND",kodeverk:"FAGSAK_MARKERING",navn:"Bosatt utland"}],Arbeidskategori:[{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"}],VurderÅrsak:[{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"},{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"SAKSFLYT",kodeverk:"VURDER_AARSAK",navn:"Saksflyt"},{kode:"BEGRUNNELSE",kodeverk:"VURDER_AARSAK",navn:"Begrunnelse"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"}],Landkoder:[{kode:"SGP",kodeverk:"LANDKODER",navn:"SINGAPORE"},{kode:"GNB",kodeverk:"LANDKODER",navn:"GUINEA-BISSAU"},{kode:"NCL",kodeverk:"LANDKODER",navn:"NY-KALEDONIA"},{kode:"GHA",kodeverk:"LANDKODER",navn:"GHANA"},{kode:"DEU",kodeverk:"LANDKODER",navn:"TYSKLAND"},{kode:"ANT",kodeverk:"LANDKODER",navn:"DE NEDERLANDSKE ANTILLENE"},{kode:"SPM",kodeverk:"LANDKODER",navn:"ST-PIERRE OG MIQUELON"},{kode:"CUB",kodeverk:"LANDKODER",navn:"CUBA"},{kode:"NGA",kodeverk:"LANDKODER",navn:"NIGERIA"},{kode:"UGA",kodeverk:"LANDKODER",navn:"UGANDA"},{kode:"BVT",kodeverk:"LANDKODER",navn:"BOUVETØYA"},{kode:"XXK",kodeverk:"LANDKODER",navn:"KOSOVO"},{kode:"MDG",kodeverk:"LANDKODER",navn:"MADAGASKAR"},{kode:"VAT",kodeverk:"LANDKODER",navn:"VATIKANSTATEN"},{kode:"PRK",kodeverk:"LANDKODER",navn:"NORD-KOREA"},{kode:"NZL",kodeverk:"LANDKODER",navn:"NEW ZEALAND"},{kode:"MCO",kodeverk:"LANDKODER",navn:"MONACO"},{kode:"GUF",kodeverk:"LANDKODER",navn:"FRANSK GUYANA"},{kode:"ETH",kodeverk:"LANDKODER",navn:"ETIOPIA"},{kode:"MNP",kodeverk:"LANDKODER",navn:"NORD-MARIANENE"},{kode:"BMU",kodeverk:"LANDKODER",navn:"BERMUDA"},{kode:"PSE",kodeverk:"LANDKODER",navn:"DET PALESTINSKE OMRÅDET"},{kode:"PYF",kodeverk:"LANDKODER",navn:"FRANSK POLYNESIA"},{kode:"FLK",kodeverk:"LANDKODER",navn:"FALKLANDSØYENE"},{kode:"NER",kodeverk:"LANDKODER",navn:"NIGER"},{kode:"SSD",kodeverk:"LANDKODER",navn:"SØR-SUDAN"},{kode:"PLW",kodeverk:"LANDKODER",navn:"PALAU"},{kode:"HRV",kodeverk:"LANDKODER",navn:"KROATIA"},{kode:"ALA",kodeverk:"LANDKODER",navn:"ÅLAND"},{kode:"ZWE",kodeverk:"LANDKODER",navn:"ZIMBABWE"},{kode:"SRB",kodeverk:"LANDKODER",navn:"SERBIA"},{kode:"SHN",kodeverk:"LANDKODER",navn:"ST. HELENA"},{kode:"TTO",kodeverk:"LANDKODER",navn:"TRINIDAD OG TOBAGO"},{kode:"THA",kodeverk:"LANDKODER",navn:"THAILAND"},{kode:"KGZ",kodeverk:"LANDKODER",navn:"KIRGISISTAN"},{kode:"MDV",kodeverk:"LANDKODER",navn:"MALDIVENE"},{kode:"TWN",kodeverk:"LANDKODER",navn:"TAIWAN"},{kode:"BEL",kodeverk:"LANDKODER",navn:"BELGIA"},{kode:"ARM",kodeverk:"LANDKODER",navn:"ARMENIA"},{kode:"SYR",kodeverk:"LANDKODER",navn:"SYRIA"},{kode:"WSM",kodeverk:"LANDKODER",navn:"SAMOA"},{kode:"VCT",kodeverk:"LANDKODER",navn:"ST. VINCENT"},{kode:"IND",kodeverk:"LANDKODER",navn:"INDIA"},{kode:"ITA",kodeverk:"LANDKODER",navn:"ITALIA"},{kode:"SLE",kodeverk:"LANDKODER",navn:"SIERRA LEONE"},{kode:"CHE",kodeverk:"LANDKODER",navn:"SVEITS"},{kode:"MHL",kodeverk:"LANDKODER",navn:"MARSHALLØYENE"},{kode:"URY",kodeverk:"LANDKODER",navn:"URUGUAY"},{kode:"FJI",kodeverk:"LANDKODER",navn:"FIJI"},{kode:"IMN",kodeverk:"LANDKODER",navn:"ISLE OF MAN"},{kode:"CSK",kodeverk:"LANDKODER",navn:"TSJEKKOSLOVAKIA"},{kode:"SGS",kodeverk:"LANDKODER",navn:"SØR-GEORGIA OG SØR-SANDWICHØYE"},{kode:"ASM",kodeverk:"LANDKODER",navn:"AM. SAMOA"},{kode:"BGR",kodeverk:"LANDKODER",navn:"BULGARIA"},{kode:"MYT",kodeverk:"LANDKODER",navn:"MAYOTTE"},{kode:"DNK",kodeverk:"LANDKODER",navn:"DANMARK"},{kode:"IRL",kodeverk:"LANDKODER",navn:"IRLAND"},{kode:"LSO",kodeverk:"LANDKODER",navn:"LESOTHO"},{kode:"IRN",kodeverk:"LANDKODER",navn:"IRAN"},{kode:"GLP",kodeverk:"LANDKODER",navn:"GUADELOUPE"},{kode:"ABW",kodeverk:"LANDKODER",navn:"ARUBA"},{kode:"BIH",kodeverk:"LANDKODER",navn:"BOSNIA-HERCEGOVINA"},{kode:"MTQ",kodeverk:"LANDKODER",navn:"MARTINIQUE"},{kode:"PRI",kodeverk:"LANDKODER",navn:"PUERTO RICO"},{kode:"HMD",kodeverk:"LANDKODER",navn:"HEARD OG MCDONALD ØYENE"},{kode:"IOT",kodeverk:"LANDKODER",navn:"BRITISK-INDISKE HAV"},{kode:"SLB",kodeverk:"LANDKODER",navn:"SALOMONØYENE"},{kode:"KAZ",kodeverk:"LANDKODER",navn:"KAZAKHSTAN"},{kode:"MEX",kodeverk:"LANDKODER",navn:"MEXICO"},{kode:"HKG",kodeverk:"LANDKODER",navn:"HONGKONG"},{kode:"LIE",kodeverk:"LANDKODER",navn:"LIECHTENSTEIN"},{kode:"BHS",kodeverk:"LANDKODER",navn:"BAHAMAS"},{kode:"UKR",kodeverk:"LANDKODER",navn:"UKRAINA"},{kode:"BES",kodeverk:"LANDKODER",navn:"BONAIRE, SINT EUSTATIUS, SABA"},{kode:"RWA",kodeverk:"LANDKODER",navn:"RWANDA"},{kode:"ARE",kodeverk:"LANDKODER",navn:"DE ARABISKE EMIRATER"},{kode:"EGY",kodeverk:"LANDKODER",navn:"EGYPT"},{kode:"SXM",kodeverk:"LANDKODER",navn:"SINT MAARTEN"},{kode:"GRC",kodeverk:"LANDKODER",navn:"HELLAS"},{kode:"ROU",kodeverk:"LANDKODER",navn:"ROMANIA"},{kode:"SUR",kodeverk:"LANDKODER",navn:"SURINAM"},{kode:"MYS",kodeverk:"LANDKODER",navn:"MALAYSIA"},{kode:"OMN",kodeverk:"LANDKODER",navn:"OMAN"},{kode:"LBY",kodeverk:"LANDKODER",navn:"LIBYA"},{kode:"FRO",kodeverk:"LANDKODER",navn:"FÆRØYENE"},{kode:"ISR",kodeverk:"LANDKODER",navn:"ISRAEL"},{kode:"IDN",kodeverk:"LANDKODER",navn:"INDONESIA"},{kode:"SMR",kodeverk:"LANDKODER",navn:"SAN MARINO"},{kode:"MKD",kodeverk:"LANDKODER",navn:"MAKEDONIA"},{kode:"SWZ",kodeverk:"LANDKODER",navn:"SWAZILAND"},{kode:"DZA",kodeverk:"LANDKODER",navn:"ALGERIE"},{kode:"MWI",kodeverk:"LANDKODER",navn:"MALAWI"},{kode:"STP",kodeverk:"LANDKODER",navn:"SAO TOME OG PRINCIPE"},{kode:"VIR",kodeverk:"LANDKODER",navn:"JOMFRUØYENE AM."},{kode:"CPV",kodeverk:"LANDKODER",navn:"KAPP VERDE"},{kode:"PAK",kodeverk:"LANDKODER",navn:"PAKISTAN"},{kode:"ECU",kodeverk:"LANDKODER",navn:"ECUADOR"},{kode:"PRT",kodeverk:"LANDKODER",navn:"PORTUGAL"},{kode:"COD",kodeverk:"LANDKODER",navn:"KONGO, DEN DEMOKR. REPUBL"},{kode:"MMR",kodeverk:"LANDKODER",navn:"MYANMAR (BURMA)"},{kode:"ZAF",kodeverk:"LANDKODER",navn:"SØR-AFRIKA"},{kode:"USA",kodeverk:"LANDKODER",navn:"USA"},{kode:"SVN",kodeverk:"LANDKODER",navn:"SLOVENIA"},{kode:"FSM",kodeverk:"LANDKODER",navn:"MIKRONESIAFØD."},{kode:"GNQ",kodeverk:"LANDKODER",navn:"EKVATORIAL-GUINEA"},{kode:"CHN",kodeverk:"LANDKODER",navn:"REPUBLIKKEN KINA"},{kode:"HTI",kodeverk:"LANDKODER",navn:"HAITI"},{kode:"NIC",kodeverk:"LANDKODER",navn:"NICARAGUA"},{kode:"NAM",kodeverk:"LANDKODER",navn:"NAMIBIA"},{kode:"SWE",kodeverk:"LANDKODER",navn:"SVERIGE"},{kode:"BRA",kodeverk:"LANDKODER",navn:"BRASIL"},{kode:"GMB",kodeverk:"LANDKODER",navn:"GAMBIA"},{kode:"WLF",kodeverk:"LANDKODER",navn:"WALLIS/FUTUNAØYENE"},{kode:"JAM",kodeverk:"LANDKODER",navn:"JAMAICA"},{kode:"???",kodeverk:"LANDKODER",navn:"UOPPGITT/UKJENT"},{kode:"YEM",kodeverk:"LANDKODER",navn:"JEMEN"},{kode:"MAF",kodeverk:"LANDKODER",navn:"SAINT MARTIN"},{kode:"NRU",kodeverk:"LANDKODER",navn:"NAURU"},{kode:"TKL",kodeverk:"LANDKODER",navn:"TOKELAU"},{kode:"AND",kodeverk:"LANDKODER",navn:"ANDORRA"},{kode:"SJM",kodeverk:"LANDKODER",navn:"SVALBARD OG JAN MAYEN"},{kode:"BEN",kodeverk:"LANDKODER",navn:"BENIN"},{kode:"CHL",kodeverk:"LANDKODER",navn:"CHILE"},{kode:"SCG",kodeverk:"LANDKODER",navn:"SERBIA OG MONTENEGRO"},{kode:"KIR",kodeverk:"LANDKODER",navn:"KIRIBATI"},{kode:"VGB",kodeverk:"LANDKODER",navn:"JOMFRUØYENE BRIT."},{kode:"MNE",kodeverk:"LANDKODER",navn:"MONTENEGRO"},{kode:"MLI",kodeverk:"LANDKODER",navn:"MALI"},{kode:"REU",kodeverk:"LANDKODER",navn:"REUNION"},{kode:"BWA",kodeverk:"LANDKODER",navn:"BOTSWANA"},{kode:"PCN",kodeverk:"LANDKODER",navn:"PITCAIRN"},{kode:"UMI",kodeverk:"LANDKODER",navn:"MINDRE STILLEHAVSØYER"},{kode:"TUV",kodeverk:"LANDKODER",navn:"TUVALU"},{kode:"LKA",kodeverk:"LANDKODER",navn:"SRI LANKA"},{kode:"BDI",kodeverk:"LANDKODER",navn:"BURUNDI"},{kode:"AGO",kodeverk:"LANDKODER",navn:"ANGOLA"},{kode:"MRT",kodeverk:"LANDKODER",navn:"MAURITANIA"},{kode:"MUS",kodeverk:"LANDKODER",navn:"MAURITIUS"},{kode:"CYP",kodeverk:"LANDKODER",navn:"KYPROS"},{kode:"SYC",kodeverk:"LANDKODER",navn:"SEYCHELLENE"},{kode:"COK",kodeverk:"LANDKODER",navn:"COOKØYENE"},{kode:"VEN",kodeverk:"LANDKODER",navn:"VENEZUELA"},{kode:"ESH",kodeverk:"LANDKODER",navn:"VEST-SAHARA"},{kode:"SUN",kodeverk:"LANDKODER",navn:"SOVJETUNIONEN"},{kode:"EST",kodeverk:"LANDKODER",navn:"ESTLAND"},{kode:"CIV",kodeverk:"LANDKODER",navn:"ELFENBEINSKYSTEN"},{kode:"HUN",kodeverk:"LANDKODER",navn:"UNGARN"},{kode:"MLT",kodeverk:"LANDKODER",navn:"MALTA"},{kode:"COM",kodeverk:"LANDKODER",navn:"KOMORENE"},{kode:"NPL",kodeverk:"LANDKODER",navn:"NEPAL"},{kode:"CRI",kodeverk:"LANDKODER",navn:"COSTA RICA"},{kode:"LVA",kodeverk:"LANDKODER",navn:"LATVIA"},{kode:"GUY",kodeverk:"LANDKODER",navn:"GUYANA"},{kode:"ALB",kodeverk:"LANDKODER",navn:"ALBANIA"},{kode:"NLD",kodeverk:"LANDKODER",navn:"NEDERLAND"},{kode:"AIA",kodeverk:"LANDKODER",navn:"ANGUILLA"},{kode:"BRN",kodeverk:"LANDKODER",navn:"BRUNEI"},{kode:"LCA",kodeverk:"LANDKODER",navn:"ST. LUCIA"},{kode:"NOR",kodeverk:"LANDKODER",navn:"NORGE"},{kode:"NIU",kodeverk:"LANDKODER",navn:"NIUE"},{kode:"DOM",kodeverk:"LANDKODER",navn:"DEN DOMINIKANSKE REP"},{kode:"GGY",kodeverk:"LANDKODER",navn:"GUERNSEY"},{kode:"BTN",kodeverk:"LANDKODER",navn:"BHUTAN"},{kode:"YUG",kodeverk:"LANDKODER",navn:"JUGOSLAVIA"},{kode:"MSR",kodeverk:"LANDKODER",navn:"MONSERRAT"},{kode:"JEY",kodeverk:"LANDKODER",navn:"JERSEY"},{kode:"TCA",kodeverk:"LANDKODER",navn:"TURKS/CAICOSØYENE"},{kode:"GRL",kodeverk:"LANDKODER",navn:"GRØNLAND"},{kode:"CAN",kodeverk:"LANDKODER",navn:"CANADA"},{kode:"TJK",kodeverk:"LANDKODER",navn:"TADZJIKISTAN"},{kode:"LUX",kodeverk:"LANDKODER",navn:"LUXEMBOURG"},{kode:"KHM",kodeverk:"LANDKODER",navn:"KAMBODSJA"},{kode:"TCD",kodeverk:"LANDKODER",navn:"TSJAD"},{kode:"FIN",kodeverk:"LANDKODER",navn:"FINLAND"},{kode:"AUT",kodeverk:"LANDKODER",navn:"ØSTERRIKE"},{kode:"BFA",kodeverk:"LANDKODER",navn:"BURKINA FASO"},{kode:"CZE",kodeverk:"LANDKODER",navn:"DEN TSJEKKISKE REP."},{kode:"XXX",kodeverk:"LANDKODER",navn:"STATSLØS"},{kode:"CYM",kodeverk:"LANDKODER",navn:"CAYMANØYENE"},{kode:"POL",kodeverk:"LANDKODER",navn:"POLEN"},{kode:"VNM",kodeverk:"LANDKODER",navn:"VIETNAM"},{kode:"BRB",kodeverk:"LANDKODER",navn:"BARBADOS"},{kode:"SVK",kodeverk:"LANDKODER",navn:"SLOVAKIA"},{kode:"AUS",kodeverk:"LANDKODER",navn:"AUSTRALIA"},{kode:"PRY",kodeverk:"LANDKODER",navn:"PARAGUAY"},{kode:"ATG",kodeverk:"LANDKODER",navn:"ANTIGUA OG BARBUDA"},{kode:"TKM",kodeverk:"LANDKODER",navn:"TURKMENISTAN"},{kode:"LTU",kodeverk:"LANDKODER",navn:"LITAUEN"},{kode:"SAU",kodeverk:"LANDKODER",navn:"SAUDI-ARABIA"},{kode:"CAF",kodeverk:"LANDKODER",navn:"SENTRALAFRIKA. REP."},{kode:"TON",kodeverk:"LANDKODER",navn:"TONGA"},{kode:"CMR",kodeverk:"LANDKODER",navn:"KAMERUN"},{kode:"SDN",kodeverk:"LANDKODER",navn:"SUDAN"},{kode:"PAN",kodeverk:"LANDKODER",navn:"PANAMA"},{kode:"LAO",kodeverk:"LANDKODER",navn:"LAOS"},{kode:"JOR",kodeverk:"LANDKODER",navn:"JORDAN"},{kode:"MAC",kodeverk:"LANDKODER",navn:"MACAO"},{kode:"GIB",kodeverk:"LANDKODER",navn:"GIBRALTAR"},{kode:"XUK",kodeverk:"LANDKODER",navn:"UKJENT"},{kode:"MNG",kodeverk:"LANDKODER",navn:"MONGOLIA"},{kode:"TUN",kodeverk:"LANDKODER",navn:"TUNISIA"},{kode:"UZB",kodeverk:"LANDKODER",navn:"UZBEKISTAN"},{kode:"KWT",kodeverk:"LANDKODER",navn:"KUWAIT"},{kode:"ERI",kodeverk:"LANDKODER",navn:"ERITREA"},{kode:"TGO",kodeverk:"LANDKODER",navn:"TOGO"},{kode:"VUT",kodeverk:"LANDKODER",navn:"VANUATU"},{kode:"GIN",kodeverk:"LANDKODER",navn:"GUINEA"},{kode:"SOM",kodeverk:"LANDKODER",navn:"SOMALIA"},{kode:"KOR",kodeverk:"LANDKODER",navn:"SØR-KOREA"},{kode:"PHL",kodeverk:"LANDKODER",navn:"FILIPPINENE"},{kode:"BHR",kodeverk:"LANDKODER",navn:"BAHRAIN"},{kode:"DJI",kodeverk:"LANDKODER",navn:"DJIBOUTI"},{kode:"ESP",kodeverk:"LANDKODER",navn:"SPANIA"},{kode:"GTM",kodeverk:"LANDKODER",navn:"GUATEMALA"},{kode:"GAB",kodeverk:"LANDKODER",navn:"GABON"},{kode:"KNA",kodeverk:"LANDKODER",navn:"ST. KITTS OG NEVIS"},{kode:"AFG",kodeverk:"LANDKODER",navn:"AFGHANISTAN"},{kode:"MDA",kodeverk:"LANDKODER",navn:"MOLDOVA"},{kode:"PER",kodeverk:"LANDKODER",navn:"PERU"},{kode:"ZMB",kodeverk:"LANDKODER",navn:"ZAMBIA"},{kode:"QAT",kodeverk:"LANDKODER",navn:"QATAR"},{kode:"LBR",kodeverk:"LANDKODER",navn:"LIBERIA"},{kode:"CUW",kodeverk:"LANDKODER",navn:"CURACAO"},{kode:"BLM",kodeverk:"LANDKODER",navn:"SAINT BARTHELEMY"},{kode:"BLZ",kodeverk:"LANDKODER",navn:"BELIZE"},{kode:"TZA",kodeverk:"LANDKODER",navn:"TANZANIA"},{kode:"ISL",kodeverk:"LANDKODER",navn:"ISLAND"},{kode:"TLS",kodeverk:"LANDKODER",navn:"ØST-TIMOR"},{kode:"GRD",kodeverk:"LANDKODER",navn:"GRENADA"},{kode:"ARG",kodeverk:"LANDKODER",navn:"ARGENTINA"},{kode:"COG",kodeverk:"LANDKODER",navn:"KONGO, REPUBLIKKEN"},{kode:"MOZ",kodeverk:"LANDKODER",navn:"MOSAMBIK"},{kode:"SEN",kodeverk:"LANDKODER",navn:"SENEGAL"},{kode:"BGD",kodeverk:"LANDKODER",navn:"BANGLADESH"},{kode:"IRQ",kodeverk:"LANDKODER",navn:"IRAK"},{kode:"SLV",kodeverk:"LANDKODER",navn:"EL SALVADOR"},{kode:"TUR",kodeverk:"LANDKODER",navn:"TYRKIA"},{kode:"DDR",kodeverk:"LANDKODER",navn:"TYSKLAND (ØST)"},{kode:"LBN",kodeverk:"LANDKODER",navn:"LIBANON"},{kode:"GBR",kodeverk:"LANDKODER",navn:"STORBRITANNIA"},{kode:"COL",kodeverk:"LANDKODER",navn:"COLOMBIA"},{kode:"CXR",kodeverk:"LANDKODER",navn:"CHRISTMASØYA"},{kode:"PNG",kodeverk:"LANDKODER",navn:"PAPUA NY-GUINEA"},{kode:"NFK",kodeverk:"LANDKODER",navn:"NORFOLKØYA"},{kode:"HND",kodeverk:"LANDKODER",navn:"HONDURAS"},{kode:"BOL",kodeverk:"LANDKODER",navn:"BOLIVIA"},{kode:"RUS",kodeverk:"LANDKODER",navn:"RUSSLAND"},{kode:"DMA",kodeverk:"LANDKODER",navn:"DOMINICA"},{kode:"AZE",kodeverk:"LANDKODER",navn:"AZERBAJDZJAN"},{kode:"BLR",kodeverk:"LANDKODER",navn:"HVITERUSSLAND"},{kode:"CCK",kodeverk:"LANDKODER",navn:"KOKOSØYENE"},{kode:"GEO",kodeverk:"LANDKODER",navn:"GEORGIA"},{kode:"GUM",kodeverk:"LANDKODER",navn:"GUAM"},{kode:"JPN",kodeverk:"LANDKODER",navn:"JAPAN"},{kode:"FRA",kodeverk:"LANDKODER",navn:"FRANKRIKE"},{kode:"KEN",kodeverk:"LANDKODER",navn:"KENYA"},{kode:"MAR",kodeverk:"LANDKODER",navn:"MAROKKO"}],BehandlingType:[{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"}],InnsynResultatType:[{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"},{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"}],MedlemskapType:[{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"},{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"}],PersonstatusType:[{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet"},{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Opphørt"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt (f.reg)"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Ikke bosatt (f.reg)"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utflyttet"}],UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"FRI",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"}],BehandlingStatus:[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"}],RelasjonsRolleType:[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"ANPA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Annen part fra søknad"},{kode:"EKTE",kodeverk:"RELASJONSROLLE_TYPE",navn:"Ektefelle"},{kode:"REPA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Registrert partner"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"BARN",kodeverk:"RELASJONSROLLE_TYPE",navn:"Barn"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],VirksomhetType:[{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],MedlemskapDekningType:[{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"},{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"}],HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"}],Avslagsårsak:{FP_VK_3:[{kode:"1007",kodeverk:"AVSLAGSARSAK",navn:"Søkt for sent",lovHjemmel:null}],FP_VK_4:[{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'},{kode:"1006",kodeverk:"AVSLAGSARSAK",navn:"Mann adopterer ikke alene",lovHjemmel:null},{kode:"1005",kodeverk:"AVSLAGSARSAK",navn:"Ektefelles/samboers barn",lovHjemmel:null},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'}],FP_VK_1:[{kode:"1002",kodeverk:"AVSLAGSARSAK",navn:"Søker er medmor",lovHjemmel:null},{kode:"1003",kodeverk:"AVSLAGSARSAK",navn:"Søker er far",lovHjemmel:null},{kode:"1001",kodeverk:"AVSLAGSARSAK",navn:"Søkt for tidlig",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1026",kodeverk:"AVSLAGSARSAK",navn:"Fødselsdato ikke oppgitt eller registrert",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1031",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}'}],FP_VK_2:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utflyttet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],"-":[],FP_VK_41:[{kode:"1041",kodeverk:"AVSLAGSARSAK",navn:"For lavt brutto beregningsgrunnlag",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_41", "lovreferanse": "14-7"}]}]}'}],FP_VK_21:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_11:[{kode:"1027",kodeverk:"AVSLAGSARSAK",navn:"Ingen barn dokumentert på far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1029",kodeverk:"AVSLAGSARSAK",navn:"Bruker er ikke registrert som far/medmor til barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1028",kodeverk:"AVSLAGSARSAK",navn:"Mor fyller ikke vilkåret for sykdom",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'}],FP_VK_2_F:[{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utflyttet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1052",kodeverk:"AVSLAGSARSAK",navn:"Innflyttet mindre enn 12 måneder før termin/omsorgsovertakelse",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK_2_F", "lovreferanse": "14-17 5. ledd"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],FP_VK_33:[{kode:"1017",kodeverk:"AVSLAGSARSAK",navn:"Omsorgsovertakelse etter 56 uker",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1018",kodeverk:"AVSLAGSARSAK",navn:"Ikke foreldreansvar alene etter barnelova",lovHjemmel:null},{kode:"1016",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null}],FP_VK_34:[{kode:"1019",kodeverk:"AVSLAGSARSAK",navn:"Manglende dokumentasjon",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_34", "lovreferanse": "21-3"}]}]}'}],FP_VK_23:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_8:[{kode:"1014",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke foreldreansvar",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1015",kodeverk:"AVSLAGSARSAK",navn:"Søker har hatt vanlig samvær med barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1013",kodeverk:"AVSLAGSARSAK",navn:"Barn ikke under 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'}],SVP_VK_1:[{kode:"1061",kodeverk:"AVSLAGSARSAK",navn:"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 3. ledd"}]}]}'},{kode:"1062",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker har mottatt sykepenger",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1060",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker er ikke gravid kvinne",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1064",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1065",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1063",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1066",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'}],FP_VK_16:[{kode:"1051",kodeverk:"AVSLAGSARSAK",navn:"Stebarnsadopsjon ikke flere dager igjen",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16", "lovreferanse": "14-5"}]}]}'},{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_5:[{kode:"1012",kodeverk:"AVSLAGSARSAK",navn:"Far har ikke omsorg for barnet",lovHjemmel:null},{kode:"1008",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1009",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1010",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død ved fødsel/omsorg",lovHjemmel:null}],FP_VK_2_L:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utflyttet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}]},OpptjeningAktivitetType:[{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"}],PermisjonsbeskrivelseType:[{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"}],OppholdstillatelseType:[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],MedlemskapManuellVurderingType:[{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],ManuellBehandlingÅrsak:[{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5032",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder utbetalingsgrad og trekkdager når mor er i delvis arbeid (under 75% arbeidsprosent)"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"}],MorsAktivitet:[{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"}],NaturalYtelseType:[{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],PeriodeResultatÅrsak:[{kode:"4005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjuende ledd: Ikke sammenhengende perioder",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ferie/arbeid innenfor de første 6 ukene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4056",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4076",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4103",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4116",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4063",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4054",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4040",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4041",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2016",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4112",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Barnets innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4053",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4069",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2015",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-09-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4110",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2010",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-13: Innvilget fellesperiode til far",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-13"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4055",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2004",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2006",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger før fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2011",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Mor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13,14-16"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4088",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4100",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 andre ledd: Uttak før omsorgsovertakelse",lovHjemmel:"",sortering:"14-10-2",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4097",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Adopsjonsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4074",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,21-3"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4117",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4092",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Avslag overføring - har ikke aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ikke stønadsdager igjen på stønadskonto",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4086",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-11"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4075",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4098",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Foreldreansvarsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2024",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4106",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4085",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Det er ikke samtykke mellom partene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2028",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4060",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Innvilget fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4095",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR"]},{kode:"2027",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4105",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4062",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12, jf. §14-16: Gradering av kvote/overført kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4051",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4058",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2018",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4059",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13, 14-9"}}}',sortering:"14-13-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2026",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2036",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4111",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Barnet er over 3 år",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4102",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§22-13 tredje ledd: Brudd på søknadsfrist",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "22-13"}}}',sortering:"22-13-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4068",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2019",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4082",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4050",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Far/medmor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Innvilget uttak av kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-16"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4073",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4008",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4072",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjuende ledd: Barnet er dødt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4070",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Avslag utsettelse før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4057",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4052",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4081",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2017",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4064",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15: Innvilget foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4077",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10 a"}}}',sortering:"14-10-0-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ikke lovbestemt ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-9"}}}',sortering:"14-11-0",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4093",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16: Avslag gradering - søker er ikke i arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4089",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4066",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4115",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2014",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4104",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Stønadsperiode for nytt barn",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4065",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4087",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-2: Opphør medlemskap",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-2"}}}',sortering:"14-02",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Ikke heltidsarbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4099",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-6: Opptjeningsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-6"}}}',sortering:"14-06",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4061",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4067",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2021",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4071",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Bruker er død",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4107",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4096",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Fødselsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4084",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]}],ForeldreType:[{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"},{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"}],OppgaveType:[{kode:"VUR_KONSEKVENS",kodeverk:"OPPGAVE_TYPE",navn:"Vurder konsekvens for ytelse"},{kode:"VUR_DOKUMENT",kodeverk:"OPPGAVE_TYPE",navn:"Vurder dokument"}]},DI=()=>(...e)=>(Ei("button-click")(...e),Promise.resolve()),PI={uuid:"1223-2323-2323-22332",versjon:1,språkkode:"NB",type:iv.FORSTEGANGSSOKNAD,status:av.BEHANDLING_UTREDES,behandlingPåVent:!1,behandlingHenlagt:!1},FI={saksnummer:"1234567",fagsakYtelseType:sv.FORELDREPENGER,bruker:{navn:"Kari Nordmann"},annenPart:{navn:"Ola Nordmann"},relasjonsRolleType:To.MOR,annenpartBehandling:{relasjonsRolleType:To.FAR}},Cv=(e,i)=>{const{fagsak:t,behandling:a,aksjonspunkterForPanel:s,isReadOnly:l,submitCallback:d,alleMerknaderFraBeslutter:g}=i.args,v=s??[];return G.jsx(nv,{fagsak:t??FI,behandling:a??PI,aksjonspunkterForPanel:v,harÅpneAksjonspunkter:v.some(E=>E.status===tv.OPPRETTET),alleKodeverk:KI,alleMerknaderFraBeslutter:g??{},isReadOnly:l??!1,submitCallback:d??DI(),children:G.jsx(e,{})})};Cv.__docgenInfo={description:"",methods:[],displayName:"withPanelData"};const Qs={innsendingstidspunkt:"2024-08-08T00:00:00",kildeSystem:"Altinn",aktiveNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",arbeidsgiverIdent:"1",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},ZI={title:"fakta/fakta-inntektsmelding",component:wo,decorators:[Cv],render:e=>G.jsx(wo,{...e})},qt={args:{alleBehandlinger:[{uuid:"UUID1",type:"BT-002",opprettet:"2024-07-13",avsluttet:"2024-08-13"},{uuid:"UUID2",type:"BT-003",opprettet:"2024-07-14",avsluttet:"2024-08-14"},{uuid:"UUID3",type:"BT-004",opprettet:"2024-07-15",avsluttet:"2024-08-15"}],arbeidsgiverOpplysningerPerId:{1:{navn:"Rema 1000"},2:{navn:"Kiwi"},3:{navn:"Meny"}},behandling:{uuid:"UUID2"},inntektsmeldinger:[{...Qs,tilknyttedeBehandlingIder:["UUID1"],inntektPrMnd:10000.5,innsendingstidspunkt:"2024-07-20T00:00:00",startDatoPermisjon:"2024-10-10",refusjonPrMnd:void 0,journalpostId:"1",refusjonsperioder:[{refusjonsbeløp:{verdi:5e3},indexKey:"1",fom:"2024-01-10"},{refusjonsbeløp:{verdi:3e3},indexKey:"2",fom:"2024-01-09"}]},{...Qs,tilknyttedeBehandlingIder:["UUID1","UUID2"],inntektPrMnd:2e4,innsendingstidspunkt:"2024-08-01T00:00:00",kildeSystem:"FS22",refusjonPrMnd:void 0,arbeidsgiverIdent:"2",journalpostId:"2"},{...Qs,tilknyttedeBehandlingIder:[],inntektPrMnd:3e4,innsendingstidspunkt:"2024-09-10T00:00:00",innsendingsårsak:"ENDRING",kildeSystem:"NAV_NO",startDatoPermisjon:"2024-11-11",arbeidsgiverIdent:"3",journalpostId:"3",aktiveNaturalytelser:[{periode:{fomDato:"2024-01-09",tomDato:"2024-10-09"},type:ho.ELEKTRISK_KOMMUNIKASJON,beloepPerMnd:{verdi:999},indexKey:"1"},{periode:{fomDato:"2024-01-11",tomDato:"2024-10-11"},type:ho.LOSJI,beloepPerMnd:{verdi:10},indexKey:"2"}]}]}},Qa={args:{...qt.args,inntektsmeldinger:[]}};var sk,ok,lk;qt.parameters={...qt.parameters,docs:{...(sk=qt.parameters)==null?void 0:sk.docs,source:{originalSource:`{
  args: {
    alleBehandlinger: [{
      uuid: 'UUID1',
      type: 'BT-002',
      opprettet: '2024-07-13',
      avsluttet: '2024-08-13'
    }, {
      uuid: 'UUID2',
      type: 'BT-003',
      opprettet: '2024-07-14',
      avsluttet: '2024-08-14'
    }, {
      uuid: 'UUID3',
      type: 'BT-004',
      opprettet: '2024-07-15',
      avsluttet: '2024-08-15'
    }] as BehandlingAppKontekst[],
    arbeidsgiverOpplysningerPerId: {
      ['1']: {
        navn: 'Rema 1000'
      } as ArbeidsgiverOpplysninger,
      ['2']: {
        navn: 'Kiwi'
      } as ArbeidsgiverOpplysninger,
      ['3']: {
        navn: 'Meny'
      } as ArbeidsgiverOpplysninger
    },
    behandling: {
      uuid: 'UUID2'
    } as Behandling,
    inntektsmeldinger: [{
      ...inntektsmeldingmal,
      tilknyttedeBehandlingIder: ['UUID1'],
      inntektPrMnd: 10000.5,
      innsendingstidspunkt: '2024-07-20T00:00:00',
      startDatoPermisjon: '2024-10-10',
      refusjonPrMnd: undefined,
      journalpostId: '1',
      refusjonsperioder: [{
        refusjonsbeløp: {
          verdi: 5000
        },
        indexKey: '1',
        fom: '2024-01-10'
      }, {
        refusjonsbeløp: {
          verdi: 3000
        },
        indexKey: '2',
        fom: '2024-01-09'
      }]
    }, {
      ...inntektsmeldingmal,
      tilknyttedeBehandlingIder: ['UUID1', 'UUID2'],
      inntektPrMnd: 20000,
      innsendingstidspunkt: '2024-08-01T00:00:00',
      kildeSystem: 'FS22',
      refusjonPrMnd: undefined,
      arbeidsgiverIdent: '2',
      journalpostId: '2'
    }, {
      ...inntektsmeldingmal,
      tilknyttedeBehandlingIder: [],
      inntektPrMnd: 30000,
      innsendingstidspunkt: '2024-09-10T00:00:00',
      innsendingsårsak: 'ENDRING' as const,
      kildeSystem: 'NAV_NO',
      startDatoPermisjon: '2024-11-11',
      arbeidsgiverIdent: '3',
      journalpostId: '3',
      aktiveNaturalytelser: [{
        periode: {
          fomDato: '2024-01-09',
          tomDato: '2024-10-09'
        },
        type: NaturalYtelseType.ELEKTRISK_KOMMUNIKASJON,
        beloepPerMnd: {
          verdi: 999
        },
        indexKey: '1'
      }, {
        periode: {
          fomDato: '2024-01-11',
          tomDato: '2024-10-11'
        },
        type: NaturalYtelseType.LOSJI,
        beloepPerMnd: {
          verdi: 10
        },
        indexKey: '2'
      }]
    }]
  }
}`,...(lk=(ok=qt.parameters)==null?void 0:ok.docs)==null?void 0:lk.source}}};var uk,dk,gk;Qa.parameters={...Qa.parameters,docs:{...(uk=Qa.parameters)==null?void 0:uk.docs,source:{originalSource:`{
  args: {
    ...InntektsmeldingDefault.args,
    inntektsmeldinger: []
  }
}`,...(gk=(dk=Qa.parameters)==null?void 0:dk.docs)==null?void 0:gk.source}}};const QI=["InntektsmeldingDefault","IngenInntektsmeldinger"];export{Qa as IngenInntektsmeldinger,qt as InntektsmeldingDefault,QI as __namedExportsOrder,ZI as default};
