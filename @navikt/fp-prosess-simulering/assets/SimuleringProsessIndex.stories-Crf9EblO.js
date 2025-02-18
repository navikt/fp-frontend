import{j as P}from"./jsx-runtime-D_zvdyIk.js";import{r as f,R as N,b as mo}from"./index-_2TAQcTa.js";import{v as rl}from"./v4-CtRu48qb.js";import{e as tl}from"./react-BqxcPlzP.js";import{d as fe}from"./dayjs.min-DkLNzaWO.js";import{G as ut,r as al}from"./index-BsrZSYsV.js";import{g as il}from"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6EfIYDn.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./index-CQwh6Daz.js";const{addons:ol}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:sl}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:Ra}=__STORYBOOK_MODULE_GLOBAL__;var ll="storybook/actions",dl=`${ll}/action-event`,ul={depth:10,clearOnStoryChange:!0,limit:50},fo=(e,n)=>{let t=Object.getPrototypeOf(e);return!t||n(t)?t:fo(t,n)},gl=e=>!!(typeof e=="object"&&e&&fo(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),kl=e=>{if(gl(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let t=Object.getOwnPropertyDescriptor(n,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...t,value:Object.create(r.constructor.prototype)}),n}return e},vl=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?rl():Date.now().toString(36)+Math.random().toString(36).substring(2);function To(e,n={}){let t={...ul,...n},r=function(...a){var g,k;if(n.implicit){let E=(g="__STORYBOOK_PREVIEW__"in Ra?Ra.__STORYBOOK_PREVIEW__:void 0)==null?void 0:g.storyRenders.find(T=>T.phase==="playing"||T.phase==="rendering");if(E){let T=!((k=window==null?void 0:window.FEATURES)!=null&&k.disallowImplicitActionsInRenderV8),v=new sl({phase:E.phase,name:e,deprecated:T});if(T)console.warn(v);else throw v}}let i=ol.getChannel(),o=vl(),s=5,l=a.map(kl),d=a.length>1?l:l[0],u={id:o,count:0,data:{name:e,args:d},options:{...t,maxDepth:s+(t.depth||3),allowFunction:t.allowFunction||!1}};i.emit(dl,u)};return r.isAction=!0,r.implicit=n.implicit,r}var ue=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN="5032",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYR_BEREGNING="6007",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(ue||{}),Zn=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(Zn||{}),Gr=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(Gr||{});Gr.BRUKERS_ANDEL;Gr.FRILANS;Gr.EGEN_NÆRING;var Ro=(e=>(e.OPPRETTET="OPPRE",e.BEHANDLING_UTREDES="UTRED",e.AVSLUTTET="AVSLU",e.IVERKSETTER_VEDTAK="IVED",e.FATTER_VEDTAK="FVED",e))(Ro||{}),po=(e=>(e.FORSTEGANGSSOKNAD="BT-002",e.KLAGE="BT-003",e.REVURDERING="BT-004",e.DOKUMENTINNSYN="BT-006",e.TILBAKEKREVING="BT-007",e.ANKE="BT-008",e.TILBAKEKREVING_REVURDERING="BT-009",e))(po||{}),wt=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(wt||{}),zn=(e=>(e.ARBG="ARBG_ORG",e.ARBGP="ARBG_PRIV",e.BRUKER="BRUKER",e))(zn||{}),gt=(e=>(e.MOR="MORA",e.FAR="FARA",e.MEDMOR="MMOR",e))(gt||{}),ln=(e=>(e.TILBAKEKR_OPPRETT="TILBAKEKR_OPPRETT",e.TILBAKEKR_IGNORER="TILBAKEKR_IGNORER",e.TILBAKEKR_INNTREKK="TILBAKEKR_INNTREKK",e.TILBAKEKR_OPPDATER="TILBAKEKR_OPPDATER",e))(ln||{});const{global:El}=__STORYBOOK_MODULE_GLOBAL__,{setDefaultProjectAnnotations:DR,setProjectAnnotations:FR,composeStory:MR,composeStories:jR}=__STORYBOOK_MODULE_PREVIEW_API__;var{window:pa}=El;pa&&(pa.STORYBOOK_ENV="react");({...tl});var Hi;typeof module<"u"&&((Hi=module==null?void 0:module.hot)==null||Hi.decline());var kt=function(e,n){return kt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])},kt(e,n)};function we(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");kt(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var Y=function(){return Y=Object.assign||function(n){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Y.apply(this,arguments)};function hn(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t}function Be(e,n,t){if(t||arguments.length===2)for(var r=0,a=n.length,i;r<a;r++)(i||!(r in n))&&(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return e.concat(i||Array.prototype.slice.call(n))}function Ve(e,n){var t=n&&n.cache?n.cache:cl,r=n&&n.serializer?n.serializer:pl,a=n&&n.strategy?n.strategy:Tl;return a(e,{cache:t,serializer:r})}function ml(e){return e==null||typeof e=="number"||typeof e=="boolean"}function fl(e,n,t,r){var a=ml(r)?r:t(r),i=n.get(a);return typeof i>"u"&&(i=e.call(this,r),n.set(a,i)),i}function yo(e,n,t){var r=Array.prototype.slice.call(arguments,3),a=t(r),i=n.get(a);return typeof i>"u"&&(i=e.apply(this,r),n.set(a,i)),i}function co(e,n,t,r,a){return t.bind(n,e,r,a)}function Tl(e,n){var t=e.length===1?fl:yo;return co(e,this,t,n.cache.create(),n.serializer)}function Rl(e,n){return co(e,this,yo,n.cache.create(),n.serializer)}var pl=function(){return JSON.stringify(arguments)},yl=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(n){return this.cache[n]},e.prototype.set=function(n,t){this.cache[n]=t},e}(),cl={create:function(){return new yl}},Ge={variadic:Rl},X;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(X||(X={}));var te;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(te||(te={}));var Nn;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Nn||(Nn={}));function ya(e){return e.type===te.literal}function Al(e){return e.type===te.argument}function Ao(e){return e.type===te.number}function bo(e){return e.type===te.date}function _o(e){return e.type===te.time}function So(e){return e.type===te.select}function ho(e){return e.type===te.plural}function bl(e){return e.type===te.pound}function No(e){return e.type===te.tag}function Oo(e){return!!(e&&typeof e=="object"&&e.type===Nn.number)}function vt(e){return!!(e&&typeof e=="object"&&e.type===Nn.dateTime)}var Io=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,_l=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function Sl(e){var n={};return e.replace(_l,function(t){var r=t.length;switch(t[0]){case"G":n.era=r===4?"long":r===5?"narrow":"short";break;case"y":n.year=r===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":n.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":n.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":n.weekday=r===4?"long":r===5?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][r-4];break;case"a":n.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":n.hourCycle="h12",n.hour=["numeric","2-digit"][r-1];break;case"H":n.hourCycle="h23",n.hour=["numeric","2-digit"][r-1];break;case"K":n.hourCycle="h11",n.hour=["numeric","2-digit"][r-1];break;case"k":n.hourCycle="h24",n.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":n.minute=["numeric","2-digit"][r-1];break;case"s":n.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":n.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),n}var hl=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function Nl(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var n=e.split(hl).filter(function(k){return k.length>0}),t=[],r=0,a=n;r<a.length;r++){var i=a[r],o=i.split("/");if(o.length===0)throw new Error("Invalid number skeleton");for(var s=o[0],l=o.slice(1),d=0,u=l;d<u.length;d++){var g=u[d];if(g.length===0)throw new Error("Invalid number skeleton")}t.push({stem:s,options:l})}return t}function Ol(e){return e.replace(/^(.*?)-/,"")}var ca=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Lo=/^(@+)?(\+|#+)?[rs]?$/g,Il=/(\*)(0+)|(#+)(0+)|(0+)/g,Ko=/^(0+)$/;function Aa(e){var n={};return e[e.length-1]==="r"?n.roundingPriority="morePrecision":e[e.length-1]==="s"&&(n.roundingPriority="lessPrecision"),e.replace(Lo,function(t,r,a){return typeof a!="string"?(n.minimumSignificantDigits=r.length,n.maximumSignificantDigits=r.length):a==="+"?n.minimumSignificantDigits=r.length:r[0]==="#"?n.maximumSignificantDigits=r.length:(n.minimumSignificantDigits=r.length,n.maximumSignificantDigits=r.length+(typeof a=="string"?a.length:0)),""}),n}function Po(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Ll(e){var n;if(e[0]==="E"&&e[1]==="E"?(n={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(n={notation:"scientific"},e=e.slice(1)),n){var t=e.slice(0,2);if(t==="+!"?(n.signDisplay="always",e=e.slice(2)):t==="+?"&&(n.signDisplay="exceptZero",e=e.slice(2)),!Ko.test(e))throw new Error("Malformed concise eng/scientific notation");n.minimumIntegerDigits=e.length}return n}function ba(e){var n={},t=Po(e);return t||n}function Kl(e){for(var n={},t=0,r=e;t<r.length;t++){var a=r[t];switch(a.stem){case"percent":case"%":n.style="percent";continue;case"%x100":n.style="percent",n.scale=100;continue;case"currency":n.style="currency",n.currency=a.options[0];continue;case"group-off":case",_":n.useGrouping=!1;continue;case"precision-integer":case".":n.maximumFractionDigits=0;continue;case"measure-unit":case"unit":n.style="unit",n.unit=Ol(a.options[0]);continue;case"compact-short":case"K":n.notation="compact",n.compactDisplay="short";continue;case"compact-long":case"KK":n.notation="compact",n.compactDisplay="long";continue;case"scientific":n=Y(Y(Y({},n),{notation:"scientific"}),a.options.reduce(function(l,d){return Y(Y({},l),ba(d))},{}));continue;case"engineering":n=Y(Y(Y({},n),{notation:"engineering"}),a.options.reduce(function(l,d){return Y(Y({},l),ba(d))},{}));continue;case"notation-simple":n.notation="standard";continue;case"unit-width-narrow":n.currencyDisplay="narrowSymbol",n.unitDisplay="narrow";continue;case"unit-width-short":n.currencyDisplay="code",n.unitDisplay="short";continue;case"unit-width-full-name":n.currencyDisplay="name",n.unitDisplay="long";continue;case"unit-width-iso-code":n.currencyDisplay="symbol";continue;case"scale":n.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":n.roundingMode="floor";continue;case"rounding-mode-ceiling":n.roundingMode="ceil";continue;case"rounding-mode-down":n.roundingMode="trunc";continue;case"rounding-mode-up":n.roundingMode="expand";continue;case"rounding-mode-half-even":n.roundingMode="halfEven";continue;case"rounding-mode-half-down":n.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":n.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(Il,function(l,d,u,g,k,E){if(d)n.minimumIntegerDigits=u.length;else{if(g&&k)throw new Error("We currently do not support maximum integer digits");if(E)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Ko.test(a.stem)){n.minimumIntegerDigits=a.stem.length;continue}if(ca.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(ca,function(l,d,u,g,k,E){return u==="*"?n.minimumFractionDigits=d.length:g&&g[0]==="#"?n.maximumFractionDigits=g.length:k&&E?(n.minimumFractionDigits=k.length,n.maximumFractionDigits=k.length+E.length):(n.minimumFractionDigits=d.length,n.maximumFractionDigits=d.length),""});var i=a.options[0];i==="w"?n=Y(Y({},n),{trailingZeroDisplay:"stripIfInteger"}):i&&(n=Y(Y({},n),Aa(i)));continue}if(Lo.test(a.stem)){n=Y(Y({},n),Aa(a.stem));continue}var o=Po(a.stem);o&&(n=Y(Y({},n),o));var s=Ll(a.stem);s&&(n=Y(Y({},n),s))}return n}var gr={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Pl(e,n){for(var t="",r=0;r<e.length;r++){var a=e.charAt(r);if(a==="j"){for(var i=0;r+1<e.length&&e.charAt(r+1)===a;)i++,r++;var o=1+(i&1),s=i<2?1:3+(i>>1),l="a",d=Dl(n);for((d=="H"||d=="k")&&(s=0);s-- >0;)t+=l;for(;o-- >0;)t=d+t}else a==="J"?t+="H":t+=a}return t}function Dl(e){var n=e.hourCycle;if(n===void 0&&e.hourCycles&&e.hourCycles.length&&(n=e.hourCycles[0]),n)switch(n){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=e.language,r;t!=="root"&&(r=e.maximize().region);var a=gr[r||""]||gr[t||""]||gr["".concat(t,"-001")]||gr["001"];return a[0]}var Jr,Fl=new RegExp("^".concat(Io.source,"*")),Ml=new RegExp("".concat(Io.source,"*$"));function Z(e,n){return{start:e,end:n}}var jl=!!String.prototype.startsWith&&"_a".startsWith("a",1),wl=!!String.fromCodePoint,Vl=!!Object.fromEntries,Gl=!!String.prototype.codePointAt,Bl=!!String.prototype.trimStart,ql=!!String.prototype.trimEnd,Ul=!!Number.isSafeInteger,Hl=Ul?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Et=!0;try{var xl=Fo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Et=((Jr=xl.exec("a"))===null||Jr===void 0?void 0:Jr[0])==="a"}catch{Et=!1}var _a=jl?function(n,t,r){return n.startsWith(t,r)}:function(n,t,r){return n.slice(r,r+t.length)===t},mt=wl?String.fromCodePoint:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];for(var r="",a=n.length,i=0,o;a>i;){if(o=n[i++],o>1114111)throw RangeError(o+" is not a valid code point");r+=o<65536?String.fromCharCode(o):String.fromCharCode(((o-=65536)>>10)+55296,o%1024+56320)}return r},Sa=Vl?Object.fromEntries:function(n){for(var t={},r=0,a=n;r<a.length;r++){var i=a[r],o=i[0],s=i[1];t[o]=s}return t},Do=Gl?function(n,t){return n.codePointAt(t)}:function(n,t){var r=n.length;if(!(t<0||t>=r)){var a=n.charCodeAt(t),i;return a<55296||a>56319||t+1===r||(i=n.charCodeAt(t+1))<56320||i>57343?a:(a-55296<<10)+(i-56320)+65536}},Yl=Bl?function(n){return n.trimStart()}:function(n){return n.replace(Fl,"")},Cl=ql?function(n){return n.trimEnd()}:function(n){return n.replace(Ml,"")};function Fo(e,n){return new RegExp(e,n)}var ft;if(Et){var ha=Fo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ft=function(n,t){var r;ha.lastIndex=t;var a=ha.exec(n);return(r=a[1])!==null&&r!==void 0?r:""}}else ft=function(n,t){for(var r=[];;){var a=Do(n,t);if(a===void 0||Mo(a)||zl(a))break;r.push(a),t+=a>=65536?2:1}return mt.apply(void 0,r)};var $l=function(){function e(n,t){t===void 0&&(t={}),this.message=n,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(n,t,r){for(var a=[];!this.isEOF();){var i=this.char();if(i===123){var o=this.parseArgument(n,r);if(o.err)return o;a.push(o.val)}else{if(i===125&&n>0)break;if(i===35&&(t==="plural"||t==="selectordinal")){var s=this.clonePosition();this.bump(),a.push({type:te.pound,location:Z(s,this.clonePosition())})}else if(i===60&&!this.ignoreTag&&this.peek()===47){if(r)break;return this.error(X.UNMATCHED_CLOSING_TAG,Z(this.clonePosition(),this.clonePosition()))}else if(i===60&&!this.ignoreTag&&Tt(this.peek()||0)){var o=this.parseTag(n,t);if(o.err)return o;a.push(o.val)}else{var o=this.parseLiteral(n,t);if(o.err)return o;a.push(o.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(n,t){var r=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:te.literal,value:"<".concat(a,"/>"),location:Z(r,this.clonePosition())},err:null};if(this.bumpIf(">")){var i=this.parseMessage(n+1,t,!0);if(i.err)return i;var o=i.val,s=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Tt(this.char()))return this.error(X.INVALID_TAG,Z(s,this.clonePosition()));var l=this.clonePosition(),d=this.parseTagName();return a!==d?this.error(X.UNMATCHED_CLOSING_TAG,Z(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:te.tag,value:a,children:o,location:Z(r,this.clonePosition())},err:null}:this.error(X.INVALID_TAG,Z(s,this.clonePosition())))}else return this.error(X.UNCLOSED_TAG,Z(r,this.clonePosition()))}else return this.error(X.INVALID_TAG,Z(r,this.clonePosition()))},e.prototype.parseTagName=function(){var n=this.offset();for(this.bump();!this.isEOF()&&Wl(this.char());)this.bump();return this.message.slice(n,this.offset())},e.prototype.parseLiteral=function(n,t){for(var r=this.clonePosition(),a="";;){var i=this.tryParseQuote(t);if(i){a+=i;continue}var o=this.tryParseUnquoted(n,t);if(o){a+=o;continue}var s=this.tryParseLeftAngleBracket();if(s){a+=s;continue}break}var l=Z(r,this.clonePosition());return{val:{type:te.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Jl(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(n){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(n==="plural"||n==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var r=this.char();if(r===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(r);this.bump()}return mt.apply(void 0,t)},e.prototype.tryParseUnquoted=function(n,t){if(this.isEOF())return null;var r=this.char();return r===60||r===123||r===35&&(t==="plural"||t==="selectordinal")||r===125&&n>0?null:(this.bump(),mt(r))},e.prototype.parseArgument=function(n,t){var r=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE,Z(r,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(X.EMPTY_ARGUMENT,Z(r,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(X.MALFORMED_ARGUMENT,Z(r,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE,Z(r,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:te.argument,value:a,location:Z(r,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE,Z(r,this.clonePosition())):this.parseArgumentOptions(n,t,a,r);default:return this.error(X.MALFORMED_ARGUMENT,Z(r,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var n=this.clonePosition(),t=this.offset(),r=ft(this.message,t),a=t+r.length;this.bumpTo(a);var i=this.clonePosition(),o=Z(n,i);return{value:r,location:o}},e.prototype.parseArgumentOptions=function(n,t,r,a){var i,o=this.clonePosition(),s=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(s){case"":return this.error(X.EXPECT_ARGUMENT_TYPE,Z(o,l));case"number":case"date":case"time":{this.bumpSpace();var d=null;if(this.bumpIf(",")){this.bumpSpace();var u=this.clonePosition(),g=this.parseSimpleArgStyleIfPossible();if(g.err)return g;var k=Cl(g.val);if(k.length===0)return this.error(X.EXPECT_ARGUMENT_STYLE,Z(this.clonePosition(),this.clonePosition()));var E=Z(u,this.clonePosition());d={style:k,styleLocation:E}}var T=this.tryParseArgumentClose(a);if(T.err)return T;var v=Z(a,this.clonePosition());if(d&&_a(d==null?void 0:d.style,"::",0)){var y=Yl(d.style.slice(2));if(s==="number"){var g=this.parseNumberSkeletonFromString(y,d.styleLocation);return g.err?g:{val:{type:te.number,value:r,location:v,style:g.val},err:null}}else{if(y.length===0)return this.error(X.EXPECT_DATE_TIME_SKELETON,v);var A=y;this.locale&&(A=Pl(y,this.locale));var k={type:Nn.dateTime,pattern:A,location:d.styleLocation,parsedOptions:this.shouldParseSkeletons?Sl(A):{}},R=s==="date"?te.date:te.time;return{val:{type:R,value:r,location:v,style:k},err:null}}}return{val:{type:s==="number"?te.number:s==="date"?te.date:te.time,value:r,location:v,style:(i=d==null?void 0:d.style)!==null&&i!==void 0?i:null},err:null}}case"plural":case"selectordinal":case"select":{var _=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(X.EXPECT_SELECT_ARGUMENT_OPTIONS,Z(_,Y({},_)));this.bumpSpace();var O=this.parseIdentifierIfPossible(),p=0;if(s!=="select"&&O.value==="offset"){if(!this.bumpIf(":"))return this.error(X.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Z(this.clonePosition(),this.clonePosition()));this.bumpSpace();var g=this.tryParseDecimalInteger(X.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,X.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(g.err)return g;this.bumpSpace(),O=this.parseIdentifierIfPossible(),p=g.val}var D=this.tryParsePluralOrSelectOptions(n,s,t,O);if(D.err)return D;var T=this.tryParseArgumentClose(a);if(T.err)return T;var K=Z(a,this.clonePosition());return s==="select"?{val:{type:te.select,value:r,options:Sa(D.val),location:K},err:null}:{val:{type:te.plural,value:r,options:Sa(D.val),offset:p,pluralType:s==="plural"?"cardinal":"ordinal",location:K},err:null}}default:return this.error(X.INVALID_ARGUMENT_TYPE,Z(o,l))}},e.prototype.tryParseArgumentClose=function(n){return this.isEOF()||this.char()!==125?this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE,Z(n,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var n=0,t=this.clonePosition();!this.isEOF();){var r=this.char();switch(r){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(X.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Z(a,this.clonePosition()));this.bump();break}case 123:{n+=1,this.bump();break}case 125:{if(n>0)n-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(n,t){var r=[];try{r=Nl(n)}catch{return this.error(X.INVALID_NUMBER_SKELETON,t)}return{val:{type:Nn.number,tokens:r,location:t,parsedOptions:this.shouldParseSkeletons?Kl(r):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(n,t,r,a){for(var i,o=!1,s=[],l=new Set,d=a.value,u=a.location;;){if(d.length===0){var g=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var k=this.tryParseDecimalInteger(X.EXPECT_PLURAL_ARGUMENT_SELECTOR,X.INVALID_PLURAL_ARGUMENT_SELECTOR);if(k.err)return k;u=Z(g,this.clonePosition()),d=this.message.slice(g.offset,this.offset())}else break}if(l.has(d))return this.error(t==="select"?X.DUPLICATE_SELECT_ARGUMENT_SELECTOR:X.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,u);d==="other"&&(o=!0),this.bumpSpace();var E=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?X.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:X.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Z(this.clonePosition(),this.clonePosition()));var T=this.parseMessage(n+1,t,r);if(T.err)return T;var v=this.tryParseArgumentClose(E);if(v.err)return v;s.push([d,{value:T.val,location:Z(E,this.clonePosition())}]),l.add(d),this.bumpSpace(),i=this.parseIdentifierIfPossible(),d=i.value,u=i.location}return s.length===0?this.error(t==="select"?X.EXPECT_SELECT_ARGUMENT_SELECTOR:X.EXPECT_PLURAL_ARGUMENT_SELECTOR,Z(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!o?this.error(X.MISSING_OTHER_CLAUSE,Z(this.clonePosition(),this.clonePosition())):{val:s,err:null}},e.prototype.tryParseDecimalInteger=function(n,t){var r=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);for(var i=!1,o=0;!this.isEOF();){var s=this.char();if(s>=48&&s<=57)i=!0,o=o*10+(s-48),this.bump();else break}var l=Z(a,this.clonePosition());return i?(o*=r,Hl(o)?{val:o,err:null}:this.error(t,l)):this.error(n,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var n=this.position.offset;if(n>=this.message.length)throw Error("out of bound");var t=Do(this.message,n);if(t===void 0)throw Error("Offset ".concat(n," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(n,t){return{val:null,err:{kind:n,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var n=this.char();n===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=n<65536?1:2)}},e.prototype.bumpIf=function(n){if(_a(this.message,n,this.offset())){for(var t=0;t<n.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(n){var t=this.offset(),r=this.message.indexOf(n,t);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(n){if(this.offset()>n)throw Error("targetOffset ".concat(n," must be greater than or equal to the current offset ").concat(this.offset()));for(n=Math.min(n,this.message.length);;){var t=this.offset();if(t===n)break;if(t>n)throw Error("targetOffset ".concat(n," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Mo(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var n=this.char(),t=this.offset(),r=this.message.charCodeAt(t+(n>=65536?2:1));return r??null},e}();function Tt(e){return e>=97&&e<=122||e>=65&&e<=90}function Jl(e){return Tt(e)||e===47}function Wl(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Mo(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function zl(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Rt(e){e.forEach(function(n){if(delete n.location,So(n)||ho(n))for(var t in n.options)delete n.options[t].location,Rt(n.options[t].value);else Ao(n)&&Oo(n.style)||(bo(n)||_o(n))&&vt(n.style)?delete n.style.location:No(n)&&Rt(n.children)})}function Xl(e,n){n===void 0&&(n={}),n=Y({shouldParseSkeletons:!0,requiresOtherClause:!0},n);var t=new $l(e,n).parse();if(t.err){var r=SyntaxError(X[t.err.kind]);throw r.location=t.err.location,r.originalMessage=t.err.message,r}return n!=null&&n.captureLocation||Rt(t.val),t.val}var xe;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(xe||(xe={}));var kn=function(e){we(n,e);function n(t,r,a){var i=e.call(this,t)||this;return i.code=r,i.originalMessage=a,i}return n.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},n}(Error),Na=function(e){we(n,e);function n(t,r,a,i){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(r,'". Options are "').concat(Object.keys(a).join('", "'),'"'),xe.INVALID_VALUE,i)||this}return n}(kn),Zl=function(e){we(n,e);function n(t,r,a){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(r),xe.INVALID_VALUE,a)||this}return n}(kn),Ql=function(e){we(n,e);function n(t,r){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(r,'"'),xe.MISSING_VALUE,r)||this}return n}(kn),Te;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(Te||(Te={}));function ed(e){return e.length<2?e:e.reduce(function(n,t){var r=n[n.length-1];return!r||r.type!==Te.literal||t.type!==Te.literal?n.push(t):r.value+=t.value,n},[])}function jo(e){return typeof e=="function"}function Tr(e,n,t,r,a,i,o){if(e.length===1&&ya(e[0]))return[{type:Te.literal,value:e[0].value}];for(var s=[],l=0,d=e;l<d.length;l++){var u=d[l];if(ya(u)){s.push({type:Te.literal,value:u.value});continue}if(bl(u)){typeof i=="number"&&s.push({type:Te.literal,value:t.getNumberFormat(n).format(i)});continue}var g=u.value;if(!(a&&g in a))throw new Ql(g,o);var k=a[g];if(Al(u)){(!k||typeof k=="string"||typeof k=="number")&&(k=typeof k=="string"||typeof k=="number"?String(k):""),s.push({type:typeof k=="string"?Te.literal:Te.object,value:k});continue}if(bo(u)){var E=typeof u.style=="string"?r.date[u.style]:vt(u.style)?u.style.parsedOptions:void 0;s.push({type:Te.literal,value:t.getDateTimeFormat(n,E).format(k)});continue}if(_o(u)){var E=typeof u.style=="string"?r.time[u.style]:vt(u.style)?u.style.parsedOptions:r.time.medium;s.push({type:Te.literal,value:t.getDateTimeFormat(n,E).format(k)});continue}if(Ao(u)){var E=typeof u.style=="string"?r.number[u.style]:Oo(u.style)?u.style.parsedOptions:void 0;E&&E.scale&&(k=k*(E.scale||1)),s.push({type:Te.literal,value:t.getNumberFormat(n,E).format(k)});continue}if(No(u)){var T=u.children,v=u.value,y=a[v];if(!jo(y))throw new Zl(v,"function",o);var A=Tr(T,n,t,r,a,i),R=y(A.map(function(p){return p.value}));Array.isArray(R)||(R=[R]),s.push.apply(s,R.map(function(p){return{type:typeof p=="string"?Te.literal:Te.object,value:p}}))}if(So(u)){var _=u.options[k]||u.options.other;if(!_)throw new Na(u.value,k,Object.keys(u.options),o);s.push.apply(s,Tr(_.value,n,t,r,a));continue}if(ho(u)){var _=u.options["=".concat(k)];if(!_){if(!Intl.PluralRules)throw new kn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,xe.MISSING_INTL_API,o);var O=t.getPluralRules(n,{type:u.pluralType}).select(k-(u.offset||0));_=u.options[O]||u.options.other}if(!_)throw new Na(u.value,k,Object.keys(u.options),o);s.push.apply(s,Tr(_.value,n,t,r,a,k-(u.offset||0)));continue}}return ed(s)}function nd(e,n){return n?Y(Y(Y({},e||{}),n||{}),Object.keys(e).reduce(function(t,r){return t[r]=Y(Y({},e[r]),n[r]||{}),t},{})):e}function rd(e,n){return n?Object.keys(e).reduce(function(t,r){return t[r]=nd(e[r],n[r]),t},Y({},e)):e}function Wr(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,t){e[n]=t}}}}}function td(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Ve(function(){for(var n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new((n=Intl.NumberFormat).bind.apply(n,Be([void 0],t,!1)))},{cache:Wr(e.number),strategy:Ge.variadic}),getDateTimeFormat:Ve(function(){for(var n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new((n=Intl.DateTimeFormat).bind.apply(n,Be([void 0],t,!1)))},{cache:Wr(e.dateTime),strategy:Ge.variadic}),getPluralRules:Ve(function(){for(var n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new((n=Intl.PluralRules).bind.apply(n,Be([void 0],t,!1)))},{cache:Wr(e.pluralRules),strategy:Ge.variadic})}}var wo=function(){function e(n,t,r,a){t===void 0&&(t=e.defaultLocale);var i=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var d=i.formatToParts(l);if(d.length===1)return d[0].value;var u=d.reduce(function(g,k){return!g.length||k.type!==Te.literal||typeof g[g.length-1]!="string"?g.push(k.value):g[g.length-1]+=k.value,g},[]);return u.length<=1?u[0]||"":u},this.formatToParts=function(l){return Tr(i.ast,i.locales,i.formatters,i.formats,l,void 0,i.message)},this.resolvedOptions=function(){var l;return{locale:((l=i.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(i.locales)[0]}},this.getAst=function(){return i.ast},this.locales=t,this.resolvedLocale=e.resolveLocale(t),typeof n=="string"){if(this.message=n,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var o=a||{};o.formatters;var s=hn(o,["formatters"]);this.ast=e.__parse(n,Y(Y({},s),{locale:this.resolvedLocale}))}else this.ast=n;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=rd(e.formats,r),this.formatters=a&&a.formatters||td(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(n){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(n);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof n=="string"?n:n[0])}},e.__parse=Xl,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Rn;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Rn||(Rn={}));var Qn=function(e){we(n,e);function n(t,r,a){var i=this,o=a?a instanceof Error?a:new Error(String(a)):void 0;return i=e.call(this,"[@formatjs/intl Error ".concat(t,"] ").concat(r,`
`).concat(o?`
`.concat(o.message,`
`).concat(o.stack):""))||this,i.code=t,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(i,n),i}return n}(Error),ad=function(e){we(n,e);function n(t,r){return e.call(this,Rn.UNSUPPORTED_FORMATTER,t,r)||this}return n}(Qn),id=function(e){we(n,e);function n(t,r){return e.call(this,Rn.INVALID_CONFIG,t,r)||this}return n}(Qn),Oa=function(e){we(n,e);function n(t,r){return e.call(this,Rn.MISSING_DATA,t,r)||this}return n}(Qn),Le=function(e){we(n,e);function n(t,r,a){var i=e.call(this,Rn.FORMAT_ERROR,"".concat(t,`
Locale: `).concat(r,`
`),a)||this;return i.locale=r,i}return n}(Qn),zr=function(e){we(n,e);function n(t,r,a,i){var o=e.call(this,"".concat(t,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),r,i)||this;return o.descriptor=a,o.locale=r,o}return n}(Le),od=function(e){we(n,e);function n(t,r){var a=e.call(this,Rn.MISSING_TRANSLATION,'Missing message: "'.concat(t.id,'" for locale "').concat(r,'", using ').concat(t.defaultMessage?"default message (".concat(typeof t.defaultMessage=="string"?t.defaultMessage:t.defaultMessage.map(function(i){var o;return(o=i.value)!==null&&o!==void 0?o:JSON.stringify(i)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=t,a}return n}(Qn);function sd(e,n,t){if(t===void 0&&(t=Error),!e)throw new t(n)}function Pn(e,n,t){return t===void 0&&(t={}),n.reduce(function(r,a){return a in e?r[a]=e[a]:a in t&&(r[a]=t[a]),r},{})}var ld=function(e){},dd=function(e){},Vo={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:ld,onWarn:dd};function Go(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function mn(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,t){e[n]=t}}}}}function ud(e){e===void 0&&(e=Go());var n=Intl.RelativeTimeFormat,t=Intl.ListFormat,r=Intl.DisplayNames,a=Ve(function(){for(var s,l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return new((s=Intl.DateTimeFormat).bind.apply(s,Be([void 0],l,!1)))},{cache:mn(e.dateTime),strategy:Ge.variadic}),i=Ve(function(){for(var s,l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return new((s=Intl.NumberFormat).bind.apply(s,Be([void 0],l,!1)))},{cache:mn(e.number),strategy:Ge.variadic}),o=Ve(function(){for(var s,l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return new((s=Intl.PluralRules).bind.apply(s,Be([void 0],l,!1)))},{cache:mn(e.pluralRules),strategy:Ge.variadic});return{getDateTimeFormat:a,getNumberFormat:i,getMessageFormat:Ve(function(s,l,d,u){return new wo(s,l,d,Y({formatters:{getNumberFormat:i,getDateTimeFormat:a,getPluralRules:o}},u||{}))},{cache:mn(e.message),strategy:Ge.variadic}),getRelativeTimeFormat:Ve(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return new(n.bind.apply(n,Be([void 0],s,!1)))},{cache:mn(e.relativeTime),strategy:Ge.variadic}),getPluralRules:o,getListFormat:Ve(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return new(t.bind.apply(t,Be([void 0],s,!1)))},{cache:mn(e.list),strategy:Ge.variadic}),getDisplayNames:Ve(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return new(r.bind.apply(r,Be([void 0],s,!1)))},{cache:mn(e.displayNames),strategy:Ge.variadic})}}function Vt(e,n,t,r){var a=e&&e[n],i;if(a&&(i=a[t]),i)return i;r(new ad("No ".concat(n," format named: ").concat(t)))}function kr(e,n){return Object.keys(e).reduce(function(t,r){return t[r]=Y({timeZone:n},e[r]),t},{})}function Ia(e,n){var t=Object.keys(Y(Y({},e),n));return t.reduce(function(r,a){return r[a]=Y(Y({},e[a]||{}),n[a]||{}),r},{})}function La(e,n){if(!n)return e;var t=wo.formats;return Y(Y(Y({},t),e),{date:Ia(kr(t.date,n),kr(e.date||{},n)),time:Ia(kr(t.time,n),kr(e.time||{},n))})}var pt=function(e,n,t,r,a){var i=e.locale,o=e.formats,s=e.messages,l=e.defaultLocale,d=e.defaultFormats,u=e.fallbackOnEmptyString,g=e.onError,k=e.timeZone,E=e.defaultRichTextElements;t===void 0&&(t={id:""});var T=t.id,v=t.defaultMessage;sd(!!T,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var y=String(T),A=s&&Object.prototype.hasOwnProperty.call(s,y)&&s[y];if(Array.isArray(A)&&A.length===1&&A[0].type===te.literal)return A[0].value;if(!r&&A&&typeof A=="string"&&!E)return A.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=Y(Y({},E),r||{}),o=La(o,k),d=La(d,k),!A){if(u===!1&&A==="")return A;if((!v||i&&i.toLowerCase()!==l.toLowerCase())&&g(new od(t,i)),v)try{var R=n.getMessageFormat(v,l,d,a);return R.format(r)}catch(_){return g(new zr('Error formatting default message for: "'.concat(y,'", rendering default message verbatim'),i,t,_)),typeof v=="string"?v:y}return y}try{var R=n.getMessageFormat(A,i,o,Y({formatters:n},a||{}));return R.format(r)}catch(_){g(new zr('Error formatting message: "'.concat(y,'", using ').concat(v?"default message":"id"," as fallback."),i,t,_))}if(v)try{var R=n.getMessageFormat(v,l,d,a);return R.format(r)}catch(_){g(new zr('Error formatting the default message for: "'.concat(y,'", rendering message verbatim'),i,t,_))}return typeof A=="string"?A:typeof v=="string"?v:y},gd=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function er(e,n,t,r){var a=e.locale,i=e.formats,o=e.onError,s=e.timeZone;r===void 0&&(r={});var l=r.format,d=Y(Y({},s&&{timeZone:s}),l&&Vt(i,n,l,o)),u=Pn(r,gd,d);return n==="time"&&!u.hour&&!u.minute&&!u.second&&!u.timeStyle&&!u.dateStyle&&(u=Y(Y({},u),{hour:"numeric",minute:"numeric"})),t(a,u)}function kd(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],i=t[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return er(e,"date",n,o).format(s)}catch(l){e.onError(new Le("Error formatting date.",e.locale,l))}return String(s)}function vd(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],i=t[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return er(e,"time",n,o).format(s)}catch(l){e.onError(new Le("Error formatting time.",e.locale,l))}return String(s)}function Ed(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],i=t[1],o=t[2],s=o===void 0?{}:o,l=typeof a=="string"?new Date(a||0):a,d=typeof i=="string"?new Date(i||0):i;try{return er(e,"dateTimeRange",n,s).formatRange(l,d)}catch(u){e.onError(new Le("Error formatting date time range.",e.locale,u))}return String(l)}function md(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],i=t[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return er(e,"date",n,o).formatToParts(s)}catch(l){e.onError(new Le("Error formatting date.",e.locale,l))}return[]}function fd(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],i=t[1],o=i===void 0?{}:i,s=typeof a=="string"?new Date(a||0):a;try{return er(e,"time",n,o).formatToParts(s)}catch(l){e.onError(new Le("Error formatting time.",e.locale,l))}return[]}var Td=["style","type","fallback","languageDisplay"];function Rd(e,n,t,r){var a=e.locale,i=e.onError,o=Intl.DisplayNames;o||i(new kn(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,xe.MISSING_INTL_API));var s=Pn(r,Td);try{return n(a,s).of(t)}catch(l){i(new Le("Error formatting display name.",a,l))}}var pd=["type","style"],Ka=Date.now();function yd(e){return"".concat(Ka,"_").concat(e,"_").concat(Ka)}function cd(e,n,t,r){r===void 0&&(r={});var a=Bo(e,n,t,r).reduce(function(i,o){var s=o.value;return typeof s!="string"?i.push(s):typeof i[i.length-1]=="string"?i[i.length-1]+=s:i.push(s),i},[]);return a.length===1?a[0]:a.length===0?"":a}function Bo(e,n,t,r){var a=e.locale,i=e.onError;r===void 0&&(r={});var o=Intl.ListFormat;o||i(new kn(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,xe.MISSING_INTL_API));var s=Pn(r,pd);try{var l={},d=t.map(function(u,g){if(typeof u=="object"){var k=yd(g);return l[k]=u,k}return String(u)});return n(a,s).formatToParts(d).map(function(u){return u.type==="literal"?u:Y(Y({},u),{value:l[u.value]||u.value})})}catch(u){i(new Le("Error formatting list.",a,u))}return t}var Ad=["type"];function bd(e,n,t,r){var a=e.locale,i=e.onError;r===void 0&&(r={}),Intl.PluralRules||i(new kn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,xe.MISSING_INTL_API));var o=Pn(r,Ad);try{return n(a,o).select(t)}catch(s){i(new Le("Error formatting plural.",a,s))}return"other"}var _d=["numeric","style"];function Sd(e,n,t){var r=e.locale,a=e.formats,i=e.onError;t===void 0&&(t={});var o=t.format,s=!!o&&Vt(a,"relative",o,i)||{},l=Pn(t,_d,s);return n(r,l)}function hd(e,n,t,r,a){a===void 0&&(a={}),r||(r="second");var i=Intl.RelativeTimeFormat;i||e.onError(new kn(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,xe.MISSING_INTL_API));try{return Sd(e,n,a).format(t,r)}catch(o){e.onError(new Le("Error formatting relative time.",e.locale,o))}return String(t)}var Nd=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function qo(e,n,t){var r=e.locale,a=e.formats,i=e.onError;t===void 0&&(t={});var o=t.format,s=o&&Vt(a,"number",o,i)||{},l=Pn(t,Nd,s);return n(r,l)}function Od(e,n,t,r){r===void 0&&(r={});try{return qo(e,n,r).format(t)}catch(a){e.onError(new Le("Error formatting number.",e.locale,a))}return String(t)}function Id(e,n,t,r){r===void 0&&(r={});try{return qo(e,n,r).formatToParts(t)}catch(a){e.onError(new Le("Error formatting number.",e.locale,a))}return[]}function Ld(e){var n=e?e[Object.keys(e)[0]]:void 0;return typeof n=="string"}function Kd(e){e.onWarn&&e.defaultRichTextElements&&Ld(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function Pd(e,n){var t=ud(n),r=Y(Y({},Vo),e),a=r.locale,i=r.defaultLocale,o=r.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&o?o(new Oa('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&o&&o(new Oa('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(o&&o(new id('"locale" was not configured, using "'.concat(i,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),Kd(r),Y(Y({},r),{formatters:t,formatNumber:Od.bind(null,r,t.getNumberFormat),formatNumberToParts:Id.bind(null,r,t.getNumberFormat),formatRelativeTime:hd.bind(null,r,t.getRelativeTimeFormat),formatDate:kd.bind(null,r,t.getDateTimeFormat),formatDateToParts:md.bind(null,r,t.getDateTimeFormat),formatTime:vd.bind(null,r,t.getDateTimeFormat),formatDateTimeRange:Ed.bind(null,r,t.getDateTimeFormat),formatTimeToParts:fd.bind(null,r,t.getDateTimeFormat),formatPlural:bd.bind(null,r,t.getPluralRules),formatMessage:pt.bind(null,r,t),$t:pt.bind(null,r,t),formatList:cd.bind(null,r,t.getListFormat),formatListToParts:Bo.bind(null,r,t.getListFormat),formatDisplayName:Rd.bind(null,r,t.getDisplayNames)})}function Dd(e,n,t){if(t===void 0&&(t=Error),!e)throw new t(n)}function Fd(e){Dd(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Md=Y(Y({},Vo),{textComponent:f.Fragment});function jd(e){return function(n){return e(f.Children.toArray(n))}}function Pa(e,n){if(e===n)return!0;if(!e||!n)return!1;var t=Object.keys(e),r=Object.keys(n),a=t.length;if(r.length!==a)return!1;for(var i=0;i<a;i++){var o=t[i];if(e[o]!==n[o]||!Object.prototype.hasOwnProperty.call(n,o))return!1}return!0}var Xr={exports:{}},ee={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Da;function wd(){if(Da)return ee;Da=1;var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,g=e?Symbol.for("react.suspense"):60113,k=e?Symbol.for("react.suspense_list"):60120,E=e?Symbol.for("react.memo"):60115,T=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,A=e?Symbol.for("react.responder"):60118,R=e?Symbol.for("react.scope"):60119;function _(p){if(typeof p=="object"&&p!==null){var D=p.$$typeof;switch(D){case n:switch(p=p.type,p){case l:case d:case r:case i:case a:case g:return p;default:switch(p=p&&p.$$typeof,p){case s:case u:case T:case E:case o:return p;default:return D}}case t:return D}}}function O(p){return _(p)===d}return ee.AsyncMode=l,ee.ConcurrentMode=d,ee.ContextConsumer=s,ee.ContextProvider=o,ee.Element=n,ee.ForwardRef=u,ee.Fragment=r,ee.Lazy=T,ee.Memo=E,ee.Portal=t,ee.Profiler=i,ee.StrictMode=a,ee.Suspense=g,ee.isAsyncMode=function(p){return O(p)||_(p)===l},ee.isConcurrentMode=O,ee.isContextConsumer=function(p){return _(p)===s},ee.isContextProvider=function(p){return _(p)===o},ee.isElement=function(p){return typeof p=="object"&&p!==null&&p.$$typeof===n},ee.isForwardRef=function(p){return _(p)===u},ee.isFragment=function(p){return _(p)===r},ee.isLazy=function(p){return _(p)===T},ee.isMemo=function(p){return _(p)===E},ee.isPortal=function(p){return _(p)===t},ee.isProfiler=function(p){return _(p)===i},ee.isStrictMode=function(p){return _(p)===a},ee.isSuspense=function(p){return _(p)===g},ee.isValidElementType=function(p){return typeof p=="string"||typeof p=="function"||p===r||p===d||p===i||p===a||p===g||p===k||typeof p=="object"&&p!==null&&(p.$$typeof===T||p.$$typeof===E||p.$$typeof===o||p.$$typeof===s||p.$$typeof===u||p.$$typeof===y||p.$$typeof===A||p.$$typeof===R||p.$$typeof===v)},ee.typeOf=_,ee}var Fa;function Vd(){return Fa||(Fa=1,Xr.exports=wd()),Xr.exports}var Zr,Ma;function Gd(){if(Ma)return Zr;Ma=1;var e=Vd(),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};i[e.ForwardRef]=r,i[e.Memo]=a;function o(T){return e.isMemo(T)?a:i[T.$$typeof]||n}var s=Object.defineProperty,l=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,k=Object.prototype;function E(T,v,y){if(typeof v!="string"){if(k){var A=g(v);A&&A!==k&&E(T,A,y)}var R=l(v);d&&(R=R.concat(d(v)));for(var _=o(T),O=o(v),p=0;p<R.length;++p){var D=R[p];if(!t[D]&&!(y&&y[D])&&!(O&&O[D])&&!(_&&_[D])){var K=u(v,D);try{s(T,D,K)}catch{}}}}return T}return Zr=E,Zr}Gd();var Gt=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=f.createContext(null)):f.createContext(null);Gt.Consumer;var Bd=Gt.Provider,qd=Bd,Ud=Gt;function nr(){var e=f.useContext(Ud);return Fd(e),e}var yt;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(yt||(yt={}));var ct;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(ct||(ct={}));function Uo(e){var n=function(t){var r=nr(),a=t.value,i=t.children,o=hn(t,["value","children"]),s=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?r.formatDateToParts(s,o):r.formatTimeToParts(s,o);return i(l)};return n.displayName=ct[e],n}function rr(e){var n=function(t){var r=nr(),a=t.value,i=t.children,o=hn(t,["value","children"]),s=r[e](a,o);if(typeof i=="function")return i(s);var l=r.textComponent||f.Fragment;return f.createElement(l,null,s)};return n.displayName=yt[e],n}function Ho(e){return e&&Object.keys(e).reduce(function(n,t){var r=e[t];return n[t]=jo(r)?jd(r):r,n},{})}var ja=function(e,n,t,r){for(var a=[],i=4;i<arguments.length;i++)a[i-4]=arguments[i];var o=Ho(r),s=pt.apply(void 0,Be([e,n,t,o],a,!1));return Array.isArray(s)?f.Children.toArray(s):s},Hd=function(e,n){var t=e.defaultRichTextElements,r=hn(e,["defaultRichTextElements"]),a=Ho(t),i=Pd(Y(Y(Y({},Md),r),{defaultRichTextElements:a}),n),o={locale:i.locale,timeZone:i.timeZone,fallbackOnEmptyString:i.fallbackOnEmptyString,formats:i.formats,defaultLocale:i.defaultLocale,defaultFormats:i.defaultFormats,messages:i.messages,onError:i.onError,defaultRichTextElements:a};return Y(Y({},i),{formatMessage:ja.bind(null,o,i.formatters),$t:ja.bind(null,o,i.formatters)})};function xd(e,n){var t=e.values,r=hn(e,["values"]),a=n.values,i=hn(n,["values"]);return Pa(a,t)&&Pa(r,i)}function xo(e){var n=nr(),t=n.formatMessage,r=n.textComponent,a=r===void 0?f.Fragment:r,i=e.id,o=e.description,s=e.defaultMessage,l=e.values,d=e.children,u=e.tagName,g=u===void 0?a:u,k=e.ignoreTag,E={id:i,description:o,defaultMessage:s},T=t(E,l,{ignoreTag:k});return typeof d=="function"?d(Array.isArray(T)?T:[T]):g?f.createElement(g,null,f.Children.toArray(T)):f.createElement(f.Fragment,null,T)}xo.displayName="FormattedMessage";var ae=f.memo(xo,xd);ae.displayName="MemoizedFormattedMessage";rr("formatDate");rr("formatTime");rr("formatNumber");rr("formatList");rr("formatDisplayName");Uo("formatDate");Uo("formatTime");const Yo=f.createContext(null),Bt=({children:e,behandling:n})=>{const[t,r]=f.useState();f.useEffect(()=>{t&&r(void 0)},[n.uuid,n.versjon]);const a=f.useMemo(()=>({formData:t,setFormData:r}),[t,r]);return P.jsx(Yo,{value:a,children:e})},Yd=()=>{const e=f.useContext(Yo);if(!e)throw new Error("FormDataContext.Provider er ikke satt opp");return e};Bt.__docgenInfo={description:"",methods:[],displayName:"FormDataProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
    eta?: string;
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
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
    eta?: string;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""}}};Bt.__docgenInfo={description:"",methods:[],displayName:"FormDataProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
    eta?: string;
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
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
    eta?: string;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""}}};const Co=f.createContext(null),qt=e=>{const{children:n,...t}=e,r=f.useMemo(()=>t,[t]);return P.jsx(Co,{value:r,children:n})},Cd=()=>{const e=f.useContext(Co);if(!e)throw new Error("PanelContext.Provider er ikke satt opp");return e};qt.__docgenInfo={description:"",methods:[],displayName:"PanelDataProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
    eta?: string;
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
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
    eta?: string;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  harVergeIÅpenBehandling: boolean;
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
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harIkkeRegistrertAdresse",value:{name:"boolean",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
  harVergeIÅpenBehandling: boolean;
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
}>`},description:""},aksjonspunkterForPanel:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""},harÅpneAksjonspunkter:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: AP_TYPE) => Promise<void>",signature:{arguments:[{type:{name:"AP_TYPE"},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""}}};qt.__docgenInfo={description:"",methods:[],displayName:"PanelDataProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
    eta?: string;
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
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
    eta?: string;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  harVergeIÅpenBehandling: boolean;
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
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harIkkeRegistrertAdresse",value:{name:"boolean",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
  harVergeIÅpenBehandling: boolean;
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
}>`},description:""},aksjonspunkterForPanel:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""},harÅpneAksjonspunkter:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: AP_TYPE) => Promise<void>",signature:{arguments:[{type:{name:"AP_TYPE"},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""}}};f.createContext(null);const Ut=e=>P.jsx(Bt,{behandling:{uuid:"1",versjon:1},children:P.jsx(e,{})});Ut.__docgenInfo={description:"",methods:[],displayName:"withFormData"};Ut.__docgenInfo={description:"",methods:[],displayName:"withFormData"};const $d=[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],Jd=[{kode:"REGISTRER_OM_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrering av opplysninger om verge/fullmektig"},{kode:"MANGELFULL_SØKNAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Mangelfull søknad"},{kode:"FASTSATT_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak - splitting av periode"},{kode:"BEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet"},{kode:"REGISTRER_PAPIRSØK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrer papirsøknad"},{kode:"BEH_STARTET_PÅ_NYTT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet på nytt"},{kode:"MIGRERT_FRA_INFOTRYGD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder flytting av sak fra Infotrygd"},{kode:"FORSLAG_VEDTAK_UTEN_TOTRINN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått"},{kode:"BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjenopptatt"},{kode:"AVBRUTT_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling er henlagt"},{kode:"ANKE_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ankebehandling"},{kode:"BREV_BESTILT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev bestilt"},{kode:"ENDRET_DEKNINGSGRAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Dekningsgrad er endret"},{kode:"OPPGAVE_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Oppgave før vedtak"},{kode:"IVERKSETTELSE_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen venter på iverksettelse"},{kode:"FASTSATT_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak"},{kode:"OVST_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak"},{kode:"INNSYN_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Innsynsbehandling opprettet"},{kode:"TILBAKEKR_VIDEREBEHANDLING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Metode for å håndtere tilbakekreving av feilutbetailng er valgt."},{kode:"SAK_GODKJENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak godkjent"},{kode:"BEH_KØET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er satt på vent"},{kode:"NYE_REGOPPLYSNINGER",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Nye registeropplysninger"},{kode:"BEH_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling på vent"},{kode:"TERMINBEKREFTELSE_UGYLDIG",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Terminbekreftelsens utstedt dato er før 22. svangerskapsuke. Behandlingen fortsatt uten ny terminbekreftelse"},{kode:"FAKTA_ENDRET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Fakta endret"},{kode:"MIGRERT_FRA_INFOTRYGD_FJERNET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder ikke lenger flytting av sak fra Infotrygd"},{kode:"BYTT_ENHET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Bytt enhet"},{kode:"REVURD_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Revurdering opprettet"},{kode:"KLAGE_BEH_NFP",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling NFP"},{kode:"KØET_BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Køet behandling er gjenopptatt"},{kode:"OVST_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak - splitting av periode"},{kode:"ANKEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Anke mottatt"},{kode:"UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet soknadsperiode"},{kode:"KLAGE_BEH_NK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling KA"},{kode:"AVKLART_AKTIVITETSKRAV",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Avklart aktivitetskrav"},{kode:"NY_INFO_FRA_TPS",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ny info fra TPS"},{kode:"KLAGEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klage mottatt"},{kode:"VEDTAK_FATTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak fattet"},{kode:"BEH_AVBRUTT_VUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vurdering før vedtak"},{kode:"UENDRET_UTFALL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Uendret utfall"},{kode:"VRS_REV_IKKE_SNDT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Varsel om revurdering ikke sendt"},{kode:"SPOLT_TILBAKE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er flyttet"},{kode:"OPPTJENING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet opptjeningsperiode"},{kode:"SAK_RETUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak retur"},{kode:"FJERNET_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Opplysninger om verge/fullmektig fjernet"},{kode:"BEH_MAN_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Gjenoppta behandling"},{kode:"BEH_OPPDATERT_NYE_OPPL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen oppdatert med nye opplysninger"},{kode:"VEDLEGG_MOTTATT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedlegg mottatt"},{kode:"OVERSTYRT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Overstyrt"},{kode:"BREV_SENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev sendt"},{kode:"FORSLAG_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått og sendt til beslutter"}],Wd=[{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],zd=[{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"},{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"}],Xd=[{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"}],Zd=[{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"}],Qd=[{kode:"EGEN_NÆRING",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Egen næring"},{kode:"BRUKERS_ANDEL",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Brukers andel"},{kode:"FRILANS",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Frilans"}],eu=[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],nu=[{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"},{kode:"ENDRING_I_BEREGNING_OG_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning og uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"}],ru=[{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilans"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (fisker)"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (dagmamma)"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"},{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"}],tu=[{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"}],au=[{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Vedtaksinstans"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aleneomsorg og annenpart rett"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstans"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"}],iu=[{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"},{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"}],ou=[{kode:"HJEMSENDE_UTEN_Å_OPPHEVE",kodeverk:"KLAGEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"OPPHEVE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket oppheves"},{kode:"MEDHOLD_I_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Medhold"},{kode:"STADFESTE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"AVVIS_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Klagen avvises"}],su=[{kode:"BEH_STARTET_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Behandling startet på nytt"},{kode:"BERORT_BEH_OPPHOR",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens vedtak er opphørt"},{kode:"SAKSBEH_START_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Saksbehandling starter på nytt"},{kode:"BERORT_BEH_ENDRING_DEKNINGSGRAD",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens behandling har endret antall disponible stønadsdager"}],lu=[{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"},{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"ANNET",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Andre typer som f.eks utsettelse"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"}],du=[{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt søknad mangler"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"}],uu=[{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"}],gu=[{kode:"TILBAKEKR_IGNORER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling, avvent samordning"},{kode:"TILBAKEKR_INNTREKK",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling hvor inntrekk dekker hele beløpet"},{kode:"TILBAKEKR_OPPRETT",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling med tilbakekreving"},{kode:"TILBAKEKR_OPPDATER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Endringer vil oppdatere eksisterende feilutbetalte perioder og beløp."}],ku=[{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],vu=[{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"}],Eu=[{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"}],mu=[{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"}],fu=[{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"},{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"}],Tu=[{kode:"UTTAK_PERIODE_FOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fradato uttaksperiode"},{kode:"TPS_ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"UTTAK_PERIODE_TOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Tildato uttaksperiode"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"FODSELSDATO",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fødselsdato"}],Ru=[{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"}],pu=[{kode:"MANGLENDE_OPPLYSNINGER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen, men har manglende opplysninger"},{kode:"SØKER_ER_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er i permisjon"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekten er ikke med i beregningsgrunnlaget"},{kode:"IKKE_BRUK",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Ikke bruk"},{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK_MED_OVERSTYRTE_PERIODER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"BENYTT_A_INNTEKT_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekt fra A-inntekt benyttes i beregningsgrunnlaget"},{kode:"SØKER_ER_IKKE_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er ikke i permisjon"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er lagt til av saksbehandler beregningsgrunnlaget"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er slått sammen med annet"}],yu=[{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"}],cu=JSON.parse('[{"kode":"CAF","kodeverk":"LANDKODER","navn":"SENTRALAFRIKA. REP."},{"kode":"ARG","kodeverk":"LANDKODER","navn":"ARGENTINA"},{"kode":"IOT","kodeverk":"LANDKODER","navn":"BRITISK-INDISKE HAV"},{"kode":"CCK","kodeverk":"LANDKODER","navn":"KOKOSØYENE"},{"kode":"MEX","kodeverk":"LANDKODER","navn":"MEXICO"},{"kode":"CHN","kodeverk":"LANDKODER","navn":"REPUBLIKKEN KINA"},{"kode":"RUS","kodeverk":"LANDKODER","navn":"RUSSLAND"},{"kode":"BHS","kodeverk":"LANDKODER","navn":"BAHAMAS"},{"kode":"SYC","kodeverk":"LANDKODER","navn":"SEYCHELLENE"},{"kode":"CYP","kodeverk":"LANDKODER","navn":"KYPROS"},{"kode":"AUT","kodeverk":"LANDKODER","navn":"ØSTERRIKE"},{"kode":"QAT","kodeverk":"LANDKODER","navn":"QATAR"},{"kode":"VNM","kodeverk":"LANDKODER","navn":"VIETNAM"},{"kode":"HMD","kodeverk":"LANDKODER","navn":"HEARD OG MCDONALD ØYENE"},{"kode":"KEN","kodeverk":"LANDKODER","navn":"KENYA"},{"kode":"ASM","kodeverk":"LANDKODER","navn":"AM. SAMOA"},{"kode":"PAK","kodeverk":"LANDKODER","navn":"PAKISTAN"},{"kode":"ATG","kodeverk":"LANDKODER","navn":"ANTIGUA OG BARBUDA"},{"kode":"TZA","kodeverk":"LANDKODER","navn":"TANZANIA"},{"kode":"ZAF","kodeverk":"LANDKODER","navn":"SØR-AFRIKA"},{"kode":"CMR","kodeverk":"LANDKODER","navn":"KAMERUN"},{"kode":"MLI","kodeverk":"LANDKODER","navn":"MALI"},{"kode":"SLV","kodeverk":"LANDKODER","navn":"EL SALVADOR"},{"kode":"MAF","kodeverk":"LANDKODER","navn":"SAINT MARTIN"},{"kode":"KGZ","kodeverk":"LANDKODER","navn":"KIRGISISTAN"},{"kode":"FJI","kodeverk":"LANDKODER","navn":"FIJI"},{"kode":"RWA","kodeverk":"LANDKODER","navn":"RWANDA"},{"kode":"GEO","kodeverk":"LANDKODER","navn":"GEORGIA"},{"kode":"REU","kodeverk":"LANDKODER","navn":"REUNION"},{"kode":"MTQ","kodeverk":"LANDKODER","navn":"MARTINIQUE"},{"kode":"SDN","kodeverk":"LANDKODER","navn":"SUDAN"},{"kode":"AND","kodeverk":"LANDKODER","navn":"ANDORRA"},{"kode":"COK","kodeverk":"LANDKODER","navn":"COOKØYENE"},{"kode":"SHN","kodeverk":"LANDKODER","navn":"ST. HELENA"},{"kode":"COL","kodeverk":"LANDKODER","navn":"COLOMBIA"},{"kode":"PER","kodeverk":"LANDKODER","navn":"PERU"},{"kode":"STP","kodeverk":"LANDKODER","navn":"SAO TOME OG PRINCIPE"},{"kode":"COM","kodeverk":"LANDKODER","navn":"KOMORENE"},{"kode":"LUX","kodeverk":"LANDKODER","navn":"LUXEMBOURG"},{"kode":"PNG","kodeverk":"LANDKODER","navn":"PAPUA NY-GUINEA"},{"kode":"MKD","kodeverk":"LANDKODER","navn":"MAKEDONIA"},{"kode":"GIN","kodeverk":"LANDKODER","navn":"GUINEA"},{"kode":"CYM","kodeverk":"LANDKODER","navn":"CAYMANØYENE"},{"kode":"VGB","kodeverk":"LANDKODER","navn":"JOMFRUØYENE BRIT."},{"kode":"IRL","kodeverk":"LANDKODER","navn":"IRLAND"},{"kode":"XXX","kodeverk":"LANDKODER","navn":"STATSLØS"},{"kode":"HTI","kodeverk":"LANDKODER","navn":"HAITI"},{"kode":"LBN","kodeverk":"LANDKODER","navn":"LIBANON"},{"kode":"BRN","kodeverk":"LANDKODER","navn":"BRUNEI"},{"kode":"GMB","kodeverk":"LANDKODER","navn":"GAMBIA"},{"kode":"MLT","kodeverk":"LANDKODER","navn":"MALTA"},{"kode":"CRI","kodeverk":"LANDKODER","navn":"COSTA RICA"},{"kode":"UZB","kodeverk":"LANDKODER","navn":"UZBEKISTAN"},{"kode":"CXR","kodeverk":"LANDKODER","navn":"CHRISTMASØYA"},{"kode":"TUR","kodeverk":"LANDKODER","navn":"TYRKIA"},{"kode":"UKR","kodeverk":"LANDKODER","navn":"UKRAINA"},{"kode":"SUN","kodeverk":"LANDKODER","navn":"SOVJETUNIONEN"},{"kode":"PYF","kodeverk":"LANDKODER","navn":"FRANSK POLYNESIA"},{"kode":"MNE","kodeverk":"LANDKODER","navn":"MONTENEGRO"},{"kode":"BIH","kodeverk":"LANDKODER","navn":"BOSNIA-HERCEGOVINA"},{"kode":"PAN","kodeverk":"LANDKODER","navn":"PANAMA"},{"kode":"SJM","kodeverk":"LANDKODER","navn":"SVALBARD OG JAN MAYEN"},{"kode":"NIU","kodeverk":"LANDKODER","navn":"NIUE"},{"kode":"SUR","kodeverk":"LANDKODER","navn":"SURINAM"},{"kode":"MUS","kodeverk":"LANDKODER","navn":"MAURITIUS"},{"kode":"CHE","kodeverk":"LANDKODER","navn":"SVEITS"},{"kode":"BEL","kodeverk":"LANDKODER","navn":"BELGIA"},{"kode":"TTO","kodeverk":"LANDKODER","navn":"TRINIDAD OG TOBAGO"},{"kode":"SWZ","kodeverk":"LANDKODER","navn":"SWAZILAND"},{"kode":"TUN","kodeverk":"LANDKODER","navn":"TUNISIA"},{"kode":"GLP","kodeverk":"LANDKODER","navn":"GUADELOUPE"},{"kode":"KWT","kodeverk":"LANDKODER","navn":"KUWAIT"},{"kode":"DMA","kodeverk":"LANDKODER","navn":"DOMINICA"},{"kode":"BGR","kodeverk":"LANDKODER","navn":"BULGARIA"},{"kode":"ISL","kodeverk":"LANDKODER","navn":"ISLAND"},{"kode":"SVN","kodeverk":"LANDKODER","navn":"SLOVENIA"},{"kode":"PLW","kodeverk":"LANDKODER","navn":"PALAU"},{"kode":"GBR","kodeverk":"LANDKODER","navn":"STORBRITANNIA"},{"kode":"NAM","kodeverk":"LANDKODER","navn":"NAMIBIA"},{"kode":"FSM","kodeverk":"LANDKODER","navn":"MIKRONESIAFØD."},{"kode":"GNB","kodeverk":"LANDKODER","navn":"GUINEA-BISSAU"},{"kode":"UMI","kodeverk":"LANDKODER","navn":"MINDRE STILLEHAVSØYER"},{"kode":"MDA","kodeverk":"LANDKODER","navn":"MOLDOVA"},{"kode":"MMR","kodeverk":"LANDKODER","navn":"MYANMAR (BURMA)"},{"kode":"MOZ","kodeverk":"LANDKODER","navn":"MOSAMBIK"},{"kode":"SGS","kodeverk":"LANDKODER","navn":"SØR-GEORGIA OG SØR-SANDWICHØYE"},{"kode":"NPL","kodeverk":"LANDKODER","navn":"NEPAL"},{"kode":"BES","kodeverk":"LANDKODER","navn":"BONAIRE, SINT EUSTATIUS, SABA"},{"kode":"LBR","kodeverk":"LANDKODER","navn":"LIBERIA"},{"kode":"MDG","kodeverk":"LANDKODER","navn":"MADAGASKAR"},{"kode":"VIR","kodeverk":"LANDKODER","navn":"JOMFRUØYENE AM."},{"kode":"ARE","kodeverk":"LANDKODER","navn":"DE ARABISKE EMIRATER"},{"kode":"USA","kodeverk":"LANDKODER","navn":"USA"},{"kode":"NFK","kodeverk":"LANDKODER","navn":"NORFOLKØYA"},{"kode":"HKG","kodeverk":"LANDKODER","navn":"HONGKONG"},{"kode":"DEU","kodeverk":"LANDKODER","navn":"TYSKLAND"},{"kode":"LIE","kodeverk":"LANDKODER","navn":"LIECHTENSTEIN"},{"kode":"ECU","kodeverk":"LANDKODER","navn":"ECUADOR"},{"kode":"POL","kodeverk":"LANDKODER","navn":"POLEN"},{"kode":"PRK","kodeverk":"LANDKODER","navn":"NORD-KOREA"},{"kode":"GGY","kodeverk":"LANDKODER","navn":"GUERNSEY"},{"kode":"NZL","kodeverk":"LANDKODER","navn":"NEW ZEALAND"},{"kode":"MAR","kodeverk":"LANDKODER","navn":"MAROKKO"},{"kode":"BWA","kodeverk":"LANDKODER","navn":"BOTSWANA"},{"kode":"GUM","kodeverk":"LANDKODER","navn":"GUAM"},{"kode":"YUG","kodeverk":"LANDKODER","navn":"JUGOSLAVIA"},{"kode":"SEN","kodeverk":"LANDKODER","navn":"SENEGAL"},{"kode":"MWI","kodeverk":"LANDKODER","navn":"MALAWI"},{"kode":"TKM","kodeverk":"LANDKODER","navn":"TURKMENISTAN"},{"kode":"GAB","kodeverk":"LANDKODER","navn":"GABON"},{"kode":"FIN","kodeverk":"LANDKODER","navn":"FINLAND"},{"kode":"PRY","kodeverk":"LANDKODER","navn":"PARAGUAY"},{"kode":"PSE","kodeverk":"LANDKODER","navn":"DET PALESTINSKE OMRÅDET"},{"kode":"FRA","kodeverk":"LANDKODER","navn":"FRANKRIKE"},{"kode":"ZWE","kodeverk":"LANDKODER","navn":"ZIMBABWE"},{"kode":"AZE","kodeverk":"LANDKODER","navn":"AZERBAJDZJAN"},{"kode":"SXM","kodeverk":"LANDKODER","navn":"SINT MAARTEN"},{"kode":"NIC","kodeverk":"LANDKODER","navn":"NICARAGUA"},{"kode":"CAN","kodeverk":"LANDKODER","navn":"CANADA"},{"kode":"COG","kodeverk":"LANDKODER","navn":"KONGO, REPUBLIKKEN"},{"kode":"JPN","kodeverk":"LANDKODER","navn":"JAPAN"},{"kode":"KOR","kodeverk":"LANDKODER","navn":"SØR-KOREA"},{"kode":"HUN","kodeverk":"LANDKODER","navn":"UNGARN"},{"kode":"YEM","kodeverk":"LANDKODER","navn":"JEMEN"},{"kode":"CHL","kodeverk":"LANDKODER","navn":"CHILE"},{"kode":"BRB","kodeverk":"LANDKODER","navn":"BARBADOS"},{"kode":"DNK","kodeverk":"LANDKODER","navn":"DANMARK"},{"kode":"NRU","kodeverk":"LANDKODER","navn":"NAURU"},{"kode":"VCT","kodeverk":"LANDKODER","navn":"ST. VINCENT"},{"kode":"BEN","kodeverk":"LANDKODER","navn":"BENIN"},{"kode":"SMR","kodeverk":"LANDKODER","navn":"SAN MARINO"},{"kode":"TCD","kodeverk":"LANDKODER","navn":"TSJAD"},{"kode":"CUW","kodeverk":"LANDKODER","navn":"CURACAO"},{"kode":"IRN","kodeverk":"LANDKODER","navn":"IRAN"},{"kode":"SWE","kodeverk":"LANDKODER","navn":"SVERIGE"},{"kode":"ERI","kodeverk":"LANDKODER","navn":"ERITREA"},{"kode":"XUK","kodeverk":"LANDKODER","navn":"UKJENT"},{"kode":"MDV","kodeverk":"LANDKODER","navn":"MALDIVENE"},{"kode":"CSK","kodeverk":"LANDKODER","navn":"TSJEKKOSLOVAKIA"},{"kode":"GRD","kodeverk":"LANDKODER","navn":"GRENADA"},{"kode":"HND","kodeverk":"LANDKODER","navn":"HONDURAS"},{"kode":"FRO","kodeverk":"LANDKODER","navn":"FÆRØYENE"},{"kode":"COD","kodeverk":"LANDKODER","navn":"KONGO, DEN DEMOKR. REPUBL"},{"kode":"SRB","kodeverk":"LANDKODER","navn":"SERBIA"},{"kode":"AGO","kodeverk":"LANDKODER","navn":"ANGOLA"},{"kode":"NCL","kodeverk":"LANDKODER","navn":"NY-KALEDONIA"},{"kode":"SCG","kodeverk":"LANDKODER","navn":"SERBIA OG MONTENEGRO"},{"kode":"GTM","kodeverk":"LANDKODER","navn":"GUATEMALA"},{"kode":"AFG","kodeverk":"LANDKODER","navn":"AFGHANISTAN"},{"kode":"JAM","kodeverk":"LANDKODER","navn":"JAMAICA"},{"kode":"UGA","kodeverk":"LANDKODER","navn":"UGANDA"},{"kode":"IMN","kodeverk":"LANDKODER","navn":"ISLE OF MAN"},{"kode":"ISR","kodeverk":"LANDKODER","navn":"ISRAEL"},{"kode":"SOM","kodeverk":"LANDKODER","navn":"SOMALIA"},{"kode":"MNP","kodeverk":"LANDKODER","navn":"NORD-MARIANENE"},{"kode":"XXK","kodeverk":"LANDKODER","navn":"KOSOVO"},{"kode":"BLR","kodeverk":"LANDKODER","navn":"HVITERUSSLAND"},{"kode":"LSO","kodeverk":"LANDKODER","navn":"LESOTHO"},{"kode":"NER","kodeverk":"LANDKODER","navn":"NIGER"},{"kode":"IDN","kodeverk":"LANDKODER","navn":"INDONESIA"},{"kode":"CZE","kodeverk":"LANDKODER","navn":"DEN TSJEKKISKE REP."},{"kode":"URY","kodeverk":"LANDKODER","navn":"URUGUAY"},{"kode":"BGD","kodeverk":"LANDKODER","navn":"BANGLADESH"},{"kode":"WLF","kodeverk":"LANDKODER","navn":"WALLIS/FUTUNAØYENE"},{"kode":"CIV","kodeverk":"LANDKODER","navn":"ELFENBEINSKYSTEN"},{"kode":"ABW","kodeverk":"LANDKODER","navn":"ARUBA"},{"kode":"SLB","kodeverk":"LANDKODER","navn":"SALOMONØYENE"},{"kode":"TWN","kodeverk":"LANDKODER","navn":"TAIWAN"},{"kode":"SLE","kodeverk":"LANDKODER","navn":"SIERRA LEONE"},{"kode":"BRA","kodeverk":"LANDKODER","navn":"BRASIL"},{"kode":"DJI","kodeverk":"LANDKODER","navn":"DJIBOUTI"},{"kode":"PRI","kodeverk":"LANDKODER","navn":"PUERTO RICO"},{"kode":"PRT","kodeverk":"LANDKODER","navn":"PORTUGAL"},{"kode":"ANT","kodeverk":"LANDKODER","navn":"DE NEDERLANDSKE ANTILLENE"},{"kode":"THA","kodeverk":"LANDKODER","navn":"THAILAND"},{"kode":"TLS","kodeverk":"LANDKODER","navn":"ØST-TIMOR"},{"kode":"SPM","kodeverk":"LANDKODER","navn":"ST-PIERRE OG MIQUELON"},{"kode":"ALB","kodeverk":"LANDKODER","navn":"ALBANIA"},{"kode":"EGY","kodeverk":"LANDKODER","navn":"EGYPT"},{"kode":"GRC","kodeverk":"LANDKODER","navn":"HELLAS"},{"kode":"BFA","kodeverk":"LANDKODER","navn":"BURKINA FASO"},{"kode":"ALA","kodeverk":"LANDKODER","navn":"ÅLAND"},{"kode":"BOL","kodeverk":"LANDKODER","navn":"BOLIVIA"},{"kode":"DDR","kodeverk":"LANDKODER","navn":"TYSKLAND (ØST)"},{"kode":"HRV","kodeverk":"LANDKODER","navn":"KROATIA"},{"kode":"AUS","kodeverk":"LANDKODER","navn":"AUSTRALIA"},{"kode":"NGA","kodeverk":"LANDKODER","navn":"NIGERIA"},{"kode":"LBY","kodeverk":"LANDKODER","navn":"LIBYA"},{"kode":"MYT","kodeverk":"LANDKODER","navn":"MAYOTTE"},{"kode":"LVA","kodeverk":"LANDKODER","navn":"LATVIA"},{"kode":"BTN","kodeverk":"LANDKODER","navn":"BHUTAN"},{"kode":"MSR","kodeverk":"LANDKODER","navn":"MONSERRAT"},{"kode":"???","kodeverk":"LANDKODER","navn":"UOPPGITT/UKJENT"},{"kode":"OMN","kodeverk":"LANDKODER","navn":"OMAN"},{"kode":"SVK","kodeverk":"LANDKODER","navn":"SLOVAKIA"},{"kode":"TUV","kodeverk":"LANDKODER","navn":"TUVALU"},{"kode":"VEN","kodeverk":"LANDKODER","navn":"VENEZUELA"},{"kode":"ITA","kodeverk":"LANDKODER","navn":"ITALIA"},{"kode":"KHM","kodeverk":"LANDKODER","navn":"KAMBODSJA"},{"kode":"ARM","kodeverk":"LANDKODER","navn":"ARMENIA"},{"kode":"LCA","kodeverk":"LANDKODER","navn":"ST. LUCIA"},{"kode":"GIB","kodeverk":"LANDKODER","navn":"GIBRALTAR"},{"kode":"JEY","kodeverk":"LANDKODER","navn":"JERSEY"},{"kode":"LAO","kodeverk":"LANDKODER","navn":"LAOS"},{"kode":"BHR","kodeverk":"LANDKODER","navn":"BAHRAIN"},{"kode":"ESH","kodeverk":"LANDKODER","navn":"VEST-SAHARA"},{"kode":"TKL","kodeverk":"LANDKODER","navn":"TOKELAU"},{"kode":"MNG","kodeverk":"LANDKODER","navn":"MONGOLIA"},{"kode":"BLZ","kodeverk":"LANDKODER","navn":"BELIZE"},{"kode":"GUF","kodeverk":"LANDKODER","navn":"FRANSK GUYANA"},{"kode":"TCA","kodeverk":"LANDKODER","navn":"TURKS/CAICOSØYENE"},{"kode":"WSM","kodeverk":"LANDKODER","navn":"SAMOA"},{"kode":"JOR","kodeverk":"LANDKODER","navn":"JORDAN"},{"kode":"MRT","kodeverk":"LANDKODER","navn":"MAURITANIA"},{"kode":"CUB","kodeverk":"LANDKODER","navn":"CUBA"},{"kode":"BDI","kodeverk":"LANDKODER","navn":"BURUNDI"},{"kode":"GHA","kodeverk":"LANDKODER","navn":"GHANA"},{"kode":"KNA","kodeverk":"LANDKODER","navn":"ST.KITTS OG NEVIS"},{"kode":"ETH","kodeverk":"LANDKODER","navn":"ETIOPIA"},{"kode":"SSD","kodeverk":"LANDKODER","navn":"SØR-SUDAN"},{"kode":"VAT","kodeverk":"LANDKODER","navn":"VATIKANSTATEN"},{"kode":"CPV","kodeverk":"LANDKODER","navn":"KAPP VERDE"},{"kode":"PCN","kodeverk":"LANDKODER","navn":"PITCAIRN"},{"kode":"SGP","kodeverk":"LANDKODER","navn":"SINGAPORE"},{"kode":"KAZ","kodeverk":"LANDKODER","navn":"KAZAKHSTAN"},{"kode":"MYS","kodeverk":"LANDKODER","navn":"MALAYSIA"},{"kode":"PHL","kodeverk":"LANDKODER","navn":"FILIPPINENE"},{"kode":"EST","kodeverk":"LANDKODER","navn":"ESTLAND"},{"kode":"NOR","kodeverk":"LANDKODER","navn":"NORGE"},{"kode":"BMU","kodeverk":"LANDKODER","navn":"BERMUDA"},{"kode":"LTU","kodeverk":"LANDKODER","navn":"LITAUEN"},{"kode":"MAC","kodeverk":"LANDKODER","navn":"MACAO"},{"kode":"TON","kodeverk":"LANDKODER","navn":"TONGA"},{"kode":"ROU","kodeverk":"LANDKODER","navn":"ROMANIA"},{"kode":"BLM","kodeverk":"LANDKODER","navn":"SAINT BARTHELEMY"},{"kode":"SAU","kodeverk":"LANDKODER","navn":"SAUDI-ARABIA"},{"kode":"GNQ","kodeverk":"LANDKODER","navn":"EKVATORIAL-GUINEA"},{"kode":"TGO","kodeverk":"LANDKODER","navn":"TOGO"},{"kode":"ZMB","kodeverk":"LANDKODER","navn":"ZAMBIA"},{"kode":"VUT","kodeverk":"LANDKODER","navn":"VANUATU"},{"kode":"DZA","kodeverk":"LANDKODER","navn":"ALGERIE"},{"kode":"TJK","kodeverk":"LANDKODER","navn":"TADZJIKISTAN"},{"kode":"NLD","kodeverk":"LANDKODER","navn":"NEDERLAND"},{"kode":"KIR","kodeverk":"LANDKODER","navn":"KIRIBATI"},{"kode":"GUY","kodeverk":"LANDKODER","navn":"GUYANA"},{"kode":"BVT","kodeverk":"LANDKODER","navn":"BOUVETØYA"},{"kode":"IND","kodeverk":"LANDKODER","navn":"INDIA"},{"kode":"LKA","kodeverk":"LANDKODER","navn":"SRI LANKA"},{"kode":"SYR","kodeverk":"LANDKODER","navn":"SYRIA"},{"kode":"ESP","kodeverk":"LANDKODER","navn":"SPANIA"},{"kode":"GRL","kodeverk":"LANDKODER","navn":"GRØNLAND"},{"kode":"AIA","kodeverk":"LANDKODER","navn":"ANGUILLA"},{"kode":"IRQ","kodeverk":"LANDKODER","navn":"IRAK"},{"kode":"MCO","kodeverk":"LANDKODER","navn":"MONACO"},{"kode":"MHL","kodeverk":"LANDKODER","navn":"MARSHALLØYENE"},{"kode":"DOM","kodeverk":"LANDKODER","navn":"DEN DOMINIKANSKE REP"},{"kode":"FLK","kodeverk":"LANDKODER","navn":"FALKLANDSØYENE"}]'),Au=[{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-005",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakebetaling endring"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"}],bu=[{kode:"IKKE_I_AKTIVITET_IKKE_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Aktiviteten er ikke dokumentert"},{kode:"I_AKTIVITET",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er i aktivitet"},{kode:"IKKE_I_AKTIVITET_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er ikke i aktivitet"}],_u=[{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"},{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"}],Su=[{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"},{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"}],hu=JSON.parse('[{"kode":"FODSELSDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fødselsdato"},{"kode":"TILBAKETREKK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Tilbaketrekk"},{"kode":"ER_ANKEFRIST_IKKE_OVERHOLDT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er ankefrist ikke overholdt"},{"kode":"FNR","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fødselsnummer"},{"kode":"TERMINBEKREFTELSE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Terminbekreftelse"},{"kode":"TERMINDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Termindato"},{"kode":"ANKE_RESULTAT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Anke resultat"},{"kode":"UTTAK_SPLITT_TIDSPERIODE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resulterende periode ved splitting"},{"kode":"UTTAK_TREKKDAGER_FLERBARN_KVOTE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Trekkdager flerbarn kvote"},{"kode":"OPPHOLDSRETT_IKKE_EOS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruker har ikke oppholdsrett i EØS"},{"kode":"TILRETTELEGGING_SKAL_BRUKES","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avgjør om tilrettelegging skal brukes"},{"kode":"ER_ANKE_IKKE_KONKRET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er anke ikke konkret."},{"kode":"BEHANDLING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Behandling"},{"kode":"UTTAK_GRADERING_ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Gradering av arbeidsforhold"},{"kode":"ANKE_AVVIST_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak til avvist anke"},{"kode":"INNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntekt"},{"kode":"SOKNADSFRISTVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Søknadsfristvilkåret"},{"kode":"DAGPENGER_INNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dagpenger"},{"kode":"ARBEIDSFORHOLD_BEKREFTET_TOM_DATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Til og med dato fastsatt av saksbehandler"},{"kode":"SOKNADSFRIST","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Søknadsfrist"},{"kode":"VILKAR_SOM_ANVENDES","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Vilkår som anvendes"},{"kode":"PERIODE_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Periode f.o.m."},{"kode":"UTTAK_PROSENT_UTBETALING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Utbetalingsgrad"},{"kode":"NYTT_REFUSJONSKRAV","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Nytt refusjonskrav"},{"kode":"DODSDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dødsdato"},{"kode":"DOKUMENTASJON_FORELIGGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dokumentasjon foreligger"},{"kode":"LØNNSENDRING_I_PERIODEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Lønnsendring i beregningsperioden"},{"kode":"AVKLART_PERIODE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avklart periode"},{"kode":"SVANGERSKAPSPENGERVILKÅRET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Svangerskapsvilkåret"},{"kode":"KLAGE_OMGJØR_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak til omgjøring"},{"kode":"AKTIVITET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Aktivitet"},{"kode":"UTTAK_STØNADSKONTOTYPE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Stønadskontotype"},{"kode":"ALENEOMSORG","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Aleneomsorg"},{"kode":"OMSORG","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Omsorg"},{"kode":"KONTAKTPERSON","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Kontaktperson"},{"kode":"ER_KLAGE_KONKRET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"TILRETTELEGGING_BEHOV_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Tilrettelegging behov FOM"},{"kode":"ANNEN_FORELDER_RETT_EØS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Annen forelder har opptjent rett fra land i EØS"},{"kode":"AKTIVITETSKRAV_AVKLARING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avklaring om mor er i aktivitet"},{"kode":"FASTSETT_RESULTAT_PERIODEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fastsett resultat for perioden"},{"kode":"FRILANSVIRKSOMHET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Frilansvirksomhet"},{"kode":"MANN_ADOPTERER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mann adopterer"},{"kode":"ANDEL_ARBEID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Andel i arbeid"},{"kode":"DELVIS_TILRETTELEGGING_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Delvis tilrettelegging FOM"},{"kode":"OPPTJENINGSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Opptjeningsvilkåret"},{"kode":"ER_KLAGER_PART","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"UTTAK_PERIODE_RESULTAT_TYPE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resultattype for periode"},{"kode":"UTLAND","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Utland"},{"kode":"BRUK_ANTALL_I_TPS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruk antall fra folkeregisteret"},{"kode":"AKTIVITET_PERIODE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Perioden med aktivitet"},{"kode":"FASTSETT_ETTERLØNN_SLUTTPAKKE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fastsett søkers månedsinntekt fra etterlønn eller sluttpakke"},{"kode":"IKKE_OMSORG_PERIODEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Perioden Søker har ikke omsorg for barnet"},{"kode":"DEKNINGSGRAD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dekningsgrad"},{"kode":"ER_ANKEN_IKKE_SIGNERT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"er anken ikke signert."},{"kode":"SYKDOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Sykdom"},{"kode":"UTSTEDTDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Utstedtdato"},{"kode":"FODSELSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fødsel"},{"kode":"NAVN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Navn"},{"kode":"UTTAK_TREKKDAGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Trekkdager"},{"kode":"PA_KLAGD_BEHANDLINGID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Påklagd behandlingId"},{"kode":"VURDER_ETTERLØNN_SLUTTPAKKE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Har søker inntekt fra etterlønn eller sluttpakke"},{"kode":"OPPHOLDSRETT_EOS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruker har oppholdsrett i EØS"},{"kode":"RETT_TIL_FORELDREPENGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Rett til foreldrepenger"},{"kode":"INNTEKTSKATEGORI","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntektskategori"},{"kode":"ADOPTERER_ALENE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Adopterer alene"},{"kode":"ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Arbeidsforhold"},{"kode":"BRUKER_TVUNGEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruker er under tvungen forvaltning"},{"kode":"DELVIS_REFUSJON_FØR_STARTDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Delvis refusjon som utbetales før startdato for full refusjon"},{"kode":"ENDRING_TIDSBEGRENSET_ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Endring tidsbegrenset arbeidsforhold"},{"kode":"VURDER_GRADERING_PÅ_ANDEL_UTEN_BG","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Vurder om søker har gradering på en andel uten beregningsgrunnlag"},{"kode":"MANDAT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mandat"},{"kode":"MOR_MOTTAR_UFØRETRYGD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mor mottar uføretrygd"},{"kode":"HEL_TILRETTELEGGING_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Hel tilrettelegging FOM"},{"kode":"ORGANISASJONSNUMMER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Organisasjonsnummer"},{"kode":"UTTAK_GRADERING_AVSLAG_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak avslag gradering"},{"kode":"ER_KLAGEN_SIGNERT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"ER_KLAGEFRIST_OVERHOLDT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"OMSORGSVILKAR","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Foreldreansvar"},{"kode":"PA_ANKET_BEHANDLINGID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"på anket behandlingsId."},{"kode":"SLUTTE_ARBEID_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Slutte arbeid FOM"},{"kode":"BRUK_ANTALL_I_SOKNAD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruk antall fra søknad"},{"kode":"KLAGE_RESULTAT_NFP","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resultat"},{"kode":"FORDELING_FOR_ANDEL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fordeling for arbeidsforhold"},{"kode":"UTTAK_SAMTIDIG_UTTAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Samtidig uttak"},{"kode":"ER_SOKER_BOSATT_I_NORGE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er søker bosatt i Norge?"},{"kode":"FRILANS_INNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Frilans inntekt"},{"kode":"FASTSETT_VIDERE_BEHANDLING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fastsett videre behandling"},{"kode":"BRUK_ANTALL_I_VEDTAKET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruk antall fra vedtaket"},{"kode":"OMSORGSOVERTAKELSESDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Omsorgsovertakelsesdato"},{"kode":"UTTAK_PERIODE_RESULTAT_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resultat årsak"},{"kode":"ENDRING_NAERING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Endring i næring"},{"kode":"FORDELING_FOR_NY_ANDEL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny andel med fordeling"},{"kode":"BEHANDLENDE_ENHET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Behandlende enhet"},{"kode":"BRUTTO_NAERINGSINNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Brutto næringsinntekt"},{"kode":"FORDELING_ETTER_BESTEBEREGNING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fordeling etter besteberegning"},{"kode":"STARTDATO_FRA_SOKNAD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Startdato fra søknad"},{"kode":"NY_STARTDATO_REFUSJON","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny startdato for refusjon"},{"kode":"OVERSTYRT_VURDERING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Overstyrt vurdering"},{"kode":"KLAGE_RESULTAT_KA","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ytelsesvedtak"},{"kode":"FARESIGNALER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Faresignaler"},{"kode":"NY_AKTIVITET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Det er lagt til ny aktivitet for"},{"kode":"MOTTAR_YTELSE_FRILANS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mottar søker ytelse for frilansaktiviteten"},{"kode":"NY_REFUSJONSFRIST","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny refusjonsfrist"},{"kode":"OVERSTYRT_BEREGNING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Overstyrt beregning"},{"kode":"AVKLARSAKSOPPLYSNINGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avklar saksopplysninger"},{"kode":"INNTEKT_FRA_ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntekt fra arbeidsforhold"},{"kode":"SOKERSOPPLYSNINGSPLIKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Søkers opplysningsplikt"},{"kode":"SELVSTENDIG_NAERINGSDRIVENDE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Selvstendig næringsdrivende"},{"kode":"GYLDIG_MEDLEM_FOLKETRYGDEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Gyldig medlem i folketrygden"},{"kode":"MOTTATT_DATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mottatt dato"},{"kode":"ANTALL_BARN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Antall barn"},{"kode":"EKTEFELLES_BARN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ektefelles barn"},{"kode":"MILITÆR_ELLER_SIVIL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Militær- eller siviltjeneste"},{"kode":"PERIODE_TOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Periode t.o.m."},{"kode":"FORELDREANSVARSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Foreldreansvar"},{"kode":"STILLINGSPROSENT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Stillingsprosent"},{"kode":"ADOPSJONSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Adopsjon"},{"kode":"ANKE_OMGJØR_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak til omgjøring"},{"kode":"INNTEKTSKATEGORI_FOR_ANDEL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntektskategori for andel"},{"kode":"KONTROLL_AV_BESTEBEREGNING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Kontroll av besteberegning"},{"kode":"MOR_MOTTAR_STØNAD_EØS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mor mottar foreldrepenger fra land i EØS"},{"kode":"ER_ANKER_IKKE_PART","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Angir om anker ikke er part i saken."},{"kode":"ER_VILKÅRENE_TILBAKEKREVING_OPPFYLT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er vilkårene for tilbakekreving oppfylt"},{"kode":"NY_FORDELING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny fordeling for"},{"kode":"ER_SÆRLIGE_GRUNNER_TIL_REDUKSJON","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er det særlige grunner til reduksjon"},{"kode":"MOTTAR_YTELSE_ARBEID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mottar søker ytelse for arbeid i {value}"},{"kode":"TYPE_VERGE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Type verge"}]'),Nu=[{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet/savnet"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Uregistrert person"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"UTAN",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person annullert tilgang Fnr"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utvandret"}],Ou=[{kode:"ENHETSREGISTERET",kodeverk:"FAGSYSTEM",navn:"Enhetsregisteret"},{kode:"INFOTRYGD",kodeverk:"FAGSYSTEM",navn:"Infotrygd"},{kode:"INNTEKT",kodeverk:"FAGSYSTEM",navn:"INNTEKT"},{kode:"ARENA",kodeverk:"FAGSYSTEM",navn:"Arena"},{kode:"GOSYS",kodeverk:"FAGSYSTEM",navn:"Gosys"},{kode:"JOARK",kodeverk:"FAGSYSTEM",navn:"Joark"},{kode:"K9SAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Folketrygdloven Kapittel 9"},{kode:"FPSAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Foreldrepenger"},{kode:"AAREGISTERET",kodeverk:"FAGSYSTEM",navn:"AAregisteret"},{kode:"MEDL",kodeverk:"FAGSYSTEM",navn:"MEDL"},{kode:"TPS",kodeverk:"FAGSYSTEM",navn:"TPS"},{kode:"VLSP",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Sykepenger"}],Iu=[{kode:"ANKE_STADFESTE_YTELSESVEDTAK",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"ANKEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"ANKE_AVVIS",kodeverk:"ANKEVURDERING",navn:"Anken avvises"},{kode:"ANKE_OMGJOER",kodeverk:"ANKEVURDERING",navn:"Anken omgjøres"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket oppheves og hjemsendes"}],Lu=[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"}],Ku=[{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],Pu=[{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"}],Du=[{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er slått sammen med et annet"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforhold lagt til av saksbehandler"},{kode:"BRUK_UTEN_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk, men ikke benytt inntektsmelding"},{kode:"IKKE_BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Ikke bruk"},{kode:"BASERT_PÅ_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet som ikke ligger i AA-reg er basert på inntektsmelding"},{kode:"BRUK_MED_OVERSTYRT_PERIODE",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Inntekten til arbeidsforholdet skal ikke være med i beregningsgrunnlaget"}],Fu=[{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"}],Mu=[{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"}],ju=[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],wu=[{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],Vu=[{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"}],Gu=[{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],Bu=[{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"}],qu=[{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"},{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"}],Uu=[{kode:"SAMMENSATT_KONTROLL",kodeverk:"FAGSAK_MARKERING",navn:"Sammensatt kontroll"},{kode:"EØS_BOSATT_NORGE",kodeverk:"FAGSAK_MARKERING",navn:"EØS bosatt Norge"},{kode:"SELVSTENDIG_NÆRING",kodeverk:"FAGSAK_MARKERING",navn:"Næringsdrivende"},{kode:"BARE_FAR_RETT",kodeverk:"FAGSAK_MARKERING",navn:"Bare far har rett"},{kode:"BOSATT_UTLAND",kodeverk:"FAGSAK_MARKERING",navn:"Bosatt utland"},{kode:"DØD_DØDFØDSEL",kodeverk:"FAGSAK_MARKERING",navn:"Død eller dødfødsel"},{kode:"PRAKSIS_UTSETTELSE",kodeverk:"FAGSAK_MARKERING",navn:"Praksis utsettelse"}],Hu={RelasjonsRolleType:$d,HistorikkinnslagType:Jd,UttakUtsettelseType:Wd,FagsakYtelseType:zd,StønadskontoType:[{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"}],FagsakStatus:Xd,Venteårsak:[{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga for tidlig søknad"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdId som stemmer med Aareg"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på scanning"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev venter søknad."},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."}],AnkeVurderingOmgjør:[{kode:"ANKE_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Gunst omgjør i anke"},{kode:"ANKE_TIL_UGUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Ugunst omgjør i anke"},{kode:"ANKE_DELVIS_OMGJOERING_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Delvis omgjøring, til gunst i anke"}],BehandlingÅrsakType:[{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger inntekt"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Inntektsmelding"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger søknadsfrist"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger opptjening"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Søknad"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger beregning"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. u26-29"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger medlemskap"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev uttak"}],GraderingAvslagÅrsak:[{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"Avslag gradering - arbeid 100% eller mer",lovHjemmel:null}],AktivitetStatus:Zd,BeregningsgrunnlagAndeltype:Qd,RevurderingVarslingÅrsak:[{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utvandret"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:eu,KonsekvensForYtelsen:nu,Inntektskategori:ru,SivilstandType:tu,SkjermlenkeType:au,FaktaOmBeregningTilfelle:iu,KlageVurdering:ou,HistorikkBegrunnelseType:su,OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:lu,KlageAvvistÅrsak:[{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klage er ugyldig",lovHjemmel:null}],BehandlingResultatType:du,VergeType:uu,TilbakekrevingVidereBehandling:gu,OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"}],FamilieHendelseType:ku,KlageHjemmel:vu,VilkårType:[{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"}],FarSøkerType:[{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"}],FaresignalVurdering:Eu,ArbeidType:mu,KlageMedholdÅrsak:[{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"}],Region:fu,OppgaveÅrsak:[{kode:"BEH_SAK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i VL"},{kode:"BEH_SAK_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i Infotrygd"},{kode:"INNHENT_DOK",kodeverk:"OPPGAVE_AARSAK",navn:"Innhent dokumentasjon"},{kode:"VUR_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder dokument i VL"},{kode:"REG_SOK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Registrere søknad i VL"},{kode:"SETTVENT_STO",kodeverk:"OPPGAVE_AARSAK",navn:"Sett Arena utbetaling på vent"},{kode:"RV_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Revurdere i VL"},{kode:"VUR_KONS_YTE_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder konsekvens for ytelse foreldrepenger"},{kode:"GOD_VED_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Godkjenne vedtak i VL"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"},{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"}],HistorikkOpplysningType:Tu,FordelingPeriodeKilde:Ru,KlageVurderingOmgjør:[{kode:"DELVIS_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Delvis medhold i klage"},{kode:"UGUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Ugunst medhold i klage"},{kode:"GUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Gunst medhold i klage"}],VurderArbeidsforholdHistorikkinnslag:pu,Arbeidskategori:yu,VurderÅrsak:[{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"}],Landkoder:cu,BehandlingType:Au,KontrollerAktivitetskravAvklaring:bu,InnsynResultatType:_u,MedlemskapType:Su,HistorikkEndretFeltType:hu,PersonstatusType:Nu,Fagsystem:Ou,AnkeVurdering:Iu,UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"}],BehandlingStatus:Lu,VirksomhetType:Ku,MedlemskapDekningType:Pu,ArbeidsforholdHandlingType:Du,HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"}],Avslagsårsak:JSON.parse('{"FP_VK_3":[{"kode":"1007","kodeverk":"AVSLAGSARSAK","navn":"Søkt for sent","lovHjemmel":null}],"FP_VK_4":[{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1005","kodeverk":"AVSLAGSARSAK","navn":"Ektefelles/samboers barn","lovHjemmel":null},{"kode":"1011","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK11\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK16\\", \\"lovreferanse\\": \\"§ 14-5 2. ledd\\"}]}]}"},{"kode":"1006","kodeverk":"AVSLAGSARSAK","navn":"Mann adopterer ikke alene","lovHjemmel":null},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1004","kodeverk":"AVSLAGSARSAK","navn":"Barn over 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_1":[{"kode":"1002","kodeverk":"AVSLAGSARSAK","navn":"Søker er medmor","lovHjemmel":null},{"kode":"1031","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}"},{"kode":"1003","kodeverk":"AVSLAGSARSAK","navn":"Søker er far","lovHjemmel":null},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1001","kodeverk":"AVSLAGSARSAK","navn":"Søkt for tidlig","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1026","kodeverk":"AVSLAGSARSAK","navn":"Fødselsdato ikke oppgitt eller registrert","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_2":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utvandret","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"}],"-":[],"FP_VK_41":[{"kode":"1041","kodeverk":"AVSLAGSARSAK","navn":"For lavt brutto beregningsgrunnlag","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_41\\", \\"lovreferanse\\": \\"14-7\\"}]}]}"}],"FP_VK_21":[{"kode":"1035","kodeverk":"AVSLAGSARSAK","navn":"Ikke tilstrekkelig opptjening","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_23\\", \\"lovreferanse\\": \\"14-6\\"}]}]}"}],"FP_VK_11":[{"kode":"1027","kodeverk":"AVSLAGSARSAK","navn":"Ingen barn dokumentert på far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1028","kodeverk":"AVSLAGSARSAK","navn":"Mor fyller ikke vilkåret for sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1029","kodeverk":"AVSLAGSARSAK","navn":"Bruker er ikke registrert som far/medmor til barnet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_33":[{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1017","kodeverk":"AVSLAGSARSAK","navn":"Omsorgsovertakelse etter 56 uker","lovHjemmel":null},{"kode":"1016","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke barnets far","lovHjemmel":null},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1018","kodeverk":"AVSLAGSARSAK","navn":"Ikke foreldreansvar alene etter barnelova","lovHjemmel":null}],"FP_VK_34":[{"kode":"1019","kodeverk":"AVSLAGSARSAK","navn":"Manglende dokumentasjon","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_34\\", \\"lovreferanse\\": \\"21-3\\"}]}]}"}],"FP_VK_23":[{"kode":"1035","kodeverk":"AVSLAGSARSAK","navn":"Ikke tilstrekkelig opptjening","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_23\\", \\"lovreferanse\\": \\"14-6\\"}]}]}"}],"FP_VK_8":[{"kode":"1014","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke foreldreansvar","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1013","kodeverk":"AVSLAGSARSAK","navn":"Barn ikke under 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1015","kodeverk":"AVSLAGSARSAK","navn":"Søker har hatt vanlig samvær med barnet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"}],"SVP_VK_1":[{"kode":"1065","kodeverk":"AVSLAGSARSAK","navn":"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 2. ledd\\"}]}]}"},{"kode":"1062","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Søker har mottatt sykepenger","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1066","kodeverk":"AVSLAGSARSAK","navn":"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 2. ledd\\"}]}]}"},{"kode":"1064","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1063","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1061","kodeverk":"AVSLAGSARSAK","navn":"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 3. ledd\\"}]}]}"},{"kode":"1060","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Søker er ikke gravid kvinne","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"}],"FP_VK_16":[{"kode":"1004","kodeverk":"AVSLAGSARSAK","navn":"Barn over 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1051","kodeverk":"AVSLAGSARSAK","navn":"Stebarnsadopsjon ikke flere dager igjen","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_5":[{"kode":"1009","kodeverk":"AVSLAGSARSAK","navn":"Mor ikke død","lovHjemmel":null},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1008","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke barnets far","lovHjemmel":null},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1011","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK11\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK16\\", \\"lovreferanse\\": \\"§ 14-5 2. ledd\\"}]}]}"},{"kode":"1012","kodeverk":"AVSLAGSARSAK","navn":"Far har ikke omsorg for barnet","lovHjemmel":null},{"kode":"1010","kodeverk":"AVSLAGSARSAK","navn":"Mor ikke død ved fødsel/omsorg","lovHjemmel":null}],"FP_VK_2_L":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utvandret","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"}],"FP_VK_2_F":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utvandret","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1052","kodeverk":"AVSLAGSARSAK","navn":"Innflyttet for mindre enn ett år siden","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK_2_F\\", \\"lovreferanse\\": \\"14-17 5. ledd\\"}]}]}"}]}'),OpptjeningAktivitetType:Fu,PermisjonsbeskrivelseType:Mu,Språkkode:[{kode:"NB",kodeverk:"SPRAAK_KODE",navn:"Norsk"},{kode:"NN",kodeverk:"SPRAAK_KODE",navn:"Nynorsk"},{kode:"EN",kodeverk:"SPRAAK_KODE",navn:"Engelsk"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"}],OppholdstillatelseType:ju,MedlemskapManuellVurderingType:wu,ManuellBehandlingÅrsak:[{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."}],MorsAktivitet:Vu,NaturalYtelseType:Gu,PeriodeResultatÅrsak:JSON.parse('[{"kode":"2010","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4072","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjuende ledd: Barnet er dødt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-7","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4037","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Ikke heltidsarbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4085","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Det er ikke samtykke mellom partene","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2035","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-16\\"}}}","sortering":"14-14-3","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4052","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4032","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4013","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4084","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4097","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Adopsjonsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4104","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 tredje ledd: Stønadsperiode for nytt barn","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4086","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10,14-11\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4002","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Ikke stønadsdager igjen på stønadskonto","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2012","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4023","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-5","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4031","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Ferie/arbeid innenfor de første 6 ukene","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4112","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Barnets innleggelse første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2017","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2036","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4071","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Bruker er død","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4098","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Foreldreansvarsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4067","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4066","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2032","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2026","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2031","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12, jf. §14-16: Gradering av kvote/overført kvote","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4081","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4053","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2007","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Innvilget foreldrepenger, kun mor har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2014","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4007","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2023","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15\\"}}}","sortering":"14-15-1","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4056","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-g","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2016","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-b","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2004","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2018","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2024","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4068","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4087","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-2: Opphør medlemskap","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-2\\"}}}","sortering":"14-02","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4110","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4115","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4096","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Fødselsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4035","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4073","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4069","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4062","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4089","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-g","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4034","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-9\\"}}}","sortering":"14-11-0","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2038","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Samtidig uttak","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4075","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger","lovHjemmel":"","sortering":"14-09-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4005","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjuende ledd: Ikke sammenhengende perioder","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-7","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2034","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2028","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4060","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2006","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Innvilget foreldrepenger før fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4105","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4058","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2002","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Innvilget fellesperiode/foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4095","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL"],"synligForRolle":["MOR"]},{"kode":"4116","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4092","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Avslag overføring - har ikke aleneomsorg for barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4038","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2022","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4008","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4064","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4111","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Søkers innleggelse første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4054","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-e","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2020","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-09-1","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4077","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10 a\\"}}}","sortering":"14-10-0-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2019","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-d","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2025","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4030","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Avslag utsettelse før termin/fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4050","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2003","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Innvilget uttak av kvote","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4082","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2013","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-d","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2027","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4088","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-f","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4063","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4099","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-6: Opptjeningsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-6\\"}}}","sortering":"14-06","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2039","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4103","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4039","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2037","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9, jf. §14-13: Innvilget fellesperiode til far","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4003","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 fjerde ledd: Mor har ikke omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-4","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4107","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4022","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 tredje ledd: Barnet er over 3 år","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4033","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Ikke lovbestemt ferie","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4059","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13, 14-9\\"}}}","sortering":"14-13-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4025","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-16\\"}}}","sortering":"14-16-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2021","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4070","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-e","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4074","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12,21-3\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2011","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2030","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4065","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4057","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2033","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13,14-16\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4076","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger","lovHjemmel":"","sortering":"14-09-5","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4040","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4061","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4041","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4020","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§22-13 tredje ledd: Brudd på søknadsfrist","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"22-13\\"}}}","sortering":"22-13-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4106","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2005","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15: Innvilget foreldrepenger ved aleneomsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15\\"}}}","sortering":"14-15","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4055","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-f","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4093","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-16: Avslag gradering - søker er ikke i arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-16\\"}}}","sortering":"14-16","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4102","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4051","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2015","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-a","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4100","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 andre ledd: Uttak før omsorgsovertakelse","lovHjemmel":"","sortering":"14-10-2","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4012","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 fjerde ledd: Far/medmor har ikke omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-4","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4117","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]}]'),ForeldreType:Bu,AdresseType:qu,FagsakMarkering:Uu},xu=()=>(...e)=>(To("button-click")(...e),Promise.resolve()),Yu={uuid:"1223-2323-2323-22332",versjon:1,sprakkode:"NO",type:po.FORSTEGANGSSOKNAD,status:Ro.BEHANDLING_UTREDES,behandlingPaaVent:!1,behandlingHenlagt:!1},Cu={saksnummer:"1234567",fagsakYtelseType:wt.FORELDREPENGER,bruker:{navn:"Kari Nordmann"},annenPart:{navn:"Ola Nordmann"},relasjonsRolleType:gt.MOR,annenpartBehandling:{relasjonsRolleType:gt.FAR}},$u=[],Ht=(e,n)=>{const{fagsak:t,behandling:r,aksjonspunkterForPanel:a,isReadOnly:i,submitCallback:o,alleMerknaderFraBeslutter:s}=n.args,l=a??$u;return P.jsx(qt,{fagsak:t??Cu,behandling:r??Yu,aksjonspunkterForPanel:l,harÅpneAksjonspunkter:l.some(d=>d.status===Zn.OPPRETTET),alleKodeverk:Hu,alleMerknaderFraBeslutter:s??{},isReadOnly:i??!1,submitCallback:o??xu(),children:P.jsx(e,{})})};Ht.__docgenInfo={description:"",methods:[],displayName:"withPanelData"};Ht.__docgenInfo={description:"",methods:[],displayName:"withPanelData"};const Rr=e=>{if(e==null)return;const n=e.toString().replace(/\s/g,"");if(!Number.isNaN(n))return Number(Math.round(parseFloat(n))).toLocaleString("nb-NO").replace(/,|\s/g," ")};function xt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var At={exports:{}},Ju=At.exports,wa;function Wu(){return wa||(wa=1,function(e,n){(function(t,r){e.exports=r()})(Ju,function(){var t,r,a=1e3,i=6e4,o=36e5,s=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=31536e6,u=2628e6,g=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,k={years:d,months:u,days:s,hours:o,minutes:i,seconds:a,milliseconds:1,weeks:6048e5},E=function(D){return D instanceof O},T=function(D,K,L){return new O(D,L,K.$l)},v=function(D){return r.p(D)+"s"},y=function(D){return D<0},A=function(D){return y(D)?Math.ceil(D):Math.floor(D)},R=function(D){return Math.abs(D)},_=function(D,K){return D?y(D)?{negative:!0,format:""+R(D)+K}:{negative:!1,format:""+D+K}:{negative:!1,format:""}},O=function(){function D(L,M,w){var F=this;if(this.$d={},this.$l=w,L===void 0&&(this.$ms=0,this.parseFromMilliseconds()),M)return T(L*k[v(M)],this);if(typeof L=="number")return this.$ms=L,this.parseFromMilliseconds(),this;if(typeof L=="object")return Object.keys(L).forEach(function(c){F.$d[v(c)]=L[c]}),this.calMilliseconds(),this;if(typeof L=="string"){var h=L.match(g);if(h){var S=h.slice(2).map(function(c){return c!=null?Number(c):0});return this.$d.years=S[0],this.$d.months=S[1],this.$d.weeks=S[2],this.$d.days=S[3],this.$d.hours=S[4],this.$d.minutes=S[5],this.$d.seconds=S[6],this.calMilliseconds(),this}}return this}var K=D.prototype;return K.calMilliseconds=function(){var L=this;this.$ms=Object.keys(this.$d).reduce(function(M,w){return M+(L.$d[w]||0)*k[w]},0)},K.parseFromMilliseconds=function(){var L=this.$ms;this.$d.years=A(L/d),L%=d,this.$d.months=A(L/u),L%=u,this.$d.days=A(L/s),L%=s,this.$d.hours=A(L/o),L%=o,this.$d.minutes=A(L/i),L%=i,this.$d.seconds=A(L/a),L%=a,this.$d.milliseconds=L},K.toISOString=function(){var L=_(this.$d.years,"Y"),M=_(this.$d.months,"M"),w=+this.$d.days||0;this.$d.weeks&&(w+=7*this.$d.weeks);var F=_(w,"D"),h=_(this.$d.hours,"H"),S=_(this.$d.minutes,"M"),c=this.$d.seconds||0;this.$d.milliseconds&&(c+=this.$d.milliseconds/1e3,c=Math.round(1e3*c)/1e3);var j=_(c,"S"),G=L.negative||M.negative||F.negative||h.negative||S.negative||j.negative,C=h.format||S.format||j.format?"T":"",B=(G?"-":"")+"P"+L.format+M.format+F.format+C+h.format+S.format+j.format;return B==="P"||B==="-P"?"P0D":B},K.toJSON=function(){return this.toISOString()},K.format=function(L){var M=L||"YYYY-MM-DDTHH:mm:ss",w={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return M.replace(l,function(F,h){return h||String(w[F])})},K.as=function(L){return this.$ms/k[v(L)]},K.get=function(L){var M=this.$ms,w=v(L);return w==="milliseconds"?M%=1e3:M=w==="weeks"?A(M/k[w]):this.$d[w],M||0},K.add=function(L,M,w){var F;return F=M?L*k[v(M)]:E(L)?L.$ms:T(L,this).$ms,T(this.$ms+F*(w?-1:1),this)},K.subtract=function(L,M){return this.add(L,M,!0)},K.locale=function(L){var M=this.clone();return M.$l=L,M},K.clone=function(){return T(this.$ms,this)},K.humanize=function(L){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!L)},K.valueOf=function(){return this.asMilliseconds()},K.milliseconds=function(){return this.get("milliseconds")},K.asMilliseconds=function(){return this.as("milliseconds")},K.seconds=function(){return this.get("seconds")},K.asSeconds=function(){return this.as("seconds")},K.minutes=function(){return this.get("minutes")},K.asMinutes=function(){return this.as("minutes")},K.hours=function(){return this.get("hours")},K.asHours=function(){return this.as("hours")},K.days=function(){return this.get("days")},K.asDays=function(){return this.as("days")},K.weeks=function(){return this.get("weeks")},K.asWeeks=function(){return this.as("weeks")},K.months=function(){return this.get("months")},K.asMonths=function(){return this.as("months")},K.years=function(){return this.get("years")},K.asYears=function(){return this.as("years")},D}(),p=function(D,K,L){return D.add(K.years()*L,"y").add(K.months()*L,"M").add(K.days()*L,"d").add(K.hours()*L,"h").add(K.minutes()*L,"m").add(K.seconds()*L,"s").add(K.milliseconds()*L,"ms")};return function(D,K,L){t=L,r=L().$utils(),L.duration=function(F,h){var S=L.locale();return T(F,{$l:S},h)},L.isDuration=E;var M=K.prototype.add,w=K.prototype.subtract;K.prototype.add=function(F,h){return E(F)?p(this,F,1):M.bind(this)(F,h)},K.prototype.subtract=function(F,h){return E(F)?p(this,F,-1):w.bind(this)(F,h)}}})}(At)),At.exports}var zu=Wu();const Xu=xt(zu);var bt={exports:{}},Zu=bt.exports,Va;function Qu(){return Va||(Va=1,function(e,n){(function(t,r){e.exports=r()})(Zu,function(){var t="day";return function(r,a,i){var o=function(d){return d.add(4-d.isoWeekday(),t)},s=a.prototype;s.isoWeekYear=function(){return o(this).year()},s.isoWeek=function(d){if(!this.$utils().u(d))return this.add(7*(d-this.isoWeek()),t);var u,g,k,E,T=o(this),v=(u=this.isoWeekYear(),g=this.$u,k=(g?i.utc:i)().year(u).startOf("year"),E=4-k.isoWeekday(),k.isoWeekday()>4&&(E+=7),k.add(E,t));return T.diff(v,"week")+1},s.isoWeekday=function(d){return this.$utils().u(d)?this.day()||7:this.day(this.day()%7?d:d-7)};var l=s.startOf;s.startOf=function(d,u){var g=this.$utils(),k=!!g.u(u)||u;return g.p(d)==="isoweek"?k?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(d,u)}}})}(bt)),bt.exports}var eg=Qu();const ng=xt(eg);var _t={exports:{}},rg=_t.exports,Ga;function tg(){return Ga||(Ga=1,function(e,n){(function(t,r){e.exports=r()})(rg,function(){var t="minute",r=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(i,o,s){var l=o.prototype;s.utc=function(v){var y={date:v,utc:!0,args:arguments};return new o(y)},l.utc=function(v){var y=s(this.toDate(),{locale:this.$L,utc:!0});return v?y.add(this.utcOffset(),t):y},l.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var d=l.parse;l.parse=function(v){v.utc&&(this.$u=!0),this.$utils().u(v.$offset)||(this.$offset=v.$offset),d.call(this,v)};var u=l.init;l.init=function(){if(this.$u){var v=this.$d;this.$y=v.getUTCFullYear(),this.$M=v.getUTCMonth(),this.$D=v.getUTCDate(),this.$W=v.getUTCDay(),this.$H=v.getUTCHours(),this.$m=v.getUTCMinutes(),this.$s=v.getUTCSeconds(),this.$ms=v.getUTCMilliseconds()}else u.call(this)};var g=l.utcOffset;l.utcOffset=function(v,y){var A=this.$utils().u;if(A(v))return this.$u?0:A(this.$offset)?g.call(this):this.$offset;if(typeof v=="string"&&(v=function(p){p===void 0&&(p="");var D=p.match(r);if(!D)return null;var K=(""+D[0]).match(a)||["-",0,0],L=K[0],M=60*+K[1]+ +K[2];return M===0?0:L==="+"?M:-M}(v),v===null))return this;var R=Math.abs(v)<=16?60*v:v,_=this;if(y)return _.$offset=R,_.$u=v===0,_;if(v!==0){var O=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(_=this.local().add(R+O,t)).$offset=R,_.$x.$localOffset=O}else _=this.utc();return _};var k=l.format;l.format=function(v){var y=v||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return k.call(this,y)},l.valueOf=function(){var v=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*v},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var E=l.toDate;l.toDate=function(v){return v==="s"&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():E.call(this)};var T=l.diff;l.diff=function(v,y,A){if(v&&this.$u===v.$u)return T.call(this,v,y,A);var R=this.local(),_=s(v).local();return T.call(R,_,y,A)}}})}(_t)),_t.exports}var ag=tg();const ig=xt(ag),og=Go(),Ce=e=>Hd({locale:"nb-NO",messages:e},og),Ba="DD.MM.YYYY",qa="YYYY-MM",$o={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};var St={exports:{}},sg=St.exports,Ua;function lg(){return Ua||(Ua=1,function(e,n){(function(t,r){e.exports=r(fe)})(sg,function(t){function r(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var a=r(t),i={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(o){return o+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(i,null,!0),i})}(St)),St.exports}lg();fe.extend(ig);fe.extend(ng);fe.extend(Xu);Ce($o);const Ha=(e,n,t)=>fe(e,n,t).utc(!0).startOf("day"),dg=(e,n)=>{fe.locale("nb");const t=Ha(e,qa),r=Ha(n,qa);let a=t;const i=[{month:a.format("MMMM"),year:a.format("YY")}];for(;a.isBefore(r);)a=a.add(1,"month"),i.push({month:a.format("MMMM"),year:a.format("YY")});return i},ug=e=>e.toString().replace(new RegExp("\\p{Dash_Punctuation}","gu"),"-").replace(/[\p{Space_Separator}\t]/gu," ").replace(/[“”]/g,'"').replace(/[‘’`]/g,"'").replace(/</g,"&lt;").replace(/>/g,"&gt;"),vr=Ce($o),gg=e=>{if(!e)return vr.formatMessage({id:"Malform.Bokmal"});switch(e){case"NN":return vr.formatMessage({id:"Malform.Nynorsk"});case"EN":return vr.formatMessage({id:"Malform.Engelsk"});default:return vr.formatMessage({id:"Malform.Bokmal"})}},kg=e=>e!=null&&e.constructor===Object;var tr=e=>e.type==="checkbox",fn=e=>e instanceof Date,Re=e=>e==null;const Jo=e=>typeof e=="object";var ge=e=>!Re(e)&&!Array.isArray(e)&&Jo(e)&&!fn(e),Wo=e=>ge(e)&&e.target?tr(e.target)?e.target.checked:e.target.value:e,vg=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,zo=(e,n)=>e.has(vg(n)),Eg=e=>{const n=e.constructor&&e.constructor.prototype;return ge(n)&&n.hasOwnProperty("isPrototypeOf")},Yt=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ce(e){let n;const t=Array.isArray(e),r=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)n=new Date(e);else if(e instanceof Set)n=new Set(e);else if(!(Yt&&(e instanceof Blob||r))&&(t||ge(e)))if(n=t?[]:{},!t&&!Eg(e))n=e;else for(const a in e)e.hasOwnProperty(a)&&(n[a]=ce(e[a]));else return e;return n}var Br=e=>Array.isArray(e)?e.filter(Boolean):[],de=e=>e===void 0,U=(e,n,t)=>{if(!n||!ge(e))return t;const r=Br(n.split(/[,[\].]+?/)).reduce((a,i)=>Re(a)?a:a[i],e);return de(r)||r===e?de(e[n])?t:e[n]:r},Ie=e=>typeof e=="boolean",Ct=e=>/^\w*$/.test(e),Xo=e=>Br(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ne=(e,n,t)=>{let r=-1;const a=Ct(n)?[n]:Xo(n),i=a.length,o=i-1;for(;++r<i;){const s=a[r];let l=t;if(r!==o){const d=e[s];l=ge(d)||Array.isArray(d)?d:isNaN(+a[r+1])?{}:[]}if(s==="__proto__"||s==="constructor"||s==="prototype")return;e[s]=l,e=e[s]}return e};const Sr={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Fe={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ze={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Zo=N.createContext(null),Dn=()=>N.useContext(Zo),mg=e=>{const{children:n,...t}=e;return N.createElement(Zo.Provider,{value:t},n)};var Qo=(e,n,t,r=!0)=>{const a={defaultValues:n._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const o=i;return n._proxyFormState[o]!==Fe.all&&(n._proxyFormState[o]=!r||Fe.all),t&&(t[o]=!0),e[o]}});return a},Ae=e=>ge(e)&&!Object.keys(e).length,es=(e,n,t,r)=>{t(e);const{name:a,...i}=e;return Ae(i)||Object.keys(i).length>=Object.keys(n).length||Object.keys(i).find(o=>n[o]===(!r||Fe.all))},$n=e=>Array.isArray(e)?e:[e],ns=(e,n,t)=>!e||!n||e===n||$n(e).some(r=>r&&(t?r===n:r.startsWith(n)||n.startsWith(r)));function $t(e){const n=N.useRef(e);n.current=e,N.useEffect(()=>{const t=!e.disabled&&n.current.subject&&n.current.subject.subscribe({next:n.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function fg(e){const n=Dn(),{control:t=n.control,disabled:r,name:a,exact:i}=e||{},[o,s]=N.useState(t._formState),l=N.useRef(!0),d=N.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),u=N.useRef(a);return u.current=a,$t({disabled:r,next:g=>l.current&&ns(u.current,g.name,i)&&es(g,d.current,t._updateFormState)&&s({...t._formState,...g}),subject:t._subjects.state}),N.useEffect(()=>(l.current=!0,d.current.isValid&&t._updateValid(!0),()=>{l.current=!1}),[t]),N.useMemo(()=>Qo(o,t,d.current,!1),[o,t])}var Ue=e=>typeof e=="string",rs=(e,n,t,r,a)=>Ue(e)?(r&&n.watch.add(e),U(t,e,a)):Array.isArray(e)?e.map(i=>(r&&n.watch.add(i),U(t,i))):(r&&(n.watchAll=!0),t);function Tg(e){const n=Dn(),{control:t=n.control,name:r,defaultValue:a,disabled:i,exact:o}=e||{},s=N.useRef(r);s.current=r,$t({disabled:i,subject:t._subjects.values,next:u=>{ns(s.current,u.name,o)&&d(ce(rs(s.current,t._names,u.values||t._formValues,!1,a)))}});const[l,d]=N.useState(t._getWatch(r,a));return N.useEffect(()=>t._removeUnmounted()),l}function ts(e){const n=Dn(),{name:t,disabled:r,control:a=n.control,shouldUnregister:i}=e,o=zo(a._names.array,t),s=Tg({control:a,name:t,defaultValue:U(a._formValues,t,U(a._defaultValues,t,e.defaultValue)),exact:!0}),l=fg({control:a,name:t,exact:!0}),d=N.useRef(a.register(t,{...e.rules,value:s,...Ie(e.disabled)?{disabled:e.disabled}:{}})),u=N.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!U(l.errors,t)},isDirty:{enumerable:!0,get:()=>!!U(l.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!U(l.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!U(l.validatingFields,t)},error:{enumerable:!0,get:()=>U(l.errors,t)}}),[l,t]),g=N.useMemo(()=>({name:t,value:s,...Ie(r)||l.disabled?{disabled:l.disabled||r}:{},onChange:k=>d.current.onChange({target:{value:Wo(k),name:t},type:Sr.CHANGE}),onBlur:()=>d.current.onBlur({target:{value:U(a._formValues,t),name:t},type:Sr.BLUR}),ref:k=>{const E=U(a._fields,t);E&&k&&(E._f.ref={focus:()=>k.focus(),select:()=>k.select(),setCustomValidity:T=>k.setCustomValidity(T),reportValidity:()=>k.reportValidity()})}}),[t,a._formValues,r,l.disabled,s,a._fields]);return N.useEffect(()=>{const k=a._options.shouldUnregister||i,E=(T,v)=>{const y=U(a._fields,T);y&&y._f&&(y._f.mount=v)};if(E(t,!0),k){const T=ce(U(a._options.defaultValues,t));ne(a._defaultValues,t,T),de(U(a._formValues,t))&&ne(a._formValues,t,T)}return!o&&a.register(t),()=>{(o?k&&!a._state.action:k)?a.unregister(t):E(t,!1)}},[t,a,o,i]),N.useEffect(()=>{a._updateDisabledField({disabled:r,fields:a._fields,name:t})},[r,t,a]),N.useMemo(()=>({field:g,formState:l,fieldState:u}),[g,l,u])}var Rg=(e,n,t,r,a)=>n?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[r]:a||!0}}:{},xa=e=>({isOnSubmit:!e||e===Fe.onSubmit,isOnBlur:e===Fe.onBlur,isOnChange:e===Fe.onChange,isOnAll:e===Fe.all,isOnTouch:e===Fe.onTouched}),Ya=(e,n,t)=>!t&&(n.watchAll||n.watch.has(e)||[...n.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Jn=(e,n,t,r)=>{for(const a of t||Object.keys(e)){const i=U(e,a);if(i){const{_f:o,...s}=i;if(o){if(o.refs&&o.refs[0]&&n(o.refs[0],a)&&!r)return!0;if(o.ref&&n(o.ref,o.name)&&!r)return!0;if(Jn(s,n))break}else if(ge(s)&&Jn(s,n))break}}};var pg=(e,n,t)=>{const r=$n(U(e,t));return ne(r,"root",n[t]),ne(e,t,r),e},Jt=e=>e.type==="file",qe=e=>typeof e=="function",hr=e=>{if(!Yt)return!1;const n=e?e.ownerDocument:0;return e instanceof(n&&n.defaultView?n.defaultView.HTMLElement:HTMLElement)},pr=e=>Ue(e),Wt=e=>e.type==="radio",Nr=e=>e instanceof RegExp;const Ca={value:!1,isValid:!1},$a={value:!0,isValid:!0};var as=e=>{if(Array.isArray(e)){if(e.length>1){const n=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:n,isValid:!!n.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!de(e[0].attributes.value)?de(e[0].value)||e[0].value===""?$a:{value:e[0].value,isValid:!0}:$a:Ca}return Ca};const Ja={isValid:!1,value:null};var is=e=>Array.isArray(e)?e.reduce((n,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:n,Ja):Ja;function Wa(e,n,t="validate"){if(pr(e)||Array.isArray(e)&&e.every(pr)||Ie(e)&&!e)return{type:t,message:pr(e)?e:"",ref:n}}var bn=e=>ge(e)&&!Nr(e)?e:{value:e,message:""},za=async(e,n,t,r,a,i)=>{const{ref:o,refs:s,required:l,maxLength:d,minLength:u,min:g,max:k,pattern:E,validate:T,name:v,valueAsNumber:y,mount:A}=e._f,R=U(t,v);if(!A||n.has(v))return{};const _=s?s[0]:o,O=h=>{a&&_.reportValidity&&(_.setCustomValidity(Ie(h)?"":h||""),_.reportValidity())},p={},D=Wt(o),K=tr(o),L=D||K,M=(y||Jt(o))&&de(o.value)&&de(R)||hr(o)&&o.value===""||R===""||Array.isArray(R)&&!R.length,w=Rg.bind(null,v,r,p),F=(h,S,c,j=ze.maxLength,G=ze.minLength)=>{const C=h?S:c;p[v]={type:h?j:G,message:C,ref:o,...w(h?j:G,C)}};if(i?!Array.isArray(R)||!R.length:l&&(!L&&(M||Re(R))||Ie(R)&&!R||K&&!as(s).isValid||D&&!is(s).isValid)){const{value:h,message:S}=pr(l)?{value:!!l,message:l}:bn(l);if(h&&(p[v]={type:ze.required,message:S,ref:_,...w(ze.required,S)},!r))return O(S),p}if(!M&&(!Re(g)||!Re(k))){let h,S;const c=bn(k),j=bn(g);if(!Re(R)&&!isNaN(R)){const G=o.valueAsNumber||R&&+R;Re(c.value)||(h=G>c.value),Re(j.value)||(S=G<j.value)}else{const G=o.valueAsDate||new Date(R),C=J=>new Date(new Date().toDateString()+" "+J),B=o.type=="time",x=o.type=="week";Ue(c.value)&&R&&(h=B?C(R)>C(c.value):x?R>c.value:G>new Date(c.value)),Ue(j.value)&&R&&(S=B?C(R)<C(j.value):x?R<j.value:G<new Date(j.value))}if((h||S)&&(F(!!h,c.message,j.message,ze.max,ze.min),!r))return O(p[v].message),p}if((d||u)&&!M&&(Ue(R)||i&&Array.isArray(R))){const h=bn(d),S=bn(u),c=!Re(h.value)&&R.length>+h.value,j=!Re(S.value)&&R.length<+S.value;if((c||j)&&(F(c,h.message,S.message),!r))return O(p[v].message),p}if(E&&!M&&Ue(R)){const{value:h,message:S}=bn(E);if(Nr(h)&&!R.match(h)&&(p[v]={type:ze.pattern,message:S,ref:o,...w(ze.pattern,S)},!r))return O(S),p}if(T){if(qe(T)){const h=await T(R,t),S=Wa(h,_);if(S&&(p[v]={...S,...w(ze.validate,S.message)},!r))return O(S.message),p}else if(ge(T)){let h={};for(const S in T){if(!Ae(h)&&!r)break;const c=Wa(await T[S](R,t),_,S);c&&(h={...c,...w(S,c.message)},O(c.message),r&&(p[v]=h))}if(!Ae(h)&&(p[v]={ref:_,...h},!r))return p}}return O(!0),p};function yg(e,n){const t=n.slice(0,-1).length;let r=0;for(;r<t;)e=de(e)?r++:e[n[r++]];return e}function cg(e){for(const n in e)if(e.hasOwnProperty(n)&&!de(e[n]))return!1;return!0}function ke(e,n){const t=Array.isArray(n)?n:Ct(n)?[n]:Xo(n),r=t.length===1?e:yg(e,t),a=t.length-1,i=t[a];return r&&delete r[i],a!==0&&(ge(r)&&Ae(r)||Array.isArray(r)&&cg(r))&&ke(e,t.slice(0,-1)),e}var Qr=()=>{let e=[];return{get observers(){return e},next:a=>{for(const i of e)i.next&&i.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(i=>i!==a)}}),unsubscribe:()=>{e=[]}}},ht=e=>Re(e)||!Jo(e);function nn(e,n){if(ht(e)||ht(n))return e===n;if(fn(e)&&fn(n))return e.getTime()===n.getTime();const t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(const a of t){const i=e[a];if(!r.includes(a))return!1;if(a!=="ref"){const o=n[a];if(fn(i)&&fn(o)||ge(i)&&ge(o)||Array.isArray(i)&&Array.isArray(o)?!nn(i,o):i!==o)return!1}}return!0}var os=e=>e.type==="select-multiple",Ag=e=>Wt(e)||tr(e),et=e=>hr(e)&&e.isConnected,ss=e=>{for(const n in e)if(qe(e[n]))return!0;return!1};function Or(e,n={}){const t=Array.isArray(e);if(ge(e)||t)for(const r in e)Array.isArray(e[r])||ge(e[r])&&!ss(e[r])?(n[r]=Array.isArray(e[r])?[]:{},Or(e[r],n[r])):Re(e[r])||(n[r]=!0);return n}function ls(e,n,t){const r=Array.isArray(e);if(ge(e)||r)for(const a in e)Array.isArray(e[a])||ge(e[a])&&!ss(e[a])?de(n)||ht(t[a])?t[a]=Array.isArray(e[a])?Or(e[a],[]):{...Or(e[a])}:ls(e[a],Re(n)?{}:n[a],t[a]):t[a]=!nn(e[a],n[a]);return t}var Bn=(e,n)=>ls(e,n,Or(n)),ds=(e,{valueAsNumber:n,valueAsDate:t,setValueAs:r})=>de(e)?e:n?e===""?NaN:e&&+e:t&&Ue(e)?new Date(e):r?r(e):e;function nt(e){const n=e.ref;return Jt(n)?n.files:Wt(n)?is(e.refs).value:os(n)?[...n.selectedOptions].map(({value:t})=>t):tr(n)?as(e.refs).value:ds(de(n.value)?e.ref.value:n.value,e)}var bg=(e,n,t,r)=>{const a={};for(const i of e){const o=U(n,i);o&&ne(a,i,o._f)}return{criteriaMode:t,names:[...e],fields:a,shouldUseNativeValidation:r}},qn=e=>de(e)?e:Nr(e)?e.source:ge(e)?Nr(e.value)?e.value.source:e.value:e;const Xa="AsyncFunction";var _g=e=>!!e&&!!e.validate&&!!(qe(e.validate)&&e.validate.constructor.name===Xa||ge(e.validate)&&Object.values(e.validate).find(n=>n.constructor.name===Xa)),Sg=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Za(e,n,t){const r=U(e,t);if(r||Ct(t))return{error:r,name:t};const a=t.split(".");for(;a.length;){const i=a.join("."),o=U(n,i),s=U(e,i);if(o&&!Array.isArray(o)&&t!==i)return{name:t};if(s&&s.type)return{name:i,error:s};a.pop()}return{name:t}}var hg=(e,n,t,r,a)=>a.isOnAll?!1:!t&&a.isOnTouch?!(n||e):(t?r.isOnBlur:a.isOnBlur)?!e:(t?r.isOnChange:a.isOnChange)?e:!0,Ng=(e,n)=>!Br(U(e,n)).length&&ke(e,n);const Og={mode:Fe.onSubmit,reValidateMode:Fe.onChange,shouldFocusError:!0};function Ig(e={}){let n={...Og,...e},t={submitCount:0,isDirty:!1,isLoading:qe(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1},r={},a=ge(n.defaultValues)||ge(n.values)?ce(n.defaultValues||n.values)||{}:{},i=n.shouldUnregister?{}:ce(a),o={action:!1,mount:!1,watch:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},l,d=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={values:Qr(),array:Qr(),state:Qr()},k=xa(n.mode),E=xa(n.reValidateMode),T=n.criteriaMode===Fe.all,v=m=>b=>{clearTimeout(d),d=setTimeout(m,b)},y=async m=>{if(!n.disabled&&(u.isValid||m)){const b=n.resolver?Ae((await L()).errors):await w(r,!0);b!==t.isValid&&g.state.next({isValid:b})}},A=(m,b)=>{!n.disabled&&(u.isValidating||u.validatingFields)&&((m||Array.from(s.mount)).forEach(I=>{I&&(b?ne(t.validatingFields,I,b):ke(t.validatingFields,I))}),g.state.next({validatingFields:t.validatingFields,isValidating:!Ae(t.validatingFields)}))},R=(m,b=[],I,H,q=!0,V=!0)=>{if(H&&I&&!n.disabled){if(o.action=!0,V&&Array.isArray(U(r,m))){const $=I(U(r,m),H.argA,H.argB);q&&ne(r,m,$)}if(V&&Array.isArray(U(t.errors,m))){const $=I(U(t.errors,m),H.argA,H.argB);q&&ne(t.errors,m,$),Ng(t.errors,m)}if(u.touchedFields&&V&&Array.isArray(U(t.touchedFields,m))){const $=I(U(t.touchedFields,m),H.argA,H.argB);q&&ne(t.touchedFields,m,$)}u.dirtyFields&&(t.dirtyFields=Bn(a,i)),g.state.next({name:m,isDirty:h(m,b),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else ne(i,m,b)},_=(m,b)=>{ne(t.errors,m,b),g.state.next({errors:t.errors})},O=m=>{t.errors=m,g.state.next({errors:t.errors,isValid:!1})},p=(m,b,I,H)=>{const q=U(r,m);if(q){const V=U(i,m,de(I)?U(a,m):I);de(V)||H&&H.defaultChecked||b?ne(i,m,b?V:nt(q._f)):j(m,V),o.mount&&y()}},D=(m,b,I,H,q)=>{let V=!1,$=!1;const W={name:m};if(!n.disabled){const ve=!!(U(r,m)&&U(r,m)._f&&U(r,m)._f.disabled);if(!I||H){u.isDirty&&($=t.isDirty,t.isDirty=W.isDirty=h(),V=$!==W.isDirty);const Ee=ve||nn(U(a,m),b);$=!!(!ve&&U(t.dirtyFields,m)),Ee||ve?ke(t.dirtyFields,m):ne(t.dirtyFields,m,!0),W.dirtyFields=t.dirtyFields,V=V||u.dirtyFields&&$!==!Ee}if(I){const Ee=U(t.touchedFields,m);Ee||(ne(t.touchedFields,m,I),W.touchedFields=t.touchedFields,V=V||u.touchedFields&&Ee!==I)}V&&q&&g.state.next(W)}return V?W:{}},K=(m,b,I,H)=>{const q=U(t.errors,m),V=u.isValid&&Ie(b)&&t.isValid!==b;if(n.delayError&&I?(l=v(()=>_(m,I)),l(n.delayError)):(clearTimeout(d),l=null,I?ne(t.errors,m,I):ke(t.errors,m)),(I?!nn(q,I):q)||!Ae(H)||V){const $={...H,...V&&Ie(b)?{isValid:b}:{},errors:t.errors,name:m};t={...t,...$},g.state.next($)}},L=async m=>{A(m,!0);const b=await n.resolver(i,n.context,bg(m||s.mount,r,n.criteriaMode,n.shouldUseNativeValidation));return A(m),b},M=async m=>{const{errors:b}=await L(m);if(m)for(const I of m){const H=U(b,I);H?ne(t.errors,I,H):ke(t.errors,I)}else t.errors=b;return b},w=async(m,b,I={valid:!0})=>{for(const H in m){const q=m[H];if(q){const{_f:V,...$}=q;if(V){const W=s.array.has(V.name),ve=q._f&&_g(q._f);ve&&u.validatingFields&&A([H],!0);const Ee=await za(q,s.disabled,i,T,n.shouldUseNativeValidation&&!b,W);if(ve&&u.validatingFields&&A([H]),Ee[V.name]&&(I.valid=!1,b))break;!b&&(U(Ee,V.name)?W?pg(t.errors,Ee,V.name):ne(t.errors,V.name,Ee[V.name]):ke(t.errors,V.name))}!Ae($)&&await w($,b,I)}}return I.valid},F=()=>{for(const m of s.unMount){const b=U(r,m);b&&(b._f.refs?b._f.refs.every(I=>!et(I)):!et(b._f.ref))&&vn(m)}s.unMount=new Set},h=(m,b)=>!n.disabled&&(m&&b&&ne(i,m,b),!nn(Q(),a)),S=(m,b,I)=>rs(m,s,{...o.mount?i:de(b)?a:Ue(m)?{[m]:b}:b},I,b),c=m=>Br(U(o.mount?i:a,m,n.shouldUnregister?U(a,m,[]):[])),j=(m,b,I={})=>{const H=U(r,m);let q=b;if(H){const V=H._f;V&&(!V.disabled&&ne(i,m,ds(b,V)),q=hr(V.ref)&&Re(b)?"":b,os(V.ref)?[...V.ref.options].forEach($=>$.selected=q.includes($.value)):V.refs?tr(V.ref)?V.refs.length>1?V.refs.forEach($=>(!$.defaultChecked||!$.disabled)&&($.checked=Array.isArray(q)?!!q.find(W=>W===$.value):q===$.value)):V.refs[0]&&(V.refs[0].checked=!!q):V.refs.forEach($=>$.checked=$.value===q):Jt(V.ref)?V.ref.value="":(V.ref.value=q,V.ref.type||g.values.next({name:m,values:{...i}})))}(I.shouldDirty||I.shouldTouch)&&D(m,q,I.shouldTouch,I.shouldDirty,!0),I.shouldValidate&&J(m)},G=(m,b,I)=>{for(const H in b){const q=b[H],V=`${m}.${H}`,$=U(r,V);(s.array.has(m)||ge(q)||$&&!$._f)&&!fn(q)?G(V,q,I):j(V,q,I)}},C=(m,b,I={})=>{const H=U(r,m),q=s.array.has(m),V=ce(b);ne(i,m,V),q?(g.array.next({name:m,values:{...i}}),(u.isDirty||u.dirtyFields)&&I.shouldDirty&&g.state.next({name:m,dirtyFields:Bn(a,i),isDirty:h(m,V)})):H&&!H._f&&!Re(V)?G(m,V,I):j(m,V,I),Ya(m,s)&&g.state.next({...t}),g.values.next({name:o.mount?m:void 0,values:{...i}})},B=async m=>{o.mount=!0;const b=m.target;let I=b.name,H=!0;const q=U(r,I),V=()=>b.type?nt(q._f):Wo(m),$=W=>{H=Number.isNaN(W)||fn(W)&&isNaN(W.getTime())||nn(W,U(i,I,W))};if(q){let W,ve;const Ee=V(),en=m.type===Sr.BLUR||m.type===Sr.FOCUS_OUT,Qs=!Sg(q._f)&&!n.resolver&&!U(t.errors,I)&&!q._f.deps||hg(en,U(t.touchedFields,I),t.isSubmitted,E,k),Cr=Ya(I,s,en);ne(i,I,Ee),en?(q._f.onBlur&&q._f.onBlur(m),l&&l(0)):q._f.onChange&&q._f.onChange(m);const $r=D(I,Ee,en,!1),el=!Ae($r)||Cr;if(!en&&g.values.next({name:I,type:m.type,values:{...i}}),Qs)return u.isValid&&(n.mode==="onBlur"&&en?y():en||y()),el&&g.state.next({name:I,...Cr?{}:$r});if(!en&&Cr&&g.state.next({...t}),n.resolver){const{errors:fa}=await L([I]);if($(Ee),H){const nl=Za(t.errors,r,I),Ta=Za(fa,r,nl.name||I);W=Ta.error,I=Ta.name,ve=Ae(fa)}}else A([I],!0),W=(await za(q,s.disabled,i,T,n.shouldUseNativeValidation))[I],A([I]),$(Ee),H&&(W?ve=!1:u.isValid&&(ve=await w(r,!0)));H&&(q._f.deps&&J(q._f.deps),K(I,ve,W,$r))}},x=(m,b)=>{if(U(t.errors,b)&&m.focus)return m.focus(),1},J=async(m,b={})=>{let I,H;const q=$n(m);if(n.resolver){const V=await M(de(m)?m:q);I=Ae(V),H=m?!q.some($=>U(V,$)):I}else m?(H=(await Promise.all(q.map(async V=>{const $=U(r,V);return await w($&&$._f?{[V]:$}:$)}))).every(Boolean),!(!H&&!t.isValid)&&y()):H=I=await w(r);return g.state.next({...!Ue(m)||u.isValid&&I!==t.isValid?{}:{name:m},...n.resolver||!m?{isValid:I}:{},errors:t.errors}),b.shouldFocus&&!H&&Jn(r,x,m?q:s.mount),H},Q=m=>{const b={...o.mount?i:a};return de(m)?b:Ue(m)?U(b,m):m.map(I=>U(b,I))},le=(m,b)=>({invalid:!!U((b||t).errors,m),isDirty:!!U((b||t).dirtyFields,m),error:U((b||t).errors,m),isValidating:!!U(t.validatingFields,m),isTouched:!!U((b||t).touchedFields,m)}),_e=m=>{m&&$n(m).forEach(b=>ke(t.errors,b)),g.state.next({errors:m?t.errors:{}})},Pe=(m,b,I)=>{const H=(U(r,m,{_f:{}})._f||{}).ref,q=U(t.errors,m)||{},{ref:V,message:$,type:W,...ve}=q;ne(t.errors,m,{...ve,...b,ref:H}),g.state.next({name:m,errors:t.errors,isValid:!1}),I&&I.shouldFocus&&H&&H.focus&&H.focus()},We=(m,b)=>qe(m)?g.values.subscribe({next:I=>m(S(void 0,b),I)}):S(m,b,!0),vn=(m,b={})=>{for(const I of m?$n(m):s.mount)s.mount.delete(I),s.array.delete(I),b.keepValue||(ke(r,I),ke(i,I)),!b.keepError&&ke(t.errors,I),!b.keepDirty&&ke(t.dirtyFields,I),!b.keepTouched&&ke(t.touchedFields,I),!b.keepIsValidating&&ke(t.validatingFields,I),!n.shouldUnregister&&!b.keepDefaultValue&&ke(a,I);g.values.next({values:{...i}}),g.state.next({...t,...b.keepDirty?{isDirty:h()}:{}}),!b.keepIsValid&&y()},De=({disabled:m,name:b,field:I,fields:H})=>{(Ie(m)&&o.mount||m||s.disabled.has(b))&&(m?s.disabled.add(b):s.disabled.delete(b),D(b,nt(I?I._f:U(H,b)._f),!1,!1,!0))},re=(m,b={})=>{let I=U(r,m);const H=Ie(b.disabled)||Ie(n.disabled);return ne(r,m,{...I||{},_f:{...I&&I._f?I._f:{ref:{name:m}},name:m,mount:!0,...b}}),s.mount.add(m),I?De({field:I,disabled:Ie(b.disabled)?b.disabled:n.disabled,name:m}):p(m,!0,b.value),{...H?{disabled:b.disabled||n.disabled}:{},...n.progressive?{required:!!b.required,min:qn(b.min),max:qn(b.max),minLength:qn(b.minLength),maxLength:qn(b.maxLength),pattern:qn(b.pattern)}:{},name:m,onChange:B,onBlur:B,ref:q=>{if(q){re(m,b),I=U(r,m);const V=de(q.value)&&q.querySelectorAll&&q.querySelectorAll("input,select,textarea")[0]||q,$=Ag(V),W=I._f.refs||[];if($?W.find(ve=>ve===V):V===I._f.ref)return;ne(r,m,{_f:{...I._f,...$?{refs:[...W.filter(et),V,...Array.isArray(U(a,m))?[{}]:[]],ref:{type:V.type,name:m}}:{ref:V}}}),p(m,!1,void 0,V)}else I=U(r,m,{}),I._f&&(I._f.mount=!1),(n.shouldUnregister||b.shouldUnregister)&&!(zo(s.array,m)&&o.action)&&s.unMount.add(m)}}},se=()=>n.shouldFocusError&&Jn(r,x,s.mount),he=m=>{Ie(m)&&(g.state.next({disabled:m}),Jn(r,(b,I)=>{const H=U(r,I);H&&(b.disabled=H._f.disabled||m,Array.isArray(H._f.refs)&&H._f.refs.forEach(q=>{q.disabled=H._f.disabled||m}))},0,!1))},ye=(m,b)=>async I=>{let H;I&&(I.preventDefault&&I.preventDefault(),I.persist&&I.persist());let q=ce(i);if(s.disabled.size)for(const V of s.disabled)ne(q,V,void 0);if(g.state.next({isSubmitting:!0}),n.resolver){const{errors:V,values:$}=await L();t.errors=V,q=$}else await w(r);if(ke(t.errors,"root"),Ae(t.errors)){g.state.next({errors:{}});try{await m(q,I)}catch(V){H=V}}else b&&await b({...t.errors},I),se(),setTimeout(se);if(g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ae(t.errors)&&!H,submitCount:t.submitCount+1,errors:t.errors}),H)throw H},Ne=(m,b={})=>{U(r,m)&&(de(b.defaultValue)?C(m,ce(U(a,m))):(C(m,b.defaultValue),ne(a,m,ce(b.defaultValue))),b.keepTouched||ke(t.touchedFields,m),b.keepDirty||(ke(t.dirtyFields,m),t.isDirty=b.defaultValue?h(m,ce(U(a,m))):h()),b.keepError||(ke(t.errors,m),u.isValid&&y()),g.state.next({...t}))},An=(m,b={})=>{const I=m?ce(m):a,H=ce(I),q=Ae(m),V=q?a:H;if(b.keepDefaultValues||(a=I),!b.keepValues){if(b.keepDirtyValues){const $=new Set([...s.mount,...Object.keys(Bn(a,i))]);for(const W of Array.from($))U(t.dirtyFields,W)?ne(V,W,U(i,W)):C(W,U(V,W))}else{if(Yt&&de(m))for(const $ of s.mount){const W=U(r,$);if(W&&W._f){const ve=Array.isArray(W._f.refs)?W._f.refs[0]:W._f.ref;if(hr(ve)){const Ee=ve.closest("form");if(Ee){Ee.reset();break}}}}r={}}i=n.shouldUnregister?b.keepDefaultValues?ce(a):{}:ce(V),g.array.next({values:{...V}}),g.values.next({values:{...V}})}s={mount:b.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!u.isValid||!!b.keepIsValid||!!b.keepDirtyValues,o.watch=!!n.shouldUnregister,g.state.next({submitCount:b.keepSubmitCount?t.submitCount:0,isDirty:q?!1:b.keepDirty?t.isDirty:!!(b.keepDefaultValues&&!nn(m,a)),isSubmitted:b.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:q?{}:b.keepDirtyValues?b.keepDefaultValues&&i?Bn(a,i):t.dirtyFields:b.keepDefaultValues&&m?Bn(a,m):b.keepDirty?t.dirtyFields:{},touchedFields:b.keepTouched?t.touchedFields:{},errors:b.keepErrors?t.errors:{},isSubmitSuccessful:b.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},En=(m,b)=>An(qe(m)?m(i):m,b);return{control:{register:re,unregister:vn,getFieldState:le,handleSubmit:ye,setError:Pe,_executeSchema:L,_getWatch:S,_getDirty:h,_updateValid:y,_removeUnmounted:F,_updateFieldArray:R,_updateDisabledField:De,_getFieldArray:c,_reset:An,_resetDefaultValues:()=>qe(n.defaultValues)&&n.defaultValues().then(m=>{En(m,n.resetOptions),g.state.next({isLoading:!1})}),_updateFormState:m=>{t={...t,...m}},_disableForm:he,_subjects:g,_proxyFormState:u,_setErrors:O,get _fields(){return r},get _formValues(){return i},get _state(){return o},set _state(m){o=m},get _defaultValues(){return a},get _names(){return s},set _names(m){s=m},get _formState(){return t},set _formState(m){t=m},get _options(){return n},set _options(m){n={...n,...m}}},trigger:J,register:re,handleSubmit:ye,watch:We,setValue:C,getValues:Q,reset:En,resetField:Ne,clearErrors:_e,unregister:vn,setError:Pe,setFocus:(m,b={})=>{const I=U(r,m),H=I&&I._f;if(H){const q=H.refs?H.refs[0]:H.ref;q.focus&&(q.focus(),b.shouldSelect&&qe(q.select)&&q.select())}},getFieldState:le}}function Lg(e={}){const n=N.useRef(void 0),t=N.useRef(void 0),[r,a]=N.useState({isDirty:!1,isValidating:!1,isLoading:qe(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:qe(e.defaultValues)?void 0:e.defaultValues});n.current||(n.current={...Ig(e),formState:r});const i=n.current.control;return i._options=e,$t({subject:i._subjects.state,next:o=>{es(o,i._proxyFormState,i._updateFormState,!0)&&a({...i._formState})}}),N.useEffect(()=>i._disableForm(e.disabled),[i,e.disabled]),N.useEffect(()=>{if(i._proxyFormState.isDirty){const o=i._getDirty();o!==r.isDirty&&i._subjects.state.next({isDirty:o})}},[i,r.isDirty]),N.useEffect(()=>{e.values&&!nn(e.values,t.current)?(i._reset(e.values,i._options.resetOptions),t.current=e.values,a(o=>({...o}))):i._resetDefaultValues()},[e.values,i]),N.useEffect(()=>{e.errors&&i._setErrors(e.errors)},[e.errors,i]),N.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),N.useEffect(()=>{e.shouldUnregister&&i._subjects.values.next({values:i._getWatch()})},[e.shouldUnregister,i]),n.current.formState=Qo(r,i),n.current}function us(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(t=us(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function z(){for(var e,n,t=0,r="",a=arguments.length;t<a;t++)(e=arguments[t])&&(n=us(e))&&(r&&(r+=" "),r+=n);return r}function gs(e){return n=>{e.forEach(t=>{typeof t=="function"?t(n):t!=null&&(t.current=n)})}}function ks(...e){return N.useCallback(gs(e),e)}function Kg(e,n){const t=Object.assign({},n);for(const r in n){const a=e[r],i=n[r];/^on[A-Z]/.test(r)?a&&i?t[r]=(...s)=>{i(...s),a(...s)}:a&&(t[r]=a):r==="style"?t[r]=Object.assign(Object.assign({},a),i):r==="className"&&(t[r]=[a,i].filter(Boolean).join(" "))}return Object.assign(Object.assign({},e),t)}var Pg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Fn=f.forwardRef((e,n)=>{var t;const{children:r}=e,a=Pg(e,["children"]);if(f.isValidElement(r)){const i=Object.prototype.propertyIsEnumerable.call(r.props,"ref")?r.props.ref:r.ref;return f.cloneElement(r,Object.assign(Object.assign({},Kg(a,r.props)),{ref:n?gs([n,i]):i}))}if(f.Children.count(r)>1){const i=new Error("Aksel: Components using 'asChild' expects to recieve a single React element child.");throw i.name="SlotError",(t=Error.captureStackTrace)===null||t===void 0||t.call(Error,i,Fn),i}return null});var Dg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};function Fg(e,n){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${n}`}function zt(e={}){const{name:n,hookName:t="useContext",providerName:r="Provider",errorMessage:a,defaultValue:i}=e,o=f.createContext(i),s=f.forwardRef((d,u)=>{var{children:g}=d,k=Dg(d,["children"]);const E=N.useMemo(()=>k,Object.values(k));return N.createElement(o.Provider,{value:u?Object.assign(Object.assign({},E),{ref:u}):E},g)});function l(d=!0){var u;const g=f.useContext(o);if(!g&&d){const k=new Error(a??Fg(t,r));throw k.name="ContextError",(u=Error.captureStackTrace)===null||u===void 0||u.call(Error,k,l),k}return g}return o.displayName=n,[s,l]}const[Mg,wR]=zt({hookName:"useRenameCSS",name:"RenameCSS",providerName:"RenameCSSProvider",defaultValue:{cn:z}}),jg=({children:e})=>N.createElement(Mg,{cn:z},e),[wg,ar]=zt({hookName:"useTheme",name:"ThemeProvider",providerName:"ThemeProvider"}),Vg=f.forwardRef((e,n)=>{var t;const r=ar(!1),{children:a,className:i,asChild:o=!1,theme:s=(t=r==null?void 0:r.theme)!==null&&t!==void 0?t:"light",hasBackground:l=!0}=e,u=l??(r===void 0&&e.theme!==void 0),g=o?Fn:"div";return N.createElement(wg,{theme:s},N.createElement(jg,null,N.createElement(g,{ref:n,className:z("navds-theme",i,s),"data-background":u},a)))}),Mn=e=>z({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Gg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Xt=f.forwardRef((e,n)=>{var{className:t,size:r="medium",as:a="p",spacing:i,truncate:o,weight:s="regular",align:l,visuallyHidden:d,textColor:u}=e,g=Gg(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return N.createElement(a,Object.assign({},g,{ref:n,className:z(t,"navds-body-long",`navds-body-long--${r}`,Mn({spacing:i,truncate:o,weight:s,align:l,visuallyHidden:d,textColor:u}))}))});var Bg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const pe=f.forwardRef((e,n)=>{var{className:t,size:r="medium",as:a="p",spacing:i,truncate:o,weight:s="regular",align:l,visuallyHidden:d,textColor:u}=e,g=Bg(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return N.createElement(a,Object.assign({},g,{ref:n,className:z(t,"navds-body-short",`navds-body-short--${r}`,Mn({spacing:i,truncate:o,weight:s,align:l,visuallyHidden:d,textColor:u}))}))});var qg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Ug=f.forwardRef((e,n)=>{var{className:t,size:r="medium",spacing:a,uppercase:i,as:o="p",truncate:s,weight:l="regular",align:d,visuallyHidden:u,textColor:g}=e,k=qg(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return N.createElement(o,Object.assign({},k,{ref:n,className:z(t,"navds-detail",Mn({spacing:a,truncate:s,weight:l,align:d,visuallyHidden:u,textColor:g,uppercase:i}),{"navds-detail--small":r==="small"})}))});var Hg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const vs=f.forwardRef((e,n)=>{var{children:t,className:r,size:a,spacing:i,as:o="p",showIcon:s=!1}=e,l=Hg(e,["children","className","size","spacing","as","showIcon"]);return N.createElement(o,Object.assign({},l,{ref:n,className:z("navds-error-message","navds-label",r,Mn({spacing:i}),{"navds-label--small":a==="small","navds-error-message--show-icon":s})}),s&&N.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},N.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var xg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Yg=f.forwardRef((e,n)=>{var{level:t="1",size:r,className:a,as:i,spacing:o,align:s,visuallyHidden:l,textColor:d}=e,u=xg(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const g=i??`h${t}`;return N.createElement(g,Object.assign({},u,{ref:n,className:z(a,"navds-heading",`navds-heading--${r}`,Mn({spacing:o,align:s,visuallyHidden:l,textColor:d}))}))});var Cg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};f.forwardRef((e,n)=>{var{className:t,spacing:r,as:a="p"}=e,i=Cg(e,["className","spacing","as"]);return N.createElement(a,Object.assign({},i,{ref:n,className:z(t,"navds-ingress",{"navds-typo--spacing":!!r})}))});var $g=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const jn=f.forwardRef((e,n)=>{var{className:t,size:r="medium",as:a="label",spacing:i,visuallyHidden:o,textColor:s}=e,l=$g(e,["className","size","as","spacing","visuallyHidden","textColor"]);return N.createElement(a,Object.assign({},l,{ref:n,className:z(t,"navds-label",Mn({spacing:i,visuallyHidden:o,textColor:s}),{"navds-label--small":r==="small"})}))});function Es(e,n=166,t=!1){let r;function a(...i){const o=()=>{r=void 0,e.apply(this,i)};!r&&t&&o(),clearTimeout(r),r=setTimeout(o,n)}return a.clear=()=>{clearTimeout(r)},a}function Qe(e,n){const t=Object.entries(e).filter(([r])=>!n.includes(r));return Object.fromEntries(t)}const Qa=globalThis!=null&&globalThis.document?f.useLayoutEffect:()=>{};let ei=0;function Jg(e){const[n,t]=f.useState(e),r=e||n;return f.useEffect(()=>{n==null&&(ei+=1,t(`aksel-id-${ei}`))},[n]),r}const ni=N.useId;function pn(e){var n;if(ni!==void 0){const t=ni();return e??t.replace(/(:)/g,"")}return(n=Jg(e))!==null&&n!==void 0?n:""}function ri(e,n=[]){const t=f.useRef(e);return f.useEffect(()=>{t.current=e}),f.useCallback((...r)=>{var a;return(a=t.current)===null||a===void 0?void 0:a.call(t,...r)},n)}function ms({value:e,defaultValue:n,onChange:t}){const r=ri(t),[a,i]=f.useState(n),o=e!==void 0,s=o?e:a,l=ri(d=>{const g=typeof d=="function"?d(s):d;o||i(g),r(g)},[o,r,s]);return[s,l]}let ti=0;function Wg(e){const[n,t]=f.useState(e),r=e||n;return f.useEffect(()=>{n==null&&(ti+=1,t(`aksel-icon-${ti}`))},[n]),r}const ai=N.useId;function $e(e){var n;return ai!==void 0?ai().replace(/(:)/g,""):(n=Wg(e))!==null&&n!==void 0?n:""}var zg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Xg=f.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=zg(e,["title","titleId"]);let i=$e();return i=t?r||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var Zg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const fs=f.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=Zg(e,["title","titleId"]);let i=$e();return i=t?r||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Qg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const ek=f.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=Qg(e,["title","titleId"]);let i=$e();return i=t?r||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var nk=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const rk=f.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=nk(e,["title","titleId"]);let i=$e();return i=t?r||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var tk=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const ak=f.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=tk(e,["title","titleId"]);let i=$e();return i=t?r||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var ik=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Ts=f.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=ik(e,["title","titleId"]);let i=$e();return i=t?r||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var ok=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const sk=f.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=ok(e,["title","titleId"]);let i=$e();return i=t?r||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var lk=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const dk=f.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=lk(e,["title","titleId"]);let i=$e();return i=t?r||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var uk=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const gk=f.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=uk(e,["title","titleId"]);let i=$e();return i=t?r||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var kk=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const vk=f.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=kk(e,["title","titleId"]);let i=$e();return i=t?r||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},a),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Zt(e,n,{checkForDefaultPrevented:t=!0}={}){return function(a){if(e==null||e(a),t===!1||!a.defaultPrevented)return n==null?void 0:n(a)}}const[VR,Ek]=zt({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function rt(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function Un(e){return(n,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,s=t!=null&&t.width?String(t.width):o;a=e.formattingValues[s]||e.formattingValues[o]}else{const o=e.defaultWidth,s=t!=null&&t.width?String(t.width):e.defaultWidth;a=e.values[s]||e.values[o]}const i=e.argumentCallback?e.argumentCallback(n):n;return a[i]}}function Hn(e){return(n,t={})=>{const r=t.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=n.match(a);if(!i)return null;const o=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?fk(s,g=>g.test(o)):mk(s,g=>g.test(o));let d;d=e.valueCallback?e.valueCallback(l):l,d=t.valueCallback?t.valueCallback(d):d;const u=n.slice(o.length);return{value:d,rest:u}}}function mk(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function fk(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function Tk(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const a=r[0],i=n.match(e.parsePattern);if(!i)return null;let o=e.valueCallback?e.valueCallback(i[0]):i[0];o=t.valueCallback?t.valueCallback(o):o;const s=n.slice(a.length);return{value:o,rest:s}}}const Rk={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},pk=(e,n,t)=>{let r;const a=Rk[e];return typeof a=="string"?r=a:n===1?r=a.one:r=a.other.replace("{{count}}",String(n)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"om "+r:r+" siden":r},yk={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},ck={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Ak={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},bk={date:rt({formats:yk,defaultWidth:"full"}),time:rt({formats:ck,defaultWidth:"full"}),dateTime:rt({formats:Ak,defaultWidth:"full"})},_k={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Sk=(e,n,t,r)=>_k[e],hk={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Nk={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Ok={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Ik={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Lk={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Kk=(e,n)=>Number(e)+".",Pk={ordinalNumber:Kk,era:Un({values:hk,defaultWidth:"wide"}),quarter:Un({values:Nk,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Un({values:Ok,defaultWidth:"wide"}),day:Un({values:Ik,defaultWidth:"wide"}),dayPeriod:Un({values:Lk,defaultWidth:"wide"})},Dk=/^(\d+)\.?/i,Fk=/\d+/i,Mk={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},jk={any:[/^f/i,/^e/i]},wk={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Vk={any:[/1/i,/2/i,/3/i,/4/i]},Gk={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Bk={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},qk={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Uk={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Hk={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},xk={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Yk={ordinalNumber:Tk({matchPattern:Dk,parsePattern:Fk,valueCallback:e=>parseInt(e,10)}),era:Hn({matchPatterns:Mk,defaultMatchWidth:"wide",parsePatterns:jk,defaultParseWidth:"any"}),quarter:Hn({matchPatterns:wk,defaultMatchWidth:"wide",parsePatterns:Vk,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Hn({matchPatterns:Gk,defaultMatchWidth:"wide",parsePatterns:Bk,defaultParseWidth:"any"}),day:Hn({matchPatterns:qk,defaultMatchWidth:"wide",parsePatterns:Uk,defaultParseWidth:"any"}),dayPeriod:Hn({matchPatterns:Hk,defaultMatchWidth:"any",parsePatterns:xk,defaultParseWidth:"any"})},Ck={code:"nb",formatDistance:pk,formatLong:bk,formatRelative:Sk,localize:Pk,match:Yk,options:{weekStartsOn:1,firstWeekContainsDate:4}},$k={global:{dateLocale:Ck,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},Jk=f.createContext({locale:$k}),Rs=()=>f.useContext(Jk);var Wk=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const zk=f.forwardRef((e,n)=>{var t,r,a,{rootElement:i,asChild:o}=e,s=Wk(e,["rootElement","asChild"]);const l=ar(!1),d=(t=Rs())===null||t===void 0?void 0:t.rootElement,u=(r=i??d)!==null&&r!==void 0?r:(a=globalThis==null?void 0:globalThis.document)===null||a===void 0?void 0:a.body,g=o?Fn:"div";return l?u?ut.createPortal(N.createElement(Vg,{theme:l.theme,asChild:!0,hasBackground:!1},N.createElement(g,Object.assign({ref:n,"data-aksel-portal":""},s))),u):null:u?ut.createPortal(N.createElement(g,Object.assign({ref:n,"data-aksel-portal":""},s)),u):null}),On=Math.min,Tn=Math.max,Ir=Math.round,Er=Math.floor,He=e=>({x:e,y:e}),Xk={left:"right",right:"left",bottom:"top",top:"bottom"},Zk={start:"end",end:"start"};function Nt(e,n,t){return Tn(e,On(n,t))}function ir(e,n){return typeof e=="function"?e(n):e}function yn(e){return e.split("-")[0]}function or(e){return e.split("-")[1]}function ps(e){return e==="x"?"y":"x"}function Qt(e){return e==="y"?"height":"width"}function In(e){return["top","bottom"].includes(yn(e))?"y":"x"}function ea(e){return ps(In(e))}function Qk(e,n,t){t===void 0&&(t=!1);const r=or(e),a=ea(e),i=Qt(a);let o=a==="x"?r===(t?"end":"start")?"right":"left":r==="start"?"bottom":"top";return n.reference[i]>n.floating[i]&&(o=Lr(o)),[o,Lr(o)]}function ev(e){const n=Lr(e);return[Ot(e),n,Ot(n)]}function Ot(e){return e.replace(/start|end/g,n=>Zk[n])}function nv(e,n,t){const r=["left","right"],a=["right","left"],i=["top","bottom"],o=["bottom","top"];switch(e){case"top":case"bottom":return t?n?a:r:n?r:a;case"left":case"right":return n?i:o;default:return[]}}function rv(e,n,t,r){const a=or(e);let i=nv(yn(e),t==="start",r);return a&&(i=i.map(o=>o+"-"+a),n&&(i=i.concat(i.map(Ot)))),i}function Lr(e){return e.replace(/left|right|bottom|top/g,n=>Xk[n])}function tv(e){return{top:0,right:0,bottom:0,left:0,...e}}function ys(e){return typeof e!="number"?tv(e):{top:e,right:e,bottom:e,left:e}}function Kr(e){const{x:n,y:t,width:r,height:a}=e;return{width:r,height:a,top:t,left:n,right:n+r,bottom:t+a,x:n,y:t}}function ii(e,n,t){let{reference:r,floating:a}=e;const i=In(n),o=ea(n),s=Qt(o),l=yn(n),d=i==="y",u=r.x+r.width/2-a.width/2,g=r.y+r.height/2-a.height/2,k=r[s]/2-a[s]/2;let E;switch(l){case"top":E={x:u,y:r.y-a.height};break;case"bottom":E={x:u,y:r.y+r.height};break;case"right":E={x:r.x+r.width,y:g};break;case"left":E={x:r.x-a.width,y:g};break;default:E={x:r.x,y:r.y}}switch(or(n)){case"start":E[o]-=k*(t&&d?-1:1);break;case"end":E[o]+=k*(t&&d?-1:1);break}return E}const av=async(e,n,t)=>{const{placement:r="bottom",strategy:a="absolute",middleware:i=[],platform:o}=t,s=i.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(n));let d=await o.getElementRects({reference:e,floating:n,strategy:a}),{x:u,y:g}=ii(d,r,l),k=r,E={},T=0;for(let v=0;v<s.length;v++){const{name:y,fn:A}=s[v],{x:R,y:_,data:O,reset:p}=await A({x:u,y:g,initialPlacement:r,placement:k,strategy:a,middlewareData:E,rects:d,platform:o,elements:{reference:e,floating:n}});u=R??u,g=_??g,E={...E,[y]:{...E[y],...O}},p&&T<=50&&(T++,typeof p=="object"&&(p.placement&&(k=p.placement),p.rects&&(d=p.rects===!0?await o.getElementRects({reference:e,floating:n,strategy:a}):p.rects),{x:u,y:g}=ii(d,k,l)),v=-1)}return{x:u,y:g,placement:k,strategy:a,middlewareData:E}};async function cs(e,n){var t;n===void 0&&(n={});const{x:r,y:a,platform:i,rects:o,elements:s,strategy:l}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:k=!1,padding:E=0}=ir(n,e),T=ys(E),y=s[k?g==="floating"?"reference":"floating":g],A=Kr(await i.getClippingRect({element:(t=await(i.isElement==null?void 0:i.isElement(y)))==null||t?y:y.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:d,rootBoundary:u,strategy:l})),R=g==="floating"?{x:r,y:a,width:o.floating.width,height:o.floating.height}:o.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),O=await(i.isElement==null?void 0:i.isElement(_))?await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1}:{x:1,y:1},p=Kr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:R,offsetParent:_,strategy:l}):R);return{top:(A.top-p.top+T.top)/O.y,bottom:(p.bottom-A.bottom+T.bottom)/O.y,left:(A.left-p.left+T.left)/O.x,right:(p.right-A.right+T.right)/O.x}}const iv=e=>({name:"arrow",options:e,async fn(n){const{x:t,y:r,placement:a,rects:i,platform:o,elements:s,middlewareData:l}=n,{element:d,padding:u=0}=ir(e,n)||{};if(d==null)return{};const g=ys(u),k={x:t,y:r},E=ea(a),T=Qt(E),v=await o.getDimensions(d),y=E==="y",A=y?"top":"left",R=y?"bottom":"right",_=y?"clientHeight":"clientWidth",O=i.reference[T]+i.reference[E]-k[E]-i.floating[T],p=k[E]-i.reference[E],D=await(o.getOffsetParent==null?void 0:o.getOffsetParent(d));let K=D?D[_]:0;(!K||!await(o.isElement==null?void 0:o.isElement(D)))&&(K=s.floating[_]||i.floating[T]);const L=O/2-p/2,M=K/2-v[T]/2-1,w=On(g[A],M),F=On(g[R],M),h=w,S=K-v[T]-F,c=K/2-v[T]/2+L,j=Nt(h,c,S),G=!l.arrow&&or(a)!=null&&c!==j&&i.reference[T]/2-(c<h?w:F)-v[T]/2<0,C=G?c<h?c-h:c-S:0;return{[E]:k[E]+C,data:{[E]:j,centerOffset:c-j-C,...G&&{alignmentOffset:C}},reset:G}}}),ov=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var t,r;const{placement:a,middlewareData:i,rects:o,initialPlacement:s,platform:l,elements:d}=n,{mainAxis:u=!0,crossAxis:g=!0,fallbackPlacements:k,fallbackStrategy:E="bestFit",fallbackAxisSideDirection:T="none",flipAlignment:v=!0,...y}=ir(e,n);if((t=i.arrow)!=null&&t.alignmentOffset)return{};const A=yn(a),R=In(s),_=yn(s)===s,O=await(l.isRTL==null?void 0:l.isRTL(d.floating)),p=k||(_||!v?[Lr(s)]:ev(s)),D=T!=="none";!k&&D&&p.push(...rv(s,v,T,O));const K=[s,...p],L=await cs(n,y),M=[];let w=((r=i.flip)==null?void 0:r.overflows)||[];if(u&&M.push(L[A]),g){const c=Qk(a,o,O);M.push(L[c[0]],L[c[1]])}if(w=[...w,{placement:a,overflows:M}],!M.every(c=>c<=0)){var F,h;const c=(((F=i.flip)==null?void 0:F.index)||0)+1,j=K[c];if(j)return{data:{index:c,overflows:w},reset:{placement:j}};let G=(h=w.filter(C=>C.overflows[0]<=0).sort((C,B)=>C.overflows[1]-B.overflows[1])[0])==null?void 0:h.placement;if(!G)switch(E){case"bestFit":{var S;const C=(S=w.filter(B=>{if(D){const x=In(B.placement);return x===R||x==="y"}return!0}).map(B=>[B.placement,B.overflows.filter(x=>x>0).reduce((x,J)=>x+J,0)]).sort((B,x)=>B[1]-x[1])[0])==null?void 0:S[0];C&&(G=C);break}case"initialPlacement":G=s;break}if(a!==G)return{reset:{placement:G}}}return{}}}};async function sv(e,n){const{placement:t,platform:r,elements:a}=e,i=await(r.isRTL==null?void 0:r.isRTL(a.floating)),o=yn(t),s=or(t),l=In(t)==="y",d=["left","top"].includes(o)?-1:1,u=i&&l?-1:1,g=ir(n,e);let{mainAxis:k,crossAxis:E,alignmentAxis:T}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return s&&typeof T=="number"&&(E=s==="end"?T*-1:T),l?{x:E*u,y:k*d}:{x:k*d,y:E*u}}const lv=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){var t,r;const{x:a,y:i,placement:o,middlewareData:s}=n,l=await sv(n,e);return o===((t=s.offset)==null?void 0:t.placement)&&(r=s.arrow)!=null&&r.alignmentOffset?{}:{x:a+l.x,y:i+l.y,data:{...l,placement:o}}}}},dv=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:t,y:r,placement:a}=n,{mainAxis:i=!0,crossAxis:o=!1,limiter:s={fn:y=>{let{x:A,y:R}=y;return{x:A,y:R}}},...l}=ir(e,n),d={x:t,y:r},u=await cs(n,l),g=In(yn(a)),k=ps(g);let E=d[k],T=d[g];if(i){const y=k==="y"?"top":"left",A=k==="y"?"bottom":"right",R=E+u[y],_=E-u[A];E=Nt(R,E,_)}if(o){const y=g==="y"?"top":"left",A=g==="y"?"bottom":"right",R=T+u[y],_=T-u[A];T=Nt(R,T,_)}const v=s.fn({...n,[k]:E,[g]:T});return{...v,data:{x:v.x-t,y:v.y-r,enabled:{[k]:i,[g]:o}}}}}};function qr(){return typeof window<"u"}function wn(e){return As(e)?(e.nodeName||"").toLowerCase():"#document"}function Se(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function Je(e){var n;return(n=(As(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function As(e){return qr()?e instanceof Node||e instanceof Se(e).Node:!1}function Me(e){return qr()?e instanceof Element||e instanceof Se(e).Element:!1}function Ye(e){return qr()?e instanceof HTMLElement||e instanceof Se(e).HTMLElement:!1}function oi(e){return!qr()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Se(e).ShadowRoot}function sr(e){const{overflow:n,overflowX:t,overflowY:r,display:a}=je(e);return/auto|scroll|overlay|hidden|clip/.test(n+r+t)&&!["inline","contents"].includes(a)}function uv(e){return["table","td","th"].includes(wn(e))}function Ur(e){return[":popover-open",":modal"].some(n=>{try{return e.matches(n)}catch{return!1}})}function na(e){const n=ra(),t=Me(e)?je(e):e;return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!n&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!n&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(t.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(t.contain||"").includes(r))}function gv(e){let n=gn(e);for(;Ye(n)&&!Ln(n);){if(na(n))return n;if(Ur(n))return null;n=gn(n)}return null}function ra(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ln(e){return["html","body","#document"].includes(wn(e))}function je(e){return Se(e).getComputedStyle(e)}function Hr(e){return Me(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function gn(e){if(wn(e)==="html")return e;const n=e.assignedSlot||e.parentNode||oi(e)&&e.host||Je(e);return oi(n)?n.host:n}function bs(e){const n=gn(e);return Ln(n)?e.ownerDocument?e.ownerDocument.body:e.body:Ye(n)&&sr(n)?n:bs(n)}function dn(e,n,t){var r;n===void 0&&(n=[]),t===void 0&&(t=!0);const a=bs(e),i=a===((r=e.ownerDocument)==null?void 0:r.body),o=Se(a);if(i){const s=It(o);return n.concat(o,o.visualViewport||[],sr(a)?a:[],s&&t?dn(s):[])}return n.concat(a,dn(a,[],t))}function It(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function _s(e){const n=je(e);let t=parseFloat(n.width)||0,r=parseFloat(n.height)||0;const a=Ye(e),i=a?e.offsetWidth:t,o=a?e.offsetHeight:r,s=Ir(t)!==i||Ir(r)!==o;return s&&(t=i,r=o),{width:t,height:r,$:s}}function ta(e){return Me(e)?e:e.contextElement}function _n(e){const n=ta(e);if(!Ye(n))return He(1);const t=n.getBoundingClientRect(),{width:r,height:a,$:i}=_s(n);let o=(i?Ir(t.width):t.width)/r,s=(i?Ir(t.height):t.height)/a;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const kv=He(0);function Ss(e){const n=Se(e);return!ra()||!n.visualViewport?kv:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function vv(e,n,t){return n===void 0&&(n=!1),!t||n&&t!==Se(e)?!1:n}function cn(e,n,t,r){n===void 0&&(n=!1),t===void 0&&(t=!1);const a=e.getBoundingClientRect(),i=ta(e);let o=He(1);n&&(r?Me(r)&&(o=_n(r)):o=_n(e));const s=vv(i,t,r)?Ss(i):He(0);let l=(a.left+s.x)/o.x,d=(a.top+s.y)/o.y,u=a.width/o.x,g=a.height/o.y;if(i){const k=Se(i),E=r&&Me(r)?Se(r):r;let T=k,v=It(T);for(;v&&r&&E!==T;){const y=_n(v),A=v.getBoundingClientRect(),R=je(v),_=A.left+(v.clientLeft+parseFloat(R.paddingLeft))*y.x,O=A.top+(v.clientTop+parseFloat(R.paddingTop))*y.y;l*=y.x,d*=y.y,u*=y.x,g*=y.y,l+=_,d+=O,T=Se(v),v=It(T)}}return Kr({width:u,height:g,x:l,y:d})}function aa(e,n){const t=Hr(e).scrollLeft;return n?n.left+t:cn(Je(e)).left+t}function hs(e,n,t){t===void 0&&(t=!1);const r=e.getBoundingClientRect(),a=r.left+n.scrollLeft-(t?0:aa(e,r)),i=r.top+n.scrollTop;return{x:a,y:i}}function Ev(e){let{elements:n,rect:t,offsetParent:r,strategy:a}=e;const i=a==="fixed",o=Je(r),s=n?Ur(n.floating):!1;if(r===o||s&&i)return t;let l={scrollLeft:0,scrollTop:0},d=He(1);const u=He(0),g=Ye(r);if((g||!g&&!i)&&((wn(r)!=="body"||sr(o))&&(l=Hr(r)),Ye(r))){const E=cn(r);d=_n(r),u.x=E.x+r.clientLeft,u.y=E.y+r.clientTop}const k=o&&!g&&!i?hs(o,l,!0):He(0);return{width:t.width*d.x,height:t.height*d.y,x:t.x*d.x-l.scrollLeft*d.x+u.x+k.x,y:t.y*d.y-l.scrollTop*d.y+u.y+k.y}}function mv(e){return Array.from(e.getClientRects())}function fv(e){const n=Je(e),t=Hr(e),r=e.ownerDocument.body,a=Tn(n.scrollWidth,n.clientWidth,r.scrollWidth,r.clientWidth),i=Tn(n.scrollHeight,n.clientHeight,r.scrollHeight,r.clientHeight);let o=-t.scrollLeft+aa(e);const s=-t.scrollTop;return je(r).direction==="rtl"&&(o+=Tn(n.clientWidth,r.clientWidth)-a),{width:a,height:i,x:o,y:s}}function Tv(e,n){const t=Se(e),r=Je(e),a=t.visualViewport;let i=r.clientWidth,o=r.clientHeight,s=0,l=0;if(a){i=a.width,o=a.height;const d=ra();(!d||d&&n==="fixed")&&(s=a.offsetLeft,l=a.offsetTop)}return{width:i,height:o,x:s,y:l}}function Rv(e,n){const t=cn(e,!0,n==="fixed"),r=t.top+e.clientTop,a=t.left+e.clientLeft,i=Ye(e)?_n(e):He(1),o=e.clientWidth*i.x,s=e.clientHeight*i.y,l=a*i.x,d=r*i.y;return{width:o,height:s,x:l,y:d}}function si(e,n,t){let r;if(n==="viewport")r=Tv(e,t);else if(n==="document")r=fv(Je(e));else if(Me(n))r=Rv(n,t);else{const a=Ss(e);r={x:n.x-a.x,y:n.y-a.y,width:n.width,height:n.height}}return Kr(r)}function Ns(e,n){const t=gn(e);return t===n||!Me(t)||Ln(t)?!1:je(t).position==="fixed"||Ns(t,n)}function pv(e,n){const t=n.get(e);if(t)return t;let r=dn(e,[],!1).filter(s=>Me(s)&&wn(s)!=="body"),a=null;const i=je(e).position==="fixed";let o=i?gn(e):e;for(;Me(o)&&!Ln(o);){const s=je(o),l=na(o);!l&&s.position==="fixed"&&(a=null),(i?!l&&!a:!l&&s.position==="static"&&!!a&&["absolute","fixed"].includes(a.position)||sr(o)&&!l&&Ns(e,o))?r=r.filter(u=>u!==o):a=s,o=gn(o)}return n.set(e,r),r}function yv(e){let{element:n,boundary:t,rootBoundary:r,strategy:a}=e;const o=[...t==="clippingAncestors"?Ur(n)?[]:pv(n,this._c):[].concat(t),r],s=o[0],l=o.reduce((d,u)=>{const g=si(n,u,a);return d.top=Tn(g.top,d.top),d.right=On(g.right,d.right),d.bottom=On(g.bottom,d.bottom),d.left=Tn(g.left,d.left),d},si(n,s,a));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function cv(e){const{width:n,height:t}=_s(e);return{width:n,height:t}}function Av(e,n,t){const r=Ye(n),a=Je(n),i=t==="fixed",o=cn(e,!0,i,n);let s={scrollLeft:0,scrollTop:0};const l=He(0);if(r||!r&&!i)if((wn(n)!=="body"||sr(a))&&(s=Hr(n)),r){const k=cn(n,!0,i,n);l.x=k.x+n.clientLeft,l.y=k.y+n.clientTop}else a&&(l.x=aa(a));const d=a&&!r&&!i?hs(a,s):He(0),u=o.left+s.scrollLeft-l.x-d.x,g=o.top+s.scrollTop-l.y-d.y;return{x:u,y:g,width:o.width,height:o.height}}function tt(e){return je(e).position==="static"}function li(e,n){if(!Ye(e)||je(e).position==="fixed")return null;if(n)return n(e);let t=e.offsetParent;return Je(e)===t&&(t=t.ownerDocument.body),t}function Os(e,n){const t=Se(e);if(Ur(e))return t;if(!Ye(e)){let a=gn(e);for(;a&&!Ln(a);){if(Me(a)&&!tt(a))return a;a=gn(a)}return t}let r=li(e,n);for(;r&&uv(r)&&tt(r);)r=li(r,n);return r&&Ln(r)&&tt(r)&&!na(r)?t:r||gv(e)||t}const bv=async function(e){const n=this.getOffsetParent||Os,t=this.getDimensions,r=await t(e.floating);return{reference:Av(e.reference,await n(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function _v(e){return je(e).direction==="rtl"}const Sv={convertOffsetParentRelativeRectToViewportRelativeRect:Ev,getDocumentElement:Je,getClippingRect:yv,getOffsetParent:Os,getElementRects:bv,getClientRects:mv,getDimensions:cv,getScale:_n,isElement:Me,isRTL:_v};function hv(e,n){let t=null,r;const a=Je(e);function i(){var s;clearTimeout(r),(s=t)==null||s.disconnect(),t=null}function o(s,l){s===void 0&&(s=!1),l===void 0&&(l=1),i();const{left:d,top:u,width:g,height:k}=e.getBoundingClientRect();if(s||n(),!g||!k)return;const E=Er(u),T=Er(a.clientWidth-(d+g)),v=Er(a.clientHeight-(u+k)),y=Er(d),R={rootMargin:-E+"px "+-T+"px "+-v+"px "+-y+"px",threshold:Tn(0,On(1,l))||1};let _=!0;function O(p){const D=p[0].intersectionRatio;if(D!==l){if(!_)return o();D?o(!1,D):r=setTimeout(()=>{o(!1,1e-7)},1e3)}_=!1}try{t=new IntersectionObserver(O,{...R,root:a.ownerDocument})}catch{t=new IntersectionObserver(O,R)}t.observe(e)}return o(!0),i}function di(e,n,t,r){r===void 0&&(r={});const{ancestorScroll:a=!0,ancestorResize:i=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,d=ta(e),u=a||i?[...d?dn(d):[],...dn(n)]:[];u.forEach(A=>{a&&A.addEventListener("scroll",t,{passive:!0}),i&&A.addEventListener("resize",t)});const g=d&&s?hv(d,t):null;let k=-1,E=null;o&&(E=new ResizeObserver(A=>{let[R]=A;R&&R.target===d&&E&&(E.unobserve(n),cancelAnimationFrame(k),k=requestAnimationFrame(()=>{var _;(_=E)==null||_.observe(n)})),t()}),d&&!l&&E.observe(d),E.observe(n));let T,v=l?cn(e):null;l&&y();function y(){const A=cn(e);v&&(A.x!==v.x||A.y!==v.y||A.width!==v.width||A.height!==v.height)&&t(),v=A,T=requestAnimationFrame(y)}return t(),()=>{var A;u.forEach(R=>{a&&R.removeEventListener("scroll",t),i&&R.removeEventListener("resize",t)}),g==null||g(),(A=E)==null||A.disconnect(),E=null,l&&cancelAnimationFrame(T)}}const Nv=lv,Ov=dv,Iv=ov,ui=iv,Lv=(e,n,t)=>{const r=new Map,a={platform:Sv,...t},i={...a.platform,_c:r};return av(e,n,{...a,platform:i})};var yr=typeof document<"u"?f.useLayoutEffect:f.useEffect;function Pr(e,n){if(e===n)return!0;if(typeof e!=typeof n)return!1;if(typeof e=="function"&&e.toString()===n.toString())return!0;let t,r,a;if(e&&n&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==n.length)return!1;for(r=t;r--!==0;)if(!Pr(e[r],n[r]))return!1;return!0}if(a=Object.keys(e),t=a.length,t!==Object.keys(n).length)return!1;for(r=t;r--!==0;)if(!{}.hasOwnProperty.call(n,a[r]))return!1;for(r=t;r--!==0;){const i=a[r];if(!(i==="_owner"&&e.$$typeof)&&!Pr(e[i],n[i]))return!1}return!0}return e!==e&&n!==n}function Is(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function gi(e,n){const t=Is(e);return Math.round(n*t)/t}function at(e){const n=f.useRef(e);return yr(()=>{n.current=e}),n}function Kv(e){e===void 0&&(e={});const{placement:n="bottom",strategy:t="absolute",middleware:r=[],platform:a,elements:{reference:i,floating:o}={},transform:s=!0,whileElementsMounted:l,open:d}=e,[u,g]=f.useState({x:0,y:0,strategy:t,placement:n,middlewareData:{},isPositioned:!1}),[k,E]=f.useState(r);Pr(k,r)||E(r);const[T,v]=f.useState(null),[y,A]=f.useState(null),R=f.useCallback(B=>{B!==D.current&&(D.current=B,v(B))},[]),_=f.useCallback(B=>{B!==K.current&&(K.current=B,A(B))},[]),O=i||T,p=o||y,D=f.useRef(null),K=f.useRef(null),L=f.useRef(u),M=l!=null,w=at(l),F=at(a),h=at(d),S=f.useCallback(()=>{if(!D.current||!K.current)return;const B={placement:n,strategy:t,middleware:k};F.current&&(B.platform=F.current),Lv(D.current,K.current,B).then(x=>{const J={...x,isPositioned:h.current!==!1};c.current&&!Pr(L.current,J)&&(L.current=J,al.flushSync(()=>{g(J)}))})},[k,n,t,F,h]);yr(()=>{d===!1&&L.current.isPositioned&&(L.current.isPositioned=!1,g(B=>({...B,isPositioned:!1})))},[d]);const c=f.useRef(!1);yr(()=>(c.current=!0,()=>{c.current=!1}),[]),yr(()=>{if(O&&(D.current=O),p&&(K.current=p),O&&p){if(w.current)return w.current(O,p,S);S()}},[O,p,S,w,M]);const j=f.useMemo(()=>({reference:D,floating:K,setReference:R,setFloating:_}),[R,_]),G=f.useMemo(()=>({reference:O,floating:p}),[O,p]),C=f.useMemo(()=>{const B={position:t,left:0,top:0};if(!G.floating)return B;const x=gi(G.floating,u.x),J=gi(G.floating,u.y);return s?{...B,transform:"translate("+x+"px, "+J+"px)",...Is(G.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:x,top:J}},[t,s,G.floating,u.x,u.y]);return f.useMemo(()=>({...u,update:S,refs:j,elements:G,floatingStyles:C}),[u,S,j,G,C])}const Pv=e=>{function n(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:r,padding:a}=typeof e=="function"?e(t):e;return r&&n(r)?r.current!=null?ui({element:r.current,padding:a}).fn(t):{}:r?ui({element:r,padding:a}).fn(t):{}}}},Dv=(e,n)=>({...Nv(e),options:[e,n]}),Fv=(e,n)=>({...Ov(e),options:[e,n]}),Mv=(e,n)=>({...Iv(e),options:[e,n]}),jv=(e,n)=>({...Pv(e),options:[e,n]}),ki=/(\w+)/g;function wv(e,n){const t=Array.isArray(e)?e:Vv(e);for(const r of n){if(!r)continue;let a=r;for(let i=0;i<t.length;i++){const o=a[t[i]];o!==void 0&&(a=o)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function Vv(e){const n=[];let t=ki.exec(e);for(;t;){const[,r,a]=t;n.push(r||a),t=ki.exec(e)}return n}const Gv=/{[^}]*}/g;function xr(e,...n){const t=Rs(),r=t.translations||[],a=[...n,...Array.isArray(r)?r.map(o=>o[e]):[r[e]],t.locale[e]];return(o,s)=>{const l=wv(o,a);return s?l.replace(Gv,d=>{const u=d.substring(1,d.length-1);if(s[u]===void 0){const g=JSON.stringify(s);throw new Error(`Error translating key '${o}'. No replacement syntax ({}) found for key '${u}'. The following replacements were passed: '${g}'`)}return s[u]}):l}}var Bv=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const qv=f.forwardRef((e,n)=>{var{className:t,size:r="medium",title:a,transparent:i=!1,variant:o="neutral",id:s}=e,l=Bv(e,["className","size","title","transparent","variant","id"]);const d=pn(),u=xr("Loader");return N.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${d}`,ref:n,className:z("navds-loader",t,`navds-loader--${r}`,`navds-loader--${o}`,{"navds-loader--transparent":i}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},Qe(l,["children"])),N.createElement("title",{id:s??`loader-${d}`},a||u("title")),N.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),N.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var Uv=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Ls=f.forwardRef((e,n)=>{var{as:t="button",variant:r="primary",className:a,children:i,size:o="medium",loading:s=!1,disabled:l,icon:d,iconPosition:u="left",onKeyUp:g}=e,k=Uv(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp"]);const E=l||s?Qe(k,["href"]):k,T=v=>{v.key===" "&&!l&&!s&&v.currentTarget.click()};return N.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},E,{ref:n,onKeyUp:Zt(g,T),className:z(a,"navds-button",`navds-button--${r}`,`navds-button--${o}`,{"navds-button--loading":s,"navds-button--icon-only":!!d&&!i,"navds-button--disabled":l??s}),disabled:l??s?!0:void 0}),d&&u==="left"&&N.createElement("span",{className:"navds-button__icon"},d),s&&N.createElement(qv,{size:o}),i&&N.createElement(jn,{as:"span",size:o==="medium"?"medium":"small"},i),d&&u==="right"&&N.createElement("span",{className:"navds-button__icon"},d))});var Hv=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const xv={error:vk,warning:rk,info:ak,success:Xg},Yv=f.forwardRef((e,n)=>{var{children:t,className:r,variant:a,size:i="medium",fullWidth:o=!1,contentMaxWidth:s=!0,inline:l=!1,closeButton:d=!1,onClose:u}=e,g=Hv(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const k=xr("Alert"),E=xv[a];return N.createElement("div",Object.assign({},g,{ref:n,className:z(r,"navds-alert",`navds-alert--${a}`,`navds-alert--${i}`,{"navds-alert--full-width":o,"navds-alert--inline":l,"navds-alert--close-button":d})}),N.createElement(E,{title:k(a),className:"navds-alert__icon"}),N.createElement(Xt,{as:"div",size:i,className:z("navds-alert__wrapper",s&&"navds-alert__wrapper--maxwidth")},t),d&&!l&&N.createElement("div",{className:"navds-alert__button-wrapper"},N.createElement(Ls,{className:"navds-alert__button",size:"small",variant:"tertiary-neutral",onClick:u,type:"button",icon:N.createElement(gk,{title:["error","warning"].includes(a)?k("closeAlert"):k("closeMessage")})})))}),Ks=()=>N.createElement(Ts,{"aria-hidden":!0,className:"navds-form-field__readonly-icon"}),Cv=()=>N.createElement(Ts,{title:xr("global")("readOnly"),className:"navds-form-field__readonly-icon"}),Dr=f.createContext(null),ia=(e,n)=>{var t,r,a;const{size:i,error:o,errorId:s}=e,l=f.useContext(Dr),d=pn(),u=(t=e.id)!==null&&t!==void 0?t:`${n}-${d}`,g=s??`${n}-error-${d}`,k=`${n}-description-${d}`,E=(l==null?void 0:l.disabled)||e.disabled,T=((l==null?void 0:l.readOnly)||e.readOnly)&&!E||void 0,v=!E&&!T&&!!(o||l!=null&&l.error),y=!E&&!T&&!!o&&typeof o!="boolean",A=Object.assign({},v?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:y,hasError:v,errorId:g,inputDescriptionId:k,size:(r=i??(l==null?void 0:l.size))!==null&&r!==void 0?r:"medium",readOnly:T,inputProps:Object.assign(Object.assign({id:u},A),{"aria-describedby":z(e["aria-describedby"],{[k]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[g]:y,[(a=l==null?void 0:l.errorId)!==null&&a!==void 0?a:""]:v&&!!(l!=null&&l.error)})||void 0,disabled:E})}};function Ps(e){return Ds(e)?(e.nodeName||"").toLowerCase():"#document"}function lr(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function $v(e){var n;return(n=(Ds(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function Ds(e){return e instanceof Node||e instanceof lr(e).Node}function be(e){return e instanceof Element||e instanceof lr(e).Element}function Fs(e){return e instanceof HTMLElement||e instanceof lr(e).HTMLElement}function Lt(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof lr(e).ShadowRoot}function Jv(e){return["html","body","#document"].includes(Ps(e))}function Wv(e){return lr(e).getComputedStyle(e)}function zv(e){if(Ps(e)==="html")return e;const n=e.assignedSlot||e.parentNode||Lt(e)&&e.host||$v(e);return Lt(n)?n.host:n}function Xv(e){let n=e.activeElement;for(;((t=n)==null||(r=t.shadowRoot)==null?void 0:r.activeElement)!=null;){var t,r;n=n.shadowRoot.activeElement}return n}function un(e,n){if(!e||!n)return!1;const t=n.getRootNode&&n.getRootNode();if(e.contains(n))return!0;if(t&&Lt(t)){let r=n;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function Zv(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function Qv(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(n=>{let{brand:t,version:r}=n;return t+"/"+r}).join(" "):navigator.userAgent}function eE(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const n=/Android/i;return(n.test(Zv())||n.test(Qv()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function nE(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function Ms(e,n){const t=["mouse","pen"];return t.push("",void 0),t.includes(e)}function rE(e){return"nativeEvent"in e}function tE(e){return e.matches("html,body")}function Ze(e){return(e==null?void 0:e.ownerDocument)||document}function cr(e,n){if(n==null)return!1;if("composedPath"in e)return e.composedPath().includes(n);const t=e;return t.target!=null&&n.contains(t.target)}function js(e){return"composedPath"in e?e.composedPath()[0]:e.target}var Xn=typeof document<"u"?f.useLayoutEffect:f.useEffect;let it=!1,aE=0;const vi=()=>"floating-ui-"+aE++;function iE(){const[e,n]=f.useState(()=>it?vi():void 0);return Xn(()=>{e==null&&n(vi())},[]),f.useEffect(()=>{it||(it=!0)},[]),e}const oE=mo.useId,sE=oE||iE;function lE(){const e=new Map;return{emit(n,t){var r;(r=e.get(n))==null||r.forEach(a=>a(t))},on(n,t){e.set(n,[...e.get(n)||[],t])},off(n,t){var r;e.set(n,((r=e.get(n))==null?void 0:r.filter(a=>a!==t))||[])}}}const dE=f.createContext(null),uE=f.createContext(null),ws=()=>{var e;return((e=f.useContext(dE))==null?void 0:e.id)||null},oa=()=>f.useContext(uE);function sa(e){return"data-floating-ui-"+e}function Ei(e){const n=f.useRef(e);return Xn(()=>{n.current=e}),n}const mi=sa("safe-polygon");function ot(e,n,t){return t&&!Ms(t)?0:typeof e=="number"?e:e==null?void 0:e[n]}function gE(e,n){n===void 0&&(n={});const{open:t,onOpenChange:r,dataRef:a,events:i,elements:{domReference:o,floating:s},refs:l}=e,{enabled:d=!0,delay:u=0,handleClose:g=null,mouseOnly:k=!1,restMs:E=0,move:T=!0}=n,v=oa(),y=ws(),A=Ei(g),R=Ei(u),_=f.useRef(),O=f.useRef(),p=f.useRef(),D=f.useRef(),K=f.useRef(!0),L=f.useRef(!1),M=f.useRef(()=>{}),w=f.useCallback(()=>{var c;const j=(c=a.current.openEvent)==null?void 0:c.type;return(j==null?void 0:j.includes("mouse"))&&j!=="mousedown"},[a]);f.useEffect(()=>{if(!d)return;function c(){clearTimeout(O.current),clearTimeout(D.current),K.current=!0}return i.on("dismiss",c),()=>{i.off("dismiss",c)}},[d,i]),f.useEffect(()=>{if(!d||!A.current||!t)return;function c(G){w()&&r(!1,G)}const j=Ze(s).documentElement;return j.addEventListener("mouseleave",c),()=>{j.removeEventListener("mouseleave",c)}},[s,t,r,d,A,a,w]);const F=f.useCallback(function(c,j){j===void 0&&(j=!0);const G=ot(R.current,"close",_.current);G&&!p.current?(clearTimeout(O.current),O.current=setTimeout(()=>r(!1,c),G)):j&&(clearTimeout(O.current),r(!1,c))},[R,r]),h=f.useCallback(()=>{M.current(),p.current=void 0},[]),S=f.useCallback(()=>{if(L.current){const c=Ze(l.floating.current).body;c.style.pointerEvents="",c.removeAttribute(mi),L.current=!1}},[l]);return f.useEffect(()=>{if(!d)return;function c(){return a.current.openEvent?["click","mousedown"].includes(a.current.openEvent.type):!1}function j(B){if(clearTimeout(O.current),K.current=!1,k&&!Ms(_.current)||E>0&&ot(R.current,"open")===0)return;const x=ot(R.current,"open",_.current);x?O.current=setTimeout(()=>{r(!0,B)},x):r(!0,B)}function G(B){if(c())return;M.current();const x=Ze(s);if(clearTimeout(D.current),A.current){t||clearTimeout(O.current),p.current=A.current({...e,tree:v,x:B.clientX,y:B.clientY,onClose(){S(),h(),F(B)}});const Q=p.current;x.addEventListener("mousemove",Q),M.current=()=>{x.removeEventListener("mousemove",Q)};return}(_.current==="touch"?!un(s,B.relatedTarget):!0)&&F(B)}function C(B){c()||A.current==null||A.current({...e,tree:v,x:B.clientX,y:B.clientY,onClose(){S(),h(),F(B)}})(B)}if(be(o)){const B=o;return t&&B.addEventListener("mouseleave",C),s==null||s.addEventListener("mouseleave",C),T&&B.addEventListener("mousemove",j,{once:!0}),B.addEventListener("mouseenter",j),B.addEventListener("mouseleave",G),()=>{t&&B.removeEventListener("mouseleave",C),s==null||s.removeEventListener("mouseleave",C),T&&B.removeEventListener("mousemove",j),B.removeEventListener("mouseenter",j),B.removeEventListener("mouseleave",G)}}},[o,s,d,e,k,E,T,F,h,S,r,t,v,R,A,a]),Xn(()=>{var c;if(d&&t&&(c=A.current)!=null&&c.__options.blockPointerEvents&&w()){const C=Ze(s).body;if(C.setAttribute(mi,""),C.style.pointerEvents="none",L.current=!0,be(o)&&s){var j,G;const B=o,x=v==null||(j=v.nodesRef.current.find(J=>J.id===y))==null||(G=j.context)==null?void 0:G.elements.floating;return x&&(x.style.pointerEvents=""),B.style.pointerEvents="auto",s.style.pointerEvents="auto",()=>{B.style.pointerEvents="",s.style.pointerEvents=""}}}},[d,t,y,s,o,v,A,a,w]),Xn(()=>{t||(_.current=void 0,h(),S())},[t,h,S]),f.useEffect(()=>()=>{h(),clearTimeout(O.current),clearTimeout(D.current),S()},[d,o,h,S]),f.useMemo(()=>{if(!d)return{};function c(j){_.current=j.pointerType}return{reference:{onPointerDown:c,onPointerEnter:c,onMouseMove(j){t||E===0||(clearTimeout(D.current),D.current=setTimeout(()=>{K.current||r(!0,j.nativeEvent)},E))}},floating:{onMouseEnter(){clearTimeout(O.current)},onMouseLeave(j){i.emit("dismiss",{type:"mouseLeave",data:{returnFocus:!1}}),F(j.nativeEvent,!1)}}}},[i,d,E,t,r,F])}function Ar(e,n){let t=e.filter(a=>{var i;return a.parentId===n&&((i=a.context)==null?void 0:i.open)}),r=t;for(;r.length;)r=e.filter(a=>{var i;return(i=r)==null?void 0:i.some(o=>{var s;return a.parentId===o.id&&((s=a.context)==null?void 0:s.open)})}),t=t.concat(r);return t}const kE=mo.useInsertionEffect,vE=kE||(e=>e());function br(e){const n=f.useRef(()=>{});return vE(()=>{n.current=e}),f.useCallback(function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return n.current==null?void 0:n.current(...r)},[])}const EE={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},mE={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},fE=e=>{var n,t;return{escapeKeyBubbles:typeof e=="boolean"?e:(n=e==null?void 0:e.escapeKey)!=null?n:!1,outsidePressBubbles:typeof e=="boolean"?e:(t=e==null?void 0:e.outsidePress)!=null?t:!0}};function TE(e,n){n===void 0&&(n={});const{open:t,onOpenChange:r,events:a,nodeId:i,elements:{reference:o,domReference:s,floating:l},dataRef:d}=e,{enabled:u=!0,escapeKey:g=!0,outsidePress:k=!0,outsidePressEvent:E="pointerdown",referencePress:T=!1,referencePressEvent:v="pointerdown",ancestorScroll:y=!1,bubbles:A}=n,R=oa(),_=ws()!=null,O=br(typeof k=="function"?k:()=>!1),p=typeof k=="function"?O:k,D=f.useRef(!1),{escapeKeyBubbles:K,outsidePressBubbles:L}=fE(A),M=br(F=>{if(!t||!u||!g||F.key!=="Escape")return;const h=R?Ar(R.nodesRef.current,i):[];if(!K&&(F.stopPropagation(),h.length>0)){let S=!0;if(h.forEach(c=>{var j;if((j=c.context)!=null&&j.open&&!c.context.dataRef.current.__escapeKeyBubbles){S=!1;return}}),!S)return}a.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1,rE(F)?F.nativeEvent:F)}),w=br(F=>{const h=D.current;if(D.current=!1,h||typeof p=="function"&&!p(F))return;const S=js(F),c="["+sa("inert")+"]",j=Ze(l).querySelectorAll(c);let G=be(S)?S:null;for(;G&&!Jv(G);){const x=zv(G);if(x===Ze(l).body||!be(x))break;G=x}if(j.length&&be(S)&&!tE(S)&&!un(S,l)&&Array.from(j).every(x=>!un(G,x)))return;if(Fs(S)&&l){const x=S.clientWidth>0&&S.scrollWidth>S.clientWidth,J=S.clientHeight>0&&S.scrollHeight>S.clientHeight;let Q=J&&F.offsetX>S.clientWidth;if(J&&Wv(S).direction==="rtl"&&(Q=F.offsetX<=S.offsetWidth-S.clientWidth),Q||x&&F.offsetY>S.clientHeight)return}const C=R&&Ar(R.nodesRef.current,i).some(x=>{var J;return cr(F,(J=x.context)==null?void 0:J.elements.floating)});if(cr(F,l)||cr(F,s)||C)return;const B=R?Ar(R.nodesRef.current,i):[];if(B.length>0){let x=!0;if(B.forEach(J=>{var Q;if((Q=J.context)!=null&&Q.open&&!J.context.dataRef.current.__outsidePressBubbles){x=!1;return}}),!x)return}a.emit("dismiss",{type:"outsidePress",data:{returnFocus:_?{preventScroll:!0}:eE(F)||nE(F)}}),r(!1,F)});return f.useEffect(()=>{if(!t||!u)return;d.current.__escapeKeyBubbles=K,d.current.__outsidePressBubbles=L;function F(c){r(!1,c)}const h=Ze(l);g&&h.addEventListener("keydown",M),p&&h.addEventListener(E,w);let S=[];return y&&(be(s)&&(S=dn(s)),be(l)&&(S=S.concat(dn(l))),!be(o)&&o&&o.contextElement&&(S=S.concat(dn(o.contextElement)))),S=S.filter(c=>{var j;return c!==((j=h.defaultView)==null?void 0:j.visualViewport)}),S.forEach(c=>{c.addEventListener("scroll",F,{passive:!0})}),()=>{g&&h.removeEventListener("keydown",M),p&&h.removeEventListener(E,w),S.forEach(c=>{c.removeEventListener("scroll",F)})}},[d,l,s,o,g,p,E,t,r,y,u,K,L,M,w]),f.useEffect(()=>{D.current=!1},[p,E]),f.useMemo(()=>u?{reference:{onKeyDown:M,[EE[v]]:F=>{T&&(a.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1,F.nativeEvent))}},floating:{onKeyDown:M,[mE[E]]:()=>{D.current=!0}}}:{},[u,a,T,E,v,r,M])}function RE(e){var n;e===void 0&&(e={});const{open:t=!1,onOpenChange:r,nodeId:a}=e,[i,o]=f.useState(null),s=((n=e.elements)==null?void 0:n.reference)||i,l=Kv(e),d=oa(),u=br((O,p)=>{O&&(k.current.openEvent=p),r==null||r(O,p)}),g=f.useRef(null),k=f.useRef({}),E=f.useState(()=>lE())[0],T=sE(),v=f.useCallback(O=>{const p=be(O)?{getBoundingClientRect:()=>O.getBoundingClientRect(),contextElement:O}:O;l.refs.setReference(p)},[l.refs]),y=f.useCallback(O=>{(be(O)||O===null)&&(g.current=O,o(O)),(be(l.refs.reference.current)||l.refs.reference.current===null||O!==null&&!be(O))&&l.refs.setReference(O)},[l.refs]),A=f.useMemo(()=>({...l.refs,setReference:y,setPositionReference:v,domReference:g}),[l.refs,y,v]),R=f.useMemo(()=>({...l.elements,domReference:s}),[l.elements,s]),_=f.useMemo(()=>({...l,refs:A,elements:R,dataRef:k,nodeId:a,floatingId:T,events:E,open:t,onOpenChange:u}),[l,a,T,E,t,u,A,R]);return Xn(()=>{const O=d==null?void 0:d.nodesRef.current.find(p=>p.id===a);O&&(O.context=_)}),f.useMemo(()=>({...l,context:_,refs:A,elements:R}),[l,A,R,_])}function pE(e,n){n===void 0&&(n={});const{open:t,onOpenChange:r,dataRef:a,events:i,refs:o,elements:{floating:s,domReference:l}}=e,{enabled:d=!0,keyboardOnly:u=!0}=n,g=f.useRef(""),k=f.useRef(!1),E=f.useRef();return f.useEffect(()=>{if(!d)return;const v=Ze(s).defaultView||window;function y(){!t&&Fs(l)&&l===Xv(Ze(l))&&(k.current=!0)}return v.addEventListener("blur",y),()=>{v.removeEventListener("blur",y)}},[s,l,t,d]),f.useEffect(()=>{if(!d)return;function T(v){(v.type==="referencePress"||v.type==="escapeKey")&&(k.current=!0)}return i.on("dismiss",T),()=>{i.off("dismiss",T)}},[i,d]),f.useEffect(()=>()=>{clearTimeout(E.current)},[]),f.useMemo(()=>d?{reference:{onPointerDown(T){let{pointerType:v}=T;g.current=v,k.current=!!(v&&u)},onMouseLeave(){k.current=!1},onFocus(T){var v;k.current||T.type==="focus"&&((v=a.current.openEvent)==null?void 0:v.type)==="mousedown"&&cr(a.current.openEvent,l)||r(!0,T.nativeEvent)},onBlur(T){k.current=!1;const v=T.relatedTarget,y=be(v)&&v.hasAttribute(sa("focus-guard"))&&v.getAttribute("data-type")==="outside";E.current=setTimeout(()=>{un(o.floating.current,v)||un(l,v)||y||r(!1,T.nativeEvent)})}}}:{},[d,u,l,o,a,r])}function st(e,n,t){const r=new Map;return{...t==="floating"&&{tabIndex:-1},...e,...n.map(a=>a?a[t]:null).concat(e).reduce((a,i)=>(i&&Object.entries(i).forEach(o=>{let[s,l]=o;if(s.indexOf("on")===0){if(r.has(s)||r.set(s,[]),typeof l=="function"){var d;(d=r.get(s))==null||d.push(l),a[s]=function(){for(var u,g=arguments.length,k=new Array(g),E=0;E<g;E++)k[E]=arguments[E];return(u=r.get(s))==null?void 0:u.map(T=>T(...k)).find(T=>T!==void 0)}}}else a[s]=l}),a),{})}}function yE(e){e===void 0&&(e=[]);const n=e,t=f.useCallback(i=>st(i,e,"reference"),n),r=f.useCallback(i=>st(i,e,"floating"),n),a=f.useCallback(i=>st(i,e,"item"),e.map(i=>i==null?void 0:i.item));return f.useMemo(()=>({getReferenceProps:t,getFloatingProps:r,getItemProps:a}),[t,r,a])}function fi(e,n){const[t,r]=e;let a=!1;const i=n.length;for(let o=0,s=i-1;o<i;s=o++){const[l,d]=n[o]||[0,0],[u,g]=n[s]||[0,0];d>=r!=g>=r&&t<=(u-l)*(r-d)/(g-d)+l&&(a=!a)}return a}function cE(e,n){return e[0]>=n.x&&e[0]<=n.x+n.width&&e[1]>=n.y&&e[1]<=n.y+n.height}function AE(e){e===void 0&&(e={});const{buffer:n=.5,blockPointerEvents:t=!1,requireIntent:r=!0}=e;let a,i=!1,o=null,s=null,l=performance.now();function d(g,k){const E=performance.now(),T=E-l;if(o===null||s===null||T===0)return o=g,s=k,l=E,null;const v=g-o,y=k-s,R=Math.sqrt(v*v+y*y)/T;return o=g,s=k,l=E,R}const u=g=>{let{x:k,y:E,placement:T,elements:v,onClose:y,nodeId:A,tree:R}=g;return function(O){function p(){clearTimeout(a),y()}if(clearTimeout(a),!v.domReference||!v.floating||T==null||k==null||E==null)return;const{clientX:D,clientY:K}=O,L=[D,K],M=js(O),w=O.type==="mouseleave",F=un(v.floating,M),h=un(v.domReference,M),S=v.domReference.getBoundingClientRect(),c=v.floating.getBoundingClientRect(),j=T.split("-")[0],G=k>c.right-c.width/2,C=E>c.bottom-c.height/2,B=cE(L,S),x=c.width>S.width,J=c.height>S.height,Q=(x?S:c).left,le=(x?S:c).right,_e=(J?S:c).top,Pe=(J?S:c).bottom;if(F&&(i=!0,!w))return;if(h&&(i=!1),h&&!w){i=!0;return}if(w&&be(O.relatedTarget)&&un(v.floating,O.relatedTarget)||R&&Ar(R.nodesRef.current,A).some(De=>{let{context:re}=De;return re==null?void 0:re.open}))return;if(j==="top"&&E>=S.bottom-1||j==="bottom"&&E<=S.top+1||j==="left"&&k>=S.right-1||j==="right"&&k<=S.left+1)return p();let We=[];switch(j){case"top":We=[[Q,S.top+1],[Q,c.bottom-1],[le,c.bottom-1],[le,S.top+1]];break;case"bottom":We=[[Q,c.top+1],[Q,S.bottom-1],[le,S.bottom-1],[le,c.top+1]];break;case"left":We=[[c.right-1,Pe],[c.right-1,_e],[S.left+1,_e],[S.left+1,Pe]];break;case"right":We=[[S.right-1,Pe],[S.right-1,_e],[c.left+1,_e],[c.left+1,Pe]];break}function vn(De){let[re,se]=De;switch(j){case"top":{const he=[x?re+n/2:G?re+n*4:re-n*4,se+n+1],ye=[x?re-n/2:G?re+n*4:re-n*4,se+n+1],Ne=[[c.left,G||x?c.bottom-n:c.top],[c.right,G?x?c.bottom-n:c.top:c.bottom-n]];return[he,ye,...Ne]}case"bottom":{const he=[x?re+n/2:G?re+n*4:re-n*4,se-n],ye=[x?re-n/2:G?re+n*4:re-n*4,se-n],Ne=[[c.left,G||x?c.top+n:c.bottom],[c.right,G?x?c.top+n:c.bottom:c.top+n]];return[he,ye,...Ne]}case"left":{const he=[re+n+1,J?se+n/2:C?se+n*4:se-n*4],ye=[re+n+1,J?se-n/2:C?se+n*4:se-n*4];return[...[[C||J?c.right-n:c.left,c.top],[C?J?c.right-n:c.left:c.right-n,c.bottom]],he,ye]}case"right":{const he=[re-n,J?se+n/2:C?se+n*4:se-n*4],ye=[re-n,J?se-n/2:C?se+n*4:se-n*4],Ne=[[C||J?c.left+n:c.right,c.top],[C?J?c.left+n:c.right:c.left+n,c.bottom]];return[he,ye,...Ne]}}}if(!fi([D,K],We)){if(i&&!B)return p();if(!w&&r){const De=d(O.clientX,O.clientY);if(De!==null&&De<.1)return p()}fi([D,K],vn([k,E]))?!i&&r&&(a=window.setTimeout(p,40)):p()}}};return u.__options={blockPointerEvents:t},u}function me(e,n,t,r){return r?typeof r=="string"?{[`--__${e}c-${n}-${t}-xs`]:r}:Object.fromEntries(Object.entries(r).map(([a,i])=>[`--__${e}c-${n}-${t}-${a}`,i])):{}}const bE={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Ti=(e,n,t,r,a,i)=>n.split(" ").map((o,s,l)=>{var d;if(e==="margin-inline"&&o==="full")return`calc((100vw - ${100/l.length}%)/-2)`;if(e==="padding-inline"&&o==="full")return`calc((100vw - ${100/l.length}%)/2)`;if(["mi","mb"].includes(e)&&o==="auto")return"auto";let u=`var(--${i}-${t}-${o})`;if(r.includes(o))u=o==="px"?"1px":o;else if(o.startsWith("space"))u=`var(--${i}-${o})`;else{const g=`--${i}-spacing-${o}`;u=`var(${(d=bE[g])!==null&&d!==void 0?d:g})`}return a?o==="0"?"0":`calc(-1 * ${u})`:u}).join(" ");function Oe(e,n,t,r,a,i=!1,o=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${n}-${t}-xs`]:Ti(t,a,r,o,i,e)};const s={};return Object.entries(a).forEach(([l,d])=>{s[`--__${e}c-${n}-${t}-${l}`]=Ti(t,d,r,o,i,e)}),s}const _E=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],SE=({children:e,className:n,padding:t,paddingInline:r,paddingBlock:a,margin:i,marginInline:o,marginBlock:s,width:l,minWidth:d,maxWidth:u,height:g,minHeight:k,maxHeight:E,position:T,inset:v,top:y,right:A,left:R,bottom:_,overflow:O,overflowX:p,overflowY:D,flexBasis:K,flexGrow:L,flexShrink:M,gridColumn:w})=>{const h=ar(!1)?"ax":"a",S=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Oe(h,"r","p","spacing",t)),Oe(h,"r","pi","spacing",r)),Oe(h,"r","pb","spacing",a)),Oe(h,"r","m","spacing",i)),Oe(h,"r","mi","spacing",o)),Oe(h,"r","mb","spacing",s)),me(h,"r","w",l)),me(h,"r","minw",d)),me(h,"r","maxw",u)),me(h,"r","h",g)),me(h,"r","minh",k)),me(h,"r","maxh",E)),me(h,"r","position",T)),Oe(h,"r","inset","spacing",v)),Oe(h,"r","top","spacing",y)),Oe(h,"r","right","spacing",A)),Oe(h,"r","bottom","spacing",_)),Oe(h,"r","left","spacing",R)),me(h,"r","overflow",O)),me(h,"r","overflowx",p)),me(h,"r","overflowy",D)),me(h,"r","flex-basis",K)),me(h,"r","flex-grow",L)),me(h,"r","flex-shrink",M)),me(h,"r","grid-column",w));return N.createElement(Fn,{className:z({className:n,"navds-r-p":t,"navds-r-pi":r,"navds-r-pb":a,"navds-r-m":i,"navds-r-mi":o,"navds-r-mb":s,"navds-r-w":l,"navds-r-minw":d,"navds-r-maxw":u,"navds-r-h":g,"navds-r-minh":k,"navds-r-maxh":E,"navds-r-position":T,"navds-r-inset":v,"navds-r-top":y,"navds-r-right":A,"navds-r-bottom":_,"navds-r-left":R,"navds-r-overflow":O,"navds-r-overflowx":p,"navds-r-overflowy":D,"navds-r-flex-basis":K,"navds-r-flex-grow":L,"navds-r-flex-shrink":M,"navds-r-grid-column":w}),style:S},e)};var hE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Vs=f.forwardRef((e,n)=>{var{children:t,className:r,as:a="div",align:i,justify:o,wrap:s=!0,gap:l,style:d,direction:u="row",asChild:g}=e,k=hE(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const T=ar(!1)?"ax":"a",v=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),Oe(T,"stack","gap","spacing",l)),me(T,"stack","direction",u)),me(T,"stack","align",i)),me(T,"stack","justify",o)),y=g?Fn:a;return N.createElement(SE,Object.assign({},k),N.createElement(y,Object.assign({},Qe(k,_E),{ref:n,style:v,className:z("navds-stack",r,{"navds-vstack":u==="column","navds-hstack":u==="row","navds-stack-gap":l,"navds-stack-align":i,"navds-stack-justify":o,"navds-stack-direction":u,"navds-stack-wrap":s})}),t))});var NE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Gs=f.forwardRef((e,n)=>{var{as:t="div"}=e,r=NE(e,["as"]);return N.createElement(Vs,Object.assign({as:t},r,{ref:n,direction:"row"}))});var OE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Fr=f.forwardRef((e,n)=>{var{as:t="div"}=e,r=OE(e,["as"]);return N.createElement(Vs,Object.assign({as:t},r,{ref:n,direction:"column",wrap:!1}))});var IE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const LE=f.forwardRef((e,n)=>{var{as:t="a",className:r,underline:a=!0,variant:i="action",inlineText:o=!1}=e,s=IE(e,["as","className","underline","variant","inlineText"]);return N.createElement(t,Object.assign({},s,{ref:n,className:z("navds-link",r,`navds-link--${i}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":o})}))});var KE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const PE=f.forwardRef((e,n)=>{var{className:t,header:r,children:a,open:i,defaultOpen:o=!1,onClick:s,size:l="medium",onOpenChange:d}=e,u=KE(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const[g,k]=ms({defaultValue:o,value:i,onChange:d}),E=l==="small"?"small":"medium";return N.createElement("div",{className:z("navds-read-more",`navds-read-more--${l}`,t,{"navds-read-more--open":g}),"data-volume":"low"},N.createElement("button",Object.assign({},u,{ref:n,type:"button",className:z("navds-read-more__button","navds-body-short",{"navds-body-short--small":l==="small"}),onClick:Zt(s,()=>k(T=>!T)),"aria-expanded":g,"data-state":g?"open":"closed"}),N.createElement(fs,{className:"navds-read-more__expand-icon","aria-hidden":!0}),N.createElement("span",null,r)),N.createElement(Xt,{as:"div","aria-hidden":!g,className:z("navds-read-more__content",{"navds-read-more__content--closed":!g}),size:E,"data-state":g?"open":"closed"},a))});var DE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const FE=f.forwardRef((e,n)=>{var{children:t,className:r,variant:a,size:i="medium",icon:o}=e,s=DE(e,["children","className","variant","size","icon"]);const l=(a==null?void 0:a.endsWith("-filled"))&&"strong",d=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",u=a==null?void 0:a.replace("-filled","").replace("-moderate","");return N.createElement(pe,Object.assign({},s,{ref:n,as:"span",size:i==="medium"?"medium":"small",className:z("navds-tag",r,`navds-tag--${a}`,`navds-tag--${i}`,`navds-tag--${l||d||"outline"}`,`navds-tag--${u}`)}),o&&N.createElement("span",{className:"navds-tag__icon--left"},o),t)});var ME=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const jE=f.forwardRef((e,n)=>{var{children:t,className:r,arrow:a=!0,placement:i="top",open:o,defaultOpen:s=!1,onOpenChange:l,offset:d,content:u,delay:g=150,id:k,keys:E,maxChar:T=80,describesChild:v=!1}=e,y=ME(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const A=ar(!1),R=a&&!A,[_,O]=ms({defaultValue:s,value:o,onChange:l}),p=f.useRef(null),D=Ek(!1),K=D?D.ref.current:void 0,{x:L,y:M,strategy:w,context:F,placement:h,middlewareData:{arrow:{x:S,y:c}={},hide:{referenceHidden:j}={}},refs:G}=RE({placement:i,open:_,onOpenChange:le=>O(le),middleware:[Dv(d??(A?8:a?16:4)),Fv(),Mv({padding:5,fallbackPlacements:["bottom","top"]}),jv({element:p,padding:5})],whileElementsMounted:D?(le,_e,Pe)=>di(le,_e,Pe,{animationFrame:!0}):di,strategy:D?"fixed":void 0}),{getReferenceProps:C,getFloatingProps:B}=yE([gE(F,{handleClose:AE(),restMs:g}),pE(F),TE(F)]),x=pn(k),J=ks(n,G.setFloating);if(!t||(t==null?void 0:t.type)===N.Fragment||t===N.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;(u==null?void 0:u.length)>T&&_&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${u.length}
Tooltip-content: ${u}`);const Q=v?_?{"aria-describedby":x}:{title:u}:{"aria-label":u};return N.createElement(N.Fragment,null,N.createElement(Fn,Object.assign({ref:G.setReference},C(),Q,{"aria-keyshortcuts":E?E.join("+"):void 0}),t),N.createElement(zk,{rootElement:K,asChild:!0},_&&N.createElement("div",Object.assign({},B(Object.assign(Object.assign({},y),{ref:J,style:{position:w,top:M??0,left:L??0,visibility:j?"hidden":"visible"},role:"tooltip",id:x,className:z("navds-tooltip","navds-detail navds-detail--small",r)})),{"data-side":h,"data-state":"open"}),u,E&&N.createElement("span",{className:"navds-tooltip__keys","aria-hidden":!0},E.map(le=>N.createElement(Ug,{as:"kbd",key:le,className:"navds-tooltip__key"},le))),R&&N.createElement("div",{ref:le=>{p.current=le},className:"navds-tooltip__arrow",style:{left:S!=null?`${S}px`:"",top:c!=null?`${c}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[h]]:"-3.5px"}}))))}),wE=e=>{const n=ia(e,"fieldset"),{inputProps:t}=n;return Object.assign(Object.assign({},n),{inputProps:{"aria-invalid":t["aria-invalid"],"aria-describedby":t["aria-describedby"]}})};var VE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const GE=f.forwardRef((e,n)=>{var t,r,a;const{inputProps:i,errorId:o,showErrorMsg:s,hasError:l,size:d,readOnly:u,inputDescriptionId:g}=wE(e),k=f.useContext(Dr),{children:E,className:T,errorPropagation:v=!0,legend:y,description:A,hideLegend:R,nativeReadOnly:_=!0}=e,O=VE(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return N.createElement(Dr.Provider,{value:{error:v?(t=e.error)!==null&&t!==void 0?t:k==null?void 0:k.error:void 0,errorId:z({[o]:s,[(r=k==null?void 0:k.errorId)!==null&&r!==void 0?r:""]:!!(k!=null&&k.error)}),size:d,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:u}},N.createElement("fieldset",Object.assign({},Qe(O,["errorId","error","size","readOnly"]),Qe(i,["aria-describedby","aria-invalid"]),{ref:n,className:z(T,"navds-fieldset",`navds-fieldset--${d}`,{"navds-fieldset--error":l,"navds-fieldset--readonly":u})}),N.createElement(jn,{size:d,as:"legend",className:z("navds-fieldset__legend",{"navds-sr-only":!!R})},u&&(_?N.createElement(Ks,null):N.createElement(Cv,null)),y),!!A&&N.createElement(pe,{className:z("navds-fieldset__description",{"navds-sr-only":!!R}),id:g,size:d??"medium",as:"div"},e.description),E,N.createElement("div",{id:o,"aria-relevant":"additions removals","aria-live":"polite",className:"navds-fieldset__error"},s&&N.createElement(vs,{size:d,showIcon:!0},e.error))))});var BE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Bs=N.createContext(null),qE=f.forwardRef((e,n)=>{var t,r,{children:a,className:i,name:o,defaultValue:s,value:l,onChange:d=()=>{},required:u,readOnly:g}=e,k=BE(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const E=f.useContext(Dr),T=pn();return N.createElement(GE,Object.assign({},k,{readOnly:g,ref:n,className:z(i,"navds-radio-group",`navds-radio-group--${(r=(t=k.size)!==null&&t!==void 0?t:E==null?void 0:E.size)!==null&&r!==void 0?r:"medium"}`),nativeReadOnly:!1}),N.createElement(Bs.Provider,{value:{name:o??`radioGroupName-${T}`,defaultValue:s,value:l,onChange:d,required:u}},N.createElement("div",{className:"navds-radio-buttons"},a)))});var UE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const HE=e=>{const n=f.useContext(Bs),t=ia(Qe(e,["description"]),"radio"),{inputProps:r,readOnly:a}=t,i=UE(t,["inputProps","readOnly"]);return n||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},i),{readOnly:a,inputProps:Object.assign(Object.assign({},r),{name:n==null?void 0:n.name,defaultChecked:(n==null?void 0:n.defaultValue)===void 0?void 0:(n==null?void 0:n.defaultValue)===e.value,checked:(n==null?void 0:n.value)===void 0?void 0:(n==null?void 0:n.value)===e.value,onChange:o=>{var s,l;a||((s=e.onChange)===null||s===void 0||s.call(e,o),(l=n==null?void 0:n.onChange)===null||l===void 0||l.call(n,e.value))},onClick:o=>{var s;if(a){o.preventDefault();return}(s=e==null?void 0:e.onClick)===null||s===void 0||s.call(e,o)},required:n==null?void 0:n.required,type:"radio"})})},Ri=f.forwardRef((e,n)=>{const{inputProps:t,size:r,hasError:a,readOnly:i}=HE(e),o=pn(),s=pn();return N.createElement("div",{className:z(e.className,"navds-radio",`navds-radio--${r}`,{"navds-radio--error":a,"navds-radio--disabled":t.disabled,"navds-radio--readonly":i})},N.createElement("input",Object.assign({},Qe(e,["children","size","description","readOnly"]),Qe(t,["aria-invalid"]),{"aria-labelledby":z(o,!!e["aria-labelledby"]&&e["aria-labelledby"],{[s]:e.description}),className:"navds-radio__input",ref:n})),N.createElement("label",{htmlFor:t.id,className:"navds-radio__label"},N.createElement("span",{className:"navds-radio__content"},N.createElement(pe,{as:"span",id:o,size:r,"aria-hidden":!0},e.children),e.description&&N.createElement(pe,{as:"span",id:s,size:r,className:"navds-form-field__subdescription navds-radio__description","aria-hidden":!0},e.description))))});var xE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const pi=(e,n,t)=>{const{outerHeightStyle:r,overflow:a}=n;return t.current<20&&(r>0&&Math.abs((e.outerHeightStyle||0)-r)>1||e.overflow!==a)?(t.current+=1,n):e},yi=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function mr(e){return parseInt(e,10)||0}const YE=f.forwardRef((e,n)=>{var t,r,{className:a,onChange:i,maxRows:o,minRows:s=1,autoScrollbar:l,style:d,value:u}=e,g=xE(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:k}=f.useRef(u!=null),E=f.useRef(null),T=ks(E,n),v=f.useRef(null),y=f.useRef(0),[A,R]=f.useState({outerHeightStyle:0}),_=N.useCallback(()=>{const K=E.current,M=yi(K).getComputedStyle(K);if(M.width==="0px")return{outerHeightStyle:0};const w=v.current;w.style.width=M.width,w.value=K.value||g.placeholder||"x",w.value.slice(-1)===`
`&&(w.value+=" ");const F=M.boxSizing,h=mr(M.paddingBottom)+mr(M.paddingTop),S=mr(M.borderBottomWidth)+mr(M.borderTopWidth),c=w.scrollHeight-h;w.value="x";const j=w.scrollHeight-h;let G=c;s&&(G=Math.max(Number(s)*j,G)),o&&(G=Math.min(Number(o)*j,G)),G=Math.max(G,j);const C=G+(F==="border-box"?h+S:0),B=Math.abs(G-c)<=1;return{outerHeightStyle:C,overflow:B}},[o,s,g.placeholder]),O=()=>{const K=_();ci(K)||R(L=>pi(L,K,y))};Qa(()=>{const K=()=>{const h=_();ci(h)||ut.flushSync(()=>{R(S=>pi(S,h,y))})},L=Es(()=>{var h,S,c;if(y.current=0,!((h=E.current)===null||h===void 0)&&h.style.height||!((S=E.current)===null||S===void 0)&&S.style.width){((c=E.current)===null||c===void 0?void 0:c.style.overflow)==="hidden"&&R(j=>Object.assign(Object.assign({},j),{overflow:!1}));return}K()},166,!0),M=E.current,w=yi(M);w.addEventListener("resize",L);let F;return typeof ResizeObserver<"u"&&(F=new ResizeObserver(L),F.observe(M)),()=>{L.clear(),w.removeEventListener("resize",L),F&&F.disconnect()}},[_]),Qa(()=>{O()}),f.useEffect(()=>{y.current=0},[u]);const p=K=>{y.current=0,k||O(),i&&i(K)},D=Object.assign({"--__ac-textarea-height":A.outerHeightStyle+"px","--__axc-textarea-height":A.outerHeightStyle+"px",overflow:A.overflow&&!l&&!(!((t=E.current)===null||t===void 0)&&t.style.height)&&!(!((r=E.current)===null||r===void 0)&&r.style.width)?"hidden":void 0},d);return N.createElement(N.Fragment,null,N.createElement("textarea",Object.assign({value:u,onChange:p,ref:T,rows:s,style:D},g,{className:a})),N.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:v,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},d)}))});function ci(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const CE=({maxLengthId:e,maxLength:n,currentLength:t,size:r,i18n:a})=>{const i=xr("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),o=n-t,[s,l]=f.useState(o);return f.useEffect(()=>{const d=Es(()=>{l(o)},2e3);return d(),()=>{d.clear()}},[o]),N.createElement(N.Fragment,null,N.createElement("span",{id:e,className:"navds-sr-only"},i("maxLength",{maxLength:n})),o<20&&N.createElement("span",{role:"status",className:"navds-textarea__sr-counter navds-sr-only"},Ai(s,i)),N.createElement(pe,{className:z("navds-textarea__counter",{"navds-textarea__counter--error":o<0}),size:r},Ai(o,i)))},Ai=(e,n)=>e<0?n("charsTooMany",{chars:Math.abs(e)}):n("charsLeft",{chars:e});var $E=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const JE=f.forwardRef((e,n)=>{var t,r,a;const{inputProps:i,errorId:o,showErrorMsg:s,hasError:l,size:d,inputDescriptionId:u}=ia(e,"textarea"),{label:g,className:k,description:E,maxLength:T,hideLabel:v=!1,resize:y,UNSAFE_autoScrollbar:A,i18n:R,readOnly:_}=e,O=$E(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),p=pn(),D=T!==void 0&&T>0,[K,L]=f.useState((t=e==null?void 0:e.defaultValue)!==null&&t!==void 0?t:""),M=()=>{let F=O!=null&&O.minRows?O==null?void 0:O.minRows:3;return d==="small"&&(F=O!=null&&O.minRows?O==null?void 0:O.minRows:2),F},w=z(i["aria-describedby"],{[p??""]:D});return N.createElement("div",{className:z(k,"navds-form-field",`navds-form-field--${d}`,{"navds-form-field--disabled":!!i.disabled,"navds-form-field--readonly":_,"navds-textarea--readonly":_,"navds-textarea--error":l,"navds-textarea--autoscrollbar":A,[`navds-textarea--resize-${y===!0?"both":y}`]:y})},N.createElement(jn,{htmlFor:i.id,size:d,className:z("navds-form-field__label",{"navds-sr-only":v})},_&&N.createElement(Ks,null),g),!!E&&N.createElement(pe,{className:z("navds-form-field__description",{"navds-sr-only":v}),id:u,size:d,as:"div"},E),N.createElement(YE,Object.assign({},Qe(O,["error","errorId","size"]),i,{onChange:Zt(e.onChange,e.value===void 0?F=>L(F.target.value):void 0),minRows:M(),autoScrollbar:A,ref:n,readOnly:_,className:z("navds-textarea__input","navds-body-short",`navds-body-short--${d??"medium"}`)},w?{"aria-describedby":w}:{})),D&&!_&&!i.disabled&&N.createElement(CE,{maxLengthId:p,maxLength:T,currentLength:(a=(r=e.value)===null||r===void 0?void 0:r.length)!==null&&a!==void 0?a:K.length,size:d,i18n:R}),N.createElement("div",{className:"navds-form-field__error",id:o,"aria-relevant":"additions removals","aria-live":"polite"},s&&N.createElement(vs,{size:d,showIcon:!0},e.error)))});function WE(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bi={exports:{}},xn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _i;function zE(){if(_i)return xn;_i=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(r,a,i){var o=null;if(i!==void 0&&(o=""+i),a.key!==void 0&&(o=""+a.key),"key"in a){i={};for(var s in a)s!=="key"&&(i[s]=a[s])}else i=a;return a=i.ref,{$$typeof:e,type:r,key:o,ref:a!==void 0?a:null,props:i}}return xn.Fragment=n,xn.jsx=t,xn.jsxs=t,xn}var Si;function XE(){return Si||(Si=1,bi.exports=zE()),bi.exports}var oe=XE();const ZE=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:oe.jsx(Yv,{variant:"warning",size:"small",children:oe.jsx(Fr,{gap:"2",children:N.Children.map(e,n=>oe.jsx(pe,{size:"small",children:n},kg(n)?n.key:n))})}),Vn={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};Ce(Vn);const Mr="#B7B1A9",qs=4,QE=(e,n,t)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${Mr};
    border-radius: ${qs}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${n}px;
    margin-left: ${t}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${Mr};
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
`,em=(e,n,t)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${Mr};
    border-radius: ${qs}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${n}px;
    margin-left: ${t}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${Mr};
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
`,nm=(e,n,t,r)=>n?em(e,t,r):QE(e,t,r),rm=(e,n,t)=>t?"":n?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,tm=({children:e,alignOffset:n=0,alignLeft:t=!1,marginTop:r=0,marginLeft:a=0,hideBorder:i=!1})=>oe.jsxs(oe.Fragment,{children:[oe.jsx("style",{dangerouslySetInnerHTML:{__html:nm(n,t,r,a)}}),oe.jsx("div",{className:rm(n,t,i),children:e})]});var hi={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ni;function am(){return Ni||(Ni=1,function(e){(function(){var n={}.hasOwnProperty;function t(){for(var i="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(i=a(i,r.call(this,s)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return t.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var s in i)n.call(i,s)&&i[s]&&(o=a(o,this&&this[s]||s));return o}function a(i,o){return o?i?i+" "+o:i+o:i}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(hi)),hi.exports}var im=am();const Ke=WE(im),om="_borderbox_1vkvn_1",sm="_error_1vkvn_5",lm="_warning_1vkvn_8",dm={borderbox:om,error:sm,warning:lm};Ke.bind(dm);const um="_aksjonspunkt_kn1hn_1",gm="_erAksjonspunktApent_kn1hn_4",km="_erIkkeGodkjentAvBeslutter_kn1hn_8",vm={aksjonspunkt:um,erAksjonspunktApent:gm,erIkkeGodkjentAvBeslutter:km};Ke.bind(vm);Ce(Vn);Ce(Vn);const Em="_flexColumnNew_1vdv1_1",mm={flexColumnNew:Em},fm=Ke.bind(mm),Yn=({children:e,className:n})=>oe.jsx("div",{className:fm("flexColumnNew",n),children:e}),Tm="_flexRow_1yf0y_1",Rm="_spaceBetween_1yf0y_9",pm="_alignItemsToBaseline_1yf0y_12",ym="_alignItemsToFlexEnd_1yf0y_15",cm="_justifyItemsToFlexEnd_1yf0y_18",Am="_wrap_1yf0y_21",bm={flexRow:Tm,spaceBetween:Rm,alignItemsToBaseline:pm,alignItemsToFlexEnd:ym,justifyItemsToFlexEnd:cm,wrap:Am},_m=Ke.bind(bm),Oi=({children:e,spaceBetween:n=!1,alignItemsToBaseline:t=!1,alignItemsToFlexEnd:r=!1,wrap:a=!1,className:i})=>oe.jsx("div",{className:_m("flexRow",{spaceBetween:n},{alignItemsToBaseline:t},{alignItemsToFlexEnd:r},{wrap:a},i),children:e}),Sm="_flexContainer_1dk1o_1",hm="_fluid_1dk1o_6",Nm="_fullHeight_1dk1o_9",Om="_flexWrap_1dk1o_17",Im={flexContainer:Sm,fluid:hm,fullHeight:Nm,flexWrap:Om},Lm=Ke.bind(Im),Km=({children:e,wrap:n=!1,fullHeight:t=!1})=>oe.jsx("div",{className:Lm("flexContainer","fluid",{flexWrap:n,fullHeight:t}),children:e});Ce(Vn);const Pm="_columnStyle_1f13u_1",Us={columnStyle:Pm},Dm=Ke.bind(Us),Sn=({children:e="",className:n,hidden:t=!1,colspanAll:r=!1})=>t?null:oe.jsx("td",{className:Dm(Us.columnStyle,n),colSpan:r?100:void 0,children:e}),Fm="_row_1lxv9_1",Mm="_harHover_1lxv9_4",jm="_rowHeader_1lxv9_7",wm="_grayHeader_1lxv9_12",Vm="_rowContent_1lxv9_15",Gm="_selected_1lxv9_18",Bm="_bold_1lxv9_22",qm="_dashedBottomBorder_1lxv9_25",Um="_solidBottomBorder_1lxv9_28",Hm="_apLeftBorder_1lxv9_31",xm="_noBottomBorder_1lxv9_34",Hs={row:Fm,harHover:Mm,rowHeader:jm,grayHeader:wm,rowContent:Vm,selected:Gm,bold:Bm,dashedBottomBorder:qm,solidBottomBorder:Um,apLeftBorder:Hm,noBottomBorder:xm},Ym=Ke.bind(Hs),Cm=(e,n,t)=>r=>{e&&r.button===0&&e(r,n,t)},xs=e=>e.tagName==="TR"?e:xs(e.parentElement),Ii=(e,n)=>{const t=xs(e.target),r=(n?t.nextSibling:t.previousSibling)||t;r&&(r.focus(),e.preventDefault())},$m=(e,n,t,r)=>a=>{a.key==="ArrowDown"?Ii(a,!0):a.key==="ArrowUp"?Ii(a,!1):n&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(n(a,t,r),a.preventDefault()):e&&n&&a.target.tagName!=="TD"&&a.key==="Shift"&&(n(a),a.preventDefault())},Jm=e=>n=>{e&&n.target.tagName!=="TD"&&n.key==="Shift"&&(e(n),n.preventDefault())},Kt=({id:e,model:n,isHeader:t=!1,hasGrayHeader:r=!1,onMouseDown:a,onKeyDown:i,children:o,noHover:s=!1,isSelected:l=!1,isBold:d=!1,isDashedBottomBorder:u=!1,isSolidBottomBorder:g=!1,isApLeftBorder:k=!1,className:E,useMultiselect:T=!1,hasNoBottomBorder:v=!1})=>oe.jsx("tr",{className:Ym(E,Hs.row,{rowHeader:t,grayHeader:r,rowContent:!t&&!s,selected:l,harHover:!s,bold:d,dashedBottomBorder:u,solidBottomBorder:g,noBottomBorder:v,apLeftBorder:k}),onMouseDown:Cm(a,e,n),onKeyDown:$m(T,i,e,n),onKeyUp:T?Jm(i):void 0,tabIndex:0,children:o}),Wm="_table_2cnpl_1",zm="_rowHover_2cnpl_25",Xm={table:Wm,rowHover:zm},Zm=Ke.bind(Xm),Qm="EMPTY",Ys=N.forwardRef(({headerTextCodes:e=[],headerColumnContent:n=[],classNameTable:t="",noHover:r=!1,hasGrayHeader:a=!1,children:i},o)=>oe.jsxs("table",{ref:o,className:Zm("table",{[t]:t,rowHover:!r}),children:[oe.jsx("thead",{children:oe.jsxs(Kt,{isHeader:!0,noHover:r,hasGrayHeader:a,children:[e.map(s=>typeof s=="string"&&s.startsWith(Qm)?oe.jsx(Sn,{children:" "},s):oe.jsx(Sn,{children:oe.jsx(ae,{id:s})},s)),n.map(s=>oe.jsx(Sn,{children:s},s.key))]})}),oe.jsx("tbody",{children:Array.isArray(i)?N.Children.map(i,s=>N.cloneElement(s,{noHover:r})):N.cloneElement(i,{noHover:r})})]}));Ys.displayName="Table";const ef="_hidden_1pb4f_1",nf="_active_1pb4f_8",rf="_activeRow_1pb4f_15 _active_1pb4f_8",tf="_toggleIcon_1pb4f_19",af="_colTopPadding_1pb4f_22",of={hidden:ef,active:nf,activeRow:rf,toggleIcon:tf,colTopPadding:af};Ke.bind(of);Ce(Vn);const sf="_fourPx_qda5k_1",lf="_eightPx_qda5k_4",df="_sixteenPx_qda5k_7",uf="_twentyPx_qda5k_10",gf="_thirtyTwoPx_qda5k_13",kf="_fourtyPx_qda5k_16",vf={fourPx:sf,eightPx:lf,sixteenPx:df,twentyPx:uf,thirtyTwoPx:gf,fourtyPx:kf},Ef=Ke.bind(vf),rn=({fourPx:e=!1,eightPx:n=!1,sixteenPx:t=!1,twentyPx:r=!1,thirtyTwoPx:a=!1,fourtyPx:i=!1})=>oe.jsx("div",{className:Ef({fourPx:e,eightPx:n,sixteenPx:t,twentyPx:r,thirtyTwoPx:a,fourtyPx:i})});Ce(Vn);const mf="_divider_1t980_1",ff="_dividerParagraf_1t980_8",Tf="_leftPanel_1t980_11",Rf="_rightPanel_1t980_14",pf={divider:mf,dividerParagraf:ff,leftPanel:Tf,rightPanel:Rf};Ke.bind(pf);const yf="_editedIcon_ulrjl_1",cf={editedIcon:yf},Af=Ke.bind(cf),Cs=({className:e=""})=>oe.jsx("span",{"data-testid":"editedIcon",className:Af("editedIcon",e),children:oe.jsx(sk,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})});function bf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Li={exports:{}},Cn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ki;function _f(){if(Ki)return Cn;Ki=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(r,a,i){var o=null;if(i!==void 0&&(o=""+i),a.key!==void 0&&(o=""+a.key),"key"in a){i={};for(var s in a)s!=="key"&&(i[s]=a[s])}else i=a;return a=i.ref,{$$typeof:e,type:r,key:o,ref:a!==void 0?a:null,props:i}}return Cn.Fragment=n,Cn.jsx=t,Cn.jsxs=t,Cn}var Pi;function Sf(){return Pi||(Pi=1,Li.exports=_f()),Li.exports}var ie=Sf();const $s=e=>e.reduce((n,t,r)=>({...n,[r]:a=>t(a)||!0}),{}),Js=(e,n)=>{const t=n.split(".").reduce((r,a)=>r!==void 0?r[a]:r,e);return t==null?void 0:t.message};var Pt={exports:{}},hf=Pt.exports,Di;function Nf(){return Di||(Di=1,function(e,n){(function(t,r){e.exports=r()})(hf,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,i=/\d\d/,o=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,l={},d=function(y){return(y=+y)+(y>68?1900:2e3)},u=function(y){return function(A){this[y]=+A}},g=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(A){if(!A||A==="Z")return 0;var R=A.match(/([+-]|\d\d)/g),_=60*R[1]+(+R[2]||0);return _===0?0:R[0]==="+"?-_:_}(y)}],k=function(y){var A=l[y];return A&&(A.indexOf?A:A.s.concat(A.f))},E=function(y,A){var R,_=l.meridiem;if(_){for(var O=1;O<=24;O+=1)if(y.indexOf(_(O,0,A))>-1){R=O>12;break}}else R=y===(A?"pm":"PM");return R},T={A:[s,function(y){this.afternoon=E(y,!1)}],a:[s,function(y){this.afternoon=E(y,!0)}],Q:[a,function(y){this.month=3*(y-1)+1}],S:[a,function(y){this.milliseconds=100*+y}],SS:[i,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[o,u("seconds")],ss:[o,u("seconds")],m:[o,u("minutes")],mm:[o,u("minutes")],H:[o,u("hours")],h:[o,u("hours")],HH:[o,u("hours")],hh:[o,u("hours")],D:[o,u("day")],DD:[i,u("day")],Do:[s,function(y){var A=l.ordinal,R=y.match(/\d+/);if(this.day=R[0],A)for(var _=1;_<=31;_+=1)A(_).replace(/\[|\]/g,"")===y&&(this.day=_)}],w:[o,u("week")],ww:[i,u("week")],M:[o,u("month")],MM:[i,u("month")],MMM:[s,function(y){var A=k("months"),R=(k("monthsShort")||A.map(function(_){return _.slice(0,3)})).indexOf(y)+1;if(R<1)throw new Error;this.month=R%12||R}],MMMM:[s,function(y){var A=k("months").indexOf(y)+1;if(A<1)throw new Error;this.month=A%12||A}],Y:[/[+-]?\d+/,u("year")],YY:[i,function(y){this.year=d(y)}],YYYY:[/\d{4}/,u("year")],Z:g,ZZ:g};function v(y){var A,R;A=y,R=l&&l.formats;for(var _=(y=A.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(w,F,h){var S=h&&h.toUpperCase();return F||R[h]||t[h]||R[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(c,j,G){return j||G.slice(1)})})).match(r),O=_.length,p=0;p<O;p+=1){var D=_[p],K=T[D],L=K&&K[0],M=K&&K[1];_[p]=M?{regex:L,parser:M}:D.replace(/^\[|\]$/g,"")}return function(w){for(var F={},h=0,S=0;h<O;h+=1){var c=_[h];if(typeof c=="string")S+=c.length;else{var j=c.regex,G=c.parser,C=w.slice(S),B=j.exec(C)[0];G.call(F,B),w=w.replace(B,"")}}return function(x){var J=x.afternoon;if(J!==void 0){var Q=x.hours;J?Q<12&&(x.hours+=12):Q===12&&(x.hours=0),delete x.afternoon}}(F),F}}return function(y,A,R){R.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(d=y.parseTwoDigitYear);var _=A.prototype,O=_.parse;_.parse=function(p){var D=p.date,K=p.utc,L=p.args;this.$u=K;var M=L[1];if(typeof M=="string"){var w=L[2]===!0,F=L[3]===!0,h=w||F,S=L[2];F&&(S=L[2]),l=this.$locale(),!w&&S&&(l=R.Ls[S]),this.$d=function(C,B,x,J){try{if(["x","X"].indexOf(B)>-1)return new Date((B==="X"?1e3:1)*C);var Q=v(B)(C),le=Q.year,_e=Q.month,Pe=Q.day,We=Q.hours,vn=Q.minutes,De=Q.seconds,re=Q.milliseconds,se=Q.zone,he=Q.week,ye=new Date,Ne=Pe||(le||_e?1:ye.getDate()),An=le||ye.getFullYear(),En=0;le&&!_e||(En=_e>0?_e-1:ye.getMonth());var Gn,dr=We||0,ur=vn||0,m=De||0,b=re||0;return se?new Date(Date.UTC(An,En,Ne,dr,ur,m,b+60*se.offset*1e3)):x?new Date(Date.UTC(An,En,Ne,dr,ur,m,b)):(Gn=new Date(An,En,Ne,dr,ur,m,b),he&&(Gn=J(Gn).week(he).toDate()),Gn)}catch{return new Date("")}}(D,M,K,R),this.init(),S&&S!==!0&&(this.$L=this.locale(S).$L),h&&D!=this.format(M)&&(this.$d=new Date("")),l={}}else if(M instanceof Array)for(var c=M.length,j=1;j<=c;j+=1){L[1]=M[j-1];var G=R.apply(this,L);if(G.isValid()){this.$d=G.$d,this.$L=G.$L,this.init();break}j===c&&(this.$d=new Date(""))}else O.call(this,p)}}})}(Pt)),Pt.exports}var Of=Nf();const If=bf(Of),Lf="_readOnlyContainer_v0eco_1",Kf="_readOnlyContent_v0eco_4",Pf="_textarea_v0eco_11",Df="_space_v0eco_15",fr={readOnlyContainer:Lf,readOnlyContent:Kf,textarea:Pf,space:Df},Ff=e=>e!=null&&e!=="",Mf=({label:e,value:n,isEdited:t=!1,type:r,hideLabel:a,size:i})=>Ff(n)?ie.jsxs("div",{className:fr.readOnlyContainer,children:[e&&!a&&ie.jsx(jn,{size:"small",children:e}),ie.jsx("div",{className:r==="textarea"?fr.textarea:"",children:ie.jsxs(Xt,{className:fr.readOnlyContent,size:i,children:[n,t&&ie.jsx(Cs,{className:fr.space})]})})]}):null;fe.extend(If);const jf="_hideRadioLabels_1u3xf_1",wf={hideRadioLabels:jf},Vf=({label:e,description:n,name:t,validate:r=[],radios:a,onChange:i,disabled:o=!1,isReadOnly:s=!1,isHorizontal:l=!1,parse:d=T=>T,isTrueOrFalseSelection:u=!1,hideLegend:g=!1,hideRadioLabels:k=!1,isEdited:E=!1})=>{const{formState:{errors:T}}=Dn(),{field:v}=ts({name:t,rules:{validate:f.useMemo(()=>$s(r),[r])}}),y=u?R=>R==="true":d,A=ie.jsxs(ie.Fragment,{children:[e,s&&E&&ie.jsx(Cs,{})]});return ie.jsxs(qE,{name:t,value:v.value!==void 0?v.value:null,onChange:R=>{i&&i(R),v.onChange(R)},size:"small",legend:A,description:n,error:Js(T,t),className:k?wf.hideRadioLabels:"",hideLegend:g,children:[!l&&a.map(R=>ie.jsxs(f.Fragment,{children:[ie.jsx(Ri,{value:y(R.value),disabled:R.disabled||o||s,children:R.label}),v.value===y(R.value)&&R.element]},R.value)),l&&ie.jsxs(ie.Fragment,{children:[ie.jsx(Gs,{gap:"4",children:a.map(R=>ie.jsx(Ri,{value:y(R.value),disabled:R.disabled||o||s,children:R.label},R.value))}),a.filter(R=>v.value===y(R.value)).map(R=>ie.jsx(f.Fragment,{children:R.element},R.value))]})]})},Gf="_textAreaFieldWithBadges_bdz0b_1",Bf="_etikettWrapper_bdz0b_4",Fi={textAreaFieldWithBadges:Gf,etikettWrapper:Bf},Dt=({name:e,label:n,readOnly:t,maxLength:r,badges:a,validate:i=[],parse:o=g=>g,className:s,description:l,isEdited:d,...u})=>{const{formState:{errors:g}}=Dn(),{field:k}=ts({name:e,rules:{validate:f.useMemo(()=>$s(i),[i])}});return t?ie.jsx(Mf,{label:n,value:k.value,type:"textarea",isEdited:d,hideLabel:u.hideLabel}):ie.jsxs("div",{className:a?Fi.textAreaFieldWithBadges:null,children:[a&&ie.jsx("div",{className:Fi.etikettWrapper,children:a.map(({type:E,titleText:T})=>ie.jsx(FE,{variant:E,size:"small",children:T},T))}),ie.jsx(JE,{size:"small",label:n,description:l,className:s,autoComplete:"off",...k,onChange:E=>k.onChange(E.currentTarget.value!==""?o(E.currentTarget.value):null),value:k.value?k.value:"",error:Js(g,e),maxLength:r,...u})]})},qf=({formMethods:e,onSubmit:n,children:t,className:r,setDataOnUnmount:a})=>{const{handleSubmit:i,getValues:o}=e;return f.useEffect(()=>()=>{a&&a(o())},[]),ie.jsx(mg,{...e,children:ie.jsx("form",{className:r,onSubmit:n?i(s=>n(s)):void 0,children:t})})};function Ws(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ft={exports:{}},Uf=Ft.exports,Mi;function Hf(){return Mi||(Mi=1,function(e,n){(function(t,r){e.exports=r()})(Uf,function(){return function(t,r){r.prototype.isSameOrAfter=function(a,i){return this.isSame(a,i)||this.isAfter(a,i)}}})}(Ft)),Ft.exports}var xf=Hf();const Yf=Ws(xf);var Mt={exports:{}},Cf=Mt.exports,ji;function $f(){return ji||(ji=1,function(e,n){(function(t,r){e.exports=r()})(Cf,function(){return function(t,r){r.prototype.isSameOrBefore=function(a,i){return this.isSame(a,i)||this.isBefore(a,i)}}})}(Mt)),Mt.exports}var Jf=$f();const Wf=Ws(Jf),zf="Dato må være før eller lik {limit}",Xf="Dato må være etter eller lik {limit}",Zf="Perioder kan ikke overlappe i tid",Qf="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",eT="Dato må være lik {value}",nT="Dato må skrives slik: dd.mm.åååå",rT="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",tT="Tallet kan ikke inneholde mer enn to desimaler",aT="Tallet kan ikke ha desimaler",iT="Feltet kan kun inneholde tall",oT="Ugyldig fødselsnummer",sT="Feltet må være et fødselsnummer (11 siffer)",lT="Ugyldig organisasjonsnummer.",dT="Ugyldig organisasjonsnummer eller fødselsnummer",uT="Startdato må være før eller lik sluttdato",gT="Periode er utenfor opptjeningsperioden",kT="Ugyldig saksnummer eller fødselsnummer",vT="Feltet inneholder ugyldige tegn: {text}",ET="Feltet inneholder en ugyldig verdi: {value}",mT="Feltet kan ikke inneholde mellomrom",fT="Feltet må fylles ut",TT="Du kan skrive maksimalt {length} tegn",RT="Du må skrive minst {length} tegn",pT="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",yT="Feltet må være mindre eller lik {length}",cT="Feltet må være større eller lik {length}",AT="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",bT={DateNotBeforeOrEqual:zf,DateNotAfterOrEqual:Xf,DateRangesOverlapping:Zf,DateRangesOverlappingPeriodTypes:Qf,DatesNotEqual:eT,InvalidDate:nT,InvalidDatesInPeriod:rT,InvalidDecimal:tT,InvalidInteger:aT,InvalidNumber:iT,InvalidFodselsnr:oT,InvalidFodselsnrFormat:sT,InvalidOrgnr:lT,InvalidOrgnrOrFodselsnr:dT,InvalidPeriod:uT,InvalidPeriodRange:gT,InvalidSaksnrOrFodselsnrFormat:kT,InvalidText:vT,InvalidValue:ET,IllegalWhiteSpace:mT,IsRequired:fT,MaxLength:TT,MinLength:RT,MaxLengthOrFodselsnr:pT,MaxValue:yT,MinValue:cT,SammeFodselsnrSomSoker:AT},{formatMessage:Yr}=Ce(bT),_T=e=>Yr({id:"InvalidText"},{text:e}),ST=()=>Yr({id:"IsRequired"}),hT=e=>Yr({id:"MaxLength"},{length:e}),NT=e=>Yr({id:"MinLength"},{length:e}),OT=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,IT=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,la=e=>e==null||e.toString().trim().length===0;fe.extend(Yf);fe.extend(Wf);const _r=e=>la(e)?ST():void 0,zs=e=>n=>la(n)||n.toString().trim().length>=e?null:NT(e),Xs=e=>n=>la(n)||n.toString().trim().length<=e?null:hT(e),jt=e=>{if(!OT.test(e)){const n=e.replace(IT,"");return _T(n.replace(/[\t]/g,"Tabulatortegn"))}return null},LT="_readMore_mcbzv_1",KT={readMore:LT},PT=zs(3),DT=Xs(1500),FT=e=>({kode:ue.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:e.begrunnelseEtterbetaling}),MT=e=>{if(!(!e||e.definisjon!==ue.KONTROLLER_STOR_ETTERBETALING_SØKER))return{begrunnelseEtterbetaling:e.begrunnelse}},da=({readOnly:e,aksjonspunkt:n})=>{const t=nr();return!n||n.definisjon!==ue.KONTROLLER_STOR_ETTERBETALING_SØKER?null:P.jsxs(Fr,{gap:"4",children:[P.jsx(PE,{header:P.jsx(ae,{id:"Simulering.Etterbetaling.ReadMoreTittel"}),className:KT.readMore,children:P.jsx(ae,{id:"Simulering.Etterbetaling.ReadMoreInnhold"})}),P.jsx(Dt,{name:"begrunnelseEtterbetaling",label:t.formatMessage({id:"Simulering.Etterbetaling.Vurdering"}),validate:[_r,PT,DT,jt],maxLength:1500,size:"medium",readOnly:e})]})};da.__docgenInfo={description:"",methods:[],displayName:"EtterbetalingSøkerForm",props:{aksjonspunkt:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};da.__docgenInfo={description:"",methods:[],displayName:"EtterbetalingSøkerForm",props:{aksjonspunkt:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const jT="_summaryTitle_45kqm_1",wT="_infoSummary_45kqm_5",VT="_ingenPerioder_45kqm_13",GT="_redNumber_45kqm_17",BT="_positivNumber_45kqm_23",qT="_resultName_45kqm_28",Xe={summaryTitle:jT,infoSummary:wT,ingenPerioder:VT,redNumber:GT,positivNumber:BT,resultName:qT},ua=({fom:e,tom:n,feilutbetaling:t,etterbetaling:r,inntrekk:a,ingenPerioderMedAvvik:i})=>P.jsxs(P.Fragment,{children:[P.jsx(pe,{size:"small",className:Xe.summaryTitle,children:P.jsx(ae,{id:"Simulering.bruker"})}),P.jsx(rn,{eightPx:!0}),P.jsxs("div",{className:Xe.infoSummary,children:[i&&P.jsx("div",{className:Xe.ingenPerioder,children:P.jsx(ae,{id:"Simulering.ingenPerioder"})}),!i&&P.jsxs(P.Fragment,{children:[P.jsx(jn,{size:"small",children:`${fe(e).format(Ba)} - ${fe(n).format(Ba)}`}),P.jsx(rn,{sixteenPx:!0}),P.jsxs(Km,{children:[P.jsxs(Oi,{children:[P.jsx(Yn,{className:Xe.resultName,children:P.jsxs(pe,{size:"small",children:[P.jsx(ae,{id:"Simulering.etterbetaling"}),":"]})}),P.jsx(Yn,{children:P.jsx(pe,{size:"small",children:Rr(r)})})]}),P.jsxs(Oi,{children:[P.jsx(Yn,{className:Xe.resultName,children:P.jsxs(pe,{size:"small",children:[P.jsx(ae,{id:"Simulering.tilbakekreving"}),":"]})}),P.jsx(Yn,{children:P.jsx(pe,{size:"small",children:P.jsx("span",{className:t?Xe.redNumber:Xe.positivNumber,children:Rr(t)})})}),a!==null&&P.jsx(Yn,{children:P.jsxs(pe,{size:"small",children:[P.jsx(ae,{id:"Simulering.inntrekk"}),":",P.jsx("span",{className:a?Xe.redNumber:Xe.positivNumber,children:Rr(a)})]})})]})]})]})]})]});ua.__docgenInfo={description:"Simulering oppsummering",methods:[],displayName:"SimuleringSummary",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},etterbetaling:{required:!0,tsType:{name:"number"},description:""},inntrekk:{required:!1,tsType:{name:"number"},description:""},ingenPerioderMedAvvik:{required:!1,tsType:{name:"boolean"},description:""}}};ua.__docgenInfo={description:"Simulering oppsummering",methods:[],displayName:"SimuleringSummary",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},etterbetaling:{required:!0,tsType:{name:"number"},description:""},inntrekk:{required:!1,tsType:{name:"number"},description:""},ingenPerioderMedAvvik:{required:!1,tsType:{name:"boolean"},description:""}}};var lt={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var wi;function UT(){return wi||(wi=1,function(e){(function(){var n={}.hasOwnProperty;function t(){for(var i="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(i=a(i,r.call(this,s)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return t.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var s in i)n.call(i,s)&&i[s]&&(o=a(o,this&&this[s]||s));return o}function a(i,o){return o?i?i+" "+o:i+o:i}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(lt)),lt.exports}var HT=UT();const xT=il(HT),YT="_invisibleButton_p9vj5_1",CT={invisibleButton:YT},$T=e=>e?"Simulering.headerText.VisFærreDetaljer":"Simulering.headerText.VisFlereDetaljer",ga=({toggleDetails:e,showDetails:n,mottakerIndex:t})=>P.jsxs("button",{type:"button",className:CT.invisibleButton,onClick:()=>e(t),children:[P.jsx(ae,{id:$T(n)}),n?P.jsx(ek,{}):P.jsx(fs,{})]});ga.__docgenInfo={description:"",methods:[],displayName:"CollapseButton",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"boolean"},description:""},mottakerIndex:{required:!0,tsType:{name:"number"},description:""}}};ga.__docgenInfo={description:"",methods:[],displayName:"CollapseButton",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"boolean"},description:""},mottakerIndex:{required:!0,tsType:{name:"number"},description:""}}};const JT="_tableWrapper_1tst4_1",WT="_tableTitle_1tst4_7",zT="_simuleringTable_1tst4_11",XT="_rodTekst_1tst4_16",ZT="_lastColumn_1tst4_20",QT="_nextPeriod_1tst4_62",eR="_normalPeriod_1tst4_68",jr={tableWrapper:JT,tableTitle:WT,simuleringTable:zT,rodTekst:XT,lastColumn:ZT,nextPeriod:QT,normalPeriod:eR},Zs=xT.bind(jr),Wn={DIFFERANSE:"differanse",INNTREKKNESTEMÅNED:"inntrekkNesteMåned"},Vi=(e,n)=>`${e.month}${e.year}`===(n?fe(n).format("MMMMYY"):!1),nR=(e,n,t,r)=>[e?f.createElement(ga,{...n,key:`collapseButton-${t.length}`}):P.jsx("div",{}),...t.map(i=>P.jsx("span",{className:Zs({nextPeriod:Vi(i,r),normalPeriod:!Vi(i,r)}),children:P.jsx(ae,{id:`Simulering.headerText.${i.month}`})},`${i.month}-${i.year}`))],rR=e=>e.some(n=>n.rader.length>1),Gi=(e,n)=>!!e.rader.find(r=>r.feltnavn===Wn.DIFFERANSE)&&!n,tR=(e,n)=>e&&!n,Bi=(e,n,t)=>{const r=`${fe(t).format("MMMMYY")}`;return n.map(i=>e.find(s=>fe(s.periode.tom).format("MMMMYY").toLowerCase()===`${i.month}${i.year}`)||{måned:`${i.month}${i.year}`,beløp:null}).map((i,o)=>P.jsx(Sn,{className:Zs({rodTekst:!i.beløp||i.beløp<0,lastColumn:"måned"in i?i.måned===r:fe(i.periode.tom).format("MMMMYY")===r}),children:i.beløp?Rr(i.beløp):"-"},`columnIndex${o+1}`))},aR=(e,n)=>{const t=e.mottakerIdentifikator?n[e.mottakerIdentifikator]:void 0;return t?`${t.navn} (${e.mottakerNummer})`:`${e.mottakerNummer}`},iR=(e,n)=>e.mottakerType===zn.ARBG||e.mottakerType===zn.ARBGP?P.jsx(pe,{size:"small",className:jr.tableTitle,children:aR(e,n)}):null,oR=(e,n,t)=>e?n.length>1?t.filter(r=>r.feltnavn!==Wn.INNTREKKNESTEMÅNED):[]:t,sR=(e,n)=>!!(e&&n===zn.BRUKER),lR=(e,n)=>e||n,dR=(e,n,t)=>{const r=sR(e,t.mottakerType)?fe(t.nesteUtbPeriode.tom).subtract(1,"months").format():lR(n,t.nesteUtbPeriode.fom);return dg(r,t.nesteUtbPeriode.tom)},ka=({simuleringResultat:e,toggleDetails:n,showDetails:t,ingenPerioderMedAvvik:r,arbeidsgiverOpplysningerPerId:a})=>P.jsx(P.Fragment,{children:e.perioderPerMottaker.map((i,o)=>{const s=dR(r,e.periode.fom,i),l=i.nesteUtbPeriode.tom,d=t.find(g=>g.id===o),u=[];return P.jsxs("div",{className:jr.tableWrapper,children:[iR(i,a),P.jsx(Ys,{headerColumnContent:nR(rR(i.resultatPerFagområde),{toggleDetails:n,showDetails:d?d.show:!1,mottakerIndex:o},s,l),classNameTable:jr.simuleringTable,children:u.concat(...i.resultatPerFagområde.map((g,k)=>g.rader.filter(E=>{const T=E.feltnavn===Wn.DIFFERANSE,v=Gi(g,T);return!tR(v,d?d.show:!1)}).map((E,T)=>{const v=E.feltnavn===Wn.DIFFERANSE,y=Gi(g,v);return P.jsxs(Kt,{isBold:v||r,isDashedBottomBorder:y,isSolidBottomBorder:!y,children:[P.jsx(Sn,{children:P.jsx(ae,{id:`Simulering.${g.fagOmrådeKode}.${E.feltnavn}`})}),Bi(E.resultaterPerMåned,s,l)]},`rowIndex${k+1}${T+1}`)}))).concat(oR(r,i.resultatPerFagområde,i.resultatOgMotregningRader).map((g,k)=>P.jsxs(Kt,{isBold:g.feltnavn!==Wn.INNTREKKNESTEMÅNED,isSolidBottomBorder:!0,children:[P.jsx(Sn,{children:P.jsx(ae,{id:`Simulering.${g.feltnavn}`})}),Bi(g.resultaterPerMåned,s,l)]},`rowIndex${k+1}`)))},`tableIndex${o+1}`)]},`tableIndex${o+1}`)})});ka.__docgenInfo={description:"",methods:[],displayName:"SimuleringTable",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};ka.__docgenInfo={description:"",methods:[],displayName:"SimuleringTable",props:{toggleDetails:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},showDetails:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const uR="_helpTextImage_1p9zp_1",gR="_varsel_1p9zp_17",kR="_bold_1p9zp_22",dt={helpTextImage:uR,varsel:gR,bold:kR},qi=zs(3),Ui=Xs(1500),va="IKKE_SEND",vR=e=>{const{videreBehandling:n,varseltekst:t,begrunnelse:r}=e;return n!=null&&n.endsWith(va)?{kode:ue.VURDER_FEILUTBETALING,begrunnelse:r,videreBehandling:ln.TILBAKEKR_OPPRETT}:{kode:ue.VURDER_FEILUTBETALING,begrunnelse:r,videreBehandling:n,varseltekst:t}},ER=(e,n)=>!e||!n?void 0:{videreBehandling:!n.varseltekst&&n.videreBehandling===ln.TILBAKEKR_OPPRETT?n.videreBehandling+va:n.videreBehandling,varseltekst:n.varseltekst,begrunnelse:e.begrunnelse},Ea=({readOnly:e,sprakkode:n,previewCallback:t,aksjonspunkt:r,fagsak:a})=>{const i=nr(),{watch:o}=Dn(),s=o("varseltekst"),l=a.fagsakYtelseType===wt.FORELDREPENGER,d=f.useCallback(u=>{t({mottaker:"",fritekst:s??" "}),u.preventDefault()},[s]);return!r||r.definisjon!==ue.VURDER_FEILUTBETALING?null:P.jsxs(Fr,{gap:"10",align:"start",children:[P.jsx(Dt,{name:"begrunnelse",label:i.formatMessage({id:"Simulering.vurdering"}),validate:[_r,qi,Ui,jt],maxLength:1500,readOnly:e}),P.jsx(Vf,{name:"videreBehandling",label:P.jsx(ae,{id:"Simulering.videreBehandling"}),validate:[_r],isReadOnly:e,radios:[{value:ln.TILBAKEKR_OPPRETT,label:P.jsx(ae,{id:"Simulering.gjennomfør"}),element:P.jsxs("div",{className:dt.varsel,children:[P.jsx(rn,{eightPx:!0}),P.jsx(tm,{alignOffset:20,children:P.jsxs(Fr,{gap:"4",children:[P.jsxs(Gs,{gap:"2",children:[P.jsx(pe,{size:"small",className:dt.bold,children:P.jsx(ae,{id:"Simulering.varseltekst"})}),P.jsx(jE,{content:l?i.formatMessage({id:"Simulering.HjelpetekstForeldrepenger"}):i.formatMessage({id:"Simulering.HjelpetekstEngangsstonad"}),children:P.jsx(dk,{className:dt.helpTextImage})})]}),P.jsx(Dt,{name:"varseltekst",label:i.formatMessage({id:"Simulering.fritekst"}),validate:[_r,qi,Ui,jt],maxLength:1500,readOnly:e,parse:ug,badges:[{type:"info",titleText:gg(n)}]}),!e&&P.jsx(LE,{href:"#",onClick:d,children:P.jsx(ae,{id:"Messages.PreviewText"})})]})})]})},{value:`${ln.TILBAKEKR_OPPRETT}${va}`,label:P.jsx(ae,{id:"Simulering.OpprettMenIkkeSendVarsel"})},{value:ln.TILBAKEKR_IGNORER,label:P.jsx(ae,{id:"Simulering.avvent"})}]})]})};Ea.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevSøkerForm",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  harVergeIÅpenBehandling: boolean;
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
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harIkkeRegistrertAdresse",value:{name:"boolean",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
  harVergeIÅpenBehandling: boolean;
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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};Ea.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevSøkerForm",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  harVergeIÅpenBehandling: boolean;
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
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harIkkeRegistrertAdresse",value:{name:"boolean",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
  harVergeIÅpenBehandling: boolean;
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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const wr=(e,n)=>e.find(t=>t.definisjon===n),Kn=(e,n)=>e.some(t=>t.definisjon===n),mR=(e,n)=>t=>{const r=e.findIndex(i=>i.id===t);let a=[];if(r!==-1){const i={id:t,show:!e[r].show};a=[...e.slice(0,r),i,...e.slice(r+1,e.length-1)]}else a=e.concat({id:t,show:!0});n(a)},fR=(e,n)=>{const t=[];return Kn(n,ue.VURDER_FEILUTBETALING)&&t.push(vR(e)),Kn(n,ue.KONTROLLER_STOR_ETTERBETALING_SØKER)&&t.push(FT(e)),t},TR=(e,n)=>{if(e.length!==0)return{...ER(wr(e,ue.VURDER_FEILUTBETALING),n),...MT(wr(e,ue.KONTROLLER_STOR_ETTERBETALING_SØKER))}},RR=e=>{const n=[];return Kn(e,ue.VURDER_FEILUTBETALING)&&n.push(P.jsx(ae,{id:"Simulering.AksjonspunktHelpText.5084"},"vurderFeilutbetaling")),Kn(e,ue.KONTROLLER_STOR_ETTERBETALING_SØKER)&&n.push(P.jsx(ae,{id:"Simulering.Etterbetaling.Tittel"},"kontrollerFeilutbetaling")),n},ma=({simuleringResultat:e,previewCallback:n,tilbakekrevingvalg:t,arbeidsgiverOpplysningerPerId:r})=>{const{aksjonspunkterForPanel:a,submitCallback:i,isReadOnly:o,harÅpneAksjonspunkter:s,fagsak:l,behandling:d}=Cd(),{formData:u,setFormData:g}=Yd(),k=Lg({defaultValues:u||TR(a,t)}),{formState:E}=k,[T,v]=f.useState([]),y=t!==void 0&&t.videreBehandling===ln.TILBAKEKR_OPPDATER,A=mR(T,v),R=e==null?void 0:e.simuleringResultat,_=Kn(a,ue.VURDER_FEILUTBETALING)||Kn(a,ue.KONTROLLER_STOR_ETTERBETALING_SØKER),O=s?RR(a):[];return P.jsxs(P.Fragment,{children:[P.jsx(Yg,{size:"small",children:P.jsx(ae,{id:"Simulering.Title"})}),P.jsx(rn,{twentyPx:!0}),R&&P.jsxs(P.Fragment,{children:[O.length>0&&O.map(p=>P.jsxs("div",{children:[P.jsx(ZE,{children:[p]}),P.jsx(rn,{sixteenPx:!0})]},p.key)),P.jsx(ua,{fom:R.periode.fom,tom:R.periode.tom,feilutbetaling:R.sumFeilutbetaling,etterbetaling:R.sumEtterbetaling,inntrekk:R.sumInntrekk,ingenPerioderMedAvvik:R.ingenPerioderMedAvvik}),P.jsx(ka,{arbeidsgiverOpplysningerPerId:r,showDetails:T,toggleDetails:A,simuleringResultat:R,ingenPerioderMedAvvik:R.ingenPerioderMedAvvik}),P.jsx(rn,{twentyPx:!0}),y&&P.jsx(jn,{size:"small",children:P.jsx(ae,{id:"Simulering.ApenTilbakekrevingsbehandling"})})]}),!e&&P.jsx(ae,{id:"Simulering.ingenData"}),_&&P.jsxs(qf,{formMethods:k,onSubmit:p=>i(fR(p,a)),setDataOnUnmount:g,children:[P.jsx(Ea,{aksjonspunkt:wr(a,ue.VURDER_FEILUTBETALING),fagsak:l,previewCallback:n,readOnly:o,sprakkode:d.sprakkode}),P.jsx(rn,{sixteenPx:!0}),P.jsx(da,{readOnly:o,aksjonspunkt:wr(a,ue.KONTROLLER_STOR_ETTERBETALING_SØKER)}),P.jsx(rn,{sixteenPx:!0}),P.jsx(Ls,{size:"small",variant:"primary",disabled:!E.isDirty||E.isSubmitting||o,loading:E.isSubmitting,children:P.jsx(ae,{id:"SubmitButton.ConfirmInformation"})})]})]})};ma.__docgenInfo={description:"",methods:[],displayName:"SimuleringPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};ma.__docgenInfo={description:"",methods:[],displayName:"SimuleringPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const pR={"Simulering.Title":"Simulering","Simulering.FP.nyttBeløp":"Foreldrepenger nytt beløp","Simulering.FP.tidligereUtbetalt":"Foreldrepenger tidligere utbetalt","Simulering.FP.differanse":"Foreldrepenger avvik","Simulering.FPREF.nyttBeløp":"Foreldrepenger nytt beløp","Simulering.FPREF.tidligereUtbetalt":"Foreldrepenger tidligere utbetalt","Simulering.FPREF.differanse":"Foreldrepenger avvik","Simulering.OM.nyttBeløp":"Omsorgspenger nytt beløp","Simulering.OM.tidligereUtbetalt":"Omsorgspenger tidligere utbetalt","Simulering.OM.differanse":"Omsorgspenger avvik","Simulering.OMREF.nyttBeløp":"Omsorgspenger nytt beløp","Simulering.OMREF.tidligereUtbetalt":"Omsorgspenger tidligere utbetalt","Simulering.OMREF.differanse":"Omsorgspenger avvik","Simulering.OOP.nyttBeløp":"Pleiepenger nytt beløp","Simulering.OOP.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.OOP.differanse":"Pleiepenger avvik","Simulering.OOPREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.OOPREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.OOPREF.differanse":"Pleiepenger avvik","Simulering.OPP.nyttBeløp":"Opplæringspenger nytt beløp","Simulering.OPP.tidligereUtbetalt":"Opplæringspenger tidligere utbetalt","Simulering.OPP.differanse":"Opplæringspenger avvik","Simulering.OPPREF.nyttBeløp":"Opplæringspenger nytt beløp","Simulering.OPPREF.tidligereUtbetalt":"Opplæringspenger tidligere utbetalt","Simulering.OPPREF.differanse":"Opplæringspenger avvik","Simulering.PB.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PB.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PB.differanse":"Pleiepenger avvik","Simulering.PBREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PBREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PBREF.differanse":"Pleiepenger avvik","Simulering.PN.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PN.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PN.differanse":"Pleiepenger avvik","Simulering.PNREF.nyttBeløp":"Pleiepenger nytt beløp","Simulering.PNREF.tidligereUtbetalt":"Pleiepenger tidligere utbetalt","Simulering.PNREF.differanse":"Pleiepenger avvik","Simulering.REFUTG.nyttBeløp":"Engangstønad nytt beløp","Simulering.REFUTG.tidligereUtbetalt":"Engangstønad tidligere utbetalt","Simulering.REFUTG.differanse":"Engangstønad avvik","Simulering.SP.nyttBeløp":"Sykepenger nytt beløp","Simulering.SP.tidligereUtbetalt":"Sykepenger tidligere utbetalt","Simulering.SP.differanse":"Sykepenger avvik","Simulering.SPREF.nyttBeløp":"Sykepenger nytt beløp","Simulering.SPREF.tidligereUtbetalt":"Sykepenger tidligere utbetalt","Simulering.SPREF.differanse":"Sykepenger avvik","Simulering.SVP.nyttBeløp":"Svangerskapspenger nytt beløp","Simulering.SVP.tidligereUtbetalt":"Svangerskapspenger tidligere utbetalt","Simulering.SVP.differanse":"Svangerskapspenger avvik","Simulering.SVPREF.nyttBeløp":"Svangerskapspenger nytt beløp","Simulering.SVPREF.tidligereUtbetalt":"Svangerskapspenger tidligere utbetalt","Simulering.SVPREF.differanse":"Svangerskapspenger avvik","Simulering.resultatEtterMotregning":"Resultat etter motregning mellom ytelser","Simulering.inntrekk":"Inntrekk","Simulering.inntrekkNesteMåned":"Inntrekk i neste måned","Simulering.tilbakekreving":"Feilutbetaling","Simulering.etterbetaling":"Etterbetaling","Simulering.resultat":"Resultat","Simulering.avregnetBeløp":"Avregnet beløp","Simulering.headerText.VisFærreDetaljer":"Vis færre detaljer","Simulering.headerText.VisFlereDetaljer":"Vis flere detaljer","Simulering.headerText.januar":"Jan","Simulering.headerText.februar":"Feb","Simulering.headerText.mars":"Mars","Simulering.headerText.april":"Apr","Simulering.headerText.mai":"Mai","Simulering.headerText.juni":"Jun","Simulering.headerText.juli":"Jul","Simulering.headerText.august":"Aug","Simulering.headerText.september":"Sep","Simulering.headerText.oktober":"Okt","Simulering.headerText.november":"Nov","Simulering.headerText.desember":"Des","Simulering.ingenData":"Ingen informasjon om simulering mottatt fra økonomiløsningen.","Simulering.ingenPerioder":"Ingen periode med avvik","Simulering.AksjonspunktHelpText.5084":"Vurder videre behandling av tilbakekreving","Simulering.vurdering":"Beskriv hvorfor det har oppstått en feilutbetaling og hvordan den skal behandles videre","Simulering.videreBehandling":"Fastsett videre behandling","Simulering.gjennomfør":"Opprett tilbakekreving, send varsel","Simulering.OpprettMenIkkeSendVarsel":"Opprett tilbakekreving, ikke send varsel","Simulering.Opprett":"Opprett tilbakekreving","Simulering.avvent":"Avvent samordning, ingen tilbakekreving","Simulering.formAlternativ.ja":"Ja","Simulering.formAlternativ.nei":"Nei","Simulering.bruker":"Bruker","Simulering.varseltekst":"Send varsel om tilbakekreving","Simulering.fritekst":"Fritekst i varselet","Simulering.HjelpetekstForeldrepenger":"Her skal du oppgi hvorfor brukeren ikke skulle fått utbetalt ytelsen i perioden(e). Du må også oppgi hvordan feilutbetalingen ble oppdaget, hvem som oppdaget den og når den ble oppdaget eller meldt til Nav. Eksempel på tekst: «Vi mottok melding fra deg [dato]om at du hadde jobbet heltid. Du kan ikke jobbe og motta foreldrepenger samtidig. Da vi mottok meldingen fra deg, var det allerede utbetalt foreldrenger for perioden du har jobbet.","Simulering.HjelpetekstEngangsstonad":"Her skal du oppgi hvorfor brukeren ikke skulle fått utbetalt ytelsen i perioden(e). Du må også oppgi hvordan feilutbetalingen ble oppdaget, hvem som oppdaget den og når den ble oppdaget eller meldt til Nav.","Simulering.ApenTilbakekrevingsbehandling":"Det foreligger en åpen tilbakekrevingsbehandling, endringer i vedtaket vil automatisk oppdatere eksisterende feilutbetalte perioder og beløp.","Simulering.Etterbetaling.Tittel":"Ny inntektsmelding vil føre til en høy etterbetaling til bruker i en tidligere innvilget periode. Kontroller om dette er riktig","Simulering.Etterbetaling.ReadMoreTittel":"Dette bør undersøkes rundt etterbetalingen","Simulering.Etterbetaling.ReadMoreInnhold":"Saken stopper i simulering fordi arbeidsgiver har endret sitt refusjonskrav, eller har endret fra refusjon til direkte utbetaling i en periode som allerede har blitt utbetalt til bruker. I tillegg er etterbetalingen høy. Du må kontrollerer om dette er riktig. Dette kan gjøres ved å kontakte arbeidsgiver. Er det feil, må de sende inn ny inntektsmelding. Får du ikke tak i arbeidsgiver, kan du kontakte søker og høre om de kan spørre arbeidsgiveren sin.","Simulering.Etterbetaling.Vurdering":"Begrunn hvorfor du går videre med denne behandlingen.","SubmitButton.ConfirmInformation":"Bekreft og fortsett","Malform.Beskrivelse":"Foretrukket språk","Messages.PreviewText":"Forhåndsvis varselbrev"},yR=Ce(pR),Vr=({simuleringResultat:e,tilbakekrevingvalg:n,arbeidsgiverOpplysningerPerId:t,previewFptilbakeCallback:r})=>P.jsx(qd,{value:yR,children:P.jsx(ma,{arbeidsgiverOpplysningerPerId:t,simuleringResultat:e,tilbakekrevingvalg:n,previewCallback:r})});Vr.__docgenInfo={description:"",methods:[],displayName:"SimuleringProsessIndex",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},previewFptilbakeCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};Vr.__docgenInfo={description:"",methods:[],displayName:"SimuleringProsessIndex",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},previewFptilbakeCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { mottaker: string; fritekst: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ mottaker: string; fritekst: string }",signature:{properties:[{key:"mottaker",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const cR={123:{erPrivatPerson:!1,identifikator:"123",navn:"test"}},AR={simuleringResultat:{periode:{fom:"2019-01-01",tom:"2019-03-31"},sumEtterbetaling:0,sumFeilutbetaling:-49863,sumInntrekk:-10899,ingenPerioderMedAvvik:!1,perioderPerMottaker:[{mottakerType:zn.ARBG,mottakerIdentifikator:"123",mottakerNummer:"test",resultatPerFagområde:[{fagOmrådeKode:"FP",rader:[{feltnavn:"nyttBeløp",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:52619}]},{feltnavn:"tidligereUtbetalt",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:61795}]},{feltnavn:"differanse",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:-9176}]}]}],resultatOgMotregningRader:[{feltnavn:"inntrekkNesteMåned",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:0}]},{feltnavn:"resultat",resultaterPerMåned:[{periode:{fom:"2019-01-01",tom:"2019-01-31"},beløp:-26486}]}],nesteUtbPeriode:{fom:"2019-10-01",tom:"2019-10-31"}}]},slåttAvInntrekk:!1},GR={title:"prosess/prosess-simulering",component:Vr,decorators:[Ut,Ht],args:{arbeidsgiverOpplysningerPerId:cR,simuleringResultat:AR,previewFptilbakeCallback:To("button-click")},render:e=>P.jsx(Vr,{...e})},tn={args:{aksjonspunkterForPanel:[{definisjon:ue.VURDER_FEILUTBETALING,begrunnelse:void 0,status:Zn.OPPRETTET}]}},an={args:{aksjonspunkterForPanel:[{definisjon:ue.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:void 0,status:Zn.OPPRETTET}]}},on={args:{aksjonspunkterForPanel:[{definisjon:ue.VURDER_FEILUTBETALING,begrunnelse:void 0,status:Zn.OPPRETTET},{definisjon:ue.KONTROLLER_STOR_ETTERBETALING_SØKER,begrunnelse:void 0}]}},sn={args:{aksjonspunkterForPanel:[],tilbakekrevingvalg:{videreBehandling:ln.TILBAKEKR_OPPDATER,varseltekst:"varsel-eksempel"}}};var xi,Yi,Ci;tn.parameters={...tn.parameters,docs:{...(xi=tn.parameters)==null?void 0:xi.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_FEILUTBETALING,
      begrunnelse: undefined,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[]
  }
}`,...(Ci=(Yi=tn.parameters)==null?void 0:Yi.docs)==null?void 0:Ci.source}}};var $i,Ji,Wi;an.parameters={...an.parameters,docs:{...($i=an.parameters)==null?void 0:$i.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER,
      begrunnelse: undefined,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[]
  }
}`,...(Wi=(Ji=an.parameters)==null?void 0:Ji.docs)==null?void 0:Wi.source}}};var zi,Xi,Zi;on.parameters={...on.parameters,docs:{...(zi=on.parameters)==null?void 0:zi.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_FEILUTBETALING,
      begrunnelse: undefined,
      status: AksjonspunktStatus.OPPRETTET
    }, {
      definisjon: AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER,
      begrunnelse: undefined
    }] as Aksjonspunkt[]
  }
}`,...(Zi=(Xi=on.parameters)==null?void 0:Xi.docs)==null?void 0:Zi.source}}};var Qi,eo,no;sn.parameters={...sn.parameters,docs:{...(Qi=sn.parameters)==null?void 0:Qi.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    tilbakekrevingvalg: {
      videreBehandling: TilbakekrevingVidereBehandling.TILBAKEKR_OPPDATER,
      varseltekst: 'varsel-eksempel'
    } as TilbakekrevingValg
  }
}`,...(no=(eo=sn.parameters)==null?void 0:eo.docs)==null?void 0:no.source}}};var ro,to,ao;tn.parameters={...tn.parameters,docs:{...(ro=tn.parameters)==null?void 0:ro.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_FEILUTBETALING,
      begrunnelse: undefined,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[]
  }
}`,...(ao=(to=tn.parameters)==null?void 0:to.docs)==null?void 0:ao.source}}};var io,oo,so;an.parameters={...an.parameters,docs:{...(io=an.parameters)==null?void 0:io.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER,
      begrunnelse: undefined,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[]
  }
}`,...(so=(oo=an.parameters)==null?void 0:oo.docs)==null?void 0:so.source}}};var lo,uo,go;on.parameters={...on.parameters,docs:{...(lo=on.parameters)==null?void 0:lo.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_FEILUTBETALING,
      begrunnelse: undefined,
      status: AksjonspunktStatus.OPPRETTET
    }, {
      definisjon: AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER,
      begrunnelse: undefined
    }] as Aksjonspunkt[]
  }
}`,...(go=(uo=on.parameters)==null?void 0:uo.docs)==null?void 0:go.source}}};var ko,vo,Eo;sn.parameters={...sn.parameters,docs:{...(ko=sn.parameters)==null?void 0:ko.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    tilbakekrevingvalg: {
      videreBehandling: TilbakekrevingVidereBehandling.TILBAKEKR_OPPDATER,
      varseltekst: 'varsel-eksempel'
    } as TilbakekrevingValg
  }
}`,...(Eo=(vo=sn.parameters)==null?void 0:vo.docs)==null?void 0:Eo.source}}};const BR=["AksjonspunktVurderFeilutbetaling","AksjonspunktKontrollerEtterbetaling","AksjonspunktVurderFeilutbetalingOgEtterbetaling","SimuleringspanelUtenAksjonspunkt"];export{an as AksjonspunktKontrollerEtterbetaling,tn as AksjonspunktVurderFeilutbetaling,on as AksjonspunktVurderFeilutbetalingOgEtterbetaling,sn as SimuleringspanelUtenAksjonspunkt,BR as __namedExportsOrder,GR as default};
