import{v as ro}from"./v4-CtRu48qb.js";import{j as b}from"./jsx-runtime-CLpGMVip.js";import{r as m,R as D,b as ds}from"./index-CYQpqK1Q.js";import{d as de}from"./dayjs.min-DPY8FYmS.js";import{r as to}from"./index-4Uuc9FQs.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CjktTq3Q.js";const{addons:ao}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:so}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:Pt}=__STORYBOOK_MODULE_GLOBAL__;var io="storybook/actions",oo=`${io}/action-event`,lo={depth:10,clearOnStoryChange:!0,limit:50},us=(e,n)=>{let t=Object.getPrototypeOf(e);return!t||n(t)?t:us(t,n)},uo=e=>!!(typeof e=="object"&&e&&us(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),go=e=>{if(uo(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let t=Object.getOwnPropertyDescriptor(n,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...t,value:Object.create(r.constructor.prototype)}),n}return e},ko=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?ro():Date.now().toString(36)+Math.random().toString(36).substring(2);function mo(e,n={}){let t={...lo,...n},r=function(...a){var g,k;if(n.implicit){let E=(g="__STORYBOOK_PREVIEW__"in Pt?Pt.__STORYBOOK_PREVIEW__:void 0)==null?void 0:g.storyRenders.find(f=>f.phase==="playing"||f.phase==="rendering");if(E){let f=!((k=window==null?void 0:window.FEATURES)!=null&&k.disallowImplicitActionsInRenderV8),v=new so({phase:E.phase,name:e,deprecated:f});if(f)console.warn(v);else throw v}}let s=ao.getChannel(),i=ko(),o=5,l=a.map(go),d=a.length>1?l:l[0],u={id:i,count:0,data:{name:e,args:d},options:{...t,maxDepth:o+(t.depth||3),allowFunction:t.allowFunction||!1}};s.emit(oo,u)};return r.isAction=!0,r.implicit=n.implicit,r}var ur=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN="5032",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYR_BEREGNING="6007",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(ur||{}),tt=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(tt||{}),gr=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(gr||{}),me=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(me||{});gr.BRUKERS_ANDEL;gr.FRILANS;gr.EGEN_NÆRING;var qr=(e=>(e.UDEFINERT="UDEFINERT",e.BRUK="BRUK",e.NYTT_ARBEIDSFORHOLD="NYTT_ARBEIDSFORHOLD",e.BRUK_UTEN_INNTEKTSMELDING="BRUK_UTEN_INNTEKTSMELDING",e.IKKE_BRUK="IKKE_BRUK",e.SLÅTT_SAMMEN_MED_ANNET="SLÅTT_SAMMEN_MED_ANNET",e.LAGT_TIL_AV_SAKSBEHANDLER="LAGT_TIL_AV_SAKSBEHANDLER",e.BRUK_MED_OVERSTYRT_PERIODE="BRUK_MED_OVERSTYRT_PERIODE",e.INNTEKT_IKKE_MED_I_BG="INNTEKT_IKKE_MED_I_BG",e))(qr||{}),at=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(at||{}),kr=(e=>(e.ARBEID_TYPE="ArbeidType",e.AVSLAGSARSAK="Avslagsårsak",e.VENT_AARSAK="Venteårsak",e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.KLAGE_AVVIST_AARSAK="KlageAvvistÅrsak",e.KLAGE_MEDHOLD_ARSAK="KlageMedholdÅrsak",e.KLAGE_HJEMMEL="KlageHjemmel",e.OMSORGSOVERTAKELSE_VILKAR_TYPE="OmsorgsovertakelseVilkårType",e.MEDLEMSKAP_MANUELL_VURDERING_TYPE="MedlemskapManuellVurderingType",e.VERGE_TYPE="VergeType",e.LANDKODER="Landkoder",e.MORS_AKTIVITET="MorsAktivitet",e.VIRKSOMHET_TYPE="VirksomhetType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.PERSONSTATUS_TYPE="PersonstatusType",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.FORELDRE_TYPE="ForeldreType",e.FAMILIE_HENDELSE_TYPE="FamilieHendelseType",e.INNSYN_RESULTAT_TYPE="InnsynResultatType",e.BEHANDLING_TYPE="BehandlingType",e.OPPHOLD_ARSAK="OppholdÅrsak",e.UTSETTELSE_AARSAK_TYPE="UtsettelseÅrsak",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.UTTAK_PERIODE_TYPE="UttakPeriodeType",e.REVURDERING_VARSLING_ÅRSAK="RevurderingVarslingÅrsak",e.MANUELL_BEHANDLING_AARSAK="ManuellBehandlingÅrsak",e.PERIODE_RESULTAT_AARSAK="PeriodeResultatÅrsak",e.INNTEKTSKATEGORI="Inntektskategori",e.BEREGNINGSGRUNNLAG_ANDELTYPER="BeregningsgrunnlagAndeltype",e.AKTIVITET_STATUS="AktivitetStatus",e.ARBEIDSKATEGORI="Arbeidskategori",e.FAGSYSTEM="Fagsystem",e.REGION="Region",e.SIVILSTAND_TYPE="SivilstandType",e.FAKTA_OM_BEREGNING_TILFELLE="FaktaOmBeregningTilfelle",e.GRADERING_AVSLAG_AARSAK="GraderingAvslagÅrsak",e.SKJERMLENKE_TYPE="SkjermlenkeType",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.ARBEIDSFORHOLD_HANDLING_TYPE="ArbeidsforholdHandlingType",e.HISTORIKK_OPPLYSNING_TYPE="HistorikkOpplysningType",e.HISTORIKK_ENDRET_FELT_TYPE="HistorikkEndretFeltType",e.HISTORIKKINNSLAG_TYPE="HistorikkinnslagType",e.HISTORIKK_AKTOER="HistorikkAktør",e.BEHANDLING_STATUS="BehandlingStatus",e.FAR_SOEKER_TYPE="FarSøkerType",e.MEDLEMSKAP_DEKNING="MedlemskapDekningType",e.MEDLEMSKAP_TYPE="MedlemskapType",e.STOENADSKONTOTYPE="StønadskontoType",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.UTTAK_ARBEID_TYPE="UttakArbeidType",e.UTTAK_UTSETTELSE_TYPE="UttakUtsettelseType",e.VILKAR_TYPE="VilkårType",e.AKTSOMHET="Aktsomhet",e.VURDERING="AnnenVurdering",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.PERMISJONSBESKRIVELSE_TYPE="PermisjonsbeskrivelseType",e.VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG="VurderArbeidsforholdHistorikkinnslag",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.VURDER_AARSAK="VurderÅrsak",e.ANKE_OMGJOER_AARSAK="AnkeOmgjørÅrsak",e.AKTIVITETSKRAV_AVKLARING="KontrollerAktivitetskravAvklaring",e.OPPHOLDSTILLATELSE_TYPE="OppholdstillatelseType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e.FORDELING_PERIODE_KILDE="FordelingPeriodeKilde",e.RELASJONSROLLE_TYPE="RelasjonsRolleType",e.FAGSAK_MARKERING="FagsakMarkering",e.ADRESSE_TYPE="AdresseType",e.NATURAL_YTELSE_TYPE="NaturalYtelseType",e))(kr||{});const vo=(e,n,t,r)=>{let a=e[n];if(!a||a.length===0)return"";r&&(a=a[r]);const s=a.find(i=>i.kode===t);return s?s.navn:""},gs=e=>(n,t,r)=>vo(e,t,n,r);var ks=(e=>(e.KVINNE="K",e.MANN="M",e.UDEFINERT="-",e))(ks||{}),ms=(e=>(e.MOR="MORA",e.FAR="FARA",e.MEDMOR="MMOR",e))(ms||{}),Dn=(e=>(e.FODSEL="ST-001",e.ADOPSJON="ST-002",e))(Dn||{}),jr=(e=>(e.FELLESPERIODE="FELLESPERIODE",e.MØDREKVOTE="MØDREKVOTE",e.FEDREKVOTE="FEDREKVOTE",e.FORELDREPENGER="FORELDREPENGER",e.UTEN_AKTIVITETSKRAV="UTEN_AKTIVITETSKRAV",e.MINSTERETT_NESTE_STØNADSPERIODE="MINSTERETT_NESTE_STØNADSPERIODE",e.MINSTERETT="MINSTERETT",e.FLERBARNSDAGER="FLERBARNSDAGER",e.FORELDREPENGER_FØR_FØDSEL="FORELDREPENGER_FØR_FØDSEL",e.UDEFINERT="-",e))(jr||{}),wr=function(e,n){return wr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])},wr(e,n)};function Te(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");wr(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var w=function(){return w=Object.assign||function(n){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},w.apply(this,arguments)};function kn(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t}function Ae(e,n,t){if(t||arguments.length===2)for(var r=0,a=n.length,s;r<a;r++)(s||!(r in n))&&(s||(s=Array.prototype.slice.call(n,0,r)),s[r]=n[r]);return e.concat(s||Array.prototype.slice.call(n))}function Re(e,n){var t=n&&n.cache?n.cache:co,r=n&&n.serializer?n.serializer:po,a=n&&n.strategy?n.strategy:fo;return a(e,{cache:t,serializer:r})}function Eo(e){return e==null||typeof e=="number"||typeof e=="boolean"}function vs(e,n,t,r){var a=Eo(r)?r:t(r),s=n.get(a);return typeof s>"u"&&(s=e.call(this,r),n.set(a,s)),s}function Es(e,n,t){var r=Array.prototype.slice.call(arguments,3),a=t(r),s=n.get(a);return typeof s>"u"&&(s=e.apply(this,r),n.set(a,s)),s}function st(e,n,t,r,a){return t.bind(n,e,r,a)}function fo(e,n){var t=e.length===1?vs:Es;return st(e,this,t,n.cache.create(),n.serializer)}function yo(e,n){return st(e,this,Es,n.cache.create(),n.serializer)}function To(e,n){return st(e,this,vs,n.cache.create(),n.serializer)}var po=function(){return JSON.stringify(arguments)},Ro=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(n){return this.cache[n]},e.prototype.set=function(n,t){this.cache[n]=t},e}(),co={create:function(){return new Ro}},ce={variadic:yo,monadic:To},x;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(x||(x={}));var X;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(X||(X={}));var mn;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(mn||(mn={}));function Ft(e){return e.type===X.literal}function Ao(e){return e.type===X.argument}function fs(e){return e.type===X.number}function ys(e){return e.type===X.date}function Ts(e){return e.type===X.time}function ps(e){return e.type===X.select}function Rs(e){return e.type===X.plural}function bo(e){return e.type===X.pound}function cs(e){return e.type===X.tag}function As(e){return!!(e&&typeof e=="object"&&e.type===mn.number)}function Mr(e){return!!(e&&typeof e=="object"&&e.type===mn.dateTime)}var bs=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,ho=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function So(e){var n={};return e.replace(ho,function(t){var r=t.length;switch(t[0]){case"G":n.era=r===4?"long":r===5?"narrow":"short";break;case"y":n.year=r===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":n.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":n.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":n.weekday=r===4?"long":r===5?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][r-4];break;case"a":n.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":n.hourCycle="h12",n.hour=["numeric","2-digit"][r-1];break;case"H":n.hourCycle="h23",n.hour=["numeric","2-digit"][r-1];break;case"K":n.hourCycle="h11",n.hour=["numeric","2-digit"][r-1];break;case"k":n.hourCycle="h24",n.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":n.minute=["numeric","2-digit"][r-1];break;case"s":n.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":n.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),n}var _o=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function No(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var n=e.split(_o).filter(function(k){return k.length>0}),t=[],r=0,a=n;r<a.length;r++){var s=a[r],i=s.split("/");if(i.length===0)throw new Error("Invalid number skeleton");for(var o=i[0],l=i.slice(1),d=0,u=l;d<u.length;d++){var g=u[d];if(g.length===0)throw new Error("Invalid number skeleton")}t.push({stem:o,options:l})}return t}function Io(e){return e.replace(/^(.*?)-/,"")}var qt=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,hs=/^(@+)?(\+|#+)?[rs]?$/g,Oo=/(\*)(0+)|(#+)(0+)|(0+)/g,Ss=/^(0+)$/;function jt(e){var n={};return e[e.length-1]==="r"?n.roundingPriority="morePrecision":e[e.length-1]==="s"&&(n.roundingPriority="lessPrecision"),e.replace(hs,function(t,r,a){return typeof a!="string"?(n.minimumSignificantDigits=r.length,n.maximumSignificantDigits=r.length):a==="+"?n.minimumSignificantDigits=r.length:r[0]==="#"?n.maximumSignificantDigits=r.length:(n.minimumSignificantDigits=r.length,n.maximumSignificantDigits=r.length+(typeof a=="string"?a.length:0)),""}),n}function _s(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Ko(e){var n;if(e[0]==="E"&&e[1]==="E"?(n={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(n={notation:"scientific"},e=e.slice(1)),n){var t=e.slice(0,2);if(t==="+!"?(n.signDisplay="always",e=e.slice(2)):t==="+?"&&(n.signDisplay="exceptZero",e=e.slice(2)),!Ss.test(e))throw new Error("Malformed concise eng/scientific notation");n.minimumIntegerDigits=e.length}return n}function wt(e){var n={},t=_s(e);return t||n}function Do(e){for(var n={},t=0,r=e;t<r.length;t++){var a=r[t];switch(a.stem){case"percent":case"%":n.style="percent";continue;case"%x100":n.style="percent",n.scale=100;continue;case"currency":n.style="currency",n.currency=a.options[0];continue;case"group-off":case",_":n.useGrouping=!1;continue;case"precision-integer":case".":n.maximumFractionDigits=0;continue;case"measure-unit":case"unit":n.style="unit",n.unit=Io(a.options[0]);continue;case"compact-short":case"K":n.notation="compact",n.compactDisplay="short";continue;case"compact-long":case"KK":n.notation="compact",n.compactDisplay="long";continue;case"scientific":n=w(w(w({},n),{notation:"scientific"}),a.options.reduce(function(l,d){return w(w({},l),wt(d))},{}));continue;case"engineering":n=w(w(w({},n),{notation:"engineering"}),a.options.reduce(function(l,d){return w(w({},l),wt(d))},{}));continue;case"notation-simple":n.notation="standard";continue;case"unit-width-narrow":n.currencyDisplay="narrowSymbol",n.unitDisplay="narrow";continue;case"unit-width-short":n.currencyDisplay="code",n.unitDisplay="short";continue;case"unit-width-full-name":n.currencyDisplay="name",n.unitDisplay="long";continue;case"unit-width-iso-code":n.currencyDisplay="symbol";continue;case"scale":n.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":n.roundingMode="floor";continue;case"rounding-mode-ceiling":n.roundingMode="ceil";continue;case"rounding-mode-down":n.roundingMode="trunc";continue;case"rounding-mode-up":n.roundingMode="expand";continue;case"rounding-mode-half-even":n.roundingMode="halfEven";continue;case"rounding-mode-half-down":n.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":n.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(Oo,function(l,d,u,g,k,E){if(d)n.minimumIntegerDigits=u.length;else{if(g&&k)throw new Error("We currently do not support maximum integer digits");if(E)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Ss.test(a.stem)){n.minimumIntegerDigits=a.stem.length;continue}if(qt.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(qt,function(l,d,u,g,k,E){return u==="*"?n.minimumFractionDigits=d.length:g&&g[0]==="#"?n.maximumFractionDigits=g.length:k&&E?(n.minimumFractionDigits=k.length,n.maximumFractionDigits=k.length+E.length):(n.minimumFractionDigits=d.length,n.maximumFractionDigits=d.length),""});var s=a.options[0];s==="w"?n=w(w({},n),{trailingZeroDisplay:"stripIfInteger"}):s&&(n=w(w({},n),jt(s)));continue}if(hs.test(a.stem)){n=w(w({},n),jt(a.stem));continue}var i=_s(a.stem);i&&(n=w(w({},n),i));var o=Ko(a.stem);o&&(n=w(w({},n),o))}return n}var Hn={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Lo(e,n){for(var t="",r=0;r<e.length;r++){var a=e.charAt(r);if(a==="j"){for(var s=0;r+1<e.length&&e.charAt(r+1)===a;)s++,r++;var i=1+(s&1),o=s<2?1:3+(s>>1),l="a",d=Po(n);for((d=="H"||d=="k")&&(o=0);o-- >0;)t+=l;for(;i-- >0;)t=d+t}else a==="J"?t+="H":t+=a}return t}function Po(e){var n=e.hourCycle;if(n===void 0&&e.hourCycles&&e.hourCycles.length&&(n=e.hourCycles[0]),n)switch(n){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=e.language,r;t!=="root"&&(r=e.maximize().region);var a=Hn[r||""]||Hn[t||""]||Hn["".concat(t,"-001")]||Hn["001"];return a[0]}var pr,Fo=new RegExp("^".concat(bs.source,"*")),qo=new RegExp("".concat(bs.source,"*$"));function C(e,n){return{start:e,end:n}}var jo=!!String.prototype.startsWith&&"_a".startsWith("a",1),wo=!!String.fromCodePoint,Mo=!!Object.fromEntries,Bo=!!String.prototype.codePointAt,Vo=!!String.prototype.trimStart,Go=!!String.prototype.trimEnd,Ho=!!Number.isSafeInteger,Uo=Ho?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Br=!0;try{var xo=Is("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Br=((pr=xo.exec("a"))===null||pr===void 0?void 0:pr[0])==="a"}catch{Br=!1}var Mt=jo?function(n,t,r){return n.startsWith(t,r)}:function(n,t,r){return n.slice(r,r+t.length)===t},Vr=wo?String.fromCodePoint:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];for(var r="",a=n.length,s=0,i;a>s;){if(i=n[s++],i>1114111)throw RangeError(i+" is not a valid code point");r+=i<65536?String.fromCharCode(i):String.fromCharCode(((i-=65536)>>10)+55296,i%1024+56320)}return r},Bt=Mo?Object.fromEntries:function(n){for(var t={},r=0,a=n;r<a.length;r++){var s=a[r],i=s[0],o=s[1];t[i]=o}return t},Ns=Bo?function(n,t){return n.codePointAt(t)}:function(n,t){var r=n.length;if(!(t<0||t>=r)){var a=n.charCodeAt(t),s;return a<55296||a>56319||t+1===r||(s=n.charCodeAt(t+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},Yo=Vo?function(n){return n.trimStart()}:function(n){return n.replace(Fo,"")},Co=Go?function(n){return n.trimEnd()}:function(n){return n.replace(qo,"")};function Is(e,n){return new RegExp(e,n)}var Gr;if(Br){var Vt=Is("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Gr=function(n,t){var r;Vt.lastIndex=t;var a=Vt.exec(n);return(r=a[1])!==null&&r!==void 0?r:""}}else Gr=function(n,t){for(var r=[];;){var a=Ns(n,t);if(a===void 0||Os(a)||zo(a))break;r.push(a),t+=a>=65536?2:1}return Vr.apply(void 0,r)};var $o=function(){function e(n,t){t===void 0&&(t={}),this.message=n,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(n,t,r){for(var a=[];!this.isEOF();){var s=this.char();if(s===123){var i=this.parseArgument(n,r);if(i.err)return i;a.push(i.val)}else{if(s===125&&n>0)break;if(s===35&&(t==="plural"||t==="selectordinal")){var o=this.clonePosition();this.bump(),a.push({type:X.pound,location:C(o,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(r)break;return this.error(x.UNMATCHED_CLOSING_TAG,C(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&Hr(this.peek()||0)){var i=this.parseTag(n,t);if(i.err)return i;a.push(i.val)}else{var i=this.parseLiteral(n,t);if(i.err)return i;a.push(i.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(n,t){var r=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:X.literal,value:"<".concat(a,"/>"),location:C(r,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(n+1,t,!0);if(s.err)return s;var i=s.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Hr(this.char()))return this.error(x.INVALID_TAG,C(o,this.clonePosition()));var l=this.clonePosition(),d=this.parseTagName();return a!==d?this.error(x.UNMATCHED_CLOSING_TAG,C(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:X.tag,value:a,children:i,location:C(r,this.clonePosition())},err:null}:this.error(x.INVALID_TAG,C(o,this.clonePosition())))}else return this.error(x.UNCLOSED_TAG,C(r,this.clonePosition()))}else return this.error(x.INVALID_TAG,C(r,this.clonePosition()))},e.prototype.parseTagName=function(){var n=this.offset();for(this.bump();!this.isEOF()&&Wo(this.char());)this.bump();return this.message.slice(n,this.offset())},e.prototype.parseLiteral=function(n,t){for(var r=this.clonePosition(),a="";;){var s=this.tryParseQuote(t);if(s){a+=s;continue}var i=this.tryParseUnquoted(n,t);if(i){a+=i;continue}var o=this.tryParseLeftAngleBracket();if(o){a+=o;continue}break}var l=C(r,this.clonePosition());return{val:{type:X.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Jo(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(n){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(n==="plural"||n==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var r=this.char();if(r===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(r);this.bump()}return Vr.apply(void 0,t)},e.prototype.tryParseUnquoted=function(n,t){if(this.isEOF())return null;var r=this.char();return r===60||r===123||r===35&&(t==="plural"||t==="selectordinal")||r===125&&n>0?null:(this.bump(),Vr(r))},e.prototype.parseArgument=function(n,t){var r=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(x.EXPECT_ARGUMENT_CLOSING_BRACE,C(r,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(x.EMPTY_ARGUMENT,C(r,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(x.MALFORMED_ARGUMENT,C(r,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(x.EXPECT_ARGUMENT_CLOSING_BRACE,C(r,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:X.argument,value:a,location:C(r,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(x.EXPECT_ARGUMENT_CLOSING_BRACE,C(r,this.clonePosition())):this.parseArgumentOptions(n,t,a,r);default:return this.error(x.MALFORMED_ARGUMENT,C(r,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var n=this.clonePosition(),t=this.offset(),r=Gr(this.message,t),a=t+r.length;this.bumpTo(a);var s=this.clonePosition(),i=C(n,s);return{value:r,location:i}},e.prototype.parseArgumentOptions=function(n,t,r,a){var s,i=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(x.EXPECT_ARGUMENT_TYPE,C(i,l));case"number":case"date":case"time":{this.bumpSpace();var d=null;if(this.bumpIf(",")){this.bumpSpace();var u=this.clonePosition(),g=this.parseSimpleArgStyleIfPossible();if(g.err)return g;var k=Co(g.val);if(k.length===0)return this.error(x.EXPECT_ARGUMENT_STYLE,C(this.clonePosition(),this.clonePosition()));var E=C(u,this.clonePosition());d={style:k,styleLocation:E}}var f=this.tryParseArgumentClose(a);if(f.err)return f;var v=C(a,this.clonePosition());if(d&&Mt(d==null?void 0:d.style,"::",0)){var h=Yo(d.style.slice(2));if(o==="number"){var g=this.parseNumberSkeletonFromString(h,d.styleLocation);return g.err?g:{val:{type:X.number,value:r,location:v,style:g.val},err:null}}else{if(h.length===0)return this.error(x.EXPECT_DATE_TIME_SKELETON,v);var y=h;this.locale&&(y=Lo(h,this.locale));var k={type:mn.dateTime,pattern:y,location:d.styleLocation,parsedOptions:this.shouldParseSkeletons?So(y):{}},T=o==="date"?X.date:X.time;return{val:{type:T,value:r,location:v,style:k},err:null}}}return{val:{type:o==="number"?X.number:o==="date"?X.date:X.time,value:r,location:v,style:(s=d==null?void 0:d.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var c=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(x.EXPECT_SELECT_ARGUMENT_OPTIONS,C(c,w({},c)));this.bumpSpace();var _=this.parseIdentifierIfPossible(),p=0;if(o!=="select"&&_.value==="offset"){if(!this.bumpIf(":"))return this.error(x.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,C(this.clonePosition(),this.clonePosition()));this.bumpSpace();var g=this.tryParseDecimalInteger(x.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,x.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(g.err)return g;this.bumpSpace(),_=this.parseIdentifierIfPossible(),p=g.val}var K=this.tryParsePluralOrSelectOptions(n,o,t,_);if(K.err)return K;var f=this.tryParseArgumentClose(a);if(f.err)return f;var I=C(a,this.clonePosition());return o==="select"?{val:{type:X.select,value:r,options:Bt(K.val),location:I},err:null}:{val:{type:X.plural,value:r,options:Bt(K.val),offset:p,pluralType:o==="plural"?"cardinal":"ordinal",location:I},err:null}}default:return this.error(x.INVALID_ARGUMENT_TYPE,C(i,l))}},e.prototype.tryParseArgumentClose=function(n){return this.isEOF()||this.char()!==125?this.error(x.EXPECT_ARGUMENT_CLOSING_BRACE,C(n,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var n=0,t=this.clonePosition();!this.isEOF();){var r=this.char();switch(r){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(x.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,C(a,this.clonePosition()));this.bump();break}case 123:{n+=1,this.bump();break}case 125:{if(n>0)n-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(n,t){var r=[];try{r=No(n)}catch{return this.error(x.INVALID_NUMBER_SKELETON,t)}return{val:{type:mn.number,tokens:r,location:t,parsedOptions:this.shouldParseSkeletons?Do(r):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(n,t,r,a){for(var s,i=!1,o=[],l=new Set,d=a.value,u=a.location;;){if(d.length===0){var g=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var k=this.tryParseDecimalInteger(x.EXPECT_PLURAL_ARGUMENT_SELECTOR,x.INVALID_PLURAL_ARGUMENT_SELECTOR);if(k.err)return k;u=C(g,this.clonePosition()),d=this.message.slice(g.offset,this.offset())}else break}if(l.has(d))return this.error(t==="select"?x.DUPLICATE_SELECT_ARGUMENT_SELECTOR:x.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,u);d==="other"&&(i=!0),this.bumpSpace();var E=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?x.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:x.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,C(this.clonePosition(),this.clonePosition()));var f=this.parseMessage(n+1,t,r);if(f.err)return f;var v=this.tryParseArgumentClose(E);if(v.err)return v;o.push([d,{value:f.val,location:C(E,this.clonePosition())}]),l.add(d),this.bumpSpace(),s=this.parseIdentifierIfPossible(),d=s.value,u=s.location}return o.length===0?this.error(t==="select"?x.EXPECT_SELECT_ARGUMENT_SELECTOR:x.EXPECT_PLURAL_ARGUMENT_SELECTOR,C(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!i?this.error(x.MISSING_OTHER_CLAUSE,C(this.clonePosition(),this.clonePosition())):{val:o,err:null}},e.prototype.tryParseDecimalInteger=function(n,t){var r=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);for(var s=!1,i=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)s=!0,i=i*10+(o-48),this.bump();else break}var l=C(a,this.clonePosition());return s?(i*=r,Uo(i)?{val:i,err:null}:this.error(t,l)):this.error(n,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var n=this.position.offset;if(n>=this.message.length)throw Error("out of bound");var t=Ns(this.message,n);if(t===void 0)throw Error("Offset ".concat(n," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(n,t){return{val:null,err:{kind:n,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var n=this.char();n===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=n<65536?1:2)}},e.prototype.bumpIf=function(n){if(Mt(this.message,n,this.offset())){for(var t=0;t<n.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(n){var t=this.offset(),r=this.message.indexOf(n,t);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(n){if(this.offset()>n)throw Error("targetOffset ".concat(n," must be greater than or equal to the current offset ").concat(this.offset()));for(n=Math.min(n,this.message.length);;){var t=this.offset();if(t===n)break;if(t>n)throw Error("targetOffset ".concat(n," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Os(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var n=this.char(),t=this.offset(),r=this.message.charCodeAt(t+(n>=65536?2:1));return r??null},e}();function Hr(e){return e>=97&&e<=122||e>=65&&e<=90}function Jo(e){return Hr(e)||e===47}function Wo(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Os(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function zo(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Ur(e){e.forEach(function(n){if(delete n.location,ps(n)||Rs(n))for(var t in n.options)delete n.options[t].location,Ur(n.options[t].value);else fs(n)&&As(n.style)||(ys(n)||Ts(n))&&Mr(n.style)?delete n.style.location:cs(n)&&Ur(n.children)})}function Xo(e,n){n===void 0&&(n={}),n=w({shouldParseSkeletons:!0,requiresOtherClause:!0},n);var t=new $o(e,n).parse();if(t.err){var r=SyntaxError(x[t.err.kind]);throw r.location=t.err.location,r.originalMessage=t.err.message,r}return n!=null&&n.captureLocation||Ur(t.val),t.val}var Ie;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Ie||(Ie={}));var Ue=function(e){Te(n,e);function n(t,r,a){var s=e.call(this,t)||this;return s.code=r,s.originalMessage=a,s}return n.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},n}(Error),Gt=function(e){Te(n,e);function n(t,r,a,s){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(r,'". Options are "').concat(Object.keys(a).join('", "'),'"'),Ie.INVALID_VALUE,s)||this}return n}(Ue),Zo=function(e){Te(n,e);function n(t,r,a){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(r),Ie.INVALID_VALUE,a)||this}return n}(Ue),Qo=function(e){Te(n,e);function n(t,r){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(r,'"'),Ie.MISSING_VALUE,r)||this}return n}(Ue),le;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(le||(le={}));function el(e){return e.length<2?e:e.reduce(function(n,t){var r=n[n.length-1];return!r||r.type!==le.literal||t.type!==le.literal?n.push(t):r.value+=t.value,n},[])}function Ks(e){return typeof e=="function"}function Jn(e,n,t,r,a,s,i){if(e.length===1&&Ft(e[0]))return[{type:le.literal,value:e[0].value}];for(var o=[],l=0,d=e;l<d.length;l++){var u=d[l];if(Ft(u)){o.push({type:le.literal,value:u.value});continue}if(bo(u)){typeof s=="number"&&o.push({type:le.literal,value:t.getNumberFormat(n).format(s)});continue}var g=u.value;if(!(a&&g in a))throw new Qo(g,i);var k=a[g];if(Ao(u)){(!k||typeof k=="string"||typeof k=="number")&&(k=typeof k=="string"||typeof k=="number"?String(k):""),o.push({type:typeof k=="string"?le.literal:le.object,value:k});continue}if(ys(u)){var E=typeof u.style=="string"?r.date[u.style]:Mr(u.style)?u.style.parsedOptions:void 0;o.push({type:le.literal,value:t.getDateTimeFormat(n,E).format(k)});continue}if(Ts(u)){var E=typeof u.style=="string"?r.time[u.style]:Mr(u.style)?u.style.parsedOptions:r.time.medium;o.push({type:le.literal,value:t.getDateTimeFormat(n,E).format(k)});continue}if(fs(u)){var E=typeof u.style=="string"?r.number[u.style]:As(u.style)?u.style.parsedOptions:void 0;E&&E.scale&&(k=k*(E.scale||1)),o.push({type:le.literal,value:t.getNumberFormat(n,E).format(k)});continue}if(cs(u)){var f=u.children,v=u.value,h=a[v];if(!Ks(h))throw new Zo(v,"function",i);var y=Jn(f,n,t,r,a,s),T=h(y.map(function(p){return p.value}));Array.isArray(T)||(T=[T]),o.push.apply(o,T.map(function(p){return{type:typeof p=="string"?le.literal:le.object,value:p}}))}if(ps(u)){var c=u.options[k]||u.options.other;if(!c)throw new Gt(u.value,k,Object.keys(u.options),i);o.push.apply(o,Jn(c.value,n,t,r,a));continue}if(Rs(u)){var c=u.options["=".concat(k)];if(!c){if(!Intl.PluralRules)throw new Ue(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Ie.MISSING_INTL_API,i);var _=t.getPluralRules(n,{type:u.pluralType}).select(k-(u.offset||0));c=u.options[_]||u.options.other}if(!c)throw new Gt(u.value,k,Object.keys(u.options),i);o.push.apply(o,Jn(c.value,n,t,r,a,k-(u.offset||0)));continue}}return el(o)}function nl(e,n){return n?w(w(w({},e||{}),n||{}),Object.keys(e).reduce(function(t,r){return t[r]=w(w({},e[r]),n[r]||{}),t},{})):e}function rl(e,n){return n?Object.keys(e).reduce(function(t,r){return t[r]=nl(e[r],n[r]),t},w({},e)):e}function Rr(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,t){e[n]=t}}}}}function tl(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Re(function(){for(var n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new((n=Intl.NumberFormat).bind.apply(n,Ae([void 0],t,!1)))},{cache:Rr(e.number),strategy:ce.variadic}),getDateTimeFormat:Re(function(){for(var n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new((n=Intl.DateTimeFormat).bind.apply(n,Ae([void 0],t,!1)))},{cache:Rr(e.dateTime),strategy:ce.variadic}),getPluralRules:Re(function(){for(var n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new((n=Intl.PluralRules).bind.apply(n,Ae([void 0],t,!1)))},{cache:Rr(e.pluralRules),strategy:ce.variadic})}}var Ds=function(){function e(n,t,r,a){t===void 0&&(t=e.defaultLocale);var s=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var d=s.formatToParts(l);if(d.length===1)return d[0].value;var u=d.reduce(function(g,k){return!g.length||k.type!==le.literal||typeof g[g.length-1]!="string"?g.push(k.value):g[g.length-1]+=k.value,g},[]);return u.length<=1?u[0]||"":u},this.formatToParts=function(l){return Jn(s.ast,s.locales,s.formatters,s.formats,l,void 0,s.message)},this.resolvedOptions=function(){var l;return{locale:((l=s.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=t,this.resolvedLocale=e.resolveLocale(t),typeof n=="string"){if(this.message=n,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var i=a||{};i.formatters;var o=kn(i,["formatters"]);this.ast=e.__parse(n,w(w({},o),{locale:this.resolvedLocale}))}else this.ast=n;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=rl(e.formats,r),this.formatters=a&&a.formatters||tl(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(n){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(n);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof n=="string"?n:n[0])}},e.__parse=Xo,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Qe;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Qe||(Qe={}));var Ln=function(e){Te(n,e);function n(t,r,a){var s=this,i=a?a instanceof Error?a:new Error(String(a)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(t,"] ").concat(r,`
`).concat(i?`
`.concat(i.message,`
`).concat(i.stack):""))||this,s.code=t,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,n),s}return n}(Error),al=function(e){Te(n,e);function n(t,r){return e.call(this,Qe.UNSUPPORTED_FORMATTER,t,r)||this}return n}(Ln),sl=function(e){Te(n,e);function n(t,r){return e.call(this,Qe.INVALID_CONFIG,t,r)||this}return n}(Ln),Ht=function(e){Te(n,e);function n(t,r){return e.call(this,Qe.MISSING_DATA,t,r)||this}return n}(Ln),ve=function(e){Te(n,e);function n(t,r,a){var s=e.call(this,Qe.FORMAT_ERROR,"".concat(t,`
Locale: `).concat(r,`
`),a)||this;return s.locale=r,s}return n}(Ln),cr=function(e){Te(n,e);function n(t,r,a,s){var i=e.call(this,"".concat(t,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),r,s)||this;return i.descriptor=a,i.locale=r,i}return n}(ve),il=function(e){Te(n,e);function n(t,r){var a=e.call(this,Qe.MISSING_TRANSLATION,'Missing message: "'.concat(t.id,'" for locale "').concat(r,'", using ').concat(t.defaultMessage?"default message (".concat(typeof t.defaultMessage=="string"?t.defaultMessage:t.defaultMessage.map(function(s){var i;return(i=s.value)!==null&&i!==void 0?i:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=t,a}return n}(Ln);function ol(e,n,t){if(t===void 0&&(t=Error),!e)throw new t(n)}function Tn(e,n,t){return t===void 0&&(t={}),n.reduce(function(r,a){return a in e?r[a]=e[a]:a in t&&(r[a]=t[a]),r},{})}var ll=function(e){},dl=function(e){},Ls={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:ll,onWarn:dl};function Ps(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Ce(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,t){e[n]=t}}}}}function ul(e){e===void 0&&(e=Ps());var n=Intl.RelativeTimeFormat,t=Intl.ListFormat,r=Intl.DisplayNames,a=Re(function(){for(var o,l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return new((o=Intl.DateTimeFormat).bind.apply(o,Ae([void 0],l,!1)))},{cache:Ce(e.dateTime),strategy:ce.variadic}),s=Re(function(){for(var o,l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return new((o=Intl.NumberFormat).bind.apply(o,Ae([void 0],l,!1)))},{cache:Ce(e.number),strategy:ce.variadic}),i=Re(function(){for(var o,l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return new((o=Intl.PluralRules).bind.apply(o,Ae([void 0],l,!1)))},{cache:Ce(e.pluralRules),strategy:ce.variadic});return{getDateTimeFormat:a,getNumberFormat:s,getMessageFormat:Re(function(o,l,d,u){return new Ds(o,l,d,w({formatters:{getNumberFormat:s,getDateTimeFormat:a,getPluralRules:i}},u||{}))},{cache:Ce(e.message),strategy:ce.variadic}),getRelativeTimeFormat:Re(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(n.bind.apply(n,Ae([void 0],o,!1)))},{cache:Ce(e.relativeTime),strategy:ce.variadic}),getPluralRules:i,getListFormat:Re(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(t.bind.apply(t,Ae([void 0],o,!1)))},{cache:Ce(e.list),strategy:ce.variadic}),getDisplayNames:Re(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(r.bind.apply(r,Ae([void 0],o,!1)))},{cache:Ce(e.displayNames),strategy:ce.variadic})}}function it(e,n,t,r){var a=e&&e[n],s;if(a&&(s=a[t]),s)return s;r(new al("No ".concat(n," format named: ").concat(t)))}function Un(e,n){return Object.keys(e).reduce(function(t,r){return t[r]=w({timeZone:n},e[r]),t},{})}function Ut(e,n){var t=Object.keys(w(w({},e),n));return t.reduce(function(r,a){return r[a]=w(w({},e[a]||{}),n[a]||{}),r},{})}function xt(e,n){if(!n)return e;var t=Ds.formats;return w(w(w({},t),e),{date:Ut(Un(t.date,n),Un(e.date||{},n)),time:Ut(Un(t.time,n),Un(e.time||{},n))})}var xr=function(e,n,t,r,a){var s=e.locale,i=e.formats,o=e.messages,l=e.defaultLocale,d=e.defaultFormats,u=e.fallbackOnEmptyString,g=e.onError,k=e.timeZone,E=e.defaultRichTextElements;t===void 0&&(t={id:""});var f=t.id,v=t.defaultMessage;ol(!!f,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var h=String(f),y=o&&Object.prototype.hasOwnProperty.call(o,h)&&o[h];if(Array.isArray(y)&&y.length===1&&y[0].type===X.literal)return y[0].value;if(!r&&y&&typeof y=="string"&&!E)return y.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=w(w({},E),r||{}),i=xt(i,k),d=xt(d,k),!y){if(u===!1&&y==="")return y;if((!v||s&&s.toLowerCase()!==l.toLowerCase())&&g(new il(t,s)),v)try{var T=n.getMessageFormat(v,l,d,a);return T.format(r)}catch(c){return g(new cr('Error formatting default message for: "'.concat(h,'", rendering default message verbatim'),s,t,c)),typeof v=="string"?v:h}return h}try{var T=n.getMessageFormat(y,s,i,w({formatters:n},a||{}));return T.format(r)}catch(c){g(new cr('Error formatting message: "'.concat(h,'", using ').concat(v?"default message":"id"," as fallback."),s,t,c))}if(v)try{var T=n.getMessageFormat(v,l,d,a);return T.format(r)}catch(c){g(new cr('Error formatting the default message for: "'.concat(h,'", rendering message verbatim'),s,t,c))}return typeof y=="string"?y:typeof v=="string"?v:h},gl=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Pn(e,n,t,r){var a=e.locale,s=e.formats,i=e.onError,o=e.timeZone;r===void 0&&(r={});var l=r.format,d=w(w({},o&&{timeZone:o}),l&&it(s,n,l,i)),u=Tn(r,gl,d);return n==="time"&&!u.hour&&!u.minute&&!u.second&&!u.timeStyle&&!u.dateStyle&&(u=w(w({},u),{hour:"numeric",minute:"numeric"})),t(a,u)}function kl(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],s=t[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Pn(e,"date",n,i).format(o)}catch(l){e.onError(new ve("Error formatting date.",e.locale,l))}return String(o)}function ml(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],s=t[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Pn(e,"time",n,i).format(o)}catch(l){e.onError(new ve("Error formatting time.",e.locale,l))}return String(o)}function vl(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],s=t[1],i=t[2],o=i===void 0?{}:i,l=typeof a=="string"?new Date(a||0):a,d=typeof s=="string"?new Date(s||0):s;try{return Pn(e,"dateTimeRange",n,o).formatRange(l,d)}catch(u){e.onError(new ve("Error formatting date time range.",e.locale,u))}return String(l)}function El(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],s=t[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Pn(e,"date",n,i).formatToParts(o)}catch(l){e.onError(new ve("Error formatting date.",e.locale,l))}return[]}function fl(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=t[0],s=t[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Pn(e,"time",n,i).formatToParts(o)}catch(l){e.onError(new ve("Error formatting time.",e.locale,l))}return[]}var yl=["style","type","fallback","languageDisplay"];function Tl(e,n,t,r){var a=e.locale,s=e.onError,i=Intl.DisplayNames;i||s(new Ue(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Ie.MISSING_INTL_API));var o=Tn(r,yl);try{return n(a,o).of(t)}catch(l){s(new ve("Error formatting display name.",a,l))}}var pl=["type","style"],Yt=Date.now();function Rl(e){return"".concat(Yt,"_").concat(e,"_").concat(Yt)}function cl(e,n,t,r){r===void 0&&(r={});var a=Fs(e,n,t,r).reduce(function(s,i){var o=i.value;return typeof o!="string"?s.push(o):typeof s[s.length-1]=="string"?s[s.length-1]+=o:s.push(o),s},[]);return a.length===1?a[0]:a.length===0?"":a}function Fs(e,n,t,r){var a=e.locale,s=e.onError;r===void 0&&(r={});var i=Intl.ListFormat;i||s(new Ue(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Ie.MISSING_INTL_API));var o=Tn(r,pl);try{var l={},d=t.map(function(u,g){if(typeof u=="object"){var k=Rl(g);return l[k]=u,k}return String(u)});return n(a,o).formatToParts(d).map(function(u){return u.type==="literal"?u:w(w({},u),{value:l[u.value]||u.value})})}catch(u){s(new ve("Error formatting list.",a,u))}return t}var Al=["type"];function bl(e,n,t,r){var a=e.locale,s=e.onError;r===void 0&&(r={}),Intl.PluralRules||s(new Ue(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Ie.MISSING_INTL_API));var i=Tn(r,Al);try{return n(a,i).select(t)}catch(o){s(new ve("Error formatting plural.",a,o))}return"other"}var hl=["numeric","style"];function Sl(e,n,t){var r=e.locale,a=e.formats,s=e.onError;t===void 0&&(t={});var i=t.format,o=!!i&&it(a,"relative",i,s)||{},l=Tn(t,hl,o);return n(r,l)}function _l(e,n,t,r,a){a===void 0&&(a={}),r||(r="second");var s=Intl.RelativeTimeFormat;s||e.onError(new Ue(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Ie.MISSING_INTL_API));try{return Sl(e,n,a).format(t,r)}catch(i){e.onError(new ve("Error formatting relative time.",e.locale,i))}return String(t)}var Nl=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function qs(e,n,t){var r=e.locale,a=e.formats,s=e.onError;t===void 0&&(t={});var i=t.format,o=i&&it(a,"number",i,s)||{},l=Tn(t,Nl,o);return n(r,l)}function Il(e,n,t,r){r===void 0&&(r={});try{return qs(e,n,r).format(t)}catch(a){e.onError(new ve("Error formatting number.",e.locale,a))}return String(t)}function Ol(e,n,t,r){r===void 0&&(r={});try{return qs(e,n,r).formatToParts(t)}catch(a){e.onError(new ve("Error formatting number.",e.locale,a))}return[]}function Kl(e){var n=e[Object.keys(e)[0]];return typeof n=="string"}function Dl(e){e.onWarn&&e.defaultRichTextElements&&Kl(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function Ll(e,n){var t=ul(n),r=w(w({},Ls),e),a=r.locale,s=r.defaultLocale,i=r.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&i?i(new Ht('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&i&&i(new Ht('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(i&&i(new sl('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),Dl(r),w(w({},r),{formatters:t,formatNumber:Il.bind(null,r,t.getNumberFormat),formatNumberToParts:Ol.bind(null,r,t.getNumberFormat),formatRelativeTime:_l.bind(null,r,t.getRelativeTimeFormat),formatDate:kl.bind(null,r,t.getDateTimeFormat),formatDateToParts:El.bind(null,r,t.getDateTimeFormat),formatTime:ml.bind(null,r,t.getDateTimeFormat),formatDateTimeRange:vl.bind(null,r,t.getDateTimeFormat),formatTimeToParts:fl.bind(null,r,t.getDateTimeFormat),formatPlural:bl.bind(null,r,t.getPluralRules),formatMessage:xr.bind(null,r,t),$t:xr.bind(null,r,t),formatList:cl.bind(null,r,t.getListFormat),formatListToParts:Fs.bind(null,r,t.getListFormat),formatDisplayName:Tl.bind(null,r,t.getDisplayNames)})}function Pl(e,n,t){if(t===void 0&&(t=Error),!e)throw new t(n)}function Fl(e){Pl(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var ql=w(w({},Ls),{textComponent:m.Fragment});function jl(e){return function(n){return e(m.Children.toArray(n))}}function Ct(e,n){if(e===n)return!0;if(!e||!n)return!1;var t=Object.keys(e),r=Object.keys(n),a=t.length;if(r.length!==a)return!1;for(var s=0;s<a;s++){var i=t[s];if(e[i]!==n[i]||!Object.prototype.hasOwnProperty.call(n,i))return!1}return!0}var Ar={exports:{}},J={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $t;function wl(){if($t)return J;$t=1;var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,o=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,g=e?Symbol.for("react.suspense"):60113,k=e?Symbol.for("react.suspense_list"):60120,E=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,T=e?Symbol.for("react.scope"):60119;function c(p){if(typeof p=="object"&&p!==null){var K=p.$$typeof;switch(K){case n:switch(p=p.type,p){case l:case d:case r:case s:case a:case g:return p;default:switch(p=p&&p.$$typeof,p){case o:case u:case f:case E:case i:return p;default:return K}}case t:return K}}}function _(p){return c(p)===d}return J.AsyncMode=l,J.ConcurrentMode=d,J.ContextConsumer=o,J.ContextProvider=i,J.Element=n,J.ForwardRef=u,J.Fragment=r,J.Lazy=f,J.Memo=E,J.Portal=t,J.Profiler=s,J.StrictMode=a,J.Suspense=g,J.isAsyncMode=function(p){return _(p)||c(p)===l},J.isConcurrentMode=_,J.isContextConsumer=function(p){return c(p)===o},J.isContextProvider=function(p){return c(p)===i},J.isElement=function(p){return typeof p=="object"&&p!==null&&p.$$typeof===n},J.isForwardRef=function(p){return c(p)===u},J.isFragment=function(p){return c(p)===r},J.isLazy=function(p){return c(p)===f},J.isMemo=function(p){return c(p)===E},J.isPortal=function(p){return c(p)===t},J.isProfiler=function(p){return c(p)===s},J.isStrictMode=function(p){return c(p)===a},J.isSuspense=function(p){return c(p)===g},J.isValidElementType=function(p){return typeof p=="string"||typeof p=="function"||p===r||p===d||p===s||p===a||p===g||p===k||typeof p=="object"&&p!==null&&(p.$$typeof===f||p.$$typeof===E||p.$$typeof===i||p.$$typeof===o||p.$$typeof===u||p.$$typeof===h||p.$$typeof===y||p.$$typeof===T||p.$$typeof===v)},J.typeOf=c,J}var Jt;function Ml(){return Jt||(Jt=1,Ar.exports=wl()),Ar.exports}var br,Wt;function Bl(){if(Wt)return br;Wt=1;var e=Ml(),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[e.ForwardRef]=r,s[e.Memo]=a;function i(f){return e.isMemo(f)?a:s[f.$$typeof]||n}var o=Object.defineProperty,l=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,k=Object.prototype;function E(f,v,h){if(typeof v!="string"){if(k){var y=g(v);y&&y!==k&&E(f,y,h)}var T=l(v);d&&(T=T.concat(d(v)));for(var c=i(f),_=i(v),p=0;p<T.length;++p){var K=T[p];if(!t[K]&&!(h&&h[K])&&!(_&&_[K])&&!(c&&c[K])){var I=u(v,K);try{o(f,K,I)}catch{}}}}return f}return br=E,br}Bl();var ot=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=m.createContext(null)):m.createContext(null);ot.Consumer;var Vl=ot.Provider,Gl=Vl,Hl=ot;function Fn(){var e=m.useContext(Hl);return Fl(e),e}var Yr;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Yr||(Yr={}));var Cr;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Cr||(Cr={}));function js(e){var n=function(t){var r=Fn(),a=t.value,s=t.children,i=kn(t,["value","children"]),o=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?r.formatDateToParts(o,i):r.formatTimeToParts(o,i);return s(l)};return n.displayName=Cr[e],n}function qn(e){var n=function(t){var r=Fn(),a=t.value,s=t.children,i=kn(t,["value","children"]),o=r[e](a,i);if(typeof s=="function")return s(o);var l=r.textComponent||m.Fragment;return m.createElement(l,null,o)};return n.displayName=Yr[e],n}function ws(e){return e&&Object.keys(e).reduce(function(n,t){var r=e[t];return n[t]=Ks(r)?jl(r):r,n},{})}var zt=function(e,n,t,r){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];var i=ws(r),o=xr.apply(void 0,Ae([e,n,t,i],a,!1));return Array.isArray(o)?m.Children.toArray(o):o},Ul=function(e,n){var t=e.defaultRichTextElements,r=kn(e,["defaultRichTextElements"]),a=ws(t),s=Ll(w(w(w({},ql),r),{defaultRichTextElements:a}),n),i={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:a};return w(w({},s),{formatMessage:zt.bind(null,i,s.formatters),$t:zt.bind(null,i,s.formatters)})};function xl(e,n){var t=e.values,r=kn(e,["values"]),a=n.values,s=kn(n,["values"]);return Ct(a,t)&&Ct(r,s)}function Ms(e){var n=Fn(),t=n.formatMessage,r=n.textComponent,a=r===void 0?m.Fragment:r,s=e.id,i=e.description,o=e.defaultMessage,l=e.values,d=e.children,u=e.tagName,g=u===void 0?a:u,k=e.ignoreTag,E={id:s,description:i,defaultMessage:o},f=t(E,l,{ignoreTag:k});return typeof d=="function"?d(Array.isArray(f)?f:[f]):g?m.createElement(g,null,m.Children.toArray(f)):m.createElement(m.Fragment,null,f)}Ms.displayName="FormattedMessage";var Q=m.memo(Ms,xl);Q.displayName="MemoizedFormattedMessage";var Yl=qn("formatDate");qn("formatTime");qn("formatNumber");qn("formatList");qn("formatDisplayName");js("formatDate");js("formatTime");const Cl=[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],$l=[{kode:"REGISTRER_OM_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrering av opplysninger om verge/fullmektig"},{kode:"MANGELFULL_SØKNAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Mangelfull søknad"},{kode:"FASTSATT_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak - splitting av periode"},{kode:"BEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet"},{kode:"REGISTRER_PAPIRSØK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrer papirsøknad"},{kode:"BEH_STARTET_PÅ_NYTT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet på nytt"},{kode:"MIGRERT_FRA_INFOTRYGD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder flytting av sak fra Infotrygd"},{kode:"FORSLAG_VEDTAK_UTEN_TOTRINN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått"},{kode:"BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjenopptatt"},{kode:"AVBRUTT_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling er henlagt"},{kode:"ANKE_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ankebehandling"},{kode:"BREV_BESTILT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev bestilt"},{kode:"ENDRET_DEKNINGSGRAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Dekningsgrad er endret"},{kode:"OPPGAVE_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Oppgave før vedtak"},{kode:"IVERKSETTELSE_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen venter på iverksettelse"},{kode:"FASTSATT_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak"},{kode:"OVST_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak"},{kode:"INNSYN_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Innsynsbehandling opprettet"},{kode:"TILBAKEKR_VIDEREBEHANDLING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Metode for å håndtere tilbakekreving av feilutbetailng er valgt."},{kode:"SAK_GODKJENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak godkjent"},{kode:"BEH_KØET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er satt på vent"},{kode:"NYE_REGOPPLYSNINGER",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Nye registeropplysninger"},{kode:"BEH_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling på vent"},{kode:"TERMINBEKREFTELSE_UGYLDIG",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Terminbekreftelsens utstedt dato er før 22. svangerskapsuke. Behandlingen fortsatt uten ny terminbekreftelse"},{kode:"FAKTA_ENDRET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Fakta endret"},{kode:"MIGRERT_FRA_INFOTRYGD_FJERNET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder ikke lenger flytting av sak fra Infotrygd"},{kode:"BYTT_ENHET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Bytt enhet"},{kode:"REVURD_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Revurdering opprettet"},{kode:"KLAGE_BEH_NFP",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling NFP"},{kode:"KØET_BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Køet behandling er gjenopptatt"},{kode:"OVST_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak - splitting av periode"},{kode:"ANKEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Anke mottatt"},{kode:"UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet soknadsperiode"},{kode:"KLAGE_BEH_NK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling KA"},{kode:"AVKLART_AKTIVITETSKRAV",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Avklart aktivitetskrav"},{kode:"NY_INFO_FRA_TPS",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ny info fra TPS"},{kode:"KLAGEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klage mottatt"},{kode:"VEDTAK_FATTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak fattet"},{kode:"BEH_AVBRUTT_VUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vurdering før vedtak"},{kode:"UENDRET_UTFALL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Uendret utfall"},{kode:"VRS_REV_IKKE_SNDT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Varsel om revurdering ikke sendt"},{kode:"SPOLT_TILBAKE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er flyttet"},{kode:"OPPTJENING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet opptjeningsperiode"},{kode:"SAK_RETUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak retur"},{kode:"FJERNET_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Opplysninger om verge/fullmektig fjernet"},{kode:"BEH_MAN_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Gjenoppta behandling"},{kode:"BEH_OPPDATERT_NYE_OPPL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen oppdatert med nye opplysninger"},{kode:"VEDLEGG_MOTTATT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedlegg mottatt"},{kode:"OVERSTYRT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Overstyrt"},{kode:"BREV_SENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev sendt"},{kode:"FORSLAG_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått og sendt til beslutter"}],Jl=[{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],Wl=[{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"},{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"}],zl=[{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"}],Xl=[{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"}],Zl=[{kode:"EGEN_NÆRING",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Egen næring"},{kode:"BRUKERS_ANDEL",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Brukers andel"},{kode:"FRILANS",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Frilans"}],Ql=[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],ed=[{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"},{kode:"ENDRING_I_BEREGNING_OG_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning og uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"}],nd=[{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilans"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (fisker)"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (dagmamma)"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"},{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"}],rd=[{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"}],td=[{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Vedtaksinstans"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aleneomsorg og annenpart rett"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstans"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"}],ad=[{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"},{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"}],sd=[{kode:"HJEMSENDE_UTEN_Å_OPPHEVE",kodeverk:"KLAGEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"OPPHEVE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket oppheves"},{kode:"MEDHOLD_I_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Medhold"},{kode:"STADFESTE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"AVVIS_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Klagen avvises"}],id=[{kode:"BEH_STARTET_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Behandling startet på nytt"},{kode:"BERORT_BEH_OPPHOR",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens vedtak er opphørt"},{kode:"SAKSBEH_START_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Saksbehandling starter på nytt"},{kode:"BERORT_BEH_ENDRING_DEKNINGSGRAD",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens behandling har endret antall disponible stønadsdager"}],od=[{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"},{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"ANNET",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Andre typer som f.eks utsettelse"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"}],ld=[{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt søknad mangler"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"}],dd=[{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"}],ud=[{kode:"TILBAKEKR_IGNORER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling, avvent samordning"},{kode:"TILBAKEKR_INNTREKK",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling hvor inntrekk dekker hele beløpet"},{kode:"TILBAKEKR_OPPRETT",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling med tilbakekreving"},{kode:"TILBAKEKR_OPPDATER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Endringer vil oppdatere eksisterende feilutbetalte perioder og beløp."}],gd=[{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],kd=[{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"}],md=[{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"}],vd=[{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"}],Ed=[{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"},{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"}],fd=[{kode:"UTTAK_PERIODE_FOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fradato uttaksperiode"},{kode:"TPS_ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"UTTAK_PERIODE_TOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Tildato uttaksperiode"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"FODSELSDATO",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fødselsdato"}],yd=[{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"}],Td=[{kode:"MANGLENDE_OPPLYSNINGER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen, men har manglende opplysninger"},{kode:"SØKER_ER_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er i permisjon"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekten er ikke med i beregningsgrunnlaget"},{kode:"IKKE_BRUK",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Ikke bruk"},{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK_MED_OVERSTYRTE_PERIODER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"BENYTT_A_INNTEKT_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekt fra A-inntekt benyttes i beregningsgrunnlaget"},{kode:"SØKER_ER_IKKE_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er ikke i permisjon"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er lagt til av saksbehandler beregningsgrunnlaget"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er slått sammen med annet"}],pd=[{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"}],Rd=JSON.parse('[{"kode":"CAF","kodeverk":"LANDKODER","navn":"SENTRALAFRIKA. REP."},{"kode":"ARG","kodeverk":"LANDKODER","navn":"ARGENTINA"},{"kode":"IOT","kodeverk":"LANDKODER","navn":"BRITISK-INDISKE HAV"},{"kode":"CCK","kodeverk":"LANDKODER","navn":"KOKOSØYENE"},{"kode":"MEX","kodeverk":"LANDKODER","navn":"MEXICO"},{"kode":"CHN","kodeverk":"LANDKODER","navn":"REPUBLIKKEN KINA"},{"kode":"RUS","kodeverk":"LANDKODER","navn":"RUSSLAND"},{"kode":"BHS","kodeverk":"LANDKODER","navn":"BAHAMAS"},{"kode":"SYC","kodeverk":"LANDKODER","navn":"SEYCHELLENE"},{"kode":"CYP","kodeverk":"LANDKODER","navn":"KYPROS"},{"kode":"AUT","kodeverk":"LANDKODER","navn":"ØSTERRIKE"},{"kode":"QAT","kodeverk":"LANDKODER","navn":"QATAR"},{"kode":"VNM","kodeverk":"LANDKODER","navn":"VIETNAM"},{"kode":"HMD","kodeverk":"LANDKODER","navn":"HEARD OG MCDONALD ØYENE"},{"kode":"KEN","kodeverk":"LANDKODER","navn":"KENYA"},{"kode":"ASM","kodeverk":"LANDKODER","navn":"AM. SAMOA"},{"kode":"PAK","kodeverk":"LANDKODER","navn":"PAKISTAN"},{"kode":"ATG","kodeverk":"LANDKODER","navn":"ANTIGUA OG BARBUDA"},{"kode":"TZA","kodeverk":"LANDKODER","navn":"TANZANIA"},{"kode":"ZAF","kodeverk":"LANDKODER","navn":"SØR-AFRIKA"},{"kode":"CMR","kodeverk":"LANDKODER","navn":"KAMERUN"},{"kode":"MLI","kodeverk":"LANDKODER","navn":"MALI"},{"kode":"SLV","kodeverk":"LANDKODER","navn":"EL SALVADOR"},{"kode":"MAF","kodeverk":"LANDKODER","navn":"SAINT MARTIN"},{"kode":"KGZ","kodeverk":"LANDKODER","navn":"KIRGISISTAN"},{"kode":"FJI","kodeverk":"LANDKODER","navn":"FIJI"},{"kode":"RWA","kodeverk":"LANDKODER","navn":"RWANDA"},{"kode":"GEO","kodeverk":"LANDKODER","navn":"GEORGIA"},{"kode":"REU","kodeverk":"LANDKODER","navn":"REUNION"},{"kode":"MTQ","kodeverk":"LANDKODER","navn":"MARTINIQUE"},{"kode":"SDN","kodeverk":"LANDKODER","navn":"SUDAN"},{"kode":"AND","kodeverk":"LANDKODER","navn":"ANDORRA"},{"kode":"COK","kodeverk":"LANDKODER","navn":"COOKØYENE"},{"kode":"SHN","kodeverk":"LANDKODER","navn":"ST. HELENA"},{"kode":"COL","kodeverk":"LANDKODER","navn":"COLOMBIA"},{"kode":"PER","kodeverk":"LANDKODER","navn":"PERU"},{"kode":"STP","kodeverk":"LANDKODER","navn":"SAO TOME OG PRINCIPE"},{"kode":"COM","kodeverk":"LANDKODER","navn":"KOMORENE"},{"kode":"LUX","kodeverk":"LANDKODER","navn":"LUXEMBOURG"},{"kode":"PNG","kodeverk":"LANDKODER","navn":"PAPUA NY-GUINEA"},{"kode":"MKD","kodeverk":"LANDKODER","navn":"MAKEDONIA"},{"kode":"GIN","kodeverk":"LANDKODER","navn":"GUINEA"},{"kode":"CYM","kodeverk":"LANDKODER","navn":"CAYMANØYENE"},{"kode":"VGB","kodeverk":"LANDKODER","navn":"JOMFRUØYENE BRIT."},{"kode":"IRL","kodeverk":"LANDKODER","navn":"IRLAND"},{"kode":"XXX","kodeverk":"LANDKODER","navn":"STATSLØS"},{"kode":"HTI","kodeverk":"LANDKODER","navn":"HAITI"},{"kode":"LBN","kodeverk":"LANDKODER","navn":"LIBANON"},{"kode":"BRN","kodeverk":"LANDKODER","navn":"BRUNEI"},{"kode":"GMB","kodeverk":"LANDKODER","navn":"GAMBIA"},{"kode":"MLT","kodeverk":"LANDKODER","navn":"MALTA"},{"kode":"CRI","kodeverk":"LANDKODER","navn":"COSTA RICA"},{"kode":"UZB","kodeverk":"LANDKODER","navn":"UZBEKISTAN"},{"kode":"CXR","kodeverk":"LANDKODER","navn":"CHRISTMASØYA"},{"kode":"TUR","kodeverk":"LANDKODER","navn":"TYRKIA"},{"kode":"UKR","kodeverk":"LANDKODER","navn":"UKRAINA"},{"kode":"SUN","kodeverk":"LANDKODER","navn":"SOVJETUNIONEN"},{"kode":"PYF","kodeverk":"LANDKODER","navn":"FRANSK POLYNESIA"},{"kode":"MNE","kodeverk":"LANDKODER","navn":"MONTENEGRO"},{"kode":"BIH","kodeverk":"LANDKODER","navn":"BOSNIA-HERCEGOVINA"},{"kode":"PAN","kodeverk":"LANDKODER","navn":"PANAMA"},{"kode":"SJM","kodeverk":"LANDKODER","navn":"SVALBARD OG JAN MAYEN"},{"kode":"NIU","kodeverk":"LANDKODER","navn":"NIUE"},{"kode":"SUR","kodeverk":"LANDKODER","navn":"SURINAM"},{"kode":"MUS","kodeverk":"LANDKODER","navn":"MAURITIUS"},{"kode":"CHE","kodeverk":"LANDKODER","navn":"SVEITS"},{"kode":"BEL","kodeverk":"LANDKODER","navn":"BELGIA"},{"kode":"TTO","kodeverk":"LANDKODER","navn":"TRINIDAD OG TOBAGO"},{"kode":"SWZ","kodeverk":"LANDKODER","navn":"SWAZILAND"},{"kode":"TUN","kodeverk":"LANDKODER","navn":"TUNISIA"},{"kode":"GLP","kodeverk":"LANDKODER","navn":"GUADELOUPE"},{"kode":"KWT","kodeverk":"LANDKODER","navn":"KUWAIT"},{"kode":"DMA","kodeverk":"LANDKODER","navn":"DOMINICA"},{"kode":"BGR","kodeverk":"LANDKODER","navn":"BULGARIA"},{"kode":"ISL","kodeverk":"LANDKODER","navn":"ISLAND"},{"kode":"SVN","kodeverk":"LANDKODER","navn":"SLOVENIA"},{"kode":"PLW","kodeverk":"LANDKODER","navn":"PALAU"},{"kode":"GBR","kodeverk":"LANDKODER","navn":"STORBRITANNIA"},{"kode":"NAM","kodeverk":"LANDKODER","navn":"NAMIBIA"},{"kode":"FSM","kodeverk":"LANDKODER","navn":"MIKRONESIAFØD."},{"kode":"GNB","kodeverk":"LANDKODER","navn":"GUINEA-BISSAU"},{"kode":"UMI","kodeverk":"LANDKODER","navn":"MINDRE STILLEHAVSØYER"},{"kode":"MDA","kodeverk":"LANDKODER","navn":"MOLDOVA"},{"kode":"MMR","kodeverk":"LANDKODER","navn":"MYANMAR (BURMA)"},{"kode":"MOZ","kodeverk":"LANDKODER","navn":"MOSAMBIK"},{"kode":"SGS","kodeverk":"LANDKODER","navn":"SØR-GEORGIA OG SØR-SANDWICHØYE"},{"kode":"NPL","kodeverk":"LANDKODER","navn":"NEPAL"},{"kode":"BES","kodeverk":"LANDKODER","navn":"BONAIRE, SINT EUSTATIUS, SABA"},{"kode":"LBR","kodeverk":"LANDKODER","navn":"LIBERIA"},{"kode":"MDG","kodeverk":"LANDKODER","navn":"MADAGASKAR"},{"kode":"VIR","kodeverk":"LANDKODER","navn":"JOMFRUØYENE AM."},{"kode":"ARE","kodeverk":"LANDKODER","navn":"DE ARABISKE EMIRATER"},{"kode":"USA","kodeverk":"LANDKODER","navn":"USA"},{"kode":"NFK","kodeverk":"LANDKODER","navn":"NORFOLKØYA"},{"kode":"HKG","kodeverk":"LANDKODER","navn":"HONGKONG"},{"kode":"DEU","kodeverk":"LANDKODER","navn":"TYSKLAND"},{"kode":"LIE","kodeverk":"LANDKODER","navn":"LIECHTENSTEIN"},{"kode":"ECU","kodeverk":"LANDKODER","navn":"ECUADOR"},{"kode":"POL","kodeverk":"LANDKODER","navn":"POLEN"},{"kode":"PRK","kodeverk":"LANDKODER","navn":"NORD-KOREA"},{"kode":"GGY","kodeverk":"LANDKODER","navn":"GUERNSEY"},{"kode":"NZL","kodeverk":"LANDKODER","navn":"NEW ZEALAND"},{"kode":"MAR","kodeverk":"LANDKODER","navn":"MAROKKO"},{"kode":"BWA","kodeverk":"LANDKODER","navn":"BOTSWANA"},{"kode":"GUM","kodeverk":"LANDKODER","navn":"GUAM"},{"kode":"YUG","kodeverk":"LANDKODER","navn":"JUGOSLAVIA"},{"kode":"SEN","kodeverk":"LANDKODER","navn":"SENEGAL"},{"kode":"MWI","kodeverk":"LANDKODER","navn":"MALAWI"},{"kode":"TKM","kodeverk":"LANDKODER","navn":"TURKMENISTAN"},{"kode":"GAB","kodeverk":"LANDKODER","navn":"GABON"},{"kode":"FIN","kodeverk":"LANDKODER","navn":"FINLAND"},{"kode":"PRY","kodeverk":"LANDKODER","navn":"PARAGUAY"},{"kode":"PSE","kodeverk":"LANDKODER","navn":"DET PALESTINSKE OMRÅDET"},{"kode":"FRA","kodeverk":"LANDKODER","navn":"FRANKRIKE"},{"kode":"ZWE","kodeverk":"LANDKODER","navn":"ZIMBABWE"},{"kode":"AZE","kodeverk":"LANDKODER","navn":"AZERBAJDZJAN"},{"kode":"SXM","kodeverk":"LANDKODER","navn":"SINT MAARTEN"},{"kode":"NIC","kodeverk":"LANDKODER","navn":"NICARAGUA"},{"kode":"CAN","kodeverk":"LANDKODER","navn":"CANADA"},{"kode":"COG","kodeverk":"LANDKODER","navn":"KONGO, REPUBLIKKEN"},{"kode":"JPN","kodeverk":"LANDKODER","navn":"JAPAN"},{"kode":"KOR","kodeverk":"LANDKODER","navn":"SØR-KOREA"},{"kode":"HUN","kodeverk":"LANDKODER","navn":"UNGARN"},{"kode":"YEM","kodeverk":"LANDKODER","navn":"JEMEN"},{"kode":"CHL","kodeverk":"LANDKODER","navn":"CHILE"},{"kode":"BRB","kodeverk":"LANDKODER","navn":"BARBADOS"},{"kode":"DNK","kodeverk":"LANDKODER","navn":"DANMARK"},{"kode":"NRU","kodeverk":"LANDKODER","navn":"NAURU"},{"kode":"VCT","kodeverk":"LANDKODER","navn":"ST. VINCENT"},{"kode":"BEN","kodeverk":"LANDKODER","navn":"BENIN"},{"kode":"SMR","kodeverk":"LANDKODER","navn":"SAN MARINO"},{"kode":"TCD","kodeverk":"LANDKODER","navn":"TSJAD"},{"kode":"CUW","kodeverk":"LANDKODER","navn":"CURACAO"},{"kode":"IRN","kodeverk":"LANDKODER","navn":"IRAN"},{"kode":"SWE","kodeverk":"LANDKODER","navn":"SVERIGE"},{"kode":"ERI","kodeverk":"LANDKODER","navn":"ERITREA"},{"kode":"XUK","kodeverk":"LANDKODER","navn":"UKJENT"},{"kode":"MDV","kodeverk":"LANDKODER","navn":"MALDIVENE"},{"kode":"CSK","kodeverk":"LANDKODER","navn":"TSJEKKOSLOVAKIA"},{"kode":"GRD","kodeverk":"LANDKODER","navn":"GRENADA"},{"kode":"HND","kodeverk":"LANDKODER","navn":"HONDURAS"},{"kode":"FRO","kodeverk":"LANDKODER","navn":"FÆRØYENE"},{"kode":"COD","kodeverk":"LANDKODER","navn":"KONGO, DEN DEMOKR. REPUBL"},{"kode":"SRB","kodeverk":"LANDKODER","navn":"SERBIA"},{"kode":"AGO","kodeverk":"LANDKODER","navn":"ANGOLA"},{"kode":"NCL","kodeverk":"LANDKODER","navn":"NY-KALEDONIA"},{"kode":"SCG","kodeverk":"LANDKODER","navn":"SERBIA OG MONTENEGRO"},{"kode":"GTM","kodeverk":"LANDKODER","navn":"GUATEMALA"},{"kode":"AFG","kodeverk":"LANDKODER","navn":"AFGHANISTAN"},{"kode":"JAM","kodeverk":"LANDKODER","navn":"JAMAICA"},{"kode":"UGA","kodeverk":"LANDKODER","navn":"UGANDA"},{"kode":"IMN","kodeverk":"LANDKODER","navn":"ISLE OF MAN"},{"kode":"ISR","kodeverk":"LANDKODER","navn":"ISRAEL"},{"kode":"SOM","kodeverk":"LANDKODER","navn":"SOMALIA"},{"kode":"MNP","kodeverk":"LANDKODER","navn":"NORD-MARIANENE"},{"kode":"XXK","kodeverk":"LANDKODER","navn":"KOSOVO"},{"kode":"BLR","kodeverk":"LANDKODER","navn":"HVITERUSSLAND"},{"kode":"LSO","kodeverk":"LANDKODER","navn":"LESOTHO"},{"kode":"NER","kodeverk":"LANDKODER","navn":"NIGER"},{"kode":"IDN","kodeverk":"LANDKODER","navn":"INDONESIA"},{"kode":"CZE","kodeverk":"LANDKODER","navn":"DEN TSJEKKISKE REP."},{"kode":"URY","kodeverk":"LANDKODER","navn":"URUGUAY"},{"kode":"BGD","kodeverk":"LANDKODER","navn":"BANGLADESH"},{"kode":"WLF","kodeverk":"LANDKODER","navn":"WALLIS/FUTUNAØYENE"},{"kode":"CIV","kodeverk":"LANDKODER","navn":"ELFENBEINSKYSTEN"},{"kode":"ABW","kodeverk":"LANDKODER","navn":"ARUBA"},{"kode":"SLB","kodeverk":"LANDKODER","navn":"SALOMONØYENE"},{"kode":"TWN","kodeverk":"LANDKODER","navn":"TAIWAN"},{"kode":"SLE","kodeverk":"LANDKODER","navn":"SIERRA LEONE"},{"kode":"BRA","kodeverk":"LANDKODER","navn":"BRASIL"},{"kode":"DJI","kodeverk":"LANDKODER","navn":"DJIBOUTI"},{"kode":"PRI","kodeverk":"LANDKODER","navn":"PUERTO RICO"},{"kode":"PRT","kodeverk":"LANDKODER","navn":"PORTUGAL"},{"kode":"ANT","kodeverk":"LANDKODER","navn":"DE NEDERLANDSKE ANTILLENE"},{"kode":"THA","kodeverk":"LANDKODER","navn":"THAILAND"},{"kode":"TLS","kodeverk":"LANDKODER","navn":"ØST-TIMOR"},{"kode":"SPM","kodeverk":"LANDKODER","navn":"ST-PIERRE OG MIQUELON"},{"kode":"ALB","kodeverk":"LANDKODER","navn":"ALBANIA"},{"kode":"EGY","kodeverk":"LANDKODER","navn":"EGYPT"},{"kode":"GRC","kodeverk":"LANDKODER","navn":"HELLAS"},{"kode":"BFA","kodeverk":"LANDKODER","navn":"BURKINA FASO"},{"kode":"ALA","kodeverk":"LANDKODER","navn":"ÅLAND"},{"kode":"BOL","kodeverk":"LANDKODER","navn":"BOLIVIA"},{"kode":"DDR","kodeverk":"LANDKODER","navn":"TYSKLAND (ØST)"},{"kode":"HRV","kodeverk":"LANDKODER","navn":"KROATIA"},{"kode":"AUS","kodeverk":"LANDKODER","navn":"AUSTRALIA"},{"kode":"NGA","kodeverk":"LANDKODER","navn":"NIGERIA"},{"kode":"LBY","kodeverk":"LANDKODER","navn":"LIBYA"},{"kode":"MYT","kodeverk":"LANDKODER","navn":"MAYOTTE"},{"kode":"LVA","kodeverk":"LANDKODER","navn":"LATVIA"},{"kode":"BTN","kodeverk":"LANDKODER","navn":"BHUTAN"},{"kode":"MSR","kodeverk":"LANDKODER","navn":"MONSERRAT"},{"kode":"???","kodeverk":"LANDKODER","navn":"UOPPGITT/UKJENT"},{"kode":"OMN","kodeverk":"LANDKODER","navn":"OMAN"},{"kode":"SVK","kodeverk":"LANDKODER","navn":"SLOVAKIA"},{"kode":"TUV","kodeverk":"LANDKODER","navn":"TUVALU"},{"kode":"VEN","kodeverk":"LANDKODER","navn":"VENEZUELA"},{"kode":"ITA","kodeverk":"LANDKODER","navn":"ITALIA"},{"kode":"KHM","kodeverk":"LANDKODER","navn":"KAMBODSJA"},{"kode":"ARM","kodeverk":"LANDKODER","navn":"ARMENIA"},{"kode":"LCA","kodeverk":"LANDKODER","navn":"ST. LUCIA"},{"kode":"GIB","kodeverk":"LANDKODER","navn":"GIBRALTAR"},{"kode":"JEY","kodeverk":"LANDKODER","navn":"JERSEY"},{"kode":"LAO","kodeverk":"LANDKODER","navn":"LAOS"},{"kode":"BHR","kodeverk":"LANDKODER","navn":"BAHRAIN"},{"kode":"ESH","kodeverk":"LANDKODER","navn":"VEST-SAHARA"},{"kode":"TKL","kodeverk":"LANDKODER","navn":"TOKELAU"},{"kode":"MNG","kodeverk":"LANDKODER","navn":"MONGOLIA"},{"kode":"BLZ","kodeverk":"LANDKODER","navn":"BELIZE"},{"kode":"GUF","kodeverk":"LANDKODER","navn":"FRANSK GUYANA"},{"kode":"TCA","kodeverk":"LANDKODER","navn":"TURKS/CAICOSØYENE"},{"kode":"WSM","kodeverk":"LANDKODER","navn":"SAMOA"},{"kode":"JOR","kodeverk":"LANDKODER","navn":"JORDAN"},{"kode":"MRT","kodeverk":"LANDKODER","navn":"MAURITANIA"},{"kode":"CUB","kodeverk":"LANDKODER","navn":"CUBA"},{"kode":"BDI","kodeverk":"LANDKODER","navn":"BURUNDI"},{"kode":"GHA","kodeverk":"LANDKODER","navn":"GHANA"},{"kode":"KNA","kodeverk":"LANDKODER","navn":"ST.KITTS OG NEVIS"},{"kode":"ETH","kodeverk":"LANDKODER","navn":"ETIOPIA"},{"kode":"SSD","kodeverk":"LANDKODER","navn":"SØR-SUDAN"},{"kode":"VAT","kodeverk":"LANDKODER","navn":"VATIKANSTATEN"},{"kode":"CPV","kodeverk":"LANDKODER","navn":"KAPP VERDE"},{"kode":"PCN","kodeverk":"LANDKODER","navn":"PITCAIRN"},{"kode":"SGP","kodeverk":"LANDKODER","navn":"SINGAPORE"},{"kode":"KAZ","kodeverk":"LANDKODER","navn":"KAZAKHSTAN"},{"kode":"MYS","kodeverk":"LANDKODER","navn":"MALAYSIA"},{"kode":"PHL","kodeverk":"LANDKODER","navn":"FILIPPINENE"},{"kode":"EST","kodeverk":"LANDKODER","navn":"ESTLAND"},{"kode":"NOR","kodeverk":"LANDKODER","navn":"NORGE"},{"kode":"BMU","kodeverk":"LANDKODER","navn":"BERMUDA"},{"kode":"LTU","kodeverk":"LANDKODER","navn":"LITAUEN"},{"kode":"MAC","kodeverk":"LANDKODER","navn":"MACAO"},{"kode":"TON","kodeverk":"LANDKODER","navn":"TONGA"},{"kode":"ROU","kodeverk":"LANDKODER","navn":"ROMANIA"},{"kode":"BLM","kodeverk":"LANDKODER","navn":"SAINT BARTHELEMY"},{"kode":"SAU","kodeverk":"LANDKODER","navn":"SAUDI-ARABIA"},{"kode":"GNQ","kodeverk":"LANDKODER","navn":"EKVATORIAL-GUINEA"},{"kode":"TGO","kodeverk":"LANDKODER","navn":"TOGO"},{"kode":"ZMB","kodeverk":"LANDKODER","navn":"ZAMBIA"},{"kode":"VUT","kodeverk":"LANDKODER","navn":"VANUATU"},{"kode":"DZA","kodeverk":"LANDKODER","navn":"ALGERIE"},{"kode":"TJK","kodeverk":"LANDKODER","navn":"TADZJIKISTAN"},{"kode":"NLD","kodeverk":"LANDKODER","navn":"NEDERLAND"},{"kode":"KIR","kodeverk":"LANDKODER","navn":"KIRIBATI"},{"kode":"GUY","kodeverk":"LANDKODER","navn":"GUYANA"},{"kode":"BVT","kodeverk":"LANDKODER","navn":"BOUVETØYA"},{"kode":"IND","kodeverk":"LANDKODER","navn":"INDIA"},{"kode":"LKA","kodeverk":"LANDKODER","navn":"SRI LANKA"},{"kode":"SYR","kodeverk":"LANDKODER","navn":"SYRIA"},{"kode":"ESP","kodeverk":"LANDKODER","navn":"SPANIA"},{"kode":"GRL","kodeverk":"LANDKODER","navn":"GRØNLAND"},{"kode":"AIA","kodeverk":"LANDKODER","navn":"ANGUILLA"},{"kode":"IRQ","kodeverk":"LANDKODER","navn":"IRAK"},{"kode":"MCO","kodeverk":"LANDKODER","navn":"MONACO"},{"kode":"MHL","kodeverk":"LANDKODER","navn":"MARSHALLØYENE"},{"kode":"DOM","kodeverk":"LANDKODER","navn":"DEN DOMINIKANSKE REP"},{"kode":"FLK","kodeverk":"LANDKODER","navn":"FALKLANDSØYENE"}]'),cd=[{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-005",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakebetaling endring"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"}],Ad=[{kode:"IKKE_I_AKTIVITET_IKKE_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Aktiviteten er ikke dokumentert"},{kode:"I_AKTIVITET",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er i aktivitet"},{kode:"IKKE_I_AKTIVITET_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er ikke i aktivitet"}],bd=[{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"},{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"}],hd=[{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"},{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"}],Sd=JSON.parse('[{"kode":"FODSELSDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fødselsdato"},{"kode":"TILBAKETREKK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Tilbaketrekk"},{"kode":"ER_ANKEFRIST_IKKE_OVERHOLDT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er ankefrist ikke overholdt"},{"kode":"FNR","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fødselsnummer"},{"kode":"TERMINBEKREFTELSE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Terminbekreftelse"},{"kode":"TERMINDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Termindato"},{"kode":"ANKE_RESULTAT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Anke resultat"},{"kode":"UTTAK_SPLITT_TIDSPERIODE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resulterende periode ved splitting"},{"kode":"UTTAK_TREKKDAGER_FLERBARN_KVOTE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Trekkdager flerbarn kvote"},{"kode":"OPPHOLDSRETT_IKKE_EOS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruker har ikke oppholdsrett i EØS"},{"kode":"TILRETTELEGGING_SKAL_BRUKES","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avgjør om tilrettelegging skal brukes"},{"kode":"ER_ANKE_IKKE_KONKRET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er anke ikke konkret."},{"kode":"BEHANDLING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Behandling"},{"kode":"UTTAK_GRADERING_ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Gradering av arbeidsforhold"},{"kode":"ANKE_AVVIST_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak til avvist anke"},{"kode":"INNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntekt"},{"kode":"SOKNADSFRISTVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Søknadsfristvilkåret"},{"kode":"DAGPENGER_INNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dagpenger"},{"kode":"ARBEIDSFORHOLD_BEKREFTET_TOM_DATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Til og med dato fastsatt av saksbehandler"},{"kode":"SOKNADSFRIST","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Søknadsfrist"},{"kode":"VILKAR_SOM_ANVENDES","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Vilkår som anvendes"},{"kode":"PERIODE_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Periode f.o.m."},{"kode":"UTTAK_PROSENT_UTBETALING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Utbetalingsgrad"},{"kode":"NYTT_REFUSJONSKRAV","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Nytt refusjonskrav"},{"kode":"DODSDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dødsdato"},{"kode":"DOKUMENTASJON_FORELIGGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dokumentasjon foreligger"},{"kode":"LØNNSENDRING_I_PERIODEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Lønnsendring i beregningsperioden"},{"kode":"AVKLART_PERIODE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avklart periode"},{"kode":"SVANGERSKAPSPENGERVILKÅRET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Svangerskapsvilkåret"},{"kode":"KLAGE_OMGJØR_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak til omgjøring"},{"kode":"AKTIVITET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Aktivitet"},{"kode":"UTTAK_STØNADSKONTOTYPE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Stønadskontotype"},{"kode":"ALENEOMSORG","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Aleneomsorg"},{"kode":"OMSORG","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Omsorg"},{"kode":"KONTAKTPERSON","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Kontaktperson"},{"kode":"ER_KLAGE_KONKRET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"TILRETTELEGGING_BEHOV_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Tilrettelegging behov FOM"},{"kode":"ANNEN_FORELDER_RETT_EØS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Annen forelder har opptjent rett fra land i EØS"},{"kode":"AKTIVITETSKRAV_AVKLARING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avklaring om mor er i aktivitet"},{"kode":"FASTSETT_RESULTAT_PERIODEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fastsett resultat for perioden"},{"kode":"FRILANSVIRKSOMHET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Frilansvirksomhet"},{"kode":"MANN_ADOPTERER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mann adopterer"},{"kode":"ANDEL_ARBEID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Andel i arbeid"},{"kode":"DELVIS_TILRETTELEGGING_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Delvis tilrettelegging FOM"},{"kode":"OPPTJENINGSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Opptjeningsvilkåret"},{"kode":"ER_KLAGER_PART","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"UTTAK_PERIODE_RESULTAT_TYPE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resultattype for periode"},{"kode":"UTLAND","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Utland"},{"kode":"BRUK_ANTALL_I_TPS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruk antall fra folkeregisteret"},{"kode":"AKTIVITET_PERIODE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Perioden med aktivitet"},{"kode":"FASTSETT_ETTERLØNN_SLUTTPAKKE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fastsett søkers månedsinntekt fra etterlønn eller sluttpakke"},{"kode":"IKKE_OMSORG_PERIODEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Perioden Søker har ikke omsorg for barnet"},{"kode":"DEKNINGSGRAD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dekningsgrad"},{"kode":"ER_ANKEN_IKKE_SIGNERT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"er anken ikke signert."},{"kode":"SYKDOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Sykdom"},{"kode":"UTSTEDTDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Utstedtdato"},{"kode":"FODSELSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fødsel"},{"kode":"NAVN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Navn"},{"kode":"UTTAK_TREKKDAGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Trekkdager"},{"kode":"PA_KLAGD_BEHANDLINGID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Påklagd behandlingId"},{"kode":"VURDER_ETTERLØNN_SLUTTPAKKE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Har søker inntekt fra etterlønn eller sluttpakke"},{"kode":"OPPHOLDSRETT_EOS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruker har oppholdsrett i EØS"},{"kode":"RETT_TIL_FORELDREPENGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Rett til foreldrepenger"},{"kode":"INNTEKTSKATEGORI","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntektskategori"},{"kode":"ADOPTERER_ALENE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Adopterer alene"},{"kode":"ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Arbeidsforhold"},{"kode":"BRUKER_TVUNGEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruker er under tvungen forvaltning"},{"kode":"DELVIS_REFUSJON_FØR_STARTDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Delvis refusjon som utbetales før startdato for full refusjon"},{"kode":"ENDRING_TIDSBEGRENSET_ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Endring tidsbegrenset arbeidsforhold"},{"kode":"VURDER_GRADERING_PÅ_ANDEL_UTEN_BG","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Vurder om søker har gradering på en andel uten beregningsgrunnlag"},{"kode":"MANDAT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mandat"},{"kode":"MOR_MOTTAR_UFØRETRYGD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mor mottar uføretrygd"},{"kode":"HEL_TILRETTELEGGING_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Hel tilrettelegging FOM"},{"kode":"ORGANISASJONSNUMMER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Organisasjonsnummer"},{"kode":"UTTAK_GRADERING_AVSLAG_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak avslag gradering"},{"kode":"ER_KLAGEN_SIGNERT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"ER_KLAGEFRIST_OVERHOLDT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"OMSORGSVILKAR","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Foreldreansvar"},{"kode":"PA_ANKET_BEHANDLINGID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"på anket behandlingsId."},{"kode":"SLUTTE_ARBEID_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Slutte arbeid FOM"},{"kode":"BRUK_ANTALL_I_SOKNAD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruk antall fra søknad"},{"kode":"KLAGE_RESULTAT_NFP","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resultat"},{"kode":"FORDELING_FOR_ANDEL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fordeling for arbeidsforhold"},{"kode":"UTTAK_SAMTIDIG_UTTAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Samtidig uttak"},{"kode":"ER_SOKER_BOSATT_I_NORGE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er søker bosatt i Norge?"},{"kode":"FRILANS_INNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Frilans inntekt"},{"kode":"FASTSETT_VIDERE_BEHANDLING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fastsett videre behandling"},{"kode":"BRUK_ANTALL_I_VEDTAKET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruk antall fra vedtaket"},{"kode":"OMSORGSOVERTAKELSESDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Omsorgsovertakelsesdato"},{"kode":"UTTAK_PERIODE_RESULTAT_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resultat årsak"},{"kode":"ENDRING_NAERING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Endring i næring"},{"kode":"FORDELING_FOR_NY_ANDEL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny andel med fordeling"},{"kode":"BEHANDLENDE_ENHET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Behandlende enhet"},{"kode":"BRUTTO_NAERINGSINNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Brutto næringsinntekt"},{"kode":"FORDELING_ETTER_BESTEBEREGNING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fordeling etter besteberegning"},{"kode":"STARTDATO_FRA_SOKNAD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Startdato fra søknad"},{"kode":"NY_STARTDATO_REFUSJON","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny startdato for refusjon"},{"kode":"OVERSTYRT_VURDERING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Overstyrt vurdering"},{"kode":"KLAGE_RESULTAT_KA","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ytelsesvedtak"},{"kode":"FARESIGNALER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Faresignaler"},{"kode":"NY_AKTIVITET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Det er lagt til ny aktivitet for"},{"kode":"MOTTAR_YTELSE_FRILANS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mottar søker ytelse for frilansaktiviteten"},{"kode":"NY_REFUSJONSFRIST","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny refusjonsfrist"},{"kode":"OVERSTYRT_BEREGNING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Overstyrt beregning"},{"kode":"AVKLARSAKSOPPLYSNINGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avklar saksopplysninger"},{"kode":"INNTEKT_FRA_ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntekt fra arbeidsforhold"},{"kode":"SOKERSOPPLYSNINGSPLIKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Søkers opplysningsplikt"},{"kode":"SELVSTENDIG_NAERINGSDRIVENDE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Selvstendig næringsdrivende"},{"kode":"GYLDIG_MEDLEM_FOLKETRYGDEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Gyldig medlem i folketrygden"},{"kode":"MOTTATT_DATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mottatt dato"},{"kode":"ANTALL_BARN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Antall barn"},{"kode":"EKTEFELLES_BARN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ektefelles barn"},{"kode":"MILITÆR_ELLER_SIVIL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Militær- eller siviltjeneste"},{"kode":"PERIODE_TOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Periode t.o.m."},{"kode":"FORELDREANSVARSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Foreldreansvar"},{"kode":"STILLINGSPROSENT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Stillingsprosent"},{"kode":"ADOPSJONSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Adopsjon"},{"kode":"ANKE_OMGJØR_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak til omgjøring"},{"kode":"INNTEKTSKATEGORI_FOR_ANDEL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntektskategori for andel"},{"kode":"KONTROLL_AV_BESTEBEREGNING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Kontroll av besteberegning"},{"kode":"MOR_MOTTAR_STØNAD_EØS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mor mottar foreldrepenger fra land i EØS"},{"kode":"ER_ANKER_IKKE_PART","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Angir om anker ikke er part i saken."},{"kode":"ER_VILKÅRENE_TILBAKEKREVING_OPPFYLT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er vilkårene for tilbakekreving oppfylt"},{"kode":"NY_FORDELING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny fordeling for"},{"kode":"ER_SÆRLIGE_GRUNNER_TIL_REDUKSJON","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er det særlige grunner til reduksjon"},{"kode":"MOTTAR_YTELSE_ARBEID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mottar søker ytelse for arbeid i {value}"},{"kode":"TYPE_VERGE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Type verge"}]'),_d=[{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet/savnet"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Uregistrert person"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"UTAN",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person annullert tilgang Fnr"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utvandret"}],Nd=[{kode:"ENHETSREGISTERET",kodeverk:"FAGSYSTEM",navn:"Enhetsregisteret"},{kode:"INFOTRYGD",kodeverk:"FAGSYSTEM",navn:"Infotrygd"},{kode:"INNTEKT",kodeverk:"FAGSYSTEM",navn:"INNTEKT"},{kode:"ARENA",kodeverk:"FAGSYSTEM",navn:"Arena"},{kode:"GOSYS",kodeverk:"FAGSYSTEM",navn:"Gosys"},{kode:"JOARK",kodeverk:"FAGSYSTEM",navn:"Joark"},{kode:"K9SAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Folketrygdloven Kapittel 9"},{kode:"FPSAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Foreldrepenger"},{kode:"AAREGISTERET",kodeverk:"FAGSYSTEM",navn:"AAregisteret"},{kode:"MEDL",kodeverk:"FAGSYSTEM",navn:"MEDL"},{kode:"TPS",kodeverk:"FAGSYSTEM",navn:"TPS"},{kode:"VLSP",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Sykepenger"}],Id=[{kode:"ANKE_STADFESTE_YTELSESVEDTAK",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"ANKEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"ANKE_AVVIS",kodeverk:"ANKEVURDERING",navn:"Anken avvises"},{kode:"ANKE_OMGJOER",kodeverk:"ANKEVURDERING",navn:"Anken omgjøres"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket oppheves og hjemsendes"}],Od=[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"}],Kd=[{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],Dd=[{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"}],Ld=[{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er slått sammen med et annet"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforhold lagt til av saksbehandler"},{kode:"BRUK_UTEN_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk, men ikke benytt inntektsmelding"},{kode:"IKKE_BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Ikke bruk"},{kode:"BASERT_PÅ_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet som ikke ligger i AA-reg er basert på inntektsmelding"},{kode:"BRUK_MED_OVERSTYRT_PERIODE",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Inntekten til arbeidsforholdet skal ikke være med i beregningsgrunnlaget"}],Pd=[{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"}],Fd=[{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"}],qd=[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],jd=[{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],wd=[{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"}],Md=[{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],Bd=[{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"}],Vd=[{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"},{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"}],Gd=[{kode:"SAMMENSATT_KONTROLL",kodeverk:"FAGSAK_MARKERING",navn:"Sammensatt kontroll"},{kode:"EØS_BOSATT_NORGE",kodeverk:"FAGSAK_MARKERING",navn:"EØS bosatt Norge"},{kode:"SELVSTENDIG_NÆRING",kodeverk:"FAGSAK_MARKERING",navn:"Næringsdrivende"},{kode:"BARE_FAR_RETT",kodeverk:"FAGSAK_MARKERING",navn:"Bare far har rett"},{kode:"BOSATT_UTLAND",kodeverk:"FAGSAK_MARKERING",navn:"Bosatt utland"},{kode:"DØD_DØDFØDSEL",kodeverk:"FAGSAK_MARKERING",navn:"Død eller dødfødsel"},{kode:"PRAKSIS_UTSETTELSE",kodeverk:"FAGSAK_MARKERING",navn:"Praksis utsettelse"}],Hd={RelasjonsRolleType:Cl,HistorikkinnslagType:$l,UttakUtsettelseType:Jl,FagsakYtelseType:Wl,StønadskontoType:[{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"}],FagsakStatus:zl,Venteårsak:[{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga for tidlig søknad"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdId som stemmer med Aareg"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på scanning"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev venter søknad."},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."}],AnkeVurderingOmgjør:[{kode:"ANKE_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Gunst omgjør i anke"},{kode:"ANKE_TIL_UGUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Ugunst omgjør i anke"},{kode:"ANKE_DELVIS_OMGJOERING_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Delvis omgjøring, til gunst i anke"}],BehandlingÅrsakType:[{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger inntekt"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Inntektsmelding"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger søknadsfrist"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger opptjening"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Søknad"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger beregning"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. u26-29"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger medlemskap"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev uttak"}],GraderingAvslagÅrsak:[{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"Avslag gradering - arbeid 100% eller mer",lovHjemmel:null}],AktivitetStatus:Xl,BeregningsgrunnlagAndeltype:Zl,RevurderingVarslingÅrsak:[{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utvandret"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:Ql,KonsekvensForYtelsen:ed,Inntektskategori:nd,SivilstandType:rd,SkjermlenkeType:td,FaktaOmBeregningTilfelle:ad,KlageVurdering:sd,HistorikkBegrunnelseType:id,OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:od,KlageAvvistÅrsak:[{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klage er ugyldig",lovHjemmel:null}],BehandlingResultatType:ld,VergeType:dd,TilbakekrevingVidereBehandling:ud,OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"}],FamilieHendelseType:gd,KlageHjemmel:kd,VilkårType:[{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"}],FarSøkerType:[{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"}],FaresignalVurdering:md,ArbeidType:vd,KlageMedholdÅrsak:[{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"}],Region:Ed,OppgaveÅrsak:[{kode:"BEH_SAK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i VL"},{kode:"BEH_SAK_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i Infotrygd"},{kode:"INNHENT_DOK",kodeverk:"OPPGAVE_AARSAK",navn:"Innhent dokumentasjon"},{kode:"VUR_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder dokument i VL"},{kode:"REG_SOK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Registrere søknad i VL"},{kode:"SETTVENT_STO",kodeverk:"OPPGAVE_AARSAK",navn:"Sett Arena utbetaling på vent"},{kode:"RV_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Revurdere i VL"},{kode:"VUR_KONS_YTE_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder konsekvens for ytelse foreldrepenger"},{kode:"GOD_VED_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Godkjenne vedtak i VL"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"},{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"}],HistorikkOpplysningType:fd,FordelingPeriodeKilde:yd,KlageVurderingOmgjør:[{kode:"DELVIS_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Delvis medhold i klage"},{kode:"UGUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Ugunst medhold i klage"},{kode:"GUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Gunst medhold i klage"}],VurderArbeidsforholdHistorikkinnslag:Td,Arbeidskategori:pd,VurderÅrsak:[{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"}],Landkoder:Rd,BehandlingType:cd,KontrollerAktivitetskravAvklaring:Ad,InnsynResultatType:bd,MedlemskapType:hd,HistorikkEndretFeltType:Sd,PersonstatusType:_d,Fagsystem:Nd,AnkeVurdering:Id,UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"}],BehandlingStatus:Od,VirksomhetType:Kd,MedlemskapDekningType:Dd,ArbeidsforholdHandlingType:Ld,HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"}],Avslagsårsak:JSON.parse('{"FP_VK_3":[{"kode":"1007","kodeverk":"AVSLAGSARSAK","navn":"Søkt for sent","lovHjemmel":null}],"FP_VK_4":[{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1005","kodeverk":"AVSLAGSARSAK","navn":"Ektefelles/samboers barn","lovHjemmel":null},{"kode":"1011","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK11\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK16\\", \\"lovreferanse\\": \\"§ 14-5 2. ledd\\"}]}]}"},{"kode":"1006","kodeverk":"AVSLAGSARSAK","navn":"Mann adopterer ikke alene","lovHjemmel":null},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1004","kodeverk":"AVSLAGSARSAK","navn":"Barn over 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_1":[{"kode":"1002","kodeverk":"AVSLAGSARSAK","navn":"Søker er medmor","lovHjemmel":null},{"kode":"1031","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}"},{"kode":"1003","kodeverk":"AVSLAGSARSAK","navn":"Søker er far","lovHjemmel":null},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1001","kodeverk":"AVSLAGSARSAK","navn":"Søkt for tidlig","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1026","kodeverk":"AVSLAGSARSAK","navn":"Fødselsdato ikke oppgitt eller registrert","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_2":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utvandret","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"}],"-":[],"FP_VK_41":[{"kode":"1041","kodeverk":"AVSLAGSARSAK","navn":"For lavt brutto beregningsgrunnlag","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_41\\", \\"lovreferanse\\": \\"14-7\\"}]}]}"}],"FP_VK_21":[{"kode":"1035","kodeverk":"AVSLAGSARSAK","navn":"Ikke tilstrekkelig opptjening","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_23\\", \\"lovreferanse\\": \\"14-6\\"}]}]}"}],"FP_VK_11":[{"kode":"1027","kodeverk":"AVSLAGSARSAK","navn":"Ingen barn dokumentert på far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1028","kodeverk":"AVSLAGSARSAK","navn":"Mor fyller ikke vilkåret for sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1029","kodeverk":"AVSLAGSARSAK","navn":"Bruker er ikke registrert som far/medmor til barnet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_33":[{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1017","kodeverk":"AVSLAGSARSAK","navn":"Omsorgsovertakelse etter 56 uker","lovHjemmel":null},{"kode":"1016","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke barnets far","lovHjemmel":null},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1018","kodeverk":"AVSLAGSARSAK","navn":"Ikke foreldreansvar alene etter barnelova","lovHjemmel":null}],"FP_VK_34":[{"kode":"1019","kodeverk":"AVSLAGSARSAK","navn":"Manglende dokumentasjon","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_34\\", \\"lovreferanse\\": \\"21-3\\"}]}]}"}],"FP_VK_23":[{"kode":"1035","kodeverk":"AVSLAGSARSAK","navn":"Ikke tilstrekkelig opptjening","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_23\\", \\"lovreferanse\\": \\"14-6\\"}]}]}"}],"FP_VK_8":[{"kode":"1014","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke foreldreansvar","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1013","kodeverk":"AVSLAGSARSAK","navn":"Barn ikke under 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1015","kodeverk":"AVSLAGSARSAK","navn":"Søker har hatt vanlig samvær med barnet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"}],"SVP_VK_1":[{"kode":"1065","kodeverk":"AVSLAGSARSAK","navn":"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 2. ledd\\"}]}]}"},{"kode":"1062","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Søker har mottatt sykepenger","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1066","kodeverk":"AVSLAGSARSAK","navn":"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 2. ledd\\"}]}]}"},{"kode":"1064","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1063","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1061","kodeverk":"AVSLAGSARSAK","navn":"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 3. ledd\\"}]}]}"},{"kode":"1060","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Søker er ikke gravid kvinne","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"}],"FP_VK_16":[{"kode":"1004","kodeverk":"AVSLAGSARSAK","navn":"Barn over 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1051","kodeverk":"AVSLAGSARSAK","navn":"Stebarnsadopsjon ikke flere dager igjen","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_5":[{"kode":"1009","kodeverk":"AVSLAGSARSAK","navn":"Mor ikke død","lovHjemmel":null},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1008","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke barnets far","lovHjemmel":null},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1011","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK11\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK16\\", \\"lovreferanse\\": \\"§ 14-5 2. ledd\\"}]}]}"},{"kode":"1012","kodeverk":"AVSLAGSARSAK","navn":"Far har ikke omsorg for barnet","lovHjemmel":null},{"kode":"1010","kodeverk":"AVSLAGSARSAK","navn":"Mor ikke død ved fødsel/omsorg","lovHjemmel":null}],"FP_VK_2_L":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utvandret","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"}],"FP_VK_2_F":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utvandret","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1052","kodeverk":"AVSLAGSARSAK","navn":"Innflyttet for mindre enn ett år siden","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK_2_F\\", \\"lovreferanse\\": \\"14-17 5. ledd\\"}]}]}"}]}'),OpptjeningAktivitetType:Pd,PermisjonsbeskrivelseType:Fd,Språkkode:[{kode:"NB",kodeverk:"SPRAAK_KODE",navn:"Norsk"},{kode:"NN",kodeverk:"SPRAAK_KODE",navn:"Nynorsk"},{kode:"EN",kodeverk:"SPRAAK_KODE",navn:"Engelsk"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"}],OppholdstillatelseType:qd,MedlemskapManuellVurderingType:jd,ManuellBehandlingÅrsak:[{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."}],MorsAktivitet:wd,NaturalYtelseType:Md,PeriodeResultatÅrsak:JSON.parse('[{"kode":"2010","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4072","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjuende ledd: Barnet er dødt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-7","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4037","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Ikke heltidsarbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4085","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Det er ikke samtykke mellom partene","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2035","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-16\\"}}}","sortering":"14-14-3","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4052","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4032","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4013","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4084","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4097","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Adopsjonsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4104","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 tredje ledd: Stønadsperiode for nytt barn","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4086","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10,14-11\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4002","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Ikke stønadsdager igjen på stønadskonto","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2012","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4023","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-5","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4031","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Ferie/arbeid innenfor de første 6 ukene","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4112","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Barnets innleggelse første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2017","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2036","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4071","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Bruker er død","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4098","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Foreldreansvarsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4067","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4066","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2032","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2026","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2031","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12, jf. §14-16: Gradering av kvote/overført kvote","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4081","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4053","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2007","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Innvilget foreldrepenger, kun mor har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2014","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4007","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2023","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15\\"}}}","sortering":"14-15-1","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4056","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-g","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2016","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-b","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2004","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2018","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2024","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4068","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4087","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-2: Opphør medlemskap","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-2\\"}}}","sortering":"14-02","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4110","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4115","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4096","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Fødselsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4035","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4073","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4069","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4062","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4089","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-g","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4034","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-9\\"}}}","sortering":"14-11-0","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2038","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Samtidig uttak","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4075","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger","lovHjemmel":"","sortering":"14-09-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4005","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjuende ledd: Ikke sammenhengende perioder","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-7","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2034","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2028","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4060","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2006","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Innvilget foreldrepenger før fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4105","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4058","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2002","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Innvilget fellesperiode/foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4095","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL"],"synligForRolle":["MOR"]},{"kode":"4116","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4092","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Avslag overføring - har ikke aleneomsorg for barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4038","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2022","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4008","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4064","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4111","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Søkers innleggelse første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4054","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-e","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2020","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-09-1","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4077","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10 a\\"}}}","sortering":"14-10-0-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2019","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-d","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2025","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4030","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Avslag utsettelse før termin/fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4050","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2003","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Innvilget uttak av kvote","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4082","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2013","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-d","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2027","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4088","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-f","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4063","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4099","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-6: Opptjeningsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-6\\"}}}","sortering":"14-06","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2039","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4103","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4039","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2037","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9, jf. §14-13: Innvilget fellesperiode til far","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4003","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 fjerde ledd: Mor har ikke omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-4","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4107","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4022","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 tredje ledd: Barnet er over 3 år","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4033","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Ikke lovbestemt ferie","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4059","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13, 14-9\\"}}}","sortering":"14-13-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4025","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-16\\"}}}","sortering":"14-16-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2021","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4070","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-e","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4074","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12,21-3\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2011","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2030","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4065","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4057","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2033","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13,14-16\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4076","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger","lovHjemmel":"","sortering":"14-09-5","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4040","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4061","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4041","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4020","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§22-13 tredje ledd: Brudd på søknadsfrist","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"22-13\\"}}}","sortering":"22-13-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4106","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2005","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15: Innvilget foreldrepenger ved aleneomsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15\\"}}}","sortering":"14-15","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4055","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-f","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4093","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-16: Avslag gradering - søker er ikke i arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-16\\"}}}","sortering":"14-16","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4102","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4051","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2015","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-a","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4100","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 andre ledd: Uttak før omsorgsovertakelse","lovHjemmel":"","sortering":"14-10-2","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4012","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 fjerde ledd: Far/medmor har ikke omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-4","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4117","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]}]'),ForeldreType:Bd,AdresseType:Vd,FagsakMarkering:Gd};function lt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $r={exports:{}},Ud=$r.exports,Xt;function xd(){return Xt||(Xt=1,function(e,n){(function(t,r){e.exports=r()})(Ud,function(){var t,r,a=1e3,s=6e4,i=36e5,o=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=31536e6,u=2628e6,g=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,k={years:d,months:u,days:o,hours:i,minutes:s,seconds:a,milliseconds:1,weeks:6048e5},E=function(K){return K instanceof _},f=function(K,I,S){return new _(K,S,I.$l)},v=function(K){return r.p(K)+"s"},h=function(K){return K<0},y=function(K){return h(K)?Math.ceil(K):Math.floor(K)},T=function(K){return Math.abs(K)},c=function(K,I){return K?h(K)?{negative:!0,format:""+T(K)+I}:{negative:!1,format:""+K+I}:{negative:!1,format:""}},_=function(){function K(S,F,P){var A=this;if(this.$d={},this.$l=P,S===void 0&&(this.$ms=0,this.parseFromMilliseconds()),F)return f(S*k[v(F)],this);if(typeof S=="number")return this.$ms=S,this.parseFromMilliseconds(),this;if(typeof S=="object")return Object.keys(S).forEach(function(R){A.$d[v(R)]=S[R]}),this.calMilliseconds(),this;if(typeof S=="string"){var O=S.match(g);if(O){var N=O.slice(2).map(function(R){return R!=null?Number(R):0});return this.$d.years=N[0],this.$d.months=N[1],this.$d.weeks=N[2],this.$d.days=N[3],this.$d.hours=N[4],this.$d.minutes=N[5],this.$d.seconds=N[6],this.calMilliseconds(),this}}return this}var I=K.prototype;return I.calMilliseconds=function(){var S=this;this.$ms=Object.keys(this.$d).reduce(function(F,P){return F+(S.$d[P]||0)*k[P]},0)},I.parseFromMilliseconds=function(){var S=this.$ms;this.$d.years=y(S/d),S%=d,this.$d.months=y(S/u),S%=u,this.$d.days=y(S/o),S%=o,this.$d.hours=y(S/i),S%=i,this.$d.minutes=y(S/s),S%=s,this.$d.seconds=y(S/a),S%=a,this.$d.milliseconds=S},I.toISOString=function(){var S=c(this.$d.years,"Y"),F=c(this.$d.months,"M"),P=+this.$d.days||0;this.$d.weeks&&(P+=7*this.$d.weeks);var A=c(P,"D"),O=c(this.$d.hours,"H"),N=c(this.$d.minutes,"M"),R=this.$d.seconds||0;this.$d.milliseconds&&(R+=this.$d.milliseconds/1e3,R=Math.round(1e3*R)/1e3);var j=c(R,"S"),q=S.negative||F.negative||A.negative||O.negative||N.negative||j.negative,H=O.format||N.format||j.format?"T":"",L=(q?"-":"")+"P"+S.format+F.format+A.format+H+O.format+N.format+j.format;return L==="P"||L==="-P"?"P0D":L},I.toJSON=function(){return this.toISOString()},I.format=function(S){var F=S||"YYYY-MM-DDTHH:mm:ss",P={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return F.replace(l,function(A,O){return O||String(P[A])})},I.as=function(S){return this.$ms/k[v(S)]},I.get=function(S){var F=this.$ms,P=v(S);return P==="milliseconds"?F%=1e3:F=P==="weeks"?y(F/k[P]):this.$d[P],F||0},I.add=function(S,F,P){var A;return A=F?S*k[v(F)]:E(S)?S.$ms:f(S,this).$ms,f(this.$ms+A*(P?-1:1),this)},I.subtract=function(S,F){return this.add(S,F,!0)},I.locale=function(S){var F=this.clone();return F.$l=S,F},I.clone=function(){return f(this.$ms,this)},I.humanize=function(S){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!S)},I.valueOf=function(){return this.asMilliseconds()},I.milliseconds=function(){return this.get("milliseconds")},I.asMilliseconds=function(){return this.as("milliseconds")},I.seconds=function(){return this.get("seconds")},I.asSeconds=function(){return this.as("seconds")},I.minutes=function(){return this.get("minutes")},I.asMinutes=function(){return this.as("minutes")},I.hours=function(){return this.get("hours")},I.asHours=function(){return this.as("hours")},I.days=function(){return this.get("days")},I.asDays=function(){return this.as("days")},I.weeks=function(){return this.get("weeks")},I.asWeeks=function(){return this.as("weeks")},I.months=function(){return this.get("months")},I.asMonths=function(){return this.as("months")},I.years=function(){return this.get("years")},I.asYears=function(){return this.as("years")},K}(),p=function(K,I,S){return K.add(I.years()*S,"y").add(I.months()*S,"M").add(I.days()*S,"d").add(I.hours()*S,"h").add(I.minutes()*S,"m").add(I.seconds()*S,"s").add(I.milliseconds()*S,"ms")};return function(K,I,S){t=S,r=S().$utils(),S.duration=function(A,O){var N=S.locale();return f(A,{$l:N},O)},S.isDuration=E;var F=I.prototype.add,P=I.prototype.subtract;I.prototype.add=function(A,O){return E(A)?p(this,A,1):F.bind(this)(A,O)},I.prototype.subtract=function(A,O){return E(A)?p(this,A,-1):P.bind(this)(A,O)}}})}($r)),$r.exports}var Yd=xd();const Cd=lt(Yd);var Jr={exports:{}},$d=Jr.exports,Zt;function Jd(){return Zt||(Zt=1,function(e,n){(function(t,r){e.exports=r()})($d,function(){var t="day";return function(r,a,s){var i=function(d){return d.add(4-d.isoWeekday(),t)},o=a.prototype;o.isoWeekYear=function(){return i(this).year()},o.isoWeek=function(d){if(!this.$utils().u(d))return this.add(7*(d-this.isoWeek()),t);var u,g,k,E,f=i(this),v=(u=this.isoWeekYear(),g=this.$u,k=(g?s.utc:s)().year(u).startOf("year"),E=4-k.isoWeekday(),k.isoWeekday()>4&&(E+=7),k.add(E,t));return f.diff(v,"week")+1},o.isoWeekday=function(d){return this.$utils().u(d)?this.day()||7:this.day(this.day()%7?d:d-7)};var l=o.startOf;o.startOf=function(d,u){var g=this.$utils(),k=!!g.u(u)||u;return g.p(d)==="isoweek"?k?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(d,u)}}})}(Jr)),Jr.exports}var Wd=Jd();const zd=lt(Wd);var Wr={exports:{}},Xd=Wr.exports,Qt;function Zd(){return Qt||(Qt=1,function(e,n){(function(t,r){e.exports=r()})(Xd,function(){var t="minute",r=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(s,i,o){var l=i.prototype;o.utc=function(v){var h={date:v,utc:!0,args:arguments};return new i(h)},l.utc=function(v){var h=o(this.toDate(),{locale:this.$L,utc:!0});return v?h.add(this.utcOffset(),t):h},l.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var d=l.parse;l.parse=function(v){v.utc&&(this.$u=!0),this.$utils().u(v.$offset)||(this.$offset=v.$offset),d.call(this,v)};var u=l.init;l.init=function(){if(this.$u){var v=this.$d;this.$y=v.getUTCFullYear(),this.$M=v.getUTCMonth(),this.$D=v.getUTCDate(),this.$W=v.getUTCDay(),this.$H=v.getUTCHours(),this.$m=v.getUTCMinutes(),this.$s=v.getUTCSeconds(),this.$ms=v.getUTCMilliseconds()}else u.call(this)};var g=l.utcOffset;l.utcOffset=function(v,h){var y=this.$utils().u;if(y(v))return this.$u?0:y(this.$offset)?g.call(this):this.$offset;if(typeof v=="string"&&(v=function(p){p===void 0&&(p="");var K=p.match(r);if(!K)return null;var I=(""+K[0]).match(a)||["-",0,0],S=I[0],F=60*+I[1]+ +I[2];return F===0?0:S==="+"?F:-F}(v),v===null))return this;var T=Math.abs(v)<=16?60*v:v,c=this;if(h)return c.$offset=T,c.$u=v===0,c;if(v!==0){var _=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(c=this.local().add(T+_,t)).$offset=T,c.$x.$localOffset=_}else c=this.utc();return c};var k=l.format;l.format=function(v){var h=v||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return k.call(this,h)},l.valueOf=function(){var v=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*v},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var E=l.toDate;l.toDate=function(v){return v==="s"&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():E.call(this)};var f=l.diff;l.diff=function(v,h,y){if(v&&this.$u===v.$u)return f.call(this,v,h,y);var T=this.local(),c=o(v).local();return f.call(T,c,h,y)}}})}(Wr)),Wr.exports}var Qd=Zd();const eu=lt(Qd),nu=Ps(),Fe=e=>Ul({locale:"nb-NO",messages:e},nu),hr="YYYY-MM-DD",Wn="DD.MM.YYYY",Bs={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};var zr={exports:{}},ru=zr.exports,ea;function tu(){return ea||(ea=1,function(e,n){(function(t,r){e.exports=r(de)})(ru,function(t){function r(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var a=r(t),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})}(zr)),zr.exports}tu();de.extend(eu);de.extend(zd);de.extend(Cd);const Sr=Fe(Bs),au="9999-12-31",_r=(e,n,t)=>de(e,n,t).utc(!0).startOf("day"),Vs=(e,n)=>{let t="Dato.AntallDagerOgUker";return e===void 0&&n===void 0?(t="Dato.TidenesEnde",{id:t,formattedString:Sr.formatMessage({id:t})}):!e&&!n?(t="Dato.NullDager",{id:t,formattedString:Sr.formatMessage({id:t}),weeks:0,days:0}):{id:t,formattedString:Sr.formatMessage({id:t},{weeks:e??0,days:n??0,seperator:n&&e?" ":""}),weeks:e,days:n}},su=(e,n,t=!0)=>{if(n===au)return Vs();const r=_r(e,hr),a=_r(n,hr);let s;if(t){let i=a.diff(r,"days"),o=_r(e,hr);for(s=o.isoWeekday()!==6&&o.isoWeekday()!==7?1:0;i>0;)o=o.add(1,"days"),o.isoWeekday()!==6&&o.isoWeekday()!==7&&(s+=1),i-=1}else s=a.diff(r,"days")+1;return s},iu=(e,n)=>{const t=su(e,n),r=Math.floor(t/5),a=t%5;return Vs(r,a)};Fe(Bs);function Gs(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(t=Gs(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Z(){for(var e,n,t=0,r="",a=arguments.length;t<a;t++)(e=arguments[t])&&(n=Gs(e))&&(r&&(r+=" "),r+=n);return r}function Hs(e){return n=>{e.forEach(t=>{typeof t=="function"?t(n):t!=null&&(t.current=n)})}}function Us(...e){return D.useCallback(Hs(e),e)}function ou(e,n){const t=Object.assign({},n);for(const r in n){const a=e[r],s=n[r];/^on[A-Z]/.test(r)?a&&s?t[r]=(...o)=>{s(...o),a(...o)}:a&&(t[r]=a):r==="style"?t[r]=Object.assign(Object.assign({},a),s):r==="className"&&(t[r]=[a,s].filter(Boolean).join(" "))}return Object.assign(Object.assign({},e),t)}var lu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const xs=m.forwardRef((e,n)=>{var t;const{children:r}=e,a=lu(e,["children"]);if(m.isValidElement(r)){const s=Object.prototype.propertyIsEnumerable.call(r.props,"ref")?r.props.ref:r.ref;return m.cloneElement(r,Object.assign(Object.assign({},ou(a,r.props)),{ref:n?Hs([n,s]):s}))}if(m.Children.count(r)>1){const s=new Error("Aksel: Components using 'asChild' expects to recieve a single React element child.");throw s.name="SlotError",(t=Error.captureStackTrace)===null||t===void 0||t.call(Error,s,xs),s}return null});var du=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};function uu(e,n){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${n}`}function gu(e={}){const{name:n,hookName:t="useContext",providerName:r="Provider",errorMessage:a,defaultValue:s}=e,i=m.createContext(s),o=m.forwardRef((d,u)=>{var{children:g}=d,k=du(d,["children"]);const E=D.useMemo(()=>k,Object.values(k));return D.createElement(i.Provider,{value:u?Object.assign(Object.assign({},E),{ref:u}):E},g)});function l(d=!0){var u;const g=m.useContext(i);if(!g&&d){const k=new Error(a??uu(t,r));throw k.name="ContextError",(u=Error.captureStackTrace)===null||u===void 0||u.call(Error,k,l),k}return g}return i.displayName=n,[o,l]}const[ku,jn]=gu({hookName:"useTheme",name:"ThemeProvider",providerName:"ThemeProvider"});m.forwardRef((e,n)=>{var t;const r=jn(!1),{children:a,className:s,asChild:i=!1,theme:o=(t=r==null?void 0:r.theme)!==null&&t!==void 0?t:"light",hasBackground:l=!0}=e,u=l??(r===void 0&&e.theme!==void 0),g=i?xs:"div";return D.createElement(ku,{theme:o},D.createElement(g,{ref:n,className:Z("navds-theme",s,o),"data-background":u},a))});const pn=e=>Z({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var mu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const vu=m.forwardRef((e,n)=>{var{className:t,size:r="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:d,textColor:u}=e,g=mu(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return D.createElement(a,Object.assign({},g,{ref:n,className:Z(t,"navds-body-long",`navds-body-long--${r}`,pn({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:d,textColor:u}))}))});var Eu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const ie=m.forwardRef((e,n)=>{var{className:t,size:r="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:d,textColor:u}=e,g=Eu(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return D.createElement(a,Object.assign({},g,{ref:n,className:Z(t,"navds-body-short",`navds-body-short--${r}`,pn({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:d,textColor:u}))}))});var fu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Ys=m.forwardRef((e,n)=>{var{className:t,size:r="medium",spacing:a,uppercase:s,as:i="p",truncate:o,weight:l="regular",align:d,visuallyHidden:u,textColor:g}=e,k=fu(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return D.createElement(i,Object.assign({},k,{ref:n,className:Z(t,"navds-detail",pn({spacing:a,truncate:o,weight:l,align:d,visuallyHidden:u,textColor:g,uppercase:s}),{"navds-detail--small":r==="small"})}))});var yu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};m.forwardRef((e,n)=>{var{children:t,className:r,size:a,spacing:s,as:i="p",showIcon:o=!1}=e,l=yu(e,["children","className","size","spacing","as","showIcon"]);return D.createElement(i,Object.assign({},l,{ref:n,className:Z("navds-error-message","navds-label",r,pn({spacing:s}),{"navds-label--small":a==="small","navds-error-message--show-icon":o})}),o&&D.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},D.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var Tu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const dt=m.forwardRef((e,n)=>{var{level:t="1",size:r,className:a,as:s,spacing:i,align:o,visuallyHidden:l,textColor:d}=e,u=Tu(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const g=s??`h${t}`;return D.createElement(g,Object.assign({},u,{ref:n,className:Z(a,"navds-heading",`navds-heading--${r}`,pn({spacing:i,align:o,visuallyHidden:l,textColor:d}))}))});var pu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};m.forwardRef((e,n)=>{var{className:t,spacing:r,as:a="p"}=e,s=pu(e,["className","spacing","as"]);return D.createElement(a,Object.assign({},s,{ref:n,className:Z(t,"navds-ingress",{"navds-typo--spacing":!!r})}))});var Ru=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const _n=m.forwardRef((e,n)=>{var{className:t,size:r="medium",as:a="label",spacing:s,visuallyHidden:i,textColor:o}=e,l=Ru(e,["className","size","as","spacing","visuallyHidden","textColor"]);return D.createElement(a,Object.assign({},l,{ref:n,className:Z(t,"navds-label",pn({spacing:s,visuallyHidden:i,textColor:o}),{"navds-label--small":r==="small"})}))});function ln(e,n){const t=Object.entries(e).filter(([r])=>!n.includes(r));return Object.fromEntries(t)}let na=0;function cu(e){const[n,t]=m.useState(e),r=e||n;return m.useEffect(()=>{n==null&&(na+=1,t(`aksel-id-${na}`))},[n]),r}const ra=D.useId;function Au(e){var n;return ra!==void 0?ra().replace(/(:)/g,""):(n=cu(e))!==null&&n!==void 0?n:""}function ta(e,n=[]){const t=m.useRef(e);return m.useEffect(()=>{t.current=e}),m.useCallback((...r)=>{var a;return(a=t.current)===null||a===void 0?void 0:a.call(t,...r)},n)}function bu({value:e,defaultValue:n,onChange:t}){const r=ta(t),[a,s]=m.useState(n),i=e!==void 0,o=i?e:a,l=ta(d=>{const g=typeof d=="function"?d(o):d;i||s(g),r(g)},[i,r,o]);return[o,l]}const ut=m.createContext({headingSize:"small",size:"medium",openItems:[],mounted:!1});var hu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const gt=m.createContext(null),Su=m.forwardRef((e,n)=>{var{children:t,className:r,open:a,defaultOpen:s=!1,onOpenChange:i}=e,o=hu(e,["children","className","open","defaultOpen","onOpenChange"]);const[l,d]=bu({defaultValue:s,value:a,onChange:i}),u=m.useContext(ut),g=m.useRef(!(a||s)),k=()=>{d(E=>!E),g.current=!0};return u!=null&&u.mounted||console.error("<Accordion.Item> has to be used within an <Accordion>"),D.createElement("div",Object.assign({className:Z("navds-accordion__item",r,{"navds-accordion__item--open":l,"navds-accordion__item--neutral":(u==null?void 0:u.variant)==="neutral","navds-accordion__item--no-animation":!g.current}),"data-expanded":l,ref:n},ln(o,["onClick"])),D.createElement(gt.Provider,{value:{open:l,toggleOpen:k}},t))});var _u=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Nu=m.forwardRef((e,n)=>{var{children:t,className:r}=e,a=_u(e,["children","className"]);const s=m.useContext(gt),i=jn(!1);return s===null?(console.error("<Accordion.Content> has to be used within an <Accordion.Item>"),null):D.createElement(vu,Object.assign({},a,{as:"div",ref:n,className:Z("navds-accordion__content",{"navds-accordion__content--closed":!s.open},r),"aria-hidden":!s.open||void 0}),i?D.createElement("div",{className:"navds-accordion__content-inner"},t):t)});let aa=0;function Iu(e){const[n,t]=m.useState(e),r=e||n;return m.useEffect(()=>{n==null&&(aa+=1,t(`aksel-icon-${aa}`))},[n]),r}const sa=D.useId;function pe(e){var n;return sa!==void 0?sa().replace(/(:)/g,""):(n=Iu(e))!==null&&n!==void 0?n:""}var Ou=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Cs=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=Ou(e,["title","titleId"]);let s=pe();return s=t?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),t?m.createElement("title",{id:s},t):null,m.createElement("path",{fill:"currentColor",d:"M4.47 11.47a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06l-3.22-3.22H19a.75.75 0 0 0 0-1.5H6.81l3.22-3.22a.75.75 0 1 0-1.06-1.06z"}))});var Ku=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const $s=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=Ku(e,["title","titleId"]);let s=pe();return s=t?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),t?m.createElement("title",{id:s},t):null,m.createElement("path",{fill:"currentColor",d:"M14.087 6.874a.752.752 0 0 0-.117 1.156l3.22 3.22H5a.75.75 0 0 0 0 1.5h12.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-.943-.096"}))});var Du=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Lu=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=Du(e,["title","titleId"]);let s=pe();return s=t?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),t?m.createElement("title",{id:s},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m4.573 7.234a.75.75 0 1 0-1.146-.968l-4.973 5.877L8.03 11.97a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.102-.046z",clipRule:"evenodd"}))});var Pu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Fu=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=Pu(e,["title","titleId"]);let s=pe();return s=t?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),t?m.createElement("title",{id:s},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var qu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const ju=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=qu(e,["title","titleId"]);let s=pe();return s=t?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),t?m.createElement("title",{id:s},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M8.557 9.411a1.75 1.75 0 0 1 1.648-1.161h3.59c.74 0 1.4.465 1.648 1.161l2.263 6.337A.75.75 0 0 1 17 16.75h-2.75V21a.75.75 0 0 1-1.5 0v-4.25h-1.5V21a.75.75 0 0 1-1.5 0v-4.25H7a.75.75 0 0 1-.706-1.002z",clipRule:"evenodd"}))});var wu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Mu=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=wu(e,["title","titleId"]);let s=pe();return s=t?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),t?m.createElement("title",{id:s},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.75 12a.75.75 0 0 1 .75-.75h13a.75.75 0 1 1 0 1.5h-13a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Bu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Vu=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=Bu(e,["title","titleId"]);let s=pe();return s=t?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),t?m.createElement("title",{id:s},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.998 6.75a1.248 1.248 0 1 0 0 2.495 1.248 1.248 0 0 0 0-2.495M5.25 7.998a2.748 2.748 0 1 1 5.495 0 2.748 2.748 0 0 1-5.495 0m.22 10.532a.75.75 0 0 1 0-1.06l12-12a.75.75 0 1 1 1.06 1.06l-12 12a.75.75 0 0 1-1.06 0m9.28-2.532a1.248 1.248 0 1 1 2.495 0 1.248 1.248 0 0 1-2.495 0m1.248-2.748a2.748 2.748 0 1 0 0 5.495 2.748 2.748 0 0 0 0-5.495",clipRule:"evenodd"}))});var Gu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Hu=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=Gu(e,["title","titleId"]);let s=pe();return s=t?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),t?m.createElement("title",{id:s},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Uu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const xu=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=Uu(e,["title","titleId"]);let s=pe();return s=t?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),t?m.createElement("title",{id:s},t):null,m.createElement("path",{fill:"currentColor",d:"M12.75 5.5a.75.75 0 0 0-1.5 0v5.75H5.5a.75.75 0 0 0 0 1.5h5.75v5.75a.75.75 0 0 0 1.5 0v-5.75h5.75a.75.75 0 0 0 0-1.5h-5.75z"}))});var Yu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Cu=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=Yu(e,["title","titleId"]);let s=pe();return s=t?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),t?m.createElement("title",{id:s},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75h-.75V21a.75.75 0 0 1-1.5 0v-4.25h-1.5V21a.75.75 0 0 1-1.5 0v-4.25H9a.75.75 0 0 1-.75-.75z",clipRule:"evenodd"}))});var $u=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Ju=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=$u(e,["title","titleId"]);let s=pe();return s=t?r||"title-"+s:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),t?m.createElement("title",{id:s},t):null,m.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});function Js(e,n,{checkForDefaultPrevented:t=!0}={}){return function(a){if(e==null||e(a),t===!1||!a.defaultPrevented)return n==null?void 0:n(a)}}var Wu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const zu=m.forwardRef((e,n)=>{var t,{children:r,className:a,onClick:s}=e,i=Wu(e,["children","className","onClick"]);const o=m.useContext(gt),l=m.useContext(ut),d=jn(!1);if(o===null)return console.error("<Accordion.Header> has to be used within an <Accordion.Item>, which in turn must be within an <Accordion>"),null;let u=(t=l==null?void 0:l.headingSize)!==null&&t!==void 0?t:"small";return d&&(u=(l==null?void 0:l.size)==="small"?"xsmall":"small"),D.createElement("button",Object.assign({ref:n},i,{className:Z("navds-accordion__header",a),onClick:Js(s,o.toggleOpen),"aria-expanded":o.open,type:"button"}),D.createElement("span",{className:"navds-accordion__icon-wrapper"},D.createElement(Fu,{className:"navds-accordion__header-chevron","aria-hidden":!0})),D.createElement(dt,{size:u,as:"span",className:"navds-accordion__header-content"},r))});var Xu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const ze=m.forwardRef((e,n)=>{var{className:t,variant:r="default",headingSize:a="small",size:s="medium",indent:i=!0}=e,o=Xu(e,["className","variant","headingSize","size","indent"]);return D.createElement(ut.Provider,{value:{variant:r,headingSize:a,size:s,mounted:!0}},D.createElement("div",Object.assign({},o,{className:Z("navds-accordion",t,`navds-accordion--${s}`,{"navds-accordion--indent":i}),ref:n})))});ze.Header=zu;ze.Content=Nu;ze.Item=Su;function dn(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function be(e){return(n,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,o=t!=null&&t.width?String(t.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{const i=e.defaultWidth,o=t!=null&&t.width?String(t.width):e.defaultWidth;a=e.values[o]||e.values[i]}const s=e.argumentCallback?e.argumentCallback(n):n;return a[s]}}function he(e){return(n,t={})=>{const r=t.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=n.match(a);if(!s)return null;const i=s[0],o=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(o)?Qu(o,g=>g.test(i)):Zu(o,g=>g.test(i));let d;d=e.valueCallback?e.valueCallback(l):l,d=t.valueCallback?t.valueCallback(d):d;const u=n.slice(i.length);return{value:d,rest:u}}}function Zu(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function Qu(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function Ws(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const a=r[0],s=n.match(e.parsePattern);if(!s)return null;let i=e.valueCallback?e.valueCallback(s[0]):s[0];i=t.valueCallback?t.valueCallback(i):i;const o=n.slice(a.length);return{value:i,rest:o}}}function Y(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}let eg={};function mr(){return eg}function Nn(e,n){var o,l,d,u;const t=mr(),r=(n==null?void 0:n.weekStartsOn)??((l=(o=n==null?void 0:n.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((u=(d=t.locale)==null?void 0:d.options)==null?void 0:u.weekStartsOn)??0,a=Y(e),s=a.getDay(),i=(s<r?7:0)+s-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}const ng={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},rg=(e,n,t)=>{let r;const a=ng[e];return typeof a=="string"?r=a:n===1?r=a.one:r=a.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r},tg={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ag=(e,n,t,r)=>tg[e],sg={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ig={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},og={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},lg={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dg={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ug={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},gg=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},kg={ordinalNumber:gg,era:be({values:sg,defaultWidth:"wide"}),quarter:be({values:ig,defaultWidth:"wide",argumentCallback:e=>e-1}),month:be({values:og,defaultWidth:"wide"}),day:be({values:lg,defaultWidth:"wide"}),dayPeriod:be({values:dg,defaultWidth:"wide",formattingValues:ug,defaultFormattingWidth:"wide"})},mg=/^(\d+)(th|st|nd|rd)?/i,vg=/\d+/i,Eg={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},fg={any:[/^b/i,/^(a|c)/i]},yg={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Tg={any:[/1/i,/2/i,/3/i,/4/i]},pg={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Rg={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},cg={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ag={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},bg={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},hg={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Sg={ordinalNumber:Ws({matchPattern:mg,parsePattern:vg,valueCallback:e=>parseInt(e,10)}),era:he({matchPatterns:Eg,defaultMatchWidth:"wide",parsePatterns:fg,defaultParseWidth:"any"}),quarter:he({matchPatterns:yg,defaultMatchWidth:"wide",parsePatterns:Tg,defaultParseWidth:"any",valueCallback:e=>e+1}),month:he({matchPatterns:pg,defaultMatchWidth:"wide",parsePatterns:Rg,defaultParseWidth:"any"}),day:he({matchPatterns:cg,defaultMatchWidth:"wide",parsePatterns:Ag,defaultParseWidth:"any"}),dayPeriod:he({matchPatterns:bg,defaultMatchWidth:"any",parsePatterns:hg,defaultParseWidth:"any"})},_g={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ng={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ig={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Og={date:dn({formats:_g,defaultWidth:"full"}),time:dn({formats:Ng,defaultWidth:"full"}),dateTime:dn({formats:Ig,defaultWidth:"full"})},Kg={code:"en-US",formatDistance:rg,formatLong:Og,formatRelative:ag,localize:kg,match:Sg,options:{weekStartsOn:0,firstWeekContainsDate:1}},Dg={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Lg=(e,n,t)=>{let r;const a=Dg[e];return typeof a=="string"?r=a:n===1?r=a.one:r=a.other.replace("{{count}}",String(n)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"om "+r:r+" siden":r},Pg={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Fg={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},qg={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},jg={date:dn({formats:Pg,defaultWidth:"full"}),time:dn({formats:Fg,defaultWidth:"full"}),dateTime:dn({formats:qg,defaultWidth:"full"})},wg={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Mg=(e,n,t,r)=>wg[e],Bg={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Vg={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Gg={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Hg={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Ug={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},xg=(e,n)=>Number(e)+".",Yg={ordinalNumber:xg,era:be({values:Bg,defaultWidth:"wide"}),quarter:be({values:Vg,defaultWidth:"wide",argumentCallback:e=>e-1}),month:be({values:Gg,defaultWidth:"wide"}),day:be({values:Hg,defaultWidth:"wide"}),dayPeriod:be({values:Ug,defaultWidth:"wide"})},Cg=/^(\d+)\.?/i,$g=/\d+/i,Jg={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Wg={any:[/^f/i,/^e/i]},zg={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Xg={any:[/1/i,/2/i,/3/i,/4/i]},Zg={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Qg={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},ek={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},nk={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},rk={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},tk={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},ak={ordinalNumber:Ws({matchPattern:Cg,parsePattern:$g,valueCallback:e=>parseInt(e,10)}),era:he({matchPatterns:Jg,defaultMatchWidth:"wide",parsePatterns:Wg,defaultParseWidth:"any"}),quarter:he({matchPatterns:zg,defaultMatchWidth:"wide",parsePatterns:Xg,defaultParseWidth:"any",valueCallback:e=>e+1}),month:he({matchPatterns:Zg,defaultMatchWidth:"wide",parsePatterns:Qg,defaultParseWidth:"any"}),day:he({matchPatterns:ek,defaultMatchWidth:"wide",parsePatterns:nk,defaultParseWidth:"any"}),dayPeriod:he({matchPatterns:rk,defaultMatchWidth:"any",parsePatterns:tk,defaultParseWidth:"any"})},sk={code:"nb",formatDistance:Lg,formatLong:jg,formatRelative:Mg,localize:Yg,match:ak,options:{weekStartsOn:1,firstWeekContainsDate:4}},ik={global:{dateLocale:sk,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},ok=m.createContext({locale:ik}),zs=()=>m.useContext(ok),vn=Math.min,Ze=Math.max,Qn=Math.round,xn=Math.floor,Ne=e=>({x:e,y:e}),lk={left:"right",right:"left",bottom:"top",top:"bottom"},dk={start:"end",end:"start"};function Xr(e,n,t){return Ze(e,vn(n,t))}function wn(e,n){return typeof e=="function"?e(n):e}function en(e){return e.split("-")[0]}function Mn(e){return e.split("-")[1]}function Xs(e){return e==="x"?"y":"x"}function kt(e){return e==="y"?"height":"width"}function En(e){return["top","bottom"].includes(en(e))?"y":"x"}function mt(e){return Xs(En(e))}function uk(e,n,t){t===void 0&&(t=!1);const r=Mn(e),a=mt(e),s=kt(a);let i=a==="x"?r===(t?"end":"start")?"right":"left":r==="start"?"bottom":"top";return n.reference[s]>n.floating[s]&&(i=er(i)),[i,er(i)]}function gk(e){const n=er(e);return[Zr(e),n,Zr(n)]}function Zr(e){return e.replace(/start|end/g,n=>dk[n])}function kk(e,n,t){const r=["left","right"],a=["right","left"],s=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return t?n?a:r:n?r:a;case"left":case"right":return n?s:i;default:return[]}}function mk(e,n,t,r){const a=Mn(e);let s=kk(en(e),t==="start",r);return a&&(s=s.map(i=>i+"-"+a),n&&(s=s.concat(s.map(Zr)))),s}function er(e){return e.replace(/left|right|bottom|top/g,n=>lk[n])}function vk(e){return{top:0,right:0,bottom:0,left:0,...e}}function Zs(e){return typeof e!="number"?vk(e):{top:e,right:e,bottom:e,left:e}}function nr(e){const{x:n,y:t,width:r,height:a}=e;return{width:r,height:a,top:t,left:n,right:n+r,bottom:t+a,x:n,y:t}}function ia(e,n,t){let{reference:r,floating:a}=e;const s=En(n),i=mt(n),o=kt(i),l=en(n),d=s==="y",u=r.x+r.width/2-a.width/2,g=r.y+r.height/2-a.height/2,k=r[o]/2-a[o]/2;let E;switch(l){case"top":E={x:u,y:r.y-a.height};break;case"bottom":E={x:u,y:r.y+r.height};break;case"right":E={x:r.x+r.width,y:g};break;case"left":E={x:r.x-a.width,y:g};break;default:E={x:r.x,y:r.y}}switch(Mn(n)){case"start":E[i]-=k*(t&&d?-1:1);break;case"end":E[i]+=k*(t&&d?-1:1);break}return E}const Ek=async(e,n,t)=>{const{placement:r="bottom",strategy:a="absolute",middleware:s=[],platform:i}=t,o=s.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(n));let d=await i.getElementRects({reference:e,floating:n,strategy:a}),{x:u,y:g}=ia(d,r,l),k=r,E={},f=0;for(let v=0;v<o.length;v++){const{name:h,fn:y}=o[v],{x:T,y:c,data:_,reset:p}=await y({x:u,y:g,initialPlacement:r,placement:k,strategy:a,middlewareData:E,rects:d,platform:i,elements:{reference:e,floating:n}});u=T??u,g=c??g,E={...E,[h]:{...E[h],..._}},p&&f<=50&&(f++,typeof p=="object"&&(p.placement&&(k=p.placement),p.rects&&(d=p.rects===!0?await i.getElementRects({reference:e,floating:n,strategy:a}):p.rects),{x:u,y:g}=ia(d,k,l)),v=-1)}return{x:u,y:g,placement:k,strategy:a,middlewareData:E}};async function Qs(e,n){var t;n===void 0&&(n={});const{x:r,y:a,platform:s,rects:i,elements:o,strategy:l}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:k=!1,padding:E=0}=wn(n,e),f=Zs(E),h=o[k?g==="floating"?"reference":"floating":g],y=nr(await s.getClippingRect({element:(t=await(s.isElement==null?void 0:s.isElement(h)))==null||t?h:h.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(o.floating)),boundary:d,rootBoundary:u,strategy:l})),T=g==="floating"?{x:r,y:a,width:i.floating.width,height:i.floating.height}:i.reference,c=await(s.getOffsetParent==null?void 0:s.getOffsetParent(o.floating)),_=await(s.isElement==null?void 0:s.isElement(c))?await(s.getScale==null?void 0:s.getScale(c))||{x:1,y:1}:{x:1,y:1},p=nr(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:T,offsetParent:c,strategy:l}):T);return{top:(y.top-p.top+f.top)/_.y,bottom:(p.bottom-y.bottom+f.bottom)/_.y,left:(y.left-p.left+f.left)/_.x,right:(p.right-y.right+f.right)/_.x}}const fk=e=>({name:"arrow",options:e,async fn(n){const{x:t,y:r,placement:a,rects:s,platform:i,elements:o,middlewareData:l}=n,{element:d,padding:u=0}=wn(e,n)||{};if(d==null)return{};const g=Zs(u),k={x:t,y:r},E=mt(a),f=kt(E),v=await i.getDimensions(d),h=E==="y",y=h?"top":"left",T=h?"bottom":"right",c=h?"clientHeight":"clientWidth",_=s.reference[f]+s.reference[E]-k[E]-s.floating[f],p=k[E]-s.reference[E],K=await(i.getOffsetParent==null?void 0:i.getOffsetParent(d));let I=K?K[c]:0;(!I||!await(i.isElement==null?void 0:i.isElement(K)))&&(I=o.floating[c]||s.floating[f]);const S=_/2-p/2,F=I/2-v[f]/2-1,P=vn(g[y],F),A=vn(g[T],F),O=P,N=I-v[f]-A,R=I/2-v[f]/2+S,j=Xr(O,R,N),q=!l.arrow&&Mn(a)!=null&&R!==j&&s.reference[f]/2-(R<O?P:A)-v[f]/2<0,H=q?R<O?R-O:R-N:0;return{[E]:k[E]+H,data:{[E]:j,centerOffset:R-j-H,...q&&{alignmentOffset:H}},reset:q}}}),yk=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var t,r;const{placement:a,middlewareData:s,rects:i,initialPlacement:o,platform:l,elements:d}=n,{mainAxis:u=!0,crossAxis:g=!0,fallbackPlacements:k,fallbackStrategy:E="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:v=!0,...h}=wn(e,n);if((t=s.arrow)!=null&&t.alignmentOffset)return{};const y=en(a),T=En(o),c=en(o)===o,_=await(l.isRTL==null?void 0:l.isRTL(d.floating)),p=k||(c||!v?[er(o)]:gk(o)),K=f!=="none";!k&&K&&p.push(...mk(o,v,f,_));const I=[o,...p],S=await Qs(n,h),F=[];let P=((r=s.flip)==null?void 0:r.overflows)||[];if(u&&F.push(S[y]),g){const R=uk(a,i,_);F.push(S[R[0]],S[R[1]])}if(P=[...P,{placement:a,overflows:F}],!F.every(R=>R<=0)){var A,O;const R=(((A=s.flip)==null?void 0:A.index)||0)+1,j=I[R];if(j)return{data:{index:R,overflows:P},reset:{placement:j}};let q=(O=P.filter(H=>H.overflows[0]<=0).sort((H,L)=>H.overflows[1]-L.overflows[1])[0])==null?void 0:O.placement;if(!q)switch(E){case"bestFit":{var N;const H=(N=P.filter(L=>{if(K){const M=En(L.placement);return M===T||M==="y"}return!0}).map(L=>[L.placement,L.overflows.filter(M=>M>0).reduce((M,U)=>M+U,0)]).sort((L,M)=>L[1]-M[1])[0])==null?void 0:N[0];H&&(q=H);break}case"initialPlacement":q=o;break}if(a!==q)return{reset:{placement:q}}}return{}}}};async function Tk(e,n){const{placement:t,platform:r,elements:a}=e,s=await(r.isRTL==null?void 0:r.isRTL(a.floating)),i=en(t),o=Mn(t),l=En(t)==="y",d=["left","top"].includes(i)?-1:1,u=s&&l?-1:1,g=wn(n,e);let{mainAxis:k,crossAxis:E,alignmentAxis:f}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return o&&typeof f=="number"&&(E=o==="end"?f*-1:f),l?{x:E*u,y:k*d}:{x:k*d,y:E*u}}const pk=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){var t,r;const{x:a,y:s,placement:i,middlewareData:o}=n,l=await Tk(n,e);return i===((t=o.offset)==null?void 0:t.placement)&&(r=o.arrow)!=null&&r.alignmentOffset?{}:{x:a+l.x,y:s+l.y,data:{...l,placement:i}}}}},Rk=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:t,y:r,placement:a}=n,{mainAxis:s=!0,crossAxis:i=!1,limiter:o={fn:h=>{let{x:y,y:T}=h;return{x:y,y:T}}},...l}=wn(e,n),d={x:t,y:r},u=await Qs(n,l),g=En(en(a)),k=Xs(g);let E=d[k],f=d[g];if(s){const h=k==="y"?"top":"left",y=k==="y"?"bottom":"right",T=E+u[h],c=E-u[y];E=Xr(T,E,c)}if(i){const h=g==="y"?"top":"left",y=g==="y"?"bottom":"right",T=f+u[h],c=f-u[y];f=Xr(T,f,c)}const v=o.fn({...n,[k]:E,[g]:f});return{...v,data:{x:v.x-t,y:v.y-r,enabled:{[k]:s,[g]:i}}}}}};function vr(){return typeof window<"u"}function Rn(e){return ei(e)?(e.nodeName||"").toLowerCase():"#document"}function ke(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function Le(e){var n;return(n=(ei(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function ei(e){return vr()?e instanceof Node||e instanceof ke(e).Node:!1}function fe(e){return vr()?e instanceof Element||e instanceof ke(e).Element:!1}function Oe(e){return vr()?e instanceof HTMLElement||e instanceof ke(e).HTMLElement:!1}function oa(e){return!vr()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ke(e).ShadowRoot}function Bn(e){const{overflow:n,overflowX:t,overflowY:r,display:a}=ye(e);return/auto|scroll|overlay|hidden|clip/.test(n+r+t)&&!["inline","contents"].includes(a)}function ck(e){return["table","td","th"].includes(Rn(e))}function Er(e){return[":popover-open",":modal"].some(n=>{try{return e.matches(n)}catch{return!1}})}function vt(e){const n=Et(),t=fe(e)?ye(e):e;return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!n&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!n&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(t.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(t.contain||"").includes(r))}function Ak(e){let n=Ge(e);for(;Oe(n)&&!fn(n);){if(vt(n))return n;if(Er(n))return null;n=Ge(n)}return null}function Et(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function fn(e){return["html","body","#document"].includes(Rn(e))}function ye(e){return ke(e).getComputedStyle(e)}function fr(e){return fe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ge(e){if(Rn(e)==="html")return e;const n=e.assignedSlot||e.parentNode||oa(e)&&e.host||Le(e);return oa(n)?n.host:n}function ni(e){const n=Ge(e);return fn(n)?e.ownerDocument?e.ownerDocument.body:e.body:Oe(n)&&Bn(n)?n:ni(n)}function Ve(e,n,t){var r;n===void 0&&(n=[]),t===void 0&&(t=!0);const a=ni(e),s=a===((r=e.ownerDocument)==null?void 0:r.body),i=ke(a);if(s){const o=Qr(i);return n.concat(i,i.visualViewport||[],Bn(a)?a:[],o&&t?Ve(o):[])}return n.concat(a,Ve(a,[],t))}function Qr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ri(e){const n=ye(e);let t=parseFloat(n.width)||0,r=parseFloat(n.height)||0;const a=Oe(e),s=a?e.offsetWidth:t,i=a?e.offsetHeight:r,o=Qn(t)!==s||Qn(r)!==i;return o&&(t=s,r=i),{width:t,height:r,$:o}}function ft(e){return fe(e)?e:e.contextElement}function un(e){const n=ft(e);if(!Oe(n))return Ne(1);const t=n.getBoundingClientRect(),{width:r,height:a,$:s}=ri(n);let i=(s?Qn(t.width):t.width)/r,o=(s?Qn(t.height):t.height)/a;return(!i||!Number.isFinite(i))&&(i=1),(!o||!Number.isFinite(o))&&(o=1),{x:i,y:o}}const bk=Ne(0);function ti(e){const n=ke(e);return!Et()||!n.visualViewport?bk:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function hk(e,n,t){return n===void 0&&(n=!1),!t||n&&t!==ke(e)?!1:n}function nn(e,n,t,r){n===void 0&&(n=!1),t===void 0&&(t=!1);const a=e.getBoundingClientRect(),s=ft(e);let i=Ne(1);n&&(r?fe(r)&&(i=un(r)):i=un(e));const o=hk(s,t,r)?ti(s):Ne(0);let l=(a.left+o.x)/i.x,d=(a.top+o.y)/i.y,u=a.width/i.x,g=a.height/i.y;if(s){const k=ke(s),E=r&&fe(r)?ke(r):r;let f=k,v=Qr(f);for(;v&&r&&E!==f;){const h=un(v),y=v.getBoundingClientRect(),T=ye(v),c=y.left+(v.clientLeft+parseFloat(T.paddingLeft))*h.x,_=y.top+(v.clientTop+parseFloat(T.paddingTop))*h.y;l*=h.x,d*=h.y,u*=h.x,g*=h.y,l+=c,d+=_,f=ke(v),v=Qr(f)}}return nr({width:u,height:g,x:l,y:d})}function yt(e,n){const t=fr(e).scrollLeft;return n?n.left+t:nn(Le(e)).left+t}function ai(e,n,t){t===void 0&&(t=!1);const r=e.getBoundingClientRect(),a=r.left+n.scrollLeft-(t?0:yt(e,r)),s=r.top+n.scrollTop;return{x:a,y:s}}function Sk(e){let{elements:n,rect:t,offsetParent:r,strategy:a}=e;const s=a==="fixed",i=Le(r),o=n?Er(n.floating):!1;if(r===i||o&&s)return t;let l={scrollLeft:0,scrollTop:0},d=Ne(1);const u=Ne(0),g=Oe(r);if((g||!g&&!s)&&((Rn(r)!=="body"||Bn(i))&&(l=fr(r)),Oe(r))){const E=nn(r);d=un(r),u.x=E.x+r.clientLeft,u.y=E.y+r.clientTop}const k=i&&!g&&!s?ai(i,l,!0):Ne(0);return{width:t.width*d.x,height:t.height*d.y,x:t.x*d.x-l.scrollLeft*d.x+u.x+k.x,y:t.y*d.y-l.scrollTop*d.y+u.y+k.y}}function _k(e){return Array.from(e.getClientRects())}function Nk(e){const n=Le(e),t=fr(e),r=e.ownerDocument.body,a=Ze(n.scrollWidth,n.clientWidth,r.scrollWidth,r.clientWidth),s=Ze(n.scrollHeight,n.clientHeight,r.scrollHeight,r.clientHeight);let i=-t.scrollLeft+yt(e);const o=-t.scrollTop;return ye(r).direction==="rtl"&&(i+=Ze(n.clientWidth,r.clientWidth)-a),{width:a,height:s,x:i,y:o}}function Ik(e,n){const t=ke(e),r=Le(e),a=t.visualViewport;let s=r.clientWidth,i=r.clientHeight,o=0,l=0;if(a){s=a.width,i=a.height;const d=Et();(!d||d&&n==="fixed")&&(o=a.offsetLeft,l=a.offsetTop)}return{width:s,height:i,x:o,y:l}}function Ok(e,n){const t=nn(e,!0,n==="fixed"),r=t.top+e.clientTop,a=t.left+e.clientLeft,s=Oe(e)?un(e):Ne(1),i=e.clientWidth*s.x,o=e.clientHeight*s.y,l=a*s.x,d=r*s.y;return{width:i,height:o,x:l,y:d}}function la(e,n,t){let r;if(n==="viewport")r=Ik(e,t);else if(n==="document")r=Nk(Le(e));else if(fe(n))r=Ok(n,t);else{const a=ti(e);r={x:n.x-a.x,y:n.y-a.y,width:n.width,height:n.height}}return nr(r)}function si(e,n){const t=Ge(e);return t===n||!fe(t)||fn(t)?!1:ye(t).position==="fixed"||si(t,n)}function Kk(e,n){const t=n.get(e);if(t)return t;let r=Ve(e,[],!1).filter(o=>fe(o)&&Rn(o)!=="body"),a=null;const s=ye(e).position==="fixed";let i=s?Ge(e):e;for(;fe(i)&&!fn(i);){const o=ye(i),l=vt(i);!l&&o.position==="fixed"&&(a=null),(s?!l&&!a:!l&&o.position==="static"&&!!a&&["absolute","fixed"].includes(a.position)||Bn(i)&&!l&&si(e,i))?r=r.filter(u=>u!==i):a=o,i=Ge(i)}return n.set(e,r),r}function Dk(e){let{element:n,boundary:t,rootBoundary:r,strategy:a}=e;const i=[...t==="clippingAncestors"?Er(n)?[]:Kk(n,this._c):[].concat(t),r],o=i[0],l=i.reduce((d,u)=>{const g=la(n,u,a);return d.top=Ze(g.top,d.top),d.right=vn(g.right,d.right),d.bottom=vn(g.bottom,d.bottom),d.left=Ze(g.left,d.left),d},la(n,o,a));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Lk(e){const{width:n,height:t}=ri(e);return{width:n,height:t}}function Pk(e,n,t){const r=Oe(n),a=Le(n),s=t==="fixed",i=nn(e,!0,s,n);let o={scrollLeft:0,scrollTop:0};const l=Ne(0);if(r||!r&&!s)if((Rn(n)!=="body"||Bn(a))&&(o=fr(n)),r){const k=nn(n,!0,s,n);l.x=k.x+n.clientLeft,l.y=k.y+n.clientTop}else a&&(l.x=yt(a));const d=a&&!r&&!s?ai(a,o):Ne(0),u=i.left+o.scrollLeft-l.x-d.x,g=i.top+o.scrollTop-l.y-d.y;return{x:u,y:g,width:i.width,height:i.height}}function Nr(e){return ye(e).position==="static"}function da(e,n){if(!Oe(e)||ye(e).position==="fixed")return null;if(n)return n(e);let t=e.offsetParent;return Le(e)===t&&(t=t.ownerDocument.body),t}function ii(e,n){const t=ke(e);if(Er(e))return t;if(!Oe(e)){let a=Ge(e);for(;a&&!fn(a);){if(fe(a)&&!Nr(a))return a;a=Ge(a)}return t}let r=da(e,n);for(;r&&ck(r)&&Nr(r);)r=da(r,n);return r&&fn(r)&&Nr(r)&&!vt(r)?t:r||Ak(e)||t}const Fk=async function(e){const n=this.getOffsetParent||ii,t=this.getDimensions,r=await t(e.floating);return{reference:Pk(e.reference,await n(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function qk(e){return ye(e).direction==="rtl"}const jk={convertOffsetParentRelativeRectToViewportRelativeRect:Sk,getDocumentElement:Le,getClippingRect:Dk,getOffsetParent:ii,getElementRects:Fk,getClientRects:_k,getDimensions:Lk,getScale:un,isElement:fe,isRTL:qk};function wk(e,n){let t=null,r;const a=Le(e);function s(){var o;clearTimeout(r),(o=t)==null||o.disconnect(),t=null}function i(o,l){o===void 0&&(o=!1),l===void 0&&(l=1),s();const{left:d,top:u,width:g,height:k}=e.getBoundingClientRect();if(o||n(),!g||!k)return;const E=xn(u),f=xn(a.clientWidth-(d+g)),v=xn(a.clientHeight-(u+k)),h=xn(d),T={rootMargin:-E+"px "+-f+"px "+-v+"px "+-h+"px",threshold:Ze(0,vn(1,l))||1};let c=!0;function _(p){const K=p[0].intersectionRatio;if(K!==l){if(!c)return i();K?i(!1,K):r=setTimeout(()=>{i(!1,1e-7)},1e3)}c=!1}try{t=new IntersectionObserver(_,{...T,root:a.ownerDocument})}catch{t=new IntersectionObserver(_,T)}t.observe(e)}return i(!0),s}function oi(e,n,t,r){r===void 0&&(r={});const{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,d=ft(e),u=a||s?[...d?Ve(d):[],...Ve(n)]:[];u.forEach(y=>{a&&y.addEventListener("scroll",t,{passive:!0}),s&&y.addEventListener("resize",t)});const g=d&&o?wk(d,t):null;let k=-1,E=null;i&&(E=new ResizeObserver(y=>{let[T]=y;T&&T.target===d&&E&&(E.unobserve(n),cancelAnimationFrame(k),k=requestAnimationFrame(()=>{var c;(c=E)==null||c.observe(n)})),t()}),d&&!l&&E.observe(d),E.observe(n));let f,v=l?nn(e):null;l&&h();function h(){const y=nn(e);v&&(y.x!==v.x||y.y!==v.y||y.width!==v.width||y.height!==v.height)&&t(),v=y,f=requestAnimationFrame(h)}return t(),()=>{var y;u.forEach(T=>{a&&T.removeEventListener("scroll",t),s&&T.removeEventListener("resize",t)}),g==null||g(),(y=E)==null||y.disconnect(),E=null,l&&cancelAnimationFrame(f)}}const Mk=pk,Bk=Rk,Vk=yk,ua=fk,Gk=(e,n,t)=>{const r=new Map,a={platform:jk,...t},s={...a.platform,_c:r};return Ek(e,n,{...a,platform:s})};var zn=typeof document<"u"?m.useLayoutEffect:m.useEffect;function rr(e,n){if(e===n)return!0;if(typeof e!=typeof n)return!1;if(typeof e=="function"&&e.toString()===n.toString())return!0;let t,r,a;if(e&&n&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==n.length)return!1;for(r=t;r--!==0;)if(!rr(e[r],n[r]))return!1;return!0}if(a=Object.keys(e),t=a.length,t!==Object.keys(n).length)return!1;for(r=t;r--!==0;)if(!{}.hasOwnProperty.call(n,a[r]))return!1;for(r=t;r--!==0;){const s=a[r];if(!(s==="_owner"&&e.$$typeof)&&!rr(e[s],n[s]))return!1}return!0}return e!==e&&n!==n}function li(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ga(e,n){const t=li(e);return Math.round(n*t)/t}function Ir(e){const n=m.useRef(e);return zn(()=>{n.current=e}),n}function Hk(e){e===void 0&&(e={});const{placement:n="bottom",strategy:t="absolute",middleware:r=[],platform:a,elements:{reference:s,floating:i}={},transform:o=!0,whileElementsMounted:l,open:d}=e,[u,g]=m.useState({x:0,y:0,strategy:t,placement:n,middlewareData:{},isPositioned:!1}),[k,E]=m.useState(r);rr(k,r)||E(r);const[f,v]=m.useState(null),[h,y]=m.useState(null),T=m.useCallback(L=>{L!==K.current&&(K.current=L,v(L))},[]),c=m.useCallback(L=>{L!==I.current&&(I.current=L,y(L))},[]),_=s||f,p=i||h,K=m.useRef(null),I=m.useRef(null),S=m.useRef(u),F=l!=null,P=Ir(l),A=Ir(a),O=Ir(d),N=m.useCallback(()=>{if(!K.current||!I.current)return;const L={placement:n,strategy:t,middleware:k};A.current&&(L.platform=A.current),Gk(K.current,I.current,L).then(M=>{const U={...M,isPositioned:O.current!==!1};R.current&&!rr(S.current,U)&&(S.current=U,to.flushSync(()=>{g(U)}))})},[k,n,t,A,O]);zn(()=>{d===!1&&S.current.isPositioned&&(S.current.isPositioned=!1,g(L=>({...L,isPositioned:!1})))},[d]);const R=m.useRef(!1);zn(()=>(R.current=!0,()=>{R.current=!1}),[]),zn(()=>{if(_&&(K.current=_),p&&(I.current=p),_&&p){if(P.current)return P.current(_,p,N);N()}},[_,p,N,P,F]);const j=m.useMemo(()=>({reference:K,floating:I,setReference:T,setFloating:c}),[T,c]),q=m.useMemo(()=>({reference:_,floating:p}),[_,p]),H=m.useMemo(()=>{const L={position:t,left:0,top:0};if(!q.floating)return L;const M=ga(q.floating,u.x),U=ga(q.floating,u.y);return o?{...L,transform:"translate("+M+"px, "+U+"px)",...li(q.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:M,top:U}},[t,o,q.floating,u.x,u.y]);return m.useMemo(()=>({...u,update:N,refs:j,elements:q,floatingStyles:H}),[u,N,j,q,H])}const Uk=e=>{function n(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:r,padding:a}=typeof e=="function"?e(t):e;return r&&n(r)?r.current!=null?ua({element:r.current,padding:a}).fn(t):{}:r?ua({element:r,padding:a}).fn(t):{}}}},di=(e,n)=>({...Mk(e),options:[e,n]}),ui=(e,n)=>({...Bk(e),options:[e,n]}),gi=(e,n)=>({...Vk(e),options:[e,n]}),ki=(e,n)=>({...Uk(e),options:[e,n]}),ka=/(\w+)/g;function xk(e,n){const t=Array.isArray(e)?e:Yk(e);for(const r of n){if(!r)continue;let a=r;for(let s=0;s<t.length;s++){const i=a[t[s]];i!==void 0&&(a=i)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function Yk(e){const n=[];let t=ka.exec(e);for(;t;){const[,r,a]=t;n.push(r||a),t=ka.exec(e)}return n}const Ck=/{[^}]*}/g;function rn(e,...n){const t=zs(),r=t.translations||[],a=[...n,...Array.isArray(r)?r.map(i=>i[e]):[r[e]],t.locale[e]];return(i,o)=>{const l=xk(i,a);return o?l.replace(Ck,d=>{const u=d.substring(1,d.length-1);if(o[u]===void 0){const g=JSON.stringify(o);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${u}'. The following replacements were passed: '${g}'`)}return o[u]}):l}}function $k(){const e=zs(),n=e.translations||[],t=Array.isArray(n)?n.map(r=>r.global):[n.global];t.push(e.locale.global);for(const r of t)if(r!=null&&r.dateLocale)return r.dateLocale;throw new Error("dateLocale not found.")}var Jk=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Wk=m.forwardRef((e,n)=>{var{className:t,size:r="medium",title:a,transparent:s=!1,variant:i="neutral",id:o}=e,l=Jk(e,["className","size","title","transparent","variant","id"]);const d=Au(),u=rn("Loader");return D.createElement("svg",Object.assign({"aria-labelledby":o??`loader-${d}`,ref:n,className:Z("navds-loader",t,`navds-loader--${r}`,`navds-loader--${i}`,{"navds-loader--transparent":s}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},ln(l,["children"])),D.createElement("title",{id:o??`loader-${d}`},a||u("title")),D.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),D.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var zk=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Xe=m.forwardRef((e,n)=>{var{as:t="button",variant:r="primary",className:a,children:s,size:i="medium",loading:o=!1,disabled:l,icon:d,iconPosition:u="left",onKeyUp:g}=e,k=zk(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp"]);const E=l||o?ln(k,["href"]):k,f=v=>{v.key===" "&&!l&&!o&&v.currentTarget.click()};return D.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},E,{ref:n,onKeyUp:Js(g,f),className:Z(a,"navds-button",`navds-button--${r}`,`navds-button--${i}`,{"navds-button--loading":o,"navds-button--icon-only":!!d&&!s,"navds-button--disabled":l??o}),disabled:l??o?!0:void 0}),d&&u==="left"&&D.createElement("span",{className:"navds-button__icon"},d),o&&D.createElement(Wk,{size:i}),s&&D.createElement(_n,{as:"span",size:i==="medium"?"medium":"small"},s),d&&u==="right"&&D.createElement("span",{className:"navds-button__icon"},d))});function Ke(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}function Tt(e,n){const t=Y(e);return isNaN(n)?Ke(e,NaN):(n&&t.setDate(t.getDate()+n),t)}function In(e,n){const t=Y(e);if(isNaN(n))return Ke(e,NaN);if(!n)return t;const r=t.getDate(),a=Ke(e,t.getTime());a.setMonth(t.getMonth()+n+1,0);const s=a.getDate();return r>=s?a:(t.setFullYear(a.getFullYear(),a.getMonth(),r),t)}const mi=6048e5,Xk=864e5;function tr(e){return Nn(e,{weekStartsOn:1})}function vi(e){const n=Y(e),t=n.getFullYear(),r=Ke(e,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const a=tr(r),s=Ke(e,0);s.setFullYear(t,0,4),s.setHours(0,0,0,0);const i=tr(s);return n.getTime()>=a.getTime()?t+1:n.getTime()>=i.getTime()?t:t-1}function He(e){const n=Y(e);return n.setHours(0,0,0,0),n}function ma(e){const n=Y(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function Ei(e,n){const t=He(e),r=He(n),a=+t-ma(t),s=+r-ma(r);return Math.round((a-s)/Xk)}function Zk(e){const n=vi(e),t=Ke(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),tr(t)}function ar(e,n){return In(e,n*12)}function hn(e,n){const t=Y(e),r=Y(n),a=t.getTime()-r.getTime();return a<0?-1:a>0?1:a}function sr(e,n){const t=He(e),r=He(n);return+t==+r}function Qk(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function em(e){if(!Qk(e)&&typeof e!="number")return!1;const n=Y(e);return!isNaN(Number(n))}function nm(e,n){const t=Y(e),r=Y(n),a=t.getFullYear()-r.getFullYear(),s=t.getMonth()-r.getMonth();return a*12+s}function rm(e,n){const t=Y(e),r=Y(n);return t.getFullYear()-r.getFullYear()}function fi(e,n){const t=Y(e),r=Y(n),a=va(t,r),s=Math.abs(Ei(t,r));t.setDate(t.getDate()-a*s);const i=+(va(t,r)===-a),o=a*(s-i);return o===0?0:o}function va(e,n){const t=e.getFullYear()-n.getFullYear()||e.getMonth()-n.getMonth()||e.getDate()-n.getDate()||e.getHours()-n.getHours()||e.getMinutes()-n.getMinutes()||e.getSeconds()-n.getSeconds()||e.getMilliseconds()-n.getMilliseconds();return t<0?-1:t>0?1:t}function Ea(e,n){return+Y(e)-+Y(n)}function ir(e){const n=Y(e);return n.setHours(23,59,59,999),n}function yi(e){const n=Y(e),t=n.getMonth();return n.setFullYear(n.getFullYear(),t+1,0),n.setHours(23,59,59,999),n}function tm(e){const n=Y(e);return+ir(n)==+yi(n)}function am(e,n){const t=Y(e),r=Y(n),a=hn(t,r),s=Math.abs(nm(t,r));let i;if(s<1)i=0;else{t.getMonth()===1&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-a*s);let o=hn(t,r)===-a;tm(Y(e))&&s===1&&hn(e,r)===1&&(o=!1),i=a*(s-Number(o))}return i===0?0:i}function sm(e,n){const t=Y(e),r=Y(n),a=hn(t,r),s=Math.abs(rm(t,r));t.setFullYear(1584),r.setFullYear(1584);const i=hn(t,r)===-a,o=a*(s-+i);return o===0?0:o}function im(e){const n=Y(e);return n.setDate(1),n.setHours(0,0,0,0),n}function om(e){const n=Y(e),t=n.getFullYear();return n.setFullYear(t+1,0,0),n.setHours(23,59,59,999),n}function Ti(e){const n=Y(e),t=Ke(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}function lm(e){const n=Y(e);return Ei(n,Ti(n))+1}function dm(e){const n=Y(e),t=+tr(n)-+Zk(n);return Math.round(t/mi)+1}function pi(e,n){var u,g,k,E;const t=Y(e),r=t.getFullYear(),a=mr(),s=(n==null?void 0:n.firstWeekContainsDate)??((g=(u=n==null?void 0:n.locale)==null?void 0:u.options)==null?void 0:g.firstWeekContainsDate)??a.firstWeekContainsDate??((E=(k=a.locale)==null?void 0:k.options)==null?void 0:E.firstWeekContainsDate)??1,i=Ke(e,0);i.setFullYear(r+1,0,s),i.setHours(0,0,0,0);const o=Nn(i,n),l=Ke(e,0);l.setFullYear(r,0,s),l.setHours(0,0,0,0);const d=Nn(l,n);return t.getTime()>=o.getTime()?r+1:t.getTime()>=d.getTime()?r:r-1}function um(e,n){var o,l,d,u;const t=mr(),r=(n==null?void 0:n.firstWeekContainsDate)??((l=(o=n==null?void 0:n.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((u=(d=t.locale)==null?void 0:d.options)==null?void 0:u.firstWeekContainsDate)??1,a=pi(e,n),s=Ke(e,0);return s.setFullYear(a,0,r),s.setHours(0,0,0,0),Nn(s,n)}function gm(e,n){const t=Y(e),r=+Nn(t,n)-+um(t,n);return Math.round(r/mi)+1}function W(e,n){const t=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return t+r}const qe={y(e,n){const t=e.getFullYear(),r=t>0?t:1-t;return W(n==="yy"?r%100:r,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):W(t+1,2)},d(e,n){return W(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return W(e.getHours()%12||12,n.length)},H(e,n){return W(e.getHours(),n.length)},m(e,n){return W(e.getMinutes(),n.length)},s(e,n){return W(e.getSeconds(),n.length)},S(e,n){const t=n.length,r=e.getMilliseconds(),a=Math.trunc(r*Math.pow(10,t-3));return W(a,n.length)}},an={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},fa={G:function(e,n,t){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return t.ordinalNumber(a,{unit:"year"})}return qe.y(e,n)},Y:function(e,n,t,r){const a=pi(e,r),s=a>0?a:1-a;if(n==="YY"){const i=s%100;return W(i,2)}return n==="Yo"?t.ordinalNumber(s,{unit:"year"}):W(s,n.length)},R:function(e,n){const t=vi(e);return W(t,n.length)},u:function(e,n){const t=e.getFullYear();return W(t,n.length)},Q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return W(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return W(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,t){const r=e.getMonth();switch(n){case"M":case"MM":return qe.M(e,n);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,t){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return W(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,t,r){const a=gm(e,r);return n==="wo"?t.ordinalNumber(a,{unit:"week"}):W(a,n.length)},I:function(e,n,t){const r=dm(e);return n==="Io"?t.ordinalNumber(r,{unit:"week"}):W(r,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):qe.d(e,n)},D:function(e,n,t){const r=lm(e);return n==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):W(r,n.length)},E:function(e,n,t){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,t,r){const a=e.getDay(),s=(a-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(s);case"ee":return W(s,2);case"eo":return t.ordinalNumber(s,{unit:"day"});case"eee":return t.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(a,{width:"short",context:"formatting"});case"eeee":default:return t.day(a,{width:"wide",context:"formatting"})}},c:function(e,n,t,r){const a=e.getDay(),s=(a-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(s);case"cc":return W(s,n.length);case"co":return t.ordinalNumber(s,{unit:"day"});case"ccc":return t.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(a,{width:"narrow",context:"standalone"});case"cccccc":return t.day(a,{width:"short",context:"standalone"});case"cccc":default:return t.day(a,{width:"wide",context:"standalone"})}},i:function(e,n,t){const r=e.getDay(),a=r===0?7:r;switch(n){case"i":return String(a);case"ii":return W(a,n.length);case"io":return t.ordinalNumber(a,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,t){const a=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,n,t){const r=e.getHours();let a;switch(r===12?a=an.noon:r===0?a=an.midnight:a=r/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,n,t){const r=e.getHours();let a;switch(r>=17?a=an.evening:r>=12?a=an.afternoon:r>=4?a=an.morning:a=an.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return qe.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):qe.H(e,n)},K:function(e,n,t){const r=e.getHours()%12;return n==="Ko"?t.ordinalNumber(r,{unit:"hour"}):W(r,n.length)},k:function(e,n,t){let r=e.getHours();return r===0&&(r=24),n==="ko"?t.ordinalNumber(r,{unit:"hour"}):W(r,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):qe.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):qe.s(e,n)},S:function(e,n){return qe.S(e,n)},X:function(e,n,t){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return Ta(r);case"XXXX":case"XX":return Je(r);case"XXXXX":case"XXX":default:return Je(r,":")}},x:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"x":return Ta(r);case"xxxx":case"xx":return Je(r);case"xxxxx":case"xxx":default:return Je(r,":")}},O:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+ya(r,":");case"OOOO":default:return"GMT"+Je(r,":")}},z:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+ya(r,":");case"zzzz":default:return"GMT"+Je(r,":")}},t:function(e,n,t){const r=Math.trunc(e.getTime()/1e3);return W(r,n.length)},T:function(e,n,t){const r=e.getTime();return W(r,n.length)}};function ya(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),s=r%60;return s===0?t+String(a):t+String(a)+n+W(s,2)}function Ta(e,n){return e%60===0?(e>0?"-":"+")+W(Math.abs(e)/60,2):Je(e,n)}function Je(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),a=W(Math.trunc(r/60),2),s=W(r%60,2);return t+a+n+s}const pa=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},Ri=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},km=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],r=t[1],a=t[2];if(!a)return pa(e,n);let s;switch(r){case"P":s=n.dateTime({width:"short"});break;case"PP":s=n.dateTime({width:"medium"});break;case"PPP":s=n.dateTime({width:"long"});break;case"PPPP":default:s=n.dateTime({width:"full"});break}return s.replace("{{date}}",pa(r,n)).replace("{{time}}",Ri(a,n))},mm={p:Ri,P:km},vm=/^D+$/,Em=/^Y+$/,fm=["D","DD","YY","YYYY"];function ym(e){return vm.test(e)}function Tm(e){return Em.test(e)}function pm(e,n,t){const r=Rm(e,n,t);if(console.warn(r),fm.includes(e))throw new RangeError(r)}function Rm(e,n,t){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const cm=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Am=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,bm=/^'([^]*?)'?$/,hm=/''/g,Sm=/[a-zA-Z]/;function De(e,n,t){var u,g,k,E,f,v,h,y;const r=mr(),a=(t==null?void 0:t.locale)??r.locale??Kg,s=(t==null?void 0:t.firstWeekContainsDate)??((g=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:g.firstWeekContainsDate)??r.firstWeekContainsDate??((E=(k=r.locale)==null?void 0:k.options)==null?void 0:E.firstWeekContainsDate)??1,i=(t==null?void 0:t.weekStartsOn)??((v=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:v.weekStartsOn)??r.weekStartsOn??((y=(h=r.locale)==null?void 0:h.options)==null?void 0:y.weekStartsOn)??0,o=Y(e);if(!em(o))throw new RangeError("Invalid time value");let l=n.match(Am).map(T=>{const c=T[0];if(c==="p"||c==="P"){const _=mm[c];return _(T,a.formatLong)}return T}).join("").match(cm).map(T=>{if(T==="''")return{isToken:!1,value:"'"};const c=T[0];if(c==="'")return{isToken:!1,value:_m(T)};if(fa[c])return{isToken:!0,value:T};if(c.match(Sm))throw new RangeError("Format string contains an unescaped latin alphabet character `"+c+"`");return{isToken:!1,value:T}});a.localize.preprocessor&&(l=a.localize.preprocessor(o,l));const d={firstWeekContainsDate:s,weekStartsOn:i,locale:a};return l.map(T=>{if(!T.isToken)return T.value;const c=T.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&Tm(c)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&ym(c))&&pm(c,n,String(e));const _=fa[c[0]];return _(o,c,a.localize,d)}).join("")}function _m(e){const n=e.match(bm);return n?n[1].replace(hm,"'"):e}function Nm(e,n){const t=Y(e),r=Y(n);return t.getTime()>r.getTime()}function ci(e,n){return Tt(e,-n)}function Im(e,n){return In(e,-n)}function Om(e,n){return ar(e,-n)}function Ai(e){return bi(e)?(e.nodeName||"").toLowerCase():"#document"}function Vn(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function Km(e){var n;return(n=(bi(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function bi(e){return e instanceof Node||e instanceof Vn(e).Node}function ue(e){return e instanceof Element||e instanceof Vn(e).Element}function On(e){return e instanceof HTMLElement||e instanceof Vn(e).HTMLElement}function et(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Vn(e).ShadowRoot}function Dm(e){return["html","body","#document"].includes(Ai(e))}function Lm(e){return Vn(e).getComputedStyle(e)}function Pm(e){if(Ai(e)==="html")return e;const n=e.assignedSlot||e.parentNode||et(e)&&e.host||Km(e);return et(n)?n.host:n}function We(e){let n=e.activeElement;for(;((t=n)==null||(r=t.shadowRoot)==null?void 0:r.activeElement)!=null;){var t,r;n=n.shadowRoot.activeElement}return n}function ne(e,n){if(!e||!n)return!1;const t=n.getRootNode&&n.getRootNode();if(e.contains(n))return!0;if(t&&et(t)){let r=n;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function Fm(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function qm(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(n=>{let{brand:t,version:r}=n;return t+"/"+r}).join(" "):navigator.userAgent}function jm(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const n=/Android/i;return(n.test(Fm())||n.test(qm()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function wm(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function Mm(){return/apple/i.test(navigator.vendor)}function hi(e,n){const t=["mouse","pen"];return t.push("",void 0),t.includes(e)}function Bm(e){return"nativeEvent"in e}function Vm(e){return e.matches("html,body")}function oe(e){return(e==null?void 0:e.ownerDocument)||document}function Xn(e,n){if(n==null)return!1;if("composedPath"in e)return e.composedPath().includes(n);const t=e;return t.target!=null&&n.contains(t.target)}function pt(e){return"composedPath"in e?e.composedPath()[0]:e.target}const Gm="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Hm(e){return On(e)&&e.matches(Gm)}function Or(e){e.preventDefault(),e.stopPropagation()}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Um=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],nt=Um.join(","),Si=typeof Element>"u",Kn=Si?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,or=!Si&&Element.prototype.getRootNode?function(e){var n;return e==null||(n=e.getRootNode)===null||n===void 0?void 0:n.call(e)}:function(e){return e==null?void 0:e.ownerDocument},lr=function e(n,t){var r;t===void 0&&(t=!0);var a=n==null||(r=n.getAttribute)===null||r===void 0?void 0:r.call(n,"inert"),s=a===""||a==="true",i=s||t&&n&&e(n.parentNode);return i},xm=function(n){var t,r=n==null||(t=n.getAttribute)===null||t===void 0?void 0:t.call(n,"contenteditable");return r===""||r==="true"},Ym=function(n,t,r){if(lr(n))return[];var a=Array.prototype.slice.apply(n.querySelectorAll(nt));return t&&Kn.call(n,nt)&&a.unshift(n),a=a.filter(r),a},Cm=function e(n,t,r){for(var a=[],s=Array.from(n);s.length;){var i=s.shift();if(!lr(i,!1))if(i.tagName==="SLOT"){var o=i.assignedElements(),l=o.length?o:i.children,d=e(l,!0,r);r.flatten?a.push.apply(a,d):a.push({scopeParent:i,candidates:d})}else{var u=Kn.call(i,nt);u&&r.filter(i)&&(t||!n.includes(i))&&a.push(i);var g=i.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(i),k=!lr(g,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(i));if(g&&k){var E=e(g===!0?i.children:g.children,!0,r);r.flatten?a.push.apply(a,E):a.push({scopeParent:i,candidates:E})}else s.unshift.apply(s,i.children)}}return a},_i=function(n){return!isNaN(parseInt(n.getAttribute("tabindex"),10))},Ni=function(n){if(!n)throw new Error("No node provided");return n.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(n.tagName)||xm(n))&&!_i(n)?0:n.tabIndex},$m=function(n,t){var r=Ni(n);return r<0&&t&&!_i(n)?0:r},Jm=function(n,t){return n.tabIndex===t.tabIndex?n.documentOrder-t.documentOrder:n.tabIndex-t.tabIndex},Ii=function(n){return n.tagName==="INPUT"},Wm=function(n){return Ii(n)&&n.type==="hidden"},zm=function(n){var t=n.tagName==="DETAILS"&&Array.prototype.slice.apply(n.children).some(function(r){return r.tagName==="SUMMARY"});return t},Xm=function(n,t){for(var r=0;r<n.length;r++)if(n[r].checked&&n[r].form===t)return n[r]},Zm=function(n){if(!n.name)return!0;var t=n.form||or(n),r=function(o){return t.querySelectorAll('input[type="radio"][name="'+o+'"]')},a;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")a=r(window.CSS.escape(n.name));else try{a=r(n.name)}catch(i){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",i.message),!1}var s=Xm(a,n.form);return!s||s===n},Qm=function(n){return Ii(n)&&n.type==="radio"},ev=function(n){return Qm(n)&&!Zm(n)},nv=function(n){var t,r=n&&or(n),a=(t=r)===null||t===void 0?void 0:t.host,s=!1;if(r&&r!==n){var i,o,l;for(s=!!((i=a)!==null&&i!==void 0&&(o=i.ownerDocument)!==null&&o!==void 0&&o.contains(a)||n!=null&&(l=n.ownerDocument)!==null&&l!==void 0&&l.contains(n));!s&&a;){var d,u,g;r=or(a),a=(d=r)===null||d===void 0?void 0:d.host,s=!!((u=a)!==null&&u!==void 0&&(g=u.ownerDocument)!==null&&g!==void 0&&g.contains(a))}}return s},Ra=function(n){var t=n.getBoundingClientRect(),r=t.width,a=t.height;return r===0&&a===0},rv=function(n,t){var r=t.displayCheck,a=t.getShadowRoot;if(getComputedStyle(n).visibility==="hidden")return!0;var s=Kn.call(n,"details>summary:first-of-type"),i=s?n.parentElement:n;if(Kn.call(i,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof a=="function"){for(var o=n;n;){var l=n.parentElement,d=or(n);if(l&&!l.shadowRoot&&a(l)===!0)return Ra(n);n.assignedSlot?n=n.assignedSlot:!l&&d!==n.ownerDocument?n=d.host:n=l}n=o}if(nv(n))return!n.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return Ra(n);return!1},tv=function(n){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(n.tagName))for(var t=n.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var r=0;r<t.children.length;r++){var a=t.children.item(r);if(a.tagName==="LEGEND")return Kn.call(t,"fieldset[disabled] *")?!0:!a.contains(n)}return!0}t=t.parentElement}return!1},av=function(n,t){return!(t.disabled||lr(t)||Wm(t)||rv(t,n)||zm(t)||tv(t))},ca=function(n,t){return!(ev(t)||Ni(t)<0||!av(n,t))},sv=function(n){var t=parseInt(n.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},iv=function e(n){var t=[],r=[];return n.forEach(function(a,s){var i=!!a.scopeParent,o=i?a.scopeParent:a,l=$m(o,i),d=i?e(a.candidates):o;l===0?i?t.push.apply(t,d):t.push(o):r.push({documentOrder:s,tabIndex:l,item:a,isScope:i,content:d})}),r.sort(Jm).reduce(function(a,s){return s.isScope?a.push.apply(a,s.content):a.push(s.content),a},[]).concat(t)},Oi=function(n,t){t=t||{};var r;return t.getShadowRoot?r=Cm([n],t.includeContainer,{filter:ca.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:sv}):r=Ym(n,t.includeContainer,ca.bind(null,t)),iv(r)};let Aa=0;function $e(e,n){n===void 0&&(n={});const{preventScroll:t=!1,cancelPrevious:r=!0,sync:a=!1}=n;r&&cancelAnimationFrame(Aa);const s=()=>e==null?void 0:e.focus({preventScroll:t});a?s():Aa=requestAnimationFrame(s)}var Se=typeof document<"u"?m.useLayoutEffect:m.useEffect;function dr(){return dr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},dr.apply(this,arguments)}let Kr=!1,ov=0;const ba=()=>"floating-ui-"+ov++;function lv(){const[e,n]=m.useState(()=>Kr?ba():void 0);return Se(()=>{e==null&&n(ba())},[]),m.useEffect(()=>{Kr||(Kr=!0)},[]),e}const dv=ds.useId,Ki=dv||lv;function uv(){const e=new Map;return{emit(n,t){var r;(r=e.get(n))==null||r.forEach(a=>a(t))},on(n,t){e.set(n,[...e.get(n)||[],t])},off(n,t){var r;e.set(n,((r=e.get(n))==null?void 0:r.filter(a=>a!==t))||[])}}}const gv=m.createContext(null),kv=m.createContext(null),Di=()=>{var e;return((e=m.useContext(gv))==null?void 0:e.id)||null},yr=()=>m.useContext(kv);function yn(e){return"data-floating-ui-"+e}function Sn(e){const n=m.useRef(e);return Se(()=>{n.current=e}),n}const ha=yn("safe-polygon");function Dr(e,n,t){return t&&!hi(t)?0:typeof e=="number"?e:e==null?void 0:e[n]}function Li(e,n){n===void 0&&(n={});const{open:t,onOpenChange:r,dataRef:a,events:s,elements:{domReference:i,floating:o},refs:l}=e,{enabled:d=!0,delay:u=0,handleClose:g=null,mouseOnly:k=!1,restMs:E=0,move:f=!0}=n,v=yr(),h=Di(),y=Sn(g),T=Sn(u),c=m.useRef(),_=m.useRef(),p=m.useRef(),K=m.useRef(),I=m.useRef(!0),S=m.useRef(!1),F=m.useRef(()=>{}),P=m.useCallback(()=>{var R;const j=(R=a.current.openEvent)==null?void 0:R.type;return(j==null?void 0:j.includes("mouse"))&&j!=="mousedown"},[a]);m.useEffect(()=>{if(!d)return;function R(){clearTimeout(_.current),clearTimeout(K.current),I.current=!0}return s.on("dismiss",R),()=>{s.off("dismiss",R)}},[d,s]),m.useEffect(()=>{if(!d||!y.current||!t)return;function R(q){P()&&r(!1,q)}const j=oe(o).documentElement;return j.addEventListener("mouseleave",R),()=>{j.removeEventListener("mouseleave",R)}},[o,t,r,d,y,a,P]);const A=m.useCallback(function(R,j){j===void 0&&(j=!0);const q=Dr(T.current,"close",c.current);q&&!p.current?(clearTimeout(_.current),_.current=setTimeout(()=>r(!1,R),q)):j&&(clearTimeout(_.current),r(!1,R))},[T,r]),O=m.useCallback(()=>{F.current(),p.current=void 0},[]),N=m.useCallback(()=>{if(S.current){const R=oe(l.floating.current).body;R.style.pointerEvents="",R.removeAttribute(ha),S.current=!1}},[l]);return m.useEffect(()=>{if(!d)return;function R(){return a.current.openEvent?["click","mousedown"].includes(a.current.openEvent.type):!1}function j(L){if(clearTimeout(_.current),I.current=!1,k&&!hi(c.current)||E>0&&Dr(T.current,"open")===0)return;const M=Dr(T.current,"open",c.current);M?_.current=setTimeout(()=>{r(!0,L)},M):r(!0,L)}function q(L){if(R())return;F.current();const M=oe(o);if(clearTimeout(K.current),y.current){t||clearTimeout(_.current),p.current=y.current({...e,tree:v,x:L.clientX,y:L.clientY,onClose(){N(),O(),A(L)}});const V=p.current;M.addEventListener("mousemove",V),F.current=()=>{M.removeEventListener("mousemove",V)};return}(c.current==="touch"?!ne(o,L.relatedTarget):!0)&&A(L)}function H(L){R()||y.current==null||y.current({...e,tree:v,x:L.clientX,y:L.clientY,onClose(){N(),O(),A(L)}})(L)}if(ue(i)){const L=i;return t&&L.addEventListener("mouseleave",H),o==null||o.addEventListener("mouseleave",H),f&&L.addEventListener("mousemove",j,{once:!0}),L.addEventListener("mouseenter",j),L.addEventListener("mouseleave",q),()=>{t&&L.removeEventListener("mouseleave",H),o==null||o.removeEventListener("mouseleave",H),f&&L.removeEventListener("mousemove",j),L.removeEventListener("mouseenter",j),L.removeEventListener("mouseleave",q)}}},[i,o,d,e,k,E,f,A,O,N,r,t,v,T,y,a]),Se(()=>{var R;if(d&&t&&(R=y.current)!=null&&R.__options.blockPointerEvents&&P()){const H=oe(o).body;if(H.setAttribute(ha,""),H.style.pointerEvents="none",S.current=!0,ue(i)&&o){var j,q;const L=i,M=v==null||(j=v.nodesRef.current.find(U=>U.id===h))==null||(q=j.context)==null?void 0:q.elements.floating;return M&&(M.style.pointerEvents=""),L.style.pointerEvents="auto",o.style.pointerEvents="auto",()=>{L.style.pointerEvents="",o.style.pointerEvents=""}}}},[d,t,h,o,i,v,y,a,P]),Se(()=>{t||(c.current=void 0,O(),N())},[t,O,N]),m.useEffect(()=>()=>{O(),clearTimeout(_.current),clearTimeout(K.current),N()},[d,i,O,N]),m.useMemo(()=>{if(!d)return{};function R(j){c.current=j.pointerType}return{reference:{onPointerDown:R,onPointerEnter:R,onMouseMove(j){t||E===0||(clearTimeout(K.current),K.current=setTimeout(()=>{I.current||r(!0,j.nativeEvent)},E))}},floating:{onMouseEnter(){clearTimeout(_.current)},onMouseLeave(j){s.emit("dismiss",{type:"mouseLeave",data:{returnFocus:!1}}),A(j.nativeEvent,!1)}}}},[s,d,E,t,r,A])}function mv(e,n){var t;let r=[],a=(t=e.find(s=>s.id===n))==null?void 0:t.parentId;for(;a;){const s=e.find(i=>i.id===a);a=s==null?void 0:s.parentId,s&&(r=r.concat(s))}return r}function gn(e,n){let t=e.filter(a=>{var s;return a.parentId===n&&((s=a.context)==null?void 0:s.open)}),r=t;for(;r.length;)r=e.filter(a=>{var s;return(s=r)==null?void 0:s.some(i=>{var o;return a.parentId===i.id&&((o=a.context)==null?void 0:o.open)})}),t=t.concat(r);return t}let sn=new WeakMap,Yn=new WeakSet,Cn={},Lr=0;const vv=()=>typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype,Pi=e=>e&&(e.host||Pi(e.parentNode)),Ev=(e,n)=>n.map(t=>{if(e.contains(t))return t;const r=Pi(t);return e.contains(r)?r:null}).filter(t=>t!=null);function fv(e,n,t,r){const a="data-floating-ui-inert",s=r?"inert":t?"aria-hidden":null,i=Ev(n,e),o=new Set,l=new Set(i),d=[];Cn[a]||(Cn[a]=new WeakMap);const u=Cn[a];i.forEach(g),k(n),o.clear();function g(E){!E||o.has(E)||(o.add(E),E.parentNode&&g(E.parentNode))}function k(E){!E||l.has(E)||Array.prototype.forEach.call(E.children,f=>{if(o.has(f))k(f);else{const v=s?f.getAttribute(s):null,h=v!==null&&v!=="false",y=(sn.get(f)||0)+1,T=(u.get(f)||0)+1;sn.set(f,y),u.set(f,T),d.push(f),y===1&&h&&Yn.add(f),T===1&&f.setAttribute(a,""),!h&&s&&f.setAttribute(s,"true")}})}return Lr++,()=>{d.forEach(E=>{const f=(sn.get(E)||0)-1,v=(u.get(E)||0)-1;sn.set(E,f),u.set(E,v),f||(!Yn.has(E)&&s&&E.removeAttribute(s),Yn.delete(E)),v||E.removeAttribute(a)}),Lr--,Lr||(sn=new WeakMap,sn=new WeakMap,Yn=new WeakSet,Cn={})}}function Sa(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!1);const r=oe(e[0]).body;return fv(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,n,t)}const Fi=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function qi(e,n){const t=Oi(e,Fi());n==="prev"&&t.reverse();const r=t.indexOf(We(oe(e)));return t.slice(r+1)[0]}function yv(){return qi(document.body,"next")}function Tv(){return qi(document.body,"prev")}function _a(e,n){const t=n||e.currentTarget,r=e.relatedTarget;return!r||!ne(t,r)}const ji={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};let pv;function Na(e){e.key==="Tab"&&(e.target,clearTimeout(pv))}const Ia=m.forwardRef(function(n,t){const[r,a]=m.useState();Se(()=>(Mm()&&a("button"),document.addEventListener("keydown",Na),()=>{document.removeEventListener("keydown",Na)}),[]);const s={ref:t,tabIndex:0,role:r,"aria-hidden":r?void 0:!0,[yn("focus-guard")]:"",style:ji};return m.createElement("span",dr({},n,s))}),Rv=m.createContext(null),cv=()=>m.useContext(Rv),Av=m.forwardRef(function(n,t){return m.createElement("button",dr({},n,{type:"button",ref:t,tabIndex:-1,style:ji}))});function wi(e){const{context:n,children:t,disabled:r=!1,order:a=["content"],guards:s=!0,initialFocus:i=0,returnFocus:o=!0,modal:l=!0,visuallyHiddenDismiss:d=!1,closeOnFocusOut:u=!0}=e,{open:g,refs:k,nodeId:E,onOpenChange:f,events:v,dataRef:h,elements:{domReference:y,floating:T}}=n,c=vv()?s:!0,_=Sn(a),p=Sn(i),K=Sn(o),I=yr(),S=cv(),F=typeof i=="number"&&i<0,P=m.useRef(null),A=m.useRef(null),O=m.useRef(!1),N=m.useRef(null),R=m.useRef(!1),j=S!=null,q=y&&y.getAttribute("role")==="combobox"&&Hm(y)&&F,H=m.useCallback(function(V){return V===void 0&&(V=T),V?Oi(V,Fi()):[]},[T]),L=m.useCallback(V=>{const B=H(V);return _.current.map(G=>y&&G==="reference"?y:T&&G==="floating"?T:B).filter(Boolean).flat()},[y,T,_,H]);m.useEffect(()=>{if(r||!l)return;function V(G){if(G.key==="Tab"){ne(T,We(oe(T)))&&H().length===0&&!q&&Or(G);const $=L(),re=pt(G);_.current[0]==="reference"&&re===y&&(Or(G),G.shiftKey?$e($[$.length-1]):$e($[1])),_.current[1]==="floating"&&re===T&&G.shiftKey&&(Or(G),$e($[0]))}}const B=oe(T);return B.addEventListener("keydown",V),()=>{B.removeEventListener("keydown",V)}},[r,y,T,l,_,k,q,H,L]),m.useEffect(()=>{if(r||!u)return;function V(){R.current=!0,setTimeout(()=>{R.current=!1})}function B(G){const $=G.relatedTarget;queueMicrotask(()=>{const re=!(ne(y,$)||ne(T,$)||ne($,T)||ne(S==null?void 0:S.portalNode,$)||$!=null&&$.hasAttribute(yn("focus-guard"))||I&&(gn(I.nodesRef.current,E).find(se=>{var ae,z;return ne((ae=se.context)==null?void 0:ae.elements.floating,$)||ne((z=se.context)==null?void 0:z.elements.domReference,$)})||mv(I.nodesRef.current,E).find(se=>{var ae,z;return((ae=se.context)==null?void 0:ae.elements.floating)===$||((z=se.context)==null?void 0:z.elements.domReference)===$})));$&&re&&!R.current&&$!==N.current&&(O.current=!0,f(!1,G))})}if(T&&On(y))return y.addEventListener("focusout",B),y.addEventListener("pointerdown",V),!l&&T.addEventListener("focusout",B),()=>{y.removeEventListener("focusout",B),y.removeEventListener("pointerdown",V),!l&&T.removeEventListener("focusout",B)}},[r,y,T,l,E,I,S,f,u]),m.useEffect(()=>{var V;if(r)return;const B=Array.from((S==null||(V=S.portalNode)==null?void 0:V.querySelectorAll("["+yn("portal")+"]"))||[]);if(T){const G=[T,...B,P.current,A.current,_.current.includes("reference")||q?y:null].filter(re=>re!=null),$=l?Sa(G,c,!c):Sa(G);return()=>{$()}}},[r,y,T,l,_,S,q,c]),Se(()=>{if(r||!T)return;const V=oe(T),B=We(V);queueMicrotask(()=>{const G=L(T),$=p.current,re=(typeof $=="number"?G[$]:$.current)||T,se=ne(T,B);!F&&!se&&g&&$e(re,{preventScroll:re===T})})},[r,g,T,F,L,p]),Se(()=>{if(r||!T)return;let V=!1;const B=oe(T),G=We(B),$=h.current;N.current=G;function re(se){if(se.type==="escapeKey"&&k.domReference.current&&(N.current=k.domReference.current),["referencePress","escapeKey"].includes(se.type))return;const ae=se.data.returnFocus;typeof ae=="object"?(O.current=!1,V=ae.preventScroll):O.current=!ae}return v.on("dismiss",re),()=>{v.off("dismiss",re);const se=We(B);(ne(T,se)||I&&gn(I.nodesRef.current,E).some(z=>{var ee;return ne((ee=z.context)==null?void 0:ee.elements.floating,se)})||$.openEvent&&["click","mousedown"].includes($.openEvent.type))&&k.domReference.current&&(N.current=k.domReference.current),K.current&&On(N.current)&&!O.current&&$e(N.current,{cancelPrevious:!1,preventScroll:V})}},[r,T,K,h,k,v,I,E]),Se(()=>{if(!(r||!S))return S.setFocusManagerState({modal:l,closeOnFocusOut:u,open:g,onOpenChange:f,refs:k}),()=>{S.setFocusManagerState(null)}},[r,S,l,g,f,k,u]),Se(()=>{if(!r&&T&&typeof MutationObserver=="function"&&!F){const V=()=>{const G=T.getAttribute("tabindex");_.current.includes("floating")||We(oe(T))!==k.domReference.current&&H().length===0?G!=="0"&&T.setAttribute("tabindex","0"):G!=="-1"&&T.setAttribute("tabindex","-1")};V();const B=new MutationObserver(V);return B.observe(T,{childList:!0,subtree:!0,attributes:!0}),()=>{B.disconnect()}}},[r,T,k,_,H,F]);function M(V){return r||!d||!l?null:m.createElement(Av,{ref:V==="start"?P:A,onClick:B=>f(!1,B.nativeEvent)},typeof d=="string"?d:"Dismiss")}const U=!r&&c&&!q&&(j||l);return m.createElement(m.Fragment,null,U&&m.createElement(Ia,{"data-type":"inside",ref:S==null?void 0:S.beforeInsideRef,onFocus:V=>{if(l){const G=L();$e(a[0]==="reference"?G[0]:G[G.length-1])}else if(S!=null&&S.preserveTabOrder&&S.portalNode)if(O.current=!1,_a(V,S.portalNode)){const G=yv()||y;G==null||G.focus()}else{var B;(B=S.beforeOutsideRef.current)==null||B.focus()}}}),!q&&M("start"),t,M("end"),U&&m.createElement(Ia,{"data-type":"inside",ref:S==null?void 0:S.afterInsideRef,onFocus:V=>{if(l)$e(L()[0]);else if(S!=null&&S.preserveTabOrder&&S.portalNode)if(u&&(O.current=!0),_a(V,S.portalNode)){const G=Tv()||y;G==null||G.focus()}else{var B;(B=S.afterOutsideRef.current)==null||B.focus()}}}))}const bv=ds.useInsertionEffect,hv=bv||(e=>e());function Zn(e){const n=m.useRef(()=>{});return hv(()=>{n.current=e}),m.useCallback(function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return n.current==null?void 0:n.current(...r)},[])}const Sv={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},_v={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Nv=e=>{var n,t;return{escapeKeyBubbles:typeof e=="boolean"?e:(n=e==null?void 0:e.escapeKey)!=null?n:!1,outsidePressBubbles:typeof e=="boolean"?e:(t=e==null?void 0:e.outsidePress)!=null?t:!0}};function Mi(e,n){n===void 0&&(n={});const{open:t,onOpenChange:r,events:a,nodeId:s,elements:{reference:i,domReference:o,floating:l},dataRef:d}=e,{enabled:u=!0,escapeKey:g=!0,outsidePress:k=!0,outsidePressEvent:E="pointerdown",referencePress:f=!1,referencePressEvent:v="pointerdown",ancestorScroll:h=!1,bubbles:y}=n,T=yr(),c=Di()!=null,_=Zn(typeof k=="function"?k:()=>!1),p=typeof k=="function"?_:k,K=m.useRef(!1),{escapeKeyBubbles:I,outsidePressBubbles:S}=Nv(y),F=Zn(A=>{if(!t||!u||!g||A.key!=="Escape")return;const O=T?gn(T.nodesRef.current,s):[];if(!I&&(A.stopPropagation(),O.length>0)){let N=!0;if(O.forEach(R=>{var j;if((j=R.context)!=null&&j.open&&!R.context.dataRef.current.__escapeKeyBubbles){N=!1;return}}),!N)return}a.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1,Bm(A)?A.nativeEvent:A)}),P=Zn(A=>{const O=K.current;if(K.current=!1,O||typeof p=="function"&&!p(A))return;const N=pt(A),R="["+yn("inert")+"]",j=oe(l).querySelectorAll(R);let q=ue(N)?N:null;for(;q&&!Dm(q);){const M=Pm(q);if(M===oe(l).body||!ue(M))break;q=M}if(j.length&&ue(N)&&!Vm(N)&&!ne(N,l)&&Array.from(j).every(M=>!ne(q,M)))return;if(On(N)&&l){const M=N.clientWidth>0&&N.scrollWidth>N.clientWidth,U=N.clientHeight>0&&N.scrollHeight>N.clientHeight;let V=U&&A.offsetX>N.clientWidth;if(U&&Lm(N).direction==="rtl"&&(V=A.offsetX<=N.offsetWidth-N.clientWidth),V||M&&A.offsetY>N.clientHeight)return}const H=T&&gn(T.nodesRef.current,s).some(M=>{var U;return Xn(A,(U=M.context)==null?void 0:U.elements.floating)});if(Xn(A,l)||Xn(A,o)||H)return;const L=T?gn(T.nodesRef.current,s):[];if(L.length>0){let M=!0;if(L.forEach(U=>{var V;if((V=U.context)!=null&&V.open&&!U.context.dataRef.current.__outsidePressBubbles){M=!1;return}}),!M)return}a.emit("dismiss",{type:"outsidePress",data:{returnFocus:c?{preventScroll:!0}:jm(A)||wm(A)}}),r(!1,A)});return m.useEffect(()=>{if(!t||!u)return;d.current.__escapeKeyBubbles=I,d.current.__outsidePressBubbles=S;function A(R){r(!1,R)}const O=oe(l);g&&O.addEventListener("keydown",F),p&&O.addEventListener(E,P);let N=[];return h&&(ue(o)&&(N=Ve(o)),ue(l)&&(N=N.concat(Ve(l))),!ue(i)&&i&&i.contextElement&&(N=N.concat(Ve(i.contextElement)))),N=N.filter(R=>{var j;return R!==((j=O.defaultView)==null?void 0:j.visualViewport)}),N.forEach(R=>{R.addEventListener("scroll",A,{passive:!0})}),()=>{g&&O.removeEventListener("keydown",F),p&&O.removeEventListener(E,P),N.forEach(R=>{R.removeEventListener("scroll",A)})}},[d,l,o,i,g,p,E,t,r,h,u,I,S,F,P]),m.useEffect(()=>{K.current=!1},[p,E]),m.useMemo(()=>u?{reference:{onKeyDown:F,[Sv[v]]:A=>{f&&(a.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1,A.nativeEvent))}},floating:{onKeyDown:F,[_v[E]]:()=>{K.current=!0}}}:{},[u,a,f,E,v,r,F])}function Bi(e){var n;e===void 0&&(e={});const{open:t=!1,onOpenChange:r,nodeId:a}=e,[s,i]=m.useState(null),o=((n=e.elements)==null?void 0:n.reference)||s,l=Hk(e),d=yr(),u=Zn((_,p)=>{_&&(k.current.openEvent=p),r==null||r(_,p)}),g=m.useRef(null),k=m.useRef({}),E=m.useState(()=>uv())[0],f=Ki(),v=m.useCallback(_=>{const p=ue(_)?{getBoundingClientRect:()=>_.getBoundingClientRect(),contextElement:_}:_;l.refs.setReference(p)},[l.refs]),h=m.useCallback(_=>{(ue(_)||_===null)&&(g.current=_,i(_)),(ue(l.refs.reference.current)||l.refs.reference.current===null||_!==null&&!ue(_))&&l.refs.setReference(_)},[l.refs]),y=m.useMemo(()=>({...l.refs,setReference:h,setPositionReference:v,domReference:g}),[l.refs,h,v]),T=m.useMemo(()=>({...l.elements,domReference:o}),[l.elements,o]),c=m.useMemo(()=>({...l,refs:y,elements:T,dataRef:k,nodeId:a,floatingId:f,events:E,open:t,onOpenChange:u}),[l,a,f,E,t,u,y,T]);return Se(()=>{const _=d==null?void 0:d.nodesRef.current.find(p=>p.id===a);_&&(_.context=c)}),m.useMemo(()=>({...l,context:c,refs:y,elements:T}),[l,y,T,c])}function Vi(e,n){n===void 0&&(n={});const{open:t,onOpenChange:r,dataRef:a,events:s,refs:i,elements:{floating:o,domReference:l}}=e,{enabled:d=!0,keyboardOnly:u=!0}=n,g=m.useRef(""),k=m.useRef(!1),E=m.useRef();return m.useEffect(()=>{if(!d)return;const v=oe(o).defaultView||window;function h(){!t&&On(l)&&l===We(oe(l))&&(k.current=!0)}return v.addEventListener("blur",h),()=>{v.removeEventListener("blur",h)}},[o,l,t,d]),m.useEffect(()=>{if(!d)return;function f(v){(v.type==="referencePress"||v.type==="escapeKey")&&(k.current=!0)}return s.on("dismiss",f),()=>{s.off("dismiss",f)}},[s,d]),m.useEffect(()=>()=>{clearTimeout(E.current)},[]),m.useMemo(()=>d?{reference:{onPointerDown(f){let{pointerType:v}=f;g.current=v,k.current=!!(v&&u)},onMouseLeave(){k.current=!1},onFocus(f){var v;k.current||f.type==="focus"&&((v=a.current.openEvent)==null?void 0:v.type)==="mousedown"&&Xn(a.current.openEvent,l)||r(!0,f.nativeEvent)},onBlur(f){k.current=!1;const v=f.relatedTarget,h=ue(v)&&v.hasAttribute(yn("focus-guard"))&&v.getAttribute("data-type")==="outside";E.current=setTimeout(()=>{ne(i.floating.current,v)||ne(l,v)||h||r(!1,f.nativeEvent)})}}}:{},[d,u,l,i,a,r])}function Pr(e,n,t){const r=new Map;return{...t==="floating"&&{tabIndex:-1},...e,...n.map(a=>a?a[t]:null).concat(e).reduce((a,s)=>(s&&Object.entries(s).forEach(i=>{let[o,l]=i;if(o.indexOf("on")===0){if(r.has(o)||r.set(o,[]),typeof l=="function"){var d;(d=r.get(o))==null||d.push(l),a[o]=function(){for(var u,g=arguments.length,k=new Array(g),E=0;E<g;E++)k[E]=arguments[E];return(u=r.get(o))==null?void 0:u.map(f=>f(...k)).find(f=>f!==void 0)}}}else a[o]=l}),a),{})}}function Gi(e){e===void 0&&(e=[]);const n=e,t=m.useCallback(s=>Pr(s,e,"reference"),n),r=m.useCallback(s=>Pr(s,e,"floating"),n),a=m.useCallback(s=>Pr(s,e,"item"),e.map(s=>s==null?void 0:s.item));return m.useMemo(()=>({getReferenceProps:t,getFloatingProps:r,getItemProps:a}),[t,r,a])}function Hi(e,n){n===void 0&&(n={});const{open:t,floatingId:r}=e,{enabled:a=!0,role:s="dialog"}=n,i=Ki();return m.useMemo(()=>{const o={id:r,role:s};return a?s==="tooltip"?{reference:{"aria-describedby":t?r:void 0},floating:o}:{reference:{"aria-expanded":t?"true":"false","aria-haspopup":s==="alertdialog"?"dialog":s,"aria-controls":t?r:void 0,...s==="listbox"&&{role:"combobox"},...s==="menu"&&{id:i}},floating:{...o,...s==="menu"&&{"aria-labelledby":i}}}:{}},[a,s,t,r,i])}function Oa(e,n){const[t,r]=e;let a=!1;const s=n.length;for(let i=0,o=s-1;i<s;o=i++){const[l,d]=n[i]||[0,0],[u,g]=n[o]||[0,0];d>=r!=g>=r&&t<=(u-l)*(r-d)/(g-d)+l&&(a=!a)}return a}function Iv(e,n){return e[0]>=n.x&&e[0]<=n.x+n.width&&e[1]>=n.y&&e[1]<=n.y+n.height}function Ui(e){e===void 0&&(e={});const{buffer:n=.5,blockPointerEvents:t=!1,requireIntent:r=!0}=e;let a,s=!1,i=null,o=null,l=performance.now();function d(g,k){const E=performance.now(),f=E-l;if(i===null||o===null||f===0)return i=g,o=k,l=E,null;const v=g-i,h=k-o,T=Math.sqrt(v*v+h*h)/f;return i=g,o=k,l=E,T}const u=g=>{let{x:k,y:E,placement:f,elements:v,onClose:h,nodeId:y,tree:T}=g;return function(_){function p(){clearTimeout(a),h()}if(clearTimeout(a),!v.domReference||!v.floating||f==null||k==null||E==null)return;const{clientX:K,clientY:I}=_,S=[K,I],F=pt(_),P=_.type==="mouseleave",A=ne(v.floating,F),O=ne(v.domReference,F),N=v.domReference.getBoundingClientRect(),R=v.floating.getBoundingClientRect(),j=f.split("-")[0],q=k>R.right-R.width/2,H=E>R.bottom-R.height/2,L=Iv(S,N),M=R.width>N.width,U=R.height>N.height,V=(M?N:R).left,B=(M?N:R).right,G=(U?N:R).top,$=(U?N:R).bottom;if(A&&(s=!0,!P))return;if(O&&(s=!1),O&&!P){s=!0;return}if(P&&ue(_.relatedTarget)&&ne(v.floating,_.relatedTarget)||T&&gn(T.nodesRef.current,y).some(ae=>{let{context:z}=ae;return z==null?void 0:z.open}))return;if(j==="top"&&E>=N.bottom-1||j==="bottom"&&E<=N.top+1||j==="left"&&k>=N.right-1||j==="right"&&k<=N.left+1)return p();let re=[];switch(j){case"top":re=[[V,N.top+1],[V,R.bottom-1],[B,R.bottom-1],[B,N.top+1]];break;case"bottom":re=[[V,R.top+1],[V,N.bottom-1],[B,N.bottom-1],[B,R.top+1]];break;case"left":re=[[R.right-1,$],[R.right-1,G],[N.left+1,G],[N.left+1,$]];break;case"right":re=[[N.right-1,$],[N.right-1,G],[R.left+1,G],[R.left+1,$]];break}function se(ae){let[z,ee]=ae;switch(j){case"top":{const xe=[M?z+n/2:q?z+n*4:z-n*4,ee+n+1],Ye=[M?z-n/2:q?z+n*4:z-n*4,ee+n+1],tn=[[R.left,q||M?R.bottom-n:R.top],[R.right,q?M?R.bottom-n:R.top:R.bottom-n]];return[xe,Ye,...tn]}case"bottom":{const xe=[M?z+n/2:q?z+n*4:z-n*4,ee-n],Ye=[M?z-n/2:q?z+n*4:z-n*4,ee-n],tn=[[R.left,q||M?R.top+n:R.bottom],[R.right,q?M?R.top+n:R.bottom:R.top+n]];return[xe,Ye,...tn]}case"left":{const xe=[z+n+1,U?ee+n/2:H?ee+n*4:ee-n*4],Ye=[z+n+1,U?ee-n/2:H?ee+n*4:ee-n*4];return[...[[H||U?R.right-n:R.left,R.top],[H?U?R.right-n:R.left:R.right-n,R.bottom]],xe,Ye]}case"right":{const xe=[z-n,U?ee+n/2:H?ee+n*4:ee-n*4],Ye=[z-n,U?ee-n/2:H?ee+n*4:ee-n*4],tn=[[H||U?R.left+n:R.right,R.top],[H?U?R.left+n:R.right:R.left+n,R.bottom]];return[xe,Ye,...tn]}}}if(!Oa([K,I],re)){if(s&&!L)return p();if(!P&&r){const ae=d(_.clientX,_.clientY);if(ae!==null&&ae<.1)return p()}Oa([K,I],se([k,E]))?!s&&r&&(a=window.setTimeout(p,40)):p()}}};return u.__options={blockPointerEvents:t},u}const xi=m.createContext({startDate:new Date,endDate:new Date,direction:"left",setStart:()=>null,setEndInclusive:()=>null,activeRow:0,setActiveRow:()=>null,initiate:()=>null,addFocusable:()=>null}),Gn=()=>{const e=m.useContext(xi);return e||console.warn("useTimelineContext must be used with TimelineContext (<Timeline />)"),e},Ov=({horizontalPosition:e})=>e<=98&&e>=0,Ka=(e,n)=>fi(e,n)<=1,Kv=({horizontalPosition:e,width:n})=>e>=0&&e<=100&&n>0,rt=(e,n,t)=>{const r=Ea(t,n);return Ea(e,n)/r*100},Tr=(e,n,t,r)=>{const a=rt(e,t,r),s=rt(n,t,r)-a;return{horizontalPosition:a,width:s}},Dv=(e,n,t,r,a,s)=>{const i=Math.ceil(t/10),o=He(n);return new Array(t).fill(o).map((l,d)=>{if(d%i!==0)return null;const u=ci(l,d),{horizontalPosition:g,width:k}=Tr(u,Tt(u,1),e,n);return{direction:r,horizontalPosition:g,label:De(u,a,{locale:s}),date:u,width:k}}).filter(l=>l!==null)},Lv=(e,n,t,r,a)=>{const s=im(e),i=yi(n),o=am(i,s)+1;return new Array(o).fill(s).map((l,d)=>{const u=In(l,d),{horizontalPosition:g,width:k}=Tr(u,In(u,1),e,n);return{direction:t,horizontalPosition:g,label:De(u,r,{locale:a}),date:u,width:k}})},Pv=(e,n,t,r,a)=>{const s=Ti(e),i=om(n),o=sm(i,e)+1;return new Array(o).fill(s).map((l,d)=>{const u=ar(l,d),{horizontalPosition:g,width:k}=Tr(u,ar(u,1),e,n);return{direction:t,horizontalPosition:g,label:De(u,r,{locale:a}),date:u,width:k}})},Fv=(e,n,t,r,a)=>{const s=fi(n,e);if(s<40){const o=a("dayFormat");return Dv(e,n,s,t,o,r)}if(s<370){const o=a("monthFormat");return Lv(e,n,t,o,r)}const i=a("yearFormat");return Pv(e,n,t,i,r)},qv=({templates:e})=>{const{endDate:n,startDate:t,direction:r}=Gn(),a=rn("Timeline",{dayFormat:e==null?void 0:e.day,monthFormat:e==null?void 0:e.month,yearFormat:e==null?void 0:e.year}),s=$k(),i=Fv(t,n,r,s,a);return D.createElement("div",{className:"navds-timeline__axislabels","aria-hidden":"true"},i.filter(Ov).map(o=>D.createElement(Ys,{className:"navds-timeline__axislabels-label",as:"div",key:o.label,style:{justifyContent:r==="left"?"flex-start":"flex-end",[r]:`${o.horizontalPosition}%`,width:`${o.width}%`}},o.label)))};var jv=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Yi=m.forwardRef((e,n)=>{var{date:t,children:r}=e,a=jv(e,["date","children"]);const{startDate:s,endDate:i,direction:o}=Gn(),[l,d]=m.useState(!1),u=m.useRef(null),g=rn("Timeline"),E=!jn(!1),{context:f,placement:v,middlewareData:{arrow:{x:h,y}={}},refs:T,floatingStyles:c}=Bi({placement:"top",open:l,onOpenChange:O=>d(O),whileElementsMounted:oi,middleware:[di(E?16:8),ui(),gi({padding:5,fallbackPlacements:["bottom","top"]}),ki({element:u,padding:5})]}),_=Li(f,{handleClose:Ui(),restMs:25,delay:{open:1e3},move:!1}),p=Vi(f),K=Mi(f),I=Hi(f,{role:"dialog"}),{getFloatingProps:S,getReferenceProps:F}=Gi([_,p,K,I]),P=Us(T.setReference,n),A={top:"bottom",right:"left",bottom:"top",left:"right"}[v.split("-")[0]];return D.createElement(D.Fragment,null,D.createElement("div",{className:"navds-timeline__pin-wrapper",style:{[o]:`${rt(t,s,i)}%`}},D.createElement("button",Object.assign({},a,{ref:P,className:"navds-timeline__pin-button","aria-label":g("Pin.pin",{date:De(t,g("dateFormat"))}),type:"button","aria-expanded":r?l:void 0},F({onKeyDown:O=>{var N;(N=a==null?void 0:a.onKeyDown)===null||N===void 0||N.call(a,O),O.key==="Enter"?d(R=>!R):O.key===" "&&d(!1)}})))),r&&l&&D.createElement(wi,{context:f,modal:!1,initialFocus:-1,returnFocus:!1},D.createElement("div",Object.assign({className:"navds-timeline__popover","data-placement":v,ref:T.setFloating},S(),{tabIndex:void 0,style:c}),r,E&&D.createElement("div",{ref:u,style:Object.assign(Object.assign(Object.assign({},h!=null?{left:h}:{}),y!=null?{top:y}:{}),A?{[A]:"-0.5rem"}:{}),className:"navds-timeline__popover-arrow"}))))});Yi.componentType="pin";const Ci=m.createContext({periodId:"",firstFocus:!1}),$i=()=>{const e=m.useContext(Ci);return e||console.warn("usePeriodContext must be used with PeriodContext"),e},Ji=m.createContext({periods:[],id:"",active:!1,index:0}),Rt=()=>{const e=m.useContext(Ji);return e||console.warn("useRowContext must be used with RowContext"),e},Wi=(e,n,t)=>Z(`navds-timeline__period navds-timeline__period--${t}`,{"navds-timeline__period--connected-both":e==="both","navds-timeline__period--connected-right":e==="right"&&n==="left"||e==="left"&&n==="right","navds-timeline__period--connected-left":e==="left"&&n==="left"||e==="right"&&n==="right"}),zi=(e,n,t,r,a)=>{const s=a("dateFormat"),i=De(e,s),o=De(n,s);return a("Period.period",{status:r||a(`Period.${t}`),start:i,end:o})},wv=D.memo(({onSelectPeriod:e,start:n,end:t,status:r,cropped:a,direction:s,left:i,width:o,icon:l,children:d,isActive:u,statusLabel:g,restProps:k,periodRef:E})=>{const[f,v]=m.useState(!1),{index:h}=Rt(),{firstFocus:y}=$i(),{initiate:T,addFocusable:c}=Gn(),_=m.useRef(null),p=rn("Timeline"),I=!jn(!1),{context:S,placement:F,middlewareData:{arrow:{x:P,y:A}={}},refs:O,floatingStyles:N}=Bi({placement:"top",open:f,onOpenChange:B=>v(B),whileElementsMounted:oi,middleware:[di(I?16:8),ui(),gi({padding:5,fallbackPlacements:["bottom","top"]}),ki({element:_,padding:5})]}),R=Li(S,{handleClose:Ui(),restMs:25,delay:{open:1e3},move:!1}),j=Vi(S),q=Mi(S),H=Hi(S,{role:"dialog"}),{getFloatingProps:L,getReferenceProps:M}=Gi([R,j,q,H]),U=Us(O.setReference,E),V={top:"bottom",right:"left",bottom:"top",left:"right"}[F.split("-")[0]];return D.createElement(D.Fragment,null,D.createElement("button",Object.assign({},k,{type:"button",ref:B=>{y&&c(B,h),U(B)},"aria-label":zi(n,t,r,g,p),className:Z("navds-timeline__period--clickable",Wi(a,s,r),k==null?void 0:k.className,{"navds-timeline__period--selected":u}),"aria-expanded":d?f:void 0,"aria-current":u||void 0},M({onFocus:()=>{T(h)},onKeyDown:B=>{var G;(G=k==null?void 0:k.onKeydown)===null||G===void 0||G.call(k,B),B.key==="Enter"&&v($=>!$),B.key===" "&&(e==null||e(B),v(!1))},style:{width:`${o}%`,[s]:`${i}%`},onClick:B=>{var G;(G=k==null?void 0:k.onClick)===null||G===void 0||G.call(k,B),B.detail!==0&&(e==null||e(B))}})),D.createElement("span",{className:"navds-timeline__period--inner"},l)),d&&f&&D.createElement(wi,{context:S,modal:!1,initialFocus:-1,returnFocus:!1},D.createElement("div",Object.assign({className:"navds-timeline__popover","data-placement":F,ref:O.setFloating},L(),{style:N}),d,I&&D.createElement("div",{ref:_,style:Object.assign(Object.assign(Object.assign({},P!=null?{left:P}:{}),A!=null?{top:A}:{}),V?{[V]:"-0.5rem"}:{}),className:"navds-timeline__popover-arrow"}))))}),Mv=({start:e,end:n,status:t,cropped:r,direction:a,left:s,width:i,icon:o,statusLabel:l,restProps:d,periodRef:u})=>{const g=rn("Timeline");return D.createElement("div",Object.assign({ref:u},d,{className:Z(Wi(r,a,t),d==null?void 0:d.className),style:{width:`${i}%`,[a]:`${s}%`}}),D.createElement("span",{className:"navds-timeline__period--inner"},o,D.createElement("span",{className:"sr-only"},zi(e,n,t,l,g))))},ct=m.forwardRef(({icon:e},n)=>{const{periods:t}=Rt(),{periodId:r,restProps:a}=$i(),s=t.find(y=>y.id===r);if(!s)return D.createElement(D.Fragment,null);const{start:i,endInclusive:o,width:l,horizontalPosition:d,status:u="neutral",onSelectPeriod:g,cropped:k,direction:E,children:f,isActive:v,statusLabel:h}=s;return g||f?D.createElement(wv,{periodRef:n,start:i,end:o,status:u,onSelectPeriod:g,cropped:k||"",direction:E,width:l,left:d,icon:e,isActive:v,statusLabel:h,restProps:a},f):D.createElement(Mv,{periodRef:n,start:i,end:o,status:u,cropped:k||"",direction:E,width:l,left:d,icon:e,statusLabel:h,restProps:a})});ct.componentType="period";var Bv=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const At=m.forwardRef((e,n)=>{var{label:t,className:r,headingTag:a="h3",icon:s}=e,i=Bv(e,["label","className","headingTag","icon"]);const{periods:o,id:l,active:d}=Rt(),{setActiveRow:u}=Gn(),g=rn("Timeline"),k=o.reduce((v,h)=>v.end>h.end?v:h,{}),E=o.reduce((v,h)=>v.end<h.end?v:h,{}),f=o.find(v=>!!v.children||!!v.onSelectPeriod);return D.createElement(D.Fragment,null,t&&D.createElement(ie,{as:a,id:`timeline-row-${l}`,className:"navds-timeline__row-label",size:"small"},s,t),D.createElement("div",{className:Z("navds-timeline__row",{"navds-timeline__row--active":d})},D.createElement("ol",Object.assign({},i,{tabIndex:-1,ref:n,"aria-label":o.length===0?g("Row.noPeriods"):g("Row.period",{start:De(E.start,g("dateFormat")),end:De(k.end,g("dateFormat"))}),className:Z("navds-timeline__row-periods",r),onKeyDown:v=>{(v.key==="ArrowDown"||v.key==="ArrowUp")&&(v.preventDefault(),u(v.key))}}),o==null?void 0:o.map(v=>D.createElement("li",{key:`period-${v.id}`},D.createElement(Ci.Provider,{value:{periodId:v.id,firstFocus:(f==null?void 0:f.id)===v.id,restProps:v==null?void 0:v.restProps}},D.createElement(ct,{start:v.start,end:v.endInclusive,icon:v.icon,ref:v==null?void 0:v.ref})))))))});At.componentType="row";const Vv=(e,n)=>e.horizontalPosition-n.horizontalPosition,Gv=(e,n,t,r="left",a,s,i)=>{const o=e.start,l=e.end,d=a<s.length-1&&!Nm(s[a+1].start,l),{horizontalPosition:u,width:g}=Tr(He(o),ir(d?He(ci(s[a+1].start,1)):l),n,t);return{id:`r-${i}-p-${a}`,start:o,endInclusive:l,horizontalPosition:u,direction:r,width:g,end:l,status:e.status,onSelectPeriod:e.onSelectPeriod,icon:e.icon,children:e.children,isActive:e.isActive,statusLabel:e.statusLabel}},Hv=(e,n,t)=>{const r=n>0&&Ka(e.start,t[n-1].endInclusive),a=n<t.length-1&&Ka(t[n+1].start,e.endInclusive);return r&&a?Object.assign(Object.assign({},e),{cropped:"both"}):r?Object.assign(Object.assign({},e),{cropped:"left"}):a?Object.assign(Object.assign({},e),{cropped:"right"}):e},Uv=e=>{let{horizontalPosition:n,width:t,cropped:r}=e;return n+t>100&&(t=100-n,r=r==="left"||r==="both"?"both":"right"),n<0&&n+t>0&&(t=n+t,n=0,r=r==="right"||r==="both"?"both":"left"),Object.assign(Object.assign({},e),{width:t,horizontalPosition:n,cropped:r})},xv=(e,n,t,r)=>m.useMemo(()=>e.map((a,s)=>{const i=a.periods.sort((o,l)=>o.start.valueOf()-l.start.valueOf()).map((o,l)=>Object.assign(Object.assign({},Gv(o,n,t,r,l,a.periods,s)),{restProps:o==null?void 0:o.restProps,ref:o==null?void 0:o.ref})).sort(Vv).map(Hv).map(Uv).filter(Kv);return{id:`tl-row-${s}`,label:a.label,headingTag:a.headingTag||"h3",icon:a.icon,periods:r==="left"?i:i.reverse(),restProps:a==null?void 0:a.restProps,ref:a==null?void 0:a.ref}}),[e,n,t,r]),Yv=({startDate:e,rows:n})=>m.useMemo(()=>{if(e)return e;const t=n.flat().filter(a=>a.start).map(a=>a.start);return t.length===0?new Date:t.reduce((a,s)=>s<a?s:a)},[e,n]),Cv=(e,n)=>n.end>e?n.end:e,$v=e=>e.flat().reduce(Cv,new Date(0)),Da=({endDate:e,rows:n})=>m.useMemo(()=>e||Tt($v(n),1),[e,n]),Jv=e=>{const n=[];return e==null||e.forEach(t=>{var r,a,s,i,o,l,d,u,g,k,E,f;const v=[];if(D.isValidElement(t)&&(!((r=t==null?void 0:t.props)===null||r===void 0)&&r.children)){if(Array.isArray(t.props.children))for(let h=0;h<t.props.children.length;h++){const y=t.props.children[h];v.push({start:(a=y==null?void 0:y.props)===null||a===void 0?void 0:a.start,end:(s=y==null?void 0:y.props)===null||s===void 0?void 0:s.end,status:((i=y==null?void 0:y.props)===null||i===void 0?void 0:i.status)||"neutral",onSelectPeriod:(o=y.props)===null||o===void 0?void 0:o.onSelectPeriod,label:t.props.label,icon:y.props.icon,children:y.props.children,isActive:y.props.isActive,statusLabel:y.props.statusLabel,restProps:ln(y.props,["start","end","status","onSelectPeriod","label","icon","children","isActive","statusLabel"]),ref:y==null?void 0:y.ref})}else v.push({start:t.props.children.props.start,end:t.props.children.props.end,status:((l=t.props.children.props)===null||l===void 0?void 0:l.status)||"neutral",onSelectPeriod:(d=t.props.children.props)===null||d===void 0?void 0:d.onSelectPeriod,label:t.props.label,icon:(u=t.props.children.props)===null||u===void 0?void 0:u.icon,children:(g=t.props.children.props)===null||g===void 0?void 0:g.children,statusLabel:(k=t.props.children.props)===null||k===void 0?void 0:k.statusLabel,restProps:ln(t.props.children.props,["start","end","status","onSelectPeriod","label","icon","children","isActive","statusLabel"]),ref:(f=(E=t.props)===null||E===void 0?void 0:E.children)===null||f===void 0?void 0:f.ref});n.push({label:t.props.label,icon:t.props.icon,headingTag:t.props.headingTag,periods:v,restProps:ln(t.props,["label","icon","headingTag"]),ref:t==null?void 0:t.ref})}}),n};var Wv=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const zv=m.forwardRef((e,n)=>{var{label:t,interval:r,count:a}=e,s=Wv(e,["label","interval","count"]);const{setStart:i,endDate:o,startDate:l,direction:d}=Gn(),u=rn("Timeline"),g=u("dateFormat");let k;r==="month"?k=d==="left"?Im(o,a):In(l,a):k=d==="left"?Om(o,a):ar(l,a);const E=sr(d==="left"?l:o,k);return D.createElement(Ys,{as:"li"},D.createElement("button",Object.assign({type:"button","aria-label":E?u("Zoom.reset"):u("Zoom.zoom",{start:De(k,g),end:De(o,g)}),ref:n},s,{className:"navds-timeline__zoom-button",onClick:()=>{i(k)},"aria-pressed":E}),t))});var Xv=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const bt=m.forwardRef((e,n)=>{var{className:t,children:r}=e,a=Xv(e,["className","children"]);return D.createElement("ul",Object.assign({ref:n,className:Z(t,"navds-timeline__zoom")},a),r)});bt.Button=zv;bt.componentType="zoom";var Zv=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Pe=m.forwardRef((e,n)=>{var{children:t,startDate:r,endDate:a,direction:s="left",axisLabelTemplates:i}=e,o=Zv(e,["children","startDate","endDate","direction","axisLabelTemplates"]);const l=Array.isArray(t),d=m.useRef([]);l||(t=[t]);const u=D.Children.toArray(t).filter(A=>{var O;return((O=A==null?void 0:A.type)===null||O===void 0?void 0:O.componentType)==="row"}),g=D.Children.toArray(t).filter(A=>{var O;return((O=A==null?void 0:A.type)===null||O===void 0?void 0:O.componentType)==="pin"}).map(A=>()=>A),k=D.Children.toArray(t).find(A=>{var O;return((O=A==null?void 0:A.type)===null||O===void 0?void 0:O.componentType)==="zoom"}),E=m.useMemo(()=>Jv(u),[u]),f=E.map(A=>A!=null&&A.periods?A.periods:[]),v=He(Yv({startDate:r,rows:f})),[h,y]=m.useState(v),[T,c]=m.useState(null),[_,p]=m.useState(ir(Da({endDate:a,rows:f}))),K=ir(Da({endDate:a,rows:f})),I=xv(E,r??h,a??_,s),S=A=>{if(!(r||a))if(s==="left"){if(sr(A,h)){y(v);return}y(A)}else{if(sr(A,_)){p(K);return}p(A)}},F=A=>{var O,N,R,j;if(T!==null&&A==="ArrowDown"){for(let q=T+1;q<I.length;q++)if(I[q].periods.find(L=>!!L.children||!!L.onSelectPeriod)){c(q),(N=(O=d.current.find(L=>L.id===q))===null||O===void 0?void 0:O.ref)===null||N===void 0||N.focus();break}return}if(T!==null&&A==="ArrowUp"){for(let q=T-1;q>=0;q--)if(I[q].periods.find(L=>!!L.children||!!L.onSelectPeriod)){c(q),(j=(R=d.current.find(L=>L.id===q))===null||R===void 0?void 0:R.ref)===null||j===void 0||j.focus();break}return}},P=(A,O)=>{let N=d.current;N=N.filter(R=>R.id!==O),N.push({ref:A,id:O}),d.current=N};return D.createElement(xi.Provider,{value:{startDate:r??h,endDate:a??_,direction:s,setStart:A=>S(A),setEndInclusive:A=>p(A),activeRow:T,setActiveRow:A=>F(A),initiate:A=>c(A),addFocusable:P}},D.createElement("div",Object.assign({},o,{ref:n}),D.createElement("div",{className:"navds-timeline"},D.createElement(qv,{templates:i}),g.map((A,O)=>D.createElement(A,{key:`pin-${O}`})),I.map((A,O)=>D.createElement(Ji.Provider,{key:`row-${A.id}`,value:{periods:A.periods,id:A.id,active:T===O,index:O}},D.createElement(At,Object.assign({},A==null?void 0:A.restProps,{ref:A==null?void 0:A.ref,label:A.label,icon:A.icon,headingTag:A.headingTag}))))),k))});Pe.Row=At;Pe.Period=ct;Pe.Pin=Yi;Pe.Zoom=bt;var Qv=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const eE=m.forwardRef((e,n)=>{var{children:t,className:r,border:a=!1,as:s="div"}=e,i=Qv(e,["children","className","border","as"]);return D.createElement(s,Object.assign({ref:n,className:Z("navds-panel",r,{"navds-panel--border":a})},i),t)});function nE(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var La={exports:{}},An={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pa;function rE(){if(Pa)return An;Pa=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(r,a,s){var i=null;if(s!==void 0&&(i=""+s),a.key!==void 0&&(i=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:r,key:i,ref:a!==void 0?a:null,props:s}}return An.Fragment=n,An.jsx=t,An.jsxs=t,An}var Fa;function tE(){return Fa||(Fa=1,La.exports=rE()),La.exports}var te=tE();const cn={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};Fe(cn);var qa={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ja;function aE(){return ja||(ja=1,function(e){(function(){var n={}.hasOwnProperty;function t(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,r.call(this,o)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return t.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)n.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(qa)),qa.exports}var sE=aE();const Ee=nE(sE),iE="_borderbox_hicl4_1",oE="_error_hicl4_4",lE="_warning_hicl4_7",dE={borderbox:iE,error:oE,warning:lE};Ee.bind(dE);const uE="_aksjonspunkt_kn1hn_1",gE="_erAksjonspunktApent_kn1hn_4",kE="_erIkkeGodkjentAvBeslutter_kn1hn_8",mE={aksjonspunkt:uE,erAksjonspunktApent:gE,erIkkeGodkjentAvBeslutter:kE};Ee.bind(mE);const wa=({dateString:e})=>te.jsx(Yl,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(e)});Fe(cn);const vE="_floatRight_gekng_1",EE={floatRight:vE},fE=({children:e})=>te.jsx("span",{className:EE.floatRight,children:e});Fe(cn);const yE="_flexColumnNew_1vdv1_1",TE={flexColumnNew:yE},pE=Ee.bind(TE),bn=({children:e,className:n})=>te.jsx("div",{className:pE("flexColumnNew",n),children:e}),RE="_flexRow_1yf0y_1",cE="_spaceBetween_1yf0y_9",AE="_alignItemsToBaseline_1yf0y_12",bE="_alignItemsToFlexEnd_1yf0y_15",hE="_justifyItemsToFlexEnd_1yf0y_18",SE="_wrap_1yf0y_21",_E={flexRow:RE,spaceBetween:cE,alignItemsToBaseline:AE,alignItemsToFlexEnd:bE,justifyItemsToFlexEnd:hE,wrap:SE},NE=Ee.bind(_E),Fr=({children:e,spaceBetween:n=!1,alignItemsToBaseline:t=!1,alignItemsToFlexEnd:r=!1,wrap:a=!1,className:s})=>te.jsx("div",{className:NE("flexRow",{spaceBetween:n},{alignItemsToBaseline:t},{alignItemsToFlexEnd:r},{wrap:a},s),children:e}),IE="_flexContainer_1dk1o_1",OE="_fluid_1dk1o_6",KE="_fullHeight_1dk1o_9",DE="_flexWrap_1dk1o_17",LE={flexContainer:IE,fluid:OE,fullHeight:KE,flexWrap:DE},PE=Ee.bind(LE),FE=({children:e,wrap:n=!1,fullHeight:t=!1})=>te.jsx("div",{className:PE("flexContainer","fluid",{flexWrap:n,fullHeight:t}),children:e});Fe(cn);const qE="_columnStyle_1f13u_1",Xi={columnStyle:qE},jE=Ee.bind(Xi),ge=({children:e="",className:n,hidden:t=!1,colspanAll:r=!1})=>t?null:te.jsx("td",{className:jE(Xi.columnStyle,n),colSpan:r?100:void 0,children:e}),wE="_row_1lxv9_1",ME="_harHover_1lxv9_4",BE="_rowHeader_1lxv9_7",VE="_grayHeader_1lxv9_12",GE="_rowContent_1lxv9_15",HE="_selected_1lxv9_18",UE="_bold_1lxv9_22",xE="_dashedBottomBorder_1lxv9_25",YE="_solidBottomBorder_1lxv9_28",CE="_apLeftBorder_1lxv9_31",$E="_noBottomBorder_1lxv9_34",Zi={row:wE,harHover:ME,rowHeader:BE,grayHeader:VE,rowContent:GE,selected:HE,bold:UE,dashedBottomBorder:xE,solidBottomBorder:YE,apLeftBorder:CE,noBottomBorder:$E},JE=Ee.bind(Zi),WE=(e,n,t)=>r=>{e&&r.button===0&&e(r,n,t)},Qi=e=>e.tagName==="TR"?e:Qi(e.parentElement),Ma=(e,n)=>{const t=Qi(e.target),r=(n?t.nextSibling:t.previousSibling)||t;r&&(r.focus(),e.preventDefault())},zE=(e,n,t,r)=>a=>{a.key==="ArrowDown"?Ma(a,!0):a.key==="ArrowUp"?Ma(a,!1):n&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(n(a,t,r),a.preventDefault()):e&&n&&a.target.tagName!=="TD"&&a.key==="Shift"&&(n(a),a.preventDefault())},XE=e=>n=>{e&&n.target.tagName!=="TD"&&n.key==="Shift"&&(e(n),n.preventDefault())},ht=({id:e,model:n,isHeader:t=!1,hasGrayHeader:r=!1,onMouseDown:a,onKeyDown:s,children:i,noHover:o=!1,isSelected:l=!1,isBold:d=!1,isDashedBottomBorder:u=!1,isSolidBottomBorder:g=!1,isApLeftBorder:k=!1,className:E,useMultiselect:f=!1,hasNoBottomBorder:v=!1})=>te.jsx("tr",{className:JE(E,Zi.row,{rowHeader:t,grayHeader:r,rowContent:!t&&!o,selected:l,harHover:!o,bold:d,dashedBottomBorder:u,solidBottomBorder:g,noBottomBorder:v,apLeftBorder:k}),onMouseDown:WE(a,e,n),onKeyDown:zE(f,s,e,n),onKeyUp:f?XE(s):void 0,tabIndex:0,children:i}),ZE="_table_2cnpl_1",QE="_rowHover_2cnpl_25",ef={table:ZE,rowHover:QE},nf=Ee.bind(ef),rf="EMPTY",St=D.forwardRef(({headerTextCodes:e=[],headerColumnContent:n=[],classNameTable:t="",noHover:r=!1,hasGrayHeader:a=!1,children:s},i)=>te.jsxs("table",{ref:i,className:nf("table",{[t]:t,rowHover:!r}),children:[te.jsx("thead",{children:te.jsxs(ht,{isHeader:!0,noHover:r,hasGrayHeader:a,children:[e.map(o=>typeof o=="string"&&o.startsWith(rf)?te.jsx(ge,{children:" "},o):te.jsx(ge,{children:te.jsx(Q,{id:o})},o)),n.map(o=>te.jsx(ge,{children:o},o.key))]})}),te.jsx("tbody",{children:Array.isArray(s)?D.Children.map(s,o=>D.cloneElement(o,{noHover:r})):D.cloneElement(s,{noHover:r})})]}));St.displayName="Table";const tf="_hidden_1pb4f_1",af="_active_1pb4f_8",sf="_activeRow_1pb4f_15 _active_1pb4f_8",of="_toggleIcon_1pb4f_19",lf="_colTopPadding_1pb4f_22",df={hidden:tf,active:af,activeRow:sf,toggleIcon:of,colTopPadding:lf};Ee.bind(df);Fe(cn);const uf="_fourPx_qda5k_1",gf="_eightPx_qda5k_4",kf="_sixteenPx_qda5k_7",mf="_twentyPx_qda5k_10",vf="_thirtyTwoPx_qda5k_13",Ef="_fourtyPx_qda5k_16",ff={fourPx:uf,eightPx:gf,sixteenPx:kf,twentyPx:mf,thirtyTwoPx:vf,fourtyPx:Ef},yf=Ee.bind(ff),_e=({fourPx:e=!1,eightPx:n=!1,sixteenPx:t=!1,twentyPx:r=!1,thirtyTwoPx:a=!1,fourtyPx:s=!1})=>te.jsx("div",{className:yf({fourPx:e,eightPx:n,sixteenPx:t,twentyPx:r,thirtyTwoPx:a,fourtyPx:s})});Fe(cn);const Tf="_divider_1t980_1",pf="_dividerParagraf_1t980_8",Rf="_leftPanel_1t980_11",cf="_rightPanel_1t980_14",Af={divider:Tf,dividerParagraf:pf,leftPanel:Rf,rightPanel:cf};Ee.bind(Af);const bf="_editedIcon_ulrjl_1",hf={editedIcon:bf},Sf=Ee.bind(hf),_f=({className:e=""})=>te.jsx("span",{"data-testid":"editedIcon",className:Sf("editedIcon",e),children:te.jsx(Hu,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})}),Nf=(e,n)=>e.filter(t=>t.opptjeningsår===n),eo=e=>e.aktivitetStatus+e.arbeidsgiverId,If=(e,n,t)=>{const r=e.arbeidsgiverId?n[e.arbeidsgiverId]:void 0;return r?r.erPrivatPerson?r.fødselsdato?`${r.navn} (${de(r.fødselsdato).format(Wn)})`:r.navn:r.identifikator?`${r.navn} (${r.identifikator})`:r.navn:e.aktivitetStatus?gs(t)(e.aktivitetStatus,kr.AKTIVITET_STATUS):""},Of=(e,n,t)=>({identifikator:eo(e),visningsnavn:If(e,n,t),utbetaltTilSøker:e.erBrukerMottaker?e.årsbeløp:0,utbetaltIRefusjon:e.erBrukerMottaker?0:e.årsbeløp}),Kf=(e,n,t)=>{const r=[];return e.forEach(a=>{const s=a.erBrukerMottaker?a.årsbeløp:0,i=a.erBrukerMottaker?0:a.årsbeløp,o=eo(a),l=r.find(d=>d.identifikator===o);l?(l.utbetaltTilSøker+=s,l.utbetaltIRefusjon+=i):r.push(Of(a,n,t))}),r},Df=["TilkjentYtelse.Feriepenger.AndelNavn","TilkjentYtelse.Feriepenger.GrunnlagRefusjon","TilkjentYtelse.Feriepenger.GrunnlagSøker"],_t=({alleAndeler:e,opptjeningsår:n,alleKodeverk:t,arbeidsgiverOpplysningerPerId:r})=>{const a=!e||e.length<1,s=m.useMemo(()=>a?void 0:Nf(e,n),[e,n]),i=m.useMemo(()=>s?Kf(s,r,t):[],[s]);return a?null:b.jsxs(b.Fragment,{children:[b.jsx(_n,{size:"small",children:b.jsx(Q,{id:"TilkjentYtelse.Feriepenger.Opptjeningsår",values:{år:n}})}),b.jsx(St,{headerTextCodes:Df,children:i.map(o=>b.jsxs(ht,{children:[b.jsx(ge,{children:b.jsx(ie,{size:"small",children:o.visningsnavn})}),b.jsx(ge,{children:b.jsx(ie,{size:"small",children:o.utbetaltIRefusjon})}),b.jsx(ge,{children:b.jsx(ie,{size:"small",children:o.utbetaltTilSøker})})]},o.identifikator))})]})};_t.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPrAar",props:{alleAndeler:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"opptjeningsår",value:{name:"number",required:!0}},{key:"årsbeløp",value:{name:"number",required:!0}},{key:"erBrukerMottaker",value:{name:"boolean",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>`}],raw:"FeriepengegrunnlagAndel[]"},description:""},opptjeningsår:{required:!0,tsType:{name:"number"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};_t.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPrAar",props:{alleAndeler:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"opptjeningsår",value:{name:"number",required:!0}},{key:"årsbeløp",value:{name:"number",required:!0}},{key:"erBrukerMottaker",value:{name:"boolean",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>`}],raw:"FeriepengegrunnlagAndel[]"},description:""},opptjeningsår:{required:!0,tsType:{name:"number"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Lf=e=>{const n=e.map(t=>t.opptjeningsår).sort((t,r)=>t-r);return[...new Set(n)]},Pf=()=>b.jsx(dt,{size:"small",children:b.jsx(Q,{id:"TilkjentYtelse.Feriepenger.Tittel"})}),Nt=({feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:t,erPanelÅpent:r,togglePanel:a})=>{const{andeler:s}=e,i=!s||s.length<1,o=m.useMemo(()=>i?[]:Lf(s),[s]);return i?null:b.jsx(ze,{children:b.jsxs(ze.Item,{open:r,children:[b.jsx(ze.Header,{onClick:a,children:Pf()}),b.jsx(ze.Content,{children:o.map(l=>b.jsxs("div",{children:[b.jsx(_e,{sixteenPx:!0},`spacer_${l}`),b.jsx(_t,{alleAndeler:s,opptjeningsår:l,alleKodeverk:n,arbeidsgiverOpplysningerPerId:t},`tabell_${l}`)]},`div_${l}`))})]})})};Nt.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPanel",props:{feriepengegrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: FeriepengegrunnlagAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"opptjeningsår",value:{name:"number",required:!0}},{key:"årsbeløp",value:{name:"number",required:!0}},{key:"erBrukerMottaker",value:{name:"boolean",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>`}],raw:"FeriepengegrunnlagAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: FeriepengegrunnlagAndel[];
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},erPanelÅpent:{required:!0,tsType:{name:"boolean"},description:""},togglePanel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};Nt.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPanel",props:{feriepengegrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: FeriepengegrunnlagAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"opptjeningsår",value:{name:"number",required:!0}},{key:"årsbeløp",value:{name:"number",required:!0}},{key:"erBrukerMottaker",value:{name:"boolean",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>`}],raw:"FeriepengegrunnlagAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: FeriepengegrunnlagAndel[];
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},erPanelÅpent:{required:!0,tsType:{name:"boolean"},description:""},togglePanel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const It=({feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:t})=>{const[r,a]=m.useState(!1);return b.jsx(Nt,{feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:t,erPanelÅpent:r,togglePanel:()=>a(!r)})};It.__docgenInfo={description:"",methods:[],displayName:"FeriepengerIndex",props:{feriepengegrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: FeriepengegrunnlagAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"opptjeningsår",value:{name:"number",required:!0}},{key:"årsbeløp",value:{name:"number",required:!0}},{key:"erBrukerMottaker",value:{name:"boolean",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>`}],raw:"FeriepengegrunnlagAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: FeriepengegrunnlagAndel[];
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};It.__docgenInfo={description:"",methods:[],displayName:"FeriepengerIndex",props:{feriepengegrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: FeriepengegrunnlagAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"opptjeningsår",value:{name:"number",required:!0}},{key:"årsbeløp",value:{name:"number",required:!0}},{key:"erBrukerMottaker",value:{name:"boolean",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>`}],raw:"FeriepengegrunnlagAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: FeriepengegrunnlagAndel[];
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Ff={KVINNE:"K",MANN:"M",UDEFINERT:"-"},qf="_detailsPeriode_1r02x_1",jf="_margin_1r02x_9",wf="_fix_1r02x_13",$n={detailsPeriode:qf,margin:jf,fix:wf},Mf={MØDREKVOTE:"Mødrekvote",FEDREKVOTE:"Fedrekvote",FELLESPERIODE:"Fellesperiode",FORELDREPENGER_FØR_FØDSEL:"Foreldrepenger før fødsel",FORELDREPENGER:"Foreldrepenger",FLERBARNSDAGER:"Flerbarnsdager",UDEFINERT:"-"},Bf=e=>e?`...${e.substring(e.length-4,e.length)}`:"",Vf=(e,n,t)=>{const r=t[e.arbeidsgiverReferanse];return!r||!r.navn?e.arbeidsforholdType?n(e.arbeidsforholdType,kr.OPPTJENING_AKTIVITET_TYPE):"":r.erPrivatPerson?`${r.navn} (${r.fødselsdato})`:`${r.navn} (${r.identifikator})${Bf(e.eksternArbeidsforholdId)}`},Gf=(e=!1)=>e?["TilkjentYtelse.PeriodeData.Andel","TilkjentYtelse.PeriodeData.Utbetalingsgrad","TilkjentYtelse.PeriodeData.Refusjon","TilkjentYtelse.PeriodeData.TilSoker","TilkjentYtelse.PeriodeData.SisteUtbDato"]:["TilkjentYtelse.PeriodeData.Andel","TilkjentYtelse.PeriodeData.KontoType","TilkjentYtelse.PeriodeData.Gradering","TilkjentYtelse.PeriodeData.Utbetalingsgrad","TilkjentYtelse.PeriodeData.Refusjon","TilkjentYtelse.PeriodeData.TilSoker","TilkjentYtelse.PeriodeData.SisteUtbDato"],Hf=(e,n,t)=>{switch(e.aktivitetStatus){case me.ARBEIDSTAKER:return Vf(e,n,t);case me.FRILANSER:return b.jsx(Q,{id:"TilkjentYtelse.PeriodeData.Frilans"});case me.SELVSTENDIG_NAERINGSDRIVENDE:return b.jsx(Q,{id:"TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende"});case me.DAGPENGER:return b.jsx(Q,{id:"TilkjentYtelse.PeriodeData.Dagpenger"});case me.ARBEIDSAVKLARINGSPENGER:return b.jsx(Q,{id:"TilkjentYtelse.PeriodeData.AAP"});case me.MILITAER_ELLER_SIVIL:return b.jsx(Q,{id:"TilkjentYtelse.PeriodeData.Militaer"});case me.BRUKERS_ANDEL:return b.jsx(Q,{id:"TilkjentYtelse.PeriodeData.BrukersAndel"});default:return""}},Uf=e=>{if(e===void 0)return null;const n=e.uttak&&e.uttak.gradering===!0?"TilkjentYtelse.PeriodeData.Ja":"TilkjentYtelse.PeriodeData.Nei";return b.jsx(Q,{id:n})},Ot=({selectedItemData:e,callbackForward:n,callbackBackward:t,alleKodeverk:r,isSoknadSvangerskapspenger:a,arbeidsgiverOpplysningerPerId:s,lukkPeriode:i})=>{const o=iu(e.fom,e.tom),l=Fn(),d=gs(r),u=m.useCallback((...g)=>b.jsx("b",{children:g}),[]);return b.jsxs(eE,{border:!0,children:[b.jsxs(FE,{children:[b.jsxs(Fr,{spaceBetween:!0,children:[b.jsx(bn,{children:b.jsx(_n,{size:"small",children:b.jsx(Q,{id:"TilkjentYtelse.PeriodeData.Detaljer"})})}),b.jsxs(bn,{className:$n.fix,children:[b.jsx(Xe,{className:$n.margin,size:"xsmall",icon:b.jsx(Cs,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:l.formatMessage({id:"Timeline.prevPeriod"}),children:b.jsx(Q,{id:"Timeline.prevPeriodShort"})}),b.jsx(Xe,{className:$n.margin,size:"xsmall",icon:b.jsx($s,{"aria-hidden":!0}),onClick:n,variant:"secondary-neutral",type:"button",title:l.formatMessage({id:"Timeline.nextPeriod"}),iconPosition:"right",children:b.jsx(Q,{id:"Timeline.nextPeriodShort"})}),b.jsx(Xe,{size:"xsmall",icon:b.jsx(Ju,{"aria-hidden":!0}),onClick:i,variant:"tertiary-neutral",type:"button",title:l.formatMessage({id:"Timeline.lukkPeriode"})})]})]}),b.jsx(_e,{sixteenPx:!0}),b.jsxs("div",{className:$n.detailsPeriode,children:[b.jsxs(Fr,{spaceBetween:!0,children:[b.jsx(bn,{children:b.jsx(_n,{size:"small",children:b.jsx(Q,{id:"TilkjentYtelse.PeriodeData.Periode",values:{fomVerdi:de(e.fom).format(Wn).toString(),tomVerdi:de(e.tom).format(Wn).toString()}})})}),b.jsx(bn,{children:b.jsx(ie,{size:"small",children:o.formattedString})})]}),b.jsx(_e,{eightPx:!0}),b.jsx(Fr,{children:b.jsx(bn,{children:b.jsx(Q,{id:"TilkjentYtelse.PeriodeData.Dagsats",values:{dagsatsVerdi:e.dagsats,b:u}})})})]})]}),b.jsx(_e,{sixteenPx:!0}),e.andeler&&e.andeler.length!==0&&b.jsx(St,{headerTextCodes:Gf(a),children:e.andeler.map((g,k)=>b.jsxs(ht,{children:[b.jsx(ge,{children:Hf(g,d,s)}),!a&&b.jsx(ge,{children:b.jsx(ie,{size:"small",children:Mf[g.uttak.stonadskontoType]})}),!a&&b.jsx(ge,{children:b.jsx(ie,{size:"small",children:Uf(g)})}),b.jsx(ge,{children:b.jsx(ie,{size:"small",children:g.utbetalingsgrad?g.utbetalingsgrad:""})}),b.jsx(ge,{children:b.jsx(ie,{size:"small",children:g.aktivitetStatus===me.ARBEIDSTAKER&&g.refusjon?g.refusjon:""})}),b.jsx(ge,{children:b.jsx(ie,{size:"small",children:g.tilSoker?g.tilSoker:""})}),b.jsx(ge,{children:b.jsx(ie,{size:"small",children:g.sisteUtbetalingsdato?de(g.sisteUtbetalingsdato).format(Wn):""})})]},`index${k+1}`))})]})};Ot.__docgenInfo={description:`TimeLineData

Viser opp data fra valgt periode i tilkjent ytelse-tidslinjen`,methods:[],displayName:"TilkjentYtelseTimeLineData",props:{selectedItemData:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"number",required:!0}},{key:"tilSoker",value:{name:"number",required:!0}},{key:"uttak",value:{name:"signature",type:"object",raw:`{
  stonadskontoType: string;
  gradering: boolean;
}`,signature:{properties:[{key:"stonadskontoType",value:{name:"string",required:!0}},{key:"gradering",value:{name:"boolean",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"sisteUtbetalingsdato",value:{name:"string",required:!0}},{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}>`}],raw:"BeregningsresultatPeriodeAndel[]",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}>`},description:""},callbackForward:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},callbackBackward:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},isSoknadSvangerskapspenger:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};Ot.__docgenInfo={description:`TimeLineData

Viser opp data fra valgt periode i tilkjent ytelse-tidslinjen`,methods:[],displayName:"TilkjentYtelseTimeLineData",props:{selectedItemData:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"number",required:!0}},{key:"tilSoker",value:{name:"number",required:!0}},{key:"uttak",value:{name:"signature",type:"object",raw:`{
  stonadskontoType: string;
  gradering: boolean;
}`,signature:{properties:[{key:"stonadskontoType",value:{name:"string",required:!0}},{key:"gradering",value:{name:"boolean",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"sisteUtbetalingsdato",value:{name:"string",required:!0}},{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}>`}],raw:"BeregningsresultatPeriodeAndel[]",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}>`},description:""},callbackForward:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},callbackBackward:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},isSoknadSvangerskapspenger:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const xf="_space_ckypy_1",Yf="_margin_ckypy_5",Cf="_readOnlyBlokk_ckypy_9",on={space:xf,margin:Yf,readOnlyBlokk:Cf},$f=e=>(e.andeler||[]).filter(t=>t.uttak&&t.uttak.gradering===!0).length>0,Jf=e=>{const n=e.gjeldende||e.oppgitt;return n.soknadType===Dn.FODSEL?n.avklartBarn&&n.avklartBarn.length>0?{dato:n.avklartBarn[0].fodselsdato,textId:"TilkjentYtelse.Fodselsdato"}:{dato:n.termindato,textId:"TilkjentYtelse.Termindato"}:n.omsorgsovertakelseDato?{dato:n.omsorgsovertakelseDato,textId:"TilkjentYtelse.Omsorgsovertakelsesdato"}:{dato:n.adopsjonFodelsedatoer?n.adopsjonFodelsedatoer[0]:void 0,textId:"TilkjentYtelse.Fodselsdato"}},Wf=(e=[])=>e.filter(n=>{var t;return((t=n.andeler)==null?void 0:t[0])&&n.dagsats}).map((n,t)=>({erGradert:$f(n),start:de(n.fom).toDate(),end:de(n.tom).add(1,"days").toDate(),id:t,periode:n})),zf=(e,n)=>{var r;return((r=n[kr.RELASJONSROLLE_TYPE].find(a=>a.kode===e.relasjonsRolleType))==null?void 0:r.navn)||""},Xf=(e,n)=>{const t=de(e);return t.isBefore(n)?n.subtract(5,"days"):t},Kt=({beregningsresultatPeriode:e,soknadDate:n,familieHendelseSamling:t,hovedsokerKjonnKode:r,alleKodeverk:a,arbeidsgiverOpplysningerPerId:s,fagsak:i})=>{const o=Fn(),[l,d]=m.useState(),u=m.useMemo(()=>Wf(e),[e]),g=m.useCallback(()=>{d(null)},[]),k=m.useCallback(()=>{const P=u.findIndex(A=>A.id===(l==null?void 0:l.id))+1;P<u.length&&d(u[P])},[u,l,d]),E=m.useCallback(()=>{const P=u.findIndex(A=>A.id===(l==null?void 0:l.id))-1;P>=0&&d(u[P])},[u,l,d]),f=m.useCallback(P=>{d(u.find(A=>A.id===P))},[d,u]),v=de(u[0].start),h=de(u[u.length-1].end),[y,T]=m.useState(v),[c,_]=m.useState(h),p=()=>{y.subtract(1,"month").isBefore(v)||(T(y.subtract(1,"month")),_(c.subtract(1,"month")))},K=()=>{c.add(1,"month").isAfter(h)||(T(y.add(1,"month")),_(c.add(1,"month")))},I=()=>{y.add(3,"month").isAfter(c)||(T(y.add(1,"month")),_(c.subtract(1,"month")))},S=()=>{c.add(1,"month").diff(y.subtract(1,"month"),"months")<36&&(T(y.subtract(1,"month")),_(c.add(1,"month")))},F=m.useMemo(()=>Jf(t),[t]);return b.jsxs(b.Fragment,{children:[b.jsxs(Pe,{startDate:y.toDate(),endDate:c.add(1,"days").toDate(),children:[b.jsxs(Pe.Pin,{date:de(n).toDate(),children:[b.jsx(ie,{children:b.jsx(Q,{id:"TilkjentYtelse.Soknadsdato"})}),b.jsx(ie,{children:b.jsx(wa,{dateString:n})})]}),F.dato&&b.jsxs(Pe.Pin,{date:Xf(F.dato,y).toDate(),children:[b.jsx(ie,{children:b.jsx(Q,{id:F.textId})}),b.jsx(ie,{children:b.jsx(wa,{dateString:F.dato})})]}),b.jsx(Pe.Row,{label:zf(i,a),icon:r===Ff.KVINNE?b.jsx(ju,{width:20,height:20,color:"var(--a-red-200)"}):b.jsx(Cu,{width:20,height:20,color:"var(--a-blue-600)"}),children:u.map(P=>b.jsx(Pe.Period,{start:P.start,end:P.end,status:"success",onSelectPeriod:()=>f(P.id),isActive:(l==null?void 0:l.id)===P.id,icon:P.erGradert?b.jsx(Vu,{"aria-hidden":!0}):b.jsx(Lu,{"aria-hidden":!0}),title:P.erGradert?o.formatMessage({id:"TilkjentYtelse.GradertPeriode"}):""},P.id))})]}),b.jsx(_e,{twentyPx:!0}),b.jsxs(fE,{children:[b.jsx(Xe,{className:on.margin,size:"small",icon:b.jsx(xu,{"aria-hidden":!0}),onClick:I,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ZoomInn"})}),b.jsx(Xe,{className:on.margin,size:"small",icon:b.jsx(Mu,{"aria-hidden":!0}),onClick:S,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ZoomUt"})}),b.jsx(Xe,{className:on.margin,size:"small",icon:b.jsx(Cs,{"aria-hidden":!0}),onClick:p,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ScrollTilVenstre"})}),b.jsx(Xe,{className:on.margin,size:"small",icon:b.jsx($s,{"aria-hidden":!0}),onClick:K,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ScrollTilHogre"})})]}),b.jsx("div",{className:on.space}),l&&b.jsxs(b.Fragment,{children:[b.jsx(_e,{eightPx:!0}),b.jsx(Ot,{alleKodeverk:a,selectedItemData:l.periode,callbackForward:k,callbackBackward:E,isSoknadSvangerskapspenger:i.fagsakYtelseType===at.SVANGERSKAPSPENGER,arbeidsgiverOpplysningerPerId:s,lukkPeriode:g})]})]})};Kt.__docgenInfo={description:`TilkjentYtelse

Masserer data og populerer felten samt formatterar tidslinjen for tilkjent ytelse`,methods:[],displayName:"TilkjentYtelse",props:{beregningsresultatPeriode:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"number",required:!0}},{key:"tilSoker",value:{name:"number",required:!0}},{key:"uttak",value:{name:"signature",type:"object",raw:`{
  stonadskontoType: string;
  gradering: boolean;
}`,signature:{properties:[{key:"stonadskontoType",value:{name:"string",required:!0}},{key:"gradering",value:{name:"boolean",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"sisteUtbetalingsdato",value:{name:"string",required:!0}},{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}>`}],raw:"BeregningsresultatPeriodeAndel[]",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}>`}],raw:"BeregningsresultatPeriode[]"},description:""},soknadDate:{required:!0,tsType:{name:"string"},description:""},familieHendelseSamling:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}`,signature:{properties:[{key:"oppgitt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"gjeldende",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"register",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}}]}}],raw:`Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}>`},description:""},hovedsokerKjonnKode:{required:!1,tsType:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};Kt.__docgenInfo={description:`TilkjentYtelse

Masserer data og populerer felten samt formatterar tidslinjen for tilkjent ytelse`,methods:[],displayName:"TilkjentYtelse",props:{beregningsresultatPeriode:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"number",required:!0}},{key:"tilSoker",value:{name:"number",required:!0}},{key:"uttak",value:{name:"signature",type:"object",raw:`{
  stonadskontoType: string;
  gradering: boolean;
}`,signature:{properties:[{key:"stonadskontoType",value:{name:"string",required:!0}},{key:"gradering",value:{name:"boolean",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"sisteUtbetalingsdato",value:{name:"string",required:!0}},{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}>`}],raw:"BeregningsresultatPeriodeAndel[]",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}>`}],raw:"BeregningsresultatPeriode[]"},description:""},soknadDate:{required:!0,tsType:{name:"string"},description:""},familieHendelseSamling:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}`,signature:{properties:[{key:"oppgitt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"gjeldende",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"register",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}}]}}],raw:`Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}>`},description:""},hovedsokerKjonnKode:{required:!1,tsType:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Zf=e=>{var n;return e?(n=e.find(t=>t.definisjon===ur.VURDER_TILBAKETREKK))==null?void 0:n.begrunnelse:void 0},Dt=({beregningresultat:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:t,feriepengegrunnlag:r,familieHendelseSamling:a,personoversikt:s,soknad:i,aksjonspunkter:o,fagsak:l})=>{var g,k;const d=m.useMemo(()=>Zf(o),[o]),u=(g=i.søknadsfrist)!=null&&g.mottattDato?(k=i.søknadsfrist)==null?void 0:k.mottattDato:i.mottattDato;return b.jsxs(b.Fragment,{children:[b.jsx(dt,{size:"small",children:b.jsx(Q,{id:"TilkjentYtelse.Title"})}),b.jsx(_e,{thirtyTwoPx:!0}),e&&b.jsx(Kt,{beregningsresultatPeriode:e.perioder,soknadDate:u,familieHendelseSamling:a,hovedsokerKjonnKode:s!=null&&s.bruker?s.bruker.kjønn:void 0,alleKodeverk:n,arbeidsgiverOpplysningerPerId:t,fagsak:l}),r&&b.jsxs(b.Fragment,{children:[b.jsx(_e,{thirtyTwoPx:!0}),b.jsx(It,{feriepengegrunnlag:r,arbeidsgiverOpplysningerPerId:t,alleKodeverk:n}),b.jsx(_e,{thirtyTwoPx:!0})]}),d&&b.jsxs(b.Fragment,{children:[b.jsx(_n,{children:b.jsx(Q,{id:"TilkjentYtelse.VurderTilbaketrekk.Beskrivelse"})}),b.jsx(_e,{sixteenPx:!0}),b.jsxs(ie,{className:on.readOnlyBlokk,children:[d," ",b.jsx(_f,{})]})]})]})};Dt.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelsePanel",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  perioder?: BeregningsresultatPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"number",required:!0}},{key:"tilSoker",value:{name:"number",required:!0}},{key:"uttak",value:{name:"signature",type:"object",raw:`{
  stonadskontoType: string;
  gradering: boolean;
}`,signature:{properties:[{key:"stonadskontoType",value:{name:"string",required:!0}},{key:"gradering",value:{name:"boolean",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"sisteUtbetalingsdato",value:{name:"string",required:!0}},{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}>`}],raw:"BeregningsresultatPeriodeAndel[]",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}>`}],raw:"BeregningsresultatPeriode[]",required:!1}}]}}],raw:`Readonly<{
  perioder?: BeregningsresultatPeriode[];
}>`},description:""},familieHendelseSamling:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}`,signature:{properties:[{key:"oppgitt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"gjeldende",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"register",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}}]}}],raw:`Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}>`},description:""},personoversikt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}`,signature:{properties:[{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}],raw:"PersonopplysningerBasis[]",required:!0}}]}}],raw:`Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>`},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},feriepengegrunnlag:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: FeriepengegrunnlagAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"opptjeningsår",value:{name:"number",required:!0}},{key:"årsbeløp",value:{name:"number",required:!0}},{key:"erBrukerMottaker",value:{name:"boolean",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>`}],raw:"FeriepengegrunnlagAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: FeriepengegrunnlagAndel[];
}>`},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};Dt.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelsePanel",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  perioder?: BeregningsresultatPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"number",required:!0}},{key:"tilSoker",value:{name:"number",required:!0}},{key:"uttak",value:{name:"signature",type:"object",raw:`{
  stonadskontoType: string;
  gradering: boolean;
}`,signature:{properties:[{key:"stonadskontoType",value:{name:"string",required:!0}},{key:"gradering",value:{name:"boolean",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"sisteUtbetalingsdato",value:{name:"string",required:!0}},{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}>`}],raw:"BeregningsresultatPeriodeAndel[]",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}>`}],raw:"BeregningsresultatPeriode[]",required:!1}}]}}],raw:`Readonly<{
  perioder?: BeregningsresultatPeriode[];
}>`},description:""},familieHendelseSamling:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}`,signature:{properties:[{key:"oppgitt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"gjeldende",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"register",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}}]}}],raw:`Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}>`},description:""},personoversikt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}`,signature:{properties:[{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}],raw:"PersonopplysningerBasis[]",required:!0}}]}}],raw:`Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>`},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},feriepengegrunnlag:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: FeriepengegrunnlagAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"opptjeningsår",value:{name:"number",required:!0}},{key:"årsbeløp",value:{name:"number",required:!0}},{key:"erBrukerMottaker",value:{name:"boolean",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>`}],raw:"FeriepengegrunnlagAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: FeriepengegrunnlagAndel[];
}>`},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Qf={"TilkjentYtelse.Title":"Tilkjent ytelse","TilkjentYtelse.VurderTilbaketrekk.Beskrivelse":"Saksbehandler har vurdert om ytelsen skal endres fra direkte utbetaling til refusjon til arbeidsgiver, og tilbakekreves fra bruker, eller om det er en sak mellom arbeidstaker og arbeidsgiver.","TilkjentYtelse.Stonadinfo.Stonadsdager":"Stønadsdager","TilkjentYtelse.PeriodeData.Detaljer":"Detaljer for valgt periode","TilkjentYtelse.PeriodeData.UkerDager":"{weeks} uker {days} dager","TilkjentYtelse.PeriodeData.Godkjent":"Godkjent","TilkjentYtelse.PeriodeData.Dagsats":"Utbetalt dagsats: <b>{dagsatsVerdi}</b>","TilkjentYtelse.PeriodeData.Andel":"Andel","TilkjentYtelse.PeriodeData.KontoType":"Stønadskonto","TilkjentYtelse.PeriodeData.Gradering":"Gradering","TilkjentYtelse.PeriodeData.Utbetalingsgrad":"Utb.grad","TilkjentYtelse.PeriodeData.Refusjon":"Utbetalt refusjon","TilkjentYtelse.PeriodeData.TilSoker":"Utbetalt til søker","TilkjentYtelse.PeriodeData.SisteUtbDato":"Siste innvilgede utb.dato","TilkjentYtelse.PeriodeData.Periode":"{fomVerdi} - {tomVerdi}","TilkjentYtelse.PeriodeData.Ja":"Ja","TilkjentYtelse.PeriodeData.Nei":"Nei","TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende":"Selvstendig næringsdrivende","TilkjentYtelse.PeriodeData.Frilans":"Frilanser","TilkjentYtelse.PeriodeData.Militaer":"Militær","TilkjentYtelse.PeriodeData.Dagpenger":"Dagpenger","TilkjentYtelse.PeriodeData.AAP":"Arbeidsavklaringspenger","TilkjentYtelse.PeriodeData.BrukersAndel":"Brukers andel","TilkjentYtelse.Feriepenger.Tittel":"Feriepengegrunnlag","TilkjentYtelse.Feriepenger.Opptjeningsår":"Opptjent i {år}","TilkjentYtelse.Feriepenger.AndelNavn":"Andel","TilkjentYtelse.Feriepenger.GrunnlagSøker":"Beløp til søker","TilkjentYtelse.Feriepenger.GrunnlagRefusjon":"Beløp til arbeidsgiver","TilkjentYtelse.Soknadsdato":"Søknadsdato","TilkjentYtelse.Fodselsdato":"Fødselsdato","TilkjentYtelse.Termindato":"Termindato","TilkjentYtelse.GradertPeriode":"Gradert periode","TilkjentYtelse.ZoomInn":"Zoom inn","TilkjentYtelse.ZoomUt":"Zoom ut","TilkjentYtelse.ScrollTilVenstre":"Scroll til venstre","TilkjentYtelse.ScrollTilHogre":"Scroll til høyre","TilkjentYtelse.Omsorgsovertakelsesdato":"Omsorgsovertakelsesdato","Timeline.lukkPeriode":"Lukk periode","Malform.Beskrivelse":"Foretrukket språk","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Neste periode","Timeline.nextPeriodShort":"Neste","Timeline.prevPeriod":"Forrige periode","Timeline.prevPeriodShort":"Forrige","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},ey=Fe(Qf),Lt=({beregningresultat:e,familiehendelse:n,personoversikt:t,soknad:r,fagsak:a,aksjonspunkter:s,alleKodeverk:i,arbeidsgiverOpplysningerPerId:o,feriepengegrunnlag:l})=>b.jsx(Gl,{value:ey,children:b.jsx(Dt,{beregningresultat:e,familieHendelseSamling:n,personoversikt:t,soknad:r,fagsak:a,aksjonspunkter:s,alleKodeverk:i,arbeidsgiverOpplysningerPerId:o,feriepengegrunnlag:l})});Lt.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelseProsessIndex",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  perioder?: BeregningsresultatPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"number",required:!0}},{key:"tilSoker",value:{name:"number",required:!0}},{key:"uttak",value:{name:"signature",type:"object",raw:`{
  stonadskontoType: string;
  gradering: boolean;
}`,signature:{properties:[{key:"stonadskontoType",value:{name:"string",required:!0}},{key:"gradering",value:{name:"boolean",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"sisteUtbetalingsdato",value:{name:"string",required:!0}},{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}>`}],raw:"BeregningsresultatPeriodeAndel[]",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}>`}],raw:"BeregningsresultatPeriode[]",required:!1}}]}}],raw:`Readonly<{
  perioder?: BeregningsresultatPeriode[];
}>`},description:""},familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}`,signature:{properties:[{key:"oppgitt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"gjeldende",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"register",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}}]}}],raw:`Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}>`},description:""},personoversikt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}`,signature:{properties:[{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}],raw:"PersonopplysningerBasis[]",required:!0}}]}}],raw:`Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>`},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},feriepengegrunnlag:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: FeriepengegrunnlagAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"opptjeningsår",value:{name:"number",required:!0}},{key:"årsbeløp",value:{name:"number",required:!0}},{key:"erBrukerMottaker",value:{name:"boolean",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>`}],raw:"FeriepengegrunnlagAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: FeriepengegrunnlagAndel[];
}>`},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}],raw:"Vilkar[]"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"any"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};Lt.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelseProsessIndex",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  perioder?: BeregningsresultatPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"number",required:!0}},{key:"tilSoker",value:{name:"number",required:!0}},{key:"uttak",value:{name:"signature",type:"object",raw:`{
  stonadskontoType: string;
  gradering: boolean;
}`,signature:{properties:[{key:"stonadskontoType",value:{name:"string",required:!0}},{key:"gradering",value:{name:"boolean",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"sisteUtbetalingsdato",value:{name:"string",required:!0}},{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}>`}],raw:"BeregningsresultatPeriodeAndel[]",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}>`}],raw:"BeregningsresultatPeriode[]",required:!1}}]}}],raw:`Readonly<{
  perioder?: BeregningsresultatPeriode[];
}>`},description:""},familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}`,signature:{properties:[{key:"oppgitt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"gjeldende",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"register",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}}]}}],raw:`Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}>`},description:""},personoversikt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}`,signature:{properties:[{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}],raw:"PersonopplysningerBasis[]",required:!0}}]}}],raw:`Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>`},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},feriepengegrunnlag:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: FeriepengegrunnlagAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"opptjeningsår",value:{name:"number",required:!0}},{key:"årsbeløp",value:{name:"number",required:!0}},{key:"erBrukerMottaker",value:{name:"boolean",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>`}],raw:"FeriepengegrunnlagAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: FeriepengegrunnlagAndel[];
}>`},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}],raw:"Vilkar[]"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"any"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};const ny={fagsakYtelseType:at.FORELDREPENGER,relasjonsRolleType:ms.MOR},ry={uuid:"1",versjon:1},no={gjeldende:{avklartBarn:[{fodselsdato:"2019-01-01"}],omsorgsovertakelseDato:"2019-01-01",soknadType:Dn.FODSEL}},ty={bruker:{kjønn:ks.KVINNE}},ay={perioder:[{andeler:[{uttak:{stonadskontoType:jr.FELLESPERIODE},aktivitetStatus:me.ARBEIDSTAKER,arbeidsforholdType:qr.NYTT_ARBEIDSFORHOLD}],fom:"2018-01-01",tom:"2019-01-10",dagsats:1e3},{andeler:[{uttak:{stonadskontoType:jr.FORELDREPENGER},aktivitetStatus:me.ARBEIDSTAKER,arbeidsforholdType:qr.NYTT_ARBEIDSFORHOLD}],fom:"2019-02-01",tom:"2019-06-10",dagsats:100}]},sy={mottattDato:"2019-01-10",soknadType:Dn.FODSEL,omsorgsovertakelseDato:"2019-01-10",fodselsdatoer:{1:"2019-01-01"},adopsjonFodelsedatoer:{1:"2019-01-01"},termindato:"2019-02-01"},iy={1:{erPrivatPerson:!1,identifikator:"973861778",navn:"EQUINOR ASA AVD STATOIL SOKKELVIRKSOMHET"}},vy={title:"prosess/prosess-tilkjent-ytelse",component:Lt,args:{submitCallback:mo("button-click"),readOnlySubmitButton:!0,behandling:ry,alleKodeverk:Hd,isReadOnly:!1,isAksjonspunktOpen:!0,status:"",vilkar:[],alleMerknaderFraBeslutter:{},setFormData:()=>{},beregningresultat:ay,familiehendelse:no,personoversikt:ty,soknad:sy,fagsak:ny,arbeidsgiverOpplysningerPerId:iy}},je={args:{aksjonspunkter:[]}},we={args:{aksjonspunkter:[{begrunnelse:"Dette er en begrunnelse saksbehandler tidligere har gjort.",definisjon:ur.VURDER_TILBAKETREKK,status:tt.UTFORT}]}},Me={args:{aksjonspunkter:[{definisjon:ur.VURDER_TILBAKETREKK,status:tt.OPPRETTET}],feriepengegrunnlag:{andeler:[{aktivitetStatus:me.ARBEIDSTAKER,opptjeningsår:2,årsbeløp:5e5,erBrukerMottaker:!0}]}}},Be={args:{aksjonspunkter:[],familiehendelse:{...no,gjeldende:{avklartBarn:[{fodselsdato:"2017-01-01"}],soknadType:Dn.FODSEL}}}};var Ba,Va,Ga;je.parameters={...je.parameters,docs:{...(Ba=je.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
  args: {
    aksjonspunkter: []
  }
}`,...(Ga=(Va=je.parameters)==null?void 0:Va.docs)==null?void 0:Ga.source}}};var Ha,Ua,xa;we.parameters={...we.parameters,docs:{...(Ha=we.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
  args: {
    aksjonspunkter: [{
      begrunnelse: 'Dette er en begrunnelse saksbehandler tidligere har gjort.',
      definisjon: AksjonspunktKode.VURDER_TILBAKETREKK,
      status: AksjonspunktStatus.UTFORT
    }] as Aksjonspunkt[]
  }
}`,...(xa=(Ua=we.parameters)==null?void 0:Ua.docs)==null?void 0:xa.source}}};var Ya,Ca,$a;Me.parameters={...Me.parameters,docs:{...(Ya=Me.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
  args: {
    aksjonspunkter: [{
      definisjon: AksjonspunktKode.VURDER_TILBAKETREKK,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[],
    feriepengegrunnlag: {
      andeler: [{
        aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
        opptjeningsår: 2,
        årsbeløp: 500000,
        erBrukerMottaker: true
      }]
    }
  }
}`,...($a=(Ca=Me.parameters)==null?void 0:Ca.docs)==null?void 0:$a.source}}};var Ja,Wa,za;Be.parameters={...Be.parameters,docs:{...(Ja=Be.parameters)==null?void 0:Ja.docs,source:{originalSource:`{
  args: {
    aksjonspunkter: [],
    familiehendelse: {
      ...defaultFamiliehendelse,
      gjeldende: {
        avklartBarn: [{
          fodselsdato: '2017-01-01'
        }],
        soknadType: SoknadType.FODSEL
      } as FamilieHendelse
    }
  }
}`,...(za=(Wa=Be.parameters)==null?void 0:Wa.docs)==null?void 0:za.source}}};var Xa,Za,Qa;je.parameters={...je.parameters,docs:{...(Xa=je.parameters)==null?void 0:Xa.docs,source:{originalSource:`{
  args: {
    aksjonspunkter: []
  }
}`,...(Qa=(Za=je.parameters)==null?void 0:Za.docs)==null?void 0:Qa.source}}};var es,ns,rs;we.parameters={...we.parameters,docs:{...(es=we.parameters)==null?void 0:es.docs,source:{originalSource:`{
  args: {
    aksjonspunkter: [{
      begrunnelse: 'Dette er en begrunnelse saksbehandler tidligere har gjort.',
      definisjon: AksjonspunktKode.VURDER_TILBAKETREKK,
      status: AksjonspunktStatus.UTFORT
    }] as Aksjonspunkt[]
  }
}`,...(rs=(ns=we.parameters)==null?void 0:ns.docs)==null?void 0:rs.source}}};var ts,as,ss;Me.parameters={...Me.parameters,docs:{...(ts=Me.parameters)==null?void 0:ts.docs,source:{originalSource:`{
  args: {
    aksjonspunkter: [{
      definisjon: AksjonspunktKode.VURDER_TILBAKETREKK,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[],
    feriepengegrunnlag: {
      andeler: [{
        aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
        opptjeningsår: 2,
        årsbeløp: 500000,
        erBrukerMottaker: true
      }]
    }
  }
}`,...(ss=(as=Me.parameters)==null?void 0:as.docs)==null?void 0:ss.source}}};var is,os,ls;Be.parameters={...Be.parameters,docs:{...(is=Be.parameters)==null?void 0:is.docs,source:{originalSource:`{
  args: {
    aksjonspunkter: [],
    familiehendelse: {
      ...defaultFamiliehendelse,
      gjeldende: {
        avklartBarn: [{
          fodselsdato: '2017-01-01'
        }],
        soknadType: SoknadType.FODSEL
      } as FamilieHendelse
    }
  }
}`,...(ls=(os=Be.parameters)==null?void 0:os.docs)==null?void 0:ls.source}}};const Ey=["UtenAksjonspunkt","UtførtAksjonspunkt","MedFeriepengegrunnlag","MedBarnFodtLengeForForstePeriode"];export{Be as MedBarnFodtLengeForForstePeriode,Me as MedFeriepengegrunnlag,je as UtenAksjonspunkt,we as UtførtAksjonspunkt,Ey as __namedExportsOrder,vy as default};
