import{v as Cc}from"./v4-CtRu48qb.js";import{j as te}from"./jsx-runtime-CLpGMVip.js";import{r as U,R as B}from"./index-D7xSkP6m.js";import{d as vr,n as $c}from"./nb-5jum6Kox.js";import{M as Jc}from"./index-qa_G7Yaz.js";import{c as Pi,g as Wc}from"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CNxZBzmj.js";const{addons:zc}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:Xc}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:Ng}=__STORYBOOK_MODULE_GLOBAL__;var Zc="storybook/actions",Qc=`${Zc}/action-event`,eh={depth:10,clearOnStoryChange:!0,limit:50},Lf=(e,t)=>{let r=Object.getPrototypeOf(e);return!r||t(r)?r:Lf(r,t)},nh=e=>!!(typeof e=="object"&&e&&Lf(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),rh=e=>{if(nh(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let r=Object.getOwnPropertyDescriptor(t,"view"),a=r==null?void 0:r.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...r,value:Object.create(a.constructor.prototype)}),t}return e},th=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?Cc():Date.now().toString(36)+Math.random().toString(36).substring(2);function ah(e,t={}){let r={...eh,...t},a=function(...s){var T,p;if(t.implicit){let O=(T="__STORYBOOK_PREVIEW__"in Ng?Ng.__STORYBOOK_PREVIEW__:void 0)==null?void 0:T.storyRenders.find(L=>L.phase==="playing"||L.phase==="rendering");if(O){let L=!((p=window==null?void 0:window.FEATURES)!=null&&p.disallowImplicitActionsInRenderV8),c=new Xc({phase:O.phase,name:e,deprecated:L});if(L)console.warn(c);else throw c}}let l=zc.getChannel(),d=th(),g=5,f=s.map(rh),m=s.length>1?f:f[0],v={id:d,count:0,data:{name:e,args:m},options:{...r,maxDepth:g+(r.depth||3),allowFunction:r.allowFunction||!1}};l.emit(Qc,v)};return a.isAction=!0,a.implicit=t.implicit,a}var ct=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN="5032",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYR_BEREGNING="6007",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(ct||{}),Jt=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(Jt||{}),Ci=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(Ci||{});Ci.BRUKERS_ANDEL;Ci.FRILANS;Ci.EGEN_NÆRING;var Kf=(e=>(e.ARBEID_TYPE="ArbeidType",e.AVSLAGSARSAK="Avslagsårsak",e.VENT_AARSAK="Venteårsak",e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.KLAGE_AVVIST_AARSAK="KlageAvvistÅrsak",e.KLAGE_MEDHOLD_ARSAK="KlageMedholdÅrsak",e.KLAGE_HJEMMEL="KlageHjemmel",e.OMSORGSOVERTAKELSE_VILKAR_TYPE="OmsorgsovertakelseVilkårType",e.MEDLEMSKAP_MANUELL_VURDERING_TYPE="MedlemskapManuellVurderingType",e.VERGE_TYPE="VergeType",e.LANDKODER="Landkoder",e.MORS_AKTIVITET="MorsAktivitet",e.VIRKSOMHET_TYPE="VirksomhetType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.PERSONSTATUS_TYPE="PersonstatusType",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.FORELDRE_TYPE="ForeldreType",e.FAMILIE_HENDELSE_TYPE="FamilieHendelseType",e.INNSYN_RESULTAT_TYPE="InnsynResultatType",e.BEHANDLING_TYPE="BehandlingType",e.OPPHOLD_ARSAK="OppholdÅrsak",e.UTSETTELSE_AARSAK_TYPE="UtsettelseÅrsak",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.UTTAK_PERIODE_TYPE="UttakPeriodeType",e.REVURDERING_VARSLING_ÅRSAK="RevurderingVarslingÅrsak",e.MANUELL_BEHANDLING_AARSAK="ManuellBehandlingÅrsak",e.PERIODE_RESULTAT_AARSAK="PeriodeResultatÅrsak",e.INNTEKTSKATEGORI="Inntektskategori",e.BEREGNINGSGRUNNLAG_ANDELTYPER="BeregningsgrunnlagAndeltype",e.AKTIVITET_STATUS="AktivitetStatus",e.ARBEIDSKATEGORI="Arbeidskategori",e.FAGSYSTEM="Fagsystem",e.REGION="Region",e.SIVILSTAND_TYPE="SivilstandType",e.FAKTA_OM_BEREGNING_TILFELLE="FaktaOmBeregningTilfelle",e.GRADERING_AVSLAG_AARSAK="GraderingAvslagÅrsak",e.SKJERMLENKE_TYPE="SkjermlenkeType",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.ARBEIDSFORHOLD_HANDLING_TYPE="ArbeidsforholdHandlingType",e.HISTORIKK_OPPLYSNING_TYPE="HistorikkOpplysningType",e.HISTORIKK_ENDRET_FELT_TYPE="HistorikkEndretFeltType",e.HISTORIKKINNSLAG_TYPE="HistorikkinnslagType",e.HISTORIKK_AKTOER="HistorikkAktør",e.BEHANDLING_STATUS="BehandlingStatus",e.FAR_SOEKER_TYPE="FarSøkerType",e.MEDLEMSKAP_DEKNING="MedlemskapDekningType",e.MEDLEMSKAP_TYPE="MedlemskapType",e.STOENADSKONTOTYPE="StønadskontoType",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.UTTAK_ARBEID_TYPE="UttakArbeidType",e.UTTAK_UTSETTELSE_TYPE="UttakUtsettelseType",e.VILKAR_TYPE="VilkårType",e.AKTSOMHET="Aktsomhet",e.VURDERING="AnnenVurdering",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.PERMISJONSBESKRIVELSE_TYPE="PermisjonsbeskrivelseType",e.VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG="VurderArbeidsforholdHistorikkinnslag",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.VURDER_AARSAK="VurderÅrsak",e.ANKE_OMGJOER_AARSAK="AnkeOmgjørÅrsak",e.AKTIVITETSKRAV_AVKLARING="KontrollerAktivitetskravAvklaring",e.OPPHOLDSTILLATELSE_TYPE="OppholdstillatelseType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e.FORDELING_PERIODE_KILDE="FordelingPeriodeKilde",e.RELASJONSROLLE_TYPE="RelasjonsRolleType",e.FAGSAK_MARKERING="FagsakMarkering",e.ADRESSE_TYPE="AdresseType",e.NATURAL_YTELSE_TYPE="NaturalYtelseType",e))(Kf||{});const ih=(e,t,r,a)=>{let s=e[t];if(!s||s.length===0)return"";a&&(s=s[a]);const l=s.find(d=>d.kode===r);return l?l.navn:""},sh=e=>(t,r,a)=>ih(e,r,t,a);var Vn=(e=>(e.ARBEID="ARBEID",e.AAP="AAP",e.DAGPENGER="DAGPENGER",e.FORELDREPENGER="FORELDREPENGER",e.FRILANS="FRILANS",e.MILITAR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e.NARING="NÆRING",e.OMSORGSPENGER="OMSORGSPENGER",e.OPPLARINGSPENGER="OPPLÆRINGSPENGER",e.PLEIEPENGER="PLEIEPENGER",e.SVANGERSKAPSPENGER="SVANGERSKAPSPENGER",e.SYKEPENGER="SYKEPENGER",e.VARTPENGER="VARTPENGER",e.VIDERE_ETTERUTDANNING="VIDERE_ETTERUTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.VENTELØNN_VARTPENGER="VENTELØNN_VARTPENGER",e.ETTERLONN_SLUTTPAKKE="ETTERLØNN_SLUTTPAKKE",e))(Vn||{}),Vo=function(e,t){return Vo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(r[s]=a[s])},Vo(e,t)};function Er(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Vo(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var ge=function(){return ge=Object.assign||function(t){for(var r,a=1,s=arguments.length;a<s;a++){r=arguments[a];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},ge.apply(this,arguments)};function Yt(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r}function Rr(e,t,r){if(r||arguments.length===2)for(var a=0,s=t.length,l;a<s;a++)(l||!(a in t))&&(l||(l=Array.prototype.slice.call(t,0,a)),l[a]=t[a]);return e.concat(l||Array.prototype.slice.call(t))}function pr(e,t){var r=t&&t.cache?t.cache:fh,a=t&&t.serializer?t.serializer:gh,s=t&&t.strategy?t.strategy:lh;return s(e,{cache:r,serializer:a})}function oh(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Df(e,t,r,a){var s=oh(a)?a:r(a),l=t.get(s);return typeof l>"u"&&(l=e.call(this,a),t.set(s,l)),l}function Ff(e,t,r){var a=Array.prototype.slice.call(arguments,3),s=r(a),l=t.get(s);return typeof l>"u"&&(l=e.apply(this,a),t.set(s,l)),l}function hl(e,t,r,a,s){return r.bind(t,e,a,s)}function lh(e,t){var r=e.length===1?Df:Ff;return hl(e,this,r,t.cache.create(),t.serializer)}function uh(e,t){return hl(e,this,Ff,t.cache.create(),t.serializer)}function dh(e,t){return hl(e,this,Df,t.cache.create(),t.serializer)}var gh=function(){return JSON.stringify(arguments)},kh=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(t){return this.cache[t]},e.prototype.set=function(t,r){this.cache[t]=r},e}(),fh={create:function(){return new kh}},Ar={variadic:uh,monadic:dh},Ie;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Ie||(Ie={}));var He;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(He||(He={}));var Ct;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Ct||(Ct={}));function Ig(e){return e.type===He.literal}function mh(e){return e.type===He.argument}function Mf(e){return e.type===He.number}function Bf(e){return e.type===He.date}function Gf(e){return e.type===He.time}function qf(e){return e.type===He.select}function wf(e){return e.type===He.plural}function vh(e){return e.type===He.pound}function Vf(e){return e.type===He.tag}function jf(e){return!!(e&&typeof e=="object"&&e.type===Ct.number)}function jo(e){return!!(e&&typeof e=="object"&&e.type===Ct.dateTime)}var Uf=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,Eh=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function bh(e){var t={};return e.replace(Eh,function(r){var a=r.length;switch(r[0]){case"G":t.era=a===4?"long":a===5?"narrow":"short";break;case"y":t.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=a===4?"long":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][a-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][a-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][a-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][a-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][a-1];break;case"s":t.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),t}var Th=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function yh(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var t=e.split(Th).filter(function(p){return p.length>0}),r=[],a=0,s=t;a<s.length;a++){var l=s[a],d=l.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var g=d[0],f=d.slice(1),m=0,v=f;m<v.length;m++){var T=v[m];if(T.length===0)throw new Error("Invalid number skeleton")}r.push({stem:g,options:f})}return r}function ph(e){return e.replace(/^(.*?)-/,"")}var Pg=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Hf=/^(@+)?(\+|#+)?[rs]?$/g,Ah=/(\*)(0+)|(#+)(0+)|(0+)/g,xf=/^(0+)$/;function Og(e){var t={};return e[e.length-1]==="r"?t.roundingPriority="morePrecision":e[e.length-1]==="s"&&(t.roundingPriority="lessPrecision"),e.replace(Hf,function(r,a,s){return typeof s!="string"?(t.minimumSignificantDigits=a.length,t.maximumSignificantDigits=a.length):s==="+"?t.minimumSignificantDigits=a.length:a[0]==="#"?t.maximumSignificantDigits=a.length:(t.minimumSignificantDigits=a.length,t.maximumSignificantDigits=a.length+(typeof s=="string"?s.length:0)),""}),t}function Yf(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function ch(e){var t;if(e[0]==="E"&&e[1]==="E"?(t={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(t={notation:"scientific"},e=e.slice(1)),t){var r=e.slice(0,2);if(r==="+!"?(t.signDisplay="always",e=e.slice(2)):r==="+?"&&(t.signDisplay="exceptZero",e=e.slice(2)),!xf.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function Lg(e){var t={},r=Yf(e);return r||t}function hh(e){for(var t={},r=0,a=e;r<a.length;r++){var s=a[r];switch(s.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=s.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=ph(s.options[0]);continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=ge(ge(ge({},t),{notation:"scientific"}),s.options.reduce(function(f,m){return ge(ge({},f),Lg(m))},{}));continue;case"engineering":t=ge(ge(ge({},t),{notation:"engineering"}),s.options.reduce(function(f,m){return ge(ge({},f),Lg(m))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":t.roundingMode="floor";continue;case"rounding-mode-ceiling":t.roundingMode="ceil";continue;case"rounding-mode-down":t.roundingMode="trunc";continue;case"rounding-mode-up":t.roundingMode="expand";continue;case"rounding-mode-half-even":t.roundingMode="halfEven";continue;case"rounding-mode-half-down":t.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":t.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(Ah,function(f,m,v,T,p,O){if(m)t.minimumIntegerDigits=v.length;else{if(T&&p)throw new Error("We currently do not support maximum integer digits");if(O)throw new Error("We currently do not support exact integer digits")}return""});continue}if(xf.test(s.stem)){t.minimumIntegerDigits=s.stem.length;continue}if(Pg.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(Pg,function(f,m,v,T,p,O){return v==="*"?t.minimumFractionDigits=m.length:T&&T[0]==="#"?t.maximumFractionDigits=T.length:p&&O?(t.minimumFractionDigits=p.length,t.maximumFractionDigits=p.length+O.length):(t.minimumFractionDigits=m.length,t.maximumFractionDigits=m.length),""});var l=s.options[0];l==="w"?t=ge(ge({},t),{trailingZeroDisplay:"stripIfInteger"}):l&&(t=ge(ge({},t),Og(l)));continue}if(Hf.test(s.stem)){t=ge(ge({},t),Og(s.stem));continue}var d=Yf(s.stem);d&&(t=ge(ge({},t),d));var g=ch(s.stem);g&&(t=ge(ge({},t),g))}return t}var Oi={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Rh(e,t){for(var r="",a=0;a<e.length;a++){var s=e.charAt(a);if(s==="j"){for(var l=0;a+1<e.length&&e.charAt(a+1)===s;)l++,a++;var d=1+(l&1),g=l<2?1:3+(l>>1),f="a",m=_h(t);for((m=="H"||m=="k")&&(g=0);g-- >0;)r+=f;for(;d-- >0;)r=m+r}else s==="J"?r+="H":r+=s}return r}function _h(e){var t=e.hourCycle;if(t===void 0&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,a;r!=="root"&&(a=e.maximize().region);var s=Oi[a||""]||Oi[r||""]||Oi["".concat(r,"-001")]||Oi["001"];return s[0]}var yo,Sh=new RegExp("^".concat(Uf.source,"*")),Nh=new RegExp("".concat(Uf.source,"*$"));function Oe(e,t){return{start:e,end:t}}var Ih=!!String.prototype.startsWith&&"_a".startsWith("a",1),Ph=!!String.fromCodePoint,Oh=!!Object.fromEntries,Lh=!!String.prototype.codePointAt,Kh=!!String.prototype.trimStart,Dh=!!String.prototype.trimEnd,Fh=!!Number.isSafeInteger,Mh=Fh?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Uo=!0;try{var Bh=$f("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Uo=((yo=Bh.exec("a"))===null||yo===void 0?void 0:yo[0])==="a"}catch{Uo=!1}var Kg=Ih?function(t,r,a){return t.startsWith(r,a)}:function(t,r,a){return t.slice(a,a+r.length)===r},Ho=Ph?String.fromCodePoint:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var a="",s=t.length,l=0,d;s>l;){if(d=t[l++],d>1114111)throw RangeError(d+" is not a valid code point");a+=d<65536?String.fromCharCode(d):String.fromCharCode(((d-=65536)>>10)+55296,d%1024+56320)}return a},Dg=Oh?Object.fromEntries:function(t){for(var r={},a=0,s=t;a<s.length;a++){var l=s[a],d=l[0],g=l[1];r[d]=g}return r},Cf=Lh?function(t,r){return t.codePointAt(r)}:function(t,r){var a=t.length;if(!(r<0||r>=a)){var s=t.charCodeAt(r),l;return s<55296||s>56319||r+1===a||(l=t.charCodeAt(r+1))<56320||l>57343?s:(s-55296<<10)+(l-56320)+65536}},Gh=Kh?function(t){return t.trimStart()}:function(t){return t.replace(Sh,"")},qh=Dh?function(t){return t.trimEnd()}:function(t){return t.replace(Nh,"")};function $f(e,t){return new RegExp(e,t)}var xo;if(Uo){var Fg=$f("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");xo=function(t,r){var a;Fg.lastIndex=r;var s=Fg.exec(t);return(a=s[1])!==null&&a!==void 0?a:""}}else xo=function(t,r){for(var a=[];;){var s=Cf(t,r);if(s===void 0||Jf(s)||Uh(s))break;a.push(s),r+=s>=65536?2:1}return Ho.apply(void 0,a)};var wh=function(){function e(t,r){r===void 0&&(r={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(t,r,a){for(var s=[];!this.isEOF();){var l=this.char();if(l===123){var d=this.parseArgument(t,a);if(d.err)return d;s.push(d.val)}else{if(l===125&&t>0)break;if(l===35&&(r==="plural"||r==="selectordinal")){var g=this.clonePosition();this.bump(),s.push({type:He.pound,location:Oe(g,this.clonePosition())})}else if(l===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(Ie.UNMATCHED_CLOSING_TAG,Oe(this.clonePosition(),this.clonePosition()))}else if(l===60&&!this.ignoreTag&&Yo(this.peek()||0)){var d=this.parseTag(t,r);if(d.err)return d;s.push(d.val)}else{var d=this.parseLiteral(t,r);if(d.err)return d;s.push(d.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(t,r){var a=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:He.literal,value:"<".concat(s,"/>"),location:Oe(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var l=this.parseMessage(t+1,r,!0);if(l.err)return l;var d=l.val,g=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Yo(this.char()))return this.error(Ie.INVALID_TAG,Oe(g,this.clonePosition()));var f=this.clonePosition(),m=this.parseTagName();return s!==m?this.error(Ie.UNMATCHED_CLOSING_TAG,Oe(f,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:He.tag,value:s,children:d,location:Oe(a,this.clonePosition())},err:null}:this.error(Ie.INVALID_TAG,Oe(g,this.clonePosition())))}else return this.error(Ie.UNCLOSED_TAG,Oe(a,this.clonePosition()))}else return this.error(Ie.INVALID_TAG,Oe(a,this.clonePosition()))},e.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&jh(this.char());)this.bump();return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(t,r){for(var a=this.clonePosition(),s="";;){var l=this.tryParseQuote(r);if(l){s+=l;continue}var d=this.tryParseUnquoted(t,r);if(d){s+=d;continue}var g=this.tryParseLeftAngleBracket();if(g){s+=g;continue}break}var f=Oe(a,this.clonePosition());return{val:{type:He.literal,value:s,location:f},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Vh(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(t){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(t==="plural"||t==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(a);this.bump()}return Ho.apply(void 0,r)},e.prototype.tryParseUnquoted=function(t,r){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(r==="plural"||r==="selectordinal")||a===125&&t>0?null:(this.bump(),Ho(a))},e.prototype.parseArgument=function(t,r){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,Oe(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Ie.EMPTY_ARGUMENT,Oe(a,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(Ie.MALFORMED_ARGUMENT,Oe(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,Oe(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:He.argument,value:s,location:Oe(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,Oe(a,this.clonePosition())):this.parseArgumentOptions(t,r,s,a);default:return this.error(Ie.MALFORMED_ARGUMENT,Oe(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),r=this.offset(),a=xo(this.message,r),s=r+a.length;this.bumpTo(s);var l=this.clonePosition(),d=Oe(t,l);return{value:a,location:d}},e.prototype.parseArgumentOptions=function(t,r,a,s){var l,d=this.clonePosition(),g=this.parseIdentifierIfPossible().value,f=this.clonePosition();switch(g){case"":return this.error(Ie.EXPECT_ARGUMENT_TYPE,Oe(d,f));case"number":case"date":case"time":{this.bumpSpace();var m=null;if(this.bumpIf(",")){this.bumpSpace();var v=this.clonePosition(),T=this.parseSimpleArgStyleIfPossible();if(T.err)return T;var p=qh(T.val);if(p.length===0)return this.error(Ie.EXPECT_ARGUMENT_STYLE,Oe(this.clonePosition(),this.clonePosition()));var O=Oe(v,this.clonePosition());m={style:p,styleLocation:O}}var L=this.tryParseArgumentClose(s);if(L.err)return L;var c=Oe(s,this.clonePosition());if(m&&Kg(m==null?void 0:m.style,"::",0)){var N=Gh(m.style.slice(2));if(g==="number"){var T=this.parseNumberSkeletonFromString(N,m.styleLocation);return T.err?T:{val:{type:He.number,value:a,location:c,style:T.val},err:null}}else{if(N.length===0)return this.error(Ie.EXPECT_DATE_TIME_SKELETON,c);var F=N;this.locale&&(F=Rh(N,this.locale));var p={type:Ct.dateTime,pattern:F,location:m.styleLocation,parsedOptions:this.shouldParseSkeletons?bh(F):{}},G=g==="date"?He.date:He.time;return{val:{type:G,value:a,location:c,style:p},err:null}}}return{val:{type:g==="number"?He.number:g==="date"?He.date:He.time,value:a,location:c,style:(l=m==null?void 0:m.style)!==null&&l!==void 0?l:null},err:null}}case"plural":case"selectordinal":case"select":{var P=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Ie.EXPECT_SELECT_ARGUMENT_OPTIONS,Oe(P,ge({},P)));this.bumpSpace();var Q=this.parseIdentifierIfPossible(),A=0;if(g!=="select"&&Q.value==="offset"){if(!this.bumpIf(":"))return this.error(Ie.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Oe(this.clonePosition(),this.clonePosition()));this.bumpSpace();var T=this.tryParseDecimalInteger(Ie.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ie.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(T.err)return T;this.bumpSpace(),Q=this.parseIdentifierIfPossible(),A=T.val}var w=this.tryParsePluralOrSelectOptions(t,g,r,Q);if(w.err)return w;var L=this.tryParseArgumentClose(s);if(L.err)return L;var K=Oe(s,this.clonePosition());return g==="select"?{val:{type:He.select,value:a,options:Dg(w.val),location:K},err:null}:{val:{type:He.plural,value:a,options:Dg(w.val),offset:A,pluralType:g==="plural"?"cardinal":"ordinal",location:K},err:null}}default:return this.error(Ie.INVALID_ARGUMENT_TYPE,Oe(d,f))}},e.prototype.tryParseArgumentClose=function(t){return this.isEOF()||this.char()!==125?this.error(Ie.EXPECT_ARGUMENT_CLOSING_BRACE,Oe(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,r=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Ie.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Oe(s,this.clonePosition()));this.bump();break}case 123:{t+=1,this.bump();break}case 125:{if(t>0)t-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(t,r){var a=[];try{a=yh(t)}catch{return this.error(Ie.INVALID_NUMBER_SKELETON,r)}return{val:{type:Ct.number,tokens:a,location:r,parsedOptions:this.shouldParseSkeletons?hh(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(t,r,a,s){for(var l,d=!1,g=[],f=new Set,m=s.value,v=s.location;;){if(m.length===0){var T=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var p=this.tryParseDecimalInteger(Ie.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ie.INVALID_PLURAL_ARGUMENT_SELECTOR);if(p.err)return p;v=Oe(T,this.clonePosition()),m=this.message.slice(T.offset,this.offset())}else break}if(f.has(m))return this.error(r==="select"?Ie.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Ie.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,v);m==="other"&&(d=!0),this.bumpSpace();var O=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?Ie.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Ie.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Oe(this.clonePosition(),this.clonePosition()));var L=this.parseMessage(t+1,r,a);if(L.err)return L;var c=this.tryParseArgumentClose(O);if(c.err)return c;g.push([m,{value:L.val,location:Oe(O,this.clonePosition())}]),f.add(m),this.bumpSpace(),l=this.parseIdentifierIfPossible(),m=l.value,v=l.location}return g.length===0?this.error(r==="select"?Ie.EXPECT_SELECT_ARGUMENT_SELECTOR:Ie.EXPECT_PLURAL_ARGUMENT_SELECTOR,Oe(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(Ie.MISSING_OTHER_CLAUSE,Oe(this.clonePosition(),this.clonePosition())):{val:g,err:null}},e.prototype.tryParseDecimalInteger=function(t,r){var a=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var l=!1,d=0;!this.isEOF();){var g=this.char();if(g>=48&&g<=57)l=!0,d=d*10+(g-48),this.bump();else break}var f=Oe(s,this.clonePosition());return l?(d*=a,Mh(d)?{val:d,err:null}:this.error(r,f)):this.error(t,f)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var r=Cf(this.message,t);if(r===void 0)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(t,r){return{val:null,err:{kind:t,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var t=this.char();t===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},e.prototype.bumpIf=function(t){if(Kg(this.message,t,this.offset())){for(var r=0;r<t.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(t){var r=this.offset(),a=this.message.indexOf(t,r);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var r=this.offset();if(r===t)break;if(r>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Jf(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),r=this.offset(),a=this.message.charCodeAt(r+(t>=65536?2:1));return a??null},e}();function Yo(e){return e>=97&&e<=122||e>=65&&e<=90}function Vh(e){return Yo(e)||e===47}function jh(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Jf(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function Uh(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Co(e){e.forEach(function(t){if(delete t.location,qf(t)||wf(t))for(var r in t.options)delete t.options[r].location,Co(t.options[r].value);else Mf(t)&&jf(t.style)||(Bf(t)||Gf(t))&&jo(t.style)?delete t.style.location:Vf(t)&&Co(t.children)})}function Hh(e,t){t===void 0&&(t={}),t=ge({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var r=new wh(e,t).parse();if(r.err){var a=SyntaxError(Ie[r.err.kind]);throw a.location=r.err.location,a.originalMessage=r.err.message,a}return t!=null&&t.captureLocation||Co(r.val),r.val}var Or;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Or||(Or={}));var it=function(e){Er(t,e);function t(r,a,s){var l=e.call(this,r)||this;return l.code=a,l.originalMessage=s,l}return t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),Mg=function(e){Er(t,e);function t(r,a,s,l){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(a,'". Options are "').concat(Object.keys(s).join('", "'),'"'),Or.INVALID_VALUE,l)||this}return t}(it),xh=function(e){Er(t,e);function t(r,a,s){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(a),Or.INVALID_VALUE,s)||this}return t}(it),Yh=function(e){Er(t,e);function t(r,a){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(a,'"'),Or.MISSING_VALUE,a)||this}return t}(it),Nn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(Nn||(Nn={}));function Ch(e){return e.length<2?e:e.reduce(function(t,r){var a=t[t.length-1];return!a||a.type!==Nn.literal||r.type!==Nn.literal?t.push(r):a.value+=r.value,t},[])}function Wf(e){return typeof e=="function"}function Bi(e,t,r,a,s,l,d){if(e.length===1&&Ig(e[0]))return[{type:Nn.literal,value:e[0].value}];for(var g=[],f=0,m=e;f<m.length;f++){var v=m[f];if(Ig(v)){g.push({type:Nn.literal,value:v.value});continue}if(vh(v)){typeof l=="number"&&g.push({type:Nn.literal,value:r.getNumberFormat(t).format(l)});continue}var T=v.value;if(!(s&&T in s))throw new Yh(T,d);var p=s[T];if(mh(v)){(!p||typeof p=="string"||typeof p=="number")&&(p=typeof p=="string"||typeof p=="number"?String(p):""),g.push({type:typeof p=="string"?Nn.literal:Nn.object,value:p});continue}if(Bf(v)){var O=typeof v.style=="string"?a.date[v.style]:jo(v.style)?v.style.parsedOptions:void 0;g.push({type:Nn.literal,value:r.getDateTimeFormat(t,O).format(p)});continue}if(Gf(v)){var O=typeof v.style=="string"?a.time[v.style]:jo(v.style)?v.style.parsedOptions:a.time.medium;g.push({type:Nn.literal,value:r.getDateTimeFormat(t,O).format(p)});continue}if(Mf(v)){var O=typeof v.style=="string"?a.number[v.style]:jf(v.style)?v.style.parsedOptions:void 0;O&&O.scale&&(p=p*(O.scale||1)),g.push({type:Nn.literal,value:r.getNumberFormat(t,O).format(p)});continue}if(Vf(v)){var L=v.children,c=v.value,N=s[c];if(!Wf(N))throw new xh(c,"function",d);var F=Bi(L,t,r,a,s,l),G=N(F.map(function(A){return A.value}));Array.isArray(G)||(G=[G]),g.push.apply(g,G.map(function(A){return{type:typeof A=="string"?Nn.literal:Nn.object,value:A}}))}if(qf(v)){var P=v.options[p]||v.options.other;if(!P)throw new Mg(v.value,p,Object.keys(v.options),d);g.push.apply(g,Bi(P.value,t,r,a,s));continue}if(wf(v)){var P=v.options["=".concat(p)];if(!P){if(!Intl.PluralRules)throw new it(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Or.MISSING_INTL_API,d);var Q=r.getPluralRules(t,{type:v.pluralType}).select(p-(v.offset||0));P=v.options[Q]||v.options.other}if(!P)throw new Mg(v.value,p,Object.keys(v.options),d);g.push.apply(g,Bi(P.value,t,r,a,s,p-(v.offset||0)));continue}}return Ch(g)}function $h(e,t){return t?ge(ge(ge({},e||{}),t||{}),Object.keys(e).reduce(function(r,a){return r[a]=ge(ge({},e[a]),t[a]||{}),r},{})):e}function Jh(e,t){return t?Object.keys(e).reduce(function(r,a){return r[a]=$h(e[a],t[a]),r},ge({},e)):e}function po(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}function Wh(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:pr(function(){for(var t,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((t=Intl.NumberFormat).bind.apply(t,Rr([void 0],r,!1)))},{cache:po(e.number),strategy:Ar.variadic}),getDateTimeFormat:pr(function(){for(var t,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((t=Intl.DateTimeFormat).bind.apply(t,Rr([void 0],r,!1)))},{cache:po(e.dateTime),strategy:Ar.variadic}),getPluralRules:pr(function(){for(var t,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((t=Intl.PluralRules).bind.apply(t,Rr([void 0],r,!1)))},{cache:po(e.pluralRules),strategy:Ar.variadic})}}var zf=function(){function e(t,r,a,s){r===void 0&&(r=e.defaultLocale);var l=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(f){var m=l.formatToParts(f);if(m.length===1)return m[0].value;var v=m.reduce(function(T,p){return!T.length||p.type!==Nn.literal||typeof T[T.length-1]!="string"?T.push(p.value):T[T.length-1]+=p.value,T},[]);return v.length<=1?v[0]||"":v},this.formatToParts=function(f){return Bi(l.ast,l.locales,l.formatters,l.formats,f,void 0,l.message)},this.resolvedOptions=function(){var f;return{locale:((f=l.resolvedLocale)===null||f===void 0?void 0:f.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=s||{};d.formatters;var g=Yt(d,["formatters"]);this.ast=e.__parse(t,ge(ge({},g),{locale:this.resolvedLocale}))}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Jh(e.formats,a),this.formatters=s&&s.formatters||Wh(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(t){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(t);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof t=="string"?t:t[0])}},e.__parse=Hh,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),ht;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(ht||(ht={}));var Ka=function(e){Er(t,e);function t(r,a,s){var l=this,d=s?s instanceof Error?s:new Error(String(s)):void 0;return l=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(a,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,l.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(l,t),l}return t}(Error),zh=function(e){Er(t,e);function t(r,a){return e.call(this,ht.UNSUPPORTED_FORMATTER,r,a)||this}return t}(Ka),Xh=function(e){Er(t,e);function t(r,a){return e.call(this,ht.INVALID_CONFIG,r,a)||this}return t}(Ka),Bg=function(e){Er(t,e);function t(r,a){return e.call(this,ht.MISSING_DATA,r,a)||this}return t}(Ka),sr=function(e){Er(t,e);function t(r,a,s){var l=e.call(this,ht.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(a,`
`),s)||this;return l.locale=a,l}return t}(Ka),Ao=function(e){Er(t,e);function t(r,a,s,l){var d=e.call(this,"".concat(r,`
MessageID: `).concat(s==null?void 0:s.id,`
Default Message: `).concat(s==null?void 0:s.defaultMessage,`
Description: `).concat(s==null?void 0:s.description,`
`),a,l)||this;return d.descriptor=s,d.locale=a,d}return t}(sr),Zh=function(e){Er(t,e);function t(r,a){var s=e.call(this,ht.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(a,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(l){var d;return(d=l.value)!==null&&d!==void 0?d:JSON.stringify(l)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=r,s}return t}(Ka);function Qh(e,t,r){if(r===void 0&&(r=Error),!e)throw new r(t)}function Wt(e,t,r){return r===void 0&&(r={}),t.reduce(function(a,s){return s in e?a[s]=e[s]:s in r&&(a[s]=r[s]),a},{})}var eR=function(e){},nR=function(e){},Xf={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:eR,onWarn:nR};function Zf(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function yt(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}function rR(e){e===void 0&&(e=Zf());var t=Intl.RelativeTimeFormat,r=Intl.ListFormat,a=Intl.DisplayNames,s=pr(function(){for(var g,f=[],m=0;m<arguments.length;m++)f[m]=arguments[m];return new((g=Intl.DateTimeFormat).bind.apply(g,Rr([void 0],f,!1)))},{cache:yt(e.dateTime),strategy:Ar.variadic}),l=pr(function(){for(var g,f=[],m=0;m<arguments.length;m++)f[m]=arguments[m];return new((g=Intl.NumberFormat).bind.apply(g,Rr([void 0],f,!1)))},{cache:yt(e.number),strategy:Ar.variadic}),d=pr(function(){for(var g,f=[],m=0;m<arguments.length;m++)f[m]=arguments[m];return new((g=Intl.PluralRules).bind.apply(g,Rr([void 0],f,!1)))},{cache:yt(e.pluralRules),strategy:Ar.variadic});return{getDateTimeFormat:s,getNumberFormat:l,getMessageFormat:pr(function(g,f,m,v){return new zf(g,f,m,ge({formatters:{getNumberFormat:l,getDateTimeFormat:s,getPluralRules:d}},v||{}))},{cache:yt(e.message),strategy:Ar.variadic}),getRelativeTimeFormat:pr(function(){for(var g=[],f=0;f<arguments.length;f++)g[f]=arguments[f];return new(t.bind.apply(t,Rr([void 0],g,!1)))},{cache:yt(e.relativeTime),strategy:Ar.variadic}),getPluralRules:d,getListFormat:pr(function(){for(var g=[],f=0;f<arguments.length;f++)g[f]=arguments[f];return new(r.bind.apply(r,Rr([void 0],g,!1)))},{cache:yt(e.list),strategy:Ar.variadic}),getDisplayNames:pr(function(){for(var g=[],f=0;f<arguments.length;f++)g[f]=arguments[f];return new(a.bind.apply(a,Rr([void 0],g,!1)))},{cache:yt(e.displayNames),strategy:Ar.variadic})}}function Rl(e,t,r,a){var s=e&&e[t],l;if(s&&(l=s[r]),l)return l;a(new zh("No ".concat(t," format named: ").concat(r)))}function Li(e,t){return Object.keys(e).reduce(function(r,a){return r[a]=ge({timeZone:t},e[a]),r},{})}function Gg(e,t){var r=Object.keys(ge(ge({},e),t));return r.reduce(function(a,s){return a[s]=ge(ge({},e[s]||{}),t[s]||{}),a},{})}function qg(e,t){if(!t)return e;var r=zf.formats;return ge(ge(ge({},r),e),{date:Gg(Li(r.date,t),Li(e.date||{},t)),time:Gg(Li(r.time,t),Li(e.time||{},t))})}var $o=function(e,t,r,a,s){var l=e.locale,d=e.formats,g=e.messages,f=e.defaultLocale,m=e.defaultFormats,v=e.fallbackOnEmptyString,T=e.onError,p=e.timeZone,O=e.defaultRichTextElements;r===void 0&&(r={id:""});var L=r.id,c=r.defaultMessage;Qh(!!L,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var N=String(L),F=g&&Object.prototype.hasOwnProperty.call(g,N)&&g[N];if(Array.isArray(F)&&F.length===1&&F[0].type===He.literal)return F[0].value;if(!a&&F&&typeof F=="string"&&!O)return F.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=ge(ge({},O),a||{}),d=qg(d,p),m=qg(m,p),!F){if(v===!1&&F==="")return F;if((!c||l&&l.toLowerCase()!==f.toLowerCase())&&T(new Zh(r,l)),c)try{var G=t.getMessageFormat(c,f,m,s);return G.format(a)}catch(P){return T(new Ao('Error formatting default message for: "'.concat(N,'", rendering default message verbatim'),l,r,P)),typeof c=="string"?c:N}return N}try{var G=t.getMessageFormat(F,l,d,ge({formatters:t},s||{}));return G.format(a)}catch(P){T(new Ao('Error formatting message: "'.concat(N,'", using ').concat(c?"default message":"id"," as fallback."),l,r,P))}if(c)try{var G=t.getMessageFormat(c,f,m,s);return G.format(a)}catch(P){T(new Ao('Error formatting the default message for: "'.concat(N,'", rendering message verbatim'),l,r,P))}return typeof F=="string"?F:typeof c=="string"?c:N},tR=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Da(e,t,r,a){var s=e.locale,l=e.formats,d=e.onError,g=e.timeZone;a===void 0&&(a={});var f=a.format,m=ge(ge({},g&&{timeZone:g}),f&&Rl(l,t,f,d)),v=Wt(a,tR,m);return t==="time"&&!v.hour&&!v.minute&&!v.second&&!v.timeStyle&&!v.dateStyle&&(v=ge(ge({},v),{hour:"numeric",minute:"numeric"})),r(s,v)}function aR(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],l=r[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return Da(e,"date",t,d).format(g)}catch(f){e.onError(new sr("Error formatting date.",e.locale,f))}return String(g)}function iR(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],l=r[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return Da(e,"time",t,d).format(g)}catch(f){e.onError(new sr("Error formatting time.",e.locale,f))}return String(g)}function sR(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],l=r[1],d=r[2],g=d===void 0?{}:d,f=typeof s=="string"?new Date(s||0):s,m=typeof l=="string"?new Date(l||0):l;try{return Da(e,"dateTimeRange",t,g).formatRange(f,m)}catch(v){e.onError(new sr("Error formatting date time range.",e.locale,v))}return String(f)}function oR(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],l=r[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return Da(e,"date",t,d).formatToParts(g)}catch(f){e.onError(new sr("Error formatting date.",e.locale,f))}return[]}function lR(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],l=r[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return Da(e,"time",t,d).formatToParts(g)}catch(f){e.onError(new sr("Error formatting time.",e.locale,f))}return[]}var uR=["style","type","fallback","languageDisplay"];function dR(e,t,r,a){var s=e.locale,l=e.onError,d=Intl.DisplayNames;d||l(new it(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Or.MISSING_INTL_API));var g=Wt(a,uR);try{return t(s,g).of(r)}catch(f){l(new sr("Error formatting display name.",s,f))}}var gR=["type","style"],wg=Date.now();function kR(e){return"".concat(wg,"_").concat(e,"_").concat(wg)}function fR(e,t,r,a){a===void 0&&(a={});var s=Qf(e,t,r,a).reduce(function(l,d){var g=d.value;return typeof g!="string"?l.push(g):typeof l[l.length-1]=="string"?l[l.length-1]+=g:l.push(g),l},[]);return s.length===1?s[0]:s.length===0?"":s}function Qf(e,t,r,a){var s=e.locale,l=e.onError;a===void 0&&(a={});var d=Intl.ListFormat;d||l(new it(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Or.MISSING_INTL_API));var g=Wt(a,gR);try{var f={},m=r.map(function(v,T){if(typeof v=="object"){var p=kR(T);return f[p]=v,p}return String(v)});return t(s,g).formatToParts(m).map(function(v){return v.type==="literal"?v:ge(ge({},v),{value:f[v.value]||v.value})})}catch(v){l(new sr("Error formatting list.",s,v))}return r}var mR=["type"];function vR(e,t,r,a){var s=e.locale,l=e.onError;a===void 0&&(a={}),Intl.PluralRules||l(new it(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Or.MISSING_INTL_API));var d=Wt(a,mR);try{return t(s,d).select(r)}catch(g){l(new sr("Error formatting plural.",s,g))}return"other"}var ER=["numeric","style"];function bR(e,t,r){var a=e.locale,s=e.formats,l=e.onError;r===void 0&&(r={});var d=r.format,g=!!d&&Rl(s,"relative",d,l)||{},f=Wt(r,ER,g);return t(a,f)}function TR(e,t,r,a,s){s===void 0&&(s={}),a||(a="second");var l=Intl.RelativeTimeFormat;l||e.onError(new it(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Or.MISSING_INTL_API));try{return bR(e,t,s).format(r,a)}catch(d){e.onError(new sr("Error formatting relative time.",e.locale,d))}return String(r)}var yR=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function em(e,t,r){var a=e.locale,s=e.formats,l=e.onError;r===void 0&&(r={});var d=r.format,g=d&&Rl(s,"number",d,l)||{},f=Wt(r,yR,g);return t(a,f)}function pR(e,t,r,a){a===void 0&&(a={});try{return em(e,t,a).format(r)}catch(s){e.onError(new sr("Error formatting number.",e.locale,s))}return String(r)}function AR(e,t,r,a){a===void 0&&(a={});try{return em(e,t,a).formatToParts(r)}catch(s){e.onError(new sr("Error formatting number.",e.locale,s))}return[]}function cR(e){var t=e[Object.keys(e)[0]];return typeof t=="string"}function hR(e){e.onWarn&&e.defaultRichTextElements&&cR(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function RR(e,t){var r=rR(t),a=ge(ge({},Xf),e),s=a.locale,l=a.defaultLocale,d=a.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&d?d(new Bg('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&d&&d(new Bg('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new Xh('"locale" was not configured, using "'.concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),hR(a),ge(ge({},a),{formatters:r,formatNumber:pR.bind(null,a,r.getNumberFormat),formatNumberToParts:AR.bind(null,a,r.getNumberFormat),formatRelativeTime:TR.bind(null,a,r.getRelativeTimeFormat),formatDate:aR.bind(null,a,r.getDateTimeFormat),formatDateToParts:oR.bind(null,a,r.getDateTimeFormat),formatTime:iR.bind(null,a,r.getDateTimeFormat),formatDateTimeRange:sR.bind(null,a,r.getDateTimeFormat),formatTimeToParts:lR.bind(null,a,r.getDateTimeFormat),formatPlural:vR.bind(null,a,r.getPluralRules),formatMessage:$o.bind(null,a,r),$t:$o.bind(null,a,r),formatList:fR.bind(null,a,r.getListFormat),formatListToParts:Qf.bind(null,a,r.getListFormat),formatDisplayName:dR.bind(null,a,r.getDisplayNames)})}function _R(e,t,r){if(r===void 0&&(r=Error),!e)throw new r(t)}function SR(e){_R(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var NR=ge(ge({},Xf),{textComponent:U.Fragment});function IR(e){return function(t){return e(U.Children.toArray(t))}}function Vg(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),a=Object.keys(t),s=r.length;if(a.length!==s)return!1;for(var l=0;l<s;l++){var d=r[l];if(e[d]!==t[d]||!Object.prototype.hasOwnProperty.call(t,d))return!1}return!0}var co={exports:{}},Me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function PR(){if(jg)return Me;jg=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,g=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,v=e?Symbol.for("react.forward_ref"):60112,T=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,O=e?Symbol.for("react.memo"):60115,L=e?Symbol.for("react.lazy"):60116,c=e?Symbol.for("react.block"):60121,N=e?Symbol.for("react.fundamental"):60117,F=e?Symbol.for("react.responder"):60118,G=e?Symbol.for("react.scope"):60119;function P(A){if(typeof A=="object"&&A!==null){var w=A.$$typeof;switch(w){case t:switch(A=A.type,A){case f:case m:case a:case l:case s:case T:return A;default:switch(A=A&&A.$$typeof,A){case g:case v:case L:case O:case d:return A;default:return w}}case r:return w}}}function Q(A){return P(A)===m}return Me.AsyncMode=f,Me.ConcurrentMode=m,Me.ContextConsumer=g,Me.ContextProvider=d,Me.Element=t,Me.ForwardRef=v,Me.Fragment=a,Me.Lazy=L,Me.Memo=O,Me.Portal=r,Me.Profiler=l,Me.StrictMode=s,Me.Suspense=T,Me.isAsyncMode=function(A){return Q(A)||P(A)===f},Me.isConcurrentMode=Q,Me.isContextConsumer=function(A){return P(A)===g},Me.isContextProvider=function(A){return P(A)===d},Me.isElement=function(A){return typeof A=="object"&&A!==null&&A.$$typeof===t},Me.isForwardRef=function(A){return P(A)===v},Me.isFragment=function(A){return P(A)===a},Me.isLazy=function(A){return P(A)===L},Me.isMemo=function(A){return P(A)===O},Me.isPortal=function(A){return P(A)===r},Me.isProfiler=function(A){return P(A)===l},Me.isStrictMode=function(A){return P(A)===s},Me.isSuspense=function(A){return P(A)===T},Me.isValidElementType=function(A){return typeof A=="string"||typeof A=="function"||A===a||A===m||A===l||A===s||A===T||A===p||typeof A=="object"&&A!==null&&(A.$$typeof===L||A.$$typeof===O||A.$$typeof===d||A.$$typeof===g||A.$$typeof===v||A.$$typeof===N||A.$$typeof===F||A.$$typeof===G||A.$$typeof===c)},Me.typeOf=P,Me}var Ug;function OR(){return Ug||(Ug=1,co.exports=PR()),co.exports}var ho,Hg;function LR(){if(Hg)return ho;Hg=1;var e=OR(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=a,l[e.Memo]=s;function d(L){return e.isMemo(L)?s:l[L.$$typeof]||t}var g=Object.defineProperty,f=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,T=Object.getPrototypeOf,p=Object.prototype;function O(L,c,N){if(typeof c!="string"){if(p){var F=T(c);F&&F!==p&&O(L,F,N)}var G=f(c);m&&(G=G.concat(m(c)));for(var P=d(L),Q=d(c),A=0;A<G.length;++A){var w=G[A];if(!r[w]&&!(N&&N[w])&&!(Q&&Q[w])&&!(P&&P[w])){var K=v(c,w);try{g(L,w,K)}catch{}}}}return L}return ho=O,ho}LR();var _l=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=U.createContext(null)):U.createContext(null);_l.Consumer;var KR=_l.Provider,Sl=KR,DR=_l;function Nl(){var e=U.useContext(DR);return SR(e),e}var Jo;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Jo||(Jo={}));var Wo;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Wo||(Wo={}));function nm(e){var t=function(r){var a=Nl(),s=r.value,l=r.children,d=Yt(r,["value","children"]),g=typeof s=="string"?new Date(s||0):s,f=e==="formatDate"?a.formatDateToParts(g,d):a.formatTimeToParts(g,d);return l(f)};return t.displayName=Wo[e],t}function Fa(e){var t=function(r){var a=Nl(),s=r.value,l=r.children,d=Yt(r,["value","children"]),g=a[e](s,d);if(typeof l=="function")return l(g);var f=a.textComponent||U.Fragment;return U.createElement(f,null,g)};return t.displayName=Jo[e],t}function rm(e){return e&&Object.keys(e).reduce(function(t,r){var a=e[r];return t[r]=Wf(a)?IR(a):a,t},{})}var xg=function(e,t,r,a){for(var s=[],l=4;l<arguments.length;l++)s[l-4]=arguments[l];var d=rm(a),g=$o.apply(void 0,Rr([e,t,r,d],s,!1));return Array.isArray(g)?U.Children.toArray(g):g},FR=function(e,t){var r=e.defaultRichTextElements,a=Yt(e,["defaultRichTextElements"]),s=rm(r),l=RR(ge(ge(ge({},NR),a),{defaultRichTextElements:s}),t),d={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:s};return ge(ge({},l),{formatMessage:xg.bind(null,d,l.formatters),$t:xg.bind(null,d,l.formatters)})};function MR(e,t){var r=e.values,a=Yt(e,["values"]),s=t.values,l=Yt(t,["values"]);return Vg(s,r)&&Vg(a,l)}function tm(e){var t=Nl(),r=t.formatMessage,a=t.textComponent,s=a===void 0?U.Fragment:a,l=e.id,d=e.description,g=e.defaultMessage,f=e.values,m=e.children,v=e.tagName,T=v===void 0?s:v,p=e.ignoreTag,O={id:l,description:d,defaultMessage:g},L=r(O,f,{ignoreTag:p});return typeof m=="function"?m(Array.isArray(L)?L:[L]):T?U.createElement(T,null,U.Children.toArray(L)):U.createElement(U.Fragment,null,L)}tm.displayName="FormattedMessage";var Ln=U.memo(tm,MR);Ln.displayName="MemoizedFormattedMessage";Fa("formatDate");Fa("formatTime");Fa("formatNumber");Fa("formatList");Fa("formatDisplayName");nm("formatDate");nm("formatTime");const am=U.createContext(null),Il=({children:e,behandling:t})=>{const[r,a]=U.useState();U.useEffect(()=>{r&&a(void 0)},[t.uuid,t.versjon]);const s=U.useMemo(()=>({formData:r,setFormData:a}),[r,a]);return te.jsx(am,{value:s,children:e})},BR=()=>{const e=U.useContext(am);if(!e)throw new Error("FormDataContext.Provider er ikke satt opp");return e};Il.__docgenInfo={description:"",methods:[],displayName:"FormDataProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]},description:""}}};Il.__docgenInfo={description:"",methods:[],displayName:"FormDataProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]},description:""}}};const Pl=e=>te.jsx(Il,{behandling:{uuid:"1",versjon:1},children:te.jsx(e,{})});Pl.__docgenInfo={description:"",methods:[],displayName:"withFormData"};Pl.__docgenInfo={description:"",methods:[],displayName:"withFormData"};const GR=[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],qR=[{kode:"REGISTRER_OM_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrering av opplysninger om verge/fullmektig"},{kode:"MANGELFULL_SØKNAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Mangelfull søknad"},{kode:"FASTSATT_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak - splitting av periode"},{kode:"BEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet"},{kode:"REGISTRER_PAPIRSØK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrer papirsøknad"},{kode:"BEH_STARTET_PÅ_NYTT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet på nytt"},{kode:"MIGRERT_FRA_INFOTRYGD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder flytting av sak fra Infotrygd"},{kode:"FORSLAG_VEDTAK_UTEN_TOTRINN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått"},{kode:"BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjenopptatt"},{kode:"AVBRUTT_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling er henlagt"},{kode:"ANKE_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ankebehandling"},{kode:"BREV_BESTILT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev bestilt"},{kode:"ENDRET_DEKNINGSGRAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Dekningsgrad er endret"},{kode:"OPPGAVE_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Oppgave før vedtak"},{kode:"IVERKSETTELSE_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen venter på iverksettelse"},{kode:"FASTSATT_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak"},{kode:"OVST_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak"},{kode:"INNSYN_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Innsynsbehandling opprettet"},{kode:"TILBAKEKR_VIDEREBEHANDLING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Metode for å håndtere tilbakekreving av feilutbetailng er valgt."},{kode:"SAK_GODKJENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak godkjent"},{kode:"BEH_KØET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er satt på vent"},{kode:"NYE_REGOPPLYSNINGER",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Nye registeropplysninger"},{kode:"BEH_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling på vent"},{kode:"TERMINBEKREFTELSE_UGYLDIG",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Terminbekreftelsens utstedt dato er før 22. svangerskapsuke. Behandlingen fortsatt uten ny terminbekreftelse"},{kode:"FAKTA_ENDRET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Fakta endret"},{kode:"MIGRERT_FRA_INFOTRYGD_FJERNET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder ikke lenger flytting av sak fra Infotrygd"},{kode:"BYTT_ENHET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Bytt enhet"},{kode:"REVURD_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Revurdering opprettet"},{kode:"KLAGE_BEH_NFP",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling NFP"},{kode:"KØET_BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Køet behandling er gjenopptatt"},{kode:"OVST_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak - splitting av periode"},{kode:"ANKEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Anke mottatt"},{kode:"UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet soknadsperiode"},{kode:"KLAGE_BEH_NK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling KA"},{kode:"AVKLART_AKTIVITETSKRAV",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Avklart aktivitetskrav"},{kode:"NY_INFO_FRA_TPS",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ny info fra TPS"},{kode:"KLAGEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klage mottatt"},{kode:"VEDTAK_FATTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak fattet"},{kode:"BEH_AVBRUTT_VUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vurdering før vedtak"},{kode:"UENDRET_UTFALL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Uendret utfall"},{kode:"VRS_REV_IKKE_SNDT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Varsel om revurdering ikke sendt"},{kode:"SPOLT_TILBAKE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er flyttet"},{kode:"OPPTJENING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet opptjeningsperiode"},{kode:"SAK_RETUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak retur"},{kode:"FJERNET_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Opplysninger om verge/fullmektig fjernet"},{kode:"BEH_MAN_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Gjenoppta behandling"},{kode:"BEH_OPPDATERT_NYE_OPPL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen oppdatert med nye opplysninger"},{kode:"VEDLEGG_MOTTATT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedlegg mottatt"},{kode:"OVERSTYRT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Overstyrt"},{kode:"BREV_SENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev sendt"},{kode:"FORSLAG_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått og sendt til beslutter"}],wR=[{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],VR=[{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"},{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"}],jR=[{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"}],UR=[{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"}],HR=[{kode:"EGEN_NÆRING",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Egen næring"},{kode:"BRUKERS_ANDEL",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Brukers andel"},{kode:"FRILANS",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Frilans"}],xR=[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],YR=[{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"},{kode:"ENDRING_I_BEREGNING_OG_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning og uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"}],CR=[{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilans"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (fisker)"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (dagmamma)"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"},{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"}],$R=[{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"}],JR=[{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Vedtaksinstans"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aleneomsorg og annenpart rett"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstans"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"}],WR=[{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"},{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"}],zR=[{kode:"HJEMSENDE_UTEN_Å_OPPHEVE",kodeverk:"KLAGEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"OPPHEVE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket oppheves"},{kode:"MEDHOLD_I_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Medhold"},{kode:"STADFESTE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"AVVIS_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Klagen avvises"}],XR=[{kode:"BEH_STARTET_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Behandling startet på nytt"},{kode:"BERORT_BEH_OPPHOR",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens vedtak er opphørt"},{kode:"SAKSBEH_START_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Saksbehandling starter på nytt"},{kode:"BERORT_BEH_ENDRING_DEKNINGSGRAD",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens behandling har endret antall disponible stønadsdager"}],ZR=[{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"},{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"ANNET",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Andre typer som f.eks utsettelse"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"}],QR=[{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt søknad mangler"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"}],e_=[{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"}],n_=[{kode:"TILBAKEKR_IGNORER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling, avvent samordning"},{kode:"TILBAKEKR_INNTREKK",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling hvor inntrekk dekker hele beløpet"},{kode:"TILBAKEKR_OPPRETT",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling med tilbakekreving"},{kode:"TILBAKEKR_OPPDATER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Endringer vil oppdatere eksisterende feilutbetalte perioder og beløp."}],r_=[{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],t_=[{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"}],a_=[{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"}],i_=[{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"}],s_=[{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"},{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"}],o_=[{kode:"UTTAK_PERIODE_FOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fradato uttaksperiode"},{kode:"TPS_ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"UTTAK_PERIODE_TOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Tildato uttaksperiode"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"FODSELSDATO",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fødselsdato"}],l_=[{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"}],u_=[{kode:"MANGLENDE_OPPLYSNINGER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen, men har manglende opplysninger"},{kode:"SØKER_ER_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er i permisjon"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekten er ikke med i beregningsgrunnlaget"},{kode:"IKKE_BRUK",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Ikke bruk"},{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK_MED_OVERSTYRTE_PERIODER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"BENYTT_A_INNTEKT_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekt fra A-inntekt benyttes i beregningsgrunnlaget"},{kode:"SØKER_ER_IKKE_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er ikke i permisjon"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er lagt til av saksbehandler beregningsgrunnlaget"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er slått sammen med annet"}],d_=[{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"}],g_=JSON.parse('[{"kode":"CAF","kodeverk":"LANDKODER","navn":"SENTRALAFRIKA. REP."},{"kode":"ARG","kodeverk":"LANDKODER","navn":"ARGENTINA"},{"kode":"IOT","kodeverk":"LANDKODER","navn":"BRITISK-INDISKE HAV"},{"kode":"CCK","kodeverk":"LANDKODER","navn":"KOKOSØYENE"},{"kode":"MEX","kodeverk":"LANDKODER","navn":"MEXICO"},{"kode":"CHN","kodeverk":"LANDKODER","navn":"REPUBLIKKEN KINA"},{"kode":"RUS","kodeverk":"LANDKODER","navn":"RUSSLAND"},{"kode":"BHS","kodeverk":"LANDKODER","navn":"BAHAMAS"},{"kode":"SYC","kodeverk":"LANDKODER","navn":"SEYCHELLENE"},{"kode":"CYP","kodeverk":"LANDKODER","navn":"KYPROS"},{"kode":"AUT","kodeverk":"LANDKODER","navn":"ØSTERRIKE"},{"kode":"QAT","kodeverk":"LANDKODER","navn":"QATAR"},{"kode":"VNM","kodeverk":"LANDKODER","navn":"VIETNAM"},{"kode":"HMD","kodeverk":"LANDKODER","navn":"HEARD OG MCDONALD ØYENE"},{"kode":"KEN","kodeverk":"LANDKODER","navn":"KENYA"},{"kode":"ASM","kodeverk":"LANDKODER","navn":"AM. SAMOA"},{"kode":"PAK","kodeverk":"LANDKODER","navn":"PAKISTAN"},{"kode":"ATG","kodeverk":"LANDKODER","navn":"ANTIGUA OG BARBUDA"},{"kode":"TZA","kodeverk":"LANDKODER","navn":"TANZANIA"},{"kode":"ZAF","kodeverk":"LANDKODER","navn":"SØR-AFRIKA"},{"kode":"CMR","kodeverk":"LANDKODER","navn":"KAMERUN"},{"kode":"MLI","kodeverk":"LANDKODER","navn":"MALI"},{"kode":"SLV","kodeverk":"LANDKODER","navn":"EL SALVADOR"},{"kode":"MAF","kodeverk":"LANDKODER","navn":"SAINT MARTIN"},{"kode":"KGZ","kodeverk":"LANDKODER","navn":"KIRGISISTAN"},{"kode":"FJI","kodeverk":"LANDKODER","navn":"FIJI"},{"kode":"RWA","kodeverk":"LANDKODER","navn":"RWANDA"},{"kode":"GEO","kodeverk":"LANDKODER","navn":"GEORGIA"},{"kode":"REU","kodeverk":"LANDKODER","navn":"REUNION"},{"kode":"MTQ","kodeverk":"LANDKODER","navn":"MARTINIQUE"},{"kode":"SDN","kodeverk":"LANDKODER","navn":"SUDAN"},{"kode":"AND","kodeverk":"LANDKODER","navn":"ANDORRA"},{"kode":"COK","kodeverk":"LANDKODER","navn":"COOKØYENE"},{"kode":"SHN","kodeverk":"LANDKODER","navn":"ST. HELENA"},{"kode":"COL","kodeverk":"LANDKODER","navn":"COLOMBIA"},{"kode":"PER","kodeverk":"LANDKODER","navn":"PERU"},{"kode":"STP","kodeverk":"LANDKODER","navn":"SAO TOME OG PRINCIPE"},{"kode":"COM","kodeverk":"LANDKODER","navn":"KOMORENE"},{"kode":"LUX","kodeverk":"LANDKODER","navn":"LUXEMBOURG"},{"kode":"PNG","kodeverk":"LANDKODER","navn":"PAPUA NY-GUINEA"},{"kode":"MKD","kodeverk":"LANDKODER","navn":"MAKEDONIA"},{"kode":"GIN","kodeverk":"LANDKODER","navn":"GUINEA"},{"kode":"CYM","kodeverk":"LANDKODER","navn":"CAYMANØYENE"},{"kode":"VGB","kodeverk":"LANDKODER","navn":"JOMFRUØYENE BRIT."},{"kode":"IRL","kodeverk":"LANDKODER","navn":"IRLAND"},{"kode":"XXX","kodeverk":"LANDKODER","navn":"STATSLØS"},{"kode":"HTI","kodeverk":"LANDKODER","navn":"HAITI"},{"kode":"LBN","kodeverk":"LANDKODER","navn":"LIBANON"},{"kode":"BRN","kodeverk":"LANDKODER","navn":"BRUNEI"},{"kode":"GMB","kodeverk":"LANDKODER","navn":"GAMBIA"},{"kode":"MLT","kodeverk":"LANDKODER","navn":"MALTA"},{"kode":"CRI","kodeverk":"LANDKODER","navn":"COSTA RICA"},{"kode":"UZB","kodeverk":"LANDKODER","navn":"UZBEKISTAN"},{"kode":"CXR","kodeverk":"LANDKODER","navn":"CHRISTMASØYA"},{"kode":"TUR","kodeverk":"LANDKODER","navn":"TYRKIA"},{"kode":"UKR","kodeverk":"LANDKODER","navn":"UKRAINA"},{"kode":"SUN","kodeverk":"LANDKODER","navn":"SOVJETUNIONEN"},{"kode":"PYF","kodeverk":"LANDKODER","navn":"FRANSK POLYNESIA"},{"kode":"MNE","kodeverk":"LANDKODER","navn":"MONTENEGRO"},{"kode":"BIH","kodeverk":"LANDKODER","navn":"BOSNIA-HERCEGOVINA"},{"kode":"PAN","kodeverk":"LANDKODER","navn":"PANAMA"},{"kode":"SJM","kodeverk":"LANDKODER","navn":"SVALBARD OG JAN MAYEN"},{"kode":"NIU","kodeverk":"LANDKODER","navn":"NIUE"},{"kode":"SUR","kodeverk":"LANDKODER","navn":"SURINAM"},{"kode":"MUS","kodeverk":"LANDKODER","navn":"MAURITIUS"},{"kode":"CHE","kodeverk":"LANDKODER","navn":"SVEITS"},{"kode":"BEL","kodeverk":"LANDKODER","navn":"BELGIA"},{"kode":"TTO","kodeverk":"LANDKODER","navn":"TRINIDAD OG TOBAGO"},{"kode":"SWZ","kodeverk":"LANDKODER","navn":"SWAZILAND"},{"kode":"TUN","kodeverk":"LANDKODER","navn":"TUNISIA"},{"kode":"GLP","kodeverk":"LANDKODER","navn":"GUADELOUPE"},{"kode":"KWT","kodeverk":"LANDKODER","navn":"KUWAIT"},{"kode":"DMA","kodeverk":"LANDKODER","navn":"DOMINICA"},{"kode":"BGR","kodeverk":"LANDKODER","navn":"BULGARIA"},{"kode":"ISL","kodeverk":"LANDKODER","navn":"ISLAND"},{"kode":"SVN","kodeverk":"LANDKODER","navn":"SLOVENIA"},{"kode":"PLW","kodeverk":"LANDKODER","navn":"PALAU"},{"kode":"GBR","kodeverk":"LANDKODER","navn":"STORBRITANNIA"},{"kode":"NAM","kodeverk":"LANDKODER","navn":"NAMIBIA"},{"kode":"FSM","kodeverk":"LANDKODER","navn":"MIKRONESIAFØD."},{"kode":"GNB","kodeverk":"LANDKODER","navn":"GUINEA-BISSAU"},{"kode":"UMI","kodeverk":"LANDKODER","navn":"MINDRE STILLEHAVSØYER"},{"kode":"MDA","kodeverk":"LANDKODER","navn":"MOLDOVA"},{"kode":"MMR","kodeverk":"LANDKODER","navn":"MYANMAR (BURMA)"},{"kode":"MOZ","kodeverk":"LANDKODER","navn":"MOSAMBIK"},{"kode":"SGS","kodeverk":"LANDKODER","navn":"SØR-GEORGIA OG SØR-SANDWICHØYE"},{"kode":"NPL","kodeverk":"LANDKODER","navn":"NEPAL"},{"kode":"BES","kodeverk":"LANDKODER","navn":"BONAIRE, SINT EUSTATIUS, SABA"},{"kode":"LBR","kodeverk":"LANDKODER","navn":"LIBERIA"},{"kode":"MDG","kodeverk":"LANDKODER","navn":"MADAGASKAR"},{"kode":"VIR","kodeverk":"LANDKODER","navn":"JOMFRUØYENE AM."},{"kode":"ARE","kodeverk":"LANDKODER","navn":"DE ARABISKE EMIRATER"},{"kode":"USA","kodeverk":"LANDKODER","navn":"USA"},{"kode":"NFK","kodeverk":"LANDKODER","navn":"NORFOLKØYA"},{"kode":"HKG","kodeverk":"LANDKODER","navn":"HONGKONG"},{"kode":"DEU","kodeverk":"LANDKODER","navn":"TYSKLAND"},{"kode":"LIE","kodeverk":"LANDKODER","navn":"LIECHTENSTEIN"},{"kode":"ECU","kodeverk":"LANDKODER","navn":"ECUADOR"},{"kode":"POL","kodeverk":"LANDKODER","navn":"POLEN"},{"kode":"PRK","kodeverk":"LANDKODER","navn":"NORD-KOREA"},{"kode":"GGY","kodeverk":"LANDKODER","navn":"GUERNSEY"},{"kode":"NZL","kodeverk":"LANDKODER","navn":"NEW ZEALAND"},{"kode":"MAR","kodeverk":"LANDKODER","navn":"MAROKKO"},{"kode":"BWA","kodeverk":"LANDKODER","navn":"BOTSWANA"},{"kode":"GUM","kodeverk":"LANDKODER","navn":"GUAM"},{"kode":"YUG","kodeverk":"LANDKODER","navn":"JUGOSLAVIA"},{"kode":"SEN","kodeverk":"LANDKODER","navn":"SENEGAL"},{"kode":"MWI","kodeverk":"LANDKODER","navn":"MALAWI"},{"kode":"TKM","kodeverk":"LANDKODER","navn":"TURKMENISTAN"},{"kode":"GAB","kodeverk":"LANDKODER","navn":"GABON"},{"kode":"FIN","kodeverk":"LANDKODER","navn":"FINLAND"},{"kode":"PRY","kodeverk":"LANDKODER","navn":"PARAGUAY"},{"kode":"PSE","kodeverk":"LANDKODER","navn":"DET PALESTINSKE OMRÅDET"},{"kode":"FRA","kodeverk":"LANDKODER","navn":"FRANKRIKE"},{"kode":"ZWE","kodeverk":"LANDKODER","navn":"ZIMBABWE"},{"kode":"AZE","kodeverk":"LANDKODER","navn":"AZERBAJDZJAN"},{"kode":"SXM","kodeverk":"LANDKODER","navn":"SINT MAARTEN"},{"kode":"NIC","kodeverk":"LANDKODER","navn":"NICARAGUA"},{"kode":"CAN","kodeverk":"LANDKODER","navn":"CANADA"},{"kode":"COG","kodeverk":"LANDKODER","navn":"KONGO, REPUBLIKKEN"},{"kode":"JPN","kodeverk":"LANDKODER","navn":"JAPAN"},{"kode":"KOR","kodeverk":"LANDKODER","navn":"SØR-KOREA"},{"kode":"HUN","kodeverk":"LANDKODER","navn":"UNGARN"},{"kode":"YEM","kodeverk":"LANDKODER","navn":"JEMEN"},{"kode":"CHL","kodeverk":"LANDKODER","navn":"CHILE"},{"kode":"BRB","kodeverk":"LANDKODER","navn":"BARBADOS"},{"kode":"DNK","kodeverk":"LANDKODER","navn":"DANMARK"},{"kode":"NRU","kodeverk":"LANDKODER","navn":"NAURU"},{"kode":"VCT","kodeverk":"LANDKODER","navn":"ST. VINCENT"},{"kode":"BEN","kodeverk":"LANDKODER","navn":"BENIN"},{"kode":"SMR","kodeverk":"LANDKODER","navn":"SAN MARINO"},{"kode":"TCD","kodeverk":"LANDKODER","navn":"TSJAD"},{"kode":"CUW","kodeverk":"LANDKODER","navn":"CURACAO"},{"kode":"IRN","kodeverk":"LANDKODER","navn":"IRAN"},{"kode":"SWE","kodeverk":"LANDKODER","navn":"SVERIGE"},{"kode":"ERI","kodeverk":"LANDKODER","navn":"ERITREA"},{"kode":"XUK","kodeverk":"LANDKODER","navn":"UKJENT"},{"kode":"MDV","kodeverk":"LANDKODER","navn":"MALDIVENE"},{"kode":"CSK","kodeverk":"LANDKODER","navn":"TSJEKKOSLOVAKIA"},{"kode":"GRD","kodeverk":"LANDKODER","navn":"GRENADA"},{"kode":"HND","kodeverk":"LANDKODER","navn":"HONDURAS"},{"kode":"FRO","kodeverk":"LANDKODER","navn":"FÆRØYENE"},{"kode":"COD","kodeverk":"LANDKODER","navn":"KONGO, DEN DEMOKR. REPUBL"},{"kode":"SRB","kodeverk":"LANDKODER","navn":"SERBIA"},{"kode":"AGO","kodeverk":"LANDKODER","navn":"ANGOLA"},{"kode":"NCL","kodeverk":"LANDKODER","navn":"NY-KALEDONIA"},{"kode":"SCG","kodeverk":"LANDKODER","navn":"SERBIA OG MONTENEGRO"},{"kode":"GTM","kodeverk":"LANDKODER","navn":"GUATEMALA"},{"kode":"AFG","kodeverk":"LANDKODER","navn":"AFGHANISTAN"},{"kode":"JAM","kodeverk":"LANDKODER","navn":"JAMAICA"},{"kode":"UGA","kodeverk":"LANDKODER","navn":"UGANDA"},{"kode":"IMN","kodeverk":"LANDKODER","navn":"ISLE OF MAN"},{"kode":"ISR","kodeverk":"LANDKODER","navn":"ISRAEL"},{"kode":"SOM","kodeverk":"LANDKODER","navn":"SOMALIA"},{"kode":"MNP","kodeverk":"LANDKODER","navn":"NORD-MARIANENE"},{"kode":"XXK","kodeverk":"LANDKODER","navn":"KOSOVO"},{"kode":"BLR","kodeverk":"LANDKODER","navn":"HVITERUSSLAND"},{"kode":"LSO","kodeverk":"LANDKODER","navn":"LESOTHO"},{"kode":"NER","kodeverk":"LANDKODER","navn":"NIGER"},{"kode":"IDN","kodeverk":"LANDKODER","navn":"INDONESIA"},{"kode":"CZE","kodeverk":"LANDKODER","navn":"DEN TSJEKKISKE REP."},{"kode":"URY","kodeverk":"LANDKODER","navn":"URUGUAY"},{"kode":"BGD","kodeverk":"LANDKODER","navn":"BANGLADESH"},{"kode":"WLF","kodeverk":"LANDKODER","navn":"WALLIS/FUTUNAØYENE"},{"kode":"CIV","kodeverk":"LANDKODER","navn":"ELFENBEINSKYSTEN"},{"kode":"ABW","kodeverk":"LANDKODER","navn":"ARUBA"},{"kode":"SLB","kodeverk":"LANDKODER","navn":"SALOMONØYENE"},{"kode":"TWN","kodeverk":"LANDKODER","navn":"TAIWAN"},{"kode":"SLE","kodeverk":"LANDKODER","navn":"SIERRA LEONE"},{"kode":"BRA","kodeverk":"LANDKODER","navn":"BRASIL"},{"kode":"DJI","kodeverk":"LANDKODER","navn":"DJIBOUTI"},{"kode":"PRI","kodeverk":"LANDKODER","navn":"PUERTO RICO"},{"kode":"PRT","kodeverk":"LANDKODER","navn":"PORTUGAL"},{"kode":"ANT","kodeverk":"LANDKODER","navn":"DE NEDERLANDSKE ANTILLENE"},{"kode":"THA","kodeverk":"LANDKODER","navn":"THAILAND"},{"kode":"TLS","kodeverk":"LANDKODER","navn":"ØST-TIMOR"},{"kode":"SPM","kodeverk":"LANDKODER","navn":"ST-PIERRE OG MIQUELON"},{"kode":"ALB","kodeverk":"LANDKODER","navn":"ALBANIA"},{"kode":"EGY","kodeverk":"LANDKODER","navn":"EGYPT"},{"kode":"GRC","kodeverk":"LANDKODER","navn":"HELLAS"},{"kode":"BFA","kodeverk":"LANDKODER","navn":"BURKINA FASO"},{"kode":"ALA","kodeverk":"LANDKODER","navn":"ÅLAND"},{"kode":"BOL","kodeverk":"LANDKODER","navn":"BOLIVIA"},{"kode":"DDR","kodeverk":"LANDKODER","navn":"TYSKLAND (ØST)"},{"kode":"HRV","kodeverk":"LANDKODER","navn":"KROATIA"},{"kode":"AUS","kodeverk":"LANDKODER","navn":"AUSTRALIA"},{"kode":"NGA","kodeverk":"LANDKODER","navn":"NIGERIA"},{"kode":"LBY","kodeverk":"LANDKODER","navn":"LIBYA"},{"kode":"MYT","kodeverk":"LANDKODER","navn":"MAYOTTE"},{"kode":"LVA","kodeverk":"LANDKODER","navn":"LATVIA"},{"kode":"BTN","kodeverk":"LANDKODER","navn":"BHUTAN"},{"kode":"MSR","kodeverk":"LANDKODER","navn":"MONSERRAT"},{"kode":"???","kodeverk":"LANDKODER","navn":"UOPPGITT/UKJENT"},{"kode":"OMN","kodeverk":"LANDKODER","navn":"OMAN"},{"kode":"SVK","kodeverk":"LANDKODER","navn":"SLOVAKIA"},{"kode":"TUV","kodeverk":"LANDKODER","navn":"TUVALU"},{"kode":"VEN","kodeverk":"LANDKODER","navn":"VENEZUELA"},{"kode":"ITA","kodeverk":"LANDKODER","navn":"ITALIA"},{"kode":"KHM","kodeverk":"LANDKODER","navn":"KAMBODSJA"},{"kode":"ARM","kodeverk":"LANDKODER","navn":"ARMENIA"},{"kode":"LCA","kodeverk":"LANDKODER","navn":"ST. LUCIA"},{"kode":"GIB","kodeverk":"LANDKODER","navn":"GIBRALTAR"},{"kode":"JEY","kodeverk":"LANDKODER","navn":"JERSEY"},{"kode":"LAO","kodeverk":"LANDKODER","navn":"LAOS"},{"kode":"BHR","kodeverk":"LANDKODER","navn":"BAHRAIN"},{"kode":"ESH","kodeverk":"LANDKODER","navn":"VEST-SAHARA"},{"kode":"TKL","kodeverk":"LANDKODER","navn":"TOKELAU"},{"kode":"MNG","kodeverk":"LANDKODER","navn":"MONGOLIA"},{"kode":"BLZ","kodeverk":"LANDKODER","navn":"BELIZE"},{"kode":"GUF","kodeverk":"LANDKODER","navn":"FRANSK GUYANA"},{"kode":"TCA","kodeverk":"LANDKODER","navn":"TURKS/CAICOSØYENE"},{"kode":"WSM","kodeverk":"LANDKODER","navn":"SAMOA"},{"kode":"JOR","kodeverk":"LANDKODER","navn":"JORDAN"},{"kode":"MRT","kodeverk":"LANDKODER","navn":"MAURITANIA"},{"kode":"CUB","kodeverk":"LANDKODER","navn":"CUBA"},{"kode":"BDI","kodeverk":"LANDKODER","navn":"BURUNDI"},{"kode":"GHA","kodeverk":"LANDKODER","navn":"GHANA"},{"kode":"KNA","kodeverk":"LANDKODER","navn":"ST.KITTS OG NEVIS"},{"kode":"ETH","kodeverk":"LANDKODER","navn":"ETIOPIA"},{"kode":"SSD","kodeverk":"LANDKODER","navn":"SØR-SUDAN"},{"kode":"VAT","kodeverk":"LANDKODER","navn":"VATIKANSTATEN"},{"kode":"CPV","kodeverk":"LANDKODER","navn":"KAPP VERDE"},{"kode":"PCN","kodeverk":"LANDKODER","navn":"PITCAIRN"},{"kode":"SGP","kodeverk":"LANDKODER","navn":"SINGAPORE"},{"kode":"KAZ","kodeverk":"LANDKODER","navn":"KAZAKHSTAN"},{"kode":"MYS","kodeverk":"LANDKODER","navn":"MALAYSIA"},{"kode":"PHL","kodeverk":"LANDKODER","navn":"FILIPPINENE"},{"kode":"EST","kodeverk":"LANDKODER","navn":"ESTLAND"},{"kode":"NOR","kodeverk":"LANDKODER","navn":"NORGE"},{"kode":"BMU","kodeverk":"LANDKODER","navn":"BERMUDA"},{"kode":"LTU","kodeverk":"LANDKODER","navn":"LITAUEN"},{"kode":"MAC","kodeverk":"LANDKODER","navn":"MACAO"},{"kode":"TON","kodeverk":"LANDKODER","navn":"TONGA"},{"kode":"ROU","kodeverk":"LANDKODER","navn":"ROMANIA"},{"kode":"BLM","kodeverk":"LANDKODER","navn":"SAINT BARTHELEMY"},{"kode":"SAU","kodeverk":"LANDKODER","navn":"SAUDI-ARABIA"},{"kode":"GNQ","kodeverk":"LANDKODER","navn":"EKVATORIAL-GUINEA"},{"kode":"TGO","kodeverk":"LANDKODER","navn":"TOGO"},{"kode":"ZMB","kodeverk":"LANDKODER","navn":"ZAMBIA"},{"kode":"VUT","kodeverk":"LANDKODER","navn":"VANUATU"},{"kode":"DZA","kodeverk":"LANDKODER","navn":"ALGERIE"},{"kode":"TJK","kodeverk":"LANDKODER","navn":"TADZJIKISTAN"},{"kode":"NLD","kodeverk":"LANDKODER","navn":"NEDERLAND"},{"kode":"KIR","kodeverk":"LANDKODER","navn":"KIRIBATI"},{"kode":"GUY","kodeverk":"LANDKODER","navn":"GUYANA"},{"kode":"BVT","kodeverk":"LANDKODER","navn":"BOUVETØYA"},{"kode":"IND","kodeverk":"LANDKODER","navn":"INDIA"},{"kode":"LKA","kodeverk":"LANDKODER","navn":"SRI LANKA"},{"kode":"SYR","kodeverk":"LANDKODER","navn":"SYRIA"},{"kode":"ESP","kodeverk":"LANDKODER","navn":"SPANIA"},{"kode":"GRL","kodeverk":"LANDKODER","navn":"GRØNLAND"},{"kode":"AIA","kodeverk":"LANDKODER","navn":"ANGUILLA"},{"kode":"IRQ","kodeverk":"LANDKODER","navn":"IRAK"},{"kode":"MCO","kodeverk":"LANDKODER","navn":"MONACO"},{"kode":"MHL","kodeverk":"LANDKODER","navn":"MARSHALLØYENE"},{"kode":"DOM","kodeverk":"LANDKODER","navn":"DEN DOMINIKANSKE REP"},{"kode":"FLK","kodeverk":"LANDKODER","navn":"FALKLANDSØYENE"}]'),k_=[{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-005",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakebetaling endring"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"}],f_=[{kode:"IKKE_I_AKTIVITET_IKKE_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Aktiviteten er ikke dokumentert"},{kode:"I_AKTIVITET",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er i aktivitet"},{kode:"IKKE_I_AKTIVITET_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er ikke i aktivitet"}],m_=[{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"},{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"}],v_=[{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"},{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"}],E_=JSON.parse('[{"kode":"FODSELSDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fødselsdato"},{"kode":"TILBAKETREKK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Tilbaketrekk"},{"kode":"ER_ANKEFRIST_IKKE_OVERHOLDT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er ankefrist ikke overholdt"},{"kode":"FNR","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fødselsnummer"},{"kode":"TERMINBEKREFTELSE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Terminbekreftelse"},{"kode":"TERMINDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Termindato"},{"kode":"ANKE_RESULTAT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Anke resultat"},{"kode":"UTTAK_SPLITT_TIDSPERIODE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resulterende periode ved splitting"},{"kode":"UTTAK_TREKKDAGER_FLERBARN_KVOTE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Trekkdager flerbarn kvote"},{"kode":"OPPHOLDSRETT_IKKE_EOS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruker har ikke oppholdsrett i EØS"},{"kode":"TILRETTELEGGING_SKAL_BRUKES","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avgjør om tilrettelegging skal brukes"},{"kode":"ER_ANKE_IKKE_KONKRET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er anke ikke konkret."},{"kode":"BEHANDLING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Behandling"},{"kode":"UTTAK_GRADERING_ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Gradering av arbeidsforhold"},{"kode":"ANKE_AVVIST_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak til avvist anke"},{"kode":"INNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntekt"},{"kode":"SOKNADSFRISTVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Søknadsfristvilkåret"},{"kode":"DAGPENGER_INNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dagpenger"},{"kode":"ARBEIDSFORHOLD_BEKREFTET_TOM_DATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Til og med dato fastsatt av saksbehandler"},{"kode":"SOKNADSFRIST","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Søknadsfrist"},{"kode":"VILKAR_SOM_ANVENDES","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Vilkår som anvendes"},{"kode":"PERIODE_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Periode f.o.m."},{"kode":"UTTAK_PROSENT_UTBETALING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Utbetalingsgrad"},{"kode":"NYTT_REFUSJONSKRAV","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Nytt refusjonskrav"},{"kode":"DODSDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dødsdato"},{"kode":"DOKUMENTASJON_FORELIGGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dokumentasjon foreligger"},{"kode":"LØNNSENDRING_I_PERIODEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Lønnsendring i beregningsperioden"},{"kode":"AVKLART_PERIODE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avklart periode"},{"kode":"SVANGERSKAPSPENGERVILKÅRET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Svangerskapsvilkåret"},{"kode":"KLAGE_OMGJØR_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak til omgjøring"},{"kode":"AKTIVITET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Aktivitet"},{"kode":"UTTAK_STØNADSKONTOTYPE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Stønadskontotype"},{"kode":"ALENEOMSORG","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Aleneomsorg"},{"kode":"OMSORG","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Omsorg"},{"kode":"KONTAKTPERSON","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Kontaktperson"},{"kode":"ER_KLAGE_KONKRET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"TILRETTELEGGING_BEHOV_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Tilrettelegging behov FOM"},{"kode":"ANNEN_FORELDER_RETT_EØS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Annen forelder har opptjent rett fra land i EØS"},{"kode":"AKTIVITETSKRAV_AVKLARING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avklaring om mor er i aktivitet"},{"kode":"FASTSETT_RESULTAT_PERIODEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fastsett resultat for perioden"},{"kode":"FRILANSVIRKSOMHET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Frilansvirksomhet"},{"kode":"MANN_ADOPTERER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mann adopterer"},{"kode":"ANDEL_ARBEID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Andel i arbeid"},{"kode":"DELVIS_TILRETTELEGGING_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Delvis tilrettelegging FOM"},{"kode":"OPPTJENINGSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Opptjeningsvilkåret"},{"kode":"ER_KLAGER_PART","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"UTTAK_PERIODE_RESULTAT_TYPE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resultattype for periode"},{"kode":"UTLAND","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Utland"},{"kode":"BRUK_ANTALL_I_TPS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruk antall fra folkeregisteret"},{"kode":"AKTIVITET_PERIODE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Perioden med aktivitet"},{"kode":"FASTSETT_ETTERLØNN_SLUTTPAKKE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fastsett søkers månedsinntekt fra etterlønn eller sluttpakke"},{"kode":"IKKE_OMSORG_PERIODEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Perioden Søker har ikke omsorg for barnet"},{"kode":"DEKNINGSGRAD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dekningsgrad"},{"kode":"ER_ANKEN_IKKE_SIGNERT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"er anken ikke signert."},{"kode":"SYKDOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Sykdom"},{"kode":"UTSTEDTDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Utstedtdato"},{"kode":"FODSELSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fødsel"},{"kode":"NAVN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Navn"},{"kode":"UTTAK_TREKKDAGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Trekkdager"},{"kode":"PA_KLAGD_BEHANDLINGID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Påklagd behandlingId"},{"kode":"VURDER_ETTERLØNN_SLUTTPAKKE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Har søker inntekt fra etterlønn eller sluttpakke"},{"kode":"OPPHOLDSRETT_EOS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruker har oppholdsrett i EØS"},{"kode":"RETT_TIL_FORELDREPENGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Rett til foreldrepenger"},{"kode":"INNTEKTSKATEGORI","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntektskategori"},{"kode":"ADOPTERER_ALENE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Adopterer alene"},{"kode":"ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Arbeidsforhold"},{"kode":"BRUKER_TVUNGEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruker er under tvungen forvaltning"},{"kode":"DELVIS_REFUSJON_FØR_STARTDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Delvis refusjon som utbetales før startdato for full refusjon"},{"kode":"ENDRING_TIDSBEGRENSET_ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Endring tidsbegrenset arbeidsforhold"},{"kode":"VURDER_GRADERING_PÅ_ANDEL_UTEN_BG","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Vurder om søker har gradering på en andel uten beregningsgrunnlag"},{"kode":"MANDAT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mandat"},{"kode":"MOR_MOTTAR_UFØRETRYGD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mor mottar uføretrygd"},{"kode":"HEL_TILRETTELEGGING_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Hel tilrettelegging FOM"},{"kode":"ORGANISASJONSNUMMER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Organisasjonsnummer"},{"kode":"UTTAK_GRADERING_AVSLAG_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak avslag gradering"},{"kode":"ER_KLAGEN_SIGNERT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"ER_KLAGEFRIST_OVERHOLDT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"OMSORGSVILKAR","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Foreldreansvar"},{"kode":"PA_ANKET_BEHANDLINGID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"på anket behandlingsId."},{"kode":"SLUTTE_ARBEID_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Slutte arbeid FOM"},{"kode":"BRUK_ANTALL_I_SOKNAD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruk antall fra søknad"},{"kode":"KLAGE_RESULTAT_NFP","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resultat"},{"kode":"FORDELING_FOR_ANDEL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fordeling for arbeidsforhold"},{"kode":"UTTAK_SAMTIDIG_UTTAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Samtidig uttak"},{"kode":"ER_SOKER_BOSATT_I_NORGE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er søker bosatt i Norge?"},{"kode":"FRILANS_INNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Frilans inntekt"},{"kode":"FASTSETT_VIDERE_BEHANDLING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fastsett videre behandling"},{"kode":"BRUK_ANTALL_I_VEDTAKET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruk antall fra vedtaket"},{"kode":"OMSORGSOVERTAKELSESDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Omsorgsovertakelsesdato"},{"kode":"UTTAK_PERIODE_RESULTAT_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resultat årsak"},{"kode":"ENDRING_NAERING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Endring i næring"},{"kode":"FORDELING_FOR_NY_ANDEL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny andel med fordeling"},{"kode":"BEHANDLENDE_ENHET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Behandlende enhet"},{"kode":"BRUTTO_NAERINGSINNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Brutto næringsinntekt"},{"kode":"FORDELING_ETTER_BESTEBEREGNING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fordeling etter besteberegning"},{"kode":"STARTDATO_FRA_SOKNAD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Startdato fra søknad"},{"kode":"NY_STARTDATO_REFUSJON","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny startdato for refusjon"},{"kode":"OVERSTYRT_VURDERING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Overstyrt vurdering"},{"kode":"KLAGE_RESULTAT_KA","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ytelsesvedtak"},{"kode":"FARESIGNALER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Faresignaler"},{"kode":"NY_AKTIVITET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Det er lagt til ny aktivitet for"},{"kode":"MOTTAR_YTELSE_FRILANS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mottar søker ytelse for frilansaktiviteten"},{"kode":"NY_REFUSJONSFRIST","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny refusjonsfrist"},{"kode":"OVERSTYRT_BEREGNING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Overstyrt beregning"},{"kode":"AVKLARSAKSOPPLYSNINGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avklar saksopplysninger"},{"kode":"INNTEKT_FRA_ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntekt fra arbeidsforhold"},{"kode":"SOKERSOPPLYSNINGSPLIKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Søkers opplysningsplikt"},{"kode":"SELVSTENDIG_NAERINGSDRIVENDE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Selvstendig næringsdrivende"},{"kode":"GYLDIG_MEDLEM_FOLKETRYGDEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Gyldig medlem i folketrygden"},{"kode":"MOTTATT_DATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mottatt dato"},{"kode":"ANTALL_BARN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Antall barn"},{"kode":"EKTEFELLES_BARN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ektefelles barn"},{"kode":"MILITÆR_ELLER_SIVIL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Militær- eller siviltjeneste"},{"kode":"PERIODE_TOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Periode t.o.m."},{"kode":"FORELDREANSVARSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Foreldreansvar"},{"kode":"STILLINGSPROSENT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Stillingsprosent"},{"kode":"ADOPSJONSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Adopsjon"},{"kode":"ANKE_OMGJØR_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak til omgjøring"},{"kode":"INNTEKTSKATEGORI_FOR_ANDEL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntektskategori for andel"},{"kode":"KONTROLL_AV_BESTEBEREGNING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Kontroll av besteberegning"},{"kode":"MOR_MOTTAR_STØNAD_EØS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mor mottar foreldrepenger fra land i EØS"},{"kode":"ER_ANKER_IKKE_PART","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Angir om anker ikke er part i saken."},{"kode":"ER_VILKÅRENE_TILBAKEKREVING_OPPFYLT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er vilkårene for tilbakekreving oppfylt"},{"kode":"NY_FORDELING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny fordeling for"},{"kode":"ER_SÆRLIGE_GRUNNER_TIL_REDUKSJON","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er det særlige grunner til reduksjon"},{"kode":"MOTTAR_YTELSE_ARBEID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mottar søker ytelse for arbeid i {value}"},{"kode":"TYPE_VERGE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Type verge"}]'),b_=[{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet/savnet"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Uregistrert person"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"UTAN",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person annullert tilgang Fnr"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utvandret"}],T_=[{kode:"ENHETSREGISTERET",kodeverk:"FAGSYSTEM",navn:"Enhetsregisteret"},{kode:"INFOTRYGD",kodeverk:"FAGSYSTEM",navn:"Infotrygd"},{kode:"INNTEKT",kodeverk:"FAGSYSTEM",navn:"INNTEKT"},{kode:"ARENA",kodeverk:"FAGSYSTEM",navn:"Arena"},{kode:"GOSYS",kodeverk:"FAGSYSTEM",navn:"Gosys"},{kode:"JOARK",kodeverk:"FAGSYSTEM",navn:"Joark"},{kode:"K9SAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Folketrygdloven Kapittel 9"},{kode:"FPSAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Foreldrepenger"},{kode:"AAREGISTERET",kodeverk:"FAGSYSTEM",navn:"AAregisteret"},{kode:"MEDL",kodeverk:"FAGSYSTEM",navn:"MEDL"},{kode:"TPS",kodeverk:"FAGSYSTEM",navn:"TPS"},{kode:"VLSP",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Sykepenger"}],y_=[{kode:"ANKE_STADFESTE_YTELSESVEDTAK",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"ANKEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"ANKE_AVVIS",kodeverk:"ANKEVURDERING",navn:"Anken avvises"},{kode:"ANKE_OMGJOER",kodeverk:"ANKEVURDERING",navn:"Anken omgjøres"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket oppheves og hjemsendes"}],p_=[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"}],A_=[{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],c_=[{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"}],h_=[{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er slått sammen med et annet"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforhold lagt til av saksbehandler"},{kode:"BRUK_UTEN_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk, men ikke benytt inntektsmelding"},{kode:"IKKE_BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Ikke bruk"},{kode:"BASERT_PÅ_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet som ikke ligger i AA-reg er basert på inntektsmelding"},{kode:"BRUK_MED_OVERSTYRT_PERIODE",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Inntekten til arbeidsforholdet skal ikke være med i beregningsgrunnlaget"}],R_=[{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"}],__=[{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"}],S_=[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],N_=[{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],I_=[{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"}],P_=[{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],O_=[{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"}],L_=[{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"},{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"}],K_=[{kode:"SAMMENSATT_KONTROLL",kodeverk:"FAGSAK_MARKERING",navn:"Sammensatt kontroll"},{kode:"EØS_BOSATT_NORGE",kodeverk:"FAGSAK_MARKERING",navn:"EØS bosatt Norge"},{kode:"SELVSTENDIG_NÆRING",kodeverk:"FAGSAK_MARKERING",navn:"Næringsdrivende"},{kode:"BARE_FAR_RETT",kodeverk:"FAGSAK_MARKERING",navn:"Bare far har rett"},{kode:"BOSATT_UTLAND",kodeverk:"FAGSAK_MARKERING",navn:"Bosatt utland"},{kode:"DØD_DØDFØDSEL",kodeverk:"FAGSAK_MARKERING",navn:"Død eller dødfødsel"},{kode:"PRAKSIS_UTSETTELSE",kodeverk:"FAGSAK_MARKERING",navn:"Praksis utsettelse"}],D_={RelasjonsRolleType:GR,HistorikkinnslagType:qR,UttakUtsettelseType:wR,FagsakYtelseType:VR,StønadskontoType:[{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"}],FagsakStatus:jR,Venteårsak:[{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga for tidlig søknad"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdId som stemmer med Aareg"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på scanning"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev venter søknad."},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."}],AnkeVurderingOmgjør:[{kode:"ANKE_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Gunst omgjør i anke"},{kode:"ANKE_TIL_UGUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Ugunst omgjør i anke"},{kode:"ANKE_DELVIS_OMGJOERING_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Delvis omgjøring, til gunst i anke"}],BehandlingÅrsakType:[{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger inntekt"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Inntektsmelding"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger søknadsfrist"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger opptjening"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Søknad"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger beregning"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. u26-29"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger medlemskap"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev uttak"}],GraderingAvslagÅrsak:[{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"Avslag gradering - arbeid 100% eller mer",lovHjemmel:null}],AktivitetStatus:UR,BeregningsgrunnlagAndeltype:HR,RevurderingVarslingÅrsak:[{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utvandret"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:xR,KonsekvensForYtelsen:YR,Inntektskategori:CR,SivilstandType:$R,SkjermlenkeType:JR,FaktaOmBeregningTilfelle:WR,KlageVurdering:zR,HistorikkBegrunnelseType:XR,OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:ZR,KlageAvvistÅrsak:[{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klage er ugyldig",lovHjemmel:null}],BehandlingResultatType:QR,VergeType:e_,TilbakekrevingVidereBehandling:n_,OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"}],FamilieHendelseType:r_,KlageHjemmel:t_,VilkårType:[{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"}],FarSøkerType:[{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"}],FaresignalVurdering:a_,ArbeidType:i_,KlageMedholdÅrsak:[{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"}],Region:s_,OppgaveÅrsak:[{kode:"BEH_SAK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i VL"},{kode:"BEH_SAK_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i Infotrygd"},{kode:"INNHENT_DOK",kodeverk:"OPPGAVE_AARSAK",navn:"Innhent dokumentasjon"},{kode:"VUR_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder dokument i VL"},{kode:"REG_SOK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Registrere søknad i VL"},{kode:"SETTVENT_STO",kodeverk:"OPPGAVE_AARSAK",navn:"Sett Arena utbetaling på vent"},{kode:"RV_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Revurdere i VL"},{kode:"VUR_KONS_YTE_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder konsekvens for ytelse foreldrepenger"},{kode:"GOD_VED_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Godkjenne vedtak i VL"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"},{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"}],HistorikkOpplysningType:o_,FordelingPeriodeKilde:l_,KlageVurderingOmgjør:[{kode:"DELVIS_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Delvis medhold i klage"},{kode:"UGUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Ugunst medhold i klage"},{kode:"GUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Gunst medhold i klage"}],VurderArbeidsforholdHistorikkinnslag:u_,Arbeidskategori:d_,VurderÅrsak:[{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"}],Landkoder:g_,BehandlingType:k_,KontrollerAktivitetskravAvklaring:f_,InnsynResultatType:m_,MedlemskapType:v_,HistorikkEndretFeltType:E_,PersonstatusType:b_,Fagsystem:T_,AnkeVurdering:y_,UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"}],BehandlingStatus:p_,VirksomhetType:A_,MedlemskapDekningType:c_,ArbeidsforholdHandlingType:h_,HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"}],Avslagsårsak:JSON.parse('{"FP_VK_3":[{"kode":"1007","kodeverk":"AVSLAGSARSAK","navn":"Søkt for sent","lovHjemmel":null}],"FP_VK_4":[{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1005","kodeverk":"AVSLAGSARSAK","navn":"Ektefelles/samboers barn","lovHjemmel":null},{"kode":"1011","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK11\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK16\\", \\"lovreferanse\\": \\"§ 14-5 2. ledd\\"}]}]}"},{"kode":"1006","kodeverk":"AVSLAGSARSAK","navn":"Mann adopterer ikke alene","lovHjemmel":null},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1004","kodeverk":"AVSLAGSARSAK","navn":"Barn over 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_1":[{"kode":"1002","kodeverk":"AVSLAGSARSAK","navn":"Søker er medmor","lovHjemmel":null},{"kode":"1031","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}"},{"kode":"1003","kodeverk":"AVSLAGSARSAK","navn":"Søker er far","lovHjemmel":null},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1001","kodeverk":"AVSLAGSARSAK","navn":"Søkt for tidlig","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1026","kodeverk":"AVSLAGSARSAK","navn":"Fødselsdato ikke oppgitt eller registrert","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_2":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utvandret","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"}],"-":[],"FP_VK_41":[{"kode":"1041","kodeverk":"AVSLAGSARSAK","navn":"For lavt brutto beregningsgrunnlag","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_41\\", \\"lovreferanse\\": \\"14-7\\"}]}]}"}],"FP_VK_21":[{"kode":"1035","kodeverk":"AVSLAGSARSAK","navn":"Ikke tilstrekkelig opptjening","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_23\\", \\"lovreferanse\\": \\"14-6\\"}]}]}"}],"FP_VK_11":[{"kode":"1027","kodeverk":"AVSLAGSARSAK","navn":"Ingen barn dokumentert på far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1028","kodeverk":"AVSLAGSARSAK","navn":"Mor fyller ikke vilkåret for sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1029","kodeverk":"AVSLAGSARSAK","navn":"Bruker er ikke registrert som far/medmor til barnet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_33":[{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1017","kodeverk":"AVSLAGSARSAK","navn":"Omsorgsovertakelse etter 56 uker","lovHjemmel":null},{"kode":"1016","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke barnets far","lovHjemmel":null},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1018","kodeverk":"AVSLAGSARSAK","navn":"Ikke foreldreansvar alene etter barnelova","lovHjemmel":null}],"FP_VK_34":[{"kode":"1019","kodeverk":"AVSLAGSARSAK","navn":"Manglende dokumentasjon","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_34\\", \\"lovreferanse\\": \\"21-3\\"}]}]}"}],"FP_VK_23":[{"kode":"1035","kodeverk":"AVSLAGSARSAK","navn":"Ikke tilstrekkelig opptjening","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_23\\", \\"lovreferanse\\": \\"14-6\\"}]}]}"}],"FP_VK_8":[{"kode":"1014","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke foreldreansvar","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1013","kodeverk":"AVSLAGSARSAK","navn":"Barn ikke under 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1015","kodeverk":"AVSLAGSARSAK","navn":"Søker har hatt vanlig samvær med barnet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"}],"SVP_VK_1":[{"kode":"1065","kodeverk":"AVSLAGSARSAK","navn":"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 2. ledd\\"}]}]}"},{"kode":"1062","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Søker har mottatt sykepenger","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1066","kodeverk":"AVSLAGSARSAK","navn":"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 2. ledd\\"}]}]}"},{"kode":"1064","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1063","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1061","kodeverk":"AVSLAGSARSAK","navn":"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 3. ledd\\"}]}]}"},{"kode":"1060","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Søker er ikke gravid kvinne","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"}],"FP_VK_16":[{"kode":"1004","kodeverk":"AVSLAGSARSAK","navn":"Barn over 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1051","kodeverk":"AVSLAGSARSAK","navn":"Stebarnsadopsjon ikke flere dager igjen","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_5":[{"kode":"1009","kodeverk":"AVSLAGSARSAK","navn":"Mor ikke død","lovHjemmel":null},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1008","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke barnets far","lovHjemmel":null},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1011","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK11\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK16\\", \\"lovreferanse\\": \\"§ 14-5 2. ledd\\"}]}]}"},{"kode":"1012","kodeverk":"AVSLAGSARSAK","navn":"Far har ikke omsorg for barnet","lovHjemmel":null},{"kode":"1010","kodeverk":"AVSLAGSARSAK","navn":"Mor ikke død ved fødsel/omsorg","lovHjemmel":null}],"FP_VK_2_L":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utvandret","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"}],"FP_VK_2_F":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utvandret","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1052","kodeverk":"AVSLAGSARSAK","navn":"Innflyttet for mindre enn ett år siden","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK_2_F\\", \\"lovreferanse\\": \\"14-17 5. ledd\\"}]}]}"}]}'),OpptjeningAktivitetType:R_,PermisjonsbeskrivelseType:__,Språkkode:[{kode:"NB",kodeverk:"SPRAAK_KODE",navn:"Norsk"},{kode:"NN",kodeverk:"SPRAAK_KODE",navn:"Nynorsk"},{kode:"EN",kodeverk:"SPRAAK_KODE",navn:"Engelsk"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"}],OppholdstillatelseType:S_,MedlemskapManuellVurderingType:N_,ManuellBehandlingÅrsak:[{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."}],MorsAktivitet:I_,NaturalYtelseType:P_,PeriodeResultatÅrsak:JSON.parse('[{"kode":"2010","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4072","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjuende ledd: Barnet er dødt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-7","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4037","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Ikke heltidsarbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4085","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Det er ikke samtykke mellom partene","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2035","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-16\\"}}}","sortering":"14-14-3","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4052","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4032","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4013","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4084","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4097","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Adopsjonsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4104","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 tredje ledd: Stønadsperiode for nytt barn","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4086","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10,14-11\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4002","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Ikke stønadsdager igjen på stønadskonto","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2012","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4023","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-5","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4031","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Ferie/arbeid innenfor de første 6 ukene","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4112","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Barnets innleggelse første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2017","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2036","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4071","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Bruker er død","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4098","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Foreldreansvarsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4067","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4066","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2032","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2026","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2031","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12, jf. §14-16: Gradering av kvote/overført kvote","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4081","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4053","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2007","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Innvilget foreldrepenger, kun mor har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2014","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4007","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2023","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15\\"}}}","sortering":"14-15-1","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4056","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-g","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2016","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-b","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2004","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2018","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2024","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4068","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4087","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-2: Opphør medlemskap","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-2\\"}}}","sortering":"14-02","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4110","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4115","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4096","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Fødselsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4035","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4073","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4069","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4062","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4089","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-g","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4034","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-9\\"}}}","sortering":"14-11-0","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2038","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Samtidig uttak","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4075","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger","lovHjemmel":"","sortering":"14-09-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4005","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjuende ledd: Ikke sammenhengende perioder","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-7","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2034","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2028","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4060","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2006","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Innvilget foreldrepenger før fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4105","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4058","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2002","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Innvilget fellesperiode/foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4095","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL"],"synligForRolle":["MOR"]},{"kode":"4116","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4092","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Avslag overføring - har ikke aleneomsorg for barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4038","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2022","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4008","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4064","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4111","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Søkers innleggelse første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4054","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-e","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2020","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-09-1","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4077","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10 a\\"}}}","sortering":"14-10-0-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2019","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-d","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2025","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4030","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Avslag utsettelse før termin/fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4050","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2003","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Innvilget uttak av kvote","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4082","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2013","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-d","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2027","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4088","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-f","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4063","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4099","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-6: Opptjeningsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-6\\"}}}","sortering":"14-06","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2039","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4103","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4039","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2037","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9, jf. §14-13: Innvilget fellesperiode til far","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4003","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 fjerde ledd: Mor har ikke omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-4","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4107","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4022","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 tredje ledd: Barnet er over 3 år","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4033","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Ikke lovbestemt ferie","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4059","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13, 14-9\\"}}}","sortering":"14-13-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4025","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-16\\"}}}","sortering":"14-16-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2021","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4070","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-e","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4074","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12,21-3\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2011","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2030","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4065","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4057","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2033","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13,14-16\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4076","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger","lovHjemmel":"","sortering":"14-09-5","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4040","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4061","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4041","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4020","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§22-13 tredje ledd: Brudd på søknadsfrist","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"22-13\\"}}}","sortering":"22-13-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4106","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2005","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15: Innvilget foreldrepenger ved aleneomsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15\\"}}}","sortering":"14-15","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4055","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-f","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4093","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-16: Avslag gradering - søker er ikke i arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-16\\"}}}","sortering":"14-16","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4102","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4051","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2015","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-a","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4100","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 andre ledd: Uttak før omsorgsovertakelse","lovHjemmel":"","sortering":"14-10-2","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4012","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 fjerde ledd: Far/medmor har ikke omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-4","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4117","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]}]'),ForeldreType:O_,AdresseType:L_,FagsakMarkering:K_},Oa=e=>{if(e==null)return;const t=e.toString().replace(/\s/g,"");if(!Number.isNaN(t))return Number(Math.round(parseFloat(t))).toLocaleString("nb-NO").replace(/,|\s/g," ")};function Ol(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zo={exports:{}},F_=zo.exports,Yg;function M_(){return Yg||(Yg=1,function(e,t){(function(r,a){e.exports=a()})(F_,function(){var r,a,s=1e3,l=6e4,d=36e5,g=864e5,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=31536e6,v=2628e6,T=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,p={years:m,months:v,days:g,hours:d,minutes:l,seconds:s,milliseconds:1,weeks:6048e5},O=function(w){return w instanceof Q},L=function(w,K,I){return new Q(w,I,K.$l)},c=function(w){return a.p(w)+"s"},N=function(w){return w<0},F=function(w){return N(w)?Math.ceil(w):Math.floor(w)},G=function(w){return Math.abs(w)},P=function(w,K){return w?N(w)?{negative:!0,format:""+G(w)+K}:{negative:!1,format:""+w+K}:{negative:!1,format:""}},Q=function(){function w(I,z,Z){var X=this;if(this.$d={},this.$l=Z,I===void 0&&(this.$ms=0,this.parseFromMilliseconds()),z)return L(I*p[c(z)],this);if(typeof I=="number")return this.$ms=I,this.parseFromMilliseconds(),this;if(typeof I=="object")return Object.keys(I).forEach(function(C){X.$d[c(C)]=I[C]}),this.calMilliseconds(),this;if(typeof I=="string"){var j=I.match(T);if(j){var ne=j.slice(2).map(function(C){return C!=null?Number(C):0});return this.$d.years=ne[0],this.$d.months=ne[1],this.$d.weeks=ne[2],this.$d.days=ne[3],this.$d.hours=ne[4],this.$d.minutes=ne[5],this.$d.seconds=ne[6],this.calMilliseconds(),this}}return this}var K=w.prototype;return K.calMilliseconds=function(){var I=this;this.$ms=Object.keys(this.$d).reduce(function(z,Z){return z+(I.$d[Z]||0)*p[Z]},0)},K.parseFromMilliseconds=function(){var I=this.$ms;this.$d.years=F(I/m),I%=m,this.$d.months=F(I/v),I%=v,this.$d.days=F(I/g),I%=g,this.$d.hours=F(I/d),I%=d,this.$d.minutes=F(I/l),I%=l,this.$d.seconds=F(I/s),I%=s,this.$d.milliseconds=I},K.toISOString=function(){var I=P(this.$d.years,"Y"),z=P(this.$d.months,"M"),Z=+this.$d.days||0;this.$d.weeks&&(Z+=7*this.$d.weeks);var X=P(Z,"D"),j=P(this.$d.hours,"H"),ne=P(this.$d.minutes,"M"),C=this.$d.seconds||0;this.$d.milliseconds&&(C+=this.$d.milliseconds/1e3,C=Math.round(1e3*C)/1e3);var J=P(C,"S"),$=I.negative||z.negative||X.negative||j.negative||ne.negative||J.negative,re=j.format||ne.format||J.format?"T":"",Y=($?"-":"")+"P"+I.format+z.format+X.format+re+j.format+ne.format+J.format;return Y==="P"||Y==="-P"?"P0D":Y},K.toJSON=function(){return this.toISOString()},K.format=function(I){var z=I||"YYYY-MM-DDTHH:mm:ss",Z={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return z.replace(f,function(X,j){return j||String(Z[X])})},K.as=function(I){return this.$ms/p[c(I)]},K.get=function(I){var z=this.$ms,Z=c(I);return Z==="milliseconds"?z%=1e3:z=Z==="weeks"?F(z/p[Z]):this.$d[Z],z||0},K.add=function(I,z,Z){var X;return X=z?I*p[c(z)]:O(I)?I.$ms:L(I,this).$ms,L(this.$ms+X*(Z?-1:1),this)},K.subtract=function(I,z){return this.add(I,z,!0)},K.locale=function(I){var z=this.clone();return z.$l=I,z},K.clone=function(){return L(this.$ms,this)},K.humanize=function(I){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!I)},K.valueOf=function(){return this.asMilliseconds()},K.milliseconds=function(){return this.get("milliseconds")},K.asMilliseconds=function(){return this.as("milliseconds")},K.seconds=function(){return this.get("seconds")},K.asSeconds=function(){return this.as("seconds")},K.minutes=function(){return this.get("minutes")},K.asMinutes=function(){return this.as("minutes")},K.hours=function(){return this.get("hours")},K.asHours=function(){return this.as("hours")},K.days=function(){return this.get("days")},K.asDays=function(){return this.as("days")},K.weeks=function(){return this.get("weeks")},K.asWeeks=function(){return this.as("weeks")},K.months=function(){return this.get("months")},K.asMonths=function(){return this.as("months")},K.years=function(){return this.get("years")},K.asYears=function(){return this.as("years")},w}(),A=function(w,K,I){return w.add(K.years()*I,"y").add(K.months()*I,"M").add(K.days()*I,"d").add(K.hours()*I,"h").add(K.minutes()*I,"m").add(K.seconds()*I,"s").add(K.milliseconds()*I,"ms")};return function(w,K,I){r=I,a=I().$utils(),I.duration=function(X,j){var ne=I.locale();return L(X,{$l:ne},j)},I.isDuration=O;var z=K.prototype.add,Z=K.prototype.subtract;K.prototype.add=function(X,j){return O(X)?A(this,X,1):z.bind(this)(X,j)},K.prototype.subtract=function(X,j){return O(X)?A(this,X,-1):Z.bind(this)(X,j)}}})}(zo)),zo.exports}var B_=M_();const G_=Ol(B_);var Xo={exports:{}},q_=Xo.exports,Cg;function w_(){return Cg||(Cg=1,function(e,t){(function(r,a){e.exports=a()})(q_,function(){var r="day";return function(a,s,l){var d=function(m){return m.add(4-m.isoWeekday(),r)},g=s.prototype;g.isoWeekYear=function(){return d(this).year()},g.isoWeek=function(m){if(!this.$utils().u(m))return this.add(7*(m-this.isoWeek()),r);var v,T,p,O,L=d(this),c=(v=this.isoWeekYear(),T=this.$u,p=(T?l.utc:l)().year(v).startOf("year"),O=4-p.isoWeekday(),p.isoWeekday()>4&&(O+=7),p.add(O,r));return L.diff(c,"week")+1},g.isoWeekday=function(m){return this.$utils().u(m)?this.day()||7:this.day(this.day()%7?m:m-7)};var f=g.startOf;g.startOf=function(m,v){var T=this.$utils(),p=!!T.u(v)||v;return T.p(m)==="isoweek"?p?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):f.bind(this)(m,v)}}})}(Xo)),Xo.exports}var V_=w_();const j_=Ol(V_);var Zo={exports:{}},U_=Zo.exports,$g;function H_(){return $g||($g=1,function(e,t){(function(r,a){e.exports=a()})(U_,function(){var r="minute",a=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(l,d,g){var f=d.prototype;g.utc=function(c){var N={date:c,utc:!0,args:arguments};return new d(N)},f.utc=function(c){var N=g(this.toDate(),{locale:this.$L,utc:!0});return c?N.add(this.utcOffset(),r):N},f.local=function(){return g(this.toDate(),{locale:this.$L,utc:!1})};var m=f.parse;f.parse=function(c){c.utc&&(this.$u=!0),this.$utils().u(c.$offset)||(this.$offset=c.$offset),m.call(this,c)};var v=f.init;f.init=function(){if(this.$u){var c=this.$d;this.$y=c.getUTCFullYear(),this.$M=c.getUTCMonth(),this.$D=c.getUTCDate(),this.$W=c.getUTCDay(),this.$H=c.getUTCHours(),this.$m=c.getUTCMinutes(),this.$s=c.getUTCSeconds(),this.$ms=c.getUTCMilliseconds()}else v.call(this)};var T=f.utcOffset;f.utcOffset=function(c,N){var F=this.$utils().u;if(F(c))return this.$u?0:F(this.$offset)?T.call(this):this.$offset;if(typeof c=="string"&&(c=function(A){A===void 0&&(A="");var w=A.match(a);if(!w)return null;var K=(""+w[0]).match(s)||["-",0,0],I=K[0],z=60*+K[1]+ +K[2];return z===0?0:I==="+"?z:-z}(c),c===null))return this;var G=Math.abs(c)<=16?60*c:c,P=this;if(N)return P.$offset=G,P.$u=c===0,P;if(c!==0){var Q=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(P=this.local().add(G+Q,r)).$offset=G,P.$x.$localOffset=Q}else P=this.utc();return P};var p=f.format;f.format=function(c){var N=c||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return p.call(this,N)},f.valueOf=function(){var c=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*c},f.isUTC=function(){return!!this.$u},f.toISOString=function(){return this.toDate().toISOString()},f.toString=function(){return this.toDate().toUTCString()};var O=f.toDate;f.toDate=function(c){return c==="s"&&this.$offset?g(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():O.call(this)};var L=f.diff;f.diff=function(c,N,F){if(c&&this.$u===c.$u)return L.call(this,c,N,F);var G=this.local(),P=g(c).local();return L.call(G,P,N,F)}}})}(Zo)),Zo.exports}var x_=H_();const Y_=Ol(x_),C_=Zf(),Kn=e=>FR({locale:"nb-NO",messages:e},C_),$_="YYYY-MM-DD",J_="DD.MM.YYYY",im={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};var Qo={exports:{}},W_=Qo.exports,Jg;function z_(){return Jg||(Jg=1,function(e,t){(function(r,a){e.exports=a(vr)})(W_,function(r){function a(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var s=a(r),l={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(l,null,!0),l})}(Qo)),Qo.exports}z_();vr.extend(Y_);vr.extend(j_);vr.extend(G_);Kn(im);const X_=e=>e==null?e:e.replace(/&#?((?!(60|62);)\w+);/g,(t,r)=>{if(Number.isNaN(parseInt(r,10))){const a={quot:34,amp:38,apos:39,nbsp:160,copy:169,reg:174,deg:176,frasl:47,trade:8482,euro:8364,Agrave:192,Aacute:193,Acirc:194,Atilde:195,Auml:196,Aring:197,AElig:198,Ccedil:199,Egrave:200,Eacute:201,Ecirc:202,Euml:203,Igrave:204,Iacute:205,Icirc:206,Iuml:207,ETH:208,Ntilde:209,Ograve:210,Oacute:211,Ocirc:212,Otilde:213,Ouml:214,times:215,Oslash:216,Ugrave:217,Uacute:218,Ucirc:219,Uuml:220,Yacute:221,THORN:222,szlig:223,agrave:224,aacute:225,acirc:226,atilde:227,auml:228,aring:229,aelig:230,ccedil:231,egrave:232,eacute:233,ecirc:234,euml:235,igrave:236,iacute:237,icirc:238,iuml:239,eth:240,ntilde:241,ograve:242,oacute:243,ocirc:244,otilde:245,ouml:246,divide:247,oslash:248,ugrave:249,uacute:250,ucirc:251,uuml:252,yacute:253,thorn:254,yuml:255,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,permil:8240,lsaquo:8249,rsaquo:8250,spades:9824,clubs:9827,hearts:9829,diams:9830,oline:8254,larr:8592,uarr:8593,rarr:8594,darr:8595,hellip:133,ndash:150,mdash:151,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,brkbar:166,sect:167,uml:168,die:168,ordf:170,laquo:171,not:172,shy:173,macr:175,hibar:175,plusmn:177,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,sup1:185,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,Alpha:913,alpha:945,Beta:914,beta:946,Gamma:915,gamma:947,Delta:916,delta:948,Epsilon:917,epsilon:949,Zeta:918,zeta:950,Eta:919,eta:951,Theta:920,theta:952,Iota:921,iota:953,Kappa:922,kappa:954,Lambda:923,lambda:955,Mu:924,mu:956,Nu:925,nu:957,Xi:926,xi:958,Omicron:927,omicron:959,Pi:928,pi:960,Rho:929,rho:961,Sigma:931,sigma:963,Tau:932,tau:964,Upsilon:933,upsilon:965,Phi:934,phi:966,Chi:935,chi:967,Psi:936,psi:968,Omega:937,omega:969}[r];return a!==void 0?String.fromCharCode(a):t}return String.fromCharCode(r)});Kn(im);const Z_=e=>e!=null&&e.constructor===Object;function sm(e){var t,r,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=sm(e[t]))&&(a&&(a+=" "),a+=r)}else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function _e(){for(var e,t,r=0,a="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=sm(e))&&(a&&(a+=" "),a+=t);return a}function om(e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}function lm(...e){return B.useCallback(om(e),e)}function Q_(e,t){const r=Object.assign({},t);for(const a in t){const s=e[a],l=t[a];/^on[A-Z]/.test(a)?s&&l?r[a]=(...g)=>{l(...g),s(...g)}:s&&(r[a]=s):a==="style"?r[a]=Object.assign(Object.assign({},s),l):a==="className"&&(r[a]=[s,l].filter(Boolean).join(" "))}return Object.assign(Object.assign({},e),r)}var eS=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const $i=U.forwardRef((e,t)=>{var r;const{children:a}=e,s=eS(e,["children"]);if(U.isValidElement(a)){const l=Object.prototype.propertyIsEnumerable.call(a.props,"ref")?a.props.ref:a.ref;return U.cloneElement(a,Object.assign(Object.assign({},Q_(s,a.props)),{ref:t?om([t,l]):l}))}if(U.Children.count(a)>1){const l=new Error("Aksel: Components using 'asChild' expects to recieve a single React element child.");throw l.name="SlotError",(r=Error.captureStackTrace)===null||r===void 0||r.call(Error,l,$i),l}return null});var nS=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};function rS(e,t){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function tS(e={}){const{name:t,hookName:r="useContext",providerName:a="Provider",errorMessage:s,defaultValue:l}=e,d=U.createContext(l),g=U.forwardRef((m,v)=>{var{children:T}=m,p=nS(m,["children"]);const O=B.useMemo(()=>p,Object.values(p));return B.createElement(d.Provider,{value:v?Object.assign(Object.assign({},O),{ref:v}):O},T)});function f(m=!0){var v;const T=U.useContext(d);if(!T&&m){const p=new Error(s??rS(r,a));throw p.name="ContextError",(v=Error.captureStackTrace)===null||v===void 0||v.call(Error,p,f),p}return T}return d.displayName=t,[g,f]}const[aS,Ji]=tS({hookName:"useTheme",name:"ThemeProvider",providerName:"ThemeProvider"});U.forwardRef((e,t)=>{var r;const a=Ji(!1),{children:s,className:l,asChild:d=!1,theme:g=(r=a==null?void 0:a.theme)!==null&&r!==void 0?r:"light",hasBackground:f=!0}=e,v=f??(a===void 0&&e.theme!==void 0),T=d?$i:"div";return B.createElement(aS,{theme:g},B.createElement(T,{ref:t,className:_e("navds-theme",l,g),"data-background":v},s))});const zt=e=>_e({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var iS=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const um=U.forwardRef((e,t)=>{var{className:r,size:a="medium",as:s="p",spacing:l,truncate:d,weight:g="regular",align:f,visuallyHidden:m,textColor:v}=e,T=iS(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return B.createElement(s,Object.assign({},T,{ref:t,className:_e(r,"navds-body-long",`navds-body-long--${a}`,zt({spacing:l,truncate:d,weight:g,align:f,visuallyHidden:m,textColor:v}))}))});var sS=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const On=U.forwardRef((e,t)=>{var{className:r,size:a="medium",as:s="p",spacing:l,truncate:d,weight:g="regular",align:f,visuallyHidden:m,textColor:v}=e,T=sS(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return B.createElement(s,Object.assign({},T,{ref:t,className:_e(r,"navds-body-short",`navds-body-short--${a}`,zt({spacing:l,truncate:d,weight:g,align:f,visuallyHidden:m,textColor:v}))}))});var oS=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};U.forwardRef((e,t)=>{var{className:r,size:a="medium",spacing:s,uppercase:l,as:d="p",truncate:g,weight:f="regular",align:m,visuallyHidden:v,textColor:T}=e,p=oS(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return B.createElement(d,Object.assign({},p,{ref:t,className:_e(r,"navds-detail",zt({spacing:s,truncate:g,weight:f,align:m,visuallyHidden:v,textColor:T,uppercase:l}),{"navds-detail--small":a==="small"})}))});var lS=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Wi=U.forwardRef((e,t)=>{var{children:r,className:a,size:s,spacing:l,as:d="p",showIcon:g=!1}=e,f=lS(e,["children","className","size","spacing","as","showIcon"]);return B.createElement(d,Object.assign({},f,{ref:t,className:_e("navds-error-message","navds-label",a,zt({spacing:l}),{"navds-label--small":s==="small","navds-error-message--show-icon":g})}),g&&B.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},B.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var uS=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};U.forwardRef((e,t)=>{var{level:r="1",size:a,className:s,as:l,spacing:d,align:g,visuallyHidden:f,textColor:m}=e,v=uS(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const T=l??`h${r}`;return B.createElement(T,Object.assign({},v,{ref:t,className:_e(s,"navds-heading",`navds-heading--${a}`,zt({spacing:d,align:g,visuallyHidden:f,textColor:m}))}))});var dS=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};U.forwardRef((e,t)=>{var{className:r,spacing:a,as:s="p"}=e,l=dS(e,["className","spacing","as"]);return B.createElement(s,Object.assign({},l,{ref:t,className:_e(r,"navds-ingress",{"navds-typo--spacing":!!a})}))});var gS=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Wn=U.forwardRef((e,t)=>{var{className:r,size:a="medium",as:s="label",spacing:l,visuallyHidden:d,textColor:g}=e,f=gS(e,["className","size","as","spacing","visuallyHidden","textColor"]);return B.createElement(s,Object.assign({},f,{ref:t,className:_e(r,"navds-label",zt({spacing:l,visuallyHidden:d,textColor:g}),{"navds-label--small":a==="small"})}))});function dm(e,t=166,r=!1){let a;function s(...l){const d=()=>{a=void 0,e.apply(this,l)};!a&&r&&d(),clearTimeout(a),a=setTimeout(d,t)}return s.clear=()=>{clearTimeout(a)},s}function Lr(e,t){const r=Object.entries(e).filter(([a])=>!t.includes(a));return Object.fromEntries(r)}const Wg=globalThis!=null&&globalThis.document?U.useLayoutEffect:()=>{};let zg=0;function kS(e){const[t,r]=U.useState(e),a=e||t;return U.useEffect(()=>{t==null&&(zg+=1,r(`aksel-id-${zg}`))},[t]),a}const Xg=B.useId;function La(e){var t;return Xg!==void 0?Xg().replace(/(:)/g,""):(t=kS(e))!==null&&t!==void 0?t:""}let Zg=0;function fS(e){const[t,r]=U.useState(e),a=e||t;return U.useEffect(()=>{t==null&&(Zg+=1,r(`aksel-icon-${Zg}`))},[t]),a}const Qg=B.useId;function st(e){var t;return Qg!==void 0?Qg().replace(/(:)/g,""):(t=fS(e))!==null&&t!==void 0?t:""}var mS=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const vS=U.forwardRef((e,t)=>{var{title:r,titleId:a}=e,s=mS(e,["title","titleId"]);let l=st();return l=r?a||"title-"+l:void 0,U.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},s),r?U.createElement("title",{id:l},r):null,U.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var ES=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const bS=U.forwardRef((e,t)=>{var{title:r,titleId:a}=e,s=ES(e,["title","titleId"]);let l=st();return l=r?a||"title-"+l:void 0,U.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},s),r?U.createElement("title",{id:l},r):null,U.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var TS=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const yS=U.forwardRef((e,t)=>{var{title:r,titleId:a}=e,s=TS(e,["title","titleId"]);let l=st();return l=r?a||"title-"+l:void 0,U.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},s),r?U.createElement("title",{id:l},r):null,U.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var pS=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const gm=U.forwardRef((e,t)=>{var{title:r,titleId:a}=e,s=pS(e,["title","titleId"]);let l=st();return l=r?a||"title-"+l:void 0,U.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},s),r?U.createElement("title",{id:l},r):null,U.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var AS=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const km=U.forwardRef((e,t)=>{var{title:r,titleId:a}=e,s=AS(e,["title","titleId"]);let l=st();return l=r?a||"title-"+l:void 0,U.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},s),r?U.createElement("title",{id:l},r):null,U.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var cS=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const hS=U.forwardRef((e,t)=>{var{title:r,titleId:a}=e,s=cS(e,["title","titleId"]);let l=st();return l=r?a||"title-"+l:void 0,U.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},s),r?U.createElement("title",{id:l},r):null,U.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var RS=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const el=U.forwardRef((e,t)=>{var{title:r,titleId:a}=e,s=RS(e,["title","titleId"]);let l=st();return l=r?a||"title-"+l:void 0,U.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},s),r?U.createElement("title",{id:l},r):null,U.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var _S=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const SS=U.forwardRef((e,t)=>{var{title:r,titleId:a}=e,s=_S(e,["title","titleId"]);let l=st();return l=r?a||"title-"+l:void 0,U.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},s),r?U.createElement("title",{id:l},r):null,U.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Ll(e,t,{checkForDefaultPrevented:r=!0}={}){return function(s){if(e==null||e(s),r===!1||!s.defaultPrevented)return t==null?void 0:t(s)}}function Ro(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function ya(e){return(t,r)=>{const a=r!=null&&r.context?String(r.context):"standalone";let s;if(a==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,g=r!=null&&r.width?String(r.width):d;s=e.formattingValues[g]||e.formattingValues[d]}else{const d=e.defaultWidth,g=r!=null&&r.width?String(r.width):e.defaultWidth;s=e.values[g]||e.values[d]}const l=e.argumentCallback?e.argumentCallback(t):t;return s[l]}}function pa(e){return(t,r={})=>{const a=r.width,s=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],l=t.match(s);if(!l)return null;const d=l[0],g=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],f=Array.isArray(g)?IS(g,T=>T.test(d)):NS(g,T=>T.test(d));let m;m=e.valueCallback?e.valueCallback(f):f,m=r.valueCallback?r.valueCallback(m):m;const v=t.slice(d.length);return{value:m,rest:v}}}function NS(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function IS(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function PS(e){return(t,r={})=>{const a=t.match(e.matchPattern);if(!a)return null;const s=a[0],l=t.match(e.parsePattern);if(!l)return null;let d=e.valueCallback?e.valueCallback(l[0]):l[0];d=r.valueCallback?r.valueCallback(d):d;const g=t.slice(s.length);return{value:d,rest:g}}}const OS={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},LS=(e,t,r)=>{let a;const s=OS[e];return typeof s=="string"?a=s:t===1?a=s.one:a=s.other.replace("{{count}}",String(t)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+a:a+" siden":a},KS={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},DS={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},FS={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},MS={date:Ro({formats:KS,defaultWidth:"full"}),time:Ro({formats:DS,defaultWidth:"full"}),dateTime:Ro({formats:FS,defaultWidth:"full"})},BS={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},GS=(e,t,r,a)=>BS[e],qS={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},wS={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},VS={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},jS={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},US={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},HS=(e,t)=>Number(e)+".",xS={ordinalNumber:HS,era:ya({values:qS,defaultWidth:"wide"}),quarter:ya({values:wS,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ya({values:VS,defaultWidth:"wide"}),day:ya({values:jS,defaultWidth:"wide"}),dayPeriod:ya({values:US,defaultWidth:"wide"})},YS=/^(\d+)\.?/i,CS=/\d+/i,$S={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},JS={any:[/^f/i,/^e/i]},WS={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},zS={any:[/1/i,/2/i,/3/i,/4/i]},XS={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},ZS={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},QS={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},eN={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},nN={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},rN={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},tN={ordinalNumber:PS({matchPattern:YS,parsePattern:CS,valueCallback:e=>parseInt(e,10)}),era:pa({matchPatterns:$S,defaultMatchWidth:"wide",parsePatterns:JS,defaultParseWidth:"any"}),quarter:pa({matchPatterns:WS,defaultMatchWidth:"wide",parsePatterns:zS,defaultParseWidth:"any",valueCallback:e=>e+1}),month:pa({matchPatterns:XS,defaultMatchWidth:"wide",parsePatterns:ZS,defaultParseWidth:"any"}),day:pa({matchPatterns:QS,defaultMatchWidth:"wide",parsePatterns:eN,defaultParseWidth:"any"}),dayPeriod:pa({matchPatterns:nN,defaultMatchWidth:"any",parsePatterns:rN,defaultParseWidth:"any"})},aN={code:"nb",formatDistance:LS,formatLong:MS,formatRelative:GS,localize:xS,match:tN,options:{weekStartsOn:1,firstWeekContainsDate:4}},iN={global:{dateLocale:aN,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},sN=U.createContext({locale:iN}),oN=()=>U.useContext(sN),ek=/(\w+)/g;function lN(e,t){const r=Array.isArray(e)?e:uN(e);for(const a of t){if(!a)continue;let s=a;for(let l=0;l<r.length;l++){const d=s[r[l]];d!==void 0&&(s=d)}if(typeof s=="string")return s}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function uN(e){const t=[];let r=ek.exec(e);for(;r;){const[,a,s]=r;t.push(a||s),r=ek.exec(e)}return t}const dN=/{[^}]*}/g;function Xt(e,...t){const r=oN(),a=r.translations||[],s=[...t,...Array.isArray(a)?a.map(d=>d[e]):[a[e]],r.locale[e]];return(d,g)=>{const f=lN(d,s);return g?f.replace(dN,m=>{const v=m.substring(1,m.length-1);if(g[v]===void 0){const T=JSON.stringify(g);throw new Error(`Error translating key '${d}'. No replacement syntax ({}) found for key '${v}'. The following replacements were passed: '${T}'`)}return g[v]}):f}}var gN=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const kN=U.forwardRef((e,t)=>{var{className:r,size:a="medium",title:s,transparent:l=!1,variant:d="neutral",id:g}=e,f=gN(e,["className","size","title","transparent","variant","id"]);const m=La(),v=Xt("Loader");return B.createElement("svg",Object.assign({"aria-labelledby":g??`loader-${m}`,ref:t,className:_e("navds-loader",r,`navds-loader--${a}`,`navds-loader--${d}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},Lr(f,["children"])),B.createElement("title",{id:g??`loader-${m}`},s||v("title")),B.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),B.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var fN=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const zi=U.forwardRef((e,t)=>{var{as:r="button",variant:a="primary",className:s,children:l,size:d="medium",loading:g=!1,disabled:f,icon:m,iconPosition:v="left",onKeyUp:T}=e,p=fN(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp"]);const O=f||g?Lr(p,["href"]):p,L=c=>{c.key===" "&&!f&&!g&&c.currentTarget.click()};return B.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},O,{ref:t,onKeyUp:Ll(T,L),className:_e(s,"navds-button",`navds-button--${a}`,`navds-button--${d}`,{"navds-button--loading":g,"navds-button--icon-only":!!m&&!l,"navds-button--disabled":f??g}),disabled:f??g?!0:void 0}),m&&v==="left"&&B.createElement("span",{className:"navds-button__icon"},m),g&&B.createElement(kN,{size:d}),l&&B.createElement(Wn,{as:"span",size:d==="medium"?"medium":"small"},l),m&&v==="right"&&B.createElement("span",{className:"navds-button__icon"},m))});var mN=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const vN={error:SS,warning:bS,info:yS,success:vS},EN=U.forwardRef((e,t)=>{var{children:r,className:a,variant:s,size:l="medium",fullWidth:d=!1,contentMaxWidth:g=!0,inline:f=!1,closeButton:m=!1,onClose:v}=e,T=mN(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const p=Xt("Alert"),O=vN[s];return B.createElement("div",Object.assign({},T,{ref:t,className:_e(a,"navds-alert",`navds-alert--${s}`,`navds-alert--${l}`,{"navds-alert--full-width":d,"navds-alert--inline":f,"navds-alert--close-button":m})}),B.createElement(O,{title:p(s),className:"navds-alert__icon"}),B.createElement(um,{as:"div",size:l,className:_e("navds-alert__wrapper",g&&"navds-alert__wrapper--maxwidth")},r),m&&!f&&B.createElement("div",{className:"navds-alert__button-wrapper"},B.createElement(zi,{className:"navds-alert__button",size:"small",variant:"tertiary-neutral",onClick:v,type:"button",icon:B.createElement(el,{title:["error","warning"].includes(s)?p("closeAlert"):p("closeMessage")})})))}),fm=()=>B.createElement(km,{"aria-hidden":!0,className:"navds-form-field__readonly-icon"}),mm=()=>B.createElement(km,{title:Xt("global")("readOnly"),className:"navds-form-field__readonly-icon"}),Vi=U.createContext(null),Xi=(e,t)=>{var r,a,s;const{size:l,error:d,errorId:g}=e,f=U.useContext(Vi),m=La(),v=(r=e.id)!==null&&r!==void 0?r:`${t}-${m}`,T=g??`${t}-error-${m}`,p=`${t}-description-${m}`,O=(f==null?void 0:f.disabled)||e.disabled,L=((f==null?void 0:f.readOnly)||e.readOnly)&&!O||void 0,c=!O&&!L&&!!(d||f!=null&&f.error),N=!O&&!L&&!!d&&typeof d!="boolean",F=Object.assign({},c?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:N,hasError:c,errorId:T,inputDescriptionId:p,size:(a=l??(f==null?void 0:f.size))!==null&&a!==void 0?a:"medium",readOnly:L,inputProps:Object.assign(Object.assign({id:v},F),{"aria-describedby":_e(e["aria-describedby"],{[p]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[T]:N,[(s=f==null?void 0:f.errorId)!==null&&s!==void 0?s:""]:c&&!!(f!=null&&f.error)})||void 0,disabled:O})}};function Tn(e,t,r,a){return a?typeof a=="string"?{[`--__${e}c-${t}-${r}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([s,l])=>[`--__${e}c-${t}-${r}-${s}`,l])):{}}const bN={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},nk=(e,t,r,a,s,l)=>t.split(" ").map((d,g,f)=>{var m;if(e==="margin-inline"&&d==="full")return`calc((100vw - ${100/f.length}%)/-2)`;if(e==="padding-inline"&&d==="full")return`calc((100vw - ${100/f.length}%)/2)`;if(["mi","mb"].includes(e)&&d==="auto")return"auto";let v=`var(--${l}-${r}-${d})`;if(a.includes(d))v=d==="px"?"1px":d;else if(d.startsWith("space"))v=`var(--${l}-${d})`;else{const T=`--${l}-spacing-${d}`;v=`var(${(m=bN[T])!==null&&m!==void 0?m:T})`}return s?d==="0"?"0":`calc(-1 * ${v})`:v}).join(" ");function ar(e,t,r,a,s,l=!1,d=[]){if(!s)return{};if(typeof s=="string")return{[`--__${e}c-${t}-${r}-xs`]:nk(r,s,a,d,l,e)};const g={};return Object.entries(s).forEach(([f,m])=>{g[`--__${e}c-${t}-${r}-${f}`]=nk(r,m,a,d,l,e)}),g}const TN=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],yN=({children:e,className:t,padding:r,paddingInline:a,paddingBlock:s,margin:l,marginInline:d,marginBlock:g,width:f,minWidth:m,maxWidth:v,height:T,minHeight:p,maxHeight:O,position:L,inset:c,top:N,right:F,left:G,bottom:P,overflow:Q,overflowX:A,overflowY:w,flexBasis:K,flexGrow:I,flexShrink:z,gridColumn:Z})=>{const j=Ji(!1)?"ax":"a",ne=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},ar(j,"r","p","spacing",r)),ar(j,"r","pi","spacing",a)),ar(j,"r","pb","spacing",s)),ar(j,"r","m","spacing",l)),ar(j,"r","mi","spacing",d)),ar(j,"r","mb","spacing",g)),Tn(j,"r","w",f)),Tn(j,"r","minw",m)),Tn(j,"r","maxw",v)),Tn(j,"r","h",T)),Tn(j,"r","minh",p)),Tn(j,"r","maxh",O)),Tn(j,"r","position",L)),ar(j,"r","inset","spacing",c)),ar(j,"r","top","spacing",N)),ar(j,"r","right","spacing",F)),ar(j,"r","bottom","spacing",P)),ar(j,"r","left","spacing",G)),Tn(j,"r","overflow",Q)),Tn(j,"r","overflowx",A)),Tn(j,"r","overflowy",w)),Tn(j,"r","flex-basis",K)),Tn(j,"r","flex-grow",I)),Tn(j,"r","flex-shrink",z)),Tn(j,"r","grid-column",Z));return B.createElement($i,{className:_e({className:t,"navds-r-p":r,"navds-r-pi":a,"navds-r-pb":s,"navds-r-m":l,"navds-r-mi":d,"navds-r-mb":g,"navds-r-w":f,"navds-r-minw":m,"navds-r-maxw":v,"navds-r-h":T,"navds-r-minh":p,"navds-r-maxh":O,"navds-r-position":L,"navds-r-inset":c,"navds-r-top":N,"navds-r-right":F,"navds-r-bottom":P,"navds-r-left":G,"navds-r-overflow":Q,"navds-r-overflowx":A,"navds-r-overflowy":w,"navds-r-flex-basis":K,"navds-r-flex-grow":I,"navds-r-flex-shrink":z,"navds-r-grid-column":Z}),style:ne},e)};var pN=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const vm=U.forwardRef((e,t)=>{var{children:r,className:a,as:s="div",align:l,justify:d,wrap:g=!0,gap:f,style:m,direction:v="row",asChild:T}=e,p=pN(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const L=Ji(!1)?"ax":"a",c=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},m),ar(L,"stack","gap","spacing",f)),Tn(L,"stack","direction",v)),Tn(L,"stack","align",l)),Tn(L,"stack","justify",d)),N=T?$i:s;return B.createElement(yN,Object.assign({},p),B.createElement(N,Object.assign({},Lr(p,TN),{ref:t,style:c,className:_e("navds-stack",a,{"navds-vstack":v==="column","navds-hstack":v==="row","navds-stack-gap":f,"navds-stack-align":l,"navds-stack-justify":d,"navds-stack-direction":v,"navds-stack-wrap":g})}),r))});var AN=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const cN=U.forwardRef((e,t)=>{var{as:r="div"}=e,a=AN(e,["as"]);return B.createElement(vm,Object.assign({as:r},a,{ref:t,direction:"row"}))});var hN=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const RN=U.forwardRef((e,t)=>{var{as:r="div"}=e,a=hN(e,["as"]);return B.createElement(vm,Object.assign({as:r},a,{ref:t,direction:"column",wrap:!1}))});var _N=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const SN=U.forwardRef((e,t)=>{var{children:r,className:a,variant:s,size:l="medium",icon:d}=e,g=_N(e,["children","className","variant","size","icon"]);const f=(s==null?void 0:s.endsWith("-filled"))&&"strong",m=(s==null?void 0:s.endsWith("-moderate"))&&"moderate",v=s==null?void 0:s.replace("-filled","").replace("-moderate","");return B.createElement(On,Object.assign({},g,{ref:t,as:"span",size:l==="medium"?"medium":"small",className:_e("navds-tag",a,`navds-tag--${s}`,`navds-tag--${l}`,`navds-tag--${f||m||"outline"}`,`navds-tag--${v}`)}),d&&B.createElement("span",{className:"navds-tag__icon--left"},d),r)}),NN=e=>{const t=Xi(e,"fieldset"),{inputProps:r}=t;return Object.assign(Object.assign({},t),{inputProps:{"aria-invalid":r["aria-invalid"],"aria-describedby":r["aria-describedby"]}})};var IN=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const PN=U.forwardRef((e,t)=>{var r,a,s;const{inputProps:l,errorId:d,showErrorMsg:g,hasError:f,size:m,readOnly:v,inputDescriptionId:T}=NN(e),p=U.useContext(Vi),{children:O,className:L,errorPropagation:c=!0,legend:N,description:F,hideLegend:G,nativeReadOnly:P=!0}=e,Q=IN(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return B.createElement(Vi.Provider,{value:{error:c?(r=e.error)!==null&&r!==void 0?r:p==null?void 0:p.error:void 0,errorId:_e({[d]:g,[(a=p==null?void 0:p.errorId)!==null&&a!==void 0?a:""]:!!(p!=null&&p.error)}),size:m,disabled:(s=e.disabled)!==null&&s!==void 0?s:!1,readOnly:v}},B.createElement("fieldset",Object.assign({},Lr(Q,["errorId","error","size","readOnly"]),Lr(l,["aria-describedby","aria-invalid"]),{ref:t,className:_e(L,"navds-fieldset",`navds-fieldset--${m}`,{"navds-fieldset--error":f,"navds-fieldset--readonly":v})}),B.createElement(Wn,{size:m,as:"legend",className:_e("navds-fieldset__legend",{"navds-sr-only":!!G})},v&&(P?B.createElement(fm,null):B.createElement(mm,null)),N),!!F&&B.createElement(On,{className:_e("navds-fieldset__description",{"navds-sr-only":!!G}),id:T,size:m??"medium",as:"div"},e.description),O,B.createElement("div",{id:d,"aria-relevant":"additions removals","aria-live":"polite",className:"navds-fieldset__error"},g&&B.createElement(Wi,{size:m,showIcon:!0},e.error))))});var ON=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Em=U.createContext(null);U.forwardRef((e,t)=>{var r,a,{value:s,defaultValue:l,onChange:d=()=>{},children:g,className:f}=e,m=ON(e,["value","defaultValue","onChange","children","className"]);const v=U.useContext(Vi),[T,p]=U.useState(l??[]),O=L=>{const c=s??T,N=c.includes(L)?c.filter(F=>F!==L):[...c,L];s===void 0&&p(N),d(N)};return B.createElement(PN,Object.assign({},m,{ref:t,className:_e(f,"navds-checkbox-group",`navds-checkbox-group--${(a=(r=m.size)!==null&&r!==void 0?r:v==null?void 0:v.size)!==null&&a!==void 0?a:"medium"}`),nativeReadOnly:!1}),B.createElement(Em.Provider,{value:{value:s,defaultValue:l,toggleValue:O}},B.createElement("div",{className:"navds-checkboxes"},g)))});var LN=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const KN=e=>{const t=U.useContext(Em),r=Xi(Lr(e,["description","children"]),"checkbox"),{inputProps:a,readOnly:s}=r,l=LN(r,["inputProps","readOnly"]);return t&&(e.checked&&console.warn("`checked` is unsupported on <Checkbox> elements within a <CheckboxGroup>. Please set a `value` or `defaultValue` on <CheckboxGroup> instead."),e.value===void 0&&console.warn("A <Checkbox> element within a <CheckboxGroup> requires a `value` property.")),Object.assign(Object.assign({},l),{readOnly:s,nested:!!t,inputProps:Object.assign(Object.assign({},a),{checked:t!=null&&t.value?t.value.includes(e.value):e.checked,defaultChecked:t!=null&&t.defaultValue?t.defaultValue.includes(e.value):e.defaultChecked,onChange:d=>{var g;s||((g=e.onChange)===null||g===void 0||g.call(e,d),t==null||t.toggleValue(e.value))},onClick:d=>{var g;if(s){d.preventDefault();return}(g=e==null?void 0:e.onClick)===null||g===void 0||g.call(e,d)}})})},DN=U.forwardRef((e,t)=>{const{inputProps:r,hasError:a,size:s,readOnly:l,nested:d}=KN(e),g=La(),f=La();return B.createElement("div",{className:_e(e.className,"navds-checkbox",`navds-checkbox--${s}`,{"navds-checkbox--error":a,"navds-checkbox--disabled":r.disabled,"navds-checkbox--readonly":l})},B.createElement("input",Object.assign({},Lr(e,["children","size","error","description","hideLabel","indeterminate","errorId","readOnly"]),Lr(r,["aria-invalid"]),{type:"checkbox",className:"navds-checkbox__input",ref:m=>{var v;m&&(m.indeterminate=(v=e.indeterminate)!==null&&v!==void 0?v:!1),typeof t=="function"?t(m):t!=null&&(t.current=m)},"aria-labelledby":_e(g,!!e["aria-labelledby"]&&e["aria-labelledby"],{[f]:e.description})})),B.createElement("label",{htmlFor:r.id,className:"navds-checkbox__label"},B.createElement("span",{className:"navds-checkbox__icon"},B.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.8125rem",height:"0.625rem",viewBox:"0 0 13 10",fill:"none",focusable:!1,role:"img","aria-hidden":!0},B.createElement("path",{d:"M4.03524 6.41478L10.4752 0.404669C11.0792 -0.160351 12.029 -0.130672 12.5955 0.47478C13.162 1.08027 13.1296 2.03007 12.5245 2.59621L5.02111 9.59934C4.74099 9.85904 4.37559 10 4.00025 10C3.60651 10 3.22717 9.84621 2.93914 9.56111L0.439143 7.06111C-0.146381 6.47558 -0.146381 5.52542 0.439143 4.93989C1.02467 4.35437 1.97483 4.35437 2.56036 4.93989L4.03524 6.41478Z",fill:"currentColor"}))),B.createElement("span",{className:_e("navds-checkbox__content",{"navds-sr-only":e.hideLabel})},B.createElement(On,{as:"span",id:g,size:s,className:"navds-checkbox__label-text","aria-hidden":!0},!d&&l&&B.createElement(mm,null),e.children),e.description&&B.createElement(On,{as:"span",id:f,size:s,className:"navds-form-field__subdescription navds-checkbox__description","aria-hidden":!0},e.description))))}),bm=U.createContext(null);var FN=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Tm=U.forwardRef((e,t)=>{var r,{className:a,children:s,disabled:l,onClick:d}=e,g=FN(e,["className","children","disabled","onClick"]);const f=Xt("Search"),m=U.useContext(bm);if(m===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:v,variant:T,handleClick:p}=m;return B.createElement(zi,Object.assign({type:"submit"},g,{ref:t,size:v,variant:T==="secondary"?"secondary":"primary",className:_e("navds-search__button-search",a),disabled:(r=m==null?void 0:m.disabled)!==null&&r!==void 0?r:l,onClick:Ll(d,p),icon:B.createElement(gm,Object.assign({},s?{"aria-hidden":!0}:{title:f("search")}))}),s)});var MN=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const nl=U.forwardRef((e,t)=>{const{inputProps:r,size:a="medium",inputDescriptionId:s,errorId:l,showErrorMsg:d,hasError:g}=Xi(e,"searchfield"),{className:f,hideLabel:m=!0,label:v,description:T,value:p,clearButtonLabel:O,onClear:L,clearButton:c=!0,children:N,variant:F="primary",defaultValue:G,onChange:P,onSearchClick:Q,htmlSize:A}=e,w=MN(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize"]),K=Ji(!1),I=U.useRef(null),z=lm(I,t),Z=Xt("Search"),[X,j]=U.useState(G??""),ne=Y=>{p===void 0&&j(Y),P==null||P(Y)},C=Y=>{var ue,de;L==null||L(Y),ne(""),(de=(ue=I.current)===null||ue===void 0?void 0:ue.focus)===null||de===void 0||de.call(ue)},J=()=>{Q==null||Q(`${p??X}`)},$=c&&!r.disabled&&(p??X),re=()=>K?B.createElement(zi,{className:"navds-search__button-clear",variant:"tertiary-neutral",size:a==="medium"?"small":"xsmall",icon:B.createElement(el,{"aria-hidden":!0}),title:O||Z("clear"),hidden:!$,onClick:Y=>C({trigger:"Click",event:Y})}):B.createElement("button",{type:"button",onClick:Y=>C({trigger:"Click",event:Y}),className:"navds-search__button-clear",hidden:!$},B.createElement("span",{className:"navds-sr-only"},O||Z("clear")),B.createElement(el,{"aria-hidden":!0}));return B.createElement("div",{onKeyDown:Y=>{var ue;Y.key==="Escape"&&(!((ue=I.current)===null||ue===void 0)&&ue.value&&Y.preventDefault(),C({trigger:"Escape",event:Y}))},className:_e(f,"navds-form-field",`navds-form-field--${a}`,"navds-search",{"navds-search--error":g,"navds-search--disabled":r.disabled,"navds-search--with-size":A})},B.createElement(Wn,{htmlFor:r.id,size:a,className:_e("navds-form-field__label",{"navds-sr-only":m})},v),!!T&&B.createElement(On,{className:_e("navds-form-field__description",{"navds-sr-only":m}),id:s,size:a,as:"div"},T),B.createElement("div",{className:"navds-search__wrapper"},B.createElement("div",{className:"navds-search__wrapper-inner"},F==="simple"&&B.createElement(gm,{"aria-hidden":!0,className:"navds-search__search-icon"}),B.createElement("input",Object.assign({ref:z},Lr(w,["error","errorId","size","readOnly"]),r,{value:p??X,onChange:Y=>ne(Y.target.value),type:"search",className:_e(f,"navds-search__input",`navds-search__input--${F}`,"navds-text-field__input","navds-body-short",`navds-body-short--${a}`)},A?{size:Number(A)}:{})),B.createElement(re,null)),B.createElement(bm.Provider,{value:{size:a,disabled:r.disabled,variant:F,handleClick:J}},N||F!=="simple"&&B.createElement(Tm,null))),B.createElement("div",{className:"navds-form-field__error",id:l,"aria-relevant":"additions removals","aria-live":"polite"},d&&B.createElement(Wi,{size:a,showIcon:!0},e.error)))});nl.Button=Tm;var BN=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const rk=(e,t,r)=>{const{outerHeightStyle:a,overflow:s}=t;return r.current<20&&(a>0&&Math.abs((e.outerHeightStyle||0)-a)>1||e.overflow!==s)?(r.current+=1,t):e},tk=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function Ki(e){return parseInt(e,10)||0}const GN=U.forwardRef((e,t)=>{var r,a,{className:s,onChange:l,maxRows:d,minRows:g=1,autoScrollbar:f,style:m,value:v}=e,T=BN(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:p}=U.useRef(v!=null),O=U.useRef(null),L=lm(O,t),c=U.useRef(null),N=U.useRef(0),[F,G]=U.useState({outerHeightStyle:0}),P=B.useCallback(()=>{const K=O.current,z=tk(K).getComputedStyle(K);if(z.width==="0px")return{outerHeightStyle:0};const Z=c.current;Z.style.width=z.width,Z.value=K.value||T.placeholder||"x",Z.value.slice(-1)===`
`&&(Z.value+=" ");const X=z.boxSizing,j=Ki(z.paddingBottom)+Ki(z.paddingTop),ne=Ki(z.borderBottomWidth)+Ki(z.borderTopWidth),C=Z.scrollHeight-j;Z.value="x";const J=Z.scrollHeight-j;let $=C;g&&($=Math.max(Number(g)*J,$)),d&&($=Math.min(Number(d)*J,$)),$=Math.max($,J);const re=$+(X==="border-box"?j+ne:0),Y=Math.abs($-C)<=1;return{outerHeightStyle:re,overflow:Y}},[d,g,T.placeholder]),Q=()=>{const K=P();ak(K)||G(I=>rk(I,K,N))};Wg(()=>{const K=()=>{const j=P();ak(j)||Jc.flushSync(()=>{G(ne=>rk(ne,j,N))})},I=dm(()=>{var j,ne,C;if(N.current=0,!((j=O.current)===null||j===void 0)&&j.style.height||!((ne=O.current)===null||ne===void 0)&&ne.style.width){((C=O.current)===null||C===void 0?void 0:C.style.overflow)==="hidden"&&G(J=>Object.assign(Object.assign({},J),{overflow:!1}));return}K()},166,!0),z=O.current,Z=tk(z);Z.addEventListener("resize",I);let X;return typeof ResizeObserver<"u"&&(X=new ResizeObserver(I),X.observe(z)),()=>{I.clear(),Z.removeEventListener("resize",I),X&&X.disconnect()}},[P]),Wg(()=>{Q()}),U.useEffect(()=>{N.current=0},[v]);const A=K=>{N.current=0,p||Q(),l&&l(K)},w=Object.assign({"--__ac-textarea-height":F.outerHeightStyle+"px","--__axc-textarea-height":F.outerHeightStyle+"px",overflow:F.overflow&&!f&&!(!((r=O.current)===null||r===void 0)&&r.style.height)&&!(!((a=O.current)===null||a===void 0)&&a.style.width)?"hidden":void 0},m);return B.createElement(B.Fragment,null,B.createElement("textarea",Object.assign({value:v,onChange:A,ref:L,rows:g,style:w},T,{className:s})),B.createElement("textarea",{"aria-hidden":!0,className:s,readOnly:!0,ref:c,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},m)}))});function ak(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const qN=({maxLengthId:e,maxLength:t,currentLength:r,size:a,i18n:s})=>{const l=Xt("Textarea",{charsLeft:s!=null&&s.counterLeft?`{chars} ${s.counterLeft}`:void 0,charsTooMany:s!=null&&s.counterTooMuch?`{chars} ${s.counterTooMuch}`:void 0}),d=t-r,[g,f]=U.useState(d);return U.useEffect(()=>{const m=dm(()=>{f(d)},2e3);return m(),()=>{m.clear()}},[d]),B.createElement(B.Fragment,null,B.createElement("span",{id:e,className:"navds-sr-only"},l("maxLength",{maxLength:t})),d<20&&B.createElement("span",{role:"status",className:"navds-textarea__sr-counter navds-sr-only"},ik(g,l)),B.createElement(On,{className:_e("navds-textarea__counter",{"navds-textarea__counter--error":d<0}),size:a},ik(d,l)))},ik=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var wN=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const VN=U.forwardRef((e,t)=>{var r,a,s;const{inputProps:l,errorId:d,showErrorMsg:g,hasError:f,size:m,inputDescriptionId:v}=Xi(e,"textarea"),{label:T,className:p,description:O,maxLength:L,hideLabel:c=!1,resize:N,UNSAFE_autoScrollbar:F,i18n:G,readOnly:P}=e,Q=wN(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),A=La(),w=L!==void 0&&L>0,[K,I]=U.useState((r=e==null?void 0:e.defaultValue)!==null&&r!==void 0?r:""),z=()=>{let X=Q!=null&&Q.minRows?Q==null?void 0:Q.minRows:3;return m==="small"&&(X=Q!=null&&Q.minRows?Q==null?void 0:Q.minRows:2),X},Z=_e(l["aria-describedby"],{[A??""]:w});return B.createElement("div",{className:_e(p,"navds-form-field",`navds-form-field--${m}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":P,"navds-textarea--readonly":P,"navds-textarea--error":f,"navds-textarea--autoscrollbar":F,[`navds-textarea--resize-${N===!0?"both":N}`]:N})},B.createElement(Wn,{htmlFor:l.id,size:m,className:_e("navds-form-field__label",{"navds-sr-only":c})},P&&B.createElement(fm,null),T),!!O&&B.createElement(On,{className:_e("navds-form-field__description",{"navds-sr-only":c}),id:v,size:m,as:"div"},O),B.createElement(GN,Object.assign({},Lr(Q,["error","errorId","size"]),l,{onChange:Ll(e.onChange,e.value===void 0?X=>I(X.target.value):void 0),minRows:z(),autoScrollbar:F,ref:t,readOnly:P,className:_e("navds-textarea__input","navds-body-short",`navds-body-short--${m??"medium"}`)},Z?{"aria-describedby":Z}:{})),w&&!P&&!l.disabled&&B.createElement(qN,{maxLengthId:A,maxLength:L,currentLength:(s=(a=e.value)===null||a===void 0?void 0:a.length)!==null&&s!==void 0?s:K.length,size:m,i18n:G}),B.createElement("div",{className:"navds-form-field__error",id:d,"aria-relevant":"additions removals","aria-live":"polite"},g&&B.createElement(Wi,{size:m,showIcon:!0},e.error)))});var jN=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const UN=U.forwardRef((e,t)=>{var{children:r,className:a,border:s=!1,as:l="div"}=e,d=jN(e,["children","className","border","as"]);return B.createElement(l,Object.assign({ref:t,className:_e("navds-panel",a,{"navds-panel--border":s})},d),r)});function HN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sk={exports:{}},Aa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ok;function xN(){if(ok)return Aa;ok=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,s,l){var d=null;if(l!==void 0&&(d=""+l),s.key!==void 0&&(d=""+s.key),"key"in s){l={};for(var g in s)g!=="key"&&(l[g]=s[g])}else l=s;return s=l.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:l}}return Aa.Fragment=t,Aa.jsx=r,Aa.jsxs=r,Aa}var lk;function YN(){return lk||(lk=1,sk.exports=xN()),sk.exports}var on=YN();const CN=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:on.jsx(EN,{variant:"warning",size:"small",children:on.jsx(RN,{gap:"2",children:B.Children.map(e,t=>on.jsx(On,{size:"small",children:t},Z_(t)?t.key:t))})}),Zt={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};Kn(Zt);var uk={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var dk;function $N(){return dk||(dk=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var l="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(l=s(l,a.call(this,g)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var g in l)t.call(l,g)&&l[g]&&(d=s(d,this&&this[g]||g));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(uk)),uk.exports}var JN=$N();const or=HN(JN),WN="_borderbox_hicl4_1",zN="_error_hicl4_4",XN="_warning_hicl4_7",ZN={borderbox:WN,error:zN,warning:XN},QN=or.bind(ZN),gk=({error:e=!1,className:t,children:r})=>on.jsx(UN,{border:!0,className:QN("borderbox",{error:e},t),children:r}),eI="_aksjonspunkt_kn1hn_1",nI="_erAksjonspunktApent_kn1hn_4",rI="_erIkkeGodkjentAvBeslutter_kn1hn_8",tI={aksjonspunkt:eI,erAksjonspunktApent:nI,erIkkeGodkjentAvBeslutter:rI};or.bind(tI);Kn(Zt);Kn(Zt);const aI="_flexColumnNew_1vdv1_1",iI={flexColumnNew:aI},sI=or.bind(iI),oI=({children:e,className:t})=>on.jsx("div",{className:sI("flexColumnNew",t),children:e}),lI="_flexRow_1yf0y_1",uI="_spaceBetween_1yf0y_9",dI="_alignItemsToBaseline_1yf0y_12",gI="_alignItemsToFlexEnd_1yf0y_15",kI="_justifyItemsToFlexEnd_1yf0y_18",fI="_wrap_1yf0y_21",mI={flexRow:lI,spaceBetween:uI,alignItemsToBaseline:dI,alignItemsToFlexEnd:gI,justifyItemsToFlexEnd:kI,wrap:fI},vI=or.bind(mI),EI=({children:e,spaceBetween:t=!1,alignItemsToBaseline:r=!1,alignItemsToFlexEnd:a=!1,wrap:s=!1,className:l})=>on.jsx("div",{className:vI("flexRow",{spaceBetween:t},{alignItemsToBaseline:r},{alignItemsToFlexEnd:a},{wrap:s},l),children:e}),bI="_flexContainer_1dk1o_1",TI="_fluid_1dk1o_6",yI="_fullHeight_1dk1o_9",pI="_flexWrap_1dk1o_17",AI={flexContainer:bI,fluid:TI,fullHeight:yI,flexWrap:pI},cI=or.bind(AI),hI=({children:e,wrap:t=!1,fullHeight:r=!1})=>on.jsx("div",{className:cI("flexContainer","fluid",{flexWrap:t,fullHeight:r}),children:e});Kn(Zt);const RI="_columnStyle_1f13u_1",ym={columnStyle:RI},_I=or.bind(ym),Pr=({children:e="",className:t,hidden:r=!1,colspanAll:a=!1})=>r?null:on.jsx("td",{className:_I(ym.columnStyle,t),colSpan:a?100:void 0,children:e}),SI="_row_1lxv9_1",NI="_harHover_1lxv9_4",II="_rowHeader_1lxv9_7",PI="_grayHeader_1lxv9_12",OI="_rowContent_1lxv9_15",LI="_selected_1lxv9_18",KI="_bold_1lxv9_22",DI="_dashedBottomBorder_1lxv9_25",FI="_solidBottomBorder_1lxv9_28",MI="_apLeftBorder_1lxv9_31",BI="_noBottomBorder_1lxv9_34",pm={row:SI,harHover:NI,rowHeader:II,grayHeader:PI,rowContent:OI,selected:LI,bold:KI,dashedBottomBorder:DI,solidBottomBorder:FI,apLeftBorder:MI,noBottomBorder:BI},GI=or.bind(pm),qI=(e,t,r)=>a=>{e&&a.button===0&&e(a,t,r)},Am=e=>e.tagName==="TR"?e:Am(e.parentElement),kk=(e,t)=>{const r=Am(e.target),a=(t?r.nextSibling:r.previousSibling)||r;a&&(a.focus(),e.preventDefault())},wI=(e,t,r,a)=>s=>{s.key==="ArrowDown"?kk(s,!0):s.key==="ArrowUp"?kk(s,!1):t&&s.target.tagName!=="TD"&&(s.key==="Enter"||s.key===" ")?(t(s,r,a),s.preventDefault()):e&&t&&s.target.tagName!=="TD"&&s.key==="Shift"&&(t(s),s.preventDefault())},VI=e=>t=>{e&&t.target.tagName!=="TD"&&t.key==="Shift"&&(e(t),t.preventDefault())},Zi=({id:e,model:t,isHeader:r=!1,hasGrayHeader:a=!1,onMouseDown:s,onKeyDown:l,children:d,noHover:g=!1,isSelected:f=!1,isBold:m=!1,isDashedBottomBorder:v=!1,isSolidBottomBorder:T=!1,isApLeftBorder:p=!1,className:O,useMultiselect:L=!1,hasNoBottomBorder:c=!1})=>on.jsx("tr",{className:GI(O,pm.row,{rowHeader:r,grayHeader:a,rowContent:!r&&!g,selected:f,harHover:!g,bold:m,dashedBottomBorder:v,solidBottomBorder:T,noBottomBorder:c,apLeftBorder:p}),onMouseDown:qI(s,e,t),onKeyDown:wI(L,l,e,t),onKeyUp:L?VI(l):void 0,tabIndex:0,children:d}),jI="_table_2cnpl_1",UI="_rowHover_2cnpl_25",HI={table:jI,rowHover:UI},xI=or.bind(HI),YI="EMPTY",Kl=B.forwardRef(({headerTextCodes:e=[],headerColumnContent:t=[],classNameTable:r="",noHover:a=!1,hasGrayHeader:s=!1,children:l},d)=>on.jsxs("table",{ref:d,className:xI("table",{[r]:r,rowHover:!a}),children:[on.jsx("thead",{children:on.jsxs(Zi,{isHeader:!0,noHover:a,hasGrayHeader:s,children:[e.map(g=>typeof g=="string"&&g.startsWith(YI)?on.jsx(Pr,{children:" "},g):on.jsx(Pr,{children:on.jsx(Ln,{id:g})},g)),t.map(g=>on.jsx(Pr,{children:g},g.key))]})}),on.jsx("tbody",{children:Array.isArray(l)?B.Children.map(l,g=>B.cloneElement(g,{noHover:a})):B.cloneElement(l,{noHover:a})})]}));Kl.displayName="Table";const CI="_hidden_1pb4f_1",$I="_active_1pb4f_8",JI="_activeRow_1pb4f_15 _active_1pb4f_8",WI="_toggleIcon_1pb4f_19",zI="_colTopPadding_1pb4f_22",XI={hidden:CI,active:$I,activeRow:JI,toggleIcon:WI,colTopPadding:zI};or.bind(XI);Kn(Zt);const ZI="_fourPx_qda5k_1",QI="_eightPx_qda5k_4",eP="_sixteenPx_qda5k_7",nP="_twentyPx_qda5k_10",rP="_thirtyTwoPx_qda5k_13",tP="_fourtyPx_qda5k_16",aP={fourPx:ZI,eightPx:QI,sixteenPx:eP,twentyPx:nP,thirtyTwoPx:rP,fourtyPx:tP},iP=or.bind(aP),Nr=({fourPx:e=!1,eightPx:t=!1,sixteenPx:r=!1,twentyPx:a=!1,thirtyTwoPx:s=!1,fourtyPx:l=!1})=>on.jsx("div",{className:iP({fourPx:e,eightPx:t,sixteenPx:r,twentyPx:a,thirtyTwoPx:s,fourtyPx:l})});Kn(Zt);const sP="_divider_1t980_1",oP="_dividerParagraf_1t980_8",lP="_leftPanel_1t980_11",uP="_rightPanel_1t980_14",dP={divider:sP,dividerParagraf:oP,leftPanel:lP,rightPanel:uP};or.bind(dP);const gP="_editedIcon_ulrjl_1",kP={editedIcon:gP},fP=or.bind(kP),mP=({className:e=""})=>on.jsx("span",{"data-testid":"editedIcon",className:fP("editedIcon",e),children:on.jsx(hS,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})}),vP=e=>!!e||e===0,fk=e=>e??0,EP=e=>vP(e.overstyrtPrAar)?fk(e.overstyrtPrAar):fk(e.beregnetPrAar),_o=e=>(e.beregningsgrunnlagPrStatusOgAndel||[]).map(r=>EP(r)).reduce((r,a)=>r+a,0),So=e=>e.flatMap(t=>t.inntekter).map(({inntekt:t})=>t).reduce((t,r)=>t+r,0)*2,mk=(e,t)=>e>t,bP=[te.jsx("div",{},"TomKolNøkkel"),te.jsxs(Wn,{size:"small",children:[" ",te.jsx(Ln,{id:"ResultatGrunnlag.BeregningEtterKap8"})," "]},"Kap8Nøkkel"),te.jsxs(Wn,{size:"small",children:[" ",te.jsx(Ln,{id:"ResultatGrunnlag.BeregningEtterBesteberegning"})," "]},"BBNøkkel")],Dl=({periode:e,besteMåneder:t})=>te.jsxs(te.Fragment,{children:[te.jsx(Kl,{headerColumnContent:bP,noHover:!0,children:te.jsxs(Zi,{children:[te.jsx(Pr,{children:te.jsx(On,{size:"small",children:te.jsx(Ln,{id:"ResultatGrunnlag.BruttoBeregningsgrunnlag"})})}),te.jsx(Pr,{children:te.jsx(On,{size:"small",children:Oa(_o(e))})}),te.jsx(Pr,{children:te.jsx(On,{size:"small",children:Oa(So(t))})})]})}),te.jsx(Nr,{twentyPx:!0}),te.jsxs(On,{size:"small",children:[mk(_o(e),So(t))&&te.jsx(Ln,{id:"ResultatGrunnlag.Kap8GirBesteBeregning"}),!mk(_o(e),So(t))&&te.jsx(Ln,{id:"ResultatGrunnlag.Kap1473GirBesteBeregning"})]}),te.jsx(Nr,{twentyPx:!0})]});Dl.__docgenInfo={description:`BesteberegningResultatGrunnlagPanel

Presentasjonskomponent. Viser sammenligning av kap 8 beregning og §14-7, ledd 3 beregning.`,methods:[],displayName:"BesteberegningResultatGrunnlagPanel",props:{periode:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom?: string;
  beregningsgrunnlagPeriodeTom?: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!1}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!1}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"bortfaltNaturalytelse",value:{name:"number",required:!1}},{key:"tilkommetNaturalytelse",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom?: string;
  beregningsgrunnlagPeriodeTom?: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`},description:""},besteMåneder:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}`,signature:{properties:[{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"opptjeningAktivitetType",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}>`}],raw:"BesteberegningInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>`}],raw:"Månedsgrunnlag[]"},description:""}}};Dl.__docgenInfo={description:`BesteberegningResultatGrunnlagPanel

Presentasjonskomponent. Viser sammenligning av kap 8 beregning og §14-7, ledd 3 beregning.`,methods:[],displayName:"BesteberegningResultatGrunnlagPanel",props:{periode:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom?: string;
  beregningsgrunnlagPeriodeTom?: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!1}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!1}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"bortfaltNaturalytelse",value:{name:"number",required:!1}},{key:"tilkommetNaturalytelse",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom?: string;
  beregningsgrunnlagPeriodeTom?: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`},description:""},besteMåneder:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}`,signature:{properties:[{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"opptjeningAktivitetType",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}>`}],raw:"BesteberegningInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>`}],raw:"Månedsgrunnlag[]"},description:""}}};const TP="_colWidth_bbubl_1",Gi={colWidth:TP,månedRad:"_månedRad_bbubl_6",månedAktivitet:"_månedAktivitet_bbubl_10",månedInntekt:"_månedInntekt_bbubl_14"},yP=e=>{const t=e.year(),r=e.locale($c).format("MMMM");return`${r.charAt(0).toUpperCase()+r.slice(1)} - ${t}`},pP=e=>e?yP(vr(e,$_)):"-",AP=[te.jsxs(Wn,{size:"small",children:[" ",te.jsx(Ln,{id:"BesteberegningProsessPanel.Måned.Inntekt.Aktivitet"})," "]},"AktivitetNøkkel"),te.jsxs(Wn,{size:"small",children:[" ",te.jsx(Ln,{id:"BesteberegningProsessPanel.Måned.Inntekt.Inntekt"})," "]},"InntektNøkkel")],cP=(e,t,r)=>{const a=e.arbeidsgiverId?t[e.arbeidsgiverId]:void 0;return a?a.erPrivatPerson?a.fødselsdato?`${a.navn} (${vr(a.fødselsdato).format(J_)})`:a.navn:`${a.navn} (${a.identifikator})`:r(e.opptjeningAktivitetType,Kf.OPPTJENING_AKTIVITET_TYPE)},hP=(e,t,r)=>e.map(a=>te.jsxs(Zi,{className:Gi.månedRad,children:[te.jsx(Pr,{className:Gi.månedAktivitet,children:te.jsx(On,{size:"small",children:cP(a,t,r)})}),te.jsx(Pr,{className:Gi.månedInntekt,children:te.jsx(On,{size:"small",children:Oa(a.inntekt)})})]},`${a.arbeidsforholdId}-${a.arbeidsgiverId}-${a.inntekt}`)),RP=(e,t)=>e.length===0?te.jsx("div",{}):te.jsxs(Zi,{children:[te.jsx(Pr,{children:te.jsx(Wn,{size:"small",children:te.jsx(Ln,{id:t})})}),te.jsx(Pr,{children:te.jsx(Wn,{size:"small",children:Oa(e.map(({inntekt:r})=>r).reduce((r,a)=>r+a,0))})})]},"sum"),_P=({inntekter:e,arbeidsgiverOpplysninger:t,getKodeverkNavn:r})=>{const a=[];return hP(e,t,r).forEach(s=>a.push(s)),a.push(RP(e,"Inntekttabell.Sum")),te.jsx("div",{children:te.jsx(Kl,{headerColumnContent:AP,noHover:!0,children:a})})},No=(e,t,r)=>te.jsx(hI,{children:te.jsx(EI,{children:e.map(a=>{const s=a.fom;return te.jsxs(oI,{className:Gi.colWidth,children:[te.jsx(On,{size:"small",children:pP(a.fom)}),te.jsx(_P,{inntekter:a.inntekter,arbeidsgiverOpplysninger:t,getKodeverkNavn:r})]},s)})})}),SP=e=>e.flatMap(r=>r.inntekter).map(({inntekt:r})=>r).reduce((r,a)=>r+a,0)/6*12,NP=e=>[...e].sort((t,r)=>vr(t.fom).diff(vr(r.fom))),Fl=({besteMåneder:e,arbeidsgiverOpplysninger:t,getKodeverkNavn:r})=>{const a=U.useMemo(()=>NP(e),[e]);return te.jsxs(te.Fragment,{children:[te.jsxs(Wn,{size:"small",children:[" ",te.jsx(Ln,{id:"Inntekttabell.Tittel"})," "]}),te.jsx(Nr,{twentyPx:!0}),No(a.slice(0,2),t,r),te.jsx(Nr,{twentyPx:!0}),No(a.slice(2,4),t,r),te.jsx(Nr,{twentyPx:!0}),No(a.slice(4,6),t,r),te.jsx(Nr,{twentyPx:!0}),te.jsx(Wn,{size:"small",children:te.jsx(Ln,{id:"Inntekttabell.BeregnetÅrsinntekt",values:{inntekt:Oa(SP(e))}})})]})};Fl.__docgenInfo={description:`BesteManederVisningPanel

Presentasjonskomponent. Viser månedene som brukes i beregning etter §14-7, tredje ledd`,methods:[],displayName:"BesteManederVisningPanel",props:{besteMåneder:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}`,signature:{properties:[{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"opptjeningAktivitetType",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}>`}],raw:"BesteberegningInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>`}],raw:"Månedsgrunnlag[]"},description:""},arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},getKodeverkNavn:{required:!0,tsType:{name:"signature",type:"function",raw:"(kodeverk: string, kodeverkType: KodeverkType) => string",signature:{arguments:[{type:{name:"string"},name:"kodeverk"},{type:{name:"KodeverkType"},name:"kodeverkType"}],return:{name:"string"}}},description:""}}};Fl.__docgenInfo={description:`BesteManederVisningPanel

Presentasjonskomponent. Viser månedene som brukes i beregning etter §14-7, tredje ledd`,methods:[],displayName:"BesteManederVisningPanel",props:{besteMåneder:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}`,signature:{properties:[{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"opptjeningAktivitetType",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}>`}],raw:"BesteberegningInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>`}],raw:"Månedsgrunnlag[]"},description:""},arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},getKodeverkNavn:{required:!0,tsType:{name:"signature",type:"function",raw:"(kodeverk: string, kodeverkType: KodeverkType) => string",signature:{arguments:[{type:{name:"string"},name:"kodeverk"},{type:{name:"KodeverkType"},name:"kodeverkType"}],return:{name:"string"}}},description:""}}};var Ma=e=>e.type==="checkbox",At=e=>e instanceof Date,Pn=e=>e==null;const cm=e=>typeof e=="object";var tn=e=>!Pn(e)&&!Array.isArray(e)&&cm(e)&&!At(e),hm=e=>tn(e)&&e.target?Ma(e.target)?e.target.checked:e.target.value:e,IP=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Rm=(e,t)=>e.has(IP(t)),PP=e=>{const t=e.constructor&&e.constructor.prototype;return tn(t)&&t.hasOwnProperty("isPrototypeOf")},Ml=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function jn(e){let t;const r=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Ml&&(e instanceof Blob||a))&&(r||tn(e)))if(t=r?[]:{},!r&&!PP(e))t=e;else for(const s in e)e.hasOwnProperty(s)&&(t[s]=jn(e[s]));else return e;return t}var Qi=e=>Array.isArray(e)?e.filter(Boolean):[],rn=e=>e===void 0,se=(e,t,r)=>{if(!t||!tn(e))return r;const a=Qi(t.split(/[,[\].]+?/)).reduce((s,l)=>Pn(s)?s:s[l],e);return rn(a)||a===e?rn(e[t])?r:e[t]:a},ir=e=>typeof e=="boolean",Bl=e=>/^\w*$/.test(e),_m=e=>Qi(e.replace(/["|']|\]/g,"").split(/\.|\[/)),Ve=(e,t,r)=>{let a=-1;const s=Bl(t)?[t]:_m(t),l=s.length,d=l-1;for(;++a<l;){const g=s[a];let f=r;if(a!==d){const m=e[g];f=tn(m)||Array.isArray(m)?m:isNaN(+s[a+1])?{}:[]}if(g==="__proto__"||g==="constructor"||g==="prototype")return;e[g]=f,e=e[g]}return e};const ji={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},mr={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Ur={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Sm=B.createContext(null),Ba=()=>B.useContext(Sm),OP=e=>{const{children:t,...r}=e;return B.createElement(Sm.Provider,{value:r},t)};var Nm=(e,t,r,a=!0)=>{const s={defaultValues:t._defaultValues};for(const l in e)Object.defineProperty(s,l,{get:()=>{const d=l;return t._proxyFormState[d]!==mr.all&&(t._proxyFormState[d]=!a||mr.all),r&&(r[d]=!0),e[d]}});return s},Un=e=>tn(e)&&!Object.keys(e).length,Im=(e,t,r,a)=>{r(e);const{name:s,...l}=e;return Un(l)||Object.keys(l).length>=Object.keys(t).length||Object.keys(l).find(d=>t[d]===(!a||mr.all))},Ia=e=>Array.isArray(e)?e:[e],Pm=(e,t,r)=>!e||!t||e===t||Ia(e).some(a=>a&&(r?a===t:a.startsWith(t)||t.startsWith(a)));function Gl(e){const t=B.useRef(e);t.current=e,B.useEffect(()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}function LP(e){const t=Ba(),{control:r=t.control,disabled:a,name:s,exact:l}=e,[d,g]=B.useState(r._formState),f=B.useRef(!0),m=B.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),v=B.useRef(s);return v.current=s,Gl({disabled:a,next:T=>f.current&&Pm(v.current,T.name,l)&&Im(T,m.current,r._updateFormState)&&g({...r._formState,...T}),subject:r._subjects.state}),B.useEffect(()=>(f.current=!0,m.current.isValid&&r._updateValid(!0),()=>{f.current=!1}),[r]),B.useMemo(()=>Nm(d,r,m.current,!1),[d,r])}var Ir=e=>typeof e=="string",Om=(e,t,r,a,s)=>Ir(e)?(a&&t.watch.add(e),se(r,e,s)):Array.isArray(e)?e.map(l=>(a&&t.watch.add(l),se(r,l))):(a&&(t.watchAll=!0),r);function KP(e){const t=Ba(),{control:r=t.control,name:a,defaultValue:s,disabled:l,exact:d}=e,g=B.useRef(a);g.current=a,Gl({disabled:l,subject:r._subjects.values,next:v=>{Pm(g.current,v.name,d)&&m(jn(Om(g.current,r._names,v.values||r._formValues,!1,s)))}});const[f,m]=B.useState(r._getWatch(a,s));return B.useEffect(()=>r._removeUnmounted()),f}function Lm(e){const t=Ba(),{name:r,disabled:a,control:s=t.control,shouldUnregister:l}=e,d=Rm(s._names.array,r),g=KP({control:s,name:r,defaultValue:se(s._formValues,r,se(s._defaultValues,r,e.defaultValue)),exact:!0}),f=LP({control:s,name:r,exact:!0}),m=B.useRef(s.register(r,{...e.rules,value:g,...ir(e.disabled)?{disabled:e.disabled}:{}})),v=B.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!se(f.errors,r)},isDirty:{enumerable:!0,get:()=>!!se(f.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!se(f.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!se(f.validatingFields,r)},error:{enumerable:!0,get:()=>se(f.errors,r)}}),[f,r]),T=B.useMemo(()=>({name:r,value:g,...ir(a)||f.disabled?{disabled:f.disabled||a}:{},onChange:p=>m.current.onChange({target:{value:hm(p),name:r},type:ji.CHANGE}),onBlur:()=>m.current.onBlur({target:{value:se(s._formValues,r),name:r},type:ji.BLUR}),ref:p=>{const O=se(s._fields,r);O&&p&&(O._f.ref={focus:()=>p.focus(),select:()=>p.select(),setCustomValidity:L=>p.setCustomValidity(L),reportValidity:()=>p.reportValidity()})}}),[r,s._formValues,a,f.disabled,g,s._fields]);return B.useEffect(()=>{const p=s._options.shouldUnregister||l,O=(L,c)=>{const N=se(s._fields,L);N&&N._f&&(N._f.mount=c)};if(O(r,!0),p){const L=jn(se(s._options.defaultValues,r));Ve(s._defaultValues,r,L),rn(se(s._formValues,r))&&Ve(s._formValues,r,L)}return!d&&s.register(r),()=>{(d?p&&!s._state.action:p)?s.unregister(r):O(r,!1)}},[r,s,d,l]),B.useEffect(()=>{s._updateDisabledField({disabled:a,fields:s._fields,name:r})},[a,r,s]),B.useMemo(()=>({field:T,formState:f,fieldState:v}),[T,f,v])}var DP=(e,t,r,a,s)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:s||!0}}:{},vk=e=>({isOnSubmit:!e||e===mr.onSubmit,isOnBlur:e===mr.onBlur,isOnChange:e===mr.onChange,isOnAll:e===mr.all,isOnTouch:e===mr.onTouched}),Ek=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const Pa=(e,t,r,a)=>{for(const s of r||Object.keys(e)){const l=se(e,s);if(l){const{_f:d,...g}=l;if(d){if(d.refs&&d.refs[0]&&t(d.refs[0],s)&&!a)return!0;if(d.ref&&t(d.ref,d.name)&&!a)return!0;if(Pa(g,t))break}else if(tn(g)&&Pa(g,t))break}}};var FP=(e,t,r)=>{const a=Ia(se(e,r));return Ve(a,"root",t[r]),Ve(e,r,a),e},ql=e=>e.type==="file",_r=e=>typeof e=="function",Ui=e=>{if(!Ml)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},qi=e=>Ir(e),wl=e=>e.type==="radio",Hi=e=>e instanceof RegExp;const bk={value:!1,isValid:!1},Tk={value:!0,isValid:!0};var Km=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!rn(e[0].attributes.value)?rn(e[0].value)||e[0].value===""?Tk:{value:e[0].value,isValid:!0}:Tk:bk}return bk};const yk={isValid:!1,value:null};var Dm=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,yk):yk;function pk(e,t,r="validate"){if(qi(e)||Array.isArray(e)&&e.every(qi)||ir(e)&&!e)return{type:r,message:qi(e)?e:"",ref:t}}var Ht=e=>tn(e)&&!Hi(e)?e:{value:e,message:""},Ak=async(e,t,r,a,s,l)=>{const{ref:d,refs:g,required:f,maxLength:m,minLength:v,min:T,max:p,pattern:O,validate:L,name:c,valueAsNumber:N,mount:F}=e._f,G=se(r,c);if(!F||t.has(c))return{};const P=g?g[0]:d,Q=j=>{s&&P.reportValidity&&(P.setCustomValidity(ir(j)?"":j||""),P.reportValidity())},A={},w=wl(d),K=Ma(d),I=w||K,z=(N||ql(d))&&rn(d.value)&&rn(G)||Ui(d)&&d.value===""||G===""||Array.isArray(G)&&!G.length,Z=DP.bind(null,c,a,A),X=(j,ne,C,J=Ur.maxLength,$=Ur.minLength)=>{const re=j?ne:C;A[c]={type:j?J:$,message:re,ref:d,...Z(j?J:$,re)}};if(l?!Array.isArray(G)||!G.length:f&&(!I&&(z||Pn(G))||ir(G)&&!G||K&&!Km(g).isValid||w&&!Dm(g).isValid)){const{value:j,message:ne}=qi(f)?{value:!!f,message:f}:Ht(f);if(j&&(A[c]={type:Ur.required,message:ne,ref:P,...Z(Ur.required,ne)},!a))return Q(ne),A}if(!z&&(!Pn(T)||!Pn(p))){let j,ne;const C=Ht(p),J=Ht(T);if(!Pn(G)&&!isNaN(G)){const $=d.valueAsNumber||G&&+G;Pn(C.value)||(j=$>C.value),Pn(J.value)||(ne=$<J.value)}else{const $=d.valueAsDate||new Date(G),re=de=>new Date(new Date().toDateString()+" "+de),Y=d.type=="time",ue=d.type=="week";Ir(C.value)&&G&&(j=Y?re(G)>re(C.value):ue?G>C.value:$>new Date(C.value)),Ir(J.value)&&G&&(ne=Y?re(G)<re(J.value):ue?G<J.value:$<new Date(J.value))}if((j||ne)&&(X(!!j,C.message,J.message,Ur.max,Ur.min),!a))return Q(A[c].message),A}if((m||v)&&!z&&(Ir(G)||l&&Array.isArray(G))){const j=Ht(m),ne=Ht(v),C=!Pn(j.value)&&G.length>+j.value,J=!Pn(ne.value)&&G.length<+ne.value;if((C||J)&&(X(C,j.message,ne.message),!a))return Q(A[c].message),A}if(O&&!z&&Ir(G)){const{value:j,message:ne}=Ht(O);if(Hi(j)&&!G.match(j)&&(A[c]={type:Ur.pattern,message:ne,ref:d,...Z(Ur.pattern,ne)},!a))return Q(ne),A}if(L){if(_r(L)){const j=await L(G,r),ne=pk(j,P);if(ne&&(A[c]={...ne,...Z(Ur.validate,ne.message)},!a))return Q(ne.message),A}else if(tn(L)){let j={};for(const ne in L){if(!Un(j)&&!a)break;const C=pk(await L[ne](G,r),P,ne);C&&(j={...C,...Z(ne,C.message)},Q(C.message),a&&(A[c]=j))}if(!Un(j)&&(A[c]={ref:P,...j},!a))return A}}return Q(!0),A};function MP(e,t){const r=t.slice(0,-1).length;let a=0;for(;a<r;)e=rn(e)?a++:e[t[a++]];return e}function BP(e){for(const t in e)if(e.hasOwnProperty(t)&&!rn(e[t]))return!1;return!0}function kn(e,t){const r=Array.isArray(t)?t:Bl(t)?[t]:_m(t),a=r.length===1?e:MP(e,r),s=r.length-1,l=r[s];return a&&delete a[l],s!==0&&(tn(a)&&Un(a)||Array.isArray(a)&&BP(a))&&kn(e,r.slice(0,-1)),e}var Io=()=>{let e=[];return{get observers(){return e},next:s=>{for(const l of e)l.next&&l.next(s)},subscribe:s=>(e.push(s),{unsubscribe:()=>{e=e.filter(l=>l!==s)}}),unsubscribe:()=>{e=[]}}},rl=e=>Pn(e)||!cm(e);function et(e,t){if(rl(e)||rl(t))return e===t;if(At(e)&&At(t))return e.getTime()===t.getTime();const r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(const s of r){const l=e[s];if(!a.includes(s))return!1;if(s!=="ref"){const d=t[s];if(At(l)&&At(d)||tn(l)&&tn(d)||Array.isArray(l)&&Array.isArray(d)?!et(l,d):l!==d)return!1}}return!0}var Fm=e=>e.type==="select-multiple",GP=e=>wl(e)||Ma(e),Po=e=>Ui(e)&&e.isConnected,Mm=e=>{for(const t in e)if(_r(e[t]))return!0;return!1};function xi(e,t={}){const r=Array.isArray(e);if(tn(e)||r)for(const a in e)Array.isArray(e[a])||tn(e[a])&&!Mm(e[a])?(t[a]=Array.isArray(e[a])?[]:{},xi(e[a],t[a])):Pn(e[a])||(t[a]=!0);return t}function Bm(e,t,r){const a=Array.isArray(e);if(tn(e)||a)for(const s in e)Array.isArray(e[s])||tn(e[s])&&!Mm(e[s])?rn(t)||rl(r[s])?r[s]=Array.isArray(e[s])?xi(e[s],[]):{...xi(e[s])}:Bm(e[s],Pn(t)?{}:t[s],r[s]):r[s]=!et(e[s],t[s]);return r}var ca=(e,t)=>Bm(e,t,xi(t)),Gm=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:a})=>rn(e)?e:t?e===""?NaN:e&&+e:r&&Ir(e)?new Date(e):a?a(e):e;function Oo(e){const t=e.ref;return ql(t)?t.files:wl(t)?Dm(e.refs).value:Fm(t)?[...t.selectedOptions].map(({value:r})=>r):Ma(t)?Km(e.refs).value:Gm(rn(t.value)?e.ref.value:t.value,e)}var qP=(e,t,r,a)=>{const s={};for(const l of e){const d=se(t,l);d&&Ve(s,l,d._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:a}},ha=e=>rn(e)?e:Hi(e)?e.source:tn(e)?Hi(e.value)?e.value.source:e.value:e;const ck="AsyncFunction";var wP=e=>!!e&&!!e.validate&&!!(_r(e.validate)&&e.validate.constructor.name===ck||tn(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===ck)),VP=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function hk(e,t,r){const a=se(e,r);if(a||Bl(r))return{error:a,name:r};const s=r.split(".");for(;s.length;){const l=s.join("."),d=se(t,l),g=se(e,l);if(d&&!Array.isArray(d)&&r!==l)return{name:r};if(g&&g.type)return{name:l,error:g};s.pop()}return{name:r}}var jP=(e,t,r,a,s)=>s.isOnAll?!1:!r&&s.isOnTouch?!(t||e):(r?a.isOnBlur:s.isOnBlur)?!e:(r?a.isOnChange:s.isOnChange)?e:!0,UP=(e,t)=>!Qi(se(e,t)).length&&kn(e,t);const HP={mode:mr.onSubmit,reValidateMode:mr.onChange,shouldFocusError:!0};function xP(e={}){let t={...HP,...e},r={submitCount:0,isDirty:!1,isLoading:_r(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},a={},s=tn(t.defaultValues)||tn(t.values)?jn(t.defaultValues||t.values)||{}:{},l=t.shouldUnregister?{}:jn(s),d={action:!1,mount:!1,watch:!1},g={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},f,m=0;const v={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},T={values:Io(),array:Io(),state:Io()},p=vk(t.mode),O=vk(t.reValidateMode),L=t.criteriaMode===mr.all,c=h=>D=>{clearTimeout(m),m=setTimeout(h,D)},N=async h=>{if(!t.disabled&&(v.isValid||h)){const D=t.resolver?Un((await I()).errors):await Z(a,!0);D!==r.isValid&&T.state.next({isValid:D})}},F=(h,D)=>{!t.disabled&&(v.isValidating||v.validatingFields)&&((h||Array.from(g.mount)).forEach(q=>{q&&(D?Ve(r.validatingFields,q,D):kn(r.validatingFields,q))}),T.state.next({validatingFields:r.validatingFields,isValidating:!Un(r.validatingFields)}))},G=(h,D=[],q,ae,ie=!0,ee=!0)=>{if(ae&&q&&!t.disabled){if(d.action=!0,ee&&Array.isArray(se(a,h))){const me=q(se(a,h),ae.argA,ae.argB);ie&&Ve(a,h,me)}if(ee&&Array.isArray(se(r.errors,h))){const me=q(se(r.errors,h),ae.argA,ae.argB);ie&&Ve(r.errors,h,me),UP(r.errors,h)}if(v.touchedFields&&ee&&Array.isArray(se(r.touchedFields,h))){const me=q(se(r.touchedFields,h),ae.argA,ae.argB);ie&&Ve(r.touchedFields,h,me)}v.dirtyFields&&(r.dirtyFields=ca(s,l)),T.state.next({name:h,isDirty:j(h,D),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Ve(l,h,D)},P=(h,D)=>{Ve(r.errors,h,D),T.state.next({errors:r.errors})},Q=h=>{r.errors=h,T.state.next({errors:r.errors,isValid:!1})},A=(h,D,q,ae)=>{const ie=se(a,h);if(ie){const ee=se(l,h,rn(q)?se(s,h):q);rn(ee)||ae&&ae.defaultChecked||D?Ve(l,h,D?ee:Oo(ie._f)):J(h,ee),d.mount&&N()}},w=(h,D,q,ae,ie)=>{let ee=!1,me=!1;const Te={name:h};if(!t.disabled){const sn=!!(se(a,h)&&se(a,h)._f&&se(a,h)._f.disabled);if(!q||ae){v.isDirty&&(me=r.isDirty,r.isDirty=Te.isDirty=j(),ee=me!==Te.isDirty);const Ye=sn||et(se(s,h),D);me=!!(!sn&&se(r.dirtyFields,h)),Ye||sn?kn(r.dirtyFields,h):Ve(r.dirtyFields,h,!0),Te.dirtyFields=r.dirtyFields,ee=ee||v.dirtyFields&&me!==!Ye}if(q){const Ye=se(r.touchedFields,h);Ye||(Ve(r.touchedFields,h,q),Te.touchedFields=r.touchedFields,ee=ee||v.touchedFields&&Ye!==q)}ee&&ie&&T.state.next(Te)}return ee?Te:{}},K=(h,D,q,ae)=>{const ie=se(r.errors,h),ee=v.isValid&&ir(D)&&r.isValid!==D;if(t.delayError&&q?(f=c(()=>P(h,q)),f(t.delayError)):(clearTimeout(m),f=null,q?Ve(r.errors,h,q):kn(r.errors,h)),(q?!et(ie,q):ie)||!Un(ae)||ee){const me={...ae,...ee&&ir(D)?{isValid:D}:{},errors:r.errors,name:h};r={...r,...me},T.state.next(me)}},I=async h=>{F(h,!0);const D=await t.resolver(l,t.context,qP(h||g.mount,a,t.criteriaMode,t.shouldUseNativeValidation));return F(h),D},z=async h=>{const{errors:D}=await I(h);if(h)for(const q of h){const ae=se(D,q);ae?Ve(r.errors,q,ae):kn(r.errors,q)}else r.errors=D;return D},Z=async(h,D,q={valid:!0})=>{for(const ae in h){const ie=h[ae];if(ie){const{_f:ee,...me}=ie;if(ee){const Te=g.array.has(ee.name),sn=ie._f&&wP(ie._f);sn&&v.validatingFields&&F([ae],!0);const Ye=await Ak(ie,g.disabled,l,L,t.shouldUseNativeValidation&&!D,Te);if(sn&&v.validatingFields&&F([ae]),Ye[ee.name]&&(q.valid=!1,D))break;!D&&(se(Ye,ee.name)?Te?FP(r.errors,Ye,ee.name):Ve(r.errors,ee.name,Ye[ee.name]):kn(r.errors,ee.name))}!Un(me)&&await Z(me,D,q)}}return q.valid},X=()=>{for(const h of g.unMount){const D=se(a,h);D&&(D._f.refs?D._f.refs.every(q=>!Po(q)):!Po(D._f.ref))&&mn(h)}g.unMount=new Set},j=(h,D)=>!t.disabled&&(h&&D&&Ve(l,h,D),!et(fe(),s)),ne=(h,D,q)=>Om(h,g,{...d.mount?l:rn(D)?s:Ir(h)?{[h]:D}:D},q,D),C=h=>Qi(se(d.mount?l:s,h,t.shouldUnregister?se(s,h,[]):[])),J=(h,D,q={})=>{const ae=se(a,h);let ie=D;if(ae){const ee=ae._f;ee&&(!ee.disabled&&Ve(l,h,Gm(D,ee)),ie=Ui(ee.ref)&&Pn(D)?"":D,Fm(ee.ref)?[...ee.ref.options].forEach(me=>me.selected=ie.includes(me.value)):ee.refs?Ma(ee.ref)?ee.refs.length>1?ee.refs.forEach(me=>(!me.defaultChecked||!me.disabled)&&(me.checked=Array.isArray(ie)?!!ie.find(Te=>Te===me.value):ie===me.value)):ee.refs[0]&&(ee.refs[0].checked=!!ie):ee.refs.forEach(me=>me.checked=me.value===ie):ql(ee.ref)?ee.ref.value="":(ee.ref.value=ie,ee.ref.type||T.values.next({name:h,values:{...l}})))}(q.shouldDirty||q.shouldTouch)&&w(h,ie,q.shouldTouch,q.shouldDirty,!0),q.shouldValidate&&de(h)},$=(h,D,q)=>{for(const ae in D){const ie=D[ae],ee=`${h}.${ae}`,me=se(a,ee);(g.array.has(h)||tn(ie)||me&&!me._f)&&!At(ie)?$(ee,ie,q):J(ee,ie,q)}},re=(h,D,q={})=>{const ae=se(a,h),ie=g.array.has(h),ee=jn(D);Ve(l,h,ee),ie?(T.array.next({name:h,values:{...l}}),(v.isDirty||v.dirtyFields)&&q.shouldDirty&&T.state.next({name:h,dirtyFields:ca(s,l),isDirty:j(h,ee)})):ae&&!ae._f&&!Pn(ee)?$(h,ee,q):J(h,ee,q),Ek(h,g)&&T.state.next({...r}),T.values.next({name:d.mount?h:void 0,values:{...l}})},Y=async h=>{d.mount=!0;const D=h.target;let q=D.name,ae=!0;const ie=se(a,q),ee=()=>D.type?Oo(ie._f):hm(h),me=Te=>{ae=Number.isNaN(Te)||At(Te)&&isNaN(Te.getTime())||et(Te,se(l,q,Te))};if(ie){let Te,sn;const Ye=ee(),hn=h.type===ji.BLUR||h.type===ji.FOCUS_OUT,na=!VP(ie._f)&&!t.resolver&&!se(r.errors,q)&&!ie._f.deps||jP(hn,se(r.touchedFields,q),r.isSubmitted,O,p),lt=Ek(q,g,hn);Ve(l,q,Ye),hn?(ie._f.onBlur&&ie._f.onBlur(h),f&&f(0)):ie._f.onChange&&ie._f.onChange(h);const ut=w(q,Ye,hn,!1),ra=!Un(ut)||lt;if(!hn&&T.values.next({name:q,type:h.type,values:{...l}}),na)return v.isValid&&(t.mode==="onBlur"&&hn?N():hn||N()),ra&&T.state.next({name:q,...lt?{}:ut});if(!hn&&lt&&T.state.next({...r}),t.resolver){const{errors:Nt}=await I([q]);if(me(Ye),ae){const ta=hk(r.errors,a,q),It=hk(Nt,a,ta.name||q);Te=It.error,q=It.name,sn=Un(Nt)}}else F([q],!0),Te=(await Ak(ie,g.disabled,l,L,t.shouldUseNativeValidation))[q],F([q]),me(Ye),ae&&(Te?sn=!1:v.isValid&&(sn=await Z(a,!0)));ae&&(ie._f.deps&&de(ie._f.deps),K(q,sn,Te,ut))}},ue=(h,D)=>{if(se(r.errors,D)&&h.focus)return h.focus(),1},de=async(h,D={})=>{let q,ae;const ie=Ia(h);if(t.resolver){const ee=await z(rn(h)?h:ie);q=Un(ee),ae=h?!ie.some(me=>se(ee,me)):q}else h?(ae=(await Promise.all(ie.map(async ee=>{const me=se(a,ee);return await Z(me&&me._f?{[ee]:me}:me)}))).every(Boolean),!(!ae&&!r.isValid)&&N()):ae=q=await Z(a);return T.state.next({...!Ir(h)||v.isValid&&q!==r.isValid?{}:{name:h},...t.resolver||!h?{isValid:q}:{},errors:r.errors}),D.shouldFocus&&!ae&&Pa(a,ue,h?ie:g.mount),ae},fe=h=>{const D={...d.mount?l:s};return rn(h)?D:Ir(h)?se(D,h):h.map(q=>se(D,q))},De=(h,D)=>({invalid:!!se((D||r).errors,h),isDirty:!!se((D||r).dirtyFields,h),error:se((D||r).errors,h),isValidating:!!se(r.validatingFields,h),isTouched:!!se((D||r).touchedFields,h)}),qe=h=>{h&&Ia(h).forEach(D=>kn(r.errors,D)),T.state.next({errors:h?r.errors:{}})},Je=(h,D,q)=>{const ae=(se(a,h,{_f:{}})._f||{}).ref,ie=se(r.errors,h)||{},{ref:ee,message:me,type:Te,...sn}=ie;Ve(r.errors,h,{...sn,...D,ref:ae}),T.state.next({name:h,errors:r.errors,isValid:!1}),q&&q.shouldFocus&&ae&&ae.focus&&ae.focus()},We=(h,D)=>_r(h)?T.values.subscribe({next:q=>h(ne(void 0,D),q)}):ne(h,D,!0),mn=(h,D={})=>{for(const q of h?Ia(h):g.mount)g.mount.delete(q),g.array.delete(q),D.keepValue||(kn(a,q),kn(l,q)),!D.keepError&&kn(r.errors,q),!D.keepDirty&&kn(r.dirtyFields,q),!D.keepTouched&&kn(r.touchedFields,q),!D.keepIsValidating&&kn(r.validatingFields,q),!t.shouldUnregister&&!D.keepDefaultValue&&kn(s,q);T.values.next({values:{...l}}),T.state.next({...r,...D.keepDirty?{isDirty:j()}:{}}),!D.keepIsValid&&N()},Dn=({disabled:h,name:D,field:q,fields:ae})=>{(ir(h)&&d.mount||h||g.disabled.has(D))&&(h?g.disabled.add(D):g.disabled.delete(D),w(D,Oo(q?q._f:se(ae,D)._f),!1,!1,!0))},vn=(h,D={})=>{let q=se(a,h);const ae=ir(D.disabled)||ir(t.disabled);return Ve(a,h,{...q||{},_f:{...q&&q._f?q._f:{ref:{name:h}},name:h,mount:!0,...D}}),g.mount.add(h),q?Dn({field:q,disabled:ir(D.disabled)?D.disabled:t.disabled,name:h}):A(h,!0,D.value),{...ae?{disabled:D.disabled||t.disabled}:{},...t.progressive?{required:!!D.required,min:ha(D.min),max:ha(D.max),minLength:ha(D.minLength),maxLength:ha(D.maxLength),pattern:ha(D.pattern)}:{},name:h,onChange:Y,onBlur:Y,ref:ie=>{if(ie){vn(h,D),q=se(a,h);const ee=rn(ie.value)&&ie.querySelectorAll&&ie.querySelectorAll("input,select,textarea")[0]||ie,me=GP(ee),Te=q._f.refs||[];if(me?Te.find(sn=>sn===ee):ee===q._f.ref)return;Ve(a,h,{_f:{...q._f,...me?{refs:[...Te.filter(Po),ee,...Array.isArray(se(s,h))?[{}]:[]],ref:{type:ee.type,name:h}}:{ref:ee}}}),A(h,!1,void 0,ee)}else q=se(a,h,{}),q._f&&(q._f.mount=!1),(t.shouldUnregister||D.shouldUnregister)&&!(Rm(g.array,h)&&d.action)&&g.unMount.add(h)}}},ln=()=>t.shouldFocusError&&Pa(a,ue,g.mount),Qe=h=>{ir(h)&&(T.state.next({disabled:h}),Pa(a,(D,q)=>{const ae=se(a,q);ae&&(D.disabled=ae._f.disabled||h,Array.isArray(ae._f.refs)&&ae._f.refs.forEach(ie=>{ie.disabled=ae._f.disabled||h}))},0,!1))},an=(h,D)=>async q=>{let ae;q&&(q.preventDefault&&q.preventDefault(),q.persist&&q.persist());let ie=jn(l);if(g.disabled.size)for(const ee of g.disabled)Ve(ie,ee,void 0);if(T.state.next({isSubmitting:!0}),t.resolver){const{errors:ee,values:me}=await I();r.errors=ee,ie=me}else await Z(a);if(kn(r.errors,"root"),Un(r.errors)){T.state.next({errors:{}});try{await h(ie,q)}catch(ee){ae=ee}}else D&&await D({...r.errors},q),ln(),setTimeout(ln);if(T.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Un(r.errors)&&!ae,submitCount:r.submitCount+1,errors:r.errors}),ae)throw ae},yn=(h,D={})=>{se(a,h)&&(rn(D.defaultValue)?re(h,jn(se(s,h))):(re(h,D.defaultValue),Ve(s,h,jn(D.defaultValue))),D.keepTouched||kn(r.touchedFields,h),D.keepDirty||(kn(r.dirtyFields,h),r.isDirty=D.defaultValue?j(h,jn(se(s,h))):j()),D.keepError||(kn(r.errors,h),v.isValid&&N()),T.state.next({...r}))},Fn=(h,D={})=>{const q=h?jn(h):s,ae=jn(q),ie=Un(h),ee=ie?s:ae;if(D.keepDefaultValues||(s=q),!D.keepValues){if(D.keepDirtyValues){const me=new Set([...g.mount,...Object.keys(ca(s,l))]);for(const Te of Array.from(me))se(r.dirtyFields,Te)?Ve(ee,Te,se(l,Te)):re(Te,se(ee,Te))}else{if(Ml&&rn(h))for(const me of g.mount){const Te=se(a,me);if(Te&&Te._f){const sn=Array.isArray(Te._f.refs)?Te._f.refs[0]:Te._f.ref;if(Ui(sn)){const Ye=sn.closest("form");if(Ye){Ye.reset();break}}}}a={}}l=t.shouldUnregister?D.keepDefaultValues?jn(s):{}:jn(ee),T.array.next({values:{...ee}}),T.values.next({values:{...ee}})}g={mount:D.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},d.mount=!v.isValid||!!D.keepIsValid||!!D.keepDirtyValues,d.watch=!!t.shouldUnregister,T.state.next({submitCount:D.keepSubmitCount?r.submitCount:0,isDirty:ie?!1:D.keepDirty?r.isDirty:!!(D.keepDefaultValues&&!et(h,s)),isSubmitted:D.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:ie?{}:D.keepDirtyValues?D.keepDefaultValues&&l?ca(s,l):r.dirtyFields:D.keepDefaultValues&&h?ca(s,h):D.keepDirty?r.dirtyFields:{},touchedFields:D.keepTouched?r.touchedFields:{},errors:D.keepErrors?r.errors:{},isSubmitSuccessful:D.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},un=(h,D)=>Fn(_r(h)?h(l):h,D);return{control:{register:vn,unregister:mn,getFieldState:De,handleSubmit:an,setError:Je,_executeSchema:I,_getWatch:ne,_getDirty:j,_updateValid:N,_removeUnmounted:X,_updateFieldArray:G,_updateDisabledField:Dn,_getFieldArray:C,_reset:Fn,_resetDefaultValues:()=>_r(t.defaultValues)&&t.defaultValues().then(h=>{un(h,t.resetOptions),T.state.next({isLoading:!1})}),_updateFormState:h=>{r={...r,...h}},_disableForm:Qe,_subjects:T,_proxyFormState:v,_setErrors:Q,get _fields(){return a},get _formValues(){return l},get _state(){return d},set _state(h){d=h},get _defaultValues(){return s},get _names(){return g},set _names(h){g=h},get _formState(){return r},set _formState(h){r=h},get _options(){return t},set _options(h){t={...t,...h}}},trigger:de,register:vn,handleSubmit:an,watch:We,setValue:re,getValues:fe,reset:un,resetField:yn,clearErrors:qe,unregister:mn,setError:Je,setFocus:(h,D={})=>{const q=se(a,h),ae=q&&q._f;if(ae){const ie=ae.refs?ae.refs[0]:ae.ref;ie.focus&&(ie.focus(),D.shouldSelect&&_r(ie.select)&&ie.select())}},getFieldState:De}}function YP(e={}){const t=B.useRef(void 0),r=B.useRef(void 0),[a,s]=B.useState({isDirty:!1,isValidating:!1,isLoading:_r(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:_r(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...xP(e),formState:a});const l=t.current.control;return l._options=e,Gl({subject:l._subjects.state,next:d=>{Im(d,l._proxyFormState,l._updateFormState,!0)&&s({...l._formState})}}),B.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),B.useEffect(()=>{if(l._proxyFormState.isDirty){const d=l._getDirty();d!==a.isDirty&&l._subjects.state.next({isDirty:d})}},[l,a.isDirty]),B.useEffect(()=>{e.values&&!et(e.values,r.current)?(l._reset(e.values,l._options.resetOptions),r.current=e.values,s(d=>({...d}))):l._resetDefaultValues()},[e.values,l]),B.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),B.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),B.useEffect(()=>{e.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[e.shouldUnregister,l]),t.current.formState=Nm(a,l),t.current}function CP(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rk={exports:{}},Ra={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _k;function $P(){if(_k)return Ra;_k=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,s,l){var d=null;if(l!==void 0&&(d=""+l),s.key!==void 0&&(d=""+s.key),"key"in s){l={};for(var g in s)g!=="key"&&(l[g]=s[g])}else l=s;return s=l.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:l}}return Ra.Fragment=t,Ra.jsx=r,Ra.jsxs=r,Ra}var Sk;function JP(){return Sk||(Sk=1,Rk.exports=$P()),Rk.exports}var cn=JP();const qm=e=>e.reduce((t,r,a)=>({...t,[a]:s=>r(s)||!0}),{}),tl=(e,t)=>{const r=t.split(".").reduce((a,s)=>a!==void 0?a[s]:a,e);return r==null?void 0:r.message},WP=({name:e,label:t,validate:r=[],readOnly:a=!1,onChange:s,onClick:l,className:d,disabled:g})=>{const{formState:{errors:f}}=Ba(),{field:m}=Lm({name:e,rules:{validate:U.useMemo(()=>qm(r),[r])}}),v=tl(f,e);return cn.jsxs(cn.Fragment,{children:[cn.jsx(DN,{size:"small",disabled:g||a,checked:m.value===!0,className:d,error:!!v,...m,onChange:T=>{m.onChange(T),s&&s(T.currentTarget.checked)},onClick:()=>{l&&l()},children:t}),v&&cn.jsx(Wi,{children:tl(f,e)})]})};var al={exports:{}},zP=al.exports,Nk;function XP(){return Nk||(Nk=1,function(e,t){(function(r,a){e.exports=a()})(zP,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,l=/\d\d/,d=/\d\d?/,g=/\d*[^-_:/,()\s\d]+/,f={},m=function(N){return(N=+N)+(N>68?1900:2e3)},v=function(N){return function(F){this[N]=+F}},T=[/[+-]\d\d:?(\d\d)?|Z/,function(N){(this.zone||(this.zone={})).offset=function(F){if(!F||F==="Z")return 0;var G=F.match(/([+-]|\d\d)/g),P=60*G[1]+(+G[2]||0);return P===0?0:G[0]==="+"?-P:P}(N)}],p=function(N){var F=f[N];return F&&(F.indexOf?F:F.s.concat(F.f))},O=function(N,F){var G,P=f.meridiem;if(P){for(var Q=1;Q<=24;Q+=1)if(N.indexOf(P(Q,0,F))>-1){G=Q>12;break}}else G=N===(F?"pm":"PM");return G},L={A:[g,function(N){this.afternoon=O(N,!1)}],a:[g,function(N){this.afternoon=O(N,!0)}],Q:[s,function(N){this.month=3*(N-1)+1}],S:[s,function(N){this.milliseconds=100*+N}],SS:[l,function(N){this.milliseconds=10*+N}],SSS:[/\d{3}/,function(N){this.milliseconds=+N}],s:[d,v("seconds")],ss:[d,v("seconds")],m:[d,v("minutes")],mm:[d,v("minutes")],H:[d,v("hours")],h:[d,v("hours")],HH:[d,v("hours")],hh:[d,v("hours")],D:[d,v("day")],DD:[l,v("day")],Do:[g,function(N){var F=f.ordinal,G=N.match(/\d+/);if(this.day=G[0],F)for(var P=1;P<=31;P+=1)F(P).replace(/\[|\]/g,"")===N&&(this.day=P)}],w:[d,v("week")],ww:[l,v("week")],M:[d,v("month")],MM:[l,v("month")],MMM:[g,function(N){var F=p("months"),G=(p("monthsShort")||F.map(function(P){return P.slice(0,3)})).indexOf(N)+1;if(G<1)throw new Error;this.month=G%12||G}],MMMM:[g,function(N){var F=p("months").indexOf(N)+1;if(F<1)throw new Error;this.month=F%12||F}],Y:[/[+-]?\d+/,v("year")],YY:[l,function(N){this.year=m(N)}],YYYY:[/\d{4}/,v("year")],Z:T,ZZ:T};function c(N){var F,G;F=N,G=f&&f.formats;for(var P=(N=F.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Z,X,j){var ne=j&&j.toUpperCase();return X||G[j]||r[j]||G[ne].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(C,J,$){return J||$.slice(1)})})).match(a),Q=P.length,A=0;A<Q;A+=1){var w=P[A],K=L[w],I=K&&K[0],z=K&&K[1];P[A]=z?{regex:I,parser:z}:w.replace(/^\[|\]$/g,"")}return function(Z){for(var X={},j=0,ne=0;j<Q;j+=1){var C=P[j];if(typeof C=="string")ne+=C.length;else{var J=C.regex,$=C.parser,re=Z.slice(ne),Y=J.exec(re)[0];$.call(X,Y),Z=Z.replace(Y,"")}}return function(ue){var de=ue.afternoon;if(de!==void 0){var fe=ue.hours;de?fe<12&&(ue.hours+=12):fe===12&&(ue.hours=0),delete ue.afternoon}}(X),X}}return function(N,F,G){G.p.customParseFormat=!0,N&&N.parseTwoDigitYear&&(m=N.parseTwoDigitYear);var P=F.prototype,Q=P.parse;P.parse=function(A){var w=A.date,K=A.utc,I=A.args;this.$u=K;var z=I[1];if(typeof z=="string"){var Z=I[2]===!0,X=I[3]===!0,j=Z||X,ne=I[2];X&&(ne=I[2]),f=this.$locale(),!Z&&ne&&(f=G.Ls[ne]),this.$d=function(re,Y,ue,de){try{if(["x","X"].indexOf(Y)>-1)return new Date((Y==="X"?1e3:1)*re);var fe=c(Y)(re),De=fe.year,qe=fe.month,Je=fe.day,We=fe.hours,mn=fe.minutes,Dn=fe.seconds,vn=fe.milliseconds,ln=fe.zone,Qe=fe.week,an=new Date,yn=Je||(De||qe?1:an.getDate()),Fn=De||an.getFullYear(),un=0;De&&!qe||(un=qe>0?qe-1:an.getMonth());var ur,St=We||0,Mn=mn||0,h=Dn||0,D=vn||0;return ln?new Date(Date.UTC(Fn,un,yn,St,Mn,h,D+60*ln.offset*1e3)):ue?new Date(Date.UTC(Fn,un,yn,St,Mn,h,D)):(ur=new Date(Fn,un,yn,St,Mn,h,D),Qe&&(ur=de(ur).week(Qe).toDate()),ur)}catch{return new Date("")}}(w,z,K,G),this.init(),ne&&ne!==!0&&(this.$L=this.locale(ne).$L),j&&w!=this.format(z)&&(this.$d=new Date("")),f={}}else if(z instanceof Array)for(var C=z.length,J=1;J<=C;J+=1){I[1]=z[J-1];var $=G.apply(this,I);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}J===C&&(this.$d=new Date(""))}else Q.call(this,A)}}})}(al)),al.exports}var ZP=XP();const QP=CP(ZP),eO="_readOnlyContainer_v0eco_1",nO="_readOnlyContent_v0eco_4",rO="_readOnlyContentCenter_v0eco_7",tO="_textarea_v0eco_11",aO="_space_v0eco_15",Di={readOnlyContainer:eO,readOnlyContent:nO,readOnlyContentCenter:rO,textarea:tO,space:aO},iO=e=>e!=null&&e!=="",sO=({label:e,value:t,isEdited:r=!1,type:a,hideLabel:s,size:l})=>iO(t)?cn.jsxs("div",{className:Di.readOnlyContainer,children:[e&&!s&&cn.jsx(Wn,{size:"small",children:e}),cn.jsx("div",{className:a==="textarea"?Di.textarea:"",children:cn.jsxs(um,{className:Di.readOnlyContent,size:l,children:[t,r&&cn.jsx(mP,{className:Di.space})]})})]}):null;vr.extend(QP);const oO="_textAreaFieldWithBadges_bdz0b_1",lO="_etikettWrapper_bdz0b_4",Ik={textAreaFieldWithBadges:oO,etikettWrapper:lO},uO=({name:e,label:t,readOnly:r,maxLength:a,badges:s,validate:l=[],parse:d=T=>T,className:g,description:f,isEdited:m,...v})=>{const{formState:{errors:T}}=Ba(),{field:p}=Lm({name:e,rules:{validate:U.useMemo(()=>qm(l),[l])}});return r?cn.jsx(sO,{label:t,value:p.value,type:"textarea",isEdited:m,hideLabel:v.hideLabel}):cn.jsxs("div",{className:s?Ik.textAreaFieldWithBadges:null,children:[s&&cn.jsx("div",{className:Ik.etikettWrapper,children:s.map(({type:O,titleText:L})=>cn.jsx(SN,{variant:O,size:"small",children:L},L))}),cn.jsx(VN,{size:"small",label:t,description:f,className:g,autoComplete:"off",...p,onChange:O=>p.onChange(O.currentTarget.value!==""?d(O.currentTarget.value):null),value:p.value?p.value:"",error:tl(T,e),maxLength:a,...v})]})},dO=({formMethods:e,onSubmit:t,children:r,className:a,setDataOnUnmount:s})=>{const{handleSubmit:l,getValues:d}=e;return U.useEffect(()=>()=>{s&&s(d())},[]),cn.jsx(OP,{...e,children:cn.jsx("form",{className:a,onSubmit:t?l(g=>t(g)):void 0,children:r})})};function wm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var il={exports:{}},gO=il.exports,Pk;function kO(){return Pk||(Pk=1,function(e,t){(function(r,a){e.exports=a()})(gO,function(){return function(r,a){a.prototype.isSameOrAfter=function(s,l){return this.isSame(s,l)||this.isAfter(s,l)}}})}(il)),il.exports}var fO=kO();const mO=wm(fO);var sl={exports:{}},vO=sl.exports,Ok;function EO(){return Ok||(Ok=1,function(e,t){(function(r,a){e.exports=a()})(vO,function(){return function(r,a){a.prototype.isSameOrBefore=function(s,l){return this.isSame(s,l)||this.isBefore(s,l)}}})}(sl)),sl.exports}var bO=EO();const TO=wm(bO),yO="Dato må være før eller lik {limit}",pO="Dato må være etter eller lik {limit}",AO="Perioder kan ikke overlappe i tid",cO="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",hO="Dato må være lik {value}",RO="Dato må skrives slik: dd.mm.åååå",_O="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",SO="Tallet kan ikke inneholde mer enn to desimaler",NO="Tallet kan ikke ha desimaler",IO="Feltet kan kun inneholde tall",PO="Ugyldig fødselsnummer",OO="Feltet må være et fødselsnummer (11 siffer)",LO="Ugyldig organisasjonsnummer.",KO="Ugyldig organisasjonsnummer eller fødselsnummer",DO="Startdato må være før eller lik sluttdato",FO="Periode er utenfor opptjeningsperioden",MO="Ugyldig saksnummer eller fødselsnummer",BO="Feltet inneholder ugyldige tegn: {text}",GO="Feltet inneholder en ugyldig verdi: {value}",qO="Feltet kan ikke inneholde mellomrom",wO="Feltet må fylles ut",VO="Du kan skrive maksimalt {length} tegn",jO="Du må skrive minst {length} tegn",UO="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",HO="Feltet må være mindre eller lik {length}",xO="Feltet må være større eller lik {length}",YO="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",CO={DateNotBeforeOrEqual:yO,DateNotAfterOrEqual:pO,DateRangesOverlapping:AO,DateRangesOverlappingPeriodTypes:cO,DatesNotEqual:hO,InvalidDate:RO,InvalidDatesInPeriod:_O,InvalidDecimal:SO,InvalidInteger:NO,InvalidNumber:IO,InvalidFodselsnr:PO,InvalidFodselsnrFormat:OO,InvalidOrgnr:LO,InvalidOrgnrOrFodselsnr:KO,InvalidPeriod:DO,InvalidPeriodRange:FO,InvalidSaksnrOrFodselsnrFormat:MO,InvalidText:BO,InvalidValue:GO,IllegalWhiteSpace:qO,IsRequired:wO,MaxLength:VO,MinLength:jO,MaxLengthOrFodselsnr:UO,MaxValue:HO,MinValue:xO,SammeFodselsnrSomSoker:YO},{formatMessage:es}=Kn(CO),$O=e=>es({id:"InvalidText"},{text:e}),JO=()=>es({id:"IsRequired"}),WO=e=>es({id:"MaxLength"},{length:e}),zO=e=>es({id:"MinLength"},{length:e}),XO=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,ZO=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,Vl=e=>e==null||e.toString().trim().length===0;vr.extend(mO);vr.extend(TO);const QO=e=>Vl(e)?JO():void 0,eL=e=>t=>Vl(t)||t.toString().trim().length>=e?null:zO(e),nL=e=>t=>Vl(t)||t.toString().trim().length<=e?null:WO(e),rL=e=>{if(!XO.test(e)){const t=e.replace(ZO,"");return $O(t.replace(/[\t]/g,"Tabulatortegn"))}return null},tL=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const t=document.createAttribute("tabindex");t.value="-1";const r=e[0];r.setAttributeNode(t),document.activeElement.blur(),r.focus()}},300)},Ga={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"},Lo=Kn(Ga),aL=eL(3),iL=nL(1500),Qt=({isReadOnly:e,isSubmittable:t,hasBegrunnelse:r,label:a,hasReadOnlyLabel:s=!1,hasVurderingText:l=!1,name:d="begrunnelse"})=>{const g=l?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",f=()=>e?s?Lo.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":a??Lo.formatMessage({id:g});return te.jsx(Sl,{value:Lo,children:(t||r)&&te.jsx(uO,{name:d,label:f(),validate:[QO,aL,iL,rL],maxLength:1500,readOnly:e})})},sL=e=>e&&Array.isArray(e)?e.length>0?e[0].begrunnelse:"":e&&!Array.isArray(e)?e.begrunnelse:"";Qt.initialValues=(e,t="begrunnelse")=>({[t]:X_(sL(e))});Qt.transformValues=(e,t="begrunnelse")=>({begrunnelse:e[t]});Qt.__docgenInfo={description:"FaktaBegrunnelseTextField",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}},{name:"begrunnelseFieldName",optional:!0,type:null}],returns:{type:{name:"signature",type:"object",raw:`{
  [key: string]: any;
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  [key: string]: any;
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]},alias:"FormValues"}},{name:"name",optional:!0,type:null}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},hasBegrunnelse:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasReadOnlyLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVurderingText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'begrunnelse'",computed:!1}}}};Qt.__docgenInfo={description:"FaktaBegrunnelseTextField",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}},{name:"begrunnelseFieldName",optional:!0,type:null}],returns:{type:{name:"signature",type:"object",raw:`{
  [key: string]: any;
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  [key: string]: any;
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]},alias:"FormValues"}},{name:"name",optional:!0,type:null}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},hasBegrunnelse:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasReadOnlyLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVurderingText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'begrunnelse'",computed:!1}}}};const oL=Kn(Ga),lL=(e,t,r)=>!r||t?!0:!e,jl=({isReadOnly:e,isSubmittable:t,buttonText:r,onClick:a,isSubmitting:s,isDirty:l})=>te.jsx(Sl,{value:oL,children:!e&&te.jsxs(zi,{size:"small",variant:"primary",loading:s,disabled:lL(l,s,t),onClick:a||tL,type:a?"button":"submit",children:[!!r&&r,!r&&te.jsx(Ln,{id:"SubmitButton.ConfirmInformation"})]})});jl.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};jl.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};Kn(Ga);var Na={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var uL=Na.exports,Lk;function dL(){return Lk||(Lk=1,function(e,t){(function(){var r,a="4.17.21",s=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",d="Expected a function",g="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",m=500,v="__lodash_placeholder__",T=1,p=2,O=4,L=1,c=2,N=1,F=2,G=4,P=8,Q=16,A=32,w=64,K=128,I=256,z=512,Z=30,X="...",j=800,ne=16,C=1,J=2,$=3,re=1/0,Y=9007199254740991,ue=17976931348623157e292,de=NaN,fe=4294967295,De=fe-1,qe=fe>>>1,Je=[["ary",K],["bind",N],["bindKey",F],["curry",P],["curryRight",Q],["flip",z],["partial",A],["partialRight",w],["rearg",I]],We="[object Arguments]",mn="[object Array]",Dn="[object AsyncFunction]",vn="[object Boolean]",ln="[object Date]",Qe="[object DOMException]",an="[object Error]",yn="[object Function]",Fn="[object GeneratorFunction]",un="[object Map]",ur="[object Number]",St="[object Null]",Mn="[object Object]",h="[object Promise]",D="[object Proxy]",q="[object RegExp]",ae="[object Set]",ie="[object String]",ee="[object Symbol]",me="[object Undefined]",Te="[object WeakMap]",sn="[object WeakSet]",Ye="[object ArrayBuffer]",hn="[object DataView]",na="[object Float32Array]",lt="[object Float64Array]",ut="[object Int8Array]",ra="[object Int16Array]",Nt="[object Int32Array]",ta="[object Uint8Array]",It="[object Uint8ClampedArray]",as="[object Uint16Array]",is="[object Uint32Array]",fv=/\b__p \+= '';/g,mv=/\b(__p \+=) '' \+/g,vv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Zl=/&(?:amp|lt|gt|quot|#39);/g,Ql=/[&<>"']/g,Ev=RegExp(Zl.source),bv=RegExp(Ql.source),Tv=/<%-([\s\S]+?)%>/g,yv=/<%([\s\S]+?)%>/g,eu=/<%=([\s\S]+?)%>/g,pv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Av=/^\w*$/,cv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ss=/[\\^$.*+?()[\]{}|]/g,hv=RegExp(ss.source),os=/^\s+/,Rv=/\s/,_v=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Sv=/\{\n\/\* \[wrapped with (.+)\] \*/,Nv=/,? & /,Iv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Pv=/[()=,{}\[\]\/\s]/,Ov=/\\(\\)?/g,Lv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,nu=/\w*$/,Kv=/^[-+]0x[0-9a-f]+$/i,Dv=/^0b[01]+$/i,Fv=/^\[object .+?Constructor\]$/,Mv=/^0o[0-7]+$/i,Bv=/^(?:0|[1-9]\d*)$/,Gv=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ja=/($^)/,qv=/['\n\r\u2028\u2029\\]/g,Ua="\\ud800-\\udfff",wv="\\u0300-\\u036f",Vv="\\ufe20-\\ufe2f",jv="\\u20d0-\\u20ff",ru=wv+Vv+jv,tu="\\u2700-\\u27bf",au="a-z\\xdf-\\xf6\\xf8-\\xff",Uv="\\xac\\xb1\\xd7\\xf7",Hv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",xv="\\u2000-\\u206f",Yv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",iu="A-Z\\xc0-\\xd6\\xd8-\\xde",su="\\ufe0e\\ufe0f",ou=Uv+Hv+xv+Yv,ls="['’]",Cv="["+Ua+"]",lu="["+ou+"]",Ha="["+ru+"]",uu="\\d+",$v="["+tu+"]",du="["+au+"]",gu="[^"+Ua+ou+uu+tu+au+iu+"]",us="\\ud83c[\\udffb-\\udfff]",Jv="(?:"+Ha+"|"+us+")",ku="[^"+Ua+"]",ds="(?:\\ud83c[\\udde6-\\uddff]){2}",gs="[\\ud800-\\udbff][\\udc00-\\udfff]",Pt="["+iu+"]",fu="\\u200d",mu="(?:"+du+"|"+gu+")",Wv="(?:"+Pt+"|"+gu+")",vu="(?:"+ls+"(?:d|ll|m|re|s|t|ve))?",Eu="(?:"+ls+"(?:D|LL|M|RE|S|T|VE))?",bu=Jv+"?",Tu="["+su+"]?",zv="(?:"+fu+"(?:"+[ku,ds,gs].join("|")+")"+Tu+bu+")*",Xv="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Zv="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",yu=Tu+bu+zv,Qv="(?:"+[$v,ds,gs].join("|")+")"+yu,eE="(?:"+[ku+Ha+"?",Ha,ds,gs,Cv].join("|")+")",nE=RegExp(ls,"g"),rE=RegExp(Ha,"g"),ks=RegExp(us+"(?="+us+")|"+eE+yu,"g"),tE=RegExp([Pt+"?"+du+"+"+vu+"(?="+[lu,Pt,"$"].join("|")+")",Wv+"+"+Eu+"(?="+[lu,Pt+mu,"$"].join("|")+")",Pt+"?"+mu+"+"+vu,Pt+"+"+Eu,Zv,Xv,uu,Qv].join("|"),"g"),aE=RegExp("["+fu+Ua+ru+su+"]"),iE=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,sE=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],oE=-1,Ue={};Ue[na]=Ue[lt]=Ue[ut]=Ue[ra]=Ue[Nt]=Ue[ta]=Ue[It]=Ue[as]=Ue[is]=!0,Ue[We]=Ue[mn]=Ue[Ye]=Ue[vn]=Ue[hn]=Ue[ln]=Ue[an]=Ue[yn]=Ue[un]=Ue[ur]=Ue[Mn]=Ue[q]=Ue[ae]=Ue[ie]=Ue[Te]=!1;var je={};je[We]=je[mn]=je[Ye]=je[hn]=je[vn]=je[ln]=je[na]=je[lt]=je[ut]=je[ra]=je[Nt]=je[un]=je[ur]=je[Mn]=je[q]=je[ae]=je[ie]=je[ee]=je[ta]=je[It]=je[as]=je[is]=!0,je[an]=je[yn]=je[Te]=!1;var lE={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},uE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},dE={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},gE={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},kE=parseFloat,fE=parseInt,pu=typeof Pi=="object"&&Pi&&Pi.Object===Object&&Pi,mE=typeof self=="object"&&self&&self.Object===Object&&self,En=pu||mE||Function("return this")(),fs=t&&!t.nodeType&&t,dt=fs&&!0&&e&&!e.nodeType&&e,Au=dt&&dt.exports===fs,ms=Au&&pu.process,zn=function(){try{var _=dt&&dt.require&&dt.require("util").types;return _||ms&&ms.binding&&ms.binding("util")}catch{}}(),cu=zn&&zn.isArrayBuffer,hu=zn&&zn.isDate,Ru=zn&&zn.isMap,_u=zn&&zn.isRegExp,Su=zn&&zn.isSet,Nu=zn&&zn.isTypedArray;function Hn(_,V,M){switch(M.length){case 0:return _.call(V);case 1:return _.call(V,M[0]);case 2:return _.call(V,M[0],M[1]);case 3:return _.call(V,M[0],M[1],M[2])}return _.apply(V,M)}function vE(_,V,M,le){for(var ye=-1,Ke=_==null?0:_.length;++ye<Ke;){var dn=_[ye];V(le,dn,M(dn),_)}return le}function Xn(_,V){for(var M=-1,le=_==null?0:_.length;++M<le&&V(_[M],M,_)!==!1;);return _}function EE(_,V){for(var M=_==null?0:_.length;M--&&V(_[M],M,_)!==!1;);return _}function Iu(_,V){for(var M=-1,le=_==null?0:_.length;++M<le;)if(!V(_[M],M,_))return!1;return!0}function Yr(_,V){for(var M=-1,le=_==null?0:_.length,ye=0,Ke=[];++M<le;){var dn=_[M];V(dn,M,_)&&(Ke[ye++]=dn)}return Ke}function xa(_,V){var M=_==null?0:_.length;return!!M&&Ot(_,V,0)>-1}function vs(_,V,M){for(var le=-1,ye=_==null?0:_.length;++le<ye;)if(M(V,_[le]))return!0;return!1}function Ce(_,V){for(var M=-1,le=_==null?0:_.length,ye=Array(le);++M<le;)ye[M]=V(_[M],M,_);return ye}function Cr(_,V){for(var M=-1,le=V.length,ye=_.length;++M<le;)_[ye+M]=V[M];return _}function Es(_,V,M,le){var ye=-1,Ke=_==null?0:_.length;for(le&&Ke&&(M=_[++ye]);++ye<Ke;)M=V(M,_[ye],ye,_);return M}function bE(_,V,M,le){var ye=_==null?0:_.length;for(le&&ye&&(M=_[--ye]);ye--;)M=V(M,_[ye],ye,_);return M}function bs(_,V){for(var M=-1,le=_==null?0:_.length;++M<le;)if(V(_[M],M,_))return!0;return!1}var TE=Ts("length");function yE(_){return _.split("")}function pE(_){return _.match(Iv)||[]}function Pu(_,V,M){var le;return M(_,function(ye,Ke,dn){if(V(ye,Ke,dn))return le=Ke,!1}),le}function Ya(_,V,M,le){for(var ye=_.length,Ke=M+(le?1:-1);le?Ke--:++Ke<ye;)if(V(_[Ke],Ke,_))return Ke;return-1}function Ot(_,V,M){return V===V?KE(_,V,M):Ya(_,Ou,M)}function AE(_,V,M,le){for(var ye=M-1,Ke=_.length;++ye<Ke;)if(le(_[ye],V))return ye;return-1}function Ou(_){return _!==_}function Lu(_,V){var M=_==null?0:_.length;return M?ps(_,V)/M:de}function Ts(_){return function(V){return V==null?r:V[_]}}function ys(_){return function(V){return _==null?r:_[V]}}function Ku(_,V,M,le,ye){return ye(_,function(Ke,dn,we){M=le?(le=!1,Ke):V(M,Ke,dn,we)}),M}function cE(_,V){var M=_.length;for(_.sort(V);M--;)_[M]=_[M].value;return _}function ps(_,V){for(var M,le=-1,ye=_.length;++le<ye;){var Ke=V(_[le]);Ke!==r&&(M=M===r?Ke:M+Ke)}return M}function As(_,V){for(var M=-1,le=Array(_);++M<_;)le[M]=V(M);return le}function hE(_,V){return Ce(V,function(M){return[M,_[M]]})}function Du(_){return _&&_.slice(0,Gu(_)+1).replace(os,"")}function xn(_){return function(V){return _(V)}}function cs(_,V){return Ce(V,function(M){return _[M]})}function aa(_,V){return _.has(V)}function Fu(_,V){for(var M=-1,le=_.length;++M<le&&Ot(V,_[M],0)>-1;);return M}function Mu(_,V){for(var M=_.length;M--&&Ot(V,_[M],0)>-1;);return M}function RE(_,V){for(var M=_.length,le=0;M--;)_[M]===V&&++le;return le}var _E=ys(lE),SE=ys(uE);function NE(_){return"\\"+gE[_]}function IE(_,V){return _==null?r:_[V]}function Lt(_){return aE.test(_)}function PE(_){return iE.test(_)}function OE(_){for(var V,M=[];!(V=_.next()).done;)M.push(V.value);return M}function hs(_){var V=-1,M=Array(_.size);return _.forEach(function(le,ye){M[++V]=[ye,le]}),M}function Bu(_,V){return function(M){return _(V(M))}}function $r(_,V){for(var M=-1,le=_.length,ye=0,Ke=[];++M<le;){var dn=_[M];(dn===V||dn===v)&&(_[M]=v,Ke[ye++]=M)}return Ke}function Ca(_){var V=-1,M=Array(_.size);return _.forEach(function(le){M[++V]=le}),M}function LE(_){var V=-1,M=Array(_.size);return _.forEach(function(le){M[++V]=[le,le]}),M}function KE(_,V,M){for(var le=M-1,ye=_.length;++le<ye;)if(_[le]===V)return le;return-1}function DE(_,V,M){for(var le=M+1;le--;)if(_[le]===V)return le;return le}function Kt(_){return Lt(_)?ME(_):TE(_)}function dr(_){return Lt(_)?BE(_):yE(_)}function Gu(_){for(var V=_.length;V--&&Rv.test(_.charAt(V)););return V}var FE=ys(dE);function ME(_){for(var V=ks.lastIndex=0;ks.test(_);)++V;return V}function BE(_){return _.match(ks)||[]}function GE(_){return _.match(tE)||[]}var qE=function _(V){V=V==null?En:Dt.defaults(En.Object(),V,Dt.pick(En,sE));var M=V.Array,le=V.Date,ye=V.Error,Ke=V.Function,dn=V.Math,we=V.Object,Rs=V.RegExp,wE=V.String,Zn=V.TypeError,$a=M.prototype,VE=Ke.prototype,Ft=we.prototype,Ja=V["__core-js_shared__"],Wa=VE.toString,Ge=Ft.hasOwnProperty,jE=0,qu=function(){var n=/[^.]+$/.exec(Ja&&Ja.keys&&Ja.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),za=Ft.toString,UE=Wa.call(we),HE=En._,xE=Rs("^"+Wa.call(Ge).replace(ss,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Xa=Au?V.Buffer:r,Jr=V.Symbol,Za=V.Uint8Array,wu=Xa?Xa.allocUnsafe:r,Qa=Bu(we.getPrototypeOf,we),Vu=we.create,ju=Ft.propertyIsEnumerable,ei=$a.splice,Uu=Jr?Jr.isConcatSpreadable:r,ia=Jr?Jr.iterator:r,gt=Jr?Jr.toStringTag:r,ni=function(){try{var n=Et(we,"defineProperty");return n({},"",{}),n}catch{}}(),YE=V.clearTimeout!==En.clearTimeout&&V.clearTimeout,CE=le&&le.now!==En.Date.now&&le.now,$E=V.setTimeout!==En.setTimeout&&V.setTimeout,ri=dn.ceil,ti=dn.floor,_s=we.getOwnPropertySymbols,JE=Xa?Xa.isBuffer:r,Hu=V.isFinite,WE=$a.join,zE=Bu(we.keys,we),gn=dn.max,pn=dn.min,XE=le.now,ZE=V.parseInt,xu=dn.random,QE=$a.reverse,Ss=Et(V,"DataView"),sa=Et(V,"Map"),Ns=Et(V,"Promise"),Mt=Et(V,"Set"),oa=Et(V,"WeakMap"),la=Et(we,"create"),ai=oa&&new oa,Bt={},eb=bt(Ss),nb=bt(sa),rb=bt(Ns),tb=bt(Mt),ab=bt(oa),ii=Jr?Jr.prototype:r,ua=ii?ii.valueOf:r,Yu=ii?ii.toString:r;function E(n){if(Xe(n)&&!pe(n)&&!(n instanceof Se)){if(n instanceof Qn)return n;if(Ge.call(n,"__wrapped__"))return Cd(n)}return new Qn(n)}var Gt=function(){function n(){}return function(i){if(!ze(i))return{};if(Vu)return Vu(i);n.prototype=i;var o=new n;return n.prototype=r,o}}();function si(){}function Qn(n,i){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=r}E.templateSettings={escape:Tv,evaluate:yv,interpolate:eu,variable:"",imports:{_:E}},E.prototype=si.prototype,E.prototype.constructor=E,Qn.prototype=Gt(si.prototype),Qn.prototype.constructor=Qn;function Se(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=fe,this.__views__=[]}function ib(){var n=new Se(this.__wrapped__);return n.__actions__=Bn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Bn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Bn(this.__views__),n}function sb(){if(this.__filtered__){var n=new Se(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function ob(){var n=this.__wrapped__.value(),i=this.__dir__,o=pe(n),u=i<0,k=o?n.length:0,b=yT(0,k,this.__views__),y=b.start,R=b.end,S=R-y,H=u?R:y-1,x=this.__iteratees__,W=x.length,oe=0,ke=pn(S,this.__takeCount__);if(!o||!u&&k==S&&ke==S)return vd(n,this.__actions__);var Ee=[];e:for(;S--&&oe<ke;){H+=i;for(var ce=-1,be=n[H];++ce<W;){var Re=x[ce],Ne=Re.iteratee,$n=Re.type,Sn=Ne(be);if($n==J)be=Sn;else if(!Sn){if($n==C)continue e;break e}}Ee[oe++]=be}return Ee}Se.prototype=Gt(si.prototype),Se.prototype.constructor=Se;function kt(n){var i=-1,o=n==null?0:n.length;for(this.clear();++i<o;){var u=n[i];this.set(u[0],u[1])}}function lb(){this.__data__=la?la(null):{},this.size=0}function ub(n){var i=this.has(n)&&delete this.__data__[n];return this.size-=i?1:0,i}function db(n){var i=this.__data__;if(la){var o=i[n];return o===f?r:o}return Ge.call(i,n)?i[n]:r}function gb(n){var i=this.__data__;return la?i[n]!==r:Ge.call(i,n)}function kb(n,i){var o=this.__data__;return this.size+=this.has(n)?0:1,o[n]=la&&i===r?f:i,this}kt.prototype.clear=lb,kt.prototype.delete=ub,kt.prototype.get=db,kt.prototype.has=gb,kt.prototype.set=kb;function Dr(n){var i=-1,o=n==null?0:n.length;for(this.clear();++i<o;){var u=n[i];this.set(u[0],u[1])}}function fb(){this.__data__=[],this.size=0}function mb(n){var i=this.__data__,o=oi(i,n);if(o<0)return!1;var u=i.length-1;return o==u?i.pop():ei.call(i,o,1),--this.size,!0}function vb(n){var i=this.__data__,o=oi(i,n);return o<0?r:i[o][1]}function Eb(n){return oi(this.__data__,n)>-1}function bb(n,i){var o=this.__data__,u=oi(o,n);return u<0?(++this.size,o.push([n,i])):o[u][1]=i,this}Dr.prototype.clear=fb,Dr.prototype.delete=mb,Dr.prototype.get=vb,Dr.prototype.has=Eb,Dr.prototype.set=bb;function Fr(n){var i=-1,o=n==null?0:n.length;for(this.clear();++i<o;){var u=n[i];this.set(u[0],u[1])}}function Tb(){this.size=0,this.__data__={hash:new kt,map:new(sa||Dr),string:new kt}}function yb(n){var i=yi(this,n).delete(n);return this.size-=i?1:0,i}function pb(n){return yi(this,n).get(n)}function Ab(n){return yi(this,n).has(n)}function cb(n,i){var o=yi(this,n),u=o.size;return o.set(n,i),this.size+=o.size==u?0:1,this}Fr.prototype.clear=Tb,Fr.prototype.delete=yb,Fr.prototype.get=pb,Fr.prototype.has=Ab,Fr.prototype.set=cb;function ft(n){var i=-1,o=n==null?0:n.length;for(this.__data__=new Fr;++i<o;)this.add(n[i])}function hb(n){return this.__data__.set(n,f),this}function Rb(n){return this.__data__.has(n)}ft.prototype.add=ft.prototype.push=hb,ft.prototype.has=Rb;function gr(n){var i=this.__data__=new Dr(n);this.size=i.size}function _b(){this.__data__=new Dr,this.size=0}function Sb(n){var i=this.__data__,o=i.delete(n);return this.size=i.size,o}function Nb(n){return this.__data__.get(n)}function Ib(n){return this.__data__.has(n)}function Pb(n,i){var o=this.__data__;if(o instanceof Dr){var u=o.__data__;if(!sa||u.length<s-1)return u.push([n,i]),this.size=++o.size,this;o=this.__data__=new Fr(u)}return o.set(n,i),this.size=o.size,this}gr.prototype.clear=_b,gr.prototype.delete=Sb,gr.prototype.get=Nb,gr.prototype.has=Ib,gr.prototype.set=Pb;function Cu(n,i){var o=pe(n),u=!o&&Tt(n),k=!o&&!u&&Qr(n),b=!o&&!u&&!k&&jt(n),y=o||u||k||b,R=y?As(n.length,wE):[],S=R.length;for(var H in n)(i||Ge.call(n,H))&&!(y&&(H=="length"||k&&(H=="offset"||H=="parent")||b&&(H=="buffer"||H=="byteLength"||H=="byteOffset")||qr(H,S)))&&R.push(H);return R}function $u(n){var i=n.length;return i?n[qs(0,i-1)]:r}function Ob(n,i){return pi(Bn(n),mt(i,0,n.length))}function Lb(n){return pi(Bn(n))}function Is(n,i,o){(o!==r&&!kr(n[i],o)||o===r&&!(i in n))&&Mr(n,i,o)}function da(n,i,o){var u=n[i];(!(Ge.call(n,i)&&kr(u,o))||o===r&&!(i in n))&&Mr(n,i,o)}function oi(n,i){for(var o=n.length;o--;)if(kr(n[o][0],i))return o;return-1}function Kb(n,i,o,u){return Wr(n,function(k,b,y){i(u,k,o(k),y)}),u}function Ju(n,i){return n&&Tr(i,fn(i),n)}function Db(n,i){return n&&Tr(i,qn(i),n)}function Mr(n,i,o){i=="__proto__"&&ni?ni(n,i,{configurable:!0,enumerable:!0,value:o,writable:!0}):n[i]=o}function Ps(n,i){for(var o=-1,u=i.length,k=M(u),b=n==null;++o<u;)k[o]=b?r:uo(n,i[o]);return k}function mt(n,i,o){return n===n&&(o!==r&&(n=n<=o?n:o),i!==r&&(n=n>=i?n:i)),n}function er(n,i,o,u,k,b){var y,R=i&T,S=i&p,H=i&O;if(o&&(y=k?o(n,u,k,b):o(n)),y!==r)return y;if(!ze(n))return n;var x=pe(n);if(x){if(y=AT(n),!R)return Bn(n,y)}else{var W=An(n),oe=W==yn||W==Fn;if(Qr(n))return Td(n,R);if(W==Mn||W==We||oe&&!k){if(y=S||oe?{}:Gd(n),!R)return S?dT(n,Db(y,n)):uT(n,Ju(y,n))}else{if(!je[W])return k?n:{};y=cT(n,W,R)}}b||(b=new gr);var ke=b.get(n);if(ke)return ke;b.set(n,y),kg(n)?n.forEach(function(be){y.add(er(be,i,o,be,n,b))}):dg(n)&&n.forEach(function(be,Re){y.set(Re,er(be,i,o,Re,n,b))});var Ee=H?S?Ws:Js:S?qn:fn,ce=x?r:Ee(n);return Xn(ce||n,function(be,Re){ce&&(Re=be,be=n[Re]),da(y,Re,er(be,i,o,Re,n,b))}),y}function Fb(n){var i=fn(n);return function(o){return Wu(o,n,i)}}function Wu(n,i,o){var u=o.length;if(n==null)return!u;for(n=we(n);u--;){var k=o[u],b=i[k],y=n[k];if(y===r&&!(k in n)||!b(y))return!1}return!0}function zu(n,i,o){if(typeof n!="function")throw new Zn(d);return ba(function(){n.apply(r,o)},i)}function ga(n,i,o,u){var k=-1,b=xa,y=!0,R=n.length,S=[],H=i.length;if(!R)return S;o&&(i=Ce(i,xn(o))),u?(b=vs,y=!1):i.length>=s&&(b=aa,y=!1,i=new ft(i));e:for(;++k<R;){var x=n[k],W=o==null?x:o(x);if(x=u||x!==0?x:0,y&&W===W){for(var oe=H;oe--;)if(i[oe]===W)continue e;S.push(x)}else b(i,W,u)||S.push(x)}return S}var Wr=hd(br),Xu=hd(Ls,!0);function Mb(n,i){var o=!0;return Wr(n,function(u,k,b){return o=!!i(u,k,b),o}),o}function li(n,i,o){for(var u=-1,k=n.length;++u<k;){var b=n[u],y=i(b);if(y!=null&&(R===r?y===y&&!Cn(y):o(y,R)))var R=y,S=b}return S}function Bb(n,i,o,u){var k=n.length;for(o=Ae(o),o<0&&(o=-o>k?0:k+o),u=u===r||u>k?k:Ae(u),u<0&&(u+=k),u=o>u?0:mg(u);o<u;)n[o++]=i;return n}function Zu(n,i){var o=[];return Wr(n,function(u,k,b){i(u,k,b)&&o.push(u)}),o}function bn(n,i,o,u,k){var b=-1,y=n.length;for(o||(o=RT),k||(k=[]);++b<y;){var R=n[b];i>0&&o(R)?i>1?bn(R,i-1,o,u,k):Cr(k,R):u||(k[k.length]=R)}return k}var Os=Rd(),Qu=Rd(!0);function br(n,i){return n&&Os(n,i,fn)}function Ls(n,i){return n&&Qu(n,i,fn)}function ui(n,i){return Yr(i,function(o){return wr(n[o])})}function vt(n,i){i=Xr(i,n);for(var o=0,u=i.length;n!=null&&o<u;)n=n[yr(i[o++])];return o&&o==u?n:r}function ed(n,i,o){var u=i(n);return pe(n)?u:Cr(u,o(n))}function Rn(n){return n==null?n===r?me:St:gt&&gt in we(n)?TT(n):LT(n)}function Ks(n,i){return n>i}function Gb(n,i){return n!=null&&Ge.call(n,i)}function qb(n,i){return n!=null&&i in we(n)}function wb(n,i,o){return n>=pn(i,o)&&n<gn(i,o)}function Ds(n,i,o){for(var u=o?vs:xa,k=n[0].length,b=n.length,y=b,R=M(b),S=1/0,H=[];y--;){var x=n[y];y&&i&&(x=Ce(x,xn(i))),S=pn(x.length,S),R[y]=!o&&(i||k>=120&&x.length>=120)?new ft(y&&x):r}x=n[0];var W=-1,oe=R[0];e:for(;++W<k&&H.length<S;){var ke=x[W],Ee=i?i(ke):ke;if(ke=o||ke!==0?ke:0,!(oe?aa(oe,Ee):u(H,Ee,o))){for(y=b;--y;){var ce=R[y];if(!(ce?aa(ce,Ee):u(n[y],Ee,o)))continue e}oe&&oe.push(Ee),H.push(ke)}}return H}function Vb(n,i,o,u){return br(n,function(k,b,y){i(u,o(k),b,y)}),u}function ka(n,i,o){i=Xr(i,n),n=jd(n,i);var u=n==null?n:n[yr(rr(i))];return u==null?r:Hn(u,n,o)}function nd(n){return Xe(n)&&Rn(n)==We}function jb(n){return Xe(n)&&Rn(n)==Ye}function Ub(n){return Xe(n)&&Rn(n)==ln}function fa(n,i,o,u,k){return n===i?!0:n==null||i==null||!Xe(n)&&!Xe(i)?n!==n&&i!==i:Hb(n,i,o,u,fa,k)}function Hb(n,i,o,u,k,b){var y=pe(n),R=pe(i),S=y?mn:An(n),H=R?mn:An(i);S=S==We?Mn:S,H=H==We?Mn:H;var x=S==Mn,W=H==Mn,oe=S==H;if(oe&&Qr(n)){if(!Qr(i))return!1;y=!0,x=!1}if(oe&&!x)return b||(b=new gr),y||jt(n)?Fd(n,i,o,u,k,b):ET(n,i,S,o,u,k,b);if(!(o&L)){var ke=x&&Ge.call(n,"__wrapped__"),Ee=W&&Ge.call(i,"__wrapped__");if(ke||Ee){var ce=ke?n.value():n,be=Ee?i.value():i;return b||(b=new gr),k(ce,be,o,u,b)}}return oe?(b||(b=new gr),bT(n,i,o,u,k,b)):!1}function xb(n){return Xe(n)&&An(n)==un}function Fs(n,i,o,u){var k=o.length,b=k,y=!u;if(n==null)return!b;for(n=we(n);k--;){var R=o[k];if(y&&R[2]?R[1]!==n[R[0]]:!(R[0]in n))return!1}for(;++k<b;){R=o[k];var S=R[0],H=n[S],x=R[1];if(y&&R[2]){if(H===r&&!(S in n))return!1}else{var W=new gr;if(u)var oe=u(H,x,S,n,i,W);if(!(oe===r?fa(x,H,L|c,u,W):oe))return!1}}return!0}function rd(n){if(!ze(n)||ST(n))return!1;var i=wr(n)?xE:Fv;return i.test(bt(n))}function Yb(n){return Xe(n)&&Rn(n)==q}function Cb(n){return Xe(n)&&An(n)==ae}function $b(n){return Xe(n)&&Si(n.length)&&!!Ue[Rn(n)]}function td(n){return typeof n=="function"?n:n==null?wn:typeof n=="object"?pe(n)?sd(n[0],n[1]):id(n):_g(n)}function Ms(n){if(!Ea(n))return zE(n);var i=[];for(var o in we(n))Ge.call(n,o)&&o!="constructor"&&i.push(o);return i}function Jb(n){if(!ze(n))return OT(n);var i=Ea(n),o=[];for(var u in n)u=="constructor"&&(i||!Ge.call(n,u))||o.push(u);return o}function Bs(n,i){return n<i}function ad(n,i){var o=-1,u=Gn(n)?M(n.length):[];return Wr(n,function(k,b,y){u[++o]=i(k,b,y)}),u}function id(n){var i=Xs(n);return i.length==1&&i[0][2]?wd(i[0][0],i[0][1]):function(o){return o===n||Fs(o,n,i)}}function sd(n,i){return Qs(n)&&qd(i)?wd(yr(n),i):function(o){var u=uo(o,n);return u===r&&u===i?go(o,n):fa(i,u,L|c)}}function di(n,i,o,u,k){n!==i&&Os(i,function(b,y){if(k||(k=new gr),ze(b))Wb(n,i,y,o,di,u,k);else{var R=u?u(no(n,y),b,y+"",n,i,k):r;R===r&&(R=b),Is(n,y,R)}},qn)}function Wb(n,i,o,u,k,b,y){var R=no(n,o),S=no(i,o),H=y.get(S);if(H){Is(n,o,H);return}var x=b?b(R,S,o+"",n,i,y):r,W=x===r;if(W){var oe=pe(S),ke=!oe&&Qr(S),Ee=!oe&&!ke&&jt(S);x=S,oe||ke||Ee?pe(R)?x=R:en(R)?x=Bn(R):ke?(W=!1,x=Td(S,!0)):Ee?(W=!1,x=yd(S,!0)):x=[]:Ta(S)||Tt(S)?(x=R,Tt(R)?x=vg(R):(!ze(R)||wr(R))&&(x=Gd(S))):W=!1}W&&(y.set(S,x),k(x,S,u,b,y),y.delete(S)),Is(n,o,x)}function od(n,i){var o=n.length;if(o)return i+=i<0?o:0,qr(i,o)?n[i]:r}function ld(n,i,o){i.length?i=Ce(i,function(b){return pe(b)?function(y){return vt(y,b.length===1?b[0]:b)}:b}):i=[wn];var u=-1;i=Ce(i,xn(ve()));var k=ad(n,function(b,y,R){var S=Ce(i,function(H){return H(b)});return{criteria:S,index:++u,value:b}});return cE(k,function(b,y){return lT(b,y,o)})}function zb(n,i){return ud(n,i,function(o,u){return go(n,u)})}function ud(n,i,o){for(var u=-1,k=i.length,b={};++u<k;){var y=i[u],R=vt(n,y);o(R,y)&&ma(b,Xr(y,n),R)}return b}function Xb(n){return function(i){return vt(i,n)}}function Gs(n,i,o,u){var k=u?AE:Ot,b=-1,y=i.length,R=n;for(n===i&&(i=Bn(i)),o&&(R=Ce(n,xn(o)));++b<y;)for(var S=0,H=i[b],x=o?o(H):H;(S=k(R,x,S,u))>-1;)R!==n&&ei.call(R,S,1),ei.call(n,S,1);return n}function dd(n,i){for(var o=n?i.length:0,u=o-1;o--;){var k=i[o];if(o==u||k!==b){var b=k;qr(k)?ei.call(n,k,1):js(n,k)}}return n}function qs(n,i){return n+ti(xu()*(i-n+1))}function Zb(n,i,o,u){for(var k=-1,b=gn(ri((i-n)/(o||1)),0),y=M(b);b--;)y[u?b:++k]=n,n+=o;return y}function ws(n,i){var o="";if(!n||i<1||i>Y)return o;do i%2&&(o+=n),i=ti(i/2),i&&(n+=n);while(i);return o}function he(n,i){return ro(Vd(n,i,wn),n+"")}function Qb(n){return $u(Ut(n))}function eT(n,i){var o=Ut(n);return pi(o,mt(i,0,o.length))}function ma(n,i,o,u){if(!ze(n))return n;i=Xr(i,n);for(var k=-1,b=i.length,y=b-1,R=n;R!=null&&++k<b;){var S=yr(i[k]),H=o;if(S==="__proto__"||S==="constructor"||S==="prototype")return n;if(k!=y){var x=R[S];H=u?u(x,S,R):r,H===r&&(H=ze(x)?x:qr(i[k+1])?[]:{})}da(R,S,H),R=R[S]}return n}var gd=ai?function(n,i){return ai.set(n,i),n}:wn,nT=ni?function(n,i){return ni(n,"toString",{configurable:!0,enumerable:!1,value:fo(i),writable:!0})}:wn;function rT(n){return pi(Ut(n))}function nr(n,i,o){var u=-1,k=n.length;i<0&&(i=-i>k?0:k+i),o=o>k?k:o,o<0&&(o+=k),k=i>o?0:o-i>>>0,i>>>=0;for(var b=M(k);++u<k;)b[u]=n[u+i];return b}function tT(n,i){var o;return Wr(n,function(u,k,b){return o=i(u,k,b),!o}),!!o}function gi(n,i,o){var u=0,k=n==null?u:n.length;if(typeof i=="number"&&i===i&&k<=qe){for(;u<k;){var b=u+k>>>1,y=n[b];y!==null&&!Cn(y)&&(o?y<=i:y<i)?u=b+1:k=b}return k}return Vs(n,i,wn,o)}function Vs(n,i,o,u){var k=0,b=n==null?0:n.length;if(b===0)return 0;i=o(i);for(var y=i!==i,R=i===null,S=Cn(i),H=i===r;k<b;){var x=ti((k+b)/2),W=o(n[x]),oe=W!==r,ke=W===null,Ee=W===W,ce=Cn(W);if(y)var be=u||Ee;else H?be=Ee&&(u||oe):R?be=Ee&&oe&&(u||!ke):S?be=Ee&&oe&&!ke&&(u||!ce):ke||ce?be=!1:be=u?W<=i:W<i;be?k=x+1:b=x}return pn(b,De)}function kd(n,i){for(var o=-1,u=n.length,k=0,b=[];++o<u;){var y=n[o],R=i?i(y):y;if(!o||!kr(R,S)){var S=R;b[k++]=y===0?0:y}}return b}function fd(n){return typeof n=="number"?n:Cn(n)?de:+n}function Yn(n){if(typeof n=="string")return n;if(pe(n))return Ce(n,Yn)+"";if(Cn(n))return Yu?Yu.call(n):"";var i=n+"";return i=="0"&&1/n==-1/0?"-0":i}function zr(n,i,o){var u=-1,k=xa,b=n.length,y=!0,R=[],S=R;if(o)y=!1,k=vs;else if(b>=s){var H=i?null:mT(n);if(H)return Ca(H);y=!1,k=aa,S=new ft}else S=i?[]:R;e:for(;++u<b;){var x=n[u],W=i?i(x):x;if(x=o||x!==0?x:0,y&&W===W){for(var oe=S.length;oe--;)if(S[oe]===W)continue e;i&&S.push(W),R.push(x)}else k(S,W,o)||(S!==R&&S.push(W),R.push(x))}return R}function js(n,i){return i=Xr(i,n),n=jd(n,i),n==null||delete n[yr(rr(i))]}function md(n,i,o,u){return ma(n,i,o(vt(n,i)),u)}function ki(n,i,o,u){for(var k=n.length,b=u?k:-1;(u?b--:++b<k)&&i(n[b],b,n););return o?nr(n,u?0:b,u?b+1:k):nr(n,u?b+1:0,u?k:b)}function vd(n,i){var o=n;return o instanceof Se&&(o=o.value()),Es(i,function(u,k){return k.func.apply(k.thisArg,Cr([u],k.args))},o)}function Us(n,i,o){var u=n.length;if(u<2)return u?zr(n[0]):[];for(var k=-1,b=M(u);++k<u;)for(var y=n[k],R=-1;++R<u;)R!=k&&(b[k]=ga(b[k]||y,n[R],i,o));return zr(bn(b,1),i,o)}function Ed(n,i,o){for(var u=-1,k=n.length,b=i.length,y={};++u<k;){var R=u<b?i[u]:r;o(y,n[u],R)}return y}function Hs(n){return en(n)?n:[]}function xs(n){return typeof n=="function"?n:wn}function Xr(n,i){return pe(n)?n:Qs(n,i)?[n]:Yd(Fe(n))}var aT=he;function Zr(n,i,o){var u=n.length;return o=o===r?u:o,!i&&o>=u?n:nr(n,i,o)}var bd=YE||function(n){return En.clearTimeout(n)};function Td(n,i){if(i)return n.slice();var o=n.length,u=wu?wu(o):new n.constructor(o);return n.copy(u),u}function Ys(n){var i=new n.constructor(n.byteLength);return new Za(i).set(new Za(n)),i}function iT(n,i){var o=i?Ys(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.byteLength)}function sT(n){var i=new n.constructor(n.source,nu.exec(n));return i.lastIndex=n.lastIndex,i}function oT(n){return ua?we(ua.call(n)):{}}function yd(n,i){var o=i?Ys(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.length)}function pd(n,i){if(n!==i){var o=n!==r,u=n===null,k=n===n,b=Cn(n),y=i!==r,R=i===null,S=i===i,H=Cn(i);if(!R&&!H&&!b&&n>i||b&&y&&S&&!R&&!H||u&&y&&S||!o&&S||!k)return 1;if(!u&&!b&&!H&&n<i||H&&o&&k&&!u&&!b||R&&o&&k||!y&&k||!S)return-1}return 0}function lT(n,i,o){for(var u=-1,k=n.criteria,b=i.criteria,y=k.length,R=o.length;++u<y;){var S=pd(k[u],b[u]);if(S){if(u>=R)return S;var H=o[u];return S*(H=="desc"?-1:1)}}return n.index-i.index}function Ad(n,i,o,u){for(var k=-1,b=n.length,y=o.length,R=-1,S=i.length,H=gn(b-y,0),x=M(S+H),W=!u;++R<S;)x[R]=i[R];for(;++k<y;)(W||k<b)&&(x[o[k]]=n[k]);for(;H--;)x[R++]=n[k++];return x}function cd(n,i,o,u){for(var k=-1,b=n.length,y=-1,R=o.length,S=-1,H=i.length,x=gn(b-R,0),W=M(x+H),oe=!u;++k<x;)W[k]=n[k];for(var ke=k;++S<H;)W[ke+S]=i[S];for(;++y<R;)(oe||k<b)&&(W[ke+o[y]]=n[k++]);return W}function Bn(n,i){var o=-1,u=n.length;for(i||(i=M(u));++o<u;)i[o]=n[o];return i}function Tr(n,i,o,u){var k=!o;o||(o={});for(var b=-1,y=i.length;++b<y;){var R=i[b],S=u?u(o[R],n[R],R,o,n):r;S===r&&(S=n[R]),k?Mr(o,R,S):da(o,R,S)}return o}function uT(n,i){return Tr(n,Zs(n),i)}function dT(n,i){return Tr(n,Md(n),i)}function fi(n,i){return function(o,u){var k=pe(o)?vE:Kb,b=i?i():{};return k(o,n,ve(u,2),b)}}function qt(n){return he(function(i,o){var u=-1,k=o.length,b=k>1?o[k-1]:r,y=k>2?o[2]:r;for(b=n.length>3&&typeof b=="function"?(k--,b):r,y&&_n(o[0],o[1],y)&&(b=k<3?r:b,k=1),i=we(i);++u<k;){var R=o[u];R&&n(i,R,u,b)}return i})}function hd(n,i){return function(o,u){if(o==null)return o;if(!Gn(o))return n(o,u);for(var k=o.length,b=i?k:-1,y=we(o);(i?b--:++b<k)&&u(y[b],b,y)!==!1;);return o}}function Rd(n){return function(i,o,u){for(var k=-1,b=we(i),y=u(i),R=y.length;R--;){var S=y[n?R:++k];if(o(b[S],S,b)===!1)break}return i}}function gT(n,i,o){var u=i&N,k=va(n);function b(){var y=this&&this!==En&&this instanceof b?k:n;return y.apply(u?o:this,arguments)}return b}function _d(n){return function(i){i=Fe(i);var o=Lt(i)?dr(i):r,u=o?o[0]:i.charAt(0),k=o?Zr(o,1).join(""):i.slice(1);return u[n]()+k}}function wt(n){return function(i){return Es(hg(cg(i).replace(nE,"")),n,"")}}function va(n){return function(){var i=arguments;switch(i.length){case 0:return new n;case 1:return new n(i[0]);case 2:return new n(i[0],i[1]);case 3:return new n(i[0],i[1],i[2]);case 4:return new n(i[0],i[1],i[2],i[3]);case 5:return new n(i[0],i[1],i[2],i[3],i[4]);case 6:return new n(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new n(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var o=Gt(n.prototype),u=n.apply(o,i);return ze(u)?u:o}}function kT(n,i,o){var u=va(n);function k(){for(var b=arguments.length,y=M(b),R=b,S=Vt(k);R--;)y[R]=arguments[R];var H=b<3&&y[0]!==S&&y[b-1]!==S?[]:$r(y,S);if(b-=H.length,b<o)return Od(n,i,mi,k.placeholder,r,y,H,r,r,o-b);var x=this&&this!==En&&this instanceof k?u:n;return Hn(x,this,y)}return k}function Sd(n){return function(i,o,u){var k=we(i);if(!Gn(i)){var b=ve(o,3);i=fn(i),o=function(R){return b(k[R],R,k)}}var y=n(i,o,u);return y>-1?k[b?i[y]:y]:r}}function Nd(n){return Gr(function(i){var o=i.length,u=o,k=Qn.prototype.thru;for(n&&i.reverse();u--;){var b=i[u];if(typeof b!="function")throw new Zn(d);if(k&&!y&&Ti(b)=="wrapper")var y=new Qn([],!0)}for(u=y?u:o;++u<o;){b=i[u];var R=Ti(b),S=R=="wrapper"?zs(b):r;S&&eo(S[0])&&S[1]==(K|P|A|I)&&!S[4].length&&S[9]==1?y=y[Ti(S[0])].apply(y,S[3]):y=b.length==1&&eo(b)?y[R]():y.thru(b)}return function(){var H=arguments,x=H[0];if(y&&H.length==1&&pe(x))return y.plant(x).value();for(var W=0,oe=o?i[W].apply(this,H):x;++W<o;)oe=i[W].call(this,oe);return oe}})}function mi(n,i,o,u,k,b,y,R,S,H){var x=i&K,W=i&N,oe=i&F,ke=i&(P|Q),Ee=i&z,ce=oe?r:va(n);function be(){for(var Re=arguments.length,Ne=M(Re),$n=Re;$n--;)Ne[$n]=arguments[$n];if(ke)var Sn=Vt(be),Jn=RE(Ne,Sn);if(u&&(Ne=Ad(Ne,u,k,ke)),b&&(Ne=cd(Ne,b,y,ke)),Re-=Jn,ke&&Re<H){var nn=$r(Ne,Sn);return Od(n,i,mi,be.placeholder,o,Ne,nn,R,S,H-Re)}var fr=W?o:this,jr=oe?fr[n]:n;return Re=Ne.length,R?Ne=KT(Ne,R):Ee&&Re>1&&Ne.reverse(),x&&S<Re&&(Ne.length=S),this&&this!==En&&this instanceof be&&(jr=ce||va(jr)),jr.apply(fr,Ne)}return be}function Id(n,i){return function(o,u){return Vb(o,n,i(u),{})}}function vi(n,i){return function(o,u){var k;if(o===r&&u===r)return i;if(o!==r&&(k=o),u!==r){if(k===r)return u;typeof o=="string"||typeof u=="string"?(o=Yn(o),u=Yn(u)):(o=fd(o),u=fd(u)),k=n(o,u)}return k}}function Cs(n){return Gr(function(i){return i=Ce(i,xn(ve())),he(function(o){var u=this;return n(i,function(k){return Hn(k,u,o)})})})}function Ei(n,i){i=i===r?" ":Yn(i);var o=i.length;if(o<2)return o?ws(i,n):i;var u=ws(i,ri(n/Kt(i)));return Lt(i)?Zr(dr(u),0,n).join(""):u.slice(0,n)}function fT(n,i,o,u){var k=i&N,b=va(n);function y(){for(var R=-1,S=arguments.length,H=-1,x=u.length,W=M(x+S),oe=this&&this!==En&&this instanceof y?b:n;++H<x;)W[H]=u[H];for(;S--;)W[H++]=arguments[++R];return Hn(oe,k?o:this,W)}return y}function Pd(n){return function(i,o,u){return u&&typeof u!="number"&&_n(i,o,u)&&(o=u=r),i=Vr(i),o===r?(o=i,i=0):o=Vr(o),u=u===r?i<o?1:-1:Vr(u),Zb(i,o,u,n)}}function bi(n){return function(i,o){return typeof i=="string"&&typeof o=="string"||(i=tr(i),o=tr(o)),n(i,o)}}function Od(n,i,o,u,k,b,y,R,S,H){var x=i&P,W=x?y:r,oe=x?r:y,ke=x?b:r,Ee=x?r:b;i|=x?A:w,i&=~(x?w:A),i&G||(i&=-4);var ce=[n,i,k,ke,W,Ee,oe,R,S,H],be=o.apply(r,ce);return eo(n)&&Ud(be,ce),be.placeholder=u,Hd(be,n,i)}function $s(n){var i=dn[n];return function(o,u){if(o=tr(o),u=u==null?0:pn(Ae(u),292),u&&Hu(o)){var k=(Fe(o)+"e").split("e"),b=i(k[0]+"e"+(+k[1]+u));return k=(Fe(b)+"e").split("e"),+(k[0]+"e"+(+k[1]-u))}return i(o)}}var mT=Mt&&1/Ca(new Mt([,-0]))[1]==re?function(n){return new Mt(n)}:Eo;function Ld(n){return function(i){var o=An(i);return o==un?hs(i):o==ae?LE(i):hE(i,n(i))}}function Br(n,i,o,u,k,b,y,R){var S=i&F;if(!S&&typeof n!="function")throw new Zn(d);var H=u?u.length:0;if(H||(i&=-97,u=k=r),y=y===r?y:gn(Ae(y),0),R=R===r?R:Ae(R),H-=k?k.length:0,i&w){var x=u,W=k;u=k=r}var oe=S?r:zs(n),ke=[n,i,o,u,k,x,W,b,y,R];if(oe&&PT(ke,oe),n=ke[0],i=ke[1],o=ke[2],u=ke[3],k=ke[4],R=ke[9]=ke[9]===r?S?0:n.length:gn(ke[9]-H,0),!R&&i&(P|Q)&&(i&=-25),!i||i==N)var Ee=gT(n,i,o);else i==P||i==Q?Ee=kT(n,i,R):(i==A||i==(N|A))&&!k.length?Ee=fT(n,i,o,u):Ee=mi.apply(r,ke);var ce=oe?gd:Ud;return Hd(ce(Ee,ke),n,i)}function Kd(n,i,o,u){return n===r||kr(n,Ft[o])&&!Ge.call(u,o)?i:n}function Dd(n,i,o,u,k,b){return ze(n)&&ze(i)&&(b.set(i,n),di(n,i,r,Dd,b),b.delete(i)),n}function vT(n){return Ta(n)?r:n}function Fd(n,i,o,u,k,b){var y=o&L,R=n.length,S=i.length;if(R!=S&&!(y&&S>R))return!1;var H=b.get(n),x=b.get(i);if(H&&x)return H==i&&x==n;var W=-1,oe=!0,ke=o&c?new ft:r;for(b.set(n,i),b.set(i,n);++W<R;){var Ee=n[W],ce=i[W];if(u)var be=y?u(ce,Ee,W,i,n,b):u(Ee,ce,W,n,i,b);if(be!==r){if(be)continue;oe=!1;break}if(ke){if(!bs(i,function(Re,Ne){if(!aa(ke,Ne)&&(Ee===Re||k(Ee,Re,o,u,b)))return ke.push(Ne)})){oe=!1;break}}else if(!(Ee===ce||k(Ee,ce,o,u,b))){oe=!1;break}}return b.delete(n),b.delete(i),oe}function ET(n,i,o,u,k,b,y){switch(o){case hn:if(n.byteLength!=i.byteLength||n.byteOffset!=i.byteOffset)return!1;n=n.buffer,i=i.buffer;case Ye:return!(n.byteLength!=i.byteLength||!b(new Za(n),new Za(i)));case vn:case ln:case ur:return kr(+n,+i);case an:return n.name==i.name&&n.message==i.message;case q:case ie:return n==i+"";case un:var R=hs;case ae:var S=u&L;if(R||(R=Ca),n.size!=i.size&&!S)return!1;var H=y.get(n);if(H)return H==i;u|=c,y.set(n,i);var x=Fd(R(n),R(i),u,k,b,y);return y.delete(n),x;case ee:if(ua)return ua.call(n)==ua.call(i)}return!1}function bT(n,i,o,u,k,b){var y=o&L,R=Js(n),S=R.length,H=Js(i),x=H.length;if(S!=x&&!y)return!1;for(var W=S;W--;){var oe=R[W];if(!(y?oe in i:Ge.call(i,oe)))return!1}var ke=b.get(n),Ee=b.get(i);if(ke&&Ee)return ke==i&&Ee==n;var ce=!0;b.set(n,i),b.set(i,n);for(var be=y;++W<S;){oe=R[W];var Re=n[oe],Ne=i[oe];if(u)var $n=y?u(Ne,Re,oe,i,n,b):u(Re,Ne,oe,n,i,b);if(!($n===r?Re===Ne||k(Re,Ne,o,u,b):$n)){ce=!1;break}be||(be=oe=="constructor")}if(ce&&!be){var Sn=n.constructor,Jn=i.constructor;Sn!=Jn&&"constructor"in n&&"constructor"in i&&!(typeof Sn=="function"&&Sn instanceof Sn&&typeof Jn=="function"&&Jn instanceof Jn)&&(ce=!1)}return b.delete(n),b.delete(i),ce}function Gr(n){return ro(Vd(n,r,Wd),n+"")}function Js(n){return ed(n,fn,Zs)}function Ws(n){return ed(n,qn,Md)}var zs=ai?function(n){return ai.get(n)}:Eo;function Ti(n){for(var i=n.name+"",o=Bt[i],u=Ge.call(Bt,i)?o.length:0;u--;){var k=o[u],b=k.func;if(b==null||b==n)return k.name}return i}function Vt(n){var i=Ge.call(E,"placeholder")?E:n;return i.placeholder}function ve(){var n=E.iteratee||mo;return n=n===mo?td:n,arguments.length?n(arguments[0],arguments[1]):n}function yi(n,i){var o=n.__data__;return _T(i)?o[typeof i=="string"?"string":"hash"]:o.map}function Xs(n){for(var i=fn(n),o=i.length;o--;){var u=i[o],k=n[u];i[o]=[u,k,qd(k)]}return i}function Et(n,i){var o=IE(n,i);return rd(o)?o:r}function TT(n){var i=Ge.call(n,gt),o=n[gt];try{n[gt]=r;var u=!0}catch{}var k=za.call(n);return u&&(i?n[gt]=o:delete n[gt]),k}var Zs=_s?function(n){return n==null?[]:(n=we(n),Yr(_s(n),function(i){return ju.call(n,i)}))}:bo,Md=_s?function(n){for(var i=[];n;)Cr(i,Zs(n)),n=Qa(n);return i}:bo,An=Rn;(Ss&&An(new Ss(new ArrayBuffer(1)))!=hn||sa&&An(new sa)!=un||Ns&&An(Ns.resolve())!=h||Mt&&An(new Mt)!=ae||oa&&An(new oa)!=Te)&&(An=function(n){var i=Rn(n),o=i==Mn?n.constructor:r,u=o?bt(o):"";if(u)switch(u){case eb:return hn;case nb:return un;case rb:return h;case tb:return ae;case ab:return Te}return i});function yT(n,i,o){for(var u=-1,k=o.length;++u<k;){var b=o[u],y=b.size;switch(b.type){case"drop":n+=y;break;case"dropRight":i-=y;break;case"take":i=pn(i,n+y);break;case"takeRight":n=gn(n,i-y);break}}return{start:n,end:i}}function pT(n){var i=n.match(Sv);return i?i[1].split(Nv):[]}function Bd(n,i,o){i=Xr(i,n);for(var u=-1,k=i.length,b=!1;++u<k;){var y=yr(i[u]);if(!(b=n!=null&&o(n,y)))break;n=n[y]}return b||++u!=k?b:(k=n==null?0:n.length,!!k&&Si(k)&&qr(y,k)&&(pe(n)||Tt(n)))}function AT(n){var i=n.length,o=new n.constructor(i);return i&&typeof n[0]=="string"&&Ge.call(n,"index")&&(o.index=n.index,o.input=n.input),o}function Gd(n){return typeof n.constructor=="function"&&!Ea(n)?Gt(Qa(n)):{}}function cT(n,i,o){var u=n.constructor;switch(i){case Ye:return Ys(n);case vn:case ln:return new u(+n);case hn:return iT(n,o);case na:case lt:case ut:case ra:case Nt:case ta:case It:case as:case is:return yd(n,o);case un:return new u;case ur:case ie:return new u(n);case q:return sT(n);case ae:return new u;case ee:return oT(n)}}function hT(n,i){var o=i.length;if(!o)return n;var u=o-1;return i[u]=(o>1?"& ":"")+i[u],i=i.join(o>2?", ":" "),n.replace(_v,`{
/* [wrapped with `+i+`] */
`)}function RT(n){return pe(n)||Tt(n)||!!(Uu&&n&&n[Uu])}function qr(n,i){var o=typeof n;return i=i??Y,!!i&&(o=="number"||o!="symbol"&&Bv.test(n))&&n>-1&&n%1==0&&n<i}function _n(n,i,o){if(!ze(o))return!1;var u=typeof i;return(u=="number"?Gn(o)&&qr(i,o.length):u=="string"&&i in o)?kr(o[i],n):!1}function Qs(n,i){if(pe(n))return!1;var o=typeof n;return o=="number"||o=="symbol"||o=="boolean"||n==null||Cn(n)?!0:Av.test(n)||!pv.test(n)||i!=null&&n in we(i)}function _T(n){var i=typeof n;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?n!=="__proto__":n===null}function eo(n){var i=Ti(n),o=E[i];if(typeof o!="function"||!(i in Se.prototype))return!1;if(n===o)return!0;var u=zs(o);return!!u&&n===u[0]}function ST(n){return!!qu&&qu in n}var NT=Ja?wr:To;function Ea(n){var i=n&&n.constructor,o=typeof i=="function"&&i.prototype||Ft;return n===o}function qd(n){return n===n&&!ze(n)}function wd(n,i){return function(o){return o==null?!1:o[n]===i&&(i!==r||n in we(o))}}function IT(n){var i=Ri(n,function(u){return o.size===m&&o.clear(),u}),o=i.cache;return i}function PT(n,i){var o=n[1],u=i[1],k=o|u,b=k<(N|F|K),y=u==K&&o==P||u==K&&o==I&&n[7].length<=i[8]||u==(K|I)&&i[7].length<=i[8]&&o==P;if(!(b||y))return n;u&N&&(n[2]=i[2],k|=o&N?0:G);var R=i[3];if(R){var S=n[3];n[3]=S?Ad(S,R,i[4]):R,n[4]=S?$r(n[3],v):i[4]}return R=i[5],R&&(S=n[5],n[5]=S?cd(S,R,i[6]):R,n[6]=S?$r(n[5],v):i[6]),R=i[7],R&&(n[7]=R),u&K&&(n[8]=n[8]==null?i[8]:pn(n[8],i[8])),n[9]==null&&(n[9]=i[9]),n[0]=i[0],n[1]=k,n}function OT(n){var i=[];if(n!=null)for(var o in we(n))i.push(o);return i}function LT(n){return za.call(n)}function Vd(n,i,o){return i=gn(i===r?n.length-1:i,0),function(){for(var u=arguments,k=-1,b=gn(u.length-i,0),y=M(b);++k<b;)y[k]=u[i+k];k=-1;for(var R=M(i+1);++k<i;)R[k]=u[k];return R[i]=o(y),Hn(n,this,R)}}function jd(n,i){return i.length<2?n:vt(n,nr(i,0,-1))}function KT(n,i){for(var o=n.length,u=pn(i.length,o),k=Bn(n);u--;){var b=i[u];n[u]=qr(b,o)?k[b]:r}return n}function no(n,i){if(!(i==="constructor"&&typeof n[i]=="function")&&i!="__proto__")return n[i]}var Ud=xd(gd),ba=$E||function(n,i){return En.setTimeout(n,i)},ro=xd(nT);function Hd(n,i,o){var u=i+"";return ro(n,hT(u,DT(pT(u),o)))}function xd(n){var i=0,o=0;return function(){var u=XE(),k=ne-(u-o);if(o=u,k>0){if(++i>=j)return arguments[0]}else i=0;return n.apply(r,arguments)}}function pi(n,i){var o=-1,u=n.length,k=u-1;for(i=i===r?u:i;++o<i;){var b=qs(o,k),y=n[b];n[b]=n[o],n[o]=y}return n.length=i,n}var Yd=IT(function(n){var i=[];return n.charCodeAt(0)===46&&i.push(""),n.replace(cv,function(o,u,k,b){i.push(k?b.replace(Ov,"$1"):u||o)}),i});function yr(n){if(typeof n=="string"||Cn(n))return n;var i=n+"";return i=="0"&&1/n==-1/0?"-0":i}function bt(n){if(n!=null){try{return Wa.call(n)}catch{}try{return n+""}catch{}}return""}function DT(n,i){return Xn(Je,function(o){var u="_."+o[0];i&o[1]&&!xa(n,u)&&n.push(u)}),n.sort()}function Cd(n){if(n instanceof Se)return n.clone();var i=new Qn(n.__wrapped__,n.__chain__);return i.__actions__=Bn(n.__actions__),i.__index__=n.__index__,i.__values__=n.__values__,i}function FT(n,i,o){(o?_n(n,i,o):i===r)?i=1:i=gn(Ae(i),0);var u=n==null?0:n.length;if(!u||i<1)return[];for(var k=0,b=0,y=M(ri(u/i));k<u;)y[b++]=nr(n,k,k+=i);return y}function MT(n){for(var i=-1,o=n==null?0:n.length,u=0,k=[];++i<o;){var b=n[i];b&&(k[u++]=b)}return k}function BT(){var n=arguments.length;if(!n)return[];for(var i=M(n-1),o=arguments[0],u=n;u--;)i[u-1]=arguments[u];return Cr(pe(o)?Bn(o):[o],bn(i,1))}var GT=he(function(n,i){return en(n)?ga(n,bn(i,1,en,!0)):[]}),qT=he(function(n,i){var o=rr(i);return en(o)&&(o=r),en(n)?ga(n,bn(i,1,en,!0),ve(o,2)):[]}),wT=he(function(n,i){var o=rr(i);return en(o)&&(o=r),en(n)?ga(n,bn(i,1,en,!0),r,o):[]});function VT(n,i,o){var u=n==null?0:n.length;return u?(i=o||i===r?1:Ae(i),nr(n,i<0?0:i,u)):[]}function jT(n,i,o){var u=n==null?0:n.length;return u?(i=o||i===r?1:Ae(i),i=u-i,nr(n,0,i<0?0:i)):[]}function UT(n,i){return n&&n.length?ki(n,ve(i,3),!0,!0):[]}function HT(n,i){return n&&n.length?ki(n,ve(i,3),!0):[]}function xT(n,i,o,u){var k=n==null?0:n.length;return k?(o&&typeof o!="number"&&_n(n,i,o)&&(o=0,u=k),Bb(n,i,o,u)):[]}function $d(n,i,o){var u=n==null?0:n.length;if(!u)return-1;var k=o==null?0:Ae(o);return k<0&&(k=gn(u+k,0)),Ya(n,ve(i,3),k)}function Jd(n,i,o){var u=n==null?0:n.length;if(!u)return-1;var k=u-1;return o!==r&&(k=Ae(o),k=o<0?gn(u+k,0):pn(k,u-1)),Ya(n,ve(i,3),k,!0)}function Wd(n){var i=n==null?0:n.length;return i?bn(n,1):[]}function YT(n){var i=n==null?0:n.length;return i?bn(n,re):[]}function CT(n,i){var o=n==null?0:n.length;return o?(i=i===r?1:Ae(i),bn(n,i)):[]}function $T(n){for(var i=-1,o=n==null?0:n.length,u={};++i<o;){var k=n[i];u[k[0]]=k[1]}return u}function zd(n){return n&&n.length?n[0]:r}function JT(n,i,o){var u=n==null?0:n.length;if(!u)return-1;var k=o==null?0:Ae(o);return k<0&&(k=gn(u+k,0)),Ot(n,i,k)}function WT(n){var i=n==null?0:n.length;return i?nr(n,0,-1):[]}var zT=he(function(n){var i=Ce(n,Hs);return i.length&&i[0]===n[0]?Ds(i):[]}),XT=he(function(n){var i=rr(n),o=Ce(n,Hs);return i===rr(o)?i=r:o.pop(),o.length&&o[0]===n[0]?Ds(o,ve(i,2)):[]}),ZT=he(function(n){var i=rr(n),o=Ce(n,Hs);return i=typeof i=="function"?i:r,i&&o.pop(),o.length&&o[0]===n[0]?Ds(o,r,i):[]});function QT(n,i){return n==null?"":WE.call(n,i)}function rr(n){var i=n==null?0:n.length;return i?n[i-1]:r}function ey(n,i,o){var u=n==null?0:n.length;if(!u)return-1;var k=u;return o!==r&&(k=Ae(o),k=k<0?gn(u+k,0):pn(k,u-1)),i===i?DE(n,i,k):Ya(n,Ou,k,!0)}function ny(n,i){return n&&n.length?od(n,Ae(i)):r}var ry=he(Xd);function Xd(n,i){return n&&n.length&&i&&i.length?Gs(n,i):n}function ty(n,i,o){return n&&n.length&&i&&i.length?Gs(n,i,ve(o,2)):n}function ay(n,i,o){return n&&n.length&&i&&i.length?Gs(n,i,r,o):n}var iy=Gr(function(n,i){var o=n==null?0:n.length,u=Ps(n,i);return dd(n,Ce(i,function(k){return qr(k,o)?+k:k}).sort(pd)),u});function sy(n,i){var o=[];if(!(n&&n.length))return o;var u=-1,k=[],b=n.length;for(i=ve(i,3);++u<b;){var y=n[u];i(y,u,n)&&(o.push(y),k.push(u))}return dd(n,k),o}function to(n){return n==null?n:QE.call(n)}function oy(n,i,o){var u=n==null?0:n.length;return u?(o&&typeof o!="number"&&_n(n,i,o)?(i=0,o=u):(i=i==null?0:Ae(i),o=o===r?u:Ae(o)),nr(n,i,o)):[]}function ly(n,i){return gi(n,i)}function uy(n,i,o){return Vs(n,i,ve(o,2))}function dy(n,i){var o=n==null?0:n.length;if(o){var u=gi(n,i);if(u<o&&kr(n[u],i))return u}return-1}function gy(n,i){return gi(n,i,!0)}function ky(n,i,o){return Vs(n,i,ve(o,2),!0)}function fy(n,i){var o=n==null?0:n.length;if(o){var u=gi(n,i,!0)-1;if(kr(n[u],i))return u}return-1}function my(n){return n&&n.length?kd(n):[]}function vy(n,i){return n&&n.length?kd(n,ve(i,2)):[]}function Ey(n){var i=n==null?0:n.length;return i?nr(n,1,i):[]}function by(n,i,o){return n&&n.length?(i=o||i===r?1:Ae(i),nr(n,0,i<0?0:i)):[]}function Ty(n,i,o){var u=n==null?0:n.length;return u?(i=o||i===r?1:Ae(i),i=u-i,nr(n,i<0?0:i,u)):[]}function yy(n,i){return n&&n.length?ki(n,ve(i,3),!1,!0):[]}function py(n,i){return n&&n.length?ki(n,ve(i,3)):[]}var Ay=he(function(n){return zr(bn(n,1,en,!0))}),cy=he(function(n){var i=rr(n);return en(i)&&(i=r),zr(bn(n,1,en,!0),ve(i,2))}),hy=he(function(n){var i=rr(n);return i=typeof i=="function"?i:r,zr(bn(n,1,en,!0),r,i)});function Ry(n){return n&&n.length?zr(n):[]}function _y(n,i){return n&&n.length?zr(n,ve(i,2)):[]}function Sy(n,i){return i=typeof i=="function"?i:r,n&&n.length?zr(n,r,i):[]}function ao(n){if(!(n&&n.length))return[];var i=0;return n=Yr(n,function(o){if(en(o))return i=gn(o.length,i),!0}),As(i,function(o){return Ce(n,Ts(o))})}function Zd(n,i){if(!(n&&n.length))return[];var o=ao(n);return i==null?o:Ce(o,function(u){return Hn(i,r,u)})}var Ny=he(function(n,i){return en(n)?ga(n,i):[]}),Iy=he(function(n){return Us(Yr(n,en))}),Py=he(function(n){var i=rr(n);return en(i)&&(i=r),Us(Yr(n,en),ve(i,2))}),Oy=he(function(n){var i=rr(n);return i=typeof i=="function"?i:r,Us(Yr(n,en),r,i)}),Ly=he(ao);function Ky(n,i){return Ed(n||[],i||[],da)}function Dy(n,i){return Ed(n||[],i||[],ma)}var Fy=he(function(n){var i=n.length,o=i>1?n[i-1]:r;return o=typeof o=="function"?(n.pop(),o):r,Zd(n,o)});function Qd(n){var i=E(n);return i.__chain__=!0,i}function My(n,i){return i(n),n}function Ai(n,i){return i(n)}var By=Gr(function(n){var i=n.length,o=i?n[0]:0,u=this.__wrapped__,k=function(b){return Ps(b,n)};return i>1||this.__actions__.length||!(u instanceof Se)||!qr(o)?this.thru(k):(u=u.slice(o,+o+(i?1:0)),u.__actions__.push({func:Ai,args:[k],thisArg:r}),new Qn(u,this.__chain__).thru(function(b){return i&&!b.length&&b.push(r),b}))});function Gy(){return Qd(this)}function qy(){return new Qn(this.value(),this.__chain__)}function wy(){this.__values__===r&&(this.__values__=fg(this.value()));var n=this.__index__>=this.__values__.length,i=n?r:this.__values__[this.__index__++];return{done:n,value:i}}function Vy(){return this}function jy(n){for(var i,o=this;o instanceof si;){var u=Cd(o);u.__index__=0,u.__values__=r,i?k.__wrapped__=u:i=u;var k=u;o=o.__wrapped__}return k.__wrapped__=n,i}function Uy(){var n=this.__wrapped__;if(n instanceof Se){var i=n;return this.__actions__.length&&(i=new Se(this)),i=i.reverse(),i.__actions__.push({func:Ai,args:[to],thisArg:r}),new Qn(i,this.__chain__)}return this.thru(to)}function Hy(){return vd(this.__wrapped__,this.__actions__)}var xy=fi(function(n,i,o){Ge.call(n,o)?++n[o]:Mr(n,o,1)});function Yy(n,i,o){var u=pe(n)?Iu:Mb;return o&&_n(n,i,o)&&(i=r),u(n,ve(i,3))}function Cy(n,i){var o=pe(n)?Yr:Zu;return o(n,ve(i,3))}var $y=Sd($d),Jy=Sd(Jd);function Wy(n,i){return bn(ci(n,i),1)}function zy(n,i){return bn(ci(n,i),re)}function Xy(n,i,o){return o=o===r?1:Ae(o),bn(ci(n,i),o)}function eg(n,i){var o=pe(n)?Xn:Wr;return o(n,ve(i,3))}function ng(n,i){var o=pe(n)?EE:Xu;return o(n,ve(i,3))}var Zy=fi(function(n,i,o){Ge.call(n,o)?n[o].push(i):Mr(n,o,[i])});function Qy(n,i,o,u){n=Gn(n)?n:Ut(n),o=o&&!u?Ae(o):0;var k=n.length;return o<0&&(o=gn(k+o,0)),Ni(n)?o<=k&&n.indexOf(i,o)>-1:!!k&&Ot(n,i,o)>-1}var ep=he(function(n,i,o){var u=-1,k=typeof i=="function",b=Gn(n)?M(n.length):[];return Wr(n,function(y){b[++u]=k?Hn(i,y,o):ka(y,i,o)}),b}),np=fi(function(n,i,o){Mr(n,o,i)});function ci(n,i){var o=pe(n)?Ce:ad;return o(n,ve(i,3))}function rp(n,i,o,u){return n==null?[]:(pe(i)||(i=i==null?[]:[i]),o=u?r:o,pe(o)||(o=o==null?[]:[o]),ld(n,i,o))}var tp=fi(function(n,i,o){n[o?0:1].push(i)},function(){return[[],[]]});function ap(n,i,o){var u=pe(n)?Es:Ku,k=arguments.length<3;return u(n,ve(i,4),o,k,Wr)}function ip(n,i,o){var u=pe(n)?bE:Ku,k=arguments.length<3;return u(n,ve(i,4),o,k,Xu)}function sp(n,i){var o=pe(n)?Yr:Zu;return o(n,_i(ve(i,3)))}function op(n){var i=pe(n)?$u:Qb;return i(n)}function lp(n,i,o){(o?_n(n,i,o):i===r)?i=1:i=Ae(i);var u=pe(n)?Ob:eT;return u(n,i)}function up(n){var i=pe(n)?Lb:rT;return i(n)}function dp(n){if(n==null)return 0;if(Gn(n))return Ni(n)?Kt(n):n.length;var i=An(n);return i==un||i==ae?n.size:Ms(n).length}function gp(n,i,o){var u=pe(n)?bs:tT;return o&&_n(n,i,o)&&(i=r),u(n,ve(i,3))}var kp=he(function(n,i){if(n==null)return[];var o=i.length;return o>1&&_n(n,i[0],i[1])?i=[]:o>2&&_n(i[0],i[1],i[2])&&(i=[i[0]]),ld(n,bn(i,1),[])}),hi=CE||function(){return En.Date.now()};function fp(n,i){if(typeof i!="function")throw new Zn(d);return n=Ae(n),function(){if(--n<1)return i.apply(this,arguments)}}function rg(n,i,o){return i=o?r:i,i=n&&i==null?n.length:i,Br(n,K,r,r,r,r,i)}function tg(n,i){var o;if(typeof i!="function")throw new Zn(d);return n=Ae(n),function(){return--n>0&&(o=i.apply(this,arguments)),n<=1&&(i=r),o}}var io=he(function(n,i,o){var u=N;if(o.length){var k=$r(o,Vt(io));u|=A}return Br(n,u,i,o,k)}),ag=he(function(n,i,o){var u=N|F;if(o.length){var k=$r(o,Vt(ag));u|=A}return Br(i,u,n,o,k)});function ig(n,i,o){i=o?r:i;var u=Br(n,P,r,r,r,r,r,i);return u.placeholder=ig.placeholder,u}function sg(n,i,o){i=o?r:i;var u=Br(n,Q,r,r,r,r,r,i);return u.placeholder=sg.placeholder,u}function og(n,i,o){var u,k,b,y,R,S,H=0,x=!1,W=!1,oe=!0;if(typeof n!="function")throw new Zn(d);i=tr(i)||0,ze(o)&&(x=!!o.leading,W="maxWait"in o,b=W?gn(tr(o.maxWait)||0,i):b,oe="trailing"in o?!!o.trailing:oe);function ke(nn){var fr=u,jr=k;return u=k=r,H=nn,y=n.apply(jr,fr),y}function Ee(nn){return H=nn,R=ba(Re,i),x?ke(nn):y}function ce(nn){var fr=nn-S,jr=nn-H,Sg=i-fr;return W?pn(Sg,b-jr):Sg}function be(nn){var fr=nn-S,jr=nn-H;return S===r||fr>=i||fr<0||W&&jr>=b}function Re(){var nn=hi();if(be(nn))return Ne(nn);R=ba(Re,ce(nn))}function Ne(nn){return R=r,oe&&u?ke(nn):(u=k=r,y)}function $n(){R!==r&&bd(R),H=0,u=S=k=R=r}function Sn(){return R===r?y:Ne(hi())}function Jn(){var nn=hi(),fr=be(nn);if(u=arguments,k=this,S=nn,fr){if(R===r)return Ee(S);if(W)return bd(R),R=ba(Re,i),ke(S)}return R===r&&(R=ba(Re,i)),y}return Jn.cancel=$n,Jn.flush=Sn,Jn}var mp=he(function(n,i){return zu(n,1,i)}),vp=he(function(n,i,o){return zu(n,tr(i)||0,o)});function Ep(n){return Br(n,z)}function Ri(n,i){if(typeof n!="function"||i!=null&&typeof i!="function")throw new Zn(d);var o=function(){var u=arguments,k=i?i.apply(this,u):u[0],b=o.cache;if(b.has(k))return b.get(k);var y=n.apply(this,u);return o.cache=b.set(k,y)||b,y};return o.cache=new(Ri.Cache||Fr),o}Ri.Cache=Fr;function _i(n){if(typeof n!="function")throw new Zn(d);return function(){var i=arguments;switch(i.length){case 0:return!n.call(this);case 1:return!n.call(this,i[0]);case 2:return!n.call(this,i[0],i[1]);case 3:return!n.call(this,i[0],i[1],i[2])}return!n.apply(this,i)}}function bp(n){return tg(2,n)}var Tp=aT(function(n,i){i=i.length==1&&pe(i[0])?Ce(i[0],xn(ve())):Ce(bn(i,1),xn(ve()));var o=i.length;return he(function(u){for(var k=-1,b=pn(u.length,o);++k<b;)u[k]=i[k].call(this,u[k]);return Hn(n,this,u)})}),so=he(function(n,i){var o=$r(i,Vt(so));return Br(n,A,r,i,o)}),lg=he(function(n,i){var o=$r(i,Vt(lg));return Br(n,w,r,i,o)}),yp=Gr(function(n,i){return Br(n,I,r,r,r,i)});function pp(n,i){if(typeof n!="function")throw new Zn(d);return i=i===r?i:Ae(i),he(n,i)}function Ap(n,i){if(typeof n!="function")throw new Zn(d);return i=i==null?0:gn(Ae(i),0),he(function(o){var u=o[i],k=Zr(o,0,i);return u&&Cr(k,u),Hn(n,this,k)})}function cp(n,i,o){var u=!0,k=!0;if(typeof n!="function")throw new Zn(d);return ze(o)&&(u="leading"in o?!!o.leading:u,k="trailing"in o?!!o.trailing:k),og(n,i,{leading:u,maxWait:i,trailing:k})}function hp(n){return rg(n,1)}function Rp(n,i){return so(xs(i),n)}function _p(){if(!arguments.length)return[];var n=arguments[0];return pe(n)?n:[n]}function Sp(n){return er(n,O)}function Np(n,i){return i=typeof i=="function"?i:r,er(n,O,i)}function Ip(n){return er(n,T|O)}function Pp(n,i){return i=typeof i=="function"?i:r,er(n,T|O,i)}function Op(n,i){return i==null||Wu(n,i,fn(i))}function kr(n,i){return n===i||n!==n&&i!==i}var Lp=bi(Ks),Kp=bi(function(n,i){return n>=i}),Tt=nd(function(){return arguments}())?nd:function(n){return Xe(n)&&Ge.call(n,"callee")&&!ju.call(n,"callee")},pe=M.isArray,Dp=cu?xn(cu):jb;function Gn(n){return n!=null&&Si(n.length)&&!wr(n)}function en(n){return Xe(n)&&Gn(n)}function Fp(n){return n===!0||n===!1||Xe(n)&&Rn(n)==vn}var Qr=JE||To,Mp=hu?xn(hu):Ub;function Bp(n){return Xe(n)&&n.nodeType===1&&!Ta(n)}function Gp(n){if(n==null)return!0;if(Gn(n)&&(pe(n)||typeof n=="string"||typeof n.splice=="function"||Qr(n)||jt(n)||Tt(n)))return!n.length;var i=An(n);if(i==un||i==ae)return!n.size;if(Ea(n))return!Ms(n).length;for(var o in n)if(Ge.call(n,o))return!1;return!0}function qp(n,i){return fa(n,i)}function wp(n,i,o){o=typeof o=="function"?o:r;var u=o?o(n,i):r;return u===r?fa(n,i,r,o):!!u}function oo(n){if(!Xe(n))return!1;var i=Rn(n);return i==an||i==Qe||typeof n.message=="string"&&typeof n.name=="string"&&!Ta(n)}function Vp(n){return typeof n=="number"&&Hu(n)}function wr(n){if(!ze(n))return!1;var i=Rn(n);return i==yn||i==Fn||i==Dn||i==D}function ug(n){return typeof n=="number"&&n==Ae(n)}function Si(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Y}function ze(n){var i=typeof n;return n!=null&&(i=="object"||i=="function")}function Xe(n){return n!=null&&typeof n=="object"}var dg=Ru?xn(Ru):xb;function jp(n,i){return n===i||Fs(n,i,Xs(i))}function Up(n,i,o){return o=typeof o=="function"?o:r,Fs(n,i,Xs(i),o)}function Hp(n){return gg(n)&&n!=+n}function xp(n){if(NT(n))throw new ye(l);return rd(n)}function Yp(n){return n===null}function Cp(n){return n==null}function gg(n){return typeof n=="number"||Xe(n)&&Rn(n)==ur}function Ta(n){if(!Xe(n)||Rn(n)!=Mn)return!1;var i=Qa(n);if(i===null)return!0;var o=Ge.call(i,"constructor")&&i.constructor;return typeof o=="function"&&o instanceof o&&Wa.call(o)==UE}var lo=_u?xn(_u):Yb;function $p(n){return ug(n)&&n>=-9007199254740991&&n<=Y}var kg=Su?xn(Su):Cb;function Ni(n){return typeof n=="string"||!pe(n)&&Xe(n)&&Rn(n)==ie}function Cn(n){return typeof n=="symbol"||Xe(n)&&Rn(n)==ee}var jt=Nu?xn(Nu):$b;function Jp(n){return n===r}function Wp(n){return Xe(n)&&An(n)==Te}function zp(n){return Xe(n)&&Rn(n)==sn}var Xp=bi(Bs),Zp=bi(function(n,i){return n<=i});function fg(n){if(!n)return[];if(Gn(n))return Ni(n)?dr(n):Bn(n);if(ia&&n[ia])return OE(n[ia]());var i=An(n),o=i==un?hs:i==ae?Ca:Ut;return o(n)}function Vr(n){if(!n)return n===0?n:0;if(n=tr(n),n===re||n===-1/0){var i=n<0?-1:1;return i*ue}return n===n?n:0}function Ae(n){var i=Vr(n),o=i%1;return i===i?o?i-o:i:0}function mg(n){return n?mt(Ae(n),0,fe):0}function tr(n){if(typeof n=="number")return n;if(Cn(n))return de;if(ze(n)){var i=typeof n.valueOf=="function"?n.valueOf():n;n=ze(i)?i+"":i}if(typeof n!="string")return n===0?n:+n;n=Du(n);var o=Dv.test(n);return o||Mv.test(n)?fE(n.slice(2),o?2:8):Kv.test(n)?de:+n}function vg(n){return Tr(n,qn(n))}function Qp(n){return n?mt(Ae(n),-9007199254740991,Y):n===0?n:0}function Fe(n){return n==null?"":Yn(n)}var eA=qt(function(n,i){if(Ea(i)||Gn(i)){Tr(i,fn(i),n);return}for(var o in i)Ge.call(i,o)&&da(n,o,i[o])}),Eg=qt(function(n,i){Tr(i,qn(i),n)}),Ii=qt(function(n,i,o,u){Tr(i,qn(i),n,u)}),nA=qt(function(n,i,o,u){Tr(i,fn(i),n,u)}),rA=Gr(Ps);function tA(n,i){var o=Gt(n);return i==null?o:Ju(o,i)}var aA=he(function(n,i){n=we(n);var o=-1,u=i.length,k=u>2?i[2]:r;for(k&&_n(i[0],i[1],k)&&(u=1);++o<u;)for(var b=i[o],y=qn(b),R=-1,S=y.length;++R<S;){var H=y[R],x=n[H];(x===r||kr(x,Ft[H])&&!Ge.call(n,H))&&(n[H]=b[H])}return n}),iA=he(function(n){return n.push(r,Dd),Hn(bg,r,n)});function sA(n,i){return Pu(n,ve(i,3),br)}function oA(n,i){return Pu(n,ve(i,3),Ls)}function lA(n,i){return n==null?n:Os(n,ve(i,3),qn)}function uA(n,i){return n==null?n:Qu(n,ve(i,3),qn)}function dA(n,i){return n&&br(n,ve(i,3))}function gA(n,i){return n&&Ls(n,ve(i,3))}function kA(n){return n==null?[]:ui(n,fn(n))}function fA(n){return n==null?[]:ui(n,qn(n))}function uo(n,i,o){var u=n==null?r:vt(n,i);return u===r?o:u}function mA(n,i){return n!=null&&Bd(n,i,Gb)}function go(n,i){return n!=null&&Bd(n,i,qb)}var vA=Id(function(n,i,o){i!=null&&typeof i.toString!="function"&&(i=za.call(i)),n[i]=o},fo(wn)),EA=Id(function(n,i,o){i!=null&&typeof i.toString!="function"&&(i=za.call(i)),Ge.call(n,i)?n[i].push(o):n[i]=[o]},ve),bA=he(ka);function fn(n){return Gn(n)?Cu(n):Ms(n)}function qn(n){return Gn(n)?Cu(n,!0):Jb(n)}function TA(n,i){var o={};return i=ve(i,3),br(n,function(u,k,b){Mr(o,i(u,k,b),u)}),o}function yA(n,i){var o={};return i=ve(i,3),br(n,function(u,k,b){Mr(o,k,i(u,k,b))}),o}var pA=qt(function(n,i,o){di(n,i,o)}),bg=qt(function(n,i,o,u){di(n,i,o,u)}),AA=Gr(function(n,i){var o={};if(n==null)return o;var u=!1;i=Ce(i,function(b){return b=Xr(b,n),u||(u=b.length>1),b}),Tr(n,Ws(n),o),u&&(o=er(o,T|p|O,vT));for(var k=i.length;k--;)js(o,i[k]);return o});function cA(n,i){return Tg(n,_i(ve(i)))}var hA=Gr(function(n,i){return n==null?{}:zb(n,i)});function Tg(n,i){if(n==null)return{};var o=Ce(Ws(n),function(u){return[u]});return i=ve(i),ud(n,o,function(u,k){return i(u,k[0])})}function RA(n,i,o){i=Xr(i,n);var u=-1,k=i.length;for(k||(k=1,n=r);++u<k;){var b=n==null?r:n[yr(i[u])];b===r&&(u=k,b=o),n=wr(b)?b.call(n):b}return n}function _A(n,i,o){return n==null?n:ma(n,i,o)}function SA(n,i,o,u){return u=typeof u=="function"?u:r,n==null?n:ma(n,i,o,u)}var yg=Ld(fn),pg=Ld(qn);function NA(n,i,o){var u=pe(n),k=u||Qr(n)||jt(n);if(i=ve(i,4),o==null){var b=n&&n.constructor;k?o=u?new b:[]:ze(n)?o=wr(b)?Gt(Qa(n)):{}:o={}}return(k?Xn:br)(n,function(y,R,S){return i(o,y,R,S)}),o}function IA(n,i){return n==null?!0:js(n,i)}function PA(n,i,o){return n==null?n:md(n,i,xs(o))}function OA(n,i,o,u){return u=typeof u=="function"?u:r,n==null?n:md(n,i,xs(o),u)}function Ut(n){return n==null?[]:cs(n,fn(n))}function LA(n){return n==null?[]:cs(n,qn(n))}function KA(n,i,o){return o===r&&(o=i,i=r),o!==r&&(o=tr(o),o=o===o?o:0),i!==r&&(i=tr(i),i=i===i?i:0),mt(tr(n),i,o)}function DA(n,i,o){return i=Vr(i),o===r?(o=i,i=0):o=Vr(o),n=tr(n),wb(n,i,o)}function FA(n,i,o){if(o&&typeof o!="boolean"&&_n(n,i,o)&&(i=o=r),o===r&&(typeof i=="boolean"?(o=i,i=r):typeof n=="boolean"&&(o=n,n=r)),n===r&&i===r?(n=0,i=1):(n=Vr(n),i===r?(i=n,n=0):i=Vr(i)),n>i){var u=n;n=i,i=u}if(o||n%1||i%1){var k=xu();return pn(n+k*(i-n+kE("1e-"+((k+"").length-1))),i)}return qs(n,i)}var MA=wt(function(n,i,o){return i=i.toLowerCase(),n+(o?Ag(i):i)});function Ag(n){return ko(Fe(n).toLowerCase())}function cg(n){return n=Fe(n),n&&n.replace(Gv,_E).replace(rE,"")}function BA(n,i,o){n=Fe(n),i=Yn(i);var u=n.length;o=o===r?u:mt(Ae(o),0,u);var k=o;return o-=i.length,o>=0&&n.slice(o,k)==i}function GA(n){return n=Fe(n),n&&bv.test(n)?n.replace(Ql,SE):n}function qA(n){return n=Fe(n),n&&hv.test(n)?n.replace(ss,"\\$&"):n}var wA=wt(function(n,i,o){return n+(o?"-":"")+i.toLowerCase()}),VA=wt(function(n,i,o){return n+(o?" ":"")+i.toLowerCase()}),jA=_d("toLowerCase");function UA(n,i,o){n=Fe(n),i=Ae(i);var u=i?Kt(n):0;if(!i||u>=i)return n;var k=(i-u)/2;return Ei(ti(k),o)+n+Ei(ri(k),o)}function HA(n,i,o){n=Fe(n),i=Ae(i);var u=i?Kt(n):0;return i&&u<i?n+Ei(i-u,o):n}function xA(n,i,o){n=Fe(n),i=Ae(i);var u=i?Kt(n):0;return i&&u<i?Ei(i-u,o)+n:n}function YA(n,i,o){return o||i==null?i=0:i&&(i=+i),ZE(Fe(n).replace(os,""),i||0)}function CA(n,i,o){return(o?_n(n,i,o):i===r)?i=1:i=Ae(i),ws(Fe(n),i)}function $A(){var n=arguments,i=Fe(n[0]);return n.length<3?i:i.replace(n[1],n[2])}var JA=wt(function(n,i,o){return n+(o?"_":"")+i.toLowerCase()});function WA(n,i,o){return o&&typeof o!="number"&&_n(n,i,o)&&(i=o=r),o=o===r?fe:o>>>0,o?(n=Fe(n),n&&(typeof i=="string"||i!=null&&!lo(i))&&(i=Yn(i),!i&&Lt(n))?Zr(dr(n),0,o):n.split(i,o)):[]}var zA=wt(function(n,i,o){return n+(o?" ":"")+ko(i)});function XA(n,i,o){return n=Fe(n),o=o==null?0:mt(Ae(o),0,n.length),i=Yn(i),n.slice(o,o+i.length)==i}function ZA(n,i,o){var u=E.templateSettings;o&&_n(n,i,o)&&(i=r),n=Fe(n),i=Ii({},i,u,Kd);var k=Ii({},i.imports,u.imports,Kd),b=fn(k),y=cs(k,b),R,S,H=0,x=i.interpolate||ja,W="__p += '",oe=Rs((i.escape||ja).source+"|"+x.source+"|"+(x===eu?Lv:ja).source+"|"+(i.evaluate||ja).source+"|$","g"),ke="//# sourceURL="+(Ge.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++oE+"]")+`
`;n.replace(oe,function(be,Re,Ne,$n,Sn,Jn){return Ne||(Ne=$n),W+=n.slice(H,Jn).replace(qv,NE),Re&&(R=!0,W+=`' +
__e(`+Re+`) +
'`),Sn&&(S=!0,W+=`';
`+Sn+`;
__p += '`),Ne&&(W+=`' +
((__t = (`+Ne+`)) == null ? '' : __t) +
'`),H=Jn+be.length,be}),W+=`';
`;var Ee=Ge.call(i,"variable")&&i.variable;if(!Ee)W=`with (obj) {
`+W+`
}
`;else if(Pv.test(Ee))throw new ye(g);W=(S?W.replace(fv,""):W).replace(mv,"$1").replace(vv,"$1;"),W="function("+(Ee||"obj")+`) {
`+(Ee?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(R?", __e = _.escape":"")+(S?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+W+`return __p
}`;var ce=Rg(function(){return Ke(b,ke+"return "+W).apply(r,y)});if(ce.source=W,oo(ce))throw ce;return ce}function QA(n){return Fe(n).toLowerCase()}function ec(n){return Fe(n).toUpperCase()}function nc(n,i,o){if(n=Fe(n),n&&(o||i===r))return Du(n);if(!n||!(i=Yn(i)))return n;var u=dr(n),k=dr(i),b=Fu(u,k),y=Mu(u,k)+1;return Zr(u,b,y).join("")}function rc(n,i,o){if(n=Fe(n),n&&(o||i===r))return n.slice(0,Gu(n)+1);if(!n||!(i=Yn(i)))return n;var u=dr(n),k=Mu(u,dr(i))+1;return Zr(u,0,k).join("")}function tc(n,i,o){if(n=Fe(n),n&&(o||i===r))return n.replace(os,"");if(!n||!(i=Yn(i)))return n;var u=dr(n),k=Fu(u,dr(i));return Zr(u,k).join("")}function ac(n,i){var o=Z,u=X;if(ze(i)){var k="separator"in i?i.separator:k;o="length"in i?Ae(i.length):o,u="omission"in i?Yn(i.omission):u}n=Fe(n);var b=n.length;if(Lt(n)){var y=dr(n);b=y.length}if(o>=b)return n;var R=o-Kt(u);if(R<1)return u;var S=y?Zr(y,0,R).join(""):n.slice(0,R);if(k===r)return S+u;if(y&&(R+=S.length-R),lo(k)){if(n.slice(R).search(k)){var H,x=S;for(k.global||(k=Rs(k.source,Fe(nu.exec(k))+"g")),k.lastIndex=0;H=k.exec(x);)var W=H.index;S=S.slice(0,W===r?R:W)}}else if(n.indexOf(Yn(k),R)!=R){var oe=S.lastIndexOf(k);oe>-1&&(S=S.slice(0,oe))}return S+u}function ic(n){return n=Fe(n),n&&Ev.test(n)?n.replace(Zl,FE):n}var sc=wt(function(n,i,o){return n+(o?" ":"")+i.toUpperCase()}),ko=_d("toUpperCase");function hg(n,i,o){return n=Fe(n),i=o?r:i,i===r?PE(n)?GE(n):pE(n):n.match(i)||[]}var Rg=he(function(n,i){try{return Hn(n,r,i)}catch(o){return oo(o)?o:new ye(o)}}),oc=Gr(function(n,i){return Xn(i,function(o){o=yr(o),Mr(n,o,io(n[o],n))}),n});function lc(n){var i=n==null?0:n.length,o=ve();return n=i?Ce(n,function(u){if(typeof u[1]!="function")throw new Zn(d);return[o(u[0]),u[1]]}):[],he(function(u){for(var k=-1;++k<i;){var b=n[k];if(Hn(b[0],this,u))return Hn(b[1],this,u)}})}function uc(n){return Fb(er(n,T))}function fo(n){return function(){return n}}function dc(n,i){return n==null||n!==n?i:n}var gc=Nd(),kc=Nd(!0);function wn(n){return n}function mo(n){return td(typeof n=="function"?n:er(n,T))}function fc(n){return id(er(n,T))}function mc(n,i){return sd(n,er(i,T))}var vc=he(function(n,i){return function(o){return ka(o,n,i)}}),Ec=he(function(n,i){return function(o){return ka(n,o,i)}});function vo(n,i,o){var u=fn(i),k=ui(i,u);o==null&&!(ze(i)&&(k.length||!u.length))&&(o=i,i=n,n=this,k=ui(i,fn(i)));var b=!(ze(o)&&"chain"in o)||!!o.chain,y=wr(n);return Xn(k,function(R){var S=i[R];n[R]=S,y&&(n.prototype[R]=function(){var H=this.__chain__;if(b||H){var x=n(this.__wrapped__),W=x.__actions__=Bn(this.__actions__);return W.push({func:S,args:arguments,thisArg:n}),x.__chain__=H,x}return S.apply(n,Cr([this.value()],arguments))})}),n}function bc(){return En._===this&&(En._=HE),this}function Eo(){}function Tc(n){return n=Ae(n),he(function(i){return od(i,n)})}var yc=Cs(Ce),pc=Cs(Iu),Ac=Cs(bs);function _g(n){return Qs(n)?Ts(yr(n)):Xb(n)}function cc(n){return function(i){return n==null?r:vt(n,i)}}var hc=Pd(),Rc=Pd(!0);function bo(){return[]}function To(){return!1}function _c(){return{}}function Sc(){return""}function Nc(){return!0}function Ic(n,i){if(n=Ae(n),n<1||n>Y)return[];var o=fe,u=pn(n,fe);i=ve(i),n-=fe;for(var k=As(u,i);++o<n;)i(o);return k}function Pc(n){return pe(n)?Ce(n,yr):Cn(n)?[n]:Bn(Yd(Fe(n)))}function Oc(n){var i=++jE;return Fe(n)+i}var Lc=vi(function(n,i){return n+i},0),Kc=$s("ceil"),Dc=vi(function(n,i){return n/i},1),Fc=$s("floor");function Mc(n){return n&&n.length?li(n,wn,Ks):r}function Bc(n,i){return n&&n.length?li(n,ve(i,2),Ks):r}function Gc(n){return Lu(n,wn)}function qc(n,i){return Lu(n,ve(i,2))}function wc(n){return n&&n.length?li(n,wn,Bs):r}function Vc(n,i){return n&&n.length?li(n,ve(i,2),Bs):r}var jc=vi(function(n,i){return n*i},1),Uc=$s("round"),Hc=vi(function(n,i){return n-i},0);function xc(n){return n&&n.length?ps(n,wn):0}function Yc(n,i){return n&&n.length?ps(n,ve(i,2)):0}return E.after=fp,E.ary=rg,E.assign=eA,E.assignIn=Eg,E.assignInWith=Ii,E.assignWith=nA,E.at=rA,E.before=tg,E.bind=io,E.bindAll=oc,E.bindKey=ag,E.castArray=_p,E.chain=Qd,E.chunk=FT,E.compact=MT,E.concat=BT,E.cond=lc,E.conforms=uc,E.constant=fo,E.countBy=xy,E.create=tA,E.curry=ig,E.curryRight=sg,E.debounce=og,E.defaults=aA,E.defaultsDeep=iA,E.defer=mp,E.delay=vp,E.difference=GT,E.differenceBy=qT,E.differenceWith=wT,E.drop=VT,E.dropRight=jT,E.dropRightWhile=UT,E.dropWhile=HT,E.fill=xT,E.filter=Cy,E.flatMap=Wy,E.flatMapDeep=zy,E.flatMapDepth=Xy,E.flatten=Wd,E.flattenDeep=YT,E.flattenDepth=CT,E.flip=Ep,E.flow=gc,E.flowRight=kc,E.fromPairs=$T,E.functions=kA,E.functionsIn=fA,E.groupBy=Zy,E.initial=WT,E.intersection=zT,E.intersectionBy=XT,E.intersectionWith=ZT,E.invert=vA,E.invertBy=EA,E.invokeMap=ep,E.iteratee=mo,E.keyBy=np,E.keys=fn,E.keysIn=qn,E.map=ci,E.mapKeys=TA,E.mapValues=yA,E.matches=fc,E.matchesProperty=mc,E.memoize=Ri,E.merge=pA,E.mergeWith=bg,E.method=vc,E.methodOf=Ec,E.mixin=vo,E.negate=_i,E.nthArg=Tc,E.omit=AA,E.omitBy=cA,E.once=bp,E.orderBy=rp,E.over=yc,E.overArgs=Tp,E.overEvery=pc,E.overSome=Ac,E.partial=so,E.partialRight=lg,E.partition=tp,E.pick=hA,E.pickBy=Tg,E.property=_g,E.propertyOf=cc,E.pull=ry,E.pullAll=Xd,E.pullAllBy=ty,E.pullAllWith=ay,E.pullAt=iy,E.range=hc,E.rangeRight=Rc,E.rearg=yp,E.reject=sp,E.remove=sy,E.rest=pp,E.reverse=to,E.sampleSize=lp,E.set=_A,E.setWith=SA,E.shuffle=up,E.slice=oy,E.sortBy=kp,E.sortedUniq=my,E.sortedUniqBy=vy,E.split=WA,E.spread=Ap,E.tail=Ey,E.take=by,E.takeRight=Ty,E.takeRightWhile=yy,E.takeWhile=py,E.tap=My,E.throttle=cp,E.thru=Ai,E.toArray=fg,E.toPairs=yg,E.toPairsIn=pg,E.toPath=Pc,E.toPlainObject=vg,E.transform=NA,E.unary=hp,E.union=Ay,E.unionBy=cy,E.unionWith=hy,E.uniq=Ry,E.uniqBy=_y,E.uniqWith=Sy,E.unset=IA,E.unzip=ao,E.unzipWith=Zd,E.update=PA,E.updateWith=OA,E.values=Ut,E.valuesIn=LA,E.without=Ny,E.words=hg,E.wrap=Rp,E.xor=Iy,E.xorBy=Py,E.xorWith=Oy,E.zip=Ly,E.zipObject=Ky,E.zipObjectDeep=Dy,E.zipWith=Fy,E.entries=yg,E.entriesIn=pg,E.extend=Eg,E.extendWith=Ii,vo(E,E),E.add=Lc,E.attempt=Rg,E.camelCase=MA,E.capitalize=Ag,E.ceil=Kc,E.clamp=KA,E.clone=Sp,E.cloneDeep=Ip,E.cloneDeepWith=Pp,E.cloneWith=Np,E.conformsTo=Op,E.deburr=cg,E.defaultTo=dc,E.divide=Dc,E.endsWith=BA,E.eq=kr,E.escape=GA,E.escapeRegExp=qA,E.every=Yy,E.find=$y,E.findIndex=$d,E.findKey=sA,E.findLast=Jy,E.findLastIndex=Jd,E.findLastKey=oA,E.floor=Fc,E.forEach=eg,E.forEachRight=ng,E.forIn=lA,E.forInRight=uA,E.forOwn=dA,E.forOwnRight=gA,E.get=uo,E.gt=Lp,E.gte=Kp,E.has=mA,E.hasIn=go,E.head=zd,E.identity=wn,E.includes=Qy,E.indexOf=JT,E.inRange=DA,E.invoke=bA,E.isArguments=Tt,E.isArray=pe,E.isArrayBuffer=Dp,E.isArrayLike=Gn,E.isArrayLikeObject=en,E.isBoolean=Fp,E.isBuffer=Qr,E.isDate=Mp,E.isElement=Bp,E.isEmpty=Gp,E.isEqual=qp,E.isEqualWith=wp,E.isError=oo,E.isFinite=Vp,E.isFunction=wr,E.isInteger=ug,E.isLength=Si,E.isMap=dg,E.isMatch=jp,E.isMatchWith=Up,E.isNaN=Hp,E.isNative=xp,E.isNil=Cp,E.isNull=Yp,E.isNumber=gg,E.isObject=ze,E.isObjectLike=Xe,E.isPlainObject=Ta,E.isRegExp=lo,E.isSafeInteger=$p,E.isSet=kg,E.isString=Ni,E.isSymbol=Cn,E.isTypedArray=jt,E.isUndefined=Jp,E.isWeakMap=Wp,E.isWeakSet=zp,E.join=QT,E.kebabCase=wA,E.last=rr,E.lastIndexOf=ey,E.lowerCase=VA,E.lowerFirst=jA,E.lt=Xp,E.lte=Zp,E.max=Mc,E.maxBy=Bc,E.mean=Gc,E.meanBy=qc,E.min=wc,E.minBy=Vc,E.stubArray=bo,E.stubFalse=To,E.stubObject=_c,E.stubString=Sc,E.stubTrue=Nc,E.multiply=jc,E.nth=ny,E.noConflict=bc,E.noop=Eo,E.now=hi,E.pad=UA,E.padEnd=HA,E.padStart=xA,E.parseInt=YA,E.random=FA,E.reduce=ap,E.reduceRight=ip,E.repeat=CA,E.replace=$A,E.result=RA,E.round=Uc,E.runInContext=_,E.sample=op,E.size=dp,E.snakeCase=JA,E.some=gp,E.sortedIndex=ly,E.sortedIndexBy=uy,E.sortedIndexOf=dy,E.sortedLastIndex=gy,E.sortedLastIndexBy=ky,E.sortedLastIndexOf=fy,E.startCase=zA,E.startsWith=XA,E.subtract=Hc,E.sum=xc,E.sumBy=Yc,E.template=ZA,E.times=Ic,E.toFinite=Vr,E.toInteger=Ae,E.toLength=mg,E.toLower=QA,E.toNumber=tr,E.toSafeInteger=Qp,E.toString=Fe,E.toUpper=ec,E.trim=nc,E.trimEnd=rc,E.trimStart=tc,E.truncate=ac,E.unescape=ic,E.uniqueId=Oc,E.upperCase=sc,E.upperFirst=ko,E.each=eg,E.eachRight=ng,E.first=zd,vo(E,function(){var n={};return br(E,function(i,o){Ge.call(E.prototype,o)||(n[o]=i)}),n}(),{chain:!1}),E.VERSION=a,Xn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){E[n].placeholder=E}),Xn(["drop","take"],function(n,i){Se.prototype[n]=function(o){o=o===r?1:gn(Ae(o),0);var u=this.__filtered__&&!i?new Se(this):this.clone();return u.__filtered__?u.__takeCount__=pn(o,u.__takeCount__):u.__views__.push({size:pn(o,fe),type:n+(u.__dir__<0?"Right":"")}),u},Se.prototype[n+"Right"]=function(o){return this.reverse()[n](o).reverse()}}),Xn(["filter","map","takeWhile"],function(n,i){var o=i+1,u=o==C||o==$;Se.prototype[n]=function(k){var b=this.clone();return b.__iteratees__.push({iteratee:ve(k,3),type:o}),b.__filtered__=b.__filtered__||u,b}}),Xn(["head","last"],function(n,i){var o="take"+(i?"Right":"");Se.prototype[n]=function(){return this[o](1).value()[0]}}),Xn(["initial","tail"],function(n,i){var o="drop"+(i?"":"Right");Se.prototype[n]=function(){return this.__filtered__?new Se(this):this[o](1)}}),Se.prototype.compact=function(){return this.filter(wn)},Se.prototype.find=function(n){return this.filter(n).head()},Se.prototype.findLast=function(n){return this.reverse().find(n)},Se.prototype.invokeMap=he(function(n,i){return typeof n=="function"?new Se(this):this.map(function(o){return ka(o,n,i)})}),Se.prototype.reject=function(n){return this.filter(_i(ve(n)))},Se.prototype.slice=function(n,i){n=Ae(n);var o=this;return o.__filtered__&&(n>0||i<0)?new Se(o):(n<0?o=o.takeRight(-n):n&&(o=o.drop(n)),i!==r&&(i=Ae(i),o=i<0?o.dropRight(-i):o.take(i-n)),o)},Se.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Se.prototype.toArray=function(){return this.take(fe)},br(Se.prototype,function(n,i){var o=/^(?:filter|find|map|reject)|While$/.test(i),u=/^(?:head|last)$/.test(i),k=E[u?"take"+(i=="last"?"Right":""):i],b=u||/^find/.test(i);k&&(E.prototype[i]=function(){var y=this.__wrapped__,R=u?[1]:arguments,S=y instanceof Se,H=R[0],x=S||pe(y),W=function(Re){var Ne=k.apply(E,Cr([Re],R));return u&&oe?Ne[0]:Ne};x&&o&&typeof H=="function"&&H.length!=1&&(S=x=!1);var oe=this.__chain__,ke=!!this.__actions__.length,Ee=b&&!oe,ce=S&&!ke;if(!b&&x){y=ce?y:new Se(this);var be=n.apply(y,R);return be.__actions__.push({func:Ai,args:[W],thisArg:r}),new Qn(be,oe)}return Ee&&ce?n.apply(this,R):(be=this.thru(W),Ee?u?be.value()[0]:be.value():be)})}),Xn(["pop","push","shift","sort","splice","unshift"],function(n){var i=$a[n],o=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",u=/^(?:pop|shift)$/.test(n);E.prototype[n]=function(){var k=arguments;if(u&&!this.__chain__){var b=this.value();return i.apply(pe(b)?b:[],k)}return this[o](function(y){return i.apply(pe(y)?y:[],k)})}}),br(Se.prototype,function(n,i){var o=E[i];if(o){var u=o.name+"";Ge.call(Bt,u)||(Bt[u]=[]),Bt[u].push({name:i,func:o})}}),Bt[mi(r,F).name]=[{name:"wrapper",func:r}],Se.prototype.clone=ib,Se.prototype.reverse=sb,Se.prototype.value=ob,E.prototype.at=By,E.prototype.chain=Gy,E.prototype.commit=qy,E.prototype.next=wy,E.prototype.plant=jy,E.prototype.reverse=Uy,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=Hy,E.prototype.first=E.prototype.head,ia&&(E.prototype[ia]=Vy),E},Dt=qE();dt?((dt.exports=Dt)._=Dt,fs._=Dt):En._=Dt}).call(uL)}(Na,Na.exports)),Na.exports}dL();Kn(Ga);const Ul=U.forwardRef((e,t)=>te.jsx(cN,{gap:"2",style:{display:"flex"},...e,ref:t}));Ul.displayName="FaktaGruppe";Ul.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};Ul.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var Ko={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Kk;function gL(){return Kk||(Kk=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var l="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(l=s(l,a.call(this,g)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var g in l)t.call(l,g)&&l[g]&&(d=s(d,this&&this[g]||g));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Ko)),Ko.exports}var kL=gL();const fL=Wc(kL),mL="_boks_c3bfh_1",vL="_harBorderLeft_c3bfh_8",EL="_harBorderTop_c3bfh_12",bL={boks:mL,harBorderLeft:vL,harBorderTop:EL};fL.bind(bL);var Do={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Dk;function TL(){return Dk||(Dk=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var l="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(l=s(l,a(g)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return r.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var g in l)t.call(l,g)&&l[g]&&(d=s(d,g));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Do)),Do.exports}TL();var yL=Object.defineProperty,pL=(e,t,r)=>t in e?yL(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Fk=(e,t,r)=>pL(e,typeof t!="symbol"?t+"":t,r);function AL(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mk={exports:{}},_a={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bk;function cL(){if(Bk)return _a;Bk=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,s,l){var d=null;if(l!==void 0&&(d=""+l),s.key!==void 0&&(d=""+s.key),"key"in s){l={};for(var g in s)g!=="key"&&(l[g]=s[g])}else l=s;return s=l.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:l}}return _a.Fragment=t,_a.jsx=r,_a.jsxs=r,_a}var Gk;function hL(){return Gk||(Gk=1,Mk.exports=cL()),Mk.exports}var Hr=hL(),ol={exports:{}},RL=ol.exports,qk;function _L(){return qk||(qk=1,function(e,t){(function(r,a){e.exports=a()})(RL,function(){var r=1e3,a=6e4,s=36e5,l="millisecond",d="second",g="minute",f="hour",m="day",v="week",T="month",p="quarter",O="year",L="date",c="Invalid Date",N=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,F=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,G={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(C){var J=["th","st","nd","rd"],$=C%100;return"["+C+(J[($-20)%10]||J[$]||J[0])+"]"}},P=function(C,J,$){var re=String(C);return!re||re.length>=J?C:""+Array(J+1-re.length).join($)+C},Q={s:P,z:function(C){var J=-C.utcOffset(),$=Math.abs(J),re=Math.floor($/60),Y=$%60;return(J<=0?"+":"-")+P(re,2,"0")+":"+P(Y,2,"0")},m:function C(J,$){if(J.date()<$.date())return-C($,J);var re=12*($.year()-J.year())+($.month()-J.month()),Y=J.clone().add(re,T),ue=$-Y<0,de=J.clone().add(re+(ue?-1:1),T);return+(-(re+($-Y)/(ue?Y-de:de-Y))||0)},a:function(C){return C<0?Math.ceil(C)||0:Math.floor(C)},p:function(C){return{M:T,y:O,w:v,d:m,D:L,h:f,m:g,s:d,ms:l,Q:p}[C]||String(C||"").toLowerCase().replace(/s$/,"")},u:function(C){return C===void 0}},A="en",w={};w[A]=G;var K="$isDayjsObject",I=function(C){return C instanceof j||!(!C||!C[K])},z=function C(J,$,re){var Y;if(!J)return A;if(typeof J=="string"){var ue=J.toLowerCase();w[ue]&&(Y=ue),$&&(w[ue]=$,Y=ue);var de=J.split("-");if(!Y&&de.length>1)return C(de[0])}else{var fe=J.name;w[fe]=J,Y=fe}return!re&&Y&&(A=Y),Y||!re&&A},Z=function(C,J){if(I(C))return C.clone();var $=typeof J=="object"?J:{};return $.date=C,$.args=arguments,new j($)},X=Q;X.l=z,X.i=I,X.w=function(C,J){return Z(C,{locale:J.$L,utc:J.$u,x:J.$x,$offset:J.$offset})};var j=function(){function C($){this.$L=z($.locale,null,!0),this.parse($),this.$x=this.$x||$.x||{},this[K]=!0}var J=C.prototype;return J.parse=function($){this.$d=function(re){var Y=re.date,ue=re.utc;if(Y===null)return new Date(NaN);if(X.u(Y))return new Date;if(Y instanceof Date)return new Date(Y);if(typeof Y=="string"&&!/Z$/i.test(Y)){var de=Y.match(N);if(de){var fe=de[2]-1||0,De=(de[7]||"0").substring(0,3);return ue?new Date(Date.UTC(de[1],fe,de[3]||1,de[4]||0,de[5]||0,de[6]||0,De)):new Date(de[1],fe,de[3]||1,de[4]||0,de[5]||0,de[6]||0,De)}}return new Date(Y)}($),this.init()},J.init=function(){var $=this.$d;this.$y=$.getFullYear(),this.$M=$.getMonth(),this.$D=$.getDate(),this.$W=$.getDay(),this.$H=$.getHours(),this.$m=$.getMinutes(),this.$s=$.getSeconds(),this.$ms=$.getMilliseconds()},J.$utils=function(){return X},J.isValid=function(){return this.$d.toString()!==c},J.isSame=function($,re){var Y=Z($);return this.startOf(re)<=Y&&Y<=this.endOf(re)},J.isAfter=function($,re){return Z($)<this.startOf(re)},J.isBefore=function($,re){return this.endOf(re)<Z($)},J.$g=function($,re,Y){return X.u($)?this[re]:this.set(Y,$)},J.unix=function(){return Math.floor(this.valueOf()/1e3)},J.valueOf=function(){return this.$d.getTime()},J.startOf=function($,re){var Y=this,ue=!!X.u(re)||re,de=X.p($),fe=function(ln,Qe){var an=X.w(Y.$u?Date.UTC(Y.$y,Qe,ln):new Date(Y.$y,Qe,ln),Y);return ue?an:an.endOf(m)},De=function(ln,Qe){return X.w(Y.toDate()[ln].apply(Y.toDate("s"),(ue?[0,0,0,0]:[23,59,59,999]).slice(Qe)),Y)},qe=this.$W,Je=this.$M,We=this.$D,mn="set"+(this.$u?"UTC":"");switch(de){case O:return ue?fe(1,0):fe(31,11);case T:return ue?fe(1,Je):fe(0,Je+1);case v:var Dn=this.$locale().weekStart||0,vn=(qe<Dn?qe+7:qe)-Dn;return fe(ue?We-vn:We+(6-vn),Je);case m:case L:return De(mn+"Hours",0);case f:return De(mn+"Minutes",1);case g:return De(mn+"Seconds",2);case d:return De(mn+"Milliseconds",3);default:return this.clone()}},J.endOf=function($){return this.startOf($,!1)},J.$set=function($,re){var Y,ue=X.p($),de="set"+(this.$u?"UTC":""),fe=(Y={},Y[m]=de+"Date",Y[L]=de+"Date",Y[T]=de+"Month",Y[O]=de+"FullYear",Y[f]=de+"Hours",Y[g]=de+"Minutes",Y[d]=de+"Seconds",Y[l]=de+"Milliseconds",Y)[ue],De=ue===m?this.$D+(re-this.$W):re;if(ue===T||ue===O){var qe=this.clone().set(L,1);qe.$d[fe](De),qe.init(),this.$d=qe.set(L,Math.min(this.$D,qe.daysInMonth())).$d}else fe&&this.$d[fe](De);return this.init(),this},J.set=function($,re){return this.clone().$set($,re)},J.get=function($){return this[X.p($)]()},J.add=function($,re){var Y,ue=this;$=Number($);var de=X.p(re),fe=function(Je){var We=Z(ue);return X.w(We.date(We.date()+Math.round(Je*$)),ue)};if(de===T)return this.set(T,this.$M+$);if(de===O)return this.set(O,this.$y+$);if(de===m)return fe(1);if(de===v)return fe(7);var De=(Y={},Y[g]=a,Y[f]=s,Y[d]=r,Y)[de]||1,qe=this.$d.getTime()+$*De;return X.w(qe,this)},J.subtract=function($,re){return this.add(-1*$,re)},J.format=function($){var re=this,Y=this.$locale();if(!this.isValid())return Y.invalidDate||c;var ue=$||"YYYY-MM-DDTHH:mm:ssZ",de=X.z(this),fe=this.$H,De=this.$m,qe=this.$M,Je=Y.weekdays,We=Y.months,mn=Y.meridiem,Dn=function(Qe,an,yn,Fn){return Qe&&(Qe[an]||Qe(re,ue))||yn[an].slice(0,Fn)},vn=function(Qe){return X.s(fe%12||12,Qe,"0")},ln=mn||function(Qe,an,yn){var Fn=Qe<12?"AM":"PM";return yn?Fn.toLowerCase():Fn};return ue.replace(F,function(Qe,an){return an||function(yn){switch(yn){case"YY":return String(re.$y).slice(-2);case"YYYY":return X.s(re.$y,4,"0");case"M":return qe+1;case"MM":return X.s(qe+1,2,"0");case"MMM":return Dn(Y.monthsShort,qe,We,3);case"MMMM":return Dn(We,qe);case"D":return re.$D;case"DD":return X.s(re.$D,2,"0");case"d":return String(re.$W);case"dd":return Dn(Y.weekdaysMin,re.$W,Je,2);case"ddd":return Dn(Y.weekdaysShort,re.$W,Je,3);case"dddd":return Je[re.$W];case"H":return String(fe);case"HH":return X.s(fe,2,"0");case"h":return vn(1);case"hh":return vn(2);case"a":return ln(fe,De,!0);case"A":return ln(fe,De,!1);case"m":return String(De);case"mm":return X.s(De,2,"0");case"s":return String(re.$s);case"ss":return X.s(re.$s,2,"0");case"SSS":return X.s(re.$ms,3,"0");case"Z":return de}return null}(Qe)||de.replace(":","")})},J.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},J.diff=function($,re,Y){var ue,de=this,fe=X.p(re),De=Z($),qe=(De.utcOffset()-this.utcOffset())*a,Je=this-De,We=function(){return X.m(de,De)};switch(fe){case O:ue=We()/12;break;case T:ue=We();break;case p:ue=We()/3;break;case v:ue=(Je-qe)/6048e5;break;case m:ue=(Je-qe)/864e5;break;case f:ue=Je/s;break;case g:ue=Je/a;break;case d:ue=Je/r;break;default:ue=Je}return Y?ue:X.a(ue)},J.daysInMonth=function(){return this.endOf(T).$D},J.$locale=function(){return w[this.$L]},J.locale=function($,re){if(!$)return this.$L;var Y=this.clone(),ue=z($,re,!0);return ue&&(Y.$L=ue),Y},J.clone=function(){return X.w(this.$d,this)},J.toDate=function(){return new Date(this.valueOf())},J.toJSON=function(){return this.isValid()?this.toISOString():null},J.toISOString=function(){return this.$d.toISOString()},J.toString=function(){return this.$d.toUTCString()},C}(),ne=j.prototype;return Z.prototype=ne,[["$ms",l],["$s",d],["$m",g],["$H",f],["$W",m],["$M",T],["$y",O],["$D",L]].forEach(function(C){ne[C[1]]=function(J){return this.$g(J,C[0],C[1])}}),Z.extend=function(C,J){return C.$i||(C(J,j,Z),C.$i=!0),Z},Z.locale=z,Z.isDayjs=I,Z.unix=function(C){return Z(1e3*C)},Z.en=w[A],Z.Ls=w,Z.p={},Z})}(ol)),ol.exports}var SL=_L();const ns=AL(SL);var xr=function(){return xr=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},xr.apply(this,arguments)};function Hl(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r}function NL(e,t,r){if(arguments.length===2)for(var a=0,s=t.length,l;a<s;a++)(l||!(a in t))&&(l||(l=Array.prototype.slice.call(t,0,a)),l[a]=t[a]);return e.concat(l||Array.prototype.slice.call(t))}var ll=function(e,t){return ll=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(r[s]=a[s])},ll(e,t)};function _t(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");ll(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var $e=function(){return $e=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},$e.apply(this,arguments)};function xt(e,t,r){if(arguments.length===2)for(var a=0,s=t.length,l;a<s;a++)(l||!(a in t))&&(l||(l=Array.prototype.slice.call(t,0,a)),l[a]=t[a]);return e.concat(l||Array.prototype.slice.call(t))}function cr(e,t){var r=t&&t.cache?t.cache:FL,a=t&&t.serializer?t.serializer:KL,s=t&&t.strategy?t.strategy:PL;return s(e,{cache:r,serializer:a})}function IL(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Vm(e,t,r,a){var s=IL(a)?a:r(a),l=t.get(s);return typeof l>"u"&&(l=e.call(this,a),t.set(s,l)),l}function jm(e,t,r){var a=Array.prototype.slice.call(arguments,3),s=r(a),l=t.get(s);return typeof l>"u"&&(l=e.apply(this,a),t.set(s,l)),l}function xl(e,t,r,a,s){return r.bind(t,e,a,s)}function PL(e,t){var r=e.length===1?Vm:jm;return xl(e,this,r,t.cache.create(),t.serializer)}function OL(e,t){return xl(e,this,jm,t.cache.create(),t.serializer)}function LL(e,t){return xl(e,this,Vm,t.cache.create(),t.serializer)}var KL=function(){return JSON.stringify(arguments)},DL=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(t){return this.cache[t]},e.prototype.set=function(t,r){this.cache[t]=r},e}(),FL={create:function(){return new DL}},hr={variadic:OL,monadic:LL},ul=function(e,t){return ul=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(r[s]=a[s])},ul(e,t)};function rs(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");ul(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var Sr=function(){return Sr=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Sr.apply(this,arguments)};function ML(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r}function Fo(e,t,r){if(arguments.length===2)for(var a=0,s=t.length,l;a<s;a++)(l||!(a in t))&&(l||(l=Array.prototype.slice.call(t,0,a)),l[a]=t[a]);return e.concat(l||Array.prototype.slice.call(t))}var Yi=function(){return Yi=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Yi.apply(this,arguments)},Pe;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Pe||(Pe={}));var xe;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(xe||(xe={}));var $t;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})($t||($t={}));function wk(e){return e.type===xe.literal}function BL(e){return e.type===xe.argument}function Um(e){return e.type===xe.number}function Hm(e){return e.type===xe.date}function xm(e){return e.type===xe.time}function Ym(e){return e.type===xe.select}function Cm(e){return e.type===xe.plural}function GL(e){return e.type===xe.pound}function $m(e){return e.type===xe.tag}function Jm(e){return!!(e&&typeof e=="object"&&e.type===$t.number)}function dl(e){return!!(e&&typeof e=="object"&&e.type===$t.dateTime)}var Wm=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,qL=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function wL(e){var t={};return e.replace(qL,function(r){var a=r.length;switch(r[0]){case"G":t.era=a===4?"long":a===5?"narrow":"short";break;case"y":t.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=a===4?"long":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][a-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][a-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][a-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][a-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][a-1];break;case"s":t.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),t}var Ze=function(){return Ze=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ze.apply(this,arguments)},VL=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function jL(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var t=e.split(VL).filter(function(p){return p.length>0}),r=[],a=0,s=t;a<s.length;a++){var l=s[a],d=l.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var g=d[0],f=d.slice(1),m=0,v=f;m<v.length;m++){var T=v[m];if(T.length===0)throw new Error("Invalid number skeleton")}r.push({stem:g,options:f})}return r}function UL(e){return e.replace(/^(.*?)-/,"")}var Vk=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,zm=/^(@+)?(\+|#+)?[rs]?$/g,HL=/(\*)(0+)|(#+)(0+)|(0+)/g,Xm=/^(0+)$/;function jk(e){var t={};return e[e.length-1]==="r"?t.roundingPriority="morePrecision":e[e.length-1]==="s"&&(t.roundingPriority="lessPrecision"),e.replace(zm,function(r,a,s){return typeof s!="string"?(t.minimumSignificantDigits=a.length,t.maximumSignificantDigits=a.length):s==="+"?t.minimumSignificantDigits=a.length:a[0]==="#"?t.maximumSignificantDigits=a.length:(t.minimumSignificantDigits=a.length,t.maximumSignificantDigits=a.length+(typeof s=="string"?s.length:0)),""}),t}function Zm(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function xL(e){var t;if(e[0]==="E"&&e[1]==="E"?(t={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(t={notation:"scientific"},e=e.slice(1)),t){var r=e.slice(0,2);if(r==="+!"?(t.signDisplay="always",e=e.slice(2)):r==="+?"&&(t.signDisplay="exceptZero",e=e.slice(2)),!Xm.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function Uk(e){var t={},r=Zm(e);return r||t}function YL(e){for(var t={},r=0,a=e;r<a.length;r++){var s=a[r];switch(s.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=s.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=UL(s.options[0]);continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=Ze(Ze(Ze({},t),{notation:"scientific"}),s.options.reduce(function(f,m){return Ze(Ze({},f),Uk(m))},{}));continue;case"engineering":t=Ze(Ze(Ze({},t),{notation:"engineering"}),s.options.reduce(function(f,m){return Ze(Ze({},f),Uk(m))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":t.roundingMode="floor";continue;case"rounding-mode-ceiling":t.roundingMode="ceil";continue;case"rounding-mode-down":t.roundingMode="trunc";continue;case"rounding-mode-up":t.roundingMode="expand";continue;case"rounding-mode-half-even":t.roundingMode="halfEven";continue;case"rounding-mode-half-down":t.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":t.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(HL,function(f,m,v,T,p,O){if(m)t.minimumIntegerDigits=v.length;else{if(T&&p)throw new Error("We currently do not support maximum integer digits");if(O)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Xm.test(s.stem)){t.minimumIntegerDigits=s.stem.length;continue}if(Vk.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(Vk,function(f,m,v,T,p,O){return v==="*"?t.minimumFractionDigits=m.length:T&&T[0]==="#"?t.maximumFractionDigits=T.length:p&&O?(t.minimumFractionDigits=p.length,t.maximumFractionDigits=p.length+O.length):(t.minimumFractionDigits=m.length,t.maximumFractionDigits=m.length),""});var l=s.options[0];l==="w"?t=Ze(Ze({},t),{trailingZeroDisplay:"stripIfInteger"}):l&&(t=Ze(Ze({},t),jk(l)));continue}if(zm.test(s.stem)){t=Ze(Ze({},t),jk(s.stem));continue}var d=Zm(s.stem);d&&(t=Ze(Ze({},t),d));var g=xL(s.stem);g&&(t=Ze(Ze({},t),g))}return t}var Fi={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function CL(e,t){for(var r="",a=0;a<e.length;a++){var s=e.charAt(a);if(s==="j"){for(var l=0;a+1<e.length&&e.charAt(a+1)===s;)l++,a++;var d=1+(l&1),g=l<2?1:3+(l>>1),f="a",m=$L(t);for((m=="H"||m=="k")&&(g=0);g-- >0;)r+=f;for(;d-- >0;)r=m+r}else s==="J"?r+="H":r+=s}return r}function $L(e){var t=e.hourCycle;if(t===void 0&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,a;r!=="root"&&(a=e.maximize().region);var s=Fi[a||""]||Fi[r||""]||Fi["".concat(r,"-001")]||Fi["001"];return s[0]}var Mo,JL=new RegExp("^".concat(Wm.source,"*")),WL=new RegExp("".concat(Wm.source,"*$"));function Le(e,t){return{start:e,end:t}}var zL=!!String.prototype.startsWith&&"_a".startsWith("a",1),XL=!!String.fromCodePoint,ZL=!!Object.fromEntries,QL=!!String.prototype.codePointAt,e1=!!String.prototype.trimStart,n1=!!String.prototype.trimEnd,r1=!!Number.isSafeInteger,t1=r1?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},gl=!0;try{var a1=ev("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");gl=((Mo=a1.exec("a"))===null||Mo===void 0?void 0:Mo[0])==="a"}catch{gl=!1}var Hk=zL?function(e,t,r){return e.startsWith(t,r)}:function(e,t,r){return e.slice(r,r+t.length)===t},kl=XL?String.fromCodePoint:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r="",a=e.length,s=0,l;a>s;){if(l=e[s++],l>1114111)throw RangeError(l+" is not a valid code point");r+=l<65536?String.fromCharCode(l):String.fromCharCode(((l-=65536)>>10)+55296,l%1024+56320)}return r},xk=ZL?Object.fromEntries:function(e){for(var t={},r=0,a=e;r<a.length;r++){var s=a[r],l=s[0],d=s[1];t[l]=d}return t},Qm=QL?function(e,t){return e.codePointAt(t)}:function(e,t){var r=e.length;if(!(t<0||t>=r)){var a=e.charCodeAt(t),s;return a<55296||a>56319||t+1===r||(s=e.charCodeAt(t+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},i1=e1?function(e){return e.trimStart()}:function(e){return e.replace(JL,"")},s1=n1?function(e){return e.trimEnd()}:function(e){return e.replace(WL,"")};function ev(e,t){return new RegExp(e,t)}var fl;if(gl){var Yk=ev("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");fl=function(e,t){var r;Yk.lastIndex=t;var a=Yk.exec(e);return(r=a[1])!==null&&r!==void 0?r:""}}else fl=function(e,t){for(var r=[];;){var a=Qm(e,t);if(a===void 0||nv(a)||d1(a))break;r.push(a),t+=a>=65536?2:1}return kl.apply(void 0,r)};var o1=function(){function e(t,r){r===void 0&&(r={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(t,r,a){for(var s=[];!this.isEOF();){var l=this.char();if(l===123){var d=this.parseArgument(t,a);if(d.err)return d;s.push(d.val)}else{if(l===125&&t>0)break;if(l===35&&(r==="plural"||r==="selectordinal")){var g=this.clonePosition();this.bump(),s.push({type:xe.pound,location:Le(g,this.clonePosition())})}else if(l===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(Pe.UNMATCHED_CLOSING_TAG,Le(this.clonePosition(),this.clonePosition()))}else if(l===60&&!this.ignoreTag&&ml(this.peek()||0)){var d=this.parseTag(t,r);if(d.err)return d;s.push(d.val)}else{var d=this.parseLiteral(t,r);if(d.err)return d;s.push(d.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(t,r){var a=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:xe.literal,value:"<".concat(s,"/>"),location:Le(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var l=this.parseMessage(t+1,r,!0);if(l.err)return l;var d=l.val,g=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!ml(this.char()))return this.error(Pe.INVALID_TAG,Le(g,this.clonePosition()));var f=this.clonePosition(),m=this.parseTagName();return s!==m?this.error(Pe.UNMATCHED_CLOSING_TAG,Le(f,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:xe.tag,value:s,children:d,location:Le(a,this.clonePosition())},err:null}:this.error(Pe.INVALID_TAG,Le(g,this.clonePosition())))}else return this.error(Pe.UNCLOSED_TAG,Le(a,this.clonePosition()))}else return this.error(Pe.INVALID_TAG,Le(a,this.clonePosition()))},e.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&u1(this.char());)this.bump();return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(t,r){for(var a=this.clonePosition(),s="";;){var l=this.tryParseQuote(r);if(l){s+=l;continue}var d=this.tryParseUnquoted(t,r);if(d){s+=d;continue}var g=this.tryParseLeftAngleBracket();if(g){s+=g;continue}break}var f=Le(a,this.clonePosition());return{val:{type:xe.literal,value:s,location:f},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!l1(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(t){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(t==="plural"||t==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(a);this.bump()}return kl.apply(void 0,r)},e.prototype.tryParseUnquoted=function(t,r){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(r==="plural"||r==="selectordinal")||a===125&&t>0?null:(this.bump(),kl(a))},e.prototype.parseArgument=function(t,r){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Pe.EXPECT_ARGUMENT_CLOSING_BRACE,Le(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Pe.EMPTY_ARGUMENT,Le(a,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(Pe.MALFORMED_ARGUMENT,Le(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Pe.EXPECT_ARGUMENT_CLOSING_BRACE,Le(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:xe.argument,value:s,location:Le(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Pe.EXPECT_ARGUMENT_CLOSING_BRACE,Le(a,this.clonePosition())):this.parseArgumentOptions(t,r,s,a);default:return this.error(Pe.MALFORMED_ARGUMENT,Le(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),r=this.offset(),a=fl(this.message,r),s=r+a.length;this.bumpTo(s);var l=this.clonePosition(),d=Le(t,l);return{value:a,location:d}},e.prototype.parseArgumentOptions=function(t,r,a,s){var l,d=this.clonePosition(),g=this.parseIdentifierIfPossible().value,f=this.clonePosition();switch(g){case"":return this.error(Pe.EXPECT_ARGUMENT_TYPE,Le(d,f));case"number":case"date":case"time":{this.bumpSpace();var m=null;if(this.bumpIf(",")){this.bumpSpace();var v=this.clonePosition(),T=this.parseSimpleArgStyleIfPossible();if(T.err)return T;var p=s1(T.val);if(p.length===0)return this.error(Pe.EXPECT_ARGUMENT_STYLE,Le(this.clonePosition(),this.clonePosition()));var O=Le(v,this.clonePosition());m={style:p,styleLocation:O}}var L=this.tryParseArgumentClose(s);if(L.err)return L;var c=Le(s,this.clonePosition());if(m&&Hk(m==null?void 0:m.style,"::",0)){var N=i1(m.style.slice(2));if(g==="number"){var T=this.parseNumberSkeletonFromString(N,m.styleLocation);return T.err?T:{val:{type:xe.number,value:a,location:c,style:T.val},err:null}}else{if(N.length===0)return this.error(Pe.EXPECT_DATE_TIME_SKELETON,c);var F=N;this.locale&&(F=CL(N,this.locale));var p={type:$t.dateTime,pattern:F,location:m.styleLocation,parsedOptions:this.shouldParseSkeletons?wL(F):{}},G=g==="date"?xe.date:xe.time;return{val:{type:G,value:a,location:c,style:p},err:null}}}return{val:{type:g==="number"?xe.number:g==="date"?xe.date:xe.time,value:a,location:c,style:(l=m==null?void 0:m.style)!==null&&l!==void 0?l:null},err:null}}case"plural":case"selectordinal":case"select":{var P=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Pe.EXPECT_SELECT_ARGUMENT_OPTIONS,Le(P,Yi({},P)));this.bumpSpace();var Q=this.parseIdentifierIfPossible(),A=0;if(g!=="select"&&Q.value==="offset"){if(!this.bumpIf(":"))return this.error(Pe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Le(this.clonePosition(),this.clonePosition()));this.bumpSpace();var T=this.tryParseDecimalInteger(Pe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Pe.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(T.err)return T;this.bumpSpace(),Q=this.parseIdentifierIfPossible(),A=T.val}var w=this.tryParsePluralOrSelectOptions(t,g,r,Q);if(w.err)return w;var L=this.tryParseArgumentClose(s);if(L.err)return L;var K=Le(s,this.clonePosition());return g==="select"?{val:{type:xe.select,value:a,options:xk(w.val),location:K},err:null}:{val:{type:xe.plural,value:a,options:xk(w.val),offset:A,pluralType:g==="plural"?"cardinal":"ordinal",location:K},err:null}}default:return this.error(Pe.INVALID_ARGUMENT_TYPE,Le(d,f))}},e.prototype.tryParseArgumentClose=function(t){return this.isEOF()||this.char()!==125?this.error(Pe.EXPECT_ARGUMENT_CLOSING_BRACE,Le(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,r=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Pe.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Le(s,this.clonePosition()));this.bump();break}case 123:{t+=1,this.bump();break}case 125:{if(t>0)t-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(t,r){var a=[];try{a=jL(t)}catch{return this.error(Pe.INVALID_NUMBER_SKELETON,r)}return{val:{type:$t.number,tokens:a,location:r,parsedOptions:this.shouldParseSkeletons?YL(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(t,r,a,s){for(var l,d=!1,g=[],f=new Set,m=s.value,v=s.location;;){if(m.length===0){var T=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var p=this.tryParseDecimalInteger(Pe.EXPECT_PLURAL_ARGUMENT_SELECTOR,Pe.INVALID_PLURAL_ARGUMENT_SELECTOR);if(p.err)return p;v=Le(T,this.clonePosition()),m=this.message.slice(T.offset,this.offset())}else break}if(f.has(m))return this.error(r==="select"?Pe.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Pe.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,v);m==="other"&&(d=!0),this.bumpSpace();var O=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?Pe.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Pe.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Le(this.clonePosition(),this.clonePosition()));var L=this.parseMessage(t+1,r,a);if(L.err)return L;var c=this.tryParseArgumentClose(O);if(c.err)return c;g.push([m,{value:L.val,location:Le(O,this.clonePosition())}]),f.add(m),this.bumpSpace(),l=this.parseIdentifierIfPossible(),m=l.value,v=l.location}return g.length===0?this.error(r==="select"?Pe.EXPECT_SELECT_ARGUMENT_SELECTOR:Pe.EXPECT_PLURAL_ARGUMENT_SELECTOR,Le(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(Pe.MISSING_OTHER_CLAUSE,Le(this.clonePosition(),this.clonePosition())):{val:g,err:null}},e.prototype.tryParseDecimalInteger=function(t,r){var a=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var l=!1,d=0;!this.isEOF();){var g=this.char();if(g>=48&&g<=57)l=!0,d=d*10+(g-48),this.bump();else break}var f=Le(s,this.clonePosition());return l?(d*=a,t1(d)?{val:d,err:null}:this.error(r,f)):this.error(t,f)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var r=Qm(this.message,t);if(r===void 0)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(t,r){return{val:null,err:{kind:t,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var t=this.char();t===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},e.prototype.bumpIf=function(t){if(Hk(this.message,t,this.offset())){for(var r=0;r<t.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(t){var r=this.offset(),a=this.message.indexOf(t,r);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var r=this.offset();if(r===t)break;if(r>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&nv(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),r=this.offset(),a=this.message.charCodeAt(r+(t>=65536?2:1));return a??null},e}();function ml(e){return e>=97&&e<=122||e>=65&&e<=90}function l1(e){return ml(e)||e===47}function u1(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function nv(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function d1(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function vl(e){e.forEach(function(t){if(delete t.location,Ym(t)||Cm(t))for(var r in t.options)delete t.options[r].location,vl(t.options[r].value);else Um(t)&&Jm(t.style)||(Hm(t)||xm(t))&&dl(t.style)?delete t.style.location:$m(t)&&vl(t.children)})}function g1(e,t){t===void 0&&(t={}),t=Yi({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var r=new o1(e,t).parse();if(r.err){var a=SyntaxError(Pe[r.err.kind]);throw a.location=r.err.location,a.originalMessage=r.err.message,a}return t!=null&&t.captureLocation||vl(r.val),r.val}var Kr;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Kr||(Kr={}));var ot=function(e){rs(t,e);function t(r,a,s){var l=e.call(this,r)||this;return l.code=a,l.originalMessage=s,l}return t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),Ck=function(e){rs(t,e);function t(r,a,s,l){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(a,'". Options are "').concat(Object.keys(s).join('", "'),'"'),Kr.INVALID_VALUE,l)||this}return t}(ot),k1=function(e){rs(t,e);function t(r,a,s){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(a),Kr.INVALID_VALUE,s)||this}return t}(ot),f1=function(e){rs(t,e);function t(r,a){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(a,'"'),Kr.MISSING_VALUE,a)||this}return t}(ot),In;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(In||(In={}));function m1(e){return e.length<2?e:e.reduce(function(t,r){var a=t[t.length-1];return!a||a.type!==In.literal||r.type!==In.literal?t.push(r):a.value+=r.value,t},[])}function rv(e){return typeof e=="function"}function wi(e,t,r,a,s,l,d){if(e.length===1&&wk(e[0]))return[{type:In.literal,value:e[0].value}];for(var g=[],f=0,m=e;f<m.length;f++){var v=m[f];if(wk(v)){g.push({type:In.literal,value:v.value});continue}if(GL(v)){typeof l=="number"&&g.push({type:In.literal,value:r.getNumberFormat(t).format(l)});continue}var T=v.value;if(!(s&&T in s))throw new f1(T,d);var p=s[T];if(BL(v)){(!p||typeof p=="string"||typeof p=="number")&&(p=typeof p=="string"||typeof p=="number"?String(p):""),g.push({type:typeof p=="string"?In.literal:In.object,value:p});continue}if(Hm(v)){var O=typeof v.style=="string"?a.date[v.style]:dl(v.style)?v.style.parsedOptions:void 0;g.push({type:In.literal,value:r.getDateTimeFormat(t,O).format(p)});continue}if(xm(v)){var O=typeof v.style=="string"?a.time[v.style]:dl(v.style)?v.style.parsedOptions:a.time.medium;g.push({type:In.literal,value:r.getDateTimeFormat(t,O).format(p)});continue}if(Um(v)){var O=typeof v.style=="string"?a.number[v.style]:Jm(v.style)?v.style.parsedOptions:void 0;O&&O.scale&&(p=p*(O.scale||1)),g.push({type:In.literal,value:r.getNumberFormat(t,O).format(p)});continue}if($m(v)){var L=v.children,c=v.value,N=s[c];if(!rv(N))throw new k1(c,"function",d);var F=wi(L,t,r,a,s,l),G=N(F.map(function(A){return A.value}));Array.isArray(G)||(G=[G]),g.push.apply(g,G.map(function(A){return{type:typeof A=="string"?In.literal:In.object,value:A}}))}if(Ym(v)){var P=v.options[p]||v.options.other;if(!P)throw new Ck(v.value,p,Object.keys(v.options),d);g.push.apply(g,wi(P.value,t,r,a,s));continue}if(Cm(v)){var P=v.options["=".concat(p)];if(!P){if(!Intl.PluralRules)throw new ot(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Kr.MISSING_INTL_API,d);var Q=r.getPluralRules(t,{type:v.pluralType}).select(p-(v.offset||0));P=v.options[Q]||v.options.other}if(!P)throw new Ck(v.value,p,Object.keys(v.options),d);g.push.apply(g,wi(P.value,t,r,a,s,p-(v.offset||0)));continue}}return m1(g)}function v1(e,t){return t?Sr(Sr(Sr({},e||{}),t||{}),Object.keys(e).reduce(function(r,a){return r[a]=Sr(Sr({},e[a]),t[a]||{}),r},{})):e}function E1(e,t){return t?Object.keys(e).reduce(function(r,a){return r[a]=v1(e[a],t[a]),r},Sr({},e)):e}function Bo(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}function b1(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:cr(function(){for(var t,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((t=Intl.NumberFormat).bind.apply(t,Fo([void 0],r,!1)))},{cache:Bo(e.number),strategy:hr.variadic}),getDateTimeFormat:cr(function(){for(var t,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((t=Intl.DateTimeFormat).bind.apply(t,Fo([void 0],r,!1)))},{cache:Bo(e.dateTime),strategy:hr.variadic}),getPluralRules:cr(function(){for(var t,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((t=Intl.PluralRules).bind.apply(t,Fo([void 0],r,!1)))},{cache:Bo(e.pluralRules),strategy:hr.variadic})}}var tv=function(){function e(t,r,a,s){r===void 0&&(r=e.defaultLocale);var l=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(f){var m=l.formatToParts(f);if(m.length===1)return m[0].value;var v=m.reduce(function(T,p){return!T.length||p.type!==In.literal||typeof T[T.length-1]!="string"?T.push(p.value):T[T.length-1]+=p.value,T},[]);return v.length<=1?v[0]||"":v},this.formatToParts=function(f){return wi(l.ast,l.locales,l.formatters,l.formats,f,void 0,l.message)},this.resolvedOptions=function(){var f;return{locale:((f=l.resolvedLocale)===null||f===void 0?void 0:f.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=s||{};d.formatters;var g=ML(d,["formatters"]);this.ast=e.__parse(t,Sr(Sr({},g),{locale:this.resolvedLocale}))}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=E1(e.formats,a),this.formatters=s&&s.formatters||b1(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(t){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(t);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof t=="string"?t:t[0])}},e.__parse=g1,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Rt;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Rt||(Rt={}));var qa=function(e){_t(t,e);function t(r,a,s){var l=this,d=s?s instanceof Error?s:new Error(String(s)):void 0;return l=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(a,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,l.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(l,t),l}return t}(Error),T1=function(e){_t(t,e);function t(r,a){return e.call(this,Rt.UNSUPPORTED_FORMATTER,r,a)||this}return t}(qa),y1=function(e){_t(t,e);function t(r,a){return e.call(this,Rt.INVALID_CONFIG,r,a)||this}return t}(qa),$k=function(e){_t(t,e);function t(r,a){return e.call(this,Rt.MISSING_DATA,r,a)||this}return t}(qa),lr=function(e){_t(t,e);function t(r,a,s){var l=e.call(this,Rt.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(a,`
`),s)||this;return l.locale=a,l}return t}(qa),Go=function(e){_t(t,e);function t(r,a,s,l){var d=e.call(this,"".concat(r,`
MessageID: `).concat(s==null?void 0:s.id,`
Default Message: `).concat(s==null?void 0:s.defaultMessage,`
Description: `).concat(s==null?void 0:s.description,`
`),a,l)||this;return d.descriptor=s,d.locale=a,d}return t}(lr),p1=function(e){_t(t,e);function t(r,a){var s=e.call(this,Rt.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(a,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(l){var d;return(d=l.value)!==null&&d!==void 0?d:JSON.stringify(l)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=r,s}return t}(qa);function A1(e,t,r){if(r===void 0&&(r=Error),!e)throw new r(t)}function ea(e,t,r){return r===void 0&&(r={}),t.reduce(function(a,s){return s in e?a[s]=e[s]:s in r&&(a[s]=r[s]),a},{})}var c1=function(e){},h1=function(e){},av={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:c1,onWarn:h1};function iv(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function pt(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}function R1(e){e===void 0&&(e=iv());var t=Intl.RelativeTimeFormat,r=Intl.ListFormat,a=Intl.DisplayNames,s=cr(function(){for(var g,f=[],m=0;m<arguments.length;m++)f[m]=arguments[m];return new((g=Intl.DateTimeFormat).bind.apply(g,xt([void 0],f,!1)))},{cache:pt(e.dateTime),strategy:hr.variadic}),l=cr(function(){for(var g,f=[],m=0;m<arguments.length;m++)f[m]=arguments[m];return new((g=Intl.NumberFormat).bind.apply(g,xt([void 0],f,!1)))},{cache:pt(e.number),strategy:hr.variadic}),d=cr(function(){for(var g,f=[],m=0;m<arguments.length;m++)f[m]=arguments[m];return new((g=Intl.PluralRules).bind.apply(g,xt([void 0],f,!1)))},{cache:pt(e.pluralRules),strategy:hr.variadic});return{getDateTimeFormat:s,getNumberFormat:l,getMessageFormat:cr(function(g,f,m,v){return new tv(g,f,m,$e({formatters:{getNumberFormat:l,getDateTimeFormat:s,getPluralRules:d}},v||{}))},{cache:pt(e.message),strategy:hr.variadic}),getRelativeTimeFormat:cr(function(){for(var g=[],f=0;f<arguments.length;f++)g[f]=arguments[f];return new(t.bind.apply(t,xt([void 0],g,!1)))},{cache:pt(e.relativeTime),strategy:hr.variadic}),getPluralRules:d,getListFormat:cr(function(){for(var g=[],f=0;f<arguments.length;f++)g[f]=arguments[f];return new(r.bind.apply(r,xt([void 0],g,!1)))},{cache:pt(e.list),strategy:hr.variadic}),getDisplayNames:cr(function(){for(var g=[],f=0;f<arguments.length;f++)g[f]=arguments[f];return new(a.bind.apply(a,xt([void 0],g,!1)))},{cache:pt(e.displayNames),strategy:hr.variadic})}}function Yl(e,t,r,a){var s=e&&e[t],l;if(s&&(l=s[r]),l)return l;a(new T1("No ".concat(t," format named: ").concat(r)))}function Mi(e,t){return Object.keys(e).reduce(function(r,a){return r[a]=$e({timeZone:t},e[a]),r},{})}function Jk(e,t){var r=Object.keys($e($e({},e),t));return r.reduce(function(a,s){return a[s]=$e($e({},e[s]||{}),t[s]||{}),a},{})}function Wk(e,t){if(!t)return e;var r=tv.formats;return $e($e($e({},r),e),{date:Jk(Mi(r.date,t),Mi(e.date||{},t)),time:Jk(Mi(r.time,t),Mi(e.time||{},t))})}var El=function(e,t,r,a,s){var l=e.locale,d=e.formats,g=e.messages,f=e.defaultLocale,m=e.defaultFormats,v=e.fallbackOnEmptyString,T=e.onError,p=e.timeZone,O=e.defaultRichTextElements;r===void 0&&(r={id:""});var L=r.id,c=r.defaultMessage;A1(!!L,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var N=String(L),F=g&&Object.prototype.hasOwnProperty.call(g,N)&&g[N];if(Array.isArray(F)&&F.length===1&&F[0].type===xe.literal)return F[0].value;if(!a&&F&&typeof F=="string"&&!O)return F.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=$e($e({},O),a||{}),d=Wk(d,p),m=Wk(m,p),!F){if(v===!1&&F==="")return F;if((!c||l&&l.toLowerCase()!==f.toLowerCase())&&T(new p1(r,l)),c)try{var G=t.getMessageFormat(c,f,m,s);return G.format(a)}catch(P){return T(new Go('Error formatting default message for: "'.concat(N,'", rendering default message verbatim'),l,r,P)),typeof c=="string"?c:N}return N}try{var G=t.getMessageFormat(F,l,d,$e({formatters:t},s||{}));return G.format(a)}catch(P){T(new Go('Error formatting message: "'.concat(N,'", using ').concat(c?"default message":"id"," as fallback."),l,r,P))}if(c)try{var G=t.getMessageFormat(c,f,m,s);return G.format(a)}catch(P){T(new Go('Error formatting the default message for: "'.concat(N,'", rendering message verbatim'),l,r,P))}return typeof F=="string"?F:typeof c=="string"?c:N},_1=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function wa(e,t,r,a){var s=e.locale,l=e.formats,d=e.onError,g=e.timeZone;a===void 0&&(a={});var f=a.format,m=$e($e({},g&&{timeZone:g}),f&&Yl(l,t,f,d)),v=ea(a,_1,m);return t==="time"&&!v.hour&&!v.minute&&!v.second&&!v.timeStyle&&!v.dateStyle&&(v=$e($e({},v),{hour:"numeric",minute:"numeric"})),r(s,v)}function S1(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],l=r[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return wa(e,"date",t,d).format(g)}catch(f){e.onError(new lr("Error formatting date.",e.locale,f))}return String(g)}function N1(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],l=r[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return wa(e,"time",t,d).format(g)}catch(f){e.onError(new lr("Error formatting time.",e.locale,f))}return String(g)}function I1(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],l=r[1],d=r[2],g=d===void 0?{}:d,f=typeof s=="string"?new Date(s||0):s,m=typeof l=="string"?new Date(l||0):l;try{return wa(e,"dateTimeRange",t,g).formatRange(f,m)}catch(v){e.onError(new lr("Error formatting date time range.",e.locale,v))}return String(f)}function P1(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],l=r[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return wa(e,"date",t,d).formatToParts(g)}catch(f){e.onError(new lr("Error formatting date.",e.locale,f))}return[]}function O1(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],l=r[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return wa(e,"time",t,d).formatToParts(g)}catch(f){e.onError(new lr("Error formatting time.",e.locale,f))}return[]}var L1=["style","type","fallback","languageDisplay"];function K1(e,t,r,a){var s=e.locale,l=e.onError,d=Intl.DisplayNames;d||l(new ot(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Kr.MISSING_INTL_API));var g=ea(a,L1);try{return t(s,g).of(r)}catch(f){l(new lr("Error formatting display name.",s,f))}}var D1=["type","style"],zk=Date.now();function F1(e){return"".concat(zk,"_").concat(e,"_").concat(zk)}function M1(e,t,r,a){a===void 0&&(a={});var s=sv(e,t,r,a).reduce(function(l,d){var g=d.value;return typeof g!="string"?l.push(g):typeof l[l.length-1]=="string"?l[l.length-1]+=g:l.push(g),l},[]);return s.length===1?s[0]:s.length===0?"":s}function sv(e,t,r,a){var s=e.locale,l=e.onError;a===void 0&&(a={});var d=Intl.ListFormat;d||l(new ot(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Kr.MISSING_INTL_API));var g=ea(a,D1);try{var f={},m=r.map(function(v,T){if(typeof v=="object"){var p=F1(T);return f[p]=v,p}return String(v)});return t(s,g).formatToParts(m).map(function(v){return v.type==="literal"?v:$e($e({},v),{value:f[v.value]||v.value})})}catch(v){l(new lr("Error formatting list.",s,v))}return r}var B1=["type"];function G1(e,t,r,a){var s=e.locale,l=e.onError;a===void 0&&(a={}),Intl.PluralRules||l(new ot(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Kr.MISSING_INTL_API));var d=ea(a,B1);try{return t(s,d).select(r)}catch(g){l(new lr("Error formatting plural.",s,g))}return"other"}var q1=["numeric","style"];function w1(e,t,r){var a=e.locale,s=e.formats,l=e.onError;r===void 0&&(r={});var d=r.format,g=!!d&&Yl(s,"relative",d,l)||{},f=ea(r,q1,g);return t(a,f)}function V1(e,t,r,a,s){s===void 0&&(s={}),a||(a="second");var l=Intl.RelativeTimeFormat;l||e.onError(new ot(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Kr.MISSING_INTL_API));try{return w1(e,t,s).format(r,a)}catch(d){e.onError(new lr("Error formatting relative time.",e.locale,d))}return String(r)}var j1=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function ov(e,t,r){var a=e.locale,s=e.formats,l=e.onError;r===void 0&&(r={});var d=r.format,g=d&&Yl(s,"number",d,l)||{},f=ea(r,j1,g);return t(a,f)}function U1(e,t,r,a){a===void 0&&(a={});try{return ov(e,t,a).format(r)}catch(s){e.onError(new lr("Error formatting number.",e.locale,s))}return String(r)}function H1(e,t,r,a){a===void 0&&(a={});try{return ov(e,t,a).formatToParts(r)}catch(s){e.onError(new lr("Error formatting number.",e.locale,s))}return[]}function x1(e){var t=e[Object.keys(e)[0]];return typeof t=="string"}function Y1(e){e.onWarn&&e.defaultRichTextElements&&x1(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function C1(e,t){var r=R1(t),a=$e($e({},av),e),s=a.locale,l=a.defaultLocale,d=a.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&d?d(new $k('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&d&&d(new $k('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new y1('"locale" was not configured, using "'.concat(l,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),Y1(a),$e($e({},a),{formatters:r,formatNumber:U1.bind(null,a,r.getNumberFormat),formatNumberToParts:H1.bind(null,a,r.getNumberFormat),formatRelativeTime:V1.bind(null,a,r.getRelativeTimeFormat),formatDate:S1.bind(null,a,r.getDateTimeFormat),formatDateToParts:P1.bind(null,a,r.getDateTimeFormat),formatTime:N1.bind(null,a,r.getDateTimeFormat),formatDateTimeRange:I1.bind(null,a,r.getDateTimeFormat),formatTimeToParts:O1.bind(null,a,r.getDateTimeFormat),formatPlural:G1.bind(null,a,r.getPluralRules),formatMessage:El.bind(null,a,r),$t:El.bind(null,a,r),formatList:M1.bind(null,a,r.getListFormat),formatListToParts:sv.bind(null,a,r.getListFormat),formatDisplayName:K1.bind(null,a,r.getDisplayNames)})}function $1(e,t,r){if(r===void 0&&(r=Error),!e)throw new r(t)}function J1(e){$1(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var W1=xr(xr({},av),{textComponent:U.Fragment});function z1(e){return function(t){return e(U.Children.toArray(t))}}var Xk={exports:{}},Be={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zk;function X1(){if(Zk)return Be;Zk=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,g=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,v=e?Symbol.for("react.forward_ref"):60112,T=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,O=e?Symbol.for("react.memo"):60115,L=e?Symbol.for("react.lazy"):60116,c=e?Symbol.for("react.block"):60121,N=e?Symbol.for("react.fundamental"):60117,F=e?Symbol.for("react.responder"):60118,G=e?Symbol.for("react.scope"):60119;function P(A){if(typeof A=="object"&&A!==null){var w=A.$$typeof;switch(w){case t:switch(A=A.type,A){case f:case m:case a:case l:case s:case T:return A;default:switch(A=A&&A.$$typeof,A){case g:case v:case L:case O:case d:return A;default:return w}}case r:return w}}}function Q(A){return P(A)===m}return Be.AsyncMode=f,Be.ConcurrentMode=m,Be.ContextConsumer=g,Be.ContextProvider=d,Be.Element=t,Be.ForwardRef=v,Be.Fragment=a,Be.Lazy=L,Be.Memo=O,Be.Portal=r,Be.Profiler=l,Be.StrictMode=s,Be.Suspense=T,Be.isAsyncMode=function(A){return Q(A)||P(A)===f},Be.isConcurrentMode=Q,Be.isContextConsumer=function(A){return P(A)===g},Be.isContextProvider=function(A){return P(A)===d},Be.isElement=function(A){return typeof A=="object"&&A!==null&&A.$$typeof===t},Be.isForwardRef=function(A){return P(A)===v},Be.isFragment=function(A){return P(A)===a},Be.isLazy=function(A){return P(A)===L},Be.isMemo=function(A){return P(A)===O},Be.isPortal=function(A){return P(A)===r},Be.isProfiler=function(A){return P(A)===l},Be.isStrictMode=function(A){return P(A)===s},Be.isSuspense=function(A){return P(A)===T},Be.isValidElementType=function(A){return typeof A=="string"||typeof A=="function"||A===a||A===m||A===l||A===s||A===T||A===p||typeof A=="object"&&A!==null&&(A.$$typeof===L||A.$$typeof===O||A.$$typeof===d||A.$$typeof===g||A.$$typeof===v||A.$$typeof===N||A.$$typeof===F||A.$$typeof===G||A.$$typeof===c)},Be.typeOf=P,Be}var Qk;function Z1(){return Qk||(Qk=1,Xk.exports=X1()),Xk.exports}var qo,ef;function Q1(){if(ef)return qo;ef=1;var e=Z1(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=a,l[e.Memo]=s;function d(L){return e.isMemo(L)?s:l[L.$$typeof]||t}var g=Object.defineProperty,f=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,T=Object.getPrototypeOf,p=Object.prototype;function O(L,c,N){if(typeof c!="string"){if(p){var F=T(c);F&&F!==p&&O(L,F,N)}var G=f(c);m&&(G=G.concat(m(c)));for(var P=d(L),Q=d(c),A=0;A<G.length;++A){var w=G[A];if(!r[w]&&!(N&&N[w])&&!(Q&&Q[w])&&!(P&&P[w])){var K=v(c,w);try{g(L,w,K)}catch{}}}}return L}return qo=O,qo}Q1();var Cl=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=U.createContext(null)):U.createContext(null);Cl.Consumer;Cl.Provider;var eK=Cl;function lv(){var e=U.useContext(eK);return J1(e),e}var bl;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(bl||(bl={}));var Tl;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Tl||(Tl={}));function uv(e){var t=function(r){var a=lv(),s=r.value,l=r.children,d=Hl(r,["value","children"]),g=typeof s=="string"?new Date(s||0):s,f=e==="formatDate"?a.formatDateToParts(g,d):a.formatTimeToParts(g,d);return l(f)};return t.displayName=Tl[e],t}function Va(e){var t=function(r){var a=lv(),s=r.value,l=r.children,d=Hl(r,["value","children"]),g=a[e](s,d);if(typeof l=="function")return l(g);var f=a.textComponent||U.Fragment;return U.createElement(f,null,g)};return t.displayName=bl[e],t}function dv(e){return e&&Object.keys(e).reduce(function(t,r){var a=e[r];return t[r]=rv(a)?z1(a):a,t},{})}var nf=function(e,t,r,a){for(var s=[],l=4;l<arguments.length;l++)s[l-4]=arguments[l];var d=dv(a),g=El.apply(void 0,NL([e,t,r,d],s,!1));return Array.isArray(g)?U.Children.toArray(g):g},nK=function(e,t){var r=e.defaultRichTextElements,a=Hl(e,["defaultRichTextElements"]),s=dv(r),l=C1(xr(xr(xr({},W1),a),{defaultRichTextElements:s}),t),d={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:s};return xr(xr({},l),{formatMessage:nf.bind(null,d,l.formatters),$t:nf.bind(null,d,l.formatters)})};Va("formatDate");Va("formatTime");Va("formatNumber");Va("formatList");Va("formatDisplayName");uv("formatDate");uv("formatTime");function $l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yl={exports:{}},rK=yl.exports,rf;function tK(){return rf||(rf=1,function(e,t){(function(r,a){e.exports=a()})(rK,function(){var r,a,s=1e3,l=6e4,d=36e5,g=864e5,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=31536e6,v=2628e6,T=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,p={years:m,months:v,days:g,hours:d,minutes:l,seconds:s,milliseconds:1,weeks:6048e5},O=function(w){return w instanceof Q},L=function(w,K,I){return new Q(w,I,K.$l)},c=function(w){return a.p(w)+"s"},N=function(w){return w<0},F=function(w){return N(w)?Math.ceil(w):Math.floor(w)},G=function(w){return Math.abs(w)},P=function(w,K){return w?N(w)?{negative:!0,format:""+G(w)+K}:{negative:!1,format:""+w+K}:{negative:!1,format:""}},Q=function(){function w(I,z,Z){var X=this;if(this.$d={},this.$l=Z,I===void 0&&(this.$ms=0,this.parseFromMilliseconds()),z)return L(I*p[c(z)],this);if(typeof I=="number")return this.$ms=I,this.parseFromMilliseconds(),this;if(typeof I=="object")return Object.keys(I).forEach(function(C){X.$d[c(C)]=I[C]}),this.calMilliseconds(),this;if(typeof I=="string"){var j=I.match(T);if(j){var ne=j.slice(2).map(function(C){return C!=null?Number(C):0});return this.$d.years=ne[0],this.$d.months=ne[1],this.$d.weeks=ne[2],this.$d.days=ne[3],this.$d.hours=ne[4],this.$d.minutes=ne[5],this.$d.seconds=ne[6],this.calMilliseconds(),this}}return this}var K=w.prototype;return K.calMilliseconds=function(){var I=this;this.$ms=Object.keys(this.$d).reduce(function(z,Z){return z+(I.$d[Z]||0)*p[Z]},0)},K.parseFromMilliseconds=function(){var I=this.$ms;this.$d.years=F(I/m),I%=m,this.$d.months=F(I/v),I%=v,this.$d.days=F(I/g),I%=g,this.$d.hours=F(I/d),I%=d,this.$d.minutes=F(I/l),I%=l,this.$d.seconds=F(I/s),I%=s,this.$d.milliseconds=I},K.toISOString=function(){var I=P(this.$d.years,"Y"),z=P(this.$d.months,"M"),Z=+this.$d.days||0;this.$d.weeks&&(Z+=7*this.$d.weeks);var X=P(Z,"D"),j=P(this.$d.hours,"H"),ne=P(this.$d.minutes,"M"),C=this.$d.seconds||0;this.$d.milliseconds&&(C+=this.$d.milliseconds/1e3,C=Math.round(1e3*C)/1e3);var J=P(C,"S"),$=I.negative||z.negative||X.negative||j.negative||ne.negative||J.negative,re=j.format||ne.format||J.format?"T":"",Y=($?"-":"")+"P"+I.format+z.format+X.format+re+j.format+ne.format+J.format;return Y==="P"||Y==="-P"?"P0D":Y},K.toJSON=function(){return this.toISOString()},K.format=function(I){var z=I||"YYYY-MM-DDTHH:mm:ss",Z={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return z.replace(f,function(X,j){return j||String(Z[X])})},K.as=function(I){return this.$ms/p[c(I)]},K.get=function(I){var z=this.$ms,Z=c(I);return Z==="milliseconds"?z%=1e3:z=Z==="weeks"?F(z/p[Z]):this.$d[Z],z||0},K.add=function(I,z,Z){var X;return X=z?I*p[c(z)]:O(I)?I.$ms:L(I,this).$ms,L(this.$ms+X*(Z?-1:1),this)},K.subtract=function(I,z){return this.add(I,z,!0)},K.locale=function(I){var z=this.clone();return z.$l=I,z},K.clone=function(){return L(this.$ms,this)},K.humanize=function(I){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!I)},K.valueOf=function(){return this.asMilliseconds()},K.milliseconds=function(){return this.get("milliseconds")},K.asMilliseconds=function(){return this.as("milliseconds")},K.seconds=function(){return this.get("seconds")},K.asSeconds=function(){return this.as("seconds")},K.minutes=function(){return this.get("minutes")},K.asMinutes=function(){return this.as("minutes")},K.hours=function(){return this.get("hours")},K.asHours=function(){return this.as("hours")},K.days=function(){return this.get("days")},K.asDays=function(){return this.as("days")},K.weeks=function(){return this.get("weeks")},K.asWeeks=function(){return this.as("weeks")},K.months=function(){return this.get("months")},K.asMonths=function(){return this.as("months")},K.years=function(){return this.get("years")},K.asYears=function(){return this.as("years")},w}(),A=function(w,K,I){return w.add(K.years()*I,"y").add(K.months()*I,"M").add(K.days()*I,"d").add(K.hours()*I,"h").add(K.minutes()*I,"m").add(K.seconds()*I,"s").add(K.milliseconds()*I,"ms")};return function(w,K,I){r=I,a=I().$utils(),I.duration=function(X,j){var ne=I.locale();return L(X,{$l:ne},j)},I.isDuration=O;var z=K.prototype.add,Z=K.prototype.subtract;K.prototype.add=function(X,j){return O(X)?A(this,X,1):z.bind(this)(X,j)},K.prototype.subtract=function(X,j){return O(X)?A(this,X,-1):Z.bind(this)(X,j)}}})}(yl)),yl.exports}var aK=tK();const iK=$l(aK);var pl={exports:{}},sK=pl.exports,tf;function oK(){return tf||(tf=1,function(e,t){(function(r,a){e.exports=a()})(sK,function(){var r="day";return function(a,s,l){var d=function(m){return m.add(4-m.isoWeekday(),r)},g=s.prototype;g.isoWeekYear=function(){return d(this).year()},g.isoWeek=function(m){if(!this.$utils().u(m))return this.add(7*(m-this.isoWeek()),r);var v,T,p,O,L=d(this),c=(v=this.isoWeekYear(),T=this.$u,p=(T?l.utc:l)().year(v).startOf("year"),O=4-p.isoWeekday(),p.isoWeekday()>4&&(O+=7),p.add(O,r));return L.diff(c,"week")+1},g.isoWeekday=function(m){return this.$utils().u(m)?this.day()||7:this.day(this.day()%7?m:m-7)};var f=g.startOf;g.startOf=function(m,v){var T=this.$utils(),p=!!T.u(v)||v;return T.p(m)==="isoweek"?p?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):f.bind(this)(m,v)}}})}(pl)),pl.exports}var lK=oK();const uK=$l(lK);var Al={exports:{}},dK=Al.exports,af;function gK(){return af||(af=1,function(e,t){(function(r,a){e.exports=a()})(dK,function(){var r="minute",a=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(l,d,g){var f=d.prototype;g.utc=function(c){var N={date:c,utc:!0,args:arguments};return new d(N)},f.utc=function(c){var N=g(this.toDate(),{locale:this.$L,utc:!0});return c?N.add(this.utcOffset(),r):N},f.local=function(){return g(this.toDate(),{locale:this.$L,utc:!1})};var m=f.parse;f.parse=function(c){c.utc&&(this.$u=!0),this.$utils().u(c.$offset)||(this.$offset=c.$offset),m.call(this,c)};var v=f.init;f.init=function(){if(this.$u){var c=this.$d;this.$y=c.getUTCFullYear(),this.$M=c.getUTCMonth(),this.$D=c.getUTCDate(),this.$W=c.getUTCDay(),this.$H=c.getUTCHours(),this.$m=c.getUTCMinutes(),this.$s=c.getUTCSeconds(),this.$ms=c.getUTCMilliseconds()}else v.call(this)};var T=f.utcOffset;f.utcOffset=function(c,N){var F=this.$utils().u;if(F(c))return this.$u?0:F(this.$offset)?T.call(this):this.$offset;if(typeof c=="string"&&(c=function(A){A===void 0&&(A="");var w=A.match(a);if(!w)return null;var K=(""+w[0]).match(s)||["-",0,0],I=K[0],z=60*+K[1]+ +K[2];return z===0?0:I==="+"?z:-z}(c),c===null))return this;var G=Math.abs(c)<=16?60*c:c,P=this;if(N)return P.$offset=G,P.$u=c===0,P;if(c!==0){var Q=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(P=this.local().add(G+Q,r)).$offset=G,P.$x.$localOffset=Q}else P=this.utc();return P};var p=f.format;f.format=function(c){var N=c||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return p.call(this,N)},f.valueOf=function(){var c=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*c},f.isUTC=function(){return!!this.$u},f.toISOString=function(){return this.toDate().toISOString()},f.toString=function(){return this.toDate().toUTCString()};var O=f.toDate;f.toDate=function(c){return c==="s"&&this.$offset?g(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():O.call(this)};var L=f.diff;f.diff=function(c,N,F){if(c&&this.$u===c.$u)return L.call(this,c,N,F);var G=this.local(),P=g(c).local();return L.call(G,P,N,F)}}})}(Al)),Al.exports}var kK=gK();const fK=$l(kK),mK=iv(),gv=e=>nK({locale:"nb-NO",messages:e},mK),kv={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};var cl={exports:{}},vK=cl.exports,sf;function EK(){return sf||(sf=1,function(e,t){(function(r,a){e.exports=a(ns)})(vK,function(r){function a(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var s=a(r),l={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(l,null,!0),l})}(cl)),cl.exports}EK();ns.extend(fK);ns.extend(uK);ns.extend(iK);gv(kv);gv(kv);const bK="_autocompleteSuggestion__substring_mf7v0_1",TK="_autocompleteSuggestion__substring_mf7v0_1",yK="_autocompleteSuggestion__inner_mf7v0_4",pK="_autocompleteSuggestion__inner_mf7v0_4",AK="_autocompleteSuggestion--active_mf7v0_12",Sa={autocompleteSuggestion__substring:bK,autocompleteSuggestionSubstring:TK,autocompleteSuggestion__inner:yK,autocompleteSuggestionInner:pK,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_mf7v0_12",autocompleteSuggestionActive:AK};class cK extends B.Component{constructor(t){super(t),this.state={value:t.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:t}=this.props,{value:r}=this.state;t(r)}onMouseMove(){const{setSuggestionIndex:t,index:r}=this.props;t(r)}render(){const{match:t,active:r,avoidBlur:a,id:s}=this.props,{value:l}=this.state.value,d=l.toLowerCase().startsWith(t.toLowerCase());return Hr.jsx("li",{id:s,role:"option","aria-selected":r,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:a,onMouseDown:a,onKeyDown:a,className:"autocompleteSuggestion typo-normal",children:d?Hr.jsxs("span",{className:`${Sa.autocompleteSuggestion__inner} ${r?Sa["autocompleteSuggestion--active"]:""}`,children:[l.substring(0,t.length),Hr.jsx("span",{className:Sa.autocompleteSuggestion__substring,children:l.substring(t.length)})]}):Hr.jsx("span",{className:`${Sa.autocompleteSuggestion__inner} ${r?Sa["autocompleteSuggestion--active"]:""}`,children:l})})}}const hK="_autocomplete_9dlnp_1",RK="_autocomplete__suggestions_9dlnp_27",_K="_autocomplete__suggestions_9dlnp_27",SK="_autocomplete__suggestions--hidden_9dlnp_31",wo={autocomplete:hK,autocomplete__suggestions:RK,autocompleteSuggestions:_K,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_9dlnp_31",autocompleteSuggestionsHidden:SK};class VK extends B.Component{constructor(t){super(t),Fk(this,"input"),Fk(this,"inputRef"),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=r=>{this.input=r},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:t}=this.state;t&&(clearTimeout(t),this.setState({blurDelay:null}))}onChange(t){const{onChange:r}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),r(t)}onSearchButtonClick(t){const{onSearchButtonClick:r}=this.props;t.preventDefault(),r&&r()}onKeyDown(t){const{shouldShowSuggestions:r}=this.state;let{activeSuggestionIndex:a}=this.state;const{suggestions:s}=this.props,l=a>-1;switch(this.setState({setAriaActiveDescendant:t.keyCode===38||t.keyCode===40}),t.keyCode){case 9:l&&r&&this.setValue(s[a]);break;case 13:l&&r?(t.preventDefault(),this.setValue(s[a])):r&&s.length===1?this.setValue(s[0]):this.setState({shouldShowSuggestions:!1});break;case 27:r&&s.length>0&&(t.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:r&&(t.preventDefault(),a=a-1===-2?-1:a-1,this.setState({activeSuggestionIndex:a}));break;case 40:r&&(t.preventDefault(),a=a+1===s.length?s.length-1:a+1,this.setState({activeSuggestionIndex:a}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const t=setTimeout(()=>{const{shouldBlur:a}=this.state;a&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:t});const{onBlur:r}=this.props;r&&r()}setSuggestionIndex(t){this.setState({activeSuggestionIndex:t}),this.clearBlurDelay()}setValue(t){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:r}=this.props;r(t)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:t}=this.state;t&&(clearTimeout(t),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:t,id:r,ariaLabel:a,placeholder:s,value:l,name:d,shouldFocusOnMount:g,isLoading:f}=this.props,{activeSuggestionIndex:m,setAriaActiveDescendant:v,hasFocus:T,shouldShowSuggestions:p}=this.state,O=T&&p&&t.length>0,L=v&&m>-1?`${r}-item-${m}`:void 0;return Hr.jsxs("div",{className:`${wo.autocomplete} autocomplete`,"aria-expanded":O,"aria-owns":`${r}-suggestions`,"aria-haspopup":"listbox",children:[Hr.jsx(nl,{variant:"primary",id:r,name:d,"aria-label":a,"aria-autocomplete":"list","aria-controls":`${r}-suggestions`,"aria-activedescendant":L,placeholder:s,value:l,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:c=>{this.inputRef=c},className:"typo-normal",autoFocus:g,label:a,hideLabel:!0,children:Hr.jsx(nl.Button,{loading:f,onClick:this.onSearchButtonClick})}),Hr.jsx("ul",{id:`${r}-suggestions`,role:"listbox",className:O?wo.autocomplete__suggestions:wo["autocomplete__suggestions--hidden"],children:O&&t.map((c,N)=>Hr.jsx(cK,{id:`${r}-item-${N}`,index:N,value:c,match:l,active:N===m,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},c.key))})]})}}B.createContext({});Kn(Ga);const NK=e=>{const t=e.status===Jt.UTFORT;return{...Qt.initialValues(e),besteberegningErKorrektValg:t?!0:void 0}},IK=e=>({kode:ct.MANUELL_KONTROLL_AV_BESTEBEREGNING,begrunnelse:e.begrunnelse,besteberegningErKorrekt:!!e.besteberegningErKorrektValg}),Jl=({aksjonspunkt:e,readOnly:t,submittable:r,submitCallback:a})=>{const[s,l]=U.useState(!1),{formData:d,setFormData:g}=BR(),f=YP({defaultValues:d||NK(e)}),m=f.watch("begrunnelse");return te.jsxs(te.Fragment,{children:[e.status===Jt.OPPRETTET&&te.jsx(CN,{children:[te.jsx(Ln,{id:"BesteberegningProsessPanel.Aksjonspunkt.HelpTextKontroll"},"BesteberegningAksjonspunktTekst")]}),te.jsx(Nr,{twentyPx:!0}),te.jsxs(dO,{formMethods:f,onSubmit:v=>a(IK(v)),setDataOnUnmount:g,children:[te.jsx(WP,{name:"besteberegningErKorrektValg",label:te.jsx(Ln,{id:"BesteberegningProsessPanel.Aksjonspunkt.Radiotekst"}),readOnly:t,onChange:()=>l(!s)}),te.jsx(Nr,{twentyPx:!0}),te.jsx(Qt,{isSubmittable:r,isReadOnly:t,hasBegrunnelse:!!m,hasVurderingText:!0}),te.jsx(Nr,{twentyPx:!0}),te.jsx(jl,{isSubmittable:r&&s,isSubmitting:f.formState.isSubmitting,isDirty:f.formState.isDirty,isReadOnly:t})]})]})};Jl.__docgenInfo={description:`KontrollerBesteberegningPanel

Formkomponent. Lar saksbehandler vurdere om den automatiske besteberegningen er korrekt utført.`,methods:[],displayName:"KontrollerBesteberegningPanel",props:{aksjonspunkt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ManuellKontrollBesteberegningAP) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING>`,elements:[{name:"signature",type:"object",raw:`{
  besteberegningErKorrekt: boolean;
}`,signature:{properties:[{key:"besteberegningErKorrekt",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};Jl.__docgenInfo={description:`KontrollerBesteberegningPanel

Formkomponent. Lar saksbehandler vurdere om den automatiske besteberegningen er korrekt utført.`,methods:[],displayName:"KontrollerBesteberegningPanel",props:{aksjonspunkt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ManuellKontrollBesteberegningAP) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING>`,elements:[{name:"signature",type:"object",raw:`{
  besteberegningErKorrekt: boolean;
}`,signature:{properties:[{key:"besteberegningErKorrekt",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const Wl=({beregningsgrunnlag:e,arbeidsgiverOpplysninger:t,getKodeverkNavn:r,aksjonspunkter:a,readOnly:s,submitCallback:l,submittable:d})=>{const{ytelsesspesifiktGrunnlag:g,beregningsgrunnlagPeriode:f}=e,m=g==null?void 0:g.besteberegninggrunnlag;if(!m)return null;const v=f[0],T=a.find(p=>p.definisjon===ct.KONTROLLER_AUTOMATISK_BESTEBEREGNING||p.definisjon===ct.MANUELL_KONTROLL_AV_BESTEBEREGNING);return te.jsxs("div",{children:[!!T&&te.jsx(Jl,{aksjonspunkt:T,submitCallback:l,submittable:d,readOnly:s}),te.jsx(gk,{children:te.jsx(Dl,{periode:v,besteMåneder:m.besteMåneder})}),te.jsx(Nr,{twentyPx:!0}),te.jsx(gk,{children:te.jsx(Fl,{besteMåneder:m.besteMåneder,arbeidsgiverOpplysninger:t,getKodeverkNavn:r})})]})};Wl.__docgenInfo={description:`BesteberegningPanel

Container komponent. Holder paneler for resultat av besteberegning og inntektsgrunnlag`,methods:[],displayName:"BesteberegningPanel",props:{beregningsgrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaeringstidspunktBeregning: string;
  dekningsgrad: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: string[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlag?: SammenligningsgrunlagProp;
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  andelerMedGraderingUtenBG?: BeregningsgrunnlagAndel[];
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
}`,signature:{properties:[{key:"skjaeringstidspunktBeregning",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"grunnbeløp",value:{name:"number",required:!0}},{key:"erOverstyrtInntekt",value:{name:"boolean",required:!0}},{key:"aktivitetStatus",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPeriode",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom?: string;
  beregningsgrunnlagPeriodeTom?: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!1}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!1}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"bortfaltNaturalytelse",value:{name:"number",required:!1}},{key:"tilkommetNaturalytelse",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom?: string;
  beregningsgrunnlagPeriodeTom?: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]",required:!0}},{key:"sammenligningsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}`,signature:{properties:[{key:"sammenligningsgrunnlagType",value:{name:"string",required:!0}},{key:"differanseBeregnet",value:{name:"number",required:!0}},{key:"avvikProsent",value:{name:"number",required:!0}},{key:"avvikPromille",value:{name:"number",required:!0}},{key:"rapportertPrAar",value:{name:"number",required:!0}},{key:"sammenligningsgrunnlagFom",value:{name:"string",required:!0}},{key:"sammenligningsgrunnlagTom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}>`,required:!1}},{key:"sammenligningsgrunnlagPrStatus",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}`,signature:{properties:[{key:"sammenligningsgrunnlagType",value:{name:"string",required:!0}},{key:"differanseBeregnet",value:{name:"number",required:!0}},{key:"avvikProsent",value:{name:"number",required:!0}},{key:"avvikPromille",value:{name:"number",required:!0}},{key:"rapportertPrAar",value:{name:"number",required:!0}},{key:"sammenligningsgrunnlagFom",value:{name:"string",required:!0}},{key:"sammenligningsgrunnlagTom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}>`,required:!1}],raw:"SammenligningsgrunlagProp[]",required:!1}},{key:"faktaOmBeregning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}`,signature:{properties:[{key:"beregningsgrunnlagArbeidsforhold",value:{name:"Array",elements:[{name:"unknown"}],raw:`(BeregningsgrunnlagArbeidsforhold & {
  erTidsbegrensetArbeidsforhold?: boolean;
})[]`,required:!1}},{key:"avklarAktiviteter",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
}`,signature:{properties:[{key:"aktiviteterTomDatoMapping",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}`,signature:{properties:[{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;
  aktørIdString?: string;
  skalBrukes?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"aktørIdString",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;
  aktørIdString?: string;
  skalBrukes?: boolean;
}>`}],raw:"BeregningAktivitet[]",required:!1}}]}}],raw:`Readonly<{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}>`}],raw:"AvklarBeregningAktiviteter[]",required:!1}}]}}],raw:`Readonly<{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
}>`,required:!1}},{key:"frilansAndel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"aktivitetStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}>`,required:!1}},{key:"vurderMilitaer",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  harMilitaer?: boolean;
}`,signature:{properties:[{key:"harMilitaer",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  harMilitaer?: boolean;
}>`,required:!1}},{key:"vurderBesteberegning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skalHaBesteberegning?: boolean;
}`,signature:{properties:[{key:"skalHaBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  skalHaBesteberegning?: boolean;
}>`,required:!1}},{key:"refusjonskravSomKommerForSentListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"erRefusjonskravGyldig",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}>`}],raw:"RefusjonskravSomKommerForSentListe[]",required:!1}},{key:"arbeidsforholdMedLønnsendringUtenIM",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"aktivitetStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}>`,required:!1}],raw:"FaktaOmBeregningAndel[]",required:!1}},{key:"andelerForFaktaOmBeregning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
  belopReadOnly?: number;
  fastsattBelop?: number;
  visningsnavn?: string;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"refusjonskrav",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"aktivitetStatus",value:{name:"string",required:!1}},{key:"belopReadOnly",value:{name:"number",required:!1}},{key:"fastsattBelop",value:{name:"number",required:!1}},{key:"visningsnavn",value:{name:"string",required:!1}},{key:"skalKunneEndreAktivitet",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
  belopReadOnly?: number;
  fastsattBelop?: number;
  visningsnavn?: string;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}>`}],raw:"AndelForFaktaOmBeregning[]",required:!0}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"KortvarigAndel"}],raw:"KortvarigAndel[]",required:!1}},{key:"kunYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"KunYtelseAndel"}],raw:"KunYtelseAndel[]",required:!1}},{key:"fodendeKvinneMedDP",value:{name:"boolean",required:!0}},{key:"erBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}>`,required:!1}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vurderMottarYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}`,signature:{properties:[{key:"erFrilans",value:{name:"boolean",required:!1}},{key:"frilansMottarYtelse",value:{name:"boolean",required:!1}},{key:"frilansInntektPrMnd",value:{name:"number",required:!1}},{key:"arbeidstakerAndelerUtenIM",value:{name:"Array",elements:[{name:"ArbeidstakerUtenIMAndel"}],raw:"ArbeidstakerUtenIMAndel[]",required:!1}}]}}],raw:`Readonly<{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}>`,required:!1}},{key:"arbeidstakerOgFrilanserISammeOrganisasjonListe",value:{name:"Array",elements:[{name:"ATFLSammeOrgAndel"}],raw:"ATFLSammeOrgAndel[]",required:!1}}]}}],raw:`Readonly<{
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}>`,required:!1}},{key:"faktaOmFordeling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
}`,signature:{properties:[{key:"fordelBeregningsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}`,signature:{properties:[{key:"arbeidsforholdTilFordeling",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}`,signature:{properties:[{key:"aktørId",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"perioderMedGraderingEllerRefusjon",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}`,signature:{properties:[{key:"erRefusjon",value:{name:"boolean",required:!1}},{key:"erGradering",value:{name:"boolean",required:!1}},{key:"erSøktYtelse",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}>`}],raw:"PerioderMedGraderingEllerRefusjon[]",required:!1}},{key:"permisjon",value:{name:"signature",type:"object",raw:`{
  permisjonFom?: string;
  permisjonTom?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}}]},required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}>`}],raw:"ArbeidsforholdTilFordeling[]",required:!1}},{key:"fordelBeregningsgrunnlagPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"fordelBeregningsgrunnlagAndeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus?: string;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: string;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!1}},{key:"andelIArbeid",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"fordelingForrigeBehandlingPrAar",value:{name:"number",required:!1}},{key:"fordeltPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"nyttArbeidsforhold",value:{name:"boolean",required:!1}},{key:"refusjonskravFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"refusjonskravPrAar",value:{name:"number",required:!1}},{key:"kilde",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus?: string;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: string;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}>`}],raw:"FordelBeregningsgrunnlagAndel[]",required:!1}},{key:"skalRedigereInntekt",value:{name:"boolean",required:!1}},{key:"skalPreutfyllesMedBeregningsgrunnlag",value:{name:"boolean",required:!1}},{key:"skalKunneEndreRefusjon",value:{name:"boolean",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom?: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}>`}],raw:"FordelBeregningsgrunnlagPeriode[]",required:!1}}]}}],raw:`Readonly<{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}>`,required:!1}}]}}],raw:`Readonly<{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
}>`,required:!1}},{key:"andelerMedGraderingUtenBG",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"bortfaltNaturalytelse",value:{name:"number",required:!1}},{key:"tilkommetNaturalytelse",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}},{key:"ytelsesspesifiktGrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ytelsetype: string;
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}`,signature:{properties:[{key:"ytelsetype",value:{name:"string",required:!0}},{key:"besteberegninggrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteMåneder: Månedsgrunnlag[];
}`,signature:{properties:[{key:"besteMåneder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}`,signature:{properties:[{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"opptjeningAktivitetType",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}>`}],raw:"BesteberegningInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>`}],raw:"Månedsgrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  besteMåneder: Månedsgrunnlag[];
}>`,required:!1}}]}}],raw:`Readonly<{
  ytelsetype: string;
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}>`,required:!1}},{key:"refusjonTilVurdering",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: RefusjonTilVurderingAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"tidligereUtbetalinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"erTildeltRefusjon",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}>`}],raw:"TidligereUtbetalinger[]",required:!1}},{key:"nyttRefusjonskravFom",value:{name:"string",required:!0}},{key:"fastsattNyttRefusjonskravFom",value:{name:"string",required:!1}},{key:"tidligsteMuligeRefusjonsdato",value:{name:"string",required:!0}},{key:"arbeidsgiver",value:{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  arbeidsgiverAktørId?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"arbeidsgiverAktørId",value:{name:"string",required:!1}}]},required:!1}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdRef",value:{name:"string",required:!1}},{key:"skalKunneFastsetteDelvisRefusjon",value:{name:"boolean",required:!0}},{key:"fastsattDelvisRefusjonPrMnd",value:{name:"number",required:!1}},{key:"maksTillattDelvisRefusjonPrMnd",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}>`}],raw:"RefusjonTilVurderingAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: RefusjonTilVurderingAndel[];
}>`,required:!1}},{key:"inntektsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  måneder?: InntektsgrunnlagMåned[];
}`,signature:{properties:[{key:"måneder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektAktivitetType: string;
  beløp: number;
}`,signature:{properties:[{key:"inntektAktivitetType",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  inntektAktivitetType: string;
  beløp: number;
}>`}],raw:"InntektsgrunnlagInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}>`}],raw:"InntektsgrunnlagMåned[]",required:!1}}]}}],raw:`Readonly<{
  måneder?: InntektsgrunnlagMåned[];
}>`,required:!1}}]}}],raw:`Readonly<{
  skjaeringstidspunktBeregning: string;
  dekningsgrad: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: string[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlag?: SammenligningsgrunlagProp;
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  andelerMedGraderingUtenBG?: BeregningsgrunnlagAndel[];
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
}>`},description:""},arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},getKodeverkNavn:{required:!0,tsType:{name:"signature",type:"function",raw:"(kodeverk: string, kodeverkType: KodeverkType) => string",signature:{arguments:[{type:{name:"string"},name:"kodeverk"},{type:{name:"KodeverkType"},name:"kodeverkType"}],return:{name:"string"}}},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: BesteberegningAP) => Promise<void>",signature:{arguments:[{type:{name:"union",raw:"ManuellKontrollBesteberegningAP | KontrollerBesteberegningAP",elements:[{name:"intersection",raw:`{
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING>`,elements:[{name:"signature",type:"object",raw:`{
  besteberegningErKorrekt: boolean;
}`,signature:{properties:[{key:"besteberegningErKorrekt",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING>`,elements:[{name:"signature",type:"object",raw:`{
  besteberegningErKorrekt: boolean;
}`,signature:{properties:[{key:"besteberegningErKorrekt",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}]},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};Wl.__docgenInfo={description:`BesteberegningPanel

Container komponent. Holder paneler for resultat av besteberegning og inntektsgrunnlag`,methods:[],displayName:"BesteberegningPanel",props:{beregningsgrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaeringstidspunktBeregning: string;
  dekningsgrad: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: string[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlag?: SammenligningsgrunlagProp;
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  andelerMedGraderingUtenBG?: BeregningsgrunnlagAndel[];
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
}`,signature:{properties:[{key:"skjaeringstidspunktBeregning",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"grunnbeløp",value:{name:"number",required:!0}},{key:"erOverstyrtInntekt",value:{name:"boolean",required:!0}},{key:"aktivitetStatus",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPeriode",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom?: string;
  beregningsgrunnlagPeriodeTom?: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!1}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!1}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"bortfaltNaturalytelse",value:{name:"number",required:!1}},{key:"tilkommetNaturalytelse",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom?: string;
  beregningsgrunnlagPeriodeTom?: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]",required:!0}},{key:"sammenligningsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}`,signature:{properties:[{key:"sammenligningsgrunnlagType",value:{name:"string",required:!0}},{key:"differanseBeregnet",value:{name:"number",required:!0}},{key:"avvikProsent",value:{name:"number",required:!0}},{key:"avvikPromille",value:{name:"number",required:!0}},{key:"rapportertPrAar",value:{name:"number",required:!0}},{key:"sammenligningsgrunnlagFom",value:{name:"string",required:!0}},{key:"sammenligningsgrunnlagTom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}>`,required:!1}},{key:"sammenligningsgrunnlagPrStatus",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}`,signature:{properties:[{key:"sammenligningsgrunnlagType",value:{name:"string",required:!0}},{key:"differanseBeregnet",value:{name:"number",required:!0}},{key:"avvikProsent",value:{name:"number",required:!0}},{key:"avvikPromille",value:{name:"number",required:!0}},{key:"rapportertPrAar",value:{name:"number",required:!0}},{key:"sammenligningsgrunnlagFom",value:{name:"string",required:!0}},{key:"sammenligningsgrunnlagTom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}>`,required:!1}],raw:"SammenligningsgrunlagProp[]",required:!1}},{key:"faktaOmBeregning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}`,signature:{properties:[{key:"beregningsgrunnlagArbeidsforhold",value:{name:"Array",elements:[{name:"unknown"}],raw:`(BeregningsgrunnlagArbeidsforhold & {
  erTidsbegrensetArbeidsforhold?: boolean;
})[]`,required:!1}},{key:"avklarAktiviteter",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
}`,signature:{properties:[{key:"aktiviteterTomDatoMapping",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}`,signature:{properties:[{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;
  aktørIdString?: string;
  skalBrukes?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"aktørIdString",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;
  aktørIdString?: string;
  skalBrukes?: boolean;
}>`}],raw:"BeregningAktivitet[]",required:!1}}]}}],raw:`Readonly<{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}>`}],raw:"AvklarBeregningAktiviteter[]",required:!1}}]}}],raw:`Readonly<{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
}>`,required:!1}},{key:"frilansAndel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"aktivitetStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}>`,required:!1}},{key:"vurderMilitaer",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  harMilitaer?: boolean;
}`,signature:{properties:[{key:"harMilitaer",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  harMilitaer?: boolean;
}>`,required:!1}},{key:"vurderBesteberegning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skalHaBesteberegning?: boolean;
}`,signature:{properties:[{key:"skalHaBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  skalHaBesteberegning?: boolean;
}>`,required:!1}},{key:"refusjonskravSomKommerForSentListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"erRefusjonskravGyldig",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}>`}],raw:"RefusjonskravSomKommerForSentListe[]",required:!1}},{key:"arbeidsforholdMedLønnsendringUtenIM",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"aktivitetStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}>`,required:!1}],raw:"FaktaOmBeregningAndel[]",required:!1}},{key:"andelerForFaktaOmBeregning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
  belopReadOnly?: number;
  fastsattBelop?: number;
  visningsnavn?: string;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"refusjonskrav",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"aktivitetStatus",value:{name:"string",required:!1}},{key:"belopReadOnly",value:{name:"number",required:!1}},{key:"fastsattBelop",value:{name:"number",required:!1}},{key:"visningsnavn",value:{name:"string",required:!1}},{key:"skalKunneEndreAktivitet",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
  belopReadOnly?: number;
  fastsattBelop?: number;
  visningsnavn?: string;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}>`}],raw:"AndelForFaktaOmBeregning[]",required:!0}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"KortvarigAndel"}],raw:"KortvarigAndel[]",required:!1}},{key:"kunYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"KunYtelseAndel"}],raw:"KunYtelseAndel[]",required:!1}},{key:"fodendeKvinneMedDP",value:{name:"boolean",required:!0}},{key:"erBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}>`,required:!1}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vurderMottarYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}`,signature:{properties:[{key:"erFrilans",value:{name:"boolean",required:!1}},{key:"frilansMottarYtelse",value:{name:"boolean",required:!1}},{key:"frilansInntektPrMnd",value:{name:"number",required:!1}},{key:"arbeidstakerAndelerUtenIM",value:{name:"Array",elements:[{name:"ArbeidstakerUtenIMAndel"}],raw:"ArbeidstakerUtenIMAndel[]",required:!1}}]}}],raw:`Readonly<{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}>`,required:!1}},{key:"arbeidstakerOgFrilanserISammeOrganisasjonListe",value:{name:"Array",elements:[{name:"ATFLSammeOrgAndel"}],raw:"ATFLSammeOrgAndel[]",required:!1}}]}}],raw:`Readonly<{
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}>`,required:!1}},{key:"faktaOmFordeling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
}`,signature:{properties:[{key:"fordelBeregningsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}`,signature:{properties:[{key:"arbeidsforholdTilFordeling",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}`,signature:{properties:[{key:"aktørId",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"perioderMedGraderingEllerRefusjon",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}`,signature:{properties:[{key:"erRefusjon",value:{name:"boolean",required:!1}},{key:"erGradering",value:{name:"boolean",required:!1}},{key:"erSøktYtelse",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}>`}],raw:"PerioderMedGraderingEllerRefusjon[]",required:!1}},{key:"permisjon",value:{name:"signature",type:"object",raw:`{
  permisjonFom?: string;
  permisjonTom?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}}]},required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}>`}],raw:"ArbeidsforholdTilFordeling[]",required:!1}},{key:"fordelBeregningsgrunnlagPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"fordelBeregningsgrunnlagAndeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus?: string;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: string;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!1}},{key:"andelIArbeid",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"fordelingForrigeBehandlingPrAar",value:{name:"number",required:!1}},{key:"fordeltPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"nyttArbeidsforhold",value:{name:"boolean",required:!1}},{key:"refusjonskravFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"refusjonskravPrAar",value:{name:"number",required:!1}},{key:"kilde",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus?: string;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: string;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}>`}],raw:"FordelBeregningsgrunnlagAndel[]",required:!1}},{key:"skalRedigereInntekt",value:{name:"boolean",required:!1}},{key:"skalPreutfyllesMedBeregningsgrunnlag",value:{name:"boolean",required:!1}},{key:"skalKunneEndreRefusjon",value:{name:"boolean",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom?: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}>`}],raw:"FordelBeregningsgrunnlagPeriode[]",required:!1}}]}}],raw:`Readonly<{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}>`,required:!1}}]}}],raw:`Readonly<{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
}>`,required:!1}},{key:"andelerMedGraderingUtenBG",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"bortfaltNaturalytelse",value:{name:"number",required:!1}},{key:"tilkommetNaturalytelse",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}},{key:"ytelsesspesifiktGrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ytelsetype: string;
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}`,signature:{properties:[{key:"ytelsetype",value:{name:"string",required:!0}},{key:"besteberegninggrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteMåneder: Månedsgrunnlag[];
}`,signature:{properties:[{key:"besteMåneder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}`,signature:{properties:[{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"opptjeningAktivitetType",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}>`}],raw:"BesteberegningInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>`}],raw:"Månedsgrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  besteMåneder: Månedsgrunnlag[];
}>`,required:!1}}]}}],raw:`Readonly<{
  ytelsetype: string;
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}>`,required:!1}},{key:"refusjonTilVurdering",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: RefusjonTilVurderingAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"tidligereUtbetalinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"erTildeltRefusjon",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}>`}],raw:"TidligereUtbetalinger[]",required:!1}},{key:"nyttRefusjonskravFom",value:{name:"string",required:!0}},{key:"fastsattNyttRefusjonskravFom",value:{name:"string",required:!1}},{key:"tidligsteMuligeRefusjonsdato",value:{name:"string",required:!0}},{key:"arbeidsgiver",value:{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  arbeidsgiverAktørId?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"arbeidsgiverAktørId",value:{name:"string",required:!1}}]},required:!1}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdRef",value:{name:"string",required:!1}},{key:"skalKunneFastsetteDelvisRefusjon",value:{name:"boolean",required:!0}},{key:"fastsattDelvisRefusjonPrMnd",value:{name:"number",required:!1}},{key:"maksTillattDelvisRefusjonPrMnd",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}>`}],raw:"RefusjonTilVurderingAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: RefusjonTilVurderingAndel[];
}>`,required:!1}},{key:"inntektsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  måneder?: InntektsgrunnlagMåned[];
}`,signature:{properties:[{key:"måneder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektAktivitetType: string;
  beløp: number;
}`,signature:{properties:[{key:"inntektAktivitetType",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  inntektAktivitetType: string;
  beløp: number;
}>`}],raw:"InntektsgrunnlagInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}>`}],raw:"InntektsgrunnlagMåned[]",required:!1}}]}}],raw:`Readonly<{
  måneder?: InntektsgrunnlagMåned[];
}>`,required:!1}}]}}],raw:`Readonly<{
  skjaeringstidspunktBeregning: string;
  dekningsgrad: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: string[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlag?: SammenligningsgrunlagProp;
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  andelerMedGraderingUtenBG?: BeregningsgrunnlagAndel[];
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
}>`},description:""},arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},getKodeverkNavn:{required:!0,tsType:{name:"signature",type:"function",raw:"(kodeverk: string, kodeverkType: KodeverkType) => string",signature:{arguments:[{type:{name:"string"},name:"kodeverk"},{type:{name:"KodeverkType"},name:"kodeverkType"}],return:{name:"string"}}},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: BesteberegningAP) => Promise<void>",signature:{arguments:[{type:{name:"union",raw:"ManuellKontrollBesteberegningAP | KontrollerBesteberegningAP",elements:[{name:"intersection",raw:`{
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING>`,elements:[{name:"signature",type:"object",raw:`{
  besteberegningErKorrekt: boolean;
}`,signature:{properties:[{key:"besteberegningErKorrekt",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  besteberegningErKorrekt: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING>`,elements:[{name:"signature",type:"object",raw:`{
  besteberegningErKorrekt: boolean;
}`,signature:{properties:[{key:"besteberegningErKorrekt",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}]},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const PK={"BesteberegningProsessPanel.Måned.Inntekt.Aktivitet":"Aktivitet","BesteberegningProsessPanel.Måned.Inntekt.Inntekt":"Inntekt","Inntekttabell.Tittel":"Inntektsgrunnlag for besteberegning","Inntekttabell.Sum":"Total for måned","Inntekttabell.BeregnetÅrsinntekt":"Beregnet årsinntekt: {inntekt}","ResultatGrunnlag.BruttoBeregningsgrunnlag":"Brutto beregningsgrunnlag","ResultatGrunnlag.BeregningEtterBesteberegning":"Beregning etter §14-7, 3. ledd","ResultatGrunnlag.BeregningEtterKap8":"Beregning etter §14-7, 1. ledd","ResultatGrunnlag.Kap8GirBesteBeregning":"Beregning etter §14-7, 1. ledd gir beste beregning.","ResultatGrunnlag.Kap1473GirBesteBeregning":"Beregning etter §14-7, 3. ledd gir beste beregning.","BesteberegningProsessPanel.Aksjonspunkt.Radiotekst":"Beregningen er riktig, fortsett behandlingen.","BesteberegningProsessPanel.Aksjonspunkt.HelpText":"Saken er automatisk besteberegnet, vennligst kontroller beregningen","BesteberegningProsessPanel.Aksjonspunkt.HelpTextKontroll":"Saken er tatt ut til kontroll på grunn av stort avvik mellom 3. og 1. ledd. Vennligst kontroller beregningen"},OK=Kn(PK),zl=({beregningsgrunnlag:e,arbeidsgiverOpplysninger:t,alleKodeverk:r,aksjonspunkter:a,readOnly:s,submitCallback:l,submittable:d})=>te.jsx(Sl,{value:OK,children:te.jsx(Wl,{beregningsgrunnlag:e,arbeidsgiverOpplysninger:t,getKodeverkNavn:sh(r),aksjonspunkter:a,readOnly:s,submitCallback:l,submittable:d})});zl.__docgenInfo={description:"",methods:[],displayName:"BesteberegningFaktaIndex",props:{beregningsgrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaeringstidspunktBeregning: string;
  dekningsgrad: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: string[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlag?: SammenligningsgrunlagProp;
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  andelerMedGraderingUtenBG?: BeregningsgrunnlagAndel[];
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
}`,signature:{properties:[{key:"skjaeringstidspunktBeregning",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"grunnbeløp",value:{name:"number",required:!0}},{key:"erOverstyrtInntekt",value:{name:"boolean",required:!0}},{key:"aktivitetStatus",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPeriode",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom?: string;
  beregningsgrunnlagPeriodeTom?: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!1}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!1}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"bortfaltNaturalytelse",value:{name:"number",required:!1}},{key:"tilkommetNaturalytelse",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom?: string;
  beregningsgrunnlagPeriodeTom?: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]",required:!0}},{key:"sammenligningsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}`,signature:{properties:[{key:"sammenligningsgrunnlagType",value:{name:"string",required:!0}},{key:"differanseBeregnet",value:{name:"number",required:!0}},{key:"avvikProsent",value:{name:"number",required:!0}},{key:"avvikPromille",value:{name:"number",required:!0}},{key:"rapportertPrAar",value:{name:"number",required:!0}},{key:"sammenligningsgrunnlagFom",value:{name:"string",required:!0}},{key:"sammenligningsgrunnlagTom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}>`,required:!1}},{key:"sammenligningsgrunnlagPrStatus",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}`,signature:{properties:[{key:"sammenligningsgrunnlagType",value:{name:"string",required:!0}},{key:"differanseBeregnet",value:{name:"number",required:!0}},{key:"avvikProsent",value:{name:"number",required:!0}},{key:"avvikPromille",value:{name:"number",required:!0}},{key:"rapportertPrAar",value:{name:"number",required:!0}},{key:"sammenligningsgrunnlagFom",value:{name:"string",required:!0}},{key:"sammenligningsgrunnlagTom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}>`,required:!1}],raw:"SammenligningsgrunlagProp[]",required:!1}},{key:"faktaOmBeregning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}`,signature:{properties:[{key:"beregningsgrunnlagArbeidsforhold",value:{name:"Array",elements:[{name:"unknown"}],raw:`(BeregningsgrunnlagArbeidsforhold & {
  erTidsbegrensetArbeidsforhold?: boolean;
})[]`,required:!1}},{key:"avklarAktiviteter",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
}`,signature:{properties:[{key:"aktiviteterTomDatoMapping",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}`,signature:{properties:[{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;
  aktørIdString?: string;
  skalBrukes?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"aktørIdString",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;
  aktørIdString?: string;
  skalBrukes?: boolean;
}>`}],raw:"BeregningAktivitet[]",required:!1}}]}}],raw:`Readonly<{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}>`}],raw:"AvklarBeregningAktiviteter[]",required:!1}}]}}],raw:`Readonly<{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
}>`,required:!1}},{key:"frilansAndel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"aktivitetStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}>`,required:!1}},{key:"vurderMilitaer",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  harMilitaer?: boolean;
}`,signature:{properties:[{key:"harMilitaer",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  harMilitaer?: boolean;
}>`,required:!1}},{key:"vurderBesteberegning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skalHaBesteberegning?: boolean;
}`,signature:{properties:[{key:"skalHaBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  skalHaBesteberegning?: boolean;
}>`,required:!1}},{key:"refusjonskravSomKommerForSentListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"erRefusjonskravGyldig",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}>`}],raw:"RefusjonskravSomKommerForSentListe[]",required:!1}},{key:"arbeidsforholdMedLønnsendringUtenIM",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"aktivitetStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}>`,required:!1}],raw:"FaktaOmBeregningAndel[]",required:!1}},{key:"andelerForFaktaOmBeregning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
  belopReadOnly?: number;
  fastsattBelop?: number;
  visningsnavn?: string;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"refusjonskrav",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"aktivitetStatus",value:{name:"string",required:!1}},{key:"belopReadOnly",value:{name:"number",required:!1}},{key:"fastsattBelop",value:{name:"number",required:!1}},{key:"visningsnavn",value:{name:"string",required:!1}},{key:"skalKunneEndreAktivitet",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
  belopReadOnly?: number;
  fastsattBelop?: number;
  visningsnavn?: string;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}>`}],raw:"AndelForFaktaOmBeregning[]",required:!0}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"KortvarigAndel"}],raw:"KortvarigAndel[]",required:!1}},{key:"kunYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"KunYtelseAndel"}],raw:"KunYtelseAndel[]",required:!1}},{key:"fodendeKvinneMedDP",value:{name:"boolean",required:!0}},{key:"erBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}>`,required:!1}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vurderMottarYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}`,signature:{properties:[{key:"erFrilans",value:{name:"boolean",required:!1}},{key:"frilansMottarYtelse",value:{name:"boolean",required:!1}},{key:"frilansInntektPrMnd",value:{name:"number",required:!1}},{key:"arbeidstakerAndelerUtenIM",value:{name:"Array",elements:[{name:"ArbeidstakerUtenIMAndel"}],raw:"ArbeidstakerUtenIMAndel[]",required:!1}}]}}],raw:`Readonly<{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}>`,required:!1}},{key:"arbeidstakerOgFrilanserISammeOrganisasjonListe",value:{name:"Array",elements:[{name:"ATFLSammeOrgAndel"}],raw:"ATFLSammeOrgAndel[]",required:!1}}]}}],raw:`Readonly<{
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}>`,required:!1}},{key:"faktaOmFordeling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
}`,signature:{properties:[{key:"fordelBeregningsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}`,signature:{properties:[{key:"arbeidsforholdTilFordeling",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}`,signature:{properties:[{key:"aktørId",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"perioderMedGraderingEllerRefusjon",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}`,signature:{properties:[{key:"erRefusjon",value:{name:"boolean",required:!1}},{key:"erGradering",value:{name:"boolean",required:!1}},{key:"erSøktYtelse",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}>`}],raw:"PerioderMedGraderingEllerRefusjon[]",required:!1}},{key:"permisjon",value:{name:"signature",type:"object",raw:`{
  permisjonFom?: string;
  permisjonTom?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}}]},required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}>`}],raw:"ArbeidsforholdTilFordeling[]",required:!1}},{key:"fordelBeregningsgrunnlagPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"fordelBeregningsgrunnlagAndeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus?: string;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: string;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!1}},{key:"andelIArbeid",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"fordelingForrigeBehandlingPrAar",value:{name:"number",required:!1}},{key:"fordeltPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"nyttArbeidsforhold",value:{name:"boolean",required:!1}},{key:"refusjonskravFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"refusjonskravPrAar",value:{name:"number",required:!1}},{key:"kilde",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus?: string;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: string;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}>`}],raw:"FordelBeregningsgrunnlagAndel[]",required:!1}},{key:"skalRedigereInntekt",value:{name:"boolean",required:!1}},{key:"skalPreutfyllesMedBeregningsgrunnlag",value:{name:"boolean",required:!1}},{key:"skalKunneEndreRefusjon",value:{name:"boolean",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom?: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}>`}],raw:"FordelBeregningsgrunnlagPeriode[]",required:!1}}]}}],raw:`Readonly<{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}>`,required:!1}}]}}],raw:`Readonly<{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
}>`,required:!1}},{key:"andelerMedGraderingUtenBG",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"bortfaltNaturalytelse",value:{name:"number",required:!1}},{key:"tilkommetNaturalytelse",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}},{key:"ytelsesspesifiktGrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ytelsetype: string;
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}`,signature:{properties:[{key:"ytelsetype",value:{name:"string",required:!0}},{key:"besteberegninggrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteMåneder: Månedsgrunnlag[];
}`,signature:{properties:[{key:"besteMåneder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}`,signature:{properties:[{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"opptjeningAktivitetType",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}>`}],raw:"BesteberegningInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>`}],raw:"Månedsgrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  besteMåneder: Månedsgrunnlag[];
}>`,required:!1}}]}}],raw:`Readonly<{
  ytelsetype: string;
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}>`,required:!1}},{key:"refusjonTilVurdering",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: RefusjonTilVurderingAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"tidligereUtbetalinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"erTildeltRefusjon",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}>`}],raw:"TidligereUtbetalinger[]",required:!1}},{key:"nyttRefusjonskravFom",value:{name:"string",required:!0}},{key:"fastsattNyttRefusjonskravFom",value:{name:"string",required:!1}},{key:"tidligsteMuligeRefusjonsdato",value:{name:"string",required:!0}},{key:"arbeidsgiver",value:{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  arbeidsgiverAktørId?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"arbeidsgiverAktørId",value:{name:"string",required:!1}}]},required:!1}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdRef",value:{name:"string",required:!1}},{key:"skalKunneFastsetteDelvisRefusjon",value:{name:"boolean",required:!0}},{key:"fastsattDelvisRefusjonPrMnd",value:{name:"number",required:!1}},{key:"maksTillattDelvisRefusjonPrMnd",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}>`}],raw:"RefusjonTilVurderingAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: RefusjonTilVurderingAndel[];
}>`,required:!1}},{key:"inntektsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  måneder?: InntektsgrunnlagMåned[];
}`,signature:{properties:[{key:"måneder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektAktivitetType: string;
  beløp: number;
}`,signature:{properties:[{key:"inntektAktivitetType",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  inntektAktivitetType: string;
  beløp: number;
}>`}],raw:"InntektsgrunnlagInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}>`}],raw:"InntektsgrunnlagMåned[]",required:!1}}]}}],raw:`Readonly<{
  måneder?: InntektsgrunnlagMåned[];
}>`,required:!1}}]}}],raw:`Readonly<{
  skjaeringstidspunktBeregning: string;
  dekningsgrad: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: string[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlag?: SammenligningsgrunlagProp;
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  andelerMedGraderingUtenBG?: BeregningsgrunnlagAndel[];
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
}>`},description:""},arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""}}};zl.__docgenInfo={description:"",methods:[],displayName:"BesteberegningFaktaIndex",props:{beregningsgrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaeringstidspunktBeregning: string;
  dekningsgrad: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: string[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlag?: SammenligningsgrunlagProp;
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  andelerMedGraderingUtenBG?: BeregningsgrunnlagAndel[];
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
}`,signature:{properties:[{key:"skjaeringstidspunktBeregning",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"grunnbeløp",value:{name:"number",required:!0}},{key:"erOverstyrtInntekt",value:{name:"boolean",required:!0}},{key:"aktivitetStatus",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPeriode",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom?: string;
  beregningsgrunnlagPeriodeTom?: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!1}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!1}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"bortfaltNaturalytelse",value:{name:"number",required:!1}},{key:"tilkommetNaturalytelse",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom?: string;
  beregningsgrunnlagPeriodeTom?: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]",required:!0}},{key:"sammenligningsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}`,signature:{properties:[{key:"sammenligningsgrunnlagType",value:{name:"string",required:!0}},{key:"differanseBeregnet",value:{name:"number",required:!0}},{key:"avvikProsent",value:{name:"number",required:!0}},{key:"avvikPromille",value:{name:"number",required:!0}},{key:"rapportertPrAar",value:{name:"number",required:!0}},{key:"sammenligningsgrunnlagFom",value:{name:"string",required:!0}},{key:"sammenligningsgrunnlagTom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}>`,required:!1}},{key:"sammenligningsgrunnlagPrStatus",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}`,signature:{properties:[{key:"sammenligningsgrunnlagType",value:{name:"string",required:!0}},{key:"differanseBeregnet",value:{name:"number",required:!0}},{key:"avvikProsent",value:{name:"number",required:!0}},{key:"avvikPromille",value:{name:"number",required:!0}},{key:"rapportertPrAar",value:{name:"number",required:!0}},{key:"sammenligningsgrunnlagFom",value:{name:"string",required:!0}},{key:"sammenligningsgrunnlagTom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  sammenligningsgrunnlagType: string;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}>`,required:!1}],raw:"SammenligningsgrunlagProp[]",required:!1}},{key:"faktaOmBeregning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}`,signature:{properties:[{key:"beregningsgrunnlagArbeidsforhold",value:{name:"Array",elements:[{name:"unknown"}],raw:`(BeregningsgrunnlagArbeidsforhold & {
  erTidsbegrensetArbeidsforhold?: boolean;
})[]`,required:!1}},{key:"avklarAktiviteter",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
}`,signature:{properties:[{key:"aktiviteterTomDatoMapping",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}`,signature:{properties:[{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;
  aktørIdString?: string;
  skalBrukes?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"aktørIdString",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;
  aktørIdString?: string;
  skalBrukes?: boolean;
}>`}],raw:"BeregningAktivitet[]",required:!1}}]}}],raw:`Readonly<{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}>`}],raw:"AvklarBeregningAktiviteter[]",required:!1}}]}}],raw:`Readonly<{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
}>`,required:!1}},{key:"frilansAndel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"aktivitetStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}>`,required:!1}},{key:"vurderMilitaer",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  harMilitaer?: boolean;
}`,signature:{properties:[{key:"harMilitaer",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  harMilitaer?: boolean;
}>`,required:!1}},{key:"vurderBesteberegning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skalHaBesteberegning?: boolean;
}`,signature:{properties:[{key:"skalHaBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  skalHaBesteberegning?: boolean;
}>`,required:!1}},{key:"refusjonskravSomKommerForSentListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"erRefusjonskravGyldig",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}>`}],raw:"RefusjonskravSomKommerForSentListe[]",required:!1}},{key:"arbeidsforholdMedLønnsendringUtenIM",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"aktivitetStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
}>`,required:!1}],raw:"FaktaOmBeregningAndel[]",required:!1}},{key:"andelerForFaktaOmBeregning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
  belopReadOnly?: number;
  fastsattBelop?: number;
  visningsnavn?: string;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"refusjonskrav",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"aktivitetStatus",value:{name:"string",required:!1}},{key:"belopReadOnly",value:{name:"number",required:!1}},{key:"fastsattBelop",value:{name:"number",required:!1}},{key:"visningsnavn",value:{name:"string",required:!1}},{key:"skalKunneEndreAktivitet",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: string;
  aktivitetStatus?: string;
  belopReadOnly?: number;
  fastsattBelop?: number;
  visningsnavn?: string;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}>`}],raw:"AndelForFaktaOmBeregning[]",required:!0}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"KortvarigAndel"}],raw:"KortvarigAndel[]",required:!1}},{key:"kunYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"KunYtelseAndel"}],raw:"KunYtelseAndel[]",required:!1}},{key:"fodendeKvinneMedDP",value:{name:"boolean",required:!0}},{key:"erBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}>`,required:!1}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vurderMottarYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}`,signature:{properties:[{key:"erFrilans",value:{name:"boolean",required:!1}},{key:"frilansMottarYtelse",value:{name:"boolean",required:!1}},{key:"frilansInntektPrMnd",value:{name:"number",required:!1}},{key:"arbeidstakerAndelerUtenIM",value:{name:"Array",elements:[{name:"ArbeidstakerUtenIMAndel"}],raw:"ArbeidstakerUtenIMAndel[]",required:!1}}]}}],raw:`Readonly<{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}>`,required:!1}},{key:"arbeidstakerOgFrilanserISammeOrganisasjonListe",value:{name:"Array",elements:[{name:"ATFLSammeOrgAndel"}],raw:"ATFLSammeOrgAndel[]",required:!1}}]}}],raw:`Readonly<{
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}>`,required:!1}},{key:"faktaOmFordeling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
}`,signature:{properties:[{key:"fordelBeregningsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}`,signature:{properties:[{key:"arbeidsforholdTilFordeling",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}`,signature:{properties:[{key:"aktørId",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"perioderMedGraderingEllerRefusjon",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}`,signature:{properties:[{key:"erRefusjon",value:{name:"boolean",required:!1}},{key:"erGradering",value:{name:"boolean",required:!1}},{key:"erSøktYtelse",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}>`}],raw:"PerioderMedGraderingEllerRefusjon[]",required:!1}},{key:"permisjon",value:{name:"signature",type:"object",raw:`{
  permisjonFom?: string;
  permisjonTom?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}}]},required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}>`}],raw:"ArbeidsforholdTilFordeling[]",required:!1}},{key:"fordelBeregningsgrunnlagPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"fordelBeregningsgrunnlagAndeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus?: string;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: string;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!1}},{key:"andelIArbeid",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"fordelingForrigeBehandlingPrAar",value:{name:"number",required:!1}},{key:"fordeltPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"nyttArbeidsforhold",value:{name:"boolean",required:!1}},{key:"refusjonskravFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"refusjonskravPrAar",value:{name:"number",required:!1}},{key:"kilde",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus?: string;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: string;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}>`}],raw:"FordelBeregningsgrunnlagAndel[]",required:!1}},{key:"skalRedigereInntekt",value:{name:"boolean",required:!1}},{key:"skalPreutfyllesMedBeregningsgrunnlag",value:{name:"boolean",required:!1}},{key:"skalKunneEndreRefusjon",value:{name:"boolean",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom?: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}>`}],raw:"FordelBeregningsgrunnlagPeriode[]",required:!1}}]}}],raw:`Readonly<{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}>`,required:!1}}]}}],raw:`Readonly<{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
}>`,required:!1}},{key:"andelerMedGraderingUtenBG",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdVisning",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!0}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: string;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"bortfaltNaturalytelse",value:{name:"number",required:!1}},{key:"tilkommetNaturalytelse",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;

  // Fjern disse to da er flyttet inn i arbeidsforhold objektet over her
  bortfaltNaturalytelse?: number;
  tilkommetNaturalytelse?: number;

  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}},{key:"ytelsesspesifiktGrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ytelsetype: string;
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}`,signature:{properties:[{key:"ytelsetype",value:{name:"string",required:!0}},{key:"besteberegninggrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteMåneder: Månedsgrunnlag[];
}`,signature:{properties:[{key:"besteMåneder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}`,signature:{properties:[{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"opptjeningAktivitetType",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}>`}],raw:"BesteberegningInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>`}],raw:"Månedsgrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  besteMåneder: Månedsgrunnlag[];
}>`,required:!1}}]}}],raw:`Readonly<{
  ytelsetype: string;
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}>`,required:!1}},{key:"refusjonTilVurdering",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: RefusjonTilVurderingAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"tidligereUtbetalinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"erTildeltRefusjon",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}>`}],raw:"TidligereUtbetalinger[]",required:!1}},{key:"nyttRefusjonskravFom",value:{name:"string",required:!0}},{key:"fastsattNyttRefusjonskravFom",value:{name:"string",required:!1}},{key:"tidligsteMuligeRefusjonsdato",value:{name:"string",required:!0}},{key:"arbeidsgiver",value:{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  arbeidsgiverAktørId?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"arbeidsgiverAktørId",value:{name:"string",required:!1}}]},required:!1}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdRef",value:{name:"string",required:!1}},{key:"skalKunneFastsetteDelvisRefusjon",value:{name:"boolean",required:!0}},{key:"fastsattDelvisRefusjonPrMnd",value:{name:"number",required:!1}},{key:"maksTillattDelvisRefusjonPrMnd",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}>`}],raw:"RefusjonTilVurderingAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: RefusjonTilVurderingAndel[];
}>`,required:!1}},{key:"inntektsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  måneder?: InntektsgrunnlagMåned[];
}`,signature:{properties:[{key:"måneder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektAktivitetType: string;
  beløp: number;
}`,signature:{properties:[{key:"inntektAktivitetType",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  inntektAktivitetType: string;
  beløp: number;
}>`}],raw:"InntektsgrunnlagInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}>`}],raw:"InntektsgrunnlagMåned[]",required:!1}}]}}],raw:`Readonly<{
  måneder?: InntektsgrunnlagMåned[];
}>`,required:!1}}]}}],raw:`Readonly<{
  skjaeringstidspunktBeregning: string;
  dekningsgrad: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: string[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlag?: SammenligningsgrunlagProp;
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  andelerMedGraderingUtenBG?: BeregningsgrunnlagAndel[];
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
}>`},description:""},arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""}}};const LK={besteMåneder:[{fom:"2020-01-01",tom:"2020-01-31",inntekter:[{opptjeningAktivitetType:Vn.DAGPENGER,inntekt:5531},{opptjeningAktivitetType:Vn.ARBEID,arbeidsgiverId:"974652269",inntekt:2e4}]},{fom:"2020-02-01",tom:"2020-02-29",inntekter:[{opptjeningAktivitetType:Vn.DAGPENGER,inntekt:5531}]},{fom:"2020-03-01",tom:"2020-03-31",inntekter:[{opptjeningAktivitetType:Vn.DAGPENGER,inntekt:5531},{opptjeningAktivitetType:Vn.ARBEID,arbeidsgiverId:"974652269",inntekt:4321},{opptjeningAktivitetType:Vn.DAGPENGER,inntekt:354},{opptjeningAktivitetType:Vn.ARBEID,arbeidsgiverId:"6823424234232",inntekt:32894}]},{fom:"2020-04-01",tom:"2020-04-30",inntekter:[{opptjeningAktivitetType:Vn.DAGPENGER,inntekt:5531},{opptjeningAktivitetType:Vn.ARBEID,arbeidsgiverId:"974652269",inntekt:25322}]},{fom:"2020-05-01",tom:"2020-05-31",inntekter:[{opptjeningAktivitetType:Vn.DAGPENGER,inntekt:354},{opptjeningAktivitetType:Vn.DAGPENGER,inntekt:5531}]},{fom:"2020-06-01",tom:"2020-06-30",inntekter:[{opptjeningAktivitetType:Vn.DAGPENGER,inntekt:5531},{opptjeningAktivitetType:Vn.DAGPENGER,inntekt:354}]}]},ts={skjaeringstidspunktBeregning:"2020-01-13",skjæringstidspunkt:"2020-01-13",aktivitetStatus:["AT","DP"],beregningsgrunnlagPeriode:[{beregningsgrunnlagPeriodeFom:"2020-01-13",beregnetPrAar:56e4,bruttoPrAar:75e4,bruttoInkludertBortfaltNaturalytelsePrAar:0,avkortetPrAar:6e5,redusertPrAar:6e5,periodeAarsaker:[],beregningsgrunnlagPrStatusOgAndel:[{aktivitetStatus:"AT",beregningsperiodeFom:"2019-10-01",beregningsperiodeTom:"2019-12-31",beregnetPrAar:36e4,andelsnr:1,besteberegningPrAar:4e5,inntektskategori:"ARBEIDSTAKER",arbeidsforhold:{arbeidsgiverNavn:"BEDRIFT AS",arbeidsgiverId:"974652269",startdato:"2019-02-03",opphoersdato:"2020-02-03",arbeidsforholdType:"ARBEID",belopFraInntektsmeldingPrMnd:3e4,organisasjonstype:"VIRKSOMHET"},fastsattAvSaksbehandler:!1,lagtTilAvSaksbehandler:!1,belopPrMndEtterAOrdningen:1e4,belopPrAarEtterAOrdningen:12e4,erTilkommetAndel:!1,skalFastsetteGrunnlag:!1},{beregningsperiodeFom:"2019-10-01",beregningsperiodeTom:"2019-12-31",aktivitetStatus:"DP",beregnetPrAar:2e5,andelsnr:2,besteberegningPrAar:35e4,inntektskategori:"DAGPENGER",fastsattAvSaksbehandler:!1,lagtTilAvSaksbehandler:!1,belopPrMndEtterAOrdningen:1e4,belopPrAarEtterAOrdningen:12e4,erTilkommetAndel:!1,skalFastsetteGrunnlag:!1}]}],ytelsesspesifiktGrunnlag:{besteberegninggrunnlag:LK,ytelsetype:"FP"},sammenligningsgrunnlagPrStatus:[],halvG:49929,grunnbeløp:99858,hjemmel:"-",årsinntektVisningstall:0,dekningsgrad:100,erOverstyrtInntekt:!1},KK={974652269:{identifikator:"974652269",navn:"BEDRIFT AS",erPrivatPerson:!1},6823424234232:{identifikator:"6823424234232",navn:"Testy Test",erPrivatPerson:!0,fødselsdato:"1943-03-03"}},Xl=(e,t,r)=>({definisjon:e,status:t,kanLoses:!0,begrunnelse:r}),jK={title:"fakta/fakta-besteberegning",component:zl,decorators:[Pl],args:{submitCallback:ah("button-click"),readOnly:!1,submittable:!0,alleMerknaderFraBeslutter:{},alleKodeverk:D_,arbeidsgiverOpplysninger:KK,behandling:{uuid:"1",versjon:1}}},nt={args:{aksjonspunkter:[],harApneAksjonspunkter:!1,beregningsgrunnlag:ts}},rt={args:{beregningsgrunnlag:ts,aksjonspunkter:[Xl(ct.KONTROLLER_AUTOMATISK_BESTEBEREGNING,Jt.OPPRETTET)],harApneAksjonspunkter:!0}},tt={args:{beregningsgrunnlag:ts,aksjonspunkter:[Xl(ct.KONTROLLER_AUTOMATISK_BESTEBEREGNING,Jt.UTFORT,"Min begrunnelse for at besteberegningen er feil")],harApneAksjonspunkter:!1}},at={args:{beregningsgrunnlag:ts,aksjonspunkter:[Xl(ct.MANUELL_KONTROLL_AV_BESTEBEREGNING,Jt.OPPRETTET)],harApneAksjonspunkter:!0}};var of,lf,uf;nt.parameters={...nt.parameters,docs:{...(of=nt.parameters)==null?void 0:of.docs,source:{originalSource:`{
  args: {
    aksjonspunkter: [],
    harApneAksjonspunkter: false,
    beregningsgrunnlag: scenarioBG
  }
}`,...(uf=(lf=nt.parameters)==null?void 0:lf.docs)==null?void 0:uf.source}}};var df,gf,kf;rt.parameters={...rt.parameters,docs:{...(df=rt.parameters)==null?void 0:df.docs,source:{originalSource:`{
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkter: [lagAksjonspunkt(AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING, AksjonspunktStatus.OPPRETTET)],
    harApneAksjonspunkter: true
  }
}`,...(kf=(gf=rt.parameters)==null?void 0:gf.docs)==null?void 0:kf.source}}};var ff,mf,vf;tt.parameters={...tt.parameters,docs:{...(ff=tt.parameters)==null?void 0:ff.docs,source:{originalSource:`{
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkter: [lagAksjonspunkt(AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING, AksjonspunktStatus.UTFORT, 'Min begrunnelse for at besteberegningen er feil')],
    harApneAksjonspunkter: false
  }
}`,...(vf=(mf=tt.parameters)==null?void 0:mf.docs)==null?void 0:vf.source}}};var Ef,bf,Tf;at.parameters={...at.parameters,docs:{...(Ef=at.parameters)==null?void 0:Ef.docs,source:{originalSource:`{
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkter: [lagAksjonspunkt(AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING, AksjonspunktStatus.OPPRETTET)],
    harApneAksjonspunkter: true
  }
}`,...(Tf=(bf=at.parameters)==null?void 0:bf.docs)==null?void 0:Tf.source}}};var yf,pf,Af;nt.parameters={...nt.parameters,docs:{...(yf=nt.parameters)==null?void 0:yf.docs,source:{originalSource:`{
  args: {
    aksjonspunkter: [],
    harApneAksjonspunkter: false,
    beregningsgrunnlag: scenarioBG
  }
}`,...(Af=(pf=nt.parameters)==null?void 0:pf.docs)==null?void 0:Af.source}}};var cf,hf,Rf;rt.parameters={...rt.parameters,docs:{...(cf=rt.parameters)==null?void 0:cf.docs,source:{originalSource:`{
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkter: [lagAksjonspunkt(AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING, AksjonspunktStatus.OPPRETTET)],
    harApneAksjonspunkter: true
  }
}`,...(Rf=(hf=rt.parameters)==null?void 0:hf.docs)==null?void 0:Rf.source}}};var _f,Sf,Nf;tt.parameters={...tt.parameters,docs:{...(_f=tt.parameters)==null?void 0:_f.docs,source:{originalSource:`{
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkter: [lagAksjonspunkt(AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING, AksjonspunktStatus.UTFORT, 'Min begrunnelse for at besteberegningen er feil')],
    harApneAksjonspunkter: false
  }
}`,...(Nf=(Sf=tt.parameters)==null?void 0:Sf.docs)==null?void 0:Nf.source}}};var If,Pf,Of;at.parameters={...at.parameters,docs:{...(If=at.parameters)==null?void 0:If.docs,source:{originalSource:`{
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkter: [lagAksjonspunkt(AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING, AksjonspunktStatus.OPPRETTET)],
    harApneAksjonspunkter: true
  }
}`,...(Of=(Pf=at.parameters)==null?void 0:Pf.docs)==null?void 0:Of.source}}};const UK=["BesteberegningMedDagpengerOgArbeid","BesteberegningMedDagpengerOgArbeidÅpentAksjonspunkt","BesteberegningMedDagpengerOgArbeidLukketAksjonspunktPåVent","BesteberegningMedAvvik"];export{at as BesteberegningMedAvvik,nt as BesteberegningMedDagpengerOgArbeid,tt as BesteberegningMedDagpengerOgArbeidLukketAksjonspunktPåVent,rt as BesteberegningMedDagpengerOgArbeidÅpentAksjonspunkt,UK as __namedExportsOrder,jK as default};
