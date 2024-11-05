import{j as y}from"./jsx-runtime-CkxqCPlQ.js";import{r as B,R as X}from"./index-DJO9vBfz.js";import{a as Ut}from"./dayjs.min-Bhlr18jM.js";const ct={FORSTEGANGSSOKNAD:"BT-002",KLAGE:"BT-003",REVURDERING:"BT-004",DOKUMENTINNSYN:"BT-006",TILBAKEKREVING:"BT-007",ANKE:"BT-008",TILBAKEKREVING_REVURDERING:"BT-009"};var yn=function(e,t){return yn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])},yn(e,t)};function me(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");yn(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var k=function(){return k=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},k.apply(this,arguments)};function nt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function ce(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,s;r<a;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}function As(e,t,n){if(n===void 0&&(n=Error),!e)throw new n(t)}var M;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(M||(M={}));var q;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(q||(q={}));var rt;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(rt||(rt={}));function yr(e){return e.type===q.literal}function Is(e){return e.type===q.argument}function Kr(e){return e.type===q.number}function Jr(e){return e.type===q.date}function Qr(e){return e.type===q.time}function ea(e){return e.type===q.select}function ta(e){return e.type===q.plural}function Hs(e){return e.type===q.pound}function na(e){return e.type===q.tag}function ra(e){return!!(e&&typeof e=="object"&&e.type===rt.number)}function vn(e){return!!(e&&typeof e=="object"&&e.type===rt.dateTime)}var aa=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,Bs=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function Cs(e){var t={};return e.replace(Bs,function(n){var r=n.length;switch(n[0]){case"G":t.era=r===4?"long":r===5?"narrow":"short";break;case"y":t.year=r===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=r===4?"long":r===5?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][r-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][r-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][r-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][r-1];break;case"s":t.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),t}var js=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function Ls(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var t=e.split(js).filter(function(m){return m.length>0}),n=[],r=0,a=t;r<a.length;r++){var s=a[r],i=s.split("/");if(i.length===0)throw new Error("Invalid number skeleton");for(var o=i[0],l=i.slice(1),u=0,d=l;u<d.length;u++){var f=d[u];if(f.length===0)throw new Error("Invalid number skeleton")}n.push({stem:o,options:l})}return n}function qs(e){return e.replace(/^(.*?)-/,"")}var vr=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,sa=/^(@+)?(\+|#+)?[rs]?$/g,Ys=/(\*)(0+)|(#+)(0+)|(0+)/g,ia=/^(0+)$/;function kr(e){var t={};return e[e.length-1]==="r"?t.roundingPriority="morePrecision":e[e.length-1]==="s"&&(t.roundingPriority="lessPrecision"),e.replace(sa,function(n,r,a){return typeof a!="string"?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):a==="+"?t.minimumSignificantDigits=r.length:r[0]==="#"?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+(typeof a=="string"?a.length:0)),""}),t}function oa(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Us(e){var t;if(e[0]==="E"&&e[1]==="E"?(t={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(t={notation:"scientific"},e=e.slice(1)),t){var n=e.slice(0,2);if(n==="+!"?(t.signDisplay="always",e=e.slice(2)):n==="+?"&&(t.signDisplay="exceptZero",e=e.slice(2)),!ia.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function br(e){var t={},n=oa(e);return n||t}function Gs(e){for(var t={},n=0,r=e;n<r.length;n++){var a=r[n];switch(a.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=a.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=qs(a.options[0]);continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=k(k(k({},t),{notation:"scientific"}),a.options.reduce(function(l,u){return k(k({},l),br(u))},{}));continue;case"engineering":t=k(k(k({},t),{notation:"engineering"}),a.options.reduce(function(l,u){return k(k({},l),br(u))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":t.roundingMode="floor";continue;case"rounding-mode-ceiling":t.roundingMode="ceil";continue;case"rounding-mode-down":t.roundingMode="trunc";continue;case"rounding-mode-up":t.roundingMode="expand";continue;case"rounding-mode-half-even":t.roundingMode="halfEven";continue;case"rounding-mode-half-down":t.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":t.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(Ys,function(l,u,d,f,m,S){if(u)t.minimumIntegerDigits=d.length;else{if(f&&m)throw new Error("We currently do not support maximum integer digits");if(S)throw new Error("We currently do not support exact integer digits")}return""});continue}if(ia.test(a.stem)){t.minimumIntegerDigits=a.stem.length;continue}if(vr.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(vr,function(l,u,d,f,m,S){return d==="*"?t.minimumFractionDigits=u.length:f&&f[0]==="#"?t.maximumFractionDigits=f.length:m&&S?(t.minimumFractionDigits=m.length,t.maximumFractionDigits=m.length+S.length):(t.minimumFractionDigits=u.length,t.maximumFractionDigits=u.length),""});var s=a.options[0];s==="w"?t=k(k({},t),{trailingZeroDisplay:"stripIfInteger"}):s&&(t=k(k({},t),kr(s)));continue}if(sa.test(a.stem)){t=k(k({},t),kr(a.stem));continue}var i=oa(a.stem);i&&(t=k(k({},t),i));var o=Us(a.stem);o&&(t=k(k({},t),o))}return t}var Dt={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Ws(e,t){for(var n="",r=0;r<e.length;r++){var a=e.charAt(r);if(a==="j"){for(var s=0;r+1<e.length&&e.charAt(r+1)===a;)s++,r++;var i=1+(s&1),o=s<2?1:3+(s>>1),l="a",u=Vs(t);for((u=="H"||u=="k")&&(o=0);o-- >0;)n+=l;for(;i-- >0;)n=u+n}else a==="J"?n+="H":n+=a}return n}function Vs(e){var t=e.hourCycle;if(t===void 0&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var n=e.language,r;n!=="root"&&(r=e.maximize().region);var a=Dt[r||""]||Dt[n||""]||Dt["".concat(n,"-001")]||Dt["001"];return a[0]}var sn,$s=new RegExp("^".concat(aa.source,"*")),zs=new RegExp("".concat(aa.source,"*$"));function O(e,t){return{start:e,end:t}}var Zs=!!String.prototype.startsWith&&"_a".startsWith("a",1),Xs=!!String.fromCodePoint,Ks=!!Object.fromEntries,Js=!!String.prototype.codePointAt,Qs=!!String.prototype.trimStart,ei=!!String.prototype.trimEnd,ti=!!Number.isSafeInteger,ni=ti?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},kn=!0;try{var ri=ua("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");kn=((sn=ri.exec("a"))===null||sn===void 0?void 0:sn[0])==="a"}catch{kn=!1}var _r=Zs?function(t,n,r){return t.startsWith(n,r)}:function(t,n,r){return t.slice(r,r+n.length)===n},bn=Xs?String.fromCodePoint:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var r="",a=t.length,s=0,i;a>s;){if(i=t[s++],i>1114111)throw RangeError(i+" is not a valid code point");r+=i<65536?String.fromCharCode(i):String.fromCharCode(((i-=65536)>>10)+55296,i%1024+56320)}return r},Sr=Ks?Object.fromEntries:function(t){for(var n={},r=0,a=t;r<a.length;r++){var s=a[r],i=s[0],o=s[1];n[i]=o}return n},la=Js?function(t,n){return t.codePointAt(n)}:function(t,n){var r=t.length;if(!(n<0||n>=r)){var a=t.charCodeAt(n),s;return a<55296||a>56319||n+1===r||(s=t.charCodeAt(n+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},ai=Qs?function(t){return t.trimStart()}:function(t){return t.replace($s,"")},si=ei?function(t){return t.trimEnd()}:function(t){return t.replace(zs,"")};function ua(e,t){return new RegExp(e,t)}var _n;if(kn){var Tr=ua("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");_n=function(t,n){var r;Tr.lastIndex=n;var a=Tr.exec(t);return(r=a[1])!==null&&r!==void 0?r:""}}else _n=function(t,n){for(var r=[];;){var a=la(t,n);if(a===void 0||da(a)||ui(a))break;r.push(a),n+=a>=65536?2:1}return bn.apply(void 0,r)};var ii=function(){function e(t,n){n===void 0&&(n={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!n.ignoreTag,this.locale=n.locale,this.requiresOtherClause=!!n.requiresOtherClause,this.shouldParseSkeletons=!!n.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(t,n,r){for(var a=[];!this.isEOF();){var s=this.char();if(s===123){var i=this.parseArgument(t,r);if(i.err)return i;a.push(i.val)}else{if(s===125&&t>0)break;if(s===35&&(n==="plural"||n==="selectordinal")){var o=this.clonePosition();this.bump(),a.push({type:q.pound,location:O(o,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(r)break;return this.error(M.UNMATCHED_CLOSING_TAG,O(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&Sn(this.peek()||0)){var i=this.parseTag(t,n);if(i.err)return i;a.push(i.val)}else{var i=this.parseLiteral(t,n);if(i.err)return i;a.push(i.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(t,n){var r=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:q.literal,value:"<".concat(a,"/>"),location:O(r,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(t+1,n,!0);if(s.err)return s;var i=s.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Sn(this.char()))return this.error(M.INVALID_TAG,O(o,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return a!==u?this.error(M.UNMATCHED_CLOSING_TAG,O(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:q.tag,value:a,children:i,location:O(r,this.clonePosition())},err:null}:this.error(M.INVALID_TAG,O(o,this.clonePosition())))}else return this.error(M.UNCLOSED_TAG,O(r,this.clonePosition()))}else return this.error(M.INVALID_TAG,O(r,this.clonePosition()))},e.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&li(this.char());)this.bump();return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(t,n){for(var r=this.clonePosition(),a="";;){var s=this.tryParseQuote(n);if(s){a+=s;continue}var i=this.tryParseUnquoted(t,n);if(i){a+=i;continue}var o=this.tryParseLeftAngleBracket();if(o){a+=o;continue}break}var l=O(r,this.clonePosition());return{val:{type:q.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!oi(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(t){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(t==="plural"||t==="selectordinal")break;return null;default:return null}this.bump();var n=[this.char()];for(this.bump();!this.isEOF();){var r=this.char();if(r===39)if(this.peek()===39)n.push(39),this.bump();else{this.bump();break}else n.push(r);this.bump()}return bn.apply(void 0,n)},e.prototype.tryParseUnquoted=function(t,n){if(this.isEOF())return null;var r=this.char();return r===60||r===123||r===35&&(n==="plural"||n==="selectordinal")||r===125&&t>0?null:(this.bump(),bn(r))},e.prototype.parseArgument=function(t,n){var r=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE,O(r,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(M.EMPTY_ARGUMENT,O(r,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(M.MALFORMED_ARGUMENT,O(r,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE,O(r,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:q.argument,value:a,location:O(r,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE,O(r,this.clonePosition())):this.parseArgumentOptions(t,n,a,r);default:return this.error(M.MALFORMED_ARGUMENT,O(r,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),n=this.offset(),r=_n(this.message,n),a=n+r.length;this.bumpTo(a);var s=this.clonePosition(),i=O(t,s);return{value:r,location:i}},e.prototype.parseArgumentOptions=function(t,n,r,a){var s,i=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(M.EXPECT_ARGUMENT_TYPE,O(i,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),f=this.parseSimpleArgStyleIfPossible();if(f.err)return f;var m=si(f.val);if(m.length===0)return this.error(M.EXPECT_ARGUMENT_STYLE,O(this.clonePosition(),this.clonePosition()));var S=O(d,this.clonePosition());u={style:m,styleLocation:S}}var w=this.tryParseArgumentClose(a);if(w.err)return w;var c=O(a,this.clonePosition());if(u&&_r(u==null?void 0:u.style,"::",0)){var P=ai(u.style.slice(2));if(o==="number"){var f=this.parseNumberSkeletonFromString(P,u.styleLocation);return f.err?f:{val:{type:q.number,value:r,location:c,style:f.val},err:null}}else{if(P.length===0)return this.error(M.EXPECT_DATE_TIME_SKELETON,c);var x=P;this.locale&&(x=Ws(P,this.locale));var m={type:rt.dateTime,pattern:x,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?Cs(x):{}},C=o==="date"?q.date:q.time;return{val:{type:C,value:r,location:c,style:m},err:null}}}return{val:{type:o==="number"?q.number:o==="date"?q.date:q.time,value:r,location:c,style:(s=u==null?void 0:u.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var E=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(M.EXPECT_SELECT_ARGUMENT_OPTIONS,O(E,k({},E)));this.bumpSpace();var le=this.parseIdentifierIfPossible(),K=0;if(o!=="select"&&le.value==="offset"){if(!this.bumpIf(":"))return this.error(M.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,O(this.clonePosition(),this.clonePosition()));this.bumpSpace();var f=this.tryParseDecimalInteger(M.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,M.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(f.err)return f;this.bumpSpace(),le=this.parseIdentifierIfPossible(),K=f.val}var R=this.tryParsePluralOrSelectOptions(t,o,n,le);if(R.err)return R;var w=this.tryParseArgumentClose(a);if(w.err)return w;var _=O(a,this.clonePosition());return o==="select"?{val:{type:q.select,value:r,options:Sr(R.val),location:_},err:null}:{val:{type:q.plural,value:r,options:Sr(R.val),offset:K,pluralType:o==="plural"?"cardinal":"ordinal",location:_},err:null}}default:return this.error(M.INVALID_ARGUMENT_TYPE,O(i,l))}},e.prototype.tryParseArgumentClose=function(t){return this.isEOF()||this.char()!==125?this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE,O(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,n=this.clonePosition();!this.isEOF();){var r=this.char();switch(r){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(M.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,O(a,this.clonePosition()));this.bump();break}case 123:{t+=1,this.bump();break}case 125:{if(t>0)t-=1;else return{val:this.message.slice(n.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(n.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(t,n){var r=[];try{r=Ls(t)}catch{return this.error(M.INVALID_NUMBER_SKELETON,n)}return{val:{type:rt.number,tokens:r,location:n,parsedOptions:this.shouldParseSkeletons?Gs(r):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(t,n,r,a){for(var s,i=!1,o=[],l=new Set,u=a.value,d=a.location;;){if(u.length===0){var f=this.clonePosition();if(n!=="select"&&this.bumpIf("=")){var m=this.tryParseDecimalInteger(M.EXPECT_PLURAL_ARGUMENT_SELECTOR,M.INVALID_PLURAL_ARGUMENT_SELECTOR);if(m.err)return m;d=O(f,this.clonePosition()),u=this.message.slice(f.offset,this.offset())}else break}if(l.has(u))return this.error(n==="select"?M.DUPLICATE_SELECT_ARGUMENT_SELECTOR:M.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);u==="other"&&(i=!0),this.bumpSpace();var S=this.clonePosition();if(!this.bumpIf("{"))return this.error(n==="select"?M.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:M.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,O(this.clonePosition(),this.clonePosition()));var w=this.parseMessage(t+1,n,r);if(w.err)return w;var c=this.tryParseArgumentClose(S);if(c.err)return c;o.push([u,{value:w.val,location:O(S,this.clonePosition())}]),l.add(u),this.bumpSpace(),s=this.parseIdentifierIfPossible(),u=s.value,d=s.location}return o.length===0?this.error(n==="select"?M.EXPECT_SELECT_ARGUMENT_SELECTOR:M.EXPECT_PLURAL_ARGUMENT_SELECTOR,O(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!i?this.error(M.MISSING_OTHER_CLAUSE,O(this.clonePosition(),this.clonePosition())):{val:o,err:null}},e.prototype.tryParseDecimalInteger=function(t,n){var r=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);for(var s=!1,i=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)s=!0,i=i*10+(o-48),this.bump();else break}var l=O(a,this.clonePosition());return s?(i*=r,ni(i)?{val:i,err:null}:this.error(n,l)):this.error(t,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var n=la(this.message,t);if(n===void 0)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return n},e.prototype.error=function(t,n){return{val:null,err:{kind:t,message:this.message,location:n}}},e.prototype.bump=function(){if(!this.isEOF()){var t=this.char();t===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},e.prototype.bumpIf=function(t){if(_r(this.message,t,this.offset())){for(var n=0;n<t.length;n++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(t){var n=this.offset(),r=this.message.indexOf(t,n);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var n=this.offset();if(n===t)break;if(n>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&da(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),n=this.offset(),r=this.message.charCodeAt(n+(t>=65536?2:1));return r??null},e}();function Sn(e){return e>=97&&e<=122||e>=65&&e<=90}function oi(e){return Sn(e)||e===47}function li(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function da(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function ui(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Tn(e){e.forEach(function(t){if(delete t.location,ea(t)||ta(t))for(var n in t.options)delete t.options[n].location,Tn(t.options[n].value);else Kr(t)&&ra(t.style)||(Jr(t)||Qr(t))&&vn(t.style)?delete t.style.location:na(t)&&Tn(t.children)})}function di(e,t){t===void 0&&(t={}),t=k({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var n=new ii(e,t).parse();if(n.err){var r=SyntaxError(M[n.err.kind]);throw r.location=n.err.location,r.originalMessage=n.err.message,r}return t!=null&&t.captureLocation||Tn(n.val),n.val}function on(e,t){var n=t&&t.cache?t.cache:pi,r=t&&t.serializer?t.serializer:ci,a=t&&t.strategy?t.strategy:mi;return a(e,{cache:n,serializer:r})}function hi(e){return e==null||typeof e=="number"||typeof e=="boolean"}function ha(e,t,n,r){var a=hi(r)?r:n(r),s=t.get(a);return typeof s>"u"&&(s=e.call(this,r),t.set(a,s)),s}function ma(e,t,n){var r=Array.prototype.slice.call(arguments,3),a=n(r),s=t.get(a);return typeof s>"u"&&(s=e.apply(this,r),t.set(a,s)),s}function Hn(e,t,n,r,a){return n.bind(t,e,r,a)}function mi(e,t){var n=e.length===1?ha:ma;return Hn(e,this,n,t.cache.create(),t.serializer)}function fi(e,t){return Hn(e,this,ma,t.cache.create(),t.serializer)}function gi(e,t){return Hn(e,this,ha,t.cache.create(),t.serializer)}var ci=function(){return JSON.stringify(arguments)};function Bn(){this.cache=Object.create(null)}Bn.prototype.get=function(e){return this.cache[e]};Bn.prototype.set=function(e,t){this.cache[e]=t};var pi={create:function(){return new Bn}},ln={variadic:fi,monadic:gi},ke;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(ke||(ke={}));var Be=function(e){me(t,e);function t(n,r,a){var s=e.call(this,n)||this;return s.code=r,s.originalMessage=a,s}return t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),wr=function(e){me(t,e);function t(n,r,a,s){return e.call(this,'Invalid values for "'.concat(n,'": "').concat(r,'". Options are "').concat(Object.keys(a).join('", "'),'"'),ke.INVALID_VALUE,s)||this}return t}(Be),yi=function(e){me(t,e);function t(n,r,a){return e.call(this,'Value for "'.concat(n,'" must be of type ').concat(r),ke.INVALID_VALUE,a)||this}return t}(Be),vi=function(e){me(t,e);function t(n,r){return e.call(this,'The intl string context variable "'.concat(n,'" was not provided to the string "').concat(r,'"'),ke.MISSING_VALUE,r)||this}return t}(Be),Z;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(Z||(Z={}));function ki(e){return e.length<2?e:e.reduce(function(t,n){var r=t[t.length-1];return!r||r.type!==Z.literal||n.type!==Z.literal?t.push(n):r.value+=n.value,t},[])}function fa(e){return typeof e=="function"}function Pt(e,t,n,r,a,s,i){if(e.length===1&&yr(e[0]))return[{type:Z.literal,value:e[0].value}];for(var o=[],l=0,u=e;l<u.length;l++){var d=u[l];if(yr(d)){o.push({type:Z.literal,value:d.value});continue}if(Hs(d)){typeof s=="number"&&o.push({type:Z.literal,value:n.getNumberFormat(t).format(s)});continue}var f=d.value;if(!(a&&f in a))throw new vi(f,i);var m=a[f];if(Is(d)){(!m||typeof m=="string"||typeof m=="number")&&(m=typeof m=="string"||typeof m=="number"?String(m):""),o.push({type:typeof m=="string"?Z.literal:Z.object,value:m});continue}if(Jr(d)){var S=typeof d.style=="string"?r.date[d.style]:vn(d.style)?d.style.parsedOptions:void 0;o.push({type:Z.literal,value:n.getDateTimeFormat(t,S).format(m)});continue}if(Qr(d)){var S=typeof d.style=="string"?r.time[d.style]:vn(d.style)?d.style.parsedOptions:r.time.medium;o.push({type:Z.literal,value:n.getDateTimeFormat(t,S).format(m)});continue}if(Kr(d)){var S=typeof d.style=="string"?r.number[d.style]:ra(d.style)?d.style.parsedOptions:void 0;S&&S.scale&&(m=m*(S.scale||1)),o.push({type:Z.literal,value:n.getNumberFormat(t,S).format(m)});continue}if(na(d)){var w=d.children,c=d.value,P=a[c];if(!fa(P))throw new yi(c,"function",i);var x=Pt(w,t,n,r,a,s),C=P(x.map(function(K){return K.value}));Array.isArray(C)||(C=[C]),o.push.apply(o,C.map(function(K){return{type:typeof K=="string"?Z.literal:Z.object,value:K}}))}if(ea(d)){var E=d.options[m]||d.options.other;if(!E)throw new wr(d.value,m,Object.keys(d.options),i);o.push.apply(o,Pt(E.value,t,n,r,a));continue}if(ta(d)){var E=d.options["=".concat(m)];if(!E){if(!Intl.PluralRules)throw new Be(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ke.MISSING_INTL_API,i);var le=n.getPluralRules(t,{type:d.pluralType}).select(m-(d.offset||0));E=d.options[le]||d.options.other}if(!E)throw new wr(d.value,m,Object.keys(d.options),i);o.push.apply(o,Pt(E.value,t,n,r,a,m-(d.offset||0)));continue}}return ki(o)}function bi(e,t){return t?k(k(k({},e||{}),t||{}),Object.keys(e).reduce(function(n,r){return n[r]=k(k({},e[r]),t[r]||{}),n},{})):e}function _i(e,t){return t?Object.keys(e).reduce(function(n,r){return n[r]=bi(e[r],t[r]),n},k({},e)):e}function un(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}function Si(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:on(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.NumberFormat).bind.apply(t,ce([void 0],n,!1)))},{cache:un(e.number),strategy:ln.variadic}),getDateTimeFormat:on(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.DateTimeFormat).bind.apply(t,ce([void 0],n,!1)))},{cache:un(e.dateTime),strategy:ln.variadic}),getPluralRules:on(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.PluralRules).bind.apply(t,ce([void 0],n,!1)))},{cache:un(e.pluralRules),strategy:ln.variadic})}}var ga=function(){function e(t,n,r,a){var s=this;if(n===void 0&&(n=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var u=s.formatToParts(l);if(u.length===1)return u[0].value;var d=u.reduce(function(f,m){return!f.length||m.type!==Z.literal||typeof f[f.length-1]!="string"?f.push(m.value):f[f.length-1]+=m.value,f},[]);return d.length<=1?d[0]||"":d},this.formatToParts=function(l){return Pt(s.ast,s.locales,s.formatters,s.formats,l,void 0,s.message)},this.resolvedOptions=function(){var l;return{locale:((l=s.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=n,this.resolvedLocale=e.resolveLocale(n),typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var i=a||{};i.formatters;var o=nt(i,["formatters"]);this.ast=e.__parse(t,k(k({},o),{locale:this.resolvedLocale}))}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=_i(e.formats,r),this.formatters=a&&a.formatters||Si(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(t){if(!(typeof Intl.Locale>"u")){var n=Intl.NumberFormat.supportedLocalesOf(t);return n.length>0?new Intl.Locale(n[0]):new Intl.Locale(typeof t=="string"?t:t[0])}},e.__parse=di,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}();function Ce(e,t){var n=t&&t.cache?t.cache:Oi,r=t&&t.serializer?t.serializer:Mi,a=t&&t.strategy?t.strategy:wi;return a(e,{cache:n,serializer:r})}function Ti(e){return e==null||typeof e=="number"||typeof e=="boolean"}function ca(e,t,n,r){var a=Ti(r)?r:n(r),s=t.get(a);return typeof s>"u"&&(s=e.call(this,r),t.set(a,s)),s}function pa(e,t,n){var r=Array.prototype.slice.call(arguments,3),a=n(r),s=t.get(a);return typeof s>"u"&&(s=e.apply(this,r),t.set(a,s)),s}function Cn(e,t,n,r,a){return n.bind(t,e,r,a)}function wi(e,t){var n=e.length===1?ca:pa;return Cn(e,this,n,t.cache.create(),t.serializer)}function xi(e,t){return Cn(e,this,pa,t.cache.create(),t.serializer)}function Di(e,t){return Cn(e,this,ca,t.cache.create(),t.serializer)}var Mi=function(){return JSON.stringify(arguments)};function jn(){this.cache=Object.create(null)}jn.prototype.get=function(e){return this.cache[e]};jn.prototype.set=function(e,t){this.cache[e]=t};var Oi={create:function(){return new jn}},je={variadic:xi,monadic:Di},Ge;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Ge||(Ge={}));var bt=function(e){me(t,e);function t(n,r,a){var s=this,i=a?a instanceof Error?a:new Error(String(a)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(n,"] ").concat(r,`
`).concat(i?`
`.concat(i.message,`
`).concat(i.stack):""))||this,s.code=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,t),s}return t}(Error),Ni=function(e){me(t,e);function t(n,r){return e.call(this,Ge.UNSUPPORTED_FORMATTER,n,r)||this}return t}(bt),Pi=function(e){me(t,e);function t(n,r){return e.call(this,Ge.INVALID_CONFIG,n,r)||this}return t}(bt),xr=function(e){me(t,e);function t(n,r){return e.call(this,Ge.MISSING_DATA,n,r)||this}return t}(bt),se=function(e){me(t,e);function t(n,r,a){var s=e.call(this,Ge.FORMAT_ERROR,"".concat(n,`
Locale: `).concat(r,`
`),a)||this;return s.locale=r,s}return t}(bt),dn=function(e){me(t,e);function t(n,r,a,s){var i=e.call(this,"".concat(n,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),r,s)||this;return i.descriptor=a,i.locale=r,i}return t}(se),Ei=function(e){me(t,e);function t(n,r){var a=e.call(this,Ge.MISSING_TRANSLATION,'Missing message: "'.concat(n.id,'" for locale "').concat(r,'", using ').concat(n.defaultMessage?"default message (".concat(typeof n.defaultMessage=="string"?n.defaultMessage:n.defaultMessage.map(function(s){var i;return(i=s.value)!==null&&i!==void 0?i:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=n,a}return t}(bt);function We(e,t,n){return n===void 0&&(n={}),t.reduce(function(r,a){return a in e?r[a]=e[a]:a in n&&(r[a]=n[a]),r},{})}var Ri=function(e){},Fi=function(e){},ya={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Ri,onWarn:Fi};function va(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Le(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}function Ai(e){e===void 0&&(e=va());var t=Intl.RelativeTimeFormat,n=Intl.ListFormat,r=Intl.DisplayNames,a=Ce(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.DateTimeFormat).bind.apply(o,ce([void 0],l,!1)))},{cache:Le(e.dateTime),strategy:je.variadic}),s=Ce(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.NumberFormat).bind.apply(o,ce([void 0],l,!1)))},{cache:Le(e.number),strategy:je.variadic}),i=Ce(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.PluralRules).bind.apply(o,ce([void 0],l,!1)))},{cache:Le(e.pluralRules),strategy:je.variadic});return{getDateTimeFormat:a,getNumberFormat:s,getMessageFormat:Ce(function(o,l,u,d){return new ga(o,l,u,k({formatters:{getNumberFormat:s,getDateTimeFormat:a,getPluralRules:i}},d||{}))},{cache:Le(e.message),strategy:je.variadic}),getRelativeTimeFormat:Ce(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(t.bind.apply(t,ce([void 0],o,!1)))},{cache:Le(e.relativeTime),strategy:je.variadic}),getPluralRules:i,getListFormat:Ce(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(n.bind.apply(n,ce([void 0],o,!1)))},{cache:Le(e.list),strategy:je.variadic}),getDisplayNames:Ce(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(r.bind.apply(r,ce([void 0],o,!1)))},{cache:Le(e.displayNames),strategy:je.variadic})}}function Ln(e,t,n,r){var a=e&&e[t],s;if(a&&(s=a[n]),s)return s;r(new Ni("No ".concat(t," format named: ").concat(n)))}function Ii(e,t,n){if(n===void 0&&(n=Error),!e)throw new n(t)}var wn;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(wn||(wn={}));var Dr;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Dr||(Dr={}));function Mt(e,t){return Object.keys(e).reduce(function(n,r){return n[r]=k({timeZone:t},e[r]),n},{})}function Mr(e,t){var n=Object.keys(k(k({},e),t));return n.reduce(function(r,a){return r[a]=k(k({},e[a]||{}),t[a]||{}),r},{})}function Or(e,t){if(!t)return e;var n=ga.formats;return k(k(k({},n),e),{date:Mr(Mt(n.date,t),Mt(e.date||{},t)),time:Mr(Mt(n.time,t),Mt(e.time||{},t))})}var xn=function(e,t,n,r,a){var s=e.locale,i=e.formats,o=e.messages,l=e.defaultLocale,u=e.defaultFormats,d=e.fallbackOnEmptyString,f=e.onError,m=e.timeZone,S=e.defaultRichTextElements;n===void 0&&(n={id:""});var w=n.id,c=n.defaultMessage;Ii(!!w,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var P=String(w),x=o&&Object.prototype.hasOwnProperty.call(o,P)&&o[P];if(Array.isArray(x)&&x.length===1&&x[0].type===wn.literal)return x[0].value;if(!r&&x&&typeof x=="string"&&!S)return x.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=k(k({},S),r||{}),i=Or(i,m),u=Or(u,m),!x){if(d===!1&&x==="")return x;if((!c||s&&s.toLowerCase()!==l.toLowerCase())&&f(new Ei(n,s)),c)try{var C=t.getMessageFormat(c,l,u,a);return C.format(r)}catch(E){return f(new dn('Error formatting default message for: "'.concat(P,'", rendering default message verbatim'),s,n,E)),typeof c=="string"?c:P}return P}try{var C=t.getMessageFormat(x,s,i,k({formatters:t},a||{}));return C.format(r)}catch(E){f(new dn('Error formatting message: "'.concat(P,'", using ').concat(c?"default message":"id"," as fallback."),s,n,E))}if(c)try{var C=t.getMessageFormat(c,l,u,a);return C.format(r)}catch(E){f(new dn('Error formatting the default message for: "'.concat(P,'", rendering message verbatim'),s,n,E))}return typeof x=="string"?x:typeof c=="string"?c:P},ka=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Gt(e,t,n,r){var a=e.locale,s=e.formats,i=e.onError,o=e.timeZone;r===void 0&&(r={});var l=r.format,u=k(k({},o&&{timeZone:o}),l&&Ln(s,t,l,i)),d=We(r,ka,u);return t==="time"&&!d.hour&&!d.minute&&!d.second&&!d.timeStyle&&!d.dateStyle&&(d=k(k({},d),{hour:"numeric",minute:"numeric"})),n(a,d)}function Hi(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Gt(e,"date",t,i).format(o)}catch(l){e.onError(new se("Error formatting date.",e.locale,l))}return String(o)}function Bi(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Gt(e,"time",t,i).format(o)}catch(l){e.onError(new se("Error formatting time.",e.locale,l))}return String(o)}function Ci(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=n[2],o=i===void 0?{}:i,l=e.timeZone,u=e.locale,d=e.onError,f=We(o,ka,l?{timeZone:l}:{});try{return t(u,f).formatRange(a,s)}catch(m){d(new se("Error formatting date time range.",e.locale,m))}return String(a)}function ji(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Gt(e,"date",t,i).formatToParts(o)}catch(l){e.onError(new se("Error formatting date.",e.locale,l))}return[]}function Li(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=n[0],s=n[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Gt(e,"time",t,i).formatToParts(o)}catch(l){e.onError(new se("Error formatting time.",e.locale,l))}return[]}var qi=["style","type","fallback","languageDisplay"];function Yi(e,t,n,r){var a=e.locale,s=e.onError,i=Intl.DisplayNames;i||s(new Be(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,ke.MISSING_INTL_API));var o=We(r,qi);try{return t(a,o).of(n)}catch(l){s(new se("Error formatting display name.",a,l))}}var Ui=["type","style"],Nr=Date.now();function Gi(e){return"".concat(Nr,"_").concat(e,"_").concat(Nr)}function Wi(e,t,n,r){r===void 0&&(r={});var a=ba(e,t,n,r).reduce(function(s,i){var o=i.value;return typeof o!="string"?s.push(o):typeof s[s.length-1]=="string"?s[s.length-1]+=o:s.push(o),s},[]);return a.length===1?a[0]:a.length===0?"":a}function ba(e,t,n,r){var a=e.locale,s=e.onError;r===void 0&&(r={});var i=Intl.ListFormat;i||s(new Be(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,ke.MISSING_INTL_API));var o=We(r,Ui);try{var l={},u=n.map(function(d,f){if(typeof d=="object"){var m=Gi(f);return l[m]=d,m}return String(d)});return t(a,o).formatToParts(u).map(function(d){return d.type==="literal"?d:k(k({},d),{value:l[d.value]||d.value})})}catch(d){s(new se("Error formatting list.",a,d))}return n}var Vi=["type"];function $i(e,t,n,r){var a=e.locale,s=e.onError;r===void 0&&(r={}),Intl.PluralRules||s(new Be(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ke.MISSING_INTL_API));var i=We(r,Vi);try{return t(a,i).select(n)}catch(o){s(new se("Error formatting plural.",a,o))}return"other"}var zi=["numeric","style"];function Zi(e,t,n){var r=e.locale,a=e.formats,s=e.onError;n===void 0&&(n={});var i=n.format,o=!!i&&Ln(a,"relative",i,s)||{},l=We(n,zi,o);return t(r,l)}function Xi(e,t,n,r,a){a===void 0&&(a={}),r||(r="second");var s=Intl.RelativeTimeFormat;s||e.onError(new Be(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,ke.MISSING_INTL_API));try{return Zi(e,t,a).format(n,r)}catch(i){e.onError(new se("Error formatting relative time.",e.locale,i))}return String(n)}var Ki=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function _a(e,t,n){var r=e.locale,a=e.formats,s=e.onError;n===void 0&&(n={});var i=n.format,o=i&&Ln(a,"number",i,s)||{},l=We(n,Ki,o);return t(r,l)}function Ji(e,t,n,r){r===void 0&&(r={});try{return _a(e,t,r).format(n)}catch(a){e.onError(new se("Error formatting number.",e.locale,a))}return String(n)}function Qi(e,t,n,r){r===void 0&&(r={});try{return _a(e,t,r).formatToParts(n)}catch(a){e.onError(new se("Error formatting number.",e.locale,a))}return[]}function eo(e){var t=e?e[Object.keys(e)[0]]:void 0;return typeof t=="string"}function to(e){e.onWarn&&e.defaultRichTextElements&&eo(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function no(e,t){var n=Ai(t),r=k(k({},ya),e),a=r.locale,s=r.defaultLocale,i=r.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&i?i(new xr('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&i&&i(new xr('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(i&&i(new Pi('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),to(r),k(k({},r),{formatters:n,formatNumber:Ji.bind(null,r,n.getNumberFormat),formatNumberToParts:Qi.bind(null,r,n.getNumberFormat),formatRelativeTime:Xi.bind(null,r,n.getRelativeTimeFormat),formatDate:Hi.bind(null,r,n.getDateTimeFormat),formatDateToParts:ji.bind(null,r,n.getDateTimeFormat),formatTime:Bi.bind(null,r,n.getDateTimeFormat),formatDateTimeRange:Ci.bind(null,r,n.getDateTimeFormat),formatTimeToParts:Li.bind(null,r,n.getDateTimeFormat),formatPlural:$i.bind(null,r,n.getPluralRules),formatMessage:xn.bind(null,r,n),$t:xn.bind(null,r,n),formatList:Wi.bind(null,r,n.getListFormat),formatListToParts:ba.bind(null,r,n.getListFormat),formatDisplayName:Yi.bind(null,r,n.getDisplayNames)})}function ro(e){As(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var ao=k(k({},ya),{textComponent:B.Fragment});function so(e){return function(t){return e(B.Children.toArray(t))}}function Pr(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),a=n.length;if(r.length!==a)return!1;for(var s=0;s<a;s++){var i=n[s];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}var qn=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=B.createContext(null)):B.createContext(null);qn.Consumer;var io=qn.Provider,oo=io,lo=qn;function Yn(){var e=B.useContext(lo);return ro(e),e}var Dn;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Dn||(Dn={}));var Mn;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Mn||(Mn={}));function Sa(e){var t=function(n){var r=Yn(),a=n.value,s=n.children,i=nt(n,["value","children"]),o=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?r.formatDateToParts(o,i):r.formatTimeToParts(o,i);return s(l)};return t.displayName=Mn[e],t}function _t(e){var t=function(n){var r=Yn(),a=n.value,s=n.children,i=nt(n,["value","children"]),o=r[e](a,i);if(typeof s=="function")return s(o);var l=r.textComponent||B.Fragment;return B.createElement(l,null,o)};return t.displayName=Dn[e],t}function Ta(e){return e&&Object.keys(e).reduce(function(t,n){var r=e[n];return t[n]=fa(r)?so(r):r,t},{})}var Er=function(e,t,n,r){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];var i=Ta(r),o=xn.apply(void 0,ce([e,t,n,i],a,!1));return Array.isArray(o)?B.Children.toArray(o):o},uo=function(e,t){var n=e.defaultRichTextElements,r=nt(e,["defaultRichTextElements"]),a=Ta(n),s=no(k(k(k({},ao),r),{defaultRichTextElements:a}),t),i={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:a};return k(k({},s),{formatMessage:Er.bind(null,i,s.formatters),$t:Er.bind(null,i,s.formatters)})};function ho(e,t){var n=e.values,r=nt(e,["values"]),a=t.values,s=nt(t,["values"]);return Pr(a,n)&&Pr(r,s)}function wa(e){var t=Yn(),n=t.formatMessage,r=t.textComponent,a=r===void 0?B.Fragment:r,s=e.id,i=e.description,o=e.defaultMessage,l=e.values,u=e.children,d=e.tagName,f=d===void 0?a:d,m=e.ignoreTag,S={id:s,description:i,defaultMessage:o},w=n(S,l,{ignoreTag:m});return typeof u=="function"?u(Array.isArray(w)?w:[w]):f?B.createElement(f,null,B.Children.toArray(w)):B.createElement(B.Fragment,null,w)}wa.displayName="FormattedMessage";var te=B.memo(wa,ho);te.displayName="MemoizedFormattedMessage";_t("formatDate");_t("formatTime");_t("formatNumber");_t("formatList");_t("formatDisplayName");Sa("formatDate");Sa("formatTime");var Wt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Un(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xa={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Wt,function(){var n="minute",r=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(s,i,o){var l=i.prototype;o.utc=function(c){var P={date:c,utc:!0,args:arguments};return new i(P)},l.utc=function(c){var P=o(this.toDate(),{locale:this.$L,utc:!0});return c?P.add(this.utcOffset(),n):P},l.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var u=l.parse;l.parse=function(c){c.utc&&(this.$u=!0),this.$utils().u(c.$offset)||(this.$offset=c.$offset),u.call(this,c)};var d=l.init;l.init=function(){if(this.$u){var c=this.$d;this.$y=c.getUTCFullYear(),this.$M=c.getUTCMonth(),this.$D=c.getUTCDate(),this.$W=c.getUTCDay(),this.$H=c.getUTCHours(),this.$m=c.getUTCMinutes(),this.$s=c.getUTCSeconds(),this.$ms=c.getUTCMilliseconds()}else d.call(this)};var f=l.utcOffset;l.utcOffset=function(c,P){var x=this.$utils().u;if(x(c))return this.$u?0:x(this.$offset)?f.call(this):this.$offset;if(typeof c=="string"&&(c=function(K){K===void 0&&(K="");var R=K.match(r);if(!R)return null;var _=(""+R[0]).match(a)||["-",0,0],v=_[0],I=60*+_[1]+ +_[2];return I===0?0:v==="+"?I:-I}(c),c===null))return this;var C=Math.abs(c)<=16?60*c:c,E=this;if(P)return E.$offset=C,E.$u=c===0,E;if(c!==0){var le=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(E=this.local().add(C+le,n)).$offset=C,E.$x.$localOffset=le}else E=this.utc();return E};var m=l.format;l.format=function(c){var P=c||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return m.call(this,P)},l.valueOf=function(){var c=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*c},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var S=l.toDate;l.toDate=function(c){return c==="s"&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():S.call(this)};var w=l.diff;l.diff=function(c,P,x){if(c&&this.$u===c.$u)return w.call(this,c,P,x);var C=this.local(),E=o(c).local();return w.call(C,E,P,x)}}})})(xa);var mo=xa.exports;const fo=Un(mo);var Da={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Wt,function(){var n,r,a=1e3,s=6e4,i=36e5,o=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,d=2628e6,f=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,m={years:u,months:d,days:o,hours:i,minutes:s,seconds:a,milliseconds:1,weeks:6048e5},S=function(R){return R instanceof le},w=function(R,_,v){return new le(R,v,_.$l)},c=function(R){return r.p(R)+"s"},P=function(R){return R<0},x=function(R){return P(R)?Math.ceil(R):Math.floor(R)},C=function(R){return Math.abs(R)},E=function(R,_){return R?P(R)?{negative:!0,format:""+C(R)+_}:{negative:!1,format:""+R+_}:{negative:!1,format:""}},le=function(){function R(v,I,V){var G=this;if(this.$d={},this.$l=V,v===void 0&&(this.$ms=0,this.parseFromMilliseconds()),I)return w(v*m[c(I)],this);if(typeof v=="number")return this.$ms=v,this.parseFromMilliseconds(),this;if(typeof v=="object")return Object.keys(v).forEach(function(ge){G.$d[c(ge)]=v[ge]}),this.calMilliseconds(),this;if(typeof v=="string"){var J=v.match(f);if(J){var ee=J.slice(2).map(function(ge){return ge!=null?Number(ge):0});return this.$d.years=ee[0],this.$d.months=ee[1],this.$d.weeks=ee[2],this.$d.days=ee[3],this.$d.hours=ee[4],this.$d.minutes=ee[5],this.$d.seconds=ee[6],this.calMilliseconds(),this}}return this}var _=R.prototype;return _.calMilliseconds=function(){var v=this;this.$ms=Object.keys(this.$d).reduce(function(I,V){return I+(v.$d[V]||0)*m[V]},0)},_.parseFromMilliseconds=function(){var v=this.$ms;this.$d.years=x(v/u),v%=u,this.$d.months=x(v/d),v%=d,this.$d.days=x(v/o),v%=o,this.$d.hours=x(v/i),v%=i,this.$d.minutes=x(v/s),v%=s,this.$d.seconds=x(v/a),v%=a,this.$d.milliseconds=v},_.toISOString=function(){var v=E(this.$d.years,"Y"),I=E(this.$d.months,"M"),V=+this.$d.days||0;this.$d.weeks&&(V+=7*this.$d.weeks);var G=E(V,"D"),J=E(this.$d.hours,"H"),ee=E(this.$d.minutes,"M"),ge=this.$d.seconds||0;this.$d.milliseconds&&(ge+=this.$d.milliseconds/1e3,ge=Math.round(1e3*ge)/1e3);var rn=E(ge,"S"),Rs=v.negative||I.negative||G.negative||J.negative||ee.negative||rn.negative,Fs=J.format||ee.format||rn.format?"T":"",an=(Rs?"-":"")+"P"+v.format+I.format+G.format+Fs+J.format+ee.format+rn.format;return an==="P"||an==="-P"?"P0D":an},_.toJSON=function(){return this.toISOString()},_.format=function(v){var I=v||"YYYY-MM-DDTHH:mm:ss",V={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return I.replace(l,function(G,J){return J||String(V[G])})},_.as=function(v){return this.$ms/m[c(v)]},_.get=function(v){var I=this.$ms,V=c(v);return V==="milliseconds"?I%=1e3:I=V==="weeks"?x(I/m[V]):this.$d[V],I||0},_.add=function(v,I,V){var G;return G=I?v*m[c(I)]:S(v)?v.$ms:w(v,this).$ms,w(this.$ms+G*(V?-1:1),this)},_.subtract=function(v,I){return this.add(v,I,!0)},_.locale=function(v){var I=this.clone();return I.$l=v,I},_.clone=function(){return w(this.$ms,this)},_.humanize=function(v){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!v)},_.valueOf=function(){return this.asMilliseconds()},_.milliseconds=function(){return this.get("milliseconds")},_.asMilliseconds=function(){return this.as("milliseconds")},_.seconds=function(){return this.get("seconds")},_.asSeconds=function(){return this.as("seconds")},_.minutes=function(){return this.get("minutes")},_.asMinutes=function(){return this.as("minutes")},_.hours=function(){return this.get("hours")},_.asHours=function(){return this.as("hours")},_.days=function(){return this.get("days")},_.asDays=function(){return this.as("days")},_.weeks=function(){return this.get("weeks")},_.asWeeks=function(){return this.as("weeks")},_.months=function(){return this.get("months")},_.asMonths=function(){return this.as("months")},_.years=function(){return this.get("years")},_.asYears=function(){return this.as("years")},R}(),K=function(R,_,v){return R.add(_.years()*v,"y").add(_.months()*v,"M").add(_.days()*v,"d").add(_.hours()*v,"h").add(_.minutes()*v,"m").add(_.seconds()*v,"s").add(_.milliseconds()*v,"ms")};return function(R,_,v){n=v,r=v().$utils(),v.duration=function(G,J){var ee=v.locale();return w(G,{$l:ee},J)},v.isDuration=S;var I=_.prototype.add,V=_.prototype.subtract;_.prototype.add=function(G,J){return S(G)?K(this,G,1):I.bind(this)(G,J)},_.prototype.subtract=function(G,J){return S(G)?K(this,G,-1):V.bind(this)(G,J)}}})})(Da);var go=Da.exports;const co=Un(go);var Ma={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Wt,function(){var n="day";return function(r,a,s){var i=function(u){return u.add(4-u.isoWeekday(),n)},o=a.prototype;o.isoWeekYear=function(){return i(this).year()},o.isoWeek=function(u){if(!this.$utils().u(u))return this.add(7*(u-this.isoWeek()),n);var d,f,m,S,w=i(this),c=(d=this.isoWeekYear(),f=this.$u,m=(f?s.utc:s)().year(d).startOf("year"),S=4-m.isoWeekday(),m.isoWeekday()>4&&(S+=7),m.add(S,n));return w.diff(c,"week")+1},o.isoWeekday=function(u){return this.$utils().u(u)?this.day()||7:this.day(this.day()%7?u:u-7)};var l=o.startOf;o.startOf=function(u,d){var f=this.$utils(),m=!!f.u(d)||d;return f.p(u)==="isoweek"?m?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(u,d)}}})})(Ma);var po=Ma.exports;const yo=Un(po);var vo={exports:{}};(function(e,t){(function(n,r){e.exports=r(Ut)})(Wt,function(n){function r(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var a=r(n),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})})(vo);const ko=va(),_e=e=>uo({locale:"nb-NO",messages:e},ko),Oa={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"},Gn="YYYY-MM-DD",Wn="DD.MM.YYYY";Ut.extend(fo);Ut.extend(yo);Ut.extend(co);_e(Oa);_e(Oa);//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Na;function g(){return Na.apply(null,arguments)}function bo(e){Na=e}function de(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Ue(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function F(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Vn(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(F(e,t))return!1;return!0}function Q(e){return e===void 0}function Pe(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function St(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Pa(e,t){var n=[],r,a=e.length;for(r=0;r<a;++r)n.push(t(e[r],r));return n}function Ae(e,t){for(var n in t)F(t,n)&&(e[n]=t[n]);return F(t,"toString")&&(e.toString=t.toString),F(t,"valueOf")&&(e.valueOf=t.valueOf),e}function Se(e,t,n,r){return Qa(e,t,n,r,!0).utc()}function _o(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function T(e){return e._pf==null&&(e._pf=_o()),e._pf}var On;Array.prototype.some?On=Array.prototype.some:On=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function $n(e){var t=null,n=!1,r=e._d&&!isNaN(e._d.getTime());if(r&&(t=T(e),n=On.call(t.parsedDateParts,function(a){return a!=null}),r=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n),e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r;return e._isValid}function Vt(e){var t=Se(NaN);return e!=null?Ae(T(t),e):T(t).userInvalidated=!0,t}var Rr=g.momentProperties=[],hn=!1;function zn(e,t){var n,r,a,s=Rr.length;if(Q(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),Q(t._i)||(e._i=t._i),Q(t._f)||(e._f=t._f),Q(t._l)||(e._l=t._l),Q(t._strict)||(e._strict=t._strict),Q(t._tzm)||(e._tzm=t._tzm),Q(t._isUTC)||(e._isUTC=t._isUTC),Q(t._offset)||(e._offset=t._offset),Q(t._pf)||(e._pf=T(t)),Q(t._locale)||(e._locale=t._locale),s>0)for(n=0;n<s;n++)r=Rr[n],a=t[r],Q(a)||(e[r]=a);return e}function Tt(e){zn(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),hn===!1&&(hn=!0,g.updateOffset(this),hn=!1)}function he(e){return e instanceof Tt||e!=null&&e._isAMomentObject!=null}function Ea(e){g.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function ie(e,t){var n=!0;return Ae(function(){if(g.deprecationHandler!=null&&g.deprecationHandler(null,e),n){var r=[],a,s,i,o=arguments.length;for(s=0;s<o;s++){if(a="",typeof arguments[s]=="object"){a+=`
[`+s+"] ";for(i in arguments[0])F(arguments[0],i)&&(a+=i+": "+arguments[0][i]+", ");a=a.slice(0,-2)}else a=arguments[s];r.push(a)}Ea(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var Fr={};function Ra(e,t){g.deprecationHandler!=null&&g.deprecationHandler(e,t),Fr[e]||(Ea(t),Fr[e]=!0)}g.suppressDeprecationWarnings=!1;g.deprecationHandler=null;function Te(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function So(e){var t,n;for(n in e)F(e,n)&&(t=e[n],Te(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Nn(e,t){var n=Ae({},e),r;for(r in t)F(t,r)&&(Ue(e[r])&&Ue(t[r])?(n[r]={},Ae(n[r],e[r]),Ae(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)F(e,r)&&!F(t,r)&&Ue(e[r])&&(n[r]=Ae({},n[r]));return n}function Zn(e){e!=null&&this.set(e)}var Pn;Object.keys?Pn=Object.keys:Pn=function(e){var t,n=[];for(t in e)F(e,t)&&n.push(t);return n};var To={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function wo(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return Te(r)?r.call(t,n):r}function be(e,t,n){var r=""+Math.abs(e),a=t-r.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+r}var Xn=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Ot=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,mn={},Ke={};function b(e,t,n,r){var a=r;typeof r=="string"&&(a=function(){return this[r]()}),e&&(Ke[e]=a),t&&(Ke[t[0]]=function(){return be(a.apply(this,arguments),t[1],t[2])}),n&&(Ke[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function xo(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Do(e){var t=e.match(Xn),n,r;for(n=0,r=t.length;n<r;n++)Ke[t[n]]?t[n]=Ke[t[n]]:t[n]=xo(t[n]);return function(a){var s="",i;for(i=0;i<r;i++)s+=Te(t[i])?t[i].call(a,e):t[i];return s}}function Et(e,t){return e.isValid()?(t=Fa(t,e.localeData()),mn[t]=mn[t]||Do(t),mn[t](e)):e.localeData().invalidDate()}function Fa(e,t){var n=5;function r(a){return t.longDateFormat(a)||a}for(Ot.lastIndex=0;n>=0&&Ot.test(e);)e=e.replace(Ot,r),Ot.lastIndex=0,n-=1;return e}var Mo={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Oo(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(Xn).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var No="Invalid date";function Po(){return this._invalidDate}var Eo="%d",Ro=/\d{1,2}/;function Fo(e){return this._ordinal.replace("%d",e)}var Ao={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Io(e,t,n,r){var a=this._relativeTime[n];return Te(a)?a(e,t,n,r):a.replace(/%d/i,e)}function Ho(e,t){var n=this._relativeTime[e>0?"future":"past"];return Te(n)?n(t):n.replace(/%s/i,t)}var Ar={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function oe(e){return typeof e=="string"?Ar[e]||Ar[e.toLowerCase()]:void 0}function Kn(e){var t={},n,r;for(r in e)F(e,r)&&(n=oe(r),n&&(t[n]=e[r]));return t}var Bo={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Co(e){var t=[],n;for(n in e)F(e,n)&&t.push({unit:n,priority:Bo[n]});return t.sort(function(r,a){return r.priority-a.priority}),t}var Aa=/\d/,ne=/\d\d/,Ia=/\d{3}/,Jn=/\d{4}/,$t=/[+-]?\d{6}/,L=/\d\d?/,Ha=/\d\d\d\d?/,Ba=/\d\d\d\d\d\d?/,zt=/\d{1,3}/,Qn=/\d{1,4}/,Zt=/[+-]?\d{1,6}/,at=/\d+/,Xt=/[+-]?\d+/,jo=/Z|[+-]\d\d:?\d\d/gi,Kt=/Z|[+-]\d\d(?::?\d\d)?/gi,Lo=/[+-]?\d+(\.\d{1,3})?/,wt=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,st=/^[1-9]\d?/,er=/^([1-9]\d|\d)/,It;It={};function p(e,t,n){It[e]=Te(t)?t:function(r,a){return r&&n?n:t}}function qo(e,t){return F(It,e)?It[e](t._strict,t._locale):new RegExp(Yo(e))}function Yo(e){return Oe(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,a,s){return n||r||a||s}))}function Oe(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ae(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function D(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=ae(t)),n}var En={};function H(e,t){var n,r=t,a;for(typeof e=="string"&&(e=[e]),Pe(t)&&(r=function(s,i){i[t]=D(s)}),a=e.length,n=0;n<a;n++)En[e[n]]=r}function xt(e,t){H(e,function(n,r,a,s){a._w=a._w||{},t(n,a._w,a,s)})}function Uo(e,t,n){t!=null&&F(En,e)&&En[e](t,n._a,n,e)}function Jt(e){return e%4===0&&e%100!==0||e%400===0}var z=0,De=1,pe=2,W=3,ue=4,Me=5,Ye=6,Go=7,Wo=8;b("Y",0,0,function(){var e=this.year();return e<=9999?be(e,4):"+"+e});b(0,["YY",2],0,function(){return this.year()%100});b(0,["YYYY",4],0,"year");b(0,["YYYYY",5],0,"year");b(0,["YYYYYY",6,!0],0,"year");p("Y",Xt);p("YY",L,ne);p("YYYY",Qn,Jn);p("YYYYY",Zt,$t);p("YYYYYY",Zt,$t);H(["YYYYY","YYYYYY"],z);H("YYYY",function(e,t){t[z]=e.length===2?g.parseTwoDigitYear(e):D(e)});H("YY",function(e,t){t[z]=g.parseTwoDigitYear(e)});H("Y",function(e,t){t[z]=parseInt(e,10)});function gt(e){return Jt(e)?366:365}g.parseTwoDigitYear=function(e){return D(e)+(D(e)>68?1900:2e3)};var Ca=it("FullYear",!0);function Vo(){return Jt(this.year())}function it(e,t){return function(n){return n!=null?(ja(this,e,n),g.updateOffset(this,t),this):pt(this,e)}}function pt(e,t){if(!e.isValid())return NaN;var n=e._d,r=e._isUTC;switch(t){case"Milliseconds":return r?n.getUTCMilliseconds():n.getMilliseconds();case"Seconds":return r?n.getUTCSeconds():n.getSeconds();case"Minutes":return r?n.getUTCMinutes():n.getMinutes();case"Hours":return r?n.getUTCHours():n.getHours();case"Date":return r?n.getUTCDate():n.getDate();case"Day":return r?n.getUTCDay():n.getDay();case"Month":return r?n.getUTCMonth():n.getMonth();case"FullYear":return r?n.getUTCFullYear():n.getFullYear();default:return NaN}}function ja(e,t,n){var r,a,s,i,o;if(!(!e.isValid()||isNaN(n))){switch(r=e._d,a=e._isUTC,t){case"Milliseconds":return void(a?r.setUTCMilliseconds(n):r.setMilliseconds(n));case"Seconds":return void(a?r.setUTCSeconds(n):r.setSeconds(n));case"Minutes":return void(a?r.setUTCMinutes(n):r.setMinutes(n));case"Hours":return void(a?r.setUTCHours(n):r.setHours(n));case"Date":return void(a?r.setUTCDate(n):r.setDate(n));case"FullYear":break;default:return}s=n,i=e.month(),o=e.date(),o=o===29&&i===1&&!Jt(s)?28:o,a?r.setUTCFullYear(s,i,o):r.setFullYear(s,i,o)}}function $o(e){return e=oe(e),Te(this[e])?this[e]():this}function zo(e,t){if(typeof e=="object"){e=Kn(e);var n=Co(e),r,a=n.length;for(r=0;r<a;r++)this[n[r].unit](e[n[r].unit])}else if(e=oe(e),Te(this[e]))return this[e](t);return this}function Zo(e,t){return(e%t+t)%t}var U;Array.prototype.indexOf?U=Array.prototype.indexOf:U=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function tr(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=Zo(t,12);return e+=(t-n)/12,n===1?Jt(e)?29:28:31-n%7%2}b("M",["MM",2],"Mo",function(){return this.month()+1});b("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});b("MMMM",0,0,function(e){return this.localeData().months(this,e)});p("M",L,st);p("MM",L,ne);p("MMM",function(e,t){return t.monthsShortRegex(e)});p("MMMM",function(e,t){return t.monthsRegex(e)});H(["M","MM"],function(e,t){t[De]=D(e)-1});H(["MMM","MMMM"],function(e,t,n,r){var a=n._locale.monthsParse(e,r,n._strict);a!=null?t[De]=a:T(n).invalidMonth=e});var Xo="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),La="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),qa=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ko=wt,Jo=wt;function Qo(e,t){return e?de(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||qa).test(t)?"format":"standalone"][e.month()]:de(this._months)?this._months:this._months.standalone}function el(e,t){return e?de(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[qa.test(t)?"format":"standalone"][e.month()]:de(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function tl(e,t,n){var r,a,s,i=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)s=Se([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(s,"").toLocaleLowerCase();return n?t==="MMM"?(a=U.call(this._shortMonthsParse,i),a!==-1?a:null):(a=U.call(this._longMonthsParse,i),a!==-1?a:null):t==="MMM"?(a=U.call(this._shortMonthsParse,i),a!==-1?a:(a=U.call(this._longMonthsParse,i),a!==-1?a:null)):(a=U.call(this._longMonthsParse,i),a!==-1?a:(a=U.call(this._shortMonthsParse,i),a!==-1?a:null))}function nl(e,t,n){var r,a,s;if(this._monthsParseExact)return tl.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(a=Se([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(s="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function Ya(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=D(t);else if(t=e.localeData().monthsParse(t),!Pe(t))return e}var n=t,r=e.date();return r=r<29?r:Math.min(r,tr(e.year(),n)),e._isUTC?e._d.setUTCMonth(n,r):e._d.setMonth(n,r),e}function Ua(e){return e!=null?(Ya(this,e),g.updateOffset(this,!0),this):pt(this,"Month")}function rl(){return tr(this.year(),this.month())}function al(e){return this._monthsParseExact?(F(this,"_monthsRegex")||Ga.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(F(this,"_monthsShortRegex")||(this._monthsShortRegex=Ko),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function sl(e){return this._monthsParseExact?(F(this,"_monthsRegex")||Ga.call(this),e?this._monthsStrictRegex:this._monthsRegex):(F(this,"_monthsRegex")||(this._monthsRegex=Jo),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Ga(){function e(l,u){return u.length-l.length}var t=[],n=[],r=[],a,s,i,o;for(a=0;a<12;a++)s=Se([2e3,a]),i=Oe(this.monthsShort(s,"")),o=Oe(this.months(s,"")),t.push(i),n.push(o),r.push(o),r.push(i);t.sort(e),n.sort(e),r.sort(e),this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function il(e,t,n,r,a,s,i){var o;return e<100&&e>=0?(o=new Date(e+400,t,n,r,a,s,i),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,r,a,s,i),o}function yt(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Ht(e,t,n){var r=7+t-n,a=(7+yt(e,0,r).getUTCDay()-t)%7;return-a+r-1}function Wa(e,t,n,r,a){var s=(7+n-r)%7,i=Ht(e,r,a),o=1+7*(t-1)+s+i,l,u;return o<=0?(l=e-1,u=gt(l)+o):o>gt(e)?(l=e+1,u=o-gt(e)):(l=e,u=o),{year:l,dayOfYear:u}}function vt(e,t,n){var r=Ht(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1,s,i;return a<1?(i=e.year()-1,s=a+Ne(i,t,n)):a>Ne(e.year(),t,n)?(s=a-Ne(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ne(e,t,n){var r=Ht(e,t,n),a=Ht(e+1,t,n);return(gt(e)-r+a)/7}b("w",["ww",2],"wo","week");b("W",["WW",2],"Wo","isoWeek");p("w",L,st);p("ww",L,ne);p("W",L,st);p("WW",L,ne);xt(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=D(e)});function ol(e){return vt(e,this._week.dow,this._week.doy).week}var ll={dow:0,doy:6};function ul(){return this._week.dow}function dl(){return this._week.doy}function hl(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function ml(e){var t=vt(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}b("d",0,"do","day");b("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});b("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});b("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});b("e",0,0,"weekday");b("E",0,0,"isoWeekday");p("d",L);p("e",L);p("E",L);p("dd",function(e,t){return t.weekdaysMinRegex(e)});p("ddd",function(e,t){return t.weekdaysShortRegex(e)});p("dddd",function(e,t){return t.weekdaysRegex(e)});xt(["dd","ddd","dddd"],function(e,t,n,r){var a=n._locale.weekdaysParse(e,r,n._strict);a!=null?t.d=a:T(n).invalidWeekday=e});xt(["d","e","E"],function(e,t,n,r){t[r]=D(e)});function fl(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function gl(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function nr(e,t){return e.slice(t,7).concat(e.slice(0,t))}var cl="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Va="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),pl="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),yl=wt,vl=wt,kl=wt;function bl(e,t){var n=de(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?nr(n,this._week.dow):e?n[e.day()]:n}function _l(e){return e===!0?nr(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Sl(e){return e===!0?nr(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Tl(e,t,n){var r,a,s,i=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)s=Se([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(s,"").toLocaleLowerCase();return n?t==="dddd"?(a=U.call(this._weekdaysParse,i),a!==-1?a:null):t==="ddd"?(a=U.call(this._shortWeekdaysParse,i),a!==-1?a:null):(a=U.call(this._minWeekdaysParse,i),a!==-1?a:null):t==="dddd"?(a=U.call(this._weekdaysParse,i),a!==-1||(a=U.call(this._shortWeekdaysParse,i),a!==-1)?a:(a=U.call(this._minWeekdaysParse,i),a!==-1?a:null)):t==="ddd"?(a=U.call(this._shortWeekdaysParse,i),a!==-1||(a=U.call(this._weekdaysParse,i),a!==-1)?a:(a=U.call(this._minWeekdaysParse,i),a!==-1?a:null)):(a=U.call(this._minWeekdaysParse,i),a!==-1||(a=U.call(this._weekdaysParse,i),a!==-1)?a:(a=U.call(this._shortWeekdaysParse,i),a!==-1?a:null))}function wl(e,t,n){var r,a,s;if(this._weekdaysParseExact)return Tl.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(a=Se([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(s="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function xl(e){if(!this.isValid())return e!=null?this:NaN;var t=pt(this,"Day");return e!=null?(e=fl(e,this.localeData()),this.add(e-t,"d")):t}function Dl(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function Ml(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=gl(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function Ol(e){return this._weekdaysParseExact?(F(this,"_weekdaysRegex")||rr.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(F(this,"_weekdaysRegex")||(this._weekdaysRegex=yl),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Nl(e){return this._weekdaysParseExact?(F(this,"_weekdaysRegex")||rr.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(F(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=vl),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Pl(e){return this._weekdaysParseExact?(F(this,"_weekdaysRegex")||rr.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(F(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=kl),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function rr(){function e(d,f){return f.length-d.length}var t=[],n=[],r=[],a=[],s,i,o,l,u;for(s=0;s<7;s++)i=Se([2e3,1]).day(s),o=Oe(this.weekdaysMin(i,"")),l=Oe(this.weekdaysShort(i,"")),u=Oe(this.weekdays(i,"")),t.push(o),n.push(l),r.push(u),a.push(o),a.push(l),a.push(u);t.sort(e),n.sort(e),r.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function ar(){return this.hours()%12||12}function El(){return this.hours()||24}b("H",["HH",2],0,"hour");b("h",["hh",2],0,ar);b("k",["kk",2],0,El);b("hmm",0,0,function(){return""+ar.apply(this)+be(this.minutes(),2)});b("hmmss",0,0,function(){return""+ar.apply(this)+be(this.minutes(),2)+be(this.seconds(),2)});b("Hmm",0,0,function(){return""+this.hours()+be(this.minutes(),2)});b("Hmmss",0,0,function(){return""+this.hours()+be(this.minutes(),2)+be(this.seconds(),2)});function $a(e,t){b(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}$a("a",!0);$a("A",!1);function za(e,t){return t._meridiemParse}p("a",za);p("A",za);p("H",L,er);p("h",L,st);p("k",L,st);p("HH",L,ne);p("hh",L,ne);p("kk",L,ne);p("hmm",Ha);p("hmmss",Ba);p("Hmm",Ha);p("Hmmss",Ba);H(["H","HH"],W);H(["k","kk"],function(e,t,n){var r=D(e);t[W]=r===24?0:r});H(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});H(["h","hh"],function(e,t,n){t[W]=D(e),T(n).bigHour=!0});H("hmm",function(e,t,n){var r=e.length-2;t[W]=D(e.substr(0,r)),t[ue]=D(e.substr(r)),T(n).bigHour=!0});H("hmmss",function(e,t,n){var r=e.length-4,a=e.length-2;t[W]=D(e.substr(0,r)),t[ue]=D(e.substr(r,2)),t[Me]=D(e.substr(a)),T(n).bigHour=!0});H("Hmm",function(e,t,n){var r=e.length-2;t[W]=D(e.substr(0,r)),t[ue]=D(e.substr(r))});H("Hmmss",function(e,t,n){var r=e.length-4,a=e.length-2;t[W]=D(e.substr(0,r)),t[ue]=D(e.substr(r,2)),t[Me]=D(e.substr(a))});function Rl(e){return(e+"").toLowerCase().charAt(0)==="p"}var Fl=/[ap]\.?m?\.?/i,Al=it("Hours",!0);function Il(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var Za={calendar:To,longDateFormat:Mo,invalidDate:No,ordinal:Eo,dayOfMonthOrdinalParse:Ro,relativeTime:Ao,months:Xo,monthsShort:La,week:ll,weekdays:cl,weekdaysMin:pl,weekdaysShort:Va,meridiemParse:Fl},Y={},lt={},kt;function Hl(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function Ir(e){return e&&e.toLowerCase().replace("_","-")}function Bl(e){for(var t=0,n,r,a,s;t<e.length;){for(s=Ir(e[t]).split("-"),n=s.length,r=Ir(e[t+1]),r=r?r.split("-"):null;n>0;){if(a=Qt(s.slice(0,n).join("-")),a)return a;if(r&&r.length>=n&&Hl(s,r)>=n-1)break;n--}t++}return kt}function Cl(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Qt(e){var t=null,n;if(Y[e]===void 0&&typeof module<"u"&&module&&module.exports&&Cl(e))try{t=kt._abbr,n=require,n("./locale/"+e),He(t)}catch{Y[e]=null}return Y[e]}function He(e,t){var n;return e&&(Q(t)?n=Ee(e):n=sr(e,t),n?kt=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),kt._abbr}function sr(e,t){if(t!==null){var n,r=Za;if(t.abbr=e,Y[e]!=null)Ra("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=Y[e]._config;else if(t.parentLocale!=null)if(Y[t.parentLocale]!=null)r=Y[t.parentLocale]._config;else if(n=Qt(t.parentLocale),n!=null)r=n._config;else return lt[t.parentLocale]||(lt[t.parentLocale]=[]),lt[t.parentLocale].push({name:e,config:t}),null;return Y[e]=new Zn(Nn(r,t)),lt[e]&&lt[e].forEach(function(a){sr(a.name,a.config)}),He(e),Y[e]}else return delete Y[e],null}function jl(e,t){if(t!=null){var n,r,a=Za;Y[e]!=null&&Y[e].parentLocale!=null?Y[e].set(Nn(Y[e]._config,t)):(r=Qt(e),r!=null&&(a=r._config),t=Nn(a,t),r==null&&(t.abbr=e),n=new Zn(t),n.parentLocale=Y[e],Y[e]=n),He(e)}else Y[e]!=null&&(Y[e].parentLocale!=null?(Y[e]=Y[e].parentLocale,e===He()&&He(e)):Y[e]!=null&&delete Y[e]);return Y[e]}function Ee(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return kt;if(!de(e)){if(t=Qt(e),t)return t;e=[e]}return Bl(e)}function Ll(){return Pn(Y)}function ir(e){var t,n=e._a;return n&&T(e).overflow===-2&&(t=n[De]<0||n[De]>11?De:n[pe]<1||n[pe]>tr(n[z],n[De])?pe:n[W]<0||n[W]>24||n[W]===24&&(n[ue]!==0||n[Me]!==0||n[Ye]!==0)?W:n[ue]<0||n[ue]>59?ue:n[Me]<0||n[Me]>59?Me:n[Ye]<0||n[Ye]>999?Ye:-1,T(e)._overflowDayOfYear&&(t<z||t>pe)&&(t=pe),T(e)._overflowWeeks&&t===-1&&(t=Go),T(e)._overflowWeekday&&t===-1&&(t=Wo),T(e).overflow=t),e}var ql=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Yl=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ul=/Z|[+-]\d\d(?::?\d\d)?/,Nt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],fn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Gl=/^\/?Date\((-?\d+)/i,Wl=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Vl={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Xa(e){var t,n,r=e._i,a=ql.exec(r)||Yl.exec(r),s,i,o,l,u=Nt.length,d=fn.length;if(a){for(T(e).iso=!0,t=0,n=u;t<n;t++)if(Nt[t][1].exec(a[1])){i=Nt[t][0],s=Nt[t][2]!==!1;break}if(i==null){e._isValid=!1;return}if(a[3]){for(t=0,n=d;t<n;t++)if(fn[t][1].exec(a[3])){o=(a[2]||" ")+fn[t][0];break}if(o==null){e._isValid=!1;return}}if(!s&&o!=null){e._isValid=!1;return}if(a[4])if(Ul.exec(a[4]))l="Z";else{e._isValid=!1;return}e._f=i+(o||"")+(l||""),lr(e)}else e._isValid=!1}function $l(e,t,n,r,a,s){var i=[zl(e),La.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(a,10)];return s&&i.push(parseInt(s,10)),i}function zl(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Zl(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Xl(e,t,n){if(e){var r=Va.indexOf(e),a=new Date(t[0],t[1],t[2]).getDay();if(r!==a)return T(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function Kl(e,t,n){if(e)return Vl[e];if(t)return 0;var r=parseInt(n,10),a=r%100,s=(r-a)/100;return s*60+a}function Ka(e){var t=Wl.exec(Zl(e._i)),n;if(t){if(n=$l(t[4],t[3],t[2],t[5],t[6],t[7]),!Xl(t[1],n,e))return;e._a=n,e._tzm=Kl(t[8],t[9],t[10]),e._d=yt.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),T(e).rfc2822=!0}else e._isValid=!1}function Jl(e){var t=Gl.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(Xa(e),e._isValid===!1)delete e._isValid;else return;if(Ka(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:g.createFromInputFallback(e)}g.createFromInputFallback=ie("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Ze(e,t,n){return e??t??n}function Ql(e){var t=new Date(g.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function or(e){var t,n,r=[],a,s,i;if(!e._d){for(a=Ql(e),e._w&&e._a[pe]==null&&e._a[De]==null&&eu(e),e._dayOfYear!=null&&(i=Ze(e._a[z],a[z]),(e._dayOfYear>gt(i)||e._dayOfYear===0)&&(T(e)._overflowDayOfYear=!0),n=yt(i,0,e._dayOfYear),e._a[De]=n.getUTCMonth(),e._a[pe]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=a[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[W]===24&&e._a[ue]===0&&e._a[Me]===0&&e._a[Ye]===0&&(e._nextDay=!0,e._a[W]=0),e._d=(e._useUTC?yt:il).apply(null,r),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[W]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(T(e).weekdayMismatch=!0)}}function eu(e){var t,n,r,a,s,i,o,l,u;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(s=1,i=4,n=Ze(t.GG,e._a[z],vt(j(),1,4).year),r=Ze(t.W,1),a=Ze(t.E,1),(a<1||a>7)&&(l=!0)):(s=e._locale._week.dow,i=e._locale._week.doy,u=vt(j(),s,i),n=Ze(t.gg,e._a[z],u.year),r=Ze(t.w,u.week),t.d!=null?(a=t.d,(a<0||a>6)&&(l=!0)):t.e!=null?(a=t.e+s,(t.e<0||t.e>6)&&(l=!0)):a=s),r<1||r>Ne(n,s,i)?T(e)._overflowWeeks=!0:l!=null?T(e)._overflowWeekday=!0:(o=Wa(n,r,a,s,i),e._a[z]=o.year,e._dayOfYear=o.dayOfYear)}g.ISO_8601=function(){};g.RFC_2822=function(){};function lr(e){if(e._f===g.ISO_8601){Xa(e);return}if(e._f===g.RFC_2822){Ka(e);return}e._a=[],T(e).empty=!0;var t=""+e._i,n,r,a,s,i,o=t.length,l=0,u,d;for(a=Fa(e._f,e._locale).match(Xn)||[],d=a.length,n=0;n<d;n++)s=a[n],r=(t.match(qo(s,e))||[])[0],r&&(i=t.substr(0,t.indexOf(r)),i.length>0&&T(e).unusedInput.push(i),t=t.slice(t.indexOf(r)+r.length),l+=r.length),Ke[s]?(r?T(e).empty=!1:T(e).unusedTokens.push(s),Uo(s,r,e)):e._strict&&!r&&T(e).unusedTokens.push(s);T(e).charsLeftOver=o-l,t.length>0&&T(e).unusedInput.push(t),e._a[W]<=12&&T(e).bigHour===!0&&e._a[W]>0&&(T(e).bigHour=void 0),T(e).parsedDateParts=e._a.slice(0),T(e).meridiem=e._meridiem,e._a[W]=tu(e._locale,e._a[W],e._meridiem),u=T(e).era,u!==null&&(e._a[z]=e._locale.erasConvertYear(u,e._a[z])),or(e),ir(e)}function tu(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function nu(e){var t,n,r,a,s,i,o=!1,l=e._f.length;if(l===0){T(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<l;a++)s=0,i=!1,t=zn({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[a],lr(t),$n(t)&&(i=!0),s+=T(t).charsLeftOver,s+=T(t).unusedTokens.length*10,T(t).score=s,o?s<r&&(r=s,n=t):(r==null||s<r||i)&&(r=s,n=t,i&&(o=!0));Ae(e,n||t)}function ru(e){if(!e._d){var t=Kn(e._i),n=t.day===void 0?t.date:t.day;e._a=Pa([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),or(e)}}function au(e){var t=new Tt(ir(Ja(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Ja(e){var t=e._i,n=e._f;return e._locale=e._locale||Ee(e._l),t===null||n===void 0&&t===""?Vt({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),he(t)?new Tt(ir(t)):(St(t)?e._d=t:de(n)?nu(e):n?lr(e):su(e),$n(e)||(e._d=null),e))}function su(e){var t=e._i;Q(t)?e._d=new Date(g.now()):St(t)?e._d=new Date(t.valueOf()):typeof t=="string"?Jl(e):de(t)?(e._a=Pa(t.slice(0),function(n){return parseInt(n,10)}),or(e)):Ue(t)?ru(e):Pe(t)?e._d=new Date(t):g.createFromInputFallback(e)}function Qa(e,t,n,r,a){var s={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(Ue(e)&&Vn(e)||de(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=n,s._i=e,s._f=t,s._strict=r,au(s)}function j(e,t,n,r){return Qa(e,t,n,r,!1)}var iu=ie("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=j.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Vt()}),ou=ie("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=j.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Vt()});function es(e,t){var n,r;if(t.length===1&&de(t[0])&&(t=t[0]),!t.length)return j();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function lu(){var e=[].slice.call(arguments,0);return es("isBefore",e)}function uu(){var e=[].slice.call(arguments,0);return es("isAfter",e)}var du=function(){return Date.now?Date.now():+new Date},ut=["year","quarter","month","week","day","hour","minute","second","millisecond"];function hu(e){var t,n=!1,r,a=ut.length;for(t in e)if(F(e,t)&&!(U.call(ut,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<a;++r)if(e[ut[r]]){if(n)return!1;parseFloat(e[ut[r]])!==D(e[ut[r]])&&(n=!0)}return!0}function mu(){return this._isValid}function fu(){return fe(NaN)}function en(e){var t=Kn(e),n=t.year||0,r=t.quarter||0,a=t.month||0,s=t.week||t.isoWeek||0,i=t.day||0,o=t.hour||0,l=t.minute||0,u=t.second||0,d=t.millisecond||0;this._isValid=hu(t),this._milliseconds=+d+u*1e3+l*6e4+o*1e3*60*60,this._days=+i+s*7,this._months=+a+r*3+n*12,this._data={},this._locale=Ee(),this._bubble()}function Rt(e){return e instanceof en}function Rn(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function gu(e,t,n){var r=Math.min(e.length,t.length),a=Math.abs(e.length-t.length),s=0,i;for(i=0;i<r;i++)D(e[i])!==D(t[i])&&s++;return s+a}function ts(e,t){b(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+be(~~(n/60),2)+t+be(~~n%60,2)})}ts("Z",":");ts("ZZ","");p("Z",Kt);p("ZZ",Kt);H(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=ur(Kt,e)});var cu=/([\+\-]|\d\d)/gi;function ur(e,t){var n=(t||"").match(e),r,a,s;return n===null?null:(r=n[n.length-1]||[],a=(r+"").match(cu)||["-",0,0],s=+(a[1]*60)+D(a[2]),s===0?0:a[0]==="+"?s:-s)}function dr(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(he(e)||St(e)?e.valueOf():j(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),g.updateOffset(n,!1),n):j(e).local()}function Fn(e){return-Math.round(e._d.getTimezoneOffset())}g.updateOffset=function(){};function pu(e,t,n){var r=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=ur(Kt,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(a=Fn(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),r!==e&&(!t||this._changeInProgress?as(this,fe(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,g.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:Fn(this)}function yu(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function vu(e){return this.utcOffset(0,e)}function ku(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Fn(this),"m")),this}function bu(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=ur(jo,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function _u(e){return this.isValid()?(e=e?j(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Su(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Tu(){if(!Q(this._isDSTShifted))return this._isDSTShifted;var e={},t;return zn(e,this),e=Ja(e),e._a?(t=e._isUTC?Se(e._a):j(e._a),this._isDSTShifted=this.isValid()&&gu(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function wu(){return this.isValid()?!this._isUTC:!1}function xu(){return this.isValid()?this._isUTC:!1}function ns(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Du=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Mu=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function fe(e,t){var n=e,r=null,a,s,i;return Rt(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:Pe(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=Du.exec(e))?(a=r[1]==="-"?-1:1,n={y:0,d:D(r[pe])*a,h:D(r[W])*a,m:D(r[ue])*a,s:D(r[Me])*a,ms:D(Rn(r[Ye]*1e3))*a}):(r=Mu.exec(e))?(a=r[1]==="-"?-1:1,n={y:qe(r[2],a),M:qe(r[3],a),w:qe(r[4],a),d:qe(r[5],a),h:qe(r[6],a),m:qe(r[7],a),s:qe(r[8],a)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(i=Ou(j(n.from),j(n.to)),n={},n.ms=i.milliseconds,n.M=i.months),s=new en(n),Rt(e)&&F(e,"_locale")&&(s._locale=e._locale),Rt(e)&&F(e,"_isValid")&&(s._isValid=e._isValid),s}fe.fn=en.prototype;fe.invalid=fu;function qe(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Hr(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Ou(e,t){var n;return e.isValid()&&t.isValid()?(t=dr(t,e),e.isBefore(t)?n=Hr(e,t):(n=Hr(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function rs(e,t){return function(n,r){var a,s;return r!==null&&!isNaN(+r)&&(Ra(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=r,r=s),a=fe(n,r),as(this,a,e),this}}function as(e,t,n,r){var a=t._milliseconds,s=Rn(t._days),i=Rn(t._months);e.isValid()&&(r=r??!0,i&&Ya(e,pt(e,"Month")+i*n),s&&ja(e,"Date",pt(e,"Date")+s*n),a&&e._d.setTime(e._d.valueOf()+a*n),r&&g.updateOffset(e,s||i))}var Nu=rs(1,"add"),Pu=rs(-1,"subtract");function ss(e){return typeof e=="string"||e instanceof String}function Eu(e){return he(e)||St(e)||ss(e)||Pe(e)||Fu(e)||Ru(e)||e===null||e===void 0}function Ru(e){var t=Ue(e)&&!Vn(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,s,i=r.length;for(a=0;a<i;a+=1)s=r[a],n=n||F(e,s);return t&&n}function Fu(e){var t=de(e),n=!1;return t&&(n=e.filter(function(r){return!Pe(r)&&ss(e)}).length===0),t&&n}function Au(e){var t=Ue(e)&&!Vn(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,s;for(a=0;a<r.length;a+=1)s=r[a],n=n||F(e,s);return t&&n}function Iu(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Hu(e,t){arguments.length===1&&(arguments[0]?Eu(arguments[0])?(e=arguments[0],t=void 0):Au(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||j(),r=dr(n,this).startOf("day"),a=g.calendarFormat(this,r)||"sameElse",s=t&&(Te(t[a])?t[a].call(this,n):t[a]);return this.format(s||this.localeData().calendar(a,this,j(n)))}function Bu(){return new Tt(this)}function Cu(e,t){var n=he(e)?e:j(e);return this.isValid()&&n.isValid()?(t=oe(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function ju(e,t){var n=he(e)?e:j(e);return this.isValid()&&n.isValid()?(t=oe(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function Lu(e,t,n,r){var a=he(e)?e:j(e),s=he(t)?t:j(t);return this.isValid()&&a.isValid()&&s.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(a,n):!this.isBefore(a,n))&&(r[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function qu(e,t){var n=he(e)?e:j(e),r;return this.isValid()&&n.isValid()?(t=oe(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function Yu(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function Uu(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Gu(e,t,n){var r,a,s;if(!this.isValid())return NaN;if(r=dr(e,this),!r.isValid())return NaN;switch(a=(r.utcOffset()-this.utcOffset())*6e4,t=oe(t),t){case"year":s=Ft(this,r)/12;break;case"month":s=Ft(this,r);break;case"quarter":s=Ft(this,r)/3;break;case"second":s=(this-r)/1e3;break;case"minute":s=(this-r)/6e4;break;case"hour":s=(this-r)/36e5;break;case"day":s=(this-r-a)/864e5;break;case"week":s=(this-r-a)/6048e5;break;default:s=this-r}return n?s:ae(s)}function Ft(e,t){if(e.date()<t.date())return-Ft(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),a,s;return t-r<0?(a=e.clone().add(n-1,"months"),s=(t-r)/(r-a)):(a=e.clone().add(n+1,"months"),s=(t-r)/(a-r)),-(n+s)||0}g.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";g.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Wu(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Vu(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?Et(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Te(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Et(n,"Z")):Et(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function $u(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,a,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",s=t+'[")]',this.format(n+r+a+s)}function zu(e){e||(e=this.isUtc()?g.defaultFormatUtc:g.defaultFormat);var t=Et(this,e);return this.localeData().postformat(t)}function Zu(e,t){return this.isValid()&&(he(e)&&e.isValid()||j(e).isValid())?fe({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Xu(e){return this.from(j(),e)}function Ku(e,t){return this.isValid()&&(he(e)&&e.isValid()||j(e).isValid())?fe({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Ju(e){return this.to(j(),e)}function is(e){var t;return e===void 0?this._locale._abbr:(t=Ee(e),t!=null&&(this._locale=t),this)}var os=ie("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function ls(){return this._locale}var Bt=1e3,Je=60*Bt,Ct=60*Je,us=(365*400+97)*24*Ct;function Qe(e,t){return(e%t+t)%t}function ds(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-us:new Date(e,t,n).valueOf()}function hs(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-us:Date.UTC(e,t,n)}function Qu(e){var t,n;if(e=oe(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?hs:ds,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=Qe(t+(this._isUTC?0:this.utcOffset()*Je),Ct);break;case"minute":t=this._d.valueOf(),t-=Qe(t,Je);break;case"second":t=this._d.valueOf(),t-=Qe(t,Bt);break}return this._d.setTime(t),g.updateOffset(this,!0),this}function ed(e){var t,n;if(e=oe(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?hs:ds,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Ct-Qe(t+(this._isUTC?0:this.utcOffset()*Je),Ct)-1;break;case"minute":t=this._d.valueOf(),t+=Je-Qe(t,Je)-1;break;case"second":t=this._d.valueOf(),t+=Bt-Qe(t,Bt)-1;break}return this._d.setTime(t),g.updateOffset(this,!0),this}function td(){return this._d.valueOf()-(this._offset||0)*6e4}function nd(){return Math.floor(this.valueOf()/1e3)}function rd(){return new Date(this.valueOf())}function ad(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function sd(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function id(){return this.isValid()?this.toISOString():null}function od(){return $n(this)}function ld(){return Ae({},T(this))}function ud(){return T(this).overflow}function dd(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}b("N",0,0,"eraAbbr");b("NN",0,0,"eraAbbr");b("NNN",0,0,"eraAbbr");b("NNNN",0,0,"eraName");b("NNNNN",0,0,"eraNarrow");b("y",["y",1],"yo","eraYear");b("y",["yy",2],0,"eraYear");b("y",["yyy",3],0,"eraYear");b("y",["yyyy",4],0,"eraYear");p("N",hr);p("NN",hr);p("NNN",hr);p("NNNN",_d);p("NNNNN",Sd);H(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var a=n._locale.erasParse(e,r,n._strict);a?T(n).era=a:T(n).invalidEra=e});p("y",at);p("yy",at);p("yyy",at);p("yyyy",at);p("yo",Td);H(["y","yy","yyy","yyyy"],z);H(["yo"],function(e,t,n,r){var a;n._locale._eraYearOrdinalRegex&&(a=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[z]=n._locale.eraYearOrdinalParse(e,a):t[z]=parseInt(e,10)});function hd(e,t){var n,r,a,s=this._eras||Ee("en")._eras;for(n=0,r=s.length;n<r;++n){switch(typeof s[n].since){case"string":a=g(s[n].since).startOf("day"),s[n].since=a.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":a=g(s[n].until).startOf("day").valueOf(),s[n].until=a.valueOf();break}}return s}function md(e,t,n){var r,a,s=this.eras(),i,o,l;for(e=e.toUpperCase(),r=0,a=s.length;r<a;++r)if(i=s[r].name.toUpperCase(),o=s[r].abbr.toUpperCase(),l=s[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(o===e)return s[r];break;case"NNNN":if(i===e)return s[r];break;case"NNNNN":if(l===e)return s[r];break}else if([i,o,l].indexOf(e)>=0)return s[r]}function fd(e,t){var n=e.since<=e.until?1:-1;return t===void 0?g(e.since).year():g(e.since).year()+(t-e.offset)*n}function gd(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function cd(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function pd(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function yd(){var e,t,n,r,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(n=a[e].since<=a[e].until?1:-1,r=this.clone().startOf("day").valueOf(),a[e].since<=r&&r<=a[e].until||a[e].until<=r&&r<=a[e].since)return(this.year()-g(a[e].since).year())*n+a[e].offset;return this.year()}function vd(e){return F(this,"_erasNameRegex")||mr.call(this),e?this._erasNameRegex:this._erasRegex}function kd(e){return F(this,"_erasAbbrRegex")||mr.call(this),e?this._erasAbbrRegex:this._erasRegex}function bd(e){return F(this,"_erasNarrowRegex")||mr.call(this),e?this._erasNarrowRegex:this._erasRegex}function hr(e,t){return t.erasAbbrRegex(e)}function _d(e,t){return t.erasNameRegex(e)}function Sd(e,t){return t.erasNarrowRegex(e)}function Td(e,t){return t._eraYearOrdinalRegex||at}function mr(){var e=[],t=[],n=[],r=[],a,s,i,o,l,u=this.eras();for(a=0,s=u.length;a<s;++a)i=Oe(u[a].name),o=Oe(u[a].abbr),l=Oe(u[a].narrow),t.push(i),e.push(o),n.push(l),r.push(i),r.push(o),r.push(l);this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}b(0,["gg",2],0,function(){return this.weekYear()%100});b(0,["GG",2],0,function(){return this.isoWeekYear()%100});function tn(e,t){b(0,[e,e.length],0,t)}tn("gggg","weekYear");tn("ggggg","weekYear");tn("GGGG","isoWeekYear");tn("GGGGG","isoWeekYear");p("G",Xt);p("g",Xt);p("GG",L,ne);p("gg",L,ne);p("GGGG",Qn,Jn);p("gggg",Qn,Jn);p("GGGGG",Zt,$t);p("ggggg",Zt,$t);xt(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=D(e)});xt(["gg","GG"],function(e,t,n,r){t[r]=g.parseTwoDigitYear(e)});function wd(e){return ms.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function xd(e){return ms.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Dd(){return Ne(this.year(),1,4)}function Md(){return Ne(this.isoWeekYear(),1,4)}function Od(){var e=this.localeData()._week;return Ne(this.year(),e.dow,e.doy)}function Nd(){var e=this.localeData()._week;return Ne(this.weekYear(),e.dow,e.doy)}function ms(e,t,n,r,a){var s;return e==null?vt(this,r,a).year:(s=Ne(e,r,a),t>s&&(t=s),Pd.call(this,e,t,n,r,a))}function Pd(e,t,n,r,a){var s=Wa(e,t,n,r,a),i=yt(s.year,0,s.dayOfYear);return this.year(i.getUTCFullYear()),this.month(i.getUTCMonth()),this.date(i.getUTCDate()),this}b("Q",0,"Qo","quarter");p("Q",Aa);H("Q",function(e,t){t[De]=(D(e)-1)*3});function Ed(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}b("D",["DD",2],"Do","date");p("D",L,st);p("DD",L,ne);p("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});H(["D","DD"],pe);H("Do",function(e,t){t[pe]=D(e.match(L)[0])});var fs=it("Date",!0);b("DDD",["DDDD",3],"DDDo","dayOfYear");p("DDD",zt);p("DDDD",Ia);H(["DDD","DDDD"],function(e,t,n){n._dayOfYear=D(e)});function Rd(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}b("m",["mm",2],0,"minute");p("m",L,er);p("mm",L,ne);H(["m","mm"],ue);var Fd=it("Minutes",!1);b("s",["ss",2],0,"second");p("s",L,er);p("ss",L,ne);H(["s","ss"],Me);var Ad=it("Seconds",!1);b("S",0,0,function(){return~~(this.millisecond()/100)});b(0,["SS",2],0,function(){return~~(this.millisecond()/10)});b(0,["SSS",3],0,"millisecond");b(0,["SSSS",4],0,function(){return this.millisecond()*10});b(0,["SSSSS",5],0,function(){return this.millisecond()*100});b(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});b(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});b(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});b(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});p("S",zt,Aa);p("SS",zt,ne);p("SSS",zt,Ia);var Ie,gs;for(Ie="SSSS";Ie.length<=9;Ie+="S")p(Ie,at);function Id(e,t){t[Ye]=D(("0."+e)*1e3)}for(Ie="S";Ie.length<=9;Ie+="S")H(Ie,Id);gs=it("Milliseconds",!1);b("z",0,0,"zoneAbbr");b("zz",0,0,"zoneName");function Hd(){return this._isUTC?"UTC":""}function Bd(){return this._isUTC?"Coordinated Universal Time":""}var h=Tt.prototype;h.add=Nu;h.calendar=Hu;h.clone=Bu;h.diff=Gu;h.endOf=ed;h.format=zu;h.from=Zu;h.fromNow=Xu;h.to=Ku;h.toNow=Ju;h.get=$o;h.invalidAt=ud;h.isAfter=Cu;h.isBefore=ju;h.isBetween=Lu;h.isSame=qu;h.isSameOrAfter=Yu;h.isSameOrBefore=Uu;h.isValid=od;h.lang=os;h.locale=is;h.localeData=ls;h.max=ou;h.min=iu;h.parsingFlags=ld;h.set=zo;h.startOf=Qu;h.subtract=Pu;h.toArray=ad;h.toObject=sd;h.toDate=rd;h.toISOString=Vu;h.inspect=$u;typeof Symbol<"u"&&Symbol.for!=null&&(h[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});h.toJSON=id;h.toString=Wu;h.unix=nd;h.valueOf=td;h.creationData=dd;h.eraName=gd;h.eraNarrow=cd;h.eraAbbr=pd;h.eraYear=yd;h.year=Ca;h.isLeapYear=Vo;h.weekYear=wd;h.isoWeekYear=xd;h.quarter=h.quarters=Ed;h.month=Ua;h.daysInMonth=rl;h.week=h.weeks=hl;h.isoWeek=h.isoWeeks=ml;h.weeksInYear=Od;h.weeksInWeekYear=Nd;h.isoWeeksInYear=Dd;h.isoWeeksInISOWeekYear=Md;h.date=fs;h.day=h.days=xl;h.weekday=Dl;h.isoWeekday=Ml;h.dayOfYear=Rd;h.hour=h.hours=Al;h.minute=h.minutes=Fd;h.second=h.seconds=Ad;h.millisecond=h.milliseconds=gs;h.utcOffset=pu;h.utc=vu;h.local=ku;h.parseZone=bu;h.hasAlignedHourOffset=_u;h.isDST=Su;h.isLocal=wu;h.isUtcOffset=xu;h.isUtc=ns;h.isUTC=ns;h.zoneAbbr=Hd;h.zoneName=Bd;h.dates=ie("dates accessor is deprecated. Use date instead.",fs);h.months=ie("months accessor is deprecated. Use month instead",Ua);h.years=ie("years accessor is deprecated. Use year instead",Ca);h.zone=ie("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",yu);h.isDSTShifted=ie("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Tu);function Cd(e){return j(e*1e3)}function jd(){return j.apply(null,arguments).parseZone()}function cs(e){return e}var A=Zn.prototype;A.calendar=wo;A.longDateFormat=Oo;A.invalidDate=Po;A.ordinal=Fo;A.preparse=cs;A.postformat=cs;A.relativeTime=Io;A.pastFuture=Ho;A.set=So;A.eras=hd;A.erasParse=md;A.erasConvertYear=fd;A.erasAbbrRegex=kd;A.erasNameRegex=vd;A.erasNarrowRegex=bd;A.months=Qo;A.monthsShort=el;A.monthsParse=nl;A.monthsRegex=sl;A.monthsShortRegex=al;A.week=ol;A.firstDayOfYear=dl;A.firstDayOfWeek=ul;A.weekdays=bl;A.weekdaysMin=Sl;A.weekdaysShort=_l;A.weekdaysParse=wl;A.weekdaysRegex=Ol;A.weekdaysShortRegex=Nl;A.weekdaysMinRegex=Pl;A.isPM=Rl;A.meridiem=Il;function jt(e,t,n,r){var a=Ee(),s=Se().set(r,t);return a[n](s,e)}function ps(e,t,n){if(Pe(e)&&(t=e,e=void 0),e=e||"",t!=null)return jt(e,t,n,"month");var r,a=[];for(r=0;r<12;r++)a[r]=jt(e,r,n,"month");return a}function fr(e,t,n,r){typeof e=="boolean"?(Pe(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,Pe(t)&&(n=t,t=void 0),t=t||"");var a=Ee(),s=e?a._week.dow:0,i,o=[];if(n!=null)return jt(t,(n+s)%7,r,"day");for(i=0;i<7;i++)o[i]=jt(t,(i+s)%7,r,"day");return o}function Ld(e,t){return ps(e,t,"months")}function qd(e,t){return ps(e,t,"monthsShort")}function Yd(e,t,n){return fr(e,t,n,"weekdays")}function Ud(e,t,n){return fr(e,t,n,"weekdaysShort")}function Gd(e,t,n){return fr(e,t,n,"weekdaysMin")}He("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=D(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});g.lang=ie("moment.lang is deprecated. Use moment.locale instead.",He);g.langData=ie("moment.langData is deprecated. Use moment.localeData instead.",Ee);var we=Math.abs;function Wd(){var e=this._data;return this._milliseconds=we(this._milliseconds),this._days=we(this._days),this._months=we(this._months),e.milliseconds=we(e.milliseconds),e.seconds=we(e.seconds),e.minutes=we(e.minutes),e.hours=we(e.hours),e.months=we(e.months),e.years=we(e.years),this}function ys(e,t,n,r){var a=fe(t,n);return e._milliseconds+=r*a._milliseconds,e._days+=r*a._days,e._months+=r*a._months,e._bubble()}function Vd(e,t){return ys(this,e,t,1)}function $d(e,t){return ys(this,e,t,-1)}function Br(e){return e<0?Math.floor(e):Math.ceil(e)}function zd(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,a,s,i,o,l;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=Br(An(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,a=ae(e/1e3),r.seconds=a%60,s=ae(a/60),r.minutes=s%60,i=ae(s/60),r.hours=i%24,t+=ae(i/24),l=ae(vs(t)),n+=l,t-=Br(An(l)),o=ae(n/12),n%=12,r.days=t,r.months=n,r.years=o,this}function vs(e){return e*4800/146097}function An(e){return e*146097/4800}function Zd(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=oe(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+vs(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(An(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function Re(e){return function(){return this.as(e)}}var ks=Re("ms"),Xd=Re("s"),Kd=Re("m"),Jd=Re("h"),Qd=Re("d"),eh=Re("w"),th=Re("M"),nh=Re("Q"),rh=Re("y"),ah=ks;function sh(){return fe(this)}function ih(e){return e=oe(e),this.isValid()?this[e+"s"]():NaN}function Ve(e){return function(){return this.isValid()?this._data[e]:NaN}}var oh=Ve("milliseconds"),lh=Ve("seconds"),uh=Ve("minutes"),dh=Ve("hours"),hh=Ve("days"),mh=Ve("months"),fh=Ve("years");function gh(){return ae(this.days()/7)}var xe=Math.round,Xe={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function ch(e,t,n,r,a){return a.relativeTime(t||1,!!n,e,r)}function ph(e,t,n,r){var a=fe(e).abs(),s=xe(a.as("s")),i=xe(a.as("m")),o=xe(a.as("h")),l=xe(a.as("d")),u=xe(a.as("M")),d=xe(a.as("w")),f=xe(a.as("y")),m=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||i<=1&&["m"]||i<n.m&&["mm",i]||o<=1&&["h"]||o<n.h&&["hh",o]||l<=1&&["d"]||l<n.d&&["dd",l];return n.w!=null&&(m=m||d<=1&&["w"]||d<n.w&&["ww",d]),m=m||u<=1&&["M"]||u<n.M&&["MM",u]||f<=1&&["y"]||["yy",f],m[2]=t,m[3]=+e>0,m[4]=r,ch.apply(null,m)}function yh(e){return e===void 0?xe:typeof e=="function"?(xe=e,!0):!1}function vh(e,t){return Xe[e]===void 0?!1:t===void 0?Xe[e]:(Xe[e]=t,e==="s"&&(Xe.ss=t-1),!0)}function kh(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=Xe,a,s;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},Xe,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),a=this.localeData(),s=ph(this,!n,r,a),n&&(s=a.pastFuture(+this,s)),a.postformat(s)}var gn=Math.abs;function ze(e){return(e>0)-(e<0)||+e}function nn(){if(!this.isValid())return this.localeData().invalidDate();var e=gn(this._milliseconds)/1e3,t=gn(this._days),n=gn(this._months),r,a,s,i,o=this.asSeconds(),l,u,d,f;return o?(r=ae(e/60),a=ae(r/60),e%=60,r%=60,s=ae(n/12),n%=12,i=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=o<0?"-":"",u=ze(this._months)!==ze(o)?"-":"",d=ze(this._days)!==ze(o)?"-":"",f=ze(this._milliseconds)!==ze(o)?"-":"",l+"P"+(s?u+s+"Y":"")+(n?u+n+"M":"")+(t?d+t+"D":"")+(a||r||e?"T":"")+(a?f+a+"H":"")+(r?f+r+"M":"")+(e?f+i+"S":"")):"P0D"}var N=en.prototype;N.isValid=mu;N.abs=Wd;N.add=Vd;N.subtract=$d;N.as=Zd;N.asMilliseconds=ks;N.asSeconds=Xd;N.asMinutes=Kd;N.asHours=Jd;N.asDays=Qd;N.asWeeks=eh;N.asMonths=th;N.asQuarters=nh;N.asYears=rh;N.valueOf=ah;N._bubble=zd;N.clone=sh;N.get=ih;N.milliseconds=oh;N.seconds=lh;N.minutes=uh;N.hours=dh;N.days=hh;N.weeks=gh;N.months=mh;N.years=fh;N.humanize=kh;N.toISOString=nn;N.toString=nn;N.toJSON=nn;N.locale=is;N.localeData=ls;N.toIsoString=ie("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",nn);N.lang=os;b("X",0,0,"unix");b("x",0,0,"valueOf");p("x",Xt);p("X",Lo);H("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});H("x",function(e,t,n){n._d=new Date(D(e))});//! moment.js
g.version="2.30.1";bo(j);g.fn=h;g.min=lu;g.max=uu;g.now=du;g.utc=Se;g.unix=Cd;g.months=Ld;g.isDate=St;g.locale=He;g.invalid=Vt;g.duration=fe;g.isMoment=he;g.weekdays=Yd;g.parseZone=jd;g.localeData=Ee;g.isDuration=Rt;g.monthsShort=qd;g.weekdaysMin=Gd;g.defineLocale=sr;g.updateLocale=jl;g.locales=Ll;g.weekdaysShort=Ud;g.normalizeUnits=oe;g.relativeTimeRounding=yh;g.relativeTimeThreshold=vh;g.calendarFormat=Iu;g.prototype=h;g.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};function bs(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=bs(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Fe(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=bs(e))&&(r&&(r+=" "),r+=t);return r}const ot=e=>Fe({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var bh=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};B.forwardRef((e,t)=>{var{className:n,size:r="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,f=bh(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return X.createElement(a,Object.assign({},f,{ref:t,className:Fe(n,"navds-body-long",`navds-body-long--${r}`,ot({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var _h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ve=B.forwardRef((e,t)=>{var{className:n,size:r="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,f=_h(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return X.createElement(a,Object.assign({},f,{ref:t,className:Fe(n,"navds-body-short",`navds-body-short--${r}`,ot({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var Sh=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};B.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:a,uppercase:s,as:i="p",truncate:o,weight:l="regular",align:u,visuallyHidden:d,textColor:f}=e,m=Sh(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return X.createElement(i,Object.assign({},m,{ref:t,className:Fe(n,"navds-detail",ot({spacing:a,truncate:o,weight:l,align:u,visuallyHidden:d,textColor:f,uppercase:s}),{"navds-detail--small":r==="small"})}))});var Th=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};B.forwardRef((e,t)=>{var{className:n,size:r,spacing:a,as:s="p"}=e,i=Th(e,["className","size","spacing","as"]);return X.createElement(s,Object.assign({},i,{ref:t,className:Fe("navds-error-message","navds-label",n,ot({spacing:a}),{"navds-label--small":r==="small"})}))});var wh=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const gr=B.forwardRef((e,t)=>{var{level:n="1",size:r,className:a,as:s,spacing:i,align:o,visuallyHidden:l,textColor:u}=e,d=wh(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const f=s??`h${n}`;return X.createElement(f,Object.assign({},d,{ref:t,className:Fe(a,"navds-heading",`navds-heading--${r}`,ot({spacing:i,align:o,visuallyHidden:l,textColor:u}))}))});var xh=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};B.forwardRef((e,t)=>{var{className:n,spacing:r,as:a="p"}=e,s=xh(e,["className","spacing","as"]);return X.createElement(a,Object.assign({},s,{ref:t,className:Fe(n,"navds-ingress",{"navds-typo--spacing":!!r})}))});var Dh=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const et=B.forwardRef((e,t)=>{var{className:n,size:r="medium",as:a="label",spacing:s,visuallyHidden:i,textColor:o}=e,l=Dh(e,["className","size","as","spacing","visuallyHidden","textColor"]);return X.createElement(a,Object.assign({},l,{ref:t,className:Fe(n,"navds-label",ot({spacing:s,visuallyHidden:i,textColor:o}),{"navds-label--small":r==="small"})}))});var Mh=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Cr=B.forwardRef((e,t)=>{var{children:n,className:r,variant:a,size:s="medium",icon:i}=e,o=Mh(e,["children","className","variant","size","icon"]);return X.createElement(ve,Object.assign({},o,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:Fe("navds-tag",r,`navds-tag--${a}`,`navds-tag--${s}`)}),i&&X.createElement("span",{className:"navds-tag__icon--left"},i),n)});function Oh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _s={exports:{}},dt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jr;function Nh(){if(jr)return dt;jr=1;var e=X,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(o,l,u){var d,f={},m=null,S=null;u!==void 0&&(m=""+u),l.key!==void 0&&(m=""+l.key),l.ref!==void 0&&(S=l.ref);for(d in l)r.call(l,d)&&!s.hasOwnProperty(d)&&(f[d]=l[d]);if(o&&o.defaultProps)for(d in l=o.defaultProps,l)f[d]===void 0&&(f[d]=l[d]);return{$$typeof:t,type:o,key:m,ref:S,props:f,_owner:a.current}}return dt.Fragment=n,dt.jsx=i,dt.jsxs=i,dt}_s.exports=Nh();var $=_s.exports;const $e={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};_e($e);_e($e);var Ss={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,r.call(this,o)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)t.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Ss);var Ph=Ss.exports;const re=Oh(Ph),Eh="_borderbox_hicl4_1",Rh="_error_hicl4_4",Fh="_warning_hicl4_7",Ah={borderbox:Eh,error:Rh,warning:Fh};re.bind(Ah);const Ih="_aksjonspunkt_kn1hn_1",Hh="_erAksjonspunktApent_kn1hn_4",Bh="_erIkkeGodkjentAvBeslutter_kn1hn_8",Ch={aksjonspunkt:Ih,erAksjonspunktApent:Hh,erIkkeGodkjentAvBeslutter:Bh};re.bind(Ch);_e($e);_e($e);const jh="_tooltip_h8akz_1",Lh="_tooltiptext_h8akz_5",qh="_left_h8akz_22",Yh="_top_h8akz_27",Uh="_right_h8akz_30",Gh="_bottom_h8akz_34",Wh="_showTooltip_h8akz_1",In={tooltip:jh,tooltiptext:Lh,left:qh,top:Yh,right:Uh,bottom:Gh,showTooltip:Wh},Vh=re.bind(In),$h=({children:e,content:t,alignRight:n=!1,alignLeft:r=!1,alignTop:a=!1,alignBottom:s=!1})=>$.jsxs("div",{className:In.tooltip,children:[$.jsx("span",{className:Vh(In.tooltiptext,{right:n||!r&&!a&&!s,left:r,top:a,bottom:s}),children:t}),e]}),zh=X.forwardRef(({onClick:e=()=>{},onMouseDown:t,tabIndex:n=-1,className:r="",src:a,srcHover:s,alt:i,onKeyDown:o,tooltip:l,alignTooltipLeft:u=!1},d)=>{const[f,m]=B.useState(!1),S=B.useCallback(()=>{m(!0)},[]),w=B.useCallback(()=>{m(!1)},[]),c=B.useCallback(C=>{(C.key==="Enter"||C.key===" ")&&(o&&o(C),C.preventDefault())},[]),P=s&&f?s:a,x=$.jsx("img",{ref:d,className:r,src:P,alt:i,tabIndex:n,onMouseOver:S,onMouseOut:w,onFocus:S,onBlur:w,onKeyDown:c,onMouseDown:t,onClick:e});return l?$.jsx($h,{content:l,alignLeft:u,children:x}):x});zh.displayName="Image";const Zh="_flexColumnNew_1vdv1_1",Xh={flexColumnNew:Zh},Kh=re.bind(Xh),ye=({children:e,className:t})=>$.jsx("div",{className:Kh("flexColumnNew",t),children:e}),Jh="_flexRow_1yf0y_1",Qh="_spaceBetween_1yf0y_9",em="_alignItemsToBaseline_1yf0y_12",tm="_alignItemsToFlexEnd_1yf0y_15",nm="_justifyItemsToFlexEnd_1yf0y_18",rm="_wrap_1yf0y_21",am={flexRow:Jh,spaceBetween:Qh,alignItemsToBaseline:em,alignItemsToFlexEnd:tm,justifyItemsToFlexEnd:nm,wrap:rm},sm=re.bind(am),Lt=({children:e,spaceBetween:t=!1,alignItemsToBaseline:n=!1,alignItemsToFlexEnd:r=!1,wrap:a=!1,className:s})=>$.jsx("div",{className:sm("flexRow",{spaceBetween:t},{alignItemsToBaseline:n},{alignItemsToFlexEnd:r},{wrap:a},s),children:e}),im="_flexContainer_1dk1o_1",om="_fluid_1dk1o_6",lm="_fullHeight_1dk1o_9",um="_flexWrap_1dk1o_17",dm={flexContainer:im,fluid:om,fullHeight:lm,flexWrap:um},hm=re.bind(dm),qt=({children:e,wrap:t=!1,fullHeight:n=!1})=>$.jsx("div",{className:hm("flexContainer","fluid",{flexWrap:t,fullHeight:n}),children:e});_e($e);const mm="_row_1lxv9_1",fm="_harHover_1lxv9_4",gm="_rowHeader_1lxv9_7",cm="_grayHeader_1lxv9_12",pm="_rowContent_1lxv9_15",ym="_selected_1lxv9_18",vm="_bold_1lxv9_22",km="_dashedBottomBorder_1lxv9_25",bm="_solidBottomBorder_1lxv9_28",_m="_apLeftBorder_1lxv9_31",Sm="_noBottomBorder_1lxv9_34",Ts={row:mm,harHover:fm,rowHeader:gm,grayHeader:cm,rowContent:pm,selected:ym,bold:vm,dashedBottomBorder:km,solidBottomBorder:bm,apLeftBorder:_m,noBottomBorder:Sm},Tm=re.bind(Ts),wm=(e,t,n)=>r=>{e&&r.button===0&&e(r,t,n)},ws=e=>e.tagName==="TR"?e:ws(e.parentElement),Lr=(e,t)=>{const n=ws(e.target),r=(t?n.nextSibling:n.previousSibling)||n;r&&(r.focus(),e.preventDefault())},xm=(e,t,n,r)=>a=>{a.key==="ArrowDown"?Lr(a,!0):a.key==="ArrowUp"?Lr(a,!1):t&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(t(a,n,r),a.preventDefault()):e&&t&&a.target.tagName!=="TD"&&a.key==="Shift"&&(t(a),a.preventDefault())},Dm=e=>t=>{e&&t.target.tagName!=="TD"&&t.key==="Shift"&&(e(t),t.preventDefault())},xs=({id:e,model:t,isHeader:n=!1,hasGrayHeader:r=!1,onMouseDown:a,onKeyDown:s,children:i,noHover:o=!1,isSelected:l=!1,isBold:u=!1,isDashedBottomBorder:d=!1,isSolidBottomBorder:f=!1,isApLeftBorder:m=!1,className:S,useMultiselect:w=!1,hasNoBottomBorder:c=!1})=>$.jsx("tr",{className:Tm(S,Ts.row,{rowHeader:n,grayHeader:r,rowContent:!n&&!o,selected:l,harHover:!o,bold:u,dashedBottomBorder:d,solidBottomBorder:f,noBottomBorder:c,apLeftBorder:m}),onMouseDown:wm(a,e,t),onKeyDown:xm(w,s,e,t),onKeyUp:w?Dm(s):void 0,tabIndex:0,children:i}),Mm="_columnStyle_1f13u_1",Ds={columnStyle:Mm},Om=re.bind(Ds),tt=({children:e="",className:t,hidden:n=!1,colspanAll:r=!1})=>n?null:$.jsx("td",{className:Om(Ds.columnStyle,t),colSpan:r?100:void 0,children:e}),Nm="_table_2cnpl_1",Pm="_rowHover_2cnpl_25",Em={table:Nm,rowHover:Pm},Rm=re.bind(Em),Fm="EMPTY",Ms=X.forwardRef(({headerTextCodes:e=[],headerColumnContent:t=[],classNameTable:n="",noHover:r=!1,hasGrayHeader:a=!1,children:s},i)=>$.jsxs("table",{ref:i,className:Rm("table",{[n]:n,rowHover:!r}),children:[$.jsx("thead",{children:$.jsxs(xs,{isHeader:!0,noHover:r,hasGrayHeader:a,children:[e.map(o=>typeof o=="string"&&o.startsWith(Fm)?$.jsx(tt,{children:" "},o):$.jsx(tt,{children:$.jsx(te,{id:o})},o)),t.map(o=>$.jsx(tt,{children:o},o.key))]})}),$.jsx("tbody",{children:Array.isArray(s)?X.Children.map(s,o=>X.cloneElement(o,{noHover:r})):X.cloneElement(s,{noHover:r})})]}));Ms.displayName="Table";const Am="_hidden_1pb4f_1",Im="_active_1pb4f_8",Hm="_activeRow_1pb4f_15 _active_1pb4f_8",Bm="_toggleIcon_1pb4f_19",Cm="_colTopPadding_1pb4f_22",jm={hidden:Am,active:Im,activeRow:Hm,toggleIcon:Bm,colTopPadding:Cm};re.bind(jm);_e($e);const Lm="_fourPx_qda5k_1",qm="_eightPx_qda5k_4",Ym="_sixteenPx_qda5k_7",Um="_twentyPx_qda5k_10",Gm="_thirtyTwoPx_qda5k_13",Wm="_fourtyPx_qda5k_16",Vm={fourPx:Lm,eightPx:qm,sixteenPx:Ym,twentyPx:Um,thirtyTwoPx:Gm,fourtyPx:Wm},$m=re.bind(Vm),Os=({fourPx:e=!1,eightPx:t=!1,sixteenPx:n=!1,twentyPx:r=!1,thirtyTwoPx:a=!1,fourtyPx:s=!1})=>$.jsx("div",{className:$m({fourPx:e,eightPx:t,sixteenPx:n,twentyPx:r,thirtyTwoPx:a,fourtyPx:s})});_e($e);const zm="_divider_1t980_1",Zm="_dividerParagraf_1t980_8",Xm="_leftPanel_1t980_11",Km="_rightPanel_1t980_14",Jm={divider:zm,dividerParagraf:Zm,leftPanel:Xm,rightPanel:Km};re.bind(Jm);const Qm="_editedIcon_ulrjl_1",ef={editedIcon:Qm};re.bind(ef);const tf="_colMargin_1r8hu_1",Yt={colMargin:tf},At=e=>e?g(e,Gn).format(Wn):"-",nf=(e,t,n,r)=>e&&Object.keys(t).length>0?At(Object.values(t)[0]):r?At(r):e?n?At(n):"-":null,Ns=({soknad:e,termindato:t})=>{const n=e.fodselsdatoer?e.fodselsdatoer:{},r=Object.keys(n).length>0?"FodselsammenligningPanel.Fodselsdato":"FodselsammenligningPanel.Termindato",a=Object.keys(n).length>0?"FodselSammenligningOtherPanel.OpplysningerISoknad":"FodselSammenligningOtherPanel.TerminISoknad",s=B.useMemo(()=>nf(!!e,n,e.termindato,t),[e,n,t]);return y.jsxs(y.Fragment,{children:[y.jsx(gr,{size:"small",children:y.jsx(te,{id:a})}),y.jsx(Os,{sixteenPx:!0}),y.jsx(qt,{children:y.jsxs(Lt,{children:[e.utstedtdato&&y.jsxs(ye,{className:Yt.colMargin,children:[y.jsx(et,{size:"small",children:y.jsx(te,{id:"FodselsammenligningPanel.UstedtDato"})}),y.jsx(ve,{size:"small",children:At(e.utstedtdato)})]}),y.jsxs(ye,{className:Yt.colMargin,children:[y.jsx(et,{size:"small",children:y.jsx(te,{id:r})}),y.jsx(ve,{size:"small",children:s})]}),y.jsxs(ye,{children:[y.jsx(et,{size:"small",children:y.jsx(te,{id:"FodselsammenligningPanel.AntallBarn"})}),y.jsx(ve,{size:"small",children:e.antallBarn})]})]})})]})};Ns.__docgenInfo={description:`FodselSammenligningOtherPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""}}};const cn=e=>e?g(e,Gn).format(Wn):"-",rf=(e,t,n)=>{if(!t&&!n)return"";const r=n||{termindato:void 0,avklartBarn:[]};if(e){const a=r.termindato?r.termindato:t==null?void 0:t.termindato;return a?cn(a):void 0}return r.avklartBarn&&r.avklartBarn.length>0?cn(r.avklartBarn[0].fodselsdato):t!=null&&t.fodselsdatoer?cn(Object.values(t.fodselsdatoer)[0]):"-"},af=(e,t,n)=>{if(!t&&!n)return 0;const r=n||{termindato:void 0,antallBarnTermin:void 0,avklartBarn:[]};return e?r.termindato?r.antallBarnTermin:t==null?void 0:t.antallBarn:r.avklartBarn&&r.avklartBarn.length>0?r.avklartBarn.length:t==null?void 0:t.antallBarn},Ps=({vedtaksDatoSomSvangerskapsuke:e,soknadOriginalBehandling:t,familiehendelseOriginalBehandling:n})=>{const r=n&&!!n.termindato||!t||!t.fodselsdatoer||Object.keys(t.fodselsdatoer).length===0,a=r?"FodselsammenligningPanel.Termindato":"FodselsammenligningPanel.Fodselsdato",s=rf(r,t,n),i=af(r,t,n),o=n?(!n.avklartBarn||n.avklartBarn.length===0)&&!!e:!1;return y.jsxs(y.Fragment,{children:[y.jsx(gr,{size:"small",children:y.jsx(te,{id:"FodselsammenligningPanel.Ytelsesvedtak"})}),y.jsx(Os,{sixteenPx:!0}),y.jsx(qt,{children:y.jsxs(Lt,{children:[o&&y.jsxs(ye,{className:Yt.colMargin,children:[y.jsx(et,{size:"small",children:y.jsx(te,{id:"FodselsammenligningPanel.FodtISvangerskapsuke"})}),y.jsx(ve,{size:"small",children:e})]}),y.jsxs(ye,{className:Yt.colMargin,children:[y.jsx(et,{size:"small",children:y.jsx(te,{id:a})}),y.jsx(ve,{size:"small",children:s||"-"})]}),y.jsxs(ye,{children:[y.jsx(et,{size:"small",children:y.jsx(te,{id:"FodselsammenligningPanel.AntallBarn"})}),y.jsx(ve,{size:"small",children:i||"-"})]})]})})]})};Ps.__docgenInfo={description:`FodselSammenligningRevurderingPanel

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
}>`},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const sf="_noChildrenInTps_3z81w_1",of="_colWidthLeft_3z81w_5",lf="_colWidthRight_3z81w_9",pn={noChildrenInTps:sf,colWidthLeft:of,colWidthRight:lf},qr=e=>e?g(e,Gn).format(Wn):"-",Es=({behandlingsTypeKode:e,avklartBarn:t,nrOfDodfodteBarn:n,soknad:r,vedtaksDatoSomSvangerskapsuke:a,termindato:s,soknadOriginalBehandling:i,familiehendelseOriginalBehandling:o})=>y.jsx(qt,{children:y.jsxs(Lt,{children:[y.jsxs(ye,{className:pn.colWidthLeft,children:[e!==ct.REVURDERING&&y.jsx(Ns,{soknad:r,termindato:s}),e===ct.REVURDERING&&y.jsx(Ps,{soknadOriginalBehandling:i,familiehendelseOriginalBehandling:o,vedtaksDatoSomSvangerskapsuke:a})]}),y.jsxs(ye,{className:pn.colWidthRight,children:[y.jsx(qt,{children:y.jsxs(Lt,{children:[y.jsx(ye,{children:y.jsx(gr,{size:"small",children:y.jsx(te,{id:"FodselsammenligningPanel.OpplysningerTPS"})})}),n>0&&y.jsx(ye,{children:y.jsx(Cr,{variant:"info",children:y.jsx(te,{id:"FodselsammenligningPanel.Dodfodt"})})})]})}),t.length>0&&y.jsx(Ms,{noHover:!0,headerTextCodes:["FodselsammenligningPanel.Fodselsdato","FodselsammenligningPanel.Dodsdato"],children:t.map(l=>{const u=l.fodselsdato+l.dodsdato;return y.jsxs(xs,{id:u,children:[y.jsx(tt,{children:y.jsx(ve,{size:"small",children:qr(l.fodselsdato)})}),y.jsx(tt,{children:y.jsx(ve,{size:"small",children:l.dodsdato?qr(l.dodsdato):"-"})}),y.jsx(tt,{children:l.dodsdato&&y.jsx(Cr,{variant:"info",children:y.jsx(te,{id:"FodselsammenligningPanel.Dod"})})})]},u)})}),t.length===0&&y.jsx("div",{className:pn.noChildrenInTps,children:y.jsx(ve,{size:"small",children:"-"})})]})]})});Es.__docgenInfo={description:`FodselSammenlingningPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const uf={"FodselsammenligningPanel.AntallBarn":"Antall barn","FodselsammenligningPanel.Termindato":"Termindato","FodselsammenligningPanel.FodtISvangerskapsuke":"Født i svangerskapsuke","FodselsammenligningPanel.Svangerskapsuke":"Svangerskapsuke","FodselsammenligningPanel.OpplysningerTPS":"Opplysninger om fødsel fra folkeregisteret","FodselsammenligningPanel.Fodselsdato":"Fødselsdato","FodselsammenligningPanel.Dodsdato":"Dødsdato","FodselsammenligningPanel.UstedtDato":"Utstedt dato","FodselsammenligningPanel.Ytelsesvedtak":"Vedtak","FodselsammenligningPanel.Dodfodt":"Dødfødsel","FodselsammenligningPanel.Dod":"Død","FodselSammenligningOtherPanel.OpplysningerISoknad":"Opplysninger om fødsel fra søknaden","FodselSammenligningOtherPanel.TerminISoknad":"Opplysninger om termin oppgitt i søknaden"},df=_e(uf),cr=({behandlingsTypeKode:e,avklartBarn:t=[],termindato:n,vedtaksDatoSomSvangerskapsuke:r,soknad:a,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:i})=>{const o=t.reduce((l,u)=>l+(u.dodsdato?1:0),0);return y.jsx(oo,{value:df,children:y.jsx(Es,{avklartBarn:t,termindato:n,vedtaksDatoSomSvangerskapsuke:r,nrOfDodfodteBarn:o,behandlingsTypeKode:e,soknad:a,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:i})})};cr.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningIndex",props:{behandlingsTypeKode:{required:!0,tsType:{name:"string"},description:""},avklartBarn:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const hf=[{fodselsdato:"2019-01-10",dodsdato:"2019-01-10",fnr:"1213200001"}],mf={fodselsdatoer:{1:"2019-01-10"},termindato:"2019-01-01",utstedtdato:"2019-01-02",antallBarn:1},ff={avklartBarn:[{fodselsdato:"2019-01-10"}],termindato:"2019-01-01",antallBarnTermin:1},yf={title:"prosessOgFakta/prosess-fakta-fodsel-sammenligning",component:cr},pr=({behandlingsTypeKode:e,vedtaksDatoSomSvangerskapsuke:t,familiehendelseOriginalBehandling:n})=>y.jsx(cr,{behandlingsTypeKode:e,avklartBarn:hf,termindato:"2019-01-01",soknad:mf,familiehendelseOriginalBehandling:n||ff,vedtaksDatoSomSvangerskapsuke:t}),ht=pr.bind({});ht.args={behandlingsTypeKode:ct.REVURDERING};const mt=pr.bind({});mt.args={behandlingsTypeKode:ct.FORSTEGANGSSOKNAD};const ft=pr.bind({});ft.args={behandlingsTypeKode:ct.REVURDERING,vedtaksDatoSomSvangerskapsuke:43,familiehendelseOriginalBehandling:{avklartBarn:[],termindato:"2019-01-01",antallBarnTermin:1}};var Yr,Ur,Gr;ht.parameters={...ht.parameters,docs:{...(Yr=ht.parameters)==null?void 0:Yr.docs,source:{originalSource:`({
  behandlingsTypeKode,
  vedtaksDatoSomSvangerskapsuke,
  familiehendelseOriginalBehandling
}) => <FodselSammenligningIndex behandlingsTypeKode={behandlingsTypeKode} avklartBarn={avklartBarn} termindato="2019-01-01" soknad={soknad} familiehendelseOriginalBehandling={familiehendelseOriginalBehandling || familiehendelse} vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke} />`,...(Gr=(Ur=ht.parameters)==null?void 0:Ur.docs)==null?void 0:Gr.source}}};var Wr,Vr,$r;mt.parameters={...mt.parameters,docs:{...(Wr=mt.parameters)==null?void 0:Wr.docs,source:{originalSource:`({
  behandlingsTypeKode,
  vedtaksDatoSomSvangerskapsuke,
  familiehendelseOriginalBehandling
}) => <FodselSammenligningIndex behandlingsTypeKode={behandlingsTypeKode} avklartBarn={avklartBarn} termindato="2019-01-01" soknad={soknad} familiehendelseOriginalBehandling={familiehendelseOriginalBehandling || familiehendelse} vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke} />`,...($r=(Vr=mt.parameters)==null?void 0:Vr.docs)==null?void 0:$r.source}}};var zr,Zr,Xr;ft.parameters={...ft.parameters,docs:{...(zr=ft.parameters)==null?void 0:zr.docs,source:{originalSource:`({
  behandlingsTypeKode,
  vedtaksDatoSomSvangerskapsuke,
  familiehendelseOriginalBehandling
}) => <FodselSammenligningIndex behandlingsTypeKode={behandlingsTypeKode} avklartBarn={avklartBarn} termindato="2019-01-01" soknad={soknad} familiehendelseOriginalBehandling={familiehendelseOriginalBehandling || familiehendelse} vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke} />`,...(Xr=(Zr=ft.parameters)==null?void 0:Zr.docs)==null?void 0:Xr.source}}};const vf=["PanelForNårBehandlingstypeErRevurdering","PanelForNårBehandlingstypeErFørstegangssoknad","PanelForMedVisningAvSvangerskapsuke"];export{ft as PanelForMedVisningAvSvangerskapsuke,mt as PanelForNårBehandlingstypeErFørstegangssoknad,ht as PanelForNårBehandlingstypeErRevurdering,vf as __namedExportsOrder,yf as default};
