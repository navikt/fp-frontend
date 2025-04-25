var ok=Object.defineProperty;var lk=(e,t,r)=>t in e?ok(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var $=(e,t,r)=>lk(e,typeof t!="symbol"?t+"":t,r);import{j as E}from"./jsx-runtime-D_zvdyIk.js";import{r as k,R as y,b as eu}from"./index-C4XKfyRp.js";import{v as dk}from"./v4-CtRu48qb.js";import{e as uk}from"./entry-preview-C90Vv73T.js";import"./entry-preview-docs-BX9G6PXb.js";import{d as Te}from"./dayjs.min-DkLNzaWO.js";import{h as Oa,r as nu}from"./index-PUjTtqh4.js";import{g as gk}from"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BPwrHvJF.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./index-CXQShRbs.js";import"./index-DTjSd7F1.js";const{addons:mk}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:kk}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:eo}=__STORYBOOK_MODULE_GLOBAL__;var fk=Object.defineProperty,vk=(e,t)=>{for(var r in t)fk(e,r,{get:t[r],enumerable:!0})},ck="storybook/actions",Ek=`${ck}/action-event`,pk={depth:10,clearOnStoryChange:!0,limit:50},ru=(e,t)=>{let r=Object.getPrototypeOf(e);return!r||t(r)?r:ru(r,t)},yk=e=>!!(typeof e=="object"&&e&&ru(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),bk=e=>{if(yk(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let r=Object.getOwnPropertyDescriptor(t,"view"),n=r==null?void 0:r.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...r,value:Object.create(n.constructor.prototype)}),t}return e},hk=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?dk():Date.now().toString(36)+Math.random().toString(36).substring(2);function ir(e,t={}){let r={...pk,...t},n=function(...a){var g,m;if(t.implicit){let v=(g="__STORYBOOK_PREVIEW__"in eo?eo.__STORYBOOK_PREVIEW__:void 0)==null?void 0:g.storyRenders.find(p=>p.phase==="playing"||p.phase==="rendering");if(v){let p=!((m=globalThis==null?void 0:globalThis.FEATURES)!=null&&m.disallowImplicitActionsInRenderV8),c=new kk({phase:v.phase,name:e,deprecated:p});if(p)console.warn(c);else throw c}}let s=mk.getChannel(),i=hk(),o=5,l=a.map(bk),u=a.length>1?l:l[0],d={id:i,count:0,data:{name:e,args:u},options:{...r,maxDepth:o+(r.depth||3),allowFunction:r.allowFunction||!1}};s.emit(Ek,d)};return n.isAction=!0,n.implicit=t.implicit,n}const{definePreview:LO}=__STORYBOOK_MODULE_PREVIEW_API__,{global:ks}=__STORYBOOK_MODULE_GLOBAL__;var Ak={};vk(Ak,{argsEnhancers:()=>Nk,loaders:()=>_k});var tu=(e,t)=>typeof t[e]>"u"&&!(e in t),Tk=e=>{let{initialArgs:t,argTypes:r,id:n,parameters:{actions:a}}=e;if(!a||a.disable||!a.argTypesRegex||!r)return{};let s=new RegExp(a.argTypesRegex);return Object.entries(r).filter(([i])=>!!s.test(i)).reduce((i,[o,l])=>(tu(o,t)&&(i[o]=ir(o,{implicit:!0,id:n})),i),{})},Rk=e=>{let{initialArgs:t,argTypes:r,parameters:{actions:n}}=e;return n!=null&&n.disable||!r?{}:Object.entries(r).filter(([a,s])=>!!s.action).reduce((a,[s,i])=>(tu(s,t)&&(a[s]=ir(typeof i.action=="string"?i.action:s)),a),{})},Nk=[Rk,Tk],no=!1,Ik=e=>{let{parameters:{actions:t}}=e;if(!(t!=null&&t.disable)&&!no&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in ks&&typeof ks.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let r=ks.__STORYBOOK_TEST_ON_MOCK_CALL__;r((n,a)=>{let s=n.getMockName();s!=="spy"&&(!/^next\/.*::/.test(s)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(i=>s.startsWith(i)))&&ir(s)(a)}),no=!0}},_k=[Ik],dn=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN="5032",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(dn||{}),Ye=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(Ye||{}),Ua=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(Ua||{});Ua.BRUKERS_ANDEL;Ua.FRILANS;Ua.EGEN_NÆRING;var ve=(e=>(e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING",e.MELDING_TIL_ARBEIDSGIVER_NAV_NO="MELDING_TIL_ARBEIDSGIVER_NAV_NO",e.FORTSETT_UTEN_INNTEKTSMELDING="FORTSETT_UTEN_INNTEKTSMELDING",e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD",e.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING="IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.OPPRETT_BASERT_PÅ_INNTEKTSMELDING="OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.MANUELT_OPPRETTET_AV_SAKSBEHANDLER="MANUELT_OPPRETTET_AV_SAKSBEHANDLER",e.FJERN_FRA_BEHANDLINGEN="FJERN_FRA_BEHANDLINGEN",e.SLÅTT_SAMMEN_MED_ANNET="SLÅTT_SAMMEN_MED_ANNET",e.BRUK_MED_OVERSTYRT_PERIODE="BRUK_MED_OVERSTYRT_PERIODE",e.INNTEKT_IKKE_MED_I_BG="INNTEKT_IKKE_MED_I_BG",e.BRUK="BRUK",e.NYTT_ARBEIDSFORHOLD="NYTT_ARBEIDSFORHOLD",e))(ve||{}),au=(e=>(e.OPPRETTET="OPPRE",e.BEHANDLING_UTREDES="UTRED",e.AVSLUTTET="AVSLU",e.IVERKSETTER_VEDTAK="IVED",e.FATTER_VEDTAK="FVED",e))(au||{}),su=(e=>(e.FORSTEGANGSSOKNAD="BT-002",e.KLAGE="BT-003",e.REVURDERING="BT-004",e.DOKUMENTINNSYN="BT-006",e.TILBAKEKREVING="BT-007",e.ANKE="BT-008",e.TILBAKEKREVING_REVURDERING="BT-009",e))(su||{}),iu=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(iu||{}),bt=(e=>(e.ARBEID_TYPE="ArbeidType",e.AVSLAGSARSAK="Avslagsårsak",e.VENT_AARSAK="Venteårsak",e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.KLAGE_AVVIST_AARSAK="KlageAvvistÅrsak",e.KLAGE_MEDHOLD_ARSAK="KlageMedholdÅrsak",e.KLAGE_HJEMMEL="KlageHjemmel",e.OMSORGSOVERTAKELSE_VILKAR_TYPE="OmsorgsovertakelseVilkårType",e.MEDLEMSKAP_MANUELL_VURDERING_TYPE="MedlemskapManuellVurderingType",e.VERGE_TYPE="VergeType",e.LANDKODER="Landkoder",e.MORS_AKTIVITET="MorsAktivitet",e.VIRKSOMHET_TYPE="VirksomhetType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.PERSONSTATUS_TYPE="PersonstatusType",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.FORELDRE_TYPE="ForeldreType",e.FAMILIE_HENDELSE_TYPE="FamilieHendelseType",e.INNSYN_RESULTAT_TYPE="InnsynResultatType",e.BEHANDLING_TYPE="BehandlingType",e.OPPHOLD_ARSAK="OppholdÅrsak",e.UTSETTELSE_AARSAK_TYPE="UtsettelseÅrsak",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.UTTAK_PERIODE_TYPE="UttakPeriodeType",e.REVURDERING_VARSLING_ÅRSAK="RevurderingVarslingÅrsak",e.MANUELL_BEHANDLING_AARSAK="ManuellBehandlingÅrsak",e.PERIODE_RESULTAT_AARSAK="PeriodeResultatÅrsak",e.AKTIVITET_STATUS="AktivitetStatus",e.ARBEIDSKATEGORI="Arbeidskategori",e.REGION="Region",e.SIVILSTAND_TYPE="SivilstandType",e.FAKTA_OM_BEREGNING_TILFELLE="FaktaOmBeregningTilfelle",e.GRADERING_AVSLAG_AARSAK="GraderingAvslagÅrsak",e.SKJERMLENKE_TYPE="SkjermlenkeType",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.HISTORIKK_AKTOER="HistorikkAktør",e.BEHANDLING_STATUS="BehandlingStatus",e.FAR_SOEKER_TYPE="FarSøkerType",e.MEDLEMSKAP_DEKNING="MedlemskapDekningType",e.MEDLEMSKAP_TYPE="MedlemskapType",e.STOENADSKONTOTYPE="StønadskontoType",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.UTTAK_ARBEID_TYPE="UttakArbeidType",e.UTTAK_UTSETTELSE_TYPE="UttakUtsettelseType",e.VILKAR_TYPE="VilkårType",e.PERMISJONSBESKRIVELSE_TYPE="PermisjonsbeskrivelseType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.VURDER_AARSAK="VurderÅrsak",e.ANKE_OMGJOER_AARSAK="AnkeOmgjørÅrsak",e.OPPHOLDSTILLATELSE_TYPE="OppholdstillatelseType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e.FORDELING_PERIODE_KILDE="FordelingPeriodeKilde",e.RELASJONSROLLE_TYPE="RelasjonsRolleType",e.FAGSAK_MARKERING="FagsakMarkering",e.ADRESSE_TYPE="AdresseType",e.NATURAL_YTELSE_TYPE="NaturalYtelseType",e.OPPGAVE_TYPE="OppgaveType",e.AKTIVITETSKRAV_PERMISJON_TYPE="AktivitetskravPermisjonType",e))(bt||{});const ws=(e,t,r,n)=>{let a=e[t];if(!a||a.length===0)return"";const s=a.find(i=>i.kode===r);return s?s.navn:""};var js=(e=>(e.MOR="MORA",e.FAR="FARA",e.MEDMOR="MMOR",e))(js||{}),Qe=(e=>(e.AVV_DOK="AVV_DOK",e.AVV_FODSEL="AVV_FODSEL",e.UTV_FRIST="UTV_FRIST",e.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG="VENT_PÅ_TILBAKEKREVINGSGRUNNLAG",e.VENT_PÅ_BRUKERTILBAKEMELDING="VENT_PÅ_BRUKERTILBAKEMELDING",e.VENT_UTLAND_TRYGD="VENT_UTLAND_TRYGD",e.UTVIDET_TILSVAR_FRIST="UTV_TIL_FRIST",e.ENDRE_TILKJENT_YTELSE="ENDRE_TILKJENT_YTELSE",e.VENT_PÅ_MULIG_MOTREGNING="VENT_PÅ_MULIG_MOTREGNING",e.AVV_RESPONS_REVURDERING="AVV_RESPONS_REVURDERING",e.FOR_TIDLIG_SOKNAD="FOR_TIDLIG_SOKNAD",e.VENT_PÅ_SISTE_AAP_ELLER_DP_MELDEKORT="VENT_PÅ_SISTE_AAP_MELDEKORT",e.ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER="ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",e.ANKE_OVERSENDT_TIL_TRYGDERETTEN="ANKE_OVERSENDT_TIL_TRYGDERETTEN",e.VENT_PÅ_KORRIGERT_BESTEBEREGNING="VENT_PÅ_KORRIGERT_BESTEBEREGNING",e.VENT_OPDT_INNTEKTSMELDING="VENT_OPDT_INNTEKTSMELDING",e.VENT_OPPTJENING_OPPLYSNINGER="VENT_OPPTJENING_OPPLYSNINGER",e.VENT_INNTEKT_RAPPORTERINGSFRIST="VENT_INNTEKT_RAPPORTERINGSFRIST",e.VENT_MANGLENDE_SYKEMELDING="VENT_MANGLENDE_SYKEMELDING",e.VENT_SØKNAD_SENDT_INFORMASJONSBREV="VENT_SØKNAD_SENDT_INFORMASJONSBREV",e.VENT_ÅPEN_BEHANDLING="VENT_ÅPEN_BEHANDLING",e.VENT_KABAL="VENT_KABAL",e))(Qe||{});const{global:Ok}=__STORYBOOK_MODULE_GLOBAL__,{setDefaultProjectAnnotations:wO,setProjectAnnotations:jO,composeStory:MO,composeStories:KO}=__STORYBOOK_MODULE_PREVIEW_API__;var{window:ro}=Ok;ro&&(ro.STORYBOOK_ENV="react");({...uk});var $l;typeof module<"u"&&(($l=module==null?void 0:module.hot)==null||$l.decline());var Ms=function(e,t){return Ms=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},Ms(e,t)};function On(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Ms(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var J=function(){return J=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},J.apply(this,arguments)};function Yr(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}function jn(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,s;n<a;n++)(s||!(n in t))&&(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return e.concat(s||Array.prototype.slice.call(t))}function Ln(e,t){var r=t&&t.cache?t.cache:Mk,n=t&&t.serializer?t.serializer:wk,a=t&&t.strategy?t.strategy:Pk;return a(e,{cache:r,serializer:n})}function Sk(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Dk(e,t,r,n){var a=Sk(n)?n:r(n),s=t.get(a);return typeof s>"u"&&(s=e.call(this,n),t.set(a,s)),s}function ou(e,t,r){var n=Array.prototype.slice.call(arguments,3),a=r(n),s=t.get(a);return typeof s>"u"&&(s=e.apply(this,n),t.set(a,s)),s}function lu(e,t,r,n,a){return r.bind(t,e,n,a)}function Pk(e,t){var r=e.length===1?Dk:ou;return lu(e,this,r,t.cache.create(),t.serializer)}function Lk(e,t){return lu(e,this,ou,t.cache.create(),t.serializer)}var wk=function(){return JSON.stringify(arguments)},jk=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(t){return this.cache[t]},e.prototype.set=function(t,r){this.cache[t]=r},e}(),Mk={create:function(){return new jk}},wn={variadic:Lk},le;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(le||(le={}));var Se;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Se||(Se={}));var $r;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})($r||($r={}));function to(e){return e.type===Se.literal}function Kk(e){return e.type===Se.argument}function du(e){return e.type===Se.number}function uu(e){return e.type===Se.date}function gu(e){return e.type===Se.time}function mu(e){return e.type===Se.select}function ku(e){return e.type===Se.plural}function Fk(e){return e.type===Se.pound}function fu(e){return e.type===Se.tag}function vu(e){return!!(e&&typeof e=="object"&&e.type===$r.number)}function Ks(e){return!!(e&&typeof e=="object"&&e.type===$r.dateTime)}var cu=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,qk=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function Vk(e){var t={};return e.replace(qk,function(r){var n=r.length;switch(r[0]){case"G":t.era=n===4?"long":n===5?"narrow":"short";break;case"y":t.year=n===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][n-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][n-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=n===4?"long":n===5?"narrow":"short";break;case"e":if(n<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][n-4];break;case"c":if(n<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][n-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][n-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][n-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][n-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][n-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][n-1];break;case"s":t.second=["numeric","2-digit"][n-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=n<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),t}var xk=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function Gk(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var t=e.split(xk).filter(function(m){return m.length>0}),r=[],n=0,a=t;n<a.length;n++){var s=a[n],i=s.split("/");if(i.length===0)throw new Error("Invalid number skeleton");for(var o=i[0],l=i.slice(1),u=0,d=l;u<d.length;u++){var g=d[u];if(g.length===0)throw new Error("Invalid number skeleton")}r.push({stem:o,options:l})}return r}function Bk(e){return e.replace(/^(.*?)-/,"")}var ao=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Eu=/^(@+)?(\+|#+)?[rs]?$/g,Uk=/(\*)(0+)|(#+)(0+)|(0+)/g,pu=/^(0+)$/;function so(e){var t={};return e[e.length-1]==="r"?t.roundingPriority="morePrecision":e[e.length-1]==="s"&&(t.roundingPriority="lessPrecision"),e.replace(Eu,function(r,n,a){return typeof a!="string"?(t.minimumSignificantDigits=n.length,t.maximumSignificantDigits=n.length):a==="+"?t.minimumSignificantDigits=n.length:n[0]==="#"?t.maximumSignificantDigits=n.length:(t.minimumSignificantDigits=n.length,t.maximumSignificantDigits=n.length+(typeof a=="string"?a.length:0)),""}),t}function yu(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Hk(e){var t;if(e[0]==="E"&&e[1]==="E"?(t={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(t={notation:"scientific"},e=e.slice(1)),t){var r=e.slice(0,2);if(r==="+!"?(t.signDisplay="always",e=e.slice(2)):r==="+?"&&(t.signDisplay="exceptZero",e=e.slice(2)),!pu.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function io(e){var t={},r=yu(e);return r||t}function Ck(e){for(var t={},r=0,n=e;r<n.length;r++){var a=n[r];switch(a.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=a.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=Bk(a.options[0]);continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=J(J(J({},t),{notation:"scientific"}),a.options.reduce(function(l,u){return J(J({},l),io(u))},{}));continue;case"engineering":t=J(J(J({},t),{notation:"engineering"}),a.options.reduce(function(l,u){return J(J({},l),io(u))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(a.options[0]);continue;case"rounding-mode-floor":t.roundingMode="floor";continue;case"rounding-mode-ceiling":t.roundingMode="ceil";continue;case"rounding-mode-down":t.roundingMode="trunc";continue;case"rounding-mode-up":t.roundingMode="expand";continue;case"rounding-mode-half-even":t.roundingMode="halfEven";continue;case"rounding-mode-half-down":t.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":t.roundingMode="halfExpand";continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(Uk,function(l,u,d,g,m,v){if(u)t.minimumIntegerDigits=d.length;else{if(g&&m)throw new Error("We currently do not support maximum integer digits");if(v)throw new Error("We currently do not support exact integer digits")}return""});continue}if(pu.test(a.stem)){t.minimumIntegerDigits=a.stem.length;continue}if(ao.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(ao,function(l,u,d,g,m,v){return d==="*"?t.minimumFractionDigits=u.length:g&&g[0]==="#"?t.maximumFractionDigits=g.length:m&&v?(t.minimumFractionDigits=m.length,t.maximumFractionDigits=m.length+v.length):(t.minimumFractionDigits=u.length,t.maximumFractionDigits=u.length),""});var s=a.options[0];s==="w"?t=J(J({},t),{trailingZeroDisplay:"stripIfInteger"}):s&&(t=J(J({},t),so(s)));continue}if(Eu.test(a.stem)){t=J(J({},t),so(a.stem));continue}var i=yu(a.stem);i&&(t=J(J({},t),i));var o=Hk(a.stem);o&&(t=J(J({},t),o))}return t}var Yt={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Yk(e,t){for(var r="",n=0;n<e.length;n++){var a=e.charAt(n);if(a==="j"){for(var s=0;n+1<e.length&&e.charAt(n+1)===a;)s++,n++;var i=1+(s&1),o=s<2?1:3+(s>>1),l="a",u=$k(t);for((u=="H"||u=="k")&&(o=0);o-- >0;)r+=l;for(;i-- >0;)r=u+r}else a==="J"?r+="H":r+=a}return r}function $k(e){var t=e.hourCycle;if(t===void 0&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,n;r!=="root"&&(n=e.maximize().region);var a=Yt[n||""]||Yt[r||""]||Yt["".concat(r,"-001")]||Yt["001"];return a[0]}var fs,Wk=new RegExp("^".concat(cu.source,"*")),zk=new RegExp("".concat(cu.source,"*$"));function ue(e,t){return{start:e,end:t}}var Jk=!!String.prototype.startsWith&&"_a".startsWith("a",1),Xk=!!String.fromCodePoint,Zk=!!Object.fromEntries,Qk=!!String.prototype.codePointAt,ef=!!String.prototype.trimStart,nf=!!String.prototype.trimEnd,rf=!!Number.isSafeInteger,tf=rf?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Fs=!0;try{var af=hu("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Fs=((fs=af.exec("a"))===null||fs===void 0?void 0:fs[0])==="a"}catch{Fs=!1}var oo=Jk?function(t,r,n){return t.startsWith(r,n)}:function(t,r,n){return t.slice(n,n+r.length)===r},qs=Xk?String.fromCodePoint:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var n="",a=t.length,s=0,i;a>s;){if(i=t[s++],i>1114111)throw RangeError(i+" is not a valid code point");n+=i<65536?String.fromCharCode(i):String.fromCharCode(((i-=65536)>>10)+55296,i%1024+56320)}return n},lo=Zk?Object.fromEntries:function(t){for(var r={},n=0,a=t;n<a.length;n++){var s=a[n],i=s[0],o=s[1];r[i]=o}return r},bu=Qk?function(t,r){return t.codePointAt(r)}:function(t,r){var n=t.length;if(!(r<0||r>=n)){var a=t.charCodeAt(r),s;return a<55296||a>56319||r+1===n||(s=t.charCodeAt(r+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},sf=ef?function(t){return t.trimStart()}:function(t){return t.replace(Wk,"")},of=nf?function(t){return t.trimEnd()}:function(t){return t.replace(zk,"")};function hu(e,t){return new RegExp(e,t)}var Vs;if(Fs){var uo=hu("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Vs=function(t,r){var n;uo.lastIndex=r;var a=uo.exec(t);return(n=a[1])!==null&&n!==void 0?n:""}}else Vs=function(t,r){for(var n=[];;){var a=bu(t,r);if(a===void 0||Au(a)||gf(a))break;n.push(a),r+=a>=65536?2:1}return qs.apply(void 0,n)};var lf=function(){function e(t,r){r===void 0&&(r={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(t,r,n){for(var a=[];!this.isEOF();){var s=this.char();if(s===123){var i=this.parseArgument(t,n);if(i.err)return i;a.push(i.val)}else{if(s===125&&t>0)break;if(s===35&&(r==="plural"||r==="selectordinal")){var o=this.clonePosition();this.bump(),a.push({type:Se.pound,location:ue(o,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(n)break;return this.error(le.UNMATCHED_CLOSING_TAG,ue(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&xs(this.peek()||0)){var i=this.parseTag(t,r);if(i.err)return i;a.push(i.val)}else{var i=this.parseLiteral(t,r);if(i.err)return i;a.push(i.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(t,r){var n=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Se.literal,value:"<".concat(a,"/>"),location:ue(n,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(t+1,r,!0);if(s.err)return s;var i=s.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!xs(this.char()))return this.error(le.INVALID_TAG,ue(o,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return a!==u?this.error(le.UNMATCHED_CLOSING_TAG,ue(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Se.tag,value:a,children:i,location:ue(n,this.clonePosition())},err:null}:this.error(le.INVALID_TAG,ue(o,this.clonePosition())))}else return this.error(le.UNCLOSED_TAG,ue(n,this.clonePosition()))}else return this.error(le.INVALID_TAG,ue(n,this.clonePosition()))},e.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&uf(this.char());)this.bump();return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(t,r){for(var n=this.clonePosition(),a="";;){var s=this.tryParseQuote(r);if(s){a+=s;continue}var i=this.tryParseUnquoted(t,r);if(i){a+=i;continue}var o=this.tryParseLeftAngleBracket();if(o){a+=o;continue}break}var l=ue(n,this.clonePosition());return{val:{type:Se.literal,value:a,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!df(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(t){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(t==="plural"||t==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var n=this.char();if(n===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(n);this.bump()}return qs.apply(void 0,r)},e.prototype.tryParseUnquoted=function(t,r){if(this.isEOF())return null;var n=this.char();return n===60||n===123||n===35&&(r==="plural"||r==="selectordinal")||n===125&&t>0?null:(this.bump(),qs(n))},e.prototype.parseArgument=function(t,r){var n=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(le.EXPECT_ARGUMENT_CLOSING_BRACE,ue(n,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(le.EMPTY_ARGUMENT,ue(n,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(le.MALFORMED_ARGUMENT,ue(n,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(le.EXPECT_ARGUMENT_CLOSING_BRACE,ue(n,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Se.argument,value:a,location:ue(n,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(le.EXPECT_ARGUMENT_CLOSING_BRACE,ue(n,this.clonePosition())):this.parseArgumentOptions(t,r,a,n);default:return this.error(le.MALFORMED_ARGUMENT,ue(n,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),r=this.offset(),n=Vs(this.message,r),a=r+n.length;this.bumpTo(a);var s=this.clonePosition(),i=ue(t,s);return{value:n,location:i}},e.prototype.parseArgumentOptions=function(t,r,n,a){var s,i=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(le.EXPECT_ARGUMENT_TYPE,ue(i,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),g=this.parseSimpleArgStyleIfPossible();if(g.err)return g;var m=of(g.val);if(m.length===0)return this.error(le.EXPECT_ARGUMENT_STYLE,ue(this.clonePosition(),this.clonePosition()));var v=ue(d,this.clonePosition());u={style:m,styleLocation:v}}var p=this.tryParseArgumentClose(a);if(p.err)return p;var c=ue(a,this.clonePosition());if(u&&oo(u==null?void 0:u.style,"::",0)){var b=sf(u.style.slice(2));if(o==="number"){var g=this.parseNumberSkeletonFromString(b,u.styleLocation);return g.err?g:{val:{type:Se.number,value:n,location:c,style:g.val},err:null}}else{if(b.length===0)return this.error(le.EXPECT_DATE_TIME_SKELETON,c);var T=b;this.locale&&(T=Yk(b,this.locale));var m={type:$r.dateTime,pattern:T,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?Vk(T):{}},f=o==="date"?Se.date:Se.time;return{val:{type:f,value:n,location:c,style:m},err:null}}}return{val:{type:o==="number"?Se.number:o==="date"?Se.date:Se.time,value:n,location:c,style:(s=u==null?void 0:u.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var h=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(le.EXPECT_SELECT_ARGUMENT_OPTIONS,ue(h,J({},h)));this.bumpSpace();var R=this.parseIdentifierIfPossible(),A=0;if(o!=="select"&&R.value==="offset"){if(!this.bumpIf(":"))return this.error(le.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ue(this.clonePosition(),this.clonePosition()));this.bumpSpace();var g=this.tryParseDecimalInteger(le.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,le.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(g.err)return g;this.bumpSpace(),R=this.parseIdentifierIfPossible(),A=g.val}var O=this.tryParsePluralOrSelectOptions(t,o,r,R);if(O.err)return O;var p=this.tryParseArgumentClose(a);if(p.err)return p;var I=ue(a,this.clonePosition());return o==="select"?{val:{type:Se.select,value:n,options:lo(O.val),location:I},err:null}:{val:{type:Se.plural,value:n,options:lo(O.val),offset:A,pluralType:o==="plural"?"cardinal":"ordinal",location:I},err:null}}default:return this.error(le.INVALID_ARGUMENT_TYPE,ue(i,l))}},e.prototype.tryParseArgumentClose=function(t){return this.isEOF()||this.char()!==125?this.error(le.EXPECT_ARGUMENT_CLOSING_BRACE,ue(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,r=this.clonePosition();!this.isEOF();){var n=this.char();switch(n){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(le.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,ue(a,this.clonePosition()));this.bump();break}case 123:{t+=1,this.bump();break}case 125:{if(t>0)t-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(t,r){var n=[];try{n=Gk(t)}catch{return this.error(le.INVALID_NUMBER_SKELETON,r)}return{val:{type:$r.number,tokens:n,location:r,parsedOptions:this.shouldParseSkeletons?Ck(n):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(t,r,n,a){for(var s,i=!1,o=[],l=new Set,u=a.value,d=a.location;;){if(u.length===0){var g=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var m=this.tryParseDecimalInteger(le.EXPECT_PLURAL_ARGUMENT_SELECTOR,le.INVALID_PLURAL_ARGUMENT_SELECTOR);if(m.err)return m;d=ue(g,this.clonePosition()),u=this.message.slice(g.offset,this.offset())}else break}if(l.has(u))return this.error(r==="select"?le.DUPLICATE_SELECT_ARGUMENT_SELECTOR:le.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);u==="other"&&(i=!0),this.bumpSpace();var v=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?le.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:le.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,ue(this.clonePosition(),this.clonePosition()));var p=this.parseMessage(t+1,r,n);if(p.err)return p;var c=this.tryParseArgumentClose(v);if(c.err)return c;o.push([u,{value:p.val,location:ue(v,this.clonePosition())}]),l.add(u),this.bumpSpace(),s=this.parseIdentifierIfPossible(),u=s.value,d=s.location}return o.length===0?this.error(r==="select"?le.EXPECT_SELECT_ARGUMENT_SELECTOR:le.EXPECT_PLURAL_ARGUMENT_SELECTOR,ue(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!i?this.error(le.MISSING_OTHER_CLAUSE,ue(this.clonePosition(),this.clonePosition())):{val:o,err:null}},e.prototype.tryParseDecimalInteger=function(t,r){var n=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(n=-1);for(var s=!1,i=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)s=!0,i=i*10+(o-48),this.bump();else break}var l=ue(a,this.clonePosition());return s?(i*=n,tf(i)?{val:i,err:null}:this.error(r,l)):this.error(t,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var r=bu(this.message,t);if(r===void 0)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(t,r){return{val:null,err:{kind:t,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var t=this.char();t===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},e.prototype.bumpIf=function(t){if(oo(this.message,t,this.offset())){for(var r=0;r<t.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(t){var r=this.offset(),n=this.message.indexOf(t,r);return n>=0?(this.bumpTo(n),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var r=this.offset();if(r===t)break;if(r>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Au(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),r=this.offset(),n=this.message.charCodeAt(r+(t>=65536?2:1));return n??null},e}();function xs(e){return e>=97&&e<=122||e>=65&&e<=90}function df(e){return xs(e)||e===47}function uf(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Au(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function gf(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Gs(e){e.forEach(function(t){if(delete t.location,mu(t)||ku(t))for(var r in t.options)delete t.options[r].location,Gs(t.options[r].value);else du(t)&&vu(t.style)||(uu(t)||gu(t))&&Ks(t.style)?delete t.style.location:fu(t)&&Gs(t.children)})}function mf(e,t){t===void 0&&(t={}),t=J({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var r=new lf(e,t).parse();if(r.err){var n=SyntaxError(le[r.err.kind]);throw n.location=r.err.location,n.originalMessage=r.err.message,n}return t!=null&&t.captureLocation||Gs(r.val),r.val}var Gn;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Gn||(Gn={}));var mr=function(e){On(t,e);function t(r,n,a){var s=e.call(this,r)||this;return s.code=n,s.originalMessage=a,s}return t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),go=function(e){On(t,e);function t(r,n,a,s){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(n,'". Options are "').concat(Object.keys(a).join('", "'),'"'),Gn.INVALID_VALUE,s)||this}return t}(mr),kf=function(e){On(t,e);function t(r,n,a){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(n),Gn.INVALID_VALUE,a)||this}return t}(mr),ff=function(e){On(t,e);function t(r,n){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(n,'"'),Gn.MISSING_VALUE,n)||this}return t}(mr),en;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(en||(en={}));function vf(e){return e.length<2?e:e.reduce(function(t,r){var n=t[t.length-1];return!n||n.type!==en.literal||r.type!==en.literal?t.push(r):n.value+=r.value,t},[])}function Tu(e){return typeof e=="function"}function Aa(e,t,r,n,a,s,i){if(e.length===1&&to(e[0]))return[{type:en.literal,value:e[0].value}];for(var o=[],l=0,u=e;l<u.length;l++){var d=u[l];if(to(d)){o.push({type:en.literal,value:d.value});continue}if(Fk(d)){typeof s=="number"&&o.push({type:en.literal,value:r.getNumberFormat(t).format(s)});continue}var g=d.value;if(!(a&&g in a))throw new ff(g,i);var m=a[g];if(Kk(d)){(!m||typeof m=="string"||typeof m=="number")&&(m=typeof m=="string"||typeof m=="number"?String(m):""),o.push({type:typeof m=="string"?en.literal:en.object,value:m});continue}if(uu(d)){var v=typeof d.style=="string"?n.date[d.style]:Ks(d.style)?d.style.parsedOptions:void 0;o.push({type:en.literal,value:r.getDateTimeFormat(t,v).format(m)});continue}if(gu(d)){var v=typeof d.style=="string"?n.time[d.style]:Ks(d.style)?d.style.parsedOptions:n.time.medium;o.push({type:en.literal,value:r.getDateTimeFormat(t,v).format(m)});continue}if(du(d)){var v=typeof d.style=="string"?n.number[d.style]:vu(d.style)?d.style.parsedOptions:void 0;v&&v.scale&&(m=m*(v.scale||1)),o.push({type:en.literal,value:r.getNumberFormat(t,v).format(m)});continue}if(fu(d)){var p=d.children,c=d.value,b=a[c];if(!Tu(b))throw new kf(c,"function",i);var T=Aa(p,t,r,n,a,s),f=b(T.map(function(A){return A.value}));Array.isArray(f)||(f=[f]),o.push.apply(o,f.map(function(A){return{type:typeof A=="string"?en.literal:en.object,value:A}}))}if(mu(d)){var h=d.options[m]||d.options.other;if(!h)throw new go(d.value,m,Object.keys(d.options),i);o.push.apply(o,Aa(h.value,t,r,n,a));continue}if(ku(d)){var h=d.options["=".concat(m)];if(!h){if(!Intl.PluralRules)throw new mr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Gn.MISSING_INTL_API,i);var R=r.getPluralRules(t,{type:d.pluralType}).select(m-(d.offset||0));h=d.options[R]||d.options.other}if(!h)throw new go(d.value,m,Object.keys(d.options),i);o.push.apply(o,Aa(h.value,t,r,n,a,m-(d.offset||0)));continue}}return vf(o)}function cf(e,t){return t?J(J(J({},e||{}),t||{}),Object.keys(e).reduce(function(r,n){return r[n]=J(J({},e[n]),t[n]||{}),r},{})):e}function Ef(e,t){return t?Object.keys(e).reduce(function(r,n){return r[n]=cf(e[n],t[n]),r},J({},e)):e}function vs(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}function pf(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Ln(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.NumberFormat).bind.apply(t,jn([void 0],r,!1)))},{cache:vs(e.number),strategy:wn.variadic}),getDateTimeFormat:Ln(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.DateTimeFormat).bind.apply(t,jn([void 0],r,!1)))},{cache:vs(e.dateTime),strategy:wn.variadic}),getPluralRules:Ln(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.PluralRules).bind.apply(t,jn([void 0],r,!1)))},{cache:vs(e.pluralRules),strategy:wn.variadic})}}var Ru=function(){function e(t,r,n,a){r===void 0&&(r=e.defaultLocale);var s=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var u=s.formatToParts(l);if(u.length===1)return u[0].value;var d=u.reduce(function(g,m){return!g.length||m.type!==en.literal||typeof g[g.length-1]!="string"?g.push(m.value):g[g.length-1]+=m.value,g},[]);return d.length<=1?d[0]||"":d},this.formatToParts=function(l){return Aa(s.ast,s.locales,s.formatters,s.formats,l,void 0,s.message)},this.resolvedOptions=function(){var l;return{locale:((l=s.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var i=a||{};i.formatters;var o=Yr(i,["formatters"]);this.ast=e.__parse(t,J(J({},o),{locale:this.resolvedLocale}))}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Ef(e.formats,n),this.formatters=a&&a.formatters||pf(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(t){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(t);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof t=="string"?t:t[0])}},e.__parse=mf,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),_r;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(_r||(_r={}));var _t=function(e){On(t,e);function t(r,n,a){var s=this,i=a?a instanceof Error?a:new Error(String(a)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(n,`
`).concat(i?`
`.concat(i.message,`
`).concat(i.stack):""))||this,s.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,t),s}return t}(Error),yf=function(e){On(t,e);function t(r,n){return e.call(this,_r.UNSUPPORTED_FORMATTER,r,n)||this}return t}(_t),bf=function(e){On(t,e);function t(r,n){return e.call(this,_r.INVALID_CONFIG,r,n)||this}return t}(_t),mo=function(e){On(t,e);function t(r,n){return e.call(this,_r.MISSING_DATA,r,n)||this}return t}(_t),yn=function(e){On(t,e);function t(r,n,a){var s=e.call(this,_r.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(n,`
`),a)||this;return s.locale=n,s}return t}(_t),cs=function(e){On(t,e);function t(r,n,a,s){var i=e.call(this,"".concat(r,`
MessageID: `).concat(a==null?void 0:a.id,`
Default Message: `).concat(a==null?void 0:a.defaultMessage,`
Description: `).concat(a==null?void 0:a.description,`
`),n,s)||this;return i.descriptor=a,i.locale=n,i}return t}(yn),hf=function(e){On(t,e);function t(r,n){var a=e.call(this,_r.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(n,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(s){var i;return(i=s.value)!==null&&i!==void 0?i:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return a.descriptor=r,a}return t}(_t);function Af(e,t,r){if(r===void 0&&(r=Error),!e)throw new r(t)}function et(e,t,r){return r===void 0&&(r={}),t.reduce(function(n,a){return a in e?n[a]=e[a]:a in r&&(n[a]=r[a]),n},{})}var Tf=function(e){},Rf=function(e){},Nu={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Tf,onWarn:Rf};function Iu(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function hr(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}function Nf(e){e===void 0&&(e=Iu());var t=Intl.RelativeTimeFormat,r=Intl.ListFormat,n=Intl.DisplayNames,a=Ln(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.DateTimeFormat).bind.apply(o,jn([void 0],l,!1)))},{cache:hr(e.dateTime),strategy:wn.variadic}),s=Ln(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.NumberFormat).bind.apply(o,jn([void 0],l,!1)))},{cache:hr(e.number),strategy:wn.variadic}),i=Ln(function(){for(var o,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((o=Intl.PluralRules).bind.apply(o,jn([void 0],l,!1)))},{cache:hr(e.pluralRules),strategy:wn.variadic});return{getDateTimeFormat:a,getNumberFormat:s,getMessageFormat:Ln(function(o,l,u,d){return new Ru(o,l,u,J({formatters:{getNumberFormat:s,getDateTimeFormat:a,getPluralRules:i}},d||{}))},{cache:hr(e.message),strategy:wn.variadic}),getRelativeTimeFormat:Ln(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(t.bind.apply(t,jn([void 0],o,!1)))},{cache:hr(e.relativeTime),strategy:wn.variadic}),getPluralRules:i,getListFormat:Ln(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(r.bind.apply(r,jn([void 0],o,!1)))},{cache:hr(e.list),strategy:wn.variadic}),getDisplayNames:Ln(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new(n.bind.apply(n,jn([void 0],o,!1)))},{cache:hr(e.displayNames),strategy:wn.variadic})}}function ki(e,t,r,n){var a=e&&e[t],s;if(a&&(s=a[r]),s)return s;n(new yf("No ".concat(t," format named: ").concat(r)))}function $t(e,t){return Object.keys(e).reduce(function(r,n){return r[n]=J({timeZone:t},e[n]),r},{})}function ko(e,t){var r=Object.keys(J(J({},e),t));return r.reduce(function(n,a){return n[a]=J(J({},e[a]||{}),t[a]||{}),n},{})}function fo(e,t){if(!t)return e;var r=Ru.formats;return J(J(J({},r),e),{date:ko($t(r.date,t),$t(e.date||{},t)),time:ko($t(r.time,t),$t(e.time||{},t))})}var Bs=function(e,t,r,n,a){var s=e.locale,i=e.formats,o=e.messages,l=e.defaultLocale,u=e.defaultFormats,d=e.fallbackOnEmptyString,g=e.onError,m=e.timeZone,v=e.defaultRichTextElements;r===void 0&&(r={id:""});var p=r.id,c=r.defaultMessage;Af(!!p,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var b=String(p),T=o&&Object.prototype.hasOwnProperty.call(o,b)&&o[b];if(Array.isArray(T)&&T.length===1&&T[0].type===Se.literal)return T[0].value;if(!n&&T&&typeof T=="string"&&!v)return T.replace(/'\{(.*?)\}'/gi,"{$1}");if(n=J(J({},v),n||{}),i=fo(i,m),u=fo(u,m),!T){if(d===!1&&T==="")return T;if((!c||s&&s.toLowerCase()!==l.toLowerCase())&&g(new hf(r,s)),c)try{var f=t.getMessageFormat(c,l,u,a);return f.format(n)}catch(h){return g(new cs('Error formatting default message for: "'.concat(b,'", rendering default message verbatim'),s,r,h)),typeof c=="string"?c:b}return b}try{var f=t.getMessageFormat(T,s,i,J({formatters:t},a||{}));return f.format(n)}catch(h){g(new cs('Error formatting message: "'.concat(b,'", using ').concat(c?"default message":"id"," as fallback."),s,r,h))}if(c)try{var f=t.getMessageFormat(c,l,u,a);return f.format(n)}catch(h){g(new cs('Error formatting the default message for: "'.concat(b,'", rendering message verbatim'),s,r,h))}return typeof T=="string"?T:typeof c=="string"?c:b},If=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Ot(e,t,r,n){var a=e.locale,s=e.formats,i=e.onError,o=e.timeZone;n===void 0&&(n={});var l=n.format,u=J(J({},o&&{timeZone:o}),l&&ki(s,t,l,i)),d=et(n,If,u);return t==="time"&&!d.hour&&!d.minute&&!d.second&&!d.timeStyle&&!d.dateStyle&&(d=J(J({},d),{hour:"numeric",minute:"numeric"})),r(a,d)}function _f(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Ot(e,"date",t,i).format(o)}catch(l){e.onError(new yn("Error formatting date.",e.locale,l))}return String(o)}function Of(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Ot(e,"time",t,i).format(o)}catch(l){e.onError(new yn("Error formatting time.",e.locale,l))}return String(o)}function Sf(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],i=r[2],o=i===void 0?{}:i,l=typeof a=="string"?new Date(a||0):a,u=typeof s=="string"?new Date(s||0):s;try{return Ot(e,"dateTimeRange",t,o).formatRange(l,u)}catch(d){e.onError(new yn("Error formatting date time range.",e.locale,d))}return String(l)}function Df(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Ot(e,"date",t,i).formatToParts(o)}catch(l){e.onError(new yn("Error formatting date.",e.locale,l))}return[]}function Pf(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],s=r[1],i=s===void 0?{}:s,o=typeof a=="string"?new Date(a||0):a;try{return Ot(e,"time",t,i).formatToParts(o)}catch(l){e.onError(new yn("Error formatting time.",e.locale,l))}return[]}var Lf=["style","type","fallback","languageDisplay"];function wf(e,t,r,n){var a=e.locale,s=e.onError,i=Intl.DisplayNames;i||s(new mr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Gn.MISSING_INTL_API));var o=et(n,Lf);try{return t(a,o).of(r)}catch(l){s(new yn("Error formatting display name.",a,l))}}var jf=["type","style"],vo=Date.now();function Mf(e){return"".concat(vo,"_").concat(e,"_").concat(vo)}function Kf(e,t,r,n){n===void 0&&(n={});var a=_u(e,t,r,n).reduce(function(s,i){var o=i.value;return typeof o!="string"?s.push(o):typeof s[s.length-1]=="string"?s[s.length-1]+=o:s.push(o),s},[]);return a.length===1?a[0]:a.length===0?"":a}function _u(e,t,r,n){var a=e.locale,s=e.onError;n===void 0&&(n={});var i=Intl.ListFormat;i||s(new mr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Gn.MISSING_INTL_API));var o=et(n,jf);try{var l={},u=r.map(function(d,g){if(typeof d=="object"){var m=Mf(g);return l[m]=d,m}return String(d)});return t(a,o).formatToParts(u).map(function(d){return d.type==="literal"?d:J(J({},d),{value:l[d.value]||d.value})})}catch(d){s(new yn("Error formatting list.",a,d))}return r}var Ff=["type"];function qf(e,t,r,n){var a=e.locale,s=e.onError;n===void 0&&(n={}),Intl.PluralRules||s(new mr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Gn.MISSING_INTL_API));var i=et(n,Ff);try{return t(a,i).select(r)}catch(o){s(new yn("Error formatting plural.",a,o))}return"other"}var Vf=["numeric","style"];function xf(e,t,r){var n=e.locale,a=e.formats,s=e.onError;r===void 0&&(r={});var i=r.format,o=!!i&&ki(a,"relative",i,s)||{},l=et(r,Vf,o);return t(n,l)}function Gf(e,t,r,n,a){a===void 0&&(a={}),n||(n="second");var s=Intl.RelativeTimeFormat;s||e.onError(new mr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Gn.MISSING_INTL_API));try{return xf(e,t,a).format(r,n)}catch(i){e.onError(new yn("Error formatting relative time.",e.locale,i))}return String(r)}var Bf=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Ou(e,t,r){var n=e.locale,a=e.formats,s=e.onError;r===void 0&&(r={});var i=r.format,o=i&&ki(a,"number",i,s)||{},l=et(r,Bf,o);return t(n,l)}function Uf(e,t,r,n){n===void 0&&(n={});try{return Ou(e,t,n).format(r)}catch(a){e.onError(new yn("Error formatting number.",e.locale,a))}return String(r)}function Hf(e,t,r,n){n===void 0&&(n={});try{return Ou(e,t,n).formatToParts(r)}catch(a){e.onError(new yn("Error formatting number.",e.locale,a))}return[]}function Cf(e){var t=e?e[Object.keys(e)[0]]:void 0;return typeof t=="string"}function Yf(e){e.onWarn&&e.defaultRichTextElements&&Cf(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function $f(e,t){var r=Nf(t),n=J(J({},Nu),e),a=n.locale,s=n.defaultLocale,i=n.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&i?i(new mo('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&i&&i(new mo('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(i&&i(new bf('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),n.locale=n.defaultLocale||"en"),Yf(n),J(J({},n),{formatters:r,formatNumber:Uf.bind(null,n,r.getNumberFormat),formatNumberToParts:Hf.bind(null,n,r.getNumberFormat),formatRelativeTime:Gf.bind(null,n,r.getRelativeTimeFormat),formatDate:_f.bind(null,n,r.getDateTimeFormat),formatDateToParts:Df.bind(null,n,r.getDateTimeFormat),formatTime:Of.bind(null,n,r.getDateTimeFormat),formatDateTimeRange:Sf.bind(null,n,r.getDateTimeFormat),formatTimeToParts:Pf.bind(null,n,r.getDateTimeFormat),formatPlural:qf.bind(null,n,r.getPluralRules),formatMessage:Bs.bind(null,n,r),$t:Bs.bind(null,n,r),formatList:Kf.bind(null,n,r.getListFormat),formatListToParts:_u.bind(null,n,r.getListFormat),formatDisplayName:wf.bind(null,n,r.getDisplayNames)})}function Wf(e,t,r){if(r===void 0&&(r=Error),!e)throw new r(t)}function zf(e){Wf(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Jf=J(J({},Nu),{textComponent:k.Fragment}),Xf={key:42},Zf=function(e){return k.isValidElement(e)?k.createElement(k.Fragment,Xf,e):e},Qf=function(e){var t;return(t=k.Children.map(e,Zf))!==null&&t!==void 0?t:[]};function ev(e){return function(t){return e(k.Children.toArray(t))}}function co(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),a=r.length;if(n.length!==a)return!1;for(var s=0;s<a;s++){var i=r[s];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}var Es={exports:{}},fe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo;function nv(){if(Eo)return fe;Eo=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,o=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,g=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,c=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,T=e?Symbol.for("react.responder"):60118,f=e?Symbol.for("react.scope"):60119;function h(A){if(typeof A=="object"&&A!==null){var O=A.$$typeof;switch(O){case t:switch(A=A.type,A){case l:case u:case n:case s:case a:case g:return A;default:switch(A=A&&A.$$typeof,A){case o:case d:case p:case v:case i:return A;default:return O}}case r:return O}}}function R(A){return h(A)===u}return fe.AsyncMode=l,fe.ConcurrentMode=u,fe.ContextConsumer=o,fe.ContextProvider=i,fe.Element=t,fe.ForwardRef=d,fe.Fragment=n,fe.Lazy=p,fe.Memo=v,fe.Portal=r,fe.Profiler=s,fe.StrictMode=a,fe.Suspense=g,fe.isAsyncMode=function(A){return R(A)||h(A)===l},fe.isConcurrentMode=R,fe.isContextConsumer=function(A){return h(A)===o},fe.isContextProvider=function(A){return h(A)===i},fe.isElement=function(A){return typeof A=="object"&&A!==null&&A.$$typeof===t},fe.isForwardRef=function(A){return h(A)===d},fe.isFragment=function(A){return h(A)===n},fe.isLazy=function(A){return h(A)===p},fe.isMemo=function(A){return h(A)===v},fe.isPortal=function(A){return h(A)===r},fe.isProfiler=function(A){return h(A)===s},fe.isStrictMode=function(A){return h(A)===a},fe.isSuspense=function(A){return h(A)===g},fe.isValidElementType=function(A){return typeof A=="string"||typeof A=="function"||A===n||A===u||A===s||A===a||A===g||A===m||typeof A=="object"&&A!==null&&(A.$$typeof===p||A.$$typeof===v||A.$$typeof===i||A.$$typeof===o||A.$$typeof===d||A.$$typeof===b||A.$$typeof===T||A.$$typeof===f||A.$$typeof===c)},fe.typeOf=h,fe}var po;function rv(){return po||(po=1,Es.exports=nv()),Es.exports}var ps,yo;function tv(){if(yo)return ps;yo=1;var e=rv(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[e.ForwardRef]=n,s[e.Memo]=a;function i(p){return e.isMemo(p)?a:s[p.$$typeof]||t}var o=Object.defineProperty,l=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,m=Object.prototype;function v(p,c,b){if(typeof c!="string"){if(m){var T=g(c);T&&T!==m&&v(p,T,b)}var f=l(c);u&&(f=f.concat(u(c)));for(var h=i(p),R=i(c),A=0;A<f.length;++A){var O=f[A];if(!r[O]&&!(b&&b[O])&&!(R&&R[O])&&!(h&&h[O])){var I=d(c,O);try{o(p,O,I)}catch{}}}}return p}return ps=v,ps}tv();var fi=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=k.createContext(null)):k.createContext(null);fi.Consumer;var av=fi.Provider,Su=av,sv=fi;function Un(){var e=k.useContext(sv);return zf(e),e}var Us;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Us||(Us={}));var Hs;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Hs||(Hs={}));function Du(e){var t=function(r){var n=Un(),a=r.value,s=r.children,i=Yr(r,["value","children"]),o=typeof a=="string"?new Date(a||0):a,l=e==="formatDate"?n.formatDateToParts(o,i):n.formatTimeToParts(o,i);return s(l)};return t.displayName=Hs[e],t}function St(e){var t=function(r){var n=Un(),a=r.value,s=r.children,i=Yr(r,["value","children"]),o=n[e](a,i);if(typeof s=="function")return s(o);var l=n.textComponent||k.Fragment;return k.createElement(l,null,o)};return t.displayName=Us[e],t}function Pu(e){return e&&Object.keys(e).reduce(function(t,r){var n=e[r];return t[r]=Tu(n)?ev(n):n,t},{})}var bo=function(e,t,r,n){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];var i=Pu(n),o=Bs.apply(void 0,jn([e,t,r,i],a,!1));return Array.isArray(o)?Qf(o):o},iv=function(e,t){var r=e.defaultRichTextElements,n=Yr(e,["defaultRichTextElements"]),a=Pu(r),s=$f(J(J(J({},Jf),n),{defaultRichTextElements:a}),t),i={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:a};return J(J({},s),{formatMessage:bo.bind(null,i,s.formatters),$t:bo.bind(null,i,s.formatters)})};function ov(e,t){var r=e.values,n=Yr(e,["values"]),a=t.values,s=Yr(t,["values"]);return co(a,r)&&co(n,s)}function Lu(e){var t=Un(),r=t.formatMessage,n=t.textComponent,a=n===void 0?k.Fragment:n,s=e.id,i=e.description,o=e.defaultMessage,l=e.values,u=e.children,d=e.tagName,g=d===void 0?a:d,m=e.ignoreTag,v={id:s,description:i,defaultMessage:o},p=r(v,l,{ignoreTag:m});return typeof u=="function"?u(Array.isArray(p)?p:[p]):g?k.createElement(g,null,p):k.createElement(k.Fragment,null,p)}Lu.displayName="FormattedMessage";var C=k.memo(Lu,ov);C.displayName="MemoizedFormattedMessage";St("formatDate");St("formatTime");St("formatNumber");St("formatList");St("formatDisplayName");Du("formatDate");Du("formatTime");const wu=k.createContext(null),ju=({children:e,behandling:t})=>{const[r,n]=k.useState();k.useEffect(()=>{r&&n(void 0)},[t.uuid,t.versjon]);const a=k.useMemo(()=>({mellomlagretFormData:r,setMellomlagretFormData:n}),[r,n]);return E.jsx(wu,{value:a,children:e})},lv=()=>{const e=k.useContext(wu);if(!e)throw new Error("MellomlagretFormDataContext er ikke satt opp");return e};ju.__docgenInfo={description:"",methods:[],displayName:"MellomlagretFormDataProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
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
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
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
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""}}};const Mu=k.createContext(null),Ku=e=>{const{children:t,...r}=e,n=k.useMemo(()=>r,[r]);return E.jsx(Mu,{value:n,children:t})},dv=()=>{const e=k.useContext(Mu);if(!e)throw new Error("PanelContext.Provider er ikke satt opp");return e};Ku.__docgenInfo={description:"",methods:[],displayName:"PanelDataProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
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
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
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
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>`,required:!0}},{key:"annenPart",value:{name:"union",raw:"Person | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>`,required:!0},{name:"null"}],required:!0}},{key:"annenpartBehandling",value:{name:"union",raw:"AnnenPartBehandling | null",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}}]}},{name:"null"}],required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
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
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"tag",value:{name:"string",required:!0}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  journalpostId: string;
  tag: string;
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
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
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
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},aksjonspunkterForPanel:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: AP_TYPE) => Promise<void>",signature:{arguments:[{type:{name:"AP_TYPE"},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""}}};k.createContext(null);var he=(e=>(e.DEFAULT="default",e.INNGANGSVILKAR="inngangsvilkar",e.BEHANDLE_INNSYN="behandle_innsyn",e.BEREGNING="beregning",e.BEREGNINGSGRUNNLAG="beregningsgrunnlag",e.KLAGE_NAV_FAMILIE_OG_PENSJON="klage_nav_familie_og_pensjon",e.KLAGE_NAV_KLAGEINSTANS="klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_KLAGEINSTANS="formkrav_klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON="formkrav_klage_nav_familie_og_pensjon",e.FORTSATTMEDLEMSKAP="fortsattmedlemskap",e.OPPLYSNINGSPLIKT="opplysningsplikt",e.SOEKNADSFRIST="soeknadsfrist",e.TILBAKEKREVING="tilbakekreving",e.FORELDELSE="foreldelse",e.TILKJENT_YTELSE="tilkjent_ytelse",e.VARSEL="varsel",e.VEDTAK="vedtak",e.UTTAK="uttak",e.SIMULERING="simulering",e.KLAGE_RESULTAT="resultat",e.ANKEBEHANDLING="ankebehandling",e.ANKE_MERKNADER="ankemerknader",e.ANKE_RESULTAT="ankeresultat",e))(he||{}),Z=(e=>(e.ADOPSJONSVILKARET="adopsjonsvilkaaret",e.ARBEIDSFORHOLD="arbeidsforhold",e.ARBEID_OG_INNTEKT="arbeidoginntekt",e.BEREGNING="beregning",e.BESTEBEREGNING="besteberegning",e.DEFAULT="default",e.FORDELING="fordeling",e.INNTEKTSMELDINGER="inntektsmeldinger",e.FEILUTBETALING="feilutbetaling",e.FODSELSVILKARET="foedselsvilkaaret",e.FODSELTILRETTELEGGING="fodseltilrettelegging",e.MEDLEMSKAPSVILKARET="medlemskapsvilkaaret",e.OMSORG="omsorg",e.OMSORG_OG_RETT="omsorgogrett",e.OMSORGSVILKARET="omsorgsvilkaaret",e.OPPTJENINGSVILKARET="opptjeningsvilkaaret",e.PERMISJON="permisjon",e.SAKEN="saken",e.UTTAK="uttak",e.VERGE="verge",e.YTELSER="ytelser",e.UTTAK_DOKUMENTASJON="uttakdokumentasjon",e))(Z||{});Z.DEFAULT,he.BEREGNING,Z.DEFAULT,he.BEREGNINGSGRUNNLAG,Z.BESTEBEREGNING,he.DEFAULT,Z.ADOPSJONSVILKARET,Z.ARBEIDSFORHOLD,Z.BEREGNING,Z.FODSELSVILKARET,Z.FORDELING,Z.MEDLEMSKAPSVILKARET,Z.OMSORG,Z.OPPTJENINGSVILKARET,Z.OPPTJENINGSVILKARET,Z.OMSORGSVILKARET,Z.ARBEIDSFORHOLD,Z.UTTAK_DOKUMENTASJON,Z.DEFAULT,he.INNGANGSVILKAR,Z.DEFAULT,he.KLAGE_NAV_FAMILIE_OG_PENSJON,Z.DEFAULT,he.KLAGE_NAV_KLAGEINSTANS,Z.DEFAULT,he.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,Z.DEFAULT,he.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,Z.DEFAULT,he.ANKEBEHANDLING,Z.DEFAULT,he.ANKE_MERKNADER,Z.DEFAULT,he.OPPLYSNINGSPLIKT,Z.DEFAULT,he.INNGANGSVILKAR,Z.DEFAULT,he.INNGANGSVILKAR,Z.MEDLEMSKAPSVILKARET,he.INNGANGSVILKAR,Z.DEFAULT,he.INNGANGSVILKAR,Z.DEFAULT,he.INNGANGSVILKAR,Z.DEFAULT,he.SOEKNADSFRIST,Z.DEFAULT,he.VEDTAK,Z.UTTAK,Z.UTTAK,Z.UTTAK_DOKUMENTASJON,Z.SAKEN,Z.DEFAULT,he.UTTAK,Z.VERGE,Z.DEFAULT,he.TILKJENT_YTELSE,Z.DEFAULT,he.SIMULERING,Z.SAKEN,Z.FODSELTILRETTELEGGING,Z.DEFAULT,he.INNGANGSVILKAR,Z.DEFAULT,Z.UTTAK_DOKUMENTASJON,Z.DEFAULT,he.FORTSATTMEDLEMSKAP,Z.ARBEID_OG_INNTEKT,he.DEFAULT,Z.OMSORG_OG_RETT;Z.FEILUTBETALING,Z.DEFAULT,he.TILBAKEKREVING,Z.DEFAULT,he.FORELDELSE,Z.DEFAULT,he.VEDTAK,Z.VERGE;const uv=(e,t,r)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${t}&dokumentId=${r}`,gv=(e,t,r)=>{const n=window.open(e,t);n&&setTimeout(()=>{n.document.title=r},1e3)},Fu=e=>E.jsx(ju,{behandling:{uuid:"1",versjon:1},children:E.jsx(e,{})});Fu.__docgenInfo={description:"",methods:[],displayName:"withMellomlagretFormData"};const mv=[{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],kv=[{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"},{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"}],fv=[{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"},{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"}],vv=[{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"}],cv=[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],Ev=[{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"}],pv=[{kode:"FORELDREPENGER",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Foreldrepenger"},{kode:"UTDANNING",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Utdanning"},{kode:"PERMITTERING",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Permittering"},{kode:"ANNEN_PERMISJON",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Annen permisjon"}],yv=[{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"},{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"}],bv=[{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"}],hv=[{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilanser"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - fisker"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - jordbruker"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - dagmamma"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"}],Av=[{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aleneomsorg og annenpart rett"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstansen"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat NFP"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"}],Tv=[{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"}],Rv=[{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"}],Nv=[{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknad mangler"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"}],Iv=[{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"},{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"}],_v=[{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],Ov=[{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"},{kode:"883-5",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 5"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"}],Sv=[{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"}],Dv=[{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"}],Pv=[{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"},{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"}],Lv=[{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"},{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"}],wv=[{kode:"SELVSTENDIG_NÆRING",kodeverk:"FAGSAK_MARKERING",navn:"Næringsdrivende"},{kode:"SAMMENSATT_KONTROLL",kodeverk:"FAGSAK_MARKERING",navn:"Sammensatt kontroll"},{kode:"EØS_BOSATT_NORGE",kodeverk:"FAGSAK_MARKERING",navn:"EØS bosatt Norge"},{kode:"PRAKSIS_UTSETTELSE",kodeverk:"FAGSAK_MARKERING",navn:"Praksis utsettelse"},{kode:"BARE_FAR_RETT",kodeverk:"FAGSAK_MARKERING",navn:"Bare far har rett"},{kode:"DØD_DØDFØDSEL",kodeverk:"FAGSAK_MARKERING",navn:"Død eller dødfødsel"},{kode:"BOSATT_UTLAND",kodeverk:"FAGSAK_MARKERING",navn:"Bosatt utland"}],jv=[{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"}],Mv=JSON.parse('[{"kode":"SGP","kodeverk":"LANDKODER","navn":"SINGAPORE"},{"kode":"GNB","kodeverk":"LANDKODER","navn":"GUINEA-BISSAU"},{"kode":"NCL","kodeverk":"LANDKODER","navn":"NY-KALEDONIA"},{"kode":"GHA","kodeverk":"LANDKODER","navn":"GHANA"},{"kode":"DEU","kodeverk":"LANDKODER","navn":"TYSKLAND"},{"kode":"ANT","kodeverk":"LANDKODER","navn":"DE NEDERLANDSKE ANTILLENE"},{"kode":"SPM","kodeverk":"LANDKODER","navn":"ST-PIERRE OG MIQUELON"},{"kode":"CUB","kodeverk":"LANDKODER","navn":"CUBA"},{"kode":"NGA","kodeverk":"LANDKODER","navn":"NIGERIA"},{"kode":"UGA","kodeverk":"LANDKODER","navn":"UGANDA"},{"kode":"BVT","kodeverk":"LANDKODER","navn":"BOUVETØYA"},{"kode":"XXK","kodeverk":"LANDKODER","navn":"KOSOVO"},{"kode":"MDG","kodeverk":"LANDKODER","navn":"MADAGASKAR"},{"kode":"VAT","kodeverk":"LANDKODER","navn":"VATIKANSTATEN"},{"kode":"PRK","kodeverk":"LANDKODER","navn":"NORD-KOREA"},{"kode":"NZL","kodeverk":"LANDKODER","navn":"NEW ZEALAND"},{"kode":"MCO","kodeverk":"LANDKODER","navn":"MONACO"},{"kode":"GUF","kodeverk":"LANDKODER","navn":"FRANSK GUYANA"},{"kode":"ETH","kodeverk":"LANDKODER","navn":"ETIOPIA"},{"kode":"MNP","kodeverk":"LANDKODER","navn":"NORD-MARIANENE"},{"kode":"BMU","kodeverk":"LANDKODER","navn":"BERMUDA"},{"kode":"PSE","kodeverk":"LANDKODER","navn":"DET PALESTINSKE OMRÅDET"},{"kode":"PYF","kodeverk":"LANDKODER","navn":"FRANSK POLYNESIA"},{"kode":"FLK","kodeverk":"LANDKODER","navn":"FALKLANDSØYENE"},{"kode":"NER","kodeverk":"LANDKODER","navn":"NIGER"},{"kode":"SSD","kodeverk":"LANDKODER","navn":"SØR-SUDAN"},{"kode":"PLW","kodeverk":"LANDKODER","navn":"PALAU"},{"kode":"HRV","kodeverk":"LANDKODER","navn":"KROATIA"},{"kode":"ALA","kodeverk":"LANDKODER","navn":"ÅLAND"},{"kode":"ZWE","kodeverk":"LANDKODER","navn":"ZIMBABWE"},{"kode":"SRB","kodeverk":"LANDKODER","navn":"SERBIA"},{"kode":"SHN","kodeverk":"LANDKODER","navn":"ST. HELENA"},{"kode":"TTO","kodeverk":"LANDKODER","navn":"TRINIDAD OG TOBAGO"},{"kode":"THA","kodeverk":"LANDKODER","navn":"THAILAND"},{"kode":"KGZ","kodeverk":"LANDKODER","navn":"KIRGISISTAN"},{"kode":"MDV","kodeverk":"LANDKODER","navn":"MALDIVENE"},{"kode":"TWN","kodeverk":"LANDKODER","navn":"TAIWAN"},{"kode":"BEL","kodeverk":"LANDKODER","navn":"BELGIA"},{"kode":"ARM","kodeverk":"LANDKODER","navn":"ARMENIA"},{"kode":"SYR","kodeverk":"LANDKODER","navn":"SYRIA"},{"kode":"WSM","kodeverk":"LANDKODER","navn":"SAMOA"},{"kode":"VCT","kodeverk":"LANDKODER","navn":"ST. VINCENT"},{"kode":"IND","kodeverk":"LANDKODER","navn":"INDIA"},{"kode":"ITA","kodeverk":"LANDKODER","navn":"ITALIA"},{"kode":"SLE","kodeverk":"LANDKODER","navn":"SIERRA LEONE"},{"kode":"CHE","kodeverk":"LANDKODER","navn":"SVEITS"},{"kode":"MHL","kodeverk":"LANDKODER","navn":"MARSHALLØYENE"},{"kode":"URY","kodeverk":"LANDKODER","navn":"URUGUAY"},{"kode":"FJI","kodeverk":"LANDKODER","navn":"FIJI"},{"kode":"IMN","kodeverk":"LANDKODER","navn":"ISLE OF MAN"},{"kode":"CSK","kodeverk":"LANDKODER","navn":"TSJEKKOSLOVAKIA"},{"kode":"SGS","kodeverk":"LANDKODER","navn":"SØR-GEORGIA OG SØR-SANDWICHØYE"},{"kode":"ASM","kodeverk":"LANDKODER","navn":"AM. SAMOA"},{"kode":"BGR","kodeverk":"LANDKODER","navn":"BULGARIA"},{"kode":"MYT","kodeverk":"LANDKODER","navn":"MAYOTTE"},{"kode":"DNK","kodeverk":"LANDKODER","navn":"DANMARK"},{"kode":"IRL","kodeverk":"LANDKODER","navn":"IRLAND"},{"kode":"LSO","kodeverk":"LANDKODER","navn":"LESOTHO"},{"kode":"IRN","kodeverk":"LANDKODER","navn":"IRAN"},{"kode":"GLP","kodeverk":"LANDKODER","navn":"GUADELOUPE"},{"kode":"ABW","kodeverk":"LANDKODER","navn":"ARUBA"},{"kode":"BIH","kodeverk":"LANDKODER","navn":"BOSNIA-HERCEGOVINA"},{"kode":"MTQ","kodeverk":"LANDKODER","navn":"MARTINIQUE"},{"kode":"PRI","kodeverk":"LANDKODER","navn":"PUERTO RICO"},{"kode":"HMD","kodeverk":"LANDKODER","navn":"HEARD OG MCDONALD ØYENE"},{"kode":"IOT","kodeverk":"LANDKODER","navn":"BRITISK-INDISKE HAV"},{"kode":"SLB","kodeverk":"LANDKODER","navn":"SALOMONØYENE"},{"kode":"KAZ","kodeverk":"LANDKODER","navn":"KAZAKHSTAN"},{"kode":"MEX","kodeverk":"LANDKODER","navn":"MEXICO"},{"kode":"HKG","kodeverk":"LANDKODER","navn":"HONGKONG"},{"kode":"LIE","kodeverk":"LANDKODER","navn":"LIECHTENSTEIN"},{"kode":"BHS","kodeverk":"LANDKODER","navn":"BAHAMAS"},{"kode":"UKR","kodeverk":"LANDKODER","navn":"UKRAINA"},{"kode":"BES","kodeverk":"LANDKODER","navn":"BONAIRE, SINT EUSTATIUS, SABA"},{"kode":"RWA","kodeverk":"LANDKODER","navn":"RWANDA"},{"kode":"ARE","kodeverk":"LANDKODER","navn":"DE ARABISKE EMIRATER"},{"kode":"EGY","kodeverk":"LANDKODER","navn":"EGYPT"},{"kode":"SXM","kodeverk":"LANDKODER","navn":"SINT MAARTEN"},{"kode":"GRC","kodeverk":"LANDKODER","navn":"HELLAS"},{"kode":"ROU","kodeverk":"LANDKODER","navn":"ROMANIA"},{"kode":"SUR","kodeverk":"LANDKODER","navn":"SURINAM"},{"kode":"MYS","kodeverk":"LANDKODER","navn":"MALAYSIA"},{"kode":"OMN","kodeverk":"LANDKODER","navn":"OMAN"},{"kode":"LBY","kodeverk":"LANDKODER","navn":"LIBYA"},{"kode":"FRO","kodeverk":"LANDKODER","navn":"FÆRØYENE"},{"kode":"ISR","kodeverk":"LANDKODER","navn":"ISRAEL"},{"kode":"IDN","kodeverk":"LANDKODER","navn":"INDONESIA"},{"kode":"SMR","kodeverk":"LANDKODER","navn":"SAN MARINO"},{"kode":"MKD","kodeverk":"LANDKODER","navn":"MAKEDONIA"},{"kode":"SWZ","kodeverk":"LANDKODER","navn":"SWAZILAND"},{"kode":"DZA","kodeverk":"LANDKODER","navn":"ALGERIE"},{"kode":"MWI","kodeverk":"LANDKODER","navn":"MALAWI"},{"kode":"STP","kodeverk":"LANDKODER","navn":"SAO TOME OG PRINCIPE"},{"kode":"VIR","kodeverk":"LANDKODER","navn":"JOMFRUØYENE AM."},{"kode":"CPV","kodeverk":"LANDKODER","navn":"KAPP VERDE"},{"kode":"PAK","kodeverk":"LANDKODER","navn":"PAKISTAN"},{"kode":"ECU","kodeverk":"LANDKODER","navn":"ECUADOR"},{"kode":"PRT","kodeverk":"LANDKODER","navn":"PORTUGAL"},{"kode":"COD","kodeverk":"LANDKODER","navn":"KONGO, DEN DEMOKR. REPUBL"},{"kode":"MMR","kodeverk":"LANDKODER","navn":"MYANMAR (BURMA)"},{"kode":"ZAF","kodeverk":"LANDKODER","navn":"SØR-AFRIKA"},{"kode":"USA","kodeverk":"LANDKODER","navn":"USA"},{"kode":"SVN","kodeverk":"LANDKODER","navn":"SLOVENIA"},{"kode":"FSM","kodeverk":"LANDKODER","navn":"MIKRONESIAFØD."},{"kode":"GNQ","kodeverk":"LANDKODER","navn":"EKVATORIAL-GUINEA"},{"kode":"CHN","kodeverk":"LANDKODER","navn":"REPUBLIKKEN KINA"},{"kode":"HTI","kodeverk":"LANDKODER","navn":"HAITI"},{"kode":"NIC","kodeverk":"LANDKODER","navn":"NICARAGUA"},{"kode":"NAM","kodeverk":"LANDKODER","navn":"NAMIBIA"},{"kode":"SWE","kodeverk":"LANDKODER","navn":"SVERIGE"},{"kode":"BRA","kodeverk":"LANDKODER","navn":"BRASIL"},{"kode":"GMB","kodeverk":"LANDKODER","navn":"GAMBIA"},{"kode":"WLF","kodeverk":"LANDKODER","navn":"WALLIS/FUTUNAØYENE"},{"kode":"JAM","kodeverk":"LANDKODER","navn":"JAMAICA"},{"kode":"???","kodeverk":"LANDKODER","navn":"UOPPGITT/UKJENT"},{"kode":"YEM","kodeverk":"LANDKODER","navn":"JEMEN"},{"kode":"MAF","kodeverk":"LANDKODER","navn":"SAINT MARTIN"},{"kode":"NRU","kodeverk":"LANDKODER","navn":"NAURU"},{"kode":"TKL","kodeverk":"LANDKODER","navn":"TOKELAU"},{"kode":"AND","kodeverk":"LANDKODER","navn":"ANDORRA"},{"kode":"SJM","kodeverk":"LANDKODER","navn":"SVALBARD OG JAN MAYEN"},{"kode":"BEN","kodeverk":"LANDKODER","navn":"BENIN"},{"kode":"CHL","kodeverk":"LANDKODER","navn":"CHILE"},{"kode":"SCG","kodeverk":"LANDKODER","navn":"SERBIA OG MONTENEGRO"},{"kode":"KIR","kodeverk":"LANDKODER","navn":"KIRIBATI"},{"kode":"VGB","kodeverk":"LANDKODER","navn":"JOMFRUØYENE BRIT."},{"kode":"MNE","kodeverk":"LANDKODER","navn":"MONTENEGRO"},{"kode":"MLI","kodeverk":"LANDKODER","navn":"MALI"},{"kode":"REU","kodeverk":"LANDKODER","navn":"REUNION"},{"kode":"BWA","kodeverk":"LANDKODER","navn":"BOTSWANA"},{"kode":"PCN","kodeverk":"LANDKODER","navn":"PITCAIRN"},{"kode":"UMI","kodeverk":"LANDKODER","navn":"MINDRE STILLEHAVSØYER"},{"kode":"TUV","kodeverk":"LANDKODER","navn":"TUVALU"},{"kode":"LKA","kodeverk":"LANDKODER","navn":"SRI LANKA"},{"kode":"BDI","kodeverk":"LANDKODER","navn":"BURUNDI"},{"kode":"AGO","kodeverk":"LANDKODER","navn":"ANGOLA"},{"kode":"MRT","kodeverk":"LANDKODER","navn":"MAURITANIA"},{"kode":"MUS","kodeverk":"LANDKODER","navn":"MAURITIUS"},{"kode":"CYP","kodeverk":"LANDKODER","navn":"KYPROS"},{"kode":"SYC","kodeverk":"LANDKODER","navn":"SEYCHELLENE"},{"kode":"COK","kodeverk":"LANDKODER","navn":"COOKØYENE"},{"kode":"VEN","kodeverk":"LANDKODER","navn":"VENEZUELA"},{"kode":"ESH","kodeverk":"LANDKODER","navn":"VEST-SAHARA"},{"kode":"SUN","kodeverk":"LANDKODER","navn":"SOVJETUNIONEN"},{"kode":"EST","kodeverk":"LANDKODER","navn":"ESTLAND"},{"kode":"CIV","kodeverk":"LANDKODER","navn":"ELFENBEINSKYSTEN"},{"kode":"HUN","kodeverk":"LANDKODER","navn":"UNGARN"},{"kode":"MLT","kodeverk":"LANDKODER","navn":"MALTA"},{"kode":"COM","kodeverk":"LANDKODER","navn":"KOMORENE"},{"kode":"NPL","kodeverk":"LANDKODER","navn":"NEPAL"},{"kode":"CRI","kodeverk":"LANDKODER","navn":"COSTA RICA"},{"kode":"LVA","kodeverk":"LANDKODER","navn":"LATVIA"},{"kode":"GUY","kodeverk":"LANDKODER","navn":"GUYANA"},{"kode":"ALB","kodeverk":"LANDKODER","navn":"ALBANIA"},{"kode":"NLD","kodeverk":"LANDKODER","navn":"NEDERLAND"},{"kode":"AIA","kodeverk":"LANDKODER","navn":"ANGUILLA"},{"kode":"BRN","kodeverk":"LANDKODER","navn":"BRUNEI"},{"kode":"LCA","kodeverk":"LANDKODER","navn":"ST. LUCIA"},{"kode":"NOR","kodeverk":"LANDKODER","navn":"NORGE"},{"kode":"NIU","kodeverk":"LANDKODER","navn":"NIUE"},{"kode":"DOM","kodeverk":"LANDKODER","navn":"DEN DOMINIKANSKE REP"},{"kode":"GGY","kodeverk":"LANDKODER","navn":"GUERNSEY"},{"kode":"BTN","kodeverk":"LANDKODER","navn":"BHUTAN"},{"kode":"YUG","kodeverk":"LANDKODER","navn":"JUGOSLAVIA"},{"kode":"MSR","kodeverk":"LANDKODER","navn":"MONSERRAT"},{"kode":"JEY","kodeverk":"LANDKODER","navn":"JERSEY"},{"kode":"TCA","kodeverk":"LANDKODER","navn":"TURKS/CAICOSØYENE"},{"kode":"GRL","kodeverk":"LANDKODER","navn":"GRØNLAND"},{"kode":"CAN","kodeverk":"LANDKODER","navn":"CANADA"},{"kode":"TJK","kodeverk":"LANDKODER","navn":"TADZJIKISTAN"},{"kode":"LUX","kodeverk":"LANDKODER","navn":"LUXEMBOURG"},{"kode":"KHM","kodeverk":"LANDKODER","navn":"KAMBODSJA"},{"kode":"TCD","kodeverk":"LANDKODER","navn":"TSJAD"},{"kode":"FIN","kodeverk":"LANDKODER","navn":"FINLAND"},{"kode":"AUT","kodeverk":"LANDKODER","navn":"ØSTERRIKE"},{"kode":"BFA","kodeverk":"LANDKODER","navn":"BURKINA FASO"},{"kode":"CZE","kodeverk":"LANDKODER","navn":"DEN TSJEKKISKE REP."},{"kode":"XXX","kodeverk":"LANDKODER","navn":"STATSLØS"},{"kode":"CYM","kodeverk":"LANDKODER","navn":"CAYMANØYENE"},{"kode":"POL","kodeverk":"LANDKODER","navn":"POLEN"},{"kode":"VNM","kodeverk":"LANDKODER","navn":"VIETNAM"},{"kode":"BRB","kodeverk":"LANDKODER","navn":"BARBADOS"},{"kode":"SVK","kodeverk":"LANDKODER","navn":"SLOVAKIA"},{"kode":"AUS","kodeverk":"LANDKODER","navn":"AUSTRALIA"},{"kode":"PRY","kodeverk":"LANDKODER","navn":"PARAGUAY"},{"kode":"ATG","kodeverk":"LANDKODER","navn":"ANTIGUA OG BARBUDA"},{"kode":"TKM","kodeverk":"LANDKODER","navn":"TURKMENISTAN"},{"kode":"LTU","kodeverk":"LANDKODER","navn":"LITAUEN"},{"kode":"SAU","kodeverk":"LANDKODER","navn":"SAUDI-ARABIA"},{"kode":"CAF","kodeverk":"LANDKODER","navn":"SENTRALAFRIKA. REP."},{"kode":"TON","kodeverk":"LANDKODER","navn":"TONGA"},{"kode":"CMR","kodeverk":"LANDKODER","navn":"KAMERUN"},{"kode":"SDN","kodeverk":"LANDKODER","navn":"SUDAN"},{"kode":"PAN","kodeverk":"LANDKODER","navn":"PANAMA"},{"kode":"LAO","kodeverk":"LANDKODER","navn":"LAOS"},{"kode":"JOR","kodeverk":"LANDKODER","navn":"JORDAN"},{"kode":"MAC","kodeverk":"LANDKODER","navn":"MACAO"},{"kode":"GIB","kodeverk":"LANDKODER","navn":"GIBRALTAR"},{"kode":"XUK","kodeverk":"LANDKODER","navn":"UKJENT"},{"kode":"MNG","kodeverk":"LANDKODER","navn":"MONGOLIA"},{"kode":"TUN","kodeverk":"LANDKODER","navn":"TUNISIA"},{"kode":"UZB","kodeverk":"LANDKODER","navn":"UZBEKISTAN"},{"kode":"KWT","kodeverk":"LANDKODER","navn":"KUWAIT"},{"kode":"ERI","kodeverk":"LANDKODER","navn":"ERITREA"},{"kode":"TGO","kodeverk":"LANDKODER","navn":"TOGO"},{"kode":"VUT","kodeverk":"LANDKODER","navn":"VANUATU"},{"kode":"GIN","kodeverk":"LANDKODER","navn":"GUINEA"},{"kode":"SOM","kodeverk":"LANDKODER","navn":"SOMALIA"},{"kode":"KOR","kodeverk":"LANDKODER","navn":"SØR-KOREA"},{"kode":"PHL","kodeverk":"LANDKODER","navn":"FILIPPINENE"},{"kode":"BHR","kodeverk":"LANDKODER","navn":"BAHRAIN"},{"kode":"DJI","kodeverk":"LANDKODER","navn":"DJIBOUTI"},{"kode":"ESP","kodeverk":"LANDKODER","navn":"SPANIA"},{"kode":"GTM","kodeverk":"LANDKODER","navn":"GUATEMALA"},{"kode":"GAB","kodeverk":"LANDKODER","navn":"GABON"},{"kode":"KNA","kodeverk":"LANDKODER","navn":"ST. KITTS OG NEVIS"},{"kode":"AFG","kodeverk":"LANDKODER","navn":"AFGHANISTAN"},{"kode":"MDA","kodeverk":"LANDKODER","navn":"MOLDOVA"},{"kode":"PER","kodeverk":"LANDKODER","navn":"PERU"},{"kode":"ZMB","kodeverk":"LANDKODER","navn":"ZAMBIA"},{"kode":"QAT","kodeverk":"LANDKODER","navn":"QATAR"},{"kode":"LBR","kodeverk":"LANDKODER","navn":"LIBERIA"},{"kode":"CUW","kodeverk":"LANDKODER","navn":"CURACAO"},{"kode":"BLM","kodeverk":"LANDKODER","navn":"SAINT BARTHELEMY"},{"kode":"BLZ","kodeverk":"LANDKODER","navn":"BELIZE"},{"kode":"TZA","kodeverk":"LANDKODER","navn":"TANZANIA"},{"kode":"ISL","kodeverk":"LANDKODER","navn":"ISLAND"},{"kode":"TLS","kodeverk":"LANDKODER","navn":"ØST-TIMOR"},{"kode":"GRD","kodeverk":"LANDKODER","navn":"GRENADA"},{"kode":"ARG","kodeverk":"LANDKODER","navn":"ARGENTINA"},{"kode":"COG","kodeverk":"LANDKODER","navn":"KONGO, REPUBLIKKEN"},{"kode":"MOZ","kodeverk":"LANDKODER","navn":"MOSAMBIK"},{"kode":"SEN","kodeverk":"LANDKODER","navn":"SENEGAL"},{"kode":"BGD","kodeverk":"LANDKODER","navn":"BANGLADESH"},{"kode":"IRQ","kodeverk":"LANDKODER","navn":"IRAK"},{"kode":"SLV","kodeverk":"LANDKODER","navn":"EL SALVADOR"},{"kode":"TUR","kodeverk":"LANDKODER","navn":"TYRKIA"},{"kode":"DDR","kodeverk":"LANDKODER","navn":"TYSKLAND (ØST)"},{"kode":"LBN","kodeverk":"LANDKODER","navn":"LIBANON"},{"kode":"GBR","kodeverk":"LANDKODER","navn":"STORBRITANNIA"},{"kode":"COL","kodeverk":"LANDKODER","navn":"COLOMBIA"},{"kode":"CXR","kodeverk":"LANDKODER","navn":"CHRISTMASØYA"},{"kode":"PNG","kodeverk":"LANDKODER","navn":"PAPUA NY-GUINEA"},{"kode":"NFK","kodeverk":"LANDKODER","navn":"NORFOLKØYA"},{"kode":"HND","kodeverk":"LANDKODER","navn":"HONDURAS"},{"kode":"BOL","kodeverk":"LANDKODER","navn":"BOLIVIA"},{"kode":"RUS","kodeverk":"LANDKODER","navn":"RUSSLAND"},{"kode":"DMA","kodeverk":"LANDKODER","navn":"DOMINICA"},{"kode":"AZE","kodeverk":"LANDKODER","navn":"AZERBAJDZJAN"},{"kode":"BLR","kodeverk":"LANDKODER","navn":"HVITERUSSLAND"},{"kode":"CCK","kodeverk":"LANDKODER","navn":"KOKOSØYENE"},{"kode":"GEO","kodeverk":"LANDKODER","navn":"GEORGIA"},{"kode":"GUM","kodeverk":"LANDKODER","navn":"GUAM"},{"kode":"JPN","kodeverk":"LANDKODER","navn":"JAPAN"},{"kode":"FRA","kodeverk":"LANDKODER","navn":"FRANKRIKE"},{"kode":"KEN","kodeverk":"LANDKODER","navn":"KENYA"},{"kode":"MAR","kodeverk":"LANDKODER","navn":"MAROKKO"}]'),Kv=[{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"}],Fv=[{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"},{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"}],qv=[{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"},{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"}],Vv=[{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet"},{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Opphørt"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt (f.reg)"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Ikke bosatt (f.reg)"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utflyttet"}],xv=[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"}],Gv=[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"ANPA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Annen part fra søknad"},{kode:"EKTE",kodeverk:"RELASJONSROLLE_TYPE",navn:"Ektefelle"},{kode:"REPA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Registrert partner"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"BARN",kodeverk:"RELASJONSROLLE_TYPE",navn:"Barn"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],Bv=[{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],Uv=[{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"},{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"}],Hv=[{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"}],Cv=[{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"}],Yv=[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],$v=[{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],Wv=[{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"}],zv=[{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],Jv=[{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"},{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"}],Xv=[{kode:"VUR_KONSEKVENS",kodeverk:"OPPGAVE_TYPE",navn:"Vurder konsekvens for ytelse"},{kode:"VUR_DOKUMENT",kodeverk:"OPPGAVE_TYPE",navn:"Vurder dokument"}],Zv={UttakUtsettelseType:mv,FagsakYtelseType:kv,StønadskontoType:[{kode:"TETTE_SAKER_MOR",kodeverk:"STOENADSKONTOTYPE",navn:"Tette fødsler mor"},{kode:"TILLEGG_PREMATUR",kodeverk:"STOENADSKONTOTYPE",navn:"Tilleggsdager ved prematur fødsel"},{kode:"BARE_FAR_RETT",kodeverk:"STOENADSKONTOTYPE",navn:"Bare far har rett"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"UFØREDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Uføredager"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"TILLEGG_FLERBARN",kodeverk:"STOENADSKONTOTYPE",navn:"Tilleggsdager ved flerbarnstilfelle"},{kode:"FAR_RUNDT_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Fars uttak ifm fødsel"},{kode:"TETTE_SAKER_FAR",kodeverk:"STOENADSKONTOTYPE",navn:"Tette fødsler far/medmor"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"}],FagsakStatus:fv,Venteårsak:[{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_UTLAND_TRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på utenlandsk trygdemyndighet"},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga. for tidlig søknad"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev, og venter på søknad."},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdsID som stemmer med Aa-reg"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_BRUKERTILBAKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på tilbakemelding fra bruker"},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_LOVENDRING_8_41",kodeverk:"VENT_AARSAK",navn:"Venter på vedtak om lovendring vedrørende beregning av næring i kombinasjon med arbeid eller frilans"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på skanning"},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"}],BehandlingÅrsakType:[{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"KLAGE_TILBAKE",kodeverk:"BEHANDLING_AARSAK",navn:"Tilbakebetaling"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om opptjening"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Ny søknad"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om søknadsfrist"},{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Ny inntektsmelding"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om medlemskap"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"FEIL_PRAKSIS_UTSETTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Feil praksis utsettelse"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"FEIL_PRAKSIS_IVERKS_UTSET",kodeverk:"BEHANDLING_AARSAK",navn:"Feil iverksettelse fri utsettelse"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om inntekt"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om beregning"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. for uke 26-29"},{kode:"ENDRE-DEKNINGSGRAD",kodeverk:"BEHANDLING_AARSAK",navn:"Endre dekningsgrad"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"}],GraderingAvslagÅrsak:[{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'}],AktivitetStatus:vv,RevurderingVarslingÅrsak:[{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utflyttet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:cv,KonsekvensForYtelsen:Ev,AktivitetskravPermisjonType:pv,AdresseType:yv,SivilstandType:bv,Inntektskategori:hv,SkjermlenkeType:Av,FaktaOmBeregningTilfelle:Tv,OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:Rv,KlageAvvistÅrsak:[{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ugyldig",lovHjemmel:null},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'}],BehandlingResultatType:Nv,VergeType:Iv,OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"}],FamilieHendelseType:_v,KlageHjemmel:Ov,VilkårType:[{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_2_F",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"}],FarSøkerType:[{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"}],FaresignalVurdering:Sv,ArbeidType:Dv,KlageMedholdÅrsak:[{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"}],Region:Pv,OmsorgsovertakelseVilkårType:[{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"},{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"}],FordelingPeriodeKilde:Lv,FagsakMarkering:wv,Arbeidskategori:jv,VurderÅrsak:[{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"},{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"SAKSFLYT",kodeverk:"VURDER_AARSAK",navn:"Saksflyt"},{kode:"BEGRUNNELSE",kodeverk:"VURDER_AARSAK",navn:"Begrunnelse"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"}],Landkoder:Mv,BehandlingType:Kv,InnsynResultatType:Fv,MedlemskapType:qv,PersonstatusType:Vv,UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"FRI",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"}],BehandlingStatus:xv,RelasjonsRolleType:Gv,VirksomhetType:Bv,MedlemskapDekningType:Uv,HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"}],Avslagsårsak:JSON.parse('{"FP_VK_3":[{"kode":"1007","kodeverk":"AVSLAGSARSAK","navn":"Søkt for sent","lovHjemmel":null}],"FP_VK_4":[{"kode":"1004","kodeverk":"AVSLAGSARSAK","navn":"Barn over 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1006","kodeverk":"AVSLAGSARSAK","navn":"Mann adopterer ikke alene","lovHjemmel":null},{"kode":"1005","kodeverk":"AVSLAGSARSAK","navn":"Ektefelles/samboers barn","lovHjemmel":null},{"kode":"1011","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK11\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK16\\", \\"lovreferanse\\": \\"§ 14-5 2. ledd\\"}]}]}"},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"}],"FP_VK_1":[{"kode":"1002","kodeverk":"AVSLAGSARSAK","navn":"Søker er medmor","lovHjemmel":null},{"kode":"1003","kodeverk":"AVSLAGSARSAK","navn":"Søker er far","lovHjemmel":null},{"kode":"1001","kodeverk":"AVSLAGSARSAK","navn":"Søkt for tidlig","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1026","kodeverk":"AVSLAGSARSAK","navn":"Fødselsdato ikke oppgitt eller registrert","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1031","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}"}],"FP_VK_2":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utflyttet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"}],"-":[],"FP_VK_41":[{"kode":"1041","kodeverk":"AVSLAGSARSAK","navn":"For lavt brutto beregningsgrunnlag","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_41\\", \\"lovreferanse\\": \\"14-7\\"}]}]}"}],"FP_VK_21":[{"kode":"1035","kodeverk":"AVSLAGSARSAK","navn":"Ikke tilstrekkelig opptjening","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_23\\", \\"lovreferanse\\": \\"14-6\\"}]}]}"}],"FP_VK_11":[{"kode":"1027","kodeverk":"AVSLAGSARSAK","navn":"Ingen barn dokumentert på far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1029","kodeverk":"AVSLAGSARSAK","navn":"Bruker er ikke registrert som far/medmor til barnet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1028","kodeverk":"AVSLAGSARSAK","navn":"Mor fyller ikke vilkåret for sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_11\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_2_F":[{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utflyttet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1052","kodeverk":"AVSLAGSARSAK","navn":"Innflyttet mindre enn 12 måneder før termin/omsorgsovertakelse","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK_2_F\\", \\"lovreferanse\\": \\"14-17 5. ledd\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"}],"FP_VK_33":[{"kode":"1017","kodeverk":"AVSLAGSARSAK","navn":"Omsorgsovertakelse etter 56 uker","lovHjemmel":null},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1018","kodeverk":"AVSLAGSARSAK","navn":"Ikke foreldreansvar alene etter barnelova","lovHjemmel":null},{"kode":"1016","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke barnets far","lovHjemmel":null}],"FP_VK_34":[{"kode":"1019","kodeverk":"AVSLAGSARSAK","navn":"Manglende dokumentasjon","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_34\\", \\"lovreferanse\\": \\"21-3\\"}]}]}"}],"FP_VK_23":[{"kode":"1035","kodeverk":"AVSLAGSARSAK","navn":"Ikke tilstrekkelig opptjening","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_23\\", \\"lovreferanse\\": \\"14-6\\"}]}]}"}],"FP_VK_8":[{"kode":"1014","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke foreldreansvar","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1015","kodeverk":"AVSLAGSARSAK","navn":"Søker har hatt vanlig samvær med barnet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1013","kodeverk":"AVSLAGSARSAK","navn":"Barn ikke under 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"SVP_VK_1":[{"kode":"1061","kodeverk":"AVSLAGSARSAK","navn":"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 3. ledd\\"}]}]}"},{"kode":"1062","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Søker har mottatt sykepenger","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1060","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Søker er ikke gravid kvinne","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1064","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1065","kodeverk":"AVSLAGSARSAK","navn":"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 2. ledd\\"}]}]}"},{"kode":"1063","kodeverk":"AVSLAGSARSAK","navn":"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 1. ledd\\"}]}]}"},{"kode":"1066","kodeverk":"AVSLAGSARSAK","navn":"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"SVP\\": [{\\"kategori\\": \\"SVP_VK_1\\", \\"lovreferanse\\": \\"14-4 2. ledd\\"}]}]}"}],"FP_VK_16":[{"kode":"1051","kodeverk":"AVSLAGSARSAK","navn":"Stebarnsadopsjon ikke flere dager igjen","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1004","kodeverk":"AVSLAGSARSAK","navn":"Barn over 15 år","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_16_1\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"}],"FP_VK_5":[{"kode":"1012","kodeverk":"AVSLAGSARSAK","navn":"Far har ikke omsorg for barnet","lovHjemmel":null},{"kode":"1008","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke barnets far","lovHjemmel":null},{"kode":"1032","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1009","kodeverk":"AVSLAGSARSAK","navn":"Mor ikke død","lovHjemmel":null},{"kode":"1034","kodeverk":"AVSLAGSARSAK","navn":"Foreldrepenger er allerede utbetalt til far/medmor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK_8\\", \\"lovreferanse\\": \\"14-5\\"}]}]}"},{"kode":"1033","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til far/medmor ","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"14-17\\"}, {\\"kategori\\": \\"FP_VK33\\", \\"lovreferanse\\": \\"14-17\\"}]}, {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}]}"},{"kode":"1011","kodeverk":"AVSLAGSARSAK","navn":"Engangsstønad er allerede utbetalt til mor","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"ES\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK4\\", \\"lovreferanse\\": \\"§ 14-17 1. ledd\\"}, {\\"kategori\\": \\"FP_VK5\\", \\"lovreferanse\\": \\"§ 14-17 3. ledd\\"}]}, {\\"FP\\": [{\\"kategori\\": \\"FP_VK1\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK11\\", \\"lovreferanse\\": \\"§ 14-5 1. ledd\\"}, {\\"kategori\\": \\"FP_VK16\\", \\"lovreferanse\\": \\"§ 14-5 2. ledd\\"}]}]}"},{"kode":"1010","kodeverk":"AVSLAGSARSAK","navn":"Mor ikke død ved fødsel/omsorg","lovHjemmel":null}],"FP_VK_2_L":[{"kode":"1025","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke bosatt","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1024","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke oppholdsrett (EØS)","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1020","kodeverk":"AVSLAGSARSAK","navn":"Søker er ikke medlem","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1021","kodeverk":"AVSLAGSARSAK","navn":"Søker er utflyttet","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"},{"kode":"1023","kodeverk":"AVSLAGSARSAK","navn":"Søker har ikke lovlig opphold","lovHjemmel":"{\\"fagsakYtelseType\\": [{\\"FP\\": [{\\"kategori\\": \\"FP_VK_2\\", \\"lovreferanse\\": \\"14-2\\"}]}]}"}]}'),OpptjeningAktivitetType:Hv,PermisjonsbeskrivelseType:Cv,AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"}],OppholdstillatelseType:Yv,MedlemskapManuellVurderingType:$v,ManuellBehandlingÅrsak:[{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5032",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder utbetalingsgrad og trekkdager når mor er i delvis arbeid (under 75% arbeidsprosent)"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"}],MorsAktivitet:Wv,NaturalYtelseType:zv,PeriodeResultatÅrsak:JSON.parse('[{"kode":"4005","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjuende ledd: Ikke sammenhengende perioder","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-7","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4031","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Ferie/arbeid innenfor de første 6 ukene","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4056","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-g","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2022","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4076","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger","lovHjemmel":"","sortering":"14-09-5","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4103","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"2030","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4116","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4063","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4054","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-e","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4040","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4041","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2016","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-b","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4112","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Barnets innleggelse første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4053","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4069","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4025","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-16\\"}}}","sortering":"14-16-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2015","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-a","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2020","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-09-1","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2023","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15\\"}}}","sortering":"14-15-1","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4110","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"2010","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2037","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9, jf. §14-13: Innvilget fellesperiode til far","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9,14-13\\"}}}","sortering":"14-09","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4055","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-f","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2004","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2006","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Innvilget foreldrepenger før fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2011","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4003","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 fjerde ledd: Mor har ikke omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-4","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"2033","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13,14-16\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4088","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-f","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4100","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 andre ledd: Uttak før omsorgsovertakelse","lovHjemmel":"","sortering":"14-10-2","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4097","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Adopsjonsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4074","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12,21-3\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4117","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4092","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Avslag overføring - har ikke aleneomsorg for barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4002","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Ikke stønadsdager igjen på stønadskonto","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4086","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10,14-11\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2012","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4075","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger","lovHjemmel":"","sortering":"14-09-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FELLESPERIODE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4098","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Foreldreansvarsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2024","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4023","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-5","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4007","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4106","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4035","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4085","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Det er ikke samtykke mellom partene","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2028","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4060","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2002","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Innvilget fellesperiode/foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4095","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL"],"synligForRolle":["MOR"]},{"kode":"2027","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4105","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4062","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4032","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2039","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-6","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"2031","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12, jf. §14-16: Gradering av kvote/overført kvote","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4051","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4058","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2018","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4059","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13, 14-9\\"}}}","sortering":"14-13-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2026","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"2036","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4111","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Søkers innleggelse første 6 uker ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4022","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 tredje ledd: Barnet er over 3 år","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4102","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-13\\"}}}","sortering":"14-14","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4020","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§22-13 tredje ledd: Brudd på søknadsfrist","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"22-13\\"}}}","sortering":"22-13-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4038","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4068","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2019","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-d","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4082","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4050","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2034","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4012","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 fjerde ledd: Far/medmor har ikke omsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-4","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2003","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Innvilget uttak av kvote","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2035","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14,14-16\\"}}}","sortering":"14-14-3","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4073","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2025","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4008","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4072","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9 sjuende ledd: Barnet er dødt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09-7","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4070","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-e","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4030","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-9: Avslag utsettelse før termin/fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-9\\"}}}","sortering":"14-09","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"4057","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4052","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13\\"}}}","sortering":"14-13-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4081","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2017","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-14,14-13\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"4064","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2005","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15: Innvilget foreldrepenger ved aleneomsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15\\"}}}","sortering":"14-15","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4013","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-1","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4077","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10 a\\"}}}","sortering":"14-10-0-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4033","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a: Ikke lovbestemt ferie","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4034","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,14-9\\"}}}","sortering":"14-11-0","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4093","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-16: Avslag gradering - søker er ikke i arbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-16\\"}}}","sortering":"14-16","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4039","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4089","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-g","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4066","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"4115","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER","MØDREKVOTE"],"synligForRolle":["MOR"]},{"kode":"2014","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-c","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4104","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 tredje ledd: Stønadsperiode for nytt barn","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4065","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-d","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4087","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-2: Opphør medlemskap","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-2\\"}}}","sortering":"14-02","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4037","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav b: Ikke heltidsarbeid","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4099","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-6: Opptjeningsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-6\\"}}}","sortering":"14-06","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4061","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11,21-3\\"}}}","sortering":"14-11-1-a","utfallType":"AVSLÅTT","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4067","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-13,21-3\\"}}}","sortering":"14-13-1-b","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER","FELLESPERIODE"],"synligForRolle":["IKKE_MOR"]},{"kode":"2021","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-12\\"}}}","sortering":"14-12","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FEDREKVOTE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4071","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Bruker er død","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2007","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10: Innvilget foreldrepenger, kun mor har rett","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["MOR"]},{"kode":"4107","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-14\\"}}}","sortering":"14-14-3","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR"]},{"kode":"2032","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-15,14-16\\"}}}","sortering":"14-16","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2038","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Samtidig uttak","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"INNVILGET","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4096","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-5: Fødselsvilkåret er ikke oppfylt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-5\\"}}}","sortering":"14-05","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"2013","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-11\\"}}}","sortering":"14-11-1-d","utfallType":"INNVILGET","gyldigForLovendringer":["KREVER_SAMMENHENGENDE_UTTAK"],"uttakTyper":["UTSETTELSE"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]},{"kode":"4084","kodeverk":"PERIODE_RESULTAT_AARSAK","navn":"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak","lovHjemmel":"{\\"fagsakYtelseType\\": {\\"FP\\": {\\"lovreferanse\\": \\"14-10\\"}}}","sortering":"14-10-6","utfallType":"AVSLÅTT","gyldigForLovendringer":["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],"uttakTyper":["UTSETTELSE","UTTAK"],"valgbarForKonto":["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],"synligForRolle":["IKKE_MOR","MOR"]}]'),ForeldreType:Jv,OppgaveType:Xv},Qv=()=>(...e)=>(ir("button-click")(...e),Promise.resolve()),ec={uuid:"1223-2323-2323-22332",versjon:1,språkkode:"NB",type:su.FORSTEGANGSSOKNAD,status:au.BEHANDLING_UTREDES,behandlingPåVent:!1,behandlingHenlagt:!1},nc={saksnummer:"1234567",fagsakYtelseType:iu.FORELDREPENGER,bruker:{navn:"Kari Nordmann"},annenPart:{navn:"Ola Nordmann"},relasjonsRolleType:js.MOR,annenpartBehandling:{relasjonsRolleType:js.FAR}},rc=[],qu=(e,t)=>{const{fagsak:r,behandling:n,aksjonspunkterForPanel:a,isReadOnly:s,submitCallback:i,alleMerknaderFraBeslutter:o}=t.args,l=a??rc;return E.jsx(Ku,{fagsak:r??nc,behandling:n??ec,aksjonspunkterForPanel:l,harÅpneAksjonspunkter:l.some(u=>u.status===Ye.OPPRETTET),alleKodeverk:Zv,alleMerknaderFraBeslutter:o??{},isReadOnly:s??!1,submitCallback:i??Qv(),children:E.jsx(e,{})})};qu.__docgenInfo={description:"",methods:[],displayName:"withPanelData"};var Ce=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(Ce||{});const Cs=e=>{if(e==null)return;const t=e.toString().replace(/\s/g,"");if(!Number.isNaN(t))return Number(Math.round(parseFloat(t))).toLocaleString("nb-NO").replace(/,|\s/g," ")};function vi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ys={exports:{}},tc=Ys.exports,ho;function ac(){return ho||(ho=1,function(e,t){(function(r,n){e.exports=n()})(tc,function(){var r,n,a=1e3,s=6e4,i=36e5,o=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,d=2628e6,g=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,m={years:u,months:d,days:o,hours:i,minutes:s,seconds:a,milliseconds:1,weeks:6048e5},v=function(O){return O instanceof R},p=function(O,I,S){return new R(O,S,I.$l)},c=function(O){return n.p(O)+"s"},b=function(O){return O<0},T=function(O){return b(O)?Math.ceil(O):Math.floor(O)},f=function(O){return Math.abs(O)},h=function(O,I){return O?b(O)?{negative:!0,format:""+f(O)+I}:{negative:!1,format:""+O+I}:{negative:!1,format:""}},R=function(){function O(S,P,M){var j=this;if(this.$d={},this.$l=M,S===void 0&&(this.$ms=0,this.parseFromMilliseconds()),P)return p(S*m[c(P)],this);if(typeof S=="number")return this.$ms=S,this.parseFromMilliseconds(),this;if(typeof S=="object")return Object.keys(S).forEach(function(D){j.$d[c(D)]=S[D]}),this.calMilliseconds(),this;if(typeof S=="string"){var L=S.match(g);if(L){var N=L.slice(2).map(function(D){return D!=null?Number(D):0});return this.$d.years=N[0],this.$d.months=N[1],this.$d.weeks=N[2],this.$d.days=N[3],this.$d.hours=N[4],this.$d.minutes=N[5],this.$d.seconds=N[6],this.calMilliseconds(),this}}return this}var I=O.prototype;return I.calMilliseconds=function(){var S=this;this.$ms=Object.keys(this.$d).reduce(function(P,M){return P+(S.$d[M]||0)*m[M]},0)},I.parseFromMilliseconds=function(){var S=this.$ms;this.$d.years=T(S/u),S%=u,this.$d.months=T(S/d),S%=d,this.$d.days=T(S/o),S%=o,this.$d.hours=T(S/i),S%=i,this.$d.minutes=T(S/s),S%=s,this.$d.seconds=T(S/a),S%=a,this.$d.milliseconds=S},I.toISOString=function(){var S=h(this.$d.years,"Y"),P=h(this.$d.months,"M"),M=+this.$d.days||0;this.$d.weeks&&(M+=7*this.$d.weeks);var j=h(M,"D"),L=h(this.$d.hours,"H"),N=h(this.$d.minutes,"M"),D=this.$d.seconds||0;this.$d.milliseconds&&(D+=this.$d.milliseconds/1e3,D=Math.round(1e3*D)/1e3);var F=h(D,"S"),q=S.negative||P.negative||j.negative||L.negative||N.negative||F.negative,U=L.format||N.format||F.format?"T":"",V=(q?"-":"")+"P"+S.format+P.format+j.format+U+L.format+N.format+F.format;return V==="P"||V==="-P"?"P0D":V},I.toJSON=function(){return this.toISOString()},I.format=function(S){var P=S||"YYYY-MM-DDTHH:mm:ss",M={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return P.replace(l,function(j,L){return L||String(M[j])})},I.as=function(S){return this.$ms/m[c(S)]},I.get=function(S){var P=this.$ms,M=c(S);return M==="milliseconds"?P%=1e3:P=M==="weeks"?T(P/m[M]):this.$d[M],P||0},I.add=function(S,P,M){var j;return j=P?S*m[c(P)]:v(S)?S.$ms:p(S,this).$ms,p(this.$ms+j*(M?-1:1),this)},I.subtract=function(S,P){return this.add(S,P,!0)},I.locale=function(S){var P=this.clone();return P.$l=S,P},I.clone=function(){return p(this.$ms,this)},I.humanize=function(S){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!S)},I.valueOf=function(){return this.asMilliseconds()},I.milliseconds=function(){return this.get("milliseconds")},I.asMilliseconds=function(){return this.as("milliseconds")},I.seconds=function(){return this.get("seconds")},I.asSeconds=function(){return this.as("seconds")},I.minutes=function(){return this.get("minutes")},I.asMinutes=function(){return this.as("minutes")},I.hours=function(){return this.get("hours")},I.asHours=function(){return this.as("hours")},I.days=function(){return this.get("days")},I.asDays=function(){return this.as("days")},I.weeks=function(){return this.get("weeks")},I.asWeeks=function(){return this.as("weeks")},I.months=function(){return this.get("months")},I.asMonths=function(){return this.as("months")},I.years=function(){return this.get("years")},I.asYears=function(){return this.as("years")},O}(),A=function(O,I,S){return O.add(I.years()*S,"y").add(I.months()*S,"M").add(I.days()*S,"d").add(I.hours()*S,"h").add(I.minutes()*S,"m").add(I.seconds()*S,"s").add(I.milliseconds()*S,"ms")};return function(O,I,S){r=S,n=S().$utils(),S.duration=function(j,L){var N=S.locale();return p(j,{$l:N},L)},S.isDuration=v;var P=I.prototype.add,M=I.prototype.subtract;I.prototype.add=function(j,L){return v(j)?A(this,j,1):P.bind(this)(j,L)},I.prototype.subtract=function(j,L){return v(j)?A(this,j,-1):M.bind(this)(j,L)}}})}(Ys)),Ys.exports}var sc=ac();const ic=vi(sc);var $s={exports:{}},oc=$s.exports,Ao;function lc(){return Ao||(Ao=1,function(e,t){(function(r,n){e.exports=n()})(oc,function(){var r="day";return function(n,a,s){var i=function(u){return u.add(4-u.isoWeekday(),r)},o=a.prototype;o.isoWeekYear=function(){return i(this).year()},o.isoWeek=function(u){if(!this.$utils().u(u))return this.add(7*(u-this.isoWeek()),r);var d,g,m,v,p=i(this),c=(d=this.isoWeekYear(),g=this.$u,m=(g?s.utc:s)().year(d).startOf("year"),v=4-m.isoWeekday(),m.isoWeekday()>4&&(v+=7),m.add(v,r));return p.diff(c,"week")+1},o.isoWeekday=function(u){return this.$utils().u(u)?this.day()||7:this.day(this.day()%7?u:u-7)};var l=o.startOf;o.startOf=function(u,d){var g=this.$utils(),m=!!g.u(d)||d;return g.p(u)==="isoweek"?m?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(u,d)}}})}($s)),$s.exports}var dc=lc();const uc=vi(dc);var Ws={exports:{}},gc=Ws.exports,To;function mc(){return To||(To=1,function(e,t){(function(r,n){e.exports=n()})(gc,function(){var r="minute",n=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(s,i,o){var l=i.prototype;o.utc=function(c){var b={date:c,utc:!0,args:arguments};return new i(b)},l.utc=function(c){var b=o(this.toDate(),{locale:this.$L,utc:!0});return c?b.add(this.utcOffset(),r):b},l.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var u=l.parse;l.parse=function(c){c.utc&&(this.$u=!0),this.$utils().u(c.$offset)||(this.$offset=c.$offset),u.call(this,c)};var d=l.init;l.init=function(){if(this.$u){var c=this.$d;this.$y=c.getUTCFullYear(),this.$M=c.getUTCMonth(),this.$D=c.getUTCDate(),this.$W=c.getUTCDay(),this.$H=c.getUTCHours(),this.$m=c.getUTCMinutes(),this.$s=c.getUTCSeconds(),this.$ms=c.getUTCMilliseconds()}else d.call(this)};var g=l.utcOffset;l.utcOffset=function(c,b){var T=this.$utils().u;if(T(c))return this.$u?0:T(this.$offset)?g.call(this):this.$offset;if(typeof c=="string"&&(c=function(A){A===void 0&&(A="");var O=A.match(n);if(!O)return null;var I=(""+O[0]).match(a)||["-",0,0],S=I[0],P=60*+I[1]+ +I[2];return P===0?0:S==="+"?P:-P}(c),c===null))return this;var f=Math.abs(c)<=16?60*c:c,h=this;if(b)return h.$offset=f,h.$u=c===0,h;if(c!==0){var R=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(h=this.local().add(f+R,r)).$offset=f,h.$x.$localOffset=R}else h=this.utc();return h};var m=l.format;l.format=function(c){var b=c||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return m.call(this,b)},l.valueOf=function(){var c=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*c},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var v=l.toDate;l.toDate=function(c){return c==="s"&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():v.call(this)};var p=l.diff;l.diff=function(c,b,T){if(c&&this.$u===c.$u)return p.call(this,c,b,T);var f=this.local(),h=o(c).local();return p.call(f,h,b,T)}}})}(Ws)),Ws.exports}var kc=mc();const fc=vi(kc),vc=Iu(),Sn=e=>iv({locale:"nb-NO",messages:e},vc),Wn="YYYY-MM-DD",xr="DD.MM.YYYY",Ha={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};var zs={exports:{}},cc=zs.exports,Ro;function Ec(){return Ro||(Ro=1,function(e,t){(function(r,n){e.exports=n(Te)})(cc,function(r){function n(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var a=n(r),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})}(zs)),zs.exports}Ec();Te.extend(fc);Te.extend(uc);Te.extend(ic);Sn(Ha);const pc="9999-12-31",yc=Sn(Ha),Ca=(e,t)=>{const{year:r="numeric",month:n="2-digit",day:a="2-digit"}=t??{};return yc.formatDate(new Date(e),{year:r,month:n,day:a})};Sn(Ha);const bc=e=>e!=null&&e.constructor===Object;var No={exports:{}},ot={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Io;function hc(){if(Io)return ot;Io=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,a,s){var i=null;if(s!==void 0&&(i=""+s),a.key!==void 0&&(i=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:s}}return ot.Fragment=t,ot.jsx=r,ot.jsxs=r,ot}var _o;function Ac(){return _o||(_o=1,No.exports=hc()),No.exports}Ac();const Tc=Sn(Ha),Rc=(e,t,r)=>{const{separator:n="-",showTodayString:a=!1,...s}=r??{},i=Ca(e,s),o=Nc(t,a,s);return`${i} ${n} ${o}`},Nc=(e,t,r)=>!e&&t?Tc.formatMessage({id:"PeriodLabel.DateToday"}):!e||e===pc?"":Ca(e,r);function Vu(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Vu(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function kr(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Vu(e))&&(n&&(n+=" "),n+=t);return n}function ci(e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}function nt(...e){return y.useCallback(ci(e),e)}function Ic(e,t){const r=Object.assign({},t);for(const n in t){const a=e[n],s=t[n];/^on[A-Z]/.test(n)?a&&s?r[n]=(...o)=>{s(...o),a(...o)}:a&&(r[n]=a):n==="style"?r[n]=Object.assign(Object.assign({},a),s):n==="className"&&(r[n]=[a,s].filter(Boolean).join(" "))}return Object.assign(Object.assign({},e),r)}var _c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const fr=k.forwardRef((e,t)=>{var r;const{children:n}=e,a=_c(e,["children"]);if(k.isValidElement(n)){const s=Object.prototype.propertyIsEnumerable.call(n.props,"ref")?n.props.ref:n.ref;return k.cloneElement(n,Object.assign(Object.assign({},Ic(a,n.props)),{ref:t?ci([t,s]):s}))}if(k.Children.count(n)>1){const s=new Error("Aksel: Components using 'asChild' expects to recieve a single React element child.");throw s.name="SlotError",(r=Error.captureStackTrace)===null||r===void 0||r.call(Error,s,fr),s}return null});var Oc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function Sc(e,t){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function rt(e={}){const{name:t,hookName:r="useContext",providerName:n="Provider",errorMessage:a,defaultValue:s}=e,i=k.createContext(s),o=k.forwardRef((u,d)=>{var{children:g}=u,m=Oc(u,["children"]);const v=y.useMemo(()=>m,Object.values(m));return y.createElement(i.Provider,{value:d?Object.assign(Object.assign({},v),{ref:d}):v},g)});function l(u=!0){var d;const g=k.useContext(i);if(!g&&u){const m=new Error(a??Sc(r,n));throw m.name="ContextError",(d=Error.captureStackTrace)===null||d===void 0||d.call(Error,m,l),m}return g}return i.displayName=t,[o,l]}const[Dc,ne]=rt({hookName:"useRenameCSS",name:"RenameCSS",providerName:"RenameCSSProvider",defaultValue:{cn:kr}}),Pc=(...e)=>kr(e).replace(/^navds-/g,"aksel-").replace(/\snavds-/g," aksel-").trim(),Lc=({children:e})=>y.createElement(Dc,{cn:Pc},e),[wc,Dt]=rt({hookName:"useTheme",name:"ThemeProvider",providerName:"ThemeProvider"}),jc=k.forwardRef((e,t)=>{const r=Dt(!1),{children:n,className:a,asChild:s=!1,theme:i=r==null?void 0:r.theme,hasBackground:o=!0}=e,u=o??(r===void 0&&e.theme!==void 0),d=s?fr:"div";return y.createElement(wc,{theme:i},y.createElement(Lc,null,y.createElement(d,{ref:t,className:kr("aksel-theme",a,i),"data-background":u},n)))}),tt=e=>kr({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Mc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const xu=k.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,g=Mc(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:m}=ne();return y.createElement(a,Object.assign({},g,{ref:t,className:m(r,"navds-body-long",`navds-body-long--${n}`,tt({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var Kc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const te=k.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="p",spacing:s,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,g=Kc(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:m}=ne();return y.createElement(a,Object.assign({},g,{ref:t,className:m(r,"navds-body-short",`navds-body-short--${n}`,tt({spacing:s,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var Fc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Wr=k.forwardRef((e,t)=>{var{className:r,size:n="medium",spacing:a,uppercase:s,as:i="p",truncate:o,weight:l="regular",align:u,visuallyHidden:d,textColor:g}=e,m=Fc(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:v}=ne();return y.createElement(i,Object.assign({},m,{ref:t,className:v(r,"navds-detail",tt({spacing:a,truncate:o,weight:l,align:u,visuallyHidden:d,textColor:g,uppercase:s}),{"navds-detail--small":n==="small"})}))});var qc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Pt=k.forwardRef((e,t)=>{var{children:r,className:n,size:a,spacing:s,as:i="p",showIcon:o=!1}=e,l=qc(e,["children","className","size","spacing","as","showIcon"]);const{cn:u}=ne();return y.createElement(i,Object.assign({},l,{ref:t,className:u("navds-error-message","navds-label",n,tt({spacing:s}),{"navds-label--small":a==="small","navds-error-message--show-icon":o})}),o&&y.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var Vc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ya=k.forwardRef((e,t)=>{var{level:r="1",size:n,className:a,as:s,spacing:i,align:o,visuallyHidden:l,textColor:u}=e,d=Vc(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:g}=ne(),m=s??`h${r}`;return y.createElement(m,Object.assign({},d,{ref:t,className:g(a,"navds-heading",`navds-heading--${n}`,tt({spacing:i,align:o,visuallyHidden:l,textColor:u}))}))});var xc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};k.forwardRef((e,t)=>{var{className:r,spacing:n,as:a="p"}=e,s=xc(e,["className","spacing","as"]);const{cn:i}=ne();return y.createElement(a,Object.assign({},s,{ref:t,className:i(r,"navds-ingress",{"navds-typo--spacing":!!n})}))});var Gc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ie=k.forwardRef((e,t)=>{var{className:r,size:n="medium",as:a="label",spacing:s,visuallyHidden:i,textColor:o}=e,l=Gc(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:u}=ne();return y.createElement(a,Object.assign({},l,{ref:t,className:u(r,"navds-label",tt({spacing:s,visuallyHidden:i,textColor:o}),{"navds-label--small":n==="small"})}))});function Gu(e,t=166,r=!1){let n;function a(...s){const i=()=>{n=void 0,e.apply(this,s)};!n&&r&&i(),clearTimeout(n),n=setTimeout(i,t)}return a.clear=()=>{clearTimeout(n)},a}function on(e,t){const r=Object.entries(e).filter(([n])=>!t.includes(n));return Object.fromEntries(r)}const zr=globalThis!=null&&globalThis.document?k.useLayoutEffect:()=>{};let Oo=0;function Bc(e){const[t,r]=k.useState(e),n=e||t;return k.useEffect(()=>{t==null&&(Oo+=1,r(`aksel-id-${Oo}`))},[t]),n}const So=y.useId;function Nn(e){var t;if(So!==void 0){const r=So();return e??r.replace(/(:)/g,"")}return(t=Bc(e))!==null&&t!==void 0?t:""}function ht(e,t=[]){const r=k.useRef(e);return k.useEffect(()=>{r.current=e}),k.useCallback((...n)=>{var a;return(a=r.current)===null||a===void 0?void 0:a.call(r,...n)},t)}function At({value:e,defaultValue:t,onChange:r}){const n=ht(r),[a,s]=k.useState(t),i=e!==void 0,o=i?e:a,l=ht(u=>{const g=typeof u=="function"?u(o):u;i||s(g),n(g)},[i,n,o]);return[o,l]}let Do=0;function Uc(e){const[t,r]=k.useState(e),n=e||t;return k.useEffect(()=>{t==null&&(Do+=1,r(`aksel-icon-${Do}`))},[t]),n}const Po=y.useId;function je(e){var t;return Po!==void 0?Po().replace(/(:)/g,""):(t=Uc(e))!==null&&t!==void 0?t:""}var Hc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Cc=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Hc(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",d:"M4.47 11.47a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06l-3.22-3.22H19a.75.75 0 0 0 0-1.5H6.81l3.22-3.22a.75.75 0 1 0-1.06-1.06z"}))});var Yc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const $c=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Yc(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",d:"M14.087 6.874a.752.752 0 0 0-.117 1.156l3.22 3.22H5a.75.75 0 0 0 0 1.5h12.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-.943-.096"}))});var Wc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const zc=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Wc(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var Jc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Xc=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Jc(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Zc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Qc=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=Zc(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))});var eE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const nE=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=eE(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var rE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const $a=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=rE(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var tE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Bu=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=tE(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var aE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Ei=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=aE(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var sE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const iE=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=sE(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var oE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const lE=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=oE(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var dE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const uE=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=dE(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.6 3.068c-1.28-.487-2.1-1.686-2.1-3.068a3.257 3.257 0 0 1 3.276-3.264 3.26 3.26 0 0 1 3.271 3.264c0 1.353-.83 2.554-2.559 3.242a.75.75 0 0 0-.472.697v1.235a.75.75 0 0 0 .212.523l1.482 1.522-1.215 1.991a.75.75 0 0 0 .123.934l.592.564-1.982 2.214-.145-.132v-9.021a.75.75 0 0 0-.483-.701m-.327-3.13a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var gE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const mE=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=gE(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.273-.063a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var kE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Uu=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=kE(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var fE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const vE=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=fE(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var cE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const EE=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=cE(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var pE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const yE=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=pE(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var bE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Hu=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=bE(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var hE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const AE=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=hE(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var TE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const RE=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=TE(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var NE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const IE=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=NE(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 4.75c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm6.75 1.5V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25H4.5a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.875-11.384h.806a.75.75 0 0 0 0-1.5h-2.75m-6 4.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM14 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var _E=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Cu=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=_E(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var OE=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const SE=k.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=OE(e,["title","titleId"]);let s=je();return s=r?n||"title-"+s:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},a),r?k.createElement("title",{id:s},r):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Br(e,t,{checkForDefaultPrevented:r=!0}={}){return function(a){if(e==null||e(a),r===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}const[DE,Lt]=rt({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),PE=typeof window<"u"&&window.matchMedia===void 0,LE=(e,t)=>{const[r,n]=k.useState(t);return k.useEffect(()=>{if(PE)return;const a=window.matchMedia(e);n(a.matches);const s=i=>{n(i.matches)};return a.addEventListener("change",s),()=>{a.removeEventListener("change",s)}},[e]),r};function pn(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function an(e){return(t,r)=>{const n=r!=null&&r.context?String(r.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,o=r!=null&&r.width?String(r.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{const i=e.defaultWidth,o=r!=null&&r.width?String(r.width):e.defaultWidth;a=e.values[o]||e.values[i]}const s=e.argumentCallback?e.argumentCallback(t):t;return a[s]}}function sn(e){return(t,r={})=>{const n=r.width,a=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],s=t.match(a);if(!s)return null;const i=s[0],o=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(o)?jE(o,g=>g.test(i)):wE(o,g=>g.test(i));let u;u=e.valueCallback?e.valueCallback(l):l,u=r.valueCallback?r.valueCallback(u):u;const d=t.slice(i.length);return{value:u,rest:d}}}function wE(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function jE(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function pi(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const a=n[0],s=t.match(e.parsePattern);if(!s)return null;let i=e.valueCallback?e.valueCallback(s[0]):s[0];i=r.valueCallback?r.valueCallback(i):i;const o=t.slice(a.length);return{value:i,rest:o}}}const Yu=6048e5,ME=864e5,KE=6e4,FE=36e5,qE=1e3,Lo=Symbol.for("constructDateFrom");function pe(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&Lo in e?e[Lo](t):e instanceof Date?new e.constructor(t):new Date(t)}function at(e,...t){const r=pe.bind(null,t.find(n=>typeof n=="object"));return t.map(r)}let VE={};function jr(){return VE}function oe(e,t){return pe(t||e,e)}function Zn(e,t){var o,l,u,d;const r=jr(),n=(t==null?void 0:t.weekStartsOn)??((l=(o=t==null?void 0:t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??r.weekStartsOn??((d=(u=r.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??0,a=oe(e,t==null?void 0:t.in),s=a.getDay(),i=(s<n?7:0)+s-n;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}const xE={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},$u=(e,t,r)=>{let n;const a=xE[e];return typeof a=="string"?n=a:t===1?n=a.one:n=a.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n},GE={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Wu=(e,t,r,n)=>GE[e],BE={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},UE={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},HE={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},CE={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},YE={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},$E={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},WE=(e,t)=>{const r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},zu={ordinalNumber:WE,era:an({values:BE,defaultWidth:"wide"}),quarter:an({values:UE,defaultWidth:"wide",argumentCallback:e=>e-1}),month:an({values:HE,defaultWidth:"wide"}),day:an({values:CE,defaultWidth:"wide"}),dayPeriod:an({values:YE,defaultWidth:"wide",formattingValues:$E,defaultFormattingWidth:"wide"})},zE=/^(\d+)(th|st|nd|rd)?/i,JE=/\d+/i,XE={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ZE={any:[/^b/i,/^(a|c)/i]},QE={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ep={any:[/1/i,/2/i,/3/i,/4/i]},np={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},rp={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},tp={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ap={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},sp={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ip={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ju={ordinalNumber:pi({matchPattern:zE,parsePattern:JE,valueCallback:e=>parseInt(e,10)}),era:sn({matchPatterns:XE,defaultMatchWidth:"wide",parsePatterns:ZE,defaultParseWidth:"any"}),quarter:sn({matchPatterns:QE,defaultMatchWidth:"wide",parsePatterns:ep,defaultParseWidth:"any",valueCallback:e=>e+1}),month:sn({matchPatterns:np,defaultMatchWidth:"wide",parsePatterns:rp,defaultParseWidth:"any"}),day:sn({matchPatterns:tp,defaultMatchWidth:"wide",parsePatterns:ap,defaultParseWidth:"any"}),dayPeriod:sn({matchPatterns:sp,defaultMatchWidth:"any",parsePatterns:ip,defaultParseWidth:"any"})},op={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},lp={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},dp={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},up={date:pn({formats:op,defaultWidth:"full"}),time:pn({formats:lp,defaultWidth:"full"}),dateTime:pn({formats:dp,defaultWidth:"full"})},Xu={code:"en-GB",formatDistance:$u,formatLong:up,formatRelative:Wu,localize:zu,match:Ju,options:{weekStartsOn:1,firstWeekContainsDate:4}},gp={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},mp={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},kp={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},fp={date:pn({formats:gp,defaultWidth:"full"}),time:pn({formats:mp,defaultWidth:"full"}),dateTime:pn({formats:kp,defaultWidth:"full"})},Wa={code:"en-US",formatDistance:$u,formatLong:fp,formatRelative:Wu,localize:zu,match:Ju,options:{weekStartsOn:0,firstWeekContainsDate:1}},vp={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},cp=(e,t,r)=>{let n;const a=vp[e];return typeof a=="string"?n=a:t===1?n=a.one:n=a.other.replace("{{count}}",String(t)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" siden":n},Ep={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},pp={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},yp={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},bp={date:pn({formats:Ep,defaultWidth:"full"}),time:pn({formats:pp,defaultWidth:"full"}),dateTime:pn({formats:yp,defaultWidth:"full"})},hp={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Ap=(e,t,r,n)=>hp[e],Tp={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Rp={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Np={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Ip={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},_p={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Op=(e,t)=>Number(e)+".",Sp={ordinalNumber:Op,era:an({values:Tp,defaultWidth:"wide"}),quarter:an({values:Rp,defaultWidth:"wide",argumentCallback:e=>e-1}),month:an({values:Np,defaultWidth:"wide"}),day:an({values:Ip,defaultWidth:"wide"}),dayPeriod:an({values:_p,defaultWidth:"wide"})},Dp=/^(\d+)\.?/i,Pp=/\d+/i,Lp={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},wp={any:[/^f/i,/^e/i]},jp={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Mp={any:[/1/i,/2/i,/3/i,/4/i]},Kp={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Fp={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},qp={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Vp={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},xp={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Gp={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Bp={ordinalNumber:pi({matchPattern:Dp,parsePattern:Pp,valueCallback:e=>parseInt(e,10)}),era:sn({matchPatterns:Lp,defaultMatchWidth:"wide",parsePatterns:wp,defaultParseWidth:"any"}),quarter:sn({matchPatterns:jp,defaultMatchWidth:"wide",parsePatterns:Mp,defaultParseWidth:"any",valueCallback:e=>e+1}),month:sn({matchPatterns:Kp,defaultMatchWidth:"wide",parsePatterns:Fp,defaultParseWidth:"any"}),day:sn({matchPatterns:qp,defaultMatchWidth:"wide",parsePatterns:Vp,defaultParseWidth:"any"}),dayPeriod:sn({matchPatterns:xp,defaultMatchWidth:"any",parsePatterns:Gp,defaultParseWidth:"any"})},Zu={code:"nb",formatDistance:cp,formatLong:bp,formatRelative:Ap,localize:Sp,match:Bp,options:{weekStartsOn:1,firstWeekContainsDate:4}},Up={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},Hp=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],Cp=(e,t,r)=>{let n;const a=Up[e];return typeof a=="string"?n=a:t===1?n=a.one:n=a.other.replace("{{count}}",t<13?Hp[t]:String(t)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" sidan":n},Yp={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},$p={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Wp={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},zp={date:pn({formats:Yp,defaultWidth:"full"}),time:pn({formats:$p,defaultWidth:"full"}),dateTime:pn({formats:Wp,defaultWidth:"full"})},Jp={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Xp=(e,t,r,n)=>Jp[e],Zp={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Qp={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},ey={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},ny={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},ry={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},ty=(e,t)=>Number(e)+".",ay={ordinalNumber:ty,era:an({values:Zp,defaultWidth:"wide"}),quarter:an({values:Qp,defaultWidth:"wide",argumentCallback:e=>e-1}),month:an({values:ey,defaultWidth:"wide"}),day:an({values:ny,defaultWidth:"wide"}),dayPeriod:an({values:ry,defaultWidth:"wide"})},sy=/^(\d+)\.?/i,iy=/\d+/i,oy={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},ly={any:[/^f/i,/^e/i]},dy={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},uy={any:[/1/i,/2/i,/3/i,/4/i]},gy={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},my={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},ky={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},fy={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},vy={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},cy={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Ey={ordinalNumber:pi({matchPattern:sy,parsePattern:iy,valueCallback:e=>parseInt(e,10)}),era:sn({matchPatterns:oy,defaultMatchWidth:"wide",parsePatterns:ly,defaultParseWidth:"any"}),quarter:sn({matchPatterns:dy,defaultMatchWidth:"wide",parsePatterns:uy,defaultParseWidth:"any",valueCallback:e=>e+1}),month:sn({matchPatterns:gy,defaultMatchWidth:"wide",parsePatterns:my,defaultParseWidth:"any"}),day:sn({matchPatterns:ky,defaultMatchWidth:"wide",parsePatterns:fy,defaultParseWidth:"any"}),dayPeriod:sn({matchPatterns:vy,defaultMatchWidth:"any",parsePatterns:cy,defaultParseWidth:"any"})},Qu={code:"nn",formatDistance:Cp,formatLong:zp,formatRelative:Xp,localize:ay,match:Ey,options:{weekStartsOn:1,firstWeekContainsDate:4}},py={global:{dateLocale:Zu,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},yy=k.createContext({locale:py}),za=()=>k.useContext(yy);var by=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const hy=k.forwardRef((e,t)=>{var r,n,a,{rootElement:s,asChild:i}=e,o=by(e,["rootElement","asChild"]);const l=Dt(!1),u=(r=za())===null||r===void 0?void 0:r.rootElement,d=(n=s??u)!==null&&n!==void 0?n:(a=globalThis==null?void 0:globalThis.document)===null||a===void 0?void 0:a.body,g=i?fr:"div";return l?d?Oa.createPortal(y.createElement(jc,{theme:l.theme,asChild:!0,hasBackground:!1},y.createElement(g,Object.assign({ref:t,"data-aksel-portal":""},o))),d):null:d?Oa.createPortal(y.createElement(g,Object.assign({ref:t,"data-aksel-portal":""},o)),d):null});function wo(e){return e.sort((t,r)=>{const n=t.compareDocumentPosition(r);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const Ay=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function jo(e,t,r){let n=e+1;return r&&n>=t&&(n=0),n}function Mo(e,t,r){let n=e-1;return r&&n<0&&(n=t),n}const ys=e=>e;class Ty{constructor(){this.descendants=new Map,this.register=t=>{if(t!=null)return Ay(t)?this.registerNode(t):r=>{this.registerNode(r,t)}},this.unregister=t=>{this.descendants.delete(t);const r=wo(Array.from(this.descendants.keys()));this.assignIndex(r)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=t=>{this.descendants.forEach(r=>{const n=t.indexOf(r.node);r.index=n,r.node.dataset.index=r.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((r,n)=>r.index-n.index),this.enabledValues=()=>this.values().filter(t=>!t.disabled),this.item=t=>{if(this.count()!==0)return this.values()[t]},this.enabledItem=t=>{if(this.enabledCount()!==0)return this.enabledValues()[t]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const t=this.enabledValues().length-1;return this.enabledItem(t)},this.indexOf=t=>{var r,n;return t&&(n=(r=this.descendants.get(t))===null||r===void 0?void 0:r.index)!==null&&n!==void 0?n:-1},this.enabledIndexOf=t=>t==null?-1:this.enabledValues().findIndex(r=>r.node.isSameNode(t)),this.next=(t,r=!0)=>{const n=jo(t,this.count(),r);return this.item(n)},this.nextEnabled=(t,r=!0)=>{const n=this.item(t);if(!n)return;const a=this.enabledIndexOf(n.node),s=jo(a,this.enabledCount(),r);return this.enabledItem(s)},this.prev=(t,r=!0)=>{const n=Mo(t,this.count()-1,r);return this.item(n)},this.prevEnabled=(t,r=!0)=>{const n=this.item(t);if(!n)return;const a=this.enabledIndexOf(n.node),s=Mo(a,this.enabledCount()-1,r);return this.enabledItem(s)},this.registerNode=(t,r)=>{if(!t)return;const n=this.descendants.get(t);if(n){this.descendants.set(t,Object.assign({index:n.index,node:t},r));return}const a=Array.from(this.descendants.keys()).concat(t),s=wo(a);r!=null&&r.disabled&&(r.disabled=!!r.disabled);const i=Object.assign({node:t,index:-1},r);this.descendants.set(t,i),this.assignIndex(s)}}}function Ry(){const[e,t]=rt({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),r=ys(s=>y.createElement(e,Object.assign({},s.value),s.children));function n(s){const i=t(),[o,l]=k.useState(-1),u=k.useRef(null);zr(()=>()=>{u.current&&i.unregister(u.current)},[]),zr(()=>{if(!u.current)return;const g=Number(u.current.dataset.index);o!==g&&!Number.isNaN(g)&&l(g)});const d=ys(s?i.register(s):i.register);return{descendants:i,index:o,enabledIndex:i.enabledIndexOf(u.current),register:ci([d,u])}}function a(){return k.useRef(new Ty).current}return[r,t,a,n]}function Ny(e,t=globalThis==null?void 0:globalThis.document){const r=ht(e);k.useEffect(()=>{const n=a=>{a.key==="Escape"&&r(a)};return t.addEventListener("keydown",n,!0),()=>t.removeEventListener("keydown",n,!0)},[r,t])}const eg={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function ng(e,t,r,{discrete:n}={discrete:!1}){if(!t)return;const a=r.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});a.addEventListener(e,t,{once:!0}),n&&a?Oa.flushSync(()=>a.dispatchEvent(s)):a.dispatchEvent(s)}function Iy(e,t=globalThis==null?void 0:globalThis.document){const r=ht(e),n=k.useRef(!1);return k.useEffect(()=>{const a=s=>{if(s.target&&!n.current){const i={originalEvent:s};ng(eg.FOCUS_OUTSIDE,r,i)}};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,r]),{onFocusCapture:()=>{n.current=!0},onBlurCapture:()=>{n.current=!1}}}function _y(e,t=globalThis==null?void 0:globalThis.document){const r=ht(e),n=k.useRef(!1),a=k.useRef(()=>{});return k.useEffect(()=>{const s=o=>{function l(){ng(eg.POINTER_DOWN_OUTSIDE,r,{originalEvent:o},{discrete:!0})}o.target&&!n.current?o.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=l,t.addEventListener("click",a.current,{once:!0})):l():t.removeEventListener("click",a.current),n.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",s),t.removeEventListener("click",a.current)}},[t,r]),{onPointerDownCapture:()=>{n.current=!0}}}var Oy=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const[Sy,Dy,Py,Ly]=Ry();let Kr=0,Ko;const wy=k.forwardRef((e,t)=>Dy(!1)?y.createElement(Fo,Object.assign({ref:t},e)):y.createElement(jy,null,y.createElement(Fo,Object.assign({ref:t},e)))),jy=({children:e})=>{const t=Py();return y.createElement(Sy,{value:t},e)},Fo=k.forwardRef((e,t)=>{var r,{children:n,asChild:a,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:l,onDismiss:u,safeZone:d,disableOutsidePointerEvents:g=!1,enabled:m=!0}=e,v=Oy(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,p]=k.useState({}),{register:c,index:b,descendants:T}=Ly({disableOutsidePointerEvents:g,disabled:!m,forceUpdate:()=>p({})}),[f,h]=k.useState(null),R=nt(h,c,t),A=(r=f==null?void 0:f.ownerDocument)!==null&&r!==void 0?r:globalThis==null?void 0:globalThis.document,O=k.useRef(!1),I=k.useRef(!1),S=(()=>{let N=-1;return T.enabledValues().forEach((F,q)=>{F.disableOutsidePointerEvents&&(N=q)}),{isPointerEventsEnabled:b>=N,isBodyPointerEventsDisabled:Kr>0,pointerStyle:b>=N&&Kr>0?"auto":void 0}})();function P(N){var D,F;if(!(d!=null&&d.anchor)&&!(d!=null&&d.dismissable)||!m)return;N.defaultPrevented||(O.current=!0,N.detail.originalEvent.type==="pointerdown"&&(I.current=!0));const q=N.target;N.detail.originalEvent.type==="pointerdown"?(!((D=d==null?void 0:d.anchor)===null||D===void 0)&&D.contains(q)||q===(d==null?void 0:d.anchor))&&N.preventDefault():!(q instanceof HTMLElement&&![d==null?void 0:d.anchor,d==null?void 0:d.dismissable].some(V=>V==null?void 0:V.contains(q))&&!q.contains((F=d==null?void 0:d.dismissable)!==null&&F!==void 0?F:null))&&N.preventDefault(),N.detail.originalEvent.type==="focusin"&&I.current&&N.preventDefault(),I.current=!1,O.current=!1}const M=_y(N=>{!S.isPointerEventsEnabled||!m||(i==null||i(N),l==null||l(N),d&&P(N),!N.defaultPrevented&&u&&u())},A),j=Iy(N=>{m&&(o==null||o(N),l==null||l(N),d&&P(N),!N.defaultPrevented&&u&&u())},A);Ny(N=>{!m||!(b===T.enabledCount()-1)||(s==null||s(N),!N.defaultPrevented&&u&&(N.preventDefault(),u()))},A),k.useEffect(()=>{if(!(!f||!m||!g))return Kr===0&&(Ko=A.body.style.pointerEvents,A.body.style.pointerEvents="none"),Kr++,()=>{Kr===1&&(A.body.style.pointerEvents=Ko),Kr--}},[f,A,g,T,m]),k.useEffect(()=>()=>T.values().forEach(N=>N.forceUpdate()),[T,f]);const L=a?fr:"div";return y.createElement(L,Object.assign({ref:R},v,{onFocusCapture:j.onFocusCapture,onBlurCapture:j.onBlurCapture,onPointerDownCapture:M.onPointerDownCapture,style:Object.assign({pointerEvents:S.pointerStyle},v.style)}),n)}),Jr=Math.min,Ir=Math.max,Sa=Math.round,Wt=Math.floor,Vn=e=>({x:e,y:e}),My={left:"right",right:"left",bottom:"top",top:"bottom"},Ky={start:"end",end:"start"};function Js(e,t,r){return Ir(e,Jr(t,r))}function wt(e,t){return typeof e=="function"?e(t):e}function Or(e){return e.split("-")[0]}function jt(e){return e.split("-")[1]}function rg(e){return e==="x"?"y":"x"}function yi(e){return e==="y"?"height":"width"}function Xr(e){return["top","bottom"].includes(Or(e))?"y":"x"}function bi(e){return rg(Xr(e))}function Fy(e,t,r){r===void 0&&(r=!1);const n=jt(e),a=bi(e),s=yi(a);let i=a==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(i=Da(i)),[i,Da(i)]}function qy(e){const t=Da(e);return[Xs(e),t,Xs(t)]}function Xs(e){return e.replace(/start|end/g,t=>Ky[t])}function Vy(e,t,r){const n=["left","right"],a=["right","left"],s=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return r?t?a:n:t?n:a;case"left":case"right":return t?s:i;default:return[]}}function xy(e,t,r,n){const a=jt(e);let s=Vy(Or(e),r==="start",n);return a&&(s=s.map(i=>i+"-"+a),t&&(s=s.concat(s.map(Xs)))),s}function Da(e){return e.replace(/left|right|bottom|top/g,t=>My[t])}function Gy(e){return{top:0,right:0,bottom:0,left:0,...e}}function tg(e){return typeof e!="number"?Gy(e):{top:e,right:e,bottom:e,left:e}}function Pa(e){const{x:t,y:r,width:n,height:a}=e;return{width:n,height:a,top:r,left:t,right:t+n,bottom:r+a,x:t,y:r}}function qo(e,t,r){let{reference:n,floating:a}=e;const s=Xr(t),i=bi(t),o=yi(i),l=Or(t),u=s==="y",d=n.x+n.width/2-a.width/2,g=n.y+n.height/2-a.height/2,m=n[o]/2-a[o]/2;let v;switch(l){case"top":v={x:d,y:n.y-a.height};break;case"bottom":v={x:d,y:n.y+n.height};break;case"right":v={x:n.x+n.width,y:g};break;case"left":v={x:n.x-a.width,y:g};break;default:v={x:n.x,y:n.y}}switch(jt(t)){case"start":v[i]-=m*(r&&u?-1:1);break;case"end":v[i]+=m*(r&&u?-1:1);break}return v}const By=async(e,t,r)=>{const{placement:n="bottom",strategy:a="absolute",middleware:s=[],platform:i}=r,o=s.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(t));let u=await i.getElementRects({reference:e,floating:t,strategy:a}),{x:d,y:g}=qo(u,n,l),m=n,v={},p=0;for(let c=0;c<o.length;c++){const{name:b,fn:T}=o[c],{x:f,y:h,data:R,reset:A}=await T({x:d,y:g,initialPlacement:n,placement:m,strategy:a,middlewareData:v,rects:u,platform:i,elements:{reference:e,floating:t}});d=f??d,g=h??g,v={...v,[b]:{...v[b],...R}},A&&p<=50&&(p++,typeof A=="object"&&(A.placement&&(m=A.placement),A.rects&&(u=A.rects===!0?await i.getElementRects({reference:e,floating:t,strategy:a}):A.rects),{x:d,y:g}=qo(u,m,l)),c=-1)}return{x:d,y:g,placement:m,strategy:a,middlewareData:v}};async function ag(e,t){var r;t===void 0&&(t={});const{x:n,y:a,platform:s,rects:i,elements:o,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:g="floating",altBoundary:m=!1,padding:v=0}=wt(t,e),p=tg(v),b=o[m?g==="floating"?"reference":"floating":g],T=Pa(await s.getClippingRect({element:(r=await(s.isElement==null?void 0:s.isElement(b)))==null||r?b:b.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(o.floating)),boundary:u,rootBoundary:d,strategy:l})),f=g==="floating"?{x:n,y:a,width:i.floating.width,height:i.floating.height}:i.reference,h=await(s.getOffsetParent==null?void 0:s.getOffsetParent(o.floating)),R=await(s.isElement==null?void 0:s.isElement(h))?await(s.getScale==null?void 0:s.getScale(h))||{x:1,y:1}:{x:1,y:1},A=Pa(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:f,offsetParent:h,strategy:l}):f);return{top:(T.top-A.top+p.top)/R.y,bottom:(A.bottom-T.bottom+p.bottom)/R.y,left:(T.left-A.left+p.left)/R.x,right:(A.right-T.right+p.right)/R.x}}const Uy=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:n,placement:a,rects:s,platform:i,elements:o,middlewareData:l}=t,{element:u,padding:d=0}=wt(e,t)||{};if(u==null)return{};const g=tg(d),m={x:r,y:n},v=bi(a),p=yi(v),c=await i.getDimensions(u),b=v==="y",T=b?"top":"left",f=b?"bottom":"right",h=b?"clientHeight":"clientWidth",R=s.reference[p]+s.reference[v]-m[v]-s.floating[p],A=m[v]-s.reference[v],O=await(i.getOffsetParent==null?void 0:i.getOffsetParent(u));let I=O?O[h]:0;(!I||!await(i.isElement==null?void 0:i.isElement(O)))&&(I=o.floating[h]||s.floating[p]);const S=R/2-A/2,P=I/2-c[p]/2-1,M=Jr(g[T],P),j=Jr(g[f],P),L=M,N=I-c[p]-j,D=I/2-c[p]/2+S,F=Js(L,D,N),q=!l.arrow&&jt(a)!=null&&D!==F&&s.reference[p]/2-(D<L?M:j)-c[p]/2<0,U=q?D<L?D-L:D-N:0;return{[v]:m[v]+U,data:{[v]:F,centerOffset:D-F-U,...q&&{alignmentOffset:U}},reset:q}}}),Hy=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,n;const{placement:a,middlewareData:s,rects:i,initialPlacement:o,platform:l,elements:u}=t,{mainAxis:d=!0,crossAxis:g=!0,fallbackPlacements:m,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:c=!0,...b}=wt(e,t);if((r=s.arrow)!=null&&r.alignmentOffset)return{};const T=Or(a),f=Xr(o),h=Or(o)===o,R=await(l.isRTL==null?void 0:l.isRTL(u.floating)),A=m||(h||!c?[Da(o)]:qy(o)),O=p!=="none";!m&&O&&A.push(...xy(o,c,p,R));const I=[o,...A],S=await ag(t,b),P=[];let M=((n=s.flip)==null?void 0:n.overflows)||[];if(d&&P.push(S[T]),g){const D=Fy(a,i,R);P.push(S[D[0]],S[D[1]])}if(M=[...M,{placement:a,overflows:P}],!P.every(D=>D<=0)){var j,L;const D=(((j=s.flip)==null?void 0:j.index)||0)+1,F=I[D];if(F)return{data:{index:D,overflows:M},reset:{placement:F}};let q=(L=M.filter(U=>U.overflows[0]<=0).sort((U,V)=>U.overflows[1]-V.overflows[1])[0])==null?void 0:L.placement;if(!q)switch(v){case"bestFit":{var N;const U=(N=M.filter(V=>{if(O){const B=Xr(V.placement);return B===f||B==="y"}return!0}).map(V=>[V.placement,V.overflows.filter(B=>B>0).reduce((B,X)=>B+X,0)]).sort((V,B)=>V[1]-B[1])[0])==null?void 0:N[0];U&&(q=U);break}case"initialPlacement":q=o;break}if(a!==q)return{reset:{placement:q}}}return{}}}};async function Cy(e,t){const{placement:r,platform:n,elements:a}=e,s=await(n.isRTL==null?void 0:n.isRTL(a.floating)),i=Or(r),o=jt(r),l=Xr(r)==="y",u=["left","top"].includes(i)?-1:1,d=s&&l?-1:1,g=wt(t,e);let{mainAxis:m,crossAxis:v,alignmentAxis:p}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return o&&typeof p=="number"&&(v=o==="end"?p*-1:p),l?{x:v*d,y:m*u}:{x:m*u,y:v*d}}const Yy=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,n;const{x:a,y:s,placement:i,middlewareData:o}=t,l=await Cy(t,e);return i===((r=o.offset)==null?void 0:r.placement)&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:a+l.x,y:s+l.y,data:{...l,placement:i}}}}},$y=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:a}=t,{mainAxis:s=!0,crossAxis:i=!1,limiter:o={fn:b=>{let{x:T,y:f}=b;return{x:T,y:f}}},...l}=wt(e,t),u={x:r,y:n},d=await ag(t,l),g=Xr(Or(a)),m=rg(g);let v=u[m],p=u[g];if(s){const b=m==="y"?"top":"left",T=m==="y"?"bottom":"right",f=v+d[b],h=v-d[T];v=Js(f,v,h)}if(i){const b=g==="y"?"top":"left",T=g==="y"?"bottom":"right",f=p+d[b],h=p-d[T];p=Js(f,p,h)}const c=o.fn({...t,[m]:v,[g]:p});return{...c,data:{x:c.x-r,y:c.y-n,enabled:{[m]:s,[g]:i}}}}}};function Ja(){return typeof window<"u"}function st(e){return sg(e)?(e.nodeName||"").toLowerCase():"#document"}function fn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Hn(e){var t;return(t=(sg(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function sg(e){return Ja()?e instanceof Node||e instanceof fn(e).Node:!1}function In(e){return Ja()?e instanceof Element||e instanceof fn(e).Element:!1}function Bn(e){return Ja()?e instanceof HTMLElement||e instanceof fn(e).HTMLElement:!1}function Vo(e){return!Ja()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof fn(e).ShadowRoot}function Mt(e){const{overflow:t,overflowX:r,overflowY:n,display:a}=_n(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(a)}function Wy(e){return["table","td","th"].includes(st(e))}function Xa(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function hi(e){const t=Ai(),r=In(e)?_n(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>r[n]?r[n]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function zy(e){let t=gr(e);for(;Bn(t)&&!Zr(t);){if(hi(t))return t;if(Xa(t))return null;t=gr(t)}return null}function Ai(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Zr(e){return["html","body","#document"].includes(st(e))}function _n(e){return fn(e).getComputedStyle(e)}function Za(e){return In(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function gr(e){if(st(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Vo(e)&&e.host||Hn(e);return Vo(t)?t.host:t}function ig(e){const t=gr(e);return Zr(t)?e.ownerDocument?e.ownerDocument.body:e.body:Bn(t)&&Mt(t)?t:ig(t)}function dr(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const a=ig(e),s=a===((n=e.ownerDocument)==null?void 0:n.body),i=fn(a);if(s){const o=Zs(i);return t.concat(i,i.visualViewport||[],Mt(a)?a:[],o&&r?dr(o):[])}return t.concat(a,dr(a,[],r))}function Zs(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function og(e){const t=_n(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const a=Bn(e),s=a?e.offsetWidth:r,i=a?e.offsetHeight:n,o=Sa(r)!==s||Sa(n)!==i;return o&&(r=s,n=i),{width:r,height:n,$:o}}function Ti(e){return In(e)?e:e.contextElement}function Ur(e){const t=Ti(e);if(!Bn(t))return Vn(1);const r=t.getBoundingClientRect(),{width:n,height:a,$:s}=og(t);let i=(s?Sa(r.width):r.width)/n,o=(s?Sa(r.height):r.height)/a;return(!i||!Number.isFinite(i))&&(i=1),(!o||!Number.isFinite(o))&&(o=1),{x:i,y:o}}const Jy=Vn(0);function lg(e){const t=fn(e);return!Ai()||!t.visualViewport?Jy:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Xy(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==fn(e)?!1:t}function Sr(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const a=e.getBoundingClientRect(),s=Ti(e);let i=Vn(1);t&&(n?In(n)&&(i=Ur(n)):i=Ur(e));const o=Xy(s,r,n)?lg(s):Vn(0);let l=(a.left+o.x)/i.x,u=(a.top+o.y)/i.y,d=a.width/i.x,g=a.height/i.y;if(s){const m=fn(s),v=n&&In(n)?fn(n):n;let p=m,c=Zs(p);for(;c&&n&&v!==p;){const b=Ur(c),T=c.getBoundingClientRect(),f=_n(c),h=T.left+(c.clientLeft+parseFloat(f.paddingLeft))*b.x,R=T.top+(c.clientTop+parseFloat(f.paddingTop))*b.y;l*=b.x,u*=b.y,d*=b.x,g*=b.y,l+=h,u+=R,p=fn(c),c=Zs(p)}}return Pa({width:d,height:g,x:l,y:u})}function Ri(e,t){const r=Za(e).scrollLeft;return t?t.left+r:Sr(Hn(e)).left+r}function dg(e,t,r){r===void 0&&(r=!1);const n=e.getBoundingClientRect(),a=n.left+t.scrollLeft-(r?0:Ri(e,n)),s=n.top+t.scrollTop;return{x:a,y:s}}function Zy(e){let{elements:t,rect:r,offsetParent:n,strategy:a}=e;const s=a==="fixed",i=Hn(n),o=t?Xa(t.floating):!1;if(n===i||o&&s)return r;let l={scrollLeft:0,scrollTop:0},u=Vn(1);const d=Vn(0),g=Bn(n);if((g||!g&&!s)&&((st(n)!=="body"||Mt(i))&&(l=Za(n)),Bn(n))){const v=Sr(n);u=Ur(n),d.x=v.x+n.clientLeft,d.y=v.y+n.clientTop}const m=i&&!g&&!s?dg(i,l,!0):Vn(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-l.scrollLeft*u.x+d.x+m.x,y:r.y*u.y-l.scrollTop*u.y+d.y+m.y}}function Qy(e){return Array.from(e.getClientRects())}function eb(e){const t=Hn(e),r=Za(e),n=e.ownerDocument.body,a=Ir(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),s=Ir(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let i=-r.scrollLeft+Ri(e);const o=-r.scrollTop;return _n(n).direction==="rtl"&&(i+=Ir(t.clientWidth,n.clientWidth)-a),{width:a,height:s,x:i,y:o}}function nb(e,t){const r=fn(e),n=Hn(e),a=r.visualViewport;let s=n.clientWidth,i=n.clientHeight,o=0,l=0;if(a){s=a.width,i=a.height;const u=Ai();(!u||u&&t==="fixed")&&(o=a.offsetLeft,l=a.offsetTop)}return{width:s,height:i,x:o,y:l}}function rb(e,t){const r=Sr(e,!0,t==="fixed"),n=r.top+e.clientTop,a=r.left+e.clientLeft,s=Bn(e)?Ur(e):Vn(1),i=e.clientWidth*s.x,o=e.clientHeight*s.y,l=a*s.x,u=n*s.y;return{width:i,height:o,x:l,y:u}}function xo(e,t,r){let n;if(t==="viewport")n=nb(e,r);else if(t==="document")n=eb(Hn(e));else if(In(t))n=rb(t,r);else{const a=lg(e);n={x:t.x-a.x,y:t.y-a.y,width:t.width,height:t.height}}return Pa(n)}function ug(e,t){const r=gr(e);return r===t||!In(r)||Zr(r)?!1:_n(r).position==="fixed"||ug(r,t)}function tb(e,t){const r=t.get(e);if(r)return r;let n=dr(e,[],!1).filter(o=>In(o)&&st(o)!=="body"),a=null;const s=_n(e).position==="fixed";let i=s?gr(e):e;for(;In(i)&&!Zr(i);){const o=_n(i),l=hi(i);!l&&o.position==="fixed"&&(a=null),(s?!l&&!a:!l&&o.position==="static"&&!!a&&["absolute","fixed"].includes(a.position)||Mt(i)&&!l&&ug(e,i))?n=n.filter(d=>d!==i):a=o,i=gr(i)}return t.set(e,n),n}function ab(e){let{element:t,boundary:r,rootBoundary:n,strategy:a}=e;const i=[...r==="clippingAncestors"?Xa(t)?[]:tb(t,this._c):[].concat(r),n],o=i[0],l=i.reduce((u,d)=>{const g=xo(t,d,a);return u.top=Ir(g.top,u.top),u.right=Jr(g.right,u.right),u.bottom=Jr(g.bottom,u.bottom),u.left=Ir(g.left,u.left),u},xo(t,o,a));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function sb(e){const{width:t,height:r}=og(e);return{width:t,height:r}}function ib(e,t,r){const n=Bn(t),a=Hn(t),s=r==="fixed",i=Sr(e,!0,s,t);let o={scrollLeft:0,scrollTop:0};const l=Vn(0);if(n||!n&&!s)if((st(t)!=="body"||Mt(a))&&(o=Za(t)),n){const m=Sr(t,!0,s,t);l.x=m.x+t.clientLeft,l.y=m.y+t.clientTop}else a&&(l.x=Ri(a));const u=a&&!n&&!s?dg(a,o):Vn(0),d=i.left+o.scrollLeft-l.x-u.x,g=i.top+o.scrollTop-l.y-u.y;return{x:d,y:g,width:i.width,height:i.height}}function bs(e){return _n(e).position==="static"}function Go(e,t){if(!Bn(e)||_n(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return Hn(e)===r&&(r=r.ownerDocument.body),r}function gg(e,t){const r=fn(e);if(Xa(e))return r;if(!Bn(e)){let a=gr(e);for(;a&&!Zr(a);){if(In(a)&&!bs(a))return a;a=gr(a)}return r}let n=Go(e,t);for(;n&&Wy(n)&&bs(n);)n=Go(n,t);return n&&Zr(n)&&bs(n)&&!hi(n)?r:n||zy(e)||r}const ob=async function(e){const t=this.getOffsetParent||gg,r=this.getDimensions,n=await r(e.floating);return{reference:ib(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function lb(e){return _n(e).direction==="rtl"}const db={convertOffsetParentRelativeRectToViewportRelativeRect:Zy,getDocumentElement:Hn,getClippingRect:ab,getOffsetParent:gg,getElementRects:ob,getClientRects:Qy,getDimensions:sb,getScale:Ur,isElement:In,isRTL:lb};function mg(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ub(e,t){let r=null,n;const a=Hn(e);function s(){var o;clearTimeout(n),(o=r)==null||o.disconnect(),r=null}function i(o,l){o===void 0&&(o=!1),l===void 0&&(l=1),s();const u=e.getBoundingClientRect(),{left:d,top:g,width:m,height:v}=u;if(o||t(),!m||!v)return;const p=Wt(g),c=Wt(a.clientWidth-(d+m)),b=Wt(a.clientHeight-(g+v)),T=Wt(d),h={rootMargin:-p+"px "+-c+"px "+-b+"px "+-T+"px",threshold:Ir(0,Jr(1,l))||1};let R=!0;function A(O){const I=O[0].intersectionRatio;if(I!==l){if(!R)return i();I?i(!1,I):n=setTimeout(()=>{i(!1,1e-7)},1e3)}I===1&&!mg(u,e.getBoundingClientRect())&&i(),R=!1}try{r=new IntersectionObserver(A,{...h,root:a.ownerDocument})}catch{r=new IntersectionObserver(A,h)}r.observe(e)}return i(!0),s}function Qs(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,u=Ti(e),d=a||s?[...u?dr(u):[],...dr(t)]:[];d.forEach(T=>{a&&T.addEventListener("scroll",r,{passive:!0}),s&&T.addEventListener("resize",r)});const g=u&&o?ub(u,r):null;let m=-1,v=null;i&&(v=new ResizeObserver(T=>{let[f]=T;f&&f.target===u&&v&&(v.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var h;(h=v)==null||h.observe(t)})),r()}),u&&!l&&v.observe(u),v.observe(t));let p,c=l?Sr(e):null;l&&b();function b(){const T=Sr(e);c&&!mg(c,T)&&r(),c=T,p=requestAnimationFrame(b)}return r(),()=>{var T;d.forEach(f=>{a&&f.removeEventListener("scroll",r),s&&f.removeEventListener("resize",r)}),g==null||g(),(T=v)==null||T.disconnect(),v=null,l&&cancelAnimationFrame(p)}}const gb=Yy,mb=$y,kb=Hy,Bo=Uy,fb=(e,t,r)=>{const n=new Map,a={platform:db,...r},s={...a.platform,_c:n};return By(e,t,{...a,platform:s})};var Ta=typeof document<"u"?k.useLayoutEffect:k.useEffect;function La(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,n,a;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return!1;for(n=r;n--!==0;)if(!La(e[n],t[n]))return!1;return!0}if(a=Object.keys(e),r=a.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!{}.hasOwnProperty.call(t,a[n]))return!1;for(n=r;n--!==0;){const s=a[n];if(!(s==="_owner"&&e.$$typeof)&&!La(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}function kg(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Uo(e,t){const r=kg(e);return Math.round(t*r)/r}function hs(e){const t=k.useRef(e);return Ta(()=>{t.current=e}),t}function vb(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:n=[],platform:a,elements:{reference:s,floating:i}={},transform:o=!0,whileElementsMounted:l,open:u}=e,[d,g]=k.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[m,v]=k.useState(n);La(m,n)||v(n);const[p,c]=k.useState(null),[b,T]=k.useState(null),f=k.useCallback(V=>{V!==O.current&&(O.current=V,c(V))},[]),h=k.useCallback(V=>{V!==I.current&&(I.current=V,T(V))},[]),R=s||p,A=i||b,O=k.useRef(null),I=k.useRef(null),S=k.useRef(d),P=l!=null,M=hs(l),j=hs(a),L=hs(u),N=k.useCallback(()=>{if(!O.current||!I.current)return;const V={placement:t,strategy:r,middleware:m};j.current&&(V.platform=j.current),fb(O.current,I.current,V).then(B=>{const X={...B,isPositioned:L.current!==!1};D.current&&!La(S.current,X)&&(S.current=X,nu.flushSync(()=>{g(X)}))})},[m,t,r,j,L]);Ta(()=>{u===!1&&S.current.isPositioned&&(S.current.isPositioned=!1,g(V=>({...V,isPositioned:!1})))},[u]);const D=k.useRef(!1);Ta(()=>(D.current=!0,()=>{D.current=!1}),[]),Ta(()=>{if(R&&(O.current=R),A&&(I.current=A),R&&A){if(M.current)return M.current(R,A,N);N()}},[R,A,N,M,P]);const F=k.useMemo(()=>({reference:O,floating:I,setReference:f,setFloating:h}),[f,h]),q=k.useMemo(()=>({reference:R,floating:A}),[R,A]),U=k.useMemo(()=>{const V={position:r,left:0,top:0};if(!q.floating)return V;const B=Uo(q.floating,d.x),X=Uo(q.floating,d.y);return o?{...V,transform:"translate("+B+"px, "+X+"px)",...kg(q.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:B,top:X}},[r,o,q.floating,d.x,d.y]);return k.useMemo(()=>({...d,update:N,refs:F,elements:q,floatingStyles:U}),[d,N,F,q,U])}const cb=e=>{function t(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:n,padding:a}=typeof e=="function"?e(r):e;return n&&t(n)?n.current!=null?Bo({element:n.current,padding:a}).fn(r):{}:n?Bo({element:n,padding:a}).fn(r):{}}}},fg=(e,t)=>({...gb(e),options:[e,t]}),vg=(e,t)=>({...mb(e),options:[e,t]}),cg=(e,t)=>({...kb(e),options:[e,t]}),Eg=(e,t)=>({...cb(e),options:[e,t]}),Ho=/(\w+)/g;function Eb(e,t){const r=Array.isArray(e)?e:pb(e);for(const n of t){if(!n)continue;let a=n;for(let s=0;s<r.length;s++){const i=a[r[s]];i!==void 0&&(a=i)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function pb(e){const t=[];let r=Ho.exec(e);for(;r;){const[,n,a]=r;t.push(n||a),r=Ho.exec(e)}return t}const yb=/{[^}]*}/g;function er(e,...t){const r=za(),n=r.translations||[],a=[...t,...Array.isArray(n)?n.map(i=>i[e]):[n[e]],r.locale[e]];return(i,o)=>{const l=Eb(i,a);return o?l.replace(yb,u=>{const d=u.substring(1,u.length-1);if(o[d]===void 0){const g=JSON.stringify(o);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${d}'. The following replacements were passed: '${g}'`)}return o[d]}):l}}function pg(){const e=za(),t=e.translations||[],r=Array.isArray(t)?t.map(n=>n.global):[t.global];r.push(e.locale.global);for(const n of r)if(n!=null&&n.dateLocale)return n.dateLocale;throw new Error("dateLocale not found.")}var bb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const hb=k.forwardRef((e,t)=>{var{className:r,size:n="medium",title:a,transparent:s=!1,variant:i="neutral",id:o}=e,l=bb(e,["className","size","title","transparent","variant","id"]);const{cn:u}=ne(),d=Nn(),g=er("Loader");return y.createElement("svg",Object.assign({"aria-labelledby":o??`loader-${d}`,ref:t,className:u("navds-loader",r,`navds-loader--${n}`,`navds-loader--${i}`,{"navds-loader--transparent":s}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},on(l,["children"])),y.createElement("title",{id:o??`loader-${d}`},a||g("title")),y.createElement("circle",{className:u("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),y.createElement("circle",{className:u("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var Ab=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const xe=k.forwardRef((e,t)=>{var{as:r="button",variant:n="primary",className:a,children:s,size:i="medium",loading:o=!1,disabled:l,icon:u,iconPosition:d="left",onKeyUp:g}=e,m=Ab(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp"]);const{cn:v}=ne(),p=l||o?on(m,["href"]):m,c=b=>{b.key===" "&&!l&&!o&&b.currentTarget.click()};return y.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},p,{ref:t,onKeyUp:Br(g,c),className:v(a,"navds-button",`navds-button--${n}`,`navds-button--${i}`,{"navds-button--loading":o,"navds-button--icon-only":!!u&&!s,"navds-button--disabled":l??o}),disabled:l??o?!0:void 0}),u&&d==="left"&&y.createElement("span",{className:v("navds-button__icon")},u),o&&y.createElement(hb,{size:i}),s&&y.createElement(Ie,{as:"span",size:i==="medium"?"medium":"small"},s),u&&d==="right"&&y.createElement("span",{className:v("navds-button__icon")},u))});var Tb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Rb={error:SE,warning:Ei,info:lE,success:nE},Kt=k.forwardRef((e,t)=>{var{children:r,className:n,variant:a,size:s="medium",fullWidth:i=!1,contentMaxWidth:o=!0,inline:l=!1,closeButton:u=!1,onClose:d}=e,g=Tb(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:m}=ne(),v=er("Alert"),p=Rb[a];return y.createElement("div",Object.assign({},g,{ref:t,className:m(n,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":i,"navds-alert--inline":l,"navds-alert--close-button":u})}),y.createElement(p,{title:v(a),className:m("navds-alert__icon")}),y.createElement(xu,{as:"div",size:s,className:m("navds-alert__wrapper",o&&"navds-alert__wrapper--maxwidth")},r),u&&!l&&y.createElement("div",{className:m("navds-alert__button-wrapper")},y.createElement(xe,{className:m("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:d,type:"button",icon:y.createElement(Cu,{title:["error","warning"].includes(a)?v("closeAlert"):v("closeMessage")})})))});function Ft(e,t,r){const n=oe(e,r==null?void 0:r.in);return isNaN(t)?pe((r==null?void 0:r.in)||e,NaN):(t&&n.setDate(n.getDate()+t),n)}function Ni(e,t,r){const n=oe(e,r==null?void 0:r.in);if(isNaN(t))return pe(e,NaN);if(!t)return n;const a=n.getDate(),s=pe(e,n.getTime());s.setMonth(n.getMonth()+t+1,0);const i=s.getDate();return a>=i?s:(n.setFullYear(s.getFullYear(),s.getMonth(),a),n)}function wa(e,t){const r=oe(e,t==null?void 0:t.in).getDay();return r===0||r===6}function Dr(e,t){return Zn(e,{...t,weekStartsOn:1})}function yg(e,t){const r=oe(e,t==null?void 0:t.in),n=r.getFullYear(),a=pe(r,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const s=Dr(a),i=pe(r,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const o=Dr(i);return r.getTime()>=s.getTime()?n+1:r.getTime()>=o.getTime()?n:n-1}function ja(e){const t=oe(e),r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return r.setUTCFullYear(t.getFullYear()),+e-+r}function Qn(e,t){const r=oe(e,t==null?void 0:t.in);return r.setHours(0,0,0,0),r}function or(e,t,r){const[n,a]=at(r==null?void 0:r.in,e,t),s=Qn(n),i=Qn(a),o=+s-ja(s),l=+i-ja(i);return Math.round((o-l)/ME)}function Nb(e,t){const r=yg(e,t),n=pe(e,0);return n.setFullYear(r,0,4),n.setHours(0,0,0,0),Dr(n)}function Ib(e,t,r){return Ft(e,t*7,r)}function Ii(e,t,r){return Ni(e,t*12,r)}function _b(e,t){let r,n=t==null?void 0:t.in;return e.forEach(a=>{!n&&typeof a=="object"&&(n=pe.bind(null,a));const s=oe(a,n);(!r||r<s||isNaN(+s))&&(r=s)}),pe(n,r||NaN)}function Ob(e,t){let r,n=t==null?void 0:t.in;return e.forEach(a=>{!n&&typeof a=="object"&&(n=pe.bind(null,a));const s=oe(a,n);(!r||r>s||isNaN(+s))&&(r=s)}),pe(n,r||NaN)}function _i(e,t,r){const[n,a]=at(r==null?void 0:r.in,e,t);return+Qn(n)==+Qn(a)}function bg(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Sb(e){return!(!bg(e)&&typeof e!="number"||isNaN(+oe(e)))}function Db(e,t,r){const[n,a]=at(r==null?void 0:r.in,e,t),s=n.getFullYear()-a.getFullYear(),i=n.getMonth()-a.getMonth();return s*12+i}function hg(e,t){const r=oe(e,t==null?void 0:t.in),n=r.getMonth();return r.setFullYear(r.getFullYear(),n+1,0),r.setHours(23,59,59,999),r}function Pb(e,t){const[r,n]=at(e,t.start,t.end);return{start:r,end:n}}function Ag(e,t){const{start:r,end:n}=Pb(t==null?void 0:t.in,e);let a=+r>+n;const s=a?+r:+n,i=a?n:r;i.setHours(0,0,0,0),i.setDate(1);let o=1;const l=[];for(;+i<=s;)l.push(pe(r,i)),i.setMonth(i.getMonth()+o);return a?l.reverse():l}function Pr(e,t){const r=oe(e,t==null?void 0:t.in);return r.setDate(1),r.setHours(0,0,0,0),r}function Qa(e,t){const r=oe(e,t==null?void 0:t.in),n=r.getFullYear();return r.setFullYear(n+1,0,0),r.setHours(23,59,59,999),r}function qt(e,t){const r=oe(e,t==null?void 0:t.in);return r.setFullYear(r.getFullYear(),0,1),r.setHours(0,0,0,0),r}function Tg(e,t){var o,l,u,d;const r=jr(),n=(t==null?void 0:t.weekStartsOn)??((l=(o=t==null?void 0:t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??r.weekStartsOn??((d=(u=r.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??0,a=oe(e,t==null?void 0:t.in),s=a.getDay(),i=(s<n?-7:0)+6-(s-n);return a.setDate(a.getDate()+i),a.setHours(23,59,59,999),a}function Lb(e,t){return Tg(e,{...t,weekStartsOn:1})}function wb(e,t){const r=oe(e,t==null?void 0:t.in);return or(r,qt(r))+1}function Oi(e,t){const r=oe(e,t==null?void 0:t.in),n=+Dr(r)-+Nb(r);return Math.round(n/Yu)+1}function Si(e,t){var d,g,m,v;const r=oe(e,t==null?void 0:t.in),n=r.getFullYear(),a=jr(),s=(t==null?void 0:t.firstWeekContainsDate)??((g=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:g.firstWeekContainsDate)??a.firstWeekContainsDate??((v=(m=a.locale)==null?void 0:m.options)==null?void 0:v.firstWeekContainsDate)??1,i=pe((t==null?void 0:t.in)||e,0);i.setFullYear(n+1,0,s),i.setHours(0,0,0,0);const o=Zn(i,t),l=pe((t==null?void 0:t.in)||e,0);l.setFullYear(n,0,s),l.setHours(0,0,0,0);const u=Zn(l,t);return+r>=+o?n+1:+r>=+u?n:n-1}function jb(e,t){var o,l,u,d;const r=jr(),n=(t==null?void 0:t.firstWeekContainsDate)??((l=(o=t==null?void 0:t.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??r.firstWeekContainsDate??((d=(u=r.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??1,a=Si(e,t),s=pe((t==null?void 0:t.in)||e,0);return s.setFullYear(a,0,n),s.setHours(0,0,0,0),Zn(s,t)}function Di(e,t){const r=oe(e,t==null?void 0:t.in),n=+Zn(r,t)-+jb(r,t);return Math.round(n/Yu)+1}function Ee(e,t){const r=e<0?"-":"",n=Math.abs(e).toString().padStart(t,"0");return r+n}const sr={y(e,t){const r=e.getFullYear(),n=r>0?r:1-r;return Ee(t==="yy"?n%100:n,t.length)},M(e,t){const r=e.getMonth();return t==="M"?String(r+1):Ee(r+1,2)},d(e,t){return Ee(e.getDate(),t.length)},a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,t){return Ee(e.getHours()%12||12,t.length)},H(e,t){return Ee(e.getHours(),t.length)},m(e,t){return Ee(e.getMinutes(),t.length)},s(e,t){return Ee(e.getSeconds(),t.length)},S(e,t){const r=t.length,n=e.getMilliseconds(),a=Math.trunc(n*Math.pow(10,r-3));return Ee(a,t.length)}},Fr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Co={G:function(e,t,r){const n=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){const n=e.getFullYear(),a=n>0?n:1-n;return r.ordinalNumber(a,{unit:"year"})}return sr.y(e,t)},Y:function(e,t,r,n){const a=Si(e,n),s=a>0?a:1-a;if(t==="YY"){const i=s%100;return Ee(i,2)}return t==="Yo"?r.ordinalNumber(s,{unit:"year"}):Ee(s,t.length)},R:function(e,t){const r=yg(e);return Ee(r,t.length)},u:function(e,t){const r=e.getFullYear();return Ee(r,t.length)},Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return Ee(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return Ee(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return sr.M(e,t);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,r){const n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return Ee(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){const a=Di(e,n);return t==="wo"?r.ordinalNumber(a,{unit:"week"}):Ee(a,t.length)},I:function(e,t,r){const n=Oi(e);return t==="Io"?r.ordinalNumber(n,{unit:"week"}):Ee(n,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):sr.d(e,t)},D:function(e,t,r){const n=wb(e);return t==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):Ee(n,t.length)},E:function(e,t,r){const n=e.getDay();switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){const a=e.getDay(),s=(a-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return Ee(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(a,{width:"short",context:"formatting"});case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){const a=e.getDay(),s=(a-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return Ee(s,t.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});case"cccccc":return r.day(a,{width:"short",context:"standalone"});case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,r){const n=e.getDay(),a=n===0?7:n;switch(t){case"i":return String(a);case"ii":return Ee(a,t.length);case"io":return r.ordinalNumber(a,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,r){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,r){const n=e.getHours();let a;switch(n===12?a=Fr.noon:n===0?a=Fr.midnight:a=n/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,r){const n=e.getHours();let a;switch(n>=17?a=Fr.evening:n>=12?a=Fr.afternoon:n>=4?a=Fr.morning:a=Fr.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){let n=e.getHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return sr.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):sr.H(e,t)},K:function(e,t,r){const n=e.getHours()%12;return t==="Ko"?r.ordinalNumber(n,{unit:"hour"}):Ee(n,t.length)},k:function(e,t,r){let n=e.getHours();return n===0&&(n=24),t==="ko"?r.ordinalNumber(n,{unit:"hour"}):Ee(n,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):sr.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):sr.s(e,t)},S:function(e,t){return sr.S(e,t)},X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(t){case"X":return $o(n);case"XXXX":case"XX":return Tr(n);case"XXXXX":case"XXX":default:return Tr(n,":")}},x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"x":return $o(n);case"xxxx":case"xx":return Tr(n);case"xxxxx":case"xxx":default:return Tr(n,":")}},O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Yo(n,":");case"OOOO":default:return"GMT"+Tr(n,":")}},z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Yo(n,":");case"zzzz":default:return"GMT"+Tr(n,":")}},t:function(e,t,r){const n=Math.trunc(+e/1e3);return Ee(n,t.length)},T:function(e,t,r){return Ee(+e,t.length)}};function Yo(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),a=Math.trunc(n/60),s=n%60;return s===0?r+String(a):r+String(a)+t+Ee(s,2)}function $o(e,t){return e%60===0?(e>0?"-":"+")+Ee(Math.abs(e)/60,2):Tr(e,t)}function Tr(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),a=Ee(Math.trunc(n/60),2),s=Ee(n%60,2);return r+a+t+s}const Wo=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Rg=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Mb=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[],n=r[1],a=r[2];if(!a)return Wo(e,t);let s;switch(n){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",Wo(n,t)).replace("{{time}}",Rg(a,t))},ei={p:Rg,P:Mb},Kb=/^D+$/,Fb=/^Y+$/,qb=["D","DD","YY","YYYY"];function Ng(e){return Kb.test(e)}function Ig(e){return Fb.test(e)}function ni(e,t,r){const n=Vb(e,t,r);if(console.warn(n),qb.includes(e))throw new RangeError(n)}function Vb(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const xb=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Gb=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Bb=/^'([^]*?)'?$/,Ub=/''/g,Hb=/[a-zA-Z]/;function Lr(e,t,r){var d,g,m,v,p,c,b,T;const n=jr(),a=(r==null?void 0:r.locale)??n.locale??Wa,s=(r==null?void 0:r.firstWeekContainsDate)??((g=(d=r==null?void 0:r.locale)==null?void 0:d.options)==null?void 0:g.firstWeekContainsDate)??n.firstWeekContainsDate??((v=(m=n.locale)==null?void 0:m.options)==null?void 0:v.firstWeekContainsDate)??1,i=(r==null?void 0:r.weekStartsOn)??((c=(p=r==null?void 0:r.locale)==null?void 0:p.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((T=(b=n.locale)==null?void 0:b.options)==null?void 0:T.weekStartsOn)??0,o=oe(e,r==null?void 0:r.in);if(!Sb(o))throw new RangeError("Invalid time value");let l=t.match(Gb).map(f=>{const h=f[0];if(h==="p"||h==="P"){const R=ei[h];return R(f,a.formatLong)}return f}).join("").match(xb).map(f=>{if(f==="''")return{isToken:!1,value:"'"};const h=f[0];if(h==="'")return{isToken:!1,value:Cb(f)};if(Co[h])return{isToken:!0,value:f};if(h.match(Hb))throw new RangeError("Format string contains an unescaped latin alphabet character `"+h+"`");return{isToken:!1,value:f}});a.localize.preprocessor&&(l=a.localize.preprocessor(o,l));const u={firstWeekContainsDate:s,weekStartsOn:i,locale:a};return l.map(f=>{if(!f.isToken)return f.value;const h=f.value;(!(r!=null&&r.useAdditionalWeekYearTokens)&&Ig(h)||!(r!=null&&r.useAdditionalDayOfYearTokens)&&Ng(h))&&ni(h,t,String(e));const R=Co[h[0]];return R(o,h,a.localize,u)}).join("")}function Cb(e){const t=e.match(Bb);return t?t[1].replace(Ub,"'"):e}function Yb(e,t){const r=oe(e,t==null?void 0:t.in),n=r.getFullYear(),a=r.getMonth(),s=pe(r,0);return s.setFullYear(n,a+1,0),s.setHours(0,0,0,0),s.getDate()}function $b(){return Object.assign({},jr())}function Wb(e,t){const r=oe(e,t==null?void 0:t.in).getDay();return r===0?7:r}function Pi(e,t){return oe(e,t==null?void 0:t.in).getMonth()}function Li(e,t){return oe(e,t==null?void 0:t.in).getFullYear()}function _g(e,t){return+oe(e)>+oe(t)}function Vt(e,t){return+oe(e)<+oe(t)}function zb(e,t){const r=Jb(t)?new t(0):pe(t,0);return r.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),r.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),r}function Jb(e){var t;return typeof e=="function"&&((t=e.prototype)==null?void 0:t.constructor)===e}const Xb=10;class Og{constructor(){$(this,"subPriority",0)}validate(t,r){return!0}}class Zb extends Og{constructor(t,r,n,a,s){super(),this.value=t,this.validateValue=r,this.setValue=n,this.priority=a,s&&(this.subPriority=s)}validate(t,r){return this.validateValue(t,this.value,r)}set(t,r,n){return this.setValue(t,r,this.value,n)}}class Qb extends Og{constructor(r,n){super();$(this,"priority",Xb);$(this,"subPriority",-1);this.context=r||(a=>pe(n,a))}set(r,n){return n.timestampIsSet?r:pe(r,zb(r,this.context))}}class ke{run(t,r,n,a){const s=this.parse(t,r,n,a);return s?{setter:new Zb(s.value,this.validate,this.set,this.priority,this.subPriority),rest:s.rest}:null}validate(t,r,n){return!0}}class eh extends ke{constructor(){super(...arguments);$(this,"priority",140);$(this,"incompatibleTokens",["R","u","t","T"])}parse(r,n,a){switch(n){case"G":case"GG":case"GGG":return a.era(r,{width:"abbreviated"})||a.era(r,{width:"narrow"});case"GGGGG":return a.era(r,{width:"narrow"});case"GGGG":default:return a.era(r,{width:"wide"})||a.era(r,{width:"abbreviated"})||a.era(r,{width:"narrow"})}}set(r,n,a){return n.era=a,r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}}const qe={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Mn={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Ve(e,t){return e&&{value:t(e.value),rest:e.rest}}function we(e,t){const r=t.match(e);return r?{value:parseInt(r[0],10),rest:t.slice(r[0].length)}:null}function Kn(e,t){const r=t.match(e);if(!r)return null;if(r[0]==="Z")return{value:0,rest:t.slice(1)};const n=r[1]==="+"?1:-1,a=r[2]?parseInt(r[2],10):0,s=r[3]?parseInt(r[3],10):0,i=r[5]?parseInt(r[5],10):0;return{value:n*(a*FE+s*KE+i*qE),rest:t.slice(r[0].length)}}function Sg(e){return we(qe.anyDigitsSigned,e)}function Ke(e,t){switch(e){case 1:return we(qe.singleDigit,t);case 2:return we(qe.twoDigits,t);case 3:return we(qe.threeDigits,t);case 4:return we(qe.fourDigits,t);default:return we(new RegExp("^\\d{1,"+e+"}"),t)}}function Ma(e,t){switch(e){case 1:return we(qe.singleDigitSigned,t);case 2:return we(qe.twoDigitsSigned,t);case 3:return we(qe.threeDigitsSigned,t);case 4:return we(qe.fourDigitsSigned,t);default:return we(new RegExp("^-?\\d{1,"+e+"}"),t)}}function wi(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Dg(e,t){const r=t>0,n=r?t:1-t;let a;if(n<=50)a=e||100;else{const s=n+50,i=Math.trunc(s/100)*100,o=e>=s%100;a=e+i-(o?100:0)}return r?a:1-a}function Pg(e){return e%400===0||e%4===0&&e%100!==0}class nh extends ke{constructor(){super(...arguments);$(this,"priority",130);$(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(r,n,a){const s=i=>({year:i,isTwoDigitYear:n==="yy"});switch(n){case"y":return Ve(Ke(4,r),s);case"yo":return Ve(a.ordinalNumber(r,{unit:"year"}),s);default:return Ve(Ke(n.length,r),s)}}validate(r,n){return n.isTwoDigitYear||n.year>0}set(r,n,a){const s=r.getFullYear();if(a.isTwoDigitYear){const o=Dg(a.year,s);return r.setFullYear(o,0,1),r.setHours(0,0,0,0),r}const i=!("era"in n)||n.era===1?a.year:1-a.year;return r.setFullYear(i,0,1),r.setHours(0,0,0,0),r}}class rh extends ke{constructor(){super(...arguments);$(this,"priority",130);$(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(r,n,a){const s=i=>({year:i,isTwoDigitYear:n==="YY"});switch(n){case"Y":return Ve(Ke(4,r),s);case"Yo":return Ve(a.ordinalNumber(r,{unit:"year"}),s);default:return Ve(Ke(n.length,r),s)}}validate(r,n){return n.isTwoDigitYear||n.year>0}set(r,n,a,s){const i=Si(r,s);if(a.isTwoDigitYear){const l=Dg(a.year,i);return r.setFullYear(l,0,s.firstWeekContainsDate),r.setHours(0,0,0,0),Zn(r,s)}const o=!("era"in n)||n.era===1?a.year:1-a.year;return r.setFullYear(o,0,s.firstWeekContainsDate),r.setHours(0,0,0,0),Zn(r,s)}}class th extends ke{constructor(){super(...arguments);$(this,"priority",130);$(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(r,n){return Ma(n==="R"?4:n.length,r)}set(r,n,a){const s=pe(r,0);return s.setFullYear(a,0,4),s.setHours(0,0,0,0),Dr(s)}}class ah extends ke{constructor(){super(...arguments);$(this,"priority",130);$(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(r,n){return Ma(n==="u"?4:n.length,r)}set(r,n,a){return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}}class sh extends ke{constructor(){super(...arguments);$(this,"priority",120);$(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(r,n,a){switch(n){case"Q":case"QQ":return Ke(n.length,r);case"Qo":return a.ordinalNumber(r,{unit:"quarter"});case"QQQ":return a.quarter(r,{width:"abbreviated",context:"formatting"})||a.quarter(r,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(r,{width:"wide",context:"formatting"})||a.quarter(r,{width:"abbreviated",context:"formatting"})||a.quarter(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=1&&n<=4}set(r,n,a){return r.setMonth((a-1)*3,1),r.setHours(0,0,0,0),r}}class ih extends ke{constructor(){super(...arguments);$(this,"priority",120);$(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(r,n,a){switch(n){case"q":case"qq":return Ke(n.length,r);case"qo":return a.ordinalNumber(r,{unit:"quarter"});case"qqq":return a.quarter(r,{width:"abbreviated",context:"standalone"})||a.quarter(r,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(r,{width:"wide",context:"standalone"})||a.quarter(r,{width:"abbreviated",context:"standalone"})||a.quarter(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=1&&n<=4}set(r,n,a){return r.setMonth((a-1)*3,1),r.setHours(0,0,0,0),r}}class oh extends ke{constructor(){super(...arguments);$(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);$(this,"priority",110)}parse(r,n,a){const s=i=>i-1;switch(n){case"M":return Ve(we(qe.month,r),s);case"MM":return Ve(Ke(2,r),s);case"Mo":return Ve(a.ordinalNumber(r,{unit:"month"}),s);case"MMM":return a.month(r,{width:"abbreviated",context:"formatting"})||a.month(r,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(r,{width:"wide",context:"formatting"})||a.month(r,{width:"abbreviated",context:"formatting"})||a.month(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=11}set(r,n,a){return r.setMonth(a,1),r.setHours(0,0,0,0),r}}class lh extends ke{constructor(){super(...arguments);$(this,"priority",110);$(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(r,n,a){const s=i=>i-1;switch(n){case"L":return Ve(we(qe.month,r),s);case"LL":return Ve(Ke(2,r),s);case"Lo":return Ve(a.ordinalNumber(r,{unit:"month"}),s);case"LLL":return a.month(r,{width:"abbreviated",context:"standalone"})||a.month(r,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(r,{width:"wide",context:"standalone"})||a.month(r,{width:"abbreviated",context:"standalone"})||a.month(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=0&&n<=11}set(r,n,a){return r.setMonth(a,1),r.setHours(0,0,0,0),r}}function dh(e,t,r){const n=oe(e,r==null?void 0:r.in),a=Di(n,r)-t;return n.setDate(n.getDate()-a*7),oe(n,r==null?void 0:r.in)}class uh extends ke{constructor(){super(...arguments);$(this,"priority",100);$(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(r,n,a){switch(n){case"w":return we(qe.week,r);case"wo":return a.ordinalNumber(r,{unit:"week"});default:return Ke(n.length,r)}}validate(r,n){return n>=1&&n<=53}set(r,n,a,s){return Zn(dh(r,a,s),s)}}function gh(e,t,r){const n=oe(e,r==null?void 0:r.in),a=Oi(n,r)-t;return n.setDate(n.getDate()-a*7),n}class mh extends ke{constructor(){super(...arguments);$(this,"priority",100);$(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(r,n,a){switch(n){case"I":return we(qe.week,r);case"Io":return a.ordinalNumber(r,{unit:"week"});default:return Ke(n.length,r)}}validate(r,n){return n>=1&&n<=53}set(r,n,a){return Dr(gh(r,a))}}const kh=[31,28,31,30,31,30,31,31,30,31,30,31],fh=[31,29,31,30,31,30,31,31,30,31,30,31];class vh extends ke{constructor(){super(...arguments);$(this,"priority",90);$(this,"subPriority",1);$(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(r,n,a){switch(n){case"d":return we(qe.date,r);case"do":return a.ordinalNumber(r,{unit:"date"});default:return Ke(n.length,r)}}validate(r,n){const a=r.getFullYear(),s=Pg(a),i=r.getMonth();return s?n>=1&&n<=fh[i]:n>=1&&n<=kh[i]}set(r,n,a){return r.setDate(a),r.setHours(0,0,0,0),r}}class ch extends ke{constructor(){super(...arguments);$(this,"priority",90);$(this,"subpriority",1);$(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(r,n,a){switch(n){case"D":case"DD":return we(qe.dayOfYear,r);case"Do":return a.ordinalNumber(r,{unit:"date"});default:return Ke(n.length,r)}}validate(r,n){const a=r.getFullYear();return Pg(a)?n>=1&&n<=366:n>=1&&n<=365}set(r,n,a){return r.setMonth(0,a),r.setHours(0,0,0,0),r}}function ji(e,t,r){var g,m,v,p;const n=jr(),a=(r==null?void 0:r.weekStartsOn)??((m=(g=r==null?void 0:r.locale)==null?void 0:g.options)==null?void 0:m.weekStartsOn)??n.weekStartsOn??((p=(v=n.locale)==null?void 0:v.options)==null?void 0:p.weekStartsOn)??0,s=oe(e,r==null?void 0:r.in),i=s.getDay(),l=(t%7+7)%7,u=7-a,d=t<0||t>6?t-(i+u)%7:(l+u)%7-(i+u)%7;return Ft(s,d,r)}class Eh extends ke{constructor(){super(...arguments);$(this,"priority",90);$(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(r,n,a){switch(n){case"E":case"EE":case"EEE":return a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(r,{width:"wide",context:"formatting"})||a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=6}set(r,n,a,s){return r=ji(r,a,s),r.setHours(0,0,0,0),r}}class ph extends ke{constructor(){super(...arguments);$(this,"priority",90);$(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(r,n,a,s){const i=o=>{const l=Math.floor((o-1)/7)*7;return(o+s.weekStartsOn+6)%7+l};switch(n){case"e":case"ee":return Ve(Ke(n.length,r),i);case"eo":return Ve(a.ordinalNumber(r,{unit:"day"}),i);case"eee":return a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"eeeee":return a.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(r,{width:"wide",context:"formatting"})||a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=6}set(r,n,a,s){return r=ji(r,a,s),r.setHours(0,0,0,0),r}}class yh extends ke{constructor(){super(...arguments);$(this,"priority",90);$(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(r,n,a,s){const i=o=>{const l=Math.floor((o-1)/7)*7;return(o+s.weekStartsOn+6)%7+l};switch(n){case"c":case"cc":return Ve(Ke(n.length,r),i);case"co":return Ve(a.ordinalNumber(r,{unit:"day"}),i);case"ccc":return a.day(r,{width:"abbreviated",context:"standalone"})||a.day(r,{width:"short",context:"standalone"})||a.day(r,{width:"narrow",context:"standalone"});case"ccccc":return a.day(r,{width:"narrow",context:"standalone"});case"cccccc":return a.day(r,{width:"short",context:"standalone"})||a.day(r,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(r,{width:"wide",context:"standalone"})||a.day(r,{width:"abbreviated",context:"standalone"})||a.day(r,{width:"short",context:"standalone"})||a.day(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=0&&n<=6}set(r,n,a,s){return r=ji(r,a,s),r.setHours(0,0,0,0),r}}function bh(e,t,r){const n=oe(e,r==null?void 0:r.in),a=Wb(n,r),s=t-a;return Ft(n,s,r)}class hh extends ke{constructor(){super(...arguments);$(this,"priority",90);$(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(r,n,a){const s=i=>i===0?7:i;switch(n){case"i":case"ii":return Ke(n.length,r);case"io":return a.ordinalNumber(r,{unit:"day"});case"iii":return Ve(a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"}),s);case"iiiii":return Ve(a.day(r,{width:"narrow",context:"formatting"}),s);case"iiiiii":return Ve(a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"}),s);case"iiii":default:return Ve(a.day(r,{width:"wide",context:"formatting"})||a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"}),s)}}validate(r,n){return n>=1&&n<=7}set(r,n,a){return r=bh(r,a),r.setHours(0,0,0,0),r}}class Ah extends ke{constructor(){super(...arguments);$(this,"priority",80);$(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(r,n,a){switch(n){case"a":case"aa":case"aaa":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})||a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,a){return r.setHours(wi(a),0,0,0),r}}class Th extends ke{constructor(){super(...arguments);$(this,"priority",80);$(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(r,n,a){switch(n){case"b":case"bb":case"bbb":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})||a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,a){return r.setHours(wi(a),0,0,0),r}}class Rh extends ke{constructor(){super(...arguments);$(this,"priority",80);$(this,"incompatibleTokens",["a","b","t","T"])}parse(r,n,a){switch(n){case"B":case"BB":case"BBB":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})||a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,a){return r.setHours(wi(a),0,0,0),r}}class Nh extends ke{constructor(){super(...arguments);$(this,"priority",70);$(this,"incompatibleTokens",["H","K","k","t","T"])}parse(r,n,a){switch(n){case"h":return we(qe.hour12h,r);case"ho":return a.ordinalNumber(r,{unit:"hour"});default:return Ke(n.length,r)}}validate(r,n){return n>=1&&n<=12}set(r,n,a){const s=r.getHours()>=12;return s&&a<12?r.setHours(a+12,0,0,0):!s&&a===12?r.setHours(0,0,0,0):r.setHours(a,0,0,0),r}}class Ih extends ke{constructor(){super(...arguments);$(this,"priority",70);$(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(r,n,a){switch(n){case"H":return we(qe.hour23h,r);case"Ho":return a.ordinalNumber(r,{unit:"hour"});default:return Ke(n.length,r)}}validate(r,n){return n>=0&&n<=23}set(r,n,a){return r.setHours(a,0,0,0),r}}class _h extends ke{constructor(){super(...arguments);$(this,"priority",70);$(this,"incompatibleTokens",["h","H","k","t","T"])}parse(r,n,a){switch(n){case"K":return we(qe.hour11h,r);case"Ko":return a.ordinalNumber(r,{unit:"hour"});default:return Ke(n.length,r)}}validate(r,n){return n>=0&&n<=11}set(r,n,a){return r.getHours()>=12&&a<12?r.setHours(a+12,0,0,0):r.setHours(a,0,0,0),r}}class Oh extends ke{constructor(){super(...arguments);$(this,"priority",70);$(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(r,n,a){switch(n){case"k":return we(qe.hour24h,r);case"ko":return a.ordinalNumber(r,{unit:"hour"});default:return Ke(n.length,r)}}validate(r,n){return n>=1&&n<=24}set(r,n,a){const s=a<=24?a%24:a;return r.setHours(s,0,0,0),r}}class Sh extends ke{constructor(){super(...arguments);$(this,"priority",60);$(this,"incompatibleTokens",["t","T"])}parse(r,n,a){switch(n){case"m":return we(qe.minute,r);case"mo":return a.ordinalNumber(r,{unit:"minute"});default:return Ke(n.length,r)}}validate(r,n){return n>=0&&n<=59}set(r,n,a){return r.setMinutes(a,0,0),r}}class Dh extends ke{constructor(){super(...arguments);$(this,"priority",50);$(this,"incompatibleTokens",["t","T"])}parse(r,n,a){switch(n){case"s":return we(qe.second,r);case"so":return a.ordinalNumber(r,{unit:"second"});default:return Ke(n.length,r)}}validate(r,n){return n>=0&&n<=59}set(r,n,a){return r.setSeconds(a,0),r}}class Ph extends ke{constructor(){super(...arguments);$(this,"priority",30);$(this,"incompatibleTokens",["t","T"])}parse(r,n){const a=s=>Math.trunc(s*Math.pow(10,-n.length+3));return Ve(Ke(n.length,r),a)}set(r,n,a){return r.setMilliseconds(a),r}}class Lh extends ke{constructor(){super(...arguments);$(this,"priority",10);$(this,"incompatibleTokens",["t","T","x"])}parse(r,n){switch(n){case"X":return Kn(Mn.basicOptionalMinutes,r);case"XX":return Kn(Mn.basic,r);case"XXXX":return Kn(Mn.basicOptionalSeconds,r);case"XXXXX":return Kn(Mn.extendedOptionalSeconds,r);case"XXX":default:return Kn(Mn.extended,r)}}set(r,n,a){return n.timestampIsSet?r:pe(r,r.getTime()-ja(r)-a)}}class wh extends ke{constructor(){super(...arguments);$(this,"priority",10);$(this,"incompatibleTokens",["t","T","X"])}parse(r,n){switch(n){case"x":return Kn(Mn.basicOptionalMinutes,r);case"xx":return Kn(Mn.basic,r);case"xxxx":return Kn(Mn.basicOptionalSeconds,r);case"xxxxx":return Kn(Mn.extendedOptionalSeconds,r);case"xxx":default:return Kn(Mn.extended,r)}}set(r,n,a){return n.timestampIsSet?r:pe(r,r.getTime()-ja(r)-a)}}class jh extends ke{constructor(){super(...arguments);$(this,"priority",40);$(this,"incompatibleTokens","*")}parse(r){return Sg(r)}set(r,n,a){return[pe(r,a*1e3),{timestampIsSet:!0}]}}class Mh extends ke{constructor(){super(...arguments);$(this,"priority",20);$(this,"incompatibleTokens","*")}parse(r){return Sg(r)}set(r,n,a){return[pe(r,a),{timestampIsSet:!0}]}}const Kh={G:new eh,y:new nh,Y:new rh,R:new th,u:new ah,Q:new sh,q:new ih,M:new oh,L:new lh,w:new uh,I:new mh,d:new vh,D:new ch,E:new Eh,e:new ph,c:new yh,i:new hh,a:new Ah,b:new Th,B:new Rh,h:new Nh,H:new Ih,K:new _h,k:new Oh,m:new Sh,s:new Dh,S:new Ph,X:new Lh,x:new wh,t:new jh,T:new Mh},Fh=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,qh=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Vh=/^'([^]*?)'?$/,xh=/''/g,Gh=/\S/,Bh=/[a-zA-Z]/;function Hr(e,t,r,n){var b,T,f,h,R,A,O,I;const a=()=>pe((n==null?void 0:n.in)||r,NaN),s=$b(),i=(n==null?void 0:n.locale)??s.locale??Wa,o=(n==null?void 0:n.firstWeekContainsDate)??((T=(b=n==null?void 0:n.locale)==null?void 0:b.options)==null?void 0:T.firstWeekContainsDate)??s.firstWeekContainsDate??((h=(f=s.locale)==null?void 0:f.options)==null?void 0:h.firstWeekContainsDate)??1,l=(n==null?void 0:n.weekStartsOn)??((A=(R=n==null?void 0:n.locale)==null?void 0:R.options)==null?void 0:A.weekStartsOn)??s.weekStartsOn??((I=(O=s.locale)==null?void 0:O.options)==null?void 0:I.weekStartsOn)??0;if(!t)return e?a():oe(r,n==null?void 0:n.in);const u={firstWeekContainsDate:o,weekStartsOn:l,locale:i},d=[new Qb(n==null?void 0:n.in,r)],g=t.match(qh).map(S=>{const P=S[0];if(P in ei){const M=ei[P];return M(S,i.formatLong)}return S}).join("").match(Fh),m=[];for(let S of g){!(n!=null&&n.useAdditionalWeekYearTokens)&&Ig(S)&&ni(S,t,e),!(n!=null&&n.useAdditionalDayOfYearTokens)&&Ng(S)&&ni(S,t,e);const P=S[0],M=Kh[P];if(M){const{incompatibleTokens:j}=M;if(Array.isArray(j)){const N=m.find(D=>j.includes(D.token)||D.token===P);if(N)throw new RangeError(`The format string mustn't contain \`${N.fullToken}\` and \`${S}\` at the same time`)}else if(M.incompatibleTokens==="*"&&m.length>0)throw new RangeError(`The format string mustn't contain \`${S}\` and any other token at the same time`);m.push({token:P,fullToken:S});const L=M.run(e,S,i.match,u);if(!L)return a();d.push(L.setter),e=L.rest}else{if(P.match(Bh))throw new RangeError("Format string contains an unescaped latin alphabet character `"+P+"`");if(S==="''"?S="'":P==="'"&&(S=Uh(S)),e.indexOf(S)===0)e=e.slice(S.length);else return a()}}if(e.length>0&&Gh.test(e))return a();const v=d.map(S=>S.priority).sort((S,P)=>P-S).filter((S,P,M)=>M.indexOf(S)===P).map(S=>d.filter(P=>P.priority===S).sort((P,M)=>M.subPriority-P.subPriority)).map(S=>S[0]);let p=oe(r,n==null?void 0:n.in);if(isNaN(+p))return a();const c={};for(const S of v){if(!S.validate(p,u))return a();const P=S.set(p,c,u);Array.isArray(P)?(p=P[0],Object.assign(c,P[1])):p=P}return p}function Uh(e){return e.match(Vh)[1].replace(xh,"'")}function Hh(e,t,r){const[n,a]=at(r==null?void 0:r.in,e,t);return n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()}function Lg(e,t,r){const[n,a]=at(r==null?void 0:r.in,e,t);return n.getFullYear()===a.getFullYear()}function Ch(e,t,r){return Ft(e,-t,r)}function wg(e,t,r){const n=oe(e,r==null?void 0:r.in),a=n.getFullYear(),s=n.getDate(),i=pe(e,0);i.setFullYear(a,t,15),i.setHours(0,0,0,0);const o=Yb(i);return n.setMonth(t,Math.min(s,o)),n}function jg(e,t,r){const n=oe(e,r==null?void 0:r.in);return isNaN(+n)?pe(e,NaN):(n.setFullYear(t),n)}function Yh(e,t,r){return Ni(e,-t,r)}function $h(e,t,r){const{years:n=0,months:a=0,weeks:s=0,days:i=0,hours:o=0,minutes:l=0,seconds:u=0}=t,d=Yh(e,a+n*12,r),g=Ch(d,i+s*7,r),m=l+o*60,p=(u+m*60)*1e3;return pe(e,+g-p)}function Mg(e){return Kg(e)?(e.nodeName||"").toLowerCase():"#document"}function xt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Wh(e){var t;return(t=(Kg(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Kg(e){return e instanceof Node||e instanceof xt(e).Node}function tn(e){return e instanceof Element||e instanceof xt(e).Element}function Fg(e){return e instanceof HTMLElement||e instanceof xt(e).HTMLElement}function ri(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof xt(e).ShadowRoot}function zh(e){return["html","body","#document"].includes(Mg(e))}function Jh(e){return xt(e).getComputedStyle(e)}function Xh(e){if(Mg(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ri(e)&&e.host||Wh(e);return ri(t)?t.host:t}function Zh(e){let t=e.activeElement;for(;((r=t)==null||(n=r.shadowRoot)==null?void 0:n.activeElement)!=null;){var r,n;t=t.shadowRoot.activeElement}return t}function ur(e,t){if(!e||!t)return!1;const r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&ri(r)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Qh(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function eA(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:r,version:n}=t;return r+"/"+n}).join(" "):navigator.userAgent}function nA(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const t=/Android/i;return(t.test(Qh())||t.test(eA()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function rA(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function qg(e,t){const r=["mouse","pen"];return r.push("",void 0),r.includes(e)}function tA(e){return"nativeEvent"in e}function aA(e){return e.matches("html,body")}function Jn(e){return(e==null?void 0:e.ownerDocument)||document}function Ra(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const r=e;return r.target!=null&&t.contains(r.target)}function Vg(e){return"composedPath"in e?e.composedPath()[0]:e.target}var wr=typeof document<"u"?k.useLayoutEffect:k.useEffect;let As=!1,sA=0;const zo=()=>"floating-ui-"+sA++;function iA(){const[e,t]=k.useState(()=>As?zo():void 0);return wr(()=>{e==null&&t(zo())},[]),k.useEffect(()=>{As||(As=!0)},[]),e}const oA=eu.useId,xg=oA||iA;function lA(){const e=new Map;return{emit(t,r){var n;(n=e.get(t))==null||n.forEach(a=>a(r))},on(t,r){e.set(t,[...e.get(t)||[],r])},off(t,r){var n;e.set(t,((n=e.get(t))==null?void 0:n.filter(a=>a!==r))||[])}}}const dA=k.createContext(null),uA=k.createContext(null),Gg=()=>{var e;return((e=k.useContext(dA))==null?void 0:e.id)||null},Mi=()=>k.useContext(uA);function es(e){return"data-floating-ui-"+e}function Jo(e){const t=k.useRef(e);return wr(()=>{t.current=e}),t}const Xo=es("safe-polygon");function Ts(e,t,r){return r&&!qg(r)?0:typeof e=="number"?e:e==null?void 0:e[t]}function gA(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,dataRef:a,events:s,elements:{domReference:i,floating:o},refs:l}=e,{enabled:u=!0,delay:d=0,handleClose:g=null,mouseOnly:m=!1,restMs:v=0,move:p=!0}=t,c=Mi(),b=Gg(),T=Jo(g),f=Jo(d),h=k.useRef(),R=k.useRef(),A=k.useRef(),O=k.useRef(),I=k.useRef(!0),S=k.useRef(!1),P=k.useRef(()=>{}),M=k.useCallback(()=>{var D;const F=(D=a.current.openEvent)==null?void 0:D.type;return(F==null?void 0:F.includes("mouse"))&&F!=="mousedown"},[a]);k.useEffect(()=>{if(!u)return;function D(){clearTimeout(R.current),clearTimeout(O.current),I.current=!0}return s.on("dismiss",D),()=>{s.off("dismiss",D)}},[u,s]),k.useEffect(()=>{if(!u||!T.current||!r)return;function D(q){M()&&n(!1,q)}const F=Jn(o).documentElement;return F.addEventListener("mouseleave",D),()=>{F.removeEventListener("mouseleave",D)}},[o,r,n,u,T,a,M]);const j=k.useCallback(function(D,F){F===void 0&&(F=!0);const q=Ts(f.current,"close",h.current);q&&!A.current?(clearTimeout(R.current),R.current=setTimeout(()=>n(!1,D),q)):F&&(clearTimeout(R.current),n(!1,D))},[f,n]),L=k.useCallback(()=>{P.current(),A.current=void 0},[]),N=k.useCallback(()=>{if(S.current){const D=Jn(l.floating.current).body;D.style.pointerEvents="",D.removeAttribute(Xo),S.current=!1}},[l]);return k.useEffect(()=>{if(!u)return;function D(){return a.current.openEvent?["click","mousedown"].includes(a.current.openEvent.type):!1}function F(V){if(clearTimeout(R.current),I.current=!1,m&&!qg(h.current)||v>0&&Ts(f.current,"open")===0)return;const B=Ts(f.current,"open",h.current);B?R.current=setTimeout(()=>{n(!0,V)},B):n(!0,V)}function q(V){if(D())return;P.current();const B=Jn(o);if(clearTimeout(O.current),T.current){r||clearTimeout(R.current),A.current=T.current({...e,tree:c,x:V.clientX,y:V.clientY,onClose(){N(),L(),j(V)}});const Q=A.current;B.addEventListener("mousemove",Q),P.current=()=>{B.removeEventListener("mousemove",Q)};return}(h.current==="touch"?!ur(o,V.relatedTarget):!0)&&j(V)}function U(V){D()||T.current==null||T.current({...e,tree:c,x:V.clientX,y:V.clientY,onClose(){N(),L(),j(V)}})(V)}if(tn(i)){const V=i;return r&&V.addEventListener("mouseleave",U),o==null||o.addEventListener("mouseleave",U),p&&V.addEventListener("mousemove",F,{once:!0}),V.addEventListener("mouseenter",F),V.addEventListener("mouseleave",q),()=>{r&&V.removeEventListener("mouseleave",U),o==null||o.removeEventListener("mouseleave",U),p&&V.removeEventListener("mousemove",F),V.removeEventListener("mouseenter",F),V.removeEventListener("mouseleave",q)}}},[i,o,u,e,m,v,p,j,L,N,n,r,c,f,T,a]),wr(()=>{var D;if(u&&r&&(D=T.current)!=null&&D.__options.blockPointerEvents&&M()){const U=Jn(o).body;if(U.setAttribute(Xo,""),U.style.pointerEvents="none",S.current=!0,tn(i)&&o){var F,q;const V=i,B=c==null||(F=c.nodesRef.current.find(X=>X.id===b))==null||(q=F.context)==null?void 0:q.elements.floating;return B&&(B.style.pointerEvents=""),V.style.pointerEvents="auto",o.style.pointerEvents="auto",()=>{V.style.pointerEvents="",o.style.pointerEvents=""}}}},[u,r,b,o,i,c,T,a,M]),wr(()=>{r||(h.current=void 0,L(),N())},[r,L,N]),k.useEffect(()=>()=>{L(),clearTimeout(R.current),clearTimeout(O.current),N()},[u,i,L,N]),k.useMemo(()=>{if(!u)return{};function D(F){h.current=F.pointerType}return{reference:{onPointerDown:D,onPointerEnter:D,onMouseMove(F){r||v===0||(clearTimeout(O.current),O.current=setTimeout(()=>{I.current||n(!0,F.nativeEvent)},v))}},floating:{onMouseEnter(){clearTimeout(R.current)},onMouseLeave(F){s.emit("dismiss",{type:"mouseLeave",data:{returnFocus:!1}}),j(F.nativeEvent,!1)}}}},[s,u,v,r,n,j])}function Na(e,t){let r=e.filter(a=>{var s;return a.parentId===t&&((s=a.context)==null?void 0:s.open)}),n=r;for(;n.length;)n=e.filter(a=>{var s;return(s=n)==null?void 0:s.some(i=>{var o;return a.parentId===i.id&&((o=a.context)==null?void 0:o.open)})}),r=r.concat(n);return r}const mA=k.createContext(null);function kA(e){let{id:t,root:r}=e===void 0?{}:e;const[n,a]=k.useState(null),s=xg(),i=fA(),o=k.useMemo(()=>({id:t,root:r,portalContext:i,uniqueId:s}),[t,r,i,s]),l=k.useRef();return wr(()=>()=>{n==null||n.remove()},[n,o]),wr(()=>{if(l.current===o)return;l.current=o;const{id:u,root:d,portalContext:g,uniqueId:m}=o,v=u?document.getElementById(u):null,p=es("portal");if(v){const c=document.createElement("div");c.id=m,c.setAttribute(p,""),v.appendChild(c),a(c)}else{let c=d||(g==null?void 0:g.portalNode);c&&!tn(c)&&(c=c.current),c=c||document.body;let b=null;u&&(b=document.createElement("div"),b.id=u,c.appendChild(b));const T=document.createElement("div");T.id=m,T.setAttribute(p,""),c=b||c,c.appendChild(T),a(T)}},[o]),n}const fA=()=>k.useContext(mA),vA=eu.useInsertionEffect,cA=vA||(e=>e());function Ia(e){const t=k.useRef(()=>{});return cA(()=>{t.current=e}),k.useCallback(function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.current==null?void 0:t.current(...n)},[])}const EA={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},pA={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},yA=e=>{var t,r;return{escapeKeyBubbles:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePressBubbles:typeof e=="boolean"?e:(r=e==null?void 0:e.outsidePress)!=null?r:!0}};function bA(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,events:a,nodeId:s,elements:{reference:i,domReference:o,floating:l},dataRef:u}=e,{enabled:d=!0,escapeKey:g=!0,outsidePress:m=!0,outsidePressEvent:v="pointerdown",referencePress:p=!1,referencePressEvent:c="pointerdown",ancestorScroll:b=!1,bubbles:T}=t,f=Mi(),h=Gg()!=null,R=Ia(typeof m=="function"?m:()=>!1),A=typeof m=="function"?R:m,O=k.useRef(!1),{escapeKeyBubbles:I,outsidePressBubbles:S}=yA(T),P=Ia(j=>{if(!r||!d||!g||j.key!=="Escape")return;const L=f?Na(f.nodesRef.current,s):[];if(!I&&(j.stopPropagation(),L.length>0)){let N=!0;if(L.forEach(D=>{var F;if((F=D.context)!=null&&F.open&&!D.context.dataRef.current.__escapeKeyBubbles){N=!1;return}}),!N)return}a.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),n(!1,tA(j)?j.nativeEvent:j)}),M=Ia(j=>{const L=O.current;if(O.current=!1,L||typeof A=="function"&&!A(j))return;const N=Vg(j),D="["+es("inert")+"]",F=Jn(l).querySelectorAll(D);let q=tn(N)?N:null;for(;q&&!zh(q);){const B=Xh(q);if(B===Jn(l).body||!tn(B))break;q=B}if(F.length&&tn(N)&&!aA(N)&&!ur(N,l)&&Array.from(F).every(B=>!ur(q,B)))return;if(Fg(N)&&l){const B=N.clientWidth>0&&N.scrollWidth>N.clientWidth,X=N.clientHeight>0&&N.scrollHeight>N.clientHeight;let Q=X&&j.offsetX>N.clientWidth;if(X&&Jh(N).direction==="rtl"&&(Q=j.offsetX<=N.offsetWidth-N.clientWidth),Q||B&&j.offsetY>N.clientHeight)return}const U=f&&Na(f.nodesRef.current,s).some(B=>{var X;return Ra(j,(X=B.context)==null?void 0:X.elements.floating)});if(Ra(j,l)||Ra(j,o)||U)return;const V=f?Na(f.nodesRef.current,s):[];if(V.length>0){let B=!0;if(V.forEach(X=>{var Q;if((Q=X.context)!=null&&Q.open&&!X.context.dataRef.current.__outsidePressBubbles){B=!1;return}}),!B)return}a.emit("dismiss",{type:"outsidePress",data:{returnFocus:h?{preventScroll:!0}:nA(j)||rA(j)}}),n(!1,j)});return k.useEffect(()=>{if(!r||!d)return;u.current.__escapeKeyBubbles=I,u.current.__outsidePressBubbles=S;function j(D){n(!1,D)}const L=Jn(l);g&&L.addEventListener("keydown",P),A&&L.addEventListener(v,M);let N=[];return b&&(tn(o)&&(N=dr(o)),tn(l)&&(N=N.concat(dr(l))),!tn(i)&&i&&i.contextElement&&(N=N.concat(dr(i.contextElement)))),N=N.filter(D=>{var F;return D!==((F=L.defaultView)==null?void 0:F.visualViewport)}),N.forEach(D=>{D.addEventListener("scroll",j,{passive:!0})}),()=>{g&&L.removeEventListener("keydown",P),A&&L.removeEventListener(v,M),N.forEach(D=>{D.removeEventListener("scroll",j)})}},[u,l,o,i,g,A,v,r,n,b,d,I,S,P,M]),k.useEffect(()=>{O.current=!1},[A,v]),k.useMemo(()=>d?{reference:{onKeyDown:P,[EA[c]]:j=>{p&&(a.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),n(!1,j.nativeEvent))}},floating:{onKeyDown:P,[pA[v]]:()=>{O.current=!0}}}:{},[d,a,p,v,c,n,P])}function Bg(e){var t;e===void 0&&(e={});const{open:r=!1,onOpenChange:n,nodeId:a}=e,[s,i]=k.useState(null),o=((t=e.elements)==null?void 0:t.reference)||s,l=vb(e),u=Mi(),d=Ia((R,A)=>{R&&(m.current.openEvent=A),n==null||n(R,A)}),g=k.useRef(null),m=k.useRef({}),v=k.useState(()=>lA())[0],p=xg(),c=k.useCallback(R=>{const A=tn(R)?{getBoundingClientRect:()=>R.getBoundingClientRect(),contextElement:R}:R;l.refs.setReference(A)},[l.refs]),b=k.useCallback(R=>{(tn(R)||R===null)&&(g.current=R,i(R)),(tn(l.refs.reference.current)||l.refs.reference.current===null||R!==null&&!tn(R))&&l.refs.setReference(R)},[l.refs]),T=k.useMemo(()=>({...l.refs,setReference:b,setPositionReference:c,domReference:g}),[l.refs,b,c]),f=k.useMemo(()=>({...l.elements,domReference:o}),[l.elements,o]),h=k.useMemo(()=>({...l,refs:T,elements:f,dataRef:m,nodeId:a,floatingId:p,events:v,open:r,onOpenChange:d}),[l,a,p,v,r,d,T,f]);return wr(()=>{const R=u==null?void 0:u.nodesRef.current.find(A=>A.id===a);R&&(R.context=h)}),k.useMemo(()=>({...l,context:h,refs:T,elements:f}),[l,T,f,h])}function hA(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,dataRef:a,events:s,refs:i,elements:{floating:o,domReference:l}}=e,{enabled:u=!0,keyboardOnly:d=!0}=t,g=k.useRef(""),m=k.useRef(!1),v=k.useRef();return k.useEffect(()=>{if(!u)return;const c=Jn(o).defaultView||window;function b(){!r&&Fg(l)&&l===Zh(Jn(l))&&(m.current=!0)}return c.addEventListener("blur",b),()=>{c.removeEventListener("blur",b)}},[o,l,r,u]),k.useEffect(()=>{if(!u)return;function p(c){(c.type==="referencePress"||c.type==="escapeKey")&&(m.current=!0)}return s.on("dismiss",p),()=>{s.off("dismiss",p)}},[s,u]),k.useEffect(()=>()=>{clearTimeout(v.current)},[]),k.useMemo(()=>u?{reference:{onPointerDown(p){let{pointerType:c}=p;g.current=c,m.current=!!(c&&d)},onMouseLeave(){m.current=!1},onFocus(p){var c;m.current||p.type==="focus"&&((c=a.current.openEvent)==null?void 0:c.type)==="mousedown"&&Ra(a.current.openEvent,l)||n(!0,p.nativeEvent)},onBlur(p){m.current=!1;const c=p.relatedTarget,b=tn(c)&&c.hasAttribute(es("focus-guard"))&&c.getAttribute("data-type")==="outside";v.current=setTimeout(()=>{ur(i.floating.current,c)||ur(l,c)||b||n(!1,p.nativeEvent)})}}}:{},[u,d,l,i,a,n])}function Rs(e,t,r){const n=new Map;return{...r==="floating"&&{tabIndex:-1},...e,...t.map(a=>a?a[r]:null).concat(e).reduce((a,s)=>(s&&Object.entries(s).forEach(i=>{let[o,l]=i;if(o.indexOf("on")===0){if(n.has(o)||n.set(o,[]),typeof l=="function"){var u;(u=n.get(o))==null||u.push(l),a[o]=function(){for(var d,g=arguments.length,m=new Array(g),v=0;v<g;v++)m[v]=arguments[v];return(d=n.get(o))==null?void 0:d.map(p=>p(...m)).find(p=>p!==void 0)}}}else a[o]=l}),a),{})}}function AA(e){e===void 0&&(e=[]);const t=e,r=k.useCallback(s=>Rs(s,e,"reference"),t),n=k.useCallback(s=>Rs(s,e,"floating"),t),a=k.useCallback(s=>Rs(s,e,"item"),e.map(s=>s==null?void 0:s.item));return k.useMemo(()=>({getReferenceProps:r,getFloatingProps:n,getItemProps:a}),[r,n,a])}function Zo(e,t){const[r,n]=e;let a=!1;const s=t.length;for(let i=0,o=s-1;i<s;o=i++){const[l,u]=t[i]||[0,0],[d,g]=t[o]||[0,0];u>=n!=g>=n&&r<=(d-l)*(n-u)/(g-u)+l&&(a=!a)}return a}function TA(e,t){return e[0]>=t.x&&e[0]<=t.x+t.width&&e[1]>=t.y&&e[1]<=t.y+t.height}function RA(e){e===void 0&&(e={});const{buffer:t=.5,blockPointerEvents:r=!1,requireIntent:n=!0}=e;let a,s=!1,i=null,o=null,l=performance.now();function u(g,m){const v=performance.now(),p=v-l;if(i===null||o===null||p===0)return i=g,o=m,l=v,null;const c=g-i,b=m-o,f=Math.sqrt(c*c+b*b)/p;return i=g,o=m,l=v,f}const d=g=>{let{x:m,y:v,placement:p,elements:c,onClose:b,nodeId:T,tree:f}=g;return function(R){function A(){clearTimeout(a),b()}if(clearTimeout(a),!c.domReference||!c.floating||p==null||m==null||v==null)return;const{clientX:O,clientY:I}=R,S=[O,I],P=Vg(R),M=R.type==="mouseleave",j=ur(c.floating,P),L=ur(c.domReference,P),N=c.domReference.getBoundingClientRect(),D=c.floating.getBoundingClientRect(),F=p.split("-")[0],q=m>D.right-D.width/2,U=v>D.bottom-D.height/2,V=TA(S,N),B=D.width>N.width,X=D.height>N.height,Q=(B?N:D).left,Re=(B?N:D).right,_e=(X?N:D).top,un=(X?N:D).bottom;if(j&&(s=!0,!M))return;if(L&&(s=!1),L&&!M){s=!0;return}if(M&&tn(R.relatedTarget)&&ur(c.floating,R.relatedTarget)||f&&Na(f.nodesRef.current,T).some(ae=>{let{context:se}=ae;return se==null?void 0:se.open}))return;if(F==="top"&&v>=N.bottom-1||F==="bottom"&&v<=N.top+1||F==="left"&&m>=N.right-1||F==="right"&&m<=N.left+1)return A();let re=[];switch(F){case"top":re=[[Q,N.top+1],[Q,D.bottom-1],[Re,D.bottom-1],[Re,N.top+1]];break;case"bottom":re=[[Q,D.top+1],[Q,N.bottom-1],[Re,N.bottom-1],[Re,D.top+1]];break;case"left":re=[[D.right-1,un],[D.right-1,_e],[N.left+1,_e],[N.left+1,un]];break;case"right":re=[[N.right-1,un],[N.right-1,_e],[D.left+1,_e],[D.left+1,un]];break}function W(ae){let[se,ye]=ae;switch(F){case"top":{const Xe=[B?se+t/2:q?se+t*4:se-t*4,ye+t+1],$e=[B?se-t/2:q?se+t*4:se-t*4,ye+t+1],Ze=[[D.left,q||B?D.bottom-t:D.top],[D.right,q?B?D.bottom-t:D.top:D.bottom-t]];return[Xe,$e,...Ze]}case"bottom":{const Xe=[B?se+t/2:q?se+t*4:se-t*4,ye-t],$e=[B?se-t/2:q?se+t*4:se-t*4,ye-t],Ze=[[D.left,q||B?D.top+t:D.bottom],[D.right,q?B?D.top+t:D.bottom:D.top+t]];return[Xe,$e,...Ze]}case"left":{const Xe=[se+t+1,X?ye+t/2:U?ye+t*4:ye-t*4],$e=[se+t+1,X?ye-t/2:U?ye+t*4:ye-t*4];return[...[[U||X?D.right-t:D.left,D.top],[U?X?D.right-t:D.left:D.right-t,D.bottom]],Xe,$e]}case"right":{const Xe=[se-t,X?ye+t/2:U?ye+t*4:ye-t*4],$e=[se-t,X?ye-t/2:U?ye+t*4:ye-t*4],Ze=[[U||X?D.left+t:D.right,D.top],[U?X?D.left+t:D.right:D.left+t,D.bottom]];return[Xe,$e,...Ze]}}}if(!Zo([O,I],re)){if(s&&!V)return A();if(!M&&n){const ae=u(R.clientX,R.clientY);if(ae!==null&&ae<.1)return A()}Zo([O,I],W([m,v]))?!s&&n&&(a=window.setTimeout(A,40)):A()}}};return d.__options={blockPointerEvents:r},d}const ns=()=>{const{cn:e}=ne();return y.createElement(Uu,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Ug=()=>{const{cn:e}=ne();return y.createElement(Uu,{title:er("global")("readOnly"),className:e("navds-form-field__readonly-icon")})},Ka=k.createContext(null),it=(e,t)=>{var r,n,a;const{size:s,error:i,errorId:o}=e,l=k.useContext(Ka),u=Nn(),d=(r=e.id)!==null&&r!==void 0?r:`${t}-${u}`,g=o??`${t}-error-${u}`,m=`${t}-description-${u}`,v=(l==null?void 0:l.disabled)||e.disabled,p=((l==null?void 0:l.readOnly)||e.readOnly)&&!v||void 0,c=!v&&!p&&!!(i||l!=null&&l.error),b=!v&&!p&&!!i&&typeof i!="boolean",T=Object.assign({},c?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:b,hasError:c,errorId:g,inputDescriptionId:m,size:(n=s??(l==null?void 0:l.size))!==null&&n!==void 0?n:"medium",readOnly:p,inputProps:Object.assign(Object.assign({id:d},T),{"aria-describedby":kr(e["aria-describedby"],{[m]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[g]:b,[(a=l==null?void 0:l.errorId)!==null&&a!==void 0?a:""]:c&&!!(l!=null&&l.error)})||void 0,disabled:v})}},Hg={global:{dateLocale:Xu,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"}},Cg={global:{dateLocale:Qu,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"}},Yg=(e="nb")=>{switch(e){case"nn":return Qu;case"en":return Xu;default:return Zu}},$g=e=>{switch(e){case"nn":return Cg.DatePicker;case"en":case"en-GB":return Hg.DatePicker;default:return}},NA=e=>{switch(e){case"nn":return Cg.global;case"en":case"en-GB":return Hg.global;default:return}},[Wg,rs]=rt();var IA=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const[_A,Ki]=rt({errorMessage:"useDateInputContext must be used with DateInputContext"}),zg=k.forwardRef((e,t)=>{const{className:r,hideLabel:n=!1,label:a,description:s,variant:i="datepicker",setAnchorRef:o}=e,l=IA(e,["className","hideLabel","label","description","variant","setAnchorRef"]),u=k.useRef(null),d=rs().translate,{cn:g}=ne(),m=i==="datepicker",v={prefix:m?"datepicker-input":"monthpicker-input",iconTitle:{open:m?"openDatePicker":"openMonthPicker",close:m?"closeDatePicker":"closeMonthPicker"}},p=Ki(),{inputProps:c,size:b="medium",inputDescriptionId:T,errorId:f,showErrorMsg:h,hasError:R,readOnly:A}=it(e,v.prefix);return y.createElement("div",{className:g(r,"navds-form-field",`navds-form-field--${b}`,"navds-date__field",{"navds-text-field--error":R,"navds-date__field--error":R,"navds-form-field--disabled":!!c.disabled,"navds-text-field--disabled":!!c.disabled,"navds-form-field--readonly":A,"navds-text-field--readonly":A,"navds-date__field--readonly":A})},y.createElement(Ie,{htmlFor:c.id,size:b,className:g("navds-form-field__label",{"navds-sr-only":n})},A&&y.createElement(ns,null),a),!!s&&y.createElement(te,{as:"div",className:g("navds-form-field__description",{"navds-sr-only":n}),id:T,size:b},s),y.createElement("div",{className:g("navds-date__field-wrapper")},y.createElement("input",Object.assign({ref:t},on(l,["error","errorId","size"]),c,{autoComplete:"off","aria-controls":p!=null&&p.open?p.ariaId:void 0,readOnly:A,className:g("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${b}`),size:m?11:14})),y.createElement("button",{disabled:c.disabled||A,tabIndex:A||p!=null&&p.open?-1:0,onClick:()=>{p==null||p.onOpen(),o==null||o(u.current)},type:"button",className:g("navds-date__field-button"),ref:u},y.createElement(Xc,{title:d(v.iconTitle[p!=null&&p.open?"close":"open"])}))),y.createElement("div",{className:g("navds-form-field__error"),id:f,"aria-relevant":"additions removals","aria-live":"polite"},h&&y.createElement(Pt,{size:b,showIcon:!0},e.error)))}),OA=k.forwardRef((e,t)=>y.createElement(zg,Object.assign({},e,{ref:t})));k.forwardRef((e,t)=>y.createElement(zg,Object.assign({},e,{variant:"monthpicker",ref:t})));var SA=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const DA=k.forwardRef((e,t)=>{var{className:r}=e,n=SA(e,["className"]);const{cn:a}=ne();return y.createElement("div",Object.assign({},n,{ref:t,className:a("navds-modal__body",r)}))});var PA=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const LA=k.forwardRef((e,t)=>{var{className:r}=e,n=PA(e,["className"]);const{cn:a}=ne();return y.createElement("div",Object.assign({},n,{ref:t,className:a("navds-modal__footer",r)}))});var wA=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Jg=k.forwardRef((e,t)=>{var{children:r,className:n,closeButton:a=!0}=e,s=wA(e,["children","className","closeButton"]);const{cn:i}=ne(),o=Lt(),l=er("global");return y.createElement("div",Object.assign({},s,{ref:t,className:i("navds-modal__header",n)}),o.closeHandler&&a&&y.createElement(xe,{type:"button",className:i("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:u=>{["Enter"," "].includes(u.key)&&u.repeat&&u.preventDefault()},onClick:o.closeHandler,icon:y.createElement(Cu,{title:l("close")})}),r)}),Qo=({clientX:e,clientY:t},{left:r,top:n,right:a,bottom:s})=>!(e<r||t<n||e>a||t>s);function jA(e,t,r){if(!(t&&t.closeButton===!1))return r?()=>{var n;return r()!==!1&&((n=e.current)===null||n===void 0?void 0:n.close())}:()=>{var n;return(n=e.current)===null||n===void 0?void 0:n.close()}}const zt="navds-modal__document-body";function MA(e,t,r){y.useEffect(()=>{if(r||!e.current||!t)return;e.current.open&&document.body.classList.add(zt);const n=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(zt):document.body.classList.remove(zt)});return n.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{n.disconnect(),document.body.classList.remove(zt)}},[e,t,r])}const Gr=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function Xg(e,t){var r="on"+t.type.toLowerCase();return typeof e[r]=="function"&&e[r](t),e.dispatchEvent(t)}function vt(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Zg(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function KA(e,t){for(var r=0;r<e.length;++r)if(e[r]===t)return!0;return!1}function Ns(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Qg(e){var t=["button","input","keygen","select","textarea"],r=t.map(function(i){return i+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var n=e.querySelector(r.join(", "));if(!n&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),s=0;s<a.length&&!(a[s].tagName&&a[s].shadowRoot&&(n=Qg(a[s].shadowRoot),n));s++);return n}function el(e){return e.isConnected||document.body.contains(e)}function em(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var r=ge.formSubmitter;if(!r){var n=e.target,a="getRootNode"in n&&n.getRootNode()||document;r=a.activeElement}return!r||r.form!==t?null:r}function FA(e){if(!e.defaultPrevented){var t=e.target,r=ge.imagemapUseValue,n=em(e);r===null&&n&&(r=n.value);var a=vt(t);if(a){var s=n&&n.getAttribute("formmethod")||t.getAttribute("method");s==="dialog"&&(e.preventDefault(),r!=null?a.close(r):a.close())}}}function nm(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",FA,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var t=new MutationObserver(this.maybeHideModal.bind(this));t.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,n=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),a,s=function(i){if(i.target===e){var o="DOMNodeRemoved";r|=i.type.substr(0,o.length)===o,window.clearTimeout(a),a=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,s)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}nm.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&el(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),ge.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Qg(this.dialog_)),Zg(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!el(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!ge.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,ge.needsCentering(this.dialog_)?(ge.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var t=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});Xg(this.dialog_,t)}};var ge={};ge.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,r=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,r)+"px"};ge.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var r=document.styleSheets[t],n=null;try{n=r.cssRules}catch{}if(n)for(var a=0;a<n.length;++a){var s=n[a],i=null;try{i=document.querySelectorAll(s.selectorText)}catch{}if(!(!i||!KA(i,e))){var o=s.style.getPropertyValue("top"),l=s.style.getPropertyValue("bottom");if(o&&o!=="auto"||l&&l!=="auto")return!0}}}return!1};ge.needsCentering=function(e){var t=window.getComputedStyle(e);return t.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!ge.isInlinePositionSetByStylesheet(e)};ge.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new nm(e)};ge.registerDialog=function(e){e.showModal||ge.forceRegisterDialog(e)};ge.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var r=[];t.forEach(function(n){for(var a=0,s;s=n.removedNodes[a];++a)s instanceof Element&&(s.localName==="dialog"&&r.push(s),r=r.concat(s.querySelectorAll("dialog")))}),r.length&&e(r)}))};ge.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};ge.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};ge.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,t=0,r;r=this.pendingDialogStack[t];++t)r.updateZIndex(--e,--e),t===0&&(this.overlay.style.zIndex=--e);var n=this.pendingDialogStack[0];if(n){var a=n.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};ge.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=vt(e);){for(var t=0,r;r=this.pendingDialogStack[t];++t)if(r.dialog===e)return t===0;e=e.parentElement}return!1};ge.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Zg(t),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],n=r.dialog,a=n.compareDocumentPosition(t);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}};ge.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var t=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&Xg(r.dialog,t)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};ge.DialogManager.prototype.checkDOM_=function(e){var t=this.pendingDialogStack.slice();t.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};ge.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=t?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};ge.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);t!==-1&&(this.pendingDialogStack.splice(t,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Gr&&(ge.dm=new ge.DialogManager,ge.formSubmitter=null,ge.imagemapUseValue=null);if(Gr){var nl=document.createElement("form");if(nl.setAttribute("method","dialog"),nl.method!=="dialog"){var qr=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(qr){var qA=qr.get;qr.get=function(){return Ns(this)?"dialog":qA.call(this)};var VA=qr.set;qr.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):VA.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",qr)}}document.addEventListener("click",function(e){if(ge.formSubmitter=null,ge.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e){var r=e.composedPath();t=r.shift()||t}if(!(!t||!Ns(t.form))){var n=t.type==="submit"&&["button","input"].indexOf(t.localName)>-1;if(!n){if(!(t.localName==="input"&&t.type==="image"))return;ge.imagemapUseValue=e.offsetX+","+e.offsetY}var a=vt(t);a&&(ge.formSubmitter=t)}}},!1),document.addEventListener("submit",function(e){var t=e.target,r=vt(t);if(!r){var n=em(e),a=n&&n.getAttribute("formmethod")||t.getAttribute("method");a==="dialog"&&e.preventDefault()}});var xA=HTMLFormElement.prototype.submit,GA=function(){if(!Ns(this))return xA.call(this);var e=vt(this);e&&e.close()};HTMLFormElement.prototype.submit=GA}var BA=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const xn=k.forwardRef((e,t)=>{var r,n,{header:a,children:s,open:i,onBeforeClose:o,onCancel:l,closeOnBackdropClick:u,width:d,placement:g,portal:m,className:v,"aria-labelledby":p,style:c,onClick:b,onMouseDown:T}=e,f=BA(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:h}=ne(),R=k.useRef(h("navds-modal--polyfilled")),A=k.useRef(null),O=nt(A,t),I=Nn(),S=(r=za())===null||r===void 0?void 0:r.rootElement,P=kA({root:S}),M=Ki(!1),j=Lt(!1)!==void 0;j&&!M&&console.error("Modals should not be nested"),k.useEffect(()=>{Gr&&A.current&&P&&(ge.registerDialog(A.current),A.current.classList.add(R.current)),A.current&&P&&(A.current.autofocus=!0)},[P]),k.useEffect(()=>{A.current&&P&&i!==void 0&&(i&&!A.current.open?A.current.showModal():!i&&A.current.open&&A.current.close())},[P,i]),MA(A,P,j);const L=typeof d=="string"&&["small","medium"].includes(d),N=h("navds-modal",v,{[R.current]:Gr,"navds-modal--autowidth":!d,[`navds-modal--${d}`]:L,"navds-modal--top":g==="top"&&!Gr}),D=Object.assign(Object.assign({},c),L?{}:{width:d}),F=k.useRef({clientX:0,clientY:0}),q=Re=>{F.current=Re},U=u&&!Gr,V=Re=>{if(Re.target!==A.current)return;const _e=A.current.getBoundingClientRect();Qo(F.current,_e)||Qo(Re,_e)||o!==void 0&&o()===!1||A.current.close()},B=Re=>{o&&o()===!1&&Re.preventDefault()},X=!p&&!f["aria-label"]&&a?I:p,Q=y.createElement("dialog",Object.assign({},f,{ref:O,className:N,style:D,onCancel:Br(l,B),onClick:U?Br(b,V):b,onMouseDown:U?Br(T,q):T,"aria-labelledby":X}),y.createElement(DE,{closeHandler:jA(A,a,o),ref:A},a&&y.createElement(Jg,null,a.label&&y.createElement(Wr,{className:h("navds-modal__label")},a.label),y.createElement(Ya,{size:(n=a.size)!==null&&n!==void 0?n:"medium",level:"1",id:I},a.icon&&y.createElement("span",{className:h("navds-modal__header-icon")},a.icon),a.heading)),s));return m?P?nu.createPortal(Q,P):null:Q});xn.Header=Jg;xn.Body=DA;xn.Footer=LA;var UA=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const HA=k.forwardRef((e,t)=>{var{className:r}=e,n=UA(e,["className"]);const{cn:a}=ne();return y.createElement("div",Object.assign({},n,{ref:t,className:a("navds-popover__content",r)}))});var CA=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Qr=k.forwardRef((e,t)=>{var{className:r,children:n,anchorEl:a,arrow:s=!0,open:i,onClose:o,placement:l="top",offset:u,strategy:d,flip:g=!0}=e,m=CA(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:v}=ne(),p=k.useRef(null),c=Lt(!1)!==void 0,b=Ki(!1),T=d??(c?"fixed":"absolute"),f=b?!1:g,h=Dt(!1),{update:R,refs:A,placement:O,middlewareData:{arrow:{x:I,y:S}={}},floatingStyles:P}=Bg({strategy:T,placement:l,open:i,middleware:[fg(u??(h?8:s?16:4)),f&&cg({padding:5,fallbackPlacements:["bottom","top"]}),vg({padding:12}),Eg({element:p,padding:8})]});zr(()=>{A.setReference(a)},[a]);const M=nt(A.setFloating,t);zr(()=>{if(!A.reference.current||!A.floating.current||!i)return;const L=Qs(A.reference.current,A.floating.current,R);return()=>L()},[A.floating,A.reference,R,i,a]);const j={top:"bottom",right:"left",bottom:"top",left:"right"}[O.split("-")[0]];return y.createElement(wy,{asChild:!0,safeZone:{anchor:a,dismissable:A.floating.current},onDismiss:()=>i&&(o==null?void 0:o()),enabled:i},y.createElement("div",Object.assign({ref:M},m,{className:v("navds-popover",r,{"navds-popover--hidden":!i||!a}),style:Object.assign(Object.assign({},m.style),P),"data-placement":O,"aria-hidden":!i||!a}),n,s&&!h&&y.createElement("div",{ref:L=>{p.current=L},style:Object.assign(Object.assign(Object.assign({},I!=null?{left:I}:{}),S!=null?{top:S}:{}),j?{[j]:"-0.5rem"}:{}),className:v("navds-popover__arrow")})))});Qr.Content=HA;const YA={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},$A=({open:e,children:t,onClose:r,anchor:n,locale:a,translate:s,variant:i,popoverProps:o})=>{const l=er("global",NA(a)),{cn:u}=ne(),d=k.useRef(null),g=Lt(!1)!==void 0;return LE("screen and (min-width: 768px)",!0)&&!g?y.createElement(Qr,Object.assign({arrow:!1,anchorEl:n,open:e,onClose:r,placement:"bottom-start",role:"dialog",className:u("navds-date__popover",{"navds-date":i==="month"}),flip:!1},o),t):y.createElement(xn,{ref:d,open:e,onClose:v=>{v.stopPropagation(),r()},"aria-label":s(YA[i]),className:u("navds-date__modal",{"navds-date__nested-modal":g,"navds-date":i==="month"}),closeOnBackdropClick:!0,placement:"top"},y.createElement("div",{className:u("navds-date__modal-body")},t,y.createElement(xe,{variant:"tertiary",onClick:()=>{var v;return(v=d==null?void 0:d.current)===null||v===void 0?void 0:v.close()},size:"small",type:"button"},l("close"))))};function rm(e){return!!(e&&typeof e=="object"&&"from"in e)}var ee;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(ee||(ee={}));var Ne;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(Ne||(Ne={}));var Tn;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(Tn||(Tn={}));var mn;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(mn||(mn={}));const Is={},kt={};function ct(e,t){try{const n=(Is[e]||(Is[e]=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format))(t).split("GMT")[1]||"";return n in kt?kt[n]:rl(n,n.split(":"))}catch{if(e in kt)return kt[e];const r=e==null?void 0:e.match(WA);return r?rl(e,r.slice(1)):NaN}}const WA=/([+-]\d\d):?(\d\d)?/;function rl(e,t){const r=+t[0],n=+(t[1]||0);return kt[e]=r>0?r*60+n:r*60-n}class Fn extends Date{constructor(...t){super(),t.length>1&&typeof t[t.length-1]=="string"&&(this.timeZone=t.pop()),this.internal=new Date,isNaN(ct(this.timeZone,this))?this.setTime(NaN):t.length?typeof t[0]=="number"&&(t.length===1||t.length===2&&typeof t[1]!="number")?this.setTime(t[0]):typeof t[0]=="string"?this.setTime(+new Date(t[0])):t[0]instanceof Date?this.setTime(+t[0]):(this.setTime(+new Date(...t)),tm(this),ti(this)):this.setTime(Date.now())}static tz(t,...r){return r.length?new Fn(...r,t):new Fn(Date.now(),t)}withTimeZone(t){return new Fn(+this,t)}getTimezoneOffset(){return-ct(this.timeZone,this)}setTime(t){return Date.prototype.setTime.apply(this,arguments),ti(this),+this}[Symbol.for("constructDateFrom")](t){return new Fn(+new Date(t),this.timeZone)}}const tl=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!tl.test(e))return;const t=e.replace(tl,"$1UTC");Fn.prototype[t]&&(e.startsWith("get")?Fn.prototype[e]=function(){return this.internal[t]()}:(Fn.prototype[e]=function(){return Date.prototype[t].apply(this.internal,arguments),zA(this),+this},Fn.prototype[t]=function(){return Date.prototype[t].apply(this,arguments),ti(this),+this}))});function ti(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function zA(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),tm(e)}function tm(e){const t=ct(e.timeZone,e),r=new Date(+e);r.setUTCHours(r.getUTCHours()-1);const n=-new Date(+e).getTimezoneOffset(),a=-new Date(+r).getTimezoneOffset(),s=n-a,i=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();s&&i&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+s);const o=n-t;o&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+o);const l=ct(e.timeZone,e),d=-new Date(+e).getTimezoneOffset()-l,g=l!==t,m=d-o;if(g&&m){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+m);const v=ct(e.timeZone,e),p=l-v;p&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+p),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+p))}}class Rr extends Fn{static tz(t,...r){return r.length?new Rr(...r,t):new Rr(Date.now(),t)}toISOString(){const[t,r,n]=this.tzComponents(),a=`${t}${r}:${n}`;return this.internal.toISOString().slice(0,-1)+a}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[t,r,n,a]=this.internal.toUTCString().split(" ");return`${t==null?void 0:t.slice(0,-1)} ${n} ${r} ${a}`}toTimeString(){const t=this.internal.toUTCString().split(" ")[4],[r,n,a]=this.tzComponents();return`${t} GMT${r}${n}${a} (${JA(this.timeZone,this)})`}toLocaleString(t,r){return Date.prototype.toLocaleString.call(this,t,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}toLocaleDateString(t,r){return Date.prototype.toLocaleDateString.call(this,t,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}toLocaleTimeString(t,r){return Date.prototype.toLocaleTimeString.call(this,t,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}tzComponents(){const t=this.getTimezoneOffset(),r=t>0?"-":"+",n=String(Math.floor(Math.abs(t)/60)).padStart(2,"0"),a=String(Math.abs(t)%60).padStart(2,"0");return[r,n,a]}withTimeZone(t){return new Rr(+this,t)}[Symbol.for("constructDateFrom")](t){return new Rr(+new Date(t),this.timeZone)}}function JA(e,t){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(t).slice(12)}const al=5,XA=4;function ZA(e,t){const r=t.startOfMonth(e),n=r.getDay()>0?r.getDay():7,a=t.addDays(e,-n+1),s=t.addDays(a,al*7-1);return t.getMonth(e)===t.getMonth(s)?al:XA}function am(e,t){const r=t.startOfMonth(e),n=r.getDay();return n===1?r:n===0?t.addDays(r,-1*6):t.addDays(r,-1*(n-1))}function QA(e,t){const r=am(e,t),n=ZA(e,t);return t.addDays(r,n*7-1)}class nr{constructor(t,r){this.Date=Date,this.today=()=>{var n;return(n=this.overrides)!=null&&n.today?this.overrides.today():this.options.timeZone?Rr.tz(this.options.timeZone):new this.Date},this.newDate=(n,a,s)=>{var i;return(i=this.overrides)!=null&&i.newDate?this.overrides.newDate(n,a,s):this.options.timeZone?new Rr(n,a,s,this.options.timeZone):new Date(n,a,s)},this.addDays=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.addDays)==null?void 0:i.call(s,n,a))??Ft(n,a)},this.addMonths=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.addMonths)==null?void 0:i.call(s,n,a))??Ni(n,a)},this.addWeeks=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.addWeeks)==null?void 0:i.call(s,n,a))??Ib(n,a)},this.addYears=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.addYears)==null?void 0:i.call(s,n,a))??Ii(n,a)},this.differenceInCalendarDays=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.differenceInCalendarDays)==null?void 0:i.call(s,n,a))??or(n,a)},this.differenceInCalendarMonths=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.differenceInCalendarMonths)==null?void 0:i.call(s,n,a))??Db(n,a)},this.eachMonthOfInterval=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.eachMonthOfInterval)==null?void 0:s.call(a,n))??Ag(n)},this.endOfBroadcastWeek=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.endOfBroadcastWeek)==null?void 0:i.call(s,n,a))??QA(n,this)},this.endOfISOWeek=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.endOfISOWeek)==null?void 0:s.call(a,n))??Lb(n)},this.endOfMonth=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.endOfMonth)==null?void 0:s.call(a,n))??hg(n)},this.endOfWeek=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.endOfWeek)==null?void 0:i.call(s,n,a??this.options))??Tg(n,a??this.options)},this.endOfYear=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.endOfYear)==null?void 0:s.call(a,n))??Qa(n)},this.format=(n,a,s)=>{var o,l;const i=((l=(o=this.overrides)==null?void 0:o.format)==null?void 0:l.call(o,n,a,s??this.options))??Lr(n,a,s??this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(i):i},this.getISOWeek=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.getISOWeek)==null?void 0:s.call(a,n))??Oi(n)},this.getMonth=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.getMonth)==null?void 0:s.call(a,n))??Pi(n)},this.getYear=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.getYear)==null?void 0:s.call(a,n))??Li(n)},this.getWeek=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.getWeek)==null?void 0:i.call(s,n,a??this.options))??Di(n,a??this.options)},this.isAfter=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isAfter)==null?void 0:i.call(s,n,a))??_g(n,a)},this.isBefore=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isBefore)==null?void 0:i.call(s,n,a))??Vt(n,a)},this.isDate=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.isDate)==null?void 0:s.call(a,n))??bg(n)},this.isSameDay=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isSameDay)==null?void 0:i.call(s,n,a))??_i(n,a)},this.isSameMonth=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isSameMonth)==null?void 0:i.call(s,n,a))??Hh(n,a)},this.isSameYear=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isSameYear)==null?void 0:i.call(s,n,a))??Lg(n,a)},this.max=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.max)==null?void 0:s.call(a,n))??_b(n)},this.min=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.min)==null?void 0:s.call(a,n))??Ob(n)},this.setMonth=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.setMonth)==null?void 0:i.call(s,n,a))??wg(n,a)},this.setYear=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.setYear)==null?void 0:i.call(s,n,a))??jg(n,a)},this.startOfBroadcastWeek=(n,a)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.startOfBroadcastWeek)==null?void 0:i.call(s,n,a??this))??am(n,a??this)},this.startOfDay=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.startOfDay)==null?void 0:s.call(a,n))??Qn(n)},this.startOfISOWeek=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.startOfISOWeek)==null?void 0:s.call(a,n))??Dr(n)},this.startOfMonth=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.startOfMonth)==null?void 0:s.call(a,n))??Pr(n)},this.startOfWeek=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.startOfWeek)==null?void 0:s.call(a,n))??Zn(n,this.options)},this.startOfYear=n=>{var a,s;return((s=(a=this.overrides)==null?void 0:a.startOfYear)==null?void 0:s.call(a,n))??qt(n)},this.options={locale:Wa,...t},this.overrides=r}getDigitMap(){const{numerals:t="latn"}=this.options,r=new Intl.NumberFormat("en-US",{numberingSystem:t}),n={};for(let a=0;a<10;a++)n[a.toString()]=r.format(a);return n}replaceDigits(t){const r=this.getDigitMap();return t.replace(/\d/g,n=>r[n]||n)}formatNumber(t){return this.replaceDigits(t.toString())}}const rr=new nr;function eT(e,t,r={}){return Object.entries(e).filter(([,a])=>a===!0).reduce((a,[s])=>(r[s]?a.push(r[s]):t[Ne[s]]?a.push(t[Ne[s]]):t[Tn[s]]&&a.push(t[Tn[s]]),a),[t[ee.Day]])}function nT(e){return y.createElement("button",{...e})}function rT(e){return y.createElement("span",{...e})}function tT(e){const{size:t=24,orientation:r="left",className:n}=e;return y.createElement("svg",{className:n,width:t,height:t,viewBox:"0 0 24 24"},r==="up"&&y.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&y.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&y.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&y.createElement("polygon",{points:"8 18.612 14.1888889 12.5 8 6.37733333 9.91111111 4.5 18 12.5 9.91111111 20.5"}))}function aT(e){const{day:t,modifiers:r,...n}=e;return y.createElement("td",{...n})}function sT(e){const{day:t,modifiers:r,...n}=e,a=y.useRef(null);return y.useEffect(()=>{var s;r.focused&&((s=a.current)==null||s.focus())},[r.focused]),y.createElement("button",{ref:a,...n})}function iT(e){const{options:t,className:r,components:n,classNames:a,...s}=e,i=[a[ee.Dropdown],r].join(" "),o=t==null?void 0:t.find(({value:l})=>l===s.value);return y.createElement("span",{"data-disabled":s.disabled,className:a[ee.DropdownRoot]},y.createElement(n.Select,{className:i,...s},t==null?void 0:t.map(({value:l,label:u,disabled:d})=>y.createElement(n.Option,{key:l,value:l,disabled:d},u))),y.createElement("span",{className:a[ee.CaptionLabel],"aria-hidden":!0},o==null?void 0:o.label,y.createElement(n.Chevron,{orientation:"down",size:18,className:a[ee.Chevron]})))}function oT(e){return y.createElement("div",{...e})}function lT(e){return y.createElement("div",{...e})}function dT(e){const{calendarMonth:t,displayIndex:r,...n}=e;return y.createElement("div",{...n},e.children)}function uT(e){const{calendarMonth:t,displayIndex:r,...n}=e;return y.createElement("div",{...n})}function gT(e){return y.createElement("table",{...e})}function mT(e){return y.createElement("div",{...e})}const sm=k.createContext(void 0);function Mr(){const e=k.useContext(sm);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function kT(e){const{components:t}=Mr();return y.createElement(t.Dropdown,{...e})}function fT(e){const{onPreviousClick:t,onNextClick:r,previousMonth:n,nextMonth:a,...s}=e,{components:i,classNames:o,labels:{labelPrevious:l,labelNext:u}}=Mr(),d=k.useCallback(m=>{a&&(r==null||r(m))},[a,r]),g=k.useCallback(m=>{n&&(t==null||t(m))},[n,t]);return y.createElement("nav",{...s},y.createElement(i.PreviousMonthButton,{type:"button",className:o[ee.PreviousMonthButton],tabIndex:n?void 0:-1,"aria-disabled":n?void 0:!0,"aria-label":l(n),onClick:g},y.createElement(i.Chevron,{disabled:n?void 0:!0,className:o[ee.Chevron],orientation:"left"})),y.createElement(i.NextMonthButton,{type:"button",className:o[ee.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":u(a),onClick:d},y.createElement(i.Chevron,{disabled:a?void 0:!0,orientation:"right",className:o[ee.Chevron]})))}function vT(e){const{components:t}=Mr();return y.createElement(t.Button,{...e})}function cT(e){return y.createElement("option",{...e})}function ET(e){const{components:t}=Mr();return y.createElement(t.Button,{...e})}function pT(e){const{rootRef:t,...r}=e;return y.createElement("div",{...r,ref:t})}function yT(e){return y.createElement("select",{...e})}function bT(e){const{week:t,...r}=e;return y.createElement("tr",{...r})}function hT(e){return y.createElement("th",{...e})}function AT(e){return y.createElement("thead",{"aria-hidden":!0},y.createElement("tr",{...e}))}function TT(e){const{week:t,...r}=e;return y.createElement("th",{...r})}function RT(e){return y.createElement("th",{...e})}function NT(e){return y.createElement("tbody",{...e})}function IT(e){const{components:t}=Mr();return y.createElement(t.Dropdown,{...e})}const _T=Object.freeze(Object.defineProperty({__proto__:null,Button:nT,CaptionLabel:rT,Chevron:tT,Day:aT,DayButton:sT,Dropdown:iT,DropdownNav:oT,Footer:lT,Month:dT,MonthCaption:uT,MonthGrid:gT,Months:mT,MonthsDropdown:kT,Nav:fT,NextMonthButton:vT,Option:cT,PreviousMonthButton:ET,Root:pT,Select:yT,Week:bT,WeekNumber:TT,WeekNumberHeader:RT,Weekday:hT,Weekdays:AT,Weeks:NT,YearsDropdown:IT},Symbol.toStringTag,{value:"Module"}));function OT(e){return{..._T,...e}}function ST(e){const t={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0};return Object.entries(e).forEach(([r,n])=>{r.startsWith("data-")&&(t[r]=n)}),t}function DT(){const e={};for(const t in ee)e[ee[t]]=`rdp-${ee[t]}`;for(const t in Ne)e[Ne[t]]=`rdp-${Ne[t]}`;for(const t in Tn)e[Tn[t]]=`rdp-${Tn[t]}`;for(const t in mn)e[mn[t]]=`rdp-${mn[t]}`;return e}function im(e,t,r){return(r??new nr(t)).format(e,"LLLL y")}const PT=im;function LT(e,t,r){return(r??new nr(t)).format(e,"d")}function wT(e,t=rr){return t.format(e,"LLLL")}function jT(e){return e<10?`0${e.toLocaleString()}`:`${e.toLocaleString()}`}function MT(){return""}function KT(e,t,r){return(r??new nr(t)).format(e,"cccccc")}function om(e,t=rr){return t.format(e,"yyyy")}const FT=om,qT=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:im,formatDay:LT,formatMonthCaption:PT,formatMonthDropdown:wT,formatWeekNumber:jT,formatWeekNumberHeader:MT,formatWeekdayName:KT,formatYearCaption:FT,formatYearDropdown:om},Symbol.toStringTag,{value:"Module"}));function VT(e){return e!=null&&e.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e!=null&&e.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...qT,...e}}function xT(e,t,r,n,a){const{startOfMonth:s,startOfYear:i,endOfYear:o,eachMonthOfInterval:l,getMonth:u}=a;return l({start:i(e),end:o(e)}).map(m=>{const v=n.formatMonthDropdown(m,a),p=u(m),c=t&&m<s(t)||r&&m>s(r)||!1;return{value:p,label:v,disabled:c}})}function GT(e,t={},r={}){let n={...t==null?void 0:t[ee.Day]};return Object.entries(e).filter(([,a])=>a===!0).forEach(([a])=>{n={...n,...r==null?void 0:r[a]}}),n}function BT(e,t,r){const n=e.today(),a=t?e.startOfISOWeek(n):e.startOfWeek(n),s=[];for(let i=0;i<7;i++){const o=e.addDays(a,i);s.push(o)}return s}function UT(e,t,r,n){if(!e||!t)return;const{startOfYear:a,endOfYear:s,addYears:i,getYear:o,isBefore:l,isSameYear:u}=n,d=a(e),g=s(t),m=[];let v=d;for(;l(v,g)||u(v,g);)m.push(v),v=i(v,1);return m.map(p=>{const c=r.formatYearDropdown(p,n);return{value:o(p),label:c,disabled:!1}})}function lm(e,t,r){return(r??new nr(t)).format(e,"LLLL y")}const HT=lm;function CT(e,t,r,n){let a=(n??new nr(r)).format(e,"PPPP");return t!=null&&t.today&&(a=`Today, ${a}`),a}function dm(e,t,r,n){let a=(n??new nr(r)).format(e,"PPPP");return t.today&&(a=`Today, ${a}`),t.selected&&(a=`${a}, selected`),a}const YT=dm;function $T(){return""}function WT(e){return"Choose the Month"}function zT(e){return"Go to the Next Month"}function JT(e){return"Go to the Previous Month"}function XT(e,t,r){return(r??new nr(t)).format(e,"cccc")}function ZT(e,t){return`Week ${e}`}function QT(e){return"Week Number"}function eR(e){return"Choose the Year"}const nR=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:HT,labelDay:YT,labelDayButton:dm,labelGrid:lm,labelGridcell:CT,labelMonthDropdown:WT,labelNav:$T,labelNext:zT,labelPrevious:JT,labelWeekNumber:ZT,labelWeekNumberHeader:QT,labelWeekday:XT,labelYearDropdown:eR},Symbol.toStringTag,{value:"Module"}));function rR(e,t,{classNames:r,months:n,focused:a,dateLib:s}){const i=k.useRef(null),o=k.useRef(n),l=k.useRef(!1);k.useLayoutEffect(()=>{const u=o.current;if(o.current=n,!t||!e.current||!(e.current instanceof HTMLElement))return;const d=i.current,g=e.current.cloneNode(!0);if(g instanceof HTMLElement?([...g.querySelectorAll("[data-animated-month]")??[]].forEach(b=>{const T=b.querySelector("[data-animated-month]");T&&b.contains(T)&&b.removeChild(T)}),i.current=g):i.current=null,n.length===0||u.length===0||n.length!==u.length||a||l.current||s.isSameMonth(n[0].date,u[0].date))return;const v=[...(d==null?void 0:d.querySelectorAll("[data-animated-month]"))??[]],p=[...e.current.querySelectorAll("[data-animated-month]")??[]];if(p&&p.every(c=>c instanceof HTMLElement)&&v&&v.every(c=>c instanceof HTMLElement)){l.current=!0;const c=s.isAfter(n[0].date,u[0].date);p.forEach((b,T)=>{const f=v[T];if(!f)return;const h=c?r[mn.caption_after_enter]:r[mn.caption_before_enter],R=c?r[mn.weeks_after_enter]:r[mn.weeks_before_enter];b.style.position="relative",b.style.overflow="hidden";const A=b.querySelector("[data-animated-caption]");A&&A instanceof HTMLElement&&A.classList.add(h);const O=b.querySelector("[data-animated-weeks]");O&&O instanceof HTMLElement&&O.classList.add(R);const I=()=>{l.current=!1,A&&A instanceof HTMLElement&&A.classList.remove(h),O&&O instanceof HTMLElement&&O.classList.remove(R),b.style.position="",b.style.overflow="",b.contains(f)&&b.removeChild(f)};f.style.pointerEvents="none",f.style.position="absolute",f.style.overflow="hidden",f.setAttribute("aria-hidden","true");const S=f.querySelector("[data-animated-weekdays]");S&&S instanceof HTMLElement&&(S.style.opacity="0");const P=f.querySelector("[data-animated-caption]");P&&P instanceof HTMLElement&&(P.classList.add(c?r[mn.caption_before_exit]:r[mn.caption_after_exit]),P.addEventListener("animationend",I));const M=f.querySelector("[data-animated-weeks]");M&&M instanceof HTMLElement&&M.classList.add(c?r[mn.weeks_before_exit]:r[mn.weeks_after_exit]),b.insertBefore(f,b.firstChild)})}})}function tR(e,t,r,n){const a=e[0],s=e[e.length-1],{ISOWeek:i,fixedWeeks:o,broadcastCalendar:l}=r??{},{addDays:u,differenceInCalendarDays:d,differenceInCalendarMonths:g,endOfBroadcastWeek:m,endOfISOWeek:v,endOfMonth:p,endOfWeek:c,isAfter:b,startOfBroadcastWeek:T,startOfISOWeek:f,startOfWeek:h}=n,R=l?T(a,n):i?f(a):h(a),A=l?m(s,n):i?v(p(s)):c(p(s)),O=d(A,R),I=g(s,a)+1,S=[];for(let j=0;j<=O;j++){const L=u(R,j);if(t&&b(L,t))break;S.push(L)}const M=(l?35:42)*I;if(o&&S.length<M){const j=M-S.length;for(let L=0;L<j;L++){const N=u(S[S.length-1],1);S.push(N)}}return S}function aR(e){const t=[];return e.reduce((r,n)=>{const a=[],s=n.weeks.reduce((i,o)=>[...i,...o.days],a);return[...r,...s]},t)}function sR(e,t,r,n){const{numberOfMonths:a=1}=r,s=[];for(let i=0;i<a;i++){const o=n.addMonths(e,i);if(t&&o>t)break;s.push(o)}return s}function sl(e,t){const{month:r,defaultMonth:n,today:a=t.today(),numberOfMonths:s=1,endMonth:i,startMonth:o}=e;let l=r||n||a;const{differenceInCalendarMonths:u,addMonths:d,startOfMonth:g}=t;if(i&&u(i,l)<0){const m=-1*(s-1);l=d(i,m)}return o&&u(l,o)<0&&(l=o),g(l)}class um{constructor(t,r,n=rr){this.date=t,this.displayMonth=r,this.outside=!!(r&&!n.isSameMonth(t,r)),this.dateLib=n}isEqualTo(t){return this.dateLib.isSameDay(t.date,this.date)&&this.dateLib.isSameMonth(t.displayMonth,this.displayMonth)}}class iR{constructor(t,r){this.date=t,this.weeks=r}}class oR{constructor(t,r){this.days=r,this.weekNumber=t}}function lR(e,t,r,n){const{addDays:a,endOfBroadcastWeek:s,endOfISOWeek:i,endOfMonth:o,endOfWeek:l,getISOWeek:u,getWeek:d,startOfBroadcastWeek:g,startOfISOWeek:m,startOfWeek:v}=n,p=e.reduce((c,b)=>{const T=r.broadcastCalendar?g(b,n):r.ISOWeek?m(b):v(b),f=r.broadcastCalendar?s(b,n):r.ISOWeek?i(o(b)):l(o(b)),h=t.filter(I=>I>=T&&I<=f),R=r.broadcastCalendar?35:42;if(r.fixedWeeks&&h.length<R){const I=t.filter(S=>{const P=R-h.length;return S>f&&S<=a(f,P)});h.push(...I)}const A=h.reduce((I,S)=>{const P=r.ISOWeek?u(S):d(S),M=I.find(L=>L.weekNumber===P),j=new um(S,b,n);return M?M.days.push(j):I.push(new oR(P,[j])),I},[]),O=new iR(b,A);return c.push(O),c},[]);return r.reverseMonths?p.reverse():p}function dR(e,t){let{startMonth:r,endMonth:n}=e;const{startOfYear:a,startOfDay:s,startOfMonth:i,endOfMonth:o,addYears:l,endOfYear:u,newDate:d,today:g}=t,{fromYear:m,toYear:v,fromMonth:p,toMonth:c}=e;!r&&p&&(r=p),!r&&m&&(r=t.newDate(m,0,1)),!n&&c&&(n=c),!n&&v&&(n=d(v,11,31));const b=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return r?r=i(r):m?r=d(m,0,1):!r&&b&&(r=a(l(e.today??g(),-100))),n?n=o(n):v?n=d(v,11,31):!n&&b&&(n=u(e.today??g())),[r&&s(r),n&&s(n)]}function uR(e,t,r,n){if(r.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:s=1}=r,{startOfMonth:i,addMonths:o,differenceInCalendarMonths:l}=n,u=a?s:1,d=i(e);if(!t)return o(d,u);if(!(l(t,e)<s))return o(d,u)}function gR(e,t,r,n){if(r.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:s}=r,{startOfMonth:i,addMonths:o,differenceInCalendarMonths:l}=n,u=a?s??1:1,d=i(e);if(!t)return o(d,-u);if(!(l(d,t)<=0))return o(d,-u)}function mR(e){const t=[];return e.reduce((r,n)=>[...r,...n.weeks],t)}function ts(e,t){const[r,n]=k.useState(e);return[t===void 0?r:t,n]}function kR(e,t){const[r,n]=dR(e,t),{startOfMonth:a,endOfMonth:s}=t,i=sl(e,t),[o,l]=ts(i,e.month?i:void 0);k.useEffect(()=>{const O=sl(e,t);l(O)},[e.timeZone]);const u=sR(o,n,e,t),d=tR(u,e.endMonth?s(e.endMonth):void 0,e,t),g=lR(u,d,e,t),m=mR(g),v=aR(g),p=gR(o,r,e,t),c=uR(o,n,e,t),{disableNavigation:b,onMonthChange:T}=e,f=O=>m.some(I=>I.days.some(S=>S.isEqualTo(O))),h=O=>{if(b)return;let I=a(O);r&&I<a(r)&&(I=a(r)),n&&I>a(n)&&(I=a(n)),l(I),T==null||T(I)};return{months:g,weeks:m,days:v,navStart:r,navEnd:n,previousMonth:p,nextMonth:c,goToMonth:h,goToDay:O=>{f(O)||h(O.date)}}}function fR(e,t,r,n){let a,s=0,i=!1;for(;s<e.length&&!i;){const o=e[s],l=t(o);!l[Ne.disabled]&&!l[Ne.hidden]&&!l[Ne.outside]&&(l[Ne.focused]||n!=null&&n.isEqualTo(o)||r(o.date)||l[Ne.today])&&(a=o,i=!0),s++}return a||(a=e.find(o=>{const l=t(o);return!l[Ne.disabled]&&!l[Ne.hidden]&&!l[Ne.outside]})),a}function Xn(e,t,r=!1,n=rr){let{from:a,to:s}=e;const{differenceInCalendarDays:i,isSameDay:o}=n;return a&&s?(i(s,a)<0&&([a,s]=[s,a]),i(t,a)>=(r?1:0)&&i(s,t)>=(r?1:0)):!r&&s?o(s,t):!r&&a?o(a,t):!1}function gm(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function Fi(e){return!!(e&&typeof e=="object"&&"from"in e)}function mm(e){return!!(e&&typeof e=="object"&&"after"in e)}function km(e){return!!(e&&typeof e=="object"&&"before"in e)}function fm(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function vm(e,t){return Array.isArray(e)&&e.every(t.isDate)}function cn(e,t,r=rr){const n=Array.isArray(t)?t:[t],{isSameDay:a,differenceInCalendarDays:s,isAfter:i}=r;return n.some(o=>{if(typeof o=="boolean")return o;if(r.isDate(o))return a(e,o);if(vm(o,r))return o.includes(e);if(Fi(o))return Xn(o,e,!1,r);if(fm(o))return Array.isArray(o.dayOfWeek)?o.dayOfWeek.includes(e.getDay()):o.dayOfWeek===e.getDay();if(gm(o)){const l=s(o.before,e),u=s(o.after,e),d=l>0,g=u<0;return i(o.before,o.after)?g&&d:d||g}return mm(o)?s(e,o.after)>0:km(o)?s(o.before,e)>0:typeof o=="function"?o(e):!1})}function vR(e,t,r,n,a,s,i){const{ISOWeek:o,broadcastCalendar:l}=s,{addDays:u,addMonths:d,addWeeks:g,addYears:m,endOfBroadcastWeek:v,endOfISOWeek:p,endOfWeek:c,max:b,min:T,startOfBroadcastWeek:f,startOfISOWeek:h,startOfWeek:R}=i;let O={day:u,week:g,month:d,year:m,startOfWeek:I=>l?f(I,i):o?h(I):R(I),endOfWeek:I=>l?v(I,i):o?p(I):c(I)}[e](r,t==="after"?1:-1);return t==="before"&&n?O=b([n,O]):t==="after"&&a&&(O=T([a,O])),O}function cm(e,t,r,n,a,s,i,o=0){if(o>365)return;const l=vR(e,t,r.date,n,a,s,i),u=!!(s.disabled&&cn(l,s.disabled,i)),d=!!(s.hidden&&cn(l,s.hidden,i)),g=l,m=new um(l,g,i);return!u&&!d?m:cm(e,t,m,n,a,s,i,o+1)}function cR(e,t,r,n,a){const{autoFocus:s}=e,[i,o]=k.useState(),l=fR(t.days,r,n||(()=>!1),i),[u,d]=k.useState(s?l:void 0);return{isFocusTarget:c=>!!(l!=null&&l.isEqualTo(c)),setFocused:d,focused:u,blur:()=>{o(u),d(void 0)},moveFocus:(c,b)=>{if(!u)return;const T=cm(c,b,u,t.navStart,t.navEnd,e,a);T&&(t.goToDay(T),d(T))}}}function ER(e,t,r){const{disabled:n,hidden:a,modifiers:s,showOutsideDays:i,broadcastCalendar:o,today:l}=t,{isSameDay:u,isSameMonth:d,startOfMonth:g,isBefore:m,endOfMonth:v,isAfter:p}=r,c=t.startMonth&&g(t.startMonth),b=t.endMonth&&v(t.endMonth),T={[Ne.focused]:[],[Ne.outside]:[],[Ne.disabled]:[],[Ne.hidden]:[],[Ne.today]:[]},f={};for(const h of e){const{date:R,displayMonth:A}=h,O=!!(A&&!d(R,A)),I=!!(c&&m(R,c)),S=!!(b&&p(R,b)),P=!!(n&&cn(R,n,r)),M=!!(a&&cn(R,a,r))||I||S||!o&&!i&&O||o&&i===!1&&O,j=u(R,l??r.today());O&&T.outside.push(h),P&&T.disabled.push(h),M&&T.hidden.push(h),j&&T.today.push(h),s&&Object.keys(s).forEach(L=>{const N=s==null?void 0:s[L];N&&cn(R,N,r)&&(f[L]?f[L].push(h):f[L]=[h])})}return h=>{const R={[Ne.focused]:!1,[Ne.disabled]:!1,[Ne.hidden]:!1,[Ne.outside]:!1,[Ne.today]:!1},A={};for(const O in T){const I=T[O];R[O]=I.some(S=>S===h)}for(const O in f)A[O]=f[O].some(I=>I===h);return{...R,...A}}}function pR(e,t){const{selected:r,required:n,onSelect:a}=e,[s,i]=ts(r,a?r:void 0),o=a?r:s,{isSameDay:l}=t,u=v=>(o==null?void 0:o.some(p=>l(p,v)))??!1,{min:d,max:g}=e;return{selected:o,select:(v,p,c)=>{let b=[...o??[]];if(u(v)){if((o==null?void 0:o.length)===d||n&&(o==null?void 0:o.length)===1)return;b=o==null?void 0:o.filter(T=>!l(T,v))}else(o==null?void 0:o.length)===g?b=[v]:b=[...b,v];return a||i(b),a==null||a(b,v,p,c),b},isSelected:u}}function yR(e,t,r=0,n=0,a=!1,s=rr){const{from:i,to:o}=t||{},{isSameDay:l,isAfter:u,isBefore:d}=s;let g;if(!i&&!o)g={from:e,to:r>0?void 0:e};else if(i&&!o)l(i,e)?a?g={from:i,to:void 0}:g=void 0:d(e,i)?g={from:e,to:i}:g={from:i,to:e};else if(i&&o)if(l(i,e)&&l(o,e))a?g={from:i,to:o}:g=void 0;else if(l(i,e))g={from:i,to:r>0?void 0:e};else if(l(o,e))g={from:e,to:r>0?void 0:e};else if(d(e,i))g={from:e,to:o};else if(u(e,i))g={from:i,to:e};else if(u(e,o))g={from:i,to:e};else throw new Error("Invalid range");if(g!=null&&g.from&&(g!=null&&g.to)){const m=s.differenceInCalendarDays(g.to,g.from);n>0&&m>n?g={from:e,to:void 0}:r>1&&m<r&&(g={from:e,to:void 0})}return g}function bR(e,t,r=rr){const n=Array.isArray(t)?t:[t];let a=e.from;const s=r.differenceInCalendarDays(e.to,e.from),i=Math.min(s,6);for(let o=0;o<=i;o++){if(n.includes(a.getDay()))return!0;a=r.addDays(a,1)}return!1}function il(e,t,r=rr){return Xn(e,t.from,!1,r)||Xn(e,t.to,!1,r)||Xn(t,e.from,!1,r)||Xn(t,e.to,!1,r)}function hR(e,t,r=rr){const n=Array.isArray(t)?t:[t];if(n.filter(o=>typeof o!="function").some(o=>typeof o=="boolean"?o:r.isDate(o)?Xn(e,o,!1,r):vm(o,r)?o.some(l=>Xn(e,l,!1,r)):Fi(o)?o.from&&o.to?il(e,{from:o.from,to:o.to},r):!1:fm(o)?bR(e,o.dayOfWeek,r):gm(o)?r.isAfter(o.before,o.after)?il(e,{from:r.addDays(o.after,1),to:r.addDays(o.before,-1)},r):cn(e.from,o,r)||cn(e.to,o,r):mm(o)||km(o)?cn(e.from,o,r)||cn(e.to,o,r):!1))return!0;const i=n.filter(o=>typeof o=="function");if(i.length){let o=e.from;const l=r.differenceInCalendarDays(e.to,e.from);for(let u=0;u<=l;u++){if(i.some(d=>d(o)))return!0;o=r.addDays(o,1)}}return!1}function AR(e,t){const{disabled:r,excludeDisabled:n,selected:a,required:s,onSelect:i}=e,[o,l]=ts(a,i?a:void 0),u=i?a:o;return{selected:u,select:(m,v,p)=>{const{min:c,max:b}=e,T=m?yR(m,u,c,b,s,t):void 0;return n&&r&&(T!=null&&T.from)&&T.to&&hR({from:T.from,to:T.to},r,t)&&(T.from=m,T.to=void 0),i||l(T),i==null||i(T,m,v,p),T},isSelected:m=>u&&Xn(u,m,!1,t)}}function TR(e,t){const{selected:r,required:n,onSelect:a}=e,[s,i]=ts(r,a?r:void 0),o=a?r:s,{isSameDay:l}=t;return{selected:o,select:(g,m,v)=>{let p=g;return!n&&o&&o&&l(g,o)&&(p=void 0),a||i(p),a==null||a(p,g,m,v),p},isSelected:g=>o?l(o,g):!1}}function RR(e,t){const r=TR(e,t),n=pR(e,t),a=AR(e,t);switch(e.mode){case"single":return r;case"multiple":return n;case"range":return a;default:return}}function NR(e){const{components:t,formatters:r,labels:n,dateLib:a,locale:s,classNames:i}=k.useMemo(()=>{const ie={...Wa,...e.locale};return{dateLib:new nr({locale:ie,weekStartsOn:e.broadcastCalendar?1:e.weekStartsOn,firstWeekContainsDate:e.firstWeekContainsDate,useAdditionalWeekYearTokens:e.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:e.useAdditionalDayOfYearTokens,timeZone:e.timeZone,numerals:e.numerals},e.dateLib),components:OT(e.components),formatters:VT(e.formatters),labels:{...nR,...e.labels},locale:ie,classNames:{...DT(),...e.classNames}}},[e.locale,e.broadcastCalendar,e.weekStartsOn,e.firstWeekContainsDate,e.useAdditionalWeekYearTokens,e.useAdditionalDayOfYearTokens,e.timeZone,e.numerals,e.dateLib,e.components,e.formatters,e.labels,e.classNames]),{captionLayout:o,mode:l,onDayBlur:u,onDayClick:d,onDayFocus:g,onDayKeyDown:m,onDayMouseEnter:v,onDayMouseLeave:p,onNextClick:c,onPrevClick:b,showWeekNumber:T,styles:f}=e,{formatCaption:h,formatDay:R,formatMonthDropdown:A,formatWeekNumber:O,formatWeekNumberHeader:I,formatWeekdayName:S,formatYearDropdown:P}=r,M=kR(e,a),{days:j,months:L,navStart:N,navEnd:D,previousMonth:F,nextMonth:q,goToMonth:U}=M,V=ER(j,e,a),{isSelected:B,select:X,selected:Q}=RR(e,a)??{},{blur:Re,focused:_e,isFocusTarget:un,moveFocus:re,setFocused:W}=cR(e,M,V,B??(()=>!1),a),{labelDayButton:ae,labelGridcell:se,labelGrid:ye,labelMonthDropdown:Xe,labelNav:$e,labelWeekday:Ze,labelWeekNumber:Er,labelWeekNumberHeader:Cn,labelYearDropdown:tr}=n,ar=k.useMemo(()=>BT(a,e.ISOWeek),[a,e.ISOWeek]),Yn=l!==void 0||d!==void 0,pr=k.useCallback(()=>{F&&(U(F),b==null||b(F))},[F,U,b]),yr=k.useCallback(()=>{q&&(U(q),c==null||c(q))},[U,q,c]),Qi=k.useCallback((ie,Oe)=>be=>{be.preventDefault(),be.stopPropagation(),W(ie),X==null||X(ie.date,Oe,be),d==null||d(ie.date,Oe,be)},[X,d,W]),Ct=k.useCallback((ie,Oe)=>be=>{W(ie),g==null||g(ie.date,Oe,be)},[g,W]),_=k.useCallback((ie,Oe)=>be=>{Re(),u==null||u(ie.date,Oe,be)},[Re,u]),w=k.useCallback((ie,Oe)=>be=>{const bn={ArrowLeft:["day",e.dir==="rtl"?"after":"before"],ArrowRight:["day",e.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[be.shiftKey?"year":"month","before"],PageDown:[be.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(bn[be.key]){be.preventDefault(),be.stopPropagation();const[gn,br]=bn[be.key];re(gn,br)}m==null||m(ie.date,Oe,be)},[re,m,e.dir]),K=k.useCallback((ie,Oe)=>be=>{v==null||v(ie.date,Oe,be)},[v]),Y=k.useCallback((ie,Oe)=>be=>{p==null||p(ie.date,Oe,be)},[p]),G=k.useCallback(ie=>Oe=>{const be=Number(Oe.target.value),bn=a.setMonth(a.startOfMonth(ie),be);U(bn)},[a,U]),x=k.useCallback(ie=>Oe=>{const be=Number(Oe.target.value),bn=a.setYear(a.startOfMonth(ie),be);U(bn)},[a,U]),{className:z,style:de}=k.useMemo(()=>({className:[i[ee.Root],e.className].filter(Boolean).join(" "),style:{...f==null?void 0:f[ee.Root],...e.style}}),[i,e.className,e.style,f]),Me=ST(e),Ue=k.useRef(null);rR(Ue,!!e.animate,{classNames:i,months:L,focused:_e,dateLib:a});const us={dayPickerProps:e,selected:Q,select:X,isSelected:B,months:L,nextMonth:q,previousMonth:F,goToMonth:U,getModifiers:V,components:t,classNames:i,styles:f,labels:n,formatters:r};return y.createElement(sm.Provider,{value:us},y.createElement(t.Root,{rootRef:e.animate?Ue:void 0,className:z,style:de,dir:e.dir,id:e.id,lang:e.lang,nonce:e.nonce,title:e.title,role:e.role,"aria-label":e["aria-label"],...Me},y.createElement(t.Months,{className:i[ee.Months],style:f==null?void 0:f[ee.Months]},!e.hideNavigation&&y.createElement(t.Nav,{className:i[ee.Nav],style:f==null?void 0:f[ee.Nav],"aria-label":$e(),onPreviousClick:pr,onNextClick:yr,previousMonth:F,nextMonth:q}),L.map((ie,Oe)=>{const be=xT(ie.date,N,D,r,a),bn=UT(N,D,r,a);return y.createElement(t.Month,{"data-animated-month":e.animate?"true":void 0,className:i[ee.Month],style:f==null?void 0:f[ee.Month],key:Oe,displayIndex:Oe,calendarMonth:ie},y.createElement(t.MonthCaption,{"data-animated-caption":e.animate?"true":void 0,className:i[ee.MonthCaption],style:f==null?void 0:f[ee.MonthCaption],calendarMonth:ie,displayIndex:Oe},o!=null&&o.startsWith("dropdown")?y.createElement(t.DropdownNav,{className:i[ee.Dropdowns],style:f==null?void 0:f[ee.Dropdowns]},o==="dropdown"||o==="dropdown-months"?y.createElement(t.MonthsDropdown,{className:i[ee.MonthsDropdown],"aria-label":Xe(),classNames:i,components:t,disabled:!!e.disableNavigation,onChange:G(ie.date),options:be,style:f==null?void 0:f[ee.Dropdown],value:a.getMonth(ie.date)}):y.createElement("span",{role:"status","aria-live":"polite"},A(ie.date,a)),o==="dropdown"||o==="dropdown-years"?y.createElement(t.YearsDropdown,{className:i[ee.YearsDropdown],"aria-label":tr(a.options),classNames:i,components:t,disabled:!!e.disableNavigation,onChange:x(ie.date),options:bn,style:f==null?void 0:f[ee.Dropdown],value:a.getYear(ie.date)}):y.createElement("span",{role:"status","aria-live":"polite"},P(ie.date,a))):y.createElement(t.CaptionLabel,{className:i[ee.CaptionLabel],role:"status","aria-live":"polite"},h(ie.date,a.options,a))),y.createElement(t.MonthGrid,{role:"grid","aria-multiselectable":l==="multiple"||l==="range","aria-label":ye(ie.date,a.options,a)||void 0,className:i[ee.MonthGrid],style:f==null?void 0:f[ee.MonthGrid]},!e.hideWeekdays&&y.createElement(t.Weekdays,{"data-animated-weekdays":e.animate?"true":void 0,className:i[ee.Weekdays],style:f==null?void 0:f[ee.Weekdays]},T&&y.createElement(t.WeekNumberHeader,{"aria-label":Cn(a.options),className:i[ee.WeekNumberHeader],style:f==null?void 0:f[ee.WeekNumberHeader],scope:"col"},I()),ar.map((gn,br)=>y.createElement(t.Weekday,{"aria-label":Ze(gn,a.options,a),className:i[ee.Weekday],key:br,style:f==null?void 0:f[ee.Weekday],scope:"col"},S(gn,a.options,a)))),y.createElement(t.Weeks,{"data-animated-weeks":e.animate?"true":void 0,className:i[ee.Weeks],style:f==null?void 0:f[ee.Weeks]},ie.weeks.map((gn,br)=>y.createElement(t.Week,{className:i[ee.Week],key:gn.weekNumber,style:f==null?void 0:f[ee.Week],week:gn},T&&y.createElement(t.WeekNumber,{week:gn,style:f==null?void 0:f[ee.WeekNumber],"aria-label":Er(gn.weekNumber,{locale:s}),className:i[ee.WeekNumber],scope:"row",role:"rowheader"},O(gn.weekNumber)),gn.days.map(Je=>{const{date:Pn}=Je,ce=V(Je);if(ce[Ne.focused]=!ce.hidden&&!!(_e!=null&&_e.isEqualTo(Je)),ce[Tn.selected]=(B==null?void 0:B(Pn))||ce.selected,Fi(Q)){const{from:gs,to:ms}=Q;ce[Tn.range_start]=!!(gs&&ms&&a.isSameDay(Pn,gs)),ce[Tn.range_end]=!!(gs&&ms&&a.isSameDay(Pn,ms)),ce[Tn.range_middle]=Xn(Q,Pn,!0,a)}const ak=GT(ce,f,e.modifiersStyles),sk=eT(ce,i,e.modifiersClassNames),ik=!Yn&&!ce.hidden?se(Pn,ce,a.options,a):void 0;return y.createElement(t.Day,{key:`${a.format(Pn,"yyyy-MM-dd")}_${a.format(Je.displayMonth,"yyyy-MM")}`,day:Je,modifiers:ce,className:sk.join(" "),style:ak,role:"gridcell","aria-selected":ce.selected||void 0,"aria-label":ik,"data-day":a.format(Pn,"yyyy-MM-dd"),"data-month":Je.outside?a.format(Pn,"yyyy-MM"):void 0,"data-selected":ce.selected||void 0,"data-disabled":ce.disabled||void 0,"data-hidden":ce.hidden||void 0,"data-outside":Je.outside||void 0,"data-focused":ce.focused||void 0,"data-today":ce.today||void 0},!ce.hidden&&Yn?y.createElement(t.DayButton,{className:i[ee.DayButton],style:f==null?void 0:f[ee.DayButton],type:"button",day:Je,modifiers:ce,disabled:ce.disabled||void 0,tabIndex:un(Je)?0:-1,"aria-label":ae(Pn,ce,a.options,a),onClick:Qi(Je,ce),onBlur:_(Je,ce),onFocus:Ct(Je,ce),onKeyDown:w(Je,ce),onMouseEnter:K(Je,ce),onMouseLeave:Y(Je,ce)},R(Pn,a.options,a)):!ce.hidden&&R(Je.date,a.options,a))}))))))})),e.footer&&y.createElement(t.Footer,{className:i[ee.Footer],style:f==null?void 0:f[ee.Footer],role:"status","aria-live":"polite"},e.footer)))}var IR=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Em=k.forwardRef((e,t)=>{var{as:r="div",className:n,above:a,below:s,variant:i,asChild:o}=e,l=IR(e,["as","className","above","below","variant","asChild"]);const{cn:u}=ne(),d=i==="show"?a:s,g=i==="show"?s:a,m=o?fr:r;return y.createElement(m,Object.assign({},l,{ref:t,className:u("navds-responsive",n,{[`navds-responsive__above--${d}`]:d,[`navds-responsive__below--${g}`]:g})}))}),_R=k.forwardRef((e,t)=>y.createElement(Em,Object.assign({},e,{ref:t,variant:"hide"}))),qi=k.forwardRef((e,t)=>y.createElement(Em,Object.assign({},e,{ref:t,variant:"show"})));function Rn(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function OR({day:e,fromDate:t,toDate:r}){const n=r&&or(e,Qn(r))>0,a=t&&or(Qn(t),e)>0;return n||a||!1}const pm="dd.MM.yyyy",SR="MMMM yyyy",ym=[pm,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...ym];const _s=(e,t,r,n,a)=>{let s;const i=ym;if(a){for(const o of i)if(s=Hr(e,o,t,{locale:r}),Rn(s)&&!Os(e,t,r,i))return s;for(const o of[...i.map(l=>l.replace("yyyy","yy"))])if(s=Hr(e,o,t,{locale:r}),Rn(s)&&Os(e,t,r,i)){const l=DR(e,o,t,r);return Rn(new Date(l))?new Date(l):new Date("Invalid date")}return new Date("Invalid date")}for(const o of i)if(s=Hr(e,o,t,{locale:r}),Rn(s)&&!Os(e,t,r,i))return s;return new Date("Invalid date")};function Os(e,t,r,n){let a;const s=n.map(i=>i.replace("yyyy","yy"));for(const i of s)if(a=Hr(e,i,t,{locale:r}),Rn(a))return!0;return!1}function DR(e,t,r,n){const a=Hr(ol(e,"19"),t.replace("yy","yyyy"),r,{locale:n}),s=Hr(ol(e,"20"),t.replace("yy","yyyy"),r,{locale:n});return Rn(a)&&Rn(s)?Vt(a,$h(new Date,{years:80}))?s:a:new Date("Invalid date")}function ol(e,t){const r=e.slice(-2);return`${e.slice(0,e.length-2)}${t}${r}`}const lt=(e,t,r,n)=>Lr(e,n??pm,{locale:t}),PR=({month:e,start:t,end:r})=>{if(!e)return;let n=e;return t&&Vt(n,t)&&(n=t),r&&_g(n,r)&&(n=r),Pr(n)};function LR(e,t,r,n){return Ag({start:qt(e),end:Qa(e)}).map(i=>{const o=Lr(i,"LLLL",{locale:n}),l=Pi(i),u=t&&i<Pr(t)||r&&i>Pr(r)||!1;return{value:l,label:o,disabled:u}})}function wR(e,t,r){if(!e||!t)return;const n=qt(e),a=Qa(t),s=[];let i=n;for(;Vt(i,a)||Lg(i,a);)s.push(i),i=Ii(i,1);return s.map(o=>{const l=Lr(o,"yyyy",{locale:r});return{value:Li(o),label:l,disabled:!1}})}function jR({captionLayout:e,startMonth:t,endMonth:r,today:n}){const a=e==="dropdown",s=n??new Date;return t?t=Pr(t):!t&&a&&(t=qt(Ii(s,-100))),r?r=hg(r):!r&&a&&(r=Qa(s)),[t&&Qn(t),r&&Qn(r)]}var MR=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const KR=e=>{var{day:t,modifiers:r,locale:n,children:a}=e,s=MR(e,["day","modifiers","locale","children"]);const{cn:i}=ne(),o=k.useRef(null);return k.useEffect(()=>{var l;r.focused&&((l=o.current)===null||l===void 0||l.focus())},[r.focused]),r.hidden?y.createElement(y.Fragment,null):y.createElement("button",Object.assign({},s,{ref:o,"aria-hidden":t.outside,"aria-pressed":!!r.selected,"aria-label":Lr(t.date,"cccc d",{locale:n}),"data-pressed":r.selected,"data-today":r.today||void 0,className:i(s.className,{"rdp-day_disabled":r.disabled,"rdp-day_selected":r.selected,"rdp-day_range_start":r.range_start,"rdp-day_range_middle":r.range_middle,"rdp-day_range_end":r.range_end,"rdp-day_today":r.today,"rdp-day_outside":r.outside,"rdp-day__weekend":r.weekend})}),a)};var FR=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const ai=k.forwardRef((e,t)=>{const{inputProps:r,errorId:n,showErrorMsg:a,hasError:s,size:i,inputDescriptionId:o,readOnly:l}=it(e,"select"),{children:u,label:d,className:g,description:m,htmlSize:v,hideLabel:p=!1,style:c}=e,b=FR(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:T}=ne(),f={onMouseDown:h=>{l&&(h.preventDefault(),h.target.focus())},onKeyDown:h=>{l&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(h.key)&&h.preventDefault()}};return y.createElement("div",{className:T(g,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":l,"navds-select--error":s,"navds-select--readonly":l})},y.createElement(Ie,{htmlFor:r.id,size:i,className:T("navds-form-field__label",{"navds-sr-only":p})},l&&y.createElement(Ug,null),d),!!m&&y.createElement(te,{className:T("navds-form-field__description",{"navds-sr-only":p}),id:o,size:i,as:"div"},m),y.createElement("div",{className:T("navds-select__container"),style:c},y.createElement("select",Object.assign({},on(b,["error","errorId","size","readOnly"]),r,f,{ref:t,className:T("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:v}),u),y.createElement($a,{className:T("navds-select__chevron"),"aria-hidden":!0})),y.createElement("div",{className:T("navds-form-field__error"),id:n,"aria-relevant":"additions removals","aria-live":"polite"},a&&y.createElement(Pt,{size:i,showIcon:!0},e.error)))}),bm=({week:{weekNumber:e,days:t},onWeekNumberClick:r,className:n,style:a,showOnDesktop:s})=>{const i=rs().translate,{cn:o}=ne(),{getModifiers:l}=Mr(),u=k.useMemo(()=>t.filter(g=>{const m=l(g);return!(m.hidden||m.outside||m.disabled)}).length===0,[t,l]),d=s?qi:_R;return!r||u?y.createElement(d,{above:"sm",asChild:!0},y.createElement("td",{className:"rdp-cell"},y.createElement(Wr,{as:"span",textColor:"subtle",className:n,style:a,"aria-label":i("weekNumber",{week:e})},e))):y.createElement(d,{above:"sm",asChild:!0},y.createElement("td",{className:o("rdp-cell",{"navds-date__week-wrapper":!s})},y.createElement(xe,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":i("selectWeekNumber",{week:e}),style:a,className:o("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{r(e,t.map(g=>g.date))},icon:y.createElement("span",{className:"navds-date__weeknumber-number"},e)})))},qR=({onWeekNumberClick:e,weeks:t})=>{const r=rs().translate,{cn:n}=ne(),a=Nn();return e?y.createElement(qi,{below:"sm",asChild:!0},y.createElement("table",{className:"rdp-table",role:"grid"},y.createElement("tbody",{className:"rdp-tbody"},y.createElement("tr",{className:n("rdp-row navds-date__week-row")},y.createElement(Wr,{as:"th",weight:"semibold",className:n("rdp-cell navds-date__week-cell")},y.createElement("span",{className:n("navds-date__week-wrapper"),id:a},r("week"))),t==null?void 0:t.map(s=>y.createElement(bm,{key:s.weekNumber,week:s,onWeekNumberClick:e,showOnDesktop:!1,className:n("navds-date__week-wrapper")})))))):null};var VR=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const xR=e=>{var{children:t,calendarMonth:r,locale:n,onWeekNumberClick:a}=e,s=VR(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:i,goToMonth:o,previousMonth:l,nextMonth:u}=Mr(),{captionLayout:d}=i,{cn:g}=ne(),m=rs().translate,v=k.useCallback((h,R)=>{const A=Number(R.target.value),O=wg(Pr(h),A);o(O)},[o]),p=k.useCallback((h,R)=>{const A=Number(R.target.value),O=jg(Pr(h),A);o(O)},[o]),[c,b]=jR({captionLayout:d==="dropdown"?"dropdown":"label",startMonth:i.startMonth,endMonth:i.endMonth,today:i.today}),T=LR(r.date,c,b,n),f=wR(c,b,n);return y.createElement("div",Object.assign({},on(s,["displayIndex"])),y.createElement("div",{className:g("navds-date__caption")},(d==null?void 0:d.startsWith("dropdown"))&&y.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:g("navds-sr-only")},Lr(r.date,"LLLL y",{locale:n})),y.createElement(xe,{variant:"tertiary-neutral",disabled:!l,onClick:()=>l&&o(l),icon:y.createElement(Cc,{title:m("goToPreviousMonth")}),className:g("navds-date__caption-button"),type:"button"}),d!=null&&d.startsWith("dropdown")?y.createElement("div",{className:g("navds-date__caption")},y.createElement(ai,{label:m("month"),hideLabel:!0,className:g("navds-date__caption__month"),onChange:h=>v(r.date,h),value:Pi(r.date)},T==null?void 0:T.map(({value:h,label:R,disabled:A})=>y.createElement("option",{key:h,value:h,disabled:A},R))),y.createElement(ai,{label:m("year"),hideLabel:!0,className:g("navds-date__caption__year"),onChange:h=>p(r.date,h),value:Li(r.date)},f==null?void 0:f.map(({value:h,label:R,disabled:A})=>y.createElement("option",{key:h,value:h,disabled:A},R)))):y.createElement(te,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:g("navds-date__caption-label")},Lr(r.date,"LLLL y",{locale:n})),y.createElement(xe,{variant:"tertiary-neutral",icon:y.createElement($c,{title:m("goToNextMonth")}),onClick:()=>u&&o(u),disabled:!u,className:g("navds-date__caption-button"),type:"button"})),y.createElement(qR,{weeks:r.weeks,onWeekNumberClick:a}),t)};var GR=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const BR={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},hm=e=>{var{className:t,dropdownCaption:r,disabled:n=[],disableWeekends:a=!1,showWeekNumber:s=!1,selected:i,fixedWeeks:o=!1,onWeekNumberClick:l,fromDate:u,toDate:d,month:g,mode:m,handleSelect:v,locale:p}=e,c=GR(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:b}=ne(),T=pg(),f=p?Yg(p):T,h=m??"single";return y.createElement(NR,Object.assign({captionLayout:r?"dropdown":"label",hideNavigation:!0,locale:f,mode:h,onSelect:(R,A)=>{if(h!=="range"||R||!rm(i)){v(R);return}if(!i.to){v({from:A,to:void 0});return}let O;_i(i.to,A)?O=void 0:Vt(A,i.to)?O={from:A,to:i.to}:O={from:i.to,to:A},v(O)},selected:i,classNames:BR,components:{MonthCaption:()=>y.createElement(y.Fragment,null),DayButton:k.useCallback(R=>y.createElement(KR,Object.assign({},R,{locale:f})),[f]),Month:k.useCallback(R=>y.createElement(xR,Object.assign({},R,{locale:f,onWeekNumberClick:h==="multiple"?l:void 0})),[f,h,l]),Day:k.useCallback(R=>y.createElement("td",Object.assign({},on(R,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:k.useCallback(R=>y.createElement(bm,Object.assign({},R,{showOnDesktop:!0,onWeekNumberClick:h==="multiple"?l:void 0})),[h,l]),WeekNumberHeader:k.useCallback(R=>y.createElement(qi,{above:"sm",asChild:!0},y.createElement("th",Object.assign({},R))),[]),Weekdays:k.useCallback(R=>y.createElement("thead",Object.assign({},R,{className:"rdp-head","aria-hidden":!0}),y.createElement("tr",{className:"rdp-head_row"},R.children)),[])},className:b("navds-date",t),disabled:R=>a&&wa(R)||cn(R,n)||OR({day:R,fromDate:u,toDate:d}),weekStartsOn:1,modifiers:{weekend:R=>a&&wa(R)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:s,fixedWeeks:o,showOutsideDays:!0,startMonth:u,endMonth:d,month:PR({month:g,start:u,end:d})},on(c,["onSelect","role","id","defaultSelected"])))};var UR=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const HR=k.forwardRef((e,t)=>{var{className:r,locale:n,translations:a,selected:s,defaultSelected:i,onSelect:o,mode:l}=e,u=UR(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:d}=ne(),g=er("DatePicker",a,$g(n)),[m,v]=At({defaultValue:i,value:s,onChange:p=>o==null?void 0:o(p)});return y.createElement(Wg,{translate:g},y.createElement("div",{ref:t,className:d("navds-date__standalone-wrapper",r)},y.createElement(hm,Object.assign({},u,{locale:n,handleSelect:v,selected:m,mode:l}))))});var CR=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Fa=k.forwardRef((e,t)=>{var{children:r,locale:n,translations:a,selected:s,id:i,defaultSelected:o,wrapperClassName:l,open:u,onClose:d,onOpenToggle:g,strategy:m,mode:v}=e,p=CR(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const c=er("DatePicker",a,$g(n)),{cn:b}=ne(),T=Nn(i),[f,h]=At({defaultValue:!1,value:u}),[R,A]=k.useState(null),O=nt(A,t),[I,S]=At({defaultValue:o,value:s,onChange:P=>{var M;let j=!1;v==="single"&&P?j=!0:rm(P)&&P.from&&P.to&&(j=!0,_i(P.from,P.to)&&(j=!1)),j&&(d==null||d(),h(!1)),(M=p==null?void 0:p.onSelect)===null||M===void 0||M.call(p,P)}});return y.createElement(Wg,{translate:c},y.createElement(_A,{open:f,onOpen:()=>{h(P=>!P),g==null||g()},ariaId:T,defined:!0},y.createElement("div",{ref:O,className:b("navds-date__wrapper",l)},r,y.createElement($A,{open:f,anchor:R,onClose:()=>{d==null||d(),f&&h(!1)},locale:n,translate:c,variant:v??"single",popoverProps:{id:T,strategy:m}},y.createElement(hm,Object.assign({},p,{locale:n,handleSelect:S,selected:I,mode:v}))))))});Fa.Standalone=HR;Fa.Input=OA;const YR=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),$R=(e={})=>{var t;const{locale:r,required:n,defaultSelected:a,today:s=new Date,fromDate:i,toDate:o,disabled:l,disableWeekends:u,onDateChange:d,inputFormat:g,onValidate:m,defaultMonth:v,allowTwoDigitYear:p=!0}=e,[c,b]=k.useState(null),T=pg(),f=r?Yg(r):T,[h,R]=k.useState(a),[A,O]=k.useState((t=h??v)!==null&&t!==void 0?t:s),[I,S]=k.useState(h),[P,M]=k.useState(!1),j=h?lt(h,f,"date",g):"",[L,N]=k.useState(j),D=k.useCallback(re=>{var W,ae;M(re),re&&O((ae=(W=I??h)!==null&&W!==void 0?W:v)!==null&&ae!==void 0?ae:s)},[v,h,I,s]),F=re=>{d==null||d(re),S(re)},q=(re={})=>m==null?void 0:m(YR(re));return{datepickerProps:{month:A,onMonthChange:O,onDayClick:(re,{selected:W})=>{if(!(W&&n)){if(re&&!W&&(D(!1),c==null||c.focus()),W){F(void 0),N(""),q({isValidDate:!1,isEmpty:!0});return}F(re),q(),O(re),N(re?lt(re,f,"date",g):"")}},selected:I??new Date("Invalid date"),locale:r,fromDate:i,toDate:o,today:s,open:P,onClose:()=>{D(!1),c==null||c.focus()},onOpenToggle:()=>D(!P),disabled:l,disableWeekends:u},inputProps:{onChange:re=>{N(re.target.value);const W=_s(re.target.value,s,f,"date",p),ae=i&&W&&or(i,W)>0,se=o&&W&&or(W,o)>0;if(!Rn(W)||u&&wa(W)||l&&cn(W,l)){F(void 0),q({isInvalid:!Rn(W),isWeekend:u&&wa(W),isDisabled:l&&cn(W,l),isValidDate:!1,isEmpty:!re.target.value,isBefore:ae??!1,isAfter:se??!1});return}if(ae||se){F(void 0),q({isValidDate:!1,isBefore:ae??!1,isAfter:se??!1});return}F(W),q(),O(v??W)},onFocus:re=>{if(re.target.readOnly)return;const W=_s(re.target.value,s,f,"date",p);if(Rn(W)){N(lt(W,f,"date",g));const ae=i&&W&&or(i,W)>0,se=o&&W&&or(W,o)>0;!ae&&!se&&O(W)}},onBlur:re=>{const W=_s(re.target.value,s,f,"date",p);Rn(W)&&N(lt(W,f,"date",g))},value:L,setAnchorRef:b},reset:()=>{var re;F(h),O((re=h??v)!==null&&re!==void 0?re:s),N(j??""),R(a)},selectedDay:I,setSelected:re=>{var W;F(re),O((W=re??v)!==null&&W!==void 0?W:s),N(re?lt(re,f,"date",g):"")}}};function ze(e,t,r,n){return n?typeof n=="string"?{[`--__${e}c-${t}-${r}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([a,s])=>[`--__${e}c-${t}-${r}-${a}`,s])):{}}const WR={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},ll=(e,t,r,n,a,s)=>t.split(" ").map((i,o,l)=>{var u;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/l.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/l.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let d=`var(--${s}-${r}-${i})`;if(n.includes(i))d=i==="px"?"1px":i;else if(i.startsWith("space"))d=`var(--${s}-${i})`;else{const g=`--${s}-spacing-${i}`;d=`var(${(u=WR[g])!==null&&u!==void 0?u:g})`}return a?i==="0"?"0":`calc(-1 * ${d})`:d}).join(" ");function vn(e,t,r,n,a,s=!1,i=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${t}-${r}-xs`]:ll(r,a,n,i,s,e)};const o={};return Object.entries(a).forEach(([l,u])=>{o[`--__${e}c-${t}-${r}-${l}`]=ll(r,u,n,i,s,e)}),o}const zR=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],JR=({children:e,className:t,padding:r,paddingInline:n,paddingBlock:a,margin:s,marginInline:i,marginBlock:o,width:l,minWidth:u,maxWidth:d,height:g,minHeight:m,maxHeight:v,position:p,inset:c,top:b,right:T,left:f,bottom:h,overflow:R,overflowX:A,overflowY:O,flexBasis:I,flexGrow:S,flexShrink:P,gridColumn:M})=>{const j=Dt(!1),{cn:L}=ne(),N=j?"ax":"a",D=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},vn(N,"r","p","spacing",r)),vn(N,"r","pi","spacing",n)),vn(N,"r","pb","spacing",a)),vn(N,"r","m","spacing",s)),vn(N,"r","mi","spacing",i)),vn(N,"r","mb","spacing",o)),ze(N,"r","w",l)),ze(N,"r","minw",u)),ze(N,"r","maxw",d)),ze(N,"r","h",g)),ze(N,"r","minh",m)),ze(N,"r","maxh",v)),ze(N,"r","position",p)),vn(N,"r","inset","spacing",c)),vn(N,"r","top","spacing",b)),vn(N,"r","right","spacing",T)),vn(N,"r","bottom","spacing",h)),vn(N,"r","left","spacing",f)),ze(N,"r","overflow",R)),ze(N,"r","overflowx",A)),ze(N,"r","overflowy",O)),ze(N,"r","flex-basis",I)),ze(N,"r","flex-grow",S)),ze(N,"r","flex-shrink",P)),ze(N,"r","grid-column",M));return y.createElement(fr,{className:L({className:t,"navds-r-p":r,"navds-r-pi":n,"navds-r-pb":a,"navds-r-m":s,"navds-r-mi":i,"navds-r-mb":o,"navds-r-w":l,"navds-r-minw":u,"navds-r-maxw":d,"navds-r-h":g,"navds-r-minh":m,"navds-r-maxh":v,"navds-r-position":p,"navds-r-inset":c,"navds-r-top":b,"navds-r-right":T,"navds-r-bottom":h,"navds-r-left":f,"navds-r-overflow":R,"navds-r-overflowx":A,"navds-r-overflowy":O,"navds-r-flex-basis":I,"navds-r-flex-grow":S,"navds-r-flex-shrink":P,"navds-r-grid-column":M}),style:D},e)};var XR=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Am=k.forwardRef((e,t)=>{var{children:r,className:n,as:a="div",align:s,justify:i,wrap:o=!0,gap:l,style:u,direction:d="row",asChild:g}=e,m=XR(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const p=Dt(!1)?"ax":"a",{cn:c}=ne(),b=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},u),vn(p,"stack","gap","spacing",l)),ze(p,"stack","direction",d)),ze(p,"stack","align",s)),ze(p,"stack","justify",i)),T=g?fr:a;return y.createElement(JR,Object.assign({},m),y.createElement(T,Object.assign({},on(m,zR),{ref:t,style:b,className:c("navds-stack",n,{"navds-vstack":d==="column","navds-hstack":d==="row","navds-stack-gap":l,"navds-stack-align":s,"navds-stack-justify":i,"navds-stack-direction":d,"navds-stack-wrap":o})}),r))});var ZR=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const De=k.forwardRef((e,t)=>{var{as:r="div"}=e,n=ZR(e,["as"]);return y.createElement(Am,Object.assign({as:r},n,{ref:t,direction:"row"}))});var QR=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Be=k.forwardRef((e,t)=>{var{as:r="div"}=e,n=QR(e,["as"]);return y.createElement(Am,Object.assign({as:r},n,{ref:t,direction:"column",wrap:!1}))}),Cr=()=>{const{cn:e}=ne();return y.createElement("span",{className:e("navds-stack__spacer")})};var e0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Vi=k.forwardRef((e,t)=>{var{as:r="a",className:n,underline:a=!0,variant:s="action",inlineText:i=!1}=e,o=e0(e,["as","className","underline","variant","inlineText"]);const{cn:l}=ne();return y.createElement(r,Object.assign({},o,{ref:t,className:l("navds-link",n,`navds-link--${s}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":i})}))});var n0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const r0=k.forwardRef((e,t)=>{var{className:r}=e,n=n0(e,["className"]);const{cn:a}=ne();return y.createElement("tbody",Object.assign({},n,{ref:t,className:a("navds-table__body",r)}))});var t0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Tm=k.forwardRef((e,t)=>{var{className:r,children:n,align:a,textSize:s}=e,i=t0(e,["className","children","align","textSize"]);const{cn:o}=ne();return y.createElement("th",Object.assign({ref:t,className:o("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${a}`]:a,"navds-label--small":s==="small"})},i),n)}),Rm=k.createContext(null);var a0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const s0=k.forwardRef((e,t)=>{var r,n,a,s,{className:i,children:o,sortable:l=!1,sortKey:u}=e,d=a0(e,["className","children","sortable","sortKey"]);const g=k.useContext(Rm),{cn:m}=ne();return l&&!u&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),y.createElement(Tm,Object.assign({scope:"col",ref:t,className:m(i),"aria-sort":l?((r=g==null?void 0:g.sort)===null||r===void 0?void 0:r.orderBy)===u?(n=g==null?void 0:g.sort)===null||n===void 0?void 0:n.direction:"none":void 0},d),l?y.createElement("button",{type:"button",className:m("navds-table__sort-button"),onClick:l&&u?()=>{var v;return(v=g==null?void 0:g.onSortChange)===null||v===void 0?void 0:v.call(g,u)}:void 0},o,((a=g==null?void 0:g.sort)===null||a===void 0?void 0:a.orderBy)===u?((s=g==null?void 0:g.sort)===null||s===void 0?void 0:s.direction)==="descending"?y.createElement(AE,{"aria-hidden":!0}):y.createElement(RE,{"aria-hidden":!0}):y.createElement(zc,{"aria-hidden":!0})):o)});var i0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Nm=k.forwardRef((e,t)=>{var{className:r,children:n="",align:a,textSize:s}=e,i=i0(e,["className","children","align","textSize"]);const{cn:o}=ne();return y.createElement(te,Object.assign({as:"td",ref:t,className:o("navds-table__data-cell",r,{[`navds-table__data-cell--align-${a}`]:a}),size:s},i),n)});var o0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const l0=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function d0(e){const t=parseFloat(e);return!Number.isNaN(t)&&Number.isFinite(t)}function dl(e){return typeof e=="string"&&e[e.length-1]==="%"&&d0(e.substring(0,e.length-1))}function Ss(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="none")}function u0(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="")}const g0=e=>{var{children:t,className:r,innerClassName:n,duration:a=250,easing:s="ease",height:i}=e,o=o0(e,["children","className","innerClassName","duration","easing","height"]);const{cn:l}=ne(),u=k.useRef(i),d=k.useRef(null),g=k.useRef(),m=k.useRef(),v=k.useRef(i),p=k.useRef("visible"),c=l0?0:a;typeof v.current=="number"?(typeof i!="string"&&(v.current=i<0?0:i),p.current="hidden"):dl(v.current)&&(v.current=i==="0%"?0:i,p.current="hidden");const[b,T]=k.useState(v.current),[f,h]=k.useState(p.current),[R,A]=k.useState(!1);k.useEffect(()=>{Ss(d.current,v.current)},[]),k.useEffect(()=>{if(i!==u.current&&d.current){u0(d.current,u.current),d.current.style.overflow="hidden";const P=d.current.offsetHeight;d.current.style.overflow="";const M=c;let j,L,N="hidden",D;const F=u.current==="auto";typeof i=="number"?(j=i<0?0:i,L=j):dl(i)?(j=i==="0%"?0:i,L=j):(j=P,L="auto",N=void 0),F&&(L=j,j=P),T(j),h("hidden"),A(!F),clearTimeout(m.current),clearTimeout(g.current),F?(D=!0,m.current=setTimeout(()=>{T(L),h(N),A(D)},50),g.current=setTimeout(()=>{A(!1),Ss(d.current,L)},M)):m.current=setTimeout(()=>{T(L),h(N),A(!1),i!=="auto"&&Ss(d.current,j)},M)}return u.current=i,()=>{clearTimeout(m.current),clearTimeout(g.current)}},[i]);const O={height:b,overflow:f};R&&(O.transition=`height ${c}ms ${s} 0ms`,O.WebkitTransition=O.transition);const S=typeof o["aria-hidden"]<"u"?o["aria-hidden"]:i===0;return y.createElement("div",Object.assign({},o,{className:l(r),style:O}),y.createElement("div",{"aria-hidden":S,className:l(n),ref:d},t))};var m0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Im=k.forwardRef((e,t)=>{var{className:r,selected:n=!1,shadeOnHover:a=!0}=e,s=m0(e,["className","selected","shadeOnHover"]);const{cn:i}=ne();return y.createElement("tr",Object.assign({},s,{ref:t,className:i("navds-table__row",r,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":a})}))});var k0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const f0=k.forwardRef((e,t)=>{var{className:r,children:n,content:a,togglePlacement:s="left",defaultOpen:i=!1,open:o,onOpenChange:l,expansionDisabled:u=!1,expandOnRowClick:d=!1,colSpan:g=999,contentGutter:m,onClick:v}=e,p=k0(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:c}=ne(),[b,T]=At({defaultValue:i,value:o,onChange:l}),f=er("global"),h=Nn(),R=O=>{T(I=>!I),O.stopPropagation()},A=O=>{d&&!u&&!_m(O.target)&&R(O)};return y.createElement(y.Fragment,null,y.createElement(Im,Object.assign({},p,{ref:t,className:c("navds-table__expandable-row",r,{"navds-table__expandable-row--open":b,"navds-table__expandable-row--expansion-disabled":u,"navds-table__expandable-row--clickable":d}),onClick:Br(v,A)}),s==="right"&&n,y.createElement(Nm,{className:c("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":b}),onClick:u?()=>null:R},!u&&y.createElement("button",{className:c("navds-table__toggle-expand-button"),type:"button","aria-controls":h,"aria-expanded":b,onClick:R},y.createElement($a,{className:c("navds-table__expandable-icon"),title:f(b?"showLess":"showMore")}))),s==="left"&&n),y.createElement("tr",{"data-state":b?"open":"closed",className:c("navds-table__expanded-row"),"aria-hidden":!b,id:h},y.createElement("td",{colSpan:g,className:c("navds-table__expanded-row-cell")},y.createElement(g0,{className:c("navds-table__expanded-row-collapse"),innerClassName:c(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${m??s}`),height:b?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},a))))});function _m(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:_m(e.parentElement)}var v0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const c0=k.forwardRef((e,t)=>{var{className:r}=e,n=v0(e,["className"]);const{cn:a}=ne();return y.createElement("thead",Object.assign({},n,{ref:t,className:a("navds-table__header",r)}))});var E0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Le=k.forwardRef((e,t)=>{var{className:r,zebraStripes:n=!1,size:a="medium",onSortChange:s,sort:i}=e,o=E0(e,["className","zebraStripes","size","onSortChange","sort"]);const{cn:l}=ne();return y.createElement(Rm.Provider,{value:{onSortChange:s,sort:i}},y.createElement("table",Object.assign({},o,{ref:t,className:l("navds-table",`navds-table--${a}`,r,{"navds-table--zebra-stripes":n})})))});Le.Header=c0;Le.Body=r0;Le.Row=Im;Le.ColumnHeader=s0;Le.HeaderCell=Tm;Le.DataCell=Nm;Le.ExpandableRow=f0;var p0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const y0=k.forwardRef((e,t)=>{var{children:r,className:n,variant:a,size:s="medium",icon:i}=e,o=p0(e,["children","className","variant","size","icon"]);const{cn:l}=ne(),u=(a==null?void 0:a.endsWith("-filled"))&&"strong",d=(a==null?void 0:a.endsWith("-moderate"))&&"moderate",g=a==null?void 0:a.replace("-filled","").replace("-moderate","");return y.createElement(te,Object.assign({},o,{ref:t,as:"span",size:s==="medium"?"medium":"small",className:l("navds-tag",n,`navds-tag--${a}`,`navds-tag--${s}`,`navds-tag--${u||d||"outline"}`,`navds-tag--${g}`)}),i&&y.createElement("span",{className:l("navds-tag__icon--left")},i),r)});var b0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const h0=k.forwardRef((e,t)=>{var{children:r,className:n,arrow:a=!0,placement:s="top",open:i,defaultOpen:o=!1,onOpenChange:l,offset:u,content:d,delay:g=150,id:m,keys:v,maxChar:p=80,describesChild:c=!1}=e,b=b0(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:T}=ne(),[f,h]=At({defaultValue:o,value:i,onChange:l}),R=k.useRef(null),A=Lt(!1),O=A?A.ref.current:void 0,{x:I,y:S,strategy:P,context:M,placement:j,middlewareData:{arrow:{x:L,y:N}={},hide:{referenceHidden:D}={}},refs:F}=Bg({placement:s,open:f,onOpenChange:Q=>h(Q),middleware:[fg(u??(a?8:4)),vg(),cg({padding:5,fallbackPlacements:["bottom","top"]}),Eg({element:R,padding:5})],whileElementsMounted:A?(Q,Re,_e)=>Qs(Q,Re,_e,{animationFrame:!0}):Qs,strategy:A?"fixed":void 0}),{getReferenceProps:q,getFloatingProps:U}=AA([gA(M,{handleClose:RA(),restMs:g}),hA(M),bA(M)]),V=Nn(m),B=nt(t,F.setFloating);if(!r||(r==null?void 0:r.type)===y.Fragment||r===y.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;(d==null?void 0:d.length)>p&&f&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${d.length}
Tooltip-content: ${d}`);const X=c?f?{"aria-describedby":V}:{title:d}:{"aria-label":d};return y.createElement(y.Fragment,null,y.createElement(fr,Object.assign({ref:F.setReference},q(),X,{"aria-keyshortcuts":v?v.join("+"):void 0}),r),y.createElement(hy,{rootElement:O,asChild:!0},f&&y.createElement("div",Object.assign({},U(Object.assign(Object.assign({},b),{ref:B,style:{position:P,top:S??0,left:I??0,visibility:D?"hidden":"visible"},role:"tooltip",id:V,className:T("navds-tooltip","navds-detail navds-detail--small",n)})),{"data-side":j,"data-state":"open"}),d,v&&y.createElement("span",{className:T("navds-tooltip__keys"),"aria-hidden":!0},v.map(Q=>y.createElement(Wr,{as:"kbd",key:Q,className:T("navds-tooltip__key")},Q))),a&&y.createElement("div",{ref:Q=>{R.current=Q},className:T("navds-tooltip__arrow"),style:{left:L!=null?`${L}px`:"",top:N!=null?`${N}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[j]]:"-3.5px"}}))))}),A0=e=>{const t=it(e,"fieldset"),{inputProps:r}=t;return Object.assign(Object.assign({},t),{inputProps:{"aria-invalid":r["aria-invalid"],"aria-describedby":r["aria-describedby"]}})};var T0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const R0=k.forwardRef((e,t)=>{var r,n,a;const{inputProps:s,errorId:i,showErrorMsg:o,hasError:l,size:u,readOnly:d,inputDescriptionId:g}=A0(e),{cn:m}=ne(),v=k.useContext(Ka),{children:p,className:c,errorPropagation:b=!0,legend:T,description:f,hideLegend:h,nativeReadOnly:R=!0}=e,A=T0(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return y.createElement(Ka.Provider,{value:{error:b?(r=e.error)!==null&&r!==void 0?r:v==null?void 0:v.error:void 0,errorId:kr({[i]:o,[(n=v==null?void 0:v.errorId)!==null&&n!==void 0?n:""]:!!(v!=null&&v.error)}),size:u,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:d}},y.createElement("fieldset",Object.assign({},on(A,["errorId","error","size","readOnly"]),on(s,["aria-describedby","aria-invalid"]),{ref:t,className:m(c,"navds-fieldset",`navds-fieldset--${u}`,{"navds-fieldset--error":l,"navds-fieldset--readonly":d})}),y.createElement(Ie,{size:u,as:"legend",className:m("navds-fieldset__legend",{"navds-sr-only":!!h})},d&&(R?y.createElement(ns,null):y.createElement(Ug,null)),T),!!f&&y.createElement(te,{className:m("navds-fieldset__description",{"navds-sr-only":!!h}),id:g,size:u??"medium",as:"div"},e.description),p,y.createElement("div",{id:i,"aria-relevant":"additions removals","aria-live":"polite",className:m("navds-fieldset__error")},o&&y.createElement(Pt,{size:u,showIcon:!0},e.error))))});var N0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Om=y.createContext(null),I0=k.forwardRef((e,t)=>{var r,n,{children:a,className:s,name:i,defaultValue:o,value:l,onChange:u=()=>{},required:d,readOnly:g}=e,m=N0(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:v}=ne(),p=k.useContext(Ka),c=Nn();return y.createElement(R0,Object.assign({},m,{readOnly:g,ref:t,className:v(s,"navds-radio-group",`navds-radio-group--${(n=(r=m.size)!==null&&r!==void 0?r:p==null?void 0:p.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),y.createElement(Om.Provider,{value:{name:i??`radioGroupName-${c}`,defaultValue:o,value:l,onChange:u,required:d}},y.createElement("div",{className:v("navds-radio-buttons")},a)))});var _0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const O0=e=>{const t=k.useContext(Om),r=it(on(e,["description"]),"radio"),{inputProps:n,readOnly:a}=r,s=_0(r,["inputProps","readOnly"]);return t||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},s),{readOnly:a,inputProps:Object.assign(Object.assign({},n),{name:t==null?void 0:t.name,defaultChecked:(t==null?void 0:t.defaultValue)===void 0?void 0:(t==null?void 0:t.defaultValue)===e.value,checked:(t==null?void 0:t.value)===void 0?void 0:(t==null?void 0:t.value)===e.value,onChange:i=>{var o,l;a||((o=e.onChange)===null||o===void 0||o.call(e,i),(l=t==null?void 0:t.onChange)===null||l===void 0||l.call(t,e.value))},onClick:i=>{var o;if(a){i.preventDefault();return}(o=e==null?void 0:e.onClick)===null||o===void 0||o.call(e,i)},required:t==null?void 0:t.required,type:"radio"})})},ul=k.forwardRef((e,t)=>{const{cn:r}=ne(),{inputProps:n,size:a,hasError:s,readOnly:i}=O0(e),o=Nn(),l=Nn();return y.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":s,"navds-radio--disabled":n.disabled,"navds-radio--readonly":i})},y.createElement("input",Object.assign({},on(e,["children","size","description","readOnly"]),on(n,["aria-invalid"]),{"aria-labelledby":kr(o,!!e["aria-labelledby"]&&e["aria-labelledby"],{[l]:e.description}),className:r("navds-radio__input"),ref:t})),y.createElement("label",{htmlFor:n.id,className:r("navds-radio__label")},y.createElement("span",{className:r("navds-radio__content")},y.createElement(te,{as:"span",id:o,size:a,"aria-hidden":!0},e.children),e.description&&y.createElement(te,{as:"span",id:l,size:a,className:r("navds-form-field__subdescription navds-radio__description"),"aria-hidden":!0},e.description))))});var S0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const gl=(e,t,r)=>{const{outerHeightStyle:n,overflow:a}=t;return r.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==a)?(r.current+=1,t):e},ml=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function Jt(e){return parseInt(e,10)||0}const D0=k.forwardRef((e,t)=>{var r,n,{className:a,onChange:s,maxRows:i,minRows:o=1,autoScrollbar:l,style:u,value:d}=e,g=S0(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:m}=k.useRef(d!=null),v=k.useRef(null),p=nt(v,t),c=k.useRef(null),b=k.useRef(0),[T,f]=k.useState({outerHeightStyle:0}),h=y.useCallback(()=>{const I=v.current,P=ml(I).getComputedStyle(I);if(P.width==="0px")return{outerHeightStyle:0};const M=c.current;M.style.width=P.width,M.value=I.value||g.placeholder||"x",M.value.slice(-1)===`
`&&(M.value+=" ");const j=P.boxSizing,L=Jt(P.paddingBottom)+Jt(P.paddingTop),N=Jt(P.borderBottomWidth)+Jt(P.borderTopWidth),D=M.scrollHeight-L;M.value="x";const F=M.scrollHeight-L;let q=D;o&&(q=Math.max(Number(o)*F,q)),i&&(q=Math.min(Number(i)*F,q)),q=Math.max(q,F);const U=q+(j==="border-box"?L+N:0),V=Math.abs(q-D)<=1;return{outerHeightStyle:U,overflow:V}},[i,o,g.placeholder]),R=()=>{const I=h();kl(I)||f(S=>gl(S,I,b))};zr(()=>{const I=()=>{const L=h();kl(L)||Oa.flushSync(()=>{f(N=>gl(N,L,b))})},S=Gu(()=>{var L,N,D;if(b.current=0,!((L=v.current)===null||L===void 0)&&L.style.height||!((N=v.current)===null||N===void 0)&&N.style.width){((D=v.current)===null||D===void 0?void 0:D.style.overflow)==="hidden"&&f(F=>Object.assign(Object.assign({},F),{overflow:!1}));return}I()},166,!0),P=v.current,M=ml(P);M.addEventListener("resize",S);let j;return typeof ResizeObserver<"u"&&(j=new ResizeObserver(S),j.observe(P)),()=>{S.clear(),M.removeEventListener("resize",S),j&&j.disconnect()}},[h]),zr(()=>{R()}),k.useEffect(()=>{b.current=0},[d]);const A=I=>{b.current=0,m||R(),s&&s(I)},O=Object.assign({"--__ac-textarea-height":T.outerHeightStyle+"px","--__axc-textarea-height":T.outerHeightStyle+"px",overflow:T.overflow&&!l&&!(!((r=v.current)===null||r===void 0)&&r.style.height)&&!(!((n=v.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},u);return y.createElement(y.Fragment,null,y.createElement("textarea",Object.assign({value:d,onChange:A,ref:p,rows:o,style:O},g,{className:a})),y.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:c,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},u)}))});function kl(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const P0=({maxLengthId:e,maxLength:t,currentLength:r,size:n,i18n:a})=>{const{cn:s}=ne(),i=er("Textarea",{charsLeft:a!=null&&a.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a!=null&&a.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),o=t-r,[l,u]=k.useState(o);return k.useEffect(()=>{const d=Gu(()=>{u(o)},2e3);return d(),()=>{d.clear()}},[o]),y.createElement(y.Fragment,null,y.createElement("span",{id:e,className:s("navds-sr-only")},i("maxLength",{maxLength:t})),o<20&&y.createElement("span",{role:"status",className:s("navds-textarea__sr-counter navds-sr-only")},fl(l,i)),y.createElement(te,{className:s("navds-textarea__counter",{"navds-textarea__counter--error":o<0}),size:n},fl(o,i)))},fl=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var L0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const w0=k.forwardRef((e,t)=>{var r,n,a;const{inputProps:s,errorId:i,showErrorMsg:o,hasError:l,size:u,inputDescriptionId:d}=it(e,"textarea"),{label:g,className:m,description:v,maxLength:p,hideLabel:c=!1,resize:b,UNSAFE_autoScrollbar:T,i18n:f,readOnly:h}=e,R=L0(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:A}=ne(),O=Nn(),I=p!==void 0&&p>0,[S,P]=k.useState((r=e==null?void 0:e.defaultValue)!==null&&r!==void 0?r:""),M=()=>{let L=R!=null&&R.minRows?R==null?void 0:R.minRows:3;return u==="small"&&(L=R!=null&&R.minRows?R==null?void 0:R.minRows:2),L},j=kr(s["aria-describedby"],{[O??""]:I});return y.createElement("div",{className:A(m,"navds-form-field",`navds-form-field--${u}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":h,"navds-textarea--readonly":h,"navds-textarea--error":l,"navds-textarea--autoscrollbar":T,[`navds-textarea--resize-${b===!0?"both":b}`]:b})},y.createElement(Ie,{htmlFor:s.id,size:u,className:A("navds-form-field__label",{"navds-sr-only":c})},h&&y.createElement(ns,null),g),!!v&&y.createElement(te,{className:A("navds-form-field__description",{"navds-sr-only":c}),id:d,size:u,as:"div"},v),y.createElement(D0,Object.assign({},on(R,["error","errorId","size"]),s,{onChange:Br(e.onChange,e.value===void 0?L=>P(L.target.value):void 0),minRows:M(),autoScrollbar:T,ref:t,readOnly:h,className:A("navds-textarea__input","navds-body-short",`navds-body-short--${u??"medium"}`)},j?{"aria-describedby":j}:{})),I&&!h&&!s.disabled&&y.createElement(P0,{maxLengthId:O,maxLength:p,currentLength:(a=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&a!==void 0?a:S.length,size:u,i18n:f}),y.createElement("div",{className:A("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},o&&y.createElement(Pt,{size:u,showIcon:!0},e.error)))});var j0=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const M0=k.forwardRef((e,t)=>{const{cn:r}=ne(),{inputProps:n,errorId:a,showErrorMsg:s,hasError:i,size:o,inputDescriptionId:l}=it(e,"textField"),{label:u,className:d,description:g,htmlSize:m,hideLabel:v=!1,type:p="text",readOnly:c}=e,b=j0(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return y.createElement("div",{className:r(d,"navds-form-field",`navds-form-field--${o}`,{"navds-text-field--error":i,"navds-text-field--disabled":!!n.disabled,"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":c,"navds-text-field--readonly":c})},y.createElement(Ie,{htmlFor:n.id,size:o,className:r("navds-form-field__label",{"navds-sr-only":v})},c&&y.createElement(ns,null),u),!!g&&y.createElement(te,{className:r("navds-form-field__description",{"navds-sr-only":v}),id:l,size:o,as:"div"},g),y.createElement("input",Object.assign({},on(b,["error","errorId","size"]),n,{ref:t,type:p,readOnly:c,className:r("navds-text-field__input","navds-body-short",`navds-body-short--${o??"medium"}`),size:m})),y.createElement("div",{className:r("navds-form-field__error"),id:a,"aria-relevant":"additions removals","aria-live":"polite"},s&&y.createElement(Pt,{size:o,showIcon:!0},e.error)))});var Gt=e=>e.type==="checkbox",Nr=e=>e instanceof Date,rn=e=>e==null;const Sm=e=>typeof e=="object";var Ge=e=>!rn(e)&&!Array.isArray(e)&&Sm(e)&&!Nr(e),Dm=e=>Ge(e)&&e.target?Gt(e.target)?e.target.checked:e.target.value:e,K0=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Pm=(e,t)=>e.has(K0(t)),F0=e=>{const t=e.constructor&&e.constructor.prototype;return Ge(t)&&t.hasOwnProperty("isPrototypeOf")},xi=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function We(e){let t;const r=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(xi&&(e instanceof Blob||n))&&(r||Ge(e)))if(t=r?[]:{},!r&&!F0(e))t=e;else for(const a in e)e.hasOwnProperty(a)&&(t[a]=We(e[a]));else return e;return t}var as=e=>Array.isArray(e)?e.filter(Boolean):[],Fe=e=>e===void 0,H=(e,t,r)=>{if(!t||!Ge(e))return r;const n=as(t.split(/[,[\].]+?/)).reduce((a,s)=>rn(a)?a:a[s],e);return Fe(n)||n===e?Fe(e[t])?r:e[t]:n},kn=e=>typeof e=="boolean",Gi=e=>/^\w*$/.test(e),Lm=e=>as(e.replace(/["|']|\]/g,"").split(/\.|\[/)),Ae=(e,t,r)=>{let n=-1;const a=Gi(t)?[t]:Lm(t),s=a.length,i=s-1;for(;++n<s;){const o=a[n];let l=r;if(n!==i){const u=e[o];l=Ge(u)||Array.isArray(u)?u:isNaN(+a[n+1])?{}:[]}if(o==="__proto__"||o==="constructor"||o==="prototype")return;e[o]=l,e=e[o]}};const qa={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},hn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},$n={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},wm=y.createContext(null),vr=()=>y.useContext(wm),q0=e=>{const{children:t,...r}=e;return y.createElement(wm.Provider,{value:r},t)};var jm=(e,t,r,n=!0)=>{const a={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const i=s;return t._proxyFormState[i]!==hn.all&&(t._proxyFormState[i]=!n||hn.all),r&&(r[i]=!0),e[i]}});return a},si=e=>rn(e)||!Sm(e);function zn(e,t){if(si(e)||si(t))return e===t;if(Nr(e)&&Nr(t))return e.getTime()===t.getTime();const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const a of r){const s=e[a];if(!n.includes(a))return!1;if(a!=="ref"){const i=t[a];if(Nr(s)&&Nr(i)||Ge(s)&&Ge(i)||Array.isArray(s)&&Array.isArray(i)?!zn(s,i):s!==i)return!1}}return!0}const Mm=(e,t)=>{const r=k.useRef(t);zn(t,r.current)||(r.current=t),k.useEffect(e,r.current)};function V0(e){const t=vr(),{control:r=t.control,disabled:n,name:a,exact:s}=e||{},[i,o]=y.useState(r._formState),l=y.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Mm(()=>r._subscribe({name:a,formState:l.current,exact:s,callback:u=>{!n&&o({...r._formState,...u})}}),[a,n,s]),y.useEffect(()=>{l.current.isValid&&r._setValid(!0)},[r]),y.useMemo(()=>jm(i,r,l.current,!1),[i,r])}var qn=e=>typeof e=="string",Km=(e,t,r,n,a)=>qn(e)?(n&&t.watch.add(e),H(r,e,a)):Array.isArray(e)?e.map(s=>(n&&t.watch.add(s),H(r,s))):(n&&(t.watchAll=!0),r);function x0(e){const t=vr(),{control:r=t.control,name:n,defaultValue:a,disabled:s,exact:i}=e||{},[o,l]=y.useState(r._getWatch(n,a));return Mm(()=>r._subscribe({name:n,formState:{values:!0},exact:i,callback:u=>!s&&l(Km(n,r._names,u.values||r._formValues,!1,a))}),[n,a,s,i]),y.useEffect(()=>r._removeUnmounted()),o}function Bt(e){const t=vr(),{name:r,disabled:n,control:a=t.control,shouldUnregister:s}=e,i=Pm(a._names.array,r),o=x0({control:a,name:r,defaultValue:H(a._formValues,r,H(a._defaultValues,r,e.defaultValue)),exact:!0}),l=V0({control:a,name:r,exact:!0}),u=y.useRef(e),d=y.useRef(a.register(r,{...e.rules,value:o,...kn(e.disabled)?{disabled:e.disabled}:{}})),g=y.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!H(l.errors,r)},isDirty:{enumerable:!0,get:()=>!!H(l.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!H(l.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!H(l.validatingFields,r)},error:{enumerable:!0,get:()=>H(l.errors,r)}}),[l,r]),m=y.useCallback(b=>d.current.onChange({target:{value:Dm(b),name:r},type:qa.CHANGE}),[r]),v=y.useCallback(()=>d.current.onBlur({target:{value:H(a._formValues,r),name:r},type:qa.BLUR}),[r,a._formValues]),p=y.useCallback(b=>{const T=H(a._fields,r);T&&b&&(T._f.ref={focus:()=>b.focus(),select:()=>b.select(),setCustomValidity:f=>b.setCustomValidity(f),reportValidity:()=>b.reportValidity()})},[a._fields,r]),c=y.useMemo(()=>({name:r,value:o,...kn(n)||l.disabled?{disabled:l.disabled||n}:{},onChange:m,onBlur:v,ref:p}),[r,n,l.disabled,m,v,p,o]);return y.useEffect(()=>{const b=a._options.shouldUnregister||s;a.register(r,{...u.current.rules,...kn(u.current.disabled)?{disabled:u.current.disabled}:{}});const T=(f,h)=>{const R=H(a._fields,f);R&&R._f&&(R._f.mount=h)};if(T(r,!0),b){const f=We(H(a._options.defaultValues,r));Ae(a._defaultValues,r,f),Fe(H(a._formValues,r))&&Ae(a._formValues,r,f)}return!i&&a.register(r),()=>{(i?b&&!a._state.action:b)?a.unregister(r):T(r,!1)}},[r,a,i,s]),y.useEffect(()=>{a._setDisabledField({disabled:n,name:r})},[n,r,a]),y.useMemo(()=>({field:c,formState:l,fieldState:g}),[c,l,g])}var G0=(e,t,r,n,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:a||!0}}:{},Et=e=>Array.isArray(e)?e:[e],vl=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},nn=e=>Ge(e)&&!Object.keys(e).length,Bi=e=>e.type==="file",An=e=>typeof e=="function",Va=e=>{if(!xi)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Fm=e=>e.type==="select-multiple",Ui=e=>e.type==="radio",B0=e=>Ui(e)||Gt(e),Ds=e=>Va(e)&&e.isConnected;function U0(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=Fe(e)?n++:e[t[n++]];return e}function H0(e){for(const t in e)if(e.hasOwnProperty(t)&&!Fe(e[t]))return!1;return!0}function He(e,t){const r=Array.isArray(t)?t:Gi(t)?[t]:Lm(t),n=r.length===1?e:U0(e,r),a=r.length-1,s=r[a];return n&&delete n[s],a!==0&&(Ge(n)&&nn(n)||Array.isArray(n)&&H0(n))&&He(e,r.slice(0,-1)),e}var qm=e=>{for(const t in e)if(An(e[t]))return!0;return!1};function xa(e,t={}){const r=Array.isArray(e);if(Ge(e)||r)for(const n in e)Array.isArray(e[n])||Ge(e[n])&&!qm(e[n])?(t[n]=Array.isArray(e[n])?[]:{},xa(e[n],t[n])):rn(e[n])||(t[n]=!0);return t}function Vm(e,t,r){const n=Array.isArray(e);if(Ge(e)||n)for(const a in e)Array.isArray(e[a])||Ge(e[a])&&!qm(e[a])?Fe(t)||si(r[a])?r[a]=Array.isArray(e[a])?xa(e[a],[]):{...xa(e[a])}:Vm(e[a],rn(t)?{}:t[a],r[a]):r[a]=!zn(e[a],t[a]);return r}var dt=(e,t)=>Vm(e,t,xa(t));const cl={value:!1,isValid:!1},El={value:!0,isValid:!0};var xm=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Fe(e[0].attributes.value)?Fe(e[0].value)||e[0].value===""?El:{value:e[0].value,isValid:!0}:El:cl}return cl},Gm=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>Fe(e)?e:t?e===""?NaN:e&&+e:r&&qn(e)?new Date(e):n?n(e):e;const pl={isValid:!1,value:null};var Bm=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,pl):pl;function yl(e){const t=e.ref;return Bi(t)?t.files:Ui(t)?Bm(e.refs).value:Fm(t)?[...t.selectedOptions].map(({value:r})=>r):Gt(t)?xm(e.refs).value:Gm(Fe(t.value)?e.ref.value:t.value,e)}var C0=(e,t,r,n)=>{const a={};for(const s of e){const i=H(t,s);i&&Ae(a,s,i._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:n}},Ga=e=>e instanceof RegExp,ut=e=>Fe(e)?e:Ga(e)?e.source:Ge(e)?Ga(e.value)?e.value.source:e.value:e,bl=e=>({isOnSubmit:!e||e===hn.onSubmit,isOnBlur:e===hn.onBlur,isOnChange:e===hn.onChange,isOnAll:e===hn.all,isOnTouch:e===hn.onTouched});const hl="AsyncFunction";var Y0=e=>!!e&&!!e.validate&&!!(An(e.validate)&&e.validate.constructor.name===hl||Ge(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===hl)),$0=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Al=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const pt=(e,t,r,n)=>{for(const a of r||Object.keys(e)){const s=H(e,a);if(s){const{_f:i,...o}=s;if(i){if(i.refs&&i.refs[0]&&t(i.refs[0],a)&&!n)return!0;if(i.ref&&t(i.ref,i.name)&&!n)return!0;if(pt(o,t))break}else if(Ge(o)&&pt(o,t))break}}};function Tl(e,t,r){const n=H(e,r);if(n||Gi(r))return{error:n,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=H(t,s),o=H(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(o&&o.type)return{name:s,error:o};a.pop()}return{name:r}}var W0=(e,t,r,n)=>{r(e);const{name:a,...s}=e;return nn(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(i=>t[i]===(!n||hn.all))},z0=(e,t,r)=>!e||!t||e===t||Et(e).some(n=>n&&(r?n===t:n.startsWith(t)||t.startsWith(n))),J0=(e,t,r,n,a)=>a.isOnAll?!1:!r&&a.isOnTouch?!(t||e):(r?n.isOnBlur:a.isOnBlur)?!e:(r?n.isOnChange:a.isOnChange)?e:!0,X0=(e,t)=>!as(H(e,t)).length&&He(e,t),Z0=(e,t,r)=>{const n=Et(H(e,r));return Ae(n,"root",t[r]),Ae(e,r,n),e},_a=e=>qn(e);function Rl(e,t,r="validate"){if(_a(e)||Array.isArray(e)&&e.every(_a)||kn(e)&&!e)return{type:r,message:_a(e)?e:"",ref:t}}var Vr=e=>Ge(e)&&!Ga(e)?e:{value:e,message:""},Nl=async(e,t,r,n,a,s)=>{const{ref:i,refs:o,required:l,maxLength:u,minLength:d,min:g,max:m,pattern:v,validate:p,name:c,valueAsNumber:b,mount:T}=e._f,f=H(r,c);if(!T||t.has(c))return{};const h=o?o[0]:i,R=L=>{a&&h.reportValidity&&(h.setCustomValidity(kn(L)?"":L||""),h.reportValidity())},A={},O=Ui(i),I=Gt(i),S=O||I,P=(b||Bi(i))&&Fe(i.value)&&Fe(f)||Va(i)&&i.value===""||f===""||Array.isArray(f)&&!f.length,M=G0.bind(null,c,n,A),j=(L,N,D,F=$n.maxLength,q=$n.minLength)=>{const U=L?N:D;A[c]={type:L?F:q,message:U,ref:i,...M(L?F:q,U)}};if(s?!Array.isArray(f)||!f.length:l&&(!S&&(P||rn(f))||kn(f)&&!f||I&&!xm(o).isValid||O&&!Bm(o).isValid)){const{value:L,message:N}=_a(l)?{value:!!l,message:l}:Vr(l);if(L&&(A[c]={type:$n.required,message:N,ref:h,...M($n.required,N)},!n))return R(N),A}if(!P&&(!rn(g)||!rn(m))){let L,N;const D=Vr(m),F=Vr(g);if(!rn(f)&&!isNaN(f)){const q=i.valueAsNumber||f&&+f;rn(D.value)||(L=q>D.value),rn(F.value)||(N=q<F.value)}else{const q=i.valueAsDate||new Date(f),U=X=>new Date(new Date().toDateString()+" "+X),V=i.type=="time",B=i.type=="week";qn(D.value)&&f&&(L=V?U(f)>U(D.value):B?f>D.value:q>new Date(D.value)),qn(F.value)&&f&&(N=V?U(f)<U(F.value):B?f<F.value:q<new Date(F.value))}if((L||N)&&(j(!!L,D.message,F.message,$n.max,$n.min),!n))return R(A[c].message),A}if((u||d)&&!P&&(qn(f)||s&&Array.isArray(f))){const L=Vr(u),N=Vr(d),D=!rn(L.value)&&f.length>+L.value,F=!rn(N.value)&&f.length<+N.value;if((D||F)&&(j(D,L.message,N.message),!n))return R(A[c].message),A}if(v&&!P&&qn(f)){const{value:L,message:N}=Vr(v);if(Ga(L)&&!f.match(L)&&(A[c]={type:$n.pattern,message:N,ref:i,...M($n.pattern,N)},!n))return R(N),A}if(p){if(An(p)){const L=await p(f,r),N=Rl(L,h);if(N&&(A[c]={...N,...M($n.validate,N.message)},!n))return R(N.message),A}else if(Ge(p)){let L={};for(const N in p){if(!nn(L)&&!n)break;const D=Rl(await p[N](f,r),h,N);D&&(L={...D,...M(N,D.message)},R(D.message),n&&(A[c]=L))}if(!nn(L)&&(A[c]={ref:h,...L},!n))return A}}return R(!0),A};const Q0={mode:hn.onSubmit,reValidateMode:hn.onChange,shouldFocusError:!0};function eN(e={}){let t={...Q0,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:An(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1};const n={};let a=Ge(t.defaultValues)||Ge(t.values)?We(t.values||t.defaultValues)||{}:{},s=t.shouldUnregister?{}:We(a),i={action:!1,mount:!1,watch:!1},o={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},l,u=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let g={...d};const m={array:vl(),state:vl()},v=bl(t.mode),p=bl(t.reValidateMode),c=t.criteriaMode===hn.all,b=_=>w=>{clearTimeout(u),u=setTimeout(_,w)},T=async _=>{if(!t.disabled&&(d.isValid||g.isValid||_)){const w=t.resolver?nn((await P()).errors):await j(n,!0);w!==r.isValid&&m.state.next({isValid:w})}},f=(_,w)=>{!t.disabled&&(d.isValidating||d.validatingFields||g.isValidating||g.validatingFields)&&((_||Array.from(o.mount)).forEach(K=>{K&&(w?Ae(r.validatingFields,K,w):He(r.validatingFields,K))}),m.state.next({validatingFields:r.validatingFields,isValidating:!nn(r.validatingFields)}))},h=(_,w=[],K,Y,G=!0,x=!0)=>{if(Y&&K&&!t.disabled){if(i.action=!0,x&&Array.isArray(H(n,_))){const z=K(H(n,_),Y.argA,Y.argB);G&&Ae(n,_,z)}if(x&&Array.isArray(H(r.errors,_))){const z=K(H(r.errors,_),Y.argA,Y.argB);G&&Ae(r.errors,_,z),X0(r.errors,_)}if((d.touchedFields||g.touchedFields)&&x&&Array.isArray(H(r.touchedFields,_))){const z=K(H(r.touchedFields,_),Y.argA,Y.argB);G&&Ae(r.touchedFields,_,z)}(d.dirtyFields||g.dirtyFields)&&(r.dirtyFields=dt(a,s)),m.state.next({name:_,isDirty:N(_,w),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Ae(s,_,w)},R=(_,w)=>{Ae(r.errors,_,w),m.state.next({errors:r.errors})},A=_=>{r.errors=_,m.state.next({errors:r.errors,isValid:!1})},O=(_,w,K,Y)=>{const G=H(n,_);if(G){const x=H(s,_,Fe(K)?H(a,_):K);Fe(x)||Y&&Y.defaultChecked||w?Ae(s,_,w?x:yl(G._f)):q(_,x),i.mount&&T()}},I=(_,w,K,Y,G)=>{let x=!1,z=!1;const de={name:_};if(!t.disabled){if(!K||Y){(d.isDirty||g.isDirty)&&(z=r.isDirty,r.isDirty=de.isDirty=N(),x=z!==de.isDirty);const Me=zn(H(a,_),w);z=!!H(r.dirtyFields,_),Me?He(r.dirtyFields,_):Ae(r.dirtyFields,_,!0),de.dirtyFields=r.dirtyFields,x=x||(d.dirtyFields||g.dirtyFields)&&z!==!Me}if(K){const Me=H(r.touchedFields,_);Me||(Ae(r.touchedFields,_,K),de.touchedFields=r.touchedFields,x=x||(d.touchedFields||g.touchedFields)&&Me!==K)}x&&G&&m.state.next(de)}return x?de:{}},S=(_,w,K,Y)=>{const G=H(r.errors,_),x=(d.isValid||g.isValid)&&kn(w)&&r.isValid!==w;if(t.delayError&&K?(l=b(()=>R(_,K)),l(t.delayError)):(clearTimeout(u),l=null,K?Ae(r.errors,_,K):He(r.errors,_)),(K?!zn(G,K):G)||!nn(Y)||x){const z={...Y,...x&&kn(w)?{isValid:w}:{},errors:r.errors,name:_};r={...r,...z},m.state.next(z)}},P=async _=>{f(_,!0);const w=await t.resolver(s,t.context,C0(_||o.mount,n,t.criteriaMode,t.shouldUseNativeValidation));return f(_),w},M=async _=>{const{errors:w}=await P(_);if(_)for(const K of _){const Y=H(w,K);Y?Ae(r.errors,K,Y):He(r.errors,K)}else r.errors=w;return w},j=async(_,w,K={valid:!0})=>{for(const Y in _){const G=_[Y];if(G){const{_f:x,...z}=G;if(x){const de=o.array.has(x.name),Me=G._f&&Y0(G._f);Me&&d.validatingFields&&f([Y],!0);const Ue=await Nl(G,o.disabled,s,c,t.shouldUseNativeValidation&&!w,de);if(Me&&d.validatingFields&&f([Y]),Ue[x.name]&&(K.valid=!1,w))break;!w&&(H(Ue,x.name)?de?Z0(r.errors,Ue,x.name):Ae(r.errors,x.name,Ue[x.name]):He(r.errors,x.name))}!nn(z)&&await j(z,w,K)}}return K.valid},L=()=>{for(const _ of o.unMount){const w=H(n,_);w&&(w._f.refs?w._f.refs.every(K=>!Ds(K)):!Ds(w._f.ref))&&ye(_)}o.unMount=new Set},N=(_,w)=>!t.disabled&&(_&&w&&Ae(s,_,w),!zn(Re(),a)),D=(_,w,K)=>Km(_,o,{...i.mount?s:Fe(w)?a:qn(_)?{[_]:w}:w},K,w),F=_=>as(H(i.mount?s:a,_,t.shouldUnregister?H(a,_,[]):[])),q=(_,w,K={})=>{const Y=H(n,_);let G=w;if(Y){const x=Y._f;x&&(!x.disabled&&Ae(s,_,Gm(w,x)),G=Va(x.ref)&&rn(w)?"":w,Fm(x.ref)?[...x.ref.options].forEach(z=>z.selected=G.includes(z.value)):x.refs?Gt(x.ref)?x.refs.length>1?x.refs.forEach(z=>(!z.defaultChecked||!z.disabled)&&(z.checked=Array.isArray(G)?!!G.find(de=>de===z.value):G===z.value)):x.refs[0]&&(x.refs[0].checked=!!G):x.refs.forEach(z=>z.checked=z.value===G):Bi(x.ref)?x.ref.value="":(x.ref.value=G,x.ref.type||m.state.next({name:_,values:We(s)})))}(K.shouldDirty||K.shouldTouch)&&I(_,G,K.shouldTouch,K.shouldDirty,!0),K.shouldValidate&&Q(_)},U=(_,w,K)=>{for(const Y in w){const G=w[Y],x=`${_}.${Y}`,z=H(n,x);(o.array.has(_)||Ge(G)||z&&!z._f)&&!Nr(G)?U(x,G,K):q(x,G,K)}},V=(_,w,K={})=>{const Y=H(n,_),G=o.array.has(_),x=We(w);Ae(s,_,x),G?(m.array.next({name:_,values:We(s)}),(d.isDirty||d.dirtyFields||g.isDirty||g.dirtyFields)&&K.shouldDirty&&m.state.next({name:_,dirtyFields:dt(a,s),isDirty:N(_,x)})):Y&&!Y._f&&!rn(x)?U(_,x,K):q(_,x,K),Al(_,o)&&m.state.next({...r}),m.state.next({name:i.mount?_:void 0,values:We(s)})},B=async _=>{i.mount=!0;const w=_.target;let K=w.name,Y=!0;const G=H(n,K),x=z=>{Y=Number.isNaN(z)||Nr(z)&&isNaN(z.getTime())||zn(z,H(s,K,z))};if(G){let z,de;const Me=w.type?yl(G._f):Dm(_),Ue=_.type===qa.BLUR||_.type===qa.FOCUS_OUT,us=!$0(G._f)&&!t.resolver&&!H(r.errors,K)&&!G._f.deps||J0(Ue,H(r.touchedFields,K),r.isSubmitted,p,v),ie=Al(K,o,Ue);Ae(s,K,Me),Ue?(G._f.onBlur&&G._f.onBlur(_),l&&l(0)):G._f.onChange&&G._f.onChange(_);const Oe=I(K,Me,Ue),be=!nn(Oe)||ie;if(!Ue&&m.state.next({name:K,type:_.type,values:We(s)}),us)return(d.isValid||g.isValid)&&(t.mode==="onBlur"?Ue&&T():Ue||T()),be&&m.state.next({name:K,...ie?{}:Oe});if(!Ue&&ie&&m.state.next({...r}),t.resolver){const{errors:bn}=await P([K]);if(x(Me),Y){const gn=Tl(r.errors,n,K),br=Tl(bn,n,gn.name||K);z=br.error,K=br.name,de=nn(bn)}}else f([K],!0),z=(await Nl(G,o.disabled,s,c,t.shouldUseNativeValidation))[K],f([K]),x(Me),Y&&(z?de=!1:(d.isValid||g.isValid)&&(de=await j(n,!0)));Y&&(G._f.deps&&Q(G._f.deps),S(K,de,z,Oe))}},X=(_,w)=>{if(H(r.errors,w)&&_.focus)return _.focus(),1},Q=async(_,w={})=>{let K,Y;const G=Et(_);if(t.resolver){const x=await M(Fe(_)?_:G);K=nn(x),Y=_?!G.some(z=>H(x,z)):K}else _?(Y=(await Promise.all(G.map(async x=>{const z=H(n,x);return await j(z&&z._f?{[x]:z}:z)}))).every(Boolean),!(!Y&&!r.isValid)&&T()):Y=K=await j(n);return m.state.next({...!qn(_)||(d.isValid||g.isValid)&&K!==r.isValid?{}:{name:_},...t.resolver||!_?{isValid:K}:{},errors:r.errors}),w.shouldFocus&&!Y&&pt(n,X,_?G:o.mount),Y},Re=_=>{const w={...i.mount?s:a};return Fe(_)?w:qn(_)?H(w,_):_.map(K=>H(w,K))},_e=(_,w)=>({invalid:!!H((w||r).errors,_),isDirty:!!H((w||r).dirtyFields,_),error:H((w||r).errors,_),isValidating:!!H(r.validatingFields,_),isTouched:!!H((w||r).touchedFields,_)}),un=_=>{_&&Et(_).forEach(w=>He(r.errors,w)),m.state.next({errors:_?r.errors:{}})},re=(_,w,K)=>{const Y=(H(n,_,{_f:{}})._f||{}).ref,G=H(r.errors,_)||{},{ref:x,message:z,type:de,...Me}=G;Ae(r.errors,_,{...Me,...w,ref:Y}),m.state.next({name:_,errors:r.errors,isValid:!1}),K&&K.shouldFocus&&Y&&Y.focus&&Y.focus()},W=(_,w)=>An(_)?m.state.subscribe({next:K=>_(D(void 0,w),K)}):D(_,w,!0),ae=_=>m.state.subscribe({next:w=>{z0(_.name,w.name,_.exact)&&W0(w,_.formState||d,yr,_.reRenderRoot)&&_.callback({values:{...s},...r,...w})}}).unsubscribe,se=_=>(i.mount=!0,g={...g,..._.formState},ae({..._,formState:g})),ye=(_,w={})=>{for(const K of _?Et(_):o.mount)o.mount.delete(K),o.array.delete(K),w.keepValue||(He(n,K),He(s,K)),!w.keepError&&He(r.errors,K),!w.keepDirty&&He(r.dirtyFields,K),!w.keepTouched&&He(r.touchedFields,K),!w.keepIsValidating&&He(r.validatingFields,K),!t.shouldUnregister&&!w.keepDefaultValue&&He(a,K);m.state.next({values:We(s)}),m.state.next({...r,...w.keepDirty?{isDirty:N()}:{}}),!w.keepIsValid&&T()},Xe=({disabled:_,name:w})=>{(kn(_)&&i.mount||_||o.disabled.has(w))&&(_?o.disabled.add(w):o.disabled.delete(w))},$e=(_,w={})=>{let K=H(n,_);const Y=kn(w.disabled)||kn(t.disabled);return Ae(n,_,{...K||{},_f:{...K&&K._f?K._f:{ref:{name:_}},name:_,mount:!0,...w}}),o.mount.add(_),K?Xe({disabled:kn(w.disabled)?w.disabled:t.disabled,name:_}):O(_,!0,w.value),{...Y?{disabled:w.disabled||t.disabled}:{},...t.progressive?{required:!!w.required,min:ut(w.min),max:ut(w.max),minLength:ut(w.minLength),maxLength:ut(w.maxLength),pattern:ut(w.pattern)}:{},name:_,onChange:B,onBlur:B,ref:G=>{if(G){$e(_,w),K=H(n,_);const x=Fe(G.value)&&G.querySelectorAll&&G.querySelectorAll("input,select,textarea")[0]||G,z=B0(x),de=K._f.refs||[];if(z?de.find(Me=>Me===x):x===K._f.ref)return;Ae(n,_,{_f:{...K._f,...z?{refs:[...de.filter(Ds),x,...Array.isArray(H(a,_))?[{}]:[]],ref:{type:x.type,name:_}}:{ref:x}}}),O(_,!1,void 0,x)}else K=H(n,_,{}),K._f&&(K._f.mount=!1),(t.shouldUnregister||w.shouldUnregister)&&!(Pm(o.array,_)&&i.action)&&o.unMount.add(_)}}},Ze=()=>t.shouldFocusError&&pt(n,X,o.mount),Er=_=>{kn(_)&&(m.state.next({disabled:_}),pt(n,(w,K)=>{const Y=H(n,K);Y&&(w.disabled=Y._f.disabled||_,Array.isArray(Y._f.refs)&&Y._f.refs.forEach(G=>{G.disabled=Y._f.disabled||_}))},0,!1))},Cn=(_,w)=>async K=>{let Y;K&&(K.preventDefault&&K.preventDefault(),K.persist&&K.persist());let G=We(s);if(m.state.next({isSubmitting:!0}),t.resolver){const{errors:x,values:z}=await P();r.errors=x,G=z}else await j(n);if(o.disabled.size)for(const x of o.disabled)Ae(G,x,void 0);if(He(r.errors,"root"),nn(r.errors)){m.state.next({errors:{}});try{await _(G,K)}catch(x){Y=x}}else w&&await w({...r.errors},K),Ze(),setTimeout(Ze);if(m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:nn(r.errors)&&!Y,submitCount:r.submitCount+1,errors:r.errors}),Y)throw Y},tr=(_,w={})=>{H(n,_)&&(Fe(w.defaultValue)?V(_,We(H(a,_))):(V(_,w.defaultValue),Ae(a,_,We(w.defaultValue))),w.keepTouched||He(r.touchedFields,_),w.keepDirty||(He(r.dirtyFields,_),r.isDirty=w.defaultValue?N(_,We(H(a,_))):N()),w.keepError||(He(r.errors,_),d.isValid&&T()),m.state.next({...r}))},ar=(_,w={})=>{const K=_?We(_):a,Y=We(K),G=nn(_),x=G?a:Y;if(w.keepDefaultValues||(a=K),!w.keepValues){if(w.keepDirtyValues){const z=new Set([...o.mount,...Object.keys(dt(a,s))]);for(const de of Array.from(z))H(r.dirtyFields,de)?Ae(x,de,H(s,de)):V(de,H(x,de))}else{if(xi&&Fe(_))for(const z of o.mount){const de=H(n,z);if(de&&de._f){const Me=Array.isArray(de._f.refs)?de._f.refs[0]:de._f.ref;if(Va(Me)){const Ue=Me.closest("form");if(Ue){Ue.reset();break}}}}for(const z of o.mount)V(z,H(x,z))}s=We(x),m.array.next({values:{...x}}),m.state.next({values:{...x}})}o={mount:w.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!d.isValid||!!w.keepIsValid||!!w.keepDirtyValues,i.watch=!!t.shouldUnregister,m.state.next({submitCount:w.keepSubmitCount?r.submitCount:0,isDirty:G?!1:w.keepDirty?r.isDirty:!!(w.keepDefaultValues&&!zn(_,a)),isSubmitted:w.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:G?{}:w.keepDirtyValues?w.keepDefaultValues&&s?dt(a,s):r.dirtyFields:w.keepDefaultValues&&_?dt(a,_):w.keepDirty?r.dirtyFields:{},touchedFields:w.keepTouched?r.touchedFields:{},errors:w.keepErrors?r.errors:{},isSubmitSuccessful:w.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Yn=(_,w)=>ar(An(_)?_(s):_,w),pr=(_,w={})=>{const K=H(n,_),Y=K&&K._f;if(Y){const G=Y.refs?Y.refs[0]:Y.ref;G.focus&&(G.focus(),w.shouldSelect&&An(G.select)&&G.select())}},yr=_=>{r={...r,..._}},Ct={control:{register:$e,unregister:ye,getFieldState:_e,handleSubmit:Cn,setError:re,_subscribe:ae,_runSchema:P,_getWatch:D,_getDirty:N,_setValid:T,_setFieldArray:h,_setDisabledField:Xe,_setErrors:A,_getFieldArray:F,_reset:ar,_resetDefaultValues:()=>An(t.defaultValues)&&t.defaultValues().then(_=>{Yn(_,t.resetOptions),m.state.next({isLoading:!1})}),_removeUnmounted:L,_disableForm:Er,_subjects:m,_proxyFormState:d,get _fields(){return n},get _formValues(){return s},get _state(){return i},set _state(_){i=_},get _defaultValues(){return a},get _names(){return o},set _names(_){o=_},get _formState(){return r},get _options(){return t},set _options(_){t={...t,..._}}},subscribe:se,trigger:Q,register:$e,handleSubmit:Cn,watch:W,setValue:V,getValues:Re,reset:Yn,resetField:tr,clearErrors:un,unregister:ye,setError:re,setFocus:pr,getFieldState:_e};return{...Ct,formControl:Ct}}const nN=typeof window<"u"?y.useLayoutEffect:y.useEffect;function ss(e={}){const t=y.useRef(void 0),r=y.useRef(void 0),[n,a]=y.useState({isDirty:!1,isValidating:!1,isLoading:An(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:An(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...e.formControl?e.formControl:eN(e),formState:n},e.formControl&&e.defaultValues&&!An(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const s=t.current.control;return s._options=e,nN(()=>{const i=s._subscribe({formState:s._proxyFormState,callback:()=>a({...s._formState}),reRenderRoot:!0});return a(o=>({...o,isReady:!0})),i},[s]),y.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),y.useEffect(()=>{e.mode&&(s._options.mode=e.mode),e.reValidateMode&&(s._options.reValidateMode=e.reValidateMode),e.errors&&!nn(e.errors)&&s._setErrors(e.errors)},[s,e.errors,e.mode,e.reValidateMode]),y.useEffect(()=>{e.shouldUnregister&&s._subjects.state.next({values:s._getWatch()})},[s,e.shouldUnregister]),y.useEffect(()=>{if(s._proxyFormState.isDirty){const i=s._getDirty();i!==n.isDirty&&s._subjects.state.next({isDirty:i})}},[s,n.isDirty]),y.useEffect(()=>{e.values&&!zn(e.values,r.current)?(s._reset(e.values,s._options.resetOptions),r.current=e.values,a(i=>({...i}))):s._resetDefaultValues()},[s,e.values]),y.useEffect(()=>{s._state.mount||(s._setValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),t.current.formState=jm(n,s),t.current}function rN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Il={exports:{}},gt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l;function tN(){if(_l)return gt;_l=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,a,s){var i=null;if(s!==void 0&&(i=""+s),a.key!==void 0&&(i=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:s}}return gt.Fragment=t,gt.jsx=r,gt.jsxs=r,gt}var Ol;function aN(){return Ol||(Ol=1,Il.exports=tN()),Il.exports}var Pe=aN();const sN=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:Pe.jsx(Kt,{variant:"warning",size:"small",children:Pe.jsx(Be,{gap:"2",children:y.Children.map(e,t=>Pe.jsx(te,{size:"small",children:t},bc(t)?t.key:t))})}),iN="_button_1rql2_1",oN={button:iN},is={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre"},Sl=Sn(is),lN=({onClick:e=()=>{},erOverstyrt:t=!1})=>{const[r,n]=k.useState(t),a=()=>{r||(n(!0),e(!0))};return k.useEffect(()=>{n(t)},[t]),Pe.jsx("button",{className:oN.button,"data-testid":"overstyringsknapp",type:"button",onClick:a,"aria-disabled":t,children:r?Pe.jsx(mE,{"aria-hidden":!0,color:"var(--a-gray-300)",height:25,width:25,title:Sl.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):Pe.jsx(uE,{"aria-hidden":!0,color:"var(--a-blue-400)",height:25,width:25,title:Sl.formatMessage({id:"OverstyringKnapp.Overstyring"})})})};var Dl={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Pl;function dN(){return Pl||(Pl=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,n.call(this,o)))}return s}function n(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)t.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Dl)),Dl.exports}var uN=dN();const os=rN(uN),gN="_borderbox_1vkvn_1",mN="_error_1vkvn_5",kN="_warning_1vkvn_8",fN={borderbox:gN,error:mN,warning:kN};os.bind(fN);const vN="_aksjonspunkt_kn1hn_1",cN="_erAksjonspunktApent_kn1hn_4",EN="_erIkkeGodkjentAvBeslutter_kn1hn_8",pN={aksjonspunkt:vN,erAksjonspunktApent:cN,erIkkeGodkjentAvBeslutter:EN};os.bind(pN);const Ba=({dateString:e,year:t,month:r,day:n})=>Pe.jsx(Pe.Fragment,{children:Ca(e,{year:t,month:r,day:n})}),Ll=Sn(is),yN=({text:e,okButtonText:t,showModal:r,cancel:n,submit:a})=>Pe.jsxs(xn,{width:"small",open:r,"aria-label":e,onClose:n,children:[Pe.jsx(xn.Body,{children:Pe.jsx(Ya,{size:"small",children:e})}),Pe.jsxs(xn.Footer,{children:[Pe.jsx(xe,{variant:"primary",size:"small",onClick:a,autoFocus:!0,type:"button",children:t||Ll.formatMessage({id:"OkAvbrytModal.Ok"})}),Pe.jsx(xe,{variant:"secondary",size:"small",onClick:n,type:"button",children:Ll.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]}),yt=({dateStringFom:e,dateStringTom:t,showTodayString:r=!1})=>Pe.jsx(Pe.Fragment,{children:Rc(e,t,{showTodayString:r})});Sn(is);const bN="_divider_1t980_1",hN="_dividerParagraf_1t980_8",AN="_leftPanel_1t980_11",TN="_rightPanel_1t980_14",ii={divider:bN,dividerParagraf:hN,leftPanel:AN,rightPanel:TN},RN=os.bind(ii),wl=({spaceUnder:e=!1,spaceAbove:t=!1,leftPanel:r=!1,rightPanel:n=!1,dividerParagraf:a=!1,className:s})=>Pe.jsxs(Pe.Fragment,{children:[t&&Pe.jsx("div",{style:{marginBottom:"32px"}}),Pe.jsx("div",{className:RN(s,{leftPanel:r,rightPanel:n}),children:Pe.jsx("div",{className:a?ii.dividerParagraf:ii.divider})}),e&&Pe.jsx("div",{style:{marginBottom:"32px"}})]}),NN="_editedIcon_ulrjl_1",IN={editedIcon:NN},_N=os.bind(IN),Um=({className:e=""})=>Pe.jsx("span",{"data-testid":"editedIcon",className:_N("editedIcon",e),children:Pe.jsx(vE,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})});Sn(is);function ON(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jl={exports:{}},mt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ml;function SN(){if(Ml)return mt;Ml=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,a,s){var i=null;if(s!==void 0&&(i=""+s),a.key!==void 0&&(i=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:s}}return mt.Fragment=t,mt.jsx=r,mt.jsxs=r,mt}var Kl;function DN(){return Kl||(Kl=1,jl.exports=SN()),jl.exports}var me=DN();const Ut=e=>e.reduce((t,r,n)=>({...t,[n]:a=>r(a)||!0}),{}),Ht=(e,t)=>{const r=t.split(".").reduce((n,a)=>n!==void 0?n[a]:n,e);return r==null?void 0:r.message};var oi={exports:{}},PN=oi.exports,Fl;function LN(){return Fl||(Fl=1,function(e,t){(function(r,n){e.exports=n()})(PN,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,l={},u=function(b){return(b=+b)+(b>68?1900:2e3)},d=function(b){return function(T){this[b]=+T}},g=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(T){if(!T||T==="Z")return 0;var f=T.match(/([+-]|\d\d)/g),h=60*f[1]+(+f[2]||0);return h===0?0:f[0]==="+"?-h:h}(b)}],m=function(b){var T=l[b];return T&&(T.indexOf?T:T.s.concat(T.f))},v=function(b,T){var f,h=l.meridiem;if(h){for(var R=1;R<=24;R+=1)if(b.indexOf(h(R,0,T))>-1){f=R>12;break}}else f=b===(T?"pm":"PM");return f},p={A:[o,function(b){this.afternoon=v(b,!1)}],a:[o,function(b){this.afternoon=v(b,!0)}],Q:[a,function(b){this.month=3*(b-1)+1}],S:[a,function(b){this.milliseconds=100*+b}],SS:[s,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[i,d("seconds")],ss:[i,d("seconds")],m:[i,d("minutes")],mm:[i,d("minutes")],H:[i,d("hours")],h:[i,d("hours")],HH:[i,d("hours")],hh:[i,d("hours")],D:[i,d("day")],DD:[s,d("day")],Do:[o,function(b){var T=l.ordinal,f=b.match(/\d+/);if(this.day=f[0],T)for(var h=1;h<=31;h+=1)T(h).replace(/\[|\]/g,"")===b&&(this.day=h)}],w:[i,d("week")],ww:[s,d("week")],M:[i,d("month")],MM:[s,d("month")],MMM:[o,function(b){var T=m("months"),f=(m("monthsShort")||T.map(function(h){return h.slice(0,3)})).indexOf(b)+1;if(f<1)throw new Error;this.month=f%12||f}],MMMM:[o,function(b){var T=m("months").indexOf(b)+1;if(T<1)throw new Error;this.month=T%12||T}],Y:[/[+-]?\d+/,d("year")],YY:[s,function(b){this.year=u(b)}],YYYY:[/\d{4}/,d("year")],Z:g,ZZ:g};function c(b){var T,f;T=b,f=l&&l.formats;for(var h=(b=T.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(M,j,L){var N=L&&L.toUpperCase();return j||f[L]||r[L]||f[N].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(D,F,q){return F||q.slice(1)})})).match(n),R=h.length,A=0;A<R;A+=1){var O=h[A],I=p[O],S=I&&I[0],P=I&&I[1];h[A]=P?{regex:S,parser:P}:O.replace(/^\[|\]$/g,"")}return function(M){for(var j={},L=0,N=0;L<R;L+=1){var D=h[L];if(typeof D=="string")N+=D.length;else{var F=D.regex,q=D.parser,U=M.slice(N),V=F.exec(U)[0];q.call(j,V),M=M.replace(V,"")}}return function(B){var X=B.afternoon;if(X!==void 0){var Q=B.hours;X?Q<12&&(B.hours+=12):Q===12&&(B.hours=0),delete B.afternoon}}(j),j}}return function(b,T,f){f.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(u=b.parseTwoDigitYear);var h=T.prototype,R=h.parse;h.parse=function(A){var O=A.date,I=A.utc,S=A.args;this.$u=I;var P=S[1];if(typeof P=="string"){var M=S[2]===!0,j=S[3]===!0,L=M||j,N=S[2];j&&(N=S[2]),l=this.$locale(),!M&&N&&(l=f.Ls[N]),this.$d=function(U,V,B,X){try{if(["x","X"].indexOf(V)>-1)return new Date((V==="X"?1e3:1)*U);var Q=c(V)(U),Re=Q.year,_e=Q.month,un=Q.day,re=Q.hours,W=Q.minutes,ae=Q.seconds,se=Q.milliseconds,ye=Q.zone,Xe=Q.week,$e=new Date,Ze=un||(Re||_e?1:$e.getDate()),Er=Re||$e.getFullYear(),Cn=0;Re&&!_e||(Cn=_e>0?_e-1:$e.getMonth());var tr,ar=re||0,Yn=W||0,pr=ae||0,yr=se||0;return ye?new Date(Date.UTC(Er,Cn,Ze,ar,Yn,pr,yr+60*ye.offset*1e3)):B?new Date(Date.UTC(Er,Cn,Ze,ar,Yn,pr,yr)):(tr=new Date(Er,Cn,Ze,ar,Yn,pr,yr),Xe&&(tr=X(tr).week(Xe).toDate()),tr)}catch{return new Date("")}}(O,P,I,f),this.init(),N&&N!==!0&&(this.$L=this.locale(N).$L),L&&O!=this.format(P)&&(this.$d=new Date("")),l={}}else if(P instanceof Array)for(var D=P.length,F=1;F<=D;F+=1){S[1]=P[F-1];var q=f.apply(this,S);if(q.isValid()){this.$d=q.$d,this.$L=q.$L,this.init();break}F===D&&(this.$d=new Date(""))}else R.call(this,A)}}})}(oi)),oi.exports}var wN=LN();const jN=ON(wN),MN="_readOnlyContainer_v0eco_1",KN="_readOnlyContent_v0eco_4",FN="_textarea_v0eco_11",qN="_space_v0eco_15",Xt={readOnlyContainer:MN,readOnlyContent:KN,textarea:FN,space:qN},VN=e=>e!=null&&e!=="",ls=({label:e,value:t,isEdited:r=!1,type:n,hideLabel:a,size:s})=>VN(t)?me.jsxs("div",{className:Xt.readOnlyContainer,children:[e&&!a&&me.jsx(Ie,{size:"small",children:e}),me.jsx("div",{className:n==="textarea"?Xt.textarea:"",children:me.jsxs(xu,{className:Xt.readOnlyContent,size:s,children:[t,r&&me.jsx(Um,{className:Xt.space})]})})]}):null;Te.extend(jN);const Tt=({name:e,label:t,description:r,validate:n=[],disabled:a=!1,isReadOnly:s=!1,onChange:i,disabledDays:o,isEdited:l,defaultMonth:u,fromDate:d,toDate:g,size:m="small"})=>{const{formState:{errors:v}}=vr(),{field:p}=Bt({name:e,rules:{validate:k.useMemo(()=>Ut(n),[n])}}),c=p.value?Te(p.value,Wn,!0).format(xr):"",[b,T]=k.useState(c),{datepickerProps:f,inputProps:h}=$R({onDateChange:O=>{if(O!==void 0){const I=Te(O).format(Wn);i&&i(I),p.onChange(I),T(Te(I,Wn,!0).format(xr))}},defaultSelected:p.value?Te(p.value,Wn,!0).toDate():void 0,defaultMonth:u||(!p.value&&g?g:void 0),disabled:o}),R=k.useCallback(O=>{const I=Te(O.target.value,xr,!0).format(Wn),S=I!=="Invalid Date";T(O.target.value),i&&i(S?I:O.target.value),p.onChange(S?I:O.target.value)},[T,i,p]);if(s)return me.jsx(ls,{label:t,value:p.value?Te(p.value,Wn,!0).format(xr):void 0,isEdited:l,size:m});const A={...f,fromDate:d,toDate:g,dropdownCaption:d&&g?!0:void 0};return me.jsx(Fa,{...A,children:me.jsx(Fa.Input,{...h,onChange:R,value:b,size:m,label:t,description:r,disabled:a,error:Ht(v,e)})})},li=({name:e,label:t,validate:r=[],readOnly:n=!1,type:a,shouldValidateOnBlur:s=!1,onBlur:i,onChange:o,description:l,autoFocus:u,parse:d=R=>R,format:g=R=>R,normalizeOnBlur:m,isEdited:v,maxLength:p,autoComplete:c=!1,disabled:b,className:T,hideLabel:f,...h})=>{const{formState:{errors:R},trigger:A}=vr(),{field:O}=Bt({name:e,rules:{validate:k.useMemo(()=>Ut(r),[r])}});return n?me.jsx(ls,{label:t,value:O.value,isEdited:v,hideLabel:f,size:h.size}):me.jsx(M0,{size:"small",hideLabel:f,description:l,label:t,error:Ht(R,e),...O,value:O.value?g(O.value):"",autoFocus:u,autoComplete:c?void 0:"off",maxLength:p,disabled:b,type:a,className:T,onChange:I=>{const S=I.currentTarget.value?d(I.currentTarget.value):null;return o&&o(S),O.onChange(S)},onBlur:async I=>{var S,P,M,j;if(O.onBlur(),s){const L=await A();i&&L&&i((S=I==null?void 0:I.target)==null?void 0:S.value)}else i&&i((P=I==null?void 0:I.target)==null?void 0:P.value);m&&O.onChange((M=I==null?void 0:I.target)!=null&&M.value?m(d((j=I==null?void 0:I.target)==null?void 0:j.value)):null)},...h})},xN="_hideRadioLabels_1u3xf_1",GN={hideRadioLabels:xN},Hm=({label:e,description:t,name:r,validate:n=[],radios:a,onChange:s,disabled:i=!1,isReadOnly:o=!1,isHorizontal:l=!1,parse:u=p=>p,isTrueOrFalseSelection:d=!1,hideLegend:g=!1,hideRadioLabels:m=!1,isEdited:v=!1})=>{const{formState:{errors:p}}=vr(),{field:c}=Bt({name:r,rules:{validate:k.useMemo(()=>Ut(n),[n])}}),b=d?f=>f==="true":u,T=me.jsxs(me.Fragment,{children:[e,o&&v&&me.jsx(Um,{})]});return me.jsxs(I0,{name:r,value:c.value!==void 0?c.value:null,onChange:f=>{s&&s(f),c.onChange(f)},size:"small",legend:T,description:t,error:Ht(p,r),className:m?GN.hideRadioLabels:"",hideLegend:g,children:[!l&&a.map(f=>me.jsxs(k.Fragment,{children:[me.jsx(ul,{value:b(f.value),disabled:f.disabled||i||o,children:f.label}),c.value===b(f.value)&&f.element]},f.value)),l&&me.jsxs(me.Fragment,{children:[me.jsx(De,{gap:"4",children:a.map(f=>me.jsx(ul,{value:b(f.value),disabled:f.disabled||i||o,children:f.label},f.value))}),a.filter(f=>c.value===b(f.value)).map(f=>me.jsx(k.Fragment,{children:f.element},f.value))]})]})},BN=({name:e,label:t,selectValues:r,validate:n=[],readOnly:a=!1,description:s,hideValueOnDisable:i=!1,onChange:o,disabled:l,className:u,hideLabel:d,isEdited:g,size:m})=>{const{formState:{errors:v}}=vr(),{field:p}=Bt({name:e,rules:{validate:k.useMemo(()=>Ut(n),[n])}});if(a){const T=r.map(h=>h.props).find(h=>h.value===p.value),f=T?T.children:void 0;return me.jsx(ls,{value:f,label:t,hideLabel:d,isEdited:g,size:m})}const c=p.value||"",b=!r.map(T=>T.props.value).includes(c)&&c!=="";return b&&console.warn(`No corresponding option found for value '${c}'`),me.jsxs(ai,{size:"small",className:u,error:Ht(v,e),label:t,description:s,value:i&&l||b?"":p.value,disabled:l,onChange:T=>{o&&o(T),p.onChange(T)},hideLabel:d,children:[me.jsx("option",{style:{display:"none"}}),",",r]})},UN="_textAreaFieldWithBadges_bdz0b_1",HN="_etikettWrapper_bdz0b_4",ql={textAreaFieldWithBadges:UN,etikettWrapper:HN},Hi=({name:e,label:t,readOnly:r,maxLength:n,badges:a,validate:s=[],parse:i=g=>g,className:o,description:l,isEdited:u,...d})=>{const{formState:{errors:g}}=vr(),{field:m}=Bt({name:e,rules:{validate:k.useMemo(()=>Ut(s),[s])}});return r?me.jsx(ls,{label:t,value:m.value,type:"textarea",isEdited:u,hideLabel:d.hideLabel}):me.jsxs("div",{className:a?ql.textAreaFieldWithBadges:null,children:[a&&me.jsx("div",{className:ql.etikettWrapper,children:a.map(({type:v,titleText:p})=>me.jsx(y0,{variant:v,size:"small",children:p},p))}),me.jsx(w0,{size:"small",label:t,description:l,className:o,autoComplete:"off",...m,onChange:v=>m.onChange(v.currentTarget.value!==""?i(v.currentTarget.value):null),value:m.value?m.value:"",error:Ht(g,e),maxLength:n,...d})]})},ds=({formMethods:e,onSubmit:t,children:r,className:n,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:i}=e;return k.useEffect(()=>()=>{a&&a(i())},[]),me.jsx(q0,{...e,children:me.jsx("form",{className:n,onSubmit:t?s(o=>t(o)):void 0,children:r})})};function Cm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var di={exports:{}},CN=di.exports,Vl;function YN(){return Vl||(Vl=1,function(e,t){(function(r,n){e.exports=n()})(CN,function(){return function(r,n){n.prototype.isSameOrAfter=function(a,s){return this.isSame(a,s)||this.isAfter(a,s)}}})}(di)),di.exports}var $N=YN();const WN=Cm($N);var ui={exports:{}},zN=ui.exports,xl;function JN(){return xl||(xl=1,function(e,t){(function(r,n){e.exports=n()})(zN,function(){return function(r,n){n.prototype.isSameOrBefore=function(a,s){return this.isSame(a,s)||this.isBefore(a,s)}}})}(ui)),ui.exports}var XN=JN();const ZN=Cm(XN),QN="Dato må være før eller lik {limit}",eI="Dato må være etter eller lik {limit}",nI="Perioder kan ikke overlappe i tid",rI="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",tI="Dato må være lik {value}",aI="Dato må skrives slik: dd.mm.åååå",sI="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",iI="Tallet kan ikke inneholde mer enn to desimaler",oI="Tallet kan ikke ha desimaler",lI="Feltet kan kun inneholde tall",dI="Ugyldig fødselsnummer",uI="Feltet må være et fødselsnummer (11 siffer)",gI="Ugyldig organisasjonsnummer.",mI="Ugyldig organisasjonsnummer eller fødselsnummer",kI="Startdato må være før eller lik sluttdato",fI="Periode er utenfor opptjeningsperioden",vI="Ugyldig saksnummer eller fødselsnummer",cI="Feltet inneholder ugyldige tegn: {text}",EI="Feltet inneholder en ugyldig verdi: {value}",pI="Feltet kan ikke inneholde mellomrom",yI="Feltet må fylles ut",bI="Du kan skrive maksimalt {length} tegn",hI="Du må skrive minst {length} tegn",AI="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",TI="Feltet må være mindre eller lik {length}",RI="Feltet må være større eller lik {length}",NI="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",II={DateNotBeforeOrEqual:QN,DateNotAfterOrEqual:eI,DateRangesOverlapping:nI,DateRangesOverlappingPeriodTypes:rI,DatesNotEqual:tI,InvalidDate:aI,InvalidDatesInPeriod:sI,InvalidDecimal:iI,InvalidInteger:oI,InvalidNumber:lI,InvalidFodselsnr:dI,InvalidFodselsnrFormat:uI,InvalidOrgnr:gI,InvalidOrgnrOrFodselsnr:mI,InvalidPeriod:kI,InvalidPeriodRange:fI,InvalidSaksnrOrFodselsnrFormat:vI,InvalidText:cI,InvalidValue:EI,IllegalWhiteSpace:pI,IsRequired:yI,MaxLength:bI,MinLength:hI,MaxLengthOrFodselsnr:AI,MaxValue:TI,MinValue:RI,SammeFodselsnrSomSoker:NI},{formatMessage:Dn}=Sn(II),_I=e=>Dn({id:"DateNotBeforeOrEqual"},{limit:e}),OI=e=>Dn({id:"DateNotAfterOrEqual"},{limit:e}),SI=()=>Dn({id:"InvalidDate"}),DI=e=>Dn({id:"InvalidInteger"},{text:e}),PI=e=>Dn({id:"InvalidNumber"},{text:e}),LI=e=>Dn({id:"InvalidText"},{text:e}),wI=()=>Dn({id:"IsRequired"}),jI=e=>Dn({id:"MaxLength"},{length:e}),MI=e=>Dn({id:"MinLength"},{length:e}),KI=e=>Dn({id:"MaxValue"},{length:e}),FI=e=>Dn({id:"MinValue"},{length:e}),qI=/(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|1\d|2\d|3[01])$/,VI=/^\d+([,.]\d+)?$/,xI=/^\s*\d+\s*$/,GI=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,BI=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,cr=e=>e==null||e.toString().trim().length===0,UI=()=>Te().subtract(1,"days").startOf("day"),HI=()=>Te().startOf("day");Te.extend(WN);Te.extend(ZN);const En=e=>cr(e)?wI():void 0,Ci=e=>t=>cr(t)||t.toString().trim().length>=e?null:MI(e),Yi=e=>t=>cr(t)||t.toString().trim().length<=e?null:jI(e),Ym=e=>t=>t>=e?null:FI(e),$m=e=>t=>t<=e?null:KI(e),CI=e=>cr(e)||VI.test(e.toString())?null:PI(e.toString()),YI=e=>cr(e)||xI.test(e.toString())?null:DI(e.toString()),Wm=e=>CI(e)||YI(e),Rt=e=>cr(e)||qI.test(e)?null:SI(),$I=e=>t=>{const r=Te(e).endOf("day");return cr(t)||Te(t).isSameOrBefore(r)?null:_I(r.format(xr))},$i=e=>t=>{const r=Te(e).startOf("day");return cr(t)||Te(t).isSameOrAfter(r)?null:OI(r.format(xr))},Gl=e=>$I(UI())(e),WI=e=>$i(HI())(e),Wi=e=>{if(!GI.test(e)){const t=e.replace(BI,"");return LI(t.replace(/[\t]/g,"Tabulatortegn"))}return null},zI=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const t=document.createAttribute("tabindex");t.value="-1";const r=e[0];r.setAttributeNode(t),document.activeElement.blur(),r.focus()}},300)},zm=({submitCallback:e,cancelEvent:t,showModal:r,ventearsaker:n,erTilbakekreving:a,frist:s,ventearsak:i,visBrevErBestilt:o=!1,hasManualPaVent:l,defaultVenteårsak:u=null})=>{const d=Un(),g=ss({defaultValues:XI(l,s,i??u)}),m=g.watch("frist"),v=g.watch("ventearsak"),p=r_(i,v),c=t_(s,m),b=!(s===m&&!p),T=n_(a,s,m,v);return E.jsx(ds,{formMethods:g,onSubmit:e,children:E.jsxs(xn,{width:"small",open:r,onClose:t,header:{heading:d.formatMessage({id:i?"SettPaVentModal.ErSettPaVent":"SettPaVentModal.SettesPaVent"})},children:[E.jsx(xn.Body,{children:E.jsxs(Be,{gap:"4",children:[(l||m)&&E.jsx(Tt,{label:E.jsx(C,{id:"SettPaVentModal.Frist"}),name:"frist",validate:[En,Rt,WI]}),E.jsx(BN,{name:"ventearsak",label:E.jsx(C,{id:"SettPaVentModal.Arsak"}),validate:[En],selectValues:n.filter(f=>!l||(a?e_(f,v):ZI.some(h=>h===f.kode))).sort((f,h)=>f.navn.localeCompare(h.navn)).map(f=>E.jsx("option",{value:f.kode,children:f.navn},f.kode)),readOnly:!l}),o&&E.jsx(te,{size:"small",children:E.jsx(C,{id:"SettPaVentModal.BrevBlirBestilt"})}),l&&E.jsx(te,{size:"small",children:E.jsx(C,{id:"SettPaVentModal.EndreFrist"})}),!l&&T&&E.jsxs(E.Fragment,{children:[E.jsx(te,{size:"small",children:E.jsx(C,{id:"SettPaVentModal.UtløptFrist"})}),E.jsx(te,{size:"small",children:E.jsx(C,{id:"SettPaVentModal.HenleggeSaken"})})]})]})}),E.jsxs(xn.Footer,{children:[E.jsx(xe,{size:"small",variant:"primary",style:{paddingInline:"36px"},onClick:b?zI:t,disabled:!p&&!c,children:E.jsx(C,{id:"SettPaVentModal.Ok"})}),(!l||b||!o)&&E.jsx(xe,{size:"small",variant:"secondary",onClick:t,type:"button",children:E.jsx(C,{id:p||c?"SettPaVentModal.Avbryt":"SettPaVentModal.Lukk"})})]})]})})},JI=()=>{const e=Te().toDate();return e.setDate(e.getDate()+28),Te(e).format(Wn)},XI=(e,t,r)=>({ventearsak:r??void 0,frist:t||e===!1?t??void 0:JI()}),ZI=[Qe.AVV_DOK,Qe.AVV_FODSEL,Qe.VENT_PÅ_BRUKERTILBAKEMELDING,Qe.UTV_FRIST,Qe.FOR_TIDLIG_SOKNAD,Qe.VENT_OPDT_INNTEKTSMELDING,Qe.VENT_UTLAND_TRYGD,Qe.UTVIDET_TILSVAR_FRIST,Qe.ENDRE_TILKJENT_YTELSE,Qe.VENT_PÅ_MULIG_MOTREGNING],QI=[Qe.VENT_PÅ_BRUKERTILBAKEMELDING,Qe.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG],e_=(e,t)=>QI.some(r=>r===e.kode)?e.kode===t:!0,n_=(e,t,r,n)=>{const a=e&&(!!r&&Gl(r)===null||!!t&&Gl(t)===null),s=n===Qe.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG;return e&&a&&s},r_=(e,t)=>!(e===t||!t&&!e),t_=(e,t)=>!(e===t||!t&&!e);zm.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModal",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasManualPaVent:{required:!0,tsType:{name:"boolean"},description:""},frist:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},ventearsak:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},defaultVenteårsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};const a_={"SettPaVentModal.ModalDescription":"Behandlingen settes på vent med frist","SettPaVentModal.ModalDescriptionErPaVent":"Behandlingen er satt på vent","SettPaVentModal.PaVent":"På vent","SettPaVentModal.SettesPaVent":"Behandlingen settes på vent","SettPaVentModal.ErSettPaVent":"Behandlingen er satt på vent","SettPaVentModal.Frist":"Frist","SettPaVentModal.Ok":"OK","SettPaVentModal.Avbryt":"Avbryt","SettPaVentModal.Lukk":"Lukk","SettPaVentModal.BrevBlirBestilt":"Brevet blir bestilt","SettPaVentModal.Arsak":"Årsak","SettPaVentModal.EndreFrist":"Du kan endre frist eller årsak før du fortsetter","SettPaVentModal.UtløptFrist":"OBS! Fristen på denne behandlingen er utløpt!","SettPaVentModal.HenleggeSaken":`Kontroller hvorfor Økonomi ikke har dannet et kravgrunnlag.
 Dersom det feilutbetalte beløpet er bortfalt skal saken henlegges.
For mer informasjon, se rutine under tilbakekreving.`},s_=Sn(a_),Jm=({frist:e=null,ventearsak:t=null,hasManualPaVent:r=!1,...n})=>E.jsx(Su,{value:s_,children:E.jsx(zm,{frist:e,ventearsak:t,hasManualPaVent:r,...n})});Jm.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModalIndex",props:{cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},frist:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},ventearsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:""},hasManualPaVent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},defaultVenteårsak:{required:!1,tsType:{name:"string"},description:""}}};const zi=k.createContext({isDirty:!1,setDirty:()=>{}}),Xm=({children:e})=>{const[t,r]=k.useState(!1),n=k.useMemo(()=>({isDirty:t,setDirty:r}),[t,r]);return E.jsx(zi.Provider,{value:n,children:e})},Ji=e=>{const t=k.useContext(zi);k.useEffect(()=>{t.setDirty(e)},[e])},i_=()=>k.useContext(zi).isDirty;Xm.__docgenInfo={description:`Håndterer state for data som skal hentes fra backend kun en gang og som en trenger aksess til
mange steder i applikasjonen.`,methods:[],displayName:"DirtyFormProvider"};const Bl=(e,t)=>({arbeidsgiverIdent:e,arbeidsgiverNavn:t.navn,...t.erPrivatPerson?{erPrivatPerson:!0,arbeidsgiverFødselsdato:t.fødselsdato}:{erPrivatPerson:!1}}),Zt=e=>t=>t.arbeidsgiverIdent===e.arbeidsgiverIdent,o_=(e,t)=>e.filter(r=>r.arbeidsgiverIdent===t),l_=(e,t)=>t.map(r=>{const n=e.find(a=>d_(r,a));return{arbeidsforhold:r,inntektsmelding:n}}),d_=(e,t)=>t.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!t.internArbeidsforholdId||t.internArbeidsforholdId===e.internArbeidsforholdId);var Ps={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ul;function u_(){return Ul||(Ul=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=a(s,n.call(this,o)))}return s}function n(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)t.call(s,o)&&s[o]&&(i=a(i,this&&this[o]||o));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Ps)),Ps.exports}var g_=u_();const m_=gk(g_),Zm=({saksnummer:e,journalpostId:t,dokumentId:r,dokumentTittel:n,children:a})=>{const s=`${t}-${r}`,i=uv(e,t,r);return E.jsx(Vi,{href:i,target:s,rel:"noopener noreferrer",onClick:k_(n),children:a??n})},k_=e=>t=>{e&&(t.preventDefault(),gv(t.currentTarget.href,t.currentTarget.target,e))};Zm.__docgenInfo={description:"",methods:[],displayName:"DokumentLink",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},journalpostId:{required:!0,tsType:{name:"string"},description:""},dokumentId:{required:!0,tsType:{name:"string"},description:""},dokumentTittel:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const f_="_inline_glms2_1",v_="_docIcon_glms2_9",c_="_phoneIcon_glms2_14",Ls={inline:f_,docIcon:v_,phoneIcon:c_},Nt=({saksnummer:e,arbeidsforhold:t,inntektsmelding:r,skalViseArbeidsforholdId:n,alleKodeverk:a,ikkeVisInfo:s,radData:i})=>E.jsxs(E.Fragment,{children:[E.jsxs(Be,{gap:"4",children:[!s&&E.jsxs(De,{gap:"4",children:[E.jsx(Ie,{size:"small",children:E.jsx(C,{id:i.erPrivatPerson?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),E.jsx(te,{size:"small",children:i.erPrivatPerson?E.jsx(Ba,{dateString:i.arbeidsgiverFødselsdato}):i.arbeidsgiverIdent})]}),n&&E.jsxs(De,{gap:"4",children:[E.jsx(Ie,{size:"small",children:E.jsx(C,{id:"InntektsmeldingOpplysningerPanel.ArbeidsforholdId"})}),E.jsx(te,{size:"small",children:r.eksternArbeidsforholdId})]}),t&&E.jsxs(E.Fragment,{children:[E.jsxs(De,{gap:"4",children:[E.jsx(Ie,{size:"small",children:E.jsx(C,{id:"InntektsmeldingOpplysningerPanel.Stillingsprosent"})}),E.jsx(te,{size:"small",children:`${t.stillingsprosent}%`})]}),t.permisjonOgMangel&&E.jsxs(De,{gap:"4",children:[E.jsx(Ie,{size:"small",children:ws(a,bt.PERMISJONSBESKRIVELSE_TYPE,t.permisjonOgMangel.type)}),E.jsx(te,{size:"small",children:E.jsx(yt,{dateStringFom:t.permisjonOgMangel.permisjonFom,dateStringTom:t.permisjonOgMangel.permisjonTom})})]})]}),E.jsxs(De,{gap:"4",children:[E.jsx(Ie,{size:"small",children:E.jsx(C,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),E.jsx(te,{size:"small",children:Cs(r.inntektPrMnd)})]}),E.jsxs(De,{gap:"4",children:[E.jsx(Ie,{size:"small",children:E.jsx(C,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),E.jsx(te,{size:"small",children:E.jsx(C,{id:r.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),r.refusjonPrMnd!==void 0&&r.refusjonPrMnd!==null&&E.jsxs(De,{gap:"4",children:[E.jsx(Ie,{size:"small",children:E.jsx(C,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),E.jsx(te,{size:"small",children:Cs(r.refusjonPrMnd)})]}),E.jsxs(Zm,{saksnummer:e,journalpostId:r.journalpostId,dokumentId:r.dokumentId,children:[E.jsx(te,{size:"small",className:Ls.inline,children:E.jsx(C,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})}),E.jsx(iE,{className:Ls.docIcon})]})]}),E.jsxs(De,{gap:"4",children:[E.jsx(EE,{className:Ls.phoneIcon}),E.jsxs(Be,{gap:"1",children:[E.jsx(Ie,{size:"small",children:E.jsx(C,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),E.jsx(Wr,{children:r.kontaktpersonNavn}),E.jsx(Wr,{children:E.jsx(C,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:r.kontaktpersonNummer}})})]})]})]});Nt.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforhold:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""},skalViseArbeidsforholdId:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!1,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},ikkeVisInfo:{required:!1,tsType:{name:"boolean"},description:""}}};const E_="_inline_10adz_1",p_="_aksjonpunktImage_10adz_5",y_="_arrow_10adz_12",b_="_ikkeMottatt_10adz_18",h_="_skiller_10adz_30",Ar={inline:E_,aksjonpunktImage:p_,arrow:y_,ikkeMottatt:b_,skiller:h_},A_=e=>{const t=Math.ceil(e.length/25);return Array.from({length:t},(n,a)=>e.slice(a*25,a*25+25)).join("-")},Xi=({saksnummer:e,alleKodeverk:t,radData:r})=>{const n=Un(),[a,s]=k.useState({}),{arbeidsforholdForRad:i,inntektsmeldingerForRad:o,arbeidsgiverIdent:l,erPrivatPerson:u}=r,d=i.length===1,g=l_(o,i);return E.jsxs(Be,{gap:"4",children:[E.jsxs(De,{gap:"4",children:[E.jsx(Ie,{size:"small",children:E.jsx(C,{id:u?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),E.jsx(te,{size:"small",children:u?E.jsx(Ba,{dateString:r.arbeidsgiverFødselsdato}):l})]}),!d&&E.jsxs(E.Fragment,{children:[E.jsx(wl,{dividerParagraf:!0,className:Ar.skiller}),g.map(({arbeidsforhold:m,inntektsmelding:v})=>E.jsxs(y.Fragment,{children:[E.jsxs(Be,{gap:"2",children:[E.jsxs(De,{gap:"4",children:[E.jsx(Ie,{size:"small",children:E.jsx(C,{id:"ArbeidsforholdInformasjonPanel.ArbeidsforholdId"})}),E.jsxs("div",{children:[(m==null?void 0:m.eksternArbeidsforholdId)&&m.eksternArbeidsforholdId.length<50&&E.jsx("div",{children:E.jsx(te,{size:"small",children:m.eksternArbeidsforholdId})}),(m==null?void 0:m.eksternArbeidsforholdId)&&m.eksternArbeidsforholdId.length>=50&&E.jsx(h0,{content:A_(m.eksternArbeidsforholdId),children:E.jsx(te,{size:"small",children:`${m.eksternArbeidsforholdId.substring(0,50)}...`})}),!m.eksternArbeidsforholdId&&E.jsx(te,{size:"small",children:"-"})]}),v&&E.jsxs(E.Fragment,{children:[E.jsx(Cr,{}),E.jsx(Ie,{size:"small",children:E.jsx(C,{id:"ArbeidsforholdInformasjonPanel.ImMottatt"})})]}),!v&&E.jsxs(E.Fragment,{children:[E.jsx(Cr,{}),E.jsxs("div",{children:[E.jsx(Ei,{className:Ar.aksjonpunktImage,title:n.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"})}),E.jsx("div",{className:Ar.ikkeMottatt,children:E.jsx(Ie,{size:"small",children:E.jsx(C,{id:"ArbeidsforholdInformasjonPanel.ImIkkeMottatt"})})})]})]})]}),E.jsxs(De,{gap:"4",children:[E.jsx(Ie,{size:"small",children:E.jsx(C,{id:"ArbeidsforholdInformasjonPanel.Periode"})}),E.jsx(te,{size:"small",children:E.jsx(yt,{dateStringFom:m.fom,dateStringTom:m.tom})}),v&&E.jsxs(E.Fragment,{children:[E.jsx(Cr,{}),E.jsx(te,{size:"small",children:E.jsx(Ba,{dateString:v.motattDato})})]})]}),E.jsxs(De,{gap:"4",children:[E.jsx(Ie,{size:"small",children:E.jsx(C,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),E.jsx(te,{size:"small",children:`${m.stillingsprosent}%`})]}),m.permisjonOgMangel&&E.jsxs(De,{gap:"4",children:[E.jsx(Ie,{size:"small",children:ws(t,bt.PERMISJONSBESKRIVELSE_TYPE,m.permisjonOgMangel.type)}),E.jsx(te,{size:"small",children:E.jsx(yt,{dateStringFom:m.permisjonOgMangel.permisjonFom,dateStringTom:m.permisjonOgMangel.permisjonTom})})]}),v&&E.jsxs(E.Fragment,{children:[m.internArbeidsforholdId&&a[m.internArbeidsforholdId]&&E.jsx(Nt,{saksnummer:e,inntektsmelding:v,skalViseArbeidsforholdId:!1,radData:r}),E.jsxs(Vi,{onClick:p=>{p.preventDefault(),s(c=>{if(!m.internArbeidsforholdId)return c;const b=c[m.internArbeidsforholdId];return{...c,[m.internArbeidsforholdId]:b===void 0||b===!1}})},href:"",children:[E.jsx("span",{children:E.jsx(te,{size:"small",className:Ar.inline,children:E.jsx(C,{id:!m.internArbeidsforholdId||!a[m.internArbeidsforholdId]?"ArbeidsforholdInformasjonPanel.ApneImInfo":"ArbeidsforholdInformasjonPanel.LukkeImInfo"})})}),m.internArbeidsforholdId&&a[m.internArbeidsforholdId]?E.jsx(Bu,{className:Ar.arrow}):E.jsx($a,{className:Ar.arrow})]})]})]}),E.jsx(wl,{dividerParagraf:!0,className:Ar.skiller})]},`${m.arbeidsgiverIdent}${m.internArbeidsforholdId}`))]}),d&&g.length>0&&g[0].inntektsmelding&&E.jsx(Nt,{saksnummer:e,radData:r,arbeidsforhold:i[0],inntektsmelding:g[0].inntektsmelding,skalViseArbeidsforholdId:o.length>1,alleKodeverk:t,ikkeVisInfo:!0}),d&&o.length===0&&E.jsxs(E.Fragment,{children:[E.jsxs(De,{gap:"4",children:[E.jsx(Ie,{size:"small",children:E.jsx(C,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),E.jsx(te,{size:"small",children:`${i[0].stillingsprosent}%`})]}),i[0].permisjonOgMangel&&E.jsxs(De,{gap:"4",children:[E.jsx(Ie,{size:"small",children:ws(t,bt.PERMISJONSBESKRIVELSE_TYPE,i[0].permisjonOgMangel.type)}),E.jsx(te,{size:"small",children:E.jsx(yt,{dateStringFom:i[0].permisjonOgMangel.permisjonFom,dateStringTom:i[0].permisjonOgMangel.permisjonTom})})]})]})]})};Xi.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const T_="_bredde_gb3eb_1",R_="_inline_gb3eb_9",N_="_arrow_gb3eb_13",Qt={bredde:T_,inline:R_,arrow:N_},I_=(e,t)=>{const n=Te(e).subtract(1,"month").startOf("month"),a=n.subtract(12,"month"),s=[];for(let i=n;i.isAfter(a);i=i.subtract(1,"month")){const o=i.format(Wn),l=t.find(u=>Te(u.fom).startOf("month").format(Wn)===o);s.push({beløp:(l==null?void 0:l.beløp)||0,fom:o})}return s},gi=({saksnummer:e,skjæringstidspunkt:t,alleKodeverk:r,radData:n})=>{const[a,s]=k.useState(!1),{inntektsposter:i,arbeidsforholdForRad:o}=n,l=k.useMemo(()=>I_(t,i),[i]),u=o.length===1,d=i.length>0&&i.some(g=>g.beløp>0);return E.jsxs(Be,{gap:"8",children:[E.jsx(Xi,{saksnummer:e,alleKodeverk:r,radData:n}),d&&E.jsxs(Be,{gap:"2",children:[E.jsx(Ie,{size:"small",children:E.jsx(C,{id:u?"ArbeidsforholdInformasjonPanel.Inntekter":"ArbeidsforholdInformasjonPanel.TotaltInntekter"})}),E.jsx(Be,{gap:"1",children:l.filter((g,m)=>a?!0:m<3).map(g=>E.jsxs(De,{gap:"2",className:Qt.bredde,children:[E.jsx(te,{size:"small",children:E.jsx(C,{id:`ArbeidsforholdInformasjonPanel.${Te(g.fom).month()+1}`})}),E.jsx(te,{size:"small",children:Te(g.fom).year()}),E.jsx(Cr,{}),E.jsx(te,{size:"small",children:Cs(g.beløp)})]},g.fom))}),E.jsxs(Vi,{onClick:g=>{g.preventDefault(),s(!a)},href:"",children:[E.jsx("span",{children:E.jsx(te,{size:"small",className:Qt.inline,children:E.jsx(C,{id:a?"ArbeidsforholdInformasjonPanel.FaerreManeder":"ArbeidsforholdInformasjonPanel.TidligereManeder"})})}),a?E.jsx(Bu,{className:Qt.arrow}):E.jsx($a,{className:Qt.arrow})]})]}),!d&&E.jsx(Ie,{size:"small",children:E.jsx(C,{id:"ArbeidsforholdInformasjonPanel.IngenInntekt"})})]})};gi.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInformasjonPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const __="_hjelpetekst_tezw4_1",O_="_alertStripe_tezw4_5",S_="_hjelpetekstInnhold_tezw4_9",D_="_svg_tezw4_14",ea={hjelpetekst:__,alertStripe:O_,hjelpetekstInnhold:S_,svg:D_},P_=Ci(3),L_=Yi(1500),w_=Ym(1),j_=$m(100),M_=e=>t=>{const r=e("fom");return r&&t?$i(r)(t):null},K_=(e,t,r,n)=>()=>{e(a=>a.map(s=>{if(r.arbeidsgiverIdent===s.arbeidsgiverIdent){const o=n.saksbehandlersVurdering===ve.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverIdent:r.arbeidsgiverIdent,fom:n.fom,tom:n.tom,stillingsprosent:n.stillingsprosent,begrunnelse:n.begrunnelse,saksbehandlersVurdering:n.saksbehandlersVurdering}:{begrunnelse:n.begrunnelse,saksbehandlersVurdering:n.saksbehandlersVurdering};return{...t,avklaring:o}}return s}))},Qm=({behandlingUuid:e,behandlingVersjon:t,radData:r,isReadOnly:n,registrerArbeidsforhold:a,lagreVurdering:s,lukkArbeidsforholdRad:i,oppdaterTabell:o})=>{const l=Un(),u=k.useMemo(()=>{var h,R,A,O,I;return{saksbehandlersVurdering:(h=r.avklaring)==null?void 0:h.saksbehandlersVurdering,begrunnelse:(R=r.avklaring)==null?void 0:R.begrunnelse,fom:(A=r.avklaring)==null?void 0:A.fom,tom:(O=r.avklaring)==null?void 0:O.tom,stillingsprosent:(I=r.avklaring)==null?void 0:I.stillingsprosent}},[r]),d=ss({defaultValues:u});Ji(d.formState.isDirty);const g=d.watch("saksbehandlersVurdering"),m=()=>{i(),d.reset(u)},v=r.inntektsmeldingerForRad[0],p=h=>{const R=K_(o,r,v,h);return h.saksbehandlersVurdering===ve.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?a({behandlingUuid:e,behandlingVersjon:t,internArbeidsforholdRef:v.internArbeidsforholdId,arbeidsgiverNavn:r.arbeidsgiverNavn,arbeidsgiverIdent:v.arbeidsgiverIdent,vurdering:ve.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:h.begrunnelse,fom:h.fom,tom:h.tom,stillingsprosent:h.stillingsprosent}).then(R).finally(()=>d.reset(h)):s({behandlingUuid:e,behandlingVersjon:t,vurdering:h.saksbehandlersVurdering,begrunnelse:h.begrunnelse,arbeidsgiverIdent:v.arbeidsgiverIdent,internArbeidsforholdRef:v.internArbeidsforholdId}).then(R).finally(()=>d.reset(h))},c=k.useRef(null),[b,T]=k.useState(!1),f=k.useCallback(()=>T(h=>!h),[]);return E.jsxs(Be,{gap:"8",children:[E.jsx("div",{className:ea.alertStripe,children:E.jsx(Kt,{variant:"info",children:E.jsx(C,{id:"ManglendeOpplysningerForm.ErMottattMenIkkeReg"})})}),E.jsx(ds,{formMethods:d,onSubmit:p,children:E.jsxs(Be,{gap:"4",children:[E.jsx(Hm,{name:"saksbehandlersVurdering",label:E.jsxs(De,{gap:"2",children:[E.jsx(C,{id:"ManglendeOpplysningerForm.SkalBrukeInntekstmelding"}),E.jsx(Hu,{className:ea.svg,ref:c,onClick:f,title:l.formatMessage({id:"ManglendeOpplysningerForm.AltHjelpetekst"})}),E.jsx(Qr,{open:b,onClose:f,anchorEl:c.current,className:ea.hjelpetekst,children:E.jsx(Qr.Content,{className:ea.hjelpetekstInnhold,children:E.jsx(te,{children:E.jsx(C,{id:"ManglendeOpplysningerForm.Hjelpetekst"})})})})]}),validate:[En],isReadOnly:n,radios:[{label:l.formatMessage({id:"ManglendeOpplysningerForm.TarKontakt"}),value:ve.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD},{label:l.formatMessage({id:"ManglendeOpplysningerForm.GåVidere"}),value:ve.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING},{label:l.formatMessage({id:"ManglendeOpplysningerForm.OpprettArbeidsforhold"}),value:ve.OPPRETT_BASERT_PÅ_INNTEKTSMELDING}]}),g===ve.OPPRETT_BASERT_PÅ_INNTEKTSMELDING&&E.jsxs(De,{gap:"4",children:[E.jsx(Tt,{name:"fom",label:E.jsx(C,{id:"ManglendeOpplysningerForm.PeriodeFra"}),validate:[En,Rt],isReadOnly:n}),E.jsx(Tt,{name:"tom",label:E.jsx(C,{id:"ManglendeOpplysningerForm.PeriodeTil"}),validate:[Rt,M_(d.getValues)],isReadOnly:n}),E.jsx(li,{name:"stillingsprosent",label:E.jsx(C,{id:"ManglendeOpplysningerForm.Stillingsprosent"}),parse:h=>{const R=parseInt(h.toString(),10);return Number.isNaN(R)?h:R},validate:[En,Wm,w_,j_],readOnly:n,maxLength:3})]}),E.jsx(Hi,{label:E.jsx(C,{id:"ManglendeOpplysningerForm.Begrunn"}),name:"begrunnelse",validate:[En,P_,L_,Wi],maxLength:1500,readOnly:n}),!n&&E.jsxs(De,{gap:"4",children:[E.jsx(xe,{size:"small",variant:"secondary",loading:d.formState.isSubmitting,disabled:!d.formState.isDirty||d.formState.isSubmitting,children:E.jsx(C,{id:"ManglendeOpplysningerForm.Lagre"})}),E.jsx(xe,{size:"small",variant:"tertiary",loading:!1,disabled:d.formState.isSubmitting,onClick:m,type:"button",children:E.jsx(C,{id:"ManglendeOpplysningerForm.Avbryt"})})]})]})})]})};Qm.__docgenInfo={description:"",methods:[],displayName:"ManglendeArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lukkArbeidsforholdRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},oppdaterTabell:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"},name:"rader"}],return:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const F_="_alertStripe_1jozr_1",q_="_hjelpetekst_1jozr_5",V_="_hjelpetekstInnhold_1jozr_9",x_="_svg_1jozr_14",na={alertStripe:F_,hjelpetekst:q_,hjelpetekstInnhold:V_,svg:x_},G_=Ci(3),B_=Yi(1500),U_=(e,t,r)=>()=>{e(n=>n.map(a=>a.arbeidsgiverIdent===t.arbeidsgiverIdent?{...t,avklaring:{begrunnelse:r.begrunnelse,saksbehandlersVurdering:r.saksbehandlersVurdering}}:a))},ek=({behandlingUuid:e,behandlingVersjon:t,radData:r,isReadOnly:n,lagreVurdering:a,lukkArbeidsforholdRad:s,oppdaterTabell:i})=>{const o=Un(),{arbeidsforholdForRad:l,inntektsmeldingerForRad:u}=r,d=k.useMemo(()=>{var R,A;return{saksbehandlersVurdering:(R=r.avklaring)==null?void 0:R.saksbehandlersVurdering,begrunnelse:(A=r.avklaring)==null?void 0:A.begrunnelse}},[r]),g=ss({defaultValues:d});Ji(g.formState.isDirty);const m=l.length===1,v=()=>{s(),g.reset(d)},p=R=>{const A={behandlingUuid:e,behandlingVersjon:t,vurdering:R.saksbehandlersVurdering,arbeidsgiverIdent:r.arbeidsgiverIdent,internArbeidsforholdRef:m?l[0].internArbeidsforholdId:void 0,begrunnelse:R.begrunnelse};return a(A).then(U_(i,r,R)).finally(()=>g.reset(R))},c=k.useRef(null),[b,T]=k.useState(!1),f=k.useCallback(()=>T(R=>!R),[]),h=[{label:o.formatMessage({id:"InntektsmeldingInnhentesForm.TarKontakt"}),value:ve.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING},{label:o.formatMessage({id:"InntektsmeldingInnhentesForm.GåVidere"}),value:ve.FORTSETT_UTEN_INNTEKTSMELDING}];return r.erPrivatPerson||h.splice(1,0,{label:o.formatMessage({id:"InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo"}),value:ve.MELDING_TIL_ARBEIDSGIVER_NAV_NO}),E.jsx(ds,{formMethods:g,onSubmit:p,children:E.jsxs(Be,{gap:"4",children:[!m&&u.length>0&&E.jsx("div",{className:na.alertStripe,children:E.jsx(Kt,{variant:"info",children:E.jsx(C,{id:"InntektsmeldingInnhentesForm.InnehentAlle"})})}),E.jsx(Hm,{name:"saksbehandlersVurdering",label:E.jsxs(De,{gap:"2",children:[E.jsx(C,{id:"InntektsmeldingInnhentesForm.MåInnhentes"}),E.jsx(Hu,{ref:c,onClick:f,className:na.svg,title:o.formatMessage({id:"InntektsmeldingInnhentesForm.AltHjelpetekst"})}),E.jsx(Qr,{open:b,onClose:f,anchorEl:c.current,className:na.hjelpetekst,children:E.jsx(Qr.Content,{className:na.hjelpetekstInnhold,children:E.jsxs(Be,{gap:"4",children:[E.jsx(te,{children:E.jsx(C,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel1"})}),E.jsx(te,{children:E.jsx(C,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel2"})}),E.jsx(te,{children:E.jsx(C,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel3"})})]})})})]}),validate:[En],isReadOnly:n,radios:h}),E.jsx(Hi,{label:E.jsx(C,{id:m?"InntektsmeldingInnhentesForm.Begrunn":"InntektsmeldingInnhentesForm.Kommentar"}),name:"begrunnelse",validate:[En,G_,B_,Wi],maxLength:1500,readOnly:n}),!n&&E.jsxs(De,{gap:"4",children:[E.jsx(xe,{size:"small",variant:"secondary",loading:g.formState.isSubmitting,disabled:!g.formState.isDirty||g.formState.isSubmitting,children:E.jsx(C,{id:"InntektsmeldingInnhentesForm.Lagre"})}),E.jsx(xe,{size:"small",variant:"tertiary",loading:!1,disabled:g.formState.isSubmitting,onClick:v,type:"button",children:E.jsx(C,{id:"InntektsmeldingInnhentesForm.Avbryt"})})]})]})})};ek.__docgenInfo={description:"",methods:[],displayName:"ManglendeInntektsmeldingForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lukkArbeidsforholdRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},oppdaterTabell:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"},name:"rader"}],return:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const It="342352362",H_=Ci(3),C_=Yi(1500),Y_=Ym(1),$_=$m(100),W_=e=>t=>{const r=e("fom");return t&&r?$i(r)(t):null},z_=e=>t=>{const r={erPrivatPerson:!1,arbeidsgiverIdent:It,arbeidsgiverNavn:e.arbeidsgiverNavn,avklaring:{fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent,arbeidsgiverNavn:e.arbeidsgiverNavn,begrunnelse:e.begrunnelse,saksbehandlersVurdering:ve.MANUELT_OPPRETTET_AV_SAKSBEHANDLER},inntektsmeldingerForRad:[],inntektsposter:[],arbeidsforholdForRad:[]},n=t.findIndex(a=>a.arbeidsgiverIdent===It);return n===-1?t.concat(r):t.map((a,s)=>s===n?r:a)},J_=(e,t,r)=>()=>{e(n=>n.filter(a=>a.arbeidsgiverIdent!==It)),r&&t()},Zi=({behandlingUuid:e,behandlingVersjon:t,isReadOnly:r,registrerArbeidsforhold:n,radData:a,lukkArbeidsforholdRad:s,erOverstyrt:i,oppdaterTabell:o,erNyttArbeidsforhold:l=!1})=>{const u=Un(),[d,g]=k.useState(!1),m=k.useMemo(()=>{var T,f,h,R,A;return{fom:(T=a==null?void 0:a.avklaring)==null?void 0:T.fom,tom:(f=a==null?void 0:a.avklaring)==null?void 0:f.tom,stillingsprosent:(h=a==null?void 0:a.avklaring)==null?void 0:h.stillingsprosent,begrunnelse:(R=a==null?void 0:a.avklaring)==null?void 0:R.begrunnelse,arbeidsgiverNavn:(A=a==null?void 0:a.avklaring)==null?void 0:A.arbeidsgiverNavn}},[a]),v=ss({defaultValues:m});Ji(v.formState.isDirty);const p=()=>{s(),v.reset(m)},c=T=>{const f=Hl(ve.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,e,t,T);return n(f).then(()=>{o(z_(T)),v.reset(T),l&&s()})},b=()=>{const T=v.getValues(),f=Hl(ve.FJERN_FRA_BEHANDLINGEN,e,t,T);n(f).then(J_(o,s,l))};return E.jsxs(Be,{gap:"4",children:[!a&&E.jsx(Ya,{size:"small",children:E.jsx(C,{id:"LeggTilArbeidsforholdForm.LeggTilArbeidsforhold"})}),E.jsx(ds,{formMethods:v,onSubmit:c,children:E.jsxs(Be,{gap:"6",children:[E.jsxs(De,{gap:"4",children:[i&&E.jsxs(E.Fragment,{children:[E.jsx(li,{name:"arbeidsgiverNavn",label:E.jsx(C,{id:"LeggTilArbeidsforholdForm.Arbeidsgiver"}),validate:[En],readOnly:r||!i}),E.jsx(Tt,{name:"fom",label:E.jsx(C,{id:"LeggTilArbeidsforholdForm.PeriodeFra"}),validate:[En,Rt],isReadOnly:r||!i}),E.jsx(Tt,{name:"tom",label:E.jsx(C,{id:"LeggTilArbeidsforholdForm.PeriodeTil"}),validate:[Rt,W_(v.getValues)],isReadOnly:r||!i})]}),E.jsx(li,{name:"stillingsprosent",label:E.jsx(C,{id:"LeggTilArbeidsforholdForm.Stillingsprosent"}),parse:T=>{const f=parseInt(T.toString(),10);return Number.isNaN(f)?T:f},validate:[En,Wm,Y_,$_],readOnly:r||!i,maxLength:3})]}),E.jsx(Hi,{label:E.jsx(C,{id:"LeggTilArbeidsforholdForm.Begrunn"}),name:"begrunnelse",validate:[En,H_,C_,Wi],maxLength:1500,readOnly:r||!i}),i&&E.jsxs(De,{gap:"4",children:[E.jsx(xe,{size:"small",variant:"secondary",loading:v.formState.isSubmitting,disabled:!v.formState.isDirty||v.formState.isSubmitting,children:E.jsx(C,{id:"LeggTilArbeidsforholdForm.Lagre"})}),E.jsx(xe,{size:"small",variant:"tertiary",loading:!1,disabled:v.formState.isSubmitting,onClick:p,type:"button",children:E.jsx(C,{id:"LeggTilArbeidsforholdForm.Avbryt"})}),a&&E.jsxs(E.Fragment,{children:[E.jsx(Cr,{}),E.jsx(xe,{size:"small",variant:"tertiary",loading:!1,disabled:v.formState.isSubmitting,onClick:()=>g(!0),type:"button",icon:E.jsx(IE,{"aria-hidden":!0}),children:E.jsx(C,{id:"LeggTilArbeidsforholdForm.Slett"})})]})]})]})}),d&&E.jsx(yN,{text:u.formatMessage({id:"NyttArbeidsforholdForm.VilDuSlette"}),submit:b,cancel:()=>g(!1),showModal:!0})]})},Hl=(e,t,r,n)=>({vurdering:e,behandlingUuid:t,behandlingVersjon:r,arbeidsgiverIdent:It,begrunnelse:n.begrunnelse,arbeidsgiverNavn:n.arbeidsgiverNavn,fom:n.fom,tom:n.tom,stillingsprosent:n.stillingsprosent});Zi.__docgenInfo={description:"",methods:[],displayName:"ManueltLagtTilArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},radData:{required:!1,tsType:{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},lukkArbeidsforholdRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erOverstyrt:{required:!0,tsType:{name:"boolean"},description:""},oppdaterTabell:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"},name:"rader"}],return:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},erNyttArbeidsforhold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const X_="_exclamationmarkIcon_1a4yb_1",Z_="_checkmarkIcon_1a4yb_8",Q_="_panelOpen_1a4yb_15",eO="_panelOpenAp_1a4yb_24",nO="_row_1a4yb_34",rO="_isOpen_1a4yb_40",tO="_isApOpen_1a4yb_44",ft={exclamationmarkIcon:X_,checkmarkIcon:Z_,panelOpen:Q_,panelOpenAp:eO,row:nO,isOpen:rO,isApOpen:tO},aO=m_.bind(ft),sO=(e,t)=>e?"ArbeidsforholdRad.Saksbehandler":t?"ArbeidsforholdRad.AaRegisteret":"ArbeidsforholdRad.Inntektsmelding",iO=(e,t)=>{if((t==null?void 0:t.saksbehandlersVurdering)===ve.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||(t==null?void 0:t.saksbehandlersVurdering)===ve.OPPRETT_BASERT_PÅ_INNTEKTSMELDING)return{fom:t==null?void 0:t.fom,tom:t==null?void 0:t.tom};const r=e.reduce((n,a)=>({fom:n.fom&&Te(n.fom).isBefore(a.fom)?n.fom:a.fom,tom:n.tom&&Te(n.tom).isAfter(a.tom)?n.tom:a.tom}),{fom:void 0,tom:void 0});return r.fom?r:void 0},nk=({saksnummer:e,behandlingUuid:t,behandlingVersjon:r,radData:n,isReadOnly:a,erOverstyrt:s,oppdaterTabell:i,registrerArbeidsforhold:o,lagreVurdering:l,toggleÅpenRad:u,erRadÅpen:d,alleKodeverk:g,skjæringstidspunkt:m})=>{const v=Un(),{inntektsmeldingerForRad:p,arbeidsforholdForRad:c,arbeidsgiverNavn:b,avklaring:T,årsak:f}=n,h=(T==null?void 0:T.saksbehandlersVurdering)===ve.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,R=c.length>0&&p.length>0&&!f,A=f===Ce.MANGLENDE_INNTEKTSMELDING,O=f===Ce.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,I=!!f&&!(T!=null&&T.saksbehandlersVurdering),S=c.length>0&&p.length===0&&!f&&!h,P=c.length===0&&p.length>0&&!f,M=k.useMemo(()=>iO(c,T),[h,c,T]);return E.jsxs(Le.ExpandableRow,{open:d,onOpenChange:u,expandOnRowClick:!0,togglePlacement:"right",contentGutter:"none",className:aO("row",{isOpen:d,isApOpen:I}),content:E.jsxs(Be,{gap:"4",className:I?ft.panelOpenAp:ft.panelOpen,children:[h&&E.jsx(Zi,{behandlingUuid:t,behandlingVersjon:r,isReadOnly:!1,registrerArbeidsforhold:o,radData:n,lukkArbeidsforholdRad:u,erOverstyrt:s,oppdaterTabell:i}),R&&E.jsx(Xi,{saksnummer:e,alleKodeverk:g,radData:n}),P&&E.jsx(Nt,{saksnummer:e,arbeidsforhold:c.length>0?c[0]:void 0,inntektsmelding:p[0],skalViseArbeidsforholdId:!1,alleKodeverk:g,radData:n}),A&&E.jsxs(E.Fragment,{children:[E.jsx(gi,{saksnummer:e,skjæringstidspunkt:m,alleKodeverk:g,radData:n}),E.jsx(ek,{behandlingUuid:t,behandlingVersjon:r,isReadOnly:a,radData:n,lagreVurdering:l,lukkArbeidsforholdRad:u,oppdaterTabell:i})]}),O&&E.jsxs(E.Fragment,{children:[E.jsx(Nt,{saksnummer:e,inntektsmelding:p[0],skalViseArbeidsforholdId:p.length>1,radData:n}),E.jsx(Qm,{behandlingUuid:t,behandlingVersjon:r,radData:n,isReadOnly:a,registrerArbeidsforhold:o,lagreVurdering:l,lukkArbeidsforholdRad:u,oppdaterTabell:i})]}),S&&E.jsx(gi,{saksnummer:e,skjæringstidspunkt:m,alleKodeverk:g,radData:n})]}),children:[E.jsxs(Le.DataCell,{children:[!I&&E.jsx(Qc,{title:v.formatMessage({id:"ArbeidsforholdRad.Ok"}),className:ft.checkmarkIcon}),I&&E.jsx(Ei,{title:v.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"}),className:ft.exclamationmarkIcon})]}),E.jsx(Le.DataCell,{children:E.jsx(te,{children:b})}),E.jsx(Le.DataCell,{children:E.jsx(te,{children:M!=null&&M.fom?E.jsx(yt,{dateStringFom:M.fom,dateStringTom:M.tom}):"-"})}),E.jsx(Le.DataCell,{children:E.jsx(te,{children:E.jsx(C,{id:sO(h,c.length>0)})})}),E.jsx(Le.DataCell,{children:E.jsxs(te,{children:[c.length<2&&p.length===1&&E.jsx(Ba,{dateString:p[0].motattDato}),!A&&c.length>1&&p.length===c.length&&E.jsx(C,{id:"ArbeidsforholdRad.Mottatt"}),(h||A&&p.length<c.length)&&E.jsx(C,{id:"ArbeidsforholdRad.IkkeMottatt"})]})})]})};nk.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdRad",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},erOverstyrt:{required:!0,tsType:{name:"boolean"},description:""},oppdaterTabell:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"},name:"rader"}],return:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},toggleÅpenRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erRadÅpen:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const oO="_alertStripe_mucgx_5",lO={alertStripe:oO},dO=(e,t)=>{const r=e.some(i=>i.årsak===Ce.MANGLENDE_INNTEKTSMELDING),n=e.some(i=>i.årsak===Ce.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD),a=(t==null?void 0:t.status)===Ye.OPPRETTET,s=[];return a&&r&&s.push("ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding"),a&&n&&s.push("ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger"),s},rk=({behandling:e,aksjonspunkt:t,readOnly:r,arbeidOgInntekt:n,registrerArbeidsforhold:a,erOverstyrer:s,tabellData:i,settÅpneRadIndexer:o,setErOverstyrt:l,oppdaterTabell:u})=>{const d=Un(),{arbeidsforhold:g,inntektsmeldinger:m}=n,[v,p]=k.useState(!1),[c,b]=k.useState(!1),T=k.useCallback(()=>{l(!0),p(!0);const A=i.findIndex(O=>{var I;return((I=O.avklaring)==null?void 0:I.saksbehandlersVurdering)===ve.MANUELT_OPPRETTET_AV_SAKSBEHANDLER});A!==-1&&o([A])},[i,o]),f=k.useMemo(()=>dO(i,t),[e.versjon]),h=i.every(A=>A.arbeidsgiverIdent!==It),R=(t==null?void 0:t.status)===Ye.OPPRETTET;return E.jsxs(Be,{gap:"8",children:[E.jsxs(De,{gap:"4",children:[E.jsx(Ya,{size:"small",children:E.jsx(C,{id:"ArbeidOgInntektFaktaPanel.Overskrift"})}),s&&R&&!r&&E.jsx(lN,{onClick:T}),E.jsx(Cr,{}),E.jsx(te,{size:"small",children:E.jsx(C,{id:"ArbeidOgInntektFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Ca(n.skjæringstidspunkt)}})})]}),E.jsxs(Be,{gap:"4",children:[f.length>0&&E.jsx(sN,{children:f.map(A=>d.formatMessage({id:A})).join(" ")}),g.length===0&&m.length===0&&s&&E.jsx("div",{className:lO.alertStripe,children:E.jsx(Kt,{variant:"info",children:E.jsx(C,{id:"ArbeidOgInntektFaktaPanel.IngenArbeidsforhold"})})}),v&&h&&!c&&E.jsx("div",{children:E.jsx(xe,{size:"small",variant:"tertiary",icon:E.jsx(yE,{"aria-hidden":!0}),onClick:()=>b(!0),children:E.jsx(C,{id:"ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold"})})}),c&&E.jsx(Zi,{behandlingUuid:e.uuid,behandlingVersjon:e.versjon,isReadOnly:!1,registrerArbeidsforhold:a,lukkArbeidsforholdRad:()=>b(!1),oppdaterTabell:u,erOverstyrt:!0,erNyttArbeidsforhold:!0})]})]})};rk.__docgenInfo={description:"",methods:[],displayName:"ArbeidsOgInntektOverstyrPanel",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
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
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
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
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},aksjonspunkt:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},tabellData:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"},description:""},settÅpneRadIndexer:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<number[]>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<number[]>",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"}]}]},description:""},setErOverstyrt:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<boolean>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<boolean>",elements:[{name:"boolean"}]}]},description:""},oppdaterTabell:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"},name:"rader"}],return:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const uO="_alertStripe_7z8j7_1",gO="_headerRow_7z8j7_5",Cl={alertStripe:uO,headerRow:gO},mO=(e,t)=>{const r=e.årsak,n=t.årsak;return r&&!n?-1:n&&!r?1:e.arbeidsgiverNavn.localeCompare(t.arbeidsgiverNavn)},kO=(e,t)=>{const{fom:r,tom:n,saksbehandlersVurdering:a,stillingsprosent:s,begrunnelse:i}=e;if(e.saksbehandlersVurdering)return e.saksbehandlersVurdering===ve.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||e.saksbehandlersVurdering===ve.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverNavn:t,fom:r,tom:n,stillingsprosent:s,saksbehandlersVurdering:a??void 0,begrunnelse:i??void 0}:{saksbehandlersVurdering:a??void 0,begrunnelse:i??void 0}},fO=({saksbehandlersVurdering:e,begrunnelse:t})=>e?{saksbehandlersVurdering:e,begrunnelse:t??void 0}:void 0,vO=e=>e.årsak?-1:1,cO=(e,t)=>{const{arbeidsforhold:r,inntektsmeldinger:n,inntekter:a}=e,s=[...r.sort(vO)].reduce((o,l)=>{var c,b;if(o.find(Zt(l)))return o;const d=r.filter(Zt(l)),g=Bl(l.arbeidsgiverIdent,t[l.arbeidsgiverIdent]),m=o_(n,l.arbeidsgiverIdent),v=((c=a.find(Zt(l)))==null?void 0:c.inntekter)??[],p={...g,årsak:l.årsak??((b=n[0])==null?void 0:b.årsak)??void 0,avklaring:kO(l,g.arbeidsgiverNavn),arbeidsforholdForRad:d,inntektsmeldingerForRad:m,inntektsposter:v};return o.concat(p)},[]),i=n.filter(o=>!r.some(l=>o.arbeidsgiverIdent===l.arbeidsgiverIdent)).map(o=>{var d;const l=Bl(o.arbeidsgiverIdent,t[o.arbeidsgiverIdent]),u=((d=a.find(Zt(o)))==null?void 0:d.inntekter)??[];return{...l,årsak:o.årsak??void 0,avklaring:fO(o),arbeidsforholdForRad:[],inntektsmeldingerForRad:[o],inntektsposter:u}});return s.concat(i).sort(mO)},Yl=e=>{const t=e.findIndex(r=>r.årsak&&!r.avklaring);return t!==-1?[t]:[]},tk=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:t,registrerArbeidsforhold:r,lagreVurdering:n,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:i})=>{const[o,l]=k.useState(!1),[u,d]=k.useState(!1),[g,m]=k.useState(!1),{alleKodeverk:v,submitCallback:p,aksjonspunkterForPanel:c,behandling:b,fagsak:T,isReadOnly:f}=dv(),h=c.length>0?c[0]:void 0,{mellomlagretFormData:R,setMellomlagretFormData:A}=lv(),[O,I]=k.useState(R??cO(e,t)),[S,P]=k.useState(Yl(O)),M=i_();k.useEffect(()=>()=>{A(O)},[O]);const j=W=>{S.some(ae=>ae===W)?P(S.filter(ae=>ae!==W)):P(S.concat(W))},L=k.useRef(null),N=W=>{var ae;I(W),P(Yl(W(O))),(ae=L==null?void 0:L.current)==null||ae.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},D=()=>{l(!0),p({kode:dn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING})},F=()=>{l(!0),i()},q=W=>{l(!0),d(!1);const{frist:ae,ventearsak:se}=W;se&&s({frist:ae,ventearsak:se})},U=O.some(W=>{var ae,se,ye;return((ae=W.avklaring)==null?void 0:ae.saksbehandlersVurdering)===ve.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING||((se=W.avklaring)==null?void 0:se.saksbehandlersVurdering)===ve.MELDING_TIL_ARBEIDSGIVER_NAV_NO||((ye=W.avklaring)==null?void 0:ye.saksbehandlersVurdering)===ve.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD}),V=O.every(W=>!W.årsak||W.årsak&&W.avklaring),B=h===void 0,X=(h==null?void 0:h.status)===Ye.UTFORT,Q=(h==null?void 0:h.status)===Ye.OPPRETTET,_e=!f&&(X||a&&B),un=!f&&Q&&V&&!M&&U,re=!f&&Q&&V&&!M&&!U;return E.jsxs(Be,{gap:"4",children:[E.jsx(rk,{behandling:b,aksjonspunkt:h,readOnly:f,arbeidOgInntekt:e,registrerArbeidsforhold:r,erOverstyrer:a,tabellData:O,settÅpneRadIndexer:P,setErOverstyrt:m,oppdaterTabell:N}),E.jsxs(Le,{ref:L,children:[E.jsx(Le.Header,{children:E.jsxs(Le.Row,{className:Cl.headerRow,children:[E.jsx(Le.HeaderCell,{scope:"col"}),E.jsx(Le.HeaderCell,{scope:"col",children:E.jsx(C,{id:"ArbeidOgInntektFaktaPanel.Arbeidsforhold"})}),E.jsx(Le.HeaderCell,{scope:"col",children:E.jsx(C,{id:"ArbeidOgInntektFaktaPanel.Periode"})}),E.jsx(Le.HeaderCell,{scope:"col",children:E.jsx(C,{id:"ArbeidOgInntektFaktaPanel.Kilde"})}),E.jsx(Le.HeaderCell,{scope:"col",children:E.jsx(C,{id:"ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt"})}),E.jsx(Le.HeaderCell,{scope:"col"})]})}),E.jsx(Le.Body,{children:O.map((W,ae)=>E.jsx(nk,{saksnummer:T.saksnummer,behandlingUuid:b.uuid,behandlingVersjon:b.versjon,radData:W,skjæringstidspunkt:e.skjæringstidspunkt,isReadOnly:f||X||B,registrerArbeidsforhold:r,lagreVurdering:n,toggleÅpenRad:()=>j(ae),erOverstyrt:g,oppdaterTabell:N,erRadÅpen:S.includes(ae),alleKodeverk:v},`${W.arbeidsgiverNavn}${W.arbeidsgiverIdent}`))})]}),un&&E.jsxs("div",{children:[E.jsx(xe,{size:"small",variant:"primary",disabled:o,onClick:()=>d(!0),type:"button",children:E.jsx(C,{id:"ArbeidOgInntektFaktaPanel.SettPaVent"})}),E.jsx(Jm,{submitCallback:q,cancelEvent:()=>d(!1),defaultVenteårsak:Qe.VENT_OPDT_INNTEKTSMELDING,hasManualPaVent:!0,ventearsaker:v[bt.VENT_AARSAK],erTilbakekreving:!1,showModal:u,frist:null})]}),re&&E.jsx("div",{children:E.jsx(xe,{size:"small",variant:"primary",disabled:o,loading:o,onClick:D,type:"button",children:E.jsx(C,{id:"ArbeidOgInntektFaktaPanel.Bekreft"})})}),_e&&E.jsxs(Be,{gap:"4",children:[E.jsx("div",{className:Cl.alertStripe,children:E.jsx(Kt,{variant:"info",children:E.jsx(C,{id:"ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring"})})}),E.jsx("div",{children:E.jsx(xe,{size:"small",variant:"secondary",disabled:o,loading:o,onClick:F,type:"button",children:E.jsx(C,{id:"ArbeidOgInntektFaktaPanel.ApneForNyVurdering"})})})]})]})};tk.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const EO={"ArbeidOgInntektFaktaPanel.Overskrift":"Fakta om arbeid og inntekt","ArbeidOgInntektFaktaPanel.Arbeidsforhold":"Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode":"Periode","ArbeidOgInntektFaktaPanel.Kilde":"Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt":"Inntektsmelding","ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding":"Innhent manglende inntektsmeldinger.","ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger":"Avklar manglende opplysninger.","ArbeidOgInntektFaktaPanel.IngenArbeidsforhold":"Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold. Det kan være i saker søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidOgInntektFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","ArbeidOgInntektFaktaPanel.SettPaVent":"Sett på vent","ArbeidOgInntektFaktaPanel.Bekreft":"Bekreft og fortsett","ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold":" Legg til arbeidsforhold","ArbeidOgInntektFaktaPanel.ApneForNyVurdering":"Åpne for ny vurdering","ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring":'Ved å bruke "Åpne for ny vurdering" kan du endre valg som er gjort i dette panelet. Det som er gjort senere i saken, må gjøres på ny.',"ArbeidsforholdRad.Saksbehandler":"Saksbehandler","ArbeidsforholdRad.AaRegisteret":"A-ordningen","ArbeidsforholdRad.Inntektsmelding":"Inntektsmelding","ArbeidsforholdRad.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdRad.Ok":"Arbeidsforhold er OK","ArbeidsforholdRad.Mottatt":"Mottatt","ArbeidsforholdRad.IkkeMottatt":"Ikke mottatt","InntektsmeldingInnhentesForm.MåInnhentes":"Må inntektsmelding innhentes?","InntektsmeldingInnhentesForm.TarKontakt":"Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding","InntektsmeldingInnhentesForm.GåVidere":"Gå videre uten inntektsmelding","InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo":"Send påminnelse via Min side - arbeidsgiver på nav.no","InntektsmeldingInnhentesForm.Begrunn":"Begrunn valget","InntektsmeldingInnhentesForm.Kommentar":"Kommentar","InntektsmeldingInnhentesForm.Lagre":"Lagre","InntektsmeldingInnhentesForm.Avbryt":"Avbryt","InntektsmeldingInnhentesForm.AltHjelpetekst":"Hjelpetekst","InntektsmeldingInnhentesForm.HjelpetekstDel1":"Vi trenger inntektsmelding for å behandle saken. Kontakt arbeidsgiveren per telefon. Hvis kontaktinformasjonen til arbeidsgiver er vanskelig å finne, kontakt bruker først.","InntektsmeldingInnhentesForm.HjelpetekstDel2":"Det er kun unntaksvis at en sak skal behandles uten inntektsmelding, f.eks. at man etter gjentatte ganger ikke oppnår kontakt. Refusjon til arbeidsgiver er ikke mulig uten en inntektsmelding.","InntektsmeldingInnhentesForm.HjelpetekstDel3":"Dersom det er flere arbeidsforhold i samme virksomhet må det sendes en inntektsmelding som gjelder samlet for alle, eller én per arbeidsforhold med arbeidsforholdsID.","InntektsmeldingInnhentesForm.InnehentAlle":"Ved flere arbeidsforhold i samme virksomhet, skal alle inntektsmeldinger innhentes. Mottas ikke alle, må du vurdere om du skal gå videre uten alle inntektsmeldingene. Gjør du det, fjernes arbeidsforholdet (ene) fra beregningen.","InntektsmeldingOpplysningerPanel.Stillingsprosent":"Stillingsprosent","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsmeldingOpplysningerPanel.ArbeidsforholdId":"ID","ManglendeOpplysningerForm.ErMottattMenIkkeReg":"Inntektsmelding er mottatt, men arbeidsforholdet er ikke registrert i A-ordningen","ManglendeOpplysningerForm.SkalBrukeInntekstmelding":"Skal vi bruke denne inntektsmeldingen?","ManglendeOpplysningerForm.TarKontakt":"Jeg kontakter arbeidsgiver","ManglendeOpplysningerForm.GåVidere":"Se bort fra inntektsmeldingen","ManglendeOpplysningerForm.OpprettArbeidsforhold":"Opprett arbeidsforhold basert på inntektsmeldingen","ManglendeOpplysningerForm.Begrunn":"Begrunn valget","ManglendeOpplysningerForm.PeriodeFra":"Periode fra","ManglendeOpplysningerForm.PeriodeTil":"Periode til","ManglendeOpplysningerForm.Stillingsprosent":"Stillingsprosent","ManglendeOpplysningerForm.Lagre":"Lagre","ManglendeOpplysningerForm.Avbryt":"Avbryt","ManglendeOpplysningerForm.AltHjelpetekst":"Hjelpetekst","ManglendeOpplysningerForm.Hjelpetekst":"Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold basert på en inntektsmelding. Det kan være i saker hvor søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidsforholdInformasjonPanel.ArbeidsforholdId":"ID","ArbeidsforholdInformasjonPanel.Stillingsprosent":"Stillingsprosent","ArbeidsforholdInformasjonPanel.Periode":"Periode","ArbeidsforholdInformasjonPanel.ImMottatt":"Inntektsmelding mottatt","ArbeidsforholdInformasjonPanel.ImIkkeMottatt":"Ikke mottatt inntektsmelding","ArbeidsforholdInformasjonPanel.Inntekter":"Inntekter (fra A-ordningen)","ArbeidsforholdInformasjonPanel.TotaltInntekter":"Inntekter totalt fra virksomheten (fra A-ordningen)","ArbeidsforholdInformasjonPanel.1":"Jan","ArbeidsforholdInformasjonPanel.2":"Feb","ArbeidsforholdInformasjonPanel.3":"Mars","ArbeidsforholdInformasjonPanel.4":"Apr","ArbeidsforholdInformasjonPanel.5":"Mai","ArbeidsforholdInformasjonPanel.6":"Jun","ArbeidsforholdInformasjonPanel.7":"Jul","ArbeidsforholdInformasjonPanel.8":"Aug","ArbeidsforholdInformasjonPanel.9":"Sep","ArbeidsforholdInformasjonPanel.10":"Okt","ArbeidsforholdInformasjonPanel.11":"Nov","ArbeidsforholdInformasjonPanel.12":"Des","ArbeidsforholdInformasjonPanel.TidligereManeder":"Tidligere måneder ","ArbeidsforholdInformasjonPanel.FaerreManeder":"Siste måneder ","ArbeidsforholdInformasjonPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-ordningen siste seks mnd.","ArbeidsforholdInformasjonPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","ArbeidsforholdInformasjonPanel.ApneImInfo":"Vis mer","ArbeidsforholdInformasjonPanel.LukkeImInfo":"Vis mindre","ArbeidsforholdInformasjonPanel.Orgnr":"Org.nr.","ArbeidsforholdInformasjonPanel.Fodselsdato":"Fødselsdato","LeggTilArbeidsforholdForm.LeggTilArbeidsforhold":"Legg til arbeidsforhold","LeggTilArbeidsforholdForm.Arbeidsgiver":"Navn på arbeidsgiver","LeggTilArbeidsforholdForm.PeriodeFra":"Periode fra","LeggTilArbeidsforholdForm.PeriodeTil":"Periode til","LeggTilArbeidsforholdForm.Stillingsprosent":"Stillingsprosent","LeggTilArbeidsforholdForm.Begrunn":"Begrunn endringene","LeggTilArbeidsforholdForm.Lagre":"Lagre","LeggTilArbeidsforholdForm.Avbryt":"Avbryt","LeggTilArbeidsforholdForm.Slett":"Slett","NyttArbeidsforholdForm.VilDuSlette":"Vil du slette arbeidsforholdet?"},pO=Sn(EO),mi=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:t,registrerArbeidsforhold:r,lagreVurdering:n,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:i})=>E.jsx(Su,{value:pO,children:E.jsx(Xm,{children:E.jsx(tk,{arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:t,registrerArbeidsforhold:r,lagreVurdering:n,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:i})})});mi.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const lr="342352362",ln={innsendingstidspunkt:"2021-12-06T00:00:00",kildeSystem:"Altinn",bortfalteNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",behandlingsIdeer:[],tilknyttedeBehandlingIder:[],aktiveNaturalytelser:[]},FO={title:"fakta/fakta-arbeid-og-inntekter",component:mi,decorators:[Fu,qu],args:{arbeidsgiverOpplysningerPerId:{},lagreVurdering:ir("onLagreVurdering"),registrerArbeidsforhold:ir("onRegistrerArbeidsforhold"),åpneForNyVurdering:ir("onÅpneForNyVurdering"),settBehandlingPåVentCallback:ir("onSettBehandlingPåVentCallback"),erOverstyrer:!1},render:e=>E.jsx(mi,{...e})},ra={args:{aksjonspunkterForPanel:[{definisjon:dn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:Ce.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:"VELFERDSPERMISJON"},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:41e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},ta={args:{aksjonspunkterForPanel:[{definisjon:dn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:Ce.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},aa={args:{aksjonspunkterForPanel:[{definisjon:dn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:Ce.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:ve.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING,begrunnelse:"Vil innehente inntektsmelding fordi..."}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},sa={args:{aksjonspunkterForPanel:[{definisjon:dn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[{...ln,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:Ce.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},ia={args:{aksjonspunkterForPanel:[{definisjon:dn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:ve.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...ln,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2",årsak:Ce.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},oa={args:{aksjonspunkterForPanel:[{definisjon:dn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:ve.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...ln,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2",årsak:Ce.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},la={args:{aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...ln,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2"}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},da={args:{aksjonspunkterForPanel:[{definisjon:dn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},ua={args:{arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},ga={args:{aksjonspunkterForPanel:[{definisjon:dn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{[lr]:{erPrivatPerson:!1,identifikator:lr,navn:"Telenor",referanse:lr}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:lr,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:ve.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},ma={args:{arbeidsgiverOpplysningerPerId:{[lr]:{erPrivatPerson:!1,identifikator:lr,navn:"Telenor",referanse:lr}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:lr,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:ve.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0,isReadOnly:!0}},ka={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:"VELFERDSPERMISJON"},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...ln,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},fa={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",fom:"2021-12-01",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",stillingsprosent:80,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...ln,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...ln,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",inntektPrMnd:1e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"41925090",motattDato:"2021-11-06",journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},va={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:dn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"},910909092:{erPrivatPerson:!1,identifikator:"910909092",navn:"DNB",referanse:"910909092"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-002",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Ce.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...ln,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...ln,arbeidsgiverIdent:"910909092",eksternArbeidsforholdId:void 0,inntektPrMnd:1e4,internArbeidsforholdId:void 0,kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"55599999",motattDato:"2021-12-06",refusjonPrMnd:5e3,journalpostId:"1",dokumentId:"2",årsak:Ce.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]},{arbeidsgiverIdent:"910909090",inntekter:[{beløp:3e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:31e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:3e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:3e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:3e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},ca={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:dn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"9374546382674846453452720241327384837356378478393893847474783",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:Ce.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Ce.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...ln,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001sdsfdsdfsdfwer",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8cwds",kontaktpersonNavn:"Espen Solstråle",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"1",motattDato:"2021-12-01",årsak:Ce.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD},{...ln,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c8wew",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:Ce.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Ea={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:dn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:void 0,permisjonOgMangel:{permisjonFom:"2022-10-01",type:"PERMITTERING"},saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d3",stillingsprosent:80,tom:"2021-12-31",årsak:Ce.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:"VELFERDSPERMISJON"},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...ln,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:void 0}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},pa={args:{erOverstyrer:!0,isReadOnly:!0,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[{...ln,inntektPrMnd:4e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"947064649",eksternArbeidsforholdId:void 0,internArbeidsforholdId:void 0,kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975324",dokumentId:"549168225",motattDato:"2022-02-15",årsak:void 0,begrunnelse:void 0,saksbehandlersVurdering:void 0}],arbeidsforhold:[],inntekter:[],skjæringstidspunkt:"2022-02-16"}}},ya={args:{erOverstyrer:!1,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[],arbeidsforhold:[{arbeidsgiverIdent:"947064649",internArbeidsforholdId:"f98840f3-e74b-4255-ac33-b1cdcdb60311",eksternArbeidsforholdId:"2",fom:"2002-02-16",tom:"9999-12-31",stillingsprosent:20,årsak:void 0,saksbehandlersVurdering:null,begrunnelse:null}],inntekter:[],skjæringstidspunkt:"2022-02-05"}}},ba={args:{erOverstyrer:!1,aksjonspunkterForPanel:[{definisjon:dn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{342352362:{erPrivatPerson:!1,referanse:"342352362",identifikator:"342352362",navn:"Lagt til av saksbehandler"},947064649:{erPrivatPerson:!1,referanse:"947064649",identifikator:"947064649",navn:"SJOKKERENDE ELEKTRIKER"},972674818:{erPrivatPerson:!1,referanse:"972674818",identifikator:"972674818",navn:"PENGELØS SPAREBANK"}},arbeidOgInntekt:{inntektsmeldinger:[{...ln,inntektPrMnd:2e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"972674818",eksternArbeidsforholdId:void 0,internArbeidsforholdId:void 0,kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975527",dokumentId:"549168458",motattDato:"2022-02-16",årsak:void 0,begrunnelse:"her vil jeg mase på AG",saksbehandlersVurdering:ve.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING}],arbeidsforhold:[{arbeidsgiverIdent:"947064649",internArbeidsforholdId:"6e220db0-5cdf-410f-b8a0-a78ac4ff87a1",eksternArbeidsforholdId:"2",fom:"2018-10-01",tom:"9999-12-31",stillingsprosent:50,årsak:Ce.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:ve.FORTSETT_UTEN_INNTEKTSMELDING,begrunnelse:"her trenger jeg ikke IM. ja ja"},{arbeidsgiverIdent:"972674818",internArbeidsforholdId:"3aee54db-af17-4b18-8c9c-897be1f4d572",eksternArbeidsforholdId:"1",fom:"2000-05-13",tom:"9999-12-31",stillingsprosent:100,årsak:void 0,saksbehandlersVurdering:null,begrunnelse:null}],inntekter:[{arbeidsgiverIdent:"947064649",inntekter:[{beløp:15e3,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]},{arbeidsgiverIdent:"972674818",inntekter:[{beløp:2e4,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]}],skjæringstidspunkt:"2022-02-15"}}},ha={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!0,fødselsdato:"2000-01-01",identifikator:"910909088",navn:"Bettan",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:"VELFERDSPERMISJON"},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...ln,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}};var Wl,zl,Jl;ra.parameters={...ra.parameters,docs:{...(Wl=ra.parameters)==null?void 0:Wl.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    } as Aksjonspunkt],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100,
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        permisjonOgMangel: {
          permisjonFom: '2022-10-01',
          permisjonTom: '2022-12-01',
          type: 'VELFERDSPERMISJON'
        },
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [],
      inntekter: [{
        arbeidsgiverIdent: '910909088',
        inntekter: [{
          beløp: 40000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }, {
          beløp: 41000,
          fom: '2021-07-01',
          tom: '2021-07-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-08-01',
          tom: '2020-08-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-09-01',
          tom: '2020-09-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2021-11-01',
          tom: '2021-11-30',
          type: 'LØNN'
        }]
      }],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(Jl=(zl=ra.parameters)==null?void 0:zl.docs)==null?void 0:Jl.source}}};var Xl,Zl,Ql;ta.parameters={...ta.parameters,docs:{...(Xl=ta.parameters)==null?void 0:Xl.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    } as Aksjonspunkt],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100,
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(Ql=(Zl=ta.parameters)==null?void 0:Zl.docs)==null?void 0:Ql.source}}};var ed,nd,rd;aa.parameters={...aa.parameters,docs:{...(ed=aa.parameters)==null?void 0:ed.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.UTFORT
    } as Aksjonspunkt],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        stillingsprosent: 100,
        tom: '9999-12-31',
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING,
        begrunnelse: 'Vil innehente inntektsmelding fordi...'
      }],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    } as ArbeidOgInntektsmelding,
    isReadOnly: true
  }
}`,...(rd=(nd=aa.parameters)==null?void 0:nd.docs)==null?void 0:rd.source}}};var td,ad,sd;sa.parameters={...sa.parameters,docs:{...(td=sa.parameters)==null?void 0:td.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    } as Aksjonspunkt],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 30000,
        refusjonPrMnd: undefined,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        journalpostId: '1',
        dokumentId: '2',
        motattDato: '2021-12-06',
        årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD
      }],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(sd=(ad=sa.parameters)==null?void 0:ad.docs)==null?void 0:sd.source}}};var id,od,ld;ia.parameters={...ia.parameters,docs:{...(id=ia.parameters)==null?void 0:id.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.UTFORT
    } as Aksjonspunkt],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2021-10-06',
        tom: '2021-12-12',
        stillingsprosent: 100,
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
        begrunnelse: 'Jeg opprettet arbeidsforhold fordi...'
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        inntektPrMnd: 30000,
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-12-06',
        refusjonPrMnd: undefined,
        journalpostId: '1',
        dokumentId: '2',
        årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD
      }],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    },
    isReadOnly: true
  }
}`,...(ld=(od=ia.parameters)==null?void 0:od.docs)==null?void 0:ld.source}}};var dd,ud,gd;oa.parameters={...oa.parameters,docs:{...(dd=oa.parameters)==null?void 0:dd.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.UTFORT
    } as Aksjonspunkt],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2021-10-06',
        tom: '2021-12-12',
        stillingsprosent: 100,
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
        begrunnelse: 'Jeg opprettet arbeidsforhold fordi...'
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        inntektPrMnd: 30000,
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-12-06',
        refusjonPrMnd: undefined,
        journalpostId: '1',
        dokumentId: '2',
        årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD
      }],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    },
    isReadOnly: false,
    erOverstyrer: true
  }
}`,...(gd=(ud=oa.parameters)==null?void 0:ud.docs)==null?void 0:gd.source}}};var md,kd,fd;la.parameters={...la.parameters,docs:{...(md=la.parameters)==null?void 0:md.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2021-10-06',
        tom: '2021-12-12',
        stillingsprosent: 100,
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        inntektPrMnd: 30000,
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-12-06',
        refusjonPrMnd: undefined,
        journalpostId: '1',
        dokumentId: '2'
      }],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    },
    isReadOnly: false,
    erOverstyrer: true
  }
}`,...(fd=(kd=la.parameters)==null?void 0:kd.docs)==null?void 0:fd.source}}};var vd,cd,Ed;da.parameters={...da.parameters,docs:{...(vd=da.parameters)==null?void 0:vd.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    } as Aksjonspunkt],
    arbeidsgiverOpplysningerPerId: {},
    arbeidOgInntekt: {
      arbeidsforhold: [],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    },
    erOverstyrer: true
  }
}`,...(Ed=(cd=da.parameters)==null?void 0:cd.docs)==null?void 0:Ed.source}}};var pd,yd,bd;ua.parameters={...ua.parameters,docs:{...(pd=ua.parameters)==null?void 0:pd.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(bd=(yd=ua.parameters)==null?void 0:yd.docs)==null?void 0:bd.source}}};var hd,Ad,Td;ga.parameters={...ga.parameters,docs:{...(hd=ga.parameters)==null?void 0:hd.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    } as Aksjonspunkt],
    arbeidsgiverOpplysningerPerId: {
      [MANUELT_ORG_NR]: {
        erPrivatPerson: false,
        identifikator: MANUELT_ORG_NR,
        navn: 'Telenor',
        referanse: MANUELT_ORG_NR
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: MANUELT_ORG_NR,
        fom: '2019-12-06',
        stillingsprosent: 100,
        tom: '2022-12-31',
        begrunnelse: 'Dette er en begrunnelse',
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER
      }],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    },
    erOverstyrer: true
  }
}`,...(Td=(Ad=ga.parameters)==null?void 0:Ad.docs)==null?void 0:Td.source}}};var Rd,Nd,Id;ma.parameters={...ma.parameters,docs:{...(Rd=ma.parameters)==null?void 0:Rd.docs,source:{originalSource:`{
  args: {
    arbeidsgiverOpplysningerPerId: {
      [MANUELT_ORG_NR]: {
        erPrivatPerson: false,
        identifikator: MANUELT_ORG_NR,
        navn: 'Telenor',
        referanse: MANUELT_ORG_NR
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: MANUELT_ORG_NR,
        fom: '2019-12-06',
        stillingsprosent: 100,
        tom: '2022-12-31',
        begrunnelse: 'Dette er en begrunnelse',
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER
      }],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    },
    erOverstyrer: true,
    isReadOnly: true
  }
}`,...(Id=(Nd=ma.parameters)==null?void 0:Nd.docs)==null?void 0:Id.source}}};var _d,Od,Sd;ka.parameters={...ka.parameters,docs:{...(_d=ka.parameters)==null?void 0:_d.docs,source:{originalSource:`{
  args: {
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        stillingsprosent: 100,
        tom: '9999-12-31',
        permisjonOgMangel: {
          permisjonFom: '2022-10-01',
          permisjonTom: '2022-12-01',
          type: 'VELFERDSPERMISJON'
        },
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        inntektPrMnd: 30000,
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-12-06',
        refusjonPrMnd: 20000,
        journalpostId: '1',
        dokumentId: '2'
      }],
      inntekter: [{
        arbeidsgiverIdent: '910909088',
        inntekter: [{
          beløp: 40000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-07-01',
          tom: '2020-07-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-08-01',
          tom: '2020-08-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-09-01',
          tom: '2020-09-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2021-11-01',
          tom: '2021-11-30',
          type: 'LØNN'
        }]
      }],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(Sd=(Od=ka.parameters)==null?void 0:Od.docs)==null?void 0:Sd.source}}};var Dd,Pd,Ld;fa.parameters={...fa.parameters,docs:{...(Dd=fa.parameters)==null?void 0:Dd.docs,source:{originalSource:`{
  args: {
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        stillingsprosent: 100,
        tom: '9999-12-31',
        saksbehandlersVurdering: null,
        begrunnelse: null
      }, {
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-002',
        fom: '2021-12-01',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa85',
        stillingsprosent: 80,
        tom: '9999-12-31',
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        inntektPrMnd: 30000,
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-12-06',
        refusjonPrMnd: 20000,
        journalpostId: '1',
        dokumentId: '2'
      }, {
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-002',
        inntektPrMnd: 10000,
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa85',
        kontaktpersonNavn: 'Espen Utvikler',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-11-06',
        journalpostId: '1',
        dokumentId: '2'
      }],
      inntekter: [{
        arbeidsgiverIdent: '910909088',
        inntekter: [{
          beløp: 40000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-07-01',
          tom: '2020-07-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-08-01',
          tom: '2020-08-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-09-01',
          tom: '2020-09-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2021-11-01',
          tom: '2021-11-30',
          type: 'LØNN'
        }]
      }],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(Ld=(Pd=fa.parameters)==null?void 0:Pd.docs)==null?void 0:Ld.source}}};var wd,jd,Md;va.parameters={...va.parameters,docs:{...(wd=va.parameters)==null?void 0:wd.docs,source:{originalSource:`{
  args: {
    erOverstyrer: true,
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      },
      910909090: {
        erPrivatPerson: false,
        identifikator: '910909090',
        navn: 'Autoservice AS',
        referanse: '910909090'
      },
      910909092: {
        erPrivatPerson: false,
        identifikator: '910909092',
        navn: 'DNB',
        referanse: '910909092'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        stillingsprosent: 100,
        tom: '9999-12-31',
        saksbehandlersVurdering: null,
        begrunnelse: null
      }, {
        arbeidsgiverIdent: '910909090',
        eksternArbeidsforholdId: 'ARB001-002',
        fom: '2019-06-06',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
        stillingsprosent: 80,
        tom: '2021-12-31',
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        inntektPrMnd: 30000,
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-12-06',
        refusjonPrMnd: 20000,
        journalpostId: '1',
        dokumentId: '2'
      }, {
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909092',
        eksternArbeidsforholdId: undefined,
        inntektPrMnd: 10000,
        internArbeidsforholdId: undefined,
        kontaktpersonNavn: 'Espen Utvikler',
        kontaktpersonNummer: '55599999',
        motattDato: '2021-12-06',
        refusjonPrMnd: 5000,
        journalpostId: '1',
        dokumentId: '2',
        årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD
      }],
      inntekter: [{
        arbeidsgiverIdent: '910909088',
        inntekter: [{
          beløp: 40000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-07-01',
          tom: '2020-07-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-08-01',
          tom: '2020-08-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-09-01',
          tom: '2020-09-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2021-11-01',
          tom: '2021-11-30',
          type: 'LØNN'
        }]
      }, {
        arbeidsgiverIdent: '910909090',
        inntekter: [{
          beløp: 30000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }, {
          beløp: 31000,
          fom: '2021-07-01',
          tom: '2021-07-31',
          type: 'LØNN'
        }, {
          beløp: 30000,
          fom: '2020-08-01',
          tom: '2020-08-31',
          type: 'LØNN'
        }, {
          beløp: 30000,
          fom: '2020-09-01',
          tom: '2020-09-30',
          type: 'LØNN'
        }, {
          beløp: 30000,
          fom: '2021-11-01',
          tom: '2021-11-30',
          type: 'LØNN'
        }]
      }],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(Md=(jd=va.parameters)==null?void 0:jd.docs)==null?void 0:Md.source}}};var Kd,Fd,qd;ca.parameters={...ca.parameters,docs:{...(Kd=ca.parameters)==null?void 0:Kd.docs,source:{originalSource:`{
  args: {
    erOverstyrer: true,
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      },
      910909090: {
        erPrivatPerson: false,
        identifikator: '910909090',
        navn: 'Autoservice AS',
        referanse: '910909090'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: '9374546382674846453452720241327384837356378478393893847474783',
        fom: '2019-12-06',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        stillingsprosent: 100,
        tom: '9999-12-31',
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        saksbehandlersVurdering: null,
        begrunnelse: null
      }, {
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: '937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783',
        fom: '2019-06-06',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
        stillingsprosent: 80,
        tom: '2021-12-31',
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 30000,
        refusjonPrMnd: undefined,
        arbeidsgiverIdent: '910909090',
        eksternArbeidsforholdId: 'ARB001-001sdsfdsdfsdfwer',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8cwds',
        kontaktpersonNavn: 'Espen Solstråle',
        kontaktpersonNummer: '41925090',
        journalpostId: '1',
        dokumentId: '1',
        motattDato: '2021-12-01',
        årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD
      }, {
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 30000,
        refusjonPrMnd: undefined,
        arbeidsgiverIdent: '910909090',
        eksternArbeidsforholdId: 'ARB001-001',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c8wew',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        journalpostId: '1',
        dokumentId: '2',
        motattDato: '2021-12-06',
        årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD
      }],
      inntekter: [{
        arbeidsgiverIdent: '910909088',
        inntekter: [{
          beløp: 40000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-07-01',
          tom: '2020-07-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-08-01',
          tom: '2020-08-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-09-01',
          tom: '2020-09-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2021-11-01',
          tom: '2021-11-30',
          type: 'LØNN'
        }]
      }],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(qd=(Fd=ca.parameters)==null?void 0:Fd.docs)==null?void 0:qd.source}}};var Vd,xd,Gd;Ea.parameters={...Ea.parameters,docs:{...(Vd=Ea.parameters)==null?void 0:Vd.docs,source:{originalSource:`{
  args: {
    erOverstyrer: true,
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      },
      910909090: {
        erPrivatPerson: false,
        identifikator: '910909090',
        navn: 'Autoservice AS',
        referanse: '910909090'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: '2433453225',
        fom: '2019-06-06',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
        stillingsprosent: 80,
        tom: '2021-12-31',
        årsak: undefined,
        permisjonOgMangel: {
          permisjonFom: '2022-10-01',
          type: 'PERMITTERING'
        },
        saksbehandlersVurdering: null,
        begrunnelse: null
      }, {
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: '937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783',
        fom: '2019-06-06',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d3',
        stillingsprosent: 80,
        tom: '2021-12-31',
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        permisjonOgMangel: {
          permisjonFom: '2022-10-01',
          permisjonTom: '2022-12-01',
          type: 'VELFERDSPERMISJON'
        },
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 30000,
        refusjonPrMnd: undefined,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: '2433453225',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        journalpostId: '1',
        dokumentId: '2',
        motattDato: '2021-12-06',
        årsak: undefined
      }],
      inntekter: [{
        arbeidsgiverIdent: '910909088',
        inntekter: [{
          beløp: 40000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-07-01',
          tom: '2020-07-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-08-01',
          tom: '2020-08-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-09-01',
          tom: '2020-09-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2021-11-01',
          tom: '2021-11-30',
          type: 'LØNN'
        }]
      }],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(Gd=(xd=Ea.parameters)==null?void 0:xd.docs)==null?void 0:Gd.source}}};var Bd,Ud,Hd;pa.parameters={...pa.parameters,docs:{...(Bd=pa.parameters)==null?void 0:Bd.docs,source:{originalSource:`{
  args: {
    erOverstyrer: true,
    isReadOnly: true,
    aksjonspunkterForPanel: [] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      947064649: {
        erPrivatPerson: false,
        identifikator: '947064649',
        navn: 'BEDRIFT AS',
        referanse: '947064649'
      }
    },
    arbeidOgInntekt: {
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 40000.0,
        refusjonPrMnd: undefined,
        arbeidsgiverIdent: '947064649',
        eksternArbeidsforholdId: undefined,
        internArbeidsforholdId: undefined,
        kontaktpersonNavn: 'Dolly Dollesen',
        kontaktpersonNummer: '99999999',
        journalpostId: '524975324',
        dokumentId: '549168225',
        motattDato: '2022-02-15',
        årsak: undefined,
        begrunnelse: undefined,
        saksbehandlersVurdering: undefined
      }],
      arbeidsforhold: [],
      inntekter: [],
      skjæringstidspunkt: '2022-02-16'
    }
  }
}`,...(Hd=(Ud=pa.parameters)==null?void 0:Ud.docs)==null?void 0:Hd.source}}};var Cd,Yd,$d;ya.parameters={...ya.parameters,docs:{...(Cd=ya.parameters)==null?void 0:Cd.docs,source:{originalSource:`{
  args: {
    erOverstyrer: false,
    aksjonspunkterForPanel: [] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      947064649: {
        erPrivatPerson: false,
        identifikator: '947064649',
        navn: 'BEDRIFT AS',
        referanse: '947064649'
      }
    },
    arbeidOgInntekt: {
      inntektsmeldinger: [],
      arbeidsforhold: [{
        arbeidsgiverIdent: '947064649',
        internArbeidsforholdId: 'f98840f3-e74b-4255-ac33-b1cdcdb60311',
        eksternArbeidsforholdId: '2',
        fom: '2002-02-16',
        tom: '9999-12-31',
        stillingsprosent: 20.0,
        årsak: undefined,
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntekter: [],
      skjæringstidspunkt: '2022-02-05'
    }
  }
}`,...($d=(Yd=ya.parameters)==null?void 0:Yd.docs)==null?void 0:$d.source}}};var Wd,zd,Jd;ba.parameters={...ba.parameters,docs:{...(Wd=ba.parameters)==null?void 0:Wd.docs,source:{originalSource:`{
  args: {
    erOverstyrer: false,
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      342352362: {
        erPrivatPerson: false,
        referanse: '342352362',
        identifikator: '342352362',
        navn: 'Lagt til av saksbehandler'
      },
      947064649: {
        erPrivatPerson: false,
        referanse: '947064649',
        identifikator: '947064649',
        navn: 'SJOKKERENDE ELEKTRIKER'
      },
      972674818: {
        erPrivatPerson: false,
        referanse: '972674818',
        identifikator: '972674818',
        navn: 'PENGELØS SPAREBANK'
      }
    },
    arbeidOgInntekt: {
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 20000.0,
        refusjonPrMnd: undefined,
        arbeidsgiverIdent: '972674818',
        eksternArbeidsforholdId: undefined,
        internArbeidsforholdId: undefined,
        kontaktpersonNavn: 'Dolly Dollesen',
        kontaktpersonNummer: '99999999',
        journalpostId: '524975527',
        dokumentId: '549168458',
        motattDato: '2022-02-16',
        årsak: undefined,
        begrunnelse: 'her vil jeg mase på AG',
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING
      }],
      arbeidsforhold: [{
        arbeidsgiverIdent: '947064649',
        internArbeidsforholdId: '6e220db0-5cdf-410f-b8a0-a78ac4ff87a1',
        eksternArbeidsforholdId: '2',
        fom: '2018-10-01',
        tom: '9999-12-31',
        stillingsprosent: 50.0,
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.FORTSETT_UTEN_INNTEKTSMELDING,
        begrunnelse: 'her trenger jeg ikke IM. ja ja'
      }, {
        arbeidsgiverIdent: '972674818',
        internArbeidsforholdId: '3aee54db-af17-4b18-8c9c-897be1f4d572',
        eksternArbeidsforholdId: '1',
        fom: '2000-05-13',
        tom: '9999-12-31',
        stillingsprosent: 100.0,
        årsak: undefined,
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntekter: [{
        arbeidsgiverIdent: '947064649',
        inntekter: [{
          beløp: 15000.0,
          fom: '2021-10-01',
          tom: '2021-02-28',
          type: 'LØNN'
        }]
      }, {
        arbeidsgiverIdent: '972674818',
        inntekter: [{
          beløp: 20000.0,
          fom: '2021-10-01',
          tom: '2021-02-28',
          type: 'LØNN'
        }]
      }],
      skjæringstidspunkt: '2022-02-15'
    }
  }
}`,...(Jd=(zd=ba.parameters)==null?void 0:zd.docs)==null?void 0:Jd.source}}};var Xd,Zd,Qd;ha.parameters={...ha.parameters,docs:{...(Xd=ha.parameters)==null?void 0:Xd.docs,source:{originalSource:`{
  args: {
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: true,
        fødselsdato: '2000-01-01',
        identifikator: '910909088',
        navn: 'Bettan',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        stillingsprosent: 100,
        tom: '9999-12-31',
        permisjonOgMangel: {
          permisjonFom: '2022-10-01',
          permisjonTom: '2022-12-01',
          type: 'VELFERDSPERMISJON'
        },
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        inntektPrMnd: 30000,
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-12-06',
        refusjonPrMnd: 20000,
        journalpostId: '1',
        dokumentId: '2'
      }],
      inntekter: [{
        arbeidsgiverIdent: '910909088',
        inntekter: [{
          beløp: 40000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }]
      }],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(Qd=(Zd=ha.parameters)==null?void 0:Zd.docs)==null?void 0:Qd.source}}};const qO=["InnhentInntektsmelding","InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret","InnhentInntektsmeldingDerBehandlingErAvsluttet","AvklarManglendeArbeidsforhold","AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet","AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig","IngenAksjonspunktMenTilbakehoppMuligForOverstyrer","SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer","SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer","ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet","ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet","ArbeidsforholdErOK","ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet","FlereArbeidsforholdOgInntekstemeldinger","ArbeidsforholdMedSammeOrgNr","ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre","FoerRegisterinnhenting","AutomatiskIgnorertInntektsmelding","EtterAtEtterspurtInntektsmeldingErKommet","SkalViseFødselsnummerForPrivatperson"];export{ma as ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet,ga as ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet,ka as ArbeidsforholdErOK,fa as ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet,ca as ArbeidsforholdMedSammeOrgNr,Ea as ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre,ya as AutomatiskIgnorertInntektsmelding,sa as AvklarManglendeArbeidsforhold,ia as AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet,oa as AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig,ba as EtterAtEtterspurtInntektsmeldingErKommet,va as FlereArbeidsforholdOgInntekstemeldinger,pa as FoerRegisterinnhenting,la as IngenAksjonspunktMenTilbakehoppMuligForOverstyrer,ra as InnhentInntektsmelding,aa as InnhentInntektsmeldingDerBehandlingErAvsluttet,ta as InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret,ua as SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer,da as SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer,ha as SkalViseFødselsnummerForPrivatperson,qO as __namedExportsOrder,FO as default};
