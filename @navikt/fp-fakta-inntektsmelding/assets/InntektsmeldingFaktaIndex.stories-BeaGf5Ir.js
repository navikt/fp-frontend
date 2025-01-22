import{j as G}from"./jsx-runtime-CLpGMVip.js";import{r as F,R as q}from"./index-D7xSkP6m.js";import{d as Or}from"./dayjs.min-CJilavqB.js";import{c as za,g as fA}from"./_commonjsHelpers-Cpj98o6Y.js";var Xs=function(e,i){return Xs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(a[s]=t[s])},Xs(e,i)};function $n(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");Xs(e,i);function a(){this.constructor=e}e.prototype=i===null?Object.create(i):(a.prototype=i.prototype,new a)}var ne=function(){return ne=Object.assign||function(i){for(var a,t=1,s=arguments.length;t<s;t++){a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(i[l]=a[l])}return i},ne.apply(this,arguments)};function kt(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a}function tr(e,i,a){if(a||arguments.length===2)for(var t=0,s=i.length,l;t<s;t++)(l||!(t in i))&&(l||(l=Array.prototype.slice.call(i,0,t)),l[t]=i[t]);return e.concat(l||Array.prototype.slice.call(i))}function Qn(e,i){var a=i&&i.cache?i.cache:yA,t=i&&i.serializer?i.serializer:cA,s=i&&i.strategy?i.strategy:TA;return s(e,{cache:a,serializer:t})}function mA(e){return e==null||typeof e=="number"||typeof e=="boolean"}function nk(e,i,a,t){var s=mA(t)?t:a(t),l=i.get(s);return typeof l>"u"&&(l=e.call(this,t),i.set(s,l)),l}function rk(e,i,a){var t=Array.prototype.slice.call(arguments,3),s=a(t),l=i.get(s);return typeof l>"u"&&(l=e.apply(this,t),i.set(s,l)),l}function Go(e,i,a,t,s){return a.bind(i,e,t,s)}function TA(e,i){var a=e.length===1?nk:rk;return Go(e,this,a,i.cache.create(),i.serializer)}function pA(e,i){return Go(e,this,rk,i.cache.create(),i.serializer)}function hA(e,i){return Go(e,this,nk,i.cache.create(),i.serializer)}var cA=function(){return JSON.stringify(arguments)},AA=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(i){return this.cache[i]},e.prototype.set=function(i,a){this.cache[i]=a},e}(),yA={create:function(){return new AA}},er={variadic:pA,monadic:hA},he;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(he||(he={}));var Ge;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Ge||(Ge={}));var Et;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Et||(Et={}));function bd(e){return e.type===Ge.literal}function RA(e){return e.type===Ge.argument}function tk(e){return e.type===Ge.number}function ak(e){return e.type===Ge.date}function ik(e){return e.type===Ge.time}function sk(e){return e.type===Ge.select}function ok(e){return e.type===Ge.plural}function _A(e){return e.type===Ge.pound}function lk(e){return e.type===Ge.tag}function uk(e){return!!(e&&typeof e=="object"&&e.type===Et.number)}function Zs(e){return!!(e&&typeof e=="object"&&e.type===Et.dateTime)}var dk=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,bA=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function NA(e){var i={};return e.replace(bA,function(a){var t=a.length;switch(a[0]){case"G":i.era=t===4?"long":t===5?"narrow":"short";break;case"y":i.year=t===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=t===4?"long":t===5?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][t-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][t-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][t-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][t-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][t-1];break;case"s":i.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var SA=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function IA(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(SA).filter(function(A){return A.length>0}),a=[],t=0,s=i;t<s.length;t++){var l=s[t],d=l.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var g=d[0],E=d.slice(1),f=0,T=E;f<T.length;f++){var p=T[f];if(p.length===0)throw new Error("Invalid number skeleton")}a.push({stem:g,options:E})}return a}function OA(e){return e.replace(/^(.*?)-/,"")}var Nd=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,gk=/^(@+)?(\+|#+)?[rs]?$/g,LA=/(\*)(0+)|(#+)(0+)|(0+)/g,kk=/^(0+)$/;function Sd(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(gk,function(a,t,s){return typeof s!="string"?(i.minimumSignificantDigits=t.length,i.maximumSignificantDigits=t.length):s==="+"?i.minimumSignificantDigits=t.length:t[0]==="#"?i.maximumSignificantDigits=t.length:(i.minimumSignificantDigits=t.length,i.maximumSignificantDigits=t.length+(typeof s=="string"?s.length:0)),""}),i}function Ek(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function KA(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var a=e.slice(0,2);if(a==="+!"?(i.signDisplay="always",e=e.slice(2)):a==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!kk.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function Id(e){var i={},a=Ek(e);return a||i}function DA(e){for(var i={},a=0,t=e;a<t.length;a++){var s=t[a];switch(s.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=s.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=OA(s.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=ne(ne(ne({},i),{notation:"scientific"}),s.options.reduce(function(E,f){return ne(ne({},E),Id(f))},{}));continue;case"engineering":i=ne(ne(ne({},i),{notation:"engineering"}),s.options.reduce(function(E,f){return ne(ne({},E),Id(f))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(LA,function(E,f,T,p,A,D){if(f)i.minimumIntegerDigits=T.length;else{if(p&&A)throw new Error("We currently do not support maximum integer digits");if(D)throw new Error("We currently do not support exact integer digits")}return""});continue}if(kk.test(s.stem)){i.minimumIntegerDigits=s.stem.length;continue}if(Nd.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(Nd,function(E,f,T,p,A,D){return T==="*"?i.minimumFractionDigits=f.length:p&&p[0]==="#"?i.maximumFractionDigits=p.length:A&&D?(i.minimumFractionDigits=A.length,i.maximumFractionDigits=A.length+D.length):(i.minimumFractionDigits=f.length,i.maximumFractionDigits=f.length),""});var l=s.options[0];l==="w"?i=ne(ne({},i),{trailingZeroDisplay:"stripIfInteger"}):l&&(i=ne(ne({},i),Sd(l)));continue}if(gk.test(s.stem)){i=ne(ne({},i),Sd(s.stem));continue}var d=Ek(s.stem);d&&(i=ne(ne({},i),d));var g=KA(s.stem);g&&(i=ne(ne({},i),g))}return i}var Xa={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function PA(e,i){for(var a="",t=0;t<e.length;t++){var s=e.charAt(t);if(s==="j"){for(var l=0;t+1<e.length&&e.charAt(t+1)===s;)l++,t++;var d=1+(l&1),g=l<2?1:3+(l>>1),E="a",f=FA(i);for((f=="H"||f=="k")&&(g=0);g-- >0;)a+=E;for(;d-- >0;)a=f+a}else s==="J"?a+="H":a+=s}return a}function FA(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var a=e.language,t;a!=="root"&&(t=e.maximize().region);var s=Xa[t||""]||Xa[a||""]||Xa["".concat(a,"-001")]||Xa["001"];return s[0]}var Ds,MA=new RegExp("^".concat(dk.source,"*")),GA=new RegExp("".concat(dk.source,"*$"));function Ae(e,i){return{start:e,end:i}}var BA=!!String.prototype.startsWith&&"_a".startsWith("a",1),jA=!!String.fromCodePoint,wA=!!Object.fromEntries,HA=!!String.prototype.codePointAt,VA=!!String.prototype.trimStart,UA=!!String.prototype.trimEnd,qA=!!Number.isSafeInteger,xA=qA?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Qs=!0;try{var YA=fk("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Qs=((Ds=YA.exec("a"))===null||Ds===void 0?void 0:Ds[0])==="a"}catch{Qs=!1}var Od=BA?function(i,a,t){return i.startsWith(a,t)}:function(i,a,t){return i.slice(t,t+a.length)===a},eo=jA?String.fromCodePoint:function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];for(var t="",s=i.length,l=0,d;s>l;){if(d=i[l++],d>1114111)throw RangeError(d+" is not a valid code point");t+=d<65536?String.fromCharCode(d):String.fromCharCode(((d-=65536)>>10)+55296,d%1024+56320)}return t},Ld=wA?Object.fromEntries:function(i){for(var a={},t=0,s=i;t<s.length;t++){var l=s[t],d=l[0],g=l[1];a[d]=g}return a},vk=HA?function(i,a){return i.codePointAt(a)}:function(i,a){var t=i.length;if(!(a<0||a>=t)){var s=i.charCodeAt(a),l;return s<55296||s>56319||a+1===t||(l=i.charCodeAt(a+1))<56320||l>57343?s:(s-55296<<10)+(l-56320)+65536}},CA=VA?function(i){return i.trimStart()}:function(i){return i.replace(MA,"")},$A=UA?function(i){return i.trimEnd()}:function(i){return i.replace(GA,"")};function fk(e,i){return new RegExp(e,i)}var no;if(Qs){var Kd=fk("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");no=function(i,a){var t;Kd.lastIndex=a;var s=Kd.exec(i);return(t=s[1])!==null&&t!==void 0?t:""}}else no=function(i,a){for(var t=[];;){var s=vk(i,a);if(s===void 0||mk(s)||XA(s))break;t.push(s),a+=s>=65536?2:1}return eo.apply(void 0,t)};var JA=function(){function e(i,a){a===void 0&&(a={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!a.ignoreTag,this.locale=a.locale,this.requiresOtherClause=!!a.requiresOtherClause,this.shouldParseSkeletons=!!a.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,a,t){for(var s=[];!this.isEOF();){var l=this.char();if(l===123){var d=this.parseArgument(i,t);if(d.err)return d;s.push(d.val)}else{if(l===125&&i>0)break;if(l===35&&(a==="plural"||a==="selectordinal")){var g=this.clonePosition();this.bump(),s.push({type:Ge.pound,location:Ae(g,this.clonePosition())})}else if(l===60&&!this.ignoreTag&&this.peek()===47){if(t)break;return this.error(he.UNMATCHED_CLOSING_TAG,Ae(this.clonePosition(),this.clonePosition()))}else if(l===60&&!this.ignoreTag&&ro(this.peek()||0)){var d=this.parseTag(i,a);if(d.err)return d;s.push(d.val)}else{var d=this.parseLiteral(i,a);if(d.err)return d;s.push(d.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(i,a){var t=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Ge.literal,value:"<".concat(s,"/>"),location:Ae(t,this.clonePosition())},err:null};if(this.bumpIf(">")){var l=this.parseMessage(i+1,a,!0);if(l.err)return l;var d=l.val,g=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!ro(this.char()))return this.error(he.INVALID_TAG,Ae(g,this.clonePosition()));var E=this.clonePosition(),f=this.parseTagName();return s!==f?this.error(he.UNMATCHED_CLOSING_TAG,Ae(E,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Ge.tag,value:s,children:d,location:Ae(t,this.clonePosition())},err:null}:this.error(he.INVALID_TAG,Ae(g,this.clonePosition())))}else return this.error(he.UNCLOSED_TAG,Ae(t,this.clonePosition()))}else return this.error(he.INVALID_TAG,Ae(t,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&zA(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,a){for(var t=this.clonePosition(),s="";;){var l=this.tryParseQuote(a);if(l){s+=l;continue}var d=this.tryParseUnquoted(i,a);if(d){s+=d;continue}var g=this.tryParseLeftAngleBracket();if(g){s+=g;continue}break}var E=Ae(t,this.clonePosition());return{val:{type:Ge.literal,value:s,location:E},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!WA(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var a=[this.char()];for(this.bump();!this.isEOF();){var t=this.char();if(t===39)if(this.peek()===39)a.push(39),this.bump();else{this.bump();break}else a.push(t);this.bump()}return eo.apply(void 0,a)},e.prototype.tryParseUnquoted=function(i,a){if(this.isEOF())return null;var t=this.char();return t===60||t===123||t===35&&(a==="plural"||a==="selectordinal")||t===125&&i>0?null:(this.bump(),eo(t))},e.prototype.parseArgument=function(i,a){var t=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(he.EXPECT_ARGUMENT_CLOSING_BRACE,Ae(t,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(he.EMPTY_ARGUMENT,Ae(t,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(he.MALFORMED_ARGUMENT,Ae(t,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(he.EXPECT_ARGUMENT_CLOSING_BRACE,Ae(t,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Ge.argument,value:s,location:Ae(t,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(he.EXPECT_ARGUMENT_CLOSING_BRACE,Ae(t,this.clonePosition())):this.parseArgumentOptions(i,a,s,t);default:return this.error(he.MALFORMED_ARGUMENT,Ae(t,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),a=this.offset(),t=no(this.message,a),s=a+t.length;this.bumpTo(s);var l=this.clonePosition(),d=Ae(i,l);return{value:t,location:d}},e.prototype.parseArgumentOptions=function(i,a,t,s){var l,d=this.clonePosition(),g=this.parseIdentifierIfPossible().value,E=this.clonePosition();switch(g){case"":return this.error(he.EXPECT_ARGUMENT_TYPE,Ae(d,E));case"number":case"date":case"time":{this.bumpSpace();var f=null;if(this.bumpIf(",")){this.bumpSpace();var T=this.clonePosition(),p=this.parseSimpleArgStyleIfPossible();if(p.err)return p;var A=$A(p.val);if(A.length===0)return this.error(he.EXPECT_ARGUMENT_STYLE,Ae(this.clonePosition(),this.clonePosition()));var D=Ae(T,this.clonePosition());f={style:A,styleLocation:D}}var K=this.tryParseArgumentClose(s);if(K.err)return K;var R=Ae(s,this.clonePosition());if(f&&Od(f==null?void 0:f.style,"::",0)){var S=CA(f.style.slice(2));if(g==="number"){var p=this.parseNumberSkeletonFromString(S,f.styleLocation);return p.err?p:{val:{type:Ge.number,value:t,location:R,style:p.val},err:null}}else{if(S.length===0)return this.error(he.EXPECT_DATE_TIME_SKELETON,R);var P=S;this.locale&&(P=PA(S,this.locale));var A={type:Et.dateTime,pattern:P,location:f.styleLocation,parsedOptions:this.shouldParseSkeletons?NA(P):{}},H=g==="date"?Ge.date:Ge.time;return{val:{type:H,value:t,location:R,style:A},err:null}}}return{val:{type:g==="number"?Ge.number:g==="date"?Ge.date:Ge.time,value:t,location:R,style:(l=f==null?void 0:f.style)!==null&&l!==void 0?l:null},err:null}}case"plural":case"selectordinal":case"select":{var I=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(he.EXPECT_SELECT_ARGUMENT_OPTIONS,Ae(I,ne({},I)));this.bumpSpace();var Z=this.parseIdentifierIfPossible(),y=0;if(g!=="select"&&Z.value==="offset"){if(!this.bumpIf(":"))return this.error(he.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ae(this.clonePosition(),this.clonePosition()));this.bumpSpace();var p=this.tryParseDecimalInteger(he.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,he.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(p.err)return p;this.bumpSpace(),Z=this.parseIdentifierIfPossible(),y=p.val}var w=this.tryParsePluralOrSelectOptions(i,g,a,Z);if(w.err)return w;var K=this.tryParseArgumentClose(s);if(K.err)return K;var O=Ae(s,this.clonePosition());return g==="select"?{val:{type:Ge.select,value:t,options:Ld(w.val),location:O},err:null}:{val:{type:Ge.plural,value:t,options:Ld(w.val),offset:y,pluralType:g==="plural"?"cardinal":"ordinal",location:O},err:null}}default:return this.error(he.INVALID_ARGUMENT_TYPE,Ae(d,E))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(he.EXPECT_ARGUMENT_CLOSING_BRACE,Ae(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,a=this.clonePosition();!this.isEOF();){var t=this.char();switch(t){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(he.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Ae(s,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(a.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(a.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,a){var t=[];try{t=IA(i)}catch{return this.error(he.INVALID_NUMBER_SKELETON,a)}return{val:{type:Et.number,tokens:t,location:a,parsedOptions:this.shouldParseSkeletons?DA(t):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,a,t,s){for(var l,d=!1,g=[],E=new Set,f=s.value,T=s.location;;){if(f.length===0){var p=this.clonePosition();if(a!=="select"&&this.bumpIf("=")){var A=this.tryParseDecimalInteger(he.EXPECT_PLURAL_ARGUMENT_SELECTOR,he.INVALID_PLURAL_ARGUMENT_SELECTOR);if(A.err)return A;T=Ae(p,this.clonePosition()),f=this.message.slice(p.offset,this.offset())}else break}if(E.has(f))return this.error(a==="select"?he.DUPLICATE_SELECT_ARGUMENT_SELECTOR:he.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,T);f==="other"&&(d=!0),this.bumpSpace();var D=this.clonePosition();if(!this.bumpIf("{"))return this.error(a==="select"?he.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:he.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Ae(this.clonePosition(),this.clonePosition()));var K=this.parseMessage(i+1,a,t);if(K.err)return K;var R=this.tryParseArgumentClose(D);if(R.err)return R;g.push([f,{value:K.val,location:Ae(D,this.clonePosition())}]),E.add(f),this.bumpSpace(),l=this.parseIdentifierIfPossible(),f=l.value,T=l.location}return g.length===0?this.error(a==="select"?he.EXPECT_SELECT_ARGUMENT_SELECTOR:he.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ae(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(he.MISSING_OTHER_CLAUSE,Ae(this.clonePosition(),this.clonePosition())):{val:g,err:null}},e.prototype.tryParseDecimalInteger=function(i,a){var t=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(t=-1);for(var l=!1,d=0;!this.isEOF();){var g=this.char();if(g>=48&&g<=57)l=!0,d=d*10+(g-48),this.bump();else break}var E=Ae(s,this.clonePosition());return l?(d*=t,xA(d)?{val:d,err:null}:this.error(a,E)):this.error(i,E)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var a=vk(this.message,i);if(a===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return a},e.prototype.error=function(i,a){return{val:null,err:{kind:i,message:this.message,location:a}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Od(this.message,i,this.offset())){for(var a=0;a<i.length;a++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var a=this.offset(),t=this.message.indexOf(i,a);return t>=0?(this.bumpTo(t),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var a=this.offset();if(a===i)break;if(a>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&mk(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),a=this.offset(),t=this.message.charCodeAt(a+(i>=65536?2:1));return t??null},e}();function ro(e){return e>=97&&e<=122||e>=65&&e<=90}function WA(e){return ro(e)||e===47}function zA(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function mk(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function XA(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function to(e){e.forEach(function(i){if(delete i.location,sk(i)||ok(i))for(var a in i.options)delete i.options[a].location,to(i.options[a].value);else tk(i)&&uk(i.style)||(ak(i)||ik(i))&&Zs(i.style)?delete i.style.location:lk(i)&&to(i.children)})}function ZA(e,i){i===void 0&&(i={}),i=ne({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var a=new JA(e,i).parse();if(a.err){var t=SyntaxError(he[a.err.kind]);throw t.location=a.err.location,t.originalMessage=a.err.message,t}return i!=null&&i.captureLocation||to(a.val),a.val}var ir;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(ir||(ir={}));var Lr=function(e){$n(i,e);function i(a,t,s){var l=e.call(this,a)||this;return l.code=t,l.originalMessage=s,l}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),Dd=function(e){$n(i,e);function i(a,t,s,l){return e.call(this,'Invalid values for "'.concat(a,'": "').concat(t,'". Options are "').concat(Object.keys(s).join('", "'),'"'),ir.INVALID_VALUE,l)||this}return i}(Lr),QA=function(e){$n(i,e);function i(a,t,s){return e.call(this,'Value for "'.concat(a,'" must be of type ').concat(t),ir.INVALID_VALUE,s)||this}return i}(Lr),ey=function(e){$n(i,e);function i(a,t){return e.call(this,'The intl string context variable "'.concat(a,'" was not provided to the string "').concat(t,'"'),ir.MISSING_VALUE,t)||this}return i}(Lr),kn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(kn||(kn={}));function ny(e){return e.length<2?e:e.reduce(function(i,a){var t=i[i.length-1];return!t||t.type!==kn.literal||a.type!==kn.literal?i.push(a):t.value+=a.value,i},[])}function Tk(e){return typeof e=="function"}function ri(e,i,a,t,s,l,d){if(e.length===1&&bd(e[0]))return[{type:kn.literal,value:e[0].value}];for(var g=[],E=0,f=e;E<f.length;E++){var T=f[E];if(bd(T)){g.push({type:kn.literal,value:T.value});continue}if(_A(T)){typeof l=="number"&&g.push({type:kn.literal,value:a.getNumberFormat(i).format(l)});continue}var p=T.value;if(!(s&&p in s))throw new ey(p,d);var A=s[p];if(RA(T)){(!A||typeof A=="string"||typeof A=="number")&&(A=typeof A=="string"||typeof A=="number"?String(A):""),g.push({type:typeof A=="string"?kn.literal:kn.object,value:A});continue}if(ak(T)){var D=typeof T.style=="string"?t.date[T.style]:Zs(T.style)?T.style.parsedOptions:void 0;g.push({type:kn.literal,value:a.getDateTimeFormat(i,D).format(A)});continue}if(ik(T)){var D=typeof T.style=="string"?t.time[T.style]:Zs(T.style)?T.style.parsedOptions:t.time.medium;g.push({type:kn.literal,value:a.getDateTimeFormat(i,D).format(A)});continue}if(tk(T)){var D=typeof T.style=="string"?t.number[T.style]:uk(T.style)?T.style.parsedOptions:void 0;D&&D.scale&&(A=A*(D.scale||1)),g.push({type:kn.literal,value:a.getNumberFormat(i,D).format(A)});continue}if(lk(T)){var K=T.children,R=T.value,S=s[R];if(!Tk(S))throw new QA(R,"function",d);var P=ri(K,i,a,t,s,l),H=S(P.map(function(y){return y.value}));Array.isArray(H)||(H=[H]),g.push.apply(g,H.map(function(y){return{type:typeof y=="string"?kn.literal:kn.object,value:y}}))}if(sk(T)){var I=T.options[A]||T.options.other;if(!I)throw new Dd(T.value,A,Object.keys(T.options),d);g.push.apply(g,ri(I.value,i,a,t,s));continue}if(ok(T)){var I=T.options["=".concat(A)];if(!I){if(!Intl.PluralRules)throw new Lr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ir.MISSING_INTL_API,d);var Z=a.getPluralRules(i,{type:T.pluralType}).select(A-(T.offset||0));I=T.options[Z]||T.options.other}if(!I)throw new Dd(T.value,A,Object.keys(T.options),d);g.push.apply(g,ri(I.value,i,a,t,s,A-(T.offset||0)));continue}}return ny(g)}function ry(e,i){return i?ne(ne(ne({},e||{}),i||{}),Object.keys(e).reduce(function(a,t){return a[t]=ne(ne({},e[t]),i[t]||{}),a},{})):e}function ty(e,i){return i?Object.keys(e).reduce(function(a,t){return a[t]=ry(e[t],i[t]),a},ne({},e)):e}function Ps(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,a){e[i]=a}}}}}function ay(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Qn(function(){for(var i,a=[],t=0;t<arguments.length;t++)a[t]=arguments[t];return new((i=Intl.NumberFormat).bind.apply(i,tr([void 0],a,!1)))},{cache:Ps(e.number),strategy:er.variadic}),getDateTimeFormat:Qn(function(){for(var i,a=[],t=0;t<arguments.length;t++)a[t]=arguments[t];return new((i=Intl.DateTimeFormat).bind.apply(i,tr([void 0],a,!1)))},{cache:Ps(e.dateTime),strategy:er.variadic}),getPluralRules:Qn(function(){for(var i,a=[],t=0;t<arguments.length;t++)a[t]=arguments[t];return new((i=Intl.PluralRules).bind.apply(i,tr([void 0],a,!1)))},{cache:Ps(e.pluralRules),strategy:er.variadic})}}var pk=function(){function e(i,a,t,s){a===void 0&&(a=e.defaultLocale);var l=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(E){var f=l.formatToParts(E);if(f.length===1)return f[0].value;var T=f.reduce(function(p,A){return!p.length||A.type!==kn.literal||typeof p[p.length-1]!="string"?p.push(A.value):p[p.length-1]+=A.value,p},[]);return T.length<=1?T[0]||"":T},this.formatToParts=function(E){return ri(l.ast,l.locales,l.formatters,l.formats,E,void 0,l.message)},this.resolvedOptions=function(){var E;return{locale:((E=l.resolvedLocale)===null||E===void 0?void 0:E.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=a,this.resolvedLocale=e.resolveLocale(a),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=s||{};d.formatters;var g=kt(d,["formatters"]);this.ast=e.__parse(i,ne(ne({},g),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=ty(e.formats,t),this.formatters=s&&s.formatters||ay(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var a=Intl.NumberFormat.supportedLocalesOf(i);return a.length>0?new Intl.Locale(a[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=ZA,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),qr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(qr||(qr={}));var Xt=function(e){$n(i,e);function i(a,t,s){var l=this,d=s?s instanceof Error?s:new Error(String(s)):void 0;return l=e.call(this,"[@formatjs/intl Error ".concat(a,"] ").concat(t,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,l.code=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(l,i),l}return i}(Error),iy=function(e){$n(i,e);function i(a,t){return e.call(this,qr.UNSUPPORTED_FORMATTER,a,t)||this}return i}(Xt),sy=function(e){$n(i,e);function i(a,t){return e.call(this,qr.INVALID_CONFIG,a,t)||this}return i}(Xt),Pd=function(e){$n(i,e);function i(a,t){return e.call(this,qr.MISSING_DATA,a,t)||this}return i}(Xt),jn=function(e){$n(i,e);function i(a,t,s){var l=e.call(this,qr.FORMAT_ERROR,"".concat(a,`
Locale: `).concat(t,`
`),s)||this;return l.locale=t,l}return i}(Xt),Fs=function(e){$n(i,e);function i(a,t,s,l){var d=e.call(this,"".concat(a,`
MessageID: `).concat(s==null?void 0:s.id,`
Default Message: `).concat(s==null?void 0:s.defaultMessage,`
Description: `).concat(s==null?void 0:s.description,`
`),t,l)||this;return d.descriptor=s,d.locale=t,d}return i}(jn),oy=function(e){$n(i,e);function i(a,t){var s=e.call(this,qr.MISSING_TRANSLATION,'Missing message: "'.concat(a.id,'" for locale "').concat(t,'", using ').concat(a.defaultMessage?"default message (".concat(typeof a.defaultMessage=="string"?a.defaultMessage:a.defaultMessage.map(function(l){var d;return(d=l.value)!==null&&d!==void 0?d:JSON.stringify(l)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=a,s}return i}(Xt);function ly(e,i,a){if(a===void 0&&(a=Error),!e)throw new a(i)}function Tt(e,i,a){return a===void 0&&(a={}),i.reduce(function(t,s){return s in e?t[s]=e[s]:s in a&&(t[s]=a[s]),t},{})}var uy=function(e){},dy=function(e){},hk={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:uy,onWarn:dy};function ck(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Vr(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,a){e[i]=a}}}}}function gy(e){e===void 0&&(e=ck());var i=Intl.RelativeTimeFormat,a=Intl.ListFormat,t=Intl.DisplayNames,s=Qn(function(){for(var g,E=[],f=0;f<arguments.length;f++)E[f]=arguments[f];return new((g=Intl.DateTimeFormat).bind.apply(g,tr([void 0],E,!1)))},{cache:Vr(e.dateTime),strategy:er.variadic}),l=Qn(function(){for(var g,E=[],f=0;f<arguments.length;f++)E[f]=arguments[f];return new((g=Intl.NumberFormat).bind.apply(g,tr([void 0],E,!1)))},{cache:Vr(e.number),strategy:er.variadic}),d=Qn(function(){for(var g,E=[],f=0;f<arguments.length;f++)E[f]=arguments[f];return new((g=Intl.PluralRules).bind.apply(g,tr([void 0],E,!1)))},{cache:Vr(e.pluralRules),strategy:er.variadic});return{getDateTimeFormat:s,getNumberFormat:l,getMessageFormat:Qn(function(g,E,f,T){return new pk(g,E,f,ne({formatters:{getNumberFormat:l,getDateTimeFormat:s,getPluralRules:d}},T||{}))},{cache:Vr(e.message),strategy:er.variadic}),getRelativeTimeFormat:Qn(function(){for(var g=[],E=0;E<arguments.length;E++)g[E]=arguments[E];return new(i.bind.apply(i,tr([void 0],g,!1)))},{cache:Vr(e.relativeTime),strategy:er.variadic}),getPluralRules:d,getListFormat:Qn(function(){for(var g=[],E=0;E<arguments.length;E++)g[E]=arguments[E];return new(a.bind.apply(a,tr([void 0],g,!1)))},{cache:Vr(e.list),strategy:er.variadic}),getDisplayNames:Qn(function(){for(var g=[],E=0;E<arguments.length;E++)g[E]=arguments[E];return new(t.bind.apply(t,tr([void 0],g,!1)))},{cache:Vr(e.displayNames),strategy:er.variadic})}}function Bo(e,i,a,t){var s=e&&e[i],l;if(s&&(l=s[a]),l)return l;t(new iy("No ".concat(i," format named: ").concat(a)))}function Za(e,i){return Object.keys(e).reduce(function(a,t){return a[t]=ne({timeZone:i},e[t]),a},{})}function Fd(e,i){var a=Object.keys(ne(ne({},e),i));return a.reduce(function(t,s){return t[s]=ne(ne({},e[s]||{}),i[s]||{}),t},{})}function Md(e,i){if(!i)return e;var a=pk.formats;return ne(ne(ne({},a),e),{date:Fd(Za(a.date,i),Za(e.date||{},i)),time:Fd(Za(a.time,i),Za(e.time||{},i))})}var ao=function(e,i,a,t,s){var l=e.locale,d=e.formats,g=e.messages,E=e.defaultLocale,f=e.defaultFormats,T=e.fallbackOnEmptyString,p=e.onError,A=e.timeZone,D=e.defaultRichTextElements;a===void 0&&(a={id:""});var K=a.id,R=a.defaultMessage;ly(!!K,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var S=String(K),P=g&&Object.prototype.hasOwnProperty.call(g,S)&&g[S];if(Array.isArray(P)&&P.length===1&&P[0].type===Ge.literal)return P[0].value;if(!t&&P&&typeof P=="string"&&!D)return P.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=ne(ne({},D),t||{}),d=Md(d,A),f=Md(f,A),!P){if(T===!1&&P==="")return P;if((!R||l&&l.toLowerCase()!==E.toLowerCase())&&p(new oy(a,l)),R)try{var H=i.getMessageFormat(R,E,f,s);return H.format(t)}catch(I){return p(new Fs('Error formatting default message for: "'.concat(S,'", rendering default message verbatim'),l,a,I)),typeof R=="string"?R:S}return S}try{var H=i.getMessageFormat(P,l,d,ne({formatters:i},s||{}));return H.format(t)}catch(I){p(new Fs('Error formatting message: "'.concat(S,'", using ').concat(R?"default message":"id"," as fallback."),l,a,I))}if(R)try{var H=i.getMessageFormat(R,E,f,s);return H.format(t)}catch(I){p(new Fs('Error formatting the default message for: "'.concat(S,'", rendering message verbatim'),l,a,I))}return typeof P=="string"?P:typeof R=="string"?R:S},ky=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Zt(e,i,a,t){var s=e.locale,l=e.formats,d=e.onError,g=e.timeZone;t===void 0&&(t={});var E=t.format,f=ne(ne({},g&&{timeZone:g}),E&&Bo(l,i,E,d)),T=Tt(t,ky,f);return i==="time"&&!T.hour&&!T.minute&&!T.second&&!T.timeStyle&&!T.dateStyle&&(T=ne(ne({},T),{hour:"numeric",minute:"numeric"})),a(s,T)}function Ey(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var s=a[0],l=a[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return Zt(e,"date",i,d).format(g)}catch(E){e.onError(new jn("Error formatting date.",e.locale,E))}return String(g)}function vy(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var s=a[0],l=a[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return Zt(e,"time",i,d).format(g)}catch(E){e.onError(new jn("Error formatting time.",e.locale,E))}return String(g)}function fy(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var s=a[0],l=a[1],d=a[2],g=d===void 0?{}:d,E=typeof s=="string"?new Date(s||0):s,f=typeof l=="string"?new Date(l||0):l;try{return Zt(e,"dateTimeRange",i,g).formatRange(E,f)}catch(T){e.onError(new jn("Error formatting date time range.",e.locale,T))}return String(E)}function my(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var s=a[0],l=a[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return Zt(e,"date",i,d).formatToParts(g)}catch(E){e.onError(new jn("Error formatting date.",e.locale,E))}return[]}function Ty(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var s=a[0],l=a[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return Zt(e,"time",i,d).formatToParts(g)}catch(E){e.onError(new jn("Error formatting time.",e.locale,E))}return[]}var py=["style","type","fallback","languageDisplay"];function hy(e,i,a,t){var s=e.locale,l=e.onError,d=Intl.DisplayNames;d||l(new Lr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,ir.MISSING_INTL_API));var g=Tt(t,py);try{return i(s,g).of(a)}catch(E){l(new jn("Error formatting display name.",s,E))}}var cy=["type","style"],Gd=Date.now();function Ay(e){return"".concat(Gd,"_").concat(e,"_").concat(Gd)}function yy(e,i,a,t){t===void 0&&(t={});var s=Ak(e,i,a,t).reduce(function(l,d){var g=d.value;return typeof g!="string"?l.push(g):typeof l[l.length-1]=="string"?l[l.length-1]+=g:l.push(g),l},[]);return s.length===1?s[0]:s.length===0?"":s}function Ak(e,i,a,t){var s=e.locale,l=e.onError;t===void 0&&(t={});var d=Intl.ListFormat;d||l(new Lr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,ir.MISSING_INTL_API));var g=Tt(t,cy);try{var E={},f=a.map(function(T,p){if(typeof T=="object"){var A=Ay(p);return E[A]=T,A}return String(T)});return i(s,g).formatToParts(f).map(function(T){return T.type==="literal"?T:ne(ne({},T),{value:E[T.value]||T.value})})}catch(T){l(new jn("Error formatting list.",s,T))}return a}var Ry=["type"];function _y(e,i,a,t){var s=e.locale,l=e.onError;t===void 0&&(t={}),Intl.PluralRules||l(new Lr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ir.MISSING_INTL_API));var d=Tt(t,Ry);try{return i(s,d).select(a)}catch(g){l(new jn("Error formatting plural.",s,g))}return"other"}var by=["numeric","style"];function Ny(e,i,a){var t=e.locale,s=e.formats,l=e.onError;a===void 0&&(a={});var d=a.format,g=!!d&&Bo(s,"relative",d,l)||{},E=Tt(a,by,g);return i(t,E)}function Sy(e,i,a,t,s){s===void 0&&(s={}),t||(t="second");var l=Intl.RelativeTimeFormat;l||e.onError(new Lr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,ir.MISSING_INTL_API));try{return Ny(e,i,s).format(a,t)}catch(d){e.onError(new jn("Error formatting relative time.",e.locale,d))}return String(a)}var Iy=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function yk(e,i,a){var t=e.locale,s=e.formats,l=e.onError;a===void 0&&(a={});var d=a.format,g=d&&Bo(s,"number",d,l)||{},E=Tt(a,Iy,g);return i(t,E)}function Oy(e,i,a,t){t===void 0&&(t={});try{return yk(e,i,t).format(a)}catch(s){e.onError(new jn("Error formatting number.",e.locale,s))}return String(a)}function Ly(e,i,a,t){t===void 0&&(t={});try{return yk(e,i,t).formatToParts(a)}catch(s){e.onError(new jn("Error formatting number.",e.locale,s))}return[]}function Ky(e){var i=e[Object.keys(e)[0]];return typeof i=="string"}function Dy(e){e.onWarn&&e.defaultRichTextElements&&Ky(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function Py(e,i){var a=gy(i),t=ne(ne({},hk),e),s=t.locale,l=t.defaultLocale,d=t.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&d?d(new Pd('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&d&&d(new Pd('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new sy('"locale" was not configured, using "'.concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),Dy(t),ne(ne({},t),{formatters:a,formatNumber:Oy.bind(null,t,a.getNumberFormat),formatNumberToParts:Ly.bind(null,t,a.getNumberFormat),formatRelativeTime:Sy.bind(null,t,a.getRelativeTimeFormat),formatDate:Ey.bind(null,t,a.getDateTimeFormat),formatDateToParts:my.bind(null,t,a.getDateTimeFormat),formatTime:vy.bind(null,t,a.getDateTimeFormat),formatDateTimeRange:fy.bind(null,t,a.getDateTimeFormat),formatTimeToParts:Ty.bind(null,t,a.getDateTimeFormat),formatPlural:_y.bind(null,t,a.getPluralRules),formatMessage:ao.bind(null,t,a),$t:ao.bind(null,t,a),formatList:yy.bind(null,t,a.getListFormat),formatListToParts:Ak.bind(null,t,a.getListFormat),formatDisplayName:hy.bind(null,t,a.getDisplayNames)})}function Fy(e,i,a){if(a===void 0&&(a=Error),!e)throw new a(i)}function My(e){Fy(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Gy=ne(ne({},hk),{textComponent:F.Fragment});function By(e){return function(i){return e(F.Children.toArray(i))}}function Bd(e,i){if(e===i)return!0;if(!e||!i)return!1;var a=Object.keys(e),t=Object.keys(i),s=a.length;if(t.length!==s)return!1;for(var l=0;l<s;l++){var d=a[l];if(e[d]!==i[d]||!Object.prototype.hasOwnProperty.call(i,d))return!1}return!0}var Ms={exports:{}},Ne={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd;function jy(){if(jd)return Ne;jd=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,a=e?Symbol.for("react.portal"):60106,t=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,g=e?Symbol.for("react.context"):60110,E=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,T=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,A=e?Symbol.for("react.suspense_list"):60120,D=e?Symbol.for("react.memo"):60115,K=e?Symbol.for("react.lazy"):60116,R=e?Symbol.for("react.block"):60121,S=e?Symbol.for("react.fundamental"):60117,P=e?Symbol.for("react.responder"):60118,H=e?Symbol.for("react.scope"):60119;function I(y){if(typeof y=="object"&&y!==null){var w=y.$$typeof;switch(w){case i:switch(y=y.type,y){case E:case f:case t:case l:case s:case p:return y;default:switch(y=y&&y.$$typeof,y){case g:case T:case K:case D:case d:return y;default:return w}}case a:return w}}}function Z(y){return I(y)===f}return Ne.AsyncMode=E,Ne.ConcurrentMode=f,Ne.ContextConsumer=g,Ne.ContextProvider=d,Ne.Element=i,Ne.ForwardRef=T,Ne.Fragment=t,Ne.Lazy=K,Ne.Memo=D,Ne.Portal=a,Ne.Profiler=l,Ne.StrictMode=s,Ne.Suspense=p,Ne.isAsyncMode=function(y){return Z(y)||I(y)===E},Ne.isConcurrentMode=Z,Ne.isContextConsumer=function(y){return I(y)===g},Ne.isContextProvider=function(y){return I(y)===d},Ne.isElement=function(y){return typeof y=="object"&&y!==null&&y.$$typeof===i},Ne.isForwardRef=function(y){return I(y)===T},Ne.isFragment=function(y){return I(y)===t},Ne.isLazy=function(y){return I(y)===K},Ne.isMemo=function(y){return I(y)===D},Ne.isPortal=function(y){return I(y)===a},Ne.isProfiler=function(y){return I(y)===l},Ne.isStrictMode=function(y){return I(y)===s},Ne.isSuspense=function(y){return I(y)===p},Ne.isValidElementType=function(y){return typeof y=="string"||typeof y=="function"||y===t||y===f||y===l||y===s||y===p||y===A||typeof y=="object"&&y!==null&&(y.$$typeof===K||y.$$typeof===D||y.$$typeof===d||y.$$typeof===g||y.$$typeof===T||y.$$typeof===S||y.$$typeof===P||y.$$typeof===H||y.$$typeof===R)},Ne.typeOf=I,Ne}var wd;function wy(){return wd||(wd=1,Ms.exports=jy()),Ms.exports}var Gs,Hd;function Hy(){if(Hd)return Gs;Hd=1;var e=wy(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=t,l[e.Memo]=s;function d(K){return e.isMemo(K)?s:l[K.$$typeof]||i}var g=Object.defineProperty,E=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,T=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,A=Object.prototype;function D(K,R,S){if(typeof R!="string"){if(A){var P=p(R);P&&P!==A&&D(K,P,S)}var H=E(R);f&&(H=H.concat(f(R)));for(var I=d(K),Z=d(R),y=0;y<H.length;++y){var w=H[y];if(!a[w]&&!(S&&S[w])&&!(Z&&Z[w])&&!(I&&I[w])){var O=T(R,w);try{g(K,w,O)}catch{}}}}return K}return Gs=D,Gs}Hy();var jo=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=F.createContext(null)):F.createContext(null);jo.Consumer;var Vy=jo.Provider,Vd=Vy,Uy=jo;function Jn(){var e=F.useContext(Uy);return My(e),e}var io;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(io||(io={}));var so;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(so||(so={}));function Rk(e){var i=function(a){var t=Jn(),s=a.value,l=a.children,d=kt(a,["value","children"]),g=typeof s=="string"?new Date(s||0):s,E=e==="formatDate"?t.formatDateToParts(g,d):t.formatTimeToParts(g,d);return l(E)};return i.displayName=so[e],i}function Qt(e){var i=function(a){var t=Jn(),s=a.value,l=a.children,d=kt(a,["value","children"]),g=t[e](s,d);if(typeof l=="function")return l(g);var E=t.textComponent||F.Fragment;return F.createElement(E,null,g)};return i.displayName=io[e],i}function _k(e){return e&&Object.keys(e).reduce(function(i,a){var t=e[a];return i[a]=Tk(t)?By(t):t,i},{})}var Ud=function(e,i,a,t){for(var s=[],l=4;l<arguments.length;l++)s[l-4]=arguments[l];var d=_k(t),g=ao.apply(void 0,tr([e,i,a,d],s,!1));return Array.isArray(g)?F.Children.toArray(g):g},qy=function(e,i){var a=e.defaultRichTextElements,t=kt(e,["defaultRichTextElements"]),s=_k(a),l=Py(ne(ne(ne({},Gy),t),{defaultRichTextElements:s}),i),d={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:s};return ne(ne({},l),{formatMessage:Ud.bind(null,d,l.formatters),$t:Ud.bind(null,d,l.formatters)})};function xy(e,i){var a=e.values,t=kt(e,["values"]),s=i.values,l=kt(i,["values"]);return Bd(s,a)&&Bd(t,l)}function bk(e){var i=Jn(),a=i.formatMessage,t=i.textComponent,s=t===void 0?F.Fragment:t,l=e.id,d=e.description,g=e.defaultMessage,E=e.values,f=e.children,T=e.tagName,p=T===void 0?s:T,A=e.ignoreTag,D={id:l,description:d,defaultMessage:g},K=a(D,E,{ignoreTag:A});return typeof f=="function"?f(Array.isArray(K)?K:[K]):p?F.createElement(p,null,F.Children.toArray(K)):F.createElement(F.Fragment,null,K)}bk.displayName="FormattedMessage";var Ie=F.memo(bk,xy);Ie.displayName="MemoizedFormattedMessage";var Nk=Qt("formatDate"),Yy=Qt("formatTime");Qt("formatNumber");Qt("formatList");Qt("formatDisplayName");Rk("formatDate");Rk("formatTime");let qd=0;function Cy(e){const[i,a]=F.useState(e),t=e||i;return F.useEffect(()=>{i==null&&(qd+=1,a(`aksel-icon-${qd}`))},[i]),t}const xd=q.useId;function pr(e){var i;return xd!==void 0?xd().replace(/(:)/g,""):(i=Cy(e))!==null&&i!==void 0?i:""}var $y=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const Jy=F.forwardRef((e,i)=>{var{title:a,titleId:t}=e,s=$y(e,["title","titleId"]);let l=pr();return l=a?t||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),a?F.createElement("title",{id:l},a):null,F.createElement("path",{fill:"currentColor",d:"M12.75 5a.75.75 0 0 0-1.5 0v12.19l-3.22-3.22a.75.75 0 0 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l4.5-4.5a.75.75 0 1 0-1.06-1.06l-3.22 3.22z"}))});var Wy=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const zy=F.forwardRef((e,i)=>{var{title:a,titleId:t}=e,s=Wy(e,["title","titleId"]);let l=pr();return l=a?t||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),a?F.createElement("title",{id:l},a):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var Xy=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const Zy=F.forwardRef((e,i)=>{var{title:a,titleId:t}=e,s=Xy(e,["title","titleId"]);let l=pr();return l=a?t||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),a?F.createElement("title",{id:l},a):null,F.createElement("path",{fill:"currentColor",d:"M12.53 4.47a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06l3.22-3.22V19a.75.75 0 0 0 1.5 0V6.81l3.22 3.22a.75.75 0 1 0 1.06-1.06z"}))});var Qy=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const eR=F.forwardRef((e,i)=>{var{title:a,titleId:t}=e,s=Qy(e,["title","titleId"]);let l=pr();return l=a?t||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),a?F.createElement("title",{id:l},a):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var nR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const rR=F.forwardRef((e,i)=>{var{title:a,titleId:t}=e,s=nR(e,["title","titleId"]);let l=pr();return l=a?t||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),a?F.createElement("title",{id:l},a):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var tR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const Bs=F.forwardRef((e,i)=>{var{title:a,titleId:t}=e,s=tR(e,["title","titleId"]);let l=pr();return l=a?t||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),a?F.createElement("title",{id:l},a):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12",clipRule:"evenodd"}))});var aR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const iR=F.forwardRef((e,i)=>{var{title:a,titleId:t}=e,s=aR(e,["title","titleId"]);let l=pr();return l=a?t||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),a?F.createElement("title",{id:l},a):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var sR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const Sk=F.forwardRef((e,i)=>{var{title:a,titleId:t}=e,s=sR(e,["title","titleId"]);let l=pr();return l=a?t||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),a?F.createElement("title",{id:l},a):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var oR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const Yd=F.forwardRef((e,i)=>{var{title:a,titleId:t}=e,s=oR(e,["title","titleId"]);let l=pr();return l=a?t||"title-"+l:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),a?F.createElement("title",{id:l},a):null,F.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});function Ik(e){var i,a,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(i=0;i<s;i++)e[i]&&(a=Ik(e[i]))&&(t&&(t+=" "),t+=a)}else for(a in e)e[a]&&(t&&(t+=" "),t+=a);return t}function _e(){for(var e,i,a=0,t="",s=arguments.length;a<s;a++)(e=arguments[a])&&(i=Ik(e))&&(t&&(t+=" "),t+=i);return t}function Ok(e){return i=>{e.forEach(a=>{typeof a=="function"?a(i):a!=null&&(a.current=i)})}}function lR(...e){return q.useCallback(Ok(e),e)}function uR(e,i){const a=Object.assign({},i);for(const t in i){const s=e[t],l=i[t];/^on[A-Z]/.test(t)?s&&l?a[t]=(...g)=>{l(...g),s(...g)}:s&&(a[t]=s):t==="style"?a[t]=Object.assign(Object.assign({},s),l):t==="className"&&(a[t]=[s,l].filter(Boolean).join(" "))}return Object.assign(Object.assign({},e),a)}var dR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const ea=F.forwardRef((e,i)=>{var a;const{children:t}=e,s=dR(e,["children"]);if(F.isValidElement(t)){const l=Object.prototype.propertyIsEnumerable.call(t.props,"ref")?t.props.ref:t.ref;return F.cloneElement(t,Object.assign(Object.assign({},uR(s,t.props)),{ref:i?Ok([i,l]):l}))}if(F.Children.count(t)>1){const l=new Error("Aksel: Components using 'asChild' expects to recieve a single React element child.");throw l.name="SlotError",(a=Error.captureStackTrace)===null||a===void 0||a.call(Error,l,ea),l}return null});var gR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};function kR(e,i){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${i}`}function ER(e={}){const{name:i,hookName:a="useContext",providerName:t="Provider",errorMessage:s,defaultValue:l}=e,d=F.createContext(l),g=F.forwardRef((f,T)=>{var{children:p}=f,A=gR(f,["children"]);const D=q.useMemo(()=>A,Object.values(A));return q.createElement(d.Provider,{value:T?Object.assign(Object.assign({},D),{ref:T}):D},p)});function E(f=!0){var T;const p=F.useContext(d);if(!p&&f){const A=new Error(s??kR(a,t));throw A.name="ContextError",(T=Error.captureStackTrace)===null||T===void 0||T.call(Error,A,E),A}return p}return d.displayName=i,[g,E]}const[vR,na]=ER({hookName:"useTheme",name:"ThemeProvider",providerName:"ThemeProvider"});F.forwardRef((e,i)=>{var a;const t=na(!1),{children:s,className:l,asChild:d=!1,theme:g=(a=t==null?void 0:t.theme)!==null&&a!==void 0?a:"light",hasBackground:E=!0}=e,T=E??(t===void 0&&e.theme!==void 0),p=d?ea:"div";return q.createElement(vR,{theme:g},q.createElement(p,{ref:i,className:_e("navds-theme",l,g),"data-background":T},s))});const pt=e=>_e({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var fR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const Lk=F.forwardRef((e,i)=>{var{className:a,size:t="medium",as:s="p",spacing:l,truncate:d,weight:g="regular",align:E,visuallyHidden:f,textColor:T}=e,p=fR(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return q.createElement(s,Object.assign({},p,{ref:i,className:_e(a,"navds-body-long",`navds-body-long--${t}`,pt({spacing:l,truncate:d,weight:g,align:E,visuallyHidden:f,textColor:T}))}))});var mR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const si=F.forwardRef((e,i)=>{var{className:a,size:t="medium",as:s="p",spacing:l,truncate:d,weight:g="regular",align:E,visuallyHidden:f,textColor:T}=e,p=mR(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return q.createElement(s,Object.assign({},p,{ref:i,className:_e(a,"navds-body-short",`navds-body-short--${t}`,pt({spacing:l,truncate:d,weight:g,align:E,visuallyHidden:f,textColor:T}))}))});var TR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};F.forwardRef((e,i)=>{var{className:a,size:t="medium",spacing:s,uppercase:l,as:d="p",truncate:g,weight:E="regular",align:f,visuallyHidden:T,textColor:p}=e,A=TR(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return q.createElement(d,Object.assign({},A,{ref:i,className:_e(a,"navds-detail",pt({spacing:s,truncate:g,weight:E,align:f,visuallyHidden:T,textColor:p,uppercase:l}),{"navds-detail--small":t==="small"})}))});var pR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const hR=F.forwardRef((e,i)=>{var{children:a,className:t,size:s,spacing:l,as:d="p",showIcon:g=!1}=e,E=pR(e,["children","className","size","spacing","as","showIcon"]);return q.createElement(d,Object.assign({},E,{ref:i,className:_e("navds-error-message","navds-label",t,pt({spacing:l}),{"navds-label--small":s==="small","navds-error-message--show-icon":g})}),g&&q.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},q.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),a)});var cR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const Kk=F.forwardRef((e,i)=>{var{level:a="1",size:t,className:s,as:l,spacing:d,align:g,visuallyHidden:E,textColor:f}=e,T=cR(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const p=l??`h${a}`;return q.createElement(p,Object.assign({},T,{ref:i,className:_e(s,"navds-heading",`navds-heading--${t}`,pt({spacing:d,align:g,visuallyHidden:E,textColor:f}))}))});var AR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};F.forwardRef((e,i)=>{var{className:a,spacing:t,as:s="p"}=e,l=AR(e,["className","spacing","as"]);return q.createElement(s,Object.assign({},l,{ref:i,className:_e(a,"navds-ingress",{"navds-typo--spacing":!!t})}))});var yR=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const wo=F.forwardRef((e,i)=>{var{className:a,size:t="medium",as:s="label",spacing:l,visuallyHidden:d,textColor:g}=e,E=yR(e,["className","size","as","spacing","visuallyHidden","textColor"]);return q.createElement(s,Object.assign({},E,{ref:i,className:_e(a,"navds-label",pt({spacing:l,visuallyHidden:d,textColor:g}),{"navds-label--small":t==="small"})}))});function ra(e,i){const a=Object.entries(e).filter(([t])=>!i.includes(t));return Object.fromEntries(a)}let Cd=0;function RR(e){const[i,a]=F.useState(e),t=e||i;return F.useEffect(()=>{i==null&&(Cd+=1,a(`aksel-id-${Cd}`))},[i]),t}const $d=q.useId;function Ho(e){var i;return $d!==void 0?$d().replace(/(:)/g,""):(i=RR(e))!==null&&i!==void 0?i:""}function Jd(e,i=[]){const a=F.useRef(e);return F.useEffect(()=>{a.current=e}),F.useCallback((...t)=>{var s;return(s=a.current)===null||s===void 0?void 0:s.call(a,...t)},i)}function _R({value:e,defaultValue:i,onChange:a}){const t=Jd(a),[s,l]=F.useState(i),d=e!==void 0,g=d?e:s,E=Jd(f=>{const p=typeof f=="function"?f(g):f;d||l(p),t(p)},[d,t,g]);return[g,E]}function Vo(e,i,{checkForDefaultPrevented:a=!0}={}){return function(s){if(e==null||e(s),a===!1||!s.defaultPrevented)return i==null?void 0:i(s)}}function js(e){return(i={})=>{const a=i.width?String(i.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}function Vt(e){return(i,a)=>{const t=a!=null&&a.context?String(a.context):"standalone";let s;if(t==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,g=a!=null&&a.width?String(a.width):d;s=e.formattingValues[g]||e.formattingValues[d]}else{const d=e.defaultWidth,g=a!=null&&a.width?String(a.width):e.defaultWidth;s=e.values[g]||e.values[d]}const l=e.argumentCallback?e.argumentCallback(i):i;return s[l]}}function Ut(e){return(i,a={})=>{const t=a.width,s=t&&e.matchPatterns[t]||e.matchPatterns[e.defaultMatchWidth],l=i.match(s);if(!l)return null;const d=l[0],g=t&&e.parsePatterns[t]||e.parsePatterns[e.defaultParseWidth],E=Array.isArray(g)?NR(g,p=>p.test(d)):bR(g,p=>p.test(d));let f;f=e.valueCallback?e.valueCallback(E):E,f=a.valueCallback?a.valueCallback(f):f;const T=i.slice(d.length);return{value:f,rest:T}}}function bR(e,i){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&i(e[a]))return a}function NR(e,i){for(let a=0;a<e.length;a++)if(i(e[a]))return a}function SR(e){return(i,a={})=>{const t=i.match(e.matchPattern);if(!t)return null;const s=t[0],l=i.match(e.parsePattern);if(!l)return null;let d=e.valueCallback?e.valueCallback(l[0]):l[0];d=a.valueCallback?a.valueCallback(d):d;const g=i.slice(s.length);return{value:d,rest:g}}}const IR={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},OR=(e,i,a)=>{let t;const s=IR[e];return typeof s=="string"?t=s:i===1?t=s.one:t=s.other.replace("{{count}}",String(i)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"om "+t:t+" siden":t},LR={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},KR={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},DR={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},PR={date:js({formats:LR,defaultWidth:"full"}),time:js({formats:KR,defaultWidth:"full"}),dateTime:js({formats:DR,defaultWidth:"full"})},FR={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},MR=(e,i,a,t)=>FR[e],GR={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},BR={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},jR={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},wR={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},HR={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},VR=(e,i)=>Number(e)+".",UR={ordinalNumber:VR,era:Vt({values:GR,defaultWidth:"wide"}),quarter:Vt({values:BR,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Vt({values:jR,defaultWidth:"wide"}),day:Vt({values:wR,defaultWidth:"wide"}),dayPeriod:Vt({values:HR,defaultWidth:"wide"})},qR=/^(\d+)\.?/i,xR=/\d+/i,YR={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},CR={any:[/^f/i,/^e/i]},$R={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},JR={any:[/1/i,/2/i,/3/i,/4/i]},WR={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},zR={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},XR={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},ZR={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},QR={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},e_={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},n_={ordinalNumber:SR({matchPattern:qR,parsePattern:xR,valueCallback:e=>parseInt(e,10)}),era:Ut({matchPatterns:YR,defaultMatchWidth:"wide",parsePatterns:CR,defaultParseWidth:"any"}),quarter:Ut({matchPatterns:$R,defaultMatchWidth:"wide",parsePatterns:JR,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ut({matchPatterns:WR,defaultMatchWidth:"wide",parsePatterns:zR,defaultParseWidth:"any"}),day:Ut({matchPatterns:XR,defaultMatchWidth:"wide",parsePatterns:ZR,defaultParseWidth:"any"}),dayPeriod:Ut({matchPatterns:QR,defaultMatchWidth:"any",parsePatterns:e_,defaultParseWidth:"any"})},r_={code:"nb",formatDistance:OR,formatLong:PR,formatRelative:MR,localize:UR,match:n_,options:{weekStartsOn:1,firstWeekContainsDate:4}},t_={global:{dateLocale:r_,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},a_=F.createContext({locale:t_}),i_=()=>F.useContext(a_),Wd=/(\w+)/g;function s_(e,i){const a=Array.isArray(e)?e:o_(e);for(const t of i){if(!t)continue;let s=t;for(let l=0;l<a.length;l++){const d=s[a[l]];d!==void 0&&(s=d)}if(typeof s=="string")return s}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function o_(e){const i=[];let a=Wd.exec(e);for(;a;){const[,t,s]=a;i.push(t||s),a=Wd.exec(e)}return i}const l_=/{[^}]*}/g;function oi(e,...i){const a=i_(),t=a.translations||[],s=[...i,...Array.isArray(t)?t.map(d=>d[e]):[t[e]],a.locale[e]];return(d,g)=>{const E=s_(d,s);return g?E.replace(l_,f=>{const T=f.substring(1,f.length-1);if(g[T]===void 0){const p=JSON.stringify(g);throw new Error(`Error translating key '${d}'. No replacement syntax ({}) found for key '${T}'. The following replacements were passed: '${p}'`)}return g[T]}):E}}var u_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const d_=F.forwardRef((e,i)=>{var{className:a,size:t="medium",title:s,transparent:l=!1,variant:d="neutral",id:g}=e,E=u_(e,["className","size","title","transparent","variant","id"]);const f=Ho(),T=oi("Loader");return q.createElement("svg",Object.assign({"aria-labelledby":g??`loader-${f}`,ref:i,className:_e("navds-loader",a,`navds-loader--${t}`,`navds-loader--${d}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},ra(E,["children"])),q.createElement("title",{id:g??`loader-${f}`},s||T("title")),q.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),q.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var g_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const Uo=F.forwardRef((e,i)=>{var{as:a="button",variant:t="primary",className:s,children:l,size:d="medium",loading:g=!1,disabled:E,icon:f,iconPosition:T="left",onKeyUp:p}=e,A=g_(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp"]);const D=E||g?ra(A,["href"]):A,K=R=>{R.key===" "&&!E&&!g&&R.currentTarget.click()};return q.createElement(a,Object.assign({},a!=="button"?{role:"button"}:{},D,{ref:i,onKeyUp:Vo(p,K),className:_e(s,"navds-button",`navds-button--${t}`,`navds-button--${d}`,{"navds-button--loading":g,"navds-button--icon-only":!!f&&!l,"navds-button--disabled":E??g}),disabled:E??g?!0:void 0}),f&&T==="left"&&q.createElement("span",{className:"navds-button__icon"},f),g&&q.createElement(d_,{size:d}),l&&q.createElement(wo,{as:"span",size:d==="medium"?"medium":"small"},l),f&&T==="right"&&q.createElement("span",{className:"navds-button__icon"},f))}),k_=F.createContext(null),E_=(e,i)=>{var a,t,s;const{size:l,error:d,errorId:g}=e,E=F.useContext(k_),f=Ho(),T=(a=e.id)!==null&&a!==void 0?a:`${i}-${f}`,p=g??`${i}-error-${f}`,A=`${i}-description-${f}`,D=(E==null?void 0:E.disabled)||e.disabled,K=((E==null?void 0:E.readOnly)||e.readOnly)&&!D||void 0,R=!D&&!K&&!!(d||E!=null&&E.error),S=!D&&!K&&!!d&&typeof d!="boolean",P=Object.assign({},R?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:S,hasError:R,errorId:p,inputDescriptionId:A,size:(t=l??(E==null?void 0:E.size))!==null&&t!==void 0?t:"medium",readOnly:K,inputProps:Object.assign(Object.assign({id:T},P),{"aria-describedby":_e(e["aria-describedby"],{[A]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[p]:S,[(s=E==null?void 0:E.errorId)!==null&&s!==void 0?s:""]:R&&!!(E!=null&&E.error)})||void 0,disabled:D})}};function Qe(e,i,a,t){return t?typeof t=="string"?{[`--__${e}c-${i}-${a}-xs`]:t}:Object.fromEntries(Object.entries(t).map(([s,l])=>[`--__${e}c-${i}-${a}-${s}`,l])):{}}const v_={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},zd=(e,i,a,t,s,l)=>i.split(" ").map((d,g,E)=>{var f;if(e==="margin-inline"&&d==="full")return`calc((100vw - ${100/E.length}%)/-2)`;if(e==="padding-inline"&&d==="full")return`calc((100vw - ${100/E.length}%)/2)`;if(["mi","mb"].includes(e)&&d==="auto")return"auto";let T=`var(--${l}-${a}-${d})`;if(t.includes(d))T=d==="px"?"1px":d;else if(d.startsWith("space"))T=`var(--${l}-${d})`;else{const p=`--${l}-spacing-${d}`;T=`var(${(f=v_[p])!==null&&f!==void 0?f:p})`}return s?d==="0"?"0":`calc(-1 * ${T})`:T}).join(" ");function In(e,i,a,t,s,l=!1,d=[]){if(!s)return{};if(typeof s=="string")return{[`--__${e}c-${i}-${a}-xs`]:zd(a,s,t,d,l,e)};const g={};return Object.entries(s).forEach(([E,f])=>{g[`--__${e}c-${i}-${a}-${E}`]=zd(a,f,t,d,l,e)}),g}const Dk=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Pk=({children:e,className:i,padding:a,paddingInline:t,paddingBlock:s,margin:l,marginInline:d,marginBlock:g,width:E,minWidth:f,maxWidth:T,height:p,minHeight:A,maxHeight:D,position:K,inset:R,top:S,right:P,left:H,bottom:I,overflow:Z,overflowX:y,overflowY:w,flexBasis:O,flexGrow:N,flexShrink:J,gridColumn:W})=>{const z=na(!1)?"ax":"a",ie=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},In(z,"r","p","spacing",a)),In(z,"r","pi","spacing",t)),In(z,"r","pb","spacing",s)),In(z,"r","m","spacing",l)),In(z,"r","mi","spacing",d)),In(z,"r","mb","spacing",g)),Qe(z,"r","w",E)),Qe(z,"r","minw",f)),Qe(z,"r","maxw",T)),Qe(z,"r","h",p)),Qe(z,"r","minh",A)),Qe(z,"r","maxh",D)),Qe(z,"r","position",K)),In(z,"r","inset","spacing",R)),In(z,"r","top","spacing",S)),In(z,"r","right","spacing",P)),In(z,"r","bottom","spacing",I)),In(z,"r","left","spacing",H)),Qe(z,"r","overflow",Z)),Qe(z,"r","overflowx",y)),Qe(z,"r","overflowy",w)),Qe(z,"r","flex-basis",O)),Qe(z,"r","flex-grow",N)),Qe(z,"r","flex-shrink",J)),Qe(z,"r","grid-column",W));return q.createElement(ea,{className:_e({className:i,"navds-r-p":a,"navds-r-pi":t,"navds-r-pb":s,"navds-r-m":l,"navds-r-mi":d,"navds-r-mb":g,"navds-r-w":E,"navds-r-minw":f,"navds-r-maxw":T,"navds-r-h":p,"navds-r-minh":A,"navds-r-maxh":D,"navds-r-position":K,"navds-r-inset":R,"navds-r-top":S,"navds-r-right":P,"navds-r-bottom":I,"navds-r-left":H,"navds-r-overflow":Z,"navds-r-overflowx":y,"navds-r-overflowy":w,"navds-r-flex-basis":O,"navds-r-flex-grow":N,"navds-r-flex-shrink":J,"navds-r-grid-column":W}),style:ie},e)};var f_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const m_=F.forwardRef((e,i)=>{var{children:a,className:t,as:s="div",columns:l,gap:d,style:g,align:E,asChild:f}=e,T=f_(e,["children","className","as","columns","gap","style","align","asChild"]);const A=na(!1)?"ax":"a",D=Object.assign(Object.assign(Object.assign(Object.assign({},g),{[`--__${A}c-hgrid-align`]:E}),In(A,"hgrid","gap","spacing",d)),Qe(A,"hgrid","columns",T_(l))),K=f?ea:s;return q.createElement(Pk,Object.assign({},T),q.createElement(K,Object.assign({},ra(T,Dk),{ref:i,className:_e("navds-hgrid",t,{"navds-hgrid-gap":d,"navds-hgrid-align":E}),style:D}),a))});function T_(e){return e?typeof e=="string"||typeof e=="number"?Xd(e):Object.fromEntries(Object.entries(e).map(([i,a])=>[i,Xd(a)])):{}}const Xd=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var p_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const Fk=F.forwardRef((e,i)=>{var{children:a,className:t,as:s="div",align:l,justify:d,wrap:g=!0,gap:E,style:f,direction:T="row",asChild:p}=e,A=p_(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const K=na(!1)?"ax":"a",R=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},f),In(K,"stack","gap","spacing",E)),Qe(K,"stack","direction",T)),Qe(K,"stack","align",l)),Qe(K,"stack","justify",d)),S=p?ea:s;return q.createElement(Pk,Object.assign({},A),q.createElement(S,Object.assign({},ra(A,Dk),{ref:i,style:R,className:_e("navds-stack",t,{"navds-vstack":T==="column","navds-hstack":T==="row","navds-stack-gap":E,"navds-stack-align":l,"navds-stack-justify":d,"navds-stack-direction":T,"navds-stack-wrap":g})}),a))});var h_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const dt=F.forwardRef((e,i)=>{var{as:a="div"}=e,t=h_(e,["as"]);return q.createElement(Fk,Object.assign({as:a},t,{ref:i,direction:"row"}))});var c_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const vt=F.forwardRef((e,i)=>{var{as:a="div"}=e,t=c_(e,["as"]);return q.createElement(Fk,Object.assign({as:a},t,{ref:i,direction:"column",wrap:!1}))}),oo=F.createContext({listType:"ul",size:"medium"});var A_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const Mk=F.forwardRef((e,i)=>{var{className:a,children:t,title:s,icon:l}=e,d=A_(e,["className","children","title","icon"]);const{listType:g,size:E}=F.useContext(oo);return g==="ol"&&l&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),q.createElement("li",Object.assign({},d,{ref:i,className:_e("navds-list__item",a)}),g==="ul"&&q.createElement("div",{className:_e("navds-list__item-marker",{"navds-list__item-marker--icon":l,"navds-list__item-marker--bullet":!l})},l||q.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},q.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),q.createElement("div",null,s&&q.createElement(Lk,{as:"p",size:E,weight:"semibold"},s),t))});Mk.displayName="List.Item";var y_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const R_={small:"xsmall",medium:"small",large:"medium"},lo=F.forwardRef((e,i)=>{var{children:a,className:t,as:s="ul",title:l,description:d,headingTag:g="h3",size:E}=e,f=y_(e,["children","className","as","title","description","headingTag","size"]);const{size:T}=F.useContext(oo),p=E??T;return q.createElement(oo.Provider,{value:{listType:s,size:p}},q.createElement(Lk,Object.assign({as:"div"},f,{size:p,ref:i,className:_e("navds-list",`navds-list--${p}`,t)}),l&&q.createElement(Kk,{size:R_[p],as:g},l),d&&q.createElement(si,{size:p},d),q.createElement(s,{role:"list"},a)))});lo.Item=Mk;var __=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const b_=F.forwardRef((e,i)=>{var{className:a}=e,t=__(e,["className"]);return q.createElement("tbody",Object.assign({},t,{ref:i,className:_e("navds-table__body",a)}))});var N_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const Gk=F.forwardRef((e,i)=>{var{className:a,children:t,align:s,textSize:l}=e,d=N_(e,["className","children","align","textSize"]);return q.createElement("th",Object.assign({ref:i,className:_e("navds-table__header-cell","navds-label",a,{[`navds-table__header-cell--align-${s}`]:s,"navds-label--small":l==="small"})},d),t)}),Bk=F.createContext(null);var S_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const I_=F.forwardRef((e,i)=>{var a,t,s,l,{className:d,children:g,sortable:E=!1,sortKey:f}=e,T=S_(e,["className","children","sortable","sortKey"]);const p=F.useContext(Bk);return E&&!f&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),q.createElement(Gk,Object.assign({scope:"col",ref:i,className:d,"aria-sort":E?((a=p==null?void 0:p.sort)===null||a===void 0?void 0:a.orderBy)===f?(t=p==null?void 0:p.sort)===null||t===void 0?void 0:t.direction:"none":void 0},T),E?q.createElement("button",{type:"button",className:"navds-table__sort-button",onClick:E&&f?()=>{var A;return(A=p==null?void 0:p.onSortChange)===null||A===void 0?void 0:A.call(p,f)}:void 0},g,((s=p==null?void 0:p.sort)===null||s===void 0?void 0:s.orderBy)===f?((l=p==null?void 0:p.sort)===null||l===void 0?void 0:l.direction)==="descending"?q.createElement(Jy,{"aria-hidden":!0}):q.createElement(Zy,{"aria-hidden":!0}):q.createElement(eR,{"aria-hidden":!0})):g)});var O_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const jk=F.forwardRef((e,i)=>{var{className:a,children:t="",align:s,textSize:l}=e,d=O_(e,["className","children","align","textSize"]);return q.createElement(si,Object.assign({as:"td",ref:i,className:_e("navds-table__data-cell",a,{[`navds-table__data-cell--align-${s}`]:s}),size:l},d),t)});var L_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const K_=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function D_(e){const i=parseFloat(e);return!Number.isNaN(i)&&Number.isFinite(i)}function Zd(e){return typeof e=="string"&&e[e.length-1]==="%"&&D_(e.substring(0,e.length-1))}function ws(e,i){i===0&&(e!=null&&e.style)&&(e.style.display="none")}function P_(e,i){i===0&&(e!=null&&e.style)&&(e.style.display="")}const F_=e=>{var{children:i,className:a,innerClassName:t,duration:s=250,easing:l="ease",height:d}=e,g=L_(e,["children","className","innerClassName","duration","easing","height"]);const E=F.useRef(d),f=F.useRef(null),T=F.useRef(),p=F.useRef(),A=F.useRef(d),D=F.useRef("visible"),K=K_?0:s;typeof A.current=="number"?(typeof d!="string"&&(A.current=d<0?0:d),D.current="hidden"):Zd(A.current)&&(A.current=d==="0%"?0:d,D.current="hidden");const[R,S]=F.useState(A.current),[P,H]=F.useState(D.current),[I,Z]=F.useState(!1);F.useEffect(()=>{ws(f.current,A.current)},[]),F.useEffect(()=>{if(d!==E.current&&f.current){P_(f.current,E.current),f.current.style.overflow="hidden";const N=f.current.offsetHeight;f.current.style.overflow="";const J=K;let W,x,z="hidden",ie;const C=E.current==="auto";typeof d=="number"?(W=d<0?0:d,x=W):Zd(d)?(W=d==="0%"?0:d,x=W):(W=N,x="auto",z=void 0),C&&(x=W,W=N),S(W),H("hidden"),Z(!C),clearTimeout(p.current),clearTimeout(T.current),C?(ie=!0,p.current=setTimeout(()=>{S(x),H(z),Z(ie)},50),T.current=setTimeout(()=>{Z(!1),ws(f.current,x)},J)):p.current=setTimeout(()=>{S(x),H(z),Z(!1),d!=="auto"&&ws(f.current,W)},J)}return E.current=d,()=>{clearTimeout(p.current),clearTimeout(T.current)}},[d]);const y={height:R,overflow:P};I&&(y.transition=`height ${K}ms ${l} 0ms`,y.WebkitTransition=y.transition);const O=typeof g["aria-hidden"]<"u"?g["aria-hidden"]:d===0;return q.createElement("div",Object.assign({},g,{className:a,style:y}),q.createElement("div",{"aria-hidden":O,className:t,ref:f},i))};var M_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const wk=F.forwardRef((e,i)=>{var{className:a,selected:t=!1,shadeOnHover:s=!0}=e,l=M_(e,["className","selected","shadeOnHover"]);return q.createElement("tr",Object.assign({},l,{ref:i,className:_e("navds-table__row",a,{"navds-table__row--selected":t,"navds-table__row--shade-on-hover":s})}))});var G_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const B_=F.forwardRef((e,i)=>{var{className:a,children:t,content:s,togglePlacement:l="left",defaultOpen:d=!1,open:g,onOpenChange:E,expansionDisabled:f=!1,expandOnRowClick:T=!1,colSpan:p=999,onClick:A}=e,D=G_(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","onClick"]);const[K,R]=_R({defaultValue:d,value:g,onChange:E}),S=oi("global"),P=Ho(),H=Z=>{R(y=>!y),Z.stopPropagation()},I=Z=>{T&&!f&&!Hk(Z.target)&&H(Z)};return q.createElement(q.Fragment,null,q.createElement(wk,Object.assign({},D,{ref:i,className:_e("navds-table__expandable-row",a,{"navds-table__expandable-row--open":K,"navds-table__expandable-row--expansion-disabled":f,"navds-table__expandable-row--clickable":T}),onClick:Vo(A,I)}),l==="right"&&t,q.createElement(jk,{className:_e("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":K}),onClick:f?()=>null:H},!f&&q.createElement("button",{className:"navds-table__toggle-expand-button",type:"button","aria-controls":P,"aria-expanded":K,onClick:H},q.createElement(rR,{className:"navds-table__expandable-icon",title:S(K?"showLess":"showMore")}))),l==="left"&&t),q.createElement("tr",{"data-state":K?"open":"closed",className:"navds-table__expanded-row","aria-hidden":!K,id:P},q.createElement("td",{colSpan:p,className:"navds-table__expanded-row-cell"},q.createElement(F_,{className:"navds-table__expanded-row-collapse",innerClassName:"navds-table__expanded-row-content",height:K?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},s))))});function Hk(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:Hk(e.parentElement)}var j_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const w_=F.forwardRef((e,i)=>{var{className:a}=e,t=j_(e,["className"]);return q.createElement("thead",Object.assign({},t,{ref:i,className:_e("navds-table__header",a)}))});var H_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const Ve=F.forwardRef((e,i)=>{var{className:a,zebraStripes:t=!1,size:s="medium",onSortChange:l,sort:d}=e,g=H_(e,["className","zebraStripes","size","onSortChange","sort"]);return q.createElement(Bk.Provider,{value:{onSortChange:l,sort:d}},q.createElement("table",Object.assign({},g,{ref:i,className:_e("navds-table",`navds-table--${s}`,a,{"navds-table--zebra-stripes":t})})))});Ve.Header=w_;Ve.Body=b_;Ve.Row=wk;Ve.ColumnHeader=I_;Ve.HeaderCell=Gk;Ve.DataCell=jk;Ve.ExpandableRow=B_;const Vk=F.createContext(null);var V_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const Uk=F.forwardRef((e,i)=>{var a,{className:t,children:s,disabled:l,onClick:d}=e,g=V_(e,["className","children","disabled","onClick"]);const E=oi("Search"),f=F.useContext(Vk);if(f===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:T,variant:p,handleClick:A}=f;return q.createElement(Uo,Object.assign({type:"submit"},g,{ref:i,size:T,variant:p==="secondary"?"secondary":"primary",className:_e("navds-search__button-search",t),disabled:(a=f==null?void 0:f.disabled)!==null&&a!==void 0?a:l,onClick:Vo(d,A),icon:q.createElement(Sk,Object.assign({},s?{"aria-hidden":!0}:{title:E("search")}))}),s)});var U_=function(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a};const uo=F.forwardRef((e,i)=>{const{inputProps:a,size:t="medium",inputDescriptionId:s,errorId:l,showErrorMsg:d,hasError:g}=E_(e,"searchfield"),{className:E,hideLabel:f=!0,label:T,description:p,value:A,clearButtonLabel:D,onClear:K,clearButton:R=!0,children:S,variant:P="primary",defaultValue:H,onChange:I,onSearchClick:Z,htmlSize:y}=e,w=U_(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize"]),O=na(!1),N=F.useRef(null),J=lR(N,i),W=oi("Search"),[x,z]=F.useState(H??""),ie=V=>{A===void 0&&z(V),I==null||I(V)},C=V=>{var re,ae;K==null||K(V),ie(""),(ae=(re=N.current)===null||re===void 0?void 0:re.focus)===null||ae===void 0||ae.call(re)},$=()=>{Z==null||Z(`${A??x}`)},Y=R&&!a.disabled&&(A??x),Q=()=>O?q.createElement(Uo,{className:"navds-search__button-clear",variant:"tertiary-neutral",size:t==="medium"?"small":"xsmall",icon:q.createElement(Yd,{"aria-hidden":!0}),title:D||W("clear"),hidden:!Y,onClick:V=>C({trigger:"Click",event:V})}):q.createElement("button",{type:"button",onClick:V=>C({trigger:"Click",event:V}),className:"navds-search__button-clear",hidden:!Y},q.createElement("span",{className:"navds-sr-only"},D||W("clear")),q.createElement(Yd,{"aria-hidden":!0}));return q.createElement("div",{onKeyDown:V=>{var re;V.key==="Escape"&&(!((re=N.current)===null||re===void 0)&&re.value&&V.preventDefault(),C({trigger:"Escape",event:V}))},className:_e(E,"navds-form-field",`navds-form-field--${t}`,"navds-search",{"navds-search--error":g,"navds-search--disabled":a.disabled,"navds-search--with-size":y})},q.createElement(wo,{htmlFor:a.id,size:t,className:_e("navds-form-field__label",{"navds-sr-only":f})},T),!!p&&q.createElement(si,{className:_e("navds-form-field__description",{"navds-sr-only":f}),id:s,size:t,as:"div"},p),q.createElement("div",{className:"navds-search__wrapper"},q.createElement("div",{className:"navds-search__wrapper-inner"},P==="simple"&&q.createElement(Sk,{"aria-hidden":!0,className:"navds-search__search-icon"}),q.createElement("input",Object.assign({ref:J},ra(w,["error","errorId","size","readOnly"]),a,{value:A??x,onChange:V=>ie(V.target.value),type:"search",className:_e(E,"navds-search__input",`navds-search__input--${P}`,"navds-text-field__input","navds-body-short",`navds-body-short--${t}`)},y?{size:Number(y)}:{})),q.createElement(Q,null)),q.createElement(Vk.Provider,{value:{size:t,disabled:a.disabled,variant:P,handleClick:$}},S||P!=="simple"&&q.createElement(Uk,null))),q.createElement("div",{className:"navds-form-field__error",id:l,"aria-relevant":"additions removals","aria-live":"polite"},d&&q.createElement(hR,{size:t,showIcon:!0},e.error)))});uo.Button=Uk;const gt=e=>{if(e==null)return;const i=e.toString().replace(/\s/g,"");if(!Number.isNaN(i))return Number(Math.round(parseFloat(i))).toLocaleString("nb-NO").replace(/,|\s/g," ")};function qo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var go={exports:{}},q_=go.exports,Qd;function x_(){return Qd||(Qd=1,function(e,i){(function(a,t){e.exports=t()})(q_,function(){var a="minute",t=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(l,d,g){var E=d.prototype;g.utc=function(R){var S={date:R,utc:!0,args:arguments};return new d(S)},E.utc=function(R){var S=g(this.toDate(),{locale:this.$L,utc:!0});return R?S.add(this.utcOffset(),a):S},E.local=function(){return g(this.toDate(),{locale:this.$L,utc:!1})};var f=E.parse;E.parse=function(R){R.utc&&(this.$u=!0),this.$utils().u(R.$offset)||(this.$offset=R.$offset),f.call(this,R)};var T=E.init;E.init=function(){if(this.$u){var R=this.$d;this.$y=R.getUTCFullYear(),this.$M=R.getUTCMonth(),this.$D=R.getUTCDate(),this.$W=R.getUTCDay(),this.$H=R.getUTCHours(),this.$m=R.getUTCMinutes(),this.$s=R.getUTCSeconds(),this.$ms=R.getUTCMilliseconds()}else T.call(this)};var p=E.utcOffset;E.utcOffset=function(R,S){var P=this.$utils().u;if(P(R))return this.$u?0:P(this.$offset)?p.call(this):this.$offset;if(typeof R=="string"&&(R=function(y){y===void 0&&(y="");var w=y.match(t);if(!w)return null;var O=(""+w[0]).match(s)||["-",0,0],N=O[0],J=60*+O[1]+ +O[2];return J===0?0:N==="+"?J:-J}(R),R===null))return this;var H=Math.abs(R)<=16?60*R:R,I=this;if(S)return I.$offset=H,I.$u=R===0,I;if(R!==0){var Z=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(I=this.local().add(H+Z,a)).$offset=H,I.$x.$localOffset=Z}else I=this.utc();return I};var A=E.format;E.format=function(R){var S=R||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return A.call(this,S)},E.valueOf=function(){var R=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*R},E.isUTC=function(){return!!this.$u},E.toISOString=function(){return this.toDate().toISOString()},E.toString=function(){return this.toDate().toUTCString()};var D=E.toDate;E.toDate=function(R){return R==="s"&&this.$offset?g(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():D.call(this)};var K=E.diff;E.diff=function(R,S,P){if(R&&this.$u===R.$u)return K.call(this,R,S,P);var H=this.local(),I=g(R).local();return K.call(H,I,S,P)}}})}(go)),go.exports}var Y_=x_();const C_=qo(Y_);var ko={exports:{}},$_=ko.exports,eg;function J_(){return eg||(eg=1,function(e,i){(function(a,t){e.exports=t()})($_,function(){var a,t,s=1e3,l=6e4,d=36e5,g=864e5,E=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=31536e6,T=2628e6,p=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,A={years:f,months:T,days:g,hours:d,minutes:l,seconds:s,milliseconds:1,weeks:6048e5},D=function(w){return w instanceof Z},K=function(w,O,N){return new Z(w,N,O.$l)},R=function(w){return t.p(w)+"s"},S=function(w){return w<0},P=function(w){return S(w)?Math.ceil(w):Math.floor(w)},H=function(w){return Math.abs(w)},I=function(w,O){return w?S(w)?{negative:!0,format:""+H(w)+O}:{negative:!1,format:""+w+O}:{negative:!1,format:""}},Z=function(){function w(N,J,W){var x=this;if(this.$d={},this.$l=W,N===void 0&&(this.$ms=0,this.parseFromMilliseconds()),J)return K(N*A[R(J)],this);if(typeof N=="number")return this.$ms=N,this.parseFromMilliseconds(),this;if(typeof N=="object")return Object.keys(N).forEach(function(C){x.$d[R(C)]=N[C]}),this.calMilliseconds(),this;if(typeof N=="string"){var z=N.match(p);if(z){var ie=z.slice(2).map(function(C){return C!=null?Number(C):0});return this.$d.years=ie[0],this.$d.months=ie[1],this.$d.weeks=ie[2],this.$d.days=ie[3],this.$d.hours=ie[4],this.$d.minutes=ie[5],this.$d.seconds=ie[6],this.calMilliseconds(),this}}return this}var O=w.prototype;return O.calMilliseconds=function(){var N=this;this.$ms=Object.keys(this.$d).reduce(function(J,W){return J+(N.$d[W]||0)*A[W]},0)},O.parseFromMilliseconds=function(){var N=this.$ms;this.$d.years=P(N/f),N%=f,this.$d.months=P(N/T),N%=T,this.$d.days=P(N/g),N%=g,this.$d.hours=P(N/d),N%=d,this.$d.minutes=P(N/l),N%=l,this.$d.seconds=P(N/s),N%=s,this.$d.milliseconds=N},O.toISOString=function(){var N=I(this.$d.years,"Y"),J=I(this.$d.months,"M"),W=+this.$d.days||0;this.$d.weeks&&(W+=7*this.$d.weeks);var x=I(W,"D"),z=I(this.$d.hours,"H"),ie=I(this.$d.minutes,"M"),C=this.$d.seconds||0;this.$d.milliseconds&&(C+=this.$d.milliseconds/1e3,C=Math.round(1e3*C)/1e3);var $=I(C,"S"),Y=N.negative||J.negative||x.negative||z.negative||ie.negative||$.negative,Q=z.format||ie.format||$.format?"T":"",V=(Y?"-":"")+"P"+N.format+J.format+x.format+Q+z.format+ie.format+$.format;return V==="P"||V==="-P"?"P0D":V},O.toJSON=function(){return this.toISOString()},O.format=function(N){var J=N||"YYYY-MM-DDTHH:mm:ss",W={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return J.replace(E,function(x,z){return z||String(W[x])})},O.as=function(N){return this.$ms/A[R(N)]},O.get=function(N){var J=this.$ms,W=R(N);return W==="milliseconds"?J%=1e3:J=W==="weeks"?P(J/A[W]):this.$d[W],J||0},O.add=function(N,J,W){var x;return x=J?N*A[R(J)]:D(N)?N.$ms:K(N,this).$ms,K(this.$ms+x*(W?-1:1),this)},O.subtract=function(N,J){return this.add(N,J,!0)},O.locale=function(N){var J=this.clone();return J.$l=N,J},O.clone=function(){return K(this.$ms,this)},O.humanize=function(N){return a().add(this.$ms,"ms").locale(this.$l).fromNow(!N)},O.valueOf=function(){return this.asMilliseconds()},O.milliseconds=function(){return this.get("milliseconds")},O.asMilliseconds=function(){return this.as("milliseconds")},O.seconds=function(){return this.get("seconds")},O.asSeconds=function(){return this.as("seconds")},O.minutes=function(){return this.get("minutes")},O.asMinutes=function(){return this.as("minutes")},O.hours=function(){return this.get("hours")},O.asHours=function(){return this.as("hours")},O.days=function(){return this.get("days")},O.asDays=function(){return this.as("days")},O.weeks=function(){return this.get("weeks")},O.asWeeks=function(){return this.as("weeks")},O.months=function(){return this.get("months")},O.asMonths=function(){return this.as("months")},O.years=function(){return this.get("years")},O.asYears=function(){return this.as("years")},w}(),y=function(w,O,N){return w.add(O.years()*N,"y").add(O.months()*N,"M").add(O.days()*N,"d").add(O.hours()*N,"h").add(O.minutes()*N,"m").add(O.seconds()*N,"s").add(O.milliseconds()*N,"ms")};return function(w,O,N){a=N,t=N().$utils(),N.duration=function(x,z){var ie=N.locale();return K(x,{$l:ie},z)},N.isDuration=D;var J=O.prototype.add,W=O.prototype.subtract;O.prototype.add=function(x,z){return D(x)?y(this,x,1):J.bind(this)(x,z)},O.prototype.subtract=function(x,z){return D(x)?y(this,x,-1):W.bind(this)(x,z)}}})}(ko)),ko.exports}var W_=J_();const z_=qo(W_);var Eo={exports:{}},X_=Eo.exports,ng;function Z_(){return ng||(ng=1,function(e,i){(function(a,t){e.exports=t()})(X_,function(){var a="day";return function(t,s,l){var d=function(f){return f.add(4-f.isoWeekday(),a)},g=s.prototype;g.isoWeekYear=function(){return d(this).year()},g.isoWeek=function(f){if(!this.$utils().u(f))return this.add(7*(f-this.isoWeek()),a);var T,p,A,D,K=d(this),R=(T=this.isoWeekYear(),p=this.$u,A=(p?l.utc:l)().year(T).startOf("year"),D=4-A.isoWeekday(),A.isoWeekday()>4&&(D+=7),A.add(D,a));return K.diff(R,"week")+1},g.isoWeekday=function(f){return this.$utils().u(f)?this.day()||7:this.day(this.day()%7?f:f-7)};var E=g.startOf;g.startOf=function(f,T){var p=this.$utils(),A=!!p.u(T)||T;return p.p(f)==="isoweek"?A?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):E.bind(this)(f,T)}}})}(Eo)),Eo.exports}var Q_=Z_();const eb=qo(Q_);var vo={exports:{}},nb=vo.exports,rg;function rb(){return rg||(rg=1,function(e,i){(function(a,t){e.exports=t(Or)})(nb,function(a){function t(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var s=t(a),l={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(l,null,!0),l})}(vo)),vo.exports}rb();const tb=ck(),ln=e=>qy({locale:"nb-NO",messages:e},tb),qk={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"},tg="YYYY-MM-DD";Or.extend(C_);Or.extend(eb);Or.extend(z_);ln(qk);const ft="9999-12-31",ab=(e,i,a)=>Or(e,i,a).utc(!0).startOf("day"),ag=(e,i)=>e===ft?e:ab(e,tg).add(i,"days").format(tg);ln(qk);function ib(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ig={exports:{}},qt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function sb(){if(sg)return qt;sg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function a(t,s,l){var d=null;if(l!==void 0&&(d=""+l),s.key!==void 0&&(d=""+s.key),"key"in s){l={};for(var g in s)g!=="key"&&(l[g]=s[g])}else l=s;return s=l.ref,{$$typeof:e,type:t,key:d,ref:s!==void 0?s:null,props:l}}return qt.Fragment=i,qt.jsx=a,qt.jsxs=a,qt}var og;function ob(){return og||(og=1,ig.exports=sb()),ig.exports}var Xe=ob();const Yr={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};ln(Yr);ln(Yr);var lg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ug;function lb(){return ug||(ug=1,function(e){(function(){var i={}.hasOwnProperty;function a(){for(var l="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(l=s(l,t.call(this,g)))}return l}function t(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return a.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var g in l)i.call(l,g)&&l[g]&&(d=s(d,this&&this[g]||g));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(a.default=a,e.exports=a):window.classNames=a})()}(lg)),lg.exports}var ub=lb();const On=ib(ub),db="_borderbox_hicl4_1",gb="_error_hicl4_4",kb="_warning_hicl4_7",Eb={borderbox:db,error:gb,warning:kb};On.bind(Eb);const vb="_aksjonspunkt_kn1hn_1",fb="_erAksjonspunktApent_kn1hn_4",mb="_erIkkeGodkjentAvBeslutter_kn1hn_8",Tb={aksjonspunkt:vb,erAksjonspunktApent:fb,erIkkeGodkjentAvBeslutter:mb};On.bind(Tb);const zt=({dateString:e})=>Xe.jsx(Nk,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(e)}),pb=ln(Yr),ai=({dateTimeString:e,separator:i="dash",year:a="numeric",month:t="2-digit",day:s="2-digit",hour:l="numeric",minute:d="numeric",second:g=void 0})=>{const E=()=>{switch(i){case"dash":return" - ";case"kl":return pb.formatMessage({id:"DateTimeLabel.Kl"})}};return Xe.jsxs(Xe.Fragment,{children:[Xe.jsx(Nk,{value:new Date(e),day:s,month:t,year:a}),E(),Xe.jsx(Yy,{value:new Date(e),hour:l,minute:d,second:g})]})};ln(Yr);const hb="_tooltip_h8akz_1",cb="_tooltiptext_h8akz_5",Ab="_left_h8akz_22",yb="_top_h8akz_27",Rb="_right_h8akz_30",_b="_bottom_h8akz_34",bb="_showTooltip_h8akz_1",fo={tooltip:hb,tooltiptext:cb,left:Ab,top:yb,right:Rb,bottom:_b,showTooltip:bb},Nb=On.bind(fo),Sb=({children:e,content:i,alignRight:a=!1,alignLeft:t=!1,alignTop:s=!1,alignBottom:l=!1})=>Xe.jsxs("div",{className:fo.tooltip,children:[Xe.jsx("span",{className:Nb(fo.tooltiptext,{right:a||!t&&!s&&!l,left:t,top:s,bottom:l}),children:i}),e]}),Ib=q.forwardRef(({onClick:e=()=>{},onMouseDown:i,tabIndex:a=-1,className:t="",src:s,srcHover:l,alt:d,onKeyDown:g,tooltip:E,alignTooltipLeft:f=!1},T)=>{const[p,A]=F.useState(!1),D=F.useCallback(()=>{A(!0)},[]),K=F.useCallback(()=>{A(!1)},[]),R=F.useCallback(H=>{(H.key==="Enter"||H.key===" ")&&(g&&g(H),H.preventDefault())},[]),S=l&&p?l:s,P=Xe.jsx("img",{ref:T,className:t,src:S,alt:d,tabIndex:a,onMouseOver:D,onMouseOut:K,onFocus:D,onBlur:K,onKeyDown:R,onMouseDown:i,onClick:e});return E?Xe.jsx(Sb,{content:E,alignLeft:f,children:P}):P});Ib.displayName="Image";const Ob="_flexColumnNew_1vdv1_1",Lb={flexColumnNew:Ob};On.bind(Lb);const Kb="_flexRow_1yf0y_1",Db="_spaceBetween_1yf0y_9",Pb="_alignItemsToBaseline_1yf0y_12",Fb="_alignItemsToFlexEnd_1yf0y_15",Mb="_justifyItemsToFlexEnd_1yf0y_18",Gb="_wrap_1yf0y_21",Bb={flexRow:Kb,spaceBetween:Db,alignItemsToBaseline:Pb,alignItemsToFlexEnd:Fb,justifyItemsToFlexEnd:Mb,wrap:Gb};On.bind(Bb);const jb="_flexContainer_1dk1o_1",wb="_fluid_1dk1o_6",Hb="_fullHeight_1dk1o_9",Vb="_flexWrap_1dk1o_17",Ub={flexContainer:jb,fluid:wb,fullHeight:Hb,flexWrap:Vb};On.bind(Ub);ln(Yr);const qb="_row_1lxv9_1",xb="_harHover_1lxv9_4",Yb="_rowHeader_1lxv9_7",Cb="_grayHeader_1lxv9_12",$b="_rowContent_1lxv9_15",Jb="_selected_1lxv9_18",Wb="_bold_1lxv9_22",zb="_dashedBottomBorder_1lxv9_25",Xb="_solidBottomBorder_1lxv9_28",Zb="_apLeftBorder_1lxv9_31",Qb="_noBottomBorder_1lxv9_34",xk={row:qb,harHover:xb,rowHeader:Yb,grayHeader:Cb,rowContent:$b,selected:Jb,bold:Wb,dashedBottomBorder:zb,solidBottomBorder:Xb,apLeftBorder:Zb,noBottomBorder:Qb},eN=On.bind(xk),nN=(e,i,a)=>t=>{e&&t.button===0&&e(t,i,a)},Yk=e=>e.tagName==="TR"?e:Yk(e.parentElement),dg=(e,i)=>{const a=Yk(e.target),t=(i?a.nextSibling:a.previousSibling)||a;t&&(t.focus(),e.preventDefault())},rN=(e,i,a,t)=>s=>{s.key==="ArrowDown"?dg(s,!0):s.key==="ArrowUp"?dg(s,!1):i&&s.target.tagName!=="TD"&&(s.key==="Enter"||s.key===" ")?(i(s,a,t),s.preventDefault()):e&&i&&s.target.tagName!=="TD"&&s.key==="Shift"&&(i(s),s.preventDefault())},tN=e=>i=>{e&&i.target.tagName!=="TD"&&i.key==="Shift"&&(e(i),i.preventDefault())},aN=({id:e,model:i,isHeader:a=!1,hasGrayHeader:t=!1,onMouseDown:s,onKeyDown:l,children:d,noHover:g=!1,isSelected:E=!1,isBold:f=!1,isDashedBottomBorder:T=!1,isSolidBottomBorder:p=!1,isApLeftBorder:A=!1,className:D,useMultiselect:K=!1,hasNoBottomBorder:R=!1})=>Xe.jsx("tr",{className:eN(D,xk.row,{rowHeader:a,grayHeader:t,rowContent:!a&&!g,selected:E,harHover:!g,bold:f,dashedBottomBorder:T,solidBottomBorder:p,noBottomBorder:R,apLeftBorder:A}),onMouseDown:nN(s,e,i),onKeyDown:rN(K,l,e,i),onKeyUp:K?tN(l):void 0,tabIndex:0,children:d}),iN="_columnStyle_1f13u_1",Ck={columnStyle:iN},sN=On.bind(Ck),Hs=({children:e="",className:i,hidden:a=!1,colspanAll:t=!1})=>a?null:Xe.jsx("td",{className:sN(Ck.columnStyle,i),colSpan:t?100:void 0,children:e}),oN="_table_2cnpl_1",lN="_rowHover_2cnpl_25",uN={table:oN,rowHover:lN},dN=On.bind(uN),gN="EMPTY",kN=q.forwardRef(({headerTextCodes:e=[],headerColumnContent:i=[],classNameTable:a="",noHover:t=!1,hasGrayHeader:s=!1,children:l},d)=>Xe.jsxs("table",{ref:d,className:dN("table",{[a]:a,rowHover:!t}),children:[Xe.jsx("thead",{children:Xe.jsxs(aN,{isHeader:!0,noHover:t,hasGrayHeader:s,children:[e.map(g=>typeof g=="string"&&g.startsWith(gN)?Xe.jsx(Hs,{children:" "},g):Xe.jsx(Hs,{children:Xe.jsx(Ie,{id:g})},g)),i.map(g=>Xe.jsx(Hs,{children:g},g.key))]})}),Xe.jsx("tbody",{children:Array.isArray(l)?q.Children.map(l,g=>q.cloneElement(g,{noHover:t})):q.cloneElement(l,{noHover:t})})]}));kN.displayName="Table";const EN="_hidden_1pb4f_1",vN="_active_1pb4f_8",fN="_activeRow_1pb4f_15 _active_1pb4f_8",mN="_toggleIcon_1pb4f_19",TN="_colTopPadding_1pb4f_22",pN={hidden:EN,active:vN,activeRow:fN,toggleIcon:mN,colTopPadding:TN};On.bind(pN);ln(Yr);const hN="_fourPx_qda5k_1",cN="_eightPx_qda5k_4",AN="_sixteenPx_qda5k_7",yN="_twentyPx_qda5k_10",RN="_thirtyTwoPx_qda5k_13",_N="_fourtyPx_qda5k_16",bN={fourPx:hN,eightPx:cN,sixteenPx:AN,twentyPx:yN,thirtyTwoPx:RN,fourtyPx:_N};On.bind(bN);ln(Yr);const NN="_divider_1t980_1",SN="_dividerParagraf_1t980_8",IN="_leftPanel_1t980_11",ON="_rightPanel_1t980_14",LN={divider:NN,dividerParagraf:SN,leftPanel:IN,rightPanel:ON};On.bind(LN);const KN="_editedIcon_ulrjl_1",DN={editedIcon:KN};On.bind(DN);var li=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(li||{});li.BRUKERS_ANDEL;li.FRILANS;li.EGEN_NÆRING;var xo=(e=>(e.ARBEID_TYPE="ArbeidType",e.AVSLAGSARSAK="Avslagsårsak",e.VENT_AARSAK="Venteårsak",e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.KLAGE_AVVIST_AARSAK="KlageAvvistÅrsak",e.KLAGE_MEDHOLD_ARSAK="KlageMedholdÅrsak",e.KLAGE_HJEMMEL="KlageHjemmel",e.OMSORGSOVERTAKELSE_VILKAR_TYPE="OmsorgsovertakelseVilkårType",e.MEDLEMSKAP_MANUELL_VURDERING_TYPE="MedlemskapManuellVurderingType",e.VERGE_TYPE="VergeType",e.LANDKODER="Landkoder",e.MORS_AKTIVITET="MorsAktivitet",e.VIRKSOMHET_TYPE="VirksomhetType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.PERSONSTATUS_TYPE="PersonstatusType",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.FORELDRE_TYPE="ForeldreType",e.FAMILIE_HENDELSE_TYPE="FamilieHendelseType",e.INNSYN_RESULTAT_TYPE="InnsynResultatType",e.BEHANDLING_TYPE="BehandlingType",e.OPPHOLD_ARSAK="OppholdÅrsak",e.UTSETTELSE_AARSAK_TYPE="UtsettelseÅrsak",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.UTTAK_PERIODE_TYPE="UttakPeriodeType",e.REVURDERING_VARSLING_ÅRSAK="RevurderingVarslingÅrsak",e.MANUELL_BEHANDLING_AARSAK="ManuellBehandlingÅrsak",e.PERIODE_RESULTAT_AARSAK="PeriodeResultatÅrsak",e.INNTEKTSKATEGORI="Inntektskategori",e.BEREGNINGSGRUNNLAG_ANDELTYPER="BeregningsgrunnlagAndeltype",e.AKTIVITET_STATUS="AktivitetStatus",e.ARBEIDSKATEGORI="Arbeidskategori",e.FAGSYSTEM="Fagsystem",e.REGION="Region",e.SIVILSTAND_TYPE="SivilstandType",e.FAKTA_OM_BEREGNING_TILFELLE="FaktaOmBeregningTilfelle",e.GRADERING_AVSLAG_AARSAK="GraderingAvslagÅrsak",e.SKJERMLENKE_TYPE="SkjermlenkeType",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.ARBEIDSFORHOLD_HANDLING_TYPE="ArbeidsforholdHandlingType",e.HISTORIKK_OPPLYSNING_TYPE="HistorikkOpplysningType",e.HISTORIKK_ENDRET_FELT_TYPE="HistorikkEndretFeltType",e.HISTORIKKINNSLAG_TYPE="HistorikkinnslagType",e.HISTORIKK_AKTOER="HistorikkAktør",e.BEHANDLING_STATUS="BehandlingStatus",e.FAR_SOEKER_TYPE="FarSøkerType",e.MEDLEMSKAP_DEKNING="MedlemskapDekningType",e.MEDLEMSKAP_TYPE="MedlemskapType",e.STOENADSKONTOTYPE="StønadskontoType",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.UTTAK_ARBEID_TYPE="UttakArbeidType",e.UTTAK_UTSETTELSE_TYPE="UttakUtsettelseType",e.VILKAR_TYPE="VilkårType",e.AKTSOMHET="Aktsomhet",e.VURDERING="AnnenVurdering",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.PERMISJONSBESKRIVELSE_TYPE="PermisjonsbeskrivelseType",e.VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG="VurderArbeidsforholdHistorikkinnslag",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.VURDER_AARSAK="VurderÅrsak",e.ANKE_OMGJOER_AARSAK="AnkeOmgjørÅrsak",e.AKTIVITETSKRAV_AVKLARING="KontrollerAktivitetskravAvklaring",e.OPPHOLDSTILLATELSE_TYPE="OppholdstillatelseType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e.FORDELING_PERIODE_KILDE="FordelingPeriodeKilde",e.RELASJONSROLLE_TYPE="RelasjonsRolleType",e.FAGSAK_MARKERING="FagsakMarkering",e.ADRESSE_TYPE="AdresseType",e.NATURAL_YTELSE_TYPE="NaturalYtelseType",e))(xo||{});const PN=(e,i,a,t)=>{let s=e[i];if(!s||s.length===0)return"";const l=s.find(d=>d.kode===a);return l?l.navn:""},hr=({tittel:e,children:i})=>G.jsxs(vt,{children:[G.jsx(wo,{size:"medium",children:e}),i]});hr.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const $k=({arbeidsgiverOpplysningerPerId:e,arbeidsgiverIdent:i})=>{var t;const a=Jn();return G.jsxs(hr,{tittel:a.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[G.jsxs("span",{children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),":"," ",((t=e[i])==null?void 0:t.navn)??"-"]}),G.jsxs("span",{children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",i]})]})};$k.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const Jk=({inntektsmelding:e,behandling:i,alleBehandlinger:a,alleKodeverk:t})=>{const s=Jn(),l=e.tilknyttedeBehandlingIder.includes(i.uuid),d=a.filter(f=>e.tilknyttedeBehandlingIder.includes(f.uuid)),g=(()=>{const f=d.length;return l&&f>1?G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):l?G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):f===0?G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),E=[...d].sort((f,T)=>new Date(f.opprettet).getTime()-new Date(T.opprettet).getTime());return G.jsxs(hr,{tittel:s.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[g,G.jsx(lo,{children:E.map(f=>{var T;return G.jsx(lo.Item,{children:G.jsxs(vt,{children:[G.jsx("span",{children:(T=t.BehandlingType.find(({kode:p})=>p===f.type))==null?void 0:T.navn}),G.jsxs("span",{children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",G.jsx(ai,{dateTimeString:f.opprettet,separator:"kl"})]}),f.avsluttet?G.jsxs("span",{children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",G.jsx(ai,{dateTimeString:f.avsluttet,separator:"kl"})]}):null]})},f.uuid)})})]})};Jk.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};function FN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gg={exports:{}},xt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function MN(){if(kg)return xt;kg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function a(t,s,l){var d=null;if(l!==void 0&&(d=""+l),s.key!==void 0&&(d=""+s.key),"key"in s){l={};for(var g in s)g!=="key"&&(l[g]=s[g])}else l=s;return s=l.ref,{$$typeof:e,type:t,key:d,ref:s!==void 0?s:null,props:l}}return xt.Fragment=i,xt.jsx=a,xt.jsxs=a,xt}var Eg;function GN(){return Eg||(Eg=1,gg.exports=MN()),gg.exports}GN();var mo={exports:{}},BN=mo.exports,vg;function jN(){return vg||(vg=1,function(e,i){(function(a,t){e.exports=t()})(BN,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,l=/\d\d/,d=/\d\d?/,g=/\d*[^-_:/,()\s\d]+/,E={},f=function(S){return(S=+S)+(S>68?1900:2e3)},T=function(S){return function(P){this[S]=+P}},p=[/[+-]\d\d:?(\d\d)?|Z/,function(S){(this.zone||(this.zone={})).offset=function(P){if(!P||P==="Z")return 0;var H=P.match(/([+-]|\d\d)/g),I=60*H[1]+(+H[2]||0);return I===0?0:H[0]==="+"?-I:I}(S)}],A=function(S){var P=E[S];return P&&(P.indexOf?P:P.s.concat(P.f))},D=function(S,P){var H,I=E.meridiem;if(I){for(var Z=1;Z<=24;Z+=1)if(S.indexOf(I(Z,0,P))>-1){H=Z>12;break}}else H=S===(P?"pm":"PM");return H},K={A:[g,function(S){this.afternoon=D(S,!1)}],a:[g,function(S){this.afternoon=D(S,!0)}],Q:[s,function(S){this.month=3*(S-1)+1}],S:[s,function(S){this.milliseconds=100*+S}],SS:[l,function(S){this.milliseconds=10*+S}],SSS:[/\d{3}/,function(S){this.milliseconds=+S}],s:[d,T("seconds")],ss:[d,T("seconds")],m:[d,T("minutes")],mm:[d,T("minutes")],H:[d,T("hours")],h:[d,T("hours")],HH:[d,T("hours")],hh:[d,T("hours")],D:[d,T("day")],DD:[l,T("day")],Do:[g,function(S){var P=E.ordinal,H=S.match(/\d+/);if(this.day=H[0],P)for(var I=1;I<=31;I+=1)P(I).replace(/\[|\]/g,"")===S&&(this.day=I)}],w:[d,T("week")],ww:[l,T("week")],M:[d,T("month")],MM:[l,T("month")],MMM:[g,function(S){var P=A("months"),H=(A("monthsShort")||P.map(function(I){return I.slice(0,3)})).indexOf(S)+1;if(H<1)throw new Error;this.month=H%12||H}],MMMM:[g,function(S){var P=A("months").indexOf(S)+1;if(P<1)throw new Error;this.month=P%12||P}],Y:[/[+-]?\d+/,T("year")],YY:[l,function(S){this.year=f(S)}],YYYY:[/\d{4}/,T("year")],Z:p,ZZ:p};function R(S){var P,H;P=S,H=E&&E.formats;for(var I=(S=P.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(W,x,z){var ie=z&&z.toUpperCase();return x||H[z]||a[z]||H[ie].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(C,$,Y){return $||Y.slice(1)})})).match(t),Z=I.length,y=0;y<Z;y+=1){var w=I[y],O=K[w],N=O&&O[0],J=O&&O[1];I[y]=J?{regex:N,parser:J}:w.replace(/^\[|\]$/g,"")}return function(W){for(var x={},z=0,ie=0;z<Z;z+=1){var C=I[z];if(typeof C=="string")ie+=C.length;else{var $=C.regex,Y=C.parser,Q=W.slice(ie),V=$.exec(Q)[0];Y.call(x,V),W=W.replace(V,"")}}return function(re){var ae=re.afternoon;if(ae!==void 0){var le=re.hours;ae?le<12&&(re.hours+=12):le===12&&(re.hours=0),delete re.afternoon}}(x),x}}return function(S,P,H){H.p.customParseFormat=!0,S&&S.parseTwoDigitYear&&(f=S.parseTwoDigitYear);var I=P.prototype,Z=I.parse;I.parse=function(y){var w=y.date,O=y.utc,N=y.args;this.$u=O;var J=N[1];if(typeof J=="string"){var W=N[2]===!0,x=N[3]===!0,z=W||x,ie=N[2];x&&(ie=N[2]),E=this.$locale(),!W&&ie&&(E=H.Ls[ie]),this.$d=function(Q,V,re,ae){try{if(["x","X"].indexOf(V)>-1)return new Date((V==="X"?1e3:1)*Q);var le=R(V)(Q),Ke=le.year,Fe=le.month,$e=le.day,xe=le.hours,hn=le.minutes,Hn=le.seconds,cn=le.milliseconds,tn=le.zone,Je=le.week,en=new Date,vn=$e||(Ke||Fe?1:en.getDate()),Vn=Ke||en.getFullYear(),an=0;Ke&&!Fe||(an=Fe>0?Fe-1:en.getMonth());var Wn,ct=xe||0,An=hn||0,$r=Hn||0,At=cn||0;return tn?new Date(Date.UTC(Vn,an,vn,ct,An,$r,At+60*tn.offset*1e3)):re?new Date(Date.UTC(Vn,an,vn,ct,An,$r,At)):(Wn=new Date(Vn,an,vn,ct,An,$r,At),Je&&(Wn=ae(Wn).week(Je).toDate()),Wn)}catch{return new Date("")}}(w,J,O,H),this.init(),ie&&ie!==!0&&(this.$L=this.locale(ie).$L),z&&w!=this.format(J)&&(this.$d=new Date("")),E={}}else if(J instanceof Array)for(var C=J.length,$=1;$<=C;$+=1){N[1]=J[$-1];var Y=H.apply(this,N);if(Y.isValid()){this.$d=Y.$d,this.$L=Y.$L,this.init();break}$===C&&(this.$d=new Date(""))}else Z.call(this,y)}}})}(mo)),mo.exports}var wN=jN();const HN=FN(wN);Or.extend(HN);const VN="Dato må være før eller lik {limit}",UN="Dato må være etter eller lik {limit}",qN="Perioder kan ikke overlappe i tid",xN="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",YN="Dato må være lik {value}",CN="Dato må skrives slik: dd.mm.åååå",$N="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",JN="Tallet kan ikke inneholde mer enn to desimaler",WN="Tallet kan ikke ha desimaler",zN="Feltet kan kun inneholde tall",XN="Ugyldig fødselsnummer",ZN="Feltet må være et fødselsnummer (11 siffer)",QN="Ugyldig organisasjonsnummer.",eS="Ugyldig organisasjonsnummer eller fødselsnummer",nS="Startdato må være før eller lik sluttdato",rS="Periode er utenfor opptjeningsperioden",tS="Ugyldig saksnummer eller fødselsnummer",aS="Feltet inneholder ugyldige tegn: {text}",iS="Feltet inneholder en ugyldig verdi: {value}",sS="Feltet kan ikke inneholde mellomrom",oS="Feltet må fylles ut",lS="Du kan skrive maksimalt {length} tegn",uS="Du må skrive minst {length} tegn",dS="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",gS="Feltet må være mindre eller lik {length}",kS="Feltet må være større eller lik {length}",ES="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",vS={DateNotBeforeOrEqual:VN,DateNotAfterOrEqual:UN,DateRangesOverlapping:qN,DateRangesOverlappingPeriodTypes:xN,DatesNotEqual:YN,InvalidDate:CN,InvalidDatesInPeriod:$N,InvalidDecimal:JN,InvalidInteger:WN,InvalidNumber:zN,InvalidFodselsnr:XN,InvalidFodselsnrFormat:ZN,InvalidOrgnr:QN,InvalidOrgnrOrFodselsnr:eS,InvalidPeriod:nS,InvalidPeriodRange:rS,InvalidSaksnrOrFodselsnrFormat:tS,InvalidText:aS,InvalidValue:iS,IllegalWhiteSpace:sS,IsRequired:oS,MaxLength:lS,MinLength:uS,MaxLengthOrFodselsnr:dS,MaxValue:gS,MinValue:kS,SammeFodselsnrSomSoker:ES};ln(vS);function Wk(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var To={exports:{}},fS=To.exports,fg;function mS(){return fg||(fg=1,function(e,i){(function(a,t){e.exports=t()})(fS,function(){return function(a,t){t.prototype.isSameOrAfter=function(s,l){return this.isSame(s,l)||this.isAfter(s,l)}}})}(To)),To.exports}var TS=mS();const pS=Wk(TS);var po={exports:{}},hS=po.exports,mg;function cS(){return mg||(mg=1,function(e,i){(function(a,t){e.exports=t()})(hS,function(){return function(a,t){t.prototype.isSameOrBefore=function(s,l){return this.isSame(s,l)||this.isBefore(s,l)}}})}(po)),po.exports}var AS=cS();const yS=Wk(AS);Or.extend(pS);Or.extend(yS);const ta={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"};ln(ta);ln(ta);ln(ta);const RS=(e,i)=>{const a=new Date(e.tom??ft),t=new Date(i.tom??ft);if(a>t)return-1;if(a<t)return 1;if(e.fom&&!i.fom)return-1;if(!e.fom&&i.fom)return 1;if(e.fom&&i.fom){const s=new Date(e.fom),l=new Date(i.fom);if(s>l)return-1;if(s<l)return 1}return 0};var $t={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var _S=$t.exports,Tg;function bS(){return Tg||(Tg=1,function(e,i){(function(){var a,t="4.17.21",s=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",d="Expected a function",g="Invalid `variable` option passed into `_.template`",E="__lodash_hash_undefined__",f=500,T="__lodash_placeholder__",p=1,A=2,D=4,K=1,R=2,S=1,P=2,H=4,I=8,Z=16,y=32,w=64,O=128,N=256,J=512,W=30,x="...",z=800,ie=16,C=1,$=2,Y=3,Q=1/0,V=9007199254740991,re=17976931348623157e292,ae=NaN,le=4294967295,Ke=le-1,Fe=le>>>1,$e=[["ary",O],["bind",S],["bindKey",P],["curry",I],["curryRight",Z],["flip",J],["partial",y],["partialRight",w],["rearg",N]],xe="[object Arguments]",hn="[object Array]",Hn="[object AsyncFunction]",cn="[object Boolean]",tn="[object Date]",Je="[object DOMException]",en="[object Error]",vn="[object Function]",Vn="[object GeneratorFunction]",an="[object Map]",Wn="[object Number]",ct="[object Null]",An="[object Object]",$r="[object Promise]",At="[object Proxy]",yt="[object RegExp]",Un="[object Set]",Rt="[object String]",oa="[object Symbol]",PE="[object Undefined]",_t="[object WeakMap]",FE="[object WeakSet]",bt="[object ArrayBuffer]",Jr="[object DataView]",gi="[object Float32Array]",ki="[object Float64Array]",Ei="[object Int8Array]",vi="[object Int16Array]",fi="[object Int32Array]",mi="[object Uint8Array]",Ti="[object Uint8ClampedArray]",pi="[object Uint16Array]",hi="[object Uint32Array]",ME=/\b__p \+= '';/g,GE=/\b(__p \+=) '' \+/g,BE=/(__e\(.*?\)|\b__t\)) \+\n'';/g,zo=/&(?:amp|lt|gt|quot|#39);/g,Xo=/[&<>"']/g,jE=RegExp(zo.source),wE=RegExp(Xo.source),HE=/<%-([\s\S]+?)%>/g,VE=/<%([\s\S]+?)%>/g,Zo=/<%=([\s\S]+?)%>/g,UE=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,qE=/^\w*$/,xE=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ci=/[\\^$.*+?()[\]{}|]/g,YE=RegExp(ci.source),Ai=/^\s+/,CE=/\s/,$E=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,JE=/\{\n\/\* \[wrapped with (.+)\] \*/,WE=/,? & /,zE=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,XE=/[()=,{}\[\]\/\s]/,ZE=/\\(\\)?/g,QE=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Qo=/\w*$/,ev=/^[-+]0x[0-9a-f]+$/i,nv=/^0b[01]+$/i,rv=/^\[object .+?Constructor\]$/,tv=/^0o[0-7]+$/i,av=/^(?:0|[1-9]\d*)$/,iv=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,la=/($^)/,sv=/['\n\r\u2028\u2029\\]/g,ua="\\ud800-\\udfff",ov="\\u0300-\\u036f",lv="\\ufe20-\\ufe2f",uv="\\u20d0-\\u20ff",el=ov+lv+uv,nl="\\u2700-\\u27bf",rl="a-z\\xdf-\\xf6\\xf8-\\xff",dv="\\xac\\xb1\\xd7\\xf7",gv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",kv="\\u2000-\\u206f",Ev=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",tl="A-Z\\xc0-\\xd6\\xd8-\\xde",al="\\ufe0e\\ufe0f",il=dv+gv+kv+Ev,yi="['’]",vv="["+ua+"]",sl="["+il+"]",da="["+el+"]",ol="\\d+",fv="["+nl+"]",ll="["+rl+"]",ul="[^"+ua+il+ol+nl+rl+tl+"]",Ri="\\ud83c[\\udffb-\\udfff]",mv="(?:"+da+"|"+Ri+")",dl="[^"+ua+"]",_i="(?:\\ud83c[\\udde6-\\uddff]){2}",bi="[\\ud800-\\udbff][\\udc00-\\udfff]",Wr="["+tl+"]",gl="\\u200d",kl="(?:"+ll+"|"+ul+")",Tv="(?:"+Wr+"|"+ul+")",El="(?:"+yi+"(?:d|ll|m|re|s|t|ve))?",vl="(?:"+yi+"(?:D|LL|M|RE|S|T|VE))?",fl=mv+"?",ml="["+al+"]?",pv="(?:"+gl+"(?:"+[dl,_i,bi].join("|")+")"+ml+fl+")*",hv="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",cv="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Tl=ml+fl+pv,Av="(?:"+[fv,_i,bi].join("|")+")"+Tl,yv="(?:"+[dl+da+"?",da,_i,bi,vv].join("|")+")",Rv=RegExp(yi,"g"),_v=RegExp(da,"g"),Ni=RegExp(Ri+"(?="+Ri+")|"+yv+Tl,"g"),bv=RegExp([Wr+"?"+ll+"+"+El+"(?="+[sl,Wr,"$"].join("|")+")",Tv+"+"+vl+"(?="+[sl,Wr+kl,"$"].join("|")+")",Wr+"?"+kl+"+"+El,Wr+"+"+vl,cv,hv,ol,Av].join("|"),"g"),Nv=RegExp("["+gl+ua+el+al+"]"),Sv=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Iv=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Ov=-1,Me={};Me[gi]=Me[ki]=Me[Ei]=Me[vi]=Me[fi]=Me[mi]=Me[Ti]=Me[pi]=Me[hi]=!0,Me[xe]=Me[hn]=Me[bt]=Me[cn]=Me[Jr]=Me[tn]=Me[en]=Me[vn]=Me[an]=Me[Wn]=Me[An]=Me[yt]=Me[Un]=Me[Rt]=Me[_t]=!1;var Pe={};Pe[xe]=Pe[hn]=Pe[bt]=Pe[Jr]=Pe[cn]=Pe[tn]=Pe[gi]=Pe[ki]=Pe[Ei]=Pe[vi]=Pe[fi]=Pe[an]=Pe[Wn]=Pe[An]=Pe[yt]=Pe[Un]=Pe[Rt]=Pe[oa]=Pe[mi]=Pe[Ti]=Pe[pi]=Pe[hi]=!0,Pe[en]=Pe[vn]=Pe[_t]=!1;var Lv={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Kv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Dv={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Pv={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Fv=parseFloat,Mv=parseInt,pl=typeof za=="object"&&za&&za.Object===Object&&za,Gv=typeof self=="object"&&self&&self.Object===Object&&self,nn=pl||Gv||Function("return this")(),Si=i&&!i.nodeType&&i,Dr=Si&&!0&&e&&!e.nodeType&&e,hl=Dr&&Dr.exports===Si,Ii=hl&&pl.process,Ln=function(){try{var _=Dr&&Dr.require&&Dr.require("util").types;return _||Ii&&Ii.binding&&Ii.binding("util")}catch{}}(),cl=Ln&&Ln.isArrayBuffer,Al=Ln&&Ln.isDate,yl=Ln&&Ln.isMap,Rl=Ln&&Ln.isRegExp,_l=Ln&&Ln.isSet,bl=Ln&&Ln.isTypedArray;function yn(_,M,L){switch(L.length){case 0:return _.call(M);case 1:return _.call(M,L[0]);case 2:return _.call(M,L[0],L[1]);case 3:return _.call(M,L[0],L[1],L[2])}return _.apply(M,L)}function Bv(_,M,L,ee){for(var ge=-1,Re=_==null?0:_.length;++ge<Re;){var We=_[ge];M(ee,We,L(We),_)}return ee}function Kn(_,M){for(var L=-1,ee=_==null?0:_.length;++L<ee&&M(_[L],L,_)!==!1;);return _}function jv(_,M){for(var L=_==null?0:_.length;L--&&M(_[L],L,_)!==!1;);return _}function Nl(_,M){for(var L=-1,ee=_==null?0:_.length;++L<ee;)if(!M(_[L],L,_))return!1;return!0}function cr(_,M){for(var L=-1,ee=_==null?0:_.length,ge=0,Re=[];++L<ee;){var We=_[L];M(We,L,_)&&(Re[ge++]=We)}return Re}function ga(_,M){var L=_==null?0:_.length;return!!L&&zr(_,M,0)>-1}function Oi(_,M,L){for(var ee=-1,ge=_==null?0:_.length;++ee<ge;)if(L(M,_[ee]))return!0;return!1}function je(_,M){for(var L=-1,ee=_==null?0:_.length,ge=Array(ee);++L<ee;)ge[L]=M(_[L],L,_);return ge}function Ar(_,M){for(var L=-1,ee=M.length,ge=_.length;++L<ee;)_[ge+L]=M[L];return _}function Li(_,M,L,ee){var ge=-1,Re=_==null?0:_.length;for(ee&&Re&&(L=_[++ge]);++ge<Re;)L=M(L,_[ge],ge,_);return L}function wv(_,M,L,ee){var ge=_==null?0:_.length;for(ee&&ge&&(L=_[--ge]);ge--;)L=M(L,_[ge],ge,_);return L}function Ki(_,M){for(var L=-1,ee=_==null?0:_.length;++L<ee;)if(M(_[L],L,_))return!0;return!1}var Hv=Di("length");function Vv(_){return _.split("")}function Uv(_){return _.match(zE)||[]}function Sl(_,M,L){var ee;return L(_,function(ge,Re,We){if(M(ge,Re,We))return ee=Re,!1}),ee}function ka(_,M,L,ee){for(var ge=_.length,Re=L+(ee?1:-1);ee?Re--:++Re<ge;)if(M(_[Re],Re,_))return Re;return-1}function zr(_,M,L){return M===M?ef(_,M,L):ka(_,Il,L)}function qv(_,M,L,ee){for(var ge=L-1,Re=_.length;++ge<Re;)if(ee(_[ge],M))return ge;return-1}function Il(_){return _!==_}function Ol(_,M){var L=_==null?0:_.length;return L?Fi(_,M)/L:ae}function Di(_){return function(M){return M==null?a:M[_]}}function Pi(_){return function(M){return _==null?a:_[M]}}function Ll(_,M,L,ee,ge){return ge(_,function(Re,We,De){L=ee?(ee=!1,Re):M(L,Re,We,De)}),L}function xv(_,M){var L=_.length;for(_.sort(M);L--;)_[L]=_[L].value;return _}function Fi(_,M){for(var L,ee=-1,ge=_.length;++ee<ge;){var Re=M(_[ee]);Re!==a&&(L=L===a?Re:L+Re)}return L}function Mi(_,M){for(var L=-1,ee=Array(_);++L<_;)ee[L]=M(L);return ee}function Yv(_,M){return je(M,function(L){return[L,_[L]]})}function Kl(_){return _&&_.slice(0,Ml(_)+1).replace(Ai,"")}function Rn(_){return function(M){return _(M)}}function Gi(_,M){return je(M,function(L){return _[L]})}function Nt(_,M){return _.has(M)}function Dl(_,M){for(var L=-1,ee=_.length;++L<ee&&zr(M,_[L],0)>-1;);return L}function Pl(_,M){for(var L=_.length;L--&&zr(M,_[L],0)>-1;);return L}function Cv(_,M){for(var L=_.length,ee=0;L--;)_[L]===M&&++ee;return ee}var $v=Pi(Lv),Jv=Pi(Kv);function Wv(_){return"\\"+Pv[_]}function zv(_,M){return _==null?a:_[M]}function Xr(_){return Nv.test(_)}function Xv(_){return Sv.test(_)}function Zv(_){for(var M,L=[];!(M=_.next()).done;)L.push(M.value);return L}function Bi(_){var M=-1,L=Array(_.size);return _.forEach(function(ee,ge){L[++M]=[ge,ee]}),L}function Fl(_,M){return function(L){return _(M(L))}}function yr(_,M){for(var L=-1,ee=_.length,ge=0,Re=[];++L<ee;){var We=_[L];(We===M||We===T)&&(_[L]=T,Re[ge++]=L)}return Re}function Ea(_){var M=-1,L=Array(_.size);return _.forEach(function(ee){L[++M]=ee}),L}function Qv(_){var M=-1,L=Array(_.size);return _.forEach(function(ee){L[++M]=[ee,ee]}),L}function ef(_,M,L){for(var ee=L-1,ge=_.length;++ee<ge;)if(_[ee]===M)return ee;return-1}function nf(_,M,L){for(var ee=L+1;ee--;)if(_[ee]===M)return ee;return ee}function Zr(_){return Xr(_)?tf(_):Hv(_)}function qn(_){return Xr(_)?af(_):Vv(_)}function Ml(_){for(var M=_.length;M--&&CE.test(_.charAt(M)););return M}var rf=Pi(Dv);function tf(_){for(var M=Ni.lastIndex=0;Ni.test(_);)++M;return M}function af(_){return _.match(Ni)||[]}function sf(_){return _.match(bv)||[]}var of=function _(M){M=M==null?nn:Qr.defaults(nn.Object(),M,Qr.pick(nn,Iv));var L=M.Array,ee=M.Date,ge=M.Error,Re=M.Function,We=M.Math,De=M.Object,ji=M.RegExp,lf=M.String,Dn=M.TypeError,va=L.prototype,uf=Re.prototype,et=De.prototype,fa=M["__core-js_shared__"],ma=uf.toString,Oe=et.hasOwnProperty,df=0,Gl=function(){var n=/[^.]+$/.exec(fa&&fa.keys&&fa.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Ta=et.toString,gf=ma.call(De),kf=nn._,Ef=ji("^"+ma.call(Oe).replace(ci,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),pa=hl?M.Buffer:a,Rr=M.Symbol,ha=M.Uint8Array,Bl=pa?pa.allocUnsafe:a,ca=Fl(De.getPrototypeOf,De),jl=De.create,wl=et.propertyIsEnumerable,Aa=va.splice,Hl=Rr?Rr.isConcatSpreadable:a,St=Rr?Rr.iterator:a,Pr=Rr?Rr.toStringTag:a,ya=function(){try{var n=jr(De,"defineProperty");return n({},"",{}),n}catch{}}(),vf=M.clearTimeout!==nn.clearTimeout&&M.clearTimeout,ff=ee&&ee.now!==nn.Date.now&&ee.now,mf=M.setTimeout!==nn.setTimeout&&M.setTimeout,Ra=We.ceil,_a=We.floor,wi=De.getOwnPropertySymbols,Tf=pa?pa.isBuffer:a,Vl=M.isFinite,pf=va.join,hf=Fl(De.keys,De),ze=We.max,sn=We.min,cf=ee.now,Af=M.parseInt,Ul=We.random,yf=va.reverse,Hi=jr(M,"DataView"),It=jr(M,"Map"),Vi=jr(M,"Promise"),nt=jr(M,"Set"),Ot=jr(M,"WeakMap"),Lt=jr(De,"create"),ba=Ot&&new Ot,rt={},Rf=wr(Hi),_f=wr(It),bf=wr(Vi),Nf=wr(nt),Sf=wr(Ot),Na=Rr?Rr.prototype:a,Kt=Na?Na.valueOf:a,ql=Na?Na.toString:a;function v(n){if(Ue(n)&&!ke(n)&&!(n instanceof Te)){if(n instanceof Pn)return n;if(Oe.call(n,"__wrapped__"))return xu(n)}return new Pn(n)}var tt=function(){function n(){}return function(r){if(!He(r))return{};if(jl)return jl(r);n.prototype=r;var o=new n;return n.prototype=a,o}}();function Sa(){}function Pn(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=a}v.templateSettings={escape:HE,evaluate:VE,interpolate:Zo,variable:"",imports:{_:v}},v.prototype=Sa.prototype,v.prototype.constructor=v,Pn.prototype=tt(Sa.prototype),Pn.prototype.constructor=Pn;function Te(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=le,this.__views__=[]}function If(){var n=new Te(this.__wrapped__);return n.__actions__=fn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=fn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=fn(this.__views__),n}function Of(){if(this.__filtered__){var n=new Te(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Lf(){var n=this.__wrapped__.value(),r=this.__dir__,o=ke(n),u=r<0,k=o?n.length:0,m=Um(0,k,this.__views__),h=m.start,c=m.end,b=c-h,B=u?c:h-1,j=this.__iteratees__,U=j.length,X=0,te=sn(b,this.__takeCount__);if(!o||!u&&k==b&&te==b)return Eu(n,this.__actions__);var ue=[];e:for(;b--&&X<te;){B+=r;for(var ve=-1,de=n[B];++ve<U;){var me=j[ve],pe=me.iteratee,Nn=me.type,gn=pe(de);if(Nn==$)de=gn;else if(!gn){if(Nn==C)continue e;break e}}ue[X++]=de}return ue}Te.prototype=tt(Sa.prototype),Te.prototype.constructor=Te;function Fr(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var u=n[r];this.set(u[0],u[1])}}function Kf(){this.__data__=Lt?Lt(null):{},this.size=0}function Df(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function Pf(n){var r=this.__data__;if(Lt){var o=r[n];return o===E?a:o}return Oe.call(r,n)?r[n]:a}function Ff(n){var r=this.__data__;return Lt?r[n]!==a:Oe.call(r,n)}function Mf(n,r){var o=this.__data__;return this.size+=this.has(n)?0:1,o[n]=Lt&&r===a?E:r,this}Fr.prototype.clear=Kf,Fr.prototype.delete=Df,Fr.prototype.get=Pf,Fr.prototype.has=Ff,Fr.prototype.set=Mf;function or(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var u=n[r];this.set(u[0],u[1])}}function Gf(){this.__data__=[],this.size=0}function Bf(n){var r=this.__data__,o=Ia(r,n);if(o<0)return!1;var u=r.length-1;return o==u?r.pop():Aa.call(r,o,1),--this.size,!0}function jf(n){var r=this.__data__,o=Ia(r,n);return o<0?a:r[o][1]}function wf(n){return Ia(this.__data__,n)>-1}function Hf(n,r){var o=this.__data__,u=Ia(o,n);return u<0?(++this.size,o.push([n,r])):o[u][1]=r,this}or.prototype.clear=Gf,or.prototype.delete=Bf,or.prototype.get=jf,or.prototype.has=wf,or.prototype.set=Hf;function lr(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var u=n[r];this.set(u[0],u[1])}}function Vf(){this.size=0,this.__data__={hash:new Fr,map:new(It||or),string:new Fr}}function Uf(n){var r=Ha(this,n).delete(n);return this.size-=r?1:0,r}function qf(n){return Ha(this,n).get(n)}function xf(n){return Ha(this,n).has(n)}function Yf(n,r){var o=Ha(this,n),u=o.size;return o.set(n,r),this.size+=o.size==u?0:1,this}lr.prototype.clear=Vf,lr.prototype.delete=Uf,lr.prototype.get=qf,lr.prototype.has=xf,lr.prototype.set=Yf;function Mr(n){var r=-1,o=n==null?0:n.length;for(this.__data__=new lr;++r<o;)this.add(n[r])}function Cf(n){return this.__data__.set(n,E),this}function $f(n){return this.__data__.has(n)}Mr.prototype.add=Mr.prototype.push=Cf,Mr.prototype.has=$f;function xn(n){var r=this.__data__=new or(n);this.size=r.size}function Jf(){this.__data__=new or,this.size=0}function Wf(n){var r=this.__data__,o=r.delete(n);return this.size=r.size,o}function zf(n){return this.__data__.get(n)}function Xf(n){return this.__data__.has(n)}function Zf(n,r){var o=this.__data__;if(o instanceof or){var u=o.__data__;if(!It||u.length<s-1)return u.push([n,r]),this.size=++o.size,this;o=this.__data__=new lr(u)}return o.set(n,r),this.size=o.size,this}xn.prototype.clear=Jf,xn.prototype.delete=Wf,xn.prototype.get=zf,xn.prototype.has=Xf,xn.prototype.set=Zf;function xl(n,r){var o=ke(n),u=!o&&Hr(n),k=!o&&!u&&Ir(n),m=!o&&!u&&!k&&ot(n),h=o||u||k||m,c=h?Mi(n.length,lf):[],b=c.length;for(var B in n)(r||Oe.call(n,B))&&!(h&&(B=="length"||k&&(B=="offset"||B=="parent")||m&&(B=="buffer"||B=="byteLength"||B=="byteOffset")||kr(B,b)))&&c.push(B);return c}function Yl(n){var r=n.length;return r?n[Zi(0,r-1)]:a}function Qf(n,r){return Va(fn(n),Gr(r,0,n.length))}function em(n){return Va(fn(n))}function Ui(n,r,o){(o!==a&&!Yn(n[r],o)||o===a&&!(r in n))&&ur(n,r,o)}function Dt(n,r,o){var u=n[r];(!(Oe.call(n,r)&&Yn(u,o))||o===a&&!(r in n))&&ur(n,r,o)}function Ia(n,r){for(var o=n.length;o--;)if(Yn(n[o][0],r))return o;return-1}function nm(n,r,o,u){return _r(n,function(k,m,h){r(u,k,o(k),h)}),u}function Cl(n,r){return n&&Xn(r,Ze(r),n)}function rm(n,r){return n&&Xn(r,Tn(r),n)}function ur(n,r,o){r=="__proto__"&&ya?ya(n,r,{configurable:!0,enumerable:!0,value:o,writable:!0}):n[r]=o}function qi(n,r){for(var o=-1,u=r.length,k=L(u),m=n==null;++o<u;)k[o]=m?a:Rs(n,r[o]);return k}function Gr(n,r,o){return n===n&&(o!==a&&(n=n<=o?n:o),r!==a&&(n=n>=r?n:r)),n}function Fn(n,r,o,u,k,m){var h,c=r&p,b=r&A,B=r&D;if(o&&(h=k?o(n,u,k,m):o(n)),h!==a)return h;if(!He(n))return n;var j=ke(n);if(j){if(h=xm(n),!c)return fn(n,h)}else{var U=on(n),X=U==vn||U==Vn;if(Ir(n))return mu(n,c);if(U==An||U==xe||X&&!k){if(h=b||X?{}:Mu(n),!c)return b?Pm(n,rm(h,n)):Dm(n,Cl(h,n))}else{if(!Pe[U])return k?n:{};h=Ym(n,U,c)}}m||(m=new xn);var te=m.get(n);if(te)return te;m.set(n,h),dd(n)?n.forEach(function(de){h.add(Fn(de,r,o,de,n,m))}):ld(n)&&n.forEach(function(de,me){h.set(me,Fn(de,r,o,me,n,m))});var ue=B?b?us:ls:b?Tn:Ze,ve=j?a:ue(n);return Kn(ve||n,function(de,me){ve&&(me=de,de=n[me]),Dt(h,me,Fn(de,r,o,me,n,m))}),h}function tm(n){var r=Ze(n);return function(o){return $l(o,n,r)}}function $l(n,r,o){var u=o.length;if(n==null)return!u;for(n=De(n);u--;){var k=o[u],m=r[k],h=n[k];if(h===a&&!(k in n)||!m(h))return!1}return!0}function Jl(n,r,o){if(typeof n!="function")throw new Dn(d);return wt(function(){n.apply(a,o)},r)}function Pt(n,r,o,u){var k=-1,m=ga,h=!0,c=n.length,b=[],B=r.length;if(!c)return b;o&&(r=je(r,Rn(o))),u?(m=Oi,h=!1):r.length>=s&&(m=Nt,h=!1,r=new Mr(r));e:for(;++k<c;){var j=n[k],U=o==null?j:o(j);if(j=u||j!==0?j:0,h&&U===U){for(var X=B;X--;)if(r[X]===U)continue e;b.push(j)}else m(r,U,u)||b.push(j)}return b}var _r=Au(zn),Wl=Au(Yi,!0);function am(n,r){var o=!0;return _r(n,function(u,k,m){return o=!!r(u,k,m),o}),o}function Oa(n,r,o){for(var u=-1,k=n.length;++u<k;){var m=n[u],h=r(m);if(h!=null&&(c===a?h===h&&!bn(h):o(h,c)))var c=h,b=m}return b}function im(n,r,o,u){var k=n.length;for(o=Ee(o),o<0&&(o=-o>k?0:k+o),u=u===a||u>k?k:Ee(u),u<0&&(u+=k),u=o>u?0:kd(u);o<u;)n[o++]=r;return n}function zl(n,r){var o=[];return _r(n,function(u,k,m){r(u,k,m)&&o.push(u)}),o}function rn(n,r,o,u,k){var m=-1,h=n.length;for(o||(o=$m),k||(k=[]);++m<h;){var c=n[m];r>0&&o(c)?r>1?rn(c,r-1,o,u,k):Ar(k,c):u||(k[k.length]=c)}return k}var xi=yu(),Xl=yu(!0);function zn(n,r){return n&&xi(n,r,Ze)}function Yi(n,r){return n&&Xl(n,r,Ze)}function La(n,r){return cr(r,function(o){return Er(n[o])})}function Br(n,r){r=Nr(r,n);for(var o=0,u=r.length;n!=null&&o<u;)n=n[Zn(r[o++])];return o&&o==u?n:a}function Zl(n,r,o){var u=r(n);return ke(n)?u:Ar(u,o(n))}function un(n){return n==null?n===a?PE:ct:Pr&&Pr in De(n)?Vm(n):eT(n)}function Ci(n,r){return n>r}function sm(n,r){return n!=null&&Oe.call(n,r)}function om(n,r){return n!=null&&r in De(n)}function lm(n,r,o){return n>=sn(r,o)&&n<ze(r,o)}function $i(n,r,o){for(var u=o?Oi:ga,k=n[0].length,m=n.length,h=m,c=L(m),b=1/0,B=[];h--;){var j=n[h];h&&r&&(j=je(j,Rn(r))),b=sn(j.length,b),c[h]=!o&&(r||k>=120&&j.length>=120)?new Mr(h&&j):a}j=n[0];var U=-1,X=c[0];e:for(;++U<k&&B.length<b;){var te=j[U],ue=r?r(te):te;if(te=o||te!==0?te:0,!(X?Nt(X,ue):u(B,ue,o))){for(h=m;--h;){var ve=c[h];if(!(ve?Nt(ve,ue):u(n[h],ue,o)))continue e}X&&X.push(ue),B.push(te)}}return B}function um(n,r,o,u){return zn(n,function(k,m,h){r(u,o(k),m,h)}),u}function Ft(n,r,o){r=Nr(r,n),n=wu(n,r);var u=n==null?n:n[Zn(Gn(r))];return u==null?a:yn(u,n,o)}function Ql(n){return Ue(n)&&un(n)==xe}function dm(n){return Ue(n)&&un(n)==bt}function gm(n){return Ue(n)&&un(n)==tn}function Mt(n,r,o,u,k){return n===r?!0:n==null||r==null||!Ue(n)&&!Ue(r)?n!==n&&r!==r:km(n,r,o,u,Mt,k)}function km(n,r,o,u,k,m){var h=ke(n),c=ke(r),b=h?hn:on(n),B=c?hn:on(r);b=b==xe?An:b,B=B==xe?An:B;var j=b==An,U=B==An,X=b==B;if(X&&Ir(n)){if(!Ir(r))return!1;h=!0,j=!1}if(X&&!j)return m||(m=new xn),h||ot(n)?Du(n,r,o,u,k,m):wm(n,r,b,o,u,k,m);if(!(o&K)){var te=j&&Oe.call(n,"__wrapped__"),ue=U&&Oe.call(r,"__wrapped__");if(te||ue){var ve=te?n.value():n,de=ue?r.value():r;return m||(m=new xn),k(ve,de,o,u,m)}}return X?(m||(m=new xn),Hm(n,r,o,u,k,m)):!1}function Em(n){return Ue(n)&&on(n)==an}function Ji(n,r,o,u){var k=o.length,m=k,h=!u;if(n==null)return!m;for(n=De(n);k--;){var c=o[k];if(h&&c[2]?c[1]!==n[c[0]]:!(c[0]in n))return!1}for(;++k<m;){c=o[k];var b=c[0],B=n[b],j=c[1];if(h&&c[2]){if(B===a&&!(b in n))return!1}else{var U=new xn;if(u)var X=u(B,j,b,n,r,U);if(!(X===a?Mt(j,B,K|R,u,U):X))return!1}}return!0}function eu(n){if(!He(n)||Wm(n))return!1;var r=Er(n)?Ef:rv;return r.test(wr(n))}function vm(n){return Ue(n)&&un(n)==yt}function fm(n){return Ue(n)&&on(n)==Un}function mm(n){return Ue(n)&&$a(n.length)&&!!Me[un(n)]}function nu(n){return typeof n=="function"?n:n==null?pn:typeof n=="object"?ke(n)?au(n[0],n[1]):tu(n):Rd(n)}function Wi(n){if(!jt(n))return hf(n);var r=[];for(var o in De(n))Oe.call(n,o)&&o!="constructor"&&r.push(o);return r}function Tm(n){if(!He(n))return Qm(n);var r=jt(n),o=[];for(var u in n)u=="constructor"&&(r||!Oe.call(n,u))||o.push(u);return o}function zi(n,r){return n<r}function ru(n,r){var o=-1,u=mn(n)?L(n.length):[];return _r(n,function(k,m,h){u[++o]=r(k,m,h)}),u}function tu(n){var r=gs(n);return r.length==1&&r[0][2]?Bu(r[0][0],r[0][1]):function(o){return o===n||Ji(o,n,r)}}function au(n,r){return Es(n)&&Gu(r)?Bu(Zn(n),r):function(o){var u=Rs(o,n);return u===a&&u===r?_s(o,n):Mt(r,u,K|R)}}function Ka(n,r,o,u,k){n!==r&&xi(r,function(m,h){if(k||(k=new xn),He(m))pm(n,r,h,o,Ka,u,k);else{var c=u?u(fs(n,h),m,h+"",n,r,k):a;c===a&&(c=m),Ui(n,h,c)}},Tn)}function pm(n,r,o,u,k,m,h){var c=fs(n,o),b=fs(r,o),B=h.get(b);if(B){Ui(n,o,B);return}var j=m?m(c,b,o+"",n,r,h):a,U=j===a;if(U){var X=ke(b),te=!X&&Ir(b),ue=!X&&!te&&ot(b);j=b,X||te||ue?ke(c)?j=c:Ye(c)?j=fn(c):te?(U=!1,j=mu(b,!0)):ue?(U=!1,j=Tu(b,!0)):j=[]:Ht(b)||Hr(b)?(j=c,Hr(c)?j=Ed(c):(!He(c)||Er(c))&&(j=Mu(b))):U=!1}U&&(h.set(b,j),k(j,b,u,m,h),h.delete(b)),Ui(n,o,j)}function iu(n,r){var o=n.length;if(o)return r+=r<0?o:0,kr(r,o)?n[r]:a}function su(n,r,o){r.length?r=je(r,function(m){return ke(m)?function(h){return Br(h,m.length===1?m[0]:m)}:m}):r=[pn];var u=-1;r=je(r,Rn(oe()));var k=ru(n,function(m,h,c){var b=je(r,function(B){return B(m)});return{criteria:b,index:++u,value:m}});return xv(k,function(m,h){return Km(m,h,o)})}function hm(n,r){return ou(n,r,function(o,u){return _s(n,u)})}function ou(n,r,o){for(var u=-1,k=r.length,m={};++u<k;){var h=r[u],c=Br(n,h);o(c,h)&&Gt(m,Nr(h,n),c)}return m}function cm(n){return function(r){return Br(r,n)}}function Xi(n,r,o,u){var k=u?qv:zr,m=-1,h=r.length,c=n;for(n===r&&(r=fn(r)),o&&(c=je(n,Rn(o)));++m<h;)for(var b=0,B=r[m],j=o?o(B):B;(b=k(c,j,b,u))>-1;)c!==n&&Aa.call(c,b,1),Aa.call(n,b,1);return n}function lu(n,r){for(var o=n?r.length:0,u=o-1;o--;){var k=r[o];if(o==u||k!==m){var m=k;kr(k)?Aa.call(n,k,1):ns(n,k)}}return n}function Zi(n,r){return n+_a(Ul()*(r-n+1))}function Am(n,r,o,u){for(var k=-1,m=ze(Ra((r-n)/(o||1)),0),h=L(m);m--;)h[u?m:++k]=n,n+=o;return h}function Qi(n,r){var o="";if(!n||r<1||r>V)return o;do r%2&&(o+=n),r=_a(r/2),r&&(n+=n);while(r);return o}function fe(n,r){return ms(ju(n,r,pn),n+"")}function ym(n){return Yl(lt(n))}function Rm(n,r){var o=lt(n);return Va(o,Gr(r,0,o.length))}function Gt(n,r,o,u){if(!He(n))return n;r=Nr(r,n);for(var k=-1,m=r.length,h=m-1,c=n;c!=null&&++k<m;){var b=Zn(r[k]),B=o;if(b==="__proto__"||b==="constructor"||b==="prototype")return n;if(k!=h){var j=c[b];B=u?u(j,b,c):a,B===a&&(B=He(j)?j:kr(r[k+1])?[]:{})}Dt(c,b,B),c=c[b]}return n}var uu=ba?function(n,r){return ba.set(n,r),n}:pn,_m=ya?function(n,r){return ya(n,"toString",{configurable:!0,enumerable:!1,value:Ns(r),writable:!0})}:pn;function bm(n){return Va(lt(n))}function Mn(n,r,o){var u=-1,k=n.length;r<0&&(r=-r>k?0:k+r),o=o>k?k:o,o<0&&(o+=k),k=r>o?0:o-r>>>0,r>>>=0;for(var m=L(k);++u<k;)m[u]=n[u+r];return m}function Nm(n,r){var o;return _r(n,function(u,k,m){return o=r(u,k,m),!o}),!!o}function Da(n,r,o){var u=0,k=n==null?u:n.length;if(typeof r=="number"&&r===r&&k<=Fe){for(;u<k;){var m=u+k>>>1,h=n[m];h!==null&&!bn(h)&&(o?h<=r:h<r)?u=m+1:k=m}return k}return es(n,r,pn,o)}function es(n,r,o,u){var k=0,m=n==null?0:n.length;if(m===0)return 0;r=o(r);for(var h=r!==r,c=r===null,b=bn(r),B=r===a;k<m;){var j=_a((k+m)/2),U=o(n[j]),X=U!==a,te=U===null,ue=U===U,ve=bn(U);if(h)var de=u||ue;else B?de=ue&&(u||X):c?de=ue&&X&&(u||!te):b?de=ue&&X&&!te&&(u||!ve):te||ve?de=!1:de=u?U<=r:U<r;de?k=j+1:m=j}return sn(m,Ke)}function du(n,r){for(var o=-1,u=n.length,k=0,m=[];++o<u;){var h=n[o],c=r?r(h):h;if(!o||!Yn(c,b)){var b=c;m[k++]=h===0?0:h}}return m}function gu(n){return typeof n=="number"?n:bn(n)?ae:+n}function _n(n){if(typeof n=="string")return n;if(ke(n))return je(n,_n)+"";if(bn(n))return ql?ql.call(n):"";var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}function br(n,r,o){var u=-1,k=ga,m=n.length,h=!0,c=[],b=c;if(o)h=!1,k=Oi;else if(m>=s){var B=r?null:Bm(n);if(B)return Ea(B);h=!1,k=Nt,b=new Mr}else b=r?[]:c;e:for(;++u<m;){var j=n[u],U=r?r(j):j;if(j=o||j!==0?j:0,h&&U===U){for(var X=b.length;X--;)if(b[X]===U)continue e;r&&b.push(U),c.push(j)}else k(b,U,o)||(b!==c&&b.push(U),c.push(j))}return c}function ns(n,r){return r=Nr(r,n),n=wu(n,r),n==null||delete n[Zn(Gn(r))]}function ku(n,r,o,u){return Gt(n,r,o(Br(n,r)),u)}function Pa(n,r,o,u){for(var k=n.length,m=u?k:-1;(u?m--:++m<k)&&r(n[m],m,n););return o?Mn(n,u?0:m,u?m+1:k):Mn(n,u?m+1:0,u?k:m)}function Eu(n,r){var o=n;return o instanceof Te&&(o=o.value()),Li(r,function(u,k){return k.func.apply(k.thisArg,Ar([u],k.args))},o)}function rs(n,r,o){var u=n.length;if(u<2)return u?br(n[0]):[];for(var k=-1,m=L(u);++k<u;)for(var h=n[k],c=-1;++c<u;)c!=k&&(m[k]=Pt(m[k]||h,n[c],r,o));return br(rn(m,1),r,o)}function vu(n,r,o){for(var u=-1,k=n.length,m=r.length,h={};++u<k;){var c=u<m?r[u]:a;o(h,n[u],c)}return h}function ts(n){return Ye(n)?n:[]}function as(n){return typeof n=="function"?n:pn}function Nr(n,r){return ke(n)?n:Es(n,r)?[n]:qu(be(n))}var Sm=fe;function Sr(n,r,o){var u=n.length;return o=o===a?u:o,!r&&o>=u?n:Mn(n,r,o)}var fu=vf||function(n){return nn.clearTimeout(n)};function mu(n,r){if(r)return n.slice();var o=n.length,u=Bl?Bl(o):new n.constructor(o);return n.copy(u),u}function is(n){var r=new n.constructor(n.byteLength);return new ha(r).set(new ha(n)),r}function Im(n,r){var o=r?is(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.byteLength)}function Om(n){var r=new n.constructor(n.source,Qo.exec(n));return r.lastIndex=n.lastIndex,r}function Lm(n){return Kt?De(Kt.call(n)):{}}function Tu(n,r){var o=r?is(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.length)}function pu(n,r){if(n!==r){var o=n!==a,u=n===null,k=n===n,m=bn(n),h=r!==a,c=r===null,b=r===r,B=bn(r);if(!c&&!B&&!m&&n>r||m&&h&&b&&!c&&!B||u&&h&&b||!o&&b||!k)return 1;if(!u&&!m&&!B&&n<r||B&&o&&k&&!u&&!m||c&&o&&k||!h&&k||!b)return-1}return 0}function Km(n,r,o){for(var u=-1,k=n.criteria,m=r.criteria,h=k.length,c=o.length;++u<h;){var b=pu(k[u],m[u]);if(b){if(u>=c)return b;var B=o[u];return b*(B=="desc"?-1:1)}}return n.index-r.index}function hu(n,r,o,u){for(var k=-1,m=n.length,h=o.length,c=-1,b=r.length,B=ze(m-h,0),j=L(b+B),U=!u;++c<b;)j[c]=r[c];for(;++k<h;)(U||k<m)&&(j[o[k]]=n[k]);for(;B--;)j[c++]=n[k++];return j}function cu(n,r,o,u){for(var k=-1,m=n.length,h=-1,c=o.length,b=-1,B=r.length,j=ze(m-c,0),U=L(j+B),X=!u;++k<j;)U[k]=n[k];for(var te=k;++b<B;)U[te+b]=r[b];for(;++h<c;)(X||k<m)&&(U[te+o[h]]=n[k++]);return U}function fn(n,r){var o=-1,u=n.length;for(r||(r=L(u));++o<u;)r[o]=n[o];return r}function Xn(n,r,o,u){var k=!o;o||(o={});for(var m=-1,h=r.length;++m<h;){var c=r[m],b=u?u(o[c],n[c],c,o,n):a;b===a&&(b=n[c]),k?ur(o,c,b):Dt(o,c,b)}return o}function Dm(n,r){return Xn(n,ks(n),r)}function Pm(n,r){return Xn(n,Pu(n),r)}function Fa(n,r){return function(o,u){var k=ke(o)?Bv:nm,m=r?r():{};return k(o,n,oe(u,2),m)}}function at(n){return fe(function(r,o){var u=-1,k=o.length,m=k>1?o[k-1]:a,h=k>2?o[2]:a;for(m=n.length>3&&typeof m=="function"?(k--,m):a,h&&dn(o[0],o[1],h)&&(m=k<3?a:m,k=1),r=De(r);++u<k;){var c=o[u];c&&n(r,c,u,m)}return r})}function Au(n,r){return function(o,u){if(o==null)return o;if(!mn(o))return n(o,u);for(var k=o.length,m=r?k:-1,h=De(o);(r?m--:++m<k)&&u(h[m],m,h)!==!1;);return o}}function yu(n){return function(r,o,u){for(var k=-1,m=De(r),h=u(r),c=h.length;c--;){var b=h[n?c:++k];if(o(m[b],b,m)===!1)break}return r}}function Fm(n,r,o){var u=r&S,k=Bt(n);function m(){var h=this&&this!==nn&&this instanceof m?k:n;return h.apply(u?o:this,arguments)}return m}function Ru(n){return function(r){r=be(r);var o=Xr(r)?qn(r):a,u=o?o[0]:r.charAt(0),k=o?Sr(o,1).join(""):r.slice(1);return u[n]()+k}}function it(n){return function(r){return Li(Ad(cd(r).replace(Rv,"")),n,"")}}function Bt(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var o=tt(n.prototype),u=n.apply(o,r);return He(u)?u:o}}function Mm(n,r,o){var u=Bt(n);function k(){for(var m=arguments.length,h=L(m),c=m,b=st(k);c--;)h[c]=arguments[c];var B=m<3&&h[0]!==b&&h[m-1]!==b?[]:yr(h,b);if(m-=B.length,m<o)return Iu(n,r,Ma,k.placeholder,a,h,B,a,a,o-m);var j=this&&this!==nn&&this instanceof k?u:n;return yn(j,this,h)}return k}function _u(n){return function(r,o,u){var k=De(r);if(!mn(r)){var m=oe(o,3);r=Ze(r),o=function(c){return m(k[c],c,k)}}var h=n(r,o,u);return h>-1?k[m?r[h]:h]:a}}function bu(n){return gr(function(r){var o=r.length,u=o,k=Pn.prototype.thru;for(n&&r.reverse();u--;){var m=r[u];if(typeof m!="function")throw new Dn(d);if(k&&!h&&wa(m)=="wrapper")var h=new Pn([],!0)}for(u=h?u:o;++u<o;){m=r[u];var c=wa(m),b=c=="wrapper"?ds(m):a;b&&vs(b[0])&&b[1]==(O|I|y|N)&&!b[4].length&&b[9]==1?h=h[wa(b[0])].apply(h,b[3]):h=m.length==1&&vs(m)?h[c]():h.thru(m)}return function(){var B=arguments,j=B[0];if(h&&B.length==1&&ke(j))return h.plant(j).value();for(var U=0,X=o?r[U].apply(this,B):j;++U<o;)X=r[U].call(this,X);return X}})}function Ma(n,r,o,u,k,m,h,c,b,B){var j=r&O,U=r&S,X=r&P,te=r&(I|Z),ue=r&J,ve=X?a:Bt(n);function de(){for(var me=arguments.length,pe=L(me),Nn=me;Nn--;)pe[Nn]=arguments[Nn];if(te)var gn=st(de),Sn=Cv(pe,gn);if(u&&(pe=hu(pe,u,k,te)),m&&(pe=cu(pe,m,h,te)),me-=Sn,te&&me<B){var Ce=yr(pe,gn);return Iu(n,r,Ma,de.placeholder,o,pe,Ce,c,b,B-me)}var Cn=U?o:this,fr=X?Cn[n]:n;return me=pe.length,c?pe=nT(pe,c):ue&&me>1&&pe.reverse(),j&&b<me&&(pe.length=b),this&&this!==nn&&this instanceof de&&(fr=ve||Bt(fr)),fr.apply(Cn,pe)}return de}function Nu(n,r){return function(o,u){return um(o,n,r(u),{})}}function Ga(n,r){return function(o,u){var k;if(o===a&&u===a)return r;if(o!==a&&(k=o),u!==a){if(k===a)return u;typeof o=="string"||typeof u=="string"?(o=_n(o),u=_n(u)):(o=gu(o),u=gu(u)),k=n(o,u)}return k}}function ss(n){return gr(function(r){return r=je(r,Rn(oe())),fe(function(o){var u=this;return n(r,function(k){return yn(k,u,o)})})})}function Ba(n,r){r=r===a?" ":_n(r);var o=r.length;if(o<2)return o?Qi(r,n):r;var u=Qi(r,Ra(n/Zr(r)));return Xr(r)?Sr(qn(u),0,n).join(""):u.slice(0,n)}function Gm(n,r,o,u){var k=r&S,m=Bt(n);function h(){for(var c=-1,b=arguments.length,B=-1,j=u.length,U=L(j+b),X=this&&this!==nn&&this instanceof h?m:n;++B<j;)U[B]=u[B];for(;b--;)U[B++]=arguments[++c];return yn(X,k?o:this,U)}return h}function Su(n){return function(r,o,u){return u&&typeof u!="number"&&dn(r,o,u)&&(o=u=a),r=vr(r),o===a?(o=r,r=0):o=vr(o),u=u===a?r<o?1:-1:vr(u),Am(r,o,u,n)}}function ja(n){return function(r,o){return typeof r=="string"&&typeof o=="string"||(r=Bn(r),o=Bn(o)),n(r,o)}}function Iu(n,r,o,u,k,m,h,c,b,B){var j=r&I,U=j?h:a,X=j?a:h,te=j?m:a,ue=j?a:m;r|=j?y:w,r&=~(j?w:y),r&H||(r&=-4);var ve=[n,r,k,te,U,ue,X,c,b,B],de=o.apply(a,ve);return vs(n)&&Hu(de,ve),de.placeholder=u,Vu(de,n,r)}function os(n){var r=We[n];return function(o,u){if(o=Bn(o),u=u==null?0:sn(Ee(u),292),u&&Vl(o)){var k=(be(o)+"e").split("e"),m=r(k[0]+"e"+(+k[1]+u));return k=(be(m)+"e").split("e"),+(k[0]+"e"+(+k[1]-u))}return r(o)}}var Bm=nt&&1/Ea(new nt([,-0]))[1]==Q?function(n){return new nt(n)}:Os;function Ou(n){return function(r){var o=on(r);return o==an?Bi(r):o==Un?Qv(r):Yv(r,n(r))}}function dr(n,r,o,u,k,m,h,c){var b=r&P;if(!b&&typeof n!="function")throw new Dn(d);var B=u?u.length:0;if(B||(r&=-97,u=k=a),h=h===a?h:ze(Ee(h),0),c=c===a?c:Ee(c),B-=k?k.length:0,r&w){var j=u,U=k;u=k=a}var X=b?a:ds(n),te=[n,r,o,u,k,j,U,m,h,c];if(X&&Zm(te,X),n=te[0],r=te[1],o=te[2],u=te[3],k=te[4],c=te[9]=te[9]===a?b?0:n.length:ze(te[9]-B,0),!c&&r&(I|Z)&&(r&=-25),!r||r==S)var ue=Fm(n,r,o);else r==I||r==Z?ue=Mm(n,r,c):(r==y||r==(S|y))&&!k.length?ue=Gm(n,r,o,u):ue=Ma.apply(a,te);var ve=X?uu:Hu;return Vu(ve(ue,te),n,r)}function Lu(n,r,o,u){return n===a||Yn(n,et[o])&&!Oe.call(u,o)?r:n}function Ku(n,r,o,u,k,m){return He(n)&&He(r)&&(m.set(r,n),Ka(n,r,a,Ku,m),m.delete(r)),n}function jm(n){return Ht(n)?a:n}function Du(n,r,o,u,k,m){var h=o&K,c=n.length,b=r.length;if(c!=b&&!(h&&b>c))return!1;var B=m.get(n),j=m.get(r);if(B&&j)return B==r&&j==n;var U=-1,X=!0,te=o&R?new Mr:a;for(m.set(n,r),m.set(r,n);++U<c;){var ue=n[U],ve=r[U];if(u)var de=h?u(ve,ue,U,r,n,m):u(ue,ve,U,n,r,m);if(de!==a){if(de)continue;X=!1;break}if(te){if(!Ki(r,function(me,pe){if(!Nt(te,pe)&&(ue===me||k(ue,me,o,u,m)))return te.push(pe)})){X=!1;break}}else if(!(ue===ve||k(ue,ve,o,u,m))){X=!1;break}}return m.delete(n),m.delete(r),X}function wm(n,r,o,u,k,m,h){switch(o){case Jr:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case bt:return!(n.byteLength!=r.byteLength||!m(new ha(n),new ha(r)));case cn:case tn:case Wn:return Yn(+n,+r);case en:return n.name==r.name&&n.message==r.message;case yt:case Rt:return n==r+"";case an:var c=Bi;case Un:var b=u&K;if(c||(c=Ea),n.size!=r.size&&!b)return!1;var B=h.get(n);if(B)return B==r;u|=R,h.set(n,r);var j=Du(c(n),c(r),u,k,m,h);return h.delete(n),j;case oa:if(Kt)return Kt.call(n)==Kt.call(r)}return!1}function Hm(n,r,o,u,k,m){var h=o&K,c=ls(n),b=c.length,B=ls(r),j=B.length;if(b!=j&&!h)return!1;for(var U=b;U--;){var X=c[U];if(!(h?X in r:Oe.call(r,X)))return!1}var te=m.get(n),ue=m.get(r);if(te&&ue)return te==r&&ue==n;var ve=!0;m.set(n,r),m.set(r,n);for(var de=h;++U<b;){X=c[U];var me=n[X],pe=r[X];if(u)var Nn=h?u(pe,me,X,r,n,m):u(me,pe,X,n,r,m);if(!(Nn===a?me===pe||k(me,pe,o,u,m):Nn)){ve=!1;break}de||(de=X=="constructor")}if(ve&&!de){var gn=n.constructor,Sn=r.constructor;gn!=Sn&&"constructor"in n&&"constructor"in r&&!(typeof gn=="function"&&gn instanceof gn&&typeof Sn=="function"&&Sn instanceof Sn)&&(ve=!1)}return m.delete(n),m.delete(r),ve}function gr(n){return ms(ju(n,a,$u),n+"")}function ls(n){return Zl(n,Ze,ks)}function us(n){return Zl(n,Tn,Pu)}var ds=ba?function(n){return ba.get(n)}:Os;function wa(n){for(var r=n.name+"",o=rt[r],u=Oe.call(rt,r)?o.length:0;u--;){var k=o[u],m=k.func;if(m==null||m==n)return k.name}return r}function st(n){var r=Oe.call(v,"placeholder")?v:n;return r.placeholder}function oe(){var n=v.iteratee||Ss;return n=n===Ss?nu:n,arguments.length?n(arguments[0],arguments[1]):n}function Ha(n,r){var o=n.__data__;return Jm(r)?o[typeof r=="string"?"string":"hash"]:o.map}function gs(n){for(var r=Ze(n),o=r.length;o--;){var u=r[o],k=n[u];r[o]=[u,k,Gu(k)]}return r}function jr(n,r){var o=zv(n,r);return eu(o)?o:a}function Vm(n){var r=Oe.call(n,Pr),o=n[Pr];try{n[Pr]=a;var u=!0}catch{}var k=Ta.call(n);return u&&(r?n[Pr]=o:delete n[Pr]),k}var ks=wi?function(n){return n==null?[]:(n=De(n),cr(wi(n),function(r){return wl.call(n,r)}))}:Ls,Pu=wi?function(n){for(var r=[];n;)Ar(r,ks(n)),n=ca(n);return r}:Ls,on=un;(Hi&&on(new Hi(new ArrayBuffer(1)))!=Jr||It&&on(new It)!=an||Vi&&on(Vi.resolve())!=$r||nt&&on(new nt)!=Un||Ot&&on(new Ot)!=_t)&&(on=function(n){var r=un(n),o=r==An?n.constructor:a,u=o?wr(o):"";if(u)switch(u){case Rf:return Jr;case _f:return an;case bf:return $r;case Nf:return Un;case Sf:return _t}return r});function Um(n,r,o){for(var u=-1,k=o.length;++u<k;){var m=o[u],h=m.size;switch(m.type){case"drop":n+=h;break;case"dropRight":r-=h;break;case"take":r=sn(r,n+h);break;case"takeRight":n=ze(n,r-h);break}}return{start:n,end:r}}function qm(n){var r=n.match(JE);return r?r[1].split(WE):[]}function Fu(n,r,o){r=Nr(r,n);for(var u=-1,k=r.length,m=!1;++u<k;){var h=Zn(r[u]);if(!(m=n!=null&&o(n,h)))break;n=n[h]}return m||++u!=k?m:(k=n==null?0:n.length,!!k&&$a(k)&&kr(h,k)&&(ke(n)||Hr(n)))}function xm(n){var r=n.length,o=new n.constructor(r);return r&&typeof n[0]=="string"&&Oe.call(n,"index")&&(o.index=n.index,o.input=n.input),o}function Mu(n){return typeof n.constructor=="function"&&!jt(n)?tt(ca(n)):{}}function Ym(n,r,o){var u=n.constructor;switch(r){case bt:return is(n);case cn:case tn:return new u(+n);case Jr:return Im(n,o);case gi:case ki:case Ei:case vi:case fi:case mi:case Ti:case pi:case hi:return Tu(n,o);case an:return new u;case Wn:case Rt:return new u(n);case yt:return Om(n);case Un:return new u;case oa:return Lm(n)}}function Cm(n,r){var o=r.length;if(!o)return n;var u=o-1;return r[u]=(o>1?"& ":"")+r[u],r=r.join(o>2?", ":" "),n.replace($E,`{
/* [wrapped with `+r+`] */
`)}function $m(n){return ke(n)||Hr(n)||!!(Hl&&n&&n[Hl])}function kr(n,r){var o=typeof n;return r=r??V,!!r&&(o=="number"||o!="symbol"&&av.test(n))&&n>-1&&n%1==0&&n<r}function dn(n,r,o){if(!He(o))return!1;var u=typeof r;return(u=="number"?mn(o)&&kr(r,o.length):u=="string"&&r in o)?Yn(o[r],n):!1}function Es(n,r){if(ke(n))return!1;var o=typeof n;return o=="number"||o=="symbol"||o=="boolean"||n==null||bn(n)?!0:qE.test(n)||!UE.test(n)||r!=null&&n in De(r)}function Jm(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function vs(n){var r=wa(n),o=v[r];if(typeof o!="function"||!(r in Te.prototype))return!1;if(n===o)return!0;var u=ds(o);return!!u&&n===u[0]}function Wm(n){return!!Gl&&Gl in n}var zm=fa?Er:Ks;function jt(n){var r=n&&n.constructor,o=typeof r=="function"&&r.prototype||et;return n===o}function Gu(n){return n===n&&!He(n)}function Bu(n,r){return function(o){return o==null?!1:o[n]===r&&(r!==a||n in De(o))}}function Xm(n){var r=Ya(n,function(u){return o.size===f&&o.clear(),u}),o=r.cache;return r}function Zm(n,r){var o=n[1],u=r[1],k=o|u,m=k<(S|P|O),h=u==O&&o==I||u==O&&o==N&&n[7].length<=r[8]||u==(O|N)&&r[7].length<=r[8]&&o==I;if(!(m||h))return n;u&S&&(n[2]=r[2],k|=o&S?0:H);var c=r[3];if(c){var b=n[3];n[3]=b?hu(b,c,r[4]):c,n[4]=b?yr(n[3],T):r[4]}return c=r[5],c&&(b=n[5],n[5]=b?cu(b,c,r[6]):c,n[6]=b?yr(n[5],T):r[6]),c=r[7],c&&(n[7]=c),u&O&&(n[8]=n[8]==null?r[8]:sn(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=k,n}function Qm(n){var r=[];if(n!=null)for(var o in De(n))r.push(o);return r}function eT(n){return Ta.call(n)}function ju(n,r,o){return r=ze(r===a?n.length-1:r,0),function(){for(var u=arguments,k=-1,m=ze(u.length-r,0),h=L(m);++k<m;)h[k]=u[r+k];k=-1;for(var c=L(r+1);++k<r;)c[k]=u[k];return c[r]=o(h),yn(n,this,c)}}function wu(n,r){return r.length<2?n:Br(n,Mn(r,0,-1))}function nT(n,r){for(var o=n.length,u=sn(r.length,o),k=fn(n);u--;){var m=r[u];n[u]=kr(m,o)?k[m]:a}return n}function fs(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var Hu=Uu(uu),wt=mf||function(n,r){return nn.setTimeout(n,r)},ms=Uu(_m);function Vu(n,r,o){var u=r+"";return ms(n,Cm(u,rT(qm(u),o)))}function Uu(n){var r=0,o=0;return function(){var u=cf(),k=ie-(u-o);if(o=u,k>0){if(++r>=z)return arguments[0]}else r=0;return n.apply(a,arguments)}}function Va(n,r){var o=-1,u=n.length,k=u-1;for(r=r===a?u:r;++o<r;){var m=Zi(o,k),h=n[m];n[m]=n[o],n[o]=h}return n.length=r,n}var qu=Xm(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(xE,function(o,u,k,m){r.push(k?m.replace(ZE,"$1"):u||o)}),r});function Zn(n){if(typeof n=="string"||bn(n))return n;var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}function wr(n){if(n!=null){try{return ma.call(n)}catch{}try{return n+""}catch{}}return""}function rT(n,r){return Kn($e,function(o){var u="_."+o[0];r&o[1]&&!ga(n,u)&&n.push(u)}),n.sort()}function xu(n){if(n instanceof Te)return n.clone();var r=new Pn(n.__wrapped__,n.__chain__);return r.__actions__=fn(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function tT(n,r,o){(o?dn(n,r,o):r===a)?r=1:r=ze(Ee(r),0);var u=n==null?0:n.length;if(!u||r<1)return[];for(var k=0,m=0,h=L(Ra(u/r));k<u;)h[m++]=Mn(n,k,k+=r);return h}function aT(n){for(var r=-1,o=n==null?0:n.length,u=0,k=[];++r<o;){var m=n[r];m&&(k[u++]=m)}return k}function iT(){var n=arguments.length;if(!n)return[];for(var r=L(n-1),o=arguments[0],u=n;u--;)r[u-1]=arguments[u];return Ar(ke(o)?fn(o):[o],rn(r,1))}var sT=fe(function(n,r){return Ye(n)?Pt(n,rn(r,1,Ye,!0)):[]}),oT=fe(function(n,r){var o=Gn(r);return Ye(o)&&(o=a),Ye(n)?Pt(n,rn(r,1,Ye,!0),oe(o,2)):[]}),lT=fe(function(n,r){var o=Gn(r);return Ye(o)&&(o=a),Ye(n)?Pt(n,rn(r,1,Ye,!0),a,o):[]});function uT(n,r,o){var u=n==null?0:n.length;return u?(r=o||r===a?1:Ee(r),Mn(n,r<0?0:r,u)):[]}function dT(n,r,o){var u=n==null?0:n.length;return u?(r=o||r===a?1:Ee(r),r=u-r,Mn(n,0,r<0?0:r)):[]}function gT(n,r){return n&&n.length?Pa(n,oe(r,3),!0,!0):[]}function kT(n,r){return n&&n.length?Pa(n,oe(r,3),!0):[]}function ET(n,r,o,u){var k=n==null?0:n.length;return k?(o&&typeof o!="number"&&dn(n,r,o)&&(o=0,u=k),im(n,r,o,u)):[]}function Yu(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var k=o==null?0:Ee(o);return k<0&&(k=ze(u+k,0)),ka(n,oe(r,3),k)}function Cu(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var k=u-1;return o!==a&&(k=Ee(o),k=o<0?ze(u+k,0):sn(k,u-1)),ka(n,oe(r,3),k,!0)}function $u(n){var r=n==null?0:n.length;return r?rn(n,1):[]}function vT(n){var r=n==null?0:n.length;return r?rn(n,Q):[]}function fT(n,r){var o=n==null?0:n.length;return o?(r=r===a?1:Ee(r),rn(n,r)):[]}function mT(n){for(var r=-1,o=n==null?0:n.length,u={};++r<o;){var k=n[r];u[k[0]]=k[1]}return u}function Ju(n){return n&&n.length?n[0]:a}function TT(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var k=o==null?0:Ee(o);return k<0&&(k=ze(u+k,0)),zr(n,r,k)}function pT(n){var r=n==null?0:n.length;return r?Mn(n,0,-1):[]}var hT=fe(function(n){var r=je(n,ts);return r.length&&r[0]===n[0]?$i(r):[]}),cT=fe(function(n){var r=Gn(n),o=je(n,ts);return r===Gn(o)?r=a:o.pop(),o.length&&o[0]===n[0]?$i(o,oe(r,2)):[]}),AT=fe(function(n){var r=Gn(n),o=je(n,ts);return r=typeof r=="function"?r:a,r&&o.pop(),o.length&&o[0]===n[0]?$i(o,a,r):[]});function yT(n,r){return n==null?"":pf.call(n,r)}function Gn(n){var r=n==null?0:n.length;return r?n[r-1]:a}function RT(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var k=u;return o!==a&&(k=Ee(o),k=k<0?ze(u+k,0):sn(k,u-1)),r===r?nf(n,r,k):ka(n,Il,k,!0)}function _T(n,r){return n&&n.length?iu(n,Ee(r)):a}var bT=fe(Wu);function Wu(n,r){return n&&n.length&&r&&r.length?Xi(n,r):n}function NT(n,r,o){return n&&n.length&&r&&r.length?Xi(n,r,oe(o,2)):n}function ST(n,r,o){return n&&n.length&&r&&r.length?Xi(n,r,a,o):n}var IT=gr(function(n,r){var o=n==null?0:n.length,u=qi(n,r);return lu(n,je(r,function(k){return kr(k,o)?+k:k}).sort(pu)),u});function OT(n,r){var o=[];if(!(n&&n.length))return o;var u=-1,k=[],m=n.length;for(r=oe(r,3);++u<m;){var h=n[u];r(h,u,n)&&(o.push(h),k.push(u))}return lu(n,k),o}function Ts(n){return n==null?n:yf.call(n)}function LT(n,r,o){var u=n==null?0:n.length;return u?(o&&typeof o!="number"&&dn(n,r,o)?(r=0,o=u):(r=r==null?0:Ee(r),o=o===a?u:Ee(o)),Mn(n,r,o)):[]}function KT(n,r){return Da(n,r)}function DT(n,r,o){return es(n,r,oe(o,2))}function PT(n,r){var o=n==null?0:n.length;if(o){var u=Da(n,r);if(u<o&&Yn(n[u],r))return u}return-1}function FT(n,r){return Da(n,r,!0)}function MT(n,r,o){return es(n,r,oe(o,2),!0)}function GT(n,r){var o=n==null?0:n.length;if(o){var u=Da(n,r,!0)-1;if(Yn(n[u],r))return u}return-1}function BT(n){return n&&n.length?du(n):[]}function jT(n,r){return n&&n.length?du(n,oe(r,2)):[]}function wT(n){var r=n==null?0:n.length;return r?Mn(n,1,r):[]}function HT(n,r,o){return n&&n.length?(r=o||r===a?1:Ee(r),Mn(n,0,r<0?0:r)):[]}function VT(n,r,o){var u=n==null?0:n.length;return u?(r=o||r===a?1:Ee(r),r=u-r,Mn(n,r<0?0:r,u)):[]}function UT(n,r){return n&&n.length?Pa(n,oe(r,3),!1,!0):[]}function qT(n,r){return n&&n.length?Pa(n,oe(r,3)):[]}var xT=fe(function(n){return br(rn(n,1,Ye,!0))}),YT=fe(function(n){var r=Gn(n);return Ye(r)&&(r=a),br(rn(n,1,Ye,!0),oe(r,2))}),CT=fe(function(n){var r=Gn(n);return r=typeof r=="function"?r:a,br(rn(n,1,Ye,!0),a,r)});function $T(n){return n&&n.length?br(n):[]}function JT(n,r){return n&&n.length?br(n,oe(r,2)):[]}function WT(n,r){return r=typeof r=="function"?r:a,n&&n.length?br(n,a,r):[]}function ps(n){if(!(n&&n.length))return[];var r=0;return n=cr(n,function(o){if(Ye(o))return r=ze(o.length,r),!0}),Mi(r,function(o){return je(n,Di(o))})}function zu(n,r){if(!(n&&n.length))return[];var o=ps(n);return r==null?o:je(o,function(u){return yn(r,a,u)})}var zT=fe(function(n,r){return Ye(n)?Pt(n,r):[]}),XT=fe(function(n){return rs(cr(n,Ye))}),ZT=fe(function(n){var r=Gn(n);return Ye(r)&&(r=a),rs(cr(n,Ye),oe(r,2))}),QT=fe(function(n){var r=Gn(n);return r=typeof r=="function"?r:a,rs(cr(n,Ye),a,r)}),ep=fe(ps);function np(n,r){return vu(n||[],r||[],Dt)}function rp(n,r){return vu(n||[],r||[],Gt)}var tp=fe(function(n){var r=n.length,o=r>1?n[r-1]:a;return o=typeof o=="function"?(n.pop(),o):a,zu(n,o)});function Xu(n){var r=v(n);return r.__chain__=!0,r}function ap(n,r){return r(n),n}function Ua(n,r){return r(n)}var ip=gr(function(n){var r=n.length,o=r?n[0]:0,u=this.__wrapped__,k=function(m){return qi(m,n)};return r>1||this.__actions__.length||!(u instanceof Te)||!kr(o)?this.thru(k):(u=u.slice(o,+o+(r?1:0)),u.__actions__.push({func:Ua,args:[k],thisArg:a}),new Pn(u,this.__chain__).thru(function(m){return r&&!m.length&&m.push(a),m}))});function sp(){return Xu(this)}function op(){return new Pn(this.value(),this.__chain__)}function lp(){this.__values__===a&&(this.__values__=gd(this.value()));var n=this.__index__>=this.__values__.length,r=n?a:this.__values__[this.__index__++];return{done:n,value:r}}function up(){return this}function dp(n){for(var r,o=this;o instanceof Sa;){var u=xu(o);u.__index__=0,u.__values__=a,r?k.__wrapped__=u:r=u;var k=u;o=o.__wrapped__}return k.__wrapped__=n,r}function gp(){var n=this.__wrapped__;if(n instanceof Te){var r=n;return this.__actions__.length&&(r=new Te(this)),r=r.reverse(),r.__actions__.push({func:Ua,args:[Ts],thisArg:a}),new Pn(r,this.__chain__)}return this.thru(Ts)}function kp(){return Eu(this.__wrapped__,this.__actions__)}var Ep=Fa(function(n,r,o){Oe.call(n,o)?++n[o]:ur(n,o,1)});function vp(n,r,o){var u=ke(n)?Nl:am;return o&&dn(n,r,o)&&(r=a),u(n,oe(r,3))}function fp(n,r){var o=ke(n)?cr:zl;return o(n,oe(r,3))}var mp=_u(Yu),Tp=_u(Cu);function pp(n,r){return rn(qa(n,r),1)}function hp(n,r){return rn(qa(n,r),Q)}function cp(n,r,o){return o=o===a?1:Ee(o),rn(qa(n,r),o)}function Zu(n,r){var o=ke(n)?Kn:_r;return o(n,oe(r,3))}function Qu(n,r){var o=ke(n)?jv:Wl;return o(n,oe(r,3))}var Ap=Fa(function(n,r,o){Oe.call(n,o)?n[o].push(r):ur(n,o,[r])});function yp(n,r,o,u){n=mn(n)?n:lt(n),o=o&&!u?Ee(o):0;var k=n.length;return o<0&&(o=ze(k+o,0)),Ja(n)?o<=k&&n.indexOf(r,o)>-1:!!k&&zr(n,r,o)>-1}var Rp=fe(function(n,r,o){var u=-1,k=typeof r=="function",m=mn(n)?L(n.length):[];return _r(n,function(h){m[++u]=k?yn(r,h,o):Ft(h,r,o)}),m}),_p=Fa(function(n,r,o){ur(n,o,r)});function qa(n,r){var o=ke(n)?je:ru;return o(n,oe(r,3))}function bp(n,r,o,u){return n==null?[]:(ke(r)||(r=r==null?[]:[r]),o=u?a:o,ke(o)||(o=o==null?[]:[o]),su(n,r,o))}var Np=Fa(function(n,r,o){n[o?0:1].push(r)},function(){return[[],[]]});function Sp(n,r,o){var u=ke(n)?Li:Ll,k=arguments.length<3;return u(n,oe(r,4),o,k,_r)}function Ip(n,r,o){var u=ke(n)?wv:Ll,k=arguments.length<3;return u(n,oe(r,4),o,k,Wl)}function Op(n,r){var o=ke(n)?cr:zl;return o(n,Ca(oe(r,3)))}function Lp(n){var r=ke(n)?Yl:ym;return r(n)}function Kp(n,r,o){(o?dn(n,r,o):r===a)?r=1:r=Ee(r);var u=ke(n)?Qf:Rm;return u(n,r)}function Dp(n){var r=ke(n)?em:bm;return r(n)}function Pp(n){if(n==null)return 0;if(mn(n))return Ja(n)?Zr(n):n.length;var r=on(n);return r==an||r==Un?n.size:Wi(n).length}function Fp(n,r,o){var u=ke(n)?Ki:Nm;return o&&dn(n,r,o)&&(r=a),u(n,oe(r,3))}var Mp=fe(function(n,r){if(n==null)return[];var o=r.length;return o>1&&dn(n,r[0],r[1])?r=[]:o>2&&dn(r[0],r[1],r[2])&&(r=[r[0]]),su(n,rn(r,1),[])}),xa=ff||function(){return nn.Date.now()};function Gp(n,r){if(typeof r!="function")throw new Dn(d);return n=Ee(n),function(){if(--n<1)return r.apply(this,arguments)}}function ed(n,r,o){return r=o?a:r,r=n&&r==null?n.length:r,dr(n,O,a,a,a,a,r)}function nd(n,r){var o;if(typeof r!="function")throw new Dn(d);return n=Ee(n),function(){return--n>0&&(o=r.apply(this,arguments)),n<=1&&(r=a),o}}var hs=fe(function(n,r,o){var u=S;if(o.length){var k=yr(o,st(hs));u|=y}return dr(n,u,r,o,k)}),rd=fe(function(n,r,o){var u=S|P;if(o.length){var k=yr(o,st(rd));u|=y}return dr(r,u,n,o,k)});function td(n,r,o){r=o?a:r;var u=dr(n,I,a,a,a,a,a,r);return u.placeholder=td.placeholder,u}function ad(n,r,o){r=o?a:r;var u=dr(n,Z,a,a,a,a,a,r);return u.placeholder=ad.placeholder,u}function id(n,r,o){var u,k,m,h,c,b,B=0,j=!1,U=!1,X=!0;if(typeof n!="function")throw new Dn(d);r=Bn(r)||0,He(o)&&(j=!!o.leading,U="maxWait"in o,m=U?ze(Bn(o.maxWait)||0,r):m,X="trailing"in o?!!o.trailing:X);function te(Ce){var Cn=u,fr=k;return u=k=a,B=Ce,h=n.apply(fr,Cn),h}function ue(Ce){return B=Ce,c=wt(me,r),j?te(Ce):h}function ve(Ce){var Cn=Ce-b,fr=Ce-B,_d=r-Cn;return U?sn(_d,m-fr):_d}function de(Ce){var Cn=Ce-b,fr=Ce-B;return b===a||Cn>=r||Cn<0||U&&fr>=m}function me(){var Ce=xa();if(de(Ce))return pe(Ce);c=wt(me,ve(Ce))}function pe(Ce){return c=a,X&&u?te(Ce):(u=k=a,h)}function Nn(){c!==a&&fu(c),B=0,u=b=k=c=a}function gn(){return c===a?h:pe(xa())}function Sn(){var Ce=xa(),Cn=de(Ce);if(u=arguments,k=this,b=Ce,Cn){if(c===a)return ue(b);if(U)return fu(c),c=wt(me,r),te(b)}return c===a&&(c=wt(me,r)),h}return Sn.cancel=Nn,Sn.flush=gn,Sn}var Bp=fe(function(n,r){return Jl(n,1,r)}),jp=fe(function(n,r,o){return Jl(n,Bn(r)||0,o)});function wp(n){return dr(n,J)}function Ya(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new Dn(d);var o=function(){var u=arguments,k=r?r.apply(this,u):u[0],m=o.cache;if(m.has(k))return m.get(k);var h=n.apply(this,u);return o.cache=m.set(k,h)||m,h};return o.cache=new(Ya.Cache||lr),o}Ya.Cache=lr;function Ca(n){if(typeof n!="function")throw new Dn(d);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function Hp(n){return nd(2,n)}var Vp=Sm(function(n,r){r=r.length==1&&ke(r[0])?je(r[0],Rn(oe())):je(rn(r,1),Rn(oe()));var o=r.length;return fe(function(u){for(var k=-1,m=sn(u.length,o);++k<m;)u[k]=r[k].call(this,u[k]);return yn(n,this,u)})}),cs=fe(function(n,r){var o=yr(r,st(cs));return dr(n,y,a,r,o)}),sd=fe(function(n,r){var o=yr(r,st(sd));return dr(n,w,a,r,o)}),Up=gr(function(n,r){return dr(n,N,a,a,a,r)});function qp(n,r){if(typeof n!="function")throw new Dn(d);return r=r===a?r:Ee(r),fe(n,r)}function xp(n,r){if(typeof n!="function")throw new Dn(d);return r=r==null?0:ze(Ee(r),0),fe(function(o){var u=o[r],k=Sr(o,0,r);return u&&Ar(k,u),yn(n,this,k)})}function Yp(n,r,o){var u=!0,k=!0;if(typeof n!="function")throw new Dn(d);return He(o)&&(u="leading"in o?!!o.leading:u,k="trailing"in o?!!o.trailing:k),id(n,r,{leading:u,maxWait:r,trailing:k})}function Cp(n){return ed(n,1)}function $p(n,r){return cs(as(r),n)}function Jp(){if(!arguments.length)return[];var n=arguments[0];return ke(n)?n:[n]}function Wp(n){return Fn(n,D)}function zp(n,r){return r=typeof r=="function"?r:a,Fn(n,D,r)}function Xp(n){return Fn(n,p|D)}function Zp(n,r){return r=typeof r=="function"?r:a,Fn(n,p|D,r)}function Qp(n,r){return r==null||$l(n,r,Ze(r))}function Yn(n,r){return n===r||n!==n&&r!==r}var eh=ja(Ci),nh=ja(function(n,r){return n>=r}),Hr=Ql(function(){return arguments}())?Ql:function(n){return Ue(n)&&Oe.call(n,"callee")&&!wl.call(n,"callee")},ke=L.isArray,rh=cl?Rn(cl):dm;function mn(n){return n!=null&&$a(n.length)&&!Er(n)}function Ye(n){return Ue(n)&&mn(n)}function th(n){return n===!0||n===!1||Ue(n)&&un(n)==cn}var Ir=Tf||Ks,ah=Al?Rn(Al):gm;function ih(n){return Ue(n)&&n.nodeType===1&&!Ht(n)}function sh(n){if(n==null)return!0;if(mn(n)&&(ke(n)||typeof n=="string"||typeof n.splice=="function"||Ir(n)||ot(n)||Hr(n)))return!n.length;var r=on(n);if(r==an||r==Un)return!n.size;if(jt(n))return!Wi(n).length;for(var o in n)if(Oe.call(n,o))return!1;return!0}function oh(n,r){return Mt(n,r)}function lh(n,r,o){o=typeof o=="function"?o:a;var u=o?o(n,r):a;return u===a?Mt(n,r,a,o):!!u}function As(n){if(!Ue(n))return!1;var r=un(n);return r==en||r==Je||typeof n.message=="string"&&typeof n.name=="string"&&!Ht(n)}function uh(n){return typeof n=="number"&&Vl(n)}function Er(n){if(!He(n))return!1;var r=un(n);return r==vn||r==Vn||r==Hn||r==At}function od(n){return typeof n=="number"&&n==Ee(n)}function $a(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=V}function He(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function Ue(n){return n!=null&&typeof n=="object"}var ld=yl?Rn(yl):Em;function dh(n,r){return n===r||Ji(n,r,gs(r))}function gh(n,r,o){return o=typeof o=="function"?o:a,Ji(n,r,gs(r),o)}function kh(n){return ud(n)&&n!=+n}function Eh(n){if(zm(n))throw new ge(l);return eu(n)}function vh(n){return n===null}function fh(n){return n==null}function ud(n){return typeof n=="number"||Ue(n)&&un(n)==Wn}function Ht(n){if(!Ue(n)||un(n)!=An)return!1;var r=ca(n);if(r===null)return!0;var o=Oe.call(r,"constructor")&&r.constructor;return typeof o=="function"&&o instanceof o&&ma.call(o)==gf}var ys=Rl?Rn(Rl):vm;function mh(n){return od(n)&&n>=-9007199254740991&&n<=V}var dd=_l?Rn(_l):fm;function Ja(n){return typeof n=="string"||!ke(n)&&Ue(n)&&un(n)==Rt}function bn(n){return typeof n=="symbol"||Ue(n)&&un(n)==oa}var ot=bl?Rn(bl):mm;function Th(n){return n===a}function ph(n){return Ue(n)&&on(n)==_t}function hh(n){return Ue(n)&&un(n)==FE}var ch=ja(zi),Ah=ja(function(n,r){return n<=r});function gd(n){if(!n)return[];if(mn(n))return Ja(n)?qn(n):fn(n);if(St&&n[St])return Zv(n[St]());var r=on(n),o=r==an?Bi:r==Un?Ea:lt;return o(n)}function vr(n){if(!n)return n===0?n:0;if(n=Bn(n),n===Q||n===-1/0){var r=n<0?-1:1;return r*re}return n===n?n:0}function Ee(n){var r=vr(n),o=r%1;return r===r?o?r-o:r:0}function kd(n){return n?Gr(Ee(n),0,le):0}function Bn(n){if(typeof n=="number")return n;if(bn(n))return ae;if(He(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=He(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=Kl(n);var o=nv.test(n);return o||tv.test(n)?Mv(n.slice(2),o?2:8):ev.test(n)?ae:+n}function Ed(n){return Xn(n,Tn(n))}function yh(n){return n?Gr(Ee(n),-9007199254740991,V):n===0?n:0}function be(n){return n==null?"":_n(n)}var Rh=at(function(n,r){if(jt(r)||mn(r)){Xn(r,Ze(r),n);return}for(var o in r)Oe.call(r,o)&&Dt(n,o,r[o])}),vd=at(function(n,r){Xn(r,Tn(r),n)}),Wa=at(function(n,r,o,u){Xn(r,Tn(r),n,u)}),_h=at(function(n,r,o,u){Xn(r,Ze(r),n,u)}),bh=gr(qi);function Nh(n,r){var o=tt(n);return r==null?o:Cl(o,r)}var Sh=fe(function(n,r){n=De(n);var o=-1,u=r.length,k=u>2?r[2]:a;for(k&&dn(r[0],r[1],k)&&(u=1);++o<u;)for(var m=r[o],h=Tn(m),c=-1,b=h.length;++c<b;){var B=h[c],j=n[B];(j===a||Yn(j,et[B])&&!Oe.call(n,B))&&(n[B]=m[B])}return n}),Ih=fe(function(n){return n.push(a,Ku),yn(fd,a,n)});function Oh(n,r){return Sl(n,oe(r,3),zn)}function Lh(n,r){return Sl(n,oe(r,3),Yi)}function Kh(n,r){return n==null?n:xi(n,oe(r,3),Tn)}function Dh(n,r){return n==null?n:Xl(n,oe(r,3),Tn)}function Ph(n,r){return n&&zn(n,oe(r,3))}function Fh(n,r){return n&&Yi(n,oe(r,3))}function Mh(n){return n==null?[]:La(n,Ze(n))}function Gh(n){return n==null?[]:La(n,Tn(n))}function Rs(n,r,o){var u=n==null?a:Br(n,r);return u===a?o:u}function Bh(n,r){return n!=null&&Fu(n,r,sm)}function _s(n,r){return n!=null&&Fu(n,r,om)}var jh=Nu(function(n,r,o){r!=null&&typeof r.toString!="function"&&(r=Ta.call(r)),n[r]=o},Ns(pn)),wh=Nu(function(n,r,o){r!=null&&typeof r.toString!="function"&&(r=Ta.call(r)),Oe.call(n,r)?n[r].push(o):n[r]=[o]},oe),Hh=fe(Ft);function Ze(n){return mn(n)?xl(n):Wi(n)}function Tn(n){return mn(n)?xl(n,!0):Tm(n)}function Vh(n,r){var o={};return r=oe(r,3),zn(n,function(u,k,m){ur(o,r(u,k,m),u)}),o}function Uh(n,r){var o={};return r=oe(r,3),zn(n,function(u,k,m){ur(o,k,r(u,k,m))}),o}var qh=at(function(n,r,o){Ka(n,r,o)}),fd=at(function(n,r,o,u){Ka(n,r,o,u)}),xh=gr(function(n,r){var o={};if(n==null)return o;var u=!1;r=je(r,function(m){return m=Nr(m,n),u||(u=m.length>1),m}),Xn(n,us(n),o),u&&(o=Fn(o,p|A|D,jm));for(var k=r.length;k--;)ns(o,r[k]);return o});function Yh(n,r){return md(n,Ca(oe(r)))}var Ch=gr(function(n,r){return n==null?{}:hm(n,r)});function md(n,r){if(n==null)return{};var o=je(us(n),function(u){return[u]});return r=oe(r),ou(n,o,function(u,k){return r(u,k[0])})}function $h(n,r,o){r=Nr(r,n);var u=-1,k=r.length;for(k||(k=1,n=a);++u<k;){var m=n==null?a:n[Zn(r[u])];m===a&&(u=k,m=o),n=Er(m)?m.call(n):m}return n}function Jh(n,r,o){return n==null?n:Gt(n,r,o)}function Wh(n,r,o,u){return u=typeof u=="function"?u:a,n==null?n:Gt(n,r,o,u)}var Td=Ou(Ze),pd=Ou(Tn);function zh(n,r,o){var u=ke(n),k=u||Ir(n)||ot(n);if(r=oe(r,4),o==null){var m=n&&n.constructor;k?o=u?new m:[]:He(n)?o=Er(m)?tt(ca(n)):{}:o={}}return(k?Kn:zn)(n,function(h,c,b){return r(o,h,c,b)}),o}function Xh(n,r){return n==null?!0:ns(n,r)}function Zh(n,r,o){return n==null?n:ku(n,r,as(o))}function Qh(n,r,o,u){return u=typeof u=="function"?u:a,n==null?n:ku(n,r,as(o),u)}function lt(n){return n==null?[]:Gi(n,Ze(n))}function ec(n){return n==null?[]:Gi(n,Tn(n))}function nc(n,r,o){return o===a&&(o=r,r=a),o!==a&&(o=Bn(o),o=o===o?o:0),r!==a&&(r=Bn(r),r=r===r?r:0),Gr(Bn(n),r,o)}function rc(n,r,o){return r=vr(r),o===a?(o=r,r=0):o=vr(o),n=Bn(n),lm(n,r,o)}function tc(n,r,o){if(o&&typeof o!="boolean"&&dn(n,r,o)&&(r=o=a),o===a&&(typeof r=="boolean"?(o=r,r=a):typeof n=="boolean"&&(o=n,n=a)),n===a&&r===a?(n=0,r=1):(n=vr(n),r===a?(r=n,n=0):r=vr(r)),n>r){var u=n;n=r,r=u}if(o||n%1||r%1){var k=Ul();return sn(n+k*(r-n+Fv("1e-"+((k+"").length-1))),r)}return Zi(n,r)}var ac=it(function(n,r,o){return r=r.toLowerCase(),n+(o?hd(r):r)});function hd(n){return bs(be(n).toLowerCase())}function cd(n){return n=be(n),n&&n.replace(iv,$v).replace(_v,"")}function ic(n,r,o){n=be(n),r=_n(r);var u=n.length;o=o===a?u:Gr(Ee(o),0,u);var k=o;return o-=r.length,o>=0&&n.slice(o,k)==r}function sc(n){return n=be(n),n&&wE.test(n)?n.replace(Xo,Jv):n}function oc(n){return n=be(n),n&&YE.test(n)?n.replace(ci,"\\$&"):n}var lc=it(function(n,r,o){return n+(o?"-":"")+r.toLowerCase()}),uc=it(function(n,r,o){return n+(o?" ":"")+r.toLowerCase()}),dc=Ru("toLowerCase");function gc(n,r,o){n=be(n),r=Ee(r);var u=r?Zr(n):0;if(!r||u>=r)return n;var k=(r-u)/2;return Ba(_a(k),o)+n+Ba(Ra(k),o)}function kc(n,r,o){n=be(n),r=Ee(r);var u=r?Zr(n):0;return r&&u<r?n+Ba(r-u,o):n}function Ec(n,r,o){n=be(n),r=Ee(r);var u=r?Zr(n):0;return r&&u<r?Ba(r-u,o)+n:n}function vc(n,r,o){return o||r==null?r=0:r&&(r=+r),Af(be(n).replace(Ai,""),r||0)}function fc(n,r,o){return(o?dn(n,r,o):r===a)?r=1:r=Ee(r),Qi(be(n),r)}function mc(){var n=arguments,r=be(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var Tc=it(function(n,r,o){return n+(o?"_":"")+r.toLowerCase()});function pc(n,r,o){return o&&typeof o!="number"&&dn(n,r,o)&&(r=o=a),o=o===a?le:o>>>0,o?(n=be(n),n&&(typeof r=="string"||r!=null&&!ys(r))&&(r=_n(r),!r&&Xr(n))?Sr(qn(n),0,o):n.split(r,o)):[]}var hc=it(function(n,r,o){return n+(o?" ":"")+bs(r)});function cc(n,r,o){return n=be(n),o=o==null?0:Gr(Ee(o),0,n.length),r=_n(r),n.slice(o,o+r.length)==r}function Ac(n,r,o){var u=v.templateSettings;o&&dn(n,r,o)&&(r=a),n=be(n),r=Wa({},r,u,Lu);var k=Wa({},r.imports,u.imports,Lu),m=Ze(k),h=Gi(k,m),c,b,B=0,j=r.interpolate||la,U="__p += '",X=ji((r.escape||la).source+"|"+j.source+"|"+(j===Zo?QE:la).source+"|"+(r.evaluate||la).source+"|$","g"),te="//# sourceURL="+(Oe.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Ov+"]")+`
`;n.replace(X,function(de,me,pe,Nn,gn,Sn){return pe||(pe=Nn),U+=n.slice(B,Sn).replace(sv,Wv),me&&(c=!0,U+=`' +
__e(`+me+`) +
'`),gn&&(b=!0,U+=`';
`+gn+`;
__p += '`),pe&&(U+=`' +
((__t = (`+pe+`)) == null ? '' : __t) +
'`),B=Sn+de.length,de}),U+=`';
`;var ue=Oe.call(r,"variable")&&r.variable;if(!ue)U=`with (obj) {
`+U+`
}
`;else if(XE.test(ue))throw new ge(g);U=(b?U.replace(ME,""):U).replace(GE,"$1").replace(BE,"$1;"),U="function("+(ue||"obj")+`) {
`+(ue?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(c?", __e = _.escape":"")+(b?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+U+`return __p
}`;var ve=yd(function(){return Re(m,te+"return "+U).apply(a,h)});if(ve.source=U,As(ve))throw ve;return ve}function yc(n){return be(n).toLowerCase()}function Rc(n){return be(n).toUpperCase()}function _c(n,r,o){if(n=be(n),n&&(o||r===a))return Kl(n);if(!n||!(r=_n(r)))return n;var u=qn(n),k=qn(r),m=Dl(u,k),h=Pl(u,k)+1;return Sr(u,m,h).join("")}function bc(n,r,o){if(n=be(n),n&&(o||r===a))return n.slice(0,Ml(n)+1);if(!n||!(r=_n(r)))return n;var u=qn(n),k=Pl(u,qn(r))+1;return Sr(u,0,k).join("")}function Nc(n,r,o){if(n=be(n),n&&(o||r===a))return n.replace(Ai,"");if(!n||!(r=_n(r)))return n;var u=qn(n),k=Dl(u,qn(r));return Sr(u,k).join("")}function Sc(n,r){var o=W,u=x;if(He(r)){var k="separator"in r?r.separator:k;o="length"in r?Ee(r.length):o,u="omission"in r?_n(r.omission):u}n=be(n);var m=n.length;if(Xr(n)){var h=qn(n);m=h.length}if(o>=m)return n;var c=o-Zr(u);if(c<1)return u;var b=h?Sr(h,0,c).join(""):n.slice(0,c);if(k===a)return b+u;if(h&&(c+=b.length-c),ys(k)){if(n.slice(c).search(k)){var B,j=b;for(k.global||(k=ji(k.source,be(Qo.exec(k))+"g")),k.lastIndex=0;B=k.exec(j);)var U=B.index;b=b.slice(0,U===a?c:U)}}else if(n.indexOf(_n(k),c)!=c){var X=b.lastIndexOf(k);X>-1&&(b=b.slice(0,X))}return b+u}function Ic(n){return n=be(n),n&&jE.test(n)?n.replace(zo,rf):n}var Oc=it(function(n,r,o){return n+(o?" ":"")+r.toUpperCase()}),bs=Ru("toUpperCase");function Ad(n,r,o){return n=be(n),r=o?a:r,r===a?Xv(n)?sf(n):Uv(n):n.match(r)||[]}var yd=fe(function(n,r){try{return yn(n,a,r)}catch(o){return As(o)?o:new ge(o)}}),Lc=gr(function(n,r){return Kn(r,function(o){o=Zn(o),ur(n,o,hs(n[o],n))}),n});function Kc(n){var r=n==null?0:n.length,o=oe();return n=r?je(n,function(u){if(typeof u[1]!="function")throw new Dn(d);return[o(u[0]),u[1]]}):[],fe(function(u){for(var k=-1;++k<r;){var m=n[k];if(yn(m[0],this,u))return yn(m[1],this,u)}})}function Dc(n){return tm(Fn(n,p))}function Ns(n){return function(){return n}}function Pc(n,r){return n==null||n!==n?r:n}var Fc=bu(),Mc=bu(!0);function pn(n){return n}function Ss(n){return nu(typeof n=="function"?n:Fn(n,p))}function Gc(n){return tu(Fn(n,p))}function Bc(n,r){return au(n,Fn(r,p))}var jc=fe(function(n,r){return function(o){return Ft(o,n,r)}}),wc=fe(function(n,r){return function(o){return Ft(n,o,r)}});function Is(n,r,o){var u=Ze(r),k=La(r,u);o==null&&!(He(r)&&(k.length||!u.length))&&(o=r,r=n,n=this,k=La(r,Ze(r)));var m=!(He(o)&&"chain"in o)||!!o.chain,h=Er(n);return Kn(k,function(c){var b=r[c];n[c]=b,h&&(n.prototype[c]=function(){var B=this.__chain__;if(m||B){var j=n(this.__wrapped__),U=j.__actions__=fn(this.__actions__);return U.push({func:b,args:arguments,thisArg:n}),j.__chain__=B,j}return b.apply(n,Ar([this.value()],arguments))})}),n}function Hc(){return nn._===this&&(nn._=kf),this}function Os(){}function Vc(n){return n=Ee(n),fe(function(r){return iu(r,n)})}var Uc=ss(je),qc=ss(Nl),xc=ss(Ki);function Rd(n){return Es(n)?Di(Zn(n)):cm(n)}function Yc(n){return function(r){return n==null?a:Br(n,r)}}var Cc=Su(),$c=Su(!0);function Ls(){return[]}function Ks(){return!1}function Jc(){return{}}function Wc(){return""}function zc(){return!0}function Xc(n,r){if(n=Ee(n),n<1||n>V)return[];var o=le,u=sn(n,le);r=oe(r),n-=le;for(var k=Mi(u,r);++o<n;)r(o);return k}function Zc(n){return ke(n)?je(n,Zn):bn(n)?[n]:fn(qu(be(n)))}function Qc(n){var r=++df;return be(n)+r}var eA=Ga(function(n,r){return n+r},0),nA=os("ceil"),rA=Ga(function(n,r){return n/r},1),tA=os("floor");function aA(n){return n&&n.length?Oa(n,pn,Ci):a}function iA(n,r){return n&&n.length?Oa(n,oe(r,2),Ci):a}function sA(n){return Ol(n,pn)}function oA(n,r){return Ol(n,oe(r,2))}function lA(n){return n&&n.length?Oa(n,pn,zi):a}function uA(n,r){return n&&n.length?Oa(n,oe(r,2),zi):a}var dA=Ga(function(n,r){return n*r},1),gA=os("round"),kA=Ga(function(n,r){return n-r},0);function EA(n){return n&&n.length?Fi(n,pn):0}function vA(n,r){return n&&n.length?Fi(n,oe(r,2)):0}return v.after=Gp,v.ary=ed,v.assign=Rh,v.assignIn=vd,v.assignInWith=Wa,v.assignWith=_h,v.at=bh,v.before=nd,v.bind=hs,v.bindAll=Lc,v.bindKey=rd,v.castArray=Jp,v.chain=Xu,v.chunk=tT,v.compact=aT,v.concat=iT,v.cond=Kc,v.conforms=Dc,v.constant=Ns,v.countBy=Ep,v.create=Nh,v.curry=td,v.curryRight=ad,v.debounce=id,v.defaults=Sh,v.defaultsDeep=Ih,v.defer=Bp,v.delay=jp,v.difference=sT,v.differenceBy=oT,v.differenceWith=lT,v.drop=uT,v.dropRight=dT,v.dropRightWhile=gT,v.dropWhile=kT,v.fill=ET,v.filter=fp,v.flatMap=pp,v.flatMapDeep=hp,v.flatMapDepth=cp,v.flatten=$u,v.flattenDeep=vT,v.flattenDepth=fT,v.flip=wp,v.flow=Fc,v.flowRight=Mc,v.fromPairs=mT,v.functions=Mh,v.functionsIn=Gh,v.groupBy=Ap,v.initial=pT,v.intersection=hT,v.intersectionBy=cT,v.intersectionWith=AT,v.invert=jh,v.invertBy=wh,v.invokeMap=Rp,v.iteratee=Ss,v.keyBy=_p,v.keys=Ze,v.keysIn=Tn,v.map=qa,v.mapKeys=Vh,v.mapValues=Uh,v.matches=Gc,v.matchesProperty=Bc,v.memoize=Ya,v.merge=qh,v.mergeWith=fd,v.method=jc,v.methodOf=wc,v.mixin=Is,v.negate=Ca,v.nthArg=Vc,v.omit=xh,v.omitBy=Yh,v.once=Hp,v.orderBy=bp,v.over=Uc,v.overArgs=Vp,v.overEvery=qc,v.overSome=xc,v.partial=cs,v.partialRight=sd,v.partition=Np,v.pick=Ch,v.pickBy=md,v.property=Rd,v.propertyOf=Yc,v.pull=bT,v.pullAll=Wu,v.pullAllBy=NT,v.pullAllWith=ST,v.pullAt=IT,v.range=Cc,v.rangeRight=$c,v.rearg=Up,v.reject=Op,v.remove=OT,v.rest=qp,v.reverse=Ts,v.sampleSize=Kp,v.set=Jh,v.setWith=Wh,v.shuffle=Dp,v.slice=LT,v.sortBy=Mp,v.sortedUniq=BT,v.sortedUniqBy=jT,v.split=pc,v.spread=xp,v.tail=wT,v.take=HT,v.takeRight=VT,v.takeRightWhile=UT,v.takeWhile=qT,v.tap=ap,v.throttle=Yp,v.thru=Ua,v.toArray=gd,v.toPairs=Td,v.toPairsIn=pd,v.toPath=Zc,v.toPlainObject=Ed,v.transform=zh,v.unary=Cp,v.union=xT,v.unionBy=YT,v.unionWith=CT,v.uniq=$T,v.uniqBy=JT,v.uniqWith=WT,v.unset=Xh,v.unzip=ps,v.unzipWith=zu,v.update=Zh,v.updateWith=Qh,v.values=lt,v.valuesIn=ec,v.without=zT,v.words=Ad,v.wrap=$p,v.xor=XT,v.xorBy=ZT,v.xorWith=QT,v.zip=ep,v.zipObject=np,v.zipObjectDeep=rp,v.zipWith=tp,v.entries=Td,v.entriesIn=pd,v.extend=vd,v.extendWith=Wa,Is(v,v),v.add=eA,v.attempt=yd,v.camelCase=ac,v.capitalize=hd,v.ceil=nA,v.clamp=nc,v.clone=Wp,v.cloneDeep=Xp,v.cloneDeepWith=Zp,v.cloneWith=zp,v.conformsTo=Qp,v.deburr=cd,v.defaultTo=Pc,v.divide=rA,v.endsWith=ic,v.eq=Yn,v.escape=sc,v.escapeRegExp=oc,v.every=vp,v.find=mp,v.findIndex=Yu,v.findKey=Oh,v.findLast=Tp,v.findLastIndex=Cu,v.findLastKey=Lh,v.floor=tA,v.forEach=Zu,v.forEachRight=Qu,v.forIn=Kh,v.forInRight=Dh,v.forOwn=Ph,v.forOwnRight=Fh,v.get=Rs,v.gt=eh,v.gte=nh,v.has=Bh,v.hasIn=_s,v.head=Ju,v.identity=pn,v.includes=yp,v.indexOf=TT,v.inRange=rc,v.invoke=Hh,v.isArguments=Hr,v.isArray=ke,v.isArrayBuffer=rh,v.isArrayLike=mn,v.isArrayLikeObject=Ye,v.isBoolean=th,v.isBuffer=Ir,v.isDate=ah,v.isElement=ih,v.isEmpty=sh,v.isEqual=oh,v.isEqualWith=lh,v.isError=As,v.isFinite=uh,v.isFunction=Er,v.isInteger=od,v.isLength=$a,v.isMap=ld,v.isMatch=dh,v.isMatchWith=gh,v.isNaN=kh,v.isNative=Eh,v.isNil=fh,v.isNull=vh,v.isNumber=ud,v.isObject=He,v.isObjectLike=Ue,v.isPlainObject=Ht,v.isRegExp=ys,v.isSafeInteger=mh,v.isSet=dd,v.isString=Ja,v.isSymbol=bn,v.isTypedArray=ot,v.isUndefined=Th,v.isWeakMap=ph,v.isWeakSet=hh,v.join=yT,v.kebabCase=lc,v.last=Gn,v.lastIndexOf=RT,v.lowerCase=uc,v.lowerFirst=dc,v.lt=ch,v.lte=Ah,v.max=aA,v.maxBy=iA,v.mean=sA,v.meanBy=oA,v.min=lA,v.minBy=uA,v.stubArray=Ls,v.stubFalse=Ks,v.stubObject=Jc,v.stubString=Wc,v.stubTrue=zc,v.multiply=dA,v.nth=_T,v.noConflict=Hc,v.noop=Os,v.now=xa,v.pad=gc,v.padEnd=kc,v.padStart=Ec,v.parseInt=vc,v.random=tc,v.reduce=Sp,v.reduceRight=Ip,v.repeat=fc,v.replace=mc,v.result=$h,v.round=gA,v.runInContext=_,v.sample=Lp,v.size=Pp,v.snakeCase=Tc,v.some=Fp,v.sortedIndex=KT,v.sortedIndexBy=DT,v.sortedIndexOf=PT,v.sortedLastIndex=FT,v.sortedLastIndexBy=MT,v.sortedLastIndexOf=GT,v.startCase=hc,v.startsWith=cc,v.subtract=kA,v.sum=EA,v.sumBy=vA,v.template=Ac,v.times=Xc,v.toFinite=vr,v.toInteger=Ee,v.toLength=kd,v.toLower=yc,v.toNumber=Bn,v.toSafeInteger=yh,v.toString=be,v.toUpper=Rc,v.trim=_c,v.trimEnd=bc,v.trimStart=Nc,v.truncate=Sc,v.unescape=Ic,v.uniqueId=Qc,v.upperCase=Oc,v.upperFirst=bs,v.each=Zu,v.eachRight=Qu,v.first=Ju,Is(v,function(){var n={};return zn(v,function(r,o){Oe.call(v.prototype,o)||(n[o]=r)}),n}(),{chain:!1}),v.VERSION=t,Kn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){v[n].placeholder=v}),Kn(["drop","take"],function(n,r){Te.prototype[n]=function(o){o=o===a?1:ze(Ee(o),0);var u=this.__filtered__&&!r?new Te(this):this.clone();return u.__filtered__?u.__takeCount__=sn(o,u.__takeCount__):u.__views__.push({size:sn(o,le),type:n+(u.__dir__<0?"Right":"")}),u},Te.prototype[n+"Right"]=function(o){return this.reverse()[n](o).reverse()}}),Kn(["filter","map","takeWhile"],function(n,r){var o=r+1,u=o==C||o==Y;Te.prototype[n]=function(k){var m=this.clone();return m.__iteratees__.push({iteratee:oe(k,3),type:o}),m.__filtered__=m.__filtered__||u,m}}),Kn(["head","last"],function(n,r){var o="take"+(r?"Right":"");Te.prototype[n]=function(){return this[o](1).value()[0]}}),Kn(["initial","tail"],function(n,r){var o="drop"+(r?"":"Right");Te.prototype[n]=function(){return this.__filtered__?new Te(this):this[o](1)}}),Te.prototype.compact=function(){return this.filter(pn)},Te.prototype.find=function(n){return this.filter(n).head()},Te.prototype.findLast=function(n){return this.reverse().find(n)},Te.prototype.invokeMap=fe(function(n,r){return typeof n=="function"?new Te(this):this.map(function(o){return Ft(o,n,r)})}),Te.prototype.reject=function(n){return this.filter(Ca(oe(n)))},Te.prototype.slice=function(n,r){n=Ee(n);var o=this;return o.__filtered__&&(n>0||r<0)?new Te(o):(n<0?o=o.takeRight(-n):n&&(o=o.drop(n)),r!==a&&(r=Ee(r),o=r<0?o.dropRight(-r):o.take(r-n)),o)},Te.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Te.prototype.toArray=function(){return this.take(le)},zn(Te.prototype,function(n,r){var o=/^(?:filter|find|map|reject)|While$/.test(r),u=/^(?:head|last)$/.test(r),k=v[u?"take"+(r=="last"?"Right":""):r],m=u||/^find/.test(r);k&&(v.prototype[r]=function(){var h=this.__wrapped__,c=u?[1]:arguments,b=h instanceof Te,B=c[0],j=b||ke(h),U=function(me){var pe=k.apply(v,Ar([me],c));return u&&X?pe[0]:pe};j&&o&&typeof B=="function"&&B.length!=1&&(b=j=!1);var X=this.__chain__,te=!!this.__actions__.length,ue=m&&!X,ve=b&&!te;if(!m&&j){h=ve?h:new Te(this);var de=n.apply(h,c);return de.__actions__.push({func:Ua,args:[U],thisArg:a}),new Pn(de,X)}return ue&&ve?n.apply(this,c):(de=this.thru(U),ue?u?de.value()[0]:de.value():de)})}),Kn(["pop","push","shift","sort","splice","unshift"],function(n){var r=va[n],o=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",u=/^(?:pop|shift)$/.test(n);v.prototype[n]=function(){var k=arguments;if(u&&!this.__chain__){var m=this.value();return r.apply(ke(m)?m:[],k)}return this[o](function(h){return r.apply(ke(h)?h:[],k)})}}),zn(Te.prototype,function(n,r){var o=v[r];if(o){var u=o.name+"";Oe.call(rt,u)||(rt[u]=[]),rt[u].push({name:r,func:o})}}),rt[Ma(a,P).name]=[{name:"wrapper",func:a}],Te.prototype.clone=If,Te.prototype.reverse=Of,Te.prototype.value=Lf,v.prototype.at=ip,v.prototype.chain=sp,v.prototype.commit=op,v.prototype.next=lp,v.prototype.plant=dp,v.prototype.reverse=gp,v.prototype.toJSON=v.prototype.valueOf=v.prototype.value=kp,v.prototype.first=v.prototype.head,St&&(v.prototype[St]=up),v},Qr=of();Dr?((Dr.exports=Qr)._=Qr,Si._=Qr):nn._=Qr}).call(_S)}($t,$t.exports)),$t.exports}bS();ln(ta);const zk=F.forwardRef((e,i)=>G.jsx(dt,{gap:"2",style:{display:"flex"},...e,ref:i}));zk.displayName="FaktaGruppe";zk.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var Vs={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var pg;function NS(){return pg||(pg=1,function(e){(function(){var i={}.hasOwnProperty;function a(){for(var l="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(l=s(l,t.call(this,g)))}return l}function t(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return a.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var g in l)i.call(l,g)&&l[g]&&(d=s(d,this&&this[g]||g));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(a.default=a,e.exports=a):window.classNames=a})()}(Vs)),Vs.exports}var SS=NS();const IS=fA(SS),OS="_boks_c3bfh_1",LS="_harBorderLeft_c3bfh_8",KS="_harBorderTop_c3bfh_12",DS={boks:OS,harBorderLeft:LS,harBorderTop:KS};IS.bind(DS);var Us={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var hg;function PS(){return hg||(hg=1,function(e){(function(){var i={}.hasOwnProperty;function a(){for(var l="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(l=s(l,t(g)))}return l}function t(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return a.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var g in l)i.call(l,g)&&l[g]&&(d=s(d,g));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(a.default=a,e.exports=a):window.classNames=a})()}(Us)),Us.exports}PS();var FS=Object.defineProperty,MS=(e,i,a)=>i in e?FS(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,cg=(e,i,a)=>MS(e,typeof i!="symbol"?i+"":i,a);function Xk(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ag={exports:{}},Yt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function GS(){if(yg)return Yt;yg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function a(t,s,l){var d=null;if(l!==void 0&&(d=""+l),s.key!==void 0&&(d=""+s.key),"key"in s){l={};for(var g in s)g!=="key"&&(l[g]=s[g])}else l=s;return s=l.ref,{$$typeof:e,type:t,key:d,ref:s!==void 0?s:null,props:l}}return Yt.Fragment=i,Yt.jsx=a,Yt.jsxs=a,Yt}var Rg;function BS(){return Rg||(Rg=1,Ag.exports=GS()),Ag.exports}var mr=BS(),ho={exports:{}},jS=ho.exports,_g;function wS(){return _g||(_g=1,function(e,i){(function(a,t){e.exports=t()})(jS,function(){var a=1e3,t=6e4,s=36e5,l="millisecond",d="second",g="minute",E="hour",f="day",T="week",p="month",A="quarter",D="year",K="date",R="Invalid Date",S=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,P=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,H={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(C){var $=["th","st","nd","rd"],Y=C%100;return"["+C+($[(Y-20)%10]||$[Y]||$[0])+"]"}},I=function(C,$,Y){var Q=String(C);return!Q||Q.length>=$?C:""+Array($+1-Q.length).join(Y)+C},Z={s:I,z:function(C){var $=-C.utcOffset(),Y=Math.abs($),Q=Math.floor(Y/60),V=Y%60;return($<=0?"+":"-")+I(Q,2,"0")+":"+I(V,2,"0")},m:function C($,Y){if($.date()<Y.date())return-C(Y,$);var Q=12*(Y.year()-$.year())+(Y.month()-$.month()),V=$.clone().add(Q,p),re=Y-V<0,ae=$.clone().add(Q+(re?-1:1),p);return+(-(Q+(Y-V)/(re?V-ae:ae-V))||0)},a:function(C){return C<0?Math.ceil(C)||0:Math.floor(C)},p:function(C){return{M:p,y:D,w:T,d:f,D:K,h:E,m:g,s:d,ms:l,Q:A}[C]||String(C||"").toLowerCase().replace(/s$/,"")},u:function(C){return C===void 0}},y="en",w={};w[y]=H;var O="$isDayjsObject",N=function(C){return C instanceof z||!(!C||!C[O])},J=function C($,Y,Q){var V;if(!$)return y;if(typeof $=="string"){var re=$.toLowerCase();w[re]&&(V=re),Y&&(w[re]=Y,V=re);var ae=$.split("-");if(!V&&ae.length>1)return C(ae[0])}else{var le=$.name;w[le]=$,V=le}return!Q&&V&&(y=V),V||!Q&&y},W=function(C,$){if(N(C))return C.clone();var Y=typeof $=="object"?$:{};return Y.date=C,Y.args=arguments,new z(Y)},x=Z;x.l=J,x.i=N,x.w=function(C,$){return W(C,{locale:$.$L,utc:$.$u,x:$.$x,$offset:$.$offset})};var z=function(){function C(Y){this.$L=J(Y.locale,null,!0),this.parse(Y),this.$x=this.$x||Y.x||{},this[O]=!0}var $=C.prototype;return $.parse=function(Y){this.$d=function(Q){var V=Q.date,re=Q.utc;if(V===null)return new Date(NaN);if(x.u(V))return new Date;if(V instanceof Date)return new Date(V);if(typeof V=="string"&&!/Z$/i.test(V)){var ae=V.match(S);if(ae){var le=ae[2]-1||0,Ke=(ae[7]||"0").substring(0,3);return re?new Date(Date.UTC(ae[1],le,ae[3]||1,ae[4]||0,ae[5]||0,ae[6]||0,Ke)):new Date(ae[1],le,ae[3]||1,ae[4]||0,ae[5]||0,ae[6]||0,Ke)}}return new Date(V)}(Y),this.init()},$.init=function(){var Y=this.$d;this.$y=Y.getFullYear(),this.$M=Y.getMonth(),this.$D=Y.getDate(),this.$W=Y.getDay(),this.$H=Y.getHours(),this.$m=Y.getMinutes(),this.$s=Y.getSeconds(),this.$ms=Y.getMilliseconds()},$.$utils=function(){return x},$.isValid=function(){return this.$d.toString()!==R},$.isSame=function(Y,Q){var V=W(Y);return this.startOf(Q)<=V&&V<=this.endOf(Q)},$.isAfter=function(Y,Q){return W(Y)<this.startOf(Q)},$.isBefore=function(Y,Q){return this.endOf(Q)<W(Y)},$.$g=function(Y,Q,V){return x.u(Y)?this[Q]:this.set(V,Y)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(Y,Q){var V=this,re=!!x.u(Q)||Q,ae=x.p(Y),le=function(tn,Je){var en=x.w(V.$u?Date.UTC(V.$y,Je,tn):new Date(V.$y,Je,tn),V);return re?en:en.endOf(f)},Ke=function(tn,Je){return x.w(V.toDate()[tn].apply(V.toDate("s"),(re?[0,0,0,0]:[23,59,59,999]).slice(Je)),V)},Fe=this.$W,$e=this.$M,xe=this.$D,hn="set"+(this.$u?"UTC":"");switch(ae){case D:return re?le(1,0):le(31,11);case p:return re?le(1,$e):le(0,$e+1);case T:var Hn=this.$locale().weekStart||0,cn=(Fe<Hn?Fe+7:Fe)-Hn;return le(re?xe-cn:xe+(6-cn),$e);case f:case K:return Ke(hn+"Hours",0);case E:return Ke(hn+"Minutes",1);case g:return Ke(hn+"Seconds",2);case d:return Ke(hn+"Milliseconds",3);default:return this.clone()}},$.endOf=function(Y){return this.startOf(Y,!1)},$.$set=function(Y,Q){var V,re=x.p(Y),ae="set"+(this.$u?"UTC":""),le=(V={},V[f]=ae+"Date",V[K]=ae+"Date",V[p]=ae+"Month",V[D]=ae+"FullYear",V[E]=ae+"Hours",V[g]=ae+"Minutes",V[d]=ae+"Seconds",V[l]=ae+"Milliseconds",V)[re],Ke=re===f?this.$D+(Q-this.$W):Q;if(re===p||re===D){var Fe=this.clone().set(K,1);Fe.$d[le](Ke),Fe.init(),this.$d=Fe.set(K,Math.min(this.$D,Fe.daysInMonth())).$d}else le&&this.$d[le](Ke);return this.init(),this},$.set=function(Y,Q){return this.clone().$set(Y,Q)},$.get=function(Y){return this[x.p(Y)]()},$.add=function(Y,Q){var V,re=this;Y=Number(Y);var ae=x.p(Q),le=function($e){var xe=W(re);return x.w(xe.date(xe.date()+Math.round($e*Y)),re)};if(ae===p)return this.set(p,this.$M+Y);if(ae===D)return this.set(D,this.$y+Y);if(ae===f)return le(1);if(ae===T)return le(7);var Ke=(V={},V[g]=t,V[E]=s,V[d]=a,V)[ae]||1,Fe=this.$d.getTime()+Y*Ke;return x.w(Fe,this)},$.subtract=function(Y,Q){return this.add(-1*Y,Q)},$.format=function(Y){var Q=this,V=this.$locale();if(!this.isValid())return V.invalidDate||R;var re=Y||"YYYY-MM-DDTHH:mm:ssZ",ae=x.z(this),le=this.$H,Ke=this.$m,Fe=this.$M,$e=V.weekdays,xe=V.months,hn=V.meridiem,Hn=function(Je,en,vn,Vn){return Je&&(Je[en]||Je(Q,re))||vn[en].slice(0,Vn)},cn=function(Je){return x.s(le%12||12,Je,"0")},tn=hn||function(Je,en,vn){var Vn=Je<12?"AM":"PM";return vn?Vn.toLowerCase():Vn};return re.replace(P,function(Je,en){return en||function(vn){switch(vn){case"YY":return String(Q.$y).slice(-2);case"YYYY":return x.s(Q.$y,4,"0");case"M":return Fe+1;case"MM":return x.s(Fe+1,2,"0");case"MMM":return Hn(V.monthsShort,Fe,xe,3);case"MMMM":return Hn(xe,Fe);case"D":return Q.$D;case"DD":return x.s(Q.$D,2,"0");case"d":return String(Q.$W);case"dd":return Hn(V.weekdaysMin,Q.$W,$e,2);case"ddd":return Hn(V.weekdaysShort,Q.$W,$e,3);case"dddd":return $e[Q.$W];case"H":return String(le);case"HH":return x.s(le,2,"0");case"h":return cn(1);case"hh":return cn(2);case"a":return tn(le,Ke,!0);case"A":return tn(le,Ke,!1);case"m":return String(Ke);case"mm":return x.s(Ke,2,"0");case"s":return String(Q.$s);case"ss":return x.s(Q.$s,2,"0");case"SSS":return x.s(Q.$ms,3,"0");case"Z":return ae}return null}(Je)||ae.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(Y,Q,V){var re,ae=this,le=x.p(Q),Ke=W(Y),Fe=(Ke.utcOffset()-this.utcOffset())*t,$e=this-Ke,xe=function(){return x.m(ae,Ke)};switch(le){case D:re=xe()/12;break;case p:re=xe();break;case A:re=xe()/3;break;case T:re=($e-Fe)/6048e5;break;case f:re=($e-Fe)/864e5;break;case E:re=$e/s;break;case g:re=$e/t;break;case d:re=$e/a;break;default:re=$e}return V?re:x.a(re)},$.daysInMonth=function(){return this.endOf(p).$D},$.$locale=function(){return w[this.$L]},$.locale=function(Y,Q){if(!Y)return this.$L;var V=this.clone(),re=J(Y,Q,!0);return re&&(V.$L=re),V},$.clone=function(){return x.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},C}(),ie=z.prototype;return W.prototype=ie,[["$ms",l],["$s",d],["$m",g],["$H",E],["$W",f],["$M",p],["$y",D],["$D",K]].forEach(function(C){ie[C[1]]=function($){return this.$g($,C[0],C[1])}}),W.extend=function(C,$){return C.$i||(C($,z,W),C.$i=!0),W},W.locale=J,W.isDayjs=N,W.unix=function(C){return W(1e3*C)},W.en=w[y],W.Ls=w,W.p={},W})}(ho)),ho.exports}var HS=wS();const ui=Xk(HS);var Tr=function(){return Tr=Object.assign||function(e){for(var i,a=1,t=arguments.length;a<t;a++){i=arguments[a];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},Tr.apply(this,arguments)};function Yo(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a}function VS(e,i,a){if(arguments.length===2)for(var t=0,s=i.length,l;t<s;t++)(l||!(t in i))&&(l||(l=Array.prototype.slice.call(i,0,t)),l[t]=i[t]);return e.concat(l||Array.prototype.slice.call(i))}var co=function(e,i){return co=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(a[s]=t[s])},co(e,i)};function Cr(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");co(e,i);function a(){this.constructor=e}e.prototype=i===null?Object.create(i):(a.prototype=i.prototype,new a)}var we=function(){return we=Object.assign||function(e){for(var i,a=1,t=arguments.length;a<t;a++){i=arguments[a];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},we.apply(this,arguments)};function ut(e,i,a){if(arguments.length===2)for(var t=0,s=i.length,l;t<s;t++)(l||!(t in i))&&(l||(l=Array.prototype.slice.call(i,0,t)),l[t]=i[t]);return e.concat(l||Array.prototype.slice.call(i))}function nr(e,i){var a=i&&i.cache?i.cache:JS,t=i&&i.serializer?i.serializer:CS,s=i&&i.strategy?i.strategy:qS;return s(e,{cache:a,serializer:t})}function US(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Zk(e,i,a,t){var s=US(t)?t:a(t),l=i.get(s);return typeof l>"u"&&(l=e.call(this,t),i.set(s,l)),l}function Qk(e,i,a){var t=Array.prototype.slice.call(arguments,3),s=a(t),l=i.get(s);return typeof l>"u"&&(l=e.apply(this,t),i.set(s,l)),l}function Co(e,i,a,t,s){return a.bind(i,e,t,s)}function qS(e,i){var a=e.length===1?Zk:Qk;return Co(e,this,a,i.cache.create(),i.serializer)}function xS(e,i){return Co(e,this,Qk,i.cache.create(),i.serializer)}function YS(e,i){return Co(e,this,Zk,i.cache.create(),i.serializer)}var CS=function(){return JSON.stringify(arguments)},$S=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(i){return this.cache[i]},e.prototype.set=function(i,a){this.cache[i]=a},e}(),JS={create:function(){return new $S}},rr={variadic:xS,monadic:YS},Ao=function(e,i){return Ao=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(a[s]=t[s])},Ao(e,i)};function di(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");Ao(e,i);function a(){this.constructor=e}e.prototype=i===null?Object.create(i):(a.prototype=i.prototype,new a)}var ar=function(){return ar=Object.assign||function(e){for(var i,a=1,t=arguments.length;a<t;a++){i=arguments[a];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},ar.apply(this,arguments)};function WS(e,i){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]]);return a}function qs(e,i,a){if(arguments.length===2)for(var t=0,s=i.length,l;t<s;t++)(l||!(t in i))&&(l||(l=Array.prototype.slice.call(i,0,t)),l[t]=i[t]);return e.concat(l||Array.prototype.slice.call(i))}var ii=function(){return ii=Object.assign||function(e){for(var i,a=1,t=arguments.length;a<t;a++){i=arguments[a];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},ii.apply(this,arguments)},ce;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(ce||(ce={}));var Be;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Be||(Be={}));var mt;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(mt||(mt={}));function bg(e){return e.type===Be.literal}function zS(e){return e.type===Be.argument}function eE(e){return e.type===Be.number}function nE(e){return e.type===Be.date}function rE(e){return e.type===Be.time}function tE(e){return e.type===Be.select}function aE(e){return e.type===Be.plural}function XS(e){return e.type===Be.pound}function iE(e){return e.type===Be.tag}function sE(e){return!!(e&&typeof e=="object"&&e.type===mt.number)}function yo(e){return!!(e&&typeof e=="object"&&e.type===mt.dateTime)}var oE=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,ZS=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function QS(e){var i={};return e.replace(ZS,function(a){var t=a.length;switch(a[0]){case"G":i.era=t===4?"long":t===5?"narrow":"short";break;case"y":i.year=t===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=t===4?"long":t===5?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][t-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][t-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][t-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][t-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][t-1];break;case"s":i.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var qe=function(){return qe=Object.assign||function(e){for(var i,a=1,t=arguments.length;a<t;a++){i=arguments[a];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},qe.apply(this,arguments)},eI=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function nI(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(eI).filter(function(A){return A.length>0}),a=[],t=0,s=i;t<s.length;t++){var l=s[t],d=l.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var g=d[0],E=d.slice(1),f=0,T=E;f<T.length;f++){var p=T[f];if(p.length===0)throw new Error("Invalid number skeleton")}a.push({stem:g,options:E})}return a}function rI(e){return e.replace(/^(.*?)-/,"")}var Ng=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,lE=/^(@+)?(\+|#+)?[rs]?$/g,tI=/(\*)(0+)|(#+)(0+)|(0+)/g,uE=/^(0+)$/;function Sg(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(lE,function(a,t,s){return typeof s!="string"?(i.minimumSignificantDigits=t.length,i.maximumSignificantDigits=t.length):s==="+"?i.minimumSignificantDigits=t.length:t[0]==="#"?i.maximumSignificantDigits=t.length:(i.minimumSignificantDigits=t.length,i.maximumSignificantDigits=t.length+(typeof s=="string"?s.length:0)),""}),i}function dE(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function aI(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var a=e.slice(0,2);if(a==="+!"?(i.signDisplay="always",e=e.slice(2)):a==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!uE.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function Ig(e){var i={},a=dE(e);return a||i}function iI(e){for(var i={},a=0,t=e;a<t.length;a++){var s=t[a];switch(s.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=s.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=rI(s.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=qe(qe(qe({},i),{notation:"scientific"}),s.options.reduce(function(E,f){return qe(qe({},E),Ig(f))},{}));continue;case"engineering":i=qe(qe(qe({},i),{notation:"engineering"}),s.options.reduce(function(E,f){return qe(qe({},E),Ig(f))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(tI,function(E,f,T,p,A,D){if(f)i.minimumIntegerDigits=T.length;else{if(p&&A)throw new Error("We currently do not support maximum integer digits");if(D)throw new Error("We currently do not support exact integer digits")}return""});continue}if(uE.test(s.stem)){i.minimumIntegerDigits=s.stem.length;continue}if(Ng.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(Ng,function(E,f,T,p,A,D){return T==="*"?i.minimumFractionDigits=f.length:p&&p[0]==="#"?i.maximumFractionDigits=p.length:A&&D?(i.minimumFractionDigits=A.length,i.maximumFractionDigits=A.length+D.length):(i.minimumFractionDigits=f.length,i.maximumFractionDigits=f.length),""});var l=s.options[0];l==="w"?i=qe(qe({},i),{trailingZeroDisplay:"stripIfInteger"}):l&&(i=qe(qe({},i),Sg(l)));continue}if(lE.test(s.stem)){i=qe(qe({},i),Sg(s.stem));continue}var d=dE(s.stem);d&&(i=qe(qe({},i),d));var g=aI(s.stem);g&&(i=qe(qe({},i),g))}return i}var Qa={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function sI(e,i){for(var a="",t=0;t<e.length;t++){var s=e.charAt(t);if(s==="j"){for(var l=0;t+1<e.length&&e.charAt(t+1)===s;)l++,t++;var d=1+(l&1),g=l<2?1:3+(l>>1),E="a",f=oI(i);for((f=="H"||f=="k")&&(g=0);g-- >0;)a+=E;for(;d-- >0;)a=f+a}else s==="J"?a+="H":a+=s}return a}function oI(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var a=e.language,t;a!=="root"&&(t=e.maximize().region);var s=Qa[t||""]||Qa[a||""]||Qa["".concat(a,"-001")]||Qa["001"];return s[0]}var xs,lI=new RegExp("^".concat(oE.source,"*")),uI=new RegExp("".concat(oE.source,"*$"));function ye(e,i){return{start:e,end:i}}var dI=!!String.prototype.startsWith&&"_a".startsWith("a",1),gI=!!String.fromCodePoint,kI=!!Object.fromEntries,EI=!!String.prototype.codePointAt,vI=!!String.prototype.trimStart,fI=!!String.prototype.trimEnd,mI=!!Number.isSafeInteger,TI=mI?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Ro=!0;try{var pI=kE("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Ro=((xs=pI.exec("a"))===null||xs===void 0?void 0:xs[0])==="a"}catch{Ro=!1}var Og=dI?function(e,i,a){return e.startsWith(i,a)}:function(e,i,a){return e.slice(a,a+i.length)===i},_o=gI?String.fromCodePoint:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var a="",t=e.length,s=0,l;t>s;){if(l=e[s++],l>1114111)throw RangeError(l+" is not a valid code point");a+=l<65536?String.fromCharCode(l):String.fromCharCode(((l-=65536)>>10)+55296,l%1024+56320)}return a},Lg=kI?Object.fromEntries:function(e){for(var i={},a=0,t=e;a<t.length;a++){var s=t[a],l=s[0],d=s[1];i[l]=d}return i},gE=EI?function(e,i){return e.codePointAt(i)}:function(e,i){var a=e.length;if(!(i<0||i>=a)){var t=e.charCodeAt(i),s;return t<55296||t>56319||i+1===a||(s=e.charCodeAt(i+1))<56320||s>57343?t:(t-55296<<10)+(s-56320)+65536}},hI=vI?function(e){return e.trimStart()}:function(e){return e.replace(lI,"")},cI=fI?function(e){return e.trimEnd()}:function(e){return e.replace(uI,"")};function kE(e,i){return new RegExp(e,i)}var bo;if(Ro){var Kg=kE("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");bo=function(e,i){var a;Kg.lastIndex=i;var t=Kg.exec(e);return(a=t[1])!==null&&a!==void 0?a:""}}else bo=function(e,i){for(var a=[];;){var t=gE(e,i);if(t===void 0||EE(t)||_I(t))break;a.push(t),i+=t>=65536?2:1}return _o.apply(void 0,a)};var AI=function(){function e(i,a){a===void 0&&(a={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!a.ignoreTag,this.locale=a.locale,this.requiresOtherClause=!!a.requiresOtherClause,this.shouldParseSkeletons=!!a.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,a,t){for(var s=[];!this.isEOF();){var l=this.char();if(l===123){var d=this.parseArgument(i,t);if(d.err)return d;s.push(d.val)}else{if(l===125&&i>0)break;if(l===35&&(a==="plural"||a==="selectordinal")){var g=this.clonePosition();this.bump(),s.push({type:Be.pound,location:ye(g,this.clonePosition())})}else if(l===60&&!this.ignoreTag&&this.peek()===47){if(t)break;return this.error(ce.UNMATCHED_CLOSING_TAG,ye(this.clonePosition(),this.clonePosition()))}else if(l===60&&!this.ignoreTag&&No(this.peek()||0)){var d=this.parseTag(i,a);if(d.err)return d;s.push(d.val)}else{var d=this.parseLiteral(i,a);if(d.err)return d;s.push(d.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(i,a){var t=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Be.literal,value:"<".concat(s,"/>"),location:ye(t,this.clonePosition())},err:null};if(this.bumpIf(">")){var l=this.parseMessage(i+1,a,!0);if(l.err)return l;var d=l.val,g=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!No(this.char()))return this.error(ce.INVALID_TAG,ye(g,this.clonePosition()));var E=this.clonePosition(),f=this.parseTagName();return s!==f?this.error(ce.UNMATCHED_CLOSING_TAG,ye(E,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Be.tag,value:s,children:d,location:ye(t,this.clonePosition())},err:null}:this.error(ce.INVALID_TAG,ye(g,this.clonePosition())))}else return this.error(ce.UNCLOSED_TAG,ye(t,this.clonePosition()))}else return this.error(ce.INVALID_TAG,ye(t,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&RI(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,a){for(var t=this.clonePosition(),s="";;){var l=this.tryParseQuote(a);if(l){s+=l;continue}var d=this.tryParseUnquoted(i,a);if(d){s+=d;continue}var g=this.tryParseLeftAngleBracket();if(g){s+=g;continue}break}var E=ye(t,this.clonePosition());return{val:{type:Be.literal,value:s,location:E},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!yI(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var a=[this.char()];for(this.bump();!this.isEOF();){var t=this.char();if(t===39)if(this.peek()===39)a.push(39),this.bump();else{this.bump();break}else a.push(t);this.bump()}return _o.apply(void 0,a)},e.prototype.tryParseUnquoted=function(i,a){if(this.isEOF())return null;var t=this.char();return t===60||t===123||t===35&&(a==="plural"||a==="selectordinal")||t===125&&i>0?null:(this.bump(),_o(t))},e.prototype.parseArgument=function(i,a){var t=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,ye(t,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(ce.EMPTY_ARGUMENT,ye(t,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(ce.MALFORMED_ARGUMENT,ye(t,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,ye(t,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Be.argument,value:s,location:ye(t,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,ye(t,this.clonePosition())):this.parseArgumentOptions(i,a,s,t);default:return this.error(ce.MALFORMED_ARGUMENT,ye(t,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),a=this.offset(),t=bo(this.message,a),s=a+t.length;this.bumpTo(s);var l=this.clonePosition(),d=ye(i,l);return{value:t,location:d}},e.prototype.parseArgumentOptions=function(i,a,t,s){var l,d=this.clonePosition(),g=this.parseIdentifierIfPossible().value,E=this.clonePosition();switch(g){case"":return this.error(ce.EXPECT_ARGUMENT_TYPE,ye(d,E));case"number":case"date":case"time":{this.bumpSpace();var f=null;if(this.bumpIf(",")){this.bumpSpace();var T=this.clonePosition(),p=this.parseSimpleArgStyleIfPossible();if(p.err)return p;var A=cI(p.val);if(A.length===0)return this.error(ce.EXPECT_ARGUMENT_STYLE,ye(this.clonePosition(),this.clonePosition()));var D=ye(T,this.clonePosition());f={style:A,styleLocation:D}}var K=this.tryParseArgumentClose(s);if(K.err)return K;var R=ye(s,this.clonePosition());if(f&&Og(f==null?void 0:f.style,"::",0)){var S=hI(f.style.slice(2));if(g==="number"){var p=this.parseNumberSkeletonFromString(S,f.styleLocation);return p.err?p:{val:{type:Be.number,value:t,location:R,style:p.val},err:null}}else{if(S.length===0)return this.error(ce.EXPECT_DATE_TIME_SKELETON,R);var P=S;this.locale&&(P=sI(S,this.locale));var A={type:mt.dateTime,pattern:P,location:f.styleLocation,parsedOptions:this.shouldParseSkeletons?QS(P):{}},H=g==="date"?Be.date:Be.time;return{val:{type:H,value:t,location:R,style:A},err:null}}}return{val:{type:g==="number"?Be.number:g==="date"?Be.date:Be.time,value:t,location:R,style:(l=f==null?void 0:f.style)!==null&&l!==void 0?l:null},err:null}}case"plural":case"selectordinal":case"select":{var I=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(ce.EXPECT_SELECT_ARGUMENT_OPTIONS,ye(I,ii({},I)));this.bumpSpace();var Z=this.parseIdentifierIfPossible(),y=0;if(g!=="select"&&Z.value==="offset"){if(!this.bumpIf(":"))return this.error(ce.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ye(this.clonePosition(),this.clonePosition()));this.bumpSpace();var p=this.tryParseDecimalInteger(ce.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ce.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(p.err)return p;this.bumpSpace(),Z=this.parseIdentifierIfPossible(),y=p.val}var w=this.tryParsePluralOrSelectOptions(i,g,a,Z);if(w.err)return w;var K=this.tryParseArgumentClose(s);if(K.err)return K;var O=ye(s,this.clonePosition());return g==="select"?{val:{type:Be.select,value:t,options:Lg(w.val),location:O},err:null}:{val:{type:Be.plural,value:t,options:Lg(w.val),offset:y,pluralType:g==="plural"?"cardinal":"ordinal",location:O},err:null}}default:return this.error(ce.INVALID_ARGUMENT_TYPE,ye(d,E))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,ye(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,a=this.clonePosition();!this.isEOF();){var t=this.char();switch(t){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(ce.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,ye(s,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(a.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(a.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,a){var t=[];try{t=nI(i)}catch{return this.error(ce.INVALID_NUMBER_SKELETON,a)}return{val:{type:mt.number,tokens:t,location:a,parsedOptions:this.shouldParseSkeletons?iI(t):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,a,t,s){for(var l,d=!1,g=[],E=new Set,f=s.value,T=s.location;;){if(f.length===0){var p=this.clonePosition();if(a!=="select"&&this.bumpIf("=")){var A=this.tryParseDecimalInteger(ce.EXPECT_PLURAL_ARGUMENT_SELECTOR,ce.INVALID_PLURAL_ARGUMENT_SELECTOR);if(A.err)return A;T=ye(p,this.clonePosition()),f=this.message.slice(p.offset,this.offset())}else break}if(E.has(f))return this.error(a==="select"?ce.DUPLICATE_SELECT_ARGUMENT_SELECTOR:ce.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,T);f==="other"&&(d=!0),this.bumpSpace();var D=this.clonePosition();if(!this.bumpIf("{"))return this.error(a==="select"?ce.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:ce.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,ye(this.clonePosition(),this.clonePosition()));var K=this.parseMessage(i+1,a,t);if(K.err)return K;var R=this.tryParseArgumentClose(D);if(R.err)return R;g.push([f,{value:K.val,location:ye(D,this.clonePosition())}]),E.add(f),this.bumpSpace(),l=this.parseIdentifierIfPossible(),f=l.value,T=l.location}return g.length===0?this.error(a==="select"?ce.EXPECT_SELECT_ARGUMENT_SELECTOR:ce.EXPECT_PLURAL_ARGUMENT_SELECTOR,ye(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(ce.MISSING_OTHER_CLAUSE,ye(this.clonePosition(),this.clonePosition())):{val:g,err:null}},e.prototype.tryParseDecimalInteger=function(i,a){var t=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(t=-1);for(var l=!1,d=0;!this.isEOF();){var g=this.char();if(g>=48&&g<=57)l=!0,d=d*10+(g-48),this.bump();else break}var E=ye(s,this.clonePosition());return l?(d*=t,TI(d)?{val:d,err:null}:this.error(a,E)):this.error(i,E)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var a=gE(this.message,i);if(a===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return a},e.prototype.error=function(i,a){return{val:null,err:{kind:i,message:this.message,location:a}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Og(this.message,i,this.offset())){for(var a=0;a<i.length;a++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var a=this.offset(),t=this.message.indexOf(i,a);return t>=0?(this.bumpTo(t),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var a=this.offset();if(a===i)break;if(a>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&EE(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),a=this.offset(),t=this.message.charCodeAt(a+(i>=65536?2:1));return t??null},e}();function No(e){return e>=97&&e<=122||e>=65&&e<=90}function yI(e){return No(e)||e===47}function RI(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function EE(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function _I(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function So(e){e.forEach(function(i){if(delete i.location,tE(i)||aE(i))for(var a in i.options)delete i.options[a].location,So(i.options[a].value);else eE(i)&&sE(i.style)||(nE(i)||rE(i))&&yo(i.style)?delete i.style.location:iE(i)&&So(i.children)})}function bI(e,i){i===void 0&&(i={}),i=ii({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var a=new AI(e,i).parse();if(a.err){var t=SyntaxError(ce[a.err.kind]);throw t.location=a.err.location,t.originalMessage=a.err.message,t}return i!=null&&i.captureLocation||So(a.val),a.val}var sr;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(sr||(sr={}));var Kr=function(e){di(i,e);function i(a,t,s){var l=e.call(this,a)||this;return l.code=t,l.originalMessage=s,l}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),Dg=function(e){di(i,e);function i(a,t,s,l){return e.call(this,'Invalid values for "'.concat(a,'": "').concat(t,'". Options are "').concat(Object.keys(s).join('", "'),'"'),sr.INVALID_VALUE,l)||this}return i}(Kr),NI=function(e){di(i,e);function i(a,t,s){return e.call(this,'Value for "'.concat(a,'" must be of type ').concat(t),sr.INVALID_VALUE,s)||this}return i}(Kr),SI=function(e){di(i,e);function i(a,t){return e.call(this,'The intl string context variable "'.concat(a,'" was not provided to the string "').concat(t,'"'),sr.MISSING_VALUE,t)||this}return i}(Kr),En;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(En||(En={}));function II(e){return e.length<2?e:e.reduce(function(i,a){var t=i[i.length-1];return!t||t.type!==En.literal||a.type!==En.literal?i.push(a):t.value+=a.value,i},[])}function vE(e){return typeof e=="function"}function ti(e,i,a,t,s,l,d){if(e.length===1&&bg(e[0]))return[{type:En.literal,value:e[0].value}];for(var g=[],E=0,f=e;E<f.length;E++){var T=f[E];if(bg(T)){g.push({type:En.literal,value:T.value});continue}if(XS(T)){typeof l=="number"&&g.push({type:En.literal,value:a.getNumberFormat(i).format(l)});continue}var p=T.value;if(!(s&&p in s))throw new SI(p,d);var A=s[p];if(zS(T)){(!A||typeof A=="string"||typeof A=="number")&&(A=typeof A=="string"||typeof A=="number"?String(A):""),g.push({type:typeof A=="string"?En.literal:En.object,value:A});continue}if(nE(T)){var D=typeof T.style=="string"?t.date[T.style]:yo(T.style)?T.style.parsedOptions:void 0;g.push({type:En.literal,value:a.getDateTimeFormat(i,D).format(A)});continue}if(rE(T)){var D=typeof T.style=="string"?t.time[T.style]:yo(T.style)?T.style.parsedOptions:t.time.medium;g.push({type:En.literal,value:a.getDateTimeFormat(i,D).format(A)});continue}if(eE(T)){var D=typeof T.style=="string"?t.number[T.style]:sE(T.style)?T.style.parsedOptions:void 0;D&&D.scale&&(A=A*(D.scale||1)),g.push({type:En.literal,value:a.getNumberFormat(i,D).format(A)});continue}if(iE(T)){var K=T.children,R=T.value,S=s[R];if(!vE(S))throw new NI(R,"function",d);var P=ti(K,i,a,t,s,l),H=S(P.map(function(y){return y.value}));Array.isArray(H)||(H=[H]),g.push.apply(g,H.map(function(y){return{type:typeof y=="string"?En.literal:En.object,value:y}}))}if(tE(T)){var I=T.options[A]||T.options.other;if(!I)throw new Dg(T.value,A,Object.keys(T.options),d);g.push.apply(g,ti(I.value,i,a,t,s));continue}if(aE(T)){var I=T.options["=".concat(A)];if(!I){if(!Intl.PluralRules)throw new Kr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,sr.MISSING_INTL_API,d);var Z=a.getPluralRules(i,{type:T.pluralType}).select(A-(T.offset||0));I=T.options[Z]||T.options.other}if(!I)throw new Dg(T.value,A,Object.keys(T.options),d);g.push.apply(g,ti(I.value,i,a,t,s,A-(T.offset||0)));continue}}return II(g)}function OI(e,i){return i?ar(ar(ar({},e||{}),i||{}),Object.keys(e).reduce(function(a,t){return a[t]=ar(ar({},e[t]),i[t]||{}),a},{})):e}function LI(e,i){return i?Object.keys(e).reduce(function(a,t){return a[t]=OI(e[t],i[t]),a},ar({},e)):e}function Ys(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,a){e[i]=a}}}}}function KI(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:nr(function(){for(var i,a=[],t=0;t<arguments.length;t++)a[t]=arguments[t];return new((i=Intl.NumberFormat).bind.apply(i,qs([void 0],a,!1)))},{cache:Ys(e.number),strategy:rr.variadic}),getDateTimeFormat:nr(function(){for(var i,a=[],t=0;t<arguments.length;t++)a[t]=arguments[t];return new((i=Intl.DateTimeFormat).bind.apply(i,qs([void 0],a,!1)))},{cache:Ys(e.dateTime),strategy:rr.variadic}),getPluralRules:nr(function(){for(var i,a=[],t=0;t<arguments.length;t++)a[t]=arguments[t];return new((i=Intl.PluralRules).bind.apply(i,qs([void 0],a,!1)))},{cache:Ys(e.pluralRules),strategy:rr.variadic})}}var fE=function(){function e(i,a,t,s){a===void 0&&(a=e.defaultLocale);var l=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(E){var f=l.formatToParts(E);if(f.length===1)return f[0].value;var T=f.reduce(function(p,A){return!p.length||A.type!==En.literal||typeof p[p.length-1]!="string"?p.push(A.value):p[p.length-1]+=A.value,p},[]);return T.length<=1?T[0]||"":T},this.formatToParts=function(E){return ti(l.ast,l.locales,l.formatters,l.formats,E,void 0,l.message)},this.resolvedOptions=function(){var E;return{locale:((E=l.resolvedLocale)===null||E===void 0?void 0:E.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=a,this.resolvedLocale=e.resolveLocale(a),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=s||{};d.formatters;var g=WS(d,["formatters"]);this.ast=e.__parse(i,ar(ar({},g),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=LI(e.formats,t),this.formatters=s&&s.formatters||KI(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var a=Intl.NumberFormat.supportedLocalesOf(i);return a.length>0?new Intl.Locale(a[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=bI,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),xr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(xr||(xr={}));var aa=function(e){Cr(i,e);function i(a,t,s){var l=this,d=s?s instanceof Error?s:new Error(String(s)):void 0;return l=e.call(this,"[@formatjs/intl Error ".concat(a,"] ").concat(t,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,l.code=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(l,i),l}return i}(Error),DI=function(e){Cr(i,e);function i(a,t){return e.call(this,xr.UNSUPPORTED_FORMATTER,a,t)||this}return i}(aa),PI=function(e){Cr(i,e);function i(a,t){return e.call(this,xr.INVALID_CONFIG,a,t)||this}return i}(aa),Pg=function(e){Cr(i,e);function i(a,t){return e.call(this,xr.MISSING_DATA,a,t)||this}return i}(aa),wn=function(e){Cr(i,e);function i(a,t,s){var l=e.call(this,xr.FORMAT_ERROR,"".concat(a,`
Locale: `).concat(t,`
`),s)||this;return l.locale=t,l}return i}(aa),Cs=function(e){Cr(i,e);function i(a,t,s,l){var d=e.call(this,"".concat(a,`
MessageID: `).concat(s==null?void 0:s.id,`
Default Message: `).concat(s==null?void 0:s.defaultMessage,`
Description: `).concat(s==null?void 0:s.description,`
`),t,l)||this;return d.descriptor=s,d.locale=t,d}return i}(wn),FI=function(e){Cr(i,e);function i(a,t){var s=e.call(this,xr.MISSING_TRANSLATION,'Missing message: "'.concat(a.id,'" for locale "').concat(t,'", using ').concat(a.defaultMessage?"default message (".concat(typeof a.defaultMessage=="string"?a.defaultMessage:a.defaultMessage.map(function(l){var d;return(d=l.value)!==null&&d!==void 0?d:JSON.stringify(l)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=a,s}return i}(aa);function MI(e,i,a){if(a===void 0&&(a=Error),!e)throw new a(i)}function ht(e,i,a){return a===void 0&&(a={}),i.reduce(function(t,s){return s in e?t[s]=e[s]:s in a&&(t[s]=a[s]),t},{})}var GI=function(e){},BI=function(e){},mE={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:GI,onWarn:BI};function TE(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Ur(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,a){e[i]=a}}}}}function jI(e){e===void 0&&(e=TE());var i=Intl.RelativeTimeFormat,a=Intl.ListFormat,t=Intl.DisplayNames,s=nr(function(){for(var g,E=[],f=0;f<arguments.length;f++)E[f]=arguments[f];return new((g=Intl.DateTimeFormat).bind.apply(g,ut([void 0],E,!1)))},{cache:Ur(e.dateTime),strategy:rr.variadic}),l=nr(function(){for(var g,E=[],f=0;f<arguments.length;f++)E[f]=arguments[f];return new((g=Intl.NumberFormat).bind.apply(g,ut([void 0],E,!1)))},{cache:Ur(e.number),strategy:rr.variadic}),d=nr(function(){for(var g,E=[],f=0;f<arguments.length;f++)E[f]=arguments[f];return new((g=Intl.PluralRules).bind.apply(g,ut([void 0],E,!1)))},{cache:Ur(e.pluralRules),strategy:rr.variadic});return{getDateTimeFormat:s,getNumberFormat:l,getMessageFormat:nr(function(g,E,f,T){return new fE(g,E,f,we({formatters:{getNumberFormat:l,getDateTimeFormat:s,getPluralRules:d}},T||{}))},{cache:Ur(e.message),strategy:rr.variadic}),getRelativeTimeFormat:nr(function(){for(var g=[],E=0;E<arguments.length;E++)g[E]=arguments[E];return new(i.bind.apply(i,ut([void 0],g,!1)))},{cache:Ur(e.relativeTime),strategy:rr.variadic}),getPluralRules:d,getListFormat:nr(function(){for(var g=[],E=0;E<arguments.length;E++)g[E]=arguments[E];return new(a.bind.apply(a,ut([void 0],g,!1)))},{cache:Ur(e.list),strategy:rr.variadic}),getDisplayNames:nr(function(){for(var g=[],E=0;E<arguments.length;E++)g[E]=arguments[E];return new(t.bind.apply(t,ut([void 0],g,!1)))},{cache:Ur(e.displayNames),strategy:rr.variadic})}}function $o(e,i,a,t){var s=e&&e[i],l;if(s&&(l=s[a]),l)return l;t(new DI("No ".concat(i," format named: ").concat(a)))}function ei(e,i){return Object.keys(e).reduce(function(a,t){return a[t]=we({timeZone:i},e[t]),a},{})}function Fg(e,i){var a=Object.keys(we(we({},e),i));return a.reduce(function(t,s){return t[s]=we(we({},e[s]||{}),i[s]||{}),t},{})}function Mg(e,i){if(!i)return e;var a=fE.formats;return we(we(we({},a),e),{date:Fg(ei(a.date,i),ei(e.date||{},i)),time:Fg(ei(a.time,i),ei(e.time||{},i))})}var Io=function(e,i,a,t,s){var l=e.locale,d=e.formats,g=e.messages,E=e.defaultLocale,f=e.defaultFormats,T=e.fallbackOnEmptyString,p=e.onError,A=e.timeZone,D=e.defaultRichTextElements;a===void 0&&(a={id:""});var K=a.id,R=a.defaultMessage;MI(!!K,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var S=String(K),P=g&&Object.prototype.hasOwnProperty.call(g,S)&&g[S];if(Array.isArray(P)&&P.length===1&&P[0].type===Be.literal)return P[0].value;if(!t&&P&&typeof P=="string"&&!D)return P.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=we(we({},D),t||{}),d=Mg(d,A),f=Mg(f,A),!P){if(T===!1&&P==="")return P;if((!R||l&&l.toLowerCase()!==E.toLowerCase())&&p(new FI(a,l)),R)try{var H=i.getMessageFormat(R,E,f,s);return H.format(t)}catch(I){return p(new Cs('Error formatting default message for: "'.concat(S,'", rendering default message verbatim'),l,a,I)),typeof R=="string"?R:S}return S}try{var H=i.getMessageFormat(P,l,d,we({formatters:i},s||{}));return H.format(t)}catch(I){p(new Cs('Error formatting message: "'.concat(S,'", using ').concat(R?"default message":"id"," as fallback."),l,a,I))}if(R)try{var H=i.getMessageFormat(R,E,f,s);return H.format(t)}catch(I){p(new Cs('Error formatting the default message for: "'.concat(S,'", rendering message verbatim'),l,a,I))}return typeof P=="string"?P:typeof R=="string"?R:S},wI=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function ia(e,i,a,t){var s=e.locale,l=e.formats,d=e.onError,g=e.timeZone;t===void 0&&(t={});var E=t.format,f=we(we({},g&&{timeZone:g}),E&&$o(l,i,E,d)),T=ht(t,wI,f);return i==="time"&&!T.hour&&!T.minute&&!T.second&&!T.timeStyle&&!T.dateStyle&&(T=we(we({},T),{hour:"numeric",minute:"numeric"})),a(s,T)}function HI(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var s=a[0],l=a[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return ia(e,"date",i,d).format(g)}catch(E){e.onError(new wn("Error formatting date.",e.locale,E))}return String(g)}function VI(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var s=a[0],l=a[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return ia(e,"time",i,d).format(g)}catch(E){e.onError(new wn("Error formatting time.",e.locale,E))}return String(g)}function UI(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var s=a[0],l=a[1],d=a[2],g=d===void 0?{}:d,E=typeof s=="string"?new Date(s||0):s,f=typeof l=="string"?new Date(l||0):l;try{return ia(e,"dateTimeRange",i,g).formatRange(E,f)}catch(T){e.onError(new wn("Error formatting date time range.",e.locale,T))}return String(E)}function qI(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var s=a[0],l=a[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return ia(e,"date",i,d).formatToParts(g)}catch(E){e.onError(new wn("Error formatting date.",e.locale,E))}return[]}function xI(e,i){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var s=a[0],l=a[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return ia(e,"time",i,d).formatToParts(g)}catch(E){e.onError(new wn("Error formatting time.",e.locale,E))}return[]}var YI=["style","type","fallback","languageDisplay"];function CI(e,i,a,t){var s=e.locale,l=e.onError,d=Intl.DisplayNames;d||l(new Kr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,sr.MISSING_INTL_API));var g=ht(t,YI);try{return i(s,g).of(a)}catch(E){l(new wn("Error formatting display name.",s,E))}}var $I=["type","style"],Gg=Date.now();function JI(e){return"".concat(Gg,"_").concat(e,"_").concat(Gg)}function WI(e,i,a,t){t===void 0&&(t={});var s=pE(e,i,a,t).reduce(function(l,d){var g=d.value;return typeof g!="string"?l.push(g):typeof l[l.length-1]=="string"?l[l.length-1]+=g:l.push(g),l},[]);return s.length===1?s[0]:s.length===0?"":s}function pE(e,i,a,t){var s=e.locale,l=e.onError;t===void 0&&(t={});var d=Intl.ListFormat;d||l(new Kr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,sr.MISSING_INTL_API));var g=ht(t,$I);try{var E={},f=a.map(function(T,p){if(typeof T=="object"){var A=JI(p);return E[A]=T,A}return String(T)});return i(s,g).formatToParts(f).map(function(T){return T.type==="literal"?T:we(we({},T),{value:E[T.value]||T.value})})}catch(T){l(new wn("Error formatting list.",s,T))}return a}var zI=["type"];function XI(e,i,a,t){var s=e.locale,l=e.onError;t===void 0&&(t={}),Intl.PluralRules||l(new Kr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,sr.MISSING_INTL_API));var d=ht(t,zI);try{return i(s,d).select(a)}catch(g){l(new wn("Error formatting plural.",s,g))}return"other"}var ZI=["numeric","style"];function QI(e,i,a){var t=e.locale,s=e.formats,l=e.onError;a===void 0&&(a={});var d=a.format,g=!!d&&$o(s,"relative",d,l)||{},E=ht(a,ZI,g);return i(t,E)}function eO(e,i,a,t,s){s===void 0&&(s={}),t||(t="second");var l=Intl.RelativeTimeFormat;l||e.onError(new Kr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,sr.MISSING_INTL_API));try{return QI(e,i,s).format(a,t)}catch(d){e.onError(new wn("Error formatting relative time.",e.locale,d))}return String(a)}var nO=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function hE(e,i,a){var t=e.locale,s=e.formats,l=e.onError;a===void 0&&(a={});var d=a.format,g=d&&$o(s,"number",d,l)||{},E=ht(a,nO,g);return i(t,E)}function rO(e,i,a,t){t===void 0&&(t={});try{return hE(e,i,t).format(a)}catch(s){e.onError(new wn("Error formatting number.",e.locale,s))}return String(a)}function tO(e,i,a,t){t===void 0&&(t={});try{return hE(e,i,t).formatToParts(a)}catch(s){e.onError(new wn("Error formatting number.",e.locale,s))}return[]}function aO(e){var i=e[Object.keys(e)[0]];return typeof i=="string"}function iO(e){e.onWarn&&e.defaultRichTextElements&&aO(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function sO(e,i){var a=jI(i),t=we(we({},mE),e),s=t.locale,l=t.defaultLocale,d=t.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&d?d(new Pg('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&d&&d(new Pg('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new PI('"locale" was not configured, using "'.concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),iO(t),we(we({},t),{formatters:a,formatNumber:rO.bind(null,t,a.getNumberFormat),formatNumberToParts:tO.bind(null,t,a.getNumberFormat),formatRelativeTime:eO.bind(null,t,a.getRelativeTimeFormat),formatDate:HI.bind(null,t,a.getDateTimeFormat),formatDateToParts:qI.bind(null,t,a.getDateTimeFormat),formatTime:VI.bind(null,t,a.getDateTimeFormat),formatDateTimeRange:UI.bind(null,t,a.getDateTimeFormat),formatTimeToParts:xI.bind(null,t,a.getDateTimeFormat),formatPlural:XI.bind(null,t,a.getPluralRules),formatMessage:Io.bind(null,t,a),$t:Io.bind(null,t,a),formatList:WI.bind(null,t,a.getListFormat),formatListToParts:pE.bind(null,t,a.getListFormat),formatDisplayName:CI.bind(null,t,a.getDisplayNames)})}function oO(e,i,a){if(a===void 0&&(a=Error),!e)throw new a(i)}function lO(e){oO(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var uO=Tr(Tr({},mE),{textComponent:F.Fragment});function dO(e){return function(i){return e(F.Children.toArray(i))}}var Bg={exports:{}},Se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function gO(){if(jg)return Se;jg=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,a=e?Symbol.for("react.portal"):60106,t=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,g=e?Symbol.for("react.context"):60110,E=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,T=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,A=e?Symbol.for("react.suspense_list"):60120,D=e?Symbol.for("react.memo"):60115,K=e?Symbol.for("react.lazy"):60116,R=e?Symbol.for("react.block"):60121,S=e?Symbol.for("react.fundamental"):60117,P=e?Symbol.for("react.responder"):60118,H=e?Symbol.for("react.scope"):60119;function I(y){if(typeof y=="object"&&y!==null){var w=y.$$typeof;switch(w){case i:switch(y=y.type,y){case E:case f:case t:case l:case s:case p:return y;default:switch(y=y&&y.$$typeof,y){case g:case T:case K:case D:case d:return y;default:return w}}case a:return w}}}function Z(y){return I(y)===f}return Se.AsyncMode=E,Se.ConcurrentMode=f,Se.ContextConsumer=g,Se.ContextProvider=d,Se.Element=i,Se.ForwardRef=T,Se.Fragment=t,Se.Lazy=K,Se.Memo=D,Se.Portal=a,Se.Profiler=l,Se.StrictMode=s,Se.Suspense=p,Se.isAsyncMode=function(y){return Z(y)||I(y)===E},Se.isConcurrentMode=Z,Se.isContextConsumer=function(y){return I(y)===g},Se.isContextProvider=function(y){return I(y)===d},Se.isElement=function(y){return typeof y=="object"&&y!==null&&y.$$typeof===i},Se.isForwardRef=function(y){return I(y)===T},Se.isFragment=function(y){return I(y)===t},Se.isLazy=function(y){return I(y)===K},Se.isMemo=function(y){return I(y)===D},Se.isPortal=function(y){return I(y)===a},Se.isProfiler=function(y){return I(y)===l},Se.isStrictMode=function(y){return I(y)===s},Se.isSuspense=function(y){return I(y)===p},Se.isValidElementType=function(y){return typeof y=="string"||typeof y=="function"||y===t||y===f||y===l||y===s||y===p||y===A||typeof y=="object"&&y!==null&&(y.$$typeof===K||y.$$typeof===D||y.$$typeof===d||y.$$typeof===g||y.$$typeof===T||y.$$typeof===S||y.$$typeof===P||y.$$typeof===H||y.$$typeof===R)},Se.typeOf=I,Se}var wg;function kO(){return wg||(wg=1,Bg.exports=gO()),Bg.exports}var $s,Hg;function EO(){if(Hg)return $s;Hg=1;var e=kO(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=t,l[e.Memo]=s;function d(K){return e.isMemo(K)?s:l[K.$$typeof]||i}var g=Object.defineProperty,E=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,T=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,A=Object.prototype;function D(K,R,S){if(typeof R!="string"){if(A){var P=p(R);P&&P!==A&&D(K,P,S)}var H=E(R);f&&(H=H.concat(f(R)));for(var I=d(K),Z=d(R),y=0;y<H.length;++y){var w=H[y];if(!a[w]&&!(S&&S[w])&&!(Z&&Z[w])&&!(I&&I[w])){var O=T(R,w);try{g(K,w,O)}catch{}}}}return K}return $s=D,$s}EO();var Jo=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=F.createContext(null)):F.createContext(null);Jo.Consumer;Jo.Provider;var vO=Jo;function cE(){var e=F.useContext(vO);return lO(e),e}var Oo;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Oo||(Oo={}));var Lo;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Lo||(Lo={}));function AE(e){var i=function(a){var t=cE(),s=a.value,l=a.children,d=Yo(a,["value","children"]),g=typeof s=="string"?new Date(s||0):s,E=e==="formatDate"?t.formatDateToParts(g,d):t.formatTimeToParts(g,d);return l(E)};return i.displayName=Lo[e],i}function sa(e){var i=function(a){var t=cE(),s=a.value,l=a.children,d=Yo(a,["value","children"]),g=t[e](s,d);if(typeof l=="function")return l(g);var E=t.textComponent||F.Fragment;return F.createElement(E,null,g)};return i.displayName=Oo[e],i}function yE(e){return e&&Object.keys(e).reduce(function(i,a){var t=e[a];return i[a]=vE(t)?dO(t):t,i},{})}var Vg=function(e,i,a,t){for(var s=[],l=4;l<arguments.length;l++)s[l-4]=arguments[l];var d=yE(t),g=Io.apply(void 0,VS([e,i,a,d],s,!1));return Array.isArray(g)?F.Children.toArray(g):g},fO=function(e,i){var a=e.defaultRichTextElements,t=Yo(e,["defaultRichTextElements"]),s=yE(a),l=sO(Tr(Tr(Tr({},uO),t),{defaultRichTextElements:s}),i),d={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:s};return Tr(Tr({},l),{formatMessage:Vg.bind(null,d,l.formatters),$t:Vg.bind(null,d,l.formatters)})};sa("formatDate");sa("formatTime");sa("formatNumber");sa("formatList");sa("formatDisplayName");AE("formatDate");AE("formatTime");function Wo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ko={exports:{}},mO=Ko.exports,Ug;function TO(){return Ug||(Ug=1,function(e,i){(function(a,t){e.exports=t()})(mO,function(){var a="minute",t=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(l,d,g){var E=d.prototype;g.utc=function(R){var S={date:R,utc:!0,args:arguments};return new d(S)},E.utc=function(R){var S=g(this.toDate(),{locale:this.$L,utc:!0});return R?S.add(this.utcOffset(),a):S},E.local=function(){return g(this.toDate(),{locale:this.$L,utc:!1})};var f=E.parse;E.parse=function(R){R.utc&&(this.$u=!0),this.$utils().u(R.$offset)||(this.$offset=R.$offset),f.call(this,R)};var T=E.init;E.init=function(){if(this.$u){var R=this.$d;this.$y=R.getUTCFullYear(),this.$M=R.getUTCMonth(),this.$D=R.getUTCDate(),this.$W=R.getUTCDay(),this.$H=R.getUTCHours(),this.$m=R.getUTCMinutes(),this.$s=R.getUTCSeconds(),this.$ms=R.getUTCMilliseconds()}else T.call(this)};var p=E.utcOffset;E.utcOffset=function(R,S){var P=this.$utils().u;if(P(R))return this.$u?0:P(this.$offset)?p.call(this):this.$offset;if(typeof R=="string"&&(R=function(y){y===void 0&&(y="");var w=y.match(t);if(!w)return null;var O=(""+w[0]).match(s)||["-",0,0],N=O[0],J=60*+O[1]+ +O[2];return J===0?0:N==="+"?J:-J}(R),R===null))return this;var H=Math.abs(R)<=16?60*R:R,I=this;if(S)return I.$offset=H,I.$u=R===0,I;if(R!==0){var Z=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(I=this.local().add(H+Z,a)).$offset=H,I.$x.$localOffset=Z}else I=this.utc();return I};var A=E.format;E.format=function(R){var S=R||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return A.call(this,S)},E.valueOf=function(){var R=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*R},E.isUTC=function(){return!!this.$u},E.toISOString=function(){return this.toDate().toISOString()},E.toString=function(){return this.toDate().toUTCString()};var D=E.toDate;E.toDate=function(R){return R==="s"&&this.$offset?g(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():D.call(this)};var K=E.diff;E.diff=function(R,S,P){if(R&&this.$u===R.$u)return K.call(this,R,S,P);var H=this.local(),I=g(R).local();return K.call(H,I,S,P)}}})}(Ko)),Ko.exports}var pO=TO();const hO=Wo(pO);var Do={exports:{}},cO=Do.exports,qg;function AO(){return qg||(qg=1,function(e,i){(function(a,t){e.exports=t()})(cO,function(){var a,t,s=1e3,l=6e4,d=36e5,g=864e5,E=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=31536e6,T=2628e6,p=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,A={years:f,months:T,days:g,hours:d,minutes:l,seconds:s,milliseconds:1,weeks:6048e5},D=function(w){return w instanceof Z},K=function(w,O,N){return new Z(w,N,O.$l)},R=function(w){return t.p(w)+"s"},S=function(w){return w<0},P=function(w){return S(w)?Math.ceil(w):Math.floor(w)},H=function(w){return Math.abs(w)},I=function(w,O){return w?S(w)?{negative:!0,format:""+H(w)+O}:{negative:!1,format:""+w+O}:{negative:!1,format:""}},Z=function(){function w(N,J,W){var x=this;if(this.$d={},this.$l=W,N===void 0&&(this.$ms=0,this.parseFromMilliseconds()),J)return K(N*A[R(J)],this);if(typeof N=="number")return this.$ms=N,this.parseFromMilliseconds(),this;if(typeof N=="object")return Object.keys(N).forEach(function(C){x.$d[R(C)]=N[C]}),this.calMilliseconds(),this;if(typeof N=="string"){var z=N.match(p);if(z){var ie=z.slice(2).map(function(C){return C!=null?Number(C):0});return this.$d.years=ie[0],this.$d.months=ie[1],this.$d.weeks=ie[2],this.$d.days=ie[3],this.$d.hours=ie[4],this.$d.minutes=ie[5],this.$d.seconds=ie[6],this.calMilliseconds(),this}}return this}var O=w.prototype;return O.calMilliseconds=function(){var N=this;this.$ms=Object.keys(this.$d).reduce(function(J,W){return J+(N.$d[W]||0)*A[W]},0)},O.parseFromMilliseconds=function(){var N=this.$ms;this.$d.years=P(N/f),N%=f,this.$d.months=P(N/T),N%=T,this.$d.days=P(N/g),N%=g,this.$d.hours=P(N/d),N%=d,this.$d.minutes=P(N/l),N%=l,this.$d.seconds=P(N/s),N%=s,this.$d.milliseconds=N},O.toISOString=function(){var N=I(this.$d.years,"Y"),J=I(this.$d.months,"M"),W=+this.$d.days||0;this.$d.weeks&&(W+=7*this.$d.weeks);var x=I(W,"D"),z=I(this.$d.hours,"H"),ie=I(this.$d.minutes,"M"),C=this.$d.seconds||0;this.$d.milliseconds&&(C+=this.$d.milliseconds/1e3,C=Math.round(1e3*C)/1e3);var $=I(C,"S"),Y=N.negative||J.negative||x.negative||z.negative||ie.negative||$.negative,Q=z.format||ie.format||$.format?"T":"",V=(Y?"-":"")+"P"+N.format+J.format+x.format+Q+z.format+ie.format+$.format;return V==="P"||V==="-P"?"P0D":V},O.toJSON=function(){return this.toISOString()},O.format=function(N){var J=N||"YYYY-MM-DDTHH:mm:ss",W={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return J.replace(E,function(x,z){return z||String(W[x])})},O.as=function(N){return this.$ms/A[R(N)]},O.get=function(N){var J=this.$ms,W=R(N);return W==="milliseconds"?J%=1e3:J=W==="weeks"?P(J/A[W]):this.$d[W],J||0},O.add=function(N,J,W){var x;return x=J?N*A[R(J)]:D(N)?N.$ms:K(N,this).$ms,K(this.$ms+x*(W?-1:1),this)},O.subtract=function(N,J){return this.add(N,J,!0)},O.locale=function(N){var J=this.clone();return J.$l=N,J},O.clone=function(){return K(this.$ms,this)},O.humanize=function(N){return a().add(this.$ms,"ms").locale(this.$l).fromNow(!N)},O.valueOf=function(){return this.asMilliseconds()},O.milliseconds=function(){return this.get("milliseconds")},O.asMilliseconds=function(){return this.as("milliseconds")},O.seconds=function(){return this.get("seconds")},O.asSeconds=function(){return this.as("seconds")},O.minutes=function(){return this.get("minutes")},O.asMinutes=function(){return this.as("minutes")},O.hours=function(){return this.get("hours")},O.asHours=function(){return this.as("hours")},O.days=function(){return this.get("days")},O.asDays=function(){return this.as("days")},O.weeks=function(){return this.get("weeks")},O.asWeeks=function(){return this.as("weeks")},O.months=function(){return this.get("months")},O.asMonths=function(){return this.as("months")},O.years=function(){return this.get("years")},O.asYears=function(){return this.as("years")},w}(),y=function(w,O,N){return w.add(O.years()*N,"y").add(O.months()*N,"M").add(O.days()*N,"d").add(O.hours()*N,"h").add(O.minutes()*N,"m").add(O.seconds()*N,"s").add(O.milliseconds()*N,"ms")};return function(w,O,N){a=N,t=N().$utils(),N.duration=function(x,z){var ie=N.locale();return K(x,{$l:ie},z)},N.isDuration=D;var J=O.prototype.add,W=O.prototype.subtract;O.prototype.add=function(x,z){return D(x)?y(this,x,1):J.bind(this)(x,z)},O.prototype.subtract=function(x,z){return D(x)?y(this,x,-1):W.bind(this)(x,z)}}})}(Do)),Do.exports}var yO=AO();const RO=Wo(yO);var Po={exports:{}},_O=Po.exports,xg;function bO(){return xg||(xg=1,function(e,i){(function(a,t){e.exports=t()})(_O,function(){var a="day";return function(t,s,l){var d=function(f){return f.add(4-f.isoWeekday(),a)},g=s.prototype;g.isoWeekYear=function(){return d(this).year()},g.isoWeek=function(f){if(!this.$utils().u(f))return this.add(7*(f-this.isoWeek()),a);var T,p,A,D,K=d(this),R=(T=this.isoWeekYear(),p=this.$u,A=(p?l.utc:l)().year(T).startOf("year"),D=4-A.isoWeekday(),A.isoWeekday()>4&&(D+=7),A.add(D,a));return K.diff(R,"week")+1},g.isoWeekday=function(f){return this.$utils().u(f)?this.day()||7:this.day(this.day()%7?f:f-7)};var E=g.startOf;g.startOf=function(f,T){var p=this.$utils(),A=!!p.u(T)||T;return p.p(f)==="isoweek"?A?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):E.bind(this)(f,T)}}})}(Po)),Po.exports}var NO=bO();const SO=Wo(NO);var Fo={exports:{}},IO=Fo.exports,Yg;function OO(){return Yg||(Yg=1,function(e,i){(function(a,t){e.exports=t(ui)})(IO,function(a){function t(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var s=t(a),l={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(l,null,!0),l})}(Fo)),Fo.exports}OO();const LO=TE(),RE=e=>fO({locale:"nb-NO",messages:e},LO),_E={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};ui.extend(hO);ui.extend(SO);ui.extend(RO);RE(_E);RE(_E);var Cg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var $g;function KO(){return $g||($g=1,function(e){(function(){var i={}.hasOwnProperty;function a(){for(var l="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(l=s(l,t.call(this,g)))}return l}function t(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return a.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var g in l)i.call(l,g)&&l[g]&&(d=s(d,this&&this[g]||g));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(a.default=a,e.exports=a):window.classNames=a})()}(Cg)),Cg.exports}var DO=KO();const PO=Xk(DO),FO="_clipboard_1lghs_1",MO="_clipboard__button_1lghs_6",GO="_clipboard__button_1lghs_6",BO="_showTooltip_1lghs_1",jO="_clipboard__kopiert_1lghs_48",wO="_clipboard__kopiert_1lghs_48",HO="_clipboard__animationContainer_1lghs_57",VO="_clipboard__animationContainer_1lghs_57",UO="_clipboard__animate_1lghs_60",qO="_clipboard__animate_1lghs_60",xO="_fadeInOut_1lghs_1",YO={clipboard:FO,clipboard__button:MO,clipboardButton:GO,showTooltip:BO,clipboard__kopiert:jO,clipboardKopiert:wO,clipboard__animationContainer:HO,clipboardAnimationContainer:VO,clipboard__animate:UO,clipboardAnimate:qO,fadeInOut:xO};PO.bind(YO);const CO="_autocompleteSuggestion__substring_mf7v0_1",$O="_autocompleteSuggestion__substring_mf7v0_1",JO="_autocompleteSuggestion__inner_mf7v0_4",WO="_autocompleteSuggestion__inner_mf7v0_4",zO="_autocompleteSuggestion--active_mf7v0_12",Ct={autocompleteSuggestion__substring:CO,autocompleteSuggestionSubstring:$O,autocompleteSuggestion__inner:JO,autocompleteSuggestionInner:WO,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_mf7v0_12",autocompleteSuggestionActive:zO};class XO extends q.Component{constructor(i){super(i),this.state={value:i.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:i}=this.props,{value:a}=this.state;i(a)}onMouseMove(){const{setSuggestionIndex:i,index:a}=this.props;i(a)}render(){const{match:i,active:a,avoidBlur:t,id:s}=this.props,{value:l}=this.state.value,d=l.toLowerCase().startsWith(i.toLowerCase());return mr.jsx("li",{id:s,role:"option","aria-selected":a,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:t,onMouseDown:t,onKeyDown:t,className:"autocompleteSuggestion typo-normal",children:d?mr.jsxs("span",{className:`${Ct.autocompleteSuggestion__inner} ${a?Ct["autocompleteSuggestion--active"]:""}`,children:[l.substring(0,i.length),mr.jsx("span",{className:Ct.autocompleteSuggestion__substring,children:l.substring(i.length)})]}):mr.jsx("span",{className:`${Ct.autocompleteSuggestion__inner} ${a?Ct["autocompleteSuggestion--active"]:""}`,children:l})})}}const ZO="_autocomplete_9dlnp_1",QO="_autocomplete__suggestions_9dlnp_27",eL="_autocomplete__suggestions_9dlnp_27",nL="_autocomplete__suggestions--hidden_9dlnp_31",Js={autocomplete:ZO,autocomplete__suggestions:QO,autocompleteSuggestions:eL,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_9dlnp_31",autocompleteSuggestionsHidden:nL};class EK extends q.Component{constructor(i){super(i),cg(this,"input"),cg(this,"inputRef"),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=a=>{this.input=a},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null}))}onChange(i){const{onChange:a}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),a(i)}onSearchButtonClick(i){const{onSearchButtonClick:a}=this.props;i.preventDefault(),a&&a()}onKeyDown(i){const{shouldShowSuggestions:a}=this.state;let{activeSuggestionIndex:t}=this.state;const{suggestions:s}=this.props,l=t>-1;switch(this.setState({setAriaActiveDescendant:i.keyCode===38||i.keyCode===40}),i.keyCode){case 9:l&&a&&this.setValue(s[t]);break;case 13:l&&a?(i.preventDefault(),this.setValue(s[t])):a&&s.length===1?this.setValue(s[0]):this.setState({shouldShowSuggestions:!1});break;case 27:a&&s.length>0&&(i.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:a&&(i.preventDefault(),t=t-1===-2?-1:t-1,this.setState({activeSuggestionIndex:t}));break;case 40:a&&(i.preventDefault(),t=t+1===s.length?s.length-1:t+1,this.setState({activeSuggestionIndex:t}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const i=setTimeout(()=>{const{shouldBlur:t}=this.state;t&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:i});const{onBlur:a}=this.props;a&&a()}setSuggestionIndex(i){this.setState({activeSuggestionIndex:i}),this.clearBlurDelay()}setValue(i){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:a}=this.props;a(i)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:i,id:a,ariaLabel:t,placeholder:s,value:l,name:d,shouldFocusOnMount:g,isLoading:E}=this.props,{activeSuggestionIndex:f,setAriaActiveDescendant:T,hasFocus:p,shouldShowSuggestions:A}=this.state,D=p&&A&&i.length>0,K=T&&f>-1?`${a}-item-${f}`:void 0;return mr.jsxs("div",{className:`${Js.autocomplete} autocomplete`,"aria-expanded":D,"aria-owns":`${a}-suggestions`,"aria-haspopup":"listbox",children:[mr.jsx(uo,{variant:"primary",id:a,name:d,"aria-label":t,"aria-autocomplete":"list","aria-controls":`${a}-suggestions`,"aria-activedescendant":K,placeholder:s,value:l,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:R=>{this.inputRef=R},className:"typo-normal",autoFocus:g,label:t,hideLabel:!0,children:mr.jsx(uo.Button,{loading:E,onClick:this.onSearchButtonClick})}),mr.jsx("ul",{id:`${a}-suggestions`,role:"listbox",className:D?Js.autocomplete__suggestions:Js["autocomplete__suggestions--hidden"],children:D&&i.map((R,S)=>mr.jsx(XO,{id:`${a}-item-${S}`,index:S,value:R,match:l,active:S===f,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},R.key))})]})}}q.createContext({});ln(ta);const rL=e=>{const i=e.aktiveNaturalytelser.reduce((t,s)=>{const l=s.type;return l in t?{...t,[l]:[...t[l],s]}:{...t,[l]:[s]}},{}),a={};return Object.entries(i).forEach(([t,s])=>{const l=s.sort((d,g)=>RS({fom:d.periode.fomDato,tom:d.periode.tomDato},{fom:g.periode.fomDato,tom:g.periode.tomDato})).reverse();a[t]=l.flatMap((d,g,E)=>{const f=E[g+1],T=d.periode.tomDato,p=f==null?void 0:f.periode.fomDato;return T===ft?[]:[{...d,periode:{fomDato:ag(T,1),tomDato:p?ag(p,-1):ft}}]})}),a},bE=({inntektsmelding:e,alleKodeverk:i})=>{const a=Jn(),t=rL(e);return G.jsx(hr,{tittel:a.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?G.jsx("span",{children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):G.jsx(vt,{children:Object.entries(t).map(([s,l])=>{var d;return G.jsxs(vt,{children:[G.jsx("span",{children:(d=i[xo.NATURAL_YTELSE_TYPE].find(g=>g.kode===s))==null?void 0:d.navn}),G.jsx("ul",{children:l.map(g=>G.jsxs(q.Fragment,{children:[G.jsxs("li",{children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",G.jsx(zt,{dateString:g.periode.fomDato})]}),g.periode.tomDato!==ft&&G.jsxs("li",{children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",G.jsx(zt,{dateString:g.periode.tomDato})]}),G.jsxs("li",{children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",gt(g.beloepPerMnd.verdi)]})]},g.indexKey))})]},s)})})})};bE.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const NE=({kildeSystem:e})=>{const i=Jn(),a=F.useMemo(()=>{switch(e.toUpperCase()){case"NAV_NO":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}},[i,e]);return G.jsx(hr,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:a})};NE.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const SE=({inntektsmelding:e})=>{const i=Jn();return G.jsxs(hr,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[G.jsxs("span",{children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),G.jsxs("span",{children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};SE.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};var Le=(e=>(e.DEFAULT="default",e.INNGANGSVILKAR="inngangsvilkar",e.BEHANDLE_INNSYN="behandle_innsyn",e.BEREGNING="beregning",e.BEREGNINGSGRUNNLAG="beregningsgrunnlag",e.KLAGE_NAV_FAMILIE_OG_PENSJON="klage_nav_familie_og_pensjon",e.KLAGE_NAV_KLAGEINSTANS="klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_KLAGEINSTANS="formkrav_klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON="formkrav_klage_nav_familie_og_pensjon",e.FORTSATTMEDLEMSKAP="fortsattmedlemskap",e.OPPLYSNINGSPLIKT="opplysningsplikt",e.SOEKNADSFRIST="soeknadsfrist",e.TILBAKEKREVING="tilbakekreving",e.FORELDELSE="foreldelse",e.TILKJENT_YTELSE="tilkjent_ytelse",e.VARSEL="varsel",e.VEDTAK="vedtak",e.UTTAK="uttak",e.SIMULERING="simulering",e.KLAGE_RESULTAT="resultat",e.ANKEBEHANDLING="ankebehandling",e.ANKE_MERKNADER="ankemerknader",e.ANKE_RESULTAT="ankeresultat",e))(Le||{}),se=(e=>(e.ADOPSJONSVILKARET="adopsjonsvilkaaret",e.ARBEIDSFORHOLD="arbeidsforhold",e.ARBEID_OG_INNTEKT="arbeidoginntekt",e.BEREGNING="beregning",e.BESTEBEREGNING="besteberegning",e.DEFAULT="default",e.FORDELING="fordeling",e.INNTEKTSMELDINGER="inntektsmeldinger",e.FEILUTBETALING="feilutbetaling",e.FODSELSVILKARET="foedselsvilkaaret",e.FODSELTILRETTELEGGING="fodseltilrettelegging",e.MEDLEMSKAPSVILKARET="medlemskapsvilkaaret",e.OMSORG="omsorg",e.OMSORG_OG_RETT="omsorgogrett",e.OMSORGSVILKARET="omsorgsvilkaaret",e.OPPTJENINGSVILKARET="opptjeningsvilkaaret",e.PERMISJON="permisjon",e.SAKEN="saken",e.UTTAK="uttak",e.VERGE="verge",e.YTELSER="ytelser",e.UTTAK_DOKUMENTASJON="uttakdokumentasjon",e))(se||{});se.DEFAULT,Le.BEREGNING,se.DEFAULT,Le.BEREGNINGSGRUNNLAG,se.BESTEBEREGNING,Le.DEFAULT,se.ADOPSJONSVILKARET,se.ARBEIDSFORHOLD,se.BEREGNING,se.FODSELSVILKARET,se.FORDELING,se.MEDLEMSKAPSVILKARET,se.OMSORG,se.OPPTJENINGSVILKARET,se.OPPTJENINGSVILKARET,se.OMSORGSVILKARET,se.ARBEIDSFORHOLD,se.UTTAK_DOKUMENTASJON,se.DEFAULT,Le.INNGANGSVILKAR,se.DEFAULT,Le.KLAGE_NAV_FAMILIE_OG_PENSJON,se.DEFAULT,Le.KLAGE_NAV_KLAGEINSTANS,se.DEFAULT,Le.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,se.DEFAULT,Le.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,se.DEFAULT,Le.ANKEBEHANDLING,se.DEFAULT,Le.ANKE_MERKNADER,se.DEFAULT,Le.OPPLYSNINGSPLIKT,se.DEFAULT,Le.INNGANGSVILKAR,se.DEFAULT,Le.INNGANGSVILKAR,se.MEDLEMSKAPSVILKARET,Le.INNGANGSVILKAR,se.DEFAULT,Le.INNGANGSVILKAR,se.DEFAULT,Le.INNGANGSVILKAR,se.DEFAULT,Le.SOEKNADSFRIST,se.DEFAULT,Le.VEDTAK,se.UTTAK,se.UTTAK,se.UTTAK_DOKUMENTASJON,se.SAKEN,se.DEFAULT,Le.UTTAK,se.VERGE,se.DEFAULT,Le.TILKJENT_YTELSE,se.DEFAULT,Le.SIMULERING,se.SAKEN,se.FODSELTILRETTELEGGING,se.DEFAULT,Le.INNGANGSVILKAR,se.DEFAULT,se.UTTAK_DOKUMENTASJON,se.DEFAULT,Le.FORTSATTMEDLEMSKAP,se.ARBEID_OG_INNTEKT,Le.DEFAULT,se.OMSORG_OG_RETT;se.FEILUTBETALING,se.DEFAULT,Le.TILBAKEKREVING,se.DEFAULT,Le.FORELDELSE,se.DEFAULT,Le.VEDTAK,se.VERGE;const tL=(e,i,a)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${i}&dokumentId=${a}`,IE=({inntektsmelding:e,fagsak:i})=>G.jsx(Uo,{type:"button",onClick:()=>{window.open(tL(i.saksnummer,e.journalpostId,e.dokumentId),"_blank")},variant:"secondary",size:"small",icon:G.jsx(zy,{}),children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.modal.trigger"})});IE.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const OE=({inntektsmelding:e})=>{const i=Jn();if(e.refusjonsperioder.length===0)return G.jsx(hr,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:G.jsx("span",{children:e.refusjonPrMnd?gt(e.refusjonPrMnd):G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.refusjon.ingen"})})});const a=[...e.refusjonsperioder].sort((t,s)=>new Date(t.fom).getTime()-new Date(s.fom).getTime());return G.jsxs(vt,{gap:"0",children:[G.jsx("span",{children:"Krever refusjon"}),G.jsx("span",{children:gt(e.refusjonPrMnd??0)}),G.jsx("span",{children:"Endringer i perioden:"}),G.jsx("ul",{children:a.map(t=>G.jsx("li",{children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:gt(t.refusjonsbeløp.verdi),fom:G.jsx(zt,{dateString:t.fom})}})},t.indexKey))})]})};OE.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const LE=({startDatoPermisjon:e,ytelse:i})=>{const a=Jn();return e?G.jsxs(hr,{tittel:a.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:i.toLowerCase()}),children:[G.jsx("span",{children:e?G.jsx(zt,{dateString:e}):"-"}),G.jsx("span",{children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};LE.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const aL="_behandlingCircleIngen_giqi4_1",iL="_behandlingCircleDenne_giqi4_5",sL="_behandlingCircleAndre_giqi4_9",oL="_container_giqi4_13",lL="_ingenInntektsmeldinger_giqi4_20",Wt={behandlingCircleIngen:aL,behandlingCircleDenne:iL,behandlingCircleAndre:sL,container:oL,ingenInntektsmeldinger:lL},KE=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:i,fagsak:a,alleBehandlinger:t,behandling:s,alleKodeverk:l})=>{const d=Jn();return G.jsxs(vt,{gap:"4",className:Wt.container,children:[G.jsxs(dt,{gap:"4",justify:"space-between",align:"start",children:[G.jsxs(Kk,{level:"3",size:"small",children:[G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",G.jsx(ai,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),G.jsx(IE,{fagsak:a,inntektsmelding:e})]}),G.jsxs(m_,{columns:3,gap:"8",children:[G.jsx($k,{arbeidsgiverOpplysningerPerId:i,arbeidsgiverIdent:e.arbeidsgiverIdent}),G.jsx(hr,{tittel:d.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:G.jsx("span",{children:gt(e.inntektPrMnd)})}),G.jsx(Jk,{alleKodeverk:l,inntektsmelding:e,alleBehandlinger:t,behandling:s}),G.jsx(SE,{inntektsmelding:e}),G.jsx(LE,{ytelse:PN(l,xo.FAGSAK_YTELSE,a.fagsakYtelseType),startDatoPermisjon:e.startDatoPermisjon}),G.jsx(NE,{kildeSystem:e.kildeSystem}),G.jsx(bE,{inntektsmelding:e,alleKodeverk:l}),G.jsx(OE,{inntektsmelding:e})]})]})};KE.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const uL={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},Jg=ln(uL),DE=({arbeidsgiverOpplysningerPerId:e,fagsak:i,alleBehandlinger:a,behandling:t,alleKodeverk:s,inntektsmeldinger:l})=>{const[d,g]=F.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),E=p=>{g(d&&p===d.orderBy&&d.direction==="descending"?void 0:{orderBy:p,direction:d&&p===d.orderBy&&d.direction==="ascending"?"descending":"ascending"})},f=d?dL({inntektsmeldinger:l,arbeidsgiverOpplysningerPerId:e,sortKey:d.orderBy,behandling:t}):l,T=(d==null?void 0:d.direction)==="ascending"?f:f.toReversed();return T.length===0?G.jsx(Vd,{value:Jg,children:G.jsxs(dt,{gap:"2",justify:"center",align:"center",className:Wt.ingenInntektsmeldinger,children:[G.jsx(si,{children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.ingen"})}),G.jsx(iR,{})]})}):G.jsx(Vd,{value:Jg,children:G.jsxs(Ve,{sort:d,onSortChange:p=>E(p),children:[G.jsx(Ve.Header,{children:G.jsxs(Ve.Row,{children:[G.jsx(Ve.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),G.jsx(Ve.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),G.jsx(Ve.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),G.jsx(Ve.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),G.jsx(Ve.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),G.jsx(Ve.HeaderCell,{})]})}),G.jsx(Ve.Body,{children:T.map(p=>{var A;return G.jsxs(Ve.ExpandableRow,{expandOnRowClick:!0,togglePlacement:"right",content:G.jsx(KE,{alleKodeverk:s,fagsak:i,behandling:t,alleBehandlinger:a,arbeidsgiverOpplysningerPerId:e,inntektsmelding:p}),children:[G.jsx(Ve.DataCell,{children:G.jsx(ai,{dateTimeString:p.innsendingstidspunkt,separator:"kl"})}),G.jsx(Ve.DataCell,{children:((A=e[p.arbeidsgiverIdent])==null?void 0:A.navn)??"-"}),G.jsx(Ve.DataCell,{children:p.startDatoPermisjon?G.jsx(zt,{dateString:p.startDatoPermisjon}):"-"}),G.jsx(Ve.DataCell,{children:gt(p.inntektPrMnd)}),G.jsx(Ve.DataCell,{children:G.jsx(gL,{behandling:t,inntektsmelding:p})})]},`${p.journalpostId}-${p.internArbeidsforholdId}`)})})]})})},dL=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:i,sortKey:a,behandling:t})=>a==="arbeidsgiverIdent"?e.slice().sort((s,l)=>{var E,f;const d=(E=i[s.arbeidsgiverIdent])==null?void 0:E.navn,g=(f=i[l.arbeidsgiverIdent])==null?void 0:f.navn;return Ws(d,g)}):a==="tilknyttedeBehandlingIder"?e.slice().sort((s,l)=>{const d=Mo({behandling:t,inntektsmelding:s}),g=Mo({behandling:t,inntektsmelding:l});return Ws(d,g)}):e.slice().sort((s,l)=>{const d=s[a],g=l[a];return Ws(d,g)}),Ws=(e,i)=>e===void 0?-1:i===void 0?1:e<i?-1:e>i?1:0,gL=({behandling:e,inntektsmelding:i})=>{const a=Mo({behandling:e,inntektsmelding:i});return a==="DENNE"?G.jsxs(dt,{gap:"1",align:"center",children:[G.jsx(Bs,{className:Wt.behandlingCircleDenne}),G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):a==="ANDRE"?G.jsxs(dt,{gap:"1",align:"center",children:[G.jsx(Bs,{className:Wt.behandlingCircleAndre}),G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):G.jsxs(dt,{gap:"1",align:"center",children:[G.jsx(Bs,{className:Wt.behandlingCircleIngen}),G.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},Mo=({behandling:e,inntektsmelding:i})=>i.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":i.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";DE.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const kL=[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],EL=[{kode:"REGISTRER_OM_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrering av opplysninger om verge/fullmektig"},{kode:"MANGELFULL_SØKNAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Mangelfull søknad"},{kode:"FASTSATT_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak - splitting av periode"},{kode:"BEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet"},{kode:"REGISTRER_PAPIRSØK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrer papirsøknad"},{kode:"BEH_STARTET_PÅ_NYTT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet på nytt"},{kode:"MIGRERT_FRA_INFOTRYGD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder flytting av sak fra Infotrygd"},{kode:"FORSLAG_VEDTAK_UTEN_TOTRINN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått"},{kode:"BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjenopptatt"},{kode:"AVBRUTT_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling er henlagt"},{kode:"ANKE_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ankebehandling"},{kode:"BREV_BESTILT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev bestilt"},{kode:"ENDRET_DEKNINGSGRAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Dekningsgrad er endret"},{kode:"OPPGAVE_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Oppgave før vedtak"},{kode:"IVERKSETTELSE_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen venter på iverksettelse"},{kode:"FASTSATT_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak"},{kode:"OVST_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak"},{kode:"INNSYN_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Innsynsbehandling opprettet"},{kode:"TILBAKEKR_VIDEREBEHANDLING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Metode for å håndtere tilbakekreving av feilutbetailng er valgt."},{kode:"SAK_GODKJENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak godkjent"},{kode:"BEH_KØET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er satt på vent"},{kode:"NYE_REGOPPLYSNINGER",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Nye registeropplysninger"},{kode:"BEH_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling på vent"},{kode:"TERMINBEKREFTELSE_UGYLDIG",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Terminbekreftelsens utstedt dato er før 22. svangerskapsuke. Behandlingen fortsatt uten ny terminbekreftelse"},{kode:"FAKTA_ENDRET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Fakta endret"},{kode:"MIGRERT_FRA_INFOTRYGD_FJERNET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder ikke lenger flytting av sak fra Infotrygd"},{kode:"BYTT_ENHET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Bytt enhet"},{kode:"REVURD_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Revurdering opprettet"},{kode:"KLAGE_BEH_NFP",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling NFP"},{kode:"KØET_BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Køet behandling er gjenopptatt"},{kode:"OVST_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak - splitting av periode"},{kode:"ANKEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Anke mottatt"},{kode:"UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet soknadsperiode"},{kode:"KLAGE_BEH_NK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling KA"},{kode:"AVKLART_AKTIVITETSKRAV",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Avklart aktivitetskrav"},{kode:"NY_INFO_FRA_TPS",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ny info fra TPS"},{kode:"KLAGEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klage mottatt"},{kode:"VEDTAK_FATTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak fattet"},{kode:"BEH_AVBRUTT_VUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vurdering før vedtak"},{kode:"UENDRET_UTFALL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Uendret utfall"},{kode:"VRS_REV_IKKE_SNDT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Varsel om revurdering ikke sendt"},{kode:"SPOLT_TILBAKE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er flyttet"},{kode:"OPPTJENING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet opptjeningsperiode"},{kode:"SAK_RETUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak retur"},{kode:"FJERNET_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Opplysninger om verge/fullmektig fjernet"},{kode:"BEH_MAN_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Gjenoppta behandling"},{kode:"BEH_OPPDATERT_NYE_OPPL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen oppdatert med nye opplysninger"},{kode:"VEDLEGG_MOTTATT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedlegg mottatt"},{kode:"OVERSTYRT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Overstyrt"},{kode:"BREV_SENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev sendt"},{kode:"FORSLAG_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått og sendt til beslutter"}],vL=[{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],fL=[{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"},{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"}],mL=[{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"}],TL=[{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"}],pL=[{kode:"EGEN_NÆRING",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Egen næring"},{kode:"BRUKERS_ANDEL",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Brukers andel"},{kode:"FRILANS",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Frilans"}],hL=[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],cL=[{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"},{kode:"ENDRING_I_BEREGNING_OG_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning og uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"}],AL=[{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilans"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (fisker)"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (dagmamma)"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"},{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"}],yL=[{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"}],RL=[{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Vedtaksinstans"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aleneomsorg og annenpart rett"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstans"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"}],_L=[{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"},{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"}],bL=[{kode:"HJEMSENDE_UTEN_Å_OPPHEVE",kodeverk:"KLAGEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"OPPHEVE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket oppheves"},{kode:"MEDHOLD_I_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Medhold"},{kode:"STADFESTE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"AVVIS_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Klagen avvises"}],NL=[{kode:"BEH_STARTET_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Behandling startet på nytt"},{kode:"BERORT_BEH_OPPHOR",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens vedtak er opphørt"},{kode:"SAKSBEH_START_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Saksbehandling starter på nytt"},{kode:"BERORT_BEH_ENDRING_DEKNINGSGRAD",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens behandling har endret antall disponible stønadsdager"}],SL=[{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"},{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"ANNET",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Andre typer som f.eks utsettelse"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"}],IL=[{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt søknad mangler"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"}],OL=[{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"}],LL=[{kode:"TILBAKEKR_IGNORER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling, avvent samordning"},{kode:"TILBAKEKR_INNTREKK",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling hvor inntrekk dekker hele beløpet"},{kode:"TILBAKEKR_OPPRETT",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling med tilbakekreving"},{kode:"TILBAKEKR_OPPDATER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Endringer vil oppdatere eksisterende feilutbetalte perioder og beløp."}],KL=[{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],DL=[{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"}],PL=[{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"}],FL=[{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"}],ML=[{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"},{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"}],GL=[{kode:"UTTAK_PERIODE_FOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fradato uttaksperiode"},{kode:"TPS_ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"UTTAK_PERIODE_TOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Tildato uttaksperiode"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"FODSELSDATO",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fødselsdato"}],BL=[{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"}],jL=[{kode:"MANGLENDE_OPPLYSNINGER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen, men har manglende opplysninger"},{kode:"SØKER_ER_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er i permisjon"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekten er ikke med i beregningsgrunnlaget"},{kode:"IKKE_BRUK",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Ikke bruk"},{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK_MED_OVERSTYRTE_PERIODER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"BENYTT_A_INNTEKT_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekt fra A-inntekt benyttes i beregningsgrunnlaget"},{kode:"SØKER_ER_IKKE_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er ikke i permisjon"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er lagt til av saksbehandler beregningsgrunnlaget"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er slått sammen med annet"}],wL=[{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"}],HL=JSON.parse('[{"kode":"CAF","kodeverk":"LANDKODER","navn":"SENTRALAFRIKA. REP."},{"kode":"ARG","kodeverk":"LANDKODER","navn":"ARGENTINA"},{"kode":"IOT","kodeverk":"LANDKODER","navn":"BRITISK-INDISKE HAV"},{"kode":"CCK","kodeverk":"LANDKODER","navn":"KOKOSØYENE"},{"kode":"MEX","kodeverk":"LANDKODER","navn":"MEXICO"},{"kode":"CHN","kodeverk":"LANDKODER","navn":"REPUBLIKKEN KINA"},{"kode":"RUS","kodeverk":"LANDKODER","navn":"RUSSLAND"},{"kode":"BHS","kodeverk":"LANDKODER","navn":"BAHAMAS"},{"kode":"SYC","kodeverk":"LANDKODER","navn":"SEYCHELLENE"},{"kode":"CYP","kodeverk":"LANDKODER","navn":"KYPROS"},{"kode":"AUT","kodeverk":"LANDKODER","navn":"ØSTERRIKE"},{"kode":"QAT","kodeverk":"LANDKODER","navn":"QATAR"},{"kode":"VNM","kodeverk":"LANDKODER","navn":"VIETNAM"},{"kode":"HMD","kodeverk":"LANDKODER","navn":"HEARD OG MCDONALD ØYENE"},{"kode":"KEN","kodeverk":"LANDKODER","navn":"KENYA"},{"kode":"ASM","kodeverk":"LANDKODER","navn":"AM. SAMOA"},{"kode":"PAK","kodeverk":"LANDKODER","navn":"PAKISTAN"},{"kode":"ATG","kodeverk":"LANDKODER","navn":"ANTIGUA OG BARBUDA"},{"kode":"TZA","kodeverk":"LANDKODER","navn":"TANZANIA"},{"kode":"ZAF","kodeverk":"LANDKODER","navn":"SØR-AFRIKA"},{"kode":"CMR","kodeverk":"LANDKODER","navn":"KAMERUN"},{"kode":"MLI","kodeverk":"LANDKODER","navn":"MALI"},{"kode":"SLV","kodeverk":"LANDKODER","navn":"EL SALVADOR"},{"kode":"MAF","kodeverk":"LANDKODER","navn":"SAINT MARTIN"},{"kode":"KGZ","kodeverk":"LANDKODER","navn":"KIRGISISTAN"},{"kode":"FJI","kodeverk":"LANDKODER","navn":"FIJI"},{"kode":"RWA","kodeverk":"LANDKODER","navn":"RWANDA"},{"kode":"GEO","kodeverk":"LANDKODER","navn":"GEORGIA"},{"kode":"REU","kodeverk":"LANDKODER","navn":"REUNION"},{"kode":"MTQ","kodeverk":"LANDKODER","navn":"MARTINIQUE"},{"kode":"SDN","kodeverk":"LANDKODER","navn":"SUDAN"},{"kode":"AND","kodeverk":"LANDKODER","navn":"ANDORRA"},{"kode":"COK","kodeverk":"LANDKODER","navn":"COOKØYENE"},{"kode":"SHN","kodeverk":"LANDKODER","navn":"ST. HELENA"},{"kode":"COL","kodeverk":"LANDKODER","navn":"COLOMBIA"},{"kode":"PER","kodeverk":"LANDKODER","navn":"PERU"},{"kode":"STP","kodeverk":"LANDKODER","navn":"SAO TOME OG PRINCIPE"},{"kode":"COM","kodeverk":"LANDKODER","navn":"KOMORENE"},{"kode":"LUX","kodeverk":"LANDKODER","navn":"LUXEMBOURG"},{"kode":"PNG","kodeverk":"LANDKODER","navn":"PAPUA NY-GUINEA"},{"kode":"MKD","kodeverk":"LANDKODER","navn":"MAKEDONIA"},{"kode":"GIN","kodeverk":"LANDKODER","navn":"GUINEA"},{"kode":"CYM","kodeverk":"LANDKODER","navn":"CAYMANØYENE"},{"kode":"VGB","kodeverk":"LANDKODER","navn":"JOMFRUØYENE BRIT."},{"kode":"IRL","kodeverk":"LANDKODER","navn":"IRLAND"},{"kode":"XXX","kodeverk":"LANDKODER","navn":"STATSLØS"},{"kode":"HTI","kodeverk":"LANDKODER","navn":"HAITI"},{"kode":"LBN","kodeverk":"LANDKODER","navn":"LIBANON"},{"kode":"BRN","kodeverk":"LANDKODER","navn":"BRUNEI"},{"kode":"GMB","kodeverk":"LANDKODER","navn":"GAMBIA"},{"kode":"MLT","kodeverk":"LANDKODER","navn":"MALTA"},{"kode":"CRI","kodeverk":"LANDKODER","navn":"COSTA RICA"},{"kode":"UZB","kodeverk":"LANDKODER","navn":"UZBEKISTAN"},{"kode":"CXR","kodeverk":"LANDKODER","navn":"CHRISTMASØYA"},{"kode":"TUR","kodeverk":"LANDKODER","navn":"TYRKIA"},{"kode":"UKR","kodeverk":"LANDKODER","navn":"UKRAINA"},{"kode":"SUN","kodeverk":"LANDKODER","navn":"SOVJETUNIONEN"},{"kode":"PYF","kodeverk":"LANDKODER","navn":"FRANSK POLYNESIA"},{"kode":"MNE","kodeverk":"LANDKODER","navn":"MONTENEGRO"},{"kode":"BIH","kodeverk":"LANDKODER","navn":"BOSNIA-HERCEGOVINA"},{"kode":"PAN","kodeverk":"LANDKODER","navn":"PANAMA"},{"kode":"SJM","kodeverk":"LANDKODER","navn":"SVALBARD OG JAN MAYEN"},{"kode":"NIU","kodeverk":"LANDKODER","navn":"NIUE"},{"kode":"SUR","kodeverk":"LANDKODER","navn":"SURINAM"},{"kode":"MUS","kodeverk":"LANDKODER","navn":"MAURITIUS"},{"kode":"CHE","kodeverk":"LANDKODER","navn":"SVEITS"},{"kode":"BEL","kodeverk":"LANDKODER","navn":"BELGIA"},{"kode":"TTO","kodeverk":"LANDKODER","navn":"TRINIDAD OG TOBAGO"},{"kode":"SWZ","kodeverk":"LANDKODER","navn":"SWAZILAND"},{"kode":"TUN","kodeverk":"LANDKODER","navn":"TUNISIA"},{"kode":"GLP","kodeverk":"LANDKODER","navn":"GUADELOUPE"},{"kode":"KWT","kodeverk":"LANDKODER","navn":"KUWAIT"},{"kode":"DMA","kodeverk":"LANDKODER","navn":"DOMINICA"},{"kode":"BGR","kodeverk":"LANDKODER","navn":"BULGARIA"},{"kode":"ISL","kodeverk":"LANDKODER","navn":"ISLAND"},{"kode":"SVN","kodeverk":"LANDKODER","navn":"SLOVENIA"},{"kode":"PLW","kodeverk":"LANDKODER","navn":"PALAU"},{"kode":"GBR","kodeverk":"LANDKODER","navn":"STORBRITANNIA"},{"kode":"NAM","kodeverk":"LANDKODER","navn":"NAMIBIA"},{"kode":"FSM","kodeverk":"LANDKODER","navn":"MIKRONESIAFØD."},{"kode":"GNB","kodeverk":"LANDKODER","navn":"GUINEA-BISSAU"},{"kode":"UMI","kodeverk":"LANDKODER","navn":"MINDRE STILLEHAVSØYER"},{"kode":"MDA","kodeverk":"LANDKODER","navn":"MOLDOVA"},{"kode":"MMR","kodeverk":"LANDKODER","navn":"MYANMAR (BURMA)"},{"kode":"MOZ","kodeverk":"LANDKODER","navn":"MOSAMBIK"},{"kode":"SGS","kodeverk":"LANDKODER","navn":"SØR-GEORGIA OG SØR-SANDWICHØYE"},{"kode":"NPL","kodeverk":"LANDKODER","navn":"NEPAL"},{"kode":"BES","kodeverk":"LANDKODER","navn":"BONAIRE, SINT EUSTATIUS, SABA"},{"kode":"LBR","kodeverk":"LANDKODER","navn":"LIBERIA"},{"kode":"MDG","kodeverk":"LANDKODER","navn":"MADAGASKAR"},{"kode":"VIR","kodeverk":"LANDKODER","navn":"JOMFRUØYENE AM."},{"kode":"ARE","kodeverk":"LANDKODER","navn":"DE ARABISKE EMIRATER"},{"kode":"USA","kodeverk":"LANDKODER","navn":"USA"},{"kode":"NFK","kodeverk":"LANDKODER","navn":"NORFOLKØYA"},{"kode":"HKG","kodeverk":"LANDKODER","navn":"HONGKONG"},{"kode":"DEU","kodeverk":"LANDKODER","navn":"TYSKLAND"},{"kode":"LIE","kodeverk":"LANDKODER","navn":"LIECHTENSTEIN"},{"kode":"ECU","kodeverk":"LANDKODER","navn":"ECUADOR"},{"kode":"POL","kodeverk":"LANDKODER","navn":"POLEN"},{"kode":"PRK","kodeverk":"LANDKODER","navn":"NORD-KOREA"},{"kode":"GGY","kodeverk":"LANDKODER","navn":"GUERNSEY"},{"kode":"NZL","kodeverk":"LANDKODER","navn":"NEW ZEALAND"},{"kode":"MAR","kodeverk":"LANDKODER","navn":"MAROKKO"},{"kode":"BWA","kodeverk":"LANDKODER","navn":"BOTSWANA"},{"kode":"GUM","kodeverk":"LANDKODER","navn":"GUAM"},{"kode":"YUG","kodeverk":"LANDKODER","navn":"JUGOSLAVIA"},{"kode":"SEN","kodeverk":"LANDKODER","navn":"SENEGAL"},{"kode":"MWI","kodeverk":"LANDKODER","navn":"MALAWI"},{"kode":"TKM","kodeverk":"LANDKODER","navn":"TURKMENISTAN"},{"kode":"GAB","kodeverk":"LANDKODER","navn":"GABON"},{"kode":"FIN","kodeverk":"LANDKODER","navn":"FINLAND"},{"kode":"PRY","kodeverk":"LANDKODER","navn":"PARAGUAY"},{"kode":"PSE","kodeverk":"LANDKODER","navn":"DET PALESTINSKE OMRÅDET"},{"kode":"FRA","kodeverk":"LANDKODER","navn":"FRANKRIKE"},{"kode":"ZWE","kodeverk":"LANDKODER","navn":"ZIMBABWE"},{"kode":"AZE","kodeverk":"LANDKODER","navn":"AZERBAJDZJAN"},{"kode":"SXM","kodeverk":"LANDKODER","navn":"SINT MAARTEN"},{"kode":"NIC","kodeverk":"LANDKODER","navn":"NICARAGUA"},{"kode":"CAN","kodeverk":"LANDKODER","navn":"CANADA"},{"kode":"COG","kodeverk":"LANDKODER","navn":"KONGO, REPUBLIKKEN"},{"kode":"JPN","kodeverk":"LANDKODER","navn":"JAPAN"},{"kode":"KOR","kodeverk":"LANDKODER","navn":"SØR-KOREA"},{"kode":"HUN","kodeverk":"LANDKODER","navn":"UNGARN"},{"kode":"YEM","kodeverk":"LANDKODER","navn":"JEMEN"},{"kode":"CHL","kodeverk":"LANDKODER","navn":"CHILE"},{"kode":"BRB","kodeverk":"LANDKODER","navn":"BARBADOS"},{"kode":"DNK","kodeverk":"LANDKODER","navn":"DANMARK"},{"kode":"NRU","kodeverk":"LANDKODER","navn":"NAURU"},{"kode":"VCT","kodeverk":"LANDKODER","navn":"ST. VINCENT"},{"kode":"BEN","kodeverk":"LANDKODER","navn":"BENIN"},{"kode":"SMR","kodeverk":"LANDKODER","navn":"SAN MARINO"},{"kode":"TCD","kodeverk":"LANDKODER","navn":"TSJAD"},{"kode":"CUW","kodeverk":"LANDKODER","navn":"CURACAO"},{"kode":"IRN","kodeverk":"LANDKODER","navn":"IRAN"},{"kode":"SWE","kodeverk":"LANDKODER","navn":"SVERIGE"},{"kode":"ERI","kodeverk":"LANDKODER","navn":"ERITREA"},{"kode":"XUK","kodeverk":"LANDKODER","navn":"UKJENT"},{"kode":"MDV","kodeverk":"LANDKODER","navn":"MALDIVENE"},{"kode":"CSK","kodeverk":"LANDKODER","navn":"TSJEKKOSLOVAKIA"},{"kode":"GRD","kodeverk":"LANDKODER","navn":"GRENADA"},{"kode":"HND","kodeverk":"LANDKODER","navn":"HONDURAS"},{"kode":"FRO","kodeverk":"LANDKODER","navn":"FÆRØYENE"},{"kode":"COD","kodeverk":"LANDKODER","navn":"KONGO, DEN DEMOKR. REPUBL"},{"kode":"SRB","kodeverk":"LANDKODER","navn":"SERBIA"},{"kode":"AGO","kodeverk":"LANDKODER","navn":"ANGOLA"},{"kode":"NCL","kodeverk":"LANDKODER","navn":"NY-KALEDONIA"},{"kode":"SCG","kodeverk":"LANDKODER","navn":"SERBIA OG MONTENEGRO"},{"kode":"GTM","kodeverk":"LANDKODER","navn":"GUATEMALA"},{"kode":"AFG","kodeverk":"LANDKODER","navn":"AFGHANISTAN"},{"kode":"JAM","kodeverk":"LANDKODER","navn":"JAMAICA"},{"kode":"UGA","kodeverk":"LANDKODER","navn":"UGANDA"},{"kode":"IMN","kodeverk":"LANDKODER","navn":"ISLE OF MAN"},{"kode":"ISR","kodeverk":"LANDKODER","navn":"ISRAEL"},{"kode":"SOM","kodeverk":"LANDKODER","navn":"SOMALIA"},{"kode":"MNP","kodeverk":"LANDKODER","navn":"NORD-MARIANENE"},{"kode":"XXK","kodeverk":"LANDKODER","navn":"KOSOVO"},{"kode":"BLR","kodeverk":"LANDKODER","navn":"HVITERUSSLAND"},{"kode":"LSO","kodeverk":"LANDKODER","navn":"LESOTHO"},{"kode":"NER","kodeverk":"LANDKODER","navn":"NIGER"},{"kode":"IDN","kodeverk":"LANDKODER","navn":"INDONESIA"},{"kode":"CZE","kodeverk":"LANDKODER","navn":"DEN TSJEKKISKE REP."},{"kode":"URY","kodeverk":"LANDKODER","navn":"URUGUAY"},{"kode":"BGD","kodeverk":"LANDKODER","navn":"BANGLADESH"},{"kode":"WLF","kodeverk":"LANDKODER","navn":"WALLIS/FUTUNAØYENE"},{"kode":"CIV","kodeverk":"LANDKODER","navn":"ELFENBEINSKYSTEN"},{"kode":"ABW","kodeverk":"LANDKODER","navn":"ARUBA"},{"kode":"SLB","kodeverk":"LANDKODER","navn":"SALOMONØYENE"},{"kode":"TWN","kodeverk":"LANDKODER","navn":"TAIWAN"},{"kode":"SLE","kodeverk":"LANDKODER","navn":"SIERRA LEONE"},{"kode":"BRA","kodeverk":"LANDKODER","navn":"BRASIL"},{"kode":"DJI","kodeverk":"LANDKODER","navn":"DJIBOUTI"},{"kode":"PRI","kodeverk":"LANDKODER","navn":"PUERTO RICO"},{"kode":"PRT","kodeverk":"LANDKODER","navn":"PORTUGAL"},{"kode":"ANT","kodeverk":"LANDKODER","navn":"DE NEDERLANDSKE ANTILLENE"},{"kode":"THA","kodeverk":"LANDKODER","navn":"THAILAND"},{"kode":"TLS","kodeverk":"LANDKODER","navn":"ØST-TIMOR"},{"kode":"SPM","kodeverk":"LANDKODER","navn":"ST-PIERRE OG MIQUELON"},{"kode":"ALB","kodeverk":"LANDKODER","navn":"ALBANIA"},{"kode":"EGY","kodeverk":"LANDKODER","navn":"EGYPT"},{"kode":"GRC","kodeverk":"LANDKODER","navn":"HELLAS"},{"kode":"BFA","kodeverk":"LANDKODER","navn":"BURKINA FASO"},{"kode":"ALA","kodeverk":"LANDKODER","navn":"ÅLAND"},{"kode":"BOL","kodeverk":"LANDKODER","navn":"BOLIVIA"},{"kode":"DDR","kodeverk":"LANDKODER","navn":"TYSKLAND (ØST)"},{"kode":"HRV","kodeverk":"LANDKODER","navn":"KROATIA"},{"kode":"AUS","kodeverk":"LANDKODER","navn":"AUSTRALIA"},{"kode":"NGA","kodeverk":"LANDKODER","navn":"NIGERIA"},{"kode":"LBY","kodeverk":"LANDKODER","navn":"LIBYA"},{"kode":"MYT","kodeverk":"LANDKODER","navn":"MAYOTTE"},{"kode":"LVA","kodeverk":"LANDKODER","navn":"LATVIA"},{"kode":"BTN","kodeverk":"LANDKODER","navn":"BHUTAN"},{"kode":"MSR","kodeverk":"LANDKODER","navn":"MONSERRAT"},{"kode":"???","kodeverk":"LANDKODER","navn":"UOPPGITT/UKJENT"},{"kode":"OMN","kodeverk":"LANDKODER","navn":"OMAN"},{"kode":"SVK","kodeverk":"LANDKODER","navn":"SLOVAKIA"},{"kode":"TUV","kodeverk":"LANDKODER","navn":"TUVALU"},{"kode":"VEN","kodeverk":"LANDKODER","navn":"VENEZUELA"},{"kode":"ITA","kodeverk":"LANDKODER","navn":"ITALIA"},{"kode":"KHM","kodeverk":"LANDKODER","navn":"KAMBODSJA"},{"kode":"ARM","kodeverk":"LANDKODER","navn":"ARMENIA"},{"kode":"LCA","kodeverk":"LANDKODER","navn":"ST. LUCIA"},{"kode":"GIB","kodeverk":"LANDKODER","navn":"GIBRALTAR"},{"kode":"JEY","kodeverk":"LANDKODER","navn":"JERSEY"},{"kode":"LAO","kodeverk":"LANDKODER","navn":"LAOS"},{"kode":"BHR","kodeverk":"LANDKODER","navn":"BAHRAIN"},{"kode":"ESH","kodeverk":"LANDKODER","navn":"VEST-SAHARA"},{"kode":"TKL","kodeverk":"LANDKODER","navn":"TOKELAU"},{"kode":"MNG","kodeverk":"LANDKODER","navn":"MONGOLIA"},{"kode":"BLZ","kodeverk":"LANDKODER","navn":"BELIZE"},{"kode":"GUF","kodeverk":"LANDKODER","navn":"FRANSK GUYANA"},{"kode":"TCA","kodeverk":"LANDKODER","navn":"TURKS/CAICOSØYENE"},{"kode":"WSM","kodeverk":"LANDKODER","navn":"SAMOA"},{"kode":"JOR","kodeverk":"LANDKODER","navn":"JORDAN"},{"kode":"MRT","kodeverk":"LANDKODER","navn":"MAURITANIA"},{"kode":"CUB","kodeverk":"LANDKODER","navn":"CUBA"},{"kode":"BDI","kodeverk":"LANDKODER","navn":"BURUNDI"},{"kode":"GHA","kodeverk":"LANDKODER","navn":"GHANA"},{"kode":"KNA","kodeverk":"LANDKODER","navn":"ST.KITTS OG NEVIS"},{"kode":"ETH","kodeverk":"LANDKODER","navn":"ETIOPIA"},{"kode":"SSD","kodeverk":"LANDKODER","navn":"SØR-SUDAN"},{"kode":"VAT","kodeverk":"LANDKODER","navn":"VATIKANSTATEN"},{"kode":"CPV","kodeverk":"LANDKODER","navn":"KAPP VERDE"},{"kode":"PCN","kodeverk":"LANDKODER","navn":"PITCAIRN"},{"kode":"SGP","kodeverk":"LANDKODER","navn":"SINGAPORE"},{"kode":"KAZ","kodeverk":"LANDKODER","navn":"KAZAKHSTAN"},{"kode":"MYS","kodeverk":"LANDKODER","navn":"MALAYSIA"},{"kode":"PHL","kodeverk":"LANDKODER","navn":"FILIPPINENE"},{"kode":"EST","kodeverk":"LANDKODER","navn":"ESTLAND"},{"kode":"NOR","kodeverk":"LANDKODER","navn":"NORGE"},{"kode":"BMU","kodeverk":"LANDKODER","navn":"BERMUDA"},{"kode":"LTU","kodeverk":"LANDKODER","navn":"LITAUEN"},{"kode":"MAC","kodeverk":"LANDKODER","navn":"MACAO"},{"kode":"TON","kodeverk":"LANDKODER","navn":"TONGA"},{"kode":"ROU","kodeverk":"LANDKODER","navn":"ROMANIA"},{"kode":"BLM","kodeverk":"LANDKODER","navn":"SAINT BARTHELEMY"},{"kode":"SAU","kodeverk":"LANDKODER","navn":"SAUDI-ARABIA"},{"kode":"GNQ","kodeverk":"LANDKODER","navn":"EKVATORIAL-GUINEA"},{"kode":"TGO","kodeverk":"LANDKODER","navn":"TOGO"},{"kode":"ZMB","kodeverk":"LANDKODER","navn":"ZAMBIA"},{"kode":"VUT","kodeverk":"LANDKODER","navn":"VANUATU"},{"kode":"DZA","kodeverk":"LANDKODER","navn":"ALGERIE"},{"kode":"TJK","kodeverk":"LANDKODER","navn":"TADZJIKISTAN"},{"kode":"NLD","kodeverk":"LANDKODER","navn":"NEDERLAND"},{"kode":"KIR","kodeverk":"LANDKODER","navn":"KIRIBATI"},{"kode":"GUY","kodeverk":"LANDKODER","navn":"GUYANA"},{"kode":"BVT","kodeverk":"LANDKODER","navn":"BOUVETØYA"},{"kode":"IND","kodeverk":"LANDKODER","navn":"INDIA"},{"kode":"LKA","kodeverk":"LANDKODER","navn":"SRI LANKA"},{"kode":"SYR","kodeverk":"LANDKODER","navn":"SYRIA"},{"kode":"ESP","kodeverk":"LANDKODER","navn":"SPANIA"},{"kode":"GRL","kodeverk":"LANDKODER","navn":"GRØNLAND"},{"kode":"AIA","kodeverk":"LANDKODER","navn":"ANGUILLA"},{"kode":"IRQ","kodeverk":"LANDKODER","navn":"IRAK"},{"kode":"MCO","kodeverk":"LANDKODER","navn":"MONACO"},{"kode":"MHL","kodeverk":"LANDKODER","navn":"MARSHALLØYENE"},{"kode":"DOM","kodeverk":"LANDKODER","navn":"DEN DOMINIKANSKE REP"},{"kode":"FLK","kodeverk":"LANDKODER","navn":"FALKLANDSØYENE"}]'),VL=[{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-005",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakebetaling endring"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"}],UL=[{kode:"IKKE_I_AKTIVITET_IKKE_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Aktiviteten er ikke dokumentert"},{kode:"I_AKTIVITET",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er i aktivitet"},{kode:"IKKE_I_AKTIVITET_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er ikke i aktivitet"}],qL=[{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"},{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"}],xL=[{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"},{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"}],YL=JSON.parse('[{"kode":"FODSELSDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fødselsdato"},{"kode":"TILBAKETREKK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Tilbaketrekk"},{"kode":"ER_ANKEFRIST_IKKE_OVERHOLDT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er ankefrist ikke overholdt"},{"kode":"FNR","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fødselsnummer"},{"kode":"TERMINBEKREFTELSE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Terminbekreftelse"},{"kode":"TERMINDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Termindato"},{"kode":"ANKE_RESULTAT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Anke resultat"},{"kode":"UTTAK_SPLITT_TIDSPERIODE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resulterende periode ved splitting"},{"kode":"UTTAK_TREKKDAGER_FLERBARN_KVOTE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Trekkdager flerbarn kvote"},{"kode":"OPPHOLDSRETT_IKKE_EOS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruker har ikke oppholdsrett i EØS"},{"kode":"TILRETTELEGGING_SKAL_BRUKES","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avgjør om tilrettelegging skal brukes"},{"kode":"ER_ANKE_IKKE_KONKRET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er anke ikke konkret."},{"kode":"BEHANDLING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Behandling"},{"kode":"UTTAK_GRADERING_ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Gradering av arbeidsforhold"},{"kode":"ANKE_AVVIST_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak til avvist anke"},{"kode":"INNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntekt"},{"kode":"SOKNADSFRISTVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Søknadsfristvilkåret"},{"kode":"DAGPENGER_INNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dagpenger"},{"kode":"ARBEIDSFORHOLD_BEKREFTET_TOM_DATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Til og med dato fastsatt av saksbehandler"},{"kode":"SOKNADSFRIST","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Søknadsfrist"},{"kode":"VILKAR_SOM_ANVENDES","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Vilkår som anvendes"},{"kode":"PERIODE_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Periode f.o.m."},{"kode":"UTTAK_PROSENT_UTBETALING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Utbetalingsgrad"},{"kode":"NYTT_REFUSJONSKRAV","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Nytt refusjonskrav"},{"kode":"DODSDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dødsdato"},{"kode":"DOKUMENTASJON_FORELIGGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dokumentasjon foreligger"},{"kode":"LØNNSENDRING_I_PERIODEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Lønnsendring i beregningsperioden"},{"kode":"AVKLART_PERIODE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avklart periode"},{"kode":"SVANGERSKAPSPENGERVILKÅRET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Svangerskapsvilkåret"},{"kode":"KLAGE_OMGJØR_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak til omgjøring"},{"kode":"AKTIVITET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Aktivitet"},{"kode":"UTTAK_STØNADSKONTOTYPE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Stønadskontotype"},{"kode":"ALENEOMSORG","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Aleneomsorg"},{"kode":"OMSORG","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Omsorg"},{"kode":"KONTAKTPERSON","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Kontaktperson"},{"kode":"ER_KLAGE_KONKRET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"TILRETTELEGGING_BEHOV_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Tilrettelegging behov FOM"},{"kode":"ANNEN_FORELDER_RETT_EØS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Annen forelder har opptjent rett fra land i EØS"},{"kode":"AKTIVITETSKRAV_AVKLARING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avklaring om mor er i aktivitet"},{"kode":"FASTSETT_RESULTAT_PERIODEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fastsett resultat for perioden"},{"kode":"FRILANSVIRKSOMHET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Frilansvirksomhet"},{"kode":"MANN_ADOPTERER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mann adopterer"},{"kode":"ANDEL_ARBEID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Andel i arbeid"},{"kode":"DELVIS_TILRETTELEGGING_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Delvis tilrettelegging FOM"},{"kode":"OPPTJENINGSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Opptjeningsvilkåret"},{"kode":"ER_KLAGER_PART","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"UTTAK_PERIODE_RESULTAT_TYPE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resultattype for periode"},{"kode":"UTLAND","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Utland"},{"kode":"BRUK_ANTALL_I_TPS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruk antall fra folkeregisteret"},{"kode":"AKTIVITET_PERIODE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Perioden med aktivitet"},{"kode":"FASTSETT_ETTERLØNN_SLUTTPAKKE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fastsett søkers månedsinntekt fra etterlønn eller sluttpakke"},{"kode":"IKKE_OMSORG_PERIODEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Perioden Søker har ikke omsorg for barnet"},{"kode":"DEKNINGSGRAD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dekningsgrad"},{"kode":"ER_ANKEN_IKKE_SIGNERT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"er anken ikke signert."},{"kode":"SYKDOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Sykdom"},{"kode":"UTSTEDTDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Utstedtdato"},{"kode":"FODSELSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fødsel"},{"kode":"NAVN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Navn"},{"kode":"UTTAK_TREKKDAGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Trekkdager"},{"kode":"PA_KLAGD_BEHANDLINGID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Påklagd behandlingId"},{"kode":"VURDER_ETTERLØNN_SLUTTPAKKE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Har søker inntekt fra etterlønn eller sluttpakke"},{"kode":"OPPHOLDSRETT_EOS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruker har oppholdsrett i EØS"},{"kode":"RETT_TIL_FORELDREPENGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Rett til foreldrepenger"},{"kode":"INNTEKTSKATEGORI","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntektskategori"},{"kode":"ADOPTERER_ALENE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Adopterer alene"},{"kode":"ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Arbeidsforhold"},{"kode":"BRUKER_TVUNGEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruker er under tvungen forvaltning"},{"kode":"DELVIS_REFUSJON_FØR_STARTDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Delvis refusjon som utbetales før startdato for full refusjon"},{"kode":"ENDRING_TIDSBEGRENSET_ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Endring tidsbegrenset arbeidsforhold"},{"kode":"VURDER_GRADERING_PÅ_ANDEL_UTEN_BG","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Vurder om søker har gradering på en andel uten beregningsgrunnlag"},{"kode":"MANDAT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mandat"},{"kode":"MOR_MOTTAR_UFØRETRYGD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mor mottar uføretrygd"},{"kode":"HEL_TILRETTELEGGING_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Hel tilrettelegging FOM"},{"kode":"ORGANISASJONSNUMMER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Organisasjonsnummer"},{"kode":"UTTAK_GRADERING_AVSLAG_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak avslag gradering"},{"kode":"ER_KLAGEN_SIGNERT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"ER_KLAGEFRIST_OVERHOLDT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"OMSORGSVILKAR","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Foreldreansvar"},{"kode":"PA_ANKET_BEHANDLINGID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"på anket behandlingsId."},{"kode":"SLUTTE_ARBEID_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Slutte arbeid FOM"},{"kode":"BRUK_ANTALL_I_SOKNAD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruk antall fra søknad"},{"kode":"KLAGE_RESULTAT_NFP","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resultat"},{"kode":"FORDELING_FOR_ANDEL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fordeling for arbeidsforhold"},{"kode":"UTTAK_SAMTIDIG_UTTAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Samtidig uttak"},{"kode":"ER_SOKER_BOSATT_I_NORGE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er søker bosatt i Norge?"},{"kode":"FRILANS_INNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Frilans inntekt"},{"kode":"FASTSETT_VIDERE_BEHANDLING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fastsett videre behandling"},{"kode":"BRUK_ANTALL_I_VEDTAKET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruk antall fra vedtaket"},{"kode":"OMSORGSOVERTAKELSESDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Omsorgsovertakelsesdato"},{"kode":"UTTAK_PERIODE_RESULTAT_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resultat årsak"},{"kode":"ENDRING_NAERING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Endring i næring"},{"kode":"FORDELING_FOR_NY_ANDEL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny andel med fordeling"},{"kode":"BEHANDLENDE_ENHET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Behandlende enhet"},{"kode":"BRUTTO_NAERINGSINNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Brutto næringsinntekt"},{"kode":"FORDELING_ETTER_BESTEBEREGNING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fordeling etter besteberegning"},{"kode":"STARTDATO_FRA_SOKNAD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Startdato fra søknad"},{"kode":"NY_STARTDATO_REFUSJON","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny startdato for refusjon"},{"kode":"OVERSTYRT_VURDERING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Overstyrt vurdering"},{"kode":"KLAGE_RESULTAT_KA","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ytelsesvedtak"},{"kode":"FARESIGNALER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Faresignaler"},{"kode":"NY_AKTIVITET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Det er lagt til ny aktivitet for"},{"kode":"MOTTAR_YTELSE_FRILANS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mottar søker ytelse for frilansaktiviteten"},{"kode":"NY_REFUSJONSFRIST","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny refusjonsfrist"},{"kode":"OVERSTYRT_BEREGNING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Overstyrt beregning"},{"kode":"AVKLARSAKSOPPLYSNINGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avklar saksopplysninger"},{"kode":"INNTEKT_FRA_ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntekt fra arbeidsforhold"},{"kode":"SOKERSOPPLYSNINGSPLIKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Søkers opplysningsplikt"},{"kode":"SELVSTENDIG_NAERINGSDRIVENDE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Selvstendig næringsdrivende"},{"kode":"GYLDIG_MEDLEM_FOLKETRYGDEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Gyldig medlem i folketrygden"},{"kode":"MOTTATT_DATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mottatt dato"},{"kode":"ANTALL_BARN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Antall barn"},{"kode":"EKTEFELLES_BARN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ektefelles barn"},{"kode":"MILITÆR_ELLER_SIVIL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Militær- eller siviltjeneste"},{"kode":"PERIODE_TOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Periode t.o.m."},{"kode":"FORELDREANSVARSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Foreldreansvar"},{"kode":"STILLINGSPROSENT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Stillingsprosent"},{"kode":"ADOPSJONSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Adopsjon"},{"kode":"ANKE_OMGJØR_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak til omgjøring"},{"kode":"INNTEKTSKATEGORI_FOR_ANDEL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntektskategori for andel"},{"kode":"KONTROLL_AV_BESTEBEREGNING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Kontroll av besteberegning"},{"kode":"MOR_MOTTAR_STØNAD_EØS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mor mottar foreldrepenger fra land i EØS"},{"kode":"ER_ANKER_IKKE_PART","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Angir om anker ikke er part i saken."},{"kode":"ER_VILKÅRENE_TILBAKEKREVING_OPPFYLT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er vilkårene for tilbakekreving oppfylt"},{"kode":"NY_FORDELING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny fordeling for"},{"kode":"ER_SÆRLIGE_GRUNNER_TIL_REDUKSJON","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er det særlige grunner til reduksjon"},{"kode":"MOTTAR_YTELSE_ARBEID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mottar søker ytelse for arbeid i {value}"},{"kode":"TYPE_VERGE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Type verge"}]'),CL=[{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet/savnet"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Uregistrert person"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"UTAN",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person annullert tilgang Fnr"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utvandret"}],$L=[{kode:"ENHETSREGISTERET",kodeverk:"FAGSYSTEM",navn:"Enhetsregisteret"},{kode:"INFOTRYGD",kodeverk:"FAGSYSTEM",navn:"Infotrygd"},{kode:"INNTEKT",kodeverk:"FAGSYSTEM",navn:"INNTEKT"},{kode:"ARENA",kodeverk:"FAGSYSTEM",navn:"Arena"},{kode:"GOSYS",kodeverk:"FAGSYSTEM",navn:"Gosys"},{kode:"JOARK",kodeverk:"FAGSYSTEM",navn:"Joark"},{kode:"K9SAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Folketrygdloven Kapittel 9"},{kode:"FPSAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Foreldrepenger"},{kode:"AAREGISTERET",kodeverk:"FAGSYSTEM",navn:"AAregisteret"},{kode:"MEDL",kodeverk:"FAGSYSTEM",navn:"MEDL"},{kode:"TPS",kodeverk:"FAGSYSTEM",navn:"TPS"},{kode:"VLSP",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Sykepenger"}],JL=[{kode:"ANKE_STADFESTE_YTELSESVEDTAK",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"ANKEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"ANKE_AVVIS",kodeverk:"ANKEVURDERING",navn:"Anken avvises"},{kode:"ANKE_OMGJOER",kodeverk:"ANKEVURDERING",navn:"Anken omgjøres"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket oppheves og hjemsendes"}],WL=[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"}],zL=[{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],XL=[{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"}],ZL=[{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er slått sammen med et annet"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforhold lagt til av saksbehandler"},{kode:"BRUK_UTEN_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk, men ikke benytt inntektsmelding"},{kode:"IKKE_BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Ikke bruk"},{kode:"BASERT_PÅ_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet som ikke ligger i AA-reg er basert på inntektsmelding"},{kode:"BRUK_MED_OVERSTYRT_PERIODE",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Inntekten til arbeidsforholdet skal ikke være med i beregningsgrunnlaget"}],QL=[{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"}],eK=[{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"}],nK=[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],rK=[{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],tK=[{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"}],aK=[{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],iK=[{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"}],sK=[{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"},{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"}],oK=[{kode:"SAMMENSATT_KONTROLL",kodeverk:"FAGSAK_MARKERING",navn:"Sammensatt kontroll"},{kode:"EØS_BOSATT_NORGE",kodeverk:"FAGSAK_MARKERING",navn:"EØS bosatt Norge"},{kode:"SELVSTENDIG_NÆRING",kodeverk:"FAGSAK_MARKERING",navn:"Næringsdrivende"},{kode:"BARE_FAR_RETT",kodeverk:"FAGSAK_MARKERING",navn:"Bare far har rett"},{kode:"BOSATT_UTLAND",kodeverk:"FAGSAK_MARKERING",navn:"Bosatt utland"},{kode:"DØD_DØDFØDSEL",kodeverk:"FAGSAK_MARKERING",navn:"Død eller dødfødsel"},{kode:"PRAKSIS_UTSETTELSE",kodeverk:"FAGSAK_MARKERING",navn:"Praksis utsettelse"}],lK={RelasjonsRolleType:kL,HistorikkinnslagType:EL,UttakUtsettelseType:vL,FagsakYtelseType:fL,StønadskontoType:[{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"}],FagsakStatus:mL,Venteårsak:[{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga for tidlig søknad"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdId som stemmer med Aareg"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på scanning"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev venter søknad."},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."}],AnkeVurderingOmgjør:[{kode:"ANKE_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Gunst omgjør i anke"},{kode:"ANKE_TIL_UGUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Ugunst omgjør i anke"},{kode:"ANKE_DELVIS_OMGJOERING_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Delvis omgjøring, til gunst i anke"}],BehandlingÅrsakType:[{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger inntekt"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Inntektsmelding"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger søknadsfrist"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger opptjening"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Søknad"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger beregning"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. u26-29"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger medlemskap"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev uttak"}],GraderingAvslagÅrsak:[{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"Avslag gradering - arbeid 100% eller mer",lovHjemmel:null}],AktivitetStatus:TL,BeregningsgrunnlagAndeltype:pL,RevurderingVarslingÅrsak:[{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utvandret"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:hL,KonsekvensForYtelsen:cL,Inntektskategori:AL,SivilstandType:yL,SkjermlenkeType:RL,FaktaOmBeregningTilfelle:_L,KlageVurdering:bL,HistorikkBegrunnelseType:NL,OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:SL,KlageAvvistÅrsak:[{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klage er ugyldig",lovHjemmel:null}],BehandlingResultatType:IL,VergeType:OL,TilbakekrevingVidereBehandling:LL,OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"}],FamilieHendelseType:KL,KlageHjemmel:DL,VilkårType:[{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"}],FarSøkerType:[{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"}],FaresignalVurdering:PL,ArbeidType:FL,KlageMedholdÅrsak:[{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"}],Region:ML,OppgaveÅrsak:[{kode:"BEH_SAK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i VL"},{kode:"BEH_SAK_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i Infotrygd"},{kode:"INNHENT_DOK",kodeverk:"OPPGAVE_AARSAK",navn:"Innhent dokumentasjon"},{kode:"VUR_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder dokument i VL"},{kode:"REG_SOK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Registrere søknad i VL"},{kode:"SETTVENT_STO",kodeverk:"OPPGAVE_AARSAK",navn:"Sett Arena utbetaling på vent"},{kode:"RV_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Revurdere i VL"},{kode:"VUR_KONS_YTE_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder konsekvens for ytelse foreldrepenger"},{kode:"GOD_VED_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Godkjenne vedtak i VL"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"},{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"}],HistorikkOpplysningType:GL,FordelingPeriodeKilde:BL,KlageVurderingOmgjør:[{kode:"DELVIS_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Delvis medhold i klage"},{kode:"UGUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Ugunst medhold i klage"},{kode:"GUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Gunst medhold i klage"}],VurderArbeidsforholdHistorikkinnslag:jL,Arbeidskategori:wL,VurderÅrsak:[{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"}],Landkoder:HL,BehandlingType:VL,KontrollerAktivitetskravAvklaring:UL,InnsynResultatType:qL,MedlemskapType:xL,HistorikkEndretFeltType:YL,PersonstatusType:CL,Fagsystem:$L,AnkeVurdering:JL,UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"}],BehandlingStatus:WL,VirksomhetType:zL,MedlemskapDekningType:XL,ArbeidsforholdHandlingType:ZL,HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"}],Avslagsårsak:JSON.parse('{"FP_VK_3":[{"kode":"1007","kodeverk":"AVSLAGSARSAK","navn":"Søkt for sent","lovHjemmel":null}],"FP_VK_4":[{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1005","kodeverk":"AVSLAGSARSAK","navn":"Ektefelles/samboers barn","lovHjemmel":null},{"kode":"1011","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK11\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK16\\", \\"lovreferanse\\": \\"§ 14-5 2. ledd\\"}]}]}"},{"kode":"1006","kodeverk":"AVSLAGSARSAK","navn":"Mann adopterer ikke alene","lovHjemmel":null},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1004","kodeverk":"AVSLAGSARSAK","navn":"Barn over 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_1":[{"kode":"1002","kodeverk":"AVSLAGSARSAK","navn":"Søker er medmor","lovHjemmel":null},{"kode":"1031","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}"},{"kode":"1003","kodeverk":"AVSLAGSARSAK","navn":"Søker er far","lovHjemmel":null},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1001","kodeverk":"AVSLAGSARSAK","navn":"Søkt for tidlig","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1026","kodeverk":"AVSLAGSARSAK","navn":"Fødselsdato ikke oppgitt eller registrert","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_2":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utvandret","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"}],"-":[],"FP_VK_41":[{"kode":"1041","kodeverk":"AVSLAGSARSAK","navn":"For lavt brutto beregningsgrunnlag","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_41\\", \\"lovreferanse\\": \\"14-7\\"}]}]}"}],"FP_VK_21":[{"kode":"1035","kodeverk":"AVSLAGSARSAK","navn":"Ikke tilstrekkelig opptjening","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_23\\", \\"lovreferanse\\": \\"14-6\\"}]}]}"}],"FP_VK_11":[{"kode":"1027","kodeverk":"AVSLAGSARSAK","navn":"Ingen barn dokumentert på far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1028","kodeverk":"AVSLAGSARSAK","navn":"Mor fyller ikke vilkåret for sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1029","kodeverk":"AVSLAGSARSAK","navn":"Bruker er ikke registrert som far/medmor til barnet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_33":[{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1017","kodeverk":"AVSLAGSARSAK","navn":"Omsorgsovertakelse etter 56 uker","lovHjemmel":null},{"kode":"1016","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke barnets far","lovHjemmel":null},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1018","kodeverk":"AVSLAGSARSAK","navn":"Ikke foreldreansvar alene etter barnelova","lovHjemmel":null}],"FP_VK_34":[{"kode":"1019","kodeverk":"AVSLAGSARSAK","navn":"Manglende dokumentasjon","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_34\\", \\"lovreferanse\\": \\"21-3\\"}]}]}"}],"FP_VK_23":[{"kode":"1035","kodeverk":"AVSLAGSARSAK","navn":"Ikke tilstrekkelig opptjening","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_23\\", \\"lovreferanse\\": \\"14-6\\"}]}]}"}],"FP_VK_8":[{"kode":"1014","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke foreldreansvar","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1013","kodeverk":"AVSLAGSARSAK","navn":"Barn ikke under 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1015","kodeverk":"AVSLAGSARSAK","navn":"Søker har hatt vanlig samvær med barnet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"}],"SVP_VK_1":[{"kode":"1065","kodeverk":"AVSLAGSARSAK","navn":"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 2. ledd\\"}]}]}"},{"kode":"1062","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Søker har mottatt sykepenger","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1066","kodeverk":"AVSLAGSARSAK","navn":"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 2. ledd\\"}]}]}"},{"kode":"1064","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1063","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1061","kodeverk":"AVSLAGSARSAK","navn":"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 3. ledd\\"}]}]}"},{"kode":"1060","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Søker er ikke gravid kvinne","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"}],"FP_VK_16":[{"kode":"1004","kodeverk":"AVSLAGSARSAK","navn":"Barn over 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1051","kodeverk":"AVSLAGSARSAK","navn":"Stebarnsadopsjon ikke flere dager igjen","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_5":[{"kode":"1009","kodeverk":"AVSLAGSARSAK","navn":"Mor ikke død","lovHjemmel":null},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1008","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke barnets far","lovHjemmel":null},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1011","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK11\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK16\\", \\"lovreferanse\\": \\"§ 14-5 2. ledd\\"}]}]}"},{"kode":"1012","kodeverk":"AVSLAGSARSAK","navn":"Far har ikke omsorg for barnet","lovHjemmel":null},{"kode":"1010","kodeverk":"AVSLAGSARSAK","navn":"Mor ikke død ved fødsel/omsorg","lovHjemmel":null}],"FP_VK_2_L":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utvandret","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"}],"FP_VK_2_F":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utvandret","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1052","kodeverk":"AVSLAGSARSAK","navn":"Innflyttet for mindre enn ett år siden","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK_2_F\\", \\"lovreferanse\\": \\"14-17 5. ledd\\"}]}]}"}]}'),OpptjeningAktivitetType:QL,PermisjonsbeskrivelseType:eK,Språkkode:[{kode:"NB",kodeverk:"SPRAAK_KODE",navn:"Norsk"},{kode:"NN",kodeverk:"SPRAAK_KODE",navn:"Nynorsk"},{kode:"EN",kodeverk:"SPRAAK_KODE",navn:"Engelsk"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"}],OppholdstillatelseType:nK,MedlemskapManuellVurderingType:rK,ManuellBehandlingÅrsak:[{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."}],MorsAktivitet:tK,NaturalYtelseType:aK,PeriodeResultatÅrsak:JSON.parse('[{"kode":"2010","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4072","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjuende ledd: Barnet er dødt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-7","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4037","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Ikke heltidsarbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4085","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Det er ikke samtykke mellom partene","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2035","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-16\\"}}}","sortering":"14-14-3","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4052","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4032","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4013","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4084","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4097","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Adopsjonsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4104","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 tredje ledd: Stønadsperiode for nytt barn","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4086","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10,14-11\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4002","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Ikke stønadsdager igjen på stønadskonto","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2012","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4023","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-5","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4031","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Ferie/arbeid innenfor de første 6 ukene","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4112","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Barnets innleggelse første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2017","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2036","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4071","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Bruker er død","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4098","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Foreldreansvarsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4067","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4066","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2032","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2026","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2031","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12, jf. §14-16: Gradering av kvote/overført kvote","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4081","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4053","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2007","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Innvilget foreldrepenger, kun mor har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2014","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4007","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2023","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15\\"}}}","sortering":"14-15-1","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4056","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-g","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2016","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-b","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2004","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2018","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2024","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4068","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4087","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-2: Opphør medlemskap","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-2\\"}}}","sortering":"14-02","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4110","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4115","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4096","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Fødselsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4035","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4073","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4069","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4062","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4089","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-g","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4034","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-9\\"}}}","sortering":"14-11-0","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2038","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Samtidig uttak","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4075","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger","lovHjemmel":"","sortering":"14-09-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4005","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjuende ledd: Ikke sammenhengende perioder","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-7","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2034","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2028","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4060","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2006","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Innvilget foreldrepenger før fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4105","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4058","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2002","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Innvilget fellesperiode/foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4095","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL"],"synligForRolle":["MOR"]},{"kode":"4116","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4092","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Avslag overføring - har ikke aleneomsorg for barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4038","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2022","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4008","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4064","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4111","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Søkers innleggelse første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4054","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-e","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2020","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-09-1","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4077","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10 a\\"}}}","sortering":"14-10-0-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2019","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-d","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2025","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4030","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Avslag utsettelse før termin/fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4050","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2003","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Innvilget uttak av kvote","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4082","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2013","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-d","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2027","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4088","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-f","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4063","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4099","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-6: Opptjeningsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-6\\"}}}","sortering":"14-06","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2039","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4103","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4039","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2037","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9, jf. §14-13: Innvilget fellesperiode til far","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4003","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 fjerde ledd: Mor har ikke omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-4","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4107","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4022","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 tredje ledd: Barnet er over 3 år","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4033","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Ikke lovbestemt ferie","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4059","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13, 14-9\\"}}}","sortering":"14-13-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4025","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-16\\"}}}","sortering":"14-16-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2021","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4070","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-e","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4074","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12,21-3\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2011","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2030","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4065","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4057","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2033","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13,14-16\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4076","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger","lovHjemmel":"","sortering":"14-09-5","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4040","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4061","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4041","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4020","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§22-13 tredje ledd: Brudd på søknadsfrist","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"22-13\\"}}}","sortering":"22-13-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4106","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2005","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15: Innvilget foreldrepenger ved aleneomsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15\\"}}}","sortering":"14-15","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4055","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-f","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4093","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-16: Avslag gradering - søker er ikke i arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-16\\"}}}","sortering":"14-16","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4102","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4051","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2015","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-a","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4100","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 andre ledd: Uttak før omsorgsovertakelse","lovHjemmel":"","sortering":"14-10-2","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4012","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 fjerde ledd: Far/medmor har ikke omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-4","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4117","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]}]'),ForeldreType:iK,AdresseType:sK,FagsakMarkering:oK},zs={innsendingstidspunkt:"2024-08-08T00:00:00",kildeSystem:"Altinn",aktiveNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",arbeidsgiverIdent:"1",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},vK={title:"fakta/fakta-inntektsmelding",component:DE},Jt={args:{alleKodeverk:lK,fagsak:{saksnummer:"123",fagsakYtelseType:"FP"},alleBehandlinger:[{uuid:"UUID1",type:"BT-002",opprettet:"2024-07-13",avsluttet:"2024-08-13"},{uuid:"UUID2",type:"BT-003",opprettet:"2024-07-14",avsluttet:"2024-08-14"},{uuid:"UUID3",type:"BT-004",opprettet:"2024-07-15",avsluttet:"2024-08-15"}],arbeidsgiverOpplysningerPerId:{1:{navn:"Rema 1000"},2:{navn:"Kiwi"},3:{navn:"Meny"}},behandling:{uuid:"UUID2"},inntektsmeldinger:[{...zs,tilknyttedeBehandlingIder:["UUID1"],inntektPrMnd:10000.5,innsendingstidspunkt:"2024-07-20T00:00:00",startDatoPermisjon:"2024-10-10",refusjonPrMnd:void 0,journalpostId:"1",refusjonsperioder:[{refusjonsbeløp:{verdi:5e3},indexKey:"1",fom:"2024-01-10"},{refusjonsbeløp:{verdi:3e3},indexKey:"2",fom:"2024-01-09"}]},{...zs,tilknyttedeBehandlingIder:["UUID1","UUID2"],inntektPrMnd:2e4,innsendingstidspunkt:"2024-08-01T00:00:00",kildeSystem:"FS22",refusjonPrMnd:void 0,arbeidsgiverIdent:"2",journalpostId:"2"},{...zs,tilknyttedeBehandlingIder:[],inntektPrMnd:3e4,innsendingstidspunkt:"2024-09-10T00:00:00",innsendingsårsak:"ENDRING",kildeSystem:"NAV_NO",startDatoPermisjon:"2024-11-11",arbeidsgiverIdent:"3",journalpostId:"3",aktiveNaturalytelser:[{periode:{fomDato:"2024-01-09",tomDato:"2024-10-09"},type:"ELEKTRISK_KOMMUNIKASJON",beloepPerMnd:{verdi:999},indexKey:"1"},{periode:{fomDato:"2024-01-11",tomDato:"2024-10-11"},type:"LOSJI",beloepPerMnd:{verdi:10},indexKey:"2"}]}]}},ni={args:{...Jt.args,inntektsmeldinger:[]}};var Wg,zg,Xg;Jt.parameters={...Jt.parameters,docs:{...(Wg=Jt.parameters)==null?void 0:Wg.docs,source:{originalSource:`{
  args: {
    alleKodeverk: alleKodeverk as any,
    fagsak: {
      saksnummer: '123',
      fagsakYtelseType: 'FP'
    } as Fagsak,
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
        type: 'ELEKTRISK_KOMMUNIKASJON',
        beloepPerMnd: {
          verdi: 999
        },
        indexKey: '1'
      }, {
        periode: {
          fomDato: '2024-01-11',
          tomDato: '2024-10-11'
        },
        type: 'LOSJI',
        beloepPerMnd: {
          verdi: 10
        },
        indexKey: '2'
      }]
    }]
  }
}`,...(Xg=(zg=Jt.parameters)==null?void 0:zg.docs)==null?void 0:Xg.source}}};var Zg,Qg,ek;ni.parameters={...ni.parameters,docs:{...(Zg=ni.parameters)==null?void 0:Zg.docs,source:{originalSource:`{
  args: {
    ...InntektsmeldingDefault.args,
    inntektsmeldinger: []
  }
}`,...(ek=(Qg=ni.parameters)==null?void 0:Qg.docs)==null?void 0:ek.source}}};const fK=["InntektsmeldingDefault","IngenInntektsmeldinger"];export{ni as IngenInntektsmeldinger,Jt as InntektsmeldingDefault,fK as __namedExportsOrder,vK as default};
