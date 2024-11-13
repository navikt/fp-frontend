import{j as D}from"./jsx-runtime-DR9Q75dM.js";import{v as ks}from"./v4-CQkTLCs1.js";import{r as m,R as N,a as ki,g as gs}from"./index-DRjF_FHU.js";import{a as me}from"./dayjs.min-DN4LN79F.js";import{F as gi,r as Es}from"./index-rX-Bn4lm.js";const{addons:vs}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:ms}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:Ct}=__STORYBOOK_MODULE_GLOBAL__;var Ts="storybook/actions",fs=`${Ts}/action-event`,Rs={depth:10,clearOnStoryChange:!0,limit:50},Ei=(e,n)=>{let t=Object.getPrototypeOf(e);return!t||n(t)?t:Ei(t,n)},As=e=>!!(typeof e=="object"&&e&&Ei(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),cs=e=>{if(As(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let t=Object.getOwnPropertyDescriptor(n,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...t,value:Object.create(r.constructor.prototype)}),n}return e},ps=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?ks():Date.now().toString(36)+Math.random().toString(36).substring(2);function qn(e,n={}){let t={...Rs,...n},r=function(...a){var k,g;if(n.implicit){let E=(k="__STORYBOOK_PREVIEW__"in Ct?Ct.__STORYBOOK_PREVIEW__:void 0)==null?void 0:k.storyRenders.find(f=>f.phase==="playing"||f.phase==="rendering");if(E){let f=!((g=window==null?void 0:window.FEATURES)!=null&&g.disallowImplicitActionsInRenderV8),T=new ms({phase:E.phase,name:e,deprecated:f});if(f)console.warn(T);else throw T}}let i=vs.getChannel(),o=ps(),s=5,l=a.map(cs),d=a.length>1?l:l[0],u={id:o,count:0,data:{name:e,args:d},options:{...t,maxDepth:s+(t.depth||3),allowFunction:t.allowFunction||!1}};i.emit(fs,u)};return r.isAction=!0,r.implicit=n.implicit,r}var de=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN="5032",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYR_BEREGNING="6007",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(de||{});const vi={ENGANGSSTONAD:"ES",FORELDREPENGER:"FP",SVANGERSKAPSPENGER:"SVP"},Tr={ARBG:"ARBG_ORG",ARBGP:"ARBG_PRIV",BRUKER:"BRUKER"},un={TILBAKEKR_OPPRETT:"TILBAKEKR_OPPRETT",TILBAKEKR_IGNORER:"TILBAKEKR_IGNORER",TILBAKEKR_INNTREKK:"TILBAKEKR_INNTREKK",TILBAKEKR_OPPDATER:"TILBAKEKR_OPPDATER"};var Zr=function(e,n){return Zr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])},Zr(e,n)};function Me(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");Zr(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var x=function(){return x=Object.assign||function(n){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},x.apply(this,arguments)};function _n(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t}function Ge(e,n,t){if(t||arguments.length===2)for(var r=0,a=n.length,i;r<a;r++)(i||!(r in n))&&(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return e.concat(i||Array.prototype.slice.call(n))}function ys(e,n,t){if(t===void 0&&(t=Error),!e)throw new t(n)}var W;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(W||(W={}));var ae;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(ae||(ae={}));var Sn;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Sn||(Sn={}));function $t(e){return e.type===ae.literal}function _s(e){return e.type===ae.argument}function mi(e){return e.type===ae.number}function Ti(e){return e.type===ae.date}function fi(e){return e.type===ae.time}function Ri(e){return e.type===ae.select}function Ai(e){return e.type===ae.plural}function Ss(e){return e.type===ae.pound}function ci(e){return e.type===ae.tag}function pi(e){return!!(e&&typeof e=="object"&&e.type===Sn.number)}function Qr(e){return!!(e&&typeof e=="object"&&e.type===Sn.dateTime)}var yi=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,Ns=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function bs(e){var n={};return e.replace(Ns,function(t){var r=t.length;switch(t[0]){case"G":n.era=r===4?"long":r===5?"narrow":"short";break;case"y":n.year=r===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":n.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":n.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":n.weekday=r===4?"long":r===5?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][r-4];break;case"a":n.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":n.hourCycle="h12",n.hour=["numeric","2-digit"][r-1];break;case"H":n.hourCycle="h23",n.hour=["numeric","2-digit"][r-1];break;case"K":n.hourCycle="h11",n.hour=["numeric","2-digit"][r-1];break;case"k":n.hourCycle="h24",n.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":n.minute=["numeric","2-digit"][r-1];break;case"s":n.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":n.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),n}var hs=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function Os(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var n=e.split(hs).filter(function(g){return g.length>0}),t=[],r=0,a=n;r<a.length;r++){var i=a[r],o=i.split("/");if(o.length===0)throw new Error("Invalid number skeleton");for(var s=o[0],l=o.slice(1),d=0,u=l;d<u.length;d++){var k=u[d];if(k.length===0)throw new Error("Invalid number skeleton")}t.push({stem:s,options:l})}return t}function Is(e){return e.replace(/^(.*?)-/,"")}var Jt=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,_i=/^(@+)?(\+|#+)?[rs]?$/g,Ks=/(\*)(0+)|(#+)(0+)|(0+)/g,Si=/^(0+)$/;function zt(e){var n={};return e[e.length-1]==="r"?n.roundingPriority="morePrecision":e[e.length-1]==="s"&&(n.roundingPriority="lessPrecision"),e.replace(_i,function(t,r,a){return typeof a!="string"?(n.minimumSignificantDigits=r.length,n.maximumSignificantDigits=r.length):a==="+"?n.minimumSignificantDigits=r.length:r[0]==="#"?n.maximumSignificantDigits=r.length:(n.minimumSignificantDigits=r.length,n.maximumSignificantDigits=r.length+(typeof a=="string"?a.length:0)),""}),n}function Ni(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Ls(e){var n;if(e[0]==="E"&&e[1]==="E"?(n={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(n={notation:"scientific"},e=e.slice(1)),n){var t=e.slice(0,2);if(t==="+!"?(n.signDisplay="always",e=e.slice(2)):t==="+?"&&(n.signDisplay="exceptZero",e=e.slice(2)),!Si.test(e))throw new Error("Malformed concise eng/scientific notation");n.minimumIntegerDigits=e.length}return n}function Wt(e){var n={},t=Ni(e);return t||n}function Ds(e){for(var n={},t=0,r=e;t<r.length;t++){var a=r[t];switch(a.stem){case"percent":case"%":n.style="percent";continue;case"%x100":n.style="percent",n.scale=100;continue;case"currency":n.style="currency",n.currency=a.options[0];continue;case"group-off":case",_":n.useGrouping=!1;continue;case"precision-integer":case".":n.maximumFractionDigits=0;continue;case"measure-unit":case"unit":n.style="unit",n.unit=Is(a.options[0]);continue;case"compact-short":case"K":n.notation="compact",n.compactDisplay="short";continue;case"compact-long":case"KK":n.notation="compact",n.compactDisplay="long";continue;case"scientific":n=x(x(x({},n),{notation:"scientific"}),a.options.reduce(function(l,d){return x(x({},l),Wt(d))},{}));continue;case"engineering":n=x(x(x({},n),{notation:"engineering"}),a.options.reduce(function(l,d){return x(x({},l),Wt(d))},{}));continue;case"notation-simple":n.notation="standard";continue;case"unit-width-narrow":n.currencyDisplay="narrowSymbol",n.unitDisplay="narrow";continue;case"unit-width-short":n.currencyDisplay="code",n.unitDisplay="short";continue;case"unit-width-full-name":n.currencyDisplay="name",n.unitDisplay="long";continue;case"unit-width-iso-code":n.currencyDisplay="symbol";continue;case"scale":n.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":n.roundingMode="floor";continue;case"rounding-mode-ceiling":n.roundingMode="ceil";continue;case"rounding-mode-down":n.roundingMode="trunc";continue;case"rounding-mode-up":n.roundingMode="expand";continue;case"rounding-mode-half-even":n.roundingMode="halfEven";continue;case"rounding-mode-half-down":n.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":n.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(Ks,function(l,d,u,k,g,E){if(d)n.minimumIntegerDigits=u.length;else{if(k&&g)throw new Error("We currently do not support maximum integer digits");if(E)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Si.test(a.stem)){n.minimumIntegerDigits=a.stem.length;continue}if(Jt.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(Jt,function(l,d,u,k,g,E){return u==="*"?n.minimumFractionDigits=d.length:k&&k[0]==="#"?n.maximumFractionDigits=k.length:g&&E?(n.minimumFractionDigits=g.length,n.maximumFractionDigits=g.length+E.length):(n.minimumFractionDigits=d.length,n.maximumFractionDigits=d.length),""});var i=a.options[0];i==="w"?n=x(x({},n),{trailingZeroDisplay:"stripIfInteger"}):i&&(n=x(x({},n),zt(i)));continue}if(_i.test(a.stem)){n=x(x({},n),zt(a.stem));continue}var o=Ni(a.stem);o&&(n=x(x({},n),o));var s=Ls(a.stem);s&&(n=x(x({},n),s))}return n}var rr={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Ps(e,n){for(var t="",r=0;r<e.length;r++){var a=e.charAt(r);if(a==="j"){for(var i=0;r+1<e.length&&e.charAt(r+1)===a;)i++,r++;var o=1+(i&1),s=i<2?1:3+(i>>1),l="a",d=Fs(n);for((d=="H"||d=="k")&&(s=0);s-- >0;)t+=l;for(;o-- >0;)t=d+t}else a==="J"?t+="H":t+=a}return t}function Fs(e){var n=e.hourCycle;if(n===void 0&&e.hourCycles&&e.hourCycles.length&&(n=e.hourCycles[0]),n)switch(n){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=e.language,r;t!=="root"&&(r=e.maximize().region);var a=rr[r||""]||rr[t||""]||rr["".concat(t,"-001")]||rr["001"];return a[0]}var Br,Ms=new RegExp("^".concat(yi.source,"*")),Vs=new RegExp("".concat(yi.source,"*$"));function X(e,n){return{start:e,end:n}}var Gs=!!String.prototype.startsWith&&"_a".startsWith("a",1),js=!!String.fromCodePoint,ws=!!Object.fromEntries,Bs=!!String.prototype.codePointAt,Us=!!String.prototype.trimStart,Hs=!!String.prototype.trimEnd,xs=!!Number.isSafeInteger,qs=xs?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},et=!0;try{var Ys=hi("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");et=((Br=Ys.exec("a"))===null||Br===void 0?void 0:Br[0])==="a"}catch{et=!1}var Xt=Gs?function(n,t,r){return n.startsWith(t,r)}:function(n,t,r){return n.slice(r,r+t.length)===t},nt=js?String.fromCodePoint:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];for(var r="",a=n.length,i=0,o;a>i;){if(o=n[i++],o>1114111)throw RangeError(o+" is not a valid code point");r+=o<65536?String.fromCharCode(o):String.fromCharCode(((o-=65536)>>10)+55296,o%1024+56320)}return r},Zt=ws?Object.fromEntries:function(n){for(var t={},r=0,a=n;r<a.length;r++){var i=a[r],o=i[0],s=i[1];t[o]=s}return t},bi=Bs?function(n,t){return n.codePointAt(t)}:function(n,t){var r=n.length;if(!(t<0||t>=r)){var a=n.charCodeAt(t),i;return a<55296||a>56319||t+1===r||(i=n.charCodeAt(t+1))<56320||i>57343?a:(a-55296<<10)+(i-56320)+65536}},Cs=Us?function(n){return n.trimStart()}:function(n){return n.replace(Ms,"")},$s=Hs?function(n){return n.trimEnd()}:function(n){return n.replace(Vs,"")};function hi(e,n){return new RegExp(e,n)}var rt;if(et){var Qt=hi("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");rt=function(n,t){var r;Qt.lastIndex=t;var a=Qt.exec(n);return(r=a[1])!==null&&r!==void 0?r:""}}else rt=function(n,t){for(var r=[];;){var a=bi(n,t);if(a===void 0||Oi(a)||Xs(a))break;r.push(a),t+=a>=65536?2:1}return nt.apply(void 0,r)};var Js=function(){function e(n,t){t===void 0&&(t={}),this.message=n,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(n,t,r){for(var a=[];!this.isEOF();){var i=this.char();if(i===123){var o=this.parseArgument(n,r);if(o.err)return o;a.push(o.val)}else{if(i===125&&n>0)break;if(i===35&&(t==="plural"||t==="selectordinal")){var s=this.clonePosition();this.bump(),a.push({type:ae.pound,location:X(s,this.clonePosition())})}else if(i===60&&!this.ignoreTag&&this.peek()===47){if(r)break;return this.error(W.UNMATCHED_CLOSING_TAG,X(this.clonePosition(),this.clonePosition()))}else if(i===60&&!this.ignoreTag&&tt(this.peek()||0)){var o=this.parseTag(n,t);if(o.err)return o;a.push(o.val)}else{var o=this.parseLiteral(n,t);if(o.err)return o;a.push(o.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(n,t){var r=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:ae.literal,value:"<".concat(a,"/>"),location:X(r,this.clonePosition())},err:null};if(this.bumpIf(">")){var i=this.parseMessage(n+1,t,!0);if(i.err)return i;var o=i.val,s=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!tt(this.char()))return this.error(W.INVALID_TAG,X(s,this.clonePosition()));var l=this.clonePosition(),d=this.parseTagName();return a!==d?this.error(W.UNMATCHED_CLOSING_TAG,X(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:ae.tag,value:a,children:o,location:X(r,this.clonePosition())},err:null}:this.error(W.INVALID_TAG,X(s,this.clonePosition())))}else return this.error(W.UNCLOSED_TAG,X(r,this.clonePosition()))}else return this.error(W.INVALID_TAG,X(r,this.clonePosition()))},e.prototype.parseTagName=function(){var n=this.offset();for(this.bump();!this.isEOF()&&Ws(this.char());)this.bump();return this.message.slice(n,this.offset())},e.prototype.parseLiteral=function(n,t){for(var r=this.clonePosition(),a="";;){var i=this.tryParseQuote(t);if(i){a+=i;continue}var o=this.tryParseUnquoted(n,t);if(o){a+=o;continue}var s=this.tryParseLeftAngleBracket();if(s){a+=s;continue}break}var l=X(r,this.clonePosition());return{val:{type:ae.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!zs(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(n){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(n==="plural"||n==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var r=this.char();if(r===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(r);this.bump()}return nt.apply(void 0,t)},e.prototype.tryParseUnquoted=function(n,t){if(this.isEOF())return null;var r=this.char();return r===60||r===123||r===35&&(t==="plural"||t==="selectordinal")||r===125&&n>0?null:(this.bump(),nt(r))},e.prototype.parseArgument=function(n,t){var r=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(W.EXPECT_ARGUMENT_CLOSING_BRACE,X(r,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(W.EMPTY_ARGUMENT,X(r,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(W.MALFORMED_ARGUMENT,X(r,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(W.EXPECT_ARGUMENT_CLOSING_BRACE,X(r,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:ae.argument,value:a,location:X(r,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(W.EXPECT_ARGUMENT_CLOSING_BRACE,X(r,this.clonePosition())):this.parseArgumentOptions(n,t,a,r);default:return this.error(W.MALFORMED_ARGUMENT,X(r,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var n=this.clonePosition(),t=this.offset(),r=rt(this.message,t),a=t+r.length;this.bumpTo(a);var i=this.clonePosition(),o=X(n,i);return{value:r,location:o}},e.prototype.parseArgumentOptions=function(n,t,r,a){var i,o=this.clonePosition(),s=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(s){case"":return this.error(W.EXPECT_ARGUMENT_TYPE,X(o,l));case"number":case"date":case"time":{this.bumpSpace();var d=null;if(this.bumpIf(",")){this.bumpSpace();var u=this.clonePosition(),k=this.parseSimpleArgStyleIfPossible();if(k.err)return k;var g=$s(k.val);if(g.length===0)return this.error(W.EXPECT_ARGUMENT_STYLE,X(this.clonePosition(),this.clonePosition()));var E=X(u,this.clonePosition());d={style:g,styleLocation:E}}var f=this.tryParseArgumentClose(a);if(f.err)return f;var T=X(a,this.clonePosition());if(d&&Xt(d==null?void 0:d.style,"::",0)){var A=Cs(d.style.slice(2));if(s==="number"){var k=this.parseNumberSkeletonFromString(A,d.styleLocation);return k.err?k:{val:{type:ae.number,value:r,location:T,style:k.val},err:null}}else{if(A.length===0)return this.error(W.EXPECT_DATE_TIME_SKELETON,T);var p=A;this.locale&&(p=Ps(A,this.locale));var g={type:Sn.dateTime,pattern:p,location:d.styleLocation,parsedOptions:this.shouldParseSkeletons?bs(p):{}},R=s==="date"?ae.date:ae.time;return{val:{type:R,value:r,location:T,style:g},err:null}}}return{val:{type:s==="number"?ae.number:s==="date"?ae.date:ae.time,value:r,location:T,style:(i=d==null?void 0:d.style)!==null&&i!==void 0?i:null},err:null}}case"plural":case"selectordinal":case"select":{var S=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(W.EXPECT_SELECT_ARGUMENT_OPTIONS,X(S,x({},S)));this.bumpSpace();var b=this.parseIdentifierIfPossible(),O=0;if(s!=="select"&&b.value==="offset"){if(!this.bumpIf(":"))return this.error(W.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,X(this.clonePosition(),this.clonePosition()));this.bumpSpace();var k=this.tryParseDecimalInteger(W.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,W.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(k.err)return k;this.bumpSpace(),b=this.parseIdentifierIfPossible(),O=k.val}var M=this.tryParsePluralOrSelectOptions(n,s,t,b);if(M.err)return M;var f=this.tryParseArgumentClose(a);if(f.err)return f;var K=X(a,this.clonePosition());return s==="select"?{val:{type:ae.select,value:r,options:Zt(M.val),location:K},err:null}:{val:{type:ae.plural,value:r,options:Zt(M.val),offset:O,pluralType:s==="plural"?"cardinal":"ordinal",location:K},err:null}}default:return this.error(W.INVALID_ARGUMENT_TYPE,X(o,l))}},e.prototype.tryParseArgumentClose=function(n){return this.isEOF()||this.char()!==125?this.error(W.EXPECT_ARGUMENT_CLOSING_BRACE,X(n,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var n=0,t=this.clonePosition();!this.isEOF();){var r=this.char();switch(r){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(W.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,X(a,this.clonePosition()));this.bump();break}case 123:{n+=1,this.bump();break}case 125:{if(n>0)n-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(n,t){var r=[];try{r=Os(n)}catch{return this.error(W.INVALID_NUMBER_SKELETON,t)}return{val:{type:Sn.number,tokens:r,location:t,parsedOptions:this.shouldParseSkeletons?Ds(r):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(n,t,r,a){for(var i,o=!1,s=[],l=new Set,d=a.value,u=a.location;;){if(d.length===0){var k=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var g=this.tryParseDecimalInteger(W.EXPECT_PLURAL_ARGUMENT_SELECTOR,W.INVALID_PLURAL_ARGUMENT_SELECTOR);if(g.err)return g;u=X(k,this.clonePosition()),d=this.message.slice(k.offset,this.offset())}else break}if(l.has(d))return this.error(t==="select"?W.DUPLICATE_SELECT_ARGUMENT_SELECTOR:W.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,u);d==="other"&&(o=!0),this.bumpSpace();var E=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?W.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:W.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,X(this.clonePosition(),this.clonePosition()));var f=this.parseMessage(n+1,t,r);if(f.err)return f;var T=this.tryParseArgumentClose(E);if(T.err)return T;s.push([d,{value:f.val,location:X(E,this.clonePosition())}]),l.add(d),this.bumpSpace(),i=this.parseIdentifierIfPossible(),d=i.value,u=i.location}return s.length===0?this.error(t==="select"?W.EXPECT_SELECT_ARGUMENT_SELECTOR:W.EXPECT_PLURAL_ARGUMENT_SELECTOR,X(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!o?this.error(W.MISSING_OTHER_CLAUSE,X(this.clonePosition(),this.clonePosition())):{val:s,err:null}},e.prototype.tryParseDecimalInteger=function(n,t){var r=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);for(var i=!1,o=0;!this.isEOF();){var s=this.char();if(s>=48&&s<=57)i=!0,o=o*10+(s-48),this.bump();else break}var l=X(a,this.clonePosition());return i?(o*=r,qs(o)?{val:o,err:null}:this.error(t,l)):this.error(n,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var n=this.position.offset;if(n>=this.message.length)throw Error("out of bound");var t=bi(this.message,n);if(t===void 0)throw Error("Offset ".concat(n," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(n,t){return{val:null,err:{kind:n,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var n=this.char();n===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=n<65536?1:2)}},e.prototype.bumpIf=function(n){if(Xt(this.message,n,this.offset())){for(var t=0;t<n.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(n){var t=this.offset(),r=this.message.indexOf(n,t);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(n){if(this.offset()>n)throw Error("targetOffset ".concat(n," must be greater than or equal to the current offset ").concat(this.offset()));for(n=Math.min(n,this.message.length);;){var t=this.offset();if(t===n)break;if(t>n)throw Error("targetOffset ".concat(n," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Oi(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var n=this.char(),t=this.offset(),r=this.message.charCodeAt(t+(n>=65536?2:1));return r??null},e}();function tt(e){return e>=97&&e<=122||e>=65&&e<=90}function zs(e){return tt(e)||e===47}function Ws(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Oi(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function Xs(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function at(e){e.forEach(function(n){if(delete n.location,Ri(n)||Ai(n))for(var t in n.options)delete n.options[t].location,at(n.options[t].value);else mi(n)&&pi(n.style)||(Ti(n)||fi(n))&&Qr(n.style)?delete n.style.location:ci(n)&&at(n.children)})}function Zs(e,n){n===void 0&&(n={}),n=x({shouldParseSkeletons:!0,requiresOtherClause:!0},n);var t=new Js(e,n).parse();if(t.err){var r=SyntaxError(W[t.err.kind]);throw r.location=t.err.location,r.originalMessage=t.err.message,r}return n!=null&&n.captureLocation||at(t.val),t.val}function Ur(e,n){var t=n&&n.cache?n.cache:al,r=n&&n.serializer?n.serializer:tl,a=n&&n.strategy?n.strategy:el;return a(e,{cache:t,serializer:r})}function Qs(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Ii(e,n,t,r){var a=Qs(r)?r:t(r),i=n.get(a);return typeof i>"u"&&(i=e.call(this,r),n.set(a,i)),i}function Ki(e,n,t){var r=Array.prototype.slice.call(arguments,3),a=t(r),i=n.get(a);return typeof i>"u"&&(i=e.apply(this,r),n.set(a,i)),i}function Rt(e,n,t,r,a){return t.bind(n,e,r,a)}function el(e,n){var t=e.length===1?Ii:Ki;return Rt(e,this,t,n.cache.create(),n.serializer)}function nl(e,n){return Rt(e,this,Ki,n.cache.create(),n.serializer)}function rl(e,n){return Rt(e,this,Ii,n.cache.create(),n.serializer)}var tl=function(){return JSON.stringify(arguments)};function At(){this.cache=Object.create(null)}At.prototype.get=function(e){return this.cache[e]};At.prototype.set=function(e,n){this.cache[e]=n};var al={create:function(){return new At}},Hr={variadic:nl,monadic:rl},we;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(we||(we={}));var nn=function(e){Me(n,e);function n(t,r,a){var i=e.call(this,t)||this;return i.code=r,i.originalMessage=a,i}return n.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},n}(Error),ea=function(e){Me(n,e);function n(t,r,a,i){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(r,'". Options are "').concat(Object.keys(a).join('", "'),'"'),we.INVALID_VALUE,i)||this}return n}(nn),il=function(e){Me(n,e);function n(t,r,a){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(r),we.INVALID_VALUE,a)||this}return n}(nn),ol=function(e){Me(n,e);function n(t,r){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(r,'"'),we.MISSING_VALUE,r)||this}return n}(nn),Te;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(Te||(Te={}));function sl(e){return e.length<2?e:e.reduce(function(n,t){var r=n[n.length-1];return!r||r.type!==Te.literal||t.type!==Te.literal?n.push(t):r.value+=t.value,n},[])}function Li(e){return typeof e=="function"}function lr(e,n,t,r,a,i,o){if(e.length===1&&$t(e[0]))return[{type:Te.literal,value:e[0].value}];for(var s=[],l=0,d=e;l<d.length;l++){var u=d[l];if($t(u)){s.push({type:Te.literal,value:u.value});continue}if(Ss(u)){typeof i=="number"&&s.push({type:Te.literal,value:t.getNumberFormat(n).format(i)});continue}var k=u.value;if(!(a&&k in a))throw new ol(k,o);var g=a[k];if(_s(u)){(!g||typeof g=="string"||typeof g=="number")&&(g=typeof g=="string"||typeof g=="number"?String(g):""),s.push({type:typeof g=="string"?Te.literal:Te.object,value:g});continue}if(Ti(u)){var E=typeof u.style=="string"?r.date[u.style]:Qr(u.style)?u.style.parsedOptions:void 0;s.push({type:Te.literal,value:t.getDateTimeFormat(n,E).format(g)});continue}if(fi(u)){var E=typeof u.style=="string"?r.time[u.style]:Qr(u.style)?u.style.parsedOptions:r.time.medium;s.push({type:Te.literal,value:t.getDateTimeFormat(n,E).format(g)});continue}if(mi(u)){var E=typeof u.style=="string"?r.number[u.style]:pi(u.style)?u.style.parsedOptions:void 0;E&&E.scale&&(g=g*(E.scale||1)),s.push({type:Te.literal,value:t.getNumberFormat(n,E).format(g)});continue}if(ci(u)){var f=u.children,T=u.value,A=a[T];if(!Li(A))throw new il(T,"function",o);var p=lr(f,n,t,r,a,i),R=A(p.map(function(O){return O.value}));Array.isArray(R)||(R=[R]),s.push.apply(s,R.map(function(O){return{type:typeof O=="string"?Te.literal:Te.object,value:O}}))}if(Ri(u)){var S=u.options[g]||u.options.other;if(!S)throw new ea(u.value,g,Object.keys(u.options),o);s.push.apply(s,lr(S.value,n,t,r,a));continue}if(Ai(u)){var S=u.options["=".concat(g)];if(!S){if(!Intl.PluralRules)throw new nn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,we.MISSING_INTL_API,o);var b=t.getPluralRules(n,{type:u.pluralType}).select(g-(u.offset||0));S=u.options[b]||u.options.other}if(!S)throw new ea(u.value,g,Object.keys(u.options),o);s.push.apply(s,lr(S.value,n,t,r,a,g-(u.offset||0)));continue}}return sl(s)}function ll(e,n){return n?x(x(x({},e||{}),n||{}),Object.keys(e).reduce(function(t,r){return t[r]=x(x({},e[r]),n[r]||{}),t},{})):e}function dl(e,n){return n?Object.keys(e).reduce(function(t,r){return t[r]=ll(e[r],n[r]),t},x({},e)):e}function xr(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,t){e[n]=t}}}}}function ul(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Ur(function(){for(var n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new((n=Intl.NumberFormat).bind.apply(n,Ge([void 0],t,!1)))},{cache:xr(e.number),strategy:Hr.variadic}),getDateTimeFormat:Ur(function(){for(var n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new((n=Intl.DateTimeFormat).bind.apply(n,Ge([void 0],t,!1)))},{cache:xr(e.dateTime),strategy:Hr.variadic}),getPluralRules:Ur(function(){for(var n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new((n=Intl.PluralRules).bind.apply(n,Ge([void 0],t,!1)))},{cache:xr(e.pluralRules),strategy:Hr.variadic})}}var Di=function(){function e(n,t,r,a){var i=this;if(t===void 0&&(t=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var d=i.formatToParts(l);if(d.length===1)return d[0].value;var u=d.reduce(function(k,g){return!k.length||g.type!==Te.literal||typeof k[k.length-1]!="string"?k.push(g.value):k[k.length-1]+=g.value,k},[]);return u.length<=1?u[0]||"":u},this.formatToParts=function(l){return lr(i.ast,i.locales,i.formatters,i.formats,l,void 0,i.message)},this.resolvedOptions=function(){var l;return{locale:((l=i.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(i.locales)[0]}},this.getAst=function(){return i.ast},this.locales=t,this.resolvedLocale=e.resolveLocale(t),typeof n=="string"){if(this.message=n,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var o=a||{};o.formatters;var s=_n(o,["formatters"]);this.ast=e.__parse(n,x(x({},s),{locale:this.resolvedLocale}))}else this.ast=n;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=dl(e.formats,r),this.formatters=a&&a.formatters||ul(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(n){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(n);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof n=="string"?n:n[0])}},e.__parse=Zs,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}();function on(e,n){var t=n&&n.cache?n.cache:Tl,r=n&&n.serializer?n.serializer:ml,a=n&&n.strategy?n.strategy:gl;return a(e,{cache:t,serializer:r})}function kl(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Pi(e,n,t,r){var a=kl(r)?r:t(r),i=n.get(a);return typeof i>"u"&&(i=e.call(this,r),n.set(a,i)),i}function Fi(e,n,t){var r=Array.prototype.slice.call(arguments,3),a=t(r),i=n.get(a);return typeof i>"u"&&(i=e.apply(this,r),n.set(a,i)),i}function ct(e,n,t,r,a){return t.bind(n,e,r,a)}function gl(e,n){var t=e.length===1?Pi:Fi;return ct(e,this,t,n.cache.create(),n.serializer)}function El(e,n){return ct(e,this,Fi,n.cache.create(),n.serializer)}function vl(e,n){return ct(e,this,Pi,n.cache.create(),n.serializer)}var ml=function(){return JSON.stringify(arguments)};function pt(){this.cache=Object.create(null)}pt.prototype.get=function(e){return this.cache[e]};pt.prototype.set=function(e,n){this.cache[e]=n};var Tl={create:function(){return new pt}},sn={variadic:El,monadic:vl},gn;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(gn||(gn={}));var Yn=function(e){Me(n,e);function n(t,r,a){var i=this,o=a?a instanceof Error?a:new Error(String(a)):void 0;return i=e.call(this,"[@formatjs/intl Error ".concat(t,"] ").concat(r,`
`).concat(o?`
`.concat(o.message,`
`).concat(o.stack):""))||this,i.code=t,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(i,n),i}return n}(Error),fl=function(e){Me(n,e);function n(t,r){return e.call(this,gn.UNSUPPORTED_FORMATTER,t,r)||this}return n}(Yn),Rl=function(e){Me(n,e);function n(t,r){return e.call(this,gn.INVALID_CONFIG,t,r)||this}return n}(Yn),na=function(e){Me(n,e);function n(t,r){return e.call(this,gn.MISSING_DATA,t,r)||this}return n}(Yn),Le=function(e){Me(n,e);function n(t,r,a){var i=e.call(this,gn.FORMAT_ERROR,"".concat(t,`
Locale: `).concat(r,`
`),a)||this;return i.locale=r,i}return n}(Yn),qr=function(e){Me(n,e);function n(t,r,a,i){var o=e.call(this,"".concat(t,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),r,i)||this;return o.descriptor=a,o.locale=r,o}return n}(Le),Al=function(e){Me(n,e);function n(t,r){var a=e.call(this,gn.MISSING_TRANSLATION,'Missing message: "'.concat(t.id,'" for locale "').concat(r,'", using ').concat(t.defaultMessage?"default message (".concat(typeof t.defaultMessage=="string"?t.defaultMessage:t.defaultMessage.map(function(i){var o;return(o=i.value)!==null&&o!==void 0?o:JSON.stringify(i)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=t,a}return n}(Yn);function fn(e,n,t){return t===void 0&&(t={}),n.reduce(function(r,a){return a in e?r[a]=e[a]:a in t&&(r[a]=t[a]),r},{})}var cl=function(e){},pl=function(e){},Mi={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:cl,onWarn:pl};function Vi(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function ln(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,t){e[n]=t}}}}}function yl(e){e===void 0&&(e=Vi());var n=Intl.RelativeTimeFormat,t=Intl.ListFormat,r=Intl.DisplayNames,a=on(function(){for(var s,l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return new((s=Intl.DateTimeFormat).bind.apply(s,Ge([void 0],l,!1)))},{cache:ln(e.dateTime),strategy:sn.variadic}),i=on(function(){for(var s,l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return new((s=Intl.NumberFormat).bind.apply(s,Ge([void 0],l,!1)))},{cache:ln(e.number),strategy:sn.variadic}),o=on(function(){for(var s,l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return new((s=Intl.PluralRules).bind.apply(s,Ge([void 0],l,!1)))},{cache:ln(e.pluralRules),strategy:sn.variadic});return{getDateTimeFormat:a,getNumberFormat:i,getMessageFormat:on(function(s,l,d,u){return new Di(s,l,d,x({formatters:{getNumberFormat:i,getDateTimeFormat:a,getPluralRules:o}},u||{}))},{cache:ln(e.message),strategy:sn.variadic}),getRelativeTimeFormat:on(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return new(n.bind.apply(n,Ge([void 0],s,!1)))},{cache:ln(e.relativeTime),strategy:sn.variadic}),getPluralRules:o,getListFormat:on(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return new(t.bind.apply(t,Ge([void 0],s,!1)))},{cache:ln(e.list),strategy:sn.variadic}),getDisplayNames:on(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return new(r.bind.apply(r,Ge([void 0],s,!1)))},{cache:ln(e.displayNames),strategy:sn.variadic})}}function yt(e,n,t,r){var a=e&&e[n],i;if(a&&(i=a[t]),i)return i;r(new fl("No ".concat(n," format named: ").concat(t)))}function _l(e,n,t){if(t===void 0&&(t=Error),!e)throw new t(n)}var it;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(it||(it={}));var ra;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(ra||(ra={}));function tr(e,n){return Object.keys(e).reduce(function(t,r){return t[r]=x({timeZone:n},e[r]),t},{})}function ta(e,n){var t=Object.keys(x(x({},e),n));return t.reduce(function(r,a){return r[a]=x(x({},e[a]||{}),n[a]||{}),r},{})}function aa(e,n){if(!n)return e;var t=Di.formats;return x(x(x({},t),e),{date:ta(tr(t.date,n),tr(e.date||{},n)),time:ta(tr(t.time,n),tr(e.time||{},n))})}var ot=function(e,n,t,r,a){var i=e.locale,o=e.formats,s=e.messages,l=e.defaultLocale,d=e.defaultFormats,u=e.fallbackOnEmptyString,k=e.onError,g=e.timeZone,E=e.defaultRichTextElements;t===void 0&&(t={id:""});var f=t.id,T=t.defaultMessage;_l(!!f,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var A=String(f),p=s&&Object.prototype.hasOwnProperty.call(s,A)&&s[A];if(Array.isArray(p)&&p.length===1&&p[0].type===it.literal)return p[0].value;if(!r&&p&&typeof p=="string"&&!E)return p.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=x(x({},E),r||{}),o=aa(o,g),d=aa(d,g),!p){if(u===!1&&p==="")return p;if((!T||i&&i.toLowerCase()!==l.toLowerCase())&&k(new Al(t,i)),T)try{var R=n.getMessageFormat(T,l,d,a);return R.format(r)}catch(S){return k(new qr('Error formatting default message for: "'.concat(A,'", rendering default message verbatim'),i,t,S)),typeof T=="string"?T:A}return A}try{var R=n.getMessageFormat(p,i,o,x({formatters:n},a||{}));return R.format(r)}catch(S){k(new qr('Error formatting message: "'.concat(A,'", using ').concat(T?"default message":"id"," as fallback."),i,t,S))}if(T)try{var R=n.getMessageFormat(T,l,d,a);return R.format(r)}catch(S){k(new qr('Error formatting the default message for: "'.concat(A,'", rendering message verbatim'),i,t,S))}return typeof p=="string"?p:typeof T=="string"?T:A},Gi=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Kr(e,n,t,r){var a=e.locale,i=e.formats,o=e.onError,s=e.timeZone;r===void 0&&(r={});var l=r.format,d=x(x({},s&&{timeZone:s}),l&&yt(i,n,l,o)),u=fn(r,Gi,d);return n==="time"&&!u.hour&&!u.minute&&!u.second&&!u.timeStyle&&!u.dateStyle&&(u=x(x({},u),{hour:"numeric",minute:"numeric"})),t(a,u)}function Sl(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],i=t[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return Kr(e,"date",n,o).format(s)}catch(l){e.onError(new Le("Error formatting date.",e.locale,l))}return String(s)}function Nl(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],i=t[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return Kr(e,"time",n,o).format(s)}catch(l){e.onError(new Le("Error formatting time.",e.locale,l))}return String(s)}function bl(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],i=t[1],o=t[2],s=o===void 0?{}:o,l=e.timeZone,d=e.locale,u=e.onError,k=fn(s,Gi,l?{timeZone:l}:{});try{return n(d,k).formatRange(a,i)}catch(g){u(new Le("Error formatting date time range.",e.locale,g))}return String(a)}function hl(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],i=t[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return Kr(e,"date",n,o).formatToParts(s)}catch(l){e.onError(new Le("Error formatting date.",e.locale,l))}return[]}function Ol(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],i=t[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return Kr(e,"time",n,o).formatToParts(s)}catch(l){e.onError(new Le("Error formatting time.",e.locale,l))}return[]}var Il=["style","type","fallback","languageDisplay"];function Kl(e,n,t,r){var a=e.locale,i=e.onError,o=Intl.DisplayNames;o||i(new nn(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,we.MISSING_INTL_API));var s=fn(r,Il);try{return n(a,s).of(t)}catch(l){i(new Le("Error formatting display name.",a,l))}}var Ll=["type","style"],ia=Date.now();function Dl(e){return"".concat(ia,"_").concat(e,"_").concat(ia)}function Pl(e,n,t,r){r===void 0&&(r={});var a=ji(e,n,t,r).reduce(function(i,o){var s=o.value;return typeof s!="string"?i.push(s):typeof i[i.length-1]=="string"?i[i.length-1]+=s:i.push(s),i},[]);return a.length===1?a[0]:a.length===0?"":a}function ji(e,n,t,r){var a=e.locale,i=e.onError;r===void 0&&(r={});var o=Intl.ListFormat;o||i(new nn(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,we.MISSING_INTL_API));var s=fn(r,Ll);try{var l={},d=t.map(function(u,k){if(typeof u=="object"){var g=Dl(k);return l[g]=u,g}return String(u)});return n(a,s).formatToParts(d).map(function(u){return u.type==="literal"?u:x(x({},u),{value:l[u.value]||u.value})})}catch(u){i(new Le("Error formatting list.",a,u))}return t}var Fl=["type"];function Ml(e,n,t,r){var a=e.locale,i=e.onError;r===void 0&&(r={}),Intl.PluralRules||i(new nn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,we.MISSING_INTL_API));var o=fn(r,Fl);try{return n(a,o).select(t)}catch(s){i(new Le("Error formatting plural.",a,s))}return"other"}var Vl=["numeric","style"];function Gl(e,n,t){var r=e.locale,a=e.formats,i=e.onError;t===void 0&&(t={});var o=t.format,s=!!o&&yt(a,"relative",o,i)||{},l=fn(t,Vl,s);return n(r,l)}function jl(e,n,t,r,a){a===void 0&&(a={}),r||(r="second");var i=Intl.RelativeTimeFormat;i||e.onError(new nn(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,we.MISSING_INTL_API));try{return Gl(e,n,a).format(t,r)}catch(o){e.onError(new Le("Error formatting relative time.",e.locale,o))}return String(t)}var wl=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function wi(e,n,t){var r=e.locale,a=e.formats,i=e.onError;t===void 0&&(t={});var o=t.format,s=o&&yt(a,"number",o,i)||{},l=fn(t,wl,s);return n(r,l)}function Bl(e,n,t,r){r===void 0&&(r={});try{return wi(e,n,r).format(t)}catch(a){e.onError(new Le("Error formatting number.",e.locale,a))}return String(t)}function Ul(e,n,t,r){r===void 0&&(r={});try{return wi(e,n,r).formatToParts(t)}catch(a){e.onError(new Le("Error formatting number.",e.locale,a))}return[]}function Hl(e){var n=e?e[Object.keys(e)[0]]:void 0;return typeof n=="string"}function xl(e){e.onWarn&&e.defaultRichTextElements&&Hl(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function ql(e,n){var t=yl(n),r=x(x({},Mi),e),a=r.locale,i=r.defaultLocale,o=r.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&o?o(new na('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&o&&o(new na('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(o&&o(new Rl('"locale" was not configured, using "'.concat(i,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),xl(r),x(x({},r),{formatters:t,formatNumber:Bl.bind(null,r,t.getNumberFormat),formatNumberToParts:Ul.bind(null,r,t.getNumberFormat),formatRelativeTime:jl.bind(null,r,t.getRelativeTimeFormat),formatDate:Sl.bind(null,r,t.getDateTimeFormat),formatDateToParts:hl.bind(null,r,t.getDateTimeFormat),formatTime:Nl.bind(null,r,t.getDateTimeFormat),formatDateTimeRange:bl.bind(null,r,t.getDateTimeFormat),formatTimeToParts:Ol.bind(null,r,t.getDateTimeFormat),formatPlural:Ml.bind(null,r,t.getPluralRules),formatMessage:ot.bind(null,r,t),$t:ot.bind(null,r,t),formatList:Pl.bind(null,r,t.getListFormat),formatListToParts:ji.bind(null,r,t.getListFormat),formatDisplayName:Kl.bind(null,r,t.getDisplayNames)})}function Yl(e){ys(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Cl=x(x({},Mi),{textComponent:m.Fragment});function $l(e){return function(n){return e(m.Children.toArray(n))}}function oa(e,n){if(e===n)return!0;if(!e||!n)return!1;var t=Object.keys(e),r=Object.keys(n),a=t.length;if(r.length!==a)return!1;for(var i=0;i<a;i++){var o=t[i];if(e[o]!==n[o]||!Object.prototype.hasOwnProperty.call(n,o))return!1}return!0}var _t=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=m.createContext(null)):m.createContext(null);_t.Consumer;var Jl=_t.Provider,zl=Jl,Wl=_t;function Cn(){var e=m.useContext(Wl);return Yl(e),e}var st;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(st||(st={}));var lt;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(lt||(lt={}));function Bi(e){var n=function(t){var r=Cn(),a=t.value,i=t.children,o=_n(t,["value","children"]),s=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?r.formatDateToParts(s,o):r.formatTimeToParts(s,o);return i(l)};return n.displayName=lt[e],n}function $n(e){var n=function(t){var r=Cn(),a=t.value,i=t.children,o=_n(t,["value","children"]),s=r[e](a,o);if(typeof i=="function")return i(s);var l=r.textComponent||m.Fragment;return m.createElement(l,null,s)};return n.displayName=st[e],n}function Ui(e){return e&&Object.keys(e).reduce(function(n,t){var r=e[t];return n[t]=Li(r)?$l(r):r,n},{})}var sa=function(e,n,t,r){for(var a=[],i=4;i<arguments.length;i++)a[i-4]=arguments[i];var o=Ui(r),s=ot.apply(void 0,Ge([e,n,t,o],a,!1));return Array.isArray(s)?m.Children.toArray(s):s},Xl=function(e,n){var t=e.defaultRichTextElements,r=_n(e,["defaultRichTextElements"]),a=Ui(t),i=ql(x(x(x({},Cl),r),{defaultRichTextElements:a}),n),o={locale:i.locale,timeZone:i.timeZone,fallbackOnEmptyString:i.fallbackOnEmptyString,formats:i.formats,defaultLocale:i.defaultLocale,defaultFormats:i.defaultFormats,messages:i.messages,onError:i.onError,defaultRichTextElements:a};return x(x({},i),{formatMessage:sa.bind(null,o,i.formatters),$t:sa.bind(null,o,i.formatters)})};function Zl(e,n){var t=e.values,r=_n(e,["values"]),a=n.values,i=_n(n,["values"]);return oa(a,t)&&oa(r,i)}function Hi(e){var n=Cn(),t=n.formatMessage,r=n.textComponent,a=r===void 0?m.Fragment:r,i=e.id,o=e.description,s=e.defaultMessage,l=e.values,d=e.children,u=e.tagName,k=u===void 0?a:u,g=e.ignoreTag,E={id:i,description:o,defaultMessage:s},f=t(E,l,{ignoreTag:g});return typeof d=="function"?d(Array.isArray(f)?f:[f]):k?m.createElement(k,null,m.Children.toArray(f)):m.createElement(m.Fragment,null,f)}Hi.displayName="FormattedMessage";var te=m.memo(Hi,Zl);te.displayName="MemoizedFormattedMessage";$n("formatDate");$n("formatTime");$n("formatNumber");$n("formatList");$n("formatDisplayName");Bi("formatDate");Bi("formatTime");const Ql=[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],ed=[{kode:"REGISTRER_OM_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrering av opplysninger om verge/fullmektig"},{kode:"MANGELFULL_SØKNAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Mangelfull søknad"},{kode:"FASTSATT_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak - splitting av periode"},{kode:"BEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet"},{kode:"REGISTRER_PAPIRSØK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrer papirsøknad"},{kode:"BEH_STARTET_PÅ_NYTT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet på nytt"},{kode:"MIGRERT_FRA_INFOTRYGD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder flytting av sak fra Infotrygd"},{kode:"FORSLAG_VEDTAK_UTEN_TOTRINN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått"},{kode:"BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjenopptatt"},{kode:"AVBRUTT_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling er henlagt"},{kode:"ANKE_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ankebehandling"},{kode:"BREV_BESTILT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev bestilt"},{kode:"ENDRET_DEKNINGSGRAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Dekningsgrad er endret"},{kode:"OPPGAVE_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Oppgave før vedtak"},{kode:"IVERKSETTELSE_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen venter på iverksettelse"},{kode:"FASTSATT_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak"},{kode:"OVST_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak"},{kode:"INNSYN_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Innsynsbehandling opprettet"},{kode:"TILBAKEKR_VIDEREBEHANDLING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Metode for å håndtere tilbakekreving av feilutbetailng er valgt."},{kode:"SAK_GODKJENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak godkjent"},{kode:"BEH_KØET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er satt på vent"},{kode:"NYE_REGOPPLYSNINGER",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Nye registeropplysninger"},{kode:"BEH_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling på vent"},{kode:"TERMINBEKREFTELSE_UGYLDIG",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Terminbekreftelsens utstedt dato er før 22. svangerskapsuke. Behandlingen fortsatt uten ny terminbekreftelse"},{kode:"FAKTA_ENDRET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Fakta endret"},{kode:"MIGRERT_FRA_INFOTRYGD_FJERNET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder ikke lenger flytting av sak fra Infotrygd"},{kode:"BYTT_ENHET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Bytt enhet"},{kode:"REVURD_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Revurdering opprettet"},{kode:"KLAGE_BEH_NFP",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling NFP"},{kode:"KØET_BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Køet behandling er gjenopptatt"},{kode:"OVST_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak - splitting av periode"},{kode:"ANKEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Anke mottatt"},{kode:"UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet soknadsperiode"},{kode:"KLAGE_BEH_NK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling KA"},{kode:"AVKLART_AKTIVITETSKRAV",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Avklart aktivitetskrav"},{kode:"NY_INFO_FRA_TPS",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ny info fra TPS"},{kode:"KLAGEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klage mottatt"},{kode:"VEDTAK_FATTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak fattet"},{kode:"BEH_AVBRUTT_VUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vurdering før vedtak"},{kode:"UENDRET_UTFALL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Uendret utfall"},{kode:"VRS_REV_IKKE_SNDT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Varsel om revurdering ikke sendt"},{kode:"SPOLT_TILBAKE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er flyttet"},{kode:"OPPTJENING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet opptjeningsperiode"},{kode:"SAK_RETUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak retur"},{kode:"FJERNET_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Opplysninger om verge/fullmektig fjernet"},{kode:"BEH_MAN_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Gjenoppta behandling"},{kode:"BEH_OPPDATERT_NYE_OPPL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen oppdatert med nye opplysninger"},{kode:"VEDLEGG_MOTTATT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedlegg mottatt"},{kode:"OVERSTYRT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Overstyrt"},{kode:"BREV_SENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev sendt"},{kode:"FORSLAG_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått og sendt til beslutter"}],nd=[{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],rd=[{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"},{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"}],td=[{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"}],ad=[{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"}],id=[{kode:"EGEN_NÆRING",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Egen næring"},{kode:"BRUKERS_ANDEL",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Brukers andel"},{kode:"FRILANS",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Frilans"}],od=[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],sd=[{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"},{kode:"ENDRING_I_BEREGNING_OG_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning og uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"}],ld=[{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilans"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (fisker)"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (dagmamma)"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"},{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"}],dd=[{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"}],ud=[{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Vedtaksinstans"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aleneomsorg og annenpart rett"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstans"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"}],kd=[{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"},{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"}],gd=[{kode:"HJEMSENDE_UTEN_Å_OPPHEVE",kodeverk:"KLAGEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"OPPHEVE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket oppheves"},{kode:"MEDHOLD_I_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Medhold"},{kode:"STADFESTE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"AVVIS_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Klagen avvises"}],Ed=[{kode:"BEH_STARTET_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Behandling startet på nytt"},{kode:"BERORT_BEH_OPPHOR",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens vedtak er opphørt"},{kode:"SAKSBEH_START_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Saksbehandling starter på nytt"},{kode:"BERORT_BEH_ENDRING_DEKNINGSGRAD",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens behandling har endret antall disponible stønadsdager"}],vd=[{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"},{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"ANNET",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Andre typer som f.eks utsettelse"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"}],md=[{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt søknad mangler"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"}],Td=[{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"}],fd=[{kode:"TILBAKEKR_IGNORER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling, avvent samordning"},{kode:"TILBAKEKR_INNTREKK",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling hvor inntrekk dekker hele beløpet"},{kode:"TILBAKEKR_OPPRETT",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling med tilbakekreving"},{kode:"TILBAKEKR_OPPDATER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Endringer vil oppdatere eksisterende feilutbetalte perioder og beløp."}],Rd=[{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],Ad=[{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"}],cd=[{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"}],pd=[{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"}],yd=[{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"},{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"}],_d=[{kode:"UTTAK_PERIODE_FOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fradato uttaksperiode"},{kode:"TPS_ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"UTTAK_PERIODE_TOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Tildato uttaksperiode"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"FODSELSDATO",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fødselsdato"}],Sd=[{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"}],Nd=[{kode:"MANGLENDE_OPPLYSNINGER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen, men har manglende opplysninger"},{kode:"SØKER_ER_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er i permisjon"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekten er ikke med i beregningsgrunnlaget"},{kode:"IKKE_BRUK",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Ikke bruk"},{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK_MED_OVERSTYRTE_PERIODER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"BENYTT_A_INNTEKT_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekt fra A-inntekt benyttes i beregningsgrunnlaget"},{kode:"SØKER_ER_IKKE_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er ikke i permisjon"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er lagt til av saksbehandler beregningsgrunnlaget"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er slått sammen med annet"}],bd=[{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"}],hd=[{kode:"CAF",kodeverk:"LANDKODER",navn:"SENTRALAFRIKA. REP."},{kode:"ARG",kodeverk:"LANDKODER",navn:"ARGENTINA"},{kode:"IOT",kodeverk:"LANDKODER",navn:"BRITISK-INDISKE HAV"},{kode:"CCK",kodeverk:"LANDKODER",navn:"KOKOSØYENE"},{kode:"MEX",kodeverk:"LANDKODER",navn:"MEXICO"},{kode:"CHN",kodeverk:"LANDKODER",navn:"REPUBLIKKEN KINA"},{kode:"RUS",kodeverk:"LANDKODER",navn:"RUSSLAND"},{kode:"BHS",kodeverk:"LANDKODER",navn:"BAHAMAS"},{kode:"SYC",kodeverk:"LANDKODER",navn:"SEYCHELLENE"},{kode:"CYP",kodeverk:"LANDKODER",navn:"KYPROS"},{kode:"AUT",kodeverk:"LANDKODER",navn:"ØSTERRIKE"},{kode:"QAT",kodeverk:"LANDKODER",navn:"QATAR"},{kode:"VNM",kodeverk:"LANDKODER",navn:"VIETNAM"},{kode:"HMD",kodeverk:"LANDKODER",navn:"HEARD OG MCDONALD ØYENE"},{kode:"KEN",kodeverk:"LANDKODER",navn:"KENYA"},{kode:"ASM",kodeverk:"LANDKODER",navn:"AM. SAMOA"},{kode:"PAK",kodeverk:"LANDKODER",navn:"PAKISTAN"},{kode:"ATG",kodeverk:"LANDKODER",navn:"ANTIGUA OG BARBUDA"},{kode:"TZA",kodeverk:"LANDKODER",navn:"TANZANIA"},{kode:"ZAF",kodeverk:"LANDKODER",navn:"SØR-AFRIKA"},{kode:"CMR",kodeverk:"LANDKODER",navn:"KAMERUN"},{kode:"MLI",kodeverk:"LANDKODER",navn:"MALI"},{kode:"SLV",kodeverk:"LANDKODER",navn:"EL SALVADOR"},{kode:"MAF",kodeverk:"LANDKODER",navn:"SAINT MARTIN"},{kode:"KGZ",kodeverk:"LANDKODER",navn:"KIRGISISTAN"},{kode:"FJI",kodeverk:"LANDKODER",navn:"FIJI"},{kode:"RWA",kodeverk:"LANDKODER",navn:"RWANDA"},{kode:"GEO",kodeverk:"LANDKODER",navn:"GEORGIA"},{kode:"REU",kodeverk:"LANDKODER",navn:"REUNION"},{kode:"MTQ",kodeverk:"LANDKODER",navn:"MARTINIQUE"},{kode:"SDN",kodeverk:"LANDKODER",navn:"SUDAN"},{kode:"AND",kodeverk:"LANDKODER",navn:"ANDORRA"},{kode:"COK",kodeverk:"LANDKODER",navn:"COOKØYENE"},{kode:"SHN",kodeverk:"LANDKODER",navn:"ST. HELENA"},{kode:"COL",kodeverk:"LANDKODER",navn:"COLOMBIA"},{kode:"PER",kodeverk:"LANDKODER",navn:"PERU"},{kode:"STP",kodeverk:"LANDKODER",navn:"SAO TOME OG PRINCIPE"},{kode:"COM",kodeverk:"LANDKODER",navn:"KOMORENE"},{kode:"LUX",kodeverk:"LANDKODER",navn:"LUXEMBOURG"},{kode:"PNG",kodeverk:"LANDKODER",navn:"PAPUA NY-GUINEA"},{kode:"MKD",kodeverk:"LANDKODER",navn:"MAKEDONIA"},{kode:"GIN",kodeverk:"LANDKODER",navn:"GUINEA"},{kode:"CYM",kodeverk:"LANDKODER",navn:"CAYMANØYENE"},{kode:"VGB",kodeverk:"LANDKODER",navn:"JOMFRUØYENE BRIT."},{kode:"IRL",kodeverk:"LANDKODER",navn:"IRLAND"},{kode:"XXX",kodeverk:"LANDKODER",navn:"STATSLØS"},{kode:"HTI",kodeverk:"LANDKODER",navn:"HAITI"},{kode:"LBN",kodeverk:"LANDKODER",navn:"LIBANON"},{kode:"BRN",kodeverk:"LANDKODER",navn:"BRUNEI"},{kode:"GMB",kodeverk:"LANDKODER",navn:"GAMBIA"},{kode:"MLT",kodeverk:"LANDKODER",navn:"MALTA"},{kode:"CRI",kodeverk:"LANDKODER",navn:"COSTA RICA"},{kode:"UZB",kodeverk:"LANDKODER",navn:"UZBEKISTAN"},{kode:"CXR",kodeverk:"LANDKODER",navn:"CHRISTMASØYA"},{kode:"TUR",kodeverk:"LANDKODER",navn:"TYRKIA"},{kode:"UKR",kodeverk:"LANDKODER",navn:"UKRAINA"},{kode:"SUN",kodeverk:"LANDKODER",navn:"SOVJETUNIONEN"},{kode:"PYF",kodeverk:"LANDKODER",navn:"FRANSK POLYNESIA"},{kode:"MNE",kodeverk:"LANDKODER",navn:"MONTENEGRO"},{kode:"BIH",kodeverk:"LANDKODER",navn:"BOSNIA-HERCEGOVINA"},{kode:"PAN",kodeverk:"LANDKODER",navn:"PANAMA"},{kode:"SJM",kodeverk:"LANDKODER",navn:"SVALBARD OG JAN MAYEN"},{kode:"NIU",kodeverk:"LANDKODER",navn:"NIUE"},{kode:"SUR",kodeverk:"LANDKODER",navn:"SURINAM"},{kode:"MUS",kodeverk:"LANDKODER",navn:"MAURITIUS"},{kode:"CHE",kodeverk:"LANDKODER",navn:"SVEITS"},{kode:"BEL",kodeverk:"LANDKODER",navn:"BELGIA"},{kode:"TTO",kodeverk:"LANDKODER",navn:"TRINIDAD OG TOBAGO"},{kode:"SWZ",kodeverk:"LANDKODER",navn:"SWAZILAND"},{kode:"TUN",kodeverk:"LANDKODER",navn:"TUNISIA"},{kode:"GLP",kodeverk:"LANDKODER",navn:"GUADELOUPE"},{kode:"KWT",kodeverk:"LANDKODER",navn:"KUWAIT"},{kode:"DMA",kodeverk:"LANDKODER",navn:"DOMINICA"},{kode:"BGR",kodeverk:"LANDKODER",navn:"BULGARIA"},{kode:"ISL",kodeverk:"LANDKODER",navn:"ISLAND"},{kode:"SVN",kodeverk:"LANDKODER",navn:"SLOVENIA"},{kode:"PLW",kodeverk:"LANDKODER",navn:"PALAU"},{kode:"GBR",kodeverk:"LANDKODER",navn:"STORBRITANNIA"},{kode:"NAM",kodeverk:"LANDKODER",navn:"NAMIBIA"},{kode:"FSM",kodeverk:"LANDKODER",navn:"MIKRONESIAFØD."},{kode:"GNB",kodeverk:"LANDKODER",navn:"GUINEA-BISSAU"},{kode:"UMI",kodeverk:"LANDKODER",navn:"MINDRE STILLEHAVSØYER"},{kode:"MDA",kodeverk:"LANDKODER",navn:"MOLDOVA"},{kode:"MMR",kodeverk:"LANDKODER",navn:"MYANMAR (BURMA)"},{kode:"MOZ",kodeverk:"LANDKODER",navn:"MOSAMBIK"},{kode:"SGS",kodeverk:"LANDKODER",navn:"SØR-GEORGIA OG SØR-SANDWICHØYE"},{kode:"NPL",kodeverk:"LANDKODER",navn:"NEPAL"},{kode:"BES",kodeverk:"LANDKODER",navn:"BONAIRE, SINT EUSTATIUS, SABA"},{kode:"LBR",kodeverk:"LANDKODER",navn:"LIBERIA"},{kode:"MDG",kodeverk:"LANDKODER",navn:"MADAGASKAR"},{kode:"VIR",kodeverk:"LANDKODER",navn:"JOMFRUØYENE AM."},{kode:"ARE",kodeverk:"LANDKODER",navn:"DE ARABISKE EMIRATER"},{kode:"USA",kodeverk:"LANDKODER",navn:"USA"},{kode:"NFK",kodeverk:"LANDKODER",navn:"NORFOLKØYA"},{kode:"HKG",kodeverk:"LANDKODER",navn:"HONGKONG"},{kode:"DEU",kodeverk:"LANDKODER",navn:"TYSKLAND"},{kode:"LIE",kodeverk:"LANDKODER",navn:"LIECHTENSTEIN"},{kode:"ECU",kodeverk:"LANDKODER",navn:"ECUADOR"},{kode:"POL",kodeverk:"LANDKODER",navn:"POLEN"},{kode:"PRK",kodeverk:"LANDKODER",navn:"NORD-KOREA"},{kode:"GGY",kodeverk:"LANDKODER",navn:"GUERNSEY"},{kode:"NZL",kodeverk:"LANDKODER",navn:"NEW ZEALAND"},{kode:"MAR",kodeverk:"LANDKODER",navn:"MAROKKO"},{kode:"BWA",kodeverk:"LANDKODER",navn:"BOTSWANA"},{kode:"GUM",kodeverk:"LANDKODER",navn:"GUAM"},{kode:"YUG",kodeverk:"LANDKODER",navn:"JUGOSLAVIA"},{kode:"SEN",kodeverk:"LANDKODER",navn:"SENEGAL"},{kode:"MWI",kodeverk:"LANDKODER",navn:"MALAWI"},{kode:"TKM",kodeverk:"LANDKODER",navn:"TURKMENISTAN"},{kode:"GAB",kodeverk:"LANDKODER",navn:"GABON"},{kode:"FIN",kodeverk:"LANDKODER",navn:"FINLAND"},{kode:"PRY",kodeverk:"LANDKODER",navn:"PARAGUAY"},{kode:"PSE",kodeverk:"LANDKODER",navn:"DET PALESTINSKE OMRÅDET"},{kode:"FRA",kodeverk:"LANDKODER",navn:"FRANKRIKE"},{kode:"ZWE",kodeverk:"LANDKODER",navn:"ZIMBABWE"},{kode:"AZE",kodeverk:"LANDKODER",navn:"AZERBAJDZJAN"},{kode:"SXM",kodeverk:"LANDKODER",navn:"SINT MAARTEN"},{kode:"NIC",kodeverk:"LANDKODER",navn:"NICARAGUA"},{kode:"CAN",kodeverk:"LANDKODER",navn:"CANADA"},{kode:"COG",kodeverk:"LANDKODER",navn:"KONGO, REPUBLIKKEN"},{kode:"JPN",kodeverk:"LANDKODER",navn:"JAPAN"},{kode:"KOR",kodeverk:"LANDKODER",navn:"SØR-KOREA"},{kode:"HUN",kodeverk:"LANDKODER",navn:"UNGARN"},{kode:"YEM",kodeverk:"LANDKODER",navn:"JEMEN"},{kode:"CHL",kodeverk:"LANDKODER",navn:"CHILE"},{kode:"BRB",kodeverk:"LANDKODER",navn:"BARBADOS"},{kode:"DNK",kodeverk:"LANDKODER",navn:"DANMARK"},{kode:"NRU",kodeverk:"LANDKODER",navn:"NAURU"},{kode:"VCT",kodeverk:"LANDKODER",navn:"ST. VINCENT"},{kode:"BEN",kodeverk:"LANDKODER",navn:"BENIN"},{kode:"SMR",kodeverk:"LANDKODER",navn:"SAN MARINO"},{kode:"TCD",kodeverk:"LANDKODER",navn:"TSJAD"},{kode:"CUW",kodeverk:"LANDKODER",navn:"CURACAO"},{kode:"IRN",kodeverk:"LANDKODER",navn:"IRAN"},{kode:"SWE",kodeverk:"LANDKODER",navn:"SVERIGE"},{kode:"ERI",kodeverk:"LANDKODER",navn:"ERITREA"},{kode:"XUK",kodeverk:"LANDKODER",navn:"UKJENT"},{kode:"MDV",kodeverk:"LANDKODER",navn:"MALDIVENE"},{kode:"CSK",kodeverk:"LANDKODER",navn:"TSJEKKOSLOVAKIA"},{kode:"GRD",kodeverk:"LANDKODER",navn:"GRENADA"},{kode:"HND",kodeverk:"LANDKODER",navn:"HONDURAS"},{kode:"FRO",kodeverk:"LANDKODER",navn:"FÆRØYENE"},{kode:"COD",kodeverk:"LANDKODER",navn:"KONGO, DEN DEMOKR. REPUBL"},{kode:"SRB",kodeverk:"LANDKODER",navn:"SERBIA"},{kode:"AGO",kodeverk:"LANDKODER",navn:"ANGOLA"},{kode:"NCL",kodeverk:"LANDKODER",navn:"NY-KALEDONIA"},{kode:"SCG",kodeverk:"LANDKODER",navn:"SERBIA OG MONTENEGRO"},{kode:"GTM",kodeverk:"LANDKODER",navn:"GUATEMALA"},{kode:"AFG",kodeverk:"LANDKODER",navn:"AFGHANISTAN"},{kode:"JAM",kodeverk:"LANDKODER",navn:"JAMAICA"},{kode:"UGA",kodeverk:"LANDKODER",navn:"UGANDA"},{kode:"IMN",kodeverk:"LANDKODER",navn:"ISLE OF MAN"},{kode:"ISR",kodeverk:"LANDKODER",navn:"ISRAEL"},{kode:"SOM",kodeverk:"LANDKODER",navn:"SOMALIA"},{kode:"MNP",kodeverk:"LANDKODER",navn:"NORD-MARIANENE"},{kode:"XXK",kodeverk:"LANDKODER",navn:"KOSOVO"},{kode:"BLR",kodeverk:"LANDKODER",navn:"HVITERUSSLAND"},{kode:"LSO",kodeverk:"LANDKODER",navn:"LESOTHO"},{kode:"NER",kodeverk:"LANDKODER",navn:"NIGER"},{kode:"IDN",kodeverk:"LANDKODER",navn:"INDONESIA"},{kode:"CZE",kodeverk:"LANDKODER",navn:"DEN TSJEKKISKE REP."},{kode:"URY",kodeverk:"LANDKODER",navn:"URUGUAY"},{kode:"BGD",kodeverk:"LANDKODER",navn:"BANGLADESH"},{kode:"WLF",kodeverk:"LANDKODER",navn:"WALLIS/FUTUNAØYENE"},{kode:"CIV",kodeverk:"LANDKODER",navn:"ELFENBEINSKYSTEN"},{kode:"ABW",kodeverk:"LANDKODER",navn:"ARUBA"},{kode:"SLB",kodeverk:"LANDKODER",navn:"SALOMONØYENE"},{kode:"TWN",kodeverk:"LANDKODER",navn:"TAIWAN"},{kode:"SLE",kodeverk:"LANDKODER",navn:"SIERRA LEONE"},{kode:"BRA",kodeverk:"LANDKODER",navn:"BRASIL"},{kode:"DJI",kodeverk:"LANDKODER",navn:"DJIBOUTI"},{kode:"PRI",kodeverk:"LANDKODER",navn:"PUERTO RICO"},{kode:"PRT",kodeverk:"LANDKODER",navn:"PORTUGAL"},{kode:"ANT",kodeverk:"LANDKODER",navn:"DE NEDERLANDSKE ANTILLENE"},{kode:"THA",kodeverk:"LANDKODER",navn:"THAILAND"},{kode:"TLS",kodeverk:"LANDKODER",navn:"ØST-TIMOR"},{kode:"SPM",kodeverk:"LANDKODER",navn:"ST-PIERRE OG MIQUELON"},{kode:"ALB",kodeverk:"LANDKODER",navn:"ALBANIA"},{kode:"EGY",kodeverk:"LANDKODER",navn:"EGYPT"},{kode:"GRC",kodeverk:"LANDKODER",navn:"HELLAS"},{kode:"BFA",kodeverk:"LANDKODER",navn:"BURKINA FASO"},{kode:"ALA",kodeverk:"LANDKODER",navn:"ÅLAND"},{kode:"BOL",kodeverk:"LANDKODER",navn:"BOLIVIA"},{kode:"DDR",kodeverk:"LANDKODER",navn:"TYSKLAND (ØST)"},{kode:"HRV",kodeverk:"LANDKODER",navn:"KROATIA"},{kode:"AUS",kodeverk:"LANDKODER",navn:"AUSTRALIA"},{kode:"NGA",kodeverk:"LANDKODER",navn:"NIGERIA"},{kode:"LBY",kodeverk:"LANDKODER",navn:"LIBYA"},{kode:"MYT",kodeverk:"LANDKODER",navn:"MAYOTTE"},{kode:"LVA",kodeverk:"LANDKODER",navn:"LATVIA"},{kode:"BTN",kodeverk:"LANDKODER",navn:"BHUTAN"},{kode:"MSR",kodeverk:"LANDKODER",navn:"MONSERRAT"},{kode:"???",kodeverk:"LANDKODER",navn:"UOPPGITT/UKJENT"},{kode:"OMN",kodeverk:"LANDKODER",navn:"OMAN"},{kode:"SVK",kodeverk:"LANDKODER",navn:"SLOVAKIA"},{kode:"TUV",kodeverk:"LANDKODER",navn:"TUVALU"},{kode:"VEN",kodeverk:"LANDKODER",navn:"VENEZUELA"},{kode:"ITA",kodeverk:"LANDKODER",navn:"ITALIA"},{kode:"KHM",kodeverk:"LANDKODER",navn:"KAMBODSJA"},{kode:"ARM",kodeverk:"LANDKODER",navn:"ARMENIA"},{kode:"LCA",kodeverk:"LANDKODER",navn:"ST. LUCIA"},{kode:"GIB",kodeverk:"LANDKODER",navn:"GIBRALTAR"},{kode:"JEY",kodeverk:"LANDKODER",navn:"JERSEY"},{kode:"LAO",kodeverk:"LANDKODER",navn:"LAOS"},{kode:"BHR",kodeverk:"LANDKODER",navn:"BAHRAIN"},{kode:"ESH",kodeverk:"LANDKODER",navn:"VEST-SAHARA"},{kode:"TKL",kodeverk:"LANDKODER",navn:"TOKELAU"},{kode:"MNG",kodeverk:"LANDKODER",navn:"MONGOLIA"},{kode:"BLZ",kodeverk:"LANDKODER",navn:"BELIZE"},{kode:"GUF",kodeverk:"LANDKODER",navn:"FRANSK GUYANA"},{kode:"TCA",kodeverk:"LANDKODER",navn:"TURKS/CAICOSØYENE"},{kode:"WSM",kodeverk:"LANDKODER",navn:"SAMOA"},{kode:"JOR",kodeverk:"LANDKODER",navn:"JORDAN"},{kode:"MRT",kodeverk:"LANDKODER",navn:"MAURITANIA"},{kode:"CUB",kodeverk:"LANDKODER",navn:"CUBA"},{kode:"BDI",kodeverk:"LANDKODER",navn:"BURUNDI"},{kode:"GHA",kodeverk:"LANDKODER",navn:"GHANA"},{kode:"KNA",kodeverk:"LANDKODER",navn:"ST.KITTS OG NEVIS"},{kode:"ETH",kodeverk:"LANDKODER",navn:"ETIOPIA"},{kode:"SSD",kodeverk:"LANDKODER",navn:"SØR-SUDAN"},{kode:"VAT",kodeverk:"LANDKODER",navn:"VATIKANSTATEN"},{kode:"CPV",kodeverk:"LANDKODER",navn:"KAPP VERDE"},{kode:"PCN",kodeverk:"LANDKODER",navn:"PITCAIRN"},{kode:"SGP",kodeverk:"LANDKODER",navn:"SINGAPORE"},{kode:"KAZ",kodeverk:"LANDKODER",navn:"KAZAKHSTAN"},{kode:"MYS",kodeverk:"LANDKODER",navn:"MALAYSIA"},{kode:"PHL",kodeverk:"LANDKODER",navn:"FILIPPINENE"},{kode:"EST",kodeverk:"LANDKODER",navn:"ESTLAND"},{kode:"NOR",kodeverk:"LANDKODER",navn:"NORGE"},{kode:"BMU",kodeverk:"LANDKODER",navn:"BERMUDA"},{kode:"LTU",kodeverk:"LANDKODER",navn:"LITAUEN"},{kode:"MAC",kodeverk:"LANDKODER",navn:"MACAO"},{kode:"TON",kodeverk:"LANDKODER",navn:"TONGA"},{kode:"ROU",kodeverk:"LANDKODER",navn:"ROMANIA"},{kode:"BLM",kodeverk:"LANDKODER",navn:"SAINT BARTHELEMY"},{kode:"SAU",kodeverk:"LANDKODER",navn:"SAUDI-ARABIA"},{kode:"GNQ",kodeverk:"LANDKODER",navn:"EKVATORIAL-GUINEA"},{kode:"TGO",kodeverk:"LANDKODER",navn:"TOGO"},{kode:"ZMB",kodeverk:"LANDKODER",navn:"ZAMBIA"},{kode:"VUT",kodeverk:"LANDKODER",navn:"VANUATU"},{kode:"DZA",kodeverk:"LANDKODER",navn:"ALGERIE"},{kode:"TJK",kodeverk:"LANDKODER",navn:"TADZJIKISTAN"},{kode:"NLD",kodeverk:"LANDKODER",navn:"NEDERLAND"},{kode:"KIR",kodeverk:"LANDKODER",navn:"KIRIBATI"},{kode:"GUY",kodeverk:"LANDKODER",navn:"GUYANA"},{kode:"BVT",kodeverk:"LANDKODER",navn:"BOUVETØYA"},{kode:"IND",kodeverk:"LANDKODER",navn:"INDIA"},{kode:"LKA",kodeverk:"LANDKODER",navn:"SRI LANKA"},{kode:"SYR",kodeverk:"LANDKODER",navn:"SYRIA"},{kode:"ESP",kodeverk:"LANDKODER",navn:"SPANIA"},{kode:"GRL",kodeverk:"LANDKODER",navn:"GRØNLAND"},{kode:"AIA",kodeverk:"LANDKODER",navn:"ANGUILLA"},{kode:"IRQ",kodeverk:"LANDKODER",navn:"IRAK"},{kode:"MCO",kodeverk:"LANDKODER",navn:"MONACO"},{kode:"MHL",kodeverk:"LANDKODER",navn:"MARSHALLØYENE"},{kode:"DOM",kodeverk:"LANDKODER",navn:"DEN DOMINIKANSKE REP"},{kode:"FLK",kodeverk:"LANDKODER",navn:"FALKLANDSØYENE"}],Od=[{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-005",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakebetaling endring"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"}],Id=[{kode:"IKKE_I_AKTIVITET_IKKE_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Aktiviteten er ikke dokumentert"},{kode:"I_AKTIVITET",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er i aktivitet"},{kode:"IKKE_I_AKTIVITET_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er ikke i aktivitet"}],Kd=[{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"},{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"}],Ld=[{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"},{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"}],Dd=[{kode:"FODSELSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsdato"},{kode:"TILBAKETREKK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilbaketrekk"},{kode:"ER_ANKEFRIST_IKKE_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er ankefrist ikke overholdt"},{kode:"FNR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsnummer"},{kode:"TERMINBEKREFTELSE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Terminbekreftelse"},{kode:"TERMINDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Termindato"},{kode:"ANKE_RESULTAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Anke resultat"},{kode:"UTTAK_SPLITT_TIDSPERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resulterende periode ved splitting"},{kode:"UTTAK_TREKKDAGER_FLERBARN_KVOTE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager flerbarn kvote"},{kode:"OPPHOLDSRETT_IKKE_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har ikke oppholdsrett i EØS"},{kode:"TILRETTELEGGING_SKAL_BRUKES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avgjør om tilrettelegging skal brukes"},{kode:"ER_ANKE_IKKE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er anke ikke konkret."},{kode:"BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandling"},{kode:"UTTAK_GRADERING_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gradering av arbeidsforhold"},{kode:"ANKE_AVVIST_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til avvist anke"},{kode:"INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt"},{kode:"SOKNADSFRISTVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfristvilkåret"},{kode:"DAGPENGER_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dagpenger"},{kode:"ARBEIDSFORHOLD_BEKREFTET_TOM_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Til og med dato fastsatt av saksbehandler"},{kode:"SOKNADSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfrist"},{kode:"VILKAR_SOM_ANVENDES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vilkår som anvendes"},{kode:"PERIODE_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode f.o.m."},{kode:"UTTAK_PROSENT_UTBETALING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utbetalingsgrad"},{kode:"NYTT_REFUSJONSKRAV",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Nytt refusjonskrav"},{kode:"DODSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dødsdato"},{kode:"DOKUMENTASJON_FORELIGGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dokumentasjon foreligger"},{kode:"LØNNSENDRING_I_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Lønnsendring i beregningsperioden"},{kode:"AVKLART_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklart periode"},{kode:"SVANGERSKAPSPENGERVILKÅRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Svangerskapsvilkåret"},{kode:"KLAGE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aktivitet"},{kode:"UTTAK_STØNADSKONTOTYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stønadskontotype"},{kode:"ALENEOMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aleneomsorg"},{kode:"OMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorg"},{kode:"KONTAKTPERSON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontaktperson"},{kode:"ER_KLAGE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"TILRETTELEGGING_BEHOV_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilrettelegging behov FOM"},{kode:"ANNEN_FORELDER_RETT_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Annen forelder har opptjent rett fra land i EØS"},{kode:"AKTIVITETSKRAV_AVKLARING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklaring om mor er i aktivitet"},{kode:"FASTSETT_RESULTAT_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett resultat for perioden"},{kode:"FRILANSVIRKSOMHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilansvirksomhet"},{kode:"MANN_ADOPTERER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mann adopterer"},{kode:"ANDEL_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Andel i arbeid"},{kode:"DELVIS_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis tilrettelegging FOM"},{kode:"OPPTJENINGSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Opptjeningsvilkåret"},{kode:"ER_KLAGER_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"UTTAK_PERIODE_RESULTAT_TYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultattype for periode"},{kode:"UTLAND",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utland"},{kode:"BRUK_ANTALL_I_TPS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra folkeregisteret"},{kode:"AKTIVITET_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden med aktivitet"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett søkers månedsinntekt fra etterlønn eller sluttpakke"},{kode:"IKKE_OMSORG_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden Søker har ikke omsorg for barnet"},{kode:"DEKNINGSGRAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dekningsgrad"},{kode:"ER_ANKEN_IKKE_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"er anken ikke signert."},{kode:"SYKDOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Sykdom"},{kode:"UTSTEDTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utstedtdato"},{kode:"FODSELSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødsel"},{kode:"NAVN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Navn"},{kode:"UTTAK_TREKKDAGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager"},{kode:"PA_KLAGD_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Påklagd behandlingId"},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Har søker inntekt fra etterlønn eller sluttpakke"},{kode:"OPPHOLDSRETT_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har oppholdsrett i EØS"},{kode:"RETT_TIL_FORELDREPENGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Rett til foreldrepenger"},{kode:"INNTEKTSKATEGORI",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori"},{kode:"ADOPTERER_ALENE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopterer alene"},{kode:"ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Arbeidsforhold"},{kode:"BRUKER_TVUNGEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker er under tvungen forvaltning"},{kode:"DELVIS_REFUSJON_FØR_STARTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis refusjon som utbetales før startdato for full refusjon"},{kode:"ENDRING_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring tidsbegrenset arbeidsforhold"},{kode:"VURDER_GRADERING_PÅ_ANDEL_UTEN_BG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vurder om søker har gradering på en andel uten beregningsgrunnlag"},{kode:"MANDAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mandat"},{kode:"MOR_MOTTAR_UFØRETRYGD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar uføretrygd"},{kode:"HEL_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Hel tilrettelegging FOM"},{kode:"ORGANISASJONSNUMMER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Organisasjonsnummer"},{kode:"UTTAK_GRADERING_AVSLAG_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak avslag gradering"},{kode:"ER_KLAGEN_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"ER_KLAGEFRIST_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"OMSORGSVILKAR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"PA_ANKET_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"på anket behandlingsId."},{kode:"SLUTTE_ARBEID_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Slutte arbeid FOM"},{kode:"BRUK_ANTALL_I_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra søknad"},{kode:"KLAGE_RESULTAT_NFP",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat"},{kode:"FORDELING_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling for arbeidsforhold"},{kode:"UTTAK_SAMTIDIG_UTTAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Samtidig uttak"},{kode:"ER_SOKER_BOSATT_I_NORGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er søker bosatt i Norge?"},{kode:"FRILANS_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilans inntekt"},{kode:"FASTSETT_VIDERE_BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett videre behandling"},{kode:"BRUK_ANTALL_I_VEDTAKET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra vedtaket"},{kode:"OMSORGSOVERTAKELSESDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorgsovertakelsesdato"},{kode:"UTTAK_PERIODE_RESULTAT_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat årsak"},{kode:"ENDRING_NAERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring i næring"},{kode:"FORDELING_FOR_NY_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny andel med fordeling"},{kode:"BEHANDLENDE_ENHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandlende enhet"},{kode:"BRUTTO_NAERINGSINNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Brutto næringsinntekt"},{kode:"FORDELING_ETTER_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling etter besteberegning"},{kode:"STARTDATO_FRA_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Startdato fra søknad"},{kode:"NY_STARTDATO_REFUSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny startdato for refusjon"},{kode:"OVERSTYRT_VURDERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt vurdering"},{kode:"KLAGE_RESULTAT_KA",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ytelsesvedtak"},{kode:"FARESIGNALER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Faresignaler"},{kode:"NY_AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Det er lagt til ny aktivitet for"},{kode:"MOTTAR_YTELSE_FRILANS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for frilansaktiviteten"},{kode:"NY_REFUSJONSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny refusjonsfrist"},{kode:"OVERSTYRT_BEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt beregning"},{kode:"AVKLARSAKSOPPLYSNINGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklar saksopplysninger"},{kode:"INNTEKT_FRA_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt fra arbeidsforhold"},{kode:"SOKERSOPPLYSNINGSPLIKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søkers opplysningsplikt"},{kode:"SELVSTENDIG_NAERINGSDRIVENDE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Selvstendig næringsdrivende"},{kode:"GYLDIG_MEDLEM_FOLKETRYGDEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gyldig medlem i folketrygden"},{kode:"MOTTATT_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottatt dato"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Antall barn"},{kode:"EKTEFELLES_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ektefelles barn"},{kode:"MILITÆR_ELLER_SIVIL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"PERIODE_TOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode t.o.m."},{kode:"FORELDREANSVARSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"STILLINGSPROSENT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stillingsprosent"},{kode:"ADOPSJONSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopsjon"},{kode:"ANKE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"INNTEKTSKATEGORI_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori for andel"},{kode:"KONTROLL_AV_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontroll av besteberegning"},{kode:"MOR_MOTTAR_STØNAD_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar foreldrepenger fra land i EØS"},{kode:"ER_ANKER_IKKE_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Angir om anker ikke er part i saken."},{kode:"ER_VILKÅRENE_TILBAKEKREVING_OPPFYLT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er vilkårene for tilbakekreving oppfylt"},{kode:"NY_FORDELING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny fordeling for"},{kode:"ER_SÆRLIGE_GRUNNER_TIL_REDUKSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er det særlige grunner til reduksjon"},{kode:"MOTTAR_YTELSE_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for arbeid i {value}"},{kode:"TYPE_VERGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Type verge"}],Pd=[{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet/savnet"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Uregistrert person"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"UTAN",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person annullert tilgang Fnr"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utvandret"}],Fd=[{kode:"ENHETSREGISTERET",kodeverk:"FAGSYSTEM",navn:"Enhetsregisteret"},{kode:"INFOTRYGD",kodeverk:"FAGSYSTEM",navn:"Infotrygd"},{kode:"INNTEKT",kodeverk:"FAGSYSTEM",navn:"INNTEKT"},{kode:"ARENA",kodeverk:"FAGSYSTEM",navn:"Arena"},{kode:"GOSYS",kodeverk:"FAGSYSTEM",navn:"Gosys"},{kode:"JOARK",kodeverk:"FAGSYSTEM",navn:"Joark"},{kode:"K9SAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Folketrygdloven Kapittel 9"},{kode:"FPSAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Foreldrepenger"},{kode:"AAREGISTERET",kodeverk:"FAGSYSTEM",navn:"AAregisteret"},{kode:"MEDL",kodeverk:"FAGSYSTEM",navn:"MEDL"},{kode:"TPS",kodeverk:"FAGSYSTEM",navn:"TPS"},{kode:"VLSP",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Sykepenger"}],Md=[{kode:"ANKE_STADFESTE_YTELSESVEDTAK",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"ANKEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"ANKE_AVVIS",kodeverk:"ANKEVURDERING",navn:"Anken avvises"},{kode:"ANKE_OMGJOER",kodeverk:"ANKEVURDERING",navn:"Anken omgjøres"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket oppheves og hjemsendes"}],Vd=[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"}],Gd=[{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],jd=[{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"}],wd=[{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er slått sammen med et annet"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforhold lagt til av saksbehandler"},{kode:"BRUK_UTEN_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk, men ikke benytt inntektsmelding"},{kode:"IKKE_BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Ikke bruk"},{kode:"BASERT_PÅ_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet som ikke ligger i AA-reg er basert på inntektsmelding"},{kode:"BRUK_MED_OVERSTYRT_PERIODE",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Inntekten til arbeidsforholdet skal ikke være med i beregningsgrunnlaget"}],Bd=[{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"}],Ud=[{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"}],Hd=[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],xd=[{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],qd=[{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"}],Yd=[{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],Cd=[{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"}],$d=[{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"},{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"}],Jd={RelasjonsRolleType:Ql,HistorikkinnslagType:ed,UttakUtsettelseType:nd,FagsakYtelseType:rd,StønadskontoType:[{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"}],FagsakStatus:td,Venteårsak:[{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga for tidlig søknad"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdId som stemmer med Aareg"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på scanning"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev venter søknad."},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."}],AnkeVurderingOmgjør:[{kode:"ANKE_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Gunst omgjør i anke"},{kode:"ANKE_TIL_UGUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Ugunst omgjør i anke"},{kode:"ANKE_DELVIS_OMGJOERING_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Delvis omgjøring, til gunst i anke"}],BehandlingÅrsakType:[{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger inntekt"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Inntektsmelding"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger søknadsfrist"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger opptjening"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Søknad"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger beregning"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. u26-29"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger medlemskap"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev uttak"}],GraderingAvslagÅrsak:[{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"Avslag gradering - arbeid 100% eller mer",lovHjemmel:null}],AktivitetStatus:ad,BeregningsgrunnlagAndeltype:id,RevurderingVarslingÅrsak:[{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utvandret"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:od,KonsekvensForYtelsen:sd,Inntektskategori:ld,SivilstandType:dd,SkjermlenkeType:ud,FaktaOmBeregningTilfelle:kd,KlageVurdering:gd,HistorikkBegrunnelseType:Ed,OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:vd,KlageAvvistÅrsak:[{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klage er ugyldig",lovHjemmel:null}],BehandlingResultatType:md,VergeType:Td,TilbakekrevingVidereBehandling:fd,OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"}],FamilieHendelseType:Rd,KlageHjemmel:Ad,VilkårType:[{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"}],FarSøkerType:[{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"}],FaresignalVurdering:cd,ArbeidType:pd,KlageMedholdÅrsak:[{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"}],Region:yd,OppgaveÅrsak:[{kode:"BEH_SAK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i VL"},{kode:"BEH_SAK_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i Infotrygd"},{kode:"INNHENT_DOK",kodeverk:"OPPGAVE_AARSAK",navn:"Innhent dokumentasjon"},{kode:"VUR_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder dokument i VL"},{kode:"REG_SOK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Registrere søknad i VL"},{kode:"SETTVENT_STO",kodeverk:"OPPGAVE_AARSAK",navn:"Sett Arena utbetaling på vent"},{kode:"RV_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Revurdere i VL"},{kode:"VUR_KONS_YTE_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder konsekvens for ytelse foreldrepenger"},{kode:"GOD_VED_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Godkjenne vedtak i VL"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"},{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"}],HistorikkOpplysningType:_d,FordelingPeriodeKilde:Sd,KlageVurderingOmgjør:[{kode:"DELVIS_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Delvis medhold i klage"},{kode:"UGUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Ugunst medhold i klage"},{kode:"GUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Gunst medhold i klage"}],VurderArbeidsforholdHistorikkinnslag:Nd,Arbeidskategori:bd,VurderÅrsak:[{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"}],Landkoder:hd,BehandlingType:Od,KontrollerAktivitetskravAvklaring:Id,InnsynResultatType:Kd,MedlemskapType:Ld,HistorikkEndretFeltType:Dd,PersonstatusType:Pd,Fagsystem:Fd,AnkeVurdering:Md,UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"}],BehandlingStatus:Vd,VirksomhetType:Gd,MedlemskapDekningType:jd,ArbeidsforholdHandlingType:wd,HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"}],Avslagsårsak:{FP_VK_3:[{kode:"1007",kodeverk:"AVSLAGSARSAK",navn:"Søkt for sent",lovHjemmel:null}],FP_VK_4:[{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1005",kodeverk:"AVSLAGSARSAK",navn:"Ektefelles/samboers barn",lovHjemmel:null},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1006",kodeverk:"AVSLAGSARSAK",navn:"Mann adopterer ikke alene",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_1:[{kode:"1002",kodeverk:"AVSLAGSARSAK",navn:"Søker er medmor",lovHjemmel:null},{kode:"1031",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}'},{kode:"1003",kodeverk:"AVSLAGSARSAK",navn:"Søker er far",lovHjemmel:null},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1001",kodeverk:"AVSLAGSARSAK",navn:"Søkt for tidlig",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1026",kodeverk:"AVSLAGSARSAK",navn:"Fødselsdato ikke oppgitt eller registrert",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_2:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],"-":[],FP_VK_41:[{kode:"1041",kodeverk:"AVSLAGSARSAK",navn:"For lavt brutto beregningsgrunnlag",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_41", "lovreferanse": "14-7"}]}]}'}],FP_VK_21:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_11:[{kode:"1027",kodeverk:"AVSLAGSARSAK",navn:"Ingen barn dokumentert på far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1028",kodeverk:"AVSLAGSARSAK",navn:"Mor fyller ikke vilkåret for sykdom",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1029",kodeverk:"AVSLAGSARSAK",navn:"Bruker er ikke registrert som far/medmor til barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'}],FP_VK_33:[{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1017",kodeverk:"AVSLAGSARSAK",navn:"Omsorgsovertakelse etter 56 uker",lovHjemmel:null},{kode:"1016",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1018",kodeverk:"AVSLAGSARSAK",navn:"Ikke foreldreansvar alene etter barnelova",lovHjemmel:null}],FP_VK_34:[{kode:"1019",kodeverk:"AVSLAGSARSAK",navn:"Manglende dokumentasjon",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_34", "lovreferanse": "21-3"}]}]}'}],FP_VK_23:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_8:[{kode:"1014",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke foreldreansvar",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1013",kodeverk:"AVSLAGSARSAK",navn:"Barn ikke under 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1015",kodeverk:"AVSLAGSARSAK",navn:"Søker har hatt vanlig samvær med barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'}],SVP_VK_1:[{kode:"1065",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1062",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker har mottatt sykepenger",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1066",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1064",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1063",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1061",kodeverk:"AVSLAGSARSAK",navn:"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 3. ledd"}]}]}'},{kode:"1060",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker er ikke gravid kvinne",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'}],FP_VK_16:[{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'},{kode:"1051",kodeverk:"AVSLAGSARSAK",navn:"Stebarnsadopsjon ikke flere dager igjen",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16", "lovreferanse": "14-5"}]}]}'}],FP_VK_5:[{kode:"1009",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1008",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1012",kodeverk:"AVSLAGSARSAK",navn:"Far har ikke omsorg for barnet",lovHjemmel:null},{kode:"1010",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død ved fødsel/omsorg",lovHjemmel:null}],FP_VK_2_L:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],FP_VK_2_F:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1052",kodeverk:"AVSLAGSARSAK",navn:"Innflyttet for mindre enn ett år siden",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK_2_F", "lovreferanse": "14-17 5. ledd"}]}]}'}]},OpptjeningAktivitetType:Bd,PermisjonsbeskrivelseType:Ud,Språkkode:[{kode:"NB",kodeverk:"SPRAAK_KODE",navn:"Norsk"},{kode:"NN",kodeverk:"SPRAAK_KODE",navn:"Nynorsk"},{kode:"EN",kodeverk:"SPRAAK_KODE",navn:"Engelsk"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"}],OppholdstillatelseType:Hd,MedlemskapManuellVurderingType:xd,ManuellBehandlingÅrsak:[{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."}],MorsAktivitet:qd,NaturalYtelseType:Yd,PeriodeResultatÅrsak:[{kode:"2010",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4072",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjuende ledd: Barnet er dødt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Ikke heltidsarbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4085",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Det er ikke samtykke mellom partene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-16"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4052",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4084",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4097",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Adopsjonsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4104",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Stønadsperiode for nytt barn",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4086",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-11"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ikke stønadsdager igjen på stønadskonto",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ferie/arbeid innenfor de første 6 ukene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4112",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Barnets innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2017",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2036",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4071",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Bruker er død",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4098",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Foreldreansvarsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4067",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4066",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2026",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12, jf. §14-16: Gradering av kvote/overført kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4081",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4053",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2014",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4056",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2016",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2004",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2018",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2024",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4068",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4087",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-2: Opphør medlemskap",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-2"}}}',sortering:"14-02",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4110",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4115",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4096",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Fødselsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4073",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4069",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4062",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4089",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-9"}}}',sortering:"14-11-0",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4075",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjuende ledd: Ikke sammenhengende perioder",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2028",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4060",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2006",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger før fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4105",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4058",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Innvilget fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4095",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR"]},{kode:"4116",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4092",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Avslag overføring - har ikke aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4008",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4064",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4111",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4054",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-09-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4077",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10 a"}}}',sortering:"14-10-0-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2019",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Avslag utsettelse før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4050",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Innvilget uttak av kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4082",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2027",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4088",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4063",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4099",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-6: Opptjeningsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-6"}}}',sortering:"14-06",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4103",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-13: Innvilget fellesperiode til far",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Mor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4107",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Barnet er over 3 år",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ikke lovbestemt ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4059",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13, 14-9"}}}',sortering:"14-13-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2021",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4070",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4074",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,21-3"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2011",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4065",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4057",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13,14-16"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4076",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4040",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4061",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4041",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§22-13 tredje ledd: Brudd på søknadsfrist",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "22-13"}}}',sortering:"22-13-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4106",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15: Innvilget foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4055",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4093",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16: Avslag gradering - søker er ikke i arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4102",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4051",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2015",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4100",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 andre ledd: Uttak før omsorgsovertakelse",lovHjemmel:"",sortering:"14-10-2",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Far/medmor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4117",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]}],ForeldreType:Cd,AdresseType:$d},dr=e=>{if(e==null)return;const n=e.toString().replace(/\s/g,"");if(!Number.isNaN(n))return Number(Math.round(parseFloat(n))).toLocaleString("nb-NO").replace(/,|\s/g," ")};var Lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function St(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xi={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(Lr,function(){var t="minute",r=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(i,o,s){var l=o.prototype;s.utc=function(T){var A={date:T,utc:!0,args:arguments};return new o(A)},l.utc=function(T){var A=s(this.toDate(),{locale:this.$L,utc:!0});return T?A.add(this.utcOffset(),t):A},l.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var d=l.parse;l.parse=function(T){T.utc&&(this.$u=!0),this.$utils().u(T.$offset)||(this.$offset=T.$offset),d.call(this,T)};var u=l.init;l.init=function(){if(this.$u){var T=this.$d;this.$y=T.getUTCFullYear(),this.$M=T.getUTCMonth(),this.$D=T.getUTCDate(),this.$W=T.getUTCDay(),this.$H=T.getUTCHours(),this.$m=T.getUTCMinutes(),this.$s=T.getUTCSeconds(),this.$ms=T.getUTCMilliseconds()}else u.call(this)};var k=l.utcOffset;l.utcOffset=function(T,A){var p=this.$utils().u;if(p(T))return this.$u?0:p(this.$offset)?k.call(this):this.$offset;if(typeof T=="string"&&(T=function(O){O===void 0&&(O="");var M=O.match(r);if(!M)return null;var K=(""+M[0]).match(a)||["-",0,0],I=K[0],V=60*+K[1]+ +K[2];return V===0?0:I==="+"?V:-V}(T),T===null))return this;var R=Math.abs(T)<=16?60*T:T,S=this;if(A)return S.$offset=R,S.$u=T===0,S;if(T!==0){var b=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(S=this.local().add(R+b,t)).$offset=R,S.$x.$localOffset=b}else S=this.utc();return S};var g=l.format;l.format=function(T){var A=T||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return g.call(this,A)},l.valueOf=function(){var T=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*T},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var E=l.toDate;l.toDate=function(T){return T==="s"&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():E.call(this)};var f=l.diff;l.diff=function(T,A,p){if(T&&this.$u===T.$u)return f.call(this,T,A,p);var R=this.local(),S=s(T).local();return f.call(R,S,A,p)}}})})(xi);var zd=xi.exports;const Wd=St(zd);var qi={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(Lr,function(){var t,r,a=1e3,i=6e4,o=36e5,s=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=31536e6,u=2628e6,k=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,g={years:d,months:u,days:s,hours:o,minutes:i,seconds:a,milliseconds:1,weeks:6048e5},E=function(M){return M instanceof b},f=function(M,K,I){return new b(M,I,K.$l)},T=function(M){return r.p(M)+"s"},A=function(M){return M<0},p=function(M){return A(M)?Math.ceil(M):Math.floor(M)},R=function(M){return Math.abs(M)},S=function(M,K){return M?A(M)?{negative:!0,format:""+R(M)+K}:{negative:!1,format:""+M+K}:{negative:!1,format:""}},b=function(){function M(I,V,w){var P=this;if(this.$d={},this.$l=w,I===void 0&&(this.$ms=0,this.parseFromMilliseconds()),V)return f(I*g[T(V)],this);if(typeof I=="number")return this.$ms=I,this.parseFromMilliseconds(),this;if(typeof I=="object")return Object.keys(I).forEach(function(c){P.$d[T(c)]=I[c]}),this.calMilliseconds(),this;if(typeof I=="string"){var L=I.match(k);if(L){var _=L.slice(2).map(function(c){return c!=null?Number(c):0});return this.$d.years=_[0],this.$d.months=_[1],this.$d.weeks=_[2],this.$d.days=_[3],this.$d.hours=_[4],this.$d.minutes=_[5],this.$d.seconds=_[6],this.calMilliseconds(),this}}return this}var K=M.prototype;return K.calMilliseconds=function(){var I=this;this.$ms=Object.keys(this.$d).reduce(function(V,w){return V+(I.$d[w]||0)*g[w]},0)},K.parseFromMilliseconds=function(){var I=this.$ms;this.$d.years=p(I/d),I%=d,this.$d.months=p(I/u),I%=u,this.$d.days=p(I/s),I%=s,this.$d.hours=p(I/o),I%=o,this.$d.minutes=p(I/i),I%=i,this.$d.seconds=p(I/a),I%=a,this.$d.milliseconds=I},K.toISOString=function(){var I=S(this.$d.years,"Y"),V=S(this.$d.months,"M"),w=+this.$d.days||0;this.$d.weeks&&(w+=7*this.$d.weeks);var P=S(w,"D"),L=S(this.$d.hours,"H"),_=S(this.$d.minutes,"M"),c=this.$d.seconds||0;this.$d.milliseconds&&(c+=this.$d.milliseconds/1e3,c=Math.round(1e3*c)/1e3);var F=S(c,"S"),G=I.negative||V.negative||P.negative||L.negative||_.negative||F.negative,Y=L.format||_.format||F.format?"T":"",q=(G?"-":"")+"P"+I.format+V.format+P.format+Y+L.format+_.format+F.format;return q==="P"||q==="-P"?"P0D":q},K.toJSON=function(){return this.toISOString()},K.format=function(I){var V=I||"YYYY-MM-DDTHH:mm:ss",w={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return V.replace(l,function(P,L){return L||String(w[P])})},K.as=function(I){return this.$ms/g[T(I)]},K.get=function(I){var V=this.$ms,w=T(I);return w==="milliseconds"?V%=1e3:V=w==="weeks"?p(V/g[w]):this.$d[w],V||0},K.add=function(I,V,w){var P;return P=V?I*g[T(V)]:E(I)?I.$ms:f(I,this).$ms,f(this.$ms+P*(w?-1:1),this)},K.subtract=function(I,V){return this.add(I,V,!0)},K.locale=function(I){var V=this.clone();return V.$l=I,V},K.clone=function(){return f(this.$ms,this)},K.humanize=function(I){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!I)},K.valueOf=function(){return this.asMilliseconds()},K.milliseconds=function(){return this.get("milliseconds")},K.asMilliseconds=function(){return this.as("milliseconds")},K.seconds=function(){return this.get("seconds")},K.asSeconds=function(){return this.as("seconds")},K.minutes=function(){return this.get("minutes")},K.asMinutes=function(){return this.as("minutes")},K.hours=function(){return this.get("hours")},K.asHours=function(){return this.as("hours")},K.days=function(){return this.get("days")},K.asDays=function(){return this.as("days")},K.weeks=function(){return this.get("weeks")},K.asWeeks=function(){return this.as("weeks")},K.months=function(){return this.get("months")},K.asMonths=function(){return this.as("months")},K.years=function(){return this.get("years")},K.asYears=function(){return this.as("years")},M}(),O=function(M,K,I){return M.add(K.years()*I,"y").add(K.months()*I,"M").add(K.days()*I,"d").add(K.hours()*I,"h").add(K.minutes()*I,"m").add(K.seconds()*I,"s").add(K.milliseconds()*I,"ms")};return function(M,K,I){t=I,r=I().$utils(),I.duration=function(P,L){var _=I.locale();return f(P,{$l:_},L)},I.isDuration=E;var V=K.prototype.add,w=K.prototype.subtract;K.prototype.add=function(P,L){return E(P)?O(this,P,1):V.bind(this)(P,L)},K.prototype.subtract=function(P,L){return E(P)?O(this,P,-1):w.bind(this)(P,L)}}})})(qi);var Xd=qi.exports;const Zd=St(Xd);var Yi={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(Lr,function(){var t="day";return function(r,a,i){var o=function(d){return d.add(4-d.isoWeekday(),t)},s=a.prototype;s.isoWeekYear=function(){return o(this).year()},s.isoWeek=function(d){if(!this.$utils().u(d))return this.add(7*(d-this.isoWeek()),t);var u,k,g,E,f=o(this),T=(u=this.isoWeekYear(),k=this.$u,g=(k?i.utc:i)().year(u).startOf("year"),E=4-g.isoWeekday(),g.isoWeekday()>4&&(E+=7),g.add(E,t));return f.diff(T,"week")+1},s.isoWeekday=function(d){return this.$utils().u(d)?this.day()||7:this.day(this.day()%7?d:d-7)};var l=s.startOf;s.startOf=function(d,u){var k=this.$utils(),g=!!k.u(u)||u;return k.p(d)==="isoweek"?g?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(d,u)}}})})(Yi);var Qd=Yi.exports;const eu=St(Qd);var nu={exports:{}};(function(e,n){(function(t,r){e.exports=r(me)})(Lr,function(t){function r(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var a=r(t),i={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(o){return o+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(i,null,!0),i})})(nu);const ru=Vi(),Ve=e=>Xl({locale:"nb-NO",messages:e},ru),Ci={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"},la="DD.MM.YYYY",da="YYYY-MM";me.extend(Wd);me.extend(eu);me.extend(Zd);Ve(Ci);const ua=(e,n,t)=>me(e,n,t).utc(!0).startOf("day"),tu=(e,n)=>{me.locale("nb");const t=ua(e,da),r=ua(n,da);let a=t;const i=[{month:a.format("MMMM"),year:a.format("YY")}];for(;a.isBefore(r);)a=a.add(1,"month"),i.push({month:a.format("MMMM"),year:a.format("YY")});return i},au=e=>e.toString().replace(new RegExp("\\p{Dash_Punctuation}","gu"),"-").replace(/[\p{Space_Separator}\t]/gu," ").replace(/[“”]/g,'"').replace(/[‘’`]/g,"'").replace(/</g,"&lt;").replace(/>/g,"&gt;"),ar=Ve(Ci),iu=e=>{if(!e)return ar.formatMessage({id:"Malform.Bokmal"});switch(e){case"NN":return ar.formatMessage({id:"Malform.Nynorsk"});case"EN":return ar.formatMessage({id:"Malform.Engelsk"});default:return ar.formatMessage({id:"Malform.Bokmal"})}},ou=e=>e!=null&&e.constructor===Object;var Jn=e=>e.type==="checkbox",dn=e=>e instanceof Date,fe=e=>e==null;const $i=e=>typeof e=="object";var ue=e=>!fe(e)&&!Array.isArray(e)&&$i(e)&&!dn(e),Ji=e=>ue(e)&&e.target?Jn(e.target)?e.target.checked:e.target.value:e,su=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,zi=(e,n)=>e.has(su(n)),lu=e=>{const n=e.constructor&&e.constructor.prototype;return ue(n)&&n.hasOwnProperty("isPrototypeOf")},Nt=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function pe(e){let n;const t=Array.isArray(e);if(e instanceof Date)n=new Date(e);else if(e instanceof Set)n=new Set(e);else if(!(Nt&&(e instanceof Blob||e instanceof FileList))&&(t||ue(e)))if(n=t?[]:{},!t&&!lu(e))n=e;else for(const r in e)e.hasOwnProperty(r)&&(n[r]=pe(e[r]));else return e;return n}var Dr=e=>Array.isArray(e)?e.filter(Boolean):[],se=e=>e===void 0,B=(e,n,t)=>{if(!n||!ue(e))return t;const r=Dr(n.split(/[,[\].]+?/)).reduce((a,i)=>fe(a)?a:a[i],e);return se(r)||r===e?se(e[n])?t:e[n]:r},Ie=e=>typeof e=="boolean",bt=e=>/^\w*$/.test(e),Wi=e=>Dr(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ee=(e,n,t)=>{let r=-1;const a=bt(n)?[n]:Wi(n),i=a.length,o=i-1;for(;++r<i;){const s=a[r];let l=t;if(r!==o){const d=e[s];l=ue(d)||Array.isArray(d)?d:isNaN(+a[r+1])?{}:[]}if(s==="__proto__")return;e[s]=l,e=e[s]}return e};const fr={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Fe={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},xe={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Xi=N.createContext(null),hn=()=>N.useContext(Xi),du=e=>{const{children:n,...t}=e;return N.createElement(Xi.Provider,{value:t},n)};var Zi=(e,n,t,r=!0)=>{const a={defaultValues:n._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const o=i;return n._proxyFormState[o]!==Fe.all&&(n._proxyFormState[o]=!r||Fe.all),t&&(t[o]=!0),e[o]}});return a},ye=e=>ue(e)&&!Object.keys(e).length,Qi=(e,n,t,r)=>{t(e);const{name:a,...i}=e;return ye(i)||Object.keys(i).length>=Object.keys(n).length||Object.keys(i).find(o=>n[o]===(!r||Fe.all))},Bn=e=>Array.isArray(e)?e:[e],eo=(e,n,t)=>!e||!n||e===n||Bn(e).some(r=>r&&(t?r===n:r.startsWith(n)||n.startsWith(r)));function ht(e){const n=N.useRef(e);n.current=e,N.useEffect(()=>{const t=!e.disabled&&n.current.subject&&n.current.subject.subscribe({next:n.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function uu(e){const n=hn(),{control:t=n.control,disabled:r,name:a,exact:i}=e||{},[o,s]=N.useState(t._formState),l=N.useRef(!0),d=N.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),u=N.useRef(a);return u.current=a,ht({disabled:r,next:k=>l.current&&eo(u.current,k.name,i)&&Qi(k,d.current,t._updateFormState)&&s({...t._formState,...k}),subject:t._subjects.state}),N.useEffect(()=>(l.current=!0,d.current.isValid&&t._updateValid(!0),()=>{l.current=!1}),[t]),Zi(o,t,d.current,!1)}var je=e=>typeof e=="string",no=(e,n,t,r,a)=>je(e)?(r&&n.watch.add(e),B(t,e,a)):Array.isArray(e)?e.map(i=>(r&&n.watch.add(i),B(t,i))):(r&&(n.watchAll=!0),t);function ku(e){const n=hn(),{control:t=n.control,name:r,defaultValue:a,disabled:i,exact:o}=e||{},s=N.useRef(r);s.current=r,ht({disabled:i,subject:t._subjects.values,next:u=>{eo(s.current,u.name,o)&&d(pe(no(s.current,t._names,u.values||t._formValues,!1,a)))}});const[l,d]=N.useState(t._getWatch(r,a));return N.useEffect(()=>t._removeUnmounted()),l}function ro(e){const n=hn(),{name:t,disabled:r,control:a=n.control,shouldUnregister:i}=e,o=zi(a._names.array,t),s=ku({control:a,name:t,defaultValue:B(a._formValues,t,B(a._defaultValues,t,e.defaultValue)),exact:!0}),l=uu({control:a,name:t,exact:!0}),d=N.useRef(a.register(t,{...e.rules,value:s,...Ie(e.disabled)?{disabled:e.disabled}:{}}));return N.useEffect(()=>{const u=a._options.shouldUnregister||i,k=(g,E)=>{const f=B(a._fields,g);f&&f._f&&(f._f.mount=E)};if(k(t,!0),u){const g=pe(B(a._options.defaultValues,t));ee(a._defaultValues,t,g),se(B(a._formValues,t))&&ee(a._formValues,t,g)}return()=>{(o?u&&!a._state.action:u)?a.unregister(t):k(t,!1)}},[t,a,o,i]),N.useEffect(()=>{B(a._fields,t)&&a._updateDisabledField({disabled:r,fields:a._fields,name:t,value:B(a._fields,t)._f.value})},[r,t,a]),{field:{name:t,value:s,...Ie(r)||l.disabled?{disabled:l.disabled||r}:{},onChange:N.useCallback(u=>d.current.onChange({target:{value:Ji(u),name:t},type:fr.CHANGE}),[t]),onBlur:N.useCallback(()=>d.current.onBlur({target:{value:B(a._formValues,t),name:t},type:fr.BLUR}),[t,a]),ref:N.useCallback(u=>{const k=B(a._fields,t);k&&u&&(k._f.ref={focus:()=>u.focus(),select:()=>u.select(),setCustomValidity:g=>u.setCustomValidity(g),reportValidity:()=>u.reportValidity()})},[a._fields,t])},formState:l,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!B(l.errors,t)},isDirty:{enumerable:!0,get:()=>!!B(l.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!B(l.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!B(l.validatingFields,t)},error:{enumerable:!0,get:()=>B(l.errors,t)}})}}var gu=(e,n,t,r,a)=>n?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[r]:a||!0}}:{},ka=e=>({isOnSubmit:!e||e===Fe.onSubmit,isOnBlur:e===Fe.onBlur,isOnChange:e===Fe.onChange,isOnAll:e===Fe.all,isOnTouch:e===Fe.onTouched}),ga=(e,n,t)=>!t&&(n.watchAll||n.watch.has(e)||[...n.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Un=(e,n,t,r)=>{for(const a of t||Object.keys(e)){const i=B(e,a);if(i){const{_f:o,...s}=i;if(o){if(o.refs&&o.refs[0]&&n(o.refs[0],a)&&!r)return!0;if(o.ref&&n(o.ref,o.name)&&!r)return!0;if(Un(s,n))break}else if(ue(s)&&Un(s,n))break}}};var Eu=(e,n,t)=>{const r=Bn(B(e,t));return ee(r,"root",n[t]),ee(e,t,r),e},Ot=e=>e.type==="file",Ye=e=>typeof e=="function",Rr=e=>{if(!Nt)return!1;const n=e?e.ownerDocument:0;return e instanceof(n&&n.defaultView?n.defaultView.HTMLElement:HTMLElement)},ur=e=>je(e),It=e=>e.type==="radio",Ar=e=>e instanceof RegExp;const Ea={value:!1,isValid:!1},va={value:!0,isValid:!0};var to=e=>{if(Array.isArray(e)){if(e.length>1){const n=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:n,isValid:!!n.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!se(e[0].attributes.value)?se(e[0].value)||e[0].value===""?va:{value:e[0].value,isValid:!0}:va:Ea}return Ea};const ma={isValid:!1,value:null};var ao=e=>Array.isArray(e)?e.reduce((n,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:n,ma):ma;function Ta(e,n,t="validate"){if(ur(e)||Array.isArray(e)&&e.every(ur)||Ie(e)&&!e)return{type:t,message:ur(e)?e:"",ref:n}}var cn=e=>ue(e)&&!Ar(e)?e:{value:e,message:""},fa=async(e,n,t,r,a)=>{const{ref:i,refs:o,required:s,maxLength:l,minLength:d,min:u,max:k,pattern:g,validate:E,name:f,valueAsNumber:T,mount:A,disabled:p}=e._f,R=B(n,f);if(!A||p)return{};const S=o?o[0]:i,b=L=>{r&&S.reportValidity&&(S.setCustomValidity(Ie(L)?"":L||""),S.reportValidity())},O={},M=It(i),K=Jn(i),I=M||K,V=(T||Ot(i))&&se(i.value)&&se(R)||Rr(i)&&i.value===""||R===""||Array.isArray(R)&&!R.length,w=gu.bind(null,f,t,O),P=(L,_,c,F=xe.maxLength,G=xe.minLength)=>{const Y=L?_:c;O[f]={type:L?F:G,message:Y,ref:i,...w(L?F:G,Y)}};if(a?!Array.isArray(R)||!R.length:s&&(!I&&(V||fe(R))||Ie(R)&&!R||K&&!to(o).isValid||M&&!ao(o).isValid)){const{value:L,message:_}=ur(s)?{value:!!s,message:s}:cn(s);if(L&&(O[f]={type:xe.required,message:_,ref:S,...w(xe.required,_)},!t))return b(_),O}if(!V&&(!fe(u)||!fe(k))){let L,_;const c=cn(k),F=cn(u);if(!fe(R)&&!isNaN(R)){const G=i.valueAsNumber||R&&+R;fe(c.value)||(L=G>c.value),fe(F.value)||(_=G<F.value)}else{const G=i.valueAsDate||new Date(R),Y=J=>new Date(new Date().toDateString()+" "+J),q=i.type=="time",$=i.type=="week";je(c.value)&&R&&(L=q?Y(R)>Y(c.value):$?R>c.value:G>new Date(c.value)),je(F.value)&&R&&(_=q?Y(R)<Y(F.value):$?R<F.value:G<new Date(F.value))}if((L||_)&&(P(!!L,c.message,F.message,xe.max,xe.min),!t))return b(O[f].message),O}if((l||d)&&!V&&(je(R)||a&&Array.isArray(R))){const L=cn(l),_=cn(d),c=!fe(L.value)&&R.length>+L.value,F=!fe(_.value)&&R.length<+_.value;if((c||F)&&(P(c,L.message,_.message),!t))return b(O[f].message),O}if(g&&!V&&je(R)){const{value:L,message:_}=cn(g);if(Ar(L)&&!R.match(L)&&(O[f]={type:xe.pattern,message:_,ref:i,...w(xe.pattern,_)},!t))return b(_),O}if(E){if(Ye(E)){const L=await E(R,n),_=Ta(L,S);if(_&&(O[f]={..._,...w(xe.validate,_.message)},!t))return b(_.message),O}else if(ue(E)){let L={};for(const _ in E){if(!ye(L)&&!t)break;const c=Ta(await E[_](R,n),S,_);c&&(L={...c,...w(_,c.message)},b(c.message),t&&(O[f]=L))}if(!ye(L)&&(O[f]={ref:S,...L},!t))return O}}return b(!0),O};function vu(e,n){const t=n.slice(0,-1).length;let r=0;for(;r<t;)e=se(e)?r++:e[n[r++]];return e}function mu(e){for(const n in e)if(e.hasOwnProperty(n)&&!se(e[n]))return!1;return!0}function ke(e,n){const t=Array.isArray(n)?n:bt(n)?[n]:Wi(n),r=t.length===1?e:vu(e,t),a=t.length-1,i=t[a];return r&&delete r[i],a!==0&&(ue(r)&&ye(r)||Array.isArray(r)&&mu(r))&&ke(e,t.slice(0,-1)),e}var Yr=()=>{let e=[];return{get observers(){return e},next:a=>{for(const i of e)i.next&&i.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(i=>i!==a)}}),unsubscribe:()=>{e=[]}}},dt=e=>fe(e)||!$i(e);function ze(e,n){if(dt(e)||dt(n))return e===n;if(dn(e)&&dn(n))return e.getTime()===n.getTime();const t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(const a of t){const i=e[a];if(!r.includes(a))return!1;if(a!=="ref"){const o=n[a];if(dn(i)&&dn(o)||ue(i)&&ue(o)||Array.isArray(i)&&Array.isArray(o)?!ze(i,o):i!==o)return!1}}return!0}var io=e=>e.type==="select-multiple",Tu=e=>It(e)||Jn(e),Cr=e=>Rr(e)&&e.isConnected,oo=e=>{for(const n in e)if(Ye(e[n]))return!0;return!1};function cr(e,n={}){const t=Array.isArray(e);if(ue(e)||t)for(const r in e)Array.isArray(e[r])||ue(e[r])&&!oo(e[r])?(n[r]=Array.isArray(e[r])?[]:{},cr(e[r],n[r])):fe(e[r])||(n[r]=!0);return n}function so(e,n,t){const r=Array.isArray(e);if(ue(e)||r)for(const a in e)Array.isArray(e[a])||ue(e[a])&&!oo(e[a])?se(n)||dt(t[a])?t[a]=Array.isArray(e[a])?cr(e[a],[]):{...cr(e[a])}:so(e[a],fe(n)?{}:n[a],t[a]):t[a]=!ze(e[a],n[a]);return t}var Ln=(e,n)=>so(e,n,cr(n)),lo=(e,{valueAsNumber:n,valueAsDate:t,setValueAs:r})=>se(e)?e:n?e===""?NaN:e&&+e:t&&je(e)?new Date(e):r?r(e):e;function $r(e){const n=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):n.disabled))return Ot(n)?n.files:It(n)?ao(e.refs).value:io(n)?[...n.selectedOptions].map(({value:t})=>t):Jn(n)?to(e.refs).value:lo(se(n.value)?e.ref.value:n.value,e)}var fu=(e,n,t,r)=>{const a={};for(const i of e){const o=B(n,i);o&&ee(a,i,o._f)}return{criteriaMode:t,names:[...e],fields:a,shouldUseNativeValidation:r}},Dn=e=>se(e)?e:Ar(e)?e.source:ue(e)?Ar(e.value)?e.value.source:e.value:e;const Ra="AsyncFunction";var Ru=e=>(!e||!e.validate)&&!!(Ye(e.validate)&&e.validate.constructor.name===Ra||ue(e.validate)&&Object.values(e.validate).find(n=>n.constructor.name===Ra)),Au=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Aa(e,n,t){const r=B(e,t);if(r||bt(t))return{error:r,name:t};const a=t.split(".");for(;a.length;){const i=a.join("."),o=B(n,i),s=B(e,i);if(o&&!Array.isArray(o)&&t!==i)return{name:t};if(s&&s.type)return{name:i,error:s};a.pop()}return{name:t}}var cu=(e,n,t,r,a)=>a.isOnAll?!1:!t&&a.isOnTouch?!(n||e):(t?r.isOnBlur:a.isOnBlur)?!e:(t?r.isOnChange:a.isOnChange)?e:!0,pu=(e,n)=>!Dr(B(e,n)).length&&ke(e,n);const yu={mode:Fe.onSubmit,reValidateMode:Fe.onChange,shouldFocusError:!0};function _u(e={}){let n={...yu,...e},t={submitCount:0,isDirty:!1,isLoading:Ye(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1},r={},a=ue(n.defaultValues)||ue(n.values)?pe(n.defaultValues||n.values)||{}:{},i=n.shouldUnregister?{}:pe(a),o={action:!1,mount:!1,watch:!1},s={mount:new Set,unMount:new Set,array:new Set,watch:new Set},l,d=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},k={values:Yr(),array:Yr(),state:Yr()},g=ka(n.mode),E=ka(n.reValidateMode),f=n.criteriaMode===Fe.all,T=v=>y=>{clearTimeout(d),d=setTimeout(v,y)},A=async v=>{if(!e.disabled&&(u.isValid||v)){const y=n.resolver?ye((await I()).errors):await w(r,!0);y!==t.isValid&&k.state.next({isValid:y})}},p=(v,y)=>{!e.disabled&&(u.isValidating||u.validatingFields)&&((v||Array.from(s.mount)).forEach(h=>{h&&(y?ee(t.validatingFields,h,y):ke(t.validatingFields,h))}),k.state.next({validatingFields:t.validatingFields,isValidating:!ye(t.validatingFields)}))},R=(v,y=[],h,H,U=!0,j=!0)=>{if(H&&h&&!e.disabled){if(o.action=!0,j&&Array.isArray(B(r,v))){const C=h(B(r,v),H.argA,H.argB);U&&ee(r,v,C)}if(j&&Array.isArray(B(t.errors,v))){const C=h(B(t.errors,v),H.argA,H.argB);U&&ee(t.errors,v,C),pu(t.errors,v)}if(u.touchedFields&&j&&Array.isArray(B(t.touchedFields,v))){const C=h(B(t.touchedFields,v),H.argA,H.argB);U&&ee(t.touchedFields,v,C)}u.dirtyFields&&(t.dirtyFields=Ln(a,i)),k.state.next({name:v,isDirty:L(v,y),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else ee(i,v,y)},S=(v,y)=>{ee(t.errors,v,y),k.state.next({errors:t.errors})},b=v=>{t.errors=v,k.state.next({errors:t.errors,isValid:!1})},O=(v,y,h,H)=>{const U=B(r,v);if(U){const j=B(i,v,se(h)?B(a,v):h);se(j)||H&&H.defaultChecked||y?ee(i,v,y?j:$r(U._f)):F(v,j),o.mount&&A()}},M=(v,y,h,H,U)=>{let j=!1,C=!1;const z={name:v};if(!e.disabled){const ge=!!(B(r,v)&&B(r,v)._f&&B(r,v)._f.disabled);if(!h||H){u.isDirty&&(C=t.isDirty,t.isDirty=z.isDirty=L(),j=C!==z.isDirty);const Ee=ge||ze(B(a,v),y);C=!!(!ge&&B(t.dirtyFields,v)),Ee||ge?ke(t.dirtyFields,v):ee(t.dirtyFields,v,!0),z.dirtyFields=t.dirtyFields,j=j||u.dirtyFields&&C!==!Ee}if(h){const Ee=B(t.touchedFields,v);Ee||(ee(t.touchedFields,v,h),z.touchedFields=t.touchedFields,j=j||u.touchedFields&&Ee!==h)}j&&U&&k.state.next(z)}return j?z:{}},K=(v,y,h,H)=>{const U=B(t.errors,v),j=u.isValid&&Ie(y)&&t.isValid!==y;if(e.delayError&&h?(l=T(()=>S(v,h)),l(e.delayError)):(clearTimeout(d),l=null,h?ee(t.errors,v,h):ke(t.errors,v)),(h?!ze(U,h):U)||!ye(H)||j){const C={...H,...j&&Ie(y)?{isValid:y}:{},errors:t.errors,name:v};t={...t,...C},k.state.next(C)}},I=async v=>{p(v,!0);const y=await n.resolver(i,n.context,fu(v||s.mount,r,n.criteriaMode,n.shouldUseNativeValidation));return p(v),y},V=async v=>{const{errors:y}=await I(v);if(v)for(const h of v){const H=B(y,h);H?ee(t.errors,h,H):ke(t.errors,h)}else t.errors=y;return y},w=async(v,y,h={valid:!0})=>{for(const H in v){const U=v[H];if(U){const{_f:j,...C}=U;if(j){const z=s.array.has(j.name),ge=U._f&&Ru(U._f);ge&&u.validatingFields&&p([H],!0);const Ee=await fa(U,i,f,n.shouldUseNativeValidation&&!y,z);if(ge&&u.validatingFields&&p([H]),Ee[j.name]&&(h.valid=!1,y))break;!y&&(B(Ee,j.name)?z?Eu(t.errors,Ee,j.name):ee(t.errors,j.name,Ee[j.name]):ke(t.errors,j.name))}!ye(C)&&await w(C,y,h)}}return h.valid},P=()=>{for(const v of s.unMount){const y=B(r,v);y&&(y._f.refs?y._f.refs.every(h=>!Cr(h)):!Cr(y._f.ref))&&rn(v)}s.unMount=new Set},L=(v,y)=>!e.disabled&&(v&&y&&ee(i,v,y),!ze(Q(),a)),_=(v,y,h)=>no(v,s,{...o.mount?i:se(y)?a:je(v)?{[v]:y}:y},h,y),c=v=>Dr(B(o.mount?i:a,v,e.shouldUnregister?B(a,v,[]):[])),F=(v,y,h={})=>{const H=B(r,v);let U=y;if(H){const j=H._f;j&&(!j.disabled&&ee(i,v,lo(y,j)),U=Rr(j.ref)&&fe(y)?"":y,io(j.ref)?[...j.ref.options].forEach(C=>C.selected=U.includes(C.value)):j.refs?Jn(j.ref)?j.refs.length>1?j.refs.forEach(C=>(!C.defaultChecked||!C.disabled)&&(C.checked=Array.isArray(U)?!!U.find(z=>z===C.value):U===C.value)):j.refs[0]&&(j.refs[0].checked=!!U):j.refs.forEach(C=>C.checked=C.value===U):Ot(j.ref)?j.ref.value="":(j.ref.value=U,j.ref.type||k.values.next({name:v,values:{...i}})))}(h.shouldDirty||h.shouldTouch)&&M(v,U,h.shouldTouch,h.shouldDirty,!0),h.shouldValidate&&J(v)},G=(v,y,h)=>{for(const H in y){const U=y[H],j=`${v}.${H}`,C=B(r,j);(s.array.has(v)||ue(U)||C&&!C._f)&&!dn(U)?G(j,U,h):F(j,U,h)}},Y=(v,y,h={})=>{const H=B(r,v),U=s.array.has(v),j=pe(y);ee(i,v,j),U?(k.array.next({name:v,values:{...i}}),(u.isDirty||u.dirtyFields)&&h.shouldDirty&&k.state.next({name:v,dirtyFields:Ln(a,i),isDirty:L(v,j)})):H&&!H._f&&!fe(j)?G(v,j,h):F(v,j,h),ga(v,s)&&k.state.next({...t}),k.values.next({name:o.mount?v:void 0,values:{...i}})},q=async v=>{o.mount=!0;const y=v.target;let h=y.name,H=!0;const U=B(r,h),j=()=>y.type?$r(U._f):Ji(v),C=z=>{H=Number.isNaN(z)||dn(z)&&isNaN(z.getTime())||ze(z,B(i,h,z))};if(U){let z,ge;const Ee=j(),an=v.type===fr.BLUR||v.type===fr.FOCUS_OUT,ls=!Au(U._f)&&!n.resolver&&!B(t.errors,h)&&!U._f.deps||cu(an,B(t.touchedFields,h),t.isSubmitted,E,g),jr=ga(h,s,an);ee(i,h,Ee),an?(U._f.onBlur&&U._f.onBlur(v),l&&l(0)):U._f.onChange&&U._f.onChange(v);const wr=M(h,Ee,an,!1),ds=!ye(wr)||jr;if(!an&&k.values.next({name:h,type:v.type,values:{...i}}),ls)return u.isValid&&(e.mode==="onBlur"?an&&A():A()),ds&&k.state.next({name:h,...jr?{}:wr});if(!an&&jr&&k.state.next({...t}),n.resolver){const{errors:qt}=await I([h]);if(C(Ee),H){const us=Aa(t.errors,r,h),Yt=Aa(qt,r,us.name||h);z=Yt.error,h=Yt.name,ge=ye(qt)}}else p([h],!0),z=(await fa(U,i,f,n.shouldUseNativeValidation))[h],p([h]),C(Ee),H&&(z?ge=!1:u.isValid&&(ge=await w(r,!0)));H&&(U._f.deps&&J(U._f.deps),K(h,ge,z,wr))}},$=(v,y)=>{if(B(t.errors,y)&&v.focus)return v.focus(),1},J=async(v,y={})=>{let h,H;const U=Bn(v);if(n.resolver){const j=await V(se(v)?v:U);h=ye(j),H=v?!U.some(C=>B(j,C)):h}else v?(H=(await Promise.all(U.map(async j=>{const C=B(r,j);return await w(C&&C._f?{[j]:C}:C)}))).every(Boolean),!(!H&&!t.isValid)&&A()):H=h=await w(r);return k.state.next({...!je(v)||u.isValid&&h!==t.isValid?{}:{name:v},...n.resolver||!v?{isValid:h}:{},errors:t.errors}),y.shouldFocus&&!H&&Un(r,$,v?U:s.mount),H},Q=v=>{const y={...o.mount?i:a};return se(v)?y:je(v)?B(y,v):v.map(h=>B(y,h))},Ae=(v,y)=>({invalid:!!B((y||t).errors,v),isDirty:!!B((y||t).dirtyFields,v),error:B((y||t).errors,v),isValidating:!!B(t.validatingFields,v),isTouched:!!B((y||t).touchedFields,v)}),De=v=>{v&&Bn(v).forEach(y=>ke(t.errors,y)),k.state.next({errors:v?t.errors:{}})},Ue=(v,y,h)=>{const H=(B(r,v,{_f:{}})._f||{}).ref,U=B(t.errors,v)||{},{ref:j,message:C,type:z,...ge}=U;ee(t.errors,v,{...ge,...y,ref:H}),k.state.next({name:v,errors:t.errors,isValid:!1}),h&&h.shouldFocus&&H&&H.focus&&H.focus()},He=(v,y)=>Ye(v)?k.values.subscribe({next:h=>v(_(void 0,y),h)}):_(v,y,!0),rn=(v,y={})=>{for(const h of v?Bn(v):s.mount)s.mount.delete(h),s.array.delete(h),y.keepValue||(ke(r,h),ke(i,h)),!y.keepError&&ke(t.errors,h),!y.keepDirty&&ke(t.dirtyFields,h),!y.keepTouched&&ke(t.touchedFields,h),!y.keepIsValidating&&ke(t.validatingFields,h),!n.shouldUnregister&&!y.keepDefaultValue&&ke(a,h);k.values.next({values:{...i}}),k.state.next({...t,...y.keepDirty?{isDirty:L()}:{}}),!y.keepIsValid&&A()},Pe=({disabled:v,name:y,field:h,fields:H,value:U})=>{if(Ie(v)&&o.mount||v){const j=v?void 0:se(U)?$r(h?h._f:B(H,y)._f):U;ee(i,y,j),M(y,j,!1,!1,!0)}},re=(v,y={})=>{let h=B(r,v);const H=Ie(y.disabled)||Ie(e.disabled);return ee(r,v,{...h||{},_f:{...h&&h._f?h._f:{ref:{name:v}},name:v,mount:!0,...y}}),s.mount.add(v),h?Pe({field:h,disabled:Ie(y.disabled)?y.disabled:e.disabled,name:v,value:y.value}):O(v,!0,y.value),{...H?{disabled:y.disabled||e.disabled}:{},...n.progressive?{required:!!y.required,min:Dn(y.min),max:Dn(y.max),minLength:Dn(y.minLength),maxLength:Dn(y.maxLength),pattern:Dn(y.pattern)}:{},name:v,onChange:q,onBlur:q,ref:U=>{if(U){re(v,y),h=B(r,v);const j=se(U.value)&&U.querySelectorAll&&U.querySelectorAll("input,select,textarea")[0]||U,C=Tu(j),z=h._f.refs||[];if(C?z.find(ge=>ge===j):j===h._f.ref)return;ee(r,v,{_f:{...h._f,...C?{refs:[...z.filter(Cr),j,...Array.isArray(B(a,v))?[{}]:[]],ref:{type:j.type,name:v}}:{ref:j}}}),O(v,!1,void 0,j)}else h=B(r,v,{}),h._f&&(h._f.mount=!1),(n.shouldUnregister||y.shouldUnregister)&&!(zi(s.array,v)&&o.action)&&s.unMount.add(v)}}},oe=()=>n.shouldFocusError&&Un(r,$,s.mount),be=v=>{Ie(v)&&(k.state.next({disabled:v}),Un(r,(y,h)=>{const H=B(r,h);H&&(y.disabled=H._f.disabled||v,Array.isArray(H._f.refs)&&H._f.refs.forEach(U=>{U.disabled=H._f.disabled||v}))},0,!1))},ce=(v,y)=>async h=>{let H;h&&(h.preventDefault&&h.preventDefault(),h.persist&&h.persist());let U=pe(i);if(k.state.next({isSubmitting:!0}),n.resolver){const{errors:j,values:C}=await I();t.errors=j,U=C}else await w(r);if(ke(t.errors,"root"),ye(t.errors)){k.state.next({errors:{}});try{await v(U,h)}catch(j){H=j}}else y&&await y({...t.errors},h),oe(),setTimeout(oe);if(k.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ye(t.errors)&&!H,submitCount:t.submitCount+1,errors:t.errors}),H)throw H},he=(v,y={})=>{B(r,v)&&(se(y.defaultValue)?Y(v,pe(B(a,v))):(Y(v,y.defaultValue),ee(a,v,pe(y.defaultValue))),y.keepTouched||ke(t.touchedFields,v),y.keepDirty||(ke(t.dirtyFields,v),t.isDirty=y.defaultValue?L(v,pe(B(a,v))):L()),y.keepError||(ke(t.errors,v),u.isValid&&A()),k.state.next({...t}))},An=(v,y={})=>{const h=v?pe(v):a,H=pe(h),U=ye(v),j=U?a:H;if(y.keepDefaultValues||(a=h),!y.keepValues){if(y.keepDirtyValues){const C=new Set([...s.mount,...Object.keys(Ln(a,i))]);for(const z of Array.from(C))B(t.dirtyFields,z)?ee(j,z,B(i,z)):Y(z,B(j,z))}else{if(Nt&&se(v))for(const C of s.mount){const z=B(r,C);if(z&&z._f){const ge=Array.isArray(z._f.refs)?z._f.refs[0]:z._f.ref;if(Rr(ge)){const Ee=ge.closest("form");if(Ee){Ee.reset();break}}}}r={}}i=e.shouldUnregister?y.keepDefaultValues?pe(a):{}:pe(j),k.array.next({values:{...j}}),k.values.next({values:{...j}})}s={mount:y.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!u.isValid||!!y.keepIsValid||!!y.keepDirtyValues,o.watch=!!e.shouldUnregister,k.state.next({submitCount:y.keepSubmitCount?t.submitCount:0,isDirty:U?!1:y.keepDirty?t.isDirty:!!(y.keepDefaultValues&&!ze(v,a)),isSubmitted:y.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:U?{}:y.keepDirtyValues?y.keepDefaultValues&&i?Ln(a,i):t.dirtyFields:y.keepDefaultValues&&v?Ln(a,v):y.keepDirty?t.dirtyFields:{},touchedFields:y.keepTouched?t.touchedFields:{},errors:y.keepErrors?t.errors:{},isSubmitSuccessful:y.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},tn=(v,y)=>An(Ye(v)?v(i):v,y);return{control:{register:re,unregister:rn,getFieldState:Ae,handleSubmit:ce,setError:Ue,_executeSchema:I,_getWatch:_,_getDirty:L,_updateValid:A,_removeUnmounted:P,_updateFieldArray:R,_updateDisabledField:Pe,_getFieldArray:c,_reset:An,_resetDefaultValues:()=>Ye(n.defaultValues)&&n.defaultValues().then(v=>{tn(v,n.resetOptions),k.state.next({isLoading:!1})}),_updateFormState:v=>{t={...t,...v}},_disableForm:be,_subjects:k,_proxyFormState:u,_setErrors:b,get _fields(){return r},get _formValues(){return i},get _state(){return o},set _state(v){o=v},get _defaultValues(){return a},get _names(){return s},set _names(v){s=v},get _formState(){return t},set _formState(v){t=v},get _options(){return n},set _options(v){n={...n,...v}}},trigger:J,register:re,handleSubmit:ce,watch:He,setValue:Y,getValues:Q,reset:tn,resetField:he,clearErrors:De,unregister:rn,setError:Ue,setFocus:(v,y={})=>{const h=B(r,v),H=h&&h._f;if(H){const U=H.refs?H.refs[0]:H.ref;U.focus&&(U.focus(),y.shouldSelect&&U.select())}},getFieldState:Ae}}function Su(e={}){const n=N.useRef(),t=N.useRef(),[r,a]=N.useState({isDirty:!1,isValidating:!1,isLoading:Ye(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Ye(e.defaultValues)?void 0:e.defaultValues});n.current||(n.current={..._u(e),formState:r});const i=n.current.control;return i._options=e,ht({subject:i._subjects.state,next:o=>{Qi(o,i._proxyFormState,i._updateFormState,!0)&&a({...i._formState})}}),N.useEffect(()=>i._disableForm(e.disabled),[i,e.disabled]),N.useEffect(()=>{if(i._proxyFormState.isDirty){const o=i._getDirty();o!==r.isDirty&&i._subjects.state.next({isDirty:o})}},[i,r.isDirty]),N.useEffect(()=>{e.values&&!ze(e.values,t.current)?(i._reset(e.values,i._options.resetOptions),t.current=e.values,a(o=>({...o}))):i._resetDefaultValues()},[e.values,i]),N.useEffect(()=>{e.errors&&i._setErrors(e.errors)},[e.errors,i]),N.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),N.useEffect(()=>{e.shouldUnregister&&i._subjects.values.next({values:i._getWatch()})},[e.shouldUnregister,i]),N.useEffect(()=>{n.current&&(n.current.watch=n.current.watch.bind({}))},[r]),n.current.formState=Zi(r,i),n.current}function uo(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(t=uo(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Z(){for(var e,n,t=0,r="",a=arguments.length;t<a;t++)(e=arguments[t])&&(n=uo(e))&&(r&&(r+=" "),r+=n);return r}const Nu=m.createContext(void 0),bu=()=>m.useContext(Nu);var hu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};function Ou(e,n){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${n}`}function Iu(e={}){const{name:n,hookName:t="useContext",providerName:r="Provider",errorMessage:a,defaultValue:i}=e,o=m.createContext(i),s=m.forwardRef((d,u)=>{var{children:k}=d,g=hu(d,["children"]);const E=N.useMemo(()=>g,Object.values(g));return N.createElement(o.Provider,{value:u?Object.assign(Object.assign({},E),{ref:u}):E},k)});function l(d=!0){var u;const k=m.useContext(o);if(!k&&d){const g=new Error(a??Ou(t,r));throw g.name="ContextError",(u=Error.captureStackTrace)===null||u===void 0||u.call(Error,g,l),g}return k}return o.displayName=n,[s,l]}const On=e=>Z({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Ku=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Kt=m.forwardRef((e,n)=>{var{className:t,size:r="medium",as:a="p",spacing:i,truncate:o,weight:s="regular",align:l,visuallyHidden:d,textColor:u}=e,k=Ku(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return N.createElement(a,Object.assign({},k,{ref:n,className:Z(t,"navds-body-long",`navds-body-long--${r}`,On({spacing:i,truncate:o,weight:s,align:l,visuallyHidden:d,textColor:u}))}))});var Lu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Re=m.forwardRef((e,n)=>{var{className:t,size:r="medium",as:a="p",spacing:i,truncate:o,weight:s="regular",align:l,visuallyHidden:d,textColor:u}=e,k=Lu(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return N.createElement(a,Object.assign({},k,{ref:n,className:Z(t,"navds-body-short",`navds-body-short--${r}`,On({spacing:i,truncate:o,weight:s,align:l,visuallyHidden:d,textColor:u}))}))});var Du=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Pu=m.forwardRef((e,n)=>{var{className:t,size:r="medium",spacing:a,uppercase:i,as:o="p",truncate:s,weight:l="regular",align:d,visuallyHidden:u,textColor:k}=e,g=Du(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return N.createElement(o,Object.assign({},g,{ref:n,className:Z(t,"navds-detail",On({spacing:a,truncate:s,weight:l,align:d,visuallyHidden:u,textColor:k,uppercase:i}),{"navds-detail--small":r==="small"})}))});var Fu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const ko=m.forwardRef((e,n)=>{var{className:t,size:r,spacing:a,as:i="p"}=e,o=Fu(e,["className","size","spacing","as"]);return N.createElement(i,Object.assign({},o,{ref:n,className:Z("navds-error-message","navds-label",t,On({spacing:a}),{"navds-label--small":r==="small"})}))});var Mu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Vu=m.forwardRef((e,n)=>{var{level:t="1",size:r,className:a,as:i,spacing:o,align:s,visuallyHidden:l,textColor:d}=e,u=Mu(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const k=i??`h${t}`;return N.createElement(k,Object.assign({},u,{ref:n,className:Z(a,"navds-heading",`navds-heading--${r}`,On({spacing:o,align:s,visuallyHidden:l,textColor:d}))}))});var Gu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};m.forwardRef((e,n)=>{var{className:t,spacing:r,as:a="p"}=e,i=Gu(e,["className","spacing","as"]);return N.createElement(a,Object.assign({},i,{ref:n,className:Z(t,"navds-ingress",{"navds-typo--spacing":!!r})}))});var ju=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const In=m.forwardRef((e,n)=>{var{className:t,size:r="medium",as:a="label",spacing:i,visuallyHidden:o,textColor:s}=e,l=ju(e,["className","size","as","spacing","visuallyHidden","textColor"]);return N.createElement(a,Object.assign({},l,{ref:n,className:Z(t,"navds-label",On({spacing:i,visuallyHidden:o,textColor:s}),{"navds-label--small":r==="small"})}))});function go(e,n=166){let t;function r(...a){const i=()=>{e.apply(this,a)};clearTimeout(t),t=setTimeout(i,n)}return r.clear=()=>{clearTimeout(t)},r}function $e(e,n){const t=Object.entries(e).filter(([r])=>!n.includes(r));return Object.fromEntries(t)}const ut=globalThis!=null&&globalThis.document?m.useLayoutEffect:()=>{};let ca=0;function wu(e){const[n,t]=m.useState(e),r=e||n;return m.useEffect(()=>{n==null&&(ca+=1,t(`aksel-id-${ca}`))},[n]),r}const pa=N.useId;function En(e){var n;if(pa!==void 0){const t=pa();return e??t.replace(/(:)/g,"")}return(n=wu(e))!==null&&n!==void 0?n:""}function ya(e,n=[]){const t=m.useRef(e);return m.useEffect(()=>{t.current=e}),m.useCallback((...r)=>{var a;return(a=t.current)===null||a===void 0?void 0:a.call(t,...r)},n)}function Eo({value:e,defaultValue:n,onChange:t}){const r=ya(t),[a,i]=m.useState(n),o=e!==void 0,s=o?e:a,l=ya(d=>{const k=typeof d=="function"?d(s):d;o||i(k),r(k)},[o,r,s]);return[s,l]}let _a=0;function Bu(e){const[n,t]=m.useState(e),r=e||n;return m.useEffect(()=>{n==null&&(_a+=1,t(`aksel-icon-${_a}`))},[n]),r}const Sa=N.useId;function Be(e){var n;return Sa!==void 0?Sa().replace(/(:)/g,""):(n=Bu(e))!==null&&n!==void 0?n:""}var Uu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Hu=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=Uu(e,["title","titleId"]);let i=Be();return i=t?r||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?m.createElement("title",{id:i},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var xu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const vo=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=xu(e,["title","titleId"]);let i=Be();return i=t?r||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?m.createElement("title",{id:i},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var qu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Yu=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=qu(e,["title","titleId"]);let i=Be();return i=t?r||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?m.createElement("title",{id:i},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var Cu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const $u=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=Cu(e,["title","titleId"]);let i=Be();return i=t?r||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?m.createElement("title",{id:i},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Ju=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const zu=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=Ju(e,["title","titleId"]);let i=Be();return i=t?r||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?m.createElement("title",{id:i},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Wu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const mo=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=Wu(e,["title","titleId"]);let i=Be();return i=t?r||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?m.createElement("title",{id:i},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Xu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Zu=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=Xu(e,["title","titleId"]);let i=Be();return i=t?r||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?m.createElement("title",{id:i},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Qu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const ek=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=Qu(e,["title","titleId"]);let i=Be();return i=t?r||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?m.createElement("title",{id:i},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var nk=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const rk=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=nk(e,["title","titleId"]);let i=Be();return i=t?r||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?m.createElement("title",{id:i},t):null,m.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var tk=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const ak=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=tk(e,["title","titleId"]);let i=Be();return i=t?r||"title-"+i:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?m.createElement("title",{id:i},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Lt(e,n,{checkForDefaultPrevented:t=!0}={}){return function(a){if(e==null||e(a),t===!1||!a.defaultPrevented)return n==null?void 0:n(a)}}const[GT,ik]=Iu({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function To(e){return n=>{e.forEach(t=>{typeof t=="function"?t(n):t!=null&&(t.current=n)})}}function Dt(...e){return N.useCallback(To(e),e)}function ok(e,n){const t=Object.assign({},n);for(const r in n){const a=e[r],i=n[r];/^on[A-Z]/.test(r)?a&&i?t[r]=(...s)=>{i(...s),a(...s)}:a&&(t[r]=a):r==="style"?t[r]=Object.assign(Object.assign({},a),i):r==="className"&&(t[r]=[a,i].filter(Boolean).join(" "))}return Object.assign(Object.assign({},e),t)}var sk=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const zn=m.forwardRef((e,n)=>{var t;const{children:r}=e,a=sk(e,["children"]);if(m.isValidElement(r)){const i=Object.prototype.propertyIsEnumerable.call(r.props,"ref")?r.props.ref:r.ref;return m.cloneElement(r,Object.assign(Object.assign({},ok(a,r.props)),{ref:n?To([n,i]):i}))}if(m.Children.count(r)>1){const i=new Error("Aksel: Components using 'asChild' expects to recieve a single React element child.");throw i.name="SlotError",(t=Error.captureStackTrace)===null||t===void 0||t.call(Error,i,zn),i}return null});var lk=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const dk=m.forwardRef((e,n)=>{var t,r,a,{rootElement:i,asChild:o}=e,s=lk(e,["rootElement","asChild"]);const l=(t=bu())===null||t===void 0?void 0:t.rootElement,d=(r=i??l)!==null&&r!==void 0?r:(a=globalThis==null?void 0:globalThis.document)===null||a===void 0?void 0:a.body,u=o?zn:"div";return d?gi.createPortal(N.createElement(u,Object.assign({ref:n,"data-aksel-portal":""},s)),d):null}),uk={global:{showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},Loader:{title:"Venter…"},Modal:{close:"Lukk"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"}},kk=m.createContext({translations:uk}),Na=/(\w+)/g;function gk(e,...n){const t=Array.isArray(e)?e:Ek(e);for(const r of n){if(!r)continue;let a=r;for(let i=0;i<t.length;i++){const o=a[t[i]];o!==void 0&&(a=o)}if(typeof a=="string")return a}throw new Error("Error translating key. The keypath does not resolve to a string.")}function Ek(e){const n=[];let t=Na.exec(e);for(;t;){const[,r,a]=t;n.push(r||a),t=Na.exec(e)}return n}const vk=/{[^}]*}/g;function Pr(e,...n){const r=m.useContext(kk).translations;return(i,o)=>{const s=gk(i,...n,...Array.isArray(r)?r.map(l=>l[e]):[r[e]]);return o?s.replace(vk,l=>{const d=l.substring(1,l.length-1);if(o[d]===void 0){const u=JSON.stringify(o);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${d}'. The following replacements were passed: '${u}'`)}return o[d]}):s}}var mk=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Tk=m.forwardRef((e,n)=>{var{className:t,size:r="medium",title:a,transparent:i=!1,variant:o="neutral",id:s}=e,l=mk(e,["className","size","title","transparent","variant","id"]);const d=En(),u=Pr("Loader");return N.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${d}`,ref:n,className:Z("navds-loader",t,`navds-loader--${r}`,`navds-loader--${o}`,{"navds-loader--transparent":i}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},$e(l,["children"])),N.createElement("title",{id:s??`loader-${d}`},a||u("title")),N.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),N.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var fk=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const fo=m.forwardRef((e,n)=>{var{as:t="button",variant:r="primary",className:a,children:i,size:o="medium",loading:s=!1,disabled:l,style:d,icon:u,iconPosition:k="left"}=e,g=fk(e,["as","variant","className","children","size","loading","disabled","style","icon","iconPosition"]);const E=m.useRef(null),[f,T]=m.useState(),A=Dt(E,n);ut(()=>{if(s){const S=window.requestAnimationFrame(()=>{var b,O;T((O=(b=E==null?void 0:E.current)===null||b===void 0?void 0:b.getBoundingClientRect())===null||O===void 0?void 0:O.width)});return()=>{T(void 0),cancelAnimationFrame(S)}}},[s,i]);const p=l??f?$e(g,["href"]):g,R=S=>{S.key===" "&&!l&&!f&&S.currentTarget.click()};return N.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},p,{ref:A,onKeyUp:Lt(p.onKeyUp,R),className:Z(a,"navds-button",`navds-button--${r}`,`navds-button--${o}`,{"navds-button--loading":f,"navds-button--icon-only":!!u&&!i,"navds-button--disabled":l??f}),style:Object.assign(Object.assign({},d),{width:f}),disabled:l??f?!0:void 0}),f?N.createElement(Tk,{size:o}):N.createElement(N.Fragment,null,u&&k==="left"&&N.createElement("span",{className:"navds-button__icon"},u),i&&N.createElement(In,{as:"span",size:o==="medium"?"medium":"small"},i),u&&k==="right"&&N.createElement("span",{className:"navds-button__icon"},u)))});var Rk=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Ak={error:ak,warning:$u,info:zu,success:Hu},ck=m.forwardRef((e,n)=>{var{children:t,className:r,variant:a,size:i="medium",fullWidth:o=!1,contentMaxWidth:s=!0,inline:l=!1,closeButton:d=!1,onClose:u}=e,k=Rk(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const g=Pr("Alert"),E=Ak[a];return N.createElement("div",Object.assign({},k,{ref:n,className:Z(r,"navds-alert",`navds-alert--${a}`,`navds-alert--${i}`,{"navds-alert--full-width":o,"navds-alert--inline":l,"navds-alert--close-button":d})}),N.createElement(E,{title:g(a),className:"navds-alert__icon"}),N.createElement(Kt,{as:"div",size:i,className:Z("navds-alert__wrapper",s&&"navds-alert__wrapper--maxwidth")},t),d&&!l&&N.createElement("div",{className:"navds-alert__button-wrapper"},N.createElement(fo,{className:"navds-alert__button",size:"small",variant:"tertiary-neutral",onClick:u,type:"button",icon:N.createElement(rk,{title:["error","warning"].includes(a)?g("closeAlert"):g("closeMessage")})})))}),Ro=()=>N.createElement(mo,{"aria-hidden":!0,className:"navds-form-field__readonly-icon"}),pk=()=>N.createElement(mo,{title:Pr("global")("readOnly"),className:"navds-form-field__readonly-icon"}),pr=m.createContext(null),Pt=(e,n)=>{var t,r,a;const{size:i,error:o,errorId:s}=e,l=m.useContext(pr),d=En(),u=(t=e.id)!==null&&t!==void 0?t:`${n}-${d}`,k=s??`${n}-error-${d}`,g=`${n}-description-${d}`,E=(l==null?void 0:l.disabled)||e.disabled,f=((l==null?void 0:l.readOnly)||e.readOnly)&&!E||void 0,T=!E&&!f&&!!(o||l!=null&&l.error),A=!E&&!f&&!!o&&typeof o!="boolean",p=Object.assign({},T?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:A,hasError:T,errorId:k,inputDescriptionId:g,size:(r=i??(l==null?void 0:l.size))!==null&&r!==void 0?r:"medium",readOnly:f,inputProps:Object.assign(Object.assign({id:u},p),{"aria-describedby":Z(e["aria-describedby"],{[g]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[k]:A,[(a=l==null?void 0:l.errorId)!==null&&a!==void 0?a:""]:T&&!!(l!=null&&l.error)})||void 0,disabled:E})}},Nn=Math.min,kn=Math.max,yr=Math.round,ir=Math.floor,Qe=e=>({x:e,y:e}),yk={left:"right",right:"left",bottom:"top",top:"bottom"},_k={start:"end",end:"start"};function kt(e,n,t){return kn(e,Nn(n,t))}function Wn(e,n){return typeof e=="function"?e(n):e}function vn(e){return e.split("-")[0]}function Xn(e){return e.split("-")[1]}function Ao(e){return e==="x"?"y":"x"}function Ft(e){return e==="y"?"height":"width"}function Fr(e){return["top","bottom"].includes(vn(e))?"y":"x"}function Mt(e){return Ao(Fr(e))}function Sk(e,n,t){t===void 0&&(t=!1);const r=Xn(e),a=Mt(e),i=Ft(a);let o=a==="x"?r===(t?"end":"start")?"right":"left":r==="start"?"bottom":"top";return n.reference[i]>n.floating[i]&&(o=_r(o)),[o,_r(o)]}function Nk(e){const n=_r(e);return[gt(e),n,gt(n)]}function gt(e){return e.replace(/start|end/g,n=>_k[n])}function bk(e,n,t){const r=["left","right"],a=["right","left"],i=["top","bottom"],o=["bottom","top"];switch(e){case"top":case"bottom":return t?n?a:r:n?r:a;case"left":case"right":return n?i:o;default:return[]}}function hk(e,n,t,r){const a=Xn(e);let i=bk(vn(e),t==="start",r);return a&&(i=i.map(o=>o+"-"+a),n&&(i=i.concat(i.map(gt)))),i}function _r(e){return e.replace(/left|right|bottom|top/g,n=>yk[n])}function Ok(e){return{top:0,right:0,bottom:0,left:0,...e}}function co(e){return typeof e!="number"?Ok(e):{top:e,right:e,bottom:e,left:e}}function Sr(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function en(e){return po(e)?(e.nodeName||"").toLowerCase():"#document"}function _e(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function Je(e){var n;return(n=(po(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function po(e){return e instanceof Node||e instanceof _e(e).Node}function ie(e){return e instanceof Element||e instanceof _e(e).Element}function Ke(e){return e instanceof HTMLElement||e instanceof _e(e).HTMLElement}function Et(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof _e(e).ShadowRoot}function Zn(e){const{overflow:n,overflowX:t,overflowY:r,display:a}=Se(e);return/auto|scroll|overlay|hidden|clip/.test(n+r+t)&&!["inline","contents"].includes(a)}function Ik(e){return["table","td","th"].includes(en(e))}function Vt(e){const n=Gt(),t=Se(e);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!n&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!n&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(t.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(t.contain||"").includes(r))}function Kk(e){let n=mn(e);for(;Ke(n)&&!Qn(n);){if(Vt(n))return n;n=mn(n)}return null}function Gt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Qn(e){return["html","body","#document"].includes(en(e))}function Se(e){return _e(e).getComputedStyle(e)}function Mr(e){return ie(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function mn(e){if(en(e)==="html")return e;const n=e.assignedSlot||e.parentNode||Et(e)&&e.host||Je(e);return Et(n)?n.host:n}function yo(e){const n=mn(e);return Qn(n)?e.ownerDocument?e.ownerDocument.body:e.body:Ke(n)&&Zn(n)?n:yo(n)}function Xe(e,n,t){var r;n===void 0&&(n=[]),t===void 0&&(t=!0);const a=yo(e),i=a===((r=e.ownerDocument)==null?void 0:r.body),o=_e(a);return i?n.concat(o,o.visualViewport||[],Zn(a)?a:[],o.frameElement&&t?Xe(o.frameElement):[]):n.concat(a,Xe(a,[],t))}function Lk(e){let n=e.activeElement;for(;((t=n)==null||(r=t.shadowRoot)==null?void 0:r.activeElement)!=null;){var t,r;n=n.shadowRoot.activeElement}return n}function Ze(e,n){if(!e||!n)return!1;const t=n.getRootNode&&n.getRootNode();if(e.contains(n))return!0;if(t&&Et(t)){let r=n;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function Dk(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function Pk(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(n=>{let{brand:t,version:r}=n;return t+"/"+r}).join(" "):navigator.userAgent}function Fk(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const n=/Android/i;return(n.test(Dk())||n.test(Pk()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function Mk(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function _o(e,n){const t=["mouse","pen"];return t.push("",void 0),t.includes(e)}function Vk(e){return"nativeEvent"in e}function Gk(e){return e.matches("html,body")}function Ce(e){return(e==null?void 0:e.ownerDocument)||document}function kr(e,n){if(n==null)return!1;if("composedPath"in e)return e.composedPath().includes(n);const t=e;return t.target!=null&&n.contains(t.target)}function So(e){return"composedPath"in e?e.composedPath()[0]:e.target}function ba(e,n,t){let{reference:r,floating:a}=e;const i=Fr(n),o=Mt(n),s=Ft(o),l=vn(n),d=i==="y",u=r.x+r.width/2-a.width/2,k=r.y+r.height/2-a.height/2,g=r[s]/2-a[s]/2;let E;switch(l){case"top":E={x:u,y:r.y-a.height};break;case"bottom":E={x:u,y:r.y+r.height};break;case"right":E={x:r.x+r.width,y:k};break;case"left":E={x:r.x-a.width,y:k};break;default:E={x:r.x,y:r.y}}switch(Xn(n)){case"start":E[o]-=g*(t&&d?-1:1);break;case"end":E[o]+=g*(t&&d?-1:1);break}return E}const jk=async(e,n,t)=>{const{placement:r="bottom",strategy:a="absolute",middleware:i=[],platform:o}=t,s=i.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(n));let d=await o.getElementRects({reference:e,floating:n,strategy:a}),{x:u,y:k}=ba(d,r,l),g=r,E={},f=0;for(let T=0;T<s.length;T++){const{name:A,fn:p}=s[T],{x:R,y:S,data:b,reset:O}=await p({x:u,y:k,initialPlacement:r,placement:g,strategy:a,middlewareData:E,rects:d,platform:o,elements:{reference:e,floating:n}});if(u=R??u,k=S??k,E={...E,[A]:{...E[A],...b}},O&&f<=50){f++,typeof O=="object"&&(O.placement&&(g=O.placement),O.rects&&(d=O.rects===!0?await o.getElementRects({reference:e,floating:n,strategy:a}):O.rects),{x:u,y:k}=ba(d,g,l)),T=-1;continue}}return{x:u,y:k,placement:g,strategy:a,middlewareData:E}};async function No(e,n){var t;n===void 0&&(n={});const{x:r,y:a,platform:i,rects:o,elements:s,strategy:l}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:k="floating",altBoundary:g=!1,padding:E=0}=Wn(n,e),f=co(E),A=s[g?k==="floating"?"reference":"floating":k],p=Sr(await i.getClippingRect({element:(t=await(i.isElement==null?void 0:i.isElement(A)))==null||t?A:A.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:d,rootBoundary:u,strategy:l})),R=k==="floating"?{...o.floating,x:r,y:a}:o.reference,S=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),b=await(i.isElement==null?void 0:i.isElement(S))?await(i.getScale==null?void 0:i.getScale(S))||{x:1,y:1}:{x:1,y:1},O=Sr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:R,offsetParent:S,strategy:l}):R);return{top:(p.top-O.top+f.top)/b.y,bottom:(O.bottom-p.bottom+f.bottom)/b.y,left:(p.left-O.left+f.left)/b.x,right:(O.right-p.right+f.right)/b.x}}const ha=e=>({name:"arrow",options:e,async fn(n){const{x:t,y:r,placement:a,rects:i,platform:o,elements:s,middlewareData:l}=n,{element:d,padding:u=0}=Wn(e,n)||{};if(d==null)return{};const k=co(u),g={x:t,y:r},E=Mt(a),f=Ft(E),T=await o.getDimensions(d),A=E==="y",p=A?"top":"left",R=A?"bottom":"right",S=A?"clientHeight":"clientWidth",b=i.reference[f]+i.reference[E]-g[E]-i.floating[f],O=g[E]-i.reference[E],M=await(o.getOffsetParent==null?void 0:o.getOffsetParent(d));let K=M?M[S]:0;(!K||!await(o.isElement==null?void 0:o.isElement(M)))&&(K=s.floating[S]||i.floating[f]);const I=b/2-O/2,V=K/2-T[f]/2-1,w=Nn(k[p],V),P=Nn(k[R],V),L=w,_=K-T[f]-P,c=K/2-T[f]/2+I,F=kt(L,c,_),G=!l.arrow&&Xn(a)!=null&&c!=F&&i.reference[f]/2-(c<L?w:P)-T[f]/2<0,Y=G?c<L?c-L:c-_:0;return{[E]:g[E]+Y,data:{[E]:F,centerOffset:c-F-Y,...G&&{alignmentOffset:Y}},reset:G}}}),wk=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var t,r;const{placement:a,middlewareData:i,rects:o,initialPlacement:s,platform:l,elements:d}=n,{mainAxis:u=!0,crossAxis:k=!0,fallbackPlacements:g,fallbackStrategy:E="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:T=!0,...A}=Wn(e,n);if((t=i.arrow)!=null&&t.alignmentOffset)return{};const p=vn(a),R=vn(s)===s,S=await(l.isRTL==null?void 0:l.isRTL(d.floating)),b=g||(R||!T?[_r(s)]:Nk(s));!g&&f!=="none"&&b.push(...hk(s,T,f,S));const O=[s,...b],M=await No(n,A),K=[];let I=((r=i.flip)==null?void 0:r.overflows)||[];if(u&&K.push(M[p]),k){const L=Sk(a,o,S);K.push(M[L[0]],M[L[1]])}if(I=[...I,{placement:a,overflows:K}],!K.every(L=>L<=0)){var V,w;const L=(((V=i.flip)==null?void 0:V.index)||0)+1,_=O[L];if(_)return{data:{index:L,overflows:I},reset:{placement:_}};let c=(w=I.filter(F=>F.overflows[0]<=0).sort((F,G)=>F.overflows[1]-G.overflows[1])[0])==null?void 0:w.placement;if(!c)switch(E){case"bestFit":{var P;const F=(P=I.map(G=>[G.placement,G.overflows.filter(Y=>Y>0).reduce((Y,q)=>Y+q,0)]).sort((G,Y)=>G[1]-Y[1])[0])==null?void 0:P[0];F&&(c=F);break}case"initialPlacement":c=s;break}if(a!==c)return{reset:{placement:c}}}return{}}}};async function Bk(e,n){const{placement:t,platform:r,elements:a}=e,i=await(r.isRTL==null?void 0:r.isRTL(a.floating)),o=vn(t),s=Xn(t),l=Fr(t)==="y",d=["left","top"].includes(o)?-1:1,u=i&&l?-1:1,k=Wn(n,e);let{mainAxis:g,crossAxis:E,alignmentAxis:f}=typeof k=="number"?{mainAxis:k,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...k};return s&&typeof f=="number"&&(E=s==="end"?f*-1:f),l?{x:E*u,y:g*d}:{x:g*d,y:E*u}}const Uk=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){const{x:t,y:r}=n,a=await Bk(n,e);return{x:t+a.x,y:r+a.y,data:a}}}},Hk=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:t,y:r,placement:a}=n,{mainAxis:i=!0,crossAxis:o=!1,limiter:s={fn:A=>{let{x:p,y:R}=A;return{x:p,y:R}}},...l}=Wn(e,n),d={x:t,y:r},u=await No(n,l),k=Fr(vn(a)),g=Ao(k);let E=d[g],f=d[k];if(i){const A=g==="y"?"top":"left",p=g==="y"?"bottom":"right",R=E+u[A],S=E-u[p];E=kt(R,E,S)}if(o){const A=k==="y"?"top":"left",p=k==="y"?"bottom":"right",R=f+u[A],S=f-u[p];f=kt(R,f,S)}const T=s.fn({...n,[g]:E,[k]:f});return{...T,data:{x:T.x-t,y:T.y-r}}}}};function bo(e){const n=Se(e);let t=parseFloat(n.width)||0,r=parseFloat(n.height)||0;const a=Ke(e),i=a?e.offsetWidth:t,o=a?e.offsetHeight:r,s=yr(t)!==i||yr(r)!==o;return s&&(t=i,r=o),{width:t,height:r,$:s}}function jt(e){return ie(e)?e:e.contextElement}function pn(e){const n=jt(e);if(!Ke(n))return Qe(1);const t=n.getBoundingClientRect(),{width:r,height:a,$:i}=bo(n);let o=(i?yr(t.width):t.width)/r,s=(i?yr(t.height):t.height)/a;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const xk=Qe(0);function ho(e){const n=_e(e);return!Gt()||!n.visualViewport?xk:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function qk(e,n,t){return n===void 0&&(n=!1),!t||n&&t!==_e(e)?!1:n}function Tn(e,n,t,r){n===void 0&&(n=!1),t===void 0&&(t=!1);const a=e.getBoundingClientRect(),i=jt(e);let o=Qe(1);n&&(r?ie(r)&&(o=pn(r)):o=pn(e));const s=qk(i,t,r)?ho(i):Qe(0);let l=(a.left+s.x)/o.x,d=(a.top+s.y)/o.y,u=a.width/o.x,k=a.height/o.y;if(i){const g=_e(i),E=r&&ie(r)?_e(r):r;let f=g.frameElement;for(;f&&r&&E!==g;){const T=pn(f),A=f.getBoundingClientRect(),p=Se(f),R=A.left+(f.clientLeft+parseFloat(p.paddingLeft))*T.x,S=A.top+(f.clientTop+parseFloat(p.paddingTop))*T.y;l*=T.x,d*=T.y,u*=T.x,k*=T.y,l+=R,d+=S,f=_e(f).frameElement}}return Sr({width:u,height:k,x:l,y:d})}function Yk(e){let{rect:n,offsetParent:t,strategy:r}=e;const a=Ke(t),i=Je(t);if(t===i)return n;let o={scrollLeft:0,scrollTop:0},s=Qe(1);const l=Qe(0);if((a||!a&&r!=="fixed")&&((en(t)!=="body"||Zn(i))&&(o=Mr(t)),Ke(t))){const d=Tn(t);s=pn(t),l.x=d.x+t.clientLeft,l.y=d.y+t.clientTop}return{width:n.width*s.x,height:n.height*s.y,x:n.x*s.x-o.scrollLeft*s.x+l.x,y:n.y*s.y-o.scrollTop*s.y+l.y}}function Ck(e){return Array.from(e.getClientRects())}function Oo(e){return Tn(Je(e)).left+Mr(e).scrollLeft}function $k(e){const n=Je(e),t=Mr(e),r=e.ownerDocument.body,a=kn(n.scrollWidth,n.clientWidth,r.scrollWidth,r.clientWidth),i=kn(n.scrollHeight,n.clientHeight,r.scrollHeight,r.clientHeight);let o=-t.scrollLeft+Oo(e);const s=-t.scrollTop;return Se(r).direction==="rtl"&&(o+=kn(n.clientWidth,r.clientWidth)-a),{width:a,height:i,x:o,y:s}}function Jk(e,n){const t=_e(e),r=Je(e),a=t.visualViewport;let i=r.clientWidth,o=r.clientHeight,s=0,l=0;if(a){i=a.width,o=a.height;const d=Gt();(!d||d&&n==="fixed")&&(s=a.offsetLeft,l=a.offsetTop)}return{width:i,height:o,x:s,y:l}}function zk(e,n){const t=Tn(e,!0,n==="fixed"),r=t.top+e.clientTop,a=t.left+e.clientLeft,i=Ke(e)?pn(e):Qe(1),o=e.clientWidth*i.x,s=e.clientHeight*i.y,l=a*i.x,d=r*i.y;return{width:o,height:s,x:l,y:d}}function Oa(e,n,t){let r;if(n==="viewport")r=Jk(e,t);else if(n==="document")r=$k(Je(e));else if(ie(n))r=zk(n,t);else{const a=ho(e);r={...n,x:n.x-a.x,y:n.y-a.y}}return Sr(r)}function Io(e,n){const t=mn(e);return t===n||!ie(t)||Qn(t)?!1:Se(t).position==="fixed"||Io(t,n)}function Wk(e,n){const t=n.get(e);if(t)return t;let r=Xe(e,[],!1).filter(s=>ie(s)&&en(s)!=="body"),a=null;const i=Se(e).position==="fixed";let o=i?mn(e):e;for(;ie(o)&&!Qn(o);){const s=Se(o),l=Vt(o);!l&&s.position==="fixed"&&(a=null),(i?!l&&!a:!l&&s.position==="static"&&!!a&&["absolute","fixed"].includes(a.position)||Zn(o)&&!l&&Io(e,o))?r=r.filter(u=>u!==o):a=s,o=mn(o)}return n.set(e,r),r}function Xk(e){let{element:n,boundary:t,rootBoundary:r,strategy:a}=e;const o=[...t==="clippingAncestors"?Wk(n,this._c):[].concat(t),r],s=o[0],l=o.reduce((d,u)=>{const k=Oa(n,u,a);return d.top=kn(k.top,d.top),d.right=Nn(k.right,d.right),d.bottom=Nn(k.bottom,d.bottom),d.left=kn(k.left,d.left),d},Oa(n,s,a));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Zk(e){return bo(e)}function Qk(e,n,t){const r=Ke(n),a=Je(n),i=t==="fixed",o=Tn(e,!0,i,n);let s={scrollLeft:0,scrollTop:0};const l=Qe(0);if(r||!r&&!i)if((en(n)!=="body"||Zn(a))&&(s=Mr(n)),r){const d=Tn(n,!0,i,n);l.x=d.x+n.clientLeft,l.y=d.y+n.clientTop}else a&&(l.x=Oo(a));return{x:o.left+s.scrollLeft-l.x,y:o.top+s.scrollTop-l.y,width:o.width,height:o.height}}function Ia(e,n){return!Ke(e)||Se(e).position==="fixed"?null:n?n(e):e.offsetParent}function Ko(e,n){const t=_e(e);if(!Ke(e))return t;let r=Ia(e,n);for(;r&&Ik(r)&&Se(r).position==="static";)r=Ia(r,n);return r&&(en(r)==="html"||en(r)==="body"&&Se(r).position==="static"&&!Vt(r))?t:r||Kk(e)||t}const eg=async function(e){let{reference:n,floating:t,strategy:r}=e;const a=this.getOffsetParent||Ko,i=this.getDimensions;return{reference:Qk(n,await a(t),r),floating:{x:0,y:0,...await i(t)}}};function ng(e){return Se(e).direction==="rtl"}const rg={convertOffsetParentRelativeRectToViewportRelativeRect:Yk,getDocumentElement:Je,getClippingRect:Xk,getOffsetParent:Ko,getElementRects:eg,getClientRects:Ck,getDimensions:Zk,getScale:pn,isElement:ie,isRTL:ng};function tg(e,n){let t=null,r;const a=Je(e);function i(){clearTimeout(r),t&&t.disconnect(),t=null}function o(s,l){s===void 0&&(s=!1),l===void 0&&(l=1),i();const{left:d,top:u,width:k,height:g}=e.getBoundingClientRect();if(s||n(),!k||!g)return;const E=ir(u),f=ir(a.clientWidth-(d+k)),T=ir(a.clientHeight-(u+g)),A=ir(d),R={rootMargin:-E+"px "+-f+"px "+-T+"px "+-A+"px",threshold:kn(0,Nn(1,l))||1};let S=!0;function b(O){const M=O[0].intersectionRatio;if(M!==l){if(!S)return o();M?o(!1,M):r=setTimeout(()=>{o(!1,1e-7)},100)}S=!1}try{t=new IntersectionObserver(b,{...R,root:a.ownerDocument})}catch{t=new IntersectionObserver(b,R)}t.observe(e)}return o(!0),i}function Ka(e,n,t,r){r===void 0&&(r={});const{ancestorScroll:a=!0,ancestorResize:i=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,d=jt(e),u=a||i?[...d?Xe(d):[],...Xe(n)]:[];u.forEach(p=>{a&&p.addEventListener("scroll",t,{passive:!0}),i&&p.addEventListener("resize",t)});const k=d&&s?tg(d,t):null;let g=-1,E=null;o&&(E=new ResizeObserver(p=>{let[R]=p;R&&R.target===d&&E&&(E.unobserve(n),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{E&&E.observe(n)})),t()}),d&&!l&&E.observe(d),E.observe(n));let f,T=l?Tn(e):null;l&&A();function A(){const p=Tn(e);T&&(p.x!==T.x||p.y!==T.y||p.width!==T.width||p.height!==T.height)&&t(),T=p,f=requestAnimationFrame(A)}return t(),()=>{u.forEach(p=>{a&&p.removeEventListener("scroll",t),i&&p.removeEventListener("resize",t)}),k&&k(),E&&E.disconnect(),E=null,l&&cancelAnimationFrame(f)}}const ag=(e,n,t)=>{const r=new Map,a={platform:rg,...t},i={...a.platform,_c:r};return jk(e,n,{...a,platform:i})},ig=e=>{function n(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:r,padding:a}=typeof e=="function"?e(t):e;return r&&n(r)?r.current!=null?ha({element:r.current,padding:a}).fn(t):{}:r?ha({element:r,padding:a}).fn(t):{}}}};var gr=typeof document<"u"?m.useLayoutEffect:m.useEffect;function Nr(e,n){if(e===n)return!0;if(typeof e!=typeof n)return!1;if(typeof e=="function"&&e.toString()===n.toString())return!0;let t,r,a;if(e&&n&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!=n.length)return!1;for(r=t;r--!==0;)if(!Nr(e[r],n[r]))return!1;return!0}if(a=Object.keys(e),t=a.length,t!==Object.keys(n).length)return!1;for(r=t;r--!==0;)if(!{}.hasOwnProperty.call(n,a[r]))return!1;for(r=t;r--!==0;){const i=a[r];if(!(i==="_owner"&&e.$$typeof)&&!Nr(e[i],n[i]))return!1}return!0}return e!==e&&n!==n}function Lo(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function La(e,n){const t=Lo(e);return Math.round(n*t)/t}function Da(e){const n=m.useRef(e);return gr(()=>{n.current=e}),n}function og(e){e===void 0&&(e={});const{placement:n="bottom",strategy:t="absolute",middleware:r=[],platform:a,elements:{reference:i,floating:o}={},transform:s=!0,whileElementsMounted:l,open:d}=e,[u,k]=m.useState({x:0,y:0,strategy:t,placement:n,middlewareData:{},isPositioned:!1}),[g,E]=m.useState(r);Nr(g,r)||E(r);const[f,T]=m.useState(null),[A,p]=m.useState(null),R=m.useCallback(G=>{G!=M.current&&(M.current=G,T(G))},[T]),S=m.useCallback(G=>{G!==K.current&&(K.current=G,p(G))},[p]),b=i||f,O=o||A,M=m.useRef(null),K=m.useRef(null),I=m.useRef(u),V=Da(l),w=Da(a),P=m.useCallback(()=>{if(!M.current||!K.current)return;const G={placement:n,strategy:t,middleware:g};w.current&&(G.platform=w.current),ag(M.current,K.current,G).then(Y=>{const q={...Y,isPositioned:!0};L.current&&!Nr(I.current,q)&&(I.current=q,Es.flushSync(()=>{k(q)}))})},[g,n,t,w]);gr(()=>{d===!1&&I.current.isPositioned&&(I.current.isPositioned=!1,k(G=>({...G,isPositioned:!1})))},[d]);const L=m.useRef(!1);gr(()=>(L.current=!0,()=>{L.current=!1}),[]),gr(()=>{if(b&&(M.current=b),O&&(K.current=O),b&&O){if(V.current)return V.current(b,O,P);P()}},[b,O,P,V]);const _=m.useMemo(()=>({reference:M,floating:K,setReference:R,setFloating:S}),[R,S]),c=m.useMemo(()=>({reference:b,floating:O}),[b,O]),F=m.useMemo(()=>{const G={position:t,left:0,top:0};if(!c.floating)return G;const Y=La(c.floating,u.x),q=La(c.floating,u.y);return s?{...G,transform:"translate("+Y+"px, "+q+"px)",...Lo(c.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:Y,top:q}},[t,s,c.floating,u.x,u.y]);return m.useMemo(()=>({...u,update:P,refs:_,elements:c,floatingStyles:F}),[u,P,_,c,F])}var xn=typeof document<"u"?m.useLayoutEffect:m.useEffect;let Jr=!1,sg=0;const Pa=()=>"floating-ui-"+sg++;function lg(){const[e,n]=m.useState(()=>Jr?Pa():void 0);return xn(()=>{e==null&&n(Pa())},[]),m.useEffect(()=>{Jr||(Jr=!0)},[]),e}const dg=ki.useId,ug=dg||lg;function kg(){const e=new Map;return{emit(n,t){var r;(r=e.get(n))==null||r.forEach(a=>a(t))},on(n,t){e.set(n,[...e.get(n)||[],t])},off(n,t){var r;e.set(n,((r=e.get(n))==null?void 0:r.filter(a=>a!==t))||[])}}}const gg=m.createContext(null),Eg=m.createContext(null),Do=()=>{var e;return((e=m.useContext(gg))==null?void 0:e.id)||null},wt=()=>m.useContext(Eg);function Bt(e){return"data-floating-ui-"+e}function Fa(e){const n=m.useRef(e);return xn(()=>{n.current=e}),n}const Ma=Bt("safe-polygon");function zr(e,n,t){return t&&!_o(t)?0:typeof e=="number"?e:e==null?void 0:e[n]}function vg(e,n){n===void 0&&(n={});const{open:t,onOpenChange:r,dataRef:a,events:i,elements:{domReference:o,floating:s},refs:l}=e,{enabled:d=!0,delay:u=0,handleClose:k=null,mouseOnly:g=!1,restMs:E=0,move:f=!0}=n,T=wt(),A=Do(),p=Fa(k),R=Fa(u),S=m.useRef(),b=m.useRef(),O=m.useRef(),M=m.useRef(),K=m.useRef(!0),I=m.useRef(!1),V=m.useRef(()=>{}),w=m.useCallback(()=>{var c;const F=(c=a.current.openEvent)==null?void 0:c.type;return(F==null?void 0:F.includes("mouse"))&&F!=="mousedown"},[a]);m.useEffect(()=>{if(!d)return;function c(){clearTimeout(b.current),clearTimeout(M.current),K.current=!0}return i.on("dismiss",c),()=>{i.off("dismiss",c)}},[d,i]),m.useEffect(()=>{if(!d||!p.current||!t)return;function c(G){w()&&r(!1,G)}const F=Ce(s).documentElement;return F.addEventListener("mouseleave",c),()=>{F.removeEventListener("mouseleave",c)}},[s,t,r,d,p,a,w]);const P=m.useCallback(function(c,F){F===void 0&&(F=!0);const G=zr(R.current,"close",S.current);G&&!O.current?(clearTimeout(b.current),b.current=setTimeout(()=>r(!1,c),G)):F&&(clearTimeout(b.current),r(!1,c))},[R,r]),L=m.useCallback(()=>{V.current(),O.current=void 0},[]),_=m.useCallback(()=>{if(I.current){const c=Ce(l.floating.current).body;c.style.pointerEvents="",c.removeAttribute(Ma),I.current=!1}},[l]);return m.useEffect(()=>{if(!d)return;function c(){return a.current.openEvent?["click","mousedown"].includes(a.current.openEvent.type):!1}function F(q){if(clearTimeout(b.current),K.current=!1,g&&!_o(S.current)||E>0&&zr(R.current,"open")===0)return;const $=zr(R.current,"open",S.current);$?b.current=setTimeout(()=>{r(!0,q)},$):r(!0,q)}function G(q){if(c())return;V.current();const $=Ce(s);if(clearTimeout(M.current),p.current){t||clearTimeout(b.current),O.current=p.current({...e,tree:T,x:q.clientX,y:q.clientY,onClose(){_(),L(),P(q)}});const Q=O.current;$.addEventListener("mousemove",Q),V.current=()=>{$.removeEventListener("mousemove",Q)};return}(S.current==="touch"?!Ze(s,q.relatedTarget):!0)&&P(q)}function Y(q){c()||p.current==null||p.current({...e,tree:T,x:q.clientX,y:q.clientY,onClose(){_(),L(),P(q)}})(q)}if(ie(o)){const q=o;return t&&q.addEventListener("mouseleave",Y),s==null||s.addEventListener("mouseleave",Y),f&&q.addEventListener("mousemove",F,{once:!0}),q.addEventListener("mouseenter",F),q.addEventListener("mouseleave",G),()=>{t&&q.removeEventListener("mouseleave",Y),s==null||s.removeEventListener("mouseleave",Y),f&&q.removeEventListener("mousemove",F),q.removeEventListener("mouseenter",F),q.removeEventListener("mouseleave",G)}}},[o,s,d,e,g,E,f,P,L,_,r,t,T,R,p,a]),xn(()=>{var c;if(d&&t&&(c=p.current)!=null&&c.__options.blockPointerEvents&&w()){const Y=Ce(s).body;if(Y.setAttribute(Ma,""),Y.style.pointerEvents="none",I.current=!0,ie(o)&&s){var F,G;const q=o,$=T==null||(F=T.nodesRef.current.find(J=>J.id===A))==null||(G=F.context)==null?void 0:G.elements.floating;return $&&($.style.pointerEvents=""),q.style.pointerEvents="auto",s.style.pointerEvents="auto",()=>{q.style.pointerEvents="",s.style.pointerEvents=""}}}},[d,t,A,s,o,T,p,a,w]),xn(()=>{t||(S.current=void 0,L(),_())},[t,L,_]),m.useEffect(()=>()=>{L(),clearTimeout(b.current),clearTimeout(M.current),_()},[d,o,L,_]),m.useMemo(()=>{if(!d)return{};function c(F){S.current=F.pointerType}return{reference:{onPointerDown:c,onPointerEnter:c,onMouseMove(F){t||E===0||(clearTimeout(M.current),M.current=setTimeout(()=>{K.current||r(!0,F.nativeEvent)},E))}},floating:{onMouseEnter(){clearTimeout(b.current)},onMouseLeave(F){i.emit("dismiss",{type:"mouseLeave",data:{returnFocus:!1}}),P(F.nativeEvent,!1)}}}},[i,d,E,t,r,P])}function Er(e,n){let t=e.filter(a=>{var i;return a.parentId===n&&((i=a.context)==null?void 0:i.open)}),r=t;for(;r.length;)r=e.filter(a=>{var i;return(i=r)==null?void 0:i.some(o=>{var s;return a.parentId===o.id&&((s=a.context)==null?void 0:s.open)})}),t=t.concat(r);return t}const mg=ki.useInsertionEffect,Tg=mg||(e=>e());function vr(e){const n=m.useRef(()=>{});return Tg(()=>{n.current=e}),m.useCallback(function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return n.current==null?void 0:n.current(...r)},[])}const fg={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Rg={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Ag=e=>{var n,t;return{escapeKeyBubbles:typeof e=="boolean"?e:(n=e==null?void 0:e.escapeKey)!=null?n:!1,outsidePressBubbles:typeof e=="boolean"?e:(t=e==null?void 0:e.outsidePress)!=null?t:!0}};function cg(e,n){n===void 0&&(n={});const{open:t,onOpenChange:r,events:a,nodeId:i,elements:{reference:o,domReference:s,floating:l},dataRef:d}=e,{enabled:u=!0,escapeKey:k=!0,outsidePress:g=!0,outsidePressEvent:E="pointerdown",referencePress:f=!1,referencePressEvent:T="pointerdown",ancestorScroll:A=!1,bubbles:p}=n,R=wt(),S=Do()!=null,b=vr(typeof g=="function"?g:()=>!1),O=typeof g=="function"?b:g,M=m.useRef(!1),{escapeKeyBubbles:K,outsidePressBubbles:I}=Ag(p),V=vr(P=>{if(!t||!u||!k||P.key!=="Escape")return;const L=R?Er(R.nodesRef.current,i):[];if(!K&&(P.stopPropagation(),L.length>0)){let _=!0;if(L.forEach(c=>{var F;if((F=c.context)!=null&&F.open&&!c.context.dataRef.current.__escapeKeyBubbles){_=!1;return}}),!_)return}a.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1,Vk(P)?P.nativeEvent:P)}),w=vr(P=>{const L=M.current;if(M.current=!1,L||typeof O=="function"&&!O(P))return;const _=So(P),c="["+Bt("inert")+"]",F=Ce(l).querySelectorAll(c);let G=ie(_)?_:null;for(;G&&!Qn(G);){const $=mn(G);if($===Ce(l).body||!ie($))break;G=$}if(F.length&&ie(_)&&!Gk(_)&&!Ze(_,l)&&Array.from(F).every($=>!Ze(G,$)))return;if(Ke(_)&&l){const $=_.clientWidth>0&&_.scrollWidth>_.clientWidth,J=_.clientHeight>0&&_.scrollHeight>_.clientHeight;let Q=J&&P.offsetX>_.clientWidth;if(J&&Se(_).direction==="rtl"&&(Q=P.offsetX<=_.offsetWidth-_.clientWidth),Q||$&&P.offsetY>_.clientHeight)return}const Y=R&&Er(R.nodesRef.current,i).some($=>{var J;return kr(P,(J=$.context)==null?void 0:J.elements.floating)});if(kr(P,l)||kr(P,s)||Y)return;const q=R?Er(R.nodesRef.current,i):[];if(q.length>0){let $=!0;if(q.forEach(J=>{var Q;if((Q=J.context)!=null&&Q.open&&!J.context.dataRef.current.__outsidePressBubbles){$=!1;return}}),!$)return}a.emit("dismiss",{type:"outsidePress",data:{returnFocus:S?{preventScroll:!0}:Fk(P)||Mk(P)}}),r(!1,P)});return m.useEffect(()=>{if(!t||!u)return;d.current.__escapeKeyBubbles=K,d.current.__outsidePressBubbles=I;function P(c){r(!1,c)}const L=Ce(l);k&&L.addEventListener("keydown",V),O&&L.addEventListener(E,w);let _=[];return A&&(ie(s)&&(_=Xe(s)),ie(l)&&(_=_.concat(Xe(l))),!ie(o)&&o&&o.contextElement&&(_=_.concat(Xe(o.contextElement)))),_=_.filter(c=>{var F;return c!==((F=L.defaultView)==null?void 0:F.visualViewport)}),_.forEach(c=>{c.addEventListener("scroll",P,{passive:!0})}),()=>{k&&L.removeEventListener("keydown",V),O&&L.removeEventListener(E,w),_.forEach(c=>{c.removeEventListener("scroll",P)})}},[d,l,s,o,k,O,E,t,r,A,u,K,I,V,w]),m.useEffect(()=>{M.current=!1},[O,E]),m.useMemo(()=>u?{reference:{onKeyDown:V,[fg[T]]:P=>{f&&(a.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1,P.nativeEvent))}},floating:{onKeyDown:V,[Rg[E]]:()=>{M.current=!0}}}:{},[u,a,f,E,T,r,V])}function pg(e){var n;e===void 0&&(e={});const{open:t=!1,onOpenChange:r,nodeId:a}=e,[i,o]=m.useState(null),s=((n=e.elements)==null?void 0:n.reference)||i,l=og(e),d=wt(),u=vr((b,O)=>{b&&(g.current.openEvent=O),r==null||r(b,O)}),k=m.useRef(null),g=m.useRef({}),E=m.useState(()=>kg())[0],f=ug(),T=m.useCallback(b=>{const O=ie(b)?{getBoundingClientRect:()=>b.getBoundingClientRect(),contextElement:b}:b;l.refs.setReference(O)},[l.refs]),A=m.useCallback(b=>{(ie(b)||b===null)&&(k.current=b,o(b)),(ie(l.refs.reference.current)||l.refs.reference.current===null||b!==null&&!ie(b))&&l.refs.setReference(b)},[l.refs]),p=m.useMemo(()=>({...l.refs,setReference:A,setPositionReference:T,domReference:k}),[l.refs,A,T]),R=m.useMemo(()=>({...l.elements,domReference:s}),[l.elements,s]),S=m.useMemo(()=>({...l,refs:p,elements:R,dataRef:g,nodeId:a,floatingId:f,events:E,open:t,onOpenChange:u}),[l,a,f,E,t,u,p,R]);return xn(()=>{const b=d==null?void 0:d.nodesRef.current.find(O=>O.id===a);b&&(b.context=S)}),m.useMemo(()=>({...l,context:S,refs:p,elements:R}),[l,p,R,S])}function yg(e,n){n===void 0&&(n={});const{open:t,onOpenChange:r,dataRef:a,events:i,refs:o,elements:{floating:s,domReference:l}}=e,{enabled:d=!0,keyboardOnly:u=!0}=n,k=m.useRef(""),g=m.useRef(!1),E=m.useRef();return m.useEffect(()=>{if(!d)return;const T=Ce(s).defaultView||window;function A(){!t&&Ke(l)&&l===Lk(Ce(l))&&(g.current=!0)}return T.addEventListener("blur",A),()=>{T.removeEventListener("blur",A)}},[s,l,t,d]),m.useEffect(()=>{if(!d)return;function f(T){(T.type==="referencePress"||T.type==="escapeKey")&&(g.current=!0)}return i.on("dismiss",f),()=>{i.off("dismiss",f)}},[i,d]),m.useEffect(()=>()=>{clearTimeout(E.current)},[]),m.useMemo(()=>d?{reference:{onPointerDown(f){let{pointerType:T}=f;k.current=T,g.current=!!(T&&u)},onMouseLeave(){g.current=!1},onFocus(f){var T;g.current||f.type==="focus"&&((T=a.current.openEvent)==null?void 0:T.type)==="mousedown"&&kr(a.current.openEvent,l)||r(!0,f.nativeEvent)},onBlur(f){g.current=!1;const T=f.relatedTarget,A=ie(T)&&T.hasAttribute(Bt("focus-guard"))&&T.getAttribute("data-type")==="outside";E.current=setTimeout(()=>{Ze(o.floating.current,T)||Ze(l,T)||A||r(!1,f.nativeEvent)})}}}:{},[d,u,l,o,a,r])}function Wr(e,n,t){const r=new Map;return{...t==="floating"&&{tabIndex:-1},...e,...n.map(a=>a?a[t]:null).concat(e).reduce((a,i)=>(i&&Object.entries(i).forEach(o=>{let[s,l]=o;if(s.indexOf("on")===0){if(r.has(s)||r.set(s,[]),typeof l=="function"){var d;(d=r.get(s))==null||d.push(l),a[s]=function(){for(var u,k=arguments.length,g=new Array(k),E=0;E<k;E++)g[E]=arguments[E];return(u=r.get(s))==null?void 0:u.map(f=>f(...g)).find(f=>f!==void 0)}}}else a[s]=l}),a),{})}}function _g(e){e===void 0&&(e=[]);const n=e,t=m.useCallback(i=>Wr(i,e,"reference"),n),r=m.useCallback(i=>Wr(i,e,"floating"),n),a=m.useCallback(i=>Wr(i,e,"item"),e.map(i=>i==null?void 0:i.item));return m.useMemo(()=>({getReferenceProps:t,getFloatingProps:r,getItemProps:a}),[t,r,a])}function Va(e,n){const[t,r]=e;let a=!1;const i=n.length;for(let o=0,s=i-1;o<i;s=o++){const[l,d]=n[o]||[0,0],[u,k]=n[s]||[0,0];d>=r!=k>=r&&t<=(u-l)*(r-d)/(k-d)+l&&(a=!a)}return a}function Sg(e,n){return e[0]>=n.x&&e[0]<=n.x+n.width&&e[1]>=n.y&&e[1]<=n.y+n.height}function Ng(e){e===void 0&&(e={});const{buffer:n=.5,blockPointerEvents:t=!1,requireIntent:r=!0}=e;let a,i=!1,o=null,s=null,l=performance.now();function d(k,g){const E=performance.now(),f=E-l;if(o===null||s===null||f===0)return o=k,s=g,l=E,null;const T=k-o,A=g-s,R=Math.sqrt(T*T+A*A)/f;return o=k,s=g,l=E,R}const u=k=>{let{x:g,y:E,placement:f,elements:T,onClose:A,nodeId:p,tree:R}=k;return function(b){function O(){clearTimeout(a),A()}if(clearTimeout(a),!T.domReference||!T.floating||f==null||g==null||E==null)return;const{clientX:M,clientY:K}=b,I=[M,K],V=So(b),w=b.type==="mouseleave",P=Ze(T.floating,V),L=Ze(T.domReference,V),_=T.domReference.getBoundingClientRect(),c=T.floating.getBoundingClientRect(),F=f.split("-")[0],G=g>c.right-c.width/2,Y=E>c.bottom-c.height/2,q=Sg(I,_),$=c.width>_.width,J=c.height>_.height,Q=($?_:c).left,Ae=($?_:c).right,De=(J?_:c).top,Ue=(J?_:c).bottom;if(P&&(i=!0,!w))return;if(L&&(i=!1),L&&!w){i=!0;return}if(w&&ie(b.relatedTarget)&&Ze(T.floating,b.relatedTarget)||R&&Er(R.nodesRef.current,p).some(Pe=>{let{context:re}=Pe;return re==null?void 0:re.open}))return;if(F==="top"&&E>=_.bottom-1||F==="bottom"&&E<=_.top+1||F==="left"&&g>=_.right-1||F==="right"&&g<=_.left+1)return O();let He=[];switch(F){case"top":He=[[Q,_.top+1],[Q,c.bottom-1],[Ae,c.bottom-1],[Ae,_.top+1]];break;case"bottom":He=[[Q,c.top+1],[Q,_.bottom-1],[Ae,_.bottom-1],[Ae,c.top+1]];break;case"left":He=[[c.right-1,Ue],[c.right-1,De],[_.left+1,De],[_.left+1,Ue]];break;case"right":He=[[_.right-1,Ue],[_.right-1,De],[c.left+1,De],[c.left+1,Ue]];break}function rn(Pe){let[re,oe]=Pe;switch(F){case"top":{const be=[$?re+n/2:G?re+n*4:re-n*4,oe+n+1],ce=[$?re-n/2:G?re+n*4:re-n*4,oe+n+1],he=[[c.left,G||$?c.bottom-n:c.top],[c.right,G?$?c.bottom-n:c.top:c.bottom-n]];return[be,ce,...he]}case"bottom":{const be=[$?re+n/2:G?re+n*4:re-n*4,oe-n],ce=[$?re-n/2:G?re+n*4:re-n*4,oe-n],he=[[c.left,G||$?c.top+n:c.bottom],[c.right,G?$?c.top+n:c.bottom:c.top+n]];return[be,ce,...he]}case"left":{const be=[re+n+1,J?oe+n/2:Y?oe+n*4:oe-n*4],ce=[re+n+1,J?oe-n/2:Y?oe+n*4:oe-n*4];return[...[[Y||J?c.right-n:c.left,c.top],[Y?J?c.right-n:c.left:c.right-n,c.bottom]],be,ce]}case"right":{const be=[re-n,J?oe+n/2:Y?oe+n*4:oe-n*4],ce=[re-n,J?oe-n/2:Y?oe+n*4:oe-n*4],he=[[Y||J?c.left+n:c.right,c.top],[Y?J?c.left+n:c.right:c.left+n,c.bottom]];return[be,ce,...he]}}}if(!Va([M,K],He)){if(i&&!q)return O();if(!w&&r){const Pe=d(b.clientX,b.clientY);if(Pe!==null&&Pe<.1)return O()}Va([M,K],rn([g,E]))?!i&&r&&(a=window.setTimeout(O,40)):O()}}};return u.__options={blockPointerEvents:t},u}function ve(e,n,t){return t?typeof t=="string"?{[`--__ac-${e}-${n}-xs`]:t}:Object.fromEntries(Object.entries(t).map(([r,a])=>[`--__ac-${e}-${n}-${r}`,a])):{}}const bg=e=>{switch(e){case"px":return"1px"}return e},Ga=(e,n,t,r,a)=>n.split(" ").map((i,o,s)=>{if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/s.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/s.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let l=`var(--a-${t}-${i})`;return r.includes(i)&&(l=bg(i)),a?i==="0"?"0":`calc(-1 * ${l})`:l}).join(" ");function Oe(e,n,t,r,a=!1,i=[]){if(!r)return{};if(typeof r=="string")return{[`--__ac-${e}-${n}-xs`]:Ga(n,r,t,i,a)};const o={};return Object.entries(r).forEach(([s,l])=>{o[`--__ac-${e}-${n}-${s}`]=Ga(n,l,t,i,a)}),o}const hg=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Og=({children:e,className:n,padding:t,paddingInline:r,paddingBlock:a,margin:i,marginInline:o,marginBlock:s,width:l,minWidth:d,maxWidth:u,height:k,minHeight:g,maxHeight:E,position:f,inset:T,top:A,right:p,left:R,bottom:S,overflow:b,overflowX:O,overflowY:M,flexBasis:K,flexGrow:I,flexShrink:V,gridColumn:w})=>{const P=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Oe("r","p","spacing",t)),Oe("r","pi","spacing",r)),Oe("r","pb","spacing",a)),Oe("r","m","spacing",i)),Oe("r","mi","spacing",o)),Oe("r","mb","spacing",s)),ve("r","w",l)),ve("r","minw",d)),ve("r","maxw",u)),ve("r","h",k)),ve("r","minh",g)),ve("r","maxh",E)),ve("r","position",f)),Oe("r","inset","spacing",T)),Oe("r","top","spacing",A)),Oe("r","right","spacing",p)),Oe("r","bottom","spacing",S)),Oe("r","left","spacing",R)),ve("r","overflow",b)),ve("r","overflowx",O)),ve("r","overflowy",M)),ve("r","flex-basis",K)),ve("r","flex-grow",I)),ve("r","flex-shrink",V)),ve("r","grid-column",w));return N.createElement(zn,{className:Z({className:n,"navds-r-p":t,"navds-r-pi":r,"navds-r-pb":a,"navds-r-m":i,"navds-r-mi":o,"navds-r-mb":s,"navds-r-w":l,"navds-r-minw":d,"navds-r-maxw":u,"navds-r-h":k,"navds-r-minh":g,"navds-r-maxh":E,"navds-r-position":f,"navds-r-inset":T,"navds-r-top":A,"navds-r-right":p,"navds-r-bottom":S,"navds-r-left":R,"navds-r-overflow":b,"navds-r-overflowx":O,"navds-r-overflowy":M,"navds-r-flex-basis":K,"navds-r-flex-grow":I,"navds-r-flex-shrink":V,"navds-r-grid-column":w}),style:P},e)};var Ig=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Po=m.forwardRef((e,n)=>{var{children:t,className:r,as:a="div",align:i,justify:o,wrap:s=!0,gap:l,style:d,direction:u="row",asChild:k}=e,g=Ig(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const E=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),Oe("stack","gap","spacing",l)),ve("stack","direction",u)),ve("stack","align",i)),ve("stack","justify",o)),f=k?zn:a;return N.createElement(Og,Object.assign({},g),N.createElement(f,Object.assign({},$e(g,hg),{ref:n,style:E,className:Z("navds-stack",r,{"navds-vstack":u==="column","navds-hstack":u==="row","navds-stack-gap":l,"navds-stack-align":i,"navds-stack-justify":o,"navds-stack-direction":u,"navds-stack-wrap":s})}),t))});var Kg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Fo=m.forwardRef((e,n)=>{var{as:t="div"}=e,r=Kg(e,["as"]);return N.createElement(Po,Object.assign({as:t},r,{ref:n,direction:"row"}))});var Lg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const br=m.forwardRef((e,n)=>{var{as:t="div"}=e,r=Lg(e,["as"]);return N.createElement(Po,Object.assign({as:t},r,{ref:n,direction:"column",wrap:!1}))});var Dg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Pg=m.forwardRef((e,n)=>{var{as:t="a",className:r,underline:a=!0,variant:i="action",inlineText:o=!1}=e,s=Dg(e,["as","className","underline","variant","inlineText"]);return N.createElement(t,Object.assign({},s,{ref:n,className:Z("navds-link",r,`navds-link--${i}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":o})}))});var Fg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Mg=m.forwardRef((e,n)=>{var{className:t,header:r,children:a,open:i,defaultOpen:o=!1,onClick:s,size:l="medium",onOpenChange:d}=e,u=Fg(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const[k,g]=Eo({defaultValue:o,value:i,onChange:d});return N.createElement("div",{className:Z("navds-read-more",`navds-read-more--${l}`,t,{"navds-read-more--open":k})},N.createElement("button",Object.assign({},u,{ref:n,type:"button",className:Z("navds-read-more__button","navds-body-short",{"navds-body-short--small":l==="small"}),onClick:Lt(s,()=>g(E=>!E)),"aria-expanded":k}),N.createElement(vo,{className:"navds-read-more__expand-icon","aria-hidden":!0}),N.createElement("span",null,r)),N.createElement(Kt,{as:"div","aria-hidden":!k,className:Z("navds-read-more__content",{"navds-read-more__content--closed":!k}),size:l},a))});var Vg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Gg=m.forwardRef((e,n)=>{var{children:t,className:r,variant:a,size:i="medium",icon:o}=e,s=Vg(e,["children","className","variant","size","icon"]);return N.createElement(Re,Object.assign({},s,{ref:n,as:"span",size:i==="medium"?"medium":"small",className:Z("navds-tag",r,`navds-tag--${a}`,`navds-tag--${i}`)}),o&&N.createElement("span",{className:"navds-tag__icon--left"},o),t)});var jg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const wg=m.forwardRef((e,n)=>{var{children:t,className:r,arrow:a=!0,placement:i="top",open:o,defaultOpen:s=!1,onOpenChange:l,offset:d,content:u,delay:k=150,id:g,keys:E,maxChar:f=80,describesChild:T=!1}=e,A=jg(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const[p,R]=Eo({defaultValue:s,value:o,onChange:l}),S=m.useRef(null),b=ik(!1),O=b?b.ref.current:void 0,{x:M,y:K,strategy:I,context:V,placement:w,middlewareData:{arrow:{x:P,y:L}={},hide:{referenceHidden:_}={}},refs:c}=pg({placement:i,open:p,onOpenChange:J=>R(J),middleware:[Uk(d||(a?10:2)),Hk(),wk({padding:5,fallbackPlacements:["bottom","top"]}),ig({element:S,padding:5})],whileElementsMounted:b?(J,Q,Ae)=>Ka(J,Q,Ae,{animationFrame:!0}):Ka,strategy:b?"fixed":void 0}),{getReferenceProps:F,getFloatingProps:G}=_g([vg(V,{handleClose:Ng(),restMs:k}),yg(V),cg(V)]),Y=En(g),q=Dt(n,c.setFloating);if(!t||(t==null?void 0:t.type)===N.Fragment||t===N.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;(u==null?void 0:u.length)>f&&p&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${u.length}
Tooltip-content: ${u}`);const $=T?p?{"aria-describedby":Y}:{title:u}:{"aria-label":u};return N.createElement(N.Fragment,null,N.createElement(zn,Object.assign({ref:c.setReference},F(),$,{"aria-keyshortcuts":E?E.join("+"):void 0}),t),N.createElement(dk,{rootElement:O,asChild:!0},p&&N.createElement("div",Object.assign({},G(Object.assign(Object.assign({},A),{ref:q,style:{position:I,top:K??0,left:M??0,visibility:_?"hidden":"visible"},role:"tooltip",id:Y,className:Z("navds-tooltip","navds-detail navds-detail--small",r)})),{"data-side":w}),u,E&&N.createElement("span",{className:"navds-tooltip__keys","aria-hidden":!0},E.map(J=>N.createElement(Pu,{as:"kbd",key:J,className:"navds-tooltip__key"},J))),a&&N.createElement("div",{ref:J=>{S.current=J},className:"navds-tooltip__arrow",style:{left:P!=null?`${P}px`:"",top:L!=null?`${L}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[w]]:"-3.5px"}}))))}),Bg=e=>{const n=Pt(e,"fieldset"),{inputProps:t}=n;return Object.assign(Object.assign({},n),{inputProps:{"aria-invalid":t["aria-invalid"],"aria-describedby":t["aria-describedby"]}})};var Ug=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Hg=m.forwardRef((e,n)=>{var t,r,a;const{inputProps:i,errorId:o,showErrorMsg:s,hasError:l,size:d,readOnly:u,inputDescriptionId:k}=Bg(e),g=m.useContext(pr),{children:E,className:f,errorPropagation:T=!0,legend:A,description:p,hideLegend:R,nativeReadOnly:S=!0}=e,b=Ug(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return N.createElement(pr.Provider,{value:{error:T?(t=e.error)!==null&&t!==void 0?t:g==null?void 0:g.error:void 0,errorId:Z({[o]:s,[(r=g==null?void 0:g.errorId)!==null&&r!==void 0?r:""]:!!(g!=null&&g.error)}),size:d,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:u}},N.createElement("fieldset",Object.assign({},$e(b,["errorId","error","size","readOnly"]),$e(i,["aria-describedby","aria-invalid"]),{ref:n,className:Z(f,"navds-fieldset",`navds-fieldset--${d}`,{"navds-fieldset--error":l,"navds-fieldset--readonly":u})}),N.createElement(In,{size:d,as:"legend",className:Z("navds-fieldset__legend",{"navds-sr-only":!!R})},u&&(S?N.createElement(Ro,null):N.createElement(pk,null)),A),!!p&&N.createElement(Re,{className:Z("navds-fieldset__description",{"navds-sr-only":!!R}),id:k,size:d??"medium",as:"div"},e.description),E,N.createElement("div",{id:o,"aria-relevant":"additions removals","aria-live":"polite",className:"navds-fieldset__error"},s&&N.createElement(ko,{size:d},e.error))))});var xg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Mo=N.createContext(null),qg=m.forwardRef((e,n)=>{var t,r,{children:a,className:i,name:o,defaultValue:s,value:l,onChange:d=()=>{},required:u,readOnly:k}=e,g=xg(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const E=m.useContext(pr),f=En();return N.createElement(Hg,Object.assign({},g,{readOnly:k,ref:n,className:Z(i,"navds-radio-group",`navds-radio-group--${(r=(t=g.size)!==null&&t!==void 0?t:E==null?void 0:E.size)!==null&&r!==void 0?r:"medium"}`),nativeReadOnly:!1}),N.createElement(Mo.Provider,{value:{name:o??`radioGroupName-${f}`,defaultValue:s,value:l,onChange:d,required:u}},N.createElement("div",{className:"navds-radio-buttons"},a)))});var Yg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Cg=e=>{const n=m.useContext(Mo),t=Pt($e(e,["description"]),"radio"),{inputProps:r,readOnly:a}=t,i=Yg(t,["inputProps","readOnly"]);return n||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},i),{readOnly:a,inputProps:Object.assign(Object.assign({},r),{name:n==null?void 0:n.name,defaultChecked:(n==null?void 0:n.defaultValue)===void 0?void 0:(n==null?void 0:n.defaultValue)===e.value,checked:(n==null?void 0:n.value)===void 0?void 0:(n==null?void 0:n.value)===e.value,onChange:o=>{var s,l;a||((s=e.onChange)===null||s===void 0||s.call(e,o),(l=n==null?void 0:n.onChange)===null||l===void 0||l.call(n,e.value))},onClick:o=>{var s;if(a){o.preventDefault();return}(s=e==null?void 0:e.onClick)===null||s===void 0||s.call(e,o)},required:n==null?void 0:n.required,type:"radio"})})},ja=m.forwardRef((e,n)=>{const{inputProps:t,size:r,hasError:a,readOnly:i}=Cg(e),o=En(),s=En();return N.createElement("div",{className:Z(e.className,"navds-radio",`navds-radio--${r}`,{"navds-radio--error":a,"navds-radio--disabled":t.disabled,"navds-radio--readonly":i})},N.createElement("input",Object.assign({},$e(e,["children","size","description","readOnly"]),$e(t,["aria-invalid"]),{"aria-labelledby":Z(o,!!e["aria-labelledby"]&&e["aria-labelledby"],{[s]:e.description}),className:"navds-radio__input",ref:n})),N.createElement("label",{htmlFor:t.id,className:"navds-radio__label"},N.createElement("span",{className:"navds-radio__content"},N.createElement(Re,{as:"span",id:o,size:r,"aria-hidden":!0},e.children),e.description&&N.createElement(Re,{as:"span",id:s,size:r,className:"navds-form-field__subdescription navds-radio__description","aria-hidden":!0},e.description))))});var $g=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const wa=(e,n,t)=>{const{outerHeightStyle:r,overflow:a}=n;return t.current<20&&(r>0&&Math.abs((e.outerHeightStyle||0)-r)>1||e.overflow!==a)?(t.current+=1,n):e},Ba=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function or(e){return parseInt(e,10)||0}const Jg=m.forwardRef((e,n)=>{var t,r,{className:a,onChange:i,maxRows:o,minRows:s=1,autoScrollbar:l,style:d,value:u}=e,k=$g(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:g}=m.useRef(u!=null),E=m.useRef(null),f=Dt(E,n),T=m.useRef(null),A=m.useRef(0),[p,R]=m.useState({outerHeightStyle:0}),S=N.useCallback(()=>{const K=E.current,V=Ba(K).getComputedStyle(K);if(V.width==="0px")return{outerHeightStyle:0};const w=T.current;w.style.width=V.width,w.value=K.value||k.placeholder||"x",w.value.slice(-1)===`
`&&(w.value+=" ");const P=V.boxSizing,L=or(V.paddingBottom)+or(V.paddingTop),_=or(V.borderBottomWidth)+or(V.borderTopWidth),c=w.scrollHeight-L;w.value="x";const F=w.scrollHeight-L;let G=c;s&&(G=Math.max(Number(s)*F,G)),o&&(G=Math.min(Number(o)*F,G)),G=Math.max(G,F);const Y=G+(P==="border-box"?L+_:0),q=Math.abs(G-c)<=1;return{outerHeightStyle:Y,overflow:q}},[o,s,k.placeholder]),b=()=>{const K=S();Ua(K)||R(I=>wa(I,K,A))};ut(()=>{const K=()=>{const L=S();Ua(L)||gi.flushSync(()=>{R(_=>wa(_,L,A))})},I=go(()=>{var L,_,c;if(A.current=0,!((L=E.current)===null||L===void 0)&&L.style.height||!((_=E.current)===null||_===void 0)&&_.style.width){((c=E.current)===null||c===void 0?void 0:c.style.overflow)==="hidden"&&R(F=>Object.assign(Object.assign({},F),{overflow:!1}));return}K()}),V=E.current,w=Ba(V);w.addEventListener("resize",I);let P;return typeof ResizeObserver<"u"&&(P=new ResizeObserver(I),P.observe(V)),()=>{I.clear(),w.removeEventListener("resize",I),P&&P.disconnect()}},[S]),ut(()=>{b()}),m.useEffect(()=>{A.current=0},[u]);const O=K=>{A.current=0,g||b(),i&&i(K)},M=Object.assign({"--__ac-textarea-height":p.outerHeightStyle+"px",overflow:p.overflow&&!l&&!(!((t=E.current)===null||t===void 0)&&t.style.height)&&!(!((r=E.current)===null||r===void 0)&&r.style.width)?"hidden":void 0},d);return N.createElement(N.Fragment,null,N.createElement("textarea",Object.assign({value:u,onChange:O,ref:f,rows:s,style:M},k,{className:a})),N.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:T,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},d)}))});function Ua(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const zg=({maxLengthId:e,maxLength:n,currentLength:t,size:r,i18n:a})=>{const i=Pr("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),o=n-t,[s,l]=m.useState(o);return m.useEffect(()=>{const d=go(()=>{l(o)},2e3);return d(),()=>{d.clear()}},[o]),N.createElement(N.Fragment,null,N.createElement("span",{id:e,className:"navds-sr-only"},i("maxLength",{maxLength:n})),o<20&&N.createElement("span",{role:"status",className:"navds-textarea__sr-counter navds-sr-only"},Ha(s,i)),N.createElement(Re,{className:Z("navds-textarea__counter",{"navds-textarea__counter--error":o<0}),size:r},Ha(o,i)))},Ha=(e,n)=>e<0?n("charsTooMany",{chars:Math.abs(e)}):n("charsLeft",{chars:e});var Wg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Xg=m.forwardRef((e,n)=>{var t,r,a;const{inputProps:i,errorId:o,showErrorMsg:s,hasError:l,size:d,inputDescriptionId:u}=Pt(e,"textarea"),{label:k,className:g,description:E,maxLength:f,hideLabel:T=!1,resize:A,UNSAFE_autoScrollbar:p,i18n:R,readOnly:S}=e,b=Wg(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),O=En(),M=f!==void 0&&f>0,[K,I]=m.useState((t=e==null?void 0:e.defaultValue)!==null&&t!==void 0?t:""),V=()=>{let P=b!=null&&b.minRows?b==null?void 0:b.minRows:3;return d==="small"&&(P=b!=null&&b.minRows?b==null?void 0:b.minRows:2),P},w=Z(i["aria-describedby"],{[O??""]:M});return N.createElement("div",{className:Z(g,"navds-form-field",`navds-form-field--${d}`,{"navds-form-field--disabled":!!i.disabled,"navds-form-field--readonly":S,"navds-textarea--readonly":S,"navds-textarea--error":l,"navds-textarea--autoscrollbar":p,[`navds-textarea--resize-${A===!0?"both":A}`]:A})},N.createElement(In,{htmlFor:i.id,size:d,className:Z("navds-form-field__label",{"navds-sr-only":T})},S&&N.createElement(Ro,null),k),!!E&&N.createElement(Re,{className:Z("navds-form-field__description",{"navds-sr-only":T}),id:u,size:d,as:"div"},E),N.createElement(Jg,Object.assign({},$e(b,["error","errorId","size"]),i,{onChange:Lt(e.onChange,e.value===void 0?P=>I(P.target.value):void 0),minRows:V(),autoScrollbar:p,ref:n,readOnly:S,className:Z("navds-textarea__input","navds-body-short",`navds-body-short--${d??"medium"}`)},w?{"aria-describedby":w}:{})),M&&!S&&!i.disabled&&N.createElement(zg,{maxLengthId:O,maxLength:f,currentLength:(a=(r=e.value)===null||r===void 0?void 0:r.length)!==null&&a!==void 0?a:K.length,size:d,i18n:R}),N.createElement("div",{className:"navds-form-field__error",id:o,"aria-relevant":"additions removals","aria-live":"polite"},s&&N.createElement(ko,{size:d},e.error)))});function Zg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vo={exports:{}},Pn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xa;function Qg(){if(xa)return Pn;xa=1;var e=N,n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(s,l,d){var u,k={},g=null,E=null;d!==void 0&&(g=""+d),l.key!==void 0&&(g=""+l.key),l.ref!==void 0&&(E=l.ref);for(u in l)r.call(l,u)&&!i.hasOwnProperty(u)&&(k[u]=l[u]);if(s&&s.defaultProps)for(u in l=s.defaultProps,l)k[u]===void 0&&(k[u]=l[u]);return{$$typeof:n,type:s,key:g,ref:E,props:k,_owner:a.current}}return Pn.Fragment=t,Pn.jsx=o,Pn.jsxs=o,Pn}Vo.exports=Qg();var ne=Vo.exports;const eE=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:ne.jsx(ck,{variant:"warning",size:"small",children:ne.jsx(br,{gap:"2",children:N.Children.map(e,n=>ne.jsx(Re,{size:"small",children:n},ou(n)?n.key:n))})}),Rn={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};Ve(Rn);Ve(Rn);const hr="#B7B1A9",Go=4,nE=(e,n,t)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${hr};
    border-radius: ${Go}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${n}px;
    margin-left: ${t}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${hr};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    top: 0;
    margin-top: -1px;
    position: absolute;
    left: ${e}px;
    transform: rotate(45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`,rE=(e,n,t)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${hr};
    border-radius: ${Go}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${n}px;
    margin-left: ${t}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${hr};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    left: 0;
    margin-left: -1px;
    position: absolute;
    top: ${e}px;
    transform: rotate(-45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`,tE=(e,n,t,r)=>n?rE(e,t,r):nE(e,t,r),aE=(e,n,t)=>t?"":n?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,iE=({children:e,alignOffset:n=0,alignLeft:t=!1,marginTop:r=0,marginLeft:a=0,hideBorder:i=!1})=>ne.jsxs(ne.Fragment,{children:[ne.jsx("style",{dangerouslySetInnerHTML:{__html:tE(n,t,r,a)}}),ne.jsx("div",{className:aE(n,t,i),children:e})]});var jo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function t(){for(var i="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(i=a(i,r.call(this,s)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return t.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var s in i)n.call(i,s)&&i[s]&&(o=a(o,this&&this[s]||s));return o}function a(i,o){return o?i?i+" "+o:i+o:i}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(jo);var oE=jo.exports;const Ne=Zg(oE),sE="_borderbox_hicl4_1",lE="_error_hicl4_4",dE="_warning_hicl4_7",uE={borderbox:sE,error:lE,warning:dE};Ne.bind(uE);const kE="_aksjonspunkt_kn1hn_1",gE="_erAksjonspunktApent_kn1hn_4",EE="_erIkkeGodkjentAvBeslutter_kn1hn_8",vE={aksjonspunkt:kE,erAksjonspunktApent:gE,erIkkeGodkjentAvBeslutter:EE};Ne.bind(vE);Ve(Rn);Ve(Rn);const mE="_tooltip_h8akz_1",TE="_tooltiptext_h8akz_5",fE="_left_h8akz_22",RE="_top_h8akz_27",AE="_right_h8akz_30",cE="_bottom_h8akz_34",pE="_showTooltip_h8akz_1",vt={tooltip:mE,tooltiptext:TE,left:fE,top:RE,right:AE,bottom:cE,showTooltip:pE},yE=Ne.bind(vt),_E=({children:e,content:n,alignRight:t=!1,alignLeft:r=!1,alignTop:a=!1,alignBottom:i=!1})=>ne.jsxs("div",{className:vt.tooltip,children:[ne.jsx("span",{className:yE(vt.tooltiptext,{right:t||!r&&!a&&!i,left:r,top:a,bottom:i}),children:n}),e]}),SE=N.forwardRef(({onClick:e=()=>{},onMouseDown:n,tabIndex:t=-1,className:r="",src:a,srcHover:i,alt:o,onKeyDown:s,tooltip:l,alignTooltipLeft:d=!1},u)=>{const[k,g]=m.useState(!1),E=m.useCallback(()=>{g(!0)},[]),f=m.useCallback(()=>{g(!1)},[]),T=m.useCallback(R=>{(R.key==="Enter"||R.key===" ")&&(s&&s(R),R.preventDefault())},[]),A=i&&k?i:a,p=ne.jsx("img",{ref:u,className:r,src:A,alt:o,tabIndex:t,onMouseOver:E,onMouseOut:f,onFocus:E,onBlur:f,onKeyDown:T,onMouseDown:n,onClick:e});return l?ne.jsx(_E,{content:l,alignLeft:d,children:p}):p});SE.displayName="Image";const NE="_flexColumnNew_1vdv1_1",bE={flexColumnNew:NE},hE=Ne.bind(bE),Fn=({children:e,className:n})=>ne.jsx("div",{className:hE("flexColumnNew",n),children:e}),OE="_flexRow_1yf0y_1",IE="_spaceBetween_1yf0y_9",KE="_alignItemsToBaseline_1yf0y_12",LE="_alignItemsToFlexEnd_1yf0y_15",DE="_justifyItemsToFlexEnd_1yf0y_18",PE="_wrap_1yf0y_21",FE={flexRow:OE,spaceBetween:IE,alignItemsToBaseline:KE,alignItemsToFlexEnd:LE,justifyItemsToFlexEnd:DE,wrap:PE},ME=Ne.bind(FE),qa=({children:e,spaceBetween:n=!1,alignItemsToBaseline:t=!1,alignItemsToFlexEnd:r=!1,wrap:a=!1,className:i})=>ne.jsx("div",{className:ME("flexRow",{spaceBetween:n},{alignItemsToBaseline:t},{alignItemsToFlexEnd:r},{wrap:a},i),children:e}),VE="_flexContainer_1dk1o_1",GE="_fluid_1dk1o_6",jE="_fullHeight_1dk1o_9",wE="_flexWrap_1dk1o_17",BE={flexContainer:VE,fluid:GE,fullHeight:jE,flexWrap:wE},UE=Ne.bind(BE),HE=({children:e,wrap:n=!1,fullHeight:t=!1})=>ne.jsx("div",{className:UE("flexContainer","fluid",{flexWrap:n,fullHeight:t}),children:e});Ve(Rn);const xE="_row_1lxv9_1",qE="_harHover_1lxv9_4",YE="_rowHeader_1lxv9_7",CE="_grayHeader_1lxv9_12",$E="_rowContent_1lxv9_15",JE="_selected_1lxv9_18",zE="_bold_1lxv9_22",WE="_dashedBottomBorder_1lxv9_25",XE="_solidBottomBorder_1lxv9_28",ZE="_apLeftBorder_1lxv9_31",QE="_noBottomBorder_1lxv9_34",wo={row:xE,harHover:qE,rowHeader:YE,grayHeader:CE,rowContent:$E,selected:JE,bold:zE,dashedBottomBorder:WE,solidBottomBorder:XE,apLeftBorder:ZE,noBottomBorder:QE},ev=Ne.bind(wo),nv=(e,n,t)=>r=>{e&&r.button===0&&e(r,n,t)},Bo=e=>e.tagName==="TR"?e:Bo(e.parentElement),Ya=(e,n)=>{const t=Bo(e.target),r=(n?t.nextSibling:t.previousSibling)||t;r&&(r.focus(),e.preventDefault())},rv=(e,n,t,r)=>a=>{a.key==="ArrowDown"?Ya(a,!0):a.key==="ArrowUp"?Ya(a,!1):n&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(n(a,t,r),a.preventDefault()):e&&n&&a.target.tagName!=="TD"&&a.key==="Shift"&&(n(a),a.preventDefault())},tv=e=>n=>{e&&n.target.tagName!=="TD"&&n.key==="Shift"&&(e(n),n.preventDefault())},mt=({id:e,model:n,isHeader:t=!1,hasGrayHeader:r=!1,onMouseDown:a,onKeyDown:i,children:o,noHover:s=!1,isSelected:l=!1,isBold:d=!1,isDashedBottomBorder:u=!1,isSolidBottomBorder:k=!1,isApLeftBorder:g=!1,className:E,useMultiselect:f=!1,hasNoBottomBorder:T=!1})=>ne.jsx("tr",{className:ev(E,wo.row,{rowHeader:t,grayHeader:r,rowContent:!t&&!s,selected:l,harHover:!s,bold:d,dashedBottomBorder:u,solidBottomBorder:k,noBottomBorder:T,apLeftBorder:g}),onMouseDown:nv(a,e,n),onKeyDown:rv(f,i,e,n),onKeyUp:f?tv(i):void 0,tabIndex:0,children:o}),av="_columnStyle_1f13u_1",Uo={columnStyle:av},iv=Ne.bind(Uo),yn=({children:e="",className:n,hidden:t=!1,colspanAll:r=!1})=>t?null:ne.jsx("td",{className:iv(Uo.columnStyle,n),colSpan:r?100:void 0,children:e}),ov="_table_2cnpl_1",sv="_rowHover_2cnpl_25",lv={table:ov,rowHover:sv},dv=Ne.bind(lv),uv="EMPTY",Ho=N.forwardRef(({headerTextCodes:e=[],headerColumnContent:n=[],classNameTable:t="",noHover:r=!1,hasGrayHeader:a=!1,children:i},o)=>ne.jsxs("table",{ref:o,className:dv("table",{[t]:t,rowHover:!r}),children:[ne.jsx("thead",{children:ne.jsxs(mt,{isHeader:!0,noHover:r,hasGrayHeader:a,children:[e.map(s=>typeof s=="string"&&s.startsWith(uv)?ne.jsx(yn,{children:" "},s):ne.jsx(yn,{children:ne.jsx(te,{id:s})},s)),n.map(s=>ne.jsx(yn,{children:s},s.key))]})}),ne.jsx("tbody",{children:Array.isArray(i)?N.Children.map(i,s=>N.cloneElement(s,{noHover:r})):N.cloneElement(i,{noHover:r})})]}));Ho.displayName="Table";const kv="_hidden_1pb4f_1",gv="_active_1pb4f_8",Ev="_activeRow_1pb4f_15 _active_1pb4f_8",vv="_toggleIcon_1pb4f_19",mv="_colTopPadding_1pb4f_22",Tv={hidden:kv,active:gv,activeRow:Ev,toggleIcon:vv,colTopPadding:mv};Ne.bind(Tv);Ve(Rn);const fv="_fourPx_qda5k_1",Rv="_eightPx_qda5k_4",Av="_sixteenPx_qda5k_7",cv="_twentyPx_qda5k_10",pv="_thirtyTwoPx_qda5k_13",yv="_fourtyPx_qda5k_16",_v={fourPx:fv,eightPx:Rv,sixteenPx:Av,twentyPx:cv,thirtyTwoPx:pv,fourtyPx:yv},Sv=Ne.bind(_v),We=({fourPx:e=!1,eightPx:n=!1,sixteenPx:t=!1,twentyPx:r=!1,thirtyTwoPx:a=!1,fourtyPx:i=!1})=>ne.jsx("div",{className:Sv({fourPx:e,eightPx:n,sixteenPx:t,twentyPx:r,thirtyTwoPx:a,fourtyPx:i})});Ve(Rn);const Nv="_divider_1t980_1",bv="_dividerParagraf_1t980_8",hv="_leftPanel_1t980_11",Ov="_rightPanel_1t980_14",Iv={divider:Nv,dividerParagraf:bv,leftPanel:hv,rightPanel:Ov};Ne.bind(Iv);const Kv="_editedIcon_ulrjl_1",Lv={editedIcon:Kv},Dv=Ne.bind(Lv),xo=({className:e=""})=>ne.jsx("span",{"data-testid":"editedIcon",className:Dv("editedIcon",e),children:ne.jsx(Zu,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})});var Pv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qo={exports:{}},Mn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca;function Mv(){if(Ca)return Mn;Ca=1;var e=N,n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(s,l,d){var u,k={},g=null,E=null;d!==void 0&&(g=""+d),l.key!==void 0&&(g=""+l.key),l.ref!==void 0&&(E=l.ref);for(u in l)r.call(l,u)&&!i.hasOwnProperty(u)&&(k[u]=l[u]);if(s&&s.defaultProps)for(u in l=s.defaultProps,l)k[u]===void 0&&(k[u]=l[u]);return{$$typeof:n,type:s,key:g,ref:E,props:k,_owner:a.current}}return Mn.Fragment=t,Mn.jsx=o,Mn.jsxs=o,Mn}qo.exports=Mv();var le=qo.exports;const Yo=e=>e.reduce((n,t,r)=>({...n,[r]:a=>t(a)||!0}),{}),Co=(e,n)=>{const t=n.split(".").reduce((r,a)=>r!==void 0?r[a]:r,e);return t==null?void 0:t.message};var $o={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(Pv,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,i=/\d\d/,o=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,l={},d=function(A){return(A=+A)+(A>68?1900:2e3)},u=function(A){return function(p){this[A]=+p}},k=[/[+-]\d\d:?(\d\d)?|Z/,function(A){(this.zone||(this.zone={})).offset=function(p){if(!p||p==="Z")return 0;var R=p.match(/([+-]|\d\d)/g),S=60*R[1]+(+R[2]||0);return S===0?0:R[0]==="+"?-S:S}(A)}],g=function(A){var p=l[A];return p&&(p.indexOf?p:p.s.concat(p.f))},E=function(A,p){var R,S=l.meridiem;if(S){for(var b=1;b<=24;b+=1)if(A.indexOf(S(b,0,p))>-1){R=b>12;break}}else R=A===(p?"pm":"PM");return R},f={A:[s,function(A){this.afternoon=E(A,!1)}],a:[s,function(A){this.afternoon=E(A,!0)}],Q:[a,function(A){this.month=3*(A-1)+1}],S:[a,function(A){this.milliseconds=100*+A}],SS:[i,function(A){this.milliseconds=10*+A}],SSS:[/\d{3}/,function(A){this.milliseconds=+A}],s:[o,u("seconds")],ss:[o,u("seconds")],m:[o,u("minutes")],mm:[o,u("minutes")],H:[o,u("hours")],h:[o,u("hours")],HH:[o,u("hours")],hh:[o,u("hours")],D:[o,u("day")],DD:[i,u("day")],Do:[s,function(A){var p=l.ordinal,R=A.match(/\d+/);if(this.day=R[0],p)for(var S=1;S<=31;S+=1)p(S).replace(/\[|\]/g,"")===A&&(this.day=S)}],w:[o,u("week")],ww:[i,u("week")],M:[o,u("month")],MM:[i,u("month")],MMM:[s,function(A){var p=g("months"),R=(g("monthsShort")||p.map(function(S){return S.slice(0,3)})).indexOf(A)+1;if(R<1)throw new Error;this.month=R%12||R}],MMMM:[s,function(A){var p=g("months").indexOf(A)+1;if(p<1)throw new Error;this.month=p%12||p}],Y:[/[+-]?\d+/,u("year")],YY:[i,function(A){this.year=d(A)}],YYYY:[/\d{4}/,u("year")],Z:k,ZZ:k};function T(A){var p,R;p=A,R=l&&l.formats;for(var S=(A=p.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(w,P,L){var _=L&&L.toUpperCase();return P||R[L]||t[L]||R[_].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(c,F,G){return F||G.slice(1)})})).match(r),b=S.length,O=0;O<b;O+=1){var M=S[O],K=f[M],I=K&&K[0],V=K&&K[1];S[O]=V?{regex:I,parser:V}:M.replace(/^\[|\]$/g,"")}return function(w){for(var P={},L=0,_=0;L<b;L+=1){var c=S[L];if(typeof c=="string")_+=c.length;else{var F=c.regex,G=c.parser,Y=w.slice(_),q=F.exec(Y)[0];G.call(P,q),w=w.replace(q,"")}}return function($){var J=$.afternoon;if(J!==void 0){var Q=$.hours;J?Q<12&&($.hours+=12):Q===12&&($.hours=0),delete $.afternoon}}(P),P}}return function(A,p,R){R.p.customParseFormat=!0,A&&A.parseTwoDigitYear&&(d=A.parseTwoDigitYear);var S=p.prototype,b=S.parse;S.parse=function(O){var M=O.date,K=O.utc,I=O.args;this.$u=K;var V=I[1];if(typeof V=="string"){var w=I[2]===!0,P=I[3]===!0,L=w||P,_=I[2];P&&(_=I[2]),l=this.$locale(),!w&&_&&(l=R.Ls[_]),this.$d=function(Y,q,$,J){try{if(["x","X"].indexOf(q)>-1)return new Date((q==="X"?1e3:1)*Y);var Q=T(q)(Y),Ae=Q.year,De=Q.month,Ue=Q.day,He=Q.hours,rn=Q.minutes,Pe=Q.seconds,re=Q.milliseconds,oe=Q.zone,be=Q.week,ce=new Date,he=Ue||(Ae||De?1:ce.getDate()),An=Ae||ce.getFullYear(),tn=0;Ae&&!De||(tn=De>0?De-1:ce.getMonth());var Kn,er=He||0,nr=rn||0,v=Pe||0,y=re||0;return oe?new Date(Date.UTC(An,tn,he,er,nr,v,y+60*oe.offset*1e3)):$?new Date(Date.UTC(An,tn,he,er,nr,v,y)):(Kn=new Date(An,tn,he,er,nr,v,y),be&&(Kn=J(Kn).week(be).toDate()),Kn)}catch{return new Date("")}}(M,V,K,R),this.init(),_&&_!==!0&&(this.$L=this.locale(_).$L),L&&M!=this.format(V)&&(this.$d=new Date("")),l={}}else if(V instanceof Array)for(var c=V.length,F=1;F<=c;F+=1){I[1]=V[F-1];var G=R.apply(this,I);if(G.isValid()){this.$d=G.$d,this.$L=G.$L,this.init();break}F===c&&(this.$d=new Date(""))}else b.call(this,O)}}})})($o);var Vv=$o.exports;const Gv=Fv(Vv),jv="_readOnlyContainer_v0eco_1",wv="_readOnlyContent_v0eco_4",Bv="_readOnlyContentCenter_v0eco_7",Uv="_textarea_v0eco_11",Hv="_space_v0eco_15",sr={readOnlyContainer:jv,readOnlyContent:wv,readOnlyContentCenter:Bv,textarea:Uv,space:Hv},xv=e=>e!=null&&e!=="",qv=({label:e,value:n,isEdited:t=!1,type:r,hideLabel:a,size:i})=>xv(n)?le.jsxs("div",{className:sr.readOnlyContainer,children:[e&&!a&&le.jsx(In,{size:"small",children:e}),le.jsx("div",{className:r==="textarea"?sr.textarea:"",children:le.jsxs(Kt,{className:sr.readOnlyContent,size:i,children:[n,t&&le.jsx(xo,{className:sr.space})]})})]}):null;me.extend(Gv);const Yv="_hideRadioLabels_1u3xf_1",Cv={hideRadioLabels:Yv},$v=({label:e,description:n,name:t,validate:r=[],radios:a,onChange:i,disabled:o=!1,isReadOnly:s=!1,isHorizontal:l=!1,parse:d=f=>f,isTrueOrFalseSelection:u=!1,hideLegend:k=!1,hideRadioLabels:g=!1,isEdited:E=!1})=>{const{formState:{errors:f}}=hn(),{field:T}=ro({name:t,rules:{validate:m.useMemo(()=>Yo(r),[r])}}),A=u?R=>R==="true":d,p=le.jsxs(le.Fragment,{children:[e,s&&E&&le.jsx(xo,{})]});return le.jsxs(qg,{name:t,value:T.value!==void 0?T.value:null,onChange:R=>{i&&i(R),T.onChange(R)},size:"small",legend:p,description:n,error:Co(f,t),className:g?Cv.hideRadioLabels:"",hideLegend:k,children:[!l&&a.map(R=>le.jsxs(m.Fragment,{children:[le.jsx(ja,{value:A(R.value),disabled:R.disabled||o||s,children:R.label}),T.value===A(R.value)&&R.element]},R.value)),l&&le.jsxs(Fo,{gap:"4",children:[a.map(R=>le.jsx(ja,{value:A(R.value),disabled:R.disabled||o||s,children:R.label},R.value)),a.filter(R=>T.value===A(R.value)).map(R=>le.jsx(N.Fragment,{children:R.element},R.value))]})]})},Jv="_textAreaFieldWithBadges_bdz0b_1",zv="_etikettWrapper_bdz0b_4",$a={textAreaFieldWithBadges:Jv,etikettWrapper:zv},Tt=({name:e,label:n,readOnly:t,maxLength:r,badges:a,validate:i=[],parse:o=k=>k,className:s,description:l,isEdited:d,...u})=>{const{formState:{errors:k}}=hn(),{field:g}=ro({name:e,rules:{validate:m.useMemo(()=>Yo(i),[i])}});return t?le.jsx(qv,{label:n,value:g.value,type:"textarea",isEdited:d,hideLabel:u.hideLabel}):le.jsxs("div",{className:a?$a.textAreaFieldWithBadges:null,children:[a&&le.jsx("div",{className:$a.etikettWrapper,children:a.map(({type:E,titleText:f})=>le.jsx(Gg,{variant:E,size:"small",children:f},f))}),le.jsx(Xg,{size:"small",label:n,description:l,className:s,autoComplete:"off",...g,onChange:E=>g.onChange(E.currentTarget.value!==""?o(E.currentTarget.value):null),value:g.value?g.value:"",error:Co(k,e),maxLength:r,...u})]})},Wv=({formMethods:e,onSubmit:n,children:t,className:r,setDataOnUnmount:a})=>{const{handleSubmit:i,getValues:o}=e;return m.useEffect(()=>()=>{a&&a(o())},[]),le.jsx(du,{...e,children:le.jsx("form",{className:r,onSubmit:n?i(s=>n(s)):void 0,children:t})})},Xv="_summaryTitle_45kqm_1",Zv="_infoSummary_45kqm_5",Qv="_ingenPerioder_45kqm_13",em="_redNumber_45kqm_17",nm="_positivNumber_45kqm_23",rm="_resultName_45kqm_28",qe={summaryTitle:Xv,infoSummary:Zv,ingenPerioder:Qv,redNumber:em,positivNumber:nm,resultName:rm},Jo=({fom:e,tom:n,feilutbetaling:t,etterbetaling:r,inntrekk:a,ingenPerioderMedAvvik:i})=>D.jsxs(D.Fragment,{children:[D.jsx(Re,{size:"small",className:qe.summaryTitle,children:D.jsx(te,{id:"Simulering.bruker"})}),D.jsx(We,{eightPx:!0}),D.jsxs("div",{className:qe.infoSummary,children:[i&&D.jsx("div",{className:qe.ingenPerioder,children:D.jsx(te,{id:"Simulering.ingenPerioder"})}),!i&&D.jsxs(D.Fragment,{children:[D.jsx(In,{size:"small",children:`${me(e).format(la)} - ${me(n).format(la)}`}),D.jsx(We,{sixteenPx:!0}),D.jsxs(HE,{children:[D.jsxs(qa,{children:[D.jsx(Fn,{className:qe.resultName,children:D.jsxs(Re,{size:"small",children:[D.jsx(te,{id:"Simulering.etterbetaling"}),":"]})}),D.jsx(Fn,{children:D.jsx(Re,{size:"small",children:dr(r)})})]}),D.jsxs(qa,{children:[D.jsx(Fn,{className:qe.resultName,children:D.jsxs(Re,{size:"small",children:[D.jsx(te,{id:"Simulering.tilbakekreving"}),":"]})}),D.jsx(Fn,{children:D.jsx(Re,{size:"small",children:D.jsx("span",{className:t?qe.redNumber:qe.positivNumber,children:dr(t)})})}),a!==null&&D.jsx(Fn,{children:D.jsxs(Re,{size:"small",children:[D.jsx(te,{id:"Simulering.inntrekk"}),":",D.jsx("span",{className:a?qe.redNumber:qe.positivNumber,children:dr(a)})]})})]})]})]})]})]});Jo.__docgenInfo={description:"Simulering oppsummering",methods:[],displayName:"SimuleringSummary",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},etterbetaling:{required:!0,tsType:{name:"number"},description:""},inntrekk:{required:!1,tsType:{name:"number"},description:""},ingenPerioderMedAvvik:{required:!1,tsType:{name:"boolean"},description:""}}};var zo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function t(){for(var i="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(i=a(i,r.call(this,s)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return t.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var s in i)n.call(i,s)&&i[s]&&(o=a(o,this&&this[s]||s));return o}function a(i,o){return o?i?i+" "+o:i+o:i}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(zo);var tm=zo.exports;const am=gs(tm),im="_invisibleButton_p9vj5_1",om={invisibleButton:im},sm=e=>e?"Simulering.headerText.VisFærreDetaljer":"Simulering.headerText.VisFlereDetaljer",Wo=({toggleDetails:e,showDetails:n,mottakerIndex:t})=>D.jsxs("button",{type:"button",className:om.invisibleButton,onClick:()=>e(t),children:[D.jsx(te,{id:sm(n)}),n?D.jsx(Yu,{}):D.jsx(vo,{})]});Wo.__docgenInfo={description:"",methods:[],displayName:"CollapseButton",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"boolean"},description:""},mottakerIndex:{required:!0,tsType:{name:"number"},description:""}}};const lm="_tableWrapper_1tst4_1",dm="_tableTitle_1tst4_7",um="_simuleringTable_1tst4_11",km="_rodTekst_1tst4_16",gm="_lastColumn_1tst4_20",Em="_nextPeriod_1tst4_62",vm="_normalPeriod_1tst4_68",Or={tableWrapper:lm,tableTitle:dm,simuleringTable:um,rodTekst:km,lastColumn:gm,nextPeriod:Em,normalPeriod:vm},Xo=am.bind(Or),Hn={DIFFERANSE:"differanse",INNTREKK:"inntrekk",FEILUTBETALING:"feilutbetaling",INNTREKKNESTEMÅNED:"inntrekkNesteMåned",OPPFYLT:"oppfylt",REDUKSJON:"reduksjon"},Ja=(e,n)=>`${e.month}${e.year}`===(n?me(n).format("MMMMYY"):!1),mm=(e,n,t,r)=>[e?m.createElement(Wo,{...n,key:`collapseButton-${t.length}`}):D.jsx("div",{}),...t.map(i=>D.jsx("span",{className:Xo({nextPeriod:Ja(i,r),normalPeriod:!Ja(i,r)}),children:D.jsx(te,{id:`Simulering.headerText.${i.month}`})},`${i.month}-${i.year}`))],Tm=e=>e.some(n=>n.rader.length>1),za=(e,n)=>!!e.rader.find(r=>r.feltnavn===Hn.DIFFERANSE)&&!n,fm=(e,n)=>e&&!n,Wa=(e,n,t)=>{const r=`${me(t).format("MMMMYY")}`;return n.map(i=>e.find(s=>me(s.periode.tom).format("MMMMYY").toLowerCase()===`${i.month}${i.year}`)||{måned:`${i.month}${i.year}`,beløp:null}).map((i,o)=>D.jsx(yn,{className:Xo({rodTekst:!i.beløp||i.beløp<0,lastColumn:"måned"in i?i.måned===r:me(i.periode.tom).format("MMMMYY")===r}),children:i.beløp?dr(i.beløp):"-"},`columnIndex${o+1}`))},Rm=(e,n)=>{const t=e.mottakerIdentifikator?n[e.mottakerIdentifikator]:void 0;return t?`${t.navn} (${e.mottakerNummer})`:`${e.mottakerNummer}`},Am=(e,n)=>e.mottakerType===Tr.ARBG||e.mottakerType===Tr.ARBGP?D.jsx(Re,{size:"small",className:Or.tableTitle,children:Rm(e,n)}):null,cm=(e,n,t)=>e?n.length>1?t.filter(r=>r.feltnavn!==Hn.INNTREKKNESTEMÅNED):[]:t,pm=(e,n)=>!!(e&&n===Tr.BRUKER),ym=(e,n)=>e||n,_m=(e,n,t)=>{const r=pm(e,t.mottakerType)?me(t.nesteUtbPeriode.tom).subtract(1,"months").format():ym(n,t.nesteUtbPeriode.fom);return tu(r,t.nesteUtbPeriode.tom)},Zo=({simuleringResultat:e,toggleDetails:n,showDetails:t,ingenPerioderMedAvvik:r,arbeidsgiverOpplysningerPerId:a})=>D.jsx(D.Fragment,{children:e.perioderPerMottaker.map((i,o)=>{const s=_m(r,e.periode.fom,i),l=i.nesteUtbPeriode.tom,d=t.find(k=>k.id===o),u=[];return D.jsxs("div",{className:Or.tableWrapper,children:[Am(i,a),D.jsx(Ho,{headerColumnContent:mm(Tm(i.resultatPerFagområde),{toggleDetails:n,showDetails:d?d.show:!1,mottakerIndex:o},s,l),classNameTable:Or.simuleringTable,children:u.concat(...i.resultatPerFagområde.map((k,g)=>k.rader.filter(E=>{const f=E.feltnavn===Hn.DIFFERANSE,T=za(k,f);return!fm(T,d?d.show:!1)}).map((E,f)=>{const T=E.feltnavn===Hn.DIFFERANSE,A=za(k,T);return D.jsxs(mt,{isBold:T||r,isDashedBottomBorder:A,isSolidBottomBorder:!A,children:[D.jsx(yn,{children:D.jsx(te,{id:`Simulering.${k.fagOmrådeKode}.${E.feltnavn}`})}),Wa(E.resultaterPerMåned,s,l)]},`rowIndex${g+1}${f+1}`)}))).concat(cm(r,i.resultatPerFagområde,i.resultatOgMotregningRader).map((k,g)=>D.jsxs(mt,{isBold:k.feltnavn!==Hn.INNTREKKNESTEMÅNED,isSolidBottomBorder:!0,children:[D.jsx(yn,{children:D.jsx(te,{id:`Simulering.${k.feltnavn}`})}),Wa(k.resultaterPerMåned,s,l)]},`rowIndex${g+1}`)))},`tableIndex${o+1}`)]},`tableIndex${o+1}`)})});Zo.__docgenInfo={description:"",methods:[],displayName:"SimuleringTable",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  show: boolean;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"show",value:{name:"boolean",required:!0}}]}}],raw:"Details[]"},description:""},simuleringResultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"sumEtterbetaling",value:{name:"number",required:!0}},{key:"sumFeilutbetaling",value:{name:"number",required:!0}},{key:"sumInntrekk",value:{name:"number",required:!0}},{key:"ingenPerioderMedAvvik",value:{name:"boolean",required:!0}},{key:"perioderPerMottaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"mottakerType",value:{name:"string",required:!0}},{key:"mottakerNummer",value:{name:"string",required:!0}},{key:"mottakerIdentifikator",value:{name:"string",required:!0}},{key:"nesteUtbPeriode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"resultatPerFagområde",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"fagOmrådeKode",value:{name:"string",required:!0}},{key:"rader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}>`}],raw:"SimuleringResultatPerFagområde[]",required:!0}},{key:"resultatOgMotregningRader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}>`}],raw:"Mottaker[]",required:!0}}]}}],raw:`Readonly<{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}>`},description:""},ingenPerioderMedAvvik:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Sm="Dato må være før eller lik {limit}",Nm="Dato må være etter eller lik {limit}",bm="Perioder kan ikke overlappe i tid",hm="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",Om="Dato må være lik {value}",Im="Dato må skrives slik: dd.mm.åååå",Km="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",Lm="Tallet kan ikke inneholde mer enn to desimaler",Dm="Tallet kan ikke ha desimaler",Pm="Feltet kan kun inneholde tall",Fm="Ugyldig fødselsnummer",Mm="Feltet må være et fødselsnummer (11 siffer)",Vm="Ugyldig organisasjonsnummer.",Gm="Ugyldig organisasjonsnummer eller fødselsnummer",jm="Startdato må være før eller lik sluttdato",wm="Periode er utenfor opptjeningsperioden",Bm="Ugyldig saksnummer eller fødselsnummer",Um="Feltet inneholder ugyldige tegn: {text}",Hm="Feltet inneholder en ugyldig verdi: {value}",xm="Feltet kan ikke inneholde mellomrom",qm="Feltet må fylles ut",Ym="Du kan skrive maksimalt {length} tegn",Cm="Du må skrive minst {length} tegn",$m="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",Jm="Feltet må være mindre eller lik {length}",zm="Feltet må være større eller lik {length}",Wm="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",Xm={DateNotBeforeOrEqual:Sm,DateNotAfterOrEqual:Nm,DateRangesOverlapping:bm,DateRangesOverlappingPeriodTypes:hm,DatesNotEqual:Om,InvalidDate:Im,InvalidDatesInPeriod:Km,InvalidDecimal:Lm,InvalidInteger:Dm,InvalidNumber:Pm,InvalidFodselsnr:Fm,InvalidFodselsnrFormat:Mm,InvalidOrgnr:Vm,InvalidOrgnrOrFodselsnr:Gm,InvalidPeriod:jm,InvalidPeriodRange:wm,InvalidSaksnrOrFodselsnrFormat:Bm,InvalidText:Um,InvalidValue:Hm,IllegalWhiteSpace:xm,IsRequired:qm,MaxLength:Ym,MinLength:Cm,MaxLengthOrFodselsnr:$m,MaxValue:Jm,MinValue:zm,SammeFodselsnrSomSoker:Wm},{formatMessage:Vr}=Ve(Xm),Zm=e=>Vr({id:"InvalidText"},{text:e}),Qm=()=>Vr({id:"IsRequired"}),eT=e=>Vr({id:"MaxLength"},{length:e}),nT=e=>Vr({id:"MinLength"},{length:e}),rT=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,tT=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,Ut=e=>e==null||e.toString().trim().length===0;var Qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function es(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ns={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(Qo,function(){return function(t,r){r.prototype.isSameOrAfter=function(a,i){return this.isSame(a,i)||this.isAfter(a,i)}}})})(ns);var aT=ns.exports;const iT=es(aT);var rs={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(Qo,function(){return function(t,r){r.prototype.isSameOrBefore=function(a,i){return this.isSame(a,i)||this.isBefore(a,i)}}})})(rs);var oT=rs.exports;const sT=es(oT);me.extend(iT);me.extend(sT);const mr=e=>Ut(e)?Qm():void 0,ts=e=>n=>Ut(n)||n.toString().trim().length>=e?null:nT(e),as=e=>n=>Ut(n)||n.toString().trim().length<=e?null:eT(e),ft=e=>{if(!rT.test(e)){const n=e.replace(tT,"");return Zm(n.replace(/[\t]/g,"Tabulatortegn"))}return null},lT="_helpTextImage_1p9zp_1",dT="_tooltipContent_1p9zp_9",uT="_varsel_1p9zp_17",kT="_bold_1p9zp_22",gT="_previewLink_1p9zp_26",ET="_col_1p9zp_31",Xr={helpTextImage:lT,tooltipContent:dT,varsel:uT,bold:kT,previewLink:gT,col:ET},Xa=ts(3),Za=as(1500),Ht="IKKE_SEND",vT=e=>{const{videreBehandling:n,varseltekst:t,begrunnelse:r}=e;return n!=null&&n.endsWith(Ht)?{kode:de.VURDER_FEILUTBETALING,begrunnelse:r,videreBehandling:un.TILBAKEKR_OPPRETT}:{kode:de.VURDER_FEILUTBETALING,begrunnelse:r,videreBehandling:n,varseltekst:t}},mT=(e,n)=>!e||!n?void 0:{videreBehandling:!n.varseltekst&&n.videreBehandling===un.TILBAKEKR_OPPRETT?n.videreBehandling+Ht:n.videreBehandling,varseltekst:n.varseltekst,begrunnelse:e.begrunnelse},is=({readOnly:e,sprakkode:n,previewCallback:t,aksjonspunkt:r,fagsak:a})=>{const i=Cn(),{watch:o}=hn(),s=o("varseltekst"),l=a.fagsakYtelseType===vi.FORELDREPENGER,d=m.useCallback(u=>{t("",s||" "),u.preventDefault()},[s]);return!r||r.definisjon!==de.VURDER_FEILUTBETALING?null:D.jsxs(br,{gap:"10",align:"start",children:[D.jsx(Tt,{name:"begrunnelse",label:i.formatMessage({id:"Simulering.vurdering"}),validate:[mr,Xa,Za,ft],maxLength:1500,readOnly:e}),D.jsx($v,{name:"videreBehandling",label:D.jsx(te,{id:"Simulering.videreBehandling"}),validate:[mr],isReadOnly:e,radios:[{value:un.TILBAKEKR_OPPRETT,label:D.jsx(te,{id:"Simulering.gjennomfør"}),element:D.jsxs("div",{className:Xr.varsel,children:[D.jsx(We,{eightPx:!0}),D.jsx(iE,{alignOffset:20,children:D.jsxs(br,{gap:"4",children:[D.jsxs(Fo,{gap:"2",children:[D.jsx(Re,{size:"small",className:Xr.bold,children:D.jsx(te,{id:"Simulering.varseltekst"})}),D.jsx(wg,{content:l?i.formatMessage({id:"Simulering.HjelpetekstForeldrepenger"}):i.formatMessage({id:"Simulering.HjelpetekstEngangsstonad"}),children:D.jsx(ek,{className:Xr.helpTextImage})})]}),D.jsx(Tt,{name:"varseltekst",label:i.formatMessage({id:"Simulering.fritekst"}),validate:[mr,Xa,Za,ft],maxLength:1500,readOnly:e,parse:au,badges:[{type:"info",titleText:iu(n)}]}),!e&&D.jsx(Pg,{href:"#",onClick:d,children:D.jsx(te,{id:"Messages.PreviewText"})})]})})]})},{value:`${un.TILBAKEKR_OPPRETT}${Ht}`,label:D.jsx(te,{id:"Simulering.OpprettMenIkkeSendVarsel"})},{value:un.TILBAKEKR_IGNORER,label:D.jsx(te,{id:"Simulering.avvent"})}]})]})};is.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevSøkerForm",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  historikkinnslagV2: HistorikkinnslagV2[];
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
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}`,signature:{properties:[{key:"opprettetAv",value:{name:"string",required:!1}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"aktoer",value:{name:"string",required:!0}},{key:"dokumentLinks",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"historikkinnslagDeler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  begrunnelsetekst?: string;
  begrunnelseFritekst?: string;
  hendelse?: {
    navn?: string;
    verdi?: string;
  };
  opplysninger: HistorikkInnslagOpplysning[];
  soeknadsperiode?: {
    soeknadsperiodeType?: string;
    navnVerdi?: string;
    tilVerdi?: string;
  };
  skjermlenke?: string;
  årsaktekst?: string;
  tema?: {
    endretFeltNavn: string;
    klNavn: string;
    navnVerdi: string;
  };
  gjeldendeFra?: {
    fra?: string;
    navn?: string;
    verdi?: string;
  };
  resultat?: string;
  endredeFelter: HistorikkinnslagEndretFelt[];
  aksjonspunkter?: HistorikkInnslagAksjonspunkt[];
}`,signature:{properties:[{key:"begrunnelsetekst",value:{name:"string",required:!1}},{key:"begrunnelseFritekst",value:{name:"string",required:!1}},{key:"hendelse",value:{name:"signature",type:"object",raw:`{
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"opplysninger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opplysningType: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"opplysningType",value:{name:"string",required:!0}},{key:"tilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagOpplysning[]",required:!0}},{key:"soeknadsperiode",value:{name:"signature",type:"object",raw:`{
  soeknadsperiodeType?: string;
  navnVerdi?: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"soeknadsperiodeType",value:{name:"string",required:!1}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"tilVerdi",value:{name:"string",required:!1}}]},required:!1}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"årsaktekst",value:{name:"string",required:!1}},{key:"tema",value:{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  klNavn: string;
  navnVerdi: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"klNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!0}}]},required:!1}},{key:"gjeldendeFra",value:{name:"signature",type:"object",raw:`{
  fra?: string;
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"fra",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"resultat",value:{name:"string",required:!1}},{key:"endredeFelter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  navnVerdi?: string;
  klNavn?: string;
  fraVerdi?: string | number | boolean;
  tilVerdi?: string | number | boolean;
  klFraVerdi?: string;
  klTilVerdi?: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"klNavn",value:{name:"string",required:!1}},{key:"fraVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"tilVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"klFraVerdi",value:{name:"string",required:!1}},{key:"klTilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkinnslagEndretFelt[]",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  godkjent: boolean;
  aksjonspunktBegrunnelse?: string;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"aksjonspunktBegrunnelse",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagAksjonspunkt[]",required:!1}}]}}],raw:"HistorikkinnslagDel[]",required:!0}}]}}],raw:`Readonly<{
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"historikkinnslagV2",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"string",required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"dokumenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"tittel",value:{name:"string",required:!0}},{key:"body",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}>`}],raw:"HistorikkinnslagV2[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  historikkinnslagV2: HistorikkinnslagV2[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},sprakkode:{required:!0,tsType:{name:"string"},description:""},aksjonspunkt:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(mottaker: string, fritekst: string) => Promise<any>",signature:{arguments:[{type:{name:"string"},name:"mottaker"},{type:{name:"string"},name:"fritekst"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""}}};const TT="_readMore_mcbzv_1",fT={readMore:TT},RT=ts(3),AT=as(1500),cT=e=>({kode:de.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:e.begrunnelseEtterbetaling}),pT=e=>{if(!(!e||e.definisjon!==de.KONTROLLER_STOR_ETTERBETALING_SØKER))return{begrunnelseEtterbetaling:e.begrunnelse}},os=({readOnly:e,aksjonspunkt:n})=>{const t=Cn();return!n||n.definisjon!==de.KONTROLLER_STOR_ETTERBETALING_SØKER?null:D.jsxs(br,{gap:"4",children:[D.jsx(Mg,{header:D.jsx(te,{id:"Simulering.Etterbetaling.ReadMoreTittel"}),className:fT.readMore,children:D.jsx(te,{id:"Simulering.Etterbetaling.ReadMoreInnhold"})}),D.jsx(Tt,{name:"begrunnelseEtterbetaling",label:t.formatMessage({id:"Simulering.Etterbetaling.Vurdering"}),validate:[mr,RT,AT,ft],maxLength:1500,size:"medium",readOnly:e})]})};os.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevSøkerForm",props:{aksjonspunkt:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Ir=(e,n)=>e.find(t=>t.definisjon===n),bn=(e,n)=>e.some(t=>t.definisjon===n),yT=(e,n)=>t=>{const r=e.findIndex(i=>i.id===t);let a=[];if(r!==-1){const i={id:t,show:!e[r].show};a=[...e.slice(0,r),i,...e.slice(r+1,e.length-1)]}else a=e.concat({id:t,show:!0});n(a)},_T=(e,n)=>{const t=[];return bn(n,de.VURDER_FEILUTBETALING)&&t.push(vT(e)),bn(n,de.KONTROLLER_STOR_ETTERBETALING_SØKER)&&t.push(cT(e)),t},ST=(e,n)=>{if(e.length!==0)return{...mT(Ir(e,de.VURDER_FEILUTBETALING),n),...pT(Ir(e,de.KONTROLLER_STOR_ETTERBETALING_SØKER))}},NT=e=>{const n=[];return bn(e,de.VURDER_FEILUTBETALING)&&n.push(D.jsx(te,{id:"Simulering.AksjonspunktHelpText.5084"},"vurderFeilutbetaling")),bn(e,de.KONTROLLER_STOR_ETTERBETALING_SØKER)&&n.push(D.jsx(te,{id:"Simulering.Etterbetaling.Tittel"},"kontrollerFeilutbetaling")),n},ss=({simuleringResultat:e,readOnly:n,sprakkode:t,previewCallback:r,formData:a,setFormData:i,submitCallback:o,isApOpen:s,tilbakekrevingvalg:l,aksjonspunkter:d,fagsak:u,arbeidsgiverOpplysningerPerId:k})=>{const g=Su({defaultValues:a||ST(d,l)}),{formState:E}=g,[f,T]=m.useState([]),A=l!==void 0&&l.videreBehandling===un.TILBAKEKR_OPPDATER,p=yT(f,T),R=e==null?void 0:e.simuleringResultat,S=bn(d,de.VURDER_FEILUTBETALING)||bn(d,de.KONTROLLER_STOR_ETTERBETALING_SØKER),b=s?NT(d):[];return D.jsxs(D.Fragment,{children:[D.jsx(Vu,{size:"small",children:D.jsx(te,{id:"Simulering.Title"})}),D.jsx(We,{twentyPx:!0}),R&&D.jsxs(D.Fragment,{children:[b.length>0&&b.map(O=>D.jsxs("div",{children:[D.jsx(eE,{children:[O]}),D.jsx(We,{sixteenPx:!0})]},O.key)),D.jsx(Jo,{fom:R.periode.fom,tom:R.periode.tom,feilutbetaling:R.sumFeilutbetaling,etterbetaling:R.sumEtterbetaling,inntrekk:R.sumInntrekk,ingenPerioderMedAvvik:R.ingenPerioderMedAvvik}),D.jsx(Zo,{arbeidsgiverOpplysningerPerId:k,showDetails:f,toggleDetails:p,simuleringResultat:R,ingenPerioderMedAvvik:R.ingenPerioderMedAvvik}),D.jsx(We,{twentyPx:!0}),A&&D.jsx(In,{size:"small",children:D.jsx(te,{id:"Simulering.ApenTilbakekrevingsbehandling"})})]}),!e&&D.jsx(te,{id:"Simulering.ingenData"}),S&&D.jsxs(Wv,{formMethods:g,onSubmit:O=>o(_T(O,d)),setDataOnUnmount:i,children:[D.jsx(is,{aksjonspunkt:Ir(d,de.VURDER_FEILUTBETALING),fagsak:u,previewCallback:r,readOnly:n,sprakkode:t}),D.jsx(We,{sixteenPx:!0}),D.jsx(os,{readOnly:n,aksjonspunkt:Ir(d,de.KONTROLLER_STOR_ETTERBETALING_SØKER)}),D.jsx(We,{sixteenPx:!0}),D.jsx(fo,{size:"small",variant:"primary",disabled:!E.isDirty||E.isSubmitting||n,loading:E.isSubmitting,children:D.jsx(te,{id:"SubmitButton.ConfirmInformation"})})]})]})};ss.__docgenInfo={description:"",methods:[],displayName:"SimuleringPanel",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  historikkinnslagV2: HistorikkinnslagV2[];
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
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}`,signature:{properties:[{key:"opprettetAv",value:{name:"string",required:!1}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"aktoer",value:{name:"string",required:!0}},{key:"dokumentLinks",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"historikkinnslagDeler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  begrunnelsetekst?: string;
  begrunnelseFritekst?: string;
  hendelse?: {
    navn?: string;
    verdi?: string;
  };
  opplysninger: HistorikkInnslagOpplysning[];
  soeknadsperiode?: {
    soeknadsperiodeType?: string;
    navnVerdi?: string;
    tilVerdi?: string;
  };
  skjermlenke?: string;
  årsaktekst?: string;
  tema?: {
    endretFeltNavn: string;
    klNavn: string;
    navnVerdi: string;
  };
  gjeldendeFra?: {
    fra?: string;
    navn?: string;
    verdi?: string;
  };
  resultat?: string;
  endredeFelter: HistorikkinnslagEndretFelt[];
  aksjonspunkter?: HistorikkInnslagAksjonspunkt[];
}`,signature:{properties:[{key:"begrunnelsetekst",value:{name:"string",required:!1}},{key:"begrunnelseFritekst",value:{name:"string",required:!1}},{key:"hendelse",value:{name:"signature",type:"object",raw:`{
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"opplysninger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opplysningType: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"opplysningType",value:{name:"string",required:!0}},{key:"tilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagOpplysning[]",required:!0}},{key:"soeknadsperiode",value:{name:"signature",type:"object",raw:`{
  soeknadsperiodeType?: string;
  navnVerdi?: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"soeknadsperiodeType",value:{name:"string",required:!1}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"tilVerdi",value:{name:"string",required:!1}}]},required:!1}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"årsaktekst",value:{name:"string",required:!1}},{key:"tema",value:{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  klNavn: string;
  navnVerdi: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"klNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!0}}]},required:!1}},{key:"gjeldendeFra",value:{name:"signature",type:"object",raw:`{
  fra?: string;
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"fra",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"resultat",value:{name:"string",required:!1}},{key:"endredeFelter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  navnVerdi?: string;
  klNavn?: string;
  fraVerdi?: string | number | boolean;
  tilVerdi?: string | number | boolean;
  klFraVerdi?: string;
  klTilVerdi?: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"klNavn",value:{name:"string",required:!1}},{key:"fraVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"tilVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"klFraVerdi",value:{name:"string",required:!1}},{key:"klTilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkinnslagEndretFelt[]",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  godkjent: boolean;
  aksjonspunktBegrunnelse?: string;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"aksjonspunktBegrunnelse",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagAksjonspunkt[]",required:!1}}]}}],raw:"HistorikkinnslagDel[]",required:!0}}]}}],raw:`Readonly<{
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"historikkinnslagV2",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"string",required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"dokumenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"tittel",value:{name:"string",required:!0}},{key:"body",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}>`}],raw:"HistorikkinnslagV2[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  historikkinnslagV2: HistorikkinnslagV2[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},sprakkode:{required:!0,tsType:{name:"string"},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""},simuleringResultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  simuleringResultat: DetaljertSimuleringResultat;
  simuleringResultatUtenInntrekk: DetaljertSimuleringResultat;
  slåttAvInntrekk: boolean;
}`,signature:{properties:[{key:"simuleringResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"sumEtterbetaling",value:{name:"number",required:!0}},{key:"sumFeilutbetaling",value:{name:"number",required:!0}},{key:"sumInntrekk",value:{name:"number",required:!0}},{key:"ingenPerioderMedAvvik",value:{name:"boolean",required:!0}},{key:"perioderPerMottaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"mottakerType",value:{name:"string",required:!0}},{key:"mottakerNummer",value:{name:"string",required:!0}},{key:"mottakerIdentifikator",value:{name:"string",required:!0}},{key:"nesteUtbPeriode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"resultatPerFagområde",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"fagOmrådeKode",value:{name:"string",required:!0}},{key:"rader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}>`}],raw:"SimuleringResultatPerFagområde[]",required:!0}},{key:"resultatOgMotregningRader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}>`}],raw:"Mottaker[]",required:!0}}]}}],raw:`Readonly<{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}>`,required:!0}},{key:"simuleringResultatUtenInntrekk",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"sumEtterbetaling",value:{name:"number",required:!0}},{key:"sumFeilutbetaling",value:{name:"number",required:!0}},{key:"sumInntrekk",value:{name:"number",required:!0}},{key:"ingenPerioderMedAvvik",value:{name:"boolean",required:!0}},{key:"perioderPerMottaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"mottakerType",value:{name:"string",required:!0}},{key:"mottakerNummer",value:{name:"string",required:!0}},{key:"mottakerIdentifikator",value:{name:"string",required:!0}},{key:"nesteUtbPeriode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"resultatPerFagområde",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"fagOmrådeKode",value:{name:"string",required:!0}},{key:"rader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}>`}],raw:"SimuleringResultatPerFagområde[]",required:!0}},{key:"resultatOgMotregningRader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}>`}],raw:"Mottaker[]",required:!0}}]}}],raw:`Readonly<{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}>`,required:!0}},{key:"slåttAvInntrekk",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  simuleringResultat: DetaljertSimuleringResultat;
  simuleringResultatUtenInntrekk: DetaljertSimuleringResultat;
  slåttAvInntrekk: boolean;
}>`},description:""},tilbakekrevingvalg:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erTilbakekrevingVilkårOppfylt: boolean;
  grunnerTilReduksjon: boolean;
  videreBehandling: string;
  varseltekst: string;
}`,signature:{properties:[{key:"erTilbakekrevingVilkårOppfylt",value:{name:"boolean",required:!0}},{key:"grunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"videreBehandling",value:{name:"string",required:!0}},{key:"varseltekst",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  erTilbakekrevingVilkårOppfylt: boolean;
  grunnerTilReduksjon: boolean;
  videreBehandling: string;
  varseltekst: string;
}>`},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: SimuleringAksjonspunkt[]) => Promise<void>",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"VurderFeilutbetalingAp | KontrollerEtterbetalingTilSøkerAP",elements:[{name:"intersection",raw:`{
  videreBehandling: string;
  varseltekst?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.VURDER_FEILUTBETALING>`,elements:[{name:"signature",type:"object",raw:`{
  videreBehandling: string;
  varseltekst?: string;
}`,signature:{properties:[{key:"videreBehandling",value:{name:"string",required:!0}},{key:"varseltekst",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}],raw:"SimuleringAksjonspunkt[]"},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},isApOpen:{required:!0,tsType:{name:"boolean"},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(mottaker: string, fritekst: string) => Promise<any>",signature:{arguments:[{type:{name:"string"},name:"mottaker"},{type:{name:"string"},name:"fritekst"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},formData:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  videreBehandling?: string;
  varseltekst?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"videreBehandling",value:{name:"string",required:!1}},{key:"varseltekst",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  videreBehandling?: string;
  varseltekst?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"videreBehandling",value:{name:"string",required:!1}},{key:"varseltekst",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const bT={"Simulering.Title":"Simulering","Simulering.FP.nyttBeløp":"Foreldrepenger nytt beløp","Simulering.FP.tidligereUtbetalt":"Foreldrepenger tidligere utbetalt","Simulering.FP.differanse":"Foreldrepenger avvik","Simulering.FPREF.nyttBeløp":"Foreldrepenger nytt beløp","Simulering.FPREF.tidligereUtbetalt":"Foreldrepenger tidligere utbetalt","Simulering.FPREF.differanse":"Foreldrepenger avvik","Simulering.OM.nyttBeløp":"Omsorgspenger nytt beløp","Simulering.OM.tidligereUtbetalt":"Omsorgspenger tidligere utbetalt","Simulering.OM.differanse":"Omsorgspenger avvik","Simulering.OMREF.nyttBeløp":"Omsorgspenger nytt beløp","Simulering.OMREF.tidligereUtbetalt":"Omsorgspenger tidligere utbetalt","Simulering.OMREF.differanse":"Omsorgspenger avvik","Simulering.OOP.nyttBeløp":"Pleiepenger nytt beløp","Simulering.OOP.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.OOP.differanse":"Pleiepenger avvik","Simulering.OOPREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.OOPREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.OOPREF.differanse":"Pleiepenger avvik","Simulering.OPP.nyttBeløp":"Opplæringspenger nytt beløp","Simulering.OPP.tidligereUtbetalt":"Opplæringspenger tidligere utbetalt","Simulering.OPP.differanse":"Opplæringspenger avvik","Simulering.OPPREF.nyttBeløp":"Opplæringspenger nytt beløp","Simulering.OPPREF.tidligereUtbetalt":"Opplæringspenger tidligere utbetalt","Simulering.OPPREF.differanse":"Opplæringspenger avvik","Simulering.PB.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PB.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PB.differanse":"Pleiepenger avvik","Simulering.PBREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PBREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PBREF.differanse":"Pleiepenger avvik","Simulering.PN.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PN.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PN.differanse":"Pleiepenger avvik","Simulering.PNREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PNREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PNREF.differanse":"Pleiepenger avvik","Simulering.REFUTG.nyttBeløp":"Engangstønad nytt beløp","Simulering.REFUTG.tidligereUtbetalt":"Engangstønad tidligere utbetalt","Simulering.REFUTG.differanse":"Engangstønad avvik","Simulering.SP.nyttBeløp":"Sykepenger nytt beløp","Simulering.SP.tidligereUtbetalt":"Sykepenger tidligere utbetalt","Simulering.SP.differanse":"Sykepenger avvik","Simulering.SPREF.nyttBeløp":"Sykepenger nytt beløp","Simulering.SPREF.tidligereUtbetalt":"Sykepenger tidligere utbetalt","Simulering.SPREF.differanse":"Sykepenger avvik","Simulering.SVP.nyttBeløp":"Svangerskapspenger nytt beløp","Simulering.SVP.tidligereUtbetalt":"Svangerskapspenger tidligere utbetalt","Simulering.SVP.differanse":"Svangerskapspenger avvik","Simulering.SVPREF.nyttBeløp":"Svangerskapspenger nytt beløp","Simulering.SVPREF.tidligereUtbetalt":"Svangerskapspenger tidligere utbetalt","Simulering.SVPREF.differanse":"Svangerskapspenger avvik","Simulering.resultatEtterMotregning":"Resultat etter motregning mellom ytelser","Simulering.inntrekk":"Inntrekk","Simulering.inntrekkNesteMåned":"Inntrekk i neste måned","Simulering.tilbakekreving":"Feilutbetaling","Simulering.etterbetaling":"Etterbetaling","Simulering.resultat":"Resultat","Simulering.avregnetBeløp":"Avregnet beløp","Simulering.headerText.VisFærreDetaljer":"Vis færre detaljer","Simulering.headerText.VisFlereDetaljer":"Vis flere detaljer","Simulering.headerText.januar":"Jan","Simulering.headerText.februar":"Feb","Simulering.headerText.mars":"Mars","Simulering.headerText.april":"Apr","Simulering.headerText.mai":"Mai","Simulering.headerText.juni":"Jun","Simulering.headerText.juli":"Jul","Simulering.headerText.august":"Aug","Simulering.headerText.september":"Sep","Simulering.headerText.oktober":"Okt","Simulering.headerText.november":"Nov","Simulering.headerText.desember":"Des","Simulering.ingenData":"Ingen informasjon om simulering mottatt fra økonomiløsningen.","Simulering.ingenPerioder":"Ingen periode med avvik","Simulering.AksjonspunktHelpText.5084":"Vurder videre behandling av tilbakekreving","Simulering.vurdering":"Beskriv hvorfor det har oppstått en feilutbetaling og hvordan den skal behandles videre","Simulering.videreBehandling":"Fastsett videre behandling","Simulering.gjennomfør":"Opprett tilbakekreving, send varsel","Simulering.OpprettMenIkkeSendVarsel":"Opprett tilbakekreving, ikke send varsel","Simulering.Opprett":"Opprett tilbakekreving","Simulering.avvent":"Avvent samordning, ingen tilbakekreving","Simulering.formAlternativ.ja":"Ja","Simulering.formAlternativ.nei":"Nei","Simulering.bruker":"Bruker","Simulering.varseltekst":"Send varsel om tilbakekreving","Simulering.fritekst":"Fritekst i varselet","Simulering.HjelpetekstForeldrepenger":"Her skal du oppgi hvorfor brukeren ikke skulle fått utbetalt ytelsen i perioden(e). Du må også oppgi hvordan feilutbetalingen ble oppdaget, hvem som oppdaget den og når den ble oppdaget eller meldt til Nav. Eksempel på tekst: «Vi mottok melding fra deg [dato]om at du hadde jobbet heltid. Du kan ikke jobbe og motta foreldrepenger samtidig. Da vi mottok meldingen fra deg, var det allerede utbetalt foreldrenger for perioden du har jobbet.","Simulering.HjelpetekstEngangsstonad":"Her skal du oppgi hvorfor brukeren ikke skulle fått utbetalt ytelsen i perioden(e). Du må også oppgi hvordan feilutbetalingen ble oppdaget, hvem som oppdaget den og når den ble oppdaget eller meldt til Nav.","Simulering.ApenTilbakekrevingsbehandling":"Det foreligger en åpen tilbakekrevingsbehandling, endringer i vedtaket vil automatisk oppdatere eksisterende feilutbetalte perioder og beløp.","Simulering.Etterbetaling.Tittel":"Ny inntektsmelding vil føre til en høy etterbetaling til bruker i en tidligere innvilget periode. Kontroller om dette er riktig","Simulering.Etterbetaling.ReadMoreTittel":"Dette bør undersøkes rundt etterbetalingen","Simulering.Etterbetaling.ReadMoreInnhold":"Saken stopper i simulering fordi arbeidsgiver har endret sitt refusjonskrav, eller har endret fra refusjon til direkte utbetaling i en periode som allerede har blitt utbetalt til bruker. I tillegg er etterbetalingen høy. Du må kontrollerer om dette er riktig. Dette kan gjøres ved å kontakte arbeidsgiver. Er det feil, må de sende inn ny inntektsmelding. Får du ikke tak i arbeidsgiver, kan du kontakte søker og høre om de kan spørre arbeidsgiveren sin.","Simulering.Etterbetaling.Vurdering":"Begrunn hvorfor du går videre med denne behandlingen.","SubmitButton.ConfirmInformation":"Bekreft og fortsett","Malform.Beskrivelse":"Foretrukket språk","Messages.PreviewText":"Forhåndsvis varselbrev"},hT=Ve(bT),xt=({fagsak:e,behandling:n,aksjonspunkter:t,simuleringResultat:r,tilbakekrevingvalg:a,arbeidsgiverOpplysningerPerId:i,submitCallback:o,isReadOnly:s,isAksjonspunktOpen:l,previewFptilbakeCallback:d,formData:u,setFormData:k})=>D.jsx(zl,{value:hT,children:D.jsx(ss,{fagsak:e,arbeidsgiverOpplysningerPerId:i,sprakkode:n.sprakkode,aksjonspunkter:t,simuleringResultat:r,tilbakekrevingvalg:a,submitCallback:o,readOnly:s,isApOpen:l,previewCallback:d,formData:u,setFormData:k})});xt.__docgenInfo={description:"",methods:[],displayName:"SimuleringProsessIndex",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  historikkinnslagV2: HistorikkinnslagV2[];
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
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}`,signature:{properties:[{key:"opprettetAv",value:{name:"string",required:!1}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"aktoer",value:{name:"string",required:!0}},{key:"dokumentLinks",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"historikkinnslagDeler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  begrunnelsetekst?: string;
  begrunnelseFritekst?: string;
  hendelse?: {
    navn?: string;
    verdi?: string;
  };
  opplysninger: HistorikkInnslagOpplysning[];
  soeknadsperiode?: {
    soeknadsperiodeType?: string;
    navnVerdi?: string;
    tilVerdi?: string;
  };
  skjermlenke?: string;
  årsaktekst?: string;
  tema?: {
    endretFeltNavn: string;
    klNavn: string;
    navnVerdi: string;
  };
  gjeldendeFra?: {
    fra?: string;
    navn?: string;
    verdi?: string;
  };
  resultat?: string;
  endredeFelter: HistorikkinnslagEndretFelt[];
  aksjonspunkter?: HistorikkInnslagAksjonspunkt[];
}`,signature:{properties:[{key:"begrunnelsetekst",value:{name:"string",required:!1}},{key:"begrunnelseFritekst",value:{name:"string",required:!1}},{key:"hendelse",value:{name:"signature",type:"object",raw:`{
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"opplysninger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opplysningType: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"opplysningType",value:{name:"string",required:!0}},{key:"tilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagOpplysning[]",required:!0}},{key:"soeknadsperiode",value:{name:"signature",type:"object",raw:`{
  soeknadsperiodeType?: string;
  navnVerdi?: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"soeknadsperiodeType",value:{name:"string",required:!1}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"tilVerdi",value:{name:"string",required:!1}}]},required:!1}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"årsaktekst",value:{name:"string",required:!1}},{key:"tema",value:{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  klNavn: string;
  navnVerdi: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"klNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!0}}]},required:!1}},{key:"gjeldendeFra",value:{name:"signature",type:"object",raw:`{
  fra?: string;
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"fra",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"resultat",value:{name:"string",required:!1}},{key:"endredeFelter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  navnVerdi?: string;
  klNavn?: string;
  fraVerdi?: string | number | boolean;
  tilVerdi?: string | number | boolean;
  klFraVerdi?: string;
  klTilVerdi?: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"klNavn",value:{name:"string",required:!1}},{key:"fraVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"tilVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"klFraVerdi",value:{name:"string",required:!1}},{key:"klTilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkinnslagEndretFelt[]",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  godkjent: boolean;
  aksjonspunktBegrunnelse?: string;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"aksjonspunktBegrunnelse",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagAksjonspunkt[]",required:!1}}]}}],raw:"HistorikkinnslagDel[]",required:!0}}]}}],raw:`Readonly<{
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"historikkinnslagV2",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"string",required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"dokumenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"tittel",value:{name:"string",required:!0}},{key:"body",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}>`}],raw:"HistorikkinnslagV2[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  historikkinnslagV2: HistorikkinnslagV2[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},simuleringResultat:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  simuleringResultat: DetaljertSimuleringResultat;
  simuleringResultatUtenInntrekk: DetaljertSimuleringResultat;
  slåttAvInntrekk: boolean;
}`,signature:{properties:[{key:"simuleringResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"sumEtterbetaling",value:{name:"number",required:!0}},{key:"sumFeilutbetaling",value:{name:"number",required:!0}},{key:"sumInntrekk",value:{name:"number",required:!0}},{key:"ingenPerioderMedAvvik",value:{name:"boolean",required:!0}},{key:"perioderPerMottaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"mottakerType",value:{name:"string",required:!0}},{key:"mottakerNummer",value:{name:"string",required:!0}},{key:"mottakerIdentifikator",value:{name:"string",required:!0}},{key:"nesteUtbPeriode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"resultatPerFagområde",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"fagOmrådeKode",value:{name:"string",required:!0}},{key:"rader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}>`}],raw:"SimuleringResultatPerFagområde[]",required:!0}},{key:"resultatOgMotregningRader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}>`}],raw:"Mottaker[]",required:!0}}]}}],raw:`Readonly<{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}>`,required:!0}},{key:"simuleringResultatUtenInntrekk",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"sumEtterbetaling",value:{name:"number",required:!0}},{key:"sumFeilutbetaling",value:{name:"number",required:!0}},{key:"sumInntrekk",value:{name:"number",required:!0}},{key:"ingenPerioderMedAvvik",value:{name:"boolean",required:!0}},{key:"perioderPerMottaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"mottakerType",value:{name:"string",required:!0}},{key:"mottakerNummer",value:{name:"string",required:!0}},{key:"mottakerIdentifikator",value:{name:"string",required:!0}},{key:"nesteUtbPeriode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"resultatPerFagområde",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}`,signature:{properties:[{key:"fagOmrådeKode",value:{name:"string",required:!0}},{key:"rader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}>`}],raw:"SimuleringResultatPerFagområde[]",required:!0}},{key:"resultatOgMotregningRader",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}`,signature:{properties:[{key:"feltnavn",value:{name:"string",required:!0}},{key:"resultaterPerMåned",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`,required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`{
  periode: SimuleringPeriode;
  beløp: number;
}[]`,required:!0}}]}}],raw:`Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>`}],raw:"SimuleringResultatRad[]",required:!0}}]}}],raw:`Readonly<{
  mottakerType: string;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}>`}],raw:"Mottaker[]",required:!0}}]}}],raw:`Readonly<{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}>`,required:!0}},{key:"slåttAvInntrekk",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  simuleringResultat: DetaljertSimuleringResultat;
  simuleringResultatUtenInntrekk: DetaljertSimuleringResultat;
  slåttAvInntrekk: boolean;
}>`},description:""},tilbakekrevingvalg:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erTilbakekrevingVilkårOppfylt: boolean;
  grunnerTilReduksjon: boolean;
  videreBehandling: string;
  varseltekst: string;
}`,signature:{properties:[{key:"erTilbakekrevingVilkårOppfylt",value:{name:"boolean",required:!0}},{key:"grunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"videreBehandling",value:{name:"string",required:!0}},{key:"varseltekst",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  erTilbakekrevingVilkårOppfylt: boolean;
  grunnerTilReduksjon: boolean;
  videreBehandling: string;
  varseltekst: string;
}>`},description:""},previewFptilbakeCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(mottaker: string, fritekst: string) => Promise<any>",signature:{arguments:[{type:{name:"string"},name:"mottaker"},{type:{name:"string"},name:"fritekst"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: any) => Promise<void>",signature:{arguments:[{type:{name:"any"},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},status:{required:!0,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""},vilkar:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Vilkar[]"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"any"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};const OT={saksnummer:"123",fagsakYtelseType:vi.FORELDREPENGER},IT={uuid:"1",versjon:1,sprakkode:"NO"},KT={123:{erPrivatPerson:!1,identifikator:"123",navn:"test"}},LT={simuleringResultat:{periode:{fom:"2019-01-01",tom:"2019-03-31"},sumEtterbetaling:0,sumFeilutbetaling:-49863,sumInntrekk:-10899,ingenPerioderMedAvvik:!1,perioderPerMottaker:[{mottakerType:Tr.ARBG,mottakerIdentifikator:"123",mottakerNummer:"test",resultatPerFagområde:[{fagOmrådeKode:"FP",rader:[{feltnavn:"nyttBeløp",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:52619}]},{feltnavn:"tidligereUtbetalt",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:61795}]},{feltnavn:"differanse",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:-9176}]}]}],resultatOgMotregningRader:[{feltnavn:"inntrekkNesteMåned",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:0}]},{feltnavn:"resultat",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:-26486}]}],nesteUtbPeriode:{fom:"2019-10-01",tom:"2019-10-31"}}]},slåttAvInntrekk:!1},jT={title:"prosess/prosess-simulering",component:xt},Gr=({aksjonspunkter:e,submitCallback:n,tilbakekrevingvalg:t,isAksjonspunktOpen:r})=>D.jsx(xt,{behandling:IT,alleKodeverk:Jd,submitCallback:n,isReadOnly:!1,isAksjonspunktOpen:r,readOnlySubmitButton:!1,status:"",vilkar:[],alleMerknaderFraBeslutter:{},setFormData:()=>{},fagsak:OT,aksjonspunkter:e,arbeidsgiverOpplysningerPerId:KT,simuleringResultat:LT,tilbakekrevingvalg:t,previewFptilbakeCallback:qn("button-click")}),Vn=Gr.bind({});Vn.args={aksjonspunkter:[{definisjon:de.VURDER_FEILUTBETALING,begrunnelse:void 0}],isAksjonspunktOpen:!0,submitCallback:qn("button-click")};const Gn=Gr.bind({});Gn.args={aksjonspunkter:[{definisjon:de.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:void 0}],isAksjonspunktOpen:!0,submitCallback:qn("button-click")};const jn=Gr.bind({});jn.args={aksjonspunkter:[{definisjon:de.VURDER_FEILUTBETALING,begrunnelse:void 0},{definisjon:de.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:void 0}],isAksjonspunktOpen:!0,submitCallback:qn("button-click")};const wn=Gr.bind({});wn.args={aksjonspunkter:[],isAksjonspunktOpen:!1,submitCallback:qn("button-click"),tilbakekrevingvalg:{videreBehandling:un.TILBAKEKR_OPPDATER,varseltekst:"varsel-eksempel"}};var Qa,ei,ni;Vn.parameters={...Vn.parameters,docs:{...(Qa=Vn.parameters)==null?void 0:Qa.docs,source:{originalSource:`({
  aksjonspunkter,
  submitCallback,
  tilbakekrevingvalg,
  isAksjonspunktOpen
}) => <SimuleringProsessIndex behandling={behandling} alleKodeverk={alleKodeverk as any} submitCallback={submitCallback} isReadOnly={false} isAksjonspunktOpen={isAksjonspunktOpen} readOnlySubmitButton={false} status="" vilkar={[]} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} fagsak={fagsak} aksjonspunkter={aksjonspunkter} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} simuleringResultat={simuleringResultat} tilbakekrevingvalg={tilbakekrevingvalg} previewFptilbakeCallback={action('button-click') as (data: any) => Promise<any>} />`,...(ni=(ei=Vn.parameters)==null?void 0:ei.docs)==null?void 0:ni.source}}};var ri,ti,ai;Gn.parameters={...Gn.parameters,docs:{...(ri=Gn.parameters)==null?void 0:ri.docs,source:{originalSource:`({
  aksjonspunkter,
  submitCallback,
  tilbakekrevingvalg,
  isAksjonspunktOpen
}) => <SimuleringProsessIndex behandling={behandling} alleKodeverk={alleKodeverk as any} submitCallback={submitCallback} isReadOnly={false} isAksjonspunktOpen={isAksjonspunktOpen} readOnlySubmitButton={false} status="" vilkar={[]} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} fagsak={fagsak} aksjonspunkter={aksjonspunkter} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} simuleringResultat={simuleringResultat} tilbakekrevingvalg={tilbakekrevingvalg} previewFptilbakeCallback={action('button-click') as (data: any) => Promise<any>} />`,...(ai=(ti=Gn.parameters)==null?void 0:ti.docs)==null?void 0:ai.source}}};var ii,oi,si;jn.parameters={...jn.parameters,docs:{...(ii=jn.parameters)==null?void 0:ii.docs,source:{originalSource:`({
  aksjonspunkter,
  submitCallback,
  tilbakekrevingvalg,
  isAksjonspunktOpen
}) => <SimuleringProsessIndex behandling={behandling} alleKodeverk={alleKodeverk as any} submitCallback={submitCallback} isReadOnly={false} isAksjonspunktOpen={isAksjonspunktOpen} readOnlySubmitButton={false} status="" vilkar={[]} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} fagsak={fagsak} aksjonspunkter={aksjonspunkter} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} simuleringResultat={simuleringResultat} tilbakekrevingvalg={tilbakekrevingvalg} previewFptilbakeCallback={action('button-click') as (data: any) => Promise<any>} />`,...(si=(oi=jn.parameters)==null?void 0:oi.docs)==null?void 0:si.source}}};var li,di,ui;wn.parameters={...wn.parameters,docs:{...(li=wn.parameters)==null?void 0:li.docs,source:{originalSource:`({
  aksjonspunkter,
  submitCallback,
  tilbakekrevingvalg,
  isAksjonspunktOpen
}) => <SimuleringProsessIndex behandling={behandling} alleKodeverk={alleKodeverk as any} submitCallback={submitCallback} isReadOnly={false} isAksjonspunktOpen={isAksjonspunktOpen} readOnlySubmitButton={false} status="" vilkar={[]} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} fagsak={fagsak} aksjonspunkter={aksjonspunkter} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} simuleringResultat={simuleringResultat} tilbakekrevingvalg={tilbakekrevingvalg} previewFptilbakeCallback={action('button-click') as (data: any) => Promise<any>} />`,...(ui=(di=wn.parameters)==null?void 0:di.docs)==null?void 0:ui.source}}};const wT=["AksjonspunktVurderFeilutbetaling","AksjonspunktKontrollerEtterbetaling","AksjonspunktVurderFeilutbetalingOgEtterbetaling","SimuleringspanelUtenAksjonspunkt"];export{Gn as AksjonspunktKontrollerEtterbetaling,Vn as AksjonspunktVurderFeilutbetaling,jn as AksjonspunktVurderFeilutbetalingOgEtterbetaling,wn as SimuleringspanelUtenAksjonspunkt,wT as __namedExportsOrder,jT as default};
