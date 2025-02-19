import{j as v}from"./jsx-runtime-D_zvdyIk.js";import{r as G,R as J}from"./index-BZISi7jw.js";import{d as Wt}from"./dayjs.min-DkLNzaWO.js";import"./_commonjsHelpers-CqkleIqs.js";var $t=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))($t||{});$t.BRUKERS_ANDEL;$t.FRILANS;$t.EGEN_NÆRING;var tt=(e=>(e.FORSTEGANGSSOKNAD="BT-002",e.KLAGE="BT-003",e.REVURDERING="BT-004",e.DOKUMENTINNSYN="BT-006",e.TILBAKEKREVING="BT-007",e.ANKE="BT-008",e.TILBAKEKREVING_REVURDERING="BT-009",e))(tt||{}),yr=function(e,t){return yr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},yr(e,t)};function he(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");yr(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var b=function(){return b=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},b.apply(this,arguments)};function rt(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}function ve(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,s;n<a;n++)(s||!(n in t))&&(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return e.concat(s||Array.prototype.slice.call(t))}function pe(e,t){var r=t&&t.cache?t.cache:Ls,n=t&&t.serializer?t.serializer:Cs,a=t&&t.strategy?t.strategy:Hs;return a(e,{cache:r,serializer:n})}function As(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Is(e,t,r,n){var a=As(n)?n:r(n),s=t.get(a);return typeof s>"u"&&(s=e.call(this,n),t.set(a,s)),s}function aa(e,t,r){var n=Array.prototype.slice.call(arguments,3),a=r(n),s=t.get(a);return typeof s>"u"&&(s=e.apply(this,n),t.set(a,s)),s}function sa(e,t,r,n,a){return r.bind(t,e,n,a)}function Hs(e,t){var r=e.length===1?Is:aa;return sa(e,this,r,t.cache.create(),t.serializer)}function Bs(e,t){return sa(e,this,aa,t.cache.create(),t.serializer)}var Cs=function(){return JSON.stringify(arguments)},js=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(t){return this.cache[t]},e.prototype.set=function(t,r){this.cache[t]=r},e}(),Ls={create:function(){return new js}},ye={variadic:Bs},O;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(O||(O={}));var L;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(L||(L={}));var nt;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(nt||(nt={}));function gn(e){return e.type===L.literal}function qs(e){return e.type===L.argument}function ia(e){return e.type===L.number}function oa(e){return e.type===L.date}function la(e){return e.type===L.time}function ua(e){return e.type===L.select}function da(e){return e.type===L.plural}function Ys(e){return e.type===L.pound}function fa(e){return e.type===L.tag}function ma(e){return!!(e&&typeof e=="object"&&e.type===nt.number)}function vr(e){return!!(e&&typeof e=="object"&&e.type===nt.dateTime)}var ha=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,Us=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function Gs(e){var t={};return e.replace(Us,function(r){var n=r.length;switch(r[0]){case"G":t.era=n===4?"long":n===5?"narrow":"short";break;case"y":t.year=n===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][n-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][n-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=n===4?"long":n===5?"narrow":"short";break;case"e":if(n<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][n-4];break;case"c":if(n<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][n-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][n-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][n-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][n-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][n-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][n-1];break;case"s":t.second=["numeric","2-digit"][n-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=n<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),t}var Ws=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function $s(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var t=e.split(Ws).filter(function(h){return h.length>0}),r=[],n=0,a=t;n<a.length;n++){var s=a[n],i=s.split("/");if(i.length===0)throw new Error("Invalid number skeleton");for(var o=i[0],l=i.slice(1),u=0,d=l;u<d.length;u++){var m=d[u];if(m.length===0)throw new Error("Invalid number skeleton")}r.push({stem:o,options:l})}return r}function Vs(e){return e.replace(/^(.*?)-/,"")}var cn=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,ga=/^(@+)?(\+|#+)?[rs]?$/g,zs=/(\*)(0+)|(#+)(0+)|(0+)/g,ca=/^(0+)$/;function pn(e){var t={};return e[e.length-1]==="r"?t.roundingPriority="morePrecision":e[e.length-1]==="s"&&(t.roundingPriority="lessPrecision"),e.replace(ga,function(r,n,a){return typeof a!="string"?(t.minimumSignificantDigits=n.length,t.maximumSignificantDigits=n.length):a==="+"?t.minimumSignificantDigits=n.length:n[0]==="#"?t.maximumSignificantDigits=n.length:(t.minimumSignificantDigits=n.length,t.maximumSignificantDigits=n.length+(typeof a=="string"?a.length:0)),""}),t}function pa(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Zs(e){var t;if(e[0]==="E"&&e[1]==="E"?(t={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(t={notation:"scientific"},e=e.slice(1)),t){var r=e.slice(0,2);if(r==="+!"?(t.signDisplay="always",e=e.slice(2)):r==="+?"&&(t.signDisplay="exceptZero",e=e.slice(2)),!ca.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function yn(e){var t={},r=pa(e);return r||t}function Xs(e){for(var t={},r=0,n=e;r<n.length;r++){var a=n[r];switch(a.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=a.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=Vs(a.options[0]);continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=b(b(b({},t),{notation:"scientific"}),a.options.reduce(function(l,u){return b(b({},l),yn(u))},{}));continue;case"engineering":t=b(b(b({},t),{notation:"engineering"}),a.options.reduce(function(l,u){return b(b({},l),yn(u))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":t.roundingMode="floor";continue;case"rounding-mode-ceiling":t.roundingMode="ceil";continue;case"rounding-mode-down":t.roundingMode="trunc";continue;case"rounding-mode-up":t.roundingMode="expand";continue;case"rounding-mode-half-even":t.roundingMode="halfEven";continue;case"rounding-mode-half-down":t.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":t.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(zs,function(l,u,d,m,h,x){if(u)t.minimumIntegerDigits=d.length;else{if(m&&h)throw new Error("We currently do not support maximum integer digits");if(x)throw new Error("We currently do not support exact integer digits")}return""});continue}if(ca.test(a.stem)){t.minimumIntegerDigits=a.stem.length;continue}if(cn.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(cn,function(l,u,d,m,h,x){return d==="*"?t.minimumFractionDigits=u.length:m&&m[0]==="#"?t.maximumFractionDigits=m.length:h&&x?(t.minimumFractionDigits=h.length,t.maximumFractionDigits=h.length+x.length):(t.minimumFractionDigits=u.length,t.maximumFractionDigits=u.length),""});var s=a.options[0];s==="w"?t=b(b({},t),{trailingZeroDisplay:"stripIfInteger"}):s&&(t=b(b({},t),pn(s)));continue}if(ga.test(a.stem)){t=b(b({},t),pn(a.stem));continue}var i=pa(a.stem);i&&(t=b(b({},t),i));var o=Zs(a.stem);o&&(t=b(b({},t),o))}return t}var xt={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Ks(e,t){for(var r="",n=0;n<e.length;n++){var a=e.charAt(n);if(a==="j"){for(var s=0;n+1<e.length&&e.charAt(n+1)===a;)s++,n++;var i=1+(s&1),o=s<2?1:3+(s>>1),l="a",u=Js(t);for((u=="H"||u=="k")&&(o=0);o-- >0;)r+=l;for(;i-- >0;)r=u+r}else a==="J"?r+="H":r+=a}return r}function Js(e){var t=e.hourCycle;if(t===void 0&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,n;r!=="root"&&(n=e.maximize().region);var a=xt[n||""]||xt[r||""]||xt["".concat(r,"-001")]||xt["001"];return a[0]}var ir,Qs=new RegExp("^".concat(ha.source,"*")),ei=new RegExp("".concat(ha.source,"*$"));function R(e,t){return{start:e,end:t}}var ti=!!String.prototype.startsWith&&"_a".startsWith("a",1),ri=!!String.fromCodePoint,ni=!!Object.fromEntries,ai=!!String.prototype.codePointAt,si=!!String.prototype.trimStart,ii=!!String.prototype.trimEnd,oi=!!Number.isSafeInteger,li=oi?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},kr=!0;try{var ui=va("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");kr=((ir=ui.exec("a"))===null||ir===void 0?void 0:ir[0])==="a"}catch{kr=!1}var vn=ti?function(t,r,n){return t.startsWith(r,n)}:function(t,r,n){return t.slice(n,n+r.length)===r},br=ri?String.fromCodePoint:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var n="",a=t.length,s=0,i;a>s;){if(i=t[s++],i>1114111)throw RangeError(i+" is not a valid code point");n+=i<65536?String.fromCharCode(i):String.fromCharCode(((i-=65536)>>10)+55296,i%1024+56320)}return n},kn=ni?Object.fromEntries:function(t){for(var r={},n=0,a=t;n<a.length;n++){var s=a[n],i=s[0],o=s[1];r[i]=o}return r},ya=ai?function(t,r){return t.codePointAt(r)}:function(t,r){var n=t.length;if(!(r<0||r>=n)){var a=t.charCodeAt(r),s;return a<55296||a>56319||r+1===n||(s=t.charCodeAt(r+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},di=si?function(t){return t.trimStart()}:function(t){return t.replace(Qs,"")},fi=ii?function(t){return t.trimEnd()}:function(t){return t.replace(ei,"")};function va(e,t){return new RegExp(e,t)}var _r;if(kr){var bn=va("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");_r=function(t,r){var n;bn.lastIndex=r;var a=bn.exec(t);return(n=a[1])!==null&&n!==void 0?n:""}}else _r=function(t,r){for(var n=[];;){var a=ya(t,r);if(a===void 0||ka(a)||ci(a))break;n.push(a),r+=a>=65536?2:1}return br.apply(void 0,n)};var mi=function(){function e(t,r){r===void 0&&(r={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(t,r,n){for(var a=[];!this.isEOF();){var s=this.char();if(s===123){var i=this.parseArgument(t,n);if(i.err)return i;a.push(i.val)}else{if(s===125&&t>0)break;if(s===35&&(r==="plural"||r==="selectordinal")){var o=this.clonePosition();this.bump(),a.push({type:L.pound,location:R(o,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(n)break;return this.error(O.UNMATCHED_CLOSING_TAG,R(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&Sr(this.peek()||0)){var i=this.parseTag(t,r);if(i.err)return i;a.push(i.val)}else{var i=this.parseLiteral(t,r);if(i.err)return i;a.push(i.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(t,r){var n=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:L.literal,value:"<".concat(a,"/>"),location:R(n,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(t+1,r,!0);if(s.err)return s;var i=s.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Sr(this.char()))return this.error(O.INVALID_TAG,R(o,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return a!==u?this.error(O.UNMATCHED_CLOSING_TAG,R(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:L.tag,value:a,children:i,location:R(n,this.clonePosition())},err:null}:this.error(O.INVALID_TAG,R(o,this.clonePosition())))}else return this.error(O.UNCLOSED_TAG,R(n,this.clonePosition()))}else return this.error(O.INVALID_TAG,R(n,this.clonePosition()))},e.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&gi(this.char());)this.bump();return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(t,r){for(var n=this.clonePosition(),a="";;){var s=this.tryParseQuote(r);if(s){a+=s;continue}var i=this.tryParseUnquoted(t,r);if(i){a+=i;continue}var o=this.tryParseLeftAngleBracket();if(o){a+=o;continue}break}var l=R(n,this.clonePosition());return{val:{type:L.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!hi(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(t){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(t==="plural"||t==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var n=this.char();if(n===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(n);this.bump()}return br.apply(void 0,r)},e.prototype.tryParseUnquoted=function(t,r){if(this.isEOF())return null;var n=this.char();return n===60||n===123||n===35&&(r==="plural"||r==="selectordinal")||n===125&&t>0?null:(this.bump(),br(n))},e.prototype.parseArgument=function(t,r){var n=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(O.EXPECT_ARGUMENT_CLOSING_BRACE,R(n,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(O.EMPTY_ARGUMENT,R(n,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(O.MALFORMED_ARGUMENT,R(n,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(O.EXPECT_ARGUMENT_CLOSING_BRACE,R(n,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:L.argument,value:a,location:R(n,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(O.EXPECT_ARGUMENT_CLOSING_BRACE,R(n,this.clonePosition())):this.parseArgumentOptions(t,r,a,n);default:return this.error(O.MALFORMED_ARGUMENT,R(n,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),r=this.offset(),n=_r(this.message,r),a=r+n.length;this.bumpTo(a);var s=this.clonePosition(),i=R(t,s);return{value:n,location:i}},e.prototype.parseArgumentOptions=function(t,r,n,a){var s,i=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(O.EXPECT_ARGUMENT_TYPE,R(i,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),m=this.parseSimpleArgStyleIfPossible();if(m.err)return m;var h=fi(m.val);if(h.length===0)return this.error(O.EXPECT_ARGUMENT_STYLE,R(this.clonePosition(),this.clonePosition()));var x=R(d,this.clonePosition());u={style:h,styleLocation:x}}var w=this.tryParseArgumentClose(a);if(w.err)return w;var g=R(a,this.clonePosition());if(u&&vn(u==null?void 0:u.style,"::",0)){var N=di(u.style.slice(2));if(o==="number"){var m=this.parseNumberSkeletonFromString(N,u.styleLocation);return m.err?m:{val:{type:L.number,value:n,location:g,style:m.val},err:null}}else{if(N.length===0)return this.error(O.EXPECT_DATE_TIME_SKELETON,g);var E=N;this.locale&&(E=Ks(N,this.locale));var h={type:nt.dateTime,pattern:E,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?Gs(E):{}},j=o==="date"?L.date:L.time;return{val:{type:j,value:n,location:g,style:h},err:null}}}return{val:{type:o==="number"?L.number:o==="date"?L.date:L.time,value:n,location:g,style:(s=u==null?void 0:u.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var T=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(O.EXPECT_SELECT_ARGUMENT_OPTIONS,R(T,b({},T)));this.bumpSpace();var Z=this.parseIdentifierIfPossible(),c=0;if(o!=="select"&&Z.value==="offset"){if(!this.bumpIf(":"))return this.error(O.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,R(this.clonePosition(),this.clonePosition()));this.bumpSpace();var m=this.tryParseDecimalInteger(O.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,O.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(m.err)return m;this.bumpSpace(),Z=this.parseIdentifierIfPossible(),c=m.val}var D=this.tryParsePluralOrSelectOptions(t,o,r,Z);if(D.err)return D;var w=this.tryParseArgumentClose(a);if(w.err)return w;var _=R(a,this.clonePosition());return o==="select"?{val:{type:L.select,value:n,options:kn(D.val),location:_},err:null}:{val:{type:L.plural,value:n,options:kn(D.val),offset:c,pluralType:o==="plural"?"cardinal":"ordinal",location:_},err:null}}default:return this.error(O.INVALID_ARGUMENT_TYPE,R(i,l))}},e.prototype.tryParseArgumentClose=function(t){return this.isEOF()||this.char()!==125?this.error(O.EXPECT_ARGUMENT_CLOSING_BRACE,R(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,r=this.clonePosition();!this.isEOF();){var n=this.char();switch(n){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(O.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,R(a,this.clonePosition()));this.bump();break}case 123:{t+=1,this.bump();break}case 125:{if(t>0)t-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(t,r){var n=[];try{n=$s(t)}catch{return this.error(O.INVALID_NUMBER_SKELETON,r)}return{val:{type:nt.number,tokens:n,location:r,parsedOptions:this.shouldParseSkeletons?Xs(n):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(t,r,n,a){for(var s,i=!1,o=[],l=new Set,u=a.value,d=a.location;;){if(u.length===0){var m=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var h=this.tryParseDecimalInteger(O.EXPECT_PLURAL_ARGUMENT_SELECTOR,O.INVALID_PLURAL_ARGUMENT_SELECTOR);if(h.err)return h;d=R(m,this.clonePosition()),u=this.message.slice(m.offset,this.offset())}else break}if(l.has(u))return this.error(r==="select"?O.DUPLICATE_SELECT_ARGUMENT_SELECTOR:O.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);u==="other"&&(i=!0),this.bumpSpace();var x=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?O.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:O.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,R(this.clonePosition(),this.clonePosition()));var w=this.parseMessage(t+1,r,n);if(w.err)return w;var g=this.tryParseArgumentClose(x);if(g.err)return g;o.push([u,{value:w.val,location:R(x,this.clonePosition())}]),l.add(u),this.bumpSpace(),s=this.parseIdentifierIfPossible(),u=s.value,d=s.location}return o.length===0?this.error(r==="select"?O.EXPECT_SELECT_ARGUMENT_SELECTOR:O.EXPECT_PLURAL_ARGUMENT_SELECTOR,R(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!i?this.error(O.MISSING_OTHER_CLAUSE,R(this.clonePosition(),this.clonePosition())):{val:o,err:null}},e.prototype.tryParseDecimalInteger=function(t,r){var n=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(n=-1);for(var s=!1,i=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)s=!0,i=i*10+(o-48),this.bump();else break}var l=R(a,this.clonePosition());return s?(i*=n,li(i)?{val:i,err:null}:this.error(r,l)):this.error(t,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var r=ya(this.message,t);if(r===void 0)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(t,r){return{val:null,err:{kind:t,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var t=this.char();t===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},e.prototype.bumpIf=function(t){if(vn(this.message,t,this.offset())){for(var r=0;r<t.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(t){var r=this.offset(),n=this.message.indexOf(t,r);return n>=0?(this.bumpTo(n),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var r=this.offset();if(r===t)break;if(r>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&ka(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),r=this.offset(),n=this.message.charCodeAt(r+(t>=65536?2:1));return n??null},e}();function Sr(e){return e>=97&&e<=122||e>=65&&e<=90}function hi(e){return Sr(e)||e===47}function gi(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function ka(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function ci(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Tr(e){e.forEach(function(t){if(delete t.location,ua(t)||da(t))for(var r in t.options)delete t.options[r].location,Tr(t.options[r].value);else ia(t)&&ma(t.style)||(oa(t)||la(t))&&vr(t.style)?delete t.style.location:fa(t)&&Tr(t.children)})}function pi(e,t){t===void 0&&(t={}),t=b({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var r=new mi(e,t).parse();if(r.err){var n=SyntaxError(O[r.err.kind]);throw n.location=r.err.location,n.originalMessage=r.err.message,n}return t!=null&&t.captureLocation||Tr(r.val),r.val}var Se;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Se||(Se={}));var Le=function(e){he(t,e);function t(r,n,a){var s=e.call(this,r)||this;return s.code=n,s.originalMessage=a,s}return t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),_n=function(e){he(t,e);function t(r,n,a,s){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(n,'". Options are "').concat(Object.keys(a).join('", "'),'"'),Se.INVALID_VALUE,s)||this}return t}(Le),yi=function(e){he(t,e);function t(r,n,a){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(n),Se.INVALID_VALUE,a)||this}return t}(Le),vi=function(e){he(t,e);function t(r,n){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(n,'"'),Se.MISSING_VALUE,n)||this}return t}(Le),K;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(K||(K={}));function ki(e){return e.length<2?e:e.reduce(function(t,r){var n=t[t.length-1];return!n||n.type!==K.literal||r.type!==K.literal?t.push(r):n.value+=r.value,t},[])}function ba(e){return typeof e=="function"}function Rt(e,t,r,n,a,s,i){if(e.length===1&&gn(e[0]))return[{type:K.literal,value:e[0].value}];for(var o=[],l=0,u=e;l<u.length;l++){var d=u[l];if(gn(d)){o.push({type:K.literal,value:d.value});continue}if(Ys(d)){typeof s=="number"&&o.push({type:K.literal,value:r.getNumberFormat(t).format(s)});continue}var m=d.value;if(!(a&&m in a))throw new vi(m,i);var h=a[m];if(qs(d)){(!h||typeof h=="string"||typeof h=="number")&&(h=typeof h=="string"||typeof h=="number"?String(h):""),o.push({type:typeof h=="string"?K.literal:K.object,value:h});continue}if(oa(d)){var x=typeof d.style=="string"?n.date[d.style]:vr(d.style)?d.style.parsedOptions:void 0;o.push({type:K.literal,value:r.getDateTimeFormat(t,x).format(h)});continue}if(la(d)){var x=typeof d.style=="string"?n.time[d.style]:vr(d.style)?d.style.parsedOptions:n.time.medium;o.push({type:K.literal,value:r.getDateTimeFormat(t,x).format(h)});continue}if(ia(d)){var x=typeof d.style=="string"?n.number[d.style]:ma(d.style)?d.style.parsedOptions:void 0;x&&x.scale&&(h=h*(x.scale||1)),o.push({type:K.literal,value:r.getNumberFormat(t,x).format(h)});continue}if(fa(d)){var w=d.children,g=d.value,N=a[g];if(!ba(N))throw new yi(g,"function",i);var E=Rt(w,t,r,n,a,s),j=N(E.map(function(c){return c.value}));Array.isArray(j)||(j=[j]),o.push.apply(o,j.map(function(c){return{type:typeof c=="string"?K.literal:K.object,value:c}}))}if(ua(d)){var T=d.options[h]||d.options.other;if(!T)throw new _n(d.value,h,Object.keys(d.options),i);o.push.apply(o,Rt(T.value,t,r,n,a));continue}if(da(d)){var T=d.options["=".concat(h)];if(!T){if(!Intl.PluralRules)throw new Le(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Se.MISSING_INTL_API,i);var Z=r.getPluralRules(t,{type:d.pluralType}).select(h-(d.offset||0));T=d.options[Z]||d.options.other}if(!T)throw new _n(d.value,h,Object.keys(d.options),i);o.push.apply(o,Rt(T.value,t,r,n,a,h-(d.offset||0)));continue}}return ki(o)}function bi(e,t){return t?b(b(b({},e||{}),t||{}),Object.keys(e).reduce(function(r,n){return r[n]=b(b({},e[n]),t[n]||{}),r},{})):e}function _i(e,t){return t?Object.keys(e).reduce(function(r,n){return r[n]=bi(e[n],t[n]),r},b({},e)):e}function or(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}function Si(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:pe(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.NumberFormat).bind.apply(t,ve([void 0],r,!1)))},{cache:or(e.number),strategy:ye.variadic}),getDateTimeFormat:pe(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.DateTimeFormat).bind.apply(t,ve([void 0],r,!1)))},{cache:or(e.dateTime),strategy:ye.variadic}),getPluralRules:pe(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.PluralRules).bind.apply(t,ve([void 0],r,!1)))},{cache:or(e.pluralRules),strategy:ye.variadic})}}var _a=function(){function e(t,r,n,a){r===void 0&&(r=e.defaultLocale);var s=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var u=s.formatToParts(l);if(u.length===1)return u[0].value;var d=u.reduce(function(m,h){return!m.length||h.type!==K.literal||typeof m[m.length-1]!="string"?m.push(h.value):m[m.length-1]+=h.value,m},[]);return d.length<=1?d[0]||"":d},this.formatToParts=function(l){return Rt(s.ast,s.locales,s.formatters,s.formats,l,void 0,s.message)},this.resolvedOptions=function(){var l;return{locale:((l=s.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var i=a||{};i.formatters;var o=rt(i,["formatters"]);this.ast=e.__parse(t,b(b({},o),{locale:this.resolvedLocale}))}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=_i(e.formats,n),this.formatters=a&&a.formatters||Si(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(t){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(t);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof t=="string"?t:t[0])}},e.__parse=pi,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),We;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(We||(We={}));var vt=function(e){he(t,e);function t(r,n,a){var s=this,i=a?a instanceof Error?a:new Error(String(a)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(n,`
`).concat(i?`
`.concat(i.message,`
`).concat(i.stack):""))||this,s.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,t),s}return t}(Error),Ti=function(e){he(t,e);function t(r,n){return e.call(this,We.UNSUPPORTED_FORMATTER,r,n)||this}return t}(vt),wi=function(e){he(t,e);function t(r,n){return e.call(this,We.INVALID_CONFIG,r,n)||this}return t}(vt),Sn=function(e){he(t,e);function t(r,n){return e.call(this,We.MISSING_DATA,r,n)||this}return t}(vt),ie=function(e){he(t,e);function t(r,n,a){var s=e.call(this,We.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(n,`
`),a)||this;return s.locale=n,s}return t}(vt),lr=function(e){he(t,e);function t(r,n,a,s){var i=e.call(this,"".concat(r,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),n,s)||this;return i.descriptor=a,i.locale=n,i}return t}(ie),xi=function(e){he(t,e);function t(r,n){var a=e.call(this,We.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(n,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(s){var i;return(i=s.value)!==null&&i!==void 0?i:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=r,a}return t}(vt);function Di(e,t,r){if(r===void 0&&(r=Error),!e)throw new r(t)}function at(e,t,r){return r===void 0&&(r={}),t.reduce(function(n,a){return a in e?n[a]=e[a]:a in r&&(n[a]=r[a]),n},{})}var Pi=function(e){},Ei=function(e){},Sa={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Pi,onWarn:Ei};function Ta(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function qe(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}function Ni(e){e===void 0&&(e=Ta());var t=Intl.RelativeTimeFormat,r=Intl.ListFormat,n=Intl.DisplayNames,a=pe(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.DateTimeFormat).bind.apply(o,ve([void 0],l,!1)))},{cache:qe(e.dateTime),strategy:ye.variadic}),s=pe(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.NumberFormat).bind.apply(o,ve([void 0],l,!1)))},{cache:qe(e.number),strategy:ye.variadic}),i=pe(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.PluralRules).bind.apply(o,ve([void 0],l,!1)))},{cache:qe(e.pluralRules),strategy:ye.variadic});return{getDateTimeFormat:a,getNumberFormat:s,getMessageFormat:pe(function(o,l,u,d){return new _a(o,l,u,b({formatters:{getNumberFormat:s,getDateTimeFormat:a,getPluralRules:i}},d||{}))},{cache:qe(e.message),strategy:ye.variadic}),getRelativeTimeFormat:pe(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(t.bind.apply(t,ve([void 0],o,!1)))},{cache:qe(e.relativeTime),strategy:ye.variadic}),getPluralRules:i,getListFormat:pe(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(r.bind.apply(r,ve([void 0],o,!1)))},{cache:qe(e.list),strategy:ye.variadic}),getDisplayNames:pe(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(n.bind.apply(n,ve([void 0],o,!1)))},{cache:qe(e.displayNames),strategy:ye.variadic})}}function Cr(e,t,r,n){var a=e&&e[t],s;if(a&&(s=a[r]),s)return s;n(new Ti("No ".concat(t," format named: ").concat(r)))}function Dt(e,t){return Object.keys(e).reduce(function(r,n){return r[n]=b({timeZone:t},e[n]),r},{})}function Tn(e,t){var r=Object.keys(b(b({},e),t));return r.reduce(function(n,a){return n[a]=b(b({},e[a]||{}),t[a]||{}),n},{})}function wn(e,t){if(!t)return e;var r=_a.formats;return b(b(b({},r),e),{date:Tn(Dt(r.date,t),Dt(e.date||{},t)),time:Tn(Dt(r.time,t),Dt(e.time||{},t))})}var wr=function(e,t,r,n,a){var s=e.locale,i=e.formats,o=e.messages,l=e.defaultLocale,u=e.defaultFormats,d=e.fallbackOnEmptyString,m=e.onError,h=e.timeZone,x=e.defaultRichTextElements;r===void 0&&(r={id:""});var w=r.id,g=r.defaultMessage;Di(!!w,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var N=String(w),E=o&&Object.prototype.hasOwnProperty.call(o,N)&&o[N];if(Array.isArray(E)&&E.length===1&&E[0].type===L.literal)return E[0].value;if(!n&&E&&typeof E=="string"&&!x)return E.replace(/'\{(.*?)\}'/gi,"{$1}");if(n=b(b({},x),n||{}),i=wn(i,h),u=wn(u,h),!E){if(d===!1&&E==="")return E;if((!g||s&&s.toLowerCase()!==l.toLowerCase())&&m(new xi(r,s)),g)try{var j=t.getMessageFormat(g,l,u,a);return j.format(n)}catch(T){return m(new lr('Error formatting default message for: "'.concat(N,'", rendering default message verbatim'),s,r,T)),typeof g=="string"?g:N}return N}try{var j=t.getMessageFormat(E,s,i,b({formatters:t},a||{}));return j.format(n)}catch(T){m(new lr('Error formatting message: "'.concat(N,'", using ').concat(g?"default message":"id"," as fallback."),s,r,T))}if(g)try{var j=t.getMessageFormat(g,l,u,a);return j.format(n)}catch(T){m(new lr('Error formatting the default message for: "'.concat(N,'", rendering message verbatim'),s,r,T))}return typeof E=="string"?E:typeof g=="string"?g:N},Mi=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function kt(e,t,r,n){var a=e.locale,s=e.formats,i=e.onError,o=e.timeZone;n===void 0&&(n={});var l=n.format,u=b(b({},o&&{timeZone:o}),l&&Cr(s,t,l,i)),d=at(n,Mi,u);return t==="time"&&!d.hour&&!d.minute&&!d.second&&!d.timeStyle&&!d.dateStyle&&(d=b(b({},d),{hour:"numeric",minute:"numeric"})),r(a,d)}function Oi(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return kt(e,"date",t,i).format(o)}catch(l){e.onError(new ie("Error formatting date.",e.locale,l))}return String(o)}function Ri(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return kt(e,"time",t,i).format(o)}catch(l){e.onError(new ie("Error formatting time.",e.locale,l))}return String(o)}function Fi(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],i=r[2],o=i===void 0?{}:i,l=typeof a=="string"?new Date(a||0):a,u=typeof s=="string"?new Date(s||0):s;try{return kt(e,"dateTimeRange",t,o).formatRange(l,u)}catch(d){e.onError(new ie("Error formatting date time range.",e.locale,d))}return String(l)}function Ai(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return kt(e,"date",t,i).formatToParts(o)}catch(l){e.onError(new ie("Error formatting date.",e.locale,l))}return[]}function Ii(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return kt(e,"time",t,i).formatToParts(o)}catch(l){e.onError(new ie("Error formatting time.",e.locale,l))}return[]}var Hi=["style","type","fallback","languageDisplay"];function Bi(e,t,r,n){var a=e.locale,s=e.onError,i=Intl.DisplayNames;i||s(new Le(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Se.MISSING_INTL_API));var o=at(n,Hi);try{return t(a,o).of(r)}catch(l){s(new ie("Error formatting display name.",a,l))}}var Ci=["type","style"],xn=Date.now();function ji(e){return"".concat(xn,"_").concat(e,"_").concat(xn)}function Li(e,t,r,n){n===void 0&&(n={});var a=wa(e,t,r,n).reduce(function(s,i){var o=i.value;return typeof o!="string"?s.push(o):typeof s[s.length-1]=="string"?s[s.length-1]+=o:s.push(o),s},[]);return a.length===1?a[0]:a.length===0?"":a}function wa(e,t,r,n){var a=e.locale,s=e.onError;n===void 0&&(n={});var i=Intl.ListFormat;i||s(new Le(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Se.MISSING_INTL_API));var o=at(n,Ci);try{var l={},u=r.map(function(d,m){if(typeof d=="object"){var h=ji(m);return l[h]=d,h}return String(d)});return t(a,o).formatToParts(u).map(function(d){return d.type==="literal"?d:b(b({},d),{value:l[d.value]||d.value})})}catch(d){s(new ie("Error formatting list.",a,d))}return r}var qi=["type"];function Yi(e,t,r,n){var a=e.locale,s=e.onError;n===void 0&&(n={}),Intl.PluralRules||s(new Le(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Se.MISSING_INTL_API));var i=at(n,qi);try{return t(a,i).select(r)}catch(o){s(new ie("Error formatting plural.",a,o))}return"other"}var Ui=["numeric","style"];function Gi(e,t,r){var n=e.locale,a=e.formats,s=e.onError;r===void 0&&(r={});var i=r.format,o=!!i&&Cr(a,"relative",i,s)||{},l=at(r,Ui,o);return t(n,l)}function Wi(e,t,r,n,a){a===void 0&&(a={}),n||(n="second");var s=Intl.RelativeTimeFormat;s||e.onError(new Le(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Se.MISSING_INTL_API));try{return Gi(e,t,a).format(r,n)}catch(i){e.onError(new ie("Error formatting relative time.",e.locale,i))}return String(r)}var $i=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function xa(e,t,r){var n=e.locale,a=e.formats,s=e.onError;r===void 0&&(r={});var i=r.format,o=i&&Cr(a,"number",i,s)||{},l=at(r,$i,o);return t(n,l)}function Vi(e,t,r,n){n===void 0&&(n={});try{return xa(e,t,n).format(r)}catch(a){e.onError(new ie("Error formatting number.",e.locale,a))}return String(r)}function zi(e,t,r,n){n===void 0&&(n={});try{return xa(e,t,n).formatToParts(r)}catch(a){e.onError(new ie("Error formatting number.",e.locale,a))}return[]}function Zi(e){var t=e?e[Object.keys(e)[0]]:void 0;return typeof t=="string"}function Xi(e){e.onWarn&&e.defaultRichTextElements&&Zi(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function Ki(e,t){var r=Ni(t),n=b(b({},Sa),e),a=n.locale,s=n.defaultLocale,i=n.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&i?i(new Sn('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&i&&i(new Sn('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(i&&i(new wi('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),n.locale=n.defaultLocale||"en"),Xi(n),b(b({},n),{formatters:r,formatNumber:Vi.bind(null,n,r.getNumberFormat),formatNumberToParts:zi.bind(null,n,r.getNumberFormat),formatRelativeTime:Wi.bind(null,n,r.getRelativeTimeFormat),formatDate:Oi.bind(null,n,r.getDateTimeFormat),formatDateToParts:Ai.bind(null,n,r.getDateTimeFormat),formatTime:Ri.bind(null,n,r.getDateTimeFormat),formatDateTimeRange:Fi.bind(null,n,r.getDateTimeFormat),formatTimeToParts:Ii.bind(null,n,r.getDateTimeFormat),formatPlural:Yi.bind(null,n,r.getPluralRules),formatMessage:wr.bind(null,n,r),$t:wr.bind(null,n,r),formatList:Li.bind(null,n,r.getListFormat),formatListToParts:wa.bind(null,n,r.getListFormat),formatDisplayName:Bi.bind(null,n,r.getDisplayNames)})}function Ji(e,t,r){if(r===void 0&&(r=Error),!e)throw new r(t)}function Qi(e){Ji(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var eo=b(b({},Sa),{textComponent:G.Fragment});function to(e){return function(t){return e(G.Children.toArray(t))}}function Dn(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),a=r.length;if(n.length!==a)return!1;for(var s=0;s<a;s++){var i=r[s];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}var ur={exports:{}},H={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pn;function ro(){if(Pn)return H;Pn=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,o=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,m=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,x=e?Symbol.for("react.memo"):60115,w=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,N=e?Symbol.for("react.fundamental"):60117,E=e?Symbol.for("react.responder"):60118,j=e?Symbol.for("react.scope"):60119;function T(c){if(typeof c=="object"&&c!==null){var D=c.$$typeof;switch(D){case t:switch(c=c.type,c){case l:case u:case n:case s:case a:case m:return c;default:switch(c=c&&c.$$typeof,c){case o:case d:case w:case x:case i:return c;default:return D}}case r:return D}}}function Z(c){return T(c)===u}return H.AsyncMode=l,H.ConcurrentMode=u,H.ContextConsumer=o,H.ContextProvider=i,H.Element=t,H.ForwardRef=d,H.Fragment=n,H.Lazy=w,H.Memo=x,H.Portal=r,H.Profiler=s,H.StrictMode=a,H.Suspense=m,H.isAsyncMode=function(c){return Z(c)||T(c)===l},H.isConcurrentMode=Z,H.isContextConsumer=function(c){return T(c)===o},H.isContextProvider=function(c){return T(c)===i},H.isElement=function(c){return typeof c=="object"&&c!==null&&c.$$typeof===t},H.isForwardRef=function(c){return T(c)===d},H.isFragment=function(c){return T(c)===n},H.isLazy=function(c){return T(c)===w},H.isMemo=function(c){return T(c)===x},H.isPortal=function(c){return T(c)===r},H.isProfiler=function(c){return T(c)===s},H.isStrictMode=function(c){return T(c)===a},H.isSuspense=function(c){return T(c)===m},H.isValidElementType=function(c){return typeof c=="string"||typeof c=="function"||c===n||c===u||c===s||c===a||c===m||c===h||typeof c=="object"&&c!==null&&(c.$$typeof===w||c.$$typeof===x||c.$$typeof===i||c.$$typeof===o||c.$$typeof===d||c.$$typeof===N||c.$$typeof===E||c.$$typeof===j||c.$$typeof===g)},H.typeOf=T,H}var En;function no(){return En||(En=1,ur.exports=ro()),ur.exports}var dr,Nn;function ao(){if(Nn)return dr;Nn=1;var e=no(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[e.ForwardRef]=n,s[e.Memo]=a;function i(w){return e.isMemo(w)?a:s[w.$$typeof]||t}var o=Object.defineProperty,l=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,h=Object.prototype;function x(w,g,N){if(typeof g!="string"){if(h){var E=m(g);E&&E!==h&&x(w,E,N)}var j=l(g);u&&(j=j.concat(u(g)));for(var T=i(w),Z=i(g),c=0;c<j.length;++c){var D=j[c];if(!r[D]&&!(N&&N[D])&&!(Z&&Z[D])&&!(T&&T[D])){var _=d(g,D);try{o(w,D,_)}catch{}}}}return w}return dr=x,dr}ao();var jr=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=G.createContext(null)):G.createContext(null);jr.Consumer;var so=jr.Provider,io=so,oo=jr;function Lr(){var e=G.useContext(oo);return Qi(e),e}var xr;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(xr||(xr={}));var Dr;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Dr||(Dr={}));function Da(e){var t=function(r){var n=Lr(),a=r.value,s=r.children,i=rt(r,["value","children"]),o=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?n.formatDateToParts(o,i):n.formatTimeToParts(o,i);return s(l)};return t.displayName=Dr[e],t}function bt(e){var t=function(r){var n=Lr(),a=r.value,s=r.children,i=rt(r,["value","children"]),o=n[e](a,i);if(typeof s=="function")return s(o);var l=n.textComponent||G.Fragment;return G.createElement(l,null,o)};return t.displayName=xr[e],t}function Pa(e){return e&&Object.keys(e).reduce(function(t,r){var n=e[r];return t[r]=ba(n)?to(n):n,t},{})}var Mn=function(e,t,r,n){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];var i=Pa(n),o=wr.apply(void 0,ve([e,t,r,i],a,!1));return Array.isArray(o)?G.Children.toArray(o):o},lo=function(e,t){var r=e.defaultRichTextElements,n=rt(e,["defaultRichTextElements"]),a=Pa(r),s=Ki(b(b(b({},eo),n),{defaultRichTextElements:a}),t),i={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:a};return b(b({},s),{formatMessage:Mn.bind(null,i,s.formatters),$t:Mn.bind(null,i,s.formatters)})};function uo(e,t){var r=e.values,n=rt(e,["values"]),a=t.values,s=rt(t,["values"]);return Dn(a,r)&&Dn(n,s)}function Ea(e){var t=Lr(),r=t.formatMessage,n=t.textComponent,a=n===void 0?G.Fragment:n,s=e.id,i=e.description,o=e.defaultMessage,l=e.values,u=e.children,d=e.tagName,m=d===void 0?a:d,h=e.ignoreTag,x={id:s,description:i,defaultMessage:o},w=r(x,l,{ignoreTag:h});return typeof u=="function"?u(Array.isArray(w)?w:[w]):m?G.createElement(m,null,G.Children.toArray(w)):G.createElement(G.Fragment,null,w)}Ea.displayName="FormattedMessage";var ne=G.memo(Ea,uo);ne.displayName="MemoizedFormattedMessage";bt("formatDate");bt("formatTime");bt("formatNumber");bt("formatList");bt("formatDisplayName");Da("formatDate");Da("formatTime");function qr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pr={exports:{}},fo=Pr.exports,On;function mo(){return On||(On=1,function(e,t){(function(r,n){e.exports=n()})(fo,function(){var r,n,a=1e3,s=6e4,i=36e5,o=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,d=2628e6,m=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,h={years:u,months:d,days:o,hours:i,minutes:s,seconds:a,milliseconds:1,weeks:6048e5},x=function(D){return D instanceof Z},w=function(D,_,k){return new Z(D,k,_.$l)},g=function(D){return n.p(D)+"s"},N=function(D){return D<0},E=function(D){return N(D)?Math.ceil(D):Math.floor(D)},j=function(D){return Math.abs(D)},T=function(D,_){return D?N(D)?{negative:!0,format:""+j(D)+_}:{negative:!1,format:""+D+_}:{negative:!1,format:""}},Z=function(){function D(k,B,z){var $=this;if(this.$d={},this.$l=z,k===void 0&&(this.$ms=0,this.parseFromMilliseconds()),B)return w(k*h[g(B)],this);if(typeof k=="number")return this.$ms=k,this.parseFromMilliseconds(),this;if(typeof k=="object")return Object.keys(k).forEach(function(ce){$.$d[g(ce)]=k[ce]}),this.calMilliseconds(),this;if(typeof k=="string"){var Q=k.match(m);if(Q){var re=Q.slice(2).map(function(ce){return ce!=null?Number(ce):0});return this.$d.years=re[0],this.$d.months=re[1],this.$d.weeks=re[2],this.$d.days=re[3],this.$d.hours=re[4],this.$d.minutes=re[5],this.$d.seconds=re[6],this.calMilliseconds(),this}}return this}var _=D.prototype;return _.calMilliseconds=function(){var k=this;this.$ms=Object.keys(this.$d).reduce(function(B,z){return B+(k.$d[z]||0)*h[z]},0)},_.parseFromMilliseconds=function(){var k=this.$ms;this.$d.years=E(k/u),k%=u,this.$d.months=E(k/d),k%=d,this.$d.days=E(k/o),k%=o,this.$d.hours=E(k/i),k%=i,this.$d.minutes=E(k/s),k%=s,this.$d.seconds=E(k/a),k%=a,this.$d.milliseconds=k},_.toISOString=function(){var k=T(this.$d.years,"Y"),B=T(this.$d.months,"M"),z=+this.$d.days||0;this.$d.weeks&&(z+=7*this.$d.weeks);var $=T(z,"D"),Q=T(this.$d.hours,"H"),re=T(this.$d.minutes,"M"),ce=this.$d.seconds||0;this.$d.milliseconds&&(ce+=this.$d.milliseconds/1e3,ce=Math.round(1e3*ce)/1e3);var ar=T(ce,"S"),Rs=k.negative||B.negative||$.negative||Q.negative||re.negative||ar.negative,Fs=Q.format||re.format||ar.format?"T":"",sr=(Rs?"-":"")+"P"+k.format+B.format+$.format+Fs+Q.format+re.format+ar.format;return sr==="P"||sr==="-P"?"P0D":sr},_.toJSON=function(){return this.toISOString()},_.format=function(k){var B=k||"YYYY-MM-DDTHH:mm:ss",z={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return B.replace(l,function($,Q){return Q||String(z[$])})},_.as=function(k){return this.$ms/h[g(k)]},_.get=function(k){var B=this.$ms,z=g(k);return z==="milliseconds"?B%=1e3:B=z==="weeks"?E(B/h[z]):this.$d[z],B||0},_.add=function(k,B,z){var $;return $=B?k*h[g(B)]:x(k)?k.$ms:w(k,this).$ms,w(this.$ms+$*(z?-1:1),this)},_.subtract=function(k,B){return this.add(k,B,!0)},_.locale=function(k){var B=this.clone();return B.$l=k,B},_.clone=function(){return w(this.$ms,this)},_.humanize=function(k){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!k)},_.valueOf=function(){return this.asMilliseconds()},_.milliseconds=function(){return this.get("milliseconds")},_.asMilliseconds=function(){return this.as("milliseconds")},_.seconds=function(){return this.get("seconds")},_.asSeconds=function(){return this.as("seconds")},_.minutes=function(){return this.get("minutes")},_.asMinutes=function(){return this.as("minutes")},_.hours=function(){return this.get("hours")},_.asHours=function(){return this.as("hours")},_.days=function(){return this.get("days")},_.asDays=function(){return this.as("days")},_.weeks=function(){return this.get("weeks")},_.asWeeks=function(){return this.as("weeks")},_.months=function(){return this.get("months")},_.asMonths=function(){return this.as("months")},_.years=function(){return this.get("years")},_.asYears=function(){return this.as("years")},D}(),c=function(D,_,k){return D.add(_.years()*k,"y").add(_.months()*k,"M").add(_.days()*k,"d").add(_.hours()*k,"h").add(_.minutes()*k,"m").add(_.seconds()*k,"s").add(_.milliseconds()*k,"ms")};return function(D,_,k){r=k,n=k().$utils(),k.duration=function($,Q){var re=k.locale();return w($,{$l:re},Q)},k.isDuration=x;var B=_.prototype.add,z=_.prototype.subtract;_.prototype.add=function($,Q){return x($)?c(this,$,1):B.bind(this)($,Q)},_.prototype.subtract=function($,Q){return x($)?c(this,$,-1):z.bind(this)($,Q)}}})}(Pr)),Pr.exports}var ho=mo();const go=qr(ho);var Er={exports:{}},co=Er.exports,Rn;function po(){return Rn||(Rn=1,function(e,t){(function(r,n){e.exports=n()})(co,function(){var r="day";return function(n,a,s){var i=function(u){return u.add(4-u.isoWeekday(),r)},o=a.prototype;o.isoWeekYear=function(){return i(this).year()},o.isoWeek=function(u){if(!this.$utils().u(u))return this.add(7*(u-this.isoWeek()),r);var d,m,h,x,w=i(this),g=(d=this.isoWeekYear(),m=this.$u,h=(m?s.utc:s)().year(d).startOf("year"),x=4-h.isoWeekday(),h.isoWeekday()>4&&(x+=7),h.add(x,r));return w.diff(g,"week")+1},o.isoWeekday=function(u){return this.$utils().u(u)?this.day()||7:this.day(this.day()%7?u:u-7)};var l=o.startOf;o.startOf=function(u,d){var m=this.$utils(),h=!!m.u(d)||d;return m.p(u)==="isoweek"?h?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(u,d)}}})}(Er)),Er.exports}var yo=po();const vo=qr(yo);var Nr={exports:{}},ko=Nr.exports,Fn;function bo(){return Fn||(Fn=1,function(e,t){(function(r,n){e.exports=n()})(ko,function(){var r="minute",n=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(s,i,o){var l=i.prototype;o.utc=function(g){var N={date:g,utc:!0,args:arguments};return new i(N)},l.utc=function(g){var N=o(this.toDate(),{locale:this.$L,utc:!0});return g?N.add(this.utcOffset(),r):N},l.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var u=l.parse;l.parse=function(g){g.utc&&(this.$u=!0),this.$utils().u(g.$offset)||(this.$offset=g.$offset),u.call(this,g)};var d=l.init;l.init=function(){if(this.$u){var g=this.$d;this.$y=g.getUTCFullYear(),this.$M=g.getUTCMonth(),this.$D=g.getUTCDate(),this.$W=g.getUTCDay(),this.$H=g.getUTCHours(),this.$m=g.getUTCMinutes(),this.$s=g.getUTCSeconds(),this.$ms=g.getUTCMilliseconds()}else d.call(this)};var m=l.utcOffset;l.utcOffset=function(g,N){var E=this.$utils().u;if(E(g))return this.$u?0:E(this.$offset)?m.call(this):this.$offset;if(typeof g=="string"&&(g=function(c){c===void 0&&(c="");var D=c.match(n);if(!D)return null;var _=(""+D[0]).match(a)||["-",0,0],k=_[0],B=60*+_[1]+ +_[2];return B===0?0:k==="+"?B:-B}(g),g===null))return this;var j=Math.abs(g)<=16?60*g:g,T=this;if(N)return T.$offset=j,T.$u=g===0,T;if(g!==0){var Z=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(T=this.local().add(j+Z,r)).$offset=j,T.$x.$localOffset=Z}else T=this.utc();return T};var h=l.format;l.format=function(g){var N=g||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return h.call(this,N)},l.valueOf=function(){var g=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*g},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var x=l.toDate;l.toDate=function(g){return g==="s"&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():x.call(this)};var w=l.diff;l.diff=function(g,N,E){if(g&&this.$u===g.$u)return w.call(this,g,N,E);var j=this.local(),T=o(g).local();return w.call(j,T,N,E)}}})}(Nr)),Nr.exports}var _o=bo();const So=qr(_o),To=Ta(),Fe=e=>lo({locale:"nb-NO",messages:e},To),Yr="YYYY-MM-DD",Ur="DD.MM.YYYY",Na={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};var Mr={exports:{}},wo=Mr.exports,An;function xo(){return An||(An=1,function(e,t){(function(r,n){e.exports=n(Wt)})(wo,function(r){function n(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var a=n(r),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})}(Mr)),Mr.exports}xo();Wt.extend(So);Wt.extend(vo);Wt.extend(go);Fe(Na);Fe(Na);function Ma(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Ma(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Ae(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Ma(e))&&(n&&(n+=" "),n+=t);return n}const st=e=>Ae({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Do=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};G.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,m=Do(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return J.createElement(a,Object.assign({},m,{ref:t,className:Ae(r,"navds-body-long",`navds-body-long--${n}`,st({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var Po=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const _e=G.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,m=Po(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return J.createElement(a,Object.assign({},m,{ref:t,className:Ae(r,"navds-body-short",`navds-body-short--${n}`,st({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var Eo=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};G.forwardRef((e,t)=>{var{className:r,size:n="medium",spacing:a,uppercase:s,as:i="p",truncate:o,weight:l="regular",align:u,visuallyHidden:d,textColor:m}=e,h=Eo(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return J.createElement(i,Object.assign({},h,{ref:t,className:Ae(r,"navds-detail",st({spacing:a,truncate:o,weight:l,align:u,visuallyHidden:d,textColor:m,uppercase:s}),{"navds-detail--small":n==="small"})}))});var No=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};G.forwardRef((e,t)=>{var{children:r,className:n,size:a,spacing:s,as:i="p",showIcon:o=!1}=e,l=No(e,["children","className","size","spacing","as","showIcon"]);return J.createElement(i,Object.assign({},l,{ref:t,className:Ae("navds-error-message","navds-label",n,st({spacing:s}),{"navds-label--small":a==="small","navds-error-message--show-icon":o})}),o&&J.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},J.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var Mo=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Gr=G.forwardRef((e,t)=>{var{level:r="1",size:n,className:a,as:s,spacing:i,align:o,visuallyHidden:l,textColor:u}=e,d=Mo(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const m=s??`h${r}`;return J.createElement(m,Object.assign({},d,{ref:t,className:Ae(a,"navds-heading",`navds-heading--${n}`,st({spacing:i,align:o,visuallyHidden:l,textColor:u}))}))});var Oo=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};G.forwardRef((e,t)=>{var{className:r,spacing:n,as:a="p"}=e,s=Oo(e,["className","spacing","as"]);return J.createElement(a,Object.assign({},s,{ref:t,className:Ae(r,"navds-ingress",{"navds-typo--spacing":!!n})}))});var Ro=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Xe=G.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="label",spacing:s,visuallyHidden:i,textColor:o}=e,l=Ro(e,["className","size","as","spacing","visuallyHidden","textColor"]);return J.createElement(a,Object.assign({},l,{ref:t,className:Ae(r,"navds-label",st({spacing:s,visuallyHidden:i,textColor:o}),{"navds-label--small":n==="small"})}))});var Fo=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const In=G.forwardRef((e,t)=>{var{children:r,className:n,variant:a,size:s="medium",icon:i}=e,o=Fo(e,["children","className","variant","size","icon"]);const l=(a==null?void 0:a.endsWith("-filled"))&&"strong",u=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",d=a==null?void 0:a.replace("-filled","").replace("-moderate","");return J.createElement(_e,Object.assign({},o,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:Ae("navds-tag",n,`navds-tag--${a}`,`navds-tag--${s}`,`navds-tag--${l||u||"outline"}`,`navds-tag--${d}`)}),i&&J.createElement("span",{className:"navds-tag__icon--left"},i),r)});function Ao(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hn={exports:{}},dt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bn;function Io(){if(Bn)return dt;Bn=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,a,s){var i=null;if(s!==void 0&&(i=""+s),a.key!==void 0&&(i=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:s}}return dt.Fragment=t,dt.jsx=r,dt.jsxs=r,dt}var Cn;function Ho(){return Cn||(Cn=1,Hn.exports=Io()),Hn.exports}var te=Ho();const it={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};Fe(it);var jn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ln;function Bo(){return Ln||(Ln=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,n.call(this,o)))}return s}function n(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)t.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(jn)),jn.exports}var Co=Bo();const oe=Ao(Co),jo="_borderbox_1vkvn_1",Lo="_error_1vkvn_5",qo="_warning_1vkvn_8",Yo={borderbox:jo,error:Lo,warning:qo};oe.bind(Yo);const Uo="_aksjonspunkt_kn1hn_1",Go="_erAksjonspunktApent_kn1hn_4",Wo="_erIkkeGodkjentAvBeslutter_kn1hn_8",$o={aksjonspunkt:Uo,erAksjonspunktApent:Go,erIkkeGodkjentAvBeslutter:Wo};oe.bind($o);Fe(it);Fe(it);const Vo="_flexColumnNew_1vdv1_1",zo={flexColumnNew:Vo},Zo=oe.bind(zo),be=({children:e,className:t})=>te.jsx("div",{className:Zo("flexColumnNew",t),children:e}),Xo="_flexRow_1yf0y_1",Ko="_spaceBetween_1yf0y_9",Jo="_alignItemsToBaseline_1yf0y_12",Qo="_alignItemsToFlexEnd_1yf0y_15",el="_justifyItemsToFlexEnd_1yf0y_18",tl="_wrap_1yf0y_21",rl={flexRow:Xo,spaceBetween:Ko,alignItemsToBaseline:Jo,alignItemsToFlexEnd:Qo,justifyItemsToFlexEnd:el,wrap:tl},nl=oe.bind(rl),Bt=({children:e,spaceBetween:t=!1,alignItemsToBaseline:r=!1,alignItemsToFlexEnd:n=!1,wrap:a=!1,className:s})=>te.jsx("div",{className:nl("flexRow",{spaceBetween:t},{alignItemsToBaseline:r},{alignItemsToFlexEnd:n},{wrap:a},s),children:e}),al="_flexContainer_1dk1o_1",sl="_fluid_1dk1o_6",il="_fullHeight_1dk1o_9",ol="_flexWrap_1dk1o_17",ll={flexContainer:al,fluid:sl,fullHeight:il,flexWrap:ol},ul=oe.bind(ll),Ct=({children:e,wrap:t=!1,fullHeight:r=!1})=>te.jsx("div",{className:ul("flexContainer","fluid",{flexWrap:t,fullHeight:r}),children:e});Fe(it);const dl="_columnStyle_1f13u_1",Oa={columnStyle:dl},fl=oe.bind(Oa),Ke=({children:e="",className:t,hidden:r=!1,colspanAll:n=!1})=>r?null:te.jsx("td",{className:fl(Oa.columnStyle,t),colSpan:n?100:void 0,children:e}),ml="_row_1lxv9_1",hl="_harHover_1lxv9_4",gl="_rowHeader_1lxv9_7",cl="_grayHeader_1lxv9_12",pl="_rowContent_1lxv9_15",yl="_selected_1lxv9_18",vl="_bold_1lxv9_22",kl="_dashedBottomBorder_1lxv9_25",bl="_solidBottomBorder_1lxv9_28",_l="_apLeftBorder_1lxv9_31",Sl="_noBottomBorder_1lxv9_34",Ra={row:ml,harHover:hl,rowHeader:gl,grayHeader:cl,rowContent:pl,selected:yl,bold:vl,dashedBottomBorder:kl,solidBottomBorder:bl,apLeftBorder:_l,noBottomBorder:Sl},Tl=oe.bind(Ra),wl=(e,t,r)=>n=>{e&&n.button===0&&e(n,t,r)},Fa=e=>e.tagName==="TR"?e:Fa(e.parentElement),qn=(e,t)=>{const r=Fa(e.target),n=(t?r.nextSibling:r.previousSibling)||r;n&&(n.focus(),e.preventDefault())},xl=(e,t,r,n)=>a=>{a.key==="ArrowDown"?qn(a,!0):a.key==="ArrowUp"?qn(a,!1):t&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(t(a,r,n),a.preventDefault()):e&&t&&a.target.tagName!=="TD"&&a.key==="Shift"&&(t(a),a.preventDefault())},Dl=e=>t=>{e&&t.target.tagName!=="TD"&&t.key==="Shift"&&(e(t),t.preventDefault())},Aa=({id:e,model:t,isHeader:r=!1,hasGrayHeader:n=!1,onMouseDown:a,onKeyDown:s,children:i,noHover:o=!1,isSelected:l=!1,isBold:u=!1,isDashedBottomBorder:d=!1,isSolidBottomBorder:m=!1,isApLeftBorder:h=!1,className:x,useMultiselect:w=!1,hasNoBottomBorder:g=!1})=>te.jsx("tr",{className:Tl(x,Ra.row,{rowHeader:r,grayHeader:n,rowContent:!r&&!o,selected:l,harHover:!o,bold:u,dashedBottomBorder:d,solidBottomBorder:m,noBottomBorder:g,apLeftBorder:h}),onMouseDown:wl(a,e,t),onKeyDown:xl(w,s,e,t),onKeyUp:w?Dl(s):void 0,tabIndex:0,children:i}),Pl="_table_2cnpl_1",El="_rowHover_2cnpl_25",Nl={table:Pl,rowHover:El},Ml=oe.bind(Nl),Ol="EMPTY",Ia=J.forwardRef(({headerTextCodes:e=[],headerColumnContent:t=[],classNameTable:r="",noHover:n=!1,hasGrayHeader:a=!1,children:s},i)=>te.jsxs("table",{ref:i,className:Ml("table",{[r]:r,rowHover:!n}),children:[te.jsx("thead",{children:te.jsxs(Aa,{isHeader:!0,noHover:n,hasGrayHeader:a,children:[e.map(o=>typeof o=="string"&&o.startsWith(Ol)?te.jsx(Ke,{children:" "},o):te.jsx(Ke,{children:te.jsx(ne,{id:o})},o)),t.map(o=>te.jsx(Ke,{children:o},o.key))]})}),te.jsx("tbody",{children:Array.isArray(s)?J.Children.map(s,o=>J.cloneElement(o,{noHover:n})):J.cloneElement(s,{noHover:n})})]}));Ia.displayName="Table";const Rl="_hidden_1pb4f_1",Fl="_active_1pb4f_8",Al="_activeRow_1pb4f_15 _active_1pb4f_8",Il="_toggleIcon_1pb4f_19",Hl="_colTopPadding_1pb4f_22",Bl={hidden:Rl,active:Fl,activeRow:Al,toggleIcon:Il,colTopPadding:Hl};oe.bind(Bl);Fe(it);const Cl="_fourPx_qda5k_1",jl="_eightPx_qda5k_4",Ll="_sixteenPx_qda5k_7",ql="_twentyPx_qda5k_10",Yl="_thirtyTwoPx_qda5k_13",Ul="_fourtyPx_qda5k_16",Gl={fourPx:Cl,eightPx:jl,sixteenPx:Ll,twentyPx:ql,thirtyTwoPx:Yl,fourtyPx:Ul},Wl=oe.bind(Gl),Ha=({fourPx:e=!1,eightPx:t=!1,sixteenPx:r=!1,twentyPx:n=!1,thirtyTwoPx:a=!1,fourtyPx:s=!1})=>te.jsx("div",{className:Wl({fourPx:e,eightPx:t,sixteenPx:r,twentyPx:n,thirtyTwoPx:a,fourtyPx:s})});Fe(it);const $l="_divider_1t980_1",Vl="_dividerParagraf_1t980_8",zl="_leftPanel_1t980_11",Zl="_rightPanel_1t980_14",Xl={divider:$l,dividerParagraf:Vl,leftPanel:zl,rightPanel:Zl};oe.bind(Xl);const Kl="_editedIcon_ulrjl_1",Jl={editedIcon:Kl};oe.bind(Jl);//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Ba;function p(){return Ba.apply(null,arguments)}function Ql(e){Ba=e}function fe(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Ge(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function A(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Wr(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(A(e,t))return!1;return!0}function ee(e){return e===void 0}function Re(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function _t(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Ca(e,t){var r=[],n,a=e.length;for(n=0;n<a;++n)r.push(t(e[n],n));return r}function Be(e,t){for(var r in t)A(t,r)&&(e[r]=t[r]);return A(t,"toString")&&(e.toString=t.toString),A(t,"valueOf")&&(e.valueOf=t.valueOf),e}function we(e,t,r,n){return os(e,t,r,n,!0).utc()}function eu(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function P(e){return e._pf==null&&(e._pf=eu()),e._pf}var Or;Array.prototype.some?Or=Array.prototype.some:Or=function(e){var t=Object(this),r=t.length>>>0,n;for(n=0;n<r;n++)if(n in t&&e.call(this,t[n],n,t))return!0;return!1};function $r(e){var t=null,r=!1,n=e._d&&!isNaN(e._d.getTime());if(n&&(t=P(e),r=Or.call(t.parsedDateParts,function(a){return a!=null}),n=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&r),e._strict&&(n=n&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=n;else return n;return e._isValid}function Vt(e){var t=we(NaN);return e!=null?Be(P(t),e):P(t).userInvalidated=!0,t}var Yn=p.momentProperties=[],fr=!1;function Vr(e,t){var r,n,a,s=Yn.length;if(ee(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),ee(t._i)||(e._i=t._i),ee(t._f)||(e._f=t._f),ee(t._l)||(e._l=t._l),ee(t._strict)||(e._strict=t._strict),ee(t._tzm)||(e._tzm=t._tzm),ee(t._isUTC)||(e._isUTC=t._isUTC),ee(t._offset)||(e._offset=t._offset),ee(t._pf)||(e._pf=P(t)),ee(t._locale)||(e._locale=t._locale),s>0)for(r=0;r<s;r++)n=Yn[r],a=t[n],ee(a)||(e[n]=a);return e}function St(e){Vr(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),fr===!1&&(fr=!0,p.updateOffset(this),fr=!1)}function me(e){return e instanceof St||e!=null&&e._isAMomentObject!=null}function ja(e){p.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function le(e,t){var r=!0;return Be(function(){if(p.deprecationHandler!=null&&p.deprecationHandler(null,e),r){var n=[],a,s,i,o=arguments.length;for(s=0;s<o;s++){if(a="",typeof arguments[s]=="object"){a+=`
[`+s+"] ";for(i in arguments[0])A(arguments[0],i)&&(a+=i+": "+arguments[0][i]+", ");a=a.slice(0,-2)}else a=arguments[s];n.push(a)}ja(e+`
Arguments: `+Array.prototype.slice.call(n).join("")+`
`+new Error().stack),r=!1}return t.apply(this,arguments)},t)}var Un={};function La(e,t){p.deprecationHandler!=null&&p.deprecationHandler(e,t),Un[e]||(ja(t),Un[e]=!0)}p.suppressDeprecationWarnings=!1;p.deprecationHandler=null;function xe(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function tu(e){var t,r;for(r in e)A(e,r)&&(t=e[r],xe(t)?this[r]=t:this["_"+r]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Rr(e,t){var r=Be({},e),n;for(n in t)A(t,n)&&(Ge(e[n])&&Ge(t[n])?(r[n]={},Be(r[n],e[n]),Be(r[n],t[n])):t[n]!=null?r[n]=t[n]:delete r[n]);for(n in e)A(e,n)&&!A(t,n)&&Ge(e[n])&&(r[n]=Be({},r[n]));return r}function zr(e){e!=null&&this.set(e)}var Fr;Object.keys?Fr=Object.keys:Fr=function(e){var t,r=[];for(t in e)A(e,t)&&r.push(t);return r};var ru={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function nu(e,t,r){var n=this._calendar[e]||this._calendar.sameElse;return xe(n)?n.call(t,r):n}function Te(e,t,r){var n=""+Math.abs(e),a=t-n.length,s=e>=0;return(s?r?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+n}var Zr=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Pt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,mr={},Je={};function S(e,t,r,n){var a=n;typeof n=="string"&&(a=function(){return this[n]()}),e&&(Je[e]=a),t&&(Je[t[0]]=function(){return Te(a.apply(this,arguments),t[1],t[2])}),r&&(Je[r]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function au(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function su(e){var t=e.match(Zr),r,n;for(r=0,n=t.length;r<n;r++)Je[t[r]]?t[r]=Je[t[r]]:t[r]=au(t[r]);return function(a){var s="",i;for(i=0;i<n;i++)s+=xe(t[i])?t[i].call(a,e):t[i];return s}}function Ft(e,t){return e.isValid()?(t=qa(t,e.localeData()),mr[t]=mr[t]||su(t),mr[t](e)):e.localeData().invalidDate()}function qa(e,t){var r=5;function n(a){return t.longDateFormat(a)||a}for(Pt.lastIndex=0;r>=0&&Pt.test(e);)e=e.replace(Pt,n),Pt.lastIndex=0,r-=1;return e}var iu={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function ou(e){var t=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return t||!r?t:(this._longDateFormat[e]=r.match(Zr).map(function(n){return n==="MMMM"||n==="MM"||n==="DD"||n==="dddd"?n.slice(1):n}).join(""),this._longDateFormat[e])}var lu="Invalid date";function uu(){return this._invalidDate}var du="%d",fu=/\d{1,2}/;function mu(e){return this._ordinal.replace("%d",e)}var hu={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function gu(e,t,r,n){var a=this._relativeTime[r];return xe(a)?a(e,t,r,n):a.replace(/%d/i,e)}function cu(e,t){var r=this._relativeTime[e>0?"future":"past"];return xe(r)?r(t):r.replace(/%s/i,t)}var Gn={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function ue(e){return typeof e=="string"?Gn[e]||Gn[e.toLowerCase()]:void 0}function Xr(e){var t={},r,n;for(n in e)A(e,n)&&(r=ue(n),r&&(t[r]=e[n]));return t}var pu={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function yu(e){var t=[],r;for(r in e)A(e,r)&&t.push({unit:r,priority:pu[r]});return t.sort(function(n,a){return n.priority-a.priority}),t}var Ya=/\d/,ae=/\d\d/,Ua=/\d{3}/,Kr=/\d{4}/,zt=/[+-]?\d{6}/,Y=/\d\d?/,Ga=/\d\d\d\d?/,Wa=/\d\d\d\d\d\d?/,Zt=/\d{1,3}/,Jr=/\d{1,4}/,Xt=/[+-]?\d{1,6}/,ot=/\d+/,Kt=/[+-]?\d+/,vu=/Z|[+-]\d\d:?\d\d/gi,Jt=/Z|[+-]\d\d(?::?\d\d)?/gi,ku=/[+-]?\d+(\.\d{1,3})?/,Tt=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,lt=/^[1-9]\d?/,Qr=/^([1-9]\d|\d)/,jt;jt={};function y(e,t,r){jt[e]=xe(t)?t:function(n,a){return n&&r?r:t}}function bu(e,t){return A(jt,e)?jt[e](t._strict,t._locale):new RegExp(_u(e))}function _u(e){return Me(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,r,n,a,s){return r||n||a||s}))}function Me(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function se(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function M(e){var t=+e,r=0;return t!==0&&isFinite(t)&&(r=se(t)),r}var Ar={};function C(e,t){var r,n=t,a;for(typeof e=="string"&&(e=[e]),Re(t)&&(n=function(s,i){i[t]=M(s)}),a=e.length,r=0;r<a;r++)Ar[e[r]]=n}function wt(e,t){C(e,function(r,n,a,s){a._w=a._w||{},t(r,a._w,a,s)})}function Su(e,t,r){t!=null&&A(Ar,e)&&Ar[e](t,r._a,r,e)}function Qt(e){return e%4===0&&e%100!==0||e%400===0}var X=0,Ee=1,ke=2,V=3,de=4,Ne=5,Ue=6,Tu=7,wu=8;S("Y",0,0,function(){var e=this.year();return e<=9999?Te(e,4):"+"+e});S(0,["YY",2],0,function(){return this.year()%100});S(0,["YYYY",4],0,"year");S(0,["YYYYY",5],0,"year");S(0,["YYYYYY",6,!0],0,"year");y("Y",Kt);y("YY",Y,ae);y("YYYY",Jr,Kr);y("YYYYY",Xt,zt);y("YYYYYY",Xt,zt);C(["YYYYY","YYYYYY"],X);C("YYYY",function(e,t){t[X]=e.length===2?p.parseTwoDigitYear(e):M(e)});C("YY",function(e,t){t[X]=p.parseTwoDigitYear(e)});C("Y",function(e,t){t[X]=parseInt(e,10)});function ht(e){return Qt(e)?366:365}p.parseTwoDigitYear=function(e){return M(e)+(M(e)>68?1900:2e3)};var $a=ut("FullYear",!0);function xu(){return Qt(this.year())}function ut(e,t){return function(r){return r!=null?(Va(this,e,r),p.updateOffset(this,t),this):gt(this,e)}}function gt(e,t){if(!e.isValid())return NaN;var r=e._d,n=e._isUTC;switch(t){case"Milliseconds":return n?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return n?r.getUTCSeconds():r.getSeconds();case"Minutes":return n?r.getUTCMinutes():r.getMinutes();case"Hours":return n?r.getUTCHours():r.getHours();case"Date":return n?r.getUTCDate():r.getDate();case"Day":return n?r.getUTCDay():r.getDay();case"Month":return n?r.getUTCMonth():r.getMonth();case"FullYear":return n?r.getUTCFullYear():r.getFullYear();default:return NaN}}function Va(e,t,r){var n,a,s,i,o;if(!(!e.isValid()||isNaN(r))){switch(n=e._d,a=e._isUTC,t){case"Milliseconds":return void(a?n.setUTCMilliseconds(r):n.setMilliseconds(r));case"Seconds":return void(a?n.setUTCSeconds(r):n.setSeconds(r));case"Minutes":return void(a?n.setUTCMinutes(r):n.setMinutes(r));case"Hours":return void(a?n.setUTCHours(r):n.setHours(r));case"Date":return void(a?n.setUTCDate(r):n.setDate(r));case"FullYear":break;default:return}s=r,i=e.month(),o=e.date(),o=o===29&&i===1&&!Qt(s)?28:o,a?n.setUTCFullYear(s,i,o):n.setFullYear(s,i,o)}}function Du(e){return e=ue(e),xe(this[e])?this[e]():this}function Pu(e,t){if(typeof e=="object"){e=Xr(e);var r=yu(e),n,a=r.length;for(n=0;n<a;n++)this[r[n].unit](e[r[n].unit])}else if(e=ue(e),xe(this[e]))return this[e](t);return this}function Eu(e,t){return(e%t+t)%t}var W;Array.prototype.indexOf?W=Array.prototype.indexOf:W=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function en(e,t){if(isNaN(e)||isNaN(t))return NaN;var r=Eu(t,12);return e+=(t-r)/12,r===1?Qt(e)?29:28:31-r%7%2}S("M",["MM",2],"Mo",function(){return this.month()+1});S("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});S("MMMM",0,0,function(e){return this.localeData().months(this,e)});y("M",Y,lt);y("MM",Y,ae);y("MMM",function(e,t){return t.monthsShortRegex(e)});y("MMMM",function(e,t){return t.monthsRegex(e)});C(["M","MM"],function(e,t){t[Ee]=M(e)-1});C(["MMM","MMMM"],function(e,t,r,n){var a=r._locale.monthsParse(e,n,r._strict);a!=null?t[Ee]=a:P(r).invalidMonth=e});var Nu="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),za="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Za=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Mu=Tt,Ou=Tt;function Ru(e,t){return e?fe(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Za).test(t)?"format":"standalone"][e.month()]:fe(this._months)?this._months:this._months.standalone}function Fu(e,t){return e?fe(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Za.test(t)?"format":"standalone"][e.month()]:fe(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Au(e,t,r){var n,a,s,i=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],n=0;n<12;++n)s=we([2e3,n]),this._shortMonthsParse[n]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[n]=this.months(s,"").toLocaleLowerCase();return r?t==="MMM"?(a=W.call(this._shortMonthsParse,i),a!==-1?a:null):(a=W.call(this._longMonthsParse,i),a!==-1?a:null):t==="MMM"?(a=W.call(this._shortMonthsParse,i),a!==-1?a:(a=W.call(this._longMonthsParse,i),a!==-1?a:null)):(a=W.call(this._longMonthsParse,i),a!==-1?a:(a=W.call(this._shortMonthsParse,i),a!==-1?a:null))}function Iu(e,t,r){var n,a,s;if(this._monthsParseExact)return Au.call(this,e,t,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),n=0;n<12;n++){if(a=we([2e3,n]),r&&!this._longMonthsParse[n]&&(this._longMonthsParse[n]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[n]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!r&&!this._monthsParse[n]&&(s="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[n]=new RegExp(s.replace(".",""),"i")),r&&t==="MMMM"&&this._longMonthsParse[n].test(e))return n;if(r&&t==="MMM"&&this._shortMonthsParse[n].test(e))return n;if(!r&&this._monthsParse[n].test(e))return n}}function Xa(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=M(t);else if(t=e.localeData().monthsParse(t),!Re(t))return e}var r=t,n=e.date();return n=n<29?n:Math.min(n,en(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,n):e._d.setMonth(r,n),e}function Ka(e){return e!=null?(Xa(this,e),p.updateOffset(this,!0),this):gt(this,"Month")}function Hu(){return en(this.year(),this.month())}function Bu(e){return this._monthsParseExact?(A(this,"_monthsRegex")||Ja.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(A(this,"_monthsShortRegex")||(this._monthsShortRegex=Mu),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function Cu(e){return this._monthsParseExact?(A(this,"_monthsRegex")||Ja.call(this),e?this._monthsStrictRegex:this._monthsRegex):(A(this,"_monthsRegex")||(this._monthsRegex=Ou),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Ja(){function e(l,u){return u.length-l.length}var t=[],r=[],n=[],a,s,i,o;for(a=0;a<12;a++)s=we([2e3,a]),i=Me(this.monthsShort(s,"")),o=Me(this.months(s,"")),t.push(i),r.push(o),n.push(o),n.push(i);t.sort(e),r.sort(e),n.sort(e),this._monthsRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function ju(e,t,r,n,a,s,i){var o;return e<100&&e>=0?(o=new Date(e+400,t,r,n,a,s,i),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,r,n,a,s,i),o}function ct(e){var t,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,t=new Date(Date.UTC.apply(null,r)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Lt(e,t,r){var n=7+t-r,a=(7+ct(e,0,n).getUTCDay()-t)%7;return-a+n-1}function Qa(e,t,r,n,a){var s=(7+r-n)%7,i=Lt(e,n,a),o=1+7*(t-1)+s+i,l,u;return o<=0?(l=e-1,u=ht(l)+o):o>ht(e)?(l=e+1,u=o-ht(e)):(l=e,u=o),{year:l,dayOfYear:u}}function pt(e,t,r){var n=Lt(e.year(),t,r),a=Math.floor((e.dayOfYear()-n-1)/7)+1,s,i;return a<1?(i=e.year()-1,s=a+Oe(i,t,r)):a>Oe(e.year(),t,r)?(s=a-Oe(e.year(),t,r),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Oe(e,t,r){var n=Lt(e,t,r),a=Lt(e+1,t,r);return(ht(e)-n+a)/7}S("w",["ww",2],"wo","week");S("W",["WW",2],"Wo","isoWeek");y("w",Y,lt);y("ww",Y,ae);y("W",Y,lt);y("WW",Y,ae);wt(["w","ww","W","WW"],function(e,t,r,n){t[n.substr(0,1)]=M(e)});function Lu(e){return pt(e,this._week.dow,this._week.doy).week}var qu={dow:0,doy:6};function Yu(){return this._week.dow}function Uu(){return this._week.doy}function Gu(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function Wu(e){var t=pt(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}S("d",0,"do","day");S("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});S("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});S("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});S("e",0,0,"weekday");S("E",0,0,"isoWeekday");y("d",Y);y("e",Y);y("E",Y);y("dd",function(e,t){return t.weekdaysMinRegex(e)});y("ddd",function(e,t){return t.weekdaysShortRegex(e)});y("dddd",function(e,t){return t.weekdaysRegex(e)});wt(["dd","ddd","dddd"],function(e,t,r,n){var a=r._locale.weekdaysParse(e,n,r._strict);a!=null?t.d=a:P(r).invalidWeekday=e});wt(["d","e","E"],function(e,t,r,n){t[n]=M(e)});function $u(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function Vu(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function tn(e,t){return e.slice(t,7).concat(e.slice(0,t))}var zu="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),es="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Zu="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Xu=Tt,Ku=Tt,Ju=Tt;function Qu(e,t){var r=fe(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?tn(r,this._week.dow):e?r[e.day()]:r}function ed(e){return e===!0?tn(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function td(e){return e===!0?tn(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function rd(e,t,r){var n,a,s,i=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],n=0;n<7;++n)s=we([2e3,1]).day(n),this._minWeekdaysParse[n]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[n]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[n]=this.weekdays(s,"").toLocaleLowerCase();return r?t==="dddd"?(a=W.call(this._weekdaysParse,i),a!==-1?a:null):t==="ddd"?(a=W.call(this._shortWeekdaysParse,i),a!==-1?a:null):(a=W.call(this._minWeekdaysParse,i),a!==-1?a:null):t==="dddd"?(a=W.call(this._weekdaysParse,i),a!==-1||(a=W.call(this._shortWeekdaysParse,i),a!==-1)?a:(a=W.call(this._minWeekdaysParse,i),a!==-1?a:null)):t==="ddd"?(a=W.call(this._shortWeekdaysParse,i),a!==-1||(a=W.call(this._weekdaysParse,i),a!==-1)?a:(a=W.call(this._minWeekdaysParse,i),a!==-1?a:null)):(a=W.call(this._minWeekdaysParse,i),a!==-1||(a=W.call(this._weekdaysParse,i),a!==-1)?a:(a=W.call(this._shortWeekdaysParse,i),a!==-1?a:null))}function nd(e,t,r){var n,a,s;if(this._weekdaysParseExact)return rd.call(this,e,t,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),n=0;n<7;n++){if(a=we([2e3,1]).day(n),r&&!this._fullWeekdaysParse[n]&&(this._fullWeekdaysParse[n]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[n]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[n]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[n]||(s="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[n]=new RegExp(s.replace(".",""),"i")),r&&t==="dddd"&&this._fullWeekdaysParse[n].test(e))return n;if(r&&t==="ddd"&&this._shortWeekdaysParse[n].test(e))return n;if(r&&t==="dd"&&this._minWeekdaysParse[n].test(e))return n;if(!r&&this._weekdaysParse[n].test(e))return n}}function ad(e){if(!this.isValid())return e!=null?this:NaN;var t=gt(this,"Day");return e!=null?(e=$u(e,this.localeData()),this.add(e-t,"d")):t}function sd(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function id(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=Vu(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function od(e){return this._weekdaysParseExact?(A(this,"_weekdaysRegex")||rn.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(A(this,"_weekdaysRegex")||(this._weekdaysRegex=Xu),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function ld(e){return this._weekdaysParseExact?(A(this,"_weekdaysRegex")||rn.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(A(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Ku),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function ud(e){return this._weekdaysParseExact?(A(this,"_weekdaysRegex")||rn.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(A(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ju),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function rn(){function e(d,m){return m.length-d.length}var t=[],r=[],n=[],a=[],s,i,o,l,u;for(s=0;s<7;s++)i=we([2e3,1]).day(s),o=Me(this.weekdaysMin(i,"")),l=Me(this.weekdaysShort(i,"")),u=Me(this.weekdays(i,"")),t.push(o),r.push(l),n.push(u),a.push(o),a.push(l),a.push(u);t.sort(e),r.sort(e),n.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function nn(){return this.hours()%12||12}function dd(){return this.hours()||24}S("H",["HH",2],0,"hour");S("h",["hh",2],0,nn);S("k",["kk",2],0,dd);S("hmm",0,0,function(){return""+nn.apply(this)+Te(this.minutes(),2)});S("hmmss",0,0,function(){return""+nn.apply(this)+Te(this.minutes(),2)+Te(this.seconds(),2)});S("Hmm",0,0,function(){return""+this.hours()+Te(this.minutes(),2)});S("Hmmss",0,0,function(){return""+this.hours()+Te(this.minutes(),2)+Te(this.seconds(),2)});function ts(e,t){S(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}ts("a",!0);ts("A",!1);function rs(e,t){return t._meridiemParse}y("a",rs);y("A",rs);y("H",Y,Qr);y("h",Y,lt);y("k",Y,lt);y("HH",Y,ae);y("hh",Y,ae);y("kk",Y,ae);y("hmm",Ga);y("hmmss",Wa);y("Hmm",Ga);y("Hmmss",Wa);C(["H","HH"],V);C(["k","kk"],function(e,t,r){var n=M(e);t[V]=n===24?0:n});C(["a","A"],function(e,t,r){r._isPm=r._locale.isPM(e),r._meridiem=e});C(["h","hh"],function(e,t,r){t[V]=M(e),P(r).bigHour=!0});C("hmm",function(e,t,r){var n=e.length-2;t[V]=M(e.substr(0,n)),t[de]=M(e.substr(n)),P(r).bigHour=!0});C("hmmss",function(e,t,r){var n=e.length-4,a=e.length-2;t[V]=M(e.substr(0,n)),t[de]=M(e.substr(n,2)),t[Ne]=M(e.substr(a)),P(r).bigHour=!0});C("Hmm",function(e,t,r){var n=e.length-2;t[V]=M(e.substr(0,n)),t[de]=M(e.substr(n))});C("Hmmss",function(e,t,r){var n=e.length-4,a=e.length-2;t[V]=M(e.substr(0,n)),t[de]=M(e.substr(n,2)),t[Ne]=M(e.substr(a))});function fd(e){return(e+"").toLowerCase().charAt(0)==="p"}var md=/[ap]\.?m?\.?/i,hd=ut("Hours",!0);function gd(e,t,r){return e>11?r?"pm":"PM":r?"am":"AM"}var ns={calendar:ru,longDateFormat:iu,invalidDate:lu,ordinal:du,dayOfMonthOrdinalParse:fu,relativeTime:hu,months:Nu,monthsShort:za,week:qu,weekdays:zu,weekdaysMin:Zu,weekdaysShort:es,meridiemParse:md},U={},ft={},yt;function cd(e,t){var r,n=Math.min(e.length,t.length);for(r=0;r<n;r+=1)if(e[r]!==t[r])return r;return n}function Wn(e){return e&&e.toLowerCase().replace("_","-")}function pd(e){for(var t=0,r,n,a,s;t<e.length;){for(s=Wn(e[t]).split("-"),r=s.length,n=Wn(e[t+1]),n=n?n.split("-"):null;r>0;){if(a=er(s.slice(0,r).join("-")),a)return a;if(n&&n.length>=r&&cd(s,n)>=r-1)break;r--}t++}return yt}function yd(e){return!!(e&&e.match("^[^/\\\\]*$"))}function er(e){var t=null,r;if(U[e]===void 0&&typeof module<"u"&&module&&module.exports&&yd(e))try{t=yt._abbr,r=require,r("./locale/"+e),je(t)}catch{U[e]=null}return U[e]}function je(e,t){var r;return e&&(ee(t)?r=Ie(e):r=an(e,t),r?yt=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),yt._abbr}function an(e,t){if(t!==null){var r,n=ns;if(t.abbr=e,U[e]!=null)La("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=U[e]._config;else if(t.parentLocale!=null)if(U[t.parentLocale]!=null)n=U[t.parentLocale]._config;else if(r=er(t.parentLocale),r!=null)n=r._config;else return ft[t.parentLocale]||(ft[t.parentLocale]=[]),ft[t.parentLocale].push({name:e,config:t}),null;return U[e]=new zr(Rr(n,t)),ft[e]&&ft[e].forEach(function(a){an(a.name,a.config)}),je(e),U[e]}else return delete U[e],null}function vd(e,t){if(t!=null){var r,n,a=ns;U[e]!=null&&U[e].parentLocale!=null?U[e].set(Rr(U[e]._config,t)):(n=er(e),n!=null&&(a=n._config),t=Rr(a,t),n==null&&(t.abbr=e),r=new zr(t),r.parentLocale=U[e],U[e]=r),je(e)}else U[e]!=null&&(U[e].parentLocale!=null?(U[e]=U[e].parentLocale,e===je()&&je(e)):U[e]!=null&&delete U[e]);return U[e]}function Ie(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return yt;if(!fe(e)){if(t=er(e),t)return t;e=[e]}return pd(e)}function kd(){return Fr(U)}function sn(e){var t,r=e._a;return r&&P(e).overflow===-2&&(t=r[Ee]<0||r[Ee]>11?Ee:r[ke]<1||r[ke]>en(r[X],r[Ee])?ke:r[V]<0||r[V]>24||r[V]===24&&(r[de]!==0||r[Ne]!==0||r[Ue]!==0)?V:r[de]<0||r[de]>59?de:r[Ne]<0||r[Ne]>59?Ne:r[Ue]<0||r[Ue]>999?Ue:-1,P(e)._overflowDayOfYear&&(t<X||t>ke)&&(t=ke),P(e)._overflowWeeks&&t===-1&&(t=Tu),P(e)._overflowWeekday&&t===-1&&(t=wu),P(e).overflow=t),e}var bd=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_d=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Sd=/Z|[+-]\d\d(?::?\d\d)?/,Et=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],hr=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Td=/^\/?Date\((-?\d+)/i,wd=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,xd={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function as(e){var t,r,n=e._i,a=bd.exec(n)||_d.exec(n),s,i,o,l,u=Et.length,d=hr.length;if(a){for(P(e).iso=!0,t=0,r=u;t<r;t++)if(Et[t][1].exec(a[1])){i=Et[t][0],s=Et[t][2]!==!1;break}if(i==null){e._isValid=!1;return}if(a[3]){for(t=0,r=d;t<r;t++)if(hr[t][1].exec(a[3])){o=(a[2]||" ")+hr[t][0];break}if(o==null){e._isValid=!1;return}}if(!s&&o!=null){e._isValid=!1;return}if(a[4])if(Sd.exec(a[4]))l="Z";else{e._isValid=!1;return}e._f=i+(o||"")+(l||""),ln(e)}else e._isValid=!1}function Dd(e,t,r,n,a,s){var i=[Pd(e),za.indexOf(t),parseInt(r,10),parseInt(n,10),parseInt(a,10)];return s&&i.push(parseInt(s,10)),i}function Pd(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Ed(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Nd(e,t,r){if(e){var n=es.indexOf(e),a=new Date(t[0],t[1],t[2]).getDay();if(n!==a)return P(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function Md(e,t,r){if(e)return xd[e];if(t)return 0;var n=parseInt(r,10),a=n%100,s=(n-a)/100;return s*60+a}function ss(e){var t=wd.exec(Ed(e._i)),r;if(t){if(r=Dd(t[4],t[3],t[2],t[5],t[6],t[7]),!Nd(t[1],r,e))return;e._a=r,e._tzm=Md(t[8],t[9],t[10]),e._d=ct.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),P(e).rfc2822=!0}else e._isValid=!1}function Od(e){var t=Td.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(as(e),e._isValid===!1)delete e._isValid;else return;if(ss(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:p.createFromInputFallback(e)}p.createFromInputFallback=le("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function ze(e,t,r){return e??t??r}function Rd(e){var t=new Date(p.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function on(e){var t,r,n=[],a,s,i;if(!e._d){for(a=Rd(e),e._w&&e._a[ke]==null&&e._a[Ee]==null&&Fd(e),e._dayOfYear!=null&&(i=ze(e._a[X],a[X]),(e._dayOfYear>ht(i)||e._dayOfYear===0)&&(P(e)._overflowDayOfYear=!0),r=ct(i,0,e._dayOfYear),e._a[Ee]=r.getUTCMonth(),e._a[ke]=r.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=n[t]=a[t];for(;t<7;t++)e._a[t]=n[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[V]===24&&e._a[de]===0&&e._a[Ne]===0&&e._a[Ue]===0&&(e._nextDay=!0,e._a[V]=0),e._d=(e._useUTC?ct:ju).apply(null,n),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[V]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(P(e).weekdayMismatch=!0)}}function Fd(e){var t,r,n,a,s,i,o,l,u;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(s=1,i=4,r=ze(t.GG,e._a[X],pt(q(),1,4).year),n=ze(t.W,1),a=ze(t.E,1),(a<1||a>7)&&(l=!0)):(s=e._locale._week.dow,i=e._locale._week.doy,u=pt(q(),s,i),r=ze(t.gg,e._a[X],u.year),n=ze(t.w,u.week),t.d!=null?(a=t.d,(a<0||a>6)&&(l=!0)):t.e!=null?(a=t.e+s,(t.e<0||t.e>6)&&(l=!0)):a=s),n<1||n>Oe(r,s,i)?P(e)._overflowWeeks=!0:l!=null?P(e)._overflowWeekday=!0:(o=Qa(r,n,a,s,i),e._a[X]=o.year,e._dayOfYear=o.dayOfYear)}p.ISO_8601=function(){};p.RFC_2822=function(){};function ln(e){if(e._f===p.ISO_8601){as(e);return}if(e._f===p.RFC_2822){ss(e);return}e._a=[],P(e).empty=!0;var t=""+e._i,r,n,a,s,i,o=t.length,l=0,u,d;for(a=qa(e._f,e._locale).match(Zr)||[],d=a.length,r=0;r<d;r++)s=a[r],n=(t.match(bu(s,e))||[])[0],n&&(i=t.substr(0,t.indexOf(n)),i.length>0&&P(e).unusedInput.push(i),t=t.slice(t.indexOf(n)+n.length),l+=n.length),Je[s]?(n?P(e).empty=!1:P(e).unusedTokens.push(s),Su(s,n,e)):e._strict&&!n&&P(e).unusedTokens.push(s);P(e).charsLeftOver=o-l,t.length>0&&P(e).unusedInput.push(t),e._a[V]<=12&&P(e).bigHour===!0&&e._a[V]>0&&(P(e).bigHour=void 0),P(e).parsedDateParts=e._a.slice(0),P(e).meridiem=e._meridiem,e._a[V]=Ad(e._locale,e._a[V],e._meridiem),u=P(e).era,u!==null&&(e._a[X]=e._locale.erasConvertYear(u,e._a[X])),on(e),sn(e)}function Ad(e,t,r){var n;return r==null?t:e.meridiemHour!=null?e.meridiemHour(t,r):(e.isPM!=null&&(n=e.isPM(r),n&&t<12&&(t+=12),!n&&t===12&&(t=0)),t)}function Id(e){var t,r,n,a,s,i,o=!1,l=e._f.length;if(l===0){P(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<l;a++)s=0,i=!1,t=Vr({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[a],ln(t),$r(t)&&(i=!0),s+=P(t).charsLeftOver,s+=P(t).unusedTokens.length*10,P(t).score=s,o?s<n&&(n=s,r=t):(n==null||s<n||i)&&(n=s,r=t,i&&(o=!0));Be(e,r||t)}function Hd(e){if(!e._d){var t=Xr(e._i),r=t.day===void 0?t.date:t.day;e._a=Ca([t.year,t.month,r,t.hour,t.minute,t.second,t.millisecond],function(n){return n&&parseInt(n,10)}),on(e)}}function Bd(e){var t=new St(sn(is(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function is(e){var t=e._i,r=e._f;return e._locale=e._locale||Ie(e._l),t===null||r===void 0&&t===""?Vt({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),me(t)?new St(sn(t)):(_t(t)?e._d=t:fe(r)?Id(e):r?ln(e):Cd(e),$r(e)||(e._d=null),e))}function Cd(e){var t=e._i;ee(t)?e._d=new Date(p.now()):_t(t)?e._d=new Date(t.valueOf()):typeof t=="string"?Od(e):fe(t)?(e._a=Ca(t.slice(0),function(r){return parseInt(r,10)}),on(e)):Ge(t)?Hd(e):Re(t)?e._d=new Date(t):p.createFromInputFallback(e)}function os(e,t,r,n,a){var s={};return(t===!0||t===!1)&&(n=t,t=void 0),(r===!0||r===!1)&&(n=r,r=void 0),(Ge(e)&&Wr(e)||fe(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=r,s._i=e,s._f=t,s._strict=n,Bd(s)}function q(e,t,r,n){return os(e,t,r,n,!1)}var jd=le("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=q.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Vt()}),Ld=le("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=q.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Vt()});function ls(e,t){var r,n;if(t.length===1&&fe(t[0])&&(t=t[0]),!t.length)return q();for(r=t[0],n=1;n<t.length;++n)(!t[n].isValid()||t[n][e](r))&&(r=t[n]);return r}function qd(){var e=[].slice.call(arguments,0);return ls("isBefore",e)}function Yd(){var e=[].slice.call(arguments,0);return ls("isAfter",e)}var Ud=function(){return Date.now?Date.now():+new Date},mt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Gd(e){var t,r=!1,n,a=mt.length;for(t in e)if(A(e,t)&&!(W.call(mt,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(n=0;n<a;++n)if(e[mt[n]]){if(r)return!1;parseFloat(e[mt[n]])!==M(e[mt[n]])&&(r=!0)}return!0}function Wd(){return this._isValid}function $d(){return ge(NaN)}function tr(e){var t=Xr(e),r=t.year||0,n=t.quarter||0,a=t.month||0,s=t.week||t.isoWeek||0,i=t.day||0,o=t.hour||0,l=t.minute||0,u=t.second||0,d=t.millisecond||0;this._isValid=Gd(t),this._milliseconds=+d+u*1e3+l*6e4+o*1e3*60*60,this._days=+i+s*7,this._months=+a+n*3+r*12,this._data={},this._locale=Ie(),this._bubble()}function At(e){return e instanceof tr}function Ir(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Vd(e,t,r){var n=Math.min(e.length,t.length),a=Math.abs(e.length-t.length),s=0,i;for(i=0;i<n;i++)M(e[i])!==M(t[i])&&s++;return s+a}function us(e,t){S(e,0,0,function(){var r=this.utcOffset(),n="+";return r<0&&(r=-r,n="-"),n+Te(~~(r/60),2)+t+Te(~~r%60,2)})}us("Z",":");us("ZZ","");y("Z",Jt);y("ZZ",Jt);C(["Z","ZZ"],function(e,t,r){r._useUTC=!0,r._tzm=un(Jt,e)});var zd=/([\+\-]|\d\d)/gi;function un(e,t){var r=(t||"").match(e),n,a,s;return r===null?null:(n=r[r.length-1]||[],a=(n+"").match(zd)||["-",0,0],s=+(a[1]*60)+M(a[2]),s===0?0:a[0]==="+"?s:-s)}function dn(e,t){var r,n;return t._isUTC?(r=t.clone(),n=(me(e)||_t(e)?e.valueOf():q(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+n),p.updateOffset(r,!1),r):q(e).local()}function Hr(e){return-Math.round(e._d.getTimezoneOffset())}p.updateOffset=function(){};function Zd(e,t,r){var n=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=un(Jt,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&t&&(a=Hr(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),n!==e&&(!t||this._changeInProgress?ms(this,ge(e-n,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,p.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?n:Hr(this)}function Xd(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Kd(e){return this.utcOffset(0,e)}function Jd(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Hr(this),"m")),this}function Qd(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=un(vu,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function ef(e){return this.isValid()?(e=e?q(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function tf(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function rf(){if(!ee(this._isDSTShifted))return this._isDSTShifted;var e={},t;return Vr(e,this),e=is(e),e._a?(t=e._isUTC?we(e._a):q(e._a),this._isDSTShifted=this.isValid()&&Vd(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function nf(){return this.isValid()?!this._isUTC:!1}function af(){return this.isValid()?this._isUTC:!1}function ds(){return this.isValid()?this._isUTC&&this._offset===0:!1}var sf=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,of=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function ge(e,t){var r=e,n=null,a,s,i;return At(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:Re(e)||!isNaN(+e)?(r={},t?r[t]=+e:r.milliseconds=+e):(n=sf.exec(e))?(a=n[1]==="-"?-1:1,r={y:0,d:M(n[ke])*a,h:M(n[V])*a,m:M(n[de])*a,s:M(n[Ne])*a,ms:M(Ir(n[Ue]*1e3))*a}):(n=of.exec(e))?(a=n[1]==="-"?-1:1,r={y:Ye(n[2],a),M:Ye(n[3],a),w:Ye(n[4],a),d:Ye(n[5],a),h:Ye(n[6],a),m:Ye(n[7],a),s:Ye(n[8],a)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(i=lf(q(r.from),q(r.to)),r={},r.ms=i.milliseconds,r.M=i.months),s=new tr(r),At(e)&&A(e,"_locale")&&(s._locale=e._locale),At(e)&&A(e,"_isValid")&&(s._isValid=e._isValid),s}ge.fn=tr.prototype;ge.invalid=$d;function Ye(e,t){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*t}function $n(e,t){var r={};return r.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(t)&&--r.months,r.milliseconds=+t-+e.clone().add(r.months,"M"),r}function lf(e,t){var r;return e.isValid()&&t.isValid()?(t=dn(t,e),e.isBefore(t)?r=$n(e,t):(r=$n(t,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function fs(e,t){return function(r,n){var a,s;return n!==null&&!isNaN(+n)&&(La(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=r,r=n,n=s),a=ge(r,n),ms(this,a,e),this}}function ms(e,t,r,n){var a=t._milliseconds,s=Ir(t._days),i=Ir(t._months);e.isValid()&&(n=n??!0,i&&Xa(e,gt(e,"Month")+i*r),s&&Va(e,"Date",gt(e,"Date")+s*r),a&&e._d.setTime(e._d.valueOf()+a*r),n&&p.updateOffset(e,s||i))}var uf=fs(1,"add"),df=fs(-1,"subtract");function hs(e){return typeof e=="string"||e instanceof String}function ff(e){return me(e)||_t(e)||hs(e)||Re(e)||hf(e)||mf(e)||e===null||e===void 0}function mf(e){var t=Ge(e)&&!Wr(e),r=!1,n=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,s,i=n.length;for(a=0;a<i;a+=1)s=n[a],r=r||A(e,s);return t&&r}function hf(e){var t=fe(e),r=!1;return t&&(r=e.filter(function(n){return!Re(n)&&hs(e)}).length===0),t&&r}function gf(e){var t=Ge(e)&&!Wr(e),r=!1,n=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,s;for(a=0;a<n.length;a+=1)s=n[a],r=r||A(e,s);return t&&r}function cf(e,t){var r=e.diff(t,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function pf(e,t){arguments.length===1&&(arguments[0]?ff(arguments[0])?(e=arguments[0],t=void 0):gf(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var r=e||q(),n=dn(r,this).startOf("day"),a=p.calendarFormat(this,n)||"sameElse",s=t&&(xe(t[a])?t[a].call(this,r):t[a]);return this.format(s||this.localeData().calendar(a,this,q(r)))}function yf(){return new St(this)}function vf(e,t){var r=me(e)?e:q(e);return this.isValid()&&r.isValid()?(t=ue(t)||"millisecond",t==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(t).valueOf()):!1}function kf(e,t){var r=me(e)?e:q(e);return this.isValid()&&r.isValid()?(t=ue(t)||"millisecond",t==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(t).valueOf()<r.valueOf()):!1}function bf(e,t,r,n){var a=me(e)?e:q(e),s=me(t)?t:q(t);return this.isValid()&&a.isValid()&&s.isValid()?(n=n||"()",(n[0]==="("?this.isAfter(a,r):!this.isBefore(a,r))&&(n[1]===")"?this.isBefore(s,r):!this.isAfter(s,r))):!1}function _f(e,t){var r=me(e)?e:q(e),n;return this.isValid()&&r.isValid()?(t=ue(t)||"millisecond",t==="millisecond"?this.valueOf()===r.valueOf():(n=r.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf())):!1}function Sf(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function Tf(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function wf(e,t,r){var n,a,s;if(!this.isValid())return NaN;if(n=dn(e,this),!n.isValid())return NaN;switch(a=(n.utcOffset()-this.utcOffset())*6e4,t=ue(t),t){case"year":s=It(this,n)/12;break;case"month":s=It(this,n);break;case"quarter":s=It(this,n)/3;break;case"second":s=(this-n)/1e3;break;case"minute":s=(this-n)/6e4;break;case"hour":s=(this-n)/36e5;break;case"day":s=(this-n-a)/864e5;break;case"week":s=(this-n-a)/6048e5;break;default:s=this-n}return r?s:se(s)}function It(e,t){if(e.date()<t.date())return-It(t,e);var r=(t.year()-e.year())*12+(t.month()-e.month()),n=e.clone().add(r,"months"),a,s;return t-n<0?(a=e.clone().add(r-1,"months"),s=(t-n)/(n-a)):(a=e.clone().add(r+1,"months"),s=(t-n)/(a-n)),-(r+s)||0}p.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";p.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function xf(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Df(e){if(!this.isValid())return null;var t=e!==!0,r=t?this.clone().utc():this;return r.year()<0||r.year()>9999?Ft(r,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):xe(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Ft(r,"Z")):Ft(r,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Pf(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",r,n,a,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),r="["+e+'("]',n=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",s=t+'[")]',this.format(r+n+a+s)}function Ef(e){e||(e=this.isUtc()?p.defaultFormatUtc:p.defaultFormat);var t=Ft(this,e);return this.localeData().postformat(t)}function Nf(e,t){return this.isValid()&&(me(e)&&e.isValid()||q(e).isValid())?ge({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Mf(e){return this.from(q(),e)}function Of(e,t){return this.isValid()&&(me(e)&&e.isValid()||q(e).isValid())?ge({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Rf(e){return this.to(q(),e)}function gs(e){var t;return e===void 0?this._locale._abbr:(t=Ie(e),t!=null&&(this._locale=t),this)}var cs=le("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function ps(){return this._locale}var qt=1e3,Qe=60*qt,Yt=60*Qe,ys=(365*400+97)*24*Yt;function et(e,t){return(e%t+t)%t}function vs(e,t,r){return e<100&&e>=0?new Date(e+400,t,r)-ys:new Date(e,t,r).valueOf()}function ks(e,t,r){return e<100&&e>=0?Date.UTC(e+400,t,r)-ys:Date.UTC(e,t,r)}function Ff(e){var t,r;if(e=ue(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?ks:vs,e){case"year":t=r(this.year(),0,1);break;case"quarter":t=r(this.year(),this.month()-this.month()%3,1);break;case"month":t=r(this.year(),this.month(),1);break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=r(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=et(t+(this._isUTC?0:this.utcOffset()*Qe),Yt);break;case"minute":t=this._d.valueOf(),t-=et(t,Qe);break;case"second":t=this._d.valueOf(),t-=et(t,qt);break}return this._d.setTime(t),p.updateOffset(this,!0),this}function Af(e){var t,r;if(e=ue(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?ks:vs,e){case"year":t=r(this.year()+1,0,1)-1;break;case"quarter":t=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=r(this.year(),this.month()+1,1)-1;break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Yt-et(t+(this._isUTC?0:this.utcOffset()*Qe),Yt)-1;break;case"minute":t=this._d.valueOf(),t+=Qe-et(t,Qe)-1;break;case"second":t=this._d.valueOf(),t+=qt-et(t,qt)-1;break}return this._d.setTime(t),p.updateOffset(this,!0),this}function If(){return this._d.valueOf()-(this._offset||0)*6e4}function Hf(){return Math.floor(this.valueOf()/1e3)}function Bf(){return new Date(this.valueOf())}function Cf(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function jf(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Lf(){return this.isValid()?this.toISOString():null}function qf(){return $r(this)}function Yf(){return Be({},P(this))}function Uf(){return P(this).overflow}function Gf(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}S("N",0,0,"eraAbbr");S("NN",0,0,"eraAbbr");S("NNN",0,0,"eraAbbr");S("NNNN",0,0,"eraName");S("NNNNN",0,0,"eraNarrow");S("y",["y",1],"yo","eraYear");S("y",["yy",2],0,"eraYear");S("y",["yyy",3],0,"eraYear");S("y",["yyyy",4],0,"eraYear");y("N",fn);y("NN",fn);y("NNN",fn);y("NNNN",tm);y("NNNNN",rm);C(["N","NN","NNN","NNNN","NNNNN"],function(e,t,r,n){var a=r._locale.erasParse(e,n,r._strict);a?P(r).era=a:P(r).invalidEra=e});y("y",ot);y("yy",ot);y("yyy",ot);y("yyyy",ot);y("yo",nm);C(["y","yy","yyy","yyyy"],X);C(["yo"],function(e,t,r,n){var a;r._locale._eraYearOrdinalRegex&&(a=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?t[X]=r._locale.eraYearOrdinalParse(e,a):t[X]=parseInt(e,10)});function Wf(e,t){var r,n,a,s=this._eras||Ie("en")._eras;for(r=0,n=s.length;r<n;++r){switch(typeof s[r].since){case"string":a=p(s[r].since).startOf("day"),s[r].since=a.valueOf();break}switch(typeof s[r].until){case"undefined":s[r].until=1/0;break;case"string":a=p(s[r].until).startOf("day").valueOf(),s[r].until=a.valueOf();break}}return s}function $f(e,t,r){var n,a,s=this.eras(),i,o,l;for(e=e.toUpperCase(),n=0,a=s.length;n<a;++n)if(i=s[n].name.toUpperCase(),o=s[n].abbr.toUpperCase(),l=s[n].narrow.toUpperCase(),r)switch(t){case"N":case"NN":case"NNN":if(o===e)return s[n];break;case"NNNN":if(i===e)return s[n];break;case"NNNNN":if(l===e)return s[n];break}else if([i,o,l].indexOf(e)>=0)return s[n]}function Vf(e,t){var r=e.since<=e.until?1:-1;return t===void 0?p(e.since).year():p(e.since).year()+(t-e.offset)*r}function zf(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].name;return""}function Zf(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].narrow;return""}function Xf(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].abbr;return""}function Kf(){var e,t,r,n,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=a[e].since<=a[e].until?1:-1,n=this.clone().startOf("day").valueOf(),a[e].since<=n&&n<=a[e].until||a[e].until<=n&&n<=a[e].since)return(this.year()-p(a[e].since).year())*r+a[e].offset;return this.year()}function Jf(e){return A(this,"_erasNameRegex")||mn.call(this),e?this._erasNameRegex:this._erasRegex}function Qf(e){return A(this,"_erasAbbrRegex")||mn.call(this),e?this._erasAbbrRegex:this._erasRegex}function em(e){return A(this,"_erasNarrowRegex")||mn.call(this),e?this._erasNarrowRegex:this._erasRegex}function fn(e,t){return t.erasAbbrRegex(e)}function tm(e,t){return t.erasNameRegex(e)}function rm(e,t){return t.erasNarrowRegex(e)}function nm(e,t){return t._eraYearOrdinalRegex||ot}function mn(){var e=[],t=[],r=[],n=[],a,s,i,o,l,u=this.eras();for(a=0,s=u.length;a<s;++a)i=Me(u[a].name),o=Me(u[a].abbr),l=Me(u[a].narrow),t.push(i),e.push(o),r.push(l),n.push(i),n.push(o),n.push(l);this._erasRegex=new RegExp("^("+n.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}S(0,["gg",2],0,function(){return this.weekYear()%100});S(0,["GG",2],0,function(){return this.isoWeekYear()%100});function rr(e,t){S(0,[e,e.length],0,t)}rr("gggg","weekYear");rr("ggggg","weekYear");rr("GGGG","isoWeekYear");rr("GGGGG","isoWeekYear");y("G",Kt);y("g",Kt);y("GG",Y,ae);y("gg",Y,ae);y("GGGG",Jr,Kr);y("gggg",Jr,Kr);y("GGGGG",Xt,zt);y("ggggg",Xt,zt);wt(["gggg","ggggg","GGGG","GGGGG"],function(e,t,r,n){t[n.substr(0,2)]=M(e)});wt(["gg","GG"],function(e,t,r,n){t[n]=p.parseTwoDigitYear(e)});function am(e){return bs.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function sm(e){return bs.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function im(){return Oe(this.year(),1,4)}function om(){return Oe(this.isoWeekYear(),1,4)}function lm(){var e=this.localeData()._week;return Oe(this.year(),e.dow,e.doy)}function um(){var e=this.localeData()._week;return Oe(this.weekYear(),e.dow,e.doy)}function bs(e,t,r,n,a){var s;return e==null?pt(this,n,a).year:(s=Oe(e,n,a),t>s&&(t=s),dm.call(this,e,t,r,n,a))}function dm(e,t,r,n,a){var s=Qa(e,t,r,n,a),i=ct(s.year,0,s.dayOfYear);return this.year(i.getUTCFullYear()),this.month(i.getUTCMonth()),this.date(i.getUTCDate()),this}S("Q",0,"Qo","quarter");y("Q",Ya);C("Q",function(e,t){t[Ee]=(M(e)-1)*3});function fm(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}S("D",["DD",2],"Do","date");y("D",Y,lt);y("DD",Y,ae);y("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});C(["D","DD"],ke);C("Do",function(e,t){t[ke]=M(e.match(Y)[0])});var _s=ut("Date",!0);S("DDD",["DDDD",3],"DDDo","dayOfYear");y("DDD",Zt);y("DDDD",Ua);C(["DDD","DDDD"],function(e,t,r){r._dayOfYear=M(e)});function mm(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}S("m",["mm",2],0,"minute");y("m",Y,Qr);y("mm",Y,ae);C(["m","mm"],de);var hm=ut("Minutes",!1);S("s",["ss",2],0,"second");y("s",Y,Qr);y("ss",Y,ae);C(["s","ss"],Ne);var gm=ut("Seconds",!1);S("S",0,0,function(){return~~(this.millisecond()/100)});S(0,["SS",2],0,function(){return~~(this.millisecond()/10)});S(0,["SSS",3],0,"millisecond");S(0,["SSSS",4],0,function(){return this.millisecond()*10});S(0,["SSSSS",5],0,function(){return this.millisecond()*100});S(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});S(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});S(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});S(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});y("S",Zt,Ya);y("SS",Zt,ae);y("SSS",Zt,Ua);var Ce,Ss;for(Ce="SSSS";Ce.length<=9;Ce+="S")y(Ce,ot);function cm(e,t){t[Ue]=M(("0."+e)*1e3)}for(Ce="S";Ce.length<=9;Ce+="S")C(Ce,cm);Ss=ut("Milliseconds",!1);S("z",0,0,"zoneAbbr");S("zz",0,0,"zoneName");function pm(){return this._isUTC?"UTC":""}function ym(){return this._isUTC?"Coordinated Universal Time":""}var f=St.prototype;f.add=uf;f.calendar=pf;f.clone=yf;f.diff=wf;f.endOf=Af;f.format=Ef;f.from=Nf;f.fromNow=Mf;f.to=Of;f.toNow=Rf;f.get=Du;f.invalidAt=Uf;f.isAfter=vf;f.isBefore=kf;f.isBetween=bf;f.isSame=_f;f.isSameOrAfter=Sf;f.isSameOrBefore=Tf;f.isValid=qf;f.lang=cs;f.locale=gs;f.localeData=ps;f.max=Ld;f.min=jd;f.parsingFlags=Yf;f.set=Pu;f.startOf=Ff;f.subtract=df;f.toArray=Cf;f.toObject=jf;f.toDate=Bf;f.toISOString=Df;f.inspect=Pf;typeof Symbol<"u"&&Symbol.for!=null&&(f[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});f.toJSON=Lf;f.toString=xf;f.unix=Hf;f.valueOf=If;f.creationData=Gf;f.eraName=zf;f.eraNarrow=Zf;f.eraAbbr=Xf;f.eraYear=Kf;f.year=$a;f.isLeapYear=xu;f.weekYear=am;f.isoWeekYear=sm;f.quarter=f.quarters=fm;f.month=Ka;f.daysInMonth=Hu;f.week=f.weeks=Gu;f.isoWeek=f.isoWeeks=Wu;f.weeksInYear=lm;f.weeksInWeekYear=um;f.isoWeeksInYear=im;f.isoWeeksInISOWeekYear=om;f.date=_s;f.day=f.days=ad;f.weekday=sd;f.isoWeekday=id;f.dayOfYear=mm;f.hour=f.hours=hd;f.minute=f.minutes=hm;f.second=f.seconds=gm;f.millisecond=f.milliseconds=Ss;f.utcOffset=Zd;f.utc=Kd;f.local=Jd;f.parseZone=Qd;f.hasAlignedHourOffset=ef;f.isDST=tf;f.isLocal=nf;f.isUtcOffset=af;f.isUtc=ds;f.isUTC=ds;f.zoneAbbr=pm;f.zoneName=ym;f.dates=le("dates accessor is deprecated. Use date instead.",_s);f.months=le("months accessor is deprecated. Use month instead",Ka);f.years=le("years accessor is deprecated. Use year instead",$a);f.zone=le("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Xd);f.isDSTShifted=le("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",rf);function vm(e){return q(e*1e3)}function km(){return q.apply(null,arguments).parseZone()}function Ts(e){return e}var I=zr.prototype;I.calendar=nu;I.longDateFormat=ou;I.invalidDate=uu;I.ordinal=mu;I.preparse=Ts;I.postformat=Ts;I.relativeTime=gu;I.pastFuture=cu;I.set=tu;I.eras=Wf;I.erasParse=$f;I.erasConvertYear=Vf;I.erasAbbrRegex=Qf;I.erasNameRegex=Jf;I.erasNarrowRegex=em;I.months=Ru;I.monthsShort=Fu;I.monthsParse=Iu;I.monthsRegex=Cu;I.monthsShortRegex=Bu;I.week=Lu;I.firstDayOfYear=Uu;I.firstDayOfWeek=Yu;I.weekdays=Qu;I.weekdaysMin=td;I.weekdaysShort=ed;I.weekdaysParse=nd;I.weekdaysRegex=od;I.weekdaysShortRegex=ld;I.weekdaysMinRegex=ud;I.isPM=fd;I.meridiem=gd;function Ut(e,t,r,n){var a=Ie(),s=we().set(n,t);return a[r](s,e)}function ws(e,t,r){if(Re(e)&&(t=e,e=void 0),e=e||"",t!=null)return Ut(e,t,r,"month");var n,a=[];for(n=0;n<12;n++)a[n]=Ut(e,n,r,"month");return a}function hn(e,t,r,n){typeof e=="boolean"?(Re(t)&&(r=t,t=void 0),t=t||""):(t=e,r=t,e=!1,Re(t)&&(r=t,t=void 0),t=t||"");var a=Ie(),s=e?a._week.dow:0,i,o=[];if(r!=null)return Ut(t,(r+s)%7,n,"day");for(i=0;i<7;i++)o[i]=Ut(t,(i+s)%7,n,"day");return o}function bm(e,t){return ws(e,t,"months")}function _m(e,t){return ws(e,t,"monthsShort")}function Sm(e,t,r){return hn(e,t,r,"weekdays")}function Tm(e,t,r){return hn(e,t,r,"weekdaysShort")}function wm(e,t,r){return hn(e,t,r,"weekdaysMin")}je("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,r=M(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+r}});p.lang=le("moment.lang is deprecated. Use moment.locale instead.",je);p.langData=le("moment.langData is deprecated. Use moment.localeData instead.",Ie);var De=Math.abs;function xm(){var e=this._data;return this._milliseconds=De(this._milliseconds),this._days=De(this._days),this._months=De(this._months),e.milliseconds=De(e.milliseconds),e.seconds=De(e.seconds),e.minutes=De(e.minutes),e.hours=De(e.hours),e.months=De(e.months),e.years=De(e.years),this}function xs(e,t,r,n){var a=ge(t,r);return e._milliseconds+=n*a._milliseconds,e._days+=n*a._days,e._months+=n*a._months,e._bubble()}function Dm(e,t){return xs(this,e,t,1)}function Pm(e,t){return xs(this,e,t,-1)}function Vn(e){return e<0?Math.floor(e):Math.ceil(e)}function Em(){var e=this._milliseconds,t=this._days,r=this._months,n=this._data,a,s,i,o,l;return e>=0&&t>=0&&r>=0||e<=0&&t<=0&&r<=0||(e+=Vn(Br(r)+t)*864e5,t=0,r=0),n.milliseconds=e%1e3,a=se(e/1e3),n.seconds=a%60,s=se(a/60),n.minutes=s%60,i=se(s/60),n.hours=i%24,t+=se(i/24),l=se(Ds(t)),r+=l,t-=Vn(Br(l)),o=se(r/12),r%=12,n.days=t,n.months=r,n.years=o,this}function Ds(e){return e*4800/146097}function Br(e){return e*146097/4800}function Nm(e){if(!this.isValid())return NaN;var t,r,n=this._milliseconds;if(e=ue(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+n/864e5,r=this._months+Ds(t),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(t=this._days+Math.round(Br(this._months)),e){case"week":return t/7+n/6048e5;case"day":return t+n/864e5;case"hour":return t*24+n/36e5;case"minute":return t*1440+n/6e4;case"second":return t*86400+n/1e3;case"millisecond":return Math.floor(t*864e5)+n;default:throw new Error("Unknown unit "+e)}}function He(e){return function(){return this.as(e)}}var Ps=He("ms"),Mm=He("s"),Om=He("m"),Rm=He("h"),Fm=He("d"),Am=He("w"),Im=He("M"),Hm=He("Q"),Bm=He("y"),Cm=Ps;function jm(){return ge(this)}function Lm(e){return e=ue(e),this.isValid()?this[e+"s"]():NaN}function $e(e){return function(){return this.isValid()?this._data[e]:NaN}}var qm=$e("milliseconds"),Ym=$e("seconds"),Um=$e("minutes"),Gm=$e("hours"),Wm=$e("days"),$m=$e("months"),Vm=$e("years");function zm(){return se(this.days()/7)}var Pe=Math.round,Ze={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Zm(e,t,r,n,a){return a.relativeTime(t||1,!!r,e,n)}function Xm(e,t,r,n){var a=ge(e).abs(),s=Pe(a.as("s")),i=Pe(a.as("m")),o=Pe(a.as("h")),l=Pe(a.as("d")),u=Pe(a.as("M")),d=Pe(a.as("w")),m=Pe(a.as("y")),h=s<=r.ss&&["s",s]||s<r.s&&["ss",s]||i<=1&&["m"]||i<r.m&&["mm",i]||o<=1&&["h"]||o<r.h&&["hh",o]||l<=1&&["d"]||l<r.d&&["dd",l];return r.w!=null&&(h=h||d<=1&&["w"]||d<r.w&&["ww",d]),h=h||u<=1&&["M"]||u<r.M&&["MM",u]||m<=1&&["y"]||["yy",m],h[2]=t,h[3]=+e>0,h[4]=n,Zm.apply(null,h)}function Km(e){return e===void 0?Pe:typeof e=="function"?(Pe=e,!0):!1}function Jm(e,t){return Ze[e]===void 0?!1:t===void 0?Ze[e]:(Ze[e]=t,e==="s"&&(Ze.ss=t-1),!0)}function Qm(e,t){if(!this.isValid())return this.localeData().invalidDate();var r=!1,n=Ze,a,s;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(r=e),typeof t=="object"&&(n=Object.assign({},Ze,t),t.s!=null&&t.ss==null&&(n.ss=t.s-1)),a=this.localeData(),s=Xm(this,!r,n,a),r&&(s=a.pastFuture(+this,s)),a.postformat(s)}var gr=Math.abs;function Ve(e){return(e>0)-(e<0)||+e}function nr(){if(!this.isValid())return this.localeData().invalidDate();var e=gr(this._milliseconds)/1e3,t=gr(this._days),r=gr(this._months),n,a,s,i,o=this.asSeconds(),l,u,d,m;return o?(n=se(e/60),a=se(n/60),e%=60,n%=60,s=se(r/12),r%=12,i=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=o<0?"-":"",u=Ve(this._months)!==Ve(o)?"-":"",d=Ve(this._days)!==Ve(o)?"-":"",m=Ve(this._milliseconds)!==Ve(o)?"-":"",l+"P"+(s?u+s+"Y":"")+(r?u+r+"M":"")+(t?d+t+"D":"")+(a||n||e?"T":"")+(a?m+a+"H":"")+(n?m+n+"M":"")+(e?m+i+"S":"")):"P0D"}var F=tr.prototype;F.isValid=Wd;F.abs=xm;F.add=Dm;F.subtract=Pm;F.as=Nm;F.asMilliseconds=Ps;F.asSeconds=Mm;F.asMinutes=Om;F.asHours=Rm;F.asDays=Fm;F.asWeeks=Am;F.asMonths=Im;F.asQuarters=Hm;F.asYears=Bm;F.valueOf=Cm;F._bubble=Em;F.clone=jm;F.get=Lm;F.milliseconds=qm;F.seconds=Ym;F.minutes=Um;F.hours=Gm;F.days=Wm;F.weeks=zm;F.months=$m;F.years=Vm;F.humanize=Qm;F.toISOString=nr;F.toString=nr;F.toJSON=nr;F.locale=gs;F.localeData=ps;F.toIsoString=le("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",nr);F.lang=cs;S("X",0,0,"unix");S("x",0,0,"valueOf");y("x",Kt);y("X",ku);C("X",function(e,t,r){r._d=new Date(parseFloat(e)*1e3)});C("x",function(e,t,r){r._d=new Date(M(e))});//! moment.js
p.version="2.30.1";Ql(q);p.fn=f;p.min=qd;p.max=Yd;p.now=Ud;p.utc=we;p.unix=vm;p.months=bm;p.isDate=_t;p.locale=je;p.invalid=Vt;p.duration=ge;p.isMoment=me;p.weekdays=Sm;p.parseZone=km;p.localeData=Ie;p.isDuration=At;p.monthsShort=_m;p.weekdaysMin=wm;p.defineLocale=an;p.updateLocale=vd;p.locales=kd;p.weekdaysShort=Tm;p.normalizeUnits=ue;p.relativeTimeRounding=Km;p.relativeTimeThreshold=Jm;p.calendarFormat=cf;p.prototype=f;p.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const eh="_colMargin_1r8hu_1",Gt={colMargin:eh},Ht=e=>e?p(e,Yr).format(Ur):"-",th=(e,t,r,n)=>e&&Object.keys(t).length>0?Ht(Object.values(t)[0]):n?Ht(n):e?r?Ht(r):"-":null,Es=({soknad:e,termindato:t})=>{const r=e.fodselsdatoer?e.fodselsdatoer:{},n=Object.keys(r).length>0?"FodselsammenligningPanel.Fodselsdato":"FodselsammenligningPanel.Termindato",a=Object.keys(r).length>0?"FodselSammenligningOtherPanel.OpplysningerISoknad":"FodselSammenligningOtherPanel.TerminISoknad",s=G.useMemo(()=>th(!!e,r,e.termindato,t),[e,r,t]);return v.jsxs(v.Fragment,{children:[v.jsx(Gr,{size:"small",children:v.jsx(ne,{id:a})}),v.jsx(Ha,{sixteenPx:!0}),v.jsx(Ct,{children:v.jsxs(Bt,{children:[e.utstedtdato&&v.jsxs(be,{className:Gt.colMargin,children:[v.jsx(Xe,{size:"small",children:v.jsx(ne,{id:"FodselsammenligningPanel.UstedtDato"})}),v.jsx(_e,{size:"small",children:Ht(e.utstedtdato)})]}),v.jsxs(be,{className:Gt.colMargin,children:[v.jsx(Xe,{size:"small",children:v.jsx(ne,{id:n})}),v.jsx(_e,{size:"small",children:s})]}),v.jsxs(be,{children:[v.jsx(Xe,{size:"small",children:v.jsx(ne,{id:"FodselsammenligningPanel.AntallBarn"})}),v.jsx(_e,{size:"small",children:e.antallBarn})]})]})})]})};Es.__docgenInfo={description:`FodselSammenligningOtherPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""}}};const cr=e=>e?p(e,Yr).format(Ur):"-",rh=(e,t,r)=>{if(!t&&!r)return"";const n=r||{termindato:void 0,avklartBarn:[]};if(e){const a=n.termindato?n.termindato:t==null?void 0:t.termindato;return a?cr(a):void 0}return n.avklartBarn&&n.avklartBarn.length>0?cr(n.avklartBarn[0].fodselsdato):t!=null&&t.fodselsdatoer?cr(Object.values(t.fodselsdatoer)[0]):"-"},nh=(e,t,r)=>{if(!t&&!r)return 0;const n=r||{termindato:void 0,antallBarnTermin:void 0,avklartBarn:[]};return e?n.termindato?n.antallBarnTermin:t==null?void 0:t.antallBarn:n.avklartBarn&&n.avklartBarn.length>0?n.avklartBarn.length:t==null?void 0:t.antallBarn},Ns=({vedtaksDatoSomSvangerskapsuke:e,soknadOriginalBehandling:t,familiehendelseOriginalBehandling:r})=>{const n=r&&!!r.termindato||!(t!=null&&t.fodselsdatoer)||Object.keys(t.fodselsdatoer).length===0,a=n?"FodselsammenligningPanel.Termindato":"FodselsammenligningPanel.Fodselsdato",s=rh(n,t,r),i=nh(n,t,r),o=r?(!r.avklartBarn||r.avklartBarn.length===0)&&!!e:!1;return v.jsxs(v.Fragment,{children:[v.jsx(Gr,{size:"small",children:v.jsx(ne,{id:"FodselsammenligningPanel.Ytelsesvedtak"})}),v.jsx(Ha,{sixteenPx:!0}),v.jsx(Ct,{children:v.jsxs(Bt,{children:[o&&v.jsxs(be,{className:Gt.colMargin,children:[v.jsx(Xe,{size:"small",children:v.jsx(ne,{id:"FodselsammenligningPanel.FodtISvangerskapsuke"})}),v.jsx(_e,{size:"small",children:e})]}),v.jsxs(be,{className:Gt.colMargin,children:[v.jsx(Xe,{size:"small",children:v.jsx(ne,{id:a})}),v.jsx(_e,{size:"small",children:s??"-"})]}),v.jsxs(be,{children:[v.jsx(Xe,{size:"small",children:v.jsx(ne,{id:"FodselsammenligningPanel.AntallBarn"})}),v.jsx(_e,{size:"small",children:i??"-"})]})]})})]})};Ns.__docgenInfo={description:`FodselSammenligningRevurderingPanel

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
}>`},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const ah="_noChildrenInTps_3z81w_1",sh="_colWidthLeft_3z81w_5",ih="_colWidthRight_3z81w_9",pr={noChildrenInTps:ah,colWidthLeft:sh,colWidthRight:ih},zn=e=>e?p(e,Yr).format(Ur):"-",Ms=({behandlingsTypeKode:e,avklartBarn:t,nrOfDodfodteBarn:r,soknad:n,vedtaksDatoSomSvangerskapsuke:a,termindato:s,soknadOriginalBehandling:i,familiehendelseOriginalBehandling:o})=>v.jsx(Ct,{children:v.jsxs(Bt,{children:[v.jsxs(be,{className:pr.colWidthLeft,children:[e!==tt.REVURDERING&&v.jsx(Es,{soknad:n,termindato:s}),e===tt.REVURDERING&&v.jsx(Ns,{soknadOriginalBehandling:i,familiehendelseOriginalBehandling:o,vedtaksDatoSomSvangerskapsuke:a})]}),v.jsxs(be,{className:pr.colWidthRight,children:[v.jsx(Ct,{children:v.jsxs(Bt,{children:[v.jsx(be,{children:v.jsx(Gr,{size:"small",children:v.jsx(ne,{id:"FodselsammenligningPanel.OpplysningerTPS"})})}),r>0&&v.jsx(be,{children:v.jsx(In,{variant:"info",children:v.jsx(ne,{id:"FodselsammenligningPanel.Dodfodt"})})})]})}),t.length>0&&v.jsx(Ia,{noHover:!0,headerTextCodes:["FodselsammenligningPanel.Fodselsdato","FodselsammenligningPanel.Dodsdato"],children:t.map(l=>{const u=l.fodselsdato+l.dodsdato;return v.jsxs(Aa,{id:u,children:[v.jsx(Ke,{children:v.jsx(_e,{size:"small",children:zn(l.fodselsdato)})}),v.jsx(Ke,{children:v.jsx(_e,{size:"small",children:l.dodsdato?zn(l.dodsdato):"-"})}),v.jsx(Ke,{children:l.dodsdato&&v.jsx(In,{variant:"info",children:v.jsx(ne,{id:"FodselsammenligningPanel.Dod"})})})]},u)})}),t.length===0&&v.jsx("div",{className:pr.noChildrenInTps,children:v.jsx(_e,{size:"small",children:"-"})})]})]})});Ms.__docgenInfo={description:`FodselSammenlingningPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const oh={"FodselsammenligningPanel.AntallBarn":"Antall barn","FodselsammenligningPanel.Termindato":"Termindato","FodselsammenligningPanel.FodtISvangerskapsuke":"Født i svangerskapsuke","FodselsammenligningPanel.Svangerskapsuke":"Svangerskapsuke","FodselsammenligningPanel.OpplysningerTPS":"Opplysninger om fødsel fra folkeregisteret","FodselsammenligningPanel.Fodselsdato":"Fødselsdato","FodselsammenligningPanel.Dodsdato":"Dødsdato","FodselsammenligningPanel.UstedtDato":"Utstedt dato","FodselsammenligningPanel.Ytelsesvedtak":"Vedtak","FodselsammenligningPanel.Dodfodt":"Dødfødsel","FodselsammenligningPanel.Dod":"Død","FodselSammenligningOtherPanel.OpplysningerISoknad":"Opplysninger om fødsel fra søknaden","FodselSammenligningOtherPanel.TerminISoknad":"Opplysninger om termin oppgitt i søknaden"},lh=Fe(oh),Os=({behandlingsTypeKode:e,avklartBarn:t=[],termindato:r,vedtaksDatoSomSvangerskapsuke:n,soknad:a,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:i})=>{const o=t.reduce((l,u)=>l+(u.dodsdato?1:0),0);return v.jsx(io,{value:lh,children:v.jsx(Ms,{avklartBarn:t,termindato:r,vedtaksDatoSomSvangerskapsuke:n,nrOfDodfodteBarn:o,behandlingsTypeKode:e,soknad:a,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:i})})};Os.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningIndex",props:{behandlingsTypeKode:{required:!0,tsType:{name:"string"},description:""},avklartBarn:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const uh=[{fodselsdato:"2019-01-10",dodsdato:"2019-01-10",fnr:"1213200001"}],dh={fodselsdatoer:{1:"2019-01-10"},termindato:"2019-01-01",utstedtdato:"2019-01-02",antallBarn:1},fh={avklartBarn:[{fodselsdato:"2019-01-10"}],termindato:"2019-01-01",antallBarnTermin:1},ph={title:"prosessOgFakta/prosess-fakta-fodsel-sammenligning",component:Os,args:{avklartBarn:uh,termindato:"2019-01-01",soknad:dh,familiehendelseOriginalBehandling:fh}},Nt={args:{behandlingsTypeKode:tt.REVURDERING}},Mt={args:{behandlingsTypeKode:tt.FORSTEGANGSSOKNAD}},Ot={args:{behandlingsTypeKode:tt.REVURDERING,vedtaksDatoSomSvangerskapsuke:43,familiehendelseOriginalBehandling:{avklartBarn:[],termindato:"2019-01-01",antallBarnTermin:1}}};var Zn,Xn,Kn;Nt.parameters={...Nt.parameters,docs:{...(Zn=Nt.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
  args: {
    behandlingsTypeKode: BehandlingType.REVURDERING
  }
}`,...(Kn=(Xn=Nt.parameters)==null?void 0:Xn.docs)==null?void 0:Kn.source}}};var Jn,Qn,ea;Mt.parameters={...Mt.parameters,docs:{...(Jn=Mt.parameters)==null?void 0:Jn.docs,source:{originalSource:`{
  args: {
    behandlingsTypeKode: BehandlingType.FORSTEGANGSSOKNAD
  }
}`,...(ea=(Qn=Mt.parameters)==null?void 0:Qn.docs)==null?void 0:ea.source}}};var ta,ra,na;Ot.parameters={...Ot.parameters,docs:{...(ta=Ot.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  args: {
    behandlingsTypeKode: BehandlingType.REVURDERING,
    vedtaksDatoSomSvangerskapsuke: 43,
    familiehendelseOriginalBehandling: {
      avklartBarn: [] as AvklartBarn[],
      termindato: '2019-01-01',
      antallBarnTermin: 1
    } as FamilieHendelse
  }
}`,...(na=(ra=Ot.parameters)==null?void 0:ra.docs)==null?void 0:na.source}}};const yh=["PanelForNårBehandlingstypeErRevurdering","PanelForNårBehandlingstypeErFørstegangssoknad","PanelForMedVisningAvSvangerskapsuke"];export{Ot as PanelForMedVisningAvSvangerskapsuke,Mt as PanelForNårBehandlingstypeErFørstegangssoknad,Nt as PanelForNårBehandlingstypeErRevurdering,yh as __namedExportsOrder,ph as default};
