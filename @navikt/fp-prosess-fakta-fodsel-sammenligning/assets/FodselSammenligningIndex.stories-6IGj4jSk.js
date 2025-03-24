import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{r as h,R as w}from"./index-BZISi7jw.js";import{d as te}from"./dayjs.min-DkLNzaWO.js";import"./_commonjsHelpers-CqkleIqs.js";var Te=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(Te||{});Te.BRUKERS_ANDEL;Te.FRILANS;Te.EGEN_NÆRING;var ae=(e=>(e.FORSTEGANGSSOKNAD="BT-002",e.KLAGE="BT-003",e.REVURDERING="BT-004",e.DOKUMENTINNSYN="BT-006",e.TILBAKEKREVING="BT-007",e.ANKE="BT-008",e.TILBAKEKREVING_REVURDERING="BT-009",e))(ae||{}),Me=function(e,t){return Me=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},Me(e,t)};function z(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Me(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var k=function(){return k=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},k.apply(this,arguments)};function se(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}function K(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,s;n<a;n++)(s||!(n in t))&&(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return e.concat(s||Array.prototype.slice.call(t))}function Y(e,t){var r=t&&t.cache?t.cache:$t,n=t&&t.serializer?t.serializer:Lt,a=t&&t.strategy?t.strategy:qt;return a(e,{cache:r,serializer:n})}function Ht(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Mt(e,t,r,n){var a=Ht(n)?n:r(n),s=t.get(a);return typeof s>"u"&&(s=e.call(this,n),t.set(a,s)),s}function Zn(e,t,r){var n=Array.prototype.slice.call(arguments,3),a=r(n),s=t.get(a);return typeof s>"u"&&(s=e.apply(this,n),t.set(a,s)),s}function Jn(e,t,r,n,a){return r.bind(t,e,n,a)}function qt(e,t){var r=e.length===1?Mt:Zn;return Jn(e,this,r,t.cache.create(),t.serializer)}function Ct(e,t){return Jn(e,this,Zn,t.cache.create(),t.serializer)}var Lt=function(){return JSON.stringify(arguments)},Ut=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(t){return this.cache[t]},e.prototype.set=function(t,r){this.cache[t]=r},e}(),$t={create:function(){return new Ut}},X={variadic:Ct},R;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(R||(R={}));var A;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(A||(A={}));var oe;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(oe||(oe={}));function ln(e){return e.type===A.literal}function Gt(e){return e.type===A.argument}function Qn(e){return e.type===A.number}function et(e){return e.type===A.date}function nt(e){return e.type===A.time}function tt(e){return e.type===A.select}function rt(e){return e.type===A.plural}function Vt(e){return e.type===A.pound}function at(e){return e.type===A.tag}function st(e){return!!(e&&typeof e=="object"&&e.type===oe.number)}function qe(e){return!!(e&&typeof e=="object"&&e.type===oe.dateTime)}var ot=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,Wt=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function zt(e){var t={};return e.replace(Wt,function(r){var n=r.length;switch(r[0]){case"G":t.era=n===4?"long":n===5?"narrow":"short";break;case"y":t.year=n===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][n-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][n-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=n===4?"long":n===5?"narrow":"short";break;case"e":if(n<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][n-4];break;case"c":if(n<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][n-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][n-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][n-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][n-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][n-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][n-1];break;case"s":t.second=["numeric","2-digit"][n-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=n<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),t}var Yt=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function Xt(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var t=e.split(Yt).filter(function(g){return g.length>0}),r=[],n=0,a=t;n<a.length;n++){var s=a[n],o=s.split("/");if(o.length===0)throw new Error("Invalid number skeleton");for(var i=o[0],l=o.slice(1),u=0,d=l;u<d.length;u++){var m=d[u];if(m.length===0)throw new Error("Invalid number skeleton")}r.push({stem:i,options:l})}return r}function Kt(e){return e.replace(/^(.*?)-/,"")}var un=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,it=/^(@+)?(\+|#+)?[rs]?$/g,Zt=/(\*)(0+)|(#+)(0+)|(0+)/g,lt=/^(0+)$/;function dn(e){var t={};return e[e.length-1]==="r"?t.roundingPriority="morePrecision":e[e.length-1]==="s"&&(t.roundingPriority="lessPrecision"),e.replace(it,function(r,n,a){return typeof a!="string"?(t.minimumSignificantDigits=n.length,t.maximumSignificantDigits=n.length):a==="+"?t.minimumSignificantDigits=n.length:n[0]==="#"?t.maximumSignificantDigits=n.length:(t.minimumSignificantDigits=n.length,t.maximumSignificantDigits=n.length+(typeof a=="string"?a.length:0)),""}),t}function ut(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Jt(e){var t;if(e[0]==="E"&&e[1]==="E"?(t={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(t={notation:"scientific"},e=e.slice(1)),t){var r=e.slice(0,2);if(r==="+!"?(t.signDisplay="always",e=e.slice(2)):r==="+?"&&(t.signDisplay="exceptZero",e=e.slice(2)),!lt.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function mn(e){var t={},r=ut(e);return r||t}function Qt(e){for(var t={},r=0,n=e;r<n.length;r++){var a=n[r];switch(a.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=a.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=Kt(a.options[0]);continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=k(k(k({},t),{notation:"scientific"}),a.options.reduce(function(l,u){return k(k({},l),mn(u))},{}));continue;case"engineering":t=k(k(k({},t),{notation:"engineering"}),a.options.reduce(function(l,u){return k(k({},l),mn(u))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":t.roundingMode="floor";continue;case"rounding-mode-ceiling":t.roundingMode="ceil";continue;case"rounding-mode-down":t.roundingMode="trunc";continue;case"rounding-mode-up":t.roundingMode="expand";continue;case"rounding-mode-half-even":t.roundingMode="halfEven";continue;case"rounding-mode-half-down":t.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":t.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(Zt,function(l,u,d,m,g,v){if(u)t.minimumIntegerDigits=d.length;else{if(m&&g)throw new Error("We currently do not support maximum integer digits");if(v)throw new Error("We currently do not support exact integer digits")}return""});continue}if(lt.test(a.stem)){t.minimumIntegerDigits=a.stem.length;continue}if(un.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(un,function(l,u,d,m,g,v){return d==="*"?t.minimumFractionDigits=u.length:m&&m[0]==="#"?t.maximumFractionDigits=m.length:g&&v?(t.minimumFractionDigits=g.length,t.maximumFractionDigits=g.length+v.length):(t.minimumFractionDigits=u.length,t.maximumFractionDigits=u.length),""});var s=a.options[0];s==="w"?t=k(k({},t),{trailingZeroDisplay:"stripIfInteger"}):s&&(t=k(k({},t),dn(s)));continue}if(it.test(a.stem)){t=k(k({},t),dn(a.stem));continue}var o=ut(a.stem);o&&(t=k(k({},t),o));var i=Jt(a.stem);i&&(t=k(k({},t),i))}return t}var he={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function er(e,t){for(var r="",n=0;n<e.length;n++){var a=e.charAt(n);if(a==="j"){for(var s=0;n+1<e.length&&e.charAt(n+1)===a;)s++,n++;var o=1+(s&1),i=s<2?1:3+(s>>1),l="a",u=nr(t);for((u=="H"||u=="k")&&(i=0);i-- >0;)r+=l;for(;o-- >0;)r=u+r}else a==="J"?r+="H":r+=a}return r}function nr(e){var t=e.hourCycle;if(t===void 0&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,n;r!=="root"&&(n=e.maximize().region);var a=he[n||""]||he[r||""]||he["".concat(r,"-001")]||he["001"];return a[0]}var Re,tr=new RegExp("^".concat(ot.source,"*")),rr=new RegExp("".concat(ot.source,"*$"));function j(e,t){return{start:e,end:t}}var ar=!!String.prototype.startsWith&&"_a".startsWith("a",1),sr=!!String.fromCodePoint,or=!!Object.fromEntries,ir=!!String.prototype.codePointAt,lr=!!String.prototype.trimStart,ur=!!String.prototype.trimEnd,dr=!!Number.isSafeInteger,mr=dr?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Ce=!0;try{var gr=mt("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Ce=((Re=gr.exec("a"))===null||Re===void 0?void 0:Re[0])==="a"}catch{Ce=!1}var gn=ar?function(t,r,n){return t.startsWith(r,n)}:function(t,r,n){return t.slice(n,n+r.length)===r},Le=sr?String.fromCodePoint:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var n="",a=t.length,s=0,o;a>s;){if(o=t[s++],o>1114111)throw RangeError(o+" is not a valid code point");n+=o<65536?String.fromCharCode(o):String.fromCharCode(((o-=65536)>>10)+55296,o%1024+56320)}return n},fn=or?Object.fromEntries:function(t){for(var r={},n=0,a=t;n<a.length;n++){var s=a[n],o=s[0],i=s[1];r[o]=i}return r},dt=ir?function(t,r){return t.codePointAt(r)}:function(t,r){var n=t.length;if(!(r<0||r>=n)){var a=t.charCodeAt(r),s;return a<55296||a>56319||r+1===n||(s=t.charCodeAt(r+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},fr=lr?function(t){return t.trimStart()}:function(t){return t.replace(tr,"")},cr=ur?function(t){return t.trimEnd()}:function(t){return t.replace(rr,"")};function mt(e,t){return new RegExp(e,t)}var Ue;if(Ce){var cn=mt("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Ue=function(t,r){var n;cn.lastIndex=r;var a=cn.exec(t);return(n=a[1])!==null&&n!==void 0?n:""}}else Ue=function(t,r){for(var n=[];;){var a=dt(t,r);if(a===void 0||gt(a)||yr(a))break;n.push(a),r+=a>=65536?2:1}return Le.apply(void 0,n)};var hr=function(){function e(t,r){r===void 0&&(r={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(t,r,n){for(var a=[];!this.isEOF();){var s=this.char();if(s===123){var o=this.parseArgument(t,n);if(o.err)return o;a.push(o.val)}else{if(s===125&&t>0)break;if(s===35&&(r==="plural"||r==="selectordinal")){var i=this.clonePosition();this.bump(),a.push({type:A.pound,location:j(i,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(n)break;return this.error(R.UNMATCHED_CLOSING_TAG,j(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&$e(this.peek()||0)){var o=this.parseTag(t,r);if(o.err)return o;a.push(o.val)}else{var o=this.parseLiteral(t,r);if(o.err)return o;a.push(o.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(t,r){var n=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:A.literal,value:"<".concat(a,"/>"),location:j(n,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(t+1,r,!0);if(s.err)return s;var o=s.val,i=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!$e(this.char()))return this.error(R.INVALID_TAG,j(i,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return a!==u?this.error(R.UNMATCHED_CLOSING_TAG,j(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:A.tag,value:a,children:o,location:j(n,this.clonePosition())},err:null}:this.error(R.INVALID_TAG,j(i,this.clonePosition())))}else return this.error(R.UNCLOSED_TAG,j(n,this.clonePosition()))}else return this.error(R.INVALID_TAG,j(n,this.clonePosition()))},e.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&vr(this.char());)this.bump();return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(t,r){for(var n=this.clonePosition(),a="";;){var s=this.tryParseQuote(r);if(s){a+=s;continue}var o=this.tryParseUnquoted(t,r);if(o){a+=o;continue}var i=this.tryParseLeftAngleBracket();if(i){a+=i;continue}break}var l=j(n,this.clonePosition());return{val:{type:A.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!pr(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(t){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(t==="plural"||t==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var n=this.char();if(n===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(n);this.bump()}return Le.apply(void 0,r)},e.prototype.tryParseUnquoted=function(t,r){if(this.isEOF())return null;var n=this.char();return n===60||n===123||n===35&&(r==="plural"||r==="selectordinal")||n===125&&t>0?null:(this.bump(),Le(n))},e.prototype.parseArgument=function(t,r){var n=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(R.EXPECT_ARGUMENT_CLOSING_BRACE,j(n,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(R.EMPTY_ARGUMENT,j(n,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(R.MALFORMED_ARGUMENT,j(n,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(R.EXPECT_ARGUMENT_CLOSING_BRACE,j(n,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:A.argument,value:a,location:j(n,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(R.EXPECT_ARGUMENT_CLOSING_BRACE,j(n,this.clonePosition())):this.parseArgumentOptions(t,r,a,n);default:return this.error(R.MALFORMED_ARGUMENT,j(n,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),r=this.offset(),n=Ue(this.message,r),a=r+n.length;this.bumpTo(a);var s=this.clonePosition(),o=j(t,s);return{value:n,location:o}},e.prototype.parseArgumentOptions=function(t,r,n,a){var s,o=this.clonePosition(),i=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(i){case"":return this.error(R.EXPECT_ARGUMENT_TYPE,j(o,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),m=this.parseSimpleArgStyleIfPossible();if(m.err)return m;var g=cr(m.val);if(g.length===0)return this.error(R.EXPECT_ARGUMENT_STYLE,j(this.clonePosition(),this.clonePosition()));var v=j(d,this.clonePosition());u={style:g,styleLocation:v}}var S=this.tryParseArgumentClose(a);if(S.err)return S;var f=j(a,this.clonePosition());if(u&&gn(u==null?void 0:u.style,"::",0)){var E=fr(u.style.slice(2));if(i==="number"){var m=this.parseNumberSkeletonFromString(E,u.styleLocation);return m.err?m:{val:{type:A.number,value:n,location:f,style:m.val},err:null}}else{if(E.length===0)return this.error(R.EXPECT_DATE_TIME_SKELETON,f);var O=E;this.locale&&(O=er(E,this.locale));var g={type:oe.dateTime,pattern:O,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?zt(O):{}},N=i==="date"?A.date:A.time;return{val:{type:N,value:n,location:f,style:g},err:null}}}return{val:{type:i==="number"?A.number:i==="date"?A.date:A.time,value:n,location:f,style:(s=u==null?void 0:u.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var x=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(R.EXPECT_SELECT_ARGUMENT_OPTIONS,j(x,k({},x)));this.bumpSpace();var I=this.parseIdentifierIfPossible(),c=0;if(i!=="select"&&I.value==="offset"){if(!this.bumpIf(":"))return this.error(R.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,j(this.clonePosition(),this.clonePosition()));this.bumpSpace();var m=this.tryParseDecimalInteger(R.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,R.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(m.err)return m;this.bumpSpace(),I=this.parseIdentifierIfPossible(),c=m.val}var T=this.tryParsePluralOrSelectOptions(t,i,r,I);if(T.err)return T;var S=this.tryParseArgumentClose(a);if(S.err)return S;var b=j(a,this.clonePosition());return i==="select"?{val:{type:A.select,value:n,options:fn(T.val),location:b},err:null}:{val:{type:A.plural,value:n,options:fn(T.val),offset:c,pluralType:i==="plural"?"cardinal":"ordinal",location:b},err:null}}default:return this.error(R.INVALID_ARGUMENT_TYPE,j(o,l))}},e.prototype.tryParseArgumentClose=function(t){return this.isEOF()||this.char()!==125?this.error(R.EXPECT_ARGUMENT_CLOSING_BRACE,j(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,r=this.clonePosition();!this.isEOF();){var n=this.char();switch(n){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(R.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,j(a,this.clonePosition()));this.bump();break}case 123:{t+=1,this.bump();break}case 125:{if(t>0)t-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(t,r){var n=[];try{n=Xt(t)}catch{return this.error(R.INVALID_NUMBER_SKELETON,r)}return{val:{type:oe.number,tokens:n,location:r,parsedOptions:this.shouldParseSkeletons?Qt(n):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(t,r,n,a){for(var s,o=!1,i=[],l=new Set,u=a.value,d=a.location;;){if(u.length===0){var m=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var g=this.tryParseDecimalInteger(R.EXPECT_PLURAL_ARGUMENT_SELECTOR,R.INVALID_PLURAL_ARGUMENT_SELECTOR);if(g.err)return g;d=j(m,this.clonePosition()),u=this.message.slice(m.offset,this.offset())}else break}if(l.has(u))return this.error(r==="select"?R.DUPLICATE_SELECT_ARGUMENT_SELECTOR:R.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);u==="other"&&(o=!0),this.bumpSpace();var v=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?R.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:R.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,j(this.clonePosition(),this.clonePosition()));var S=this.parseMessage(t+1,r,n);if(S.err)return S;var f=this.tryParseArgumentClose(v);if(f.err)return f;i.push([u,{value:S.val,location:j(v,this.clonePosition())}]),l.add(u),this.bumpSpace(),s=this.parseIdentifierIfPossible(),u=s.value,d=s.location}return i.length===0?this.error(r==="select"?R.EXPECT_SELECT_ARGUMENT_SELECTOR:R.EXPECT_PLURAL_ARGUMENT_SELECTOR,j(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!o?this.error(R.MISSING_OTHER_CLAUSE,j(this.clonePosition(),this.clonePosition())):{val:i,err:null}},e.prototype.tryParseDecimalInteger=function(t,r){var n=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(n=-1);for(var s=!1,o=0;!this.isEOF();){var i=this.char();if(i>=48&&i<=57)s=!0,o=o*10+(i-48),this.bump();else break}var l=j(a,this.clonePosition());return s?(o*=n,mr(o)?{val:o,err:null}:this.error(r,l)):this.error(t,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var r=dt(this.message,t);if(r===void 0)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(t,r){return{val:null,err:{kind:t,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var t=this.char();t===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},e.prototype.bumpIf=function(t){if(gn(this.message,t,this.offset())){for(var r=0;r<t.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(t){var r=this.offset(),n=this.message.indexOf(t,r);return n>=0?(this.bumpTo(n),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var r=this.offset();if(r===t)break;if(r>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&gt(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),r=this.offset(),n=this.message.charCodeAt(r+(t>=65536?2:1));return n??null},e}();function $e(e){return e>=97&&e<=122||e>=65&&e<=90}function pr(e){return $e(e)||e===47}function vr(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function gt(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function yr(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Ge(e){e.forEach(function(t){if(delete t.location,tt(t)||rt(t))for(var r in t.options)delete t.options[r].location,Ge(t.options[r].value);else Qn(t)&&st(t.style)||(et(t)||nt(t))&&qe(t.style)?delete t.style.location:at(t)&&Ge(t.children)})}function br(e,t){t===void 0&&(t={}),t=k({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var r=new hr(e,t).parse();if(r.err){var n=SyntaxError(R[r.err.kind]);throw n.location=r.err.location,n.originalMessage=r.err.message,n}return t!=null&&t.captureLocation||Ge(r.val),r.val}var Z;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Z||(Z={}));var J=function(e){z(t,e);function t(r,n,a){var s=e.call(this,r)||this;return s.code=n,s.originalMessage=a,s}return t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),hn=function(e){z(t,e);function t(r,n,a,s){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(n,'". Options are "').concat(Object.keys(a).join('", "'),'"'),Z.INVALID_VALUE,s)||this}return t}(J),kr=function(e){z(t,e);function t(r,n,a){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(n),Z.INVALID_VALUE,a)||this}return t}(J),xr=function(e){z(t,e);function t(r,n){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(n,'"'),Z.MISSING_VALUE,n)||this}return t}(J),U;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(U||(U={}));function Sr(e){return e.length<2?e:e.reduce(function(t,r){var n=t[t.length-1];return!n||n.type!==U.literal||r.type!==U.literal?t.push(r):n.value+=r.value,t},[])}function ft(e){return typeof e=="function"}function ke(e,t,r,n,a,s,o){if(e.length===1&&ln(e[0]))return[{type:U.literal,value:e[0].value}];for(var i=[],l=0,u=e;l<u.length;l++){var d=u[l];if(ln(d)){i.push({type:U.literal,value:d.value});continue}if(Vt(d)){typeof s=="number"&&i.push({type:U.literal,value:r.getNumberFormat(t).format(s)});continue}var m=d.value;if(!(a&&m in a))throw new xr(m,o);var g=a[m];if(Gt(d)){(!g||typeof g=="string"||typeof g=="number")&&(g=typeof g=="string"||typeof g=="number"?String(g):""),i.push({type:typeof g=="string"?U.literal:U.object,value:g});continue}if(et(d)){var v=typeof d.style=="string"?n.date[d.style]:qe(d.style)?d.style.parsedOptions:void 0;i.push({type:U.literal,value:r.getDateTimeFormat(t,v).format(g)});continue}if(nt(d)){var v=typeof d.style=="string"?n.time[d.style]:qe(d.style)?d.style.parsedOptions:n.time.medium;i.push({type:U.literal,value:r.getDateTimeFormat(t,v).format(g)});continue}if(Qn(d)){var v=typeof d.style=="string"?n.number[d.style]:st(d.style)?d.style.parsedOptions:void 0;v&&v.scale&&(g=g*(v.scale||1)),i.push({type:U.literal,value:r.getNumberFormat(t,v).format(g)});continue}if(at(d)){var S=d.children,f=d.value,E=a[f];if(!ft(E))throw new kr(f,"function",o);var O=ke(S,t,r,n,a,s),N=E(O.map(function(c){return c.value}));Array.isArray(N)||(N=[N]),i.push.apply(i,N.map(function(c){return{type:typeof c=="string"?U.literal:U.object,value:c}}))}if(tt(d)){var x=d.options[g]||d.options.other;if(!x)throw new hn(d.value,g,Object.keys(d.options),o);i.push.apply(i,ke(x.value,t,r,n,a));continue}if(rt(d)){var x=d.options["=".concat(g)];if(!x){if(!Intl.PluralRules)throw new J(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Z.MISSING_INTL_API,o);var I=r.getPluralRules(t,{type:d.pluralType}).select(g-(d.offset||0));x=d.options[I]||d.options.other}if(!x)throw new hn(d.value,g,Object.keys(d.options),o);i.push.apply(i,ke(x.value,t,r,n,a,g-(d.offset||0)));continue}}return Sr(i)}function Tr(e,t){return t?k(k(k({},e||{}),t||{}),Object.keys(e).reduce(function(r,n){return r[n]=k(k({},e[n]),t[n]||{}),r},{})):e}function Er(e,t){return t?Object.keys(e).reduce(function(r,n){return r[n]=Tr(e[n],t[n]),r},k({},e)):e}function _e(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}function Or(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Y(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.NumberFormat).bind.apply(t,K([void 0],r,!1)))},{cache:_e(e.number),strategy:X.variadic}),getDateTimeFormat:Y(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.DateTimeFormat).bind.apply(t,K([void 0],r,!1)))},{cache:_e(e.dateTime),strategy:X.variadic}),getPluralRules:Y(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.PluralRules).bind.apply(t,K([void 0],r,!1)))},{cache:_e(e.pluralRules),strategy:X.variadic})}}var ct=function(){function e(t,r,n,a){r===void 0&&(r=e.defaultLocale);var s=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var u=s.formatToParts(l);if(u.length===1)return u[0].value;var d=u.reduce(function(m,g){return!m.length||g.type!==U.literal||typeof m[m.length-1]!="string"?m.push(g.value):m[m.length-1]+=g.value,m},[]);return d.length<=1?d[0]||"":d},this.formatToParts=function(l){return ke(s.ast,s.locales,s.formatters,s.formats,l,void 0,s.message)},this.resolvedOptions=function(){var l;return{locale:((l=s.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var o=a||{};o.formatters;var i=se(o,["formatters"]);this.ast=e.__parse(t,k(k({},i),{locale:this.resolvedLocale}))}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Er(e.formats,n),this.formatters=a&&a.formatters||Or(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(t){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(t);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof t=="string"?t:t[0])}},e.__parse=br,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),ne;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(ne||(ne={}));var ge=function(e){z(t,e);function t(r,n,a){var s=this,o=a?a instanceof Error?a:new Error(String(a)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(n,`
`).concat(o?`
`.concat(o.message,`
`).concat(o.stack):""))||this,s.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,t),s}return t}(Error),wr=function(e){z(t,e);function t(r,n){return e.call(this,ne.UNSUPPORTED_FORMATTER,r,n)||this}return t}(ge),Pr=function(e){z(t,e);function t(r,n){return e.call(this,ne.INVALID_CONFIG,r,n)||this}return t}(ge),pn=function(e){z(t,e);function t(r,n){return e.call(this,ne.MISSING_DATA,r,n)||this}return t}(ge),V=function(e){z(t,e);function t(r,n,a){var s=e.call(this,ne.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(n,`
`),a)||this;return s.locale=n,s}return t}(ge),je=function(e){z(t,e);function t(r,n,a,s){var o=e.call(this,"".concat(r,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),n,s)||this;return o.descriptor=a,o.locale=n,o}return t}(V),Nr=function(e){z(t,e);function t(r,n){var a=e.call(this,ne.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(n,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(s){var o;return(o=s.value)!==null&&o!==void 0?o:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=r,a}return t}(ge);function Rr(e,t,r){if(r===void 0&&(r=Error),!e)throw new r(t)}function ie(e,t,r){return r===void 0&&(r={}),t.reduce(function(n,a){return a in e?n[a]=e[a]:a in r&&(n[a]=r[a]),n},{})}var _r=function(e){},jr=function(e){},ht={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:_r,onWarn:jr};function pt(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function ee(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}function Dr(e){e===void 0&&(e=pt());var t=Intl.RelativeTimeFormat,r=Intl.ListFormat,n=Intl.DisplayNames,a=Y(function(){for(var i,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((i=Intl.DateTimeFormat).bind.apply(i,K([void 0],l,!1)))},{cache:ee(e.dateTime),strategy:X.variadic}),s=Y(function(){for(var i,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((i=Intl.NumberFormat).bind.apply(i,K([void 0],l,!1)))},{cache:ee(e.number),strategy:X.variadic}),o=Y(function(){for(var i,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((i=Intl.PluralRules).bind.apply(i,K([void 0],l,!1)))},{cache:ee(e.pluralRules),strategy:X.variadic});return{getDateTimeFormat:a,getNumberFormat:s,getMessageFormat:Y(function(i,l,u,d){return new ct(i,l,u,k({formatters:{getNumberFormat:s,getDateTimeFormat:a,getPluralRules:o}},d||{}))},{cache:ee(e.message),strategy:X.variadic}),getRelativeTimeFormat:Y(function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];return new(t.bind.apply(t,K([void 0],i,!1)))},{cache:ee(e.relativeTime),strategy:X.variadic}),getPluralRules:o,getListFormat:Y(function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];return new(r.bind.apply(r,K([void 0],i,!1)))},{cache:ee(e.list),strategy:X.variadic}),getDisplayNames:Y(function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];return new(n.bind.apply(n,K([void 0],i,!1)))},{cache:ee(e.displayNames),strategy:X.variadic})}}function Je(e,t,r,n){var a=e&&e[t],s;if(a&&(s=a[r]),s)return s;n(new wr("No ".concat(t," format named: ").concat(r)))}function pe(e,t){return Object.keys(e).reduce(function(r,n){return r[n]=k({timeZone:t},e[n]),r},{})}function vn(e,t){var r=Object.keys(k(k({},e),t));return r.reduce(function(n,a){return n[a]=k(k({},e[a]||{}),t[a]||{}),n},{})}function yn(e,t){if(!t)return e;var r=ct.formats;return k(k(k({},r),e),{date:vn(pe(r.date,t),pe(e.date||{},t)),time:vn(pe(r.time,t),pe(e.time||{},t))})}var Ve=function(e,t,r,n,a){var s=e.locale,o=e.formats,i=e.messages,l=e.defaultLocale,u=e.defaultFormats,d=e.fallbackOnEmptyString,m=e.onError,g=e.timeZone,v=e.defaultRichTextElements;r===void 0&&(r={id:""});var S=r.id,f=r.defaultMessage;Rr(!!S,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var E=String(S),O=i&&Object.prototype.hasOwnProperty.call(i,E)&&i[E];if(Array.isArray(O)&&O.length===1&&O[0].type===A.literal)return O[0].value;if(!n&&O&&typeof O=="string"&&!v)return O.replace(/'\{(.*?)\}'/gi,"{$1}");if(n=k(k({},v),n||{}),o=yn(o,g),u=yn(u,g),!O){if(d===!1&&O==="")return O;if((!f||s&&s.toLowerCase()!==l.toLowerCase())&&m(new Nr(r,s)),f)try{var N=t.getMessageFormat(f,l,u,a);return N.format(n)}catch(x){return m(new je('Error formatting default message for: "'.concat(E,'", rendering default message verbatim'),s,r,x)),typeof f=="string"?f:E}return E}try{var N=t.getMessageFormat(O,s,o,k({formatters:t},a||{}));return N.format(n)}catch(x){m(new je('Error formatting message: "'.concat(E,'", using ').concat(f?"default message":"id"," as fallback."),s,r,x))}if(f)try{var N=t.getMessageFormat(f,l,u,a);return N.format(n)}catch(x){m(new je('Error formatting the default message for: "'.concat(E,'", rendering message verbatim'),s,r,x))}return typeof O=="string"?O:typeof f=="string"?f:E},Fr=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function fe(e,t,r,n){var a=e.locale,s=e.formats,o=e.onError,i=e.timeZone;n===void 0&&(n={});var l=n.format,u=k(k({},i&&{timeZone:i}),l&&Je(s,t,l,o)),d=ie(n,Fr,u);return t==="time"&&!d.hour&&!d.minute&&!d.second&&!d.timeStyle&&!d.dateStyle&&(d=k(k({},d),{hour:"numeric",minute:"numeric"})),r(a,d)}function Ir(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],o=s===void 0?{}:s,i=typeof a=="string"?new Date(a||0):a;try{return fe(e,"date",t,o).format(i)}catch(l){e.onError(new V("Error formatting date.",e.locale,l))}return String(i)}function Ar(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],o=s===void 0?{}:s,i=typeof a=="string"?new Date(a||0):a;try{return fe(e,"time",t,o).format(i)}catch(l){e.onError(new V("Error formatting time.",e.locale,l))}return String(i)}function Br(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],o=r[2],i=o===void 0?{}:o,l=typeof a=="string"?new Date(a||0):a,u=typeof s=="string"?new Date(s||0):s;try{return fe(e,"dateTimeRange",t,i).formatRange(l,u)}catch(d){e.onError(new V("Error formatting date time range.",e.locale,d))}return String(l)}function Hr(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],o=s===void 0?{}:s,i=typeof a=="string"?new Date(a||0):a;try{return fe(e,"date",t,o).formatToParts(i)}catch(l){e.onError(new V("Error formatting date.",e.locale,l))}return[]}function Mr(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],o=s===void 0?{}:s,i=typeof a=="string"?new Date(a||0):a;try{return fe(e,"time",t,o).formatToParts(i)}catch(l){e.onError(new V("Error formatting time.",e.locale,l))}return[]}var qr=["style","type","fallback","languageDisplay"];function Cr(e,t,r,n){var a=e.locale,s=e.onError,o=Intl.DisplayNames;o||s(new J(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Z.MISSING_INTL_API));var i=ie(n,qr);try{return t(a,i).of(r)}catch(l){s(new V("Error formatting display name.",a,l))}}var Lr=["type","style"],bn=Date.now();function Ur(e){return"".concat(bn,"_").concat(e,"_").concat(bn)}function $r(e,t,r,n){n===void 0&&(n={});var a=vt(e,t,r,n).reduce(function(s,o){var i=o.value;return typeof i!="string"?s.push(i):typeof s[s.length-1]=="string"?s[s.length-1]+=i:s.push(i),s},[]);return a.length===1?a[0]:a.length===0?"":a}function vt(e,t,r,n){var a=e.locale,s=e.onError;n===void 0&&(n={});var o=Intl.ListFormat;o||s(new J(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Z.MISSING_INTL_API));var i=ie(n,Lr);try{var l={},u=r.map(function(d,m){if(typeof d=="object"){var g=Ur(m);return l[g]=d,g}return String(d)});return t(a,i).formatToParts(u).map(function(d){return d.type==="literal"?d:k(k({},d),{value:l[d.value]||d.value})})}catch(d){s(new V("Error formatting list.",a,d))}return r}var Gr=["type"];function Vr(e,t,r,n){var a=e.locale,s=e.onError;n===void 0&&(n={}),Intl.PluralRules||s(new J(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Z.MISSING_INTL_API));var o=ie(n,Gr);try{return t(a,o).select(r)}catch(i){s(new V("Error formatting plural.",a,i))}return"other"}var Wr=["numeric","style"];function zr(e,t,r){var n=e.locale,a=e.formats,s=e.onError;r===void 0&&(r={});var o=r.format,i=!!o&&Je(a,"relative",o,s)||{},l=ie(r,Wr,i);return t(n,l)}function Yr(e,t,r,n,a){a===void 0&&(a={}),n||(n="second");var s=Intl.RelativeTimeFormat;s||e.onError(new J(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Z.MISSING_INTL_API));try{return zr(e,t,a).format(r,n)}catch(o){e.onError(new V("Error formatting relative time.",e.locale,o))}return String(r)}var Xr=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function yt(e,t,r){var n=e.locale,a=e.formats,s=e.onError;r===void 0&&(r={});var o=r.format,i=o&&Je(a,"number",o,s)||{},l=ie(r,Xr,i);return t(n,l)}function Kr(e,t,r,n){n===void 0&&(n={});try{return yt(e,t,n).format(r)}catch(a){e.onError(new V("Error formatting number.",e.locale,a))}return String(r)}function Zr(e,t,r,n){n===void 0&&(n={});try{return yt(e,t,n).formatToParts(r)}catch(a){e.onError(new V("Error formatting number.",e.locale,a))}return[]}function Jr(e){var t=e?e[Object.keys(e)[0]]:void 0;return typeof t=="string"}function Qr(e){e.onWarn&&e.defaultRichTextElements&&Jr(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function ea(e,t){var r=Dr(t),n=k(k({},ht),e),a=n.locale,s=n.defaultLocale,o=n.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&o?o(new pn('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&o&&o(new pn('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(o&&o(new Pr('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),n.locale=n.defaultLocale||"en"),Qr(n),k(k({},n),{formatters:r,formatNumber:Kr.bind(null,n,r.getNumberFormat),formatNumberToParts:Zr.bind(null,n,r.getNumberFormat),formatRelativeTime:Yr.bind(null,n,r.getRelativeTimeFormat),formatDate:Ir.bind(null,n,r.getDateTimeFormat),formatDateToParts:Hr.bind(null,n,r.getDateTimeFormat),formatTime:Ar.bind(null,n,r.getDateTimeFormat),formatDateTimeRange:Br.bind(null,n,r.getDateTimeFormat),formatTimeToParts:Mr.bind(null,n,r.getDateTimeFormat),formatPlural:Vr.bind(null,n,r.getPluralRules),formatMessage:Ve.bind(null,n,r),$t:Ve.bind(null,n,r),formatList:$r.bind(null,n,r.getListFormat),formatListToParts:vt.bind(null,n,r.getListFormat),formatDisplayName:Cr.bind(null,n,r.getDisplayNames)})}function na(e,t,r){if(r===void 0&&(r=Error),!e)throw new r(t)}function ta(e){na(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var ra=k(k({},ht),{textComponent:h.Fragment});function aa(e){return function(t){return e(h.Children.toArray(t))}}function kn(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),a=r.length;if(n.length!==a)return!1;for(var s=0;s<a;s++){var o=r[s];if(e[o]!==t[o]||!Object.prototype.hasOwnProperty.call(t,o))return!1}return!0}var De={exports:{}},F={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xn;function sa(){if(xn)return F;xn=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,i=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,m=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,S=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,E=e?Symbol.for("react.fundamental"):60117,O=e?Symbol.for("react.responder"):60118,N=e?Symbol.for("react.scope"):60119;function x(c){if(typeof c=="object"&&c!==null){var T=c.$$typeof;switch(T){case t:switch(c=c.type,c){case l:case u:case n:case s:case a:case m:return c;default:switch(c=c&&c.$$typeof,c){case i:case d:case S:case v:case o:return c;default:return T}}case r:return T}}}function I(c){return x(c)===u}return F.AsyncMode=l,F.ConcurrentMode=u,F.ContextConsumer=i,F.ContextProvider=o,F.Element=t,F.ForwardRef=d,F.Fragment=n,F.Lazy=S,F.Memo=v,F.Portal=r,F.Profiler=s,F.StrictMode=a,F.Suspense=m,F.isAsyncMode=function(c){return I(c)||x(c)===l},F.isConcurrentMode=I,F.isContextConsumer=function(c){return x(c)===i},F.isContextProvider=function(c){return x(c)===o},F.isElement=function(c){return typeof c=="object"&&c!==null&&c.$$typeof===t},F.isForwardRef=function(c){return x(c)===d},F.isFragment=function(c){return x(c)===n},F.isLazy=function(c){return x(c)===S},F.isMemo=function(c){return x(c)===v},F.isPortal=function(c){return x(c)===r},F.isProfiler=function(c){return x(c)===s},F.isStrictMode=function(c){return x(c)===a},F.isSuspense=function(c){return x(c)===m},F.isValidElementType=function(c){return typeof c=="string"||typeof c=="function"||c===n||c===u||c===s||c===a||c===m||c===g||typeof c=="object"&&c!==null&&(c.$$typeof===S||c.$$typeof===v||c.$$typeof===o||c.$$typeof===i||c.$$typeof===d||c.$$typeof===E||c.$$typeof===O||c.$$typeof===N||c.$$typeof===f)},F.typeOf=x,F}var Sn;function oa(){return Sn||(Sn=1,De.exports=sa()),De.exports}var Fe,Tn;function ia(){if(Tn)return Fe;Tn=1;var e=oa(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[e.ForwardRef]=n,s[e.Memo]=a;function o(S){return e.isMemo(S)?a:s[S.$$typeof]||t}var i=Object.defineProperty,l=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,g=Object.prototype;function v(S,f,E){if(typeof f!="string"){if(g){var O=m(f);O&&O!==g&&v(S,O,E)}var N=l(f);u&&(N=N.concat(u(f)));for(var x=o(S),I=o(f),c=0;c<N.length;++c){var T=N[c];if(!r[T]&&!(E&&E[T])&&!(I&&I[T])&&!(x&&x[T])){var b=d(f,T);try{i(S,T,b)}catch{}}}}return S}return Fe=v,Fe}ia();var Qe=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=h.createContext(null)):h.createContext(null);Qe.Consumer;var la=Qe.Provider,ua=la,da=Qe;function en(){var e=h.useContext(da);return ta(e),e}var We;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(We||(We={}));var ze;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(ze||(ze={}));function bt(e){var t=function(r){var n=en(),a=r.value,s=r.children,o=se(r,["value","children"]),i=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?n.formatDateToParts(i,o):n.formatTimeToParts(i,o);return s(l)};return t.displayName=ze[e],t}function ce(e){var t=function(r){var n=en(),a=r.value,s=r.children,o=se(r,["value","children"]),i=n[e](a,o);if(typeof s=="function")return s(i);var l=n.textComponent||h.Fragment;return h.createElement(l,null,i)};return t.displayName=We[e],t}function kt(e){return e&&Object.keys(e).reduce(function(t,r){var n=e[r];return t[r]=ft(n)?aa(n):n,t},{})}var En=function(e,t,r,n){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];var o=kt(n),i=Ve.apply(void 0,K([e,t,r,o],a,!1));return Array.isArray(i)?h.Children.toArray(i):i},ma=function(e,t){var r=e.defaultRichTextElements,n=se(e,["defaultRichTextElements"]),a=kt(r),s=ea(k(k(k({},ra),n),{defaultRichTextElements:a}),t),o={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:a};return k(k({},s),{formatMessage:En.bind(null,o,s.formatters),$t:En.bind(null,o,s.formatters)})};function ga(e,t){var r=e.values,n=se(e,["values"]),a=t.values,s=se(t,["values"]);return kn(a,r)&&kn(n,s)}function xt(e){var t=en(),r=t.formatMessage,n=t.textComponent,a=n===void 0?h.Fragment:n,s=e.id,o=e.description,i=e.defaultMessage,l=e.values,u=e.children,d=e.tagName,m=d===void 0?a:d,g=e.ignoreTag,v={id:s,description:o,defaultMessage:i},S=r(v,l,{ignoreTag:g});return typeof u=="function"?u(Array.isArray(S)?S:[S]):m?h.createElement(m,null,h.Children.toArray(S)):h.createElement(h.Fragment,null,S)}xt.displayName="FormattedMessage";var $=h.memo(xt,ga);$.displayName="MemoizedFormattedMessage";ce("formatDate");ce("formatTime");ce("formatNumber");ce("formatList");ce("formatDisplayName");bt("formatDate");bt("formatTime");function nn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ye={exports:{}},fa=Ye.exports,On;function ca(){return On||(On=1,function(e,t){(function(r,n){e.exports=n()})(fa,function(){var r,n,a=1e3,s=6e4,o=36e5,i=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,d=2628e6,m=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,g={years:u,months:d,days:i,hours:o,minutes:s,seconds:a,milliseconds:1,weeks:6048e5},v=function(T){return T instanceof I},S=function(T,b,p){return new I(T,p,b.$l)},f=function(T){return n.p(T)+"s"},E=function(T){return T<0},O=function(T){return E(T)?Math.ceil(T):Math.floor(T)},N=function(T){return Math.abs(T)},x=function(T,b){return T?E(T)?{negative:!0,format:""+N(T)+b}:{negative:!1,format:""+T+b}:{negative:!1,format:""}},I=function(){function T(p,_,B){var D=this;if(this.$d={},this.$l=B,p===void 0&&(this.$ms=0,this.parseFromMilliseconds()),_)return S(p*g[f(_)],this);if(typeof p=="number")return this.$ms=p,this.parseFromMilliseconds(),this;if(typeof p=="object")return Object.keys(p).forEach(function(L){D.$d[f(L)]=p[L]}),this.calMilliseconds(),this;if(typeof p=="string"){var H=p.match(m);if(H){var P=H.slice(2).map(function(L){return L!=null?Number(L):0});return this.$d.years=P[0],this.$d.months=P[1],this.$d.weeks=P[2],this.$d.days=P[3],this.$d.hours=P[4],this.$d.minutes=P[5],this.$d.seconds=P[6],this.calMilliseconds(),this}}return this}var b=T.prototype;return b.calMilliseconds=function(){var p=this;this.$ms=Object.keys(this.$d).reduce(function(_,B){return _+(p.$d[B]||0)*g[B]},0)},b.parseFromMilliseconds=function(){var p=this.$ms;this.$d.years=O(p/u),p%=u,this.$d.months=O(p/d),p%=d,this.$d.days=O(p/i),p%=i,this.$d.hours=O(p/o),p%=o,this.$d.minutes=O(p/s),p%=s,this.$d.seconds=O(p/a),p%=a,this.$d.milliseconds=p},b.toISOString=function(){var p=x(this.$d.years,"Y"),_=x(this.$d.months,"M"),B=+this.$d.days||0;this.$d.weeks&&(B+=7*this.$d.weeks);var D=x(B,"D"),H=x(this.$d.hours,"H"),P=x(this.$d.minutes,"M"),L=this.$d.seconds||0;this.$d.milliseconds&&(L+=this.$d.milliseconds/1e3,L=Math.round(1e3*L)/1e3);var Q=x(L,"S"),At=p.negative||_.negative||D.negative||H.negative||P.negative||Q.negative,Bt=H.format||P.format||Q.format?"T":"",Ne=(At?"-":"")+"P"+p.format+_.format+D.format+Bt+H.format+P.format+Q.format;return Ne==="P"||Ne==="-P"?"P0D":Ne},b.toJSON=function(){return this.toISOString()},b.format=function(p){var _=p||"YYYY-MM-DDTHH:mm:ss",B={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return _.replace(l,function(D,H){return H||String(B[D])})},b.as=function(p){return this.$ms/g[f(p)]},b.get=function(p){var _=this.$ms,B=f(p);return B==="milliseconds"?_%=1e3:_=B==="weeks"?O(_/g[B]):this.$d[B],_||0},b.add=function(p,_,B){var D;return D=_?p*g[f(_)]:v(p)?p.$ms:S(p,this).$ms,S(this.$ms+D*(B?-1:1),this)},b.subtract=function(p,_){return this.add(p,_,!0)},b.locale=function(p){var _=this.clone();return _.$l=p,_},b.clone=function(){return S(this.$ms,this)},b.humanize=function(p){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!p)},b.valueOf=function(){return this.asMilliseconds()},b.milliseconds=function(){return this.get("milliseconds")},b.asMilliseconds=function(){return this.as("milliseconds")},b.seconds=function(){return this.get("seconds")},b.asSeconds=function(){return this.as("seconds")},b.minutes=function(){return this.get("minutes")},b.asMinutes=function(){return this.as("minutes")},b.hours=function(){return this.get("hours")},b.asHours=function(){return this.as("hours")},b.days=function(){return this.get("days")},b.asDays=function(){return this.as("days")},b.weeks=function(){return this.get("weeks")},b.asWeeks=function(){return this.as("weeks")},b.months=function(){return this.get("months")},b.asMonths=function(){return this.as("months")},b.years=function(){return this.get("years")},b.asYears=function(){return this.as("years")},T}(),c=function(T,b,p){return T.add(b.years()*p,"y").add(b.months()*p,"M").add(b.days()*p,"d").add(b.hours()*p,"h").add(b.minutes()*p,"m").add(b.seconds()*p,"s").add(b.milliseconds()*p,"ms")};return function(T,b,p){r=p,n=p().$utils(),p.duration=function(D,H){var P=p.locale();return S(D,{$l:P},H)},p.isDuration=v;var _=b.prototype.add,B=b.prototype.subtract;b.prototype.add=function(D,H){return v(D)?c(this,D,1):_.bind(this)(D,H)},b.prototype.subtract=function(D,H){return v(D)?c(this,D,-1):B.bind(this)(D,H)}}})}(Ye)),Ye.exports}var ha=ca();const pa=nn(ha);var Xe={exports:{}},va=Xe.exports,wn;function ya(){return wn||(wn=1,function(e,t){(function(r,n){e.exports=n()})(va,function(){var r="day";return function(n,a,s){var o=function(u){return u.add(4-u.isoWeekday(),r)},i=a.prototype;i.isoWeekYear=function(){return o(this).year()},i.isoWeek=function(u){if(!this.$utils().u(u))return this.add(7*(u-this.isoWeek()),r);var d,m,g,v,S=o(this),f=(d=this.isoWeekYear(),m=this.$u,g=(m?s.utc:s)().year(d).startOf("year"),v=4-g.isoWeekday(),g.isoWeekday()>4&&(v+=7),g.add(v,r));return S.diff(f,"week")+1},i.isoWeekday=function(u){return this.$utils().u(u)?this.day()||7:this.day(this.day()%7?u:u-7)};var l=i.startOf;i.startOf=function(u,d){var m=this.$utils(),g=!!m.u(d)||d;return m.p(u)==="isoweek"?g?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(u,d)}}})}(Xe)),Xe.exports}var ba=ya();const ka=nn(ba);var Ke={exports:{}},xa=Ke.exports,Pn;function Sa(){return Pn||(Pn=1,function(e,t){(function(r,n){e.exports=n()})(xa,function(){var r="minute",n=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(s,o,i){var l=o.prototype;i.utc=function(f){var E={date:f,utc:!0,args:arguments};return new o(E)},l.utc=function(f){var E=i(this.toDate(),{locale:this.$L,utc:!0});return f?E.add(this.utcOffset(),r):E},l.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var u=l.parse;l.parse=function(f){f.utc&&(this.$u=!0),this.$utils().u(f.$offset)||(this.$offset=f.$offset),u.call(this,f)};var d=l.init;l.init=function(){if(this.$u){var f=this.$d;this.$y=f.getUTCFullYear(),this.$M=f.getUTCMonth(),this.$D=f.getUTCDate(),this.$W=f.getUTCDay(),this.$H=f.getUTCHours(),this.$m=f.getUTCMinutes(),this.$s=f.getUTCSeconds(),this.$ms=f.getUTCMilliseconds()}else d.call(this)};var m=l.utcOffset;l.utcOffset=function(f,E){var O=this.$utils().u;if(O(f))return this.$u?0:O(this.$offset)?m.call(this):this.$offset;if(typeof f=="string"&&(f=function(c){c===void 0&&(c="");var T=c.match(n);if(!T)return null;var b=(""+T[0]).match(a)||["-",0,0],p=b[0],_=60*+b[1]+ +b[2];return _===0?0:p==="+"?_:-_}(f),f===null))return this;var N=Math.abs(f)<=16?60*f:f,x=this;if(E)return x.$offset=N,x.$u=f===0,x;if(f!==0){var I=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(x=this.local().add(N+I,r)).$offset=N,x.$x.$localOffset=I}else x=this.utc();return x};var g=l.format;l.format=function(f){var E=f||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return g.call(this,E)},l.valueOf=function(){var f=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*f},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var v=l.toDate;l.toDate=function(f){return f==="s"&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():v.call(this)};var S=l.diff;l.diff=function(f,E,O){if(f&&this.$u===f.$u)return S.call(this,f,E,O);var N=this.local(),x=i(f).local();return S.call(N,x,E,O)}}})}(Ke)),Ke.exports}var Ta=Sa();const Ea=nn(Ta);var Nn={exports:{}},ue={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rn;function Oa(){if(Rn)return ue;Rn=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,a,s){var o=null;if(s!==void 0&&(o=""+s),a.key!==void 0&&(o=""+a.key),"key"in a){s={};for(var i in a)i!=="key"&&(s[i]=a[i])}else s=a;return a=s.ref,{$$typeof:e,type:n,key:o,ref:a!==void 0?a:null,props:s}}return ue.Fragment=t,ue.jsx=r,ue.jsxs=r,ue}var _n;function wa(){return _n||(_n=1,Nn.exports=Oa()),Nn.exports}wa();const Pa=pt(),Ee=e=>ma({locale:"nb-NO",messages:e},Pa),tn="YYYY-MM-DD",rn="DD.MM.YYYY",an={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};var Ze={exports:{}},Na=Ze.exports,jn;function Ra(){return jn||(jn=1,function(e,t){(function(r,n){e.exports=n(te)})(Na,function(r){function n(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var a=n(r),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(o){return o+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})}(Ze)),Ze.exports}Ra();te.extend(Ea);te.extend(ka);te.extend(pa);Ee(an);Ee(an);Ee(an);function St(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=St(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Oe(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=St(e))&&(n&&(n+=" "),n+=t);return n}function _a(e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}function ja(e,t){const r=Object.assign({},t);for(const n in t){const a=e[n],s=t[n];/^on[A-Z]/.test(n)?a&&s?r[n]=(...i)=>{s(...i),a(...i)}:a&&(r[n]=a):n==="style"?r[n]=Object.assign(Object.assign({},a),s):n==="className"&&(r[n]=[a,s].filter(Boolean).join(" "))}return Object.assign(Object.assign({},e),r)}var Da=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const we=h.forwardRef((e,t)=>{var r;const{children:n}=e,a=Da(e,["children"]);if(h.isValidElement(n)){const s=Object.prototype.propertyIsEnumerable.call(n.props,"ref")?n.props.ref:n.ref;return h.cloneElement(n,Object.assign(Object.assign({},ja(a,n.props)),{ref:t?_a([t,s]):s}))}if(h.Children.count(n)>1){const s=new Error("Aksel: Components using 'asChild' expects to recieve a single React element child.");throw s.name="SlotError",(r=Error.captureStackTrace)===null||r===void 0||r.call(Error,s,we),s}return null});var Fa=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function Ia(e,t){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function Tt(e={}){const{name:t,hookName:r="useContext",providerName:n="Provider",errorMessage:a,defaultValue:s}=e,o=h.createContext(s),i=h.forwardRef((u,d)=>{var{children:m}=u,g=Fa(u,["children"]);const v=w.useMemo(()=>g,Object.values(g));return w.createElement(o.Provider,{value:d?Object.assign(Object.assign({},v),{ref:d}):v},m)});function l(u=!0){var d;const m=h.useContext(o);if(!m&&u){const g=new Error(a??Ia(r,n));throw g.name="ContextError",(d=Error.captureStackTrace)===null||d===void 0||d.call(Error,g,l),g}return m}return o.displayName=t,[i,l]}const[Aa,M]=Tt({hookName:"useRenameCSS",name:"RenameCSS",providerName:"RenameCSSProvider",defaultValue:{cn:Oe}}),Ba=(...e)=>Oe(e).replace(/^navds-/g,"aksel-").replace(/\snavds-/g," aksel-").trim(),Ha=({children:e})=>w.createElement(Aa,{cn:Ba},e),[Ma,sn]=Tt({hookName:"useTheme",name:"ThemeProvider",providerName:"ThemeProvider"});h.forwardRef((e,t)=>{var r;const n=sn(!1),{children:a,className:s,asChild:o=!1,theme:i=(r=n==null?void 0:n.theme)!==null&&r!==void 0?r:"light",hasBackground:l=!0}=e,d=l??(n===void 0&&e.theme!==void 0),m=o?we:"div";return w.createElement(Ma,{theme:i},w.createElement(Ha,null,w.createElement(m,{ref:t,className:Oe("aksel-theme",s,i),"data-background":d},a)))});const le=e=>Oe({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var qa=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};h.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="p",spacing:s,truncate:o,weight:i="regular",align:l,visuallyHidden:u,textColor:d}=e,m=qa(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:g}=M();return w.createElement(a,Object.assign({},m,{ref:t,className:g(r,"navds-body-long",`navds-body-long--${n}`,le({spacing:s,truncate:o,weight:i,align:l,visuallyHidden:u,textColor:d}))}))});var Ca=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const W=h.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="p",spacing:s,truncate:o,weight:i="regular",align:l,visuallyHidden:u,textColor:d}=e,m=Ca(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:g}=M();return w.createElement(a,Object.assign({},m,{ref:t,className:g(r,"navds-body-short",`navds-body-short--${n}`,le({spacing:s,truncate:o,weight:i,align:l,visuallyHidden:u,textColor:d}))}))});var La=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};h.forwardRef((e,t)=>{var{className:r,size:n="medium",spacing:a,uppercase:s,as:o="p",truncate:i,weight:l="regular",align:u,visuallyHidden:d,textColor:m}=e,g=La(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:v}=M();return w.createElement(o,Object.assign({},g,{ref:t,className:v(r,"navds-detail",le({spacing:a,truncate:i,weight:l,align:u,visuallyHidden:d,textColor:m,uppercase:s}),{"navds-detail--small":n==="small"})}))});var Ua=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};h.forwardRef((e,t)=>{var{children:r,className:n,size:a,spacing:s,as:o="p",showIcon:i=!1}=e,l=Ua(e,["children","className","size","spacing","as","showIcon"]);const{cn:u}=M();return w.createElement(o,Object.assign({},l,{ref:t,className:u("navds-error-message","navds-label",n,le({spacing:s}),{"navds-label--small":a==="small","navds-error-message--show-icon":i})}),i&&w.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},w.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var $a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const on=h.forwardRef((e,t)=>{var{level:r="1",size:n,className:a,as:s,spacing:o,align:i,visuallyHidden:l,textColor:u}=e,d=$a(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:m}=M(),g=s??`h${r}`;return w.createElement(g,Object.assign({},d,{ref:t,className:m(a,"navds-heading",`navds-heading--${n}`,le({spacing:o,align:i,visuallyHidden:l,textColor:u}))}))});var Ga=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};h.forwardRef((e,t)=>{var{className:r,spacing:n,as:a="p"}=e,s=Ga(e,["className","spacing","as"]);const{cn:o}=M();return w.createElement(a,Object.assign({},s,{ref:t,className:o(r,"navds-ingress",{"navds-typo--spacing":!!n})}))});var Va=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const re=h.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="label",spacing:s,visuallyHidden:o,textColor:i}=e,l=Va(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:u}=M();return w.createElement(a,Object.assign({},l,{ref:t,className:u(r,"navds-label",le({spacing:s,visuallyHidden:o,textColor:i}),{"navds-label--small":n==="small"})}))});function Wa(e,t){const r=Object.entries(e).filter(([n])=>!t.includes(n));return Object.fromEntries(r)}let Dn=0;function za(e){const[t,r]=h.useState(e),n=e||t;return h.useEffect(()=>{t==null&&(Dn+=1,r(`aksel-id-${Dn}`))},[t]),n}const Fn=w.useId;function Ya(e){var t;return Fn!==void 0?Fn().replace(/(:)/g,""):(t=za(e))!==null&&t!==void 0?t:""}function In(e,t=[]){const r=h.useRef(e);return h.useEffect(()=>{r.current=e}),h.useCallback((...n)=>{var a;return(a=r.current)===null||a===void 0?void 0:a.call(r,...n)},t)}function Xa({value:e,defaultValue:t,onChange:r}){const n=In(r),[a,s]=h.useState(t),o=e!==void 0,i=o?e:a,l=In(u=>{const m=typeof u=="function"?u(i):u;o||s(m),n(m)},[o,n,i]);return[i,l]}let An=0;function Ka(e){const[t,r]=h.useState(e),n=e||t;return h.useEffect(()=>{t==null&&(An+=1,r(`aksel-icon-${An}`))},[t]),n}const Bn=w.useId;function Pe(e){var t;return Bn!==void 0?Bn().replace(/(:)/g,""):(t=Ka(e))!==null&&t!==void 0?t:""}var Za=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ja=h.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Za(e,["title","titleId"]);let s=Pe();return s=r?n||"title-"+s:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?h.createElement("title",{id:s},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var Qa=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const es=h.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Qa(e,["title","titleId"]);let s=Pe();return s=r?n||"title-"+s:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?h.createElement("title",{id:s},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var ns=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ts=h.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=ns(e,["title","titleId"]);let s=Pe();return s=r?n||"title-"+s:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?h.createElement("title",{id:s},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var rs=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const as=h.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=rs(e,["title","titleId"]);let s=Pe();return s=r?n||"title-"+s:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?h.createElement("title",{id:s},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});function ss(e,t,{checkForDefaultPrevented:r=!0}={}){return function(a){if(e==null||e(a),r===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function Ie(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function de(e){return(t,r)=>{const n=r!=null&&r.context?String(r.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,i=r!=null&&r.width?String(r.width):o;a=e.formattingValues[i]||e.formattingValues[o]}else{const o=e.defaultWidth,i=r!=null&&r.width?String(r.width):e.defaultWidth;a=e.values[i]||e.values[o]}const s=e.argumentCallback?e.argumentCallback(t):t;return a[s]}}function me(e){return(t,r={})=>{const n=r.width,a=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],s=t.match(a);if(!s)return null;const o=s[0],i=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(i)?is(i,m=>m.test(o)):os(i,m=>m.test(o));let u;u=e.valueCallback?e.valueCallback(l):l,u=r.valueCallback?r.valueCallback(u):u;const d=t.slice(o.length);return{value:u,rest:d}}}function os(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function is(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function ls(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const a=n[0],s=t.match(e.parsePattern);if(!s)return null;let o=e.valueCallback?e.valueCallback(s[0]):s[0];o=r.valueCallback?r.valueCallback(o):o;const i=t.slice(a.length);return{value:o,rest:i}}}const us={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},ds=(e,t,r)=>{let n;const a=us[e];return typeof a=="string"?n=a:t===1?n=a.one:n=a.other.replace("{{count}}",String(t)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" siden":n},ms={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},gs={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},fs={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},cs={date:Ie({formats:ms,defaultWidth:"full"}),time:Ie({formats:gs,defaultWidth:"full"}),dateTime:Ie({formats:fs,defaultWidth:"full"})},hs={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},ps=(e,t,r,n)=>hs[e],vs={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},ys={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},bs={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},ks={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},xs={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Ss=(e,t)=>Number(e)+".",Ts={ordinalNumber:Ss,era:de({values:vs,defaultWidth:"wide"}),quarter:de({values:ys,defaultWidth:"wide",argumentCallback:e=>e-1}),month:de({values:bs,defaultWidth:"wide"}),day:de({values:ks,defaultWidth:"wide"}),dayPeriod:de({values:xs,defaultWidth:"wide"})},Es=/^(\d+)\.?/i,Os=/\d+/i,ws={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Ps={any:[/^f/i,/^e/i]},Ns={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Rs={any:[/1/i,/2/i,/3/i,/4/i]},_s={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},js={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ds={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Fs={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Is={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},As={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Bs={ordinalNumber:ls({matchPattern:Es,parsePattern:Os,valueCallback:e=>parseInt(e,10)}),era:me({matchPatterns:ws,defaultMatchWidth:"wide",parsePatterns:Ps,defaultParseWidth:"any"}),quarter:me({matchPatterns:Ns,defaultMatchWidth:"wide",parsePatterns:Rs,defaultParseWidth:"any",valueCallback:e=>e+1}),month:me({matchPatterns:_s,defaultMatchWidth:"wide",parsePatterns:js,defaultParseWidth:"any"}),day:me({matchPatterns:Ds,defaultMatchWidth:"wide",parsePatterns:Fs,defaultParseWidth:"any"}),dayPeriod:me({matchPatterns:Is,defaultMatchWidth:"any",parsePatterns:As,defaultParseWidth:"any"})},Hs={code:"nb",formatDistance:ds,formatLong:cs,formatRelative:ps,localize:Ts,match:Bs,options:{weekStartsOn:1,firstWeekContainsDate:4}},Ms={global:{dateLocale:Hs,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},qs=h.createContext({locale:Ms}),Cs=()=>h.useContext(qs),Hn=/(\w+)/g;function Ls(e,t){const r=Array.isArray(e)?e:Us(e);for(const n of t){if(!n)continue;let a=n;for(let s=0;s<r.length;s++){const o=a[r[s]];o!==void 0&&(a=o)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function Us(e){const t=[];let r=Hn.exec(e);for(;r;){const[,n,a]=r;t.push(n||a),r=Hn.exec(e)}return t}const $s=/{[^}]*}/g;function Gs(e,...t){const r=Cs(),n=r.translations||[],a=[...t,...Array.isArray(n)?n.map(o=>o[e]):[n[e]],r.locale[e]];return(o,i)=>{const l=Ls(o,a);return i?l.replace($s,u=>{const d=u.substring(1,u.length-1);if(i[d]===void 0){const m=JSON.stringify(i);throw new Error(`Error translating key '${o}'. No replacement syntax ({}) found for key '${d}'. The following replacements were passed: '${m}'`)}return i[d]}):l}}function C(e,t,r,n){return n?typeof n=="string"?{[`--__${e}c-${t}-${r}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([a,s])=>[`--__${e}c-${t}-${r}-${a}`,s])):{}}const Vs={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Mn=(e,t,r,n,a,s)=>t.split(" ").map((o,i,l)=>{var u;if(e==="margin-inline"&&o==="full")return`calc((100vw - ${100/l.length}%)/-2)`;if(e==="padding-inline"&&o==="full")return`calc((100vw - ${100/l.length}%)/2)`;if(["mi","mb"].includes(e)&&o==="auto")return"auto";let d=`var(--${s}-${r}-${o})`;if(n.includes(o))d=o==="px"?"1px":o;else if(o.startsWith("space"))d=`var(--${s}-${o})`;else{const m=`--${s}-spacing-${o}`;d=`var(${(u=Vs[m])!==null&&u!==void 0?u:m})`}return a?o==="0"?"0":`calc(-1 * ${d})`:d}).join(" ");function G(e,t,r,n,a,s=!1,o=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${t}-${r}-xs`]:Mn(r,a,n,o,s,e)};const i={};return Object.entries(a).forEach(([l,u])=>{i[`--__${e}c-${t}-${r}-${l}`]=Mn(r,u,n,o,s,e)}),i}const Ws=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],zs=({children:e,className:t,padding:r,paddingInline:n,paddingBlock:a,margin:s,marginInline:o,marginBlock:i,width:l,minWidth:u,maxWidth:d,height:m,minHeight:g,maxHeight:v,position:S,inset:f,top:E,right:O,left:N,bottom:x,overflow:I,overflowX:c,overflowY:T,flexBasis:b,flexGrow:p,flexShrink:_,gridColumn:B})=>{const D=sn(!1),{cn:H}=M(),P=D?"ax":"a",L=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},G(P,"r","p","spacing",r)),G(P,"r","pi","spacing",n)),G(P,"r","pb","spacing",a)),G(P,"r","m","spacing",s)),G(P,"r","mi","spacing",o)),G(P,"r","mb","spacing",i)),C(P,"r","w",l)),C(P,"r","minw",u)),C(P,"r","maxw",d)),C(P,"r","h",m)),C(P,"r","minh",g)),C(P,"r","maxh",v)),C(P,"r","position",S)),G(P,"r","inset","spacing",f)),G(P,"r","top","spacing",E)),G(P,"r","right","spacing",O)),G(P,"r","bottom","spacing",x)),G(P,"r","left","spacing",N)),C(P,"r","overflow",I)),C(P,"r","overflowx",c)),C(P,"r","overflowy",T)),C(P,"r","flex-basis",b)),C(P,"r","flex-grow",p)),C(P,"r","flex-shrink",_)),C(P,"r","grid-column",B));return w.createElement(we,{className:H({className:t,"navds-r-p":r,"navds-r-pi":n,"navds-r-pb":a,"navds-r-m":s,"navds-r-mi":o,"navds-r-mb":i,"navds-r-w":l,"navds-r-minw":u,"navds-r-maxw":d,"navds-r-h":m,"navds-r-minh":g,"navds-r-maxh":v,"navds-r-position":S,"navds-r-inset":f,"navds-r-top":E,"navds-r-right":O,"navds-r-bottom":x,"navds-r-left":N,"navds-r-overflow":I,"navds-r-overflowx":c,"navds-r-overflowy":T,"navds-r-flex-basis":b,"navds-r-flex-grow":p,"navds-r-flex-shrink":_,"navds-r-grid-column":B}),style:L},e)};var Ys=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Et=h.forwardRef((e,t)=>{var{children:r,className:n,as:a="div",align:s,justify:o,wrap:i=!0,gap:l,style:u,direction:d="row",asChild:m}=e,g=Ys(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const S=sn(!1)?"ax":"a",{cn:f}=M(),E=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},u),G(S,"stack","gap","spacing",l)),C(S,"stack","direction",d)),C(S,"stack","align",s)),C(S,"stack","justify",o)),O=m?we:a;return w.createElement(zs,Object.assign({},g),w.createElement(O,Object.assign({},Wa(g,Ws),{ref:t,style:E,className:f("navds-stack",n,{"navds-vstack":d==="column","navds-hstack":d==="row","navds-stack-gap":l,"navds-stack-align":s,"navds-stack-justify":o,"navds-stack-direction":d,"navds-stack-wrap":i})}),r))});var Xs=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Se=h.forwardRef((e,t)=>{var{as:r="div"}=e,n=Xs(e,["as"]);return w.createElement(Et,Object.assign({as:r},n,{ref:t,direction:"row"}))});var Ks=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ot=h.forwardRef((e,t)=>{var{as:r="div"}=e,n=Ks(e,["as"]);return w.createElement(Et,Object.assign({as:r},n,{ref:t,direction:"column",wrap:!1}))});var Zs=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Js=h.forwardRef((e,t)=>{var{className:r}=e,n=Zs(e,["className"]);const{cn:a}=M();return w.createElement("tbody",Object.assign({},n,{ref:t,className:a("navds-table__body",r)}))});var Qs=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const wt=h.forwardRef((e,t)=>{var{className:r,children:n,align:a,textSize:s}=e,o=Qs(e,["className","children","align","textSize"]);const{cn:i}=M();return w.createElement("th",Object.assign({ref:t,className:i("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${a}`]:a,"navds-label--small":s==="small"})},o),n)}),Pt=h.createContext(null);var eo=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const no=h.forwardRef((e,t)=>{var r,n,a,s,{className:o,children:i,sortable:l=!1,sortKey:u}=e,d=eo(e,["className","children","sortable","sortKey"]);const m=h.useContext(Pt),{cn:g}=M();return l&&!u&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),w.createElement(wt,Object.assign({scope:"col",ref:t,className:g(o),"aria-sort":l?((r=m==null?void 0:m.sort)===null||r===void 0?void 0:r.orderBy)===u?(n=m==null?void 0:m.sort)===null||n===void 0?void 0:n.direction:"none":void 0},d),l?w.createElement("button",{type:"button",className:g("navds-table__sort-button"),onClick:l&&u?()=>{var v;return(v=m==null?void 0:m.onSortChange)===null||v===void 0?void 0:v.call(m,u)}:void 0},i,((a=m==null?void 0:m.sort)===null||a===void 0?void 0:a.orderBy)===u?((s=m==null?void 0:m.sort)===null||s===void 0?void 0:s.direction)==="descending"?w.createElement(ts,{"aria-hidden":!0}):w.createElement(as,{"aria-hidden":!0}):w.createElement(Ja,{"aria-hidden":!0})):i)});var to=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Nt=h.forwardRef((e,t)=>{var{className:r,children:n="",align:a,textSize:s}=e,o=to(e,["className","children","align","textSize"]);const{cn:i}=M();return w.createElement(W,Object.assign({as:"td",ref:t,className:i("navds-table__data-cell",r,{[`navds-table__data-cell--align-${a}`]:a}),size:s},o),n)});var ro=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ao=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function so(e){const t=parseFloat(e);return!Number.isNaN(t)&&Number.isFinite(t)}function qn(e){return typeof e=="string"&&e[e.length-1]==="%"&&so(e.substring(0,e.length-1))}function Ae(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="none")}function oo(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="")}const io=e=>{var{children:t,className:r,innerClassName:n,duration:a=250,easing:s="ease",height:o}=e,i=ro(e,["children","className","innerClassName","duration","easing","height"]);const{cn:l}=M(),u=h.useRef(o),d=h.useRef(null),m=h.useRef(),g=h.useRef(),v=h.useRef(o),S=h.useRef("visible"),f=ao?0:a;typeof v.current=="number"?(typeof o!="string"&&(v.current=o<0?0:o),S.current="hidden"):qn(v.current)&&(v.current=o==="0%"?0:o,S.current="hidden");const[E,O]=h.useState(v.current),[N,x]=h.useState(S.current),[I,c]=h.useState(!1);h.useEffect(()=>{Ae(d.current,v.current)},[]),h.useEffect(()=>{if(o!==u.current&&d.current){oo(d.current,u.current),d.current.style.overflow="hidden";const _=d.current.offsetHeight;d.current.style.overflow="";const B=f;let D,H,P="hidden",L;const Q=u.current==="auto";typeof o=="number"?(D=o<0?0:o,H=D):qn(o)?(D=o==="0%"?0:o,H=D):(D=_,H="auto",P=void 0),Q&&(H=D,D=_),O(D),x("hidden"),c(!Q),clearTimeout(g.current),clearTimeout(m.current),Q?(L=!0,g.current=setTimeout(()=>{O(H),x(P),c(L)},50),m.current=setTimeout(()=>{c(!1),Ae(d.current,H)},B)):g.current=setTimeout(()=>{O(H),x(P),c(!1),o!=="auto"&&Ae(d.current,D)},B)}return u.current=o,()=>{clearTimeout(g.current),clearTimeout(m.current)}},[o]);const T={height:E,overflow:N};I&&(T.transition=`height ${f}ms ${s} 0ms`,T.WebkitTransition=T.transition);const p=typeof i["aria-hidden"]<"u"?i["aria-hidden"]:o===0;return w.createElement("div",Object.assign({},i,{className:l(r),style:T}),w.createElement("div",{"aria-hidden":p,className:l(n),ref:d},t))};var lo=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Rt=h.forwardRef((e,t)=>{var{className:r,selected:n=!1,shadeOnHover:a=!0}=e,s=lo(e,["className","selected","shadeOnHover"]);const{cn:o}=M();return w.createElement("tr",Object.assign({},s,{ref:t,className:o("navds-table__row",r,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":a})}))});var uo=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const mo=h.forwardRef((e,t)=>{var{className:r,children:n,content:a,togglePlacement:s="left",defaultOpen:o=!1,open:i,onOpenChange:l,expansionDisabled:u=!1,expandOnRowClick:d=!1,colSpan:m=999,contentGutter:g,onClick:v}=e,S=uo(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:f}=M(),[E,O]=Xa({defaultValue:o,value:i,onChange:l}),N=Gs("global"),x=Ya(),I=T=>{O(b=>!b),T.stopPropagation()},c=T=>{d&&!u&&!_t(T.target)&&I(T)};return w.createElement(w.Fragment,null,w.createElement(Rt,Object.assign({},S,{ref:t,className:f("navds-table__expandable-row",r,{"navds-table__expandable-row--open":E,"navds-table__expandable-row--expansion-disabled":u,"navds-table__expandable-row--clickable":d}),onClick:ss(v,c)}),s==="right"&&n,w.createElement(Nt,{className:f("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":E}),onClick:u?()=>null:I},!u&&w.createElement("button",{className:f("navds-table__toggle-expand-button"),type:"button","aria-controls":x,"aria-expanded":E,onClick:I},w.createElement(es,{className:f("navds-table__expandable-icon"),title:N(E?"showLess":"showMore")}))),s==="left"&&n),w.createElement("tr",{"data-state":E?"open":"closed",className:f("navds-table__expanded-row"),"aria-hidden":!E,id:x},w.createElement("td",{colSpan:m,className:f("navds-table__expanded-row-cell")},w.createElement(io,{className:f("navds-table__expanded-row-collapse"),innerClassName:f(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${g??s}`),height:E?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},a))))});function _t(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:_t(e.parentElement)}var go=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const fo=h.forwardRef((e,t)=>{var{className:r}=e,n=go(e,["className"]);const{cn:a}=M();return w.createElement("thead",Object.assign({},n,{ref:t,className:a("navds-table__header",r)}))});var co=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const q=h.forwardRef((e,t)=>{var{className:r,zebraStripes:n=!1,size:a="medium",onSortChange:s,sort:o}=e,i=co(e,["className","zebraStripes","size","onSortChange","sort"]);const{cn:l}=M();return w.createElement(Pt.Provider,{value:{onSortChange:s,sort:o}},w.createElement("table",Object.assign({},i,{ref:t,className:l("navds-table",`navds-table--${a}`,r,{"navds-table--zebra-stripes":n})})))});q.Header=fo;q.Body=Js;q.Row=Rt;q.ColumnHeader=no;q.HeaderCell=wt;q.DataCell=Nt;q.ExpandableRow=mo;var ho=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Cn=h.forwardRef((e,t)=>{var{children:r,className:n,variant:a,size:s="medium",icon:o}=e,i=ho(e,["children","className","variant","size","icon"]);const{cn:l}=M(),u=(a==null?void 0:a.endsWith("-filled"))&&"strong",d=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",m=a==null?void 0:a.replace("-filled","").replace("-moderate","");return w.createElement(W,Object.assign({},i,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:l("navds-tag",n,`navds-tag--${a}`,`navds-tag--${s}`,`navds-tag--${u||d||"outline"}`,`navds-tag--${m}`)}),o&&w.createElement("span",{className:l("navds-tag__icon--left")},o),r)}),xe=e=>e?te(e,tn).format(rn):"-",po=(e,t,r,n)=>e&&Object.keys(t).length>0?xe(Object.values(t)[0]):n?xe(n):e?r?xe(r):"-":null,jt=({soknad:e,termindato:t})=>{const r=e.fodselsdatoer?e.fodselsdatoer:{},n=Object.keys(r).length>0?"FodselsammenligningPanel.Fodselsdato":"FodselsammenligningPanel.Termindato",a=Object.keys(r).length>0?"FodselSammenligningOtherPanel.OpplysningerISoknad":"FodselSammenligningOtherPanel.TerminISoknad",s=po(!!e,r,e.termindato,t);return y.jsxs(Ot,{gap:"4",children:[y.jsx(on,{size:"small",children:y.jsx($,{id:a})}),y.jsxs(Se,{gap:"4",children:[e.utstedtdato&&y.jsxs("div",{children:[y.jsx(re,{size:"small",children:y.jsx($,{id:"FodselsammenligningPanel.UstedtDato"})}),y.jsx(W,{size:"small",children:xe(e.utstedtdato)})]}),y.jsxs("div",{children:[y.jsx(re,{size:"small",children:y.jsx($,{id:n})}),y.jsx(W,{size:"small",children:s})]}),y.jsxs("div",{children:[y.jsx(re,{size:"small",children:y.jsx($,{id:"FodselsammenligningPanel.AntallBarn"})}),y.jsx(W,{size:"small",children:e.antallBarn})]})]})]})};jt.__docgenInfo={description:`FodselSammenligningOtherPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""}}};const Be=e=>e?te(e,tn).format(rn):"-",vo=(e,t,r)=>{if(!t&&!r)return"";const n=r||{termindato:void 0,avklartBarn:[]};if(e){const a=n.termindato?n.termindato:t==null?void 0:t.termindato;return a?Be(a):void 0}return n.avklartBarn&&n.avklartBarn.length>0?Be(n.avklartBarn[0].fodselsdato):t!=null&&t.fodselsdatoer?Be(Object.values(t.fodselsdatoer)[0]):"-"},yo=(e,t,r)=>{if(!t&&!r)return 0;const n=r||{termindato:void 0,antallBarnTermin:void 0,avklartBarn:[]};return e?n.termindato?n.antallBarnTermin:t==null?void 0:t.antallBarn:n.avklartBarn&&n.avklartBarn.length>0?n.avklartBarn.length:t==null?void 0:t.antallBarn},Dt=({vedtaksDatoSomSvangerskapsuke:e,soknadOriginalBehandling:t,familiehendelseOriginalBehandling:r})=>{const n=r&&!!r.termindato||!(t!=null&&t.fodselsdatoer)||Object.keys(t.fodselsdatoer).length===0,a=n?"FodselsammenligningPanel.Termindato":"FodselsammenligningPanel.Fodselsdato",s=vo(n,t,r),o=yo(n,t,r),i=r?(!r.avklartBarn||r.avklartBarn.length===0)&&!!e:!1;return y.jsxs(Ot,{gap:"4",children:[y.jsx(on,{size:"small",children:y.jsx($,{id:"FodselsammenligningPanel.Ytelsesvedtak"})}),y.jsxs(Se,{gap:"4",children:[i&&y.jsxs("div",{children:[y.jsx(re,{size:"small",children:y.jsx($,{id:"FodselsammenligningPanel.FodtISvangerskapsuke"})}),y.jsx(W,{size:"small",children:e})]}),y.jsxs("div",{children:[y.jsx(re,{size:"small",children:y.jsx($,{id:a})}),y.jsx(W,{size:"small",children:s??"-"})]}),y.jsxs("div",{children:[y.jsx(re,{size:"small",children:y.jsx($,{id:"FodselsammenligningPanel.AntallBarn"})}),y.jsx(W,{size:"small",children:o??"-"})]})]})]})};Dt.__docgenInfo={description:`FodselSammenligningRevurderingPanel

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
}>`},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const bo="_noChildrenInTps_yb1cb_1",ko="_col_yb1cb_5",He={noChildrenInTps:bo,col:ko},Ln=e=>e?te(e,tn).format(rn):"-",Ft=({behandlingsTypeKode:e,avklartBarn:t,nrOfDodfodteBarn:r,soknad:n,vedtaksDatoSomSvangerskapsuke:a,termindato:s,soknadOriginalBehandling:o,familiehendelseOriginalBehandling:i})=>y.jsxs(Se,{gap:"10",children:[y.jsxs("div",{className:He.col,children:[e!==ae.REVURDERING&&y.jsx(jt,{soknad:n,termindato:s}),e===ae.REVURDERING&&y.jsx(Dt,{soknadOriginalBehandling:o,familiehendelseOriginalBehandling:i,vedtaksDatoSomSvangerskapsuke:a})]}),y.jsxs("div",{className:He.col,children:[y.jsxs(Se,{gap:"4",children:[y.jsx(on,{size:"small",children:y.jsx($,{id:"FodselsammenligningPanel.OpplysningerTPS"})}),r>0&&y.jsx(Cn,{variant:"info",children:y.jsx($,{id:"FodselsammenligningPanel.Dodfodt"})})]}),t.length>0&&y.jsxs(q,{children:[y.jsx(q.Header,{children:y.jsxs(q.Row,{children:[y.jsx(q.HeaderCell,{scope:"col",children:y.jsx($,{id:"FodselsammenligningPanel.Fodselsdato"})}),y.jsx(q.HeaderCell,{scope:"col",children:y.jsx($,{id:"FodselsammenligningPanel.Dodsdato"})}),y.jsx(q.HeaderCell,{scope:"col"})]})}),y.jsx(q.Body,{children:t.map(l=>{const u=l.fodselsdato+l.dodsdato;return y.jsxs(q.Row,{id:u,children:[y.jsx(q.DataCell,{children:y.jsx(W,{size:"small",children:Ln(l.fodselsdato)})}),y.jsx(q.DataCell,{children:y.jsx(W,{size:"small",children:l.dodsdato?Ln(l.dodsdato):"-"})}),y.jsx(q.DataCell,{children:l.dodsdato&&y.jsx(Cn,{variant:"info",children:y.jsx($,{id:"FodselsammenligningPanel.Dod"})})})]},u)})})]}),t.length===0&&y.jsx("div",{className:He.noChildrenInTps,children:y.jsx(W,{size:"small",children:"-"})})]})]});Ft.__docgenInfo={description:`FodselSammenlingningPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const xo={"FodselsammenligningPanel.AntallBarn":"Antall barn","FodselsammenligningPanel.Termindato":"Termindato","FodselsammenligningPanel.FodtISvangerskapsuke":"Født i svangerskapsuke","FodselsammenligningPanel.Svangerskapsuke":"Svangerskapsuke","FodselsammenligningPanel.OpplysningerTPS":"Opplysninger om fødsel fra folkeregisteret","FodselsammenligningPanel.Fodselsdato":"Fødselsdato","FodselsammenligningPanel.Dodsdato":"Dødsdato","FodselsammenligningPanel.UstedtDato":"Utstedt dato","FodselsammenligningPanel.Ytelsesvedtak":"Vedtak","FodselsammenligningPanel.Dodfodt":"Dødfødsel","FodselsammenligningPanel.Dod":"Død","FodselSammenligningOtherPanel.OpplysningerISoknad":"Opplysninger om fødsel fra søknaden","FodselSammenligningOtherPanel.TerminISoknad":"Opplysninger om termin oppgitt i søknaden"},So=Ee(xo),It=({behandlingsTypeKode:e,avklartBarn:t=[],termindato:r,vedtaksDatoSomSvangerskapsuke:n,soknad:a,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:o})=>{const i=t.reduce((l,u)=>l+(u.dodsdato?1:0),0);return y.jsx(ua,{value:So,children:y.jsx(Ft,{avklartBarn:t,termindato:r,vedtaksDatoSomSvangerskapsuke:n,nrOfDodfodteBarn:i,behandlingsTypeKode:e,soknad:a,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:o})})};It.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningIndex",props:{behandlingsTypeKode:{required:!0,tsType:{name:"string"},description:""},avklartBarn:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const To=[{fodselsdato:"2019-01-10",dodsdato:"2019-01-10",fnr:"1213200001"}],Eo={fodselsdatoer:{1:"2019-01-10"},termindato:"2019-01-01",utstedtdato:"2019-01-02",antallBarn:1},Oo={avklartBarn:[{fodselsdato:"2019-01-10"}],termindato:"2019-01-01",antallBarnTermin:1},_o={title:"prosessOgFakta/prosess-fakta-fodsel-sammenligning",component:It,args:{avklartBarn:To,termindato:"2019-01-01",soknad:Eo,familiehendelseOriginalBehandling:Oo}},ve={args:{behandlingsTypeKode:ae.REVURDERING}},ye={args:{behandlingsTypeKode:ae.FORSTEGANGSSOKNAD}},be={args:{behandlingsTypeKode:ae.REVURDERING,vedtaksDatoSomSvangerskapsuke:43,familiehendelseOriginalBehandling:{avklartBarn:[],termindato:"2019-01-01",antallBarnTermin:1}}};var Un,$n,Gn;ve.parameters={...ve.parameters,docs:{...(Un=ve.parameters)==null?void 0:Un.docs,source:{originalSource:`{
  args: {
    behandlingsTypeKode: BehandlingType.REVURDERING
  }
}`,...(Gn=($n=ve.parameters)==null?void 0:$n.docs)==null?void 0:Gn.source}}};var Vn,Wn,zn;ye.parameters={...ye.parameters,docs:{...(Vn=ye.parameters)==null?void 0:Vn.docs,source:{originalSource:`{
  args: {
    behandlingsTypeKode: BehandlingType.FORSTEGANGSSOKNAD
  }
}`,...(zn=(Wn=ye.parameters)==null?void 0:Wn.docs)==null?void 0:zn.source}}};var Yn,Xn,Kn;be.parameters={...be.parameters,docs:{...(Yn=be.parameters)==null?void 0:Yn.docs,source:{originalSource:`{
  args: {
    behandlingsTypeKode: BehandlingType.REVURDERING,
    vedtaksDatoSomSvangerskapsuke: 43,
    familiehendelseOriginalBehandling: {
      avklartBarn: [] as AvklartBarn[],
      termindato: '2019-01-01',
      antallBarnTermin: 1
    } as FamilieHendelse
  }
}`,...(Kn=(Xn=be.parameters)==null?void 0:Xn.docs)==null?void 0:Kn.source}}};const jo=["PanelForNårBehandlingstypeErRevurdering","PanelForNårBehandlingstypeErFørstegangssoknad","PanelForMedVisningAvSvangerskapsuke"];export{be as PanelForMedVisningAvSvangerskapsuke,ye as PanelForNårBehandlingstypeErFørstegangssoknad,ve as PanelForNårBehandlingstypeErRevurdering,jo as __namedExportsOrder,_o as default};
