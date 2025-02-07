var Mm=Object.defineProperty;var qm=(e,n,r)=>n in e?Mm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var W=(e,n,r)=>qm(e,typeof n!="symbol"?n+"":n,r);import{v as Vm}from"./v4-CtRu48qb.js";import{j as y}from"./jsx-runtime-CLpGMVip.js";import{r as E,R as T,b as gu}from"./index-CYQpqK1Q.js";import{d as we}from"./dayjs.min-DPY8FYmS.js";import{M as ku,r as mu}from"./index-4Uuc9FQs.js";import{g as jm}from"./_commonjsHelpers-CqkleIqs.js";import"./index-CjktTq3Q.js";const{addons:Bm}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:xm}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:kl}=__STORYBOOK_MODULE_GLOBAL__;var Gm="storybook/actions",Um=`${Gm}/action-event`,Hm={depth:10,clearOnStoryChange:!0,limit:50},fu=(e,n)=>{let r=Object.getPrototypeOf(e);return!r||n(r)?r:fu(r,n)},Ym=e=>!!(typeof e=="object"&&e&&fu(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),Cm=e=>{if(Ym(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let r=Object.getOwnPropertyDescriptor(n,"view"),t=r==null?void 0:r.value;return typeof t=="object"&&(t==null?void 0:t.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...r,value:Object.create(t.constructor.prototype)}),n}return e},Wm=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?Vm():Date.now().toString(36)+Math.random().toString(36).substring(2);function ml(e,n={}){let r={...Hm,...n},t=function(...a){var g,k;if(n.implicit){let m=(g="__STORYBOOK_PREVIEW__"in kl?kl.__STORYBOOK_PREVIEW__:void 0)==null?void 0:g.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(m){let c=!((k=window==null?void 0:window.FEATURES)!=null&&k.disallowImplicitActionsInRenderV8),f=new xm({phase:m.phase,name:e,deprecated:c});if(c)console.warn(f);else throw f}}let s=Bm.getChannel(),o=Wm(),i=5,l=a.map(Cm),d=a.length>1?l:l[0],u={id:o,count:0,data:{name:e,args:d},options:{...r,maxDepth:i+(r.depth||3),allowFunction:r.allowFunction||!1}};s.emit(Um,u)};return t.isAction=!0,t.implicit=n.implicit,t}var ja=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN="5032",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYR_BEREGNING="6007",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(ja||{}),Ba=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(Ba||{}),ds=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(ds||{});ds.BRUKERS_ANDEL;ds.FRILANS;ds.EGEN_NÆRING;var Kr=(e=>(e.FORSTEGANGSSOKNAD="BT-002",e.KLAGE="BT-003",e.REVURDERING="BT-004",e.DOKUMENTINNSYN="BT-006",e.TILBAKEKREVING="BT-007",e.ANKE="BT-008",e.TILBAKEKREVING_REVURDERING="BT-009",e))(Kr||{}),vu=(e=>(e.INNHENTE_OPPLYSNINGER="INNOPP",e.VARSEL_OM_REVURDERING="VARREV",e.FORLENGET_SAKSBEHANDLINGSTID="FORSAK",e.FORLENGET_SAKSBEHANDLINGSTID_MEDL="FORMED",e.KLAGE_OMGJORING="KGEOMG",e.KLAGE_AVVIST="KGEAVV",e.KLAGE_STADFESTET="KGESTA",e.KLAGE_HJEMSENDT="KGEHJE",e.KLAGE_OVERSENDT="KGEOVE",e.ANKE_OMGJORT="ANKOMG",e.ANKE_OPPHEVET="ANKOPP",e.FRITEKST="FRITEK",e.INNSYN_SVAR="INNSYN",e.INFO_OM_HENLEGGELSE="IOHENL",e.TBK_INNHENTE_OPPLYSNINGER="INNHEN",e.KORRIGERT_VARSEL_OM_TILBAKEKREVING="KORRIGVARS",e.VARSEL_OM_TILBAKEKREVING="VARS",e.ETTERLYS_INNTEKTSMELDING="ELYSIM",e))(vu||{}),cu=(e=>(e.ARBEID_TYPE="ArbeidType",e.AVSLAGSARSAK="Avslagsårsak",e.VENT_AARSAK="Venteårsak",e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.KLAGE_AVVIST_AARSAK="KlageAvvistÅrsak",e.KLAGE_MEDHOLD_ARSAK="KlageMedholdÅrsak",e.KLAGE_HJEMMEL="KlageHjemmel",e.OMSORGSOVERTAKELSE_VILKAR_TYPE="OmsorgsovertakelseVilkårType",e.MEDLEMSKAP_MANUELL_VURDERING_TYPE="MedlemskapManuellVurderingType",e.VERGE_TYPE="VergeType",e.LANDKODER="Landkoder",e.MORS_AKTIVITET="MorsAktivitet",e.VIRKSOMHET_TYPE="VirksomhetType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.PERSONSTATUS_TYPE="PersonstatusType",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.FORELDRE_TYPE="ForeldreType",e.FAMILIE_HENDELSE_TYPE="FamilieHendelseType",e.INNSYN_RESULTAT_TYPE="InnsynResultatType",e.BEHANDLING_TYPE="BehandlingType",e.OPPHOLD_ARSAK="OppholdÅrsak",e.UTSETTELSE_AARSAK_TYPE="UtsettelseÅrsak",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.UTTAK_PERIODE_TYPE="UttakPeriodeType",e.REVURDERING_VARSLING_ÅRSAK="RevurderingVarslingÅrsak",e.MANUELL_BEHANDLING_AARSAK="ManuellBehandlingÅrsak",e.PERIODE_RESULTAT_AARSAK="PeriodeResultatÅrsak",e.INNTEKTSKATEGORI="Inntektskategori",e.BEREGNINGSGRUNNLAG_ANDELTYPER="BeregningsgrunnlagAndeltype",e.AKTIVITET_STATUS="AktivitetStatus",e.ARBEIDSKATEGORI="Arbeidskategori",e.FAGSYSTEM="Fagsystem",e.REGION="Region",e.SIVILSTAND_TYPE="SivilstandType",e.FAKTA_OM_BEREGNING_TILFELLE="FaktaOmBeregningTilfelle",e.GRADERING_AVSLAG_AARSAK="GraderingAvslagÅrsak",e.SKJERMLENKE_TYPE="SkjermlenkeType",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.ARBEIDSFORHOLD_HANDLING_TYPE="ArbeidsforholdHandlingType",e.HISTORIKK_OPPLYSNING_TYPE="HistorikkOpplysningType",e.HISTORIKK_ENDRET_FELT_TYPE="HistorikkEndretFeltType",e.HISTORIKKINNSLAG_TYPE="HistorikkinnslagType",e.HISTORIKK_AKTOER="HistorikkAktør",e.BEHANDLING_STATUS="BehandlingStatus",e.FAR_SOEKER_TYPE="FarSøkerType",e.MEDLEMSKAP_DEKNING="MedlemskapDekningType",e.MEDLEMSKAP_TYPE="MedlemskapType",e.STOENADSKONTOTYPE="StønadskontoType",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.UTTAK_ARBEID_TYPE="UttakArbeidType",e.UTTAK_UTSETTELSE_TYPE="UttakUtsettelseType",e.VILKAR_TYPE="VilkårType",e.AKTSOMHET="Aktsomhet",e.VURDERING="AnnenVurdering",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.PERMISJONSBESKRIVELSE_TYPE="PermisjonsbeskrivelseType",e.VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG="VurderArbeidsforholdHistorikkinnslag",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.VURDER_AARSAK="VurderÅrsak",e.ANKE_OMGJOER_AARSAK="AnkeOmgjørÅrsak",e.AKTIVITETSKRAV_AVKLARING="KontrollerAktivitetskravAvklaring",e.OPPHOLDSTILLATELSE_TYPE="OppholdstillatelseType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e.FORDELING_PERIODE_KILDE="FordelingPeriodeKilde",e.RELASJONSROLLE_TYPE="RelasjonsRolleType",e.FAGSAK_MARKERING="FagsakMarkering",e.ADRESSE_TYPE="AdresseType",e.NATURAL_YTELSE_TYPE="NaturalYtelseType",e))(cu||{}),Eu=(e=>(e.BARN_IKKE_REGISTRERT_FOLKEREGISTER="BARNIKKEREG",e.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT="AKTIVITET",e.ANNET="ANNET",e))(Eu||{}),tn=(e=>(e.AVV_DOK="AVV_DOK",e.AVV_FODSEL="AVV_FODSEL",e.UTV_FRIST="UTV_FRIST",e.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG="VENT_PÅ_TILBAKEKREVINGSGRUNNLAG",e.VENT_PÅ_BRUKERTILBAKEMELDING="VENT_PÅ_BRUKERTILBAKEMELDING",e.VENT_UTLAND_TRYGD="VENT_UTLAND_TRYGD",e.UTVIDET_TILSVAR_FRIST="UTV_TIL_FRIST",e.ENDRE_TILKJENT_YTELSE="ENDRE_TILKJENT_YTELSE",e.VENT_PÅ_MULIG_MOTREGNING="VENT_PÅ_MULIG_MOTREGNING",e.AVV_RESPONS_REVURDERING="AVV_RESPONS_REVURDERING",e.FOR_TIDLIG_SOKNAD="FOR_TIDLIG_SOKNAD",e.VENT_PÅ_SISTE_AAP_ELLER_DP_MELDEKORT="VENT_PÅ_SISTE_AAP_MELDEKORT",e.ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER="ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",e.ANKE_OVERSENDT_TIL_TRYGDERETTEN="ANKE_OVERSENDT_TIL_TRYGDERETTEN",e.VENT_PÅ_KORRIGERT_BESTEBEREGNING="VENT_PÅ_KORRIGERT_BESTEBEREGNING",e.VENT_OPDT_INNTEKTSMELDING="VENT_OPDT_INNTEKTSMELDING",e.VENT_OPPTJENING_OPPLYSNINGER="VENT_OPPTJENING_OPPLYSNINGER",e.VENT_INNTEKT_RAPPORTERINGSFRIST="VENT_INNTEKT_RAPPORTERINGSFRIST",e.VENT_MANGLENDE_SYKEMELDING="VENT_MANGLENDE_SYKEMELDING",e.VENT_SØKNAD_SENDT_INFORMASJONSBREV="VENT_SØKNAD_SENDT_INFORMASJONSBREV",e.VENT_ÅPEN_BEHANDLING="VENT_ÅPEN_BEHANDLING",e.VENT_KABAL="VENT_KABAL",e))(tn||{}),vo=function(e,n){return vo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a])},vo(e,n)};function Ln(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");vo(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}var J=function(){return J=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},J.apply(this,arguments)};function st(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r}function Mn(e,n,r){if(r||arguments.length===2)for(var t=0,a=n.length,s;t<a;t++)(s||!(t in n))&&(s||(s=Array.prototype.slice.call(n,0,t)),s[t]=n[t]);return e.concat(s||Array.prototype.slice.call(n))}function Kn(e,n){var r=n&&n.cache?n.cache:ef,t=n&&n.serializer?n.serializer:Xm,a=n&&n.strategy?n.strategy:Jm;return a(e,{cache:r,serializer:t})}function $m(e){return e==null||typeof e=="number"||typeof e=="boolean"}function pu(e,n,r,t){var a=$m(t)?t:r(t),s=n.get(a);return typeof s>"u"&&(s=e.call(this,t),n.set(a,s)),s}function yu(e,n,r){var t=Array.prototype.slice.call(arguments,3),a=r(t),s=n.get(a);return typeof s>"u"&&(s=e.apply(this,t),n.set(a,s)),s}function $o(e,n,r,t,a){return r.bind(n,e,t,a)}function Jm(e,n){var r=e.length===1?pu:yu;return $o(e,this,r,n.cache.create(),n.serializer)}function zm(e,n){return $o(e,this,yu,n.cache.create(),n.serializer)}function Zm(e,n){return $o(e,this,pu,n.cache.create(),n.serializer)}var Xm=function(){return JSON.stringify(arguments)},Qm=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(n){return this.cache[n]},e.prototype.set=function(n,r){this.cache[n]=r},e}(),ef={create:function(){return new Qm}},wn={variadic:zm,monadic:Zm},le;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(le||(le={}));var _e;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(_e||(_e={}));var ot;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(ot||(ot={}));function fl(e){return e.type===_e.literal}function nf(e){return e.type===_e.argument}function Tu(e){return e.type===_e.number}function hu(e){return e.type===_e.date}function Ru(e){return e.type===_e.time}function bu(e){return e.type===_e.select}function _u(e){return e.type===_e.plural}function rf(e){return e.type===_e.pound}function Au(e){return e.type===_e.tag}function Su(e){return!!(e&&typeof e=="object"&&e.type===ot.number)}function co(e){return!!(e&&typeof e=="object"&&e.type===ot.dateTime)}var Nu=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,tf=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function af(e){var n={};return e.replace(tf,function(r){var t=r.length;switch(r[0]){case"G":n.era=t===4?"long":t===5?"narrow":"short";break;case"y":n.year=t===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":n.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":n.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":n.weekday=t===4?"long":t===5?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][t-4];break;case"a":n.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":n.hourCycle="h12",n.hour=["numeric","2-digit"][t-1];break;case"H":n.hourCycle="h23",n.hour=["numeric","2-digit"][t-1];break;case"K":n.hourCycle="h11",n.hour=["numeric","2-digit"][t-1];break;case"k":n.hourCycle="h24",n.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":n.minute=["numeric","2-digit"][t-1];break;case"s":n.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":n.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),n}var sf=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function of(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var n=e.split(sf).filter(function(k){return k.length>0}),r=[],t=0,a=n;t<a.length;t++){var s=a[t],o=s.split("/");if(o.length===0)throw new Error("Invalid number skeleton");for(var i=o[0],l=o.slice(1),d=0,u=l;d<u.length;d++){var g=u[d];if(g.length===0)throw new Error("Invalid number skeleton")}r.push({stem:i,options:l})}return r}function lf(e){return e.replace(/^(.*?)-/,"")}var vl=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Du=/^(@+)?(\+|#+)?[rs]?$/g,df=/(\*)(0+)|(#+)(0+)|(0+)/g,Ou=/^(0+)$/;function cl(e){var n={};return e[e.length-1]==="r"?n.roundingPriority="morePrecision":e[e.length-1]==="s"&&(n.roundingPriority="lessPrecision"),e.replace(Du,function(r,t,a){return typeof a!="string"?(n.minimumSignificantDigits=t.length,n.maximumSignificantDigits=t.length):a==="+"?n.minimumSignificantDigits=t.length:t[0]==="#"?n.maximumSignificantDigits=t.length:(n.minimumSignificantDigits=t.length,n.maximumSignificantDigits=t.length+(typeof a=="string"?a.length:0)),""}),n}function Iu(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function uf(e){var n;if(e[0]==="E"&&e[1]==="E"?(n={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(n={notation:"scientific"},e=e.slice(1)),n){var r=e.slice(0,2);if(r==="+!"?(n.signDisplay="always",e=e.slice(2)):r==="+?"&&(n.signDisplay="exceptZero",e=e.slice(2)),!Ou.test(e))throw new Error("Malformed concise eng/scientific notation");n.minimumIntegerDigits=e.length}return n}function El(e){var n={},r=Iu(e);return r||n}function gf(e){for(var n={},r=0,t=e;r<t.length;r++){var a=t[r];switch(a.stem){case"percent":case"%":n.style="percent";continue;case"%x100":n.style="percent",n.scale=100;continue;case"currency":n.style="currency",n.currency=a.options[0];continue;case"group-off":case",_":n.useGrouping=!1;continue;case"precision-integer":case".":n.maximumFractionDigits=0;continue;case"measure-unit":case"unit":n.style="unit",n.unit=lf(a.options[0]);continue;case"compact-short":case"K":n.notation="compact",n.compactDisplay="short";continue;case"compact-long":case"KK":n.notation="compact",n.compactDisplay="long";continue;case"scientific":n=J(J(J({},n),{notation:"scientific"}),a.options.reduce(function(l,d){return J(J({},l),El(d))},{}));continue;case"engineering":n=J(J(J({},n),{notation:"engineering"}),a.options.reduce(function(l,d){return J(J({},l),El(d))},{}));continue;case"notation-simple":n.notation="standard";continue;case"unit-width-narrow":n.currencyDisplay="narrowSymbol",n.unitDisplay="narrow";continue;case"unit-width-short":n.currencyDisplay="code",n.unitDisplay="short";continue;case"unit-width-full-name":n.currencyDisplay="name",n.unitDisplay="long";continue;case"unit-width-iso-code":n.currencyDisplay="symbol";continue;case"scale":n.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":n.roundingMode="floor";continue;case"rounding-mode-ceiling":n.roundingMode="ceil";continue;case"rounding-mode-down":n.roundingMode="trunc";continue;case"rounding-mode-up":n.roundingMode="expand";continue;case"rounding-mode-half-even":n.roundingMode="halfEven";continue;case"rounding-mode-half-down":n.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":n.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(df,function(l,d,u,g,k,m){if(d)n.minimumIntegerDigits=u.length;else{if(g&&k)throw new Error("We currently do not support maximum integer digits");if(m)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Ou.test(a.stem)){n.minimumIntegerDigits=a.stem.length;continue}if(vl.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(vl,function(l,d,u,g,k,m){return u==="*"?n.minimumFractionDigits=d.length:g&&g[0]==="#"?n.maximumFractionDigits=g.length:k&&m?(n.minimumFractionDigits=k.length,n.maximumFractionDigits=k.length+m.length):(n.minimumFractionDigits=d.length,n.maximumFractionDigits=d.length),""});var s=a.options[0];s==="w"?n=J(J({},n),{trailingZeroDisplay:"stripIfInteger"}):s&&(n=J(J({},n),cl(s)));continue}if(Du.test(a.stem)){n=J(J({},n),cl(a.stem));continue}var o=Iu(a.stem);o&&(n=J(J({},n),o));var i=uf(a.stem);i&&(n=J(J({},n),i))}return n}var Ta={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function kf(e,n){for(var r="",t=0;t<e.length;t++){var a=e.charAt(t);if(a==="j"){for(var s=0;t+1<e.length&&e.charAt(t+1)===a;)s++,t++;var o=1+(s&1),i=s<2?1:3+(s>>1),l="a",d=mf(n);for((d=="H"||d=="k")&&(i=0);i-- >0;)r+=l;for(;o-- >0;)r=d+r}else a==="J"?r+="H":r+=a}return r}function mf(e){var n=e.hourCycle;if(n===void 0&&e.hourCycles&&e.hourCycles.length&&(n=e.hourCycles[0]),n)switch(n){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,t;r!=="root"&&(t=e.maximize().region);var a=Ta[t||""]||Ta[r||""]||Ta["".concat(r,"-001")]||Ta["001"];return a[0]}var Bs,ff=new RegExp("^".concat(Nu.source,"*")),vf=new RegExp("".concat(Nu.source,"*$"));function de(e,n){return{start:e,end:n}}var cf=!!String.prototype.startsWith&&"_a".startsWith("a",1),Ef=!!String.fromCodePoint,pf=!!Object.fromEntries,yf=!!String.prototype.codePointAt,Tf=!!String.prototype.trimStart,hf=!!String.prototype.trimEnd,Rf=!!Number.isSafeInteger,bf=Rf?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Eo=!0;try{var _f=Pu("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Eo=((Bs=_f.exec("a"))===null||Bs===void 0?void 0:Bs[0])==="a"}catch{Eo=!1}var pl=cf?function(n,r,t){return n.startsWith(r,t)}:function(n,r,t){return n.slice(t,t+r.length)===r},po=Ef?String.fromCodePoint:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];for(var t="",a=n.length,s=0,o;a>s;){if(o=n[s++],o>1114111)throw RangeError(o+" is not a valid code point");t+=o<65536?String.fromCharCode(o):String.fromCharCode(((o-=65536)>>10)+55296,o%1024+56320)}return t},yl=pf?Object.fromEntries:function(n){for(var r={},t=0,a=n;t<a.length;t++){var s=a[t],o=s[0],i=s[1];r[o]=i}return r},Lu=yf?function(n,r){return n.codePointAt(r)}:function(n,r){var t=n.length;if(!(r<0||r>=t)){var a=n.charCodeAt(r),s;return a<55296||a>56319||r+1===t||(s=n.charCodeAt(r+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},Af=Tf?function(n){return n.trimStart()}:function(n){return n.replace(ff,"")},Sf=hf?function(n){return n.trimEnd()}:function(n){return n.replace(vf,"")};function Pu(e,n){return new RegExp(e,n)}var yo;if(Eo){var Tl=Pu("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");yo=function(n,r){var t;Tl.lastIndex=r;var a=Tl.exec(n);return(t=a[1])!==null&&t!==void 0?t:""}}else yo=function(n,r){for(var t=[];;){var a=Lu(n,r);if(a===void 0||Fu(a)||If(a))break;t.push(a),r+=a>=65536?2:1}return po.apply(void 0,t)};var Nf=function(){function e(n,r){r===void 0&&(r={}),this.message=n,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(n,r,t){for(var a=[];!this.isEOF();){var s=this.char();if(s===123){var o=this.parseArgument(n,t);if(o.err)return o;a.push(o.val)}else{if(s===125&&n>0)break;if(s===35&&(r==="plural"||r==="selectordinal")){var i=this.clonePosition();this.bump(),a.push({type:_e.pound,location:de(i,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(t)break;return this.error(le.UNMATCHED_CLOSING_TAG,de(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&To(this.peek()||0)){var o=this.parseTag(n,r);if(o.err)return o;a.push(o.val)}else{var o=this.parseLiteral(n,r);if(o.err)return o;a.push(o.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(n,r){var t=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:_e.literal,value:"<".concat(a,"/>"),location:de(t,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(n+1,r,!0);if(s.err)return s;var o=s.val,i=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!To(this.char()))return this.error(le.INVALID_TAG,de(i,this.clonePosition()));var l=this.clonePosition(),d=this.parseTagName();return a!==d?this.error(le.UNMATCHED_CLOSING_TAG,de(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:_e.tag,value:a,children:o,location:de(t,this.clonePosition())},err:null}:this.error(le.INVALID_TAG,de(i,this.clonePosition())))}else return this.error(le.UNCLOSED_TAG,de(t,this.clonePosition()))}else return this.error(le.INVALID_TAG,de(t,this.clonePosition()))},e.prototype.parseTagName=function(){var n=this.offset();for(this.bump();!this.isEOF()&&Of(this.char());)this.bump();return this.message.slice(n,this.offset())},e.prototype.parseLiteral=function(n,r){for(var t=this.clonePosition(),a="";;){var s=this.tryParseQuote(r);if(s){a+=s;continue}var o=this.tryParseUnquoted(n,r);if(o){a+=o;continue}var i=this.tryParseLeftAngleBracket();if(i){a+=i;continue}break}var l=de(t,this.clonePosition());return{val:{type:_e.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Df(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(n){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(n==="plural"||n==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var t=this.char();if(t===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(t);this.bump()}return po.apply(void 0,r)},e.prototype.tryParseUnquoted=function(n,r){if(this.isEOF())return null;var t=this.char();return t===60||t===123||t===35&&(r==="plural"||r==="selectordinal")||t===125&&n>0?null:(this.bump(),po(t))},e.prototype.parseArgument=function(n,r){var t=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(le.EXPECT_ARGUMENT_CLOSING_BRACE,de(t,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(le.EMPTY_ARGUMENT,de(t,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(le.MALFORMED_ARGUMENT,de(t,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(le.EXPECT_ARGUMENT_CLOSING_BRACE,de(t,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:_e.argument,value:a,location:de(t,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(le.EXPECT_ARGUMENT_CLOSING_BRACE,de(t,this.clonePosition())):this.parseArgumentOptions(n,r,a,t);default:return this.error(le.MALFORMED_ARGUMENT,de(t,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var n=this.clonePosition(),r=this.offset(),t=yo(this.message,r),a=r+t.length;this.bumpTo(a);var s=this.clonePosition(),o=de(n,s);return{value:t,location:o}},e.prototype.parseArgumentOptions=function(n,r,t,a){var s,o=this.clonePosition(),i=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(i){case"":return this.error(le.EXPECT_ARGUMENT_TYPE,de(o,l));case"number":case"date":case"time":{this.bumpSpace();var d=null;if(this.bumpIf(",")){this.bumpSpace();var u=this.clonePosition(),g=this.parseSimpleArgStyleIfPossible();if(g.err)return g;var k=Sf(g.val);if(k.length===0)return this.error(le.EXPECT_ARGUMENT_STYLE,de(this.clonePosition(),this.clonePosition()));var m=de(u,this.clonePosition());d={style:k,styleLocation:m}}var c=this.tryParseArgumentClose(a);if(c.err)return c;var f=de(a,this.clonePosition());if(d&&pl(d==null?void 0:d.style,"::",0)){var v=Af(d.style.slice(2));if(i==="number"){var g=this.parseNumberSkeletonFromString(v,d.styleLocation);return g.err?g:{val:{type:_e.number,value:t,location:f,style:g.val},err:null}}else{if(v.length===0)return this.error(le.EXPECT_DATE_TIME_SKELETON,f);var h=v;this.locale&&(h=kf(v,this.locale));var k={type:ot.dateTime,pattern:h,location:d.styleLocation,parsedOptions:this.shouldParseSkeletons?af(h):{}},p=i==="date"?_e.date:_e.time;return{val:{type:p,value:t,location:f,style:k},err:null}}}return{val:{type:i==="number"?_e.number:i==="date"?_e.date:_e.time,value:t,location:f,style:(s=d==null?void 0:d.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var R=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(le.EXPECT_SELECT_ARGUMENT_OPTIONS,de(R,J({},R)));this.bumpSpace();var S=this.parseIdentifierIfPossible(),_=0;if(i!=="select"&&S.value==="offset"){if(!this.bumpIf(":"))return this.error(le.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,de(this.clonePosition(),this.clonePosition()));this.bumpSpace();var g=this.tryParseDecimalInteger(le.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,le.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(g.err)return g;this.bumpSpace(),S=this.parseIdentifierIfPossible(),_=g.val}var O=this.tryParsePluralOrSelectOptions(n,i,r,S);if(O.err)return O;var c=this.tryParseArgumentClose(a);if(c.err)return c;var A=de(a,this.clonePosition());return i==="select"?{val:{type:_e.select,value:t,options:yl(O.val),location:A},err:null}:{val:{type:_e.plural,value:t,options:yl(O.val),offset:_,pluralType:i==="plural"?"cardinal":"ordinal",location:A},err:null}}default:return this.error(le.INVALID_ARGUMENT_TYPE,de(o,l))}},e.prototype.tryParseArgumentClose=function(n){return this.isEOF()||this.char()!==125?this.error(le.EXPECT_ARGUMENT_CLOSING_BRACE,de(n,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var n=0,r=this.clonePosition();!this.isEOF();){var t=this.char();switch(t){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(le.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,de(a,this.clonePosition()));this.bump();break}case 123:{n+=1,this.bump();break}case 125:{if(n>0)n-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(n,r){var t=[];try{t=of(n)}catch{return this.error(le.INVALID_NUMBER_SKELETON,r)}return{val:{type:ot.number,tokens:t,location:r,parsedOptions:this.shouldParseSkeletons?gf(t):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(n,r,t,a){for(var s,o=!1,i=[],l=new Set,d=a.value,u=a.location;;){if(d.length===0){var g=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var k=this.tryParseDecimalInteger(le.EXPECT_PLURAL_ARGUMENT_SELECTOR,le.INVALID_PLURAL_ARGUMENT_SELECTOR);if(k.err)return k;u=de(g,this.clonePosition()),d=this.message.slice(g.offset,this.offset())}else break}if(l.has(d))return this.error(r==="select"?le.DUPLICATE_SELECT_ARGUMENT_SELECTOR:le.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,u);d==="other"&&(o=!0),this.bumpSpace();var m=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?le.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:le.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,de(this.clonePosition(),this.clonePosition()));var c=this.parseMessage(n+1,r,t);if(c.err)return c;var f=this.tryParseArgumentClose(m);if(f.err)return f;i.push([d,{value:c.val,location:de(m,this.clonePosition())}]),l.add(d),this.bumpSpace(),s=this.parseIdentifierIfPossible(),d=s.value,u=s.location}return i.length===0?this.error(r==="select"?le.EXPECT_SELECT_ARGUMENT_SELECTOR:le.EXPECT_PLURAL_ARGUMENT_SELECTOR,de(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!o?this.error(le.MISSING_OTHER_CLAUSE,de(this.clonePosition(),this.clonePosition())):{val:i,err:null}},e.prototype.tryParseDecimalInteger=function(n,r){var t=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(t=-1);for(var s=!1,o=0;!this.isEOF();){var i=this.char();if(i>=48&&i<=57)s=!0,o=o*10+(i-48),this.bump();else break}var l=de(a,this.clonePosition());return s?(o*=t,bf(o)?{val:o,err:null}:this.error(r,l)):this.error(n,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var n=this.position.offset;if(n>=this.message.length)throw Error("out of bound");var r=Lu(this.message,n);if(r===void 0)throw Error("Offset ".concat(n," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(n,r){return{val:null,err:{kind:n,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var n=this.char();n===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=n<65536?1:2)}},e.prototype.bumpIf=function(n){if(pl(this.message,n,this.offset())){for(var r=0;r<n.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(n){var r=this.offset(),t=this.message.indexOf(n,r);return t>=0?(this.bumpTo(t),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(n){if(this.offset()>n)throw Error("targetOffset ".concat(n," must be greater than or equal to the current offset ").concat(this.offset()));for(n=Math.min(n,this.message.length);;){var r=this.offset();if(r===n)break;if(r>n)throw Error("targetOffset ".concat(n," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Fu(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var n=this.char(),r=this.offset(),t=this.message.charCodeAt(r+(n>=65536?2:1));return t??null},e}();function To(e){return e>=97&&e<=122||e>=65&&e<=90}function Df(e){return To(e)||e===47}function Of(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Fu(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function If(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function ho(e){e.forEach(function(n){if(delete n.location,bu(n)||_u(n))for(var r in n.options)delete n.options[r].location,ho(n.options[r].value);else Tu(n)&&Su(n.style)||(hu(n)||Ru(n))&&co(n.style)?delete n.style.location:Au(n)&&ho(n.children)})}function Lf(e,n){n===void 0&&(n={}),n=J({shouldParseSkeletons:!0,requiresOtherClause:!0},n);var r=new Nf(e,n).parse();if(r.err){var t=SyntaxError(le[r.err.kind]);throw t.location=r.err.location,t.originalMessage=r.err.message,t}return n!=null&&n.captureLocation||ho(r.val),r.val}var Hn;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Hn||(Hn={}));var Rr=function(e){Ln(n,e);function n(r,t,a){var s=e.call(this,r)||this;return s.code=t,s.originalMessage=a,s}return n.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},n}(Error),hl=function(e){Ln(n,e);function n(r,t,a,s){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(t,'". Options are "').concat(Object.keys(a).join('", "'),'"'),Hn.INVALID_VALUE,s)||this}return n}(Rr),Pf=function(e){Ln(n,e);function n(r,t,a){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(t),Hn.INVALID_VALUE,a)||this}return n}(Rr),Ff=function(e){Ln(n,e);function n(r,t){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(t,'"'),Hn.MISSING_VALUE,t)||this}return n}(Rr),Je;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(Je||(Je={}));function Kf(e){return e.length<2?e:e.reduce(function(n,r){var t=n[n.length-1];return!t||t.type!==Je.literal||r.type!==Je.literal?n.push(r):t.value+=r.value,n},[])}function Ku(e){return typeof e=="function"}function Oa(e,n,r,t,a,s,o){if(e.length===1&&fl(e[0]))return[{type:Je.literal,value:e[0].value}];for(var i=[],l=0,d=e;l<d.length;l++){var u=d[l];if(fl(u)){i.push({type:Je.literal,value:u.value});continue}if(rf(u)){typeof s=="number"&&i.push({type:Je.literal,value:r.getNumberFormat(n).format(s)});continue}var g=u.value;if(!(a&&g in a))throw new Ff(g,o);var k=a[g];if(nf(u)){(!k||typeof k=="string"||typeof k=="number")&&(k=typeof k=="string"||typeof k=="number"?String(k):""),i.push({type:typeof k=="string"?Je.literal:Je.object,value:k});continue}if(hu(u)){var m=typeof u.style=="string"?t.date[u.style]:co(u.style)?u.style.parsedOptions:void 0;i.push({type:Je.literal,value:r.getDateTimeFormat(n,m).format(k)});continue}if(Ru(u)){var m=typeof u.style=="string"?t.time[u.style]:co(u.style)?u.style.parsedOptions:t.time.medium;i.push({type:Je.literal,value:r.getDateTimeFormat(n,m).format(k)});continue}if(Tu(u)){var m=typeof u.style=="string"?t.number[u.style]:Su(u.style)?u.style.parsedOptions:void 0;m&&m.scale&&(k=k*(m.scale||1)),i.push({type:Je.literal,value:r.getNumberFormat(n,m).format(k)});continue}if(Au(u)){var c=u.children,f=u.value,v=a[f];if(!Ku(v))throw new Pf(f,"function",o);var h=Oa(c,n,r,t,a,s),p=v(h.map(function(_){return _.value}));Array.isArray(p)||(p=[p]),i.push.apply(i,p.map(function(_){return{type:typeof _=="string"?Je.literal:Je.object,value:_}}))}if(bu(u)){var R=u.options[k]||u.options.other;if(!R)throw new hl(u.value,k,Object.keys(u.options),o);i.push.apply(i,Oa(R.value,n,r,t,a));continue}if(_u(u)){var R=u.options["=".concat(k)];if(!R){if(!Intl.PluralRules)throw new Rr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Hn.MISSING_INTL_API,o);var S=r.getPluralRules(n,{type:u.pluralType}).select(k-(u.offset||0));R=u.options[S]||u.options.other}if(!R)throw new hl(u.value,k,Object.keys(u.options),o);i.push.apply(i,Oa(R.value,n,r,t,a,k-(u.offset||0)));continue}}return Kf(i)}function wf(e,n){return n?J(J(J({},e||{}),n||{}),Object.keys(e).reduce(function(r,t){return r[t]=J(J({},e[t]),n[t]||{}),r},{})):e}function Mf(e,n){return n?Object.keys(e).reduce(function(r,t){return r[t]=wf(e[t],n[t]),r},J({},e)):e}function xs(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,r){e[n]=r}}}}}function qf(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Kn(function(){for(var n,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((n=Intl.NumberFormat).bind.apply(n,Mn([void 0],r,!1)))},{cache:xs(e.number),strategy:wn.variadic}),getDateTimeFormat:Kn(function(){for(var n,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((n=Intl.DateTimeFormat).bind.apply(n,Mn([void 0],r,!1)))},{cache:xs(e.dateTime),strategy:wn.variadic}),getPluralRules:Kn(function(){for(var n,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return new((n=Intl.PluralRules).bind.apply(n,Mn([void 0],r,!1)))},{cache:xs(e.pluralRules),strategy:wn.variadic})}}var wu=function(){function e(n,r,t,a){r===void 0&&(r=e.defaultLocale);var s=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var d=s.formatToParts(l);if(d.length===1)return d[0].value;var u=d.reduce(function(g,k){return!g.length||k.type!==Je.literal||typeof g[g.length-1]!="string"?g.push(k.value):g[g.length-1]+=k.value,g},[]);return u.length<=1?u[0]||"":u},this.formatToParts=function(l){return Oa(s.ast,s.locales,s.formatters,s.formats,l,void 0,s.message)},this.resolvedOptions=function(){var l;return{locale:((l=s.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof n=="string"){if(this.message=n,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var o=a||{};o.formatters;var i=st(o,["formatters"]);this.ast=e.__parse(n,J(J({},i),{locale:this.resolvedLocale}))}else this.ast=n;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Mf(e.formats,t),this.formatters=a&&a.formatters||qf(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(n){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(n);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof n=="string"?n:n[0])}},e.__parse=Lf,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),wr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(wr||(wr={}));var Xt=function(e){Ln(n,e);function n(r,t,a){var s=this,o=a?a instanceof Error?a:new Error(String(a)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(t,`
`).concat(o?`
`.concat(o.message,`
`).concat(o.stack):""))||this,s.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,n),s}return n}(Error),Vf=function(e){Ln(n,e);function n(r,t){return e.call(this,wr.UNSUPPORTED_FORMATTER,r,t)||this}return n}(Xt),jf=function(e){Ln(n,e);function n(r,t){return e.call(this,wr.INVALID_CONFIG,r,t)||this}return n}(Xt),Rl=function(e){Ln(n,e);function n(r,t){return e.call(this,wr.MISSING_DATA,r,t)||this}return n}(Xt),cn=function(e){Ln(n,e);function n(r,t,a){var s=e.call(this,wr.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(t,`
`),a)||this;return s.locale=t,s}return n}(Xt),Gs=function(e){Ln(n,e);function n(r,t,a,s){var o=e.call(this,"".concat(r,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),t,s)||this;return o.descriptor=a,o.locale=t,o}return n}(cn),Bf=function(e){Ln(n,e);function n(r,t){var a=e.call(this,wr.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(t,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(s){var o;return(o=s.value)!==null&&o!==void 0?o:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=r,a}return n}(Xt);function xf(e,n,r){if(r===void 0&&(r=Error),!e)throw new r(n)}function vt(e,n,r){return r===void 0&&(r={}),n.reduce(function(t,a){return a in e?t[a]=e[a]:a in r&&(t[a]=r[a]),t},{})}var Gf=function(e){},Uf=function(e){},Mu={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Gf,onWarn:Uf};function qu(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Nr(e){return{create:function(){return{get:function(n){return e[n]},set:function(n,r){e[n]=r}}}}}function Hf(e){e===void 0&&(e=qu());var n=Intl.RelativeTimeFormat,r=Intl.ListFormat,t=Intl.DisplayNames,a=Kn(function(){for(var i,l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return new((i=Intl.DateTimeFormat).bind.apply(i,Mn([void 0],l,!1)))},{cache:Nr(e.dateTime),strategy:wn.variadic}),s=Kn(function(){for(var i,l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return new((i=Intl.NumberFormat).bind.apply(i,Mn([void 0],l,!1)))},{cache:Nr(e.number),strategy:wn.variadic}),o=Kn(function(){for(var i,l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return new((i=Intl.PluralRules).bind.apply(i,Mn([void 0],l,!1)))},{cache:Nr(e.pluralRules),strategy:wn.variadic});return{getDateTimeFormat:a,getNumberFormat:s,getMessageFormat:Kn(function(i,l,d,u){return new wu(i,l,d,J({formatters:{getNumberFormat:s,getDateTimeFormat:a,getPluralRules:o}},u||{}))},{cache:Nr(e.message),strategy:wn.variadic}),getRelativeTimeFormat:Kn(function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];return new(n.bind.apply(n,Mn([void 0],i,!1)))},{cache:Nr(e.relativeTime),strategy:wn.variadic}),getPluralRules:o,getListFormat:Kn(function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];return new(r.bind.apply(r,Mn([void 0],i,!1)))},{cache:Nr(e.list),strategy:wn.variadic}),getDisplayNames:Kn(function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];return new(t.bind.apply(t,Mn([void 0],i,!1)))},{cache:Nr(e.displayNames),strategy:wn.variadic})}}function Jo(e,n,r,t){var a=e&&e[n],s;if(a&&(s=a[r]),s)return s;t(new Vf("No ".concat(n," format named: ").concat(r)))}function ha(e,n){return Object.keys(e).reduce(function(r,t){return r[t]=J({timeZone:n},e[t]),r},{})}function bl(e,n){var r=Object.keys(J(J({},e),n));return r.reduce(function(t,a){return t[a]=J(J({},e[a]||{}),n[a]||{}),t},{})}function _l(e,n){if(!n)return e;var r=wu.formats;return J(J(J({},r),e),{date:bl(ha(r.date,n),ha(e.date||{},n)),time:bl(ha(r.time,n),ha(e.time||{},n))})}var Ro=function(e,n,r,t,a){var s=e.locale,o=e.formats,i=e.messages,l=e.defaultLocale,d=e.defaultFormats,u=e.fallbackOnEmptyString,g=e.onError,k=e.timeZone,m=e.defaultRichTextElements;r===void 0&&(r={id:""});var c=r.id,f=r.defaultMessage;xf(!!c,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var v=String(c),h=i&&Object.prototype.hasOwnProperty.call(i,v)&&i[v];if(Array.isArray(h)&&h.length===1&&h[0].type===_e.literal)return h[0].value;if(!t&&h&&typeof h=="string"&&!m)return h.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=J(J({},m),t||{}),o=_l(o,k),d=_l(d,k),!h){if(u===!1&&h==="")return h;if((!f||s&&s.toLowerCase()!==l.toLowerCase())&&g(new Bf(r,s)),f)try{var p=n.getMessageFormat(f,l,d,a);return p.format(t)}catch(R){return g(new Gs('Error formatting default message for: "'.concat(v,'", rendering default message verbatim'),s,r,R)),typeof f=="string"?f:v}return v}try{var p=n.getMessageFormat(h,s,o,J({formatters:n},a||{}));return p.format(t)}catch(R){g(new Gs('Error formatting message: "'.concat(v,'", using ').concat(f?"default message":"id"," as fallback."),s,r,R))}if(f)try{var p=n.getMessageFormat(f,l,d,a);return p.format(t)}catch(R){g(new Gs('Error formatting the default message for: "'.concat(v,'", rendering message verbatim'),s,r,R))}return typeof h=="string"?h:typeof f=="string"?f:v},Yf=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Qt(e,n,r,t){var a=e.locale,s=e.formats,o=e.onError,i=e.timeZone;t===void 0&&(t={});var l=t.format,d=J(J({},i&&{timeZone:i}),l&&Jo(s,n,l,o)),u=vt(t,Yf,d);return n==="time"&&!u.hour&&!u.minute&&!u.second&&!u.timeStyle&&!u.dateStyle&&(u=J(J({},u),{hour:"numeric",minute:"numeric"})),r(a,u)}function Cf(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],o=s===void 0?{}:s,i=typeof a=="string"?new Date(a||0):a;try{return Qt(e,"date",n,o).format(i)}catch(l){e.onError(new cn("Error formatting date.",e.locale,l))}return String(i)}function Wf(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],o=s===void 0?{}:s,i=typeof a=="string"?new Date(a||0):a;try{return Qt(e,"time",n,o).format(i)}catch(l){e.onError(new cn("Error formatting time.",e.locale,l))}return String(i)}function $f(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],o=r[2],i=o===void 0?{}:o,l=typeof a=="string"?new Date(a||0):a,d=typeof s=="string"?new Date(s||0):s;try{return Qt(e,"dateTimeRange",n,i).formatRange(l,d)}catch(u){e.onError(new cn("Error formatting date time range.",e.locale,u))}return String(l)}function Jf(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],o=s===void 0?{}:s,i=typeof a=="string"?new Date(a||0):a;try{return Qt(e,"date",n,o).formatToParts(i)}catch(l){e.onError(new cn("Error formatting date.",e.locale,l))}return[]}function zf(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],s=r[1],o=s===void 0?{}:s,i=typeof a=="string"?new Date(a||0):a;try{return Qt(e,"time",n,o).formatToParts(i)}catch(l){e.onError(new cn("Error formatting time.",e.locale,l))}return[]}var Zf=["style","type","fallback","languageDisplay"];function Xf(e,n,r,t){var a=e.locale,s=e.onError,o=Intl.DisplayNames;o||s(new Rr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Hn.MISSING_INTL_API));var i=vt(t,Zf);try{return n(a,i).of(r)}catch(l){s(new cn("Error formatting display name.",a,l))}}var Qf=["type","style"],Al=Date.now();function ev(e){return"".concat(Al,"_").concat(e,"_").concat(Al)}function nv(e,n,r,t){t===void 0&&(t={});var a=Vu(e,n,r,t).reduce(function(s,o){var i=o.value;return typeof i!="string"?s.push(i):typeof s[s.length-1]=="string"?s[s.length-1]+=i:s.push(i),s},[]);return a.length===1?a[0]:a.length===0?"":a}function Vu(e,n,r,t){var a=e.locale,s=e.onError;t===void 0&&(t={});var o=Intl.ListFormat;o||s(new Rr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Hn.MISSING_INTL_API));var i=vt(t,Qf);try{var l={},d=r.map(function(u,g){if(typeof u=="object"){var k=ev(g);return l[k]=u,k}return String(u)});return n(a,i).formatToParts(d).map(function(u){return u.type==="literal"?u:J(J({},u),{value:l[u.value]||u.value})})}catch(u){s(new cn("Error formatting list.",a,u))}return r}var rv=["type"];function tv(e,n,r,t){var a=e.locale,s=e.onError;t===void 0&&(t={}),Intl.PluralRules||s(new Rr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Hn.MISSING_INTL_API));var o=vt(t,rv);try{return n(a,o).select(r)}catch(i){s(new cn("Error formatting plural.",a,i))}return"other"}var av=["numeric","style"];function sv(e,n,r){var t=e.locale,a=e.formats,s=e.onError;r===void 0&&(r={});var o=r.format,i=!!o&&Jo(a,"relative",o,s)||{},l=vt(r,av,i);return n(t,l)}function ov(e,n,r,t,a){a===void 0&&(a={}),t||(t="second");var s=Intl.RelativeTimeFormat;s||e.onError(new Rr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Hn.MISSING_INTL_API));try{return sv(e,n,a).format(r,t)}catch(o){e.onError(new cn("Error formatting relative time.",e.locale,o))}return String(r)}var iv=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function ju(e,n,r){var t=e.locale,a=e.formats,s=e.onError;r===void 0&&(r={});var o=r.format,i=o&&Jo(a,"number",o,s)||{},l=vt(r,iv,i);return n(t,l)}function lv(e,n,r,t){t===void 0&&(t={});try{return ju(e,n,t).format(r)}catch(a){e.onError(new cn("Error formatting number.",e.locale,a))}return String(r)}function dv(e,n,r,t){t===void 0&&(t={});try{return ju(e,n,t).formatToParts(r)}catch(a){e.onError(new cn("Error formatting number.",e.locale,a))}return[]}function uv(e){var n=e[Object.keys(e)[0]];return typeof n=="string"}function gv(e){e.onWarn&&e.defaultRichTextElements&&uv(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function kv(e,n){var r=Hf(n),t=J(J({},Mu),e),a=t.locale,s=t.defaultLocale,o=t.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&o?o(new Rl('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&o&&o(new Rl('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(o&&o(new jf('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),gv(t),J(J({},t),{formatters:r,formatNumber:lv.bind(null,t,r.getNumberFormat),formatNumberToParts:dv.bind(null,t,r.getNumberFormat),formatRelativeTime:ov.bind(null,t,r.getRelativeTimeFormat),formatDate:Cf.bind(null,t,r.getDateTimeFormat),formatDateToParts:Jf.bind(null,t,r.getDateTimeFormat),formatTime:Wf.bind(null,t,r.getDateTimeFormat),formatDateTimeRange:$f.bind(null,t,r.getDateTimeFormat),formatTimeToParts:zf.bind(null,t,r.getDateTimeFormat),formatPlural:tv.bind(null,t,r.getPluralRules),formatMessage:Ro.bind(null,t,r),$t:Ro.bind(null,t,r),formatList:nv.bind(null,t,r.getListFormat),formatListToParts:Vu.bind(null,t,r.getListFormat),formatDisplayName:Xf.bind(null,t,r.getDisplayNames)})}function mv(e,n,r){if(r===void 0&&(r=Error),!e)throw new r(n)}function fv(e){mv(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var vv=J(J({},Mu),{textComponent:E.Fragment});function cv(e){return function(n){return e(E.Children.toArray(n))}}function Sl(e,n){if(e===n)return!0;if(!e||!n)return!1;var r=Object.keys(e),t=Object.keys(n),a=r.length;if(t.length!==a)return!1;for(var s=0;s<a;s++){var o=r[s];if(e[o]!==n[o]||!Object.prototype.hasOwnProperty.call(n,o))return!1}return!0}var Us={exports:{}},ce={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nl;function Ev(){if(Nl)return ce;Nl=1;var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,t=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,i=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,g=e?Symbol.for("react.suspense"):60113,k=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,c=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,h=e?Symbol.for("react.responder"):60118,p=e?Symbol.for("react.scope"):60119;function R(_){if(typeof _=="object"&&_!==null){var O=_.$$typeof;switch(O){case n:switch(_=_.type,_){case l:case d:case t:case s:case a:case g:return _;default:switch(_=_&&_.$$typeof,_){case i:case u:case c:case m:case o:return _;default:return O}}case r:return O}}}function S(_){return R(_)===d}return ce.AsyncMode=l,ce.ConcurrentMode=d,ce.ContextConsumer=i,ce.ContextProvider=o,ce.Element=n,ce.ForwardRef=u,ce.Fragment=t,ce.Lazy=c,ce.Memo=m,ce.Portal=r,ce.Profiler=s,ce.StrictMode=a,ce.Suspense=g,ce.isAsyncMode=function(_){return S(_)||R(_)===l},ce.isConcurrentMode=S,ce.isContextConsumer=function(_){return R(_)===i},ce.isContextProvider=function(_){return R(_)===o},ce.isElement=function(_){return typeof _=="object"&&_!==null&&_.$$typeof===n},ce.isForwardRef=function(_){return R(_)===u},ce.isFragment=function(_){return R(_)===t},ce.isLazy=function(_){return R(_)===c},ce.isMemo=function(_){return R(_)===m},ce.isPortal=function(_){return R(_)===r},ce.isProfiler=function(_){return R(_)===s},ce.isStrictMode=function(_){return R(_)===a},ce.isSuspense=function(_){return R(_)===g},ce.isValidElementType=function(_){return typeof _=="string"||typeof _=="function"||_===t||_===d||_===s||_===a||_===g||_===k||typeof _=="object"&&_!==null&&(_.$$typeof===c||_.$$typeof===m||_.$$typeof===o||_.$$typeof===i||_.$$typeof===u||_.$$typeof===v||_.$$typeof===h||_.$$typeof===p||_.$$typeof===f)},ce.typeOf=R,ce}var Dl;function pv(){return Dl||(Dl=1,Us.exports=Ev()),Us.exports}var Hs,Ol;function yv(){if(Ol)return Hs;Ol=1;var e=pv(),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[e.ForwardRef]=t,s[e.Memo]=a;function o(c){return e.isMemo(c)?a:s[c.$$typeof]||n}var i=Object.defineProperty,l=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,k=Object.prototype;function m(c,f,v){if(typeof f!="string"){if(k){var h=g(f);h&&h!==k&&m(c,h,v)}var p=l(f);d&&(p=p.concat(d(f)));for(var R=o(c),S=o(f),_=0;_<p.length;++_){var O=p[_];if(!r[O]&&!(v&&v[O])&&!(S&&S[O])&&!(R&&R[O])){var A=u(f,O);try{i(c,O,A)}catch{}}}}return c}return Hs=m,Hs}yv();var zo=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=E.createContext(null)):E.createContext(null);zo.Consumer;var Tv=zo.Provider,Zo=Tv,hv=zo;function ea(){var e=E.useContext(hv);return fv(e),e}var bo;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(bo||(bo={}));var _o;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(_o||(_o={}));function Bu(e){var n=function(r){var t=ea(),a=r.value,s=r.children,o=st(r,["value","children"]),i=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?t.formatDateToParts(i,o):t.formatTimeToParts(i,o);return s(l)};return n.displayName=_o[e],n}function na(e){var n=function(r){var t=ea(),a=r.value,s=r.children,o=st(r,["value","children"]),i=t[e](a,o);if(typeof s=="function")return s(i);var l=t.textComponent||E.Fragment;return E.createElement(l,null,i)};return n.displayName=bo[e],n}function xu(e){return e&&Object.keys(e).reduce(function(n,r){var t=e[r];return n[r]=Ku(t)?cv(t):t,n},{})}var Il=function(e,n,r,t){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];var o=xu(t),i=Ro.apply(void 0,Mn([e,n,r,o],a,!1));return Array.isArray(i)?E.Children.toArray(i):i},Rv=function(e,n){var r=e.defaultRichTextElements,t=st(e,["defaultRichTextElements"]),a=xu(r),s=kv(J(J(J({},vv),t),{defaultRichTextElements:a}),n),o={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:a};return J(J({},s),{formatMessage:Il.bind(null,o,s.formatters),$t:Il.bind(null,o,s.formatters)})};function bv(e,n){var r=e.values,t=st(e,["values"]),a=n.values,s=st(n,["values"]);return Sl(a,r)&&Sl(t,s)}function Gu(e){var n=ea(),r=n.formatMessage,t=n.textComponent,a=t===void 0?E.Fragment:t,s=e.id,o=e.description,i=e.defaultMessage,l=e.values,d=e.children,u=e.tagName,g=u===void 0?a:u,k=e.ignoreTag,m={id:s,description:o,defaultMessage:i},c=r(m,l,{ignoreTag:k});return typeof d=="function"?d(Array.isArray(c)?c:[c]):g?E.createElement(g,null,E.Children.toArray(c)):E.createElement(E.Fragment,null,c)}Gu.displayName="FormattedMessage";var be=E.memo(Gu,bv);be.displayName="MemoizedFormattedMessage";na("formatDate");na("formatTime");na("formatNumber");na("formatList");na("formatDisplayName");Bu("formatDate");Bu("formatTime");const _v=[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],Av=[{kode:"REGISTRER_OM_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrering av opplysninger om verge/fullmektig"},{kode:"MANGELFULL_SØKNAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Mangelfull søknad"},{kode:"FASTSATT_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak - splitting av periode"},{kode:"BEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet"},{kode:"REGISTRER_PAPIRSØK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrer papirsøknad"},{kode:"BEH_STARTET_PÅ_NYTT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet på nytt"},{kode:"MIGRERT_FRA_INFOTRYGD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder flytting av sak fra Infotrygd"},{kode:"FORSLAG_VEDTAK_UTEN_TOTRINN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått"},{kode:"BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjenopptatt"},{kode:"AVBRUTT_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling er henlagt"},{kode:"ANKE_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ankebehandling"},{kode:"BREV_BESTILT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev bestilt"},{kode:"ENDRET_DEKNINGSGRAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Dekningsgrad er endret"},{kode:"OPPGAVE_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Oppgave før vedtak"},{kode:"IVERKSETTELSE_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen venter på iverksettelse"},{kode:"FASTSATT_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak"},{kode:"OVST_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak"},{kode:"INNSYN_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Innsynsbehandling opprettet"},{kode:"TILBAKEKR_VIDEREBEHANDLING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Metode for å håndtere tilbakekreving av feilutbetailng er valgt."},{kode:"SAK_GODKJENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak godkjent"},{kode:"BEH_KØET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er satt på vent"},{kode:"NYE_REGOPPLYSNINGER",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Nye registeropplysninger"},{kode:"BEH_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling på vent"},{kode:"TERMINBEKREFTELSE_UGYLDIG",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Terminbekreftelsens utstedt dato er før 22. svangerskapsuke. Behandlingen fortsatt uten ny terminbekreftelse"},{kode:"FAKTA_ENDRET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Fakta endret"},{kode:"MIGRERT_FRA_INFOTRYGD_FJERNET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder ikke lenger flytting av sak fra Infotrygd"},{kode:"BYTT_ENHET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Bytt enhet"},{kode:"REVURD_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Revurdering opprettet"},{kode:"KLAGE_BEH_NFP",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling NFP"},{kode:"KØET_BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Køet behandling er gjenopptatt"},{kode:"OVST_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak - splitting av periode"},{kode:"ANKEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Anke mottatt"},{kode:"UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet soknadsperiode"},{kode:"KLAGE_BEH_NK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling KA"},{kode:"AVKLART_AKTIVITETSKRAV",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Avklart aktivitetskrav"},{kode:"NY_INFO_FRA_TPS",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ny info fra TPS"},{kode:"KLAGEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klage mottatt"},{kode:"VEDTAK_FATTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak fattet"},{kode:"BEH_AVBRUTT_VUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vurdering før vedtak"},{kode:"UENDRET_UTFALL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Uendret utfall"},{kode:"VRS_REV_IKKE_SNDT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Varsel om revurdering ikke sendt"},{kode:"SPOLT_TILBAKE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er flyttet"},{kode:"OPPTJENING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet opptjeningsperiode"},{kode:"SAK_RETUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak retur"},{kode:"FJERNET_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Opplysninger om verge/fullmektig fjernet"},{kode:"BEH_MAN_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Gjenoppta behandling"},{kode:"BEH_OPPDATERT_NYE_OPPL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen oppdatert med nye opplysninger"},{kode:"VEDLEGG_MOTTATT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedlegg mottatt"},{kode:"OVERSTYRT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Overstyrt"},{kode:"BREV_SENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev sendt"},{kode:"FORSLAG_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått og sendt til beslutter"}],Sv=[{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],Nv=[{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"},{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"}],Dv=[{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"}],Ov=[{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"}],Iv=[{kode:"EGEN_NÆRING",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Egen næring"},{kode:"BRUKERS_ANDEL",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Brukers andel"},{kode:"FRILANS",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Frilans"}],Lv=[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],Pv=[{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"},{kode:"ENDRING_I_BEREGNING_OG_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning og uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"}],Fv=[{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilans"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (fisker)"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (dagmamma)"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"},{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"}],Kv=[{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"}],wv=[{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Vedtaksinstans"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aleneomsorg og annenpart rett"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstans"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"}],Mv=[{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"},{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"}],qv=[{kode:"HJEMSENDE_UTEN_Å_OPPHEVE",kodeverk:"KLAGEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"OPPHEVE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket oppheves"},{kode:"MEDHOLD_I_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Medhold"},{kode:"STADFESTE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"AVVIS_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Klagen avvises"}],Vv=[{kode:"BEH_STARTET_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Behandling startet på nytt"},{kode:"BERORT_BEH_OPPHOR",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens vedtak er opphørt"},{kode:"SAKSBEH_START_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Saksbehandling starter på nytt"},{kode:"BERORT_BEH_ENDRING_DEKNINGSGRAD",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens behandling har endret antall disponible stønadsdager"}],jv=[{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"},{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"ANNET",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Andre typer som f.eks utsettelse"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"}],Bv=[{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt søknad mangler"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"}],xv=[{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"}],Gv=[{kode:"TILBAKEKR_IGNORER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling, avvent samordning"},{kode:"TILBAKEKR_INNTREKK",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling hvor inntrekk dekker hele beløpet"},{kode:"TILBAKEKR_OPPRETT",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling med tilbakekreving"},{kode:"TILBAKEKR_OPPDATER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Endringer vil oppdatere eksisterende feilutbetalte perioder og beløp."}],Uv=[{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],Hv=[{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"}],Yv=[{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"}],Cv=[{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"}],Wv=[{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"},{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"}],$v=[{kode:"UTTAK_PERIODE_FOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fradato uttaksperiode"},{kode:"TPS_ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"UTTAK_PERIODE_TOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Tildato uttaksperiode"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"FODSELSDATO",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fødselsdato"}],Jv=[{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"}],zv=[{kode:"MANGLENDE_OPPLYSNINGER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen, men har manglende opplysninger"},{kode:"SØKER_ER_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er i permisjon"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekten er ikke med i beregningsgrunnlaget"},{kode:"IKKE_BRUK",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Ikke bruk"},{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK_MED_OVERSTYRTE_PERIODER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"BENYTT_A_INNTEKT_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekt fra A-inntekt benyttes i beregningsgrunnlaget"},{kode:"SØKER_ER_IKKE_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er ikke i permisjon"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er lagt til av saksbehandler beregningsgrunnlaget"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er slått sammen med annet"}],Zv=[{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"}],Xv=JSON.parse('[{"kode":"CAF","kodeverk":"LANDKODER","navn":"SENTRALAFRIKA. REP."},{"kode":"ARG","kodeverk":"LANDKODER","navn":"ARGENTINA"},{"kode":"IOT","kodeverk":"LANDKODER","navn":"BRITISK-INDISKE HAV"},{"kode":"CCK","kodeverk":"LANDKODER","navn":"KOKOSØYENE"},{"kode":"MEX","kodeverk":"LANDKODER","navn":"MEXICO"},{"kode":"CHN","kodeverk":"LANDKODER","navn":"REPUBLIKKEN KINA"},{"kode":"RUS","kodeverk":"LANDKODER","navn":"RUSSLAND"},{"kode":"BHS","kodeverk":"LANDKODER","navn":"BAHAMAS"},{"kode":"SYC","kodeverk":"LANDKODER","navn":"SEYCHELLENE"},{"kode":"CYP","kodeverk":"LANDKODER","navn":"KYPROS"},{"kode":"AUT","kodeverk":"LANDKODER","navn":"ØSTERRIKE"},{"kode":"QAT","kodeverk":"LANDKODER","navn":"QATAR"},{"kode":"VNM","kodeverk":"LANDKODER","navn":"VIETNAM"},{"kode":"HMD","kodeverk":"LANDKODER","navn":"HEARD OG MCDONALD ØYENE"},{"kode":"KEN","kodeverk":"LANDKODER","navn":"KENYA"},{"kode":"ASM","kodeverk":"LANDKODER","navn":"AM. SAMOA"},{"kode":"PAK","kodeverk":"LANDKODER","navn":"PAKISTAN"},{"kode":"ATG","kodeverk":"LANDKODER","navn":"ANTIGUA OG BARBUDA"},{"kode":"TZA","kodeverk":"LANDKODER","navn":"TANZANIA"},{"kode":"ZAF","kodeverk":"LANDKODER","navn":"SØR-AFRIKA"},{"kode":"CMR","kodeverk":"LANDKODER","navn":"KAMERUN"},{"kode":"MLI","kodeverk":"LANDKODER","navn":"MALI"},{"kode":"SLV","kodeverk":"LANDKODER","navn":"EL SALVADOR"},{"kode":"MAF","kodeverk":"LANDKODER","navn":"SAINT MARTIN"},{"kode":"KGZ","kodeverk":"LANDKODER","navn":"KIRGISISTAN"},{"kode":"FJI","kodeverk":"LANDKODER","navn":"FIJI"},{"kode":"RWA","kodeverk":"LANDKODER","navn":"RWANDA"},{"kode":"GEO","kodeverk":"LANDKODER","navn":"GEORGIA"},{"kode":"REU","kodeverk":"LANDKODER","navn":"REUNION"},{"kode":"MTQ","kodeverk":"LANDKODER","navn":"MARTINIQUE"},{"kode":"SDN","kodeverk":"LANDKODER","navn":"SUDAN"},{"kode":"AND","kodeverk":"LANDKODER","navn":"ANDORRA"},{"kode":"COK","kodeverk":"LANDKODER","navn":"COOKØYENE"},{"kode":"SHN","kodeverk":"LANDKODER","navn":"ST. HELENA"},{"kode":"COL","kodeverk":"LANDKODER","navn":"COLOMBIA"},{"kode":"PER","kodeverk":"LANDKODER","navn":"PERU"},{"kode":"STP","kodeverk":"LANDKODER","navn":"SAO TOME OG PRINCIPE"},{"kode":"COM","kodeverk":"LANDKODER","navn":"KOMORENE"},{"kode":"LUX","kodeverk":"LANDKODER","navn":"LUXEMBOURG"},{"kode":"PNG","kodeverk":"LANDKODER","navn":"PAPUA NY-GUINEA"},{"kode":"MKD","kodeverk":"LANDKODER","navn":"MAKEDONIA"},{"kode":"GIN","kodeverk":"LANDKODER","navn":"GUINEA"},{"kode":"CYM","kodeverk":"LANDKODER","navn":"CAYMANØYENE"},{"kode":"VGB","kodeverk":"LANDKODER","navn":"JOMFRUØYENE BRIT."},{"kode":"IRL","kodeverk":"LANDKODER","navn":"IRLAND"},{"kode":"XXX","kodeverk":"LANDKODER","navn":"STATSLØS"},{"kode":"HTI","kodeverk":"LANDKODER","navn":"HAITI"},{"kode":"LBN","kodeverk":"LANDKODER","navn":"LIBANON"},{"kode":"BRN","kodeverk":"LANDKODER","navn":"BRUNEI"},{"kode":"GMB","kodeverk":"LANDKODER","navn":"GAMBIA"},{"kode":"MLT","kodeverk":"LANDKODER","navn":"MALTA"},{"kode":"CRI","kodeverk":"LANDKODER","navn":"COSTA RICA"},{"kode":"UZB","kodeverk":"LANDKODER","navn":"UZBEKISTAN"},{"kode":"CXR","kodeverk":"LANDKODER","navn":"CHRISTMASØYA"},{"kode":"TUR","kodeverk":"LANDKODER","navn":"TYRKIA"},{"kode":"UKR","kodeverk":"LANDKODER","navn":"UKRAINA"},{"kode":"SUN","kodeverk":"LANDKODER","navn":"SOVJETUNIONEN"},{"kode":"PYF","kodeverk":"LANDKODER","navn":"FRANSK POLYNESIA"},{"kode":"MNE","kodeverk":"LANDKODER","navn":"MONTENEGRO"},{"kode":"BIH","kodeverk":"LANDKODER","navn":"BOSNIA-HERCEGOVINA"},{"kode":"PAN","kodeverk":"LANDKODER","navn":"PANAMA"},{"kode":"SJM","kodeverk":"LANDKODER","navn":"SVALBARD OG JAN MAYEN"},{"kode":"NIU","kodeverk":"LANDKODER","navn":"NIUE"},{"kode":"SUR","kodeverk":"LANDKODER","navn":"SURINAM"},{"kode":"MUS","kodeverk":"LANDKODER","navn":"MAURITIUS"},{"kode":"CHE","kodeverk":"LANDKODER","navn":"SVEITS"},{"kode":"BEL","kodeverk":"LANDKODER","navn":"BELGIA"},{"kode":"TTO","kodeverk":"LANDKODER","navn":"TRINIDAD OG TOBAGO"},{"kode":"SWZ","kodeverk":"LANDKODER","navn":"SWAZILAND"},{"kode":"TUN","kodeverk":"LANDKODER","navn":"TUNISIA"},{"kode":"GLP","kodeverk":"LANDKODER","navn":"GUADELOUPE"},{"kode":"KWT","kodeverk":"LANDKODER","navn":"KUWAIT"},{"kode":"DMA","kodeverk":"LANDKODER","navn":"DOMINICA"},{"kode":"BGR","kodeverk":"LANDKODER","navn":"BULGARIA"},{"kode":"ISL","kodeverk":"LANDKODER","navn":"ISLAND"},{"kode":"SVN","kodeverk":"LANDKODER","navn":"SLOVENIA"},{"kode":"PLW","kodeverk":"LANDKODER","navn":"PALAU"},{"kode":"GBR","kodeverk":"LANDKODER","navn":"STORBRITANNIA"},{"kode":"NAM","kodeverk":"LANDKODER","navn":"NAMIBIA"},{"kode":"FSM","kodeverk":"LANDKODER","navn":"MIKRONESIAFØD."},{"kode":"GNB","kodeverk":"LANDKODER","navn":"GUINEA-BISSAU"},{"kode":"UMI","kodeverk":"LANDKODER","navn":"MINDRE STILLEHAVSØYER"},{"kode":"MDA","kodeverk":"LANDKODER","navn":"MOLDOVA"},{"kode":"MMR","kodeverk":"LANDKODER","navn":"MYANMAR (BURMA)"},{"kode":"MOZ","kodeverk":"LANDKODER","navn":"MOSAMBIK"},{"kode":"SGS","kodeverk":"LANDKODER","navn":"SØR-GEORGIA OG SØR-SANDWICHØYE"},{"kode":"NPL","kodeverk":"LANDKODER","navn":"NEPAL"},{"kode":"BES","kodeverk":"LANDKODER","navn":"BONAIRE, SINT EUSTATIUS, SABA"},{"kode":"LBR","kodeverk":"LANDKODER","navn":"LIBERIA"},{"kode":"MDG","kodeverk":"LANDKODER","navn":"MADAGASKAR"},{"kode":"VIR","kodeverk":"LANDKODER","navn":"JOMFRUØYENE AM."},{"kode":"ARE","kodeverk":"LANDKODER","navn":"DE ARABISKE EMIRATER"},{"kode":"USA","kodeverk":"LANDKODER","navn":"USA"},{"kode":"NFK","kodeverk":"LANDKODER","navn":"NORFOLKØYA"},{"kode":"HKG","kodeverk":"LANDKODER","navn":"HONGKONG"},{"kode":"DEU","kodeverk":"LANDKODER","navn":"TYSKLAND"},{"kode":"LIE","kodeverk":"LANDKODER","navn":"LIECHTENSTEIN"},{"kode":"ECU","kodeverk":"LANDKODER","navn":"ECUADOR"},{"kode":"POL","kodeverk":"LANDKODER","navn":"POLEN"},{"kode":"PRK","kodeverk":"LANDKODER","navn":"NORD-KOREA"},{"kode":"GGY","kodeverk":"LANDKODER","navn":"GUERNSEY"},{"kode":"NZL","kodeverk":"LANDKODER","navn":"NEW ZEALAND"},{"kode":"MAR","kodeverk":"LANDKODER","navn":"MAROKKO"},{"kode":"BWA","kodeverk":"LANDKODER","navn":"BOTSWANA"},{"kode":"GUM","kodeverk":"LANDKODER","navn":"GUAM"},{"kode":"YUG","kodeverk":"LANDKODER","navn":"JUGOSLAVIA"},{"kode":"SEN","kodeverk":"LANDKODER","navn":"SENEGAL"},{"kode":"MWI","kodeverk":"LANDKODER","navn":"MALAWI"},{"kode":"TKM","kodeverk":"LANDKODER","navn":"TURKMENISTAN"},{"kode":"GAB","kodeverk":"LANDKODER","navn":"GABON"},{"kode":"FIN","kodeverk":"LANDKODER","navn":"FINLAND"},{"kode":"PRY","kodeverk":"LANDKODER","navn":"PARAGUAY"},{"kode":"PSE","kodeverk":"LANDKODER","navn":"DET PALESTINSKE OMRÅDET"},{"kode":"FRA","kodeverk":"LANDKODER","navn":"FRANKRIKE"},{"kode":"ZWE","kodeverk":"LANDKODER","navn":"ZIMBABWE"},{"kode":"AZE","kodeverk":"LANDKODER","navn":"AZERBAJDZJAN"},{"kode":"SXM","kodeverk":"LANDKODER","navn":"SINT MAARTEN"},{"kode":"NIC","kodeverk":"LANDKODER","navn":"NICARAGUA"},{"kode":"CAN","kodeverk":"LANDKODER","navn":"CANADA"},{"kode":"COG","kodeverk":"LANDKODER","navn":"KONGO, REPUBLIKKEN"},{"kode":"JPN","kodeverk":"LANDKODER","navn":"JAPAN"},{"kode":"KOR","kodeverk":"LANDKODER","navn":"SØR-KOREA"},{"kode":"HUN","kodeverk":"LANDKODER","navn":"UNGARN"},{"kode":"YEM","kodeverk":"LANDKODER","navn":"JEMEN"},{"kode":"CHL","kodeverk":"LANDKODER","navn":"CHILE"},{"kode":"BRB","kodeverk":"LANDKODER","navn":"BARBADOS"},{"kode":"DNK","kodeverk":"LANDKODER","navn":"DANMARK"},{"kode":"NRU","kodeverk":"LANDKODER","navn":"NAURU"},{"kode":"VCT","kodeverk":"LANDKODER","navn":"ST. VINCENT"},{"kode":"BEN","kodeverk":"LANDKODER","navn":"BENIN"},{"kode":"SMR","kodeverk":"LANDKODER","navn":"SAN MARINO"},{"kode":"TCD","kodeverk":"LANDKODER","navn":"TSJAD"},{"kode":"CUW","kodeverk":"LANDKODER","navn":"CURACAO"},{"kode":"IRN","kodeverk":"LANDKODER","navn":"IRAN"},{"kode":"SWE","kodeverk":"LANDKODER","navn":"SVERIGE"},{"kode":"ERI","kodeverk":"LANDKODER","navn":"ERITREA"},{"kode":"XUK","kodeverk":"LANDKODER","navn":"UKJENT"},{"kode":"MDV","kodeverk":"LANDKODER","navn":"MALDIVENE"},{"kode":"CSK","kodeverk":"LANDKODER","navn":"TSJEKKOSLOVAKIA"},{"kode":"GRD","kodeverk":"LANDKODER","navn":"GRENADA"},{"kode":"HND","kodeverk":"LANDKODER","navn":"HONDURAS"},{"kode":"FRO","kodeverk":"LANDKODER","navn":"FÆRØYENE"},{"kode":"COD","kodeverk":"LANDKODER","navn":"KONGO, DEN DEMOKR. REPUBL"},{"kode":"SRB","kodeverk":"LANDKODER","navn":"SERBIA"},{"kode":"AGO","kodeverk":"LANDKODER","navn":"ANGOLA"},{"kode":"NCL","kodeverk":"LANDKODER","navn":"NY-KALEDONIA"},{"kode":"SCG","kodeverk":"LANDKODER","navn":"SERBIA OG MONTENEGRO"},{"kode":"GTM","kodeverk":"LANDKODER","navn":"GUATEMALA"},{"kode":"AFG","kodeverk":"LANDKODER","navn":"AFGHANISTAN"},{"kode":"JAM","kodeverk":"LANDKODER","navn":"JAMAICA"},{"kode":"UGA","kodeverk":"LANDKODER","navn":"UGANDA"},{"kode":"IMN","kodeverk":"LANDKODER","navn":"ISLE OF MAN"},{"kode":"ISR","kodeverk":"LANDKODER","navn":"ISRAEL"},{"kode":"SOM","kodeverk":"LANDKODER","navn":"SOMALIA"},{"kode":"MNP","kodeverk":"LANDKODER","navn":"NORD-MARIANENE"},{"kode":"XXK","kodeverk":"LANDKODER","navn":"KOSOVO"},{"kode":"BLR","kodeverk":"LANDKODER","navn":"HVITERUSSLAND"},{"kode":"LSO","kodeverk":"LANDKODER","navn":"LESOTHO"},{"kode":"NER","kodeverk":"LANDKODER","navn":"NIGER"},{"kode":"IDN","kodeverk":"LANDKODER","navn":"INDONESIA"},{"kode":"CZE","kodeverk":"LANDKODER","navn":"DEN TSJEKKISKE REP."},{"kode":"URY","kodeverk":"LANDKODER","navn":"URUGUAY"},{"kode":"BGD","kodeverk":"LANDKODER","navn":"BANGLADESH"},{"kode":"WLF","kodeverk":"LANDKODER","navn":"WALLIS/FUTUNAØYENE"},{"kode":"CIV","kodeverk":"LANDKODER","navn":"ELFENBEINSKYSTEN"},{"kode":"ABW","kodeverk":"LANDKODER","navn":"ARUBA"},{"kode":"SLB","kodeverk":"LANDKODER","navn":"SALOMONØYENE"},{"kode":"TWN","kodeverk":"LANDKODER","navn":"TAIWAN"},{"kode":"SLE","kodeverk":"LANDKODER","navn":"SIERRA LEONE"},{"kode":"BRA","kodeverk":"LANDKODER","navn":"BRASIL"},{"kode":"DJI","kodeverk":"LANDKODER","navn":"DJIBOUTI"},{"kode":"PRI","kodeverk":"LANDKODER","navn":"PUERTO RICO"},{"kode":"PRT","kodeverk":"LANDKODER","navn":"PORTUGAL"},{"kode":"ANT","kodeverk":"LANDKODER","navn":"DE NEDERLANDSKE ANTILLENE"},{"kode":"THA","kodeverk":"LANDKODER","navn":"THAILAND"},{"kode":"TLS","kodeverk":"LANDKODER","navn":"ØST-TIMOR"},{"kode":"SPM","kodeverk":"LANDKODER","navn":"ST-PIERRE OG MIQUELON"},{"kode":"ALB","kodeverk":"LANDKODER","navn":"ALBANIA"},{"kode":"EGY","kodeverk":"LANDKODER","navn":"EGYPT"},{"kode":"GRC","kodeverk":"LANDKODER","navn":"HELLAS"},{"kode":"BFA","kodeverk":"LANDKODER","navn":"BURKINA FASO"},{"kode":"ALA","kodeverk":"LANDKODER","navn":"ÅLAND"},{"kode":"BOL","kodeverk":"LANDKODER","navn":"BOLIVIA"},{"kode":"DDR","kodeverk":"LANDKODER","navn":"TYSKLAND (ØST)"},{"kode":"HRV","kodeverk":"LANDKODER","navn":"KROATIA"},{"kode":"AUS","kodeverk":"LANDKODER","navn":"AUSTRALIA"},{"kode":"NGA","kodeverk":"LANDKODER","navn":"NIGERIA"},{"kode":"LBY","kodeverk":"LANDKODER","navn":"LIBYA"},{"kode":"MYT","kodeverk":"LANDKODER","navn":"MAYOTTE"},{"kode":"LVA","kodeverk":"LANDKODER","navn":"LATVIA"},{"kode":"BTN","kodeverk":"LANDKODER","navn":"BHUTAN"},{"kode":"MSR","kodeverk":"LANDKODER","navn":"MONSERRAT"},{"kode":"???","kodeverk":"LANDKODER","navn":"UOPPGITT/UKJENT"},{"kode":"OMN","kodeverk":"LANDKODER","navn":"OMAN"},{"kode":"SVK","kodeverk":"LANDKODER","navn":"SLOVAKIA"},{"kode":"TUV","kodeverk":"LANDKODER","navn":"TUVALU"},{"kode":"VEN","kodeverk":"LANDKODER","navn":"VENEZUELA"},{"kode":"ITA","kodeverk":"LANDKODER","navn":"ITALIA"},{"kode":"KHM","kodeverk":"LANDKODER","navn":"KAMBODSJA"},{"kode":"ARM","kodeverk":"LANDKODER","navn":"ARMENIA"},{"kode":"LCA","kodeverk":"LANDKODER","navn":"ST. LUCIA"},{"kode":"GIB","kodeverk":"LANDKODER","navn":"GIBRALTAR"},{"kode":"JEY","kodeverk":"LANDKODER","navn":"JERSEY"},{"kode":"LAO","kodeverk":"LANDKODER","navn":"LAOS"},{"kode":"BHR","kodeverk":"LANDKODER","navn":"BAHRAIN"},{"kode":"ESH","kodeverk":"LANDKODER","navn":"VEST-SAHARA"},{"kode":"TKL","kodeverk":"LANDKODER","navn":"TOKELAU"},{"kode":"MNG","kodeverk":"LANDKODER","navn":"MONGOLIA"},{"kode":"BLZ","kodeverk":"LANDKODER","navn":"BELIZE"},{"kode":"GUF","kodeverk":"LANDKODER","navn":"FRANSK GUYANA"},{"kode":"TCA","kodeverk":"LANDKODER","navn":"TURKS/CAICOSØYENE"},{"kode":"WSM","kodeverk":"LANDKODER","navn":"SAMOA"},{"kode":"JOR","kodeverk":"LANDKODER","navn":"JORDAN"},{"kode":"MRT","kodeverk":"LANDKODER","navn":"MAURITANIA"},{"kode":"CUB","kodeverk":"LANDKODER","navn":"CUBA"},{"kode":"BDI","kodeverk":"LANDKODER","navn":"BURUNDI"},{"kode":"GHA","kodeverk":"LANDKODER","navn":"GHANA"},{"kode":"KNA","kodeverk":"LANDKODER","navn":"ST.KITTS OG NEVIS"},{"kode":"ETH","kodeverk":"LANDKODER","navn":"ETIOPIA"},{"kode":"SSD","kodeverk":"LANDKODER","navn":"SØR-SUDAN"},{"kode":"VAT","kodeverk":"LANDKODER","navn":"VATIKANSTATEN"},{"kode":"CPV","kodeverk":"LANDKODER","navn":"KAPP VERDE"},{"kode":"PCN","kodeverk":"LANDKODER","navn":"PITCAIRN"},{"kode":"SGP","kodeverk":"LANDKODER","navn":"SINGAPORE"},{"kode":"KAZ","kodeverk":"LANDKODER","navn":"KAZAKHSTAN"},{"kode":"MYS","kodeverk":"LANDKODER","navn":"MALAYSIA"},{"kode":"PHL","kodeverk":"LANDKODER","navn":"FILIPPINENE"},{"kode":"EST","kodeverk":"LANDKODER","navn":"ESTLAND"},{"kode":"NOR","kodeverk":"LANDKODER","navn":"NORGE"},{"kode":"BMU","kodeverk":"LANDKODER","navn":"BERMUDA"},{"kode":"LTU","kodeverk":"LANDKODER","navn":"LITAUEN"},{"kode":"MAC","kodeverk":"LANDKODER","navn":"MACAO"},{"kode":"TON","kodeverk":"LANDKODER","navn":"TONGA"},{"kode":"ROU","kodeverk":"LANDKODER","navn":"ROMANIA"},{"kode":"BLM","kodeverk":"LANDKODER","navn":"SAINT BARTHELEMY"},{"kode":"SAU","kodeverk":"LANDKODER","navn":"SAUDI-ARABIA"},{"kode":"GNQ","kodeverk":"LANDKODER","navn":"EKVATORIAL-GUINEA"},{"kode":"TGO","kodeverk":"LANDKODER","navn":"TOGO"},{"kode":"ZMB","kodeverk":"LANDKODER","navn":"ZAMBIA"},{"kode":"VUT","kodeverk":"LANDKODER","navn":"VANUATU"},{"kode":"DZA","kodeverk":"LANDKODER","navn":"ALGERIE"},{"kode":"TJK","kodeverk":"LANDKODER","navn":"TADZJIKISTAN"},{"kode":"NLD","kodeverk":"LANDKODER","navn":"NEDERLAND"},{"kode":"KIR","kodeverk":"LANDKODER","navn":"KIRIBATI"},{"kode":"GUY","kodeverk":"LANDKODER","navn":"GUYANA"},{"kode":"BVT","kodeverk":"LANDKODER","navn":"BOUVETØYA"},{"kode":"IND","kodeverk":"LANDKODER","navn":"INDIA"},{"kode":"LKA","kodeverk":"LANDKODER","navn":"SRI LANKA"},{"kode":"SYR","kodeverk":"LANDKODER","navn":"SYRIA"},{"kode":"ESP","kodeverk":"LANDKODER","navn":"SPANIA"},{"kode":"GRL","kodeverk":"LANDKODER","navn":"GRØNLAND"},{"kode":"AIA","kodeverk":"LANDKODER","navn":"ANGUILLA"},{"kode":"IRQ","kodeverk":"LANDKODER","navn":"IRAK"},{"kode":"MCO","kodeverk":"LANDKODER","navn":"MONACO"},{"kode":"MHL","kodeverk":"LANDKODER","navn":"MARSHALLØYENE"},{"kode":"DOM","kodeverk":"LANDKODER","navn":"DEN DOMINIKANSKE REP"},{"kode":"FLK","kodeverk":"LANDKODER","navn":"FALKLANDSØYENE"}]'),Qv=[{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-005",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakebetaling endring"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"}],ec=[{kode:"IKKE_I_AKTIVITET_IKKE_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Aktiviteten er ikke dokumentert"},{kode:"I_AKTIVITET",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er i aktivitet"},{kode:"IKKE_I_AKTIVITET_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er ikke i aktivitet"}],nc=[{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"},{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"}],rc=[{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"},{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"}],tc=JSON.parse('[{"kode":"FODSELSDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fødselsdato"},{"kode":"TILBAKETREKK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Tilbaketrekk"},{"kode":"ER_ANKEFRIST_IKKE_OVERHOLDT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er ankefrist ikke overholdt"},{"kode":"FNR","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fødselsnummer"},{"kode":"TERMINBEKREFTELSE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Terminbekreftelse"},{"kode":"TERMINDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Termindato"},{"kode":"ANKE_RESULTAT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Anke resultat"},{"kode":"UTTAK_SPLITT_TIDSPERIODE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resulterende periode ved splitting"},{"kode":"UTTAK_TREKKDAGER_FLERBARN_KVOTE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Trekkdager flerbarn kvote"},{"kode":"OPPHOLDSRETT_IKKE_EOS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruker har ikke oppholdsrett i EØS"},{"kode":"TILRETTELEGGING_SKAL_BRUKES","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avgjør om tilrettelegging skal brukes"},{"kode":"ER_ANKE_IKKE_KONKRET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er anke ikke konkret."},{"kode":"BEHANDLING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Behandling"},{"kode":"UTTAK_GRADERING_ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Gradering av arbeidsforhold"},{"kode":"ANKE_AVVIST_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak til avvist anke"},{"kode":"INNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntekt"},{"kode":"SOKNADSFRISTVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Søknadsfristvilkåret"},{"kode":"DAGPENGER_INNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dagpenger"},{"kode":"ARBEIDSFORHOLD_BEKREFTET_TOM_DATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Til og med dato fastsatt av saksbehandler"},{"kode":"SOKNADSFRIST","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Søknadsfrist"},{"kode":"VILKAR_SOM_ANVENDES","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Vilkår som anvendes"},{"kode":"PERIODE_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Periode f.o.m."},{"kode":"UTTAK_PROSENT_UTBETALING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Utbetalingsgrad"},{"kode":"NYTT_REFUSJONSKRAV","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Nytt refusjonskrav"},{"kode":"DODSDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dødsdato"},{"kode":"DOKUMENTASJON_FORELIGGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dokumentasjon foreligger"},{"kode":"LØNNSENDRING_I_PERIODEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Lønnsendring i beregningsperioden"},{"kode":"AVKLART_PERIODE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avklart periode"},{"kode":"SVANGERSKAPSPENGERVILKÅRET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Svangerskapsvilkåret"},{"kode":"KLAGE_OMGJØR_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak til omgjøring"},{"kode":"AKTIVITET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Aktivitet"},{"kode":"UTTAK_STØNADSKONTOTYPE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Stønadskontotype"},{"kode":"ALENEOMSORG","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Aleneomsorg"},{"kode":"OMSORG","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Omsorg"},{"kode":"KONTAKTPERSON","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Kontaktperson"},{"kode":"ER_KLAGE_KONKRET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"TILRETTELEGGING_BEHOV_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Tilrettelegging behov FOM"},{"kode":"ANNEN_FORELDER_RETT_EØS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Annen forelder har opptjent rett fra land i EØS"},{"kode":"AKTIVITETSKRAV_AVKLARING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avklaring om mor er i aktivitet"},{"kode":"FASTSETT_RESULTAT_PERIODEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fastsett resultat for perioden"},{"kode":"FRILANSVIRKSOMHET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Frilansvirksomhet"},{"kode":"MANN_ADOPTERER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mann adopterer"},{"kode":"ANDEL_ARBEID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Andel i arbeid"},{"kode":"DELVIS_TILRETTELEGGING_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Delvis tilrettelegging FOM"},{"kode":"OPPTJENINGSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Opptjeningsvilkåret"},{"kode":"ER_KLAGER_PART","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"UTTAK_PERIODE_RESULTAT_TYPE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resultattype for periode"},{"kode":"UTLAND","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Utland"},{"kode":"BRUK_ANTALL_I_TPS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruk antall fra folkeregisteret"},{"kode":"AKTIVITET_PERIODE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Perioden med aktivitet"},{"kode":"FASTSETT_ETTERLØNN_SLUTTPAKKE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fastsett søkers månedsinntekt fra etterlønn eller sluttpakke"},{"kode":"IKKE_OMSORG_PERIODEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Perioden Søker har ikke omsorg for barnet"},{"kode":"DEKNINGSGRAD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Dekningsgrad"},{"kode":"ER_ANKEN_IKKE_SIGNERT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"er anken ikke signert."},{"kode":"SYKDOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Sykdom"},{"kode":"UTSTEDTDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Utstedtdato"},{"kode":"FODSELSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fødsel"},{"kode":"NAVN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Navn"},{"kode":"UTTAK_TREKKDAGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Trekkdager"},{"kode":"PA_KLAGD_BEHANDLINGID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Påklagd behandlingId"},{"kode":"VURDER_ETTERLØNN_SLUTTPAKKE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Har søker inntekt fra etterlønn eller sluttpakke"},{"kode":"OPPHOLDSRETT_EOS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruker har oppholdsrett i EØS"},{"kode":"RETT_TIL_FORELDREPENGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Rett til foreldrepenger"},{"kode":"INNTEKTSKATEGORI","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntektskategori"},{"kode":"ADOPTERER_ALENE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Adopterer alene"},{"kode":"ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Arbeidsforhold"},{"kode":"BRUKER_TVUNGEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruker er under tvungen forvaltning"},{"kode":"DELVIS_REFUSJON_FØR_STARTDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Delvis refusjon som utbetales før startdato for full refusjon"},{"kode":"ENDRING_TIDSBEGRENSET_ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Endring tidsbegrenset arbeidsforhold"},{"kode":"VURDER_GRADERING_PÅ_ANDEL_UTEN_BG","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Vurder om søker har gradering på en andel uten beregningsgrunnlag"},{"kode":"MANDAT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mandat"},{"kode":"MOR_MOTTAR_UFØRETRYGD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mor mottar uføretrygd"},{"kode":"HEL_TILRETTELEGGING_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Hel tilrettelegging FOM"},{"kode":"ORGANISASJONSNUMMER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Organisasjonsnummer"},{"kode":"UTTAK_GRADERING_AVSLAG_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak avslag gradering"},{"kode":"ER_KLAGEN_SIGNERT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"ER_KLAGEFRIST_OVERHOLDT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er klagefrist overholdt"},{"kode":"OMSORGSVILKAR","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Foreldreansvar"},{"kode":"PA_ANKET_BEHANDLINGID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"på anket behandlingsId."},{"kode":"SLUTTE_ARBEID_FOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Slutte arbeid FOM"},{"kode":"BRUK_ANTALL_I_SOKNAD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruk antall fra søknad"},{"kode":"KLAGE_RESULTAT_NFP","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resultat"},{"kode":"FORDELING_FOR_ANDEL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fordeling for arbeidsforhold"},{"kode":"UTTAK_SAMTIDIG_UTTAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Samtidig uttak"},{"kode":"ER_SOKER_BOSATT_I_NORGE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er søker bosatt i Norge?"},{"kode":"FRILANS_INNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Frilans inntekt"},{"kode":"FASTSETT_VIDERE_BEHANDLING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fastsett videre behandling"},{"kode":"BRUK_ANTALL_I_VEDTAKET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Bruk antall fra vedtaket"},{"kode":"OMSORGSOVERTAKELSESDATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Omsorgsovertakelsesdato"},{"kode":"UTTAK_PERIODE_RESULTAT_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Resultat årsak"},{"kode":"ENDRING_NAERING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Endring i næring"},{"kode":"FORDELING_FOR_NY_ANDEL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny andel med fordeling"},{"kode":"BEHANDLENDE_ENHET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Behandlende enhet"},{"kode":"BRUTTO_NAERINGSINNTEKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Brutto næringsinntekt"},{"kode":"FORDELING_ETTER_BESTEBEREGNING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Fordeling etter besteberegning"},{"kode":"STARTDATO_FRA_SOKNAD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Startdato fra søknad"},{"kode":"NY_STARTDATO_REFUSJON","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny startdato for refusjon"},{"kode":"OVERSTYRT_VURDERING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Overstyrt vurdering"},{"kode":"KLAGE_RESULTAT_KA","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ytelsesvedtak"},{"kode":"FARESIGNALER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Faresignaler"},{"kode":"NY_AKTIVITET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Det er lagt til ny aktivitet for"},{"kode":"MOTTAR_YTELSE_FRILANS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mottar søker ytelse for frilansaktiviteten"},{"kode":"NY_REFUSJONSFRIST","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny refusjonsfrist"},{"kode":"OVERSTYRT_BEREGNING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Overstyrt beregning"},{"kode":"AVKLARSAKSOPPLYSNINGER","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Avklar saksopplysninger"},{"kode":"INNTEKT_FRA_ARBEIDSFORHOLD","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntekt fra arbeidsforhold"},{"kode":"SOKERSOPPLYSNINGSPLIKT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Søkers opplysningsplikt"},{"kode":"SELVSTENDIG_NAERINGSDRIVENDE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Selvstendig næringsdrivende"},{"kode":"GYLDIG_MEDLEM_FOLKETRYGDEN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Gyldig medlem i folketrygden"},{"kode":"MOTTATT_DATO","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mottatt dato"},{"kode":"ANTALL_BARN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Antall barn"},{"kode":"EKTEFELLES_BARN","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ektefelles barn"},{"kode":"MILITÆR_ELLER_SIVIL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Militær- eller siviltjeneste"},{"kode":"PERIODE_TOM","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Periode t.o.m."},{"kode":"FORELDREANSVARSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Foreldreansvar"},{"kode":"STILLINGSPROSENT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Stillingsprosent"},{"kode":"ADOPSJONSVILKARET","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Adopsjon"},{"kode":"ANKE_OMGJØR_ÅRSAK","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Årsak til omgjøring"},{"kode":"INNTEKTSKATEGORI_FOR_ANDEL","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Inntektskategori for andel"},{"kode":"KONTROLL_AV_BESTEBEREGNING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Kontroll av besteberegning"},{"kode":"MOR_MOTTAR_STØNAD_EØS","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mor mottar foreldrepenger fra land i EØS"},{"kode":"ER_ANKER_IKKE_PART","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Angir om anker ikke er part i saken."},{"kode":"ER_VILKÅRENE_TILBAKEKREVING_OPPFYLT","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er vilkårene for tilbakekreving oppfylt"},{"kode":"NY_FORDELING","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Ny fordeling for"},{"kode":"ER_SÆRLIGE_GRUNNER_TIL_REDUKSJON","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Er det særlige grunner til reduksjon"},{"kode":"MOTTAR_YTELSE_ARBEID","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Mottar søker ytelse for arbeid i {value}"},{"kode":"TYPE_VERGE","kodeverk":"HISTORIKK_ENDRET_FELT_TYPE","navn":"Type verge"}]'),ac=[{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet/savnet"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Uregistrert person"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"UTAN",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person annullert tilgang Fnr"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utvandret"}],sc=[{kode:"ENHETSREGISTERET",kodeverk:"FAGSYSTEM",navn:"Enhetsregisteret"},{kode:"INFOTRYGD",kodeverk:"FAGSYSTEM",navn:"Infotrygd"},{kode:"INNTEKT",kodeverk:"FAGSYSTEM",navn:"INNTEKT"},{kode:"ARENA",kodeverk:"FAGSYSTEM",navn:"Arena"},{kode:"GOSYS",kodeverk:"FAGSYSTEM",navn:"Gosys"},{kode:"JOARK",kodeverk:"FAGSYSTEM",navn:"Joark"},{kode:"K9SAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Folketrygdloven Kapittel 9"},{kode:"FPSAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Foreldrepenger"},{kode:"AAREGISTERET",kodeverk:"FAGSYSTEM",navn:"AAregisteret"},{kode:"MEDL",kodeverk:"FAGSYSTEM",navn:"MEDL"},{kode:"TPS",kodeverk:"FAGSYSTEM",navn:"TPS"},{kode:"VLSP",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Sykepenger"}],oc=[{kode:"ANKE_STADFESTE_YTELSESVEDTAK",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"ANKEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"ANKE_AVVIS",kodeverk:"ANKEVURDERING",navn:"Anken avvises"},{kode:"ANKE_OMGJOER",kodeverk:"ANKEVURDERING",navn:"Anken omgjøres"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket oppheves og hjemsendes"}],ic=[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"}],lc=[{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],dc=[{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"}],uc=[{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er slått sammen med et annet"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforhold lagt til av saksbehandler"},{kode:"BRUK_UTEN_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk, men ikke benytt inntektsmelding"},{kode:"IKKE_BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Ikke bruk"},{kode:"BASERT_PÅ_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet som ikke ligger i AA-reg er basert på inntektsmelding"},{kode:"BRUK_MED_OVERSTYRT_PERIODE",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Inntekten til arbeidsforholdet skal ikke være med i beregningsgrunnlaget"}],gc=[{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"}],kc=[{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"}],mc=[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],fc=[{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],vc=[{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"}],cc=[{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],Ec=[{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"}],pc=[{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"},{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"}],yc=[{kode:"SAMMENSATT_KONTROLL",kodeverk:"FAGSAK_MARKERING",navn:"Sammensatt kontroll"},{kode:"EØS_BOSATT_NORGE",kodeverk:"FAGSAK_MARKERING",navn:"EØS bosatt Norge"},{kode:"SELVSTENDIG_NÆRING",kodeverk:"FAGSAK_MARKERING",navn:"Næringsdrivende"},{kode:"BARE_FAR_RETT",kodeverk:"FAGSAK_MARKERING",navn:"Bare far har rett"},{kode:"BOSATT_UTLAND",kodeverk:"FAGSAK_MARKERING",navn:"Bosatt utland"},{kode:"DØD_DØDFØDSEL",kodeverk:"FAGSAK_MARKERING",navn:"Død eller dødfødsel"},{kode:"PRAKSIS_UTSETTELSE",kodeverk:"FAGSAK_MARKERING",navn:"Praksis utsettelse"}],Tc={RelasjonsRolleType:_v,HistorikkinnslagType:Av,UttakUtsettelseType:Sv,FagsakYtelseType:Nv,StønadskontoType:[{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"}],FagsakStatus:Dv,Venteårsak:[{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga for tidlig søknad"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdId som stemmer med Aareg"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på scanning"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev venter søknad."},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."}],AnkeVurderingOmgjør:[{kode:"ANKE_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Gunst omgjør i anke"},{kode:"ANKE_TIL_UGUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Ugunst omgjør i anke"},{kode:"ANKE_DELVIS_OMGJOERING_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Delvis omgjøring, til gunst i anke"}],BehandlingÅrsakType:[{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger inntekt"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Inntektsmelding"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger søknadsfrist"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger opptjening"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Søknad"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger beregning"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. u26-29"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger medlemskap"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev uttak"}],GraderingAvslagÅrsak:[{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"Avslag gradering - arbeid 100% eller mer",lovHjemmel:null}],AktivitetStatus:Ov,BeregningsgrunnlagAndeltype:Iv,RevurderingVarslingÅrsak:[{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utvandret"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:Lv,KonsekvensForYtelsen:Pv,Inntektskategori:Fv,SivilstandType:Kv,SkjermlenkeType:wv,FaktaOmBeregningTilfelle:Mv,KlageVurdering:qv,HistorikkBegrunnelseType:Vv,OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:jv,KlageAvvistÅrsak:[{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klage er ugyldig",lovHjemmel:null}],BehandlingResultatType:Bv,VergeType:xv,TilbakekrevingVidereBehandling:Gv,OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"}],FamilieHendelseType:Uv,KlageHjemmel:Hv,VilkårType:[{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"}],FarSøkerType:[{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"}],FaresignalVurdering:Yv,ArbeidType:Cv,KlageMedholdÅrsak:[{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"}],Region:Wv,OppgaveÅrsak:[{kode:"BEH_SAK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i VL"},{kode:"BEH_SAK_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i Infotrygd"},{kode:"INNHENT_DOK",kodeverk:"OPPGAVE_AARSAK",navn:"Innhent dokumentasjon"},{kode:"VUR_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder dokument i VL"},{kode:"REG_SOK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Registrere søknad i VL"},{kode:"SETTVENT_STO",kodeverk:"OPPGAVE_AARSAK",navn:"Sett Arena utbetaling på vent"},{kode:"RV_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Revurdere i VL"},{kode:"VUR_KONS_YTE_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder konsekvens for ytelse foreldrepenger"},{kode:"GOD_VED_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Godkjenne vedtak i VL"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"},{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"}],HistorikkOpplysningType:$v,FordelingPeriodeKilde:Jv,KlageVurderingOmgjør:[{kode:"DELVIS_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Delvis medhold i klage"},{kode:"UGUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Ugunst medhold i klage"},{kode:"GUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Gunst medhold i klage"}],VurderArbeidsforholdHistorikkinnslag:zv,Arbeidskategori:Zv,VurderÅrsak:[{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"}],Landkoder:Xv,BehandlingType:Qv,KontrollerAktivitetskravAvklaring:ec,InnsynResultatType:nc,MedlemskapType:rc,HistorikkEndretFeltType:tc,PersonstatusType:ac,Fagsystem:sc,AnkeVurdering:oc,UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"}],BehandlingStatus:ic,VirksomhetType:lc,MedlemskapDekningType:dc,ArbeidsforholdHandlingType:uc,HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"}],Avslagsårsak:JSON.parse('{"FP_VK_3":[{"kode":"1007","kodeverk":"AVSLAGSARSAK","navn":"Søkt for sent","lovHjemmel":null}],"FP_VK_4":[{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1005","kodeverk":"AVSLAGSARSAK","navn":"Ektefelles/samboers barn","lovHjemmel":null},{"kode":"1011","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK11\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK16\\", \\"lovreferanse\\": \\"§ 14-5 2. ledd\\"}]}]}"},{"kode":"1006","kodeverk":"AVSLAGSARSAK","navn":"Mann adopterer ikke alene","lovHjemmel":null},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1004","kodeverk":"AVSLAGSARSAK","navn":"Barn over 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_1":[{"kode":"1002","kodeverk":"AVSLAGSARSAK","navn":"Søker er medmor","lovHjemmel":null},{"kode":"1031","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}"},{"kode":"1003","kodeverk":"AVSLAGSARSAK","navn":"Søker er far","lovHjemmel":null},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1001","kodeverk":"AVSLAGSARSAK","navn":"Søkt for tidlig","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1026","kodeverk":"AVSLAGSARSAK","navn":"Fødselsdato ikke oppgitt eller registrert","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_2":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utvandret","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"}],"-":[],"FP_VK_41":[{"kode":"1041","kodeverk":"AVSLAGSARSAK","navn":"For lavt brutto beregningsgrunnlag","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_41\\", \\"lovreferanse\\": \\"14-7\\"}]}]}"}],"FP_VK_21":[{"kode":"1035","kodeverk":"AVSLAGSARSAK","navn":"Ikke tilstrekkelig opptjening","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_23\\", \\"lovreferanse\\": \\"14-6\\"}]}]}"}],"FP_VK_11":[{"kode":"1027","kodeverk":"AVSLAGSARSAK","navn":"Ingen barn dokumentert på far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1028","kodeverk":"AVSLAGSARSAK","navn":"Mor fyller ikke vilkåret for sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1029","kodeverk":"AVSLAGSARSAK","navn":"Bruker er ikke registrert som far/medmor til barnet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_33":[{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1017","kodeverk":"AVSLAGSARSAK","navn":"Omsorgsovertakelse etter 56 uker","lovHjemmel":null},{"kode":"1016","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke barnets far","lovHjemmel":null},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1018","kodeverk":"AVSLAGSARSAK","navn":"Ikke foreldreansvar alene etter barnelova","lovHjemmel":null}],"FP_VK_34":[{"kode":"1019","kodeverk":"AVSLAGSARSAK","navn":"Manglende dokumentasjon","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_34\\", \\"lovreferanse\\": \\"21-3\\"}]}]}"}],"FP_VK_23":[{"kode":"1035","kodeverk":"AVSLAGSARSAK","navn":"Ikke tilstrekkelig opptjening","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_23\\", \\"lovreferanse\\": \\"14-6\\"}]}]}"}],"FP_VK_8":[{"kode":"1014","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke foreldreansvar","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1013","kodeverk":"AVSLAGSARSAK","navn":"Barn ikke under 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1015","kodeverk":"AVSLAGSARSAK","navn":"Søker har hatt vanlig samvær med barnet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"}],"SVP_VK_1":[{"kode":"1065","kodeverk":"AVSLAGSARSAK","navn":"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 2. ledd\\"}]}]}"},{"kode":"1062","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Søker har mottatt sykepenger","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1066","kodeverk":"AVSLAGSARSAK","navn":"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 2. ledd\\"}]}]}"},{"kode":"1064","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1063","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1061","kodeverk":"AVSLAGSARSAK","navn":"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 3. ledd\\"}]}]}"},{"kode":"1060","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Søker er ikke gravid kvinne","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"}],"FP_VK_16":[{"kode":"1004","kodeverk":"AVSLAGSARSAK","navn":"Barn over 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1051","kodeverk":"AVSLAGSARSAK","navn":"Stebarnsadopsjon ikke flere dager igjen","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_5":[{"kode":"1009","kodeverk":"AVSLAGSARSAK","navn":"Mor ikke død","lovHjemmel":null},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1008","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke barnets far","lovHjemmel":null},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1011","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK11\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK16\\", \\"lovreferanse\\": \\"§ 14-5 2. ledd\\"}]}]}"},{"kode":"1012","kodeverk":"AVSLAGSARSAK","navn":"Far har ikke omsorg for barnet","lovHjemmel":null},{"kode":"1010","kodeverk":"AVSLAGSARSAK","navn":"Mor ikke død ved fødsel/omsorg","lovHjemmel":null}],"FP_VK_2_L":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utvandret","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"}],"FP_VK_2_F":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utvandret","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1052","kodeverk":"AVSLAGSARSAK","navn":"Innflyttet for mindre enn ett år siden","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK_2_F\\", \\"lovreferanse\\": \\"14-17 5. ledd\\"}]}]}"}]}'),OpptjeningAktivitetType:gc,PermisjonsbeskrivelseType:kc,Språkkode:[{kode:"NB",kodeverk:"SPRAAK_KODE",navn:"Norsk"},{kode:"NN",kodeverk:"SPRAAK_KODE",navn:"Nynorsk"},{kode:"EN",kodeverk:"SPRAAK_KODE",navn:"Engelsk"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"}],OppholdstillatelseType:mc,MedlemskapManuellVurderingType:fc,ManuellBehandlingÅrsak:[{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."}],MorsAktivitet:vc,NaturalYtelseType:cc,PeriodeResultatÅrsak:JSON.parse('[{"kode":"2010","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4072","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjuende ledd: Barnet er dødt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-7","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4037","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Ikke heltidsarbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4085","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Det er ikke samtykke mellom partene","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2035","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-16\\"}}}","sortering":"14-14-3","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4052","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4032","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4013","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4084","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4097","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Adopsjonsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4104","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 tredje ledd: Stønadsperiode for nytt barn","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4086","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10,14-11\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4002","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Ikke stønadsdager igjen på stønadskonto","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2012","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4023","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-5","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4031","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Ferie/arbeid innenfor de første 6 ukene","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4112","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Barnets innleggelse første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2017","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2036","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4071","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Bruker er død","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4098","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Foreldreansvarsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4067","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4066","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2032","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2026","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2031","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12, jf. §14-16: Gradering av kvote/overført kvote","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4081","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4053","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2007","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Innvilget foreldrepenger, kun mor har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2014","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4007","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2023","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15\\"}}}","sortering":"14-15-1","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4056","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-g","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2016","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-b","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2004","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2018","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2024","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4068","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4087","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-2: Opphør medlemskap","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-2\\"}}}","sortering":"14-02","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4110","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4115","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4096","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Fødselsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4035","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4073","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4069","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4062","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4089","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-g","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4034","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-9\\"}}}","sortering":"14-11-0","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2038","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Samtidig uttak","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4075","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger","lovHjemmel":"","sortering":"14-09-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4005","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjuende ledd: Ikke sammenhengende perioder","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-7","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2034","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"2028","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4060","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2006","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Innvilget foreldrepenger før fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4105","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4058","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2002","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Innvilget fellesperiode/foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4095","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL"],"synligForRolle":["MOR"]},{"kode":"4116","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4092","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Avslag overføring - har ikke aleneomsorg for barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4038","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2022","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4008","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4064","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4111","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Søkers innleggelse første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4054","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-e","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2020","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-09-1","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4077","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10 a\\"}}}","sortering":"14-10-0-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2019","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-d","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2025","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4030","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Avslag utsettelse før termin/fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4050","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2003","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Innvilget uttak av kvote","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4082","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2013","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-d","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2027","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4088","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-f","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4063","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4099","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-6: Opptjeningsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-6\\"}}}","sortering":"14-06","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2039","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4103","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4039","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2037","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9, jf. §14-13: Innvilget fellesperiode til far","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4003","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 fjerde ledd: Mor har ikke omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-4","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4107","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4022","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 tredje ledd: Barnet er over 3 år","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4033","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Ikke lovbestemt ferie","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4059","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13, 14-9\\"}}}","sortering":"14-13-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4025","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-16\\"}}}","sortering":"14-16-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2021","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4070","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-e","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4074","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12,21-3\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2011","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"2030","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4065","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4057","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2033","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13,14-16\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4076","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger","lovHjemmel":"","sortering":"14-09-5","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE","FEDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4040","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4061","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4041","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4020","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§22-13 tredje ledd: Brudd på søknadsfrist","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"22-13\\"}}}","sortering":"22-13-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4106","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2005","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15: Innvilget foreldrepenger ved aleneomsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15\\"}}}","sortering":"14-15","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4055","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-f","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4093","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-16: Avslag gradering - søker er ikke i arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-16\\"}}}","sortering":"14-16","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4102","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4051","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK","UTSETTELSE"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2015","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-a","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4100","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 andre ledd: Uttak før omsorgsovertakelse","lovHjemmel":"","sortering":"14-10-2","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["MOR","IKKE_MOR"]},{"kode":"4012","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 fjerde ledd: Far/medmor har ikke omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-4","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4117","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["FRITT_UTTAK","MINSTERETT_2022"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["MØDREKVOTE","FORELDREPENGER"],"synligForRolle":["MOR"]}]'),ForeldreType:Ec,AdresseType:pc,FagsakMarkering:yc};function Xo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ao={exports:{}},hc=Ao.exports,Ll;function Rc(){return Ll||(Ll=1,function(e,n){(function(r,t){e.exports=t()})(hc,function(){var r,t,a=1e3,s=6e4,o=36e5,i=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=31536e6,u=2628e6,g=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,k={years:d,months:u,days:i,hours:o,minutes:s,seconds:a,milliseconds:1,weeks:6048e5},m=function(O){return O instanceof S},c=function(O,A,D){return new S(O,D,A.$l)},f=function(O){return t.p(O)+"s"},v=function(O){return O<0},h=function(O){return v(O)?Math.ceil(O):Math.floor(O)},p=function(O){return Math.abs(O)},R=function(O,A){return O?v(O)?{negative:!0,format:""+p(O)+A}:{negative:!1,format:""+O+A}:{negative:!1,format:""}},S=function(){function O(D,K,q){var B=this;if(this.$d={},this.$l=q,D===void 0&&(this.$ms=0,this.parseFromMilliseconds()),K)return c(D*k[f(K)],this);if(typeof D=="number")return this.$ms=D,this.parseFromMilliseconds(),this;if(typeof D=="object")return Object.keys(D).forEach(function(V){B.$d[f(V)]=D[V]}),this.calMilliseconds(),this;if(typeof D=="string"){var L=D.match(g);if(L){var I=L.slice(2).map(function(V){return V!=null?Number(V):0});return this.$d.years=I[0],this.$d.months=I[1],this.$d.weeks=I[2],this.$d.days=I[3],this.$d.hours=I[4],this.$d.minutes=I[5],this.$d.seconds=I[6],this.calMilliseconds(),this}}return this}var A=O.prototype;return A.calMilliseconds=function(){var D=this;this.$ms=Object.keys(this.$d).reduce(function(K,q){return K+(D.$d[q]||0)*k[q]},0)},A.parseFromMilliseconds=function(){var D=this.$ms;this.$d.years=h(D/d),D%=d,this.$d.months=h(D/u),D%=u,this.$d.days=h(D/i),D%=i,this.$d.hours=h(D/o),D%=o,this.$d.minutes=h(D/s),D%=s,this.$d.seconds=h(D/a),D%=a,this.$d.milliseconds=D},A.toISOString=function(){var D=R(this.$d.years,"Y"),K=R(this.$d.months,"M"),q=+this.$d.days||0;this.$d.weeks&&(q+=7*this.$d.weeks);var B=R(q,"D"),L=R(this.$d.hours,"H"),I=R(this.$d.minutes,"M"),V=this.$d.seconds||0;this.$d.milliseconds&&(V+=this.$d.milliseconds/1e3,V=Math.round(1e3*V)/1e3);var H=R(V,"S"),C=D.negative||K.negative||B.negative||L.negative||I.negative||H.negative,M=L.format||I.format||H.format?"T":"",P=(C?"-":"")+"P"+D.format+K.format+B.format+M+L.format+I.format+H.format;return P==="P"||P==="-P"?"P0D":P},A.toJSON=function(){return this.toISOString()},A.format=function(D){var K=D||"YYYY-MM-DDTHH:mm:ss",q={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return K.replace(l,function(B,L){return L||String(q[B])})},A.as=function(D){return this.$ms/k[f(D)]},A.get=function(D){var K=this.$ms,q=f(D);return q==="milliseconds"?K%=1e3:K=q==="weeks"?h(K/k[q]):this.$d[q],K||0},A.add=function(D,K,q){var B;return B=K?D*k[f(K)]:m(D)?D.$ms:c(D,this).$ms,c(this.$ms+B*(q?-1:1),this)},A.subtract=function(D,K){return this.add(D,K,!0)},A.locale=function(D){var K=this.clone();return K.$l=D,K},A.clone=function(){return c(this.$ms,this)},A.humanize=function(D){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!D)},A.valueOf=function(){return this.asMilliseconds()},A.milliseconds=function(){return this.get("milliseconds")},A.asMilliseconds=function(){return this.as("milliseconds")},A.seconds=function(){return this.get("seconds")},A.asSeconds=function(){return this.as("seconds")},A.minutes=function(){return this.get("minutes")},A.asMinutes=function(){return this.as("minutes")},A.hours=function(){return this.get("hours")},A.asHours=function(){return this.as("hours")},A.days=function(){return this.get("days")},A.asDays=function(){return this.as("days")},A.weeks=function(){return this.get("weeks")},A.asWeeks=function(){return this.as("weeks")},A.months=function(){return this.get("months")},A.asMonths=function(){return this.as("months")},A.years=function(){return this.get("years")},A.asYears=function(){return this.as("years")},O}(),_=function(O,A,D){return O.add(A.years()*D,"y").add(A.months()*D,"M").add(A.days()*D,"d").add(A.hours()*D,"h").add(A.minutes()*D,"m").add(A.seconds()*D,"s").add(A.milliseconds()*D,"ms")};return function(O,A,D){r=D,t=D().$utils(),D.duration=function(B,L){var I=D.locale();return c(B,{$l:I},L)},D.isDuration=m;var K=A.prototype.add,q=A.prototype.subtract;A.prototype.add=function(B,L){return m(B)?_(this,B,1):K.bind(this)(B,L)},A.prototype.subtract=function(B,L){return m(B)?_(this,B,-1):q.bind(this)(B,L)}}})}(Ao)),Ao.exports}var bc=Rc();const _c=Xo(bc);var So={exports:{}},Ac=So.exports,Pl;function Sc(){return Pl||(Pl=1,function(e,n){(function(r,t){e.exports=t()})(Ac,function(){var r="day";return function(t,a,s){var o=function(d){return d.add(4-d.isoWeekday(),r)},i=a.prototype;i.isoWeekYear=function(){return o(this).year()},i.isoWeek=function(d){if(!this.$utils().u(d))return this.add(7*(d-this.isoWeek()),r);var u,g,k,m,c=o(this),f=(u=this.isoWeekYear(),g=this.$u,k=(g?s.utc:s)().year(u).startOf("year"),m=4-k.isoWeekday(),k.isoWeekday()>4&&(m+=7),k.add(m,r));return c.diff(f,"week")+1},i.isoWeekday=function(d){return this.$utils().u(d)?this.day()||7:this.day(this.day()%7?d:d-7)};var l=i.startOf;i.startOf=function(d,u){var g=this.$utils(),k=!!g.u(u)||u;return g.p(d)==="isoweek"?k?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(d,u)}}})}(So)),So.exports}var Nc=Sc();const Dc=Xo(Nc);var No={exports:{}},Oc=No.exports,Fl;function Ic(){return Fl||(Fl=1,function(e,n){(function(r,t){e.exports=t()})(Oc,function(){var r="minute",t=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(s,o,i){var l=o.prototype;i.utc=function(f){var v={date:f,utc:!0,args:arguments};return new o(v)},l.utc=function(f){var v=i(this.toDate(),{locale:this.$L,utc:!0});return f?v.add(this.utcOffset(),r):v},l.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var d=l.parse;l.parse=function(f){f.utc&&(this.$u=!0),this.$utils().u(f.$offset)||(this.$offset=f.$offset),d.call(this,f)};var u=l.init;l.init=function(){if(this.$u){var f=this.$d;this.$y=f.getUTCFullYear(),this.$M=f.getUTCMonth(),this.$D=f.getUTCDate(),this.$W=f.getUTCDay(),this.$H=f.getUTCHours(),this.$m=f.getUTCMinutes(),this.$s=f.getUTCSeconds(),this.$ms=f.getUTCMilliseconds()}else u.call(this)};var g=l.utcOffset;l.utcOffset=function(f,v){var h=this.$utils().u;if(h(f))return this.$u?0:h(this.$offset)?g.call(this):this.$offset;if(typeof f=="string"&&(f=function(_){_===void 0&&(_="");var O=_.match(t);if(!O)return null;var A=(""+O[0]).match(a)||["-",0,0],D=A[0],K=60*+A[1]+ +A[2];return K===0?0:D==="+"?K:-K}(f),f===null))return this;var p=Math.abs(f)<=16?60*f:f,R=this;if(v)return R.$offset=p,R.$u=f===0,R;if(f!==0){var S=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(R=this.local().add(p+S,r)).$offset=p,R.$x.$localOffset=S}else R=this.utc();return R};var k=l.format;l.format=function(f){var v=f||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return k.call(this,v)},l.valueOf=function(){var f=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*f},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var m=l.toDate;l.toDate=function(f){return f==="s"&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():m.call(this)};var c=l.diff;l.diff=function(f,v,h){if(f&&this.$u===f.$u)return c.call(this,f,v,h);var p=this.local(),R=i(f).local();return c.call(p,R,v,h)}}})}(No)),No.exports}var Lc=Ic();const Pc=Xo(Lc),Fc=qu(),Ce=e=>Rv({locale:"nb-NO",messages:e},Fc),Tn="YYYY-MM-DD",er="DD.MM.YYYY",Uu={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};var Do={exports:{}},Kc=Do.exports,Kl;function wc(){return Kl||(Kl=1,function(e,n){(function(r,t){e.exports=t(we)})(Kc,function(r){function t(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var a=t(r),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(o){return o+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})}(Do)),Do.exports}wc();we.extend(Pc);we.extend(Dc);we.extend(_c);Ce(Uu);const Mc=e=>e.toString().replace(new RegExp("\\p{Dash_Punctuation}","gu"),"-").replace(/[\p{Space_Separator}\t]/gu," ").replace(/[“”]/g,'"').replace(/[‘’`]/g,"'").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Ra=Ce(Uu),qc=e=>{if(!e)return Ra.formatMessage({id:"Malform.Bokmal"});switch(e){case"NN":return Ra.formatMessage({id:"Malform.Nynorsk"});case"EN":return Ra.formatMessage({id:"Malform.Engelsk"});default:return Ra.formatMessage({id:"Malform.Bokmal"})}},Vc=e=>e!=null&&e.constructor===Object;var ra=e=>e.type==="checkbox",Ir=e=>e instanceof Date,ze=e=>e==null;const Hu=e=>typeof e=="object";var Ve=e=>!ze(e)&&!Array.isArray(e)&&Hu(e)&&!Ir(e),Yu=e=>Ve(e)&&e.target?ra(e.target)?e.target.checked:e.target.value:e,jc=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Cu=(e,n)=>e.has(jc(n)),Bc=e=>{const n=e.constructor&&e.constructor.prototype;return Ve(n)&&n.hasOwnProperty("isPrototypeOf")},Qo=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function nn(e){let n;const r=Array.isArray(e),t=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)n=new Date(e);else if(e instanceof Set)n=new Set(e);else if(!(Qo&&(e instanceof Blob||t))&&(r||Ve(e)))if(n=r?[]:{},!r&&!Bc(e))n=e;else for(const a in e)e.hasOwnProperty(a)&&(n[a]=nn(e[a]));else return e;return n}var us=e=>Array.isArray(e)?e.filter(Boolean):[],Ke=e=>e===void 0,G=(e,n,r)=>{if(!n||!Ve(e))return r;const t=us(n.split(/[,[\].]+?/)).reduce((a,s)=>ze(a)?a:a[s],e);return Ke(t)||t===e?Ke(e[n])?r:e[n]:t},kn=e=>typeof e=="boolean",ei=e=>/^\w*$/.test(e),Wu=e=>us(e.replace(/["|']|\]/g,"").split(/\.|\[/)),Re=(e,n,r)=>{let t=-1;const a=ei(n)?[n]:Wu(n),s=a.length,o=s-1;for(;++t<s;){const i=a[t];let l=r;if(t!==o){const d=e[i];l=Ve(d)||Array.isArray(d)?d:isNaN(+a[t+1])?{}:[]}if(i==="__proto__"||i==="constructor"||i==="prototype")return;e[i]=l,e=e[i]}return e};const xa={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Rn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},zn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},$u=T.createContext(null),Vr=()=>T.useContext($u),xc=e=>{const{children:n,...r}=e;return T.createElement($u.Provider,{value:r},n)};var Ju=(e,n,r,t=!0)=>{const a={defaultValues:n._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const o=s;return n._proxyFormState[o]!==Rn.all&&(n._proxyFormState[o]=!t||Rn.all),r&&(r[o]=!0),e[o]}});return a},an=e=>Ve(e)&&!Object.keys(e).length,zu=(e,n,r,t)=>{r(e);const{name:a,...s}=e;return an(s)||Object.keys(s).length>=Object.keys(n).length||Object.keys(s).find(o=>n[o]===(!t||Rn.all))},qt=e=>Array.isArray(e)?e:[e],Zu=(e,n,r)=>!e||!n||e===n||qt(e).some(t=>t&&(r?t===n:t.startsWith(n)||n.startsWith(t)));function ni(e){const n=T.useRef(e);n.current=e,T.useEffect(()=>{const r=!e.disabled&&n.current.subject&&n.current.subject.subscribe({next:n.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}function Gc(e){const n=Vr(),{control:r=n.control,disabled:t,name:a,exact:s}=e,[o,i]=T.useState(r._formState),l=T.useRef(!0),d=T.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),u=T.useRef(a);return u.current=a,ni({disabled:t,next:g=>l.current&&Zu(u.current,g.name,s)&&zu(g,d.current,r._updateFormState)&&i({...r._formState,...g}),subject:r._subjects.state}),T.useEffect(()=>(l.current=!0,d.current.isValid&&r._updateValid(!0),()=>{l.current=!1}),[r]),T.useMemo(()=>Ju(o,r,d.current,!1),[o,r])}var xn=e=>typeof e=="string",Xu=(e,n,r,t,a)=>xn(e)?(t&&n.watch.add(e),G(r,e,a)):Array.isArray(e)?e.map(s=>(t&&n.watch.add(s),G(r,s))):(t&&(n.watchAll=!0),r);function Uc(e){const n=Vr(),{control:r=n.control,name:t,defaultValue:a,disabled:s,exact:o}=e,i=T.useRef(t);i.current=t,ni({disabled:s,subject:r._subjects.values,next:u=>{Zu(i.current,u.name,o)&&d(nn(Xu(i.current,r._names,u.values||r._formValues,!1,a)))}});const[l,d]=T.useState(r._getWatch(t,a));return T.useEffect(()=>r._removeUnmounted()),l}function gs(e){const n=Vr(),{name:r,disabled:t,control:a=n.control,shouldUnregister:s}=e,o=Cu(a._names.array,r),i=Uc({control:a,name:r,defaultValue:G(a._formValues,r,G(a._defaultValues,r,e.defaultValue)),exact:!0}),l=Gc({control:a,name:r,exact:!0}),d=T.useRef(a.register(r,{...e.rules,value:i,...kn(e.disabled)?{disabled:e.disabled}:{}})),u=T.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!G(l.errors,r)},isDirty:{enumerable:!0,get:()=>!!G(l.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!G(l.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!G(l.validatingFields,r)},error:{enumerable:!0,get:()=>G(l.errors,r)}}),[l,r]),g=T.useMemo(()=>({name:r,value:i,...kn(t)||l.disabled?{disabled:l.disabled||t}:{},onChange:k=>d.current.onChange({target:{value:Yu(k),name:r},type:xa.CHANGE}),onBlur:()=>d.current.onBlur({target:{value:G(a._formValues,r),name:r},type:xa.BLUR}),ref:k=>{const m=G(a._fields,r);m&&k&&(m._f.ref={focus:()=>k.focus(),select:()=>k.select(),setCustomValidity:c=>k.setCustomValidity(c),reportValidity:()=>k.reportValidity()})}}),[r,a._formValues,t,l.disabled,i,a._fields]);return T.useEffect(()=>{const k=a._options.shouldUnregister||s,m=(c,f)=>{const v=G(a._fields,c);v&&v._f&&(v._f.mount=f)};if(m(r,!0),k){const c=nn(G(a._options.defaultValues,r));Re(a._defaultValues,r,c),Ke(G(a._formValues,r))&&Re(a._formValues,r,c)}return!o&&a.register(r),()=>{(o?k&&!a._state.action:k)?a.unregister(r):m(r,!1)}},[r,a,o,s]),T.useEffect(()=>{a._updateDisabledField({disabled:t,fields:a._fields,name:r})},[t,r,a]),T.useMemo(()=>({field:g,formState:l,fieldState:u}),[g,l,u])}var Hc=(e,n,r,t,a)=>n?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[t]:a||!0}}:{},wl=e=>({isOnSubmit:!e||e===Rn.onSubmit,isOnBlur:e===Rn.onBlur,isOnChange:e===Rn.onChange,isOnAll:e===Rn.all,isOnTouch:e===Rn.onTouched}),Ml=(e,n,r)=>!r&&(n.watchAll||n.watch.has(e)||[...n.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const Vt=(e,n,r,t)=>{for(const a of r||Object.keys(e)){const s=G(e,a);if(s){const{_f:o,...i}=s;if(o){if(o.refs&&o.refs[0]&&n(o.refs[0],a)&&!t)return!0;if(o.ref&&n(o.ref,o.name)&&!t)return!0;if(Vt(i,n))break}else if(Ve(i)&&Vt(i,n))break}}};var Yc=(e,n,r)=>{const t=qt(G(e,r));return Re(t,"root",n[r]),Re(e,r,t),e},ri=e=>e.type==="file",qn=e=>typeof e=="function",Ga=e=>{if(!Qo)return!1;const n=e?e.ownerDocument:0;return e instanceof(n&&n.defaultView?n.defaultView.HTMLElement:HTMLElement)},Ia=e=>xn(e),ti=e=>e.type==="radio",Ua=e=>e instanceof RegExp;const ql={value:!1,isValid:!1},Vl={value:!0,isValid:!0};var Qu=e=>{if(Array.isArray(e)){if(e.length>1){const n=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:n,isValid:!!n.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Ke(e[0].attributes.value)?Ke(e[0].value)||e[0].value===""?Vl:{value:e[0].value,isValid:!0}:Vl:ql}return ql};const jl={isValid:!1,value:null};var eg=e=>Array.isArray(e)?e.reduce((n,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:n,jl):jl;function Bl(e,n,r="validate"){if(Ia(e)||Array.isArray(e)&&e.every(Ia)||kn(e)&&!e)return{type:r,message:Ia(e)?e:"",ref:n}}var Yr=e=>Ve(e)&&!Ua(e)?e:{value:e,message:""},xl=async(e,n,r,t,a,s)=>{const{ref:o,refs:i,required:l,maxLength:d,minLength:u,min:g,max:k,pattern:m,validate:c,name:f,valueAsNumber:v,mount:h}=e._f,p=G(r,f);if(!h||n.has(f))return{};const R=i?i[0]:o,S=L=>{a&&R.reportValidity&&(R.setCustomValidity(kn(L)?"":L||""),R.reportValidity())},_={},O=ti(o),A=ra(o),D=O||A,K=(v||ri(o))&&Ke(o.value)&&Ke(p)||Ga(o)&&o.value===""||p===""||Array.isArray(p)&&!p.length,q=Hc.bind(null,f,t,_),B=(L,I,V,H=zn.maxLength,C=zn.minLength)=>{const M=L?I:V;_[f]={type:L?H:C,message:M,ref:o,...q(L?H:C,M)}};if(s?!Array.isArray(p)||!p.length:l&&(!D&&(K||ze(p))||kn(p)&&!p||A&&!Qu(i).isValid||O&&!eg(i).isValid)){const{value:L,message:I}=Ia(l)?{value:!!l,message:l}:Yr(l);if(L&&(_[f]={type:zn.required,message:I,ref:R,...q(zn.required,I)},!t))return S(I),_}if(!K&&(!ze(g)||!ze(k))){let L,I;const V=Yr(k),H=Yr(g);if(!ze(p)&&!isNaN(p)){const C=o.valueAsNumber||p&&+p;ze(V.value)||(L=C>V.value),ze(H.value)||(I=C<H.value)}else{const C=o.valueAsDate||new Date(p),M=ie=>new Date(new Date().toDateString()+" "+ie),P=o.type=="time",te=o.type=="week";xn(V.value)&&p&&(L=P?M(p)>M(V.value):te?p>V.value:C>new Date(V.value)),xn(H.value)&&p&&(I=P?M(p)<M(H.value):te?p<H.value:C<new Date(H.value))}if((L||I)&&(B(!!L,V.message,H.message,zn.max,zn.min),!t))return S(_[f].message),_}if((d||u)&&!K&&(xn(p)||s&&Array.isArray(p))){const L=Yr(d),I=Yr(u),V=!ze(L.value)&&p.length>+L.value,H=!ze(I.value)&&p.length<+I.value;if((V||H)&&(B(V,L.message,I.message),!t))return S(_[f].message),_}if(m&&!K&&xn(p)){const{value:L,message:I}=Yr(m);if(Ua(L)&&!p.match(L)&&(_[f]={type:zn.pattern,message:I,ref:o,...q(zn.pattern,I)},!t))return S(I),_}if(c){if(qn(c)){const L=await c(p,r),I=Bl(L,R);if(I&&(_[f]={...I,...q(zn.validate,I.message)},!t))return S(I.message),_}else if(Ve(c)){let L={};for(const I in c){if(!an(L)&&!t)break;const V=Bl(await c[I](p,r),R,I);V&&(L={...V,...q(I,V.message)},S(V.message),t&&(_[f]=L))}if(!an(L)&&(_[f]={ref:R,...L},!t))return _}}return S(!0),_};function Cc(e,n){const r=n.slice(0,-1).length;let t=0;for(;t<r;)e=Ke(e)?t++:e[n[t++]];return e}function Wc(e){for(const n in e)if(e.hasOwnProperty(n)&&!Ke(e[n]))return!1;return!0}function je(e,n){const r=Array.isArray(n)?n:ei(n)?[n]:Wu(n),t=r.length===1?e:Cc(e,r),a=r.length-1,s=r[a];return t&&delete t[s],a!==0&&(Ve(t)&&an(t)||Array.isArray(t)&&Wc(t))&&je(e,r.slice(0,-1)),e}var Ys=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},Oo=e=>ze(e)||!Hu(e);function mr(e,n){if(Oo(e)||Oo(n))return e===n;if(Ir(e)&&Ir(n))return e.getTime()===n.getTime();const r=Object.keys(e),t=Object.keys(n);if(r.length!==t.length)return!1;for(const a of r){const s=e[a];if(!t.includes(a))return!1;if(a!=="ref"){const o=n[a];if(Ir(s)&&Ir(o)||Ve(s)&&Ve(o)||Array.isArray(s)&&Array.isArray(o)?!mr(s,o):s!==o)return!1}}return!0}var ng=e=>e.type==="select-multiple",$c=e=>ti(e)||ra(e),Cs=e=>Ga(e)&&e.isConnected,rg=e=>{for(const n in e)if(qn(e[n]))return!0;return!1};function Ha(e,n={}){const r=Array.isArray(e);if(Ve(e)||r)for(const t in e)Array.isArray(e[t])||Ve(e[t])&&!rg(e[t])?(n[t]=Array.isArray(e[t])?[]:{},Ha(e[t],n[t])):ze(e[t])||(n[t]=!0);return n}function tg(e,n,r){const t=Array.isArray(e);if(Ve(e)||t)for(const a in e)Array.isArray(e[a])||Ve(e[a])&&!rg(e[a])?Ke(n)||Oo(r[a])?r[a]=Array.isArray(e[a])?Ha(e[a],[]):{...Ha(e[a])}:tg(e[a],ze(n)?{}:n[a],r[a]):r[a]=!mr(e[a],n[a]);return r}var Ot=(e,n)=>tg(e,n,Ha(n)),ag=(e,{valueAsNumber:n,valueAsDate:r,setValueAs:t})=>Ke(e)?e:n?e===""?NaN:e&&+e:r&&xn(e)?new Date(e):t?t(e):e;function Ws(e){const n=e.ref;return ri(n)?n.files:ti(n)?eg(e.refs).value:ng(n)?[...n.selectedOptions].map(({value:r})=>r):ra(n)?Qu(e.refs).value:ag(Ke(n.value)?e.ref.value:n.value,e)}var Jc=(e,n,r,t)=>{const a={};for(const s of e){const o=G(n,s);o&&Re(a,s,o._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:t}},It=e=>Ke(e)?e:Ua(e)?e.source:Ve(e)?Ua(e.value)?e.value.source:e.value:e;const Gl="AsyncFunction";var zc=e=>!!e&&!!e.validate&&!!(qn(e.validate)&&e.validate.constructor.name===Gl||Ve(e.validate)&&Object.values(e.validate).find(n=>n.constructor.name===Gl)),Zc=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ul(e,n,r){const t=G(e,r);if(t||ei(r))return{error:t,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),o=G(n,s),i=G(e,s);if(o&&!Array.isArray(o)&&r!==s)return{name:r};if(i&&i.type)return{name:s,error:i};a.pop()}return{name:r}}var Xc=(e,n,r,t,a)=>a.isOnAll?!1:!r&&a.isOnTouch?!(n||e):(r?t.isOnBlur:a.isOnBlur)?!e:(r?t.isOnChange:a.isOnChange)?e:!0,Qc=(e,n)=>!us(G(e,n)).length&&je(e,n);const eE={mode:Rn.onSubmit,reValidateMode:Rn.onChange,shouldFocusError:!0};function nE(e={}){let n={...eE,...e},r={submitCount:0,isDirty:!1,isLoading:qn(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1},t={},a=Ve(n.defaultValues)||Ve(n.values)?nn(n.defaultValues||n.values)||{}:{},s=n.shouldUnregister?{}:nn(a),o={action:!1,mount:!1,watch:!1},i={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},l,d=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={values:Ys(),array:Ys(),state:Ys()},k=wl(n.mode),m=wl(n.reValidateMode),c=n.criteriaMode===Rn.all,f=b=>N=>{clearTimeout(d),d=setTimeout(b,N)},v=async b=>{if(!n.disabled&&(u.isValid||b)){const N=n.resolver?an((await D()).errors):await q(t,!0);N!==r.isValid&&g.state.next({isValid:N})}},h=(b,N)=>{!n.disabled&&(u.isValidating||u.validatingFields)&&((b||Array.from(i.mount)).forEach(F=>{F&&(N?Re(r.validatingFields,F,N):je(r.validatingFields,F))}),g.state.next({validatingFields:r.validatingFields,isValidating:!an(r.validatingFields)}))},p=(b,N=[],F,Y,x=!0,j=!0)=>{if(Y&&F&&!n.disabled){if(o.action=!0,j&&Array.isArray(G(t,b))){const Z=F(G(t,b),Y.argA,Y.argB);x&&Re(t,b,Z)}if(j&&Array.isArray(G(r.errors,b))){const Z=F(G(r.errors,b),Y.argA,Y.argB);x&&Re(r.errors,b,Z),Qc(r.errors,b)}if(u.touchedFields&&j&&Array.isArray(G(r.touchedFields,b))){const Z=F(G(r.touchedFields,b),Y.argA,Y.argB);x&&Re(r.touchedFields,b,Z)}u.dirtyFields&&(r.dirtyFields=Ot(a,s)),g.state.next({name:b,isDirty:L(b,N),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Re(s,b,N)},R=(b,N)=>{Re(r.errors,b,N),g.state.next({errors:r.errors})},S=b=>{r.errors=b,g.state.next({errors:r.errors,isValid:!1})},_=(b,N,F,Y)=>{const x=G(t,b);if(x){const j=G(s,b,Ke(F)?G(a,b):F);Ke(j)||Y&&Y.defaultChecked||N?Re(s,b,N?j:Ws(x._f)):H(b,j),o.mount&&v()}},O=(b,N,F,Y,x)=>{let j=!1,Z=!1;const ae={name:b};if(!n.disabled){const Ue=!!(G(t,b)&&G(t,b)._f&&G(t,b)._f.disabled);if(!F||Y){u.isDirty&&(Z=r.isDirty,r.isDirty=ae.isDirty=L(),j=Z!==ae.isDirty);const He=Ue||mr(G(a,b),N);Z=!!(!Ue&&G(r.dirtyFields,b)),He||Ue?je(r.dirtyFields,b):Re(r.dirtyFields,b,!0),ae.dirtyFields=r.dirtyFields,j=j||u.dirtyFields&&Z!==!He}if(F){const He=G(r.touchedFields,b);He||(Re(r.touchedFields,b,F),ae.touchedFields=r.touchedFields,j=j||u.touchedFields&&He!==F)}j&&x&&g.state.next(ae)}return j?ae:{}},A=(b,N,F,Y)=>{const x=G(r.errors,b),j=u.isValid&&kn(N)&&r.isValid!==N;if(n.delayError&&F?(l=f(()=>R(b,F)),l(n.delayError)):(clearTimeout(d),l=null,F?Re(r.errors,b,F):je(r.errors,b)),(F?!mr(x,F):x)||!an(Y)||j){const Z={...Y,...j&&kn(N)?{isValid:N}:{},errors:r.errors,name:b};r={...r,...Z},g.state.next(Z)}},D=async b=>{h(b,!0);const N=await n.resolver(s,n.context,Jc(b||i.mount,t,n.criteriaMode,n.shouldUseNativeValidation));return h(b),N},K=async b=>{const{errors:N}=await D(b);if(b)for(const F of b){const Y=G(N,F);Y?Re(r.errors,F,Y):je(r.errors,F)}else r.errors=N;return N},q=async(b,N,F={valid:!0})=>{for(const Y in b){const x=b[Y];if(x){const{_f:j,...Z}=x;if(j){const ae=i.array.has(j.name),Ue=x._f&&zc(x._f);Ue&&u.validatingFields&&h([Y],!0);const He=await xl(x,i.disabled,s,c,n.shouldUseNativeValidation&&!N,ae);if(Ue&&u.validatingFields&&h([Y]),He[j.name]&&(F.valid=!1,N))break;!N&&(G(He,j.name)?ae?Yc(r.errors,He,j.name):Re(r.errors,j.name,He[j.name]):je(r.errors,j.name))}!an(Z)&&await q(Z,N,F)}}return F.valid},B=()=>{for(const b of i.unMount){const N=G(t,b);N&&(N._f.refs?N._f.refs.every(F=>!Cs(F)):!Cs(N._f.ref))&&ee(b)}i.unMount=new Set},L=(b,N)=>!n.disabled&&(b&&N&&Re(s,b,N),!mr(he(),a)),I=(b,N,F)=>Xu(b,i,{...o.mount?s:Ke(N)?a:xn(b)?{[b]:N}:N},F,N),V=b=>us(G(o.mount?s:a,b,n.shouldUnregister?G(a,b,[]):[])),H=(b,N,F={})=>{const Y=G(t,b);let x=N;if(Y){const j=Y._f;j&&(!j.disabled&&Re(s,b,ag(N,j)),x=Ga(j.ref)&&ze(N)?"":N,ng(j.ref)?[...j.ref.options].forEach(Z=>Z.selected=x.includes(Z.value)):j.refs?ra(j.ref)?j.refs.length>1?j.refs.forEach(Z=>(!Z.defaultChecked||!Z.disabled)&&(Z.checked=Array.isArray(x)?!!x.find(ae=>ae===Z.value):x===Z.value)):j.refs[0]&&(j.refs[0].checked=!!x):j.refs.forEach(Z=>Z.checked=Z.value===x):ri(j.ref)?j.ref.value="":(j.ref.value=x,j.ref.type||g.values.next({name:b,values:{...s}})))}(F.shouldDirty||F.shouldTouch)&&O(b,x,F.shouldTouch,F.shouldDirty,!0),F.shouldValidate&&ie(b)},C=(b,N,F)=>{for(const Y in N){const x=N[Y],j=`${b}.${Y}`,Z=G(t,j);(i.array.has(b)||Ve(x)||Z&&!Z._f)&&!Ir(x)?C(j,x,F):H(j,x,F)}},M=(b,N,F={})=>{const Y=G(t,b),x=i.array.has(b),j=nn(N);Re(s,b,j),x?(g.array.next({name:b,values:{...s}}),(u.isDirty||u.dirtyFields)&&F.shouldDirty&&g.state.next({name:b,dirtyFields:Ot(a,s),isDirty:L(b,j)})):Y&&!Y._f&&!ze(j)?C(b,j,F):H(b,j,F),Ml(b,i)&&g.state.next({...r}),g.values.next({name:o.mount?b:void 0,values:{...s}})},P=async b=>{o.mount=!0;const N=b.target;let F=N.name,Y=!0;const x=G(t,F),j=()=>N.type?Ws(x._f):Yu(b),Z=ae=>{Y=Number.isNaN(ae)||Ir(ae)&&isNaN(ae.getTime())||mr(ae,G(s,F,ae))};if(x){let ae,Ue;const He=j(),gr=b.type===xa.BLUR||b.type===xa.FOCUS_OUT,Fm=!Zc(x._f)&&!n.resolver&&!G(r.errors,F)&&!x._f.deps||Xc(gr,G(r.touchedFields,F),r.isSubmitted,m,k),Vs=Ml(F,i,gr);Re(s,F,He),gr?(x._f.onBlur&&x._f.onBlur(b),l&&l(0)):x._f.onChange&&x._f.onChange(b);const js=O(F,He,gr,!1),Km=!an(js)||Vs;if(!gr&&g.values.next({name:F,type:b.type,values:{...s}}),Fm)return u.isValid&&(n.mode==="onBlur"&&gr?v():gr||v()),Km&&g.state.next({name:F,...Vs?{}:js});if(!gr&&Vs&&g.state.next({...r}),n.resolver){const{errors:ul}=await D([F]);if(Z(He),Y){const wm=Ul(r.errors,t,F),gl=Ul(ul,t,wm.name||F);ae=gl.error,F=gl.name,Ue=an(ul)}}else h([F],!0),ae=(await xl(x,i.disabled,s,c,n.shouldUseNativeValidation))[F],h([F]),Z(He),Y&&(ae?Ue=!1:u.isValid&&(Ue=await q(t,!0)));Y&&(x._f.deps&&ie(x._f.deps),A(F,Ue,ae,js))}},te=(b,N)=>{if(G(r.errors,N)&&b.focus)return b.focus(),1},ie=async(b,N={})=>{let F,Y;const x=qt(b);if(n.resolver){const j=await K(Ke(b)?b:x);F=an(j),Y=b?!x.some(Z=>G(j,Z)):F}else b?(Y=(await Promise.all(x.map(async j=>{const Z=G(t,j);return await q(Z&&Z._f?{[j]:Z}:Z)}))).every(Boolean),!(!Y&&!r.isValid)&&v()):Y=F=await q(t);return g.state.next({...!xn(b)||u.isValid&&F!==r.isValid?{}:{name:b},...n.resolver||!b?{isValid:F}:{},errors:r.errors}),N.shouldFocus&&!Y&&Vt(t,te,b?x:i.mount),Y},he=b=>{const N={...o.mount?s:a};return Ke(b)?N:xn(b)?G(N,b):b.map(F=>G(N,F))},_r=(b,N)=>({invalid:!!G((N||r).errors,b),isDirty:!!G((N||r).dirtyFields,b),error:G((N||r).errors,b),isValidating:!!G(r.validatingFields,b),isTouched:!!G((N||r).touchedFields,b)}),Ar=b=>{b&&qt(b).forEach(N=>je(r.errors,N)),g.state.next({errors:b?r.errors:{}})},At=(b,N,F)=>{const Y=(G(t,b,{_f:{}})._f||{}).ref,x=G(r.errors,b)||{},{ref:j,message:Z,type:ae,...Ue}=x;Re(r.errors,b,{...Ue,...N,ref:Y}),g.state.next({name:b,errors:r.errors,isValid:!1}),F&&F.shouldFocus&&Y&&Y.focus&&Y.focus()},se=(b,N)=>qn(b)?g.values.subscribe({next:F=>b(I(void 0,N),F)}):I(b,N,!0),ee=(b,N={})=>{for(const F of b?qt(b):i.mount)i.mount.delete(F),i.array.delete(F),N.keepValue||(je(t,F),je(s,F)),!N.keepError&&je(r.errors,F),!N.keepDirty&&je(r.dirtyFields,F),!N.keepTouched&&je(r.touchedFields,F),!N.keepIsValidating&&je(r.validatingFields,F),!n.shouldUnregister&&!N.keepDefaultValue&&je(a,F);g.values.next({values:{...s}}),g.state.next({...r,...N.keepDirty?{isDirty:L()}:{}}),!N.keepIsValid&&v()},Ge=({disabled:b,name:N,field:F,fields:Y})=>{(kn(b)&&o.mount||b||i.disabled.has(N))&&(b?i.disabled.add(N):i.disabled.delete(N),O(N,Ws(F?F._f:G(Y,N)._f),!1,!1,!0))},$e=(b,N={})=>{let F=G(t,b);const Y=kn(N.disabled)||kn(n.disabled);return Re(t,b,{...F||{},_f:{...F&&F._f?F._f:{ref:{name:b}},name:b,mount:!0,...N}}),i.mount.add(b),F?Ge({field:F,disabled:kn(N.disabled)?N.disabled:n.disabled,name:b}):_(b,!0,N.value),{...Y?{disabled:N.disabled||n.disabled}:{},...n.progressive?{required:!!N.required,min:It(N.min),max:It(N.max),minLength:It(N.minLength),maxLength:It(N.maxLength),pattern:It(N.pattern)}:{},name:b,onChange:P,onBlur:P,ref:x=>{if(x){$e(b,N),F=G(t,b);const j=Ke(x.value)&&x.querySelectorAll&&x.querySelectorAll("input,select,textarea")[0]||x,Z=$c(j),ae=F._f.refs||[];if(Z?ae.find(Ue=>Ue===j):j===F._f.ref)return;Re(t,b,{_f:{...F._f,...Z?{refs:[...ae.filter(Cs),j,...Array.isArray(G(a,b))?[{}]:[]],ref:{type:j.type,name:b}}:{ref:j}}}),_(b,!1,void 0,j)}else F=G(t,b,{}),F._f&&(F._f.mount=!1),(n.shouldUnregister||N.shouldUnregister)&&!(Cu(i.array,b)&&o.action)&&i.unMount.add(b)}}},St=()=>n.shouldFocusError&&Vt(t,te,i.mount),Ea=b=>{kn(b)&&(g.state.next({disabled:b}),Vt(t,(N,F)=>{const Y=G(t,F);Y&&(N.disabled=Y._f.disabled||b,Array.isArray(Y._f.refs)&&Y._f.refs.forEach(x=>{x.disabled=Y._f.disabled||b}))},0,!1))},Ur=(b,N)=>async F=>{let Y;F&&(F.preventDefault&&F.preventDefault(),F.persist&&F.persist());let x=nn(s);if(i.disabled.size)for(const j of i.disabled)Re(x,j,void 0);if(g.state.next({isSubmitting:!0}),n.resolver){const{errors:j,values:Z}=await D();r.errors=j,x=Z}else await q(t);if(je(r.errors,"root"),an(r.errors)){g.state.next({errors:{}});try{await b(x,F)}catch(j){Y=j}}else N&&await N({...r.errors},F),St(),setTimeout(St);if(g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:an(r.errors)&&!Y,submitCount:r.submitCount+1,errors:r.errors}),Y)throw Y},Nt=(b,N={})=>{G(t,b)&&(Ke(N.defaultValue)?M(b,nn(G(a,b))):(M(b,N.defaultValue),Re(a,b,nn(N.defaultValue))),N.keepTouched||je(r.touchedFields,b),N.keepDirty||(je(r.dirtyFields,b),r.isDirty=N.defaultValue?L(b,nn(G(a,b))):L()),N.keepError||(je(r.errors,b),u.isValid&&v()),g.state.next({...r}))},Hr=(b,N={})=>{const F=b?nn(b):a,Y=nn(F),x=an(b),j=x?a:Y;if(N.keepDefaultValues||(a=F),!N.keepValues){if(N.keepDirtyValues){const Z=new Set([...i.mount,...Object.keys(Ot(a,s))]);for(const ae of Array.from(Z))G(r.dirtyFields,ae)?Re(j,ae,G(s,ae)):M(ae,G(j,ae))}else{if(Qo&&Ke(b))for(const Z of i.mount){const ae=G(t,Z);if(ae&&ae._f){const Ue=Array.isArray(ae._f.refs)?ae._f.refs[0]:ae._f.ref;if(Ga(Ue)){const He=Ue.closest("form");if(He){He.reset();break}}}}t={}}s=n.shouldUnregister?N.keepDefaultValues?nn(a):{}:nn(j),g.array.next({values:{...j}}),g.values.next({values:{...j}})}i={mount:N.keepDirtyValues?i.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!u.isValid||!!N.keepIsValid||!!N.keepDirtyValues,o.watch=!!n.shouldUnregister,g.state.next({submitCount:N.keepSubmitCount?r.submitCount:0,isDirty:x?!1:N.keepDirty?r.isDirty:!!(N.keepDefaultValues&&!mr(b,a)),isSubmitted:N.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:x?{}:N.keepDirtyValues?N.keepDefaultValues&&s?Ot(a,s):r.dirtyFields:N.keepDefaultValues&&b?Ot(a,b):N.keepDirty?r.dirtyFields:{},touchedFields:N.keepTouched?r.touchedFields:{},errors:N.keepErrors?r.errors:{},isSubmitSuccessful:N.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Sr=(b,N)=>Hr(qn(b)?b(s):b,N);return{control:{register:$e,unregister:ee,getFieldState:_r,handleSubmit:Ur,setError:At,_executeSchema:D,_getWatch:I,_getDirty:L,_updateValid:v,_removeUnmounted:B,_updateFieldArray:p,_updateDisabledField:Ge,_getFieldArray:V,_reset:Hr,_resetDefaultValues:()=>qn(n.defaultValues)&&n.defaultValues().then(b=>{Sr(b,n.resetOptions),g.state.next({isLoading:!1})}),_updateFormState:b=>{r={...r,...b}},_disableForm:Ea,_subjects:g,_proxyFormState:u,_setErrors:S,get _fields(){return t},get _formValues(){return s},get _state(){return o},set _state(b){o=b},get _defaultValues(){return a},get _names(){return i},set _names(b){i=b},get _formState(){return r},set _formState(b){r=b},get _options(){return n},set _options(b){n={...n,...b}}},trigger:ie,register:$e,handleSubmit:Ur,watch:se,setValue:M,getValues:he,reset:Sr,resetField:Nt,clearErrors:Ar,unregister:ee,setError:At,setFocus:(b,N={})=>{const F=G(t,b),Y=F&&F._f;if(Y){const x=Y.refs?Y.refs[0]:Y.ref;x.focus&&(x.focus(),N.shouldSelect&&qn(x.select)&&x.select())}},getFieldState:_r}}function sg(e={}){const n=T.useRef(void 0),r=T.useRef(void 0),[t,a]=T.useState({isDirty:!1,isValidating:!1,isLoading:qn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:qn(e.defaultValues)?void 0:e.defaultValues});n.current||(n.current={...nE(e),formState:t});const s=n.current.control;return s._options=e,ni({subject:s._subjects.state,next:o=>{zu(o,s._proxyFormState,s._updateFormState,!0)&&a({...s._formState})}}),T.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),T.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==t.isDirty&&s._subjects.state.next({isDirty:o})}},[s,t.isDirty]),T.useEffect(()=>{e.values&&!mr(e.values,r.current)?(s._reset(e.values,s._options.resetOptions),r.current=e.values,a(o=>({...o}))):s._resetDefaultValues()},[e.values,s]),T.useEffect(()=>{e.errors&&s._setErrors(e.errors)},[e.errors,s]),T.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),T.useEffect(()=>{e.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[e.shouldUnregister,s]),n.current.formState=Ju(t,s),n.current}function og(e){var n,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(r=og(e[n]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function X(){for(var e,n,r=0,t="",a=arguments.length;r<a;r++)(e=arguments[r])&&(n=og(e))&&(t&&(t+=" "),t+=n);return t}function ai(e){return n=>{e.forEach(r=>{typeof r=="function"?r(n):r!=null&&(r.current=n)})}}function ta(...e){return T.useCallback(ai(e),e)}function rE(e,n){const r=Object.assign({},n);for(const t in n){const a=e[t],s=n[t];/^on[A-Z]/.test(t)?a&&s?r[t]=(...i)=>{s(...i),a(...i)}:a&&(r[t]=a):t==="style"?r[t]=Object.assign(Object.assign({},a),s):t==="className"&&(r[t]=[a,s].filter(Boolean).join(" "))}return Object.assign(Object.assign({},e),r)}var tE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const ct=E.forwardRef((e,n)=>{var r;const{children:t}=e,a=tE(e,["children"]);if(E.isValidElement(t)){const s=Object.prototype.propertyIsEnumerable.call(t.props,"ref")?t.props.ref:t.ref;return E.cloneElement(t,Object.assign(Object.assign({},rE(a,t.props)),{ref:n?ai([n,s]):s}))}if(E.Children.count(t)>1){const s=new Error("Aksel: Components using 'asChild' expects to recieve a single React element child.");throw s.name="SlotError",(r=Error.captureStackTrace)===null||r===void 0||r.call(Error,s,ct),s}return null});var aE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};function sE(e,n){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${n}`}function ks(e={}){const{name:n,hookName:r="useContext",providerName:t="Provider",errorMessage:a,defaultValue:s}=e,o=E.createContext(s),i=E.forwardRef((d,u)=>{var{children:g}=d,k=aE(d,["children"]);const m=T.useMemo(()=>k,Object.values(k));return T.createElement(o.Provider,{value:u?Object.assign(Object.assign({},m),{ref:u}):m},g)});function l(d=!0){var u;const g=E.useContext(o);if(!g&&d){const k=new Error(a??sE(r,t));throw k.name="ContextError",(u=Error.captureStackTrace)===null||u===void 0||u.call(Error,k,l),k}return g}return o.displayName=n,[i,l]}const[oE,aa]=ks({hookName:"useTheme",name:"ThemeProvider",providerName:"ThemeProvider"});E.forwardRef((e,n)=>{var r;const t=aa(!1),{children:a,className:s,asChild:o=!1,theme:i=(r=t==null?void 0:t.theme)!==null&&r!==void 0?r:"light",hasBackground:l=!0}=e,u=l??(t===void 0&&e.theme!==void 0),g=o?ct:"div";return T.createElement(oE,{theme:i},T.createElement(g,{ref:n,className:X("navds-theme",s,i),"data-background":u},a))});const Et=e=>X({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var iE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const ig=E.forwardRef((e,n)=>{var{className:r,size:t="medium",as:a="p",spacing:s,truncate:o,weight:i="regular",align:l,visuallyHidden:d,textColor:u}=e,g=iE(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return T.createElement(a,Object.assign({},g,{ref:n,className:X(r,"navds-body-long",`navds-body-long--${t}`,Et({spacing:s,truncate:o,weight:i,align:l,visuallyHidden:d,textColor:u}))}))});var lE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Ie=E.forwardRef((e,n)=>{var{className:r,size:t="medium",as:a="p",spacing:s,truncate:o,weight:i="regular",align:l,visuallyHidden:d,textColor:u}=e,g=lE(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return T.createElement(a,Object.assign({},g,{ref:n,className:X(r,"navds-body-short",`navds-body-short--${t}`,Et({spacing:s,truncate:o,weight:i,align:l,visuallyHidden:d,textColor:u}))}))});var dE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const ms=E.forwardRef((e,n)=>{var{className:r,size:t="medium",spacing:a,uppercase:s,as:o="p",truncate:i,weight:l="regular",align:d,visuallyHidden:u,textColor:g}=e,k=dE(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return T.createElement(o,Object.assign({},k,{ref:n,className:X(r,"navds-detail",Et({spacing:a,truncate:i,weight:l,align:d,visuallyHidden:u,textColor:g,uppercase:s}),{"navds-detail--small":t==="small"})}))});var uE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const fs=E.forwardRef((e,n)=>{var{children:r,className:t,size:a,spacing:s,as:o="p",showIcon:i=!1}=e,l=uE(e,["children","className","size","spacing","as","showIcon"]);return T.createElement(o,Object.assign({},l,{ref:n,className:X("navds-error-message","navds-label",t,Et({spacing:s}),{"navds-label--small":a==="small","navds-error-message--show-icon":i})}),i&&T.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var gE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const pt=E.forwardRef((e,n)=>{var{level:r="1",size:t,className:a,as:s,spacing:o,align:i,visuallyHidden:l,textColor:d}=e,u=gE(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const g=s??`h${r}`;return T.createElement(g,Object.assign({},u,{ref:n,className:X(a,"navds-heading",`navds-heading--${t}`,Et({spacing:o,align:i,visuallyHidden:l,textColor:d}))}))});var kE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};E.forwardRef((e,n)=>{var{className:r,spacing:t,as:a="p"}=e,s=kE(e,["className","spacing","as"]);return T.createElement(a,Object.assign({},s,{ref:n,className:X(r,"navds-ingress",{"navds-typo--spacing":!!t})}))});var mE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const on=E.forwardRef((e,n)=>{var{className:r,size:t="medium",as:a="label",spacing:s,visuallyHidden:o,textColor:i}=e,l=mE(e,["className","size","as","spacing","visuallyHidden","textColor"]);return T.createElement(a,Object.assign({},l,{ref:n,className:X(r,"navds-label",Et({spacing:s,visuallyHidden:o,textColor:i}),{"navds-label--small":t==="small"})}))});function lg(e,n=166,r=!1){let t;function a(...s){const o=()=>{t=void 0,e.apply(this,s)};!t&&r&&o(),clearTimeout(t),t=setTimeout(o,n)}return a.clear=()=>{clearTimeout(t)},a}function dn(e,n){const r=Object.entries(e).filter(([t])=>!n.includes(t));return Object.fromEntries(r)}const it=globalThis!=null&&globalThis.document?E.useLayoutEffect:()=>{};let Hl=0;function fE(e){const[n,r]=E.useState(e),t=e||n;return E.useEffect(()=>{n==null&&(Hl+=1,r(`aksel-id-${Hl}`))},[n]),t}const Yl=T.useId;function sr(e){var n;if(Yl!==void 0){const r=Yl();return e??r.replace(/(:)/g,"")}return(n=fE(e))!==null&&n!==void 0?n:""}function si(e,n=[]){const r=E.useRef(e);return E.useEffect(()=>{r.current=e}),E.useCallback((...t)=>{var a;return(a=r.current)===null||a===void 0?void 0:a.call(r,...t)},n)}let Cl=0;function vE(e){const[n,r]=E.useState(e),t=e||n;return E.useEffect(()=>{n==null&&(Cl+=1,r(`aksel-icon-${Cl}`))},[n]),t}const Wl=T.useId;function Pn(e){var n;return Wl!==void 0?Wl().replace(/(:)/g,""):(n=vE(e))!==null&&n!==void 0?n:""}var cE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const dg=E.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=cE(e,["title","titleId"]);let s=Pn();return s=r?t||"title-"+s:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?E.createElement("title",{id:s},r):null,E.createElement("path",{fill:"currentColor",d:"M4.47 11.47a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06l-3.22-3.22H19a.75.75 0 0 0 0-1.5H6.81l3.22-3.22a.75.75 0 1 0-1.06-1.06z"}))});var EE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const ug=E.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=EE(e,["title","titleId"]);let s=Pn();return s=r?t||"title-"+s:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?E.createElement("title",{id:s},r):null,E.createElement("path",{fill:"currentColor",d:"M14.087 6.874a.752.752 0 0 0-.117 1.156l3.22 3.22H5a.75.75 0 0 0 0 1.5h12.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-.943-.096"}))});var pE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const yE=E.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=pE(e,["title","titleId"]);let s=Pn();return s=r?t||"title-"+s:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?E.createElement("title",{id:s},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var TE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const hE=E.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=TE(e,["title","titleId"]);let s=Pn();return s=r?t||"title-"+s:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?E.createElement("title",{id:s},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var RE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const bE=E.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=RE(e,["title","titleId"]);let s=Pn();return s=r?t||"title-"+s:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?E.createElement("title",{id:s},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var _E=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const AE=E.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=_E(e,["title","titleId"]);let s=Pn();return s=r?t||"title-"+s:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?E.createElement("title",{id:s},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var SE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const NE=E.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=SE(e,["title","titleId"]);let s=Pn();return s=r?t||"title-"+s:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?E.createElement("title",{id:s},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var DE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const gg=E.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=DE(e,["title","titleId"]);let s=Pn();return s=r?t||"title-"+s:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?E.createElement("title",{id:s},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var OE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const IE=E.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=OE(e,["title","titleId"]);let s=Pn();return s=r?t||"title-"+s:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?E.createElement("title",{id:s},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var LE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const kg=E.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=LE(e,["title","titleId"]);let s=Pn();return s=r?t||"title-"+s:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?E.createElement("title",{id:s},r):null,E.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var PE=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const FE=E.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=PE(e,["title","titleId"]);let s=Pn();return s=r?t||"title-"+s:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?E.createElement("title",{id:s},r):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function jt(e,n,{checkForDefaultPrevented:r=!0}={}){return function(a){if(e==null||e(a),r===!1||!a.defaultPrevented)return n==null?void 0:n(a)}}const[KE,vs]=ks({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),wE=typeof window<"u"&&window.matchMedia===void 0,ME=(e,n)=>{const[r,t]=E.useState(n);return E.useEffect(()=>{if(wE)return;const a=window.matchMedia(e);t(a.matches);const s=o=>{t(o.matches)};return a.addEventListener("change",s),()=>{a.removeEventListener("change",s)}},[e]),r};function fn(e){return(n={})=>{const r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function Ze(e){return(n,r)=>{const t=r!=null&&r.context?String(r.context):"standalone";let a;if(t==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,i=r!=null&&r.width?String(r.width):o;a=e.formattingValues[i]||e.formattingValues[o]}else{const o=e.defaultWidth,i=r!=null&&r.width?String(r.width):e.defaultWidth;a=e.values[i]||e.values[o]}const s=e.argumentCallback?e.argumentCallback(n):n;return a[s]}}function Xe(e){return(n,r={})=>{const t=r.width,a=t&&e.matchPatterns[t]||e.matchPatterns[e.defaultMatchWidth],s=n.match(a);if(!s)return null;const o=s[0],i=t&&e.parsePatterns[t]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(i)?VE(i,g=>g.test(o)):qE(i,g=>g.test(o));let d;d=e.valueCallback?e.valueCallback(l):l,d=r.valueCallback?r.valueCallback(d):d;const u=n.slice(o.length);return{value:d,rest:u}}}function qE(e,n){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&n(e[r]))return r}function VE(e,n){for(let r=0;r<e.length;r++)if(n(e[r]))return r}function oi(e){return(n,r={})=>{const t=n.match(e.matchPattern);if(!t)return null;const a=t[0],s=n.match(e.parsePattern);if(!s)return null;let o=e.valueCallback?e.valueCallback(s[0]):s[0];o=r.valueCallback?r.valueCallback(o):o;const i=n.slice(a.length);return{value:o,rest:i}}}function re(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}let jE={};function jr(){return jE}function en(e,n){var i,l,d,u;const r=jr(),t=(n==null?void 0:n.weekStartsOn)??((l=(i=n==null?void 0:n.locale)==null?void 0:i.options)==null?void 0:l.weekStartsOn)??r.weekStartsOn??((u=(d=r.locale)==null?void 0:d.options)==null?void 0:u.weekStartsOn)??0,a=re(e),s=a.getDay(),o=(s<t?7:0)+s-t;return a.setDate(a.getDate()-o),a.setHours(0,0,0,0),a}const BE={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},mg=(e,n,r)=>{let t;const a=BE[e];return typeof a=="string"?t=a:n===1?t=a.one:t=a.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+t:t+" ago":t},xE={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},fg=(e,n,r,t)=>xE[e],GE={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},UE={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},HE={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},YE={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},CE={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},WE={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},$E=(e,n)=>{const r=Number(e),t=r%100;if(t>20||t<10)switch(t%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},vg={ordinalNumber:$E,era:Ze({values:GE,defaultWidth:"wide"}),quarter:Ze({values:UE,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Ze({values:HE,defaultWidth:"wide"}),day:Ze({values:YE,defaultWidth:"wide"}),dayPeriod:Ze({values:CE,defaultWidth:"wide",formattingValues:WE,defaultFormattingWidth:"wide"})},JE=/^(\d+)(th|st|nd|rd)?/i,zE=/\d+/i,ZE={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},XE={any:[/^b/i,/^(a|c)/i]},QE={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ep={any:[/1/i,/2/i,/3/i,/4/i]},np={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},rp={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},tp={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ap={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},sp={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},op={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},cg={ordinalNumber:oi({matchPattern:JE,parsePattern:zE,valueCallback:e=>parseInt(e,10)}),era:Xe({matchPatterns:ZE,defaultMatchWidth:"wide",parsePatterns:XE,defaultParseWidth:"any"}),quarter:Xe({matchPatterns:QE,defaultMatchWidth:"wide",parsePatterns:ep,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Xe({matchPatterns:np,defaultMatchWidth:"wide",parsePatterns:rp,defaultParseWidth:"any"}),day:Xe({matchPatterns:tp,defaultMatchWidth:"wide",parsePatterns:ap,defaultParseWidth:"any"}),dayPeriod:Xe({matchPatterns:sp,defaultMatchWidth:"any",parsePatterns:op,defaultParseWidth:"any"})},ip={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},lp={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},dp={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},up={date:fn({formats:ip,defaultWidth:"full"}),time:fn({formats:lp,defaultWidth:"full"}),dateTime:fn({formats:dp,defaultWidth:"full"})},Eg={code:"en-GB",formatDistance:mg,formatLong:up,formatRelative:fg,localize:vg,match:cg,options:{weekStartsOn:1,firstWeekContainsDate:4}},gp={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},kp={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},mp={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},fp={date:fn({formats:gp,defaultWidth:"full"}),time:fn({formats:kp,defaultWidth:"full"}),dateTime:fn({formats:mp,defaultWidth:"full"})},ii={code:"en-US",formatDistance:mg,formatLong:fp,formatRelative:fg,localize:vg,match:cg,options:{weekStartsOn:0,firstWeekContainsDate:1}},vp={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},cp=(e,n,r)=>{let t;const a=vp[e];return typeof a=="string"?t=a:n===1?t=a.one:t=a.other.replace("{{count}}",String(n)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+t:t+" siden":t},Ep={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},pp={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},yp={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Tp={date:fn({formats:Ep,defaultWidth:"full"}),time:fn({formats:pp,defaultWidth:"full"}),dateTime:fn({formats:yp,defaultWidth:"full"})},hp={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Rp=(e,n,r,t)=>hp[e],bp={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},_p={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Ap={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Sp={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Np={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Dp=(e,n)=>Number(e)+".",Op={ordinalNumber:Dp,era:Ze({values:bp,defaultWidth:"wide"}),quarter:Ze({values:_p,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Ze({values:Ap,defaultWidth:"wide"}),day:Ze({values:Sp,defaultWidth:"wide"}),dayPeriod:Ze({values:Np,defaultWidth:"wide"})},Ip=/^(\d+)\.?/i,Lp=/\d+/i,Pp={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Fp={any:[/^f/i,/^e/i]},Kp={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},wp={any:[/1/i,/2/i,/3/i,/4/i]},Mp={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},qp={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Vp={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},jp={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Bp={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},xp={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Gp={ordinalNumber:oi({matchPattern:Ip,parsePattern:Lp,valueCallback:e=>parseInt(e,10)}),era:Xe({matchPatterns:Pp,defaultMatchWidth:"wide",parsePatterns:Fp,defaultParseWidth:"any"}),quarter:Xe({matchPatterns:Kp,defaultMatchWidth:"wide",parsePatterns:wp,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Xe({matchPatterns:Mp,defaultMatchWidth:"wide",parsePatterns:qp,defaultParseWidth:"any"}),day:Xe({matchPatterns:Vp,defaultMatchWidth:"wide",parsePatterns:jp,defaultParseWidth:"any"}),dayPeriod:Xe({matchPatterns:Bp,defaultMatchWidth:"any",parsePatterns:xp,defaultParseWidth:"any"})},pg={code:"nb",formatDistance:cp,formatLong:Tp,formatRelative:Rp,localize:Op,match:Gp,options:{weekStartsOn:1,firstWeekContainsDate:4}},Up={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},Hp=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],Yp=(e,n,r)=>{let t;const a=Up[e];return typeof a=="string"?t=a:n===1?t=a.one:t=a.other.replace("{{count}}",n<13?Hp[n]:String(n)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+t:t+" sidan":t},Cp={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Wp={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},$p={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Jp={date:fn({formats:Cp,defaultWidth:"full"}),time:fn({formats:Wp,defaultWidth:"full"}),dateTime:fn({formats:$p,defaultWidth:"full"})},zp={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Zp=(e,n,r,t)=>zp[e],Xp={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Qp={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},ey={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},ny={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},ry={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},ty=(e,n)=>Number(e)+".",ay={ordinalNumber:ty,era:Ze({values:Xp,defaultWidth:"wide"}),quarter:Ze({values:Qp,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Ze({values:ey,defaultWidth:"wide"}),day:Ze({values:ny,defaultWidth:"wide"}),dayPeriod:Ze({values:ry,defaultWidth:"wide"})},sy=/^(\d+)\.?/i,oy=/\d+/i,iy={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},ly={any:[/^f/i,/^e/i]},dy={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},uy={any:[/1/i,/2/i,/3/i,/4/i]},gy={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},ky={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},my={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},fy={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},vy={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},cy={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Ey={ordinalNumber:oi({matchPattern:sy,parsePattern:oy,valueCallback:e=>parseInt(e,10)}),era:Xe({matchPatterns:iy,defaultMatchWidth:"wide",parsePatterns:ly,defaultParseWidth:"any"}),quarter:Xe({matchPatterns:dy,defaultMatchWidth:"wide",parsePatterns:uy,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Xe({matchPatterns:gy,defaultMatchWidth:"wide",parsePatterns:ky,defaultParseWidth:"any"}),day:Xe({matchPatterns:my,defaultMatchWidth:"wide",parsePatterns:fy,defaultParseWidth:"any"}),dayPeriod:Xe({matchPatterns:vy,defaultMatchWidth:"any",parsePatterns:cy,defaultParseWidth:"any"})},yg={code:"nn",formatDistance:Yp,formatLong:Jp,formatRelative:Zp,localize:ay,match:Ey,options:{weekStartsOn:1,firstWeekContainsDate:4}},py={global:{dateLocale:pg,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},yy=E.createContext({locale:py}),li=()=>E.useContext(yy);function $l(e){return e.sort((n,r)=>{const t=n.compareDocumentPosition(r);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const Ty=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function Jl(e,n,r){let t=e+1;return r&&t>=n&&(t=0),t}function zl(e,n,r){let t=e-1;return r&&t<0&&(t=n),t}const $s=e=>e;class hy{constructor(){this.descendants=new Map,this.register=n=>{if(n!=null)return Ty(n)?this.registerNode(n):r=>{this.registerNode(r,n)}},this.unregister=n=>{this.descendants.delete(n);const r=$l(Array.from(this.descendants.keys()));this.assignIndex(r)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=n=>{this.descendants.forEach(r=>{const t=n.indexOf(r.node);r.index=t,r.node.dataset.index=r.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((r,t)=>r.index-t.index),this.enabledValues=()=>this.values().filter(n=>!n.disabled),this.item=n=>{if(this.count()!==0)return this.values()[n]},this.enabledItem=n=>{if(this.enabledCount()!==0)return this.enabledValues()[n]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const n=this.enabledValues().length-1;return this.enabledItem(n)},this.indexOf=n=>{var r,t;return n&&(t=(r=this.descendants.get(n))===null||r===void 0?void 0:r.index)!==null&&t!==void 0?t:-1},this.enabledIndexOf=n=>n==null?-1:this.enabledValues().findIndex(r=>r.node.isSameNode(n)),this.next=(n,r=!0)=>{const t=Jl(n,this.count(),r);return this.item(t)},this.nextEnabled=(n,r=!0)=>{const t=this.item(n);if(!t)return;const a=this.enabledIndexOf(t.node),s=Jl(a,this.enabledCount(),r);return this.enabledItem(s)},this.prev=(n,r=!0)=>{const t=zl(n,this.count()-1,r);return this.item(t)},this.prevEnabled=(n,r=!0)=>{const t=this.item(n);if(!t)return;const a=this.enabledIndexOf(t.node),s=zl(a,this.enabledCount()-1,r);return this.enabledItem(s)},this.registerNode=(n,r)=>{if(!n)return;const t=this.descendants.get(n);if(t){this.descendants.set(n,Object.assign({index:t.index,node:n},r));return}const a=Array.from(this.descendants.keys()).concat(n),s=$l(a);r!=null&&r.disabled&&(r.disabled=!!r.disabled);const o=Object.assign({node:n,index:-1},r);this.descendants.set(n,o),this.assignIndex(s)}}}function Ry(){const[e,n]=ks({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),r=$s(s=>T.createElement(e,Object.assign({},s.value),s.children));function t(s){const o=n(),[i,l]=E.useState(-1),d=E.useRef(null);it(()=>()=>{d.current&&o.unregister(d.current)},[]),it(()=>{if(!d.current)return;const g=Number(d.current.dataset.index);i!==g&&!Number.isNaN(g)&&l(g)});const u=$s(s?o.register(s):o.register);return{descendants:o,index:i,enabledIndex:o.enabledIndexOf(d.current),register:ai([u,d])}}function a(){return E.useRef(new hy).current}return[r,n,a,t]}function by(e,n=globalThis==null?void 0:globalThis.document){const r=si(e);E.useEffect(()=>{const t=a=>{a.key==="Escape"&&r(a)};return n.addEventListener("keydown",t,!0),()=>n.removeEventListener("keydown",t,!0)},[r,n])}const Tg={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function hg(e,n,r,{discrete:t}={discrete:!1}){if(!n)return;const a=r.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});a.addEventListener(e,n,{once:!0}),t&&a?ku.flushSync(()=>a.dispatchEvent(s)):a.dispatchEvent(s)}function _y(e,n=globalThis==null?void 0:globalThis.document){const r=si(e),t=E.useRef(!1);return E.useEffect(()=>{const a=s=>{if(s.target&&!t.current){const o={originalEvent:s};hg(Tg.FOCUS_OUTSIDE,r,o)}};return n.addEventListener("focusin",a),()=>n.removeEventListener("focusin",a)},[n,r]),{onFocusCapture:()=>{t.current=!0},onBlurCapture:()=>{t.current=!1}}}function Ay(e,n=globalThis==null?void 0:globalThis.document){const r=si(e),t=E.useRef(!1),a=E.useRef(()=>{});return E.useEffect(()=>{const s=i=>{function l(){hg(Tg.POINTER_DOWN_OUTSIDE,r,{originalEvent:i},{discrete:!0})}i.target&&!t.current?i.pointerType==="touch"?(n.removeEventListener("click",a.current),a.current=l,n.addEventListener("click",a.current,{once:!0})):l():n.removeEventListener("click",a.current),t.current=!1},o=window.setTimeout(()=>{n.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),n.removeEventListener("pointerdown",s),n.removeEventListener("click",a.current)}},[n,r]),{onPointerDownCapture:()=>{t.current=!0}}}var Sy=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const[Ny,Dy,Oy,Iy]=Ry();let Cr=0,Zl;const Ly=E.forwardRef((e,n)=>Dy(!1)?T.createElement(Xl,Object.assign({ref:n},e)):T.createElement(Py,null,T.createElement(Xl,Object.assign({ref:n},e)))),Py=({children:e})=>{const n=Oy();return T.createElement(Ny,{value:n},e)},Xl=E.forwardRef((e,n)=>{var r,{children:t,asChild:a,onEscapeKeyDown:s,onPointerDownOutside:o,onFocusOutside:i,onInteractOutside:l,onDismiss:d,safeZone:u,disableOutsidePointerEvents:g=!1,enabled:k=!0}=e,m=Sy(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,c]=E.useState({}),{register:f,index:v,descendants:h}=Iy({disableOutsidePointerEvents:g,disabled:!k,forceUpdate:()=>c({})}),[p,R]=E.useState(null),S=ta(R,f,n),_=(r=p==null?void 0:p.ownerDocument)!==null&&r!==void 0?r:globalThis==null?void 0:globalThis.document,O=E.useRef(!1),A=E.useRef(!1),D=(()=>{let I=-1;return h.enabledValues().forEach((H,C)=>{H.disableOutsidePointerEvents&&(I=C)}),{isPointerEventsEnabled:v>=I,isBodyPointerEventsDisabled:Cr>0,pointerStyle:v>=I&&Cr>0?"auto":void 0}})();function K(I){var V,H;if(!(u!=null&&u.anchor)&&!(u!=null&&u.dismissable)||!k)return;I.defaultPrevented||(O.current=!0,I.detail.originalEvent.type==="pointerdown"&&(A.current=!0));const C=I.target;I.detail.originalEvent.type==="pointerdown"?(!((V=u==null?void 0:u.anchor)===null||V===void 0)&&V.contains(C)||C===(u==null?void 0:u.anchor))&&I.preventDefault():!(C instanceof HTMLElement&&![u==null?void 0:u.anchor,u==null?void 0:u.dismissable].some(P=>P==null?void 0:P.contains(C))&&!C.contains((H=u==null?void 0:u.dismissable)!==null&&H!==void 0?H:null))&&I.preventDefault(),I.detail.originalEvent.type==="focusin"&&A.current&&I.preventDefault(),A.current=!1,O.current=!1}const q=Ay(I=>{!D.isPointerEventsEnabled||!k||(o==null||o(I),l==null||l(I),u&&K(I),!I.defaultPrevented&&d&&d())},_),B=_y(I=>{k&&(i==null||i(I),l==null||l(I),u&&K(I),!I.defaultPrevented&&d&&d())},_);by(I=>{!k||!(v===h.enabledCount()-1)||(s==null||s(I),!I.defaultPrevented&&d&&(I.preventDefault(),d()))},_),E.useEffect(()=>{if(!(!p||!k||!g))return Cr===0&&(Zl=_.body.style.pointerEvents,_.body.style.pointerEvents="none"),Cr++,()=>{Cr===1&&(_.body.style.pointerEvents=Zl),Cr--}},[p,_,g,h,k]),E.useEffect(()=>()=>h.values().forEach(I=>I.forceUpdate()),[h,p]);const L=a?ct:"div";return T.createElement(L,Object.assign({ref:S},m,{onFocusCapture:B.onFocusCapture,onBlurCapture:B.onBlurCapture,onPointerDownCapture:q.onPointerDownCapture,style:Object.assign({pointerEvents:D.pointerStyle},m.style)}),t)}),lt=Math.min,Pr=Math.max,Ya=Math.round,ba=Math.floor,Un=e=>({x:e,y:e}),Fy={left:"right",right:"left",bottom:"top",top:"bottom"},Ky={start:"end",end:"start"};function Io(e,n,r){return Pr(e,lt(n,r))}function sa(e,n){return typeof e=="function"?e(n):e}function Mr(e){return e.split("-")[0]}function oa(e){return e.split("-")[1]}function Rg(e){return e==="x"?"y":"x"}function di(e){return e==="y"?"height":"width"}function dt(e){return["top","bottom"].includes(Mr(e))?"y":"x"}function ui(e){return Rg(dt(e))}function wy(e,n,r){r===void 0&&(r=!1);const t=oa(e),a=ui(e),s=di(a);let o=a==="x"?t===(r?"end":"start")?"right":"left":t==="start"?"bottom":"top";return n.reference[s]>n.floating[s]&&(o=Ca(o)),[o,Ca(o)]}function My(e){const n=Ca(e);return[Lo(e),n,Lo(n)]}function Lo(e){return e.replace(/start|end/g,n=>Ky[n])}function qy(e,n,r){const t=["left","right"],a=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(e){case"top":case"bottom":return r?n?a:t:n?t:a;case"left":case"right":return n?s:o;default:return[]}}function Vy(e,n,r,t){const a=oa(e);let s=qy(Mr(e),r==="start",t);return a&&(s=s.map(o=>o+"-"+a),n&&(s=s.concat(s.map(Lo)))),s}function Ca(e){return e.replace(/left|right|bottom|top/g,n=>Fy[n])}function jy(e){return{top:0,right:0,bottom:0,left:0,...e}}function bg(e){return typeof e!="number"?jy(e):{top:e,right:e,bottom:e,left:e}}function Wa(e){const{x:n,y:r,width:t,height:a}=e;return{width:t,height:a,top:r,left:n,right:n+t,bottom:r+a,x:n,y:r}}function Ql(e,n,r){let{reference:t,floating:a}=e;const s=dt(n),o=ui(n),i=di(o),l=Mr(n),d=s==="y",u=t.x+t.width/2-a.width/2,g=t.y+t.height/2-a.height/2,k=t[i]/2-a[i]/2;let m;switch(l){case"top":m={x:u,y:t.y-a.height};break;case"bottom":m={x:u,y:t.y+t.height};break;case"right":m={x:t.x+t.width,y:g};break;case"left":m={x:t.x-a.width,y:g};break;default:m={x:t.x,y:t.y}}switch(oa(n)){case"start":m[o]-=k*(r&&d?-1:1);break;case"end":m[o]+=k*(r&&d?-1:1);break}return m}const By=async(e,n,r)=>{const{placement:t="bottom",strategy:a="absolute",middleware:s=[],platform:o}=r,i=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(n));let d=await o.getElementRects({reference:e,floating:n,strategy:a}),{x:u,y:g}=Ql(d,t,l),k=t,m={},c=0;for(let f=0;f<i.length;f++){const{name:v,fn:h}=i[f],{x:p,y:R,data:S,reset:_}=await h({x:u,y:g,initialPlacement:t,placement:k,strategy:a,middlewareData:m,rects:d,platform:o,elements:{reference:e,floating:n}});u=p??u,g=R??g,m={...m,[v]:{...m[v],...S}},_&&c<=50&&(c++,typeof _=="object"&&(_.placement&&(k=_.placement),_.rects&&(d=_.rects===!0?await o.getElementRects({reference:e,floating:n,strategy:a}):_.rects),{x:u,y:g}=Ql(d,k,l)),f=-1)}return{x:u,y:g,placement:k,strategy:a,middlewareData:m}};async function _g(e,n){var r;n===void 0&&(n={});const{x:t,y:a,platform:s,rects:o,elements:i,strategy:l}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:k=!1,padding:m=0}=sa(n,e),c=bg(m),v=i[k?g==="floating"?"reference":"floating":g],h=Wa(await s.getClippingRect({element:(r=await(s.isElement==null?void 0:s.isElement(v)))==null||r?v:v.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(i.floating)),boundary:d,rootBoundary:u,strategy:l})),p=g==="floating"?{x:t,y:a,width:o.floating.width,height:o.floating.height}:o.reference,R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(i.floating)),S=await(s.isElement==null?void 0:s.isElement(R))?await(s.getScale==null?void 0:s.getScale(R))||{x:1,y:1}:{x:1,y:1},_=Wa(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:i,rect:p,offsetParent:R,strategy:l}):p);return{top:(h.top-_.top+c.top)/S.y,bottom:(_.bottom-h.bottom+c.bottom)/S.y,left:(h.left-_.left+c.left)/S.x,right:(_.right-h.right+c.right)/S.x}}const xy=e=>({name:"arrow",options:e,async fn(n){const{x:r,y:t,placement:a,rects:s,platform:o,elements:i,middlewareData:l}=n,{element:d,padding:u=0}=sa(e,n)||{};if(d==null)return{};const g=bg(u),k={x:r,y:t},m=ui(a),c=di(m),f=await o.getDimensions(d),v=m==="y",h=v?"top":"left",p=v?"bottom":"right",R=v?"clientHeight":"clientWidth",S=s.reference[c]+s.reference[m]-k[m]-s.floating[c],_=k[m]-s.reference[m],O=await(o.getOffsetParent==null?void 0:o.getOffsetParent(d));let A=O?O[R]:0;(!A||!await(o.isElement==null?void 0:o.isElement(O)))&&(A=i.floating[R]||s.floating[c]);const D=S/2-_/2,K=A/2-f[c]/2-1,q=lt(g[h],K),B=lt(g[p],K),L=q,I=A-f[c]-B,V=A/2-f[c]/2+D,H=Io(L,V,I),C=!l.arrow&&oa(a)!=null&&V!==H&&s.reference[c]/2-(V<L?q:B)-f[c]/2<0,M=C?V<L?V-L:V-I:0;return{[m]:k[m]+M,data:{[m]:H,centerOffset:V-H-M,...C&&{alignmentOffset:M}},reset:C}}}),Gy=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var r,t;const{placement:a,middlewareData:s,rects:o,initialPlacement:i,platform:l,elements:d}=n,{mainAxis:u=!0,crossAxis:g=!0,fallbackPlacements:k,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:c="none",flipAlignment:f=!0,...v}=sa(e,n);if((r=s.arrow)!=null&&r.alignmentOffset)return{};const h=Mr(a),p=dt(i),R=Mr(i)===i,S=await(l.isRTL==null?void 0:l.isRTL(d.floating)),_=k||(R||!f?[Ca(i)]:My(i)),O=c!=="none";!k&&O&&_.push(...Vy(i,f,c,S));const A=[i,..._],D=await _g(n,v),K=[];let q=((t=s.flip)==null?void 0:t.overflows)||[];if(u&&K.push(D[h]),g){const V=wy(a,o,S);K.push(D[V[0]],D[V[1]])}if(q=[...q,{placement:a,overflows:K}],!K.every(V=>V<=0)){var B,L;const V=(((B=s.flip)==null?void 0:B.index)||0)+1,H=A[V];if(H)return{data:{index:V,overflows:q},reset:{placement:H}};let C=(L=q.filter(M=>M.overflows[0]<=0).sort((M,P)=>M.overflows[1]-P.overflows[1])[0])==null?void 0:L.placement;if(!C)switch(m){case"bestFit":{var I;const M=(I=q.filter(P=>{if(O){const te=dt(P.placement);return te===p||te==="y"}return!0}).map(P=>[P.placement,P.overflows.filter(te=>te>0).reduce((te,ie)=>te+ie,0)]).sort((P,te)=>P[1]-te[1])[0])==null?void 0:I[0];M&&(C=M);break}case"initialPlacement":C=i;break}if(a!==C)return{reset:{placement:C}}}return{}}}};async function Uy(e,n){const{placement:r,platform:t,elements:a}=e,s=await(t.isRTL==null?void 0:t.isRTL(a.floating)),o=Mr(r),i=oa(r),l=dt(r)==="y",d=["left","top"].includes(o)?-1:1,u=s&&l?-1:1,g=sa(n,e);let{mainAxis:k,crossAxis:m,alignmentAxis:c}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return i&&typeof c=="number"&&(m=i==="end"?c*-1:c),l?{x:m*u,y:k*d}:{x:k*d,y:m*u}}const Hy=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){var r,t;const{x:a,y:s,placement:o,middlewareData:i}=n,l=await Uy(n,e);return o===((r=i.offset)==null?void 0:r.placement)&&(t=i.arrow)!=null&&t.alignmentOffset?{}:{x:a+l.x,y:s+l.y,data:{...l,placement:o}}}}},Yy=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:r,y:t,placement:a}=n,{mainAxis:s=!0,crossAxis:o=!1,limiter:i={fn:v=>{let{x:h,y:p}=v;return{x:h,y:p}}},...l}=sa(e,n),d={x:r,y:t},u=await _g(n,l),g=dt(Mr(a)),k=Rg(g);let m=d[k],c=d[g];if(s){const v=k==="y"?"top":"left",h=k==="y"?"bottom":"right",p=m+u[v],R=m-u[h];m=Io(p,m,R)}if(o){const v=g==="y"?"top":"left",h=g==="y"?"bottom":"right",p=c+u[v],R=c-u[h];c=Io(p,c,R)}const f=i.fn({...n,[k]:m,[g]:c});return{...f,data:{x:f.x-r,y:f.y-t,enabled:{[k]:s,[g]:o}}}}}};function cs(){return typeof window<"u"}function yt(e){return Ag(e)?(e.nodeName||"").toLowerCase():"#document"}function ln(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function Wn(e){var n;return(n=(Ag(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function Ag(e){return cs()?e instanceof Node||e instanceof ln(e).Node:!1}function An(e){return cs()?e instanceof Element||e instanceof ln(e).Element:!1}function Yn(e){return cs()?e instanceof HTMLElement||e instanceof ln(e).HTMLElement:!1}function ed(e){return!cs()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ln(e).ShadowRoot}function ia(e){const{overflow:n,overflowX:r,overflowY:t,display:a}=Sn(e);return/auto|scroll|overlay|hidden|clip/.test(n+t+r)&&!["inline","contents"].includes(a)}function Cy(e){return["table","td","th"].includes(yt(e))}function Es(e){return[":popover-open",":modal"].some(n=>{try{return e.matches(n)}catch{return!1}})}function gi(e){const n=ki(),r=An(e)?Sn(e):e;return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!n&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!n&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(t=>(r.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(r.contain||"").includes(t))}function Wy(e){let n=hr(e);for(;Yn(n)&&!ut(n);){if(gi(n))return n;if(Es(n))return null;n=hr(n)}return null}function ki(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ut(e){return["html","body","#document"].includes(yt(e))}function Sn(e){return ln(e).getComputedStyle(e)}function ps(e){return An(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function hr(e){if(yt(e)==="html")return e;const n=e.assignedSlot||e.parentNode||ed(e)&&e.host||Wn(e);return ed(n)?n.host:n}function Sg(e){const n=hr(e);return ut(n)?e.ownerDocument?e.ownerDocument.body:e.body:Yn(n)&&ia(n)?n:Sg(n)}function Ut(e,n,r){var t;n===void 0&&(n=[]),r===void 0&&(r=!0);const a=Sg(e),s=a===((t=e.ownerDocument)==null?void 0:t.body),o=ln(a);if(s){const i=Po(o);return n.concat(o,o.visualViewport||[],ia(a)?a:[],i&&r?Ut(i):[])}return n.concat(a,Ut(a,[],r))}function Po(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ng(e){const n=Sn(e);let r=parseFloat(n.width)||0,t=parseFloat(n.height)||0;const a=Yn(e),s=a?e.offsetWidth:r,o=a?e.offsetHeight:t,i=Ya(r)!==s||Ya(t)!==o;return i&&(r=s,t=o),{width:r,height:t,$:i}}function mi(e){return An(e)?e:e.contextElement}function Qr(e){const n=mi(e);if(!Yn(n))return Un(1);const r=n.getBoundingClientRect(),{width:t,height:a,$:s}=Ng(n);let o=(s?Ya(r.width):r.width)/t,i=(s?Ya(r.height):r.height)/a;return(!o||!Number.isFinite(o))&&(o=1),(!i||!Number.isFinite(i))&&(i=1),{x:o,y:i}}const $y=Un(0);function Dg(e){const n=ln(e);return!ki()||!n.visualViewport?$y:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function Jy(e,n,r){return n===void 0&&(n=!1),!r||n&&r!==ln(e)?!1:n}function qr(e,n,r,t){n===void 0&&(n=!1),r===void 0&&(r=!1);const a=e.getBoundingClientRect(),s=mi(e);let o=Un(1);n&&(t?An(t)&&(o=Qr(t)):o=Qr(e));const i=Jy(s,r,t)?Dg(s):Un(0);let l=(a.left+i.x)/o.x,d=(a.top+i.y)/o.y,u=a.width/o.x,g=a.height/o.y;if(s){const k=ln(s),m=t&&An(t)?ln(t):t;let c=k,f=Po(c);for(;f&&t&&m!==c;){const v=Qr(f),h=f.getBoundingClientRect(),p=Sn(f),R=h.left+(f.clientLeft+parseFloat(p.paddingLeft))*v.x,S=h.top+(f.clientTop+parseFloat(p.paddingTop))*v.y;l*=v.x,d*=v.y,u*=v.x,g*=v.y,l+=R,d+=S,c=ln(f),f=Po(c)}}return Wa({width:u,height:g,x:l,y:d})}function fi(e,n){const r=ps(e).scrollLeft;return n?n.left+r:qr(Wn(e)).left+r}function Og(e,n,r){r===void 0&&(r=!1);const t=e.getBoundingClientRect(),a=t.left+n.scrollLeft-(r?0:fi(e,t)),s=t.top+n.scrollTop;return{x:a,y:s}}function zy(e){let{elements:n,rect:r,offsetParent:t,strategy:a}=e;const s=a==="fixed",o=Wn(t),i=n?Es(n.floating):!1;if(t===o||i&&s)return r;let l={scrollLeft:0,scrollTop:0},d=Un(1);const u=Un(0),g=Yn(t);if((g||!g&&!s)&&((yt(t)!=="body"||ia(o))&&(l=ps(t)),Yn(t))){const m=qr(t);d=Qr(t),u.x=m.x+t.clientLeft,u.y=m.y+t.clientTop}const k=o&&!g&&!s?Og(o,l,!0):Un(0);return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-l.scrollLeft*d.x+u.x+k.x,y:r.y*d.y-l.scrollTop*d.y+u.y+k.y}}function Zy(e){return Array.from(e.getClientRects())}function Xy(e){const n=Wn(e),r=ps(e),t=e.ownerDocument.body,a=Pr(n.scrollWidth,n.clientWidth,t.scrollWidth,t.clientWidth),s=Pr(n.scrollHeight,n.clientHeight,t.scrollHeight,t.clientHeight);let o=-r.scrollLeft+fi(e);const i=-r.scrollTop;return Sn(t).direction==="rtl"&&(o+=Pr(n.clientWidth,t.clientWidth)-a),{width:a,height:s,x:o,y:i}}function Qy(e,n){const r=ln(e),t=Wn(e),a=r.visualViewport;let s=t.clientWidth,o=t.clientHeight,i=0,l=0;if(a){s=a.width,o=a.height;const d=ki();(!d||d&&n==="fixed")&&(i=a.offsetLeft,l=a.offsetTop)}return{width:s,height:o,x:i,y:l}}function eT(e,n){const r=qr(e,!0,n==="fixed"),t=r.top+e.clientTop,a=r.left+e.clientLeft,s=Yn(e)?Qr(e):Un(1),o=e.clientWidth*s.x,i=e.clientHeight*s.y,l=a*s.x,d=t*s.y;return{width:o,height:i,x:l,y:d}}function nd(e,n,r){let t;if(n==="viewport")t=Qy(e,r);else if(n==="document")t=Xy(Wn(e));else if(An(n))t=eT(n,r);else{const a=Dg(e);t={x:n.x-a.x,y:n.y-a.y,width:n.width,height:n.height}}return Wa(t)}function Ig(e,n){const r=hr(e);return r===n||!An(r)||ut(r)?!1:Sn(r).position==="fixed"||Ig(r,n)}function nT(e,n){const r=n.get(e);if(r)return r;let t=Ut(e,[],!1).filter(i=>An(i)&&yt(i)!=="body"),a=null;const s=Sn(e).position==="fixed";let o=s?hr(e):e;for(;An(o)&&!ut(o);){const i=Sn(o),l=gi(o);!l&&i.position==="fixed"&&(a=null),(s?!l&&!a:!l&&i.position==="static"&&!!a&&["absolute","fixed"].includes(a.position)||ia(o)&&!l&&Ig(e,o))?t=t.filter(u=>u!==o):a=i,o=hr(o)}return n.set(e,t),t}function rT(e){let{element:n,boundary:r,rootBoundary:t,strategy:a}=e;const o=[...r==="clippingAncestors"?Es(n)?[]:nT(n,this._c):[].concat(r),t],i=o[0],l=o.reduce((d,u)=>{const g=nd(n,u,a);return d.top=Pr(g.top,d.top),d.right=lt(g.right,d.right),d.bottom=lt(g.bottom,d.bottom),d.left=Pr(g.left,d.left),d},nd(n,i,a));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function tT(e){const{width:n,height:r}=Ng(e);return{width:n,height:r}}function aT(e,n,r){const t=Yn(n),a=Wn(n),s=r==="fixed",o=qr(e,!0,s,n);let i={scrollLeft:0,scrollTop:0};const l=Un(0);if(t||!t&&!s)if((yt(n)!=="body"||ia(a))&&(i=ps(n)),t){const k=qr(n,!0,s,n);l.x=k.x+n.clientLeft,l.y=k.y+n.clientTop}else a&&(l.x=fi(a));const d=a&&!t&&!s?Og(a,i):Un(0),u=o.left+i.scrollLeft-l.x-d.x,g=o.top+i.scrollTop-l.y-d.y;return{x:u,y:g,width:o.width,height:o.height}}function Js(e){return Sn(e).position==="static"}function rd(e,n){if(!Yn(e)||Sn(e).position==="fixed")return null;if(n)return n(e);let r=e.offsetParent;return Wn(e)===r&&(r=r.ownerDocument.body),r}function Lg(e,n){const r=ln(e);if(Es(e))return r;if(!Yn(e)){let a=hr(e);for(;a&&!ut(a);){if(An(a)&&!Js(a))return a;a=hr(a)}return r}let t=rd(e,n);for(;t&&Cy(t)&&Js(t);)t=rd(t,n);return t&&ut(t)&&Js(t)&&!gi(t)?r:t||Wy(e)||r}const sT=async function(e){const n=this.getOffsetParent||Lg,r=this.getDimensions,t=await r(e.floating);return{reference:aT(e.reference,await n(e.floating),e.strategy),floating:{x:0,y:0,width:t.width,height:t.height}}};function oT(e){return Sn(e).direction==="rtl"}const iT={convertOffsetParentRelativeRectToViewportRelativeRect:zy,getDocumentElement:Wn,getClippingRect:rT,getOffsetParent:Lg,getElementRects:sT,getClientRects:Zy,getDimensions:tT,getScale:Qr,isElement:An,isRTL:oT};function lT(e,n){let r=null,t;const a=Wn(e);function s(){var i;clearTimeout(t),(i=r)==null||i.disconnect(),r=null}function o(i,l){i===void 0&&(i=!1),l===void 0&&(l=1),s();const{left:d,top:u,width:g,height:k}=e.getBoundingClientRect();if(i||n(),!g||!k)return;const m=ba(u),c=ba(a.clientWidth-(d+g)),f=ba(a.clientHeight-(u+k)),v=ba(d),p={rootMargin:-m+"px "+-c+"px "+-f+"px "+-v+"px",threshold:Pr(0,lt(1,l))||1};let R=!0;function S(_){const O=_[0].intersectionRatio;if(O!==l){if(!R)return o();O?o(!1,O):t=setTimeout(()=>{o(!1,1e-7)},1e3)}R=!1}try{r=new IntersectionObserver(S,{...p,root:a.ownerDocument})}catch{r=new IntersectionObserver(S,p)}r.observe(e)}return o(!0),s}function dT(e,n,r,t){t===void 0&&(t={});const{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:l=!1}=t,d=mi(e),u=a||s?[...d?Ut(d):[],...Ut(n)]:[];u.forEach(h=>{a&&h.addEventListener("scroll",r,{passive:!0}),s&&h.addEventListener("resize",r)});const g=d&&i?lT(d,r):null;let k=-1,m=null;o&&(m=new ResizeObserver(h=>{let[p]=h;p&&p.target===d&&m&&(m.unobserve(n),cancelAnimationFrame(k),k=requestAnimationFrame(()=>{var R;(R=m)==null||R.observe(n)})),r()}),d&&!l&&m.observe(d),m.observe(n));let c,f=l?qr(e):null;l&&v();function v(){const h=qr(e);f&&(h.x!==f.x||h.y!==f.y||h.width!==f.width||h.height!==f.height)&&r(),f=h,c=requestAnimationFrame(v)}return r(),()=>{var h;u.forEach(p=>{a&&p.removeEventListener("scroll",r),s&&p.removeEventListener("resize",r)}),g==null||g(),(h=m)==null||h.disconnect(),m=null,l&&cancelAnimationFrame(c)}}const uT=Hy,gT=Yy,kT=Gy,td=xy,mT=(e,n,r)=>{const t=new Map,a={platform:iT,...r},s={...a.platform,_c:t};return By(e,n,{...a,platform:s})};var La=typeof document<"u"?E.useLayoutEffect:E.useEffect;function $a(e,n){if(e===n)return!0;if(typeof e!=typeof n)return!1;if(typeof e=="function"&&e.toString()===n.toString())return!0;let r,t,a;if(e&&n&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==n.length)return!1;for(t=r;t--!==0;)if(!$a(e[t],n[t]))return!1;return!0}if(a=Object.keys(e),r=a.length,r!==Object.keys(n).length)return!1;for(t=r;t--!==0;)if(!{}.hasOwnProperty.call(n,a[t]))return!1;for(t=r;t--!==0;){const s=a[t];if(!(s==="_owner"&&e.$$typeof)&&!$a(e[s],n[s]))return!1}return!0}return e!==e&&n!==n}function Pg(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ad(e,n){const r=Pg(e);return Math.round(n*r)/r}function zs(e){const n=E.useRef(e);return La(()=>{n.current=e}),n}function fT(e){e===void 0&&(e={});const{placement:n="bottom",strategy:r="absolute",middleware:t=[],platform:a,elements:{reference:s,floating:o}={},transform:i=!0,whileElementsMounted:l,open:d}=e,[u,g]=E.useState({x:0,y:0,strategy:r,placement:n,middlewareData:{},isPositioned:!1}),[k,m]=E.useState(t);$a(k,t)||m(t);const[c,f]=E.useState(null),[v,h]=E.useState(null),p=E.useCallback(P=>{P!==O.current&&(O.current=P,f(P))},[]),R=E.useCallback(P=>{P!==A.current&&(A.current=P,h(P))},[]),S=s||c,_=o||v,O=E.useRef(null),A=E.useRef(null),D=E.useRef(u),K=l!=null,q=zs(l),B=zs(a),L=zs(d),I=E.useCallback(()=>{if(!O.current||!A.current)return;const P={placement:n,strategy:r,middleware:k};B.current&&(P.platform=B.current),mT(O.current,A.current,P).then(te=>{const ie={...te,isPositioned:L.current!==!1};V.current&&!$a(D.current,ie)&&(D.current=ie,mu.flushSync(()=>{g(ie)}))})},[k,n,r,B,L]);La(()=>{d===!1&&D.current.isPositioned&&(D.current.isPositioned=!1,g(P=>({...P,isPositioned:!1})))},[d]);const V=E.useRef(!1);La(()=>(V.current=!0,()=>{V.current=!1}),[]),La(()=>{if(S&&(O.current=S),_&&(A.current=_),S&&_){if(q.current)return q.current(S,_,I);I()}},[S,_,I,q,K]);const H=E.useMemo(()=>({reference:O,floating:A,setReference:p,setFloating:R}),[p,R]),C=E.useMemo(()=>({reference:S,floating:_}),[S,_]),M=E.useMemo(()=>{const P={position:r,left:0,top:0};if(!C.floating)return P;const te=ad(C.floating,u.x),ie=ad(C.floating,u.y);return i?{...P,transform:"translate("+te+"px, "+ie+"px)",...Pg(C.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:te,top:ie}},[r,i,C.floating,u.x,u.y]);return E.useMemo(()=>({...u,update:I,refs:H,elements:C,floatingStyles:M}),[u,I,H,C,M])}const vT=e=>{function n(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:t,padding:a}=typeof e=="function"?e(r):e;return t&&n(t)?t.current!=null?td({element:t.current,padding:a}).fn(r):{}:t?td({element:t,padding:a}).fn(r):{}}}},cT=(e,n)=>({...uT(e),options:[e,n]}),ET=(e,n)=>({...gT(e),options:[e,n]}),pT=(e,n)=>({...kT(e),options:[e,n]}),yT=(e,n)=>({...vT(e),options:[e,n]}),sd=/(\w+)/g;function TT(e,n){const r=Array.isArray(e)?e:hT(e);for(const t of n){if(!t)continue;let a=t;for(let s=0;s<r.length;s++){const o=a[r[s]];o!==void 0&&(a=o)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function hT(e){const n=[];let r=sd.exec(e);for(;r;){const[,t,a]=r;n.push(t||a),r=sd.exec(e)}return n}const RT=/{[^}]*}/g;function br(e,...n){const r=li(),t=r.translations||[],a=[...n,...Array.isArray(t)?t.map(o=>o[e]):[t[e]],r.locale[e]];return(o,i)=>{const l=TT(o,a);return i?l.replace(RT,d=>{const u=d.substring(1,d.length-1);if(i[u]===void 0){const g=JSON.stringify(i);throw new Error(`Error translating key '${o}'. No replacement syntax ({}) found for key '${u}'. The following replacements were passed: '${g}'`)}return i[u]}):l}}function vi(){const e=li(),n=e.translations||[],r=Array.isArray(n)?n.map(t=>t.global):[n.global];r.push(e.locale.global);for(const t of r)if(t!=null&&t.dateLocale)return t.dateLocale;throw new Error("dateLocale not found.")}var bT=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const _T=E.forwardRef((e,n)=>{var{className:r,size:t="medium",title:a,transparent:s=!1,variant:o="neutral",id:i}=e,l=bT(e,["className","size","title","transparent","variant","id"]);const d=sr(),u=br("Loader");return T.createElement("svg",Object.assign({"aria-labelledby":i??`loader-${d}`,ref:n,className:X("navds-loader",r,`navds-loader--${t}`,`navds-loader--${o}`,{"navds-loader--transparent":s}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},dn(l,["children"])),T.createElement("title",{id:i??`loader-${d}`},a||u("title")),T.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),T.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var AT=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Nn=E.forwardRef((e,n)=>{var{as:r="button",variant:t="primary",className:a,children:s,size:o="medium",loading:i=!1,disabled:l,icon:d,iconPosition:u="left",onKeyUp:g}=e,k=AT(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp"]);const m=l||i?dn(k,["href"]):k,c=f=>{f.key===" "&&!l&&!i&&f.currentTarget.click()};return T.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},m,{ref:n,onKeyUp:jt(g,c),className:X(a,"navds-button",`navds-button--${t}`,`navds-button--${o}`,{"navds-button--loading":i,"navds-button--icon-only":!!d&&!s,"navds-button--disabled":l??i}),disabled:l??i?!0:void 0}),d&&u==="left"&&T.createElement("span",{className:"navds-button__icon"},d),i&&T.createElement(_T,{size:o}),s&&T.createElement(on,{as:"span",size:o==="medium"?"medium":"small"},s),d&&u==="right"&&T.createElement("span",{className:"navds-button__icon"},d))});var ST=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const NT={error:FE,warning:AE,info:NE,success:hE},DT=E.forwardRef((e,n)=>{var{children:r,className:t,variant:a,size:s="medium",fullWidth:o=!1,contentMaxWidth:i=!0,inline:l=!1,closeButton:d=!1,onClose:u}=e,g=ST(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const k=br("Alert"),m=NT[a];return T.createElement("div",Object.assign({},g,{ref:n,className:X(t,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":o,"navds-alert--inline":l,"navds-alert--close-button":d})}),T.createElement(m,{title:k(a),className:"navds-alert__icon"}),T.createElement(ig,{as:"div",size:s,className:X("navds-alert__wrapper",i&&"navds-alert__wrapper--maxwidth")},r),d&&!l&&T.createElement("div",{className:"navds-alert__button-wrapper"},T.createElement(Nn,{className:"navds-alert__button",size:"small",variant:"tertiary-neutral",onClick:u,type:"button",icon:T.createElement(kg,{title:["error","warning"].includes(a)?k("closeAlert"):k("closeMessage")})})))});function ye(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}function Be(e,n){const r=re(e);return isNaN(n)?ye(e,NaN):(n&&r.setDate(r.getDate()+n),r)}function vn(e,n){const r=re(e);if(isNaN(n))return ye(e,NaN);if(!n)return r;const t=r.getDate(),a=ye(e,r.getTime());a.setMonth(r.getMonth()+n+1,0);const s=a.getDate();return t>=s?a:(r.setFullYear(a.getFullYear(),a.getMonth(),t),r)}function gt(e){const n=re(e).getDay();return n===0||n===6}const ci=6048e5,OT=864e5,IT=6e4,LT=36e5,PT=1e3;function or(e){return en(e,{weekStartsOn:1})}function Fg(e){const n=re(e),r=n.getFullYear(),t=ye(e,0);t.setFullYear(r+1,0,4),t.setHours(0,0,0,0);const a=or(t),s=ye(e,0);s.setFullYear(r,0,4),s.setHours(0,0,0,0);const o=or(s);return n.getTime()>=a.getTime()?r+1:n.getTime()>=o.getTime()?r:r-1}function kt(e){const n=re(e);return n.setHours(0,0,0,0),n}function mt(e){const n=re(e),r=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return r.setUTCFullYear(n.getFullYear()),+e-+r}function Qe(e,n){const r=kt(e),t=kt(n),a=+r-mt(r),s=+t-mt(t);return Math.round((a-s)/OT)}function FT(e){const n=Fg(e),r=ye(e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),or(r)}function Ht(e,n){const r=n*7;return Be(e,r)}function KT(e,n){return vn(e,n*12)}function Kg(e){let n;return e.forEach(function(r){const t=re(r);(n===void 0||n<t||isNaN(Number(t)))&&(n=t)}),n||new Date(NaN)}function wg(e){let n;return e.forEach(r=>{const t=re(r);(!n||n>t||isNaN(+t))&&(n=t)}),n||new Date(NaN)}function sn(e,n){const r=kt(e),t=kt(n);return+r==+t}function Ei(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function wT(e){if(!Ei(e)&&typeof e!="number")return!1;const n=re(e);return!isNaN(Number(n))}function Yt(e,n){const r=re(e),t=re(n),a=r.getFullYear()-t.getFullYear(),s=r.getMonth()-t.getMonth();return a*12+s}function MT(e,n,r){const t=en(e,r),a=en(n,r),s=+t-mt(t),o=+a-mt(a);return Math.round((s-o)/ci)}function ys(e){const n=re(e),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(23,59,59,999),n}function Le(e){const n=re(e);return n.setDate(1),n.setHours(0,0,0,0),n}function Ja(e){const n=re(e),r=ye(e,0);return r.setFullYear(n.getFullYear(),0,1),r.setHours(0,0,0,0),r}function Ts(e,n){var i,l,d,u;const r=jr(),t=(n==null?void 0:n.weekStartsOn)??((l=(i=n==null?void 0:n.locale)==null?void 0:i.options)==null?void 0:l.weekStartsOn)??r.weekStartsOn??((u=(d=r.locale)==null?void 0:d.options)==null?void 0:u.weekStartsOn)??0,a=re(e),s=a.getDay(),o=(s<t?-7:0)+6-(s-t);return a.setDate(a.getDate()+o),a.setHours(23,59,59,999),a}function Mg(e){return Ts(e,{weekStartsOn:1})}function qT(e){const n=re(e);return Qe(n,Ja(n))+1}function pi(e){const n=re(e),r=+or(n)-+FT(n);return Math.round(r/ci)+1}function yi(e,n){var u,g,k,m;const r=re(e),t=r.getFullYear(),a=jr(),s=(n==null?void 0:n.firstWeekContainsDate)??((g=(u=n==null?void 0:n.locale)==null?void 0:u.options)==null?void 0:g.firstWeekContainsDate)??a.firstWeekContainsDate??((m=(k=a.locale)==null?void 0:k.options)==null?void 0:m.firstWeekContainsDate)??1,o=ye(e,0);o.setFullYear(t+1,0,s),o.setHours(0,0,0,0);const i=en(o,n),l=ye(e,0);l.setFullYear(t,0,s),l.setHours(0,0,0,0);const d=en(l,n);return r.getTime()>=i.getTime()?t+1:r.getTime()>=d.getTime()?t:t-1}function VT(e,n){var i,l,d,u;const r=jr(),t=(n==null?void 0:n.firstWeekContainsDate)??((l=(i=n==null?void 0:n.locale)==null?void 0:i.options)==null?void 0:l.firstWeekContainsDate)??r.firstWeekContainsDate??((u=(d=r.locale)==null?void 0:d.options)==null?void 0:u.firstWeekContainsDate)??1,a=yi(e,n),s=ye(e,0);return s.setFullYear(a,0,t),s.setHours(0,0,0,0),en(s,n)}function hs(e,n){const r=re(e),t=+en(r,n)-+VT(r,n);return Math.round(t/ci)+1}function Ee(e,n){const r=e<0?"-":"",t=Math.abs(e).toString().padStart(n,"0");return r+t}const kr={y(e,n){const r=e.getFullYear(),t=r>0?r:1-r;return Ee(n==="yy"?t%100:t,n.length)},M(e,n){const r=e.getMonth();return n==="M"?String(r+1):Ee(r+1,2)},d(e,n){return Ee(e.getDate(),n.length)},a(e,n){const r=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,n){return Ee(e.getHours()%12||12,n.length)},H(e,n){return Ee(e.getHours(),n.length)},m(e,n){return Ee(e.getMinutes(),n.length)},s(e,n){return Ee(e.getSeconds(),n.length)},S(e,n){const r=n.length,t=e.getMilliseconds(),a=Math.trunc(t*Math.pow(10,r-3));return Ee(a,n.length)}},Wr={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},od={G:function(e,n,r){const t=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(t,{width:"abbreviated"});case"GGGGG":return r.era(t,{width:"narrow"});case"GGGG":default:return r.era(t,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){const t=e.getFullYear(),a=t>0?t:1-t;return r.ordinalNumber(a,{unit:"year"})}return kr.y(e,n)},Y:function(e,n,r,t){const a=yi(e,t),s=a>0?a:1-a;if(n==="YY"){const o=s%100;return Ee(o,2)}return n==="Yo"?r.ordinalNumber(s,{unit:"year"}):Ee(s,n.length)},R:function(e,n){const r=Fg(e);return Ee(r,n.length)},u:function(e,n){const r=e.getFullYear();return Ee(r,n.length)},Q:function(e,n,r){const t=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(t);case"QQ":return Ee(t,2);case"Qo":return r.ordinalNumber(t,{unit:"quarter"});case"QQQ":return r.quarter(t,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(t,{width:"wide",context:"formatting"})}},q:function(e,n,r){const t=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(t);case"qq":return Ee(t,2);case"qo":return r.ordinalNumber(t,{unit:"quarter"});case"qqq":return r.quarter(t,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(t,{width:"wide",context:"standalone"})}},M:function(e,n,r){const t=e.getMonth();switch(n){case"M":case"MM":return kr.M(e,n);case"Mo":return r.ordinalNumber(t+1,{unit:"month"});case"MMM":return r.month(t,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(t,{width:"wide",context:"formatting"})}},L:function(e,n,r){const t=e.getMonth();switch(n){case"L":return String(t+1);case"LL":return Ee(t+1,2);case"Lo":return r.ordinalNumber(t+1,{unit:"month"});case"LLL":return r.month(t,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(t,{width:"wide",context:"standalone"})}},w:function(e,n,r,t){const a=hs(e,t);return n==="wo"?r.ordinalNumber(a,{unit:"week"}):Ee(a,n.length)},I:function(e,n,r){const t=pi(e);return n==="Io"?r.ordinalNumber(t,{unit:"week"}):Ee(t,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):kr.d(e,n)},D:function(e,n,r){const t=qT(e);return n==="Do"?r.ordinalNumber(t,{unit:"dayOfYear"}):Ee(t,n.length)},E:function(e,n,r){const t=e.getDay();switch(n){case"E":case"EE":case"EEE":return r.day(t,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(t,{width:"short",context:"formatting"});case"EEEE":default:return r.day(t,{width:"wide",context:"formatting"})}},e:function(e,n,r,t){const a=e.getDay(),s=(a-t.weekStartsOn+8)%7||7;switch(n){case"e":return String(s);case"ee":return Ee(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(a,{width:"short",context:"formatting"});case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},c:function(e,n,r,t){const a=e.getDay(),s=(a-t.weekStartsOn+8)%7||7;switch(n){case"c":return String(s);case"cc":return Ee(s,n.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});case"cccccc":return r.day(a,{width:"short",context:"standalone"});case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},i:function(e,n,r){const t=e.getDay(),a=t===0?7:t;switch(n){case"i":return String(a);case"ii":return Ee(a,n.length);case"io":return r.ordinalNumber(a,{unit:"day"});case"iii":return r.day(t,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(t,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(t,{width:"short",context:"formatting"});case"iiii":default:return r.day(t,{width:"wide",context:"formatting"})}},a:function(e,n,r){const a=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,n,r){const t=e.getHours();let a;switch(t===12?a=Wr.noon:t===0?a=Wr.midnight:a=t/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,n,r){const t=e.getHours();let a;switch(t>=17?a=Wr.evening:t>=12?a=Wr.afternoon:t>=4?a=Wr.morning:a=Wr.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){let t=e.getHours()%12;return t===0&&(t=12),r.ordinalNumber(t,{unit:"hour"})}return kr.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):kr.H(e,n)},K:function(e,n,r){const t=e.getHours()%12;return n==="Ko"?r.ordinalNumber(t,{unit:"hour"}):Ee(t,n.length)},k:function(e,n,r){let t=e.getHours();return t===0&&(t=24),n==="ko"?r.ordinalNumber(t,{unit:"hour"}):Ee(t,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):kr.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):kr.s(e,n)},S:function(e,n){return kr.S(e,n)},X:function(e,n,r){const t=e.getTimezoneOffset();if(t===0)return"Z";switch(n){case"X":return ld(t);case"XXXX":case"XX":return Or(t);case"XXXXX":case"XXX":default:return Or(t,":")}},x:function(e,n,r){const t=e.getTimezoneOffset();switch(n){case"x":return ld(t);case"xxxx":case"xx":return Or(t);case"xxxxx":case"xxx":default:return Or(t,":")}},O:function(e,n,r){const t=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+id(t,":");case"OOOO":default:return"GMT"+Or(t,":")}},z:function(e,n,r){const t=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+id(t,":");case"zzzz":default:return"GMT"+Or(t,":")}},t:function(e,n,r){const t=Math.trunc(e.getTime()/1e3);return Ee(t,n.length)},T:function(e,n,r){const t=e.getTime();return Ee(t,n.length)}};function id(e,n=""){const r=e>0?"-":"+",t=Math.abs(e),a=Math.trunc(t/60),s=t%60;return s===0?r+String(a):r+String(a)+n+Ee(s,2)}function ld(e,n){return e%60===0?(e>0?"-":"+")+Ee(Math.abs(e)/60,2):Or(e,n)}function Or(e,n=""){const r=e>0?"-":"+",t=Math.abs(e),a=Ee(Math.trunc(t/60),2),s=Ee(t%60,2);return r+a+n+s}const dd=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},qg=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},jT=(e,n)=>{const r=e.match(/(P+)(p+)?/)||[],t=r[1],a=r[2];if(!a)return dd(e,n);let s;switch(t){case"P":s=n.dateTime({width:"short"});break;case"PP":s=n.dateTime({width:"medium"});break;case"PPP":s=n.dateTime({width:"long"});break;case"PPPP":default:s=n.dateTime({width:"full"});break}return s.replace("{{date}}",dd(t,n)).replace("{{time}}",qg(a,n))},Fo={p:qg,P:jT},BT=/^D+$/,xT=/^Y+$/,GT=["D","DD","YY","YYYY"];function Vg(e){return BT.test(e)}function jg(e){return xT.test(e)}function Ko(e,n,r){const t=UT(e,n,r);if(console.warn(t),GT.includes(e))throw new RangeError(t)}function UT(e,n,r){const t=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${t} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const HT=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,YT=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,CT=/^'([^]*?)'?$/,WT=/''/g,$T=/[a-zA-Z]/;function lr(e,n,r){var u,g,k,m,c,f,v,h;const t=jr(),a=(r==null?void 0:r.locale)??t.locale??ii,s=(r==null?void 0:r.firstWeekContainsDate)??((g=(u=r==null?void 0:r.locale)==null?void 0:u.options)==null?void 0:g.firstWeekContainsDate)??t.firstWeekContainsDate??((m=(k=t.locale)==null?void 0:k.options)==null?void 0:m.firstWeekContainsDate)??1,o=(r==null?void 0:r.weekStartsOn)??((f=(c=r==null?void 0:r.locale)==null?void 0:c.options)==null?void 0:f.weekStartsOn)??t.weekStartsOn??((h=(v=t.locale)==null?void 0:v.options)==null?void 0:h.weekStartsOn)??0,i=re(e);if(!wT(i))throw new RangeError("Invalid time value");let l=n.match(YT).map(p=>{const R=p[0];if(R==="p"||R==="P"){const S=Fo[R];return S(p,a.formatLong)}return p}).join("").match(HT).map(p=>{if(p==="''")return{isToken:!1,value:"'"};const R=p[0];if(R==="'")return{isToken:!1,value:JT(p)};if(od[R])return{isToken:!0,value:p};if(R.match($T))throw new RangeError("Format string contains an unescaped latin alphabet character `"+R+"`");return{isToken:!1,value:p}});a.localize.preprocessor&&(l=a.localize.preprocessor(i,l));const d={firstWeekContainsDate:s,weekStartsOn:o,locale:a};return l.map(p=>{if(!p.isToken)return p.value;const R=p.value;(!(r!=null&&r.useAdditionalWeekYearTokens)&&jg(R)||!(r!=null&&r.useAdditionalDayOfYearTokens)&&Vg(R))&&Ko(R,n,String(e));const S=od[R[0]];return S(i,R,a.localize,d)}).join("")}function JT(e){const n=e.match(CT);return n?n[1].replace(WT,"'"):e}function zT(e){const n=re(e),r=n.getFullYear(),t=n.getMonth(),a=ye(e,0);return a.setFullYear(r,t+1,0),a.setHours(0,0,0,0),a.getDate()}function ZT(){return Object.assign({},jr())}function XT(e){let r=re(e).getDay();return r===0&&(r=7),r}function Bg(e){return Math.trunc(+re(e)/1e3)}function QT(e){const n=re(e),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(0,0,0,0),n}function xg(e,n){return MT(QT(e),Le(e),n)+1}function wo(e,n){const r=re(e),t=re(n);return r.getTime()>t.getTime()}function Ti(e,n){const r=re(e),t=re(n);return+r<+t}function eh(e,n){const r=n instanceof Date?ye(n,0):new n(0);return r.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),r.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),r}const nh=10;class Gg{constructor(){W(this,"subPriority",0)}validate(n,r){return!0}}class rh extends Gg{constructor(n,r,t,a,s){super(),this.value=n,this.validateValue=r,this.setValue=t,this.priority=a,s&&(this.subPriority=s)}validate(n,r){return this.validateValue(n,this.value,r)}set(n,r,t){return this.setValue(n,r,this.value,t)}}class th extends Gg{constructor(){super(...arguments);W(this,"priority",nh);W(this,"subPriority",-1)}set(r,t){return t.timestampIsSet?r:ye(r,eh(r,Date))}}class ve{run(n,r,t,a){const s=this.parse(n,r,t,a);return s?{setter:new rh(s.value,this.validate,this.set,this.priority,this.subPriority),rest:s.rest}:null}validate(n,r,t){return!0}}class ah extends ve{constructor(){super(...arguments);W(this,"priority",140);W(this,"incompatibleTokens",["R","u","t","T"])}parse(r,t,a){switch(t){case"G":case"GG":case"GGG":return a.era(r,{width:"abbreviated"})||a.era(r,{width:"narrow"});case"GGGGG":return a.era(r,{width:"narrow"});case"GGGG":default:return a.era(r,{width:"wide"})||a.era(r,{width:"abbreviated"})||a.era(r,{width:"narrow"})}}set(r,t,a){return t.era=a,r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}}const Me={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Vn={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function qe(e,n){return e&&{value:n(e.value),rest:e.rest}}function Oe(e,n){const r=n.match(e);return r?{value:parseInt(r[0],10),rest:n.slice(r[0].length)}:null}function jn(e,n){const r=n.match(e);if(!r)return null;if(r[0]==="Z")return{value:0,rest:n.slice(1)};const t=r[1]==="+"?1:-1,a=r[2]?parseInt(r[2],10):0,s=r[3]?parseInt(r[3],10):0,o=r[5]?parseInt(r[5],10):0;return{value:t*(a*LT+s*IT+o*PT),rest:n.slice(r[0].length)}}function Ug(e){return Oe(Me.anyDigitsSigned,e)}function Pe(e,n){switch(e){case 1:return Oe(Me.singleDigit,n);case 2:return Oe(Me.twoDigits,n);case 3:return Oe(Me.threeDigits,n);case 4:return Oe(Me.fourDigits,n);default:return Oe(new RegExp("^\\d{1,"+e+"}"),n)}}function za(e,n){switch(e){case 1:return Oe(Me.singleDigitSigned,n);case 2:return Oe(Me.twoDigitsSigned,n);case 3:return Oe(Me.threeDigitsSigned,n);case 4:return Oe(Me.fourDigitsSigned,n);default:return Oe(new RegExp("^-?\\d{1,"+e+"}"),n)}}function hi(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Hg(e,n){const r=n>0,t=r?n:1-n;let a;if(t<=50)a=e||100;else{const s=t+50,o=Math.trunc(s/100)*100,i=e>=s%100;a=e+o-(i?100:0)}return r?a:1-a}function Yg(e){return e%400===0||e%4===0&&e%100!==0}class sh extends ve{constructor(){super(...arguments);W(this,"priority",130);W(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(r,t,a){const s=o=>({year:o,isTwoDigitYear:t==="yy"});switch(t){case"y":return qe(Pe(4,r),s);case"yo":return qe(a.ordinalNumber(r,{unit:"year"}),s);default:return qe(Pe(t.length,r),s)}}validate(r,t){return t.isTwoDigitYear||t.year>0}set(r,t,a){const s=r.getFullYear();if(a.isTwoDigitYear){const i=Hg(a.year,s);return r.setFullYear(i,0,1),r.setHours(0,0,0,0),r}const o=!("era"in t)||t.era===1?a.year:1-a.year;return r.setFullYear(o,0,1),r.setHours(0,0,0,0),r}}class oh extends ve{constructor(){super(...arguments);W(this,"priority",130);W(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(r,t,a){const s=o=>({year:o,isTwoDigitYear:t==="YY"});switch(t){case"Y":return qe(Pe(4,r),s);case"Yo":return qe(a.ordinalNumber(r,{unit:"year"}),s);default:return qe(Pe(t.length,r),s)}}validate(r,t){return t.isTwoDigitYear||t.year>0}set(r,t,a,s){const o=yi(r,s);if(a.isTwoDigitYear){const l=Hg(a.year,o);return r.setFullYear(l,0,s.firstWeekContainsDate),r.setHours(0,0,0,0),en(r,s)}const i=!("era"in t)||t.era===1?a.year:1-a.year;return r.setFullYear(i,0,s.firstWeekContainsDate),r.setHours(0,0,0,0),en(r,s)}}class ih extends ve{constructor(){super(...arguments);W(this,"priority",130);W(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(r,t){return za(t==="R"?4:t.length,r)}set(r,t,a){const s=ye(r,0);return s.setFullYear(a,0,4),s.setHours(0,0,0,0),or(s)}}class lh extends ve{constructor(){super(...arguments);W(this,"priority",130);W(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(r,t){return za(t==="u"?4:t.length,r)}set(r,t,a){return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}}class dh extends ve{constructor(){super(...arguments);W(this,"priority",120);W(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(r,t,a){switch(t){case"Q":case"QQ":return Pe(t.length,r);case"Qo":return a.ordinalNumber(r,{unit:"quarter"});case"QQQ":return a.quarter(r,{width:"abbreviated",context:"formatting"})||a.quarter(r,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(r,{width:"wide",context:"formatting"})||a.quarter(r,{width:"abbreviated",context:"formatting"})||a.quarter(r,{width:"narrow",context:"formatting"})}}validate(r,t){return t>=1&&t<=4}set(r,t,a){return r.setMonth((a-1)*3,1),r.setHours(0,0,0,0),r}}class uh extends ve{constructor(){super(...arguments);W(this,"priority",120);W(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(r,t,a){switch(t){case"q":case"qq":return Pe(t.length,r);case"qo":return a.ordinalNumber(r,{unit:"quarter"});case"qqq":return a.quarter(r,{width:"abbreviated",context:"standalone"})||a.quarter(r,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(r,{width:"wide",context:"standalone"})||a.quarter(r,{width:"abbreviated",context:"standalone"})||a.quarter(r,{width:"narrow",context:"standalone"})}}validate(r,t){return t>=1&&t<=4}set(r,t,a){return r.setMonth((a-1)*3,1),r.setHours(0,0,0,0),r}}class gh extends ve{constructor(){super(...arguments);W(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);W(this,"priority",110)}parse(r,t,a){const s=o=>o-1;switch(t){case"M":return qe(Oe(Me.month,r),s);case"MM":return qe(Pe(2,r),s);case"Mo":return qe(a.ordinalNumber(r,{unit:"month"}),s);case"MMM":return a.month(r,{width:"abbreviated",context:"formatting"})||a.month(r,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(r,{width:"wide",context:"formatting"})||a.month(r,{width:"abbreviated",context:"formatting"})||a.month(r,{width:"narrow",context:"formatting"})}}validate(r,t){return t>=0&&t<=11}set(r,t,a){return r.setMonth(a,1),r.setHours(0,0,0,0),r}}class kh extends ve{constructor(){super(...arguments);W(this,"priority",110);W(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(r,t,a){const s=o=>o-1;switch(t){case"L":return qe(Oe(Me.month,r),s);case"LL":return qe(Pe(2,r),s);case"Lo":return qe(a.ordinalNumber(r,{unit:"month"}),s);case"LLL":return a.month(r,{width:"abbreviated",context:"standalone"})||a.month(r,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(r,{width:"wide",context:"standalone"})||a.month(r,{width:"abbreviated",context:"standalone"})||a.month(r,{width:"narrow",context:"standalone"})}}validate(r,t){return t>=0&&t<=11}set(r,t,a){return r.setMonth(a,1),r.setHours(0,0,0,0),r}}function mh(e,n,r){const t=re(e),a=hs(t,r)-n;return t.setDate(t.getDate()-a*7),t}class fh extends ve{constructor(){super(...arguments);W(this,"priority",100);W(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(r,t,a){switch(t){case"w":return Oe(Me.week,r);case"wo":return a.ordinalNumber(r,{unit:"week"});default:return Pe(t.length,r)}}validate(r,t){return t>=1&&t<=53}set(r,t,a,s){return en(mh(r,a,s),s)}}function vh(e,n){const r=re(e),t=pi(r)-n;return r.setDate(r.getDate()-t*7),r}class ch extends ve{constructor(){super(...arguments);W(this,"priority",100);W(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(r,t,a){switch(t){case"I":return Oe(Me.week,r);case"Io":return a.ordinalNumber(r,{unit:"week"});default:return Pe(t.length,r)}}validate(r,t){return t>=1&&t<=53}set(r,t,a){return or(vh(r,a))}}const Eh=[31,28,31,30,31,30,31,31,30,31,30,31],ph=[31,29,31,30,31,30,31,31,30,31,30,31];class yh extends ve{constructor(){super(...arguments);W(this,"priority",90);W(this,"subPriority",1);W(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(r,t,a){switch(t){case"d":return Oe(Me.date,r);case"do":return a.ordinalNumber(r,{unit:"date"});default:return Pe(t.length,r)}}validate(r,t){const a=r.getFullYear(),s=Yg(a),o=r.getMonth();return s?t>=1&&t<=ph[o]:t>=1&&t<=Eh[o]}set(r,t,a){return r.setDate(a),r.setHours(0,0,0,0),r}}class Th extends ve{constructor(){super(...arguments);W(this,"priority",90);W(this,"subpriority",1);W(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(r,t,a){switch(t){case"D":case"DD":return Oe(Me.dayOfYear,r);case"Do":return a.ordinalNumber(r,{unit:"date"});default:return Pe(t.length,r)}}validate(r,t){const a=r.getFullYear();return Yg(a)?t>=1&&t<=366:t>=1&&t<=365}set(r,t,a){return r.setMonth(0,a),r.setHours(0,0,0,0),r}}function Ri(e,n,r){var g,k,m,c;const t=jr(),a=(r==null?void 0:r.weekStartsOn)??((k=(g=r==null?void 0:r.locale)==null?void 0:g.options)==null?void 0:k.weekStartsOn)??t.weekStartsOn??((c=(m=t.locale)==null?void 0:m.options)==null?void 0:c.weekStartsOn)??0,s=re(e),o=s.getDay(),l=(n%7+7)%7,d=7-a,u=n<0||n>6?n-(o+d)%7:(l+d)%7-(o+d)%7;return Be(s,u)}class hh extends ve{constructor(){super(...arguments);W(this,"priority",90);W(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(r,t,a){switch(t){case"E":case"EE":case"EEE":return a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(r,{width:"wide",context:"formatting"})||a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"})}}validate(r,t){return t>=0&&t<=6}set(r,t,a,s){return r=Ri(r,a,s),r.setHours(0,0,0,0),r}}class Rh extends ve{constructor(){super(...arguments);W(this,"priority",90);W(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(r,t,a,s){const o=i=>{const l=Math.floor((i-1)/7)*7;return(i+s.weekStartsOn+6)%7+l};switch(t){case"e":case"ee":return qe(Pe(t.length,r),o);case"eo":return qe(a.ordinalNumber(r,{unit:"day"}),o);case"eee":return a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"eeeee":return a.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(r,{width:"wide",context:"formatting"})||a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"})}}validate(r,t){return t>=0&&t<=6}set(r,t,a,s){return r=Ri(r,a,s),r.setHours(0,0,0,0),r}}class bh extends ve{constructor(){super(...arguments);W(this,"priority",90);W(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(r,t,a,s){const o=i=>{const l=Math.floor((i-1)/7)*7;return(i+s.weekStartsOn+6)%7+l};switch(t){case"c":case"cc":return qe(Pe(t.length,r),o);case"co":return qe(a.ordinalNumber(r,{unit:"day"}),o);case"ccc":return a.day(r,{width:"abbreviated",context:"standalone"})||a.day(r,{width:"short",context:"standalone"})||a.day(r,{width:"narrow",context:"standalone"});case"ccccc":return a.day(r,{width:"narrow",context:"standalone"});case"cccccc":return a.day(r,{width:"short",context:"standalone"})||a.day(r,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(r,{width:"wide",context:"standalone"})||a.day(r,{width:"abbreviated",context:"standalone"})||a.day(r,{width:"short",context:"standalone"})||a.day(r,{width:"narrow",context:"standalone"})}}validate(r,t){return t>=0&&t<=6}set(r,t,a,s){return r=Ri(r,a,s),r.setHours(0,0,0,0),r}}function _h(e,n){const r=re(e),t=XT(r),a=n-t;return Be(r,a)}class Ah extends ve{constructor(){super(...arguments);W(this,"priority",90);W(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(r,t,a){const s=o=>o===0?7:o;switch(t){case"i":case"ii":return Pe(t.length,r);case"io":return a.ordinalNumber(r,{unit:"day"});case"iii":return qe(a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"}),s);case"iiiii":return qe(a.day(r,{width:"narrow",context:"formatting"}),s);case"iiiiii":return qe(a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"}),s);case"iiii":default:return qe(a.day(r,{width:"wide",context:"formatting"})||a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"}),s)}}validate(r,t){return t>=1&&t<=7}set(r,t,a){return r=_h(r,a),r.setHours(0,0,0,0),r}}class Sh extends ve{constructor(){super(...arguments);W(this,"priority",80);W(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(r,t,a){switch(t){case"a":case"aa":case"aaa":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})||a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,t,a){return r.setHours(hi(a),0,0,0),r}}class Nh extends ve{constructor(){super(...arguments);W(this,"priority",80);W(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(r,t,a){switch(t){case"b":case"bb":case"bbb":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})||a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,t,a){return r.setHours(hi(a),0,0,0),r}}class Dh extends ve{constructor(){super(...arguments);W(this,"priority",80);W(this,"incompatibleTokens",["a","b","t","T"])}parse(r,t,a){switch(t){case"B":case"BB":case"BBB":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})||a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,t,a){return r.setHours(hi(a),0,0,0),r}}class Oh extends ve{constructor(){super(...arguments);W(this,"priority",70);W(this,"incompatibleTokens",["H","K","k","t","T"])}parse(r,t,a){switch(t){case"h":return Oe(Me.hour12h,r);case"ho":return a.ordinalNumber(r,{unit:"hour"});default:return Pe(t.length,r)}}validate(r,t){return t>=1&&t<=12}set(r,t,a){const s=r.getHours()>=12;return s&&a<12?r.setHours(a+12,0,0,0):!s&&a===12?r.setHours(0,0,0,0):r.setHours(a,0,0,0),r}}class Ih extends ve{constructor(){super(...arguments);W(this,"priority",70);W(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(r,t,a){switch(t){case"H":return Oe(Me.hour23h,r);case"Ho":return a.ordinalNumber(r,{unit:"hour"});default:return Pe(t.length,r)}}validate(r,t){return t>=0&&t<=23}set(r,t,a){return r.setHours(a,0,0,0),r}}class Lh extends ve{constructor(){super(...arguments);W(this,"priority",70);W(this,"incompatibleTokens",["h","H","k","t","T"])}parse(r,t,a){switch(t){case"K":return Oe(Me.hour11h,r);case"Ko":return a.ordinalNumber(r,{unit:"hour"});default:return Pe(t.length,r)}}validate(r,t){return t>=0&&t<=11}set(r,t,a){return r.getHours()>=12&&a<12?r.setHours(a+12,0,0,0):r.setHours(a,0,0,0),r}}class Ph extends ve{constructor(){super(...arguments);W(this,"priority",70);W(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(r,t,a){switch(t){case"k":return Oe(Me.hour24h,r);case"ko":return a.ordinalNumber(r,{unit:"hour"});default:return Pe(t.length,r)}}validate(r,t){return t>=1&&t<=24}set(r,t,a){const s=a<=24?a%24:a;return r.setHours(s,0,0,0),r}}class Fh extends ve{constructor(){super(...arguments);W(this,"priority",60);W(this,"incompatibleTokens",["t","T"])}parse(r,t,a){switch(t){case"m":return Oe(Me.minute,r);case"mo":return a.ordinalNumber(r,{unit:"minute"});default:return Pe(t.length,r)}}validate(r,t){return t>=0&&t<=59}set(r,t,a){return r.setMinutes(a,0,0),r}}class Kh extends ve{constructor(){super(...arguments);W(this,"priority",50);W(this,"incompatibleTokens",["t","T"])}parse(r,t,a){switch(t){case"s":return Oe(Me.second,r);case"so":return a.ordinalNumber(r,{unit:"second"});default:return Pe(t.length,r)}}validate(r,t){return t>=0&&t<=59}set(r,t,a){return r.setSeconds(a,0),r}}class wh extends ve{constructor(){super(...arguments);W(this,"priority",30);W(this,"incompatibleTokens",["t","T"])}parse(r,t){const a=s=>Math.trunc(s*Math.pow(10,-t.length+3));return qe(Pe(t.length,r),a)}set(r,t,a){return r.setMilliseconds(a),r}}class Mh extends ve{constructor(){super(...arguments);W(this,"priority",10);W(this,"incompatibleTokens",["t","T","x"])}parse(r,t){switch(t){case"X":return jn(Vn.basicOptionalMinutes,r);case"XX":return jn(Vn.basic,r);case"XXXX":return jn(Vn.basicOptionalSeconds,r);case"XXXXX":return jn(Vn.extendedOptionalSeconds,r);case"XXX":default:return jn(Vn.extended,r)}}set(r,t,a){return t.timestampIsSet?r:ye(r,r.getTime()-mt(r)-a)}}class qh extends ve{constructor(){super(...arguments);W(this,"priority",10);W(this,"incompatibleTokens",["t","T","X"])}parse(r,t){switch(t){case"x":return jn(Vn.basicOptionalMinutes,r);case"xx":return jn(Vn.basic,r);case"xxxx":return jn(Vn.basicOptionalSeconds,r);case"xxxxx":return jn(Vn.extendedOptionalSeconds,r);case"xxx":default:return jn(Vn.extended,r)}}set(r,t,a){return t.timestampIsSet?r:ye(r,r.getTime()-mt(r)-a)}}class Vh extends ve{constructor(){super(...arguments);W(this,"priority",40);W(this,"incompatibleTokens","*")}parse(r){return Ug(r)}set(r,t,a){return[ye(r,a*1e3),{timestampIsSet:!0}]}}class jh extends ve{constructor(){super(...arguments);W(this,"priority",20);W(this,"incompatibleTokens","*")}parse(r){return Ug(r)}set(r,t,a){return[ye(r,a),{timestampIsSet:!0}]}}const Bh={G:new ah,y:new sh,Y:new oh,R:new ih,u:new lh,Q:new dh,q:new uh,M:new gh,L:new kh,w:new fh,I:new ch,d:new yh,D:new Th,E:new hh,e:new Rh,c:new bh,i:new Ah,a:new Sh,b:new Nh,B:new Dh,h:new Oh,H:new Ih,K:new Lh,k:new Ph,m:new Fh,s:new Kh,S:new wh,X:new Mh,x:new qh,t:new Vh,T:new jh},xh=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Gh=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Uh=/^'([^]*?)'?$/,Hh=/''/g,Yh=/\S/,Ch=/[a-zA-Z]/;function et(e,n,r,t){var f,v,h,p,R,S,_,O;const a=ZT(),s=(t==null?void 0:t.locale)??a.locale??ii,o=(t==null?void 0:t.firstWeekContainsDate)??((v=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:v.firstWeekContainsDate)??a.firstWeekContainsDate??((p=(h=a.locale)==null?void 0:h.options)==null?void 0:p.firstWeekContainsDate)??1,i=(t==null?void 0:t.weekStartsOn)??((S=(R=t==null?void 0:t.locale)==null?void 0:R.options)==null?void 0:S.weekStartsOn)??a.weekStartsOn??((O=(_=a.locale)==null?void 0:_.options)==null?void 0:O.weekStartsOn)??0;if(n==="")return e===""?re(r):ye(r,NaN);const l={firstWeekContainsDate:o,weekStartsOn:i,locale:s},d=[new th],u=n.match(Gh).map(A=>{const D=A[0];if(D in Fo){const K=Fo[D];return K(A,s.formatLong)}return A}).join("").match(xh),g=[];for(let A of u){!(t!=null&&t.useAdditionalWeekYearTokens)&&jg(A)&&Ko(A,n,e),!(t!=null&&t.useAdditionalDayOfYearTokens)&&Vg(A)&&Ko(A,n,e);const D=A[0],K=Bh[D];if(K){const{incompatibleTokens:q}=K;if(Array.isArray(q)){const L=g.find(I=>q.includes(I.token)||I.token===D);if(L)throw new RangeError(`The format string mustn't contain \`${L.fullToken}\` and \`${A}\` at the same time`)}else if(K.incompatibleTokens==="*"&&g.length>0)throw new RangeError(`The format string mustn't contain \`${A}\` and any other token at the same time`);g.push({token:D,fullToken:A});const B=K.run(e,A,s.match,l);if(!B)return ye(r,NaN);d.push(B.setter),e=B.rest}else{if(D.match(Ch))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");if(A==="''"?A="'":D==="'"&&(A=Wh(A)),e.indexOf(A)===0)e=e.slice(A.length);else return ye(r,NaN)}}if(e.length>0&&Yh.test(e))return ye(r,NaN);const k=d.map(A=>A.priority).sort((A,D)=>D-A).filter((A,D,K)=>K.indexOf(A)===D).map(A=>d.filter(D=>D.priority===A).sort((D,K)=>K.subPriority-D.subPriority)).map(A=>A[0]);let m=re(r);if(isNaN(m.getTime()))return ye(r,NaN);const c={};for(const A of k){if(!A.validate(m,l))return ye(r,NaN);const D=A.set(m,c,l);Array.isArray(D)?(m=D[0],Object.assign(c,D[1])):m=D}return ye(r,m)}function Wh(e){return e.match(Uh)[1].replace(Hh,"'")}function bi(e,n){const r=re(e),t=re(n);return r.getFullYear()===t.getFullYear()&&r.getMonth()===t.getMonth()}function Pa(e,n){const r=re(e),t=re(n);return r.getFullYear()===t.getFullYear()}function Fa(e,n){return Be(e,-n)}function fr(e,n){const r=re(e),t=r.getFullYear(),a=r.getDate(),s=ye(e,0);s.setFullYear(t,n,15),s.setHours(0,0,0,0);const o=zT(s);return r.setMonth(n,Math.min(a,o)),r}function Ct(e,n){const r=re(e);return isNaN(+r)?ye(e,NaN):(r.setFullYear(n),r)}function $h(e,n){return vn(e,-n)}function Jh(e,n){const{years:r=0,months:t=0,weeks:a=0,days:s=0,hours:o=0,minutes:i=0,seconds:l=0}=n,d=$h(e,t+r*12),u=Fa(d,s+a*7),g=i+o*60,m=(l+g*60)*1e3;return ye(e,u.getTime()-m)}var Q=function(){return Q=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},Q.apply(this,arguments)};function zh(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r}function Cg(e,n,r){for(var t=0,a=n.length,s;t<a;t++)(s||!(t in n))&&(s||(s=Array.prototype.slice.call(n,0,t)),s[t]=n[t]);return e.concat(s||Array.prototype.slice.call(n))}function la(e){return e.mode==="multiple"}function da(e){return e.mode==="range"}function Rs(e){return e.mode==="single"}var Zh={root:"rdp",multiple_months:"rdp-multiple_months",with_weeknumber:"rdp-with_weeknumber",vhidden:"rdp-vhidden",button_reset:"rdp-button_reset",button:"rdp-button",caption:"rdp-caption",caption_start:"rdp-caption_start",caption_end:"rdp-caption_end",caption_between:"rdp-caption_between",caption_label:"rdp-caption_label",caption_dropdowns:"rdp-caption_dropdowns",dropdown:"rdp-dropdown",dropdown_month:"rdp-dropdown_month",dropdown_year:"rdp-dropdown_year",dropdown_icon:"rdp-dropdown_icon",months:"rdp-months",month:"rdp-month",table:"rdp-table",tbody:"rdp-tbody",tfoot:"rdp-tfoot",head:"rdp-head",head_row:"rdp-head_row",head_cell:"rdp-head_cell",nav:"rdp-nav",nav_button:"rdp-nav_button",nav_button_previous:"rdp-nav_button_previous",nav_button_next:"rdp-nav_button_next",nav_icon:"rdp-nav_icon",row:"rdp-row",weeknumber:"rdp-weeknumber",cell:"rdp-cell",day:"rdp-day",day_today:"rdp-day_today",day_outside:"rdp-day_outside",day_selected:"rdp-day_selected",day_disabled:"rdp-day_disabled",day_hidden:"rdp-day_hidden",day_range_start:"rdp-day_range_start",day_range_end:"rdp-day_range_end",day_range_middle:"rdp-day_range_middle"};function Xh(e,n){return lr(e,"LLLL y",n)}function Qh(e,n){return lr(e,"d",n)}function eR(e,n){return lr(e,"LLLL",n)}function nR(e){return"".concat(e)}function rR(e,n){return lr(e,"cccccc",n)}function tR(e,n){return lr(e,"yyyy",n)}var aR=Object.freeze({__proto__:null,formatCaption:Xh,formatDay:Qh,formatMonthCaption:eR,formatWeekNumber:nR,formatWeekdayName:rR,formatYearCaption:tR}),sR=function(e,n,r){return lr(e,"do MMMM (EEEE)",r)},oR=function(){return"Month: "},iR=function(){return"Go to next month"},lR=function(){return"Go to previous month"},dR=function(e,n){return lr(e,"cccc",n)},uR=function(e){return"Week n. ".concat(e)},gR=function(){return"Year: "},kR=Object.freeze({__proto__:null,labelDay:sR,labelMonthDropdown:oR,labelNext:iR,labelPrevious:lR,labelWeekNumber:uR,labelWeekday:dR,labelYearDropdown:gR});function mR(){var e="buttons",n=Zh,r=ii,t={},a={},s=1,o={},i=new Date;return{captionLayout:e,classNames:n,formatters:aR,labels:kR,locale:r,modifiersClassNames:t,modifiers:a,numberOfMonths:s,styles:o,today:i,mode:"default"}}function fR(e){var n=e.fromYear,r=e.toYear,t=e.fromMonth,a=e.toMonth,s=e.fromDate,o=e.toDate;return t?s=Le(t):n&&(s=new Date(n,0,1)),a?o=ys(a):r&&(o=new Date(r,11,31)),{fromDate:s?kt(s):void 0,toDate:o?kt(o):void 0}}var Wg=E.createContext(void 0);function vR(e){var n,r=e.initialProps,t=mR(),a=fR(r),s=a.fromDate,o=a.toDate,i=(n=r.captionLayout)!==null&&n!==void 0?n:t.captionLayout;i!=="buttons"&&(!s||!o)&&(i="buttons");var l;(Rs(r)||la(r)||da(r))&&(l=r.onSelect);var d=Q(Q(Q({},t),r),{captionLayout:i,classNames:Q(Q({},t.classNames),r.classNames),components:Q({},r.components),formatters:Q(Q({},t.formatters),r.formatters),fromDate:s,labels:Q(Q({},t.labels),r.labels),mode:r.mode||t.mode,modifiers:Q(Q({},t.modifiers),r.modifiers),modifiersClassNames:Q(Q({},t.modifiersClassNames),r.modifiersClassNames),onSelect:l,styles:Q(Q({},t.styles),r.styles),toDate:o});return y.jsx(Wg.Provider,{value:d,children:e.children})}function ue(){var e=E.useContext(Wg);if(!e)throw new Error("useDayPicker must be used within a DayPickerProvider.");return e}function $g(e){var n=ue(),r=n.locale,t=n.classNames,a=n.styles,s=n.formatters.formatCaption;return y.jsx("div",{className:t.caption_label,style:a.caption_label,"aria-live":"polite",role:"presentation",id:e.id,children:s(e.displayMonth,{locale:r})})}function cR(e){return y.jsx("svg",Q({width:"8px",height:"8px",viewBox:"0 0 120 120","data-testid":"iconDropdown"},e,{children:y.jsx("path",{d:"M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z",fill:"currentColor",fillRule:"nonzero"})}))}function Jg(e){var n,r,t=e.onChange,a=e.value,s=e.children,o=e.caption,i=e.className,l=e.style,d=ue(),u=(r=(n=d.components)===null||n===void 0?void 0:n.IconDropdown)!==null&&r!==void 0?r:cR;return y.jsxs("div",{className:i,style:l,children:[y.jsx("span",{className:d.classNames.vhidden,children:e["aria-label"]}),y.jsx("select",{name:e.name,"aria-label":e["aria-label"],className:d.classNames.dropdown,style:d.styles.dropdown,value:a,onChange:t,children:s}),y.jsxs("div",{className:d.classNames.caption_label,style:d.styles.caption_label,"aria-hidden":"true",children:[o,y.jsx(u,{className:d.classNames.dropdown_icon,style:d.styles.dropdown_icon})]})]})}function ER(e){var n,r=ue(),t=r.fromDate,a=r.toDate,s=r.styles,o=r.locale,i=r.formatters.formatMonthCaption,l=r.classNames,d=r.components,u=r.labels.labelMonthDropdown;if(!t)return y.jsx(y.Fragment,{});if(!a)return y.jsx(y.Fragment,{});var g=[];if(Pa(t,a))for(var k=Le(t),m=t.getMonth();m<=a.getMonth();m++)g.push(fr(k,m));else for(var k=Le(new Date),m=0;m<=11;m++)g.push(fr(k,m));var c=function(v){var h=Number(v.target.value),p=fr(Le(e.displayMonth),h);e.onChange(p)},f=(n=d==null?void 0:d.Dropdown)!==null&&n!==void 0?n:Jg;return y.jsx(f,{name:"months","aria-label":u(),className:l.dropdown_month,style:s.dropdown_month,onChange:c,value:e.displayMonth.getMonth(),caption:i(e.displayMonth,{locale:o}),children:g.map(function(v){return y.jsx("option",{value:v.getMonth(),children:i(v,{locale:o})},v.getMonth())})})}function pR(e){var n,r=e.displayMonth,t=ue(),a=t.fromDate,s=t.toDate,o=t.locale,i=t.styles,l=t.classNames,d=t.components,u=t.formatters.formatYearCaption,g=t.labels.labelYearDropdown,k=[];if(!a)return y.jsx(y.Fragment,{});if(!s)return y.jsx(y.Fragment,{});for(var m=a.getFullYear(),c=s.getFullYear(),f=m;f<=c;f++)k.push(Ct(Ja(new Date),f));var v=function(p){var R=Ct(Le(r),Number(p.target.value));e.onChange(R)},h=(n=d==null?void 0:d.Dropdown)!==null&&n!==void 0?n:Jg;return y.jsx(h,{name:"years","aria-label":g(),className:l.dropdown_year,style:i.dropdown_year,onChange:v,value:r.getFullYear(),caption:u(r,{locale:o}),children:k.map(function(p){return y.jsx("option",{value:p.getFullYear(),children:u(p,{locale:o})},p.getFullYear())})})}function yR(e,n){var r=E.useState(e),t=r[0],a=r[1],s=n===void 0?t:n;return[s,a]}function TR(e){var n=e.month,r=e.defaultMonth,t=e.today,a=n||r||t||new Date,s=e.toDate,o=e.fromDate,i=e.numberOfMonths,l=i===void 0?1:i;if(s&&Yt(s,a)<0){var d=-1*(l-1);a=vn(s,d)}return o&&Yt(a,o)<0&&(a=o),Le(a)}function hR(){var e=ue(),n=TR(e),r=yR(n,e.month),t=r[0],a=r[1],s=function(o){var i;if(!e.disableNavigation){var l=Le(o);a(l),(i=e.onMonthChange)===null||i===void 0||i.call(e,l)}};return[t,s]}function RR(e,n){for(var r=n.reverseMonths,t=n.numberOfMonths,a=Le(e),s=Le(vn(a,t)),o=Yt(s,a),i=[],l=0;l<o;l++){var d=vn(a,l);i.push(d)}return r&&(i=i.reverse()),i}function bR(e,n){if(!n.disableNavigation){var r=n.toDate,t=n.pagedNavigation,a=n.numberOfMonths,s=a===void 0?1:a,o=t?s:1,i=Le(e);if(!r)return vn(i,o);var l=Yt(r,e);if(!(l<s))return vn(i,o)}}function _R(e,n){if(!n.disableNavigation){var r=n.fromDate,t=n.pagedNavigation,a=n.numberOfMonths,s=a===void 0?1:a,o=t?s:1,i=Le(e);if(!r)return vn(i,-o);var l=Yt(i,r);if(!(l<=0))return vn(i,-o)}}var zg=E.createContext(void 0);function AR(e){var n=ue(),r=hR(),t=r[0],a=r[1],s=RR(t,n),o=bR(t,n),i=_R(t,n),l=function(g){return s.some(function(k){return bi(g,k)})},d=function(g,k){l(g)||(k&&Ti(g,k)?a(vn(g,1+n.numberOfMonths*-1)):a(g))},u={currentMonth:t,displayMonths:s,goToMonth:a,goToDate:d,previousMonth:i,nextMonth:o,isDateDisplayed:l};return y.jsx(zg.Provider,{value:u,children:e.children})}function Br(){var e=E.useContext(zg);if(!e)throw new Error("useNavigation must be used within a NavigationProvider");return e}function ud(e){var n,r=ue(),t=r.classNames,a=r.styles,s=r.components,o=Br().goToMonth,i=function(u){o(vn(u,e.displayIndex?-e.displayIndex:0))},l=(n=s==null?void 0:s.CaptionLabel)!==null&&n!==void 0?n:$g,d=y.jsx(l,{id:e.id,displayMonth:e.displayMonth});return y.jsxs("div",{className:t.caption_dropdowns,style:a.caption_dropdowns,children:[y.jsx("div",{className:t.vhidden,children:d}),y.jsx(ER,{onChange:i,displayMonth:e.displayMonth}),y.jsx(pR,{onChange:i,displayMonth:e.displayMonth})]})}function SR(e){return y.jsx("svg",Q({width:"16px",height:"16px",viewBox:"0 0 120 120"},e,{children:y.jsx("path",{d:"M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z",fill:"currentColor",fillRule:"nonzero"})}))}function NR(e){return y.jsx("svg",Q({width:"16px",height:"16px",viewBox:"0 0 120 120"},e,{children:y.jsx("path",{d:"M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z",fill:"currentColor"})}))}var ft=E.forwardRef(function(e,n){var r=ue(),t=r.classNames,a=r.styles,s=[t.button_reset,t.button];e.className&&s.push(e.className);var o=s.join(" "),i=Q(Q({},a.button_reset),a.button);return e.style&&Object.assign(i,e.style),y.jsx("button",Q({},e,{ref:n,type:"button",className:o,style:i}))});function DR(e){var n,r,t=ue(),a=t.dir,s=t.locale,o=t.classNames,i=t.styles,l=t.labels,d=l.labelPrevious,u=l.labelNext,g=t.components;if(!e.nextMonth&&!e.previousMonth)return y.jsx(y.Fragment,{});var k=d(e.previousMonth,{locale:s}),m=[o.nav_button,o.nav_button_previous].join(" "),c=u(e.nextMonth,{locale:s}),f=[o.nav_button,o.nav_button_next].join(" "),v=(n=g==null?void 0:g.IconRight)!==null&&n!==void 0?n:NR,h=(r=g==null?void 0:g.IconLeft)!==null&&r!==void 0?r:SR;return y.jsxs("div",{className:o.nav,style:i.nav,children:[!e.hidePrevious&&y.jsx(ft,{name:"previous-month","aria-label":k,className:m,style:i.nav_button_previous,disabled:!e.previousMonth,onClick:e.onPreviousClick,children:a==="rtl"?y.jsx(v,{className:o.nav_icon,style:i.nav_icon}):y.jsx(h,{className:o.nav_icon,style:i.nav_icon})}),!e.hideNext&&y.jsx(ft,{name:"next-month","aria-label":c,className:f,style:i.nav_button_next,disabled:!e.nextMonth,onClick:e.onNextClick,children:a==="rtl"?y.jsx(h,{className:o.nav_icon,style:i.nav_icon}):y.jsx(v,{className:o.nav_icon,style:i.nav_icon})})]})}function gd(e){var n=ue().numberOfMonths,r=Br(),t=r.previousMonth,a=r.nextMonth,s=r.goToMonth,o=r.displayMonths,i=o.findIndex(function(c){return bi(e.displayMonth,c)}),l=i===0,d=i===o.length-1,u=n>1&&(l||!d),g=n>1&&(d||!l),k=function(){t&&s(t)},m=function(){a&&s(a)};return y.jsx(DR,{displayMonth:e.displayMonth,hideNext:u,hidePrevious:g,nextMonth:a,previousMonth:t,onPreviousClick:k,onNextClick:m})}function OR(e){var n,r=ue(),t=r.classNames,a=r.disableNavigation,s=r.styles,o=r.captionLayout,i=r.components,l=(n=i==null?void 0:i.CaptionLabel)!==null&&n!==void 0?n:$g,d;return a?d=y.jsx(l,{id:e.id,displayMonth:e.displayMonth}):o==="dropdown"?d=y.jsx(ud,{displayMonth:e.displayMonth,id:e.id}):o==="dropdown-buttons"?d=y.jsxs(y.Fragment,{children:[y.jsx(ud,{displayMonth:e.displayMonth,displayIndex:e.displayIndex,id:e.id}),y.jsx(gd,{displayMonth:e.displayMonth,displayIndex:e.displayIndex,id:e.id})]}):d=y.jsxs(y.Fragment,{children:[y.jsx(l,{id:e.id,displayMonth:e.displayMonth,displayIndex:e.displayIndex}),y.jsx(gd,{displayMonth:e.displayMonth,id:e.id})]}),y.jsx("div",{className:t.caption,style:s.caption,children:d})}function IR(e){var n=ue(),r=n.footer,t=n.styles,a=n.classNames.tfoot;return r?y.jsx("tfoot",{className:a,style:t.tfoot,children:y.jsx("tr",{children:y.jsx("td",{colSpan:8,children:r})})}):y.jsx(y.Fragment,{})}function LR(e,n,r){for(var t=r?or(new Date):en(new Date,{locale:e,weekStartsOn:n}),a=[],s=0;s<7;s++){var o=Be(t,s);a.push(o)}return a}function Zg(){var e=ue(),n=e.classNames,r=e.styles,t=e.showWeekNumber,a=e.locale,s=e.weekStartsOn,o=e.ISOWeek,i=e.formatters.formatWeekdayName,l=e.labels.labelWeekday,d=LR(a,s,o);return y.jsxs("tr",{style:r.head_row,className:n.head_row,children:[t&&y.jsx("td",{style:r.head_cell,className:n.head_cell}),d.map(function(u,g){return y.jsx("th",{scope:"col",className:n.head_cell,style:r.head_cell,"aria-label":l(u,{locale:a}),children:i(u,{locale:a})},g)})]})}function PR(){var e,n=ue(),r=n.classNames,t=n.styles,a=n.components,s=(e=a==null?void 0:a.HeadRow)!==null&&e!==void 0?e:Zg;return y.jsx("thead",{style:t.head,className:r.head,children:y.jsx(s,{})})}function FR(e){var n=ue(),r=n.locale,t=n.formatters.formatDay;return y.jsx(y.Fragment,{children:t(e.date,{locale:r})})}var _i=E.createContext(void 0);function KR(e){if(!la(e.initialProps)){var n={selected:void 0,modifiers:{disabled:[]}};return y.jsx(_i.Provider,{value:n,children:e.children})}return y.jsx(wR,{initialProps:e.initialProps,children:e.children})}function wR(e){var n=e.initialProps,r=e.children,t=n.selected,a=n.min,s=n.max,o=function(d,u,g){var k,m;(k=n.onDayClick)===null||k===void 0||k.call(n,d,u,g);var c=!!(u.selected&&a&&(t==null?void 0:t.length)===a);if(!c){var f=!!(!u.selected&&s&&(t==null?void 0:t.length)===s);if(!f){var v=t?Cg([],t):[];if(u.selected){var h=v.findIndex(function(p){return sn(d,p)});v.splice(h,1)}else v.push(d);(m=n.onSelect)===null||m===void 0||m.call(n,v,d,u,g)}}},i={disabled:[]};t&&i.disabled.push(function(d){var u=s&&t.length>s-1,g=t.some(function(k){return sn(k,d)});return!!(u&&!g)});var l={selected:t,onDayClick:o,modifiers:i};return y.jsx(_i.Provider,{value:l,children:r})}function Ai(){var e=E.useContext(_i);if(!e)throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");return e}function MR(e,n){var r=n||{},t=r.from,a=r.to;return t&&a?sn(a,e)&&sn(t,e)?void 0:sn(a,e)?{from:a,to:void 0}:sn(t,e)?void 0:wo(t,e)?{from:e,to:a}:{from:t,to:e}:a?wo(e,a)?{from:a,to:e}:{from:e,to:a}:t?Ti(e,t)?{from:e,to:t}:{from:t,to:e}:{from:e,to:void 0}}var Si=E.createContext(void 0);function qR(e){if(!da(e.initialProps)){var n={selected:void 0,modifiers:{range_start:[],range_end:[],range_middle:[],disabled:[]}};return y.jsx(Si.Provider,{value:n,children:e.children})}return y.jsx(VR,{initialProps:e.initialProps,children:e.children})}function VR(e){var n=e.initialProps,r=e.children,t=n.selected,a=t||{},s=a.from,o=a.to,i=n.min,l=n.max,d=function(m,c,f){var v,h;(v=n.onDayClick)===null||v===void 0||v.call(n,m,c,f);var p=MR(m,t);(h=n.onSelect)===null||h===void 0||h.call(n,p,m,c,f)},u={range_start:[],range_end:[],range_middle:[],disabled:[]};if(s?(u.range_start=[s],o?(u.range_end=[o],sn(s,o)||(u.range_middle=[{after:s,before:o}])):u.range_end=[s]):o&&(u.range_start=[o],u.range_end=[o]),i&&(s&&!o&&u.disabled.push({after:Fa(s,i-1),before:Be(s,i-1)}),s&&o&&u.disabled.push({after:s,before:Be(s,i-1)}),!s&&o&&u.disabled.push({after:Fa(o,i-1),before:Be(o,i-1)})),l){if(s&&!o&&(u.disabled.push({before:Be(s,-l+1)}),u.disabled.push({after:Be(s,l-1)})),s&&o){var g=Qe(o,s)+1,k=l-g;u.disabled.push({before:Fa(s,k)}),u.disabled.push({after:Be(o,k)})}!s&&o&&(u.disabled.push({before:Be(o,-l+1)}),u.disabled.push({after:Be(o,l-1)}))}return y.jsx(Si.Provider,{value:{selected:t,onDayClick:d,modifiers:u},children:r})}function Ni(){var e=E.useContext(Si);if(!e)throw new Error("useSelectRange must be used within a SelectRangeProvider");return e}function Ka(e){return Array.isArray(e)?Cg([],e):e!==void 0?[e]:[]}function jR(e){var n={};return Object.entries(e).forEach(function(r){var t=r[0],a=r[1];n[t]=Ka(a)}),n}var Dn;(function(e){e.Outside="outside",e.Disabled="disabled",e.Selected="selected",e.Hidden="hidden",e.Today="today",e.RangeStart="range_start",e.RangeEnd="range_end",e.RangeMiddle="range_middle"})(Dn||(Dn={}));var BR=Dn.Selected,Zn=Dn.Disabled,xR=Dn.Hidden,GR=Dn.Today,Zs=Dn.RangeEnd,Xs=Dn.RangeMiddle,Qs=Dn.RangeStart,UR=Dn.Outside;function HR(e,n,r){var t,a=(t={},t[BR]=Ka(e.selected),t[Zn]=Ka(e.disabled),t[xR]=Ka(e.hidden),t[GR]=[e.today],t[Zs]=[],t[Xs]=[],t[Qs]=[],t[UR]=[],t);return e.fromDate&&a[Zn].push({before:e.fromDate}),e.toDate&&a[Zn].push({after:e.toDate}),la(e)?a[Zn]=a[Zn].concat(n.modifiers[Zn]):da(e)&&(a[Zn]=a[Zn].concat(r.modifiers[Zn]),a[Qs]=r.modifiers[Qs],a[Xs]=r.modifiers[Xs],a[Zs]=r.modifiers[Zs]),a}var Xg=E.createContext(void 0);function YR(e){var n=ue(),r=Ai(),t=Ni(),a=HR(n,r,t),s=jR(n.modifiers),o=Q(Q({},a),s);return y.jsx(Xg.Provider,{value:o,children:e.children})}function Qg(){var e=E.useContext(Xg);if(!e)throw new Error("useModifiers must be used within a ModifiersProvider");return e}function CR(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function WR(e){return!!(e&&typeof e=="object"&&"from"in e)}function $R(e){return!!(e&&typeof e=="object"&&"after"in e)}function JR(e){return!!(e&&typeof e=="object"&&"before"in e)}function zR(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function ZR(e,n){var r,t=n.from,a=n.to;if(t&&a){var s=Qe(a,t)<0;s&&(r=[a,t],t=r[0],a=r[1]);var o=Qe(e,t)>=0&&Qe(a,e)>=0;return o}return a?sn(a,e):t?sn(t,e):!1}function XR(e){return Ei(e)}function QR(e){return Array.isArray(e)&&e.every(Ei)}function Wt(e,n){return n.some(function(r){if(typeof r=="boolean")return r;if(XR(r))return sn(e,r);if(QR(r))return r.includes(e);if(WR(r))return ZR(e,r);if(zR(r))return r.dayOfWeek.includes(e.getDay());if(CR(r)){var t=Qe(r.before,e),a=Qe(r.after,e),s=t>0,o=a<0,i=wo(r.before,r.after);return i?o&&s:s||o}return $R(r)?Qe(e,r.after)>0:JR(r)?Qe(r.before,e)>0:typeof r=="function"?r(e):!1})}function Di(e,n,r){var t=Object.keys(n).reduce(function(s,o){var i=n[o];return Wt(e,i)&&s.push(o),s},[]),a={};return t.forEach(function(s){return a[s]=!0}),r&&!bi(e,r)&&(a.outside=!0),a}function eb(e,n){for(var r=Le(e[0]),t=ys(e[e.length-1]),a,s,o=r;o<=t;){var i=Di(o,n),l=!i.disabled&&!i.hidden;if(!l){o=Be(o,1);continue}if(i.selected)return o;i.today&&!s&&(s=o),a||(a=o),o=Be(o,1)}return s||a}var nb=365;function ek(e,n){var r=n.moveBy,t=n.direction,a=n.context,s=n.modifiers,o=n.retry,i=o===void 0?{count:0,lastFocused:e}:o,l=a.weekStartsOn,d=a.fromDate,u=a.toDate,g=a.locale,k={day:Be,week:Ht,month:vn,year:KT,startOfWeek:function(v){return a.ISOWeek?or(v):en(v,{locale:g,weekStartsOn:l})},endOfWeek:function(v){return a.ISOWeek?Mg(v):Ts(v,{locale:g,weekStartsOn:l})}},m=k[r](e,t==="after"?1:-1);t==="before"&&d?m=Kg([d,m]):t==="after"&&u&&(m=wg([u,m]));var c=!0;if(s){var f=Di(m,s);c=!f.disabled&&!f.hidden}return c?m:i.count>nb?i.lastFocused:ek(m,{moveBy:r,direction:t,context:a,modifiers:s,retry:Q(Q({},i),{count:i.count+1})})}var nk=E.createContext(void 0);function rb(e){var n=Br(),r=Qg(),t=E.useState(),a=t[0],s=t[1],o=E.useState(),i=o[0],l=o[1],d=eb(n.displayMonths,r),u=a??(i&&n.isDateDisplayed(i))?i:d,g=function(){l(a),s(void 0)},k=function(v){s(v)},m=ue(),c=function(v,h){if(a){var p=ek(a,{moveBy:v,direction:h,context:m,modifiers:r});sn(a,p)||(n.goToDate(p,a),k(p))}},f={focusedDay:a,focusTarget:u,blur:g,focus:k,focusDayAfter:function(){return c("day","after")},focusDayBefore:function(){return c("day","before")},focusWeekAfter:function(){return c("week","after")},focusWeekBefore:function(){return c("week","before")},focusMonthBefore:function(){return c("month","before")},focusMonthAfter:function(){return c("month","after")},focusYearBefore:function(){return c("year","before")},focusYearAfter:function(){return c("year","after")},focusStartOfWeek:function(){return c("startOfWeek","before")},focusEndOfWeek:function(){return c("endOfWeek","after")}};return y.jsx(nk.Provider,{value:f,children:e.children})}function Oi(){var e=E.useContext(nk);if(!e)throw new Error("useFocusContext must be used within a FocusProvider");return e}function tb(e,n){var r=Qg(),t=Di(e,r,n);return t}var Ii=E.createContext(void 0);function ab(e){if(!Rs(e.initialProps)){var n={selected:void 0};return y.jsx(Ii.Provider,{value:n,children:e.children})}return y.jsx(sb,{initialProps:e.initialProps,children:e.children})}function sb(e){var n=e.initialProps,r=e.children,t=function(s,o,i){var l,d,u;if((l=n.onDayClick)===null||l===void 0||l.call(n,s,o,i),o.selected&&!n.required){(d=n.onSelect)===null||d===void 0||d.call(n,void 0,s,o,i);return}(u=n.onSelect)===null||u===void 0||u.call(n,s,s,o,i)},a={selected:n.selected,onDayClick:t};return y.jsx(Ii.Provider,{value:a,children:r})}function rk(){var e=E.useContext(Ii);if(!e)throw new Error("useSelectSingle must be used within a SelectSingleProvider");return e}function ob(e,n){var r=ue(),t=rk(),a=Ai(),s=Ni(),o=Oi(),i=o.focusDayAfter,l=o.focusDayBefore,d=o.focusWeekAfter,u=o.focusWeekBefore,g=o.blur,k=o.focus,m=o.focusMonthBefore,c=o.focusMonthAfter,f=o.focusYearBefore,v=o.focusYearAfter,h=o.focusStartOfWeek,p=o.focusEndOfWeek,R=function(M){var P,te,ie,he;Rs(r)?(P=t.onDayClick)===null||P===void 0||P.call(t,e,n,M):la(r)?(te=a.onDayClick)===null||te===void 0||te.call(a,e,n,M):da(r)?(ie=s.onDayClick)===null||ie===void 0||ie.call(s,e,n,M):(he=r.onDayClick)===null||he===void 0||he.call(r,e,n,M)},S=function(M){var P;k(e),(P=r.onDayFocus)===null||P===void 0||P.call(r,e,n,M)},_=function(M){var P;g(),(P=r.onDayBlur)===null||P===void 0||P.call(r,e,n,M)},O=function(M){var P;(P=r.onDayMouseEnter)===null||P===void 0||P.call(r,e,n,M)},A=function(M){var P;(P=r.onDayMouseLeave)===null||P===void 0||P.call(r,e,n,M)},D=function(M){var P;(P=r.onDayPointerEnter)===null||P===void 0||P.call(r,e,n,M)},K=function(M){var P;(P=r.onDayPointerLeave)===null||P===void 0||P.call(r,e,n,M)},q=function(M){var P;(P=r.onDayTouchCancel)===null||P===void 0||P.call(r,e,n,M)},B=function(M){var P;(P=r.onDayTouchEnd)===null||P===void 0||P.call(r,e,n,M)},L=function(M){var P;(P=r.onDayTouchMove)===null||P===void 0||P.call(r,e,n,M)},I=function(M){var P;(P=r.onDayTouchStart)===null||P===void 0||P.call(r,e,n,M)},V=function(M){var P;(P=r.onDayKeyUp)===null||P===void 0||P.call(r,e,n,M)},H=function(M){var P;switch(M.key){case"ArrowLeft":M.preventDefault(),M.stopPropagation(),r.dir==="rtl"?i():l();break;case"ArrowRight":M.preventDefault(),M.stopPropagation(),r.dir==="rtl"?l():i();break;case"ArrowDown":M.preventDefault(),M.stopPropagation(),d();break;case"ArrowUp":M.preventDefault(),M.stopPropagation(),u();break;case"PageUp":M.preventDefault(),M.stopPropagation(),M.shiftKey?f():m();break;case"PageDown":M.preventDefault(),M.stopPropagation(),M.shiftKey?v():c();break;case"Home":M.preventDefault(),M.stopPropagation(),h();break;case"End":M.preventDefault(),M.stopPropagation(),p();break}(P=r.onDayKeyDown)===null||P===void 0||P.call(r,e,n,M)},C={onClick:R,onFocus:S,onBlur:_,onKeyDown:H,onKeyUp:V,onMouseEnter:O,onMouseLeave:A,onPointerEnter:D,onPointerLeave:K,onTouchCancel:q,onTouchEnd:B,onTouchMove:L,onTouchStart:I};return C}function ib(){var e=ue(),n=rk(),r=Ai(),t=Ni(),a=Rs(e)?n.selected:la(e)?r.selected:da(e)?t.selected:void 0;return a}function lb(e){return Object.values(Dn).includes(e)}function db(e,n){var r=[e.classNames.day];return Object.keys(n).forEach(function(t){var a=e.modifiersClassNames[t];if(a)r.push(a);else if(lb(t)){var s=e.classNames["day_".concat(t)];s&&r.push(s)}}),r}function ub(e,n){var r=Q({},e.styles.day);return Object.keys(n).forEach(function(t){var a;r=Q(Q({},r),(a=e.modifiersStyles)===null||a===void 0?void 0:a[t])}),r}function tk(e,n,r){var t,a,s,o=ue(),i=Oi(),l=tb(e,n),d=ob(e,l),u=ib(),g=!!(o.onDayClick||o.mode!=="default");E.useEffect(function(){var O;l.outside||i.focusedDay&&g&&sn(i.focusedDay,e)&&((O=r.current)===null||O===void 0||O.focus())},[i.focusedDay,e,r,g,l.outside]);var k=db(o,l).join(" "),m=ub(o,l),c=!!(l.outside&&!o.showOutsideDays||l.hidden),f=(s=(a=o.components)===null||a===void 0?void 0:a.DayContent)!==null&&s!==void 0?s:FR,v=y.jsx(f,{date:e,displayMonth:n,activeModifiers:l}),h={style:m,className:k,children:v,role:"gridcell"},p=i.focusTarget&&sn(i.focusTarget,e)&&!l.outside,R=i.focusedDay&&sn(i.focusedDay,e),S=Q(Q(Q({},h),(t={disabled:l.disabled,role:"gridcell"},t["aria-selected"]=l.selected,t.tabIndex=R||p?0:-1,t)),d),_={isButton:g,isHidden:c,activeModifiers:l,selectedDays:u,buttonProps:S,divProps:h};return _}function gb(e){var n=E.useRef(null),r=tk(e.date,e.displayMonth,n);return r.isHidden?y.jsx("div",{role:"gridcell"}):r.isButton?y.jsx(ft,Q({name:"day",ref:n},r.buttonProps)):y.jsx("div",Q({},r.divProps))}function kb(e){var n=e.number,r=e.dates,t=ue(),a=t.onWeekNumberClick,s=t.styles,o=t.classNames,i=t.locale,l=t.labels.labelWeekNumber,d=t.formatters.formatWeekNumber,u=d(Number(n),{locale:i});if(!a)return y.jsx("span",{className:o.weeknumber,style:s.weeknumber,children:u});var g=l(Number(n),{locale:i}),k=function(m){a(n,r,m)};return y.jsx(ft,{name:"week-number","aria-label":g,className:o.weeknumber,style:s.weeknumber,onClick:k,children:u})}function mb(e){var n,r,t=ue(),a=t.styles,s=t.classNames,o=t.showWeekNumber,i=t.components,l=(n=i==null?void 0:i.Day)!==null&&n!==void 0?n:gb,d=(r=i==null?void 0:i.WeekNumber)!==null&&r!==void 0?r:kb,u;return o&&(u=y.jsx("td",{className:s.cell,style:a.cell,children:y.jsx(d,{number:e.weekNumber,dates:e.dates})})),y.jsxs("tr",{className:s.row,style:a.row,children:[u,e.dates.map(function(g){return y.jsx("td",{className:s.cell,style:a.cell,role:"presentation",children:y.jsx(l,{displayMonth:e.displayMonth,date:g})},Bg(g))})]})}function kd(e,n,r){for(var t=r!=null&&r.ISOWeek?Mg(n):Ts(n,r),a=r!=null&&r.ISOWeek?or(e):en(e,r),s=Qe(t,a),o=[],i=0;i<=s;i++)o.push(Be(a,i));var l=o.reduce(function(d,u){var g=r!=null&&r.ISOWeek?pi(u):hs(u,r),k=d.find(function(m){return m.weekNumber===g});return k?(k.dates.push(u),d):(d.push({weekNumber:g,dates:[u]}),d)},[]);return l}function fb(e,n){var r=kd(Le(e),ys(e),n);if(n!=null&&n.useFixedWeeks){var t=xg(e,n);if(t<6){var a=r[r.length-1],s=a.dates[a.dates.length-1],o=Ht(s,6-t),i=kd(Ht(s,1),o,n);r.push.apply(r,i)}}return r}function vb(e){var n,r,t,a=ue(),s=a.locale,o=a.classNames,i=a.styles,l=a.hideHead,d=a.fixedWeeks,u=a.components,g=a.weekStartsOn,k=a.firstWeekContainsDate,m=a.ISOWeek,c=fb(e.displayMonth,{useFixedWeeks:!!d,ISOWeek:m,locale:s,weekStartsOn:g,firstWeekContainsDate:k}),f=(n=u==null?void 0:u.Head)!==null&&n!==void 0?n:PR,v=(r=u==null?void 0:u.Row)!==null&&r!==void 0?r:mb,h=(t=u==null?void 0:u.Footer)!==null&&t!==void 0?t:IR;return y.jsxs("table",{id:e.id,className:o.table,style:i.table,role:"grid","aria-labelledby":e["aria-labelledby"],children:[!l&&y.jsx(f,{}),y.jsx("tbody",{className:o.tbody,style:i.tbody,children:c.map(function(p){return y.jsx(v,{displayMonth:e.displayMonth,dates:p.dates,weekNumber:p.weekNumber},p.weekNumber)})}),y.jsx(h,{displayMonth:e.displayMonth})]})}function cb(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var Eb=cb()?E.useLayoutEffect:E.useEffect,eo=!1,pb=0;function md(){return"react-day-picker-".concat(++pb)}function yb(e){var n,r=e??(eo?md():null),t=E.useState(r),a=t[0],s=t[1];return Eb(function(){a===null&&s(md())},[]),E.useEffect(function(){eo===!1&&(eo=!0)},[]),(n=e??a)!==null&&n!==void 0?n:void 0}function Tb(e){var n,r,t=ue(),a=t.dir,s=t.classNames,o=t.styles,i=t.components,l=Br().displayMonths,d=yb(t.id?"".concat(t.id,"-").concat(e.displayIndex):void 0),u=t.id?"".concat(t.id,"-grid-").concat(e.displayIndex):void 0,g=[s.month],k=o.month,m=e.displayIndex===0,c=e.displayIndex===l.length-1,f=!m&&!c;a==="rtl"&&(n=[m,c],c=n[0],m=n[1]),m&&(g.push(s.caption_start),k=Q(Q({},k),o.caption_start)),c&&(g.push(s.caption_end),k=Q(Q({},k),o.caption_end)),f&&(g.push(s.caption_between),k=Q(Q({},k),o.caption_between));var v=(r=i==null?void 0:i.Caption)!==null&&r!==void 0?r:OR;return y.jsxs("div",{className:g.join(" "),style:k,children:[y.jsx(v,{id:d,displayMonth:e.displayMonth,displayIndex:e.displayIndex}),y.jsx(vb,{id:u,"aria-labelledby":d,displayMonth:e.displayMonth})]},e.displayIndex)}function hb(e){var n=ue(),r=n.classNames,t=n.styles;return y.jsx("div",{className:r.months,style:t.months,children:e.children})}function Rb(e){var n,r,t=e.initialProps,a=ue(),s=Oi(),o=Br(),i=E.useState(!1),l=i[0],d=i[1];E.useEffect(function(){a.initialFocus&&s.focusTarget&&(l||(s.focus(s.focusTarget),d(!0)))},[a.initialFocus,l,s.focus,s.focusTarget,s]);var u=[a.classNames.root,a.className];a.numberOfMonths>1&&u.push(a.classNames.multiple_months),a.showWeekNumber&&u.push(a.classNames.with_weeknumber);var g=Q(Q({},a.styles.root),a.style),k=Object.keys(t).filter(function(c){return c.startsWith("data-")}).reduce(function(c,f){var v;return Q(Q({},c),(v={},v[f]=t[f],v))},{}),m=(r=(n=t.components)===null||n===void 0?void 0:n.Months)!==null&&r!==void 0?r:hb;return y.jsx("div",Q({className:u.join(" "),style:g,dir:a.dir,id:a.id,nonce:t.nonce,title:t.title,lang:t.lang},k,{children:y.jsx(m,{children:o.displayMonths.map(function(c,f){return y.jsx(Tb,{displayIndex:f,displayMonth:c},f)})})}))}function bb(e){var n=e.children,r=zh(e,["children"]);return y.jsx(vR,{initialProps:r,children:y.jsx(AR,{children:y.jsx(ab,{initialProps:r,children:y.jsx(KR,{initialProps:r,children:y.jsx(qR,{initialProps:r,children:y.jsx(YR,{children:y.jsx(rb,{children:n})})})})})})})}function ak(e){return y.jsx(bb,Q({},e,{children:y.jsx(Rb,{initialProps:e})}))}const bs=E.createContext(null),_b=()=>{const e=E.useContext(bs);return e||console.warn("useDateInputContext must be used with DateInputContext"),e};function bn(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}const sk="dd.MM.yyyy",Ab="MMMM yyyy",ok=[sk,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...ok];const no=(e,n,r,t,a)=>{let s;const o=ok;if(a){for(const i of o)if(s=et(e,i,n,{locale:r}),bn(s)&&!ro(e,n,r,o))return s;for(const i of[...o.map(l=>l.replace("yyyy","yy"))])if(s=et(e,i,n,{locale:r}),bn(s)&&ro(e,n,r,o)){const l=Sb(e,i,n,r);return bn(new Date(l))?new Date(l):new Date("Invalid date")}return new Date("Invalid date")}for(const i of o)if(s=et(e,i,n,{locale:r}),bn(s)&&!ro(e,n,r,o))return s;return new Date("Invalid date")};function ro(e,n,r,t){let a;const s=t.map(o=>o.replace("yyyy","yy"));for(const o of s)if(a=et(e,o,n,{locale:r}),bn(a))return!0;return!1}function Sb(e,n,r,t){const a=et(fd(e,"19"),n.replace("yy","yyyy"),r,{locale:t}),s=et(fd(e,"20"),n.replace("yy","yyyy"),r,{locale:t});return bn(a)&&bn(s)?Ti(a,Jh(new Date,{years:80}))?s:a:new Date("Invalid date")}function fd(e,n){const r=e.slice(-2);return`${e.slice(0,e.length-2)}${n}${r}`}const Lt=(e,n,r,t)=>lr(e,t??sk,{locale:n}),Nb=(e,n,r)=>{const t=[];if(Pa(e,n)){const a=Le(e);for(let s=e.getMonth();s<=n.getMonth();s++)t.push(fr(a,s))}else if(Pa(r,n)){const a=Le(new Date);for(let s=0;s<=n.getMonth();s++)t.push(fr(a,s))}else if(Pa(r,e)){const a=Le(e);for(let s=a.getMonth();s<=11;s++)t.push(fr(a,s))}else{const a=Le(new Date);for(let s=0;s<=11;s++)t.push(fr(a,s))}return t.map(a=>a.getMonth()).includes(r.getMonth())||t.push(r),t.sort((a,s)=>a.getMonth()-s.getMonth()),t},Db=(e,n,r)=>{const t=[],a=e.getFullYear(),s=n.getFullYear();for(let o=a;o<=s;o++)t.push(Ct(Ja(new Date),o));return(a>r||s<r)&&t.push(Ct(Ja(new Date),r)),t.sort((o,i)=>o.getFullYear()-i.getFullYear()),t},ik={global:{dateLocale:Eg,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},Alert:{closeAlert:"Close alert",closeMessage:"Close message",error:"Error",info:"Information",success:"Success",warning:"Warning"},Chips:{Removable:{labelSuffix:"delete"}},Combobox:{addOption:"Add",loading:"Searching…",maxSelected:"{selected} of max {limit} are selected."},CopyButton:{title:"Copy",activeText:"Copied!"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"},ErrorSummary:{heading:"You must correct the following errors before you can continue:"},FileUpload:{dropzone:{button:"Choose file",buttonMultiple:"Choose files",dragAndDrop:"Drag and drop file here",dragAndDropMultiple:"Drag and drop files here",drop:"Drop",or:"or",disabled:"File upload disabled",disabledFilelimit:"You cannot upload more files"},item:{retryButtonTitle:"Try uploading the file again",deleteButtonTitle:"Delete file",uploading:"Uploading…",downloading:"Downloading…"}},FormProgress:{step:"Step {activeStep} of {totalSteps}",showAllSteps:"Show all steps",hideAllSteps:"Hide all steps"},FormSummary:{editAnswer:"Edit answer"},GuidePanel:{illustrationLabel:"Illustration of advisor"},HelpText:{title:"More information"},Loader:{title:"Waiting…"},Pagination:{previous:"Previous",next:"Next"},ProgressBar:{progress:"{current} of {max}",progressUnknown:"Progress is unknown, estimated time is {seconds} seconds."},Search:{clear:"Clear field",search:"Search"},Textarea:{maxLength:"Text area with a {maxLength} character limit.",charsTooMany:"{chars} characters too many",charsLeft:"{chars} characters left"},Timeline:{dateFormat:"yyyy-MM-dd",dayFormat:"d MMM",monthFormat:"MMM yyyy",yearFormat:"yyyy",Row:{noPeriods:"No periods",period:"{start} to {end}"},Period:{success:"Success",warning:"Warning",danger:"Danger",info:"Info",neutral:"Neutral",period:"{status} from {start} to {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom timeline {start} to {end}",reset:"Reset zoom"}}},lk={global:{dateLocale:yg,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Åtvaring"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"},ErrorSummary:{heading:"Du må rette desse feila før du kan halde fram:"},FileUpload:{dropzone:{button:"Vel fil",buttonMultiple:"Vel filer",dragAndDrop:"Dra og slepp fila her",dragAndDropMultiple:"Dra og slepp filer her",drop:"Slepp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikkje laste opp fleire filer"},item:{retryButtonTitle:"Prøv å laste opp fila på nytt",deleteButtonTitle:"Slett fila",uploading:"Lastar opp…",downloading:"Lastar ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av rettleiar"},HelpText:{title:"Meir informasjon"},Loader:{title:"Ventar…"},Pagination:{previous:"Førre",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Framdrift kan ikkje bereknast, antatt tid er {seconds} sekund."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} teikn.",charsTooMany:"{chars} teikn for mykje",charsLeft:"{chars} teikn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen periodar",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Åtvaring",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} frå {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslina {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},Li=(e="nb")=>{switch(e){case"nn":return yg;case"en":return Eg;default:return pg}},dk=e=>{switch(e){case"nn":return lk.DatePicker;case"en":case"en-GB":return ik.DatePicker;default:return}},Ob=e=>{switch(e){case"nn":return lk.global;case"en":case"en-GB":return ik.global;default:return}};E.createContext({hasDropdown:!1,year:new Date,toYear:()=>null,disabled:[],onSelect:()=>null});const[uk,ua]=ks(),Pi=()=>T.createElement(gg,{"aria-hidden":!0,className:"navds-form-field__readonly-icon"}),gk=()=>T.createElement(gg,{title:br("global")("readOnly"),className:"navds-form-field__readonly-icon"}),Za=E.createContext(null),ga=(e,n)=>{var r,t,a;const{size:s,error:o,errorId:i}=e,l=E.useContext(Za),d=sr(),u=(r=e.id)!==null&&r!==void 0?r:`${n}-${d}`,g=i??`${n}-error-${d}`,k=`${n}-description-${d}`,m=(l==null?void 0:l.disabled)||e.disabled,c=((l==null?void 0:l.readOnly)||e.readOnly)&&!m||void 0,f=!m&&!c&&!!(o||l!=null&&l.error),v=!m&&!c&&!!o&&typeof o!="boolean",h=Object.assign({},f?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:v,hasError:f,errorId:g,inputDescriptionId:k,size:(t=s??(l==null?void 0:l.size))!==null&&t!==void 0?t:"medium",readOnly:c,inputProps:Object.assign(Object.assign({id:u},h),{"aria-describedby":X(e["aria-describedby"],{[k]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[g]:v,[(a=l==null?void 0:l.errorId)!==null&&a!==void 0?a:""]:f&&!!(l!=null&&l.error)})||void 0,disabled:m})}};var Ib=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const kk=E.forwardRef((e,n)=>{const{className:r,hideLabel:t=!1,label:a,description:s,variant:o="datepicker",setAnchorRef:i}=e,l=Ib(e,["className","hideLabel","label","description","variant","setAnchorRef"]),d=E.useRef(null),u=ua().translate,g=o==="datepicker",k={prefix:g?"datepicker-input":"monthpicker-input",iconTitle:{open:g?"openDatePicker":"openMonthPicker",close:g?"closeDatePicker":"closeMonthPicker"}},m=_b(),{inputProps:c,size:f="medium",inputDescriptionId:v,errorId:h,showErrorMsg:p,hasError:R,readOnly:S}=ga(e,k.prefix);return T.createElement("div",{className:X(r,"navds-form-field",`navds-form-field--${f}`,"navds-date__field",{"navds-text-field--error":R,"navds-date__field--error":R,"navds-form-field--disabled":!!c.disabled,"navds-text-field--disabled":!!c.disabled,"navds-form-field--readonly":S,"navds-text-field--readonly":S,"navds-date__field--readonly":S})},T.createElement(on,{htmlFor:c.id,size:f,className:X("navds-form-field__label",{"navds-sr-only":t})},S&&T.createElement(Pi,null),a),!!s&&T.createElement(Ie,{as:"div",className:X("navds-form-field__description",{"navds-sr-only":t}),id:v,size:f},s),T.createElement("div",{className:"navds-date__field-wrapper"},T.createElement("input",Object.assign({ref:n},dn(l,["error","errorId","size"]),c,{autoComplete:"off","aria-controls":m!=null&&m.open?m.ariaId:void 0,readOnly:S,className:X("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${f}`),size:g?11:14})),T.createElement("button",{disabled:c.disabled||S,tabIndex:S||m!=null&&m.open?-1:0,onClick:()=>{m==null||m.onOpen(),i==null||i(d.current)},type:"button",className:"navds-date__field-button",ref:d},T.createElement(yE,{title:u(k.iconTitle[m!=null&&m.open?"close":"open"])}))),T.createElement("div",{className:"navds-form-field__error",id:h,"aria-relevant":"additions removals","aria-live":"polite"},p&&T.createElement(fs,{size:f,showIcon:!0},e.error)))}),Lb=E.forwardRef((e,n)=>T.createElement(kk,Object.assign({},e,{ref:n})));E.forwardRef((e,n)=>T.createElement(kk,Object.assign({},e,{variant:"monthpicker",ref:n})));function Pb(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function Mt(e){return e instanceof Element||e instanceof Pb(e).Element}var Xa=typeof document<"u"?E.useLayoutEffect:E.useEffect;let to=!1,Fb=0;const vd=()=>"floating-ui-"+Fb++;function Kb(){const[e,n]=E.useState(()=>to?vd():void 0);return Xa(()=>{e==null&&n(vd())},[]),E.useEffect(()=>{to||(to=!0)},[]),e}const wb=gu.useId,mk=wb||Kb;function Mb(){const e=new Map;return{emit(n,r){var t;(t=e.get(n))==null||t.forEach(a=>a(r))},on(n,r){e.set(n,[...e.get(n)||[],r])},off(n,r){var t;e.set(n,((t=e.get(n))==null?void 0:t.filter(a=>a!==r))||[])}}}const qb=E.createContext(null),Vb=()=>E.useContext(qb);function jb(e){return"data-floating-ui-"+e}const Bb=E.createContext(null);function xb(e){let{id:n,root:r}=e===void 0?{}:e;const[t,a]=E.useState(null),s=mk(),o=Gb(),i=E.useMemo(()=>({id:n,root:r,portalContext:o,uniqueId:s}),[n,r,o,s]),l=E.useRef();return Xa(()=>()=>{t==null||t.remove()},[t,i]),Xa(()=>{if(l.current===i)return;l.current=i;const{id:d,root:u,portalContext:g,uniqueId:k}=i,m=d?document.getElementById(d):null,c=jb("portal");if(m){const f=document.createElement("div");f.id=k,f.setAttribute(c,""),m.appendChild(f),a(f)}else{let f=u||(g==null?void 0:g.portalNode);f&&!Mt(f)&&(f=f.current),f=f||document.body;let v=null;d&&(v=document.createElement("div"),v.id=d,f.appendChild(v));const h=document.createElement("div");h.id=k,h.setAttribute(c,""),f=v||f,f.appendChild(h),a(h)}},[i]),t}const Gb=()=>E.useContext(Bb),Ub=gu.useInsertionEffect,Hb=Ub||(e=>e());function Yb(e){const n=E.useRef(()=>{});return Hb(()=>{n.current=e}),E.useCallback(function(){for(var r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];return n.current==null?void 0:n.current(...t)},[])}function Cb(e){var n;e===void 0&&(e={});const{open:r=!1,onOpenChange:t,nodeId:a}=e,[s,o]=E.useState(null),i=((n=e.elements)==null?void 0:n.reference)||s,l=fT(e),d=Vb(),u=Yb((S,_)=>{S&&(k.current.openEvent=_),t==null||t(S,_)}),g=E.useRef(null),k=E.useRef({}),m=E.useState(()=>Mb())[0],c=mk(),f=E.useCallback(S=>{const _=Mt(S)?{getBoundingClientRect:()=>S.getBoundingClientRect(),contextElement:S}:S;l.refs.setReference(_)},[l.refs]),v=E.useCallback(S=>{(Mt(S)||S===null)&&(g.current=S,o(S)),(Mt(l.refs.reference.current)||l.refs.reference.current===null||S!==null&&!Mt(S))&&l.refs.setReference(S)},[l.refs]),h=E.useMemo(()=>({...l.refs,setReference:v,setPositionReference:f,domReference:g}),[l.refs,v,f]),p=E.useMemo(()=>({...l.elements,domReference:i}),[l.elements,i]),R=E.useMemo(()=>({...l,refs:h,elements:p,dataRef:k,nodeId:a,floatingId:c,events:m,open:r,onOpenChange:u}),[l,a,c,m,r,u,h,p]);return Xa(()=>{const S=d==null?void 0:d.nodesRef.current.find(_=>_.id===a);S&&(S.context=R)}),E.useMemo(()=>({...l,context:R,refs:h,elements:p}),[l,h,p,R])}var Wb=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const $b=E.forwardRef((e,n)=>{var{className:r}=e,t=Wb(e,["className"]);return T.createElement("div",Object.assign({},t,{ref:n,className:X("navds-modal__body",r)}))});var Jb=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const zb=E.forwardRef((e,n)=>{var{className:r}=e,t=Jb(e,["className"]);return T.createElement("div",Object.assign({},t,{ref:n,className:X("navds-modal__footer",r)}))});var Zb=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const fk=E.forwardRef((e,n)=>{var{children:r,className:t,closeButton:a=!0}=e,s=Zb(e,["children","className","closeButton"]);const o=vs(),i=br("global");return T.createElement("div",Object.assign({},s,{ref:n,className:X("navds-modal__header",t)}),o.closeHandler&&a&&T.createElement(Nn,{type:"button",className:"navds-modal__button",size:"small",variant:"tertiary-neutral",onKeyDown:l=>{["Enter"," "].includes(l.key)&&l.repeat&&l.preventDefault()},onClick:o.closeHandler,icon:T.createElement(kg,{title:i("close")})}),r)}),cd=({clientX:e,clientY:n},{left:r,top:t,right:a,bottom:s})=>!(e<r||n<t||e>a||n>s);function Xb(e,n,r){if(!(n&&n.closeButton===!1))return r?()=>{var t;return r()!==!1&&((t=e.current)===null||t===void 0?void 0:t.close())}:()=>{var t;return(t=e.current)===null||t===void 0?void 0:t.close()}}const _a="navds-modal__document-body";function Qb(e,n,r){T.useEffect(()=>{if(r||!e.current||!n)return;e.current.open&&document.body.classList.add(_a);const t=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(_a):document.body.classList.remove(_a)});return t.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{t.disconnect(),document.body.classList.remove(_a)}},[e,n,r])}const Zr=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function vk(e,n){var r="on"+n.type.toLowerCase();return typeof e[r]=="function"&&e[r](n),e.dispatchEvent(n)}function Bt(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function ck(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function e_(e,n){for(var r=0;r<e.length;++r)if(e[r]===n)return!0;return!1}function ao(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Ek(e){var n=["button","input","keygen","select","textarea"],r=n.map(function(o){return o+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var t=e.querySelector(r.join(", "));if(!t&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),s=0;s<a.length&&!(a[s].tagName&&a[s].shadowRoot&&(t=Ek(a[s].shadowRoot),t));s++);return t}function Ed(e){return e.isConnected||document.body.contains(e)}function pk(e){if(e.submitter)return e.submitter;var n=e.target;if(!(n instanceof HTMLFormElement))return null;var r=ke.formSubmitter;if(!r){var t=e.target,a="getRootNode"in t&&t.getRootNode()||document;r=a.activeElement}return!r||r.form!==n?null:r}function n_(e){if(!e.defaultPrevented){var n=e.target,r=ke.imagemapUseValue,t=pk(e);r===null&&t&&(r=t.value);var a=Bt(n);if(a){var s=t&&t.getAttribute("formmethod")||n.getAttribute("method");s==="dialog"&&(e.preventDefault(),r!=null?a.close(r):a.close())}}}function yk(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",n_,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var n=new MutationObserver(this.maybeHideModal.bind(this));n.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,t=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),a,s=function(o){if(o.target===e){var i="DOMNodeRemoved";r|=o.type.substr(0,i.length)===i,window.clearTimeout(a),a=window.setTimeout(t,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(o){e.addEventListener(o,s)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}yk.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Ed(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),ke.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var n=document.createElement("div");this.dialog_.insertBefore(n,this.dialog_.firstChild),n.tabIndex=-1,n.focus(),this.dialog_.removeChild(n)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Ek(this.dialog_)),ck(document.activeElement),e&&e.focus()},updateZIndex:function(e,n){if(e<n)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=n},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Ed(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!ke.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,ke.needsCentering(this.dialog_)?(ke.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var n=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});vk(this.dialog_,n)}};var ke={};ke.reposition=function(e){var n=document.body.scrollTop||document.documentElement.scrollTop,r=n+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(n,r)+"px"};ke.isInlinePositionSetByStylesheet=function(e){for(var n=0;n<document.styleSheets.length;++n){var r=document.styleSheets[n],t=null;try{t=r.cssRules}catch{}if(t)for(var a=0;a<t.length;++a){var s=t[a],o=null;try{o=document.querySelectorAll(s.selectorText)}catch{}if(!(!o||!e_(o,e))){var i=s.style.getPropertyValue("top"),l=s.style.getPropertyValue("bottom");if(i&&i!=="auto"||l&&l!=="auto")return!0}}}return!1};ke.needsCentering=function(e){var n=window.getComputedStyle(e);return n.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!ke.isInlinePositionSetByStylesheet(e)};ke.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new yk(e)};ke.registerDialog=function(e){e.showModal||ke.forceRegisterDialog(e)};ke.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(n){this.forwardTab_=void 0,n.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(n){var r=[];n.forEach(function(t){for(var a=0,s;s=t.removedNodes[a];++a)s instanceof Element&&(s.localName==="dialog"&&r.push(s),r=r.concat(s.querySelectorAll("dialog")))}),r.length&&e(r)}))};ke.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};ke.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};ke.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,n=0,r;r=this.pendingDialogStack[n];++n)r.updateZIndex(--e,--e),n===0&&(this.overlay.style.zIndex=--e);var t=this.pendingDialogStack[0];if(t){var a=t.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};ke.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=Bt(e);){for(var n=0,r;r=this.pendingDialogStack[n];++n)if(r.dialog===e)return n===0;e=e.parentElement}return!1};ke.DialogManager.prototype.handleFocus_=function(e){var n=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(n)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),ck(n),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],t=r.dialog,a=t.compareDocumentPosition(n);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():n!==document.documentElement&&document.documentElement.focus()),!1}};ke.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var n=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&vk(r.dialog,n)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};ke.DialogManager.prototype.checkDOM_=function(e){var n=this.pendingDialogStack.slice();n.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};ke.DialogManager.prototype.pushDialog=function(e){var n=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=n?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};ke.DialogManager.prototype.removeDialog=function(e){var n=this.pendingDialogStack.indexOf(e);n!==-1&&(this.pendingDialogStack.splice(n,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Zr&&(ke.dm=new ke.DialogManager,ke.formSubmitter=null,ke.imagemapUseValue=null);if(Zr){var pd=document.createElement("form");if(pd.setAttribute("method","dialog"),pd.method!=="dialog"){var $r=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if($r){var r_=$r.get;$r.get=function(){return ao(this)?"dialog":r_.call(this)};var t_=$r.set;$r.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):t_.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",$r)}}document.addEventListener("click",function(e){if(ke.formSubmitter=null,ke.imagemapUseValue=null,!e.defaultPrevented){var n=e.target;if("composedPath"in e){var r=e.composedPath();n=r.shift()||n}if(!(!n||!ao(n.form))){var t=n.type==="submit"&&["button","input"].indexOf(n.localName)>-1;if(!t){if(!(n.localName==="input"&&n.type==="image"))return;ke.imagemapUseValue=e.offsetX+","+e.offsetY}var a=Bt(n);a&&(ke.formSubmitter=n)}}},!1),document.addEventListener("submit",function(e){var n=e.target,r=Bt(n);if(!r){var t=pk(e),a=t&&t.getAttribute("formmethod")||n.getAttribute("method");a==="dialog"&&e.preventDefault()}});var a_=HTMLFormElement.prototype.submit,s_=function(){if(!ao(this))return a_.call(this);var e=Bt(this);e&&e.close()};HTMLFormElement.prototype.submit=s_}var o_=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const yd="navds-modal--polyfilled",vr=E.forwardRef((e,n)=>{var r,t,{header:a,children:s,open:o,onBeforeClose:i,onCancel:l,closeOnBackdropClick:d,width:u,placement:g,portal:k,className:m,"aria-labelledby":c,style:f,onClick:v,onMouseDown:h}=e,p=o_(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const R=E.useRef(null),S=ta(R,n),_=sr(),O=(r=li())===null||r===void 0?void 0:r.rootElement,A=xb({root:O}),D=E.useContext(bs),K=vs(!1)!==void 0;K&&!D&&console.error("Modals should not be nested"),E.useEffect(()=>{Zr&&R.current&&A&&(ke.registerDialog(R.current),R.current.classList.add(yd)),R.current&&A&&(R.current.autofocus=!0)},[A]),E.useEffect(()=>{R.current&&A&&o!==void 0&&(o&&!R.current.open?R.current.showModal():!o&&R.current.open&&R.current.close())},[A,o]),Qb(R,A,K);const q=typeof u=="string"&&["small","medium"].includes(u),B=X("navds-modal",m,{[yd]:Zr,"navds-modal--autowidth":!u,[`navds-modal--${u}`]:q,"navds-modal--top":g==="top"&&!Zr}),L=Object.assign(Object.assign({},f),q?{}:{width:u}),I=E.useRef({clientX:0,clientY:0}),V=ie=>{I.current=ie},H=d&&!Zr,C=ie=>{if(ie.target!==R.current)return;const he=R.current.getBoundingClientRect();cd(I.current,he)||cd(ie,he)||i!==void 0&&i()===!1||R.current.close()},M=ie=>{i&&i()===!1&&ie.preventDefault()},P=!c&&!p["aria-label"]&&a?_:c,te=T.createElement("dialog",Object.assign({},p,{ref:S,className:B,style:L,onCancel:jt(l,M),onClick:H?jt(v,C):v,onMouseDown:H?jt(h,V):h,"aria-labelledby":P}),T.createElement(KE,{closeHandler:Xb(R,a,i),ref:R},a&&T.createElement(fk,null,a.label&&T.createElement(ms,{className:"navds-modal__label"},a.label),T.createElement(pt,{size:(t=a.size)!==null&&t!==void 0?t:"medium",level:"1",id:_},a.icon&&T.createElement("span",{className:"navds-modal__header-icon"},a.icon),a.heading)),s));return k?A?mu.createPortal(te,A):null:te});vr.Header=fk;vr.Body=$b;vr.Footer=zb;var i_=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const l_=E.forwardRef((e,n)=>{var{className:r}=e,t=i_(e,["className"]);return T.createElement("div",Object.assign({},t,{ref:n,className:X("navds-popover__content",r)}))});var d_=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Tk=E.forwardRef((e,n)=>{var{className:r,children:t,anchorEl:a,arrow:s=!0,open:o,onClose:i,placement:l="top",offset:d,strategy:u,flip:g=!0}=e,k=d_(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const m=E.useRef(null),c=vs(!1)!==void 0,f=E.useContext(bs)!==null,v=u??(c?"fixed":"absolute"),h=f?!1:g,p=aa(!1),{update:R,refs:S,placement:_,middlewareData:{arrow:{x:O,y:A}={}},floatingStyles:D}=Cb({strategy:v,placement:l,open:o,middleware:[cT(d??(p?8:s?16:4)),h&&pT({padding:5,fallbackPlacements:["bottom","top"]}),ET({padding:12}),yT({element:m,padding:8})]});it(()=>{S.setReference(a)},[a]);const K=ta(S.setFloating,n);it(()=>{if(!S.reference.current||!S.floating.current||!o)return;const B=dT(S.reference.current,S.floating.current,R);return()=>B()},[S.floating,S.reference,R,o,a]);const q={top:"bottom",right:"left",bottom:"top",left:"right"}[_.split("-")[0]];return T.createElement(Ly,{asChild:!0,safeZone:{anchor:a,dismissable:S.floating.current},onDismiss:()=>o&&(i==null?void 0:i()),enabled:o},T.createElement("div",Object.assign({ref:K},k,{className:X("navds-popover",r,{"navds-popover--hidden":!o||!a}),style:Object.assign(Object.assign({},k.style),D),"data-placement":_,"aria-hidden":!o||!a}),t,s&&!p&&T.createElement("div",{ref:B=>{m.current=B},style:Object.assign(Object.assign(Object.assign({},O!=null?{left:O}:{}),A!=null?{top:A}:{}),q?{[q]:"-0.5rem"}:{}),className:"navds-popover__arrow"})))});Tk.Content=l_;const u_={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},g_=({open:e,children:n,onClose:r,anchor:t,locale:a,translate:s,variant:o,popoverProps:i})=>{const l=br("global",Ob(a)),d=E.useRef(null),u=vs(!1)!==void 0;return ME("screen and (min-width: 768px)",!0)&&!u?T.createElement(Tk,Object.assign({arrow:!1,anchorEl:t,open:e,onClose:r,placement:"bottom-start",role:"dialog",className:X("navds-date__popover",{"navds-date":o==="month"}),flip:!1},i),n):T.createElement(vr,{ref:d,open:e,onClose:k=>{k.stopPropagation(),r()},"aria-label":s(u_[o]),className:X("navds-date__modal",{"navds-date__nested-modal":u,"navds-date":o==="month"}),closeOnBackdropClick:!0},T.createElement("div",{className:"navds-date__modal-body"},n,T.createElement(Nn,{variant:"tertiary",onClick:()=>{var k;return(k=d==null?void 0:d.current)===null||k===void 0?void 0:k.close()},size:"small",type:"button"},l("close"))))};var k_=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const hk=E.forwardRef((e,n)=>{var{as:r="div",className:t,above:a,below:s,variant:o,asChild:i}=e,l=k_(e,["as","className","above","below","variant","asChild"]);const d=o==="show"?a:s,u=o==="show"?s:a,g=i?ct:r;return T.createElement(g,Object.assign({},l,{ref:n,className:X("navds-responsive",t,{[`navds-responsive__above--${d}`]:d,[`navds-responsive__below--${u}`]:u})}))}),Rk=E.forwardRef((e,n)=>T.createElement(hk,Object.assign({},e,{ref:n,variant:"hide"}))),m_=E.forwardRef((e,n)=>T.createElement(hk,Object.assign({},e,{ref:n,variant:"show"})));function f_(e,n){const r=Object.assign(Object.assign({},n),{weekStartsOn:1}),t=Td(Le(e),ys(e),r);if(r!=null&&r.useFixedWeeks){const a=xg(e,r);if(a<6){const s=t[t.length-1],o=s.dates[s.dates.length-1],i=Ht(o,6-a),l=Td(Ht(o,1),i,r);t.push(...l)}}return t}function Td(e,n,r){const t=Ts(n,r),a=en(e,r),s=Qe(t,a),o=[];for(let l=0;l<=s;l++)o.push(Be(a,l));return o.reduce((l,d)=>{const u=hs(d,r),g=l.find(k=>k.weekNumber===u);return g?(g.dates.push(d),l):(l.push({weekNumber:u,dates:[d]}),l)},[])}function _s({number:e,dates:n}){const{onWeekNumberClick:r,styles:t,classNames:a}=ue(),s=aa(!1),o=ua().translate;return r?s?T.createElement(Nn,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":o("selectWeekNumber",{week:e}),style:t.weeknumber,className:"navds-date__weeknumber",onClick:i=>{r(e,n,i)},icon:T.createElement("span",{className:"navds-date__weeknumber-number"},e)}):T.createElement(ft,{name:"week-number","aria-label":o("selectWeekNumber",{week:e}),style:t.weeknumber,className:a.weeknumber,onClick:i=>{r(e,n,i)}},e):T.createElement(ms,{as:"span",textColor:"subtle",className:a.weeknumber,style:t.weeknumber,"aria-label":o("weekNumber",{week:e})},e)}const bk=({displayMonth:e})=>{const{locale:n,fixedWeeks:r,onWeekNumberClick:t}=ue(),a=ua().translate,s=sr();if(!t)return null;const o=f_(e,{useFixedWeeks:!!r,locale:n});return T.createElement(m_,{below:"sm",asChild:!0},T.createElement("table",{className:"rdp-table",role:"grid"},T.createElement("tbody",{className:"rdp-tbody"},T.createElement("tr",{className:"rdp-row navds-date__week-row"},T.createElement(ms,{as:"th",weight:"semibold",className:"rdp-cell navds-date__week-cell"},T.createElement("span",{className:"navds-date__week-wrapper",id:s},`${a("week")}:`)),o.map(i=>T.createElement("td",{key:i.weekNumber,className:"rdp-cell navds-date__week-cell"},T.createElement("span",{className:"navds-date__week-wrapper"},T.createElement(_s,{number:i.weekNumber,dates:i.dates}))))))))},_k=({displayMonth:e,id:n})=>{const{goToMonth:r,nextMonth:t,previousMonth:a}=Br(),{formatters:{formatCaption:s},locale:o}=ue(),i=ua().translate;return T.createElement(T.Fragment,null,T.createElement("div",{className:"navds-date__caption"},T.createElement(Nn,{variant:"tertiary-neutral",disabled:!a,onClick:()=>a&&r(a),icon:T.createElement(dg,{title:i("goToPreviousMonth")}),className:"navds-date__caption-button",type:"button"}),T.createElement(on,{as:"span","aria-live":"polite","aria-atomic":"true",id:n,className:"navds-date__caption-label"},s(e,{locale:o})),T.createElement(Nn,{icon:T.createElement(ug,{title:i("goToNextMonth")}),onClick:()=>t&&r(t),disabled:!t,variant:"tertiary-neutral",className:"navds-date__caption-button",type:"button"})),T.createElement(bk,{displayMonth:e}))};var v_=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Mo=E.forwardRef((e,n)=>{const{inputProps:r,errorId:t,showErrorMsg:a,hasError:s,size:o,inputDescriptionId:i,readOnly:l}=ga(e,"select"),{children:d,label:u,className:g,description:k,htmlSize:m,hideLabel:c=!1,style:f}=e,v=v_(e,["children","label","className","description","htmlSize","hideLabel","style"]),h={onMouseDown:p=>{l&&(p.preventDefault(),p.target.focus())},onKeyDown:p=>{l&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(p.key)&&p.preventDefault()}};return T.createElement("div",{className:X(g,"navds-form-field",`navds-form-field--${o}`,{"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":l,"navds-select--error":s,"navds-select--readonly":l})},T.createElement(on,{htmlFor:r.id,size:o,className:X("navds-form-field__label",{"navds-sr-only":c})},l&&T.createElement(gk,null),u),!!k&&T.createElement(Ie,{className:X("navds-form-field__description",{"navds-sr-only":c}),id:i,size:o,as:"div"},k),T.createElement("div",{className:"navds-select__container",style:f},T.createElement("select",Object.assign({},dn(v,["error","errorId","size","readOnly"]),r,h,{ref:n,className:X("navds-select__input","navds-body-short",`navds-body-short--${o??"medium"}`),size:m}),d),T.createElement(bE,{className:"navds-select__chevron","aria-hidden":!0})),T.createElement("div",{className:"navds-form-field__error",id:t,"aria-relevant":"additions removals","aria-live":"polite"},a&&T.createElement(fs,{size:o,showIcon:!0},e.error)))}),Ak=({displayMonth:e,id:n})=>{const{goToMonth:r,nextMonth:t,previousMonth:a}=Br(),{fromDate:s,toDate:o,formatters:{formatYearCaption:i,formatMonthCaption:l,formatCaption:d},locale:u}=ue(),g=ua().translate;if(!s||!o)return console.warn("Using dropdownCaption required fromDate and toDate"),null;const k=v=>{const h=Ct(Le(e),Number(v.target.value));r(Le(wg([Kg([h,s]),o])))},m=v=>r(fr(Le(e),Number(v.target.value))),c=Db(s,o,e.getFullYear()).reverse(),f=Nb(s,o,e);return T.createElement(T.Fragment,null,T.createElement("div",{className:"navds-date__caption"},T.createElement("span",{"aria-live":"polite","aria-atomic":"true",id:n,className:"navds-sr-only"},d(e,{locale:u})),T.createElement(Nn,{variant:"tertiary-neutral",disabled:!a,onClick:()=>a&&r(a),icon:T.createElement(dg,{title:g("goToPreviousMonth")}),className:"navds-date__caption-button",type:"button"}),T.createElement("div",{className:"navds-date__caption"},T.createElement(Mo,{label:g("month"),hideLabel:!0,className:"navds-date__caption__month",value:e.getMonth(),onChange:m},f.map(v=>T.createElement("option",{key:v.getMonth(),value:v.getMonth()},l(v,{locale:u})))),T.createElement(Mo,{label:g("year"),hideLabel:!0,value:e.getFullYear(),onChange:k,className:"navds-date__caption__year"},c.map(v=>T.createElement("option",{key:v.getFullYear(),value:v.getFullYear()},i(v,{locale:u}))))),T.createElement(Nn,{variant:"tertiary-neutral",icon:T.createElement(ug,{title:g("goToNextMonth")}),onClick:()=>t&&r(t),disabled:!t,className:"navds-date__caption-button",type:"button"})),T.createElement(bk,{displayMonth:e}))};function Sk(){const{classNames:e,styles:n,showWeekNumber:r,locale:t,formatters:{formatWeekdayName:a},labels:{labelWeekday:s}}=ue(),o=c_(t);return T.createElement("tr",{style:n.head_row,className:e.head_row},r&&T.createElement(Rk,{below:"sm",asChild:!0},T.createElement("td",{style:n.head_cell,className:e.head_cell})),o.map((i,l)=>T.createElement("th",{key:l,scope:"col",className:e.head_cell,style:n.head_cell,"aria-label":s(i,{locale:t})},a(i,{locale:t}))))}function c_(e){const n=en(new Date,{locale:e,weekStartsOn:1}),r=[];for(let t=0;t<7;t++){const a=Be(n,t);r.push(a)}return r}const E_=e=>{const n=E.useRef(null),r=tk(e.date,e.displayMonth,n),{locale:t}=ue(),a=lr(e.date,"cccc d",{locale:t});return r.isHidden?T.createElement(T.Fragment,null):r.isButton?T.createElement(ft,Object.assign({name:"day",ref:n},r.buttonProps,{role:void 0,"aria-label":a,"aria-hidden":r.activeModifiers.outside,"aria-selected":void 0,"aria-pressed":!!r.activeModifiers.selected})):T.createElement("div",Object.assign({},r.divProps))};function Nk(e){const{styles:n,classNames:r,showWeekNumber:t}=ue();return T.createElement("tr",{className:r.row,style:n.row},t&&T.createElement(Rk,{below:"sm",asChild:!0},T.createElement("td",{className:r.cell,style:n.cell},T.createElement(_s,{number:e.weekNumber,dates:e.dates}))),e.dates.map(a=>T.createElement("td",{className:r.cell,style:n.cell,key:Bg(a)},T.createElement(E_,{displayMonth:e.displayMonth,date:a}))))}function Dk(){var e;const{classNames:n,styles:r,components:t}=ue(),a=(e=t==null?void 0:t.HeadRow)!==null&&e!==void 0?e:Zg;return T.createElement("thead",{style:r.head,className:n.head,"aria-hidden":!0},T.createElement(a,null))}var p_=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const y_=E.forwardRef((e,n)=>{var r,{className:t,locale:a,translations:s,dropdownCaption:o,disabled:i=[],disableWeekends:l=!1,showWeekNumber:d=!1,selected:u,defaultSelected:g,onSelect:k,fixedWeeks:m=!1,onWeekNumberClick:c}=e,f=p_(e,["className","locale","translations","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","defaultSelected","onSelect","fixedWeeks","onWeekNumberClick"]);const v=br("DatePicker",s,dk(a)),h=vi(),[p,R]=T.useState(g),S=(r=f.mode)!==null&&r!==void 0?r:"single",_=O=>{R(O),k==null||k(O)};return T.createElement("div",{ref:n,className:X("navds-date__standalone-wrapper",t)},T.createElement(uk,{translate:v},T.createElement(ak,Object.assign({locale:a?Li(a):h,mode:S,onSelect:_,selected:u??p,components:{Caption:o?Ak:_k,Head:Dk,HeadRow:Sk,WeekNumber:_s,Row:Nk},className:"navds-date",classNames:{vhidden:"navds-sr-only"},disabled:O=>l&&gt(O)||Wt(O,i),weekStartsOn:1,initialFocus:!1,modifiers:{weekend:O=>l&&gt(O)},modifiersClassNames:{weekend:"rdp-day__weekend"},showWeekNumber:d,onWeekNumberClick:S==="multiple"?c:void 0,fixedWeeks:m,showOutsideDays:!0},dn(f,["children","id"])))))});var T_=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Qa=E.forwardRef((e,n)=>{var r,{children:t,locale:a,translations:s,dropdownCaption:o,disabled:i=[],disableWeekends:l=!1,showWeekNumber:d=!1,selected:u,id:g,defaultSelected:k,className:m,wrapperClassName:c,open:f,onClose:v,onOpenToggle:h,strategy:p,onWeekNumberClick:R}=e,S=T_(e,["children","locale","translations","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","id","defaultSelected","className","wrapperClassName","open","onClose","onOpenToggle","strategy","onWeekNumberClick"]);const _=br("DatePicker",s,dk(a)),O=vi(),A=sr(g),[D,K]=E.useState(f??!1),[q,B]=E.useState(null),L=ta(B,n),[I,V]=T.useState(k),H=(r=S.mode)!==null&&r!==void 0?r:"single",C=P=>{var te,ie,he;V(P),S.mode==="single"?P&&((te=v==null?void 0:v())!==null&&te!==void 0||K(!1)):S.mode==="range"&&P!=null&&P.from&&P!=null&&P.to&&((ie=v==null?void 0:v())!==null&&ie!==void 0||K(!1)),(he=S==null?void 0:S.onSelect)===null||he===void 0||he.call(S,P)},M=T.createElement(ak,Object.assign({locale:a?Li(a):O,mode:H,onSelect:C,selected:u??I,components:{Caption:o?Ak:_k,Head:Dk,HeadRow:Sk,WeekNumber:_s,Row:Nk},className:X("navds-date",m),classNames:{vhidden:"navds-sr-only"},disabled:P=>l&&gt(P)||Wt(P,i),weekStartsOn:1,initialFocus:!1,modifiers:{weekend:P=>l&&gt(P)},modifiersClassNames:{weekend:"rdp-day__weekend"},showWeekNumber:d,onWeekNumberClick:H==="multiple"?R:void 0,fixedWeeks:!0,showOutsideDays:!0},dn(S,["onSelect"])));return T.createElement(uk,{translate:_},T.createElement(bs.Provider,{value:{open:f??D,onOpen:()=>{K(P=>!P),h==null||h()},ariaId:A,defined:!0}},T.createElement("div",{ref:L,className:X("navds-date__wrapper",c)},t,T.createElement(g_,{open:f??D,anchor:q,onClose:()=>{var P;return(P=v==null?void 0:v())!==null&&P!==void 0?P:K(!1)},locale:a,translate:_,variant:H,popoverProps:{id:A,strategy:p}},M))))});Qa.Standalone=y_;Qa.Input=Lb;const h_=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),R_=(e={})=>{var n;const{locale:r,required:t,defaultSelected:a,today:s=new Date,fromDate:o,toDate:i,disabled:l,disableWeekends:d,onDateChange:u,inputFormat:g,onValidate:k,defaultMonth:m,allowTwoDigitYear:c=!0}=e,[f,v]=E.useState(null),h=vi(),p=r?Li(r):h,[R,S]=E.useState(a),[_,O]=E.useState((n=R??m)!==null&&n!==void 0?n:s),[A,D]=E.useState(R),[K,q]=E.useState(!1),B=R?Lt(R,p,"date",g):"",[L,I]=E.useState(B),V=E.useCallback(se=>{var ee,Ge;q(se),se&&O((Ge=(ee=A??R)!==null&&ee!==void 0?ee:m)!==null&&Ge!==void 0?Ge:s)},[m,R,A,s]),H=se=>{u==null||u(se),D(se)},C=(se={})=>k==null?void 0:k(h_(se));return{datepickerProps:{month:_,onMonthChange:O,onDayClick:(se,{selected:ee})=>{if(!(ee&&t)){if(se&&!ee&&(V(!1),f==null||f.focus()),ee){H(void 0),I(""),C({isValidDate:!1,isEmpty:!0});return}H(se),C(),O(se),I(se?Lt(se,p,"date",g):"")}},selected:A??new Date("Invalid date"),locale:r,fromDate:o,toDate:i,today:s,open:K,onClose:()=>{V(!1),f==null||f.focus()},onOpenToggle:()=>V(!K),disabled:l,disableWeekends:d},inputProps:{onChange:se=>{I(se.target.value);const ee=no(se.target.value,s,p,"date",c),Ge=o&&ee&&Qe(o,ee)>0,$e=i&&ee&&Qe(ee,i)>0;if(!bn(ee)||d&&gt(ee)||l&&Wt(ee,l)){H(void 0),C({isInvalid:!bn(ee),isWeekend:d&&gt(ee),isDisabled:l&&Wt(ee,l),isValidDate:!1,isEmpty:!se.target.value,isBefore:Ge??!1,isAfter:$e??!1});return}if(Ge||$e){H(void 0),C({isValidDate:!1,isBefore:Ge??!1,isAfter:$e??!1});return}H(ee),C(),O(m??ee)},onFocus:se=>{if(se.target.readOnly)return;const ee=no(se.target.value,s,p,"date",c);if(bn(ee)){I(Lt(ee,p,"date",g));const Ge=o&&ee&&Qe(o,ee)>0,$e=i&&ee&&Qe(ee,i)>0;!Ge&&!$e&&O(ee)}},onBlur:se=>{const ee=no(se.target.value,s,p,"date",c);bn(ee)&&I(Lt(ee,p,"date",g))},value:L,setAnchorRef:v},reset:()=>{var se;H(R),O((se=R??m)!==null&&se!==void 0?se:s),I(B??""),S(a)},selectedDay:A,setSelected:se=>{var ee;H(se),O((ee=se??m)!==null&&ee!==void 0?ee:s),I(se?Lt(se,p,"date",g):"")}}};function Ye(e,n,r,t){return t?typeof t=="string"?{[`--__${e}c-${n}-${r}-xs`]:t}:Object.fromEntries(Object.entries(t).map(([a,s])=>[`--__${e}c-${n}-${r}-${a}`,s])):{}}const b_={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},hd=(e,n,r,t,a,s)=>n.split(" ").map((o,i,l)=>{var d;if(e==="margin-inline"&&o==="full")return`calc((100vw - ${100/l.length}%)/-2)`;if(e==="padding-inline"&&o==="full")return`calc((100vw - ${100/l.length}%)/2)`;if(["mi","mb"].includes(e)&&o==="auto")return"auto";let u=`var(--${s}-${r}-${o})`;if(t.includes(o))u=o==="px"?"1px":o;else if(o.startsWith("space"))u=`var(--${s}-${o})`;else{const g=`--${s}-spacing-${o}`;u=`var(${(d=b_[g])!==null&&d!==void 0?d:g})`}return a?o==="0"?"0":`calc(-1 * ${u})`:u}).join(" ");function gn(e,n,r,t,a,s=!1,o=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${n}-${r}-xs`]:hd(r,a,t,o,s,e)};const i={};return Object.entries(a).forEach(([l,d])=>{i[`--__${e}c-${n}-${r}-${l}`]=hd(r,d,t,o,s,e)}),i}const __=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],A_=({children:e,className:n,padding:r,paddingInline:t,paddingBlock:a,margin:s,marginInline:o,marginBlock:i,width:l,minWidth:d,maxWidth:u,height:g,minHeight:k,maxHeight:m,position:c,inset:f,top:v,right:h,left:p,bottom:R,overflow:S,overflowX:_,overflowY:O,flexBasis:A,flexGrow:D,flexShrink:K,gridColumn:q})=>{const L=aa(!1)?"ax":"a",I=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},gn(L,"r","p","spacing",r)),gn(L,"r","pi","spacing",t)),gn(L,"r","pb","spacing",a)),gn(L,"r","m","spacing",s)),gn(L,"r","mi","spacing",o)),gn(L,"r","mb","spacing",i)),Ye(L,"r","w",l)),Ye(L,"r","minw",d)),Ye(L,"r","maxw",u)),Ye(L,"r","h",g)),Ye(L,"r","minh",k)),Ye(L,"r","maxh",m)),Ye(L,"r","position",c)),gn(L,"r","inset","spacing",f)),gn(L,"r","top","spacing",v)),gn(L,"r","right","spacing",h)),gn(L,"r","bottom","spacing",R)),gn(L,"r","left","spacing",p)),Ye(L,"r","overflow",S)),Ye(L,"r","overflowx",_)),Ye(L,"r","overflowy",O)),Ye(L,"r","flex-basis",A)),Ye(L,"r","flex-grow",D)),Ye(L,"r","flex-shrink",K)),Ye(L,"r","grid-column",q));return T.createElement(ct,{className:X({className:n,"navds-r-p":r,"navds-r-pi":t,"navds-r-pb":a,"navds-r-m":s,"navds-r-mi":o,"navds-r-mb":i,"navds-r-w":l,"navds-r-minw":d,"navds-r-maxw":u,"navds-r-h":g,"navds-r-minh":k,"navds-r-maxh":m,"navds-r-position":c,"navds-r-inset":f,"navds-r-top":v,"navds-r-right":h,"navds-r-bottom":R,"navds-r-left":p,"navds-r-overflow":S,"navds-r-overflowx":_,"navds-r-overflowy":O,"navds-r-flex-basis":A,"navds-r-flex-grow":D,"navds-r-flex-shrink":K,"navds-r-grid-column":q}),style:I},e)};var S_=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Ok=E.forwardRef((e,n)=>{var{children:r,className:t,as:a="div",align:s,justify:o,wrap:i=!0,gap:l,style:d,direction:u="row",asChild:g}=e,k=S_(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const c=aa(!1)?"ax":"a",f=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),gn(c,"stack","gap","spacing",l)),Ye(c,"stack","direction",u)),Ye(c,"stack","align",s)),Ye(c,"stack","justify",o)),v=g?ct:a;return T.createElement(A_,Object.assign({},k),T.createElement(v,Object.assign({},dn(k,__),{ref:n,style:f,className:X("navds-stack",t,{"navds-vstack":u==="column","navds-hstack":u==="row","navds-stack-gap":l,"navds-stack-align":s,"navds-stack-justify":o,"navds-stack-direction":u,"navds-stack-wrap":i})}),r))});var N_=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const D_=E.forwardRef((e,n)=>{var{as:r="div"}=e,t=N_(e,["as"]);return T.createElement(Ok,Object.assign({as:r},t,{ref:n,direction:"row"}))});var O_=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const I_=E.forwardRef((e,n)=>{var{as:r="div"}=e,t=O_(e,["as"]);return T.createElement(Ok,Object.assign({as:r},t,{ref:n,direction:"column",wrap:!1}))});var L_=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const qo=E.forwardRef((e,n)=>{var{children:r,className:t,variant:a,size:s="medium",icon:o}=e,i=L_(e,["children","className","variant","size","icon"]);const l=(a==null?void 0:a.endsWith("-filled"))&&"strong",d=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",u=a==null?void 0:a.replace("-filled","").replace("-moderate","");return T.createElement(Ie,Object.assign({},i,{ref:n,as:"span",size:s==="medium"?"medium":"small",className:X("navds-tag",t,`navds-tag--${a}`,`navds-tag--${s}`,`navds-tag--${l||d||"outline"}`,`navds-tag--${u}`)}),o&&T.createElement("span",{className:"navds-tag__icon--left"},o),r)}),P_=e=>{const n=ga(e,"fieldset"),{inputProps:r}=n;return Object.assign(Object.assign({},n),{inputProps:{"aria-invalid":r["aria-invalid"],"aria-describedby":r["aria-describedby"]}})};var F_=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const K_=E.forwardRef((e,n)=>{var r,t,a;const{inputProps:s,errorId:o,showErrorMsg:i,hasError:l,size:d,readOnly:u,inputDescriptionId:g}=P_(e),k=E.useContext(Za),{children:m,className:c,errorPropagation:f=!0,legend:v,description:h,hideLegend:p,nativeReadOnly:R=!0}=e,S=F_(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return T.createElement(Za.Provider,{value:{error:f?(r=e.error)!==null&&r!==void 0?r:k==null?void 0:k.error:void 0,errorId:X({[o]:i,[(t=k==null?void 0:k.errorId)!==null&&t!==void 0?t:""]:!!(k!=null&&k.error)}),size:d,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:u}},T.createElement("fieldset",Object.assign({},dn(S,["errorId","error","size","readOnly"]),dn(s,["aria-describedby","aria-invalid"]),{ref:n,className:X(c,"navds-fieldset",`navds-fieldset--${d}`,{"navds-fieldset--error":l,"navds-fieldset--readonly":u})}),T.createElement(on,{size:d,as:"legend",className:X("navds-fieldset__legend",{"navds-sr-only":!!p})},u&&(R?T.createElement(Pi,null):T.createElement(gk,null)),v),!!h&&T.createElement(Ie,{className:X("navds-fieldset__description",{"navds-sr-only":!!p}),id:g,size:d??"medium",as:"div"},e.description),m,T.createElement("div",{id:o,"aria-relevant":"additions removals","aria-live":"polite",className:"navds-fieldset__error"},i&&T.createElement(fs,{size:d,showIcon:!0},e.error))))});var w_=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Ik=T.createContext(null),M_=E.forwardRef((e,n)=>{var r,t,{children:a,className:s,name:o,defaultValue:i,value:l,onChange:d=()=>{},required:u,readOnly:g}=e,k=w_(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const m=E.useContext(Za),c=sr();return T.createElement(K_,Object.assign({},k,{readOnly:g,ref:n,className:X(s,"navds-radio-group",`navds-radio-group--${(t=(r=k.size)!==null&&r!==void 0?r:m==null?void 0:m.size)!==null&&t!==void 0?t:"medium"}`),nativeReadOnly:!1}),T.createElement(Ik.Provider,{value:{name:o??`radioGroupName-${c}`,defaultValue:i,value:l,onChange:d,required:u}},T.createElement("div",{className:"navds-radio-buttons"},a)))});var q_=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const V_=e=>{const n=E.useContext(Ik),r=ga(dn(e,["description"]),"radio"),{inputProps:t,readOnly:a}=r,s=q_(r,["inputProps","readOnly"]);return n||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},s),{readOnly:a,inputProps:Object.assign(Object.assign({},t),{name:n==null?void 0:n.name,defaultChecked:(n==null?void 0:n.defaultValue)===void 0?void 0:(n==null?void 0:n.defaultValue)===e.value,checked:(n==null?void 0:n.value)===void 0?void 0:(n==null?void 0:n.value)===e.value,onChange:o=>{var i,l;a||((i=e.onChange)===null||i===void 0||i.call(e,o),(l=n==null?void 0:n.onChange)===null||l===void 0||l.call(n,e.value))},onClick:o=>{var i;if(a){o.preventDefault();return}(i=e==null?void 0:e.onClick)===null||i===void 0||i.call(e,o)},required:n==null?void 0:n.required,type:"radio"})})},Rd=E.forwardRef((e,n)=>{const{inputProps:r,size:t,hasError:a,readOnly:s}=V_(e),o=sr(),i=sr();return T.createElement("div",{className:X(e.className,"navds-radio",`navds-radio--${t}`,{"navds-radio--error":a,"navds-radio--disabled":r.disabled,"navds-radio--readonly":s})},T.createElement("input",Object.assign({},dn(e,["children","size","description","readOnly"]),dn(r,["aria-invalid"]),{"aria-labelledby":X(o,!!e["aria-labelledby"]&&e["aria-labelledby"],{[i]:e.description}),className:"navds-radio__input",ref:n})),T.createElement("label",{htmlFor:r.id,className:"navds-radio__label"},T.createElement("span",{className:"navds-radio__content"},T.createElement(Ie,{as:"span",id:o,size:t,"aria-hidden":!0},e.children),e.description&&T.createElement(Ie,{as:"span",id:i,size:t,className:"navds-form-field__subdescription navds-radio__description","aria-hidden":!0},e.description))))});var j_=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const bd=(e,n,r)=>{const{outerHeightStyle:t,overflow:a}=n;return r.current<20&&(t>0&&Math.abs((e.outerHeightStyle||0)-t)>1||e.overflow!==a)?(r.current+=1,n):e},_d=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function Aa(e){return parseInt(e,10)||0}const B_=E.forwardRef((e,n)=>{var r,t,{className:a,onChange:s,maxRows:o,minRows:i=1,autoScrollbar:l,style:d,value:u}=e,g=j_(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:k}=E.useRef(u!=null),m=E.useRef(null),c=ta(m,n),f=E.useRef(null),v=E.useRef(0),[h,p]=E.useState({outerHeightStyle:0}),R=T.useCallback(()=>{const A=m.current,K=_d(A).getComputedStyle(A);if(K.width==="0px")return{outerHeightStyle:0};const q=f.current;q.style.width=K.width,q.value=A.value||g.placeholder||"x",q.value.slice(-1)===`
`&&(q.value+=" ");const B=K.boxSizing,L=Aa(K.paddingBottom)+Aa(K.paddingTop),I=Aa(K.borderBottomWidth)+Aa(K.borderTopWidth),V=q.scrollHeight-L;q.value="x";const H=q.scrollHeight-L;let C=V;i&&(C=Math.max(Number(i)*H,C)),o&&(C=Math.min(Number(o)*H,C)),C=Math.max(C,H);const M=C+(B==="border-box"?L+I:0),P=Math.abs(C-V)<=1;return{outerHeightStyle:M,overflow:P}},[o,i,g.placeholder]),S=()=>{const A=R();Ad(A)||p(D=>bd(D,A,v))};it(()=>{const A=()=>{const L=R();Ad(L)||ku.flushSync(()=>{p(I=>bd(I,L,v))})},D=lg(()=>{var L,I,V;if(v.current=0,!((L=m.current)===null||L===void 0)&&L.style.height||!((I=m.current)===null||I===void 0)&&I.style.width){((V=m.current)===null||V===void 0?void 0:V.style.overflow)==="hidden"&&p(H=>Object.assign(Object.assign({},H),{overflow:!1}));return}A()},166,!0),K=m.current,q=_d(K);q.addEventListener("resize",D);let B;return typeof ResizeObserver<"u"&&(B=new ResizeObserver(D),B.observe(K)),()=>{D.clear(),q.removeEventListener("resize",D),B&&B.disconnect()}},[R]),it(()=>{S()}),E.useEffect(()=>{v.current=0},[u]);const _=A=>{v.current=0,k||S(),s&&s(A)},O=Object.assign({"--__ac-textarea-height":h.outerHeightStyle+"px","--__axc-textarea-height":h.outerHeightStyle+"px",overflow:h.overflow&&!l&&!(!((r=m.current)===null||r===void 0)&&r.style.height)&&!(!((t=m.current)===null||t===void 0)&&t.style.width)?"hidden":void 0},d);return T.createElement(T.Fragment,null,T.createElement("textarea",Object.assign({value:u,onChange:_,ref:c,rows:i,style:O},g,{className:a})),T.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:f,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},d)}))});function Ad(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const x_=({maxLengthId:e,maxLength:n,currentLength:r,size:t,i18n:a})=>{const s=br("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),o=n-r,[i,l]=E.useState(o);return E.useEffect(()=>{const d=lg(()=>{l(o)},2e3);return d(),()=>{d.clear()}},[o]),T.createElement(T.Fragment,null,T.createElement("span",{id:e,className:"navds-sr-only"},s("maxLength",{maxLength:n})),o<20&&T.createElement("span",{role:"status",className:"navds-textarea__sr-counter navds-sr-only"},Sd(i,s)),T.createElement(Ie,{className:X("navds-textarea__counter",{"navds-textarea__counter--error":o<0}),size:t},Sd(o,s)))},Sd=(e,n)=>e<0?n("charsTooMany",{chars:Math.abs(e)}):n("charsLeft",{chars:e});var G_=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const U_=E.forwardRef((e,n)=>{var r,t,a;const{inputProps:s,errorId:o,showErrorMsg:i,hasError:l,size:d,inputDescriptionId:u}=ga(e,"textarea"),{label:g,className:k,description:m,maxLength:c,hideLabel:f=!1,resize:v,UNSAFE_autoScrollbar:h,i18n:p,readOnly:R}=e,S=G_(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),_=sr(),O=c!==void 0&&c>0,[A,D]=E.useState((r=e==null?void 0:e.defaultValue)!==null&&r!==void 0?r:""),K=()=>{let B=S!=null&&S.minRows?S==null?void 0:S.minRows:3;return d==="small"&&(B=S!=null&&S.minRows?S==null?void 0:S.minRows:2),B},q=X(s["aria-describedby"],{[_??""]:O});return T.createElement("div",{className:X(k,"navds-form-field",`navds-form-field--${d}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":R,"navds-textarea--readonly":R,"navds-textarea--error":l,"navds-textarea--autoscrollbar":h,[`navds-textarea--resize-${v===!0?"both":v}`]:v})},T.createElement(on,{htmlFor:s.id,size:d,className:X("navds-form-field__label",{"navds-sr-only":f})},R&&T.createElement(Pi,null),g),!!m&&T.createElement(Ie,{className:X("navds-form-field__description",{"navds-sr-only":f}),id:u,size:d,as:"div"},m),T.createElement(B_,Object.assign({},dn(S,["error","errorId","size"]),s,{onChange:jt(e.onChange,e.value===void 0?B=>D(B.target.value):void 0),minRows:K(),autoScrollbar:h,ref:n,readOnly:R,className:X("navds-textarea__input","navds-body-short",`navds-body-short--${d??"medium"}`)},q?{"aria-describedby":q}:{})),O&&!R&&!s.disabled&&T.createElement(x_,{maxLengthId:_,maxLength:c,currentLength:(a=(t=e.value)===null||t===void 0?void 0:t.length)!==null&&a!==void 0?a:A.length,size:d,i18n:p}),T.createElement("div",{className:"navds-form-field__error",id:o,"aria-relevant":"additions removals","aria-live":"polite"},i&&T.createElement(fs,{size:d,showIcon:!0},e.error)))});function H_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nd={exports:{}},Pt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function Y_(){if(Dd)return Pt;Dd=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,a,s){var o=null;if(s!==void 0&&(o=""+s),a.key!==void 0&&(o=""+a.key),"key"in a){s={};for(var i in a)i!=="key"&&(s[i]=a[i])}else s=a;return a=s.ref,{$$typeof:e,type:t,key:o,ref:a!==void 0?a:null,props:s}}return Pt.Fragment=n,Pt.jsx=r,Pt.jsxs=r,Pt}var Od;function C_(){return Od||(Od=1,Nd.exports=Y_()),Nd.exports}var De=C_();const W_=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:De.jsx(DT,{variant:"warning",size:"small",children:De.jsx(I_,{gap:"2",children:T.Children.map(e,n=>De.jsx(Ie,{size:"small",children:n},Vc(n)?n.key:n))})}),Tt={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};Ce(Tt);const es="#B7B1A9",Lk=4,$_=(e,n,r)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${es};
    border-radius: ${Lk}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${n}px;
    margin-left: ${r}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${es};
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
`,J_=(e,n,r)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${es};
    border-radius: ${Lk}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${n}px;
    margin-left: ${r}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${es};
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
`,z_=(e,n,r,t)=>n?J_(e,r,t):$_(e,r,t),Z_=(e,n,r)=>r?"":n?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,X_=({children:e,alignOffset:n=0,alignLeft:r=!1,marginTop:t=0,marginLeft:a=0,hideBorder:s=!1})=>De.jsxs(De.Fragment,{children:[De.jsx("style",{dangerouslySetInnerHTML:{__html:z_(n,r,t,a)}}),De.jsx("div",{className:Z_(n,r,s),children:e})]});var Id={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ld;function Q_(){return Ld||(Ld=1,function(e){(function(){var n={}.hasOwnProperty;function r(){for(var s="",o=0;o<arguments.length;o++){var i=arguments[o];i&&(s=a(s,t.call(this,i)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var i in s)n.call(s,i)&&s[i]&&(o=a(o,this&&this[i]||i));return o}function a(s,o){return o?s?s+" "+o:s+o:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Id)),Id.exports}var eA=Q_();const En=H_(eA),nA="_borderbox_hicl4_1",rA="_error_hicl4_4",tA="_warning_hicl4_7",aA={borderbox:nA,error:rA,warning:tA};En.bind(aA);const sA="_aksjonspunkt_kn1hn_1",oA="_erAksjonspunktApent_kn1hn_4",iA="_erIkkeGodkjentAvBeslutter_kn1hn_8",lA={aksjonspunkt:sA,erAksjonspunktApent:oA,erIkkeGodkjentAvBeslutter:iA};En.bind(lA);Ce(Tt);Ce(Tt);const dA="_flexColumnNew_1vdv1_1",uA={flexColumnNew:dA},gA=En.bind(uA),Gn=({children:e,className:n})=>De.jsx("div",{className:gA("flexColumnNew",n),children:e}),kA="_flexRow_1yf0y_1",mA="_spaceBetween_1yf0y_9",fA="_alignItemsToBaseline_1yf0y_12",vA="_alignItemsToFlexEnd_1yf0y_15",cA="_justifyItemsToFlexEnd_1yf0y_18",EA="_wrap_1yf0y_21",pA={flexRow:kA,spaceBetween:mA,alignItemsToBaseline:fA,alignItemsToFlexEnd:vA,justifyItemsToFlexEnd:cA,wrap:EA},yA=En.bind(pA),ns=({children:e,spaceBetween:n=!1,alignItemsToBaseline:r=!1,alignItemsToFlexEnd:t=!1,wrap:a=!1,className:s})=>De.jsx("div",{className:yA("flexRow",{spaceBetween:n},{alignItemsToBaseline:r},{alignItemsToFlexEnd:t},{wrap:a},s),children:e}),TA="_flexContainer_1dk1o_1",hA="_fluid_1dk1o_6",RA="_fullHeight_1dk1o_9",bA="_flexWrap_1dk1o_17",_A={flexContainer:TA,fluid:hA,fullHeight:RA,flexWrap:bA},AA=En.bind(_A),rs=({children:e,wrap:n=!1,fullHeight:r=!1})=>De.jsx("div",{className:AA("flexContainer","fluid",{flexWrap:n,fullHeight:r}),children:e});Ce(Tt);const SA="_columnStyle_1f13u_1",Pk={columnStyle:SA},NA=En.bind(Pk),nt=({children:e="",className:n,hidden:r=!1,colspanAll:t=!1})=>r?null:De.jsx("td",{className:NA(Pk.columnStyle,n),colSpan:t?100:void 0,children:e}),DA="_row_1lxv9_1",OA="_harHover_1lxv9_4",IA="_rowHeader_1lxv9_7",LA="_grayHeader_1lxv9_12",PA="_rowContent_1lxv9_15",FA="_selected_1lxv9_18",KA="_bold_1lxv9_22",wA="_dashedBottomBorder_1lxv9_25",MA="_solidBottomBorder_1lxv9_28",qA="_apLeftBorder_1lxv9_31",VA="_noBottomBorder_1lxv9_34",Fk={row:DA,harHover:OA,rowHeader:IA,grayHeader:LA,rowContent:PA,selected:FA,bold:KA,dashedBottomBorder:wA,solidBottomBorder:MA,apLeftBorder:qA,noBottomBorder:VA},jA=En.bind(Fk),BA=(e,n,r)=>t=>{e&&t.button===0&&e(t,n,r)},Kk=e=>e.tagName==="TR"?e:Kk(e.parentElement),Pd=(e,n)=>{const r=Kk(e.target),t=(n?r.nextSibling:r.previousSibling)||r;t&&(t.focus(),e.preventDefault())},xA=(e,n,r,t)=>a=>{a.key==="ArrowDown"?Pd(a,!0):a.key==="ArrowUp"?Pd(a,!1):n&&a.target.tagName!=="TD"&&(a.key==="Enter"||a.key===" ")?(n(a,r,t),a.preventDefault()):e&&n&&a.target.tagName!=="TD"&&a.key==="Shift"&&(n(a),a.preventDefault())},GA=e=>n=>{e&&n.target.tagName!=="TD"&&n.key==="Shift"&&(e(n),n.preventDefault())},wk=({id:e,model:n,isHeader:r=!1,hasGrayHeader:t=!1,onMouseDown:a,onKeyDown:s,children:o,noHover:i=!1,isSelected:l=!1,isBold:d=!1,isDashedBottomBorder:u=!1,isSolidBottomBorder:g=!1,isApLeftBorder:k=!1,className:m,useMultiselect:c=!1,hasNoBottomBorder:f=!1})=>De.jsx("tr",{className:jA(m,Fk.row,{rowHeader:r,grayHeader:t,rowContent:!r&&!i,selected:l,harHover:!i,bold:d,dashedBottomBorder:u,solidBottomBorder:g,noBottomBorder:f,apLeftBorder:k}),onMouseDown:BA(a,e,n),onKeyDown:xA(c,s,e,n),onKeyUp:c?GA(s):void 0,tabIndex:0,children:o}),UA="_table_2cnpl_1",HA="_rowHover_2cnpl_25",YA={table:UA,rowHover:HA},CA=En.bind(YA),WA="EMPTY",Mk=T.forwardRef(({headerTextCodes:e=[],headerColumnContent:n=[],classNameTable:r="",noHover:t=!1,hasGrayHeader:a=!1,children:s},o)=>De.jsxs("table",{ref:o,className:CA("table",{[r]:r,rowHover:!t}),children:[De.jsx("thead",{children:De.jsxs(wk,{isHeader:!0,noHover:t,hasGrayHeader:a,children:[e.map(i=>typeof i=="string"&&i.startsWith(WA)?De.jsx(nt,{children:" "},i):De.jsx(nt,{children:De.jsx(be,{id:i})},i)),n.map(i=>De.jsx(nt,{children:i},i.key))]})}),De.jsx("tbody",{children:Array.isArray(s)?T.Children.map(s,i=>T.cloneElement(i,{noHover:t})):T.cloneElement(s,{noHover:t})})]}));Mk.displayName="Table";const $A="_hidden_1pb4f_1",JA="_active_1pb4f_8",zA="_activeRow_1pb4f_15 _active_1pb4f_8",ZA="_toggleIcon_1pb4f_19",XA="_colTopPadding_1pb4f_22",QA={hidden:$A,active:JA,activeRow:zA,toggleIcon:ZA,colTopPadding:XA};En.bind(QA);Ce(Tt);const eS="_fourPx_qda5k_1",nS="_eightPx_qda5k_4",rS="_sixteenPx_qda5k_7",tS="_twentyPx_qda5k_10",aS="_thirtyTwoPx_qda5k_13",sS="_fourtyPx_qda5k_16",oS={fourPx:eS,eightPx:nS,sixteenPx:rS,twentyPx:tS,thirtyTwoPx:aS,fourtyPx:sS},iS=En.bind(oS),hn=({fourPx:e=!1,eightPx:n=!1,sixteenPx:r=!1,twentyPx:t=!1,thirtyTwoPx:a=!1,fourtyPx:s=!1})=>De.jsx("div",{className:iS({fourPx:e,eightPx:n,sixteenPx:r,twentyPx:t,thirtyTwoPx:a,fourtyPx:s})});Ce(Tt);const lS="_divider_1t980_1",dS="_dividerParagraf_1t980_8",uS="_leftPanel_1t980_11",gS="_rightPanel_1t980_14",kS={divider:lS,dividerParagraf:dS,leftPanel:uS,rightPanel:gS};En.bind(kS);const mS="_editedIcon_ulrjl_1",fS={editedIcon:mS},vS=En.bind(fS),qk=({className:e=""})=>De.jsx("span",{"data-testid":"editedIcon",className:vS("editedIcon",e),children:De.jsx(IE,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})});function cS(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fd={exports:{}},Ft={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd;function ES(){if(Kd)return Ft;Kd=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,a,s){var o=null;if(s!==void 0&&(o=""+s),a.key!==void 0&&(o=""+a.key),"key"in a){s={};for(var i in a)i!=="key"&&(s[i]=a[i])}else s=a;return a=s.ref,{$$typeof:e,type:t,key:o,ref:a!==void 0?a:null,props:s}}return Ft.Fragment=n,Ft.jsx=r,Ft.jsxs=r,Ft}var wd;function pS(){return wd||(wd=1,Fd.exports=ES()),Fd.exports}var pe=pS();const As=e=>e.reduce((n,r,t)=>({...n,[t]:a=>r(a)||!0}),{}),Ss=(e,n)=>{const r=n.split(".").reduce((t,a)=>t!==void 0?t[a]:t,e);return r==null?void 0:r.message};var Vo={exports:{}},yS=Vo.exports,Md;function TS(){return Md||(Md=1,function(e,n){(function(r,t){e.exports=t()})(yS,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,o=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,l={},d=function(v){return(v=+v)+(v>68?1900:2e3)},u=function(v){return function(h){this[v]=+h}},g=[/[+-]\d\d:?(\d\d)?|Z/,function(v){(this.zone||(this.zone={})).offset=function(h){if(!h||h==="Z")return 0;var p=h.match(/([+-]|\d\d)/g),R=60*p[1]+(+p[2]||0);return R===0?0:p[0]==="+"?-R:R}(v)}],k=function(v){var h=l[v];return h&&(h.indexOf?h:h.s.concat(h.f))},m=function(v,h){var p,R=l.meridiem;if(R){for(var S=1;S<=24;S+=1)if(v.indexOf(R(S,0,h))>-1){p=S>12;break}}else p=v===(h?"pm":"PM");return p},c={A:[i,function(v){this.afternoon=m(v,!1)}],a:[i,function(v){this.afternoon=m(v,!0)}],Q:[a,function(v){this.month=3*(v-1)+1}],S:[a,function(v){this.milliseconds=100*+v}],SS:[s,function(v){this.milliseconds=10*+v}],SSS:[/\d{3}/,function(v){this.milliseconds=+v}],s:[o,u("seconds")],ss:[o,u("seconds")],m:[o,u("minutes")],mm:[o,u("minutes")],H:[o,u("hours")],h:[o,u("hours")],HH:[o,u("hours")],hh:[o,u("hours")],D:[o,u("day")],DD:[s,u("day")],Do:[i,function(v){var h=l.ordinal,p=v.match(/\d+/);if(this.day=p[0],h)for(var R=1;R<=31;R+=1)h(R).replace(/\[|\]/g,"")===v&&(this.day=R)}],w:[o,u("week")],ww:[s,u("week")],M:[o,u("month")],MM:[s,u("month")],MMM:[i,function(v){var h=k("months"),p=(k("monthsShort")||h.map(function(R){return R.slice(0,3)})).indexOf(v)+1;if(p<1)throw new Error;this.month=p%12||p}],MMMM:[i,function(v){var h=k("months").indexOf(v)+1;if(h<1)throw new Error;this.month=h%12||h}],Y:[/[+-]?\d+/,u("year")],YY:[s,function(v){this.year=d(v)}],YYYY:[/\d{4}/,u("year")],Z:g,ZZ:g};function f(v){var h,p;h=v,p=l&&l.formats;for(var R=(v=h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(q,B,L){var I=L&&L.toUpperCase();return B||p[L]||r[L]||p[I].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(V,H,C){return H||C.slice(1)})})).match(t),S=R.length,_=0;_<S;_+=1){var O=R[_],A=c[O],D=A&&A[0],K=A&&A[1];R[_]=K?{regex:D,parser:K}:O.replace(/^\[|\]$/g,"")}return function(q){for(var B={},L=0,I=0;L<S;L+=1){var V=R[L];if(typeof V=="string")I+=V.length;else{var H=V.regex,C=V.parser,M=q.slice(I),P=H.exec(M)[0];C.call(B,P),q=q.replace(P,"")}}return function(te){var ie=te.afternoon;if(ie!==void 0){var he=te.hours;ie?he<12&&(te.hours+=12):he===12&&(te.hours=0),delete te.afternoon}}(B),B}}return function(v,h,p){p.p.customParseFormat=!0,v&&v.parseTwoDigitYear&&(d=v.parseTwoDigitYear);var R=h.prototype,S=R.parse;R.parse=function(_){var O=_.date,A=_.utc,D=_.args;this.$u=A;var K=D[1];if(typeof K=="string"){var q=D[2]===!0,B=D[3]===!0,L=q||B,I=D[2];B&&(I=D[2]),l=this.$locale(),!q&&I&&(l=p.Ls[I]),this.$d=function(M,P,te,ie){try{if(["x","X"].indexOf(P)>-1)return new Date((P==="X"?1e3:1)*M);var he=f(P)(M),_r=he.year,Ar=he.month,At=he.day,se=he.hours,ee=he.minutes,Ge=he.seconds,$e=he.milliseconds,St=he.zone,Ea=he.week,Ur=new Date,Nt=At||(_r||Ar?1:Ur.getDate()),Hr=_r||Ur.getFullYear(),Sr=0;_r&&!Ar||(Sr=Ar>0?Ar-1:Ur.getMonth());var Dt,pa=se||0,ya=ee||0,b=Ge||0,N=$e||0;return St?new Date(Date.UTC(Hr,Sr,Nt,pa,ya,b,N+60*St.offset*1e3)):te?new Date(Date.UTC(Hr,Sr,Nt,pa,ya,b,N)):(Dt=new Date(Hr,Sr,Nt,pa,ya,b,N),Ea&&(Dt=ie(Dt).week(Ea).toDate()),Dt)}catch{return new Date("")}}(O,K,A,p),this.init(),I&&I!==!0&&(this.$L=this.locale(I).$L),L&&O!=this.format(K)&&(this.$d=new Date("")),l={}}else if(K instanceof Array)for(var V=K.length,H=1;H<=V;H+=1){D[1]=K[H-1];var C=p.apply(this,D);if(C.isValid()){this.$d=C.$d,this.$L=C.$L,this.init();break}H===V&&(this.$d=new Date(""))}else S.call(this,_)}}})}(Vo)),Vo.exports}var hS=TS();const RS=cS(hS),bS="_readOnlyContainer_v0eco_1",_S="_readOnlyContent_v0eco_4",AS="_readOnlyContentCenter_v0eco_7",SS="_textarea_v0eco_11",NS="_space_v0eco_15",Sa={readOnlyContainer:bS,readOnlyContent:_S,readOnlyContentCenter:AS,textarea:SS,space:NS},DS=e=>e!=null&&e!=="",Fi=({label:e,value:n,isEdited:r=!1,type:t,hideLabel:a,size:s})=>DS(n)?pe.jsxs("div",{className:Sa.readOnlyContainer,children:[e&&!a&&pe.jsx(on,{size:"small",children:e}),pe.jsx("div",{className:t==="textarea"?Sa.textarea:"",children:pe.jsxs(ig,{className:Sa.readOnlyContent,size:s,children:[n,r&&pe.jsx(qk,{className:Sa.space})]})})]}):null;we.extend(RS);const OS=({name:e,label:n,description:r,validate:t=[],disabled:a=!1,isReadOnly:s=!1,onChange:o,disabledDays:i,isEdited:l,defaultMonth:d,fromDate:u,toDate:g,size:k="small"})=>{const{formState:{errors:m}}=Vr(),{field:c}=gs({name:e,rules:{validate:E.useMemo(()=>As(t),[t])}}),f=c.value?we(c.value,Tn,!0).format(er):"",[v,h]=E.useState(f),{datepickerProps:p,inputProps:R}=R_({onDateChange:O=>{if(O!==void 0){const A=we(O).format(Tn);o&&o(A),c.onChange(A),h(we(A,Tn,!0).format(er))}},defaultSelected:c.value?we(c.value,Tn,!0).toDate():void 0,defaultMonth:d||(!c.value&&g?g:void 0),disabled:i}),S=E.useCallback(O=>{const A=we(O.target.value,er,!0).format(Tn),D=A!=="Invalid Date";h(O.target.value),o&&o(D?A:O.target.value),c.onChange(D?A:O.target.value)},[h,o,c]);if(s)return pe.jsx(Fi,{label:n,value:c.value?we(c.value,Tn,!0).format(er):void 0,isEdited:l,size:k});const _={...p,fromDate:u,toDate:g,dropdownCaption:u&&g?!0:void 0};return pe.jsx(Qa,{..._,children:pe.jsx(Qa.Input,{...R,onChange:S,value:v,size:k,label:n,description:r,disabled:a,error:Ss(m,e)})})},IS="_hideRadioLabels_1u3xf_1",LS={hideRadioLabels:IS},PS=({label:e,description:n,name:r,validate:t=[],radios:a,onChange:s,disabled:o=!1,isReadOnly:i=!1,isHorizontal:l=!1,parse:d=c=>c,isTrueOrFalseSelection:u=!1,hideLegend:g=!1,hideRadioLabels:k=!1,isEdited:m=!1})=>{const{formState:{errors:c}}=Vr(),{field:f}=gs({name:r,rules:{validate:E.useMemo(()=>As(t),[t])}}),v=u?p=>p==="true":d,h=pe.jsxs(pe.Fragment,{children:[e,i&&m&&pe.jsx(qk,{})]});return pe.jsxs(M_,{name:r,value:f.value!==void 0?f.value:null,onChange:p=>{s&&s(p),f.onChange(p)},size:"small",legend:h,description:n,error:Ss(c,r),className:k?LS.hideRadioLabels:"",hideLegend:g,children:[!l&&a.map(p=>pe.jsxs(E.Fragment,{children:[pe.jsx(Rd,{value:v(p.value),disabled:p.disabled||o||i,children:p.label}),f.value===v(p.value)&&p.element]},p.value)),l&&pe.jsxs(pe.Fragment,{children:[pe.jsx(D_,{gap:"4",children:a.map(p=>pe.jsx(Rd,{value:v(p.value),disabled:p.disabled||o||i,children:p.label},p.value))}),a.filter(p=>f.value===v(p.value)).map(p=>pe.jsx(E.Fragment,{children:p.element},p.value))]})]})},FS=({name:e,label:n,selectValues:r,validate:t=[],readOnly:a=!1,description:s,hideValueOnDisable:o=!1,onChange:i,disabled:l,className:d,hideLabel:u,isEdited:g,size:k})=>{const{formState:{errors:m}}=Vr(),{field:c}=gs({name:e,rules:{validate:E.useMemo(()=>As(t),[t])}});if(a){const h=r.map(R=>R.props).find(R=>R.value===c.value),p=h?h.children:void 0;return pe.jsx(Fi,{value:p,label:n,hideLabel:u,isEdited:g,size:k})}const f=c.value||"",v=!r.map(h=>h.props.value).includes(f)&&f!=="";return v&&console.warn(`No corresponding option found for value '${f}'`),pe.jsxs(Mo,{size:"small",className:d,error:Ss(m,e),label:n,description:s,value:o&&l||v?"":c.value,disabled:l,onChange:h=>{i&&i(h),c.onChange(h)},hideLabel:u,children:[pe.jsx("option",{style:{display:"none"}}),",",r]})},KS="_textAreaFieldWithBadges_bdz0b_1",wS="_etikettWrapper_bdz0b_4",qd={textAreaFieldWithBadges:KS,etikettWrapper:wS},Vd=({name:e,label:n,readOnly:r,maxLength:t,badges:a,validate:s=[],parse:o=g=>g,className:i,description:l,isEdited:d,...u})=>{const{formState:{errors:g}}=Vr(),{field:k}=gs({name:e,rules:{validate:E.useMemo(()=>As(s),[s])}});return r?pe.jsx(Fi,{label:n,value:k.value,type:"textarea",isEdited:d,hideLabel:u.hideLabel}):pe.jsxs("div",{className:a?qd.textAreaFieldWithBadges:null,children:[a&&pe.jsx("div",{className:qd.etikettWrapper,children:a.map(({type:m,titleText:c})=>pe.jsx(qo,{variant:m,size:"small",children:c},c))}),pe.jsx(U_,{size:"small",label:n,description:l,className:i,autoComplete:"off",...k,onChange:m=>k.onChange(m.currentTarget.value!==""?o(m.currentTarget.value):null),value:k.value?k.value:"",error:Ss(g,e),maxLength:t,...u})]})},Vk=({formMethods:e,onSubmit:n,children:r,className:t,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:o}=e;return E.useEffect(()=>()=>{a&&a(o())},[]),pe.jsx(xc,{...e,children:pe.jsx("form",{className:t,onSubmit:n?s(i=>n(i)):void 0,children:r})})};function jk(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jo={exports:{}},MS=jo.exports,jd;function qS(){return jd||(jd=1,function(e,n){(function(r,t){e.exports=t()})(MS,function(){return function(r,t){t.prototype.isSameOrAfter=function(a,s){return this.isSame(a,s)||this.isAfter(a,s)}}})}(jo)),jo.exports}var VS=qS();const jS=jk(VS);var Bo={exports:{}},BS=Bo.exports,Bd;function xS(){return Bd||(Bd=1,function(e,n){(function(r,t){e.exports=t()})(BS,function(){return function(r,t){t.prototype.isSameOrBefore=function(a,s){return this.isSame(a,s)||this.isBefore(a,s)}}})}(Bo)),Bo.exports}var GS=xS();const US=jk(GS),HS="Dato må være før eller lik {limit}",YS="Dato må være etter eller lik {limit}",CS="Perioder kan ikke overlappe i tid",WS="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",$S="Dato må være lik {value}",JS="Dato må skrives slik: dd.mm.åååå",zS="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",ZS="Tallet kan ikke inneholde mer enn to desimaler",XS="Tallet kan ikke ha desimaler",QS="Feltet kan kun inneholde tall",eN="Ugyldig fødselsnummer",nN="Feltet må være et fødselsnummer (11 siffer)",rN="Ugyldig organisasjonsnummer.",tN="Ugyldig organisasjonsnummer eller fødselsnummer",aN="Startdato må være før eller lik sluttdato",sN="Periode er utenfor opptjeningsperioden",oN="Ugyldig saksnummer eller fødselsnummer",iN="Feltet inneholder ugyldige tegn: {text}",lN="Feltet inneholder en ugyldig verdi: {value}",dN="Feltet kan ikke inneholde mellomrom",uN="Feltet må fylles ut",gN="Du kan skrive maksimalt {length} tegn",kN="Du må skrive minst {length} tegn",mN="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",fN="Feltet må være mindre eller lik {length}",vN="Feltet må være større eller lik {length}",cN="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",EN={DateNotBeforeOrEqual:HS,DateNotAfterOrEqual:YS,DateRangesOverlapping:CS,DateRangesOverlappingPeriodTypes:WS,DatesNotEqual:$S,InvalidDate:JS,InvalidDatesInPeriod:zS,InvalidDecimal:ZS,InvalidInteger:XS,InvalidNumber:QS,InvalidFodselsnr:eN,InvalidFodselsnrFormat:nN,InvalidOrgnr:rN,InvalidOrgnrOrFodselsnr:tN,InvalidPeriod:aN,InvalidPeriodRange:sN,InvalidSaksnrOrFodselsnrFormat:oN,InvalidText:iN,InvalidValue:lN,IllegalWhiteSpace:dN,IsRequired:uN,MaxLength:gN,MinLength:kN,MaxLengthOrFodselsnr:mN,MaxValue:fN,MinValue:vN,SammeFodselsnrSomSoker:cN},{formatMessage:xr}=Ce(EN),pN=e=>xr({id:"DateNotBeforeOrEqual"},{limit:e}),yN=e=>xr({id:"DateNotAfterOrEqual"},{limit:e}),TN=()=>xr({id:"InvalidDate"}),hN=e=>xr({id:"InvalidText"},{text:e}),RN=()=>xr({id:"IsRequired"}),bN=e=>xr({id:"MaxLength"},{length:e}),_N=e=>xr({id:"MinLength"},{length:e}),AN=/(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|1\d|2\d|3[01])$/,SN=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,NN=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,ht=e=>e==null||e.toString().trim().length===0,DN=()=>we().subtract(1,"days").startOf("day"),ON=()=>we().startOf("day");we.extend(jS);we.extend(US);const xt=e=>ht(e)?RN():void 0,IN=e=>n=>ht(n)||n.toString().trim().length>=e?null:_N(e),LN=e=>n=>ht(n)||n.toString().trim().length<=e?null:bN(e),PN=e=>ht(e)||AN.test(e)?null:TN(),FN=e=>n=>{const r=we(e).endOf("day");return ht(n)||we(n).isSameOrBefore(r)?null:pN(r.format(er))},KN=e=>n=>{const r=we(e).startOf("day");return ht(n)||we(n).isSameOrAfter(r)?null:yN(r.format(er))},xd=e=>FN(DN())(e),wN=e=>KN(ON())(e),Gd=e=>{if(!SN.test(e)){const n=e.replace(NN,"");return hN(n.replace(/[\t]/g,"Tabulatortegn"))}return null},MN=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const n=document.createAttribute("tabindex");n.value="-1";const r=e[0];r.setAttributeNode(n),document.activeElement.blur(),r.focus()}},300)};var so={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ud;function qN(){return Ud||(Ud=1,function(e){(function(){var n={}.hasOwnProperty;function r(){for(var s="",o=0;o<arguments.length;o++){var i=arguments[o];i&&(s=a(s,t(i)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var i in s)n.call(s,i)&&s[i]&&(o=a(o,i));return o}function a(s,o){return o?s?s+" "+o:s+o:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(so)),so.exports}var VN=qN();const jN=jm(VN);//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Bk;function U(){return Bk.apply(null,arguments)}function BN(e){Bk=e}function On(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Fr(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function me(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function Ki(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var n;for(n in e)if(me(e,n))return!1;return!0}function rn(e){return e===void 0}function ir(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function ka(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function xk(e,n){var r=[],t,a=e.length;for(t=0;t<a;++t)r.push(n(e[t],t));return r}function cr(e,n){for(var r in n)me(n,r)&&(e[r]=n[r]);return me(n,"toString")&&(e.toString=n.toString),me(n,"valueOf")&&(e.valueOf=n.valueOf),e}function $n(e,n,r,t){return um(e,n,r,t,!0).utc()}function xN(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function ne(e){return e._pf==null&&(e._pf=xN()),e._pf}var xo;Array.prototype.some?xo=Array.prototype.some:xo=function(e){var n=Object(this),r=n.length>>>0,t;for(t=0;t<r;t++)if(t in n&&e.call(this,n[t],t,n))return!0;return!1};function wi(e){var n=null,r=!1,t=e._d&&!isNaN(e._d.getTime());if(t&&(n=ne(e),r=xo.call(n.parsedDateParts,function(a){return a!=null}),t=n.overflow<0&&!n.empty&&!n.invalidEra&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&r),e._strict&&(t=t&&n.charsLeftOver===0&&n.unusedTokens.length===0&&n.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=t;else return t;return e._isValid}function Ns(e){var n=$n(NaN);return e!=null?cr(ne(n),e):ne(n).userInvalidated=!0,n}var Hd=U.momentProperties=[],oo=!1;function Mi(e,n){var r,t,a,s=Hd.length;if(rn(n._isAMomentObject)||(e._isAMomentObject=n._isAMomentObject),rn(n._i)||(e._i=n._i),rn(n._f)||(e._f=n._f),rn(n._l)||(e._l=n._l),rn(n._strict)||(e._strict=n._strict),rn(n._tzm)||(e._tzm=n._tzm),rn(n._isUTC)||(e._isUTC=n._isUTC),rn(n._offset)||(e._offset=n._offset),rn(n._pf)||(e._pf=ne(n)),rn(n._locale)||(e._locale=n._locale),s>0)for(r=0;r<s;r++)t=Hd[r],a=n[t],rn(a)||(e[t]=a);return e}function ma(e){Mi(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),oo===!1&&(oo=!0,U.updateOffset(this),oo=!1)}function In(e){return e instanceof ma||e!=null&&e._isAMomentObject!=null}function Gk(e){U.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function pn(e,n){var r=!0;return cr(function(){if(U.deprecationHandler!=null&&U.deprecationHandler(null,e),r){var t=[],a,s,o,i=arguments.length;for(s=0;s<i;s++){if(a="",typeof arguments[s]=="object"){a+=`
[`+s+"] ";for(o in arguments[0])me(arguments[0],o)&&(a+=o+": "+arguments[0][o]+", ");a=a.slice(0,-2)}else a=arguments[s];t.push(a)}Gk(e+`
Arguments: `+Array.prototype.slice.call(t).join("")+`
`+new Error().stack),r=!1}return n.apply(this,arguments)},n)}var Yd={};function Uk(e,n){U.deprecationHandler!=null&&U.deprecationHandler(e,n),Yd[e]||(Gk(n),Yd[e]=!0)}U.suppressDeprecationWarnings=!1;U.deprecationHandler=null;function Jn(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function GN(e){var n,r;for(r in e)me(e,r)&&(n=e[r],Jn(n)?this[r]=n:this["_"+r]=n);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Go(e,n){var r=cr({},e),t;for(t in n)me(n,t)&&(Fr(e[t])&&Fr(n[t])?(r[t]={},cr(r[t],e[t]),cr(r[t],n[t])):n[t]!=null?r[t]=n[t]:delete r[t]);for(t in e)me(e,t)&&!me(n,t)&&Fr(e[t])&&(r[t]=cr({},r[t]));return r}function qi(e){e!=null&&this.set(e)}var Uo;Object.keys?Uo=Object.keys:Uo=function(e){var n,r=[];for(n in e)me(e,n)&&r.push(n);return r};var UN={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function HN(e,n,r){var t=this._calendar[e]||this._calendar.sameElse;return Jn(t)?t.call(n,r):t}function Cn(e,n,r){var t=""+Math.abs(e),a=n-t.length,s=e>=0;return(s?r?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+t}var Vi=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Na=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,io={},rt={};function z(e,n,r,t){var a=t;typeof t=="string"&&(a=function(){return this[t]()}),e&&(rt[e]=a),n&&(rt[n[0]]=function(){return Cn(a.apply(this,arguments),n[1],n[2])}),r&&(rt[r]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function YN(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function CN(e){var n=e.match(Vi),r,t;for(r=0,t=n.length;r<t;r++)rt[n[r]]?n[r]=rt[n[r]]:n[r]=YN(n[r]);return function(a){var s="",o;for(o=0;o<t;o++)s+=Jn(n[o])?n[o].call(a,e):n[o];return s}}function wa(e,n){return e.isValid()?(n=Hk(n,e.localeData()),io[n]=io[n]||CN(n),io[n](e)):e.localeData().invalidDate()}function Hk(e,n){var r=5;function t(a){return n.longDateFormat(a)||a}for(Na.lastIndex=0;r>=0&&Na.test(e);)e=e.replace(Na,t),Na.lastIndex=0,r-=1;return e}var WN={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function $N(e){var n=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return n||!r?n:(this._longDateFormat[e]=r.match(Vi).map(function(t){return t==="MMMM"||t==="MM"||t==="DD"||t==="dddd"?t.slice(1):t}).join(""),this._longDateFormat[e])}var JN="Invalid date";function zN(){return this._invalidDate}var ZN="%d",XN=/\d{1,2}/;function QN(e){return this._ordinal.replace("%d",e)}var eD={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function nD(e,n,r,t){var a=this._relativeTime[r];return Jn(a)?a(e,n,r,t):a.replace(/%d/i,e)}function rD(e,n){var r=this._relativeTime[e>0?"future":"past"];return Jn(r)?r(n):r.replace(/%s/i,n)}var Cd={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function yn(e){return typeof e=="string"?Cd[e]||Cd[e.toLowerCase()]:void 0}function ji(e){var n={},r,t;for(t in e)me(e,t)&&(r=yn(t),r&&(n[r]=e[t]));return n}var tD={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function aD(e){var n=[],r;for(r in e)me(e,r)&&n.push({unit:r,priority:tD[r]});return n.sort(function(t,a){return t.priority-a.priority}),n}var Yk=/\d/,un=/\d\d/,Ck=/\d{3}/,Bi=/\d{4}/,Ds=/[+-]?\d{6}/,Se=/\d\d?/,Wk=/\d\d\d\d?/,$k=/\d\d\d\d\d\d?/,Os=/\d{1,3}/,xi=/\d{1,4}/,Is=/[+-]?\d{1,6}/,Rt=/\d+/,Ls=/[+-]?\d+/,sD=/Z|[+-]\d\d:?\d\d/gi,Ps=/Z|[+-]\d\d(?::?\d\d)?/gi,oD=/[+-]?\d+(\.\d{1,3})?/,fa=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,bt=/^[1-9]\d?/,Gi=/^([1-9]\d|\d)/,ts;ts={};function $(e,n,r){ts[e]=Jn(n)?n:function(t,a){return t&&r?r:n}}function iD(e,n){return me(ts,e)?ts[e](n._strict,n._locale):new RegExp(lD(e))}function lD(e){return tr(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(n,r,t,a,s){return r||t||a||s}))}function tr(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function mn(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function oe(e){var n=+e,r=0;return n!==0&&isFinite(n)&&(r=mn(n)),r}var Ho={};function Te(e,n){var r,t=n,a;for(typeof e=="string"&&(e=[e]),ir(n)&&(t=function(s,o){o[n]=oe(s)}),a=e.length,r=0;r<a;r++)Ho[e[r]]=t}function va(e,n){Te(e,function(r,t,a,s){a._w=a._w||{},n(r,a._w,a,s)})}function dD(e,n,r){n!=null&&me(Ho,e)&&Ho[e](n,r._a,r,e)}function Fs(e){return e%4===0&&e%100!==0||e%400===0}var We=0,nr=1,Bn=2,xe=3,_n=4,rr=5,Lr=6,uD=7,gD=8;z("Y",0,0,function(){var e=this.year();return e<=9999?Cn(e,4):"+"+e});z(0,["YY",2],0,function(){return this.year()%100});z(0,["YYYY",4],0,"year");z(0,["YYYYY",5],0,"year");z(0,["YYYYYY",6,!0],0,"year");$("Y",Ls);$("YY",Se,un);$("YYYY",xi,Bi);$("YYYYY",Is,Ds);$("YYYYYY",Is,Ds);Te(["YYYYY","YYYYYY"],We);Te("YYYY",function(e,n){n[We]=e.length===2?U.parseTwoDigitYear(e):oe(e)});Te("YY",function(e,n){n[We]=U.parseTwoDigitYear(e)});Te("Y",function(e,n){n[We]=parseInt(e,10)});function Gt(e){return Fs(e)?366:365}U.parseTwoDigitYear=function(e){return oe(e)+(oe(e)>68?1900:2e3)};var Jk=_t("FullYear",!0);function kD(){return Fs(this.year())}function _t(e,n){return function(r){return r!=null?(zk(this,e,r),U.updateOffset(this,n),this):$t(this,e)}}function $t(e,n){if(!e.isValid())return NaN;var r=e._d,t=e._isUTC;switch(n){case"Milliseconds":return t?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return t?r.getUTCSeconds():r.getSeconds();case"Minutes":return t?r.getUTCMinutes():r.getMinutes();case"Hours":return t?r.getUTCHours():r.getHours();case"Date":return t?r.getUTCDate():r.getDate();case"Day":return t?r.getUTCDay():r.getDay();case"Month":return t?r.getUTCMonth():r.getMonth();case"FullYear":return t?r.getUTCFullYear():r.getFullYear();default:return NaN}}function zk(e,n,r){var t,a,s,o,i;if(!(!e.isValid()||isNaN(r))){switch(t=e._d,a=e._isUTC,n){case"Milliseconds":return void(a?t.setUTCMilliseconds(r):t.setMilliseconds(r));case"Seconds":return void(a?t.setUTCSeconds(r):t.setSeconds(r));case"Minutes":return void(a?t.setUTCMinutes(r):t.setMinutes(r));case"Hours":return void(a?t.setUTCHours(r):t.setHours(r));case"Date":return void(a?t.setUTCDate(r):t.setDate(r));case"FullYear":break;default:return}s=r,o=e.month(),i=e.date(),i=i===29&&o===1&&!Fs(s)?28:i,a?t.setUTCFullYear(s,o,i):t.setFullYear(s,o,i)}}function mD(e){return e=yn(e),Jn(this[e])?this[e]():this}function fD(e,n){if(typeof e=="object"){e=ji(e);var r=aD(e),t,a=r.length;for(t=0;t<a;t++)this[r[t].unit](e[r[t].unit])}else if(e=yn(e),Jn(this[e]))return this[e](n);return this}function vD(e,n){return(e%n+n)%n}var Fe;Array.prototype.indexOf?Fe=Array.prototype.indexOf:Fe=function(e){var n;for(n=0;n<this.length;++n)if(this[n]===e)return n;return-1};function Ui(e,n){if(isNaN(e)||isNaN(n))return NaN;var r=vD(n,12);return e+=(n-r)/12,r===1?Fs(e)?29:28:31-r%7%2}z("M",["MM",2],"Mo",function(){return this.month()+1});z("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});z("MMMM",0,0,function(e){return this.localeData().months(this,e)});$("M",Se,bt);$("MM",Se,un);$("MMM",function(e,n){return n.monthsShortRegex(e)});$("MMMM",function(e,n){return n.monthsRegex(e)});Te(["M","MM"],function(e,n){n[nr]=oe(e)-1});Te(["MMM","MMMM"],function(e,n,r,t){var a=r._locale.monthsParse(e,t,r._strict);a!=null?n[nr]=a:ne(r).invalidMonth=e});var cD="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Zk="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Xk=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,ED=fa,pD=fa;function yD(e,n){return e?On(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Xk).test(n)?"format":"standalone"][e.month()]:On(this._months)?this._months:this._months.standalone}function TD(e,n){return e?On(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Xk.test(n)?"format":"standalone"][e.month()]:On(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function hD(e,n,r){var t,a,s,o=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],t=0;t<12;++t)s=$n([2e3,t]),this._shortMonthsParse[t]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[t]=this.months(s,"").toLocaleLowerCase();return r?n==="MMM"?(a=Fe.call(this._shortMonthsParse,o),a!==-1?a:null):(a=Fe.call(this._longMonthsParse,o),a!==-1?a:null):n==="MMM"?(a=Fe.call(this._shortMonthsParse,o),a!==-1?a:(a=Fe.call(this._longMonthsParse,o),a!==-1?a:null)):(a=Fe.call(this._longMonthsParse,o),a!==-1?a:(a=Fe.call(this._shortMonthsParse,o),a!==-1?a:null))}function RD(e,n,r){var t,a,s;if(this._monthsParseExact)return hD.call(this,e,n,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),t=0;t<12;t++){if(a=$n([2e3,t]),r&&!this._longMonthsParse[t]&&(this._longMonthsParse[t]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[t]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!r&&!this._monthsParse[t]&&(s="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[t]=new RegExp(s.replace(".",""),"i")),r&&n==="MMMM"&&this._longMonthsParse[t].test(e))return t;if(r&&n==="MMM"&&this._shortMonthsParse[t].test(e))return t;if(!r&&this._monthsParse[t].test(e))return t}}function Qk(e,n){if(!e.isValid())return e;if(typeof n=="string"){if(/^\d+$/.test(n))n=oe(n);else if(n=e.localeData().monthsParse(n),!ir(n))return e}var r=n,t=e.date();return t=t<29?t:Math.min(t,Ui(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,t):e._d.setMonth(r,t),e}function em(e){return e!=null?(Qk(this,e),U.updateOffset(this,!0),this):$t(this,"Month")}function bD(){return Ui(this.year(),this.month())}function _D(e){return this._monthsParseExact?(me(this,"_monthsRegex")||nm.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(me(this,"_monthsShortRegex")||(this._monthsShortRegex=ED),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function AD(e){return this._monthsParseExact?(me(this,"_monthsRegex")||nm.call(this),e?this._monthsStrictRegex:this._monthsRegex):(me(this,"_monthsRegex")||(this._monthsRegex=pD),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function nm(){function e(l,d){return d.length-l.length}var n=[],r=[],t=[],a,s,o,i;for(a=0;a<12;a++)s=$n([2e3,a]),o=tr(this.monthsShort(s,"")),i=tr(this.months(s,"")),n.push(o),r.push(i),t.push(i),t.push(o);n.sort(e),r.sort(e),t.sort(e),this._monthsRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function SD(e,n,r,t,a,s,o){var i;return e<100&&e>=0?(i=new Date(e+400,n,r,t,a,s,o),isFinite(i.getFullYear())&&i.setFullYear(e)):i=new Date(e,n,r,t,a,s,o),i}function Jt(e){var n,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,n=new Date(Date.UTC.apply(null,r)),isFinite(n.getUTCFullYear())&&n.setUTCFullYear(e)):n=new Date(Date.UTC.apply(null,arguments)),n}function as(e,n,r){var t=7+n-r,a=(7+Jt(e,0,t).getUTCDay()-n)%7;return-a+t-1}function rm(e,n,r,t,a){var s=(7+r-t)%7,o=as(e,t,a),i=1+7*(n-1)+s+o,l,d;return i<=0?(l=e-1,d=Gt(l)+i):i>Gt(e)?(l=e+1,d=i-Gt(e)):(l=e,d=i),{year:l,dayOfYear:d}}function zt(e,n,r){var t=as(e.year(),n,r),a=Math.floor((e.dayOfYear()-t-1)/7)+1,s,o;return a<1?(o=e.year()-1,s=a+ar(o,n,r)):a>ar(e.year(),n,r)?(s=a-ar(e.year(),n,r),o=e.year()+1):(o=e.year(),s=a),{week:s,year:o}}function ar(e,n,r){var t=as(e,n,r),a=as(e+1,n,r);return(Gt(e)-t+a)/7}z("w",["ww",2],"wo","week");z("W",["WW",2],"Wo","isoWeek");$("w",Se,bt);$("ww",Se,un);$("W",Se,bt);$("WW",Se,un);va(["w","ww","W","WW"],function(e,n,r,t){n[t.substr(0,1)]=oe(e)});function ND(e){return zt(e,this._week.dow,this._week.doy).week}var DD={dow:0,doy:6};function OD(){return this._week.dow}function ID(){return this._week.doy}function LD(e){var n=this.localeData().week(this);return e==null?n:this.add((e-n)*7,"d")}function PD(e){var n=zt(this,1,4).week;return e==null?n:this.add((e-n)*7,"d")}z("d",0,"do","day");z("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});z("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});z("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});z("e",0,0,"weekday");z("E",0,0,"isoWeekday");$("d",Se);$("e",Se);$("E",Se);$("dd",function(e,n){return n.weekdaysMinRegex(e)});$("ddd",function(e,n){return n.weekdaysShortRegex(e)});$("dddd",function(e,n){return n.weekdaysRegex(e)});va(["dd","ddd","dddd"],function(e,n,r,t){var a=r._locale.weekdaysParse(e,t,r._strict);a!=null?n.d=a:ne(r).invalidWeekday=e});va(["d","e","E"],function(e,n,r,t){n[t]=oe(e)});function FD(e,n){return typeof e!="string"?e:isNaN(e)?(e=n.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function KD(e,n){return typeof e=="string"?n.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Hi(e,n){return e.slice(n,7).concat(e.slice(0,n))}var wD="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),tm="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),MD="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),qD=fa,VD=fa,jD=fa;function BD(e,n){var r=On(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(n)?"format":"standalone"];return e===!0?Hi(r,this._week.dow):e?r[e.day()]:r}function xD(e){return e===!0?Hi(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function GD(e){return e===!0?Hi(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function UD(e,n,r){var t,a,s,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],t=0;t<7;++t)s=$n([2e3,1]).day(t),this._minWeekdaysParse[t]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[t]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[t]=this.weekdays(s,"").toLocaleLowerCase();return r?n==="dddd"?(a=Fe.call(this._weekdaysParse,o),a!==-1?a:null):n==="ddd"?(a=Fe.call(this._shortWeekdaysParse,o),a!==-1?a:null):(a=Fe.call(this._minWeekdaysParse,o),a!==-1?a:null):n==="dddd"?(a=Fe.call(this._weekdaysParse,o),a!==-1||(a=Fe.call(this._shortWeekdaysParse,o),a!==-1)?a:(a=Fe.call(this._minWeekdaysParse,o),a!==-1?a:null)):n==="ddd"?(a=Fe.call(this._shortWeekdaysParse,o),a!==-1||(a=Fe.call(this._weekdaysParse,o),a!==-1)?a:(a=Fe.call(this._minWeekdaysParse,o),a!==-1?a:null)):(a=Fe.call(this._minWeekdaysParse,o),a!==-1||(a=Fe.call(this._weekdaysParse,o),a!==-1)?a:(a=Fe.call(this._shortWeekdaysParse,o),a!==-1?a:null))}function HD(e,n,r){var t,a,s;if(this._weekdaysParseExact)return UD.call(this,e,n,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),t=0;t<7;t++){if(a=$n([2e3,1]).day(t),r&&!this._fullWeekdaysParse[t]&&(this._fullWeekdaysParse[t]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[t]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[t]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[t]||(s="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[t]=new RegExp(s.replace(".",""),"i")),r&&n==="dddd"&&this._fullWeekdaysParse[t].test(e))return t;if(r&&n==="ddd"&&this._shortWeekdaysParse[t].test(e))return t;if(r&&n==="dd"&&this._minWeekdaysParse[t].test(e))return t;if(!r&&this._weekdaysParse[t].test(e))return t}}function YD(e){if(!this.isValid())return e!=null?this:NaN;var n=$t(this,"Day");return e!=null?(e=FD(e,this.localeData()),this.add(e-n,"d")):n}function CD(e){if(!this.isValid())return e!=null?this:NaN;var n=(this.day()+7-this.localeData()._week.dow)%7;return e==null?n:this.add(e-n,"d")}function WD(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var n=KD(e,this.localeData());return this.day(this.day()%7?n:n-7)}else return this.day()||7}function $D(e){return this._weekdaysParseExact?(me(this,"_weekdaysRegex")||Yi.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(me(this,"_weekdaysRegex")||(this._weekdaysRegex=qD),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function JD(e){return this._weekdaysParseExact?(me(this,"_weekdaysRegex")||Yi.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(me(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=VD),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function zD(e){return this._weekdaysParseExact?(me(this,"_weekdaysRegex")||Yi.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(me(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=jD),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Yi(){function e(u,g){return g.length-u.length}var n=[],r=[],t=[],a=[],s,o,i,l,d;for(s=0;s<7;s++)o=$n([2e3,1]).day(s),i=tr(this.weekdaysMin(o,"")),l=tr(this.weekdaysShort(o,"")),d=tr(this.weekdays(o,"")),n.push(i),r.push(l),t.push(d),a.push(i),a.push(l),a.push(d);n.sort(e),r.sort(e),t.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")}function Ci(){return this.hours()%12||12}function ZD(){return this.hours()||24}z("H",["HH",2],0,"hour");z("h",["hh",2],0,Ci);z("k",["kk",2],0,ZD);z("hmm",0,0,function(){return""+Ci.apply(this)+Cn(this.minutes(),2)});z("hmmss",0,0,function(){return""+Ci.apply(this)+Cn(this.minutes(),2)+Cn(this.seconds(),2)});z("Hmm",0,0,function(){return""+this.hours()+Cn(this.minutes(),2)});z("Hmmss",0,0,function(){return""+this.hours()+Cn(this.minutes(),2)+Cn(this.seconds(),2)});function am(e,n){z(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),n)})}am("a",!0);am("A",!1);function sm(e,n){return n._meridiemParse}$("a",sm);$("A",sm);$("H",Se,Gi);$("h",Se,bt);$("k",Se,bt);$("HH",Se,un);$("hh",Se,un);$("kk",Se,un);$("hmm",Wk);$("hmmss",$k);$("Hmm",Wk);$("Hmmss",$k);Te(["H","HH"],xe);Te(["k","kk"],function(e,n,r){var t=oe(e);n[xe]=t===24?0:t});Te(["a","A"],function(e,n,r){r._isPm=r._locale.isPM(e),r._meridiem=e});Te(["h","hh"],function(e,n,r){n[xe]=oe(e),ne(r).bigHour=!0});Te("hmm",function(e,n,r){var t=e.length-2;n[xe]=oe(e.substr(0,t)),n[_n]=oe(e.substr(t)),ne(r).bigHour=!0});Te("hmmss",function(e,n,r){var t=e.length-4,a=e.length-2;n[xe]=oe(e.substr(0,t)),n[_n]=oe(e.substr(t,2)),n[rr]=oe(e.substr(a)),ne(r).bigHour=!0});Te("Hmm",function(e,n,r){var t=e.length-2;n[xe]=oe(e.substr(0,t)),n[_n]=oe(e.substr(t))});Te("Hmmss",function(e,n,r){var t=e.length-4,a=e.length-2;n[xe]=oe(e.substr(0,t)),n[_n]=oe(e.substr(t,2)),n[rr]=oe(e.substr(a))});function XD(e){return(e+"").toLowerCase().charAt(0)==="p"}var QD=/[ap]\.?m?\.?/i,eO=_t("Hours",!0);function nO(e,n,r){return e>11?r?"pm":"PM":r?"am":"AM"}var om={calendar:UN,longDateFormat:WN,invalidDate:JN,ordinal:ZN,dayOfMonthOrdinalParse:XN,relativeTime:eD,months:cD,monthsShort:Zk,week:DD,weekdays:wD,weekdaysMin:MD,weekdaysShort:tm,meridiemParse:QD},Ne={},Kt={},Zt;function rO(e,n){var r,t=Math.min(e.length,n.length);for(r=0;r<t;r+=1)if(e[r]!==n[r])return r;return t}function Wd(e){return e&&e.toLowerCase().replace("_","-")}function tO(e){for(var n=0,r,t,a,s;n<e.length;){for(s=Wd(e[n]).split("-"),r=s.length,t=Wd(e[n+1]),t=t?t.split("-"):null;r>0;){if(a=Ks(s.slice(0,r).join("-")),a)return a;if(t&&t.length>=r&&rO(s,t)>=r-1)break;r--}n++}return Zt}function aO(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Ks(e){var n=null,r;if(Ne[e]===void 0&&typeof module<"u"&&module&&module.exports&&aO(e))try{n=Zt._abbr,r=require,r("./locale/"+e),Tr(n)}catch{Ne[e]=null}return Ne[e]}function Tr(e,n){var r;return e&&(rn(n)?r=dr(e):r=Wi(e,n),r?Zt=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Zt._abbr}function Wi(e,n){if(n!==null){var r,t=om;if(n.abbr=e,Ne[e]!=null)Uk("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=Ne[e]._config;else if(n.parentLocale!=null)if(Ne[n.parentLocale]!=null)t=Ne[n.parentLocale]._config;else if(r=Ks(n.parentLocale),r!=null)t=r._config;else return Kt[n.parentLocale]||(Kt[n.parentLocale]=[]),Kt[n.parentLocale].push({name:e,config:n}),null;return Ne[e]=new qi(Go(t,n)),Kt[e]&&Kt[e].forEach(function(a){Wi(a.name,a.config)}),Tr(e),Ne[e]}else return delete Ne[e],null}function sO(e,n){if(n!=null){var r,t,a=om;Ne[e]!=null&&Ne[e].parentLocale!=null?Ne[e].set(Go(Ne[e]._config,n)):(t=Ks(e),t!=null&&(a=t._config),n=Go(a,n),t==null&&(n.abbr=e),r=new qi(n),r.parentLocale=Ne[e],Ne[e]=r),Tr(e)}else Ne[e]!=null&&(Ne[e].parentLocale!=null?(Ne[e]=Ne[e].parentLocale,e===Tr()&&Tr(e)):Ne[e]!=null&&delete Ne[e]);return Ne[e]}function dr(e){var n;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Zt;if(!On(e)){if(n=Ks(e),n)return n;e=[e]}return tO(e)}function oO(){return Uo(Ne)}function $i(e){var n,r=e._a;return r&&ne(e).overflow===-2&&(n=r[nr]<0||r[nr]>11?nr:r[Bn]<1||r[Bn]>Ui(r[We],r[nr])?Bn:r[xe]<0||r[xe]>24||r[xe]===24&&(r[_n]!==0||r[rr]!==0||r[Lr]!==0)?xe:r[_n]<0||r[_n]>59?_n:r[rr]<0||r[rr]>59?rr:r[Lr]<0||r[Lr]>999?Lr:-1,ne(e)._overflowDayOfYear&&(n<We||n>Bn)&&(n=Bn),ne(e)._overflowWeeks&&n===-1&&(n=uD),ne(e)._overflowWeekday&&n===-1&&(n=gD),ne(e).overflow=n),e}var iO=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,lO=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,dO=/Z|[+-]\d\d(?::?\d\d)?/,Da=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],lo=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],uO=/^\/?Date\((-?\d+)/i,gO=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,kO={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function im(e){var n,r,t=e._i,a=iO.exec(t)||lO.exec(t),s,o,i,l,d=Da.length,u=lo.length;if(a){for(ne(e).iso=!0,n=0,r=d;n<r;n++)if(Da[n][1].exec(a[1])){o=Da[n][0],s=Da[n][2]!==!1;break}if(o==null){e._isValid=!1;return}if(a[3]){for(n=0,r=u;n<r;n++)if(lo[n][1].exec(a[3])){i=(a[2]||" ")+lo[n][0];break}if(i==null){e._isValid=!1;return}}if(!s&&i!=null){e._isValid=!1;return}if(a[4])if(dO.exec(a[4]))l="Z";else{e._isValid=!1;return}e._f=o+(i||"")+(l||""),zi(e)}else e._isValid=!1}function mO(e,n,r,t,a,s){var o=[fO(e),Zk.indexOf(n),parseInt(r,10),parseInt(t,10),parseInt(a,10)];return s&&o.push(parseInt(s,10)),o}function fO(e){var n=parseInt(e,10);return n<=49?2e3+n:n<=999?1900+n:n}function vO(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function cO(e,n,r){if(e){var t=tm.indexOf(e),a=new Date(n[0],n[1],n[2]).getDay();if(t!==a)return ne(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function EO(e,n,r){if(e)return kO[e];if(n)return 0;var t=parseInt(r,10),a=t%100,s=(t-a)/100;return s*60+a}function lm(e){var n=gO.exec(vO(e._i)),r;if(n){if(r=mO(n[4],n[3],n[2],n[5],n[6],n[7]),!cO(n[1],r,e))return;e._a=r,e._tzm=EO(n[8],n[9],n[10]),e._d=Jt.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),ne(e).rfc2822=!0}else e._isValid=!1}function pO(e){var n=uO.exec(e._i);if(n!==null){e._d=new Date(+n[1]);return}if(im(e),e._isValid===!1)delete e._isValid;else return;if(lm(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:U.createFromInputFallback(e)}U.createFromInputFallback=pn("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function zr(e,n,r){return e??n??r}function yO(e){var n=new Date(U.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function Ji(e){var n,r,t=[],a,s,o;if(!e._d){for(a=yO(e),e._w&&e._a[Bn]==null&&e._a[nr]==null&&TO(e),e._dayOfYear!=null&&(o=zr(e._a[We],a[We]),(e._dayOfYear>Gt(o)||e._dayOfYear===0)&&(ne(e)._overflowDayOfYear=!0),r=Jt(o,0,e._dayOfYear),e._a[nr]=r.getUTCMonth(),e._a[Bn]=r.getUTCDate()),n=0;n<3&&e._a[n]==null;++n)e._a[n]=t[n]=a[n];for(;n<7;n++)e._a[n]=t[n]=e._a[n]==null?n===2?1:0:e._a[n];e._a[xe]===24&&e._a[_n]===0&&e._a[rr]===0&&e._a[Lr]===0&&(e._nextDay=!0,e._a[xe]=0),e._d=(e._useUTC?Jt:SD).apply(null,t),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[xe]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(ne(e).weekdayMismatch=!0)}}function TO(e){var n,r,t,a,s,o,i,l,d;n=e._w,n.GG!=null||n.W!=null||n.E!=null?(s=1,o=4,r=zr(n.GG,e._a[We],zt(Ae(),1,4).year),t=zr(n.W,1),a=zr(n.E,1),(a<1||a>7)&&(l=!0)):(s=e._locale._week.dow,o=e._locale._week.doy,d=zt(Ae(),s,o),r=zr(n.gg,e._a[We],d.year),t=zr(n.w,d.week),n.d!=null?(a=n.d,(a<0||a>6)&&(l=!0)):n.e!=null?(a=n.e+s,(n.e<0||n.e>6)&&(l=!0)):a=s),t<1||t>ar(r,s,o)?ne(e)._overflowWeeks=!0:l!=null?ne(e)._overflowWeekday=!0:(i=rm(r,t,a,s,o),e._a[We]=i.year,e._dayOfYear=i.dayOfYear)}U.ISO_8601=function(){};U.RFC_2822=function(){};function zi(e){if(e._f===U.ISO_8601){im(e);return}if(e._f===U.RFC_2822){lm(e);return}e._a=[],ne(e).empty=!0;var n=""+e._i,r,t,a,s,o,i=n.length,l=0,d,u;for(a=Hk(e._f,e._locale).match(Vi)||[],u=a.length,r=0;r<u;r++)s=a[r],t=(n.match(iD(s,e))||[])[0],t&&(o=n.substr(0,n.indexOf(t)),o.length>0&&ne(e).unusedInput.push(o),n=n.slice(n.indexOf(t)+t.length),l+=t.length),rt[s]?(t?ne(e).empty=!1:ne(e).unusedTokens.push(s),dD(s,t,e)):e._strict&&!t&&ne(e).unusedTokens.push(s);ne(e).charsLeftOver=i-l,n.length>0&&ne(e).unusedInput.push(n),e._a[xe]<=12&&ne(e).bigHour===!0&&e._a[xe]>0&&(ne(e).bigHour=void 0),ne(e).parsedDateParts=e._a.slice(0),ne(e).meridiem=e._meridiem,e._a[xe]=hO(e._locale,e._a[xe],e._meridiem),d=ne(e).era,d!==null&&(e._a[We]=e._locale.erasConvertYear(d,e._a[We])),Ji(e),$i(e)}function hO(e,n,r){var t;return r==null?n:e.meridiemHour!=null?e.meridiemHour(n,r):(e.isPM!=null&&(t=e.isPM(r),t&&n<12&&(n+=12),!t&&n===12&&(n=0)),n)}function RO(e){var n,r,t,a,s,o,i=!1,l=e._f.length;if(l===0){ne(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<l;a++)s=0,o=!1,n=Mi({},e),e._useUTC!=null&&(n._useUTC=e._useUTC),n._f=e._f[a],zi(n),wi(n)&&(o=!0),s+=ne(n).charsLeftOver,s+=ne(n).unusedTokens.length*10,ne(n).score=s,i?s<t&&(t=s,r=n):(t==null||s<t||o)&&(t=s,r=n,o&&(i=!0));cr(e,r||n)}function bO(e){if(!e._d){var n=ji(e._i),r=n.day===void 0?n.date:n.day;e._a=xk([n.year,n.month,r,n.hour,n.minute,n.second,n.millisecond],function(t){return t&&parseInt(t,10)}),Ji(e)}}function _O(e){var n=new ma($i(dm(e)));return n._nextDay&&(n.add(1,"d"),n._nextDay=void 0),n}function dm(e){var n=e._i,r=e._f;return e._locale=e._locale||dr(e._l),n===null||r===void 0&&n===""?Ns({nullInput:!0}):(typeof n=="string"&&(e._i=n=e._locale.preparse(n)),In(n)?new ma($i(n)):(ka(n)?e._d=n:On(r)?RO(e):r?zi(e):AO(e),wi(e)||(e._d=null),e))}function AO(e){var n=e._i;rn(n)?e._d=new Date(U.now()):ka(n)?e._d=new Date(n.valueOf()):typeof n=="string"?pO(e):On(n)?(e._a=xk(n.slice(0),function(r){return parseInt(r,10)}),Ji(e)):Fr(n)?bO(e):ir(n)?e._d=new Date(n):U.createFromInputFallback(e)}function um(e,n,r,t,a){var s={};return(n===!0||n===!1)&&(t=n,n=void 0),(r===!0||r===!1)&&(t=r,r=void 0),(Fr(e)&&Ki(e)||On(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=r,s._i=e,s._f=n,s._strict=t,_O(s)}function Ae(e,n,r,t){return um(e,n,r,t,!1)}var SO=pn("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ae.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Ns()}),NO=pn("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ae.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Ns()});function gm(e,n){var r,t;if(n.length===1&&On(n[0])&&(n=n[0]),!n.length)return Ae();for(r=n[0],t=1;t<n.length;++t)(!n[t].isValid()||n[t][e](r))&&(r=n[t]);return r}function DO(){var e=[].slice.call(arguments,0);return gm("isBefore",e)}function OO(){var e=[].slice.call(arguments,0);return gm("isAfter",e)}var IO=function(){return Date.now?Date.now():+new Date},wt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function LO(e){var n,r=!1,t,a=wt.length;for(n in e)if(me(e,n)&&!(Fe.call(wt,n)!==-1&&(e[n]==null||!isNaN(e[n]))))return!1;for(t=0;t<a;++t)if(e[wt[t]]){if(r)return!1;parseFloat(e[wt[t]])!==oe(e[wt[t]])&&(r=!0)}return!0}function PO(){return this._isValid}function FO(){return Fn(NaN)}function ws(e){var n=ji(e),r=n.year||0,t=n.quarter||0,a=n.month||0,s=n.week||n.isoWeek||0,o=n.day||0,i=n.hour||0,l=n.minute||0,d=n.second||0,u=n.millisecond||0;this._isValid=LO(n),this._milliseconds=+u+d*1e3+l*6e4+i*1e3*60*60,this._days=+o+s*7,this._months=+a+t*3+r*12,this._data={},this._locale=dr(),this._bubble()}function Ma(e){return e instanceof ws}function Yo(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function KO(e,n,r){var t=Math.min(e.length,n.length),a=Math.abs(e.length-n.length),s=0,o;for(o=0;o<t;o++)oe(e[o])!==oe(n[o])&&s++;return s+a}function km(e,n){z(e,0,0,function(){var r=this.utcOffset(),t="+";return r<0&&(r=-r,t="-"),t+Cn(~~(r/60),2)+n+Cn(~~r%60,2)})}km("Z",":");km("ZZ","");$("Z",Ps);$("ZZ",Ps);Te(["Z","ZZ"],function(e,n,r){r._useUTC=!0,r._tzm=Zi(Ps,e)});var wO=/([\+\-]|\d\d)/gi;function Zi(e,n){var r=(n||"").match(e),t,a,s;return r===null?null:(t=r[r.length-1]||[],a=(t+"").match(wO)||["-",0,0],s=+(a[1]*60)+oe(a[2]),s===0?0:a[0]==="+"?s:-s)}function Xi(e,n){var r,t;return n._isUTC?(r=n.clone(),t=(In(e)||ka(e)?e.valueOf():Ae(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+t),U.updateOffset(r,!1),r):Ae(e).local()}function Co(e){return-Math.round(e._d.getTimezoneOffset())}U.updateOffset=function(){};function MO(e,n,r){var t=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Zi(Ps,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&n&&(a=Co(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),t!==e&&(!n||this._changeInProgress?vm(this,Fn(e-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,U.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?t:Co(this)}function qO(e,n){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,n),this):-this.utcOffset()}function VO(e){return this.utcOffset(0,e)}function jO(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Co(this),"m")),this}function BO(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Zi(sD,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function xO(e){return this.isValid()?(e=e?Ae(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function GO(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function UO(){if(!rn(this._isDSTShifted))return this._isDSTShifted;var e={},n;return Mi(e,this),e=dm(e),e._a?(n=e._isUTC?$n(e._a):Ae(e._a),this._isDSTShifted=this.isValid()&&KO(e._a,n.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function HO(){return this.isValid()?!this._isUTC:!1}function YO(){return this.isValid()?this._isUTC:!1}function mm(){return this.isValid()?this._isUTC&&this._offset===0:!1}var CO=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,WO=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Fn(e,n){var r=e,t=null,a,s,o;return Ma(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:ir(e)||!isNaN(+e)?(r={},n?r[n]=+e:r.milliseconds=+e):(t=CO.exec(e))?(a=t[1]==="-"?-1:1,r={y:0,d:oe(t[Bn])*a,h:oe(t[xe])*a,m:oe(t[_n])*a,s:oe(t[rr])*a,ms:oe(Yo(t[Lr]*1e3))*a}):(t=WO.exec(e))?(a=t[1]==="-"?-1:1,r={y:Dr(t[2],a),M:Dr(t[3],a),w:Dr(t[4],a),d:Dr(t[5],a),h:Dr(t[6],a),m:Dr(t[7],a),s:Dr(t[8],a)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(o=$O(Ae(r.from),Ae(r.to)),r={},r.ms=o.milliseconds,r.M=o.months),s=new ws(r),Ma(e)&&me(e,"_locale")&&(s._locale=e._locale),Ma(e)&&me(e,"_isValid")&&(s._isValid=e._isValid),s}Fn.fn=ws.prototype;Fn.invalid=FO;function Dr(e,n){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*n}function $d(e,n){var r={};return r.months=n.month()-e.month()+(n.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(n)&&--r.months,r.milliseconds=+n-+e.clone().add(r.months,"M"),r}function $O(e,n){var r;return e.isValid()&&n.isValid()?(n=Xi(n,e),e.isBefore(n)?r=$d(e,n):(r=$d(n,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function fm(e,n){return function(r,t){var a,s;return t!==null&&!isNaN(+t)&&(Uk(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=r,r=t,t=s),a=Fn(r,t),vm(this,a,e),this}}function vm(e,n,r,t){var a=n._milliseconds,s=Yo(n._days),o=Yo(n._months);e.isValid()&&(t=t??!0,o&&Qk(e,$t(e,"Month")+o*r),s&&zk(e,"Date",$t(e,"Date")+s*r),a&&e._d.setTime(e._d.valueOf()+a*r),t&&U.updateOffset(e,s||o))}var JO=fm(1,"add"),zO=fm(-1,"subtract");function cm(e){return typeof e=="string"||e instanceof String}function ZO(e){return In(e)||ka(e)||cm(e)||ir(e)||QO(e)||XO(e)||e===null||e===void 0}function XO(e){var n=Fr(e)&&!Ki(e),r=!1,t=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,s,o=t.length;for(a=0;a<o;a+=1)s=t[a],r=r||me(e,s);return n&&r}function QO(e){var n=On(e),r=!1;return n&&(r=e.filter(function(t){return!ir(t)&&cm(e)}).length===0),n&&r}function eI(e){var n=Fr(e)&&!Ki(e),r=!1,t=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,s;for(a=0;a<t.length;a+=1)s=t[a],r=r||me(e,s);return n&&r}function nI(e,n){var r=e.diff(n,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function rI(e,n){arguments.length===1&&(arguments[0]?ZO(arguments[0])?(e=arguments[0],n=void 0):eI(arguments[0])&&(n=arguments[0],e=void 0):(e=void 0,n=void 0));var r=e||Ae(),t=Xi(r,this).startOf("day"),a=U.calendarFormat(this,t)||"sameElse",s=n&&(Jn(n[a])?n[a].call(this,r):n[a]);return this.format(s||this.localeData().calendar(a,this,Ae(r)))}function tI(){return new ma(this)}function aI(e,n){var r=In(e)?e:Ae(e);return this.isValid()&&r.isValid()?(n=yn(n)||"millisecond",n==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(n).valueOf()):!1}function sI(e,n){var r=In(e)?e:Ae(e);return this.isValid()&&r.isValid()?(n=yn(n)||"millisecond",n==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(n).valueOf()<r.valueOf()):!1}function oI(e,n,r,t){var a=In(e)?e:Ae(e),s=In(n)?n:Ae(n);return this.isValid()&&a.isValid()&&s.isValid()?(t=t||"()",(t[0]==="("?this.isAfter(a,r):!this.isBefore(a,r))&&(t[1]===")"?this.isBefore(s,r):!this.isAfter(s,r))):!1}function iI(e,n){var r=In(e)?e:Ae(e),t;return this.isValid()&&r.isValid()?(n=yn(n)||"millisecond",n==="millisecond"?this.valueOf()===r.valueOf():(t=r.valueOf(),this.clone().startOf(n).valueOf()<=t&&t<=this.clone().endOf(n).valueOf())):!1}function lI(e,n){return this.isSame(e,n)||this.isAfter(e,n)}function dI(e,n){return this.isSame(e,n)||this.isBefore(e,n)}function uI(e,n,r){var t,a,s;if(!this.isValid())return NaN;if(t=Xi(e,this),!t.isValid())return NaN;switch(a=(t.utcOffset()-this.utcOffset())*6e4,n=yn(n),n){case"year":s=qa(this,t)/12;break;case"month":s=qa(this,t);break;case"quarter":s=qa(this,t)/3;break;case"second":s=(this-t)/1e3;break;case"minute":s=(this-t)/6e4;break;case"hour":s=(this-t)/36e5;break;case"day":s=(this-t-a)/864e5;break;case"week":s=(this-t-a)/6048e5;break;default:s=this-t}return r?s:mn(s)}function qa(e,n){if(e.date()<n.date())return-qa(n,e);var r=(n.year()-e.year())*12+(n.month()-e.month()),t=e.clone().add(r,"months"),a,s;return n-t<0?(a=e.clone().add(r-1,"months"),s=(n-t)/(t-a)):(a=e.clone().add(r+1,"months"),s=(n-t)/(a-t)),-(r+s)||0}U.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";U.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function gI(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function kI(e){if(!this.isValid())return null;var n=e!==!0,r=n?this.clone().utc():this;return r.year()<0||r.year()>9999?wa(r,n?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Jn(Date.prototype.toISOString)?n?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",wa(r,"Z")):wa(r,n?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function mI(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",n="",r,t,a,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",n="Z"),r="["+e+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",s=n+'[")]',this.format(r+t+a+s)}function fI(e){e||(e=this.isUtc()?U.defaultFormatUtc:U.defaultFormat);var n=wa(this,e);return this.localeData().postformat(n)}function vI(e,n){return this.isValid()&&(In(e)&&e.isValid()||Ae(e).isValid())?Fn({to:this,from:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function cI(e){return this.from(Ae(),e)}function EI(e,n){return this.isValid()&&(In(e)&&e.isValid()||Ae(e).isValid())?Fn({from:this,to:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function pI(e){return this.to(Ae(),e)}function Em(e){var n;return e===void 0?this._locale._abbr:(n=dr(e),n!=null&&(this._locale=n),this)}var pm=pn("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function ym(){return this._locale}var ss=1e3,tt=60*ss,os=60*tt,Tm=(365*400+97)*24*os;function at(e,n){return(e%n+n)%n}function hm(e,n,r){return e<100&&e>=0?new Date(e+400,n,r)-Tm:new Date(e,n,r).valueOf()}function Rm(e,n,r){return e<100&&e>=0?Date.UTC(e+400,n,r)-Tm:Date.UTC(e,n,r)}function yI(e){var n,r;if(e=yn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Rm:hm,e){case"year":n=r(this.year(),0,1);break;case"quarter":n=r(this.year(),this.month()-this.month()%3,1);break;case"month":n=r(this.year(),this.month(),1);break;case"week":n=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":n=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":n=r(this.year(),this.month(),this.date());break;case"hour":n=this._d.valueOf(),n-=at(n+(this._isUTC?0:this.utcOffset()*tt),os);break;case"minute":n=this._d.valueOf(),n-=at(n,tt);break;case"second":n=this._d.valueOf(),n-=at(n,ss);break}return this._d.setTime(n),U.updateOffset(this,!0),this}function TI(e){var n,r;if(e=yn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Rm:hm,e){case"year":n=r(this.year()+1,0,1)-1;break;case"quarter":n=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":n=r(this.year(),this.month()+1,1)-1;break;case"week":n=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":n=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":n=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":n=this._d.valueOf(),n+=os-at(n+(this._isUTC?0:this.utcOffset()*tt),os)-1;break;case"minute":n=this._d.valueOf(),n+=tt-at(n,tt)-1;break;case"second":n=this._d.valueOf(),n+=ss-at(n,ss)-1;break}return this._d.setTime(n),U.updateOffset(this,!0),this}function hI(){return this._d.valueOf()-(this._offset||0)*6e4}function RI(){return Math.floor(this.valueOf()/1e3)}function bI(){return new Date(this.valueOf())}function _I(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function AI(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function SI(){return this.isValid()?this.toISOString():null}function NI(){return wi(this)}function DI(){return cr({},ne(this))}function OI(){return ne(this).overflow}function II(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}z("N",0,0,"eraAbbr");z("NN",0,0,"eraAbbr");z("NNN",0,0,"eraAbbr");z("NNNN",0,0,"eraName");z("NNNNN",0,0,"eraNarrow");z("y",["y",1],"yo","eraYear");z("y",["yy",2],0,"eraYear");z("y",["yyy",3],0,"eraYear");z("y",["yyyy",4],0,"eraYear");$("N",Qi);$("NN",Qi);$("NNN",Qi);$("NNNN",xI);$("NNNNN",GI);Te(["N","NN","NNN","NNNN","NNNNN"],function(e,n,r,t){var a=r._locale.erasParse(e,t,r._strict);a?ne(r).era=a:ne(r).invalidEra=e});$("y",Rt);$("yy",Rt);$("yyy",Rt);$("yyyy",Rt);$("yo",UI);Te(["y","yy","yyy","yyyy"],We);Te(["yo"],function(e,n,r,t){var a;r._locale._eraYearOrdinalRegex&&(a=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?n[We]=r._locale.eraYearOrdinalParse(e,a):n[We]=parseInt(e,10)});function LI(e,n){var r,t,a,s=this._eras||dr("en")._eras;for(r=0,t=s.length;r<t;++r){switch(typeof s[r].since){case"string":a=U(s[r].since).startOf("day"),s[r].since=a.valueOf();break}switch(typeof s[r].until){case"undefined":s[r].until=1/0;break;case"string":a=U(s[r].until).startOf("day").valueOf(),s[r].until=a.valueOf();break}}return s}function PI(e,n,r){var t,a,s=this.eras(),o,i,l;for(e=e.toUpperCase(),t=0,a=s.length;t<a;++t)if(o=s[t].name.toUpperCase(),i=s[t].abbr.toUpperCase(),l=s[t].narrow.toUpperCase(),r)switch(n){case"N":case"NN":case"NNN":if(i===e)return s[t];break;case"NNNN":if(o===e)return s[t];break;case"NNNNN":if(l===e)return s[t];break}else if([o,i,l].indexOf(e)>=0)return s[t]}function FI(e,n){var r=e.since<=e.until?1:-1;return n===void 0?U(e.since).year():U(e.since).year()+(n-e.offset)*r}function KI(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].name;return""}function wI(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].narrow;return""}function MI(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].abbr;return""}function qI(){var e,n,r,t,a=this.localeData().eras();for(e=0,n=a.length;e<n;++e)if(r=a[e].since<=a[e].until?1:-1,t=this.clone().startOf("day").valueOf(),a[e].since<=t&&t<=a[e].until||a[e].until<=t&&t<=a[e].since)return(this.year()-U(a[e].since).year())*r+a[e].offset;return this.year()}function VI(e){return me(this,"_erasNameRegex")||el.call(this),e?this._erasNameRegex:this._erasRegex}function jI(e){return me(this,"_erasAbbrRegex")||el.call(this),e?this._erasAbbrRegex:this._erasRegex}function BI(e){return me(this,"_erasNarrowRegex")||el.call(this),e?this._erasNarrowRegex:this._erasRegex}function Qi(e,n){return n.erasAbbrRegex(e)}function xI(e,n){return n.erasNameRegex(e)}function GI(e,n){return n.erasNarrowRegex(e)}function UI(e,n){return n._eraYearOrdinalRegex||Rt}function el(){var e=[],n=[],r=[],t=[],a,s,o,i,l,d=this.eras();for(a=0,s=d.length;a<s;++a)o=tr(d[a].name),i=tr(d[a].abbr),l=tr(d[a].narrow),n.push(o),e.push(i),r.push(l),t.push(o),t.push(i),t.push(l);this._erasRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+n.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}z(0,["gg",2],0,function(){return this.weekYear()%100});z(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Ms(e,n){z(0,[e,e.length],0,n)}Ms("gggg","weekYear");Ms("ggggg","weekYear");Ms("GGGG","isoWeekYear");Ms("GGGGG","isoWeekYear");$("G",Ls);$("g",Ls);$("GG",Se,un);$("gg",Se,un);$("GGGG",xi,Bi);$("gggg",xi,Bi);$("GGGGG",Is,Ds);$("ggggg",Is,Ds);va(["gggg","ggggg","GGGG","GGGGG"],function(e,n,r,t){n[t.substr(0,2)]=oe(e)});va(["gg","GG"],function(e,n,r,t){n[t]=U.parseTwoDigitYear(e)});function HI(e){return bm.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function YI(e){return bm.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function CI(){return ar(this.year(),1,4)}function WI(){return ar(this.isoWeekYear(),1,4)}function $I(){var e=this.localeData()._week;return ar(this.year(),e.dow,e.doy)}function JI(){var e=this.localeData()._week;return ar(this.weekYear(),e.dow,e.doy)}function bm(e,n,r,t,a){var s;return e==null?zt(this,t,a).year:(s=ar(e,t,a),n>s&&(n=s),zI.call(this,e,n,r,t,a))}function zI(e,n,r,t,a){var s=rm(e,n,r,t,a),o=Jt(s.year,0,s.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}z("Q",0,"Qo","quarter");$("Q",Yk);Te("Q",function(e,n){n[nr]=(oe(e)-1)*3});function ZI(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}z("D",["DD",2],"Do","date");$("D",Se,bt);$("DD",Se,un);$("Do",function(e,n){return e?n._dayOfMonthOrdinalParse||n._ordinalParse:n._dayOfMonthOrdinalParseLenient});Te(["D","DD"],Bn);Te("Do",function(e,n){n[Bn]=oe(e.match(Se)[0])});var _m=_t("Date",!0);z("DDD",["DDDD",3],"DDDo","dayOfYear");$("DDD",Os);$("DDDD",Ck);Te(["DDD","DDDD"],function(e,n,r){r._dayOfYear=oe(e)});function XI(e){var n=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?n:this.add(e-n,"d")}z("m",["mm",2],0,"minute");$("m",Se,Gi);$("mm",Se,un);Te(["m","mm"],_n);var QI=_t("Minutes",!1);z("s",["ss",2],0,"second");$("s",Se,Gi);$("ss",Se,un);Te(["s","ss"],rr);var eL=_t("Seconds",!1);z("S",0,0,function(){return~~(this.millisecond()/100)});z(0,["SS",2],0,function(){return~~(this.millisecond()/10)});z(0,["SSS",3],0,"millisecond");z(0,["SSSS",4],0,function(){return this.millisecond()*10});z(0,["SSSSS",5],0,function(){return this.millisecond()*100});z(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});z(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});z(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});z(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});$("S",Os,Yk);$("SS",Os,un);$("SSS",Os,Ck);var Er,Am;for(Er="SSSS";Er.length<=9;Er+="S")$(Er,Rt);function nL(e,n){n[Lr]=oe(("0."+e)*1e3)}for(Er="S";Er.length<=9;Er+="S")Te(Er,nL);Am=_t("Milliseconds",!1);z("z",0,0,"zoneAbbr");z("zz",0,0,"zoneName");function rL(){return this._isUTC?"UTC":""}function tL(){return this._isUTC?"Coordinated Universal Time":""}var w=ma.prototype;w.add=JO;w.calendar=rI;w.clone=tI;w.diff=uI;w.endOf=TI;w.format=fI;w.from=vI;w.fromNow=cI;w.to=EI;w.toNow=pI;w.get=mD;w.invalidAt=OI;w.isAfter=aI;w.isBefore=sI;w.isBetween=oI;w.isSame=iI;w.isSameOrAfter=lI;w.isSameOrBefore=dI;w.isValid=NI;w.lang=pm;w.locale=Em;w.localeData=ym;w.max=NO;w.min=SO;w.parsingFlags=DI;w.set=fD;w.startOf=yI;w.subtract=zO;w.toArray=_I;w.toObject=AI;w.toDate=bI;w.toISOString=kI;w.inspect=mI;typeof Symbol<"u"&&Symbol.for!=null&&(w[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});w.toJSON=SI;w.toString=gI;w.unix=RI;w.valueOf=hI;w.creationData=II;w.eraName=KI;w.eraNarrow=wI;w.eraAbbr=MI;w.eraYear=qI;w.year=Jk;w.isLeapYear=kD;w.weekYear=HI;w.isoWeekYear=YI;w.quarter=w.quarters=ZI;w.month=em;w.daysInMonth=bD;w.week=w.weeks=LD;w.isoWeek=w.isoWeeks=PD;w.weeksInYear=$I;w.weeksInWeekYear=JI;w.isoWeeksInYear=CI;w.isoWeeksInISOWeekYear=WI;w.date=_m;w.day=w.days=YD;w.weekday=CD;w.isoWeekday=WD;w.dayOfYear=XI;w.hour=w.hours=eO;w.minute=w.minutes=QI;w.second=w.seconds=eL;w.millisecond=w.milliseconds=Am;w.utcOffset=MO;w.utc=VO;w.local=jO;w.parseZone=BO;w.hasAlignedHourOffset=xO;w.isDST=GO;w.isLocal=HO;w.isUtcOffset=YO;w.isUtc=mm;w.isUTC=mm;w.zoneAbbr=rL;w.zoneName=tL;w.dates=pn("dates accessor is deprecated. Use date instead.",_m);w.months=pn("months accessor is deprecated. Use month instead",em);w.years=pn("years accessor is deprecated. Use year instead",Jk);w.zone=pn("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",qO);w.isDSTShifted=pn("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",UO);function aL(e){return Ae(e*1e3)}function sL(){return Ae.apply(null,arguments).parseZone()}function Sm(e){return e}var fe=qi.prototype;fe.calendar=HN;fe.longDateFormat=$N;fe.invalidDate=zN;fe.ordinal=QN;fe.preparse=Sm;fe.postformat=Sm;fe.relativeTime=nD;fe.pastFuture=rD;fe.set=GN;fe.eras=LI;fe.erasParse=PI;fe.erasConvertYear=FI;fe.erasAbbrRegex=jI;fe.erasNameRegex=VI;fe.erasNarrowRegex=BI;fe.months=yD;fe.monthsShort=TD;fe.monthsParse=RD;fe.monthsRegex=AD;fe.monthsShortRegex=_D;fe.week=ND;fe.firstDayOfYear=ID;fe.firstDayOfWeek=OD;fe.weekdays=BD;fe.weekdaysMin=GD;fe.weekdaysShort=xD;fe.weekdaysParse=HD;fe.weekdaysRegex=$D;fe.weekdaysShortRegex=JD;fe.weekdaysMinRegex=zD;fe.isPM=XD;fe.meridiem=nO;function is(e,n,r,t){var a=dr(),s=$n().set(t,n);return a[r](s,e)}function Nm(e,n,r){if(ir(e)&&(n=e,e=void 0),e=e||"",n!=null)return is(e,n,r,"month");var t,a=[];for(t=0;t<12;t++)a[t]=is(e,t,r,"month");return a}function nl(e,n,r,t){typeof e=="boolean"?(ir(n)&&(r=n,n=void 0),n=n||""):(n=e,r=n,e=!1,ir(n)&&(r=n,n=void 0),n=n||"");var a=dr(),s=e?a._week.dow:0,o,i=[];if(r!=null)return is(n,(r+s)%7,t,"day");for(o=0;o<7;o++)i[o]=is(n,(o+s)%7,t,"day");return i}function oL(e,n){return Nm(e,n,"months")}function iL(e,n){return Nm(e,n,"monthsShort")}function lL(e,n,r){return nl(e,n,r,"weekdays")}function dL(e,n,r){return nl(e,n,r,"weekdaysShort")}function uL(e,n,r){return nl(e,n,r,"weekdaysMin")}Tr("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var n=e%10,r=oe(e%100/10)===1?"th":n===1?"st":n===2?"nd":n===3?"rd":"th";return e+r}});U.lang=pn("moment.lang is deprecated. Use moment.locale instead.",Tr);U.langData=pn("moment.langData is deprecated. Use moment.localeData instead.",dr);var Xn=Math.abs;function gL(){var e=this._data;return this._milliseconds=Xn(this._milliseconds),this._days=Xn(this._days),this._months=Xn(this._months),e.milliseconds=Xn(e.milliseconds),e.seconds=Xn(e.seconds),e.minutes=Xn(e.minutes),e.hours=Xn(e.hours),e.months=Xn(e.months),e.years=Xn(e.years),this}function Dm(e,n,r,t){var a=Fn(n,r);return e._milliseconds+=t*a._milliseconds,e._days+=t*a._days,e._months+=t*a._months,e._bubble()}function kL(e,n){return Dm(this,e,n,1)}function mL(e,n){return Dm(this,e,n,-1)}function Jd(e){return e<0?Math.floor(e):Math.ceil(e)}function fL(){var e=this._milliseconds,n=this._days,r=this._months,t=this._data,a,s,o,i,l;return e>=0&&n>=0&&r>=0||e<=0&&n<=0&&r<=0||(e+=Jd(Wo(r)+n)*864e5,n=0,r=0),t.milliseconds=e%1e3,a=mn(e/1e3),t.seconds=a%60,s=mn(a/60),t.minutes=s%60,o=mn(s/60),t.hours=o%24,n+=mn(o/24),l=mn(Om(n)),r+=l,n-=Jd(Wo(l)),i=mn(r/12),r%=12,t.days=n,t.months=r,t.years=i,this}function Om(e){return e*4800/146097}function Wo(e){return e*146097/4800}function vL(e){if(!this.isValid())return NaN;var n,r,t=this._milliseconds;if(e=yn(e),e==="month"||e==="quarter"||e==="year")switch(n=this._days+t/864e5,r=this._months+Om(n),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(n=this._days+Math.round(Wo(this._months)),e){case"week":return n/7+t/6048e5;case"day":return n+t/864e5;case"hour":return n*24+t/36e5;case"minute":return n*1440+t/6e4;case"second":return n*86400+t/1e3;case"millisecond":return Math.floor(n*864e5)+t;default:throw new Error("Unknown unit "+e)}}function ur(e){return function(){return this.as(e)}}var Im=ur("ms"),cL=ur("s"),EL=ur("m"),pL=ur("h"),yL=ur("d"),TL=ur("w"),hL=ur("M"),RL=ur("Q"),bL=ur("y"),_L=Im;function AL(){return Fn(this)}function SL(e){return e=yn(e),this.isValid()?this[e+"s"]():NaN}function Gr(e){return function(){return this.isValid()?this._data[e]:NaN}}var NL=Gr("milliseconds"),DL=Gr("seconds"),OL=Gr("minutes"),IL=Gr("hours"),LL=Gr("days"),PL=Gr("months"),FL=Gr("years");function KL(){return mn(this.days()/7)}var Qn=Math.round,Xr={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function wL(e,n,r,t,a){return a.relativeTime(n||1,!!r,e,t)}function ML(e,n,r,t){var a=Fn(e).abs(),s=Qn(a.as("s")),o=Qn(a.as("m")),i=Qn(a.as("h")),l=Qn(a.as("d")),d=Qn(a.as("M")),u=Qn(a.as("w")),g=Qn(a.as("y")),k=s<=r.ss&&["s",s]||s<r.s&&["ss",s]||o<=1&&["m"]||o<r.m&&["mm",o]||i<=1&&["h"]||i<r.h&&["hh",i]||l<=1&&["d"]||l<r.d&&["dd",l];return r.w!=null&&(k=k||u<=1&&["w"]||u<r.w&&["ww",u]),k=k||d<=1&&["M"]||d<r.M&&["MM",d]||g<=1&&["y"]||["yy",g],k[2]=n,k[3]=+e>0,k[4]=t,wL.apply(null,k)}function qL(e){return e===void 0?Qn:typeof e=="function"?(Qn=e,!0):!1}function VL(e,n){return Xr[e]===void 0?!1:n===void 0?Xr[e]:(Xr[e]=n,e==="s"&&(Xr.ss=n-1),!0)}function jL(e,n){if(!this.isValid())return this.localeData().invalidDate();var r=!1,t=Xr,a,s;return typeof e=="object"&&(n=e,e=!1),typeof e=="boolean"&&(r=e),typeof n=="object"&&(t=Object.assign({},Xr,n),n.s!=null&&n.ss==null&&(t.ss=n.s-1)),a=this.localeData(),s=ML(this,!r,t,a),r&&(s=a.pastFuture(+this,s)),a.postformat(s)}var uo=Math.abs;function Jr(e){return(e>0)-(e<0)||+e}function qs(){if(!this.isValid())return this.localeData().invalidDate();var e=uo(this._milliseconds)/1e3,n=uo(this._days),r=uo(this._months),t,a,s,o,i=this.asSeconds(),l,d,u,g;return i?(t=mn(e/60),a=mn(t/60),e%=60,t%=60,s=mn(r/12),r%=12,o=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=i<0?"-":"",d=Jr(this._months)!==Jr(i)?"-":"",u=Jr(this._days)!==Jr(i)?"-":"",g=Jr(this._milliseconds)!==Jr(i)?"-":"",l+"P"+(s?d+s+"Y":"")+(r?d+r+"M":"")+(n?u+n+"D":"")+(a||t||e?"T":"")+(a?g+a+"H":"")+(t?g+t+"M":"")+(e?g+o+"S":"")):"P0D"}var ge=ws.prototype;ge.isValid=PO;ge.abs=gL;ge.add=kL;ge.subtract=mL;ge.as=vL;ge.asMilliseconds=Im;ge.asSeconds=cL;ge.asMinutes=EL;ge.asHours=pL;ge.asDays=yL;ge.asWeeks=TL;ge.asMonths=hL;ge.asQuarters=RL;ge.asYears=bL;ge.valueOf=_L;ge._bubble=fL;ge.clone=AL;ge.get=SL;ge.milliseconds=NL;ge.seconds=DL;ge.minutes=OL;ge.hours=IL;ge.days=LL;ge.weeks=KL;ge.months=PL;ge.years=FL;ge.humanize=jL;ge.toISOString=qs;ge.toString=qs;ge.toJSON=qs;ge.locale=Em;ge.localeData=ym;ge.toIsoString=pn("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",qs);ge.lang=pm;z("X",0,0,"unix");z("x",0,0,"valueOf");$("x",Ls);$("X",oD);Te("X",function(e,n,r){r._d=new Date(parseFloat(e)*1e3)});Te("x",function(e,n,r){r._d=new Date(oe(e))});//! moment.js
U.version="2.30.1";BN(Ae);U.fn=w;U.min=DO;U.max=OO;U.now=IO;U.utc=$n;U.unix=aL;U.months=oL;U.isDate=ka;U.locale=Tr;U.invalid=Ns;U.duration=Fn;U.isMoment=In;U.weekdays=lL;U.parseZone=sL;U.localeData=dr;U.isDuration=Ma;U.monthsShort=iL;U.weekdaysMin=uL;U.defineLocale=Wi;U.updateLocale=sO;U.locales=oO;U.weekdaysShort=dL;U.normalizeUnits=yn;U.relativeTimeRounding=qL;U.relativeTimeThreshold=VL;U.calendarFormat=nI;U.prototype=w;U.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const BL="_image_y70td_1",xL="_modal_y70td_7",GL="_select_y70td_12",UL="_label_y70td_16",HL="_button_y70td_20",YL="_cancelButton_y70td_25",CL="_marginTop_y70td_29",WL="_datePicker_y70td_33",go={image:BL,modal:xL,select:GL,label:UL,button:HL,cancelButton:YL,marginTop:CL,datePicker:WL},$L=()=>{const e=we().toDate();return e.setDate(e.getDate()+28),we(e).format(Tn)},JL=(e,n,r)=>({ventearsak:n,frist:r||e===!1?r:$L()}),zL=[tn.AVV_DOK,tn.AVV_FODSEL,tn.VENT_PÅ_BRUKERTILBAKEMELDING,tn.UTV_FRIST,tn.FOR_TIDLIG_SOKNAD,tn.VENT_OPDT_INNTEKTSMELDING,tn.VENT_UTLAND_TRYGD,tn.UTVIDET_TILSVAR_FRIST,tn.ENDRE_TILKJENT_YTELSE,tn.VENT_PÅ_MULIG_MOTREGNING],ZL=[tn.VENT_PÅ_BRUKERTILBAKEMELDING,tn.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG],XL=(e,n)=>ZL.some(r=>r===e.kode)?e.kode===n:!0,QL=(e,n,r,t)=>{const a=e&&(n!==void 0&&xd(n)===null||r!==void 0&&xd(r)===null),s=t===tn.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG;return e&&a&&s},eP=(e,n)=>!(e===n||!n&&!e),nP=(e,n)=>!(e===n||!n&&!e),rl=({submitCallback:e,cancelEvent:n,showModal:r,ventearsaker:t,erTilbakekreving:a,frist:s,ventearsak:o,visBrevErBestilt:i=!1,hasManualPaVent:l,defaultVenteårsak:d})=>{const u=ea(),g=sg({defaultValues:JL(l,o||d,s)}),k=g.watch("frist"),m=g.watch("ventearsak"),c=eP(o,m),f=nP(s,k),v=!(s===k&&!c),h=QL(a,k,s,m);return y.jsx(Vk,{formMethods:g,onSubmit:e,children:y.jsxs(vr,{open:r,"aria-label":u.formatMessage({id:o?"SettPaVentModal.ModalDescriptionErPaVent":"SettPaVentModal.ModalDescription"}),onClose:n,children:[y.jsx(vr.Header,{children:y.jsx(pt,{size:"small",children:y.jsx(be,{id:o?"SettPaVentModal.ErSettPaVent":"SettPaVentModal.SettesPaVent"})})}),y.jsxs(vr.Body,{children:[(l||k)&&y.jsxs(y.Fragment,{children:[y.jsx(OS,{label:y.jsx(be,{id:"SettPaVentModal.Frist"}),name:"frist",validate:[xt,PN,wN]}),y.jsx(hn,{sixteenPx:!0})]}),y.jsx(FS,{name:"ventearsak",className:go.select,label:y.jsx(be,{id:"SettPaVentModal.Arsak"}),validate:[xt],selectValues:t.filter(p=>!l||(a?XL(p,m):zL.some(R=>R===p.kode))).sort((p,R)=>p.navn.localeCompare(R.navn)).map(p=>y.jsx("option",{value:p.kode,children:p.navn},p.kode)),readOnly:!l}),y.jsx(hn,{sixteenPx:!0}),i&&y.jsx(Ie,{size:"small",children:y.jsx(be,{id:"SettPaVentModal.BrevBlirBestilt"})}),l&&y.jsx(Ie,{size:"small",children:u.formatMessage({id:"SettPaVentModal.EndreFrist"})}),!l&&h&&y.jsxs(y.Fragment,{children:[y.jsx(Ie,{size:"small",children:y.jsx(be,{id:"SettPaVentModal.UtløptFrist"})}),y.jsx(hn,{eightPx:!0}),y.jsx(Ie,{size:"small",children:y.jsx(be,{id:"SettPaVentModal.HenleggeSaken"})})]})]}),y.jsxs(vr.Footer,{children:[y.jsx(Nn,{size:"small",variant:"primary",className:go.button,onClick:v?MN:n,disabled:!c&&!f,children:y.jsx(be,{id:"SettPaVentModal.Ok"})}),(!l||v||!i)&&y.jsx(Nn,{size:"small",variant:"secondary",onClick:n,className:go.cancelButton,type:"button",children:y.jsx(be,{id:c||f?"SettPaVentModal.Avbryt":"SettPaVentModal.Lukk"})})]})]})})};rl.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModal",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  frist?: string;
  ventearsak?: string;
}`,signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!1}}]}},name:"formData"}],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showModal:{required:!0,tsType:{name:"boolean"},description:""},ventearsaker:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasManualPaVent:{required:!0,tsType:{name:"boolean"},description:""},frist:{required:!1,tsType:{name:"string"},description:""},ventearsak:{required:!1,tsType:{name:"string"},description:""},defaultVenteårsak:{required:!1,tsType:{name:"string"},description:""}}};rl.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModal",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  frist?: string;
  ventearsak?: string;
}`,signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!1}}]}},name:"formData"}],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showModal:{required:!0,tsType:{name:"boolean"},description:""},ventearsaker:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasManualPaVent:{required:!0,tsType:{name:"boolean"},description:""},frist:{required:!1,tsType:{name:"string"},description:""},ventearsak:{required:!1,tsType:{name:"string"},description:""},defaultVenteårsak:{required:!1,tsType:{name:"string"},description:""}}};const rP={"SettPaVentModal.ModalDescription":"Behandlingen settes på vent med frist","SettPaVentModal.ModalDescriptionErPaVent":"Behandlingen er satt på vent","SettPaVentModal.PaVent":"På vent","SettPaVentModal.SettesPaVent":"Behandlingen settes på vent","SettPaVentModal.ErSettPaVent":"Behandlingen er satt på vent","SettPaVentModal.Frist":"Frist","SettPaVentModal.Ok":"OK","SettPaVentModal.Avbryt":"Avbryt","SettPaVentModal.Lukk":"Lukk","SettPaVentModal.BrevBlirBestilt":"Brevet blir bestilt","SettPaVentModal.Arsak":"Årsak","SettPaVentModal.EndreFrist":"Du kan endre frist eller årsak før du fortsetter","SettPaVentModal.UtløptFrist":"OBS! Fristen på denne behandlingen er utløpt!","SettPaVentModal.HenleggeSaken":`Kontroller hvorfor Økonomi ikke har dannet et kravgrunnlag.
 Dersom det feilutbetalte beløpet er bortfalt skal saken henlegges.
For mer informasjon, se rutine under tilbakekreving.`},tP=Ce(rP),tl=e=>y.jsx(Zo,{value:tP,children:y.jsx(rl,{...e})});tl.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModalIndex",props:{cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  frist?: string;
  ventearsak?: string;
}`,signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!1}}]}},name:"formData"}],return:{name:"void"}}},description:""},showModal:{required:!0,tsType:{name:"boolean"},description:""},ventearsaker:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},frist:{required:!1,tsType:{name:"string"},description:""},ventearsak:{required:!1,tsType:{name:"string"},description:""},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:""},hasManualPaVent:{required:!0,tsType:{name:"boolean"},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},defaultVenteårsak:{required:!1,tsType:{name:"string"},description:""}}};tl.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModalIndex",props:{cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  frist?: string;
  ventearsak?: string;
}`,signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!1}}]}},name:"formData"}],return:{name:"void"}}},description:""},showModal:{required:!0,tsType:{name:"boolean"},description:""},ventearsaker:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},frist:{required:!1,tsType:{name:"string"},description:""},ventearsak:{required:!1,tsType:{name:"string"},description:""},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:""},hasManualPaVent:{required:!0,tsType:{name:"boolean"},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},defaultVenteårsak:{required:!1,tsType:{name:"string"},description:""}}};const aP="_colMargin_1r8hu_1",ls={colMargin:aP},Va=e=>e?U(e,Tn).format(er):"-",sP=(e,n,r,t)=>e&&Object.keys(n).length>0?Va(Object.values(n)[0]):t?Va(t):e?r?Va(r):"-":null,al=({soknad:e,termindato:n})=>{const r=e.fodselsdatoer?e.fodselsdatoer:{},t=Object.keys(r).length>0?"FodselsammenligningPanel.Fodselsdato":"FodselsammenligningPanel.Termindato",a=Object.keys(r).length>0?"FodselSammenligningOtherPanel.OpplysningerISoknad":"FodselSammenligningOtherPanel.TerminISoknad",s=E.useMemo(()=>sP(!!e,r,e.termindato,n),[e,r,n]);return y.jsxs(y.Fragment,{children:[y.jsx(pt,{size:"small",children:y.jsx(be,{id:a})}),y.jsx(hn,{sixteenPx:!0}),y.jsx(rs,{children:y.jsxs(ns,{children:[e.utstedtdato&&y.jsxs(Gn,{className:ls.colMargin,children:[y.jsx(on,{size:"small",children:y.jsx(be,{id:"FodselsammenligningPanel.UstedtDato"})}),y.jsx(Ie,{size:"small",children:Va(e.utstedtdato)})]}),y.jsxs(Gn,{className:ls.colMargin,children:[y.jsx(on,{size:"small",children:y.jsx(be,{id:t})}),y.jsx(Ie,{size:"small",children:s})]}),y.jsxs(Gn,{children:[y.jsx(on,{size:"small",children:y.jsx(be,{id:"FodselsammenligningPanel.AntallBarn"})}),y.jsx(Ie,{size:"small",children:e.antallBarn})]})]})})]})};al.__docgenInfo={description:`FodselSammenligningOtherPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""}}};al.__docgenInfo={description:`FodselSammenligningOtherPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""}}};const ko=e=>e?U(e,Tn).format(er):"-",oP=(e,n,r)=>{if(!n&&!r)return"";const t=r||{termindato:void 0,avklartBarn:[]};if(e){const a=t.termindato?t.termindato:n==null?void 0:n.termindato;return a?ko(a):void 0}return t.avklartBarn&&t.avklartBarn.length>0?ko(t.avklartBarn[0].fodselsdato):n!=null&&n.fodselsdatoer?ko(Object.values(n.fodselsdatoer)[0]):"-"},iP=(e,n,r)=>{if(!n&&!r)return 0;const t=r||{termindato:void 0,antallBarnTermin:void 0,avklartBarn:[]};return e?t.termindato?t.antallBarnTermin:n==null?void 0:n.antallBarn:t.avklartBarn&&t.avklartBarn.length>0?t.avklartBarn.length:n==null?void 0:n.antallBarn},sl=({vedtaksDatoSomSvangerskapsuke:e,soknadOriginalBehandling:n,familiehendelseOriginalBehandling:r})=>{const t=r&&!!r.termindato||!(n!=null&&n.fodselsdatoer)||Object.keys(n.fodselsdatoer).length===0,a=t?"FodselsammenligningPanel.Termindato":"FodselsammenligningPanel.Fodselsdato",s=oP(t,n,r),o=iP(t,n,r),i=r?(!r.avklartBarn||r.avklartBarn.length===0)&&!!e:!1;return y.jsxs(y.Fragment,{children:[y.jsx(pt,{size:"small",children:y.jsx(be,{id:"FodselsammenligningPanel.Ytelsesvedtak"})}),y.jsx(hn,{sixteenPx:!0}),y.jsx(rs,{children:y.jsxs(ns,{children:[i&&y.jsxs(Gn,{className:ls.colMargin,children:[y.jsx(on,{size:"small",children:y.jsx(be,{id:"FodselsammenligningPanel.FodtISvangerskapsuke"})}),y.jsx(Ie,{size:"small",children:e})]}),y.jsxs(Gn,{className:ls.colMargin,children:[y.jsx(on,{size:"small",children:y.jsx(be,{id:a})}),y.jsx(Ie,{size:"small",children:s??"-"})]}),y.jsxs(Gn,{children:[y.jsx(on,{size:"small",children:y.jsx(be,{id:"FodselsammenligningPanel.AntallBarn"})}),y.jsx(Ie,{size:"small",children:o??"-"})]})]})})]})};sl.__docgenInfo={description:`FodselSammenligningRevurderingPanel

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
}>`},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};sl.__docgenInfo={description:`FodselSammenligningRevurderingPanel

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
}>`},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const lP="_noChildrenInTps_3z81w_1",dP="_colWidthLeft_3z81w_5",uP="_colWidthRight_3z81w_9",mo={noChildrenInTps:lP,colWidthLeft:dP,colWidthRight:uP},zd=e=>e?U(e,Tn).format(er):"-",ol=({behandlingsTypeKode:e,avklartBarn:n,nrOfDodfodteBarn:r,soknad:t,vedtaksDatoSomSvangerskapsuke:a,termindato:s,soknadOriginalBehandling:o,familiehendelseOriginalBehandling:i})=>y.jsx(rs,{children:y.jsxs(ns,{children:[y.jsxs(Gn,{className:mo.colWidthLeft,children:[e!==Kr.REVURDERING&&y.jsx(al,{soknad:t,termindato:s}),e===Kr.REVURDERING&&y.jsx(sl,{soknadOriginalBehandling:o,familiehendelseOriginalBehandling:i,vedtaksDatoSomSvangerskapsuke:a})]}),y.jsxs(Gn,{className:mo.colWidthRight,children:[y.jsx(rs,{children:y.jsxs(ns,{children:[y.jsx(Gn,{children:y.jsx(pt,{size:"small",children:y.jsx(be,{id:"FodselsammenligningPanel.OpplysningerTPS"})})}),r>0&&y.jsx(Gn,{children:y.jsx(qo,{variant:"info",children:y.jsx(be,{id:"FodselsammenligningPanel.Dodfodt"})})})]})}),n.length>0&&y.jsx(Mk,{noHover:!0,headerTextCodes:["FodselsammenligningPanel.Fodselsdato","FodselsammenligningPanel.Dodsdato"],children:n.map(l=>{const d=l.fodselsdato+l.dodsdato;return y.jsxs(wk,{id:d,children:[y.jsx(nt,{children:y.jsx(Ie,{size:"small",children:zd(l.fodselsdato)})}),y.jsx(nt,{children:y.jsx(Ie,{size:"small",children:l.dodsdato?zd(l.dodsdato):"-"})}),y.jsx(nt,{children:l.dodsdato&&y.jsx(qo,{variant:"info",children:y.jsx(be,{id:"FodselsammenligningPanel.Dod"})})})]},d)})}),n.length===0&&y.jsx("div",{className:mo.noChildrenInTps,children:y.jsx(Ie,{size:"small",children:"-"})})]})]})});ol.__docgenInfo={description:`FodselSammenlingningPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};ol.__docgenInfo={description:`FodselSammenlingningPanel

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
}>`},description:""},termindato:{required:!1,tsType:{name:"string"},description:""},vedtaksDatoSomSvangerskapsuke:{required:!1,tsType:{name:"number"},description:""}}};const gP={"FodselsammenligningPanel.AntallBarn":"Antall barn","FodselsammenligningPanel.Termindato":"Termindato","FodselsammenligningPanel.FodtISvangerskapsuke":"Født i svangerskapsuke","FodselsammenligningPanel.Svangerskapsuke":"Svangerskapsuke","FodselsammenligningPanel.OpplysningerTPS":"Opplysninger om fødsel fra folkeregisteret","FodselsammenligningPanel.Fodselsdato":"Fødselsdato","FodselsammenligningPanel.Dodsdato":"Dødsdato","FodselsammenligningPanel.UstedtDato":"Utstedt dato","FodselsammenligningPanel.Ytelsesvedtak":"Vedtak","FodselsammenligningPanel.Dodfodt":"Dødfødsel","FodselsammenligningPanel.Dod":"Død","FodselSammenligningOtherPanel.OpplysningerISoknad":"Opplysninger om fødsel fra søknaden","FodselSammenligningOtherPanel.TerminISoknad":"Opplysninger om termin oppgitt i søknaden"},kP=Ce(gP),il=({behandlingsTypeKode:e,avklartBarn:n=[],termindato:r,vedtaksDatoSomSvangerskapsuke:t,soknad:a,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:o})=>{const i=n.reduce((l,d)=>l+(d.dodsdato?1:0),0);return y.jsx(Zo,{value:kP,children:y.jsx(ol,{avklartBarn:n,termindato:r,vedtaksDatoSomSvangerskapsuke:t,nrOfDodfodteBarn:i,behandlingsTypeKode:e,soknad:a,soknadOriginalBehandling:s,familiehendelseOriginalBehandling:o})})};il.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningIndex",props:{behandlingsTypeKode:{required:!0,tsType:{name:"string"},description:""},avklartBarn:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};il.__docgenInfo={description:"",methods:[],displayName:"FodselSammenligningIndex",props:{behandlingsTypeKode:{required:!0,tsType:{name:"string"},description:""},avklartBarn:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const ca={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"};Ce(ca);Ce(ca);Ce(ca);Ce(ca);Ce(ca);const mP=(e,...n)=>{const r=n.find(t=>t===e);if(!r)throw Error(`Det finnes ikke enum for kode ${e}`);return r},fP="_divider_16pq7_1",vP="_image_16pq7_12",cP="_labelColumn_16pq7_18",EP="_panelWrapper_16pq7_22",pP="_varselRow_16pq7_28",yP="_panel_16pq7_22",TP="_flexContainer_16pq7_48",hP="_warningRow_16pq7_67",Zd={divider:fP,image:vP,labelColumn:cP,panelWrapper:EP,varselRow:pP,panel:yP,flexContainer:TP,warningRow:hP},Xd=IN(3),RP=LN(1e4),bP=e=>({kode:mP(e[0].definisjon,ja.VARSEL_REVURDERING_ETTERKONTROLL,ja.VARSEL_REVURDERING_MANUELL),begrunnelse:e[0].begrunnelse,sendVarsel:void 0}),fo=e=>e||{},_P=[],ll=({aksjonspunkter:e,familiehendelse:n,behandlingArsaker:r,readOnly:t,behandlingType:a,soknad:s,soknadOriginalBehandling:o,familiehendelseOriginalBehandling:i,alleKodeverk:l,sprakkode:d,submitCallback:u,previewCallback:g,setFormData:k,formData:m})=>{const c=ea(),f=E.useMemo(()=>bP(e),[e]),v=sg({defaultValues:m||f}),h=v.watch(),[p,R]=E.useState(!1),S=E.useCallback(()=>R(!1),[R]),_=E.useCallback(()=>R(!0),[R]),O=V=>{v.trigger().then(H=>{H&&u({...h,...V}),R(!1)})},A=E.useCallback(V=>{V.preventDefault(),g({dokumentMal:vu.VARSEL_OM_REVURDERING,arsakskode:Eu.ANNET,fritekst:h.fritekst||" "})},[h.fritekst]),{avklartBarn:D}=fo(n.register),{termindato:K}=fo(n.gjeldende),{vedtaksDatoSomSvangerskapsuke:q}=fo(n.gjeldende),B=r.reduce((V,H)=>V||H.erAutomatiskRevurdering,!1),L=l[cu.VENT_AARSAK]||_P,I=qc(d);return y.jsxs(y.Fragment,{children:[y.jsxs(Vk,{formMethods:v,onSubmit:u,setDataOnUnmount:k,children:[y.jsx(pt,{size:"small",children:y.jsx(be,{id:"VarselOmRevurderingForm.VarselOmRevurdering"})}),y.jsx(hn,{eightPx:!0}),!t&&e[0].status===Ba.OPPRETTET&&y.jsxs(y.Fragment,{children:[y.jsx(W_,{children:y.jsx(be,{id:"VarselOmRevurderingForm.VarselOmRevurderingVurder"})}),y.jsx(hn,{twentyPx:!0}),B&&y.jsxs(y.Fragment,{children:[y.jsx(il,{behandlingsTypeKode:a,avklartBarn:D,termindato:K,vedtaksDatoSomSvangerskapsuke:q,soknad:s,soknadOriginalBehandling:o,familiehendelseOriginalBehandling:i}),y.jsx(hn,{sixteenPx:!0})]}),y.jsx(PS,{name:"sendVarsel",validate:[xt],isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:c.formatMessage({id:"VarselOmRevurderingForm.SendVarsel"})},{value:"false",label:c.formatMessage({id:"VarselOmRevurderingForm.IkkeSendVarsel"})}]}),h.sendVarsel&&y.jsxs(y.Fragment,{children:[y.jsx(hn,{sixteenPx:!0}),y.jsxs(X_,{children:[y.jsx(Vd,{badges:[{type:"info",titleText:I}],name:"fritekst",label:c.formatMessage({id:"VarselOmRevurderingForm.FritekstIBrev"}),validate:[xt,Xd,RP,Gd],maxLength:1e4,parse:Mc}),y.jsx(hn,{fourPx:!0}),y.jsx("a",{href:"",onClick:A,className:jN(Zd.previewLink,"lenke lenke--frittstaende"),children:y.jsx(be,{id:"VarselOmRevurderingForm.Preview"})})]})]}),y.jsx("div",{className:Zd.flexContainer,children:y.jsx(Vd,{name:"begrunnelse",label:c.formatMessage({id:"VarselOmRevurderingForm.BegrunnelseForSvar"}),validate:[xt,Xd,Gd]})}),y.jsx(hn,{sixteenPx:!0}),y.jsx(Nn,{variant:"primary",size:"small",onClick:h.sendVarsel?_:void 0,loading:v.formState.isSubmitting,disabled:v.formState.isSubmitting,type:h.sendVarsel?"button":"submit",children:y.jsx(be,{id:"VarselOmRevurderingForm.Bekreft"})})]}),(t||e[0].status!==Ba.OPPRETTET)&&y.jsxs(y.Fragment,{children:[y.jsx(ms,{children:y.jsx(be,{id:"VarselOmRevurderingForm.Begrunnelse"})}),y.jsx(Ie,{size:"small",children:h.begrunnelse})]})]}),y.jsx(tl,{showModal:p,frist:U().add(28,"days").format(Tn),cancelEvent:S,submitCallback:O,ventearsaker:L,visBrevErBestilt:!0,hasManualPaVent:!0,erTilbakekreving:a===Kr.TILBAKEKREVING||a===Kr.TILBAKEKREVING_REVURDERING})]})};ll.__docgenInfo={description:`VarselOmRevurderingForm

Setter opp aksjonspunktet for avklaring av varsel om revurdering i søknad.`,methods:[],displayName:"VarselOmRevurderingForm",props:{behandlingArsaker:{required:!0,tsType:{name:"intersection['behandlingÅrsaker']",raw:"Behandling['behandlingÅrsaker']"},description:""},sprakkode:{required:!0,tsType:{name:"string"},description:""},behandlingType:{required:!0,tsType:{name:"string"},description:""},familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},soknadOriginalBehandling:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},familiehendelseOriginalBehandling:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VarselRevurderingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  sendVarsel?: boolean;
  fritekst?: string;
  frist?: string;
  ventearsak?: string;
} & AksjonspunktTilBekreftelse<
  AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL | AksjonspunktKode.VARSEL_REVURDERING_MANUELL
>`,elements:[{name:"signature",type:"object",raw:`{
  sendVarsel?: boolean;
  fritekst?: string;
  frist?: string;
  ventearsak?: string;
}`,signature:{properties:[{key:"sendVarsel",value:{name:"boolean",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"union",raw:"AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL | AksjonspunktKode.VARSEL_REVURDERING_MANUELL",elements:[{name:"AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL"},{name:"AksjonspunktKode.VARSEL_REVURDERING_MANUELL"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  arsakskode: string;
  dokumentMal: string;
  fritekst: string;
}`,signature:{properties:[{key:"arsakskode",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},formData:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  kode: AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL | AksjonspunktKode.VARSEL_REVURDERING_MANUELL;
  begrunnelse?: string;
  sendVarsel?: boolean;
  fritekst?: string;
}`,signature:{properties:[{key:"kode",value:{name:"union",raw:"AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL | AksjonspunktKode.VARSEL_REVURDERING_MANUELL",elements:[{name:"AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL"},{name:"AksjonspunktKode.VARSEL_REVURDERING_MANUELL"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"sendVarsel",value:{name:"boolean",required:!1}},{key:"fritekst",value:{name:"string",required:!1}}]}},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kode: AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL | AksjonspunktKode.VARSEL_REVURDERING_MANUELL;
  begrunnelse?: string;
  sendVarsel?: boolean;
  fritekst?: string;
}`,signature:{properties:[{key:"kode",value:{name:"union",raw:"AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL | AksjonspunktKode.VARSEL_REVURDERING_MANUELL",elements:[{name:"AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL"},{name:"AksjonspunktKode.VARSEL_REVURDERING_MANUELL"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"sendVarsel",value:{name:"boolean",required:!1}},{key:"fritekst",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};ll.__docgenInfo={description:`VarselOmRevurderingForm

Setter opp aksjonspunktet for avklaring av varsel om revurdering i søknad.`,methods:[],displayName:"VarselOmRevurderingForm",props:{behandlingArsaker:{required:!0,tsType:{name:"intersection['behandlingÅrsaker']",raw:"Behandling['behandlingÅrsaker']"},description:""},sprakkode:{required:!0,tsType:{name:"string"},description:""},behandlingType:{required:!0,tsType:{name:"string"},description:""},familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},soknadOriginalBehandling:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},familiehendelseOriginalBehandling:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VarselRevurderingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  sendVarsel?: boolean;
  fritekst?: string;
  frist?: string;
  ventearsak?: string;
} & AksjonspunktTilBekreftelse<
  AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL | AksjonspunktKode.VARSEL_REVURDERING_MANUELL
>`,elements:[{name:"signature",type:"object",raw:`{
  sendVarsel?: boolean;
  fritekst?: string;
  frist?: string;
  ventearsak?: string;
}`,signature:{properties:[{key:"sendVarsel",value:{name:"boolean",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"union",raw:"AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL | AksjonspunktKode.VARSEL_REVURDERING_MANUELL",elements:[{name:"AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL"},{name:"AksjonspunktKode.VARSEL_REVURDERING_MANUELL"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  arsakskode: string;
  dokumentMal: string;
  fritekst: string;
}`,signature:{properties:[{key:"arsakskode",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},formData:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  kode: AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL | AksjonspunktKode.VARSEL_REVURDERING_MANUELL;
  begrunnelse?: string;
  sendVarsel?: boolean;
  fritekst?: string;
}`,signature:{properties:[{key:"kode",value:{name:"union",raw:"AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL | AksjonspunktKode.VARSEL_REVURDERING_MANUELL",elements:[{name:"AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL"},{name:"AksjonspunktKode.VARSEL_REVURDERING_MANUELL"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"sendVarsel",value:{name:"boolean",required:!1}},{key:"fritekst",value:{name:"string",required:!1}}]}},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kode: AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL | AksjonspunktKode.VARSEL_REVURDERING_MANUELL;
  begrunnelse?: string;
  sendVarsel?: boolean;
  fritekst?: string;
}`,signature:{properties:[{key:"kode",value:{name:"union",raw:"AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL | AksjonspunktKode.VARSEL_REVURDERING_MANUELL",elements:[{name:"AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL"},{name:"AksjonspunktKode.VARSEL_REVURDERING_MANUELL"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"sendVarsel",value:{name:"boolean",required:!1}},{key:"fritekst",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const AP={"VarselOmRevurderingForm.VarselOmRevurdering":"Varsel om revurdering","VarselOmRevurderingForm.VarselOmRevurderingVurder":"Vurder om varsel om revurdering skal sendes til søker","VarselOmRevurderingForm.Etterkontroll":"Etterkontroll","VarselOmRevurderingForm.Manuell":"Manuell","VarselOmRevurderingForm.Bekreft":"Bekreft og fortsett","VarselOmRevurderingForm.IkkeSendVarsel":"Ikke send varsel til søker","VarselOmRevurderingForm.SendVarsel":"Send varsel til søker","VarselOmRevurderingForm.FritekstIBrev":"Fritekst i brev","VarselOmRevurderingForm.BegrunnelseForSvar":"Begrunnelse","VarselOmRevurderingForm.BrevBlirBestilt":"Brevet blir bestilt","VarselOmRevurderingForm.Begrunnelse":"Begrunnelse","VarselOmRevurderingForm.UtstedDato":"Utstedt dato","VarselOmRevurderingForm.Ytelsesvedtak":"Vedtak","VarselOmRevurderingForm.OpplysningerISoknad":"Opplysninger om fødsel i søknaden","VarselOmRevurderingForm.Preview":"Forhåndsvis","Malform.Beskrivelse":"Foretrukket språk"},SP=Ce(AP),dl=({behandling:e,familiehendelse:n,soknad:r,soknadOriginalBehandling:t,familiehendelseOriginalBehandling:a,aksjonspunkter:s,submitCallback:o,previewCallback:i,isReadOnly:l,alleKodeverk:d,formData:u,setFormData:g})=>y.jsx(Zo,{value:SP,children:y.jsx(ll,{behandlingArsaker:e.behandlingÅrsaker,sprakkode:e.sprakkode,behandlingType:e.type,familiehendelse:n,soknad:r,soknadOriginalBehandling:t,familiehendelseOriginalBehandling:a,aksjonspunkter:s,submitCallback:o,previewCallback:i,readOnly:l,alleKodeverk:d,formData:u,setFormData:g})});dl.__docgenInfo={description:"",methods:[],displayName:"VarselOmRevurderingProsessIndex",props:{familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},soknadOriginalBehandling:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},familiehendelseOriginalBehandling:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  arsakskode: string;
  dokumentMal: string;
  fritekst: string;
}`,signature:{properties:[{key:"arsakskode",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}],raw:"Vilkar[]"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"any"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};dl.__docgenInfo={description:"",methods:[],displayName:"VarselOmRevurderingProsessIndex",props:{familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},soknadOriginalBehandling:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},familiehendelseOriginalBehandling:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  arsakskode: string;
  dokumentMal: string;
  fritekst: string;
}`,signature:{properties:[{key:"arsakskode",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}],raw:"Vilkar[]"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"any"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};const Lm={uuid:"1",versjon:1,behandlingÅrsaker:[{erAutomatiskRevurdering:!0}],sprakkode:"NN",type:Kr.FORSTEGANGSSOKNAD},NP={register:{avklartBarn:[{fodselsdato:"2019-01-10",dodsdato:void 0}]},gjeldende:{termindato:"2019-01-01",vedtaksDatoSomSvangerskapsuke:43}},Pm={fodselsdatoer:{1:"2019-01-10"},termindato:"2019-01-01",utstedtdato:"2019-01-02",antallBarn:1},DP={...Pm},OP={avklartBarn:[{fodselsdato:"2019-01-10"}],termindato:"2019-01-01",antallBarnTermin:1},IP=[{definisjon:ja.VARSEL_REVURDERING_MANUELL,status:Ba.OPPRETTET,begrunnelse:void 0}],jP={title:"prosess/prosess-varsel-om-revurdering",component:dl,args:{alleKodeverk:Tc,aksjonspunkter:IP,isReadOnly:!1,isAksjonspunktOpen:!0,readOnlySubmitButton:!0,status:"",vilkar:[],alleMerknaderFraBeslutter:{},setFormData:()=>{},familiehendelse:NP,soknad:Pm,soknadOriginalBehandling:DP,familiehendelseOriginalBehandling:OP,fagsak:{},submitCallback:ml("button-click"),previewCallback:ml("button-click")}},pr={args:{behandling:Lm}},yr={args:{behandling:{...Lm,type:Kr.REVURDERING}}};var Qd,eu,nu;pr.parameters={...pr.parameters,docs:{...(Qd=pr.parameters)==null?void 0:Qd.docs,source:{originalSource:`{
  args: {
    behandling: defaultBehandling
  }
}`,...(nu=(eu=pr.parameters)==null?void 0:eu.docs)==null?void 0:nu.source}}};var ru,tu,au;yr.parameters={...yr.parameters,docs:{...(ru=yr.parameters)==null?void 0:ru.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING
    }
  }
}`,...(au=(tu=yr.parameters)==null?void 0:tu.docs)==null?void 0:au.source}}};var su,ou,iu;pr.parameters={...pr.parameters,docs:{...(su=pr.parameters)==null?void 0:su.docs,source:{originalSource:`{
  args: {
    behandling: defaultBehandling
  }
}`,...(iu=(ou=pr.parameters)==null?void 0:ou.docs)==null?void 0:iu.source}}};var lu,du,uu;yr.parameters={...yr.parameters,docs:{...(lu=yr.parameters)==null?void 0:lu.docs,source:{originalSource:`{
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING
    }
  }
}`,...(uu=(du=yr.parameters)==null?void 0:du.docs)==null?void 0:uu.source}}};const BP=["ForFørstegangsbehandling","ForRevurdering"];export{pr as ForFørstegangsbehandling,yr as ForRevurdering,BP as __namedExportsOrder,jP as default};
