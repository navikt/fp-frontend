import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{r as G,R as J}from"./index-BZISi7jw.js";import{d as Wn}from"./dayjs.min-DkLNzaWO.js";import"./_commonjsHelpers-CqkleIqs.js";var $n=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))($n||{});$n.BRUKERS_ANDEL;$n.FRILANS;$n.EGEN_NÆRING;var an=(e=>(e.FORSTEGANGSSOKNAD="BT-002",e.KLAGE="BT-003",e.REVURDERING="BT-004",e.DOKUMENTINNSYN="BT-006",e.TILBAKEKREVING="BT-007",e.ANKE="BT-008",e.TILBAKEKREVING_REVURDERING="BT-009",e))(an||{}),yr=function(e,n){return yr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a])},yr(e,n)};function fe(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");yr(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}var b=function(){return b=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},b.apply(this,arguments)};function sn(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r}function ye(e,n,r){if(r||arguments.length===2)for(var t=0,a=n.length,s;t<a;t++)(s||!(t in n))&&(s||(s=Array.prototype.slice.call(n,0,t)),s[t]=n[t]);return e.concat(s||Array.prototype.slice.call(n))}function ke(e,n){var r=n&&n.cache?n.cache:Zs,t=n&&n.serializer?n.serializer:$s,a=n&&n.strategy?n.strategy:Vs;return a(e,{cache:r,serializer:t})}function Ys(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Gs(e,n,r,t){var a=Ys(t)?t:r(t),s=n.get(a);return typeof s>"u"&&(s=e.call(this,t),n.set(a,s)),s}function ca(e,n,r){var t=Array.prototype.slice.call(arguments,3),a=r(t),s=n.get(a);return typeof s>"u"&&(s=e.apply(this,t),n.set(a,s)),s}function ya(e,n,r,t,a){return r.bind(n,e,t,a)}function Vs(e,n){var r=e.length===1?Gs:ca;return ya(e,this,r,n.cache.create(),n.serializer)}function Ws(e,n){return ya(e,this,ca,n.cache.create(),n.serializer)}var $s=function(){return JSON.stringify(arguments)},zs=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(n){return this.cache[n]},e.prototype.set=function(n,r){this.cache[n]=r},e}(),Zs={create:function(){return new zs}},ce={variadic:Ws},q;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(q||(q={}));var C;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(C||(C={}));var on;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(on||(on={}));function yt(e){return e.type===C.literal}function Ks(e){return e.type===C.argument}function va(e){return e.type===C.number}function ba(e){return e.type===C.date}function Sa(e){return e.type===C.time}function _a(e){return e.type===C.select}function Ta(e){return e.type===C.plural}function Xs(e){return e.type===C.pound}function wa(e){return e.type===C.tag}function Da(e){return!!(e&&typeof e=="object"&&e.type===on.number)}function vr(e){return!!(e&&typeof e=="object"&&e.type===on.dateTime)}var Pa=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,Js=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function Qs(e){var n={};return e.replace(Js,function(r){var t=r.length;switch(r[0]){case"G":n.era=t===4?"long":t===5?"narrow":"short";break;case"y":n.year=t===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":n.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":n.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":n.weekday=t===4?"long":t===5?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][t-4];break;case"a":n.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":n.hourCycle="h12",n.hour=["numeric","2-digit"][t-1];break;case"H":n.hourCycle="h23",n.hour=["numeric","2-digit"][t-1];break;case"K":n.hourCycle="h11",n.hour=["numeric","2-digit"][t-1];break;case"k":n.hourCycle="h24",n.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":n.minute=["numeric","2-digit"][t-1];break;case"s":n.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":n.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),n}var ei=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function ni(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var n=e.split(ei).filter(function(f){return f.length>0}),r=[],t=0,a=n;t<a.length;t++){var s=a[t],i=s.split("/");if(i.length===0)throw new Error("Invalid number skeleton");for(var o=i[0],l=i.slice(1),d=0,u=l;d<u.length;d++){var g=u[d];if(g.length===0)throw new Error("Invalid number skeleton")}r.push({stem:o,options:l})}return r}function ri(e){return e.replace(/^(.*?)-/,"")}var vt=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Na=/^(@+)?(\+|#+)?[rs]?$/g,ti=/(\*)(0+)|(#+)(0+)|(0+)/g,xa=/^(0+)$/;function bt(e){var n={};return e[e.length-1]==="r"?n.roundingPriority="morePrecision":e[e.length-1]==="s"&&(n.roundingPriority="lessPrecision"),e.replace(Na,function(r,t,a){return typeof a!="string"?(n.minimumSignificantDigits=t.length,n.maximumSignificantDigits=t.length):a==="+"?n.minimumSignificantDigits=t.length:t[0]==="#"?n.maximumSignificantDigits=t.length:(n.minimumSignificantDigits=t.length,n.maximumSignificantDigits=t.length+(typeof a=="string"?a.length:0)),""}),n}function Ra(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function ai(e){var n;if(e[0]==="E"&&e[1]==="E"?(n={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(n={notation:"scientific"},e=e.slice(1)),n){var r=e.slice(0,2);if(r==="+!"?(n.signDisplay="always",e=e.slice(2)):r==="+?"&&(n.signDisplay="exceptZero",e=e.slice(2)),!xa.test(e))throw new Error("Malformed concise eng/scientific notation");n.minimumIntegerDigits=e.length}return n}function St(e){var n={},r=Ra(e);return r||n}function si(e){for(var n={},r=0,t=e;r<t.length;r++){var a=t[r];switch(a.stem){case"percent":case"%":n.style="percent";continue;case"%x100":n.style="percent",n.scale=100;continue;case"currency":n.style="currency",n.currency=a.options[0];continue;case"group-off":case",_":n.useGrouping=!1;continue;case"precision-integer":case".":n.maximumFractionDigits=0;continue;case"measure-unit":case"unit":n.style="unit",n.unit=ri(a.options[0]);continue;case"compact-short":case"K":n.notation="compact",n.compactDisplay="short";continue;case"compact-long":case"KK":n.notation="compact",n.compactDisplay="long";continue;case"scientific":n=b(b(b({},n),{notation:"scientific"}),a.options.reduce(function(l,d){return b(b({},l),St(d))},{}));continue;case"engineering":n=b(b(b({},n),{notation:"engineering"}),a.options.reduce(function(l,d){return b(b({},l),St(d))},{}));continue;case"notation-simple":n.notation="standard";continue;case"unit-width-narrow":n.currencyDisplay="narrowSymbol",n.unitDisplay="narrow";continue;case"unit-width-short":n.currencyDisplay="code",n.unitDisplay="short";continue;case"unit-width-full-name":n.currencyDisplay="name",n.unitDisplay="long";continue;case"unit-width-iso-code":n.currencyDisplay="symbol";continue;case"scale":n.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":n.roundingMode="floor";continue;case"rounding-mode-ceiling":n.roundingMode="ceil";continue;case"rounding-mode-down":n.roundingMode="trunc";continue;case"rounding-mode-up":n.roundingMode="expand";continue;case"rounding-mode-half-even":n.roundingMode="halfEven";continue;case"rounding-mode-half-down":n.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":n.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(ti,function(l,d,u,g,f,D){if(d)n.minimumIntegerDigits=u.length;else{if(g&&f)throw new Error("We currently do not support maximum integer digits");if(D)throw new Error("We currently do not support exact integer digits")}return""});continue}if(xa.test(a.stem)){n.minimumIntegerDigits=a.stem.length;continue}if(vt.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(vt,function(l,d,u,g,f,D){return u==="*"?n.minimumFractionDigits=d.length:g&&g[0]==="#"?n.maximumFractionDigits=g.length:f&&D?(n.minimumFractionDigits=f.length,n.maximumFractionDigits=f.length+D.length):(n.minimumFractionDigits=d.length,n.maximumFractionDigits=d.length),""});var s=a.options[0];s==="w"?n=b(b({},n),{trailingZeroDisplay:"stripIfInteger"}):s&&(n=b(b({},n),bt(s)));continue}if(Na.test(a.stem)){n=b(b({},n),bt(a.stem));continue}var i=Ra(a.stem);i&&(n=b(b({},n),i));var o=ai(a.stem);o&&(n=b(b({},n),o))}return n}var Rn={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function ii(e,n){for(var r="",t=0;t<e.length;t++){var a=e.charAt(t);if(a==="j"){for(var s=0;t+1<e.length&&e.charAt(t+1)===a;)s++,t++;var i=1+(s&1),o=s<2?1:3+(s>>1),l="a",d=oi(n);for((d=="H"||d=="k")&&(o=0);o-- >0;)r+=l;for(;i-- >0;)r=d+r}else a==="J"?r+="H":r+=a}return r}function oi(e){var n=e.hourCycle;if(n===void 0&&e.hourCycles&&e.hourCycles.length&&(n=e.hourCycles[0]),n)switch(n){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,t;r!=="root"&&(t=e.maximize().region);var a=Rn[t||""]||Rn[r||""]||Rn["".concat(r,"-001")]||Rn["001"];return a[0]}var or,li=new RegExp("^".concat(Pa.source,"*")),di=new RegExp("".concat(Pa.source,"*$"));function E(e,n){return{start:e,end:n}}var ui=!!String.prototype.startsWith&&"_a".startsWith("a",1),mi=!!String.fromCodePoint,gi=!!Object.fromEntries,fi=!!String.prototype.codePointAt,hi=!!String.prototype.trimStart,pi=!!String.prototype.trimEnd,ki=!!Number.isSafeInteger,ci=ki?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},br=!0;try{var yi=qa("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");br=((or=yi.exec("a"))===null||or===void 0?void 0:or[0])==="a"}catch{br=!1}var _t=ui?function(n,r,t){return n.startsWith(r,t)}:function(n,r,t){return n.slice(t,t+r.length)===r},Sr=mi?String.fromCodePoint:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];for(var t="",a=n.length,s=0,i;a>s;){if(i=n[s++],i>1114111)throw RangeError(i+" is not a valid code point");t+=i<65536?String.fromCharCode(i):String.fromCharCode(((i-=65536)>>10)+55296,i%1024+56320)}return t},Tt=gi?Object.fromEntries:function(n){for(var r={},t=0,a=n;t<a.length;t++){var s=a[t],i=s[0],o=s[1];r[i]=o}return r},Fa=fi?function(n,r){return n.codePointAt(r)}:function(n,r){var t=n.length;if(!(r<0||r>=t)){var a=n.charCodeAt(r),s;return a<55296||a>56319||r+1===t||(s=n.charCodeAt(r+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},vi=hi?function(n){return n.trimStart()}:function(n){return n.replace(li,"")},bi=pi?function(n){return n.trimEnd()}:function(n){return n.replace(di,"")};function qa(e,n){return new RegExp(e,n)}var _r;if(br){var wt=qa("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");_r=function(n,r){var t;wt.lastIndex=r;var a=wt.exec(n);return(t=a[1])!==null&&t!==void 0?t:""}}else _r=function(n,r){for(var t=[];;){var a=Fa(n,r);if(a===void 0||Ea(a)||wi(a))break;t.push(a),r+=a>=65536?2:1}return Sr.apply(void 0,t)};var Si=function(){function e(n,r){r===void 0&&(r={}),this.message=n,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(n,r,t){for(var a=[];!this.isEOF();){var s=this.char();if(s===123){var i=this.parseArgument(n,t);if(i.err)return i;a.push(i.val)}else{if(s===125&&n>0)break;if(s===35&&(r==="plural"||r==="selectordinal")){var o=this.clonePosition();this.bump(),a.push({type:C.pound,location:E(o,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(t)break;return this.error(q.UNMATCHED_CLOSING_TAG,E(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&Tr(this.peek()||0)){var i=this.parseTag(n,r);if(i.err)return i;a.push(i.val)}else{var i=this.parseLiteral(n,r);if(i.err)return i;a.push(i.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(n,r){var t=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:C.literal,value:"<".concat(a,"/>"),location:E(t,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(n+1,r,!0);if(s.err)return s;var i=s.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Tr(this.char()))return this.error(q.INVALID_TAG,E(o,this.clonePosition()));var l=this.clonePosition(),d=this.parseTagName();return a!==d?this.error(q.UNMATCHED_CLOSING_TAG,E(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:C.tag,value:a,children:i,location:E(t,this.clonePosition())},err:null}:this.error(q.INVALID_TAG,E(o,this.clonePosition())))}else return this.error(q.UNCLOSED_TAG,E(t,this.clonePosition()))}else return this.error(q.INVALID_TAG,E(t,this.clonePosition()))},e.prototype.parseTagName=function(){var n=this.offset();for(this.bump();!this.isEOF()&&Ti(this.char());)this.bump();return this.message.slice(n,this.offset())},e.prototype.parseLiteral=function(n,r){for(var t=this.clonePosition(),a="";;){var s=this.tryParseQuote(r);if(s){a+=s;continue}var i=this.tryParseUnquoted(n,r);if(i){a+=i;continue}var o=this.tryParseLeftAngleBracket();if(o){a+=o;continue}break}var l=E(t,this.clonePosition());return{val:{type:C.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!_i(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(n){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(n==="plural"||n==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var t=this.char();if(t===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(t);this.bump()}return Sr.apply(void 0,r)},e.prototype.tryParseUnquoted=function(n,r){if(this.isEOF())return null;var t=this.char();return t===60||t===123||t===35&&(r==="plural"||r==="selectordinal")||t===125&&n>0?null:(this.bump(),Sr(t))},e.prototype.parseArgument=function(n,r){var t=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(q.EXPECT_ARGUMENT_CLOSING_BRACE,E(t,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(q.EMPTY_ARGUMENT,E(t,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(q.MALFORMED_ARGUMENT,E(t,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(q.EXPECT_ARGUMENT_CLOSING_BRACE,E(t,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:C.argument,value:a,location:E(t,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(q.EXPECT_ARGUMENT_CLOSING_BRACE,E(t,this.clonePosition())):this.parseArgumentOptions(n,r,a,t);default:return this.error(q.MALFORMED_ARGUMENT,E(t,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var n=this.clonePosition(),r=this.offset(),t=_r(this.message,r),a=r+t.length;this.bumpTo(a);var s=this.clonePosition(),i=E(n,s);return{value:t,location:i}},e.prototype.parseArgumentOptions=function(n,r,t,a){var s,i=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(q.EXPECT_ARGUMENT_TYPE,E(i,l));case"number":case"date":case"time":{this.bumpSpace();var d=null;if(this.bumpIf(",")){this.bumpSpace();var u=this.clonePosition(),g=this.parseSimpleArgStyleIfPossible();if(g.err)return g;var f=bi(g.val);if(f.length===0)return this.error(q.EXPECT_ARGUMENT_STYLE,E(this.clonePosition(),this.clonePosition()));var D=E(u,this.clonePosition());d={style:f,styleLocation:D}}var w=this.tryParseArgumentClose(a);if(w.err)return w;var h=E(a,this.clonePosition());if(d&&_t(d==null?void 0:d.style,"::",0)){var R=vi(d.style.slice(2));if(o==="number"){var g=this.parseNumberSkeletonFromString(R,d.styleLocation);return g.err?g:{val:{type:C.number,value:t,location:h,style:g.val},err:null}}else{if(R.length===0)return this.error(q.EXPECT_DATE_TIME_SKELETON,h);var x=R;this.locale&&(x=ii(R,this.locale));var f={type:on.dateTime,pattern:x,location:d.styleLocation,parsedOptions:this.shouldParseSkeletons?Qs(x):{}},H=o==="date"?C.date:C.time;return{val:{type:H,value:t,location:h,style:f},err:null}}}return{val:{type:o==="number"?C.number:o==="date"?C.date:C.time,value:t,location:h,style:(s=d==null?void 0:d.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var T=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(q.EXPECT_SELECT_ARGUMENT_OPTIONS,E(T,b({},T)));this.bumpSpace();var Z=this.parseIdentifierIfPossible(),p=0;if(o!=="select"&&Z.value==="offset"){if(!this.bumpIf(":"))return this.error(q.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,E(this.clonePosition(),this.clonePosition()));this.bumpSpace();var g=this.tryParseDecimalInteger(q.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,q.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(g.err)return g;this.bumpSpace(),Z=this.parseIdentifierIfPossible(),p=g.val}var P=this.tryParsePluralOrSelectOptions(n,o,r,Z);if(P.err)return P;var w=this.tryParseArgumentClose(a);if(w.err)return w;var S=E(a,this.clonePosition());return o==="select"?{val:{type:C.select,value:t,options:Tt(P.val),location:S},err:null}:{val:{type:C.plural,value:t,options:Tt(P.val),offset:p,pluralType:o==="plural"?"cardinal":"ordinal",location:S},err:null}}default:return this.error(q.INVALID_ARGUMENT_TYPE,E(i,l))}},e.prototype.tryParseArgumentClose=function(n){return this.isEOF()||this.char()!==125?this.error(q.EXPECT_ARGUMENT_CLOSING_BRACE,E(n,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var n=0,r=this.clonePosition();!this.isEOF();){var t=this.char();switch(t){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(q.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,E(a,this.clonePosition()));this.bump();break}case 123:{n+=1,this.bump();break}case 125:{if(n>0)n-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(n,r){var t=[];try{t=ni(n)}catch{return this.error(q.INVALID_NUMBER_SKELETON,r)}return{val:{type:on.number,tokens:t,location:r,parsedOptions:this.shouldParseSkeletons?si(t):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(n,r,t,a){for(var s,i=!1,o=[],l=new Set,d=a.value,u=a.location;;){if(d.length===0){var g=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var f=this.tryParseDecimalInteger(q.EXPECT_PLURAL_ARGUMENT_SELECTOR,q.INVALID_PLURAL_ARGUMENT_SELECTOR);if(f.err)return f;u=E(g,this.clonePosition()),d=this.message.slice(g.offset,this.offset())}else break}if(l.has(d))return this.error(r==="select"?q.DUPLICATE_SELECT_ARGUMENT_SELECTOR:q.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,u);d==="other"&&(i=!0),this.bumpSpace();var D=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?q.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:q.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,E(this.clonePosition(),this.clonePosition()));var w=this.parseMessage(n+1,r,t);if(w.err)return w;var h=this.tryParseArgumentClose(D);if(h.err)return h;o.push([d,{value:w.val,location:E(D,this.clonePosition())}]),l.add(d),this.bumpSpace(),s=this.parseIdentifierIfPossible(),d=s.value,u=s.location}return o.length===0?this.error(r==="select"?q.EXPECT_SELECT_ARGUMENT_SELECTOR:q.EXPECT_PLURAL_ARGUMENT_SELECTOR,E(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!i?this.error(q.MISSING_OTHER_CLAUSE,E(this.clonePosition(),this.clonePosition())):{val:o,err:null}},e.prototype.tryParseDecimalInteger=function(n,r){var t=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(t=-1);for(var s=!1,i=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)s=!0,i=i*10+(o-48),this.bump();else break}var l=E(a,this.clonePosition());return s?(i*=t,ci(i)?{val:i,err:null}:this.error(r,l)):this.error(n,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var n=this.position.offset;if(n>=this.message.length)throw Error("out of bound");var r=Fa(this.message,n);if(r===void 0)throw Error("Offset ".concat(n," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(n,r){return{val:null,err:{kind:n,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var n=this.char();n===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=n<65536?1:2)}},e.prototype.bumpIf=function(n){if(_t(this.message,n,this.offset())){for(var r=0;r<n.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(n){var r=this.offset(),t=this.message.indexOf(n,r);return t>=0?(this.bumpTo(t),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(n){if(this.offset()>n)throw Error("targetOffset ".concat(n," must be greater than or equal to the current offset ").concat(this.offset()));for(n=Math.min(n,this.message.length);;){var r=this.offset();if(r===n)break;if(r>n)throw Error("targetOffset ".concat(n," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Ea(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var n=this.char(),r=this.offset(),t=this.message.charCodeAt(r+(n>=65536?2:1));return t??null},e}();function Tr(e){return e>=97&&e<=122||e>=65&&e<=90}function _i(e){return Tr(e)||e===47}function Ti(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Ea(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function wi(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function wr(e){e.forEach(function(n){if(delete n.location,_a(n)||Ta(n))for(var r in n.options)delete n.options[r].location,wr(n.options[r].value);else va(n)&&Da(n.style)||(ba(n)||Sa(n))&&vr(n.style)?delete n.style.location:wa(n)&&wr(n.children)})}function Di(e,n){n===void 0&&(n={}),n=b({shouldParseSkeletons:!0,requiresOtherClause:!0},n);var r=new Si(e,n).parse();if(r.err){var t=SyntaxError(q[r.err.kind]);throw t.location=r.err.location,t.originalMessage=r.err.message,t}return n!=null&&n.captureLocation||wr(r.val),r.val}var _e;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(_e||(_e={}));var Ye=function(e){fe(n,e);function n(r,t,a){var s=e.call(this,r)||this;return s.code=t,s.originalMessage=a,s}return n.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},n}(Error),Dt=function(e){fe(n,e);function n(r,t,a,s){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(t,'". Options are "').concat(Object.keys(a).join('", "'),'"'),_e.INVALID_VALUE,s)||this}return n}(Ye),Pi=function(e){fe(n,e);function n(r,t,a){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(t),_e.INVALID_VALUE,a)||this}return n}(Ye),Ni=function(e){fe(n,e);function n(r,t){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(t,'"'),_e.MISSING_VALUE,t)||this}return n}(Ye),X;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(X||(X={}));function xi(e){return e.length<2?e:e.reduce(function(n,r){var t=n[n.length-1];return!t||t.type!==X.literal||r.type!==X.literal?n.push(r):t.value+=r.value,n},[])}function Oa(e){return typeof e=="function"}function On(e,n,r,t,a,s,i){if(e.length===1&&yt(e[0]))return[{type:X.literal,value:e[0].value}];for(var o=[],l=0,d=e;l<d.length;l++){var u=d[l];if(yt(u)){o.push({type:X.literal,value:u.value});continue}if(Xs(u)){typeof s=="number"&&o.push({type:X.literal,value:r.getNumberFormat(n).format(s)});continue}var g=u.value;if(!(a&&g in a))throw new Ni(g,i);var f=a[g];if(Ks(u)){(!f||typeof f=="string"||typeof f=="number")&&(f=typeof f=="string"||typeof f=="number"?String(f):""),o.push({type:typeof f=="string"?X.literal:X.object,value:f});continue}if(ba(u)){var D=typeof u.style=="string"?t.date[u.style]:vr(u.style)?u.style.parsedOptions:void 0;o.push({type:X.literal,value:r.getDateTimeFormat(n,D).format(f)});continue}if(Sa(u)){var D=typeof u.style=="string"?t.time[u.style]:vr(u.style)?u.style.parsedOptions:t.time.medium;o.push({type:X.literal,value:r.getDateTimeFormat(n,D).format(f)});continue}if(va(u)){var D=typeof u.style=="string"?t.number[u.style]:Da(u.style)?u.style.parsedOptions:void 0;D&&D.scale&&(f=f*(D.scale||1)),o.push({type:X.literal,value:r.getNumberFormat(n,D).format(f)});continue}if(wa(u)){var w=u.children,h=u.value,R=a[h];if(!Oa(R))throw new Pi(h,"function",i);var x=On(w,n,r,t,a,s),H=R(x.map(function(p){return p.value}));Array.isArray(H)||(H=[H]),o.push.apply(o,H.map(function(p){return{type:typeof p=="string"?X.literal:X.object,value:p}}))}if(_a(u)){var T=u.options[f]||u.options.other;if(!T)throw new Dt(u.value,f,Object.keys(u.options),i);o.push.apply(o,On(T.value,n,r,t,a));continue}if(Ta(u)){var T=u.options["=".concat(f)];if(!T){if(!Intl.PluralRules)throw new Ye(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,_e.MISSING_INTL_API,i);var Z=r.getPluralRules(n,{type:u.pluralType}).select(f-(u.offset||0));T=u.options[Z]||u.options.other}if(!T)throw new Dt(u.value,f,Object.keys(u.options),i);o.push.apply(o,On(T.value,n,r,t,a,f-(u.offset||0)));continue}}return xi(o)}function Ri(e,n){return n?b(b(b({},e||{}),n||{}),Object.keys(e).reduce(function(r,t){return r[t]=b(b({},e[t]),n[t]||{}),r},{})):e}function Fi(e,n){return n?Object.keys(e).reduce(function(r,t){return r[t]=Ri(e[t],n[t]),r},b({},e)):e}function lr(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,r){e[n]=r}}}}}function qi(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:ke(function(){for(var n,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((n=Intl.NumberFormat).bind.apply(n,ye([void 0],r,!1)))},{cache:lr(e.number),strategy:ce.variadic}),getDateTimeFormat:ke(function(){for(var n,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((n=Intl.DateTimeFormat).bind.apply(n,ye([void 0],r,!1)))},{cache:lr(e.dateTime),strategy:ce.variadic}),getPluralRules:ke(function(){for(var n,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((n=Intl.PluralRules).bind.apply(n,ye([void 0],r,!1)))},{cache:lr(e.pluralRules),strategy:ce.variadic})}}var Ma=function(){function e(n,r,t,a){r===void 0&&(r=e.defaultLocale);var s=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var d=s.formatToParts(l);if(d.length===1)return d[0].value;var u=d.reduce(function(g,f){return!g.length||f.type!==X.literal||typeof g[g.length-1]!="string"?g.push(f.value):g[g.length-1]+=f.value,g},[]);return u.length<=1?u[0]||"":u},this.formatToParts=function(l){return On(s.ast,s.locales,s.formatters,s.formats,l,void 0,s.message)},this.resolvedOptions=function(){var l;return{locale:((l=s.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof n=="string"){if(this.message=n,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var i=a||{};i.formatters;var o=sn(i,["formatters"]);this.ast=e.__parse(n,b(b({},o),{locale:this.resolvedLocale}))}else this.ast=n;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Fi(e.formats,t),this.formatters=a&&a.formatters||qi(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(n){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(n);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof n=="string"?n:n[0])}},e.__parse=Di,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),ze;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(ze||(ze={}));var _n=function(e){fe(n,e);function n(r,t,a){var s=this,i=a?a instanceof Error?a:new Error(String(a)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(t,`
`).concat(i?`
`.concat(i.message,`
`).concat(i.stack):""))||this,s.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,n),s}return n}(Error),Ei=function(e){fe(n,e);function n(r,t){return e.call(this,ze.UNSUPPORTED_FORMATTER,r,t)||this}return n}(_n),Oi=function(e){fe(n,e);function n(r,t){return e.call(this,ze.INVALID_CONFIG,r,t)||this}return n}(_n),Pt=function(e){fe(n,e);function n(r,t){return e.call(this,ze.MISSING_DATA,r,t)||this}return n}(_n),ie=function(e){fe(n,e);function n(r,t,a){var s=e.call(this,ze.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(t,`
`),a)||this;return s.locale=t,s}return n}(_n),dr=function(e){fe(n,e);function n(r,t,a,s){var i=e.call(this,"".concat(r,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),t,s)||this;return i.descriptor=a,i.locale=t,i}return n}(ie),Mi=function(e){fe(n,e);function n(r,t){var a=e.call(this,ze.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(t,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(s){var i;return(i=s.value)!==null&&i!==void 0?i:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=r,a}return n}(_n);function Ai(e,n,r){if(r===void 0&&(r=Error),!e)throw new r(n)}function ln(e,n,r){return r===void 0&&(r={}),n.reduce(function(t,a){return a in e?t[a]=e[a]:a in r&&(t[a]=r[a]),t},{})}var Bi=function(e){},Ii=function(e){},Aa={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Bi,onWarn:Ii};function Ba(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Ge(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,r){e[n]=r}}}}}function ji(e){e===void 0&&(e=Ba());var n=Intl.RelativeTimeFormat,r=Intl.ListFormat,t=Intl.DisplayNames,a=ke(function(){for(var o,l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return new((o=Intl.DateTimeFormat).bind.apply(o,ye([void 0],l,!1)))},{cache:Ge(e.dateTime),strategy:ce.variadic}),s=ke(function(){for(var o,l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return new((o=Intl.NumberFormat).bind.apply(o,ye([void 0],l,!1)))},{cache:Ge(e.number),strategy:ce.variadic}),i=ke(function(){for(var o,l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return new((o=Intl.PluralRules).bind.apply(o,ye([void 0],l,!1)))},{cache:Ge(e.pluralRules),strategy:ce.variadic});return{getDateTimeFormat:a,getNumberFormat:s,getMessageFormat:ke(function(o,l,d,u){return new Ma(o,l,d,b({formatters:{getNumberFormat:s,getDateTimeFormat:a,getPluralRules:i}},u||{}))},{cache:Ge(e.message),strategy:ce.variadic}),getRelativeTimeFormat:ke(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(n.bind.apply(n,ye([void 0],o,!1)))},{cache:Ge(e.relativeTime),strategy:ce.variadic}),getPluralRules:i,getListFormat:ke(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(r.bind.apply(r,ye([void 0],o,!1)))},{cache:Ge(e.list),strategy:ce.variadic}),getDisplayNames:ke(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(t.bind.apply(t,ye([void 0],o,!1)))},{cache:Ge(e.displayNames),strategy:ce.variadic})}}function Hr(e,n,r,t){var a=e&&e[n],s;if(a&&(s=a[r]),s)return s;t(new Ei("No ".concat(n," format named: ").concat(r)))}function Fn(e,n){return Object.keys(e).reduce(function(r,t){return r[t]=b({timeZone:n},e[t]),r},{})}function Nt(e,n){var r=Object.keys(b(b({},e),n));return r.reduce(function(t,a){return t[a]=b(b({},e[a]||{}),n[a]||{}),t},{})}function xt(e,n){if(!n)return e;var r=Ma.formats;return b(b(b({},r),e),{date:Nt(Fn(r.date,n),Fn(e.date||{},n)),time:Nt(Fn(r.time,n),Fn(e.time||{},n))})}var Dr=function(e,n,r,t,a){var s=e.locale,i=e.formats,o=e.messages,l=e.defaultLocale,d=e.defaultFormats,u=e.fallbackOnEmptyString,g=e.onError,f=e.timeZone,D=e.defaultRichTextElements;r===void 0&&(r={id:""});var w=r.id,h=r.defaultMessage;Ai(!!w,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var R=String(w),x=o&&Object.prototype.hasOwnProperty.call(o,R)&&o[R];if(Array.isArray(x)&&x.length===1&&x[0].type===C.literal)return x[0].value;if(!t&&x&&typeof x=="string"&&!D)return x.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=b(b({},D),t||{}),i=xt(i,f),d=xt(d,f),!x){if(u===!1&&x==="")return x;if((!h||s&&s.toLowerCase()!==l.toLowerCase())&&g(new Mi(r,s)),h)try{var H=n.getMessageFormat(h,l,d,a);return H.format(t)}catch(T){return g(new dr('Error formatting default message for: "'.concat(R,'", rendering default message verbatim'),s,r,T)),typeof h=="string"?h:R}return R}try{var H=n.getMessageFormat(x,s,i,b({formatters:n},a||{}));return H.format(t)}catch(T){g(new dr('Error formatting message: "'.concat(R,'", using ').concat(h?"default message":"id"," as fallback."),s,r,T))}if(h)try{var H=n.getMessageFormat(h,l,d,a);return H.format(t)}catch(T){g(new dr('Error formatting the default message for: "'.concat(R,'", rendering message verbatim'),s,r,T))}return typeof x=="string"?x:typeof h=="string"?h:R},Hi=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Tn(e,n,r,t){var a=e.locale,s=e.formats,i=e.onError,o=e.timeZone;t===void 0&&(t={});var l=t.format,d=b(b({},o&&{timeZone:o}),l&&Hr(s,n,l,i)),u=ln(t,Hi,d);return n==="time"&&!u.hour&&!u.minute&&!u.second&&!u.timeStyle&&!u.dateStyle&&(u=b(b({},u),{hour:"numeric",minute:"numeric"})),r(a,u)}function Ci(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Tn(e,"date",n,i).format(o)}catch(l){e.onError(new ie("Error formatting date.",e.locale,l))}return String(o)}function Li(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Tn(e,"time",n,i).format(o)}catch(l){e.onError(new ie("Error formatting time.",e.locale,l))}return String(o)}function Ui(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],i=r[2],o=i===void 0?{}:i,l=typeof a=="string"?new Date(a||0):a,d=typeof s=="string"?new Date(s||0):s;try{return Tn(e,"dateTimeRange",n,o).formatRange(l,d)}catch(u){e.onError(new ie("Error formatting date time range.",e.locale,u))}return String(l)}function Yi(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Tn(e,"date",n,i).formatToParts(o)}catch(l){e.onError(new ie("Error formatting date.",e.locale,l))}return[]}function Gi(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Tn(e,"time",n,i).formatToParts(o)}catch(l){e.onError(new ie("Error formatting time.",e.locale,l))}return[]}var Vi=["style","type","fallback","languageDisplay"];function Wi(e,n,r,t){var a=e.locale,s=e.onError,i=Intl.DisplayNames;i||s(new Ye(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,_e.MISSING_INTL_API));var o=ln(t,Vi);try{return n(a,o).of(r)}catch(l){s(new ie("Error formatting display name.",a,l))}}var $i=["type","style"],Rt=Date.now();function zi(e){return"".concat(Rt,"_").concat(e,"_").concat(Rt)}function Zi(e,n,r,t){t===void 0&&(t={});var a=Ia(e,n,r,t).reduce(function(s,i){var o=i.value;return typeof o!="string"?s.push(o):typeof s[s.length-1]=="string"?s[s.length-1]+=o:s.push(o),s},[]);return a.length===1?a[0]:a.length===0?"":a}function Ia(e,n,r,t){var a=e.locale,s=e.onError;t===void 0&&(t={});var i=Intl.ListFormat;i||s(new Ye(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,_e.MISSING_INTL_API));var o=ln(t,$i);try{var l={},d=r.map(function(u,g){if(typeof u=="object"){var f=zi(g);return l[f]=u,f}return String(u)});return n(a,o).formatToParts(d).map(function(u){return u.type==="literal"?u:b(b({},u),{value:l[u.value]||u.value})})}catch(u){s(new ie("Error formatting list.",a,u))}return r}var Ki=["type"];function Xi(e,n,r,t){var a=e.locale,s=e.onError;t===void 0&&(t={}),Intl.PluralRules||s(new Ye(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,_e.MISSING_INTL_API));var i=ln(t,Ki);try{return n(a,i).select(r)}catch(o){s(new ie("Error formatting plural.",a,o))}return"other"}var Ji=["numeric","style"];function Qi(e,n,r){var t=e.locale,a=e.formats,s=e.onError;r===void 0&&(r={});var i=r.format,o=!!i&&Hr(a,"relative",i,s)||{},l=ln(r,Ji,o);return n(t,l)}function eo(e,n,r,t,a){a===void 0&&(a={}),t||(t="second");var s=Intl.RelativeTimeFormat;s||e.onError(new Ye(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,_e.MISSING_INTL_API));try{return Qi(e,n,a).format(r,t)}catch(i){e.onError(new ie("Error formatting relative time.",e.locale,i))}return String(r)}var no=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function ja(e,n,r){var t=e.locale,a=e.formats,s=e.onError;r===void 0&&(r={});var i=r.format,o=i&&Hr(a,"number",i,s)||{},l=ln(r,no,o);return n(t,l)}function ro(e,n,r,t){t===void 0&&(t={});try{return ja(e,n,t).format(r)}catch(a){e.onError(new ie("Error formatting number.",e.locale,a))}return String(r)}function to(e,n,r,t){t===void 0&&(t={});try{return ja(e,n,t).formatToParts(r)}catch(a){e.onError(new ie("Error formatting number.",e.locale,a))}return[]}function ao(e){var n=e?e[Object.keys(e)[0]]:void 0;return typeof n=="string"}function so(e){e.onWarn&&e.defaultRichTextElements&&ao(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function io(e,n){var r=ji(n),t=b(b({},Aa),e),a=t.locale,s=t.defaultLocale,i=t.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&i?i(new Pt('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&i&&i(new Pt('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(i&&i(new Oi('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),so(t),b(b({},t),{formatters:r,formatNumber:ro.bind(null,t,r.getNumberFormat),formatNumberToParts:to.bind(null,t,r.getNumberFormat),formatRelativeTime:eo.bind(null,t,r.getRelativeTimeFormat),formatDate:Ci.bind(null,t,r.getDateTimeFormat),formatDateToParts:Yi.bind(null,t,r.getDateTimeFormat),formatTime:Li.bind(null,t,r.getDateTimeFormat),formatDateTimeRange:Ui.bind(null,t,r.getDateTimeFormat),formatTimeToParts:Gi.bind(null,t,r.getDateTimeFormat),formatPlural:Xi.bind(null,t,r.getPluralRules),formatMessage:Dr.bind(null,t,r),$t:Dr.bind(null,t,r),formatList:Zi.bind(null,t,r.getListFormat),formatListToParts:Ia.bind(null,t,r.getListFormat),formatDisplayName:Wi.bind(null,t,r.getDisplayNames)})}function oo(e,n,r){if(r===void 0&&(r=Error),!e)throw new r(n)}function lo(e){oo(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var uo=b(b({},Aa),{textComponent:G.Fragment});function mo(e){return function(n){return e(G.Children.toArray(n))}}function Ft(e,n){if(e===n)return!0;if(!e||!n)return!1;var r=Object.keys(e),t=Object.keys(n),a=r.length;if(t.length!==a)return!1;for(var s=0;s<a;s++){var i=r[s];if(e[i]!==n[i]||!Object.prototype.hasOwnProperty.call(n,i))return!1}return!0}var ur={exports:{}},B={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qt;function go(){if(qt)return B;qt=1;var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,t=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,o=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,g=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,D=e?Symbol.for("react.memo"):60115,w=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,R=e?Symbol.for("react.fundamental"):60117,x=e?Symbol.for("react.responder"):60118,H=e?Symbol.for("react.scope"):60119;function T(p){if(typeof p=="object"&&p!==null){var P=p.$$typeof;switch(P){case n:switch(p=p.type,p){case l:case d:case t:case s:case a:case g:return p;default:switch(p=p&&p.$$typeof,p){case o:case u:case w:case D:case i:return p;default:return P}}case r:return P}}}function Z(p){return T(p)===d}return B.AsyncMode=l,B.ConcurrentMode=d,B.ContextConsumer=o,B.ContextProvider=i,B.Element=n,B.ForwardRef=u,B.Fragment=t,B.Lazy=w,B.Memo=D,B.Portal=r,B.Profiler=s,B.StrictMode=a,B.Suspense=g,B.isAsyncMode=function(p){return Z(p)||T(p)===l},B.isConcurrentMode=Z,B.isContextConsumer=function(p){return T(p)===o},B.isContextProvider=function(p){return T(p)===i},B.isElement=function(p){return typeof p=="object"&&p!==null&&p.$$typeof===n},B.isForwardRef=function(p){return T(p)===u},B.isFragment=function(p){return T(p)===t},B.isLazy=function(p){return T(p)===w},B.isMemo=function(p){return T(p)===D},B.isPortal=function(p){return T(p)===r},B.isProfiler=function(p){return T(p)===s},B.isStrictMode=function(p){return T(p)===a},B.isSuspense=function(p){return T(p)===g},B.isValidElementType=function(p){return typeof p=="string"||typeof p=="function"||p===t||p===d||p===s||p===a||p===g||p===f||typeof p=="object"&&p!==null&&(p.$$typeof===w||p.$$typeof===D||p.$$typeof===i||p.$$typeof===o||p.$$typeof===u||p.$$typeof===R||p.$$typeof===x||p.$$typeof===H||p.$$typeof===h)},B.typeOf=T,B}var Et;function fo(){return Et||(Et=1,ur.exports=go()),ur.exports}var mr,Ot;function ho(){if(Ot)return mr;Ot=1;var e=fo(),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[e.ForwardRef]=t,s[e.Memo]=a;function i(w){return e.isMemo(w)?a:s[w.$$typeof]||n}var o=Object.defineProperty,l=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,f=Object.prototype;function D(w,h,R){if(typeof h!="string"){if(f){var x=g(h);x&&x!==f&&D(w,x,R)}var H=l(h);d&&(H=H.concat(d(h)));for(var T=i(w),Z=i(h),p=0;p<H.length;++p){var P=H[p];if(!r[P]&&!(R&&R[P])&&!(Z&&Z[P])&&!(T&&T[P])){var S=u(h,P);try{o(w,P,S)}catch{}}}}return w}return mr=D,mr}ho();var Cr=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=G.createContext(null)):G.createContext(null);Cr.Consumer;var po=Cr.Provider,ko=po,co=Cr;function Lr(){var e=G.useContext(co);return lo(e),e}var Pr;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Pr||(Pr={}));var Nr;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Nr||(Nr={}));function Ha(e){var n=function(r){var t=Lr(),a=r.value,s=r.children,i=sn(r,["value","children"]),o=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?t.formatDateToParts(o,i):t.formatTimeToParts(o,i);return s(l)};return n.displayName=Nr[e],n}function wn(e){var n=function(r){var t=Lr(),a=r.value,s=r.children,i=sn(r,["value","children"]),o=t[e](a,i);if(typeof s=="function")return s(o);var l=t.textComponent||G.Fragment;return G.createElement(l,null,o)};return n.displayName=Pr[e],n}function Ca(e){return e&&Object.keys(e).reduce(function(n,r){var t=e[r];return n[r]=Oa(t)?mo(t):t,n},{})}var Mt=function(e,n,r,t){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];var i=Ca(t),o=Dr.apply(void 0,ye([e,n,r,i],a,!1));return Array.isArray(o)?G.Children.toArray(o):o},yo=function(e,n){var r=e.defaultRichTextElements,t=sn(e,["defaultRichTextElements"]),a=Ca(r),s=io(b(b(b({},uo),t),{defaultRichTextElements:a}),n),i={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:a};return b(b({},s),{formatMessage:Mt.bind(null,i,s.formatters),$t:Mt.bind(null,i,s.formatters)})};function vo(e,n){var r=e.values,t=sn(e,["values"]),a=n.values,s=sn(n,["values"]);return Ft(a,r)&&Ft(t,s)}function La(e){var n=Lr(),r=n.formatMessage,t=n.textComponent,a=t===void 0?G.Fragment:t,s=e.id,i=e.description,o=e.defaultMessage,l=e.values,d=e.children,u=e.tagName,g=u===void 0?a:u,f=e.ignoreTag,D={id:s,description:i,defaultMessage:o},w=r(D,l,{ignoreTag:f});return typeof d=="function"?d(Array.isArray(w)?w:[w]):g?G.createElement(g,null,G.Children.toArray(w)):G.createElement(G.Fragment,null,w)}La.displayName="FormattedMessage";var te=G.memo(La,vo);te.displayName="MemoizedFormattedMessage";wn("formatDate");wn("formatTime");wn("formatNumber");wn("formatList");wn("formatDisplayName");Ha("formatDate");Ha("formatTime");function Ur(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xr={exports:{}},bo=xr.exports,At;function So(){return At||(At=1,function(e,n){(function(r,t){e.exports=t()})(bo,function(){var r,t,a=1e3,s=6e4,i=36e5,o=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=31536e6,u=2628e6,g=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,f={years:d,months:u,days:o,hours:i,minutes:s,seconds:a,milliseconds:1,weeks:6048e5},D=function(P){return P instanceof Z},w=function(P,S,v){return new Z(P,v,S.$l)},h=function(P){return t.p(P)+"s"},R=function(P){return P<0},x=function(P){return R(P)?Math.ceil(P):Math.floor(P)},H=function(P){return Math.abs(P)},T=function(P,S){return P?R(P)?{negative:!0,format:""+H(P)+S}:{negative:!1,format:""+P+S}:{negative:!1,format:""}},Z=function(){function P(v,I,z){var W=this;if(this.$d={},this.$l=z,v===void 0&&(this.$ms=0,this.parseFromMilliseconds()),I)return w(v*f[h(I)],this);if(typeof v=="number")return this.$ms=v,this.parseFromMilliseconds(),this;if(typeof v=="object")return Object.keys(v).forEach(function(pe){W.$d[h(pe)]=v[pe]}),this.calMilliseconds(),this;if(typeof v=="string"){var Q=v.match(g);if(Q){var re=Q.slice(2).map(function(pe){return pe!=null?Number(pe):0});return this.$d.years=re[0],this.$d.months=re[1],this.$d.weeks=re[2],this.$d.days=re[3],this.$d.hours=re[4],this.$d.minutes=re[5],this.$d.seconds=re[6],this.calMilliseconds(),this}}return this}var S=P.prototype;return S.calMilliseconds=function(){var v=this;this.$ms=Object.keys(this.$d).reduce(function(I,z){return I+(v.$d[z]||0)*f[z]},0)},S.parseFromMilliseconds=function(){var v=this.$ms;this.$d.years=x(v/d),v%=d,this.$d.months=x(v/u),v%=u,this.$d.days=x(v/o),v%=o,this.$d.hours=x(v/i),v%=i,this.$d.minutes=x(v/s),v%=s,this.$d.seconds=x(v/a),v%=a,this.$d.milliseconds=v},S.toISOString=function(){var v=T(this.$d.years,"Y"),I=T(this.$d.months,"M"),z=+this.$d.days||0;this.$d.weeks&&(z+=7*this.$d.weeks);var W=T(z,"D"),Q=T(this.$d.hours,"H"),re=T(this.$d.minutes,"M"),pe=this.$d.seconds||0;this.$d.milliseconds&&(pe+=this.$d.milliseconds/1e3,pe=Math.round(1e3*pe)/1e3);var sr=T(pe,"S"),Ls=v.negative||I.negative||W.negative||Q.negative||re.negative||sr.negative,Us=Q.format||re.format||sr.format?"T":"",ir=(Ls?"-":"")+"P"+v.format+I.format+W.format+Us+Q.format+re.format+sr.format;return ir==="P"||ir==="-P"?"P0D":ir},S.toJSON=function(){return this.toISOString()},S.format=function(v){var I=v||"YYYY-MM-DDTHH:mm:ss",z={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return I.replace(l,function(W,Q){return Q||String(z[W])})},S.as=function(v){return this.$ms/f[h(v)]},S.get=function(v){var I=this.$ms,z=h(v);return z==="milliseconds"?I%=1e3:I=z==="weeks"?x(I/f[z]):this.$d[z],I||0},S.add=function(v,I,z){var W;return W=I?v*f[h(I)]:D(v)?v.$ms:w(v,this).$ms,w(this.$ms+W*(z?-1:1),this)},S.subtract=function(v,I){return this.add(v,I,!0)},S.locale=function(v){var I=this.clone();return I.$l=v,I},S.clone=function(){return w(this.$ms,this)},S.humanize=function(v){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!v)},S.valueOf=function(){return this.asMilliseconds()},S.milliseconds=function(){return this.get("milliseconds")},S.asMilliseconds=function(){return this.as("milliseconds")},S.seconds=function(){return this.get("seconds")},S.asSeconds=function(){return this.as("seconds")},S.minutes=function(){return this.get("minutes")},S.asMinutes=function(){return this.as("minutes")},S.hours=function(){return this.get("hours")},S.asHours=function(){return this.as("hours")},S.days=function(){return this.get("days")},S.asDays=function(){return this.as("days")},S.weeks=function(){return this.get("weeks")},S.asWeeks=function(){return this.as("weeks")},S.months=function(){return this.get("months")},S.asMonths=function(){return this.as("months")},S.years=function(){return this.get("years")},S.asYears=function(){return this.as("years")},P}(),p=function(P,S,v){return P.add(S.years()*v,"y").add(S.months()*v,"M").add(S.days()*v,"d").add(S.hours()*v,"h").add(S.minutes()*v,"m").add(S.seconds()*v,"s").add(S.milliseconds()*v,"ms")};return function(P,S,v){r=v,t=v().$utils(),v.duration=function(W,Q){var re=v.locale();return w(W,{$l:re},Q)},v.isDuration=D;var I=S.prototype.add,z=S.prototype.subtract;S.prototype.add=function(W,Q){return D(W)?p(this,W,1):I.bind(this)(W,Q)},S.prototype.subtract=function(W,Q){return D(W)?p(this,W,-1):z.bind(this)(W,Q)}}})}(xr)),xr.exports}var _o=So();const To=Ur(_o);var Rr={exports:{}},wo=Rr.exports,Bt;function Do(){return Bt||(Bt=1,function(e,n){(function(r,t){e.exports=t()})(wo,function(){var r="day";return function(t,a,s){var i=function(d){return d.add(4-d.isoWeekday(),r)},o=a.prototype;o.isoWeekYear=function(){return i(this).year()},o.isoWeek=function(d){if(!this.$utils().u(d))return this.add(7*(d-this.isoWeek()),r);var u,g,f,D,w=i(this),h=(u=this.isoWeekYear(),g=this.$u,f=(g?s.utc:s)().year(u).startOf("year"),D=4-f.isoWeekday(),f.isoWeekday()>4&&(D+=7),f.add(D,r));return w.diff(h,"week")+1},o.isoWeekday=function(d){return this.$utils().u(d)?this.day()||7:this.day(this.day()%7?d:d-7)};var l=o.startOf;o.startOf=function(d,u){var g=this.$utils(),f=!!g.u(u)||u;return g.p(d)==="isoweek"?f?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(d,u)}}})}(Rr)),Rr.exports}var Po=Do();const No=Ur(Po);var Fr={exports:{}},xo=Fr.exports,It;function Ro(){return It||(It=1,function(e,n){(function(r,t){e.exports=t()})(xo,function(){var r="minute",t=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(s,i,o){var l=i.prototype;o.utc=function(h){var R={date:h,utc:!0,args:arguments};return new i(R)},l.utc=function(h){var R=o(this.toDate(),{locale:this.$L,utc:!0});return h?R.add(this.utcOffset(),r):R},l.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var d=l.parse;l.parse=function(h){h.utc&&(this.$u=!0),this.$utils().u(h.$offset)||(this.$offset=h.$offset),d.call(this,h)};var u=l.init;l.init=function(){if(this.$u){var h=this.$d;this.$y=h.getUTCFullYear(),this.$M=h.getUTCMonth(),this.$D=h.getUTCDate(),this.$W=h.getUTCDay(),this.$H=h.getUTCHours(),this.$m=h.getUTCMinutes(),this.$s=h.getUTCSeconds(),this.$ms=h.getUTCMilliseconds()}else u.call(this)};var g=l.utcOffset;l.utcOffset=function(h,R){var x=this.$utils().u;if(x(h))return this.$u?0:x(this.$offset)?g.call(this):this.$offset;if(typeof h=="string"&&(h=function(p){p===void 0&&(p="");var P=p.match(t);if(!P)return null;var S=(""+P[0]).match(a)||["-",0,0],v=S[0],I=60*+S[1]+ +S[2];return I===0?0:v==="+"?I:-I}(h),h===null))return this;var H=Math.abs(h)<=16?60*h:h,T=this;if(R)return T.$offset=H,T.$u=h===0,T;if(h!==0){var Z=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(T=this.local().add(H+Z,r)).$offset=H,T.$x.$localOffset=Z}else T=this.utc();return T};var f=l.format;l.format=function(h){var R=h||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return f.call(this,R)},l.valueOf=function(){var h=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*h},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var D=l.toDate;l.toDate=function(h){return h==="s"&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():D.call(this)};var w=l.diff;l.diff=function(h,R,x){if(h&&this.$u===h.$u)return w.call(this,h,R,x);var H=this.local(),T=o(h).local();return w.call(H,T,R,x)}}})}(Fr)),Fr.exports}var Fo=Ro();const qo=Ur(Fo),Eo=Ba(),Oe=e=>yo({locale:"nb-NO",messages:e},Eo),Yr="YYYY-MM-DD",Gr="DD.MM.YYYY",Ua={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};var qr={exports:{}},Oo=qr.exports,jt;function Mo(){return jt||(jt=1,function(e,n){(function(r,t){e.exports=t(Wn)})(Oo,function(r){function t(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var a=t(r),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})}(qr)),qr.exports}Mo();Wn.extend(qo);Wn.extend(No);Wn.extend(To);Oe(Ua);Oe(Ua);function Ya(e){var n,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(r=Ya(e[n]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function Me(){for(var e,n,r=0,t="",a=arguments.length;r<a;r++)(e=arguments[r])&&(n=Ya(e))&&(t&&(t+=" "),t+=n);return t}const dn=e=>Me({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Ao=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};G.forwardRef((e,n)=>{var{className:r,size:t="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:d,textColor:u}=e,g=Ao(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return J.createElement(a,Object.assign({},g,{ref:n,className:Me(r,"navds-body-long",`navds-body-long--${t}`,dn({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:d,textColor:u}))}))});var Bo=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Se=G.forwardRef((e,n)=>{var{className:r,size:t="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:d,textColor:u}=e,g=Bo(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return J.createElement(a,Object.assign({},g,{ref:n,className:Me(r,"navds-body-short",`navds-body-short--${t}`,dn({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:d,textColor:u}))}))});var Io=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};G.forwardRef((e,n)=>{var{className:r,size:t="medium",spacing:a,uppercase:s,as:i="p",truncate:o,weight:l="regular",align:d,visuallyHidden:u,textColor:g}=e,f=Io(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return J.createElement(i,Object.assign({},f,{ref:n,className:Me(r,"navds-detail",dn({spacing:a,truncate:o,weight:l,align:d,visuallyHidden:u,textColor:g,uppercase:s}),{"navds-detail--small":t==="small"})}))});var jo=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};G.forwardRef((e,n)=>{var{children:r,className:t,size:a,spacing:s,as:i="p",showIcon:o=!1}=e,l=jo(e,["children","className","size","spacing","as","showIcon"]);return J.createElement(i,Object.assign({},l,{ref:n,className:Me("navds-error-message","navds-label",t,dn({spacing:s}),{"navds-label--small":a==="small","navds-error-message--show-icon":o})}),o&&J.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},J.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var Ho=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Vr=G.forwardRef((e,n)=>{var{level:r="1",size:t,className:a,as:s,spacing:i,align:o,visuallyHidden:l,textColor:d}=e,u=Ho(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const g=s??`h${r}`;return J.createElement(g,Object.assign({},u,{ref:n,className:Me(a,"navds-heading",`navds-heading--${t}`,dn({spacing:i,align:o,visuallyHidden:l,textColor:d}))}))});var Co=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};G.forwardRef((e,n)=>{var{className:r,spacing:t,as:a="p"}=e,s=Co(e,["className","spacing","as"]);return J.createElement(a,Object.assign({},s,{ref:n,className:Me(r,"navds-ingress",{"navds-typo--spacing":!!t})}))});var Lo=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Qe=G.forwardRef((e,n)=>{var{className:r,size:t="medium",as:a="label",spacing:s,visuallyHidden:i,textColor:o}=e,l=Lo(e,["className","size","as","spacing","visuallyHidden","textColor"]);return J.createElement(a,Object.assign({},l,{ref:n,className:Me(r,"navds-label",dn({spacing:s,visuallyHidden:i,textColor:o}),{"navds-label--small":t==="small"})}))});var Uo=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Ht=G.forwardRef((e,n)=>{var{children:r,className:t,variant:a,size:s="medium",icon:i}=e,o=Uo(e,["children","className","variant","size","icon"]);const l=(a==null?void 0:a.endsWith("-filled"))&&"strong",d=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",u=a==null?void 0:a.replace("-filled","").replace("-moderate","");return J.createElement(Se,Object.assign({},o,{ref:n,as:"span",size:s==="medium"?"medium":"small",className:Me("navds-tag",t,`navds-tag--${a}`,`navds-tag--${s}`,`navds-tag--${l||d||"outline"}`,`navds-tag--${u}`)}),i&&J.createElement("span",{className:"navds-tag__icon--left"},i),r)});function Yo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ct={exports:{}},hn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lt;function Go(){if(Lt)return hn;Lt=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,a,s){var i=null;if(s!==void 0&&(i=""+s),a.key!==void 0&&(i=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:t,key:i,ref:a!==void 0?a:null,props:s}}return hn.Fragment=n,hn.jsx=r,hn.jsxs=r,hn}var Ut;function Vo(){return Ut||(Ut=1,Ct.exports=Go()),Ct.exports}var ne=Vo();const un={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};Oe(un);var Yt={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Gt;function Wo(){return Gt||(Gt=1,function(e){(function(){var n={}.hasOwnProperty;function r(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,t.call(this,o)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)n.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Yt)),Yt.exports}var $o=Wo();const oe=Yo($o),zo="_borderbox_1vkvn_1",Zo="_error_1vkvn_5",Ko="_warning_1vkvn_8",Xo={borderbox:zo,error:Zo,warning:Ko};oe.bind(Xo);const Jo="_aksjonspunkt_kn1hn_1",Qo="_erAksjonspunktApent_kn1hn_4",el="_erIkkeGodkjentAvBeslutter_kn1hn_8",nl={aksjonspunkt:Jo,erAksjonspunktApent:Qo,erIkkeGodkjentAvBeslutter:el};oe.bind(nl);Oe(un);Oe(un);const rl="_flexColumnNew_1vdv1_1",tl={flexColumnNew:rl},al=oe.bind(tl),be=({children:e,className:n})=>ne.jsx("div",{className:al("flexColumnNew",n),children:e}),sl="_flexRow_1yf0y_1",il="_spaceBetween_1yf0y_9",ol="_alignItemsToBaseline_1yf0y_12",ll="_alignItemsToFlexEnd_1yf0y_15",dl="_justifyItemsToFlexEnd_1yf0y_18",ul="_wrap_1yf0y_21",ml={flexRow:sl,spaceBetween:il,alignItemsToBaseline:ol,alignItemsToFlexEnd:ll,justifyItemsToFlexEnd:dl,wrap:ul},gl=oe.bind(ml),jn=({children:e,spaceBetween:n=!1,alignItemsToBaseline:r=!1,alignItemsToFlexEnd:t=!1,wrap:a=!1,className:s})=>ne.jsx("div",{className:gl("flexRow",{spaceBetween:n},{alignItemsToBaseline:r},{alignItemsToFlexEnd:t},{wrap:a},s),children:e}),fl="_flexContainer_1dk1o_1",hl="_fluid_1dk1o_6",pl="_fullHeight_1dk1o_9",kl="_flexWrap_1dk1o_17",cl={flexContainer:fl,fluid:hl,fullHeight:pl,flexWrap:kl},yl=oe.bind(cl),Hn=({children:e,wrap:n=!1,fullHeight:r=!1})=>ne.jsx("div",{className:yl("flexContainer","fluid",{flexWrap:n,fullHeight:r}),children:e});Oe(un);const vl="_columnStyle_1f13u_1",Ga={columnStyle:vl},bl=oe.bind(Ga),en=({children:e="",className:n,hidden:r=!1,colspanAll:t=!1})=>r?null:ne.jsx("td",{className:bl(Ga.columnStyle,n),colSpan:t?100:void 0,children:e}),Sl="_row_1lxv9_1",_l="_harHover_1lxv9_4",Tl="_rowHeader_1lxv9_7",wl="_grayHeader_1lxv9_12",Dl="_rowContent_1lxv9_15",Pl="_selected_1lxv9_18",Nl="_bold_1lxv9_22",xl="_dashedBottomBorder_1lxv9_25",Rl="_solidBottomBorder_1lxv9_28",Fl="_apLeftBorder_1lxv9_31",ql="_noBottomBorder_1lxv9_34",Va={row:Sl,harHover:_l,rowHeader:Tl,grayHeader:wl,rowContent:Dl,selected:Pl,bold:Nl,dashedBottomBorder:xl,solidBottomBorder:Rl,apLeftBorder:Fl,noBottomBorder:ql},El=oe.bind(Va),Ol=(e,n,r)=>t=>{e&&t.button===0&&e(t,n,r)},Wa=e=>e.tagName==="TR"?e:Wa(e.parentElement),Vt=(e,n)=>{const r=Wa(e.target),t=(n?r.nextSibling:r.previousSibling)||r;t&&(t.focus(),e.preventDefault())},Ml=(e,n,r,t)=>a=>{a.key==="ArrowDown"?Vt(a,!0):a.key==="ArrowUp"?Vt(a,!1):n&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(n(a,r,t),a.preventDefault()):e&&n&&a.target.tagName!=="TD"&&a.key==="Shift"&&(n(a),a.preventDefault())},Al=e=>n=>{e&&n.target.tagName!=="TD"&&n.key==="Shift"&&(e(n),n.preventDefault())},$a=({id:e,model:n,isHeader:r=!1,hasGrayHeader:t=!1,onMouseDown:a,onKeyDown:s,children:i,noHover:o=!1,isSelected:l=!1,isBold:d=!1,isDashedBottomBorder:u=!1,isSolidBottomBorder:g=!1,isApLeftBorder:f=!1,className:D,useMultiselect:w=!1,hasNoBottomBorder:h=!1})=>ne.jsx("tr",{className:El(D,Va.row,{rowHeader:r,grayHeader:t,rowContent:!r&&!o,selected:l,harHover:!o,bold:d,dashedBottomBorder:u,solidBottomBorder:g,noBottomBorder:h,apLeftBorder:f}),onMouseDown:Ol(a,e,n),onKeyDown:Ml(w,s,e,n),onKeyUp:w?Al(s):void 0,tabIndex:0,children:i}),Bl="_table_2cnpl_1",Il="_rowHover_2cnpl_25",jl={table:Bl,rowHover:Il},Hl=oe.bind(jl),Cl="EMPTY",za=J.forwardRef(({headerTextCodes:e=[],headerColumnContent:n=[],classNameTable:r="",noHover:t=!1,hasGrayHeader:a=!1,children:s},i)=>ne.jsxs("table",{ref:i,className:Hl("table",{[r]:r,rowHover:!t}),children:[ne.jsx("thead",{children:ne.jsxs($a,{isHeader:!0,noHover:t,hasGrayHeader:a,children:[e.map(o=>typeof o=="string"&&o.startsWith(Cl)?ne.jsx(en,{children:" "},o):ne.jsx(en,{children:ne.jsx(te,{id:o})},o)),n.map(o=>ne.jsx(en,{children:o},o.key))]})}),ne.jsx("tbody",{children:Array.isArray(s)?J.Children.map(s,o=>J.cloneElement(o,{noHover:t})):J.cloneElement(s,{noHover:t})})]}));za.displayName="Table";const Ll="_hidden_1pb4f_1",Ul="_active_1pb4f_8",Yl="_activeRow_1pb4f_15 _active_1pb4f_8",Gl="_toggleIcon_1pb4f_19",Vl="_colTopPadding_1pb4f_22",Wl={hidden:Ll,active:Ul,activeRow:Yl,toggleIcon:Gl,colTopPadding:Vl};oe.bind(Wl);Oe(un);const $l="_fourPx_qda5k_1",zl="_eightPx_qda5k_4",Zl="_sixteenPx_qda5k_7",Kl="_twentyPx_qda5k_10",Xl="_thirtyTwoPx_qda5k_13",Jl="_fourtyPx_qda5k_16",Ql={fourPx:$l,eightPx:zl,sixteenPx:Zl,twentyPx:Kl,thirtyTwoPx:Xl,fourtyPx:Jl},ed=oe.bind(Ql),Za=({fourPx:e=!1,eightPx:n=!1,sixteenPx:r=!1,twentyPx:t=!1,thirtyTwoPx:a=!1,fourtyPx:s=!1})=>ne.jsx("div",{className:ed({fourPx:e,eightPx:n,sixteenPx:r,twentyPx:t,thirtyTwoPx:a,fourtyPx:s})});Oe(un);const nd="_divider_1t980_1",rd="_dividerParagraf_1t980_8",td="_leftPanel_1t980_11",ad="_rightPanel_1t980_14",sd={divider:nd,dividerParagraf:rd,leftPanel:td,rightPanel:ad};oe.bind(sd);const id="_editedIcon_ulrjl_1",od={editedIcon:id};oe.bind(od);//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Ka;function k(){return Ka.apply(null,arguments)}function ld(e){Ka=e}function me(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function $e(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function M(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function Wr(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var n;for(n in e)if(M(e,n))return!1;return!0}function ee(e){return e===void 0}function Ee(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Dn(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Xa(e,n){var r=[],t,a=e.length;for(t=0;t<a;++t)r.push(n(e[t],t));return r}function Ie(e,n){for(var r in n)M(n,r)&&(e[r]=n[r]);return M(n,"toString")&&(e.toString=n.toString),M(n,"valueOf")&&(e.valueOf=n.valueOf),e}function we(e,n,r,t){return bs(e,n,r,t,!0).utc()}function dd(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function N(e){return e._pf==null&&(e._pf=dd()),e._pf}var Er;Array.prototype.some?Er=Array.prototype.some:Er=function(e){var n=Object(this),r=n.length>>>0,t;for(t=0;t<r;t++)if(t in n&&e.call(this,n[t],t,n))return!0;return!1};function $r(e){var n=null,r=!1,t=e._d&&!isNaN(e._d.getTime());if(t&&(n=N(e),r=Er.call(n.parsedDateParts,function(a){return a!=null}),t=n.overflow<0&&!n.empty&&!n.invalidEra&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&r),e._strict&&(t=t&&n.charsLeftOver===0&&n.unusedTokens.length===0&&n.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=t;else return t;return e._isValid}function zn(e){var n=we(NaN);return e!=null?Ie(N(n),e):N(n).userInvalidated=!0,n}var Wt=k.momentProperties=[],gr=!1;function zr(e,n){var r,t,a,s=Wt.length;if(ee(n._isAMomentObject)||(e._isAMomentObject=n._isAMomentObject),ee(n._i)||(e._i=n._i),ee(n._f)||(e._f=n._f),ee(n._l)||(e._l=n._l),ee(n._strict)||(e._strict=n._strict),ee(n._tzm)||(e._tzm=n._tzm),ee(n._isUTC)||(e._isUTC=n._isUTC),ee(n._offset)||(e._offset=n._offset),ee(n._pf)||(e._pf=N(n)),ee(n._locale)||(e._locale=n._locale),s>0)for(r=0;r<s;r++)t=Wt[r],a=n[t],ee(a)||(e[t]=a);return e}function Pn(e){zr(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),gr===!1&&(gr=!0,k.updateOffset(this),gr=!1)}function ge(e){return e instanceof Pn||e!=null&&e._isAMomentObject!=null}function Ja(e){k.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function le(e,n){var r=!0;return Ie(function(){if(k.deprecationHandler!=null&&k.deprecationHandler(null,e),r){var t=[],a,s,i,o=arguments.length;for(s=0;s<o;s++){if(a="",typeof arguments[s]=="object"){a+=`
[`+s+"] ";for(i in arguments[0])M(arguments[0],i)&&(a+=i+": "+arguments[0][i]+", ");a=a.slice(0,-2)}else a=arguments[s];t.push(a)}Ja(e+`
Arguments: `+Array.prototype.slice.call(t).join("")+`
`+new Error().stack),r=!1}return n.apply(this,arguments)},n)}var $t={};function Qa(e,n){k.deprecationHandler!=null&&k.deprecationHandler(e,n),$t[e]||(Ja(n),$t[e]=!0)}k.suppressDeprecationWarnings=!1;k.deprecationHandler=null;function De(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function ud(e){var n,r;for(r in e)M(e,r)&&(n=e[r],De(n)?this[r]=n:this["_"+r]=n);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Or(e,n){var r=Ie({},e),t;for(t in n)M(n,t)&&($e(e[t])&&$e(n[t])?(r[t]={},Ie(r[t],e[t]),Ie(r[t],n[t])):n[t]!=null?r[t]=n[t]:delete r[t]);for(t in e)M(e,t)&&!M(n,t)&&$e(e[t])&&(r[t]=Ie({},r[t]));return r}function Zr(e){e!=null&&this.set(e)}var Mr;Object.keys?Mr=Object.keys:Mr=function(e){var n,r=[];for(n in e)M(e,n)&&r.push(n);return r};var md={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function gd(e,n,r){var t=this._calendar[e]||this._calendar.sameElse;return De(t)?t.call(n,r):t}function Te(e,n,r){var t=""+Math.abs(e),a=n-t.length,s=e>=0;return(s?r?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+t}var Kr=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,qn=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,fr={},nn={};function _(e,n,r,t){var a=t;typeof t=="string"&&(a=function(){return this[t]()}),e&&(nn[e]=a),n&&(nn[n[0]]=function(){return Te(a.apply(this,arguments),n[1],n[2])}),r&&(nn[r]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function fd(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function hd(e){var n=e.match(Kr),r,t;for(r=0,t=n.length;r<t;r++)nn[n[r]]?n[r]=nn[n[r]]:n[r]=fd(n[r]);return function(a){var s="",i;for(i=0;i<t;i++)s+=De(n[i])?n[i].call(a,e):n[i];return s}}function Mn(e,n){return e.isValid()?(n=es(n,e.localeData()),fr[n]=fr[n]||hd(n),fr[n](e)):e.localeData().invalidDate()}function es(e,n){var r=5;function t(a){return n.longDateFormat(a)||a}for(qn.lastIndex=0;r>=0&&qn.test(e);)e=e.replace(qn,t),qn.lastIndex=0,r-=1;return e}var pd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function kd(e){var n=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return n||!r?n:(this._longDateFormat[e]=r.match(Kr).map(function(t){return t==="MMMM"||t==="MM"||t==="DD"||t==="dddd"?t.slice(1):t}).join(""),this._longDateFormat[e])}var cd="Invalid date";function yd(){return this._invalidDate}var vd="%d",bd=/\d{1,2}/;function Sd(e){return this._ordinal.replace("%d",e)}var _d={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Td(e,n,r,t){var a=this._relativeTime[r];return De(a)?a(e,n,r,t):a.replace(/%d/i,e)}function wd(e,n){var r=this._relativeTime[e>0?"future":"past"];return De(r)?r(n):r.replace(/%s/i,n)}var zt={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function de(e){return typeof e=="string"?zt[e]||zt[e.toLowerCase()]:void 0}function Xr(e){var n={},r,t;for(t in e)M(e,t)&&(r=de(t),r&&(n[r]=e[t]));return n}var Dd={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Pd(e){var n=[],r;for(r in e)M(e,r)&&n.push({unit:r,priority:Dd[r]});return n.sort(function(t,a){return t.priority-a.priority}),n}var ns=/\d/,ae=/\d\d/,rs=/\d{3}/,Jr=/\d{4}/,Zn=/[+-]?\d{6}/,U=/\d\d?/,ts=/\d\d\d\d?/,as=/\d\d\d\d\d\d?/,Kn=/\d{1,3}/,Qr=/\d{1,4}/,Xn=/[+-]?\d{1,6}/,mn=/\d+/,Jn=/[+-]?\d+/,Nd=/Z|[+-]\d\d:?\d\d/gi,Qn=/Z|[+-]\d\d(?::?\d\d)?/gi,xd=/[+-]?\d+(\.\d{1,3})?/,Nn=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,gn=/^[1-9]\d?/,et=/^([1-9]\d|\d)/,Cn;Cn={};function c(e,n,r){Cn[e]=De(n)?n:function(t,a){return t&&r?r:n}}function Rd(e,n){return M(Cn,e)?Cn[e](n._strict,n._locale):new RegExp(Fd(e))}function Fd(e){return Fe(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(n,r,t,a,s){return r||t||a||s}))}function Fe(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function se(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function F(e){var n=+e,r=0;return n!==0&&isFinite(n)&&(r=se(n)),r}var Ar={};function j(e,n){var r,t=n,a;for(typeof e=="string"&&(e=[e]),Ee(n)&&(t=function(s,i){i[n]=F(s)}),a=e.length,r=0;r<a;r++)Ar[e[r]]=t}function xn(e,n){j(e,function(r,t,a,s){a._w=a._w||{},n(r,a._w,a,s)})}function qd(e,n,r){n!=null&&M(Ar,e)&&Ar[e](n,r._a,r,e)}function er(e){return e%4===0&&e%100!==0||e%400===0}var K=0,xe=1,ve=2,$=3,ue=4,Re=5,We=6,Ed=7,Od=8;_("Y",0,0,function(){var e=this.year();return e<=9999?Te(e,4):"+"+e});_(0,["YY",2],0,function(){return this.year()%100});_(0,["YYYY",4],0,"year");_(0,["YYYYY",5],0,"year");_(0,["YYYYYY",6,!0],0,"year");c("Y",Jn);c("YY",U,ae);c("YYYY",Qr,Jr);c("YYYYY",Xn,Zn);c("YYYYYY",Xn,Zn);j(["YYYYY","YYYYYY"],K);j("YYYY",function(e,n){n[K]=e.length===2?k.parseTwoDigitYear(e):F(e)});j("YY",function(e,n){n[K]=k.parseTwoDigitYear(e)});j("Y",function(e,n){n[K]=parseInt(e,10)});function cn(e){return er(e)?366:365}k.parseTwoDigitYear=function(e){return F(e)+(F(e)>68?1900:2e3)};var ss=fn("FullYear",!0);function Md(){return er(this.year())}function fn(e,n){return function(r){return r!=null?(is(this,e,r),k.updateOffset(this,n),this):yn(this,e)}}function yn(e,n){if(!e.isValid())return NaN;var r=e._d,t=e._isUTC;switch(n){case"Milliseconds":return t?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return t?r.getUTCSeconds():r.getSeconds();case"Minutes":return t?r.getUTCMinutes():r.getMinutes();case"Hours":return t?r.getUTCHours():r.getHours();case"Date":return t?r.getUTCDate():r.getDate();case"Day":return t?r.getUTCDay():r.getDay();case"Month":return t?r.getUTCMonth():r.getMonth();case"FullYear":return t?r.getUTCFullYear():r.getFullYear();default:return NaN}}function is(e,n,r){var t,a,s,i,o;if(!(!e.isValid()||isNaN(r))){switch(t=e._d,a=e._isUTC,n){case"Milliseconds":return void(a?t.setUTCMilliseconds(r):t.setMilliseconds(r));case"Seconds":return void(a?t.setUTCSeconds(r):t.setSeconds(r));case"Minutes":return void(a?t.setUTCMinutes(r):t.setMinutes(r));case"Hours":return void(a?t.setUTCHours(r):t.setHours(r));case"Date":return void(a?t.setUTCDate(r):t.setDate(r));case"FullYear":break;default:return}s=r,i=e.month(),o=e.date(),o=o===29&&i===1&&!er(s)?28:o,a?t.setUTCFullYear(s,i,o):t.setFullYear(s,i,o)}}function Ad(e){return e=de(e),De(this[e])?this[e]():this}function Bd(e,n){if(typeof e=="object"){e=Xr(e);var r=Pd(e),t,a=r.length;for(t=0;t<a;t++)this[r[t].unit](e[r[t].unit])}else if(e=de(e),De(this[e]))return this[e](n);return this}function Id(e,n){return(e%n+n)%n}var V;Array.prototype.indexOf?V=Array.prototype.indexOf:V=function(e){var n;for(n=0;n<this.length;++n)if(this[n]===e)return n;return-1};function nt(e,n){if(isNaN(e)||isNaN(n))return NaN;var r=Id(n,12);return e+=(n-r)/12,r===1?er(e)?29:28:31-r%7%2}_("M",["MM",2],"Mo",function(){return this.month()+1});_("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});_("MMMM",0,0,function(e){return this.localeData().months(this,e)});c("M",U,gn);c("MM",U,ae);c("MMM",function(e,n){return n.monthsShortRegex(e)});c("MMMM",function(e,n){return n.monthsRegex(e)});j(["M","MM"],function(e,n){n[xe]=F(e)-1});j(["MMM","MMMM"],function(e,n,r,t){var a=r._locale.monthsParse(e,t,r._strict);a!=null?n[xe]=a:N(r).invalidMonth=e});var jd="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),os="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ls=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Hd=Nn,Cd=Nn;function Ld(e,n){return e?me(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||ls).test(n)?"format":"standalone"][e.month()]:me(this._months)?this._months:this._months.standalone}function Ud(e,n){return e?me(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[ls.test(n)?"format":"standalone"][e.month()]:me(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Yd(e,n,r){var t,a,s,i=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],t=0;t<12;++t)s=we([2e3,t]),this._shortMonthsParse[t]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[t]=this.months(s,"").toLocaleLowerCase();return r?n==="MMM"?(a=V.call(this._shortMonthsParse,i),a!==-1?a:null):(a=V.call(this._longMonthsParse,i),a!==-1?a:null):n==="MMM"?(a=V.call(this._shortMonthsParse,i),a!==-1?a:(a=V.call(this._longMonthsParse,i),a!==-1?a:null)):(a=V.call(this._longMonthsParse,i),a!==-1?a:(a=V.call(this._shortMonthsParse,i),a!==-1?a:null))}function Gd(e,n,r){var t,a,s;if(this._monthsParseExact)return Yd.call(this,e,n,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),t=0;t<12;t++){if(a=we([2e3,t]),r&&!this._longMonthsParse[t]&&(this._longMonthsParse[t]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[t]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!r&&!this._monthsParse[t]&&(s="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[t]=new RegExp(s.replace(".",""),"i")),r&&n==="MMMM"&&this._longMonthsParse[t].test(e))return t;if(r&&n==="MMM"&&this._shortMonthsParse[t].test(e))return t;if(!r&&this._monthsParse[t].test(e))return t}}function ds(e,n){if(!e.isValid())return e;if(typeof n=="string"){if(/^\d+$/.test(n))n=F(n);else if(n=e.localeData().monthsParse(n),!Ee(n))return e}var r=n,t=e.date();return t=t<29?t:Math.min(t,nt(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,t):e._d.setMonth(r,t),e}function us(e){return e!=null?(ds(this,e),k.updateOffset(this,!0),this):yn(this,"Month")}function Vd(){return nt(this.year(),this.month())}function Wd(e){return this._monthsParseExact?(M(this,"_monthsRegex")||ms.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(M(this,"_monthsShortRegex")||(this._monthsShortRegex=Hd),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function $d(e){return this._monthsParseExact?(M(this,"_monthsRegex")||ms.call(this),e?this._monthsStrictRegex:this._monthsRegex):(M(this,"_monthsRegex")||(this._monthsRegex=Cd),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function ms(){function e(l,d){return d.length-l.length}var n=[],r=[],t=[],a,s,i,o;for(a=0;a<12;a++)s=we([2e3,a]),i=Fe(this.monthsShort(s,"")),o=Fe(this.months(s,"")),n.push(i),r.push(o),t.push(o),t.push(i);n.sort(e),r.sort(e),t.sort(e),this._monthsRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function zd(e,n,r,t,a,s,i){var o;return e<100&&e>=0?(o=new Date(e+400,n,r,t,a,s,i),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,n,r,t,a,s,i),o}function vn(e){var n,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,n=new Date(Date.UTC.apply(null,r)),isFinite(n.getUTCFullYear())&&n.setUTCFullYear(e)):n=new Date(Date.UTC.apply(null,arguments)),n}function Ln(e,n,r){var t=7+n-r,a=(7+vn(e,0,t).getUTCDay()-n)%7;return-a+t-1}function gs(e,n,r,t,a){var s=(7+r-t)%7,i=Ln(e,t,a),o=1+7*(n-1)+s+i,l,d;return o<=0?(l=e-1,d=cn(l)+o):o>cn(e)?(l=e+1,d=o-cn(e)):(l=e,d=o),{year:l,dayOfYear:d}}function bn(e,n,r){var t=Ln(e.year(),n,r),a=Math.floor((e.dayOfYear()-t-1)/7)+1,s,i;return a<1?(i=e.year()-1,s=a+qe(i,n,r)):a>qe(e.year(),n,r)?(s=a-qe(e.year(),n,r),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function qe(e,n,r){var t=Ln(e,n,r),a=Ln(e+1,n,r);return(cn(e)-t+a)/7}_("w",["ww",2],"wo","week");_("W",["WW",2],"Wo","isoWeek");c("w",U,gn);c("ww",U,ae);c("W",U,gn);c("WW",U,ae);xn(["w","ww","W","WW"],function(e,n,r,t){n[t.substr(0,1)]=F(e)});function Zd(e){return bn(e,this._week.dow,this._week.doy).week}var Kd={dow:0,doy:6};function Xd(){return this._week.dow}function Jd(){return this._week.doy}function Qd(e){var n=this.localeData().week(this);return e==null?n:this.add((e-n)*7,"d")}function eu(e){var n=bn(this,1,4).week;return e==null?n:this.add((e-n)*7,"d")}_("d",0,"do","day");_("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});_("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});_("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});_("e",0,0,"weekday");_("E",0,0,"isoWeekday");c("d",U);c("e",U);c("E",U);c("dd",function(e,n){return n.weekdaysMinRegex(e)});c("ddd",function(e,n){return n.weekdaysShortRegex(e)});c("dddd",function(e,n){return n.weekdaysRegex(e)});xn(["dd","ddd","dddd"],function(e,n,r,t){var a=r._locale.weekdaysParse(e,t,r._strict);a!=null?n.d=a:N(r).invalidWeekday=e});xn(["d","e","E"],function(e,n,r,t){n[t]=F(e)});function nu(e,n){return typeof e!="string"?e:isNaN(e)?(e=n.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function ru(e,n){return typeof e=="string"?n.weekdaysParse(e)%7||7:isNaN(e)?null:e}function rt(e,n){return e.slice(n,7).concat(e.slice(0,n))}var tu="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),fs="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),au="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),su=Nn,iu=Nn,ou=Nn;function lu(e,n){var r=me(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(n)?"format":"standalone"];return e===!0?rt(r,this._week.dow):e?r[e.day()]:r}function du(e){return e===!0?rt(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function uu(e){return e===!0?rt(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function mu(e,n,r){var t,a,s,i=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],t=0;t<7;++t)s=we([2e3,1]).day(t),this._minWeekdaysParse[t]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[t]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[t]=this.weekdays(s,"").toLocaleLowerCase();return r?n==="dddd"?(a=V.call(this._weekdaysParse,i),a!==-1?a:null):n==="ddd"?(a=V.call(this._shortWeekdaysParse,i),a!==-1?a:null):(a=V.call(this._minWeekdaysParse,i),a!==-1?a:null):n==="dddd"?(a=V.call(this._weekdaysParse,i),a!==-1||(a=V.call(this._shortWeekdaysParse,i),a!==-1)?a:(a=V.call(this._minWeekdaysParse,i),a!==-1?a:null)):n==="ddd"?(a=V.call(this._shortWeekdaysParse,i),a!==-1||(a=V.call(this._weekdaysParse,i),a!==-1)?a:(a=V.call(this._minWeekdaysParse,i),a!==-1?a:null)):(a=V.call(this._minWeekdaysParse,i),a!==-1||(a=V.call(this._weekdaysParse,i),a!==-1)?a:(a=V.call(this._shortWeekdaysParse,i),a!==-1?a:null))}function gu(e,n,r){var t,a,s;if(this._weekdaysParseExact)return mu.call(this,e,n,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),t=0;t<7;t++){if(a=we([2e3,1]).day(t),r&&!this._fullWeekdaysParse[t]&&(this._fullWeekdaysParse[t]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[t]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[t]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[t]||(s="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[t]=new RegExp(s.replace(".",""),"i")),r&&n==="dddd"&&this._fullWeekdaysParse[t].test(e))return t;if(r&&n==="ddd"&&this._shortWeekdaysParse[t].test(e))return t;if(r&&n==="dd"&&this._minWeekdaysParse[t].test(e))return t;if(!r&&this._weekdaysParse[t].test(e))return t}}function fu(e){if(!this.isValid())return e!=null?this:NaN;var n=yn(this,"Day");return e!=null?(e=nu(e,this.localeData()),this.add(e-n,"d")):n}function hu(e){if(!this.isValid())return e!=null?this:NaN;var n=(this.day()+7-this.localeData()._week.dow)%7;return e==null?n:this.add(e-n,"d")}function pu(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var n=ru(e,this.localeData());return this.day(this.day()%7?n:n-7)}else return this.day()||7}function ku(e){return this._weekdaysParseExact?(M(this,"_weekdaysRegex")||tt.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(M(this,"_weekdaysRegex")||(this._weekdaysRegex=su),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function cu(e){return this._weekdaysParseExact?(M(this,"_weekdaysRegex")||tt.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(M(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=iu),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function yu(e){return this._weekdaysParseExact?(M(this,"_weekdaysRegex")||tt.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(M(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=ou),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function tt(){function e(u,g){return g.length-u.length}var n=[],r=[],t=[],a=[],s,i,o,l,d;for(s=0;s<7;s++)i=we([2e3,1]).day(s),o=Fe(this.weekdaysMin(i,"")),l=Fe(this.weekdaysShort(i,"")),d=Fe(this.weekdays(i,"")),n.push(o),r.push(l),t.push(d),a.push(o),a.push(l),a.push(d);n.sort(e),r.sort(e),t.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")}function at(){return this.hours()%12||12}function vu(){return this.hours()||24}_("H",["HH",2],0,"hour");_("h",["hh",2],0,at);_("k",["kk",2],0,vu);_("hmm",0,0,function(){return""+at.apply(this)+Te(this.minutes(),2)});_("hmmss",0,0,function(){return""+at.apply(this)+Te(this.minutes(),2)+Te(this.seconds(),2)});_("Hmm",0,0,function(){return""+this.hours()+Te(this.minutes(),2)});_("Hmmss",0,0,function(){return""+this.hours()+Te(this.minutes(),2)+Te(this.seconds(),2)});function hs(e,n){_(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),n)})}hs("a",!0);hs("A",!1);function ps(e,n){return n._meridiemParse}c("a",ps);c("A",ps);c("H",U,et);c("h",U,gn);c("k",U,gn);c("HH",U,ae);c("hh",U,ae);c("kk",U,ae);c("hmm",ts);c("hmmss",as);c("Hmm",ts);c("Hmmss",as);j(["H","HH"],$);j(["k","kk"],function(e,n,r){var t=F(e);n[$]=t===24?0:t});j(["a","A"],function(e,n,r){r._isPm=r._locale.isPM(e),r._meridiem=e});j(["h","hh"],function(e,n,r){n[$]=F(e),N(r).bigHour=!0});j("hmm",function(e,n,r){var t=e.length-2;n[$]=F(e.substr(0,t)),n[ue]=F(e.substr(t)),N(r).bigHour=!0});j("hmmss",function(e,n,r){var t=e.length-4,a=e.length-2;n[$]=F(e.substr(0,t)),n[ue]=F(e.substr(t,2)),n[Re]=F(e.substr(a)),N(r).bigHour=!0});j("Hmm",function(e,n,r){var t=e.length-2;n[$]=F(e.substr(0,t)),n[ue]=F(e.substr(t))});j("Hmmss",function(e,n,r){var t=e.length-4,a=e.length-2;n[$]=F(e.substr(0,t)),n[ue]=F(e.substr(t,2)),n[Re]=F(e.substr(a))});function bu(e){return(e+"").toLowerCase().charAt(0)==="p"}var Su=/[ap]\.?m?\.?/i,_u=fn("Hours",!0);function Tu(e,n,r){return e>11?r?"pm":"PM":r?"am":"AM"}var ks={calendar:md,longDateFormat:pd,invalidDate:cd,ordinal:vd,dayOfMonthOrdinalParse:bd,relativeTime:_d,months:jd,monthsShort:os,week:Kd,weekdays:tu,weekdaysMin:au,weekdaysShort:fs,meridiemParse:Su},Y={},pn={},Sn;function wu(e,n){var r,t=Math.min(e.length,n.length);for(r=0;r<t;r+=1)if(e[r]!==n[r])return r;return t}function Zt(e){return e&&e.toLowerCase().replace("_","-")}function Du(e){for(var n=0,r,t,a,s;n<e.length;){for(s=Zt(e[n]).split("-"),r=s.length,t=Zt(e[n+1]),t=t?t.split("-"):null;r>0;){if(a=nr(s.slice(0,r).join("-")),a)return a;if(t&&t.length>=r&&wu(s,t)>=r-1)break;r--}n++}return Sn}function Pu(e){return!!(e&&e.match("^[^/\\\\]*$"))}function nr(e){var n=null,r;if(Y[e]===void 0&&typeof module<"u"&&module&&module.exports&&Pu(e))try{n=Sn._abbr,r=require,r("./locale/"+e),Ue(n)}catch{Y[e]=null}return Y[e]}function Ue(e,n){var r;return e&&(ee(n)?r=Ae(e):r=st(e,n),r?Sn=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Sn._abbr}function st(e,n){if(n!==null){var r,t=ks;if(n.abbr=e,Y[e]!=null)Qa("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=Y[e]._config;else if(n.parentLocale!=null)if(Y[n.parentLocale]!=null)t=Y[n.parentLocale]._config;else if(r=nr(n.parentLocale),r!=null)t=r._config;else return pn[n.parentLocale]||(pn[n.parentLocale]=[]),pn[n.parentLocale].push({name:e,config:n}),null;return Y[e]=new Zr(Or(t,n)),pn[e]&&pn[e].forEach(function(a){st(a.name,a.config)}),Ue(e),Y[e]}else return delete Y[e],null}function Nu(e,n){if(n!=null){var r,t,a=ks;Y[e]!=null&&Y[e].parentLocale!=null?Y[e].set(Or(Y[e]._config,n)):(t=nr(e),t!=null&&(a=t._config),n=Or(a,n),t==null&&(n.abbr=e),r=new Zr(n),r.parentLocale=Y[e],Y[e]=r),Ue(e)}else Y[e]!=null&&(Y[e].parentLocale!=null?(Y[e]=Y[e].parentLocale,e===Ue()&&Ue(e)):Y[e]!=null&&delete Y[e]);return Y[e]}function Ae(e){var n;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Sn;if(!me(e)){if(n=nr(e),n)return n;e=[e]}return Du(e)}function xu(){return Mr(Y)}function it(e){var n,r=e._a;return r&&N(e).overflow===-2&&(n=r[xe]<0||r[xe]>11?xe:r[ve]<1||r[ve]>nt(r[K],r[xe])?ve:r[$]<0||r[$]>24||r[$]===24&&(r[ue]!==0||r[Re]!==0||r[We]!==0)?$:r[ue]<0||r[ue]>59?ue:r[Re]<0||r[Re]>59?Re:r[We]<0||r[We]>999?We:-1,N(e)._overflowDayOfYear&&(n<K||n>ve)&&(n=ve),N(e)._overflowWeeks&&n===-1&&(n=Ed),N(e)._overflowWeekday&&n===-1&&(n=Od),N(e).overflow=n),e}var Ru=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Fu=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,qu=/Z|[+-]\d\d(?::?\d\d)?/,En=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],hr=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Eu=/^\/?Date\((-?\d+)/i,Ou=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Mu={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function cs(e){var n,r,t=e._i,a=Ru.exec(t)||Fu.exec(t),s,i,o,l,d=En.length,u=hr.length;if(a){for(N(e).iso=!0,n=0,r=d;n<r;n++)if(En[n][1].exec(a[1])){i=En[n][0],s=En[n][2]!==!1;break}if(i==null){e._isValid=!1;return}if(a[3]){for(n=0,r=u;n<r;n++)if(hr[n][1].exec(a[3])){o=(a[2]||" ")+hr[n][0];break}if(o==null){e._isValid=!1;return}}if(!s&&o!=null){e._isValid=!1;return}if(a[4])if(qu.exec(a[4]))l="Z";else{e._isValid=!1;return}e._f=i+(o||"")+(l||""),lt(e)}else e._isValid=!1}function Au(e,n,r,t,a,s){var i=[Bu(e),os.indexOf(n),parseInt(r,10),parseInt(t,10),parseInt(a,10)];return s&&i.push(parseInt(s,10)),i}function Bu(e){var n=parseInt(e,10);return n<=49?2e3+n:n<=999?1900+n:n}function Iu(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function ju(e,n,r){if(e){var t=fs.indexOf(e),a=new Date(n[0],n[1],n[2]).getDay();if(t!==a)return N(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function Hu(e,n,r){if(e)return Mu[e];if(n)return 0;var t=parseInt(r,10),a=t%100,s=(t-a)/100;return s*60+a}function ys(e){var n=Ou.exec(Iu(e._i)),r;if(n){if(r=Au(n[4],n[3],n[2],n[5],n[6],n[7]),!ju(n[1],r,e))return;e._a=r,e._tzm=Hu(n[8],n[9],n[10]),e._d=vn.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),N(e).rfc2822=!0}else e._isValid=!1}function Cu(e){var n=Eu.exec(e._i);if(n!==null){e._d=new Date(+n[1]);return}if(cs(e),e._isValid===!1)delete e._isValid;else return;if(ys(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:k.createFromInputFallback(e)}k.createFromInputFallback=le("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Xe(e,n,r){return e??n??r}function Lu(e){var n=new Date(k.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function ot(e){var n,r,t=[],a,s,i;if(!e._d){for(a=Lu(e),e._w&&e._a[ve]==null&&e._a[xe]==null&&Uu(e),e._dayOfYear!=null&&(i=Xe(e._a[K],a[K]),(e._dayOfYear>cn(i)||e._dayOfYear===0)&&(N(e)._overflowDayOfYear=!0),r=vn(i,0,e._dayOfYear),e._a[xe]=r.getUTCMonth(),e._a[ve]=r.getUTCDate()),n=0;n<3&&e._a[n]==null;++n)e._a[n]=t[n]=a[n];for(;n<7;n++)e._a[n]=t[n]=e._a[n]==null?n===2?1:0:e._a[n];e._a[$]===24&&e._a[ue]===0&&e._a[Re]===0&&e._a[We]===0&&(e._nextDay=!0,e._a[$]=0),e._d=(e._useUTC?vn:zd).apply(null,t),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[$]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(N(e).weekdayMismatch=!0)}}function Uu(e){var n,r,t,a,s,i,o,l,d;n=e._w,n.GG!=null||n.W!=null||n.E!=null?(s=1,i=4,r=Xe(n.GG,e._a[K],bn(L(),1,4).year),t=Xe(n.W,1),a=Xe(n.E,1),(a<1||a>7)&&(l=!0)):(s=e._locale._week.dow,i=e._locale._week.doy,d=bn(L(),s,i),r=Xe(n.gg,e._a[K],d.year),t=Xe(n.w,d.week),n.d!=null?(a=n.d,(a<0||a>6)&&(l=!0)):n.e!=null?(a=n.e+s,(n.e<0||n.e>6)&&(l=!0)):a=s),t<1||t>qe(r,s,i)?N(e)._overflowWeeks=!0:l!=null?N(e)._overflowWeekday=!0:(o=gs(r,t,a,s,i),e._a[K]=o.year,e._dayOfYear=o.dayOfYear)}k.ISO_8601=function(){};k.RFC_2822=function(){};function lt(e){if(e._f===k.ISO_8601){cs(e);return}if(e._f===k.RFC_2822){ys(e);return}e._a=[],N(e).empty=!0;var n=""+e._i,r,t,a,s,i,o=n.length,l=0,d,u;for(a=es(e._f,e._locale).match(Kr)||[],u=a.length,r=0;r<u;r++)s=a[r],t=(n.match(Rd(s,e))||[])[0],t&&(i=n.substr(0,n.indexOf(t)),i.length>0&&N(e).unusedInput.push(i),n=n.slice(n.indexOf(t)+t.length),l+=t.length),nn[s]?(t?N(e).empty=!1:N(e).unusedTokens.push(s),qd(s,t,e)):e._strict&&!t&&N(e).unusedTokens.push(s);N(e).charsLeftOver=o-l,n.length>0&&N(e).unusedInput.push(n),e._a[$]<=12&&N(e).bigHour===!0&&e._a[$]>0&&(N(e).bigHour=void 0),N(e).parsedDateParts=e._a.slice(0),N(e).meridiem=e._meridiem,e._a[$]=Yu(e._locale,e._a[$],e._meridiem),d=N(e).era,d!==null&&(e._a[K]=e._locale.erasConvertYear(d,e._a[K])),ot(e),it(e)}function Yu(e,n,r){var t;return r==null?n:e.meridiemHour!=null?e.meridiemHour(n,r):(e.isPM!=null&&(t=e.isPM(r),t&&n<12&&(n+=12),!t&&n===12&&(n=0)),n)}function Gu(e){var n,r,t,a,s,i,o=!1,l=e._f.length;if(l===0){N(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<l;a++)s=0,i=!1,n=zr({},e),e._useUTC!=null&&(n._useUTC=e._useUTC),n._f=e._f[a],lt(n),$r(n)&&(i=!0),s+=N(n).charsLeftOver,s+=N(n).unusedTokens.length*10,N(n).score=s,o?s<t&&(t=s,r=n):(t==null||s<t||i)&&(t=s,r=n,i&&(o=!0));Ie(e,r||n)}function Vu(e){if(!e._d){var n=Xr(e._i),r=n.day===void 0?n.date:n.day;e._a=Xa([n.year,n.month,r,n.hour,n.minute,n.second,n.millisecond],function(t){return t&&parseInt(t,10)}),ot(e)}}function Wu(e){var n=new Pn(it(vs(e)));return n._nextDay&&(n.add(1,"d"),n._nextDay=void 0),n}function vs(e){var n=e._i,r=e._f;return e._locale=e._locale||Ae(e._l),n===null||r===void 0&&n===""?zn({nullInput:!0}):(typeof n=="string"&&(e._i=n=e._locale.preparse(n)),ge(n)?new Pn(it(n)):(Dn(n)?e._d=n:me(r)?Gu(e):r?lt(e):$u(e),$r(e)||(e._d=null),e))}function $u(e){var n=e._i;ee(n)?e._d=new Date(k.now()):Dn(n)?e._d=new Date(n.valueOf()):typeof n=="string"?Cu(e):me(n)?(e._a=Xa(n.slice(0),function(r){return parseInt(r,10)}),ot(e)):$e(n)?Vu(e):Ee(n)?e._d=new Date(n):k.createFromInputFallback(e)}function bs(e,n,r,t,a){var s={};return(n===!0||n===!1)&&(t=n,n=void 0),(r===!0||r===!1)&&(t=r,r=void 0),($e(e)&&Wr(e)||me(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=r,s._i=e,s._f=n,s._strict=t,Wu(s)}function L(e,n,r,t){return bs(e,n,r,t,!1)}var zu=le("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=L.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:zn()}),Zu=le("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=L.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:zn()});function Ss(e,n){var r,t;if(n.length===1&&me(n[0])&&(n=n[0]),!n.length)return L();for(r=n[0],t=1;t<n.length;++t)(!n[t].isValid()||n[t][e](r))&&(r=n[t]);return r}function Ku(){var e=[].slice.call(arguments,0);return Ss("isBefore",e)}function Xu(){var e=[].slice.call(arguments,0);return Ss("isAfter",e)}var Ju=function(){return Date.now?Date.now():+new Date},kn=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Qu(e){var n,r=!1,t,a=kn.length;for(n in e)if(M(e,n)&&!(V.call(kn,n)!==-1&&(e[n]==null||!isNaN(e[n]))))return!1;for(t=0;t<a;++t)if(e[kn[t]]){if(r)return!1;parseFloat(e[kn[t]])!==F(e[kn[t]])&&(r=!0)}return!0}function em(){return this._isValid}function nm(){return he(NaN)}function rr(e){var n=Xr(e),r=n.year||0,t=n.quarter||0,a=n.month||0,s=n.week||n.isoWeek||0,i=n.day||0,o=n.hour||0,l=n.minute||0,d=n.second||0,u=n.millisecond||0;this._isValid=Qu(n),this._milliseconds=+u+d*1e3+l*6e4+o*1e3*60*60,this._days=+i+s*7,this._months=+a+t*3+r*12,this._data={},this._locale=Ae(),this._bubble()}function An(e){return e instanceof rr}function Br(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function rm(e,n,r){var t=Math.min(e.length,n.length),a=Math.abs(e.length-n.length),s=0,i;for(i=0;i<t;i++)F(e[i])!==F(n[i])&&s++;return s+a}function _s(e,n){_(e,0,0,function(){var r=this.utcOffset(),t="+";return r<0&&(r=-r,t="-"),t+Te(~~(r/60),2)+n+Te(~~r%60,2)})}_s("Z",":");_s("ZZ","");c("Z",Qn);c("ZZ",Qn);j(["Z","ZZ"],function(e,n,r){r._useUTC=!0,r._tzm=dt(Qn,e)});var tm=/([\+\-]|\d\d)/gi;function dt(e,n){var r=(n||"").match(e),t,a,s;return r===null?null:(t=r[r.length-1]||[],a=(t+"").match(tm)||["-",0,0],s=+(a[1]*60)+F(a[2]),s===0?0:a[0]==="+"?s:-s)}function ut(e,n){var r,t;return n._isUTC?(r=n.clone(),t=(ge(e)||Dn(e)?e.valueOf():L(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+t),k.updateOffset(r,!1),r):L(e).local()}function Ir(e){return-Math.round(e._d.getTimezoneOffset())}k.updateOffset=function(){};function am(e,n,r){var t=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=dt(Qn,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&n&&(a=Ir(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),t!==e&&(!n||this._changeInProgress?Ds(this,he(e-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,k.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?t:Ir(this)}function sm(e,n){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,n),this):-this.utcOffset()}function im(e){return this.utcOffset(0,e)}function om(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Ir(this),"m")),this}function lm(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=dt(Nd,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function dm(e){return this.isValid()?(e=e?L(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function um(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function mm(){if(!ee(this._isDSTShifted))return this._isDSTShifted;var e={},n;return zr(e,this),e=vs(e),e._a?(n=e._isUTC?we(e._a):L(e._a),this._isDSTShifted=this.isValid()&&rm(e._a,n.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function gm(){return this.isValid()?!this._isUTC:!1}function fm(){return this.isValid()?this._isUTC:!1}function Ts(){return this.isValid()?this._isUTC&&this._offset===0:!1}var hm=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,pm=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function he(e,n){var r=e,t=null,a,s,i;return An(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:Ee(e)||!isNaN(+e)?(r={},n?r[n]=+e:r.milliseconds=+e):(t=hm.exec(e))?(a=t[1]==="-"?-1:1,r={y:0,d:F(t[ve])*a,h:F(t[$])*a,m:F(t[ue])*a,s:F(t[Re])*a,ms:F(Br(t[We]*1e3))*a}):(t=pm.exec(e))?(a=t[1]==="-"?-1:1,r={y:Ve(t[2],a),M:Ve(t[3],a),w:Ve(t[4],a),d:Ve(t[5],a),h:Ve(t[6],a),m:Ve(t[7],a),s:Ve(t[8],a)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(i=km(L(r.from),L(r.to)),r={},r.ms=i.milliseconds,r.M=i.months),s=new rr(r),An(e)&&M(e,"_locale")&&(s._locale=e._locale),An(e)&&M(e,"_isValid")&&(s._isValid=e._isValid),s}he.fn=rr.prototype;he.invalid=nm;function Ve(e,n){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*n}function Kt(e,n){var r={};return r.months=n.month()-e.month()+(n.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(n)&&--r.months,r.milliseconds=+n-+e.clone().add(r.months,"M"),r}function km(e,n){var r;return e.isValid()&&n.isValid()?(n=ut(n,e),e.isBefore(n)?r=Kt(e,n):(r=Kt(n,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function ws(e,n){return function(r,t){var a,s;return t!==null&&!isNaN(+t)&&(Qa(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=r,r=t,t=s),a=he(r,t),Ds(this,a,e),this}}function Ds(e,n,r,t){var a=n._milliseconds,s=Br(n._days),i=Br(n._months);e.isValid()&&(t=t??!0,i&&ds(e,yn(e,"Month")+i*r),s&&is(e,"Date",yn(e,"Date")+s*r),a&&e._d.setTime(e._d.valueOf()+a*r),t&&k.updateOffset(e,s||i))}var cm=ws(1,"add"),ym=ws(-1,"subtract");function Ps(e){return typeof e=="string"||e instanceof String}function vm(e){return ge(e)||Dn(e)||Ps(e)||Ee(e)||Sm(e)||bm(e)||e===null||e===void 0}function bm(e){var n=$e(e)&&!Wr(e),r=!1,t=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,s,i=t.length;for(a=0;a<i;a+=1)s=t[a],r=r||M(e,s);return n&&r}function Sm(e){var n=me(e),r=!1;return n&&(r=e.filter(function(t){return!Ee(t)&&Ps(e)}).length===0),n&&r}function _m(e){var n=$e(e)&&!Wr(e),r=!1,t=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,s;for(a=0;a<t.length;a+=1)s=t[a],r=r||M(e,s);return n&&r}function Tm(e,n){var r=e.diff(n,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function wm(e,n){arguments.length===1&&(arguments[0]?vm(arguments[0])?(e=arguments[0],n=void 0):_m(arguments[0])&&(n=arguments[0],e=void 0):(e=void 0,n=void 0));var r=e||L(),t=ut(r,this).startOf("day"),a=k.calendarFormat(this,t)||"sameElse",s=n&&(De(n[a])?n[a].call(this,r):n[a]);return this.format(s||this.localeData().calendar(a,this,L(r)))}function Dm(){return new Pn(this)}function Pm(e,n){var r=ge(e)?e:L(e);return this.isValid()&&r.isValid()?(n=de(n)||"millisecond",n==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(n).valueOf()):!1}function Nm(e,n){var r=ge(e)?e:L(e);return this.isValid()&&r.isValid()?(n=de(n)||"millisecond",n==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(n).valueOf()<r.valueOf()):!1}function xm(e,n,r,t){var a=ge(e)?e:L(e),s=ge(n)?n:L(n);return this.isValid()&&a.isValid()&&s.isValid()?(t=t||"()",(t[0]==="("?this.isAfter(a,r):!this.isBefore(a,r))&&(t[1]===")"?this.isBefore(s,r):!this.isAfter(s,r))):!1}function Rm(e,n){var r=ge(e)?e:L(e),t;return this.isValid()&&r.isValid()?(n=de(n)||"millisecond",n==="millisecond"?this.valueOf()===r.valueOf():(t=r.valueOf(),this.clone().startOf(n).valueOf()<=t&&t<=this.clone().endOf(n).valueOf())):!1}function Fm(e,n){return this.isSame(e,n)||this.isAfter(e,n)}function qm(e,n){return this.isSame(e,n)||this.isBefore(e,n)}function Em(e,n,r){var t,a,s;if(!this.isValid())return NaN;if(t=ut(e,this),!t.isValid())return NaN;switch(a=(t.utcOffset()-this.utcOffset())*6e4,n=de(n),n){case"year":s=Bn(this,t)/12;break;case"month":s=Bn(this,t);break;case"quarter":s=Bn(this,t)/3;break;case"second":s=(this-t)/1e3;break;case"minute":s=(this-t)/6e4;break;case"hour":s=(this-t)/36e5;break;case"day":s=(this-t-a)/864e5;break;case"week":s=(this-t-a)/6048e5;break;default:s=this-t}return r?s:se(s)}function Bn(e,n){if(e.date()<n.date())return-Bn(n,e);var r=(n.year()-e.year())*12+(n.month()-e.month()),t=e.clone().add(r,"months"),a,s;return n-t<0?(a=e.clone().add(r-1,"months"),s=(n-t)/(t-a)):(a=e.clone().add(r+1,"months"),s=(n-t)/(a-t)),-(r+s)||0}k.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";k.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Om(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Mm(e){if(!this.isValid())return null;var n=e!==!0,r=n?this.clone().utc():this;return r.year()<0||r.year()>9999?Mn(r,n?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):De(Date.prototype.toISOString)?n?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Mn(r,"Z")):Mn(r,n?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Am(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",n="",r,t,a,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",n="Z"),r="["+e+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",s=n+'[")]',this.format(r+t+a+s)}function Bm(e){e||(e=this.isUtc()?k.defaultFormatUtc:k.defaultFormat);var n=Mn(this,e);return this.localeData().postformat(n)}function Im(e,n){return this.isValid()&&(ge(e)&&e.isValid()||L(e).isValid())?he({to:this,from:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function jm(e){return this.from(L(),e)}function Hm(e,n){return this.isValid()&&(ge(e)&&e.isValid()||L(e).isValid())?he({from:this,to:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function Cm(e){return this.to(L(),e)}function Ns(e){var n;return e===void 0?this._locale._abbr:(n=Ae(e),n!=null&&(this._locale=n),this)}var xs=le("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Rs(){return this._locale}var Un=1e3,rn=60*Un,Yn=60*rn,Fs=(365*400+97)*24*Yn;function tn(e,n){return(e%n+n)%n}function qs(e,n,r){return e<100&&e>=0?new Date(e+400,n,r)-Fs:new Date(e,n,r).valueOf()}function Es(e,n,r){return e<100&&e>=0?Date.UTC(e+400,n,r)-Fs:Date.UTC(e,n,r)}function Lm(e){var n,r;if(e=de(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Es:qs,e){case"year":n=r(this.year(),0,1);break;case"quarter":n=r(this.year(),this.month()-this.month()%3,1);break;case"month":n=r(this.year(),this.month(),1);break;case"week":n=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":n=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":n=r(this.year(),this.month(),this.date());break;case"hour":n=this._d.valueOf(),n-=tn(n+(this._isUTC?0:this.utcOffset()*rn),Yn);break;case"minute":n=this._d.valueOf(),n-=tn(n,rn);break;case"second":n=this._d.valueOf(),n-=tn(n,Un);break}return this._d.setTime(n),k.updateOffset(this,!0),this}function Um(e){var n,r;if(e=de(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Es:qs,e){case"year":n=r(this.year()+1,0,1)-1;break;case"quarter":n=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":n=r(this.year(),this.month()+1,1)-1;break;case"week":n=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":n=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":n=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":n=this._d.valueOf(),n+=Yn-tn(n+(this._isUTC?0:this.utcOffset()*rn),Yn)-1;break;case"minute":n=this._d.valueOf(),n+=rn-tn(n,rn)-1;break;case"second":n=this._d.valueOf(),n+=Un-tn(n,Un)-1;break}return this._d.setTime(n),k.updateOffset(this,!0),this}function Ym(){return this._d.valueOf()-(this._offset||0)*6e4}function Gm(){return Math.floor(this.valueOf()/1e3)}function Vm(){return new Date(this.valueOf())}function Wm(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function $m(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function zm(){return this.isValid()?this.toISOString():null}function Zm(){return $r(this)}function Km(){return Ie({},N(this))}function Xm(){return N(this).overflow}function Jm(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}_("N",0,0,"eraAbbr");_("NN",0,0,"eraAbbr");_("NNN",0,0,"eraAbbr");_("NNNN",0,0,"eraName");_("NNNNN",0,0,"eraNarrow");_("y",["y",1],"yo","eraYear");_("y",["yy",2],0,"eraYear");_("y",["yyy",3],0,"eraYear");_("y",["yyyy",4],0,"eraYear");c("N",mt);c("NN",mt);c("NNN",mt);c("NNNN",dg);c("NNNNN",ug);j(["N","NN","NNN","NNNN","NNNNN"],function(e,n,r,t){var a=r._locale.erasParse(e,t,r._strict);a?N(r).era=a:N(r).invalidEra=e});c("y",mn);c("yy",mn);c("yyy",mn);c("yyyy",mn);c("yo",mg);j(["y","yy","yyy","yyyy"],K);j(["yo"],function(e,n,r,t){var a;r._locale._eraYearOrdinalRegex&&(a=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?n[K]=r._locale.eraYearOrdinalParse(e,a):n[K]=parseInt(e,10)});function Qm(e,n){var r,t,a,s=this._eras||Ae("en")._eras;for(r=0,t=s.length;r<t;++r){switch(typeof s[r].since){case"string":a=k(s[r].since).startOf("day"),s[r].since=a.valueOf();break}switch(typeof s[r].until){case"undefined":s[r].until=1/0;break;case"string":a=k(s[r].until).startOf("day").valueOf(),s[r].until=a.valueOf();break}}return s}function eg(e,n,r){var t,a,s=this.eras(),i,o,l;for(e=e.toUpperCase(),t=0,a=s.length;t<a;++t)if(i=s[t].name.toUpperCase(),o=s[t].abbr.toUpperCase(),l=s[t].narrow.toUpperCase(),r)switch(n){case"N":case"NN":case"NNN":if(o===e)return s[t];break;case"NNNN":if(i===e)return s[t];break;case"NNNNN":if(l===e)return s[t];break}else if([i,o,l].indexOf(e)>=0)return s[t]}function ng(e,n){var r=e.since<=e.until?1:-1;return n===void 0?k(e.since).year():k(e.since).year()+(n-e.offset)*r}function rg(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].name;return""}function tg(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].narrow;return""}function ag(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].abbr;return""}function sg(){var e,n,r,t,a=this.localeData().eras();for(e=0,n=a.length;e<n;++e)if(r=a[e].since<=a[e].until?1:-1,t=this.clone().startOf("day").valueOf(),a[e].since<=t&&t<=a[e].until||a[e].until<=t&&t<=a[e].since)return(this.year()-k(a[e].since).year())*r+a[e].offset;return this.year()}function ig(e){return M(this,"_erasNameRegex")||gt.call(this),e?this._erasNameRegex:this._erasRegex}function og(e){return M(this,"_erasAbbrRegex")||gt.call(this),e?this._erasAbbrRegex:this._erasRegex}function lg(e){return M(this,"_erasNarrowRegex")||gt.call(this),e?this._erasNarrowRegex:this._erasRegex}function mt(e,n){return n.erasAbbrRegex(e)}function dg(e,n){return n.erasNameRegex(e)}function ug(e,n){return n.erasNarrowRegex(e)}function mg(e,n){return n._eraYearOrdinalRegex||mn}function gt(){var e=[],n=[],r=[],t=[],a,s,i,o,l,d=this.eras();for(a=0,s=d.length;a<s;++a)i=Fe(d[a].name),o=Fe(d[a].abbr),l=Fe(d[a].narrow),n.push(i),e.push(o),r.push(l),t.push(i),t.push(o),t.push(l);this._erasRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+n.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}_(0,["gg",2],0,function(){return this.weekYear()%100});_(0,["GG",2],0,function(){return this.isoWeekYear()%100});function tr(e,n){_(0,[e,e.length],0,n)}tr("gggg","weekYear");tr("ggggg","weekYear");tr("GGGG","isoWeekYear");tr("GGGGG","isoWeekYear");c("G",Jn);c("g",Jn);c("GG",U,ae);c("gg",U,ae);c("GGGG",Qr,Jr);c("gggg",Qr,Jr);c("GGGGG",Xn,Zn);c("ggggg",Xn,Zn);xn(["gggg","ggggg","GGGG","GGGGG"],function(e,n,r,t){n[t.substr(0,2)]=F(e)});xn(["gg","GG"],function(e,n,r,t){n[t]=k.parseTwoDigitYear(e)});function gg(e){return Os.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function fg(e){return Os.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function hg(){return qe(this.year(),1,4)}function pg(){return qe(this.isoWeekYear(),1,4)}function kg(){var e=this.localeData()._week;return qe(this.year(),e.dow,e.doy)}function cg(){var e=this.localeData()._week;return qe(this.weekYear(),e.dow,e.doy)}function Os(e,n,r,t,a){var s;return e==null?bn(this,t,a).year:(s=qe(e,t,a),n>s&&(n=s),yg.call(this,e,n,r,t,a))}function yg(e,n,r,t,a){var s=gs(e,n,r,t,a),i=vn(s.year,0,s.dayOfYear);return this.year(i.getUTCFullYear()),this.month(i.getUTCMonth()),this.date(i.getUTCDate()),this}_("Q",0,"Qo","quarter");c("Q",ns);j("Q",function(e,n){n[xe]=(F(e)-1)*3});function vg(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}_("D",["DD",2],"Do","date");c("D",U,gn);c("DD",U,ae);c("Do",function(e,n){return e?n._dayOfMonthOrdinalParse||n._ordinalParse:n._dayOfMonthOrdinalParseLenient});j(["D","DD"],ve);j("Do",function(e,n){n[ve]=F(e.match(U)[0])});var Ms=fn("Date",!0);_("DDD",["DDDD",3],"DDDo","dayOfYear");c("DDD",Kn);c("DDDD",rs);j(["DDD","DDDD"],function(e,n,r){r._dayOfYear=F(e)});function bg(e){var n=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?n:this.add(e-n,"d")}_("m",["mm",2],0,"minute");c("m",U,et);c("mm",U,ae);j(["m","mm"],ue);var Sg=fn("Minutes",!1);_("s",["ss",2],0,"second");c("s",U,et);c("ss",U,ae);j(["s","ss"],Re);var _g=fn("Seconds",!1);_("S",0,0,function(){return~~(this.millisecond()/100)});_(0,["SS",2],0,function(){return~~(this.millisecond()/10)});_(0,["SSS",3],0,"millisecond");_(0,["SSSS",4],0,function(){return this.millisecond()*10});_(0,["SSSSS",5],0,function(){return this.millisecond()*100});_(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});_(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});_(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});_(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});c("S",Kn,ns);c("SS",Kn,ae);c("SSS",Kn,rs);var je,As;for(je="SSSS";je.length<=9;je+="S")c(je,mn);function Tg(e,n){n[We]=F(("0."+e)*1e3)}for(je="S";je.length<=9;je+="S")j(je,Tg);As=fn("Milliseconds",!1);_("z",0,0,"zoneAbbr");_("zz",0,0,"zoneName");function wg(){return this._isUTC?"UTC":""}function Dg(){return this._isUTC?"Coordinated Universal Time":""}var m=Pn.prototype;m.add=cm;m.calendar=wm;m.clone=Dm;m.diff=Em;m.endOf=Um;m.format=Bm;m.from=Im;m.fromNow=jm;m.to=Hm;m.toNow=Cm;m.get=Ad;m.invalidAt=Xm;m.isAfter=Pm;m.isBefore=Nm;m.isBetween=xm;m.isSame=Rm;m.isSameOrAfter=Fm;m.isSameOrBefore=qm;m.isValid=Zm;m.lang=xs;m.locale=Ns;m.localeData=Rs;m.max=Zu;m.min=zu;m.parsingFlags=Km;m.set=Bd;m.startOf=Lm;m.subtract=ym;m.toArray=Wm;m.toObject=$m;m.toDate=Vm;m.toISOString=Mm;m.inspect=Am;typeof Symbol<"u"&&Symbol.for!=null&&(m[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});m.toJSON=zm;m.toString=Om;m.unix=Gm;m.valueOf=Ym;m.creationData=Jm;m.eraName=rg;m.eraNarrow=tg;m.eraAbbr=ag;m.eraYear=sg;m.year=ss;m.isLeapYear=Md;m.weekYear=gg;m.isoWeekYear=fg;m.quarter=m.quarters=vg;m.month=us;m.daysInMonth=Vd;m.week=m.weeks=Qd;m.isoWeek=m.isoWeeks=eu;m.weeksInYear=kg;m.weeksInWeekYear=cg;m.isoWeeksInYear=hg;m.isoWeeksInISOWeekYear=pg;m.date=Ms;m.day=m.days=fu;m.weekday=hu;m.isoWeekday=pu;m.dayOfYear=bg;m.hour=m.hours=_u;m.minute=m.minutes=Sg;m.second=m.seconds=_g;m.millisecond=m.milliseconds=As;m.utcOffset=am;m.utc=im;m.local=om;m.parseZone=lm;m.hasAlignedHourOffset=dm;m.isDST=um;m.isLocal=gm;m.isUtcOffset=fm;m.isUtc=Ts;m.isUTC=Ts;m.zoneAbbr=wg;m.zoneName=Dg;m.dates=le("dates accessor is deprecated. Use date instead.",Ms);m.months=le("months accessor is deprecated. Use month instead",us);m.years=le("years accessor is deprecated. Use year instead",ss);m.zone=le("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",sm);m.isDSTShifted=le("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",mm);function Pg(e){return L(e*1e3)}function Ng(){return L.apply(null,arguments).parseZone()}function Bs(e){return e}var A=Zr.prototype;A.calendar=gd;A.longDateFormat=kd;A.invalidDate=yd;A.ordinal=Sd;A.preparse=Bs;A.postformat=Bs;A.relativeTime=Td;A.pastFuture=wd;A.set=ud;A.eras=Qm;A.erasParse=eg;A.erasConvertYear=ng;A.erasAbbrRegex=og;A.erasNameRegex=ig;A.erasNarrowRegex=lg;A.months=Ld;A.monthsShort=Ud;A.monthsParse=Gd;A.monthsRegex=$d;A.monthsShortRegex=Wd;A.week=Zd;A.firstDayOfYear=Jd;A.firstDayOfWeek=Xd;A.weekdays=lu;A.weekdaysMin=uu;A.weekdaysShort=du;A.weekdaysParse=gu;A.weekdaysRegex=ku;A.weekdaysShortRegex=cu;A.weekdaysMinRegex=yu;A.isPM=bu;A.meridiem=Tu;function Gn(e,n,r,t){var a=Ae(),s=we().set(t,n);return a[r](s,e)}function Is(e,n,r){if(Ee(e)&&(n=e,e=void 0),e=e||"",n!=null)return Gn(e,n,r,"month");var t,a=[];for(t=0;t<12;t++)a[t]=Gn(e,t,r,"month");return a}function ft(e,n,r,t){typeof e=="boolean"?(Ee(n)&&(r=n,n=void 0),n=n||""):(n=e,r=n,e=!1,Ee(n)&&(r=n,n=void 0),n=n||"");var a=Ae(),s=e?a._week.dow:0,i,o=[];if(r!=null)return Gn(n,(r+s)%7,t,"day");for(i=0;i<7;i++)o[i]=Gn(n,(i+s)%7,t,"day");return o}function xg(e,n){return Is(e,n,"months")}function Rg(e,n){return Is(e,n,"monthsShort")}function Fg(e,n,r){return ft(e,n,r,"weekdays")}function qg(e,n,r){return ft(e,n,r,"weekdaysShort")}function Eg(e,n,r){return ft(e,n,r,"weekdaysMin")}Ue("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var n=e%10,r=F(e%100/10)===1?"th":n===1?"st":n===2?"nd":n===3?"rd":"th";return e+r}});k.lang=le("moment.lang is deprecated. Use moment.locale instead.",Ue);k.langData=le("moment.langData is deprecated. Use moment.localeData instead.",Ae);var Pe=Math.abs;function Og(){var e=this._data;return this._milliseconds=Pe(this._milliseconds),this._days=Pe(this._days),this._months=Pe(this._months),e.milliseconds=Pe(e.milliseconds),e.seconds=Pe(e.seconds),e.minutes=Pe(e.minutes),e.hours=Pe(e.hours),e.months=Pe(e.months),e.years=Pe(e.years),this}function js(e,n,r,t){var a=he(n,r);return e._milliseconds+=t*a._milliseconds,e._days+=t*a._days,e._months+=t*a._months,e._bubble()}function Mg(e,n){return js(this,e,n,1)}function Ag(e,n){return js(this,e,n,-1)}function Xt(e){return e<0?Math.floor(e):Math.ceil(e)}function Bg(){var e=this._milliseconds,n=this._days,r=this._months,t=this._data,a,s,i,o,l;return e>=0&&n>=0&&r>=0||e<=0&&n<=0&&r<=0||(e+=Xt(jr(r)+n)*864e5,n=0,r=0),t.milliseconds=e%1e3,a=se(e/1e3),t.seconds=a%60,s=se(a/60),t.minutes=s%60,i=se(s/60),t.hours=i%24,n+=se(i/24),l=se(Hs(n)),r+=l,n-=Xt(jr(l)),o=se(r/12),r%=12,t.days=n,t.months=r,t.years=o,this}function Hs(e){return e*4800/146097}function jr(e){return e*146097/4800}function Ig(e){if(!this.isValid())return NaN;var n,r,t=this._milliseconds;if(e=de(e),e==="month"||e==="quarter"||e==="year")switch(n=this._days+t/864e5,r=this._months+Hs(n),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(n=this._days+Math.round(jr(this._months)),e){case"week":return n/7+t/6048e5;case"day":return n+t/864e5;case"hour":return n*24+t/36e5;case"minute":return n*1440+t/6e4;case"second":return n*86400+t/1e3;case"millisecond":return Math.floor(n*864e5)+t;default:throw new Error("Unknown unit "+e)}}function Be(e){return function(){return this.as(e)}}var Cs=Be("ms"),jg=Be("s"),Hg=Be("m"),Cg=Be("h"),Lg=Be("d"),Ug=Be("w"),Yg=Be("M"),Gg=Be("Q"),Vg=Be("y"),Wg=Cs;function $g(){return he(this)}function zg(e){return e=de(e),this.isValid()?this[e+"s"]():NaN}function Ze(e){return function(){return this.isValid()?this._data[e]:NaN}}var Zg=Ze("milliseconds"),Kg=Ze("seconds"),Xg=Ze("minutes"),Jg=Ze("hours"),Qg=Ze("days"),ef=Ze("months"),nf=Ze("years");function rf(){return se(this.days()/7)}var Ne=Math.round,Je={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function tf(e,n,r,t,a){return a.relativeTime(n||1,!!r,e,t)}function af(e,n,r,t){var a=he(e).abs(),s=Ne(a.as("s")),i=Ne(a.as("m")),o=Ne(a.as("h")),l=Ne(a.as("d")),d=Ne(a.as("M")),u=Ne(a.as("w")),g=Ne(a.as("y")),f=s<=r.ss&&["s",s]||s<r.s&&["ss",s]||i<=1&&["m"]||i<r.m&&["mm",i]||o<=1&&["h"]||o<r.h&&["hh",o]||l<=1&&["d"]||l<r.d&&["dd",l];return r.w!=null&&(f=f||u<=1&&["w"]||u<r.w&&["ww",u]),f=f||d<=1&&["M"]||d<r.M&&["MM",d]||g<=1&&["y"]||["yy",g],f[2]=n,f[3]=+e>0,f[4]=t,tf.apply(null,f)}function sf(e){return e===void 0?Ne:typeof e=="function"?(Ne=e,!0):!1}function of(e,n){return Je[e]===void 0?!1:n===void 0?Je[e]:(Je[e]=n,e==="s"&&(Je.ss=n-1),!0)}function lf(e,n){if(!this.isValid())return this.localeData().invalidDate();var r=!1,t=Je,a,s;return typeof e=="object"&&(n=e,e=!1),typeof e=="boolean"&&(r=e),typeof n=="object"&&(t=Object.assign({},Je,n),n.s!=null&&n.ss==null&&(t.ss=n.s-1)),a=this.localeData(),s=af(this,!r,t,a),r&&(s=a.pastFuture(+this,s)),a.postformat(s)}var pr=Math.abs;function Ke(e){return(e>0)-(e<0)||+e}function ar(){if(!this.isValid())return this.localeData().invalidDate();var e=pr(this._milliseconds)/1e3,n=pr(this._days),r=pr(this._months),t,a,s,i,o=this.asSeconds(),l,d,u,g;return o?(t=se(e/60),a=se(t/60),e%=60,t%=60,s=se(r/12),r%=12,i=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=o<0?"-":"",d=Ke(this._months)!==Ke(o)?"-":"",u=Ke(this._days)!==Ke(o)?"-":"",g=Ke(this._milliseconds)!==Ke(o)?"-":"",l+"P"+(s?d+s+"Y":"")+(r?d+r+"M":"")+(n?u+n+"D":"")+(a||t||e?"T":"")+(a?g+a+"H":"")+(t?g+t+"M":"")+(e?g+i+"S":"")):"P0D"}var O=rr.prototype;O.isValid=em;O.abs=Og;O.add=Mg;O.subtract=Ag;O.as=Ig;O.asMilliseconds=Cs;O.asSeconds=jg;O.asMinutes=Hg;O.asHours=Cg;O.asDays=Lg;O.asWeeks=Ug;O.asMonths=Yg;O.asQuarters=Gg;O.asYears=Vg;O.valueOf=Wg;O._bubble=Bg;O.clone=$g;O.get=zg;O.milliseconds=Zg;O.seconds=Kg;O.minutes=Xg;O.hours=Jg;O.days=Qg;O.weeks=rf;O.months=ef;O.years=nf;O.humanize=lf;O.toISOString=ar;O.toString=ar;O.toJSON=ar;O.locale=Ns;O.localeData=Rs;O.toIsoString=le("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ar);O.lang=xs;_("X",0,0,"unix");_("x",0,0,"valueOf");c("x",Jn);c("X",xd);j("X",function(e,n,r){r._d=new Date(parseFloat(e)*1e3)});j("x",function(e,n,r){r._d=new Date(F(e))});//! moment.js
k.version="2.30.1";ld(L);k.fn=m;k.min=Ku;k.max=Xu;k.now=Ju;k.utc=we;k.unix=Pg;k.months=xg;k.isDate=Dn;k.locale=Ue;k.invalid=zn;k.duration=he;k.isMoment=ge;k.weekdays=Fg;k.parseZone=Ng;k.localeData=Ae;k.isDuration=An;k.monthsShort=Rg;k.weekdaysMin=Eg;k.defineLocale=st;k.updateLocale=Nu;k.locales=xu;k.weekdaysShort=qg;k.normalizeUnits=de;k.relativeTimeRounding=sf;k.relativeTimeThreshold=of;k.calendarFormat=Tm;k.prototype=m;k.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const df="_colMargin_1r8hu_1",Vn={colMargin:df},In=e=>e?k(e,Yr).format(Gr):"-",uf=(e,n,r,t)=>e&&Object.keys(n).length>0?In(Object.values(n)[0]):t?In(t):e?r?In(r):"-":null,ht=({soknad:e,termindato:n})=>{const r=e.fodselsdatoer?e.fodselsdatoer:{},t=Object.keys(r).length>0?"FodselsammenligningPanel.Fodselsdato":"FodselsammenligningPanel.Termindato",a=Object.keys(r).length>0?"FodselSammenligningOtherPanel.OpplysningerISoknad":"FodselSammenligningOtherPanel.TerminISoknad",s=G.useMemo(()=>uf(!!e,r,e.termindato,n),[e,r,n]);return y.jsxs(y.Fragment,{children:[y.jsx(Vr,{size:"small",children:y.jsx(te,{id:a})}),y.jsx(Za,{sixteenPx:!0}),y.jsx(Hn,{children:y.jsxs(jn,{children:[e.utstedtdato&&y.jsxs(be,{className:Vn.colMargin,children:[y.jsx(Qe,{size:"small",children:y.jsx(te,{id:"FodselsammenligningPanel.UstedtDato"})}),y.jsx(Se,{size:"small",children:In(e.utstedtdato)})]}),y.jsxs(be,{className:Vn.colMargin,children:[y.jsx(Qe,{size:"small",children:y.jsx(te,{id:t})}),y.jsx(Se,{size:"small",children:s})]}),y.jsxs(be,{children:[y.jsx(Qe,{size:"small",children:y.jsx(te,{id:"FodselsammenligningPanel.AntallBarn"})}),y.jsx(Se,{size:"small",children:e.antallBarn})]})]})})]})};ht.__docgenInfo={description:`FodselSammenligningOtherPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""}}};ht.__docgenInfo={description:`FodselSammenligningOtherPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""}}};const kr=e=>e?k(e,Yr).format(Gr):"-",mf=(e,n,r)=>{if(!n&&!r)return"";const t=r||{termindato:void 0,avklartBarn:[]};if(e){const a=t.termindato?t.termindato:n==null?void 0:n.termindato;return a?kr(a):void 0}return t.avklartBarn&&t.avklartBarn.length>0?kr(t.avklartBarn[0].fodselsdato):n!=null&&n.fodselsdatoer?kr(Object.values(n.fodselsdatoer)[0]):"-"},gf=(e,n,r)=>{if(!n&&!r)return 0;const t=r||{termindato:void 0,antallBarnTermin:void 0,avklartBarn:[]};return e?t.termindato?t.antallBarnTermin:n==null?void 0:n.antallBarn:t.avklartBarn&&t.avklartBarn.length>0?t.avklartBarn.length:n==null?void 0:n.antallBarn},pt=({vedtaksDatoSomSvangerskapsuke:e,soknadOriginalBehandling:n,familiehendelseOriginalBehandling:r})=>{const t=r&&!!r.termindato||!(n!=null&&n.fodselsdatoer)||Object.keys(n.fodselsdatoer).length===0,a=t?"FodselsammenligningPanel.Termindato":"FodselsammenligningPanel.Fodselsdato",s=mf(t,n,r),i=gf(t,n,r),o=r?(!r.avklartBarn||r.avklartBarn.length===0)&&!!e:!1;return y.jsxs(y.Fragment,{children:[y.jsx(Vr,{size:"small",children:y.jsx(te,{id:"FodselsammenligningPanel.Ytelsesvedtak"})}),y.jsx(Za,{sixteenPx:!0}),y.jsx(Hn,{children:y.jsxs(jn,{children:[o&&y.jsxs(be,{className:Vn.colMargin,children:[y.jsx(Qe,{size:"small",children:y.jsx(te,{id:"FodselsammenligningPanel.FodtISvangerskapsuke"})}),y.jsx(Se,{size:"small",children:e})]}),y.jsxs(be,{className:Vn.colMargin,children:[y.jsx(Qe,{size:"small",children:y.jsx(te,{id:a})}),y.jsx(Se,{size:"small",children:s??"-"})]}),y.jsxs(be,{children:[y.jsx(Qe,{size:"small",children:y.jsx(te,{id:"FodselsammenligningPanel.AntallBarn"})}),y.jsx(Se,{size:"small",children:i??"-"})]})]})})]})};pt.__docgenInfo={description:`FodselSammenligningRevurderingPanel

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
}>`},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};pt.__docgenInfo={description:`FodselSammenligningRevurderingPanel

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
}>`},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const ff="_noChildrenInTps_3z81w_1",hf="_colWidthLeft_3z81w_5",pf="_colWidthRight_3z81w_9",cr={noChildrenInTps:ff,colWidthLeft:hf,colWidthRight:pf},Jt=e=>e?k(e,Yr).format(Gr):"-",kt=({behandlingsTypeKode:e,avklartBarn:n,nrOfDodfodteBarn:r,soknad:t,vedtaksDatoSomSvangerskapsuke:a,termindato:s,soknadOriginalBehandling:i,familiehendelseOriginalBehandling:o})=>y.jsx(Hn,{children:y.jsxs(jn,{children:[y.jsxs(be,{className:cr.colWidthLeft,children:[e!==an.REVURDERING&&y.jsx(ht,{soknad:t,termindato:s}),e===an.REVURDERING&&y.jsx(pt,{soknadOriginalBehandling:i,familiehendelseOriginalBehandling:o,vedtaksDatoSomSvangerskapsuke:a})]}),y.jsxs(be,{className:cr.colWidthRight,children:[y.jsx(Hn,{children:y.jsxs(jn,{children:[y.jsx(be,{children:y.jsx(Vr,{size:"small",children:y.jsx(te,{id:"FodselsammenligningPanel.OpplysningerTPS"})})}),r>0&&y.jsx(be,{children:y.jsx(Ht,{variant:"info",children:y.jsx(te,{id:"FodselsammenligningPanel.Dodfodt"})})})]})}),n.length>0&&y.jsx(za,{noHover:!0,headerTextCodes:["FodselsammenligningPanel.Fodselsdato","FodselsammenligningPanel.Dodsdato"],children:n.map(l=>{const d=l.fodselsdato+l.dodsdato;return y.jsxs($a,{id:d,children:[y.jsx(en,{children:y.jsx(Se,{size:"small",children:Jt(l.fodselsdato)})}),y.jsx(en,{children:y.jsx(Se,{size:"small",children:l.dodsdato?Jt(l.dodsdato):"-"})}),y.jsx(en,{children:l.dodsdato&&y.jsx(Ht,{variant:"info",children:y.jsx(te,{id:"FodselsammenligningPanel.Dod"})})})]},d)})}),n.length===0&&y.jsx("div",{className:cr.noChildrenInTps,children:y.jsx(Se,{size:"small",children:"-"})})]})]})});kt.__docgenInfo={description:`FodselSammenlingningPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};kt.__docgenInfo={description:`FodselSammenlingningPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const kf={"FodselsammenligningPanel.AntallBarn":"Antall barn","FodselsammenligningPanel.Termindato":"Termindato","FodselsammenligningPanel.FodtISvangerskapsuke":"Født i svangerskapsuke","FodselsammenligningPanel.Svangerskapsuke":"Svangerskapsuke","FodselsammenligningPanel.OpplysningerTPS":"Opplysninger om fødsel fra folkeregisteret","FodselsammenligningPanel.Fodselsdato":"Fødselsdato","FodselsammenligningPanel.Dodsdato":"Dødsdato","FodselsammenligningPanel.UstedtDato":"Utstedt dato","FodselsammenligningPanel.Ytelsesvedtak":"Vedtak","FodselsammenligningPanel.Dodfodt":"Dødfødsel","FodselsammenligningPanel.Dod":"Død","FodselSammenligningOtherPanel.OpplysningerISoknad":"Opplysninger om fødsel fra søknaden","FodselSammenligningOtherPanel.TerminISoknad":"Opplysninger om termin oppgitt i søknaden"},cf=Oe(kf),ct=({behandlingsTypeKode:e,avklartBarn:n=[],termindato:r,vedtaksDatoSomSvangerskapsuke:t,soknad:a,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:i})=>{const o=n.reduce((l,d)=>l+(d.dodsdato?1:0),0);return y.jsx(ko,{value:cf,children:y.jsx(kt,{avklartBarn:n,termindato:r,vedtaksDatoSomSvangerskapsuke:t,nrOfDodfodteBarn:o,behandlingsTypeKode:e,soknad:a,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:i})})};ct.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningIndex",props:{behandlingsTypeKode:{required:!0,tsType:{name:"string"},description:""},avklartBarn:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};ct.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningIndex",props:{behandlingsTypeKode:{required:!0,tsType:{name:"string"},description:""},avklartBarn:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const yf=[{fodselsdato:"2019-01-10",dodsdato:"2019-01-10",fnr:"1213200001"}],vf={fodselsdatoer:{1:"2019-01-10"},termindato:"2019-01-01",utstedtdato:"2019-01-02",antallBarn:1},bf={avklartBarn:[{fodselsdato:"2019-01-10"}],termindato:"2019-01-01",antallBarnTermin:1},Df={title:"prosessOgFakta/prosess-fakta-fodsel-sammenligning",component:ct,args:{avklartBarn:yf,termindato:"2019-01-01",soknad:vf,familiehendelseOriginalBehandling:bf}},He={args:{behandlingsTypeKode:an.REVURDERING}},Ce={args:{behandlingsTypeKode:an.FORSTEGANGSSOKNAD}},Le={args:{behandlingsTypeKode:an.REVURDERING,vedtaksDatoSomSvangerskapsuke:43,familiehendelseOriginalBehandling:{avklartBarn:[],termindato:"2019-01-01",antallBarnTermin:1}}};var Qt,ea,na;He.parameters={...He.parameters,docs:{...(Qt=He.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
  args: {
    behandlingsTypeKode: BehandlingType.REVURDERING
  }
}`,...(na=(ea=He.parameters)==null?void 0:ea.docs)==null?void 0:na.source}}};var ra,ta,aa;Ce.parameters={...Ce.parameters,docs:{...(ra=Ce.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  args: {
    behandlingsTypeKode: BehandlingType.FORSTEGANGSSOKNAD
  }
}`,...(aa=(ta=Ce.parameters)==null?void 0:ta.docs)==null?void 0:aa.source}}};var sa,ia,oa;Le.parameters={...Le.parameters,docs:{...(sa=Le.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  args: {
    behandlingsTypeKode: BehandlingType.REVURDERING,
    vedtaksDatoSomSvangerskapsuke: 43,
    familiehendelseOriginalBehandling: {
      avklartBarn: [] as AvklartBarn[],
      termindato: '2019-01-01',
      antallBarnTermin: 1
    } as FamilieHendelse
  }
}`,...(oa=(ia=Le.parameters)==null?void 0:ia.docs)==null?void 0:oa.source}}};var la,da,ua;He.parameters={...He.parameters,docs:{...(la=He.parameters)==null?void 0:la.docs,source:{originalSource:`{
  args: {
    behandlingsTypeKode: BehandlingType.REVURDERING
  }
}`,...(ua=(da=He.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};var ma,ga,fa;Ce.parameters={...Ce.parameters,docs:{...(ma=Ce.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  args: {
    behandlingsTypeKode: BehandlingType.FORSTEGANGSSOKNAD
  }
}`,...(fa=(ga=Ce.parameters)==null?void 0:ga.docs)==null?void 0:fa.source}}};var ha,pa,ka;Le.parameters={...Le.parameters,docs:{...(ha=Le.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  args: {
    behandlingsTypeKode: BehandlingType.REVURDERING,
    vedtaksDatoSomSvangerskapsuke: 43,
    familiehendelseOriginalBehandling: {
      avklartBarn: [] as AvklartBarn[],
      termindato: '2019-01-01',
      antallBarnTermin: 1
    } as FamilieHendelse
  }
}`,...(ka=(pa=Le.parameters)==null?void 0:pa.docs)==null?void 0:ka.source}}};const Pf=["PanelForNårBehandlingstypeErRevurdering","PanelForNårBehandlingstypeErFørstegangssoknad","PanelForMedVisningAvSvangerskapsuke"];export{Le as PanelForMedVisningAvSvangerskapsuke,Ce as PanelForNårBehandlingstypeErFørstegangssoknad,He as PanelForNårBehandlingstypeErRevurdering,Pf as __namedExportsOrder,Df as default};
