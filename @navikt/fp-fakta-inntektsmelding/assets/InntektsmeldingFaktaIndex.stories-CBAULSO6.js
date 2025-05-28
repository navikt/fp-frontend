import{j as B}from"./jsx-runtime-D_zvdyIk.js";import{r as F,R as J}from"./index-mMUbb89k.js";import{d as Kr}from"./dayjs.min-Cke173X9.js";import{c as Ja,g as KA}from"./_commonjsHelpers-Cpj98o6Y.js";import{e as OA}from"./entry-preview-Cdhet56g.js";import"./entry-preview-docs-DtNjo1hO.js";import{v as LA}from"./v4-CtRu48qb.js";import"./iframe-jZYhIcnu.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./index-CXQShRbs.js";var eo=function(e,i){return eo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])},eo(e,i)};function Yn(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");eo(e,i);function t(){this.constructor=e}e.prototype=i===null?Object.create(i):(t.prototype=i.prototype,new t)}var ie=function(){return ie=Object.assign||function(i){for(var t,a=1,s=arguments.length;a<s;a++){t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(i[l]=t[l])}return i},ie.apply(this,arguments)};function lt(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t}function rr(e,i,t){if(t||arguments.length===2)for(var a=0,s=i.length,l;a<s;a++)(l||!(a in i))&&(l||(l=Array.prototype.slice.call(i,0,a)),l[a]=i[a]);return e.concat(l||Array.prototype.slice.call(i))}function Zn(e,i){var t=i&&i.cache?i.cache:GA,a=i&&i.serializer?i.serializer:BA,s=i&&i.strategy?i.strategy:FA;return s(e,{cache:t,serializer:a})}function DA(e){return e==null||typeof e=="number"||typeof e=="boolean"}function PA(e,i,t,a){var s=DA(a)?a:t(a),l=i.get(s);return typeof l>"u"&&(l=e.call(this,a),i.set(s,l)),l}function gg(e,i,t){var a=Array.prototype.slice.call(arguments,3),s=t(a),l=i.get(s);return typeof l>"u"&&(l=e.apply(this,a),i.set(s,l)),l}function vg(e,i,t,a,s){return t.bind(i,e,a,s)}function FA(e,i){var t=e.length===1?PA:gg;return vg(e,this,t,i.cache.create(),i.serializer)}function MA(e,i){return vg(e,this,gg,i.cache.create(),i.serializer)}var BA=function(){return JSON.stringify(arguments)},VA=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(i){return this.cache[i]},e.prototype.set=function(i,t){this.cache[i]=t},e}(),GA={create:function(){return new VA}},Qn={variadic:MA},ye;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(ye||(ye={}));var Be;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Be||(Be={}));var ut;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(ut||(ut={}));function bd(e){return e.type===Be.literal}function jA(e){return e.type===Be.argument}function Eg(e){return e.type===Be.number}function mg(e){return e.type===Be.date}function fg(e){return e.type===Be.time}function pg(e){return e.type===Be.select}function Tg(e){return e.type===Be.plural}function wA(e){return e.type===Be.pound}function hg(e){return e.type===Be.tag}function yg(e){return!!(e&&typeof e=="object"&&e.type===ut.number)}function no(e){return!!(e&&typeof e=="object"&&e.type===ut.dateTime)}var Ag=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,UA=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function HA(e){var i={};return e.replace(UA,function(t){var a=t.length;switch(t[0]){case"G":i.era=a===4?"long":a===5?"narrow":"short";break;case"y":i.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=a===4?"long":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][a-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][a-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][a-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][a-1];break;case"s":i.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var qA=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function xA(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(qA).filter(function(A){return A.length>0}),t=[],a=0,s=i;a<s.length;a++){var l=s[a],d=l.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var k=d[0],v=d.slice(1),E=0,m=v;E<m.length;E++){var h=m[E];if(h.length===0)throw new Error("Invalid number skeleton")}t.push({stem:k,options:v})}return t}function YA(e){return e.replace(/^(.*?)-/,"")}var Id=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,cg=/^(@+)?(\+|#+)?[rs]?$/g,CA=/(\*)(0+)|(#+)(0+)|(0+)/g,Rg=/^(0+)$/;function Kd(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(cg,function(t,a,s){return typeof s!="string"?(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length):s==="+"?i.minimumSignificantDigits=a.length:a[0]==="#"?i.maximumSignificantDigits=a.length:(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length+(typeof s=="string"?s.length:0)),""}),i}function _g(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function $A(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var t=e.slice(0,2);if(t==="+!"?(i.signDisplay="always",e=e.slice(2)):t==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!Rg.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function Od(e){var i={},t=_g(e);return t||i}function JA(e){for(var i={},t=0,a=e;t<a.length;t++){var s=a[t];switch(s.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=s.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=YA(s.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=ie(ie(ie({},i),{notation:"scientific"}),s.options.reduce(function(v,E){return ie(ie({},v),Od(E))},{}));continue;case"engineering":i=ie(ie(ie({},i),{notation:"engineering"}),s.options.reduce(function(v,E){return ie(ie({},v),Od(E))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(CA,function(v,E,m,h,A,L){if(E)i.minimumIntegerDigits=m.length;else{if(h&&A)throw new Error("We currently do not support maximum integer digits");if(L)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Rg.test(s.stem)){i.minimumIntegerDigits=s.stem.length;continue}if(Id.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(Id,function(v,E,m,h,A,L){return m==="*"?i.minimumFractionDigits=E.length:h&&h[0]==="#"?i.maximumFractionDigits=h.length:A&&L?(i.minimumFractionDigits=A.length,i.maximumFractionDigits=A.length+L.length):(i.minimumFractionDigits=E.length,i.maximumFractionDigits=E.length),""});var l=s.options[0];l==="w"?i=ie(ie({},i),{trailingZeroDisplay:"stripIfInteger"}):l&&(i=ie(ie({},i),Kd(l)));continue}if(cg.test(s.stem)){i=ie(ie({},i),Kd(s.stem));continue}var d=_g(s.stem);d&&(i=ie(ie({},i),d));var k=$A(s.stem);k&&(i=ie(ie({},i),k))}return i}var Wa={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function WA(e,i){for(var t="",a=0;a<e.length;a++){var s=e.charAt(a);if(s==="j"){for(var l=0;a+1<e.length&&e.charAt(a+1)===s;)l++,a++;var d=1+(l&1),k=l<2?1:3+(l>>1),v="a",E=zA(i);for((E=="H"||E=="k")&&(k=0);k-- >0;)t+=v;for(;d-- >0;)t=E+t}else s==="J"?t+="H":t+=s}return t}function zA(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=e.language,a;t!=="root"&&(a=e.maximize().region);var s=Wa[a||""]||Wa[t||""]||Wa["".concat(t,"-001")]||Wa["001"];return s[0]}var Bs,XA=new RegExp("^".concat(Ag.source,"*")),ZA=new RegExp("".concat(Ag.source,"*$"));function ce(e,i){return{start:e,end:i}}var QA=!!String.prototype.startsWith&&"_a".startsWith("a",1),ec=!!String.fromCodePoint,nc=!!Object.fromEntries,rc=!!String.prototype.codePointAt,tc=!!String.prototype.trimStart,ac=!!String.prototype.trimEnd,ic=!!Number.isSafeInteger,sc=ic?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},ro=!0;try{var oc=Sg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ro=((Bs=oc.exec("a"))===null||Bs===void 0?void 0:Bs[0])==="a"}catch{ro=!1}var Ld=QA?function(i,t,a){return i.startsWith(t,a)}:function(i,t,a){return i.slice(a,a+t.length)===t},to=ec?String.fromCodePoint:function(){for(var i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];for(var a="",s=i.length,l=0,d;s>l;){if(d=i[l++],d>1114111)throw RangeError(d+" is not a valid code point");a+=d<65536?String.fromCharCode(d):String.fromCharCode(((d-=65536)>>10)+55296,d%1024+56320)}return a},Dd=nc?Object.fromEntries:function(i){for(var t={},a=0,s=i;a<s.length;a++){var l=s[a],d=l[0],k=l[1];t[d]=k}return t},Ng=rc?function(i,t){return i.codePointAt(t)}:function(i,t){var a=i.length;if(!(t<0||t>=a)){var s=i.charCodeAt(t),l;return s<55296||s>56319||t+1===a||(l=i.charCodeAt(t+1))<56320||l>57343?s:(s-55296<<10)+(l-56320)+65536}},lc=tc?function(i){return i.trimStart()}:function(i){return i.replace(XA,"")},uc=ac?function(i){return i.trimEnd()}:function(i){return i.replace(ZA,"")};function Sg(e,i){return new RegExp(e,i)}var ao;if(ro){var Pd=Sg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ao=function(i,t){var a;Pd.lastIndex=t;var s=Pd.exec(i);return(a=s[1])!==null&&a!==void 0?a:""}}else ao=function(i,t){for(var a=[];;){var s=Ng(i,t);if(s===void 0||bg(s)||vc(s))break;a.push(s),t+=s>=65536?2:1}return to.apply(void 0,a)};var dc=function(){function e(i,t){t===void 0&&(t={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,t,a){for(var s=[];!this.isEOF();){var l=this.char();if(l===123){var d=this.parseArgument(i,a);if(d.err)return d;s.push(d.val)}else{if(l===125&&i>0)break;if(l===35&&(t==="plural"||t==="selectordinal")){var k=this.clonePosition();this.bump(),s.push({type:Be.pound,location:ce(k,this.clonePosition())})}else if(l===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(ye.UNMATCHED_CLOSING_TAG,ce(this.clonePosition(),this.clonePosition()))}else if(l===60&&!this.ignoreTag&&io(this.peek()||0)){var d=this.parseTag(i,t);if(d.err)return d;s.push(d.val)}else{var d=this.parseLiteral(i,t);if(d.err)return d;s.push(d.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(i,t){var a=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Be.literal,value:"<".concat(s,"/>"),location:ce(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var l=this.parseMessage(i+1,t,!0);if(l.err)return l;var d=l.val,k=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!io(this.char()))return this.error(ye.INVALID_TAG,ce(k,this.clonePosition()));var v=this.clonePosition(),E=this.parseTagName();return s!==E?this.error(ye.UNMATCHED_CLOSING_TAG,ce(v,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Be.tag,value:s,children:d,location:ce(a,this.clonePosition())},err:null}:this.error(ye.INVALID_TAG,ce(k,this.clonePosition())))}else return this.error(ye.UNCLOSED_TAG,ce(a,this.clonePosition()))}else return this.error(ye.INVALID_TAG,ce(a,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&gc(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,t){for(var a=this.clonePosition(),s="";;){var l=this.tryParseQuote(t);if(l){s+=l;continue}var d=this.tryParseUnquoted(i,t);if(d){s+=d;continue}var k=this.tryParseLeftAngleBracket();if(k){s+=k;continue}break}var v=ce(a,this.clonePosition());return{val:{type:Be.literal,value:s,location:v},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!kc(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(a);this.bump()}return to.apply(void 0,t)},e.prototype.tryParseUnquoted=function(i,t){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(t==="plural"||t==="selectordinal")||a===125&&i>0?null:(this.bump(),to(a))},e.prototype.parseArgument=function(i,t){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(ye.EXPECT_ARGUMENT_CLOSING_BRACE,ce(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(ye.EMPTY_ARGUMENT,ce(a,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(ye.MALFORMED_ARGUMENT,ce(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(ye.EXPECT_ARGUMENT_CLOSING_BRACE,ce(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Be.argument,value:s,location:ce(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(ye.EXPECT_ARGUMENT_CLOSING_BRACE,ce(a,this.clonePosition())):this.parseArgumentOptions(i,t,s,a);default:return this.error(ye.MALFORMED_ARGUMENT,ce(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),t=this.offset(),a=ao(this.message,t),s=t+a.length;this.bumpTo(s);var l=this.clonePosition(),d=ce(i,l);return{value:a,location:d}},e.prototype.parseArgumentOptions=function(i,t,a,s){var l,d=this.clonePosition(),k=this.parseIdentifierIfPossible().value,v=this.clonePosition();switch(k){case"":return this.error(ye.EXPECT_ARGUMENT_TYPE,ce(d,v));case"number":case"date":case"time":{this.bumpSpace();var E=null;if(this.bumpIf(",")){this.bumpSpace();var m=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var A=uc(h.val);if(A.length===0)return this.error(ye.EXPECT_ARGUMENT_STYLE,ce(this.clonePosition(),this.clonePosition()));var L=ce(m,this.clonePosition());E={style:A,styleLocation:L}}var P=this.tryParseArgumentClose(s);if(P.err)return P;var y=ce(s,this.clonePosition());if(E&&Ld(E==null?void 0:E.style,"::",0)){var _=lc(E.style.slice(2));if(k==="number"){var h=this.parseNumberSkeletonFromString(_,E.styleLocation);return h.err?h:{val:{type:Be.number,value:a,location:y,style:h.val},err:null}}else{if(_.length===0)return this.error(ye.EXPECT_DATE_TIME_SKELETON,y);var K=_;this.locale&&(K=WA(_,this.locale));var A={type:ut.dateTime,pattern:K,location:E.styleLocation,parsedOptions:this.shouldParseSkeletons?HA(K):{}},G=k==="date"?Be.date:Be.time;return{val:{type:G,value:a,location:y,style:A},err:null}}}return{val:{type:k==="number"?Be.number:k==="date"?Be.date:Be.time,value:a,location:y,style:(l=E==null?void 0:E.style)!==null&&l!==void 0?l:null},err:null}}case"plural":case"selectordinal":case"select":{var b=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(ye.EXPECT_SELECT_ARGUMENT_OPTIONS,ce(b,ie({},b)));this.bumpSpace();var X=this.parseIdentifierIfPossible(),c=0;if(k!=="select"&&X.value==="offset"){if(!this.bumpIf(":"))return this.error(ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ce(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ye.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),X=this.parseIdentifierIfPossible(),c=h.val}var M=this.tryParsePluralOrSelectOptions(i,k,t,X);if(M.err)return M;var P=this.tryParseArgumentClose(s);if(P.err)return P;var O=ce(s,this.clonePosition());return k==="select"?{val:{type:Be.select,value:a,options:Dd(M.val),location:O},err:null}:{val:{type:Be.plural,value:a,options:Dd(M.val),offset:c,pluralType:k==="plural"?"cardinal":"ordinal",location:O},err:null}}default:return this.error(ye.INVALID_ARGUMENT_TYPE,ce(d,v))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(ye.EXPECT_ARGUMENT_CLOSING_BRACE,ce(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,t=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(ye.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,ce(s,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,t){var a=[];try{a=xA(i)}catch{return this.error(ye.INVALID_NUMBER_SKELETON,t)}return{val:{type:ut.number,tokens:a,location:t,parsedOptions:this.shouldParseSkeletons?JA(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,t,a,s){for(var l,d=!1,k=[],v=new Set,E=s.value,m=s.location;;){if(E.length===0){var h=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var A=this.tryParseDecimalInteger(ye.EXPECT_PLURAL_ARGUMENT_SELECTOR,ye.INVALID_PLURAL_ARGUMENT_SELECTOR);if(A.err)return A;m=ce(h,this.clonePosition()),E=this.message.slice(h.offset,this.offset())}else break}if(v.has(E))return this.error(t==="select"?ye.DUPLICATE_SELECT_ARGUMENT_SELECTOR:ye.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,m);E==="other"&&(d=!0),this.bumpSpace();var L=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?ye.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:ye.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,ce(this.clonePosition(),this.clonePosition()));var P=this.parseMessage(i+1,t,a);if(P.err)return P;var y=this.tryParseArgumentClose(L);if(y.err)return y;k.push([E,{value:P.val,location:ce(L,this.clonePosition())}]),v.add(E),this.bumpSpace(),l=this.parseIdentifierIfPossible(),E=l.value,m=l.location}return k.length===0?this.error(t==="select"?ye.EXPECT_SELECT_ARGUMENT_SELECTOR:ye.EXPECT_PLURAL_ARGUMENT_SELECTOR,ce(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(ye.MISSING_OTHER_CLAUSE,ce(this.clonePosition(),this.clonePosition())):{val:k,err:null}},e.prototype.tryParseDecimalInteger=function(i,t){var a=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var l=!1,d=0;!this.isEOF();){var k=this.char();if(k>=48&&k<=57)l=!0,d=d*10+(k-48),this.bump();else break}var v=ce(s,this.clonePosition());return l?(d*=a,sc(d)?{val:d,err:null}:this.error(t,v)):this.error(i,v)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var t=Ng(this.message,i);if(t===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(i,t){return{val:null,err:{kind:i,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Ld(this.message,i,this.offset())){for(var t=0;t<i.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var t=this.offset(),a=this.message.indexOf(i,t);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var t=this.offset();if(t===i)break;if(t>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&bg(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),t=this.offset(),a=this.message.charCodeAt(t+(i>=65536?2:1));return a??null},e}();function io(e){return e>=97&&e<=122||e>=65&&e<=90}function kc(e){return io(e)||e===47}function gc(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function bg(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function vc(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function so(e){e.forEach(function(i){if(delete i.location,pg(i)||Tg(i))for(var t in i.options)delete i.options[t].location,so(i.options[t].value);else Eg(i)&&yg(i.style)||(mg(i)||fg(i))&&no(i.style)?delete i.style.location:hg(i)&&so(i.children)})}function Ec(e,i){i===void 0&&(i={}),i=ie({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var t=new dc(e,i).parse();if(t.err){var a=SyntaxError(ye[t.err.kind]);throw a.location=t.err.location,a.originalMessage=t.err.message,a}return i!=null&&i.captureLocation||so(t.val),t.val}var ar;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(ar||(ar={}));var Or=function(e){Yn(i,e);function i(t,a,s){var l=e.call(this,t)||this;return l.code=a,l.originalMessage=s,l}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),Fd=function(e){Yn(i,e);function i(t,a,s,l){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(a,'". Options are "').concat(Object.keys(s).join('", "'),'"'),ar.INVALID_VALUE,l)||this}return i}(Or),mc=function(e){Yn(i,e);function i(t,a,s){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(a),ar.INVALID_VALUE,s)||this}return i}(Or),fc=function(e){Yn(i,e);function i(t,a){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(a,'"'),ar.MISSING_VALUE,a)||this}return i}(Or),mn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(mn||(mn={}));function pc(e){return e.length<2?e:e.reduce(function(i,t){var a=i[i.length-1];return!a||a.type!==mn.literal||t.type!==mn.literal?i.push(t):a.value+=t.value,i},[])}function Ig(e){return typeof e=="function"}function ei(e,i,t,a,s,l,d){if(e.length===1&&bd(e[0]))return[{type:mn.literal,value:e[0].value}];for(var k=[],v=0,E=e;v<E.length;v++){var m=E[v];if(bd(m)){k.push({type:mn.literal,value:m.value});continue}if(wA(m)){typeof l=="number"&&k.push({type:mn.literal,value:t.getNumberFormat(i).format(l)});continue}var h=m.value;if(!(s&&h in s))throw new fc(h,d);var A=s[h];if(jA(m)){(!A||typeof A=="string"||typeof A=="number")&&(A=typeof A=="string"||typeof A=="number"?String(A):""),k.push({type:typeof A=="string"?mn.literal:mn.object,value:A});continue}if(mg(m)){var L=typeof m.style=="string"?a.date[m.style]:no(m.style)?m.style.parsedOptions:void 0;k.push({type:mn.literal,value:t.getDateTimeFormat(i,L).format(A)});continue}if(fg(m)){var L=typeof m.style=="string"?a.time[m.style]:no(m.style)?m.style.parsedOptions:a.time.medium;k.push({type:mn.literal,value:t.getDateTimeFormat(i,L).format(A)});continue}if(Eg(m)){var L=typeof m.style=="string"?a.number[m.style]:yg(m.style)?m.style.parsedOptions:void 0;L&&L.scale&&(A=A*(L.scale||1)),k.push({type:mn.literal,value:t.getNumberFormat(i,L).format(A)});continue}if(hg(m)){var P=m.children,y=m.value,_=s[y];if(!Ig(_))throw new mc(y,"function",d);var K=ei(P,i,t,a,s,l),G=_(K.map(function(c){return c.value}));Array.isArray(G)||(G=[G]),k.push.apply(k,G.map(function(c){return{type:typeof c=="string"?mn.literal:mn.object,value:c}}))}if(pg(m)){var b=m.options[A]||m.options.other;if(!b)throw new Fd(m.value,A,Object.keys(m.options),d);k.push.apply(k,ei(b.value,i,t,a,s));continue}if(Tg(m)){var b=m.options["=".concat(A)];if(!b){if(!Intl.PluralRules)throw new Or(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ar.MISSING_INTL_API,d);var X=t.getPluralRules(i,{type:m.pluralType}).select(A-(m.offset||0));b=m.options[X]||m.options.other}if(!b)throw new Fd(m.value,A,Object.keys(m.options),d);k.push.apply(k,ei(b.value,i,t,a,s,A-(m.offset||0)));continue}}return pc(k)}function Tc(e,i){return i?ie(ie(ie({},e||{}),i||{}),Object.keys(e).reduce(function(t,a){return t[a]=ie(ie({},e[a]),i[a]||{}),t},{})):e}function hc(e,i){return i?Object.keys(e).reduce(function(t,a){return t[a]=Tc(e[a],i[a]),t},ie({},e)):e}function Vs(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function yc(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Zn(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.NumberFormat).bind.apply(i,rr([void 0],t,!1)))},{cache:Vs(e.number),strategy:Qn.variadic}),getDateTimeFormat:Zn(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.DateTimeFormat).bind.apply(i,rr([void 0],t,!1)))},{cache:Vs(e.dateTime),strategy:Qn.variadic}),getPluralRules:Zn(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.PluralRules).bind.apply(i,rr([void 0],t,!1)))},{cache:Vs(e.pluralRules),strategy:Qn.variadic})}}var Kg=function(){function e(i,t,a,s){t===void 0&&(t=e.defaultLocale);var l=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(v){var E=l.formatToParts(v);if(E.length===1)return E[0].value;var m=E.reduce(function(h,A){return!h.length||A.type!==mn.literal||typeof h[h.length-1]!="string"?h.push(A.value):h[h.length-1]+=A.value,h},[]);return m.length<=1?m[0]||"":m},this.formatToParts=function(v){return ei(l.ast,l.locales,l.formatters,l.formats,v,void 0,l.message)},this.resolvedOptions=function(){var v;return{locale:((v=l.resolvedLocale)===null||v===void 0?void 0:v.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=t,this.resolvedLocale=e.resolveLocale(t),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=s||{};d.formatters;var k=lt(d,["formatters"]);this.ast=e.__parse(i,ie(ie({},k),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=hc(e.formats,a),this.formatters=s&&s.formatters||yc(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(i);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=Ec,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),qr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(qr||(qr={}));var Jt=function(e){Yn(i,e);function i(t,a,s){var l=this,d=s?s instanceof Error?s:new Error(String(s)):void 0;return l=e.call(this,"[@formatjs/intl Error ".concat(t,"] ").concat(a,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,l.code=t,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(l,i),l}return i}(Error),Ac=function(e){Yn(i,e);function i(t,a){return e.call(this,qr.UNSUPPORTED_FORMATTER,t,a)||this}return i}(Jt),cc=function(e){Yn(i,e);function i(t,a){return e.call(this,qr.INVALID_CONFIG,t,a)||this}return i}(Jt),Md=function(e){Yn(i,e);function i(t,a){return e.call(this,qr.MISSING_DATA,t,a)||this}return i}(Jt),Gn=function(e){Yn(i,e);function i(t,a,s){var l=e.call(this,qr.FORMAT_ERROR,"".concat(t,`
Locale: `).concat(a,`
`),s)||this;return l.locale=a,l}return i}(Jt),Gs=function(e){Yn(i,e);function i(t,a,s,l){var d=e.call(this,"".concat(t,`
MessageID: `).concat(s==null?void 0:s.id,`
Default Message: `).concat(s==null?void 0:s.defaultMessage,`
Description: `).concat(s==null?void 0:s.description,`
`),a,l)||this;return d.descriptor=s,d.locale=a,d}return i}(Gn),Rc=function(e){Yn(i,e);function i(t,a){var s=e.call(this,qr.MISSING_TRANSLATION,'Missing message: "'.concat(t.id,'" for locale "').concat(a,'", using ').concat(t.defaultMessage?"default message (".concat(typeof t.defaultMessage=="string"?t.defaultMessage:t.defaultMessage.map(function(l){var d;return(d=l.value)!==null&&d!==void 0?d:JSON.stringify(l)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=t,s}return i}(Jt);function _c(e,i,t){if(t===void 0&&(t=Error),!e)throw new t(i)}function gt(e,i,t){return t===void 0&&(t={}),i.reduce(function(a,s){return s in e?a[s]=e[s]:s in t&&(a[s]=t[s]),a},{})}var Nc=function(e){},Sc=function(e){},Og={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Nc,onWarn:Sc};function Lg(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Ur(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function bc(e){e===void 0&&(e=Lg());var i=Intl.RelativeTimeFormat,t=Intl.ListFormat,a=Intl.DisplayNames,s=Zn(function(){for(var k,v=[],E=0;E<arguments.length;E++)v[E]=arguments[E];return new((k=Intl.DateTimeFormat).bind.apply(k,rr([void 0],v,!1)))},{cache:Ur(e.dateTime),strategy:Qn.variadic}),l=Zn(function(){for(var k,v=[],E=0;E<arguments.length;E++)v[E]=arguments[E];return new((k=Intl.NumberFormat).bind.apply(k,rr([void 0],v,!1)))},{cache:Ur(e.number),strategy:Qn.variadic}),d=Zn(function(){for(var k,v=[],E=0;E<arguments.length;E++)v[E]=arguments[E];return new((k=Intl.PluralRules).bind.apply(k,rr([void 0],v,!1)))},{cache:Ur(e.pluralRules),strategy:Qn.variadic});return{getDateTimeFormat:s,getNumberFormat:l,getMessageFormat:Zn(function(k,v,E,m){return new Kg(k,v,E,ie({formatters:{getNumberFormat:l,getDateTimeFormat:s,getPluralRules:d}},m||{}))},{cache:Ur(e.message),strategy:Qn.variadic}),getRelativeTimeFormat:Zn(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(i.bind.apply(i,rr([void 0],k,!1)))},{cache:Ur(e.relativeTime),strategy:Qn.variadic}),getPluralRules:d,getListFormat:Zn(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(t.bind.apply(t,rr([void 0],k,!1)))},{cache:Ur(e.list),strategy:Qn.variadic}),getDisplayNames:Zn(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(a.bind.apply(a,rr([void 0],k,!1)))},{cache:Ur(e.displayNames),strategy:Qn.variadic})}}function Uo(e,i,t,a){var s=e&&e[i],l;if(s&&(l=s[t]),l)return l;a(new Ac("No ".concat(i," format named: ").concat(t)))}function za(e,i){return Object.keys(e).reduce(function(t,a){return t[a]=ie({timeZone:i},e[a]),t},{})}function Bd(e,i){var t=Object.keys(ie(ie({},e),i));return t.reduce(function(a,s){return a[s]=ie(ie({},e[s]||{}),i[s]||{}),a},{})}function Vd(e,i){if(!i)return e;var t=Kg.formats;return ie(ie(ie({},t),e),{date:Bd(za(t.date,i),za(e.date||{},i)),time:Bd(za(t.time,i),za(e.time||{},i))})}var oo=function(e,i,t,a,s){var l=e.locale,d=e.formats,k=e.messages,v=e.defaultLocale,E=e.defaultFormats,m=e.fallbackOnEmptyString,h=e.onError,A=e.timeZone,L=e.defaultRichTextElements;t===void 0&&(t={id:""});var P=t.id,y=t.defaultMessage;_c(!!P,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var _=String(P),K=k&&Object.prototype.hasOwnProperty.call(k,_)&&k[_];if(Array.isArray(K)&&K.length===1&&K[0].type===Be.literal)return K[0].value;if(!a&&K&&typeof K=="string"&&!L)return K.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=ie(ie({},L),a||{}),d=Vd(d,A),E=Vd(E,A),!K){if(m===!1&&K==="")return K;if((!y||l&&l.toLowerCase()!==v.toLowerCase())&&h(new Rc(t,l)),y)try{var G=i.getMessageFormat(y,v,E,s);return G.format(a)}catch(b){return h(new Gs('Error formatting default message for: "'.concat(_,'", rendering default message verbatim'),l,t,b)),typeof y=="string"?y:_}return _}try{var G=i.getMessageFormat(K,l,d,ie({formatters:i},s||{}));return G.format(a)}catch(b){h(new Gs('Error formatting message: "'.concat(_,'", using ').concat(y?"default message":"id"," as fallback."),l,t,b))}if(y)try{var G=i.getMessageFormat(y,v,E,s);return G.format(a)}catch(b){h(new Gs('Error formatting the default message for: "'.concat(_,'", rendering message verbatim'),l,t,b))}return typeof K=="string"?K:typeof y=="string"?y:_},Ic=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Wt(e,i,t,a){var s=e.locale,l=e.formats,d=e.onError,k=e.timeZone;a===void 0&&(a={});var v=a.format,E=ie(ie({},k&&{timeZone:k}),v&&Uo(l,i,v,d)),m=gt(a,Ic,E);return i==="time"&&!m.hour&&!m.minute&&!m.second&&!m.timeStyle&&!m.dateStyle&&(m=ie(ie({},m),{hour:"numeric",minute:"numeric"})),t(s,m)}function Kc(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return Wt(e,"date",i,d).format(k)}catch(v){e.onError(new Gn("Error formatting date.",e.locale,v))}return String(k)}function Oc(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return Wt(e,"time",i,d).format(k)}catch(v){e.onError(new Gn("Error formatting time.",e.locale,v))}return String(k)}function Lc(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=t[2],k=d===void 0?{}:d,v=typeof s=="string"?new Date(s||0):s,E=typeof l=="string"?new Date(l||0):l;try{return Wt(e,"dateTimeRange",i,k).formatRange(v,E)}catch(m){e.onError(new Gn("Error formatting date time range.",e.locale,m))}return String(v)}function Dc(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return Wt(e,"date",i,d).formatToParts(k)}catch(v){e.onError(new Gn("Error formatting date.",e.locale,v))}return[]}function Pc(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return Wt(e,"time",i,d).formatToParts(k)}catch(v){e.onError(new Gn("Error formatting time.",e.locale,v))}return[]}var Fc=["style","type","fallback","languageDisplay"];function Mc(e,i,t,a){var s=e.locale,l=e.onError,d=Intl.DisplayNames;d||l(new Or(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,ar.MISSING_INTL_API));var k=gt(a,Fc);try{return i(s,k).of(t)}catch(v){l(new Gn("Error formatting display name.",s,v))}}var Bc=["type","style"],Gd=Date.now();function Vc(e){return"".concat(Gd,"_").concat(e,"_").concat(Gd)}function Gc(e,i,t,a){a===void 0&&(a={});var s=Dg(e,i,t,a).reduce(function(l,d){var k=d.value;return typeof k!="string"?l.push(k):typeof l[l.length-1]=="string"?l[l.length-1]+=k:l.push(k),l},[]);return s.length===1?s[0]:s.length===0?"":s}function Dg(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={});var d=Intl.ListFormat;d||l(new Or(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,ar.MISSING_INTL_API));var k=gt(a,Bc);try{var v={},E=t.map(function(m,h){if(typeof m=="object"){var A=Vc(h);return v[A]=m,A}return String(m)});return i(s,k).formatToParts(E).map(function(m){return m.type==="literal"?m:ie(ie({},m),{value:v[m.value]||m.value})})}catch(m){l(new Gn("Error formatting list.",s,m))}return t}var jc=["type"];function wc(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={}),Intl.PluralRules||l(new Or(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ar.MISSING_INTL_API));var d=gt(a,jc);try{return i(s,d).select(t)}catch(k){l(new Gn("Error formatting plural.",s,k))}return"other"}var Uc=["numeric","style"];function Hc(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var d=t.format,k=!!d&&Uo(s,"relative",d,l)||{},v=gt(t,Uc,k);return i(a,v)}function qc(e,i,t,a,s){s===void 0&&(s={}),a||(a="second");var l=Intl.RelativeTimeFormat;l||e.onError(new Or(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,ar.MISSING_INTL_API));try{return Hc(e,i,s).format(t,a)}catch(d){e.onError(new Gn("Error formatting relative time.",e.locale,d))}return String(t)}var xc=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Pg(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var d=t.format,k=d&&Uo(s,"number",d,l)||{},v=gt(t,xc,k);return i(a,v)}function Yc(e,i,t,a){a===void 0&&(a={});try{return Pg(e,i,a).format(t)}catch(s){e.onError(new Gn("Error formatting number.",e.locale,s))}return String(t)}function Cc(e,i,t,a){a===void 0&&(a={});try{return Pg(e,i,a).formatToParts(t)}catch(s){e.onError(new Gn("Error formatting number.",e.locale,s))}return[]}function $c(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function Jc(e){e.onWarn&&e.defaultRichTextElements&&$c(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function Wc(e,i){var t=bc(i),a=ie(ie({},Og),e),s=a.locale,l=a.defaultLocale,d=a.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&d?d(new Md('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&d&&d(new Md('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new cc('"locale" was not configured, using "'.concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),Jc(a),ie(ie({},a),{formatters:t,formatNumber:Yc.bind(null,a,t.getNumberFormat),formatNumberToParts:Cc.bind(null,a,t.getNumberFormat),formatRelativeTime:qc.bind(null,a,t.getRelativeTimeFormat),formatDate:Kc.bind(null,a,t.getDateTimeFormat),formatDateToParts:Dc.bind(null,a,t.getDateTimeFormat),formatTime:Oc.bind(null,a,t.getDateTimeFormat),formatDateTimeRange:Lc.bind(null,a,t.getDateTimeFormat),formatTimeToParts:Pc.bind(null,a,t.getDateTimeFormat),formatPlural:wc.bind(null,a,t.getPluralRules),formatMessage:oo.bind(null,a,t),$t:oo.bind(null,a,t),formatList:Gc.bind(null,a,t.getListFormat),formatListToParts:Dg.bind(null,a,t.getListFormat),formatDisplayName:Mc.bind(null,a,t.getDisplayNames)})}function zc(e,i,t){if(t===void 0&&(t=Error),!e)throw new t(i)}function Xc(e){zc(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Zc=ie(ie({},Og),{textComponent:F.Fragment}),Qc={key:42},eR=function(e){return F.isValidElement(e)?F.createElement(F.Fragment,Qc,e):e},nR=function(e){var i;return(i=F.Children.map(e,eR))!==null&&i!==void 0?i:[]};function rR(e){return function(i){return e(F.Children.toArray(i))}}function jd(e,i){if(e===i)return!0;if(!e||!i)return!1;var t=Object.keys(e),a=Object.keys(i),s=t.length;if(a.length!==s)return!1;for(var l=0;l<s;l++){var d=t[l];if(e[d]!==i[d]||!Object.prototype.hasOwnProperty.call(i,d))return!1}return!0}var js={exports:{}},Ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function tR(){if(wd)return Ie;wd=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,k=e?Symbol.for("react.context"):60110,v=e?Symbol.for("react.async_mode"):60111,E=e?Symbol.for("react.concurrent_mode"):60111,m=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,A=e?Symbol.for("react.suspense_list"):60120,L=e?Symbol.for("react.memo"):60115,P=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,_=e?Symbol.for("react.fundamental"):60117,K=e?Symbol.for("react.responder"):60118,G=e?Symbol.for("react.scope"):60119;function b(c){if(typeof c=="object"&&c!==null){var M=c.$$typeof;switch(M){case i:switch(c=c.type,c){case v:case E:case a:case l:case s:case h:return c;default:switch(c=c&&c.$$typeof,c){case k:case m:case P:case L:case d:return c;default:return M}}case t:return M}}}function X(c){return b(c)===E}return Ie.AsyncMode=v,Ie.ConcurrentMode=E,Ie.ContextConsumer=k,Ie.ContextProvider=d,Ie.Element=i,Ie.ForwardRef=m,Ie.Fragment=a,Ie.Lazy=P,Ie.Memo=L,Ie.Portal=t,Ie.Profiler=l,Ie.StrictMode=s,Ie.Suspense=h,Ie.isAsyncMode=function(c){return X(c)||b(c)===v},Ie.isConcurrentMode=X,Ie.isContextConsumer=function(c){return b(c)===k},Ie.isContextProvider=function(c){return b(c)===d},Ie.isElement=function(c){return typeof c=="object"&&c!==null&&c.$$typeof===i},Ie.isForwardRef=function(c){return b(c)===m},Ie.isFragment=function(c){return b(c)===a},Ie.isLazy=function(c){return b(c)===P},Ie.isMemo=function(c){return b(c)===L},Ie.isPortal=function(c){return b(c)===t},Ie.isProfiler=function(c){return b(c)===l},Ie.isStrictMode=function(c){return b(c)===s},Ie.isSuspense=function(c){return b(c)===h},Ie.isValidElementType=function(c){return typeof c=="string"||typeof c=="function"||c===a||c===E||c===l||c===s||c===h||c===A||typeof c=="object"&&c!==null&&(c.$$typeof===P||c.$$typeof===L||c.$$typeof===d||c.$$typeof===k||c.$$typeof===m||c.$$typeof===_||c.$$typeof===K||c.$$typeof===G||c.$$typeof===y)},Ie.typeOf=b,Ie}var Ud;function aR(){return Ud||(Ud=1,js.exports=tR()),js.exports}var ws,Hd;function iR(){if(Hd)return ws;Hd=1;var e=aR(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=a,l[e.Memo]=s;function d(P){return e.isMemo(P)?s:l[P.$$typeof]||i}var k=Object.defineProperty,v=Object.getOwnPropertyNames,E=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,A=Object.prototype;function L(P,y,_){if(typeof y!="string"){if(A){var K=h(y);K&&K!==A&&L(P,K,_)}var G=v(y);E&&(G=G.concat(E(y)));for(var b=d(P),X=d(y),c=0;c<G.length;++c){var M=G[c];if(!t[M]&&!(_&&_[M])&&!(X&&X[M])&&!(b&&b[M])){var O=m(y,M);try{k(P,M,O)}catch{}}}}return P}return ws=L,ws}iR();var Ho=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=F.createContext(null)):F.createContext(null);Ho.Consumer;var sR=Ho.Provider,qd=sR,oR=Ho;function Cn(){var e=F.useContext(oR);return Xc(e),e}var lo;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(lo||(lo={}));var uo;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(uo||(uo={}));function Fg(e){var i=function(t){var a=Cn(),s=t.value,l=t.children,d=lt(t,["value","children"]),k=typeof s=="string"?new Date(s||0):s,v=e==="formatDate"?a.formatDateToParts(k,d):a.formatTimeToParts(k,d);return l(v)};return i.displayName=uo[e],i}function zt(e){var i=function(t){var a=Cn(),s=t.value,l=t.children,d=lt(t,["value","children"]),k=a[e](s,d);if(typeof l=="function")return l(k);var v=a.textComponent||F.Fragment;return F.createElement(v,null,k)};return i.displayName=lo[e],i}function Mg(e){return e&&Object.keys(e).reduce(function(i,t){var a=e[t];return i[t]=Ig(a)?rR(a):a,i},{})}var xd=function(e,i,t,a){for(var s=[],l=4;l<arguments.length;l++)s[l-4]=arguments[l];var d=Mg(a),k=oo.apply(void 0,rr([e,i,t,d],s,!1));return Array.isArray(k)?nR(k):k},lR=function(e,i){var t=e.defaultRichTextElements,a=lt(e,["defaultRichTextElements"]),s=Mg(t),l=Wc(ie(ie(ie({},Zc),a),{defaultRichTextElements:s}),i),d={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:s};return ie(ie({},l),{formatMessage:xd.bind(null,d,l.formatters),$t:xd.bind(null,d,l.formatters)})};function uR(e,i){var t=e.values,a=lt(e,["values"]),s=i.values,l=lt(i,["values"]);return jd(s,t)&&jd(a,l)}function Bg(e){var i=Cn(),t=i.formatMessage,a=i.textComponent,s=a===void 0?F.Fragment:a,l=e.id,d=e.description,k=e.defaultMessage,v=e.values,E=e.children,m=e.tagName,h=m===void 0?s:m,A=e.ignoreTag,L={id:l,description:d,defaultMessage:k},P=t(L,v,{ignoreTag:A});return typeof E=="function"?E(Array.isArray(P)?P:[P]):h?F.createElement(h,null,P):F.createElement(F.Fragment,null,P)}Bg.displayName="FormattedMessage";var Le=F.memo(Bg,uR);Le.displayName="MemoizedFormattedMessage";zt("formatDate");zt("formatTime");zt("formatNumber");zt("formatList");zt("formatDisplayName");Fg("formatDate");Fg("formatTime");let Yd=0;function dR(e){const[i,t]=F.useState(e),a=e||i;return F.useEffect(()=>{i==null&&(Yd+=1,t(`aksel-icon-${Yd}`))},[i]),a}const Cd=J.useId;function hr(e){var i;return Cd!==void 0?Cd().replace(/(:)/g,""):(i=dR(e))!==null&&i!==void 0?i:""}var kR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const gR=F.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=kR(e,["title","titleId"]);let l=hr();return l=t?a||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?F.createElement("title",{id:l},t):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var vR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const ER=F.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=vR(e,["title","titleId"]);let l=hr();return l=t?a||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?F.createElement("title",{id:l},t):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var mR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const fR=F.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=mR(e,["title","titleId"]);let l=hr();return l=t?a||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?F.createElement("title",{id:l},t):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var pR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Us=F.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=pR(e,["title","titleId"]);let l=hr();return l=t?a||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?F.createElement("title",{id:l},t):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12",clipRule:"evenodd"}))});var TR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const hR=F.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=TR(e,["title","titleId"]);let l=hr();return l=t?a||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?F.createElement("title",{id:l},t):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var yR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Vg=F.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=yR(e,["title","titleId"]);let l=hr();return l=t?a||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?F.createElement("title",{id:l},t):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var AR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const cR=F.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=AR(e,["title","titleId"]);let l=hr();return l=t?a||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?F.createElement("title",{id:l},t):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var RR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const _R=F.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=RR(e,["title","titleId"]);let l=hr();return l=t?a||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?F.createElement("title",{id:l},t):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var NR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const $d=F.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=NR(e,["title","titleId"]);let l=hr();return l=t?a||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?F.createElement("title",{id:l},t):null,F.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});function Gg(e){var i,t,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(i=0;i<s;i++)e[i]&&(t=Gg(e[i]))&&(a&&(a+=" "),a+=t)}else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function Xt(){for(var e,i,t=0,a="",s=arguments.length;t<s;t++)(e=arguments[t])&&(i=Gg(e))&&(a&&(a+=" "),a+=i);return a}function jg(e){return i=>{e.forEach(t=>{typeof t=="function"?t(i):t!=null&&(t.current=i)})}}function SR(...e){return J.useCallback(jg(e),e)}function bR(e,i){const t=Object.assign({},i);for(const a in i){const s=e[a],l=i[a];/^on[A-Z]/.test(a)?s&&l?t[a]=(...k)=>{l(...k),s(...k)}:s&&(t[a]=s):a==="style"?t[a]=Object.assign(Object.assign({},s),l):a==="className"&&(t[a]=[s,l].filter(Boolean).join(" "))}return Object.assign(Object.assign({},e),t)}var IR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Zt=F.forwardRef((e,i)=>{var t;const{children:a}=e,s=IR(e,["children"]);if(F.isValidElement(a)){const l=Object.prototype.propertyIsEnumerable.call(a.props,"ref")?a.props.ref:a.ref;return F.cloneElement(a,Object.assign(Object.assign({},bR(s,a.props)),{ref:i?jg([i,l]):l}))}if(F.Children.count(a)>1){const l=new Error("Aksel: Components using 'asChild' expects to recieve a single React element child.");throw l.name="SlotError",(t=Error.captureStackTrace)===null||t===void 0||t.call(Error,l,Zt),l}return null});var KR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};function OR(e,i){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${i}`}function wg(e={}){const{name:i,hookName:t="useContext",providerName:a="Provider",errorMessage:s,defaultValue:l}=e,d=F.createContext(l),k=F.forwardRef((E,m)=>{var{children:h}=E,A=KR(E,["children"]);const L=J.useMemo(()=>A,Object.values(A));return J.createElement(d.Provider,{value:m?Object.assign(Object.assign({},L),{ref:m}):L},h)});function v(E=!0){var m;const h=F.useContext(d);if(!h&&E){const A=new Error(s??OR(t,a));throw A.name="ContextError",(m=Error.captureStackTrace)===null||m===void 0||m.call(Error,A,v),A}return h}return d.displayName=i,[k,v]}const[LR,Ge]=wg({hookName:"useRenameCSS",name:"RenameCSS",providerName:"RenameCSSProvider",defaultValue:{cn:Xt}}),DR=(...e)=>Xt(e).replace(/^navds-/g,"aksel-").replace(/\snavds-/g," aksel-").trim(),PR=({children:e})=>J.createElement(LR,{cn:DR},e),[FR,vt]=wg({hookName:"useTheme",name:"ThemeProvider",providerName:"ThemeProvider"});F.forwardRef((e,i)=>{const t=vt(!1),{children:a,className:s,asChild:l=!1,theme:d=t==null?void 0:t.theme,hasBackground:k=!0}=e,E=k??(t===void 0&&e.theme!==void 0),m=l?Zt:"div";return J.createElement(FR,{theme:d},J.createElement(PR,null,J.createElement(m,{ref:i,className:Xt("aksel-theme",s,d),"data-background":E},a)))});const Et=e=>Xt({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var MR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const ko=F.forwardRef((e,i)=>{var{className:t,size:a="medium",as:s="p",spacing:l,truncate:d,weight:k="regular",align:v,visuallyHidden:E,textColor:m}=e,h=MR(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:A}=Ge();return J.createElement(s,Object.assign({},h,{ref:i,className:A(t,"navds-body-long",`navds-body-long--${a}`,Et({spacing:l,truncate:d,weight:k,align:v,visuallyHidden:E,textColor:m}))}))});var BR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const ii=F.forwardRef((e,i)=>{var{className:t,size:a="medium",as:s="p",spacing:l,truncate:d,weight:k="regular",align:v,visuallyHidden:E,textColor:m}=e,h=BR(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:A}=Ge();return J.createElement(s,Object.assign({},h,{ref:i,className:A(t,"navds-body-short",`navds-body-short--${a}`,Et({spacing:l,truncate:d,weight:k,align:v,visuallyHidden:E,textColor:m}))}))});var VR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};F.forwardRef((e,i)=>{var{className:t,size:a="medium",spacing:s,uppercase:l,as:d="p",truncate:k,weight:v="regular",align:E,visuallyHidden:m,textColor:h}=e,A=VR(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:L}=Ge();return J.createElement(d,Object.assign({},A,{ref:i,className:L(t,"navds-detail",Et({spacing:s,truncate:k,weight:v,align:E,visuallyHidden:m,textColor:h,uppercase:l}),{"navds-detail--small":a==="small"})}))});var GR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const jR=F.forwardRef((e,i)=>{var{children:t,className:a,size:s,spacing:l,as:d="p",showIcon:k=!1}=e,v=GR(e,["children","className","size","spacing","as","showIcon"]);const{cn:E}=Ge();return J.createElement(d,Object.assign({},v,{ref:i,className:E("navds-error-message","navds-label",a,Et({spacing:l}),{"navds-label--small":s==="small","navds-error-message--show-icon":k})}),k&&J.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},J.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var wR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Ug=F.forwardRef((e,i)=>{var{level:t="1",size:a,className:s,as:l,spacing:d,align:k,visuallyHidden:v,textColor:E}=e,m=wR(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:h}=Ge(),A=l??`h${t}`;return J.createElement(A,Object.assign({},m,{ref:i,className:h(s,"navds-heading",`navds-heading--${a}`,Et({spacing:d,align:k,visuallyHidden:v,textColor:E}))}))});var UR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};F.forwardRef((e,i)=>{var{className:t,spacing:a,as:s="p"}=e,l=UR(e,["className","spacing","as"]);const{cn:d}=Ge();return J.createElement(s,Object.assign({},l,{ref:i,className:d(t,"navds-ingress",{"navds-typo--spacing":!!a})}))});var HR=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const qo=F.forwardRef((e,i)=>{var{className:t,size:a="medium",as:s="label",spacing:l,visuallyHidden:d,textColor:k}=e,v=HR(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:E}=Ge();return J.createElement(s,Object.assign({},v,{ref:i,className:E(t,"navds-label",Et({spacing:l,visuallyHidden:d,textColor:k}),{"navds-label--small":a==="small"})}))});function Qt(e,i){const t=Object.entries(e).filter(([a])=>!i.includes(a));return Object.fromEntries(t)}let Jd=0;function qR(e){const[i,t]=F.useState(e),a=e||i;return F.useEffect(()=>{i==null&&(Jd+=1,t(`aksel-id-${Jd}`))},[i]),a}const Wd=J.useId;function xo(e){var i;return Wd!==void 0?Wd().replace(/(:)/g,""):(i=qR(e))!==null&&i!==void 0?i:""}function zd(e,i=[]){const t=F.useRef(e);return F.useEffect(()=>{t.current=e}),F.useCallback((...a)=>{var s;return(s=t.current)===null||s===void 0?void 0:s.call(t,...a)},i)}function xR({value:e,defaultValue:i,onChange:t}){const a=zd(t),[s,l]=F.useState(i),d=e!==void 0,k=d?e:s,v=zd(E=>{const h=typeof E=="function"?E(k):E;d||l(h),a(h)},[d,a,k]);return[k,v]}function Yo(e,i,{checkForDefaultPrevented:t=!0}={}){return function(s){if(e==null||e(s),t===!1||!s.defaultPrevented)return i==null?void 0:i(s)}}function Hs(e){return(i={})=>{const t=i.width?String(i.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function Mt(e){return(i,t)=>{const a=t!=null&&t.context?String(t.context):"standalone";let s;if(a==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,k=t!=null&&t.width?String(t.width):d;s=e.formattingValues[k]||e.formattingValues[d]}else{const d=e.defaultWidth,k=t!=null&&t.width?String(t.width):e.defaultWidth;s=e.values[k]||e.values[d]}const l=e.argumentCallback?e.argumentCallback(i):i;return s[l]}}function Bt(e){return(i,t={})=>{const a=t.width,s=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],l=i.match(s);if(!l)return null;const d=l[0],k=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],v=Array.isArray(k)?CR(k,h=>h.test(d)):YR(k,h=>h.test(d));let E;E=e.valueCallback?e.valueCallback(v):v,E=t.valueCallback?t.valueCallback(E):E;const m=i.slice(d.length);return{value:E,rest:m}}}function YR(e,i){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&i(e[t]))return t}function CR(e,i){for(let t=0;t<e.length;t++)if(i(e[t]))return t}function $R(e){return(i,t={})=>{const a=i.match(e.matchPattern);if(!a)return null;const s=a[0],l=i.match(e.parsePattern);if(!l)return null;let d=e.valueCallback?e.valueCallback(l[0]):l[0];d=t.valueCallback?t.valueCallback(d):d;const k=i.slice(s.length);return{value:d,rest:k}}}const JR={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},WR=(e,i,t)=>{let a;const s=JR[e];return typeof s=="string"?a=s:i===1?a=s.one:a=s.other.replace("{{count}}",String(i)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"om "+a:a+" siden":a},zR={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},XR={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ZR={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},QR={date:Hs({formats:zR,defaultWidth:"full"}),time:Hs({formats:XR,defaultWidth:"full"}),dateTime:Hs({formats:ZR,defaultWidth:"full"})},e_={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},n_=(e,i,t,a)=>e_[e],r_={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},t_={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},a_={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},i_={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},s_={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},o_=(e,i)=>Number(e)+".",l_={ordinalNumber:o_,era:Mt({values:r_,defaultWidth:"wide"}),quarter:Mt({values:t_,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Mt({values:a_,defaultWidth:"wide"}),day:Mt({values:i_,defaultWidth:"wide"}),dayPeriod:Mt({values:s_,defaultWidth:"wide"})},u_=/^(\d+)\.?/i,d_=/\d+/i,k_={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},g_={any:[/^f/i,/^e/i]},v_={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},E_={any:[/1/i,/2/i,/3/i,/4/i]},m_={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},f_={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},p_={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},T_={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},h_={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},y_={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},A_={ordinalNumber:$R({matchPattern:u_,parsePattern:d_,valueCallback:e=>parseInt(e,10)}),era:Bt({matchPatterns:k_,defaultMatchWidth:"wide",parsePatterns:g_,defaultParseWidth:"any"}),quarter:Bt({matchPatterns:v_,defaultMatchWidth:"wide",parsePatterns:E_,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Bt({matchPatterns:m_,defaultMatchWidth:"wide",parsePatterns:f_,defaultParseWidth:"any"}),day:Bt({matchPatterns:p_,defaultMatchWidth:"wide",parsePatterns:T_,defaultParseWidth:"any"}),dayPeriod:Bt({matchPatterns:h_,defaultMatchWidth:"any",parsePatterns:y_,defaultParseWidth:"any"})},c_={code:"nb",formatDistance:WR,formatLong:QR,formatRelative:n_,localize:l_,match:A_,options:{weekStartsOn:1,firstWeekContainsDate:4}},R_={global:{dateLocale:c_,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},__=F.createContext({locale:R_}),N_=()=>F.useContext(__),Xd=/(\w+)/g;function S_(e,i){const t=Array.isArray(e)?e:b_(e);for(const a of i){if(!a)continue;let s=a;for(let l=0;l<t.length;l++){const d=s[t[l]];d!==void 0&&(s=d)}if(typeof s=="string")return s}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function b_(e){const i=[];let t=Xd.exec(e);for(;t;){const[,a,s]=t;i.push(a||s),t=Xd.exec(e)}return i}const I_=/{[^}]*}/g;function si(e,...i){const t=N_(),a=t.translations||[],s=[...i,...Array.isArray(a)?a.map(d=>d[e]):[a[e]],t.locale[e]];return(d,k)=>{const v=S_(d,s);return k?v.replace(I_,E=>{const m=E.substring(1,E.length-1);if(k[m]===void 0){const h=JSON.stringify(k);throw new Error(`Error translating key '${d}'. No replacement syntax ({}) found for key '${m}'. The following replacements were passed: '${h}'`)}return k[m]}):v}}var K_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const O_=F.forwardRef((e,i)=>{var{className:t,size:a="medium",title:s,transparent:l=!1,variant:d="neutral",id:k}=e,v=K_(e,["className","size","title","transparent","variant","id"]);const{cn:E}=Ge(),m=xo(),h=si("Loader");return J.createElement("svg",Object.assign({"aria-labelledby":k??`loader-${m}`,ref:i,className:E("navds-loader",t,`navds-loader--${a}`,`navds-loader--${d}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},Qt(v,["children"])),J.createElement("title",{id:k??`loader-${m}`},s||h("title")),J.createElement("circle",{className:E("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),J.createElement("circle",{className:E("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var L_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Co=F.forwardRef((e,i)=>{var{as:t="button",variant:a="primary",className:s,children:l,size:d="medium",loading:k=!1,disabled:v,icon:E,iconPosition:m="left",onKeyUp:h}=e,A=L_(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp"]);const{cn:L}=Ge(),P=v||k?Qt(A,["href"]):A,y=_=>{_.key===" "&&!v&&!k&&_.currentTarget.click()};return J.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},P,{ref:i,onKeyUp:Yo(h,y),className:L(s,"navds-button",`navds-button--${a}`,`navds-button--${d}`,{"navds-button--loading":k,"navds-button--icon-only":!!E&&!l,"navds-button--disabled":v??k}),disabled:v??k?!0:void 0}),E&&m==="left"&&J.createElement("span",{className:L("navds-button__icon")},E),k&&J.createElement(O_,{size:d}),l&&J.createElement(qo,{as:"span",size:d==="medium"?"medium":"small"},l),E&&m==="right"&&J.createElement("span",{className:L("navds-button__icon")},E))}),D_=F.createContext(null),P_=(e,i)=>{var t,a,s;const{size:l,error:d,errorId:k}=e,v=F.useContext(D_),E=xo(),m=(t=e.id)!==null&&t!==void 0?t:`${i}-${E}`,h=k??`${i}-error-${E}`,A=`${i}-description-${E}`,L=(v==null?void 0:v.disabled)||e.disabled,P=((v==null?void 0:v.readOnly)||e.readOnly)&&!L||void 0,y=!L&&!P&&!!(d||v!=null&&v.error),_=!L&&!P&&!!d&&typeof d!="boolean",K=Object.assign({},y?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:_,hasError:y,errorId:h,inputDescriptionId:A,size:(a=l??(v==null?void 0:v.size))!==null&&a!==void 0?a:"medium",readOnly:P,inputProps:Object.assign(Object.assign({id:m},K),{"aria-describedby":Xt(e["aria-describedby"],{[A]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[h]:_,[(s=v==null?void 0:v.errorId)!==null&&s!==void 0?s:""]:y&&!!(v!=null&&v.error)})||void 0,disabled:L})}};function nn(e,i,t,a){return a?typeof a=="string"?{[`--__${e}c-${i}-${t}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([s,l])=>[`--__${e}c-${i}-${t}-${s}`,l])):{}}const F_={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Zd=(e,i,t,a,s,l)=>i.split(" ").map((d,k,v)=>{var E;if(e==="margin-inline"&&d==="full")return`calc((100vw - ${100/v.length}%)/-2)`;if(e==="padding-inline"&&d==="full")return`calc((100vw - ${100/v.length}%)/2)`;if(["mi","mb"].includes(e)&&d==="auto")return"auto";let m=`var(--${l}-${t}-${d})`;if(a.includes(d))m=d==="px"?"1px":d;else if(d.startsWith("space"))m=`var(--${l}-${d})`;else{const h=`--${l}-spacing-${d}`;m=`var(${(E=F_[h])!==null&&E!==void 0?E:h})`}return s?d==="0"?"0":`calc(-1 * ${m})`:m}).join(" ");function Kn(e,i,t,a,s,l=!1,d=[]){if(!s)return{};if(typeof s=="string")return{[`--__${e}c-${i}-${t}-xs`]:Zd(t,s,a,d,l,e)};const k={};return Object.entries(s).forEach(([v,E])=>{k[`--__${e}c-${i}-${t}-${v}`]=Zd(t,E,a,d,l,e)}),k}const Hg=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],qg=({children:e,className:i,padding:t,paddingInline:a,paddingBlock:s,margin:l,marginInline:d,marginBlock:k,width:v,minWidth:E,maxWidth:m,height:h,minHeight:A,maxHeight:L,position:P,inset:y,top:_,right:K,left:G,bottom:b,overflow:X,overflowX:c,overflowY:M,flexBasis:O,flexGrow:I,flexShrink:Y,gridColumn:z})=>{const U=vt(!1),{cn:ne}=Ge(),W=U?"ax":"a",C=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Kn(W,"r","p","spacing",t)),Kn(W,"r","pi","spacing",a)),Kn(W,"r","pb","spacing",s)),Kn(W,"r","m","spacing",l)),Kn(W,"r","mi","spacing",d)),Kn(W,"r","mb","spacing",k)),nn(W,"r","w",v)),nn(W,"r","minw",E)),nn(W,"r","maxw",m)),nn(W,"r","h",h)),nn(W,"r","minh",A)),nn(W,"r","maxh",L)),nn(W,"r","position",P)),Kn(W,"r","inset","spacing",y)),Kn(W,"r","top","spacing",_)),Kn(W,"r","right","spacing",K)),Kn(W,"r","bottom","spacing",b)),Kn(W,"r","left","spacing",G)),nn(W,"r","overflow",X)),nn(W,"r","overflowx",c)),nn(W,"r","overflowy",M)),nn(W,"r","flex-basis",O)),nn(W,"r","flex-grow",I)),nn(W,"r","flex-shrink",Y)),nn(W,"r","grid-column",z));return J.createElement(Zt,{className:ne({className:i,"navds-r-p":t,"navds-r-pi":a,"navds-r-pb":s,"navds-r-m":l,"navds-r-mi":d,"navds-r-mb":k,"navds-r-w":v,"navds-r-minw":E,"navds-r-maxw":m,"navds-r-h":h,"navds-r-minh":A,"navds-r-maxh":L,"navds-r-position":P,"navds-r-inset":y,"navds-r-top":_,"navds-r-right":K,"navds-r-bottom":b,"navds-r-left":G,"navds-r-overflow":X,"navds-r-overflowx":c,"navds-r-overflowy":M,"navds-r-flex-basis":O,"navds-r-flex-grow":I,"navds-r-flex-shrink":Y,"navds-r-grid-column":z}),style:C},e)};var M_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const B_=F.forwardRef((e,i)=>{var{children:t,className:a,as:s="div",columns:l,gap:d,style:k,align:v,asChild:E}=e,m=M_(e,["children","className","as","columns","gap","style","align","asChild"]);const A=vt(!1)?"ax":"a",{cn:L}=Ge(),P=Object.assign(Object.assign(Object.assign(Object.assign({},k),{[`--__${A}c-hgrid-align`]:v}),Kn(A,"hgrid","gap","spacing",d)),nn(A,"hgrid","columns",V_(l))),y=E?Zt:s;return J.createElement(qg,Object.assign({},m),J.createElement(y,Object.assign({},Qt(m,Hg),{ref:i,className:L("navds-hgrid",a,{"navds-hgrid-gap":d,"navds-hgrid-align":v}),style:P}),t))});function V_(e){return e?typeof e=="string"||typeof e=="number"?Qd(e):Object.fromEntries(Object.entries(e).map(([i,t])=>[i,Qd(t)])):{}}const Qd=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var G_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const xg=F.forwardRef((e,i)=>{var{children:t,className:a,as:s="div",align:l,justify:d,wrap:k=!0,gap:v,style:E,direction:m="row",asChild:h}=e,A=G_(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const P=vt(!1)?"ax":"a",{cn:y}=Ge(),_=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},E),Kn(P,"stack","gap","spacing",v)),nn(P,"stack","direction",m)),nn(P,"stack","align",l)),nn(P,"stack","justify",d)),K=h?Zt:s;return J.createElement(qg,Object.assign({},A),J.createElement(K,Object.assign({},Qt(A,Hg),{ref:i,style:_,className:y("navds-stack",a,{"navds-vstack":m==="column","navds-hstack":m==="row","navds-stack-gap":v,"navds-stack-align":l,"navds-stack-justify":d,"navds-stack-direction":m,"navds-stack-wrap":k})}),t))});var j_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const st=F.forwardRef((e,i)=>{var{as:t="div"}=e,a=j_(e,["as"]);return J.createElement(xg,Object.assign({as:t},a,{ref:i,direction:"row"}))});var w_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const oi=F.forwardRef((e,i)=>{var{as:t="div"}=e,a=w_(e,["as"]);return J.createElement(xg,Object.assign({as:t},a,{ref:i,direction:"column",wrap:!1}))}),ni=F.createContext({listType:"ul",size:"medium"});var U_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Yg=F.forwardRef((e,i)=>{var{className:t,children:a,title:s,icon:l}=e,d=U_(e,["className","children","title","icon"]);const{listType:k,size:v}=F.useContext(ni),{cn:E}=Ge();return k==="ol"&&l&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),J.createElement("li",Object.assign({},d,{ref:i,className:E("navds-list__item",t)}),k==="ul"&&J.createElement("div",{className:E("navds-list__item-marker",{"navds-list__item-marker--icon":l,"navds-list__item-marker--bullet":!l})},l||J.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},J.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),J.createElement("div",null,s&&J.createElement(ko,{as:"p",size:v,weight:"semibold"},s),a))});Yg.displayName="List.Item";var H_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const q_={small:"xsmall",medium:"small",large:"medium"},go=F.forwardRef((e,i)=>{var{children:t,className:a,as:s="ul",title:l,description:d,headingTag:k,size:v,"aria-label":E,"aria-labelledby":m}=e,h=H_(e,["children","className","as","title","description","headingTag","size","aria-label","aria-labelledby"]);const{size:A}=F.useContext(ni),{cn:L}=Ge(),P=vt(!1),y=v??A;return P?J.createElement(ni.Provider,{value:{listType:s,size:y}},J.createElement(ko,Object.assign({as:"div"},h,{size:y,ref:i,className:L("navds-list",`navds-list--${y}`,a)}),J.createElement(s,{role:"list","aria-label":E,"aria-labelledby":m},t))):J.createElement(ni.Provider,{value:{listType:s,size:y}},J.createElement(ko,Object.assign({as:"div"},h,{size:y,ref:i,className:L("navds-list",`navds-list--${y}`,a)}),l&&J.createElement(Ug,{size:q_[y],as:k??"h3"},l),d&&J.createElement(ii,{size:y},d),J.createElement(s,{role:"list","aria-label":E,"aria-labelledby":m},t)))});go.Item=Yg;var x_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Y_=F.forwardRef((e,i)=>{var{className:t}=e,a=x_(e,["className"]);const{cn:s}=Ge();return J.createElement("tbody",Object.assign({},a,{ref:i,className:s("navds-table__body",t)}))});var C_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Cg=F.forwardRef((e,i)=>{var{className:t,children:a,align:s,textSize:l}=e,d=C_(e,["className","children","align","textSize"]);const{cn:k}=Ge();return J.createElement("th",Object.assign({ref:i,className:k("navds-table__header-cell","navds-label",t,{[`navds-table__header-cell--align-${s}`]:s,"navds-label--small":l==="small"})},d),a)}),$g=F.createContext(null);var $_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const J_=F.forwardRef((e,i)=>{var t,a,s,l,{className:d,children:k,sortable:v=!1,sortKey:E}=e,m=$_(e,["className","children","sortable","sortKey"]);const h=F.useContext($g),{cn:A}=Ge();return v&&!E&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),J.createElement(Cg,Object.assign({scope:"col",ref:i,className:A(d),"aria-sort":v?((t=h==null?void 0:h.sort)===null||t===void 0?void 0:t.orderBy)===E?(a=h==null?void 0:h.sort)===null||a===void 0?void 0:a.direction:"none":void 0},m),v?J.createElement("button",{type:"button",className:A("navds-table__sort-button"),onClick:v&&E?()=>{var L;return(L=h==null?void 0:h.onSortChange)===null||L===void 0?void 0:L.call(h,E)}:void 0},k,((s=h==null?void 0:h.sort)===null||s===void 0?void 0:s.orderBy)===E?((l=h==null?void 0:h.sort)===null||l===void 0?void 0:l.direction)==="descending"?J.createElement(cR,{"aria-hidden":!0}):J.createElement(_R,{"aria-hidden":!0}):J.createElement(ER,{"aria-hidden":!0})):k)});var W_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Jg=F.forwardRef((e,i)=>{var{className:t,children:a="",align:s,textSize:l}=e,d=W_(e,["className","children","align","textSize"]);const{cn:k}=Ge();return J.createElement(ii,Object.assign({as:"td",ref:i,className:k("navds-table__data-cell",t,{[`navds-table__data-cell--align-${s}`]:s}),size:l},d),a)});var z_=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const X_=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function Z_(e){const i=parseFloat(e);return!Number.isNaN(i)&&Number.isFinite(i)}function ek(e){return typeof e=="string"&&e[e.length-1]==="%"&&Z_(e.substring(0,e.length-1))}function qs(e,i){i===0&&(e!=null&&e.style)&&(e.style.display="none")}function Q_(e,i){i===0&&(e!=null&&e.style)&&(e.style.display="")}const eN=e=>{var{children:i,className:t,innerClassName:a,duration:s=250,easing:l="ease",height:d}=e,k=z_(e,["children","className","innerClassName","duration","easing","height"]);const{cn:v}=Ge(),E=F.useRef(d),m=F.useRef(null),h=F.useRef(),A=F.useRef(),L=F.useRef(d),P=F.useRef("visible"),y=X_?0:s;typeof L.current=="number"?(typeof d!="string"&&(L.current=d<0?0:d),P.current="hidden"):ek(L.current)&&(L.current=d==="0%"?0:d,P.current="hidden");const[_,K]=F.useState(L.current),[G,b]=F.useState(P.current),[X,c]=F.useState(!1);F.useEffect(()=>{qs(m.current,L.current)},[]),F.useEffect(()=>{if(d!==E.current&&m.current){Q_(m.current,E.current),m.current.style.overflow="hidden";const Y=m.current.offsetHeight;m.current.style.overflow="";const z=y;let U,ne,W="hidden",C;const q=E.current==="auto";typeof d=="number"?(U=d<0?0:d,ne=U):ek(d)?(U=d==="0%"?0:d,ne=U):(U=Y,ne="auto",W=void 0),q&&(ne=U,U=Y),K(U),b("hidden"),c(!q),clearTimeout(A.current),clearTimeout(h.current),q?(C=!0,A.current=setTimeout(()=>{K(ne),b(W),c(C)},50),h.current=setTimeout(()=>{c(!1),qs(m.current,ne)},z)):A.current=setTimeout(()=>{K(ne),b(W),c(!1),d!=="auto"&&qs(m.current,U)},z)}return E.current=d,()=>{clearTimeout(A.current),clearTimeout(h.current)}},[d]);const M={height:_,overflow:G};X&&(M.transition=`height ${y}ms ${l} 0ms`,M.WebkitTransition=M.transition);const I=typeof k["aria-hidden"]<"u"?k["aria-hidden"]:d===0;return J.createElement("div",Object.assign({},k,{className:v(t),style:M}),J.createElement("div",{"aria-hidden":I,className:v(a),ref:m},i))};var nN=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Wg=F.forwardRef((e,i)=>{var{className:t,selected:a=!1,shadeOnHover:s=!0}=e,l=nN(e,["className","selected","shadeOnHover"]);const{cn:d}=Ge();return J.createElement("tr",Object.assign({},l,{ref:i,className:d("navds-table__row",t,{"navds-table__row--selected":a,"navds-table__row--shade-on-hover":s})}))});var rN=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const tN=F.forwardRef((e,i)=>{var{className:t,children:a,content:s,togglePlacement:l="left",defaultOpen:d=!1,open:k,onOpenChange:v,expansionDisabled:E=!1,expandOnRowClick:m=!1,colSpan:h=999,contentGutter:A,onClick:L}=e,P=rN(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:y}=Ge(),[_,K]=xR({defaultValue:d,value:k,onChange:v}),G=si("global"),b=xo(),X=M=>{K(O=>!O),M.stopPropagation()},c=M=>{m&&!E&&!zg(M.target)&&X(M)};return J.createElement(J.Fragment,null,J.createElement(Wg,Object.assign({},P,{ref:i,className:y("navds-table__expandable-row",t,{"navds-table__expandable-row--open":_,"navds-table__expandable-row--expansion-disabled":E,"navds-table__expandable-row--clickable":m}),onClick:Yo(L,c)}),l==="right"&&a,J.createElement(Jg,{className:y("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":_}),onClick:E?()=>null:X},!E&&J.createElement("button",{className:y("navds-table__toggle-expand-button"),type:"button","aria-controls":b,"aria-expanded":_,onClick:X},J.createElement(fR,{className:y("navds-table__expandable-icon"),title:G(_?"showLess":"showMore")}))),l==="left"&&a),J.createElement("tr",{"data-state":_?"open":"closed",className:y("navds-table__expanded-row"),"aria-hidden":!_,id:b},J.createElement("td",{colSpan:h,className:y("navds-table__expanded-row-cell")},J.createElement(eN,{className:y("navds-table__expanded-row-collapse"),innerClassName:y(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${A??l}`),height:_?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},s))))});function zg(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:zg(e.parentElement)}var aN=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const iN=F.forwardRef((e,i)=>{var{className:t}=e,a=aN(e,["className"]);const{cn:s}=Ge();return J.createElement("thead",Object.assign({},a,{ref:i,className:s("navds-table__header",t)}))});var sN=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const He=F.forwardRef((e,i)=>{var{className:t,zebraStripes:a=!1,size:s="medium",onSortChange:l,sort:d}=e,k=sN(e,["className","zebraStripes","size","onSortChange","sort"]);const{cn:v}=Ge();return J.createElement($g.Provider,{value:{onSortChange:l,sort:d}},J.createElement("table",Object.assign({},k,{ref:i,className:v("navds-table",`navds-table--${s}`,t,{"navds-table--zebra-stripes":a})})))});He.Header=iN;He.Body=Y_;He.Row=Wg;He.ColumnHeader=J_;He.HeaderCell=Cg;He.DataCell=Jg;He.ExpandableRow=tN;const Xg=F.createContext(null);var oN=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Zg=F.forwardRef((e,i)=>{var t,{className:a,children:s,disabled:l,onClick:d}=e,k=oN(e,["className","children","disabled","onClick"]);const{cn:v}=Ge(),E=si("Search"),m=F.useContext(Xg);if(m===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:h,variant:A,handleClick:L}=m;return J.createElement(Co,Object.assign({type:"submit"},k,{ref:i,size:h,variant:A==="secondary"?"secondary":"primary",className:v("navds-search__button-search",a),disabled:(t=m==null?void 0:m.disabled)!==null&&t!==void 0?t:l,onClick:Yo(d,L),icon:J.createElement(Vg,Object.assign({},s?{"aria-hidden":!0}:{title:E("search")}))}),s)});var lN=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const vo=F.forwardRef((e,i)=>{const{inputProps:t,size:a="medium",inputDescriptionId:s,errorId:l,showErrorMsg:d,hasError:k}=P_(e,"searchfield"),{className:v,hideLabel:E=!0,label:m,description:h,value:A,clearButtonLabel:L,onClear:P,clearButton:y=!0,children:_,variant:K="primary",defaultValue:G,onChange:b,onSearchClick:X,htmlSize:c}=e,M=lN(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize"]),{cn:O}=Ge(),I=vt(!1),Y=F.useRef(null),z=SR(Y,i),U=si("Search"),[ne,W]=F.useState(G??""),C=ee=>{A===void 0&&W(ee),b==null||b(ee)},q=ee=>{var ae,re;P==null||P(ee),C(""),(re=(ae=Y.current)===null||ae===void 0?void 0:ae.focus)===null||re===void 0||re.call(ae)},$=()=>{X==null||X(`${A??ne}`)},Z=y&&!t.disabled&&(A??ne),x=()=>I?J.createElement(Co,{className:O("navds-search__button-clear"),variant:"tertiary-neutral",size:a==="medium"?"small":"xsmall",icon:J.createElement($d,{"aria-hidden":!0}),title:L||U("clear"),hidden:!Z,onClick:ee=>q({trigger:"Click",event:ee})}):J.createElement("button",{type:"button",onClick:ee=>q({trigger:"Click",event:ee}),className:O("navds-search__button-clear"),hidden:!Z},J.createElement("span",{className:O("navds-sr-only")},L||U("clear")),J.createElement($d,{"aria-hidden":!0}));return J.createElement("div",{onKeyDown:ee=>{var ae;ee.key==="Escape"&&(!((ae=Y.current)===null||ae===void 0)&&ae.value&&ee.preventDefault(),q({trigger:"Escape",event:ee}))},className:O(v,"navds-form-field",`navds-form-field--${a}`,"navds-search",{"navds-search--error":k,"navds-search--disabled":t.disabled,"navds-search--with-size":c})},J.createElement(qo,{htmlFor:t.id,size:a,className:O("navds-form-field__label",{"navds-sr-only":E})},m),!!h&&J.createElement(ii,{className:O("navds-form-field__description",{"navds-sr-only":E}),id:s,size:a,as:"div"},h),J.createElement("div",{className:O("navds-search__wrapper")},J.createElement("div",{className:O("navds-search__wrapper-inner")},K==="simple"&&J.createElement(Vg,{"aria-hidden":!0,className:O("navds-search__search-icon")}),J.createElement("input",Object.assign({ref:z},Qt(M,["error","errorId","size","readOnly"]),t,{value:A??ne,onChange:ee=>C(ee.target.value),type:"search",className:O(v,"navds-search__input",`navds-search__input--${K}`,"navds-text-field__input","navds-body-short",`navds-body-short--${a}`)},c?{size:Number(c)}:{})),J.createElement(x,null)),J.createElement(Xg.Provider,{value:{size:a,disabled:t.disabled,variant:K,handleClick:$}},_||K!=="simple"&&J.createElement(Zg,null))),J.createElement("div",{className:O("navds-form-field__error"),id:l,"aria-relevant":"additions removals","aria-live":"polite"},d&&J.createElement(jR,{size:a,showIcon:!0},e.error)))});vo.Button=Zg;const uN=e=>{if(e==null)return;const i=e.toString().replace(/\s/g,"");if(!Number.isNaN(i))return Number(Math.round(parseFloat(i))).toLocaleString("nb-NO").replace(/,|\s/g," ")};function $o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Eo={exports:{}},dN=Eo.exports,nk;function kN(){return nk||(nk=1,function(e,i){(function(t,a){e.exports=a()})(dN,function(){var t,a,s=1e3,l=6e4,d=36e5,k=864e5,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,E=31536e6,m=2628e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,A={years:E,months:m,days:k,hours:d,minutes:l,seconds:s,milliseconds:1,weeks:6048e5},L=function(M){return M instanceof X},P=function(M,O,I){return new X(M,I,O.$l)},y=function(M){return a.p(M)+"s"},_=function(M){return M<0},K=function(M){return _(M)?Math.ceil(M):Math.floor(M)},G=function(M){return Math.abs(M)},b=function(M,O){return M?_(M)?{negative:!0,format:""+G(M)+O}:{negative:!1,format:""+M+O}:{negative:!1,format:""}},X=function(){function M(I,Y,z){var U=this;if(this.$d={},this.$l=z,I===void 0&&(this.$ms=0,this.parseFromMilliseconds()),Y)return P(I*A[y(Y)],this);if(typeof I=="number")return this.$ms=I,this.parseFromMilliseconds(),this;if(typeof I=="object")return Object.keys(I).forEach(function(C){U.$d[y(C)]=I[C]}),this.calMilliseconds(),this;if(typeof I=="string"){var ne=I.match(h);if(ne){var W=ne.slice(2).map(function(C){return C!=null?Number(C):0});return this.$d.years=W[0],this.$d.months=W[1],this.$d.weeks=W[2],this.$d.days=W[3],this.$d.hours=W[4],this.$d.minutes=W[5],this.$d.seconds=W[6],this.calMilliseconds(),this}}return this}var O=M.prototype;return O.calMilliseconds=function(){var I=this;this.$ms=Object.keys(this.$d).reduce(function(Y,z){return Y+(I.$d[z]||0)*A[z]},0)},O.parseFromMilliseconds=function(){var I=this.$ms;this.$d.years=K(I/E),I%=E,this.$d.months=K(I/m),I%=m,this.$d.days=K(I/k),I%=k,this.$d.hours=K(I/d),I%=d,this.$d.minutes=K(I/l),I%=l,this.$d.seconds=K(I/s),I%=s,this.$d.milliseconds=I},O.toISOString=function(){var I=b(this.$d.years,"Y"),Y=b(this.$d.months,"M"),z=+this.$d.days||0;this.$d.weeks&&(z+=7*this.$d.weeks);var U=b(z,"D"),ne=b(this.$d.hours,"H"),W=b(this.$d.minutes,"M"),C=this.$d.seconds||0;this.$d.milliseconds&&(C+=this.$d.milliseconds/1e3,C=Math.round(1e3*C)/1e3);var q=b(C,"S"),$=I.negative||Y.negative||U.negative||ne.negative||W.negative||q.negative,Z=ne.format||W.format||q.format?"T":"",x=($?"-":"")+"P"+I.format+Y.format+U.format+Z+ne.format+W.format+q.format;return x==="P"||x==="-P"?"P0D":x},O.toJSON=function(){return this.toISOString()},O.format=function(I){var Y=I||"YYYY-MM-DDTHH:mm:ss",z={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return Y.replace(v,function(U,ne){return ne||String(z[U])})},O.as=function(I){return this.$ms/A[y(I)]},O.get=function(I){var Y=this.$ms,z=y(I);return z==="milliseconds"?Y%=1e3:Y=z==="weeks"?K(Y/A[z]):this.$d[z],Y||0},O.add=function(I,Y,z){var U;return U=Y?I*A[y(Y)]:L(I)?I.$ms:P(I,this).$ms,P(this.$ms+U*(z?-1:1),this)},O.subtract=function(I,Y){return this.add(I,Y,!0)},O.locale=function(I){var Y=this.clone();return Y.$l=I,Y},O.clone=function(){return P(this.$ms,this)},O.humanize=function(I){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!I)},O.valueOf=function(){return this.asMilliseconds()},O.milliseconds=function(){return this.get("milliseconds")},O.asMilliseconds=function(){return this.as("milliseconds")},O.seconds=function(){return this.get("seconds")},O.asSeconds=function(){return this.as("seconds")},O.minutes=function(){return this.get("minutes")},O.asMinutes=function(){return this.as("minutes")},O.hours=function(){return this.get("hours")},O.asHours=function(){return this.as("hours")},O.days=function(){return this.get("days")},O.asDays=function(){return this.as("days")},O.weeks=function(){return this.get("weeks")},O.asWeeks=function(){return this.as("weeks")},O.months=function(){return this.get("months")},O.asMonths=function(){return this.as("months")},O.years=function(){return this.get("years")},O.asYears=function(){return this.as("years")},M}(),c=function(M,O,I){return M.add(O.years()*I,"y").add(O.months()*I,"M").add(O.days()*I,"d").add(O.hours()*I,"h").add(O.minutes()*I,"m").add(O.seconds()*I,"s").add(O.milliseconds()*I,"ms")};return function(M,O,I){t=I,a=I().$utils(),I.duration=function(U,ne){var W=I.locale();return P(U,{$l:W},ne)},I.isDuration=L;var Y=O.prototype.add,z=O.prototype.subtract;O.prototype.add=function(U,ne){return L(U)?c(this,U,1):Y.bind(this)(U,ne)},O.prototype.subtract=function(U,ne){return L(U)?c(this,U,-1):z.bind(this)(U,ne)}}})}(Eo)),Eo.exports}var gN=kN();const vN=$o(gN);var mo={exports:{}},EN=mo.exports,rk;function mN(){return rk||(rk=1,function(e,i){(function(t,a){e.exports=a()})(EN,function(){var t="day";return function(a,s,l){var d=function(E){return E.add(4-E.isoWeekday(),t)},k=s.prototype;k.isoWeekYear=function(){return d(this).year()},k.isoWeek=function(E){if(!this.$utils().u(E))return this.add(7*(E-this.isoWeek()),t);var m,h,A,L,P=d(this),y=(m=this.isoWeekYear(),h=this.$u,A=(h?l.utc:l)().year(m).startOf("year"),L=4-A.isoWeekday(),A.isoWeekday()>4&&(L+=7),A.add(L,t));return P.diff(y,"week")+1},k.isoWeekday=function(E){return this.$utils().u(E)?this.day()||7:this.day(this.day()%7?E:E-7)};var v=k.startOf;k.startOf=function(E,m){var h=this.$utils(),A=!!h.u(m)||m;return h.p(E)==="isoweek"?A?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):v.bind(this)(E,m)}}})}(mo)),mo.exports}var fN=mN();const pN=$o(fN);var fo={exports:{}},TN=fo.exports,tk;function hN(){return tk||(tk=1,function(e,i){(function(t,a){e.exports=a()})(TN,function(){var t="minute",a=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(l,d,k){var v=d.prototype;k.utc=function(y){var _={date:y,utc:!0,args:arguments};return new d(_)},v.utc=function(y){var _=k(this.toDate(),{locale:this.$L,utc:!0});return y?_.add(this.utcOffset(),t):_},v.local=function(){return k(this.toDate(),{locale:this.$L,utc:!1})};var E=v.parse;v.parse=function(y){y.utc&&(this.$u=!0),this.$utils().u(y.$offset)||(this.$offset=y.$offset),E.call(this,y)};var m=v.init;v.init=function(){if(this.$u){var y=this.$d;this.$y=y.getUTCFullYear(),this.$M=y.getUTCMonth(),this.$D=y.getUTCDate(),this.$W=y.getUTCDay(),this.$H=y.getUTCHours(),this.$m=y.getUTCMinutes(),this.$s=y.getUTCSeconds(),this.$ms=y.getUTCMilliseconds()}else m.call(this)};var h=v.utcOffset;v.utcOffset=function(y,_){var K=this.$utils().u;if(K(y))return this.$u?0:K(this.$offset)?h.call(this):this.$offset;if(typeof y=="string"&&(y=function(c){c===void 0&&(c="");var M=c.match(a);if(!M)return null;var O=(""+M[0]).match(s)||["-",0,0],I=O[0],Y=60*+O[1]+ +O[2];return Y===0?0:I==="+"?Y:-Y}(y),y===null))return this;var G=Math.abs(y)<=16?60*y:y,b=this;if(_)return b.$offset=G,b.$u=y===0,b;if(y!==0){var X=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(b=this.local().add(G+X,t)).$offset=G,b.$x.$localOffset=X}else b=this.utc();return b};var A=v.format;v.format=function(y){var _=y||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return A.call(this,_)},v.valueOf=function(){var y=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*y},v.isUTC=function(){return!!this.$u},v.toISOString=function(){return this.toDate().toISOString()},v.toString=function(){return this.toDate().toUTCString()};var L=v.toDate;v.toDate=function(y){return y==="s"&&this.$offset?k(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():L.call(this)};var P=v.diff;v.diff=function(y,_,K){if(y&&this.$u===y.$u)return P.call(this,y,_,K);var G=this.local(),b=k(y).local();return P.call(G,b,_,K)}}})}(fo)),fo.exports}var yN=hN();const AN=$o(yN),cN=Lg(),pn=e=>lR({locale:"nb-NO",messages:e},cN),ak="YYYY-MM-DD",li={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"},ri=pn(li),Qg=(e,i)=>{const{year:t="numeric",month:a="2-digit",day:s="2-digit"}=i??{};return ri.formatDate(new Date(e),{year:t,month:a,day:s})},RN=(e,i)=>{const{separator:t="dash",year:a="numeric",month:s="2-digit",day:l="2-digit",hour:d="numeric",minute:k="numeric",second:v=void 0}=i??{},E=()=>{switch(t){case"kl":return ri.formatMessage({id:"DateTimeLabel.Kl"});case"dash":return" - "}},m=ri.formatDate(new Date(e),{year:a,month:s,day:l}),h=ri.formatDate(new Date(e),{hour:d,minute:k,second:v});return`${m}${E()}${h}`};var po={exports:{}},_N=po.exports,ik;function NN(){return ik||(ik=1,function(e,i){(function(t,a){e.exports=a(Kr)})(_N,function(t){function a(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var s=a(t),l={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(l,null,!0),l})}(po)),po.exports}NN();Kr.extend(AN);Kr.extend(pN);Kr.extend(vN);pn(li);const dt="9999-12-31",SN=(e,i,t)=>Kr(e,i,t).utc(!0).startOf("day"),sk=(e,i)=>e===dt?e:SN(e,ak).add(i,"days").format(ak);pn(li);var ok={exports:{}},Vt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lk;function bN(){if(lk)return Vt;lk=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function t(a,s,l){var d=null;if(l!==void 0&&(d=""+l),s.key!==void 0&&(d=""+s.key),"key"in s){l={};for(var k in s)k!=="key"&&(l[k]=s[k])}else l=s;return s=l.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:l}}return Vt.Fragment=i,Vt.jsx=t,Vt.jsxs=t,Vt}var uk;function IN(){return uk||(uk=1,ok.exports=bN()),ok.exports}IN();pn(li);function KN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dk={exports:{}},Gt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kk;function ON(){if(kk)return Gt;kk=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function t(a,s,l){var d=null;if(l!==void 0&&(d=""+l),s.key!==void 0&&(d=""+s.key),"key"in s){l={};for(var k in s)k!=="key"&&(l[k]=s[k])}else l=s;return s=l.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:l}}return Gt.Fragment=i,Gt.jsx=t,Gt.jsxs=t,Gt}var gk;function LN(){return gk||(gk=1,dk.exports=ON()),dk.exports}var Ct=LN();const ui={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre"};pn(ui);var vk={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ek;function DN(){return Ek||(Ek=1,function(e){(function(){var i={}.hasOwnProperty;function t(){for(var l="",d=0;d<arguments.length;d++){var k=arguments[d];k&&(l=s(l,a.call(this,k)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var k in l)i.call(l,k)&&l[k]&&(d=s(d,this&&this[k]||k));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(vk)),vk.exports}var PN=DN();const Jo=KN(PN),FN="_borderbox_1vkvn_1",MN="_error_1vkvn_5",BN="_warning_1vkvn_8",VN={borderbox:FN,error:MN,warning:BN};Jo.bind(VN);const GN="_aksjonspunkt_kn1hn_1",jN="_erAksjonspunktApent_kn1hn_4",wN="_erIkkeGodkjentAvBeslutter_kn1hn_8",UN={aksjonspunkt:GN,erAksjonspunktApent:jN,erIkkeGodkjentAvBeslutter:wN};Jo.bind(UN);const $t=({dateString:e,year:i,month:t,day:a})=>Ct.jsx(Ct.Fragment,{children:Qg(e,{year:i,month:t,day:a})}),ai=({dateTimeString:e,...i})=>Ct.jsx(Ct.Fragment,{children:RN(e,i)});pn(ui);pn(ui);const HN="_divider_1t980_1",qN="_dividerParagraf_1t980_8",xN="_leftPanel_1t980_11",YN="_rightPanel_1t980_14",CN={divider:HN,dividerParagraf:qN,leftPanel:xN,rightPanel:YN};Jo.bind(CN);pn(ui);const mk={default:"_default_1sbt3_1",rød:"_rød_1sbt3_5"},ot=({beløp:e,kr:i=!1,rød:t=!1})=>{const a=e==null?void 0:e.toString().replace(/\s/g,"");return Ct.jsxs("span",{className:t?mk.rød:mk.default,children:[a?uN(a):"-",a&&i&&" kr"]})};F.createContext(null);const ev=F.createContext(null),nv=e=>{const{children:i,...t}=e,a=F.useMemo(()=>t,[t]);return B.jsx(ev,{value:a,children:i})},rv=()=>{const e=F.useContext(ev);if(!e)throw new Error("PanelContext.Provider er ikke satt opp");return e};nv.__docgenInfo={description:"",methods:[],displayName:"PanelDataProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
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
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: SkjermlenkeType | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string | null;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"skjermlenke",value:{name:"union",raw:"SkjermlenkeType | null",elements:[{name:"SkjermlenkeType"},{name:"null"}],required:!0}},{key:"dokumenter",value:{name:"union",raw:"HistorikkInnslagDokumentLink[] | null",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  skjermlenke: SkjermlenkeType | null;
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
}>`}],raw:"Aksjonspunkt[]"},description:""},harÅpneAksjonspunkter:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: AP_TYPE) => Promise<void>",signature:{arguments:[{type:{name:"AP_TYPE"},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""}}};var tv=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(tv||{}),di=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(di||{});di.BRUKERS_ANDEL;di.FRILANS;di.EGEN_NÆRING;var av=(e=>(e.OPPRETTET="OPPRE",e.BEHANDLING_UTREDES="UTRED",e.AVSLUTTET="AVSLU",e.IVERKSETTER_VEDTAK="IVED",e.FATTER_VEDTAK="FVED",e))(av||{}),iv=(e=>(e.FORSTEGANGSSOKNAD="BT-002",e.KLAGE="BT-003",e.REVURDERING="BT-004",e.DOKUMENTINNSYN="BT-006",e.TILBAKEKREVING="BT-007",e.ANKE="BT-008",e.TILBAKEKREVING_REVURDERING="BT-009",e))(iv||{}),sv=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(sv||{}),To=(e=>(e.MOR="MORA",e.FAR="FARA",e.MEDMOR="MMOR",e))(To||{}),ho=(e=>(e.ELEKTRISK_KOMMUNIKASJON="ELEKTRISK_KOMMUNIKASJON",e.LOSJI="LOSJI",e))(ho||{});F.createContext(null);var De=(e=>(e.DEFAULT="default",e.INNGANGSVILKAR="inngangsvilkar",e.BEHANDLE_INNSYN="behandle_innsyn",e.BEREGNING="beregning",e.BEREGNINGSGRUNNLAG="beregningsgrunnlag",e.KLAGE_NAV_FAMILIE_OG_PENSJON="klage_nav_familie_og_pensjon",e.KLAGE_NAV_KLAGEINSTANS="klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_KLAGEINSTANS="formkrav_klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON="formkrav_klage_nav_familie_og_pensjon",e.FORTSATTMEDLEMSKAP="fortsattmedlemskap",e.OPPLYSNINGSPLIKT="opplysningsplikt",e.SOEKNADSFRIST="soeknadsfrist",e.TILBAKEKREVING="tilbakekreving",e.FORELDELSE="foreldelse",e.TILKJENT_YTELSE="tilkjent_ytelse",e.VARSEL="varsel",e.VEDTAK="vedtak",e.UTTAK="uttak",e.SIMULERING="simulering",e.KLAGE_RESULTAT="resultat",e.ANKEBEHANDLING="ankebehandling",e.ANKE_MERKNADER="ankemerknader",e.ANKE_RESULTAT="ankeresultat",e))(De||{}),le=(e=>(e.ADOPSJONSVILKARET="adopsjonsvilkaaret",e.ARBEIDSFORHOLD="arbeidsforhold",e.ARBEID_OG_INNTEKT="arbeidoginntekt",e.BEREGNING="beregning",e.BESTEBEREGNING="besteberegning",e.DEFAULT="default",e.FORDELING="fordeling",e.INNTEKTSMELDINGER="inntektsmeldinger",e.FEILUTBETALING="feilutbetaling",e.FODSELSVILKARET="foedselsvilkaaret",e.FODSELTILRETTELEGGING="fodseltilrettelegging",e.MEDLEMSKAPSVILKARET="medlemskapsvilkaaret",e.OMSORG="omsorg",e.OMSORG_OG_RETT="omsorgogrett",e.OMSORGSVILKARET="omsorgsvilkaaret",e.OPPTJENINGSVILKARET="opptjeningsvilkaaret",e.PERMISJON="permisjon",e.SAKEN="saken",e.UTTAK="uttak",e.VERGE="verge",e.YTELSER="ytelser",e.UTTAK_DOKUMENTASJON="uttakdokumentasjon",e))(le||{});le.DEFAULT,De.BEREGNING,le.DEFAULT,De.BEREGNINGSGRUNNLAG,le.BESTEBEREGNING,De.DEFAULT,le.ADOPSJONSVILKARET,le.ARBEIDSFORHOLD,le.BEREGNING,le.FODSELSVILKARET,le.FORDELING,le.MEDLEMSKAPSVILKARET,le.OMSORG,le.OPPTJENINGSVILKARET,le.OPPTJENINGSVILKARET,le.OMSORGSVILKARET,le.ARBEIDSFORHOLD,le.UTTAK_DOKUMENTASJON,le.DEFAULT,De.INNGANGSVILKAR,le.DEFAULT,De.KLAGE_NAV_FAMILIE_OG_PENSJON,le.DEFAULT,De.KLAGE_NAV_KLAGEINSTANS,le.DEFAULT,De.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,le.DEFAULT,De.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,le.DEFAULT,De.ANKEBEHANDLING,le.DEFAULT,De.ANKE_MERKNADER,le.DEFAULT,De.OPPLYSNINGSPLIKT,le.DEFAULT,De.INNGANGSVILKAR,le.DEFAULT,De.INNGANGSVILKAR,le.MEDLEMSKAPSVILKARET,De.INNGANGSVILKAR,le.DEFAULT,De.INNGANGSVILKAR,le.DEFAULT,De.INNGANGSVILKAR,le.DEFAULT,De.SOEKNADSFRIST,le.DEFAULT,De.VEDTAK,le.UTTAK,le.UTTAK,le.UTTAK_DOKUMENTASJON,le.SAKEN,le.DEFAULT,De.UTTAK,le.VERGE,le.DEFAULT,De.TILKJENT_YTELSE,le.DEFAULT,De.SIMULERING,le.SAKEN,le.FODSELTILRETTELEGGING,le.DEFAULT,De.INNGANGSVILKAR,le.DEFAULT,le.UTTAK_DOKUMENTASJON,le.DEFAULT,De.FORTSATTMEDLEMSKAP,le.ARBEID_OG_INNTEKT,De.DEFAULT,le.OMSORG_OG_RETT;le.FEILUTBETALING,le.DEFAULT,De.TILBAKEKREVING,le.DEFAULT,De.FORELDELSE,le.DEFAULT,De.VEDTAK,le.VERGE;const $N=(e,i,t)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${i}&dokumentId=${t}`,JN=(e,i,t,a)=>{const s=$N(e,i,t),l=`${i}-${t}`;a&&WN(s,l,a)},WN=(e,i,t)=>{const a=window.open(e,i);a&&setTimeout(()=>{a.document.title=t},1e3)},ir=({tittel:e,children:i})=>B.jsxs(oi,{gap:"1",children:[B.jsx(qo,{size:"medium",children:e}),i]});ir.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ov=({arbeidsgiverOpplysninger:e,arbeidsgiverIdent:i})=>{const t=Cn();return B.jsxs(ir,{tittel:t.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[B.jsxs("span",{children:[B.jsx(Le,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),": ",e.navn]}),B.jsxs("span",{children:[B.jsx(Le,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",i]})]})};ov.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const lv=({inntektsmelding:e,behandling:i,alleBehandlinger:t,alleKodeverk:a})=>{const s=Cn(),l=e.tilknyttedeBehandlingIder.includes(i.uuid),d=t.filter(E=>e.tilknyttedeBehandlingIder.includes(E.uuid)),k=(()=>{const E=d.length;return l&&E>1?B.jsx(Le,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):l?B.jsx(Le,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):E===0?B.jsx(Le,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):B.jsx(Le,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),v=[...d].sort((E,m)=>new Date(E.opprettet).getTime()-new Date(m.opprettet).getTime());return B.jsxs(ir,{tittel:s.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[k,B.jsx(go,{children:v.map(E=>{var m;return B.jsx(go.Item,{children:B.jsxs(oi,{gap:"1",children:[B.jsx("span",{children:(m=a.BehandlingType.find(({kode:h})=>h===E.type))==null?void 0:m.navn}),B.jsxs("span",{children:[B.jsx(Le,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",B.jsx(ai,{dateTimeString:E.opprettet,separator:"kl"})]}),E.avsluttet?B.jsxs("span",{children:[B.jsx(Le,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",B.jsx(ai,{dateTimeString:E.avsluttet,separator:"kl"})]}):null]})},E.uuid)})})]})};lv.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};function zN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fk={exports:{}},jt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pk;function XN(){if(pk)return jt;pk=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function t(a,s,l){var d=null;if(l!==void 0&&(d=""+l),s.key!==void 0&&(d=""+s.key),"key"in s){l={};for(var k in s)k!=="key"&&(l[k]=s[k])}else l=s;return s=l.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:l}}return jt.Fragment=i,jt.jsx=t,jt.jsxs=t,jt}var Tk;function ZN(){return Tk||(Tk=1,fk.exports=XN()),fk.exports}ZN();var yo={exports:{}},QN=yo.exports,hk;function eS(){return hk||(hk=1,function(e,i){(function(t,a){e.exports=a()})(QN,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,l=/\d\d/,d=/\d\d?/,k=/\d*[^-_:/,()\s\d]+/,v={},E=function(_){return(_=+_)+(_>68?1900:2e3)},m=function(_){return function(K){this[_]=+K}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(_){(this.zone||(this.zone={})).offset=function(K){if(!K||K==="Z")return 0;var G=K.match(/([+-]|\d\d)/g),b=60*G[1]+(+G[2]||0);return b===0?0:G[0]==="+"?-b:b}(_)}],A=function(_){var K=v[_];return K&&(K.indexOf?K:K.s.concat(K.f))},L=function(_,K){var G,b=v.meridiem;if(b){for(var X=1;X<=24;X+=1)if(_.indexOf(b(X,0,K))>-1){G=X>12;break}}else G=_===(K?"pm":"PM");return G},P={A:[k,function(_){this.afternoon=L(_,!1)}],a:[k,function(_){this.afternoon=L(_,!0)}],Q:[s,function(_){this.month=3*(_-1)+1}],S:[s,function(_){this.milliseconds=100*+_}],SS:[l,function(_){this.milliseconds=10*+_}],SSS:[/\d{3}/,function(_){this.milliseconds=+_}],s:[d,m("seconds")],ss:[d,m("seconds")],m:[d,m("minutes")],mm:[d,m("minutes")],H:[d,m("hours")],h:[d,m("hours")],HH:[d,m("hours")],hh:[d,m("hours")],D:[d,m("day")],DD:[l,m("day")],Do:[k,function(_){var K=v.ordinal,G=_.match(/\d+/);if(this.day=G[0],K)for(var b=1;b<=31;b+=1)K(b).replace(/\[|\]/g,"")===_&&(this.day=b)}],w:[d,m("week")],ww:[l,m("week")],M:[d,m("month")],MM:[l,m("month")],MMM:[k,function(_){var K=A("months"),G=(A("monthsShort")||K.map(function(b){return b.slice(0,3)})).indexOf(_)+1;if(G<1)throw new Error;this.month=G%12||G}],MMMM:[k,function(_){var K=A("months").indexOf(_)+1;if(K<1)throw new Error;this.month=K%12||K}],Y:[/[+-]?\d+/,m("year")],YY:[l,function(_){this.year=E(_)}],YYYY:[/\d{4}/,m("year")],Z:h,ZZ:h};function y(_){var K,G;K=_,G=v&&v.formats;for(var b=(_=K.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(z,U,ne){var W=ne&&ne.toUpperCase();return U||G[ne]||t[ne]||G[W].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(C,q,$){return q||$.slice(1)})})).match(a),X=b.length,c=0;c<X;c+=1){var M=b[c],O=P[M],I=O&&O[0],Y=O&&O[1];b[c]=Y?{regex:I,parser:Y}:M.replace(/^\[|\]$/g,"")}return function(z){for(var U={},ne=0,W=0;ne<X;ne+=1){var C=b[ne];if(typeof C=="string")W+=C.length;else{var q=C.regex,$=C.parser,Z=z.slice(W),x=q.exec(Z)[0];$.call(U,x),z=z.replace(x,"")}}return function(ee){var ae=ee.afternoon;if(ae!==void 0){var re=ee.hours;ae?re<12&&(ee.hours+=12):re===12&&(ee.hours=0),delete ee.afternoon}}(U),U}}return function(_,K,G){G.p.customParseFormat=!0,_&&_.parseTwoDigitYear&&(E=_.parseTwoDigitYear);var b=K.prototype,X=b.parse;b.parse=function(c){var M=c.date,O=c.utc,I=c.args;this.$u=O;var Y=I[1];if(typeof Y=="string"){var z=I[2]===!0,U=I[3]===!0,ne=z||U,W=I[2];U&&(W=I[2]),v=this.$locale(),!z&&W&&(v=G.Ls[W]),this.$d=function(Z,x,ee,ae){try{if(["x","X"].indexOf(x)>-1)return new Date((x==="X"?1e3:1)*Z);var re=y(x)(Z),_e=re.year,Se=re.month,qe=re.day,we=re.hours,ln=re.minutes,cn=re.seconds,un=re.milliseconds,ze=re.zone,xe=re.week,Ce=new Date,Qe=qe||(_e||Se?1:Ce.getDate()),dn=_e||Ce.getFullYear(),$e=0;_e&&!Se||($e=Se>0?Se-1:Ce.getMonth());var kn,or=we||0,rn=ln||0,Jn=cn||0,lr=un||0;return ze?new Date(Date.UTC(dn,$e,Qe,or,rn,Jn,lr+60*ze.offset*1e3)):ee?new Date(Date.UTC(dn,$e,Qe,or,rn,Jn,lr)):(kn=new Date(dn,$e,Qe,or,rn,Jn,lr),xe&&(kn=ae(kn).week(xe).toDate()),kn)}catch{return new Date("")}}(M,Y,O,G),this.init(),W&&W!==!0&&(this.$L=this.locale(W).$L),ne&&M!=this.format(Y)&&(this.$d=new Date("")),v={}}else if(Y instanceof Array)for(var C=Y.length,q=1;q<=C;q+=1){I[1]=Y[q-1];var $=G.apply(this,I);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}q===C&&(this.$d=new Date(""))}else X.call(this,c)}}})}(yo)),yo.exports}var nS=eS();const rS=zN(nS);Kr.extend(rS);function uv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ao={exports:{}},tS=Ao.exports,yk;function aS(){return yk||(yk=1,function(e,i){(function(t,a){e.exports=a()})(tS,function(){return function(t,a){a.prototype.isSameOrAfter=function(s,l){return this.isSame(s,l)||this.isAfter(s,l)}}})}(Ao)),Ao.exports}var iS=aS();const sS=uv(iS);var co={exports:{}},oS=co.exports,Ak;function lS(){return Ak||(Ak=1,function(e,i){(function(t,a){e.exports=a()})(oS,function(){return function(t,a){a.prototype.isSameOrBefore=function(s,l){return this.isSame(s,l)||this.isBefore(s,l)}}})}(co)),co.exports}var uS=lS();const dS=uv(uS),kS="Dato må være før eller lik {limit}",gS="Dato må være etter eller lik {limit}",vS="Perioder kan ikke overlappe i tid",ES="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",mS="Dato må være lik {value}",fS="Dato må skrives slik: dd.mm.åååå",pS="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",TS="Tallet kan ikke inneholde mer enn to desimaler",hS="Tallet kan ikke ha desimaler",yS="Feltet kan kun inneholde tall",AS="Ugyldig fødselsnummer",cS="Feltet må være et fødselsnummer (11 siffer)",RS="Ugyldig organisasjonsnummer.",_S="Ugyldig organisasjonsnummer eller fødselsnummer",NS="Startdato må være før eller lik sluttdato",SS="Periode er utenfor opptjeningsperioden",bS="Ugyldig saksnummer eller fødselsnummer",IS="Feltet inneholder ugyldige tegn: {text}",KS="Feltet inneholder en ugyldig verdi: {value}",OS="Feltet kan ikke inneholde mellomrom",LS="Feltet må fylles ut",DS="Du kan skrive maksimalt {length} tegn",PS="Du må skrive minst {length} tegn",FS="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",MS="Feltet må være mindre eller lik {length}",BS="Feltet må være større eller lik {length}",VS="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",GS={DateNotBeforeOrEqual:kS,DateNotAfterOrEqual:gS,DateRangesOverlapping:vS,DateRangesOverlappingPeriodTypes:ES,DatesNotEqual:mS,InvalidDate:fS,InvalidDatesInPeriod:pS,InvalidDecimal:TS,InvalidInteger:hS,InvalidNumber:yS,InvalidFodselsnr:AS,InvalidFodselsnrFormat:cS,InvalidOrgnr:RS,InvalidOrgnrOrFodselsnr:_S,InvalidPeriod:NS,InvalidPeriodRange:SS,InvalidSaksnrOrFodselsnrFormat:bS,InvalidText:IS,InvalidValue:KS,IllegalWhiteSpace:OS,IsRequired:LS,MaxLength:DS,MinLength:PS,MaxLengthOrFodselsnr:FS,MaxValue:MS,MinValue:BS,SammeFodselsnrSomSoker:VS},{formatMessage:YI}=pn(GS);Kr.extend(sS);Kr.extend(dS);const ea={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"};pn(ea);pn(ea);pn(ea);const jS=(e,i)=>{const t=new Date(e.tom??dt),a=new Date(i.tom??dt);if(t>a)return-1;if(t<a)return 1;if(e.fom&&!i.fom)return-1;if(!e.fom&&i.fom)return 1;if(e.fom&&i.fom){const s=new Date(e.fom),l=new Date(i.fom);if(s>l)return-1;if(s<l)return 1}return 0};var qt={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var wS=qt.exports,ck;function US(){return ck||(ck=1,function(e,i){(function(){var t,a="4.17.21",s=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",d="Expected a function",k="Invalid `variable` option passed into `_.template`",v="__lodash_hash_undefined__",E=500,m="__lodash_placeholder__",h=1,A=2,L=4,P=1,y=2,_=1,K=2,G=4,b=8,X=16,c=32,M=64,O=128,I=256,Y=512,z=30,U="...",ne=800,W=16,C=1,q=2,$=3,Z=1/0,x=9007199254740991,ee=17976931348623157e292,ae=NaN,re=4294967295,_e=re-1,Se=re>>>1,qe=[["ary",O],["bind",_],["bindKey",K],["curry",b],["curryRight",X],["flip",Y],["partial",c],["partialRight",M],["rearg",I]],we="[object Arguments]",ln="[object Array]",cn="[object AsyncFunction]",un="[object Boolean]",ze="[object Date]",xe="[object DOMException]",Ce="[object Error]",Qe="[object Function]",dn="[object GeneratorFunction]",$e="[object Map]",kn="[object Number]",or="[object Null]",rn="[object Object]",Jn="[object Promise]",lr="[object Proxy]",ft="[object RegExp]",wn="[object Set]",pt="[object String]",ia="[object Symbol]",$v="[object Undefined]",Tt="[object WeakMap]",Jv="[object WeakSet]",ht="[object ArrayBuffer]",Yr="[object DataView]",mi="[object Float32Array]",fi="[object Float64Array]",pi="[object Int8Array]",Ti="[object Int16Array]",hi="[object Int32Array]",yi="[object Uint8Array]",Ai="[object Uint8ClampedArray]",ci="[object Uint16Array]",Ri="[object Uint32Array]",Wv=/\b__p \+= '';/g,zv=/\b(__p \+=) '' \+/g,Xv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Zo=/&(?:amp|lt|gt|quot|#39);/g,Qo=/[&<>"']/g,Zv=RegExp(Zo.source),Qv=RegExp(Qo.source),eE=/<%-([\s\S]+?)%>/g,nE=/<%([\s\S]+?)%>/g,el=/<%=([\s\S]+?)%>/g,rE=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,tE=/^\w*$/,aE=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_i=/[\\^$.*+?()[\]{}|]/g,iE=RegExp(_i.source),Ni=/^\s+/,sE=/\s/,oE=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,lE=/\{\n\/\* \[wrapped with (.+)\] \*/,uE=/,? & /,dE=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,kE=/[()=,{}\[\]\/\s]/,gE=/\\(\\)?/g,vE=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,nl=/\w*$/,EE=/^[-+]0x[0-9a-f]+$/i,mE=/^0b[01]+$/i,fE=/^\[object .+?Constructor\]$/,pE=/^0o[0-7]+$/i,TE=/^(?:0|[1-9]\d*)$/,hE=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,sa=/($^)/,yE=/['\n\r\u2028\u2029\\]/g,oa="\\ud800-\\udfff",AE="\\u0300-\\u036f",cE="\\ufe20-\\ufe2f",RE="\\u20d0-\\u20ff",rl=AE+cE+RE,tl="\\u2700-\\u27bf",al="a-z\\xdf-\\xf6\\xf8-\\xff",_E="\\xac\\xb1\\xd7\\xf7",NE="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",SE="\\u2000-\\u206f",bE=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",il="A-Z\\xc0-\\xd6\\xd8-\\xde",sl="\\ufe0e\\ufe0f",ol=_E+NE+SE+bE,Si="['’]",IE="["+oa+"]",ll="["+ol+"]",la="["+rl+"]",ul="\\d+",KE="["+tl+"]",dl="["+al+"]",kl="[^"+oa+ol+ul+tl+al+il+"]",bi="\\ud83c[\\udffb-\\udfff]",OE="(?:"+la+"|"+bi+")",gl="[^"+oa+"]",Ii="(?:\\ud83c[\\udde6-\\uddff]){2}",Ki="[\\ud800-\\udbff][\\udc00-\\udfff]",Cr="["+il+"]",vl="\\u200d",El="(?:"+dl+"|"+kl+")",LE="(?:"+Cr+"|"+kl+")",ml="(?:"+Si+"(?:d|ll|m|re|s|t|ve))?",fl="(?:"+Si+"(?:D|LL|M|RE|S|T|VE))?",pl=OE+"?",Tl="["+sl+"]?",DE="(?:"+vl+"(?:"+[gl,Ii,Ki].join("|")+")"+Tl+pl+")*",PE="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",FE="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",hl=Tl+pl+DE,ME="(?:"+[KE,Ii,Ki].join("|")+")"+hl,BE="(?:"+[gl+la+"?",la,Ii,Ki,IE].join("|")+")",VE=RegExp(Si,"g"),GE=RegExp(la,"g"),Oi=RegExp(bi+"(?="+bi+")|"+BE+hl,"g"),jE=RegExp([Cr+"?"+dl+"+"+ml+"(?="+[ll,Cr,"$"].join("|")+")",LE+"+"+fl+"(?="+[ll,Cr+El,"$"].join("|")+")",Cr+"?"+El+"+"+ml,Cr+"+"+fl,FE,PE,ul,ME].join("|"),"g"),wE=RegExp("["+vl+oa+rl+sl+"]"),UE=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,HE=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],qE=-1,Me={};Me[mi]=Me[fi]=Me[pi]=Me[Ti]=Me[hi]=Me[yi]=Me[Ai]=Me[ci]=Me[Ri]=!0,Me[we]=Me[ln]=Me[ht]=Me[un]=Me[Yr]=Me[ze]=Me[Ce]=Me[Qe]=Me[$e]=Me[kn]=Me[rn]=Me[ft]=Me[wn]=Me[pt]=Me[Tt]=!1;var Fe={};Fe[we]=Fe[ln]=Fe[ht]=Fe[Yr]=Fe[un]=Fe[ze]=Fe[mi]=Fe[fi]=Fe[pi]=Fe[Ti]=Fe[hi]=Fe[$e]=Fe[kn]=Fe[rn]=Fe[ft]=Fe[wn]=Fe[pt]=Fe[ia]=Fe[yi]=Fe[Ai]=Fe[ci]=Fe[Ri]=!0,Fe[Ce]=Fe[Qe]=Fe[Tt]=!1;var xE={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},YE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},CE={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},$E={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},JE=parseFloat,WE=parseInt,yl=typeof Ja=="object"&&Ja&&Ja.Object===Object&&Ja,zE=typeof self=="object"&&self&&self.Object===Object&&self,tn=yl||zE||Function("return this")(),Li=i&&!i.nodeType&&i,Dr=Li&&!0&&e&&!e.nodeType&&e,Al=Dr&&Dr.exports===Li,Di=Al&&yl.process,On=function(){try{var N=Dr&&Dr.require&&Dr.require("util").types;return N||Di&&Di.binding&&Di.binding("util")}catch{}}(),cl=On&&On.isArrayBuffer,Rl=On&&On.isDate,_l=On&&On.isMap,Nl=On&&On.isRegExp,Sl=On&&On.isSet,bl=On&&On.isTypedArray;function Rn(N,V,D){switch(D.length){case 0:return N.call(V);case 1:return N.call(V,D[0]);case 2:return N.call(V,D[0],D[1]);case 3:return N.call(V,D[0],D[1],D[2])}return N.apply(V,D)}function XE(N,V,D,te){for(var ge=-1,Ne=N==null?0:N.length;++ge<Ne;){var Xe=N[ge];V(te,Xe,D(Xe),N)}return te}function Ln(N,V){for(var D=-1,te=N==null?0:N.length;++D<te&&V(N[D],D,N)!==!1;);return N}function ZE(N,V){for(var D=N==null?0:N.length;D--&&V(N[D],D,N)!==!1;);return N}function Il(N,V){for(var D=-1,te=N==null?0:N.length;++D<te;)if(!V(N[D],D,N))return!1;return!0}function yr(N,V){for(var D=-1,te=N==null?0:N.length,ge=0,Ne=[];++D<te;){var Xe=N[D];V(Xe,D,N)&&(Ne[ge++]=Xe)}return Ne}function ua(N,V){var D=N==null?0:N.length;return!!D&&$r(N,V,0)>-1}function Pi(N,V,D){for(var te=-1,ge=N==null?0:N.length;++te<ge;)if(D(V,N[te]))return!0;return!1}function je(N,V){for(var D=-1,te=N==null?0:N.length,ge=Array(te);++D<te;)ge[D]=V(N[D],D,N);return ge}function Ar(N,V){for(var D=-1,te=V.length,ge=N.length;++D<te;)N[ge+D]=V[D];return N}function Fi(N,V,D,te){var ge=-1,Ne=N==null?0:N.length;for(te&&Ne&&(D=N[++ge]);++ge<Ne;)D=V(D,N[ge],ge,N);return D}function QE(N,V,D,te){var ge=N==null?0:N.length;for(te&&ge&&(D=N[--ge]);ge--;)D=V(D,N[ge],ge,N);return D}function Mi(N,V){for(var D=-1,te=N==null?0:N.length;++D<te;)if(V(N[D],D,N))return!0;return!1}var em=Bi("length");function nm(N){return N.split("")}function rm(N){return N.match(dE)||[]}function Kl(N,V,D){var te;return D(N,function(ge,Ne,Xe){if(V(ge,Ne,Xe))return te=Ne,!1}),te}function da(N,V,D,te){for(var ge=N.length,Ne=D+(te?1:-1);te?Ne--:++Ne<ge;)if(V(N[Ne],Ne,N))return Ne;return-1}function $r(N,V,D){return V===V?Em(N,V,D):da(N,Ol,D)}function tm(N,V,D,te){for(var ge=D-1,Ne=N.length;++ge<Ne;)if(te(N[ge],V))return ge;return-1}function Ol(N){return N!==N}function Ll(N,V){var D=N==null?0:N.length;return D?Gi(N,V)/D:ae}function Bi(N){return function(V){return V==null?t:V[N]}}function Vi(N){return function(V){return N==null?t:N[V]}}function Dl(N,V,D,te,ge){return ge(N,function(Ne,Xe,Pe){D=te?(te=!1,Ne):V(D,Ne,Xe,Pe)}),D}function am(N,V){var D=N.length;for(N.sort(V);D--;)N[D]=N[D].value;return N}function Gi(N,V){for(var D,te=-1,ge=N.length;++te<ge;){var Ne=V(N[te]);Ne!==t&&(D=D===t?Ne:D+Ne)}return D}function ji(N,V){for(var D=-1,te=Array(N);++D<N;)te[D]=V(D);return te}function im(N,V){return je(V,function(D){return[D,N[D]]})}function Pl(N){return N&&N.slice(0,Vl(N)+1).replace(Ni,"")}function _n(N){return function(V){return N(V)}}function wi(N,V){return je(V,function(D){return N[D]})}function yt(N,V){return N.has(V)}function Fl(N,V){for(var D=-1,te=N.length;++D<te&&$r(V,N[D],0)>-1;);return D}function Ml(N,V){for(var D=N.length;D--&&$r(V,N[D],0)>-1;);return D}function sm(N,V){for(var D=N.length,te=0;D--;)N[D]===V&&++te;return te}var om=Vi(xE),lm=Vi(YE);function um(N){return"\\"+$E[N]}function dm(N,V){return N==null?t:N[V]}function Jr(N){return wE.test(N)}function km(N){return UE.test(N)}function gm(N){for(var V,D=[];!(V=N.next()).done;)D.push(V.value);return D}function Ui(N){var V=-1,D=Array(N.size);return N.forEach(function(te,ge){D[++V]=[ge,te]}),D}function Bl(N,V){return function(D){return N(V(D))}}function cr(N,V){for(var D=-1,te=N.length,ge=0,Ne=[];++D<te;){var Xe=N[D];(Xe===V||Xe===m)&&(N[D]=m,Ne[ge++]=D)}return Ne}function ka(N){var V=-1,D=Array(N.size);return N.forEach(function(te){D[++V]=te}),D}function vm(N){var V=-1,D=Array(N.size);return N.forEach(function(te){D[++V]=[te,te]}),D}function Em(N,V,D){for(var te=D-1,ge=N.length;++te<ge;)if(N[te]===V)return te;return-1}function mm(N,V,D){for(var te=D+1;te--;)if(N[te]===V)return te;return te}function Wr(N){return Jr(N)?pm(N):em(N)}function Un(N){return Jr(N)?Tm(N):nm(N)}function Vl(N){for(var V=N.length;V--&&sE.test(N.charAt(V)););return V}var fm=Vi(CE);function pm(N){for(var V=Oi.lastIndex=0;Oi.test(N);)++V;return V}function Tm(N){return N.match(Oi)||[]}function hm(N){return N.match(jE)||[]}var ym=function N(V){V=V==null?tn:zr.defaults(tn.Object(),V,zr.pick(tn,HE));var D=V.Array,te=V.Date,ge=V.Error,Ne=V.Function,Xe=V.Math,Pe=V.Object,Hi=V.RegExp,Am=V.String,Dn=V.TypeError,ga=D.prototype,cm=Ne.prototype,Xr=Pe.prototype,va=V["__core-js_shared__"],Ea=cm.toString,Oe=Xr.hasOwnProperty,Rm=0,Gl=function(){var n=/[^.]+$/.exec(va&&va.keys&&va.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),ma=Xr.toString,_m=Ea.call(Pe),Nm=tn._,Sm=Hi("^"+Ea.call(Oe).replace(_i,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),fa=Al?V.Buffer:t,Rr=V.Symbol,pa=V.Uint8Array,jl=fa?fa.allocUnsafe:t,Ta=Bl(Pe.getPrototypeOf,Pe),wl=Pe.create,Ul=Xr.propertyIsEnumerable,ha=ga.splice,Hl=Rr?Rr.isConcatSpreadable:t,At=Rr?Rr.iterator:t,Pr=Rr?Rr.toStringTag:t,ya=function(){try{var n=Gr(Pe,"defineProperty");return n({},"",{}),n}catch{}}(),bm=V.clearTimeout!==tn.clearTimeout&&V.clearTimeout,Im=te&&te.now!==tn.Date.now&&te.now,Km=V.setTimeout!==tn.setTimeout&&V.setTimeout,Aa=Xe.ceil,ca=Xe.floor,qi=Pe.getOwnPropertySymbols,Om=fa?fa.isBuffer:t,ql=V.isFinite,Lm=ga.join,Dm=Bl(Pe.keys,Pe),Ze=Xe.max,sn=Xe.min,Pm=te.now,Fm=V.parseInt,xl=Xe.random,Mm=ga.reverse,xi=Gr(V,"DataView"),ct=Gr(V,"Map"),Yi=Gr(V,"Promise"),Zr=Gr(V,"Set"),Rt=Gr(V,"WeakMap"),_t=Gr(Pe,"create"),Ra=Rt&&new Rt,Qr={},Bm=jr(xi),Vm=jr(ct),Gm=jr(Yi),jm=jr(Zr),wm=jr(Rt),_a=Rr?Rr.prototype:t,Nt=_a?_a.valueOf:t,Yl=_a?_a.toString:t;function f(n){if(Ye(n)&&!ve(n)&&!(n instanceof Te)){if(n instanceof Pn)return n;if(Oe.call(n,"__wrapped__"))return Cu(n)}return new Pn(n)}var et=function(){function n(){}return function(r){if(!Ue(r))return{};if(wl)return wl(r);n.prototype=r;var o=new n;return n.prototype=t,o}}();function Na(){}function Pn(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}f.templateSettings={escape:eE,evaluate:nE,interpolate:el,variable:"",imports:{_:f}},f.prototype=Na.prototype,f.prototype.constructor=f,Pn.prototype=et(Na.prototype),Pn.prototype.constructor=Pn;function Te(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=re,this.__views__=[]}function Um(){var n=new Te(this.__wrapped__);return n.__actions__=Tn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Tn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Tn(this.__views__),n}function Hm(){if(this.__filtered__){var n=new Te(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function qm(){var n=this.__wrapped__.value(),r=this.__dir__,o=ve(n),u=r<0,g=o?n.length:0,p=rp(0,g,this.__views__),T=p.start,R=p.end,S=R-T,j=u?R:T-1,w=this.__iteratees__,H=w.length,Q=0,oe=sn(S,this.__takeCount__);if(!o||!u&&g==S&&oe==S)return mu(n,this.__actions__);var de=[];e:for(;S--&&Q<oe;){j+=r;for(var me=-1,ke=n[j];++me<H;){var pe=w[me],he=pe.iteratee,bn=pe.type,En=he(ke);if(bn==q)ke=En;else if(!En){if(bn==C)continue e;break e}}de[Q++]=ke}return de}Te.prototype=et(Na.prototype),Te.prototype.constructor=Te;function Fr(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var u=n[r];this.set(u[0],u[1])}}function xm(){this.__data__=_t?_t(null):{},this.size=0}function Ym(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function Cm(n){var r=this.__data__;if(_t){var o=r[n];return o===v?t:o}return Oe.call(r,n)?r[n]:t}function $m(n){var r=this.__data__;return _t?r[n]!==t:Oe.call(r,n)}function Jm(n,r){var o=this.__data__;return this.size+=this.has(n)?0:1,o[n]=_t&&r===t?v:r,this}Fr.prototype.clear=xm,Fr.prototype.delete=Ym,Fr.prototype.get=Cm,Fr.prototype.has=$m,Fr.prototype.set=Jm;function ur(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var u=n[r];this.set(u[0],u[1])}}function Wm(){this.__data__=[],this.size=0}function zm(n){var r=this.__data__,o=Sa(r,n);if(o<0)return!1;var u=r.length-1;return o==u?r.pop():ha.call(r,o,1),--this.size,!0}function Xm(n){var r=this.__data__,o=Sa(r,n);return o<0?t:r[o][1]}function Zm(n){return Sa(this.__data__,n)>-1}function Qm(n,r){var o=this.__data__,u=Sa(o,n);return u<0?(++this.size,o.push([n,r])):o[u][1]=r,this}ur.prototype.clear=Wm,ur.prototype.delete=zm,ur.prototype.get=Xm,ur.prototype.has=Zm,ur.prototype.set=Qm;function dr(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var u=n[r];this.set(u[0],u[1])}}function ef(){this.size=0,this.__data__={hash:new Fr,map:new(ct||ur),string:new Fr}}function nf(n){var r=Ga(this,n).delete(n);return this.size-=r?1:0,r}function rf(n){return Ga(this,n).get(n)}function tf(n){return Ga(this,n).has(n)}function af(n,r){var o=Ga(this,n),u=o.size;return o.set(n,r),this.size+=o.size==u?0:1,this}dr.prototype.clear=ef,dr.prototype.delete=nf,dr.prototype.get=rf,dr.prototype.has=tf,dr.prototype.set=af;function Mr(n){var r=-1,o=n==null?0:n.length;for(this.__data__=new dr;++r<o;)this.add(n[r])}function sf(n){return this.__data__.set(n,v),this}function of(n){return this.__data__.has(n)}Mr.prototype.add=Mr.prototype.push=sf,Mr.prototype.has=of;function Hn(n){var r=this.__data__=new ur(n);this.size=r.size}function lf(){this.__data__=new ur,this.size=0}function uf(n){var r=this.__data__,o=r.delete(n);return this.size=r.size,o}function df(n){return this.__data__.get(n)}function kf(n){return this.__data__.has(n)}function gf(n,r){var o=this.__data__;if(o instanceof ur){var u=o.__data__;if(!ct||u.length<s-1)return u.push([n,r]),this.size=++o.size,this;o=this.__data__=new dr(u)}return o.set(n,r),this.size=o.size,this}Hn.prototype.clear=lf,Hn.prototype.delete=uf,Hn.prototype.get=df,Hn.prototype.has=kf,Hn.prototype.set=gf;function Cl(n,r){var o=ve(n),u=!o&&wr(n),g=!o&&!u&&Ir(n),p=!o&&!u&&!g&&at(n),T=o||u||g||p,R=T?ji(n.length,Am):[],S=R.length;for(var j in n)(r||Oe.call(n,j))&&!(T&&(j=="length"||g&&(j=="offset"||j=="parent")||p&&(j=="buffer"||j=="byteLength"||j=="byteOffset")||Er(j,S)))&&R.push(j);return R}function $l(n){var r=n.length;return r?n[rs(0,r-1)]:t}function vf(n,r){return ja(Tn(n),Br(r,0,n.length))}function Ef(n){return ja(Tn(n))}function Ci(n,r,o){(o!==t&&!qn(n[r],o)||o===t&&!(r in n))&&kr(n,r,o)}function St(n,r,o){var u=n[r];(!(Oe.call(n,r)&&qn(u,o))||o===t&&!(r in n))&&kr(n,r,o)}function Sa(n,r){for(var o=n.length;o--;)if(qn(n[o][0],r))return o;return-1}function mf(n,r,o,u){return _r(n,function(g,p,T){r(u,g,o(g),T)}),u}function Jl(n,r){return n&&zn(r,en(r),n)}function ff(n,r){return n&&zn(r,yn(r),n)}function kr(n,r,o){r=="__proto__"&&ya?ya(n,r,{configurable:!0,enumerable:!0,value:o,writable:!0}):n[r]=o}function $i(n,r){for(var o=-1,u=r.length,g=D(u),p=n==null;++o<u;)g[o]=p?t:bs(n,r[o]);return g}function Br(n,r,o){return n===n&&(o!==t&&(n=n<=o?n:o),r!==t&&(n=n>=r?n:r)),n}function Fn(n,r,o,u,g,p){var T,R=r&h,S=r&A,j=r&L;if(o&&(T=g?o(n,u,g,p):o(n)),T!==t)return T;if(!Ue(n))return n;var w=ve(n);if(w){if(T=ap(n),!R)return Tn(n,T)}else{var H=on(n),Q=H==Qe||H==dn;if(Ir(n))return Tu(n,R);if(H==rn||H==we||Q&&!g){if(T=S||Q?{}:Vu(n),!R)return S?$f(n,ff(T,n)):Cf(n,Jl(T,n))}else{if(!Fe[H])return g?n:{};T=ip(n,H,R)}}p||(p=new Hn);var oe=p.get(n);if(oe)return oe;p.set(n,T),gd(n)?n.forEach(function(ke){T.add(Fn(ke,r,o,ke,n,p))}):dd(n)&&n.forEach(function(ke,pe){T.set(pe,Fn(ke,r,o,pe,n,p))});var de=j?S?vs:gs:S?yn:en,me=w?t:de(n);return Ln(me||n,function(ke,pe){me&&(pe=ke,ke=n[pe]),St(T,pe,Fn(ke,r,o,pe,n,p))}),T}function pf(n){var r=en(n);return function(o){return Wl(o,n,r)}}function Wl(n,r,o){var u=o.length;if(n==null)return!u;for(n=Pe(n);u--;){var g=o[u],p=r[g],T=n[g];if(T===t&&!(g in n)||!p(T))return!1}return!0}function zl(n,r,o){if(typeof n!="function")throw new Dn(d);return Pt(function(){n.apply(t,o)},r)}function bt(n,r,o,u){var g=-1,p=ua,T=!0,R=n.length,S=[],j=r.length;if(!R)return S;o&&(r=je(r,_n(o))),u?(p=Pi,T=!1):r.length>=s&&(p=yt,T=!1,r=new Mr(r));e:for(;++g<R;){var w=n[g],H=o==null?w:o(w);if(w=u||w!==0?w:0,T&&H===H){for(var Q=j;Q--;)if(r[Q]===H)continue e;S.push(w)}else p(r,H,u)||S.push(w)}return S}var _r=Ru(Wn),Xl=Ru(Wi,!0);function Tf(n,r){var o=!0;return _r(n,function(u,g,p){return o=!!r(u,g,p),o}),o}function ba(n,r,o){for(var u=-1,g=n.length;++u<g;){var p=n[u],T=r(p);if(T!=null&&(R===t?T===T&&!Sn(T):o(T,R)))var R=T,S=p}return S}function hf(n,r,o,u){var g=n.length;for(o=Ee(o),o<0&&(o=-o>g?0:g+o),u=u===t||u>g?g:Ee(u),u<0&&(u+=g),u=o>u?0:Ed(u);o<u;)n[o++]=r;return n}function Zl(n,r){var o=[];return _r(n,function(u,g,p){r(u,g,p)&&o.push(u)}),o}function an(n,r,o,u,g){var p=-1,T=n.length;for(o||(o=op),g||(g=[]);++p<T;){var R=n[p];r>0&&o(R)?r>1?an(R,r-1,o,u,g):Ar(g,R):u||(g[g.length]=R)}return g}var Ji=_u(),Ql=_u(!0);function Wn(n,r){return n&&Ji(n,r,en)}function Wi(n,r){return n&&Ql(n,r,en)}function Ia(n,r){return yr(r,function(o){return mr(n[o])})}function Vr(n,r){r=Sr(r,n);for(var o=0,u=r.length;n!=null&&o<u;)n=n[Xn(r[o++])];return o&&o==u?n:t}function eu(n,r,o){var u=r(n);return ve(n)?u:Ar(u,o(n))}function gn(n){return n==null?n===t?$v:or:Pr&&Pr in Pe(n)?np(n):Ep(n)}function zi(n,r){return n>r}function yf(n,r){return n!=null&&Oe.call(n,r)}function Af(n,r){return n!=null&&r in Pe(n)}function cf(n,r,o){return n>=sn(r,o)&&n<Ze(r,o)}function Xi(n,r,o){for(var u=o?Pi:ua,g=n[0].length,p=n.length,T=p,R=D(p),S=1/0,j=[];T--;){var w=n[T];T&&r&&(w=je(w,_n(r))),S=sn(w.length,S),R[T]=!o&&(r||g>=120&&w.length>=120)?new Mr(T&&w):t}w=n[0];var H=-1,Q=R[0];e:for(;++H<g&&j.length<S;){var oe=w[H],de=r?r(oe):oe;if(oe=o||oe!==0?oe:0,!(Q?yt(Q,de):u(j,de,o))){for(T=p;--T;){var me=R[T];if(!(me?yt(me,de):u(n[T],de,o)))continue e}Q&&Q.push(de),j.push(oe)}}return j}function Rf(n,r,o,u){return Wn(n,function(g,p,T){r(u,o(g),p,T)}),u}function It(n,r,o){r=Sr(r,n),n=Uu(n,r);var u=n==null?n:n[Xn(Bn(r))];return u==null?t:Rn(u,n,o)}function nu(n){return Ye(n)&&gn(n)==we}function _f(n){return Ye(n)&&gn(n)==ht}function Nf(n){return Ye(n)&&gn(n)==ze}function Kt(n,r,o,u,g){return n===r?!0:n==null||r==null||!Ye(n)&&!Ye(r)?n!==n&&r!==r:Sf(n,r,o,u,Kt,g)}function Sf(n,r,o,u,g,p){var T=ve(n),R=ve(r),S=T?ln:on(n),j=R?ln:on(r);S=S==we?rn:S,j=j==we?rn:j;var w=S==rn,H=j==rn,Q=S==j;if(Q&&Ir(n)){if(!Ir(r))return!1;T=!0,w=!1}if(Q&&!w)return p||(p=new Hn),T||at(n)?Fu(n,r,o,u,g,p):Qf(n,r,S,o,u,g,p);if(!(o&P)){var oe=w&&Oe.call(n,"__wrapped__"),de=H&&Oe.call(r,"__wrapped__");if(oe||de){var me=oe?n.value():n,ke=de?r.value():r;return p||(p=new Hn),g(me,ke,o,u,p)}}return Q?(p||(p=new Hn),ep(n,r,o,u,g,p)):!1}function bf(n){return Ye(n)&&on(n)==$e}function Zi(n,r,o,u){var g=o.length,p=g,T=!u;if(n==null)return!p;for(n=Pe(n);g--;){var R=o[g];if(T&&R[2]?R[1]!==n[R[0]]:!(R[0]in n))return!1}for(;++g<p;){R=o[g];var S=R[0],j=n[S],w=R[1];if(T&&R[2]){if(j===t&&!(S in n))return!1}else{var H=new Hn;if(u)var Q=u(j,w,S,n,r,H);if(!(Q===t?Kt(w,j,P|y,u,H):Q))return!1}}return!0}function ru(n){if(!Ue(n)||up(n))return!1;var r=mr(n)?Sm:fE;return r.test(jr(n))}function If(n){return Ye(n)&&gn(n)==ft}function Kf(n){return Ye(n)&&on(n)==wn}function Of(n){return Ye(n)&&Ya(n.length)&&!!Me[gn(n)]}function tu(n){return typeof n=="function"?n:n==null?An:typeof n=="object"?ve(n)?su(n[0],n[1]):iu(n):Nd(n)}function Qi(n){if(!Dt(n))return Dm(n);var r=[];for(var o in Pe(n))Oe.call(n,o)&&o!="constructor"&&r.push(o);return r}function Lf(n){if(!Ue(n))return vp(n);var r=Dt(n),o=[];for(var u in n)u=="constructor"&&(r||!Oe.call(n,u))||o.push(u);return o}function es(n,r){return n<r}function au(n,r){var o=-1,u=hn(n)?D(n.length):[];return _r(n,function(g,p,T){u[++o]=r(g,p,T)}),u}function iu(n){var r=ms(n);return r.length==1&&r[0][2]?ju(r[0][0],r[0][1]):function(o){return o===n||Zi(o,n,r)}}function su(n,r){return ps(n)&&Gu(r)?ju(Xn(n),r):function(o){var u=bs(o,n);return u===t&&u===r?Is(o,n):Kt(r,u,P|y)}}function Ka(n,r,o,u,g){n!==r&&Ji(r,function(p,T){if(g||(g=new Hn),Ue(p))Df(n,r,T,o,Ka,u,g);else{var R=u?u(hs(n,T),p,T+"",n,r,g):t;R===t&&(R=p),Ci(n,T,R)}},yn)}function Df(n,r,o,u,g,p,T){var R=hs(n,o),S=hs(r,o),j=T.get(S);if(j){Ci(n,o,j);return}var w=p?p(R,S,o+"",n,r,T):t,H=w===t;if(H){var Q=ve(S),oe=!Q&&Ir(S),de=!Q&&!oe&&at(S);w=S,Q||oe||de?ve(R)?w=R:Je(R)?w=Tn(R):oe?(H=!1,w=Tu(S,!0)):de?(H=!1,w=hu(S,!0)):w=[]:Ft(S)||wr(S)?(w=R,wr(R)?w=md(R):(!Ue(R)||mr(R))&&(w=Vu(S))):H=!1}H&&(T.set(S,w),g(w,S,u,p,T),T.delete(S)),Ci(n,o,w)}function ou(n,r){var o=n.length;if(o)return r+=r<0?o:0,Er(r,o)?n[r]:t}function lu(n,r,o){r.length?r=je(r,function(p){return ve(p)?function(T){return Vr(T,p.length===1?p[0]:p)}:p}):r=[An];var u=-1;r=je(r,_n(ue()));var g=au(n,function(p,T,R){var S=je(r,function(j){return j(p)});return{criteria:S,index:++u,value:p}});return am(g,function(p,T){return Yf(p,T,o)})}function Pf(n,r){return uu(n,r,function(o,u){return Is(n,u)})}function uu(n,r,o){for(var u=-1,g=r.length,p={};++u<g;){var T=r[u],R=Vr(n,T);o(R,T)&&Ot(p,Sr(T,n),R)}return p}function Ff(n){return function(r){return Vr(r,n)}}function ns(n,r,o,u){var g=u?tm:$r,p=-1,T=r.length,R=n;for(n===r&&(r=Tn(r)),o&&(R=je(n,_n(o)));++p<T;)for(var S=0,j=r[p],w=o?o(j):j;(S=g(R,w,S,u))>-1;)R!==n&&ha.call(R,S,1),ha.call(n,S,1);return n}function du(n,r){for(var o=n?r.length:0,u=o-1;o--;){var g=r[o];if(o==u||g!==p){var p=g;Er(g)?ha.call(n,g,1):is(n,g)}}return n}function rs(n,r){return n+ca(xl()*(r-n+1))}function Mf(n,r,o,u){for(var g=-1,p=Ze(Aa((r-n)/(o||1)),0),T=D(p);p--;)T[u?p:++g]=n,n+=o;return T}function ts(n,r){var o="";if(!n||r<1||r>x)return o;do r%2&&(o+=n),r=ca(r/2),r&&(n+=n);while(r);return o}function fe(n,r){return ys(wu(n,r,An),n+"")}function Bf(n){return $l(it(n))}function Vf(n,r){var o=it(n);return ja(o,Br(r,0,o.length))}function Ot(n,r,o,u){if(!Ue(n))return n;r=Sr(r,n);for(var g=-1,p=r.length,T=p-1,R=n;R!=null&&++g<p;){var S=Xn(r[g]),j=o;if(S==="__proto__"||S==="constructor"||S==="prototype")return n;if(g!=T){var w=R[S];j=u?u(w,S,R):t,j===t&&(j=Ue(w)?w:Er(r[g+1])?[]:{})}St(R,S,j),R=R[S]}return n}var ku=Ra?function(n,r){return Ra.set(n,r),n}:An,Gf=ya?function(n,r){return ya(n,"toString",{configurable:!0,enumerable:!1,value:Os(r),writable:!0})}:An;function jf(n){return ja(it(n))}function Mn(n,r,o){var u=-1,g=n.length;r<0&&(r=-r>g?0:g+r),o=o>g?g:o,o<0&&(o+=g),g=r>o?0:o-r>>>0,r>>>=0;for(var p=D(g);++u<g;)p[u]=n[u+r];return p}function wf(n,r){var o;return _r(n,function(u,g,p){return o=r(u,g,p),!o}),!!o}function Oa(n,r,o){var u=0,g=n==null?u:n.length;if(typeof r=="number"&&r===r&&g<=Se){for(;u<g;){var p=u+g>>>1,T=n[p];T!==null&&!Sn(T)&&(o?T<=r:T<r)?u=p+1:g=p}return g}return as(n,r,An,o)}function as(n,r,o,u){var g=0,p=n==null?0:n.length;if(p===0)return 0;r=o(r);for(var T=r!==r,R=r===null,S=Sn(r),j=r===t;g<p;){var w=ca((g+p)/2),H=o(n[w]),Q=H!==t,oe=H===null,de=H===H,me=Sn(H);if(T)var ke=u||de;else j?ke=de&&(u||Q):R?ke=de&&Q&&(u||!oe):S?ke=de&&Q&&!oe&&(u||!me):oe||me?ke=!1:ke=u?H<=r:H<r;ke?g=w+1:p=w}return sn(p,_e)}function gu(n,r){for(var o=-1,u=n.length,g=0,p=[];++o<u;){var T=n[o],R=r?r(T):T;if(!o||!qn(R,S)){var S=R;p[g++]=T===0?0:T}}return p}function vu(n){return typeof n=="number"?n:Sn(n)?ae:+n}function Nn(n){if(typeof n=="string")return n;if(ve(n))return je(n,Nn)+"";if(Sn(n))return Yl?Yl.call(n):"";var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}function Nr(n,r,o){var u=-1,g=ua,p=n.length,T=!0,R=[],S=R;if(o)T=!1,g=Pi;else if(p>=s){var j=r?null:Xf(n);if(j)return ka(j);T=!1,g=yt,S=new Mr}else S=r?[]:R;e:for(;++u<p;){var w=n[u],H=r?r(w):w;if(w=o||w!==0?w:0,T&&H===H){for(var Q=S.length;Q--;)if(S[Q]===H)continue e;r&&S.push(H),R.push(w)}else g(S,H,o)||(S!==R&&S.push(H),R.push(w))}return R}function is(n,r){return r=Sr(r,n),n=Uu(n,r),n==null||delete n[Xn(Bn(r))]}function Eu(n,r,o,u){return Ot(n,r,o(Vr(n,r)),u)}function La(n,r,o,u){for(var g=n.length,p=u?g:-1;(u?p--:++p<g)&&r(n[p],p,n););return o?Mn(n,u?0:p,u?p+1:g):Mn(n,u?p+1:0,u?g:p)}function mu(n,r){var o=n;return o instanceof Te&&(o=o.value()),Fi(r,function(u,g){return g.func.apply(g.thisArg,Ar([u],g.args))},o)}function ss(n,r,o){var u=n.length;if(u<2)return u?Nr(n[0]):[];for(var g=-1,p=D(u);++g<u;)for(var T=n[g],R=-1;++R<u;)R!=g&&(p[g]=bt(p[g]||T,n[R],r,o));return Nr(an(p,1),r,o)}function fu(n,r,o){for(var u=-1,g=n.length,p=r.length,T={};++u<g;){var R=u<p?r[u]:t;o(T,n[u],R)}return T}function os(n){return Je(n)?n:[]}function ls(n){return typeof n=="function"?n:An}function Sr(n,r){return ve(n)?n:ps(n,r)?[n]:Yu(be(n))}var Uf=fe;function br(n,r,o){var u=n.length;return o=o===t?u:o,!r&&o>=u?n:Mn(n,r,o)}var pu=bm||function(n){return tn.clearTimeout(n)};function Tu(n,r){if(r)return n.slice();var o=n.length,u=jl?jl(o):new n.constructor(o);return n.copy(u),u}function us(n){var r=new n.constructor(n.byteLength);return new pa(r).set(new pa(n)),r}function Hf(n,r){var o=r?us(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.byteLength)}function qf(n){var r=new n.constructor(n.source,nl.exec(n));return r.lastIndex=n.lastIndex,r}function xf(n){return Nt?Pe(Nt.call(n)):{}}function hu(n,r){var o=r?us(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.length)}function yu(n,r){if(n!==r){var o=n!==t,u=n===null,g=n===n,p=Sn(n),T=r!==t,R=r===null,S=r===r,j=Sn(r);if(!R&&!j&&!p&&n>r||p&&T&&S&&!R&&!j||u&&T&&S||!o&&S||!g)return 1;if(!u&&!p&&!j&&n<r||j&&o&&g&&!u&&!p||R&&o&&g||!T&&g||!S)return-1}return 0}function Yf(n,r,o){for(var u=-1,g=n.criteria,p=r.criteria,T=g.length,R=o.length;++u<T;){var S=yu(g[u],p[u]);if(S){if(u>=R)return S;var j=o[u];return S*(j=="desc"?-1:1)}}return n.index-r.index}function Au(n,r,o,u){for(var g=-1,p=n.length,T=o.length,R=-1,S=r.length,j=Ze(p-T,0),w=D(S+j),H=!u;++R<S;)w[R]=r[R];for(;++g<T;)(H||g<p)&&(w[o[g]]=n[g]);for(;j--;)w[R++]=n[g++];return w}function cu(n,r,o,u){for(var g=-1,p=n.length,T=-1,R=o.length,S=-1,j=r.length,w=Ze(p-R,0),H=D(w+j),Q=!u;++g<w;)H[g]=n[g];for(var oe=g;++S<j;)H[oe+S]=r[S];for(;++T<R;)(Q||g<p)&&(H[oe+o[T]]=n[g++]);return H}function Tn(n,r){var o=-1,u=n.length;for(r||(r=D(u));++o<u;)r[o]=n[o];return r}function zn(n,r,o,u){var g=!o;o||(o={});for(var p=-1,T=r.length;++p<T;){var R=r[p],S=u?u(o[R],n[R],R,o,n):t;S===t&&(S=n[R]),g?kr(o,R,S):St(o,R,S)}return o}function Cf(n,r){return zn(n,fs(n),r)}function $f(n,r){return zn(n,Mu(n),r)}function Da(n,r){return function(o,u){var g=ve(o)?XE:mf,p=r?r():{};return g(o,n,ue(u,2),p)}}function nt(n){return fe(function(r,o){var u=-1,g=o.length,p=g>1?o[g-1]:t,T=g>2?o[2]:t;for(p=n.length>3&&typeof p=="function"?(g--,p):t,T&&vn(o[0],o[1],T)&&(p=g<3?t:p,g=1),r=Pe(r);++u<g;){var R=o[u];R&&n(r,R,u,p)}return r})}function Ru(n,r){return function(o,u){if(o==null)return o;if(!hn(o))return n(o,u);for(var g=o.length,p=r?g:-1,T=Pe(o);(r?p--:++p<g)&&u(T[p],p,T)!==!1;);return o}}function _u(n){return function(r,o,u){for(var g=-1,p=Pe(r),T=u(r),R=T.length;R--;){var S=T[n?R:++g];if(o(p[S],S,p)===!1)break}return r}}function Jf(n,r,o){var u=r&_,g=Lt(n);function p(){var T=this&&this!==tn&&this instanceof p?g:n;return T.apply(u?o:this,arguments)}return p}function Nu(n){return function(r){r=be(r);var o=Jr(r)?Un(r):t,u=o?o[0]:r.charAt(0),g=o?br(o,1).join(""):r.slice(1);return u[n]()+g}}function rt(n){return function(r){return Fi(Rd(cd(r).replace(VE,"")),n,"")}}function Lt(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var o=et(n.prototype),u=n.apply(o,r);return Ue(u)?u:o}}function Wf(n,r,o){var u=Lt(n);function g(){for(var p=arguments.length,T=D(p),R=p,S=tt(g);R--;)T[R]=arguments[R];var j=p<3&&T[0]!==S&&T[p-1]!==S?[]:cr(T,S);if(p-=j.length,p<o)return Ou(n,r,Pa,g.placeholder,t,T,j,t,t,o-p);var w=this&&this!==tn&&this instanceof g?u:n;return Rn(w,this,T)}return g}function Su(n){return function(r,o,u){var g=Pe(r);if(!hn(r)){var p=ue(o,3);r=en(r),o=function(R){return p(g[R],R,g)}}var T=n(r,o,u);return T>-1?g[p?r[T]:T]:t}}function bu(n){return vr(function(r){var o=r.length,u=o,g=Pn.prototype.thru;for(n&&r.reverse();u--;){var p=r[u];if(typeof p!="function")throw new Dn(d);if(g&&!T&&Va(p)=="wrapper")var T=new Pn([],!0)}for(u=T?u:o;++u<o;){p=r[u];var R=Va(p),S=R=="wrapper"?Es(p):t;S&&Ts(S[0])&&S[1]==(O|b|c|I)&&!S[4].length&&S[9]==1?T=T[Va(S[0])].apply(T,S[3]):T=p.length==1&&Ts(p)?T[R]():T.thru(p)}return function(){var j=arguments,w=j[0];if(T&&j.length==1&&ve(w))return T.plant(w).value();for(var H=0,Q=o?r[H].apply(this,j):w;++H<o;)Q=r[H].call(this,Q);return Q}})}function Pa(n,r,o,u,g,p,T,R,S,j){var w=r&O,H=r&_,Q=r&K,oe=r&(b|X),de=r&Y,me=Q?t:Lt(n);function ke(){for(var pe=arguments.length,he=D(pe),bn=pe;bn--;)he[bn]=arguments[bn];if(oe)var En=tt(ke),In=sm(he,En);if(u&&(he=Au(he,u,g,oe)),p&&(he=cu(he,p,T,oe)),pe-=In,oe&&pe<j){var We=cr(he,En);return Ou(n,r,Pa,ke.placeholder,o,he,We,R,S,j-pe)}var xn=H?o:this,pr=Q?xn[n]:n;return pe=he.length,R?he=mp(he,R):de&&pe>1&&he.reverse(),w&&S<pe&&(he.length=S),this&&this!==tn&&this instanceof ke&&(pr=me||Lt(pr)),pr.apply(xn,he)}return ke}function Iu(n,r){return function(o,u){return Rf(o,n,r(u),{})}}function Fa(n,r){return function(o,u){var g;if(o===t&&u===t)return r;if(o!==t&&(g=o),u!==t){if(g===t)return u;typeof o=="string"||typeof u=="string"?(o=Nn(o),u=Nn(u)):(o=vu(o),u=vu(u)),g=n(o,u)}return g}}function ds(n){return vr(function(r){return r=je(r,_n(ue())),fe(function(o){var u=this;return n(r,function(g){return Rn(g,u,o)})})})}function Ma(n,r){r=r===t?" ":Nn(r);var o=r.length;if(o<2)return o?ts(r,n):r;var u=ts(r,Aa(n/Wr(r)));return Jr(r)?br(Un(u),0,n).join(""):u.slice(0,n)}function zf(n,r,o,u){var g=r&_,p=Lt(n);function T(){for(var R=-1,S=arguments.length,j=-1,w=u.length,H=D(w+S),Q=this&&this!==tn&&this instanceof T?p:n;++j<w;)H[j]=u[j];for(;S--;)H[j++]=arguments[++R];return Rn(Q,g?o:this,H)}return T}function Ku(n){return function(r,o,u){return u&&typeof u!="number"&&vn(r,o,u)&&(o=u=t),r=fr(r),o===t?(o=r,r=0):o=fr(o),u=u===t?r<o?1:-1:fr(u),Mf(r,o,u,n)}}function Ba(n){return function(r,o){return typeof r=="string"&&typeof o=="string"||(r=Vn(r),o=Vn(o)),n(r,o)}}function Ou(n,r,o,u,g,p,T,R,S,j){var w=r&b,H=w?T:t,Q=w?t:T,oe=w?p:t,de=w?t:p;r|=w?c:M,r&=~(w?M:c),r&G||(r&=-4);var me=[n,r,g,oe,H,de,Q,R,S,j],ke=o.apply(t,me);return Ts(n)&&Hu(ke,me),ke.placeholder=u,qu(ke,n,r)}function ks(n){var r=Xe[n];return function(o,u){if(o=Vn(o),u=u==null?0:sn(Ee(u),292),u&&ql(o)){var g=(be(o)+"e").split("e"),p=r(g[0]+"e"+(+g[1]+u));return g=(be(p)+"e").split("e"),+(g[0]+"e"+(+g[1]-u))}return r(o)}}var Xf=Zr&&1/ka(new Zr([,-0]))[1]==Z?function(n){return new Zr(n)}:Ps;function Lu(n){return function(r){var o=on(r);return o==$e?Ui(r):o==wn?vm(r):im(r,n(r))}}function gr(n,r,o,u,g,p,T,R){var S=r&K;if(!S&&typeof n!="function")throw new Dn(d);var j=u?u.length:0;if(j||(r&=-97,u=g=t),T=T===t?T:Ze(Ee(T),0),R=R===t?R:Ee(R),j-=g?g.length:0,r&M){var w=u,H=g;u=g=t}var Q=S?t:Es(n),oe=[n,r,o,u,g,w,H,p,T,R];if(Q&&gp(oe,Q),n=oe[0],r=oe[1],o=oe[2],u=oe[3],g=oe[4],R=oe[9]=oe[9]===t?S?0:n.length:Ze(oe[9]-j,0),!R&&r&(b|X)&&(r&=-25),!r||r==_)var de=Jf(n,r,o);else r==b||r==X?de=Wf(n,r,R):(r==c||r==(_|c))&&!g.length?de=zf(n,r,o,u):de=Pa.apply(t,oe);var me=Q?ku:Hu;return qu(me(de,oe),n,r)}function Du(n,r,o,u){return n===t||qn(n,Xr[o])&&!Oe.call(u,o)?r:n}function Pu(n,r,o,u,g,p){return Ue(n)&&Ue(r)&&(p.set(r,n),Ka(n,r,t,Pu,p),p.delete(r)),n}function Zf(n){return Ft(n)?t:n}function Fu(n,r,o,u,g,p){var T=o&P,R=n.length,S=r.length;if(R!=S&&!(T&&S>R))return!1;var j=p.get(n),w=p.get(r);if(j&&w)return j==r&&w==n;var H=-1,Q=!0,oe=o&y?new Mr:t;for(p.set(n,r),p.set(r,n);++H<R;){var de=n[H],me=r[H];if(u)var ke=T?u(me,de,H,r,n,p):u(de,me,H,n,r,p);if(ke!==t){if(ke)continue;Q=!1;break}if(oe){if(!Mi(r,function(pe,he){if(!yt(oe,he)&&(de===pe||g(de,pe,o,u,p)))return oe.push(he)})){Q=!1;break}}else if(!(de===me||g(de,me,o,u,p))){Q=!1;break}}return p.delete(n),p.delete(r),Q}function Qf(n,r,o,u,g,p,T){switch(o){case Yr:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case ht:return!(n.byteLength!=r.byteLength||!p(new pa(n),new pa(r)));case un:case ze:case kn:return qn(+n,+r);case Ce:return n.name==r.name&&n.message==r.message;case ft:case pt:return n==r+"";case $e:var R=Ui;case wn:var S=u&P;if(R||(R=ka),n.size!=r.size&&!S)return!1;var j=T.get(n);if(j)return j==r;u|=y,T.set(n,r);var w=Fu(R(n),R(r),u,g,p,T);return T.delete(n),w;case ia:if(Nt)return Nt.call(n)==Nt.call(r)}return!1}function ep(n,r,o,u,g,p){var T=o&P,R=gs(n),S=R.length,j=gs(r),w=j.length;if(S!=w&&!T)return!1;for(var H=S;H--;){var Q=R[H];if(!(T?Q in r:Oe.call(r,Q)))return!1}var oe=p.get(n),de=p.get(r);if(oe&&de)return oe==r&&de==n;var me=!0;p.set(n,r),p.set(r,n);for(var ke=T;++H<S;){Q=R[H];var pe=n[Q],he=r[Q];if(u)var bn=T?u(he,pe,Q,r,n,p):u(pe,he,Q,n,r,p);if(!(bn===t?pe===he||g(pe,he,o,u,p):bn)){me=!1;break}ke||(ke=Q=="constructor")}if(me&&!ke){var En=n.constructor,In=r.constructor;En!=In&&"constructor"in n&&"constructor"in r&&!(typeof En=="function"&&En instanceof En&&typeof In=="function"&&In instanceof In)&&(me=!1)}return p.delete(n),p.delete(r),me}function vr(n){return ys(wu(n,t,Wu),n+"")}function gs(n){return eu(n,en,fs)}function vs(n){return eu(n,yn,Mu)}var Es=Ra?function(n){return Ra.get(n)}:Ps;function Va(n){for(var r=n.name+"",o=Qr[r],u=Oe.call(Qr,r)?o.length:0;u--;){var g=o[u],p=g.func;if(p==null||p==n)return g.name}return r}function tt(n){var r=Oe.call(f,"placeholder")?f:n;return r.placeholder}function ue(){var n=f.iteratee||Ls;return n=n===Ls?tu:n,arguments.length?n(arguments[0],arguments[1]):n}function Ga(n,r){var o=n.__data__;return lp(r)?o[typeof r=="string"?"string":"hash"]:o.map}function ms(n){for(var r=en(n),o=r.length;o--;){var u=r[o],g=n[u];r[o]=[u,g,Gu(g)]}return r}function Gr(n,r){var o=dm(n,r);return ru(o)?o:t}function np(n){var r=Oe.call(n,Pr),o=n[Pr];try{n[Pr]=t;var u=!0}catch{}var g=ma.call(n);return u&&(r?n[Pr]=o:delete n[Pr]),g}var fs=qi?function(n){return n==null?[]:(n=Pe(n),yr(qi(n),function(r){return Ul.call(n,r)}))}:Fs,Mu=qi?function(n){for(var r=[];n;)Ar(r,fs(n)),n=Ta(n);return r}:Fs,on=gn;(xi&&on(new xi(new ArrayBuffer(1)))!=Yr||ct&&on(new ct)!=$e||Yi&&on(Yi.resolve())!=Jn||Zr&&on(new Zr)!=wn||Rt&&on(new Rt)!=Tt)&&(on=function(n){var r=gn(n),o=r==rn?n.constructor:t,u=o?jr(o):"";if(u)switch(u){case Bm:return Yr;case Vm:return $e;case Gm:return Jn;case jm:return wn;case wm:return Tt}return r});function rp(n,r,o){for(var u=-1,g=o.length;++u<g;){var p=o[u],T=p.size;switch(p.type){case"drop":n+=T;break;case"dropRight":r-=T;break;case"take":r=sn(r,n+T);break;case"takeRight":n=Ze(n,r-T);break}}return{start:n,end:r}}function tp(n){var r=n.match(lE);return r?r[1].split(uE):[]}function Bu(n,r,o){r=Sr(r,n);for(var u=-1,g=r.length,p=!1;++u<g;){var T=Xn(r[u]);if(!(p=n!=null&&o(n,T)))break;n=n[T]}return p||++u!=g?p:(g=n==null?0:n.length,!!g&&Ya(g)&&Er(T,g)&&(ve(n)||wr(n)))}function ap(n){var r=n.length,o=new n.constructor(r);return r&&typeof n[0]=="string"&&Oe.call(n,"index")&&(o.index=n.index,o.input=n.input),o}function Vu(n){return typeof n.constructor=="function"&&!Dt(n)?et(Ta(n)):{}}function ip(n,r,o){var u=n.constructor;switch(r){case ht:return us(n);case un:case ze:return new u(+n);case Yr:return Hf(n,o);case mi:case fi:case pi:case Ti:case hi:case yi:case Ai:case ci:case Ri:return hu(n,o);case $e:return new u;case kn:case pt:return new u(n);case ft:return qf(n);case wn:return new u;case ia:return xf(n)}}function sp(n,r){var o=r.length;if(!o)return n;var u=o-1;return r[u]=(o>1?"& ":"")+r[u],r=r.join(o>2?", ":" "),n.replace(oE,`{
/* [wrapped with `+r+`] */
`)}function op(n){return ve(n)||wr(n)||!!(Hl&&n&&n[Hl])}function Er(n,r){var o=typeof n;return r=r??x,!!r&&(o=="number"||o!="symbol"&&TE.test(n))&&n>-1&&n%1==0&&n<r}function vn(n,r,o){if(!Ue(o))return!1;var u=typeof r;return(u=="number"?hn(o)&&Er(r,o.length):u=="string"&&r in o)?qn(o[r],n):!1}function ps(n,r){if(ve(n))return!1;var o=typeof n;return o=="number"||o=="symbol"||o=="boolean"||n==null||Sn(n)?!0:tE.test(n)||!rE.test(n)||r!=null&&n in Pe(r)}function lp(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function Ts(n){var r=Va(n),o=f[r];if(typeof o!="function"||!(r in Te.prototype))return!1;if(n===o)return!0;var u=Es(o);return!!u&&n===u[0]}function up(n){return!!Gl&&Gl in n}var dp=va?mr:Ms;function Dt(n){var r=n&&n.constructor,o=typeof r=="function"&&r.prototype||Xr;return n===o}function Gu(n){return n===n&&!Ue(n)}function ju(n,r){return function(o){return o==null?!1:o[n]===r&&(r!==t||n in Pe(o))}}function kp(n){var r=qa(n,function(u){return o.size===E&&o.clear(),u}),o=r.cache;return r}function gp(n,r){var o=n[1],u=r[1],g=o|u,p=g<(_|K|O),T=u==O&&o==b||u==O&&o==I&&n[7].length<=r[8]||u==(O|I)&&r[7].length<=r[8]&&o==b;if(!(p||T))return n;u&_&&(n[2]=r[2],g|=o&_?0:G);var R=r[3];if(R){var S=n[3];n[3]=S?Au(S,R,r[4]):R,n[4]=S?cr(n[3],m):r[4]}return R=r[5],R&&(S=n[5],n[5]=S?cu(S,R,r[6]):R,n[6]=S?cr(n[5],m):r[6]),R=r[7],R&&(n[7]=R),u&O&&(n[8]=n[8]==null?r[8]:sn(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=g,n}function vp(n){var r=[];if(n!=null)for(var o in Pe(n))r.push(o);return r}function Ep(n){return ma.call(n)}function wu(n,r,o){return r=Ze(r===t?n.length-1:r,0),function(){for(var u=arguments,g=-1,p=Ze(u.length-r,0),T=D(p);++g<p;)T[g]=u[r+g];g=-1;for(var R=D(r+1);++g<r;)R[g]=u[g];return R[r]=o(T),Rn(n,this,R)}}function Uu(n,r){return r.length<2?n:Vr(n,Mn(r,0,-1))}function mp(n,r){for(var o=n.length,u=sn(r.length,o),g=Tn(n);u--;){var p=r[u];n[u]=Er(p,o)?g[p]:t}return n}function hs(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var Hu=xu(ku),Pt=Km||function(n,r){return tn.setTimeout(n,r)},ys=xu(Gf);function qu(n,r,o){var u=r+"";return ys(n,sp(u,fp(tp(u),o)))}function xu(n){var r=0,o=0;return function(){var u=Pm(),g=W-(u-o);if(o=u,g>0){if(++r>=ne)return arguments[0]}else r=0;return n.apply(t,arguments)}}function ja(n,r){var o=-1,u=n.length,g=u-1;for(r=r===t?u:r;++o<r;){var p=rs(o,g),T=n[p];n[p]=n[o],n[o]=T}return n.length=r,n}var Yu=kp(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(aE,function(o,u,g,p){r.push(g?p.replace(gE,"$1"):u||o)}),r});function Xn(n){if(typeof n=="string"||Sn(n))return n;var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}function jr(n){if(n!=null){try{return Ea.call(n)}catch{}try{return n+""}catch{}}return""}function fp(n,r){return Ln(qe,function(o){var u="_."+o[0];r&o[1]&&!ua(n,u)&&n.push(u)}),n.sort()}function Cu(n){if(n instanceof Te)return n.clone();var r=new Pn(n.__wrapped__,n.__chain__);return r.__actions__=Tn(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function pp(n,r,o){(o?vn(n,r,o):r===t)?r=1:r=Ze(Ee(r),0);var u=n==null?0:n.length;if(!u||r<1)return[];for(var g=0,p=0,T=D(Aa(u/r));g<u;)T[p++]=Mn(n,g,g+=r);return T}function Tp(n){for(var r=-1,o=n==null?0:n.length,u=0,g=[];++r<o;){var p=n[r];p&&(g[u++]=p)}return g}function hp(){var n=arguments.length;if(!n)return[];for(var r=D(n-1),o=arguments[0],u=n;u--;)r[u-1]=arguments[u];return Ar(ve(o)?Tn(o):[o],an(r,1))}var yp=fe(function(n,r){return Je(n)?bt(n,an(r,1,Je,!0)):[]}),Ap=fe(function(n,r){var o=Bn(r);return Je(o)&&(o=t),Je(n)?bt(n,an(r,1,Je,!0),ue(o,2)):[]}),cp=fe(function(n,r){var o=Bn(r);return Je(o)&&(o=t),Je(n)?bt(n,an(r,1,Je,!0),t,o):[]});function Rp(n,r,o){var u=n==null?0:n.length;return u?(r=o||r===t?1:Ee(r),Mn(n,r<0?0:r,u)):[]}function _p(n,r,o){var u=n==null?0:n.length;return u?(r=o||r===t?1:Ee(r),r=u-r,Mn(n,0,r<0?0:r)):[]}function Np(n,r){return n&&n.length?La(n,ue(r,3),!0,!0):[]}function Sp(n,r){return n&&n.length?La(n,ue(r,3),!0):[]}function bp(n,r,o,u){var g=n==null?0:n.length;return g?(o&&typeof o!="number"&&vn(n,r,o)&&(o=0,u=g),hf(n,r,o,u)):[]}function $u(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var g=o==null?0:Ee(o);return g<0&&(g=Ze(u+g,0)),da(n,ue(r,3),g)}function Ju(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var g=u-1;return o!==t&&(g=Ee(o),g=o<0?Ze(u+g,0):sn(g,u-1)),da(n,ue(r,3),g,!0)}function Wu(n){var r=n==null?0:n.length;return r?an(n,1):[]}function Ip(n){var r=n==null?0:n.length;return r?an(n,Z):[]}function Kp(n,r){var o=n==null?0:n.length;return o?(r=r===t?1:Ee(r),an(n,r)):[]}function Op(n){for(var r=-1,o=n==null?0:n.length,u={};++r<o;){var g=n[r];u[g[0]]=g[1]}return u}function zu(n){return n&&n.length?n[0]:t}function Lp(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var g=o==null?0:Ee(o);return g<0&&(g=Ze(u+g,0)),$r(n,r,g)}function Dp(n){var r=n==null?0:n.length;return r?Mn(n,0,-1):[]}var Pp=fe(function(n){var r=je(n,os);return r.length&&r[0]===n[0]?Xi(r):[]}),Fp=fe(function(n){var r=Bn(n),o=je(n,os);return r===Bn(o)?r=t:o.pop(),o.length&&o[0]===n[0]?Xi(o,ue(r,2)):[]}),Mp=fe(function(n){var r=Bn(n),o=je(n,os);return r=typeof r=="function"?r:t,r&&o.pop(),o.length&&o[0]===n[0]?Xi(o,t,r):[]});function Bp(n,r){return n==null?"":Lm.call(n,r)}function Bn(n){var r=n==null?0:n.length;return r?n[r-1]:t}function Vp(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var g=u;return o!==t&&(g=Ee(o),g=g<0?Ze(u+g,0):sn(g,u-1)),r===r?mm(n,r,g):da(n,Ol,g,!0)}function Gp(n,r){return n&&n.length?ou(n,Ee(r)):t}var jp=fe(Xu);function Xu(n,r){return n&&n.length&&r&&r.length?ns(n,r):n}function wp(n,r,o){return n&&n.length&&r&&r.length?ns(n,r,ue(o,2)):n}function Up(n,r,o){return n&&n.length&&r&&r.length?ns(n,r,t,o):n}var Hp=vr(function(n,r){var o=n==null?0:n.length,u=$i(n,r);return du(n,je(r,function(g){return Er(g,o)?+g:g}).sort(yu)),u});function qp(n,r){var o=[];if(!(n&&n.length))return o;var u=-1,g=[],p=n.length;for(r=ue(r,3);++u<p;){var T=n[u];r(T,u,n)&&(o.push(T),g.push(u))}return du(n,g),o}function As(n){return n==null?n:Mm.call(n)}function xp(n,r,o){var u=n==null?0:n.length;return u?(o&&typeof o!="number"&&vn(n,r,o)?(r=0,o=u):(r=r==null?0:Ee(r),o=o===t?u:Ee(o)),Mn(n,r,o)):[]}function Yp(n,r){return Oa(n,r)}function Cp(n,r,o){return as(n,r,ue(o,2))}function $p(n,r){var o=n==null?0:n.length;if(o){var u=Oa(n,r);if(u<o&&qn(n[u],r))return u}return-1}function Jp(n,r){return Oa(n,r,!0)}function Wp(n,r,o){return as(n,r,ue(o,2),!0)}function zp(n,r){var o=n==null?0:n.length;if(o){var u=Oa(n,r,!0)-1;if(qn(n[u],r))return u}return-1}function Xp(n){return n&&n.length?gu(n):[]}function Zp(n,r){return n&&n.length?gu(n,ue(r,2)):[]}function Qp(n){var r=n==null?0:n.length;return r?Mn(n,1,r):[]}function eT(n,r,o){return n&&n.length?(r=o||r===t?1:Ee(r),Mn(n,0,r<0?0:r)):[]}function nT(n,r,o){var u=n==null?0:n.length;return u?(r=o||r===t?1:Ee(r),r=u-r,Mn(n,r<0?0:r,u)):[]}function rT(n,r){return n&&n.length?La(n,ue(r,3),!1,!0):[]}function tT(n,r){return n&&n.length?La(n,ue(r,3)):[]}var aT=fe(function(n){return Nr(an(n,1,Je,!0))}),iT=fe(function(n){var r=Bn(n);return Je(r)&&(r=t),Nr(an(n,1,Je,!0),ue(r,2))}),sT=fe(function(n){var r=Bn(n);return r=typeof r=="function"?r:t,Nr(an(n,1,Je,!0),t,r)});function oT(n){return n&&n.length?Nr(n):[]}function lT(n,r){return n&&n.length?Nr(n,ue(r,2)):[]}function uT(n,r){return r=typeof r=="function"?r:t,n&&n.length?Nr(n,t,r):[]}function cs(n){if(!(n&&n.length))return[];var r=0;return n=yr(n,function(o){if(Je(o))return r=Ze(o.length,r),!0}),ji(r,function(o){return je(n,Bi(o))})}function Zu(n,r){if(!(n&&n.length))return[];var o=cs(n);return r==null?o:je(o,function(u){return Rn(r,t,u)})}var dT=fe(function(n,r){return Je(n)?bt(n,r):[]}),kT=fe(function(n){return ss(yr(n,Je))}),gT=fe(function(n){var r=Bn(n);return Je(r)&&(r=t),ss(yr(n,Je),ue(r,2))}),vT=fe(function(n){var r=Bn(n);return r=typeof r=="function"?r:t,ss(yr(n,Je),t,r)}),ET=fe(cs);function mT(n,r){return fu(n||[],r||[],St)}function fT(n,r){return fu(n||[],r||[],Ot)}var pT=fe(function(n){var r=n.length,o=r>1?n[r-1]:t;return o=typeof o=="function"?(n.pop(),o):t,Zu(n,o)});function Qu(n){var r=f(n);return r.__chain__=!0,r}function TT(n,r){return r(n),n}function wa(n,r){return r(n)}var hT=vr(function(n){var r=n.length,o=r?n[0]:0,u=this.__wrapped__,g=function(p){return $i(p,n)};return r>1||this.__actions__.length||!(u instanceof Te)||!Er(o)?this.thru(g):(u=u.slice(o,+o+(r?1:0)),u.__actions__.push({func:wa,args:[g],thisArg:t}),new Pn(u,this.__chain__).thru(function(p){return r&&!p.length&&p.push(t),p}))});function yT(){return Qu(this)}function AT(){return new Pn(this.value(),this.__chain__)}function cT(){this.__values__===t&&(this.__values__=vd(this.value()));var n=this.__index__>=this.__values__.length,r=n?t:this.__values__[this.__index__++];return{done:n,value:r}}function RT(){return this}function _T(n){for(var r,o=this;o instanceof Na;){var u=Cu(o);u.__index__=0,u.__values__=t,r?g.__wrapped__=u:r=u;var g=u;o=o.__wrapped__}return g.__wrapped__=n,r}function NT(){var n=this.__wrapped__;if(n instanceof Te){var r=n;return this.__actions__.length&&(r=new Te(this)),r=r.reverse(),r.__actions__.push({func:wa,args:[As],thisArg:t}),new Pn(r,this.__chain__)}return this.thru(As)}function ST(){return mu(this.__wrapped__,this.__actions__)}var bT=Da(function(n,r,o){Oe.call(n,o)?++n[o]:kr(n,o,1)});function IT(n,r,o){var u=ve(n)?Il:Tf;return o&&vn(n,r,o)&&(r=t),u(n,ue(r,3))}function KT(n,r){var o=ve(n)?yr:Zl;return o(n,ue(r,3))}var OT=Su($u),LT=Su(Ju);function DT(n,r){return an(Ua(n,r),1)}function PT(n,r){return an(Ua(n,r),Z)}function FT(n,r,o){return o=o===t?1:Ee(o),an(Ua(n,r),o)}function ed(n,r){var o=ve(n)?Ln:_r;return o(n,ue(r,3))}function nd(n,r){var o=ve(n)?ZE:Xl;return o(n,ue(r,3))}var MT=Da(function(n,r,o){Oe.call(n,o)?n[o].push(r):kr(n,o,[r])});function BT(n,r,o,u){n=hn(n)?n:it(n),o=o&&!u?Ee(o):0;var g=n.length;return o<0&&(o=Ze(g+o,0)),Ca(n)?o<=g&&n.indexOf(r,o)>-1:!!g&&$r(n,r,o)>-1}var VT=fe(function(n,r,o){var u=-1,g=typeof r=="function",p=hn(n)?D(n.length):[];return _r(n,function(T){p[++u]=g?Rn(r,T,o):It(T,r,o)}),p}),GT=Da(function(n,r,o){kr(n,o,r)});function Ua(n,r){var o=ve(n)?je:au;return o(n,ue(r,3))}function jT(n,r,o,u){return n==null?[]:(ve(r)||(r=r==null?[]:[r]),o=u?t:o,ve(o)||(o=o==null?[]:[o]),lu(n,r,o))}var wT=Da(function(n,r,o){n[o?0:1].push(r)},function(){return[[],[]]});function UT(n,r,o){var u=ve(n)?Fi:Dl,g=arguments.length<3;return u(n,ue(r,4),o,g,_r)}function HT(n,r,o){var u=ve(n)?QE:Dl,g=arguments.length<3;return u(n,ue(r,4),o,g,Xl)}function qT(n,r){var o=ve(n)?yr:Zl;return o(n,xa(ue(r,3)))}function xT(n){var r=ve(n)?$l:Bf;return r(n)}function YT(n,r,o){(o?vn(n,r,o):r===t)?r=1:r=Ee(r);var u=ve(n)?vf:Vf;return u(n,r)}function CT(n){var r=ve(n)?Ef:jf;return r(n)}function $T(n){if(n==null)return 0;if(hn(n))return Ca(n)?Wr(n):n.length;var r=on(n);return r==$e||r==wn?n.size:Qi(n).length}function JT(n,r,o){var u=ve(n)?Mi:wf;return o&&vn(n,r,o)&&(r=t),u(n,ue(r,3))}var WT=fe(function(n,r){if(n==null)return[];var o=r.length;return o>1&&vn(n,r[0],r[1])?r=[]:o>2&&vn(r[0],r[1],r[2])&&(r=[r[0]]),lu(n,an(r,1),[])}),Ha=Im||function(){return tn.Date.now()};function zT(n,r){if(typeof r!="function")throw new Dn(d);return n=Ee(n),function(){if(--n<1)return r.apply(this,arguments)}}function rd(n,r,o){return r=o?t:r,r=n&&r==null?n.length:r,gr(n,O,t,t,t,t,r)}function td(n,r){var o;if(typeof r!="function")throw new Dn(d);return n=Ee(n),function(){return--n>0&&(o=r.apply(this,arguments)),n<=1&&(r=t),o}}var Rs=fe(function(n,r,o){var u=_;if(o.length){var g=cr(o,tt(Rs));u|=c}return gr(n,u,r,o,g)}),ad=fe(function(n,r,o){var u=_|K;if(o.length){var g=cr(o,tt(ad));u|=c}return gr(r,u,n,o,g)});function id(n,r,o){r=o?t:r;var u=gr(n,b,t,t,t,t,t,r);return u.placeholder=id.placeholder,u}function sd(n,r,o){r=o?t:r;var u=gr(n,X,t,t,t,t,t,r);return u.placeholder=sd.placeholder,u}function od(n,r,o){var u,g,p,T,R,S,j=0,w=!1,H=!1,Q=!0;if(typeof n!="function")throw new Dn(d);r=Vn(r)||0,Ue(o)&&(w=!!o.leading,H="maxWait"in o,p=H?Ze(Vn(o.maxWait)||0,r):p,Q="trailing"in o?!!o.trailing:Q);function oe(We){var xn=u,pr=g;return u=g=t,j=We,T=n.apply(pr,xn),T}function de(We){return j=We,R=Pt(pe,r),w?oe(We):T}function me(We){var xn=We-S,pr=We-j,Sd=r-xn;return H?sn(Sd,p-pr):Sd}function ke(We){var xn=We-S,pr=We-j;return S===t||xn>=r||xn<0||H&&pr>=p}function pe(){var We=Ha();if(ke(We))return he(We);R=Pt(pe,me(We))}function he(We){return R=t,Q&&u?oe(We):(u=g=t,T)}function bn(){R!==t&&pu(R),j=0,u=S=g=R=t}function En(){return R===t?T:he(Ha())}function In(){var We=Ha(),xn=ke(We);if(u=arguments,g=this,S=We,xn){if(R===t)return de(S);if(H)return pu(R),R=Pt(pe,r),oe(S)}return R===t&&(R=Pt(pe,r)),T}return In.cancel=bn,In.flush=En,In}var XT=fe(function(n,r){return zl(n,1,r)}),ZT=fe(function(n,r,o){return zl(n,Vn(r)||0,o)});function QT(n){return gr(n,Y)}function qa(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new Dn(d);var o=function(){var u=arguments,g=r?r.apply(this,u):u[0],p=o.cache;if(p.has(g))return p.get(g);var T=n.apply(this,u);return o.cache=p.set(g,T)||p,T};return o.cache=new(qa.Cache||dr),o}qa.Cache=dr;function xa(n){if(typeof n!="function")throw new Dn(d);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function eh(n){return td(2,n)}var nh=Uf(function(n,r){r=r.length==1&&ve(r[0])?je(r[0],_n(ue())):je(an(r,1),_n(ue()));var o=r.length;return fe(function(u){for(var g=-1,p=sn(u.length,o);++g<p;)u[g]=r[g].call(this,u[g]);return Rn(n,this,u)})}),_s=fe(function(n,r){var o=cr(r,tt(_s));return gr(n,c,t,r,o)}),ld=fe(function(n,r){var o=cr(r,tt(ld));return gr(n,M,t,r,o)}),rh=vr(function(n,r){return gr(n,I,t,t,t,r)});function th(n,r){if(typeof n!="function")throw new Dn(d);return r=r===t?r:Ee(r),fe(n,r)}function ah(n,r){if(typeof n!="function")throw new Dn(d);return r=r==null?0:Ze(Ee(r),0),fe(function(o){var u=o[r],g=br(o,0,r);return u&&Ar(g,u),Rn(n,this,g)})}function ih(n,r,o){var u=!0,g=!0;if(typeof n!="function")throw new Dn(d);return Ue(o)&&(u="leading"in o?!!o.leading:u,g="trailing"in o?!!o.trailing:g),od(n,r,{leading:u,maxWait:r,trailing:g})}function sh(n){return rd(n,1)}function oh(n,r){return _s(ls(r),n)}function lh(){if(!arguments.length)return[];var n=arguments[0];return ve(n)?n:[n]}function uh(n){return Fn(n,L)}function dh(n,r){return r=typeof r=="function"?r:t,Fn(n,L,r)}function kh(n){return Fn(n,h|L)}function gh(n,r){return r=typeof r=="function"?r:t,Fn(n,h|L,r)}function vh(n,r){return r==null||Wl(n,r,en(r))}function qn(n,r){return n===r||n!==n&&r!==r}var Eh=Ba(zi),mh=Ba(function(n,r){return n>=r}),wr=nu(function(){return arguments}())?nu:function(n){return Ye(n)&&Oe.call(n,"callee")&&!Ul.call(n,"callee")},ve=D.isArray,fh=cl?_n(cl):_f;function hn(n){return n!=null&&Ya(n.length)&&!mr(n)}function Je(n){return Ye(n)&&hn(n)}function ph(n){return n===!0||n===!1||Ye(n)&&gn(n)==un}var Ir=Om||Ms,Th=Rl?_n(Rl):Nf;function hh(n){return Ye(n)&&n.nodeType===1&&!Ft(n)}function yh(n){if(n==null)return!0;if(hn(n)&&(ve(n)||typeof n=="string"||typeof n.splice=="function"||Ir(n)||at(n)||wr(n)))return!n.length;var r=on(n);if(r==$e||r==wn)return!n.size;if(Dt(n))return!Qi(n).length;for(var o in n)if(Oe.call(n,o))return!1;return!0}function Ah(n,r){return Kt(n,r)}function ch(n,r,o){o=typeof o=="function"?o:t;var u=o?o(n,r):t;return u===t?Kt(n,r,t,o):!!u}function Ns(n){if(!Ye(n))return!1;var r=gn(n);return r==Ce||r==xe||typeof n.message=="string"&&typeof n.name=="string"&&!Ft(n)}function Rh(n){return typeof n=="number"&&ql(n)}function mr(n){if(!Ue(n))return!1;var r=gn(n);return r==Qe||r==dn||r==cn||r==lr}function ud(n){return typeof n=="number"&&n==Ee(n)}function Ya(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=x}function Ue(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function Ye(n){return n!=null&&typeof n=="object"}var dd=_l?_n(_l):bf;function _h(n,r){return n===r||Zi(n,r,ms(r))}function Nh(n,r,o){return o=typeof o=="function"?o:t,Zi(n,r,ms(r),o)}function Sh(n){return kd(n)&&n!=+n}function bh(n){if(dp(n))throw new ge(l);return ru(n)}function Ih(n){return n===null}function Kh(n){return n==null}function kd(n){return typeof n=="number"||Ye(n)&&gn(n)==kn}function Ft(n){if(!Ye(n)||gn(n)!=rn)return!1;var r=Ta(n);if(r===null)return!0;var o=Oe.call(r,"constructor")&&r.constructor;return typeof o=="function"&&o instanceof o&&Ea.call(o)==_m}var Ss=Nl?_n(Nl):If;function Oh(n){return ud(n)&&n>=-9007199254740991&&n<=x}var gd=Sl?_n(Sl):Kf;function Ca(n){return typeof n=="string"||!ve(n)&&Ye(n)&&gn(n)==pt}function Sn(n){return typeof n=="symbol"||Ye(n)&&gn(n)==ia}var at=bl?_n(bl):Of;function Lh(n){return n===t}function Dh(n){return Ye(n)&&on(n)==Tt}function Ph(n){return Ye(n)&&gn(n)==Jv}var Fh=Ba(es),Mh=Ba(function(n,r){return n<=r});function vd(n){if(!n)return[];if(hn(n))return Ca(n)?Un(n):Tn(n);if(At&&n[At])return gm(n[At]());var r=on(n),o=r==$e?Ui:r==wn?ka:it;return o(n)}function fr(n){if(!n)return n===0?n:0;if(n=Vn(n),n===Z||n===-1/0){var r=n<0?-1:1;return r*ee}return n===n?n:0}function Ee(n){var r=fr(n),o=r%1;return r===r?o?r-o:r:0}function Ed(n){return n?Br(Ee(n),0,re):0}function Vn(n){if(typeof n=="number")return n;if(Sn(n))return ae;if(Ue(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=Ue(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=Pl(n);var o=mE.test(n);return o||pE.test(n)?WE(n.slice(2),o?2:8):EE.test(n)?ae:+n}function md(n){return zn(n,yn(n))}function Bh(n){return n?Br(Ee(n),-9007199254740991,x):n===0?n:0}function be(n){return n==null?"":Nn(n)}var Vh=nt(function(n,r){if(Dt(r)||hn(r)){zn(r,en(r),n);return}for(var o in r)Oe.call(r,o)&&St(n,o,r[o])}),fd=nt(function(n,r){zn(r,yn(r),n)}),$a=nt(function(n,r,o,u){zn(r,yn(r),n,u)}),Gh=nt(function(n,r,o,u){zn(r,en(r),n,u)}),jh=vr($i);function wh(n,r){var o=et(n);return r==null?o:Jl(o,r)}var Uh=fe(function(n,r){n=Pe(n);var o=-1,u=r.length,g=u>2?r[2]:t;for(g&&vn(r[0],r[1],g)&&(u=1);++o<u;)for(var p=r[o],T=yn(p),R=-1,S=T.length;++R<S;){var j=T[R],w=n[j];(w===t||qn(w,Xr[j])&&!Oe.call(n,j))&&(n[j]=p[j])}return n}),Hh=fe(function(n){return n.push(t,Pu),Rn(pd,t,n)});function qh(n,r){return Kl(n,ue(r,3),Wn)}function xh(n,r){return Kl(n,ue(r,3),Wi)}function Yh(n,r){return n==null?n:Ji(n,ue(r,3),yn)}function Ch(n,r){return n==null?n:Ql(n,ue(r,3),yn)}function $h(n,r){return n&&Wn(n,ue(r,3))}function Jh(n,r){return n&&Wi(n,ue(r,3))}function Wh(n){return n==null?[]:Ia(n,en(n))}function zh(n){return n==null?[]:Ia(n,yn(n))}function bs(n,r,o){var u=n==null?t:Vr(n,r);return u===t?o:u}function Xh(n,r){return n!=null&&Bu(n,r,yf)}function Is(n,r){return n!=null&&Bu(n,r,Af)}var Zh=Iu(function(n,r,o){r!=null&&typeof r.toString!="function"&&(r=ma.call(r)),n[r]=o},Os(An)),Qh=Iu(function(n,r,o){r!=null&&typeof r.toString!="function"&&(r=ma.call(r)),Oe.call(n,r)?n[r].push(o):n[r]=[o]},ue),ey=fe(It);function en(n){return hn(n)?Cl(n):Qi(n)}function yn(n){return hn(n)?Cl(n,!0):Lf(n)}function ny(n,r){var o={};return r=ue(r,3),Wn(n,function(u,g,p){kr(o,r(u,g,p),u)}),o}function ry(n,r){var o={};return r=ue(r,3),Wn(n,function(u,g,p){kr(o,g,r(u,g,p))}),o}var ty=nt(function(n,r,o){Ka(n,r,o)}),pd=nt(function(n,r,o,u){Ka(n,r,o,u)}),ay=vr(function(n,r){var o={};if(n==null)return o;var u=!1;r=je(r,function(p){return p=Sr(p,n),u||(u=p.length>1),p}),zn(n,vs(n),o),u&&(o=Fn(o,h|A|L,Zf));for(var g=r.length;g--;)is(o,r[g]);return o});function iy(n,r){return Td(n,xa(ue(r)))}var sy=vr(function(n,r){return n==null?{}:Pf(n,r)});function Td(n,r){if(n==null)return{};var o=je(vs(n),function(u){return[u]});return r=ue(r),uu(n,o,function(u,g){return r(u,g[0])})}function oy(n,r,o){r=Sr(r,n);var u=-1,g=r.length;for(g||(g=1,n=t);++u<g;){var p=n==null?t:n[Xn(r[u])];p===t&&(u=g,p=o),n=mr(p)?p.call(n):p}return n}function ly(n,r,o){return n==null?n:Ot(n,r,o)}function uy(n,r,o,u){return u=typeof u=="function"?u:t,n==null?n:Ot(n,r,o,u)}var hd=Lu(en),yd=Lu(yn);function dy(n,r,o){var u=ve(n),g=u||Ir(n)||at(n);if(r=ue(r,4),o==null){var p=n&&n.constructor;g?o=u?new p:[]:Ue(n)?o=mr(p)?et(Ta(n)):{}:o={}}return(g?Ln:Wn)(n,function(T,R,S){return r(o,T,R,S)}),o}function ky(n,r){return n==null?!0:is(n,r)}function gy(n,r,o){return n==null?n:Eu(n,r,ls(o))}function vy(n,r,o,u){return u=typeof u=="function"?u:t,n==null?n:Eu(n,r,ls(o),u)}function it(n){return n==null?[]:wi(n,en(n))}function Ey(n){return n==null?[]:wi(n,yn(n))}function my(n,r,o){return o===t&&(o=r,r=t),o!==t&&(o=Vn(o),o=o===o?o:0),r!==t&&(r=Vn(r),r=r===r?r:0),Br(Vn(n),r,o)}function fy(n,r,o){return r=fr(r),o===t?(o=r,r=0):o=fr(o),n=Vn(n),cf(n,r,o)}function py(n,r,o){if(o&&typeof o!="boolean"&&vn(n,r,o)&&(r=o=t),o===t&&(typeof r=="boolean"?(o=r,r=t):typeof n=="boolean"&&(o=n,n=t)),n===t&&r===t?(n=0,r=1):(n=fr(n),r===t?(r=n,n=0):r=fr(r)),n>r){var u=n;n=r,r=u}if(o||n%1||r%1){var g=xl();return sn(n+g*(r-n+JE("1e-"+((g+"").length-1))),r)}return rs(n,r)}var Ty=rt(function(n,r,o){return r=r.toLowerCase(),n+(o?Ad(r):r)});function Ad(n){return Ks(be(n).toLowerCase())}function cd(n){return n=be(n),n&&n.replace(hE,om).replace(GE,"")}function hy(n,r,o){n=be(n),r=Nn(r);var u=n.length;o=o===t?u:Br(Ee(o),0,u);var g=o;return o-=r.length,o>=0&&n.slice(o,g)==r}function yy(n){return n=be(n),n&&Qv.test(n)?n.replace(Qo,lm):n}function Ay(n){return n=be(n),n&&iE.test(n)?n.replace(_i,"\\$&"):n}var cy=rt(function(n,r,o){return n+(o?"-":"")+r.toLowerCase()}),Ry=rt(function(n,r,o){return n+(o?" ":"")+r.toLowerCase()}),_y=Nu("toLowerCase");function Ny(n,r,o){n=be(n),r=Ee(r);var u=r?Wr(n):0;if(!r||u>=r)return n;var g=(r-u)/2;return Ma(ca(g),o)+n+Ma(Aa(g),o)}function Sy(n,r,o){n=be(n),r=Ee(r);var u=r?Wr(n):0;return r&&u<r?n+Ma(r-u,o):n}function by(n,r,o){n=be(n),r=Ee(r);var u=r?Wr(n):0;return r&&u<r?Ma(r-u,o)+n:n}function Iy(n,r,o){return o||r==null?r=0:r&&(r=+r),Fm(be(n).replace(Ni,""),r||0)}function Ky(n,r,o){return(o?vn(n,r,o):r===t)?r=1:r=Ee(r),ts(be(n),r)}function Oy(){var n=arguments,r=be(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var Ly=rt(function(n,r,o){return n+(o?"_":"")+r.toLowerCase()});function Dy(n,r,o){return o&&typeof o!="number"&&vn(n,r,o)&&(r=o=t),o=o===t?re:o>>>0,o?(n=be(n),n&&(typeof r=="string"||r!=null&&!Ss(r))&&(r=Nn(r),!r&&Jr(n))?br(Un(n),0,o):n.split(r,o)):[]}var Py=rt(function(n,r,o){return n+(o?" ":"")+Ks(r)});function Fy(n,r,o){return n=be(n),o=o==null?0:Br(Ee(o),0,n.length),r=Nn(r),n.slice(o,o+r.length)==r}function My(n,r,o){var u=f.templateSettings;o&&vn(n,r,o)&&(r=t),n=be(n),r=$a({},r,u,Du);var g=$a({},r.imports,u.imports,Du),p=en(g),T=wi(g,p),R,S,j=0,w=r.interpolate||sa,H="__p += '",Q=Hi((r.escape||sa).source+"|"+w.source+"|"+(w===el?vE:sa).source+"|"+(r.evaluate||sa).source+"|$","g"),oe="//# sourceURL="+(Oe.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++qE+"]")+`
`;n.replace(Q,function(ke,pe,he,bn,En,In){return he||(he=bn),H+=n.slice(j,In).replace(yE,um),pe&&(R=!0,H+=`' +
__e(`+pe+`) +
'`),En&&(S=!0,H+=`';
`+En+`;
__p += '`),he&&(H+=`' +
((__t = (`+he+`)) == null ? '' : __t) +
'`),j=In+ke.length,ke}),H+=`';
`;var de=Oe.call(r,"variable")&&r.variable;if(!de)H=`with (obj) {
`+H+`
}
`;else if(kE.test(de))throw new ge(k);H=(S?H.replace(Wv,""):H).replace(zv,"$1").replace(Xv,"$1;"),H="function("+(de||"obj")+`) {
`+(de?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(R?", __e = _.escape":"")+(S?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+H+`return __p
}`;var me=_d(function(){return Ne(p,oe+"return "+H).apply(t,T)});if(me.source=H,Ns(me))throw me;return me}function By(n){return be(n).toLowerCase()}function Vy(n){return be(n).toUpperCase()}function Gy(n,r,o){if(n=be(n),n&&(o||r===t))return Pl(n);if(!n||!(r=Nn(r)))return n;var u=Un(n),g=Un(r),p=Fl(u,g),T=Ml(u,g)+1;return br(u,p,T).join("")}function jy(n,r,o){if(n=be(n),n&&(o||r===t))return n.slice(0,Vl(n)+1);if(!n||!(r=Nn(r)))return n;var u=Un(n),g=Ml(u,Un(r))+1;return br(u,0,g).join("")}function wy(n,r,o){if(n=be(n),n&&(o||r===t))return n.replace(Ni,"");if(!n||!(r=Nn(r)))return n;var u=Un(n),g=Fl(u,Un(r));return br(u,g).join("")}function Uy(n,r){var o=z,u=U;if(Ue(r)){var g="separator"in r?r.separator:g;o="length"in r?Ee(r.length):o,u="omission"in r?Nn(r.omission):u}n=be(n);var p=n.length;if(Jr(n)){var T=Un(n);p=T.length}if(o>=p)return n;var R=o-Wr(u);if(R<1)return u;var S=T?br(T,0,R).join(""):n.slice(0,R);if(g===t)return S+u;if(T&&(R+=S.length-R),Ss(g)){if(n.slice(R).search(g)){var j,w=S;for(g.global||(g=Hi(g.source,be(nl.exec(g))+"g")),g.lastIndex=0;j=g.exec(w);)var H=j.index;S=S.slice(0,H===t?R:H)}}else if(n.indexOf(Nn(g),R)!=R){var Q=S.lastIndexOf(g);Q>-1&&(S=S.slice(0,Q))}return S+u}function Hy(n){return n=be(n),n&&Zv.test(n)?n.replace(Zo,fm):n}var qy=rt(function(n,r,o){return n+(o?" ":"")+r.toUpperCase()}),Ks=Nu("toUpperCase");function Rd(n,r,o){return n=be(n),r=o?t:r,r===t?km(n)?hm(n):rm(n):n.match(r)||[]}var _d=fe(function(n,r){try{return Rn(n,t,r)}catch(o){return Ns(o)?o:new ge(o)}}),xy=vr(function(n,r){return Ln(r,function(o){o=Xn(o),kr(n,o,Rs(n[o],n))}),n});function Yy(n){var r=n==null?0:n.length,o=ue();return n=r?je(n,function(u){if(typeof u[1]!="function")throw new Dn(d);return[o(u[0]),u[1]]}):[],fe(function(u){for(var g=-1;++g<r;){var p=n[g];if(Rn(p[0],this,u))return Rn(p[1],this,u)}})}function Cy(n){return pf(Fn(n,h))}function Os(n){return function(){return n}}function $y(n,r){return n==null||n!==n?r:n}var Jy=bu(),Wy=bu(!0);function An(n){return n}function Ls(n){return tu(typeof n=="function"?n:Fn(n,h))}function zy(n){return iu(Fn(n,h))}function Xy(n,r){return su(n,Fn(r,h))}var Zy=fe(function(n,r){return function(o){return It(o,n,r)}}),Qy=fe(function(n,r){return function(o){return It(n,o,r)}});function Ds(n,r,o){var u=en(r),g=Ia(r,u);o==null&&!(Ue(r)&&(g.length||!u.length))&&(o=r,r=n,n=this,g=Ia(r,en(r)));var p=!(Ue(o)&&"chain"in o)||!!o.chain,T=mr(n);return Ln(g,function(R){var S=r[R];n[R]=S,T&&(n.prototype[R]=function(){var j=this.__chain__;if(p||j){var w=n(this.__wrapped__),H=w.__actions__=Tn(this.__actions__);return H.push({func:S,args:arguments,thisArg:n}),w.__chain__=j,w}return S.apply(n,Ar([this.value()],arguments))})}),n}function eA(){return tn._===this&&(tn._=Nm),this}function Ps(){}function nA(n){return n=Ee(n),fe(function(r){return ou(r,n)})}var rA=ds(je),tA=ds(Il),aA=ds(Mi);function Nd(n){return ps(n)?Bi(Xn(n)):Ff(n)}function iA(n){return function(r){return n==null?t:Vr(n,r)}}var sA=Ku(),oA=Ku(!0);function Fs(){return[]}function Ms(){return!1}function lA(){return{}}function uA(){return""}function dA(){return!0}function kA(n,r){if(n=Ee(n),n<1||n>x)return[];var o=re,u=sn(n,re);r=ue(r),n-=re;for(var g=ji(u,r);++o<n;)r(o);return g}function gA(n){return ve(n)?je(n,Xn):Sn(n)?[n]:Tn(Yu(be(n)))}function vA(n){var r=++Rm;return be(n)+r}var EA=Fa(function(n,r){return n+r},0),mA=ks("ceil"),fA=Fa(function(n,r){return n/r},1),pA=ks("floor");function TA(n){return n&&n.length?ba(n,An,zi):t}function hA(n,r){return n&&n.length?ba(n,ue(r,2),zi):t}function yA(n){return Ll(n,An)}function AA(n,r){return Ll(n,ue(r,2))}function cA(n){return n&&n.length?ba(n,An,es):t}function RA(n,r){return n&&n.length?ba(n,ue(r,2),es):t}var _A=Fa(function(n,r){return n*r},1),NA=ks("round"),SA=Fa(function(n,r){return n-r},0);function bA(n){return n&&n.length?Gi(n,An):0}function IA(n,r){return n&&n.length?Gi(n,ue(r,2)):0}return f.after=zT,f.ary=rd,f.assign=Vh,f.assignIn=fd,f.assignInWith=$a,f.assignWith=Gh,f.at=jh,f.before=td,f.bind=Rs,f.bindAll=xy,f.bindKey=ad,f.castArray=lh,f.chain=Qu,f.chunk=pp,f.compact=Tp,f.concat=hp,f.cond=Yy,f.conforms=Cy,f.constant=Os,f.countBy=bT,f.create=wh,f.curry=id,f.curryRight=sd,f.debounce=od,f.defaults=Uh,f.defaultsDeep=Hh,f.defer=XT,f.delay=ZT,f.difference=yp,f.differenceBy=Ap,f.differenceWith=cp,f.drop=Rp,f.dropRight=_p,f.dropRightWhile=Np,f.dropWhile=Sp,f.fill=bp,f.filter=KT,f.flatMap=DT,f.flatMapDeep=PT,f.flatMapDepth=FT,f.flatten=Wu,f.flattenDeep=Ip,f.flattenDepth=Kp,f.flip=QT,f.flow=Jy,f.flowRight=Wy,f.fromPairs=Op,f.functions=Wh,f.functionsIn=zh,f.groupBy=MT,f.initial=Dp,f.intersection=Pp,f.intersectionBy=Fp,f.intersectionWith=Mp,f.invert=Zh,f.invertBy=Qh,f.invokeMap=VT,f.iteratee=Ls,f.keyBy=GT,f.keys=en,f.keysIn=yn,f.map=Ua,f.mapKeys=ny,f.mapValues=ry,f.matches=zy,f.matchesProperty=Xy,f.memoize=qa,f.merge=ty,f.mergeWith=pd,f.method=Zy,f.methodOf=Qy,f.mixin=Ds,f.negate=xa,f.nthArg=nA,f.omit=ay,f.omitBy=iy,f.once=eh,f.orderBy=jT,f.over=rA,f.overArgs=nh,f.overEvery=tA,f.overSome=aA,f.partial=_s,f.partialRight=ld,f.partition=wT,f.pick=sy,f.pickBy=Td,f.property=Nd,f.propertyOf=iA,f.pull=jp,f.pullAll=Xu,f.pullAllBy=wp,f.pullAllWith=Up,f.pullAt=Hp,f.range=sA,f.rangeRight=oA,f.rearg=rh,f.reject=qT,f.remove=qp,f.rest=th,f.reverse=As,f.sampleSize=YT,f.set=ly,f.setWith=uy,f.shuffle=CT,f.slice=xp,f.sortBy=WT,f.sortedUniq=Xp,f.sortedUniqBy=Zp,f.split=Dy,f.spread=ah,f.tail=Qp,f.take=eT,f.takeRight=nT,f.takeRightWhile=rT,f.takeWhile=tT,f.tap=TT,f.throttle=ih,f.thru=wa,f.toArray=vd,f.toPairs=hd,f.toPairsIn=yd,f.toPath=gA,f.toPlainObject=md,f.transform=dy,f.unary=sh,f.union=aT,f.unionBy=iT,f.unionWith=sT,f.uniq=oT,f.uniqBy=lT,f.uniqWith=uT,f.unset=ky,f.unzip=cs,f.unzipWith=Zu,f.update=gy,f.updateWith=vy,f.values=it,f.valuesIn=Ey,f.without=dT,f.words=Rd,f.wrap=oh,f.xor=kT,f.xorBy=gT,f.xorWith=vT,f.zip=ET,f.zipObject=mT,f.zipObjectDeep=fT,f.zipWith=pT,f.entries=hd,f.entriesIn=yd,f.extend=fd,f.extendWith=$a,Ds(f,f),f.add=EA,f.attempt=_d,f.camelCase=Ty,f.capitalize=Ad,f.ceil=mA,f.clamp=my,f.clone=uh,f.cloneDeep=kh,f.cloneDeepWith=gh,f.cloneWith=dh,f.conformsTo=vh,f.deburr=cd,f.defaultTo=$y,f.divide=fA,f.endsWith=hy,f.eq=qn,f.escape=yy,f.escapeRegExp=Ay,f.every=IT,f.find=OT,f.findIndex=$u,f.findKey=qh,f.findLast=LT,f.findLastIndex=Ju,f.findLastKey=xh,f.floor=pA,f.forEach=ed,f.forEachRight=nd,f.forIn=Yh,f.forInRight=Ch,f.forOwn=$h,f.forOwnRight=Jh,f.get=bs,f.gt=Eh,f.gte=mh,f.has=Xh,f.hasIn=Is,f.head=zu,f.identity=An,f.includes=BT,f.indexOf=Lp,f.inRange=fy,f.invoke=ey,f.isArguments=wr,f.isArray=ve,f.isArrayBuffer=fh,f.isArrayLike=hn,f.isArrayLikeObject=Je,f.isBoolean=ph,f.isBuffer=Ir,f.isDate=Th,f.isElement=hh,f.isEmpty=yh,f.isEqual=Ah,f.isEqualWith=ch,f.isError=Ns,f.isFinite=Rh,f.isFunction=mr,f.isInteger=ud,f.isLength=Ya,f.isMap=dd,f.isMatch=_h,f.isMatchWith=Nh,f.isNaN=Sh,f.isNative=bh,f.isNil=Kh,f.isNull=Ih,f.isNumber=kd,f.isObject=Ue,f.isObjectLike=Ye,f.isPlainObject=Ft,f.isRegExp=Ss,f.isSafeInteger=Oh,f.isSet=gd,f.isString=Ca,f.isSymbol=Sn,f.isTypedArray=at,f.isUndefined=Lh,f.isWeakMap=Dh,f.isWeakSet=Ph,f.join=Bp,f.kebabCase=cy,f.last=Bn,f.lastIndexOf=Vp,f.lowerCase=Ry,f.lowerFirst=_y,f.lt=Fh,f.lte=Mh,f.max=TA,f.maxBy=hA,f.mean=yA,f.meanBy=AA,f.min=cA,f.minBy=RA,f.stubArray=Fs,f.stubFalse=Ms,f.stubObject=lA,f.stubString=uA,f.stubTrue=dA,f.multiply=_A,f.nth=Gp,f.noConflict=eA,f.noop=Ps,f.now=Ha,f.pad=Ny,f.padEnd=Sy,f.padStart=by,f.parseInt=Iy,f.random=py,f.reduce=UT,f.reduceRight=HT,f.repeat=Ky,f.replace=Oy,f.result=oy,f.round=NA,f.runInContext=N,f.sample=xT,f.size=$T,f.snakeCase=Ly,f.some=JT,f.sortedIndex=Yp,f.sortedIndexBy=Cp,f.sortedIndexOf=$p,f.sortedLastIndex=Jp,f.sortedLastIndexBy=Wp,f.sortedLastIndexOf=zp,f.startCase=Py,f.startsWith=Fy,f.subtract=SA,f.sum=bA,f.sumBy=IA,f.template=My,f.times=kA,f.toFinite=fr,f.toInteger=Ee,f.toLength=Ed,f.toLower=By,f.toNumber=Vn,f.toSafeInteger=Bh,f.toString=be,f.toUpper=Vy,f.trim=Gy,f.trimEnd=jy,f.trimStart=wy,f.truncate=Uy,f.unescape=Hy,f.uniqueId=vA,f.upperCase=qy,f.upperFirst=Ks,f.each=ed,f.eachRight=nd,f.first=zu,Ds(f,function(){var n={};return Wn(f,function(r,o){Oe.call(f.prototype,o)||(n[o]=r)}),n}(),{chain:!1}),f.VERSION=a,Ln(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){f[n].placeholder=f}),Ln(["drop","take"],function(n,r){Te.prototype[n]=function(o){o=o===t?1:Ze(Ee(o),0);var u=this.__filtered__&&!r?new Te(this):this.clone();return u.__filtered__?u.__takeCount__=sn(o,u.__takeCount__):u.__views__.push({size:sn(o,re),type:n+(u.__dir__<0?"Right":"")}),u},Te.prototype[n+"Right"]=function(o){return this.reverse()[n](o).reverse()}}),Ln(["filter","map","takeWhile"],function(n,r){var o=r+1,u=o==C||o==$;Te.prototype[n]=function(g){var p=this.clone();return p.__iteratees__.push({iteratee:ue(g,3),type:o}),p.__filtered__=p.__filtered__||u,p}}),Ln(["head","last"],function(n,r){var o="take"+(r?"Right":"");Te.prototype[n]=function(){return this[o](1).value()[0]}}),Ln(["initial","tail"],function(n,r){var o="drop"+(r?"":"Right");Te.prototype[n]=function(){return this.__filtered__?new Te(this):this[o](1)}}),Te.prototype.compact=function(){return this.filter(An)},Te.prototype.find=function(n){return this.filter(n).head()},Te.prototype.findLast=function(n){return this.reverse().find(n)},Te.prototype.invokeMap=fe(function(n,r){return typeof n=="function"?new Te(this):this.map(function(o){return It(o,n,r)})}),Te.prototype.reject=function(n){return this.filter(xa(ue(n)))},Te.prototype.slice=function(n,r){n=Ee(n);var o=this;return o.__filtered__&&(n>0||r<0)?new Te(o):(n<0?o=o.takeRight(-n):n&&(o=o.drop(n)),r!==t&&(r=Ee(r),o=r<0?o.dropRight(-r):o.take(r-n)),o)},Te.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Te.prototype.toArray=function(){return this.take(re)},Wn(Te.prototype,function(n,r){var o=/^(?:filter|find|map|reject)|While$/.test(r),u=/^(?:head|last)$/.test(r),g=f[u?"take"+(r=="last"?"Right":""):r],p=u||/^find/.test(r);g&&(f.prototype[r]=function(){var T=this.__wrapped__,R=u?[1]:arguments,S=T instanceof Te,j=R[0],w=S||ve(T),H=function(pe){var he=g.apply(f,Ar([pe],R));return u&&Q?he[0]:he};w&&o&&typeof j=="function"&&j.length!=1&&(S=w=!1);var Q=this.__chain__,oe=!!this.__actions__.length,de=p&&!Q,me=S&&!oe;if(!p&&w){T=me?T:new Te(this);var ke=n.apply(T,R);return ke.__actions__.push({func:wa,args:[H],thisArg:t}),new Pn(ke,Q)}return de&&me?n.apply(this,R):(ke=this.thru(H),de?u?ke.value()[0]:ke.value():ke)})}),Ln(["pop","push","shift","sort","splice","unshift"],function(n){var r=ga[n],o=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",u=/^(?:pop|shift)$/.test(n);f.prototype[n]=function(){var g=arguments;if(u&&!this.__chain__){var p=this.value();return r.apply(ve(p)?p:[],g)}return this[o](function(T){return r.apply(ve(T)?T:[],g)})}}),Wn(Te.prototype,function(n,r){var o=f[r];if(o){var u=o.name+"";Oe.call(Qr,u)||(Qr[u]=[]),Qr[u].push({name:r,func:o})}}),Qr[Pa(t,K).name]=[{name:"wrapper",func:t}],Te.prototype.clone=Um,Te.prototype.reverse=Hm,Te.prototype.value=qm,f.prototype.at=hT,f.prototype.chain=yT,f.prototype.commit=AT,f.prototype.next=cT,f.prototype.plant=_T,f.prototype.reverse=NT,f.prototype.toJSON=f.prototype.valueOf=f.prototype.value=ST,f.prototype.first=f.prototype.head,At&&(f.prototype[At]=RT),f},zr=ym();Dr?((Dr.exports=zr)._=zr,Li._=zr):tn._=zr}).call(wS)}(qt,qt.exports)),qt.exports}US();pn(ea);const dv=F.forwardRef((e,i)=>B.jsx(st,{gap:"2",style:{display:"flex"},...e,ref:i}));dv.displayName="FaktaGruppe";dv.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var xs={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Rk;function HS(){return Rk||(Rk=1,function(e){(function(){var i={}.hasOwnProperty;function t(){for(var l="",d=0;d<arguments.length;d++){var k=arguments[d];k&&(l=s(l,a.call(this,k)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var k in l)i.call(l,k)&&l[k]&&(d=s(d,this&&this[k]||k));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(xs)),xs.exports}var qS=HS();const xS=KA(qS),YS="_boks_c3bfh_1",CS="_harBorderLeft_c3bfh_8",$S="_harBorderTop_c3bfh_12",JS={boks:YS,harBorderLeft:CS,harBorderTop:$S};xS.bind(JS);var Ys={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var _k;function WS(){return _k||(_k=1,function(e){(function(){var i={}.hasOwnProperty;function t(){for(var l="",d=0;d<arguments.length;d++){var k=arguments[d];k&&(l=s(l,a(k)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var k in l)i.call(l,k)&&l[k]&&(d=s(d,k));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(Ys)),Ys.exports}WS();var zS=Object.defineProperty,XS=(e,i,t)=>i in e?zS(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,Nk=(e,i,t)=>XS(e,typeof i!="symbol"?i+"":i,t);function kv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sk={exports:{}},wt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bk;function ZS(){if(bk)return wt;bk=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function t(a,s,l){var d=null;if(l!==void 0&&(d=""+l),s.key!==void 0&&(d=""+s.key),"key"in s){l={};for(var k in s)k!=="key"&&(l[k]=s[k])}else l=s;return s=l.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:l}}return wt.Fragment=i,wt.jsx=t,wt.jsxs=t,wt}var Ik;function QS(){return Ik||(Ik=1,Sk.exports=ZS()),Sk.exports}var Tr=QS();const eb="_autocompleteSuggestion__substring_mf7v0_1",nb="_autocompleteSuggestion__inner_mf7v0_4",Ut={autocompleteSuggestion__substring:eb,autocompleteSuggestion__inner:nb,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_mf7v0_12"};class rb extends J.Component{constructor(i){super(i),this.state={value:i.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:i}=this.props,{value:t}=this.state;i(t)}onMouseMove(){const{setSuggestionIndex:i,index:t}=this.props;i(t)}render(){const{match:i,active:t,avoidBlur:a,id:s}=this.props,{value:l}=this.state.value,d=l.toLowerCase().startsWith(i.toLowerCase());return Tr.jsx("li",{id:s,role:"option","aria-selected":t,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:a,onMouseDown:a,onKeyDown:a,className:"autocompleteSuggestion typo-normal",children:d?Tr.jsxs("span",{className:`${Ut.autocompleteSuggestion__inner} ${t?Ut["autocompleteSuggestion--active"]:""}`,children:[l.substring(0,i.length),Tr.jsx("span",{className:Ut.autocompleteSuggestion__substring,children:l.substring(i.length)})]}):Tr.jsx("span",{className:`${Ut.autocompleteSuggestion__inner} ${t?Ut["autocompleteSuggestion--active"]:""}`,children:l})})}}const tb="_autocomplete_9dlnp_1",ab="_autocomplete__suggestions_9dlnp_27",Cs={autocomplete:tb,autocomplete__suggestions:ab,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_9dlnp_31"};class CI extends J.Component{constructor(i){super(i),Nk(this,"input"),Nk(this,"inputRef"),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=t=>{this.input=t},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null}))}onChange(i){const{onChange:t}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),t(i)}onSearchButtonClick(i){const{onSearchButtonClick:t}=this.props;i.preventDefault(),t&&t()}onKeyDown(i){const{shouldShowSuggestions:t}=this.state;let{activeSuggestionIndex:a}=this.state;const{suggestions:s}=this.props,l=a>-1;switch(this.setState({setAriaActiveDescendant:i.keyCode===38||i.keyCode===40}),i.keyCode){case 9:l&&t&&this.setValue(s[a]);break;case 13:l&&t?(i.preventDefault(),this.setValue(s[a])):t&&s.length===1?this.setValue(s[0]):this.setState({shouldShowSuggestions:!1});break;case 27:t&&s.length>0&&(i.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:t&&(i.preventDefault(),a=a-1===-2?-1:a-1,this.setState({activeSuggestionIndex:a}));break;case 40:t&&(i.preventDefault(),a=a+1===s.length?s.length-1:a+1,this.setState({activeSuggestionIndex:a}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const i=setTimeout(()=>{const{shouldBlur:a}=this.state;a&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:i});const{onBlur:t}=this.props;t&&t()}setSuggestionIndex(i){this.setState({activeSuggestionIndex:i}),this.clearBlurDelay()}setValue(i){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:t}=this.props;t(i)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:i,id:t,ariaLabel:a,placeholder:s,value:l,name:d,shouldFocusOnMount:k,isLoading:v}=this.props,{activeSuggestionIndex:E,setAriaActiveDescendant:m,hasFocus:h,shouldShowSuggestions:A}=this.state,L=h&&A&&i.length>0,P=m&&E>-1?`${t}-item-${E}`:void 0;return Tr.jsxs("div",{className:`${Cs.autocomplete} autocomplete`,"aria-expanded":L,"aria-owns":`${t}-suggestions`,"aria-haspopup":"listbox",children:[Tr.jsx(vo,{variant:"primary",id:t,name:d,"aria-label":a,"aria-autocomplete":"list","aria-controls":`${t}-suggestions`,"aria-activedescendant":P,placeholder:s,value:l,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:y=>{this.inputRef=y},className:"typo-normal",autoFocus:k,label:a,hideLabel:!0,children:Tr.jsx(vo.Button,{loading:v,onClick:this.onSearchButtonClick})}),Tr.jsx("ul",{id:`${t}-suggestions`,role:"listbox",className:L?Cs.autocomplete__suggestions:Cs["autocomplete__suggestions--hidden"],children:L&&i.map((y,_)=>Tr.jsx(rb,{id:`${t}-item-${_}`,index:_,value:y,match:l,active:_===E,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},y.key))})]})}}var Ro={exports:{}},ib=Ro.exports,Kk;function sb(){return Kk||(Kk=1,function(e,i){(function(t,a){e.exports=a()})(ib,function(){var t=1e3,a=6e4,s=36e5,l="millisecond",d="second",k="minute",v="hour",E="day",m="week",h="month",A="quarter",L="year",P="date",y="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,K=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,G={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(C){var q=["th","st","nd","rd"],$=C%100;return"["+C+(q[($-20)%10]||q[$]||q[0])+"]"}},b=function(C,q,$){var Z=String(C);return!Z||Z.length>=q?C:""+Array(q+1-Z.length).join($)+C},X={s:b,z:function(C){var q=-C.utcOffset(),$=Math.abs(q),Z=Math.floor($/60),x=$%60;return(q<=0?"+":"-")+b(Z,2,"0")+":"+b(x,2,"0")},m:function C(q,$){if(q.date()<$.date())return-C($,q);var Z=12*($.year()-q.year())+($.month()-q.month()),x=q.clone().add(Z,h),ee=$-x<0,ae=q.clone().add(Z+(ee?-1:1),h);return+(-(Z+($-x)/(ee?x-ae:ae-x))||0)},a:function(C){return C<0?Math.ceil(C)||0:Math.floor(C)},p:function(C){return{M:h,y:L,w:m,d:E,D:P,h:v,m:k,s:d,ms:l,Q:A}[C]||String(C||"").toLowerCase().replace(/s$/,"")},u:function(C){return C===void 0}},c="en",M={};M[c]=G;var O="$isDayjsObject",I=function(C){return C instanceof ne||!(!C||!C[O])},Y=function C(q,$,Z){var x;if(!q)return c;if(typeof q=="string"){var ee=q.toLowerCase();M[ee]&&(x=ee),$&&(M[ee]=$,x=ee);var ae=q.split("-");if(!x&&ae.length>1)return C(ae[0])}else{var re=q.name;M[re]=q,x=re}return!Z&&x&&(c=x),x||!Z&&c},z=function(C,q){if(I(C))return C.clone();var $=typeof q=="object"?q:{};return $.date=C,$.args=arguments,new ne($)},U=X;U.l=Y,U.i=I,U.w=function(C,q){return z(C,{locale:q.$L,utc:q.$u,x:q.$x,$offset:q.$offset})};var ne=function(){function C($){this.$L=Y($.locale,null,!0),this.parse($),this.$x=this.$x||$.x||{},this[O]=!0}var q=C.prototype;return q.parse=function($){this.$d=function(Z){var x=Z.date,ee=Z.utc;if(x===null)return new Date(NaN);if(U.u(x))return new Date;if(x instanceof Date)return new Date(x);if(typeof x=="string"&&!/Z$/i.test(x)){var ae=x.match(_);if(ae){var re=ae[2]-1||0,_e=(ae[7]||"0").substring(0,3);return ee?new Date(Date.UTC(ae[1],re,ae[3]||1,ae[4]||0,ae[5]||0,ae[6]||0,_e)):new Date(ae[1],re,ae[3]||1,ae[4]||0,ae[5]||0,ae[6]||0,_e)}}return new Date(x)}($),this.init()},q.init=function(){var $=this.$d;this.$y=$.getFullYear(),this.$M=$.getMonth(),this.$D=$.getDate(),this.$W=$.getDay(),this.$H=$.getHours(),this.$m=$.getMinutes(),this.$s=$.getSeconds(),this.$ms=$.getMilliseconds()},q.$utils=function(){return U},q.isValid=function(){return this.$d.toString()!==y},q.isSame=function($,Z){var x=z($);return this.startOf(Z)<=x&&x<=this.endOf(Z)},q.isAfter=function($,Z){return z($)<this.startOf(Z)},q.isBefore=function($,Z){return this.endOf(Z)<z($)},q.$g=function($,Z,x){return U.u($)?this[Z]:this.set(x,$)},q.unix=function(){return Math.floor(this.valueOf()/1e3)},q.valueOf=function(){return this.$d.getTime()},q.startOf=function($,Z){var x=this,ee=!!U.u(Z)||Z,ae=U.p($),re=function(ze,xe){var Ce=U.w(x.$u?Date.UTC(x.$y,xe,ze):new Date(x.$y,xe,ze),x);return ee?Ce:Ce.endOf(E)},_e=function(ze,xe){return U.w(x.toDate()[ze].apply(x.toDate("s"),(ee?[0,0,0,0]:[23,59,59,999]).slice(xe)),x)},Se=this.$W,qe=this.$M,we=this.$D,ln="set"+(this.$u?"UTC":"");switch(ae){case L:return ee?re(1,0):re(31,11);case h:return ee?re(1,qe):re(0,qe+1);case m:var cn=this.$locale().weekStart||0,un=(Se<cn?Se+7:Se)-cn;return re(ee?we-un:we+(6-un),qe);case E:case P:return _e(ln+"Hours",0);case v:return _e(ln+"Minutes",1);case k:return _e(ln+"Seconds",2);case d:return _e(ln+"Milliseconds",3);default:return this.clone()}},q.endOf=function($){return this.startOf($,!1)},q.$set=function($,Z){var x,ee=U.p($),ae="set"+(this.$u?"UTC":""),re=(x={},x[E]=ae+"Date",x[P]=ae+"Date",x[h]=ae+"Month",x[L]=ae+"FullYear",x[v]=ae+"Hours",x[k]=ae+"Minutes",x[d]=ae+"Seconds",x[l]=ae+"Milliseconds",x)[ee],_e=ee===E?this.$D+(Z-this.$W):Z;if(ee===h||ee===L){var Se=this.clone().set(P,1);Se.$d[re](_e),Se.init(),this.$d=Se.set(P,Math.min(this.$D,Se.daysInMonth())).$d}else re&&this.$d[re](_e);return this.init(),this},q.set=function($,Z){return this.clone().$set($,Z)},q.get=function($){return this[U.p($)]()},q.add=function($,Z){var x,ee=this;$=Number($);var ae=U.p(Z),re=function(qe){var we=z(ee);return U.w(we.date(we.date()+Math.round(qe*$)),ee)};if(ae===h)return this.set(h,this.$M+$);if(ae===L)return this.set(L,this.$y+$);if(ae===E)return re(1);if(ae===m)return re(7);var _e=(x={},x[k]=a,x[v]=s,x[d]=t,x)[ae]||1,Se=this.$d.getTime()+$*_e;return U.w(Se,this)},q.subtract=function($,Z){return this.add(-1*$,Z)},q.format=function($){var Z=this,x=this.$locale();if(!this.isValid())return x.invalidDate||y;var ee=$||"YYYY-MM-DDTHH:mm:ssZ",ae=U.z(this),re=this.$H,_e=this.$m,Se=this.$M,qe=x.weekdays,we=x.months,ln=x.meridiem,cn=function(xe,Ce,Qe,dn){return xe&&(xe[Ce]||xe(Z,ee))||Qe[Ce].slice(0,dn)},un=function(xe){return U.s(re%12||12,xe,"0")},ze=ln||function(xe,Ce,Qe){var dn=xe<12?"AM":"PM";return Qe?dn.toLowerCase():dn};return ee.replace(K,function(xe,Ce){return Ce||function(Qe){switch(Qe){case"YY":return String(Z.$y).slice(-2);case"YYYY":return U.s(Z.$y,4,"0");case"M":return Se+1;case"MM":return U.s(Se+1,2,"0");case"MMM":return cn(x.monthsShort,Se,we,3);case"MMMM":return cn(we,Se);case"D":return Z.$D;case"DD":return U.s(Z.$D,2,"0");case"d":return String(Z.$W);case"dd":return cn(x.weekdaysMin,Z.$W,qe,2);case"ddd":return cn(x.weekdaysShort,Z.$W,qe,3);case"dddd":return qe[Z.$W];case"H":return String(re);case"HH":return U.s(re,2,"0");case"h":return un(1);case"hh":return un(2);case"a":return ze(re,_e,!0);case"A":return ze(re,_e,!1);case"m":return String(_e);case"mm":return U.s(_e,2,"0");case"s":return String(Z.$s);case"ss":return U.s(Z.$s,2,"0");case"SSS":return U.s(Z.$ms,3,"0");case"Z":return ae}return null}(xe)||ae.replace(":","")})},q.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},q.diff=function($,Z,x){var ee,ae=this,re=U.p(Z),_e=z($),Se=(_e.utcOffset()-this.utcOffset())*a,qe=this-_e,we=function(){return U.m(ae,_e)};switch(re){case L:ee=we()/12;break;case h:ee=we();break;case A:ee=we()/3;break;case m:ee=(qe-Se)/6048e5;break;case E:ee=(qe-Se)/864e5;break;case v:ee=qe/s;break;case k:ee=qe/a;break;case d:ee=qe/t;break;default:ee=qe}return x?ee:U.a(ee)},q.daysInMonth=function(){return this.endOf(h).$D},q.$locale=function(){return M[this.$L]},q.locale=function($,Z){if(!$)return this.$L;var x=this.clone(),ee=Y($,Z,!0);return ee&&(x.$L=ee),x},q.clone=function(){return U.w(this.$d,this)},q.toDate=function(){return new Date(this.valueOf())},q.toJSON=function(){return this.isValid()?this.toISOString():null},q.toISOString=function(){return this.$d.toISOString()},q.toString=function(){return this.$d.toUTCString()},C}(),W=ne.prototype;return z.prototype=W,[["$ms",l],["$s",d],["$m",k],["$H",v],["$W",E],["$M",h],["$y",L],["$D",P]].forEach(function(C){W[C[1]]=function(q){return this.$g(q,C[0],C[1])}}),z.extend=function(C,q){return C.$i||(C(q,ne,z),C.$i=!0),z},z.locale=Y,z.isDayjs=I,z.unix=function(C){return z(1e3*C)},z.en=M[c],z.Ls=M,z.p={},z})}(Ro)),Ro.exports}var ob=sb();const na=kv(ob);var _o=function(e,i){return _o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])},_o(e,i)};function $n(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");_o(e,i);function t(){this.constructor=e}e.prototype=i===null?Object.create(i):(t.prototype=i.prototype,new t)}var se=function(){return se=Object.assign||function(e){for(var i,t=1,a=arguments.length;t<a;t++){i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},se.apply(this,arguments)};function ki(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t}function tr(e,i,t){if(arguments.length===2)for(var a=0,s=i.length,l;a<s;a++)(l||!(a in i))&&(l||(l=Array.prototype.slice.call(i,0,a)),l[a]=i[a]);return e.concat(l||Array.prototype.slice.call(i))}function er(e,i){var t=i&&i.cache?i.cache:Eb,a=i&&i.serializer?i.serializer:gb,s=i&&i.strategy?i.strategy:db;return s(e,{cache:t,serializer:a})}function lb(e){return e==null||typeof e=="number"||typeof e=="boolean"}function ub(e,i,t,a){var s=lb(a)?a:t(a),l=i.get(s);return typeof l>"u"&&(l=e.call(this,a),i.set(s,l)),l}function gv(e,i,t){var a=Array.prototype.slice.call(arguments,3),s=t(a),l=i.get(s);return typeof l>"u"&&(l=e.apply(this,a),i.set(s,l)),l}function vv(e,i,t,a,s){return t.bind(i,e,a,s)}function db(e,i){var t=e.length===1?ub:gv;return vv(e,this,t,i.cache.create(),i.serializer)}function kb(e,i){return vv(e,this,gv,i.cache.create(),i.serializer)}var gb=function(){return JSON.stringify(arguments)},vb=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(i){return this.cache[i]},e.prototype.set=function(i,t){this.cache[i]=t},e}(),Eb={create:function(){return new vb}},nr={variadic:kb},Ae;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Ae||(Ae={}));var Ve;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Ve||(Ve={}));var kt;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(kt||(kt={}));function Ok(e){return e.type===Ve.literal}function mb(e){return e.type===Ve.argument}function Ev(e){return e.type===Ve.number}function mv(e){return e.type===Ve.date}function fv(e){return e.type===Ve.time}function pv(e){return e.type===Ve.select}function Tv(e){return e.type===Ve.plural}function fb(e){return e.type===Ve.pound}function hv(e){return e.type===Ve.tag}function yv(e){return!!(e&&typeof e=="object"&&e.type===kt.number)}function No(e){return!!(e&&typeof e=="object"&&e.type===kt.dateTime)}var Av=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,pb=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function Tb(e){var i={};return e.replace(pb,function(t){var a=t.length;switch(t[0]){case"G":i.era=a===4?"long":a===5?"narrow":"short";break;case"y":i.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=a===4?"long":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][a-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][a-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][a-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][a-1];break;case"s":i.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var hb=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function yb(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(hb).filter(function(A){return A.length>0}),t=[],a=0,s=i;a<s.length;a++){var l=s[a],d=l.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var k=d[0],v=d.slice(1),E=0,m=v;E<m.length;E++){var h=m[E];if(h.length===0)throw new Error("Invalid number skeleton")}t.push({stem:k,options:v})}return t}function Ab(e){return e.replace(/^(.*?)-/,"")}var Lk=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,cv=/^(@+)?(\+|#+)?[rs]?$/g,cb=/(\*)(0+)|(#+)(0+)|(0+)/g,Rv=/^(0+)$/;function Dk(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(cv,function(t,a,s){return typeof s!="string"?(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length):s==="+"?i.minimumSignificantDigits=a.length:a[0]==="#"?i.maximumSignificantDigits=a.length:(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length+(typeof s=="string"?s.length:0)),""}),i}function _v(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Rb(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var t=e.slice(0,2);if(t==="+!"?(i.signDisplay="always",e=e.slice(2)):t==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!Rv.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function Pk(e){var i={},t=_v(e);return t||i}function _b(e){for(var i={},t=0,a=e;t<a.length;t++){var s=a[t];switch(s.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=s.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=Ab(s.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=se(se(se({},i),{notation:"scientific"}),s.options.reduce(function(v,E){return se(se({},v),Pk(E))},{}));continue;case"engineering":i=se(se(se({},i),{notation:"engineering"}),s.options.reduce(function(v,E){return se(se({},v),Pk(E))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(cb,function(v,E,m,h,A,L){if(E)i.minimumIntegerDigits=m.length;else{if(h&&A)throw new Error("We currently do not support maximum integer digits");if(L)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Rv.test(s.stem)){i.minimumIntegerDigits=s.stem.length;continue}if(Lk.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(Lk,function(v,E,m,h,A,L){return m==="*"?i.minimumFractionDigits=E.length:h&&h[0]==="#"?i.maximumFractionDigits=h.length:A&&L?(i.minimumFractionDigits=A.length,i.maximumFractionDigits=A.length+L.length):(i.minimumFractionDigits=E.length,i.maximumFractionDigits=E.length),""});var l=s.options[0];l==="w"?i=se(se({},i),{trailingZeroDisplay:"stripIfInteger"}):l&&(i=se(se({},i),Dk(l)));continue}if(cv.test(s.stem)){i=se(se({},i),Dk(s.stem));continue}var d=_v(s.stem);d&&(i=se(se({},i),d));var k=Rb(s.stem);k&&(i=se(se({},i),k))}return i}var Xa={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Nb(e,i){for(var t="",a=0;a<e.length;a++){var s=e.charAt(a);if(s==="j"){for(var l=0;a+1<e.length&&e.charAt(a+1)===s;)l++,a++;var d=1+(l&1),k=l<2?1:3+(l>>1),v="a",E=Sb(i);for((E=="H"||E=="k")&&(k=0);k-- >0;)t+=v;for(;d-- >0;)t=E+t}else s==="J"?t+="H":t+=s}return t}function Sb(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=e.language,a;t!=="root"&&(a=e.maximize().region);var s=Xa[a||""]||Xa[t||""]||Xa["".concat(t,"-001")]||Xa["001"];return s[0]}var $s,bb=new RegExp("^".concat(Av.source,"*")),Ib=new RegExp("".concat(Av.source,"*$"));function Re(e,i){return{start:e,end:i}}var Kb=!!String.prototype.startsWith&&"_a".startsWith("a",1),Ob=!!String.fromCodePoint,Lb=!!Object.fromEntries,Db=!!String.prototype.codePointAt,Pb=!!String.prototype.trimStart,Fb=!!String.prototype.trimEnd,Mb=!!Number.isSafeInteger,Bb=Mb?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},So=!0;try{var Vb=Sv("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");So=(($s=Vb.exec("a"))===null||$s===void 0?void 0:$s[0])==="a"}catch{So=!1}var Fk=Kb?function(e,i,t){return e.startsWith(i,t)}:function(e,i,t){return e.slice(t,t+i.length)===i},bo=Ob?String.fromCodePoint:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var t="",a=e.length,s=0,l;a>s;){if(l=e[s++],l>1114111)throw RangeError(l+" is not a valid code point");t+=l<65536?String.fromCharCode(l):String.fromCharCode(((l-=65536)>>10)+55296,l%1024+56320)}return t},Mk=Lb?Object.fromEntries:function(e){for(var i={},t=0,a=e;t<a.length;t++){var s=a[t],l=s[0],d=s[1];i[l]=d}return i},Nv=Db?function(e,i){return e.codePointAt(i)}:function(e,i){var t=e.length;if(!(i<0||i>=t)){var a=e.charCodeAt(i),s;return a<55296||a>56319||i+1===t||(s=e.charCodeAt(i+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},Gb=Pb?function(e){return e.trimStart()}:function(e){return e.replace(bb,"")},jb=Fb?function(e){return e.trimEnd()}:function(e){return e.replace(Ib,"")};function Sv(e,i){return new RegExp(e,i)}var Io;if(So){var Bk=Sv("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Io=function(e,i){var t;Bk.lastIndex=i;var a=Bk.exec(e);return(t=a[1])!==null&&t!==void 0?t:""}}else Io=function(e,i){for(var t=[];;){var a=Nv(e,i);if(a===void 0||bv(a)||qb(a))break;t.push(a),i+=a>=65536?2:1}return bo.apply(void 0,t)};var wb=function(){function e(i,t){t===void 0&&(t={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,t,a){for(var s=[];!this.isEOF();){var l=this.char();if(l===123){var d=this.parseArgument(i,a);if(d.err)return d;s.push(d.val)}else{if(l===125&&i>0)break;if(l===35&&(t==="plural"||t==="selectordinal")){var k=this.clonePosition();this.bump(),s.push({type:Ve.pound,location:Re(k,this.clonePosition())})}else if(l===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(Ae.UNMATCHED_CLOSING_TAG,Re(this.clonePosition(),this.clonePosition()))}else if(l===60&&!this.ignoreTag&&Ko(this.peek()||0)){var d=this.parseTag(i,t);if(d.err)return d;s.push(d.val)}else{var d=this.parseLiteral(i,t);if(d.err)return d;s.push(d.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(i,t){var a=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Ve.literal,value:"<".concat(s,"/>"),location:Re(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var l=this.parseMessage(i+1,t,!0);if(l.err)return l;var d=l.val,k=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Ko(this.char()))return this.error(Ae.INVALID_TAG,Re(k,this.clonePosition()));var v=this.clonePosition(),E=this.parseTagName();return s!==E?this.error(Ae.UNMATCHED_CLOSING_TAG,Re(v,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Ve.tag,value:s,children:d,location:Re(a,this.clonePosition())},err:null}:this.error(Ae.INVALID_TAG,Re(k,this.clonePosition())))}else return this.error(Ae.UNCLOSED_TAG,Re(a,this.clonePosition()))}else return this.error(Ae.INVALID_TAG,Re(a,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&Hb(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,t){for(var a=this.clonePosition(),s="";;){var l=this.tryParseQuote(t);if(l){s+=l;continue}var d=this.tryParseUnquoted(i,t);if(d){s+=d;continue}var k=this.tryParseLeftAngleBracket();if(k){s+=k;continue}break}var v=Re(a,this.clonePosition());return{val:{type:Ve.literal,value:s,location:v},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Ub(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(a);this.bump()}return bo.apply(void 0,t)},e.prototype.tryParseUnquoted=function(i,t){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(t==="plural"||t==="selectordinal")||a===125&&i>0?null:(this.bump(),bo(a))},e.prototype.parseArgument=function(i,t){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Ae.EXPECT_ARGUMENT_CLOSING_BRACE,Re(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Ae.EMPTY_ARGUMENT,Re(a,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(Ae.MALFORMED_ARGUMENT,Re(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Ae.EXPECT_ARGUMENT_CLOSING_BRACE,Re(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Ve.argument,value:s,location:Re(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Ae.EXPECT_ARGUMENT_CLOSING_BRACE,Re(a,this.clonePosition())):this.parseArgumentOptions(i,t,s,a);default:return this.error(Ae.MALFORMED_ARGUMENT,Re(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),t=this.offset(),a=Io(this.message,t),s=t+a.length;this.bumpTo(s);var l=this.clonePosition(),d=Re(i,l);return{value:a,location:d}},e.prototype.parseArgumentOptions=function(i,t,a,s){var l,d=this.clonePosition(),k=this.parseIdentifierIfPossible().value,v=this.clonePosition();switch(k){case"":return this.error(Ae.EXPECT_ARGUMENT_TYPE,Re(d,v));case"number":case"date":case"time":{this.bumpSpace();var E=null;if(this.bumpIf(",")){this.bumpSpace();var m=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var A=jb(h.val);if(A.length===0)return this.error(Ae.EXPECT_ARGUMENT_STYLE,Re(this.clonePosition(),this.clonePosition()));var L=Re(m,this.clonePosition());E={style:A,styleLocation:L}}var P=this.tryParseArgumentClose(s);if(P.err)return P;var y=Re(s,this.clonePosition());if(E&&Fk(E==null?void 0:E.style,"::",0)){var _=Gb(E.style.slice(2));if(k==="number"){var h=this.parseNumberSkeletonFromString(_,E.styleLocation);return h.err?h:{val:{type:Ve.number,value:a,location:y,style:h.val},err:null}}else{if(_.length===0)return this.error(Ae.EXPECT_DATE_TIME_SKELETON,y);var K=_;this.locale&&(K=Nb(_,this.locale));var A={type:kt.dateTime,pattern:K,location:E.styleLocation,parsedOptions:this.shouldParseSkeletons?Tb(K):{}},G=k==="date"?Ve.date:Ve.time;return{val:{type:G,value:a,location:y,style:A},err:null}}}return{val:{type:k==="number"?Ve.number:k==="date"?Ve.date:Ve.time,value:a,location:y,style:(l=E==null?void 0:E.style)!==null&&l!==void 0?l:null},err:null}}case"plural":case"selectordinal":case"select":{var b=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Ae.EXPECT_SELECT_ARGUMENT_OPTIONS,Re(b,se({},b)));this.bumpSpace();var X=this.parseIdentifierIfPossible(),c=0;if(k!=="select"&&X.value==="offset"){if(!this.bumpIf(":"))return this.error(Ae.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Re(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(Ae.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ae.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),X=this.parseIdentifierIfPossible(),c=h.val}var M=this.tryParsePluralOrSelectOptions(i,k,t,X);if(M.err)return M;var P=this.tryParseArgumentClose(s);if(P.err)return P;var O=Re(s,this.clonePosition());return k==="select"?{val:{type:Ve.select,value:a,options:Mk(M.val),location:O},err:null}:{val:{type:Ve.plural,value:a,options:Mk(M.val),offset:c,pluralType:k==="plural"?"cardinal":"ordinal",location:O},err:null}}default:return this.error(Ae.INVALID_ARGUMENT_TYPE,Re(d,v))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(Ae.EXPECT_ARGUMENT_CLOSING_BRACE,Re(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,t=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Ae.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Re(s,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,t){var a=[];try{a=yb(i)}catch{return this.error(Ae.INVALID_NUMBER_SKELETON,t)}return{val:{type:kt.number,tokens:a,location:t,parsedOptions:this.shouldParseSkeletons?_b(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,t,a,s){for(var l,d=!1,k=[],v=new Set,E=s.value,m=s.location;;){if(E.length===0){var h=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var A=this.tryParseDecimalInteger(Ae.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ae.INVALID_PLURAL_ARGUMENT_SELECTOR);if(A.err)return A;m=Re(h,this.clonePosition()),E=this.message.slice(h.offset,this.offset())}else break}if(v.has(E))return this.error(t==="select"?Ae.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Ae.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,m);E==="other"&&(d=!0),this.bumpSpace();var L=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?Ae.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Ae.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Re(this.clonePosition(),this.clonePosition()));var P=this.parseMessage(i+1,t,a);if(P.err)return P;var y=this.tryParseArgumentClose(L);if(y.err)return y;k.push([E,{value:P.val,location:Re(L,this.clonePosition())}]),v.add(E),this.bumpSpace(),l=this.parseIdentifierIfPossible(),E=l.value,m=l.location}return k.length===0?this.error(t==="select"?Ae.EXPECT_SELECT_ARGUMENT_SELECTOR:Ae.EXPECT_PLURAL_ARGUMENT_SELECTOR,Re(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(Ae.MISSING_OTHER_CLAUSE,Re(this.clonePosition(),this.clonePosition())):{val:k,err:null}},e.prototype.tryParseDecimalInteger=function(i,t){var a=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var l=!1,d=0;!this.isEOF();){var k=this.char();if(k>=48&&k<=57)l=!0,d=d*10+(k-48),this.bump();else break}var v=Re(s,this.clonePosition());return l?(d*=a,Bb(d)?{val:d,err:null}:this.error(t,v)):this.error(i,v)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var t=Nv(this.message,i);if(t===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(i,t){return{val:null,err:{kind:i,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Fk(this.message,i,this.offset())){for(var t=0;t<i.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var t=this.offset(),a=this.message.indexOf(i,t);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var t=this.offset();if(t===i)break;if(t>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&bv(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),t=this.offset(),a=this.message.charCodeAt(t+(i>=65536?2:1));return a??null},e}();function Ko(e){return e>=97&&e<=122||e>=65&&e<=90}function Ub(e){return Ko(e)||e===47}function Hb(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function bv(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function qb(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Oo(e){e.forEach(function(i){if(delete i.location,pv(i)||Tv(i))for(var t in i.options)delete i.options[t].location,Oo(i.options[t].value);else Ev(i)&&yv(i.style)||(mv(i)||fv(i))&&No(i.style)?delete i.style.location:hv(i)&&Oo(i.children)})}function xb(e,i){i===void 0&&(i={}),i=se({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var t=new wb(e,i).parse();if(t.err){var a=SyntaxError(Ae[t.err.kind]);throw a.location=t.err.location,a.originalMessage=t.err.message,a}return i!=null&&i.captureLocation||Oo(t.val),t.val}var sr;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(sr||(sr={}));var Lr=function(e){$n(i,e);function i(t,a,s){var l=e.call(this,t)||this;return l.code=a,l.originalMessage=s,l}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),Vk=function(e){$n(i,e);function i(t,a,s,l){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(a,'". Options are "').concat(Object.keys(s).join('", "'),'"'),sr.INVALID_VALUE,l)||this}return i}(Lr),Yb=function(e){$n(i,e);function i(t,a,s){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(a),sr.INVALID_VALUE,s)||this}return i}(Lr),Cb=function(e){$n(i,e);function i(t,a){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(a,'"'),sr.MISSING_VALUE,a)||this}return i}(Lr),fn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(fn||(fn={}));function $b(e){return e.length<2?e:e.reduce(function(i,t){var a=i[i.length-1];return!a||a.type!==fn.literal||t.type!==fn.literal?i.push(t):a.value+=t.value,i},[])}function Iv(e){return typeof e=="function"}function ti(e,i,t,a,s,l,d){if(e.length===1&&Ok(e[0]))return[{type:fn.literal,value:e[0].value}];for(var k=[],v=0,E=e;v<E.length;v++){var m=E[v];if(Ok(m)){k.push({type:fn.literal,value:m.value});continue}if(fb(m)){typeof l=="number"&&k.push({type:fn.literal,value:t.getNumberFormat(i).format(l)});continue}var h=m.value;if(!(s&&h in s))throw new Cb(h,d);var A=s[h];if(mb(m)){(!A||typeof A=="string"||typeof A=="number")&&(A=typeof A=="string"||typeof A=="number"?String(A):""),k.push({type:typeof A=="string"?fn.literal:fn.object,value:A});continue}if(mv(m)){var L=typeof m.style=="string"?a.date[m.style]:No(m.style)?m.style.parsedOptions:void 0;k.push({type:fn.literal,value:t.getDateTimeFormat(i,L).format(A)});continue}if(fv(m)){var L=typeof m.style=="string"?a.time[m.style]:No(m.style)?m.style.parsedOptions:a.time.medium;k.push({type:fn.literal,value:t.getDateTimeFormat(i,L).format(A)});continue}if(Ev(m)){var L=typeof m.style=="string"?a.number[m.style]:yv(m.style)?m.style.parsedOptions:void 0;L&&L.scale&&(A=A*(L.scale||1)),k.push({type:fn.literal,value:t.getNumberFormat(i,L).format(A)});continue}if(hv(m)){var P=m.children,y=m.value,_=s[y];if(!Iv(_))throw new Yb(y,"function",d);var K=ti(P,i,t,a,s,l),G=_(K.map(function(c){return c.value}));Array.isArray(G)||(G=[G]),k.push.apply(k,G.map(function(c){return{type:typeof c=="string"?fn.literal:fn.object,value:c}}))}if(pv(m)){var b=m.options[A]||m.options.other;if(!b)throw new Vk(m.value,A,Object.keys(m.options),d);k.push.apply(k,ti(b.value,i,t,a,s));continue}if(Tv(m)){var b=m.options["=".concat(A)];if(!b){if(!Intl.PluralRules)throw new Lr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,sr.MISSING_INTL_API,d);var X=t.getPluralRules(i,{type:m.pluralType}).select(A-(m.offset||0));b=m.options[X]||m.options.other}if(!b)throw new Vk(m.value,A,Object.keys(m.options),d);k.push.apply(k,ti(b.value,i,t,a,s,A-(m.offset||0)));continue}}return $b(k)}function Jb(e,i){return i?se(se(se({},e||{}),i||{}),Object.keys(e).reduce(function(t,a){return t[a]=se(se({},e[a]),i[a]||{}),t},{})):e}function Wb(e,i){return i?Object.keys(e).reduce(function(t,a){return t[a]=Jb(e[a],i[a]),t},se({},e)):e}function Js(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function zb(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:er(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.NumberFormat).bind.apply(i,tr([void 0],t,!1)))},{cache:Js(e.number),strategy:nr.variadic}),getDateTimeFormat:er(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.DateTimeFormat).bind.apply(i,tr([void 0],t,!1)))},{cache:Js(e.dateTime),strategy:nr.variadic}),getPluralRules:er(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.PluralRules).bind.apply(i,tr([void 0],t,!1)))},{cache:Js(e.pluralRules),strategy:nr.variadic})}}var Kv=function(){function e(i,t,a,s){t===void 0&&(t=e.defaultLocale);var l=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(v){var E=l.formatToParts(v);if(E.length===1)return E[0].value;var m=E.reduce(function(h,A){return!h.length||A.type!==fn.literal||typeof h[h.length-1]!="string"?h.push(A.value):h[h.length-1]+=A.value,h},[]);return m.length<=1?m[0]||"":m},this.formatToParts=function(v){return ti(l.ast,l.locales,l.formatters,l.formats,v,void 0,l.message)},this.resolvedOptions=function(){var v;return{locale:((v=l.resolvedLocale)===null||v===void 0?void 0:v.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=t,this.resolvedLocale=e.resolveLocale(t),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=s||{};d.formatters;var k=ki(d,["formatters"]);this.ast=e.__parse(i,se(se({},k),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Wb(e.formats,a),this.formatters=s&&s.formatters||zb(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(i);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=xb,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),xr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(xr||(xr={}));var ra=function(e){$n(i,e);function i(t,a,s){var l=this,d=s?s instanceof Error?s:new Error(String(s)):void 0;return l=e.call(this,"[@formatjs/intl Error ".concat(t,"] ").concat(a,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,l.code=t,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(l,i),l}return i}(Error),Xb=function(e){$n(i,e);function i(t,a){return e.call(this,xr.UNSUPPORTED_FORMATTER,t,a)||this}return i}(ra),Zb=function(e){$n(i,e);function i(t,a){return e.call(this,xr.INVALID_CONFIG,t,a)||this}return i}(ra),Gk=function(e){$n(i,e);function i(t,a){return e.call(this,xr.MISSING_DATA,t,a)||this}return i}(ra),jn=function(e){$n(i,e);function i(t,a,s){var l=e.call(this,xr.FORMAT_ERROR,"".concat(t,`
Locale: `).concat(a,`
`),s)||this;return l.locale=a,l}return i}(ra),Ws=function(e){$n(i,e);function i(t,a,s,l){var d=e.call(this,"".concat(t,`
MessageID: `).concat(s==null?void 0:s.id,`
Default Message: `).concat(s==null?void 0:s.defaultMessage,`
Description: `).concat(s==null?void 0:s.description,`
`),a,l)||this;return d.descriptor=s,d.locale=a,d}return i}(jn),Qb=function(e){$n(i,e);function i(t,a){var s=e.call(this,xr.MISSING_TRANSLATION,'Missing message: "'.concat(t.id,'" for locale "').concat(a,'", using ').concat(t.defaultMessage?"default message (".concat(typeof t.defaultMessage=="string"?t.defaultMessage:t.defaultMessage.map(function(l){var d;return(d=l.value)!==null&&d!==void 0?d:JSON.stringify(l)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=t,s}return i}(ra);function e1(e,i,t){if(t===void 0&&(t=Error),!e)throw new t(i)}function mt(e,i,t){return t===void 0&&(t={}),i.reduce(function(a,s){return s in e?a[s]=e[s]:s in t&&(a[s]=t[s]),a},{})}var n1=function(e){},r1=function(e){},Ov={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:n1,onWarn:r1};function Lv(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Hr(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function t1(e){e===void 0&&(e=Lv());var i=Intl.RelativeTimeFormat,t=Intl.ListFormat,a=Intl.DisplayNames,s=er(function(){for(var k,v=[],E=0;E<arguments.length;E++)v[E]=arguments[E];return new((k=Intl.DateTimeFormat).bind.apply(k,tr([void 0],v,!1)))},{cache:Hr(e.dateTime),strategy:nr.variadic}),l=er(function(){for(var k,v=[],E=0;E<arguments.length;E++)v[E]=arguments[E];return new((k=Intl.NumberFormat).bind.apply(k,tr([void 0],v,!1)))},{cache:Hr(e.number),strategy:nr.variadic}),d=er(function(){for(var k,v=[],E=0;E<arguments.length;E++)v[E]=arguments[E];return new((k=Intl.PluralRules).bind.apply(k,tr([void 0],v,!1)))},{cache:Hr(e.pluralRules),strategy:nr.variadic});return{getDateTimeFormat:s,getNumberFormat:l,getMessageFormat:er(function(k,v,E,m){return new Kv(k,v,E,se({formatters:{getNumberFormat:l,getDateTimeFormat:s,getPluralRules:d}},m||{}))},{cache:Hr(e.message),strategy:nr.variadic}),getRelativeTimeFormat:er(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(i.bind.apply(i,tr([void 0],k,!1)))},{cache:Hr(e.relativeTime),strategy:nr.variadic}),getPluralRules:d,getListFormat:er(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(t.bind.apply(t,tr([void 0],k,!1)))},{cache:Hr(e.list),strategy:nr.variadic}),getDisplayNames:er(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(a.bind.apply(a,tr([void 0],k,!1)))},{cache:Hr(e.displayNames),strategy:nr.variadic})}}function Wo(e,i,t,a){var s=e&&e[i],l;if(s&&(l=s[t]),l)return l;a(new Xb("No ".concat(i," format named: ").concat(t)))}function Za(e,i){return Object.keys(e).reduce(function(t,a){return t[a]=se({timeZone:i},e[a]),t},{})}function jk(e,i){var t=Object.keys(se(se({},e),i));return t.reduce(function(a,s){return a[s]=se(se({},e[s]||{}),i[s]||{}),a},{})}function wk(e,i){if(!i)return e;var t=Kv.formats;return se(se(se({},t),e),{date:jk(Za(t.date,i),Za(e.date||{},i)),time:jk(Za(t.time,i),Za(e.time||{},i))})}var Lo=function(e,i,t,a,s){var l=e.locale,d=e.formats,k=e.messages,v=e.defaultLocale,E=e.defaultFormats,m=e.fallbackOnEmptyString,h=e.onError,A=e.timeZone,L=e.defaultRichTextElements;t===void 0&&(t={id:""});var P=t.id,y=t.defaultMessage;e1(!!P,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var _=String(P),K=k&&Object.prototype.hasOwnProperty.call(k,_)&&k[_];if(Array.isArray(K)&&K.length===1&&K[0].type===Ve.literal)return K[0].value;if(!a&&K&&typeof K=="string"&&!L)return K.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=se(se({},L),a||{}),d=wk(d,A),E=wk(E,A),!K){if(m===!1&&K==="")return K;if((!y||l&&l.toLowerCase()!==v.toLowerCase())&&h(new Qb(t,l)),y)try{var G=i.getMessageFormat(y,v,E,s);return G.format(a)}catch(b){return h(new Ws('Error formatting default message for: "'.concat(_,'", rendering default message verbatim'),l,t,b)),typeof y=="string"?y:_}return _}try{var G=i.getMessageFormat(K,l,d,se({formatters:i},s||{}));return G.format(a)}catch(b){h(new Ws('Error formatting message: "'.concat(_,'", using ').concat(y?"default message":"id"," as fallback."),l,t,b))}if(y)try{var G=i.getMessageFormat(y,v,E,s);return G.format(a)}catch(b){h(new Ws('Error formatting the default message for: "'.concat(_,'", rendering message verbatim'),l,t,b))}return typeof K=="string"?K:typeof y=="string"?y:_},a1=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function ta(e,i,t,a){var s=e.locale,l=e.formats,d=e.onError,k=e.timeZone;a===void 0&&(a={});var v=a.format,E=se(se({},k&&{timeZone:k}),v&&Wo(l,i,v,d)),m=mt(a,a1,E);return i==="time"&&!m.hour&&!m.minute&&!m.second&&!m.timeStyle&&!m.dateStyle&&(m=se(se({},m),{hour:"numeric",minute:"numeric"})),t(s,m)}function i1(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return ta(e,"date",i,d).format(k)}catch(v){e.onError(new jn("Error formatting date.",e.locale,v))}return String(k)}function s1(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return ta(e,"time",i,d).format(k)}catch(v){e.onError(new jn("Error formatting time.",e.locale,v))}return String(k)}function o1(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=t[2],k=d===void 0?{}:d,v=typeof s=="string"?new Date(s||0):s,E=typeof l=="string"?new Date(l||0):l;try{return ta(e,"dateTimeRange",i,k).formatRange(v,E)}catch(m){e.onError(new jn("Error formatting date time range.",e.locale,m))}return String(v)}function l1(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return ta(e,"date",i,d).formatToParts(k)}catch(v){e.onError(new jn("Error formatting date.",e.locale,v))}return[]}function u1(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return ta(e,"time",i,d).formatToParts(k)}catch(v){e.onError(new jn("Error formatting time.",e.locale,v))}return[]}var d1=["style","type","fallback","languageDisplay"];function k1(e,i,t,a){var s=e.locale,l=e.onError,d=Intl.DisplayNames;d||l(new Lr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,sr.MISSING_INTL_API));var k=mt(a,d1);try{return i(s,k).of(t)}catch(v){l(new jn("Error formatting display name.",s,v))}}var g1=["type","style"],Uk=Date.now();function v1(e){return"".concat(Uk,"_").concat(e,"_").concat(Uk)}function E1(e,i,t,a){a===void 0&&(a={});var s=Dv(e,i,t,a).reduce(function(l,d){var k=d.value;return typeof k!="string"?l.push(k):typeof l[l.length-1]=="string"?l[l.length-1]+=k:l.push(k),l},[]);return s.length===1?s[0]:s.length===0?"":s}function Dv(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={});var d=Intl.ListFormat;d||l(new Lr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,sr.MISSING_INTL_API));var k=mt(a,g1);try{var v={},E=t.map(function(m,h){if(typeof m=="object"){var A=v1(h);return v[A]=m,A}return String(m)});return i(s,k).formatToParts(E).map(function(m){return m.type==="literal"?m:se(se({},m),{value:v[m.value]||m.value})})}catch(m){l(new jn("Error formatting list.",s,m))}return t}var m1=["type"];function f1(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={}),Intl.PluralRules||l(new Lr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,sr.MISSING_INTL_API));var d=mt(a,m1);try{return i(s,d).select(t)}catch(k){l(new jn("Error formatting plural.",s,k))}return"other"}var p1=["numeric","style"];function T1(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var d=t.format,k=!!d&&Wo(s,"relative",d,l)||{},v=mt(t,p1,k);return i(a,v)}function h1(e,i,t,a,s){s===void 0&&(s={}),a||(a="second");var l=Intl.RelativeTimeFormat;l||e.onError(new Lr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,sr.MISSING_INTL_API));try{return T1(e,i,s).format(t,a)}catch(d){e.onError(new jn("Error formatting relative time.",e.locale,d))}return String(t)}var y1=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Pv(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var d=t.format,k=d&&Wo(s,"number",d,l)||{},v=mt(t,y1,k);return i(a,v)}function A1(e,i,t,a){a===void 0&&(a={});try{return Pv(e,i,a).format(t)}catch(s){e.onError(new jn("Error formatting number.",e.locale,s))}return String(t)}function c1(e,i,t,a){a===void 0&&(a={});try{return Pv(e,i,a).formatToParts(t)}catch(s){e.onError(new jn("Error formatting number.",e.locale,s))}return[]}function R1(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function _1(e){e.onWarn&&e.defaultRichTextElements&&R1(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function N1(e,i){var t=t1(i),a=se(se({},Ov),e),s=a.locale,l=a.defaultLocale,d=a.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&d?d(new Gk('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&d&&d(new Gk('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new Zb('"locale" was not configured, using "'.concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),_1(a),se(se({},a),{formatters:t,formatNumber:A1.bind(null,a,t.getNumberFormat),formatNumberToParts:c1.bind(null,a,t.getNumberFormat),formatRelativeTime:h1.bind(null,a,t.getRelativeTimeFormat),formatDate:i1.bind(null,a,t.getDateTimeFormat),formatDateToParts:l1.bind(null,a,t.getDateTimeFormat),formatTime:s1.bind(null,a,t.getDateTimeFormat),formatDateTimeRange:o1.bind(null,a,t.getDateTimeFormat),formatTimeToParts:u1.bind(null,a,t.getDateTimeFormat),formatPlural:f1.bind(null,a,t.getPluralRules),formatMessage:Lo.bind(null,a,t),$t:Lo.bind(null,a,t),formatList:E1.bind(null,a,t.getListFormat),formatListToParts:Dv.bind(null,a,t.getListFormat),formatDisplayName:k1.bind(null,a,t.getDisplayNames)})}function S1(e,i,t){if(t===void 0&&(t=Error),!e)throw new t(i)}function b1(e){S1(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var I1=se(se({},Ov),{textComponent:F.Fragment}),K1={key:42},O1=function(e){return F.isValidElement(e)?F.createElement(F.Fragment,K1,e):e},L1=function(e){var i;return(i=F.Children.map(e,O1))!==null&&i!==void 0?i:[]};function D1(e){return function(i){return e(F.Children.toArray(i))}}var Hk={exports:{}},Ke={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qk;function P1(){if(qk)return Ke;qk=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,k=e?Symbol.for("react.context"):60110,v=e?Symbol.for("react.async_mode"):60111,E=e?Symbol.for("react.concurrent_mode"):60111,m=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,A=e?Symbol.for("react.suspense_list"):60120,L=e?Symbol.for("react.memo"):60115,P=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,_=e?Symbol.for("react.fundamental"):60117,K=e?Symbol.for("react.responder"):60118,G=e?Symbol.for("react.scope"):60119;function b(c){if(typeof c=="object"&&c!==null){var M=c.$$typeof;switch(M){case i:switch(c=c.type,c){case v:case E:case a:case l:case s:case h:return c;default:switch(c=c&&c.$$typeof,c){case k:case m:case P:case L:case d:return c;default:return M}}case t:return M}}}function X(c){return b(c)===E}return Ke.AsyncMode=v,Ke.ConcurrentMode=E,Ke.ContextConsumer=k,Ke.ContextProvider=d,Ke.Element=i,Ke.ForwardRef=m,Ke.Fragment=a,Ke.Lazy=P,Ke.Memo=L,Ke.Portal=t,Ke.Profiler=l,Ke.StrictMode=s,Ke.Suspense=h,Ke.isAsyncMode=function(c){return X(c)||b(c)===v},Ke.isConcurrentMode=X,Ke.isContextConsumer=function(c){return b(c)===k},Ke.isContextProvider=function(c){return b(c)===d},Ke.isElement=function(c){return typeof c=="object"&&c!==null&&c.$$typeof===i},Ke.isForwardRef=function(c){return b(c)===m},Ke.isFragment=function(c){return b(c)===a},Ke.isLazy=function(c){return b(c)===P},Ke.isMemo=function(c){return b(c)===L},Ke.isPortal=function(c){return b(c)===t},Ke.isProfiler=function(c){return b(c)===l},Ke.isStrictMode=function(c){return b(c)===s},Ke.isSuspense=function(c){return b(c)===h},Ke.isValidElementType=function(c){return typeof c=="string"||typeof c=="function"||c===a||c===E||c===l||c===s||c===h||c===A||typeof c=="object"&&c!==null&&(c.$$typeof===P||c.$$typeof===L||c.$$typeof===d||c.$$typeof===k||c.$$typeof===m||c.$$typeof===_||c.$$typeof===K||c.$$typeof===G||c.$$typeof===y)},Ke.typeOf=b,Ke}var xk;function F1(){return xk||(xk=1,Hk.exports=P1()),Hk.exports}var zs,Yk;function M1(){if(Yk)return zs;Yk=1;var e=F1(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=a,l[e.Memo]=s;function d(P){return e.isMemo(P)?s:l[P.$$typeof]||i}var k=Object.defineProperty,v=Object.getOwnPropertyNames,E=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,A=Object.prototype;function L(P,y,_){if(typeof y!="string"){if(A){var K=h(y);K&&K!==A&&L(P,K,_)}var G=v(y);E&&(G=G.concat(E(y)));for(var b=d(P),X=d(y),c=0;c<G.length;++c){var M=G[c];if(!t[M]&&!(_&&_[M])&&!(X&&X[M])&&!(b&&b[M])){var O=m(y,M);try{k(P,M,O)}catch{}}}}return P}return zs=L,zs}M1();var zo=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=F.createContext(null)):F.createContext(null);zo.Consumer;zo.Provider;var B1=zo;function Fv(){var e=F.useContext(B1);return b1(e),e}var Do;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Do||(Do={}));var Po;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Po||(Po={}));function Mv(e){var i=function(t){var a=Fv(),s=t.value,l=t.children,d=ki(t,["value","children"]),k=typeof s=="string"?new Date(s||0):s,v=e==="formatDate"?a.formatDateToParts(k,d):a.formatTimeToParts(k,d);return l(v)};return i.displayName=Po[e],i}function aa(e){var i=function(t){var a=Fv(),s=t.value,l=t.children,d=ki(t,["value","children"]),k=a[e](s,d);if(typeof l=="function")return l(k);var v=a.textComponent||F.Fragment;return F.createElement(v,null,k)};return i.displayName=Do[e],i}function Bv(e){return e&&Object.keys(e).reduce(function(i,t){var a=e[t];return i[t]=Iv(a)?D1(a):a,i},{})}var Ck=function(e,i,t,a){for(var s=[],l=4;l<arguments.length;l++)s[l-4]=arguments[l];var d=Bv(a),k=Lo.apply(void 0,tr([e,i,t,d],s,!1));return Array.isArray(k)?L1(k):k},V1=function(e,i){var t=e.defaultRichTextElements,a=ki(e,["defaultRichTextElements"]),s=Bv(t),l=N1(se(se(se({},I1),a),{defaultRichTextElements:s}),i),d={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:s};return se(se({},l),{formatMessage:Ck.bind(null,d,l.formatters),$t:Ck.bind(null,d,l.formatters)})};aa("formatDate");aa("formatTime");aa("formatNumber");aa("formatList");aa("formatDisplayName");Mv("formatDate");Mv("formatTime");function Xo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fo={exports:{}},G1=Fo.exports,$k;function j1(){return $k||($k=1,function(e,i){(function(t,a){e.exports=a()})(G1,function(){var t,a,s=1e3,l=6e4,d=36e5,k=864e5,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,E=31536e6,m=2628e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,A={years:E,months:m,days:k,hours:d,minutes:l,seconds:s,milliseconds:1,weeks:6048e5},L=function(M){return M instanceof X},P=function(M,O,I){return new X(M,I,O.$l)},y=function(M){return a.p(M)+"s"},_=function(M){return M<0},K=function(M){return _(M)?Math.ceil(M):Math.floor(M)},G=function(M){return Math.abs(M)},b=function(M,O){return M?_(M)?{negative:!0,format:""+G(M)+O}:{negative:!1,format:""+M+O}:{negative:!1,format:""}},X=function(){function M(I,Y,z){var U=this;if(this.$d={},this.$l=z,I===void 0&&(this.$ms=0,this.parseFromMilliseconds()),Y)return P(I*A[y(Y)],this);if(typeof I=="number")return this.$ms=I,this.parseFromMilliseconds(),this;if(typeof I=="object")return Object.keys(I).forEach(function(C){U.$d[y(C)]=I[C]}),this.calMilliseconds(),this;if(typeof I=="string"){var ne=I.match(h);if(ne){var W=ne.slice(2).map(function(C){return C!=null?Number(C):0});return this.$d.years=W[0],this.$d.months=W[1],this.$d.weeks=W[2],this.$d.days=W[3],this.$d.hours=W[4],this.$d.minutes=W[5],this.$d.seconds=W[6],this.calMilliseconds(),this}}return this}var O=M.prototype;return O.calMilliseconds=function(){var I=this;this.$ms=Object.keys(this.$d).reduce(function(Y,z){return Y+(I.$d[z]||0)*A[z]},0)},O.parseFromMilliseconds=function(){var I=this.$ms;this.$d.years=K(I/E),I%=E,this.$d.months=K(I/m),I%=m,this.$d.days=K(I/k),I%=k,this.$d.hours=K(I/d),I%=d,this.$d.minutes=K(I/l),I%=l,this.$d.seconds=K(I/s),I%=s,this.$d.milliseconds=I},O.toISOString=function(){var I=b(this.$d.years,"Y"),Y=b(this.$d.months,"M"),z=+this.$d.days||0;this.$d.weeks&&(z+=7*this.$d.weeks);var U=b(z,"D"),ne=b(this.$d.hours,"H"),W=b(this.$d.minutes,"M"),C=this.$d.seconds||0;this.$d.milliseconds&&(C+=this.$d.milliseconds/1e3,C=Math.round(1e3*C)/1e3);var q=b(C,"S"),$=I.negative||Y.negative||U.negative||ne.negative||W.negative||q.negative,Z=ne.format||W.format||q.format?"T":"",x=($?"-":"")+"P"+I.format+Y.format+U.format+Z+ne.format+W.format+q.format;return x==="P"||x==="-P"?"P0D":x},O.toJSON=function(){return this.toISOString()},O.format=function(I){var Y=I||"YYYY-MM-DDTHH:mm:ss",z={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return Y.replace(v,function(U,ne){return ne||String(z[U])})},O.as=function(I){return this.$ms/A[y(I)]},O.get=function(I){var Y=this.$ms,z=y(I);return z==="milliseconds"?Y%=1e3:Y=z==="weeks"?K(Y/A[z]):this.$d[z],Y||0},O.add=function(I,Y,z){var U;return U=Y?I*A[y(Y)]:L(I)?I.$ms:P(I,this).$ms,P(this.$ms+U*(z?-1:1),this)},O.subtract=function(I,Y){return this.add(I,Y,!0)},O.locale=function(I){var Y=this.clone();return Y.$l=I,Y},O.clone=function(){return P(this.$ms,this)},O.humanize=function(I){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!I)},O.valueOf=function(){return this.asMilliseconds()},O.milliseconds=function(){return this.get("milliseconds")},O.asMilliseconds=function(){return this.as("milliseconds")},O.seconds=function(){return this.get("seconds")},O.asSeconds=function(){return this.as("seconds")},O.minutes=function(){return this.get("minutes")},O.asMinutes=function(){return this.as("minutes")},O.hours=function(){return this.get("hours")},O.asHours=function(){return this.as("hours")},O.days=function(){return this.get("days")},O.asDays=function(){return this.as("days")},O.weeks=function(){return this.get("weeks")},O.asWeeks=function(){return this.as("weeks")},O.months=function(){return this.get("months")},O.asMonths=function(){return this.as("months")},O.years=function(){return this.get("years")},O.asYears=function(){return this.as("years")},M}(),c=function(M,O,I){return M.add(O.years()*I,"y").add(O.months()*I,"M").add(O.days()*I,"d").add(O.hours()*I,"h").add(O.minutes()*I,"m").add(O.seconds()*I,"s").add(O.milliseconds()*I,"ms")};return function(M,O,I){t=I,a=I().$utils(),I.duration=function(U,ne){var W=I.locale();return P(U,{$l:W},ne)},I.isDuration=L;var Y=O.prototype.add,z=O.prototype.subtract;O.prototype.add=function(U,ne){return L(U)?c(this,U,1):Y.bind(this)(U,ne)},O.prototype.subtract=function(U,ne){return L(U)?c(this,U,-1):z.bind(this)(U,ne)}}})}(Fo)),Fo.exports}var w1=j1();const U1=Xo(w1);var Mo={exports:{}},H1=Mo.exports,Jk;function q1(){return Jk||(Jk=1,function(e,i){(function(t,a){e.exports=a()})(H1,function(){var t="day";return function(a,s,l){var d=function(E){return E.add(4-E.isoWeekday(),t)},k=s.prototype;k.isoWeekYear=function(){return d(this).year()},k.isoWeek=function(E){if(!this.$utils().u(E))return this.add(7*(E-this.isoWeek()),t);var m,h,A,L,P=d(this),y=(m=this.isoWeekYear(),h=this.$u,A=(h?l.utc:l)().year(m).startOf("year"),L=4-A.isoWeekday(),A.isoWeekday()>4&&(L+=7),A.add(L,t));return P.diff(y,"week")+1},k.isoWeekday=function(E){return this.$utils().u(E)?this.day()||7:this.day(this.day()%7?E:E-7)};var v=k.startOf;k.startOf=function(E,m){var h=this.$utils(),A=!!h.u(m)||m;return h.p(E)==="isoweek"?A?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):v.bind(this)(E,m)}}})}(Mo)),Mo.exports}var x1=q1();const Y1=Xo(x1);var Bo={exports:{}},C1=Bo.exports,Wk;function $1(){return Wk||(Wk=1,function(e,i){(function(t,a){e.exports=a()})(C1,function(){var t="minute",a=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(l,d,k){var v=d.prototype;k.utc=function(y){var _={date:y,utc:!0,args:arguments};return new d(_)},v.utc=function(y){var _=k(this.toDate(),{locale:this.$L,utc:!0});return y?_.add(this.utcOffset(),t):_},v.local=function(){return k(this.toDate(),{locale:this.$L,utc:!1})};var E=v.parse;v.parse=function(y){y.utc&&(this.$u=!0),this.$utils().u(y.$offset)||(this.$offset=y.$offset),E.call(this,y)};var m=v.init;v.init=function(){if(this.$u){var y=this.$d;this.$y=y.getUTCFullYear(),this.$M=y.getUTCMonth(),this.$D=y.getUTCDate(),this.$W=y.getUTCDay(),this.$H=y.getUTCHours(),this.$m=y.getUTCMinutes(),this.$s=y.getUTCSeconds(),this.$ms=y.getUTCMilliseconds()}else m.call(this)};var h=v.utcOffset;v.utcOffset=function(y,_){var K=this.$utils().u;if(K(y))return this.$u?0:K(this.$offset)?h.call(this):this.$offset;if(typeof y=="string"&&(y=function(c){c===void 0&&(c="");var M=c.match(a);if(!M)return null;var O=(""+M[0]).match(s)||["-",0,0],I=O[0],Y=60*+O[1]+ +O[2];return Y===0?0:I==="+"?Y:-Y}(y),y===null))return this;var G=Math.abs(y)<=16?60*y:y,b=this;if(_)return b.$offset=G,b.$u=y===0,b;if(y!==0){var X=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(b=this.local().add(G+X,t)).$offset=G,b.$x.$localOffset=X}else b=this.utc();return b};var A=v.format;v.format=function(y){var _=y||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return A.call(this,_)},v.valueOf=function(){var y=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*y},v.isUTC=function(){return!!this.$u},v.toISOString=function(){return this.toDate().toISOString()},v.toString=function(){return this.toDate().toUTCString()};var L=v.toDate;v.toDate=function(y){return y==="s"&&this.$offset?k(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():L.call(this)};var P=v.diff;v.diff=function(y,_,K){if(y&&this.$u===y.$u)return P.call(this,y,_,K);var G=this.local(),b=k(y).local();return P.call(G,b,_,K)}}})}(Bo)),Bo.exports}var J1=$1();const W1=Xo(J1),z1=Lv(),gi=e=>V1({locale:"nb-NO",messages:e},z1),vi={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};gi(vi);var Vo={exports:{}},X1=Vo.exports,zk;function Z1(){return zk||(zk=1,function(e,i){(function(t,a){e.exports=a(na)})(X1,function(t){function a(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var s=a(t),l={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(l,null,!0),l})}(Vo)),Vo.exports}Z1();na.extend(W1);na.extend(Y1);na.extend(U1);gi(vi);gi(vi);var Xk={exports:{}},Ht={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zk;function Q1(){if(Zk)return Ht;Zk=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function t(a,s,l){var d=null;if(l!==void 0&&(d=""+l),s.key!==void 0&&(d=""+s.key),"key"in s){l={};for(var k in s)k!=="key"&&(l[k]=s[k])}else l=s;return s=l.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:l}}return Ht.Fragment=i,Ht.jsx=t,Ht.jsxs=t,Ht}var Qk;function eI(){return Qk||(Qk=1,Xk.exports=Q1()),Xk.exports}eI();gi(vi);F.createContext({});var Go={exports:{}},nI=Go.exports,eg;function rI(){return eg||(eg=1,function(e,i){(function(t,a){e.exports=a()})(nI,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,l=/\d\d/,d=/\d\d?/,k=/\d*[^-_:/,()\s\d]+/,v={},E=function(_){return(_=+_)+(_>68?1900:2e3)},m=function(_){return function(K){this[_]=+K}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(_){(this.zone||(this.zone={})).offset=function(K){if(!K||K==="Z")return 0;var G=K.match(/([+-]|\d\d)/g),b=60*G[1]+(+G[2]||0);return b===0?0:G[0]==="+"?-b:b}(_)}],A=function(_){var K=v[_];return K&&(K.indexOf?K:K.s.concat(K.f))},L=function(_,K){var G,b=v.meridiem;if(b){for(var X=1;X<=24;X+=1)if(_.indexOf(b(X,0,K))>-1){G=X>12;break}}else G=_===(K?"pm":"PM");return G},P={A:[k,function(_){this.afternoon=L(_,!1)}],a:[k,function(_){this.afternoon=L(_,!0)}],Q:[s,function(_){this.month=3*(_-1)+1}],S:[s,function(_){this.milliseconds=100*+_}],SS:[l,function(_){this.milliseconds=10*+_}],SSS:[/\d{3}/,function(_){this.milliseconds=+_}],s:[d,m("seconds")],ss:[d,m("seconds")],m:[d,m("minutes")],mm:[d,m("minutes")],H:[d,m("hours")],h:[d,m("hours")],HH:[d,m("hours")],hh:[d,m("hours")],D:[d,m("day")],DD:[l,m("day")],Do:[k,function(_){var K=v.ordinal,G=_.match(/\d+/);if(this.day=G[0],K)for(var b=1;b<=31;b+=1)K(b).replace(/\[|\]/g,"")===_&&(this.day=b)}],w:[d,m("week")],ww:[l,m("week")],M:[d,m("month")],MM:[l,m("month")],MMM:[k,function(_){var K=A("months"),G=(A("monthsShort")||K.map(function(b){return b.slice(0,3)})).indexOf(_)+1;if(G<1)throw new Error;this.month=G%12||G}],MMMM:[k,function(_){var K=A("months").indexOf(_)+1;if(K<1)throw new Error;this.month=K%12||K}],Y:[/[+-]?\d+/,m("year")],YY:[l,function(_){this.year=E(_)}],YYYY:[/\d{4}/,m("year")],Z:h,ZZ:h};function y(_){var K,G;K=_,G=v&&v.formats;for(var b=(_=K.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(z,U,ne){var W=ne&&ne.toUpperCase();return U||G[ne]||t[ne]||G[W].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(C,q,$){return q||$.slice(1)})})).match(a),X=b.length,c=0;c<X;c+=1){var M=b[c],O=P[M],I=O&&O[0],Y=O&&O[1];b[c]=Y?{regex:I,parser:Y}:M.replace(/^\[|\]$/g,"")}return function(z){for(var U={},ne=0,W=0;ne<X;ne+=1){var C=b[ne];if(typeof C=="string")W+=C.length;else{var q=C.regex,$=C.parser,Z=z.slice(W),x=q.exec(Z)[0];$.call(U,x),z=z.replace(x,"")}}return function(ee){var ae=ee.afternoon;if(ae!==void 0){var re=ee.hours;ae?re<12&&(ee.hours+=12):re===12&&(ee.hours=0),delete ee.afternoon}}(U),U}}return function(_,K,G){G.p.customParseFormat=!0,_&&_.parseTwoDigitYear&&(E=_.parseTwoDigitYear);var b=K.prototype,X=b.parse;b.parse=function(c){var M=c.date,O=c.utc,I=c.args;this.$u=O;var Y=I[1];if(typeof Y=="string"){var z=I[2]===!0,U=I[3]===!0,ne=z||U,W=I[2];U&&(W=I[2]),v=this.$locale(),!z&&W&&(v=G.Ls[W]),this.$d=function(Z,x,ee,ae){try{if(["x","X"].indexOf(x)>-1)return new Date((x==="X"?1e3:1)*Z);var re=y(x)(Z),_e=re.year,Se=re.month,qe=re.day,we=re.hours,ln=re.minutes,cn=re.seconds,un=re.milliseconds,ze=re.zone,xe=re.week,Ce=new Date,Qe=qe||(_e||Se?1:Ce.getDate()),dn=_e||Ce.getFullYear(),$e=0;_e&&!Se||($e=Se>0?Se-1:Ce.getMonth());var kn,or=we||0,rn=ln||0,Jn=cn||0,lr=un||0;return ze?new Date(Date.UTC(dn,$e,Qe,or,rn,Jn,lr+60*ze.offset*1e3)):ee?new Date(Date.UTC(dn,$e,Qe,or,rn,Jn,lr)):(kn=new Date(dn,$e,Qe,or,rn,Jn,lr),xe&&(kn=ae(kn).week(xe).toDate()),kn)}catch{return new Date("")}}(M,Y,O,G),this.init(),W&&W!==!0&&(this.$L=this.locale(W).$L),ne&&M!=this.format(Y)&&(this.$d=new Date("")),v={}}else if(Y instanceof Array)for(var C=Y.length,q=1;q<=C;q+=1){I[1]=Y[q-1];var $=G.apply(this,I);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}q===C&&(this.$d=new Date(""))}else X.call(this,c)}}})}(Go)),Go.exports}var tI=rI();const aI=kv(tI);na.extend(aI);pn(ea);const iI=e=>{const i=e.aktiveNaturalytelser.reduce((a,s)=>{const l=s.type;return l in a?{...a,[l]:[...a[l],s]}:{...a,[l]:[s]}},{}),t={};return Object.entries(i).forEach(([a,s])=>{const l=s.sort((d,k)=>jS({fom:d.periode.fomDato,tom:d.periode.tomDato},{fom:k.periode.fomDato,tom:k.periode.tomDato})).reverse();t[a]=l.flatMap((d,k,v)=>{const E=v[k+1],m=d.periode.tomDato,h=E==null?void 0:E.periode.fomDato;return m===dt?[]:[{...d,periode:{fomDato:sk(m,1),tomDato:h?sk(h,-1):dt}}]})}),t},Vv=({inntektsmelding:e,alleKodeverk:i})=>{const t=Cn(),a=iI(e);return B.jsx(ir,{tittel:t.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?B.jsx("span",{children:B.jsx(Le,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):B.jsx(oi,{gap:"1",children:Object.entries(a).map(([s,l])=>{var d;return B.jsxs("div",{children:[B.jsx("span",{children:(d=i.NaturalYtelseType.find(k=>k.kode===s))==null?void 0:d.navn}),B.jsx("ul",{children:l.map(k=>B.jsxs(J.Fragment,{children:[B.jsxs("li",{children:[B.jsx(Le,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",B.jsx($t,{dateString:k.periode.fomDato})]}),k.periode.tomDato!==dt&&B.jsxs("li",{children:[B.jsx(Le,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",B.jsx($t,{dateString:k.periode.tomDato})]}),B.jsxs("li",{children:[B.jsx(Le,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",B.jsx(ot,{beløp:k.beloepPerMnd.verdi})]})]},k.indexKey))})]},s)})})})};Vv.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const Gv=({kildeSystem:e})=>{const i=Cn(),t=F.useMemo(()=>{switch(e.toUpperCase()){case"NAV_NO":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}},[i,e]);return B.jsx(ir,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:t})};Gv.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const jv=({inntektsmelding:e})=>{const i=Cn();return B.jsxs(ir,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[B.jsxs("span",{children:[B.jsx(Le,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),B.jsxs("span",{children:[B.jsx(Le,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};jv.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const wv=({inntektsmelding:e,fagsak:i,arbeidsgiverOpplysninger:t})=>{const a=`IM ${t.navn} - ${Qg(e.motattDato)}`;return B.jsx(Co,{type:"button",onClick:()=>{JN(i.saksnummer,e.journalpostId,e.dokumentId,a)},variant:"secondary",size:"small",icon:B.jsx(gR,{}),children:B.jsx(Le,{id:"InntektsmeldingFaktaPanel.modal.trigger"})})};wv.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: SkjermlenkeType | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string | null;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"skjermlenke",value:{name:"union",raw:"SkjermlenkeType | null",elements:[{name:"SkjermlenkeType"},{name:"null"}],required:!0}},{key:"dokumenter",value:{name:"union",raw:"HistorikkInnslagDokumentLink[] | null",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  skjermlenke: SkjermlenkeType | null;
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
>`},description:""}}};const Uv=({inntektsmelding:e})=>{const i=Cn();if(e.refusjonsperioder.length===0)return B.jsx(ir,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:e.refusjonPrMnd?B.jsx(ot,{beløp:e.refusjonPrMnd}):B.jsx(Le,{tagName:"span",id:"InntektsmeldingFaktaPanel.refusjon.ingen"})});const t=[...e.refusjonsperioder].sort((a,s)=>new Date(a.fom).getTime()-new Date(s.fom).getTime());return B.jsxs(ir,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:[B.jsx("span",{children:"Krever refusjon"}),B.jsx(ot,{beløp:e.refusjonPrMnd??0}),B.jsx("span",{children:"Endringer i perioden:"}),B.jsx("ul",{children:t.map(a=>B.jsx("li",{children:B.jsx(Le,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:B.jsx(ot,{beløp:a.refusjonsbeløp.verdi}),fom:B.jsx($t,{dateString:a.fom})}})},a.indexKey))})]})};Uv.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Hv=({startDatoPermisjon:e,ytelse:i})=>{const t=Cn();return e?B.jsxs(ir,{tittel:t.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:i.toLowerCase()}),children:[B.jsx("span",{children:e?B.jsx($t,{dateString:e}):"-"}),B.jsx("span",{children:B.jsx(Le,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};Hv.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const sI="_behandlingCircleIngen_g2j3j_1",oI="_behandlingCircleDenne_g2j3j_5",lI="_behandlingCircleAndre_g2j3j_9",uI="_container_g2j3j_13",dI="_ingenInntektsmeldinger_g2j3j_20",Yt={behandlingCircleIngen:sI,behandlingCircleDenne:oI,behandlingCircleAndre:lI,container:uI,ingenInntektsmeldinger:dI},qv=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:i,alleBehandlinger:t})=>{var k;const{alleKodeverk:a,fagsak:s,behandling:l}=rv(),d=Cn();return B.jsxs(oi,{gap:"4",className:Yt.container,children:[B.jsxs(st,{gap:"4",justify:"space-between",align:"start",children:[B.jsxs(Ug,{level:"3",size:"small",children:[B.jsx(Le,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",B.jsx(ai,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),B.jsx(wv,{fagsak:s,inntektsmelding:e,arbeidsgiverOpplysninger:i[e.arbeidsgiverIdent]})]}),B.jsxs(B_,{columns:3,gap:"8",children:[B.jsx(ov,{arbeidsgiverOpplysninger:i[e.arbeidsgiverIdent],arbeidsgiverIdent:e.arbeidsgiverIdent}),B.jsx(ir,{tittel:d.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:B.jsx(ot,{beløp:e.inntektPrMnd})}),B.jsx(lv,{alleKodeverk:a,inntektsmelding:e,alleBehandlinger:t,behandling:l}),B.jsx(jv,{inntektsmelding:e}),B.jsx(Hv,{ytelse:((k=a.FagsakYtelseType.find(v=>v.kode===s.fagsakYtelseType))==null?void 0:k.navn)??"",startDatoPermisjon:e.startDatoPermisjon}),B.jsx(Gv,{kildeSystem:e.kildeSystem}),B.jsx(Vv,{inntektsmelding:e,alleKodeverk:a}),B.jsx(Uv,{inntektsmelding:e})]})]})};qv.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const kI={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},ng=pn(kI),jo=({arbeidsgiverOpplysningerPerId:e,alleBehandlinger:i,inntektsmeldinger:t})=>{const{behandling:a}=rv(),[s,l]=F.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),d=E=>{l(s&&E===s.orderBy&&s.direction==="descending"?void 0:{orderBy:E,direction:s&&E===s.orderBy&&s.direction==="ascending"?"descending":"ascending"})},k=s?gI({inntektsmeldinger:t,arbeidsgiverOpplysningerPerId:e,sortKey:s.orderBy,behandling:a}):t,v=(s==null?void 0:s.direction)==="ascending"?k:k.toReversed();return v.length===0?B.jsx(qd,{value:ng,children:B.jsxs(st,{gap:"2",justify:"center",align:"center",className:Yt.ingenInntektsmeldinger,children:[B.jsx(ii,{children:B.jsx(Le,{id:"InntektsmeldingFaktaPanel.ingen"})}),B.jsx(hR,{})]})}):B.jsx(qd,{value:ng,children:B.jsxs(He,{sort:s,onSortChange:E=>d(E),children:[B.jsx(He.Header,{children:B.jsxs(He.Row,{children:[B.jsx(He.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:B.jsx(Le,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),B.jsx(He.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:B.jsx(Le,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),B.jsx(He.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:B.jsx(Le,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),B.jsx(He.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:B.jsx(Le,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),B.jsx(He.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:B.jsx(Le,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),B.jsx(He.HeaderCell,{})]})}),B.jsx(He.Body,{children:v.map(E=>{var m;return B.jsxs(He.ExpandableRow,{expandOnRowClick:!0,contentGutter:"none",togglePlacement:"right",content:B.jsx(qv,{alleBehandlinger:i,arbeidsgiverOpplysningerPerId:e,inntektsmelding:E}),children:[B.jsx(He.DataCell,{children:B.jsx(ai,{dateTimeString:E.innsendingstidspunkt,separator:"kl"})}),B.jsx(He.DataCell,{children:((m=e[E.arbeidsgiverIdent])==null?void 0:m.navn)??"-"}),B.jsx(He.DataCell,{children:E.startDatoPermisjon?B.jsx($t,{dateString:E.startDatoPermisjon}):"-"}),B.jsx(He.DataCell,{children:B.jsx(ot,{beløp:E.inntektPrMnd})}),B.jsx(He.DataCell,{children:B.jsx(vI,{behandling:a,inntektsmelding:E})})]},`${E.journalpostId}-${E.internArbeidsforholdId}`)})})]})})},gI=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:i,sortKey:t,behandling:a})=>t==="arbeidsgiverIdent"?e.slice().sort((s,l)=>{var v,E;const d=(v=i[s.arbeidsgiverIdent])==null?void 0:v.navn,k=(E=i[l.arbeidsgiverIdent])==null?void 0:E.navn;return Xs(d,k)}):t==="tilknyttedeBehandlingIder"?e.slice().sort((s,l)=>{const d=wo({behandling:a,inntektsmelding:s}),k=wo({behandling:a,inntektsmelding:l});return Xs(d,k)}):e.slice().sort((s,l)=>{const d=s[t],k=l[t];return Xs(d,k)}),Xs=(e,i)=>e===void 0?-1:i===void 0?1:e<i?-1:e>i?1:0,vI=({behandling:e,inntektsmelding:i})=>{const t=wo({behandling:e,inntektsmelding:i});return t==="DENNE"?B.jsxs(st,{gap:"1",align:"center",children:[B.jsx(Us,{className:Yt.behandlingCircleDenne}),B.jsx(Le,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):t==="ANDRE"?B.jsxs(st,{gap:"1",align:"center",children:[B.jsx(Us,{className:Yt.behandlingCircleAndre}),B.jsx(Le,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):B.jsxs(st,{gap:"1",align:"center",children:[B.jsx(Us,{className:Yt.behandlingCircleIngen}),B.jsx(Le,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},wo=({behandling:e,inntektsmelding:i})=>i.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":i.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";jo.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const{global:EI}=__STORYBOOK_MODULE_GLOBAL__,{setDefaultProjectAnnotations:$I,setProjectAnnotations:JI,composeStory:WI,composeStories:zI}=__STORYBOOK_MODULE_PREVIEW_API__;var{window:rg}=EI;rg&&(rg.STORYBOOK_ENV="react");({...OA});var ig;typeof module<"u"&&((ig=module==null?void 0:module.hot)==null||ig.decline());const{addons:mI}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:fI}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:tg}=__STORYBOOK_MODULE_GLOBAL__;var pI=Object.defineProperty,TI=(e,i)=>{for(var t in i)pI(e,t,{get:i[t],enumerable:!0})},hI="storybook/actions",yI=`${hI}/action-event`,AI={depth:10,clearOnStoryChange:!0,limit:50},xv=(e,i)=>{let t=Object.getPrototypeOf(e);return!t||i(t)?t:xv(t,i)},cI=e=>!!(typeof e=="object"&&e&&xv(e,i=>/^Synthetic(?:Base)?Event$/.test(i.constructor.name))&&typeof e.persist=="function"),RI=e=>{if(cI(e)){let i=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));i.persist();let t=Object.getOwnPropertyDescriptor(i,"view"),a=t==null?void 0:t.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(i,"view",{...t,value:Object.create(a.constructor.prototype)}),i}return e},_I=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?LA():Date.now().toString(36)+Math.random().toString(36).substring(2);function Ei(e,i={}){let t={...AI,...i},a=function(...s){var h,A;if(i.implicit){let L=(h="__STORYBOOK_PREVIEW__"in tg?tg.__STORYBOOK_PREVIEW__:void 0)==null?void 0:h.storyRenders.find(P=>P.phase==="playing"||P.phase==="rendering");if(L){let P=!((A=globalThis==null?void 0:globalThis.FEATURES)!=null&&A.disallowImplicitActionsInRenderV8),y=new fI({phase:L.phase,name:e,deprecated:P});if(P)console.warn(y);else throw y}}let l=mI.getChannel(),d=_I(),k=5,v=s.map(RI),E=s.length>1?v:v[0],m={id:d,count:0,data:{name:e,args:E},options:{...t,maxDepth:k+(t.depth||3),allowFunction:t.allowFunction||!1}};l.emit(yI,m)};return a.isAction=!0,a.implicit=i.implicit,a}const{definePreview:XI}=__STORYBOOK_MODULE_PREVIEW_API__,{global:Zs}=__STORYBOOK_MODULE_GLOBAL__;var NI={};TI(NI,{argsEnhancers:()=>II,loaders:()=>OI});var Yv=(e,i)=>typeof i[e]>"u"&&!(e in i),SI=e=>{let{initialArgs:i,argTypes:t,id:a,parameters:{actions:s}}=e;if(!s||s.disable||!s.argTypesRegex||!t)return{};let l=new RegExp(s.argTypesRegex);return Object.entries(t).filter(([d])=>!!l.test(d)).reduce((d,[k,v])=>(Yv(k,i)&&(d[k]=Ei(k,{implicit:!0,id:a})),d),{})},bI=e=>{let{initialArgs:i,argTypes:t,parameters:{actions:a}}=e;return a!=null&&a.disable||!t?{}:Object.entries(t).filter(([s,l])=>!!l.action).reduce((s,[l,d])=>(Yv(l,i)&&(s[l]=Ei(typeof d.action=="string"?d.action:l)),s),{})},II=[bI,SI],ag=!1,KI=e=>{let{parameters:{actions:i}}=e;if(!(i!=null&&i.disable)&&!ag&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in Zs&&typeof Zs.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let t=Zs.__STORYBOOK_TEST_ON_MOCK_CALL__;t((a,s)=>{let l=a.getMockName();l!=="spy"&&(!/^next\/.*::/.test(l)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(d=>l.startsWith(d)))&&Ei(l)(s)}),ag=!0}},OI=[KI];const LI={UttakUtsettelseType:[{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],FagsakYtelseType:[{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"},{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"}],StønadskontoType:[{kode:"TETTE_SAKER_MOR",kodeverk:"STOENADSKONTOTYPE",navn:"Tette fødsler mor"},{kode:"TILLEGG_PREMATUR",kodeverk:"STOENADSKONTOTYPE",navn:"Tilleggsdager ved prematur fødsel"},{kode:"BARE_FAR_RETT",kodeverk:"STOENADSKONTOTYPE",navn:"Bare far har rett"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"UFØREDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Uføredager"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"TILLEGG_FLERBARN",kodeverk:"STOENADSKONTOTYPE",navn:"Tilleggsdager ved flerbarnstilfelle"},{kode:"FAR_RUNDT_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Fars uttak ifm fødsel"},{kode:"TETTE_SAKER_FAR",kodeverk:"STOENADSKONTOTYPE",navn:"Tette fødsler far/medmor"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"}],FagsakStatus:[{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"},{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"}],Venteårsak:[{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_UTLAND_TRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på utenlandsk trygdemyndighet"},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga. for tidlig søknad"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev, og venter på søknad."},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdsID som stemmer med Aa-reg"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_BRUKERTILBAKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på tilbakemelding fra bruker"},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_LOVENDRING_8_41",kodeverk:"VENT_AARSAK",navn:"Venter på vedtak om lovendring vedrørende beregning av næring i kombinasjon med arbeid eller frilans"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på skanning"},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"}],BehandlingÅrsakType:[{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"KLAGE_TILBAKE",kodeverk:"BEHANDLING_AARSAK",navn:"Tilbakebetaling"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om opptjening"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Ny søknad"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om søknadsfrist"},{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Ny inntektsmelding"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om medlemskap"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"FEIL_PRAKSIS_UTSETTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Feil praksis utsettelse"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"FEIL_PRAKSIS_IVERKS_UTSET",kodeverk:"BEHANDLING_AARSAK",navn:"Feil iverksettelse fri utsettelse"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om inntekt"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om beregning"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. for uke 26-29"},{kode:"ENDRE-DEKNINGSGRAD",kodeverk:"BEHANDLING_AARSAK",navn:"Endre dekningsgrad"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"}],GraderingAvslagÅrsak:[{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'}],AktivitetStatus:[{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"}],RevurderingVarslingÅrsak:[{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utflyttet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],KonsekvensForYtelsen:[{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"}],AktivitetskravPermisjonType:[{kode:"FORELDREPENGER",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Foreldrepenger"},{kode:"UTDANNING",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Utdanning"},{kode:"PERMITTERING",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Permittering"},{kode:"ANNEN_PERMISJON",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Annen permisjon"}],AdresseType:[{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"},{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"}],SivilstandType:[{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"}],Inntektskategori:[{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilanser"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - fisker"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - jordbruker"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - dagmamma"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"}],SkjermlenkeType:[{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og rett"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstansen"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat NFP"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"}],FaktaOmBeregningTilfelle:[{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"}],OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:[{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"}],KlageAvvistÅrsak:[{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ugyldig",lovHjemmel:null},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'}],BehandlingResultatType:[{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknad mangler"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"}],VergeType:[{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"},{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"}],OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"}],FamilieHendelseType:[{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],KlageHjemmel:[{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"},{kode:"883-5",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 5"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"}],VilkårType:[{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_2_F",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"}],FarSøkerType:[{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"}],FaresignalVurdering:[{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"}],ArbeidType:[{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"}],KlageMedholdÅrsak:[{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"}],Region:[{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"},{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"},{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"}],FordelingPeriodeKilde:[{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"},{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"}],FagsakMarkering:[{kode:"SELVSTENDIG_NÆRING",kodeverk:"FAGSAK_MARKERING",navn:"Næringsdrivende"},{kode:"SAMMENSATT_KONTROLL",kodeverk:"FAGSAK_MARKERING",navn:"Sammensatt kontroll"},{kode:"EØS_BOSATT_NORGE",kodeverk:"FAGSAK_MARKERING",navn:"EØS bosatt Norge"},{kode:"PRAKSIS_UTSETTELSE",kodeverk:"FAGSAK_MARKERING",navn:"Praksis utsettelse"},{kode:"BARE_FAR_RETT",kodeverk:"FAGSAK_MARKERING",navn:"Bare far har rett"},{kode:"DØD_DØDFØDSEL",kodeverk:"FAGSAK_MARKERING",navn:"Død eller dødfødsel"},{kode:"BOSATT_UTLAND",kodeverk:"FAGSAK_MARKERING",navn:"Bosatt utland"}],Arbeidskategori:[{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"}],VurderÅrsak:[{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"},{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"SAKSFLYT",kodeverk:"VURDER_AARSAK",navn:"Saksflyt"},{kode:"BEGRUNNELSE",kodeverk:"VURDER_AARSAK",navn:"Begrunnelse"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"}],Landkoder:[{kode:"SGP",kodeverk:"LANDKODER",navn:"SINGAPORE"},{kode:"GNB",kodeverk:"LANDKODER",navn:"GUINEA-BISSAU"},{kode:"NCL",kodeverk:"LANDKODER",navn:"NY-KALEDONIA"},{kode:"GHA",kodeverk:"LANDKODER",navn:"GHANA"},{kode:"DEU",kodeverk:"LANDKODER",navn:"TYSKLAND"},{kode:"ANT",kodeverk:"LANDKODER",navn:"DE NEDERLANDSKE ANTILLENE"},{kode:"SPM",kodeverk:"LANDKODER",navn:"ST-PIERRE OG MIQUELON"},{kode:"CUB",kodeverk:"LANDKODER",navn:"CUBA"},{kode:"NGA",kodeverk:"LANDKODER",navn:"NIGERIA"},{kode:"UGA",kodeverk:"LANDKODER",navn:"UGANDA"},{kode:"BVT",kodeverk:"LANDKODER",navn:"BOUVETØYA"},{kode:"XXK",kodeverk:"LANDKODER",navn:"KOSOVO"},{kode:"MDG",kodeverk:"LANDKODER",navn:"MADAGASKAR"},{kode:"VAT",kodeverk:"LANDKODER",navn:"VATIKANSTATEN"},{kode:"PRK",kodeverk:"LANDKODER",navn:"NORD-KOREA"},{kode:"NZL",kodeverk:"LANDKODER",navn:"NEW ZEALAND"},{kode:"MCO",kodeverk:"LANDKODER",navn:"MONACO"},{kode:"GUF",kodeverk:"LANDKODER",navn:"FRANSK GUYANA"},{kode:"ETH",kodeverk:"LANDKODER",navn:"ETIOPIA"},{kode:"MNP",kodeverk:"LANDKODER",navn:"NORD-MARIANENE"},{kode:"BMU",kodeverk:"LANDKODER",navn:"BERMUDA"},{kode:"PSE",kodeverk:"LANDKODER",navn:"DET PALESTINSKE OMRÅDET"},{kode:"PYF",kodeverk:"LANDKODER",navn:"FRANSK POLYNESIA"},{kode:"FLK",kodeverk:"LANDKODER",navn:"FALKLANDSØYENE"},{kode:"NER",kodeverk:"LANDKODER",navn:"NIGER"},{kode:"SSD",kodeverk:"LANDKODER",navn:"SØR-SUDAN"},{kode:"PLW",kodeverk:"LANDKODER",navn:"PALAU"},{kode:"HRV",kodeverk:"LANDKODER",navn:"KROATIA"},{kode:"ALA",kodeverk:"LANDKODER",navn:"ÅLAND"},{kode:"ZWE",kodeverk:"LANDKODER",navn:"ZIMBABWE"},{kode:"SRB",kodeverk:"LANDKODER",navn:"SERBIA"},{kode:"SHN",kodeverk:"LANDKODER",navn:"ST. HELENA"},{kode:"TTO",kodeverk:"LANDKODER",navn:"TRINIDAD OG TOBAGO"},{kode:"THA",kodeverk:"LANDKODER",navn:"THAILAND"},{kode:"KGZ",kodeverk:"LANDKODER",navn:"KIRGISISTAN"},{kode:"MDV",kodeverk:"LANDKODER",navn:"MALDIVENE"},{kode:"TWN",kodeverk:"LANDKODER",navn:"TAIWAN"},{kode:"BEL",kodeverk:"LANDKODER",navn:"BELGIA"},{kode:"ARM",kodeverk:"LANDKODER",navn:"ARMENIA"},{kode:"SYR",kodeverk:"LANDKODER",navn:"SYRIA"},{kode:"WSM",kodeverk:"LANDKODER",navn:"SAMOA"},{kode:"VCT",kodeverk:"LANDKODER",navn:"ST. VINCENT"},{kode:"IND",kodeverk:"LANDKODER",navn:"INDIA"},{kode:"ITA",kodeverk:"LANDKODER",navn:"ITALIA"},{kode:"SLE",kodeverk:"LANDKODER",navn:"SIERRA LEONE"},{kode:"CHE",kodeverk:"LANDKODER",navn:"SVEITS"},{kode:"MHL",kodeverk:"LANDKODER",navn:"MARSHALLØYENE"},{kode:"URY",kodeverk:"LANDKODER",navn:"URUGUAY"},{kode:"FJI",kodeverk:"LANDKODER",navn:"FIJI"},{kode:"IMN",kodeverk:"LANDKODER",navn:"ISLE OF MAN"},{kode:"CSK",kodeverk:"LANDKODER",navn:"TSJEKKOSLOVAKIA"},{kode:"SGS",kodeverk:"LANDKODER",navn:"SØR-GEORGIA OG SØR-SANDWICHØYE"},{kode:"ASM",kodeverk:"LANDKODER",navn:"AM. SAMOA"},{kode:"BGR",kodeverk:"LANDKODER",navn:"BULGARIA"},{kode:"MYT",kodeverk:"LANDKODER",navn:"MAYOTTE"},{kode:"DNK",kodeverk:"LANDKODER",navn:"DANMARK"},{kode:"IRL",kodeverk:"LANDKODER",navn:"IRLAND"},{kode:"LSO",kodeverk:"LANDKODER",navn:"LESOTHO"},{kode:"IRN",kodeverk:"LANDKODER",navn:"IRAN"},{kode:"GLP",kodeverk:"LANDKODER",navn:"GUADELOUPE"},{kode:"ABW",kodeverk:"LANDKODER",navn:"ARUBA"},{kode:"BIH",kodeverk:"LANDKODER",navn:"BOSNIA-HERCEGOVINA"},{kode:"MTQ",kodeverk:"LANDKODER",navn:"MARTINIQUE"},{kode:"PRI",kodeverk:"LANDKODER",navn:"PUERTO RICO"},{kode:"HMD",kodeverk:"LANDKODER",navn:"HEARD OG MCDONALD ØYENE"},{kode:"IOT",kodeverk:"LANDKODER",navn:"BRITISK-INDISKE HAV"},{kode:"SLB",kodeverk:"LANDKODER",navn:"SALOMONØYENE"},{kode:"KAZ",kodeverk:"LANDKODER",navn:"KAZAKHSTAN"},{kode:"MEX",kodeverk:"LANDKODER",navn:"MEXICO"},{kode:"HKG",kodeverk:"LANDKODER",navn:"HONGKONG"},{kode:"LIE",kodeverk:"LANDKODER",navn:"LIECHTENSTEIN"},{kode:"BHS",kodeverk:"LANDKODER",navn:"BAHAMAS"},{kode:"UKR",kodeverk:"LANDKODER",navn:"UKRAINA"},{kode:"BES",kodeverk:"LANDKODER",navn:"BONAIRE, SINT EUSTATIUS, SABA"},{kode:"RWA",kodeverk:"LANDKODER",navn:"RWANDA"},{kode:"ARE",kodeverk:"LANDKODER",navn:"DE ARABISKE EMIRATER"},{kode:"EGY",kodeverk:"LANDKODER",navn:"EGYPT"},{kode:"SXM",kodeverk:"LANDKODER",navn:"SINT MAARTEN"},{kode:"GRC",kodeverk:"LANDKODER",navn:"HELLAS"},{kode:"ROU",kodeverk:"LANDKODER",navn:"ROMANIA"},{kode:"SUR",kodeverk:"LANDKODER",navn:"SURINAM"},{kode:"MYS",kodeverk:"LANDKODER",navn:"MALAYSIA"},{kode:"OMN",kodeverk:"LANDKODER",navn:"OMAN"},{kode:"LBY",kodeverk:"LANDKODER",navn:"LIBYA"},{kode:"FRO",kodeverk:"LANDKODER",navn:"FÆRØYENE"},{kode:"ISR",kodeverk:"LANDKODER",navn:"ISRAEL"},{kode:"IDN",kodeverk:"LANDKODER",navn:"INDONESIA"},{kode:"SMR",kodeverk:"LANDKODER",navn:"SAN MARINO"},{kode:"MKD",kodeverk:"LANDKODER",navn:"MAKEDONIA"},{kode:"SWZ",kodeverk:"LANDKODER",navn:"SWAZILAND"},{kode:"DZA",kodeverk:"LANDKODER",navn:"ALGERIE"},{kode:"MWI",kodeverk:"LANDKODER",navn:"MALAWI"},{kode:"STP",kodeverk:"LANDKODER",navn:"SAO TOME OG PRINCIPE"},{kode:"VIR",kodeverk:"LANDKODER",navn:"JOMFRUØYENE AM."},{kode:"CPV",kodeverk:"LANDKODER",navn:"KAPP VERDE"},{kode:"PAK",kodeverk:"LANDKODER",navn:"PAKISTAN"},{kode:"ECU",kodeverk:"LANDKODER",navn:"ECUADOR"},{kode:"PRT",kodeverk:"LANDKODER",navn:"PORTUGAL"},{kode:"COD",kodeverk:"LANDKODER",navn:"KONGO, DEN DEMOKR. REPUBL"},{kode:"MMR",kodeverk:"LANDKODER",navn:"MYANMAR (BURMA)"},{kode:"ZAF",kodeverk:"LANDKODER",navn:"SØR-AFRIKA"},{kode:"USA",kodeverk:"LANDKODER",navn:"USA"},{kode:"SVN",kodeverk:"LANDKODER",navn:"SLOVENIA"},{kode:"FSM",kodeverk:"LANDKODER",navn:"MIKRONESIAFØD."},{kode:"GNQ",kodeverk:"LANDKODER",navn:"EKVATORIAL-GUINEA"},{kode:"CHN",kodeverk:"LANDKODER",navn:"REPUBLIKKEN KINA"},{kode:"HTI",kodeverk:"LANDKODER",navn:"HAITI"},{kode:"NIC",kodeverk:"LANDKODER",navn:"NICARAGUA"},{kode:"NAM",kodeverk:"LANDKODER",navn:"NAMIBIA"},{kode:"SWE",kodeverk:"LANDKODER",navn:"SVERIGE"},{kode:"BRA",kodeverk:"LANDKODER",navn:"BRASIL"},{kode:"GMB",kodeverk:"LANDKODER",navn:"GAMBIA"},{kode:"WLF",kodeverk:"LANDKODER",navn:"WALLIS/FUTUNAØYENE"},{kode:"JAM",kodeverk:"LANDKODER",navn:"JAMAICA"},{kode:"???",kodeverk:"LANDKODER",navn:"UOPPGITT/UKJENT"},{kode:"YEM",kodeverk:"LANDKODER",navn:"JEMEN"},{kode:"MAF",kodeverk:"LANDKODER",navn:"SAINT MARTIN"},{kode:"NRU",kodeverk:"LANDKODER",navn:"NAURU"},{kode:"TKL",kodeverk:"LANDKODER",navn:"TOKELAU"},{kode:"AND",kodeverk:"LANDKODER",navn:"ANDORRA"},{kode:"SJM",kodeverk:"LANDKODER",navn:"SVALBARD OG JAN MAYEN"},{kode:"BEN",kodeverk:"LANDKODER",navn:"BENIN"},{kode:"CHL",kodeverk:"LANDKODER",navn:"CHILE"},{kode:"SCG",kodeverk:"LANDKODER",navn:"SERBIA OG MONTENEGRO"},{kode:"KIR",kodeverk:"LANDKODER",navn:"KIRIBATI"},{kode:"VGB",kodeverk:"LANDKODER",navn:"JOMFRUØYENE BRIT."},{kode:"MNE",kodeverk:"LANDKODER",navn:"MONTENEGRO"},{kode:"MLI",kodeverk:"LANDKODER",navn:"MALI"},{kode:"REU",kodeverk:"LANDKODER",navn:"REUNION"},{kode:"BWA",kodeverk:"LANDKODER",navn:"BOTSWANA"},{kode:"PCN",kodeverk:"LANDKODER",navn:"PITCAIRN"},{kode:"UMI",kodeverk:"LANDKODER",navn:"MINDRE STILLEHAVSØYER"},{kode:"TUV",kodeverk:"LANDKODER",navn:"TUVALU"},{kode:"LKA",kodeverk:"LANDKODER",navn:"SRI LANKA"},{kode:"BDI",kodeverk:"LANDKODER",navn:"BURUNDI"},{kode:"AGO",kodeverk:"LANDKODER",navn:"ANGOLA"},{kode:"MRT",kodeverk:"LANDKODER",navn:"MAURITANIA"},{kode:"MUS",kodeverk:"LANDKODER",navn:"MAURITIUS"},{kode:"CYP",kodeverk:"LANDKODER",navn:"KYPROS"},{kode:"SYC",kodeverk:"LANDKODER",navn:"SEYCHELLENE"},{kode:"COK",kodeverk:"LANDKODER",navn:"COOKØYENE"},{kode:"VEN",kodeverk:"LANDKODER",navn:"VENEZUELA"},{kode:"ESH",kodeverk:"LANDKODER",navn:"VEST-SAHARA"},{kode:"SUN",kodeverk:"LANDKODER",navn:"SOVJETUNIONEN"},{kode:"EST",kodeverk:"LANDKODER",navn:"ESTLAND"},{kode:"CIV",kodeverk:"LANDKODER",navn:"ELFENBEINSKYSTEN"},{kode:"HUN",kodeverk:"LANDKODER",navn:"UNGARN"},{kode:"MLT",kodeverk:"LANDKODER",navn:"MALTA"},{kode:"COM",kodeverk:"LANDKODER",navn:"KOMORENE"},{kode:"NPL",kodeverk:"LANDKODER",navn:"NEPAL"},{kode:"CRI",kodeverk:"LANDKODER",navn:"COSTA RICA"},{kode:"LVA",kodeverk:"LANDKODER",navn:"LATVIA"},{kode:"GUY",kodeverk:"LANDKODER",navn:"GUYANA"},{kode:"ALB",kodeverk:"LANDKODER",navn:"ALBANIA"},{kode:"NLD",kodeverk:"LANDKODER",navn:"NEDERLAND"},{kode:"AIA",kodeverk:"LANDKODER",navn:"ANGUILLA"},{kode:"BRN",kodeverk:"LANDKODER",navn:"BRUNEI"},{kode:"LCA",kodeverk:"LANDKODER",navn:"ST. LUCIA"},{kode:"NOR",kodeverk:"LANDKODER",navn:"NORGE"},{kode:"NIU",kodeverk:"LANDKODER",navn:"NIUE"},{kode:"DOM",kodeverk:"LANDKODER",navn:"DEN DOMINIKANSKE REP"},{kode:"GGY",kodeverk:"LANDKODER",navn:"GUERNSEY"},{kode:"BTN",kodeverk:"LANDKODER",navn:"BHUTAN"},{kode:"YUG",kodeverk:"LANDKODER",navn:"JUGOSLAVIA"},{kode:"MSR",kodeverk:"LANDKODER",navn:"MONSERRAT"},{kode:"JEY",kodeverk:"LANDKODER",navn:"JERSEY"},{kode:"TCA",kodeverk:"LANDKODER",navn:"TURKS/CAICOSØYENE"},{kode:"GRL",kodeverk:"LANDKODER",navn:"GRØNLAND"},{kode:"CAN",kodeverk:"LANDKODER",navn:"CANADA"},{kode:"TJK",kodeverk:"LANDKODER",navn:"TADZJIKISTAN"},{kode:"LUX",kodeverk:"LANDKODER",navn:"LUXEMBOURG"},{kode:"KHM",kodeverk:"LANDKODER",navn:"KAMBODSJA"},{kode:"TCD",kodeverk:"LANDKODER",navn:"TSJAD"},{kode:"FIN",kodeverk:"LANDKODER",navn:"FINLAND"},{kode:"AUT",kodeverk:"LANDKODER",navn:"ØSTERRIKE"},{kode:"BFA",kodeverk:"LANDKODER",navn:"BURKINA FASO"},{kode:"CZE",kodeverk:"LANDKODER",navn:"DEN TSJEKKISKE REP."},{kode:"XXX",kodeverk:"LANDKODER",navn:"STATSLØS"},{kode:"CYM",kodeverk:"LANDKODER",navn:"CAYMANØYENE"},{kode:"POL",kodeverk:"LANDKODER",navn:"POLEN"},{kode:"VNM",kodeverk:"LANDKODER",navn:"VIETNAM"},{kode:"BRB",kodeverk:"LANDKODER",navn:"BARBADOS"},{kode:"SVK",kodeverk:"LANDKODER",navn:"SLOVAKIA"},{kode:"AUS",kodeverk:"LANDKODER",navn:"AUSTRALIA"},{kode:"PRY",kodeverk:"LANDKODER",navn:"PARAGUAY"},{kode:"ATG",kodeverk:"LANDKODER",navn:"ANTIGUA OG BARBUDA"},{kode:"TKM",kodeverk:"LANDKODER",navn:"TURKMENISTAN"},{kode:"LTU",kodeverk:"LANDKODER",navn:"LITAUEN"},{kode:"SAU",kodeverk:"LANDKODER",navn:"SAUDI-ARABIA"},{kode:"CAF",kodeverk:"LANDKODER",navn:"SENTRALAFRIKA. REP."},{kode:"TON",kodeverk:"LANDKODER",navn:"TONGA"},{kode:"CMR",kodeverk:"LANDKODER",navn:"KAMERUN"},{kode:"SDN",kodeverk:"LANDKODER",navn:"SUDAN"},{kode:"PAN",kodeverk:"LANDKODER",navn:"PANAMA"},{kode:"LAO",kodeverk:"LANDKODER",navn:"LAOS"},{kode:"JOR",kodeverk:"LANDKODER",navn:"JORDAN"},{kode:"MAC",kodeverk:"LANDKODER",navn:"MACAO"},{kode:"GIB",kodeverk:"LANDKODER",navn:"GIBRALTAR"},{kode:"XUK",kodeverk:"LANDKODER",navn:"UKJENT"},{kode:"MNG",kodeverk:"LANDKODER",navn:"MONGOLIA"},{kode:"TUN",kodeverk:"LANDKODER",navn:"TUNISIA"},{kode:"UZB",kodeverk:"LANDKODER",navn:"UZBEKISTAN"},{kode:"KWT",kodeverk:"LANDKODER",navn:"KUWAIT"},{kode:"ERI",kodeverk:"LANDKODER",navn:"ERITREA"},{kode:"TGO",kodeverk:"LANDKODER",navn:"TOGO"},{kode:"VUT",kodeverk:"LANDKODER",navn:"VANUATU"},{kode:"GIN",kodeverk:"LANDKODER",navn:"GUINEA"},{kode:"SOM",kodeverk:"LANDKODER",navn:"SOMALIA"},{kode:"KOR",kodeverk:"LANDKODER",navn:"SØR-KOREA"},{kode:"PHL",kodeverk:"LANDKODER",navn:"FILIPPINENE"},{kode:"BHR",kodeverk:"LANDKODER",navn:"BAHRAIN"},{kode:"DJI",kodeverk:"LANDKODER",navn:"DJIBOUTI"},{kode:"ESP",kodeverk:"LANDKODER",navn:"SPANIA"},{kode:"GTM",kodeverk:"LANDKODER",navn:"GUATEMALA"},{kode:"GAB",kodeverk:"LANDKODER",navn:"GABON"},{kode:"KNA",kodeverk:"LANDKODER",navn:"ST. KITTS OG NEVIS"},{kode:"AFG",kodeverk:"LANDKODER",navn:"AFGHANISTAN"},{kode:"MDA",kodeverk:"LANDKODER",navn:"MOLDOVA"},{kode:"PER",kodeverk:"LANDKODER",navn:"PERU"},{kode:"ZMB",kodeverk:"LANDKODER",navn:"ZAMBIA"},{kode:"QAT",kodeverk:"LANDKODER",navn:"QATAR"},{kode:"LBR",kodeverk:"LANDKODER",navn:"LIBERIA"},{kode:"CUW",kodeverk:"LANDKODER",navn:"CURACAO"},{kode:"BLM",kodeverk:"LANDKODER",navn:"SAINT BARTHELEMY"},{kode:"BLZ",kodeverk:"LANDKODER",navn:"BELIZE"},{kode:"TZA",kodeverk:"LANDKODER",navn:"TANZANIA"},{kode:"ISL",kodeverk:"LANDKODER",navn:"ISLAND"},{kode:"TLS",kodeverk:"LANDKODER",navn:"ØST-TIMOR"},{kode:"GRD",kodeverk:"LANDKODER",navn:"GRENADA"},{kode:"ARG",kodeverk:"LANDKODER",navn:"ARGENTINA"},{kode:"COG",kodeverk:"LANDKODER",navn:"KONGO, REPUBLIKKEN"},{kode:"MOZ",kodeverk:"LANDKODER",navn:"MOSAMBIK"},{kode:"SEN",kodeverk:"LANDKODER",navn:"SENEGAL"},{kode:"BGD",kodeverk:"LANDKODER",navn:"BANGLADESH"},{kode:"IRQ",kodeverk:"LANDKODER",navn:"IRAK"},{kode:"SLV",kodeverk:"LANDKODER",navn:"EL SALVADOR"},{kode:"TUR",kodeverk:"LANDKODER",navn:"TYRKIA"},{kode:"DDR",kodeverk:"LANDKODER",navn:"TYSKLAND (ØST)"},{kode:"LBN",kodeverk:"LANDKODER",navn:"LIBANON"},{kode:"GBR",kodeverk:"LANDKODER",navn:"STORBRITANNIA"},{kode:"COL",kodeverk:"LANDKODER",navn:"COLOMBIA"},{kode:"CXR",kodeverk:"LANDKODER",navn:"CHRISTMASØYA"},{kode:"PNG",kodeverk:"LANDKODER",navn:"PAPUA NY-GUINEA"},{kode:"NFK",kodeverk:"LANDKODER",navn:"NORFOLKØYA"},{kode:"HND",kodeverk:"LANDKODER",navn:"HONDURAS"},{kode:"BOL",kodeverk:"LANDKODER",navn:"BOLIVIA"},{kode:"RUS",kodeverk:"LANDKODER",navn:"RUSSLAND"},{kode:"DMA",kodeverk:"LANDKODER",navn:"DOMINICA"},{kode:"AZE",kodeverk:"LANDKODER",navn:"AZERBAJDZJAN"},{kode:"BLR",kodeverk:"LANDKODER",navn:"HVITERUSSLAND"},{kode:"CCK",kodeverk:"LANDKODER",navn:"KOKOSØYENE"},{kode:"GEO",kodeverk:"LANDKODER",navn:"GEORGIA"},{kode:"GUM",kodeverk:"LANDKODER",navn:"GUAM"},{kode:"JPN",kodeverk:"LANDKODER",navn:"JAPAN"},{kode:"FRA",kodeverk:"LANDKODER",navn:"FRANKRIKE"},{kode:"KEN",kodeverk:"LANDKODER",navn:"KENYA"},{kode:"MAR",kodeverk:"LANDKODER",navn:"MAROKKO"}],BehandlingType:[{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"}],InnsynResultatType:[{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"},{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"}],MedlemskapType:[{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"},{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"}],PersonstatusType:[{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet"},{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Opphørt"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt (f.reg)"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Ikke bosatt (f.reg)"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utflyttet"}],UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"FRI",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"}],BehandlingStatus:[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"}],RelasjonsRolleType:[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"ANPA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Annen part fra søknad"},{kode:"EKTE",kodeverk:"RELASJONSROLLE_TYPE",navn:"Ektefelle"},{kode:"REPA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Registrert partner"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"BARN",kodeverk:"RELASJONSROLLE_TYPE",navn:"Barn"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],VirksomhetType:[{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],MedlemskapDekningType:[{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"},{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"}],HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"}],Avslagsårsak:{FP_VK_3:[{kode:"1007",kodeverk:"AVSLAGSARSAK",navn:"Søkt for sent",lovHjemmel:null}],FP_VK_4:[{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'},{kode:"1006",kodeverk:"AVSLAGSARSAK",navn:"Mann adopterer ikke alene",lovHjemmel:null},{kode:"1005",kodeverk:"AVSLAGSARSAK",navn:"Ektefelles/samboers barn",lovHjemmel:null},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'}],FP_VK_1:[{kode:"1002",kodeverk:"AVSLAGSARSAK",navn:"Søker er medmor",lovHjemmel:null},{kode:"1003",kodeverk:"AVSLAGSARSAK",navn:"Søker er far",lovHjemmel:null},{kode:"1001",kodeverk:"AVSLAGSARSAK",navn:"Søkt for tidlig",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1026",kodeverk:"AVSLAGSARSAK",navn:"Fødselsdato ikke oppgitt eller registrert",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1031",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}'}],FP_VK_2:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utflyttet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],"-":[],FP_VK_41:[{kode:"1041",kodeverk:"AVSLAGSARSAK",navn:"For lavt brutto beregningsgrunnlag",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_41", "lovreferanse": "14-7"}]}]}'}],FP_VK_21:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_11:[{kode:"1027",kodeverk:"AVSLAGSARSAK",navn:"Ingen barn dokumentert på far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1029",kodeverk:"AVSLAGSARSAK",navn:"Bruker er ikke registrert som far/medmor til barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1028",kodeverk:"AVSLAGSARSAK",navn:"Mor fyller ikke vilkåret for sykdom",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'}],FP_VK_2_F:[{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utflyttet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1052",kodeverk:"AVSLAGSARSAK",navn:"Innflyttet mindre enn 12 måneder før termin/omsorgsovertakelse",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK_2_F", "lovreferanse": "14-17 5. ledd"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],FP_VK_33:[{kode:"1017",kodeverk:"AVSLAGSARSAK",navn:"Omsorgsovertakelse etter 56 uker",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1018",kodeverk:"AVSLAGSARSAK",navn:"Ikke foreldreansvar alene etter barnelova",lovHjemmel:null},{kode:"1016",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null}],FP_VK_34:[{kode:"1019",kodeverk:"AVSLAGSARSAK",navn:"Manglende dokumentasjon",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_34", "lovreferanse": "21-3"}]}]}'}],FP_VK_23:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_8:[{kode:"1014",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke foreldreansvar",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1015",kodeverk:"AVSLAGSARSAK",navn:"Søker har hatt vanlig samvær med barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1013",kodeverk:"AVSLAGSARSAK",navn:"Barn ikke under 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'}],SVP_VK_1:[{kode:"1061",kodeverk:"AVSLAGSARSAK",navn:"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 3. ledd"}]}]}'},{kode:"1062",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker har mottatt sykepenger",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1060",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker er ikke gravid kvinne",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1064",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1065",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1063",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1066",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'}],FP_VK_16:[{kode:"1051",kodeverk:"AVSLAGSARSAK",navn:"Stebarnsadopsjon ikke flere dager igjen",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16", "lovreferanse": "14-5"}]}]}'},{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_5:[{kode:"1012",kodeverk:"AVSLAGSARSAK",navn:"Far har ikke omsorg for barnet",lovHjemmel:null},{kode:"1008",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1009",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1010",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død ved fødsel/omsorg",lovHjemmel:null}],FP_VK_2_L:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utflyttet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}]},OpptjeningAktivitetType:[{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"}],PermisjonsbeskrivelseType:[{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"}],OppholdstillatelseType:[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],MedlemskapManuellVurderingType:[{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],ManuellBehandlingÅrsak:[{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5032",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder utbetalingsgrad og trekkdager når mor er i delvis arbeid (under 75% arbeidsprosent)"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"}],MorsAktivitet:[{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"}],NaturalYtelseType:[{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],PeriodeResultatÅrsak:[{kode:"4005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjuende ledd: Ikke sammenhengende perioder",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ferie/arbeid innenfor de første 6 ukene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4056",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4076",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4103",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4116",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4063",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4054",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4040",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4041",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2016",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4112",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Barnets innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4053",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4069",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2015",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-09-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4110",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2010",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-13: Innvilget fellesperiode til far",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-13"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4055",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2004",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2006",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger før fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2011",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Mor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13,14-16"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4088",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4100",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 andre ledd: Uttak før omsorgsovertakelse",lovHjemmel:"",sortering:"14-10-2",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4097",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Adopsjonsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4074",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,21-3"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4117",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4092",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Avslag overføring - har ikke aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ikke stønadsdager igjen på stønadskonto",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4086",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-11"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4075",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4098",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Foreldreansvarsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2024",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4106",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4085",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Det er ikke samtykke mellom partene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2028",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4060",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Innvilget fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4095",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR"]},{kode:"2027",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4105",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4062",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12, jf. §14-16: Gradering av kvote/overført kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4051",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4058",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2018",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4059",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13, 14-9"}}}',sortering:"14-13-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2026",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2036",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4111",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Barnet er over 3 år",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4102",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§22-13 tredje ledd: Brudd på søknadsfrist",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "22-13"}}}',sortering:"22-13-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4068",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2019",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4082",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4050",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Far/medmor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Innvilget uttak av kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-16"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4073",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4008",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4072",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjuende ledd: Barnet er dødt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4070",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Avslag utsettelse før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4057",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4052",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4081",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2017",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4064",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15: Innvilget foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4077",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10 a"}}}',sortering:"14-10-0-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ikke lovbestemt ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-9"}}}',sortering:"14-11-0",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4093",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16: Avslag gradering - søker er ikke i arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4089",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4066",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4115",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2014",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4104",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Stønadsperiode for nytt barn",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4065",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4087",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-2: Opphør medlemskap",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-2"}}}',sortering:"14-02",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Ikke heltidsarbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4099",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-6: Opptjeningsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-6"}}}',sortering:"14-06",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4061",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4067",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2021",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4071",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Bruker er død",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4107",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4096",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Fødselsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4084",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]}],ForeldreType:[{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"},{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"}],OppgaveType:[{kode:"VUR_KONSEKVENS",kodeverk:"OPPGAVE_TYPE",navn:"Vurder konsekvens for ytelse"},{kode:"VUR_DOKUMENT",kodeverk:"OPPGAVE_TYPE",navn:"Vurder dokument"}]},DI=()=>(...e)=>(Ei("button-click")(...e),Promise.resolve()),PI={uuid:"1223-2323-2323-22332",versjon:1,språkkode:"NB",type:iv.FORSTEGANGSSOKNAD,status:av.BEHANDLING_UTREDES,behandlingPåVent:!1,behandlingHenlagt:!1},FI={saksnummer:"1234567",fagsakYtelseType:sv.FORELDREPENGER,bruker:{navn:"Kari Nordmann"},annenPart:{navn:"Ola Nordmann"},relasjonsRolleType:To.MOR,annenpartBehandling:{relasjonsRolleType:To.FAR}},Cv=(e,i)=>{const{fagsak:t,behandling:a,aksjonspunkterForPanel:s,isReadOnly:l,submitCallback:d,alleMerknaderFraBeslutter:k}=i.args,v=s??[];return B.jsx(nv,{fagsak:t??FI,behandling:a??PI,aksjonspunkterForPanel:v,harÅpneAksjonspunkter:v.some(E=>E.status===tv.OPPRETTET),alleKodeverk:LI,alleMerknaderFraBeslutter:k??{},isReadOnly:l??!1,submitCallback:d??DI(),children:B.jsx(e,{})})};Cv.__docgenInfo={description:"",methods:[],displayName:"withPanelData"};const Qs={innsendingstidspunkt:"2024-08-08T00:00:00",kildeSystem:"Altinn",aktiveNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",arbeidsgiverIdent:"1",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},ZI={title:"fakta/fakta-inntektsmelding",component:jo,decorators:[Cv],render:e=>B.jsx(jo,{...e})},xt={args:{alleBehandlinger:[{uuid:"UUID1",type:"BT-002",opprettet:"2024-07-13",avsluttet:"2024-08-13"},{uuid:"UUID2",type:"BT-003",opprettet:"2024-07-14",avsluttet:"2024-08-14"},{uuid:"UUID3",type:"BT-004",opprettet:"2024-07-15",avsluttet:"2024-08-15"}],arbeidsgiverOpplysningerPerId:{1:{navn:"Rema 1000"},2:{navn:"Kiwi"},3:{navn:"Meny"}},behandling:{uuid:"UUID2"},inntektsmeldinger:[{...Qs,tilknyttedeBehandlingIder:["UUID1"],inntektPrMnd:10000.5,innsendingstidspunkt:"2024-07-20T00:00:00",startDatoPermisjon:"2024-10-10",refusjonPrMnd:void 0,journalpostId:"1",refusjonsperioder:[{refusjonsbeløp:{verdi:5e3},indexKey:"1",fom:"2024-01-10"},{refusjonsbeløp:{verdi:3e3},indexKey:"2",fom:"2024-01-09"}]},{...Qs,tilknyttedeBehandlingIder:["UUID1","UUID2"],inntektPrMnd:2e4,innsendingstidspunkt:"2024-08-01T00:00:00",kildeSystem:"FS22",refusjonPrMnd:void 0,arbeidsgiverIdent:"2",journalpostId:"2"},{...Qs,tilknyttedeBehandlingIder:[],inntektPrMnd:3e4,innsendingstidspunkt:"2024-09-10T00:00:00",innsendingsårsak:"ENDRING",kildeSystem:"NAV_NO",startDatoPermisjon:"2024-11-11",arbeidsgiverIdent:"3",journalpostId:"3",aktiveNaturalytelser:[{periode:{fomDato:"2024-01-09",tomDato:"2024-10-09"},type:ho.ELEKTRISK_KOMMUNIKASJON,beloepPerMnd:{verdi:999},indexKey:"1"},{periode:{fomDato:"2024-01-11",tomDato:"2024-10-11"},type:ho.LOSJI,beloepPerMnd:{verdi:10},indexKey:"2"}]}]}},Qa={args:{...xt.args,inntektsmeldinger:[]}};var sg,og,lg;xt.parameters={...xt.parameters,docs:{...(sg=xt.parameters)==null?void 0:sg.docs,source:{originalSource:`{
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
}`,...(lg=(og=xt.parameters)==null?void 0:og.docs)==null?void 0:lg.source}}};var ug,dg,kg;Qa.parameters={...Qa.parameters,docs:{...(ug=Qa.parameters)==null?void 0:ug.docs,source:{originalSource:`{
  args: {
    ...InntektsmeldingDefault.args,
    inntektsmeldinger: []
  }
}`,...(kg=(dg=Qa.parameters)==null?void 0:dg.docs)==null?void 0:kg.source}}};const QI=["InntektsmeldingDefault","IngenInntektsmeldinger"];export{Qa as IngenInntektsmeldinger,xt as InntektsmeldingDefault,QI as __namedExportsOrder,ZI as default};
