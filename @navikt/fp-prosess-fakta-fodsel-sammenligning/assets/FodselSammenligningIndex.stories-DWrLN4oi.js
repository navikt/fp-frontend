import{j as v}from"./jsx-runtime-CLpGMVip.js";import{r as L,R as K}from"./index-Cf9XvIV_.js";import{d as Wt}from"./dayjs.min-DPY8FYmS.js";import"./_commonjsHelpers-CqkleIqs.js";var $t=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))($t||{});$t.BRUKERS_ANDEL;$t.FRILANS;$t.EGEN_NÆRING;var nt=(e=>(e.FORSTEGANGSSOKNAD="BT-002",e.KLAGE="BT-003",e.REVURDERING="BT-004",e.DOKUMENTINNSYN="BT-006",e.TILBAKEKREVING="BT-007",e.ANKE="BT-008",e.TILBAKEKREVING_REVURDERING="BT-009",e))(nt||{}),vn=function(e,t){return vn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])},vn(e,t)};function he(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");vn(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var b=function(){return b=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},b.apply(this,arguments)};function rt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function ve(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,s;r<a;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}function pe(e,t){var n=t&&t.cache?t.cache:Ys,r=t&&t.serializer?t.serializer:Ls,a=t&&t.strategy?t.strategy:Bs;return a(e,{cache:n,serializer:r})}function Hs(e){return e==null||typeof e=="number"||typeof e=="boolean"}function ia(e,t,n,r){var a=Hs(r)?r:n(r),s=t.get(a);return typeof s>"u"&&(s=e.call(this,r),t.set(a,s)),s}function oa(e,t,n){var r=Array.prototype.slice.call(arguments,3),a=n(r),s=t.get(a);return typeof s>"u"&&(s=e.apply(this,r),t.set(a,s)),s}function Ln(e,t,n,r,a){return n.bind(t,e,r,a)}function Bs(e,t){var n=e.length===1?ia:oa;return Ln(e,this,n,t.cache.create(),t.serializer)}function Cs(e,t){return Ln(e,this,oa,t.cache.create(),t.serializer)}function js(e,t){return Ln(e,this,ia,t.cache.create(),t.serializer)}var Ls=function(){return JSON.stringify(arguments)},qs=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(t){return this.cache[t]},e.prototype.set=function(t,n){this.cache[t]=n},e}(),Ys={create:function(){return new qs}},ye={variadic:Cs,monadic:js},O;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(O||(O={}));var q;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(q||(q={}));var at;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(at||(at={}));function pr(e){return e.type===q.literal}function Us(e){return e.type===q.argument}function la(e){return e.type===q.number}function ua(e){return e.type===q.date}function da(e){return e.type===q.time}function fa(e){return e.type===q.select}function ma(e){return e.type===q.plural}function Gs(e){return e.type===q.pound}function ha(e){return e.type===q.tag}function ga(e){return!!(e&&typeof e=="object"&&e.type===at.number)}function kn(e){return!!(e&&typeof e=="object"&&e.type===at.dateTime)}var ca=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,Ws=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function $s(e){var t={};return e.replace(Ws,function(n){var r=n.length;switch(n[0]){case"G":t.era=r===4?"long":r===5?"narrow":"short";break;case"y":t.year=r===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=r===4?"long":r===5?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][r-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][r-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][r-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][r-1];break;case"s":t.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),t}var Vs=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function zs(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var t=e.split(Vs).filter(function(m){return m.length>0}),n=[],r=0,a=t;r<a.length;r++){var s=a[r],i=s.split("/");if(i.length===0)throw new Error("Invalid number skeleton");for(var o=i[0],l=i.slice(1),u=0,d=l;u<d.length;u++){var h=d[u];if(h.length===0)throw new Error("Invalid number skeleton")}n.push({stem:o,options:l})}return n}function Zs(e){return e.replace(/^(.*?)-/,"")}var yr=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,pa=/^(@+)?(\+|#+)?[rs]?$/g,Xs=/(\*)(0+)|(#+)(0+)|(0+)/g,ya=/^(0+)$/;function vr(e){var t={};return e[e.length-1]==="r"?t.roundingPriority="morePrecision":e[e.length-1]==="s"&&(t.roundingPriority="lessPrecision"),e.replace(pa,function(n,r,a){return typeof a!="string"?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):a==="+"?t.minimumSignificantDigits=r.length:r[0]==="#"?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+(typeof a=="string"?a.length:0)),""}),t}function va(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Ks(e){var t;if(e[0]==="E"&&e[1]==="E"?(t={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(t={notation:"scientific"},e=e.slice(1)),t){var n=e.slice(0,2);if(n==="+!"?(t.signDisplay="always",e=e.slice(2)):n==="+?"&&(t.signDisplay="exceptZero",e=e.slice(2)),!ya.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function kr(e){var t={},n=va(e);return n||t}function Js(e){for(var t={},n=0,r=e;n<r.length;n++){var a=r[n];switch(a.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=a.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=Zs(a.options[0]);continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=b(b(b({},t),{notation:"scientific"}),a.options.reduce(function(l,u){return b(b({},l),kr(u))},{}));continue;case"engineering":t=b(b(b({},t),{notation:"engineering"}),a.options.reduce(function(l,u){return b(b({},l),kr(u))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":t.roundingMode="floor";continue;case"rounding-mode-ceiling":t.roundingMode="ceil";continue;case"rounding-mode-down":t.roundingMode="trunc";continue;case"rounding-mode-up":t.roundingMode="expand";continue;case"rounding-mode-half-even":t.roundingMode="halfEven";continue;case"rounding-mode-half-down":t.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":t.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(Xs,function(l,u,d,h,m,x){if(u)t.minimumIntegerDigits=d.length;else{if(h&&m)throw new Error("We currently do not support maximum integer digits");if(x)throw new Error("We currently do not support exact integer digits")}return""});continue}if(ya.test(a.stem)){t.minimumIntegerDigits=a.stem.length;continue}if(yr.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(yr,function(l,u,d,h,m,x){return d==="*"?t.minimumFractionDigits=u.length:h&&h[0]==="#"?t.maximumFractionDigits=h.length:m&&x?(t.minimumFractionDigits=m.length,t.maximumFractionDigits=m.length+x.length):(t.minimumFractionDigits=u.length,t.maximumFractionDigits=u.length),""});var s=a.options[0];s==="w"?t=b(b({},t),{trailingZeroDisplay:"stripIfInteger"}):s&&(t=b(b({},t),vr(s)));continue}if(pa.test(a.stem)){t=b(b({},t),vr(a.stem));continue}var i=va(a.stem);i&&(t=b(b({},t),i));var o=Ks(a.stem);o&&(t=b(b({},t),o))}return t}var xt={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Qs(e,t){for(var n="",r=0;r<e.length;r++){var a=e.charAt(r);if(a==="j"){for(var s=0;r+1<e.length&&e.charAt(r+1)===a;)s++,r++;var i=1+(s&1),o=s<2?1:3+(s>>1),l="a",u=ei(t);for((u=="H"||u=="k")&&(o=0);o-- >0;)n+=l;for(;i-- >0;)n=u+n}else a==="J"?n+="H":n+=a}return n}function ei(e){var t=e.hourCycle;if(t===void 0&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var n=e.language,r;n!=="root"&&(r=e.maximize().region);var a=xt[r||""]||xt[n||""]||xt["".concat(n,"-001")]||xt["001"];return a[0]}var on,ti=new RegExp("^".concat(ca.source,"*")),ni=new RegExp("".concat(ca.source,"*$"));function R(e,t){return{start:e,end:t}}var ri=!!String.prototype.startsWith&&"_a".startsWith("a",1),ai=!!String.fromCodePoint,si=!!Object.fromEntries,ii=!!String.prototype.codePointAt,oi=!!String.prototype.trimStart,li=!!String.prototype.trimEnd,ui=!!Number.isSafeInteger,di=ui?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},bn=!0;try{var fi=ba("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");bn=((on=fi.exec("a"))===null||on===void 0?void 0:on[0])==="a"}catch{bn=!1}var br=ri?function(t,n,r){return t.startsWith(n,r)}:function(t,n,r){return t.slice(r,r+n.length)===n},_n=ai?String.fromCodePoint:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var r="",a=t.length,s=0,i;a>s;){if(i=t[s++],i>1114111)throw RangeError(i+" is not a valid code point");r+=i<65536?String.fromCharCode(i):String.fromCharCode(((i-=65536)>>10)+55296,i%1024+56320)}return r},_r=si?Object.fromEntries:function(t){for(var n={},r=0,a=t;r<a.length;r++){var s=a[r],i=s[0],o=s[1];n[i]=o}return n},ka=ii?function(t,n){return t.codePointAt(n)}:function(t,n){var r=t.length;if(!(n<0||n>=r)){var a=t.charCodeAt(n),s;return a<55296||a>56319||n+1===r||(s=t.charCodeAt(n+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},mi=oi?function(t){return t.trimStart()}:function(t){return t.replace(ti,"")},hi=li?function(t){return t.trimEnd()}:function(t){return t.replace(ni,"")};function ba(e,t){return new RegExp(e,t)}var Sn;if(bn){var Sr=ba("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Sn=function(t,n){var r;Sr.lastIndex=n;var a=Sr.exec(t);return(r=a[1])!==null&&r!==void 0?r:""}}else Sn=function(t,n){for(var r=[];;){var a=ka(t,n);if(a===void 0||_a(a)||yi(a))break;r.push(a),n+=a>=65536?2:1}return _n.apply(void 0,r)};var gi=function(){function e(t,n){n===void 0&&(n={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!n.ignoreTag,this.locale=n.locale,this.requiresOtherClause=!!n.requiresOtherClause,this.shouldParseSkeletons=!!n.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(t,n,r){for(var a=[];!this.isEOF();){var s=this.char();if(s===123){var i=this.parseArgument(t,r);if(i.err)return i;a.push(i.val)}else{if(s===125&&t>0)break;if(s===35&&(n==="plural"||n==="selectordinal")){var o=this.clonePosition();this.bump(),a.push({type:q.pound,location:R(o,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(r)break;return this.error(O.UNMATCHED_CLOSING_TAG,R(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&Tn(this.peek()||0)){var i=this.parseTag(t,n);if(i.err)return i;a.push(i.val)}else{var i=this.parseLiteral(t,n);if(i.err)return i;a.push(i.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(t,n){var r=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:q.literal,value:"<".concat(a,"/>"),location:R(r,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(t+1,n,!0);if(s.err)return s;var i=s.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Tn(this.char()))return this.error(O.INVALID_TAG,R(o,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return a!==u?this.error(O.UNMATCHED_CLOSING_TAG,R(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:q.tag,value:a,children:i,location:R(r,this.clonePosition())},err:null}:this.error(O.INVALID_TAG,R(o,this.clonePosition())))}else return this.error(O.UNCLOSED_TAG,R(r,this.clonePosition()))}else return this.error(O.INVALID_TAG,R(r,this.clonePosition()))},e.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&pi(this.char());)this.bump();return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(t,n){for(var r=this.clonePosition(),a="";;){var s=this.tryParseQuote(n);if(s){a+=s;continue}var i=this.tryParseUnquoted(t,n);if(i){a+=i;continue}var o=this.tryParseLeftAngleBracket();if(o){a+=o;continue}break}var l=R(r,this.clonePosition());return{val:{type:q.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!ci(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(t){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(t==="plural"||t==="selectordinal")break;return null;default:return null}this.bump();var n=[this.char()];for(this.bump();!this.isEOF();){var r=this.char();if(r===39)if(this.peek()===39)n.push(39),this.bump();else{this.bump();break}else n.push(r);this.bump()}return _n.apply(void 0,n)},e.prototype.tryParseUnquoted=function(t,n){if(this.isEOF())return null;var r=this.char();return r===60||r===123||r===35&&(n==="plural"||n==="selectordinal")||r===125&&t>0?null:(this.bump(),_n(r))},e.prototype.parseArgument=function(t,n){var r=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(O.EXPECT_ARGUMENT_CLOSING_BRACE,R(r,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(O.EMPTY_ARGUMENT,R(r,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(O.MALFORMED_ARGUMENT,R(r,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(O.EXPECT_ARGUMENT_CLOSING_BRACE,R(r,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:q.argument,value:a,location:R(r,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(O.EXPECT_ARGUMENT_CLOSING_BRACE,R(r,this.clonePosition())):this.parseArgumentOptions(t,n,a,r);default:return this.error(O.MALFORMED_ARGUMENT,R(r,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),n=this.offset(),r=Sn(this.message,n),a=n+r.length;this.bumpTo(a);var s=this.clonePosition(),i=R(t,s);return{value:r,location:i}},e.prototype.parseArgumentOptions=function(t,n,r,a){var s,i=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(O.EXPECT_ARGUMENT_TYPE,R(i,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var m=hi(h.val);if(m.length===0)return this.error(O.EXPECT_ARGUMENT_STYLE,R(this.clonePosition(),this.clonePosition()));var x=R(d,this.clonePosition());u={style:m,styleLocation:x}}var T=this.tryParseArgumentClose(a);if(T.err)return T;var g=R(a,this.clonePosition());if(u&&br(u==null?void 0:u.style,"::",0)){var P=mi(u.style.slice(2));if(o==="number"){var h=this.parseNumberSkeletonFromString(P,u.styleLocation);return h.err?h:{val:{type:q.number,value:r,location:g,style:h.val},err:null}}else{if(P.length===0)return this.error(O.EXPECT_DATE_TIME_SKELETON,g);var N=P;this.locale&&(N=Qs(P,this.locale));var m={type:at.dateTime,pattern:N,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?$s(N):{}},A=o==="date"?q.date:q.time;return{val:{type:A,value:r,location:g,style:m},err:null}}}return{val:{type:o==="number"?q.number:o==="date"?q.date:q.time,value:r,location:g,style:(s=u==null?void 0:u.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var w=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(O.EXPECT_SELECT_ARGUMENT_OPTIONS,R(w,b({},w)));this.bumpSpace();var X=this.parseIdentifierIfPossible(),c=0;if(o!=="select"&&X.value==="offset"){if(!this.bumpIf(":"))return this.error(O.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,R(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(O.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,O.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),X=this.parseIdentifierIfPossible(),c=h.val}var D=this.tryParsePluralOrSelectOptions(t,o,n,X);if(D.err)return D;var T=this.tryParseArgumentClose(a);if(T.err)return T;var _=R(a,this.clonePosition());return o==="select"?{val:{type:q.select,value:r,options:_r(D.val),location:_},err:null}:{val:{type:q.plural,value:r,options:_r(D.val),offset:c,pluralType:o==="plural"?"cardinal":"ordinal",location:_},err:null}}default:return this.error(O.INVALID_ARGUMENT_TYPE,R(i,l))}},e.prototype.tryParseArgumentClose=function(t){return this.isEOF()||this.char()!==125?this.error(O.EXPECT_ARGUMENT_CLOSING_BRACE,R(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,n=this.clonePosition();!this.isEOF();){var r=this.char();switch(r){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(O.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,R(a,this.clonePosition()));this.bump();break}case 123:{t+=1,this.bump();break}case 125:{if(t>0)t-=1;else return{val:this.message.slice(n.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(n.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(t,n){var r=[];try{r=zs(t)}catch{return this.error(O.INVALID_NUMBER_SKELETON,n)}return{val:{type:at.number,tokens:r,location:n,parsedOptions:this.shouldParseSkeletons?Js(r):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(t,n,r,a){for(var s,i=!1,o=[],l=new Set,u=a.value,d=a.location;;){if(u.length===0){var h=this.clonePosition();if(n!=="select"&&this.bumpIf("=")){var m=this.tryParseDecimalInteger(O.EXPECT_PLURAL_ARGUMENT_SELECTOR,O.INVALID_PLURAL_ARGUMENT_SELECTOR);if(m.err)return m;d=R(h,this.clonePosition()),u=this.message.slice(h.offset,this.offset())}else break}if(l.has(u))return this.error(n==="select"?O.DUPLICATE_SELECT_ARGUMENT_SELECTOR:O.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);u==="other"&&(i=!0),this.bumpSpace();var x=this.clonePosition();if(!this.bumpIf("{"))return this.error(n==="select"?O.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:O.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,R(this.clonePosition(),this.clonePosition()));var T=this.parseMessage(t+1,n,r);if(T.err)return T;var g=this.tryParseArgumentClose(x);if(g.err)return g;o.push([u,{value:T.val,location:R(x,this.clonePosition())}]),l.add(u),this.bumpSpace(),s=this.parseIdentifierIfPossible(),u=s.value,d=s.location}return o.length===0?this.error(n==="select"?O.EXPECT_SELECT_ARGUMENT_SELECTOR:O.EXPECT_PLURAL_ARGUMENT_SELECTOR,R(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!i?this.error(O.MISSING_OTHER_CLAUSE,R(this.clonePosition(),this.clonePosition())):{val:o,err:null}},e.prototype.tryParseDecimalInteger=function(t,n){var r=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);for(var s=!1,i=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)s=!0,i=i*10+(o-48),this.bump();else break}var l=R(a,this.clonePosition());return s?(i*=r,di(i)?{val:i,err:null}:this.error(n,l)):this.error(t,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var n=ka(this.message,t);if(n===void 0)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return n},e.prototype.error=function(t,n){return{val:null,err:{kind:t,message:this.message,location:n}}},e.prototype.bump=function(){if(!this.isEOF()){var t=this.char();t===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},e.prototype.bumpIf=function(t){if(br(this.message,t,this.offset())){for(var n=0;n<t.length;n++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(t){var n=this.offset(),r=this.message.indexOf(t,n);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var n=this.offset();if(n===t)break;if(n>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&_a(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),n=this.offset(),r=this.message.charCodeAt(n+(t>=65536?2:1));return r??null},e}();function Tn(e){return e>=97&&e<=122||e>=65&&e<=90}function ci(e){return Tn(e)||e===47}function pi(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function _a(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function yi(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function wn(e){e.forEach(function(t){if(delete t.location,fa(t)||ma(t))for(var n in t.options)delete t.options[n].location,wn(t.options[n].value);else la(t)&&ga(t.style)||(ua(t)||da(t))&&kn(t.style)?delete t.style.location:ha(t)&&wn(t.children)})}function vi(e,t){t===void 0&&(t={}),t=b({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var n=new gi(e,t).parse();if(n.err){var r=SyntaxError(O[n.err.kind]);throw r.location=n.err.location,r.originalMessage=n.err.message,r}return t!=null&&t.captureLocation||wn(n.val),n.val}var Se;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Se||(Se={}));var Le=function(e){he(t,e);function t(n,r,a){var s=e.call(this,n)||this;return s.code=r,s.originalMessage=a,s}return t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),Tr=function(e){he(t,e);function t(n,r,a,s){return e.call(this,'Invalid values for "'.concat(n,'": "').concat(r,'". Options are "').concat(Object.keys(a).join('", "'),'"'),Se.INVALID_VALUE,s)||this}return t}(Le),ki=function(e){he(t,e);function t(n,r,a){return e.call(this,'Value for "'.concat(n,'" must be of type ').concat(r),Se.INVALID_VALUE,a)||this}return t}(Le),bi=function(e){he(t,e);function t(n,r){return e.call(this,'The intl string context variable "'.concat(n,'" was not provided to the string "').concat(r,'"'),Se.MISSING_VALUE,r)||this}return t}(Le),Q;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(Q||(Q={}));function _i(e){return e.length<2?e:e.reduce(function(t,n){var r=t[t.length-1];return!r||r.type!==Q.literal||n.type!==Q.literal?t.push(n):r.value+=n.value,t},[])}function Sa(e){return typeof e=="function"}function Rt(e,t,n,r,a,s,i){if(e.length===1&&pr(e[0]))return[{type:Q.literal,value:e[0].value}];for(var o=[],l=0,u=e;l<u.length;l++){var d=u[l];if(pr(d)){o.push({type:Q.literal,value:d.value});continue}if(Gs(d)){typeof s=="number"&&o.push({type:Q.literal,value:n.getNumberFormat(t).format(s)});continue}var h=d.value;if(!(a&&h in a))throw new bi(h,i);var m=a[h];if(Us(d)){(!m||typeof m=="string"||typeof m=="number")&&(m=typeof m=="string"||typeof m=="number"?String(m):""),o.push({type:typeof m=="string"?Q.literal:Q.object,value:m});continue}if(ua(d)){var x=typeof d.style=="string"?r.date[d.style]:kn(d.style)?d.style.parsedOptions:void 0;o.push({type:Q.literal,value:n.getDateTimeFormat(t,x).format(m)});continue}if(da(d)){var x=typeof d.style=="string"?r.time[d.style]:kn(d.style)?d.style.parsedOptions:r.time.medium;o.push({type:Q.literal,value:n.getDateTimeFormat(t,x).format(m)});continue}if(la(d)){var x=typeof d.style=="string"?r.number[d.style]:ga(d.style)?d.style.parsedOptions:void 0;x&&x.scale&&(m=m*(x.scale||1)),o.push({type:Q.literal,value:n.getNumberFormat(t,x).format(m)});continue}if(ha(d)){var T=d.children,g=d.value,P=a[g];if(!Sa(P))throw new ki(g,"function",i);var N=Rt(T,t,n,r,a,s),A=P(N.map(function(c){return c.value}));Array.isArray(A)||(A=[A]),o.push.apply(o,A.map(function(c){return{type:typeof c=="string"?Q.literal:Q.object,value:c}}))}if(fa(d)){var w=d.options[m]||d.options.other;if(!w)throw new Tr(d.value,m,Object.keys(d.options),i);o.push.apply(o,Rt(w.value,t,n,r,a));continue}if(ma(d)){var w=d.options["=".concat(m)];if(!w){if(!Intl.PluralRules)throw new Le(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Se.MISSING_INTL_API,i);var X=n.getPluralRules(t,{type:d.pluralType}).select(m-(d.offset||0));w=d.options[X]||d.options.other}if(!w)throw new Tr(d.value,m,Object.keys(d.options),i);o.push.apply(o,Rt(w.value,t,n,r,a,m-(d.offset||0)));continue}}return _i(o)}function Si(e,t){return t?b(b(b({},e||{}),t||{}),Object.keys(e).reduce(function(n,r){return n[r]=b(b({},e[r]),t[r]||{}),n},{})):e}function Ti(e,t){return t?Object.keys(e).reduce(function(n,r){return n[r]=Si(e[r],t[r]),n},b({},e)):e}function ln(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}function wi(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:pe(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.NumberFormat).bind.apply(t,ve([void 0],n,!1)))},{cache:ln(e.number),strategy:ye.variadic}),getDateTimeFormat:pe(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.DateTimeFormat).bind.apply(t,ve([void 0],n,!1)))},{cache:ln(e.dateTime),strategy:ye.variadic}),getPluralRules:pe(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.PluralRules).bind.apply(t,ve([void 0],n,!1)))},{cache:ln(e.pluralRules),strategy:ye.variadic})}}var Ta=function(){function e(t,n,r,a){n===void 0&&(n=e.defaultLocale);var s=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var u=s.formatToParts(l);if(u.length===1)return u[0].value;var d=u.reduce(function(h,m){return!h.length||m.type!==Q.literal||typeof h[h.length-1]!="string"?h.push(m.value):h[h.length-1]+=m.value,h},[]);return d.length<=1?d[0]||"":d},this.formatToParts=function(l){return Rt(s.ast,s.locales,s.formatters,s.formats,l,void 0,s.message)},this.resolvedOptions=function(){var l;return{locale:((l=s.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=n,this.resolvedLocale=e.resolveLocale(n),typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var i=a||{};i.formatters;var o=rt(i,["formatters"]);this.ast=e.__parse(t,b(b({},o),{locale:this.resolvedLocale}))}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Ti(e.formats,r),this.formatters=a&&a.formatters||wi(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(t){if(!(typeof Intl.Locale>"u")){var n=Intl.NumberFormat.supportedLocalesOf(t);return n.length>0?new Intl.Locale(n[0]):new Intl.Locale(typeof t=="string"?t:t[0])}},e.__parse=vi,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),We;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(We||(We={}));var vt=function(e){he(t,e);function t(n,r,a){var s=this,i=a?a instanceof Error?a:new Error(String(a)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(n,"] ").concat(r,`
`).concat(i?`
`.concat(i.message,`
`).concat(i.stack):""))||this,s.code=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,t),s}return t}(Error),xi=function(e){he(t,e);function t(n,r){return e.call(this,We.UNSUPPORTED_FORMATTER,n,r)||this}return t}(vt),Di=function(e){he(t,e);function t(n,r){return e.call(this,We.INVALID_CONFIG,n,r)||this}return t}(vt),wr=function(e){he(t,e);function t(n,r){return e.call(this,We.MISSING_DATA,n,r)||this}return t}(vt),oe=function(e){he(t,e);function t(n,r,a){var s=e.call(this,We.FORMAT_ERROR,"".concat(n,`
Locale: `).concat(r,`
`),a)||this;return s.locale=r,s}return t}(vt),un=function(e){he(t,e);function t(n,r,a,s){var i=e.call(this,"".concat(n,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),r,s)||this;return i.descriptor=a,i.locale=r,i}return t}(oe),Ni=function(e){he(t,e);function t(n,r){var a=e.call(this,We.MISSING_TRANSLATION,'Missing message: "'.concat(n.id,'" for locale "').concat(r,'", using ').concat(n.defaultMessage?"default message (".concat(typeof n.defaultMessage=="string"?n.defaultMessage:n.defaultMessage.map(function(s){var i;return(i=s.value)!==null&&i!==void 0?i:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=n,a}return t}(vt);function Ei(e,t,n){if(n===void 0&&(n=Error),!e)throw new n(t)}function st(e,t,n){return n===void 0&&(n={}),t.reduce(function(r,a){return a in e?r[a]=e[a]:a in n&&(r[a]=n[a]),r},{})}var Pi=function(e){},Mi=function(e){},wa={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Pi,onWarn:Mi};function xa(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function qe(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}function Oi(e){e===void 0&&(e=xa());var t=Intl.RelativeTimeFormat,n=Intl.ListFormat,r=Intl.DisplayNames,a=pe(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.DateTimeFormat).bind.apply(o,ve([void 0],l,!1)))},{cache:qe(e.dateTime),strategy:ye.variadic}),s=pe(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.NumberFormat).bind.apply(o,ve([void 0],l,!1)))},{cache:qe(e.number),strategy:ye.variadic}),i=pe(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.PluralRules).bind.apply(o,ve([void 0],l,!1)))},{cache:qe(e.pluralRules),strategy:ye.variadic});return{getDateTimeFormat:a,getNumberFormat:s,getMessageFormat:pe(function(o,l,u,d){return new Ta(o,l,u,b({formatters:{getNumberFormat:s,getDateTimeFormat:a,getPluralRules:i}},d||{}))},{cache:qe(e.message),strategy:ye.variadic}),getRelativeTimeFormat:pe(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(t.bind.apply(t,ve([void 0],o,!1)))},{cache:qe(e.relativeTime),strategy:ye.variadic}),getPluralRules:i,getListFormat:pe(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(n.bind.apply(n,ve([void 0],o,!1)))},{cache:qe(e.list),strategy:ye.variadic}),getDisplayNames:pe(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(r.bind.apply(r,ve([void 0],o,!1)))},{cache:qe(e.displayNames),strategy:ye.variadic})}}function qn(e,t,n,r){var a=e&&e[t],s;if(a&&(s=a[n]),s)return s;r(new xi("No ".concat(t," format named: ").concat(n)))}function Dt(e,t){return Object.keys(e).reduce(function(n,r){return n[r]=b({timeZone:t},e[r]),n},{})}function xr(e,t){var n=Object.keys(b(b({},e),t));return n.reduce(function(r,a){return r[a]=b(b({},e[a]||{}),t[a]||{}),r},{})}function Dr(e,t){if(!t)return e;var n=Ta.formats;return b(b(b({},n),e),{date:xr(Dt(n.date,t),Dt(e.date||{},t)),time:xr(Dt(n.time,t),Dt(e.time||{},t))})}var xn=function(e,t,n,r,a){var s=e.locale,i=e.formats,o=e.messages,l=e.defaultLocale,u=e.defaultFormats,d=e.fallbackOnEmptyString,h=e.onError,m=e.timeZone,x=e.defaultRichTextElements;n===void 0&&(n={id:""});var T=n.id,g=n.defaultMessage;Ei(!!T,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var P=String(T),N=o&&Object.prototype.hasOwnProperty.call(o,P)&&o[P];if(Array.isArray(N)&&N.length===1&&N[0].type===q.literal)return N[0].value;if(!r&&N&&typeof N=="string"&&!x)return N.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=b(b({},x),r||{}),i=Dr(i,m),u=Dr(u,m),!N){if(d===!1&&N==="")return N;if((!g||s&&s.toLowerCase()!==l.toLowerCase())&&h(new Ni(n,s)),g)try{var A=t.getMessageFormat(g,l,u,a);return A.format(r)}catch(w){return h(new un('Error formatting default message for: "'.concat(P,'", rendering default message verbatim'),s,n,w)),typeof g=="string"?g:P}return P}try{var A=t.getMessageFormat(N,s,i,b({formatters:t},a||{}));return A.format(r)}catch(w){h(new un('Error formatting message: "'.concat(P,'", using ').concat(g?"default message":"id"," as fallback."),s,n,w))}if(g)try{var A=t.getMessageFormat(g,l,u,a);return A.format(r)}catch(w){h(new un('Error formatting the default message for: "'.concat(P,'", rendering message verbatim'),s,n,w))}return typeof N=="string"?N:typeof g=="string"?g:P},Ri=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function kt(e,t,n,r){var a=e.locale,s=e.formats,i=e.onError,o=e.timeZone;r===void 0&&(r={});var l=r.format,u=b(b({},o&&{timeZone:o}),l&&qn(s,t,l,i)),d=st(r,Ri,u);return t==="time"&&!d.hour&&!d.minute&&!d.second&&!d.timeStyle&&!d.dateStyle&&(d=b(b({},d),{hour:"numeric",minute:"numeric"})),n(a,d)}function Fi(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return kt(e,"date",t,i).format(o)}catch(l){e.onError(new oe("Error formatting date.",e.locale,l))}return String(o)}function Ai(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return kt(e,"time",t,i).format(o)}catch(l){e.onError(new oe("Error formatting time.",e.locale,l))}return String(o)}function Ii(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=n[2],o=i===void 0?{}:i,l=typeof a=="string"?new Date(a||0):a,u=typeof s=="string"?new Date(s||0):s;try{return kt(e,"dateTimeRange",t,o).formatRange(l,u)}catch(d){e.onError(new oe("Error formatting date time range.",e.locale,d))}return String(l)}function Hi(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return kt(e,"date",t,i).formatToParts(o)}catch(l){e.onError(new oe("Error formatting date.",e.locale,l))}return[]}function Bi(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return kt(e,"time",t,i).formatToParts(o)}catch(l){e.onError(new oe("Error formatting time.",e.locale,l))}return[]}var Ci=["style","type","fallback","languageDisplay"];function ji(e,t,n,r){var a=e.locale,s=e.onError,i=Intl.DisplayNames;i||s(new Le(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Se.MISSING_INTL_API));var o=st(r,Ci);try{return t(a,o).of(n)}catch(l){s(new oe("Error formatting display name.",a,l))}}var Li=["type","style"],Nr=Date.now();function qi(e){return"".concat(Nr,"_").concat(e,"_").concat(Nr)}function Yi(e,t,n,r){r===void 0&&(r={});var a=Da(e,t,n,r).reduce(function(s,i){var o=i.value;return typeof o!="string"?s.push(o):typeof s[s.length-1]=="string"?s[s.length-1]+=o:s.push(o),s},[]);return a.length===1?a[0]:a.length===0?"":a}function Da(e,t,n,r){var a=e.locale,s=e.onError;r===void 0&&(r={});var i=Intl.ListFormat;i||s(new Le(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Se.MISSING_INTL_API));var o=st(r,Li);try{var l={},u=n.map(function(d,h){if(typeof d=="object"){var m=qi(h);return l[m]=d,m}return String(d)});return t(a,o).formatToParts(u).map(function(d){return d.type==="literal"?d:b(b({},d),{value:l[d.value]||d.value})})}catch(d){s(new oe("Error formatting list.",a,d))}return n}var Ui=["type"];function Gi(e,t,n,r){var a=e.locale,s=e.onError;r===void 0&&(r={}),Intl.PluralRules||s(new Le(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Se.MISSING_INTL_API));var i=st(r,Ui);try{return t(a,i).select(n)}catch(o){s(new oe("Error formatting plural.",a,o))}return"other"}var Wi=["numeric","style"];function $i(e,t,n){var r=e.locale,a=e.formats,s=e.onError;n===void 0&&(n={});var i=n.format,o=!!i&&qn(a,"relative",i,s)||{},l=st(n,Wi,o);return t(r,l)}function Vi(e,t,n,r,a){a===void 0&&(a={}),r||(r="second");var s=Intl.RelativeTimeFormat;s||e.onError(new Le(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Se.MISSING_INTL_API));try{return $i(e,t,a).format(n,r)}catch(i){e.onError(new oe("Error formatting relative time.",e.locale,i))}return String(n)}var zi=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Na(e,t,n){var r=e.locale,a=e.formats,s=e.onError;n===void 0&&(n={});var i=n.format,o=i&&qn(a,"number",i,s)||{},l=st(n,zi,o);return t(r,l)}function Zi(e,t,n,r){r===void 0&&(r={});try{return Na(e,t,r).format(n)}catch(a){e.onError(new oe("Error formatting number.",e.locale,a))}return String(n)}function Xi(e,t,n,r){r===void 0&&(r={});try{return Na(e,t,r).formatToParts(n)}catch(a){e.onError(new oe("Error formatting number.",e.locale,a))}return[]}function Ki(e){var t=e[Object.keys(e)[0]];return typeof t=="string"}function Ji(e){e.onWarn&&e.defaultRichTextElements&&Ki(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function Qi(e,t){var n=Oi(t),r=b(b({},wa),e),a=r.locale,s=r.defaultLocale,i=r.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&i?i(new wr('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&i&&i(new wr('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(i&&i(new Di('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),Ji(r),b(b({},r),{formatters:n,formatNumber:Zi.bind(null,r,n.getNumberFormat),formatNumberToParts:Xi.bind(null,r,n.getNumberFormat),formatRelativeTime:Vi.bind(null,r,n.getRelativeTimeFormat),formatDate:Fi.bind(null,r,n.getDateTimeFormat),formatDateToParts:Hi.bind(null,r,n.getDateTimeFormat),formatTime:Ai.bind(null,r,n.getDateTimeFormat),formatDateTimeRange:Ii.bind(null,r,n.getDateTimeFormat),formatTimeToParts:Bi.bind(null,r,n.getDateTimeFormat),formatPlural:Gi.bind(null,r,n.getPluralRules),formatMessage:xn.bind(null,r,n),$t:xn.bind(null,r,n),formatList:Yi.bind(null,r,n.getListFormat),formatListToParts:Da.bind(null,r,n.getListFormat),formatDisplayName:ji.bind(null,r,n.getDisplayNames)})}function eo(e,t,n){if(n===void 0&&(n=Error),!e)throw new n(t)}function to(e){eo(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var no=b(b({},wa),{textComponent:L.Fragment});function ro(e){return function(t){return e(L.Children.toArray(t))}}function Er(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),a=n.length;if(r.length!==a)return!1;for(var s=0;s<a;s++){var i=n[s];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}var dn={exports:{}},B={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pr;function ao(){if(Pr)return B;Pr=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,o=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,x=e?Symbol.for("react.memo"):60115,T=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,P=e?Symbol.for("react.fundamental"):60117,N=e?Symbol.for("react.responder"):60118,A=e?Symbol.for("react.scope"):60119;function w(c){if(typeof c=="object"&&c!==null){var D=c.$$typeof;switch(D){case t:switch(c=c.type,c){case l:case u:case r:case s:case a:case h:return c;default:switch(c=c&&c.$$typeof,c){case o:case d:case T:case x:case i:return c;default:return D}}case n:return D}}}function X(c){return w(c)===u}return B.AsyncMode=l,B.ConcurrentMode=u,B.ContextConsumer=o,B.ContextProvider=i,B.Element=t,B.ForwardRef=d,B.Fragment=r,B.Lazy=T,B.Memo=x,B.Portal=n,B.Profiler=s,B.StrictMode=a,B.Suspense=h,B.isAsyncMode=function(c){return X(c)||w(c)===l},B.isConcurrentMode=X,B.isContextConsumer=function(c){return w(c)===o},B.isContextProvider=function(c){return w(c)===i},B.isElement=function(c){return typeof c=="object"&&c!==null&&c.$$typeof===t},B.isForwardRef=function(c){return w(c)===d},B.isFragment=function(c){return w(c)===r},B.isLazy=function(c){return w(c)===T},B.isMemo=function(c){return w(c)===x},B.isPortal=function(c){return w(c)===n},B.isProfiler=function(c){return w(c)===s},B.isStrictMode=function(c){return w(c)===a},B.isSuspense=function(c){return w(c)===h},B.isValidElementType=function(c){return typeof c=="string"||typeof c=="function"||c===r||c===u||c===s||c===a||c===h||c===m||typeof c=="object"&&c!==null&&(c.$$typeof===T||c.$$typeof===x||c.$$typeof===i||c.$$typeof===o||c.$$typeof===d||c.$$typeof===P||c.$$typeof===N||c.$$typeof===A||c.$$typeof===g)},B.typeOf=w,B}var Mr;function so(){return Mr||(Mr=1,dn.exports=ao()),dn.exports}var fn,Or;function io(){if(Or)return fn;Or=1;var e=so(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[e.ForwardRef]=r,s[e.Memo]=a;function i(T){return e.isMemo(T)?a:s[T.$$typeof]||t}var o=Object.defineProperty,l=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,m=Object.prototype;function x(T,g,P){if(typeof g!="string"){if(m){var N=h(g);N&&N!==m&&x(T,N,P)}var A=l(g);u&&(A=A.concat(u(g)));for(var w=i(T),X=i(g),c=0;c<A.length;++c){var D=A[c];if(!n[D]&&!(P&&P[D])&&!(X&&X[D])&&!(w&&w[D])){var _=d(g,D);try{o(T,D,_)}catch{}}}}return T}return fn=x,fn}io();var Yn=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=L.createContext(null)):L.createContext(null);Yn.Consumer;var oo=Yn.Provider,lo=oo,uo=Yn;function Un(){var e=L.useContext(uo);return to(e),e}var Dn;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Dn||(Dn={}));var Nn;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Nn||(Nn={}));function Ea(e){var t=function(n){var r=Un(),a=n.value,s=n.children,i=rt(n,["value","children"]),o=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?r.formatDateToParts(o,i):r.formatTimeToParts(o,i);return s(l)};return t.displayName=Nn[e],t}function bt(e){var t=function(n){var r=Un(),a=n.value,s=n.children,i=rt(n,["value","children"]),o=r[e](a,i);if(typeof s=="function")return s(o);var l=r.textComponent||L.Fragment;return L.createElement(l,null,o)};return t.displayName=Dn[e],t}function Pa(e){return e&&Object.keys(e).reduce(function(t,n){var r=e[n];return t[n]=Sa(r)?ro(r):r,t},{})}var Rr=function(e,t,n,r){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];var i=Pa(r),o=xn.apply(void 0,ve([e,t,n,i],a,!1));return Array.isArray(o)?L.Children.toArray(o):o},fo=function(e,t){var n=e.defaultRichTextElements,r=rt(e,["defaultRichTextElements"]),a=Pa(n),s=Qi(b(b(b({},no),r),{defaultRichTextElements:a}),t),i={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:a};return b(b({},s),{formatMessage:Rr.bind(null,i,s.formatters),$t:Rr.bind(null,i,s.formatters)})};function mo(e,t){var n=e.values,r=rt(e,["values"]),a=t.values,s=rt(t,["values"]);return Er(a,n)&&Er(r,s)}function Ma(e){var t=Un(),n=t.formatMessage,r=t.textComponent,a=r===void 0?L.Fragment:r,s=e.id,i=e.description,o=e.defaultMessage,l=e.values,u=e.children,d=e.tagName,h=d===void 0?a:d,m=e.ignoreTag,x={id:s,description:i,defaultMessage:o},T=n(x,l,{ignoreTag:m});return typeof u=="function"?u(Array.isArray(T)?T:[T]):h?L.createElement(h,null,L.Children.toArray(T)):L.createElement(L.Fragment,null,T)}Ma.displayName="FormattedMessage";var re=L.memo(Ma,mo);re.displayName="MemoizedFormattedMessage";bt("formatDate");bt("formatTime");bt("formatNumber");bt("formatList");bt("formatDisplayName");Ea("formatDate");Ea("formatTime");function Gn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var En={exports:{}},ho=En.exports,Fr;function go(){return Fr||(Fr=1,function(e,t){(function(n,r){e.exports=r()})(ho,function(){var n="minute",r=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(s,i,o){var l=i.prototype;o.utc=function(g){var P={date:g,utc:!0,args:arguments};return new i(P)},l.utc=function(g){var P=o(this.toDate(),{locale:this.$L,utc:!0});return g?P.add(this.utcOffset(),n):P},l.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var u=l.parse;l.parse=function(g){g.utc&&(this.$u=!0),this.$utils().u(g.$offset)||(this.$offset=g.$offset),u.call(this,g)};var d=l.init;l.init=function(){if(this.$u){var g=this.$d;this.$y=g.getUTCFullYear(),this.$M=g.getUTCMonth(),this.$D=g.getUTCDate(),this.$W=g.getUTCDay(),this.$H=g.getUTCHours(),this.$m=g.getUTCMinutes(),this.$s=g.getUTCSeconds(),this.$ms=g.getUTCMilliseconds()}else d.call(this)};var h=l.utcOffset;l.utcOffset=function(g,P){var N=this.$utils().u;if(N(g))return this.$u?0:N(this.$offset)?h.call(this):this.$offset;if(typeof g=="string"&&(g=function(c){c===void 0&&(c="");var D=c.match(r);if(!D)return null;var _=(""+D[0]).match(a)||["-",0,0],k=_[0],C=60*+_[1]+ +_[2];return C===0?0:k==="+"?C:-C}(g),g===null))return this;var A=Math.abs(g)<=16?60*g:g,w=this;if(P)return w.$offset=A,w.$u=g===0,w;if(g!==0){var X=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(w=this.local().add(A+X,n)).$offset=A,w.$x.$localOffset=X}else w=this.utc();return w};var m=l.format;l.format=function(g){var P=g||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return m.call(this,P)},l.valueOf=function(){var g=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*g},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var x=l.toDate;l.toDate=function(g){return g==="s"&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():x.call(this)};var T=l.diff;l.diff=function(g,P,N){if(g&&this.$u===g.$u)return T.call(this,g,P,N);var A=this.local(),w=o(g).local();return T.call(A,w,P,N)}}})}(En)),En.exports}var co=go();const po=Gn(co);var Pn={exports:{}},yo=Pn.exports,Ar;function vo(){return Ar||(Ar=1,function(e,t){(function(n,r){e.exports=r()})(yo,function(){var n,r,a=1e3,s=6e4,i=36e5,o=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,d=2628e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,m={years:u,months:d,days:o,hours:i,minutes:s,seconds:a,milliseconds:1,weeks:6048e5},x=function(D){return D instanceof X},T=function(D,_,k){return new X(D,k,_.$l)},g=function(D){return r.p(D)+"s"},P=function(D){return D<0},N=function(D){return P(D)?Math.ceil(D):Math.floor(D)},A=function(D){return Math.abs(D)},w=function(D,_){return D?P(D)?{negative:!0,format:""+A(D)+_}:{negative:!1,format:""+D+_}:{negative:!1,format:""}},X=function(){function D(k,C,z){var $=this;if(this.$d={},this.$l=z,k===void 0&&(this.$ms=0,this.parseFromMilliseconds()),C)return T(k*m[g(C)],this);if(typeof k=="number")return this.$ms=k,this.parseFromMilliseconds(),this;if(typeof k=="object")return Object.keys(k).forEach(function(ce){$.$d[g(ce)]=k[ce]}),this.calMilliseconds(),this;if(typeof k=="string"){var ee=k.match(h);if(ee){var ne=ee.slice(2).map(function(ce){return ce!=null?Number(ce):0});return this.$d.years=ne[0],this.$d.months=ne[1],this.$d.weeks=ne[2],this.$d.days=ne[3],this.$d.hours=ne[4],this.$d.minutes=ne[5],this.$d.seconds=ne[6],this.calMilliseconds(),this}}return this}var _=D.prototype;return _.calMilliseconds=function(){var k=this;this.$ms=Object.keys(this.$d).reduce(function(C,z){return C+(k.$d[z]||0)*m[z]},0)},_.parseFromMilliseconds=function(){var k=this.$ms;this.$d.years=N(k/u),k%=u,this.$d.months=N(k/d),k%=d,this.$d.days=N(k/o),k%=o,this.$d.hours=N(k/i),k%=i,this.$d.minutes=N(k/s),k%=s,this.$d.seconds=N(k/a),k%=a,this.$d.milliseconds=k},_.toISOString=function(){var k=w(this.$d.years,"Y"),C=w(this.$d.months,"M"),z=+this.$d.days||0;this.$d.weeks&&(z+=7*this.$d.weeks);var $=w(z,"D"),ee=w(this.$d.hours,"H"),ne=w(this.$d.minutes,"M"),ce=this.$d.seconds||0;this.$d.milliseconds&&(ce+=this.$d.milliseconds/1e3,ce=Math.round(1e3*ce)/1e3);var an=w(ce,"S"),As=k.negative||C.negative||$.negative||ee.negative||ne.negative||an.negative,Is=ee.format||ne.format||an.format?"T":"",sn=(As?"-":"")+"P"+k.format+C.format+$.format+Is+ee.format+ne.format+an.format;return sn==="P"||sn==="-P"?"P0D":sn},_.toJSON=function(){return this.toISOString()},_.format=function(k){var C=k||"YYYY-MM-DDTHH:mm:ss",z={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return C.replace(l,function($,ee){return ee||String(z[$])})},_.as=function(k){return this.$ms/m[g(k)]},_.get=function(k){var C=this.$ms,z=g(k);return z==="milliseconds"?C%=1e3:C=z==="weeks"?N(C/m[z]):this.$d[z],C||0},_.add=function(k,C,z){var $;return $=C?k*m[g(C)]:x(k)?k.$ms:T(k,this).$ms,T(this.$ms+$*(z?-1:1),this)},_.subtract=function(k,C){return this.add(k,C,!0)},_.locale=function(k){var C=this.clone();return C.$l=k,C},_.clone=function(){return T(this.$ms,this)},_.humanize=function(k){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!k)},_.valueOf=function(){return this.asMilliseconds()},_.milliseconds=function(){return this.get("milliseconds")},_.asMilliseconds=function(){return this.as("milliseconds")},_.seconds=function(){return this.get("seconds")},_.asSeconds=function(){return this.as("seconds")},_.minutes=function(){return this.get("minutes")},_.asMinutes=function(){return this.as("minutes")},_.hours=function(){return this.get("hours")},_.asHours=function(){return this.as("hours")},_.days=function(){return this.get("days")},_.asDays=function(){return this.as("days")},_.weeks=function(){return this.get("weeks")},_.asWeeks=function(){return this.as("weeks")},_.months=function(){return this.get("months")},_.asMonths=function(){return this.as("months")},_.years=function(){return this.get("years")},_.asYears=function(){return this.as("years")},D}(),c=function(D,_,k){return D.add(_.years()*k,"y").add(_.months()*k,"M").add(_.days()*k,"d").add(_.hours()*k,"h").add(_.minutes()*k,"m").add(_.seconds()*k,"s").add(_.milliseconds()*k,"ms")};return function(D,_,k){n=k,r=k().$utils(),k.duration=function($,ee){var ne=k.locale();return T($,{$l:ne},ee)},k.isDuration=x;var C=_.prototype.add,z=_.prototype.subtract;_.prototype.add=function($,ee){return x($)?c(this,$,1):C.bind(this)($,ee)},_.prototype.subtract=function($,ee){return x($)?c(this,$,-1):z.bind(this)($,ee)}}})}(Pn)),Pn.exports}var ko=vo();const bo=Gn(ko);var Mn={exports:{}},_o=Mn.exports,Ir;function So(){return Ir||(Ir=1,function(e,t){(function(n,r){e.exports=r()})(_o,function(){var n="day";return function(r,a,s){var i=function(u){return u.add(4-u.isoWeekday(),n)},o=a.prototype;o.isoWeekYear=function(){return i(this).year()},o.isoWeek=function(u){if(!this.$utils().u(u))return this.add(7*(u-this.isoWeek()),n);var d,h,m,x,T=i(this),g=(d=this.isoWeekYear(),h=this.$u,m=(h?s.utc:s)().year(d).startOf("year"),x=4-m.isoWeekday(),m.isoWeekday()>4&&(x+=7),m.add(x,n));return T.diff(g,"week")+1},o.isoWeekday=function(u){return this.$utils().u(u)?this.day()||7:this.day(this.day()%7?u:u-7)};var l=o.startOf;o.startOf=function(u,d){var h=this.$utils(),m=!!h.u(d)||d;return h.p(u)==="isoweek"?m?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(u,d)}}})}(Mn)),Mn.exports}var To=So();const wo=Gn(To);var On={exports:{}},xo=On.exports,Hr;function Do(){return Hr||(Hr=1,function(e,t){(function(n,r){e.exports=r(Wt)})(xo,function(n){function r(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var a=r(n),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})}(On)),On.exports}Do();const No=xa(),we=e=>fo({locale:"nb-NO",messages:e},No),Oa={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"},Wn="YYYY-MM-DD",$n="DD.MM.YYYY";Wt.extend(po);Wt.extend(wo);Wt.extend(bo);we(Oa);we(Oa);function Ra(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=Ra(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Ae(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=Ra(e))&&(r&&(r+=" "),r+=t);return r}const it=e=>Ae({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Eo=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};L.forwardRef((e,t)=>{var{className:n,size:r="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,h=Eo(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return K.createElement(a,Object.assign({},h,{ref:t,className:Ae(n,"navds-body-long",`navds-body-long--${r}`,it({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var Po=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const _e=L.forwardRef((e,t)=>{var{className:n,size:r="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,h=Po(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return K.createElement(a,Object.assign({},h,{ref:t,className:Ae(n,"navds-body-short",`navds-body-short--${r}`,it({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var Mo=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};L.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:a,uppercase:s,as:i="p",truncate:o,weight:l="regular",align:u,visuallyHidden:d,textColor:h}=e,m=Mo(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return K.createElement(i,Object.assign({},m,{ref:t,className:Ae(n,"navds-detail",it({spacing:a,truncate:o,weight:l,align:u,visuallyHidden:d,textColor:h,uppercase:s}),{"navds-detail--small":r==="small"})}))});var Oo=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};L.forwardRef((e,t)=>{var{children:n,className:r,size:a,spacing:s,as:i="p",showIcon:o=!1}=e,l=Oo(e,["children","className","size","spacing","as","showIcon"]);return K.createElement(i,Object.assign({},l,{ref:t,className:Ae("navds-error-message","navds-label",r,it({spacing:s}),{"navds-label--small":a==="small","navds-error-message--show-icon":o})}),o&&K.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},K.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),n)});var Ro=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Vn=L.forwardRef((e,t)=>{var{level:n="1",size:r,className:a,as:s,spacing:i,align:o,visuallyHidden:l,textColor:u}=e,d=Ro(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const h=s??`h${n}`;return K.createElement(h,Object.assign({},d,{ref:t,className:Ae(a,"navds-heading",`navds-heading--${r}`,it({spacing:i,align:o,visuallyHidden:l,textColor:u}))}))});var Fo=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};L.forwardRef((e,t)=>{var{className:n,spacing:r,as:a="p"}=e,s=Fo(e,["className","spacing","as"]);return K.createElement(a,Object.assign({},s,{ref:t,className:Ae(n,"navds-ingress",{"navds-typo--spacing":!!r})}))});var Ao=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ke=L.forwardRef((e,t)=>{var{className:n,size:r="medium",as:a="label",spacing:s,visuallyHidden:i,textColor:o}=e,l=Ao(e,["className","size","as","spacing","visuallyHidden","textColor"]);return K.createElement(a,Object.assign({},l,{ref:t,className:Ae(n,"navds-label",it({spacing:s,visuallyHidden:i,textColor:o}),{"navds-label--small":r==="small"})}))});var Io=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Br=L.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",icon:i}=e,o=Io(e,["children","className","variant","size","icon"]);const l=(a==null?void 0:a.endsWith("-filled"))&&"strong",u=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",d=a==null?void 0:a.replace("-filled","").replace("-moderate","");return K.createElement(_e,Object.assign({},o,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:Ae("navds-tag",r,`navds-tag--${a}`,`navds-tag--${s}`,`navds-tag--${l||u||"outline"}`,`navds-tag--${d}`)}),i&&K.createElement("span",{className:"navds-tag__icon--left"},i),n)});function Ho(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cr={exports:{}},dt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jr;function Bo(){if(jr)return dt;jr=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,s){var i=null;if(s!==void 0&&(i=""+s),a.key!==void 0&&(i=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:i,ref:a!==void 0?a:null,props:s}}return dt.Fragment=t,dt.jsx=n,dt.jsxs=n,dt}var Lr;function Co(){return Lr||(Lr=1,Cr.exports=Bo()),Cr.exports}var Z=Co();const $e={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};we($e);we($e);var qr={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Yr;function jo(){return Yr||(Yr=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,r.call(this,o)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)t.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(qr)),qr.exports}var Lo=jo();const ae=Ho(Lo),qo="_borderbox_hicl4_1",Yo="_error_hicl4_4",Uo="_warning_hicl4_7",Go={borderbox:qo,error:Yo,warning:Uo};ae.bind(Go);const Wo="_aksjonspunkt_kn1hn_1",$o="_erAksjonspunktApent_kn1hn_4",Vo="_erIkkeGodkjentAvBeslutter_kn1hn_8",zo={aksjonspunkt:Wo,erAksjonspunktApent:$o,erIkkeGodkjentAvBeslutter:Vo};ae.bind(zo);we($e);we($e);const Zo="_tooltip_h8akz_1",Xo="_tooltiptext_h8akz_5",Ko="_left_h8akz_22",Jo="_top_h8akz_27",Qo="_right_h8akz_30",el="_bottom_h8akz_34",tl="_showTooltip_h8akz_1",Rn={tooltip:Zo,tooltiptext:Xo,left:Ko,top:Jo,right:Qo,bottom:el,showTooltip:tl},nl=ae.bind(Rn),rl=({children:e,content:t,alignRight:n=!1,alignLeft:r=!1,alignTop:a=!1,alignBottom:s=!1})=>Z.jsxs("div",{className:Rn.tooltip,children:[Z.jsx("span",{className:nl(Rn.tooltiptext,{right:n||!r&&!a&&!s,left:r,top:a,bottom:s}),children:t}),e]}),al=K.forwardRef(({onClick:e=()=>{},onMouseDown:t,tabIndex:n=-1,className:r="",src:a,srcHover:s,alt:i,onKeyDown:o,tooltip:l,alignTooltipLeft:u=!1},d)=>{const[h,m]=L.useState(!1),x=L.useCallback(()=>{m(!0)},[]),T=L.useCallback(()=>{m(!1)},[]),g=L.useCallback(A=>{(A.key==="Enter"||A.key===" ")&&(o&&o(A),A.preventDefault())},[]),P=s&&h?s:a,N=Z.jsx("img",{ref:d,className:r,src:P,alt:i,tabIndex:n,onMouseOver:x,onMouseOut:T,onFocus:x,onBlur:T,onKeyDown:g,onMouseDown:t,onClick:e});return l?Z.jsx(rl,{content:l,alignLeft:u,children:N}):N});al.displayName="Image";const sl="_flexColumnNew_1vdv1_1",il={flexColumnNew:sl},ol=ae.bind(il),be=({children:e,className:t})=>Z.jsx("div",{className:ol("flexColumnNew",t),children:e}),ll="_flexRow_1yf0y_1",ul="_spaceBetween_1yf0y_9",dl="_alignItemsToBaseline_1yf0y_12",fl="_alignItemsToFlexEnd_1yf0y_15",ml="_justifyItemsToFlexEnd_1yf0y_18",hl="_wrap_1yf0y_21",gl={flexRow:ll,spaceBetween:ul,alignItemsToBaseline:dl,alignItemsToFlexEnd:fl,justifyItemsToFlexEnd:ml,wrap:hl},cl=ae.bind(gl),Bt=({children:e,spaceBetween:t=!1,alignItemsToBaseline:n=!1,alignItemsToFlexEnd:r=!1,wrap:a=!1,className:s})=>Z.jsx("div",{className:cl("flexRow",{spaceBetween:t},{alignItemsToBaseline:n},{alignItemsToFlexEnd:r},{wrap:a},s),children:e}),pl="_flexContainer_1dk1o_1",yl="_fluid_1dk1o_6",vl="_fullHeight_1dk1o_9",kl="_flexWrap_1dk1o_17",bl={flexContainer:pl,fluid:yl,fullHeight:vl,flexWrap:kl},_l=ae.bind(bl),Ct=({children:e,wrap:t=!1,fullHeight:n=!1})=>Z.jsx("div",{className:_l("flexContainer","fluid",{flexWrap:t,fullHeight:n}),children:e});we($e);const Sl="_row_1lxv9_1",Tl="_harHover_1lxv9_4",wl="_rowHeader_1lxv9_7",xl="_grayHeader_1lxv9_12",Dl="_rowContent_1lxv9_15",Nl="_selected_1lxv9_18",El="_bold_1lxv9_22",Pl="_dashedBottomBorder_1lxv9_25",Ml="_solidBottomBorder_1lxv9_28",Ol="_apLeftBorder_1lxv9_31",Rl="_noBottomBorder_1lxv9_34",Fa={row:Sl,harHover:Tl,rowHeader:wl,grayHeader:xl,rowContent:Dl,selected:Nl,bold:El,dashedBottomBorder:Pl,solidBottomBorder:Ml,apLeftBorder:Ol,noBottomBorder:Rl},Fl=ae.bind(Fa),Al=(e,t,n)=>r=>{e&&r.button===0&&e(r,t,n)},Aa=e=>e.tagName==="TR"?e:Aa(e.parentElement),Ur=(e,t)=>{const n=Aa(e.target),r=(t?n.nextSibling:n.previousSibling)||n;r&&(r.focus(),e.preventDefault())},Il=(e,t,n,r)=>a=>{a.key==="ArrowDown"?Ur(a,!0):a.key==="ArrowUp"?Ur(a,!1):t&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(t(a,n,r),a.preventDefault()):e&&t&&a.target.tagName!=="TD"&&a.key==="Shift"&&(t(a),a.preventDefault())},Hl=e=>t=>{e&&t.target.tagName!=="TD"&&t.key==="Shift"&&(e(t),t.preventDefault())},Ia=({id:e,model:t,isHeader:n=!1,hasGrayHeader:r=!1,onMouseDown:a,onKeyDown:s,children:i,noHover:o=!1,isSelected:l=!1,isBold:u=!1,isDashedBottomBorder:d=!1,isSolidBottomBorder:h=!1,isApLeftBorder:m=!1,className:x,useMultiselect:T=!1,hasNoBottomBorder:g=!1})=>Z.jsx("tr",{className:Fl(x,Fa.row,{rowHeader:n,grayHeader:r,rowContent:!n&&!o,selected:l,harHover:!o,bold:u,dashedBottomBorder:d,solidBottomBorder:h,noBottomBorder:g,apLeftBorder:m}),onMouseDown:Al(a,e,t),onKeyDown:Il(T,s,e,t),onKeyUp:T?Hl(s):void 0,tabIndex:0,children:i}),Bl="_columnStyle_1f13u_1",Ha={columnStyle:Bl},Cl=ae.bind(Ha),Je=({children:e="",className:t,hidden:n=!1,colspanAll:r=!1})=>n?null:Z.jsx("td",{className:Cl(Ha.columnStyle,t),colSpan:r?100:void 0,children:e}),jl="_table_2cnpl_1",Ll="_rowHover_2cnpl_25",ql={table:jl,rowHover:Ll},Yl=ae.bind(ql),Ul="EMPTY",Ba=K.forwardRef(({headerTextCodes:e=[],headerColumnContent:t=[],classNameTable:n="",noHover:r=!1,hasGrayHeader:a=!1,children:s},i)=>Z.jsxs("table",{ref:i,className:Yl("table",{[n]:n,rowHover:!r}),children:[Z.jsx("thead",{children:Z.jsxs(Ia,{isHeader:!0,noHover:r,hasGrayHeader:a,children:[e.map(o=>typeof o=="string"&&o.startsWith(Ul)?Z.jsx(Je,{children:" "},o):Z.jsx(Je,{children:Z.jsx(re,{id:o})},o)),t.map(o=>Z.jsx(Je,{children:o},o.key))]})}),Z.jsx("tbody",{children:Array.isArray(s)?K.Children.map(s,o=>K.cloneElement(o,{noHover:r})):K.cloneElement(s,{noHover:r})})]}));Ba.displayName="Table";const Gl="_hidden_1pb4f_1",Wl="_active_1pb4f_8",$l="_activeRow_1pb4f_15 _active_1pb4f_8",Vl="_toggleIcon_1pb4f_19",zl="_colTopPadding_1pb4f_22",Zl={hidden:Gl,active:Wl,activeRow:$l,toggleIcon:Vl,colTopPadding:zl};ae.bind(Zl);we($e);const Xl="_fourPx_qda5k_1",Kl="_eightPx_qda5k_4",Jl="_sixteenPx_qda5k_7",Ql="_twentyPx_qda5k_10",eu="_thirtyTwoPx_qda5k_13",tu="_fourtyPx_qda5k_16",nu={fourPx:Xl,eightPx:Kl,sixteenPx:Jl,twentyPx:Ql,thirtyTwoPx:eu,fourtyPx:tu},ru=ae.bind(nu),Ca=({fourPx:e=!1,eightPx:t=!1,sixteenPx:n=!1,twentyPx:r=!1,thirtyTwoPx:a=!1,fourtyPx:s=!1})=>Z.jsx("div",{className:ru({fourPx:e,eightPx:t,sixteenPx:n,twentyPx:r,thirtyTwoPx:a,fourtyPx:s})});we($e);const au="_divider_1t980_1",su="_dividerParagraf_1t980_8",iu="_leftPanel_1t980_11",ou="_rightPanel_1t980_14",lu={divider:au,dividerParagraf:su,leftPanel:iu,rightPanel:ou};ae.bind(lu);const uu="_editedIcon_ulrjl_1",du={editedIcon:uu};ae.bind(du);//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var ja;function p(){return ja.apply(null,arguments)}function fu(e){ja=e}function fe(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Ge(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function I(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function zn(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(I(e,t))return!1;return!0}function te(e){return e===void 0}function Fe(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function _t(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function La(e,t){var n=[],r,a=e.length;for(r=0;r<a;++r)n.push(t(e[r],r));return n}function Be(e,t){for(var n in t)I(t,n)&&(e[n]=t[n]);return I(t,"toString")&&(e.toString=t.toString),I(t,"valueOf")&&(e.valueOf=t.valueOf),e}function xe(e,t,n,r){return us(e,t,n,r,!0).utc()}function mu(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function E(e){return e._pf==null&&(e._pf=mu()),e._pf}var Fn;Array.prototype.some?Fn=Array.prototype.some:Fn=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function Zn(e){var t=null,n=!1,r=e._d&&!isNaN(e._d.getTime());if(r&&(t=E(e),n=Fn.call(t.parsedDateParts,function(a){return a!=null}),r=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n),e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r;return e._isValid}function Vt(e){var t=xe(NaN);return e!=null?Be(E(t),e):E(t).userInvalidated=!0,t}var Gr=p.momentProperties=[],mn=!1;function Xn(e,t){var n,r,a,s=Gr.length;if(te(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),te(t._i)||(e._i=t._i),te(t._f)||(e._f=t._f),te(t._l)||(e._l=t._l),te(t._strict)||(e._strict=t._strict),te(t._tzm)||(e._tzm=t._tzm),te(t._isUTC)||(e._isUTC=t._isUTC),te(t._offset)||(e._offset=t._offset),te(t._pf)||(e._pf=E(t)),te(t._locale)||(e._locale=t._locale),s>0)for(n=0;n<s;n++)r=Gr[n],a=t[r],te(a)||(e[r]=a);return e}function St(e){Xn(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),mn===!1&&(mn=!0,p.updateOffset(this),mn=!1)}function me(e){return e instanceof St||e!=null&&e._isAMomentObject!=null}function qa(e){p.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function le(e,t){var n=!0;return Be(function(){if(p.deprecationHandler!=null&&p.deprecationHandler(null,e),n){var r=[],a,s,i,o=arguments.length;for(s=0;s<o;s++){if(a="",typeof arguments[s]=="object"){a+=`
[`+s+"] ";for(i in arguments[0])I(arguments[0],i)&&(a+=i+": "+arguments[0][i]+", ");a=a.slice(0,-2)}else a=arguments[s];r.push(a)}qa(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var Wr={};function Ya(e,t){p.deprecationHandler!=null&&p.deprecationHandler(e,t),Wr[e]||(qa(t),Wr[e]=!0)}p.suppressDeprecationWarnings=!1;p.deprecationHandler=null;function De(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function hu(e){var t,n;for(n in e)I(e,n)&&(t=e[n],De(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function An(e,t){var n=Be({},e),r;for(r in t)I(t,r)&&(Ge(e[r])&&Ge(t[r])?(n[r]={},Be(n[r],e[r]),Be(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)I(e,r)&&!I(t,r)&&Ge(e[r])&&(n[r]=Be({},n[r]));return n}function Kn(e){e!=null&&this.set(e)}var In;Object.keys?In=Object.keys:In=function(e){var t,n=[];for(t in e)I(e,t)&&n.push(t);return n};var gu={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function cu(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return De(r)?r.call(t,n):r}function Te(e,t,n){var r=""+Math.abs(e),a=t-r.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+r}var Jn=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Nt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,hn={},Qe={};function S(e,t,n,r){var a=r;typeof r=="string"&&(a=function(){return this[r]()}),e&&(Qe[e]=a),t&&(Qe[t[0]]=function(){return Te(a.apply(this,arguments),t[1],t[2])}),n&&(Qe[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function pu(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function yu(e){var t=e.match(Jn),n,r;for(n=0,r=t.length;n<r;n++)Qe[t[n]]?t[n]=Qe[t[n]]:t[n]=pu(t[n]);return function(a){var s="",i;for(i=0;i<r;i++)s+=De(t[i])?t[i].call(a,e):t[i];return s}}function Ft(e,t){return e.isValid()?(t=Ua(t,e.localeData()),hn[t]=hn[t]||yu(t),hn[t](e)):e.localeData().invalidDate()}function Ua(e,t){var n=5;function r(a){return t.longDateFormat(a)||a}for(Nt.lastIndex=0;n>=0&&Nt.test(e);)e=e.replace(Nt,r),Nt.lastIndex=0,n-=1;return e}var vu={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function ku(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(Jn).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var bu="Invalid date";function _u(){return this._invalidDate}var Su="%d",Tu=/\d{1,2}/;function wu(e){return this._ordinal.replace("%d",e)}var xu={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Du(e,t,n,r){var a=this._relativeTime[n];return De(a)?a(e,t,n,r):a.replace(/%d/i,e)}function Nu(e,t){var n=this._relativeTime[e>0?"future":"past"];return De(n)?n(t):n.replace(/%s/i,t)}var $r={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function ue(e){return typeof e=="string"?$r[e]||$r[e.toLowerCase()]:void 0}function Qn(e){var t={},n,r;for(r in e)I(e,r)&&(n=ue(r),n&&(t[n]=e[r]));return t}var Eu={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Pu(e){var t=[],n;for(n in e)I(e,n)&&t.push({unit:n,priority:Eu[n]});return t.sort(function(r,a){return r.priority-a.priority}),t}var Ga=/\d/,se=/\d\d/,Wa=/\d{3}/,er=/\d{4}/,zt=/[+-]?\d{6}/,U=/\d\d?/,$a=/\d\d\d\d?/,Va=/\d\d\d\d\d\d?/,Zt=/\d{1,3}/,tr=/\d{1,4}/,Xt=/[+-]?\d{1,6}/,ot=/\d+/,Kt=/[+-]?\d+/,Mu=/Z|[+-]\d\d:?\d\d/gi,Jt=/Z|[+-]\d\d(?::?\d\d)?/gi,Ou=/[+-]?\d+(\.\d{1,3})?/,Tt=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,lt=/^[1-9]\d?/,nr=/^([1-9]\d|\d)/,jt;jt={};function y(e,t,n){jt[e]=De(t)?t:function(r,a){return r&&n?n:t}}function Ru(e,t){return I(jt,e)?jt[e](t._strict,t._locale):new RegExp(Fu(e))}function Fu(e){return Oe(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,a,s){return n||r||a||s}))}function Oe(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ie(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function M(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=ie(t)),n}var Hn={};function j(e,t){var n,r=t,a;for(typeof e=="string"&&(e=[e]),Fe(t)&&(r=function(s,i){i[t]=M(s)}),a=e.length,n=0;n<a;n++)Hn[e[n]]=r}function wt(e,t){j(e,function(n,r,a,s){a._w=a._w||{},t(n,a._w,a,s)})}function Au(e,t,n){t!=null&&I(Hn,e)&&Hn[e](t,n._a,n,e)}function Qt(e){return e%4===0&&e%100!==0||e%400===0}var J=0,Pe=1,ke=2,V=3,de=4,Me=5,Ue=6,Iu=7,Hu=8;S("Y",0,0,function(){var e=this.year();return e<=9999?Te(e,4):"+"+e});S(0,["YY",2],0,function(){return this.year()%100});S(0,["YYYY",4],0,"year");S(0,["YYYYY",5],0,"year");S(0,["YYYYYY",6,!0],0,"year");y("Y",Kt);y("YY",U,se);y("YYYY",tr,er);y("YYYYY",Xt,zt);y("YYYYYY",Xt,zt);j(["YYYYY","YYYYYY"],J);j("YYYY",function(e,t){t[J]=e.length===2?p.parseTwoDigitYear(e):M(e)});j("YY",function(e,t){t[J]=p.parseTwoDigitYear(e)});j("Y",function(e,t){t[J]=parseInt(e,10)});function ht(e){return Qt(e)?366:365}p.parseTwoDigitYear=function(e){return M(e)+(M(e)>68?1900:2e3)};var za=ut("FullYear",!0);function Bu(){return Qt(this.year())}function ut(e,t){return function(n){return n!=null?(Za(this,e,n),p.updateOffset(this,t),this):gt(this,e)}}function gt(e,t){if(!e.isValid())return NaN;var n=e._d,r=e._isUTC;switch(t){case"Milliseconds":return r?n.getUTCMilliseconds():n.getMilliseconds();case"Seconds":return r?n.getUTCSeconds():n.getSeconds();case"Minutes":return r?n.getUTCMinutes():n.getMinutes();case"Hours":return r?n.getUTCHours():n.getHours();case"Date":return r?n.getUTCDate():n.getDate();case"Day":return r?n.getUTCDay():n.getDay();case"Month":return r?n.getUTCMonth():n.getMonth();case"FullYear":return r?n.getUTCFullYear():n.getFullYear();default:return NaN}}function Za(e,t,n){var r,a,s,i,o;if(!(!e.isValid()||isNaN(n))){switch(r=e._d,a=e._isUTC,t){case"Milliseconds":return void(a?r.setUTCMilliseconds(n):r.setMilliseconds(n));case"Seconds":return void(a?r.setUTCSeconds(n):r.setSeconds(n));case"Minutes":return void(a?r.setUTCMinutes(n):r.setMinutes(n));case"Hours":return void(a?r.setUTCHours(n):r.setHours(n));case"Date":return void(a?r.setUTCDate(n):r.setDate(n));case"FullYear":break;default:return}s=n,i=e.month(),o=e.date(),o=o===29&&i===1&&!Qt(s)?28:o,a?r.setUTCFullYear(s,i,o):r.setFullYear(s,i,o)}}function Cu(e){return e=ue(e),De(this[e])?this[e]():this}function ju(e,t){if(typeof e=="object"){e=Qn(e);var n=Pu(e),r,a=n.length;for(r=0;r<a;r++)this[n[r].unit](e[n[r].unit])}else if(e=ue(e),De(this[e]))return this[e](t);return this}function Lu(e,t){return(e%t+t)%t}var W;Array.prototype.indexOf?W=Array.prototype.indexOf:W=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function rr(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=Lu(t,12);return e+=(t-n)/12,n===1?Qt(e)?29:28:31-n%7%2}S("M",["MM",2],"Mo",function(){return this.month()+1});S("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});S("MMMM",0,0,function(e){return this.localeData().months(this,e)});y("M",U,lt);y("MM",U,se);y("MMM",function(e,t){return t.monthsShortRegex(e)});y("MMMM",function(e,t){return t.monthsRegex(e)});j(["M","MM"],function(e,t){t[Pe]=M(e)-1});j(["MMM","MMMM"],function(e,t,n,r){var a=n._locale.monthsParse(e,r,n._strict);a!=null?t[Pe]=a:E(n).invalidMonth=e});var qu="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Xa="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Ka=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Yu=Tt,Uu=Tt;function Gu(e,t){return e?fe(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Ka).test(t)?"format":"standalone"][e.month()]:fe(this._months)?this._months:this._months.standalone}function Wu(e,t){return e?fe(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Ka.test(t)?"format":"standalone"][e.month()]:fe(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function $u(e,t,n){var r,a,s,i=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)s=xe([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(s,"").toLocaleLowerCase();return n?t==="MMM"?(a=W.call(this._shortMonthsParse,i),a!==-1?a:null):(a=W.call(this._longMonthsParse,i),a!==-1?a:null):t==="MMM"?(a=W.call(this._shortMonthsParse,i),a!==-1?a:(a=W.call(this._longMonthsParse,i),a!==-1?a:null)):(a=W.call(this._longMonthsParse,i),a!==-1?a:(a=W.call(this._shortMonthsParse,i),a!==-1?a:null))}function Vu(e,t,n){var r,a,s;if(this._monthsParseExact)return $u.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(a=xe([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(s="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function Ja(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=M(t);else if(t=e.localeData().monthsParse(t),!Fe(t))return e}var n=t,r=e.date();return r=r<29?r:Math.min(r,rr(e.year(),n)),e._isUTC?e._d.setUTCMonth(n,r):e._d.setMonth(n,r),e}function Qa(e){return e!=null?(Ja(this,e),p.updateOffset(this,!0),this):gt(this,"Month")}function zu(){return rr(this.year(),this.month())}function Zu(e){return this._monthsParseExact?(I(this,"_monthsRegex")||es.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(I(this,"_monthsShortRegex")||(this._monthsShortRegex=Yu),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function Xu(e){return this._monthsParseExact?(I(this,"_monthsRegex")||es.call(this),e?this._monthsStrictRegex:this._monthsRegex):(I(this,"_monthsRegex")||(this._monthsRegex=Uu),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function es(){function e(l,u){return u.length-l.length}var t=[],n=[],r=[],a,s,i,o;for(a=0;a<12;a++)s=xe([2e3,a]),i=Oe(this.monthsShort(s,"")),o=Oe(this.months(s,"")),t.push(i),n.push(o),r.push(o),r.push(i);t.sort(e),n.sort(e),r.sort(e),this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Ku(e,t,n,r,a,s,i){var o;return e<100&&e>=0?(o=new Date(e+400,t,n,r,a,s,i),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,r,a,s,i),o}function ct(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Lt(e,t,n){var r=7+t-n,a=(7+ct(e,0,r).getUTCDay()-t)%7;return-a+r-1}function ts(e,t,n,r,a){var s=(7+n-r)%7,i=Lt(e,r,a),o=1+7*(t-1)+s+i,l,u;return o<=0?(l=e-1,u=ht(l)+o):o>ht(e)?(l=e+1,u=o-ht(e)):(l=e,u=o),{year:l,dayOfYear:u}}function pt(e,t,n){var r=Lt(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1,s,i;return a<1?(i=e.year()-1,s=a+Re(i,t,n)):a>Re(e.year(),t,n)?(s=a-Re(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Re(e,t,n){var r=Lt(e,t,n),a=Lt(e+1,t,n);return(ht(e)-r+a)/7}S("w",["ww",2],"wo","week");S("W",["WW",2],"Wo","isoWeek");y("w",U,lt);y("ww",U,se);y("W",U,lt);y("WW",U,se);wt(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=M(e)});function Ju(e){return pt(e,this._week.dow,this._week.doy).week}var Qu={dow:0,doy:6};function ed(){return this._week.dow}function td(){return this._week.doy}function nd(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function rd(e){var t=pt(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}S("d",0,"do","day");S("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});S("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});S("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});S("e",0,0,"weekday");S("E",0,0,"isoWeekday");y("d",U);y("e",U);y("E",U);y("dd",function(e,t){return t.weekdaysMinRegex(e)});y("ddd",function(e,t){return t.weekdaysShortRegex(e)});y("dddd",function(e,t){return t.weekdaysRegex(e)});wt(["dd","ddd","dddd"],function(e,t,n,r){var a=n._locale.weekdaysParse(e,r,n._strict);a!=null?t.d=a:E(n).invalidWeekday=e});wt(["d","e","E"],function(e,t,n,r){t[r]=M(e)});function ad(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function sd(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function ar(e,t){return e.slice(t,7).concat(e.slice(0,t))}var id="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ns="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),od="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ld=Tt,ud=Tt,dd=Tt;function fd(e,t){var n=fe(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?ar(n,this._week.dow):e?n[e.day()]:n}function md(e){return e===!0?ar(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function hd(e){return e===!0?ar(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function gd(e,t,n){var r,a,s,i=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)s=xe([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(s,"").toLocaleLowerCase();return n?t==="dddd"?(a=W.call(this._weekdaysParse,i),a!==-1?a:null):t==="ddd"?(a=W.call(this._shortWeekdaysParse,i),a!==-1?a:null):(a=W.call(this._minWeekdaysParse,i),a!==-1?a:null):t==="dddd"?(a=W.call(this._weekdaysParse,i),a!==-1||(a=W.call(this._shortWeekdaysParse,i),a!==-1)?a:(a=W.call(this._minWeekdaysParse,i),a!==-1?a:null)):t==="ddd"?(a=W.call(this._shortWeekdaysParse,i),a!==-1||(a=W.call(this._weekdaysParse,i),a!==-1)?a:(a=W.call(this._minWeekdaysParse,i),a!==-1?a:null)):(a=W.call(this._minWeekdaysParse,i),a!==-1||(a=W.call(this._weekdaysParse,i),a!==-1)?a:(a=W.call(this._shortWeekdaysParse,i),a!==-1?a:null))}function cd(e,t,n){var r,a,s;if(this._weekdaysParseExact)return gd.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(a=xe([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(s="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function pd(e){if(!this.isValid())return e!=null?this:NaN;var t=gt(this,"Day");return e!=null?(e=ad(e,this.localeData()),this.add(e-t,"d")):t}function yd(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function vd(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=sd(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function kd(e){return this._weekdaysParseExact?(I(this,"_weekdaysRegex")||sr.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(I(this,"_weekdaysRegex")||(this._weekdaysRegex=ld),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function bd(e){return this._weekdaysParseExact?(I(this,"_weekdaysRegex")||sr.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(I(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ud),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function _d(e){return this._weekdaysParseExact?(I(this,"_weekdaysRegex")||sr.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(I(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=dd),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function sr(){function e(d,h){return h.length-d.length}var t=[],n=[],r=[],a=[],s,i,o,l,u;for(s=0;s<7;s++)i=xe([2e3,1]).day(s),o=Oe(this.weekdaysMin(i,"")),l=Oe(this.weekdaysShort(i,"")),u=Oe(this.weekdays(i,"")),t.push(o),n.push(l),r.push(u),a.push(o),a.push(l),a.push(u);t.sort(e),n.sort(e),r.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function ir(){return this.hours()%12||12}function Sd(){return this.hours()||24}S("H",["HH",2],0,"hour");S("h",["hh",2],0,ir);S("k",["kk",2],0,Sd);S("hmm",0,0,function(){return""+ir.apply(this)+Te(this.minutes(),2)});S("hmmss",0,0,function(){return""+ir.apply(this)+Te(this.minutes(),2)+Te(this.seconds(),2)});S("Hmm",0,0,function(){return""+this.hours()+Te(this.minutes(),2)});S("Hmmss",0,0,function(){return""+this.hours()+Te(this.minutes(),2)+Te(this.seconds(),2)});function rs(e,t){S(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}rs("a",!0);rs("A",!1);function as(e,t){return t._meridiemParse}y("a",as);y("A",as);y("H",U,nr);y("h",U,lt);y("k",U,lt);y("HH",U,se);y("hh",U,se);y("kk",U,se);y("hmm",$a);y("hmmss",Va);y("Hmm",$a);y("Hmmss",Va);j(["H","HH"],V);j(["k","kk"],function(e,t,n){var r=M(e);t[V]=r===24?0:r});j(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});j(["h","hh"],function(e,t,n){t[V]=M(e),E(n).bigHour=!0});j("hmm",function(e,t,n){var r=e.length-2;t[V]=M(e.substr(0,r)),t[de]=M(e.substr(r)),E(n).bigHour=!0});j("hmmss",function(e,t,n){var r=e.length-4,a=e.length-2;t[V]=M(e.substr(0,r)),t[de]=M(e.substr(r,2)),t[Me]=M(e.substr(a)),E(n).bigHour=!0});j("Hmm",function(e,t,n){var r=e.length-2;t[V]=M(e.substr(0,r)),t[de]=M(e.substr(r))});j("Hmmss",function(e,t,n){var r=e.length-4,a=e.length-2;t[V]=M(e.substr(0,r)),t[de]=M(e.substr(r,2)),t[Me]=M(e.substr(a))});function Td(e){return(e+"").toLowerCase().charAt(0)==="p"}var wd=/[ap]\.?m?\.?/i,xd=ut("Hours",!0);function Dd(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var ss={calendar:gu,longDateFormat:vu,invalidDate:bu,ordinal:Su,dayOfMonthOrdinalParse:Tu,relativeTime:xu,months:qu,monthsShort:Xa,week:Qu,weekdays:id,weekdaysMin:od,weekdaysShort:ns,meridiemParse:wd},G={},ft={},yt;function Nd(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function Vr(e){return e&&e.toLowerCase().replace("_","-")}function Ed(e){for(var t=0,n,r,a,s;t<e.length;){for(s=Vr(e[t]).split("-"),n=s.length,r=Vr(e[t+1]),r=r?r.split("-"):null;n>0;){if(a=en(s.slice(0,n).join("-")),a)return a;if(r&&r.length>=n&&Nd(s,r)>=n-1)break;n--}t++}return yt}function Pd(e){return!!(e&&e.match("^[^/\\\\]*$"))}function en(e){var t=null,n;if(G[e]===void 0&&typeof module<"u"&&module&&module.exports&&Pd(e))try{t=yt._abbr,n=require,n("./locale/"+e),je(t)}catch{G[e]=null}return G[e]}function je(e,t){var n;return e&&(te(t)?n=Ie(e):n=or(e,t),n?yt=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),yt._abbr}function or(e,t){if(t!==null){var n,r=ss;if(t.abbr=e,G[e]!=null)Ya("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=G[e]._config;else if(t.parentLocale!=null)if(G[t.parentLocale]!=null)r=G[t.parentLocale]._config;else if(n=en(t.parentLocale),n!=null)r=n._config;else return ft[t.parentLocale]||(ft[t.parentLocale]=[]),ft[t.parentLocale].push({name:e,config:t}),null;return G[e]=new Kn(An(r,t)),ft[e]&&ft[e].forEach(function(a){or(a.name,a.config)}),je(e),G[e]}else return delete G[e],null}function Md(e,t){if(t!=null){var n,r,a=ss;G[e]!=null&&G[e].parentLocale!=null?G[e].set(An(G[e]._config,t)):(r=en(e),r!=null&&(a=r._config),t=An(a,t),r==null&&(t.abbr=e),n=new Kn(t),n.parentLocale=G[e],G[e]=n),je(e)}else G[e]!=null&&(G[e].parentLocale!=null?(G[e]=G[e].parentLocale,e===je()&&je(e)):G[e]!=null&&delete G[e]);return G[e]}function Ie(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return yt;if(!fe(e)){if(t=en(e),t)return t;e=[e]}return Ed(e)}function Od(){return In(G)}function lr(e){var t,n=e._a;return n&&E(e).overflow===-2&&(t=n[Pe]<0||n[Pe]>11?Pe:n[ke]<1||n[ke]>rr(n[J],n[Pe])?ke:n[V]<0||n[V]>24||n[V]===24&&(n[de]!==0||n[Me]!==0||n[Ue]!==0)?V:n[de]<0||n[de]>59?de:n[Me]<0||n[Me]>59?Me:n[Ue]<0||n[Ue]>999?Ue:-1,E(e)._overflowDayOfYear&&(t<J||t>ke)&&(t=ke),E(e)._overflowWeeks&&t===-1&&(t=Iu),E(e)._overflowWeekday&&t===-1&&(t=Hu),E(e).overflow=t),e}var Rd=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Fd=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ad=/Z|[+-]\d\d(?::?\d\d)?/,Et=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],gn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Id=/^\/?Date\((-?\d+)/i,Hd=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Bd={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function is(e){var t,n,r=e._i,a=Rd.exec(r)||Fd.exec(r),s,i,o,l,u=Et.length,d=gn.length;if(a){for(E(e).iso=!0,t=0,n=u;t<n;t++)if(Et[t][1].exec(a[1])){i=Et[t][0],s=Et[t][2]!==!1;break}if(i==null){e._isValid=!1;return}if(a[3]){for(t=0,n=d;t<n;t++)if(gn[t][1].exec(a[3])){o=(a[2]||" ")+gn[t][0];break}if(o==null){e._isValid=!1;return}}if(!s&&o!=null){e._isValid=!1;return}if(a[4])if(Ad.exec(a[4]))l="Z";else{e._isValid=!1;return}e._f=i+(o||"")+(l||""),dr(e)}else e._isValid=!1}function Cd(e,t,n,r,a,s){var i=[jd(e),Xa.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(a,10)];return s&&i.push(parseInt(s,10)),i}function jd(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Ld(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function qd(e,t,n){if(e){var r=ns.indexOf(e),a=new Date(t[0],t[1],t[2]).getDay();if(r!==a)return E(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function Yd(e,t,n){if(e)return Bd[e];if(t)return 0;var r=parseInt(n,10),a=r%100,s=(r-a)/100;return s*60+a}function os(e){var t=Hd.exec(Ld(e._i)),n;if(t){if(n=Cd(t[4],t[3],t[2],t[5],t[6],t[7]),!qd(t[1],n,e))return;e._a=n,e._tzm=Yd(t[8],t[9],t[10]),e._d=ct.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),E(e).rfc2822=!0}else e._isValid=!1}function Ud(e){var t=Id.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(is(e),e._isValid===!1)delete e._isValid;else return;if(os(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:p.createFromInputFallback(e)}p.createFromInputFallback=le("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Ze(e,t,n){return e??t??n}function Gd(e){var t=new Date(p.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function ur(e){var t,n,r=[],a,s,i;if(!e._d){for(a=Gd(e),e._w&&e._a[ke]==null&&e._a[Pe]==null&&Wd(e),e._dayOfYear!=null&&(i=Ze(e._a[J],a[J]),(e._dayOfYear>ht(i)||e._dayOfYear===0)&&(E(e)._overflowDayOfYear=!0),n=ct(i,0,e._dayOfYear),e._a[Pe]=n.getUTCMonth(),e._a[ke]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=a[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[V]===24&&e._a[de]===0&&e._a[Me]===0&&e._a[Ue]===0&&(e._nextDay=!0,e._a[V]=0),e._d=(e._useUTC?ct:Ku).apply(null,r),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[V]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(E(e).weekdayMismatch=!0)}}function Wd(e){var t,n,r,a,s,i,o,l,u;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(s=1,i=4,n=Ze(t.GG,e._a[J],pt(Y(),1,4).year),r=Ze(t.W,1),a=Ze(t.E,1),(a<1||a>7)&&(l=!0)):(s=e._locale._week.dow,i=e._locale._week.doy,u=pt(Y(),s,i),n=Ze(t.gg,e._a[J],u.year),r=Ze(t.w,u.week),t.d!=null?(a=t.d,(a<0||a>6)&&(l=!0)):t.e!=null?(a=t.e+s,(t.e<0||t.e>6)&&(l=!0)):a=s),r<1||r>Re(n,s,i)?E(e)._overflowWeeks=!0:l!=null?E(e)._overflowWeekday=!0:(o=ts(n,r,a,s,i),e._a[J]=o.year,e._dayOfYear=o.dayOfYear)}p.ISO_8601=function(){};p.RFC_2822=function(){};function dr(e){if(e._f===p.ISO_8601){is(e);return}if(e._f===p.RFC_2822){os(e);return}e._a=[],E(e).empty=!0;var t=""+e._i,n,r,a,s,i,o=t.length,l=0,u,d;for(a=Ua(e._f,e._locale).match(Jn)||[],d=a.length,n=0;n<d;n++)s=a[n],r=(t.match(Ru(s,e))||[])[0],r&&(i=t.substr(0,t.indexOf(r)),i.length>0&&E(e).unusedInput.push(i),t=t.slice(t.indexOf(r)+r.length),l+=r.length),Qe[s]?(r?E(e).empty=!1:E(e).unusedTokens.push(s),Au(s,r,e)):e._strict&&!r&&E(e).unusedTokens.push(s);E(e).charsLeftOver=o-l,t.length>0&&E(e).unusedInput.push(t),e._a[V]<=12&&E(e).bigHour===!0&&e._a[V]>0&&(E(e).bigHour=void 0),E(e).parsedDateParts=e._a.slice(0),E(e).meridiem=e._meridiem,e._a[V]=$d(e._locale,e._a[V],e._meridiem),u=E(e).era,u!==null&&(e._a[J]=e._locale.erasConvertYear(u,e._a[J])),ur(e),lr(e)}function $d(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function Vd(e){var t,n,r,a,s,i,o=!1,l=e._f.length;if(l===0){E(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<l;a++)s=0,i=!1,t=Xn({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[a],dr(t),Zn(t)&&(i=!0),s+=E(t).charsLeftOver,s+=E(t).unusedTokens.length*10,E(t).score=s,o?s<r&&(r=s,n=t):(r==null||s<r||i)&&(r=s,n=t,i&&(o=!0));Be(e,n||t)}function zd(e){if(!e._d){var t=Qn(e._i),n=t.day===void 0?t.date:t.day;e._a=La([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),ur(e)}}function Zd(e){var t=new St(lr(ls(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function ls(e){var t=e._i,n=e._f;return e._locale=e._locale||Ie(e._l),t===null||n===void 0&&t===""?Vt({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),me(t)?new St(lr(t)):(_t(t)?e._d=t:fe(n)?Vd(e):n?dr(e):Xd(e),Zn(e)||(e._d=null),e))}function Xd(e){var t=e._i;te(t)?e._d=new Date(p.now()):_t(t)?e._d=new Date(t.valueOf()):typeof t=="string"?Ud(e):fe(t)?(e._a=La(t.slice(0),function(n){return parseInt(n,10)}),ur(e)):Ge(t)?zd(e):Fe(t)?e._d=new Date(t):p.createFromInputFallback(e)}function us(e,t,n,r,a){var s={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(Ge(e)&&zn(e)||fe(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=n,s._i=e,s._f=t,s._strict=r,Zd(s)}function Y(e,t,n,r){return us(e,t,n,r,!1)}var Kd=le("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Y.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Vt()}),Jd=le("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Y.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Vt()});function ds(e,t){var n,r;if(t.length===1&&fe(t[0])&&(t=t[0]),!t.length)return Y();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function Qd(){var e=[].slice.call(arguments,0);return ds("isBefore",e)}function ef(){var e=[].slice.call(arguments,0);return ds("isAfter",e)}var tf=function(){return Date.now?Date.now():+new Date},mt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function nf(e){var t,n=!1,r,a=mt.length;for(t in e)if(I(e,t)&&!(W.call(mt,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<a;++r)if(e[mt[r]]){if(n)return!1;parseFloat(e[mt[r]])!==M(e[mt[r]])&&(n=!0)}return!0}function rf(){return this._isValid}function af(){return ge(NaN)}function tn(e){var t=Qn(e),n=t.year||0,r=t.quarter||0,a=t.month||0,s=t.week||t.isoWeek||0,i=t.day||0,o=t.hour||0,l=t.minute||0,u=t.second||0,d=t.millisecond||0;this._isValid=nf(t),this._milliseconds=+d+u*1e3+l*6e4+o*1e3*60*60,this._days=+i+s*7,this._months=+a+r*3+n*12,this._data={},this._locale=Ie(),this._bubble()}function At(e){return e instanceof tn}function Bn(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function sf(e,t,n){var r=Math.min(e.length,t.length),a=Math.abs(e.length-t.length),s=0,i;for(i=0;i<r;i++)M(e[i])!==M(t[i])&&s++;return s+a}function fs(e,t){S(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+Te(~~(n/60),2)+t+Te(~~n%60,2)})}fs("Z",":");fs("ZZ","");y("Z",Jt);y("ZZ",Jt);j(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=fr(Jt,e)});var of=/([\+\-]|\d\d)/gi;function fr(e,t){var n=(t||"").match(e),r,a,s;return n===null?null:(r=n[n.length-1]||[],a=(r+"").match(of)||["-",0,0],s=+(a[1]*60)+M(a[2]),s===0?0:a[0]==="+"?s:-s)}function mr(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(me(e)||_t(e)?e.valueOf():Y(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),p.updateOffset(n,!1),n):Y(e).local()}function Cn(e){return-Math.round(e._d.getTimezoneOffset())}p.updateOffset=function(){};function lf(e,t,n){var r=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=fr(Jt,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(a=Cn(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),r!==e&&(!t||this._changeInProgress?gs(this,ge(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,p.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:Cn(this)}function uf(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function df(e){return this.utcOffset(0,e)}function ff(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Cn(this),"m")),this}function mf(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=fr(Mu,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function hf(e){return this.isValid()?(e=e?Y(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function gf(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function cf(){if(!te(this._isDSTShifted))return this._isDSTShifted;var e={},t;return Xn(e,this),e=ls(e),e._a?(t=e._isUTC?xe(e._a):Y(e._a),this._isDSTShifted=this.isValid()&&sf(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function pf(){return this.isValid()?!this._isUTC:!1}function yf(){return this.isValid()?this._isUTC:!1}function ms(){return this.isValid()?this._isUTC&&this._offset===0:!1}var vf=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,kf=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function ge(e,t){var n=e,r=null,a,s,i;return At(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:Fe(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=vf.exec(e))?(a=r[1]==="-"?-1:1,n={y:0,d:M(r[ke])*a,h:M(r[V])*a,m:M(r[de])*a,s:M(r[Me])*a,ms:M(Bn(r[Ue]*1e3))*a}):(r=kf.exec(e))?(a=r[1]==="-"?-1:1,n={y:Ye(r[2],a),M:Ye(r[3],a),w:Ye(r[4],a),d:Ye(r[5],a),h:Ye(r[6],a),m:Ye(r[7],a),s:Ye(r[8],a)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(i=bf(Y(n.from),Y(n.to)),n={},n.ms=i.milliseconds,n.M=i.months),s=new tn(n),At(e)&&I(e,"_locale")&&(s._locale=e._locale),At(e)&&I(e,"_isValid")&&(s._isValid=e._isValid),s}ge.fn=tn.prototype;ge.invalid=af;function Ye(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function zr(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function bf(e,t){var n;return e.isValid()&&t.isValid()?(t=mr(t,e),e.isBefore(t)?n=zr(e,t):(n=zr(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function hs(e,t){return function(n,r){var a,s;return r!==null&&!isNaN(+r)&&(Ya(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=r,r=s),a=ge(n,r),gs(this,a,e),this}}function gs(e,t,n,r){var a=t._milliseconds,s=Bn(t._days),i=Bn(t._months);e.isValid()&&(r=r??!0,i&&Ja(e,gt(e,"Month")+i*n),s&&Za(e,"Date",gt(e,"Date")+s*n),a&&e._d.setTime(e._d.valueOf()+a*n),r&&p.updateOffset(e,s||i))}var _f=hs(1,"add"),Sf=hs(-1,"subtract");function cs(e){return typeof e=="string"||e instanceof String}function Tf(e){return me(e)||_t(e)||cs(e)||Fe(e)||xf(e)||wf(e)||e===null||e===void 0}function wf(e){var t=Ge(e)&&!zn(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,s,i=r.length;for(a=0;a<i;a+=1)s=r[a],n=n||I(e,s);return t&&n}function xf(e){var t=fe(e),n=!1;return t&&(n=e.filter(function(r){return!Fe(r)&&cs(e)}).length===0),t&&n}function Df(e){var t=Ge(e)&&!zn(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,s;for(a=0;a<r.length;a+=1)s=r[a],n=n||I(e,s);return t&&n}function Nf(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Ef(e,t){arguments.length===1&&(arguments[0]?Tf(arguments[0])?(e=arguments[0],t=void 0):Df(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||Y(),r=mr(n,this).startOf("day"),a=p.calendarFormat(this,r)||"sameElse",s=t&&(De(t[a])?t[a].call(this,n):t[a]);return this.format(s||this.localeData().calendar(a,this,Y(n)))}function Pf(){return new St(this)}function Mf(e,t){var n=me(e)?e:Y(e);return this.isValid()&&n.isValid()?(t=ue(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function Of(e,t){var n=me(e)?e:Y(e);return this.isValid()&&n.isValid()?(t=ue(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function Rf(e,t,n,r){var a=me(e)?e:Y(e),s=me(t)?t:Y(t);return this.isValid()&&a.isValid()&&s.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(a,n):!this.isBefore(a,n))&&(r[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function Ff(e,t){var n=me(e)?e:Y(e),r;return this.isValid()&&n.isValid()?(t=ue(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function Af(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function If(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Hf(e,t,n){var r,a,s;if(!this.isValid())return NaN;if(r=mr(e,this),!r.isValid())return NaN;switch(a=(r.utcOffset()-this.utcOffset())*6e4,t=ue(t),t){case"year":s=It(this,r)/12;break;case"month":s=It(this,r);break;case"quarter":s=It(this,r)/3;break;case"second":s=(this-r)/1e3;break;case"minute":s=(this-r)/6e4;break;case"hour":s=(this-r)/36e5;break;case"day":s=(this-r-a)/864e5;break;case"week":s=(this-r-a)/6048e5;break;default:s=this-r}return n?s:ie(s)}function It(e,t){if(e.date()<t.date())return-It(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),a,s;return t-r<0?(a=e.clone().add(n-1,"months"),s=(t-r)/(r-a)):(a=e.clone().add(n+1,"months"),s=(t-r)/(a-r)),-(n+s)||0}p.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";p.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Bf(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Cf(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?Ft(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):De(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Ft(n,"Z")):Ft(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function jf(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,a,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",s=t+'[")]',this.format(n+r+a+s)}function Lf(e){e||(e=this.isUtc()?p.defaultFormatUtc:p.defaultFormat);var t=Ft(this,e);return this.localeData().postformat(t)}function qf(e,t){return this.isValid()&&(me(e)&&e.isValid()||Y(e).isValid())?ge({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Yf(e){return this.from(Y(),e)}function Uf(e,t){return this.isValid()&&(me(e)&&e.isValid()||Y(e).isValid())?ge({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Gf(e){return this.to(Y(),e)}function ps(e){var t;return e===void 0?this._locale._abbr:(t=Ie(e),t!=null&&(this._locale=t),this)}var ys=le("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function vs(){return this._locale}var qt=1e3,et=60*qt,Yt=60*et,ks=(365*400+97)*24*Yt;function tt(e,t){return(e%t+t)%t}function bs(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-ks:new Date(e,t,n).valueOf()}function _s(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-ks:Date.UTC(e,t,n)}function Wf(e){var t,n;if(e=ue(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?_s:bs,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=tt(t+(this._isUTC?0:this.utcOffset()*et),Yt);break;case"minute":t=this._d.valueOf(),t-=tt(t,et);break;case"second":t=this._d.valueOf(),t-=tt(t,qt);break}return this._d.setTime(t),p.updateOffset(this,!0),this}function $f(e){var t,n;if(e=ue(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?_s:bs,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Yt-tt(t+(this._isUTC?0:this.utcOffset()*et),Yt)-1;break;case"minute":t=this._d.valueOf(),t+=et-tt(t,et)-1;break;case"second":t=this._d.valueOf(),t+=qt-tt(t,qt)-1;break}return this._d.setTime(t),p.updateOffset(this,!0),this}function Vf(){return this._d.valueOf()-(this._offset||0)*6e4}function zf(){return Math.floor(this.valueOf()/1e3)}function Zf(){return new Date(this.valueOf())}function Xf(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Kf(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Jf(){return this.isValid()?this.toISOString():null}function Qf(){return Zn(this)}function em(){return Be({},E(this))}function tm(){return E(this).overflow}function nm(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}S("N",0,0,"eraAbbr");S("NN",0,0,"eraAbbr");S("NNN",0,0,"eraAbbr");S("NNNN",0,0,"eraName");S("NNNNN",0,0,"eraNarrow");S("y",["y",1],"yo","eraYear");S("y",["yy",2],0,"eraYear");S("y",["yyy",3],0,"eraYear");S("y",["yyyy",4],0,"eraYear");y("N",hr);y("NN",hr);y("NNN",hr);y("NNNN",hm);y("NNNNN",gm);j(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var a=n._locale.erasParse(e,r,n._strict);a?E(n).era=a:E(n).invalidEra=e});y("y",ot);y("yy",ot);y("yyy",ot);y("yyyy",ot);y("yo",cm);j(["y","yy","yyy","yyyy"],J);j(["yo"],function(e,t,n,r){var a;n._locale._eraYearOrdinalRegex&&(a=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[J]=n._locale.eraYearOrdinalParse(e,a):t[J]=parseInt(e,10)});function rm(e,t){var n,r,a,s=this._eras||Ie("en")._eras;for(n=0,r=s.length;n<r;++n){switch(typeof s[n].since){case"string":a=p(s[n].since).startOf("day"),s[n].since=a.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":a=p(s[n].until).startOf("day").valueOf(),s[n].until=a.valueOf();break}}return s}function am(e,t,n){var r,a,s=this.eras(),i,o,l;for(e=e.toUpperCase(),r=0,a=s.length;r<a;++r)if(i=s[r].name.toUpperCase(),o=s[r].abbr.toUpperCase(),l=s[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(o===e)return s[r];break;case"NNNN":if(i===e)return s[r];break;case"NNNNN":if(l===e)return s[r];break}else if([i,o,l].indexOf(e)>=0)return s[r]}function sm(e,t){var n=e.since<=e.until?1:-1;return t===void 0?p(e.since).year():p(e.since).year()+(t-e.offset)*n}function im(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function om(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function lm(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function um(){var e,t,n,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(n=a[e].since<=a[e].until?1:-1,r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return(this.year()-p(a[e].since).year())*n+a[e].offset;return this.year()}function dm(e){return I(this,"_erasNameRegex")||gr.call(this),e?this._erasNameRegex:this._erasRegex}function fm(e){return I(this,"_erasAbbrRegex")||gr.call(this),e?this._erasAbbrRegex:this._erasRegex}function mm(e){return I(this,"_erasNarrowRegex")||gr.call(this),e?this._erasNarrowRegex:this._erasRegex}function hr(e,t){return t.erasAbbrRegex(e)}function hm(e,t){return t.erasNameRegex(e)}function gm(e,t){return t.erasNarrowRegex(e)}function cm(e,t){return t._eraYearOrdinalRegex||ot}function gr(){var e=[],t=[],n=[],r=[],a,s,i,o,l,u=this.eras();for(a=0,s=u.length;a<s;++a)i=Oe(u[a].name),o=Oe(u[a].abbr),l=Oe(u[a].narrow),t.push(i),e.push(o),n.push(l),r.push(i),r.push(o),r.push(l);this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}S(0,["gg",2],0,function(){return this.weekYear()%100});S(0,["GG",2],0,function(){return this.isoWeekYear()%100});function nn(e,t){S(0,[e,e.length],0,t)}nn("gggg","weekYear");nn("ggggg","weekYear");nn("GGGG","isoWeekYear");nn("GGGGG","isoWeekYear");y("G",Kt);y("g",Kt);y("GG",U,se);y("gg",U,se);y("GGGG",tr,er);y("gggg",tr,er);y("GGGGG",Xt,zt);y("ggggg",Xt,zt);wt(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=M(e)});wt(["gg","GG"],function(e,t,n,r){t[r]=p.parseTwoDigitYear(e)});function pm(e){return Ss.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function ym(e){return Ss.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function vm(){return Re(this.year(),1,4)}function km(){return Re(this.isoWeekYear(),1,4)}function bm(){var e=this.localeData()._week;return Re(this.year(),e.dow,e.doy)}function _m(){var e=this.localeData()._week;return Re(this.weekYear(),e.dow,e.doy)}function Ss(e,t,n,r,a){var s;return e==null?pt(this,r,a).year:(s=Re(e,r,a),t>s&&(t=s),Sm.call(this,e,t,n,r,a))}function Sm(e,t,n,r,a){var s=ts(e,t,n,r,a),i=ct(s.year,0,s.dayOfYear);return this.year(i.getUTCFullYear()),this.month(i.getUTCMonth()),this.date(i.getUTCDate()),this}S("Q",0,"Qo","quarter");y("Q",Ga);j("Q",function(e,t){t[Pe]=(M(e)-1)*3});function Tm(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}S("D",["DD",2],"Do","date");y("D",U,lt);y("DD",U,se);y("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});j(["D","DD"],ke);j("Do",function(e,t){t[ke]=M(e.match(U)[0])});var Ts=ut("Date",!0);S("DDD",["DDDD",3],"DDDo","dayOfYear");y("DDD",Zt);y("DDDD",Wa);j(["DDD","DDDD"],function(e,t,n){n._dayOfYear=M(e)});function wm(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}S("m",["mm",2],0,"minute");y("m",U,nr);y("mm",U,se);j(["m","mm"],de);var xm=ut("Minutes",!1);S("s",["ss",2],0,"second");y("s",U,nr);y("ss",U,se);j(["s","ss"],Me);var Dm=ut("Seconds",!1);S("S",0,0,function(){return~~(this.millisecond()/100)});S(0,["SS",2],0,function(){return~~(this.millisecond()/10)});S(0,["SSS",3],0,"millisecond");S(0,["SSSS",4],0,function(){return this.millisecond()*10});S(0,["SSSSS",5],0,function(){return this.millisecond()*100});S(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});S(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});S(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});S(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});y("S",Zt,Ga);y("SS",Zt,se);y("SSS",Zt,Wa);var Ce,ws;for(Ce="SSSS";Ce.length<=9;Ce+="S")y(Ce,ot);function Nm(e,t){t[Ue]=M(("0."+e)*1e3)}for(Ce="S";Ce.length<=9;Ce+="S")j(Ce,Nm);ws=ut("Milliseconds",!1);S("z",0,0,"zoneAbbr");S("zz",0,0,"zoneName");function Em(){return this._isUTC?"UTC":""}function Pm(){return this._isUTC?"Coordinated Universal Time":""}var f=St.prototype;f.add=_f;f.calendar=Ef;f.clone=Pf;f.diff=Hf;f.endOf=$f;f.format=Lf;f.from=qf;f.fromNow=Yf;f.to=Uf;f.toNow=Gf;f.get=Cu;f.invalidAt=tm;f.isAfter=Mf;f.isBefore=Of;f.isBetween=Rf;f.isSame=Ff;f.isSameOrAfter=Af;f.isSameOrBefore=If;f.isValid=Qf;f.lang=ys;f.locale=ps;f.localeData=vs;f.max=Jd;f.min=Kd;f.parsingFlags=em;f.set=ju;f.startOf=Wf;f.subtract=Sf;f.toArray=Xf;f.toObject=Kf;f.toDate=Zf;f.toISOString=Cf;f.inspect=jf;typeof Symbol<"u"&&Symbol.for!=null&&(f[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});f.toJSON=Jf;f.toString=Bf;f.unix=zf;f.valueOf=Vf;f.creationData=nm;f.eraName=im;f.eraNarrow=om;f.eraAbbr=lm;f.eraYear=um;f.year=za;f.isLeapYear=Bu;f.weekYear=pm;f.isoWeekYear=ym;f.quarter=f.quarters=Tm;f.month=Qa;f.daysInMonth=zu;f.week=f.weeks=nd;f.isoWeek=f.isoWeeks=rd;f.weeksInYear=bm;f.weeksInWeekYear=_m;f.isoWeeksInYear=vm;f.isoWeeksInISOWeekYear=km;f.date=Ts;f.day=f.days=pd;f.weekday=yd;f.isoWeekday=vd;f.dayOfYear=wm;f.hour=f.hours=xd;f.minute=f.minutes=xm;f.second=f.seconds=Dm;f.millisecond=f.milliseconds=ws;f.utcOffset=lf;f.utc=df;f.local=ff;f.parseZone=mf;f.hasAlignedHourOffset=hf;f.isDST=gf;f.isLocal=pf;f.isUtcOffset=yf;f.isUtc=ms;f.isUTC=ms;f.zoneAbbr=Em;f.zoneName=Pm;f.dates=le("dates accessor is deprecated. Use date instead.",Ts);f.months=le("months accessor is deprecated. Use month instead",Qa);f.years=le("years accessor is deprecated. Use year instead",za);f.zone=le("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",uf);f.isDSTShifted=le("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",cf);function Mm(e){return Y(e*1e3)}function Om(){return Y.apply(null,arguments).parseZone()}function xs(e){return e}var H=Kn.prototype;H.calendar=cu;H.longDateFormat=ku;H.invalidDate=_u;H.ordinal=wu;H.preparse=xs;H.postformat=xs;H.relativeTime=Du;H.pastFuture=Nu;H.set=hu;H.eras=rm;H.erasParse=am;H.erasConvertYear=sm;H.erasAbbrRegex=fm;H.erasNameRegex=dm;H.erasNarrowRegex=mm;H.months=Gu;H.monthsShort=Wu;H.monthsParse=Vu;H.monthsRegex=Xu;H.monthsShortRegex=Zu;H.week=Ju;H.firstDayOfYear=td;H.firstDayOfWeek=ed;H.weekdays=fd;H.weekdaysMin=hd;H.weekdaysShort=md;H.weekdaysParse=cd;H.weekdaysRegex=kd;H.weekdaysShortRegex=bd;H.weekdaysMinRegex=_d;H.isPM=Td;H.meridiem=Dd;function Ut(e,t,n,r){var a=Ie(),s=xe().set(r,t);return a[n](s,e)}function Ds(e,t,n){if(Fe(e)&&(t=e,e=void 0),e=e||"",t!=null)return Ut(e,t,n,"month");var r,a=[];for(r=0;r<12;r++)a[r]=Ut(e,r,n,"month");return a}function cr(e,t,n,r){typeof e=="boolean"?(Fe(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,Fe(t)&&(n=t,t=void 0),t=t||"");var a=Ie(),s=e?a._week.dow:0,i,o=[];if(n!=null)return Ut(t,(n+s)%7,r,"day");for(i=0;i<7;i++)o[i]=Ut(t,(i+s)%7,r,"day");return o}function Rm(e,t){return Ds(e,t,"months")}function Fm(e,t){return Ds(e,t,"monthsShort")}function Am(e,t,n){return cr(e,t,n,"weekdays")}function Im(e,t,n){return cr(e,t,n,"weekdaysShort")}function Hm(e,t,n){return cr(e,t,n,"weekdaysMin")}je("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=M(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});p.lang=le("moment.lang is deprecated. Use moment.locale instead.",je);p.langData=le("moment.langData is deprecated. Use moment.localeData instead.",Ie);var Ne=Math.abs;function Bm(){var e=this._data;return this._milliseconds=Ne(this._milliseconds),this._days=Ne(this._days),this._months=Ne(this._months),e.milliseconds=Ne(e.milliseconds),e.seconds=Ne(e.seconds),e.minutes=Ne(e.minutes),e.hours=Ne(e.hours),e.months=Ne(e.months),e.years=Ne(e.years),this}function Ns(e,t,n,r){var a=ge(t,n);return e._milliseconds+=r*a._milliseconds,e._days+=r*a._days,e._months+=r*a._months,e._bubble()}function Cm(e,t){return Ns(this,e,t,1)}function jm(e,t){return Ns(this,e,t,-1)}function Zr(e){return e<0?Math.floor(e):Math.ceil(e)}function Lm(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,a,s,i,o,l;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=Zr(jn(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,a=ie(e/1e3),r.seconds=a%60,s=ie(a/60),r.minutes=s%60,i=ie(s/60),r.hours=i%24,t+=ie(i/24),l=ie(Es(t)),n+=l,t-=Zr(jn(l)),o=ie(n/12),n%=12,r.days=t,r.months=n,r.years=o,this}function Es(e){return e*4800/146097}function jn(e){return e*146097/4800}function qm(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=ue(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+Es(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(jn(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function He(e){return function(){return this.as(e)}}var Ps=He("ms"),Ym=He("s"),Um=He("m"),Gm=He("h"),Wm=He("d"),$m=He("w"),Vm=He("M"),zm=He("Q"),Zm=He("y"),Xm=Ps;function Km(){return ge(this)}function Jm(e){return e=ue(e),this.isValid()?this[e+"s"]():NaN}function Ve(e){return function(){return this.isValid()?this._data[e]:NaN}}var Qm=Ve("milliseconds"),eh=Ve("seconds"),th=Ve("minutes"),nh=Ve("hours"),rh=Ve("days"),ah=Ve("months"),sh=Ve("years");function ih(){return ie(this.days()/7)}var Ee=Math.round,Xe={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function oh(e,t,n,r,a){return a.relativeTime(t||1,!!n,e,r)}function lh(e,t,n,r){var a=ge(e).abs(),s=Ee(a.as("s")),i=Ee(a.as("m")),o=Ee(a.as("h")),l=Ee(a.as("d")),u=Ee(a.as("M")),d=Ee(a.as("w")),h=Ee(a.as("y")),m=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||i<=1&&["m"]||i<n.m&&["mm",i]||o<=1&&["h"]||o<n.h&&["hh",o]||l<=1&&["d"]||l<n.d&&["dd",l];return n.w!=null&&(m=m||d<=1&&["w"]||d<n.w&&["ww",d]),m=m||u<=1&&["M"]||u<n.M&&["MM",u]||h<=1&&["y"]||["yy",h],m[2]=t,m[3]=+e>0,m[4]=r,oh.apply(null,m)}function uh(e){return e===void 0?Ee:typeof e=="function"?(Ee=e,!0):!1}function dh(e,t){return Xe[e]===void 0?!1:t===void 0?Xe[e]:(Xe[e]=t,e==="s"&&(Xe.ss=t-1),!0)}function fh(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=Xe,a,s;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},Xe,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),a=this.localeData(),s=lh(this,!n,r,a),n&&(s=a.pastFuture(+this,s)),a.postformat(s)}var cn=Math.abs;function ze(e){return(e>0)-(e<0)||+e}function rn(){if(!this.isValid())return this.localeData().invalidDate();var e=cn(this._milliseconds)/1e3,t=cn(this._days),n=cn(this._months),r,a,s,i,o=this.asSeconds(),l,u,d,h;return o?(r=ie(e/60),a=ie(r/60),e%=60,r%=60,s=ie(n/12),n%=12,i=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=o<0?"-":"",u=ze(this._months)!==ze(o)?"-":"",d=ze(this._days)!==ze(o)?"-":"",h=ze(this._milliseconds)!==ze(o)?"-":"",l+"P"+(s?u+s+"Y":"")+(n?u+n+"M":"")+(t?d+t+"D":"")+(a||r||e?"T":"")+(a?h+a+"H":"")+(r?h+r+"M":"")+(e?h+i+"S":"")):"P0D"}var F=tn.prototype;F.isValid=rf;F.abs=Bm;F.add=Cm;F.subtract=jm;F.as=qm;F.asMilliseconds=Ps;F.asSeconds=Ym;F.asMinutes=Um;F.asHours=Gm;F.asDays=Wm;F.asWeeks=$m;F.asMonths=Vm;F.asQuarters=zm;F.asYears=Zm;F.valueOf=Xm;F._bubble=Lm;F.clone=Km;F.get=Jm;F.milliseconds=Qm;F.seconds=eh;F.minutes=th;F.hours=nh;F.days=rh;F.weeks=ih;F.months=ah;F.years=sh;F.humanize=fh;F.toISOString=rn;F.toString=rn;F.toJSON=rn;F.locale=ps;F.localeData=vs;F.toIsoString=le("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",rn);F.lang=ys;S("X",0,0,"unix");S("x",0,0,"valueOf");y("x",Kt);y("X",Ou);j("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});j("x",function(e,t,n){n._d=new Date(M(e))});//! moment.js
p.version="2.30.1";fu(Y);p.fn=f;p.min=Qd;p.max=ef;p.now=tf;p.utc=xe;p.unix=Mm;p.months=Rm;p.isDate=_t;p.locale=je;p.invalid=Vt;p.duration=ge;p.isMoment=me;p.weekdays=Am;p.parseZone=Om;p.localeData=Ie;p.isDuration=At;p.monthsShort=Fm;p.weekdaysMin=Hm;p.defineLocale=or;p.updateLocale=Md;p.locales=Od;p.weekdaysShort=Im;p.normalizeUnits=ue;p.relativeTimeRounding=uh;p.relativeTimeThreshold=dh;p.calendarFormat=Nf;p.prototype=f;p.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const mh="_colMargin_1r8hu_1",Gt={colMargin:mh},Ht=e=>e?p(e,Wn).format($n):"-",hh=(e,t,n,r)=>e&&Object.keys(t).length>0?Ht(Object.values(t)[0]):r?Ht(r):e?n?Ht(n):"-":null,Ms=({soknad:e,termindato:t})=>{const n=e.fodselsdatoer?e.fodselsdatoer:{},r=Object.keys(n).length>0?"FodselsammenligningPanel.Fodselsdato":"FodselsammenligningPanel.Termindato",a=Object.keys(n).length>0?"FodselSammenligningOtherPanel.OpplysningerISoknad":"FodselSammenligningOtherPanel.TerminISoknad",s=L.useMemo(()=>hh(!!e,n,e.termindato,t),[e,n,t]);return v.jsxs(v.Fragment,{children:[v.jsx(Vn,{size:"small",children:v.jsx(re,{id:a})}),v.jsx(Ca,{sixteenPx:!0}),v.jsx(Ct,{children:v.jsxs(Bt,{children:[e.utstedtdato&&v.jsxs(be,{className:Gt.colMargin,children:[v.jsx(Ke,{size:"small",children:v.jsx(re,{id:"FodselsammenligningPanel.UstedtDato"})}),v.jsx(_e,{size:"small",children:Ht(e.utstedtdato)})]}),v.jsxs(be,{className:Gt.colMargin,children:[v.jsx(Ke,{size:"small",children:v.jsx(re,{id:r})}),v.jsx(_e,{size:"small",children:s})]}),v.jsxs(be,{children:[v.jsx(Ke,{size:"small",children:v.jsx(re,{id:"FodselsammenligningPanel.AntallBarn"})}),v.jsx(_e,{size:"small",children:e.antallBarn})]})]})})]})};Ms.__docgenInfo={description:`FodselSammenligningOtherPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""}}};const pn=e=>e?p(e,Wn).format($n):"-",gh=(e,t,n)=>{if(!t&&!n)return"";const r=n||{termindato:void 0,avklartBarn:[]};if(e){const a=r.termindato?r.termindato:t==null?void 0:t.termindato;return a?pn(a):void 0}return r.avklartBarn&&r.avklartBarn.length>0?pn(r.avklartBarn[0].fodselsdato):t!=null&&t.fodselsdatoer?pn(Object.values(t.fodselsdatoer)[0]):"-"},ch=(e,t,n)=>{if(!t&&!n)return 0;const r=n||{termindato:void 0,antallBarnTermin:void 0,avklartBarn:[]};return e?r.termindato?r.antallBarnTermin:t==null?void 0:t.antallBarn:r.avklartBarn&&r.avklartBarn.length>0?r.avklartBarn.length:t==null?void 0:t.antallBarn},Os=({vedtaksDatoSomSvangerskapsuke:e,soknadOriginalBehandling:t,familiehendelseOriginalBehandling:n})=>{const r=n&&!!n.termindato||!(t!=null&&t.fodselsdatoer)||Object.keys(t.fodselsdatoer).length===0,a=r?"FodselsammenligningPanel.Termindato":"FodselsammenligningPanel.Fodselsdato",s=gh(r,t,n),i=ch(r,t,n),o=n?(!n.avklartBarn||n.avklartBarn.length===0)&&!!e:!1;return v.jsxs(v.Fragment,{children:[v.jsx(Vn,{size:"small",children:v.jsx(re,{id:"FodselsammenligningPanel.Ytelsesvedtak"})}),v.jsx(Ca,{sixteenPx:!0}),v.jsx(Ct,{children:v.jsxs(Bt,{children:[o&&v.jsxs(be,{className:Gt.colMargin,children:[v.jsx(Ke,{size:"small",children:v.jsx(re,{id:"FodselsammenligningPanel.FodtISvangerskapsuke"})}),v.jsx(_e,{size:"small",children:e})]}),v.jsxs(be,{className:Gt.colMargin,children:[v.jsx(Ke,{size:"small",children:v.jsx(re,{id:a})}),v.jsx(_e,{size:"small",children:s??"-"})]}),v.jsxs(be,{children:[v.jsx(Ke,{size:"small",children:v.jsx(re,{id:"FodselsammenligningPanel.AntallBarn"})}),v.jsx(_e,{size:"small",children:i??"-"})]})]})})]})};Os.__docgenInfo={description:`FodselSammenligningRevurderingPanel

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
}>`},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const ph="_noChildrenInTps_3z81w_1",yh="_colWidthLeft_3z81w_5",vh="_colWidthRight_3z81w_9",yn={noChildrenInTps:ph,colWidthLeft:yh,colWidthRight:vh},Xr=e=>e?p(e,Wn).format($n):"-",Rs=({behandlingsTypeKode:e,avklartBarn:t,nrOfDodfodteBarn:n,soknad:r,vedtaksDatoSomSvangerskapsuke:a,termindato:s,soknadOriginalBehandling:i,familiehendelseOriginalBehandling:o})=>v.jsx(Ct,{children:v.jsxs(Bt,{children:[v.jsxs(be,{className:yn.colWidthLeft,children:[e!==nt.REVURDERING&&v.jsx(Ms,{soknad:r,termindato:s}),e===nt.REVURDERING&&v.jsx(Os,{soknadOriginalBehandling:i,familiehendelseOriginalBehandling:o,vedtaksDatoSomSvangerskapsuke:a})]}),v.jsxs(be,{className:yn.colWidthRight,children:[v.jsx(Ct,{children:v.jsxs(Bt,{children:[v.jsx(be,{children:v.jsx(Vn,{size:"small",children:v.jsx(re,{id:"FodselsammenligningPanel.OpplysningerTPS"})})}),n>0&&v.jsx(be,{children:v.jsx(Br,{variant:"info",children:v.jsx(re,{id:"FodselsammenligningPanel.Dodfodt"})})})]})}),t.length>0&&v.jsx(Ba,{noHover:!0,headerTextCodes:["FodselsammenligningPanel.Fodselsdato","FodselsammenligningPanel.Dodsdato"],children:t.map(l=>{const u=l.fodselsdato+l.dodsdato;return v.jsxs(Ia,{id:u,children:[v.jsx(Je,{children:v.jsx(_e,{size:"small",children:Xr(l.fodselsdato)})}),v.jsx(Je,{children:v.jsx(_e,{size:"small",children:l.dodsdato?Xr(l.dodsdato):"-"})}),v.jsx(Je,{children:l.dodsdato&&v.jsx(Br,{variant:"info",children:v.jsx(re,{id:"FodselsammenligningPanel.Dod"})})})]},u)})}),t.length===0&&v.jsx("div",{className:yn.noChildrenInTps,children:v.jsx(_e,{size:"small",children:"-"})})]})]})});Rs.__docgenInfo={description:`FodselSammenlingningPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const kh={"FodselsammenligningPanel.AntallBarn":"Antall barn","FodselsammenligningPanel.Termindato":"Termindato","FodselsammenligningPanel.FodtISvangerskapsuke":"Født i svangerskapsuke","FodselsammenligningPanel.Svangerskapsuke":"Svangerskapsuke","FodselsammenligningPanel.OpplysningerTPS":"Opplysninger om fødsel fra folkeregisteret","FodselsammenligningPanel.Fodselsdato":"Fødselsdato","FodselsammenligningPanel.Dodsdato":"Dødsdato","FodselsammenligningPanel.UstedtDato":"Utstedt dato","FodselsammenligningPanel.Ytelsesvedtak":"Vedtak","FodselsammenligningPanel.Dodfodt":"Dødfødsel","FodselsammenligningPanel.Dod":"Død","FodselSammenligningOtherPanel.OpplysningerISoknad":"Opplysninger om fødsel fra søknaden","FodselSammenligningOtherPanel.TerminISoknad":"Opplysninger om termin oppgitt i søknaden"},bh=we(kh),Fs=({behandlingsTypeKode:e,avklartBarn:t=[],termindato:n,vedtaksDatoSomSvangerskapsuke:r,soknad:a,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:i})=>{const o=t.reduce((l,u)=>l+(u.dodsdato?1:0),0);return v.jsx(lo,{value:bh,children:v.jsx(Rs,{avklartBarn:t,termindato:n,vedtaksDatoSomSvangerskapsuke:r,nrOfDodfodteBarn:o,behandlingsTypeKode:e,soknad:a,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:i})})};Fs.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningIndex",props:{behandlingsTypeKode:{required:!0,tsType:{name:"string"},description:""},avklartBarn:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const _h=[{fodselsdato:"2019-01-10",dodsdato:"2019-01-10",fnr:"1213200001"}],Sh={fodselsdatoer:{1:"2019-01-10"},termindato:"2019-01-01",utstedtdato:"2019-01-02",antallBarn:1},Th={avklartBarn:[{fodselsdato:"2019-01-10"}],termindato:"2019-01-01",antallBarnTermin:1},Eh={title:"prosessOgFakta/prosess-fakta-fodsel-sammenligning",component:Fs,args:{avklartBarn:_h,termindato:"2019-01-01",soknad:Sh,familiehendelseOriginalBehandling:Th}},Pt={args:{behandlingsTypeKode:nt.REVURDERING}},Mt={args:{behandlingsTypeKode:nt.FORSTEGANGSSOKNAD}},Ot={args:{behandlingsTypeKode:nt.REVURDERING,vedtaksDatoSomSvangerskapsuke:43,familiehendelseOriginalBehandling:{avklartBarn:[],termindato:"2019-01-01",antallBarnTermin:1}}};var Kr,Jr,Qr;Pt.parameters={...Pt.parameters,docs:{...(Kr=Pt.parameters)==null?void 0:Kr.docs,source:{originalSource:`{
  args: {
    behandlingsTypeKode: BehandlingType.REVURDERING
  }
}`,...(Qr=(Jr=Pt.parameters)==null?void 0:Jr.docs)==null?void 0:Qr.source}}};var ea,ta,na;Mt.parameters={...Mt.parameters,docs:{...(ea=Mt.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  args: {
    behandlingsTypeKode: BehandlingType.FORSTEGANGSSOKNAD
  }
}`,...(na=(ta=Mt.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var ra,aa,sa;Ot.parameters={...Ot.parameters,docs:{...(ra=Ot.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  args: {
    behandlingsTypeKode: BehandlingType.REVURDERING,
    vedtaksDatoSomSvangerskapsuke: 43,
    familiehendelseOriginalBehandling: {
      avklartBarn: [] as AvklartBarn[],
      termindato: '2019-01-01',
      antallBarnTermin: 1
    } as FamilieHendelse
  }
}`,...(sa=(aa=Ot.parameters)==null?void 0:aa.docs)==null?void 0:sa.source}}};const Ph=["PanelForNårBehandlingstypeErRevurdering","PanelForNårBehandlingstypeErFørstegangssoknad","PanelForMedVisningAvSvangerskapsuke"];export{Ot as PanelForMedVisningAvSvangerskapsuke,Mt as PanelForNårBehandlingstypeErFørstegangssoknad,Pt as PanelForNårBehandlingstypeErRevurdering,Ph as __namedExportsOrder,Eh as default};
