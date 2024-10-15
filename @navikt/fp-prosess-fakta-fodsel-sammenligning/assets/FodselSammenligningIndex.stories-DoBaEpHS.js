import{j as y}from"./jsx-runtime-DEdD30eg.js";import{r as B,R as X}from"./index-RYns6xqu.js";import{a as Ut}from"./dayjs.min-OEbeFnQb.js";const ct={FORSTEGANGSSOKNAD:"BT-002",KLAGE:"BT-003",REVURDERING:"BT-004",DOKUMENTINNSYN:"BT-006",TILBAKEKREVING:"BT-007",ANKE:"BT-008",TILBAKEKREVING_REVURDERING:"BT-009"};var cn=function(e,t){return cn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])},cn(e,t)};function me(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");cn(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var k=function(){return k=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},k.apply(this,arguments)};function nt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function ye(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,s;r<a;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}function Wr(e,t,n){if(n===void 0&&(n=Error),!e)throw new n(t)}var E;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(E||(E={}));var j;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(j||(j={}));var rt;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(rt||(rt={}));function mr(e){return e.type===j.literal}function Es(e){return e.type===j.argument}function Vr(e){return e.type===j.number}function $r(e){return e.type===j.date}function zr(e){return e.type===j.time}function Zr(e){return e.type===j.select}function Xr(e){return e.type===j.plural}function Ps(e){return e.type===j.pound}function Kr(e){return e.type===j.tag}function Jr(e){return!!(e&&typeof e=="object"&&e.type===rt.number)}function pn(e){return!!(e&&typeof e=="object"&&e.type===rt.dateTime)}var Qr=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,Ms=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function Os(e){var t={};return e.replace(Ms,function(n){var r=n.length;switch(n[0]){case"G":t.era=r===4?"long":r===5?"narrow":"short";break;case"y":t.year=r===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=r===4?"long":r===5?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][r-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][r-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][r-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][r-1];break;case"s":t.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),t}var Ns=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function Rs(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var t=e.split(Ns).filter(function(m){return m.length>0}),n=[],r=0,a=t;r<a.length;r++){var s=a[r],i=s.split("/");if(i.length===0)throw new Error("Invalid number skeleton");for(var o=i[0],l=i.slice(1),u=0,d=l;u<d.length;u++){var f=d[u];if(f.length===0)throw new Error("Invalid number skeleton")}n.push({stem:o,options:l})}return n}function Fs(e){return e.replace(/^(.*?)-/,"")}var fr=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,ea=/^(@+)?(\+|#+)?[rs]?$/g,As=/(\*)(0+)|(#+)(0+)|(0+)/g,ta=/^(0+)$/;function gr(e){var t={};return e[e.length-1]==="r"?t.roundingPriority="morePrecision":e[e.length-1]==="s"&&(t.roundingPriority="lessPrecision"),e.replace(ea,function(n,r,a){return typeof a!="string"?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):a==="+"?t.minimumSignificantDigits=r.length:r[0]==="#"?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+(typeof a=="string"?a.length:0)),""}),t}function na(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Is(e){var t;if(e[0]==="E"&&e[1]==="E"?(t={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(t={notation:"scientific"},e=e.slice(1)),t){var n=e.slice(0,2);if(n==="+!"?(t.signDisplay="always",e=e.slice(2)):n==="+?"&&(t.signDisplay="exceptZero",e=e.slice(2)),!ta.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function cr(e){var t={},n=na(e);return n||t}function Hs(e){for(var t={},n=0,r=e;n<r.length;n++){var a=r[n];switch(a.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=a.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=Fs(a.options[0]);continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=k(k(k({},t),{notation:"scientific"}),a.options.reduce(function(l,u){return k(k({},l),cr(u))},{}));continue;case"engineering":t=k(k(k({},t),{notation:"engineering"}),a.options.reduce(function(l,u){return k(k({},l),cr(u))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":t.roundingMode="floor";continue;case"rounding-mode-ceiling":t.roundingMode="ceil";continue;case"rounding-mode-down":t.roundingMode="trunc";continue;case"rounding-mode-up":t.roundingMode="expand";continue;case"rounding-mode-half-even":t.roundingMode="halfEven";continue;case"rounding-mode-half-down":t.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":t.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(As,function(l,u,d,f,m,S){if(u)t.minimumIntegerDigits=d.length;else{if(f&&m)throw new Error("We currently do not support maximum integer digits");if(S)throw new Error("We currently do not support exact integer digits")}return""});continue}if(ta.test(a.stem)){t.minimumIntegerDigits=a.stem.length;continue}if(fr.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(fr,function(l,u,d,f,m,S){return d==="*"?t.minimumFractionDigits=u.length:f&&f[0]==="#"?t.maximumFractionDigits=f.length:m&&S?(t.minimumFractionDigits=m.length,t.maximumFractionDigits=m.length+S.length):(t.minimumFractionDigits=u.length,t.maximumFractionDigits=u.length),""});var s=a.options[0];s==="w"?t=k(k({},t),{trailingZeroDisplay:"stripIfInteger"}):s&&(t=k(k({},t),gr(s)));continue}if(ea.test(a.stem)){t=k(k({},t),gr(a.stem));continue}var i=na(a.stem);i&&(t=k(k({},t),i));var o=Is(a.stem);o&&(t=k(k({},t),o))}return t}var Dt={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Bs(e,t){for(var n="",r=0;r<e.length;r++){var a=e.charAt(r);if(a==="j"){for(var s=0;r+1<e.length&&e.charAt(r+1)===a;)s++,r++;var i=1+(s&1),o=s<2?1:3+(s>>1),l="a",u=Cs(t);for((u=="H"||u=="k")&&(o=0);o-- >0;)n+=l;for(;i-- >0;)n=u+n}else a==="J"?n+="H":n+=a}return n}function Cs(e){var t=e.hourCycle;if(t===void 0&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var n=e.language,r;n!=="root"&&(r=e.maximize().region);var a=Dt[r||""]||Dt[n||""]||Dt["".concat(n,"-001")]||Dt["001"];return a[0]}var sn,js=new RegExp("^".concat(Qr.source,"*")),Ls=new RegExp("".concat(Qr.source,"*$"));function P(e,t){return{start:e,end:t}}var qs=!!String.prototype.startsWith&&"_a".startsWith("a",1),Ys=!!String.fromCodePoint,Us=!!Object.fromEntries,Gs=!!String.prototype.codePointAt,Ws=!!String.prototype.trimStart,Vs=!!String.prototype.trimEnd,$s=!!Number.isSafeInteger,zs=$s?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},yn=!0;try{var Zs=aa("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");yn=((sn=Zs.exec("a"))===null||sn===void 0?void 0:sn[0])==="a"}catch{yn=!1}var pr=qs?function(t,n,r){return t.startsWith(n,r)}:function(t,n,r){return t.slice(r,r+n.length)===n},vn=Ys?String.fromCodePoint:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var r="",a=t.length,s=0,i;a>s;){if(i=t[s++],i>1114111)throw RangeError(i+" is not a valid code point");r+=i<65536?String.fromCharCode(i):String.fromCharCode(((i-=65536)>>10)+55296,i%1024+56320)}return r},yr=Us?Object.fromEntries:function(t){for(var n={},r=0,a=t;r<a.length;r++){var s=a[r],i=s[0],o=s[1];n[i]=o}return n},ra=Gs?function(t,n){return t.codePointAt(n)}:function(t,n){var r=t.length;if(!(n<0||n>=r)){var a=t.charCodeAt(n),s;return a<55296||a>56319||n+1===r||(s=t.charCodeAt(n+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},Xs=Ws?function(t){return t.trimStart()}:function(t){return t.replace(js,"")},Ks=Vs?function(t){return t.trimEnd()}:function(t){return t.replace(Ls,"")};function aa(e,t){return new RegExp(e,t)}var kn;if(yn){var vr=aa("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");kn=function(t,n){var r;vr.lastIndex=n;var a=vr.exec(t);return(r=a[1])!==null&&r!==void 0?r:""}}else kn=function(t,n){for(var r=[];;){var a=ra(t,n);if(a===void 0||sa(a)||ti(a))break;r.push(a),n+=a>=65536?2:1}return vn.apply(void 0,r)};var Js=function(){function e(t,n){n===void 0&&(n={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!n.ignoreTag,this.locale=n.locale,this.requiresOtherClause=!!n.requiresOtherClause,this.shouldParseSkeletons=!!n.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(t,n,r){for(var a=[];!this.isEOF();){var s=this.char();if(s===123){var i=this.parseArgument(t,r);if(i.err)return i;a.push(i.val)}else{if(s===125&&t>0)break;if(s===35&&(n==="plural"||n==="selectordinal")){var o=this.clonePosition();this.bump(),a.push({type:j.pound,location:P(o,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(r)break;return this.error(E.UNMATCHED_CLOSING_TAG,P(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&bn(this.peek()||0)){var i=this.parseTag(t,n);if(i.err)return i;a.push(i.val)}else{var i=this.parseLiteral(t,n);if(i.err)return i;a.push(i.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(t,n){var r=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:j.literal,value:"<".concat(a,"/>"),location:P(r,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(t+1,n,!0);if(s.err)return s;var i=s.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!bn(this.char()))return this.error(E.INVALID_TAG,P(o,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return a!==u?this.error(E.UNMATCHED_CLOSING_TAG,P(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:j.tag,value:a,children:i,location:P(r,this.clonePosition())},err:null}:this.error(E.INVALID_TAG,P(o,this.clonePosition())))}else return this.error(E.UNCLOSED_TAG,P(r,this.clonePosition()))}else return this.error(E.INVALID_TAG,P(r,this.clonePosition()))},e.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&ei(this.char());)this.bump();return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(t,n){for(var r=this.clonePosition(),a="";;){var s=this.tryParseQuote(n);if(s){a+=s;continue}var i=this.tryParseUnquoted(t,n);if(i){a+=i;continue}var o=this.tryParseLeftAngleBracket();if(o){a+=o;continue}break}var l=P(r,this.clonePosition());return{val:{type:j.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Qs(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(t){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(t==="plural"||t==="selectordinal")break;return null;default:return null}this.bump();var n=[this.char()];for(this.bump();!this.isEOF();){var r=this.char();if(r===39)if(this.peek()===39)n.push(39),this.bump();else{this.bump();break}else n.push(r);this.bump()}return vn.apply(void 0,n)},e.prototype.tryParseUnquoted=function(t,n){if(this.isEOF())return null;var r=this.char();return r===60||r===123||r===35&&(n==="plural"||n==="selectordinal")||r===125&&t>0?null:(this.bump(),vn(r))},e.prototype.parseArgument=function(t,n){var r=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE,P(r,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(E.EMPTY_ARGUMENT,P(r,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(E.MALFORMED_ARGUMENT,P(r,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE,P(r,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:j.argument,value:a,location:P(r,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE,P(r,this.clonePosition())):this.parseArgumentOptions(t,n,a,r);default:return this.error(E.MALFORMED_ARGUMENT,P(r,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),n=this.offset(),r=kn(this.message,n),a=n+r.length;this.bumpTo(a);var s=this.clonePosition(),i=P(t,s);return{value:r,location:i}},e.prototype.parseArgumentOptions=function(t,n,r,a){var s,i=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(E.EXPECT_ARGUMENT_TYPE,P(i,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),f=this.parseSimpleArgStyleIfPossible();if(f.err)return f;var m=Ks(f.val);if(m.length===0)return this.error(E.EXPECT_ARGUMENT_STYLE,P(this.clonePosition(),this.clonePosition()));var S=P(d,this.clonePosition());u={style:m,styleLocation:S}}var w=this.tryParseArgumentClose(a);if(w.err)return w;var c=P(a,this.clonePosition());if(u&&pr(u==null?void 0:u.style,"::",0)){var O=Xs(u.style.slice(2));if(o==="number"){var f=this.parseNumberSkeletonFromString(O,u.styleLocation);return f.err?f:{val:{type:j.number,value:r,location:c,style:f.val},err:null}}else{if(O.length===0)return this.error(E.EXPECT_DATE_TIME_SKELETON,c);var x=O;this.locale&&(x=Bs(O,this.locale));var m={type:rt.dateTime,pattern:x,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?Os(x):{}},C=o==="date"?j.date:j.time;return{val:{type:C,value:r,location:c,style:m},err:null}}}return{val:{type:o==="number"?j.number:o==="date"?j.date:j.time,value:r,location:c,style:(s=u==null?void 0:u.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var N=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(E.EXPECT_SELECT_ARGUMENT_OPTIONS,P(N,k({},N)));this.bumpSpace();var le=this.parseIdentifierIfPossible(),K=0;if(o!=="select"&&le.value==="offset"){if(!this.bumpIf(":"))return this.error(E.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,P(this.clonePosition(),this.clonePosition()));this.bumpSpace();var f=this.tryParseDecimalInteger(E.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,E.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(f.err)return f;this.bumpSpace(),le=this.parseIdentifierIfPossible(),K=f.val}var R=this.tryParsePluralOrSelectOptions(t,o,n,le);if(R.err)return R;var w=this.tryParseArgumentClose(a);if(w.err)return w;var _=P(a,this.clonePosition());return o==="select"?{val:{type:j.select,value:r,options:yr(R.val),location:_},err:null}:{val:{type:j.plural,value:r,options:yr(R.val),offset:K,pluralType:o==="plural"?"cardinal":"ordinal",location:_},err:null}}default:return this.error(E.INVALID_ARGUMENT_TYPE,P(i,l))}},e.prototype.tryParseArgumentClose=function(t){return this.isEOF()||this.char()!==125?this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE,P(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,n=this.clonePosition();!this.isEOF();){var r=this.char();switch(r){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(E.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,P(a,this.clonePosition()));this.bump();break}case 123:{t+=1,this.bump();break}case 125:{if(t>0)t-=1;else return{val:this.message.slice(n.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(n.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(t,n){var r=[];try{r=Rs(t)}catch{return this.error(E.INVALID_NUMBER_SKELETON,n)}return{val:{type:rt.number,tokens:r,location:n,parsedOptions:this.shouldParseSkeletons?Hs(r):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(t,n,r,a){for(var s,i=!1,o=[],l=new Set,u=a.value,d=a.location;;){if(u.length===0){var f=this.clonePosition();if(n!=="select"&&this.bumpIf("=")){var m=this.tryParseDecimalInteger(E.EXPECT_PLURAL_ARGUMENT_SELECTOR,E.INVALID_PLURAL_ARGUMENT_SELECTOR);if(m.err)return m;d=P(f,this.clonePosition()),u=this.message.slice(f.offset,this.offset())}else break}if(l.has(u))return this.error(n==="select"?E.DUPLICATE_SELECT_ARGUMENT_SELECTOR:E.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);u==="other"&&(i=!0),this.bumpSpace();var S=this.clonePosition();if(!this.bumpIf("{"))return this.error(n==="select"?E.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:E.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,P(this.clonePosition(),this.clonePosition()));var w=this.parseMessage(t+1,n,r);if(w.err)return w;var c=this.tryParseArgumentClose(S);if(c.err)return c;o.push([u,{value:w.val,location:P(S,this.clonePosition())}]),l.add(u),this.bumpSpace(),s=this.parseIdentifierIfPossible(),u=s.value,d=s.location}return o.length===0?this.error(n==="select"?E.EXPECT_SELECT_ARGUMENT_SELECTOR:E.EXPECT_PLURAL_ARGUMENT_SELECTOR,P(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!i?this.error(E.MISSING_OTHER_CLAUSE,P(this.clonePosition(),this.clonePosition())):{val:o,err:null}},e.prototype.tryParseDecimalInteger=function(t,n){var r=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);for(var s=!1,i=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)s=!0,i=i*10+(o-48),this.bump();else break}var l=P(a,this.clonePosition());return s?(i*=r,zs(i)?{val:i,err:null}:this.error(n,l)):this.error(t,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var n=ra(this.message,t);if(n===void 0)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return n},e.prototype.error=function(t,n){return{val:null,err:{kind:t,message:this.message,location:n}}},e.prototype.bump=function(){if(!this.isEOF()){var t=this.char();t===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},e.prototype.bumpIf=function(t){if(pr(this.message,t,this.offset())){for(var n=0;n<t.length;n++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(t){var n=this.offset(),r=this.message.indexOf(t,n);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var n=this.offset();if(n===t)break;if(n>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&sa(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),n=this.offset(),r=this.message.charCodeAt(n+(t>=65536?2:1));return r??null},e}();function bn(e){return e>=97&&e<=122||e>=65&&e<=90}function Qs(e){return bn(e)||e===47}function ei(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function sa(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function ti(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function _n(e){e.forEach(function(t){if(delete t.location,Zr(t)||Xr(t))for(var n in t.options)delete t.options[n].location,_n(t.options[n].value);else Vr(t)&&Jr(t.style)||($r(t)||zr(t))&&pn(t.style)?delete t.style.location:Kr(t)&&_n(t.children)})}function ni(e,t){t===void 0&&(t={}),t=k({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var n=new Js(e,t).parse();if(n.err){var r=SyntaxError(E[n.err.kind]);throw r.location=n.err.location,r.originalMessage=n.err.message,r}return t!=null&&t.captureLocation||_n(n.val),n.val}function ce(e,t){var n=t&&t.cache?t.cache:li,r=t&&t.serializer?t.serializer:oi,a=t&&t.strategy?t.strategy:ai;return a(e,{cache:n,serializer:r})}function ri(e){return e==null||typeof e=="number"||typeof e=="boolean"}function ia(e,t,n,r){var a=ri(r)?r:n(r),s=t.get(a);return typeof s>"u"&&(s=e.call(this,r),t.set(a,s)),s}function oa(e,t,n){var r=Array.prototype.slice.call(arguments,3),a=n(r),s=t.get(a);return typeof s>"u"&&(s=e.apply(this,r),t.set(a,s)),s}function Fn(e,t,n,r,a){return n.bind(t,e,r,a)}function ai(e,t){var n=e.length===1?ia:oa;return Fn(e,this,n,t.cache.create(),t.serializer)}function si(e,t){return Fn(e,this,oa,t.cache.create(),t.serializer)}function ii(e,t){return Fn(e,this,ia,t.cache.create(),t.serializer)}var oi=function(){return JSON.stringify(arguments)};function An(){this.cache=Object.create(null)}An.prototype.get=function(e){return this.cache[e]};An.prototype.set=function(e,t){this.cache[e]=t};var li={create:function(){return new An}},pe={variadic:si,monadic:ii},_e;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(_e||(_e={}));var je=function(e){me(t,e);function t(n,r,a){var s=e.call(this,n)||this;return s.code=r,s.originalMessage=a,s}return t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),kr=function(e){me(t,e);function t(n,r,a,s){return e.call(this,'Invalid values for "'.concat(n,'": "').concat(r,'". Options are "').concat(Object.keys(a).join('", "'),'"'),_e.INVALID_VALUE,s)||this}return t}(je),ui=function(e){me(t,e);function t(n,r,a){return e.call(this,'Value for "'.concat(n,'" must be of type ').concat(r),_e.INVALID_VALUE,a)||this}return t}(je),di=function(e){me(t,e);function t(n,r){return e.call(this,'The intl string context variable "'.concat(n,'" was not provided to the string "').concat(r,'"'),_e.MISSING_VALUE,r)||this}return t}(je),Z;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(Z||(Z={}));function hi(e){return e.length<2?e:e.reduce(function(t,n){var r=t[t.length-1];return!r||r.type!==Z.literal||n.type!==Z.literal?t.push(n):r.value+=n.value,t},[])}function la(e){return typeof e=="function"}function Ot(e,t,n,r,a,s,i){if(e.length===1&&mr(e[0]))return[{type:Z.literal,value:e[0].value}];for(var o=[],l=0,u=e;l<u.length;l++){var d=u[l];if(mr(d)){o.push({type:Z.literal,value:d.value});continue}if(Ps(d)){typeof s=="number"&&o.push({type:Z.literal,value:n.getNumberFormat(t).format(s)});continue}var f=d.value;if(!(a&&f in a))throw new di(f,i);var m=a[f];if(Es(d)){(!m||typeof m=="string"||typeof m=="number")&&(m=typeof m=="string"||typeof m=="number"?String(m):""),o.push({type:typeof m=="string"?Z.literal:Z.object,value:m});continue}if($r(d)){var S=typeof d.style=="string"?r.date[d.style]:pn(d.style)?d.style.parsedOptions:void 0;o.push({type:Z.literal,value:n.getDateTimeFormat(t,S).format(m)});continue}if(zr(d)){var S=typeof d.style=="string"?r.time[d.style]:pn(d.style)?d.style.parsedOptions:r.time.medium;o.push({type:Z.literal,value:n.getDateTimeFormat(t,S).format(m)});continue}if(Vr(d)){var S=typeof d.style=="string"?r.number[d.style]:Jr(d.style)?d.style.parsedOptions:void 0;S&&S.scale&&(m=m*(S.scale||1)),o.push({type:Z.literal,value:n.getNumberFormat(t,S).format(m)});continue}if(Kr(d)){var w=d.children,c=d.value,O=a[c];if(!la(O))throw new ui(c,"function",i);var x=Ot(w,t,n,r,a,s),C=O(x.map(function(K){return K.value}));Array.isArray(C)||(C=[C]),o.push.apply(o,C.map(function(K){return{type:typeof K=="string"?Z.literal:Z.object,value:K}}))}if(Zr(d)){var N=d.options[m]||d.options.other;if(!N)throw new kr(d.value,m,Object.keys(d.options),i);o.push.apply(o,Ot(N.value,t,n,r,a));continue}if(Xr(d)){var N=d.options["=".concat(m)];if(!N){if(!Intl.PluralRules)throw new je(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,_e.MISSING_INTL_API,i);var le=n.getPluralRules(t,{type:d.pluralType}).select(m-(d.offset||0));N=d.options[le]||d.options.other}if(!N)throw new kr(d.value,m,Object.keys(d.options),i);o.push.apply(o,Ot(N.value,t,n,r,a,m-(d.offset||0)));continue}}return hi(o)}function mi(e,t){return t?k(k(k({},e||{}),t||{}),Object.keys(e).reduce(function(n,r){return n[r]=k(k({},e[r]),t[r]||{}),n},{})):e}function fi(e,t){return t?Object.keys(e).reduce(function(n,r){return n[r]=mi(e[r],t[r]),n},k({},e)):e}function on(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}function gi(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:ce(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.NumberFormat).bind.apply(t,ye([void 0],n,!1)))},{cache:on(e.number),strategy:pe.variadic}),getDateTimeFormat:ce(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.DateTimeFormat).bind.apply(t,ye([void 0],n,!1)))},{cache:on(e.dateTime),strategy:pe.variadic}),getPluralRules:ce(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.PluralRules).bind.apply(t,ye([void 0],n,!1)))},{cache:on(e.pluralRules),strategy:pe.variadic})}}var ua=function(){function e(t,n,r,a){var s=this;if(n===void 0&&(n=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var u=s.formatToParts(l);if(u.length===1)return u[0].value;var d=u.reduce(function(f,m){return!f.length||m.type!==Z.literal||typeof f[f.length-1]!="string"?f.push(m.value):f[f.length-1]+=m.value,f},[]);return d.length<=1?d[0]||"":d},this.formatToParts=function(l){return Ot(s.ast,s.locales,s.formatters,s.formats,l,void 0,s.message)},this.resolvedOptions=function(){var l;return{locale:((l=s.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=n,this.resolvedLocale=e.resolveLocale(n),typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var i=a||{};i.formatters;var o=nt(i,["formatters"]);this.ast=e.__parse(t,k(k({},o),{locale:this.resolvedLocale}))}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=fi(e.formats,r),this.formatters=a&&a.formatters||gi(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(t){if(!(typeof Intl.Locale>"u")){var n=Intl.NumberFormat.supportedLocalesOf(t);return n.length>0?new Intl.Locale(n[0]):new Intl.Locale(typeof t=="string"?t:t[0])}},e.__parse=ni,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Ge;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Ge||(Ge={}));var bt=function(e){me(t,e);function t(n,r,a){var s=this,i=a?a instanceof Error?a:new Error(String(a)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(n,"] ").concat(r,`
`).concat(i?`
`.concat(i.message,`
`).concat(i.stack):""))||this,s.code=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,t),s}return t}(Error),ci=function(e){me(t,e);function t(n,r){return e.call(this,Ge.UNSUPPORTED_FORMATTER,n,r)||this}return t}(bt),pi=function(e){me(t,e);function t(n,r){return e.call(this,Ge.INVALID_CONFIG,n,r)||this}return t}(bt),br=function(e){me(t,e);function t(n,r){return e.call(this,Ge.MISSING_DATA,n,r)||this}return t}(bt),se=function(e){me(t,e);function t(n,r,a){var s=e.call(this,Ge.FORMAT_ERROR,"".concat(n,`
Locale: `).concat(r,`
`),a)||this;return s.locale=r,s}return t}(bt),ln=function(e){me(t,e);function t(n,r,a,s){var i=e.call(this,"".concat(n,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),r,s)||this;return i.descriptor=a,i.locale=r,i}return t}(se),yi=function(e){me(t,e);function t(n,r){var a=e.call(this,Ge.MISSING_TRANSLATION,'Missing message: "'.concat(n.id,'" for locale "').concat(r,'", using ').concat(n.defaultMessage?"default message (".concat(typeof n.defaultMessage=="string"?n.defaultMessage:n.defaultMessage.map(function(s){var i;return(i=s.value)!==null&&i!==void 0?i:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=n,a}return t}(bt);function We(e,t,n){return n===void 0&&(n={}),t.reduce(function(r,a){return a in e?r[a]=e[a]:a in n&&(r[a]=n[a]),r},{})}var vi=function(e){},ki=function(e){},da={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:vi,onWarn:ki};function ha(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Le(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}function bi(e){e===void 0&&(e=ha());var t=Intl.RelativeTimeFormat,n=Intl.ListFormat,r=Intl.DisplayNames,a=ce(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.DateTimeFormat).bind.apply(o,ye([void 0],l,!1)))},{cache:Le(e.dateTime),strategy:pe.variadic}),s=ce(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.NumberFormat).bind.apply(o,ye([void 0],l,!1)))},{cache:Le(e.number),strategy:pe.variadic}),i=ce(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.PluralRules).bind.apply(o,ye([void 0],l,!1)))},{cache:Le(e.pluralRules),strategy:pe.variadic});return{getDateTimeFormat:a,getNumberFormat:s,getMessageFormat:ce(function(o,l,u,d){return new ua(o,l,u,k({formatters:{getNumberFormat:s,getDateTimeFormat:a,getPluralRules:i}},d||{}))},{cache:Le(e.message),strategy:pe.variadic}),getRelativeTimeFormat:ce(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(t.bind.apply(t,ye([void 0],o,!1)))},{cache:Le(e.relativeTime),strategy:pe.variadic}),getPluralRules:i,getListFormat:ce(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(n.bind.apply(n,ye([void 0],o,!1)))},{cache:Le(e.list),strategy:pe.variadic}),getDisplayNames:ce(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(r.bind.apply(r,ye([void 0],o,!1)))},{cache:Le(e.displayNames),strategy:pe.variadic})}}function In(e,t,n,r){var a=e&&e[t],s;if(a&&(s=a[n]),s)return s;r(new ci("No ".concat(t," format named: ").concat(n)))}function Et(e,t){return Object.keys(e).reduce(function(n,r){return n[r]=k({timeZone:t},e[r]),n},{})}function _r(e,t){var n=Object.keys(k(k({},e),t));return n.reduce(function(r,a){return r[a]=k(k({},e[a]||{}),t[a]||{}),r},{})}function Sr(e,t){if(!t)return e;var n=ua.formats;return k(k(k({},n),e),{date:_r(Et(n.date,t),Et(e.date||{},t)),time:_r(Et(n.time,t),Et(e.time||{},t))})}var Sn=function(e,t,n,r,a){var s=e.locale,i=e.formats,o=e.messages,l=e.defaultLocale,u=e.defaultFormats,d=e.fallbackOnEmptyString,f=e.onError,m=e.timeZone,S=e.defaultRichTextElements;n===void 0&&(n={id:""});var w=n.id,c=n.defaultMessage;Wr(!!w,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var O=String(w),x=o&&Object.prototype.hasOwnProperty.call(o,O)&&o[O];if(Array.isArray(x)&&x.length===1&&x[0].type===j.literal)return x[0].value;if(!r&&x&&typeof x=="string"&&!S)return x.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=k(k({},S),r||{}),i=Sr(i,m),u=Sr(u,m),!x){if(d===!1&&x==="")return x;if((!c||s&&s.toLowerCase()!==l.toLowerCase())&&f(new yi(n,s)),c)try{var C=t.getMessageFormat(c,l,u,a);return C.format(r)}catch(N){return f(new ln('Error formatting default message for: "'.concat(O,'", rendering default message verbatim'),s,n,N)),typeof c=="string"?c:O}return O}try{var C=t.getMessageFormat(x,s,i,k({formatters:t},a||{}));return C.format(r)}catch(N){f(new ln('Error formatting message: "'.concat(O,'", using ').concat(c?"default message":"id"," as fallback."),s,n,N))}if(c)try{var C=t.getMessageFormat(c,l,u,a);return C.format(r)}catch(N){f(new ln('Error formatting the default message for: "'.concat(O,'", rendering message verbatim'),s,n,N))}return typeof x=="string"?x:typeof c=="string"?c:O},ma=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Gt(e,t,n,r){var a=e.locale,s=e.formats,i=e.onError,o=e.timeZone;r===void 0&&(r={});var l=r.format,u=k(k({},o&&{timeZone:o}),l&&In(s,t,l,i)),d=We(r,ma,u);return t==="time"&&!d.hour&&!d.minute&&!d.second&&!d.timeStyle&&!d.dateStyle&&(d=k(k({},d),{hour:"numeric",minute:"numeric"})),n(a,d)}function _i(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Gt(e,"date",t,i).format(o)}catch(l){e.onError(new se("Error formatting date.",e.locale,l))}return String(o)}function Si(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Gt(e,"time",t,i).format(o)}catch(l){e.onError(new se("Error formatting time.",e.locale,l))}return String(o)}function Ti(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=n[2],o=i===void 0?{}:i,l=e.timeZone,u=e.locale,d=e.onError,f=We(o,ma,l?{timeZone:l}:{});try{return t(u,f).formatRange(a,s)}catch(m){d(new se("Error formatting date time range.",e.locale,m))}return String(a)}function wi(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Gt(e,"date",t,i).formatToParts(o)}catch(l){e.onError(new se("Error formatting date.",e.locale,l))}return[]}function xi(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Gt(e,"time",t,i).formatToParts(o)}catch(l){e.onError(new se("Error formatting time.",e.locale,l))}return[]}var Di=["style","type","fallback","languageDisplay"];function Ei(e,t,n,r){var a=e.locale,s=e.onError,i=Intl.DisplayNames;i||s(new je(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,_e.MISSING_INTL_API));var o=We(r,Di);try{return t(a,o).of(n)}catch(l){s(new se("Error formatting display name.",a,l))}}var Pi=["type","style"],Tr=Date.now();function Mi(e){return"".concat(Tr,"_").concat(e,"_").concat(Tr)}function Oi(e,t,n,r){r===void 0&&(r={});var a=fa(e,t,n,r).reduce(function(s,i){var o=i.value;return typeof o!="string"?s.push(o):typeof s[s.length-1]=="string"?s[s.length-1]+=o:s.push(o),s},[]);return a.length===1?a[0]:a.length===0?"":a}function fa(e,t,n,r){var a=e.locale,s=e.onError;r===void 0&&(r={});var i=Intl.ListFormat;i||s(new je(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,_e.MISSING_INTL_API));var o=We(r,Pi);try{var l={},u=n.map(function(d,f){if(typeof d=="object"){var m=Mi(f);return l[m]=d,m}return String(d)});return t(a,o).formatToParts(u).map(function(d){return d.type==="literal"?d:k(k({},d),{value:l[d.value]||d.value})})}catch(d){s(new se("Error formatting list.",a,d))}return n}var Ni=["type"];function Ri(e,t,n,r){var a=e.locale,s=e.onError;r===void 0&&(r={}),Intl.PluralRules||s(new je(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,_e.MISSING_INTL_API));var i=We(r,Ni);try{return t(a,i).select(n)}catch(o){s(new se("Error formatting plural.",a,o))}return"other"}var Fi=["numeric","style"];function Ai(e,t,n){var r=e.locale,a=e.formats,s=e.onError;n===void 0&&(n={});var i=n.format,o=!!i&&In(a,"relative",i,s)||{},l=We(n,Fi,o);return t(r,l)}function Ii(e,t,n,r,a){a===void 0&&(a={}),r||(r="second");var s=Intl.RelativeTimeFormat;s||e.onError(new je(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,_e.MISSING_INTL_API));try{return Ai(e,t,a).format(n,r)}catch(i){e.onError(new se("Error formatting relative time.",e.locale,i))}return String(n)}var Hi=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function ga(e,t,n){var r=e.locale,a=e.formats,s=e.onError;n===void 0&&(n={});var i=n.format,o=i&&In(a,"number",i,s)||{},l=We(n,Hi,o);return t(r,l)}function Bi(e,t,n,r){r===void 0&&(r={});try{return ga(e,t,r).format(n)}catch(a){e.onError(new se("Error formatting number.",e.locale,a))}return String(n)}function Ci(e,t,n,r){r===void 0&&(r={});try{return ga(e,t,r).formatToParts(n)}catch(a){e.onError(new se("Error formatting number.",e.locale,a))}return[]}function ji(e){var t=e?e[Object.keys(e)[0]]:void 0;return typeof t=="string"}function Li(e){e.onWarn&&e.defaultRichTextElements&&ji(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function qi(e,t){var n=bi(t),r=k(k({},da),e),a=r.locale,s=r.defaultLocale,i=r.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&i?i(new br('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&i&&i(new br('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(i&&i(new pi('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),Li(r),k(k({},r),{formatters:n,formatNumber:Bi.bind(null,r,n.getNumberFormat),formatNumberToParts:Ci.bind(null,r,n.getNumberFormat),formatRelativeTime:Ii.bind(null,r,n.getRelativeTimeFormat),formatDate:_i.bind(null,r,n.getDateTimeFormat),formatDateToParts:wi.bind(null,r,n.getDateTimeFormat),formatTime:Si.bind(null,r,n.getDateTimeFormat),formatDateTimeRange:Ti.bind(null,r,n.getDateTimeFormat),formatTimeToParts:xi.bind(null,r,n.getDateTimeFormat),formatPlural:Ri.bind(null,r,n.getPluralRules),formatMessage:Sn.bind(null,r,n),$t:Sn.bind(null,r,n),formatList:Oi.bind(null,r,n.getListFormat),formatListToParts:fa.bind(null,r,n.getListFormat),formatDisplayName:Ei.bind(null,r,n.getDisplayNames)})}function Yi(e){Wr(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Ui=k(k({},da),{textComponent:B.Fragment});function Gi(e){return function(t){return e(B.Children.toArray(t))}}function wr(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),a=n.length;if(r.length!==a)return!1;for(var s=0;s<a;s++){var i=n[s];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}var Hn=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=B.createContext(null)):B.createContext(null);Hn.Consumer;var Wi=Hn.Provider,Vi=Wi,$i=Hn;function Bn(){var e=B.useContext($i);return Yi(e),e}var Tn;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Tn||(Tn={}));var wn;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(wn||(wn={}));function ca(e){var t=function(n){var r=Bn(),a=n.value,s=n.children,i=nt(n,["value","children"]),o=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?r.formatDateToParts(o,i):r.formatTimeToParts(o,i);return s(l)};return t.displayName=wn[e],t}function _t(e){var t=function(n){var r=Bn(),a=n.value,s=n.children,i=nt(n,["value","children"]),o=r[e](a,i);if(typeof s=="function")return s(o);var l=r.textComponent||B.Fragment;return B.createElement(l,null,o)};return t.displayName=Tn[e],t}function pa(e){return e&&Object.keys(e).reduce(function(t,n){var r=e[n];return t[n]=la(r)?Gi(r):r,t},{})}var xr=function(e,t,n,r){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];var i=pa(r),o=Sn.apply(void 0,ye([e,t,n,i],a,!1));return Array.isArray(o)?B.Children.toArray(o):o},zi=function(e,t){var n=e.defaultRichTextElements,r=nt(e,["defaultRichTextElements"]),a=pa(n),s=qi(k(k(k({},Ui),r),{defaultRichTextElements:a}),t),i={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:a};return k(k({},s),{formatMessage:xr.bind(null,i,s.formatters),$t:xr.bind(null,i,s.formatters)})};function Zi(e,t){var n=e.values,r=nt(e,["values"]),a=t.values,s=nt(t,["values"]);return wr(a,n)&&wr(r,s)}function ya(e){var t=Bn(),n=t.formatMessage,r=t.textComponent,a=r===void 0?B.Fragment:r,s=e.id,i=e.description,o=e.defaultMessage,l=e.values,u=e.children,d=e.tagName,f=d===void 0?a:d,m=e.ignoreTag,S={id:s,description:i,defaultMessage:o},w=n(S,l,{ignoreTag:m});return typeof u=="function"?u(Array.isArray(w)?w:[w]):f?B.createElement(f,null,B.Children.toArray(w)):B.createElement(B.Fragment,null,w)}ya.displayName="FormattedMessage";var te=B.memo(ya,Zi);te.displayName="MemoizedFormattedMessage";_t("formatDate");_t("formatTime");_t("formatNumber");_t("formatList");_t("formatDisplayName");ca("formatDate");ca("formatTime");var Wt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var va={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Wt,function(){var n="minute",r=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(s,i,o){var l=i.prototype;o.utc=function(c){var O={date:c,utc:!0,args:arguments};return new i(O)},l.utc=function(c){var O=o(this.toDate(),{locale:this.$L,utc:!0});return c?O.add(this.utcOffset(),n):O},l.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var u=l.parse;l.parse=function(c){c.utc&&(this.$u=!0),this.$utils().u(c.$offset)||(this.$offset=c.$offset),u.call(this,c)};var d=l.init;l.init=function(){if(this.$u){var c=this.$d;this.$y=c.getUTCFullYear(),this.$M=c.getUTCMonth(),this.$D=c.getUTCDate(),this.$W=c.getUTCDay(),this.$H=c.getUTCHours(),this.$m=c.getUTCMinutes(),this.$s=c.getUTCSeconds(),this.$ms=c.getUTCMilliseconds()}else d.call(this)};var f=l.utcOffset;l.utcOffset=function(c,O){var x=this.$utils().u;if(x(c))return this.$u?0:x(this.$offset)?f.call(this):this.$offset;if(typeof c=="string"&&(c=function(K){K===void 0&&(K="");var R=K.match(r);if(!R)return null;var _=(""+R[0]).match(a)||["-",0,0],v=_[0],I=60*+_[1]+ +_[2];return I===0?0:v==="+"?I:-I}(c),c===null))return this;var C=Math.abs(c)<=16?60*c:c,N=this;if(O)return N.$offset=C,N.$u=c===0,N;if(c!==0){var le=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(N=this.local().add(C+le,n)).$offset=C,N.$x.$localOffset=le}else N=this.utc();return N};var m=l.format;l.format=function(c){var O=c||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return m.call(this,O)},l.valueOf=function(){var c=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*c},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var S=l.toDate;l.toDate=function(c){return c==="s"&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():S.call(this)};var w=l.diff;l.diff=function(c,O,x){if(c&&this.$u===c.$u)return w.call(this,c,O,x);var C=this.local(),N=o(c).local();return w.call(C,N,O,x)}}})})(va);var Xi=va.exports;const Ki=Cn(Xi);var ka={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Wt,function(){var n,r,a=1e3,s=6e4,i=36e5,o=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,d=2628e6,f=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,m={years:u,months:d,days:o,hours:i,minutes:s,seconds:a,milliseconds:1,weeks:6048e5},S=function(R){return R instanceof le},w=function(R,_,v){return new le(R,v,_.$l)},c=function(R){return r.p(R)+"s"},O=function(R){return R<0},x=function(R){return O(R)?Math.ceil(R):Math.floor(R)},C=function(R){return Math.abs(R)},N=function(R,_){return R?O(R)?{negative:!0,format:""+C(R)+_}:{negative:!1,format:""+R+_}:{negative:!1,format:""}},le=function(){function R(v,I,V){var G=this;if(this.$d={},this.$l=V,v===void 0&&(this.$ms=0,this.parseFromMilliseconds()),I)return w(v*m[c(I)],this);if(typeof v=="number")return this.$ms=v,this.parseFromMilliseconds(),this;if(typeof v=="object")return Object.keys(v).forEach(function(ge){G.$d[c(ge)]=v[ge]}),this.calMilliseconds(),this;if(typeof v=="string"){var J=v.match(f);if(J){var ee=J.slice(2).map(function(ge){return ge!=null?Number(ge):0});return this.$d.years=ee[0],this.$d.months=ee[1],this.$d.weeks=ee[2],this.$d.days=ee[3],this.$d.hours=ee[4],this.$d.minutes=ee[5],this.$d.seconds=ee[6],this.calMilliseconds(),this}}return this}var _=R.prototype;return _.calMilliseconds=function(){var v=this;this.$ms=Object.keys(this.$d).reduce(function(I,V){return I+(v.$d[V]||0)*m[V]},0)},_.parseFromMilliseconds=function(){var v=this.$ms;this.$d.years=x(v/u),v%=u,this.$d.months=x(v/d),v%=d,this.$d.days=x(v/o),v%=o,this.$d.hours=x(v/i),v%=i,this.$d.minutes=x(v/s),v%=s,this.$d.seconds=x(v/a),v%=a,this.$d.milliseconds=v},_.toISOString=function(){var v=N(this.$d.years,"Y"),I=N(this.$d.months,"M"),V=+this.$d.days||0;this.$d.weeks&&(V+=7*this.$d.weeks);var G=N(V,"D"),J=N(this.$d.hours,"H"),ee=N(this.$d.minutes,"M"),ge=this.$d.seconds||0;this.$d.milliseconds&&(ge+=this.$d.milliseconds/1e3,ge=Math.round(1e3*ge)/1e3);var rn=N(ge,"S"),xs=v.negative||I.negative||G.negative||J.negative||ee.negative||rn.negative,Ds=J.format||ee.format||rn.format?"T":"",an=(xs?"-":"")+"P"+v.format+I.format+G.format+Ds+J.format+ee.format+rn.format;return an==="P"||an==="-P"?"P0D":an},_.toJSON=function(){return this.toISOString()},_.format=function(v){var I=v||"YYYY-MM-DDTHH:mm:ss",V={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return I.replace(l,function(G,J){return J||String(V[G])})},_.as=function(v){return this.$ms/m[c(v)]},_.get=function(v){var I=this.$ms,V=c(v);return V==="milliseconds"?I%=1e3:I=V==="weeks"?x(I/m[V]):this.$d[V],I||0},_.add=function(v,I,V){var G;return G=I?v*m[c(I)]:S(v)?v.$ms:w(v,this).$ms,w(this.$ms+G*(V?-1:1),this)},_.subtract=function(v,I){return this.add(v,I,!0)},_.locale=function(v){var I=this.clone();return I.$l=v,I},_.clone=function(){return w(this.$ms,this)},_.humanize=function(v){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!v)},_.valueOf=function(){return this.asMilliseconds()},_.milliseconds=function(){return this.get("milliseconds")},_.asMilliseconds=function(){return this.as("milliseconds")},_.seconds=function(){return this.get("seconds")},_.asSeconds=function(){return this.as("seconds")},_.minutes=function(){return this.get("minutes")},_.asMinutes=function(){return this.as("minutes")},_.hours=function(){return this.get("hours")},_.asHours=function(){return this.as("hours")},_.days=function(){return this.get("days")},_.asDays=function(){return this.as("days")},_.weeks=function(){return this.get("weeks")},_.asWeeks=function(){return this.as("weeks")},_.months=function(){return this.get("months")},_.asMonths=function(){return this.as("months")},_.years=function(){return this.get("years")},_.asYears=function(){return this.as("years")},R}(),K=function(R,_,v){return R.add(_.years()*v,"y").add(_.months()*v,"M").add(_.days()*v,"d").add(_.hours()*v,"h").add(_.minutes()*v,"m").add(_.seconds()*v,"s").add(_.milliseconds()*v,"ms")};return function(R,_,v){n=v,r=v().$utils(),v.duration=function(G,J){var ee=v.locale();return w(G,{$l:ee},J)},v.isDuration=S;var I=_.prototype.add,V=_.prototype.subtract;_.prototype.add=function(G,J){return S(G)?K(this,G,1):I.bind(this)(G,J)},_.prototype.subtract=function(G,J){return S(G)?K(this,G,-1):V.bind(this)(G,J)}}})})(ka);var Ji=ka.exports;const Qi=Cn(Ji);var ba={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Wt,function(){var n="day";return function(r,a,s){var i=function(u){return u.add(4-u.isoWeekday(),n)},o=a.prototype;o.isoWeekYear=function(){return i(this).year()},o.isoWeek=function(u){if(!this.$utils().u(u))return this.add(7*(u-this.isoWeek()),n);var d,f,m,S,w=i(this),c=(d=this.isoWeekYear(),f=this.$u,m=(f?s.utc:s)().year(d).startOf("year"),S=4-m.isoWeekday(),m.isoWeekday()>4&&(S+=7),m.add(S,n));return w.diff(c,"week")+1},o.isoWeekday=function(u){return this.$utils().u(u)?this.day()||7:this.day(this.day()%7?u:u-7)};var l=o.startOf;o.startOf=function(u,d){var f=this.$utils(),m=!!f.u(d)||d;return f.p(u)==="isoweek"?m?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(u,d)}}})})(ba);var eo=ba.exports;const to=Cn(eo);var no={exports:{}};(function(e,t){(function(n,r){e.exports=r(Ut)})(Wt,function(n){function r(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var a=r(n),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})})(no);const ro=ha(),Te=e=>zi({locale:"nb-NO",messages:e},ro),_a={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"},jn="YYYY-MM-DD",Ln="DD.MM.YYYY";Ut.extend(Ki);Ut.extend(to);Ut.extend(Qi);Te(_a);Te(_a);//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Sa;function g(){return Sa.apply(null,arguments)}function ao(e){Sa=e}function de(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Ue(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function F(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function qn(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(F(e,t))return!1;return!0}function Q(e){return e===void 0}function Re(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function St(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Ta(e,t){var n=[],r,a=e.length;for(r=0;r<a;++r)n.push(t(e[r],r));return n}function He(e,t){for(var n in t)F(t,n)&&(e[n]=t[n]);return F(t,"toString")&&(e.toString=t.toString),F(t,"valueOf")&&(e.valueOf=t.valueOf),e}function we(e,t,n,r){return Va(e,t,n,r,!0).utc()}function so(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function T(e){return e._pf==null&&(e._pf=so()),e._pf}var xn;Array.prototype.some?xn=Array.prototype.some:xn=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function Yn(e){var t=null,n=!1,r=e._d&&!isNaN(e._d.getTime());if(r&&(t=T(e),n=xn.call(t.parsedDateParts,function(a){return a!=null}),r=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n),e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r;return e._isValid}function Vt(e){var t=we(NaN);return e!=null?He(T(t),e):T(t).userInvalidated=!0,t}var Dr=g.momentProperties=[],un=!1;function Un(e,t){var n,r,a,s=Dr.length;if(Q(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),Q(t._i)||(e._i=t._i),Q(t._f)||(e._f=t._f),Q(t._l)||(e._l=t._l),Q(t._strict)||(e._strict=t._strict),Q(t._tzm)||(e._tzm=t._tzm),Q(t._isUTC)||(e._isUTC=t._isUTC),Q(t._offset)||(e._offset=t._offset),Q(t._pf)||(e._pf=T(t)),Q(t._locale)||(e._locale=t._locale),s>0)for(n=0;n<s;n++)r=Dr[n],a=t[r],Q(a)||(e[r]=a);return e}function Tt(e){Un(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),un===!1&&(un=!0,g.updateOffset(this),un=!1)}function he(e){return e instanceof Tt||e!=null&&e._isAMomentObject!=null}function wa(e){g.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function ie(e,t){var n=!0;return He(function(){if(g.deprecationHandler!=null&&g.deprecationHandler(null,e),n){var r=[],a,s,i,o=arguments.length;for(s=0;s<o;s++){if(a="",typeof arguments[s]=="object"){a+=`
[`+s+"] ";for(i in arguments[0])F(arguments[0],i)&&(a+=i+": "+arguments[0][i]+", ");a=a.slice(0,-2)}else a=arguments[s];r.push(a)}wa(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var Er={};function xa(e,t){g.deprecationHandler!=null&&g.deprecationHandler(e,t),Er[e]||(wa(t),Er[e]=!0)}g.suppressDeprecationWarnings=!1;g.deprecationHandler=null;function xe(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function io(e){var t,n;for(n in e)F(e,n)&&(t=e[n],xe(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Dn(e,t){var n=He({},e),r;for(r in t)F(t,r)&&(Ue(e[r])&&Ue(t[r])?(n[r]={},He(n[r],e[r]),He(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)F(e,r)&&!F(t,r)&&Ue(e[r])&&(n[r]=He({},n[r]));return n}function Gn(e){e!=null&&this.set(e)}var En;Object.keys?En=Object.keys:En=function(e){var t,n=[];for(t in e)F(e,t)&&n.push(t);return n};var oo={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function lo(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return xe(r)?r.call(t,n):r}function Se(e,t,n){var r=""+Math.abs(e),a=t-r.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+r}var Wn=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Pt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,dn={},Ke={};function b(e,t,n,r){var a=r;typeof r=="string"&&(a=function(){return this[r]()}),e&&(Ke[e]=a),t&&(Ke[t[0]]=function(){return Se(a.apply(this,arguments),t[1],t[2])}),n&&(Ke[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function uo(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function ho(e){var t=e.match(Wn),n,r;for(n=0,r=t.length;n<r;n++)Ke[t[n]]?t[n]=Ke[t[n]]:t[n]=uo(t[n]);return function(a){var s="",i;for(i=0;i<r;i++)s+=xe(t[i])?t[i].call(a,e):t[i];return s}}function Nt(e,t){return e.isValid()?(t=Da(t,e.localeData()),dn[t]=dn[t]||ho(t),dn[t](e)):e.localeData().invalidDate()}function Da(e,t){var n=5;function r(a){return t.longDateFormat(a)||a}for(Pt.lastIndex=0;n>=0&&Pt.test(e);)e=e.replace(Pt,r),Pt.lastIndex=0,n-=1;return e}var mo={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function fo(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(Wn).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var go="Invalid date";function co(){return this._invalidDate}var po="%d",yo=/\d{1,2}/;function vo(e){return this._ordinal.replace("%d",e)}var ko={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function bo(e,t,n,r){var a=this._relativeTime[n];return xe(a)?a(e,t,n,r):a.replace(/%d/i,e)}function _o(e,t){var n=this._relativeTime[e>0?"future":"past"];return xe(n)?n(t):n.replace(/%s/i,t)}var Pr={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function oe(e){return typeof e=="string"?Pr[e]||Pr[e.toLowerCase()]:void 0}function Vn(e){var t={},n,r;for(r in e)F(e,r)&&(n=oe(r),n&&(t[n]=e[r]));return t}var So={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function To(e){var t=[],n;for(n in e)F(e,n)&&t.push({unit:n,priority:So[n]});return t.sort(function(r,a){return r.priority-a.priority}),t}var Ea=/\d/,ne=/\d\d/,Pa=/\d{3}/,$n=/\d{4}/,$t=/[+-]?\d{6}/,q=/\d\d?/,Ma=/\d\d\d\d?/,Oa=/\d\d\d\d\d\d?/,zt=/\d{1,3}/,zn=/\d{1,4}/,Zt=/[+-]?\d{1,6}/,at=/\d+/,Xt=/[+-]?\d+/,wo=/Z|[+-]\d\d:?\d\d/gi,Kt=/Z|[+-]\d\d(?::?\d\d)?/gi,xo=/[+-]?\d+(\.\d{1,3})?/,wt=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,st=/^[1-9]\d?/,Zn=/^([1-9]\d|\d)/,It;It={};function p(e,t,n){It[e]=xe(t)?t:function(r,a){return r&&n?n:t}}function Do(e,t){return F(It,e)?It[e](t._strict,t._locale):new RegExp(Eo(e))}function Eo(e){return Oe(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,a,s){return n||r||a||s}))}function Oe(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ae(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function D(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=ae(t)),n}var Pn={};function H(e,t){var n,r=t,a;for(typeof e=="string"&&(e=[e]),Re(t)&&(r=function(s,i){i[t]=D(s)}),a=e.length,n=0;n<a;n++)Pn[e[n]]=r}function xt(e,t){H(e,function(n,r,a,s){a._w=a._w||{},t(n,a._w,a,s)})}function Po(e,t,n){t!=null&&F(Pn,e)&&Pn[e](t,n._a,n,e)}function Jt(e){return e%4===0&&e%100!==0||e%400===0}var z=0,Pe=1,ve=2,W=3,ue=4,Me=5,Ye=6,Mo=7,Oo=8;b("Y",0,0,function(){var e=this.year();return e<=9999?Se(e,4):"+"+e});b(0,["YY",2],0,function(){return this.year()%100});b(0,["YYYY",4],0,"year");b(0,["YYYYY",5],0,"year");b(0,["YYYYYY",6,!0],0,"year");p("Y",Xt);p("YY",q,ne);p("YYYY",zn,$n);p("YYYYY",Zt,$t);p("YYYYYY",Zt,$t);H(["YYYYY","YYYYYY"],z);H("YYYY",function(e,t){t[z]=e.length===2?g.parseTwoDigitYear(e):D(e)});H("YY",function(e,t){t[z]=g.parseTwoDigitYear(e)});H("Y",function(e,t){t[z]=parseInt(e,10)});function gt(e){return Jt(e)?366:365}g.parseTwoDigitYear=function(e){return D(e)+(D(e)>68?1900:2e3)};var Na=it("FullYear",!0);function No(){return Jt(this.year())}function it(e,t){return function(n){return n!=null?(Ra(this,e,n),g.updateOffset(this,t),this):pt(this,e)}}function pt(e,t){if(!e.isValid())return NaN;var n=e._d,r=e._isUTC;switch(t){case"Milliseconds":return r?n.getUTCMilliseconds():n.getMilliseconds();case"Seconds":return r?n.getUTCSeconds():n.getSeconds();case"Minutes":return r?n.getUTCMinutes():n.getMinutes();case"Hours":return r?n.getUTCHours():n.getHours();case"Date":return r?n.getUTCDate():n.getDate();case"Day":return r?n.getUTCDay():n.getDay();case"Month":return r?n.getUTCMonth():n.getMonth();case"FullYear":return r?n.getUTCFullYear():n.getFullYear();default:return NaN}}function Ra(e,t,n){var r,a,s,i,o;if(!(!e.isValid()||isNaN(n))){switch(r=e._d,a=e._isUTC,t){case"Milliseconds":return void(a?r.setUTCMilliseconds(n):r.setMilliseconds(n));case"Seconds":return void(a?r.setUTCSeconds(n):r.setSeconds(n));case"Minutes":return void(a?r.setUTCMinutes(n):r.setMinutes(n));case"Hours":return void(a?r.setUTCHours(n):r.setHours(n));case"Date":return void(a?r.setUTCDate(n):r.setDate(n));case"FullYear":break;default:return}s=n,i=e.month(),o=e.date(),o=o===29&&i===1&&!Jt(s)?28:o,a?r.setUTCFullYear(s,i,o):r.setFullYear(s,i,o)}}function Ro(e){return e=oe(e),xe(this[e])?this[e]():this}function Fo(e,t){if(typeof e=="object"){e=Vn(e);var n=To(e),r,a=n.length;for(r=0;r<a;r++)this[n[r].unit](e[n[r].unit])}else if(e=oe(e),xe(this[e]))return this[e](t);return this}function Ao(e,t){return(e%t+t)%t}var U;Array.prototype.indexOf?U=Array.prototype.indexOf:U=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function Xn(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=Ao(t,12);return e+=(t-n)/12,n===1?Jt(e)?29:28:31-n%7%2}b("M",["MM",2],"Mo",function(){return this.month()+1});b("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});b("MMMM",0,0,function(e){return this.localeData().months(this,e)});p("M",q,st);p("MM",q,ne);p("MMM",function(e,t){return t.monthsShortRegex(e)});p("MMMM",function(e,t){return t.monthsRegex(e)});H(["M","MM"],function(e,t){t[Pe]=D(e)-1});H(["MMM","MMMM"],function(e,t,n,r){var a=n._locale.monthsParse(e,r,n._strict);a!=null?t[Pe]=a:T(n).invalidMonth=e});var Io="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Fa="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Aa=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ho=wt,Bo=wt;function Co(e,t){return e?de(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Aa).test(t)?"format":"standalone"][e.month()]:de(this._months)?this._months:this._months.standalone}function jo(e,t){return e?de(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Aa.test(t)?"format":"standalone"][e.month()]:de(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Lo(e,t,n){var r,a,s,i=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)s=we([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(s,"").toLocaleLowerCase();return n?t==="MMM"?(a=U.call(this._shortMonthsParse,i),a!==-1?a:null):(a=U.call(this._longMonthsParse,i),a!==-1?a:null):t==="MMM"?(a=U.call(this._shortMonthsParse,i),a!==-1?a:(a=U.call(this._longMonthsParse,i),a!==-1?a:null)):(a=U.call(this._longMonthsParse,i),a!==-1?a:(a=U.call(this._shortMonthsParse,i),a!==-1?a:null))}function qo(e,t,n){var r,a,s;if(this._monthsParseExact)return Lo.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(a=we([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(s="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function Ia(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=D(t);else if(t=e.localeData().monthsParse(t),!Re(t))return e}var n=t,r=e.date();return r=r<29?r:Math.min(r,Xn(e.year(),n)),e._isUTC?e._d.setUTCMonth(n,r):e._d.setMonth(n,r),e}function Ha(e){return e!=null?(Ia(this,e),g.updateOffset(this,!0),this):pt(this,"Month")}function Yo(){return Xn(this.year(),this.month())}function Uo(e){return this._monthsParseExact?(F(this,"_monthsRegex")||Ba.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(F(this,"_monthsShortRegex")||(this._monthsShortRegex=Ho),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function Go(e){return this._monthsParseExact?(F(this,"_monthsRegex")||Ba.call(this),e?this._monthsStrictRegex:this._monthsRegex):(F(this,"_monthsRegex")||(this._monthsRegex=Bo),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Ba(){function e(l,u){return u.length-l.length}var t=[],n=[],r=[],a,s,i,o;for(a=0;a<12;a++)s=we([2e3,a]),i=Oe(this.monthsShort(s,"")),o=Oe(this.months(s,"")),t.push(i),n.push(o),r.push(o),r.push(i);t.sort(e),n.sort(e),r.sort(e),this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Wo(e,t,n,r,a,s,i){var o;return e<100&&e>=0?(o=new Date(e+400,t,n,r,a,s,i),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,r,a,s,i),o}function yt(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Ht(e,t,n){var r=7+t-n,a=(7+yt(e,0,r).getUTCDay()-t)%7;return-a+r-1}function Ca(e,t,n,r,a){var s=(7+n-r)%7,i=Ht(e,r,a),o=1+7*(t-1)+s+i,l,u;return o<=0?(l=e-1,u=gt(l)+o):o>gt(e)?(l=e+1,u=o-gt(e)):(l=e,u=o),{year:l,dayOfYear:u}}function vt(e,t,n){var r=Ht(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1,s,i;return a<1?(i=e.year()-1,s=a+Ne(i,t,n)):a>Ne(e.year(),t,n)?(s=a-Ne(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ne(e,t,n){var r=Ht(e,t,n),a=Ht(e+1,t,n);return(gt(e)-r+a)/7}b("w",["ww",2],"wo","week");b("W",["WW",2],"Wo","isoWeek");p("w",q,st);p("ww",q,ne);p("W",q,st);p("WW",q,ne);xt(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=D(e)});function Vo(e){return vt(e,this._week.dow,this._week.doy).week}var $o={dow:0,doy:6};function zo(){return this._week.dow}function Zo(){return this._week.doy}function Xo(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function Ko(e){var t=vt(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}b("d",0,"do","day");b("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});b("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});b("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});b("e",0,0,"weekday");b("E",0,0,"isoWeekday");p("d",q);p("e",q);p("E",q);p("dd",function(e,t){return t.weekdaysMinRegex(e)});p("ddd",function(e,t){return t.weekdaysShortRegex(e)});p("dddd",function(e,t){return t.weekdaysRegex(e)});xt(["dd","ddd","dddd"],function(e,t,n,r){var a=n._locale.weekdaysParse(e,r,n._strict);a!=null?t.d=a:T(n).invalidWeekday=e});xt(["d","e","E"],function(e,t,n,r){t[r]=D(e)});function Jo(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function Qo(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Kn(e,t){return e.slice(t,7).concat(e.slice(0,t))}var el="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ja="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),tl="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),nl=wt,rl=wt,al=wt;function sl(e,t){var n=de(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?Kn(n,this._week.dow):e?n[e.day()]:n}function il(e){return e===!0?Kn(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function ol(e){return e===!0?Kn(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function ll(e,t,n){var r,a,s,i=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)s=we([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(s,"").toLocaleLowerCase();return n?t==="dddd"?(a=U.call(this._weekdaysParse,i),a!==-1?a:null):t==="ddd"?(a=U.call(this._shortWeekdaysParse,i),a!==-1?a:null):(a=U.call(this._minWeekdaysParse,i),a!==-1?a:null):t==="dddd"?(a=U.call(this._weekdaysParse,i),a!==-1||(a=U.call(this._shortWeekdaysParse,i),a!==-1)?a:(a=U.call(this._minWeekdaysParse,i),a!==-1?a:null)):t==="ddd"?(a=U.call(this._shortWeekdaysParse,i),a!==-1||(a=U.call(this._weekdaysParse,i),a!==-1)?a:(a=U.call(this._minWeekdaysParse,i),a!==-1?a:null)):(a=U.call(this._minWeekdaysParse,i),a!==-1||(a=U.call(this._weekdaysParse,i),a!==-1)?a:(a=U.call(this._shortWeekdaysParse,i),a!==-1?a:null))}function ul(e,t,n){var r,a,s;if(this._weekdaysParseExact)return ll.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(a=we([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(s="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function dl(e){if(!this.isValid())return e!=null?this:NaN;var t=pt(this,"Day");return e!=null?(e=Jo(e,this.localeData()),this.add(e-t,"d")):t}function hl(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function ml(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=Qo(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function fl(e){return this._weekdaysParseExact?(F(this,"_weekdaysRegex")||Jn.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(F(this,"_weekdaysRegex")||(this._weekdaysRegex=nl),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function gl(e){return this._weekdaysParseExact?(F(this,"_weekdaysRegex")||Jn.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(F(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=rl),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function cl(e){return this._weekdaysParseExact?(F(this,"_weekdaysRegex")||Jn.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(F(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=al),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Jn(){function e(d,f){return f.length-d.length}var t=[],n=[],r=[],a=[],s,i,o,l,u;for(s=0;s<7;s++)i=we([2e3,1]).day(s),o=Oe(this.weekdaysMin(i,"")),l=Oe(this.weekdaysShort(i,"")),u=Oe(this.weekdays(i,"")),t.push(o),n.push(l),r.push(u),a.push(o),a.push(l),a.push(u);t.sort(e),n.sort(e),r.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Qn(){return this.hours()%12||12}function pl(){return this.hours()||24}b("H",["HH",2],0,"hour");b("h",["hh",2],0,Qn);b("k",["kk",2],0,pl);b("hmm",0,0,function(){return""+Qn.apply(this)+Se(this.minutes(),2)});b("hmmss",0,0,function(){return""+Qn.apply(this)+Se(this.minutes(),2)+Se(this.seconds(),2)});b("Hmm",0,0,function(){return""+this.hours()+Se(this.minutes(),2)});b("Hmmss",0,0,function(){return""+this.hours()+Se(this.minutes(),2)+Se(this.seconds(),2)});function La(e,t){b(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}La("a",!0);La("A",!1);function qa(e,t){return t._meridiemParse}p("a",qa);p("A",qa);p("H",q,Zn);p("h",q,st);p("k",q,st);p("HH",q,ne);p("hh",q,ne);p("kk",q,ne);p("hmm",Ma);p("hmmss",Oa);p("Hmm",Ma);p("Hmmss",Oa);H(["H","HH"],W);H(["k","kk"],function(e,t,n){var r=D(e);t[W]=r===24?0:r});H(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});H(["h","hh"],function(e,t,n){t[W]=D(e),T(n).bigHour=!0});H("hmm",function(e,t,n){var r=e.length-2;t[W]=D(e.substr(0,r)),t[ue]=D(e.substr(r)),T(n).bigHour=!0});H("hmmss",function(e,t,n){var r=e.length-4,a=e.length-2;t[W]=D(e.substr(0,r)),t[ue]=D(e.substr(r,2)),t[Me]=D(e.substr(a)),T(n).bigHour=!0});H("Hmm",function(e,t,n){var r=e.length-2;t[W]=D(e.substr(0,r)),t[ue]=D(e.substr(r))});H("Hmmss",function(e,t,n){var r=e.length-4,a=e.length-2;t[W]=D(e.substr(0,r)),t[ue]=D(e.substr(r,2)),t[Me]=D(e.substr(a))});function yl(e){return(e+"").toLowerCase().charAt(0)==="p"}var vl=/[ap]\.?m?\.?/i,kl=it("Hours",!0);function bl(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var Ya={calendar:oo,longDateFormat:mo,invalidDate:go,ordinal:po,dayOfMonthOrdinalParse:yo,relativeTime:ko,months:Io,monthsShort:Fa,week:$o,weekdays:el,weekdaysMin:tl,weekdaysShort:ja,meridiemParse:vl},Y={},lt={},kt;function _l(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function Mr(e){return e&&e.toLowerCase().replace("_","-")}function Sl(e){for(var t=0,n,r,a,s;t<e.length;){for(s=Mr(e[t]).split("-"),n=s.length,r=Mr(e[t+1]),r=r?r.split("-"):null;n>0;){if(a=Qt(s.slice(0,n).join("-")),a)return a;if(r&&r.length>=n&&_l(s,r)>=n-1)break;n--}t++}return kt}function Tl(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Qt(e){var t=null,n;if(Y[e]===void 0&&typeof module<"u"&&module&&module.exports&&Tl(e))try{t=kt._abbr,n=require,n("./locale/"+e),Ce(t)}catch{Y[e]=null}return Y[e]}function Ce(e,t){var n;return e&&(Q(t)?n=Fe(e):n=er(e,t),n?kt=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),kt._abbr}function er(e,t){if(t!==null){var n,r=Ya;if(t.abbr=e,Y[e]!=null)xa("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=Y[e]._config;else if(t.parentLocale!=null)if(Y[t.parentLocale]!=null)r=Y[t.parentLocale]._config;else if(n=Qt(t.parentLocale),n!=null)r=n._config;else return lt[t.parentLocale]||(lt[t.parentLocale]=[]),lt[t.parentLocale].push({name:e,config:t}),null;return Y[e]=new Gn(Dn(r,t)),lt[e]&&lt[e].forEach(function(a){er(a.name,a.config)}),Ce(e),Y[e]}else return delete Y[e],null}function wl(e,t){if(t!=null){var n,r,a=Ya;Y[e]!=null&&Y[e].parentLocale!=null?Y[e].set(Dn(Y[e]._config,t)):(r=Qt(e),r!=null&&(a=r._config),t=Dn(a,t),r==null&&(t.abbr=e),n=new Gn(t),n.parentLocale=Y[e],Y[e]=n),Ce(e)}else Y[e]!=null&&(Y[e].parentLocale!=null?(Y[e]=Y[e].parentLocale,e===Ce()&&Ce(e)):Y[e]!=null&&delete Y[e]);return Y[e]}function Fe(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return kt;if(!de(e)){if(t=Qt(e),t)return t;e=[e]}return Sl(e)}function xl(){return En(Y)}function tr(e){var t,n=e._a;return n&&T(e).overflow===-2&&(t=n[Pe]<0||n[Pe]>11?Pe:n[ve]<1||n[ve]>Xn(n[z],n[Pe])?ve:n[W]<0||n[W]>24||n[W]===24&&(n[ue]!==0||n[Me]!==0||n[Ye]!==0)?W:n[ue]<0||n[ue]>59?ue:n[Me]<0||n[Me]>59?Me:n[Ye]<0||n[Ye]>999?Ye:-1,T(e)._overflowDayOfYear&&(t<z||t>ve)&&(t=ve),T(e)._overflowWeeks&&t===-1&&(t=Mo),T(e)._overflowWeekday&&t===-1&&(t=Oo),T(e).overflow=t),e}var Dl=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,El=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Pl=/Z|[+-]\d\d(?::?\d\d)?/,Mt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],hn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ml=/^\/?Date\((-?\d+)/i,Ol=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Nl={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Ua(e){var t,n,r=e._i,a=Dl.exec(r)||El.exec(r),s,i,o,l,u=Mt.length,d=hn.length;if(a){for(T(e).iso=!0,t=0,n=u;t<n;t++)if(Mt[t][1].exec(a[1])){i=Mt[t][0],s=Mt[t][2]!==!1;break}if(i==null){e._isValid=!1;return}if(a[3]){for(t=0,n=d;t<n;t++)if(hn[t][1].exec(a[3])){o=(a[2]||" ")+hn[t][0];break}if(o==null){e._isValid=!1;return}}if(!s&&o!=null){e._isValid=!1;return}if(a[4])if(Pl.exec(a[4]))l="Z";else{e._isValid=!1;return}e._f=i+(o||"")+(l||""),rr(e)}else e._isValid=!1}function Rl(e,t,n,r,a,s){var i=[Fl(e),Fa.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(a,10)];return s&&i.push(parseInt(s,10)),i}function Fl(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Al(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Il(e,t,n){if(e){var r=ja.indexOf(e),a=new Date(t[0],t[1],t[2]).getDay();if(r!==a)return T(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function Hl(e,t,n){if(e)return Nl[e];if(t)return 0;var r=parseInt(n,10),a=r%100,s=(r-a)/100;return s*60+a}function Ga(e){var t=Ol.exec(Al(e._i)),n;if(t){if(n=Rl(t[4],t[3],t[2],t[5],t[6],t[7]),!Il(t[1],n,e))return;e._a=n,e._tzm=Hl(t[8],t[9],t[10]),e._d=yt.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),T(e).rfc2822=!0}else e._isValid=!1}function Bl(e){var t=Ml.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(Ua(e),e._isValid===!1)delete e._isValid;else return;if(Ga(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:g.createFromInputFallback(e)}g.createFromInputFallback=ie("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Ze(e,t,n){return e??t??n}function Cl(e){var t=new Date(g.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function nr(e){var t,n,r=[],a,s,i;if(!e._d){for(a=Cl(e),e._w&&e._a[ve]==null&&e._a[Pe]==null&&jl(e),e._dayOfYear!=null&&(i=Ze(e._a[z],a[z]),(e._dayOfYear>gt(i)||e._dayOfYear===0)&&(T(e)._overflowDayOfYear=!0),n=yt(i,0,e._dayOfYear),e._a[Pe]=n.getUTCMonth(),e._a[ve]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=a[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[W]===24&&e._a[ue]===0&&e._a[Me]===0&&e._a[Ye]===0&&(e._nextDay=!0,e._a[W]=0),e._d=(e._useUTC?yt:Wo).apply(null,r),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[W]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(T(e).weekdayMismatch=!0)}}function jl(e){var t,n,r,a,s,i,o,l,u;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(s=1,i=4,n=Ze(t.GG,e._a[z],vt(L(),1,4).year),r=Ze(t.W,1),a=Ze(t.E,1),(a<1||a>7)&&(l=!0)):(s=e._locale._week.dow,i=e._locale._week.doy,u=vt(L(),s,i),n=Ze(t.gg,e._a[z],u.year),r=Ze(t.w,u.week),t.d!=null?(a=t.d,(a<0||a>6)&&(l=!0)):t.e!=null?(a=t.e+s,(t.e<0||t.e>6)&&(l=!0)):a=s),r<1||r>Ne(n,s,i)?T(e)._overflowWeeks=!0:l!=null?T(e)._overflowWeekday=!0:(o=Ca(n,r,a,s,i),e._a[z]=o.year,e._dayOfYear=o.dayOfYear)}g.ISO_8601=function(){};g.RFC_2822=function(){};function rr(e){if(e._f===g.ISO_8601){Ua(e);return}if(e._f===g.RFC_2822){Ga(e);return}e._a=[],T(e).empty=!0;var t=""+e._i,n,r,a,s,i,o=t.length,l=0,u,d;for(a=Da(e._f,e._locale).match(Wn)||[],d=a.length,n=0;n<d;n++)s=a[n],r=(t.match(Do(s,e))||[])[0],r&&(i=t.substr(0,t.indexOf(r)),i.length>0&&T(e).unusedInput.push(i),t=t.slice(t.indexOf(r)+r.length),l+=r.length),Ke[s]?(r?T(e).empty=!1:T(e).unusedTokens.push(s),Po(s,r,e)):e._strict&&!r&&T(e).unusedTokens.push(s);T(e).charsLeftOver=o-l,t.length>0&&T(e).unusedInput.push(t),e._a[W]<=12&&T(e).bigHour===!0&&e._a[W]>0&&(T(e).bigHour=void 0),T(e).parsedDateParts=e._a.slice(0),T(e).meridiem=e._meridiem,e._a[W]=Ll(e._locale,e._a[W],e._meridiem),u=T(e).era,u!==null&&(e._a[z]=e._locale.erasConvertYear(u,e._a[z])),nr(e),tr(e)}function Ll(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function ql(e){var t,n,r,a,s,i,o=!1,l=e._f.length;if(l===0){T(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<l;a++)s=0,i=!1,t=Un({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[a],rr(t),Yn(t)&&(i=!0),s+=T(t).charsLeftOver,s+=T(t).unusedTokens.length*10,T(t).score=s,o?s<r&&(r=s,n=t):(r==null||s<r||i)&&(r=s,n=t,i&&(o=!0));He(e,n||t)}function Yl(e){if(!e._d){var t=Vn(e._i),n=t.day===void 0?t.date:t.day;e._a=Ta([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),nr(e)}}function Ul(e){var t=new Tt(tr(Wa(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Wa(e){var t=e._i,n=e._f;return e._locale=e._locale||Fe(e._l),t===null||n===void 0&&t===""?Vt({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),he(t)?new Tt(tr(t)):(St(t)?e._d=t:de(n)?ql(e):n?rr(e):Gl(e),Yn(e)||(e._d=null),e))}function Gl(e){var t=e._i;Q(t)?e._d=new Date(g.now()):St(t)?e._d=new Date(t.valueOf()):typeof t=="string"?Bl(e):de(t)?(e._a=Ta(t.slice(0),function(n){return parseInt(n,10)}),nr(e)):Ue(t)?Yl(e):Re(t)?e._d=new Date(t):g.createFromInputFallback(e)}function Va(e,t,n,r,a){var s={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(Ue(e)&&qn(e)||de(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=n,s._i=e,s._f=t,s._strict=r,Ul(s)}function L(e,t,n,r){return Va(e,t,n,r,!1)}var Wl=ie("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=L.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Vt()}),Vl=ie("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=L.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Vt()});function $a(e,t){var n,r;if(t.length===1&&de(t[0])&&(t=t[0]),!t.length)return L();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function $l(){var e=[].slice.call(arguments,0);return $a("isBefore",e)}function zl(){var e=[].slice.call(arguments,0);return $a("isAfter",e)}var Zl=function(){return Date.now?Date.now():+new Date},ut=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Xl(e){var t,n=!1,r,a=ut.length;for(t in e)if(F(e,t)&&!(U.call(ut,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<a;++r)if(e[ut[r]]){if(n)return!1;parseFloat(e[ut[r]])!==D(e[ut[r]])&&(n=!0)}return!0}function Kl(){return this._isValid}function Jl(){return fe(NaN)}function en(e){var t=Vn(e),n=t.year||0,r=t.quarter||0,a=t.month||0,s=t.week||t.isoWeek||0,i=t.day||0,o=t.hour||0,l=t.minute||0,u=t.second||0,d=t.millisecond||0;this._isValid=Xl(t),this._milliseconds=+d+u*1e3+l*6e4+o*1e3*60*60,this._days=+i+s*7,this._months=+a+r*3+n*12,this._data={},this._locale=Fe(),this._bubble()}function Rt(e){return e instanceof en}function Mn(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Ql(e,t,n){var r=Math.min(e.length,t.length),a=Math.abs(e.length-t.length),s=0,i;for(i=0;i<r;i++)D(e[i])!==D(t[i])&&s++;return s+a}function za(e,t){b(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+Se(~~(n/60),2)+t+Se(~~n%60,2)})}za("Z",":");za("ZZ","");p("Z",Kt);p("ZZ",Kt);H(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=ar(Kt,e)});var eu=/([\+\-]|\d\d)/gi;function ar(e,t){var n=(t||"").match(e),r,a,s;return n===null?null:(r=n[n.length-1]||[],a=(r+"").match(eu)||["-",0,0],s=+(a[1]*60)+D(a[2]),s===0?0:a[0]==="+"?s:-s)}function sr(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(he(e)||St(e)?e.valueOf():L(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),g.updateOffset(n,!1),n):L(e).local()}function On(e){return-Math.round(e._d.getTimezoneOffset())}g.updateOffset=function(){};function tu(e,t,n){var r=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=ar(Kt,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(a=On(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),r!==e&&(!t||this._changeInProgress?Ka(this,fe(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,g.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:On(this)}function nu(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function ru(e){return this.utcOffset(0,e)}function au(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(On(this),"m")),this}function su(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=ar(wo,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function iu(e){return this.isValid()?(e=e?L(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function ou(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function lu(){if(!Q(this._isDSTShifted))return this._isDSTShifted;var e={},t;return Un(e,this),e=Wa(e),e._a?(t=e._isUTC?we(e._a):L(e._a),this._isDSTShifted=this.isValid()&&Ql(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function uu(){return this.isValid()?!this._isUTC:!1}function du(){return this.isValid()?this._isUTC:!1}function Za(){return this.isValid()?this._isUTC&&this._offset===0:!1}var hu=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,mu=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function fe(e,t){var n=e,r=null,a,s,i;return Rt(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:Re(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=hu.exec(e))?(a=r[1]==="-"?-1:1,n={y:0,d:D(r[ve])*a,h:D(r[W])*a,m:D(r[ue])*a,s:D(r[Me])*a,ms:D(Mn(r[Ye]*1e3))*a}):(r=mu.exec(e))?(a=r[1]==="-"?-1:1,n={y:qe(r[2],a),M:qe(r[3],a),w:qe(r[4],a),d:qe(r[5],a),h:qe(r[6],a),m:qe(r[7],a),s:qe(r[8],a)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(i=fu(L(n.from),L(n.to)),n={},n.ms=i.milliseconds,n.M=i.months),s=new en(n),Rt(e)&&F(e,"_locale")&&(s._locale=e._locale),Rt(e)&&F(e,"_isValid")&&(s._isValid=e._isValid),s}fe.fn=en.prototype;fe.invalid=Jl;function qe(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Or(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function fu(e,t){var n;return e.isValid()&&t.isValid()?(t=sr(t,e),e.isBefore(t)?n=Or(e,t):(n=Or(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Xa(e,t){return function(n,r){var a,s;return r!==null&&!isNaN(+r)&&(xa(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=r,r=s),a=fe(n,r),Ka(this,a,e),this}}function Ka(e,t,n,r){var a=t._milliseconds,s=Mn(t._days),i=Mn(t._months);e.isValid()&&(r=r??!0,i&&Ia(e,pt(e,"Month")+i*n),s&&Ra(e,"Date",pt(e,"Date")+s*n),a&&e._d.setTime(e._d.valueOf()+a*n),r&&g.updateOffset(e,s||i))}var gu=Xa(1,"add"),cu=Xa(-1,"subtract");function Ja(e){return typeof e=="string"||e instanceof String}function pu(e){return he(e)||St(e)||Ja(e)||Re(e)||vu(e)||yu(e)||e===null||e===void 0}function yu(e){var t=Ue(e)&&!qn(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,s,i=r.length;for(a=0;a<i;a+=1)s=r[a],n=n||F(e,s);return t&&n}function vu(e){var t=de(e),n=!1;return t&&(n=e.filter(function(r){return!Re(r)&&Ja(e)}).length===0),t&&n}function ku(e){var t=Ue(e)&&!qn(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,s;for(a=0;a<r.length;a+=1)s=r[a],n=n||F(e,s);return t&&n}function bu(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function _u(e,t){arguments.length===1&&(arguments[0]?pu(arguments[0])?(e=arguments[0],t=void 0):ku(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||L(),r=sr(n,this).startOf("day"),a=g.calendarFormat(this,r)||"sameElse",s=t&&(xe(t[a])?t[a].call(this,n):t[a]);return this.format(s||this.localeData().calendar(a,this,L(n)))}function Su(){return new Tt(this)}function Tu(e,t){var n=he(e)?e:L(e);return this.isValid()&&n.isValid()?(t=oe(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function wu(e,t){var n=he(e)?e:L(e);return this.isValid()&&n.isValid()?(t=oe(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function xu(e,t,n,r){var a=he(e)?e:L(e),s=he(t)?t:L(t);return this.isValid()&&a.isValid()&&s.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(a,n):!this.isBefore(a,n))&&(r[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function Du(e,t){var n=he(e)?e:L(e),r;return this.isValid()&&n.isValid()?(t=oe(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function Eu(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function Pu(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Mu(e,t,n){var r,a,s;if(!this.isValid())return NaN;if(r=sr(e,this),!r.isValid())return NaN;switch(a=(r.utcOffset()-this.utcOffset())*6e4,t=oe(t),t){case"year":s=Ft(this,r)/12;break;case"month":s=Ft(this,r);break;case"quarter":s=Ft(this,r)/3;break;case"second":s=(this-r)/1e3;break;case"minute":s=(this-r)/6e4;break;case"hour":s=(this-r)/36e5;break;case"day":s=(this-r-a)/864e5;break;case"week":s=(this-r-a)/6048e5;break;default:s=this-r}return n?s:ae(s)}function Ft(e,t){if(e.date()<t.date())return-Ft(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),a,s;return t-r<0?(a=e.clone().add(n-1,"months"),s=(t-r)/(r-a)):(a=e.clone().add(n+1,"months"),s=(t-r)/(a-r)),-(n+s)||0}g.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";g.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Ou(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Nu(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?Nt(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):xe(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Nt(n,"Z")):Nt(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Ru(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,a,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",s=t+'[")]',this.format(n+r+a+s)}function Fu(e){e||(e=this.isUtc()?g.defaultFormatUtc:g.defaultFormat);var t=Nt(this,e);return this.localeData().postformat(t)}function Au(e,t){return this.isValid()&&(he(e)&&e.isValid()||L(e).isValid())?fe({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Iu(e){return this.from(L(),e)}function Hu(e,t){return this.isValid()&&(he(e)&&e.isValid()||L(e).isValid())?fe({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Bu(e){return this.to(L(),e)}function Qa(e){var t;return e===void 0?this._locale._abbr:(t=Fe(e),t!=null&&(this._locale=t),this)}var es=ie("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function ts(){return this._locale}var Bt=1e3,Je=60*Bt,Ct=60*Je,ns=(365*400+97)*24*Ct;function Qe(e,t){return(e%t+t)%t}function rs(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-ns:new Date(e,t,n).valueOf()}function as(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-ns:Date.UTC(e,t,n)}function Cu(e){var t,n;if(e=oe(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?as:rs,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=Qe(t+(this._isUTC?0:this.utcOffset()*Je),Ct);break;case"minute":t=this._d.valueOf(),t-=Qe(t,Je);break;case"second":t=this._d.valueOf(),t-=Qe(t,Bt);break}return this._d.setTime(t),g.updateOffset(this,!0),this}function ju(e){var t,n;if(e=oe(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?as:rs,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Ct-Qe(t+(this._isUTC?0:this.utcOffset()*Je),Ct)-1;break;case"minute":t=this._d.valueOf(),t+=Je-Qe(t,Je)-1;break;case"second":t=this._d.valueOf(),t+=Bt-Qe(t,Bt)-1;break}return this._d.setTime(t),g.updateOffset(this,!0),this}function Lu(){return this._d.valueOf()-(this._offset||0)*6e4}function qu(){return Math.floor(this.valueOf()/1e3)}function Yu(){return new Date(this.valueOf())}function Uu(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Gu(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Wu(){return this.isValid()?this.toISOString():null}function Vu(){return Yn(this)}function $u(){return He({},T(this))}function zu(){return T(this).overflow}function Zu(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}b("N",0,0,"eraAbbr");b("NN",0,0,"eraAbbr");b("NNN",0,0,"eraAbbr");b("NNNN",0,0,"eraName");b("NNNNN",0,0,"eraNarrow");b("y",["y",1],"yo","eraYear");b("y",["yy",2],0,"eraYear");b("y",["yyy",3],0,"eraYear");b("y",["yyyy",4],0,"eraYear");p("N",ir);p("NN",ir);p("NNN",ir);p("NNNN",id);p("NNNNN",od);H(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var a=n._locale.erasParse(e,r,n._strict);a?T(n).era=a:T(n).invalidEra=e});p("y",at);p("yy",at);p("yyy",at);p("yyyy",at);p("yo",ld);H(["y","yy","yyy","yyyy"],z);H(["yo"],function(e,t,n,r){var a;n._locale._eraYearOrdinalRegex&&(a=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[z]=n._locale.eraYearOrdinalParse(e,a):t[z]=parseInt(e,10)});function Xu(e,t){var n,r,a,s=this._eras||Fe("en")._eras;for(n=0,r=s.length;n<r;++n){switch(typeof s[n].since){case"string":a=g(s[n].since).startOf("day"),s[n].since=a.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":a=g(s[n].until).startOf("day").valueOf(),s[n].until=a.valueOf();break}}return s}function Ku(e,t,n){var r,a,s=this.eras(),i,o,l;for(e=e.toUpperCase(),r=0,a=s.length;r<a;++r)if(i=s[r].name.toUpperCase(),o=s[r].abbr.toUpperCase(),l=s[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(o===e)return s[r];break;case"NNNN":if(i===e)return s[r];break;case"NNNNN":if(l===e)return s[r];break}else if([i,o,l].indexOf(e)>=0)return s[r]}function Ju(e,t){var n=e.since<=e.until?1:-1;return t===void 0?g(e.since).year():g(e.since).year()+(t-e.offset)*n}function Qu(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function ed(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function td(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function nd(){var e,t,n,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(n=a[e].since<=a[e].until?1:-1,r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return(this.year()-g(a[e].since).year())*n+a[e].offset;return this.year()}function rd(e){return F(this,"_erasNameRegex")||or.call(this),e?this._erasNameRegex:this._erasRegex}function ad(e){return F(this,"_erasAbbrRegex")||or.call(this),e?this._erasAbbrRegex:this._erasRegex}function sd(e){return F(this,"_erasNarrowRegex")||or.call(this),e?this._erasNarrowRegex:this._erasRegex}function ir(e,t){return t.erasAbbrRegex(e)}function id(e,t){return t.erasNameRegex(e)}function od(e,t){return t.erasNarrowRegex(e)}function ld(e,t){return t._eraYearOrdinalRegex||at}function or(){var e=[],t=[],n=[],r=[],a,s,i,o,l,u=this.eras();for(a=0,s=u.length;a<s;++a)i=Oe(u[a].name),o=Oe(u[a].abbr),l=Oe(u[a].narrow),t.push(i),e.push(o),n.push(l),r.push(i),r.push(o),r.push(l);this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}b(0,["gg",2],0,function(){return this.weekYear()%100});b(0,["GG",2],0,function(){return this.isoWeekYear()%100});function tn(e,t){b(0,[e,e.length],0,t)}tn("gggg","weekYear");tn("ggggg","weekYear");tn("GGGG","isoWeekYear");tn("GGGGG","isoWeekYear");p("G",Xt);p("g",Xt);p("GG",q,ne);p("gg",q,ne);p("GGGG",zn,$n);p("gggg",zn,$n);p("GGGGG",Zt,$t);p("ggggg",Zt,$t);xt(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=D(e)});xt(["gg","GG"],function(e,t,n,r){t[r]=g.parseTwoDigitYear(e)});function ud(e){return ss.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function dd(e){return ss.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function hd(){return Ne(this.year(),1,4)}function md(){return Ne(this.isoWeekYear(),1,4)}function fd(){var e=this.localeData()._week;return Ne(this.year(),e.dow,e.doy)}function gd(){var e=this.localeData()._week;return Ne(this.weekYear(),e.dow,e.doy)}function ss(e,t,n,r,a){var s;return e==null?vt(this,r,a).year:(s=Ne(e,r,a),t>s&&(t=s),cd.call(this,e,t,n,r,a))}function cd(e,t,n,r,a){var s=Ca(e,t,n,r,a),i=yt(s.year,0,s.dayOfYear);return this.year(i.getUTCFullYear()),this.month(i.getUTCMonth()),this.date(i.getUTCDate()),this}b("Q",0,"Qo","quarter");p("Q",Ea);H("Q",function(e,t){t[Pe]=(D(e)-1)*3});function pd(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}b("D",["DD",2],"Do","date");p("D",q,st);p("DD",q,ne);p("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});H(["D","DD"],ve);H("Do",function(e,t){t[ve]=D(e.match(q)[0])});var is=it("Date",!0);b("DDD",["DDDD",3],"DDDo","dayOfYear");p("DDD",zt);p("DDDD",Pa);H(["DDD","DDDD"],function(e,t,n){n._dayOfYear=D(e)});function yd(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}b("m",["mm",2],0,"minute");p("m",q,Zn);p("mm",q,ne);H(["m","mm"],ue);var vd=it("Minutes",!1);b("s",["ss",2],0,"second");p("s",q,Zn);p("ss",q,ne);H(["s","ss"],Me);var kd=it("Seconds",!1);b("S",0,0,function(){return~~(this.millisecond()/100)});b(0,["SS",2],0,function(){return~~(this.millisecond()/10)});b(0,["SSS",3],0,"millisecond");b(0,["SSSS",4],0,function(){return this.millisecond()*10});b(0,["SSSSS",5],0,function(){return this.millisecond()*100});b(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});b(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});b(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});b(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});p("S",zt,Ea);p("SS",zt,ne);p("SSS",zt,Pa);var Be,os;for(Be="SSSS";Be.length<=9;Be+="S")p(Be,at);function bd(e,t){t[Ye]=D(("0."+e)*1e3)}for(Be="S";Be.length<=9;Be+="S")H(Be,bd);os=it("Milliseconds",!1);b("z",0,0,"zoneAbbr");b("zz",0,0,"zoneName");function _d(){return this._isUTC?"UTC":""}function Sd(){return this._isUTC?"Coordinated Universal Time":""}var h=Tt.prototype;h.add=gu;h.calendar=_u;h.clone=Su;h.diff=Mu;h.endOf=ju;h.format=Fu;h.from=Au;h.fromNow=Iu;h.to=Hu;h.toNow=Bu;h.get=Ro;h.invalidAt=zu;h.isAfter=Tu;h.isBefore=wu;h.isBetween=xu;h.isSame=Du;h.isSameOrAfter=Eu;h.isSameOrBefore=Pu;h.isValid=Vu;h.lang=es;h.locale=Qa;h.localeData=ts;h.max=Vl;h.min=Wl;h.parsingFlags=$u;h.set=Fo;h.startOf=Cu;h.subtract=cu;h.toArray=Uu;h.toObject=Gu;h.toDate=Yu;h.toISOString=Nu;h.inspect=Ru;typeof Symbol<"u"&&Symbol.for!=null&&(h[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});h.toJSON=Wu;h.toString=Ou;h.unix=qu;h.valueOf=Lu;h.creationData=Zu;h.eraName=Qu;h.eraNarrow=ed;h.eraAbbr=td;h.eraYear=nd;h.year=Na;h.isLeapYear=No;h.weekYear=ud;h.isoWeekYear=dd;h.quarter=h.quarters=pd;h.month=Ha;h.daysInMonth=Yo;h.week=h.weeks=Xo;h.isoWeek=h.isoWeeks=Ko;h.weeksInYear=fd;h.weeksInWeekYear=gd;h.isoWeeksInYear=hd;h.isoWeeksInISOWeekYear=md;h.date=is;h.day=h.days=dl;h.weekday=hl;h.isoWeekday=ml;h.dayOfYear=yd;h.hour=h.hours=kl;h.minute=h.minutes=vd;h.second=h.seconds=kd;h.millisecond=h.milliseconds=os;h.utcOffset=tu;h.utc=ru;h.local=au;h.parseZone=su;h.hasAlignedHourOffset=iu;h.isDST=ou;h.isLocal=uu;h.isUtcOffset=du;h.isUtc=Za;h.isUTC=Za;h.zoneAbbr=_d;h.zoneName=Sd;h.dates=ie("dates accessor is deprecated. Use date instead.",is);h.months=ie("months accessor is deprecated. Use month instead",Ha);h.years=ie("years accessor is deprecated. Use year instead",Na);h.zone=ie("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",nu);h.isDSTShifted=ie("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",lu);function Td(e){return L(e*1e3)}function wd(){return L.apply(null,arguments).parseZone()}function ls(e){return e}var A=Gn.prototype;A.calendar=lo;A.longDateFormat=fo;A.invalidDate=co;A.ordinal=vo;A.preparse=ls;A.postformat=ls;A.relativeTime=bo;A.pastFuture=_o;A.set=io;A.eras=Xu;A.erasParse=Ku;A.erasConvertYear=Ju;A.erasAbbrRegex=ad;A.erasNameRegex=rd;A.erasNarrowRegex=sd;A.months=Co;A.monthsShort=jo;A.monthsParse=qo;A.monthsRegex=Go;A.monthsShortRegex=Uo;A.week=Vo;A.firstDayOfYear=Zo;A.firstDayOfWeek=zo;A.weekdays=sl;A.weekdaysMin=ol;A.weekdaysShort=il;A.weekdaysParse=ul;A.weekdaysRegex=fl;A.weekdaysShortRegex=gl;A.weekdaysMinRegex=cl;A.isPM=yl;A.meridiem=bl;function jt(e,t,n,r){var a=Fe(),s=we().set(r,t);return a[n](s,e)}function us(e,t,n){if(Re(e)&&(t=e,e=void 0),e=e||"",t!=null)return jt(e,t,n,"month");var r,a=[];for(r=0;r<12;r++)a[r]=jt(e,r,n,"month");return a}function lr(e,t,n,r){typeof e=="boolean"?(Re(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,Re(t)&&(n=t,t=void 0),t=t||"");var a=Fe(),s=e?a._week.dow:0,i,o=[];if(n!=null)return jt(t,(n+s)%7,r,"day");for(i=0;i<7;i++)o[i]=jt(t,(i+s)%7,r,"day");return o}function xd(e,t){return us(e,t,"months")}function Dd(e,t){return us(e,t,"monthsShort")}function Ed(e,t,n){return lr(e,t,n,"weekdays")}function Pd(e,t,n){return lr(e,t,n,"weekdaysShort")}function Md(e,t,n){return lr(e,t,n,"weekdaysMin")}Ce("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=D(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});g.lang=ie("moment.lang is deprecated. Use moment.locale instead.",Ce);g.langData=ie("moment.langData is deprecated. Use moment.localeData instead.",Fe);var De=Math.abs;function Od(){var e=this._data;return this._milliseconds=De(this._milliseconds),this._days=De(this._days),this._months=De(this._months),e.milliseconds=De(e.milliseconds),e.seconds=De(e.seconds),e.minutes=De(e.minutes),e.hours=De(e.hours),e.months=De(e.months),e.years=De(e.years),this}function ds(e,t,n,r){var a=fe(t,n);return e._milliseconds+=r*a._milliseconds,e._days+=r*a._days,e._months+=r*a._months,e._bubble()}function Nd(e,t){return ds(this,e,t,1)}function Rd(e,t){return ds(this,e,t,-1)}function Nr(e){return e<0?Math.floor(e):Math.ceil(e)}function Fd(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,a,s,i,o,l;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=Nr(Nn(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,a=ae(e/1e3),r.seconds=a%60,s=ae(a/60),r.minutes=s%60,i=ae(s/60),r.hours=i%24,t+=ae(i/24),l=ae(hs(t)),n+=l,t-=Nr(Nn(l)),o=ae(n/12),n%=12,r.days=t,r.months=n,r.years=o,this}function hs(e){return e*4800/146097}function Nn(e){return e*146097/4800}function Ad(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=oe(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+hs(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Nn(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function Ae(e){return function(){return this.as(e)}}var ms=Ae("ms"),Id=Ae("s"),Hd=Ae("m"),Bd=Ae("h"),Cd=Ae("d"),jd=Ae("w"),Ld=Ae("M"),qd=Ae("Q"),Yd=Ae("y"),Ud=ms;function Gd(){return fe(this)}function Wd(e){return e=oe(e),this.isValid()?this[e+"s"]():NaN}function Ve(e){return function(){return this.isValid()?this._data[e]:NaN}}var Vd=Ve("milliseconds"),$d=Ve("seconds"),zd=Ve("minutes"),Zd=Ve("hours"),Xd=Ve("days"),Kd=Ve("months"),Jd=Ve("years");function Qd(){return ae(this.days()/7)}var Ee=Math.round,Xe={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function eh(e,t,n,r,a){return a.relativeTime(t||1,!!n,e,r)}function th(e,t,n,r){var a=fe(e).abs(),s=Ee(a.as("s")),i=Ee(a.as("m")),o=Ee(a.as("h")),l=Ee(a.as("d")),u=Ee(a.as("M")),d=Ee(a.as("w")),f=Ee(a.as("y")),m=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||i<=1&&["m"]||i<n.m&&["mm",i]||o<=1&&["h"]||o<n.h&&["hh",o]||l<=1&&["d"]||l<n.d&&["dd",l];return n.w!=null&&(m=m||d<=1&&["w"]||d<n.w&&["ww",d]),m=m||u<=1&&["M"]||u<n.M&&["MM",u]||f<=1&&["y"]||["yy",f],m[2]=t,m[3]=+e>0,m[4]=r,eh.apply(null,m)}function nh(e){return e===void 0?Ee:typeof e=="function"?(Ee=e,!0):!1}function rh(e,t){return Xe[e]===void 0?!1:t===void 0?Xe[e]:(Xe[e]=t,e==="s"&&(Xe.ss=t-1),!0)}function ah(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=Xe,a,s;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},Xe,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),a=this.localeData(),s=th(this,!n,r,a),n&&(s=a.pastFuture(+this,s)),a.postformat(s)}var mn=Math.abs;function ze(e){return(e>0)-(e<0)||+e}function nn(){if(!this.isValid())return this.localeData().invalidDate();var e=mn(this._milliseconds)/1e3,t=mn(this._days),n=mn(this._months),r,a,s,i,o=this.asSeconds(),l,u,d,f;return o?(r=ae(e/60),a=ae(r/60),e%=60,r%=60,s=ae(n/12),n%=12,i=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=o<0?"-":"",u=ze(this._months)!==ze(o)?"-":"",d=ze(this._days)!==ze(o)?"-":"",f=ze(this._milliseconds)!==ze(o)?"-":"",l+"P"+(s?u+s+"Y":"")+(n?u+n+"M":"")+(t?d+t+"D":"")+(a||r||e?"T":"")+(a?f+a+"H":"")+(r?f+r+"M":"")+(e?f+i+"S":"")):"P0D"}var M=en.prototype;M.isValid=Kl;M.abs=Od;M.add=Nd;M.subtract=Rd;M.as=Ad;M.asMilliseconds=ms;M.asSeconds=Id;M.asMinutes=Hd;M.asHours=Bd;M.asDays=Cd;M.asWeeks=jd;M.asMonths=Ld;M.asQuarters=qd;M.asYears=Yd;M.valueOf=Ud;M._bubble=Fd;M.clone=Gd;M.get=Wd;M.milliseconds=Vd;M.seconds=$d;M.minutes=zd;M.hours=Zd;M.days=Xd;M.weeks=Qd;M.months=Kd;M.years=Jd;M.humanize=ah;M.toISOString=nn;M.toString=nn;M.toJSON=nn;M.locale=Qa;M.localeData=ts;M.toIsoString=ie("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",nn);M.lang=es;b("X",0,0,"unix");b("x",0,0,"valueOf");p("x",Xt);p("X",xo);H("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});H("x",function(e,t,n){n._d=new Date(D(e))});//! moment.js
g.version="2.30.1";ao(L);g.fn=h;g.min=$l;g.max=zl;g.now=Zl;g.utc=we;g.unix=Td;g.months=xd;g.isDate=St;g.locale=Ce;g.invalid=Vt;g.duration=fe;g.isMoment=he;g.weekdays=Ed;g.parseZone=wd;g.localeData=Fe;g.isDuration=Rt;g.monthsShort=Dd;g.weekdaysMin=Md;g.defineLocale=er;g.updateLocale=wl;g.locales=xl;g.weekdaysShort=Pd;g.normalizeUnits=oe;g.relativeTimeRounding=nh;g.relativeTimeThreshold=rh;g.calendarFormat=bu;g.prototype=h;g.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};function fs(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=fs(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Ie(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=fs(e))&&(r&&(r+=" "),r+=t);return r}const ot=e=>Ie({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var sh=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};B.forwardRef((e,t)=>{var{className:n,size:r="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,f=sh(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return X.createElement(a,Object.assign({},f,{ref:t,className:Ie(n,"navds-body-long",`navds-body-long--${r}`,ot({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var ih=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const be=B.forwardRef((e,t)=>{var{className:n,size:r="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,f=ih(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return X.createElement(a,Object.assign({},f,{ref:t,className:Ie(n,"navds-body-short",`navds-body-short--${r}`,ot({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var oh=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};B.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:a,uppercase:s,as:i="p",truncate:o,weight:l="regular",align:u,visuallyHidden:d,textColor:f}=e,m=oh(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return X.createElement(i,Object.assign({},m,{ref:t,className:Ie(n,"navds-detail",ot({spacing:a,truncate:o,weight:l,align:u,visuallyHidden:d,textColor:f,uppercase:s}),{"navds-detail--small":r==="small"})}))});var lh=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};B.forwardRef((e,t)=>{var{className:n,size:r,spacing:a,as:s="p"}=e,i=lh(e,["className","size","spacing","as"]);return X.createElement(s,Object.assign({},i,{ref:t,className:Ie("navds-error-message","navds-label",n,ot({spacing:a}),{"navds-label--small":r==="small"})}))});var uh=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ur=B.forwardRef((e,t)=>{var{level:n="1",size:r,className:a,as:s,spacing:i,align:o,visuallyHidden:l,textColor:u}=e,d=uh(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const f=s??`h${n}`;return X.createElement(f,Object.assign({},d,{ref:t,className:Ie(a,"navds-heading",`navds-heading--${r}`,ot({spacing:i,align:o,visuallyHidden:l,textColor:u}))}))});var dh=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};B.forwardRef((e,t)=>{var{className:n,spacing:r,as:a="p"}=e,s=dh(e,["className","spacing","as"]);return X.createElement(a,Object.assign({},s,{ref:t,className:Ie(n,"navds-ingress",{"navds-typo--spacing":!!r})}))});var hh=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const et=B.forwardRef((e,t)=>{var{className:n,size:r="medium",as:a="label",spacing:s,visuallyHidden:i,textColor:o}=e,l=hh(e,["className","size","as","spacing","visuallyHidden","textColor"]);return X.createElement(a,Object.assign({},l,{ref:t,className:Ie(n,"navds-label",ot({spacing:s,visuallyHidden:i,textColor:o}),{"navds-label--small":r==="small"})}))});var mh=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Rr=B.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",icon:i}=e,o=mh(e,["children","className","variant","size","icon"]);return X.createElement(be,Object.assign({},o,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:Ie("navds-tag",r,`navds-tag--${a}`,`navds-tag--${s}`)}),i&&X.createElement("span",{className:"navds-tag__icon--left"},i),n)});function fh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gs={exports:{}},dt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fr;function gh(){if(Fr)return dt;Fr=1;var e=X,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(o,l,u){var d,f={},m=null,S=null;u!==void 0&&(m=""+u),l.key!==void 0&&(m=""+l.key),l.ref!==void 0&&(S=l.ref);for(d in l)r.call(l,d)&&!s.hasOwnProperty(d)&&(f[d]=l[d]);if(o&&o.defaultProps)for(d in l=o.defaultProps,l)f[d]===void 0&&(f[d]=l[d]);return{$$typeof:t,type:o,key:m,ref:S,props:f,_owner:a.current}}return dt.Fragment=n,dt.jsx=i,dt.jsxs=i,dt}gs.exports=gh();var $=gs.exports;const $e={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};Te($e);Te($e);var cs={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,r.call(this,o)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)t.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(cs);var ch=cs.exports;const re=fh(ch),ph="_borderbox_hicl4_1",yh="_error_hicl4_4",vh="_warning_hicl4_7",kh={borderbox:ph,error:yh,warning:vh};re.bind(kh);const bh="_aksjonspunkt_kn1hn_1",_h="_erAksjonspunktApent_kn1hn_4",Sh="_erIkkeGodkjentAvBeslutter_kn1hn_8",Th={aksjonspunkt:bh,erAksjonspunktApent:_h,erIkkeGodkjentAvBeslutter:Sh};re.bind(Th);Te($e);Te($e);const wh="_tooltip_h8akz_1",xh="_tooltiptext_h8akz_5",Dh="_left_h8akz_22",Eh="_top_h8akz_27",Ph="_right_h8akz_30",Mh="_bottom_h8akz_34",Oh="_showTooltip_h8akz_1",Rn={tooltip:wh,tooltiptext:xh,left:Dh,top:Eh,right:Ph,bottom:Mh,showTooltip:Oh},Nh=re.bind(Rn),Rh=({children:e,content:t,alignRight:n=!1,alignLeft:r=!1,alignTop:a=!1,alignBottom:s=!1})=>$.jsxs("div",{className:Rn.tooltip,children:[$.jsx("span",{className:Nh(Rn.tooltiptext,{right:n||!r&&!a&&!s,left:r,top:a,bottom:s}),children:t}),e]}),Fh=X.forwardRef(({onClick:e=()=>{},onMouseDown:t,tabIndex:n=-1,className:r="",src:a,srcHover:s,alt:i,onKeyDown:o,tooltip:l,alignTooltipLeft:u=!1},d)=>{const[f,m]=B.useState(!1),S=B.useCallback(()=>{m(!0)},[]),w=B.useCallback(()=>{m(!1)},[]),c=B.useCallback(C=>{(C.key==="Enter"||C.key===" ")&&(o&&o(C),C.preventDefault())},[]),O=s&&f?s:a,x=$.jsx("img",{ref:d,className:r,src:O,alt:i,tabIndex:n,onMouseOver:S,onMouseOut:w,onFocus:S,onBlur:w,onKeyDown:c,onMouseDown:t,onClick:e});return l?$.jsx(Rh,{content:l,alignLeft:u,children:x}):x});Fh.displayName="Image";const Ah="_flexColumnNew_1vdv1_1",Ih={flexColumnNew:Ah},Hh=re.bind(Ih),ke=({children:e,className:t})=>$.jsx("div",{className:Hh("flexColumnNew",t),children:e}),Bh="_flexRow_1yf0y_1",Ch="_spaceBetween_1yf0y_9",jh="_alignItemsToBaseline_1yf0y_12",Lh="_alignItemsToFlexEnd_1yf0y_15",qh="_justifyItemsToFlexEnd_1yf0y_18",Yh="_wrap_1yf0y_21",Uh={flexRow:Bh,spaceBetween:Ch,alignItemsToBaseline:jh,alignItemsToFlexEnd:Lh,justifyItemsToFlexEnd:qh,wrap:Yh},Gh=re.bind(Uh),Lt=({children:e,spaceBetween:t=!1,alignItemsToBaseline:n=!1,alignItemsToFlexEnd:r=!1,wrap:a=!1,className:s})=>$.jsx("div",{className:Gh("flexRow",{spaceBetween:t},{alignItemsToBaseline:n},{alignItemsToFlexEnd:r},{wrap:a},s),children:e}),Wh="_flexContainer_1dk1o_1",Vh="_fluid_1dk1o_6",$h="_fullHeight_1dk1o_9",zh="_flexWrap_1dk1o_17",Zh={flexContainer:Wh,fluid:Vh,fullHeight:$h,flexWrap:zh},Xh=re.bind(Zh),qt=({children:e,wrap:t=!1,fullHeight:n=!1})=>$.jsx("div",{className:Xh("flexContainer","fluid",{flexWrap:t,fullHeight:n}),children:e});Te($e);const Kh="_row_1lxv9_1",Jh="_harHover_1lxv9_4",Qh="_rowHeader_1lxv9_7",em="_grayHeader_1lxv9_12",tm="_rowContent_1lxv9_15",nm="_selected_1lxv9_18",rm="_bold_1lxv9_22",am="_dashedBottomBorder_1lxv9_25",sm="_solidBottomBorder_1lxv9_28",im="_apLeftBorder_1lxv9_31",om="_noBottomBorder_1lxv9_34",ps={row:Kh,harHover:Jh,rowHeader:Qh,grayHeader:em,rowContent:tm,selected:nm,bold:rm,dashedBottomBorder:am,solidBottomBorder:sm,apLeftBorder:im,noBottomBorder:om},lm=re.bind(ps),um=(e,t,n)=>r=>{e&&r.button===0&&e(r,t,n)},ys=e=>e.tagName==="TR"?e:ys(e.parentElement),Ar=(e,t)=>{const n=ys(e.target),r=(t?n.nextSibling:n.previousSibling)||n;r&&(r.focus(),e.preventDefault())},dm=(e,t,n,r)=>a=>{a.key==="ArrowDown"?Ar(a,!0):a.key==="ArrowUp"?Ar(a,!1):t&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(t(a,n,r),a.preventDefault()):e&&t&&a.target.tagName!=="TD"&&a.key==="Shift"&&(t(a),a.preventDefault())},hm=e=>t=>{e&&t.target.tagName!=="TD"&&t.key==="Shift"&&(e(t),t.preventDefault())},vs=({id:e,model:t,isHeader:n=!1,hasGrayHeader:r=!1,onMouseDown:a,onKeyDown:s,children:i,noHover:o=!1,isSelected:l=!1,isBold:u=!1,isDashedBottomBorder:d=!1,isSolidBottomBorder:f=!1,isApLeftBorder:m=!1,className:S,useMultiselect:w=!1,hasNoBottomBorder:c=!1})=>$.jsx("tr",{className:lm(S,ps.row,{rowHeader:n,grayHeader:r,rowContent:!n&&!o,selected:l,harHover:!o,bold:u,dashedBottomBorder:d,solidBottomBorder:f,noBottomBorder:c,apLeftBorder:m}),onMouseDown:um(a,e,t),onKeyDown:dm(w,s,e,t),onKeyUp:w?hm(s):void 0,tabIndex:0,children:i}),mm="_columnStyle_1f13u_1",ks={columnStyle:mm},fm=re.bind(ks),tt=({children:e="",className:t,hidden:n=!1,colspanAll:r=!1})=>n?null:$.jsx("td",{className:fm(ks.columnStyle,t),colSpan:r?100:void 0,children:e}),gm="_table_2cnpl_1",cm="_rowHover_2cnpl_25",pm={table:gm,rowHover:cm},ym=re.bind(pm),vm="EMPTY",bs=X.forwardRef(({headerTextCodes:e=[],headerColumnContent:t=[],classNameTable:n="",noHover:r=!1,hasGrayHeader:a=!1,children:s},i)=>$.jsxs("table",{ref:i,className:ym("table",{[n]:n,rowHover:!r}),children:[$.jsx("thead",{children:$.jsxs(vs,{isHeader:!0,noHover:r,hasGrayHeader:a,children:[e.map(o=>typeof o=="string"&&o.startsWith(vm)?$.jsx(tt,{children:" "},o):$.jsx(tt,{children:$.jsx(te,{id:o})},o)),t.map(o=>$.jsx(tt,{children:o},o.key))]})}),$.jsx("tbody",{children:Array.isArray(s)?X.Children.map(s,o=>X.cloneElement(o,{noHover:r})):X.cloneElement(s,{noHover:r})})]}));bs.displayName="Table";const km="_hidden_1pb4f_1",bm="_active_1pb4f_8",_m="_activeRow_1pb4f_15 _active_1pb4f_8",Sm="_toggleIcon_1pb4f_19",Tm="_colTopPadding_1pb4f_22",wm={hidden:km,active:bm,activeRow:_m,toggleIcon:Sm,colTopPadding:Tm};re.bind(wm);Te($e);const xm="_fourPx_qda5k_1",Dm="_eightPx_qda5k_4",Em="_sixteenPx_qda5k_7",Pm="_twentyPx_qda5k_10",Mm="_thirtyTwoPx_qda5k_13",Om="_fourtyPx_qda5k_16",Nm={fourPx:xm,eightPx:Dm,sixteenPx:Em,twentyPx:Pm,thirtyTwoPx:Mm,fourtyPx:Om},Rm=re.bind(Nm),_s=({fourPx:e=!1,eightPx:t=!1,sixteenPx:n=!1,twentyPx:r=!1,thirtyTwoPx:a=!1,fourtyPx:s=!1})=>$.jsx("div",{className:Rm({fourPx:e,eightPx:t,sixteenPx:n,twentyPx:r,thirtyTwoPx:a,fourtyPx:s})});Te($e);const Fm="_divider_1t980_1",Am="_dividerParagraf_1t980_8",Im="_leftPanel_1t980_11",Hm="_rightPanel_1t980_14",Bm={divider:Fm,dividerParagraf:Am,leftPanel:Im,rightPanel:Hm};re.bind(Bm);const Cm="_editedIcon_ulrjl_1",jm={editedIcon:Cm};re.bind(jm);const Lm="_colMargin_1r8hu_1",Yt={colMargin:Lm},At=e=>e?g(e,jn).format(Ln):"-",qm=(e,t,n,r)=>e&&Object.keys(t).length>0?At(Object.values(t)[0]):r?At(r):e?n?At(n):"-":null,Ss=({soknad:e,termindato:t})=>{const n=e.fodselsdatoer?e.fodselsdatoer:{},r=Object.keys(n).length>0?"FodselsammenligningPanel.Fodselsdato":"FodselsammenligningPanel.Termindato",a=Object.keys(n).length>0?"FodselSammenligningOtherPanel.OpplysningerISoknad":"FodselSammenligningOtherPanel.TerminISoknad",s=B.useMemo(()=>qm(!!e,n,e.termindato,t),[e,n,t]);return y.jsxs(y.Fragment,{children:[y.jsx(ur,{size:"small",children:y.jsx(te,{id:a})}),y.jsx(_s,{sixteenPx:!0}),y.jsx(qt,{children:y.jsxs(Lt,{children:[e.utstedtdato&&y.jsxs(ke,{className:Yt.colMargin,children:[y.jsx(et,{size:"small",children:y.jsx(te,{id:"FodselsammenligningPanel.UstedtDato"})}),y.jsx(be,{size:"small",children:At(e.utstedtdato)})]}),y.jsxs(ke,{className:Yt.colMargin,children:[y.jsx(et,{size:"small",children:y.jsx(te,{id:r})}),y.jsx(be,{size:"small",children:s})]}),y.jsxs(ke,{children:[y.jsx(et,{size:"small",children:y.jsx(te,{id:"FodselsammenligningPanel.AntallBarn"})}),y.jsx(be,{size:"small",children:e.antallBarn})]})]})})]})};Ss.__docgenInfo={description:`FodselSammenligningOtherPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""}}};const fn=e=>e?g(e,jn).format(Ln):"-",Ym=(e,t,n)=>{if(!t&&!n)return"";const r=n||{termindato:void 0,avklartBarn:[]};if(e){const a=r.termindato?r.termindato:t==null?void 0:t.termindato;return a?fn(a):void 0}return r.avklartBarn&&r.avklartBarn.length>0?fn(r.avklartBarn[0].fodselsdato):t!=null&&t.fodselsdatoer?fn(Object.values(t.fodselsdatoer)[0]):"-"},Um=(e,t,n)=>{if(!t&&!n)return 0;const r=n||{termindato:void 0,antallBarnTermin:void 0,avklartBarn:[]};return e?r.termindato?r.antallBarnTermin:t==null?void 0:t.antallBarn:r.avklartBarn&&r.avklartBarn.length>0?r.avklartBarn.length:t==null?void 0:t.antallBarn},Ts=({vedtaksDatoSomSvangerskapsuke:e,soknadOriginalBehandling:t,familiehendelseOriginalBehandling:n})=>{const r=n&&!!n.termindato||!t||!t.fodselsdatoer||Object.keys(t.fodselsdatoer).length===0,a=r?"FodselsammenligningPanel.Termindato":"FodselsammenligningPanel.Fodselsdato",s=Ym(r,t,n),i=Um(r,t,n),o=n?(!n.avklartBarn||n.avklartBarn.length===0)&&!!e:!1;return y.jsxs(y.Fragment,{children:[y.jsx(ur,{size:"small",children:y.jsx(te,{id:"FodselsammenligningPanel.Ytelsesvedtak"})}),y.jsx(_s,{sixteenPx:!0}),y.jsx(qt,{children:y.jsxs(Lt,{children:[o&&y.jsxs(ke,{className:Yt.colMargin,children:[y.jsx(et,{size:"small",children:y.jsx(te,{id:"FodselsammenligningPanel.FodtISvangerskapsuke"})}),y.jsx(be,{size:"small",children:e})]}),y.jsxs(ke,{className:Yt.colMargin,children:[y.jsx(et,{size:"small",children:y.jsx(te,{id:a})}),y.jsx(be,{size:"small",children:s||"-"})]}),y.jsxs(ke,{children:[y.jsx(et,{size:"small",children:y.jsx(te,{id:"FodselsammenligningPanel.AntallBarn"})}),y.jsx(be,{size:"small",children:i||"-"})]})]})})]})};Ts.__docgenInfo={description:`FodselSammenligningRevurderingPanel

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
}>`},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const Gm="_noChildrenInTps_3z81w_1",Wm="_colWidthLeft_3z81w_5",Vm="_colWidthRight_3z81w_9",gn={noChildrenInTps:Gm,colWidthLeft:Wm,colWidthRight:Vm},Ir=e=>e?g(e,jn).format(Ln):"-",ws=({behandlingsTypeKode:e,avklartBarn:t,nrOfDodfodteBarn:n,soknad:r,vedtaksDatoSomSvangerskapsuke:a,termindato:s,soknadOriginalBehandling:i,familiehendelseOriginalBehandling:o})=>y.jsx(qt,{children:y.jsxs(Lt,{children:[y.jsxs(ke,{className:gn.colWidthLeft,children:[e!==ct.REVURDERING&&y.jsx(Ss,{soknad:r,termindato:s}),e===ct.REVURDERING&&y.jsx(Ts,{soknadOriginalBehandling:i,familiehendelseOriginalBehandling:o,vedtaksDatoSomSvangerskapsuke:a})]}),y.jsxs(ke,{className:gn.colWidthRight,children:[y.jsx(qt,{children:y.jsxs(Lt,{children:[y.jsx(ke,{children:y.jsx(ur,{size:"small",children:y.jsx(te,{id:"FodselsammenligningPanel.OpplysningerTPS"})})}),n>0&&y.jsx(ke,{children:y.jsx(Rr,{variant:"info",children:y.jsx(te,{id:"FodselsammenligningPanel.Dodfodt"})})})]})}),t.length>0&&y.jsx(bs,{noHover:!0,headerTextCodes:["FodselsammenligningPanel.Fodselsdato","FodselsammenligningPanel.Dodsdato"],children:t.map(l=>{const u=l.fodselsdato+l.dodsdato;return y.jsxs(vs,{id:u,children:[y.jsx(tt,{children:y.jsx(be,{size:"small",children:Ir(l.fodselsdato)})}),y.jsx(tt,{children:y.jsx(be,{size:"small",children:l.dodsdato?Ir(l.dodsdato):"-"})}),y.jsx(tt,{children:l.dodsdato&&y.jsx(Rr,{variant:"info",children:y.jsx(te,{id:"FodselsammenligningPanel.Dod"})})})]},u)})}),t.length===0&&y.jsx("div",{className:gn.noChildrenInTps,children:y.jsx(be,{size:"small",children:"-"})})]})]})});ws.__docgenInfo={description:`FodselSammenlingningPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const $m={"FodselsammenligningPanel.AntallBarn":"Antall barn","FodselsammenligningPanel.Termindato":"Termindato","FodselsammenligningPanel.FodtISvangerskapsuke":"Født i svangerskapsuke","FodselsammenligningPanel.Svangerskapsuke":"Svangerskapsuke","FodselsammenligningPanel.OpplysningerTPS":"Opplysninger om fødsel fra folkeregisteret","FodselsammenligningPanel.Fodselsdato":"Fødselsdato","FodselsammenligningPanel.Dodsdato":"Dødsdato","FodselsammenligningPanel.UstedtDato":"Utstedt dato","FodselsammenligningPanel.Ytelsesvedtak":"Vedtak","FodselsammenligningPanel.Dodfodt":"Dødfødsel","FodselsammenligningPanel.Dod":"Død","FodselSammenligningOtherPanel.OpplysningerISoknad":"Opplysninger om fødsel fra søknaden","FodselSammenligningOtherPanel.TerminISoknad":"Opplysninger om termin oppgitt i søknaden"},zm=Te($m),dr=({behandlingsTypeKode:e,avklartBarn:t=[],termindato:n,vedtaksDatoSomSvangerskapsuke:r,soknad:a,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:i})=>{const o=t.reduce((l,u)=>l+(u.dodsdato?1:0),0);return y.jsx(Vi,{value:zm,children:y.jsx(ws,{avklartBarn:t,termindato:n,vedtaksDatoSomSvangerskapsuke:r,nrOfDodfodteBarn:o,behandlingsTypeKode:e,soknad:a,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:i})})};dr.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningIndex",props:{behandlingsTypeKode:{required:!0,tsType:{name:"string"},description:""},avklartBarn:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Zm=[{fodselsdato:"2019-01-10",dodsdato:"2019-01-10",fnr:"1213200001"}],Xm={fodselsdatoer:{1:"2019-01-10"},termindato:"2019-01-01",utstedtdato:"2019-01-02",antallBarn:1},Km={avklartBarn:[{fodselsdato:"2019-01-10"}],termindato:"2019-01-01",antallBarnTermin:1},tf={title:"prosessOgFakta/prosess-fakta-fodsel-sammenligning",component:dr},hr=({behandlingsTypeKode:e,vedtaksDatoSomSvangerskapsuke:t,familiehendelseOriginalBehandling:n})=>y.jsx(dr,{behandlingsTypeKode:e,avklartBarn:Zm,termindato:"2019-01-01",soknad:Xm,familiehendelseOriginalBehandling:n||Km,vedtaksDatoSomSvangerskapsuke:t}),ht=hr.bind({});ht.args={behandlingsTypeKode:ct.REVURDERING};const mt=hr.bind({});mt.args={behandlingsTypeKode:ct.FORSTEGANGSSOKNAD};const ft=hr.bind({});ft.args={behandlingsTypeKode:ct.REVURDERING,vedtaksDatoSomSvangerskapsuke:43,familiehendelseOriginalBehandling:{avklartBarn:[],termindato:"2019-01-01",antallBarnTermin:1}};var Hr,Br,Cr;ht.parameters={...ht.parameters,docs:{...(Hr=ht.parameters)==null?void 0:Hr.docs,source:{originalSource:`({
  behandlingsTypeKode,
  vedtaksDatoSomSvangerskapsuke,
  familiehendelseOriginalBehandling
}) => <FodselSammenligningIndex behandlingsTypeKode={behandlingsTypeKode} avklartBarn={avklartBarn} termindato="2019-01-01" soknad={soknad} familiehendelseOriginalBehandling={familiehendelseOriginalBehandling || familiehendelse} vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke} />`,...(Cr=(Br=ht.parameters)==null?void 0:Br.docs)==null?void 0:Cr.source}}};var jr,Lr,qr;mt.parameters={...mt.parameters,docs:{...(jr=mt.parameters)==null?void 0:jr.docs,source:{originalSource:`({
  behandlingsTypeKode,
  vedtaksDatoSomSvangerskapsuke,
  familiehendelseOriginalBehandling
}) => <FodselSammenligningIndex behandlingsTypeKode={behandlingsTypeKode} avklartBarn={avklartBarn} termindato="2019-01-01" soknad={soknad} familiehendelseOriginalBehandling={familiehendelseOriginalBehandling || familiehendelse} vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke} />`,...(qr=(Lr=mt.parameters)==null?void 0:Lr.docs)==null?void 0:qr.source}}};var Yr,Ur,Gr;ft.parameters={...ft.parameters,docs:{...(Yr=ft.parameters)==null?void 0:Yr.docs,source:{originalSource:`({
  behandlingsTypeKode,
  vedtaksDatoSomSvangerskapsuke,
  familiehendelseOriginalBehandling
}) => <FodselSammenligningIndex behandlingsTypeKode={behandlingsTypeKode} avklartBarn={avklartBarn} termindato="2019-01-01" soknad={soknad} familiehendelseOriginalBehandling={familiehendelseOriginalBehandling || familiehendelse} vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke} />`,...(Gr=(Ur=ft.parameters)==null?void 0:Ur.docs)==null?void 0:Gr.source}}};const nf=["PanelForNårBehandlingstypeErRevurdering","PanelForNårBehandlingstypeErFørstegangssoknad","PanelForMedVisningAvSvangerskapsuke"];export{ft as PanelForMedVisningAvSvangerskapsuke,mt as PanelForNårBehandlingstypeErFørstegangssoknad,ht as PanelForNårBehandlingstypeErRevurdering,nf as __namedExportsOrder,tf as default};
