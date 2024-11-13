import{j as S}from"./jsx-runtime-CkxqCPlQ.js";import{v as Ci}from"./v4-CQkTLCs1.js";import{r as f,R as A,g as $i}from"./index-DJO9vBfz.js";import{a as de}from"./dayjs.min-Bhlr18jM.js";import{F as Ji}from"./index-DJdX7xnk.js";const{addons:zi}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:Wi}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:et}=__STORYBOOK_MODULE_GLOBAL__;var Zi="storybook/actions",Xi=`${Zi}/action-event`,Qi={depth:10,clearOnStoryChange:!0,limit:50},la=(e,r)=>{let t=Object.getPrototypeOf(e);return!t||r(t)?t:la(t,r)},eo=e=>!!(typeof e=="object"&&e&&la(e,r=>/^Synthetic(?:Base)?Event$/.test(r.constructor.name))&&typeof e.persist=="function"),no=e=>{if(eo(e)){let r=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));r.persist();let t=Object.getOwnPropertyDescriptor(r,"view"),n=t==null?void 0:t.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(r,"view",{...t,value:Object.create(n.constructor.prototype)}),r}return e},ro=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?Ci():Date.now().toString(36)+Math.random().toString(36).substring(2);function Sn(e,r={}){let t={...Qi,...r},n=function(...a){var E,g;if(r.implicit){let R=(E="__STORYBOOK_PREVIEW__"in et?et.__STORYBOOK_PREVIEW__:void 0)==null?void 0:E.storyRenders.find(_=>_.phase==="playing"||_.phase==="rendering");if(R){let _=!((g=window==null?void 0:window.FEATURES)!=null&&g.disallowImplicitActionsInRenderV8),p=new Wi({phase:R.phase,name:e,deprecated:_});if(_)console.warn(p);else throw p}}let i=zi.getChannel(),o=ro(),s=5,l=a.map(no),u=a.length>1?l:l[0],d={id:o,count:0,data:{name:e,args:u},options:{...t,maxDepth:s+(t.depth||3),allowFunction:t.allowFunction||!1}};i.emit(Xi,d)};return n.isAction=!0,n.implicit=r.implicit,n}var re=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN="5032",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYR_BEREGNING="6007",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(re||{});const da={ENGANGSSTONAD:"ES",FORELDREPENGER:"FP",SVANGERSKAPSPENGER:"SVP"},qn={ARBG:"ARBG_ORG",ARBGP:"ARBG_PRIV",BRUKER:"BRUKER"},we={TILBAKEKR_OPPRETT:"TILBAKEKR_OPPRETT",TILBAKEKR_IGNORER:"TILBAKEKR_IGNORER",TILBAKEKR_INNTREKK:"TILBAKEKR_INNTREKK",TILBAKEKR_OPPDATER:"TILBAKEKR_OPPDATER"};var mr=function(e,r){return mr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])},mr(e,r)};function _e(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");mr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var V=function(){return V=Object.assign||function(r){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},V.apply(this,arguments)};function Xe(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t}function ce(e,r,t){if(t||arguments.length===2)for(var n=0,a=r.length,i;n<a;n++)(i||!(n in r))&&(i||(i=Array.prototype.slice.call(r,0,n)),i[n]=r[n]);return e.concat(i||Array.prototype.slice.call(r))}function to(e,r,t){if(t===void 0&&(t=Error),!e)throw new t(r)}var Y;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Y||(Y={}));var X;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(X||(X={}));var Qe;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Qe||(Qe={}));function nt(e){return e.type===X.literal}function ao(e){return e.type===X.argument}function ua(e){return e.type===X.number}function ka(e){return e.type===X.date}function Ea(e){return e.type===X.time}function ga(e){return e.type===X.select}function va(e){return e.type===X.plural}function io(e){return e.type===X.pound}function Ta(e){return e.type===X.tag}function ma(e){return!!(e&&typeof e=="object"&&e.type===Qe.number)}function Rr(e){return!!(e&&typeof e=="object"&&e.type===Qe.dateTime)}var Ra=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,oo=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function so(e){var r={};return e.replace(oo,function(t){var n=t.length;switch(t[0]){case"G":r.era=n===4?"long":n===5?"narrow":"short";break;case"y":r.year=n===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":r.month=["numeric","2-digit","short","long","narrow"][n-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":r.day=["numeric","2-digit"][n-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":r.weekday=n===4?"long":n===5?"narrow":"short";break;case"e":if(n<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");r.weekday=["short","long","narrow","short"][n-4];break;case"c":if(n<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");r.weekday=["short","long","narrow","short"][n-4];break;case"a":r.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":r.hourCycle="h12",r.hour=["numeric","2-digit"][n-1];break;case"H":r.hourCycle="h23",r.hour=["numeric","2-digit"][n-1];break;case"K":r.hourCycle="h11",r.hour=["numeric","2-digit"][n-1];break;case"k":r.hourCycle="h24",r.hour=["numeric","2-digit"][n-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":r.minute=["numeric","2-digit"][n-1];break;case"s":r.second=["numeric","2-digit"][n-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":r.timeZoneName=n<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),r}var lo=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function uo(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var r=e.split(lo).filter(function(g){return g.length>0}),t=[],n=0,a=r;n<a.length;n++){var i=a[n],o=i.split("/");if(o.length===0)throw new Error("Invalid number skeleton");for(var s=o[0],l=o.slice(1),u=0,d=l;u<d.length;u++){var E=d[u];if(E.length===0)throw new Error("Invalid number skeleton")}t.push({stem:s,options:l})}return t}function ko(e){return e.replace(/^(.*?)-/,"")}var rt=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,fa=/^(@+)?(\+|#+)?[rs]?$/g,Eo=/(\*)(0+)|(#+)(0+)|(0+)/g,Aa=/^(0+)$/;function tt(e){var r={};return e[e.length-1]==="r"?r.roundingPriority="morePrecision":e[e.length-1]==="s"&&(r.roundingPriority="lessPrecision"),e.replace(fa,function(t,n,a){return typeof a!="string"?(r.minimumSignificantDigits=n.length,r.maximumSignificantDigits=n.length):a==="+"?r.minimumSignificantDigits=n.length:n[0]==="#"?r.maximumSignificantDigits=n.length:(r.minimumSignificantDigits=n.length,r.maximumSignificantDigits=n.length+(typeof a=="string"?a.length:0)),""}),r}function ya(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function go(e){var r;if(e[0]==="E"&&e[1]==="E"?(r={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(r={notation:"scientific"},e=e.slice(1)),r){var t=e.slice(0,2);if(t==="+!"?(r.signDisplay="always",e=e.slice(2)):t==="+?"&&(r.signDisplay="exceptZero",e=e.slice(2)),!Aa.test(e))throw new Error("Malformed concise eng/scientific notation");r.minimumIntegerDigits=e.length}return r}function at(e){var r={},t=ya(e);return t||r}function vo(e){for(var r={},t=0,n=e;t<n.length;t++){var a=n[t];switch(a.stem){case"percent":case"%":r.style="percent";continue;case"%x100":r.style="percent",r.scale=100;continue;case"currency":r.style="currency",r.currency=a.options[0];continue;case"group-off":case",_":r.useGrouping=!1;continue;case"precision-integer":case".":r.maximumFractionDigits=0;continue;case"measure-unit":case"unit":r.style="unit",r.unit=ko(a.options[0]);continue;case"compact-short":case"K":r.notation="compact",r.compactDisplay="short";continue;case"compact-long":case"KK":r.notation="compact",r.compactDisplay="long";continue;case"scientific":r=V(V(V({},r),{notation:"scientific"}),a.options.reduce(function(l,u){return V(V({},l),at(u))},{}));continue;case"engineering":r=V(V(V({},r),{notation:"engineering"}),a.options.reduce(function(l,u){return V(V({},l),at(u))},{}));continue;case"notation-simple":r.notation="standard";continue;case"unit-width-narrow":r.currencyDisplay="narrowSymbol",r.unitDisplay="narrow";continue;case"unit-width-short":r.currencyDisplay="code",r.unitDisplay="short";continue;case"unit-width-full-name":r.currencyDisplay="name",r.unitDisplay="long";continue;case"unit-width-iso-code":r.currencyDisplay="symbol";continue;case"scale":r.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":r.roundingMode="floor";continue;case"rounding-mode-ceiling":r.roundingMode="ceil";continue;case"rounding-mode-down":r.roundingMode="trunc";continue;case"rounding-mode-up":r.roundingMode="expand";continue;case"rounding-mode-half-even":r.roundingMode="halfEven";continue;case"rounding-mode-half-down":r.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":r.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(Eo,function(l,u,d,E,g,R){if(u)r.minimumIntegerDigits=d.length;else{if(E&&g)throw new Error("We currently do not support maximum integer digits");if(R)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Aa.test(a.stem)){r.minimumIntegerDigits=a.stem.length;continue}if(rt.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(rt,function(l,u,d,E,g,R){return d==="*"?r.minimumFractionDigits=u.length:E&&E[0]==="#"?r.maximumFractionDigits=E.length:g&&R?(r.minimumFractionDigits=g.length,r.maximumFractionDigits=g.length+R.length):(r.minimumFractionDigits=u.length,r.maximumFractionDigits=u.length),""});var i=a.options[0];i==="w"?r=V(V({},r),{trailingZeroDisplay:"stripIfInteger"}):i&&(r=V(V({},r),tt(i)));continue}if(fa.test(a.stem)){r=V(V({},r),tt(a.stem));continue}var o=ya(a.stem);o&&(r=V(V({},r),o));var s=go(a.stem);s&&(r=V(V({},r),s))}return r}var Pn={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function To(e,r){for(var t="",n=0;n<e.length;n++){var a=e.charAt(n);if(a==="j"){for(var i=0;n+1<e.length&&e.charAt(n+1)===a;)i++,n++;var o=1+(i&1),s=i<2?1:3+(i>>1),l="a",u=mo(r);for((u=="H"||u=="k")&&(s=0);s-- >0;)t+=l;for(;o-- >0;)t=u+t}else a==="J"?t+="H":t+=a}return t}function mo(e){var r=e.hourCycle;if(r===void 0&&e.hourCycles&&e.hourCycles.length&&(r=e.hourCycles[0]),r)switch(r){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=e.language,n;t!=="root"&&(n=e.maximize().region);var a=Pn[n||""]||Pn[t||""]||Pn["".concat(t,"-001")]||Pn["001"];return a[0]}var lr,Ro=new RegExp("^".concat(Ra.source,"*")),fo=new RegExp("".concat(Ra.source,"*$"));function C(e,r){return{start:e,end:r}}var Ao=!!String.prototype.startsWith&&"_a".startsWith("a",1),yo=!!String.fromCodePoint,po=!!Object.fromEntries,_o=!!String.prototype.codePointAt,So=!!String.prototype.trimStart,No=!!String.prototype.trimEnd,co=!!Number.isSafeInteger,bo=co?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},fr=!0;try{var ho=_a("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");fr=((lr=ho.exec("a"))===null||lr===void 0?void 0:lr[0])==="a"}catch{fr=!1}var it=Ao?function(r,t,n){return r.startsWith(t,n)}:function(r,t,n){return r.slice(n,n+t.length)===t},Ar=yo?String.fromCodePoint:function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];for(var n="",a=r.length,i=0,o;a>i;){if(o=r[i++],o>1114111)throw RangeError(o+" is not a valid code point");n+=o<65536?String.fromCharCode(o):String.fromCharCode(((o-=65536)>>10)+55296,o%1024+56320)}return n},ot=po?Object.fromEntries:function(r){for(var t={},n=0,a=r;n<a.length;n++){var i=a[n],o=i[0],s=i[1];t[o]=s}return t},pa=_o?function(r,t){return r.codePointAt(t)}:function(r,t){var n=r.length;if(!(t<0||t>=n)){var a=r.charCodeAt(t),i;return a<55296||a>56319||t+1===n||(i=r.charCodeAt(t+1))<56320||i>57343?a:(a-55296<<10)+(i-56320)+65536}},Oo=So?function(r){return r.trimStart()}:function(r){return r.replace(Ro,"")},Io=No?function(r){return r.trimEnd()}:function(r){return r.replace(fo,"")};function _a(e,r){return new RegExp(e,r)}var yr;if(fr){var st=_a("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");yr=function(r,t){var n;st.lastIndex=t;var a=st.exec(r);return(n=a[1])!==null&&n!==void 0?n:""}}else yr=function(r,t){for(var n=[];;){var a=pa(r,t);if(a===void 0||Sa(a)||Po(a))break;n.push(a),t+=a>=65536?2:1}return Ar.apply(void 0,n)};var Ko=function(){function e(r,t){t===void 0&&(t={}),this.message=r,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(r,t,n){for(var a=[];!this.isEOF();){var i=this.char();if(i===123){var o=this.parseArgument(r,n);if(o.err)return o;a.push(o.val)}else{if(i===125&&r>0)break;if(i===35&&(t==="plural"||t==="selectordinal")){var s=this.clonePosition();this.bump(),a.push({type:X.pound,location:C(s,this.clonePosition())})}else if(i===60&&!this.ignoreTag&&this.peek()===47){if(n)break;return this.error(Y.UNMATCHED_CLOSING_TAG,C(this.clonePosition(),this.clonePosition()))}else if(i===60&&!this.ignoreTag&&pr(this.peek()||0)){var o=this.parseTag(r,t);if(o.err)return o;a.push(o.val)}else{var o=this.parseLiteral(r,t);if(o.err)return o;a.push(o.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(r,t){var n=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:X.literal,value:"<".concat(a,"/>"),location:C(n,this.clonePosition())},err:null};if(this.bumpIf(">")){var i=this.parseMessage(r+1,t,!0);if(i.err)return i;var o=i.val,s=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!pr(this.char()))return this.error(Y.INVALID_TAG,C(s,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return a!==u?this.error(Y.UNMATCHED_CLOSING_TAG,C(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:X.tag,value:a,children:o,location:C(n,this.clonePosition())},err:null}:this.error(Y.INVALID_TAG,C(s,this.clonePosition())))}else return this.error(Y.UNCLOSED_TAG,C(n,this.clonePosition()))}else return this.error(Y.INVALID_TAG,C(n,this.clonePosition()))},e.prototype.parseTagName=function(){var r=this.offset();for(this.bump();!this.isEOF()&&Do(this.char());)this.bump();return this.message.slice(r,this.offset())},e.prototype.parseLiteral=function(r,t){for(var n=this.clonePosition(),a="";;){var i=this.tryParseQuote(t);if(i){a+=i;continue}var o=this.tryParseUnquoted(r,t);if(o){a+=o;continue}var s=this.tryParseLeftAngleBracket();if(s){a+=s;continue}break}var l=C(n,this.clonePosition());return{val:{type:X.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Lo(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(r){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(r==="plural"||r==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var n=this.char();if(n===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(n);this.bump()}return Ar.apply(void 0,t)},e.prototype.tryParseUnquoted=function(r,t){if(this.isEOF())return null;var n=this.char();return n===60||n===123||n===35&&(t==="plural"||t==="selectordinal")||n===125&&r>0?null:(this.bump(),Ar(n))},e.prototype.parseArgument=function(r,t){var n=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE,C(n,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Y.EMPTY_ARGUMENT,C(n,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(Y.MALFORMED_ARGUMENT,C(n,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE,C(n,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:X.argument,value:a,location:C(n,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE,C(n,this.clonePosition())):this.parseArgumentOptions(r,t,a,n);default:return this.error(Y.MALFORMED_ARGUMENT,C(n,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var r=this.clonePosition(),t=this.offset(),n=yr(this.message,t),a=t+n.length;this.bumpTo(a);var i=this.clonePosition(),o=C(r,i);return{value:n,location:o}},e.prototype.parseArgumentOptions=function(r,t,n,a){var i,o=this.clonePosition(),s=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(s){case"":return this.error(Y.EXPECT_ARGUMENT_TYPE,C(o,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),E=this.parseSimpleArgStyleIfPossible();if(E.err)return E;var g=Io(E.val);if(g.length===0)return this.error(Y.EXPECT_ARGUMENT_STYLE,C(this.clonePosition(),this.clonePosition()));var R=C(d,this.clonePosition());u={style:g,styleLocation:R}}var _=this.tryParseArgumentClose(a);if(_.err)return _;var p=C(a,this.clonePosition());if(u&&it(u==null?void 0:u.style,"::",0)){var y=Oo(u.style.slice(2));if(s==="number"){var E=this.parseNumberSkeletonFromString(y,u.styleLocation);return E.err?E:{val:{type:X.number,value:n,location:p,style:E.val},err:null}}else{if(y.length===0)return this.error(Y.EXPECT_DATE_TIME_SKELETON,p);var N=y;this.locale&&(N=To(y,this.locale));var g={type:Qe.dateTime,pattern:N,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?so(N):{}},T=s==="date"?X.date:X.time;return{val:{type:T,value:n,location:p,style:g},err:null}}}return{val:{type:s==="number"?X.number:s==="date"?X.date:X.time,value:n,location:p,style:(i=u==null?void 0:u.style)!==null&&i!==void 0?i:null},err:null}}case"plural":case"selectordinal":case"select":{var b=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Y.EXPECT_SELECT_ARGUMENT_OPTIONS,C(b,V({},b)));this.bumpSpace();var G=this.parseIdentifierIfPossible(),F=0;if(s!=="select"&&G.value==="offset"){if(!this.bumpIf(":"))return this.error(Y.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,C(this.clonePosition(),this.clonePosition()));this.bumpSpace();var E=this.tryParseDecimalInteger(Y.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Y.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(E.err)return E;this.bumpSpace(),G=this.parseIdentifierIfPossible(),F=E.val}var U=this.tryParsePluralOrSelectOptions(r,s,t,G);if(U.err)return U;var _=this.tryParseArgumentClose(a);if(_.err)return _;var O=C(a,this.clonePosition());return s==="select"?{val:{type:X.select,value:n,options:ot(U.val),location:O},err:null}:{val:{type:X.plural,value:n,options:ot(U.val),offset:F,pluralType:s==="plural"?"cardinal":"ordinal",location:O},err:null}}default:return this.error(Y.INVALID_ARGUMENT_TYPE,C(o,l))}},e.prototype.tryParseArgumentClose=function(r){return this.isEOF()||this.char()!==125?this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE,C(r,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var r=0,t=this.clonePosition();!this.isEOF();){var n=this.char();switch(n){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Y.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,C(a,this.clonePosition()));this.bump();break}case 123:{r+=1,this.bump();break}case 125:{if(r>0)r-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(r,t){var n=[];try{n=uo(r)}catch{return this.error(Y.INVALID_NUMBER_SKELETON,t)}return{val:{type:Qe.number,tokens:n,location:t,parsedOptions:this.shouldParseSkeletons?vo(n):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(r,t,n,a){for(var i,o=!1,s=[],l=new Set,u=a.value,d=a.location;;){if(u.length===0){var E=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var g=this.tryParseDecimalInteger(Y.EXPECT_PLURAL_ARGUMENT_SELECTOR,Y.INVALID_PLURAL_ARGUMENT_SELECTOR);if(g.err)return g;d=C(E,this.clonePosition()),u=this.message.slice(E.offset,this.offset())}else break}if(l.has(u))return this.error(t==="select"?Y.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Y.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);u==="other"&&(o=!0),this.bumpSpace();var R=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?Y.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Y.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,C(this.clonePosition(),this.clonePosition()));var _=this.parseMessage(r+1,t,n);if(_.err)return _;var p=this.tryParseArgumentClose(R);if(p.err)return p;s.push([u,{value:_.val,location:C(R,this.clonePosition())}]),l.add(u),this.bumpSpace(),i=this.parseIdentifierIfPossible(),u=i.value,d=i.location}return s.length===0?this.error(t==="select"?Y.EXPECT_SELECT_ARGUMENT_SELECTOR:Y.EXPECT_PLURAL_ARGUMENT_SELECTOR,C(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!o?this.error(Y.MISSING_OTHER_CLAUSE,C(this.clonePosition(),this.clonePosition())):{val:s,err:null}},e.prototype.tryParseDecimalInteger=function(r,t){var n=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(n=-1);for(var i=!1,o=0;!this.isEOF();){var s=this.char();if(s>=48&&s<=57)i=!0,o=o*10+(s-48),this.bump();else break}var l=C(a,this.clonePosition());return i?(o*=n,bo(o)?{val:o,err:null}:this.error(t,l)):this.error(r,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var r=this.position.offset;if(r>=this.message.length)throw Error("out of bound");var t=pa(this.message,r);if(t===void 0)throw Error("Offset ".concat(r," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(r,t){return{val:null,err:{kind:r,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var r=this.char();r===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=r<65536?1:2)}},e.prototype.bumpIf=function(r){if(it(this.message,r,this.offset())){for(var t=0;t<r.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(r){var t=this.offset(),n=this.message.indexOf(r,t);return n>=0?(this.bumpTo(n),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(r){if(this.offset()>r)throw Error("targetOffset ".concat(r," must be greater than or equal to the current offset ").concat(this.offset()));for(r=Math.min(r,this.message.length);;){var t=this.offset();if(t===r)break;if(t>r)throw Error("targetOffset ".concat(r," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Sa(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var r=this.char(),t=this.offset(),n=this.message.charCodeAt(t+(r>=65536?2:1));return n??null},e}();function pr(e){return e>=97&&e<=122||e>=65&&e<=90}function Lo(e){return pr(e)||e===47}function Do(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Sa(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function Po(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function _r(e){e.forEach(function(r){if(delete r.location,ga(r)||va(r))for(var t in r.options)delete r.options[t].location,_r(r.options[t].value);else ua(r)&&ma(r.style)||(ka(r)||Ea(r))&&Rr(r.style)?delete r.style.location:Ta(r)&&_r(r.children)})}function Fo(e,r){r===void 0&&(r={}),r=V({shouldParseSkeletons:!0,requiresOtherClause:!0},r);var t=new Ko(e,r).parse();if(t.err){var n=SyntaxError(Y[t.err.kind]);throw n.location=t.err.location,n.originalMessage=t.err.message,n}return r!=null&&r.captureLocation||_r(t.val),t.val}function dr(e,r){var t=r&&r.cache?r.cache:Bo,n=r&&r.serializer?r.serializer:Uo,a=r&&r.strategy?r.strategy:Vo;return a(e,{cache:t,serializer:n})}function Mo(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Na(e,r,t,n){var a=Mo(n)?n:t(n),i=r.get(a);return typeof i>"u"&&(i=e.call(this,n),r.set(a,i)),i}function ca(e,r,t){var n=Array.prototype.slice.call(arguments,3),a=t(n),i=r.get(a);return typeof i>"u"&&(i=e.apply(this,n),r.set(a,i)),i}function Pr(e,r,t,n,a){return t.bind(r,e,n,a)}function Vo(e,r){var t=e.length===1?Na:ca;return Pr(e,this,t,r.cache.create(),r.serializer)}function Go(e,r){return Pr(e,this,ca,r.cache.create(),r.serializer)}function jo(e,r){return Pr(e,this,Na,r.cache.create(),r.serializer)}var Uo=function(){return JSON.stringify(arguments)};function Fr(){this.cache=Object.create(null)}Fr.prototype.get=function(e){return this.cache[e]};Fr.prototype.set=function(e,r){this.cache[e]=r};var Bo={create:function(){return new Fr}},ur={variadic:Go,monadic:jo},he;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(he||(he={}));var Me=function(e){_e(r,e);function r(t,n,a){var i=e.call(this,t)||this;return i.code=n,i.originalMessage=a,i}return r.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},r}(Error),lt=function(e){_e(r,e);function r(t,n,a,i){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(n,'". Options are "').concat(Object.keys(a).join('", "'),'"'),he.INVALID_VALUE,i)||this}return r}(Me),Ho=function(e){_e(r,e);function r(t,n,a){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(n),he.INVALID_VALUE,a)||this}return r}(Me),wo=function(e){_e(r,e);function r(t,n){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(n,'"'),he.MISSING_VALUE,n)||this}return r}(Me),ke;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(ke||(ke={}));function qo(e){return e.length<2?e:e.reduce(function(r,t){var n=r[r.length-1];return!n||n.type!==ke.literal||t.type!==ke.literal?r.push(t):n.value+=t.value,r},[])}function ba(e){return typeof e=="function"}function Un(e,r,t,n,a,i,o){if(e.length===1&&nt(e[0]))return[{type:ke.literal,value:e[0].value}];for(var s=[],l=0,u=e;l<u.length;l++){var d=u[l];if(nt(d)){s.push({type:ke.literal,value:d.value});continue}if(io(d)){typeof i=="number"&&s.push({type:ke.literal,value:t.getNumberFormat(r).format(i)});continue}var E=d.value;if(!(a&&E in a))throw new wo(E,o);var g=a[E];if(ao(d)){(!g||typeof g=="string"||typeof g=="number")&&(g=typeof g=="string"||typeof g=="number"?String(g):""),s.push({type:typeof g=="string"?ke.literal:ke.object,value:g});continue}if(ka(d)){var R=typeof d.style=="string"?n.date[d.style]:Rr(d.style)?d.style.parsedOptions:void 0;s.push({type:ke.literal,value:t.getDateTimeFormat(r,R).format(g)});continue}if(Ea(d)){var R=typeof d.style=="string"?n.time[d.style]:Rr(d.style)?d.style.parsedOptions:n.time.medium;s.push({type:ke.literal,value:t.getDateTimeFormat(r,R).format(g)});continue}if(ua(d)){var R=typeof d.style=="string"?n.number[d.style]:ma(d.style)?d.style.parsedOptions:void 0;R&&R.scale&&(g=g*(R.scale||1)),s.push({type:ke.literal,value:t.getNumberFormat(r,R).format(g)});continue}if(Ta(d)){var _=d.children,p=d.value,y=a[p];if(!ba(y))throw new Ho(p,"function",o);var N=Un(_,r,t,n,a,i),T=y(N.map(function(F){return F.value}));Array.isArray(T)||(T=[T]),s.push.apply(s,T.map(function(F){return{type:typeof F=="string"?ke.literal:ke.object,value:F}}))}if(ga(d)){var b=d.options[g]||d.options.other;if(!b)throw new lt(d.value,g,Object.keys(d.options),o);s.push.apply(s,Un(b.value,r,t,n,a));continue}if(va(d)){var b=d.options["=".concat(g)];if(!b){if(!Intl.PluralRules)throw new Me(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,he.MISSING_INTL_API,o);var G=t.getPluralRules(r,{type:d.pluralType}).select(g-(d.offset||0));b=d.options[G]||d.options.other}if(!b)throw new lt(d.value,g,Object.keys(d.options),o);s.push.apply(s,Un(b.value,r,t,n,a,g-(d.offset||0)));continue}}return qo(s)}function xo(e,r){return r?V(V(V({},e||{}),r||{}),Object.keys(e).reduce(function(t,n){return t[n]=V(V({},e[n]),r[n]||{}),t},{})):e}function Yo(e,r){return r?Object.keys(e).reduce(function(t,n){return t[n]=xo(e[n],r[n]),t},V({},e)):e}function kr(e){return{create:function(){return{get:function(r){return e[r]},set:function(r,t){e[r]=t}}}}}function Co(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:dr(function(){for(var r,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return new((r=Intl.NumberFormat).bind.apply(r,ce([void 0],t,!1)))},{cache:kr(e.number),strategy:ur.variadic}),getDateTimeFormat:dr(function(){for(var r,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return new((r=Intl.DateTimeFormat).bind.apply(r,ce([void 0],t,!1)))},{cache:kr(e.dateTime),strategy:ur.variadic}),getPluralRules:dr(function(){for(var r,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return new((r=Intl.PluralRules).bind.apply(r,ce([void 0],t,!1)))},{cache:kr(e.pluralRules),strategy:ur.variadic})}}var ha=function(){function e(r,t,n,a){var i=this;if(t===void 0&&(t=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var u=i.formatToParts(l);if(u.length===1)return u[0].value;var d=u.reduce(function(E,g){return!E.length||g.type!==ke.literal||typeof E[E.length-1]!="string"?E.push(g.value):E[E.length-1]+=g.value,E},[]);return d.length<=1?d[0]||"":d},this.formatToParts=function(l){return Un(i.ast,i.locales,i.formatters,i.formats,l,void 0,i.message)},this.resolvedOptions=function(){var l;return{locale:((l=i.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(i.locales)[0]}},this.getAst=function(){return i.ast},this.locales=t,this.resolvedLocale=e.resolveLocale(t),typeof r=="string"){if(this.message=r,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var o=a||{};o.formatters;var s=Xe(o,["formatters"]);this.ast=e.__parse(r,V(V({},s),{locale:this.resolvedLocale}))}else this.ast=r;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Yo(e.formats,n),this.formatters=a&&a.formatters||Co(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(r){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(r);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof r=="string"?r:r[0])}},e.__parse=Fo,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}();function je(e,r){var t=r&&r.cache?r.cache:Xo,n=r&&r.serializer?r.serializer:Zo,a=r&&r.strategy?r.strategy:Jo;return a(e,{cache:t,serializer:n})}function $o(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Oa(e,r,t,n){var a=$o(n)?n:t(n),i=r.get(a);return typeof i>"u"&&(i=e.call(this,n),r.set(a,i)),i}function Ia(e,r,t){var n=Array.prototype.slice.call(arguments,3),a=t(n),i=r.get(a);return typeof i>"u"&&(i=e.apply(this,n),r.set(a,i)),i}function Mr(e,r,t,n,a){return t.bind(r,e,n,a)}function Jo(e,r){var t=e.length===1?Oa:Ia;return Mr(e,this,t,r.cache.create(),r.serializer)}function zo(e,r){return Mr(e,this,Ia,r.cache.create(),r.serializer)}function Wo(e,r){return Mr(e,this,Oa,r.cache.create(),r.serializer)}var Zo=function(){return JSON.stringify(arguments)};function Vr(){this.cache=Object.create(null)}Vr.prototype.get=function(e){return this.cache[e]};Vr.prototype.set=function(e,r){this.cache[e]=r};var Xo={create:function(){return new Vr}},Ue={variadic:zo,monadic:Wo},qe;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(qe||(qe={}));var Nn=function(e){_e(r,e);function r(t,n,a){var i=this,o=a?a instanceof Error?a:new Error(String(a)):void 0;return i=e.call(this,"[@formatjs/intl Error ".concat(t,"] ").concat(n,`
`).concat(o?`
`.concat(o.message,`
`).concat(o.stack):""))||this,i.code=t,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(i,r),i}return r}(Error),Qo=function(e){_e(r,e);function r(t,n){return e.call(this,qe.UNSUPPORTED_FORMATTER,t,n)||this}return r}(Nn),es=function(e){_e(r,e);function r(t,n){return e.call(this,qe.INVALID_CONFIG,t,n)||this}return r}(Nn),dt=function(e){_e(r,e);function r(t,n){return e.call(this,qe.MISSING_DATA,t,n)||this}return r}(Nn),ye=function(e){_e(r,e);function r(t,n,a){var i=e.call(this,qe.FORMAT_ERROR,"".concat(t,`
Locale: `).concat(n,`
`),a)||this;return i.locale=n,i}return r}(Nn),Er=function(e){_e(r,e);function r(t,n,a,i){var o=e.call(this,"".concat(t,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),n,i)||this;return o.descriptor=a,o.locale=n,o}return r}(ye),ns=function(e){_e(r,e);function r(t,n){var a=e.call(this,qe.MISSING_TRANSLATION,'Missing message: "'.concat(t.id,'" for locale "').concat(n,'", using ').concat(t.defaultMessage?"default message (".concat(typeof t.defaultMessage=="string"?t.defaultMessage:t.defaultMessage.map(function(i){var o;return(o=i.value)!==null&&o!==void 0?o:JSON.stringify(i)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=t,a}return r}(Nn);function xe(e,r,t){return t===void 0&&(t={}),r.reduce(function(n,a){return a in e?n[a]=e[a]:a in t&&(n[a]=t[a]),n},{})}var rs=function(e){},ts=function(e){},Ka={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:rs,onWarn:ts};function La(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Be(e){return{create:function(){return{get:function(r){return e[r]},set:function(r,t){e[r]=t}}}}}function as(e){e===void 0&&(e=La());var r=Intl.RelativeTimeFormat,t=Intl.ListFormat,n=Intl.DisplayNames,a=je(function(){for(var s,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((s=Intl.DateTimeFormat).bind.apply(s,ce([void 0],l,!1)))},{cache:Be(e.dateTime),strategy:Ue.variadic}),i=je(function(){for(var s,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((s=Intl.NumberFormat).bind.apply(s,ce([void 0],l,!1)))},{cache:Be(e.number),strategy:Ue.variadic}),o=je(function(){for(var s,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((s=Intl.PluralRules).bind.apply(s,ce([void 0],l,!1)))},{cache:Be(e.pluralRules),strategy:Ue.variadic});return{getDateTimeFormat:a,getNumberFormat:i,getMessageFormat:je(function(s,l,u,d){return new ha(s,l,u,V({formatters:{getNumberFormat:i,getDateTimeFormat:a,getPluralRules:o}},d||{}))},{cache:Be(e.message),strategy:Ue.variadic}),getRelativeTimeFormat:je(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return new(r.bind.apply(r,ce([void 0],s,!1)))},{cache:Be(e.relativeTime),strategy:Ue.variadic}),getPluralRules:o,getListFormat:je(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return new(t.bind.apply(t,ce([void 0],s,!1)))},{cache:Be(e.list),strategy:Ue.variadic}),getDisplayNames:je(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return new(n.bind.apply(n,ce([void 0],s,!1)))},{cache:Be(e.displayNames),strategy:Ue.variadic})}}function Gr(e,r,t,n){var a=e&&e[r],i;if(a&&(i=a[t]),i)return i;n(new Qo("No ".concat(r," format named: ").concat(t)))}function is(e,r,t){if(t===void 0&&(t=Error),!e)throw new t(r)}var Sr;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Sr||(Sr={}));var ut;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(ut||(ut={}));function Fn(e,r){return Object.keys(e).reduce(function(t,n){return t[n]=V({timeZone:r},e[n]),t},{})}function kt(e,r){var t=Object.keys(V(V({},e),r));return t.reduce(function(n,a){return n[a]=V(V({},e[a]||{}),r[a]||{}),n},{})}function Et(e,r){if(!r)return e;var t=ha.formats;return V(V(V({},t),e),{date:kt(Fn(t.date,r),Fn(e.date||{},r)),time:kt(Fn(t.time,r),Fn(e.time||{},r))})}var Nr=function(e,r,t,n,a){var i=e.locale,o=e.formats,s=e.messages,l=e.defaultLocale,u=e.defaultFormats,d=e.fallbackOnEmptyString,E=e.onError,g=e.timeZone,R=e.defaultRichTextElements;t===void 0&&(t={id:""});var _=t.id,p=t.defaultMessage;is(!!_,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var y=String(_),N=s&&Object.prototype.hasOwnProperty.call(s,y)&&s[y];if(Array.isArray(N)&&N.length===1&&N[0].type===Sr.literal)return N[0].value;if(!n&&N&&typeof N=="string"&&!R)return N.replace(/'\{(.*?)\}'/gi,"{$1}");if(n=V(V({},R),n||{}),o=Et(o,g),u=Et(u,g),!N){if(d===!1&&N==="")return N;if((!p||i&&i.toLowerCase()!==l.toLowerCase())&&E(new ns(t,i)),p)try{var T=r.getMessageFormat(p,l,u,a);return T.format(n)}catch(b){return E(new Er('Error formatting default message for: "'.concat(y,'", rendering default message verbatim'),i,t,b)),typeof p=="string"?p:y}return y}try{var T=r.getMessageFormat(N,i,o,V({formatters:r},a||{}));return T.format(n)}catch(b){E(new Er('Error formatting message: "'.concat(y,'", using ').concat(p?"default message":"id"," as fallback."),i,t,b))}if(p)try{var T=r.getMessageFormat(p,l,u,a);return T.format(n)}catch(b){E(new Er('Error formatting the default message for: "'.concat(y,'", rendering message verbatim'),i,t,b))}return typeof N=="string"?N:typeof p=="string"?p:y},Da=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Qn(e,r,t,n){var a=e.locale,i=e.formats,o=e.onError,s=e.timeZone;n===void 0&&(n={});var l=n.format,u=V(V({},s&&{timeZone:s}),l&&Gr(i,r,l,o)),d=xe(n,Da,u);return r==="time"&&!d.hour&&!d.minute&&!d.second&&!d.timeStyle&&!d.dateStyle&&(d=V(V({},d),{hour:"numeric",minute:"numeric"})),t(a,d)}function os(e,r){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var a=t[0],i=t[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return Qn(e,"date",r,o).format(s)}catch(l){e.onError(new ye("Error formatting date.",e.locale,l))}return String(s)}function ss(e,r){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var a=t[0],i=t[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return Qn(e,"time",r,o).format(s)}catch(l){e.onError(new ye("Error formatting time.",e.locale,l))}return String(s)}function ls(e,r){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var a=t[0],i=t[1],o=t[2],s=o===void 0?{}:o,l=e.timeZone,u=e.locale,d=e.onError,E=xe(s,Da,l?{timeZone:l}:{});try{return r(u,E).formatRange(a,i)}catch(g){d(new ye("Error formatting date time range.",e.locale,g))}return String(a)}function ds(e,r){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var a=t[0],i=t[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return Qn(e,"date",r,o).formatToParts(s)}catch(l){e.onError(new ye("Error formatting date.",e.locale,l))}return[]}function us(e,r){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var a=t[0],i=t[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return Qn(e,"time",r,o).formatToParts(s)}catch(l){e.onError(new ye("Error formatting time.",e.locale,l))}return[]}var ks=["style","type","fallback","languageDisplay"];function Es(e,r,t,n){var a=e.locale,i=e.onError,o=Intl.DisplayNames;o||i(new Me(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,he.MISSING_INTL_API));var s=xe(n,ks);try{return r(a,s).of(t)}catch(l){i(new ye("Error formatting display name.",a,l))}}var gs=["type","style"],gt=Date.now();function vs(e){return"".concat(gt,"_").concat(e,"_").concat(gt)}function Ts(e,r,t,n){n===void 0&&(n={});var a=Pa(e,r,t,n).reduce(function(i,o){var s=o.value;return typeof s!="string"?i.push(s):typeof i[i.length-1]=="string"?i[i.length-1]+=s:i.push(s),i},[]);return a.length===1?a[0]:a.length===0?"":a}function Pa(e,r,t,n){var a=e.locale,i=e.onError;n===void 0&&(n={});var o=Intl.ListFormat;o||i(new Me(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,he.MISSING_INTL_API));var s=xe(n,gs);try{var l={},u=t.map(function(d,E){if(typeof d=="object"){var g=vs(E);return l[g]=d,g}return String(d)});return r(a,s).formatToParts(u).map(function(d){return d.type==="literal"?d:V(V({},d),{value:l[d.value]||d.value})})}catch(d){i(new ye("Error formatting list.",a,d))}return t}var ms=["type"];function Rs(e,r,t,n){var a=e.locale,i=e.onError;n===void 0&&(n={}),Intl.PluralRules||i(new Me(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,he.MISSING_INTL_API));var o=xe(n,ms);try{return r(a,o).select(t)}catch(s){i(new ye("Error formatting plural.",a,s))}return"other"}var fs=["numeric","style"];function As(e,r,t){var n=e.locale,a=e.formats,i=e.onError;t===void 0&&(t={});var o=t.format,s=!!o&&Gr(a,"relative",o,i)||{},l=xe(t,fs,s);return r(n,l)}function ys(e,r,t,n,a){a===void 0&&(a={}),n||(n="second");var i=Intl.RelativeTimeFormat;i||e.onError(new Me(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,he.MISSING_INTL_API));try{return As(e,r,a).format(t,n)}catch(o){e.onError(new ye("Error formatting relative time.",e.locale,o))}return String(t)}var ps=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Fa(e,r,t){var n=e.locale,a=e.formats,i=e.onError;t===void 0&&(t={});var o=t.format,s=o&&Gr(a,"number",o,i)||{},l=xe(t,ps,s);return r(n,l)}function _s(e,r,t,n){n===void 0&&(n={});try{return Fa(e,r,n).format(t)}catch(a){e.onError(new ye("Error formatting number.",e.locale,a))}return String(t)}function Ss(e,r,t,n){n===void 0&&(n={});try{return Fa(e,r,n).formatToParts(t)}catch(a){e.onError(new ye("Error formatting number.",e.locale,a))}return[]}function Ns(e){var r=e?e[Object.keys(e)[0]]:void 0;return typeof r=="string"}function cs(e){e.onWarn&&e.defaultRichTextElements&&Ns(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function bs(e,r){var t=as(r),n=V(V({},Ka),e),a=n.locale,i=n.defaultLocale,o=n.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&o?o(new dt('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&o&&o(new dt('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(o&&o(new es('"locale" was not configured, using "'.concat(i,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),n.locale=n.defaultLocale||"en"),cs(n),V(V({},n),{formatters:t,formatNumber:_s.bind(null,n,t.getNumberFormat),formatNumberToParts:Ss.bind(null,n,t.getNumberFormat),formatRelativeTime:ys.bind(null,n,t.getRelativeTimeFormat),formatDate:os.bind(null,n,t.getDateTimeFormat),formatDateToParts:ds.bind(null,n,t.getDateTimeFormat),formatTime:ss.bind(null,n,t.getDateTimeFormat),formatDateTimeRange:ls.bind(null,n,t.getDateTimeFormat),formatTimeToParts:us.bind(null,n,t.getDateTimeFormat),formatPlural:Rs.bind(null,n,t.getPluralRules),formatMessage:Nr.bind(null,n,t),$t:Nr.bind(null,n,t),formatList:Ts.bind(null,n,t.getListFormat),formatListToParts:Pa.bind(null,n,t.getListFormat),formatDisplayName:Es.bind(null,n,t.getDisplayNames)})}function hs(e){to(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Os=V(V({},Ka),{textComponent:f.Fragment});function Is(e){return function(r){return e(f.Children.toArray(r))}}function vt(e,r){if(e===r)return!0;if(!e||!r)return!1;var t=Object.keys(e),n=Object.keys(r),a=t.length;if(n.length!==a)return!1;for(var i=0;i<a;i++){var o=t[i];if(e[o]!==r[o]||!Object.prototype.hasOwnProperty.call(r,o))return!1}return!0}var jr=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=f.createContext(null)):f.createContext(null);jr.Consumer;var Ks=jr.Provider,Ls=Ks,Ds=jr;function cn(){var e=f.useContext(Ds);return hs(e),e}var cr;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(cr||(cr={}));var br;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(br||(br={}));function Ma(e){var r=function(t){var n=cn(),a=t.value,i=t.children,o=Xe(t,["value","children"]),s=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?n.formatDateToParts(s,o):n.formatTimeToParts(s,o);return i(l)};return r.displayName=br[e],r}function bn(e){var r=function(t){var n=cn(),a=t.value,i=t.children,o=Xe(t,["value","children"]),s=n[e](a,o);if(typeof i=="function")return i(s);var l=n.textComponent||f.Fragment;return f.createElement(l,null,s)};return r.displayName=cr[e],r}function Va(e){return e&&Object.keys(e).reduce(function(r,t){var n=e[t];return r[t]=ba(n)?Is(n):n,r},{})}var Tt=function(e,r,t,n){for(var a=[],i=4;i<arguments.length;i++)a[i-4]=arguments[i];var o=Va(n),s=Nr.apply(void 0,ce([e,r,t,o],a,!1));return Array.isArray(s)?f.Children.toArray(s):s},Ps=function(e,r){var t=e.defaultRichTextElements,n=Xe(e,["defaultRichTextElements"]),a=Va(t),i=bs(V(V(V({},Os),n),{defaultRichTextElements:a}),r),o={locale:i.locale,timeZone:i.timeZone,fallbackOnEmptyString:i.fallbackOnEmptyString,formats:i.formats,defaultLocale:i.defaultLocale,defaultFormats:i.defaultFormats,messages:i.messages,onError:i.onError,defaultRichTextElements:a};return V(V({},i),{formatMessage:Tt.bind(null,o,i.formatters),$t:Tt.bind(null,o,i.formatters)})};function Fs(e,r){var t=e.values,n=Xe(e,["values"]),a=r.values,i=Xe(r,["values"]);return vt(a,t)&&vt(n,i)}function Ga(e){var r=cn(),t=r.formatMessage,n=r.textComponent,a=n===void 0?f.Fragment:n,i=e.id,o=e.description,s=e.defaultMessage,l=e.values,u=e.children,d=e.tagName,E=d===void 0?a:d,g=e.ignoreTag,R={id:i,description:o,defaultMessage:s},_=t(R,l,{ignoreTag:g});return typeof u=="function"?u(Array.isArray(_)?_:[_]):E?f.createElement(E,null,f.Children.toArray(_)):f.createElement(f.Fragment,null,_)}Ga.displayName="FormattedMessage";var Z=f.memo(Ga,Fs);Z.displayName="MemoizedFormattedMessage";bn("formatDate");bn("formatTime");bn("formatNumber");bn("formatList");bn("formatDisplayName");Ma("formatDate");Ma("formatTime");const Ms=[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],Vs=[{kode:"REGISTRER_OM_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrering av opplysninger om verge/fullmektig"},{kode:"MANGELFULL_SØKNAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Mangelfull søknad"},{kode:"FASTSATT_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak - splitting av periode"},{kode:"BEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet"},{kode:"REGISTRER_PAPIRSØK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrer papirsøknad"},{kode:"BEH_STARTET_PÅ_NYTT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet på nytt"},{kode:"MIGRERT_FRA_INFOTRYGD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder flytting av sak fra Infotrygd"},{kode:"FORSLAG_VEDTAK_UTEN_TOTRINN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått"},{kode:"BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjenopptatt"},{kode:"AVBRUTT_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling er henlagt"},{kode:"ANKE_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ankebehandling"},{kode:"BREV_BESTILT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev bestilt"},{kode:"ENDRET_DEKNINGSGRAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Dekningsgrad er endret"},{kode:"OPPGAVE_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Oppgave før vedtak"},{kode:"IVERKSETTELSE_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen venter på iverksettelse"},{kode:"FASTSATT_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak"},{kode:"OVST_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak"},{kode:"INNSYN_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Innsynsbehandling opprettet"},{kode:"TILBAKEKR_VIDEREBEHANDLING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Metode for å håndtere tilbakekreving av feilutbetailng er valgt."},{kode:"SAK_GODKJENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak godkjent"},{kode:"BEH_KØET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er satt på vent"},{kode:"NYE_REGOPPLYSNINGER",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Nye registeropplysninger"},{kode:"BEH_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling på vent"},{kode:"TERMINBEKREFTELSE_UGYLDIG",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Terminbekreftelsens utstedt dato er før 22. svangerskapsuke. Behandlingen fortsatt uten ny terminbekreftelse"},{kode:"FAKTA_ENDRET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Fakta endret"},{kode:"MIGRERT_FRA_INFOTRYGD_FJERNET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder ikke lenger flytting av sak fra Infotrygd"},{kode:"BYTT_ENHET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Bytt enhet"},{kode:"REVURD_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Revurdering opprettet"},{kode:"KLAGE_BEH_NFP",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling NFP"},{kode:"KØET_BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Køet behandling er gjenopptatt"},{kode:"OVST_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak - splitting av periode"},{kode:"ANKEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Anke mottatt"},{kode:"UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet soknadsperiode"},{kode:"KLAGE_BEH_NK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling KA"},{kode:"AVKLART_AKTIVITETSKRAV",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Avklart aktivitetskrav"},{kode:"NY_INFO_FRA_TPS",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ny info fra TPS"},{kode:"KLAGEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klage mottatt"},{kode:"VEDTAK_FATTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak fattet"},{kode:"BEH_AVBRUTT_VUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vurdering før vedtak"},{kode:"UENDRET_UTFALL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Uendret utfall"},{kode:"VRS_REV_IKKE_SNDT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Varsel om revurdering ikke sendt"},{kode:"SPOLT_TILBAKE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er flyttet"},{kode:"OPPTJENING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet opptjeningsperiode"},{kode:"SAK_RETUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak retur"},{kode:"FJERNET_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Opplysninger om verge/fullmektig fjernet"},{kode:"BEH_MAN_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Gjenoppta behandling"},{kode:"BEH_OPPDATERT_NYE_OPPL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen oppdatert med nye opplysninger"},{kode:"VEDLEGG_MOTTATT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedlegg mottatt"},{kode:"OVERSTYRT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Overstyrt"},{kode:"BREV_SENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev sendt"},{kode:"FORSLAG_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått og sendt til beslutter"}],Gs=[{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],js=[{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"},{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"}],Us=[{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"}],Bs=[{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"}],Hs=[{kode:"EGEN_NÆRING",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Egen næring"},{kode:"BRUKERS_ANDEL",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Brukers andel"},{kode:"FRILANS",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Frilans"}],ws=[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],qs=[{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"},{kode:"ENDRING_I_BEREGNING_OG_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning og uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"}],xs=[{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilans"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (fisker)"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (dagmamma)"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"},{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"}],Ys=[{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"}],Cs=[{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Vedtaksinstans"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aleneomsorg og annenpart rett"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstans"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"}],$s=[{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"},{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"}],Js=[{kode:"HJEMSENDE_UTEN_Å_OPPHEVE",kodeverk:"KLAGEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"OPPHEVE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket oppheves"},{kode:"MEDHOLD_I_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Medhold"},{kode:"STADFESTE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"AVVIS_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Klagen avvises"}],zs=[{kode:"BEH_STARTET_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Behandling startet på nytt"},{kode:"BERORT_BEH_OPPHOR",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens vedtak er opphørt"},{kode:"SAKSBEH_START_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Saksbehandling starter på nytt"},{kode:"BERORT_BEH_ENDRING_DEKNINGSGRAD",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens behandling har endret antall disponible stønadsdager"}],Ws=[{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"},{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"ANNET",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Andre typer som f.eks utsettelse"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"}],Zs=[{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt søknad mangler"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"}],Xs=[{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"}],Qs=[{kode:"TILBAKEKR_IGNORER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling, avvent samordning"},{kode:"TILBAKEKR_INNTREKK",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling hvor inntrekk dekker hele beløpet"},{kode:"TILBAKEKR_OPPRETT",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling med tilbakekreving"},{kode:"TILBAKEKR_OPPDATER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Endringer vil oppdatere eksisterende feilutbetalte perioder og beløp."}],el=[{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],nl=[{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"}],rl=[{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"}],tl=[{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"}],al=[{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"},{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"}],il=[{kode:"UTTAK_PERIODE_FOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fradato uttaksperiode"},{kode:"TPS_ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"UTTAK_PERIODE_TOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Tildato uttaksperiode"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"FODSELSDATO",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fødselsdato"}],ol=[{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"}],sl=[{kode:"MANGLENDE_OPPLYSNINGER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen, men har manglende opplysninger"},{kode:"SØKER_ER_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er i permisjon"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekten er ikke med i beregningsgrunnlaget"},{kode:"IKKE_BRUK",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Ikke bruk"},{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK_MED_OVERSTYRTE_PERIODER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"BENYTT_A_INNTEKT_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekt fra A-inntekt benyttes i beregningsgrunnlaget"},{kode:"SØKER_ER_IKKE_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er ikke i permisjon"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er lagt til av saksbehandler beregningsgrunnlaget"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er slått sammen med annet"}],ll=[{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"}],dl=[{kode:"CAF",kodeverk:"LANDKODER",navn:"SENTRALAFRIKA. REP."},{kode:"ARG",kodeverk:"LANDKODER",navn:"ARGENTINA"},{kode:"IOT",kodeverk:"LANDKODER",navn:"BRITISK-INDISKE HAV"},{kode:"CCK",kodeverk:"LANDKODER",navn:"KOKOSØYENE"},{kode:"MEX",kodeverk:"LANDKODER",navn:"MEXICO"},{kode:"CHN",kodeverk:"LANDKODER",navn:"REPUBLIKKEN KINA"},{kode:"RUS",kodeverk:"LANDKODER",navn:"RUSSLAND"},{kode:"BHS",kodeverk:"LANDKODER",navn:"BAHAMAS"},{kode:"SYC",kodeverk:"LANDKODER",navn:"SEYCHELLENE"},{kode:"CYP",kodeverk:"LANDKODER",navn:"KYPROS"},{kode:"AUT",kodeverk:"LANDKODER",navn:"ØSTERRIKE"},{kode:"QAT",kodeverk:"LANDKODER",navn:"QATAR"},{kode:"VNM",kodeverk:"LANDKODER",navn:"VIETNAM"},{kode:"HMD",kodeverk:"LANDKODER",navn:"HEARD OG MCDONALD ØYENE"},{kode:"KEN",kodeverk:"LANDKODER",navn:"KENYA"},{kode:"ASM",kodeverk:"LANDKODER",navn:"AM. SAMOA"},{kode:"PAK",kodeverk:"LANDKODER",navn:"PAKISTAN"},{kode:"ATG",kodeverk:"LANDKODER",navn:"ANTIGUA OG BARBUDA"},{kode:"TZA",kodeverk:"LANDKODER",navn:"TANZANIA"},{kode:"ZAF",kodeverk:"LANDKODER",navn:"SØR-AFRIKA"},{kode:"CMR",kodeverk:"LANDKODER",navn:"KAMERUN"},{kode:"MLI",kodeverk:"LANDKODER",navn:"MALI"},{kode:"SLV",kodeverk:"LANDKODER",navn:"EL SALVADOR"},{kode:"MAF",kodeverk:"LANDKODER",navn:"SAINT MARTIN"},{kode:"KGZ",kodeverk:"LANDKODER",navn:"KIRGISISTAN"},{kode:"FJI",kodeverk:"LANDKODER",navn:"FIJI"},{kode:"RWA",kodeverk:"LANDKODER",navn:"RWANDA"},{kode:"GEO",kodeverk:"LANDKODER",navn:"GEORGIA"},{kode:"REU",kodeverk:"LANDKODER",navn:"REUNION"},{kode:"MTQ",kodeverk:"LANDKODER",navn:"MARTINIQUE"},{kode:"SDN",kodeverk:"LANDKODER",navn:"SUDAN"},{kode:"AND",kodeverk:"LANDKODER",navn:"ANDORRA"},{kode:"COK",kodeverk:"LANDKODER",navn:"COOKØYENE"},{kode:"SHN",kodeverk:"LANDKODER",navn:"ST. HELENA"},{kode:"COL",kodeverk:"LANDKODER",navn:"COLOMBIA"},{kode:"PER",kodeverk:"LANDKODER",navn:"PERU"},{kode:"STP",kodeverk:"LANDKODER",navn:"SAO TOME OG PRINCIPE"},{kode:"COM",kodeverk:"LANDKODER",navn:"KOMORENE"},{kode:"LUX",kodeverk:"LANDKODER",navn:"LUXEMBOURG"},{kode:"PNG",kodeverk:"LANDKODER",navn:"PAPUA NY-GUINEA"},{kode:"MKD",kodeverk:"LANDKODER",navn:"MAKEDONIA"},{kode:"GIN",kodeverk:"LANDKODER",navn:"GUINEA"},{kode:"CYM",kodeverk:"LANDKODER",navn:"CAYMANØYENE"},{kode:"VGB",kodeverk:"LANDKODER",navn:"JOMFRUØYENE BRIT."},{kode:"IRL",kodeverk:"LANDKODER",navn:"IRLAND"},{kode:"XXX",kodeverk:"LANDKODER",navn:"STATSLØS"},{kode:"HTI",kodeverk:"LANDKODER",navn:"HAITI"},{kode:"LBN",kodeverk:"LANDKODER",navn:"LIBANON"},{kode:"BRN",kodeverk:"LANDKODER",navn:"BRUNEI"},{kode:"GMB",kodeverk:"LANDKODER",navn:"GAMBIA"},{kode:"MLT",kodeverk:"LANDKODER",navn:"MALTA"},{kode:"CRI",kodeverk:"LANDKODER",navn:"COSTA RICA"},{kode:"UZB",kodeverk:"LANDKODER",navn:"UZBEKISTAN"},{kode:"CXR",kodeverk:"LANDKODER",navn:"CHRISTMASØYA"},{kode:"TUR",kodeverk:"LANDKODER",navn:"TYRKIA"},{kode:"UKR",kodeverk:"LANDKODER",navn:"UKRAINA"},{kode:"SUN",kodeverk:"LANDKODER",navn:"SOVJETUNIONEN"},{kode:"PYF",kodeverk:"LANDKODER",navn:"FRANSK POLYNESIA"},{kode:"MNE",kodeverk:"LANDKODER",navn:"MONTENEGRO"},{kode:"BIH",kodeverk:"LANDKODER",navn:"BOSNIA-HERCEGOVINA"},{kode:"PAN",kodeverk:"LANDKODER",navn:"PANAMA"},{kode:"SJM",kodeverk:"LANDKODER",navn:"SVALBARD OG JAN MAYEN"},{kode:"NIU",kodeverk:"LANDKODER",navn:"NIUE"},{kode:"SUR",kodeverk:"LANDKODER",navn:"SURINAM"},{kode:"MUS",kodeverk:"LANDKODER",navn:"MAURITIUS"},{kode:"CHE",kodeverk:"LANDKODER",navn:"SVEITS"},{kode:"BEL",kodeverk:"LANDKODER",navn:"BELGIA"},{kode:"TTO",kodeverk:"LANDKODER",navn:"TRINIDAD OG TOBAGO"},{kode:"SWZ",kodeverk:"LANDKODER",navn:"SWAZILAND"},{kode:"TUN",kodeverk:"LANDKODER",navn:"TUNISIA"},{kode:"GLP",kodeverk:"LANDKODER",navn:"GUADELOUPE"},{kode:"KWT",kodeverk:"LANDKODER",navn:"KUWAIT"},{kode:"DMA",kodeverk:"LANDKODER",navn:"DOMINICA"},{kode:"BGR",kodeverk:"LANDKODER",navn:"BULGARIA"},{kode:"ISL",kodeverk:"LANDKODER",navn:"ISLAND"},{kode:"SVN",kodeverk:"LANDKODER",navn:"SLOVENIA"},{kode:"PLW",kodeverk:"LANDKODER",navn:"PALAU"},{kode:"GBR",kodeverk:"LANDKODER",navn:"STORBRITANNIA"},{kode:"NAM",kodeverk:"LANDKODER",navn:"NAMIBIA"},{kode:"FSM",kodeverk:"LANDKODER",navn:"MIKRONESIAFØD."},{kode:"GNB",kodeverk:"LANDKODER",navn:"GUINEA-BISSAU"},{kode:"UMI",kodeverk:"LANDKODER",navn:"MINDRE STILLEHAVSØYER"},{kode:"MDA",kodeverk:"LANDKODER",navn:"MOLDOVA"},{kode:"MMR",kodeverk:"LANDKODER",navn:"MYANMAR (BURMA)"},{kode:"MOZ",kodeverk:"LANDKODER",navn:"MOSAMBIK"},{kode:"SGS",kodeverk:"LANDKODER",navn:"SØR-GEORGIA OG SØR-SANDWICHØYE"},{kode:"NPL",kodeverk:"LANDKODER",navn:"NEPAL"},{kode:"BES",kodeverk:"LANDKODER",navn:"BONAIRE, SINT EUSTATIUS, SABA"},{kode:"LBR",kodeverk:"LANDKODER",navn:"LIBERIA"},{kode:"MDG",kodeverk:"LANDKODER",navn:"MADAGASKAR"},{kode:"VIR",kodeverk:"LANDKODER",navn:"JOMFRUØYENE AM."},{kode:"ARE",kodeverk:"LANDKODER",navn:"DE ARABISKE EMIRATER"},{kode:"USA",kodeverk:"LANDKODER",navn:"USA"},{kode:"NFK",kodeverk:"LANDKODER",navn:"NORFOLKØYA"},{kode:"HKG",kodeverk:"LANDKODER",navn:"HONGKONG"},{kode:"DEU",kodeverk:"LANDKODER",navn:"TYSKLAND"},{kode:"LIE",kodeverk:"LANDKODER",navn:"LIECHTENSTEIN"},{kode:"ECU",kodeverk:"LANDKODER",navn:"ECUADOR"},{kode:"POL",kodeverk:"LANDKODER",navn:"POLEN"},{kode:"PRK",kodeverk:"LANDKODER",navn:"NORD-KOREA"},{kode:"GGY",kodeverk:"LANDKODER",navn:"GUERNSEY"},{kode:"NZL",kodeverk:"LANDKODER",navn:"NEW ZEALAND"},{kode:"MAR",kodeverk:"LANDKODER",navn:"MAROKKO"},{kode:"BWA",kodeverk:"LANDKODER",navn:"BOTSWANA"},{kode:"GUM",kodeverk:"LANDKODER",navn:"GUAM"},{kode:"YUG",kodeverk:"LANDKODER",navn:"JUGOSLAVIA"},{kode:"SEN",kodeverk:"LANDKODER",navn:"SENEGAL"},{kode:"MWI",kodeverk:"LANDKODER",navn:"MALAWI"},{kode:"TKM",kodeverk:"LANDKODER",navn:"TURKMENISTAN"},{kode:"GAB",kodeverk:"LANDKODER",navn:"GABON"},{kode:"FIN",kodeverk:"LANDKODER",navn:"FINLAND"},{kode:"PRY",kodeverk:"LANDKODER",navn:"PARAGUAY"},{kode:"PSE",kodeverk:"LANDKODER",navn:"DET PALESTINSKE OMRÅDET"},{kode:"FRA",kodeverk:"LANDKODER",navn:"FRANKRIKE"},{kode:"ZWE",kodeverk:"LANDKODER",navn:"ZIMBABWE"},{kode:"AZE",kodeverk:"LANDKODER",navn:"AZERBAJDZJAN"},{kode:"SXM",kodeverk:"LANDKODER",navn:"SINT MAARTEN"},{kode:"NIC",kodeverk:"LANDKODER",navn:"NICARAGUA"},{kode:"CAN",kodeverk:"LANDKODER",navn:"CANADA"},{kode:"COG",kodeverk:"LANDKODER",navn:"KONGO, REPUBLIKKEN"},{kode:"JPN",kodeverk:"LANDKODER",navn:"JAPAN"},{kode:"KOR",kodeverk:"LANDKODER",navn:"SØR-KOREA"},{kode:"HUN",kodeverk:"LANDKODER",navn:"UNGARN"},{kode:"YEM",kodeverk:"LANDKODER",navn:"JEMEN"},{kode:"CHL",kodeverk:"LANDKODER",navn:"CHILE"},{kode:"BRB",kodeverk:"LANDKODER",navn:"BARBADOS"},{kode:"DNK",kodeverk:"LANDKODER",navn:"DANMARK"},{kode:"NRU",kodeverk:"LANDKODER",navn:"NAURU"},{kode:"VCT",kodeverk:"LANDKODER",navn:"ST. VINCENT"},{kode:"BEN",kodeverk:"LANDKODER",navn:"BENIN"},{kode:"SMR",kodeverk:"LANDKODER",navn:"SAN MARINO"},{kode:"TCD",kodeverk:"LANDKODER",navn:"TSJAD"},{kode:"CUW",kodeverk:"LANDKODER",navn:"CURACAO"},{kode:"IRN",kodeverk:"LANDKODER",navn:"IRAN"},{kode:"SWE",kodeverk:"LANDKODER",navn:"SVERIGE"},{kode:"ERI",kodeverk:"LANDKODER",navn:"ERITREA"},{kode:"XUK",kodeverk:"LANDKODER",navn:"UKJENT"},{kode:"MDV",kodeverk:"LANDKODER",navn:"MALDIVENE"},{kode:"CSK",kodeverk:"LANDKODER",navn:"TSJEKKOSLOVAKIA"},{kode:"GRD",kodeverk:"LANDKODER",navn:"GRENADA"},{kode:"HND",kodeverk:"LANDKODER",navn:"HONDURAS"},{kode:"FRO",kodeverk:"LANDKODER",navn:"FÆRØYENE"},{kode:"COD",kodeverk:"LANDKODER",navn:"KONGO, DEN DEMOKR. REPUBL"},{kode:"SRB",kodeverk:"LANDKODER",navn:"SERBIA"},{kode:"AGO",kodeverk:"LANDKODER",navn:"ANGOLA"},{kode:"NCL",kodeverk:"LANDKODER",navn:"NY-KALEDONIA"},{kode:"SCG",kodeverk:"LANDKODER",navn:"SERBIA OG MONTENEGRO"},{kode:"GTM",kodeverk:"LANDKODER",navn:"GUATEMALA"},{kode:"AFG",kodeverk:"LANDKODER",navn:"AFGHANISTAN"},{kode:"JAM",kodeverk:"LANDKODER",navn:"JAMAICA"},{kode:"UGA",kodeverk:"LANDKODER",navn:"UGANDA"},{kode:"IMN",kodeverk:"LANDKODER",navn:"ISLE OF MAN"},{kode:"ISR",kodeverk:"LANDKODER",navn:"ISRAEL"},{kode:"SOM",kodeverk:"LANDKODER",navn:"SOMALIA"},{kode:"MNP",kodeverk:"LANDKODER",navn:"NORD-MARIANENE"},{kode:"XXK",kodeverk:"LANDKODER",navn:"KOSOVO"},{kode:"BLR",kodeverk:"LANDKODER",navn:"HVITERUSSLAND"},{kode:"LSO",kodeverk:"LANDKODER",navn:"LESOTHO"},{kode:"NER",kodeverk:"LANDKODER",navn:"NIGER"},{kode:"IDN",kodeverk:"LANDKODER",navn:"INDONESIA"},{kode:"CZE",kodeverk:"LANDKODER",navn:"DEN TSJEKKISKE REP."},{kode:"URY",kodeverk:"LANDKODER",navn:"URUGUAY"},{kode:"BGD",kodeverk:"LANDKODER",navn:"BANGLADESH"},{kode:"WLF",kodeverk:"LANDKODER",navn:"WALLIS/FUTUNAØYENE"},{kode:"CIV",kodeverk:"LANDKODER",navn:"ELFENBEINSKYSTEN"},{kode:"ABW",kodeverk:"LANDKODER",navn:"ARUBA"},{kode:"SLB",kodeverk:"LANDKODER",navn:"SALOMONØYENE"},{kode:"TWN",kodeverk:"LANDKODER",navn:"TAIWAN"},{kode:"SLE",kodeverk:"LANDKODER",navn:"SIERRA LEONE"},{kode:"BRA",kodeverk:"LANDKODER",navn:"BRASIL"},{kode:"DJI",kodeverk:"LANDKODER",navn:"DJIBOUTI"},{kode:"PRI",kodeverk:"LANDKODER",navn:"PUERTO RICO"},{kode:"PRT",kodeverk:"LANDKODER",navn:"PORTUGAL"},{kode:"ANT",kodeverk:"LANDKODER",navn:"DE NEDERLANDSKE ANTILLENE"},{kode:"THA",kodeverk:"LANDKODER",navn:"THAILAND"},{kode:"TLS",kodeverk:"LANDKODER",navn:"ØST-TIMOR"},{kode:"SPM",kodeverk:"LANDKODER",navn:"ST-PIERRE OG MIQUELON"},{kode:"ALB",kodeverk:"LANDKODER",navn:"ALBANIA"},{kode:"EGY",kodeverk:"LANDKODER",navn:"EGYPT"},{kode:"GRC",kodeverk:"LANDKODER",navn:"HELLAS"},{kode:"BFA",kodeverk:"LANDKODER",navn:"BURKINA FASO"},{kode:"ALA",kodeverk:"LANDKODER",navn:"ÅLAND"},{kode:"BOL",kodeverk:"LANDKODER",navn:"BOLIVIA"},{kode:"DDR",kodeverk:"LANDKODER",navn:"TYSKLAND (ØST)"},{kode:"HRV",kodeverk:"LANDKODER",navn:"KROATIA"},{kode:"AUS",kodeverk:"LANDKODER",navn:"AUSTRALIA"},{kode:"NGA",kodeverk:"LANDKODER",navn:"NIGERIA"},{kode:"LBY",kodeverk:"LANDKODER",navn:"LIBYA"},{kode:"MYT",kodeverk:"LANDKODER",navn:"MAYOTTE"},{kode:"LVA",kodeverk:"LANDKODER",navn:"LATVIA"},{kode:"BTN",kodeverk:"LANDKODER",navn:"BHUTAN"},{kode:"MSR",kodeverk:"LANDKODER",navn:"MONSERRAT"},{kode:"???",kodeverk:"LANDKODER",navn:"UOPPGITT/UKJENT"},{kode:"OMN",kodeverk:"LANDKODER",navn:"OMAN"},{kode:"SVK",kodeverk:"LANDKODER",navn:"SLOVAKIA"},{kode:"TUV",kodeverk:"LANDKODER",navn:"TUVALU"},{kode:"VEN",kodeverk:"LANDKODER",navn:"VENEZUELA"},{kode:"ITA",kodeverk:"LANDKODER",navn:"ITALIA"},{kode:"KHM",kodeverk:"LANDKODER",navn:"KAMBODSJA"},{kode:"ARM",kodeverk:"LANDKODER",navn:"ARMENIA"},{kode:"LCA",kodeverk:"LANDKODER",navn:"ST. LUCIA"},{kode:"GIB",kodeverk:"LANDKODER",navn:"GIBRALTAR"},{kode:"JEY",kodeverk:"LANDKODER",navn:"JERSEY"},{kode:"LAO",kodeverk:"LANDKODER",navn:"LAOS"},{kode:"BHR",kodeverk:"LANDKODER",navn:"BAHRAIN"},{kode:"ESH",kodeverk:"LANDKODER",navn:"VEST-SAHARA"},{kode:"TKL",kodeverk:"LANDKODER",navn:"TOKELAU"},{kode:"MNG",kodeverk:"LANDKODER",navn:"MONGOLIA"},{kode:"BLZ",kodeverk:"LANDKODER",navn:"BELIZE"},{kode:"GUF",kodeverk:"LANDKODER",navn:"FRANSK GUYANA"},{kode:"TCA",kodeverk:"LANDKODER",navn:"TURKS/CAICOSØYENE"},{kode:"WSM",kodeverk:"LANDKODER",navn:"SAMOA"},{kode:"JOR",kodeverk:"LANDKODER",navn:"JORDAN"},{kode:"MRT",kodeverk:"LANDKODER",navn:"MAURITANIA"},{kode:"CUB",kodeverk:"LANDKODER",navn:"CUBA"},{kode:"BDI",kodeverk:"LANDKODER",navn:"BURUNDI"},{kode:"GHA",kodeverk:"LANDKODER",navn:"GHANA"},{kode:"KNA",kodeverk:"LANDKODER",navn:"ST.KITTS OG NEVIS"},{kode:"ETH",kodeverk:"LANDKODER",navn:"ETIOPIA"},{kode:"SSD",kodeverk:"LANDKODER",navn:"SØR-SUDAN"},{kode:"VAT",kodeverk:"LANDKODER",navn:"VATIKANSTATEN"},{kode:"CPV",kodeverk:"LANDKODER",navn:"KAPP VERDE"},{kode:"PCN",kodeverk:"LANDKODER",navn:"PITCAIRN"},{kode:"SGP",kodeverk:"LANDKODER",navn:"SINGAPORE"},{kode:"KAZ",kodeverk:"LANDKODER",navn:"KAZAKHSTAN"},{kode:"MYS",kodeverk:"LANDKODER",navn:"MALAYSIA"},{kode:"PHL",kodeverk:"LANDKODER",navn:"FILIPPINENE"},{kode:"EST",kodeverk:"LANDKODER",navn:"ESTLAND"},{kode:"NOR",kodeverk:"LANDKODER",navn:"NORGE"},{kode:"BMU",kodeverk:"LANDKODER",navn:"BERMUDA"},{kode:"LTU",kodeverk:"LANDKODER",navn:"LITAUEN"},{kode:"MAC",kodeverk:"LANDKODER",navn:"MACAO"},{kode:"TON",kodeverk:"LANDKODER",navn:"TONGA"},{kode:"ROU",kodeverk:"LANDKODER",navn:"ROMANIA"},{kode:"BLM",kodeverk:"LANDKODER",navn:"SAINT BARTHELEMY"},{kode:"SAU",kodeverk:"LANDKODER",navn:"SAUDI-ARABIA"},{kode:"GNQ",kodeverk:"LANDKODER",navn:"EKVATORIAL-GUINEA"},{kode:"TGO",kodeverk:"LANDKODER",navn:"TOGO"},{kode:"ZMB",kodeverk:"LANDKODER",navn:"ZAMBIA"},{kode:"VUT",kodeverk:"LANDKODER",navn:"VANUATU"},{kode:"DZA",kodeverk:"LANDKODER",navn:"ALGERIE"},{kode:"TJK",kodeverk:"LANDKODER",navn:"TADZJIKISTAN"},{kode:"NLD",kodeverk:"LANDKODER",navn:"NEDERLAND"},{kode:"KIR",kodeverk:"LANDKODER",navn:"KIRIBATI"},{kode:"GUY",kodeverk:"LANDKODER",navn:"GUYANA"},{kode:"BVT",kodeverk:"LANDKODER",navn:"BOUVETØYA"},{kode:"IND",kodeverk:"LANDKODER",navn:"INDIA"},{kode:"LKA",kodeverk:"LANDKODER",navn:"SRI LANKA"},{kode:"SYR",kodeverk:"LANDKODER",navn:"SYRIA"},{kode:"ESP",kodeverk:"LANDKODER",navn:"SPANIA"},{kode:"GRL",kodeverk:"LANDKODER",navn:"GRØNLAND"},{kode:"AIA",kodeverk:"LANDKODER",navn:"ANGUILLA"},{kode:"IRQ",kodeverk:"LANDKODER",navn:"IRAK"},{kode:"MCO",kodeverk:"LANDKODER",navn:"MONACO"},{kode:"MHL",kodeverk:"LANDKODER",navn:"MARSHALLØYENE"},{kode:"DOM",kodeverk:"LANDKODER",navn:"DEN DOMINIKANSKE REP"},{kode:"FLK",kodeverk:"LANDKODER",navn:"FALKLANDSØYENE"}],ul=[{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-005",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakebetaling endring"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"}],kl=[{kode:"IKKE_I_AKTIVITET_IKKE_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Aktiviteten er ikke dokumentert"},{kode:"I_AKTIVITET",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er i aktivitet"},{kode:"IKKE_I_AKTIVITET_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er ikke i aktivitet"}],El=[{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"},{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"}],gl=[{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"},{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"}],vl=[{kode:"FODSELSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsdato"},{kode:"TILBAKETREKK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilbaketrekk"},{kode:"ER_ANKEFRIST_IKKE_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er ankefrist ikke overholdt"},{kode:"FNR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsnummer"},{kode:"TERMINBEKREFTELSE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Terminbekreftelse"},{kode:"TERMINDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Termindato"},{kode:"ANKE_RESULTAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Anke resultat"},{kode:"UTTAK_SPLITT_TIDSPERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resulterende periode ved splitting"},{kode:"UTTAK_TREKKDAGER_FLERBARN_KVOTE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager flerbarn kvote"},{kode:"OPPHOLDSRETT_IKKE_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har ikke oppholdsrett i EØS"},{kode:"TILRETTELEGGING_SKAL_BRUKES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avgjør om tilrettelegging skal brukes"},{kode:"ER_ANKE_IKKE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er anke ikke konkret."},{kode:"BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandling"},{kode:"UTTAK_GRADERING_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gradering av arbeidsforhold"},{kode:"ANKE_AVVIST_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til avvist anke"},{kode:"INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt"},{kode:"SOKNADSFRISTVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfristvilkåret"},{kode:"DAGPENGER_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dagpenger"},{kode:"ARBEIDSFORHOLD_BEKREFTET_TOM_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Til og med dato fastsatt av saksbehandler"},{kode:"SOKNADSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfrist"},{kode:"VILKAR_SOM_ANVENDES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vilkår som anvendes"},{kode:"PERIODE_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode f.o.m."},{kode:"UTTAK_PROSENT_UTBETALING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utbetalingsgrad"},{kode:"NYTT_REFUSJONSKRAV",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Nytt refusjonskrav"},{kode:"DODSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dødsdato"},{kode:"DOKUMENTASJON_FORELIGGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dokumentasjon foreligger"},{kode:"LØNNSENDRING_I_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Lønnsendring i beregningsperioden"},{kode:"AVKLART_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklart periode"},{kode:"SVANGERSKAPSPENGERVILKÅRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Svangerskapsvilkåret"},{kode:"KLAGE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aktivitet"},{kode:"UTTAK_STØNADSKONTOTYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stønadskontotype"},{kode:"ALENEOMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aleneomsorg"},{kode:"OMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorg"},{kode:"KONTAKTPERSON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontaktperson"},{kode:"ER_KLAGE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"TILRETTELEGGING_BEHOV_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilrettelegging behov FOM"},{kode:"ANNEN_FORELDER_RETT_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Annen forelder har opptjent rett fra land i EØS"},{kode:"AKTIVITETSKRAV_AVKLARING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklaring om mor er i aktivitet"},{kode:"FASTSETT_RESULTAT_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett resultat for perioden"},{kode:"FRILANSVIRKSOMHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilansvirksomhet"},{kode:"MANN_ADOPTERER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mann adopterer"},{kode:"ANDEL_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Andel i arbeid"},{kode:"DELVIS_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis tilrettelegging FOM"},{kode:"OPPTJENINGSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Opptjeningsvilkåret"},{kode:"ER_KLAGER_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"UTTAK_PERIODE_RESULTAT_TYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultattype for periode"},{kode:"UTLAND",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utland"},{kode:"BRUK_ANTALL_I_TPS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra folkeregisteret"},{kode:"AKTIVITET_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden med aktivitet"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett søkers månedsinntekt fra etterlønn eller sluttpakke"},{kode:"IKKE_OMSORG_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden Søker har ikke omsorg for barnet"},{kode:"DEKNINGSGRAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dekningsgrad"},{kode:"ER_ANKEN_IKKE_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"er anken ikke signert."},{kode:"SYKDOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Sykdom"},{kode:"UTSTEDTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utstedtdato"},{kode:"FODSELSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødsel"},{kode:"NAVN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Navn"},{kode:"UTTAK_TREKKDAGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager"},{kode:"PA_KLAGD_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Påklagd behandlingId"},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Har søker inntekt fra etterlønn eller sluttpakke"},{kode:"OPPHOLDSRETT_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har oppholdsrett i EØS"},{kode:"RETT_TIL_FORELDREPENGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Rett til foreldrepenger"},{kode:"INNTEKTSKATEGORI",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori"},{kode:"ADOPTERER_ALENE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopterer alene"},{kode:"ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Arbeidsforhold"},{kode:"BRUKER_TVUNGEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker er under tvungen forvaltning"},{kode:"DELVIS_REFUSJON_FØR_STARTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis refusjon som utbetales før startdato for full refusjon"},{kode:"ENDRING_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring tidsbegrenset arbeidsforhold"},{kode:"VURDER_GRADERING_PÅ_ANDEL_UTEN_BG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vurder om søker har gradering på en andel uten beregningsgrunnlag"},{kode:"MANDAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mandat"},{kode:"MOR_MOTTAR_UFØRETRYGD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar uføretrygd"},{kode:"HEL_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Hel tilrettelegging FOM"},{kode:"ORGANISASJONSNUMMER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Organisasjonsnummer"},{kode:"UTTAK_GRADERING_AVSLAG_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak avslag gradering"},{kode:"ER_KLAGEN_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"ER_KLAGEFRIST_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"OMSORGSVILKAR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"PA_ANKET_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"på anket behandlingsId."},{kode:"SLUTTE_ARBEID_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Slutte arbeid FOM"},{kode:"BRUK_ANTALL_I_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra søknad"},{kode:"KLAGE_RESULTAT_NFP",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat"},{kode:"FORDELING_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling for arbeidsforhold"},{kode:"UTTAK_SAMTIDIG_UTTAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Samtidig uttak"},{kode:"ER_SOKER_BOSATT_I_NORGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er søker bosatt i Norge?"},{kode:"FRILANS_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilans inntekt"},{kode:"FASTSETT_VIDERE_BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett videre behandling"},{kode:"BRUK_ANTALL_I_VEDTAKET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra vedtaket"},{kode:"OMSORGSOVERTAKELSESDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorgsovertakelsesdato"},{kode:"UTTAK_PERIODE_RESULTAT_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat årsak"},{kode:"ENDRING_NAERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring i næring"},{kode:"FORDELING_FOR_NY_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny andel med fordeling"},{kode:"BEHANDLENDE_ENHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandlende enhet"},{kode:"BRUTTO_NAERINGSINNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Brutto næringsinntekt"},{kode:"FORDELING_ETTER_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling etter besteberegning"},{kode:"STARTDATO_FRA_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Startdato fra søknad"},{kode:"NY_STARTDATO_REFUSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny startdato for refusjon"},{kode:"OVERSTYRT_VURDERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt vurdering"},{kode:"KLAGE_RESULTAT_KA",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ytelsesvedtak"},{kode:"FARESIGNALER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Faresignaler"},{kode:"NY_AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Det er lagt til ny aktivitet for"},{kode:"MOTTAR_YTELSE_FRILANS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for frilansaktiviteten"},{kode:"NY_REFUSJONSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny refusjonsfrist"},{kode:"OVERSTYRT_BEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt beregning"},{kode:"AVKLARSAKSOPPLYSNINGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklar saksopplysninger"},{kode:"INNTEKT_FRA_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt fra arbeidsforhold"},{kode:"SOKERSOPPLYSNINGSPLIKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søkers opplysningsplikt"},{kode:"SELVSTENDIG_NAERINGSDRIVENDE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Selvstendig næringsdrivende"},{kode:"GYLDIG_MEDLEM_FOLKETRYGDEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gyldig medlem i folketrygden"},{kode:"MOTTATT_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottatt dato"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Antall barn"},{kode:"EKTEFELLES_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ektefelles barn"},{kode:"MILITÆR_ELLER_SIVIL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"PERIODE_TOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode t.o.m."},{kode:"FORELDREANSVARSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"STILLINGSPROSENT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stillingsprosent"},{kode:"ADOPSJONSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopsjon"},{kode:"ANKE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"INNTEKTSKATEGORI_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori for andel"},{kode:"KONTROLL_AV_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontroll av besteberegning"},{kode:"MOR_MOTTAR_STØNAD_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar foreldrepenger fra land i EØS"},{kode:"ER_ANKER_IKKE_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Angir om anker ikke er part i saken."},{kode:"ER_VILKÅRENE_TILBAKEKREVING_OPPFYLT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er vilkårene for tilbakekreving oppfylt"},{kode:"NY_FORDELING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny fordeling for"},{kode:"ER_SÆRLIGE_GRUNNER_TIL_REDUKSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er det særlige grunner til reduksjon"},{kode:"MOTTAR_YTELSE_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for arbeid i {value}"},{kode:"TYPE_VERGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Type verge"}],Tl=[{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet/savnet"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Uregistrert person"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"UTAN",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person annullert tilgang Fnr"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utvandret"}],ml=[{kode:"ENHETSREGISTERET",kodeverk:"FAGSYSTEM",navn:"Enhetsregisteret"},{kode:"INFOTRYGD",kodeverk:"FAGSYSTEM",navn:"Infotrygd"},{kode:"INNTEKT",kodeverk:"FAGSYSTEM",navn:"INNTEKT"},{kode:"ARENA",kodeverk:"FAGSYSTEM",navn:"Arena"},{kode:"GOSYS",kodeverk:"FAGSYSTEM",navn:"Gosys"},{kode:"JOARK",kodeverk:"FAGSYSTEM",navn:"Joark"},{kode:"K9SAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Folketrygdloven Kapittel 9"},{kode:"FPSAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Foreldrepenger"},{kode:"AAREGISTERET",kodeverk:"FAGSYSTEM",navn:"AAregisteret"},{kode:"MEDL",kodeverk:"FAGSYSTEM",navn:"MEDL"},{kode:"TPS",kodeverk:"FAGSYSTEM",navn:"TPS"},{kode:"VLSP",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Sykepenger"}],Rl=[{kode:"ANKE_STADFESTE_YTELSESVEDTAK",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"ANKEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"ANKE_AVVIS",kodeverk:"ANKEVURDERING",navn:"Anken avvises"},{kode:"ANKE_OMGJOER",kodeverk:"ANKEVURDERING",navn:"Anken omgjøres"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket oppheves og hjemsendes"}],fl=[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"}],Al=[{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],yl=[{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"}],pl=[{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er slått sammen med et annet"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforhold lagt til av saksbehandler"},{kode:"BRUK_UTEN_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk, men ikke benytt inntektsmelding"},{kode:"IKKE_BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Ikke bruk"},{kode:"BASERT_PÅ_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet som ikke ligger i AA-reg er basert på inntektsmelding"},{kode:"BRUK_MED_OVERSTYRT_PERIODE",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Inntekten til arbeidsforholdet skal ikke være med i beregningsgrunnlaget"}],_l=[{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"}],Sl=[{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"}],Nl=[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],cl=[{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],bl=[{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"}],hl=[{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],Ol=[{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"}],Il=[{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"},{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"}],Kl={RelasjonsRolleType:Ms,HistorikkinnslagType:Vs,UttakUtsettelseType:Gs,FagsakYtelseType:js,StønadskontoType:[{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"}],FagsakStatus:Us,Venteårsak:[{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga for tidlig søknad"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdId som stemmer med Aareg"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på scanning"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev venter søknad."},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."}],AnkeVurderingOmgjør:[{kode:"ANKE_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Gunst omgjør i anke"},{kode:"ANKE_TIL_UGUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Ugunst omgjør i anke"},{kode:"ANKE_DELVIS_OMGJOERING_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Delvis omgjøring, til gunst i anke"}],BehandlingÅrsakType:[{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger inntekt"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Inntektsmelding"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger søknadsfrist"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger opptjening"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Søknad"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger beregning"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. u26-29"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger medlemskap"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev uttak"}],GraderingAvslagÅrsak:[{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"Avslag gradering - arbeid 100% eller mer",lovHjemmel:null}],AktivitetStatus:Bs,BeregningsgrunnlagAndeltype:Hs,RevurderingVarslingÅrsak:[{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utvandret"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:ws,KonsekvensForYtelsen:qs,Inntektskategori:xs,SivilstandType:Ys,SkjermlenkeType:Cs,FaktaOmBeregningTilfelle:$s,KlageVurdering:Js,HistorikkBegrunnelseType:zs,OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:Ws,KlageAvvistÅrsak:[{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klage er ugyldig",lovHjemmel:null}],BehandlingResultatType:Zs,VergeType:Xs,TilbakekrevingVidereBehandling:Qs,OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"}],FamilieHendelseType:el,KlageHjemmel:nl,VilkårType:[{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"}],FarSøkerType:[{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"}],FaresignalVurdering:rl,ArbeidType:tl,KlageMedholdÅrsak:[{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"}],Region:al,OppgaveÅrsak:[{kode:"BEH_SAK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i VL"},{kode:"BEH_SAK_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i Infotrygd"},{kode:"INNHENT_DOK",kodeverk:"OPPGAVE_AARSAK",navn:"Innhent dokumentasjon"},{kode:"VUR_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder dokument i VL"},{kode:"REG_SOK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Registrere søknad i VL"},{kode:"SETTVENT_STO",kodeverk:"OPPGAVE_AARSAK",navn:"Sett Arena utbetaling på vent"},{kode:"RV_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Revurdere i VL"},{kode:"VUR_KONS_YTE_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder konsekvens for ytelse foreldrepenger"},{kode:"GOD_VED_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Godkjenne vedtak i VL"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"},{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"}],HistorikkOpplysningType:il,FordelingPeriodeKilde:ol,KlageVurderingOmgjør:[{kode:"DELVIS_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Delvis medhold i klage"},{kode:"UGUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Ugunst medhold i klage"},{kode:"GUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Gunst medhold i klage"}],VurderArbeidsforholdHistorikkinnslag:sl,Arbeidskategori:ll,VurderÅrsak:[{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"}],Landkoder:dl,BehandlingType:ul,KontrollerAktivitetskravAvklaring:kl,InnsynResultatType:El,MedlemskapType:gl,HistorikkEndretFeltType:vl,PersonstatusType:Tl,Fagsystem:ml,AnkeVurdering:Rl,UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"}],BehandlingStatus:fl,VirksomhetType:Al,MedlemskapDekningType:yl,ArbeidsforholdHandlingType:pl,HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"}],Avslagsårsak:{FP_VK_3:[{kode:"1007",kodeverk:"AVSLAGSARSAK",navn:"Søkt for sent",lovHjemmel:null}],FP_VK_4:[{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1005",kodeverk:"AVSLAGSARSAK",navn:"Ektefelles/samboers barn",lovHjemmel:null},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1006",kodeverk:"AVSLAGSARSAK",navn:"Mann adopterer ikke alene",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_1:[{kode:"1002",kodeverk:"AVSLAGSARSAK",navn:"Søker er medmor",lovHjemmel:null},{kode:"1031",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}'},{kode:"1003",kodeverk:"AVSLAGSARSAK",navn:"Søker er far",lovHjemmel:null},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1001",kodeverk:"AVSLAGSARSAK",navn:"Søkt for tidlig",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1026",kodeverk:"AVSLAGSARSAK",navn:"Fødselsdato ikke oppgitt eller registrert",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_2:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],"-":[],FP_VK_41:[{kode:"1041",kodeverk:"AVSLAGSARSAK",navn:"For lavt brutto beregningsgrunnlag",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_41", "lovreferanse": "14-7"}]}]}'}],FP_VK_21:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_11:[{kode:"1027",kodeverk:"AVSLAGSARSAK",navn:"Ingen barn dokumentert på far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1028",kodeverk:"AVSLAGSARSAK",navn:"Mor fyller ikke vilkåret for sykdom",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1029",kodeverk:"AVSLAGSARSAK",navn:"Bruker er ikke registrert som far/medmor til barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'}],FP_VK_33:[{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1017",kodeverk:"AVSLAGSARSAK",navn:"Omsorgsovertakelse etter 56 uker",lovHjemmel:null},{kode:"1016",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1018",kodeverk:"AVSLAGSARSAK",navn:"Ikke foreldreansvar alene etter barnelova",lovHjemmel:null}],FP_VK_34:[{kode:"1019",kodeverk:"AVSLAGSARSAK",navn:"Manglende dokumentasjon",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_34", "lovreferanse": "21-3"}]}]}'}],FP_VK_23:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_8:[{kode:"1014",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke foreldreansvar",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1013",kodeverk:"AVSLAGSARSAK",navn:"Barn ikke under 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1015",kodeverk:"AVSLAGSARSAK",navn:"Søker har hatt vanlig samvær med barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'}],SVP_VK_1:[{kode:"1065",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1062",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker har mottatt sykepenger",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1066",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1064",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1063",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1061",kodeverk:"AVSLAGSARSAK",navn:"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 3. ledd"}]}]}'},{kode:"1060",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker er ikke gravid kvinne",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'}],FP_VK_16:[{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'},{kode:"1051",kodeverk:"AVSLAGSARSAK",navn:"Stebarnsadopsjon ikke flere dager igjen",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16", "lovreferanse": "14-5"}]}]}'}],FP_VK_5:[{kode:"1009",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1008",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1012",kodeverk:"AVSLAGSARSAK",navn:"Far har ikke omsorg for barnet",lovHjemmel:null},{kode:"1010",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død ved fødsel/omsorg",lovHjemmel:null}],FP_VK_2_L:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],FP_VK_2_F:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1052",kodeverk:"AVSLAGSARSAK",navn:"Innflyttet for mindre enn ett år siden",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK_2_F", "lovreferanse": "14-17 5. ledd"}]}]}'}]},OpptjeningAktivitetType:_l,PermisjonsbeskrivelseType:Sl,Språkkode:[{kode:"NB",kodeverk:"SPRAAK_KODE",navn:"Norsk"},{kode:"NN",kodeverk:"SPRAAK_KODE",navn:"Nynorsk"},{kode:"EN",kodeverk:"SPRAAK_KODE",navn:"Engelsk"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"}],OppholdstillatelseType:Nl,MedlemskapManuellVurderingType:cl,ManuellBehandlingÅrsak:[{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."}],MorsAktivitet:bl,NaturalYtelseType:hl,PeriodeResultatÅrsak:[{kode:"2010",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4072",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjuende ledd: Barnet er dødt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Ikke heltidsarbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4085",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Det er ikke samtykke mellom partene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-16"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4052",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4084",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4097",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Adopsjonsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4104",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Stønadsperiode for nytt barn",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4086",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-11"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ikke stønadsdager igjen på stønadskonto",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ferie/arbeid innenfor de første 6 ukene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4112",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Barnets innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2017",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2036",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4071",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Bruker er død",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4098",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Foreldreansvarsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4067",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4066",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2026",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12, jf. §14-16: Gradering av kvote/overført kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4081",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4053",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2014",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4056",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2016",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2004",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2018",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2024",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4068",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4087",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-2: Opphør medlemskap",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-2"}}}',sortering:"14-02",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4110",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4115",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4096",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Fødselsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4073",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4069",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4062",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4089",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-9"}}}',sortering:"14-11-0",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4075",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjuende ledd: Ikke sammenhengende perioder",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2028",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4060",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2006",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger før fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4105",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4058",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Innvilget fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4095",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR"]},{kode:"4116",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4092",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Avslag overføring - har ikke aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4008",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4064",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4111",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4054",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-09-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4077",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10 a"}}}',sortering:"14-10-0-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2019",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Avslag utsettelse før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4050",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Innvilget uttak av kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4082",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2027",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4088",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4063",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4099",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-6: Opptjeningsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-6"}}}',sortering:"14-06",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4103",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-13: Innvilget fellesperiode til far",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Mor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4107",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Barnet er over 3 år",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ikke lovbestemt ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4059",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13, 14-9"}}}',sortering:"14-13-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2021",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4070",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4074",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,21-3"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2011",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4065",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4057",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13,14-16"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4076",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4040",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4061",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4041",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§22-13 tredje ledd: Brudd på søknadsfrist",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "22-13"}}}',sortering:"22-13-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4106",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15: Innvilget foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4055",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4093",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16: Avslag gradering - søker er ikke i arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4102",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4051",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2015",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4100",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 andre ledd: Uttak før omsorgsovertakelse",lovHjemmel:"",sortering:"14-10-2",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Far/medmor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4117",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]}],ForeldreType:Ol,AdresseType:Il},Bn=e=>{if(e==null)return;const r=e.toString().replace(/\s/g,"");if(!Number.isNaN(r))return Number(Math.round(parseFloat(r))).toLocaleString("nb-NO").replace(/,|\s/g," ")};var er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ur(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ja={exports:{}};(function(e,r){(function(t,n){e.exports=n()})(er,function(){var t="minute",n=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(i,o,s){var l=o.prototype;s.utc=function(p){var y={date:p,utc:!0,args:arguments};return new o(y)},l.utc=function(p){var y=s(this.toDate(),{locale:this.$L,utc:!0});return p?y.add(this.utcOffset(),t):y},l.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var u=l.parse;l.parse=function(p){p.utc&&(this.$u=!0),this.$utils().u(p.$offset)||(this.$offset=p.$offset),u.call(this,p)};var d=l.init;l.init=function(){if(this.$u){var p=this.$d;this.$y=p.getUTCFullYear(),this.$M=p.getUTCMonth(),this.$D=p.getUTCDate(),this.$W=p.getUTCDay(),this.$H=p.getUTCHours(),this.$m=p.getUTCMinutes(),this.$s=p.getUTCSeconds(),this.$ms=p.getUTCMilliseconds()}else d.call(this)};var E=l.utcOffset;l.utcOffset=function(p,y){var N=this.$utils().u;if(N(p))return this.$u?0:N(this.$offset)?E.call(this):this.$offset;if(typeof p=="string"&&(p=function(F){F===void 0&&(F="");var U=F.match(n);if(!U)return null;var O=(""+U[0]).match(a)||["-",0,0],c=O[0],M=60*+O[1]+ +O[2];return M===0?0:c==="+"?M:-M}(p),p===null))return this;var T=Math.abs(p)<=16?60*p:p,b=this;if(y)return b.$offset=T,b.$u=p===0,b;if(p!==0){var G=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(b=this.local().add(T+G,t)).$offset=T,b.$x.$localOffset=G}else b=this.utc();return b};var g=l.format;l.format=function(p){var y=p||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return g.call(this,y)},l.valueOf=function(){var p=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*p},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var R=l.toDate;l.toDate=function(p){return p==="s"&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():R.call(this)};var _=l.diff;l.diff=function(p,y,N){if(p&&this.$u===p.$u)return _.call(this,p,y,N);var T=this.local(),b=s(p).local();return _.call(T,b,y,N)}}})})(ja);var Ll=ja.exports;const Dl=Ur(Ll);var Ua={exports:{}};(function(e,r){(function(t,n){e.exports=n()})(er,function(){var t,n,a=1e3,i=6e4,o=36e5,s=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,d=2628e6,E=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,g={years:u,months:d,days:s,hours:o,minutes:i,seconds:a,milliseconds:1,weeks:6048e5},R=function(U){return U instanceof G},_=function(U,O,c){return new G(U,c,O.$l)},p=function(U){return n.p(U)+"s"},y=function(U){return U<0},N=function(U){return y(U)?Math.ceil(U):Math.floor(U)},T=function(U){return Math.abs(U)},b=function(U,O){return U?y(U)?{negative:!0,format:""+T(U)+O}:{negative:!1,format:""+U+O}:{negative:!1,format:""}},G=function(){function U(c,M,j){var H=this;if(this.$d={},this.$l=j,c===void 0&&(this.$ms=0,this.parseFromMilliseconds()),M)return _(c*g[p(M)],this);if(typeof c=="number")return this.$ms=c,this.parseFromMilliseconds(),this;if(typeof c=="object")return Object.keys(c).forEach(function(w){H.$d[p(w)]=c[w]}),this.calMilliseconds(),this;if(typeof c=="string"){var L=c.match(E);if(L){var P=L.slice(2).map(function(w){return w!=null?Number(w):0});return this.$d.years=P[0],this.$d.months=P[1],this.$d.weeks=P[2],this.$d.days=P[3],this.$d.hours=P[4],this.$d.minutes=P[5],this.$d.seconds=P[6],this.calMilliseconds(),this}}return this}var O=U.prototype;return O.calMilliseconds=function(){var c=this;this.$ms=Object.keys(this.$d).reduce(function(M,j){return M+(c.$d[j]||0)*g[j]},0)},O.parseFromMilliseconds=function(){var c=this.$ms;this.$d.years=N(c/u),c%=u,this.$d.months=N(c/d),c%=d,this.$d.days=N(c/s),c%=s,this.$d.hours=N(c/o),c%=o,this.$d.minutes=N(c/i),c%=i,this.$d.seconds=N(c/a),c%=a,this.$d.milliseconds=c},O.toISOString=function(){var c=b(this.$d.years,"Y"),M=b(this.$d.months,"M"),j=+this.$d.days||0;this.$d.weeks&&(j+=7*this.$d.weeks);var H=b(j,"D"),L=b(this.$d.hours,"H"),P=b(this.$d.minutes,"M"),w=this.$d.seconds||0;this.$d.milliseconds&&(w+=this.$d.milliseconds/1e3,w=Math.round(1e3*w)/1e3);var x=b(w,"S"),J=c.negative||M.negative||H.negative||L.negative||P.negative||x.negative,ee=L.format||P.format||x.format?"T":"",ie=(J?"-":"")+"P"+c.format+M.format+H.format+ee+L.format+P.format+x.format;return ie==="P"||ie==="-P"?"P0D":ie},O.toJSON=function(){return this.toISOString()},O.format=function(c){var M=c||"YYYY-MM-DDTHH:mm:ss",j={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return M.replace(l,function(H,L){return L||String(j[H])})},O.as=function(c){return this.$ms/g[p(c)]},O.get=function(c){var M=this.$ms,j=p(c);return j==="milliseconds"?M%=1e3:M=j==="weeks"?N(M/g[j]):this.$d[j],M||0},O.add=function(c,M,j){var H;return H=M?c*g[p(M)]:R(c)?c.$ms:_(c,this).$ms,_(this.$ms+H*(j?-1:1),this)},O.subtract=function(c,M){return this.add(c,M,!0)},O.locale=function(c){var M=this.clone();return M.$l=c,M},O.clone=function(){return _(this.$ms,this)},O.humanize=function(c){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!c)},O.valueOf=function(){return this.asMilliseconds()},O.milliseconds=function(){return this.get("milliseconds")},O.asMilliseconds=function(){return this.as("milliseconds")},O.seconds=function(){return this.get("seconds")},O.asSeconds=function(){return this.as("seconds")},O.minutes=function(){return this.get("minutes")},O.asMinutes=function(){return this.as("minutes")},O.hours=function(){return this.get("hours")},O.asHours=function(){return this.as("hours")},O.days=function(){return this.get("days")},O.asDays=function(){return this.as("days")},O.weeks=function(){return this.get("weeks")},O.asWeeks=function(){return this.as("weeks")},O.months=function(){return this.get("months")},O.asMonths=function(){return this.as("months")},O.years=function(){return this.get("years")},O.asYears=function(){return this.as("years")},U}(),F=function(U,O,c){return U.add(O.years()*c,"y").add(O.months()*c,"M").add(O.days()*c,"d").add(O.hours()*c,"h").add(O.minutes()*c,"m").add(O.seconds()*c,"s").add(O.milliseconds()*c,"ms")};return function(U,O,c){t=c,n=c().$utils(),c.duration=function(H,L){var P=c.locale();return _(H,{$l:P},L)},c.isDuration=R;var M=O.prototype.add,j=O.prototype.subtract;O.prototype.add=function(H,L){return R(H)?F(this,H,1):M.bind(this)(H,L)},O.prototype.subtract=function(H,L){return R(H)?F(this,H,-1):j.bind(this)(H,L)}}})})(Ua);var Pl=Ua.exports;const Fl=Ur(Pl);var Ba={exports:{}};(function(e,r){(function(t,n){e.exports=n()})(er,function(){var t="day";return function(n,a,i){var o=function(u){return u.add(4-u.isoWeekday(),t)},s=a.prototype;s.isoWeekYear=function(){return o(this).year()},s.isoWeek=function(u){if(!this.$utils().u(u))return this.add(7*(u-this.isoWeek()),t);var d,E,g,R,_=o(this),p=(d=this.isoWeekYear(),E=this.$u,g=(E?i.utc:i)().year(d).startOf("year"),R=4-g.isoWeekday(),g.isoWeekday()>4&&(R+=7),g.add(R,t));return _.diff(p,"week")+1},s.isoWeekday=function(u){return this.$utils().u(u)?this.day()||7:this.day(this.day()%7?u:u-7)};var l=s.startOf;s.startOf=function(u,d){var E=this.$utils(),g=!!E.u(d)||d;return E.p(u)==="isoweek"?g?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(u,d)}}})})(Ba);var Ml=Ba.exports;const Vl=Ur(Ml);var Gl={exports:{}};(function(e,r){(function(t,n){e.exports=n(de)})(er,function(t){function n(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var a=n(t),i={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(o){return o+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(i,null,!0),i})})(Gl);const jl=La(),Se=e=>Ps({locale:"nb-NO",messages:e},jl),Ha={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"},mt="DD.MM.YYYY",Rt="YYYY-MM";de.extend(Dl);de.extend(Vl);de.extend(Fl);Se(Ha);const ft=(e,r,t)=>de(e,r,t).utc(!0).startOf("day"),Ul=(e,r)=>{de.locale("nb");const t=ft(e,Rt),n=ft(r,Rt);let a=t;const i=[{month:a.format("MMMM"),year:a.format("YY")}];for(;a.isBefore(n);)a=a.add(1,"month"),i.push({month:a.format("MMMM"),year:a.format("YY")});return i},Bl=e=>e.toString().replace(new RegExp("\\p{Dash_Punctuation}","gu"),"-").replace(/[\p{Space_Separator}\t]/gu," ").replace(/[“”]/g,'"').replace(/[‘’`]/g,"'").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Mn=Se(Ha),Hl=e=>{if(!e)return Mn.formatMessage({id:"Malform.Bokmal"});switch(e){case"NN":return Mn.formatMessage({id:"Malform.Nynorsk"});case"EN":return Mn.formatMessage({id:"Malform.Engelsk"});default:return Mn.formatMessage({id:"Malform.Bokmal"})}},wl=e=>e!=null&&e.constructor===Object;var hn=e=>e.type==="checkbox",He=e=>e instanceof Date,Ee=e=>e==null;const wa=e=>typeof e=="object";var te=e=>!Ee(e)&&!Array.isArray(e)&&wa(e)&&!He(e),qa=e=>te(e)&&e.target?hn(e.target)?e.target.checked:e.target.value:e,ql=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,xa=(e,r)=>e.has(ql(r)),xl=e=>{const r=e.constructor&&e.constructor.prototype;return te(r)&&r.hasOwnProperty("isPrototypeOf")},Br=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ve(e){let r;const t=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(Br&&(e instanceof Blob||e instanceof FileList))&&(t||te(e)))if(r=t?[]:{},!t&&!xl(e))r=e;else for(const n in e)e.hasOwnProperty(n)&&(r[n]=ve(e[n]));else return e;return r}var nr=e=>Array.isArray(e)?e.filter(Boolean):[],Q=e=>e===void 0,I=(e,r,t)=>{if(!r||!te(e))return t;const n=nr(r.split(/[,[\].]+?/)).reduce((a,i)=>Ee(a)?a:a[i],e);return Q(n)||n===e?Q(e[r])?t:e[r]:n},Ae=e=>typeof e=="boolean",Hr=e=>/^\w*$/.test(e),Ya=e=>nr(e.replace(/["|']|\]/g,"").split(/\.|\[/)),z=(e,r,t)=>{let n=-1;const a=Hr(r)?[r]:Ya(r),i=a.length,o=i-1;for(;++n<i;){const s=a[n];let l=t;if(n!==o){const u=e[s];l=te(u)||Array.isArray(u)?u:isNaN(+a[n+1])?{}:[]}if(s==="__proto__")return;e[s]=l,e=e[s]}return e};const xn={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},pe={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Ie={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Ca=A.createContext(null),rn=()=>A.useContext(Ca),Yl=e=>{const{children:r,...t}=e;return A.createElement(Ca.Provider,{value:t},r)};var $a=(e,r,t,n=!0)=>{const a={defaultValues:r._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const o=i;return r._proxyFormState[o]!==pe.all&&(r._proxyFormState[o]=!n||pe.all),t&&(t[o]=!0),e[o]}});return a},Te=e=>te(e)&&!Object.keys(e).length,Ja=(e,r,t,n)=>{t(e);const{name:a,...i}=e;return Te(i)||Object.keys(i).length>=Object.keys(r).length||Object.keys(i).find(o=>r[o]===(!n||pe.all))},yn=e=>Array.isArray(e)?e:[e],za=(e,r,t)=>!e||!r||e===r||yn(e).some(n=>n&&(t?n===r:n.startsWith(r)||r.startsWith(n)));function wr(e){const r=A.useRef(e);r.current=e,A.useEffect(()=>{const t=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function Cl(e){const r=rn(),{control:t=r.control,disabled:n,name:a,exact:i}=e||{},[o,s]=A.useState(t._formState),l=A.useRef(!0),u=A.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),d=A.useRef(a);return d.current=a,wr({disabled:n,next:E=>l.current&&za(d.current,E.name,i)&&Ja(E,u.current,t._updateFormState)&&s({...t._formState,...E}),subject:t._subjects.state}),A.useEffect(()=>(l.current=!0,u.current.isValid&&t._updateValid(!0),()=>{l.current=!1}),[t]),$a(o,t,u.current,!1)}var be=e=>typeof e=="string",Wa=(e,r,t,n,a)=>be(e)?(n&&r.watch.add(e),I(t,e,a)):Array.isArray(e)?e.map(i=>(n&&r.watch.add(i),I(t,i))):(n&&(r.watchAll=!0),t);function $l(e){const r=rn(),{control:t=r.control,name:n,defaultValue:a,disabled:i,exact:o}=e||{},s=A.useRef(n);s.current=n,wr({disabled:i,subject:t._subjects.values,next:d=>{za(s.current,d.name,o)&&u(ve(Wa(s.current,t._names,d.values||t._formValues,!1,a)))}});const[l,u]=A.useState(t._getWatch(n,a));return A.useEffect(()=>t._removeUnmounted()),l}function Za(e){const r=rn(),{name:t,disabled:n,control:a=r.control,shouldUnregister:i}=e,o=xa(a._names.array,t),s=$l({control:a,name:t,defaultValue:I(a._formValues,t,I(a._defaultValues,t,e.defaultValue)),exact:!0}),l=Cl({control:a,name:t,exact:!0}),u=A.useRef(a.register(t,{...e.rules,value:s,...Ae(e.disabled)?{disabled:e.disabled}:{}}));return A.useEffect(()=>{const d=a._options.shouldUnregister||i,E=(g,R)=>{const _=I(a._fields,g);_&&_._f&&(_._f.mount=R)};if(E(t,!0),d){const g=ve(I(a._options.defaultValues,t));z(a._defaultValues,t,g),Q(I(a._formValues,t))&&z(a._formValues,t,g)}return()=>{(o?d&&!a._state.action:d)?a.unregister(t):E(t,!1)}},[t,a,o,i]),A.useEffect(()=>{I(a._fields,t)&&a._updateDisabledField({disabled:n,fields:a._fields,name:t,value:I(a._fields,t)._f.value})},[n,t,a]),{field:{name:t,value:s,...Ae(n)||l.disabled?{disabled:l.disabled||n}:{},onChange:A.useCallback(d=>u.current.onChange({target:{value:qa(d),name:t},type:xn.CHANGE}),[t]),onBlur:A.useCallback(()=>u.current.onBlur({target:{value:I(a._formValues,t),name:t},type:xn.BLUR}),[t,a]),ref:A.useCallback(d=>{const E=I(a._fields,t);E&&d&&(E._f.ref={focus:()=>d.focus(),select:()=>d.select(),setCustomValidity:g=>d.setCustomValidity(g),reportValidity:()=>d.reportValidity()})},[a._fields,t])},formState:l,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!I(l.errors,t)},isDirty:{enumerable:!0,get:()=>!!I(l.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!I(l.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!I(l.validatingFields,t)},error:{enumerable:!0,get:()=>I(l.errors,t)}})}}var Jl=(e,r,t,n,a)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[n]:a||!0}}:{},At=e=>({isOnSubmit:!e||e===pe.onSubmit,isOnBlur:e===pe.onBlur,isOnChange:e===pe.onChange,isOnAll:e===pe.all,isOnTouch:e===pe.onTouched}),yt=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const pn=(e,r,t,n)=>{for(const a of t||Object.keys(e)){const i=I(e,a);if(i){const{_f:o,...s}=i;if(o){if(o.refs&&o.refs[0]&&r(o.refs[0],a)&&!n)return!0;if(o.ref&&r(o.ref,o.name)&&!n)return!0;if(pn(s,r))break}else if(te(s)&&pn(s,r))break}}};var zl=(e,r,t)=>{const n=yn(I(e,t));return z(n,"root",r[t]),z(e,t,n),e},qr=e=>e.type==="file",Le=e=>typeof e=="function",Yn=e=>{if(!Br)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Hn=e=>be(e),xr=e=>e.type==="radio",Cn=e=>e instanceof RegExp;const pt={value:!1,isValid:!1},_t={value:!0,isValid:!0};var Xa=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Q(e[0].attributes.value)?Q(e[0].value)||e[0].value===""?_t:{value:e[0].value,isValid:!0}:_t:pt}return pt};const St={isValid:!1,value:null};var Qa=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,St):St;function Nt(e,r,t="validate"){if(Hn(e)||Array.isArray(e)&&e.every(Hn)||Ae(e)&&!e)return{type:t,message:Hn(e)?e:"",ref:r}}var We=e=>te(e)&&!Cn(e)?e:{value:e,message:""},ct=async(e,r,t,n,a)=>{const{ref:i,refs:o,required:s,maxLength:l,minLength:u,min:d,max:E,pattern:g,validate:R,name:_,valueAsNumber:p,mount:y,disabled:N}=e._f,T=I(r,_);if(!y||N)return{};const b=o?o[0]:i,G=L=>{n&&b.reportValidity&&(b.setCustomValidity(Ae(L)?"":L||""),b.reportValidity())},F={},U=xr(i),O=hn(i),c=U||O,M=(p||qr(i))&&Q(i.value)&&Q(T)||Yn(i)&&i.value===""||T===""||Array.isArray(T)&&!T.length,j=Jl.bind(null,_,t,F),H=(L,P,w,x=Ie.maxLength,J=Ie.minLength)=>{const ee=L?P:w;F[_]={type:L?x:J,message:ee,ref:i,...j(L?x:J,ee)}};if(a?!Array.isArray(T)||!T.length:s&&(!c&&(M||Ee(T))||Ae(T)&&!T||O&&!Xa(o).isValid||U&&!Qa(o).isValid)){const{value:L,message:P}=Hn(s)?{value:!!s,message:s}:We(s);if(L&&(F[_]={type:Ie.required,message:P,ref:b,...j(Ie.required,P)},!t))return G(P),F}if(!M&&(!Ee(d)||!Ee(E))){let L,P;const w=We(E),x=We(d);if(!Ee(T)&&!isNaN(T)){const J=i.valueAsNumber||T&&+T;Ee(w.value)||(L=J>w.value),Ee(x.value)||(P=J<x.value)}else{const J=i.valueAsDate||new Date(T),ee=Ne=>new Date(new Date().toDateString()+" "+Ne),ie=i.type=="time",me=i.type=="week";be(w.value)&&T&&(L=ie?ee(T)>ee(w.value):me?T>w.value:J>new Date(w.value)),be(x.value)&&T&&(P=ie?ee(T)<ee(x.value):me?T<x.value:J<new Date(x.value))}if((L||P)&&(H(!!L,w.message,x.message,Ie.max,Ie.min),!t))return G(F[_].message),F}if((l||u)&&!M&&(be(T)||a&&Array.isArray(T))){const L=We(l),P=We(u),w=!Ee(L.value)&&T.length>+L.value,x=!Ee(P.value)&&T.length<+P.value;if((w||x)&&(H(w,L.message,P.message),!t))return G(F[_].message),F}if(g&&!M&&be(T)){const{value:L,message:P}=We(g);if(Cn(L)&&!T.match(L)&&(F[_]={type:Ie.pattern,message:P,ref:i,...j(Ie.pattern,P)},!t))return G(P),F}if(R){if(Le(R)){const L=await R(T,r),P=Nt(L,b);if(P&&(F[_]={...P,...j(Ie.validate,P.message)},!t))return G(P.message),F}else if(te(R)){let L={};for(const P in R){if(!Te(L)&&!t)break;const w=Nt(await R[P](T,r),b,P);w&&(L={...w,...j(P,w.message)},G(w.message),t&&(F[_]=L))}if(!Te(L)&&(F[_]={ref:b,...L},!t))return F}}return G(!0),F};function Wl(e,r){const t=r.slice(0,-1).length;let n=0;for(;n<t;)e=Q(e)?n++:e[r[n++]];return e}function Zl(e){for(const r in e)if(e.hasOwnProperty(r)&&!Q(e[r]))return!1;return!0}function ae(e,r){const t=Array.isArray(r)?r:Hr(r)?[r]:Ya(r),n=t.length===1?e:Wl(e,t),a=t.length-1,i=t[a];return n&&delete n[i],a!==0&&(te(n)&&Te(n)||Array.isArray(n)&&Zl(n))&&ae(e,t.slice(0,-1)),e}var gr=()=>{let e=[];return{get observers(){return e},next:a=>{for(const i of e)i.next&&i.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(i=>i!==a)}}),unsubscribe:()=>{e=[]}}},hr=e=>Ee(e)||!wa(e);function Pe(e,r){if(hr(e)||hr(r))return e===r;if(He(e)&&He(r))return e.getTime()===r.getTime();const t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(const a of t){const i=e[a];if(!n.includes(a))return!1;if(a!=="ref"){const o=r[a];if(He(i)&&He(o)||te(i)&&te(o)||Array.isArray(i)&&Array.isArray(o)?!Pe(i,o):i!==o)return!1}}return!0}var ei=e=>e.type==="select-multiple",Xl=e=>xr(e)||hn(e),vr=e=>Yn(e)&&e.isConnected,ni=e=>{for(const r in e)if(Le(e[r]))return!0;return!1};function $n(e,r={}){const t=Array.isArray(e);if(te(e)||t)for(const n in e)Array.isArray(e[n])||te(e[n])&&!ni(e[n])?(r[n]=Array.isArray(e[n])?[]:{},$n(e[n],r[n])):Ee(e[n])||(r[n]=!0);return r}function ri(e,r,t){const n=Array.isArray(e);if(te(e)||n)for(const a in e)Array.isArray(e[a])||te(e[a])&&!ni(e[a])?Q(r)||hr(t[a])?t[a]=Array.isArray(e[a])?$n(e[a],[]):{...$n(e[a])}:ri(e[a],Ee(r)?{}:r[a],t[a]):t[a]=!Pe(e[a],r[a]);return t}var kn=(e,r)=>ri(e,r,$n(r)),ti=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:n})=>Q(e)?e:r?e===""?NaN:e&&+e:t&&be(e)?new Date(e):n?n(e):e;function Tr(e){const r=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):r.disabled))return qr(r)?r.files:xr(r)?Qa(e.refs).value:ei(r)?[...r.selectedOptions].map(({value:t})=>t):hn(r)?Xa(e.refs).value:ti(Q(r.value)?e.ref.value:r.value,e)}var Ql=(e,r,t,n)=>{const a={};for(const i of e){const o=I(r,i);o&&z(a,i,o._f)}return{criteriaMode:t,names:[...e],fields:a,shouldUseNativeValidation:n}},En=e=>Q(e)?e:Cn(e)?e.source:te(e)?Cn(e.value)?e.value.source:e.value:e;const bt="AsyncFunction";var ed=e=>(!e||!e.validate)&&!!(Le(e.validate)&&e.validate.constructor.name===bt||te(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===bt)),nd=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ht(e,r,t){const n=I(e,t);if(n||Hr(t))return{error:n,name:t};const a=t.split(".");for(;a.length;){const i=a.join("."),o=I(r,i),s=I(e,i);if(o&&!Array.isArray(o)&&t!==i)return{name:t};if(s&&s.type)return{name:i,error:s};a.pop()}return{name:t}}var rd=(e,r,t,n,a)=>a.isOnAll?!1:!t&&a.isOnTouch?!(r||e):(t?n.isOnBlur:a.isOnBlur)?!e:(t?n.isOnChange:a.isOnChange)?e:!0,td=(e,r)=>!nr(I(e,r)).length&&ae(e,r);const ad={mode:pe.onSubmit,reValidateMode:pe.onChange,shouldFocusError:!0};function id(e={}){let r={...ad,...e},t={submitCount:0,isDirty:!1,isLoading:Le(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},n={},a=te(r.defaultValues)||te(r.values)?ve(r.defaultValues||r.values)||{}:{},i=r.shouldUnregister?{}:ve(a),o={action:!1,mount:!1,watch:!1},s={mount:new Set,unMount:new Set,array:new Set,watch:new Set},l,u=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},E={values:gr(),array:gr(),state:gr()},g=At(r.mode),R=At(r.reValidateMode),_=r.criteriaMode===pe.all,p=k=>v=>{clearTimeout(u),u=setTimeout(k,v)},y=async k=>{if(!e.disabled&&(d.isValid||k)){const v=r.resolver?Te((await c()).errors):await j(n,!0);v!==t.isValid&&E.state.next({isValid:v})}},N=(k,v)=>{!e.disabled&&(d.isValidating||d.validatingFields)&&((k||Array.from(s.mount)).forEach(m=>{m&&(v?z(t.validatingFields,m,v):ae(t.validatingFields,m))}),E.state.next({validatingFields:t.validatingFields,isValidating:!Te(t.validatingFields)}))},T=(k,v=[],m,D,K=!0,h=!0)=>{if(D&&m&&!e.disabled){if(o.action=!0,h&&Array.isArray(I(n,k))){const B=m(I(n,k),D.argA,D.argB);K&&z(n,k,B)}if(h&&Array.isArray(I(t.errors,k))){const B=m(I(t.errors,k),D.argA,D.argB);K&&z(t.errors,k,B),td(t.errors,k)}if(d.touchedFields&&h&&Array.isArray(I(t.touchedFields,k))){const B=m(I(t.touchedFields,k),D.argA,D.argB);K&&z(t.touchedFields,k,B)}d.dirtyFields&&(t.dirtyFields=kn(a,i)),E.state.next({name:k,isDirty:L(k,v),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else z(i,k,v)},b=(k,v)=>{z(t.errors,k,v),E.state.next({errors:t.errors})},G=k=>{t.errors=k,E.state.next({errors:t.errors,isValid:!1})},F=(k,v,m,D)=>{const K=I(n,k);if(K){const h=I(i,k,Q(m)?I(a,k):m);Q(h)||D&&D.defaultChecked||v?z(i,k,v?h:Tr(K._f)):x(k,h),o.mount&&y()}},U=(k,v,m,D,K)=>{let h=!1,B=!1;const q={name:k};if(!e.disabled){const oe=!!(I(n,k)&&I(n,k)._f&&I(n,k)._f.disabled);if(!m||D){d.isDirty&&(B=t.isDirty,t.isDirty=q.isDirty=L(),h=B!==q.isDirty);const se=oe||Pe(I(a,k),v);B=!!(!oe&&I(t.dirtyFields,k)),se||oe?ae(t.dirtyFields,k):z(t.dirtyFields,k,!0),q.dirtyFields=t.dirtyFields,h=h||d.dirtyFields&&B!==!se}if(m){const se=I(t.touchedFields,k);se||(z(t.touchedFields,k,m),q.touchedFields=t.touchedFields,h=h||d.touchedFields&&se!==m)}h&&K&&E.state.next(q)}return h?q:{}},O=(k,v,m,D)=>{const K=I(t.errors,k),h=d.isValid&&Ae(v)&&t.isValid!==v;if(e.delayError&&m?(l=p(()=>b(k,m)),l(e.delayError)):(clearTimeout(u),l=null,m?z(t.errors,k,m):ae(t.errors,k)),(m?!Pe(K,m):K)||!Te(D)||h){const B={...D,...h&&Ae(v)?{isValid:v}:{},errors:t.errors,name:k};t={...t,...B},E.state.next(B)}},c=async k=>{N(k,!0);const v=await r.resolver(i,r.context,Ql(k||s.mount,n,r.criteriaMode,r.shouldUseNativeValidation));return N(k),v},M=async k=>{const{errors:v}=await c(k);if(k)for(const m of k){const D=I(v,m);D?z(t.errors,m,D):ae(t.errors,m)}else t.errors=v;return v},j=async(k,v,m={valid:!0})=>{for(const D in k){const K=k[D];if(K){const{_f:h,...B}=K;if(h){const q=s.array.has(h.name),oe=K._f&&ed(K._f);oe&&d.validatingFields&&N([D],!0);const se=await ct(K,i,_,r.shouldUseNativeValidation&&!v,q);if(oe&&d.validatingFields&&N([D]),se[h.name]&&(m.valid=!1,v))break;!v&&(I(se,h.name)?q?zl(t.errors,se,h.name):z(t.errors,h.name,se[h.name]):ae(t.errors,h.name))}!Te(B)&&await j(B,v,m)}}return m.valid},H=()=>{for(const k of s.unMount){const v=I(n,k);v&&(v._f.refs?v._f.refs.every(m=>!vr(m)):!vr(v._f.ref))&&on(k)}s.unMount=new Set},L=(k,v)=>!e.disabled&&(k&&v&&z(i,k,v),!Pe(ue(),a)),P=(k,v,m)=>Wa(k,s,{...o.mount?i:Q(v)?a:be(k)?{[k]:v}:v},m,v),w=k=>nr(I(o.mount?i:a,k,e.shouldUnregister?I(a,k,[]):[])),x=(k,v,m={})=>{const D=I(n,k);let K=v;if(D){const h=D._f;h&&(!h.disabled&&z(i,k,ti(v,h)),K=Yn(h.ref)&&Ee(v)?"":v,ei(h.ref)?[...h.ref.options].forEach(B=>B.selected=K.includes(B.value)):h.refs?hn(h.ref)?h.refs.length>1?h.refs.forEach(B=>(!B.defaultChecked||!B.disabled)&&(B.checked=Array.isArray(K)?!!K.find(q=>q===B.value):K===B.value)):h.refs[0]&&(h.refs[0].checked=!!K):h.refs.forEach(B=>B.checked=B.value===K):qr(h.ref)?h.ref.value="":(h.ref.value=K,h.ref.type||E.values.next({name:k,values:{...i}})))}(m.shouldDirty||m.shouldTouch)&&U(k,K,m.shouldTouch,m.shouldDirty,!0),m.shouldValidate&&Ne(k)},J=(k,v,m)=>{for(const D in v){const K=v[D],h=`${k}.${D}`,B=I(n,h);(s.array.has(k)||te(K)||B&&!B._f)&&!He(K)?J(h,K,m):x(h,K,m)}},ee=(k,v,m={})=>{const D=I(n,k),K=s.array.has(k),h=ve(v);z(i,k,h),K?(E.array.next({name:k,values:{...i}}),(d.isDirty||d.dirtyFields)&&m.shouldDirty&&E.state.next({name:k,dirtyFields:kn(a,i),isDirty:L(k,h)})):D&&!D._f&&!Ee(h)?J(k,h,m):x(k,h,m),yt(k,s)&&E.state.next({...t}),E.values.next({name:o.mount?k:void 0,values:{...i}})},ie=async k=>{o.mount=!0;const v=k.target;let m=v.name,D=!0;const K=I(n,m),h=()=>v.type?Tr(K._f):qa(k),B=q=>{D=Number.isNaN(q)||He(q)&&isNaN(q.getTime())||Pe(q,I(i,m,q))};if(K){let q,oe;const se=h(),Ge=k.type===xn.BLUR||k.type===xn.FOCUS_OUT,qi=!nd(K._f)&&!r.resolver&&!I(t.errors,m)&&!K._f.deps||rd(Ge,I(t.touchedFields,m),t.isSubmitted,R,g),or=yt(m,s,Ge);z(i,m,se),Ge?(K._f.onBlur&&K._f.onBlur(k),l&&l(0)):K._f.onChange&&K._f.onChange(k);const sr=U(m,se,Ge,!1),xi=!Te(sr)||or;if(!Ge&&E.values.next({name:m,type:k.type,values:{...i}}),qi)return d.isValid&&(e.mode==="onBlur"?Ge&&y():y()),xi&&E.state.next({name:m,...or?{}:sr});if(!Ge&&or&&E.state.next({...t}),r.resolver){const{errors:Xr}=await c([m]);if(B(se),D){const Yi=ht(t.errors,n,m),Qr=ht(Xr,n,Yi.name||m);q=Qr.error,m=Qr.name,oe=Te(Xr)}}else N([m],!0),q=(await ct(K,i,_,r.shouldUseNativeValidation))[m],N([m]),B(se),D&&(q?oe=!1:d.isValid&&(oe=await j(n,!0)));D&&(K._f.deps&&Ne(K._f.deps),O(m,oe,q,sr))}},me=(k,v)=>{if(I(t.errors,v)&&k.focus)return k.focus(),1},Ne=async(k,v={})=>{let m,D;const K=yn(k);if(r.resolver){const h=await M(Q(k)?k:K);m=Te(h),D=k?!K.some(B=>I(h,B)):m}else k?(D=(await Promise.all(K.map(async h=>{const B=I(n,h);return await j(B&&B._f?{[h]:B}:B)}))).every(Boolean),!(!D&&!t.isValid)&&y()):D=m=await j(n);return E.state.next({...!be(k)||d.isValid&&m!==t.isValid?{}:{name:k},...r.resolver||!k?{isValid:m}:{},errors:t.errors}),v.shouldFocus&&!D&&pn(n,me,k?K:s.mount),D},ue=k=>{const v={...o.mount?i:a};return Q(k)?v:be(k)?I(v,k):k.map(m=>I(v,m))},Ce=(k,v)=>({invalid:!!I((v||t).errors,k),isDirty:!!I((v||t).dirtyFields,k),error:I((v||t).errors,k),isValidating:!!I(t.validatingFields,k),isTouched:!!I((v||t).touchedFields,k)}),$e=k=>{k&&yn(k).forEach(v=>ae(t.errors,v)),E.state.next({errors:k?t.errors:{}})},On=(k,v,m)=>{const D=(I(n,k,{_f:{}})._f||{}).ref,K=I(t.errors,k)||{},{ref:h,message:B,type:q,...oe}=K;z(t.errors,k,{...oe,...v,ref:D}),E.state.next({name:k,errors:t.errors,isValid:!1}),m&&m.shouldFocus&&D&&D.focus&&D.focus()},ir=(k,v)=>Le(k)?E.values.subscribe({next:m=>k(P(void 0,v),m)}):P(k,v,!0),on=(k,v={})=>{for(const m of k?yn(k):s.mount)s.mount.delete(m),s.array.delete(m),v.keepValue||(ae(n,m),ae(i,m)),!v.keepError&&ae(t.errors,m),!v.keepDirty&&ae(t.dirtyFields,m),!v.keepTouched&&ae(t.touchedFields,m),!v.keepIsValidating&&ae(t.validatingFields,m),!r.shouldUnregister&&!v.keepDefaultValue&&ae(a,m);E.values.next({values:{...i}}),E.state.next({...t,...v.keepDirty?{isDirty:L()}:{}}),!v.keepIsValid&&y()},In=({disabled:k,name:v,field:m,fields:D,value:K})=>{if(Ae(k)&&o.mount||k){const h=k?void 0:Q(K)?Tr(m?m._f:I(D,v)._f):K;z(i,v,h),U(v,h,!1,!1,!0)}},sn=(k,v={})=>{let m=I(n,k);const D=Ae(v.disabled)||Ae(e.disabled);return z(n,k,{...m||{},_f:{...m&&m._f?m._f:{ref:{name:k}},name:k,mount:!0,...v}}),s.mount.add(k),m?In({field:m,disabled:Ae(v.disabled)?v.disabled:e.disabled,name:k,value:v.value}):F(k,!0,v.value),{...D?{disabled:v.disabled||e.disabled}:{},...r.progressive?{required:!!v.required,min:En(v.min),max:En(v.max),minLength:En(v.minLength),maxLength:En(v.maxLength),pattern:En(v.pattern)}:{},name:k,onChange:ie,onBlur:ie,ref:K=>{if(K){sn(k,v),m=I(n,k);const h=Q(K.value)&&K.querySelectorAll&&K.querySelectorAll("input,select,textarea")[0]||K,B=Xl(h),q=m._f.refs||[];if(B?q.find(oe=>oe===h):h===m._f.ref)return;z(n,k,{_f:{...m._f,...B?{refs:[...q.filter(vr),h,...Array.isArray(I(a,k))?[{}]:[]],ref:{type:h.type,name:k}}:{ref:h}}}),F(k,!1,void 0,h)}else m=I(n,k,{}),m._f&&(m._f.mount=!1),(r.shouldUnregister||v.shouldUnregister)&&!(xa(s.array,k)&&o.action)&&s.unMount.add(k)}}},ln=()=>r.shouldFocusError&&pn(n,me,s.mount),Kn=k=>{Ae(k)&&(E.state.next({disabled:k}),pn(n,(v,m)=>{const D=I(n,m);D&&(v.disabled=D._f.disabled||k,Array.isArray(D._f.refs)&&D._f.refs.forEach(K=>{K.disabled=D._f.disabled||k}))},0,!1))},Je=(k,v)=>async m=>{let D;m&&(m.preventDefault&&m.preventDefault(),m.persist&&m.persist());let K=ve(i);if(E.state.next({isSubmitting:!0}),r.resolver){const{errors:h,values:B}=await c();t.errors=h,K=B}else await j(n);if(ae(t.errors,"root"),Te(t.errors)){E.state.next({errors:{}});try{await k(K,m)}catch(h){D=h}}else v&&await v({...t.errors},m),ln(),setTimeout(ln);if(E.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Te(t.errors)&&!D,submitCount:t.submitCount+1,errors:t.errors}),D)throw D},dn=(k,v={})=>{I(n,k)&&(Q(v.defaultValue)?ee(k,ve(I(a,k))):(ee(k,v.defaultValue),z(a,k,ve(v.defaultValue))),v.keepTouched||ae(t.touchedFields,k),v.keepDirty||(ae(t.dirtyFields,k),t.isDirty=v.defaultValue?L(k,ve(I(a,k))):L()),v.keepError||(ae(t.errors,k),d.isValid&&y()),E.state.next({...t}))},ze=(k,v={})=>{const m=k?ve(k):a,D=ve(m),K=Te(k),h=K?a:D;if(v.keepDefaultValues||(a=m),!v.keepValues){if(v.keepDirtyValues){const B=new Set([...s.mount,...Object.keys(kn(a,i))]);for(const q of Array.from(B))I(t.dirtyFields,q)?z(h,q,I(i,q)):ee(q,I(h,q))}else{if(Br&&Q(k))for(const B of s.mount){const q=I(n,B);if(q&&q._f){const oe=Array.isArray(q._f.refs)?q._f.refs[0]:q._f.ref;if(Yn(oe)){const se=oe.closest("form");if(se){se.reset();break}}}}n={}}i=e.shouldUnregister?v.keepDefaultValues?ve(a):{}:ve(h),E.array.next({values:{...h}}),E.values.next({values:{...h}})}s={mount:v.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!d.isValid||!!v.keepIsValid||!!v.keepDirtyValues,o.watch=!!e.shouldUnregister,E.state.next({submitCount:v.keepSubmitCount?t.submitCount:0,isDirty:K?!1:v.keepDirty?t.isDirty:!!(v.keepDefaultValues&&!Pe(k,a)),isSubmitted:v.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:K?{}:v.keepDirtyValues?v.keepDefaultValues&&i?kn(a,i):t.dirtyFields:v.keepDefaultValues&&k?kn(a,k):v.keepDirty?t.dirtyFields:{},touchedFields:v.keepTouched?t.touchedFields:{},errors:v.keepErrors?t.errors:{},isSubmitSuccessful:v.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Ve=(k,v)=>ze(Le(k)?k(i):k,v);return{control:{register:sn,unregister:on,getFieldState:Ce,handleSubmit:Je,setError:On,_executeSchema:c,_getWatch:P,_getDirty:L,_updateValid:y,_removeUnmounted:H,_updateFieldArray:T,_updateDisabledField:In,_getFieldArray:w,_reset:ze,_resetDefaultValues:()=>Le(r.defaultValues)&&r.defaultValues().then(k=>{Ve(k,r.resetOptions),E.state.next({isLoading:!1})}),_updateFormState:k=>{t={...t,...k}},_disableForm:Kn,_subjects:E,_proxyFormState:d,_setErrors:G,get _fields(){return n},get _formValues(){return i},get _state(){return o},set _state(k){o=k},get _defaultValues(){return a},get _names(){return s},set _names(k){s=k},get _formState(){return t},set _formState(k){t=k},get _options(){return r},set _options(k){r={...r,...k}}},trigger:Ne,register:sn,handleSubmit:Je,watch:ir,setValue:ee,getValues:ue,reset:Ve,resetField:dn,clearErrors:$e,unregister:on,setError:On,setFocus:(k,v={})=>{const m=I(n,k),D=m&&m._f;if(D){const K=D.refs?D.refs[0]:D.ref;K.focus&&(K.focus(),v.shouldSelect&&K.select())}},getFieldState:Ce}}function od(e={}){const r=A.useRef(),t=A.useRef(),[n,a]=A.useState({isDirty:!1,isValidating:!1,isLoading:Le(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Le(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...id(e),formState:n});const i=r.current.control;return i._options=e,wr({subject:i._subjects.state,next:o=>{Ja(o,i._proxyFormState,i._updateFormState,!0)&&a({...i._formState})}}),A.useEffect(()=>i._disableForm(e.disabled),[i,e.disabled]),A.useEffect(()=>{if(i._proxyFormState.isDirty){const o=i._getDirty();o!==n.isDirty&&i._subjects.state.next({isDirty:o})}},[i,n.isDirty]),A.useEffect(()=>{e.values&&!Pe(e.values,t.current)?(i._reset(e.values,i._options.resetOptions),t.current=e.values,a(o=>({...o}))):i._resetDefaultValues()},[e.values,i]),A.useEffect(()=>{e.errors&&i._setErrors(e.errors)},[e.errors,i]),A.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),A.useEffect(()=>{e.shouldUnregister&&i._subjects.values.next({values:i._getWatch()})},[e.shouldUnregister,i]),A.useEffect(()=>{r.current&&(r.current.watch=r.current.watch.bind({}))},[n]),r.current.formState=$a(n,i),r.current}function ai(e){var r,t,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(r=0;r<a;r++)e[r]&&(t=ai(e[r]))&&(n&&(n+=" "),n+=t)}else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function $(){for(var e,r,t=0,n="",a=arguments.length;t<a;t++)(e=arguments[t])&&(r=ai(e))&&(n&&(n+=" "),n+=r);return n}const tn=e=>$({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var sd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Yr=f.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="p",spacing:i,truncate:o,weight:s="regular",align:l,visuallyHidden:u,textColor:d}=e,E=sd(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return A.createElement(a,Object.assign({},E,{ref:r,className:$(t,"navds-body-long",`navds-body-long--${n}`,tn({spacing:i,truncate:o,weight:s,align:l,visuallyHidden:u,textColor:d}))}))});var ld=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ge=f.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="p",spacing:i,truncate:o,weight:s="regular",align:l,visuallyHidden:u,textColor:d}=e,E=ld(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return A.createElement(a,Object.assign({},E,{ref:r,className:$(t,"navds-body-short",`navds-body-short--${n}`,tn({spacing:i,truncate:o,weight:s,align:l,visuallyHidden:u,textColor:d}))}))});var dd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};f.forwardRef((e,r)=>{var{className:t,size:n="medium",spacing:a,uppercase:i,as:o="p",truncate:s,weight:l="regular",align:u,visuallyHidden:d,textColor:E}=e,g=dd(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return A.createElement(o,Object.assign({},g,{ref:r,className:$(t,"navds-detail",tn({spacing:a,truncate:s,weight:l,align:u,visuallyHidden:d,textColor:E,uppercase:i}),{"navds-detail--small":n==="small"})}))});var ud=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ii=f.forwardRef((e,r)=>{var{className:t,size:n,spacing:a,as:i="p"}=e,o=ud(e,["className","size","spacing","as"]);return A.createElement(i,Object.assign({},o,{ref:r,className:$("navds-error-message","navds-label",t,tn({spacing:a}),{"navds-label--small":n==="small"})}))});var kd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ed=f.forwardRef((e,r)=>{var{level:t="1",size:n,className:a,as:i,spacing:o,align:s,visuallyHidden:l,textColor:u}=e,d=kd(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const E=i??`h${t}`;return A.createElement(E,Object.assign({},d,{ref:r,className:$(a,"navds-heading",`navds-heading--${n}`,tn({spacing:o,align:s,visuallyHidden:l,textColor:u}))}))});var gd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};f.forwardRef((e,r)=>{var{className:t,spacing:n,as:a="p"}=e,i=gd(e,["className","spacing","as"]);return A.createElement(a,Object.assign({},i,{ref:r,className:$(t,"navds-ingress",{"navds-typo--spacing":!!n})}))});var vd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const an=f.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="label",spacing:i,visuallyHidden:o,textColor:s}=e,l=vd(e,["className","size","as","spacing","visuallyHidden","textColor"]);return A.createElement(a,Object.assign({},l,{ref:r,className:$(t,"navds-label",tn({spacing:i,visuallyHidden:o,textColor:s}),{"navds-label--small":n==="small"})}))});function oi(e,r=166){let t;function n(...a){const i=()=>{e.apply(this,a)};clearTimeout(t),t=setTimeout(i,r)}return n.clear=()=>{clearTimeout(t)},n}function De(e,r){const t=Object.entries(e).filter(([n])=>!r.includes(n));return Object.fromEntries(t)}const Or=globalThis!=null&&globalThis.document?f.useLayoutEffect:()=>{};let Ot=0;function Td(e){const[r,t]=f.useState(e),n=e||r;return f.useEffect(()=>{r==null&&(Ot+=1,t(`aksel-id-${Ot}`))},[r]),n}const It=A.useId;function en(e){var r;return It!==void 0?It().replace(/(:)/g,""):(r=Td(e))!==null&&r!==void 0?r:""}function Kt(e,r=[]){const t=f.useRef(e);return f.useEffect(()=>{t.current=e}),f.useCallback((...n)=>{var a;return(a=t.current)===null||a===void 0?void 0:a.call(t,...n)},r)}function md({value:e,defaultValue:r,onChange:t}){const n=Kt(t),[a,i]=f.useState(r),o=e!==void 0,s=o?e:a,l=Kt(u=>{const E=typeof u=="function"?u(s):u;o||i(E),n(E)},[o,n,s]);return[s,l]}let Lt=0;function Rd(e){const[r,t]=f.useState(e),n=e||r;return f.useEffect(()=>{r==null&&(Lt+=1,t(`aksel-icon-${Lt}`))},[r]),n}const Dt=A.useId;function Oe(e){var r;return Dt!==void 0?Dt().replace(/(:)/g,""):(r=Rd(e))!==null&&r!==void 0?r:""}var fd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ad=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=fd(e,["title","titleId"]);let i=Oe();return i=t?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var yd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const si=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=yd(e,["title","titleId"]);let i=Oe();return i=t?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var pd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const _d=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=pd(e,["title","titleId"]);let i=Oe();return i=t?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var Sd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Nd=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Sd(e,["title","titleId"]);let i=Oe();return i=t?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var cd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const bd=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=cd(e,["title","titleId"]);let i=Oe();return i=t?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var hd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const li=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=hd(e,["title","titleId"]);let i=Oe();return i=t?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Od=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Id=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Od(e,["title","titleId"]);let i=Oe();return i=t?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Kd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ld=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Kd(e,["title","titleId"]);let i=Oe();return i=t?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var Dd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Pd=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Dd(e,["title","titleId"]);let i=Oe();return i=t?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var Fd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Md=f.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Fd(e,["title","titleId"]);let i=Oe();return i=t?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Cr(e,r,{checkForDefaultPrevented:t=!0}={}){return function(a){if(e==null||e(a),t===!1||!a.defaultPrevented)return r==null?void 0:r(a)}}function di(e){return r=>{e.forEach(t=>{typeof t=="function"?t(r):t!=null&&(t.current=r)})}}function ui(...e){return A.useCallback(di(e),e)}function Vd(e,r){const t=Object.assign({},r);for(const n in r){const a=e[n],i=r[n];/^on[A-Z]/.test(n)?a&&i?t[n]=(...s)=>{i(...s),a(...s)}:a&&(t[n]=a):n==="style"?t[n]=Object.assign(Object.assign({},a),i):n==="className"&&(t[n]=[a,i].filter(Boolean).join(" "))}return Object.assign(Object.assign({},e),t)}var Gd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const $r=f.forwardRef((e,r)=>{var t;const{children:n}=e,a=Gd(e,["children"]);if(f.isValidElement(n)){const i=Object.prototype.propertyIsEnumerable.call(n.props,"ref")?n.props.ref:n.ref;return f.cloneElement(n,Object.assign(Object.assign({},Vd(a,n.props)),{ref:r?di([r,i]):i}))}if(f.Children.count(n)>1){const i=new Error("Aksel: Components using 'asChild' expects to recieve a single React element child.");throw i.name="SlotError",(t=Error.captureStackTrace)===null||t===void 0||t.call(Error,i,$r),i}return null}),jd={global:{showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},Loader:{title:"Venter…"},Modal:{close:"Lukk"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"}},Ud=f.createContext({translations:jd}),Pt=/(\w+)/g;function Bd(e,...r){const t=Array.isArray(e)?e:Hd(e);for(const n of r){if(!n)continue;let a=n;for(let i=0;i<t.length;i++){const o=a[t[i]];o!==void 0&&(a=o)}if(typeof a=="string")return a}throw new Error("Error translating key. The keypath does not resolve to a string.")}function Hd(e){const r=[];let t=Pt.exec(e);for(;t;){const[,n,a]=t;r.push(n||a),t=Pt.exec(e)}return r}const wd=/{[^}]*}/g;function rr(e,...r){const n=f.useContext(Ud).translations;return(i,o)=>{const s=Bd(i,...r,...Array.isArray(n)?n.map(l=>l[e]):[n[e]]);return o?s.replace(wd,l=>{const u=l.substring(1,l.length-1);if(o[u]===void 0){const d=JSON.stringify(o);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${u}'. The following replacements were passed: '${d}'`)}return o[u]}):s}}var qd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const xd=f.forwardRef((e,r)=>{var{className:t,size:n="medium",title:a,transparent:i=!1,variant:o="neutral",id:s}=e,l=qd(e,["className","size","title","transparent","variant","id"]);const u=en(),d=rr("Loader");return A.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${u}`,ref:r,className:$("navds-loader",t,`navds-loader--${n}`,`navds-loader--${o}`,{"navds-loader--transparent":i}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},De(l,["children"])),A.createElement("title",{id:s??`loader-${u}`},a||d("title")),A.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),A.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var Yd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ki=f.forwardRef((e,r)=>{var{as:t="button",variant:n="primary",className:a,children:i,size:o="medium",loading:s=!1,disabled:l,style:u,icon:d,iconPosition:E="left"}=e,g=Yd(e,["as","variant","className","children","size","loading","disabled","style","icon","iconPosition"]);const R=f.useRef(null),[_,p]=f.useState(),y=ui(R,r);Or(()=>{if(s){const b=window.requestAnimationFrame(()=>{var G,F;p((F=(G=R==null?void 0:R.current)===null||G===void 0?void 0:G.getBoundingClientRect())===null||F===void 0?void 0:F.width)});return()=>{p(void 0),cancelAnimationFrame(b)}}},[s,i]);const N=l??_?De(g,["href"]):g,T=b=>{b.key===" "&&!l&&!_&&b.currentTarget.click()};return A.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},N,{ref:y,onKeyUp:Cr(N.onKeyUp,T),className:$(a,"navds-button",`navds-button--${n}`,`navds-button--${o}`,{"navds-button--loading":_,"navds-button--icon-only":!!d&&!i,"navds-button--disabled":l??_}),style:Object.assign(Object.assign({},u),{width:_}),disabled:l??_?!0:void 0}),_?A.createElement(xd,{size:o}):A.createElement(A.Fragment,null,d&&E==="left"&&A.createElement("span",{className:"navds-button__icon"},d),i&&A.createElement(an,{as:"span",size:o==="medium"?"medium":"small"},i),d&&E==="right"&&A.createElement("span",{className:"navds-button__icon"},d)))});var Cd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const $d={error:Md,warning:Nd,info:bd,success:Ad},Jd=f.forwardRef((e,r)=>{var{children:t,className:n,variant:a,size:i="medium",fullWidth:o=!1,contentMaxWidth:s=!0,inline:l=!1,closeButton:u=!1,onClose:d}=e,E=Cd(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const g=rr("Alert"),R=$d[a];return A.createElement("div",Object.assign({},E,{ref:r,className:$(n,"navds-alert",`navds-alert--${a}`,`navds-alert--${i}`,{"navds-alert--full-width":o,"navds-alert--inline":l,"navds-alert--close-button":u})}),A.createElement(R,{title:g(a),className:"navds-alert__icon"}),A.createElement(Yr,{as:"div",size:i,className:$("navds-alert__wrapper",s&&"navds-alert__wrapper--maxwidth")},t),u&&!l&&A.createElement("div",{className:"navds-alert__button-wrapper"},A.createElement(ki,{className:"navds-alert__button",size:"small",variant:"tertiary-neutral",onClick:d,type:"button",icon:A.createElement(Pd,{title:["error","warning"].includes(a)?g("closeAlert"):g("closeMessage")})})))}),Ei=()=>A.createElement(li,{"aria-hidden":!0,className:"navds-form-field__readonly-icon"}),zd=()=>A.createElement(li,{title:rr("global")("readOnly"),className:"navds-form-field__readonly-icon"}),Jn=f.createContext(null),Jr=(e,r)=>{var t,n,a;const{size:i,error:o,errorId:s}=e,l=f.useContext(Jn),u=en(),d=(t=e.id)!==null&&t!==void 0?t:`${r}-${u}`,E=s??`${r}-error-${u}`,g=`${r}-description-${u}`,R=(l==null?void 0:l.disabled)||e.disabled,_=((l==null?void 0:l.readOnly)||e.readOnly)&&!R||void 0,p=!R&&!_&&!!(o||l!=null&&l.error),y=!R&&!_&&!!o&&typeof o!="boolean",N=Object.assign({},p?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:y,hasError:p,errorId:E,inputDescriptionId:g,size:(n=i??(l==null?void 0:l.size))!==null&&n!==void 0?n:"medium",readOnly:_,inputProps:Object.assign(Object.assign({id:d},N),{"aria-describedby":$(e["aria-describedby"],{[g]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[E]:y,[(a=l==null?void 0:l.errorId)!==null&&a!==void 0?a:""]:p&&!!(l!=null&&l.error)})||void 0,disabled:R})}};function le(e,r,t){return t?typeof t=="string"?{[`--__ac-${e}-${r}-xs`]:t}:Object.fromEntries(Object.entries(t).map(([n,a])=>[`--__ac-${e}-${r}-${n}`,a])):{}}const Wd=e=>{switch(e){case"px":return"1px"}return e},Ft=(e,r,t,n,a)=>r.split(" ").map((i,o,s)=>{if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/s.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/s.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let l=`var(--a-${t}-${i})`;return n.includes(i)&&(l=Wd(i)),a?i==="0"?"0":`calc(-1 * ${l})`:l}).join(" ");function fe(e,r,t,n,a=!1,i=[]){if(!n)return{};if(typeof n=="string")return{[`--__ac-${e}-${r}-xs`]:Ft(r,n,t,i,a)};const o={};return Object.entries(n).forEach(([s,l])=>{o[`--__ac-${e}-${r}-${s}`]=Ft(r,l,t,i,a)}),o}const Zd=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Xd=({children:e,className:r,padding:t,paddingInline:n,paddingBlock:a,margin:i,marginInline:o,marginBlock:s,width:l,minWidth:u,maxWidth:d,height:E,minHeight:g,maxHeight:R,position:_,inset:p,top:y,right:N,left:T,bottom:b,overflow:G,overflowX:F,overflowY:U,flexBasis:O,flexGrow:c,flexShrink:M,gridColumn:j})=>{const H=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},fe("r","p","spacing",t)),fe("r","pi","spacing",n)),fe("r","pb","spacing",a)),fe("r","m","spacing",i)),fe("r","mi","spacing",o)),fe("r","mb","spacing",s)),le("r","w",l)),le("r","minw",u)),le("r","maxw",d)),le("r","h",E)),le("r","minh",g)),le("r","maxh",R)),le("r","position",_)),fe("r","inset","spacing",p)),fe("r","top","spacing",y)),fe("r","right","spacing",N)),fe("r","bottom","spacing",b)),fe("r","left","spacing",T)),le("r","overflow",G)),le("r","overflowx",F)),le("r","overflowy",U)),le("r","flex-basis",O)),le("r","flex-grow",c)),le("r","flex-shrink",M)),le("r","grid-column",j));return A.createElement($r,{className:$({className:r,"navds-r-p":t,"navds-r-pi":n,"navds-r-pb":a,"navds-r-m":i,"navds-r-mi":o,"navds-r-mb":s,"navds-r-w":l,"navds-r-minw":u,"navds-r-maxw":d,"navds-r-h":E,"navds-r-minh":g,"navds-r-maxh":R,"navds-r-position":_,"navds-r-inset":p,"navds-r-top":y,"navds-r-right":N,"navds-r-bottom":b,"navds-r-left":T,"navds-r-overflow":G,"navds-r-overflowx":F,"navds-r-overflowy":U,"navds-r-flex-basis":O,"navds-r-flex-grow":c,"navds-r-flex-shrink":M,"navds-r-grid-column":j}),style:H},e)};var Qd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const gi=f.forwardRef((e,r)=>{var{children:t,className:n,as:a="div",align:i,justify:o,wrap:s=!0,gap:l,style:u,direction:d="row",asChild:E}=e,g=Qd(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const R=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},u),fe("stack","gap","spacing",l)),le("stack","direction",d)),le("stack","align",i)),le("stack","justify",o)),_=E?$r:a;return A.createElement(Xd,Object.assign({},g),A.createElement(_,Object.assign({},De(g,Zd),{ref:r,style:R,className:$("navds-stack",n,{"navds-vstack":d==="column","navds-hstack":d==="row","navds-stack-gap":l,"navds-stack-align":i,"navds-stack-justify":o,"navds-stack-direction":d,"navds-stack-wrap":s})}),t))});var eu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const vi=f.forwardRef((e,r)=>{var{as:t="div"}=e,n=eu(e,["as"]);return A.createElement(gi,Object.assign({as:t},n,{ref:r,direction:"row"}))});var nu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const zn=f.forwardRef((e,r)=>{var{as:t="div"}=e,n=nu(e,["as"]);return A.createElement(gi,Object.assign({as:t},n,{ref:r,direction:"column",wrap:!1}))});var ru=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const tu=f.forwardRef((e,r)=>{var{className:t,header:n,children:a,open:i,defaultOpen:o=!1,onClick:s,size:l="medium",onOpenChange:u}=e,d=ru(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const[E,g]=md({defaultValue:o,value:i,onChange:u});return A.createElement("div",{className:$("navds-read-more",`navds-read-more--${l}`,t,{"navds-read-more--open":E})},A.createElement("button",Object.assign({},d,{ref:r,type:"button",className:$("navds-read-more__button","navds-body-short",{"navds-body-short--small":l==="small"}),onClick:Cr(s,()=>g(R=>!R)),"aria-expanded":E}),A.createElement(si,{className:"navds-read-more__expand-icon","aria-hidden":!0}),A.createElement("span",null,n)),A.createElement(Yr,{as:"div","aria-hidden":!E,className:$("navds-read-more__content",{"navds-read-more__content--closed":!E}),size:l},a))});var au=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const iu=f.forwardRef((e,r)=>{var{children:t,className:n,variant:a,size:i="medium",icon:o}=e,s=au(e,["children","className","variant","size","icon"]);return A.createElement(ge,Object.assign({},s,{ref:r,as:"span",size:i==="medium"?"medium":"small",className:$("navds-tag",n,`navds-tag--${a}`,`navds-tag--${i}`)}),o&&A.createElement("span",{className:"navds-tag__icon--left"},o),t)}),ou=e=>{const r=Jr(e,"fieldset"),{inputProps:t}=r;return Object.assign(Object.assign({},r),{inputProps:{"aria-invalid":t["aria-invalid"],"aria-describedby":t["aria-describedby"]}})};var su=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const lu=f.forwardRef((e,r)=>{var t,n,a;const{inputProps:i,errorId:o,showErrorMsg:s,hasError:l,size:u,readOnly:d,inputDescriptionId:E}=ou(e),g=f.useContext(Jn),{children:R,className:_,errorPropagation:p=!0,legend:y,description:N,hideLegend:T,nativeReadOnly:b=!0}=e,G=su(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return A.createElement(Jn.Provider,{value:{error:p?(t=e.error)!==null&&t!==void 0?t:g==null?void 0:g.error:void 0,errorId:$({[o]:s,[(n=g==null?void 0:g.errorId)!==null&&n!==void 0?n:""]:!!(g!=null&&g.error)}),size:u,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:d}},A.createElement("fieldset",Object.assign({},De(G,["errorId","error","size","readOnly"]),De(i,["aria-describedby","aria-invalid"]),{ref:r,className:$(_,"navds-fieldset",`navds-fieldset--${u}`,{"navds-fieldset--error":l,"navds-fieldset--readonly":d})}),A.createElement(an,{size:u,as:"legend",className:$("navds-fieldset__legend",{"navds-sr-only":!!T})},d&&(b?A.createElement(Ei,null):A.createElement(zd,null)),y),!!N&&A.createElement(ge,{className:$("navds-fieldset__description",{"navds-sr-only":!!T}),id:E,size:u??"medium",as:"div"},e.description),R,A.createElement("div",{id:o,"aria-relevant":"additions removals","aria-live":"polite",className:"navds-fieldset__error"},s&&A.createElement(ii,{size:u},e.error))))});var du=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ti=A.createContext(null),uu=f.forwardRef((e,r)=>{var t,n,{children:a,className:i,name:o,defaultValue:s,value:l,onChange:u=()=>{},required:d,readOnly:E}=e,g=du(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const R=f.useContext(Jn),_=en();return A.createElement(lu,Object.assign({},g,{readOnly:E,ref:r,className:$(i,"navds-radio-group",`navds-radio-group--${(n=(t=g.size)!==null&&t!==void 0?t:R==null?void 0:R.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),A.createElement(Ti.Provider,{value:{name:o??`radioGroupName-${_}`,defaultValue:s,value:l,onChange:u,required:d}},A.createElement("div",{className:"navds-radio-buttons"},a)))});var ku=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Eu=e=>{const r=f.useContext(Ti),t=Jr(De(e,["description"]),"radio"),{inputProps:n,readOnly:a}=t,i=ku(t,["inputProps","readOnly"]);return r||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},i),{readOnly:a,inputProps:Object.assign(Object.assign({},n),{name:r==null?void 0:r.name,defaultChecked:(r==null?void 0:r.defaultValue)===void 0?void 0:(r==null?void 0:r.defaultValue)===e.value,checked:(r==null?void 0:r.value)===void 0?void 0:(r==null?void 0:r.value)===e.value,onChange:o=>{var s,l;a||((s=e.onChange)===null||s===void 0||s.call(e,o),(l=r==null?void 0:r.onChange)===null||l===void 0||l.call(r,e.value))},onClick:o=>{var s;if(a){o.preventDefault();return}(s=e==null?void 0:e.onClick)===null||s===void 0||s.call(e,o)},required:r==null?void 0:r.required,type:"radio"})})},Mt=f.forwardRef((e,r)=>{const{inputProps:t,size:n,hasError:a,readOnly:i}=Eu(e),o=en(),s=en();return A.createElement("div",{className:$(e.className,"navds-radio",`navds-radio--${n}`,{"navds-radio--error":a,"navds-radio--disabled":t.disabled,"navds-radio--readonly":i})},A.createElement("input",Object.assign({},De(e,["children","size","description","readOnly"]),De(t,["aria-invalid"]),{"aria-labelledby":$(o,!!e["aria-labelledby"]&&e["aria-labelledby"],{[s]:e.description}),className:"navds-radio__input",ref:r})),A.createElement("label",{htmlFor:t.id,className:"navds-radio__label"},A.createElement("span",{className:"navds-radio__content"},A.createElement(ge,{as:"span",id:o,size:n,"aria-hidden":!0},e.children),e.description&&A.createElement(ge,{as:"span",id:s,size:n,className:"navds-form-field__subdescription navds-radio__description","aria-hidden":!0},e.description))))});var gu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Vt=(e,r,t)=>{const{outerHeightStyle:n,overflow:a}=r;return t.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==a)?(t.current+=1,r):e},Gt=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function Vn(e){return parseInt(e,10)||0}const vu=f.forwardRef((e,r)=>{var t,n,{className:a,onChange:i,maxRows:o,minRows:s=1,autoScrollbar:l,style:u,value:d}=e,E=gu(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:g}=f.useRef(d!=null),R=f.useRef(null),_=ui(R,r),p=f.useRef(null),y=f.useRef(0),[N,T]=f.useState({outerHeightStyle:0}),b=A.useCallback(()=>{const O=R.current,M=Gt(O).getComputedStyle(O);if(M.width==="0px")return{outerHeightStyle:0};const j=p.current;j.style.width=M.width,j.value=O.value||E.placeholder||"x",j.value.slice(-1)===`
`&&(j.value+=" ");const H=M.boxSizing,L=Vn(M.paddingBottom)+Vn(M.paddingTop),P=Vn(M.borderBottomWidth)+Vn(M.borderTopWidth),w=j.scrollHeight-L;j.value="x";const x=j.scrollHeight-L;let J=w;s&&(J=Math.max(Number(s)*x,J)),o&&(J=Math.min(Number(o)*x,J)),J=Math.max(J,x);const ee=J+(H==="border-box"?L+P:0),ie=Math.abs(J-w)<=1;return{outerHeightStyle:ee,overflow:ie}},[o,s,E.placeholder]),G=()=>{const O=b();jt(O)||T(c=>Vt(c,O,y))};Or(()=>{const O=()=>{const L=b();jt(L)||Ji.flushSync(()=>{T(P=>Vt(P,L,y))})},c=oi(()=>{var L,P,w;if(y.current=0,!((L=R.current)===null||L===void 0)&&L.style.height||!((P=R.current)===null||P===void 0)&&P.style.width){((w=R.current)===null||w===void 0?void 0:w.style.overflow)==="hidden"&&T(x=>Object.assign(Object.assign({},x),{overflow:!1}));return}O()}),M=R.current,j=Gt(M);j.addEventListener("resize",c);let H;return typeof ResizeObserver<"u"&&(H=new ResizeObserver(c),H.observe(M)),()=>{c.clear(),j.removeEventListener("resize",c),H&&H.disconnect()}},[b]),Or(()=>{G()}),f.useEffect(()=>{y.current=0},[d]);const F=O=>{y.current=0,g||G(),i&&i(O)},U=Object.assign({"--__ac-textarea-height":N.outerHeightStyle+"px",overflow:N.overflow&&!l&&!(!((t=R.current)===null||t===void 0)&&t.style.height)&&!(!((n=R.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},u);return A.createElement(A.Fragment,null,A.createElement("textarea",Object.assign({value:d,onChange:F,ref:_,rows:s,style:U},E,{className:a})),A.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:p,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},u)}))});function jt(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Tu=({maxLengthId:e,maxLength:r,currentLength:t,size:n,i18n:a})=>{const i=rr("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),o=r-t,[s,l]=f.useState(o);return f.useEffect(()=>{const u=oi(()=>{l(o)},2e3);return u(),()=>{u.clear()}},[o]),A.createElement(A.Fragment,null,A.createElement("span",{id:e,className:"navds-sr-only"},i("maxLength",{maxLength:r})),o<20&&A.createElement("span",{role:"status",className:"navds-textarea__sr-counter navds-sr-only"},Ut(s,i)),A.createElement(ge,{className:$("navds-textarea__counter",{"navds-textarea__counter--error":o<0}),size:n},Ut(o,i)))},Ut=(e,r)=>e<0?r("charsTooMany",{chars:Math.abs(e)}):r("charsLeft",{chars:e});var mu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ru=f.forwardRef((e,r)=>{var t,n,a;const{inputProps:i,errorId:o,showErrorMsg:s,hasError:l,size:u,inputDescriptionId:d}=Jr(e,"textarea"),{label:E,className:g,description:R,maxLength:_,hideLabel:p=!1,resize:y,UNSAFE_autoScrollbar:N,i18n:T,readOnly:b}=e,G=mu(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),F=en(),U=_!==void 0&&_>0,[O,c]=f.useState((t=e==null?void 0:e.defaultValue)!==null&&t!==void 0?t:""),M=()=>{let H=G!=null&&G.minRows?G==null?void 0:G.minRows:3;return u==="small"&&(H=G!=null&&G.minRows?G==null?void 0:G.minRows:2),H},j=$(i["aria-describedby"],{[F??""]:U});return A.createElement("div",{className:$(g,"navds-form-field",`navds-form-field--${u}`,{"navds-form-field--disabled":!!i.disabled,"navds-form-field--readonly":b,"navds-textarea--readonly":b,"navds-textarea--error":l,"navds-textarea--autoscrollbar":N,[`navds-textarea--resize-${y===!0?"both":y}`]:y})},A.createElement(an,{htmlFor:i.id,size:u,className:$("navds-form-field__label",{"navds-sr-only":p})},b&&A.createElement(Ei,null),E),!!R&&A.createElement(ge,{className:$("navds-form-field__description",{"navds-sr-only":p}),id:d,size:u,as:"div"},R),A.createElement(vu,Object.assign({},De(G,["error","errorId","size"]),i,{onChange:Cr(e.onChange,e.value===void 0?H=>c(H.target.value):void 0),minRows:M(),autoScrollbar:N,ref:r,readOnly:b,className:$("navds-textarea__input","navds-body-short",`navds-body-short--${u??"medium"}`)},j?{"aria-describedby":j}:{})),U&&!b&&!i.disabled&&A.createElement(Tu,{maxLengthId:F,maxLength:_,currentLength:(a=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&a!==void 0?a:O.length,size:u,i18n:T}),A.createElement("div",{className:"navds-form-field__error",id:o,"aria-relevant":"additions removals","aria-live":"polite"},s&&A.createElement(ii,{size:u},e.error)))});function fu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mi={exports:{}},gn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bt;function Au(){if(Bt)return gn;Bt=1;var e=A,r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(s,l,u){var d,E={},g=null,R=null;u!==void 0&&(g=""+u),l.key!==void 0&&(g=""+l.key),l.ref!==void 0&&(R=l.ref);for(d in l)n.call(l,d)&&!i.hasOwnProperty(d)&&(E[d]=l[d]);if(s&&s.defaultProps)for(d in l=s.defaultProps,l)E[d]===void 0&&(E[d]=l[d]);return{$$typeof:r,type:s,key:g,ref:R,props:E,_owner:a.current}}return gn.Fragment=t,gn.jsx=o,gn.jsxs=o,gn}mi.exports=Au();var W=mi.exports;const yu=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:W.jsx(Jd,{variant:"warning",size:"small",children:W.jsx(zn,{gap:"2",children:A.Children.map(e,r=>W.jsx(ge,{size:"small",children:r},wl(r)?r.key:r))})}),Ye={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};Se(Ye);Se(Ye);const Wn="#B7B1A9",Ri=4,pu=(e,r,t)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${Wn};
    border-radius: ${Ri}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${t}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${Wn};
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
`,_u=(e,r,t)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${Wn};
    border-radius: ${Ri}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${t}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${Wn};
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
`,Su=(e,r,t,n)=>r?_u(e,t,n):pu(e,t,n),Nu=(e,r,t)=>t?"":r?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,cu=({children:e,alignOffset:r=0,alignLeft:t=!1,marginTop:n=0,marginLeft:a=0,hideBorder:i=!1})=>W.jsxs(W.Fragment,{children:[W.jsx("style",{dangerouslySetInnerHTML:{__html:Su(r,t,n,a)}}),W.jsx("div",{className:Nu(r,t,i),children:e})]});var fi={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var r={}.hasOwnProperty;function t(){for(var i="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(i=a(i,n.call(this,s)))}return i}function n(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return t.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var s in i)r.call(i,s)&&i[s]&&(o=a(o,this&&this[s]||s));return o}function a(i,o){return o?i?i+" "+o:i+o:i}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(fi);var bu=fi.exports;const Re=fu(bu),hu="_borderbox_hicl4_1",Ou="_error_hicl4_4",Iu="_warning_hicl4_7",Ku={borderbox:hu,error:Ou,warning:Iu};Re.bind(Ku);const Lu="_aksjonspunkt_kn1hn_1",Du="_erAksjonspunktApent_kn1hn_4",Pu="_erIkkeGodkjentAvBeslutter_kn1hn_8",Fu={aksjonspunkt:Lu,erAksjonspunktApent:Du,erIkkeGodkjentAvBeslutter:Pu};Re.bind(Fu);Se(Ye);Se(Ye);const Mu="_tooltip_h8akz_1",Vu="_tooltiptext_h8akz_5",Gu="_left_h8akz_22",ju="_top_h8akz_27",Uu="_right_h8akz_30",Bu="_bottom_h8akz_34",Hu="_showTooltip_h8akz_1",Ir={tooltip:Mu,tooltiptext:Vu,left:Gu,top:ju,right:Uu,bottom:Bu,showTooltip:Hu},wu=Re.bind(Ir),Ai=({children:e,content:r,alignRight:t=!1,alignLeft:n=!1,alignTop:a=!1,alignBottom:i=!1})=>W.jsxs("div",{className:Ir.tooltip,children:[W.jsx("span",{className:wu(Ir.tooltiptext,{right:t||!n&&!a&&!i,left:n,top:a,bottom:i}),children:r}),e]}),qu=A.forwardRef(({onClick:e=()=>{},onMouseDown:r,tabIndex:t=-1,className:n="",src:a,srcHover:i,alt:o,onKeyDown:s,tooltip:l,alignTooltipLeft:u=!1},d)=>{const[E,g]=f.useState(!1),R=f.useCallback(()=>{g(!0)},[]),_=f.useCallback(()=>{g(!1)},[]),p=f.useCallback(T=>{(T.key==="Enter"||T.key===" ")&&(s&&s(T),T.preventDefault())},[]),y=i&&E?i:a,N=W.jsx("img",{ref:d,className:n,src:y,alt:o,tabIndex:t,onMouseOver:R,onMouseOut:_,onFocus:R,onBlur:_,onKeyDown:p,onMouseDown:r,onClick:e});return l?W.jsx(Ai,{content:l,alignLeft:u,children:N}):N});qu.displayName="Image";const xu="_flexColumnNew_1vdv1_1",Yu={flexColumnNew:xu},Cu=Re.bind(Yu),vn=({children:e,className:r})=>W.jsx("div",{className:Cu("flexColumnNew",r),children:e}),$u="_flexRow_1yf0y_1",Ju="_spaceBetween_1yf0y_9",zu="_alignItemsToBaseline_1yf0y_12",Wu="_alignItemsToFlexEnd_1yf0y_15",Zu="_justifyItemsToFlexEnd_1yf0y_18",Xu="_wrap_1yf0y_21",Qu={flexRow:$u,spaceBetween:Ju,alignItemsToBaseline:zu,alignItemsToFlexEnd:Wu,justifyItemsToFlexEnd:Zu,wrap:Xu},ek=Re.bind(Qu),Ht=({children:e,spaceBetween:r=!1,alignItemsToBaseline:t=!1,alignItemsToFlexEnd:n=!1,wrap:a=!1,className:i})=>W.jsx("div",{className:ek("flexRow",{spaceBetween:r},{alignItemsToBaseline:t},{alignItemsToFlexEnd:n},{wrap:a},i),children:e}),nk="_flexContainer_1dk1o_1",rk="_fluid_1dk1o_6",tk="_fullHeight_1dk1o_9",ak="_flexWrap_1dk1o_17",ik={flexContainer:nk,fluid:rk,fullHeight:tk,flexWrap:ak},ok=Re.bind(ik),sk=({children:e,wrap:r=!1,fullHeight:t=!1})=>W.jsx("div",{className:ok("flexContainer","fluid",{flexWrap:r,fullHeight:t}),children:e});Se(Ye);const lk="_row_1lxv9_1",dk="_harHover_1lxv9_4",uk="_rowHeader_1lxv9_7",kk="_grayHeader_1lxv9_12",Ek="_rowContent_1lxv9_15",gk="_selected_1lxv9_18",vk="_bold_1lxv9_22",Tk="_dashedBottomBorder_1lxv9_25",mk="_solidBottomBorder_1lxv9_28",Rk="_apLeftBorder_1lxv9_31",fk="_noBottomBorder_1lxv9_34",yi={row:lk,harHover:dk,rowHeader:uk,grayHeader:kk,rowContent:Ek,selected:gk,bold:vk,dashedBottomBorder:Tk,solidBottomBorder:mk,apLeftBorder:Rk,noBottomBorder:fk},Ak=Re.bind(yi),yk=(e,r,t)=>n=>{e&&n.button===0&&e(n,r,t)},pi=e=>e.tagName==="TR"?e:pi(e.parentElement),wt=(e,r)=>{const t=pi(e.target),n=(r?t.nextSibling:t.previousSibling)||t;n&&(n.focus(),e.preventDefault())},pk=(e,r,t,n)=>a=>{a.key==="ArrowDown"?wt(a,!0):a.key==="ArrowUp"?wt(a,!1):r&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(r(a,t,n),a.preventDefault()):e&&r&&a.target.tagName!=="TD"&&a.key==="Shift"&&(r(a),a.preventDefault())},_k=e=>r=>{e&&r.target.tagName!=="TD"&&r.key==="Shift"&&(e(r),r.preventDefault())},Kr=({id:e,model:r,isHeader:t=!1,hasGrayHeader:n=!1,onMouseDown:a,onKeyDown:i,children:o,noHover:s=!1,isSelected:l=!1,isBold:u=!1,isDashedBottomBorder:d=!1,isSolidBottomBorder:E=!1,isApLeftBorder:g=!1,className:R,useMultiselect:_=!1,hasNoBottomBorder:p=!1})=>W.jsx("tr",{className:Ak(R,yi.row,{rowHeader:t,grayHeader:n,rowContent:!t&&!s,selected:l,harHover:!s,bold:u,dashedBottomBorder:d,solidBottomBorder:E,noBottomBorder:p,apLeftBorder:g}),onMouseDown:yk(a,e,r),onKeyDown:pk(_,i,e,r),onKeyUp:_?_k(i):void 0,tabIndex:0,children:o}),Sk="_columnStyle_1f13u_1",_i={columnStyle:Sk},Nk=Re.bind(_i),Ze=({children:e="",className:r,hidden:t=!1,colspanAll:n=!1})=>t?null:W.jsx("td",{className:Nk(_i.columnStyle,r),colSpan:n?100:void 0,children:e}),ck="_table_2cnpl_1",bk="_rowHover_2cnpl_25",hk={table:ck,rowHover:bk},Ok=Re.bind(hk),Ik="EMPTY",Si=A.forwardRef(({headerTextCodes:e=[],headerColumnContent:r=[],classNameTable:t="",noHover:n=!1,hasGrayHeader:a=!1,children:i},o)=>W.jsxs("table",{ref:o,className:Ok("table",{[t]:t,rowHover:!n}),children:[W.jsx("thead",{children:W.jsxs(Kr,{isHeader:!0,noHover:n,hasGrayHeader:a,children:[e.map(s=>typeof s=="string"&&s.startsWith(Ik)?W.jsx(Ze,{children:" "},s):W.jsx(Ze,{children:W.jsx(Z,{id:s})},s)),r.map(s=>W.jsx(Ze,{children:s},s.key))]})}),W.jsx("tbody",{children:Array.isArray(i)?A.Children.map(i,s=>A.cloneElement(s,{noHover:n})):A.cloneElement(i,{noHover:n})})]}));Si.displayName="Table";const Kk="_hidden_1pb4f_1",Lk="_active_1pb4f_8",Dk="_activeRow_1pb4f_15 _active_1pb4f_8",Pk="_toggleIcon_1pb4f_19",Fk="_colTopPadding_1pb4f_22",Mk={hidden:Kk,active:Lk,activeRow:Dk,toggleIcon:Pk,colTopPadding:Fk};Re.bind(Mk);Se(Ye);const Vk="_fourPx_qda5k_1",Gk="_eightPx_qda5k_4",jk="_sixteenPx_qda5k_7",Uk="_twentyPx_qda5k_10",Bk="_thirtyTwoPx_qda5k_13",Hk="_fourtyPx_qda5k_16",wk={fourPx:Vk,eightPx:Gk,sixteenPx:jk,twentyPx:Uk,thirtyTwoPx:Bk,fourtyPx:Hk},qk=Re.bind(wk),Fe=({fourPx:e=!1,eightPx:r=!1,sixteenPx:t=!1,twentyPx:n=!1,thirtyTwoPx:a=!1,fourtyPx:i=!1})=>W.jsx("div",{className:qk({fourPx:e,eightPx:r,sixteenPx:t,twentyPx:n,thirtyTwoPx:a,fourtyPx:i})});Se(Ye);const xk="_divider_1t980_1",Yk="_dividerParagraf_1t980_8",Ck="_leftPanel_1t980_11",$k="_rightPanel_1t980_14",Jk={divider:xk,dividerParagraf:Yk,leftPanel:Ck,rightPanel:$k};Re.bind(Jk);const zk="_editedIcon_ulrjl_1",Wk={editedIcon:zk},Zk=Re.bind(Wk),Ni=({className:e=""})=>W.jsx("span",{"data-testid":"editedIcon",className:Zk("editedIcon",e),children:W.jsx(Id,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})});var Xk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qk(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ci={exports:{}},Tn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qt;function eE(){if(qt)return Tn;qt=1;var e=A,r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(s,l,u){var d,E={},g=null,R=null;u!==void 0&&(g=""+u),l.key!==void 0&&(g=""+l.key),l.ref!==void 0&&(R=l.ref);for(d in l)n.call(l,d)&&!i.hasOwnProperty(d)&&(E[d]=l[d]);if(s&&s.defaultProps)for(d in l=s.defaultProps,l)E[d]===void 0&&(E[d]=l[d]);return{$$typeof:r,type:s,key:g,ref:R,props:E,_owner:a.current}}return Tn.Fragment=t,Tn.jsx=o,Tn.jsxs=o,Tn}ci.exports=eE();var ne=ci.exports;const bi=e=>e.reduce((r,t,n)=>({...r,[n]:a=>t(a)||!0}),{}),hi=(e,r)=>{const t=r.split(".").reduce((n,a)=>n!==void 0?n[a]:n,e);return t==null?void 0:t.message};var Oi={exports:{}};(function(e,r){(function(t,n){e.exports=n()})(Xk,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,i=/\d\d/,o=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,l={},u=function(y){return(y=+y)+(y>68?1900:2e3)},d=function(y){return function(N){this[y]=+N}},E=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(N){if(!N||N==="Z")return 0;var T=N.match(/([+-]|\d\d)/g),b=60*T[1]+(+T[2]||0);return b===0?0:T[0]==="+"?-b:b}(y)}],g=function(y){var N=l[y];return N&&(N.indexOf?N:N.s.concat(N.f))},R=function(y,N){var T,b=l.meridiem;if(b){for(var G=1;G<=24;G+=1)if(y.indexOf(b(G,0,N))>-1){T=G>12;break}}else T=y===(N?"pm":"PM");return T},_={A:[s,function(y){this.afternoon=R(y,!1)}],a:[s,function(y){this.afternoon=R(y,!0)}],Q:[a,function(y){this.month=3*(y-1)+1}],S:[a,function(y){this.milliseconds=100*+y}],SS:[i,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[o,d("seconds")],ss:[o,d("seconds")],m:[o,d("minutes")],mm:[o,d("minutes")],H:[o,d("hours")],h:[o,d("hours")],HH:[o,d("hours")],hh:[o,d("hours")],D:[o,d("day")],DD:[i,d("day")],Do:[s,function(y){var N=l.ordinal,T=y.match(/\d+/);if(this.day=T[0],N)for(var b=1;b<=31;b+=1)N(b).replace(/\[|\]/g,"")===y&&(this.day=b)}],w:[o,d("week")],ww:[i,d("week")],M:[o,d("month")],MM:[i,d("month")],MMM:[s,function(y){var N=g("months"),T=(g("monthsShort")||N.map(function(b){return b.slice(0,3)})).indexOf(y)+1;if(T<1)throw new Error;this.month=T%12||T}],MMMM:[s,function(y){var N=g("months").indexOf(y)+1;if(N<1)throw new Error;this.month=N%12||N}],Y:[/[+-]?\d+/,d("year")],YY:[i,function(y){this.year=u(y)}],YYYY:[/\d{4}/,d("year")],Z:E,ZZ:E};function p(y){var N,T;N=y,T=l&&l.formats;for(var b=(y=N.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(j,H,L){var P=L&&L.toUpperCase();return H||T[L]||t[L]||T[P].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(w,x,J){return x||J.slice(1)})})).match(n),G=b.length,F=0;F<G;F+=1){var U=b[F],O=_[U],c=O&&O[0],M=O&&O[1];b[F]=M?{regex:c,parser:M}:U.replace(/^\[|\]$/g,"")}return function(j){for(var H={},L=0,P=0;L<G;L+=1){var w=b[L];if(typeof w=="string")P+=w.length;else{var x=w.regex,J=w.parser,ee=j.slice(P),ie=x.exec(ee)[0];J.call(H,ie),j=j.replace(ie,"")}}return function(me){var Ne=me.afternoon;if(Ne!==void 0){var ue=me.hours;Ne?ue<12&&(me.hours+=12):ue===12&&(me.hours=0),delete me.afternoon}}(H),H}}return function(y,N,T){T.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(u=y.parseTwoDigitYear);var b=N.prototype,G=b.parse;b.parse=function(F){var U=F.date,O=F.utc,c=F.args;this.$u=O;var M=c[1];if(typeof M=="string"){var j=c[2]===!0,H=c[3]===!0,L=j||H,P=c[2];H&&(P=c[2]),l=this.$locale(),!j&&P&&(l=T.Ls[P]),this.$d=function(ee,ie,me,Ne){try{if(["x","X"].indexOf(ie)>-1)return new Date((ie==="X"?1e3:1)*ee);var ue=p(ie)(ee),Ce=ue.year,$e=ue.month,On=ue.day,ir=ue.hours,on=ue.minutes,In=ue.seconds,sn=ue.milliseconds,ln=ue.zone,Kn=ue.week,Je=new Date,dn=On||(Ce||$e?1:Je.getDate()),ze=Ce||Je.getFullYear(),Ve=0;Ce&&!$e||(Ve=$e>0?$e-1:Je.getMonth());var un,Ln=ir||0,Dn=on||0,k=In||0,v=sn||0;return ln?new Date(Date.UTC(ze,Ve,dn,Ln,Dn,k,v+60*ln.offset*1e3)):me?new Date(Date.UTC(ze,Ve,dn,Ln,Dn,k,v)):(un=new Date(ze,Ve,dn,Ln,Dn,k,v),Kn&&(un=Ne(un).week(Kn).toDate()),un)}catch{return new Date("")}}(U,M,O,T),this.init(),P&&P!==!0&&(this.$L=this.locale(P).$L),L&&U!=this.format(M)&&(this.$d=new Date("")),l={}}else if(M instanceof Array)for(var w=M.length,x=1;x<=w;x+=1){c[1]=M[x-1];var J=T.apply(this,c);if(J.isValid()){this.$d=J.$d,this.$L=J.$L,this.init();break}x===w&&(this.$d=new Date(""))}else G.call(this,F)}}})})(Oi);var nE=Oi.exports;const rE=Qk(nE),tE="_readOnlyContainer_v0eco_1",aE="_readOnlyContent_v0eco_4",iE="_readOnlyContentCenter_v0eco_7",oE="_textarea_v0eco_11",sE="_space_v0eco_15",Gn={readOnlyContainer:tE,readOnlyContent:aE,readOnlyContentCenter:iE,textarea:oE,space:sE},lE=e=>e!=null&&e!=="",dE=({label:e,value:r,isEdited:t=!1,type:n,hideLabel:a,size:i})=>lE(r)?ne.jsxs("div",{className:Gn.readOnlyContainer,children:[e&&!a&&ne.jsx(an,{size:"small",children:e}),ne.jsx("div",{className:n==="textarea"?Gn.textarea:"",children:ne.jsxs(Yr,{className:Gn.readOnlyContent,size:i,children:[r,t&&ne.jsx(Ni,{className:Gn.space})]})})]}):null;de.extend(rE);const uE="_hideRadioLabels_1u3xf_1",kE={hideRadioLabels:uE},EE=({label:e,description:r,name:t,validate:n=[],radios:a,onChange:i,disabled:o=!1,isReadOnly:s=!1,isHorizontal:l=!1,parse:u=_=>_,isTrueOrFalseSelection:d=!1,hideLegend:E=!1,hideRadioLabels:g=!1,isEdited:R=!1})=>{const{formState:{errors:_}}=rn(),{field:p}=Za({name:t,rules:{validate:f.useMemo(()=>bi(n),[n])}}),y=d?T=>T==="true":u,N=ne.jsxs(ne.Fragment,{children:[e,s&&R&&ne.jsx(Ni,{})]});return ne.jsxs(uu,{name:t,value:p.value!==void 0?p.value:null,onChange:T=>{i&&i(T),p.onChange(T)},size:"small",legend:N,description:r,error:hi(_,t),className:g?kE.hideRadioLabels:"",hideLegend:E,children:[!l&&a.map(T=>ne.jsxs(f.Fragment,{children:[ne.jsx(Mt,{value:y(T.value),disabled:T.disabled||o||s,children:T.label}),p.value===y(T.value)&&T.element]},T.value)),l&&ne.jsxs(vi,{gap:"4",children:[a.map(T=>ne.jsx(Mt,{value:y(T.value),disabled:T.disabled||o||s,children:T.label},T.value)),a.filter(T=>p.value===y(T.value)).map(T=>ne.jsx(A.Fragment,{children:T.element},T.value))]})]})},gE="_textAreaFieldWithBadges_bdz0b_1",vE="_etikettWrapper_bdz0b_4",xt={textAreaFieldWithBadges:gE,etikettWrapper:vE},Lr=({name:e,label:r,readOnly:t,maxLength:n,badges:a,validate:i=[],parse:o=E=>E,className:s,description:l,isEdited:u,...d})=>{const{formState:{errors:E}}=rn(),{field:g}=Za({name:e,rules:{validate:f.useMemo(()=>bi(i),[i])}});return t?ne.jsx(dE,{label:r,value:g.value,type:"textarea",isEdited:u,hideLabel:d.hideLabel}):ne.jsxs("div",{className:a?xt.textAreaFieldWithBadges:null,children:[a&&ne.jsx("div",{className:xt.etikettWrapper,children:a.map(({type:R,titleText:_})=>ne.jsx(iu,{variant:R,size:"small",children:_},_))}),ne.jsx(Ru,{size:"small",label:r,description:l,className:s,autoComplete:"off",...g,onChange:R=>g.onChange(R.currentTarget.value!==""?o(R.currentTarget.value):null),value:g.value?g.value:"",error:hi(E,e),maxLength:n,...d})]})},TE=({formMethods:e,onSubmit:r,children:t,className:n,setDataOnUnmount:a})=>{const{handleSubmit:i,getValues:o}=e;return f.useEffect(()=>()=>{a&&a(o())},[]),ne.jsx(Yl,{...e,children:ne.jsx("form",{className:n,onSubmit:r?i(s=>r(s)):void 0,children:t})})},mE="_summaryTitle_45kqm_1",RE="_infoSummary_45kqm_5",fE="_ingenPerioder_45kqm_13",AE="_redNumber_45kqm_17",yE="_positivNumber_45kqm_23",pE="_resultName_45kqm_28",Ke={summaryTitle:mE,infoSummary:RE,ingenPerioder:fE,redNumber:AE,positivNumber:yE,resultName:pE},Ii=({fom:e,tom:r,feilutbetaling:t,etterbetaling:n,inntrekk:a,ingenPerioderMedAvvik:i})=>S.jsxs(S.Fragment,{children:[S.jsx(ge,{size:"small",className:Ke.summaryTitle,children:S.jsx(Z,{id:"Simulering.bruker"})}),S.jsx(Fe,{eightPx:!0}),S.jsxs("div",{className:Ke.infoSummary,children:[i&&S.jsx("div",{className:Ke.ingenPerioder,children:S.jsx(Z,{id:"Simulering.ingenPerioder"})}),!i&&S.jsxs(S.Fragment,{children:[S.jsx(an,{size:"small",children:`${de(e).format(mt)} - ${de(r).format(mt)}`}),S.jsx(Fe,{sixteenPx:!0}),S.jsxs(sk,{children:[S.jsxs(Ht,{children:[S.jsx(vn,{className:Ke.resultName,children:S.jsxs(ge,{size:"small",children:[S.jsx(Z,{id:"Simulering.etterbetaling"}),":"]})}),S.jsx(vn,{children:S.jsx(ge,{size:"small",children:Bn(n)})})]}),S.jsxs(Ht,{children:[S.jsx(vn,{className:Ke.resultName,children:S.jsxs(ge,{size:"small",children:[S.jsx(Z,{id:"Simulering.tilbakekreving"}),":"]})}),S.jsx(vn,{children:S.jsx(ge,{size:"small",children:S.jsx("span",{className:t?Ke.redNumber:Ke.positivNumber,children:Bn(t)})})}),a!==null&&S.jsx(vn,{children:S.jsxs(ge,{size:"small",children:[S.jsx(Z,{id:"Simulering.inntrekk"}),":",S.jsx("span",{className:a?Ke.redNumber:Ke.positivNumber,children:Bn(a)})]})})]})]})]})]})]});Ii.__docgenInfo={description:"Simulering oppsummering",methods:[],displayName:"SimuleringSummary",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},etterbetaling:{required:!0,tsType:{name:"number"},description:""},inntrekk:{required:!1,tsType:{name:"number"},description:""},ingenPerioderMedAvvik:{required:!1,tsType:{name:"boolean"},description:""}}};var Ki={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var r={}.hasOwnProperty;function t(){for(var i="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(i=a(i,n.call(this,s)))}return i}function n(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return t.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var s in i)r.call(i,s)&&i[s]&&(o=a(o,this&&this[s]||s));return o}function a(i,o){return o?i?i+" "+o:i+o:i}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(Ki);var _E=Ki.exports;const SE=$i(_E),NE="_invisibleButton_p9vj5_1",cE={invisibleButton:NE},bE=e=>e?"Simulering.headerText.VisFærreDetaljer":"Simulering.headerText.VisFlereDetaljer",Li=({toggleDetails:e,showDetails:r,mottakerIndex:t})=>S.jsxs("button",{type:"button",className:cE.invisibleButton,onClick:()=>e(t),children:[S.jsx(Z,{id:bE(r)}),r?S.jsx(_d,{}):S.jsx(si,{})]});Li.__docgenInfo={description:"",methods:[],displayName:"CollapseButton",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"boolean"},description:""},mottakerIndex:{required:!0,tsType:{name:"number"},description:""}}};const hE="_tableWrapper_1tst4_1",OE="_tableTitle_1tst4_7",IE="_simuleringTable_1tst4_11",KE="_rodTekst_1tst4_16",LE="_lastColumn_1tst4_20",DE="_nextPeriod_1tst4_62",PE="_normalPeriod_1tst4_68",Zn={tableWrapper:hE,tableTitle:OE,simuleringTable:IE,rodTekst:KE,lastColumn:LE,nextPeriod:DE,normalPeriod:PE},Di=SE.bind(Zn),_n={DIFFERANSE:"differanse",INNTREKK:"inntrekk",FEILUTBETALING:"feilutbetaling",INNTREKKNESTEMÅNED:"inntrekkNesteMåned",OPPFYLT:"oppfylt",REDUKSJON:"reduksjon"},Yt=(e,r)=>`${e.month}${e.year}`===(r?de(r).format("MMMMYY"):!1),FE=(e,r,t,n)=>[e?f.createElement(Li,{...r,key:`collapseButton-${t.length}`}):S.jsx("div",{}),...t.map(i=>S.jsx("span",{className:Di({nextPeriod:Yt(i,n),normalPeriod:!Yt(i,n)}),children:S.jsx(Z,{id:`Simulering.headerText.${i.month}`})},`${i.month}-${i.year}`))],ME=e=>e.some(r=>r.rader.length>1),Ct=(e,r)=>!!e.rader.find(n=>n.feltnavn===_n.DIFFERANSE)&&!r,VE=(e,r)=>e&&!r,$t=(e,r,t)=>{const n=`${de(t).format("MMMMYY")}`;return r.map(i=>e.find(s=>de(s.periode.tom).format("MMMMYY").toLowerCase()===`${i.month}${i.year}`)||{måned:`${i.month}${i.year}`,beløp:null}).map((i,o)=>S.jsx(Ze,{className:Di({rodTekst:!i.beløp||i.beløp<0,lastColumn:"måned"in i?i.måned===n:de(i.periode.tom).format("MMMMYY")===n}),children:i.beløp?Bn(i.beløp):"-"},`columnIndex${o+1}`))},GE=(e,r)=>{const t=e.mottakerIdentifikator?r[e.mottakerIdentifikator]:void 0;return t?`${t.navn} (${e.mottakerNummer})`:`${e.mottakerNummer}`},jE=(e,r)=>e.mottakerType===qn.ARBG||e.mottakerType===qn.ARBGP?S.jsx(ge,{size:"small",className:Zn.tableTitle,children:GE(e,r)}):null,UE=(e,r,t)=>e?r.length>1?t.filter(n=>n.feltnavn!==_n.INNTREKKNESTEMÅNED):[]:t,BE=(e,r)=>!!(e&&r===qn.BRUKER),HE=(e,r)=>e||r,wE=(e,r,t)=>{const n=BE(e,t.mottakerType)?de(t.nesteUtbPeriode.tom).subtract(1,"months").format():HE(r,t.nesteUtbPeriode.fom);return Ul(n,t.nesteUtbPeriode.tom)},Pi=({simuleringResultat:e,toggleDetails:r,showDetails:t,ingenPerioderMedAvvik:n,arbeidsgiverOpplysningerPerId:a})=>S.jsx(S.Fragment,{children:e.perioderPerMottaker.map((i,o)=>{const s=wE(n,e.periode.fom,i),l=i.nesteUtbPeriode.tom,u=t.find(E=>E.id===o),d=[];return S.jsxs("div",{className:Zn.tableWrapper,children:[jE(i,a),S.jsx(Si,{headerColumnContent:FE(ME(i.resultatPerFagområde),{toggleDetails:r,showDetails:u?u.show:!1,mottakerIndex:o},s,l),classNameTable:Zn.simuleringTable,children:d.concat(...i.resultatPerFagområde.map((E,g)=>E.rader.filter(R=>{const _=R.feltnavn===_n.DIFFERANSE,p=Ct(E,_);return!VE(p,u?u.show:!1)}).map((R,_)=>{const p=R.feltnavn===_n.DIFFERANSE,y=Ct(E,p);return S.jsxs(Kr,{isBold:p||n,isDashedBottomBorder:y,isSolidBottomBorder:!y,children:[S.jsx(Ze,{children:S.jsx(Z,{id:`Simulering.${E.fagOmrådeKode}.${R.feltnavn}`})}),$t(R.resultaterPerMåned,s,l)]},`rowIndex${g+1}${_+1}`)}))).concat(UE(n,i.resultatPerFagområde,i.resultatOgMotregningRader).map((E,g)=>S.jsxs(Kr,{isBold:E.feltnavn!==_n.INNTREKKNESTEMÅNED,isSolidBottomBorder:!0,children:[S.jsx(Ze,{children:S.jsx(Z,{id:`Simulering.${E.feltnavn}`})}),$t(E.resultaterPerMåned,s,l)]},`rowIndex${g+1}`)))},`tableIndex${o+1}`)]},`tableIndex${o+1}`)})});Pi.__docgenInfo={description:"",methods:[],displayName:"SimuleringTable",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const qE="Dato må være før eller lik {limit}",xE="Dato må være etter eller lik {limit}",YE="Perioder kan ikke overlappe i tid",CE="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",$E="Dato må være lik {value}",JE="Dato må skrives slik: dd.mm.åååå",zE="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",WE="Tallet kan ikke inneholde mer enn to desimaler",ZE="Tallet kan ikke ha desimaler",XE="Feltet kan kun inneholde tall",QE="Ugyldig fødselsnummer",eg="Feltet må være et fødselsnummer (11 siffer)",ng="Ugyldig organisasjonsnummer.",rg="Ugyldig organisasjonsnummer eller fødselsnummer",tg="Startdato må være før eller lik sluttdato",ag="Periode er utenfor opptjeningsperioden",ig="Ugyldig saksnummer eller fødselsnummer",og="Feltet inneholder ugyldige tegn: {text}",sg="Feltet inneholder en ugyldig verdi: {value}",lg="Feltet kan ikke inneholde mellomrom",dg="Feltet må fylles ut",ug="Du kan skrive maksimalt {length} tegn",kg="Du må skrive minst {length} tegn",Eg="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",gg="Feltet må være mindre eller lik {length}",vg="Feltet må være større eller lik {length}",Tg="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",mg={DateNotBeforeOrEqual:qE,DateNotAfterOrEqual:xE,DateRangesOverlapping:YE,DateRangesOverlappingPeriodTypes:CE,DatesNotEqual:$E,InvalidDate:JE,InvalidDatesInPeriod:zE,InvalidDecimal:WE,InvalidInteger:ZE,InvalidNumber:XE,InvalidFodselsnr:QE,InvalidFodselsnrFormat:eg,InvalidOrgnr:ng,InvalidOrgnrOrFodselsnr:rg,InvalidPeriod:tg,InvalidPeriodRange:ag,InvalidSaksnrOrFodselsnrFormat:ig,InvalidText:og,InvalidValue:sg,IllegalWhiteSpace:lg,IsRequired:dg,MaxLength:ug,MinLength:kg,MaxLengthOrFodselsnr:Eg,MaxValue:gg,MinValue:vg,SammeFodselsnrSomSoker:Tg},{formatMessage:tr}=Se(mg),Rg=e=>tr({id:"InvalidText"},{text:e}),fg=()=>tr({id:"IsRequired"}),Ag=e=>tr({id:"MaxLength"},{length:e}),yg=e=>tr({id:"MinLength"},{length:e}),pg=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,_g=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,zr=e=>e==null||e.toString().trim().length===0;var Fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vi={exports:{}};(function(e,r){(function(t,n){e.exports=n()})(Fi,function(){return function(t,n){n.prototype.isSameOrAfter=function(a,i){return this.isSame(a,i)||this.isAfter(a,i)}}})})(Vi);var Sg=Vi.exports;const Ng=Mi(Sg);var Gi={exports:{}};(function(e,r){(function(t,n){e.exports=n()})(Fi,function(){return function(t,n){n.prototype.isSameOrBefore=function(a,i){return this.isSame(a,i)||this.isBefore(a,i)}}})})(Gi);var cg=Gi.exports;const bg=Mi(cg);de.extend(Ng);de.extend(bg);const wn=e=>zr(e)?fg():void 0,ji=e=>r=>zr(r)||r.toString().trim().length>=e?null:yg(e),Ui=e=>r=>zr(r)||r.toString().trim().length<=e?null:Ag(e),Dr=e=>{if(!pg.test(e)){const r=e.replace(_g,"");return Rg(r.replace(/[\t]/g,"Tabulatortegn"))}return null},hg="_helpTextImage_1p9zp_1",Og="_tooltipContent_1p9zp_9",Ig="_varsel_1p9zp_17",Kg="_bold_1p9zp_22",Lg="_previewLink_1p9zp_26",Dg="_col_1p9zp_31",jn={helpTextImage:hg,tooltipContent:Og,varsel:Ig,bold:Kg,previewLink:Lg,col:Dg},Jt=ji(3),zt=Ui(1500),Wr="IKKE_SEND",Pg=e=>S.jsx(Z,{id:e?"Simulering.HjelpetekstForeldrepenger":"Simulering.HjelpetekstEngangsstonad"}),Fg=e=>{const{videreBehandling:r,varseltekst:t,begrunnelse:n}=e;return r!=null&&r.endsWith(Wr)?{kode:re.VURDER_FEILUTBETALING,begrunnelse:n,videreBehandling:we.TILBAKEKR_OPPRETT}:{kode:re.VURDER_FEILUTBETALING,begrunnelse:n,videreBehandling:r,varseltekst:t}},Mg=(e,r)=>!e||!r?void 0:{videreBehandling:!r.varseltekst&&r.videreBehandling===we.TILBAKEKR_OPPRETT?r.videreBehandling+Wr:r.videreBehandling,varseltekst:r.varseltekst,begrunnelse:e.begrunnelse},Bi=({readOnly:e,sprakkode:r,previewCallback:t,aksjonspunkt:n,fagsak:a})=>{const i=cn(),{watch:o}=rn(),s=o("varseltekst"),l=a.fagsakYtelseType===da.FORELDREPENGER,u=f.useCallback(d=>{t("",s||" "),d.preventDefault()},[s]);return!n||n.definisjon!==re.VURDER_FEILUTBETALING?null:S.jsxs(zn,{gap:"10",align:"start",children:[S.jsx(Lr,{name:"begrunnelse",label:i.formatMessage({id:"Simulering.vurdering"}),validate:[wn,Jt,zt,Dr],maxLength:1500,readOnly:e}),S.jsx(EE,{name:"videreBehandling",label:S.jsx(Z,{id:"Simulering.videreBehandling"}),validate:[wn],isReadOnly:e,radios:[{value:we.TILBAKEKR_OPPRETT,label:S.jsx(Z,{id:"Simulering.gjennomfør"}),element:S.jsxs("div",{className:jn.varsel,children:[S.jsx(Fe,{eightPx:!0}),S.jsx(cu,{alignOffset:20,children:S.jsxs(zn,{gap:"4",children:[S.jsxs(vi,{gap:"2",children:[S.jsx(ge,{size:"small",className:jn.bold,children:S.jsx(Z,{id:"Simulering.varseltekst"})}),S.jsx(Ai,{content:Pg(l),children:S.jsx(Ld,{className:jn.helpTextImage})})]}),S.jsx(Lr,{name:"varseltekst",label:i.formatMessage({id:"Simulering.fritekst"}),validate:[wn,Jt,zt,Dr],maxLength:1500,readOnly:e,parse:Bl,badges:[{type:"info",titleText:Hl(r)}]}),!e&&S.jsx(S.Fragment,{children:S.jsx("a",{href:"",onClick:u,className:jn.previewLink,children:S.jsx(Z,{id:"Messages.PreviewText"})})})]})})]})},{value:`${we.TILBAKEKR_OPPRETT}${Wr}`,label:S.jsx(Z,{id:"Simulering.OpprettMenIkkeSendVarsel"})},{value:we.TILBAKEKR_IGNORER,label:S.jsx(Z,{id:"Simulering.avvent"})}]})]})};Bi.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevSøkerForm",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(mottaker: string, fritekst: string) => Promise<any>",signature:{arguments:[{type:{name:"string"},name:"mottaker"},{type:{name:"string"},name:"fritekst"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""}}};const Vg="_readMore_mcbzv_1",Gg={readMore:Vg},jg=ji(3),Ug=Ui(1500),Bg=e=>({kode:re.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:e.begrunnelseEtterbetaling}),Hg=e=>{if(!(!e||e.definisjon!==re.KONTROLLER_STOR_ETTERBETALING_SØKER))return{begrunnelseEtterbetaling:e.begrunnelse}},Hi=({readOnly:e,aksjonspunkt:r})=>{const t=cn();return!r||r.definisjon!==re.KONTROLLER_STOR_ETTERBETALING_SØKER?null:S.jsxs(zn,{gap:"4",children:[S.jsx(tu,{header:S.jsx(Z,{id:"Simulering.Etterbetaling.ReadMoreTittel"}),className:Gg.readMore,children:S.jsx(Z,{id:"Simulering.Etterbetaling.ReadMoreInnhold"})}),S.jsx(Lr,{name:"begrunnelseEtterbetaling",label:t.formatMessage({id:"Simulering.Etterbetaling.Vurdering"}),validate:[wn,jg,Ug,Dr],maxLength:1500,size:"medium",readOnly:e})]})};Hi.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevSøkerForm",props:{aksjonspunkt:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Xn=(e,r)=>e.find(t=>t.definisjon===r),nn=(e,r)=>e.some(t=>t.definisjon===r),wg=(e,r)=>t=>{const n=e.findIndex(i=>i.id===t);let a=[];if(n!==-1){const i={id:t,show:!e[n].show};a=[...e.slice(0,n),i,...e.slice(n+1,e.length-1)]}else a=e.concat({id:t,show:!0});r(a)},qg=(e,r)=>{const t=[];return nn(r,re.VURDER_FEILUTBETALING)&&t.push(Fg(e)),nn(r,re.KONTROLLER_STOR_ETTERBETALING_SØKER)&&t.push(Bg(e)),t},xg=(e,r)=>{if(e.length!==0)return{...Mg(Xn(e,re.VURDER_FEILUTBETALING),r),...Hg(Xn(e,re.KONTROLLER_STOR_ETTERBETALING_SØKER))}},Yg=e=>{const r=[];return nn(e,re.VURDER_FEILUTBETALING)&&r.push(S.jsx(Z,{id:"Simulering.AksjonspunktHelpText.5084"},"vurderFeilutbetaling")),nn(e,re.KONTROLLER_STOR_ETTERBETALING_SØKER)&&r.push(S.jsx(Z,{id:"Simulering.Etterbetaling.Tittel"},"kontrollerFeilutbetaling")),r},wi=({simuleringResultat:e,readOnly:r,sprakkode:t,previewCallback:n,formData:a,setFormData:i,submitCallback:o,isApOpen:s,tilbakekrevingvalg:l,aksjonspunkter:u,fagsak:d,arbeidsgiverOpplysningerPerId:E})=>{const g=od({defaultValues:a||xg(u,l)}),{formState:R}=g,[_,p]=f.useState([]),y=l!==void 0&&l.videreBehandling===we.TILBAKEKR_OPPDATER,N=wg(_,p),T=e==null?void 0:e.simuleringResultat,b=nn(u,re.VURDER_FEILUTBETALING)||nn(u,re.KONTROLLER_STOR_ETTERBETALING_SØKER),G=s?Yg(u):[];return S.jsxs(S.Fragment,{children:[S.jsx(Ed,{size:"small",children:S.jsx(Z,{id:"Simulering.Title"})}),S.jsx(Fe,{twentyPx:!0}),T&&S.jsxs(S.Fragment,{children:[G.length>0&&G.map(F=>S.jsxs("div",{children:[S.jsx(yu,{children:[F]}),S.jsx(Fe,{sixteenPx:!0})]},F.key)),S.jsx(Ii,{fom:T.periode.fom,tom:T.periode.tom,feilutbetaling:T.sumFeilutbetaling,etterbetaling:T.sumEtterbetaling,inntrekk:T.sumInntrekk,ingenPerioderMedAvvik:T.ingenPerioderMedAvvik}),S.jsx(Pi,{arbeidsgiverOpplysningerPerId:E,showDetails:_,toggleDetails:N,simuleringResultat:T,ingenPerioderMedAvvik:T.ingenPerioderMedAvvik}),S.jsx(Fe,{twentyPx:!0}),y&&S.jsx(an,{size:"small",children:S.jsx(Z,{id:"Simulering.ApenTilbakekrevingsbehandling"})})]}),!e&&S.jsx(Z,{id:"Simulering.ingenData"}),b&&S.jsxs(TE,{formMethods:g,onSubmit:F=>o(qg(F,u)),setDataOnUnmount:i,children:[S.jsx(Bi,{aksjonspunkt:Xn(u,re.VURDER_FEILUTBETALING),fagsak:d,previewCallback:n,readOnly:r,sprakkode:t}),S.jsx(Fe,{sixteenPx:!0}),S.jsx(Hi,{readOnly:r,aksjonspunkt:Xn(u,re.KONTROLLER_STOR_ETTERBETALING_SØKER)}),S.jsx(Fe,{sixteenPx:!0}),S.jsx(ki,{size:"small",variant:"primary",disabled:!R.isDirty||R.isSubmitting||r,loading:R.isSubmitting,children:S.jsx(Z,{id:"SubmitButton.ConfirmInformation"})})]})]})};wi.__docgenInfo={description:"",methods:[],displayName:"SimuleringPanel",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"videreBehandling",value:{name:"string",required:!1}},{key:"varseltekst",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Cg={"Simulering.Title":"Simulering","Simulering.FP.nyttBeløp":"Foreldrepenger nytt beløp","Simulering.FP.tidligereUtbetalt":"Foreldrepenger tidligere utbetalt","Simulering.FP.differanse":"Foreldrepenger avvik","Simulering.FPREF.nyttBeløp":"Foreldrepenger nytt beløp","Simulering.FPREF.tidligereUtbetalt":"Foreldrepenger tidligere utbetalt","Simulering.FPREF.differanse":"Foreldrepenger avvik","Simulering.OM.nyttBeløp":"Omsorgspenger nytt beløp","Simulering.OM.tidligereUtbetalt":"Omsorgspenger tidligere utbetalt","Simulering.OM.differanse":"Omsorgspenger avvik","Simulering.OMREF.nyttBeløp":"Omsorgspenger nytt beløp","Simulering.OMREF.tidligereUtbetalt":"Omsorgspenger tidligere utbetalt","Simulering.OMREF.differanse":"Omsorgspenger avvik","Simulering.OOP.nyttBeløp":"Pleiepenger nytt beløp","Simulering.OOP.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.OOP.differanse":"Pleiepenger avvik","Simulering.OOPREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.OOPREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.OOPREF.differanse":"Pleiepenger avvik","Simulering.OPP.nyttBeløp":"Opplæringspenger nytt beløp","Simulering.OPP.tidligereUtbetalt":"Opplæringspenger tidligere utbetalt","Simulering.OPP.differanse":"Opplæringspenger avvik","Simulering.OPPREF.nyttBeløp":"Opplæringspenger nytt beløp","Simulering.OPPREF.tidligereUtbetalt":"Opplæringspenger tidligere utbetalt","Simulering.OPPREF.differanse":"Opplæringspenger avvik","Simulering.PB.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PB.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PB.differanse":"Pleiepenger avvik","Simulering.PBREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PBREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PBREF.differanse":"Pleiepenger avvik","Simulering.PN.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PN.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PN.differanse":"Pleiepenger avvik","Simulering.PNREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PNREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PNREF.differanse":"Pleiepenger avvik","Simulering.REFUTG.nyttBeløp":"Engangstønad nytt beløp","Simulering.REFUTG.tidligereUtbetalt":"Engangstønad tidligere utbetalt","Simulering.REFUTG.differanse":"Engangstønad avvik","Simulering.SP.nyttBeløp":"Sykepenger nytt beløp","Simulering.SP.tidligereUtbetalt":"Sykepenger tidligere utbetalt","Simulering.SP.differanse":"Sykepenger avvik","Simulering.SPREF.nyttBeløp":"Sykepenger nytt beløp","Simulering.SPREF.tidligereUtbetalt":"Sykepenger tidligere utbetalt","Simulering.SPREF.differanse":"Sykepenger avvik","Simulering.SVP.nyttBeløp":"Svangerskapspenger nytt beløp","Simulering.SVP.tidligereUtbetalt":"Svangerskapspenger tidligere utbetalt","Simulering.SVP.differanse":"Svangerskapspenger avvik","Simulering.SVPREF.nyttBeløp":"Svangerskapspenger nytt beløp","Simulering.SVPREF.tidligereUtbetalt":"Svangerskapspenger tidligere utbetalt","Simulering.SVPREF.differanse":"Svangerskapspenger avvik","Simulering.resultatEtterMotregning":"Resultat etter motregning mellom ytelser","Simulering.inntrekk":"Inntrekk","Simulering.inntrekkNesteMåned":"Inntrekk i neste måned","Simulering.tilbakekreving":"Feilutbetaling","Simulering.etterbetaling":"Etterbetaling","Simulering.resultat":"Resultat","Simulering.avregnetBeløp":"Avregnet beløp","Simulering.headerText.VisFærreDetaljer":"Vis færre detaljer","Simulering.headerText.VisFlereDetaljer":"Vis flere detaljer","Simulering.headerText.januar":"Jan","Simulering.headerText.februar":"Feb","Simulering.headerText.mars":"Mars","Simulering.headerText.april":"Apr","Simulering.headerText.mai":"Mai","Simulering.headerText.juni":"Jun","Simulering.headerText.juli":"Jul","Simulering.headerText.august":"Aug","Simulering.headerText.september":"Sep","Simulering.headerText.oktober":"Okt","Simulering.headerText.november":"Nov","Simulering.headerText.desember":"Des","Simulering.ingenData":"Ingen informasjon om simulering mottatt fra økonomiløsningen.","Simulering.ingenPerioder":"Ingen periode med avvik","Simulering.AksjonspunktHelpText.5084":"Vurder videre behandling av tilbakekreving","Simulering.vurdering":"Beskriv hvorfor det har oppstått en feilutbetaling og hvordan den skal behandles videre","Simulering.videreBehandling":"Fastsett videre behandling","Simulering.gjennomfør":"Opprett tilbakekreving, send varsel","Simulering.OpprettMenIkkeSendVarsel":"Opprett tilbakekreving, ikke send varsel","Simulering.Opprett":"Opprett tilbakekreving","Simulering.avvent":"Avvent samordning, ingen tilbakekreving","Simulering.formAlternativ.ja":"Ja","Simulering.formAlternativ.nei":"Nei","Simulering.bruker":"Bruker","Simulering.varseltekst":"Send varsel om tilbakekreving","Simulering.fritekst":"Fritekst i varselet","Simulering.HjelpetekstForeldrepenger":"Her skal du oppgi hvorfor brukeren ikke skulle fått utbetalt ytelsen i perioden(e). Du må også oppgi hvordan feilutbetalingen ble oppdaget, hvem som oppdaget den og når den ble oppdaget eller meldt til Nav. Eksempel på tekst: «Vi mottok melding fra deg [dato]om at du hadde jobbet heltid. Du kan ikke jobbe og motta foreldrepenger samtidig. Da vi mottok meldingen fra deg, var det allerede utbetalt foreldrenger for perioden du har jobbet.","Simulering.HjelpetekstEngangsstonad":"Her skal du oppgi hvorfor brukeren ikke skulle fått utbetalt ytelsen i perioden(e). Du må også oppgi hvordan feilutbetalingen ble oppdaget, hvem som oppdaget den og når den ble oppdaget eller meldt til Nav.","Simulering.ApenTilbakekrevingsbehandling":"Det foreligger en åpen tilbakekrevingsbehandling, endringer i vedtaket vil automatisk oppdatere eksisterende feilutbetalte perioder og beløp.","Simulering.Etterbetaling.Tittel":"Ny inntektsmelding vil føre til en høy etterbetaling til bruker i en tidligere innvilget periode. Kontroller om dette er riktig","Simulering.Etterbetaling.ReadMoreTittel":"Dette bør undersøkes rundt etterbetalingen","Simulering.Etterbetaling.ReadMoreInnhold":"Saken stopper i simulering fordi arbeidsgiver har endret sitt refusjonskrav, eller har endret fra refusjon til direkte utbetaling i en periode som allerede har blitt utbetalt til bruker. I tillegg er etterbetalingen høy. Du må kontrollerer om dette er riktig. Dette kan gjøres ved å kontakte arbeidsgiver. Er det feil, må de sende inn ny inntektsmelding. Får du ikke tak i arbeidsgiver, kan du kontakte søker og høre om de kan spørre arbeidsgiveren sin.","Simulering.Etterbetaling.Vurdering":"Begrunn hvorfor du går videre med denne behandlingen.","SubmitButton.ConfirmInformation":"Bekreft og fortsett","Malform.Beskrivelse":"Foretrukket språk","Messages.PreviewText":"Forhåndsvis varselbrev"},$g=Se(Cg),Zr=({fagsak:e,behandling:r,aksjonspunkter:t,simuleringResultat:n,tilbakekrevingvalg:a,arbeidsgiverOpplysningerPerId:i,submitCallback:o,isReadOnly:s,isAksjonspunktOpen:l,previewFptilbakeCallback:u,formData:d,setFormData:E})=>S.jsx(Ls,{value:$g,children:S.jsx(wi,{fagsak:e,arbeidsgiverOpplysningerPerId:i,sprakkode:r.sprakkode,aksjonspunkter:t,simuleringResultat:n,tilbakekrevingvalg:a,submitCallback:o,readOnly:s,isApOpen:l,previewCallback:u,formData:d,setFormData:E})});Zr.__docgenInfo={description:"",methods:[],displayName:"SimuleringProsessIndex",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Vilkar[]"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"any"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};const Jg={saksnummer:"123",fagsakYtelseType:da.FORELDREPENGER},zg={uuid:"1",versjon:1,sprakkode:"NO"},Wg={123:{erPrivatPerson:!1,identifikator:"123",navn:"test"}},Zg={simuleringResultat:{periode:{fom:"2019-01-01",tom:"2019-03-31"},sumEtterbetaling:0,sumFeilutbetaling:-49863,sumInntrekk:-10899,ingenPerioderMedAvvik:!1,perioderPerMottaker:[{mottakerType:qn.ARBG,mottakerIdentifikator:"123",mottakerNummer:"test",resultatPerFagområde:[{fagOmrådeKode:"FP",rader:[{feltnavn:"nyttBeløp",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:52619}]},{feltnavn:"tidligereUtbetalt",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:61795}]},{feltnavn:"differanse",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:-9176}]}]}],resultatOgMotregningRader:[{feltnavn:"inntrekkNesteMåned",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:0}]},{feltnavn:"resultat",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:-26486}]}],nesteUtbPeriode:{fom:"2019-10-01",tom:"2019-10-31"}}]},slåttAvInntrekk:!1},tv={title:"prosess/prosess-simulering",component:Zr},ar=({aksjonspunkter:e,submitCallback:r,tilbakekrevingvalg:t,isAksjonspunktOpen:n})=>S.jsx(Zr,{behandling:zg,alleKodeverk:Kl,submitCallback:r,isReadOnly:!1,isAksjonspunktOpen:n,readOnlySubmitButton:!1,status:"",vilkar:[],alleMerknaderFraBeslutter:{},setFormData:()=>{},fagsak:Jg,aksjonspunkter:e,arbeidsgiverOpplysningerPerId:Wg,simuleringResultat:Zg,tilbakekrevingvalg:t,previewFptilbakeCallback:Sn("button-click")}),mn=ar.bind({});mn.args={aksjonspunkter:[{definisjon:re.VURDER_FEILUTBETALING,begrunnelse:void 0}],isAksjonspunktOpen:!0,submitCallback:Sn("button-click")};const Rn=ar.bind({});Rn.args={aksjonspunkter:[{definisjon:re.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:void 0}],isAksjonspunktOpen:!0,submitCallback:Sn("button-click")};const fn=ar.bind({});fn.args={aksjonspunkter:[{definisjon:re.VURDER_FEILUTBETALING,begrunnelse:void 0},{definisjon:re.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:void 0}],isAksjonspunktOpen:!0,submitCallback:Sn("button-click")};const An=ar.bind({});An.args={aksjonspunkter:[],isAksjonspunktOpen:!1,submitCallback:Sn("button-click"),tilbakekrevingvalg:{videreBehandling:we.TILBAKEKR_OPPDATER,varseltekst:"varsel-eksempel"}};var Wt,Zt,Xt;mn.parameters={...mn.parameters,docs:{...(Wt=mn.parameters)==null?void 0:Wt.docs,source:{originalSource:`({
  aksjonspunkter,
  submitCallback,
  tilbakekrevingvalg,
  isAksjonspunktOpen
}) => <SimuleringProsessIndex behandling={behandling} alleKodeverk={alleKodeverk as any} submitCallback={submitCallback} isReadOnly={false} isAksjonspunktOpen={isAksjonspunktOpen} readOnlySubmitButton={false} status="" vilkar={[]} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} fagsak={fagsak} aksjonspunkter={aksjonspunkter} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} simuleringResultat={simuleringResultat} tilbakekrevingvalg={tilbakekrevingvalg} previewFptilbakeCallback={action('button-click') as (data: any) => Promise<any>} />`,...(Xt=(Zt=mn.parameters)==null?void 0:Zt.docs)==null?void 0:Xt.source}}};var Qt,ea,na;Rn.parameters={...Rn.parameters,docs:{...(Qt=Rn.parameters)==null?void 0:Qt.docs,source:{originalSource:`({
  aksjonspunkter,
  submitCallback,
  tilbakekrevingvalg,
  isAksjonspunktOpen
}) => <SimuleringProsessIndex behandling={behandling} alleKodeverk={alleKodeverk as any} submitCallback={submitCallback} isReadOnly={false} isAksjonspunktOpen={isAksjonspunktOpen} readOnlySubmitButton={false} status="" vilkar={[]} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} fagsak={fagsak} aksjonspunkter={aksjonspunkter} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} simuleringResultat={simuleringResultat} tilbakekrevingvalg={tilbakekrevingvalg} previewFptilbakeCallback={action('button-click') as (data: any) => Promise<any>} />`,...(na=(ea=Rn.parameters)==null?void 0:ea.docs)==null?void 0:na.source}}};var ra,ta,aa;fn.parameters={...fn.parameters,docs:{...(ra=fn.parameters)==null?void 0:ra.docs,source:{originalSource:`({
  aksjonspunkter,
  submitCallback,
  tilbakekrevingvalg,
  isAksjonspunktOpen
}) => <SimuleringProsessIndex behandling={behandling} alleKodeverk={alleKodeverk as any} submitCallback={submitCallback} isReadOnly={false} isAksjonspunktOpen={isAksjonspunktOpen} readOnlySubmitButton={false} status="" vilkar={[]} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} fagsak={fagsak} aksjonspunkter={aksjonspunkter} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} simuleringResultat={simuleringResultat} tilbakekrevingvalg={tilbakekrevingvalg} previewFptilbakeCallback={action('button-click') as (data: any) => Promise<any>} />`,...(aa=(ta=fn.parameters)==null?void 0:ta.docs)==null?void 0:aa.source}}};var ia,oa,sa;An.parameters={...An.parameters,docs:{...(ia=An.parameters)==null?void 0:ia.docs,source:{originalSource:`({
  aksjonspunkter,
  submitCallback,
  tilbakekrevingvalg,
  isAksjonspunktOpen
}) => <SimuleringProsessIndex behandling={behandling} alleKodeverk={alleKodeverk as any} submitCallback={submitCallback} isReadOnly={false} isAksjonspunktOpen={isAksjonspunktOpen} readOnlySubmitButton={false} status="" vilkar={[]} alleMerknaderFraBeslutter={{}} setFormData={() => undefined} fagsak={fagsak} aksjonspunkter={aksjonspunkter} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} simuleringResultat={simuleringResultat} tilbakekrevingvalg={tilbakekrevingvalg} previewFptilbakeCallback={action('button-click') as (data: any) => Promise<any>} />`,...(sa=(oa=An.parameters)==null?void 0:oa.docs)==null?void 0:sa.source}}};const av=["AksjonspunktVurderFeilutbetaling","AksjonspunktKontrollerEtterbetaling","AksjonspunktVurderFeilutbetalingOgEtterbetaling","SimuleringspanelUtenAksjonspunkt"];export{Rn as AksjonspunktKontrollerEtterbetaling,mn as AksjonspunktVurderFeilutbetaling,fn as AksjonspunktVurderFeilutbetalingOgEtterbetaling,An as SimuleringspanelUtenAksjonspunkt,av as __namedExportsOrder,tv as default};
